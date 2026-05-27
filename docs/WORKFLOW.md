# WORKFLOW.md — Manual de Procedimentos de Produção

**Documento operacional.** Última atualização: 27/05/2026.

Este documento define **como trabalhamos**. É o contrato entre Jonatas, Claude (sessão Cowork) e Claude Code. Qualquer um dos três deve poder consultar este arquivo e operar consistentemente.

Convenções definidas aqui são **mandatórias**. Desvios precisam ser justificados e idealmente registrados como um ADR explicando o porquê.

Este arquivo é versionado em `/docs/WORKFLOW.md`. Deve ser lido em conjunto com `/docs/PROJECT.md` (Project Bible — fonte da verdade sobre o produto).

---

## 1. Propósito

Garantir que toda sessão de produção do projeto Voe sem Problemas:

- **Tem fonte da verdade clara** — escopo, decisões e estado registrados, não na memória
- **Produz código limpo** — passa testes, lint, typecheck antes de qualquer push
- **Tem ponto de validação humana** — Jonatas autoriza decisões irreversíveis
- **É reproduzível** — qualquer pessoa (incluindo Claude numa próxima sessão) pode retomar
- **Tem rastreabilidade** — cada mudança tem motivo registrado (commit + ADR quando relevante)
- **Minimiza retrabalho** — diagnóstico antes de fix, mockup antes de código, perguntas antes de assumir

Este padrão foi forjado no projeto Jax Machinery após várias rodadas de erro/aprendizado. Replicado aqui para começar maduro, não apanhando.

---

## 2. Papéis e responsabilidades

### Jonatas Donato — Product Owner + Tech Lead

- Define o **o quê** e o **por quê** das features
- Aprova decisões irreversíveis (push para `main`, force push, cancelamentos, deletes)
- Valida visualmente o que vai pro ar (abre a URL, confirma que está bom)
- Atualiza o Project Bible quando algo muda fora da sessão
- Faz a ponte com a Dra. (input de conteúdo, fotos, materiais)

### Claude (sessão Cowork — esta) — Designer + Senior Dev + Tech Strategist

- **Antes de programar:** propõe arquitetura, mockup visual, ADR, plano
- **Pergunta** quando há ambiguidade — não assume
- **Produz scripts** (`load-vsp-sN-*.sh`) em `outputs/` para o Code executar
- **Valida visualmente** após o Code rodar — abre Vercel/preview, tira screenshots, confere
- **Mantém o Project Bible atualizado** durante a sessão
- **Documenta decisões** em ADRs quando passam o threshold de relevância
- **Acessa MCPs e ferramentas auxiliares** (browser, web fetch, etc.) sob demanda
- Não toca diretamente no código do projeto — orquestra o Code

### Claude Code — Senior Implementor

- Executa scripts passados pelo Jonatas
- Lê o prompt completo e segue em ordem
- Reporta cada checkpoint conforme combinado no script
- **Para e pede autorização** quando o script manda (ex: antes de criar repo, antes de push)
- Roda smoke tests automatizados (`pnpm build`, `lint`, `typecheck`) antes de marcar uma phase como concluída
- Reporta erros com contexto suficiente para diagnóstico (não tenta gambiarras)
- **Não modifica decisões** documentadas no Bible/WORKFLOW/ADRs sem autorização explícita

### Dra. Agrislaine — Sponsor + Subject Matter Expert

- Aprova conteúdo (copy, fotos, depoimentos, dados pessoais)
- Fornece materiais (foto profissional, casos reais, números reais)
- Revisa o site quando entra em produção
- Define direcionamento de copy/tom em última instância

---

## 3. Padrões de nomenclatura

### Tasks (no sistema interno do Cowork)

Formato: `VSP-S{N}-{NNN} {Subject}`

Exemplos:
- `VSP-S1-001 Inicializar projeto Next 15`
- `VSP-S2-007 Implementar voice transcription no /caso`
- `VSP-S5-003 Cancelar Plano M HostGator`

`S{N}` = número do sprint. `{NNN}` = sequencial dentro do sprint (zero-padded).

### Branches Git

