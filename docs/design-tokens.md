# Design Tokens — Direção B (Tech Boutique Moderno)

Projeto: Voe sem Problemas  
Visual direction: B — Tech Boutique Moderno  
Updated: 2026-05-27

---

## Paleta de Cores

| Token            | Hex      | Uso                                      |
|------------------|----------|------------------------------------------|
| `bg-canvas`      | #FAFAF8  | Background principal (off-white quente)  |
| `bg-elevated`    | #FFFFFF  | Cards, modais, superfícies elevadas      |
| `text-strong`    | #0A0A0A  | Títulos, texto principal                 |
| `text-muted`     | #525252  | Subtítulos, descrições                   |
| `accent`         | #0F5132  | Verde-floresta — êxito, confiança, links |
| `accent-hover`   | #0D4429  | Hover do accent                          |
| `cta`            | #FF6B6B  | Coral — CTAs de urgência, botão primário |
| `cta-hover`      | #E85D5D  | Hover do CTA                             |
| `border`         | #E5E5E5  | Divisores, bordas sutis                  |
| `success`        | #16A34A  | Mensagens de sucesso                     |
| `warning`        | #F59E0B  | Alertas                                  |
| `error`          | #DC2626  | Erros, validação                         |

---

## Tipografia

| Token           | Valor                                                                          |
|-----------------|--------------------------------------------------------------------------------|
| `font-sans`     | 'Geist', system-ui, -apple-system, BlinkMacSystemFont, sans-serif              |
| `font-mono`     | 'Geist Mono', ui-monospace, monospace                                          |
| `font-display`  | 'Geist', sans-serif (com font-feature-settings: "ss01", "cv11")                |

Fonte carregada via `next/font/google` (Geist + Geist Mono) em `app/layout.tsx`.

---

## Escala de Espaçamento

Padrão Tailwind (base 4px):
- `spacing-1` = 4px, `spacing-2` = 8px, `spacing-4` = 16px, `spacing-8` = 32px, etc.

---

## Border Radius

| Token  | Valor |
|--------|-------|
| `sm`   | 6px   |
| `md`   | 10px  |
| `lg`   | 14px  |
| `xl`   | 20px  |
| `2xl`  | 28px  |

---

## Sombras

Estilo shadcn/ui — sutis, sem drop-shadow exagerado:
- `shadow-sm`: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- `shadow`: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`
- `shadow-md`: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- `shadow-lg`: `0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.08)`

---

## Motion

| Token     | Duration | Easing                              |
|-----------|----------|-------------------------------------|
| micro     | 150ms    | cubic-bezier(0.16, 1, 0.3, 1)       |
| default   | 250ms    | cubic-bezier(0.16, 1, 0.3, 1)       |
| large     | 400ms    | cubic-bezier(0.16, 1, 0.3, 1)       |

Curva "suave, premium" — easing consistente em todas as durações.

---

## Decisões de Design

- **Por que verde-floresta (#0F5132)?** Transmite autoridade jurídica, confiança, êxito — alinhado ao posicionamento da Dra. Agrislaine Oliveira.
- **Por que coral (#FF6B6B) nos CTAs?** Urgência sem agressividade. Contraste forte sobre o fundo off-white.
- **Off-white (#FAFAF8) vs branco puro:** Reduz fadiga ocular em leitura longa de conteúdo jurídico.
- **Geist:** Fonte moderna, legível, usada pelo Vercel. Carregamento zero-FOUT via next/font.
