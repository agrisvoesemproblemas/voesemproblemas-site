# ADR-006 — Remover Calculadora de Indenização do escopo

**Status:** Aceito  
**Data:** 2026-05-27  
**Autor:** Jonatas Donato + Claude Cowork

## Contexto

O roadmap original previa uma calculadora de indenização em `/calcular` (Sprint 3). A funcionalidade seria: cliente informa tipo de problema + companhia + detalhes → recebe estimativa de faixa de valor.

## Decisão

Remover completamente a Calculadora de todos os sprints e da Home.

## Razão

Cada caso aéreo é individual. Uma calculadora genérica gera uma estimativa que pode divergir significativamente do valor real, criando falsa expectativa no cliente. Quando o resultado do processo for diferente — menor que o esperado — a calculadora terá prejudicado a relação de confiança.

A alternativa é mais honesta e mais eficaz: "Análise gratuita via WhatsApp" como caminho único. A Dra. avalia cada caso individualmente e dá uma estimativa real, não algorítmica.

## Consequências

- Remove `/calcular` do sitemap e do roadmap
- Remove "Calculadora" do Header, MobileTabBar, Footer, Decision Tree e sitemap.ts
- Sprint 3 refoca em: `/servicos/[slug]`, `/sobre`, `/faq` (páginas institucionais), sem calculadora
- Em todos os pontos onde antes apontava para "Calcular", agora aponta para WhatsApp ou `/caso`
- Nenhum componente de calculadora será criado
