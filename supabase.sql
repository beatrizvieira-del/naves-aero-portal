-- Portal Social Media · tabelas do Supabase
-- Rode uma vez em: Supabase → SQL Editor → New query → cole tudo → Run.
-- (Se for reaproveitar um projeto que já tem essas tabelas, NÃO precisa rodar.)

create table if not exists post_status (
  client_slug text not null,
  post_key    text not null,
  status      text,
  updated_at  timestamptz default now(),
  primary key (client_slug, post_key)
);

create table if not exists post_comments (
  id           bigint generated always as identity primary key,
  client_slug  text not null,
  post_key     text not null,
  comment_text text not null,
  created_at   timestamptz default now()
);

create table if not exists post_fields (
  client_slug text not null,
  post_key    text not null,
  field_name  text not null,
  field_value text,
  updated_at  timestamptz default now(),
  primary key (client_slug, post_key, field_name)
);

-- Acesso pelo link (sem login): leitura e escrita com a chave pública.
alter table post_status   enable row level security;
alter table post_comments enable row level security;
alter table post_fields   enable row level security;

create policy "portal le status"     on post_status   for select using (true);
create policy "portal grava status"  on post_status   for insert with check (true);
create policy "portal atualiza status" on post_status for update using (true);

create policy "portal le comentarios"    on post_comments for select using (true);
create policy "portal grava comentarios" on post_comments for insert with check (true);

create policy "portal le campos"     on post_fields for select using (true);
create policy "portal grava campos"  on post_fields for insert with check (true);
create policy "portal atualiza campos" on post_fields for update using (true);