- `main` — produção (auto-deploy Vercel)
- `dev` — homolog (preview Vercel)
- `feat/vsp-sN-NNN-descricao-curta` — feature branches (criadas só para features > 1 phase)
- `fix/vsp-bug-descricao` — fixes urgentes
- `chore/descricao` — manutenção não-feature

### Commits — Conventional Commits

```
<type>(<scope>): <subject>

<body — opcional, > 1 linha se precisa>

<footer — opcional, referências>
```

**Types permitidos:**
- `feat:` — nova feature
- `fix:` — correção de bug
- `chore:` — manutenção (deps, build, configs)
- `docs:` — só documentação
- `style:` — formatação (sem mudança de lógica)
- `refactor:` — refatoração sem mudança de comportamento
- `test:` — adicionar/corrigir testes
- `perf:` — melhoria de performance
- `revert:` — reverter commit anterior

**Scopes comuns no projeto:**
- `repo`, `home`, `live`, `caso`, `calculadora`, `brand`, `seo`, `nav`, `footer`, `form`, `api`, `wizard`, `design-system`

**Exemplos bons:**
```
feat(live): adicionar voice transcription no campo de relato

Usa Web Speech API nativa (pt-BR). Funciona em Chrome,
Edge, Safari mobile. Fallback graceful em browsers sem suporte.

Refs: VSP-S2-007
```

```
fix(home): corrigir overflow do hero em viewport 375px
```

```
chore(deps): bump next para 16.3.0
```

**Exemplos ruins (não fazer):**
- `update` — sem type, sem contexto
- `WIP` — não commitar work-in-progress no `main`/`dev`
- `Fix bug` — sem scope, sem descrição

### Scripts (em `outputs/` do Cowork)

Formato: `load-vsp-s{N}-{purpose}.sh`

Exemplos:
- `load-vsp-s1-bootstrap.sh`
- `load-vsp-s1-brand-revision.sh`
- `load-vsp-s1-phase-b.sh`
- `load-vsp-s2-wizards.sh`
- `load-vsp-s3-calculadora.sh`

Para fixes específicos durante uma Phase:
- `load-vsp-fix-XXX-descricao.sh`

Para diagnósticos cegos:
- `load-vsp-diag-XXX-descricao.sh`

### ADRs

Formato: `/docs/adr/ADR-NNN-titulo-curto.md`

Numeração sequencial. Nunca pula. Nunca renumera. Se um ADR é substituído, ele permanece no histórico e o novo referencia ("Superseded by ADR-XXX") — o antigo é editado para apontar para o novo ("Superseded by ADR-XXX").

---

## 4. Workflow padrão de cada Phase

```
1. Jonatas define o objetivo da Phase (geralmente uma feature ou bloco coeso)
   ↓
2. Cowork Claude propõe a abordagem:
   - Lê o Project Bible
   - Pergunta o que estiver ambíguo
   - Se for visual: produz mockup primeiro
   - Se for arquitetural: propõe ADR + opções com tradeoffs
   - Se for fix: faz diagnóstico cego primeiro (Sec 6)
   ↓
3. Jonatas aprova / pede ajustes
   ↓
4. Cowork Claude produz prompt completo em outputs/load-vsp-sN-purpose.sh
   - Contexto necessário
   - Tasks numeradas
   - Critérios de aceitação por task
   - Pontos de checkpoint (onde pedir autorização)
   - Smoke tests numerados
   - O que NÃO fazer nesta phase (escopo limitado)
   ↓
5. Jonatas cola o bash command no Claude Code
   ↓
6. Code executa em ordem, reportando cada checkpoint
   - Se algo dá errado: para e reporta com contexto, não improvisa
   - Se precisa autorização: para e pergunta
   ↓
7. Code reporta cenários de aceitação ao fim
   ↓
8. Cowork Claude valida visualmente
   - Abre o Vercel preview no browser controlado
   - Tira screenshot
   - Confirma que cumpre o critério OU lista o que falta
   ↓
9. Se OK: atualiza tasks (completed), atualiza Project Bible se mudou algo, libera próxima Phase
   Se não OK: identifica o problema, produz fix script, volta ao passo 4
```

---

## 5. Smoke tests — padrão de cenários

Toda Phase termina com smoke tests **antes** de marcar como completa.

### Cenários técnicos (mínimo obrigatório)

