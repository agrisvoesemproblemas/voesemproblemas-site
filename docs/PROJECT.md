# Project Bible — Voe sem Problemas

**Documento mestre.** Última atualização: 27/05/2026.

Este é o ÚNICO documento canônico sobre o projeto. Decisões, escopo, contatos, direção criativa, sprints, ADRs, tudo aqui. Se você ou eu (Claude) precisar reconstruir contexto, este arquivo basta.

Se algo mudar ou for decidido fora deste documento, **atualize aqui imediatamente** — caso contrário a fonte da verdade fica fragmentada e perde valor.

---

## 1. Visão geral do projeto

**Cliente:** Dra. Agrislaine Oliveira
**Escritório / Nome fantasia:** Voe sem Problemas
**Cargo:** Advogada · proprietária do escritório
**Nicho:** Advocacia especializada em direitos do passageiro aéreo
**Modelo de atuação:** 100% online, todo Brasil
**Modelo comercial:** Honorários 30% sobre o êxito. Zero custo inicial. Zero custo se ação indeferida.
**Trajetória:** Natural de Criciúma/SC, iniciou trabalho lá. Hoje mora em Paulínia/SP. Atende Brasil inteiro.

### Tipos de problema atendidos (taxonomia padrão do nicho)

1. **Voo atrasado** (≥ 4h, ou que cause perda de conexão)
2. **Voo cancelado** (sem reacomodação digna)
3. **Extravio de bagagem** (temporário ou definitivo)
4. **Overbooking** (preterição de embarque)

Secundários: conexão perdida, no-show involuntário, danos materiais, downgrade de classe.

### Fluxo atual de trabalho (pré-site novo)

1. Cliente entra em contato após problema (geralmente WhatsApp)
2. Reporta o ocorrido em texto/áudio
3. Dra. analisa e dá feedback (nem todo caso é passível de processo)
4. Se viável, envia lista de documentos necessários
5. Cliente envia documentos via WhatsApp (canal preferido)
6. Dra. protocola a ação e envia número do processo
7. Acompanhamento até a indenização
8. Cobrança de 30% sobre o êxito

### Stakeholders

| Papel | Pessoa | Responsabilidades |
|---|---|---|
| Sponsor | Dra. Agrislaine | Aprovação de conteúdo, fornece materiais reais (fotos, casos, números) |
| PM/Dev | Jonatas Donato | Coordenação, decisões técnicas, execução com Claude Code |
| Designer + Dev sênior + revisor | Claude (esta sessão Cowork) | Briefing, mockups, scripts, validação visual |
| Executor de código | Claude Code (sessão paralela) | Implementa scripts, push, deploy |

---

## 2. Identidade visual da marca

Marca existente com identidade consolidada (Instagram ativo, logo profissional). NÃO criar do zero — alinhar.

### Paleta de cores final

| Token | HEX | Uso |
|---|---|---|
| `--color-bg-canvas` | `#FAFAFA` | Fundo base do site (off-white quente) |
| `--color-bg-elevated` | `#FFFFFF` | Cards, modais |
| `--color-bg-surface-dark` | `#0F1E33` | Footer, hero alternativo, sections dark |
| `--color-text-strong` | `#0A0F1E` | Texto principal, preto profundo com tom azulado |
| `--color-text-muted` | `#525252` | Texto secundário |
| `--color-text-on-dark` | `#FFFFFF` | Texto sobre surface dark |
| `--color-text-on-dark-muted` | `#B5D4F4` | Texto secundário sobre dark |
| `--color-brand-primary` | `#1E88E5` | Azul cobalto da marca · botões secundários · links · accent |
| `--color-brand-primary-hover` | `#1976D2` | Hover do brand-primary |
| `--color-brand-primary-dark` | `#1565C0` | Gradient / sombra do logo |
| `--color-brand-navy` | `#0F1E33` | Alias do surface-dark |
| `--color-whatsapp` | `#25D366` | Verde oficial WhatsApp · CTA primário |
| `--color-whatsapp-hover` | `#1FB955` | Hover WhatsApp |
| `--color-accent-warm` | `#FBBF24` | Amber · alerts / badges de urgência (cards "Estou no aeroporto agora") |
| `--color-accent-warm-hover` | `#F59E0B` | Hover amber |
| `--color-border` | `#E5E7EB` | Bordas padrão |
| `--color-border-strong` | `#D1D5DB` | Bordas com mais ênfase |
| `--color-success` | `#16A34A` | Estados de sucesso (sistema) |
| `--color-warning` | `#F59E0B` | Estados de alerta (sistema) |
| `--color-error` | `#DC2626` | Estados de erro (sistema) |

