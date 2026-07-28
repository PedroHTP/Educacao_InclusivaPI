const detailPanel = document.querySelector("#detailPanel");
const params = new URLSearchParams(window.location.search);
const selectedSlug = params.get("conteudo");

const detailGuides = {
  conceito: [
    "Use este conceito como referência rápida para interpretar os demais materiais da trilha.",
    "Ao aplicar em sala, observe quais barreiras precisam ser removidas antes de escolher uma ferramenta.",
    "Relacione o conceito com acessibilidade, participação e aprendizagem, não apenas com presença física na escola.",
  ],
  trilha: [
    "Leia esta etapa como parte de uma sequência: diagnóstico, possibilidades, aplicações e responsabilidade.",
    "Transforme a ideia central em uma pergunta para discussão com estudantes, professores ou equipe pedagógica.",
    "Registre quais decisões práticas a escola precisaria tomar para avançar para a próxima etapa.",
  ],
  aplicacao: [
    "Use este item para pensar em ações concretas que apoiem estudantes, professores e famílias.",
    "Antes de adotar uma ferramenta, verifique acessibilidade, privacidade, supervisão humana e contexto de uso.",
    "Prefira pilotos pequenos, com acompanhamento docente e feedback das pessoas impactadas.",
  ],
  recurso: [
    "Abra o recurso original para assistir, ouvir ou consultar o material completo.",
    "Use o resumo abaixo para decidir como o material se conecta à trilha principal.",
    "Depois de acessar o recurso, volte ao painel para comparar com outros conteúdos relacionados.",
  ],
};

const commonSources = [
  {
    title: "Padlet original: IA e Inclusão",
    url: "https://padlet.com/gustavocostatech/ia-e-inclusao-4u4hw93o1xvzntek",
  },
  {
    title: "Padlet trabalho PI",
    url: "https://padlet.com/maryvitoria054/trabalho-pi-hxlfdcfmyq779qko",
  },
  {
    title: "UNESCO: Guidance for generative AI in education and research",
    url: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research?hub=67098",
  },
  {
    title: "CAST: Universal Design for Learning Guidelines",
    url: "https://udlguidelines.cast.org/",
  },
  {
    title: "Lei Brasileira de Inclusão - Lei nº 13.146/2015",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
  },
  {
    title: "Promoting inclusive AI and technology in K-12 education",
    url: "https://www.sciencedirect.com/science/article/pii/S2666920X25001183",
  },
  {
    title: "Challenges and opportunities of AI in inclusive education: LEAF",
    url: "https://link.springer.com/article/10.1186/s40561-023-00286-2",
  },
  {
    title: "Microsoft: Immersive Reader research and case studies",
    url: "https://learn.microsoft.com/en-us/training/educator-center/product-guides/immersive-reader/research",
  },
];

