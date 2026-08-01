const detailPanel = document.querySelector("#detailPanel");
const params = new URLSearchParams(window.location.search);
const selectedSlug = params.get("conteudo");

const sources = {
  stanford: {
    title: "McGee, N. J.; Kozleski, E.; Lemons, C. J.; Hau, I. C. (2025). AI + Learning Differences: Designing a Future with No Boundaries.",
    url: "./Static/Documentos/AI-Learning-Differences-Designing-a-Future-with-No-Boundaries_Final.pdf",
  },
  k12: {
    title: "Lee, H.; Kim, H.; Yan, W. (2025). Promovendo IA e tecnologia inclusivas na educação K-12.",
    url: "./Static/Documentos/Promovendo%20IA%20e%20tecnologia%20inclusivas%20na%20educa%C3%A7%C3%A3o%20b%C3%A1sica%20(K-12)%20Uma%20revis%C3%A3o%20do%20contexto,%20estrat%C3%A9gias%20de%20ensino%20e%20resultados%20de%20aprendizagem.pdf",
  },
  personalizacao: {
    title: "Santos, S. M. A. V. et al. (2024). A arte da personalização do ensino: a Inteligência Artificial nos palcos da educação especial.",
    url: "./Static/Documentos/artigo.pdf",
  },
  lbi: {
    title: "Brasil. Lei Brasileira de Inclusão da Pessoa com Deficiência, Lei nº 13.146/2015.",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
  },
  unesco: {
    title: "UNESCO. Guidance for generative AI in education and research.",
    url: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research?hub=67098",
  },
  cast: {
    title: "CAST. Universal Design for Learning Guidelines.",
    url: "https://udlguidelines.cast.org/",
  },
  leaf: {
    title: "Challenges and opportunities of AI in inclusive education: LEAF.",
    url: "https://link.springer.com/article/10.1186/s40561-023-00286-2",
  },
  reader: {
    title: "Microsoft. Immersive Reader research and case studies.",
    url: "https://learn.microsoft.com/en-us/training/educator-center/product-guides/immersive-reader/research",
  },
};

const defaultByType = {
  conceito: {
    sections: [
      {
        title: "O que significa",
        paragraphs: [
          {
            text: "Este conceito ajuda a separar promessa tecnológica de inclusão real. Uma prática inclusiva precisa remover barreiras de acesso, linguagem, participação, currículo e avaliação; só depois a IA entra como possível apoio.",
            refs: ["k12", "lbi"],
          },
        ],
      },
      {
        title: "Como aplicar",
        paragraphs: [
          {
            text: "Use o conceito como pergunta de planejamento: quem fica de fora se a aula for feita desse jeito? Que apoio precisa existir para que estudantes diferentes participem com autonomia e aprendam de fato?",
            refs: ["cast", "personalizacao"],
          },
        ],
      },
    ],
  },
  trilha: {
    sections: [
      {
        title: "Por onde começar",
        paragraphs: [
          {
            text: "A melhor sequência é simples: identificar barreiras, escolher uma necessidade concreta, testar uma estratégia pequena, observar resultados e ajustar com participação de quem será afetado.",
            refs: ["stanford", "k12"],
          },
        ],
      },
      {
        title: "O que observar",
        paragraphs: [
          {
            text: "Não avalie apenas se a ferramenta parece moderna. Observe se ela melhora acesso, participação, confiança, colaboração, compreensão do conteúdo e autonomia do estudante.",
            refs: ["k12"],
          },
        ],
      },
    ],
  },
  aplicacao: {
    sections: [
      {
        title: "Quando faz sentido",
        paragraphs: [
          {
            text: "A IA faz mais sentido quando reduz uma dificuldade concreta: adaptar leitura, dar feedback, organizar informação, apoiar comunicação, sugerir caminhos de estudo ou ajudar o professor a diferenciar atividades.",
            refs: ["personalizacao", "stanford"],
          },
        ],
      },
      {
        title: "Limites",
        paragraphs: [
          {
            text: "A ferramenta não substitui professor, família, equipe pedagógica ou atendimento especializado. Ela precisa ser supervisionada, explicável, acessível e coerente com o objetivo de aprendizagem.",
            refs: ["personalizacao", "unesco"],
          },
        ],
      },
    ],
  },
  recurso: {
    sections: [
      {
        title: "Como estudar este material",
        paragraphs: [
          {
            text: "Use este recurso como complemento: anote o conceito principal, identifique um exemplo de uso da IA, registre um risco e pense em uma adaptação para estudantes com diferentes necessidades de acesso.",
            refs: ["k12", "cast"],
          },
        ],
      },
      {
        title: "Ligação com o tema",
        paragraphs: [
          {
            text: "Materiais multimídia são úteis quando ajudam a tornar o tema mais claro, mas precisam de legenda, resumo, alternativa textual ou mediação para não criar novas barreiras.",
            refs: ["cast"],
          },
        ],
      },
    ],
  },
};