### Gramática de cores (regra estrita)

- **Verde (`#25D366`)** = ação humana (WhatsApp, chamada com a Dra.)
- **Azul cobalto (`#1E88E5`)** = informação / marca / links / CTA secundário
- **Amber (`#FBBF24`)** = urgência / atenção (Live Coleta no aeroporto)
- **Preto (`#0A0F1E`)** = texto neutro
- **Navy (`#0F1E33`)** = surface dark (footer, hero alternativo)

Zero ambiguidade. Cor sempre significa a mesma coisa.

### Tipografia

- **Sans-serif principal:** Geist (via `next/font/google`)
- **Mono:** Geist Mono — uso **EXCLUSIVO** no boarding pass card e códigos IATA (DLY/CNL/BAG/OVB). Em nenhum outro lugar.
- **Pesos usados:** 400 (regular) · 500 (medium) — evitar 600/700 que pesam demais
- **Tracking:** -0.02em a -0.04em em headlines grandes (display)
- **Itálico:** uso cirúrgico em palavras-chave dos headlines (ex: "*não precisa*" em azul)

### Logo

- **V-shape com avião em decolagem** — V à esquerda em azul (gradient com `#1565C0` claro), curva no topo direito virando silhueta de avião
- **Wordmark:** "Voe" peso forte azul `#1E88E5` + "sem problemas" peso fino (preto em fundo claro / branco em fundo escuro)
- **Assets fornecidos:** PNGs em várias versões (cor sobre branco, cor sobre navy, branco sobre navy, só ícone)
- **A serem salvos em:** `/public/brand/` (estrutura criada no projeto, README pronto)
- **Enquanto PNG não está em uso:** componente `<BrandLogo />` renderiza versão SVG aproximada do V+avião + wordmark CSS. Hot-swap quando PNGs forem dropados.

---

## 3. Direção criativa

### Big idea visual: "Editorial Aviation"

A landing page é uma **revista editorial de aviação que por acaso vende serviços jurídicos**. Referências mentais: Cereal Magazine, Hemispheres (revista da United), Monocle, Stripe Press. **NÃO** é SaaS landing, **NÃO** é WordPress jurídico padrão. Tem ponto de vista.

### Movimentos de design característicos

1. **Tipografia mista refinada** — sans-serif Geist como dominante, monospace exclusivamente no boarding pass card
2. **Boarding pass real como prova social** — card no formato de cartão de embarque mostrando UM caso específico com indenização (R$, rota, cia, tempo)
3. **Códigos IATA como labels de serviços** — DLY, CNL, BAG, OVB. Comunica fluência no nicho
4. **Numeração de seções editorial** ("— Nº 01", "— Nº 02") — sensação de capítulos
5. **Cor restrita** — preto/branco/navy dominante, azul brand cirúrgico, verde só no WhatsApp, amber só em urgência
6. **Espaço vazio generoso** — 0% poluição. Hierarquia clara. Premium.

### Princípio mestre de usabilidade

> "Um cliente nervoso entrando no site precisa entender em **3 segundos**:
> (1) o que esse lugar resolve,
> (2) que resolve PRA ELE,
> (3) como age agora."

Toda decisão de design é testada contra esse benchmark.

### 6 movimentos de usabilidade aplicados (heurísticas Nielsen + Refactoring UI)

1. **Regra do um** — UM CTA primário no Hero (WhatsApp verde). Hierarquia abaixo.
2. **Decision tree explícita** — 3 caminhos auto-explicativos por momento do cliente:
   - "Estou no aeroporto agora" (amber, urgência) → `/live`
   - "Tive problema recente" (branco, padrão) → `/caso`
   - "Quero entender meus direitos" (branco, leve) → `/faq` ou `/servicos`
