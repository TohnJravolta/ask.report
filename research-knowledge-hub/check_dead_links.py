#!/usr/bin/env python3
"""Check for dead wikilinks in the knowledge hub."""

import os
import re
from pathlib import Path

# Read all wikilinks
with open('all_wikilinks.txt', 'r', encoding='utf-8') as f:
    wikilinks = [line.strip() for line in f if line.strip()]

# Extract link targets (remove [[ ]] and alias parts)
def extract_target(wikilink):
    # Remove [[ and ]]
    link = wikilink.strip('[]')
    # Remove quotes if present
    link = link.strip('"')
    # Split on | to get target (before alias)
    if '|' in link:
        link = link.split('|')[0]
    return link.strip()

targets = [extract_target(link) for link in wikilinks]
unique_targets = sorted(set(targets))

# Find all markdown files in knowledge hub
hub_dir = Path('.')
all_md_files = list(hub_dir.rglob('*.md'))
file_names = set()
for md_file in all_md_files:
    # Store both full name and name without extension
    file_names.add(md_file.stem)
    file_names.add(md_file.name)
    # Also store relative path without extension
    rel_path = str(md_file.relative_to(hub_dir))
    file_names.add(rel_path)
    file_names.add(rel_path.replace('.md', ''))

# Check which targets don't exist
dead_links = []
for target in unique_targets:
    # Check if any file matches this target
    found = False
    for file_name in file_names:
        if target in file_name or file_name in target:
            found = True
            break
    if not found:
        dead_links.append(target)

print(f"Total unique link targets: {len(unique_targets)}")
print(f"Dead links found: {len(dead_links)}")
print("\n=== DEAD LINKS ===\n")
for link in sorted(dead_links):
    print(f"- [[{link}]]")
