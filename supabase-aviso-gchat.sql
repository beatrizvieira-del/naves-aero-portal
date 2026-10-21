-- Portal Social Media · aviso ao designer no Google Chat
-- Rode uma vez em: Supabase → SQL Editor → New query → cole tudo → Run.
-- Troque COLE_AQUI_A_URL_DO_WEBHOOK pela URL do webhook do espaço do Google Chat.
-- (A URL fica guardada só no banco, numa tabela que o site não consegue ler.)

create extension if not exists pg_net;

create table if not exists portal_privado (chave text primary key, valor text);
alter table portal_privado enable row level security;   -- sem políticas: ninguém lê pelo site

insert into portal_privado (chave, valor) values
  ('gchat_webhook', 'COLE_AQUI_A_URL_DO_WEBHOOK'),
  ('portal_link',   'https://naves-aero-portal.vercel.app/?design=630a4239')
on conflict (chave) do update set valor = excluded.valor;

create table if not exists aviso_log (
  id bigint generated always as identity primary key,
  client_slug text, post_key text, criado_em timestamptz default now()
);
alter table aviso_log enable row level security;

create or replace function avisar_designer(p_slug text, p_post_key text, p_titulo text, p_detalhe text, p_autor text, p_comentario text)
returns text language plpgsql security definer set search_path = public, extensions as $$
declare v_status text; v_url text; v_link text; v_msg text;
begin
  -- só avisa se o post está mesmo "Em ajustes" ou "Não aprovado" no banco
  select status into v_status from post_status where client_slug = p_slug and post_key = p_post_key;
  if v_status is null or v_status not in ('ajustes', 'reprovado') then return 'status'; end if;
  if coalesce(trim(p_comentario), '') = '' then return 'sem-comentario'; end if;
  -- evita mensagens repetidas
  if exists (select 1 from aviso_log where client_slug = p_slug and post_key = p_post_key and criado_em > now() - interval '2 minutes') then return 'recente'; end if;
  if (select count(*) from aviso_log where criado_em > now() - interval '1 hour') >= 40 then return 'limite'; end if;

  select valor into v_url  from portal_privado where chave = 'gchat_webhook';
  select valor into v_link from portal_privado where chave = 'portal_link';
  if v_url is null or v_url not like 'https://chat.googleapis.com/%' then return 'sem-webhook'; end if;

  v_msg := (case when v_status = 'ajustes' then '🟠 *Ajuste pedido*' else '🔴 *Não aprovado*' end)
        || ' · ' || (case when p_post_key like 'pp-%' then 'Pauta' else 'Criativo' end) || ' · Naves Aero' || E'\n'
        || '*' || left(coalesce(p_titulo, ''), 150) || '*' || coalesce(' (' || left(p_detalhe, 60) || ')', '') || E'\n'
        || '💬 ' || coalesce(nullif(left(trim(p_autor), 40), '') || ': ', '') || '"' || left(p_comentario, 800) || '"' || E'\n'
        || '👉 <' || v_link || '&post=' || p_post_key || '|Abrir o post no portal>';

  perform net.http_post(
    url := v_url,
    body := jsonb_build_object('text', v_msg),
    headers := '{"Content-Type": "application/json"}'::jsonb
  );
  insert into aviso_log (client_slug, post_key) values (p_slug, p_post_key);
  return 'ok';
end $$;

grant execute on function avisar_designer(text, text, text, text, text, text) to anon, authenticated;
