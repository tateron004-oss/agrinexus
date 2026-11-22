"use strict";

// Koach Learn course (Portuguese translation of shared/internet-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FTC_TECH = { name: "FTC: Como reconhecer, evitar e denunciar burlas de falso apoio técnico", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" };

module.exports = {
  id: "internet-basics-pt",
  lang: "pt",
  translationOf: "internet-basics",
  category: "Seniors and Technology",
  name: "Noções Básicas de Internet",
  skills: "Ligar-se ao Wi-Fi, Usar um navegador de internet, Abrir e trocar de separador, Pesquisar na internet, Ler um endereço de site com segurança, Guardar os sites favoritos",
  outcome: "ligar um telefone ou computador ao Wi-Fi, abrir um navegador de internet, ir a um site pelo seu endereço, pesquisar o que precisa, distinguir um endereço seguro de um perigoso e guardar um site que usa muitas vezes para voltar a ele com um só toque.",
  about: [
    "A internet permite ver o tempo, saber o horário de um consultório médico, ler as notícias, consultar o horário dos autocarros e ver fotografias da família. Este curso começa do início e não pede nenhuma experiência.",
    "No Capítulo 1 vai aprender o que é a internet, como se ligar ao Wi-Fi e como usar um navegador de internet. No Capítulo 2 vai pesquisar coisas, aprender a ler um endereço de site para evitar sites falsos e janelas assustadoras, e guardar os sites que mais usa.",
    "Cada lição dura cerca de cinco minutos. Tenha um telefone, tablet ou computador por perto para experimentar cada passo. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Planeie um passeio simples. Ligue-se ao Wi-Fi, abra um navegador de internet e pesquise um lugar que gostaria de visitar, como um parque, um museu ou uma biblioteca. Abra o site oficial, veja o horário e a morada, abra um segundo separador com o tempo de amanhã, aumente o texto se precisar e guarde o site oficial nos favoritos para o encontrar outra vez com um só toque.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que são novos na internet ou que só a usam através de uma ou duas aplicações: pessoas idosas, quem cuida delas, pessoas que voltam à comunidade, recém-chegados e qualquer pessoa que queira usar a internet com confiança.",
    startingPoint: "Sabem ligar um telefone, tablet ou computador e tocar ou clicar. Muitos nunca se ligaram sozinhos a uma rede Wi-Fi, nunca escreveram um endereço de site, nunca usaram separadores ou favoritos, nem verificaram se um endereço de site é verdadeiro.",
    gap: "Horários, mapas, o tempo, saúde, apoios e compras estão hoje na internet. Quem não consegue ligar-se, pesquisar e distinguir um site verdadeiro de um falso depende de outras pessoas, perde informação, gasta os dados do telefone ou cai em janelas falsas e em sites que imitam os verdadeiros.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; palavras como router, navegador, separador e domínio são explicadas",
      "Aparelhos: um telefone, tablet ou computador; os passos são dados para iPhone, Android e computadores",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total",
      "Custo: Wi-Fi gratuito em casa, numa biblioteca ou num café; nenhuma aplicação paga",
      "Segurança: nada de banco nem de informações privadas em Wi-Fi público durante a prática"
    ],
    prerequisites: "Nenhum. Os cursos \"Usar um Smartphone e um Tablet\" ou \"Competências Básicas de Informática\" ajudam quem nunca usou um aparelho."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Sem apontamentos", action: "explicar o que são a internet e a web e as duas principais formas de um aparelho se ligar", standard: "dizendo corretamente o que são o Wi-Fi e os dados móveis e quando o Wi-Fi poupa os dados do seu tarifário" },
    { id: "O2", condition: "Com o nome de uma rede e a sua palavra-passe", action: "ligar-se a uma rede Wi-Fi no seu telefone, tablet ou computador e dizer o que evitar no Wi-Fi público", standard: "ligado sem ajuda e dizendo que o banco e as informações privadas são coisas a evitar" },
    { id: "O3", condition: "Usando um navegador de internet", action: "abrir um site escrevendo o seu endereço e depois usar o botão de voltar, os separadores e o zoom", standard: "com o site certo aberto, um segundo separador aberto e o texto aumentado" },
    { id: "O4", condition: "Com uma coisa que precisa de encontrar", action: "pesquisar com algumas palavras-chave e escolher um resultado útil que não seja um anúncio", standard: "lendo o endereço do site antes de abrir o resultado" },
    { id: "O5", condition: "Com endereços de sites, uma janela assustadora e um site que usa muitas vezes", action: "distinguir um endereço seguro de um perigoso, fechar janelas falsas e guardar o site oficial nos favoritos para voltar a ele com segurança", standard: "escolhendo bem todas as vezes e abrindo outra vez o site guardado com um só toque" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Entrar na internet",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a internet",
          minutes: 4,
          goal: "Explicar a internet, a web e como um aparelho se liga.",
          text: [
            "A internet é uma rede enorme que liga computadores e telefones do mundo inteiro para partilharem informação. A World Wide Web, ou a web, é a parte que você visita com um navegador de internet: sites com páginas, imagens e vídeos. O e-mail e as videochamadas também passam pela internet.",
            "O seu aparelho liga-se de duas formas principais. O Wi-Fi é uma ligação sem fios que vem de uma caixa chamada router, em casa, numa biblioteca ou num café. Os dados móveis vêm das antenas da sua operadora de telemóvel e fazem parte do seu tarifário.",
            "O Wi-Fi de casa normalmente não gasta os dados do seu tarifário, por isso é uma boa escolha para vídeos e descargas grandes."
          ],
          words: [["Internet", "uma rede mundial que liga computadores e telefones."], ["Web (World Wide Web)", "os sites que você visita com um navegador."], ["Router", "a caixa que envia o sinal de Wi-Fi."], ["Dados móveis", "internet que vem das antenas da sua operadora, parte do seu tarifário."]],
          slides: [
            { title: "A internet e a web", bullets: ["Internet: uma rede mundial de aparelhos", "Web: os sites que visita com um navegador", "O e-mail e as videochamadas também usam a internet"] },
            { title: "Duas formas de se ligar", bullets: ["Wi-Fi: sem fios, vem de um router", "Dados móveis: das antenas, parte do seu tarifário"] },
            { title: "Dica", bullets: ["Use o Wi-Fi de casa para vídeos e descargas grandes", "Assim poupa os dados do seu tarifário"] }
          ],
          tryIt: "No seu telefone ou tablet, olhe para o topo do ecrã. Encontre o símbolo do Wi-Fi (linhas curvas) ou o símbolo dos dados móveis (barras ou letras como 5G). Qual está ligado agora?",
          youCanNow: "explicar o que são a internet e a web, e dizer se o seu aparelho está no Wi-Fi ou nos dados móveis.",
          quickCheck: [
            { objective: "O1", q: "O que são os dados móveis?", options: ["Uma caixa na sua casa", "Uma lista de sites que guardou", "Internet que vem das antenas da sua operadora, parte do seu tarifário", "Um tipo de navegador de internet"], answer: 2, why: "Os dados móveis vêm das antenas e fazem parte do seu tarifário." },
            { objective: "O1", q: "Quer ver um vídeo longo no telefone em casa. Que ligação usa?", options: ["O Wi-Fi de casa, para não gastar os dados do seu tarifário", "Os dados móveis, porque são sempre grátis", "Os vídeos não precisam de ligação", "Um favorito"], answer: 0, why: "O Wi-Fi de casa normalmente não gasta os dados do seu tarifário." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ligar-se ao Wi-Fi",
          minutes: 5,
          goal: "Ligar-se a uma rede Wi-Fi num telefone, tablet ou computador.",
          text: [
            "Para se ligar ao Wi-Fi, precisa do nome da rede e da sua palavra-passe. Em casa, muitas vezes os dois estão num autocolante no router. Numa biblioteca ou num café, pergunte aos funcionários ou procure um aviso.",
            "Num iPhone ou iPad: abra Definições, toque em Wi-Fi, toque no nome da rede e escreva a palavra-passe. No Android: abra Definições, toque em Rede e internet ou Ligações, depois em Wi-Fi, escolha a rede e escreva a palavra-passe. Num computador: clique no símbolo do Wi-Fi perto do relógio, escolha a rede e escreva a palavra-passe.",
            "O Wi-Fi público é prático, mas outras pessoas também o usam. No Wi-Fi público, evite o banco e não escreva informações privadas. Ligue-se só a redes cujo nome os funcionários lhe deram, e não a redes com nomes estranhos."
          ],
          steps: ["Encontre o nome da rede e a palavra-passe (autocolante do router, funcionários ou um aviso).", "Abra Definições e depois Wi-Fi (num computador, clique no símbolo do Wi-Fi perto do relógio).", "Toque ou clique no nome da rede.", "Escreva a palavra-passe com cuidado; as letras maiúsculas contam.", "Espere que o símbolo do Wi-Fi apareça no topo."],
          words: [["Nome da rede", "o nome que uma ligação Wi-Fi mostra na lista, também chamado SSID."], ["Palavra-passe do Wi-Fi", "o código que escreve para se ligar a uma rede Wi-Fi."], ["Wi-Fi público", "Wi-Fi partilhado por muitas pessoas em lugares como bibliotecas e cafés."]],
          slides: [
            { title: "Precisa de duas coisas", bullets: ["O nome da rede", "A palavra-passe (autocolante do router, funcionários ou um aviso)"] },
            { title: "Como se ligar", bullets: ["Telefone ou tablet: Definições, depois Wi-Fi", "Computador: símbolo do Wi-Fi perto do relógio", "Escolha a rede, escreva a palavra-passe"] },
            { title: "Segurança no Wi-Fi público", bullets: ["Nada de banco nem de informações privadas", "Ligue-se só à rede que os funcionários indicaram"] }
          ],
          tryIt: "Abra as definições do Wi-Fi e encontre a lista de redes. Se estiver em casa ou numa biblioteca, ligue-se à rede certa. Confirme que o símbolo do Wi-Fi aparece no topo.",
          youCanNow: "ligar-se a uma rede Wi-Fi e usar o Wi-Fi público com segurança.",
          quickCheck: [
            { objective: "O2", q: "De que duas coisas precisa para se ligar a uma rede Wi-Fi?", options: ["O seu e-mail e o seu número de telefone", "O nome da rede e a sua palavra-passe", "Um navegador e um favorito", "Um separador e um motor de pesquisa"], answer: 1, why: "Escolhe a rede pelo nome e escreve a sua palavra-passe." },
            { objective: "O2", q: "Num café, vê duas redes: uma que os funcionários indicaram e outra chamada \"FREE_FAST_WIFI_123\". O que faz?", options: ["Liga-se à estranha porque diz grátis", "Liga-se às duas ao mesmo tempo", "Escreve os dados do banco para testar a estranha", "Liga-se só à rede que os funcionários indicaram"], answer: 3, why: "Ligue-se só a redes cujo nome os funcionários lhe deram, e não a redes com nomes estranhos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar um navegador de internet",
          minutes: 5,
          goal: "Abrir um site pelo seu endereço e andar entre páginas com o botão de voltar e os separadores.",
          text: [
            "Um navegador de internet é a aplicação que usa para visitar sites. Os mais comuns são o Chrome, o Safari, o Edge e o Firefox. No topo fica a barra de endereço, uma caixa comprida onde escreve um endereço de site como weather.gov e carrega em Enter ou Ir.",
            "Botões úteis: a seta para trás volta à página onde estava; a seta em círculo recarrega a página. Os separadores deixam ter várias páginas abertas ao mesmo tempo, como pastas em cima de uma mesa. Abra um separador novo com o botão mais (+) e mude de um para outro tocando ou clicando num separador.",
            "Se as palavras forem pequenas demais, pode usar o zoom. Num computador, carregue em Ctrl e + ao mesmo tempo (Command e + num Mac); Ctrl e - diminui. Num telefone, afaste dois dedos no ecrã."
          ],
          steps: ["Abra o navegador (Chrome, Safari, Edge ou Firefox).", "Toque na barra de endereço no topo.", "Escreva um endereço de site, como weather.gov, e carregue em Enter ou Ir.", "Use a seta para trás para voltar.", "Carregue em + para abrir um separador novo.", "Zoom: Ctrl e + (Command e + no Mac), ou afaste dois dedos num telefone."],
          words: [["Navegador de internet", "a aplicação que usa para visitar sites, como o Chrome, o Safari, o Edge ou o Firefox."], ["Barra de endereço", "a caixa no topo do navegador onde escreve um endereço de site."], ["Separador", "uma página aberta no navegador; pode ter várias abertas ao mesmo tempo."], ["Zoom", "aumentar ou diminuir o que está no ecrã."]],
          slides: [
            { title: "O navegador", bullets: ["Chrome, Safari, Edge ou Firefox", "A barra de endereço fica no topo", "Escreva um endereço, carregue em Enter ou Ir"] },
            { title: "Botões úteis", bullets: ["Seta para trás: a página anterior", "Seta em círculo: recarregar", "+ abre um separador novo"] },
            { title: "Aumentar o texto", bullets: ["Computador: Ctrl e + (Command e + no Mac)", "Telefone: afaste dois dedos"] }
          ],
          tryIt: "Abra um navegador e escreva weather.gov na barra de endereço. Depois abra um separador novo e vá ao site da biblioteca da sua zona. Mude entre os dois separadores e aumente o texto num deles.",
          youCanNow: "abrir sites pelo seu endereço, usar o botão de voltar, mudar de separador e aumentar o texto.",
          quickCheck: [
            { objective: "O3", q: "Para que serve a seta em círculo num navegador?", options: ["Fecha o navegador", "Abre um separador novo", "Guarda um favorito", "Recarrega a página"], answer: 3, why: "A seta em círculo recarrega a página onde está." },
            { objective: "O3", q: "Está a ler uma receita e quer ver o tempo sem perder a receita. O que faz?", options: ["Abre um separador novo com o botão mais (+)", "Fecha a página da receita", "Desliga o Wi-Fi", "Reinicia o aparelho"], answer: 0, why: "Os separadores deixam ter várias páginas abertas ao mesmo tempo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Entrar na internet",
        questions: [
          { objective: "O1", q: "O que é a web?", options: ["Um tipo de cabo", "Só a casa de uma aranha", "A sua conta do telefone", "Os sites que visita com um navegador"], answer: 3, why: "A web são os sites que visita com um navegador." },
          { objective: "O2", q: "Onde está muitas vezes escrita a palavra-passe do Wi-Fi de casa?", options: ["No comando da televisão", "Num autocolante no router", "Na capa do telefone", "No jornal"], answer: 1, why: "Os routers muitas vezes têm o nome e a palavra-passe num autocolante." },
          { objective: "O2", q: "Num computador, onde costuma clicar para se ligar ao Wi-Fi?", options: ["No caixote do lixo", "No símbolo do Wi-Fi perto do relógio", "Na impressora", "Na câmara"], answer: 1, why: "O símbolo do Wi-Fi perto do relógio mostra as redes." },
          { objective: "O2", q: "Está no Wi-Fi de um café. O que deve evitar?", options: ["Ver o tempo", "Ler as notícias", "Usar o banco pela internet", "Procurar uma receita"], answer: 2, why: "O Wi-Fi público é partilhado, por isso evite o banco e os dados privados." },
          { objective: "O3", q: "Onde escreve um endereço de site como weather.gov?", options: ["Na câmara", "Numa mensagem SMS", "Na calculadora", "Na barra de endereço no topo do navegador"], answer: 3, why: "A barra de endereço leva-o a um site." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar coisas e ficar em segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pesquisar na internet",
          minutes: 5,
          goal: "Pesquisar uma coisa concreta e abrir um resultado útil.",
          text: [
            "Se não sabe o endereço de um site, pesquise-o. Escreva algumas palavras-chave na barra de endereço ou num site de pesquisa como o Google ou o Bing e carregue em Enter. Por exemplo: \"horário da biblioteca pública de Springfield\".",
            "A página de resultados mostra uma lista de links. Cada um tem um título azul, o endereço do site em letra pequena e uma descrição curta. Leia o endereço do site antes de tocar. Os resultados no topo marcados \"Patrocinado\" ou \"Anúncio\" são anúncios pagos.",
            "Também pode pesquisar com a voz. Toque no microfone da caixa de pesquisa e diga o que quer, como \"tempo amanhã\"."
          ],
          steps: ["Toque na barra de endereço ou numa caixa de pesquisa.", "Escreva algumas palavras-chave, como o lugar, a cidade e o que quer.", "Carregue em Enter ou no botão de pesquisa.", "Salte os resultados marcados Patrocinado ou Anúncio.", "Leia o endereço do site e depois toque no resultado que quer."],
          words: [["Pesquisar", "escrever palavras para encontrar páginas da internet sobre elas."], ["Resultados", "a lista de páginas da internet que a pesquisa encontra."], ["Link", "palavras ou uma imagem em que toca para ir para outra página."]],
          slides: [
            { title: "Pesquise com palavras-chave", bullets: ["\"horário da biblioteca pública de Springfield\"", "Escreva na barra de endereço ou no Google ou Bing"] },
            { title: "Ler os resultados", bullets: ["Título azul, endereço do site, descrição curta", "Patrocinado ou Anúncio = pago", "Leia o endereço antes de tocar"] },
            { title: "Use a sua voz", bullets: ["Toque no microfone", "Diga: \"tempo amanhã\""] }
          ],
          tryIt: "Pesquise o horário de um lugar perto de você, como uma farmácia ou um parque. Salte os anúncios, abra o resultado oficial e encontre o horário.",
          youCanNow: "pesquisar na internet e escolher um resultado útil que não seja um anúncio.",
          quickCheck: [
            { objective: "O4", q: "Numa página de resultados, o que mostra a letra pequena debaixo de cada título azul?", options: ["O endereço do site", "O tempo", "A sua palavra-passe", "O preço da página"], answer: 0, why: "Cada resultado mostra o endereço do site em letra pequena, para o ler antes de tocar." },
            { objective: "O4", q: "Tem as mãos ocupadas e quer saber o tempo de amanhã. O que faz?", options: ["Escreve uma história comprida na caixa de pesquisa", "Abre um favorito de um site de compras", "Toca no microfone da caixa de pesquisa e diz \"tempo amanhã\"", "Reinicia o telefone"], answer: 2, why: "Pode pesquisar com a voz tocando no microfone." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ler um endereço de site e evitar burlas",
          minutes: 5,
          goal: "Distinguir um endereço seguro de um perigoso e lidar com janelas assustadoras.",
          text: [
            "Um endereço de site tem uma parte principal, o domínio, logo antes da primeira barra simples, como irs.gov ou amazon.com. Essa parte principal diz quem gere o site. Os sites falsos usam nomes parecidos, como \"amaz0n-deals.com\" ou \"irs-refund.help\".",
            "Procure https e o símbolo de um cadeado no início do endereço. Quer dizer que a ligação é privada, mas os burlões também os podem ter, por isso o nome do domínio continua a ser o mais importante.",
            "Algumas janelas falsas dizem que o seu computador tem um vírus e dão um número de telefone para ligar. A FTC (a agência de proteção do consumidor dos Estados Unidos) diz que os avisos de segurança verdadeiros nunca pedem para ligar para um número, e que as empresas de tecnologia verdadeiras não ligam nem enviam SMS sobre um problema. Não ligue. Feche o separador ou o navegador; se não fechar, reinicie o aparelho. Se estiver preocupado, pergunte a alguém de confiança."
          ],
          steps: ["Encontre o domínio: o nome logo antes da primeira barra simples.", "Confirme que é o nome verdadeiro que esperava.", "Procure https e o cadeado, mas não confie só neles.", "Janela assustadora com um número de telefone? Não ligue.", "Feche o separador ou reinicie o aparelho.", "Denuncie burlas de falso apoio técnico em ReportFraud.ftc.gov."],
          words: [["Domínio", "o nome principal num endereço de site, que diz quem gere o site, como irs.gov."], ["Janela pop-up", "uma pequena janela que aparece de repente por cima de uma página."], ["Burla de falso apoio técnico", "um aviso ou chamada falsa que diz que o seu aparelho tem um problema, para ficar com o seu dinheiro ou com acesso ao aparelho."]],
          sources: [FTC_TECH],
          slides: [
            { title: "Encontre o domínio", bullets: ["O nome logo antes da primeira barra simples", "irs.gov é verdadeiro; irs-refund.help não é"] },
            { title: "O https e o cadeado", bullets: ["A ligação é privada", "Os burlões também os podem ter", "O nome do domínio é o mais importante"] },
            { title: "Janelas assustadoras (FTC)", bullets: ["Avisos verdadeiros nunca pedem para ligar", "Não ligue", "Feche o separador ou reinicie o aparelho"] }
          ],
          tryIt: "Olhe para três endereços de sites no seu ecrã ou no seu e-mail. Em cada um, aponte para o domínio e diga quem gere o site.",
          youCanNow: "ler um endereço de site para ver quem gere o site e lidar com segurança com janelas falsas de vírus.",
          quickCheck: [
            { objective: "O5", q: "Que parte de um endereço de site diz quem gere o site?", options: ["O https no início", "As palavras depois da primeira barra simples", "O domínio, logo antes da primeira barra simples", "O símbolo do cadeado"], answer: 2, why: "O domínio, como irs.gov, diz quem gere o site." },
            { objective: "O5", q: "Uma janela diz que o seu computador tem um vírus e mostra um número para ligar. Não fecha. O que faz?", options: ["Liga logo para o número", "Reinicia o aparelho e não liga", "Escreve o número do cartão para pagar uma reparação", "Deixa-a no ecrã durante dias"], answer: 1, why: "Os avisos de segurança verdadeiros nunca pedem para ligar; reinicie se a janela não fechar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Guardar os seus sites favoritos",
          minutes: 4,
          goal: "Guardar um site nos favoritos e abri-lo outra vez com um só toque.",
          text: [
            "Um favorito (também chamado marcador) guarda um site para poder voltar sem pesquisar outra vez. É a forma mais segura de voltar aos sites que usa muitas vezes, como o seu banco, a farmácia ou um site de notícias, porque evita os resultados de pesquisa falsos.",
            "Num computador, clique na estrela no fim da barra de endereço. Num iPhone ou iPad no Safari, toque no botão Partilhar e escolha Adicionar marcador. No Chrome num telefone, abra o menu (três pontos) e toque na estrela. Em muitos telefones também pode escolher \"Adicionar ao ecrã principal\" para criar um ícone como o de uma aplicação.",
            "Para abrir um favorito mais tarde, abra a lista de favoritos no menu do navegador, ou toque no ícone no ecrã principal."
          ],
          steps: ["Abra o site oficial que quer guardar.", "Computador: clique na estrela na barra de endereço.", "Safari no iPhone ou iPad: botão Partilhar e depois Adicionar marcador.", "Chrome num telefone: menu de três pontos e depois a estrela.", "Para o abrir mais tarde: vá a Favoritos no menu, ou toque no ícone do ecrã principal."],
          words: [["Favorito / marcador", "um link guardado para um site, para o abrir outra vez depressa."], ["Ecrã principal", "o ecrã principal de um telefone ou tablet, que mostra os ícones das aplicações."]],
          slides: [
            { title: "Porquê guardar nos favoritos?", bullets: ["Volta a um site com um só toque", "Evita os resultados de pesquisa falsos", "Ótimo para o banco, a farmácia, as notícias"] },
            { title: "Como guardar nos favoritos", bullets: ["Computador: a estrela na barra de endereço", "Safari: Partilhar e depois Adicionar marcador", "Chrome no telefone: três pontos e depois a estrela"] },
            { title: "Abrir outra vez", bullets: ["Favoritos no menu do navegador", "Ou toque no ícone do ecrã principal"] }
          ],
          tryIt: "Tarefa final: planeie um passeio. Pesquise um parque, museu ou biblioteca, abra o site oficial, veja o horário e a morada, abra o tempo de amanhã num segundo separador, aumente o texto se precisar e guarde o site oficial nos favoritos.",
          youCanNow: "entrar na internet sozinho, encontrar o que precisa, evitar sites falsos e guardar os seus sites favoritos.",
          quickCheck: [
            { objective: "O5", q: "Num computador, onde clica para guardar um site nos favoritos?", options: ["Na seta para trás", "Na seta em círculo", "No botão mais (+)", "Na estrela no fim da barra de endereço"], answer: 3, why: "A estrela no fim da barra de endereço guarda um favorito." },
            { objective: "O5", q: "Todos os meses encomenda medicamentos no site da sua farmácia. Como volta a ele com segurança?", options: ["Pesquisa todas as vezes e toca no primeiro anúncio", "Guarda o site oficial nos favoritos e abre-o a partir dos favoritos", "Clica num link de uma mensagem SMS", "Adivinha o endereço todas as vezes"], answer: 1, why: "Um favorito guardado a partir do site oficial evita os resultados de pesquisa falsos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Encontrar coisas e ficar em segurança",
        questions: [
          { objective: "O4", q: "Que pesquisa é a mais clara?", options: ["\"lugar\"", "\"horário biblioteca Springfield\"", "\"aberto?\"", "\"ajude-me a encontrar isso por favor agora\""], answer: 1, why: "Algumas palavras-chave com o lugar e o que quer funcionam melhor." },
          { objective: "O5", q: "Em www.irs.gov/refunds, qual é o domínio?", options: ["www", "refunds", "irs.gov", "https"], answer: 2, why: "O domínio é o nome logo antes da primeira barra simples." },
          { objective: "O5", q: "Uma janela diz que o seu computador tem um vírus e para ligar já para um número. O que faz?", options: ["Liga para o número", "Paga com um cartão-presente", "Dá-lhes acesso remoto ao aparelho", "Não liga; fecha o separador ou reinicia"], answer: 3, why: "A FTC diz que os avisos verdadeiros nunca pedem para ligar para um número." },
          { objective: "O5", q: "Um site mostra https e um cadeado. Isso quer dizer:", options: ["Que é um site do governo", "Que é de certeza honesto", "Que a ligação é privada, mas mesmo assim verifica o domínio", "Que é grátis"], answer: 2, why: "Os burlões também podem ter https; o domínio é o mais importante." },
          { objective: "O5", q: "Qual é a forma mais segura de voltar ao site da sua farmácia todos os meses?", options: ["Clicar num anúncio", "Um favorito que guardou a partir do site oficial", "Um link numa SMS de um desconhecido", "Adivinhar o endereço"], answer: 1, why: "Um favorito evita resultados de pesquisa e links falsos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Internet",
    questions: [
      { objective: "O1", q: "A internet é:", options: ["Um único site", "Um canal de televisão", "Uma lista telefónica", "Uma rede mundial que liga computadores e telefones"], answer: 3, why: "Liga aparelhos do mundo inteiro." },
      { objective: "O1", q: "O Wi-Fi vem de:", options: ["Uma bateria", "A televisão", "Um router", "Uma impressora"], answer: 2, why: "Um router envia o sinal de Wi-Fi." },
      { objective: "O1", q: "Os dados móveis são:", options: ["Um navegador", "Wi-Fi grátis na biblioteca", "Um tipo de e-mail", "Internet das antenas, parte do seu tarifário"], answer: 3, why: "Os dados móveis vêm através da sua operadora." },
      { objective: "O1", q: "Porquê usar o Wi-Fi de casa para vídeos?", options: ["Os vídeos só funcionam no Wi-Fi", "Normalmente poupa os dados do seu tarifário", "É obrigatório por lei", "Deixa o telefone mais leve"], answer: 1, why: "O Wi-Fi de casa normalmente não gasta os dados do seu tarifário." },
      { objective: "O2", q: "Para se ligar ao Wi-Fi precisa de:", options: ["Uma impressora", "O seu número do banco", "O nome da rede e a palavra-passe", "Um telefone novo"], answer: 2, why: "Com o nome e a palavra-passe consegue ligar-se." },
      { objective: "O2", q: "Num iPhone, o Wi-Fi está em:", options: ["Relógio", "Fotografias", "Calculadora", "Definições"], answer: 3, why: "Definições, depois Wi-Fi." },
      { objective: "O2", q: "No Wi-Fi público, o que é má ideia?", options: ["Ler as notícias", "Usar o banco pela internet", "Ver um mapa", "Procurar um horário"], answer: 1, why: "O Wi-Fi público é partilhado; evite tarefas privadas." },
      { objective: "O3", q: "Qual destes é um navegador de internet?", options: ["Calculadora", "Chrome", "Câmara", "Relógio"], answer: 1, why: "O Chrome, o Safari, o Edge e o Firefox são navegadores." },
      { objective: "O3", q: "Para que serve a seta para trás num navegador?", options: ["Apaga o site", "Desliga o computador", "Vai para a página onde estava antes", "Imprime a página"], answer: 2, why: "A seta para trás volta à página anterior." },
      { objective: "O3", q: "Os separadores deixam:", options: ["Desligar o Wi-Fi", "Pagar contas automaticamente", "Carregar a bateria", "Ter várias páginas abertas ao mesmo tempo"], answer: 3, why: "Cada separador é uma página aberta." },
      { objective: "O3", q: "As palavras de uma página estão pequenas demais num computador. Carregue em:", options: ["Delete", "Ctrl e + (Command e + no Mac)", "Escape", "Shift e 0"], answer: 1, why: "Ctrl e + aumenta o zoom." },
      { objective: "O3", q: "Num telefone, como aumenta uma página?", options: ["Afastando dois dedos no ecrã", "Abanando o telefone", "Desligando-o", "Carregando no botão do volume"], answer: 0, why: "Afastar dois dedos aumenta o zoom." },
      { objective: "O4", q: "Os resultados de pesquisa marcados \"Patrocinado\" são:", options: ["Anúncios pagos", "Sempre o site oficial", "Páginas do governo", "Avisos de vírus"], answer: 0, why: "Patrocinado quer dizer que alguém pagou por ele." },
      { objective: "O4", q: "Antes de tocar num resultado de pesquisa, deve:", options: ["Ler o endereço do site", "Fechar o navegador", "Reiniciar o telefone", "Tocar em todos os resultados"], answer: 0, why: "O endereço mostra quem gere o site." },
      { objective: "O4", q: "Como pode pesquisar sem escrever?", options: ["Toca no microfone e fala", "Abana o telefone", "Usa a calculadora", "Aumenta o volume"], answer: 0, why: "A pesquisa por voz deixa dizer o que quer." },
      { objective: "O5", q: "Que endereço é mais provável ser falso?", options: ["irs.gov", "amazon.com", "amaz0n-deals.com", "weather.gov"], answer: 2, why: "Um zero no lugar de um O é um truque para imitar o nome verdadeiro." },
      { objective: "O5", q: "O https e o cadeado dizem-lhe que:", options: ["A ligação é privada", "O site é de certeza honesto", "O site é grátis", "O site é um banco"], answer: 0, why: "Protegem a ligação, não garantem honestidade." },
      { objective: "O5", q: "Um aviso de segurança verdadeiro no seu computador vai:", options: ["Nunca pedir para ligar para um número de telefone", "Pedir cartões-presente", "Pedir para ligar já", "Pedir a palavra-passe do banco"], answer: 0, why: "A FTC diz que os avisos verdadeiros nunca pedem para ligar para um número." },
      { objective: "O5", q: "Uma janela não fecha. O que faz?", options: ["Reinicia o aparelho", "Liga para o número que mostra", "Escreve a sua palavra-passe", "Paga a taxa"], answer: 0, why: "Reiniciar tira a janela com segurança." },
      { objective: "O5", q: "Um favorito é:", options: ["Um link guardado para um site", "Só um marcador de papel para livros", "Um vírus", "Uma palavra-passe"], answer: 0, why: "Os favoritos levam-no de volta a um site depressa." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      4,
      6,
      8,
      10,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Ligar-se ao Wi-Fi",
        objective: "O2",
        notYet: "O aparelho não está ligado, ou ligou-se a uma rede com um nome desconhecido.",
        meets: "O aparelho está ligado a uma rede Wi-Fi conhecida, sem ajuda.",
        exceeds: "Também explica o que evitar no Wi-Fi público."
      },
      {
        name: "Encontrar o site oficial",
        objective: "O4",
        notYet: "O site aberto é um anúncio ou não é o site do próprio lugar.",
        meets: "O site oficial do lugar é encontrado pela pesquisa, e o horário e a morada são encontrados.",
        exceeds: "O endereço do site foi lido e verificado antes de tocar."
      },
      {
        name: "Usar o navegador",
        objective: "O3",
        notYet: "Só abriu uma página, ou o aluno não conseguiu voltar à primeira página.",
        meets: "Um segundo separador mostra o tempo de amanhã, e o aluno muda entre os separadores.",
        exceeds: "Também aumenta o texto para um tamanho confortável e usa o botão de voltar."
      },
      {
        name: "Endereço seguro e favorito",
        objective: "O5",
        notYet: "Nenhum favorito, ou guardou nos favoritos um site de imitação ou de anúncio.",
        meets: "O site oficial está nos favoritos e é aberto outra vez com um só toque.",
        exceeds: "Também explica como o domínio mostra que o site é verdadeiro."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do plano de passeio",
      "Alunos que dizem ter usado a internet sozinhos para uma necessidade real, como horários, o tempo ou um site de saúde, nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que dizem ter fechado uma janela falsa ou evitado um site de imitação",
      "Alunos que passam a um curso seguinte, como \"E-mail e Comunicação pela Internet\" ou \"Noções Básicas de Literacia Digital\""
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, tablet ou computador em que o aluno possa praticar",
      "O nome de uma rede Wi-Fi e a sua palavra-passe (de casa, da biblioteca ou do próprio programa)",
      "Papel e caneta para anotar o horário e a morada do lugar",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Escreva no quadro o nome e a palavra-passe do Wi-Fi do programa, para os alunos se ligarem à rede certa e não a uma imitação.",
      "Junte os alunos por aparelho (iPhone, Android ou computador) para os passos no ecrã serem iguais ao que eles veem.",
      "Use um parque, biblioteca ou museu da zona para a tarefa do passeio, para o site oficial ser fácil de verificar.",
      "Mostre uma imagem de uma janela falsa de vírus para os alunos a reconhecerem, mas nunca abra um site de burla verdadeiro na aula.",
      "Vá devagar com os alunos mais velhos: deixe-os fazer cada toque sozinhos em vez de o fazer por eles."
    ]
  }
};
