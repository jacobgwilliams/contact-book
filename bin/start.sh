#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! bundle check >/dev/null 2>&1; then
  echo "Ruby gems are missing. Run: bundle install"
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "Node modules are missing. Run: npm install"
  exit 1
fi

echo "Preparing database..."
bin/rails db:prepare

echo "Starting Vite..."
bin/vite dev &
VITE_PID=$!

cleanup() {
  echo
  echo "Shutting down..."
  kill "$VITE_PID" 2>/dev/null || true
  wait "$VITE_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "Starting Rails on http://localhost:3000"
bin/rails server
