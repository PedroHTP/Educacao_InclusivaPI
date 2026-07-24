const contents = [
  {
    title: "Objetivos do Padlet",
    type: "conceito",
    text: "Trilha para entender o tema de forma intuitiva: primeiro enxergamos o problema, depois o potencial da IA, os riscos e, por fim, o caminho responsável para aplicar.",
  },
  {
    title: "A IA aproxima ou afasta a Educação Inclusiva?",
    type: "conceito",
    text: "A Inteligência Artificial já entrou na educação por plataformas, aplicativos, chatbots e sistemas que ajudam a ensinar. A questão central é de que forma ela será usada. Sem intenção inclusiva, pode reforçar desigualdades e criar novas barreiras.",
  },
  {
    title: "Glossário relâmpago I",
    type: "conceito",
    text: "Educação Inclusiva garante acesso, permanência, participação e aprendizagem de todos os estudantes, respeitando diferenças físicas, sensoriais, intelectuais, sociais e culturais. Equidade significa oferecer apoios e recursos diferentes para oportunidades e resultados justos.",
  },
  {
    title: "Glossário relâmpago II",
    type: "conceito",
    text: "Inteligência Artificial é um conjunto de tecnologias capazes de analisar dados, aprender padrões, gerar respostas e adaptar conteúdos. A LBI, Lei Brasileira de Inclusão, assegura educação inclusiva, acessibilidade, atendimento educacional especializado e eliminação de barreiras.",
  },
  {
    title: "Estação 1",
    type: "trilha",
    text: "Que barreiras existem no cotidiano escolar? A escola pode ter matrícula, mas não garantir participação e aprendizagem. Barreiras comuns incluem falta de acessibilidade em materiais e ferramentas, baixa adaptação às necessidades, formação docente insuficiente, desigualdade de acesso à tecnologia e currículos pouco conectados à realidade dos estudantes.",
  },
  {
    title: "Estação 2",
    type: "trilha",
    text: "Quais portas são reais, não só promessa? A IA costuma entrar na inclusão por quatro caminhos: habilidades sociais e interação, personalização da aprendizagem, ambientes virtuais de aprendizagem e chatbots com orientação, treino e acompanhamento em linguagem acessível.",
  },
  {
    title: "Estação 3",
    type: "trilha",
    text: "Que usos concretos ajudam a imaginar aplicações? CapacitaBOT apoia habilidades sociais de pessoas com deficiência intelectual; LEAF usa IA em e-learning para apoiar necessidades individuais; e modelos de IA podem ajudar professores a escolher estratégias de comunicação mais adequadas no TEA.",
  },
  {
    title: "LBI",
    type: "conceito",
    text: "A LBI afirma que a pessoa com deficiência tem direito à educação em sistema educacional inclusivo em todos os níveis, com aprendizagem ao longo da vida. A escola precisa assegurar condições reais para o estudante desenvolver talentos e habilidades segundo suas características e necessidades.",
  },
  {
    title: "Visão Geral",
    type: "recurso",
    text: "Duas pesquisas exploram como a Inteligência Artificial pode ser usada de forma inclusiva na educação, especialmente para estudantes com diferenças de aprendizagem.",
  },
  {
    title: "Como a IA pode ajudar",
    type: "aplicacao",
    text: "Para estudantes: leitura personalizada para dislexia, suporte emocional por chatbots supervisionados, tutoria adaptativa e assistência para comunicação de pessoas não verbais. Para professores: economia de tempo, planos diferenciados, simulações de ensino e suporte a IEPs. Para famílias: chatbots, tradução, simplificação de documentos e suporte 24/7.",
  },
  {
    title: "Exemplos práticos de ferramentas",
    type: "aplicacao",
    text: "Ferramentas já existentes: Microsoft Immersive Reader, Khanmigo, Alongside e ROAR. Desenvolvidas no Hackathon de Stanford: Empower IEP, FeelLink e Maestra.",
  },
  {
    title: "Checklist de implementação",
    type: "aplicacao",
    text: "Incluir pessoas com diferenças de aprendizagem no design, compensar participantes pelo conhecimento compartilhado, garantir acessibilidade desde o início e treinar professores adequadamente.",
  },
  {
    title: "Trilha complementar",
    type: "recurso",
    text: "Padlet trabalho PI, de Mary Vitoria, em formato whiteboard. O quadro complementa a trilha com percurso visual, objetivos, podcast e materiais multimídia sobre IA e Educação Inclusiva.",
    link: "https://padlet.com/maryvitoria054/trabalho-pi-hxlfdcfmyq779qko",
  },
  {
    title: "Objetivos da trilha: IA e Educação Inclusiva",
    type: "recurso",
    text: "Vídeo do trabalho PI com os objetivos da trilha sobre IA e Educação Inclusiva.",
    link: "https://youtu.be/v8G95rgaFLw?si=9PhyUuciLer0RLyC",
  },
  {
    title: "Podcast: Inclusão ou exclusão algorítmica na escola",
    type: "recurso",
    text: "Podcast em vídeo do trabalho PI discutindo inclusão, exclusão algorítmica e escola.",
    link: "https://youtu.be/qTc6QP8XeEc?si=7r9JO2xpi9EtwrrY",
  },
  {
    title: "Inclusão ou exclusão? IA na educação inclusiva",
    type: "recurso",
    text: "Episódio no Spotify sobre benefícios e malefícios da IA na educação inclusiva.",
    link: "https://open.spotify.com/episode/2xJNMKOKAfWHyERPrDlAsA?si=3Nk7gSHLTSmdf3auZK-wLQ",
  },
  {
    title: "Introdução à Trilha IA-900",
    type: "recurso",
    text: "Vídeo introdutório sobre fundamentos de IA no Azure.",
    link: "https://www.youtube.com/watch?v=Dd5S5fCxMV8&list=PL0g5FWk3FEqi7bTNKAkV-AD0jDbXJSqOg&index=1",
  },
  {
    title: "O que é Inteligência Artificial?",
    type: "recurso",
    text: "Vídeo de apoio para compreender conceitos iniciais de IA.",
    link: "https://www.youtube.com/watch?v=Qxwv5NHzyLg",
  },
  {
    title: "Princípios básicos do Aprendizado de Máquina",
    type: "recurso",
    text: "Vídeo sobre fundamentos de aprendizado de máquina dentro da trilha IA-900.",
    link: "https://www.youtube.com/watch?v=8b_JnI_VFIQ",
  },
  {
    title: "Como o computador processa dados e mídias",
    type: "recurso",
    text: "Vídeo sobre processamento de dados e mídias em sistemas computacionais.",
    link: "https://www.youtube.com/watch?v=KxV3EKWZV4U&list=PL0g5FWk3FEqi7bTNKAkV-AD0jDbXJSqOg&index=5",
  },
  {
    title: "Caso de uso I: aprendendo um idioma",
    type: "recurso",
    text: "Vídeo com caso de uso de IA aplicado ao aprendizado de idioma.",
    link: "https://www.youtube.com/watch?v=Pb0h4VR-qmQ&list=PL0g5FWk3FEqi7bTNKAkV-AD0jDbXJSqOg&index=15",
  },
  {
    title: "Caso de uso II: criando uma receita culinária",
    type: "recurso",
    text: "Vídeo com caso de uso de IA generativa aplicado à criação de uma receita culinária.",
    link: "https://www.youtube.com/watch?v=RnDiLLBu2Ig&list=PL0g5FWk3FEqi7bTNKAkV-AD0jDbXJSqOg&index=17",
  },
  {
    title: "Cutscene Educação Inclusiva",
    type: "recurso",
    text: "Vídeo citado no Padlet sobre Educação Inclusiva.",
    link: "https://www.youtube.com/watch?v=cvheVmyWmtg",
  },
  {
    title: "Podcast: IA na Educação Inclusiva",
    type: "recurso",
    text: "Áudio do Padlet: IA na educação inclusiva, a chave humanizadora.",
    link: "https://padlet-uploads-usc1.storage.googleapis.com/5130909431/7ad068adb68dc20256b87ed7bd981783/IA_na_educao_inclusiva__a_chave_humanizadora.mp3",
  },
  {
    title: "Paper de Stanford",
    type: "recurso",
    text: "AI + Learning Differences: Designing a Future with No Boundaries.",
    link: "https://padlet-uploads-usc1.storage.googleapis.com/5130909431/a79e69fceedd3f1c1233e7193cc5692f/AI_Learning_Differences_Designing_a_Future_with_No_Boundaries_Final__1_.pdf",
  },
  {
    title: "IA e tecnologia inclusivas na educação K-12",
    type: "recurso",
    text: "PDF: Promovendo IA e tecnologia inclusivas na educação básica K-12, com revisão de contexto, estratégias de ensino e resultados de aprendizagem.",
    link: "https://padlet-uploads-usc1.storage.googleapis.com/5130909431/e899965accbe72580d3a80f07c47d2c1/Promovendo_IA_e_tecnologia_inclusivas_na_educa__o_b_sica__K_12__Uma_revis_o_do_contexto__estrat_gias_de_ensino_e_resultados_de_aprendizagem_1_.pdf",
  },
  {
    title: "Desenho Universal para a Aprendizagem",
    type: "recurso",
    text: "Palestra sobre Desenho Universal para a Aprendizagem como abordagem universalista para a educação de todos.",
    link: "https://www.youtube.com/live/KM-PYmsDxH4?si=uO4JLQd7yCTHA8PU",
  },
  {
    title: "Padlet original",
    type: "recurso",
    text: "Fonte pública usada para organizar os conteúdos deste site.",
    link: "https://padlet.com/gustavocostatech/ia-e-inclusao-4u4hw93o1xvzntek",
  },
];