const detailArticles = {
  "como-usar-este-guia": {
    sections: [
      {
        title: "Ideia central",
        paragraphs: [
          {
            text: "Este guia foi pensado para quem quer entender IA e educação inclusiva sem começar pela ferramenta. A pergunta principal é: que barreira impede o estudante de participar e aprender, e que tipo de apoio pode reduzir essa barreira?",
            refs: ["lbi", "k12"],
          },
          {
            text: "A pesquisa recente sobre IA inclusiva recomenda olhar para contexto, estratégia pedagógica e resultado de aprendizagem ao mesmo tempo. Isso evita tratar tecnologia como solução automática para problemas que também envolvem currículo, infraestrutura, formação e relações humanas.",
            refs: ["k12"],
          },
        ],
      },
      {
        title: "Como navegar",
        paragraphs: [
          {
            text: "Comece pelos conceitos, avance pelas barreiras, veja exemplos de aplicação e termine no checklist. Em cada etapa, pergunte se a decisão aumenta acesso, participação, autonomia, pertencimento e aprendizagem.",
            refs: ["stanford", "cast"],
          },
        ],
      },
    ],
  },
  "a-ia-aproxima-ou-afasta-a-educacao-inclusiva": {
    sections: [
      {
        title: "A resposta depende do desenho",
        paragraphs: [
          {
            text: "A IA pode aproximar a educação inclusiva quando adapta materiais, oferece explicações em diferentes formatos, apoia comunicação e ajuda professores a acompanhar necessidades individuais. Ela afasta quando exige acesso que parte dos estudantes não tem, quando usa dados sem transparência ou quando transforma diferenças em rótulos rígidos.",
            refs: ["personalizacao", "k12", "unesco"],
          },
          {
            text: "Uma revisão sobre IA inclusiva na educação básica mostra esse duplo potencial: currículos bem desenhados podem aumentar conhecimento, confiança, motivação, comunicação e colaboração; currículos mal planejados podem ampliar lacunas de oportunidade.",
            refs: ["k12"],
          },
        ],
      },
      {
        title: "Critério simples",
        paragraphs: [
          {
            text: "Antes de usar uma ferramenta, formule uma frase objetiva: esta IA ajudará este estudante a fazer algo que hoje está bloqueado por uma barreira específica. Se a frase não fica clara, a adoção provavelmente ainda está imatura.",
            refs: ["stanford"],
          },
        ],
      },
    ],
  },
  "educacao-inclusiva-e-equidade": {
    sections: [
      {
        title: "Inclusão não é presença física",
        paragraphs: [
          {
            text: "Educação inclusiva significa garantir acesso, permanência, participação e aprendizagem. A matrícula é apenas o começo; o ponto central é remover barreiras que impedem o estudante de compreender, se comunicar, interagir, demonstrar conhecimento e pertencer ao ambiente escolar.",
            refs: ["lbi", "k12"],
          },
          {
            text: "Equidade significa oferecer apoios diferentes para que oportunidades sejam justas. Dar o mesmo material, no mesmo ritmo e no mesmo formato para todos pode parecer igualitário, mas muitas vezes mantém a exclusão.",
            refs: ["k12", "cast"],
          },
        ],
      },
      {
        title: "O papel da identidade",
        paragraphs: [
          {
            text: "A revisão K-12 destaca identidade e pertencimento como princípios de currículo inclusivo. Estudantes se engajam mais quando a aprendizagem conversa com sua cultura, sua comunidade, seus interesses e suas formas de expressão.",
            refs: ["k12"],
          },
        ],
      },
    ],
  },
  "ia-acessibilidade-e-lbi": {
    sections: [
      {
        title: "O que a IA pode fazer",
        paragraphs: [
          {
            text: "IA é um conjunto de tecnologias que pode reconhecer padrões, gerar respostas, adaptar atividades e transformar formatos de informação. Na escola, isso pode aparecer em leitura em voz alta, legendas, simplificação de textos, organização de dados de aprendizagem e feedback personalizado.",
            refs: ["personalizacao", "reader"],
          },
          {
            text: "Quando usada para acessibilidade, a IA precisa fortalecer direitos previstos na LBI: eliminar barreiras, oferecer recursos adequados e garantir condições reais de aprendizagem.",
            refs: ["lbi"],
          },
        ],
      },
      {
        title: "Cuidado necessário",
        paragraphs: [
          {
            text: "Se a ferramenta coleta dados sobre desempenho, deficiência, comunicação ou comportamento, a escola precisa definir finalidade, segurança, acesso às informações e supervisão humana. Dados sensíveis não podem virar atalho para vigilância ou estigmatização.",
            refs: ["personalizacao", "unesco", "stanford"],
          },
        ],
      },
    ],
  },
  "barreiras-escolares": {
    sections: [
      {
        title: "Barreiras comuns",
        paragraphs: [
          {
            text: "As barreiras mais frequentes não estão apenas no estudante. Elas aparecem em materiais inacessíveis, plataformas difíceis de usar, falta de internet ou dispositivo, currículos pouco conectados à realidade, avaliações únicas e baixa articulação entre educação geral e educação especial.",
            refs: ["k12", "stanford", "lbi"],
          },
          {
            text: "A falta de formação docente também é uma barreira. Uma ferramenta adaptativa só ajuda quando o professor entende seus limites, interpreta os dados gerados e transforma essa informação em decisão pedagógica.",
            refs: ["personalizacao", "stanford"],
          },
        ],
      },
      {
        title: "Como diagnosticar",
        paragraphs: [
          {
            text: "Pergunte onde a participação quebra: na leitura, na comunicação, no tempo de resposta, na compreensão da tarefa, na forma de avaliação, no acesso tecnológico ou na sensação de pertencimento. A IA só deve entrar depois dessa leitura do problema.",
            refs: ["cast", "k12"],
          },
        ],
      },
    ],
  },
  "possibilidades-reais-da-ia": {
    sections: [
      {
        title: "Usos com maior potencial",
        paragraphs: [
          {
            text: "A IA pode apoiar leitura acessível, resumo de textos difíceis, geração de exemplos, feedback imediato, adaptação de ritmo, reconhecimento de fala, comunicação alternativa, tutoria personalizada e acompanhamento de progresso.",
            refs: ["personalizacao", "stanford", "reader"],
          },
          {
            text: "Esses usos são mais fortes quando seguem o Desenho Universal para a Aprendizagem: oferecer múltiplas formas de acessar informação, expressar conhecimento e se engajar com a atividade.",
            refs: ["cast"],
          },
        ],
      },
      {
        title: "O que não é promessa vazia",
        paragraphs: [
          {
            text: "Promessa vazia é dizer que a IA personaliza tudo sem explicar para quem, com quais dados, em qual atividade e com qual resultado esperado. Possibilidade real é uma intervenção pequena, observável e ajustável.",
            refs: ["k12", "unesco"],
          },
        ],
      },
    ],
  },
  "exemplos-de-aplicacao": {
    sections: [
      {
        title: "Aplicações possíveis",
        paragraphs: [
          {
            text: "Sistemas adaptativos podem ajustar nível de dificuldade e ritmo. Ferramentas de fala e linguagem natural podem apoiar estudantes com dificuldades de comunicação. Leitores inteligentes, reconhecimento de imagem e recursos de acessibilidade podem reduzir barreiras visuais, cognitivas e linguísticas.",
            refs: ["personalizacao", "reader"],
          },
          {
            text: "O relatório de Stanford também descreve ferramentas voltadas a planos individualizados, como apoio a famílias para compreender documentos complexos e apoio a professores para coordenar estratégias em salas diversas.",
            refs: ["stanford"],
          },
        ],
      },
      {
        title: "Exemplo de decisão",
        paragraphs: [
          {
            text: "Se um estudante compreende oralmente, mas tem dificuldade com textos longos, a solução pode combinar resumo acessível, leitura em voz alta, glossário visual e avaliação por resposta oral. A IA entra como apoio ao acesso, não como substituta da mediação docente.",
            refs: ["cast", "personalizacao"],
          },
        ],
      },
    ],
  },
  lbi: {
    sections: [
      {
        title: "Direito como ponto de partida",
        paragraphs: [
          {
            text: "A LBI afirma o direito da pessoa com deficiência à educação em sistema inclusivo, em todos os níveis, com aprendizagem ao longo da vida. Isso significa que a escola precisa garantir condições reais de desenvolvimento, não apenas acesso formal.",
            refs: ["lbi"],
          },
          {
            text: "Quando uma escola usa IA, a pergunta jurídica e pedagógica é a mesma: a tecnologia remove barreiras ou cria uma nova dependência inacessível? Se a ferramenta não é acessível, transparente ou útil para o estudante, ela não fortalece inclusão.",
            refs: ["lbi", "unesco"],
          },
        ],
      },
      {
        title: "Na prática",
        paragraphs: [
          {
            text: "Uma decisão alinhada à LBI deve prever acessibilidade desde o início, alternativa para quem não consegue usar a ferramenta, proteção de dados e acompanhamento por profissionais responsáveis.",
            refs: ["lbi", "personalizacao"],
          },
        ],
      },
    ],
  },
  "evidencias-de-pesquisa": {
    sections: [
      {
        title: "O que os estudos indicam",
        paragraphs: [
          {
            text: "A revisão K-12 analisou 17 estudos empíricos publicados entre 2013 e 2024. Os resultados foram organizados em quatro dimensões: cognitiva, afetiva, metacognitiva e social.",
            refs: ["k12"],
          },
          {
            text: "Entre os ganhos relatados estão conhecimento técnico, aprendizagem em áreas como matemática e ciências, confiança, motivação, interesse, autorregulação, comunicação e colaboração. Mesmo assim, a revisão alerta que nem todos os estudos medem resultados com o mesmo rigor.",
            refs: ["k12"],
          },
        ],
      },
      {
        title: "O que ainda falta",
        paragraphs: [
          {
            text: "Ainda há lacunas em acesso, alinhamento curricular, consistência de avaliação e participação de grupos sub-representados. Por isso, usar IA na escola exige avaliação contínua, e não apenas entusiasmo inicial.",
            refs: ["k12", "stanford"],
          },
        ],
      },
    ],
  },
  "como-a-ia-pode-ajudar": {
    sections: [
      {
        title: "Estudantes",
        paragraphs: [
          {
            text: "Para estudantes, a IA pode transformar textos longos em versões mais acessíveis, oferecer leitura em voz alta, sugerir exemplos, criar rotas de estudo no próprio ritmo e apoiar comunicação. Isso é especialmente relevante quando a barreira está no formato da informação, não na capacidade de aprender.",
            refs: ["personalizacao", "reader", "cast"],
          },
        ],
      },
      {
        title: "Professores e famílias",
        paragraphs: [
          {
            text: "Para professores, a IA pode ajudar a adaptar planos, gerar alternativas de atividade, acompanhar dados formativos e preparar materiais em formatos diferentes. Para famílias, pode simplificar documentos educacionais e tornar informações sobre direitos, metas e reuniões mais compreensíveis.",
            refs: ["stanford", "personalizacao"],
          },
        ],
      },
    ],
  },
  "exemplos-praticos-de-ferramentas": {
    sections: [
      {
        title: "Tipos de ferramenta",
        paragraphs: [
          {
            text: "Há ferramentas para leitura acessível, tutoria, prática guiada, análise de aprendizagem, comunicação, tradução, legendagem, organização de planos individualizados e adaptação de materiais. O valor não está no nome da ferramenta, mas na barreira que ela ajuda a reduzir.",
            refs: ["personalizacao", "stanford"],
          },
          {
            text: "Exemplos citados em pesquisas e relatórios incluem leitores imersivos, avaliações de leitura, ambientes de aprendizagem com análise de dados e protótipos para apoiar famílias e professores no processo de planos individualizados.",
            refs: ["reader", "leaf", "stanford"],
          },
        ],
      },
      {
        title: "Como escolher",
        paragraphs: [
          {
            text: "A escolha deve considerar acessibilidade, idioma, custo, privacidade, explicabilidade, facilidade de uso, evidência de aprendizagem e possibilidade de adaptação ao contexto local.",
            refs: ["k12", "unesco"],
          },
        ],
      },
    ],
  },
  "checklist-de-implementacao": {
    sections: [
      {
        title: "Antes de usar",
        paragraphs: [
          {
            text: "Defina o problema pedagógico, escolha um objetivo observável e verifique se a ferramenta é acessível para os estudantes reais da turma. Sem isso, a IA vira uma novidade sem direção.",
            refs: ["k12", "cast"],
          },
          {
            text: "Verifique quem participa da decisão. O relatório de Stanford recomenda co-design com estudantes, famílias, educadores e pessoas com diferenças de aprendizagem, valorizando a experiência vivida como conhecimento técnico importante.",
            refs: ["stanford"],
          },
        ],
      },
      {
        title: "Durante e depois",
        paragraphs: [
          {
            text: "Proteja dados, explique critérios de uso, acompanhe resultados, ofereça alternativa para quem não consegue usar a ferramenta e revise a prática com base em evidências de aprendizagem e participação.",
            refs: ["personalizacao", "unesco", "k12"],
          },
        ],
      },
    ],
  },
  "mapa-de-estudo": {
    sections: [
      {
        title: "Roteiro recomendado",
        paragraphs: [
          {
            text: "Um bom estudo sobre IA inclusiva passa por cinco perguntas: o que é inclusão, quais barreiras existem, o que a IA consegue apoiar, quais riscos precisam ser controlados e como saber se a prática melhorou a aprendizagem.",
            refs: ["k12", "stanford"],
          },
          {
            text: "Esse roteiro evita começar por ferramentas isoladas. Primeiro vem a necessidade; depois a solução; por fim, a avaliação.",
            refs: ["personalizacao"],
          },
        ],
      },
    ],
  },
  "podcast-inclusao-ou-exclusao-algoritmica-na-escola": {
    sections: [
      {
        title: "O problema dos algoritmos",
        paragraphs: [
          {
            text: "Algoritmos aprendem a partir de dados. Se os dados representam mal certos grupos, ou se a escola usa a ferramenta sem entender seus critérios, a IA pode recomendar caminhos injustos, invisibilizar necessidades ou reforçar expectativas baixas.",
            refs: ["unesco", "stanford"],
          },
          {
            text: "Discutir exclusão algorítmica é discutir poder: quem define os dados, quem revisa as respostas, quem pode contestar decisões e quem fica vulnerável quando a ferramenta erra.",
            refs: ["unesco", "k12"],
          },
        ],
      },
    ],
  },
  "inclusao-ou-exclusao-ia-na-educacao-inclusiva": {
    sections: [
      {
        title: "Benefício e risco caminham juntos",
        paragraphs: [
          {
            text: "A IA pode apoiar inclusão quando personaliza acesso e amplia autonomia. Mas pode gerar exclusão quando exige conectividade constante, coleta dados demais, não explica suas decisões ou entrega respostas inadequadas para estudantes com necessidades específicas.",
            refs: ["k12", "personalizacao", "unesco"],
          },
          {
            text: "A decisão responsável combina supervisão humana, acessibilidade, participação dos usuários e avaliação contínua.",
            refs: ["stanford", "k12"],
          },
        ],
      },
    ],
  },
  "relatorio-ia-e-diferencas-de-aprendizagem": {
    sections: [
      {
        title: "O que o relatório defende",
        paragraphs: [
          {
            text: "O relatório de Stanford organiza o tema IA e diferenças de aprendizagem em frentes como co-design, aprendizagem nas bordas, planos individualizados, tecnologia assistiva, bem-estar socioemocional, formação docente e mundo do trabalho.",
            refs: ["stanford"],
          },
          {
            text: "A ideia mais importante é que pessoas com diferenças de aprendizagem não devem ser apenas usuárias finais. Elas precisam participar do desenho, dos testes e da avaliação das soluções.",
            refs: ["stanford"],
          },
        ],
      },
      {
        title: "Recomendação prática",
        paragraphs: [
          {
            text: "Para escolas, o relatório sugere comunidades de prática, formação contínua, proteção de dados, pesquisa de longo prazo e integração cuidadosa da IA a planos personalizados.",
            refs: ["stanford"],
          },
        ],
      },
    ],
  },
  "revisao-ia-inclusiva-na-educacao-basica": {
    sections: [
      {
        title: "Cinco princípios",
        paragraphs: [
          {
            text: "A revisão sintetiza cinco princípios de currículos inclusivos de IA: identidade, tecnologia, design, desenvolvimento de conteúdo e senso de pertencimento. Em linguagem simples, a aula precisa conversar com quem o estudante é, usar tecnologia acessível, ter boas escolhas pedagógicas, apresentar conteúdo de forma flexível e criar ambiente onde o estudante se sinta parte.",
            refs: ["k12"],
          },
          {
            text: "O estudo também mostra que projetos conectados à comunidade e à cultura dos estudantes tendem a aumentar engajamento e participação.",
            refs: ["k12"],
          },
        ],
      },
      {
        title: "Resultados",
        paragraphs: [
          {
            text: "Os estudos revisados relatam ganhos cognitivos, afetivos, metacognitivos e sociais. Isso inclui conhecimento, confiança, motivação, autorregulação, comunicação e colaboração.",
            refs: ["k12"],
          },
        ],
      },
    ],
  },
  "a-arte-da-personalizacao-do-ensino": {
    sections: [
      {
        title: "Personalização na educação especial",
        paragraphs: [
          {
            text: "O artigo explica personalização como adaptação de conteúdo, estratégias e ritmo às necessidades individuais do estudante. Na educação especial, isso é central porque as barreiras e formas de apoio podem variar muito de uma pessoa para outra.",
            refs: ["personalizacao"],
          },
          {
            text: "A IA aparece como ferramenta para identificar padrões de aprendizagem, oferecer atividades personalizadas, dar feedback imediato, apoiar fala e linguagem natural e tornar conteúdos digitais mais acessíveis.",
            refs: ["personalizacao"],
          },
        ],
      },
      {
        title: "Limites éticos",
        paragraphs: [
          {
            text: "O mesmo artigo alerta para privacidade dos dados, transparência dos algoritmos, disponibilidade de recursos tecnológicos, formação de professores e o fato de que IA não substitui cuidado e expertise humana.",
            refs: ["personalizacao"],
          },
        ],
      },
    ],
  },
};

