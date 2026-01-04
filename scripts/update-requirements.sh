#!/usr/bin/env bash
set -euo pipefail
# Regenerate requirements.txt with currently installed package versions.
# Run this after upgrading dependencies with pip.

out_dir="$(cd "$(dirname "$0")/.." && pwd)"
req_file="$out_dir/requirements.txt"

cat > "$req_file" <<'HEADER'
# Pinned dependencies for building the site.
# To refresh versions, run scripts/update-requirements.sh
HEADER

packages=(
    mkdocs
    "mkdocs-material[imaging]"
    mkdocs-git-revision-date-localized-plugin
    mkdocs-newsletter
    mkdocs-autolinks-plugin
    mkdocs-section-index
)

for pkg in "${packages[@]}"; do
    base="${pkg%%[*}"
    version=$(python - <<PY
import importlib.metadata, sys
sys.stdout.write(importlib.metadata.version("${base}"))
PY
)
    echo "${pkg}==${version}" >> "$req_file"
done

echo "Updated $req_file"