3. **Trust chip no header sticky** — OAB/SC · SP sempre visível em qualquer scroll
4. **Tab bar inferior persistente (mobile)** — 4 ações sempre ao alcance do polegar: WhatsApp · Live · Calcular · Dúvidas
5. **Cor com gramática estrita** — verde=ação humana, azul=info, amber=urgência, preto=neutro. Zero ambiguidade
6. **Linguagem do cliente** — "Estou no aeroporto agora" não "Iniciar wizard"; "Tive problema recente" não "Submeter caso"

### Mobile-first não-negociável

Predominantemente os clientes acessam pelo celular — geralmente quando estão NO aeroporto enfrentando o problema. Toda decisão é testada primeiro em 375px (iPhone padrão), depois escalada pra desktop. Tab bar mobile inferior. Touch targets 44px+. Hero inteiro acima da dobra em mobile.

### Tom de voz

- **Conversacional, empático, direto** — não juridiquês
- Frases curtas. Mistura de afirmação + comando suave
- Headlines têm personalidade ("O voo atrasou. A justiça não precisa.")
- Microcopy reduz ansiedade ("Análise gratuita em 24h. Só paga se ganhar.")
- Evitar palavras genéricas: "soluções", "excelência", "comprometimento" → linguagem proibida

---

## 4. Arquitetura técnica

### Stack final

| Camada | Escolha | Por quê |
|---|---|---|
| Framework | Next.js 16 (App Router) | SSR/SSG, otimizado SEO, ecossistema Vercel |
| UI | React 19 | RSC nativo, última estável |
| Linguagem | TypeScript 5.6+ strict | Type safety total |
| Estilos | Tailwind v4 (CSS-only via `@theme`) | Performance, zero CSS-in-JS |
| Componentes | shadcn/ui (copy-paste, não dependência) | Acessíveis, customizáveis |
| Animações | Framer Motion 11 | Padrão, RSC-compatible |
| Ícones | Lucide React + Tabler (em mockups) | Tree-shakable |
| Fontes | next/font (Geist + Geist Mono) | Performance + privacidade |
| Form / validação | React Hook Form + Zod | Padrão moderno |
| Email | Resend (100/dia grátis) | Setup rápido, deliverability alta |
| Captcha | Cloudflare Turnstile | Grátis, não invasivo |
| Voice transcription | Web Speech API nativa (pt-BR) | Grátis, sem dependência externa |
| Salvar leads | Supabase free (Sprint 2+) | Histórico de submissões |
| Hospedagem | Vercel Hobby | R$ 0/ano |
| Domínio | Cloudflare Registrar (futuro) | Preço de custo |
| Analytics | Vercel Analytics (50k/mês grátis) | LGPD-friendly, cookieless |
| Web Vitals | Vercel Speed Insights | Core Web Vitals em tempo real |
| SEO ferramentas | Google Search Console + Bing Webmaster | Indexação + queries reais |

### Estrutura de pastas