const resourceDetails = {
  "video-objetivos-de-aprendizagem": {
    sections: [
      {
        title: "Como usar vídeos introdutórios",
        paragraphs: [
          {
            text: "Um vídeo de abertura deve ajudar o estudante a entender por que IA e inclusão são temas conectados. Depois de assistir, peça que a turma identifique uma barreira escolar e imagine um apoio tecnológico possível.",
            refs: ["cast", "k12"],
          },
        ],
      },
    ],
  },
  "introducao-a-trilha-ia-900": {
    sections: [
      {
        title: "Fundamentos antes da aplicação",
        paragraphs: [
          {
            text: "Conceitos técnicos de IA ajudam a entender o vocabulário, mas não bastam para decidir uso educacional. Em inclusão, o conhecimento técnico precisa ser ligado a acessibilidade, equidade, dados e finalidade pedagógica.",
            refs: ["unesco", "k12"],
          },
        ],
      },
    ],
  },
  "o-que-e-inteligencia-artificial": {
    sections: [
      {
        title: "Explicação acessível",
        paragraphs: [
          {
            text: "IA é tecnologia que encontra padrões e produz respostas a partir de dados. Na escola, ela pode sugerir caminhos de estudo, resumir informações ou adaptar formatos; ainda assim, suas respostas precisam ser conferidas por pessoas.",
            refs: ["unesco", "personalizacao"],
          },
        ],
      },
    ],
  },
  "principios-basicos-do-aprendizado-de-maquina": {
    sections: [
      {
        title: "Por que isso importa",
        paragraphs: [
          {
            text: "Aprendizado de máquina depende de dados. Por isso, em educação inclusiva é essencial perguntar quais estudantes aparecem nesses dados, quais ficam de fora e como erros podem afetar oportunidades.",
            refs: ["unesco", "stanford"],
          },
        ],
      },
    ],
  },
  "como-o-computador-processa-dados-e-midias": {
    sections: [
      {
        title: "Dados viram decisões",
        paragraphs: [
          {
            text: "Quando computadores processam textos, áudio, imagem e desempenho escolar, eles podem gerar apoios úteis. Mas também podem transformar informações sensíveis em classificações ruins se não houver finalidade clara, segurança e revisão humana.",
            refs: ["unesco", "personalizacao"],
          },
        ],
      },
    ],
  },
  "caso-de-uso-i-aprendendo-um-idioma": {
    sections: [
      {
        title: "Aprender idiomas com apoio",
        paragraphs: [
          {
            text: "No aprendizado de idiomas, a IA pode oferecer prática individual, leitura em voz alta, correção formativa e explicações em níveis diferentes. Para ser inclusiva, precisa aceitar ritmos diversos e permitir múltiplas formas de resposta.",
            refs: ["cast", "personalizacao"],
          },
        ],
      },
    ],
  },
  "caso-de-uso-ii-criando-uma-receita-culinaria": {
    sections: [
      {
        title: "Tarefas do cotidiano",
        paragraphs: [
          {
            text: "Atividades como criar uma receita mostram como IA pode apoiar planejamento, vocabulário, sequência de passos e comunicação. Esse tipo de tarefa fica mais inclusivo quando conecta conteúdo escolar à vida cotidiana.",
            refs: ["k12", "cast"],
          },
        ],
      },
    ],
  },
  "cutscene-educacao-inclusiva": {
    sections: [
      {
        title: "Narrativas ajudam a compreender",
        paragraphs: [
          {
            text: "Recursos audiovisuais podem tornar conceitos de inclusão mais concretos. Para serem acessíveis, precisam de legenda, descrição, síntese textual e espaço para diferentes formas de participação.",
            refs: ["cast"],
          },
        ],
      },
    ],
  },
  "podcast-ia-na-educacao-inclusiva": {
    sections: [
      {
        title: "Escuta crítica",
        paragraphs: [
          {
            text: "Podcasts funcionam bem para discutir dilemas: quem se beneficia, quem pode ficar de fora, quais dados são usados e qual decisão deve continuar nas mãos de pessoas. Ofereça também resumo textual para ampliar acesso.",
            refs: ["cast", "unesco"],
          },
        ],
      },
    ],
  },
  "desenho-universal-para-a-aprendizagem": {
    sections: [
      {
        title: "A lógica do DUA",
        paragraphs: [
          {
            text: "O Desenho Universal para a Aprendizagem propõe planejar desde o início para a diversidade. Em vez de adaptar só depois que alguém fica excluído, a aula já nasce com múltiplas formas de acessar, participar e demonstrar conhecimento.",
            refs: ["cast"],
          },
        ],
      },
    ],
  },
  "quadro-de-referencias": {
    sections: [
      {
        title: "Como continuar estudando",
        paragraphs: [
          {
            text: "Use quadros de referências como biblioteca, não como dependência do site. A leitura principal deve ser guiada pelas perguntas: que barreira existe, que apoio é possível, quais riscos aparecem e como medir aprendizagem.",
            refs: ["k12", "stanford"],
          },
        ],
      },
    ],
  },
};

