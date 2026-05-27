# ADR-003: Identidade Visual — Alinhamento com Marca Existente

**Status:** Aceito  
**Data:** 2026-05-27  
**Substitui:** tokens genéricos da Direção B (implantados em VSP-S1-003)

## Contexto

A Dra. Agrislaine Oliveira já possui uma marca estabelecida com presença no Instagram:
logo com V-shape + avião em azul cobalto, wordmark "Voe / sem problemas" em peso diferenciado.
Os tokens da Direção B (verde-floresta + coral) eram genéricos e não correspondiam à marca real.

## Decisão

Substituir completamente a paleta Direção B pelos tokens da marca Voe sem Problemas:

| Token              | Antes (Direção B) | Depois (Marca real) |
|--------------------|-------------------|---------------------|
| `brand-primary`    | #0F5132 (verde)   | #1E88E5 (azul cobalto) |
| `brand-primary-hover` | #0D4429        | #1976D2 |
| `cta`              | #FF6B6B (coral)   | #25D366 (WhatsApp verde) |
| `bg-canvas`        | #FAFAF8           | #FAFAFA |
| `text-strong`      | #0A0A0A           | #0A0F1E (tom azulado) |
| `bg-surface-dark`  | —                 | #0F1E33 (navy) |

## Wordmark CSS-only

O componente `<BrandLogo />` em `src/components/brand/Logo.tsx` renderiza o wordmark
em CSS enquanto os PNGs oficiais não chegam. Quando chegarem (ver `public/brand/README.md`),
o componente será substituído por `<Image>` do next/image.

## WhatsApp como CTA primário

Convenção consolidada no segmento jurídico brasileiro: o botão de maior destaque
aponta para WhatsApp (#25D366, verde oficial). Reduz fricção — cliente não precisa
preencher formulário para primeiro contato.

## Próximos passos não incluídos nesta phase

- Schema.org `Attorney` e `LegalService` — Phase B
- Favicon com ícone da marca — quando PNGs chegarem
- Open Graph image com logo — Sprint 2
