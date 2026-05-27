# ADR-001: Stack Tecnológica

**Status:** Aceito  
**Data:** 2026-05-27  
**Contexto:** Escolha da stack para o site Voe sem Problemas (advocacia de passageiro aéreo)

## Decisão

Next.js 15+ (App Router) + React 19 + TypeScript 5.6+ (strict) + Tailwind CSS v4 + shadcn/ui + Framer Motion 11 + Lucide React. Package manager: pnpm. Deploy: Vercel.

## Justificativa

- **Next.js App Router**: SSR/SSG nativos, SEO excelente (crítico para captura orgânica), Server Components reduzem JS no cliente.
- **React 19**: Server Actions simplificam formulário de triagem sem API route extra.
- **TypeScript strict**: Reduz bugs em runtime, especialmente em dados de formulário e integração Supabase.
- **Tailwind v4**: Zero-config, CSS-native, bundle menor, melhor performance.
- **shadcn/ui**: Componentes acessíveis (a11y), sem lock-in (cópia local), compatível com Radix UI.
- **Vercel**: Deploy automático, Edge Network, Analytics integrado, domínio custom gratuito no plano Pro.
- **pnpm**: Mais rápido que npm/yarn, economiza espaço em disco com hard links.

## Consequências

- Tailwind v4 não usa `tailwind.config.ts` — tokens vivem no `globals.css` via `@theme`.
- shadcn/ui em modo Tailwind v4 requer sobrescrita manual de CSS variables.
- Framer Motion será instalado apenas no Sprint que o requer (não agora).