const typeLabels = {
  conceito: "Conceito",
  trilha: "Trilha",
  aplicacao: "Aplicação",
  recurso: "Recurso",
};

const cardsGrid = document.querySelector("#cardsGrid");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelector("#filterButtons");
let activeFilter = "todos";

function createCard(item) {
  const article = document.createElement("article");
  article.className = "info-card";

  const badge = document.createElement("span");
  badge.className = `card-type ${item.type}`;
  badge.textContent = typeLabels[item.type];

  const title = document.createElement("h3");
  title.textContent = item.title;

  const text = document.createElement("p");
  text.textContent = item.text;

  article.append(badge, title, text);

  if (item.link) {
    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Abrir recurso";
    article.append(link);
  }

  return article;
}

function renderCards() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = contents.filter((item) => {
    const matchesFilter = activeFilter === "todos" || item.type === activeFilter;
    const searchable = `${item.title} ${item.text}`.toLowerCase();
    return matchesFilter && searchable.includes(term);
  });

  cardsGrid.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Nenhum conteúdo encontrado para esse filtro.";
    cardsGrid.append(empty);
    return;
  }

  filtered.forEach((item) => cardsGrid.append(createCard(item)));
}

filterButtons.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;
  filterButtons.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip === button);
  });
  renderCards();
});

searchInput.addEventListener("input", renderCards);
renderCards();
