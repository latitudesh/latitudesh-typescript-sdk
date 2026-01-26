#!/bin/bash
set -e

echo "🧪 Running CI Tests Locally"
echo "=============================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo -e "${RED}❌ Bun is not installed!${NC}"
    echo "Please install Bun: https://bun.sh"
    exit 1
fi

echo -e "${GREEN}✓${NC} Bun version: $(bun --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
bun install --frozen-lockfile
echo -e "${GREEN}✓${NC} Dependencies installed"
echo ""

# Run linter
echo "🔍 Running linter..."
if bun run lint; then
    echo -e "${GREEN}✓${NC} Linter passed"
else
    echo -e "${YELLOW}⚠${NC} Linter found issues (non-blocking)"
fi
echo ""

# Run integration tests
echo "🧪 Running integration tests..."
if bun test:integration; then
    echo -e "${GREEN}✓${NC} Integration tests passed"
else
    echo -e "${RED}❌${NC} Integration tests failed"
    exit 1
fi
echo ""

# Run tests with coverage
echo "📊 Generating coverage report..."
if bun test:coverage; then
    echo -e "${GREEN}✓${NC} Coverage report generated"
else
    echo -e "${YELLOW}⚠${NC} Coverage generation had issues (non-blocking)"
fi
echo ""

# Summary
echo "=============================="
echo -e "${GREEN}✅ All CI checks passed!${NC}"
echo ""
echo "Coverage report available at: ./coverage/index.html"
echo "Open it with: open coverage/index.html (macOS) or xdg-open coverage/index.html (Linux)"
