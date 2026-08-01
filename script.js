const contents = [
  {
    title: "Como usar este guia",
    type: "conceito",
    text: "Um percurso para entender barreiras, possibilidades, riscos e decisões práticas sobre o uso de inteligência artificial na educação inclusiva.",
  },
  {
    title: "A IA aproxima ou afasta a Educação Inclusiva?",
    type: "conceito",
    text: "A IA pode ampliar acesso e personalizar apoios, mas também pode reforçar desigualdades quando é adotada sem acessibilidade, supervisão e critérios pedagógicos.",
  },
  {
    title: "Educação inclusiva e equidade",
    type: "conceito",
    text: "Inclusão não é apenas permitir matrícula: é remover barreiras para que todos participem, aprendam e tenham apoios justos conforme suas necessidades.",
  },
  {
    title: "IA, acessibilidade e LBI",
    type: "conceito",
    text: "A IA pode analisar dados, adaptar conteúdo e apoiar comunicação, mas seu uso precisa respeitar direitos, acessibilidade e a Lei Brasileira de Inclusão.",
  },
  {
    title: "Barreiras escolares",
    type: "trilha",
    text: "Antes de escolher uma ferramenta, é preciso reconhecer barreiras físicas, digitais, curriculares, comunicacionais, atitudinais e de acesso à tecnologia.",
  },
  {
    title: "Possibilidades reais da IA",
    type: "trilha",
    text: "A IA é mais útil quando resolve necessidades concretas: leitura acessível, feedback imediato, comunicação apoiada, personalização e acompanhamento formativo.",
  },
  {
    title: "Exemplos de aplicação",
    type: "trilha",
    text: "Sistemas adaptativos, leitores inteligentes, apoio a planos individualizados, chatbots orientados e ferramentas de autoria podem ampliar participação quando bem planejados.",
  },
  {
    title: "LBI",
    type: "conceito",
    text: "A Lei Brasileira de Inclusão garante educação inclusiva, acessibilidade e eliminação de barreiras. Tecnologia só faz sentido quando fortalece esses direitos.",
  },
  {
    title: "Evidências de pesquisa",
    type: "recurso",
    text: "Estudos recentes indicam ganhos de conhecimento, confiança, motivação, comunicação e colaboração, mas também alertam para desigualdade de acesso e falta de avaliação rigorosa.",
  },
  {
    title: "Como a IA pode ajudar",
    type: "aplicacao",
    text: "A IA pode apoiar estudantes, professores e famílias com leitura acessível, adaptação de atividades, organização de informações e orientação em linguagem simples.",
  },
  {
    title: "Exemplos práticos de ferramentas",
    type: "aplicacao",
    text: "Ferramentas de leitura, tutoria, análise de aprendizagem, adaptação de planos e comunicação podem servir à inclusão quando preservam autonomia e supervisão humana.",
  },
  {
    title: "Checklist de implementação",
    type: "aplicacao",
    text: "Antes de adotar IA, verifique objetivo pedagógico, acessibilidade, privacidade, formação docente, participação dos estudantes e evidências de aprendizagem.",
  },
  {
    title: "Mapa de estudo",
    type: "recurso",
    text: "Uma forma de organizar o estudo: conceitos básicos, barreiras, aplicações, riscos, exemplos de ferramentas e critérios para implementação responsável.",
    link: "https://padlet.com/maryvitoria054/trabalho-pi-hxlfdcfmyq779qko",
  },
  {
    title: "Vídeo: objetivos de aprendizagem",
    type: "recurso",
    text: "Use vídeos introdutórios para abrir conversa sobre por que IA e inclusão precisam ser discutidas juntas.",
    link: "https://youtu.be/v8G95rgaFLw?si=9PhyUuciLer0RLyC",
  },
  {
    title: "Podcast: Inclusão ou exclusão algorítmica na escola",
    type: "recurso",
    text: "Discussão sobre como algoritmos podem apoiar decisões educacionais ou reproduzir exclusões quando dados, critérios e supervisão são frágeis.",
    link: "https://youtu.be/qTc6QP8XeEc?si=7r9JO2xpi9EtwrrY",
  },
  {
    title: "Inclusão ou exclusão? IA na educação inclusiva",
    type: "recurso",
    text: "Áudio para discutir benefícios, riscos, limites éticos e o papel da mediação humana no uso de IA educacional.",
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
    text: "Material audiovisual para introduzir conceitos de inclusão, barreiras e participação escolar.",
    link: "https://www.youtube.com/watch?v=cvheVmyWmtg",
  },
  {
    title: "Podcast: IA na Educação Inclusiva",
    type: "recurso",
    text: "Áudio para aprofundar a ideia de que tecnologia inclusiva precisa ser guiada por direitos, cuidado e responsabilidade pedagógica.",
    link: "https://padlet-uploads-usc1.storage.googleapis.com/5130909431/7ad068adb68dc20256b87ed7bd981783/IA_na_educao_inclusiva__a_chave_humanizadora.mp3",
  },
  {
    title: "Relatório: IA e diferenças de aprendizagem",
    type: "recurso",
    text: "Relatório sobre co-design, tecnologia assistiva, planos individualizados, formação docente e uso ético da IA para estudantes com diferenças de aprendizagem.",
    link: "./Static/Documentos/AI-Learning-Differences-Designing-a-Future-with-No-Boundaries_Final.pdf",
  },
  {
    title: "Revisão: IA inclusiva na educação básica",
    type: "recurso",
    text: "Revisão de estudos sobre currículos inclusivos de IA, com princípios de identidade, tecnologia, design, conteúdo e pertencimento.",
    link: "./Static/Documentos/Promovendo%20IA%20e%20tecnologia%20inclusivas%20na%20educa%C3%A7%C3%A3o%20b%C3%A1sica%20(K-12)%20Uma%20revis%C3%A3o%20do%20contexto,%20estrat%C3%A9gias%20de%20ensino%20e%20resultados%20de%20aprendizagem.pdf",
  },
  {
    title: "A arte da personalização do ensino",
    type: "recurso",
    text: "Artigo sobre como a IA pode personalizar ensino na educação especial, com atenção a recursos adaptativos, privacidade, transparência e formação docente.",
    link: "./Static/Documentos/artigo.pdf",
  },
  {
    title: "Desenho Universal para a Aprendizagem",
    type: "recurso",
    text: "Palestra sobre Desenho Universal para a Aprendizagem como abordagem universalista para a educação de todos.",
    link: "https://www.youtube.com/live/KM-PYmsDxH4?si=uO4JLQd7yCTHA8PU",
  },
  {
    title: "Quadro de referências",
    type: "recurso",
    text: "Coleção de materiais complementares para continuar explorando IA, educação inclusiva, vídeos, podcasts e documentos de apoio.",
    link: "https://padlet.com/gustavocostatech/ia-e-inclusao-4u4hw93o1xvzntek",
  },
];

const typeLabels = {
  conceito: "Conceito",
  trilha: "Trilha",
  aplicacao: "Aplicação",
  recurso: "Recurso",
};

function contentSlug(item) {
  return item.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getDetailUrl(item) {
  return `detalhe.html?conteudo=${encodeURIComponent(contentSlug(item))}`;
}

window.siteContents = contents;
window.typeLabels = typeLabels;
window.contentSlug = contentSlug;

const cardsGrid = document.querySelector("#cardsGrid");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelector("#filterButtons");
let activeFilter = "todos";

function createCard(item) {
  const article = document.createElement("a");
  article.className = "info-card";
  article.href = getDetailUrl(item);

  const badge = document.createElement("span");
  badge.className = `card-type ${item.type}`;
  badge.textContent = typeLabels[item.type];

  const title = document.createElement("h3");
  title.textContent = item.title;

  const text = document.createElement("p");
  text.textContent = item.text;

  article.append(badge, title, text);

  const details = document.createElement("span");
  details.className = "card-link";
  details.textContent = "Ver detalhes";
  article.append(details);

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

if (cardsGrid && searchInput && filterButtons) {
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
}