```
voesemproblemas-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout global (Nav + Footer + TabBar mobile)
│   │   ├── page.tsx             # Home
│   │   ├── globals.css          # Tokens + Tailwind v4 + shadcn vars
│   │   ├── live/page.tsx        # Live Coleta wizard (Sprint 2)
│   │   ├── caso/page.tsx        # Embarcar Caso wizard (Sprint 2)
│   │   ├── calcular/page.tsx    # Calculadora (Sprint 3)
│   │   ├── servicos/[slug]/     # Páginas por serviço (Sprint 3)
│   │   ├── companhias/[slug]/   # Páginas por companhia aérea (Sprint 4)
│   │   ├── sobre/page.tsx       # Sobre a Dra. (Sprint 3)
│   │   ├── faq/page.tsx         # FAQ completo (Sprint 3)
│   │   ├── contato/page.tsx     # Contato (Sprint 3)
│   │   ├── blog/                # Blog (Sprint 4)
│   │   └── api/
│   │       ├── lead/route.ts    # Endpoint do form
│   │       ├── coleta/route.ts  # Endpoint do Live Coleta
│   │       └── caso/route.ts    # Endpoint do Embarcar Caso
│   ├── components/
│   │   ├── ui/                  # shadcn primitives
│   │   ├── brand/               # Logo, marca
│   │   ├── sections/            # Hero, ServicesGrid, Timeline, etc.
│   │   ├── forms/               # LeadForm, CaseForm, VoiceTextarea
│   │   ├── nav/                 # Header sticky, TabBar mobile, Footer
│   │   └── wizard/              # Wizard primitives (Step, Progress)
│   ├── content/
│   │   ├── pages/               # MDX
│   │   ├── blog/                # MDX posts
│   │   ├── servicos/            # MDX serviços
│   │   └── companhias/          # MDX companhias
│   └── lib/
│       ├── seo.ts               # helpers metadata
│       ├── resend.ts            # client
│       ├── supabase.ts          # client (Sprint 2+)
│       ├── calculadora.ts       # lógica
│       ├── whatsapp.ts          # geradores de links wa.me
│       └── speech.ts            # wrapper Web Speech API
├── docs/
│   ├── PROJECT.md               # Este documento (versionado no repo)
│   ├── adr/                     # Architecture Decision Records
│   │   ├── ADR-001-stack.md
│   │   ├── ADR-002-dominio.md
│   │   ├── ADR-003-identidade-visual-marca.md
│   │   └── ADR-004+...md        # Adicionar conforme decisões
│   ├── design-tokens.md         # Paleta documentada
│   ├── calculadora-jurisprudencia.md  # Sprint 3
│   ├── whatsapp-templates.md    # Sprint 2 — templates pra Dra
│   └── live-coleta-checklists.md  # Sprint 2 — checklists por tipo de caso
├── public/
│   ├── brand/                   # Logos PNG da marca (a serem dropados)
│   ├── images/                  # Imagens gerais
│   └── og/                      # Open Graph images por rota
├── tests/                       # Playwright (Sprint 4)
├── .gitignore
├── .npmrc
├── .prettierrc.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### Repositório e deploy

- **Hospedagem Git:** GitHub na conta pessoal `voesemproblemas`, repo `agrisvoesemproblemas/voesemproblemas-site` (público — Hobby Vercel exige isso para repos em orgs/contas separadas)
- **Branches:** `main` (produção) · `dev` (homolog/trabalho) · `feat/vsp-XXX-*` (features)
- **Commits:** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`, `test:`, `perf:`)
- **SSH local (Mac):** chave dedicada `~/.ssh/id_ed25519_voesemproblemas` + host alias `github.com-voesemproblemas` no `~/.ssh/config`. Zero conflito com a conta Jax do Jonatas (`jonatasdonato`)
- **Git config local:** `user.name "Voe sem Problemas"` · `user.email "agriss.cc@gmail.com"` (na pasta do projeto, não global)
- **Deploy:** Vercel auto-deploy de `main` → produção (`voesemproblemas-site.vercel.app`), de `dev` → preview URL
- **Domínio (Sprint 5):** Migrar `voesemproblemas.com` da HostGator para Cloudflare Registrar. Adicionar `voesemproblemas.adv.br` (Registro.br) em 301 redirect

---

## 5. Roadmap de sprints

### Sprint 1 — Fundação + Home (em andamento)

| Phase | Status | Entrega |
|---|---|---|
| A.1 — Bootstrap Next + TS + Tailwind v4 | ✅ Concluída | Repo, configs, build verde |
| A.2 — GitHub + Vercel + push inicial | ✅ Concluída | `main` e `dev` no GitHub, Vercel rebuilding |
| A.3 — Design tokens Direção B genérica | ✅ Concluída (depois pivotada) | Tokens iniciais + Hero placeholder |
| A.4 — Revisão para tokens da MARCA | ✅ Concluída | Tokens brand-aligned, ADR-003, Hero com cores reais |
| **B** — **Home refinada** | 🚧 Próximo | Layout global, Hero refinado, Decision tree, 4 serviços, FAQ, Footer, Sobre, OG completo |

