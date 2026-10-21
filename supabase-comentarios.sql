-- Portal Social Media · editar e apagar o próprio comentário
-- Rode uma vez em: Supabase → SQL Editor → New query → cole tudo → Run.

-- 1. Novas colunas: quem escreveu (só o "hash" do código do navegador) e data da edição
alter table post_comments add column if not exists autor_hash text;
alter table post_comments add column if not exists edited_at timestamptz;

-- 2. Funções que só aceitam a edição/exclusão quando o código do navegador confere
create extension if not exists pgcrypto with schema extensions;

create or replace function editar_comentario(p_id bigint, p_token text, p_texto text)
returns boolean
language plpgsql
security definer
set search_path = public, extensions
as $$
declare n int;
begin
  if coalesce(trim(p_texto), '') = '' then return false; end if;
  update post_comments
     set comment_text = p_texto, edited_at = now()
   where id = p_id
     and autor_hash is not null
     and autor_hash = encode(digest(p_token, 'sha256'), 'hex');
  get diagnostics n = row_count;
  return n > 0;
end $$;

create or replace function apagar_comentario(p_id bigint, p_token text)
returns boolean
language plpgsql
security definer
set search_path = public, extensions
as $$
declare n int;
begin
  delete from post_comments
   where id = p_id
     and autor_hash is not null
     and autor_hash = encode(digest(p_token, 'sha256'), 'hex');
  get diagnostics n = row_count;
  return n > 0;
end $$;

grant execute on function editar_comentario(bigint, text, text) to anon, authenticated;
grant execute on function apagar_comentario(bigint, text) to anon, authenticated;