const detailContent = {
  "objetivos-do-padlet": {
    padlet: [
      "O Padlet IA e Inclusão organiza a aprendizagem como trilha: começa pelo problema, avança para o potencial da IA, examina riscos e fecha com aplicação responsável.",
      "O segundo Padlet, trabalho PI, complementa essa proposta em formato whiteboard, com percurso visual, objetivos em vídeo, podcast e materiais multimídia.",
    ],
    research: [
      "A revisão sobre IA inclusiva no K-12 defende que iniciativas de IA precisam ser planejadas com identidade, acesso tecnológico, design participativo, tarefas abertas e senso de pertencimento.",
      "A orientação da UNESCO reforça que IA na educação exige visão centrada nas pessoas, validação pedagógica, proteção de dados e preparação institucional.",
    ],
    questions: [
      "Qual barreira concreta a trilha quer enfrentar primeiro?",
      "Quem precisa participar da decisão sobre o uso da IA?",
      "Como a escola vai saber se a ferramenta ampliou participação e aprendizagem?",
    ],
    sources: [commonSources[0], commonSources[1], commonSources[2], commonSources[5]],
  },
  "a-ia-aproxima-ou-afasta-a-educacao-inclusiva": {
    padlet: [
      "O Padlet formula a tensão central: a IA já está em plataformas, aplicativos, chatbots e sistemas de apoio. A pergunta não é se ela estará presente, mas de que forma será usada.",
      "A trilha alerta que, sem intenção inclusiva, a IA pode reforçar desigualdades e criar novas barreiras.",
    ],
    research: [
      "A UNESCO aponta riscos de privacidade, agência, inclusão, equidade, diversidade linguística e cultural quando ferramentas generativas são adotadas sem regulação e validação educacional.",
      "A revisão K-12 mostra que acesso desigual, baixo alinhamento curricular e pouca documentação de resultados ainda são lacunas frequentes nas experiências com IA educacional.",
    ],
    questions: [
      "A ferramenta resolve uma barreira real ou apenas adiciona tecnologia?",
      "Os estudantes com deficiência conseguem usar a solução com autonomia?",
      "Há supervisão humana e critérios claros de uso?",
    ],
    sources: [commonSources[0], commonSources[2], commonSources[5]],
  },
  "glossario-relampago-i": {
    padlet: [
      "Educação Inclusiva, no Padlet, significa garantir acesso, permanência, participação e aprendizagem para todos, respeitando diferenças físicas, sensoriais, intelectuais, sociais e culturais.",
      "Equidade aparece como o princípio de oferecer apoios diferentes para alcançar oportunidades e resultados justos, em vez de tratar todas as pessoas da mesma forma.",
    ],
    research: [
      "O DUA, segundo CAST, orienta o desenho de experiências com múltiplas formas de engajamento, representação, ação e expressão, reduzindo barreiras desde o planejamento.",
      "A revisão K-12 relaciona inclusão com currículo relevante para a vida dos estudantes, colaboração, multimodalidade e participação ativa no desenho das atividades.",
    ],
    questions: [
      "Que barreiras de acesso, participação e aprendizagem aparecem nessa turma?",
      "Que apoios diferentes são necessários para oportunidades mais justas?",
      "O planejamento oferece mais de uma forma de aprender e demonstrar conhecimento?",
    ],
    sources: [commonSources[0], commonSources[3], commonSources[5]],
  },
  "glossario-relampago-ii": {
    padlet: [
      "O Padlet define IA como tecnologias capazes de analisar dados, aprender padrões, gerar respostas e adaptar conteúdos.",
      "A LBI é apresentada como marco legal que assegura educação inclusiva, acessibilidade, atendimento educacional especializado e eliminação de barreiras.",
    ],
    research: [
      "A LBI estabelece o direito da pessoa com deficiência a sistema educacional inclusivo em todos os níveis, com aprendizagem ao longo da vida.",
      "A UNESCO recomenda que o uso de IA seja pedagogicamente validado e adequado à idade, com atenção à segurança, equidade e proteção de dados.",
    ],
    questions: [
      "A tecnologia escolhida cumpre uma função pedagógica clara?",
      "Ela remove barreiras ou cria dependência e exclusão?",
      "Há acessibilidade, transparência e proteção de dados suficientes?",
    ],
    sources: [commonSources[0], commonSources[2], commonSources[4]],
  },
  "estacao-1": {
    padlet: [
      "A pergunta da Estação 1 é: que barreiras existem no cotidiano escolar?",
      "O Padlet lista barreiras como falta de acessibilidade em materiais e ferramentas, baixa adaptação, formação docente insuficiente, desigualdade de acesso à tecnologia e currículos pouco conectados à realidade dos estudantes.",
    ],
    research: [
      "A LBI destaca acesso, permanência, participação e aprendizagem por meio de recursos de acessibilidade que eliminem barreiras.",
      "A revisão K-12 indica que o acesso tecnológico e a relevância cultural do currículo são condições centrais para ampliar participação em IA e tecnologia.",
    ],
    questions: [
      "A barreira é física, comunicacional, curricular, tecnológica ou atitudinal?",
      "Quem está ficando sem participação efetiva?",
      "Que evidência mostra que a barreira foi reduzida?",
    ],
    sources: [commonSources[0], commonSources[4], commonSources[5]],
  },
  "estacao-2": {
    padlet: [
      "A Estação 2 pergunta quais portas da IA são reais, não apenas promessa.",
      "O Padlet destaca quatro portas: habilidades sociais e interação, personalização da aprendizagem, ambientes virtuais de aprendizagem e chatbots com linguagem acessível.",
    ],
    research: [
      "O estudo sobre LEAF descreve ambiente de leitura com BookRoll e painéis de learning analytics para apoiar acompanhamento, anotações, marcações e visualização de dados de aprendizagem.",
      "O DUA ajuda a avaliar essas portas: ferramentas inclusivas precisam oferecer múltiplas formas de percepção, linguagem, interação, expressão e apoio à autonomia.",
    ],
    questions: [
      "A porta escolhida responde a uma necessidade específica ou é apenas novidade?",
      "A personalização respeita ritmo, comunicação e autonomia do estudante?",
      "O professor consegue interpretar e agir sobre os dados gerados?",
    ],
    sources: [commonSources[0], commonSources[3], commonSources[6]],
  },
  "estacao-3": {
    padlet: [
      "A Estação 3 apresenta exemplos concretos: CapacitaBOT para habilidades sociais, LEAF para e-learning com análise de evidências e IA apoiando estratégias docentes no TEA.",
      "A ideia é usar exemplos para imaginar aplicações inclusivas que tenham intenção pedagógica, não apenas automação.",
    ],
    research: [
      "O artigo sobre LEAF mostra como dados de leitura, marcações, anotações e tempo de interação podem apoiar acompanhamento em ambientes inclusivos.",
      "A revisão K-12 associa projetos centrados no estudante, colaboração e multimodalidade a ganhos cognitivos, afetivos e sociais, embora alerte para a necessidade de medir resultados com mais rigor.",
    ],
    questions: [
      "Qual exemplo se aproxima mais da realidade da escola?",
      "Que adaptação seria necessária para deficiência, TEA, dislexia ou outra necessidade específica?",
      "Como medir participação, aprendizagem e bem-estar depois da implementação?",
    ],
    sources: [commonSources[0], commonSources[5], commonSources[6]],
  },
  lbi: {
    padlet: [
      "O Padlet pergunta o que a LBI garante quando falamos de educação inclusiva.",
      "A resposta sintetizada é que a escola deve assegurar condições reais para que estudantes desenvolvam talentos e habilidades segundo suas características e necessidades.",
    ],
    research: [
      "O Art. 27 da LBI afirma a educação como direito da pessoa com deficiência em sistema inclusivo, em todos os níveis, com aprendizagem ao longo da vida.",
      "O Art. 28 reforça a necessidade de serviços e recursos de acessibilidade para eliminar barreiras e promover inclusão plena.",
    ],
    questions: [
      "A prática proposta garante permanência, participação e aprendizagem?",
      "Quais recursos de acessibilidade precisam existir desde o início?",
      "A família, a comunidade escolar e o estudante foram ouvidos?",
    ],
    sources: [commonSources[0], commonSources[4]],
  },
  "visao-geral": {
    padlet: [
      "O Padlet resume que duas pesquisas exploram o uso inclusivo da IA na educação, especialmente para estudantes com diferenças de aprendizagem.",
      "Os materiais citados conectam desenho de futuro sem barreiras, IA inclusiva no K-12 e aplicações práticas em leitura, tutoria e suporte docente.",
    ],
    research: [
      "A revisão K-12 analisou 17 estudos empíricos publicados entre 2013 e 2024 e identificou princípios de identidade, tecnologia, design, desenvolvimento de conteúdo e pertencimento.",
      "O relatório AI + Learning Differences, citado no Padlet, reforça o desenho de soluções com foco em diferenças de aprendizagem e participação desde o início.",
    ],
    questions: [
      "Que achados da pesquisa podem virar uma prática da escola?",
      "Quais evidências ainda faltam antes de adotar uma solução?",
      "A proposta melhora acesso, autonomia e aprendizagem ao mesmo tempo?",
    ],
    sources: [commonSources[0], commonSources[5], { title: "AI + Learning Differences: Designing a Future with No Boundaries", url: "https://padlet-uploads-usc1.storage.googleapis.com/5130909431/a79e69fceedd3f1c1233e7193cc5692f/AI_Learning_Differences_Designing_a_Future_with_No_Boundaries_Final__1_.pdf" }],
  },
  "como-a-ia-pode-ajudar": {
    padlet: [
      "O Padlet organiza apoios para estudantes, professores e famílias: leitura personalizada, suporte emocional supervisionado, tutoria adaptativa, comunicação assistiva, planos diferenciados e simplificação de documentos.",
      "A ênfase é que a IA deve apoiar relações pedagógicas, não substituir escuta, mediação e responsabilidade docente.",
    ],
    research: [
      "Evidências reunidas pela Microsoft sobre leitura mostram benefícios de recursos como espaçamento, linhas mais curtas, segmentação silábica e leitura em voz alta para diferentes perfis de leitores.",
      "A revisão K-12 indica possíveis ganhos cognitivos, afetivos e sociais quando IA e tecnologia são integradas a estratégias inclusivas e objetivos claros.",
    ],
    questions: [
      "Quem se beneficia diretamente desse apoio?",
      "Há alternativa acessível para estudantes sem internet, dispositivo próprio ou familiaridade digital?",
      "Que parte da decisão continua com professor, estudante e família?",
    ],
    sources: [commonSources[0], commonSources[1], commonSources[5], commonSources[7]],
  },
  "exemplos-praticos-de-ferramentas": {
    padlet: [
      "O Padlet cita ferramentas já existentes, como Microsoft Immersive Reader, Khanmigo, Alongside e ROAR.",
      "Também cita propostas do Hackathon de Stanford: Empower IEP, FeelLink e Maestra.",
    ],
    research: [
      "Ferramentas de leitura inclusiva tendem a ser mais defensáveis quando combinam acessibilidade perceptiva, apoio linguístico e autonomia do estudante.",
      "A revisão K-12 recomenda tecnologias acessíveis, atuais, conectadas ao cotidiano dos estudantes e alinhadas a objetivos pedagógicos mensuráveis.",
    ],
    questions: [
      "A ferramenta é acessível, gratuita ou viável para a rede?",
      "Quais dados ela coleta e quem pode acessá-los?",
      "O professor recebeu formação para usar a ferramenta com intencionalidade inclusiva?",
    ],
    sources: [commonSources[0], commonSources[5], commonSources[7]],
  },
  "checklist-de-implementacao": {
    padlet: [
      "O checklist do Padlet orienta incluir pessoas com diferenças de aprendizagem no design, compensar participantes pelo conhecimento compartilhado, garantir acessibilidade desde o início e treinar professores.",
      "Esse checklist funciona como filtro mínimo antes de levar uma solução de IA para a sala de aula.",
    ],
    research: [
      "A UNESCO recomenda validação ética e pedagógica antes do uso educacional de IA, além de políticas para privacidade e segurança.",
      "A revisão K-12 destaca design participativo, pertencimento, colaboração e ferramentas acessíveis como princípios de implementação inclusiva.",
    ],
    questions: [
      "Pessoas impactadas participaram do desenho e da avaliação?",
      "A acessibilidade foi planejada ou ficou para adaptação posterior?",
      "Há formação docente e plano de acompanhamento?",
    ],
    sources: [commonSources[0], commonSources[2], commonSources[5]],
  },
  "trilha-complementar": {
    padlet: [
      "O Padlet trabalho PI é um whiteboard complementar com percurso visual sobre Educação Inclusiva e IA.",
      "Ele reúne objetivo da trilha, podcast, imagens, áudios e materiais multimídia que ajudam a transformar o tema em experiência exploratória.",
    ],
    research: [
      "Pela lógica do DUA, um whiteboard multimídia pode apoiar múltiplas formas de representação e engajamento, desde que os recursos sejam acessíveis e tenham alternativa textual.",
      "A revisão K-12 valoriza atividades abertas, colaborativas e conectadas à identidade dos estudantes.",
    ],
    questions: [
      "Os elementos visuais têm texto alternativo ou descrição equivalente?",
      "O percurso visual ajuda a organizar o raciocínio ou dispersa o foco?",
      "Como estudantes com diferentes formas de acesso podem navegar pelo material?",
    ],
    sources: [commonSources[1], commonSources[3], commonSources[5]],
  },
  "objetivos-da-trilha-ia-e-educacao-inclusiva": {
    padlet: [
      "O vídeo do segundo Padlet apresenta os objetivos da trilha de IA e Educação Inclusiva.",
      "Ele funciona como entrada multimídia para explicar por que o tema envolve barreiras, escolhas pedagógicas e responsabilidade.",
    ],
    research: [
      "O DUA recomenda oferecer múltiplos meios de representação; vídeos podem apoiar compreensão quando são acompanhados de legenda, roteiro ou síntese textual.",
      "A UNESCO reforça que recursos digitais precisam estar ligados a objetivos educacionais e avaliados quanto à adequação pedagógica.",
    ],
    questions: [
      "O vídeo tem legenda ou alternativa textual?",
      "O objetivo apresentado está conectado às atividades do painel?",
      "Que aprendizagem o estudante deve demonstrar depois de assistir?",
    ],
    sources: [commonSources[1], commonSources[2], commonSources[3]],
  },
  "podcast-inclusao-ou-exclusao-algoritmica-na-escola": {
    padlet: [
      "O segundo Padlet inclui o podcast em vídeo Inclusão ou exclusão algorítmica na escola.",
      "O tema amplia a discussão: a IA pode apoiar inclusão, mas algoritmos também podem reproduzir vieses, invisibilizar grupos e automatizar exclusões.",
    ],
    research: [
      "A UNESCO trata inclusão, equidade, diversidade cultural e proteção de dados como dimensões centrais para regular e usar IA generativa em educação.",
      "A revisão K-12 recomenda que currículo e tecnologia sejam culturalmente relevantes, acessíveis e conectados ao senso de pertencimento.",
    ],
    questions: [
      "Que tipo de exclusão algorítmica pode ocorrer na escola?",
      "Quem audita ou supervisiona as recomendações da IA?",
      "Que dados de estudantes não deveriam ser usados?",
    ],
    sources: [commonSources[1], commonSources[2], commonSources[5]],
  },
  "inclusao-ou-exclusao-ia-na-educacao-inclusiva": {
    padlet: [
      "O episódio no Spotify, citado no segundo Padlet, debate benefícios e malefícios da IA na educação inclusiva.",
      "Ele se conecta ao eixo crítico da trilha: a IA só aproxima a inclusão quando há responsabilidade pedagógica, acessibilidade e controle humano.",
    ],
    research: [
      "A UNESCO alerta para adoção rápida de IA sem marcos claros de proteção e validação.",
      "A literatura de IA inclusiva recomenda analisar tanto ganhos de engajamento quanto resultados de aprendizagem, evitando promessas sem evidência.",
    ],
    questions: [
      "Quais benefícios são reais no contexto local?",
      "Quais riscos aparecem para estudantes com deficiência ou baixa conectividade?",
      "Como documentar resultados sem expor dados sensíveis?",
    ],
    sources: [commonSources[1], commonSources[2], commonSources[5]],
  },
};