### Sprint 2 — Ferramentas operacionais

| Item | Detalhe |
|---|---|
| `/live` — Live Coleta wizard | Rota standalone, OG próprio, 4 fluxos (atraso/cancelamento/bagagem/overbooking), checklists específicos, upload progressivo, voice transcription, localStorage save, entrega WhatsApp/email |
| `/caso` — Embarcar Caso wizard | Rota standalone, OG próprio, fluxo wizard (tipo → dados do voo → relato com voz → upload de documentos → revisão → enviar), localStorage save |
| Voice transcription | Web Speech API pt-BR em todos os textareas descritivos |
| WhatsApp templates | `/docs/whatsapp-templates.md` com 3-4 mensagens prontas pra Dra. configurar no WhatsApp Business |
| Resend integration | Endpoint API com Zod validation + Turnstile |
| Supabase setup (opcional) | Salvar submissões pra dashboard interno |

### Sprint 3 — Páginas institucionais

> **Nota:** Calculadora de indenização removida do escopo via ADR-006 (2026-05-27). Estimativa individualizada via WhatsApp é mais honesta e eficaz.

| Item | Detalhe |
|---|---|
| `/servicos/[slug]` | 5 páginas (atraso, cancelamento, extravio, overbooking, reembolso) com copy aprofundado |
| `/sobre` | Página da Dra com bio completa + trajetória Criciúma→Paulínia + OAB dupla + foto profissional |
| `/contato` | Form + WhatsApp + endereço |
| `/faq` | FAQ completo (20+ perguntas) com busca |
| LGPD banner | Mínimo, aceita/recusa/configurações |

### Sprint 4 — SEO técnico + Blog + Polish

| Item | Detalhe |
|---|---|
| `/companhias/[slug]` | 5+ páginas por companhia (Latam, Gol, Azul, American, TAP). Long-tail SEO |
| `/blog` + MDX | Setup blog. 3-5 posts pilares iniciais. Schema.org `Article` |
| Schema.org rico | `LegalService`, `Attorney`, `FAQPage`, `Article` validados no Rich Results Test |
| Sitemap + robots + canonicals | Auto-gerados pelo Next |
| Search Console + Bing Webmaster | Verificados, sitemap submetido |
| Auditoria final | Lighthouse 95+ em todas as páginas, A11y WCAG 2.1 AA, axe DevTools zero issues |
| Live Coleta v2 | PWA com Service Worker para funcionar offline |

### Sprint 5 — Migração HostGator → Vercel

| Item | Detalhe |
|---|---|
| Backup completo do WordPress atual | Via cPanel HostGator |
| Apontar DNS do `voesemproblemas.com` para Vercel | Mudar 2 registros DNS |
| Transferir domínio para Cloudflare Registrar | Processo de 5-7 dias |
| Registrar `voesemproblemas.adv.br` no Registro.br | 301 redirect para `.com` canonical |
| Cancelar Plano M HostGator (antes da renovação 25/01/2027) | Economia imediata de R$ 512,28/ano |
| Cancelar renovação automática do domínio HG (após transferência) | Confirmação por email |
| Submeter sitemap no Search Console + 301s de URLs antigas | Preservar SEO |

### Sprint 6+ — Operação contínua

- 2-4 posts mensais no blog
- 1-2 novas companhias aéreas/mês até cobrir 15
- Monitoramento mensal Search Console (queries, CTR, posição)
- A/B test de copy a cada 60 dias
- Revisão funil mensal: visitas → calculadora → WhatsApp → cliente fechado

---

## 6. Features completas planejadas

### Home (`/`) — Sprint 1

1. Header sticky com logo, hamburger mobile (4 itens: Casos, Como funciona, Sobre, Dúvidas)
2. Hero editorial com painel LED de departures IATA + boarding pass de êxito recente
3. Decision Tree (3 caminhos: Live, Embarcar Caso, FAQ)
4. 4 serviços em PT-BR (sem códigos IATA nas cards)
5. "Como funciona" 5 passos
6. Sobre Dra. com Resultados integrados em bloco compacto
7. FAQ em 2 colunas (6 perguntas)
8. FAQ resumido (8 perguntas + link /faq)
9. CTA final
10. Footer institucional (OAB, contatos, social, LGPD)
11. Tab bar mobile inferior persistente (WhatsApp/Live/Calcular/Dúvidas)
12. Floating WhatsApp button (desktop)