```
Cenário 1: `pnpm build` roda sem erros, sem warnings
Cenário 2: `pnpm exec tsc --noEmit` sem erros
Cenário 3: `pnpm exec eslint src/` sem erros
Cenário 4: `pnpm dev` sobe sem erro e a página principal renderiza
```

### Cenários visuais e funcionais (definidos por Phase)

Numerados sequencialmente após os técnicos. Exemplo Phase B (Home refinada):

```
Cenário 5: Hero renderiza com Direção B + logo + foto placeholder
Cenário 6: Decision tree com 3 caminhos visíveis e clicáveis
Cenário 7: Tab bar mobile aparece em viewport ≤ 768px e some em ≥ 1024px
Cenário 8: Click no botão WhatsApp abre wa.me com mensagem pré-preenchida correta
Cenário 9: Lighthouse mobile ≥ 90 (performance/a11y/SEO)
Cenário 10: Schema.org valida no Rich Results Test (validator.schema.org)
```

### Regras de smoke tests

- **Numerados sequencialmente** dentro do script. Nunca pula número.
- **Reportados explicitamente** ao fim de cada Phase com status (✅ / ❌ / ⚠️)
- **Bloqueantes** — não marcar Phase como concluída se algum cenário falhou (a não ser que seja documentado como exceção justificada)
- **Cenários técnicos sempre rodam.** Cenários visuais dependem da Phase.
- **Cowork Claude faz validação visual real** — não confia só no relatório do Code. Abre browser, tira print, valida.

---

## 6. Diagnóstico cego (Blind Diagnosis)

Pattern aprendido na Jax: **antes de propor um fix, levantar hipóteses sem viés de "qual é a solução".**

### Quando aplicar

- Bug em produção que não é óbvio
- Comportamento inesperado depois de uma mudança
- Performance ruim
- Erro de build que não é evidente
- Qualquer "por que isso está acontecendo?"

### Como aplicar

1. Cowork Claude (ou Code, conforme contexto) lista **3 a 5 hipóteses** sobre a causa
2. Cada hipótese vem com uma **probabilidade subjetiva** (ex: "70%", "20%", "10%")
3. Cada hipótese tem um **teste de validação** (como saber se essa hipótese é a certa)
4. Roda os testes em ordem de probabilidade decrescente
5. Quando uma hipótese é confirmada, **só então** propõe o fix
6. Documenta o achado em commit message ou ADR se for não-trivial

### Anti-padrão a evitar

❌ Code direto pula pra: "Vou ajustar X e Y e Z ao mesmo tempo, espero que resolva"
✅ Code primeiro: "Hipótese A (60%): config X tá errada. Validação: ler arquivo Y. Hipótese B (30%): cache stale. Validação: limpar e rodar de novo. Hipótese C (10%): incompatibilidade de versão. Validação: comparar lockfile."

### Script template para diagnóstico

```bash
# load-vsp-diag-XXX-titulo.sh
# Investiga: <problema observado>
# NÃO tenta fixar. Só diagnostica.

# 1. Lista 3-5 hipóteses com probabilidade
# 2. Roda testes de validação em ordem
# 3. Reporta qual hipótese se confirmou
# 4. Aguarda autorização antes de produzir o fix script
```

---

## 7. ADRs — quando criar e formato

### Quando criar um ADR

Crie um ADR quando uma decisão tem **pelo menos uma dessas características**:

- É difícil reverter (mudar dá retrabalho significativo)
- Tem tradeoffs reais entre 2+ opções
- Vai impactar como decisões futuras são tomadas
- Tem custo (financeiro, tempo, complexidade) não-trivial
- Vai gerar dúvida "por que escolhemos isso?" em 3+ meses

Exemplos do que merece ADR:
- Escolha de framework / stack
- Modelo de dados crítico
- Padrão de autenticação
- Decisão sobre paywall/plano pago
- Decisão sobre vendor lock-in

Exemplos do que NÃO precisa de ADR:
- Mudar nome de uma variável
- Adicionar uma página de FAQ
- Trocar um componente shadcn por outro shadcn equivalente

### Formato do ADR