const resourceResearch = {
  padlet: [
    "Este material é uma fonte direta dos Padlets usados para montar o site e deve ser lido como referência do percurso original.",
    "Ao consultar, compare o conteúdo do recurso com os princípios de acessibilidade, equidade, participação e aprendizagem.",
  ],
  video: [
    "Vídeos ampliam representação e engajamento, mas precisam de legenda, descrição ou alternativa textual para não criar novas barreiras.",
    "Use o recurso com objetivo de aprendizagem explícito e uma atividade de síntese ou discussão.",
  ],
  audio: [
    "Áudios e podcasts favorecem acesso por escuta e debate, mas devem ter roteiro, resumo ou transcrição para estudantes que precisam de suporte visual/textual.",
    "Esse formato é útil para discutir dilemas éticos, como inclusão algorítmica, supervisão humana e riscos de vieses.",
  ],
  pdf: [
    "Artigos e relatórios ajudam a fundamentar decisões pedagógicas, especialmente quando trazem métodos, evidências, limitações e recomendações.",
    "Ao usar PDF em sala, ofereça leitura acessível, resumo orientador e tempo para discussão dos principais achados.",
  ],
};

const resourceDetailBySlug = {
  "introducao-a-trilha-ia-900": { kind: "video" },
  "o-que-e-inteligencia-artificial": { kind: "video" },
  "principios-basicos-do-aprendizado-de-maquina": { kind: "video" },
  "como-o-computador-processa-dados-e-midias": { kind: "video" },
  "caso-de-uso-i-aprendendo-um-idioma": { kind: "video" },
  "caso-de-uso-ii-criando-uma-receita-culinaria": { kind: "video" },
  "cutscene-educacao-inclusiva": { kind: "video" },
  "podcast-ia-na-educacao-inclusiva": { kind: "audio" },
  "paper-de-stanford": { kind: "pdf", sources: [{ title: "AI + Learning Differences: Designing a Future with No Boundaries", url: "https://padlet-uploads-usc1.storage.googleapis.com/5130909431/a79e69fceedd3f1c1233e7193cc5692f/AI_Learning_Differences_Designing_a_Future_with_No_Boundaries_Final__1_.pdf" }] },
  "ia-e-tecnologia-inclusivas-na-educacao-k-12": { kind: "pdf", sources: [commonSources[5]] },
  "desenho-universal-para-a-aprendizagem": { kind: "video", sources: [commonSources[3]] },
  "padlet-original": { kind: "padlet", sources: [commonSources[0]] },
};