### Live Coleta (`/live`) — Sprint 2 (operacional!)

**Conceito:** Wizard mobile-first guiando cliente DURANTE o problema no aeroporto.

**Fluxo:**
1. **Identificar problema** — 4 tap targets (atraso/cancelamento/extravio/overbooking)
2. **Checklist específico do problema escolhido** — itens com camera button. Ex: voo atrasado → fotografar painel, pedir comprovante, salvar recibos, anotar atendente, não assinar renúncia
3. **Upload progressivo** — câmera direta no browser + galeria
4. **Resumo + envio** — gera mensagem WhatsApp formatada com TODOS os dados + fotos anexadas

**Recursos técnicos:**
- localStorage save (pausa e retoma)
- Voice transcription nos campos descritivos
- Funciona offline (Sprint 4: PWA com Service Worker)
- OG image próprio (preview rico no WhatsApp quando link compartilhado)

### Embarcar Caso (`/caso`) — Sprint 2

**Conceito:** Wizard pós-incidente. Cliente teve problema recente (até 2 anos), quer formalizar.

**Fluxo:**
1. **Tipo de problema** (4 opções)
2. **Dados do voo** (cia, número, rota, data, classe)
3. **Relato** (textarea + microfone para ditar)
4. **Upload de documentos** (passagem, cartão embarque, recibos, comprovantes)
5. **Revisão** (vê tudo antes de enviar)
6. **Confirmação** (mensagem WhatsApp pronta + opção email)

### Calculadora (`/calcular`) — Sprint 3

**Conceito:** Calcula faixa realista de indenização baseada em jurisprudência média.

**Diferencial vs concorrentes:** faixa conservadora e honesta, não promessa de "até R$ 15.000" inflada.

**Fluxo:**
1. Tipo de problema
2. Companhia + trecho (doméstico/internacional)
3. Detalhes (tempo de atraso, dias de extravio, assistência prestada, gastos)
4. **Estimativa** com faixa mínima e máxima + 3 fatores que aumentam + 3 que diminuem
5. CTA "Quero falar com a Dra." → WhatsApp pré-preenchido com TODOS os dados informados

### Checklist Aeroporto (PWA mobile) — Sprint 4

Versão simplificada do Live Coleta para acesso super-rápido via Google "voo atrasou o que fazer". Funciona offline, gera PDF do checklist para email.

### Blog (`/blog`) — Sprint 4

MDX. Pilares de conteúdo:
1. Direitos por tipo de problema (4-5 posts long-form)
2. Problemas por companhia (15+ posts)
3. Jurisprudência recente (mensal)
4. Guias práticos (checklists, e-books)
5. ANAC e regulamentação

---

## 7. Padrão de trabalho (Jonatas-style, replicado do Jax Machinery)

### Convenções

- **Tasks com IDs:** `VSP-S{N}-{NNN}` (ex: VSP-S1-007)
- **ADRs versionados** em `/docs/adr/ADR-NNN-titulo.md`
- **Scripts em `outputs/`** que carregam prompt no Claude Code: `load-vsp-s{N}-{phase}.sh`
- **Smoke tests** por cenário numerado em cada script: "Cenário 1: ..., Cenário 2: ..."
- **Push controlado:** Claude sugere, Jonatas autoriza, Code executa
- **Diagnóstico antes de fix:** Claude propõe 2-3 hipóteses, Jonatas escolhe
- **Validação visual:** Cowork Claude abre Vercel preview no browser controlado e valida

### Workflow de cada Phase