```markdown
# ADR-NNN — Título curto e específico

**Status:** Proposto | Aceito | Rejeitado | Superseded by ADR-XXX
**Data:** YYYY-MM-DD
**Autor(es):** Quem propôs

## Contexto
Que problema/decisão estamos enfrentando. Por que precisa decidir agora.

## Opções consideradas

### Opção 1: <nome>
- Prós:
- Contras:
- Custo:

### Opção 2: <nome>
- Prós:
- Contras:
- Custo:

### Opção 3: <nome>
- Prós:
- Contras:
- Custo:

## Decisão
Qual opção foi escolhida e por quê (em 1-3 parágrafos).

## Consequências
- O que esperamos como impacto positivo
- O que pode dar errado (riscos)
- O que vamos monitorar pra saber se foi a decisão certa

## Referências
- Links, conversas, dados que embasaram a decisão
```

---

## 8. Push controlado — quando e como

### Regra de ouro

**Cowork Claude e Code nunca fazem push para `main` sem autorização explícita do Jonatas na sessão atual.**

Autorização do passado não conta. Cada push para `main` é uma decisão consciente.

### Fluxo padrão

```
1. Code completa trabalho na branch dev (ou feat branch)
2. Code roda smoke tests, todos passam
3. Code commita com mensagem Conventional
4. Code push para dev (auto-deploy preview no Vercel)
5. Cowork Claude valida visualmente o preview
6. Cowork Claude pergunta: "Pode fazer merge para main?"
7. Jonatas autoriza explicitamente ("pode", "merge", "vai")
8. Code faz merge dev → main com --no-ff
9. Code push main (auto-deploy production)
10. Cowork Claude valida produção
11. Atualiza tasks e Project Bible
```

### Casos especiais que sempre precisam de autorização adicional

- **Force push** (`git push --force` ou `--force-with-lease`) — NUNCA fazer sem autorização explícita
- **Reescrever histórico** (rebase, filter-branch) — só com autorização
- **Deletar branches remotas** — só com autorização
- **Mudar configuração do Vercel** — só com autorização
- **Mudar configuração de domínio/DNS** — só com autorização
- **Cancelar serviço pago** — só com autorização

### Anti-padrão

❌ Code: "Vou fazer um push pra main com essa correção rápida"
✅ Code: "Mudança feita em dev, build verde, deploy preview OK. Posso fazer merge para main?"

---

## 9. Validação visual

Após o Code reportar Phase concluída, **Cowork Claude valida visualmente** — não confia no relatório textual.

### Procedimento

1. Abre URL pública (Vercel) no browser controlado
2. Tira screenshot em pelo menos 2 viewports (mobile 375px + desktop 1440px)
3. Lê os textos visíveis e confere se batem com o esperado
4. Testa interações críticas (clica nos CTAs principais)
5. Confere DevTools / Network se relevante
6. Reporta cada cenário de aceitação ao Jonatas com status

### Anti-padrão

❌ Cowork: "Code reportou tudo OK, Phase concluída"
✅ Cowork: "Abri o preview, tirei screenshot, confirmei visualmente: hero com cores certas (✅), tab bar mobile aparece (✅), WhatsApp abre com mensagem pré-preenchida (✅). Phase concluída."

---

## 10. Tratamento de erros e blockers

### Erro técnico (build falha, deploy falha, push falha)

1. Code para imediatamente, não tenta gambiarras
2. Reporta com contexto: o que tentou fazer, erro recebido, arquivos envolvidos
3. Cowork Claude lê o erro e propõe diagnóstico cego (se não trivial)
4. Resolve com fix script ou ajuste pontual
5. Re-roda smoke tests

### Blocker de informação (falta dado da Dra., decisão ambígua)

1. Code/Cowork para e pergunta ao Jonatas em texto claro
2. Se não bloqueia 100%, oferece alternativa com placeholder e marca `TODO`
3. Adiciona à seção 13 do Project Bible (Pendências) imediatamente
4. Não inventa o dado faltante

### Decisão arquitetural não prevista

1. Cowork Claude propõe 2-3 opções com tradeoffs
2. Pergunta ao Jonatas qual seguir
3. Se a decisão for relevante (ver Seção 7), gera ADR
4. Atualiza Project Bible se altera escopo

### Anti-padrão

