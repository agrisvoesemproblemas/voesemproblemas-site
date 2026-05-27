# Design Tokens — Voe sem Problemas (Marca Real)

Projeto: Voe sem Problemas  
Atualizado: 2026-05-27 (VSP-S1-004 — alinhamento com identidade de marca)

---

## Paleta de Cores

### Backgrounds

| Token               | Hex     | Uso                                   |
|---------------------|---------|---------------------------------------|
| `bg-canvas`         | #FAFAFA | Background principal (branco suave)   |
| `bg-elevated`       | #FFFFFF | Cards, modais, superfícies elevadas   |
| `bg-surface-dark`   | #0F1E33 | Footer, hero alternativo, sections dark |

### Texto

| Token                  | Hex     | Uso                                     |
|------------------------|---------|------------------------------------------|
| `text-strong`          | #0A0F1E | Títulos, texto principal (tom azulado)   |
| `text-muted`           | #525252 | Subtítulos, descrições                   |
| `text-on-dark`         | #FFFFFF | Texto sobre surface dark                 |
| `text-on-dark-muted`   | #B5D4F4 | Texto secundário sobre surface dark      |

### Brand

| Token                  | Hex     | Uso                                      |
|------------------------|---------|------------------------------------------|
| `brand-primary`        | #1E88E5 | Azul cobalto — botões, links, accent     |
| `brand-primary-hover`  | #1976D2 | Hover do azul                            |
| `brand-primary-dark`   | #1565C0 | Gradiente / profundidade do logo         |
| `brand-navy`           | #0F1E33 | Alias semântico de surface-dark          |

### CTAs

| Token                  | Hex     | Uso                                      |
|------------------------|---------|------------------------------------------|
| `whatsapp`             | #25D366 | Verde oficial WhatsApp — CTA primário    |
| `whatsapp-hover`       | #1FB955 | Hover do CTA WhatsApp                    |
| `accent-warm`          | #FBBF24 | Amber — alerts e badges de urgência      |
| `accent-warm-hover`    | #F59E0B | Hover do amber                           |

### Sistema

| Token           | Hex     | Uso               |
|-----------------|---------|-------------------|
| `border`        | #E5E7EB | Divisores sutis   |
| `border-strong` | #D1D5DB | Bordas com ênfase |
| `success`       | #16A34A | Mensagens ok      |
| `warning`       | #F59E0B | Alertas           |
| `error`         | #DC2626 | Erros             |

---

## Tipografia

| Token         | Valor                                                                |
|---------------|----------------------------------------------------------------------|
| `font-sans`   | 'Geist', system-ui, -apple-system, BlinkMacSystemFont, sans-serif   |
| `font-mono`   | 'Geist Mono', ui-monospace, monospace                               |
| `font-display`| 'Geist', sans-serif (com font-feature-settings: "ss01", "cv11")     |

---

## Border Radius

| Token | Valor |
|-------|-------|
| `sm`  | 6px   |
| `md`  | 10px  |
| `lg`  | 14px  |
| `xl`  | 20px  |
| `2xl` | 28px  |

---

## Motion

| Token     | Duration | Easing                              |
|-----------|----------|-------------------------------------|
| micro     | 150ms    | cubic-bezier(0.16, 1, 0.3, 1)       |
| default   | 250ms    | cubic-bezier(0.16, 1, 0.3, 1)       |
| large     | 400ms    | cubic-bezier(0.16, 1, 0.3, 1)       |

---

## Decisões

- **Azul cobalto (#1E88E5):** cor central da marca existente (logo, Instagram). Transmite tecnologia, confiança e modernidade — ideal para advocacia digital.
- **Navy (#0F1E33):** profundidade e seriedade jurídica sem ser austero.
- **WhatsApp verde (#25D366) como CTA primário:** convenção do segmento jurídico BR — elimina fricção no primeiro contato.
- **Amber (#FBBF24):** alert color para urgência sem agressividade (melhor que vermelho para avisos de prazo).
- **Geist:** fonte moderna, zero-FOUT via next/font, leitura excelente em displays e mobile.
