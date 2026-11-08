"""Regenerate category index files for MIGs Pages CMS JSON collections.

Run from any directory: python scripts/update_indexes.py
"""
from __future__ import annotations

import json
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
CATEGORIES = ("short-term", "working-holiday")


def generate_index(category: str) -> bool:
    folder = ROOT / "data" / category
    entries = []
    for path in sorted(folder.glob("*.json")):
        if path.name == "index.json":
            continue
        try:
            item = json.loads(path.read_text(encoding="utf-8-sig"))
        except (ValueError, UnicodeError) as exc:
            raise ValueError(f"Invalid JSON in {path.relative_to(ROOT)}: {exc}") from exc
        if not isinstance(item, dict):
            raise ValueError(f"Expected a JSON object in {path.relative_to(ROOT)}")
        slug = item.get("slug")
        if slug != path.stem:
            print(f"WARNING: {path.relative_to(ROOT)} has slug {slug!r}; expected {path.stem!r}", file=sys.stderr)
        order = item.get("order")
        try:
            order_key = float(order) if order is not None and str(order).strip() else float("inf")
        except (TypeError, ValueError):
            order_key = float("inf")
        entries.append((order_key, path.stem))

    # Keep unpublished entries in the index. The site's JS filters published=false,
    # so toggling publication in Pages CMS does not require hand-editing the index.
    entries.sort(key=lambda row: (row[0], row[1]))
    names = [slug for _, slug in entries]
    target = folder / "index.json"
    new_content = json.dumps(names, ensure_ascii=False, indent=2) + "\n"
    previous = target.read_text(encoding="utf-8") if target.exists() else None
    if previous != new_content:
        target.write_text(new_content, encoding="utf-8")
        print(f"Updated {target.relative_to(ROOT)}: {', '.join(names)}")
        return True
    print(f"Already current: {target.relative_to(ROOT)}")
    return False


if __name__ == "__main__":
    try:
        changed = sum(generate_index(category) for category in CATEGORIES)
    except (OSError, ValueError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        sys.exit(1)
    print(f"Updated {changed} index file(s).")
