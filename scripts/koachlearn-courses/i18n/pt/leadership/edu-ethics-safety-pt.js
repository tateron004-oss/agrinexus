"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-ethics-safety.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: FERPA, COPPA, FTC, NIST, Title IX and US agency names are kept as written, with short explanations.

module.exports = {
  id: "edu-ethics-safety-pt",
  lang: "pt",
  translationOf: "edu-ethics-safety",
  category: "Leadership Development",
  name: "IA para Líderes Escolares e Educativos 7: Ética, Segurança e IA Responsável",
  skills: "Aplicar princípios éticos à IA na escola, Identificar riscos de enviesamento e de equidade, Proteger os dados dos alunos segundo a FERPA e a COPPA, Avaliar fornecedores e contratos, Escrever orientações de uso responsável, Responder a incidentes de IA e a deepfakes",
  outcome: "escrever orientações de IA responsável para a sua escola ou distrito escolar, com princípios, privacidade, equidade, uso por funcionários e alunos, avaliação de fornecedores e um plano de resposta a incidentes, e usá-las para avaliar uma ferramenta de IA real e um incidente realista.",
  about: [
    "Este curso é para diretores de escola, líderes de distritos escolares, equipas de tecnologia e de privacidade, orientadores escolares e professores líderes. Junta os temas de ética, privacidade e segurança dos cursos anteriores nas orientações e nos procedimentos de que a sua escola precisa.",
    "O Capítulo 1 trata dos princípios: justiça e equidade, transparência, supervisão humana, privacidade e segurança, e como aparecem nos usos reais da IA na escola. O Capítulo 2 passa dos princípios à prática: avaliação de fornecedores, orientações escritas e um plano para quando algo corre mal, como uma fuga de dados ou uma imagem falsa de um aluno ou professor feita com IA.",
    "Este curso explica a lei com palavras simples para que você saiba o que perguntar; não é aconselhamento jurídico. O advogado do seu distrito e o responsável pela privacidade têm a última palavra, e as leis de cada estado podem acrescentar exigências. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso. Este é o curso 7 de 8 de IA para Líderes Escolares e Educativos."
  ],
  finalTask: "Escreva orientações de IA responsável de duas páginas para a sua escola ou distrito: cinco princípios com palavras simples, regras de privacidade (FERPA, COPPA, só ferramentas aprovadas), verificações de equidade, o que funcionários e alunos podem e não podem fazer, os passos de avaliação de fornecedores e um plano de resposta a incidentes em seis passos. Depois teste-as: avalie uma ferramenta de IA real com os seus passos para fornecedores e percorra um incidente realista (por exemplo, uma imagem falsa de um aluno, feita com IA, partilhada num grupo de conversa) usando o seu plano.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Diretores de escola, líderes de distritos escolares, equipas de tecnologia e de privacidade, orientadores escolares e professores líderes em escolas e distritos dos Estados Unidos que definem regras para o uso da IA.",
    startingPoint: "Conhecem o básico da IA, o básico da FERPA e da COPPA, a avaliação de ferramentas e as regras de IA na sala de aula, dos cursos anteriores. A sua escola ou distrito pode não ter orientações escritas de IA responsável nem um plano para incidentes.",
    gap: "Sem orientações escritas, as decisões sobre IA são tomadas caso a caso, os riscos de equidade não são verificados e as escolas não estão preparadas quando algo corre mal, como uma fuga de dados ou uma imagem falsa de um aluno feita com IA. Os líderes precisam de princípios claros, passos para avaliar fornecedores, regras para funcionários e alunos e um plano para incidentes.",
    constraints: [
      "O curso explica a lei com palavras simples e não é aconselhamento jurídico; o advogado do distrito e o responsável pela privacidade têm a última palavra",
      "As leis de cada estado podem acrescentar exigências, e as leis sobre imagens feitas com IA estão a mudar depressa",
      "Nenhum dado nem imagem real de alunos na prática; os exercícios de incidentes usam casos inventados mas realistas",
      "Imagens de menores nunca são reencaminhadas; os funcionários seguem as orientações do advogado e da polícia",
      "Tempo: lições curtas; as orientações levam mais tempo a escrever e a testar"
    ],
    prerequisites: "Recomendam-se os cursos 1 a 6 de IA para Líderes Escolares e Educativos, sobretudo o curso 1 e o curso 2."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um uso da IA na sua escola", action: "aplicar a esse uso cinco princípios de IA responsável", standard: "com uma frase sobre como cumpre ou falha cada princípio" },
    { id: "O2", condition: "Com uma ferramenta de IA que dá notas, assinala ou se adapta aos alunos", action: "identificar onde ela pode tratar grupos de alunos de forma injusta", standard: "escrevendo três perguntas de equidade para o fornecedor e uma verificação dos seus próprios resultados" },
    { id: "O3", condition: "Quando os funcionários usam ferramentas de IA", action: "aplicar a FERPA, a COPPA e hábitos básicos de segurança", standard: "com cinco hábitos em palavras simples, cada um com um exemplo do que não fazer" },
    { id: "O4", condition: "Antes de uma ferramenta de IA ser aprovada", action: "fazer uma avaliação do fornecedor a partir dos documentos públicos da ferramenta", standard: "fazendo a lista do que o fornecedor tem de confirmar num contrato assinado" },
    { id: "O5", condition: "Com a participação de professores, alunos e famílias", action: "redigir orientações de IA responsável com regras de pode e não pode para funcionários e alunos", standard: "com pelo menos quatro pontos concretos em cada, verificados com o advogado face à política do distrito e à lei do estado" },
    { id: "O6", condition: "Com um incidente de IA realista, como um deepfake ou uma fuga de dados", action: "percorrer um plano de resposta a incidentes em seis passos", standard: "começando por pôr o aluno em segurança e acabando por atualizar as orientações" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Os princípios na prática",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cinco princípios para a IA nas escolas",
          minutes: 5,
          goal: "Dizer cinco princípios de IA responsável e aplicá-los a um exemplo da escola.",
          text: [
            "A maioria dos quadros de IA responsável partilha algumas ideias. Cinco que servem para as escolas: Supervisão humana: os educadores tomam as decisões sobre os alunos; a IA informa, nunca decide. Justiça e equidade: a IA não deve prejudicar nenhum grupo de alunos e deve alargar o acesso. Privacidade e segurança: recolher e partilhar o mínimo possível de dados dos alunos, e protegê-los.",
            "Transparência: alunos, funcionários e famílias sabem quando e como a IA é usada. Responsabilização: uma pessoa com nome é responsável por cada ferramenta de IA e pelos seus efeitos, e há uma forma de apresentar preocupações.",
            "Estes princípios correspondem aos da carta \"Dear Colleague\" sobre IA do Departamento de Educação dos EUA, de 22 de julho de 2025, que, segundo o K-12 Dive (um site de notícias sobre educação), pede iniciativas de IA lideradas por educadores, éticas, acessíveis a alunos com deficiência, transparentes na sua introdução e conformes às leis federais de privacidade. Para gerir riscos, o quadro voluntário de gestão de riscos de IA do NIST (o instituto de normas dos EUA), com as funções Govern, Map, Measure e Manage, é uma referência gratuita."
          ],
          words: [["Supervisão humana", "pessoas que revêem e decidem, enquanto a IA só informa."], ["Equidade", "garantir que cada aluno recebe o que precisa para ter sucesso."], ["Transparência", "ser aberto sobre quando e como a IA é usada."]],
          slides: [
            { title: "Cinco princípios", bullets: ["Supervisão humana", "Justiça e equidade", "Privacidade e segurança", "Transparência e responsabilização"] },
            { title: "Carta federal sobre IA, julho de 2025", bullets: ["Liderada por educadores e ética", "Acessível a alunos com deficiência", "Transparente; respeita a privacidade"] },
            { title: "Um quadro de riscos gratuito", bullets: ["NIST AI RMF: Govern, Map, Measure, Manage", "Voluntário; veja as atualizações em nist.gov"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department issues AI priorities (julho de 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "NIST AI Risk Management Framework (quadro de gestão de riscos de IA)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Escolha um uso da IA na sua escola (por exemplo, um programa de leitura adaptativo). Escreva uma frase sobre como ele cumpre ou falha cada um dos cinco princípios.",
          youCanNow: "aplicar cinco princípios de IA responsável a um uso real na escola.",
          quickCheck: [
            { objective: "O1", q: "O que quer dizer o princípio da transparência?", options: ["Ser aberto sobre quando e como a IA é usada", "Usar só ferramentas de IA gratuitas", "Deixar a IA tomar decisões em público", "Partilhar dados dos alunos com as famílias"], answer: 0, why: "Transparência quer dizer que as pessoas sabem quando e como a IA é usada." },
            { objective: "O1", q: "Um programa de leitura adaptativo escolhe o próximo livro de cada aluno. Que pergunta de princípio faria?", options: ["É o programa mais barato?", "É o programa mais recente?", "Os professores podem ver as escolhas dele e mudá-las?", "Tem mais funcionalidades?"], answer: 2, why: "Supervisão humana quer dizer que os educadores decidem e a IA informa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Riscos de enviesamento e de equidade na IA escolar",
          minutes: 6,
          goal: "Identificar onde os usos da IA na escola podem tratar grupos de alunos de forma injusta.",
          text: [
            "A IA aprende com dados, e os dados refletem o passado, incluindo as injustiças. Nas escolas, observe quatro lugares. Detetores: os detetores de escrita feita por IA podem assinalar por engano trabalhos honestos, e a escrita de alunos que estão a aprender inglês pode ser assinalada mais vezes. Previsão: alertas precoces ou pontuações de risco podem rotular alunos com base em padrões ligados ao rendimento, à deficiência ou à raça.",
            "Encaminhamento por níveis: programas adaptativos que continuam a dar trabalho mais fácil a alguns alunos podem reduzir as suas oportunidades. Acesso: se a ajuda da IA precisa de um aparelho ou de internet em casa, os alunos sem eles ficam ainda mais para trás; se uma ferramenta não é acessível, os alunos com deficiência ficam de fora.",
            "Verificações de equidade: pergunte aos fornecedores como testam o enviesamento e a acessibilidade; veja os resultados por grupo de alunos nos seus próprios dados (com proteção da privacidade); nunca use só uma pontuação de IA para decisões de colocação, disciplina ou elegibilidade; e garanta que todos os alunos conseguem usar a ferramenta na escola."
          ],
          steps: ["Faça a lista dos usos da IA que separam, pontuam ou assinalam alunos.", "Pergunte ao fornecedor como testa o enviesamento e a acessibilidade.", "Reveja os resultados por grupo de alunos, protegendo a privacidade.", "Nunca use só uma pontuação de IA para decisões sobre alunos.", "Verifique se todos os alunos conseguem usar a ferramenta na escola."],
          words: [["Enviesamento algorítmico", "resultados injustos de um sistema de IA, muitas vezes aprendidos com dados do passado."], ["Pontuação de risco", "um número que um sistema dá a um aluno para prever um problema, como abandonar a escola."], ["Encaminhamento por níveis", "manter alunos em níveis de trabalho diferentes, o que pode limitar as oportunidades."]],
          slides: [
            { title: "Onde aparece o enviesamento", bullets: ["Detetores que assinalam alunos por engano", "Pontuações de risco ligadas ao rendimento, à deficiência, à raça", "Níveis adaptativos que reduzem as oportunidades"] },
            { title: "Acesso é equidade", bullets: ["Falta de aparelhos e de internet em casa", "Ferramentas não acessíveis a pessoas com deficiência"] },
            { title: "Verificações de equidade", bullets: ["Pergunte aos fornecedores sobre testes de enviesamento e acessibilidade", "Reveja os resultados por grupo", "Nenhuma pontuação de IA sozinha decide"] }
          ],
          tryIt: "Escolha uma ferramenta de IA que pontua, assinala ou se adapta aos alunos da sua escola. Escreva três perguntas de equidade que faria ao fornecedor e uma verificação que faria aos seus próprios resultados.",
          youCanNow: "identificar riscos de equidade na IA escolar e pôr em prática verificações úteis.",
          quickCheck: [
            { objective: "O2", q: "Porque é que os detetores de escrita feita por IA levantam preocupações de equidade?", options: ["São caros demais", "Podem assinalar mais vezes a escrita de alunos que estão a aprender inglês", "Só funcionam em telefones", "Dão notas devagar demais"], answer: 1, why: "Os falsos alertas desiguais caem mais sobre alguns grupos de alunos do que sobre outros." },
            { objective: "O2", q: "Uma ferramenta adaptativa mantém um grupo de alunos em trabalho mais fácil durante meses. O que faria?", options: ["Nada; a ferramenta sabe o que faz", "Desligar toda a IA da escola", "Mudar esses alunos para outra escola", "Ver os seus próprios resultados por grupo e perguntar ao fornecedor como a ferramenta decide"], answer: 3, why: "Ver os resultados por grupo mostra se a ferramenta reduz as oportunidades de alguns alunos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Privacidade e segurança: FERPA, COPPA e bons hábitos",
          minutes: 6,
          goal: "Aplicar a FERPA, a COPPA e hábitos básicos de segurança às ferramentas de IA.",
          text: [
            "A FERPA (lei federal dos EUA sobre privacidade escolar) protege os registos escolares dos alunos. Em geral, as escolas precisam de consentimento para divulgar informações de identificação pessoal desses registos, com exceções; um fornecedor só pode agir como funcionário escolar se presta um serviço à escola, está sob o controlo direto da escola e segue limites sobre voltar a partilhar os dados. Os pais podem consultar e rever os registos; os direitos passam para o aluno aos 18 anos ou na universidade.",
            "A COPPA, aplicada pela FTC (a comissão federal de comércio dos EUA), protege crianças com menos de 13 anos na internet. A FTC diz que as escolas só podem dar consentimento em nome dos pais quando as informações são recolhidas para uso e benefício da escola e para nenhum outro fim comercial. A FTC alterou a sua regra COPPA em 22 de abril de 2025; consulte as páginas da FTC para ver as exigências atuais.",
            "Bons hábitos: minimização de dados (partilhar só o que a tarefa precisa), só ferramentas aprovadas, contas do distrito com palavras-passe fortes e início de sessão em dois passos, nunca carregar registos em contas pessoais, e saber a quem ligar se os dados podem ter sido expostos. O seu estado pode ter a sua própria lei de privacidade dos alunos; o responsável pela privacidade saberá."
          ],
          steps: ["Use só ferramentas aprovadas para informações de alunos.", "Partilhe o mínimo de dados necessário.", "Use contas do distrito com início de sessão em dois passos.", "Nunca carregue registos em contas pessoais.", "Saiba a quem ligar sobre uma possível fuga de dados."],
          words: [["Minimização de dados", "recolher e partilhar só os dados de que uma tarefa precisa mesmo."], ["Início de sessão em dois passos", "entrar com uma palavra-passe e mais uma verificação, como um código no seu telefone."]],
          slides: [
            { title: "FERPA", bullets: ["Protege os registos escolares", "Em geral é preciso consentimento para partilhar dados pessoais", "Fornecedores só como funcionários escolares controlados"] },
            { title: "COPPA", bullets: ["Menos de 13 anos, aplicada pela FTC", "Consentimento da escola: só uso escolar, sem outro uso comercial", "Regra alterada em 22 de abril de 2025"] },
            { title: "Bons hábitos", bullets: ["Minimização de dados", "Ferramentas aprovadas, contas do distrito, início de sessão em dois passos", "Saiba a quem ligar sobre uma fuga de dados"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy (proteger a privacidade dos alunos)", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Complying with COPPA, Frequently Asked Questions (perguntas frequentes)", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Escreva cinco hábitos de privacidade e segurança para os seus funcionários com palavras simples, com um exemplo do que NÃO fazer para cada um.",
          youCanNow: "aplicar a FERPA, a COPPA e hábitos de segurança do dia a dia ao uso da IA pelos funcionários.",
          quickCheck: [
            { objective: "O3", q: "O que acrescenta o início de sessão em dois passos?", options: ["Uma segunda verificação, como um código no seu telefone", "Uma segunda palavra-passe escrita duas vezes", "Uma segunda ferramenta de IA", "Um segundo funcionário que entra por você"], answer: 0, why: "Uma segunda verificação protege as contas mesmo que uma palavra-passe seja roubada." },
            { objective: "O3", q: "Um professor quer carregar a lista completa de uma turma numa ferramenta de IA para uma pequena tarefa. O que aconselharia?", options: ["Carregar; mais dados dão melhores resultados", "Carregar em duas ferramentas para comparar", "Partilhar só o que a tarefa precisa, numa ferramenta aprovada", "Enviar por e-mail ao fornecedor"], answer: 2, why: "Minimização de dados quer dizer partilhar só o que a tarefa precisa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Os princípios na prática",
        questions: [
          { objective: "O1", q: "Que princípio diz que os educadores tomam as decisões sobre os alunos e a IA só informa?", options: ["Transparência", "Minimização de dados", "Supervisão humana", "Encaminhamento por níveis"], answer: 2, why: "A supervisão humana deixa as decisões com os educadores." },
          { objective: "O1", q: "Uma ferramenta de alerta precoce dá a um aluno uma pontuação de risco alta. O uso certo é:", options: ["Usá-la como um dado entre outros para educadores que também conhecem o aluno", "Colocar o aluno automaticamente", "Divulgar a pontuação em público", "Ignorar todos os dados"], answer: 0, why: "Nenhuma pontuação de IA deve decidir sozinha." },
          { objective: "O2", q: "Porque é que o acesso é uma questão de equidade nas ferramentas de IA?", options: ["Só os adultos usam IA", "Não é", "O acesso torna as ferramentas mais lentas", "Os alunos sem aparelhos, internet ou ferramentas acessíveis ficam para trás"], answer: 3, why: "O acesso desigual aumenta as diferenças." },
          { objective: "O3", q: "Minimização de dados quer dizer:", options: ["Recolher o máximo possível", "Partilhar só o que a tarefa precisa", "Apagar todos os dados", "Usar letras mais pequenas"], answer: 1, why: "Menos dados quer dizer menos risco." },
          { objective: "O3", q: "Segundo a COPPA, uma escola pode dar consentimento em nome dos pais quando os dados são recolhidos:", options: ["Para publicidade", "Nunca", "Por qualquer motivo", "Para uso e benefício da escola, sem outro fim comercial"], answer: 3, why: "Essa é a condição da FTC." }
        ]
      }
    },
    {
      name: "Capítulo 2: Orientações, fornecedores e incidentes",
      lessons: [
        {
          objectives: ["O4"],
          title: "Avaliar fornecedores e contratos",
          minutes: 5,
          goal: "Fazer uma avaliação do fornecedor antes de uma ferramenta de IA ser aprovada.",
          text: [
            "Cada ferramenta de IA que vai tocar em informações de alunos precisa de uma avaliação antes de ser aprovada. Use a lista de verificação Model Terms of Service (modelo de termos de serviço) do Student Privacy Policy Office (o gabinete de privacidade dos alunos do Departamento de Educação dos EUA) ou a do seu distrito. Perguntas-chave: que dados, a quem pertencem, são usados para publicidade ou para treinar IA, podem ser apagados a pedido, quem mais os recebe, como são protegidos e o que acontece numa fuga de dados.",
            "Acrescente perguntas próprias da IA: Como funciona a IA e quais são os seus limites? Como é testada quanto à exatidão, ao enviesamento e à acessibilidade? Os professores podem ver e anular o que ela produz? Ela guarda o que os alunos escrevem, e durante quanto tempo?",
            "Obtenha os compromissos num contrato assinado, não só numa política do site que pode mudar. Muitos estados e distritos usam acordos de privacidade de dados com os fornecedores; o responsável pela privacidade ou o advogado saberá qual é o formulário certo."
          ],
          steps: ["Use a lista Model Terms of Service ou a do seu distrito.", "Faça as perguntas próprias da IA.", "Peça respostas por escrito.", "Obtenha os compromissos num contrato assinado.", "Registe a decisão e a data da próxima revisão."],
          words: [["Acordo de privacidade de dados", "um contrato assinado que define como um fornecedor pode usar e proteger os dados dos alunos."], ["Anular", "uma pessoa mudar ou rejeitar o que a IA produziu."]],
          slides: [
            { title: "Perguntas de privacidade", bullets: ["Que dados, a quem pertencem", "Publicidade ou treino de IA?", "Apagamento, partilha, segurança, fuga de dados"] },
            { title: "Perguntas sobre a IA", bullets: ["Como funciona e os seus limites", "Testes de exatidão, enviesamento, acessibilidade", "Os professores podem anular? Quanto tempo guarda o que é escrito?"] },
            { title: "Ponha por escrito", bullets: ["Contrato assinado, não só uma página na internet", "Peça o formulário ao responsável pela privacidade"] }
          ],
          sources: [{ name: "Privacy and Education Technology: lista Model Terms of Service", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Faça uma avaliação do fornecedor de uma ferramenta de IA que a sua escola usa ou quer usar: responda às perguntas de privacidade e de IA a partir dos documentos públicos dela e faça a lista do que precisaria que o fornecedor confirmasse por escrito.",
          youCanNow: "avaliar um fornecedor de IA quanto à privacidade, à qualidade da IA e aos termos do contrato antes da aprovação.",
          quickCheck: [
            { objective: "O4", q: "O que é um acordo de privacidade de dados?", options: ["A página de publicidade de um fornecedor", "Um contrato assinado sobre como um fornecedor usa e protege os dados dos alunos", "Um formulário que os alunos assinam", "Uma lista de sites aprovados"], answer: 1, why: "Um contrato assinado obriga o fornecedor a cumprir os seus compromissos." },
            { objective: "O4", q: "O site de um fornecedor diz que nunca treina IA com dados de alunos. O que faria?", options: ["Aprovar a ferramenta com base nisso", "Ignorar", "Perguntar aos alunos se é verdade", "Pôr esse compromisso no contrato assinado"], answer: 3, why: "As políticas dos sites podem mudar; um contrato assinado não muda sozinho." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escrever orientações de IA responsável",
          minutes: 6,
          goal: "Redigir orientações claras para o uso da IA por funcionários e alunos.",
          text: [
            "As orientações transformam princípios em regras do dia a dia. Mantenha-as com cerca de duas páginas e use palavras simples. Secções: objetivo e princípios; ferramentas aprovadas e como pedir uma nova; regras de privacidade; o que os funcionários podem e não podem fazer; o que os alunos podem e não podem fazer (ligue aos seus níveis de uso da IA); integridade académica; transparência com as famílias; e a quem contactar.",
            "Use exemplos concretos: \"Os funcionários podem usar ferramentas de IA aprovadas para redigir materiais de aula e cartas às famílias. Os funcionários não podem pôr nomes, notas, informações de IEP ou 504 (planos de apoio a alunos com deficiência) nem registos disciplinares de alunos em nenhuma ferramenta não aprovada. Os funcionários não podem usar a IA para tomar decisões de notas, colocação ou disciplina.\"",
            "Escreva-as com professores, alunos (de forma adequada à idade) e famílias, verifique-as com o advogado face à política do distrito e à lei do estado, e marque uma data de revisão. Orientações que ninguém ajudou a escrever são orientações que ninguém segue."
          ],
          steps: ["Redija as secções: princípios, ferramentas, privacidade, funcionários, alunos, integridade, transparência, contacto.", "Acrescente exemplos concretos de pode / não pode.", "Envolva professores, alunos e famílias.", "Verifique com o advogado face à política e à lei do estado.", "Publique e marque uma data de revisão."],
          words: [["Orientações", "regras práticas que explicam como seguir uma política no dia a dia."], ["Política do conselho escolar", "uma regra formal aprovada pelo conselho escolar."]],
          slides: [
            { title: "Duas páginas, palavras simples", bullets: ["Princípios, ferramentas, privacidade", "Funcionários e alunos: pode / não pode", "Integridade, transparência, contacto"] },
            { title: "Exemplos concretos", bullets: ["Pode: redigir materiais em ferramentas aprovadas", "Não pode: dados de alunos em ferramentas não aprovadas", "Não pode: decisões de notas ou disciplina pela IA"] },
            { title: "Escrevam em conjunto", bullets: ["Professores, alunos, famílias", "O advogado verifica a política e a lei do estado", "Marque uma data de revisão"] }
          ],
          tryIt: "Redija as secções \"pode / não pode\" para funcionários e alunos das suas orientações, com pelo menos quatro pontos em cada. Mostre-as a dois professores e anote as mudanças que propõem.",
          youCanNow: "escrever orientações práticas de IA responsável com as pessoas que as vão seguir.",
          quickCheck: [
            { objective: "O5", q: "O que torna as orientações úteis para os funcionários?", options: ["Exemplos concretos de pode e não pode", "Linguagem jurídica longa", "Uma lista de todas as ferramentas de IA do mercado", "Nenhum exemplo, para os funcionários decidirem"], answer: 0, why: "Exemplos concretos tornam as regras fáceis de seguir." },
            { objective: "O5", q: "O rascunho das suas orientações está pronto. O que deve acontecer antes de serem adotadas?", options: ["Publicá-las logo", "Pedir a um chatbot de IA para as aprovar", "Ouvir professores, alunos e famílias e verificá-las com o advogado face à política e à lei", "Mantê-las em segredo dos funcionários"], answer: 2, why: "As orientações precisam da opinião das pessoas afetadas e de uma verificação jurídica." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Quando algo corre mal: resposta a incidentes",
          minutes: 6,
          goal: "Planear os passos para um incidente de IA, incluindo fugas de dados e deepfakes.",
          text: [
            "Planeie antes do incidente. Incidentes de IA comuns: dados de alunos postos numa ferramenta não aprovada; uma ferramenta de IA que dá informações prejudiciais ou erradas aos alunos; e imagens, áudios ou vídeos falsos de alunos ou funcionários feitos com IA (deepfakes), que podem ser assédio e podem ser crime.",
            "Um plano em seis passos: 1) Pôr em segurança: parar o dano (retirar o acesso, pausar a ferramenta, apoiar a pessoa afetada). 2) Comunicar: ao diretor da escola e ao contacto do distrito indicado nas suas orientações. 3) Preservar: guardar as provas como o seu distrito indicar (para imagens de menores, siga as orientações da polícia e do advogado; nunca as reencaminhe nem copie). 4) Avaliar: que dados ou pessoas foram afetados. 5) Notificar: as famílias e outros, como a lei e a política exigem. 6) Aprender: corrigir a causa e atualizar as orientações.",
            "Para deepfakes e assédio, siga os seus procedimentos de bullying, assédio e Title IX e envolva o advogado e, quando for obrigatório, a polícia. As leis sobre imagens feitas com IA estão a mudar depressa a nível federal e estadual; o seu advogado saberá o que se aplica."
          ],
          steps: ["Pôr em segurança: parar o dano e apoiar a pessoa.", "Comunicar ao diretor da escola e ao contacto do distrito.", "Preservar as provas como indicado; nunca reencaminhar imagens de menores.", "Avaliar que dados ou pessoas foram afetados.", "Notificar como a lei e a política exigem; depois aprender e atualizar."],
          words: [["Resposta a incidentes", "os passos planeados para tratar de algo que correu mal."], ["Deepfake", "uma imagem, voz ou vídeo falso feito com IA para parecer verdadeiro."], ["Title IX", "a lei federal dos EUA contra a discriminação por sexo na educação, incluindo o assédio sexual."]],
          slides: [
            { title: "Incidentes de IA comuns", bullets: ["Dados de alunos numa ferramenta não aprovada", "Respostas da IA prejudiciais ou erradas para alunos", "Deepfakes de alunos ou funcionários"] },
            { title: "Seis passos", bullets: ["1 Pôr em segurança  2 Comunicar  3 Preservar", "4 Avaliar  5 Notificar  6 Aprender"] },
            { title: "Deepfakes e assédio", bullets: ["Siga os procedimentos de bullying, assédio e Title IX", "Nunca reencaminhe imagens de menores", "Envolva o advogado; as leis estão a mudar"] }
          ],
          tryIt: "Tarefa final: termine as suas orientações de IA responsável de duas páginas (princípios, privacidade, equidade, regras para funcionários e alunos, passos para fornecedores, plano de incidentes em seis passos). Teste-as avaliando uma ferramenta real e percorrendo um incidente realista, e anote qualquer falha que encontrou.",
          youCanNow: "liderar o uso responsável da IA na sua escola com orientações claras, avaliação de fornecedores e um plano para incidentes.",
          quickCheck: [
            { objective: "O6", q: "Qual é o último passo do plano de incidentes?", options: ["Pôr em segurança", "Aprender: corrigir a causa e atualizar as orientações", "Avisar a imprensa", "Apagar todos os registos"], answer: 1, why: "Aprender com cada incidente evita que volte a acontecer." },
            { objective: "O6", q: "Um funcionário recebe uma imagem falsa de um aluno feita com IA. O que deve fazer com ela?", options: ["Reencaminhá-la aos colegas para saberem", "Publicar um aviso com a imagem", "Apagá-la e não dizer nada", "Não a reencaminhar e seguir as orientações do advogado e da polícia para preservar as provas"], answer: 3, why: "Imagens de menores nunca são reencaminhadas; as provas são tratadas como o advogado e a polícia aconselham." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Orientações, fornecedores e incidentes",
        questions: [
          { objective: "O4", q: "Porque obter os compromissos do fornecedor num contrato assinado?", options: ["Os contratos são opcionais", "É mais rápido", "As políticas dos sites podem mudar", "Os fornecedores preferem"], answer: 2, why: "Os termos assinados obrigam o fornecedor." },
          { objective: "O4", q: "Qual é uma pergunta ao fornecedor própria da IA?", options: ["Os professores podem ver e anular o que a IA produz?", "De que cor é o logótipo?", "Quantos funcionários tem o fornecedor?", "Onde fica o escritório?"], answer: 0, why: "A anulação humana é essencial para a supervisão." },
          { objective: "O5", q: "Quem deve ajudar a escrever as orientações?", options: ["Só o fornecedor", "Professores, alunos e famílias, com verificação do advogado", "Só o diretor da escola, sozinho", "Só uma ferramenta de IA"], answer: 1, why: "Orientações que as pessoas ajudam a escrever são orientações que as pessoas seguem." },
          { objective: "O6", q: "Um aluno conta que há uma imagem falsa de um colega, feita com IA, num grupo de conversa. Qual é o primeiro passo?", options: ["Pôr em segurança: parar o dano e apoiar o aluno", "Reencaminhá-la aos funcionários para a verem", "Ignorar", "Publicar um aviso com a imagem"], answer: 0, why: "Primeiro a segurança; nunca espalhe a imagem." },
          { objective: "O6", q: "Qual é o último passo do plano de incidentes?", options: ["Esquecer o assunto", "Culpar o aluno", "Apagar as orientações", "Aprender: corrigir a causa e atualizar as orientações"], answer: 3, why: "Os incidentes devem melhorar o sistema." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Líderes Escolares e Educativos 7: Ética, Segurança e IA Responsável",
    questions: [
      { objective: "O1", q: "Supervisão humana quer dizer:", options: ["A IA decide; os educadores observam", "Os educadores decidem; a IA informa", "Ninguém decide", "Os pais decidem todo o uso da IA"], answer: 1, why: "As decisões sobre os alunos ficam com pessoas." },
      { objective: "O1", q: "Transparência quer dizer:", options: ["Esconder o uso da IA", "Usar plástico transparente", "Ser aberto sobre quando e como a IA é usada", "Partilhar dados dos alunos"], answer: 2, why: "As pessoas devem saber quando a IA está envolvida." },
      { objective: "O1", q: "Responsabilização quer dizer:", options: ["Ninguém é responsável", "A IA é responsável", "Uma pessoa com nome é responsável por cada ferramenta de IA e pelos seus efeitos", "Os fornecedores decidem tudo"], answer: 2, why: "Alguém tem de responder por cada ferramenta." },
      { objective: "O1", q: "A carta federal sobre IA de julho de 2025 pede IA que seja:", options: ["Liderada por educadores, ética, acessível, transparente e que respeite a privacidade", "Sem professores", "Sem regras", "Só para o ensino secundário"], answer: 0, why: "Esses são os princípios que ela indica." },
      { objective: "O1", q: "O NIST AI RMF é:", options: ["Um teste para alunos", "Uma lei", "Um programa de computador", "Um quadro voluntário para gerir riscos de IA"], answer: 3, why: "O NIST descreve-o como voluntário." },
      { objective: "O2", q: "Os detetores de escrita feita por IA levantam preocupações de equidade porque:", options: ["São sempre justos", "Podem assinalar mais vezes a escrita de alunos que estão a aprender inglês", "São gratuitos", "Nunca assinalam ninguém"], answer: 1, why: "Os falsos positivos podem cair de forma desigual." },
      { objective: "O2", q: "O encaminhamento adaptativo por níveis pode ser um risco quando:", options: ["É usado por professores", "Desafia todos os alunos", "Está desligado", "Mantém alguns alunos em trabalho mais fácil e reduz as oportunidades"], answer: 3, why: "O encaminhamento por níveis pode limitar as oportunidades." },
      { objective: "O2", q: "Uma pontuação de risco de IA deve ser usada:", options: ["Em público", "Como decisão final", "Como um dado entre outros, nunca sozinha para decidir", "Sem nunca ser revista"], answer: 2, why: "Os educadores ponderam-na com o que sabem." },
      { objective: "O3", q: "Segundo a FERPA, um fornecedor só pode agir como funcionário escolar se:", options: ["Presta um serviço à escola sob controlo direto, com limites sobre voltar a partilhar", "For popular", "For gratuito", "Tiver uma página de privacidade"], answer: 0, why: "Essas são as condições da FERPA." },
      { objective: "O3", q: "A COPPA protege crianças:", options: ["Com menos de 16 anos", "Com menos de 13 anos", "Com menos de 18 anos", "Com mais de 13 anos"], answer: 1, why: "A FTC diz menos de 13 anos." },
      { objective: "O3", q: "A FTC alterou a sua regra COPPA em:", options: ["22 de abril de 2025", "1 de janeiro de 1990", "27 de outubro de 2026", "4 de julho de 2020"], answer: 0, why: "As perguntas frequentes da FTC indicam 22 de abril de 2025." },
      { objective: "O3", q: "O início de sessão em dois passos acrescenta:", options: ["Nada", "Uma segunda palavra-passe em papel", "Um segundo utilizador", "Uma segunda verificação, como um código no seu telefone"], answer: 3, why: "Protege as contas se uma palavra-passe for exposta." },
      { objective: "O4", q: "A lista Model Terms of Service vem:", options: ["De um fornecedor", "Do Student Privacy Policy Office do Departamento de Educação", "De uma rede social", "De um site de notícias"], answer: 1, why: "Está publicada em studentprivacy.ed.gov." },
      { objective: "O4", q: "Um acordo de privacidade de dados é:", options: ["Um compromisso dos alunos", "Um anúncio num site", "Um contrato assinado sobre como um fornecedor usa e protege os dados dos alunos", "Uma palavra-passe"], answer: 2, why: "Obriga o fornecedor por escrito." },
      { objective: "O5", q: "Boas orientações incluem:", options: ["Anúncios de fornecedores", "Só valores gerais", "Exemplos concretos de pode / não pode", "Nomes de alunos"], answer: 2, why: "Os exemplos tornam as regras utilizáveis." },
      { objective: "O5", q: "As orientações devem ser verificadas face:", options: ["À política do distrito e à lei do estado, com o advogado", "Às redes sociais", "Aos blogues dos fornecedores", "A nada"], answer: 0, why: "Têm de estar de acordo com a lei e a política existentes." },
      { objective: "O6", q: "Um deepfake de um aluno, feito com IA e partilhado na internet, pode ser:", options: ["Um projeto escolar", "Uma brincadeira sem mal", "Sempre legal", "Assédio e possivelmente crime"], answer: 3, why: "Trate-o como um dano grave." },
      { objective: "O6", q: "Ao preservar provas que envolvem imagens de menores, os funcionários devem:", options: ["Reencaminhá-las aos colegas", "Seguir as orientações do advogado e da polícia e nunca as reencaminhar", "Publicá-las", "Guardá-las nos telefones pessoais"], answer: 1, why: "Copiar essas imagens pode em si causar dano ou violar a lei." },
      { objective: "O6", q: "A notificação das famílias depois de um incidente deve seguir:", options: ["Comentários nas redes sociais", "O que for mais fácil", "Nada", "A lei e a política do distrito"], answer: 3, why: "As obrigações de notificação vêm da lei e da política." },
      { objective: "O6", q: "As leis sobre imagens feitas com IA estão:", options: ["Iguais em todos os estados", "Fixas para sempre", "A mudar depressa; pergunte ao advogado o que se aplica", "Sem importância para as escolas"], answer: 2, why: "As regras federais e estaduais estão a evoluir." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      5,
      7,
      8,
      9,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Princípios",
        objective: "O1",
        notYet: "Menos de cinco princípios, ou não estão em palavras simples.",
        meets: "Cinco princípios em palavras simples.",
        exceeds: "Cada princípio tem um pequeno exemplo da escola."
      },
      {
        name: "Privacidade e equidade",
        objective: "O3",
        notYet: "Faltam as regras de privacidade ou as verificações de equidade.",
        meets: "Inclui regras de privacidade (FERPA, COPPA, só ferramentas aprovadas) e verificações de equidade.",
        exceeds: "As verificações de equidade dizem como a escola vai ver os seus próprios resultados por grupo."
      },
      {
        name: "Regras para funcionários e alunos",
        objective: "O5",
        notYet: "Não há regras de pode e não pode, ou são vagas.",
        meets: "Diz o que funcionários e alunos podem e não podem fazer.",
        exceeds: "Os professores reviram as regras e as suas mudanças foram feitas."
      },
      {
        name: "Avaliação de fornecedores",
        objective: "O4",
        notYet: "Não há passos para fornecedores, ou nenhuma ferramenta real foi avaliada.",
        meets: "Passos de avaliação de fornecedores, testados numa ferramenta de IA real.",
        exceeds: "Faz a lista do que o fornecedor tem de confirmar num contrato assinado."
      },
      {
        name: "Plano de incidentes",
        objective: "O6",
        notYet: "Menos de seis passos, ou não foi testado num incidente.",
        meets: "Um plano de incidentes em seis passos, percorrido num incidente realista.",
        exceeds: "Anota uma falha encontrada no exercício e como as orientações vão mudar."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Escolas ou distritos que adotam orientações escritas de IA responsável em 90 dias (inquérito de seguimento)",
      "Ferramentas de IA avaliadas com os passos para fornecedores antes da aprovação (inquérito de seguimento)",
      "Escolas que praticaram o plano de incidentes com a sua equipa de direção"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "As políticas atuais do seu distrito sobre tecnologia, privacidade e uso aceitável",
      "O recurso Model Terms of Service de studentprivacy.ed.gov",
      "Um caso de incidente inventado mas realista para o exercício",
      "Cerca de 60 minutos para as lições e as verificações, mais tempo para escrever e testar as orientações"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois apliquem os cinco princípios a uma ferramenta que o grupo conhece.",
      "Lembre aos líderes que o curso não é aconselhamento jurídico; convide o advogado do distrito ou o responsável pela privacidade para a sessão sobre as orientações.",
      "Faça o exercício de incidente como uma simulação à mesa, com papéis; use só casos inventados.",
      "Trate o tema dos deepfakes com cuidado; tenha orientadores escolares disponíveis e nunca mostre nem partilhe imagens de menores.",
      "Avalie a tarefa final com a grelha de avaliação e peça a cada equipa que indique uma falha que o seu exercício encontrou."
    ]
  }
};
