"use strict";

// Koach Learn course (Portuguese translation of shared/digital-literacy-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course is about US services; the example searches stay in English, the language of those official sites.

module.exports = {
  id: "digital-literacy-basics-pt",
  lang: "pt",
  translationOf: "digital-literacy-basics",
  category: "Re-Entry",
  name: "Noções Básicas de Literacia Digital",
  skills: "Ter acesso à internet de graça ou a baixo custo, Pesquisar bem, Verificar se uma informação é verdadeira, Preencher formulários na internet, Digitalizar e carregar documentos, Proteger a sua pegada digital",
  outcome: "encontrar o site oficial verdadeiro de um serviço de que precisa, verificar que as suas informações são de confiança e fazer lá uma tarefa: preencher o formulário, digitalizar e carregar um documento com um nome de ficheiro claro, e manter seguras as suas informações privadas e a sua reputação na internet.",
  about: [
    "Literacia digital quer dizer ser capaz de encontrar, avaliar e usar informações em telefones e computadores, e de fazer coisas reais pela internet: candidatar-se a empregos, renovar um documento de identidade, usar apoios sociais ou marcar uma consulta numa clínica. Muitos serviços agora funcionam primeiro pela internet, por isso estas habilidades abrem portas.",
    "No Capítulo 1 aprende onde ter acesso à internet de graça ou a baixo custo, como pesquisar bem e como distinguir uma informação verdadeira de uma falsa. No Capítulo 2 preenche formulários, digitaliza e carrega documentos, e protege a sua privacidade e a sua reputação na internet.",
    "Não precisa de experiência. Cada lição dura cerca de cinco minutos. Leia, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escolha um serviço de que precisa, como o centro de emprego do seu estado, o serviço de viação, um serviço de apoios sociais ou uma clínica. Pesquise-o, prove que o site é o oficial e encontre a página com o formulário ou os passos. Depois digitalize com o telefone um documento de prática (uma carta ou uma página que você escreveu, não um documento de identidade verdadeiro), guarde-o em PDF com um nome de ficheiro claro e escreva três linhas sobre como verificou o site e manteve seguras as suas informações privadas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que precisam de fazer coisas pela internet, sobretudo pessoas que voltam para casa depois da prisão, e também pessoas à procura de emprego, idosos e membros da comunidade que estiveram longe da tecnologia ou que quase nunca a usaram.",
    startingPoint: "Sabem usar o telefone para chamadas e SMS e podem ter uma conta de email simples. Muitos nunca usaram um motor de pesquisa para encontrar um site oficial, nunca avaliaram se uma informação é verdadeira, nunca preencheram um formulário longo na internet, nunca digitalizaram um documento nem verificaram as suas definições de privacidade.",
    gap: "Hoje, empregos, documentos de identidade, apoios sociais, habitação e saúde pedem-se pela internet, muitas vezes com documentos para carregar. Sem estas habilidades, as pessoas ficam bloqueadas, pagam a sites falsos por serviços gratuitos, dão números de identificação a burlões ou prejudicam as suas oportunidades com o que outros podem encontrar sobre elas na internet.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; palavras como motor de pesquisa, PDF e pegada digital são explicadas",
      "Aparelhos: um smartphone, ou um computador gratuito da biblioteca ou do centro de emprego; alguns alunos não têm aparelho próprio",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total",
      "Custo: só opções gratuitas, como o Wi-Fi da biblioteca e aplicações gratuitas para digitalizar com o telefone",
      "Privacidade e regras: a prática usa um documento de prática, nunca um documento de identidade verdadeiro; os alunos em liberdade condicional ou com pena suspensa cumprem as regras sobre a internet que tiverem"
    ],
    prerequisites: "Nenhum. Os cursos \"Competências Básicas de Informática\" ou \"Usar um Smartphone e um Tablet\" ajudam os alunos que nunca usaram estes aparelhos."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "A partir do lugar onde vive", action: "encontrar uma forma gratuita ou de baixo custo de ter acesso à internet e fazer a lista dos passos de segurança para o Wi-Fi público e os computadores partilhados", standard: "indicando pelo menos um lugar ou programa real e pelo menos dois passos de segurança" },
    { id: "O2", condition: "Usando um motor de pesquisa", action: "pesquisar a página oficial de um serviço de que precisa usando palavras-chave claras", standard: "chegando à página oficial sem abrir nenhum anúncio" },
    { id: "O3", condition: "Com um site ou uma publicação", action: "verificar se a informação é de confiança usando as quatro perguntas", standard: "respondendo quem a fez, quando, o que dizem outras fontes de confiança e se ela o apressa" },
    { id: "O4", condition: "Com um formulário na internet num site oficial", action: "preencher o formulário corretamente e guardar a prova de que o enviou", standard: "com todos os campos obrigatórios preenchidos e a confirmação guardada" },
    { id: "O5", condition: "Com um documento em papel e um telefone", action: "digitalizar o documento e guardá-lo em PDF com um nome de ficheiro claro", standard: "com uma digitalização plana e legível e um nome que diz de quem é o documento e o que é" },
    { id: "O6", condition: "Usando um motor de pesquisa e as definições das suas redes sociais", action: "verificar o que os outros podem ver sobre você na internet e reforçar as suas definições de privacidade", standard: "pesquisando o seu próprio nome e mudando pelo menos uma definição de privacidade" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar informações de confiança",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ter acesso à internet de graça ou a baixo custo",
          minutes: 5,
          goal: "Encontrar perto de você uma forma gratuita ou de baixo custo de ter acesso à internet.",
          text: [
            "Não precisa de ter um computador seu para ter acesso à internet. As bibliotecas públicas costumam ter computadores gratuitos, Wi-Fi gratuito e funcionários que ajudam. Muitos centros de emprego, de reintegração e comunitários também têm salas de informática.",
            "O Lifeline é um programa federal dos Estados Unidos, supervisionado pela FCC (a autoridade federal das comunicações), que dá um desconto mensal no serviço de telefone ou de internet a quem tem direito, normalmente pelo rendimento ou por estar num programa como o SNAP ou o Medicaid. O valor do desconto pode mudar, por isso veja em lifelinesupport.org o valor atual e como se candidatar.",
            "No Wi-Fi público, use só sites cujo endereço começa por https e que mostram um cadeado, e não use o banco em computadores partilhados. Num computador partilhado, termine sempre a sessão e feche o navegador quando acabar."
          ],
          steps: ["Pesquise a biblioteca pública mais perto de você e veja o horário.", "Pergunte aos funcionários sobre computadores gratuitos, Wi-Fi e sessões de ajuda.", "Se o custo for um problema, leia sobre o Lifeline em lifelinesupport.org.", "Em computadores partilhados, termine a sessão e feche o navegador quando acabar."],
          words: [["Wi-Fi", "uma ligação à internet sem fios."], ["Lifeline", "um programa federal dos Estados Unidos que baixa o custo mensal do serviço de telefone ou de internet para quem tem direito."], ["https", "o início de um endereço de site que quer dizer que a ligação está cifrada (baralhada para outros não a lerem)."]],
          sources: [{ name: "Lifeline Support (USAC, for the FCC)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Lugares gratuitos para ter acesso à internet", bullets: ["Bibliotecas públicas: computadores, Wi-Fi, pessoas que ajudam", "Centros de emprego e centros comunitários"] },
            { title: "Lifeline", bullets: ["Desconto federal no telefone ou na internet", "Para quem tem direito pelo rendimento ou por programas como o SNAP", "Veja os dados atuais em lifelinesupport.org"] },
            { title: "Seguro em computadores partilhados", bullets: ["Procure https e um cadeado", "Nada de banco em computadores públicos", "Termine a sessão e feche o navegador"] }
          ],
          tryIt: "Encontre na internet a biblioteca pública mais perto de você. Anote a morada, o horário e se oferece ajuda gratuita com computadores.",
          youCanNow: "encontrar uma forma gratuita ou de baixo custo de ter acesso à internet e usar computadores partilhados com segurança.",
          quickCheck: [
            { objective: "O1", q: "Que programa dá um desconto mensal no serviço de telefone ou de internet a quem tem direito?", options: ["Um motor de pesquisa", "O Lifeline", "Um gestor de palavras-passe", "Uma aplicação de rede social"], answer: 1, why: "O Lifeline é um programa federal, supervisionado pela FCC, que baixa o custo do telefone ou da internet." },
            { objective: "O1", q: "Acabou de ver o seu email num computador da biblioteca. O que faz antes de sair?", options: ["Deixa o navegador aberto para a próxima pessoa", "Guarda a palavra-passe no navegador", "Termina a sessão e fecha o navegador", "Escreve a palavra-passe num papel colado"], answer: 2, why: "Terminar a sessão e fechar o navegador impede a próxima pessoa de entrar na sua conta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pesquisar bem",
          minutes: 5,
          goal: "Usar um motor de pesquisa para encontrar depressa uma página oficial certa.",
          text: [
            "Um motor de pesquisa, como o Google ou o Bing, encontra páginas da internet para as palavras que escreve. Use poucas palavras-chave claras, não uma história inteira: \"California DMV renew ID\" (renovar o documento de identidade no serviço de viação da Califórnia) funciona melhor do que \"como recupero o meu documento perdi-o no ano passado\".",
            "Acrescente o seu estado ou a sua cidade para ter resultados locais. Ponha palavras entre aspas para encontrar essa frase exata. Acrescente \"site:.gov\" para ver só sites do governo dos Estados Unidos.",
            "Os primeiros resultados muitas vezes são anúncios, marcados \"Patrocinado\" ou \"Anúncio\" (em inglês \"Sponsored\" ou \"Ad\"). Os anúncios podem ser falsos ou cobrar por uma coisa que é gratuita no site oficial. Desça a página até aos resultados verdadeiros."
          ],
          steps: ["Escreva 3 a 6 palavras-chave.", "Acrescente o seu estado ou a sua cidade.", "Acrescente site:.gov para páginas do governo.", "Salte os resultados marcados Patrocinado ou Anúncio.", "Abra o resultado e leia o endereço do site antes de confiar nele."],
          words: [["Motor de pesquisa", "um site que encontra páginas da internet para as palavras que escreve, como o Google ou o Bing."], ["Palavras-chave", "as palavras mais importantes para aquilo que quer encontrar."], ["Patrocinado / Anúncio", "um resultado pago, que nem sempre é o oficial nem o melhor."]],
          slides: [
            { title: "Use palavras-chave", bullets: ["\"California DMV renew ID\"", "Não uma história longa"] },
            { title: "Truques de pesquisa", bullets: ["Acrescente o seu estado ou a sua cidade", "\"Aspas\" para uma frase exata", "site:.gov para sites do governo"] },
            { title: "Salte os anúncios", bullets: ["Marcados Patrocinado ou Anúncio", "Podem cobrar por serviços gratuitos", "Desça até aos resultados verdadeiros"] }
          ],
          tryIt: "Pesquise o centro de emprego ou o serviço de subsídio de desemprego do seu estado. Experimente uma vez com uma frase longa e outra vez com palavras-chave mais site:.gov. Que pesquisa encontrou a página oficial mais depressa?",
          youCanNow: "pesquisar com palavras-chave, saltar os anúncios e encontrar páginas oficiais depressa.",
          quickCheck: [
            { objective: "O2", q: "O que faz pôr palavras entre aspas numa pesquisa?", options: ["Mostra só anúncios", "Torna a pesquisa mais lenta", "Mostra só imagens", "Encontra essa frase exata"], answer: 3, why: "As aspas dizem ao motor de pesquisa para encontrar a frase exata." },
            { objective: "O2", q: "Precisa de renovar o seu documento de identidade no seu estado. Que pesquisa escreve?", options: ["O nome do seu estado, \"renew ID\" e site:.gov", "\"Perdi o meu documento no ano passado e não sei o que fazer\"", "\"documento\"", "\"ajuda\""], answer: 0, why: "Poucas palavras-chave claras, o seu estado e site:.gov levam à página oficial." }
          ]
        },
        {
          objectives: ["O3"],
          title: "É verdade? Verificar informações",
          minutes: 5,
          goal: "Decidir se um site ou uma publicação é de confiança antes de agir.",
          text: [
            "Qualquer pessoa pode publicar qualquer coisa na internet. Antes de confiar, faça quatro perguntas. Quem fez isto? Veja o endereço do site e a página \"Sobre nós\" (em inglês \"About\"); os sites do governo dos EUA acabam em .gov. Quando foi escrito? As regras e os preços mudam. O que dizem outras fontes de confiança? Verifique pelo menos mais uma. Tenta apressá-lo ou assustá-lo? Isso é um sinal de alerta.",
            "Cuidado com endereços parecidos, como um site que acrescenta palavras ou troca uma letra de um nome verdadeiro. Cuidado com fotos e vídeos feitos ou alterados com IA; se uma imagem parecer chocante, procure-a em notícias de meios de comunicação de confiança antes de a partilhar.",
            "A informação falsa que se espalha por engano chama-se desinformação involuntária (em inglês \"misinformation\"). A informação falsa espalhada de propósito chama-se desinformação (em inglês \"disinformation\"). Não partilhe nada antes de verificar."
          ],
          steps: ["Quem fez isto? Leia o endereço e a página Sobre nós.", "Quando? Encontre a data.", "Quem mais diz o mesmo? Verifique mais uma fonte de confiança.", "Está a apressá-lo ou a assustá-lo? Vá com calma.", "Não partilhe antes de verificar."],
          words: [["Fonte", "o lugar de onde vem uma informação."], ["Desinformação involuntária", "informação falsa partilhada por engano."], ["Desinformação", "informação falsa espalhada de propósito."], ["Site parecido", "um site falso com um endereço feito para parecer o de um site verdadeiro."]],
          slides: [
            { title: "Quatro perguntas", bullets: ["Quem fez isto?", "Quando foi escrito?", "O que dizem outras fontes de confiança?", "Está a apressar-me ou a assustar-me?"] },
            { title: "Cuidado com as falsificações", bullets: ["Endereços de sites parecidos", "Fotos e vídeos feitos com IA", "Afirmações chocantes sem fonte"] },
            { title: "Antes de partilhar", bullets: ["Verifique primeiro", "A desinformação involuntária espalha-se por engano", "A desinformação espalha-se de propósito"] }
          ],
          tryIt: "Encontre uma publicação ou um artigo sobre um apoio social, um programa de emprego ou um conselho de saúde. Responda às quatro perguntas sobre ele e decida: confiar, verificar mais ou ignorar.",
          youCanNow: "verificar se uma informação da internet é de confiança antes de agir ou de a partilhar.",
          quickCheck: [
            { objective: "O3", q: "O que é desinformação involuntária?", options: ["Informação falsa que se espalha por engano", "Notícias verdadeiras de um site .gov", "Informação falsa espalhada de propósito", "Um anúncio no topo de uma pesquisa"], answer: 0, why: "A desinformação involuntária é falsa e espalha-se por engano; de propósito, é desinformação." },
            { objective: "O3", q: "Uma mensagem tem um link para um site de emprego cujo endereço troca uma letra do nome de uma empresa conhecida. O que faz?", options: ["Põe os seus dados depressa", "Partilha o link com amigos", "Acha que está tudo bem porque parece igual", "Trata-o como provavelmente falso e vai ao site verdadeiro por outro caminho"], answer: 3, why: "Os endereços parecidos são um sinal de alerta de um site falso." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar informações de confiança",
        questions: [
          { objective: "O1", q: "Onde pode normalmente usar um computador e Wi-Fi de graça?", options: ["Numa bomba de gasolina", "Num stand de automóveis", "No cofre de um banco", "Numa biblioteca pública"], answer: 3, why: "As bibliotecas públicas costumam oferecer computadores, Wi-Fi e ajuda de graça." },
          { objective: "O1", q: "O que faz o Lifeline?", options: ["Dá carros de graça", "Paga a renda", "Baixa o custo mensal do telefone ou da internet para quem tem direito", "Vende telefones"], answer: 2, why: "O Lifeline é um desconto federal no serviço de telefone ou de internet." },
          { objective: "O2", q: "Que pesquisa tem mais probabilidade de encontrar depressa a página certa?", options: ["\"ajude-me por favor\"", "\"Texas renew ID site:.gov\"", "\"coisas sobre documento\"", "\"?\""], answer: 1, why: "As palavras-chave, o estado e site:.gov reduzem os resultados." },
          { objective: "O2", q: "Um dos primeiros resultados está marcado \"Patrocinado\". O que quer isto dizer?", options: ["É a página oficial do governo", "É sempre gratuito", "Foi verificado pelo governo", "É um anúncio pago e pode não ser oficial"], answer: 3, why: "Os resultados patrocinados são anúncios." },
          { objective: "O3", q: "Uma publicação diz que um novo apoio acaba esta noite e que tem de clicar já. O que faz primeiro?", options: ["Clica logo", "Partilha com toda a gente", "Verifica no site oficial .gov", "Envia o seu número de identificação"], answer: 2, why: "A pressa é um sinal de alerta; verifique na fonte oficial." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fazer coisas pela internet com segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preencher formulários na internet",
          minutes: 5,
          goal: "Preencher corretamente um formulário na internet e guardar a prova de que o enviou.",
          text: [
            "Antes de começar, junte o que o formulário vai pedir: os seus contactos, datas, o seu historial de trabalho ou de moradas e qualquer documento que precise de carregar. Tenha um endereço de email que veja muitas vezes, porque a maioria dos sites envia as confirmações para lá.",
            "Os campos marcados com uma estrela (*) são obrigatórios. No computador, use a tecla Tab para passar para a caixa seguinte. Leia todos os menus pendentes e todas as caixas de seleção. Muitos formulários longos deixam guardar e voltar mais tarde; anote onde voltar a iniciar sessão.",
            "Antes de carregar em Enviar (em inglês \"Submit\"), reveja todas as páginas. Depois de enviar, guarde a confirmação: faça uma captura de ecrã, descarregue o PDF ou anote o número de confirmação. Escreva números de identificação só no site oficial, nunca num site a que chegou por um anúncio ou por uma SMS."
          ],
          steps: ["Confirme que está no site oficial.", "Junte primeiro os dados e os documentos.", "Preencha os campos obrigatórios (*); use Tab para avançar.", "Guarde o seu progresso nos formulários longos.", "Reveja todas as páginas e depois carregue em Enviar.", "Guarde o número de confirmação ou uma captura de ecrã."],
          words: [["Campo", "uma caixa de um formulário onde escreve uma resposta."], ["Obrigatório (*)", "um campo que tem de preencher antes de poder enviar."], ["Número de confirmação", "um código que prova que o seu formulário foi recebido."], ["Menu pendente", "uma caixa que abre uma lista para escolher."]],
          slides: [
            { title: "Antes de começar", bullets: ["Esteja no site oficial", "Junte os dados e os documentos", "Use um email que vê muitas vezes"] },
            { title: "Enquanto preenche", bullets: ["* quer dizer obrigatório", "Tab passa para a caixa seguinte", "Guarde o progresso nos formulários longos"] },
            { title: "Termine bem", bullets: ["Reveja todas as páginas", "Envie", "Guarde o número de confirmação ou uma captura de ecrã"] }
          ],
          tryIt: "Encontre um formulário de prática ou de contacto num site oficial, como o formulário \"Pergunte a um bibliotecário\" da sua biblioteca. Preencha-o até ao botão Enviar sem o enviar e mostre quais são os campos obrigatórios.",
          youCanNow: "preencher corretamente um formulário na internet e guardar a prova de que o enviou.",
          quickCheck: [
            { objective: "O4", q: "Porque ter um endereço de email que vê muitas vezes antes de preencher formulários?", options: ["Os formulários não abrem sem email", "Torna o formulário mais curto", "A maioria dos sites envia as confirmações para o seu email", "Substitui o seu número de identificação"], answer: 2, why: "A maioria dos sites envia as confirmações e as novidades para o seu email." },
            { objective: "O4", q: "Chegou à última página de um pedido de apoio social. O que faz antes de carregar em Enviar?", options: ["Fecha o navegador", "Revê todas as páginas", "Salta os campos obrigatórios", "Começa um pedido novo"], answer: 1, why: "Rever todas as páginas apanha os erros antes de enviar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Digitalizar e carregar documentos",
          minutes: 5,
          goal: "Digitalizar um documento em papel com o telefone e guardá-lo em PDF com um nome claro.",
          text: [
            "Muitos formulários pedem para carregar documentos: um currículo, uma carta, um comprovativo de morada. Pode digitalizar com o telefone. No iPhone, as aplicações Notas e Ficheiros têm uma opção para digitalizar. No Android, a aplicação Google Drive tem um botão Digitalizar. Procure um ícone de câmara ou de digitalizar.",
            "Para uma boa digitalização: ponha o papel plano numa superfície escura, use boa luz, segure o telefone direito por cima e deixe a aplicação cortar as margens. Guarde em PDF.",
            "Dê ao ficheiro um nome claro, como \"Jordan-Lee-Resume-2026.pdf\" (Resume quer dizer currículo), e não \"IMG_2034\". Carregue documentos de identidade ou privados só em sites oficiais, e apague as cópias dos computadores partilhados ou da biblioteca quando acabar."
          ],
          steps: ["Abra uma ferramenta para digitalizar: Notas ou Ficheiros (iPhone), Google Drive (Android).", "Ponha a página plana com boa luz.", "Segure o telefone direito por cima e digitalize.", "Guarde em PDF com um nome de ficheiro claro.", "Carregue só no site oficial; apague as cópias dos computadores partilhados."],
          words: [["Digitalizar", "fazer uma cópia digital clara de uma página em papel."], ["Carregar", "enviar um ficheiro do seu aparelho para um site."], ["Nome do ficheiro", "o nome com que um ficheiro é guardado, que ajuda você e os outros a encontrá-lo."]],
          slides: [
            { title: "Digitalize com o telefone", bullets: ["iPhone: aplicação Notas ou Ficheiros", "Android: botão Digitalizar do Google Drive"] },
            { title: "Uma digitalização clara", bullets: ["Página plana, superfície escura", "Boa luz, telefone direito por cima", "Guarde em PDF"] },
            { title: "Dê-lhe um nome, proteja-o", bullets: ["\"Jordan-Lee-Resume-2026.pdf\", não \"IMG_2034\"", "Carregue documentos privados só em sites oficiais", "Apague as cópias dos computadores partilhados"] }
          ],
          tryIt: "Digitalize com o telefone uma página de prática (uma carta que escreveu, não um documento de identidade verdadeiro). Guarde-a em PDF e dê-lhe um nome de ficheiro claro.",
          youCanNow: "digitalizar um documento em papel com o telefone e guardá-lo num PDF com um nome claro, pronto a carregar.",
          quickCheck: [
            { objective: "O5", q: "Que nome de ficheiro é melhor para carregar uma carta?", options: ["IMG_2034", "scan", "document1", "Jordan-Lee-Landlord-Letter-2026.pdf"], answer: 3, why: "Um nome claro diz de quem é o documento e o que é." },
            { objective: "O5", q: "Digitalizou um documento e carregou-o a partir de um computador da biblioteca. O que faz a seguir?", options: ["Deixa-o na pasta Transferências", "Apaga as cópias do computador", "Muda o nome para IMG_1", "Envia-o por email a toda a gente que conhece"], answer: 1, why: "Apague as cópias dos documentos privados dos computadores partilhados ou da biblioteca quando acabar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "A sua pegada digital e a sua privacidade",
          minutes: 5,
          goal: "Verificar e reforçar o que os outros podem ver sobre você na internet.",
          text: [
            "A sua pegada digital é tudo o que há sobre você na internet: publicações, fotos, comentários e o que os outros publicam sobre você. Os empregadores, os senhorios e as escolas muitas vezes pesquisam o nome de uma pessoa. As publicações podem ficar na internet mesmo depois de as apagar, porque outros podem fazer capturas de ecrã ou partilhá-las.",
            "Pesquise o seu próprio nome num motor de pesquisa e veja o que aparece. Em cada aplicação de rede social, abra as definições e procure Privacidade. Escolha quem pode ver as suas publicações, quem pode identificá-lo e se desconhecidos lhe podem enviar mensagens.",
            "Pense antes de publicar: ficaria à vontade se um futuro chefe, a sua família ou o seu agente de liberdade condicional ou de pena suspensa visse isto? Não publique a sua morada, os seus planos de viagem, documentos de identidade nem nada que possa ser usado para alguém fingir ser você."
          ],
          steps: ["Pesquise o seu nome completo entre aspas.", "Abra as definições de Privacidade de cada aplicação social.", "Limite quem vê as publicações, quem o identifica e quem lhe envia mensagens.", "Apague ou esconda as publicações que não gostaria que um empregador visse.", "Pense antes de cada nova publicação."],
          words: [["Pegada digital", "tudo o que há sobre você na internet, publicado por você ou por outros."], ["Definições de privacidade", "escolhas numa aplicação sobre quem pode ver as suas informações."], ["Identificar (marcar)", "ligar o nome ou a conta de uma pessoa a uma publicação ou foto."]],
          slides: [
            { title: "A sua pegada digital", bullets: ["Publicações, fotos, comentários", "O que os outros publicam sobre você", "Empregadores e senhorios vão ver"] },
            { title: "Verifique-se a si mesmo", bullets: ["Pesquise o seu nome entre aspas", "Abra Privacidade em cada aplicação", "Limite quem vê, quem o identifica e quem lhe escreve"] },
            { title: "Pense antes de publicar", bullets: ["Um futuro chefe ficaria bem a ver isto?", "Nada de morada, planos de viagem ou fotos de documentos"] }
          ],
          tryIt: "Tarefa final: encontre o site oficial de um serviço de que precisa e prove que é oficial, encontre o formulário ou os passos, digitalize uma página de prática para um PDF com um nome claro, depois pesquise o seu próprio nome e reforce uma definição de privacidade.",
          youCanNow: "fazer uma tarefa real pela internet mantendo seguras as suas informações privadas e a sua reputação.",
          quickCheck: [
            { objective: "O6", q: "Porque é que uma publicação pode ficar na internet depois de a apagar?", options: ["Outros podem ter feito uma captura de ecrã ou tê-la partilhado", "Apagar nunca funciona em nenhuma aplicação", "A biblioteca guarda uma cópia", "Os motores de pesquisa imprimem-na"], answer: 0, why: "Outras pessoas podem fazer uma captura de ecrã ou partilhar uma publicação antes de você a apagar." },
            { objective: "O6", q: "Desconhecidos não param de lhe enviar mensagens numa aplicação de rede social. O que faz?", options: ["Publica a sua morada para eles o conhecerem", "Apaga a sua conta de email", "Abre as definições de Privacidade da aplicação e limita quem lhe pode enviar mensagens", "Responde a todos"], answer: 2, why: "As definições de privacidade deixam escolher quem lhe pode enviar mensagens, ver as suas publicações e identificá-lo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fazer coisas pela internet com segurança",
        questions: [
          { objective: "O4", q: "O que quer normalmente dizer uma estrela (*) ao lado de um campo de um formulário?", options: ["É opcional", "É obrigatório", "É um prémio", "É um anúncio"], answer: 1, why: "Uma estrela marca um campo obrigatório." },
          { objective: "O4", q: "Depois de enviar um pedido pela internet, deve:", options: ["Fechar logo o separador", "Guardar o número de confirmação ou uma captura de ecrã", "Enviá-lo mais cinco vezes", "Apagar o seu email"], answer: 1, why: "A confirmação prova que o enviou." },
          { objective: "O5", q: "Que nome de ficheiro é melhor para carregar?", options: ["IMG_2034.jpg", "scan.pdf", "Jordan-Lee-Resume-2026.pdf", "asdf.pdf"], answer: 2, why: "Um nome claro ajuda você e quem o lê a encontrá-lo." },
          { objective: "O5", q: "Como pode digitalizar uma página com um telefone Android?", options: ["Liga o modo de avião", "Liga para a biblioteca", "Usa a calculadora", "Com o botão Digitalizar do Google Drive"], answer: 3, why: "O Google Drive no Android tem um botão Digitalizar." },
          { objective: "O6", q: "Um amigo identifica-o numa foto embaraçosa. O que pode ajudar?", options: ["Ignorar as definições de privacidade", "Publicar a sua morada", "Apagar o seu email", "Usar as definições de privacidade para controlar quem o pode identificar"], answer: 3, why: "As definições de privacidade controlam quem o pode identificar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Literacia Digital",
    questions: [
      { objective: "O3", q: "Literacia digital quer dizer:", options: ["Escrever muito depressa", "Ter o telefone mais novo", "Ser capaz de encontrar, avaliar e usar informações e serviços na internet", "Só jogar jogos"], answer: 2, why: "Trata-se de usar bem e com segurança as informações e os serviços." },
      { objective: "O1", q: "Um bom lugar gratuito para ter acesso à internet e pedir ajuda é:", options: ["Um link numa SMS", "O Wi-Fi de um desconhecido", "Um anúncio que aparece no ecrã", "Uma biblioteca pública"], answer: 3, why: "As bibliotecas oferecem computadores e ajuda de graça." },
      { objective: "O1", q: "Onde pode ver os dados atuais do Lifeline?", options: ["Em qualquer anúncio", "Num comentário numa rede social", "lifelinesupport.org", "Numa SMS de um desconhecido"], answer: 2, why: "O Lifeline Support é o site oficial do programa." },
      { objective: "O1", q: "Num computador público NÃO deve:", options: ["Ler as notícias", "Usar o banco", "Procurar ofertas de emprego", "Ver o horário da biblioteca"], answer: 1, why: "Não use o banco em computadores partilhados." },
      { objective: "O2", q: "Qual é a melhor pesquisa?", options: ["\"Preciso de ajuda com o meu documento que perdi\"", "\"Ohio BMV replace ID\"", "\"documento\"", "\"ajuda\""], answer: 1, why: "Palavras-chave com um estado encontram a página depressa." },
      { objective: "O2", q: "Acrescentar site:.gov a uma pesquisa:", options: ["Custa dinheiro", "Mostra só anúncios", "Apaga o seu histórico", "Mostra só sites do governo dos EUA"], answer: 3, why: "Limita os resultados aos sites .gov." },
      { objective: "O2", q: "Porque saltar os anúncios no topo dos resultados de pesquisa?", options: ["São sempre o site oficial", "Podem ser falsos ou cobrar por serviços gratuitos", "São mais lentos", "É ilegal clicar neles"], answer: 1, why: "Os anúncios são pagos e nem sempre são oficiais." },
      { objective: "O3", q: "Que pergunta o ajuda a avaliar um site?", options: ["A letra é grande?", "De que cor é?", "Quem o fez?", "Quantas imagens tem?"], answer: 2, why: "Saber a fonte diz-lhe se pode confiar." },
      { objective: "O3", q: "O endereço de um site troca uma letra do nome de uma empresa verdadeira. Provavelmente é:", options: ["O site oficial", "Um site falso parecido", "Um site do governo", "Uma biblioteca"], answer: 1, why: "Os endereços parecidos são um truque comum." },
      { objective: "O3", q: "A informação falsa espalhada de propósito chama-se:", options: ["Uma pegada", "Desinformação involuntária", "Uma confirmação", "Desinformação"], answer: 3, why: "A desinformação é de propósito; a desinformação involuntária é por engano." },
      { objective: "O3", q: "Anda a circular uma foto chocante. Antes de a partilhar, deve:", options: ["Partilhá-la depressa", "Verificar em fontes de notícias de confiança", "Acrescentar a sua morada", "Imprimi-la"], answer: 1, why: "Pode ser falsa ou feita com IA." },
      { objective: "O4", q: "Antes de começar um formulário longo na internet, deve:", options: ["Juntar os dados e os documentos de que ele precisa", "Fechar todas as janelas", "Desligar a internet", "Adivinhar todas as respostas"], answer: 0, why: "Estar preparado evita erros e que a sessão expire." },
      { objective: "O4", q: "No computador, que tecla passa para a caixa seguinte de um formulário?", options: ["Tab", "Escape", "Delete", "Print Screen"], answer: 0, why: "A tecla Tab passa para o campo seguinte." },
      { objective: "O4", q: "Um número de confirmação é:", options: ["Um código que prova que o seu formulário foi recebido", "A sua palavra-passe", "O seu número de identificação", "Um anúncio"], answer: 0, why: "Prova que o formulário foi enviado." },
      { objective: "O4", q: "Onde é seguro escrever o seu número de identificação?", options: ["Só no site oficial", "Em qualquer site que veio de um anúncio", "Numa resposta a uma SMS", "Numa publicação numa rede social"], answer: 0, why: "Os números privados vão só para sites oficiais." },
      { objective: "O5", q: "No iPhone, que aplicações podem digitalizar um documento?", options: ["Notas ou Ficheiros", "Calculadora", "Relógio", "Meteorologia"], answer: 0, why: "As aplicações Notas e Ficheiros têm uma opção para digitalizar." },
      { objective: "O5", q: "Para uma digitalização clara, deve:", options: ["Pôr a página plana com boa luz", "Amarrotar a página", "Usar um quarto escuro", "Abanar o telefone"], answer: 0, why: "Papel plano e boa luz dão uma digitalização legível." },
      { objective: "O6", q: "A sua pegada digital é:", options: ["Tudo o que há sobre você na internet", "O número dos seus sapatos", "A bateria do seu telefone", "Um tipo de palavra-passe"], answer: 0, why: "Inclui as suas publicações e o que os outros publicam sobre você." },
      { objective: "O6", q: "Porque pesquisar o seu próprio nome?", options: ["Para ver o que os empregadores ou senhorios podem encontrar", "Para ganhar dinheiro de graça", "Para apagar a internet", "Para mudar a sua palavra-passe"], answer: 0, why: "Mostra a sua reputação na internet." },
      { objective: "O6", q: "O que é seguro publicar para todos verem?", options: ["Uma foto do seu documento de identidade", "A morada da sua casa", "Que terminou um curso de formação", "As datas da sua viagem enquanto está fora"], answer: 2, why: "Boas notícias não fazem mal; documentos, moradas e planos de viagem põem você em risco." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 3, 4, 6, 7, 9, 11, 14, 15, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Encontrar o site oficial",
        objective: "O2",
        notYet: "O site encontrado é um anúncio, um site parecido ou não é o serviço certo.",
        meets: "O site oficial do serviço é encontrado pela pesquisa, saltando os anúncios.",
        exceeds: "Também encontra a página exata com o formulário ou os passos em poucos cliques."
      },
      {
        name: "Verificar o site",
        objective: "O3",
        notYet: "Não dá nenhuma razão para confiar no site.",
        meets: "Mostra como o site foi verificado, por exemplo um endereço .gov e a página Sobre nós.",
        exceeds: "Também verifica uma segunda fonte de confiança ou a data em que a página foi atualizada."
      },
      {
        name: "Digitalização e nome do ficheiro",
        objective: "O5",
        notYet: "A digitalização está desfocada ou cortada, ou o ficheiro tem um nome como IMG_2034.",
        meets: "Uma digitalização em PDF clara de um documento de prática, com um nome de ficheiro claro.",
        exceeds: "A digitalização está bem cortada e as cópias foram apagadas de qualquer computador partilhado."
      },
      {
        name: "Manter seguras as informações privadas",
        objective: "O6",
        notYet: "Foi digitalizado um documento de identidade verdadeiro, ou as três linhas não dizem nada sobre privacidade.",
        meets: "Três linhas explicam como o site foi verificado e como as informações privadas foram mantidas seguras.",
        exceeds: "Também indica uma definição de privacidade verificada ou mudada numa aplicação de rede social."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem ter feito um pedido real pela internet, por exemplo de emprego, de documento de identidade ou de apoio social, nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que dizem ter evitado um site falso, uma burla ou uma publicação falsa porque a verificaram",
      "Alunos que seguem para outro curso, como o curso \"E-mail e Comunicação pela Internet\" ou um curso de procura de emprego"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com câmara, ou um computador da biblioteca ou do centro de emprego com internet",
      "Um endereço de email gratuito que o aluno vê muitas vezes",
      "Um documento de prática para digitalizar, como uma carta ou uma página que o aluno escreveu (nunca um documento de identidade verdadeiro)",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Muitos alunos não têm aparelho; dê o curso numa biblioteca ou numa sala de informática, ou junte os alunos em pares para cada par ter um telefone.",
      "Na aula, use só documentos de prática para digitalizar e carregar, e lembre aos alunos que apaguem as cópias dos computadores partilhados.",
      "Aos alunos em liberdade condicional ou com pena suspensa, lembre que cumpram as regras sobre a internet ou as redes sociais das suas condições antes de mudarem as contas.",
      "Leve capturas de ecrã de uma página de pesquisa real com anúncios para os alunos praticarem a distinguir os anúncios dos resultados verdadeiros.",
      "Mostre aos alunos onde ficam os computadores e o Wi-Fi gratuitos mais próximos e como pedir ajuda aos funcionários da biblioteca."
    ]
  }
};
