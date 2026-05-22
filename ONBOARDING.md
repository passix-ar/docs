# Onboarding — workspace Passix

Cómo dejar el workspace andando de cero.

## 1. Requisitos en tu Mac

```bash
# Homebrew (si no lo tenés)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git gh node
# Docker Desktop: instalalo desde docker.com y abrilo
```

## 2. Clonar los repos

Los 4 repos viven en la org de GitHub. Cloná dentro de una carpeta `passix/`:

```bash
mkdir passix && cd passix
git clone git@github.com:passix/docs.git
git clone git@github.com:passix/landing.git
git clone git@github.com:passix/infra.git
# el fork de Hi.Events:
git clone git@github.com:passix/hi-events.git
cd hi-events && git remote add upstream https://github.com/HiEventsDev/hi.events.git && cd ..
```

(O usá `./bootstrap.sh` del repo raíz si trabajás con el workspace empaquetado.)

## 3. Landing

```bash
cd landing
npm install
npm run dev          # http://localhost:4321
```

## 4. Validación local de Hi.Events

```bash
cd infra/local
./gen-secrets.sh     # crea .env con claves frescas
docker compose up -d
# http://localhost:8123/auth/register
```

Ver `infra/local/RUNBOOK.md` para el detalle y el checklist de validación.

## Reglas de oro

- `.env` nunca se commitea. Secretos se generan, no se hardcodean.
- `landing` e `infra` privados; `hi-events` público. No mezclar (D3).
- Toda decisión importante → `docs/DECISIONS.md`.
