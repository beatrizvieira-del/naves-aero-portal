# Portal Social Media · Naves Aero

Site estático (HTML + JS), sem login. Quem tem o link vê o calendário, valida pauta, briefing e legenda, aprova criativos e comenta.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O portal (visual e funcionamento). Não precisa mexer. |
| `config.js` | Nome do cliente, agência e chaves do Supabase. |
| `conteudo.js` | Os posts do mês. É o único arquivo que muda todo mês. |
| `assets/` | Logos e ícone da Naves Aero. |
| `supabase.sql` | Cria as tabelas no Supabase (só se for um projeto novo). |

## 1. Banco de dados (Supabase)

Sem banco, o portal abre em **modo demonstração**: o que cada pessoa muda fica só no navegador dela.

1. Em supabase.com, crie um projeto (ou use um que a agência já tenha com as tabelas `post_status`, `post_comments` e `post_fields`).
2. Projeto novo: SQL Editor → cole o `supabase.sql` → Run.
3. Em Project Settings → API, copie a **Project URL** e a chave **publishable / anon**.
4. Cole as duas em `config.js` (`supabaseUrl` e `supabaseKey`).

Cada cliente é separado pelo `slug` (`naves-aero`), então o mesmo projeto serve para vários portais.

## 2. Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com → Add New → Project → importe o repositório → Deploy (sem build, é site estático).
3. Em Settings → Domains, dá para trocar o endereço (ex.: `naves-aero-portalsm.vercel.app`).

Cada alteração enviada ao GitHub publica sozinha.

## 3. Conteúdo do mês e o Google Drive

- A pasta do Drive com as artes e vídeos precisa estar como **"Qualquer pessoa com o link pode ver"**.
- Em `conteudo.js`, cada post tem `arquivos: ['ID1', 'ID2', ...]`. O ID é o trecho do link do Drive entre `/d/` e `/view`.
- Post sem arquivo aparece como "Arte em produção" (ou "Aguardando gravação" nos vídeos, com o roteiro editável). Quando o ID entra, a imagem ou o player aparece no lugar.
- Nome sugerido dos arquivos no Drive: `2026-10-05_01.jpg`, `2026-10-05_02.jpg`... (data do post + ordem do slide).

## Status

Aguardando · Em ajustes · Aprovado · Agendado · Não aprovado.
A pauta e o criativo têm status separados (a pauta é aprovada antes da produção).