function findContent() {
  return window.siteContents.find((item) => window.contentSlug(item) === selectedSlug);
}

function createList(items) {
  const list = document.createElement("ul");
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.append(listItem);
  });
  return list;
}

function getSpecificDetail(item) {
  const slug = window.contentSlug(item);
  if (detailContent[slug]) return detailContent[slug];

  const resourceDetail = resourceDetailBySlug[slug];
  if (!resourceDetail) {
    return {
      padlet: ["Este conteúdo foi organizado a partir dos Padlets usados como base do site."],
      research: detailGuides[item.type],
      questions: ["Como este conteúdo ajuda a remover barreiras de participação e aprendizagem?"],
      sources: [commonSources[0], commonSources[1]],
    };
  }

  const kind = resourceDetail.kind;
  return {
    padlet: [
      "Este recurso aparece nos materiais citados dos Padlets e amplia a trilha principal com vídeo, áudio, artigo, relatório ou referência complementar.",
      item.text,
    ],
    research: resourceResearch[kind],
    questions: [
      "Qual ideia principal deste material se conecta à educação inclusiva?",
      "Que evidência, exemplo ou cuidado ele acrescenta à trilha?",
      "Como adaptar o recurso para estudantes com diferentes necessidades de acesso?",
    ],
    sources: resourceDetail.sources || [commonSources[0], commonSources[1]],
  };
}

