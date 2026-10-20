/* =========================================================
   CONFIGURAÇÃO DO PORTAL — NAVES AERO
   Edite só os valores entre aspas.
   ========================================================= */
window.PORTAL_CONFIG = {
  cliente: 'Naves Aero',
  subtitulo: 'Portal Social Media',

  // Identificador do cliente no banco. Não mude depois de publicar
  // (se mudar, os status e comentários antigos deixam de aparecer).
  slug: 'naves-aero',

  // Nome da agência, mostrado no rodapé do menu. Deixe '' para esconder.
  agencia: '',

  // Supabase: guarda status, comentários e textos editados para todos
  // que abrem o link. Sem isso, o portal funciona em "modo demonstração"
  // (o que você muda fica salvo só no seu navegador).
  supabaseUrl: '',   // ex.: 'https://abcdefgh.supabase.co'
  supabaseKey: '',   // a chave "publishable" / "anon" do projeto

  // Link da pré-pauta no Google Docs (botão "Abrir pré-pauta"). Opcional.
  linkPrePauta: 'https://docs.google.com/document/d/1Fr1o2c7iTSLImYBPpNqvyn5k18Bxp-mRgX-BjMx5eL8/edit'
};