function getItemSlug(item) {
  return window.contentSlug(item);
}

function findContent() {
  return window.siteContents.find((item) => getItemSlug(item) === selectedSlug);
}

function getArticle(item) {
  const slug = getItemSlug(item);
  return detailArticles[slug] || resourceDetails[slug] || defaultByType[item.type];
}

function collectRefs(article) {
  const ordered = [];
  article.sections.forEach((section) => {
    section.paragraphs.forEach((paragraph) => {
      (paragraph.refs || []).forEach((ref) => {
        if (!ordered.includes(ref)) ordered.push(ref);
      });
    });
  });
  return ordered;
}

function createRefSup(refs, refIndex) {
  const fragment = document.createDocumentFragment();

  refs.forEach((ref) => {
    const number = refIndex.get(ref);
    if (!number) return;

    const sup = document.createElement("sup");
    const link = document.createElement("a");
    link.href = `#fonte-${number}`;
    link.textContent = `[${number}]`;
    sup.append(link);
    fragment.append(" ", sup);
  });

  return fragment;
}

function appendArticleSection(section, refIndex) {
  const heading = document.createElement("h2");
  heading.textContent = section.title;
  detailPanel.append(heading);

  section.paragraphs.forEach((paragraph) => {
    const text = document.createElement("p");
    text.className = "detail-text";
    text.append(paragraph.text, createRefSup(paragraph.refs || [], refIndex));
    detailPanel.append(text);
  });
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
    link.href = `detalhe.html?conteudo=${encodeURIComponent(getItemSlug(item))}`;
    link.textContent = item.title;
    list.append(link);
  });

  return list;
}

