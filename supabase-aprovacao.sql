-- Portal Social Media · aprovação por comentário (aprovadores com link pessoal)
-- Rode uma vez em: Supabase → SQL Editor → New query → cole tudo → Run.
-- Troque CODIGO_1 / CODIGO_2 pelos códigos dos links pessoais (eles não ficam no site).

insert into portal_privado (chave, valor) values
  ('aprovador:CODIGO_1', 'Ivaldo'),
  ('aprovador:CODIGO_2', 'Denny')
on conflict (chave) do update set valor = excluded.valor;

-- devolve o nome do aprovador dono do código (ou nada)
create or replace function quem_aprova(p_codigo text)
returns text language sql security definer set search_path = public as $$
  select valor from portal_privado where chave = 'aprovador:' || p_codigo;
$$;

create or replace function aprovar_por_comentario(p_slug text, p_post_key text, p_codigo text, p_titulo text, p_detalhe text, p_comentario text)
returns text language plpgsql security definer set search_path = public, extensions as $$
declare v_nome text; v_txt text; v_url text; v_link text; v_msg text;
begin
  select valor into v_nome from portal_privado where chave = 'aprovador:' || p_codigo;
  if v_nome is null then return 'nao-aprovador'; end if;

  v_txt := translate(lower(coalesce(p_comentario, '')), 'áàâãäéèêëíìîïóòôõöúùûüç', 'aaaaaeeeeiiiiooooouuuuc');
  if v_txt !~ '\maprovad[oa]s?\M' then return 'sem-palavra'; end if;
  if v_txt ~ '\mnao\s+(esta\s+|foi\s+|ficou\s+)?aprovad' then return 'negativo'; end if;

  insert into post_status (client_slug, post_key, status, updated_at)
  values (p_slug, p_post_key, 'aprovado', now())
  on conflict (client_slug, post_key) do update set status = 'aprovado', updated_at = now();

  -- aviso no Google Chat (no máximo 1 por post a cada 2 min)
  if not exists (select 1 from aviso_log where client_slug = p_slug and post_key = 'aprov:' || p_post_key and criado_em > now() - interval '2 minutes') then
    select valor into v_url  from portal_privado where chave = 'gchat_webhook';
    select valor into v_link from portal_privado where chave = 'portal_link_equipe';
    if v_url like 'https://chat.googleapis.com/%' then
      v_msg := '✅ *Aprovado por ' || v_nome || '* · ' || (case when p_post_key like 'pp-%' then 'Pauta' else 'Criativo' end) || ' · Naves Aero' || E'\n'
            || '*' || left(coalesce(p_titulo, ''), 150) || '*' || coalesce(' (' || left(p_detalhe, 60) || ')', '') || E'\n'
            || '💬 "' || left(p_comentario, 500) || '"' || E'\n'
            || '👉 <' || v_link || '&post=' || p_post_key || '|Abrir o post no portal>';
      perform net.http_post(url := v_url, body := jsonb_build_object('text', v_msg),
        headers := '{"Content-Type": "application/json"}'::jsonb);
      insert into aviso_log (client_slug, post_key) values (p_slug, 'aprov:' || p_post_key);
    end if;
  end if;
  return 'ok:' || v_nome;
end $$;

grant execute on function quem_aprova(text) to anon, authenticated;
grant execute on function aprovar_por_comentario(text, text, text, text, text, text) to anon, authenticated;