```
1. Cowork Claude produz prompt em outputs/load-vsp-sN-phase.sh
2. Jonatas cola o bash command no Claude Code
3. Code lê o prompt, executa em ordem
4. Code reporta cada Phase (checkpoints)
5. Quando precisa de autorização (push, decisão), pausa e pergunta
6. Quando termina, reporta cenários de aceitação
7. Cowork Claude abre Vercel, valida visualmente
8. Se OK, atualiza tasks (completed) e libera próxima Phase
9. Se não OK, identifica problema, produz fix script
```

---

## 8. Dados e contatos da Dra.

| Campo | Valor |
|---|---|
| Nome completo | Dra. Agrislaine Oliveira |
| Email atual | `agriss.cc@gmail.com` |
| Email futuro (planejado) | `dra@voesemproblemas.com` ou similar (após migração de domínio) |
| WhatsApp | `(48) 99968-7068` → formatado: `5548999687068` |
| OAB primária | OAB/SC 53.583 |
| OAB secundária | OAB/SP 505.951 (dupla inscrição é diferencial competitivo) |
| Cidade natural | Criciúma/SC |
| Cidade atual | Paulínia/SP (endereço para Schema.org `address`) |
| Área de atuação | Brasil inteiro (`areaServed: "BR"`) |
| Anos no nicho | 5+ anos (a confirmar exato com a Dra.) |

### Materiais pendentes da Dra.

| Item | Status | Bloqueia o quê? |
|---|---|---|
| Foto profissional editorial | ⏳ Aguardando | Placeholder elegante por enquanto (gradient + ícone) |
| Logo em SVG/AI vetorial | ⏳ Aguardando | PNGs já enviados, serão usados via `<Image>` |
| Caso real para boarding pass | ⏳ Aguardando | Placeholder ilustrativo marcado por enquanto |
| Números reais agregados (X casos, R$ Y, Z% êxito) | ⏳ Aguardando | Placeholders por enquanto |
| Depoimentos com autorização | ⏳ Aguardando | Sprint 1 entrega seção mas sem depoimentos. Adicionar depois. |
| Anos exatos no nicho | ⏳ Aguardando | "+5 anos" como placeholder |

---

## 9. ADRs (Architecture Decision Records)

| # | Título | Status | Resumo |
|---|---|---|---|
| ADR-001 | Stack: Next + Vercel + Tailwind v4 + shadcn + Resend + Cloudflare | Aceito | Next.js 16, Tailwind v4 CSS-only, shadcn copy-paste, Vercel Hobby grátis |
| ADR-002 | Domínio: `.com` canonical + `.adv.br` 301 | Aceito | Custo ~R$ 95/ano. `.com` mantém SEO acumulado, `.adv.br` sinaliza advocacia |
| ADR-003 | Identidade visual brand-aligned | Aceito | Pivotada Direção B genérica para paleta real da marca: azul `#1E88E5` + navy + WhatsApp verde + amber |
| ADR-004 | URLs standalone para wizards | Aceito (a documentar) | `/live` e `/caso` como rotas próprias com OG image próprio para compartilhamento WhatsApp |
| ADR-005 | Voice transcription com Web Speech API nativa | Aceito (a documentar) | Free, sem dependência externa, pt-BR funcional em todos browsers modernos |

---

## 10. WhatsApp templates (para Dra. configurar no WhatsApp Business)

A serem detalhados em `/docs/whatsapp-templates.md` (Sprint 2). Esboço:

### Template 1 — Auto-reply geral (qualquer horário)

```
Olá! Sou a Dra. Agrislaine, advogada do passageiro aéreo.

Recebi sua mensagem. Pra acelerar seu caso, escolhe:

🚨 PROBLEMA AGORA (no aeroporto):
voesemproblemas.com/live

📋 PROBLEMA RECENTE (até 2 anos):
voesemproblemas.com/caso

Em 5 minutos você organiza tudo e eu te respondo
em até 24h (ou mais rápido se for urgente).

— Dra. Agrislaine · OAB/SC 53.583 · OAB/SP 505.951
```

### Template 2 — Madrugada/finais de semana

(Variação do anterior reforçando "te respondo na segunda/amanhã cedo")

### Template 3 — Pós-Live Coleta recebida

(Confirmação automática após receber as provas do Live Coleta)

### Template 4 — Pós-Embarcar Caso recebido

