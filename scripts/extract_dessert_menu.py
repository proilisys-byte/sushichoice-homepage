"""Extract dessert/fruit menu items from menu board image and save as webp."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "picture" / "디저트.과일류.jpg"
OUTPUT_DIR = ROOT / "src" / "assets" / "images" / "menu"

# Order: left-to-right, top-to-bottom on menu board
ITEMS = [
    ("dessert_macaron.webp", "마카롱"),
    ("dessert_chocolate_cake.webp", "초코케익"),
    ("dessert_fruit_pudding.webp", "과일푸딩"),
    ("dessert_pineapple.webp", "파인애플"),
    ("dessert_orange.webp", "오렌지"),
    ("dessert_melon.webp", "매론"),
    ("dessert_mini_udon.webp", "미니우동"),
    ("dessert_mini_soba.webp", "미니냉모밀"),
]

# Verified boxes for picture/디저트.과일류.jpg (2128×593)
BOXES = [
    (879, 95, 1249, 305),   # 마카롱
    (1275, 95, 1670, 305),  # 초코케익
    (1672, 95, 2041, 305),  # 과일푸딩
    (80, 307, 478, 565),    # 파인애플 (title column)
    (483, 307, 866, 565),   # 오렌지
    (867, 307, 1261, 565),  # 매론
    (1262, 307, 1657, 565), # 미니우동
    (1658, 307, 2041, 565), # 미니냉모밀
]

BORDER_TRIM = 10


def trim_border(crop: Image.Image) -> Image.Image:
    w, h = crop.size
    inset = BORDER_TRIM
    if w <= inset * 2 + 10 or h <= inset * 2 + 10:
        return crop
    return crop.crop((inset, inset, w - inset, h - inset))


def main() -> None:
    img = Image.open(SOURCE).convert("RGB")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for (filename, label), box in zip(ITEMS, BOXES, strict=True):
        cleaned = trim_border(img.crop(box))
        out_path = OUTPUT_DIR / filename
        cleaned.save(out_path, format="WEBP", quality=88, method=6)
        print(f"Saved {label} -> {out_path.name} ({cleaned.size[0]}x{cleaned.size[1]})")


if __name__ == "__main__":
    main()
