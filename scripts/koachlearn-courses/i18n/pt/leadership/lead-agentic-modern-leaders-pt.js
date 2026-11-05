"use strict";

// Koach Learn course (Portuguese translation of leadership/lead-agentic-modern-leaders.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "lead-agentic-modern-leaders-pt",
  lang: "pt",
  translationOf: "lead-agentic-modern-leaders",
  category: "Leadership Development",
  name: "Liderança na Era da IA Agêntica 2: IA para Líderes Modernos e Ferramentas de IA para Líderes",
  skills: "Transformar notas de reunião em listas de ações, Redigir memorandos de decisão com opções e riscos, Escrever comunicações claras para a equipa, Preparar conversas difíceis, Escolher ferramentas aprovadas, Escrever um guia de uma página sobre o uso de IA na equipa",
  outcome: "usar ferramentas de IA no seu próprio trabalho de líder, transformando notas de reunião em listas de ações, redigindo um memorando de decisão com opções e riscos e preparando mensagens para a equipa, e escrever um guia de uma página sobre o uso de IA que a sua equipa possa seguir.",
  about: [
    "Este curso é para gestores, supervisores, chefes de equipa e donos de pequenas empresas e de organizações sem fins lucrativos que terminaram o curso 1 ou que já entendem o básico da IA. É sobre o seu próprio trabalho de líder: reuniões, decisões, comunicação e pessoas.",
    "O Capítulo 1 constrói três formas de trabalhar com IA que pode repetir todas as semanas: das notas de reunião à lista de ações, o memorando de decisão e as comunicações para a equipa. O Capítulo 2 trata das partes mais difíceis: usar a IA para preparar conversas com pessoas sem as entregar a ela, escolher bem as ferramentas e escrever um guia simples sobre o uso de IA para a sua equipa.",
    "Pode usar qualquer assistente conhecido: ChatGPT, Microsoft Copilot, Google Gemini ou Claude. Se a sua organização aprovou uma ferramenta, use essa. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Monte o seu kit de IA de líder: guarde três pedidos testados e reutilizáveis (das notas de reunião à lista de ações, memorando de decisão com opções e riscos, mensagem de atualização para a equipa), cada um usado uma vez em trabalho real, sem detalhes privados; e escreva um guia de uma página sobre o uso de IA para a sua equipa que diga que ferramentas estão aprovadas, o que nunca se coloca nelas, o que uma pessoa tem de verificar e a quem perguntar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Gestores, supervisores, chefes de equipa e donos de pequenas empresas e de organizações sem fins lucrativos que terminaram o curso 1 ou que já entendem o básico da IA.",
    startingPoint: "Sabem explicar o que é a IA generativa e a IA agêntica e nomear os principais riscos para a sua equipa. Usam IA de vez em quando, mas não em formas de trabalhar repetíveis para reuniões, decisões, comunicação e trabalho com pessoas.",
    gap: "Os líderes passam grande parte da semana com notas, decisões e mensagens. Pedidos testados e reutilizáveis poupam tempo, mas só se os líderes mantiverem o juízo, as conversas com pessoas e os dados pessoais em mãos humanas, e derem à equipa um guia claro para seguir.",
    constraints: [
      "Nível de leitura: palavras simples, sem exigir conhecimentos técnicos",
      "Aparelhos: um telefone ou computador com um assistente de IA; use a ferramenta aprovada pela sua organização",
      "Privacidade: tire os detalhes pessoais e confidenciais antes de colar qualquer coisa na IA",
      "As regras de recursos humanos, as leis e as políticas da organização aplicam-se às decisões sobre pessoas e às mensagens sensíveis",
      "Tempo: lições curtas com uma tarefa feita com trabalho real"
    ],
    prerequisites: "\"Liderança na Era da IA Agêntica 1: Compreender a IA\", ou um entendimento básico da IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com notas soltas de uma reunião real, sem detalhes pessoais", action: "usar um pedido reutilizável para transformar as notas em decisões, ações com responsável e data, e perguntas em aberto", standard: "verificando se a lista tem algo inventado ou em falta" },
    { id: "O2", condition: "Com uma decisão real que tem de tomar", action: "redigir um memorando de decisão com opções, riscos e perguntas de seguimento, e depois escrever você mesmo a recomendação", standard: "sem nunca dar \"a IA recomendou\" como razão" },
    { id: "O3", condition: "Com três tópicos para uma atualização à equipa", action: "redigir e ajustar uma mensagem para a equipa quanto ao tom, ao tamanho e ao público", standard: "lendo-a em voz alta antes de a enviar" },
    { id: "O4", condition: "Antes de uma conversa difícil com uma pessoa", action: "preparar com a IA uma frase de abertura e perguntas usando só uma descrição geral", standard: "sem nomes nem detalhes privados, e mantendo a conversa e a decisão consigo" },
    { id: "O5", condition: "Com uma ferramenta de IA que a sua equipa usa ou quer usar", action: "avaliá-la quanto aos dados, ao acesso e às condições do plano usando as páginas do próprio fornecedor", standard: "terminando com um veredicto de uma linha: aprovar, aprovar com limites ou ainda não" },
    { id: "O6", condition: "Para a sua equipa", action: "escrever um guia de uma página sobre o uso de IA e guardar os seus pedidos testados num só lugar", standard: "cobrindo as ferramentas aprovadas, o que nunca se coloca, o que verificar, a divulgação e a quem perguntar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Três formas de trabalhar com IA para líderes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Das notas de reunião à lista de ações",
          minutes: 5,
          goal: "Transformar notas soltas de reunião numa lista de ações clara, com responsáveis e datas.",
          text: [
            "As reuniões acabam mais vezes numa memória vaga do que em ações claras. A IA é boa a dar estrutura a notas soltas. Cole as suas notas (sem detalhes pessoais ou confidenciais) e peça uma lista de decisões, de ações com um responsável e uma data limite, e de perguntas em aberto.",
            "Um pedido reutilizável: \"A partir destas notas de reunião, faça a lista de: 1) decisões tomadas, 2) ações numa tabela com tarefa, responsável, data limite, 3) perguntas em aberto. Se faltar um responsável ou uma data, escreva EM FALTA. Não acrescente nada que não esteja nas notas.\" A última frase é importante: impede a ferramenta de inventar tarefas.",
            "Muitas aplicações de reuniões já oferecem notas ou resumos feitos por IA. Antes de as ligar, veja a política da sua organização e avise os participantes, porque gravar e transcrever pessoas levanta questões de consentimento e de privacidade."
          ],
          steps: ["Tire das notas os detalhes pessoais ou confidenciais.", "Cole as notas com o pedido reutilizável.", "Compare cada ação com a sua memória e com as notas.", "Preencha o que estiver marcado EM FALTA.", "Envie a lista aos participantes no mesmo dia."],
          words: [["Ação (ponto de ação)", "uma tarefa combinada numa reunião, com um responsável e uma data limite."], ["Pedido reutilizável", "um pedido (prompt) que você guarda e volta a usar para o mesmo tipo de tarefa."]],
          slides: [
            { title: "Das notas às ações", bullets: ["Decisões tomadas", "Ações: tarefa, responsável, data limite", "Perguntas em aberto"] },
            { title: "Impeça tarefas inventadas", bullets: ["\"Se faltar, escreva EM FALTA\"", "\"Não acrescente nada que não esteja nas notas\""] },
            { title: "Gravadores de reuniões com IA", bullets: ["Veja primeiro a política da sua organização", "Avise os participantes antes de gravar"] }
          ],
          tryIt: "Pegue nas notas de uma reunião recente, tire os detalhes pessoais, use o pedido reutilizável e verifique o resultado. Conte o que ficou errado ou foi inventado.",
          youCanNow: "transformar notas de reunião numa lista de ações verificada, com responsáveis e datas.",
          quickCheck: [
            { objective: "O1", q: "O que um bom pedido de notas de reunião deve pedir à IA?", options: ["Quem falou mais", "Decisões, ações com responsáveis e datas, e perguntas em aberto", "Um resumo de cada frase", "Ideias de lanche para a próxima reunião"], answer: 1, why: "Decisões, ações com responsável e perguntas em aberto são o que a equipa precisa depois de uma reunião." },
            { objective: "O1", q: "A lista de ações tem uma tarefa que ninguém mencionou na reunião. O que faz?", options: ["Fica com ela, porque é uma boa ideia", "Atribui-a a si mesmo sem dizer nada", "Tira-a e acrescenta ao pedido \"Não acrescente nada que não esteja nas notas\"", "Pede à IA para explicar porquê"], answer: 2, why: "Tarefas inventadas causam confusão; a regra no pedido impede a ferramenta de as acrescentar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "O memorando de decisão: opções, riscos e uma recomendação",
          minutes: 6,
          goal: "Usar a IA para redigir um memorando de decisão que compare as opções de forma justa.",
          text: [
            "Os líderes decidem com pouco tempo. A IA pode ajudá-lo a pensar mais largo, não a decidir por você. Dê-lhe a decisão, os factos que tem e os seus limites (orçamento, tempo, pessoas) e peça três opções, cada uma com benefícios, riscos, custos e aquilo em que teria de acreditar para ela ser a melhor escolha.",
            "Depois questione: \"Qual é o argumento mais forte contra a opção que prefiro?\" e \"Que informação me falta?\" Estes dois pedidos de seguimento são onde a IA dá mais valor, porque mostram os pontos cegos.",
            "Quem escreve a recomendação é você. Verifique cada número, acrescente o que só você sabe (as suas pessoas, a sua história, os seus valores) e assuma a decisão. O memorando nunca deve dar \"a IA recomendou\" como razão."
          ],
          steps: ["Descreva a decisão, os factos e os limites (sem dados privados).", "Peça três opções com benefícios, riscos e custos.", "Peça o argumento mais forte contra a sua preferida.", "Pergunte que informação falta.", "Verifique os números e escreva você mesmo a recomendação."],
          words: [["Memorando de decisão", "um documento curto que apresenta uma decisão, as opções e uma recomendação."], ["Ponto cego", "algo importante que você ainda não notou."]],
          slides: [
            { title: "A IA alarga o pensamento, você decide", bullets: ["Dê a decisão, os factos e os limites", "Peça três opções: benefícios, riscos, custos"] },
            { title: "Dois pedidos de seguimento poderosos", bullets: ["\"Argumento mais forte contra a minha preferida?\"", "\"Que informação me falta?\""] },
            { title: "A decisão é sua", bullets: ["Verifique cada número", "Acrescente o que só você sabe", "Nunca \"a IA recomendou\" como razão"] }
          ],
          tryIt: "Escolha uma decisão real que tem de tomar (por exemplo, um novo horário, um fornecedor ou um evento). Use o pedido do memorando de decisão e os dois pedidos de seguimento, e depois escreva um parágrafo de recomendação com as suas palavras.",
          youCanNow: "usar a IA para alargar uma decisão e escrever um memorando que é seu.",
          quickCheck: [
            { objective: "O2", q: "Qual é o melhor papel da IA num memorando de decisão?", options: ["Tomar a decisão final", "Escolher a opção que a equipa prefere", "Assinar o memorando", "Alargar as suas opções e encontrar pontos cegos"], answer: 3, why: "A IA ajuda-o a ver mais opções e riscos; quem decide é o líder." },
            { objective: "O2", q: "Tem uma opção preferida. Que pedido de seguimento envia?", options: ["\"Qual é o argumento mais forte contra a opção que prefiro?\"", "\"Diga-me que a minha opção é a melhor.\"", "\"Faça o memorando mais curto.\"", "\"Escolha por mim.\""], answer: 0, why: "Pedir o contra-argumento mais forte testa a sua escolha de forma justa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Comunicação clara com a equipa",
          minutes: 5,
          goal: "Redigir e ajustar uma mensagem para a equipa quanto ao tom, ao tamanho e ao público.",
          text: [
            "Muitos problemas de liderança são problemas de comunicação. A IA ajuda-o a redigir depressa uma atualização para a equipa, um anúncio ou um agradecimento, e depois a ajustá-lo: \"mais curto\", \"mais caloroso\", \"para funcionários novos\", \"português simples para quem o fala como segunda língua\".",
            "Dê-lhe os pontos principais em tópicos e diga quem é o público, e peça um rascunho com a sua voz. Cole uma mensagem antiga que escreveu e diga \"use este mesmo tom\" para que soe como você.",
            "Leia-a em voz alta antes de enviar. Corte o que não diria pessoalmente. Para notícias sensíveis, como despedimentos, mudanças de política ou incidentes de segurança, a IA pode ajudar a organizar a mensagem, mas os recursos humanos ou o jurídico devem rever as palavras finais, e você deve dar as notícias importantes pessoalmente sempre que puder."
          ],
          steps: ["Escreva os pontos principais em tópicos.", "Diga quem é o público e qual é o tom.", "Peça um rascunho; dê uma mensagem antiga para imitar a sua voz.", "Ajuste com um ou dois pedidos de seguimento.", "Leia em voz alta; peça revisão para notícias sensíveis."],
          words: [["Tom", "a forma como uma mensagem se sente: calorosa, formal, urgente, calma."], ["Público", "as pessoas que vão ler a mensagem."]],
          slides: [
            { title: "Redija depressa e depois ajuste", bullets: ["Pontos principais em tópicos", "Público e tom", "\"Mais curto\", \"mais caloroso\", \"palavras simples\""] },
            { title: "Soe como você", bullets: ["Cole uma mensagem antiga que escreveu", "\"Use este mesmo tom\""] },
            { title: "Antes de enviar", bullets: ["Leia em voz alta", "Notícias sensíveis: revisão de RH ou jurídico", "Dê as grandes notícias pessoalmente"] }
          ],
          tryIt: "Escreva três tópicos para uma atualização real à equipa. Use a IA para a redigir, peça um ajuste, leia-a em voz alta e envie-a (ou guarde-a para enviar).",
          youCanNow: "redigir e ajustar mensagens para a equipa com IA, mantendo a sua própria voz.",
          quickCheck: [
            { objective: "O3", q: "Como faz um rascunho da IA soar como você?", options: ["Pede-lhe para usar linguagem formal", "Cola uma mensagem antiga que escreveu e diz \"use este mesmo tom\"", "Envia sem ler", "Usa mais pontos de exclamação"], answer: 1, why: "Um exemplo da sua própria escrita mostra à ferramenta o seu tom." },
            { objective: "O3", q: "A atualização da IA tem o dobro do tamanho que precisa. O que faz?", options: ["Envia na mesma", "Começa uma conversa nova com outra ferramenta", "Apaga a segunda metade", "Pede um ajuste, como \"reduza a cinco frases curtas\", e depois lê em voz alta"], answer: 3, why: "Um pedido de seguimento claro corrige o tamanho, e ler em voz alta apanha o que você não diria." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Três formas de trabalhar com IA para líderes",
        questions: [
          { objective: "O1", q: "Porque acrescentar \"Não acrescente nada que não esteja nas notas\" ao pedido da reunião?", options: ["Esconde os responsáveis", "Torna a lista mais longa", "Impede a ferramenta de inventar tarefas", "É obrigatório por lei"], answer: 2, why: "A IA pode preencher as lacunas com conteúdo inventado." },
          { objective: "O1", q: "Antes de ligar um gravador de reuniões com IA, deve:", options: ["Ver a política e avisar os participantes", "Gravar às escondidas", "Avisar só o chefe", "Desligar o microfone"], answer: 0, why: "Gravar pessoas levanta questões de consentimento e de privacidade." },
          { objective: "O2", q: "Que pedido de seguimento dá mais valor a um memorando de decisão?", options: ["\"Faça mais comprido.\"", "\"Acrescente emojis.\"", "\"Use palavras mais difíceis.\"", "\"Qual é o argumento mais forte contra a opção que prefiro?\""], answer: 3, why: "Mostra os pontos cegos." },
          { objective: "O2", q: "Quem escreve a recomendação num memorando de decisão?", options: ["A IA", "Você, o líder", "O fornecedor", "Ninguém"], answer: 1, why: "Os líderes assumem as decisões; a IA só alarga o pensamento." },
          { objective: "O3", q: "Tem de anunciar uma mudança de política que afeta os salários. Qual é a melhor forma?", options: ["Enviar por email um rascunho da IA sem revisão", "Deixar a IA dar a notícia", "Não fazer o anúncio", "Usar a IA para organizar a mensagem, pedir revisão aos RH e dar a notícia pessoalmente"], answer: 3, why: "Notícias sensíveis precisam de revisão humana e de ser dadas por uma pessoa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pessoas, ferramentas e regras da equipa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preparar conversas com pessoas sem as entregar à IA",
          minutes: 5,
          goal: "Usar a IA para preparar uma conversa difícil sem colocar nela dados pessoais.",
          text: [
            "As conversas de feedback, de conflito e de desempenho são onde os líderes mais querem ajuda e onde a IA é mais perigosa. Os detalhes pessoais de um funcionário são confidenciais; não cole nomes, saúde, registos disciplinares nem avaliações de desempenho em ferramentas de IA públicas.",
            "Mesmo assim, pode preparar-se. Descreva a situação em termos gerais (\"um membro da equipa falha muitas vezes os prazos, é muito querido e teve há pouco uma mudança na família\") e peça: uma frase de abertura, perguntas para entender o lado dele e formas de combinar os próximos passos. Peça-lhe para fazer o papel da outra pessoa para poder praticar.",
            "Nunca deixe a IA decidir sobre contratações, castigos disciplinares, salários ou despedimentos, e nunca envie feedback escrito pela IA que você não tenha reescrito com as suas palavras. As pessoas notam, e o que perde é a confiança."
          ],
          steps: ["Descreva a situação de forma geral, sem nomes nem detalhes privados.", "Peça uma abertura, perguntas e opções de próximos passos.", "Pratique com uma dramatização.", "Escreva as suas notas com as suas palavras.", "Deixe as decisões sobre pessoas com pessoas."],
          words: [["Dramatização (role-play)", "praticar uma conversa com alguém (ou uma IA) que faz o papel da outra pessoa."], ["Confidencial", "informação que tem de ficar privada e só ser partilhada com quem precisa dela."]],
          slides: [
            { title: "Deixe os dados pessoais de fora", bullets: ["Sem nomes, saúde nem registos disciplinares", "Sem avaliações em ferramentas de IA públicas"] },
            { title: "Prepare-se em termos gerais", bullets: ["Peça uma abertura e boas perguntas", "Peça opções de próximos passos", "Pratique com uma dramatização"] },
            { title: "Linhas que não se passam", bullets: ["Sem decisões da IA sobre contratar, salários ou castigos", "Reescreva o feedback com as suas palavras"] }
          ],
          tryIt: "Pense numa conversa que precisa de ter. Descreva-a em termos gerais, sem nomes, peça uma frase de abertura e três perguntas, e depois pratique-a uma vez com uma dramatização.",
          youCanNow: "preparar conversas difíceis com IA protegendo a privacidade das pessoas e a confiança delas em você.",
          quickCheck: [
            { objective: "O4", q: "O que pode colocar numa ferramenta de IA pública para preparar uma conversa sobre desempenho?", options: ["O nome do funcionário e o histórico de avaliações", "Uma descrição geral sem nomes nem detalhes privados", "As notas médicas dele, para ser sensível", "O processo individual completo dele"], answer: 1, why: "Só uma descrição geral mantém as informações privadas da pessoa fora da ferramenta." },
            { objective: "O4", q: "A IA sugere exatamente o que dizer e que decisão tomar sobre um funcionário. O que faz?", options: ["Usa a ideia da frase de abertura para praticar e toma você mesmo a decisão", "Lê o guião dela palavra por palavra", "Deixa a IA enviar a mensagem", "Copia a decisão dela para os registos dos RH"], answer: 0, why: "A IA pode ajudá-lo a preparar-se, mas a conversa e a decisão ficam consigo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escolher e usar bem as ferramentas de IA",
          minutes: 5,
          goal: "Comparar ferramentas de IA nas perguntas que importam para a sua equipa.",
          text: [
            "Há muitas ferramentas de IA: assistentes gerais (ChatGPT, Microsoft Copilot, Google Gemini, Claude), assistentes dentro de ferramentas que já usa (Microsoft 365, Google Workspace, Canva, aplicações de reuniões) e funções de agente que podem fazer ações. As funções e os preços mudam muitas vezes.",
            "Faça cinco perguntas antes de a sua equipa adotar uma. Dados: guarda o que escrevemos ou treina com isso, e podemos desligar? Acesso: o que pode ler ou fazer nos nossos sistemas? Aprovação: a nossa organização ou a informática aprovou-a? Exatidão: consegue mostrar as fontes? Custo: quanto custa por pessoa, agora e na renovação?",
            "Procure as respostas nas páginas de privacidade e de preços do próprio fornecedor e no seu contrato, não em anúncios. Os planos para empresas e para educação têm muitas vezes condições de dados diferentes dos planos pessoais gratuitos; leia-as para o plano que iria mesmo usar."
          ],
          steps: ["Faça a lista das ferramentas que a sua equipa usa ou quer.", "Verifique os dados: se guarda e treina com o que escreve.", "Verifique o acesso: o que pode ler ou fazer.", "Verifique a aprovação, a exatidão e o custo.", "Use as páginas do próprio fornecedor e o seu contrato."],
          words: [["Condições de dados", "as regras sobre como um fornecedor guarda e usa o que você escreve."], ["Assistente integrado", "uma função de IA dentro de uma ferramenta que já usa, como um processador de texto."]],
          slides: [
            { title: "Tipos de ferramentas de IA", bullets: ["Assistentes gerais", "Assistentes dentro de ferramentas que já usa", "Funções de agente que fazem ações"] },
            { title: "Cinco perguntas", bullets: ["Dados: guarda ou treina com eles?", "Acesso: o que pode ler ou fazer?", "Aprovação, exatidão, custo"] },
            { title: "Onde encontrar as respostas", bullets: ["Páginas de privacidade e de preços do fornecedor", "O seu contrato", "As condições mudam com o plano: veja o seu"] }
          ],
          tryIt: "Escolha uma ferramenta de IA que a sua equipa usa ou quer. Responda às cinco perguntas usando as páginas do próprio fornecedor. Escreva um veredicto de uma linha: aprovar, aprovar com limites ou ainda não.",
          youCanNow: "avaliar uma ferramenta de IA quanto aos dados, ao acesso, à aprovação, à exatidão e ao custo.",
          quickCheck: [
            { objective: "O5", q: "O que pergunta a questão do \"acesso\" sobre uma ferramenta de IA?", options: ["Quanto custa", "Com que rapidez responde", "O que pode ler ou fazer nos seus sistemas", "Que línguas fala"], answer: 2, why: "O acesso diz-lhe o que a ferramenta poderia ver ou mudar se algo correr mal." },
            { objective: "O5", q: "A sua equipa usa um plano pessoal gratuito e quer saber se ele treina com os seus dados. Onde procura?", options: ["Num artigo de notícias do ano passado", "Nas condições de privacidade do próprio fornecedor para esse plano", "No palpite de um colega", "Na resposta da própria IA numa conversa"], answer: 1, why: "Os planos gratuitos e os de empresa podem ter condições de dados diferentes, e as páginas do fornecedor são a fonte." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever um guia de uma página sobre o uso de IA na equipa",
          minutes: 6,
          goal: "Escrever um guia curto sobre o uso de IA que a sua equipa possa seguir.",
          text: [
            "Um guia de uma página vale mais do que uma política longa que ninguém lê. Responde a cinco perguntas: Que ferramentas podemos usar? O que nunca se coloca nelas? O que uma pessoa tem de verificar antes de sair? Quando dizemos que a IA ajudou? A quem perguntamos?",
            "Escreva-o com palavras simples e com exemplos do trabalho da sua equipa: \"Nunca cole nomes, moradas ou dados de pagamento de clientes.\" \"Uma pessoa verifica cada facto, número e citação.\" \"Diga ao cliente se está a conversar com uma IA.\" Se a sua organização tem uma política formal, o seu guia tem de caber dentro dela; confirme com os RH, a informática ou o jurídico.",
            "Use a IA para o redigir a partir das suas notas e depois corrija-o bem. Partilhe-o, pergunte à equipa o que não está claro e reveja-o de poucos em poucos meses, porque as ferramentas e os riscos estão sempre a mudar."
          ],
          steps: ["Responda às cinco perguntas em notas com tópicos.", "Use a IA para redigir uma página a partir das suas notas.", "Acrescente exemplos reais do trabalho da sua equipa.", "Confirme que cabe dentro da política da organização.", "Partilhe-o, pergunte o que não está claro e marque uma data de revisão."],
          words: [["Guia de uso de IA", "um conjunto curto de regras sobre como uma equipa usa as ferramentas de IA."], ["Divulgação", "dizer às pessoas que a IA ajudou a fazer algo ou que estão a falar com uma IA."]],
          slides: [
            { title: "Cinco perguntas, uma página", bullets: ["Que ferramentas?", "O que nunca se coloca?", "O que uma pessoa tem de verificar?", "Quando divulgamos? A quem perguntamos?"] },
            { title: "Palavras simples, exemplos reais", bullets: ["\"Nunca cole dados de pagamento de clientes\"", "\"Uma pessoa verifica cada facto e número\""] },
            { title: "Mantenha-o vivo", bullets: ["Caber dentro de qualquer política formal", "Pergunte à equipa o que não está claro", "Reveja de poucos em poucos meses"] }
          ],
          tryIt: "Tarefa final: guarde os seus três pedidos testados (ações da reunião, memorando de decisão, atualização à equipa) num só documento e acrescente o seu guia de uma página sobre o uso de IA na equipa, com ferramentas, o que nunca se coloca, o que verificar, divulgação e a quem perguntar. Partilhe-o com um colega para ter a opinião dele.",
          youCanNow: "orientar o uso diário de IA da sua equipa com um kit testado e um guia claro de uma página.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer divulgação num guia de IA da equipa?", options: ["Partilhar as suas palavras-passe com a informática", "Fazer a lista de todas as ferramentas de IA que existem", "Publicar os seus pedidos na internet", "Dizer às pessoas quando a IA ajudou ou quando estão a falar com uma IA"], answer: 3, why: "A divulgação mantém as pessoas informadas sobre onde a IA foi usada." },
            { objective: "O6", q: "A sua organização tem uma política formal de IA. Como deve o seu guia de uma página relacionar-se com ela?", options: ["Caber dentro dela e remeter para ela", "Substituí-la por regras mais simples", "Ignorá-la, porque as equipas são diferentes", "Copiá-la toda, palavra por palavra"], answer: 0, why: "Um guia de equipa acrescenta detalhes práticos, mas tem de ficar dentro da política da organização." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Pessoas, ferramentas e regras da equipa",
        questions: [
          { objective: "O4", q: "Ao preparar uma conversa sobre desempenho, o que pode colocar numa ferramenta de IA pública?", options: ["O nome e a avaliação do funcionário", "A nota médica dele", "Uma descrição geral sem nomes nem detalhes privados", "O processo disciplinar dele"], answer: 2, why: "Descreva as situações de forma geral; deixe os dados pessoais de fora." },
          { objective: "O4", q: "Que decisão nunca deve ser tomada pela IA?", options: ["Aplicar um castigo disciplinar a um funcionário", "Escolher a hora de uma reunião", "Escolher um tipo de letra", "Ordenar os pontos da agenda"], answer: 0, why: "As decisões sobre pessoas ficam com pessoas." },
          { objective: "O5", q: "Onde deve verificar se uma ferramenta treina com os seus dados?", options: ["Num anúncio da ferramenta", "Nas condições de privacidade do próprio fornecedor para o seu plano", "Na opinião de um amigo", "No logótipo da ferramenta"], answer: 1, why: "As condições oficiais do plano que usa mesmo são a fonte." },
          { objective: "O6", q: "Qual é a principal vantagem de um guia de IA de uma página?", options: ["As pessoas leem-no e seguem-no de verdade", "Cobre todos os casos possíveis", "Nunca precisa de ser atualizado", "Substitui todas as políticas"], answer: 0, why: "Guias curtos e simples são usados." },
          { objective: "O6", q: "Com que frequência deve rever o guia de IA da sua equipa?", options: ["Nunca", "De dez em dez anos", "Só depois de um desastre", "De poucos em poucos meses, à medida que as ferramentas e os riscos mudam"], answer: 3, why: "As ferramentas de IA mudam depressa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Liderança na Era da IA Agêntica 2: IA para Líderes Modernos e Ferramentas de IA para Líderes",
    questions: [
      { objective: "O1", q: "Um bom pedido de notas de reunião pede:", options: ["Um poema", "Decisões, ações com responsáveis e datas, perguntas em aberto", "Os salários de todos", "Só uma nova agenda"], answer: 1, why: "Essa estrutura transforma notas em ações." },
      { objective: "O1", q: "Se a IA fizer a lista de uma ação sem responsável, o pedido deve fazê-la escrever:", options: ["O seu nome", "Um nome qualquer", "EM FALTA", "Nada"], answer: 2, why: "Marcar o que falta evita responsáveis inventados." },
      { objective: "O1", q: "Antes de colar notas na IA, deve:", options: ["Acrescentar palavras-passe", "Acrescentar mais nomes", "Tirar os detalhes pessoais ou confidenciais", "Traduzi-las"], answer: 2, why: "Os detalhes privados ficam fora das ferramentas públicas." },
      { objective: "O2", q: "Num memorando de decisão, o melhor papel da IA é:", options: ["Alargar as suas opções e mostrar os pontos cegos", "Tomar a decisão", "Assinar o memorando", "Substituir a sua equipa"], answer: 0, why: "Você decide; a IA ajuda-o a pensar mais largo." },
      { objective: "O2", q: "\"Que informação me falta?\" é:", options: ["Uma ordem de formatação", "Uma perda de tempo", "Um risco para a privacidade", "Um pedido de seguimento útil que encontra pontos cegos"], answer: 3, why: "Mostra as lacunas no seu pensamento." },
      { objective: "O2", q: "Que razão um memorando nunca deve dar?", options: ["\"Cabe no nosso orçamento\"", "\"A IA recomendou\"", "\"Cumpre o prazo\"", "\"A nossa equipa consegue fazê-lo\""], answer: 1, why: "Os líderes assumem as suas razões." },
      { objective: "O3", q: "Para fazer um rascunho da IA soar como você:", options: ["Use outra ferramenta", "Use mais pontos de exclamação", "Peça palavras mais longas", "Cole uma mensagem antiga e diga \"use este mesmo tom\""], answer: 3, why: "Exemplos da sua escrita orientam o tom." },
      { objective: "O3", q: "Ler uma mensagem em voz alta antes de enviar ajuda-o a:", options: ["Acrescentar jargão", "Torná-la mais longa", "Cortar o que não diria pessoalmente", "Saltar a revisão"], answer: 2, why: "O seu ouvido apanha o tom errado." },
      { objective: "O3", q: "Para uma notícia sobre despedimentos, a IA pode ajudá-lo a:", options: ["Organizar a mensagem, com revisão dos RH ou do jurídico", "Enviá-la sem revisão", "Decidir quem é despedido", "Evitar dizer às pessoas"], answer: 0, why: "Notícias sensíveis precisam de revisão humana." },
      { objective: "O4", q: "Que detalhe nunca deve ir para uma ferramenta de IA pública?", options: ["Uma agenda de reunião genérica", "Informações de saúde de um funcionário", "Datas de eventos públicos", "O nome da sua equipa"], answer: 1, why: "As informações de saúde são confidenciais." },
      { objective: "O4", q: "Uma dramatização com IA ajuda-o a:", options: ["Praticar uma conversa difícil", "Fugir da conversa", "Gravar o funcionário", "Decidir salários"], answer: 0, why: "Praticar dá confiança sem partilhar dados privados." },
      { objective: "O4", q: "O feedback escrito pela IA deve ser:", options: ["Escondido do funcionário", "Enviado como está", "Publicado para todos", "Reescrito com as suas palavras"], answer: 3, why: "As pessoas notam, e a confiança importa." },
      { objective: "O5", q: "Qual é um assistente integrado?", options: ["Um caderno de papel", "Uma função de IA dentro do seu processador de texto", "Um telefone de secretária", "Uma impressora"], answer: 1, why: "Muitas ferramentas conhecidas já têm funções de IA." },
      { objective: "O5", q: "A questão dos \"dados\" sobre uma ferramenta pergunta:", options: ["É popular?", "De que cor é?", "Guarda ou treina com o que escrevemos?", "Quantos botões tem?"], answer: 2, why: "As condições de dados decidem o que é seguro escrever." },
      { objective: "O5", q: "A questão do \"acesso\" pergunta:", options: ["O escritório está aberto?", "Os funcionários têm acesso à internet?", "O que pode ler ou fazer nos nossos sistemas?", "Quem tem a chave da porta?"], answer: 2, why: "As funções de agente podem fazer ações nos seus sistemas." },
      { objective: "O5", q: "Os planos pessoais gratuitos e os planos de empresa:", options: ["Podem ter condições de dados diferentes", "Têm sempre as mesmas condições", "Nunca guardam dados", "São sempre gratuitos"], answer: 0, why: "Leia as condições do plano que vai usar." },
      { objective: "O6", q: "Um guia de IA de uma página responde a:", options: ["Só quem manda", "Todas as questões legais", "Só os preços", "Que ferramentas, o que nunca se coloca, o que verificar, divulgação, a quem perguntar"], answer: 3, why: "Cinco perguntas simples cobrem o uso diário." },
      { objective: "O6", q: "Divulgação quer dizer:", options: ["Esconder o uso de IA", "Dizer às pessoas que a IA ajudou ou que estão a falar com uma IA", "Apagar registos", "Partilhar palavras-passe"], answer: 1, why: "Ser honesto sobre a IA cria confiança." },
      { objective: "O6", q: "Se a sua organização tem uma política formal de IA, o guia da sua equipa tem de:", options: ["Contradizê-la", "Substituí-la", "Ignorá-la", "Caber dentro dela"], answer: 3, why: "Os guias de equipa funcionam dentro da política da organização." },
      { objective: "O6", q: "O seu kit de IA de líder fica melhor guardado como:", options: ["Palavras-passe de outras pessoas", "Pedidos soltos de que se esquece", "Pedidos testados e reutilizáveis guardados num só lugar", "Uma lista de todas as ferramentas de IA"], answer: 2, why: "Pedidos guardados e testados tornam os bons hábitos repetíveis." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      3,
      5,
      6,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Pedido das ações da reunião",
        objective: "O1",
        notYet: "Nenhum pedido guardado, ou não foi testado com notas reais.",
        meets: "Um pedido guardado que transforma notas em ações com responsáveis e datas, usado uma vez sem detalhes privados.",
        exceeds: "O pedido marca os responsáveis em falta e proíbe tarefas inventadas."
      },
      {
        name: "Pedido do memorando de decisão",
        objective: "O2",
        notYet: "Nenhum pedido guardado, ou foi a IA que fez a recomendação.",
        meets: "Um pedido guardado para opções e riscos, usado uma vez, com a recomendação escrita pelo líder.",
        exceeds: "Inclui pedidos de seguimento que testam a opção preferida."
      },
      {
        name: "Pedido da atualização à equipa",
        objective: "O3",
        notYet: "Nenhum pedido guardado, ou a mensagem não foi verificada.",
        meets: "Um pedido guardado para atualizações à equipa, usado uma vez e ajustado no tom ou no tamanho.",
        exceeds: "Inclui uma amostra da escrita do próprio líder para imitar o tom."
      },
      {
        name: "Guia de IA de uma página",
        objective: "O6",
        notYet: "Faltam as ferramentas aprovadas, o que nunca se coloca, o que tem de ser verificado ou a quem perguntar.",
        meets: "Uma página que cobre as ferramentas aprovadas, o que nunca se coloca, o que uma pessoa tem de verificar e a quem perguntar.",
        exceeds: "Também cobre a divulgação e foi partilhado com um colega para ter a opinião dele."
      },
      {
        name: "Detalhes privados de fora",
        objective: "O4",
        notYet: "Um pedido ou exemplo tem nomes ou detalhes privados.",
        meets: "Nenhum detalhe pessoal ou confidencial em nenhum pedido guardado nem exemplo.",
        exceeds: "Os pedidos usam marcadores como [membro da equipa], para serem seguros de reutilizar."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Equipas com um guia de uma página sobre o uso de IA em vigor em 30 dias (inquérito de seguimento)",
      "Líderes que dizem poupar tempo todas as semanas com os seus pedidos reutilizáveis (inquérito de seguimento)",
      "Líderes que seguem para o curso 3 de Liderança na Era da IA Agêntica"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com um assistente de IA; use o que a sua organização aprovou",
      "Notas de uma reunião recente, uma decisão real e uma atualização à equipa, sem detalhes privados",
      "Um documento para guardar os pedidos e o guia de uso de IA",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois usem ao vivo o pedido de notas de reunião com notas inventadas, antes de os líderes usarem as suas.",
      "Lembre aos líderes que sigam a política de IA da sua organização e que envolvam os RH ou o jurídico nas decisões sobre pessoas e nas notícias sensíveis.",
      "Junte os líderes aos pares para praticarem uma conversa difícil com uma dramatização, usando só descrições gerais.",
      "Peça aos líderes que troquem os rascunhos dos guias de IA e deem cada um uma sugestão.",
      "Avalie a tarefa final com a grelha de avaliação e confirme que nenhum pedido guardado tem detalhes pessoais."
    ]
  }
};