(Confirmação automática após receber o caso formalizado)

---

## 11. Custos operacionais

### Antes (HostGator + WordPress)

| Item | Custo/ano |
|---|---|
| Plano M (hospedagem) | R$ 524,73 (próxima: R$ 512,28) |
| Domínio `.com` HG | R$ 110,98 |
| **Total atual** | **R$ 635,71/ano** |

### Depois (Vercel + Cloudflare/Registro.br)

| Item | Custo/ano |
|---|---|
| Vercel Hobby | R$ 0 |
| Domínio `.com` (Cloudflare) | ~R$ 55 |
| Domínio `.adv.br` (Registro.br) | R$ 40 |
| Resend (até 3000 emails/mês) | R$ 0 |
| Supabase Free | R$ 0 |
| Cloudflare Turnstile | R$ 0 |
| Vercel Analytics | R$ 0 |
| **Total novo** | **~R$ 95/ano** |

**Economia: ~R$ 540/ano = redução de 85%.** Sem perder nenhuma funcionalidade. Ganhando: performance, SEO, controle versionado, escalabilidade, ferramentas operacionais.

---

## 12. Histórico de scripts produzidos

| Script | Phase | Status |
|---|---|---|
| `load-vsp-s1-bootstrap.sh` | A.1 + A.2 + A.3 | ✅ Executado |
| `load-vsp-s1-brand-revision.sh` | A.4 | ✅ Executado |
| `load-vsp-s1-phase-b.sh` | B (Home refinada) | 🚧 A produzir |
| `load-vsp-s2-wizards.sh` | Sprint 2 | ⏳ Futuro |
| `load-vsp-s3-calculadora.sh` | Sprint 3 | ⏳ Futuro |
| `load-vsp-s4-seo-blog.sh` | Sprint 4 | ⏳ Futuro |
| `load-vsp-s5-migracao.sh` | Sprint 5 | ⏳ Futuro |

Scripts vivem em `/Users/jonatasdonato/Library/Application Support/Claude/local-agent-mode-sessions/.../outputs/` durante a sessão Cowork e devem ser idealmente copiados pra `/docs/scripts/` no repo para versionamento.

---

## 13. Pendências e perguntas em aberto

| # | Pendência | Bloqueia | Responsável |
|---|---|---|---|
| 1 | Foto profissional editorial da Dra. | Refinar visual Hero + Sobre | Dra. Agrislaine |
| 2 | Caso real para boarding pass (com permissão) | Substituir placeholder ilustrativo | Dra. Agrislaine |
| 3 | Números reais agregados (casos, R$ total, % êxito) | Trust strip e seção Resultados | Dra. Agrislaine |
| 4 | Depoimentos com autorização | Seção Depoimentos | Dra. Agrislaine |
| 5 | Backup do WordPress atual no HostGator | Migração Sprint 5 | Jonatas (via cPanel HG) |
| 6 | Logo vetorial (SVG/AI) | Substituir aproximação SVG inline | Dra. Agrislaine |
| 7 | Confirmação dos templates WhatsApp finais | Sprint 2 templates oficiais | Dra. Agrislaine (revisar com Jonatas) |
| 8 | Anos exatos de atuação no nicho | Bio da Sobre | Dra. Agrislaine |

---

## 14. Como usar este documento

Sempre que algo for decidido — sobre escopo, cor, fluxo, integração, conteúdo, prazo — **atualize este documento na mesma sessão**. Se ficar pra depois, vira fonte de verdade desatualizada.

Quando o Claude Cowork ou o Claude Code precisarem de contexto, **leia este documento primeiro**. Ele tem mais informação consolidada que qualquer outro lugar.

Quando uma decisão muda (ex: trocamos cor primária, mudamos roadmap), **edite a seção correspondente E adicione uma linha em ADRs** referenciando o ADR antigo como "Superseded by ADR-XXX".

Este documento é versionado em `/docs/PROJECT.md` no repo. Cópia espelho em `outputs/PROJECT-BIBLE.md` durante sessões Cowork.

---

**Fim do documento. Versão 1.0 — 27/05/2026.**