❌ "Encontrei um erro, fui tentando várias coisas, agora não sei o que mudei"
✅ "Encontrei erro X. Listei 3 hipóteses. Validei e confirmei a hipótese 2. Proposta de fix: Y. Posso aplicar?"

---

## 11. Atualização do Project Bible

`PROJECT.md` é a fonte da verdade. Precisa estar sempre atualizado.

### Quando atualizar imediatamente

- Mudança de paleta, tipografia, logo
- Nova feature adicionada/removida do escopo
- Mudança de cronograma de sprint
- Novo dado da Dra. recebido (foto, número, OAB, etc.)
- ADR criado (adicionar linha na seção 9)
- Resolução de uma pendência (mover da seção 13)
- Script novo produzido (linha na seção 12)
- Decisão de tom de voz, copy de seção crítica

### Quem atualiza

- **Durante sessão Cowork:** Cowork Claude atualiza imediatamente
- **Fora de sessão:** Jonatas atualiza ao tomar decisão
- **Code não atualiza diretamente** — pode propor mudança no relatório, Cowork Claude consolida

### Como atualizar

- Edição direta no arquivo `docs/PROJECT.md` no repo (via PR ou commit direto em dev)
- Toda atualização vira commit `docs(bible): <o que mudou>`
- Se mudança contradiz versão anterior, adicionar nota: "Atualizado em DD/MM: <razão>"

---

## 12. Comunicação Cowork ↔ Code (formato de prompts)

Os scripts `load-vsp-*.sh` produzidos pelo Cowork Claude e consumidos pelo Code seguem este formato:

```bash
#!/usr/bin/env bash
# load-vsp-sN-purpose.sh
# Projeto: Voe sem Problemas — Sprint N Phase X
# Objetivo: <1-2 linhas claras>

cat <<'PROMPT_END'
═══════════════════════════════════════════════════════════════════════════════
PROJETO: Voe sem Problemas — SPRINT N PHASE X
TASK: VSP-SN-NNN
═══════════════════════════════════════════════════════════════════════════════

CONTEXTO
--------
<estado atual, decisões prévias relevantes, link para Project Bible se necessário>

DIRETÓRIO DE TRABALHO
---------------------
~/Projects/voesemproblemas-site
Branch ativa esperada: dev

OBJETIVOS DESTA PHASE (em ordem)
---------------------------------

PHASE X.1 — <título>
  □ Ação 1
  □ Ação 2
  □ Critério de validação

PHASE X.2 — <título>
  □ ...

CRITÉRIOS DE ACEITAÇÃO (smoke tests)
-------------------------------------
Cenário 1: <descrição>
Cenário 2: <descrição>
...

RELATÓRIO ESPERADO AO FIM
--------------------------
1. <o que reportar>
2. ...

QUANDO PARAR E PEDIR AUTORIZAÇÃO
---------------------------------
- Antes de <ação irreversível>
- Se <condição>

ATENÇÃO — NÃO FAZER NESTA PHASE
--------------------------------
- NÃO <fora de escopo>
- NÃO <fora de escopo>

═══════════════════════════════════════════════════════════════════════════════
FIM DO PROMPT — Executar em ordem, reportar após cada Phase.
═══════════════════════════════════════════════════════════════════════════════
PROMPT_END
```

### Por que esse formato

- **Estrutura previsível** — Code sabe onde achar contexto, objetivos, smoke tests
- **Escopo limitado** — seção "NÃO fazer" impede scope creep
- **Checkpoints explícitos** — Code sabe onde parar e pedir autorização
- **Critérios mensuráveis** — smoke tests numerados, sem ambiguidade
- **Relatório padrão** — Code reporta no formato esperado, facilita validação

---

## 13. Anti-padrões — o que NUNCA fazer

❌ **Code começar a programar sem ter lido o script completo**
✅ Sempre lê o prompt inteiro antes de começar

❌ **Code modificar arquivos fora do escopo da Phase**
✅ Se notar problema em arquivo fora do escopo, reporta no fim, não muda

❌ **Cowork Claude propor solução sem ter validado o problema**
✅ Diagnóstico cego primeiro, fix depois

❌ **Push para `main` sem autorização**
✅ Sempre dev primeiro, validação, autorização, então merge

