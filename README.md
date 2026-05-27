# Voe sem Problemas — Site institucional

Advocacia especializada em direitos do passageiro aéreo.  
Dra. Agrislaine Oliveira · OAB/SC 53.583 · OAB/SP 505.951

## Stack

Next.js 16 · React 19 · TypeScript 5 (strict) · Tailwind v4 · shadcn/ui · Vercel

## Requisitos

- Node.js ≥ 20
- pnpm ≥ 11

## Comandos

```bash
pnpm install        # instalar dependências
pnpm dev            # dev server em localhost:3000
pnpm build          # build de produção
pnpm exec tsc --noEmit   # type check
pnpm exec eslint src/    # lint
```

## Deploy

Auto-deploy via Vercel:
- `main` → produção (`voesemproblemas-site.vercel.app`)
- `dev` → preview URL (gerada por push)

## Documentação

| Documento | Descrição |
|-----------|-----------|
| [docs/PROJECT.md](docs/PROJECT.md) | Project Bible — fonte da verdade sobre produto, escopo, decisões |
| [docs/WORKFLOW.md](docs/WORKFLOW.md) | Manual de procedimentos de produção |
| [docs/DAILY-PROMPTS.md](docs/DAILY-PROMPTS.md) | Prompts de início de sessão Cowork e Code |
| [docs/design-tokens.md](docs/design-tokens.md) | Paleta de cores, tipografia, spacing, motion |
| [docs/adr/](docs/adr/) | Architecture Decision Records |

## Brand assets

Os logos PNG da marca ficam em `public/brand/` — ver `public/brand/README.md`.
