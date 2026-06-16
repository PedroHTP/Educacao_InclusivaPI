const contents = [
  {
    title: "Objetivos do Padlet",
    type: "conceito",
    text: "Trilha para entender o tema de forma intuitiva: primeiro o problema, depois o potencial da IA, os riscos e o caminho responsável para aplicar.",
  },
  {
    title: "A IA aproxima ou afasta a Educação Inclusiva?",
    type: "conceito",
    text: "A IA já entrou na educação por plataformas, aplicativos, chatbots e sistemas de apoio. Sem intenção inclusiva, pode reforçar desigualdades.",
  },
  {
    title: "Educação Inclusiva e Equidade",
    type: "conceito",
    text: "Educação inclusiva garante acesso, permanência, participação e aprendizagem. Equidade oferece apoios diferentes para oportunidades justas.",
  },
  {
    title: "Inteligência Artificial e LBI",
    type: "conceito",
    text: "IA analisa dados, aprende padrões e adapta conteúdos. A LBI assegura educação inclusiva, acessibilidade e eliminação de barreiras.",
  },
  {
    title: "Estação 1: barreiras",
    type: "trilha",
    text: "A escola pode ter matrícula sem garantir participação e aprendizagem. Barreiras comuns incluem acessibilidade, formação docente e desigualdade tecnológica.",
  },
  {
    title: "Estação 2: portas reais",
    type: "trilha",
    text: "IA pode apoiar habilidades sociais, personalização da aprendizagem, ambientes virtuais adaptativos e chatbots com linguagem acessível.",
  },
  {
    title: "Estação 3: usos concretos",
    type: "trilha",
    text: "CapacitaBOT, LEAF e modelos de apoio a estratégias docentes no TEA ajudam a imaginar aplicações inclusivas concretas.",
  },
  {
    title: "Como a IA pode ajudar",
    type: "aplicacao",
    text: "Leitura personalizada, tutoria adaptativa, comunicação assistiva, planos de aula diferenciados e simplificação de documentos para famílias.",
  },
  {
    title: "Ferramentas citadas",
    type: "aplicacao",
    text: "Microsoft Immersive Reader, Khanmigo, Alongside, ROAR, Empower IEP, FeelLink e Maestra aparecem como exemplos práticos.",
  },
  {
    title: "Checklist de implementação",
    type: "aplicacao",
    text: "Incluir pessoas com diferenças de aprendizagem no design, compensar participantes, garantir acessibilidade e treinar professores.",
  },
  {
    title: "Pesquisas sobre IA inclusiva",
    type: "recurso",
    text: "Pesquisas exploram o uso de IA inclusiva na educação, especialmente para estudantes com diferenças de aprendizagem.",
    link: "https://padlet.com/gustavocostatech/ia-e-inclusao-4u4hw93o1xvzntek",
  },
  {
    title: "Desenho Universal para a Aprendizagem",
    type: "recurso",
    text: "Palestra sobre DUA como abordagem universalista para a educação de todos.",
    link: "https://www.youtube.com/live/KM-PYmsDxH4?si=uO4JLQd7yCTHA8PU",
  },
  {
    title: "Trilha IA-900",
    type: "recurso",
    text: "Fundamentos de IA, aprendizado de máquina, processamento de mídias e casos de uso com IA generativa.",
    link: "https://www.youtube.com/watch?v=Dd5S5fCxMV8&list=PL0g5FWk3FEqi7bTNKAkV-AD0jDbXJSqOg&index=1",
  },
  {
    title: "Podcast: IA na Educação Inclusiva",
    type: "recurso",
    text: "Material em áudio citado no Padlet sobre IA na educação inclusiva como chave humanizadora.",
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