function appendFootnotes(refs) {
  if (refs.length === 0) return;

  const heading = document.createElement("h2");
  heading.textContent = "Fontes";

  const list = document.createElement("ol");
  list.className = "footnotes";

  refs.forEach((ref, index) => {
    const source = sources[ref];
    if (!source) return;

    const item = document.createElement("li");
    item.id = `fonte-${index + 1}`;

    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = source.title;

    item.append(link);
    list.append(item);
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

  const article = getArticle(item);
  const usedRefs = collectRefs(article);
  const refIndex = new Map(usedRefs.map((ref, index) => [ref, index + 1]));

  const badge = document.createElement("span");
  badge.className = `card-type ${item.type}`;
  badge.textContent = window.typeLabels[item.type];

  const title = document.createElement("h1");
  title.textContent = item.title;

  const summary = document.createElement("p");
  summary.className = "detail-summary";
  summary.textContent = item.text;

  detailPanel.append(badge, title, summary);
  article.sections.forEach((section) => appendArticleSection(section, refIndex));

  const related = createRelatedList(item);
  if (related) {
    const relatedTitle = document.createElement("h2");
    relatedTitle.textContent = "Continue explorando";
    detailPanel.append(relatedTitle, related);
  }

  appendFootnotes(usedRefs);

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
    externalLink.textContent = "Abrir material";
    actions.append(externalLink);
  }

  detailPanel.append(actions);
}

const selectedContent = findContent();

if (selectedContent) {
  renderDetail(selectedContent);
} else {
  renderNotFound();
}
