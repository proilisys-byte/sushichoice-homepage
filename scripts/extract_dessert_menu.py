"""Convert dessert/fruit menu PNGs to 640x480 webp menu assets."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "picture" / "디저트 과일류"
OUTPUT_DIR = ROOT / "src" / "assets" / "images" / "menu"

CANVAS_SIZE = (640, 480)
CANVAS_BG = (217, 214, 208)
FOOD_FILL = 0.90
TARGET_ASPECT = 4 / 3

ITEMS = [
    ("마카롱.png", "dessert_macaron.webp", "마카롱"),
    ("초코케익.png", "dessert_chocolate_cake.webp", "초코케익"),
    ("과일푸팅.png", "dessert_fruit_pudding.webp", "과일푸딩"),
    ("파인애플.png", "dessert_pineapple.webp", "파인애플"),
    ("오렌지.png", "dessert_orange.webp", "오렌지"),
    ("멜론.png", "dessert_melon.webp", "멜론"),
    ("미니우동.png", "dessert_mini_udon.webp", "미니우동"),
    ("미니 냉모밀.png", "dessert_mini_soba.webp", "미니냉모밀"),
]


def flatten_image(img: Image.Image) -> Image.Image:
    if img.mode == "RGBA":
        base = Image.new("RGB", img.size, CANVAS_BG)
        base.paste(img, mask=img.split()[3])
        return base
    return img.convert("RGB")


def pad_to_aspect(crop: Image.Image) -> Image.Image:
    w, h = crop.size
    current = w / h

    if abs(current - TARGET_ASPECT) < 0.03:
        return crop

    if current > TARGET_ASPECT:
        new_h = int(w / TARGET_ASPECT)
        canvas = Image.new("RGB", (w, new_h), CANVAS_BG)
        canvas.paste(crop, (0, (new_h - h) // 2))
        return canvas

    new_w = int(h * TARGET_ASPECT)
    canvas = Image.new("RGB", (new_w, h), CANVAS_BG)
    canvas.paste(crop, ((new_w - w) // 2, 0))
    return canvas


def fit_on_canvas(crop: Image.Image) -> Image.Image:
    canvas = Image.new("RGB", CANVAS_SIZE, CANVAS_BG)
    fw, fh = crop.size
    max_w = int(CANVAS_SIZE[0] * FOOD_FILL)
    max_h = int(CANVAS_SIZE[1] * FOOD_FILL)
    scale = min(max_w / fw, max_h / fh)
    new_size = (max(1, int(fw * scale)), max(1, int(fh * scale)))
    resized = crop.resize(new_size, Image.Resampling.LANCZOS)

    x = (CANVAS_SIZE[0] - new_size[0]) // 2
    y = (CANVAS_SIZE[1] - new_size[1]) // 2
    canvas.paste(resized, (x, y))
    return canvas


def process_source(path: Path) -> Image.Image:
    img = flatten_image(Image.open(path))
    framed = pad_to_aspect(img)
    return fit_on_canvas(framed)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for source_name, output_name, label in ITEMS:
        source_path = SOURCE_DIR / source_name
        if not source_path.exists():
            raise FileNotFoundError(f"Missing source image: {source_path}")

        final = process_source(source_path)
        out_path = OUTPUT_DIR / output_name
        final.save(out_path, format="WEBP", quality=88, method=6)
        print(f"Saved {label} -> {out_path.name} ({final.size[0]}x{final.size[1]})")


if __name__ == "__main__":
    main()