function createRelatedList(currentItem) {
  const related = window.siteContents
    .filter((item) => item !== currentItem && item.type === currentItem.type)
    .slice(0, 3);

  if (related.length === 0) return null;

  const list = document.createElement("div");
  list.className = "related-list";

  related.forEach((item) => {
    const link = document.createElement("a");
    link.href = `detalhe.html?conteudo=${encodeURIComponent(window.contentSlug(item))}`;
    link.textContent = item.title;
    list.append(link);
  });

  return list;
}

function appendSection(title, items) {
  if (!items || items.length === 0) return;

  const heading = document.createElement("h2");
  heading.textContent = title;
  detailPanel.append(heading, createList(items));
}

function appendSources(sources) {
  if (!sources || sources.length === 0) return;

  const heading = document.createElement("h2");
  heading.textContent = "Fontes e pesquisas";

  const list = document.createElement("div");
  list.className = "source-list";

  sources.forEach((source) => {
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = source.title;
    list.append(link);
  });

  detailPanel.append(heading, list);
}

function renderNotFound() {
  detailPanel.className = "detail-panel empty-detail";

  const title = document.createElement("h1");
  title.textContent = "Conteúdo não encontrado";

  const text = document.createElement("p");
  text.textContent = "Volte ao painel e escolha um dos blocos disponíveis.";

  const backLink = document.createElement("a");
  backLink.className = "button primary";
  backLink.href = "index.html#cardsGrid";
  backLink.textContent = "Voltar ao painel";

  detailPanel.append(title, text, backLink);
}