❌ **Marcar Phase como completa com cenário falhando**
✅ Phase só fecha com TODOS os cenários verdes (ou falhas justificadas)

❌ **Decisão arquitetural relevante sem ADR**
✅ Critério de "merece ADR" na Seção 7

❌ **Inventar dado faltante (foto, número, copy de seção crítica)**
✅ Pergunta ou marca placeholder com `TODO`

❌ **Misturar Conventional Commits e mensagens livres**
✅ Sempre Conventional. Sem exceção em `main`.

❌ **Force push sem autorização explícita E justificativa registrada**
✅ Force push é decisão excepcional

❌ **Misturar contas Git entre projetos (Jax vs VSP)**
✅ SSH host alias dedicado, git config local por pasta, zero overlap global

❌ **Deixar Project Bible desatualizado por mais de 1 sessão**
✅ Atualização imediata ou abertura de PR docs(bible) antes de fechar sessão

❌ **Code executar `rm -rf` em pasta com dados sem confirmação**
✅ Qualquer delete em massa precisa de autorização explícita

❌ **Iniciar nova Phase sem fechar a anterior**
✅ Uma Phase de cada vez. Termina, valida, atualiza Bible, próxima.

---

## 14. Exemplos de boas práticas (templates)

### Template: começar uma Phase

> "Vou iniciar a Phase X.Y. Li o Project Bible e a Phase anterior está concluída. Vou produzir o script `load-vsp-sN-purpose.sh` que cobre: [objetivos]. Smoke tests previstos: Cenários 1-N. Checkpoint de autorização: antes de [ação]. Pode confirmar?"

### Template: relatar erro durante Phase

> "Code reportou erro X durante Phase Y.Z. Listei 3 hipóteses:
> - H1 (70%): cache stale. Teste: limpar `.next` e rodar de novo
> - H2 (20%): config TS mudou. Teste: comparar tsconfig
> - H3 (10%): incompatibilidade de versão. Teste: ler lockfile
>
> Vou rodar H1 primeiro. Aguarda."

### Template: encerrar uma Phase

> "Phase X.Y concluída. Smoke tests: Cenários 1-5 ✅, Cenário 6 ⚠️ (justificativa: depende de dado da Dra., placeholder em uso). Atualizei tasks (Y completed), atualizei Project Bible (seções A e B). Pronto pra próxima Phase ou validação adicional?"

### Template: propor mudança de escopo

> "Identifiquei oportunidade não prevista: <descrição>. Impacto estimado: <tempo/risco>. 3 opções:
> 1. Fazer agora nesta Phase (impacto X)
> 2. Adicionar como Phase Y.Z separada (impacto Y)
> 3. Deixar pra Sprint N+1 (impacto Z)
>
> Recomendo opção 2. O que prefere?"

---

## 15. Versionamento deste documento

`WORKFLOW.md` evolui junto com o projeto. Quando mudamos uma convenção:

1. Atualizar diretamente este arquivo no repo
2. Commit `docs(workflow): <o que mudou>`
3. Se mudança é grande (ex: novo padrão de smoke tests), criar ADR justificando
4. Na próxima sessão Cowork, Cowork Claude lê este arquivo e adota o novo padrão

### Histórico de versões

| Versão | Data | Mudanças principais |
|---|---|---|
| 1.0 | 27/05/2026 | Versão inicial — extraída da experiência do projeto Jax Machinery e aplicada ao Voe sem Problemas |

---

## 16. Checklist de início de sessão Cowork

No início de toda sessão de produção, Cowork Claude deve:

```
□ Ler /docs/PROJECT.md (Project Bible)
□ Ler /docs/WORKFLOW.md (este documento)
□ Ler último ADR adicionado (para entender direção recente)
□ Verificar tasks abertas no sistema (TaskList)
□ Verificar estado do repo (último commit em main e dev)
□ Verificar último deploy no Vercel (status, URL)
□ Confirmar com Jonatas o objetivo da sessão
□ Se aplicável, ler /docs/whatsapp-templates.md ou outros docs específicos
```

Só depois de cumprir o checklist começa a operar.

---

**Fim do documento. Versão 1.0 — 27/05/2026.**

Este documento é tão importante quanto o código. Mantê-lo atualizado é responsabilidade de todos.
