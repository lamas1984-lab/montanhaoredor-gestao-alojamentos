#!/usr/bin/env bash
set -euo pipefail

ROOT="/home/ubuntu/montanhaoredor-gestao-alojamentos"
PROTECTED_ONE="/home/ubuntu/montanhaoredor-site"
PROTECTED_TWO="/home/ubuntu/montanhaoredor-transfers-tours"

cd "$ROOT"

if find . -path ./node_modules -prune -o -path ./.git -prune -o -type l -print -quit | grep -q .; then
  echo "Falha: foram encontradas ligações simbólicas."
  exit 1
fi

if grep -R --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.git -nE "(/home/ubuntu/montanhaoredor-site|/home/ubuntu/montanhaoredor-transfers-tours)" src package.json vite.config.ts 2>/dev/null; then
  echo "Falha: referência interna a outro projeto."
  exit 1
fi

if [ ! -d "$PROTECTED_ONE/.git" ] || [ ! -d "$PROTECTED_TWO/.git" ]; then
  echo "Falha: projetos protegidos não encontrados."
  exit 1
fi

echo "Isolamento confirmado: o projeto de gestão é independente."
