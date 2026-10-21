-- Portal Social Media · aviso no Google Chat quando o designer sobe arte nova
-- Rode uma vez em: Supabase → SQL Editor → New query → cole tudo → Run.
-- (Usa o mesmo webhook já guardado em portal_privado.)

insert into portal_privado (chave, valor) values
  ('portal_link_equipe', 'https://naves-aero-portal.vercel.app/?de=chat')
on conflict (chave) do update set valor = excluded.valor;

create or replace function avisar_arte_nova(p_slug text, p_post_key text, p_titulo text, p_detalhe text, p_qtd int, p_ajuste boolean)
returns text language plpgsql security definer set search_path = public, extensions as $$
declare v_url text; v_link text; v_msg text;
begin
  -- só avisa se a arte foi mesmo salva pelo portal
  if not exists (select 1 from post_fields where client_slug = p_slug and post_key = p_post_key
                 and field_name = 'arquivos' and coalesce(trim(field_value), '') <> '') then return 'sem-arte'; end if;
  if exists (select 1 from aviso_log where client_slug = p_slug and post_key = 'arte:' || p_post_key and criado_em > now() - interval '2 minutes') then return 'recente'; end if;
  if (select count(*) from aviso_log where criado_em > now() - interval '1 hour') >= 40 then return 'limite'; end if;

  select valor into v_url  from portal_privado where chave = 'gchat_webhook';
  select valor into v_link from portal_privado where chave = 'portal_link_equipe';
  if v_url is null or v_url not like 'https://chat.googleapis.com/%' then return 'sem-webhook'; end if;

  v_msg := (case when p_ajuste then '🔁 *Arte ajustada para aprovação*' else '🟢 *Arte nova para aprovação*' end) || ' · Naves Aero' || E'\n'
        || '*' || left(coalesce(p_titulo, ''), 150) || '*' || coalesce(' (' || left(p_detalhe, 60) || ')', '') || E'\n'
        || '🖼 ' || greatest(coalesce(p_qtd, 1), 1) || (case when coalesce(p_qtd, 1) > 1 then ' arquivos' else ' arquivo' end) || E'\n'
        || '👉 <' || v_link || '&post=' || p_post_key || '|Ver e aprovar no portal>';

  perform net.http_post(url := v_url, body := jsonb_build_object('text', v_msg),
    headers := '{"Content-Type": "application/json"}'::jsonb);
  insert into aviso_log (client_slug, post_key) values (p_slug, 'arte:' || p_post_key);
  return 'ok';
end $$;

grant execute on function avisar_arte_nova(text, text, text, text, int, boolean) to anon, authenticated;