function renderDetail(item) {
  document.title = `${item.title} | IA e Educação Inclusiva`;

  const badge = document.createElement("span");
  badge.className = `card-type ${item.type}`;
  badge.textContent = window.typeLabels[item.type];

  const title = document.createElement("h1");
  title.textContent = item.title;

  const summary = document.createElement("p");
  summary.className = "detail-summary";
  summary.textContent = item.text;

  const guidanceTitle = document.createElement("h2");
  guidanceTitle.textContent = "Como explorar";

  const guidance = createList(detailGuides[item.type]);
  const specificDetail = getSpecificDetail(item);

  const actions = document.createElement("div");
  actions.className = "detail-actions";

  const backLink = document.createElement("a");
  backLink.className = "button secondary";
  backLink.href = "index.html#cardsGrid";
  backLink.textContent = "Voltar ao painel";
  actions.append(backLink);

  if (item.link) {
    const externalLink = document.createElement("a");
    externalLink.className = "button primary";
    externalLink.href = item.link;
    externalLink.target = "_blank";
    externalLink.rel = "noreferrer";
    externalLink.textContent = "Abrir material original";
    actions.append(externalLink);
  }

  detailPanel.append(badge, title, summary);
  appendSection("Textos dos Padlets", specificDetail.padlet);
  appendSection("Artigos e pesquisas", specificDetail.research);
  appendSection("Perguntas para aprofundar", specificDetail.questions);
  detailPanel.append(guidanceTitle, guidance);

  const related = createRelatedList(item);
  if (related) {
    const relatedTitle = document.createElement("h2");
    relatedTitle.textContent = "Conteúdos relacionados";
    detailPanel.append(relatedTitle, related);
  }

  appendSources(specificDetail.sources);
  detailPanel.append(actions);
}

const selectedContent = findContent();

if (selectedContent) {
  renderDetail(selectedContent);
} else {
  renderNotFound();
}
