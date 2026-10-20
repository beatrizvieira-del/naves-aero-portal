/* =========================================================
   CONTEÚDO DO MÊS — NAVES AERO
   Um bloco { ... } por post. Campos:
     id           identificador único (use a data; some -story, -b etc. se houver 2 no dia)
     data         'AAAA-MM-DD'
     formato      'Estático' | 'Carrossel' | 'Reels' | 'Vídeo' | 'Story'
     editoria     (opcional) editoria / território da marca
     redes        ['Instagram', 'LinkedIn', ...]
     tema, objetivo, direcionamento, copy, legenda, roteiro   (texto)
     statusPauta  (opcional) status inicial da pauta: 'aprovado', 'aguardando'...
     arquivos     IDs dos arquivos no Google Drive, na ordem dos slides.
                  O ID é o trecho entre /d/ e /view do link de compartilhamento.
                  A pasta precisa estar como "Qualquer pessoa com o link".
   Fonte de outubro/2026: doc "Naves_Aero_Pautas_Instagram" (15/10/2026).
   As datas abaixo são provisórias (o doc não traz cronograma).
   ========================================================= */
window.PORTAL_POSTS = [
  {
    id: '2026-10-02', data: '2026-10-02', formato: 'Reels', editoria: 'Tempo que nos impulsiona', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'O dia que rendeu 48 horas',
    objetivo: 'Mostrar como a Naves encurta o espaço entre as responsabilidades e as prioridades do cliente: várias cidades e o jantar em casa no mesmo dia.',
    direcionamento: 'Reels de 30 a 45 s.\nAmanhecer em Uberlândia, embarque no PR-UUT, reunião, pouso no fim da tarde, jantar em família. Pouca imagem do avião e muito clima de rotina.',
    roteiro: 'Textos na tela:\n1. 6h40, Uberlândia.\n2. 9h30, reunião em São Paulo.\n3. 14h, segunda reunião, outra cidade.\n4. 20h, em casa para o jantar.\n5. Fechamento: "O dia rendeu 48 horas."',
    copy: '',
    legenda: 'Reunião pela manhã em São Paulo. Visita à operação à tarde. Jantar em casa à noite. Não é sobre a distância entre duas cidades. É sobre encurtar o espaço entre as suas responsabilidades e as suas prioridades.\n\nFale com a gente e desenhe a sua rota.',
    arquivos: []
  },
  {
    id: '2026-10-05', data: '2026-10-05', formato: 'Carrossel', editoria: 'Informativo / Segurança', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'Segurança em primeiro lugar',
    objetivo: 'Mostrar o que acontece nos bastidores antes de cada voo (inspeção, tripulação, manutenção e certificação) para reforçar a confiança na operação.',
    direcionamento: 'Carrossel de 6 slides (alternativa: Reels com piloto).\nFoto do cockpit do Phenom 100 como capa, inspeção externa, checklist, hangar e tripulação uniformizada.',
    copy: '1. Capa: "Segurança em primeiro lugar. Antes de você embarcar, muita coisa já aconteceu."\n2. Inspeção pré-voo: cada voo começa com a verificação completa da aeronave.\n3. Tripulação: pilotos com [X] horas de voo e treinamento periódico.\n4. Manutenção: programa de manutenção seguindo as exigências do fabricante e da ANAC.\n5. Certificação: operação autorizada pela ANAC para táxi-aéreo [confirmar nº/certificação RBAC 135].\n6. Fechamento: "A precisão fica nos bastidores para que, na cabine, tudo pareça invisível."',
    roteiro: '',
    legenda: 'O seu voo começa muito antes da decolagem. Inspeção, checklist, planejamento e uma tripulação preparada para que a única coisa com que você precise se preocupar seja o seu destino.\n\nFicou com alguma dúvida sobre segurança? Pergunte nos comentários.',
    arquivos: []
  },
  {
    id: '2026-10-07', data: '2026-10-07', formato: 'Carrossel', editoria: 'Efficiency Lab / Oportunidades', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'Quanto custa a sua espera?',
    objetivo: 'Comparar, numa rota frequente dos clientes, o tempo porta a porta da aviação comercial com o da Naves. Bom post para impulsionar.',
    direcionamento: 'Carrossel de 7 slides.\nLayout limpo com duas colunas, Comercial × Naves, na paleta da marca (preto, branco e laranja).',
    copy: '1. Capa: "Uberlândia → [destino]. Quanto tempo você perde para chegar?"\n2. Deslocamento e antecedência no aeroporto: comercial [X h] × Naves [X min].\n3. Conexões: comercial [X] × Naves direto.\n4. Tempo total porta a porta: comercial [X h] × Naves [X h].\n5. Flexibilidade de horário: horário da companhia × o seu horário.\n6. "Em um mês com 4 viagens, são [X] horas devolvidas."\n7. Fechamento: "Não cobramos por hora de voo. Devolvemos horas de vida."',
    roteiro: '',
    legenda: 'Fila, conexão, atraso, espera. Na ponta do lápis, o tempo perdido custa mais do que parece. Fizemos a conta numa rota que muitos dos nossos clientes fazem toda semana.\n\nMande a sua rota no direct e fazemos a conta para você.',
    arquivos: []
  },
  {
    id: '2026-10-09', data: '2026-10-09', formato: 'Carrossel', editoria: 'Atendimento', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'Nada concorre pela sua atenção',
    objetivo: 'Mostrar a experiência a bordo: conforto, silêncio e serviço pensado nos detalhes.',
    direcionamento: 'Carrossel estético de 4 a 5 fotos (alternativa: post estático).\nA foto da cabine com a luz azul como capa, detalhes do couro, mesa posta, serviço de bordo e janela com céu.',
    copy: 'Texto na arte (capa): "Onde o mundo exterior silencia."',
    roteiro: '',
    legenda: 'Couro, silêncio e um serviço pensado nos detalhes. A bordo, nada concorre pela sua atenção. Nem filas, nem ruído, nem pressa. Seu ritmo, do embarque ao pouso.\n\nConte para a gente: o que não pode faltar no seu voo?',
    arquivos: []
  },
  {
    id: '2026-10-12', data: '2026-10-12', formato: 'Carrossel', editoria: 'Private Retreats', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'Fim de semana em outro destino',
    objetivo: 'Inspirar viagens de lazer: destinos que ficam a um voo de distância de Uberlândia.',
    direcionamento: 'Carrossel de 5 a 6 slides.\nUma foto por destino (pousada, natureza, vista), sempre de imagens próprias ou com licença.',
    copy: '1. Capa: "Fim de semana em outro destino. Saia na sexta, volte no domingo, viva o meio."\n2 a 5. Um destino por slide: nome, tempo de voo a partir de Uberlândia [X] e uma frase sobre o lugar.\n6. Fechamento: "São mais de 3.000 aeródromos no Brasil. A aviação comercial chega a cerca de 140."',
    roteiro: '',
    legenda: 'Há lugares que pedem mais de um dia de estrada e mais de uma conexão. Com a Naves, eles ficam a um voo de distância. Qual desses seria o seu próximo fim de semana?\n\nSalve este post para planejar o seu próximo destino.',
    arquivos: []
  },
  {
    id: '2026-10-14', data: '2026-10-14', formato: 'Reels', editoria: 'Brand / Atendimento', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'Quem está no comando',
    objetivo: 'Apresentar o comandante e humanizar a operação: quem conhece cada detalhe da aeronave.',
    direcionamento: 'Reels de entrevista curta (alternativa: carrossel com retrato).\nO comandante no cockpit e na aeronave, em retrato natural, sem pose de catálogo.',
    roteiro: 'Perguntas na tela:\n1. "Há quanto tempo você voa?"\n2. "O que você confere antes de todo voo?"\n3. "Qual a rota mais bonita que você já fez?"\n4. Fechamento: "Comandante [Nome]. [X] horas de voo."',
    copy: '',
    legenda: 'Por trás de cada voo, existe alguém que conhece cada detalhe da aeronave. Conheça o comandante [Nome], que está com a Naves desde [ano].\n\nDeixe uma pergunta para o nosso comandante nos comentários.',
    arquivos: []
  },
  {
    id: '2026-10-16', data: '2026-10-16', formato: 'Carrossel', editoria: 'Informativo', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'Mitos e Verdades sobre Táxi-Aéreo',
    objetivo: 'Desmontar crenças comuns sobre táxi-aéreo e reforçar a importância de voar com empresa certificada pela ANAC.',
    direcionamento: 'Carrossel de 7 slides.\nUm slide por afirmação, com selo "MITO" ou "VERDADE".',
    copy: '1. Capa: "Mitos e Verdades sobre Táxi-Aéreo."\n2. "Só bilionário voa de jato executivo." MITO. Fretamento por trecho e pacote de horas tornam o voo acessível a quem precisa de tempo.\n3. "É preciso ter avião próprio." MITO. Você voa sem os custos e a gestão de uma aeronave.\n4. "Tem que chegar horas antes." MITO. O embarque é ágil, sem as filas da aviação comercial.\n5. "Qualquer avião particular pode vender voo." MITO. Só empresas certificadas pela ANAC podem operar táxi-aéreo. Desconfie de ofertas fora disso.\n6. "Dá para pousar em cidades sem voo comercial." VERDADE. O Brasil tem milhares de aeródromos além dos aeroportos comerciais.\n7. Fechamento: "Tem outra dúvida? Pergunte nos comentários."',
    roteiro: '',
    legenda: 'Voar de táxi-aéreo é mais simples do que parece, e algumas verdades fazem toda a diferença na hora de escolher com quem voar.\n\nMande este post para quem sempre teve essa dúvida.',
    arquivos: []
  },
  {
    id: '2026-10-19', data: '2026-10-19', formato: 'Carrossel', editoria: 'Brand', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'Do Triângulo Mineiro para o Brasil',
    objetivo: 'Posicionar Uberlândia como ponto de partida e mostrar as principais rotas e tempos de voo da Naves.',
    direcionamento: 'Carrossel com mapa.\nMapa minimalista com Uberlândia ao centro e linhas para os principais destinos.',
    copy: '1. Capa: "Do Triângulo Mineiro para o Brasil."\n2. Mapa com as rotas.\n3. Tempos de voo: São Paulo [X], Brasília [X], Goiânia [X], [outros].\n4. "Uberlândia está no centro de quem produz no país: agronegócio, logística e indústria."\n5. Fechamento: "Nossa base é aqui. Nosso destino é onde você precisa estar."',
    roteiro: '',
    legenda: 'Uberlândia não é ponto de passagem. É ponto de partida. Daqui, os principais centros de decisão do Brasil ficam a poucas horas, ou menos.\n\nQual rota você faz com mais frequência?',
    arquivos: []
  },
  {
    id: '2026-10-21', data: '2026-10-21', formato: 'Carrossel', editoria: 'Oportunidades', redes: ['Instagram', 'LinkedIn'], statusPauta: 'aprovado',
    tema: 'Seu avião parado também custa',
    objetivo: 'Apresentar a gestão de aeronaves da Naves para proprietários: custo da ociosidade e receita com fretamento.',
    direcionamento: 'Carrossel de 5 slides (também para LinkedIn).\nAeronave no hangar, sóbrio, com tom de negócio.',
    copy: '1. Capa: "Seu avião parado também custa."\n2. Hangaragem, manutenção, tripulação e seguro continuam, voe você ou não.\n3. A Naves faz a gestão completa da sua aeronave.\n4. Nas horas em que você não voa, ela pode gerar receita com fretamento.\n5. Fechamento: "Você mantém o uso. Nós cuidamos do resto."',
    roteiro: '',
    legenda: 'Ter uma aeronave é uma decisão estratégica. Deixá-la ociosa, nem tanto. Conheça a gestão de aeronaves da Naves.\n\nFale com nosso time para uma conversa reservada.',
    arquivos: []
  },
  {
    id: '2026-10-23', data: '2026-10-23', formato: 'Carrossel', editoria: 'Informativo', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'Como funciona uma cotação',
    objetivo: 'Mostrar que pedir uma cotação é simples, rápido e sem surpresas, para executivos e para quem organiza a agenda deles.',
    direcionamento: 'Carrossel de 5 slides (alternativa: Reels curto com tela e bastidor).\nCelular com a conversa de cotação, atendimento humano, embarque.',
    copy: '1. Capa: "Do pedido ao embarque, em 4 passos."\n2. Você informa origem, destino, data e número de passageiros.\n3. Recebe a cotação em [X min/h], com tudo detalhado.\n4. Confirmamos a operação e cuidamos da logística.\n5. Você só embarca.',
    roteiro: '',
    legenda: 'Simples assim. Para quem organiza a agenda de executivos, ou a própria, voar com a Naves é rápido, claro e sem surpresas.\n\nPeça sua cotação pelo link da bio.',
    arquivos: []
  },
  {
    id: '2026-10-26', data: '2026-10-26', formato: 'Reels', editoria: 'Performance Circle', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'Chegar inteiro para o que importa',
    objetivo: 'Conectar a Naves ao público de esportes de alta performance (golfe, tênis): chegar descansado faz parte do jogo.',
    direcionamento: 'Reels.\nEquipamento de golfe ou tênis embarcando, chegada ao clube, o primeiro movimento do jogo.',
    roteiro: 'Textos na tela:\n1. "Sábado, 7h. O torneio começa às 10h."\n2. "Sem estrada. Sem conexão."\n3. "Chegar descansado é parte do jogo."',
    copy: '',
    legenda: 'Precisão, disciplina e foco: o que vale dentro do campo vale para o caminho até ele. Você cuida do jogo. A gente cuida da chegada.\n\nQual é o seu esporte?',
    arquivos: []
  },
  {
    id: '2026-10-28', data: '2026-10-28', formato: 'Carrossel', editoria: 'Post avulso', redes: ['Instagram'], statusPauta: 'aprovado',
    tema: 'Phenom 100: conforto como ponto de partida',
    objetivo: 'Mostrar a versatilidade do Phenom 100 e as vantagens de voar nele, direcionando para os consultores.',
    direcionamento: 'Carrossel 4:5: capa, 3 a 4 cards (no máximo) e card final de CTA.\nFotos do Phenom 100 em voo, em solo e detalhes da cabine.\nTom de redação publicitária, leve e fluido, sem viés técnico ou jornalístico.',
    copy: '[a definir] Capa + 3 a 4 cards sobre a versatilidade e as vantagens do Phenom 100.\nCard final: CTA para falar com os consultores.',
    roteiro: '',
    legenda: 'A 41.000 pés de altitude, o Phenom 100 voa acima do clima e do movimento: onde o ar é mais liso e a cabine, silenciosa. São 650 km/h de velocidade de cruzeiro e 2.100 km de autonomia: o suficiente para unir cidades no mesmo dia, sem escalas e sem desgaste.\nO resultado? Você chega no horário, descansado e com os compromissos em dia.\nPorque conforto, na NAVES AERO, não é um detalhe. É o ponto de partida.\nAcesse o link na bio e fale com um consultor.\nNAVES AERO · Conectando o que importa.\n\n#AviaçãoExecutiva #NAVESAERO #Phenom100 #Embraer #VoarPrivado',
    arquivos: []
  }
];
