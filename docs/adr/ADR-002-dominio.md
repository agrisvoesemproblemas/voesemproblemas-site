# ADR-002: Estratégia de Domínio

**Status:** Aceito  
**Data:** 2026-05-27  
**Contexto:** Escolha de domínio canônico para o site

## Decisão

- **Canônico:** `voesemproblemas.com`
- **Redirect 301:** `voesemproblemas.adv.br` → `voesemproblemas.com`

## Justificativa

- `.com` tem maior reconhecimento pelo público leigo (consumidores de passagem aérea, não necessariamente advogados).
- `.adv.br` reforça credencial profissional OAB e pode capturar buscas de pares jurídicos ou clientes que pesquisam "advogado voo".
- 301 garante que todo PageRank do `.adv.br` seja consolidado no `.com`.
- Implementação: configurar ambos os domínios no Vercel, definir `.com` como primary, adicionar redirect middleware no Sprint 5.

## Consequências

- Até Sprint 5, o site roda na URL Vercel de preview (*.vercel.app).
- Os dois domínios precisam ser adquiridos e configurados nos DNS antes do Sprint 5.
- `voesemproblemas.adv.br` requer registro no Registro.br (domínio `.adv.br` é restrito a advogados OAB).
