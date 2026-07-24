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

  detailPanel.append(badge, title, summary, guidanceTitle, guidance);

  const related = createRelatedList(item);
  if (related) {
    const relatedTitle = document.createElement("h2");
    relatedTitle.textContent = "Conteúdos relacionados";
    detailPanel.append(relatedTitle, related);
  }

  detailPanel.append(actions);
}

const selectedContent = findContent();

if (selectedContent) {
  renderDetail(selectedContent);
} else {
  renderNotFound();
}
