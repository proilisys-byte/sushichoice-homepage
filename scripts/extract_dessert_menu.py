"""Extract dessert/fruit menu items from menu board image and save as webp."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "picture" / "디저트.과일류.jpg"
OUTPUT_DIR = ROOT / "src" / "assets" / "images" / "menu"

CANVAS_SIZE = (640, 480)
CANVAS_BG = (217, 214, 208)
FOOD_FILL = 0.68

ITEMS = [
    ("dessert_macaron.webp", "마카롱", "top", 0.66, 14),
    ("dessert_chocolate_cake.webp", "초코케익", "top", 0.66, 14),
    ("dessert_fruit_pudding.webp", "과일푸딩", "top", 0.66, 14),
    ("dessert_pineapple.webp", "파인애플", "bottom", 0.74, 20),
    ("dessert_orange.webp", "오렌지", "bottom", 0.74, 14),
    ("dessert_melon.webp", "매론", "bottom", 0.74, 14),
    ("dessert_mini_udon.webp", "미니우동", "bottom", 0.77, 14),
    ("dessert_mini_soba.webp", "미니냉모밀", "bottom", 0.77, 14),
]

TARGET_ASPECT = 4 / 3

BOXES = [
    (879, 95, 1249, 305),
    (1275, 95, 1670, 305),
    (1672, 95, 2041, 305),
    (80, 307, 478, 565),
    (483, 307, 866, 565),
    (867, 307, 1261, 565),
    (1262, 307, 1657, 565),
    (1658, 307, 2041, 565),
]

def trim_border(crop: Image.Image, inset: int = 14) -> Image.Image:
    w, h = crop.size
    if w <= inset * 2 + 10 or h <= inset * 2 + 10:
        return crop
    return crop.crop((inset, inset, w - inset, h - inset))


def remove_label_band(crop: Image.Image, keep_ratio: float) -> Image.Image:
    w, h = crop.size
    keep_h = max(1, int(h * keep_ratio))
    return crop.crop((0, 0, w, keep_h))


def trim_horizontal_margins(crop: Image.Image) -> Image.Image:
    """Remove empty side margins while keeping full food height."""
    arr = np.array(crop.convert("RGB"))
    h, w, _ = arr.shape
    r = arr[..., 0].astype(np.float32)
    g = arr[..., 1].astype(np.float32)
    b = arr[..., 2].astype(np.float32)
    white_dist = np.sqrt((255 - r) ** 2 + (255 - g) ** 2 + (255 - b) ** 2)
    col_has_content = (white_dist > 22).any(axis=0)

    xs = np.where(col_has_content)[0]
    if len(xs) == 0:
        return crop

    pad = max(8, int(w * 0.03))
    left = max(0, int(xs.min()) - pad)
    right = min(w, int(xs.max()) + pad + 1)
    return crop.crop((left, 0, right, h))


def pad_to_aspect(crop: Image.Image) -> Image.Image:
    """Pad (not crop) to 4:3 so the full dish stays visible."""
    w, h = crop.size
    current = w / h

    if abs(current - TARGET_ASPECT) < 0.04:
        return crop

    if current > TARGET_ASPECT:
        new_h = max(h, int(w / TARGET_ASPECT))
        canvas = Image.new("RGB", (w, new_h), CANVAS_BG)
        canvas.paste(crop, (0, (new_h - h) // 2))
        return canvas

    new_w = max(w, int(h * TARGET_ASPECT))
    canvas = Image.new("RGB", (new_w, h), CANVAS_BG)
    canvas.paste(crop, ((new_w - w) // 2, 0))
    return canvas


def reframe_on_canvas(crop: Image.Image) -> Image.Image:
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


def process_card(crop: Image.Image, keep_ratio: float) -> Image.Image:
    no_label = remove_label_band(crop, keep_ratio)
    trimmed = trim_horizontal_margins(no_label)
    framed = pad_to_aspect(trimmed)
    return reframe_on_canvas(framed)


def main() -> None:
    img = Image.open(SOURCE).convert("RGB")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for (filename, label, _row, keep_ratio, border_inset), box in zip(ITEMS, BOXES, strict=True):
        card = trim_border(img.crop(box), border_inset)
        final = process_card(card, keep_ratio)
        out_path = OUTPUT_DIR / filename
        final.save(out_path, format="WEBP", quality=88, method=6)
        print(f"Saved {label} -> {out_path.name} ({final.size[0]}x{final.size[1]})")


if __name__ == "__main__":
    main()
