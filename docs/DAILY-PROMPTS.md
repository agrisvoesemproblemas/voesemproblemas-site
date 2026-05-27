# Daily Prompts — Voe sem Problemas

Prompts de início de sessão pra carregar contexto antes de qualquer operação. Cola no início de TODA nova sessão.

---

## 1. Daily Prompt — Sessão Cowork (Cowork Claude)

Cola no início de cada nova sessão Cowork do projeto:

```
Sessão de produção Voe sem Problemas.

Antes de qualquer operação, leia em ordem (usando web_fetch):

1. https://raw.githubusercontent.com/agrisvoesemproblemas/voesemproblemas-site/main/docs/PROJECT.md
2. https://raw.githubusercontent.com/agrisvoesemproblemas/voesemproblemas-site/main/docs/WORKFLOW.md
3. Lista os arquivos em https://api.github.com/repos/agrisvoesemproblemas/voesemproblemas-site/contents/docs/adr e leia o ADR de número mais alto (mais recente)

Depois:
- Crie task list inicial com TaskCreate baseado nas próximas pendências do PROJECT.md
- Resume em 3-5 bullets onde paramos e o que vem a seguir
- NÃO inicie nenhum trabalho até eu te dar o objetivo da sessão
- Quando tiver lido tudo, responde "Contexto carregado. Tarefas pendentes: [lista]. Pronto pra direcionamento."
```

---

## 2. Daily Prompt — Sessão Claude Code (terminal)

Cola no início de cada nova sessão Code do projeto (depois de rodar `claude` no terminal dentro de `~/Projects/voesemproblemas-site`):

```
Sessão de produção Voe sem Problemas.

Antes de qualquer trabalho, leia em ordem:

1. ~/Projects/voesemproblemas-site/docs/PROJECT.md (Project Bible - fonte da verdade sobre o produto)
2. ~/Projects/voesemproblemas-site/docs/WORKFLOW.md (procedimentos operacionais - como trabalhamos)
3. Lista o conteúdo de ~/Projects/voesemproblemas-site/docs/adr/ e lê o ADR de número mais alto

Depois:
- Roda `git status` e `git log --oneline -10` no diretório do projeto
- Confirma qual branch está ativa (esperado: dev na maioria das vezes)
- Reporta versão do Next, React, TS, status de build
- Confirma que o último deploy no Vercel está verde (pode tentar fetch do .vercel.app)

NÃO inicia nenhum trabalho até eu colar o script load-vsp-*.sh que vai te direcionar.

Quando tiver lido tudo e validado o estado, responde:
"Contexto carregado. Branch: [X]. Último commit: [hash + mensagem]. Build status: [OK/falha]. Pronto pra receber script."
```

---

## Quando usar

- **Início de toda sessão nova** — sem exceção
- **Após pausa longa** (horas) — pra garantir que estado do repo está fresco na memória
- **Se Cowork ou Code começarem a parecer perdidos** — re-cola pra forçar releitura

## Por que isso importa

Cada sessão começa do zero (Cowork novo, Code novo). Sem esses prompts, perdemos 30+ minutos de cada sessão reconstruindo contexto ou pior, tomando decisões inconsistentes. Com eles, em 60 segundos estamos sincronizados.

## Quando esses prompts precisam mudar

Se mudar:
- Estrutura de pastas do projeto
- Localização dos docs (mudou de `/docs/` pra outro lugar)
- Nome do repo no GitHub
- Convenção de branches
- Qualquer coisa em `WORKFLOW.md` Seção 16 (Checklist de início de sessão)

Atualizar este arquivo + commit + push.
