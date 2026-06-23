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
FOOD_FILL = 0.90
TARGET_ASPECT = 4 / 3

ITEMS = [
    ("dessert_macaron.webp", "마카롱", 12, 52),
    ("dessert_chocolate_cake.webp", "초코케익", 12, 54),
    ("dessert_fruit_pudding.webp", "과일푸딩", 12, 54),
    ("dessert_pineapple.webp", "파인애플", 28, 34),
    ("dessert_orange.webp", "오렌지", 28, 36),
    ("dessert_melon.webp", "매론", 28, 36),
    ("dessert_mini_udon.webp", "미니우동", 28, 38),
    ("dessert_mini_soba.webp", "미니냉모밀", 28, 36),
]

BOXES = [
    (875, 64, 1253, 298),
    (1271, 64, 1674, 298),
    (1668, 64, 2045, 298),
    (80, 288, 478, 558),
    (483, 288, 866, 558),
    (867, 288, 1261, 558),
    (1262, 288, 1657, 558),
    (1658, 288, 2041, 558),
]


def trim_border(crop: Image.Image, inset: int) -> Image.Image:
    w, h = crop.size
    if w <= inset * 2 + 12 or h <= inset * 2 + 12:
        return crop
    return crop.crop((inset, inset, w - inset, h - inset))


def trim_white_tail(crop: Image.Image) -> Image.Image:
    gray = np.array(crop.convert("RGB")).mean(axis=2)
    h, w = gray.shape
    cut = h
    streak = 0

    for y in range(h - 1, -1, -1):
        if gray[y].mean() > 248:
            streak += 1
            cut = y
        elif streak >= 2:
            break
        else:
            streak = 0

    if cut < h:
        return crop.crop((0, 0, w, cut))
    return crop


def trim_label_band(crop: Image.Image, label_cut: int) -> Image.Image:
    crop = trim_white_tail(crop)
    w, h = crop.size
    keep_h = max(1, h - label_cut)
    return crop.crop((0, 0, w, keep_h))


def strip_outer_black_rim(crop: Image.Image, max_depth: int = 20) -> Image.Image:
    gray = np.array(crop.convert("L"))
    top, left, bottom, right = 0, 0, gray.shape[0], gray.shape[1]

    for _ in range(max_depth):
        ring = np.concatenate(
            [
                gray[top, left:right],
                gray[bottom - 1, left:right],
                gray[top:bottom, left],
                gray[top:bottom, right - 1],
            ]
        )
        if ring.size == 0:
            break
        if (ring < 35).mean() > 0.22 and ring.mean() < 90:
            if top + 2 < bottom:
                top += 1
            if bottom - 2 > top:
                bottom -= 1
            if left + 2 < right:
                left += 1
            if right - 2 > left:
                right -= 1
        else:
            break

    return crop.crop((left, top, right, bottom))


def strip_pure_black_columns(crop: Image.Image) -> Image.Image:
    gray = np.array(crop.convert("L"))
    h, w = gray.shape
    left, right = 0, w

    while left < w - 8 and gray[:, left].mean() < 35:
        left += 1
    while right > left + 8 and gray[:, right - 1].mean() < 35:
        right -= 1

    return crop.crop((left, 0, right, h))


def shave_dark_edges(crop: Image.Image, max_pass: int = 8) -> Image.Image:
    gray = np.array(crop.convert("L"))
    top, left, bottom, right = 0, 0, gray.shape[0], gray.shape[1]

    for _ in range(max_pass):
        edge_means = [
            gray[top, left:right].mean(),
            gray[bottom - 1, left:right].mean(),
            gray[top:bottom, left].mean(),
            gray[top:bottom, right - 1].mean(),
        ]
        if min(edge_means) > 58:
            break
        if edge_means[0] < 58:
            top += 1
        if edge_means[1] < 58:
            bottom -= 1
        if edge_means[2] < 58:
            left += 1
        if edge_means[3] < 58:
            right -= 1

    return crop.crop((left, top, right, bottom))


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


def process_card(crop: Image.Image, border_inset: int, label_cut: int) -> Image.Image:
    framed = trim_border(crop, border_inset)
    no_label = trim_label_band(framed, label_cut)
    cleaned = strip_outer_black_rim(no_label)
    cleaned = strip_pure_black_columns(cleaned)
    cleaned = shave_dark_edges(cleaned)
    squared = pad_to_aspect(cleaned)
    return fit_on_canvas(squared)


def main() -> None:
    img = Image.open(SOURCE).convert("RGB")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for (filename, label, border_inset, label_cut), box in zip(ITEMS, BOXES, strict=True):
        card = img.crop(box)
        final = process_card(card, border_inset, label_cut)
        out_path = OUTPUT_DIR / filename
        final.save(out_path, format="WEBP", quality=88, method=6)
        print(f"Saved {label} -> {out_path.name} ({final.size[0]}x{final.size[1]})")


if __name__ == "__main__":
    main()
