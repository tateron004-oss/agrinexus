"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-ai-healthcare-practices.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: HIPAA, HHS and 911 are kept as US names. Not legal or compliance advice, as in the English.

const HHS_CLOUD = { name: "HHS (Departamento de Saúde dos EUA): orientações sobre a HIPAA e a computação em nuvem", url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html" };
const HHS_BA = { name: "HHS: associados comerciais (orientações da HIPAA)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html" };
const HHS_HIPAA = { name: "HHS: HIPAA para profissionais", url: "https://www.hhs.gov/hipaa/for-professionals/index.html" };

module.exports = {
  id: "smallbiz-ai-healthcare-practices-pt",
  lang: "pt",
  translationOf: "smallbiz-ai-healthcare-practices",
  category: "Small Business",
  name: "IA para Consultórios e Clínicas de Saúde",
  skills: "Saber quando as informações dos doentes podem ou não ir para a IA, Escrever guiões para a receção, Redigir folhetos de educação para doentes para revisão clínica, Fazer modelos de marcação e de lembretes, Escrever políticas do consultório, Definir regras de IA para a equipa",
  outcome: "usar a IA com segurança no trabalho administrativo de um pequeno consultório de saúde: decidir que tarefas podem usar uma ferramenta de IA geral e quais precisam de uma ferramenta aprovada com um acordo de associado comercial (BAA), e produzir guiões para a receção, modelos de lembretes, um folheto em linguagem simples para revisão clínica e uma política de IA para a equipa, sem nenhuma informação de doentes em nenhuma ferramenta de IA geral.",
  about: [
    "Este curso é para donos, gestores e pessoal da receção de pequenos consultórios de saúde: clínicas de família, consultórios dentários, consultórios de terapia e aconselhamento, quiropráticos, fisioterapia, optometria e agências de cuidados de saúde ao domicílio, incluindo muitos consultórios de donos de minorias que servem as suas comunidades.",
    "Vai aprender a regra mais importante: as informações de saúde protegidas (PHI) não entram numa ferramenta de IA, a não ser que o seu consultório a tenha aprovado e tenha um acordo de associado comercial da HIPAA (BAA) com a empresa. Depois vai usar a IA nas muitas tarefas do consultório que não precisam de nenhuma informação de doentes.",
    "Neste curso, a IA não faz diagnósticos, não trata e não dá conselhos médicos. Todo o texto de saúde para doentes é revisto por um profissional de saúde licenciado. Este curso não é aconselhamento jurídico nem de conformidade; consulte as orientações do HHS e o seu consultor de conformidade. Cada lição dura cerca de cinco minutos, com uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Monte um kit de IA para o consultório: uma lista de tarefas dividida em \"sem PHI, IA geral OK\" e \"com PHI, só ferramenta aprovada com BAA ou sem IA\"; três guiões de telefone para a receção; modelos de confirmação e de lembrete de consultas com marcadores; um folheto em linguagem simples sobre um tema geral marcado \"para revisão clínica\"; e uma política de IA de uma página para a equipa. Nada disto tem informações verdadeiras de doentes.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos, gestores e pessoal da receção de pequenos consultórios de saúde: clínicas de família, consultórios dentários, consultórios de terapia e aconselhamento, quiropráticos, fisioterapia, optometria e agências de cuidados de saúde ao domicílio, incluindo muitos consultórios de donos de minorias que servem as suas comunidades.",
    startingPoint: "Tratam todos os dias da receção, das marcações e da papelada do consultório e conhecem o básico da privacidade dos doentes. Muitos já ouviram falar de ferramentas de IA ou já experimentaram uma, mas não sabem bem o que é permitido pela HIPAA.",
    gap: "Escrever para o consultório leva tempo que os pequenos consultórios não têm, mas colocar informações de doentes na ferramenta de IA errada pode violar as regras da HIPAA e prejudicar os doentes. Os alunos precisam de uma regra clara sobre que tarefas podem usar IA, e de guiões, modelos, folhetos e uma política para a equipa, já prontos, que deixem de fora as informações dos doentes.",
    constraints: [
      "Nenhuma PHI em nenhuma ferramenta de IA geral; só ferramentas aprovadas pelo consultório com um acordo de associado comercial",
      "A IA nunca faz diagnósticos, não trata nem dá conselhos médicos; um profissional de saúde licenciado revê todo o texto de saúde para doentes",
      "Não é aconselhamento jurídico nem de conformidade: consulte as orientações do HHS e o consultor de conformidade do consultório",
      "Tempo: as receções estão ocupadas, por isso cada lição dura cerca de 5 minutos",
      "Palavras simples para a equipa e para os materiais dos doentes (cerca do nível do 6.º ano)"
    ],
    prerequisites: "Nenhum. Quem é novo nos assistentes de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de tarefas do consultório", action: "dividir cada tarefa em \"sem PHI, IA geral OK\" ou \"com PHI, só ferramenta aprovada com BAA ou sem IA\"", standard: "pondo todas as tarefas com PHI na segunda coluna" },
    { id: "O2", condition: "Com chamadas comuns da receção", action: "escrever guiões de telefone que encaminham para o lugar certo os pedidos de receitas, as perguntas sobre sintomas e as emergências", standard: "com todos os guiões de emergência a dizer à pessoa para ligar para o 911, aprovados pelo responsável clínico" },
    { id: "O3", condition: "Usando marcadores em vez dos dados do doente", action: "criar modelos de confirmação e de lembrete que deixam de fora o motivo da consulta", standard: "sem nenhuma informação verdadeira de doentes na ferramenta de IA" },
    { id: "O4", condition: "Com um tema geral para doentes", action: "redigir um folheto em linguagem simples e marcá-lo para revisão clínica", standard: "com cerca do nível do 6.º ano, com a sua linha de contacto e uma nota sobre o 911" },
    { id: "O5", condition: "Com uma tarefa de escrita do consultório, como uma política, um email ou um anúncio de emprego", action: "redigi-la com uma ferramenta de IA geral e indicar as partes que precisam de verificação de conformidade ou de recursos humanos", standard: "sem usar nenhuma informação de doentes" },
    { id: "O6", condition: "Para o seu próprio consultório", action: "escrever uma política de IA de uma página para a equipa, com cinco a sete regras", standard: "incluindo nenhuma PHI sem BAA, as ferramentas aprovadas pelo nome, como comunicar erros e uma revisão anual" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Primeiro a HIPAA, depois a receção",
      lessons: [
        {
          objectives: ["O1"],
          title: "PHI, HIPAA e IA: a regra que vem primeiro",
          minutes: 6,
          goal: "Decidir se uma tarefa pode usar uma ferramenta de IA geral ou se precisa de uma ferramenta aprovada com BAA.",
          text: [
            "As informações de saúde protegidas (PHI) são informações de saúde que podem identificar um doente: nomes com doenças, datas de nascimento, notas do processo clínico, números de seguro, dados das consultas, fotografias e mais. A HIPAA define regras sobre como os consultórios as protegem.",
            "As orientações do HHS dizem que, quando uma entidade abrangida usa um serviço de fora, como um serviço na nuvem, para criar, receber, guardar ou enviar PHI, esse serviço é um associado comercial, e o consultório precisa de um acordo de associado comercial (BAA) com ele. Usar esse serviço para PHI sem um BAA viola as regras da HIPAA. A maioria das ferramentas de chat de IA gerais e gratuitas não assina BAA com utilizadores individuais.",
            "Por isso, divida cada tarefa: se precisa de PHI, use só uma ferramenta que o seu consultório aprovou e com a qual tem um BAA, ou não use IA. Se não precisa de PHI, como um folheto geral, um guião de telefone ou uma política do consultório, uma ferramenta de IA geral pode ajudar. Na dúvida, pergunte ao seu responsável de conformidade ou de privacidade."
          ],
          steps: ["Faça a lista das tarefas do consultório em que quer ajuda.", "Pergunte: esta tarefa precisa de alguma informação de doentes?", "Sem PHI: uma ferramenta de IA geral pode ajudar.", "Com PHI: só uma ferramenta aprovada com BAA, ou sem IA.", "Na dúvida: pergunte ao seu responsável de privacidade ou de conformidade."],
          words: [["PHI", "informações de saúde protegidas: informações de saúde que podem identificar um doente."], ["HIPAA", "a lei federal dos EUA com regras para proteger as informações de saúde."], ["Acordo de associado comercial (BAA)", "um contrato em que um fornecedor aceita proteger as PHI segundo a HIPAA."], ["Entidade abrangida", "um plano de saúde, uma câmara de compensação ou um prestador de cuidados que tem de cumprir a HIPAA."]],
          slides: [
            { title: "O que conta como PHI", bullets: ["Nomes com doenças, datas de nascimento", "Notas do processo clínico, números de seguro, consultas", "Fotografias e outros dados que identificam"] },
            { title: "O HHS sobre serviços de fora", bullets: ["Um serviço que trata PHI é um associado comercial", "O consultório precisa de um BAA com ele", "PHI sem BAA viola as regras da HIPAA"] },
            { title: "Divida cada tarefa", bullets: ["Sem PHI: a IA geral pode ajudar", "Com PHI: só ferramenta aprovada com BAA, ou sem IA", "Na dúvida: pergunte ao responsável de conformidade"] }
          ],
          sources: [HHS_CLOUD, HHS_BA, HHS_HIPAA],
          tryIt: "Faça a lista de dez tarefas do seu consultório. Divida-as em duas colunas: \"Sem PHI: IA geral OK\" e \"Com PHI: só ferramenta aprovada com BAA ou sem IA\".",
          youCanNow: "decidir se uma tarefa do consultório pode usar uma ferramenta de IA geral ou se precisa de uma ferramenta aprovada com BAA.",
          quickCheck: [
            { objective: "O1", q: "Qual destes é PHI?", options: ["O número do seguro de um doente", "O horário de abertura do consultório", "Um anúncio de emprego para rececionista", "Um folheto geral sobre lavar as mãos"], answer: 0, why: "O número do seguro é uma informação de saúde que pode identificar um doente." },
            { objective: "O1", q: "Quer que a IA ajude a escrever um guião de telefone sobre o estacionamento. Que ferramenta pode usar?", options: ["Só uma ferramenta com BAA", "Uma ferramenta de IA geral, porque não precisa de PHI", "Nenhuma ferramenta de IA", "Só o telefone do próprio doente"], answer: 1, why: "As tarefas que não precisam de informações de doentes podem usar uma ferramenta de IA geral." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Guiões de telefone e de mensagens para a receção",
          minutes: 5,
          goal: "Escrever guiões claros e simpáticos para as chamadas comuns da receção.",
          text: [
            "O pessoal da receção atende as mesmas chamadas todos os dias: perguntas de doentes novos, que seguros são aceites, direções e estacionamento, remarcações, pedidos de renovação de receitas, pedidos de processos clínicos e alguém que parece estar numa emergência.",
            "Estes guiões não precisam de informações de doentes, por isso uma ferramenta de IA geral pode ajudar: \"Escreva um guião de telefone curto e caloroso para um consultório dentário de família, para um doente novo que pergunta se aceitamos o seu seguro. A nossa política: [a sua política]. Menos de 80 palavras.\"",
            "Todo o guião que toca nos cuidados de saúde tem de encaminhar para a pessoa certa: as perguntas sobre receitas e sintomas vão para o pessoal clínico, e qualquer guião de emergência diz à pessoa para desligar e ligar para o 911 ou ir às urgências mais próximas. Peça ao seu responsável clínico para aprovar estes guiões."
          ],
          steps: ["Faça a lista das suas dez chamadas mais comuns.", "Peça à IA um guião curto para cada uma, com as suas políticas verdadeiras.", "Garanta que as perguntas clínicas vão para o pessoal clínico.", "Acrescente uma linha de emergência: ligue para o 911.", "Peça ao seu responsável clínico para os aprovar."],
          words: [["Guião", "um pequeno guia do que dizer numa chamada comum."], ["Triagem", "decidir quão urgente é um problema de saúde; é feita pelo pessoal clínico, não pela receção nem pela IA."]],
          slides: [
            { title: "Chamadas comuns", bullets: ["Doentes novos e seguros", "Direções, remarcações, processos clínicos", "Receitas e possíveis emergências"] },
            { title: "Não precisa de PHI", bullets: ["A IA geral pode redigir estes guiões", "Dê-lhe as suas políticas verdadeiras", "Cada um com menos de cerca de 80 palavras"] },
            { title: "Encaminhe as perguntas de saúde", bullets: ["Receitas e sintomas -> pessoal clínico", "Emergências -> ligar para o 911 ou ir às urgências", "O responsável clínico aprova os guiões"] }
          ],
          tryIt: "Peça à IA três guiões para a receção: uma pergunta sobre o seguro, uma remarcação e uma pessoa que descreve dor no peito (que tem de ser mandada ligar para o 911). Marque-os para o seu responsável clínico aprovar.",
          youCanNow: "escrever guiões para a receção que são simpáticos e claros e que encaminham as perguntas de saúde com segurança.",
          quickCheck: [
            { objective: "O2", q: "Para onde deve um guião da receção mandar um pedido de renovação de receita?", options: ["Para a ferramenta de IA", "Para a faturação", "Para o pessoal clínico", "Só para a farmácia da pessoa"], answer: 2, why: "As perguntas sobre receitas e sintomas vão para o pessoal clínico." },
            { objective: "O2", q: "A IA escreve um guião para uma pessoa com dificuldade em respirar que diz \"Ligamos-lhe amanhã.\" O que faz?", options: ["Usa-o; é educado", "Torna-o mais curto", "Tradu-lo", "Muda-o para dizer à pessoa para desligar e ligar para o 911 ou ir às urgências mais próximas"], answer: 3, why: "Todo o guião de emergência diz à pessoa para ligar para o 911 ou ir às urgências mais próximas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Modelos de marcação e de lembretes",
          minutes: 5,
          goal: "Fazer modelos de confirmação e de lembrete de consultas que protegem a privacidade.",
          text: [
            "Os modelos poupam tempo e reduzem as faltas. Escreva-os com marcadores: \"Olá [nome próprio], fala [nome do consultório] para confirmar a sua consulta no dia [data] às [hora]. Responda C para confirmar ou ligue para [telefone] para remarcar.\"",
            "Faça lembretes com o mínimo de dados. Deixe de fora o motivo da consulta e o tipo de profissional quando isso revelaria informações sensíveis, como numa consulta de terapia ou de uma especialidade. É o seu sistema de gestão do consultório ou de mensagens para doentes que preenche os dados verdadeiros, não a ferramenta de IA.",
            "Peça à IA versões noutras línguas que os seus doentes falam e depois peça a alguém da equipa que fale bem a língua, ou a um tradutor qualificado, para as verificar."
          ],
          steps: ["Peça à IA modelos de confirmação, de lembrete e de remarcação com marcadores.", "Tire tudo o que revela o motivo da consulta.", "Coloque-os no seu sistema de marcações, que preenche os dados.", "Peça a uma pessoa fluente ou qualificada para verificar as traduções."],
          words: [["Sistema de gestão do consultório", "o programa que um consultório usa para as marcações e a faturação."], ["Mínimo necessário", "a ideia da HIPAA de usar ou partilhar só as informações precisas para o objetivo."]],
          slides: [
            { title: "Modelos com marcadores", bullets: ["[nome próprio], [data], [hora], [telefone]", "A ferramenta de IA nunca vê os dados verdadeiros"] },
            { title: "Lembretes com o mínimo", bullets: ["Deixe de fora o motivo da consulta", "Cuidado com especialidades sensíveis", "O seu sistema de marcações preenche os dados"] },
            { title: "Outras línguas", bullets: ["A IA redige as traduções", "Uma pessoa fluente ou qualificada verifica-as"] }
          ],
          tryIt: "Peça à IA um modelo de confirmação, um de lembrete para a véspera e um de remarcação, com marcadores. Tire tudo o que revela porque o doente vem.",
          youCanNow: "criar modelos de consultas que protegem a privacidade, com a ajuda da IA.",
          quickCheck: [
            { objective: "O3", q: "O que preenche os dados verdadeiros do doente num lembrete?", options: ["O seu sistema de gestão do consultório ou de mensagens", "A ferramenta de IA geral", "A seguradora do doente", "Um calendário impresso"], answer: 0, why: "É o seu sistema de marcações ou de mensagens que preenche os dados verdadeiros, não a ferramenta de IA." },
            { objective: "O3", q: "Um modelo de lembrete diz \"a sua consulta de terapia\". O que muda?", options: ["Nada", "Tira a palavra \"terapia\" para não revelar informações sensíveis", "Acrescenta o diagnóstico", "Acrescenta o telefone de casa do terapeuta"], answer: 1, why: "Deixe de fora o motivo da consulta ou o tipo de profissional quando isso revelaria informações sensíveis." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Primeiro a HIPAA, depois a receção",
        questions: [
          { objective: "O1", q: "Qual destes é uma informação de saúde protegida (PHI)?", options: ["As direções para o estacionamento do consultório", "O nome de um doente com o seu diagnóstico", "Um folheto geral sobre lavar as mãos", "O horário do consultório"], answer: 1, why: "As informações de saúde que identificam um doente são PHI." },
          { objective: "O1", q: "Segundo o HHS, um serviço que guarda PHI para o seu consultório precisa de:", options: ["A palavra-passe de um doente", "Nada", "Uma conta numa rede social", "Um acordo de associado comercial"], answer: 3, why: "Os serviços que tratam PHI são associados comerciais e precisam de um BAA." },
          { objective: "O1", q: "Quer que a IA resuma as notas do processo clínico de um doente. O seu consultório não tem BAA com a ferramenta. O que faz?", options: ["Não usa essa ferramenta para isso", "Cola as notas", "Tira só o apelido e cola", "Pergunta a um amigo"], answer: 0, why: "As PHI só vão para ferramentas aprovadas com BAA." },
          { objective: "O2", q: "Uma pessoa descreve dor no peito ao telefone. O guião deve:", options: ["Pedir um diagnóstico à IA", "Marcar uma consulta para a próxima semana", "Dizer-lhe para ligar para o 911 ou ir às urgências mais próximas", "Pô-la em espera"], answer: 2, why: "As emergências vão para o 911." },
          { objective: "O3", q: "O que deve um lembrete por SMS deixar de fora?", options: ["A hora", "A data", "O motivo da consulta", "O telefone do consultório"], answer: 2, why: "Lembretes com o mínimo de dados protegem a privacidade." }
        ]
      }
    },
    {
      name: "Capítulo 2: Materiais para doentes, trabalho do consultório e regras da equipa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Folhetos para doentes em linguagem simples, revistos por um clínico",
          minutes: 5,
          goal: "Redigir um folheto geral para doentes com palavras simples e enviá-lo para revisão clínica.",
          text: [
            "Muitos doentes têm dificuldade com a linguagem médica. A IA é boa a reescrever informações gerais com palavras simples: como se preparar para uma limpeza dentária, o que levar à primeira consulta, dicas gerais para se manter ativo.",
            "Use só temas gerais, nunca os dados de um doente concreto. Peça: \"Escreva um folheto de uma página, com cerca do nível do 6.º ano, sobre como se preparar para a primeira consulta de fisioterapia. Frases curtas, títulos, nenhum conselho médico além da preparação geral.\"",
            "A IA pode errar em factos de saúde. Marque cada rascunho \"Para revisão clínica\" e peça a um profissional de saúde licenciado para o verificar e aprovar antes de qualquer doente o ver. Acrescente a linha de contacto do seu consultório e uma nota para ligar para o 911 numa emergência."
          ],
          steps: ["Escolha um tema geral sobre o qual os doentes perguntam.", "Peça à IA um rascunho em linguagem simples, com títulos.", "Marque-o \"Para revisão clínica\".", "Um profissional de saúde licenciado corrige-o e aprova-o.", "Acrescente a sua linha de contacto e a nota sobre o 911."],
          words: [["Linguagem simples", "uma escrita que a maioria das pessoas entende à primeira leitura."], ["Nível de leitura", "quão difícil é ler um texto, muitas vezes indicado por um ano de escolaridade."]],
          slides: [
            { title: "Palavras simples ajudam os doentes", bullets: ["Preparar-se para uma consulta", "O que levar", "Hábitos saudáveis gerais"] },
            { title: "Só temas gerais", bullets: ["Nunca os dados de um doente concreto", "Peça cerca do nível do 6.º ano"] },
            { title: "Revisão clínica", bullets: ["Marque os rascunhos \"Para revisão clínica\"", "Um profissional de saúde licenciado aprova", "Acrescente a linha de contacto e a nota sobre o 911"] }
          ],
          tryIt: "Peça à IA um folheto de uma página sobre um tema geral para o seu consultório. Marque-o \"Para revisão clínica\" e escreva dois factos que o clínico deve verificar.",
          youCanNow: "redigir folhetos para doentes em linguagem simples com a IA e enviá-los para aprovação clínica.",
          quickCheck: [
            { objective: "O4", q: "Que tema serve para um rascunho de folheto geral feito com IA?", options: ["Os resultados das análises do Sr. Lee", "As mudanças na medicação de um doente", "O que levar à primeira consulta", "Um diagnóstico para quem liga"], answer: 2, why: "Use só temas gerais, nunca os dados de um doente concreto." },
            { objective: "O4", q: "O rascunho do folheto feito pela IA parece bom. O que faz antes de um doente o ver?", options: ["Imprime-o logo", "Publica-o no site", "Pergunta à IA se está certo", "Marca-o \"Para revisão clínica\" e pede a um profissional de saúde licenciado para o aprovar"], answer: 3, why: "A IA pode errar em factos de saúde, por isso um profissional de saúde licenciado verifica cada rascunho." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Políticas do consultório, emails e anúncios de emprego",
          minutes: 4,
          goal: "Usar a IA em documentos do consultório que não precisam de informações de doentes.",
          text: [
            "Grande parte de gerir um consultório é escrita normal de negócio: uma política de cancelamentos e faltas, um email para a equipa sobre um novo sistema de telefone, um anúncio de emprego para um assistente médico, uma carta de reclamação a um fornecedor, uma lista de verificação para novos funcionários.",
            "Estes documentos não precisam de PHI, por isso as ferramentas de IA gerais podem redigi-los. Dê as suas políticas e os seus dados verdadeiros: \"Redija uma política de faltas simpática para um consultório de aconselhamento: aviso com 24 horas de antecedência, taxa de $50 depois da segunda falta. Palavras simples.\"",
            "Verifique qualquer regra que toque na lei: as taxas, o emprego, a faturação e os direitos dos doentes podem ter regras próprias. Peça ao seu consultor de conformidade, ao consultor de recursos humanos ou a um advogado para verificar antes de publicar."
          ],
          steps: ["Escolha um documento do consultório sem informações de doentes.", "Dê à IA os dados verdadeiros da sua política.", "Edite para soar como você.", "Peça a um consultor de conformidade, de recursos humanos ou jurídico para verificar tudo o que tem regras próprias."],
          words: [["Política de faltas", "as regras do consultório para as consultas a que o doente falta."], ["Consultor de conformidade", "uma pessoa que ajuda um consultório a cumprir as leis e regras da saúde."]],
          slides: [
            { title: "Escrita normal de negócio", bullets: ["Política de cancelamentos e faltas", "Emails para a equipa e anúncios de emprego", "Cartas a fornecedores e listas de verificação"] },
            { title: "Sem PHI: a IA geral pode ajudar", bullets: ["Dê os seus dados verdadeiros", "Edite para soar como você"] },
            { title: "Verifique os temas com regras", bullets: ["Taxas, emprego, faturação, direitos dos doentes", "Revisão de conformidade, de recursos humanos ou jurídica"] }
          ],
          tryIt: "Peça à IA para redigir a política de faltas do seu consultório ou um anúncio de emprego para a receção. Anote o que precisa de verificação de conformidade ou de recursos humanos.",
          youCanNow: "usar a IA em documentos do consultório sem informações de doentes, com as verificações certas.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é escrita normal de negócio que não precisa de PHI?", options: ["Uma lista de verificação para novos funcionários", "Uma nota do processo clínico de um doente", "Uma carta com os resultados de análises para um doente", "Um encaminhamento com um diagnóstico"], answer: 0, why: "As políticas, os emails, os anúncios de emprego e as listas de verificação não precisam de informações de doentes." },
            { objective: "O5", q: "A IA redige uma política de faltas com uma taxa. O que faz antes de a publicar?", options: ["Publica-a logo", "Pede a um consultor de conformidade, de recursos humanos ou a um advogado para a verificar", "Duplica a taxa", "Tira a data"], answer: 1, why: "As taxas e os direitos dos doentes podem ter regras próprias, por isso um consultor verifica-os primeiro." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever a política de IA do seu consultório",
          minutes: 5,
          goal: "Escrever uma política de IA de uma página para a equipa e terminar o kit de IA do consultório.",
          text: [
            "A equipa pode já estar a usar IA nos telefones. Uma política curta e escrita protege os doentes e o consultório. Cinco a sete regras chegam para começar.",
            "Exemplos de regras: (1) Nenhuma PHI em nenhuma ferramenta de IA, a não ser que o consultório a tenha aprovado e tenha um BAA. (2) As ferramentas aprovadas estão escritas pelo nome. (3) A IA nunca dá diagnósticos nem conselhos de tratamento aos doentes. (4) Um profissional de saúde licenciado aprova todo o conteúdo de saúde para doentes. (5) A equipa verifica os factos nos rascunhos da IA. (6) Qualquer PHI colocada por engano é comunicada logo ao responsável de privacidade. (7) A política é revista todos os anos.",
            "Use a IA para melhorar a redação; depois peça ao seu responsável de privacidade ou de conformidade para a aprovar, forme a equipa e guarde uma cópia assinada."
          ],
          steps: ["Redija cinco a sete regras.", "Escreva as ferramentas aprovadas pelo nome.", "Acrescente como comunicar um erro.", "Peça à IA para melhorar a redação.", "Obtenha a aprovação de conformidade, forme a equipa e guarde cópias assinadas."],
          words: [["Responsável de privacidade", "a pessoa do consultório responsável pela privacidade segundo a HIPAA."], ["Ferramenta aprovada", "uma ferramenta que o consultório analisou e permitiu, com BAA se tratar PHI."]],
          slides: [
            { title: "Porquê uma política", bullets: ["A equipa pode já usar IA", "Protege os doentes e o consultório"] },
            { title: "Regras principais", bullets: ["Nenhuma PHI sem uma ferramenta aprovada com BAA", "A IA não dá diagnósticos nem conselhos de tratamento", "Um clínico aprova o conteúdo de saúde para doentes"] },
            { title: "Pôr em prática", bullets: ["Comunique logo qualquer PHI colocada por engano", "A conformidade aprova; forme a equipa", "Reveja todos os anos"] }
          ],
          sources: [HHS_BA],
          tryIt: "Tarefa final: escreva a política de IA de uma página para a sua equipa e monte o kit de IA do consultório: lista de tarefas dividida, três guiões, modelos de lembrete, um folheto marcado para revisão clínica e a política. Verifique que não aparece nenhuma informação verdadeira de doentes em lado nenhum.",
          youCanNow: "liderar o uso seguro da IA num consultório de saúde, com regras claras e ferramentas úteis e sem PHI.",
          quickCheck: [
            { objective: "O6", q: "Quantas regras a lição sugere para uma primeira política de IA?", options: ["Uma", "Cinquenta", "Cinco a sete", "Nenhuma; basta dizer à equipa de viva voz"], answer: 2, why: "Cinco a sete regras chegam para começar." },
            { objective: "O6", q: "O rascunho da sua política de IA está pronto. Quais são os passos seguintes?", options: ["Guardá-lo numa gaveta", "Publicá-lo na internet para os doentes", "Deixar cada pessoa da equipa mudá-lo", "Pedir ao responsável de privacidade ou de conformidade para o aprovar, formar a equipa e guardar uma cópia assinada"], answer: 3, why: "O responsável aprova-o, a equipa é formada e você guarda uma cópia assinada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Materiais para doentes, trabalho do consultório e regras da equipa",
        questions: [
          { objective: "O4", q: "Quem aprova um folheto para doentes redigido pela IA?", options: ["Um profissional de saúde licenciado", "A IA", "Só a receção", "Um doente"], answer: 0, why: "Os clínicos verificam os factos de saúde." },
          { objective: "O4", q: "Que tema serve para um rascunho de folheto geral feito com IA?", options: ["Uma nota do processo clínico", "Os resultados das análises do Sr. Lee", "A lista de medicamentos de um doente", "Como se preparar para a primeira consulta"], answer: 3, why: "Os temas gerais não têm PHI." },
          { objective: "O5", q: "Que tarefa do consultório pode usar uma ferramenta de IA geral?", options: ["Resumir as notas da consulta de um doente", "Um anúncio de emprego para um assistente médico", "Escrever uma carta que inclui o diagnóstico de um doente", "Codificar a fatura do seguro de um doente concreto"], answer: 1, why: "Não tem nenhuma informação de doentes." },
          { objective: "O6", q: "Uma pessoa da equipa colou por engano o nome e a doença de um doente numa ferramenta de IA gratuita. O que deve a política mandar fazer?", options: ["Comunicar logo ao responsável de privacidade", "Escondê-lo", "Apagar o computador", "Não fazer nada"], answer: 0, why: "Comunicar depressa deixa o consultório responder da forma certa." },
          { objective: "O6", q: "Qual é uma boa regra de uma política de IA?", options: ["As PHI podem ir para qualquer lado", "Qualquer ferramenta serve", "A IA nunca dá diagnósticos nem conselhos de tratamento aos doentes", "Ninguém revê o conteúdo da IA"], answer: 2, why: "As decisões sobre os cuidados ficam com os profissionais de saúde licenciados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Consultórios e Clínicas de Saúde",
    questions: [
      { objective: "O1", q: "PHI quer dizer:", options: ["Seguro de saúde público", "Informações de saúde protegidas", "Inspeção privada da casa", "Índice de saúde primário"], answer: 1, why: "São informações de saúde que identificam um doente." },
      { objective: "O1", q: "Qual destes é PHI?", options: ["Um cartaz geral sobre a época da gripe", "O horário do consultório", "As direções para o estacionamento", "Uma data de nascimento com o tipo de consulta"], answer: 3, why: "Dados que identificam, junto com informações de saúde, são PHI." },
      { objective: "O1", q: "Um BAA é:", options: ["Um formulário para doentes", "Um código de faturação", "Um cartão de seguro", "Um contrato em que um fornecedor aceita proteger as PHI"], answer: 3, why: "Os acordos de associado comercial cobrem o tratamento das PHI." },
      { objective: "O1", q: "A maioria das ferramentas de chat de IA gerais e gratuitas:", options: ["São sempre aprovadas para a HIPAA", "Não assina BAA com utilizadores individuais", "São geridas pelo HHS", "Apagam tudo na hora"], answer: 1, why: "Não pense que uma ferramenta geral está aprovada para PHI." },
      { objective: "O1", q: "Na dúvida sobre se uma tarefa pode usar IA, pergunte a:", options: ["Um doente", "A ferramenta de IA", "O seu responsável de privacidade ou de conformidade", "Um grupo numa rede social"], answer: 2, why: "São eles que decidem o que está aprovado." },
      { objective: "O1", q: "Onde a equipa pode encontrar as orientações oficiais da HIPAA?", options: ["hhs.gov", "Um blogue qualquer", "Uma aplicação de chat", "Um comentário numa notícia"], answer: 0, why: "O HHS publica as orientações da HIPAA." },
      { objective: "O2", q: "As perguntas sobre receitas e sintomas ao telefone vão para:", options: ["O correio de voz para sempre", "A IA", "O pessoal clínico", "A faturação"], answer: 2, why: "As perguntas clínicas precisam do pessoal clínico." },
      { objective: "O2", q: "Quem aprova os guiões da receção que tocam nos cuidados de saúde?", options: ["O responsável clínico", "A pessoa contratada mais recentemente", "A IA", "Um fornecedor"], answer: 0, why: "A aprovação clínica mantém os guiões seguros." },
      { objective: "O2", q: "A triagem é feita por:", options: ["A IA", "O pessoal clínico", "Só a receção", "Os amigos dos doentes"], answer: 1, why: "Decidir a urgência é trabalho clínico." },
      { objective: "O3", q: "Qual é um bom modelo de lembrete?", options: ["O número do seguro do doente", "\"Olá Joana, confirmamos o seu seguimento do VIH\"", "Uma nota do processo clínico", "\"Olá [nome próprio], confirmamos a sua consulta no dia [data] às [hora].\""], answer: 3, why: "Tem marcadores e não tem o motivo da consulta." },
      { objective: "O3", q: "Quem preenche os dados verdadeiros dos doentes nos lembretes?", options: ["O seu sistema de marcações ou de mensagens", "A ferramenta de IA geral", "O telefone de um voluntário", "As redes sociais"], answer: 0, why: "Os dados verdadeiros ficam nos sistemas aprovados." },
      { objective: "O3", q: "Os lembretes traduzidos pela IA devem ser verificados por:", options: ["Um doente", "Ninguém", "A IA outra vez", "Alguém da equipa fluente na língua ou um tradutor qualificado"], answer: 3, why: "As traduções podem ter erros." },
      { objective: "O4", q: "Um bom nível de leitura para folhetos gerais para doentes é cerca de:", options: ["Faculdade de medicina", "Licenciatura", "6.º ano", "Nenhuma palavra"], answer: 2, why: "A linguagem simples ajuda mais doentes a entender." },
      { objective: "O4", q: "Cada rascunho de folheto feito pela IA é marcado:", options: ["\"Final\"", "\"Para revisão clínica\"", "\"Secreto\"", "\"Aprovado pela IA\""], answer: 1, why: "Os clínicos têm de aprovar o conteúdo de saúde." },
      { objective: "O4", q: "Os folhetos para doentes devem incluir:", options: ["Mais nada", "Histórias de outros doentes com nomes", "Um diagnóstico para cada leitor", "A sua linha de contacto e uma nota sobre o 911 para emergências"], answer: 3, why: "Os doentes precisam de saber como pedir ajuda." },
      { objective: "O5", q: "Que documento precisa de verificação de conformidade ou de recursos humanos?", options: ["Um aviso com o horário dos feriados", "Uma nota de agradecimento à equipa por uma festa", "Uma política com taxa por faltas", "Um mapa do estacionamento"], answer: 2, why: "As taxas e os direitos dos doentes podem ter regras próprias." },
      { objective: "O5", q: "Um email para a equipa sobre um novo sistema de telefone:", options: ["Não precisa de PHI, por isso a IA geral pode ajudar", "Tem de incluir nomes de doentes", "Precisa de um BAA", "Não pode ser escrito"], answer: 0, why: "Não envolve nenhuma informação de doentes." },
      { objective: "O6", q: "Uma política de IA deve indicar:", options: ["Os nomes dos doentes", "As ferramentas aprovadas pelo nome", "As palavras-passe da equipa", "Nada em concreto"], answer: 1, why: "A equipa precisa de saber que ferramentas são permitidas." },
      { objective: "O6", q: "Com que frequência deve a política de IA ser revista?", options: ["Nunca", "Pelo menos todos os anos", "De dez em dez anos", "Só depois de uma multa"], answer: 1, why: "As ferramentas e as regras mudam." },
      { objective: "O6", q: "Neste curso, a IA é usada para:", options: ["Trabalho administrativo e rascunhos, nunca diagnósticos", "Diagnosticar doentes", "Receitar medicamentos", "Substituir os clínicos"], answer: 0, why: "As decisões sobre os cuidados ficam com os profissionais de saúde licenciados." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 7, 9, 13, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Lista de tarefas dividida", objective: "O1", notYet: "Uma tarefa que precisa de PHI está na coluna \"IA geral OK\".", meets: "Dez tarefas divididas corretamente nas duas colunas.", exceeds: "Indica que ferramenta aprovada com BAA, se houver, o consultório usa para as tarefas com PHI." },
      { name: "Guiões seguros para a receção", objective: "O2", notYet: "Um guião dá conselhos médicos ou não encaminha uma emergência para o 911.", meets: "Três guiões que encaminham as perguntas de saúde para o pessoal clínico e as emergências para o 911.", exceeds: "Marcados para aprovação do responsável clínico, com uma nota de quem os aprovou." },
      { name: "Modelos de lembrete privados", objective: "O3", notYet: "Um modelo tem dados verdadeiros de doentes ou revela o motivo da consulta.", meets: "Modelos de confirmação e de lembrete com marcadores e sem o motivo da consulta.", exceeds: "Tem também um modelo de remarcação e uma versão traduzida verificada por uma pessoa fluente." },
      { name: "Folheto para revisão", objective: "O4", notYet: "O folheto é sobre um doente concreto ou não está marcado para revisão.", meets: "Tema geral, palavras simples, marcado \"Para revisão clínica\", com linha de contacto e nota sobre o 911.", exceeds: "Indica os factos que o clínico deve verificar." },
      { name: "Política de IA para a equipa", objective: "O6", notYet: "Falta à política a regra de nenhuma PHI ou como comunicar um erro.", meets: "Cinco a sete regras, incluindo nenhuma PHI sem BAA, ferramentas aprovadas, comunicação de erros e revisão anual.", exceeds: "Aprovada pelo responsável de privacidade ou de conformidade, com um plano de formação da equipa." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Consultórios que adotam uma política de IA escrita para a equipa em 30 dias (inquérito de seguimento)",
      "Consultórios que dizem não ter colocado PHI em ferramentas de IA gerais depois da formação",
      "Alunos que começam outro curso de pequenos negócios da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou telefone com internet",
      "Um assistente de IA geral e gratuito, usado só em tarefas sem PHI",
      "As políticas atuais do seu consultório e os tipos de chamadas comuns, ou exemplos",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Use só informações inventadas ou de exemplo na aula; nunca escreva os dados de um doente verdadeiro numa ferramenta de IA.",
      "Convide o responsável de privacidade ou de conformidade do consultório para a sessão sobre a política de IA da equipa.",
      "Peça a um profissional de saúde licenciado para rever os folhetos e os guiões sobre cuidados antes de serem usados.",
      "Lembre aos alunos que este curso não é aconselhamento jurídico nem de conformidade e que remete para as orientações do HHS e para o seu consultor.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
