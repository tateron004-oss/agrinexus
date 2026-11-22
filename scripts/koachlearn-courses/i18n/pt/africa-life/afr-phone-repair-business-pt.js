"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-phone-repair-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const NFPA = { name: "NFPA (Associação Nacional de Proteção contra Incêndios dos EUA): segurança das baterias de iões de lítio (sinais de alerta; não deitar no lixo, reciclar)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const WHO_EWASTE = { name: "Ficha informativa da OMS (WHO): Lixo eletrónico: 62 milhões de toneladas em 2022, 22,3% reciclados de forma documentada; perigos da queima", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };
const NDPC = { name: "Comissão de Proteção de Dados da Nigéria (NDPC; Lei de Proteção de Dados da Nigéria de 2023)", url: "https://ndpc.gov.ng/" };
const GH_DPC = { name: "Comissão de Proteção de Dados do Gana (Lei de Proteção de Dados de 2012, Act 843; os responsáveis pelo tratamento de dados têm de se registar)", url: "https://dpc.gov.gh/" };
const KE_ODPC = { name: "Gabinete do Comissário de Proteção de Dados, Quénia (ODPC)", url: "https://www.odpc.go.ke/" };

module.exports = {
  id: "afr-phone-repair-business-pt",
  lang: "pt",
  translationOf: "afr-phone-repair-business",
  category: "Africa: Life and Work",
  name: "Começar um Negócio de Reparação de Telefones",
  skills: "Montar uma bancada de reparação segura, Manusear baterias de lítio com segurança, Encontrar avarias e preencher fichas de trabalho, Proteger os dados dos clientes, Definir preços de reparação com garantia, Tratar o lixo eletrónico com segurança",
  outcome: "gerir um pequeno negócio de reparação de telefones seguro e honesto: trabalhar numa bancada segura, manusear baterias de lítio sem risco de incêndio, encontrar avarias comuns e registar cada trabalho numa ficha de trabalho, proteger os dados de cada cliente, definir preços de reparação com uma garantia clara e livrar-se das baterias gastas e das peças partidas com segurança.",
  about: [
    "Este curso é para jovens, artesãos e donos de pequenos negócios em toda a África que reparam telefones, ou querem reparar, num quiosque, numa banca de mercado ou numa pequena loja: na Luthuli Avenue de Nairobi, na Computer Village de Lagos, no Circle de Acra, em Adjamé, Abidjan, ou em Akwa, Douala.",
    "O Capítulo 1 trata do trabalho seguro: a sua bancada e as ferramentas, os perigos das baterias de lítio e como encontrar uma avaria passo a passo e registá-la numa ficha de trabalho. O Capítulo 2 trata do negócio: proteger os dados dos clientes, preços e garantias, recusar telefones roubados e tratar o lixo eletrónico.",
    "Este não é um curso completo de eletrónica. Dá-lhe os hábitos de segurança e as habilidades de negócio que protegem você, os seus clientes e a sua loja, para que as suas habilidades técnicas lhe deem um bom nome. Os valores em dinheiro são só exemplos. Cada lição dura cerca de cinco minutos e termina com uma tarefa. Há verificações rápidas depois de cada lição, uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Faça o kit inicial da sua loja: (1) uma lista de preços para pelo menos cinco reparações comuns (por exemplo ecrã, porta de carregamento, bateria, altifalante, reposição do software), cada uma com o custo das peças, a mão de obra, o preço e os dias de garantia; (2) uma ficha de trabalho de uma página que vai usar para cada telefone; (3) uma promessa sobre os dados dos clientes com pelo menos quatro linhas; e (4) um cartão de segurança para a parede com as suas regras para as baterias e para onde vão as suas baterias gastas e peças partidas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens, artesãos e donos de pequenos negócios em vilas e cidades de toda a África (Quénia, Nigéria, Gana, Costa do Marfim, Camarões, Senegal, Egito e outros) que reparam telefones ou querem começar, muitas vezes num quiosque ou numa banca de mercado.",
    startingPoint: "Muitos aprenderam algumas reparações com um amigo ou como aprendizes, ou ainda não sabem nenhuma. Poucos têm uma rotina de bancada segura, sabem como uma bateria de lítio danificada é perigosa, preenchem uma ficha de trabalho, protegem os dados dos clientes, definem preços com garantia ou sabem para onde deve ir o lixo eletrónico.",
    gap: "Os incêndios de baterias queimam lojas e ferem pessoas; dados de clientes perdidos ou divulgados destroem a confiança; adivinhar os preços faz perder dinheiro; comprar telefones roubados traz problemas com a polícia; queimar lixo eletrónico envenena as famílias. Hábitos seguros e ferramentas de negócio simples transformam uma habilidade num negócio de confiança e duradouro.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra técnica é explicada",
      "Aparelhos: um telefone Android simples; um espaço pequeno e partilhado, muitas vezes sem extintor",
      "As leis sobre proteção de dados, licenças de negócio e lixo eletrónico variam de país para país e mudam: os alunos confirmam com os serviços indicados",
      "Segurança: nenhum trabalho em baterias inchadas ou danificadas além de as retirar com segurança; nada de queimar lixo eletrónico",
      "O curso também está traduzido em francês e árabe, por isso os exemplos incluem lojas francófonas e do Norte de África"
    ],
    prerequisites: "Nenhum para as habilidades de segurança e de negócio. As habilidades práticas de reparação vêm da prática ou de uma aprendizagem com um técnico."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Antes e durante qualquer reparação", action: "montar uma bancada segura e manusear baterias de lítio com segurança, reconhecendo uma bateria inchada, quente ou danificada", standard: "seguindo todas as regras do seu cartão de segurança das baterias" },
    { id: "O2", condition: "Com um telefone que um cliente traz", action: "encontrar a avaria provável com uma verificação passo a passo e registar o trabalho numa ficha de trabalho", standard: "com a avaria, o preço combinado e o acordo do cliente escritos antes de começar o trabalho" },
    { id: "O3", condition: "Quando um cliente deixa um telefone consigo", action: "proteger os dados do cliente pedindo uma cópia de segurança e nunca copiando, vendo ou partilhando os seus ficheiros", standard: "sem nunca pedir um PIN ou uma palavra-passe de que não precisa" },
    { id: "O4", condition: "Com o custo das peças e o tempo que uma reparação leva", action: "calcular o preço de uma reparação e escrever uma lista de preços com as condições da garantia", standard: "cobrindo as peças, a mão de obra e os custos da loja com lucro, e com uma garantia clara" },
    { id: "O5", condition: "Quando tem baterias gastas, ecrãs partidos ou um telefone que suspeita ser roubado", action: "escolher a ação segura e legal: guardar o lixo eletrónico e entregá-lo a um recolhedor, e recusar um telefone sem prova de propriedade", standard: "sem queimar, sem deitar fora em qualquer lugar e sem comprar telefones sem prova" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Trabalho seguro e encontrar a avaria",
      lessons: [
        {
          title: "Uma bancada de reparação segura",
          objectives: ["O1"],
          minutes: 4,
          goal: "Montar uma bancada de reparação segura, arrumada e pronta para o trabalho.",
          text: [
            "A sua bancada é onde os acidentes acontecem ou são evitados. Uma boa bancada é seca, bem iluminada e longe de fogos de cozinha, combustível e água. Tem um tapete resistente ao calor, um pequeno tabuleiro para os parafusos e um espaço livre para que as peças pequenas não se percam.",
            "Ferramentas: as chaves de fendas certas, ferramentas de plástico para abrir (spudgers), uma pinça, uma ventosa, um multímetro e uma pistola de ar quente ou um ferro de soldar, se tiver formação para os usar. As ferramentas de calor ficam sempre num suporte, nunca em cima de papel ou pano, e são desligadas quando sai da bancada.",
            "Proteja-se a si e ao telefone: use óculos de proteção quando abre ecrãs ou trabalha com vidro, use uma pulseira antiestática ou toque em metal sem tinta para descarregar a eletricidade estática antes de tocar na placa, e tenha uma lata de metal com areia seca perto da bancada para uma bateria danificada. Saiba qual é a saída da sua loja e mantenha-a livre."
          ],
          steps: ["Escolha um lugar seco e bem iluminado, longe de fogos de cozinha, combustível e água.", "Ponha um tapete resistente ao calor e um tabuleiro para os parafusos.", "Mantenha as ferramentas de calor num suporte e desligue-as quando sai.", "Use óculos de proteção; descarregue a eletricidade estática antes de tocar na placa.", "Tenha uma lata de metal com areia seca perto da bancada e uma saída livre."],
          words: [["Spudger", "uma ferramenta de plástico para abrir um telefone e levantar peças sem as riscar nem causar curto-circuito."], ["Multímetro", "um aparelho de teste que mede a tensão, a corrente e a resistência."], ["Eletricidade estática", "uma pequena carga elétrica no seu corpo que pode danificar a placa de um telefone."]],
          slides: [
            { title: "Onde pôr a sua bancada", bullets: ["Seca e bem iluminada", "Longe de fogos de cozinha, combustível e água", "Uma saída livre da loja"] },
            { title: "Ferramentas básicas", bullets: ["Chaves de fendas, spudgers de plástico, pinça, ventosa", "Multímetro", "Ferramentas de calor só com formação; sempre num suporte"] },
            { title: "Proteja-se a si e ao telefone", bullets: ["Óculos de proteção para vidro e ecrãs", "Descarregue a estática antes de tocar na placa", "Lata de metal com areia seca para uma bateria danificada"] }
          ],
          tryIt: "Desenhe uma planta simples da sua bancada (ou da bancada que quer): onde fica cada ferramenta, onde fica a ferramenta de calor, onde está a lata de areia e qual é a saída. Faça a lista do que ainda precisa de comprar.",
          youCanNow: "montar uma bancada de reparação segura e arrumada, com as ferramentas certas e os artigos de segurança.",
          quickCheck: [
            { objective: "O1", q: "Onde deve ficar uma pistola de ar quente quando a pousa?", options: ["Em cima de um monte de papel", "Em cima do telefone do cliente", "No seu suporte, longe de pano e papel", "No chão"], answer: 2, why: "O suporte mantém a ponta quente longe de coisas que podem arder." },
            { objective: "O1", q: "Porque ter uma lata de metal com areia seca perto da bancada?", options: ["Para guardar parafusos", "Para guardar uma bateria danificada com segurança", "Para limpar ecrãs", "Para pesar peças"], answer: 1, why: "Uma lata de metal com areia é um lugar mais seguro para uma bateria danificada do que a bancada ou um caixote do lixo." }
          ]
        },
        {
          title: "Os perigos das baterias de lítio",
          objectives: ["O1"],
          minutes: 5,
          goal: "Reconhecer uma bateria inchada, quente ou danificada e manuseá-la sem causar um incêndio.",
          text: [
            "Quase todos os telefones têm uma bateria de iões de lítio. Ela guarda muita energia. Se for furada, dobrada, esmagada, aquecida demais ou tiver um curto-circuito, pode pegar fogo muito depressa, soltar fumo venenoso e voltar a arder depois de parecer apagada.",
            "Sinais de alerta: inchaço (a tampa de trás ou o ecrã está levantado), calor, um cheiro estranho, chiados ou estalos, ou fumo. Uma bateria inchada tem de ser substituída, nunca espalmada, furada ou carregada.",
            "Hábitos seguros: desligue primeiro o conector da bateria, antes de trabalhar na placa. Nunca tire uma bateria fazendo força com uma ferramenta de metal; use ferramentas de plástico e o produto certo para soltar a cola, e vá devagar. Nunca use a pistola de ar quente perto de uma bateria. Carregue os telefones só com carregadores bons, numa superfície dura, onde os possa ver.",
            "Se uma bateria começar a deitar fumo ou a chiar: afaste as pessoas e não respire o fumo. Só se o puder fazer com segurança, use uma tenaz comprida para a pôr na lata de metal com areia, lá fora. Se houver um fogo que não consegue controlar, tire todos de lá e ligue para os bombeiros."
          ],
          steps: ["Procure inchaço, calor, cheiro, barulho ou fumo antes de abrir qualquer telefone.", "Desligue a bateria antes de trabalhar na placa.", "Use ferramentas de plástico, nunca de metal, para tirar uma bateria; nunca a dobre nem a fure.", "Mantenha as ferramentas de calor longe da bateria.", "Se deitar fumo: afaste as pessoas, use a tenaz e a lata de areia só se for seguro, ligue para os bombeiros se houver fogo."],
          words: [["Bateria de iões de lítio", "a bateria recarregável dos telefones; guarda muita energia e pode arder se estiver danificada."], ["Bateria inchada", "uma bateria que inchou porque se está a formar gás lá dentro; é perigosa."], ["Curto-circuito", "quando a eletricidade segue um caminho errado, por exemplo através de uma ferramenta de metal, e causa calor ou fogo."]],
          slides: [
            { title: "Porque as baterias de lítio são perigosas", bullets: ["Guardam muita energia", "Dano, calor ou curto-circuito podem causar fogo depressa", "O fumo é venenoso; o fogo pode voltar"] },
            { title: "Sinais de alerta", bullets: ["Inchaço: tampa de trás ou ecrã levantado", "Calor, cheiro estranho", "Chiados, estalos ou fumo"] },
            { title: "Hábitos seguros", bullets: ["Desligue a bateria primeiro", "Só ferramentas de plástico; nunca dobre nem fure", "Nada de ferramentas de calor perto da bateria"] },
            { title: "Se deitar fumo", bullets: ["Afaste as pessoas; não respire o fumo", "Só se for seguro: tenaz, para a lata de areia, lá fora", "Fogo que não consegue controlar: saia e ligue para os bombeiros"] }
          ],
          sources: [NFPA],
          tryIt: "Escreva o seu cartão de segurança das baterias em cinco linhas para a parede da sua loja: os sinais de alerta, os hábitos seguros e o que fazer se uma bateria deitar fumo. Descubra o número de telefone dos bombeiros mais perto de si.",
          youCanNow: "reconhecer uma bateria perigosa, manusear baterias com segurança durante uma reparação e agir com segurança se uma começar a deitar fumo.",
          quickCheck: [
            { objective: "O1", q: "A tampa de trás de um telefone está levantada porque a bateria inchou. O que faz?", options: ["Espalma-a e fecha o telefone", "Carrega-a para a testar", "Fura-a para deixar sair o gás", "Substitui-a, com cuidado, sem a dobrar nem furar"], answer: 3, why: "Uma bateria inchada é perigosa; tem de ser retirada com cuidado e substituída, nunca espalmada, furada ou carregada." },
            { objective: "O1", q: "O que deve fazer primeiro antes de trabalhar na placa de um telefone?", options: ["Desligar a bateria", "Aquecer a placa", "Carregar o telefone", "Só tirar o tabuleiro do SIM"], answer: 0, why: "Desligar a bateria evita curto-circuitos que podem danificar a placa ou causar um incêndio." }
          ]
        },
        {
          title: "Encontrar a avaria e preencher uma ficha de trabalho",
          objectives: ["O2"],
          minutes: 6,
          goal: "Encontrar a avaria provável com uma verificação passo a passo e registar o trabalho numa ficha de trabalho.",
          text: [
            "Comece por ouvir. Pergunte ao cliente o que aconteceu: caiu, molhou-se, está lento, não carrega, não tem som? Quando começou? Depois verifique da causa mais simples para a mais difícil. Muitos telefones \"mortos\" só precisam de um bom carregador, de uma porta de carregamento limpa ou de reiniciar o software.",
            "Uma ordem simples: (1) procure danos, inchaço ou marcas de água; (2) experimente um carregador e um cabo que sabe que funcionam; (3) limpe a porta de carregamento com cuidado com um palito de plástico ou de madeira; (4) reinicie e veja se o problema é do software; (5) só então abra o telefone e teste as peças.",
            "Antes de começar qualquer trabalho pago, preencha uma ficha de trabalho e mostre-a ao cliente. Ela regista: a data, o nome e o número de telefone do cliente, o modelo do telefone e o IMEI, o que está avariado, os danos que vê (rachas, amolgadelas), o que vai fazer, o preço combinado, a data prevista e a assinatura do cliente ou um \"sim\" gravado. Dê ao cliente uma cópia ou um número de talão. Isto protege os dois.",
            "Exemplo: o Kwame, em Acra, recebe um telefone que \"não carrega\". Experimenta um bom cabo, tira o cotão da porta e o telefone carrega. Cobra só uma pequena taxa de limpeza, e o cliente volta para todas as reparações a partir daí."
          ],
          steps: ["Pergunte o que aconteceu e quando começou.", "Procure danos, inchaço ou marcas de água.", "Experimente um carregador e um cabo que funcionam; limpe a porta com cuidado.", "Reinicie e veja se é um problema de software.", "Preencha a ficha de trabalho com a avaria, os danos vistos, o preço e a data, e tenha o sim do cliente antes de abrir o telefone."],
          words: [["Ficha de trabalho", "um registo escrito de uma reparação: o telefone, a avaria, o preço, a data e o acordo do cliente."], ["IMEI", "o número único do telefone, com 15 algarismos; marque *#06# para o ver."], ["Avaria de software", "um problema nos programas do telefone, não nas peças; muitas vezes resolve-se reiniciando ou atualizando."]],
          slides: [
            { title: "Primeiro ouça", bullets: ["O que aconteceu? Caiu, molhou-se, está lento, não carrega?", "Quando começou?", "Muitos telefones \"mortos\" só precisam de uma solução simples"] },
            { title: "Do mais simples para o mais difícil", bullets: ["Veja: danos, inchaço, marcas de água", "Bom carregador; limpe a porta com cuidado", "Reinicie para o software; depois abra e teste as peças"] },
            { title: "A ficha de trabalho", bullets: ["Cliente, modelo do telefone, IMEI (marque *#06#)", "Avaria, danos vistos, trabalho a fazer", "Preço, data, sim do cliente; dê uma cópia ou um talão"] }
          ],
          tryIt: "Desenhe a sua própria ficha de trabalho numa página, com todos os espaços desta lição. Preencha-a para um telefone de prática (o seu ou de um amigo) com uma avaria inventada.",
          youCanNow: "verificar um telefone da causa mais simples para a mais difícil e registar cada trabalho numa ficha de trabalho antes de começar.",
          quickCheck: [
            { objective: "O2", q: "Um cliente diz que o telefone não carrega. O que verifica primeiro?", options: ["Substitui a placa", "Um carregador e um cabo que funcionam, e uma porta limpa", "Substitui o ecrã", "Vende-lhe um telefone novo"], answer: 1, why: "Comece pelas causas mais simples; um cabo mau ou uma porta suja são comuns." },
            { objective: "O2", q: "Porque escrever na ficha de trabalho os danos que vê, como um canto rachado, antes de começar?", options: ["Para o cliente pagar mais", "Não é preciso", "Para encher espaço", "Para que ninguém o culpe depois por danos que já lá estavam"], answer: 3, why: "Registar os danos que já existem protege você e o cliente de discussões." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Trabalho seguro e encontrar a avaria",
        questions: [
          { objective: "O1", q: "Qual é um sinal de alerta de uma bateria perigosa?", options: ["O telefone é novo", "Inchaço, calor, cheiro, chiados ou fumo", "A bateria é preta", "O telefone tem capa"], answer: 1, why: "Inchaço, calor, cheiro, barulho e fumo são os sinais de alerta." },
          { objective: "O1", q: "Que ferramenta deve usar para tirar uma bateria fazendo força?", options: ["Uma ferramenta de plástico, devagar", "Uma chave de fendas de metal", "Uma faca de cozinha", "Os dentes"], answer: 0, why: "O metal pode furar a bateria ou causar um curto-circuito; as ferramentas de plástico são mais seguras." },
          { objective: "O1", q: "Uma bateria na sua bancada começa a chiar e a deitar fumo. Qual é o primeiro passo certo?", options: ["Soprar nela", "Pô-la no bolso", "Afastar as pessoas e evitar o fumo", "Continuar a trabalhar"], answer: 2, why: "A segurança das pessoas vem primeiro; o fumo é venenoso." },
          { objective: "O2", q: "Onde encontra depressa o IMEI de um telefone?", options: ["No carregador", "No cartão SIM", "Na mala do cliente", "Marcando *#06#"], answer: 3, why: "Marcar *#06# mostra o IMEI em quase todos os telefones." },
          { objective: "O2", q: "Quando deve o cliente concordar com o preço?", options: ["Antes de começar, escrito na ficha de trabalho", "Depois de acabar", "Nunca", "Quando se queixar"], answer: 0, why: "Combinar primeiro, por escrito, evita discussões." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir um negócio honesto e seguro",
      lessons: [
        {
          title: "Proteger os dados dos seus clientes",
          objectives: ["O3"],
          minutes: 5,
          goal: "Proteger os dados de cada cliente enquanto o telefone está na sua loja.",
          text: [
            "Um telefone guarda a vida de uma pessoa: fotografias, mensagens, dinheiro móvel, aplicações do banco e contactos. Os clientes confiam-lho a você. Uma única fotografia divulgada ou um saldo de dinheiro móvel roubado pode destruir o nome da sua loja, e em muitos países pode ser contra a lei.",
            "Antes da reparação: peça ao cliente para fazer uma cópia de segurança do telefone, se puder, e para sair das aplicações de dinheiro móvel e do banco ou tirar o cartão SIM. A maioria das reparações não precisa do código de bloqueio do telefone. Se precisar mesmo dele para testar o telefone, peça ao cliente para o desbloquear à sua frente, ou para pôr um código temporário e mudá-lo depois. Nunca peça um PIN do dinheiro móvel ou do banco. Nenhuma reparação precisa dele.",
            "Durante e depois: não abra fotografias, mensagens ou aplicações que não fazem parte da reparação. Não copie nada e não deixe outras pessoas mexer nos telefones. Guarde os telefones numa gaveta fechada à chave. Destrua as fichas de trabalho ou guarde-as em segurança, porque têm nomes e números.",
            "Os países têm leis e serviços de proteção de dados, por exemplo o Gabinete do Comissário de Proteção de Dados do Quénia, a Comissão de Proteção de Dados da Nigéria e a Comissão de Proteção de Dados do Gana, onde os negócios que guardam dados pessoais têm de se registar. Confirme o que o serviço do seu país espera de um pequeno negócio como o seu."
          ],
          steps: ["Peça ao cliente para fazer uma cópia de segurança e sair das aplicações de dinheiro, ou tirar o SIM.", "Não peça o código de bloqueio se não precisar mesmo; deixe o cliente desbloquear à sua frente.", "Nunca peça um PIN do dinheiro móvel ou do banco.", "Abra só o que a reparação precisa; não copie nada.", "Guarde à chave os telefones e as fichas de trabalho; conheça as regras de proteção de dados do seu país."],
          words: [["Dados pessoais", "informações sobre uma pessoa, como o nome, o número, as fotografias e as mensagens."], ["Cópia de segurança", "uma cópia dos dados do telefone guardada noutro lugar, para que nada se perca se a reparação correr mal."], ["Lei de proteção de dados", "uma lei que diz como os negócios devem recolher, guardar e proteger os dados pessoais das pessoas."]],
          slides: [
            { title: "Um telefone guarda uma vida", bullets: ["Fotografias, mensagens, contactos", "Dinheiro móvel e aplicações do banco", "Uma fuga de dados pode acabar com o bom nome da sua loja"] },
            { title: "Antes da reparação", bullets: ["O cliente faz uma cópia de segurança do telefone", "Sai das aplicações de dinheiro, ou tira o SIM", "Código de bloqueio só se for mesmo preciso; nunca um PIN"] },
            { title: "Durante e depois", bullets: ["Abra só o que a reparação precisa", "Não copie nada; ninguém mais mexe nos telefones", "Guarde à chave os telefones e as fichas de trabalho"] },
            { title: "Conheça a lei", bullets: ["Quénia: Gabinete do Comissário de Proteção de Dados", "Nigéria: Comissão de Proteção de Dados da Nigéria", "Gana: Comissão de Proteção de Dados; outros: o serviço do seu país"] }
          ],
          sources: [KE_ODPC, NDPC, GH_DPC],
          tryIt: "Escreva a sua promessa sobre os dados dos clientes: pelo menos quatro linhas curtas que vai mostrar a cada cliente, como \"Nunca pedimos o PIN do seu dinheiro móvel.\" Escreva o nome do serviço de proteção de dados do seu país.",
          youCanNow: "proteger os dados dos seus clientes antes, durante e depois de uma reparação, e saber que serviço define as regras no seu país.",
          quickCheck: [
            { objective: "O3", q: "Um técnico pede o PIN do dinheiro móvel do cliente para \"testar o telefone\". O que é verdade?", options: ["É preciso para todas as reparações", "Não há problema se ele for honesto", "Nenhuma reparação precisa dele; nunca o peça", "Só para reparações de ecrã"], answer: 2, why: "Nenhuma reparação precisa de um PIN do dinheiro móvel ou do banco." },
            { objective: "O3", q: "O que deve o cliente fazer antes de deixar o telefone, se puder?", options: ["Dar-lhe todas as palavras-passe", "Fazer uma cópia de segurança e sair das aplicações de dinheiro", "Deixar o telefone desbloqueado para sempre", "Apagar todos os contactos"], answer: 1, why: "Uma cópia de segurança e sair das aplicações de dinheiro protegem o cliente se alguma coisa correr mal." }
          ]
        },
        {
          title: "Preços das reparações, garantias e recusar telefones roubados",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Calcular o preço de uma reparação e escrever uma lista de preços com as condições da garantia.",
          text: [
            "Um preço justo cobre três coisas e deixa lucro: a peça, o seu tempo (mão de obra) e uma parte dos custos da loja, como a renda, a eletricidade, as ferramentas e os dados de internet. Exemplo (os valores são só exemplos): um ecrã custa NGN 15 000. A sua mão de obra é NGN 4 000 e a sua parte dos custos da loja NGN 1 000. Custo: NGN 20 000. Junte NGN 3 000 de lucro: preço NGN 23 000.",
            "As peças têm qualidades diferentes. Diga ao cliente com honestidade que peça vai usar (original, boa cópia ou cópia barata) e o preço de cada uma. Uma peça barata que avaria numa semana custa-lhe o seu bom nome.",
            "A garantia é a sua promessa: se a mesma reparação falhar dentro de um certo número de dias por causa do seu trabalho ou da peça, você repara de graça. Escreva quantos dias e o que não está coberto (novas quedas, água, outra pessoa abrir o telefone). Ponha a lista de preços e a garantia onde os clientes as possam ver.",
            "Recuse telefones que podem ser roubados. Não compre, não desbloqueie nem desmonte para peças um telefone se o vendedor não mostrar prova de que é dele, como a caixa com o mesmo IMEI ou um recibo. Se um telefone parecer roubado, não discuta; recuse com educação. Em muitos países, comprar coisas roubadas é crime."
          ],
          steps: ["Some o custo da peça, a sua mão de obra e uma parte dos custos da loja.", "Junte o seu lucro para ter o preço.", "Ofereça as opções de peças com honestidade, com um preço para cada uma.", "Escreva os dias de garantia e o que não está coberto.", "Mostre a lista de preços; recuse telefones sem prova de propriedade."],
          words: [["Mão de obra", "o pagamento pelo seu tempo e pela sua habilidade."], ["Custos fixos (custos da loja)", "os custos de manter a loja, como a renda, a eletricidade, as ferramentas e os dados de internet, divididos pelos trabalhos."], ["Garantia", "uma promessa escrita de reparar de graça a mesma avaria durante um certo tempo."]],
          slides: [
            { title: "O que um preço cobre", bullets: ["Peça + mão de obra + parte dos custos da loja", "Depois junte o seu lucro", "Exemplo: custo NGN 20 000 + NGN 3 000 = NGN 23 000"] },
            { title: "Peças honestas", bullets: ["Original, boa cópia ou cópia barata", "Diga ao cliente qual é, e o preço de cada uma", "Peças baratas que avariam custam o seu bom nome"] },
            { title: "A sua garantia", bullets: ["A mesma avaria reparada de graça durante certos dias", "Não coberto: novas quedas, água, outros abrirem o telefone", "Mostre a lista de preços e a garantia"] },
            { title: "Recuse telefones roubados", bullets: ["Prova: caixa com o mesmo IMEI, ou recibo", "Sem prova: recuse com educação", "Comprar coisas roubadas pode ser crime"] }
          ],
          tryIt: "Escreva a sua lista de preços para cinco reparações comuns: para cada uma, o custo da peça, a mão de obra, a parte dos custos da loja, o lucro, o preço e os dias de garantia. Use a moeda do seu país.",
          youCanNow: "definir o preço de uma reparação para cobrir todos os seus custos e dar lucro, escrever uma garantia e recusar um telefone que pode ser roubado.",
          quickCheck: [
            { objective: "O4", q: "Peça GHS 150, mão de obra GHS 60, parte dos custos da loja GHS 20, lucro GHS 40. Qual é o preço?", options: ["GHS 210", "GHS 230", "GHS 150", "GHS 270"], answer: 3, why: "150 + 60 + 20 + 40 = 270." },
            { objective: "O5", q: "Um jovem quer vender-lhe um telefone barato, mas não tem caixa nem recibo. O que faz?", options: ["Recusa com educação", "Compra depressa antes que outros comprem", "Primeiro desbloqueia-o para ele", "Desmonta-o para peças"], answer: 0, why: "Sem prova de propriedade, o telefone pode ser roubado; recuse." }
          ]
        },
        {
          title: "Lixo eletrónico, baterias gastas e o kit inicial da sua loja",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Guardar baterias gastas e peças partidas com segurança e entregá-las a um recolhedor autorizado.",
          text: [
            "Telefones velhos, ecrãs, placas e baterias são lixo eletrónico. Têm chumbo, mercúrio e outros venenos. A OMS (WHO, a Organização Mundial da Saúde) diz que queimar lixo eletrónico é a forma mais perigosa de o tratar e que prejudica sobretudo as crianças e as mulheres grávidas. Em 2022, o mundo produziu cerca de 62 milhões de toneladas de lixo eletrónico, e só 22,3% foi recolhido e reciclado corretamente de forma documentada.",
            "Nunca queime lixo eletrónico para tirar o cobre, e nunca deite baterias no caixote do lixo, numa fogueira ou num esgoto. Tape com fita isoladora as pontas (terminais) das baterias gastas, guarde-as numa lata de metal fechada com areia seca, longe do calor, e guarde os ecrãs e as placas partidas numa caixa separada com etiqueta.",
            "Entregue-os a um recolhedor ou a uma empresa de reciclagem de lixo eletrónico. Pergunte ao conselho municipal ou à câmara da sua cidade, à agência do ambiente, ou aos vendedores de telefones e lojas das operadoras quais são os recolhedores autorizados na sua zona. Anote o que entregou e quando.",
            "Agora faça o seu kit inicial: a sua lista de preços, a sua ficha de trabalho, a sua promessa sobre os dados e o seu cartão de segurança com as regras das baterias e o destino do seu lixo eletrónico."
          ],
          steps: ["Tape com fita os terminais das baterias gastas.", "Guarde-as numa lata de metal fechada com areia seca, longe do calor.", "Guarde os ecrãs e as placas partidas numa caixa com etiqueta.", "Peça ao conselho municipal ou à agência do ambiente um recolhedor autorizado.", "Entregue-os e escreva o quê e quando. Nunca queime nem deite fora lixo eletrónico em qualquer lugar."],
          words: [["Lixo eletrónico", "aparelhos e peças eletrónicas velhos ou partidos, como telefones, ecrãs, placas e baterias."], ["Terminais", "as pontas de metal de uma bateria, onde ela se liga; tapá-las com fita evita curto-circuitos."], ["Empresa de reciclagem", "um negócio que desmonta o lixo eletrónico com segurança e recupera os materiais."]],
          slides: [
            { title: "O lixo eletrónico é venenoso", bullets: ["Chumbo, mercúrio e outros venenos", "Queimar é o mais perigoso (OMS)", "As crianças e as mulheres grávidas são as mais prejudicadas"] },
            { title: "Guarde com segurança", bullets: ["Tape com fita os terminais das baterias gastas", "Lata de metal fechada com areia seca, longe do calor", "Ecrãs e placas numa caixa com etiqueta"] },
            { title: "Entregue", bullets: ["Pergunte ao conselho municipal ou à agência do ambiente", "Use um recolhedor ou uma empresa de reciclagem autorizados", "Anote o que entregou e quando"] },
            { title: "O kit inicial da sua loja", bullets: ["Lista de preços com garantia", "Ficha de trabalho; promessa sobre os dados dos clientes", "Cartão de segurança: regras das baterias e plano do lixo eletrónico"] }
          ],
          sources: [WHO_EWASTE, NFPA],
          tryIt: "Faça o kit inicial da sua loja, como está descrito na tarefa final. Junte ao seu cartão de segurança uma linha com o nome de quem vai recolher o seu lixo eletrónico, ou do serviço a quem vai perguntar.",
          youCanNow: "guardar e entregar o lixo eletrónico com segurança e juntar um kit inicial para uma loja de reparação de telefones honesta e segura.",
          quickCheck: [
            { objective: "O5", q: "Qual é a forma mais segura de se livrar de baterias de telefone gastas?", options: ["Queimá-las", "Deitá-las no caixote do lixo", "Tapar os terminais, guardá-las numa lata com areia, entregá-las a um recolhedor autorizado", "Enterrá-las no quintal"], answer: 2, why: "Tapar com fita, guardar com segurança e usar um recolhedor autorizado evitam incêndios e poluição." },
            { objective: "O5", q: "Segundo a OMS, qual é a forma mais perigosa de tratar o lixo eletrónico?", options: ["Guardá-lo numa caixa", "Levá-lo a uma empresa de reciclagem", "Anotá-lo", "Queimá-lo"], answer: 3, why: "A OMS diz que queimar lixo eletrónico é a prática mais perigosa por causa dos fumos tóxicos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir um negócio honesto e seguro",
        questions: [
          { objective: "O3", q: "Uma reparação precisa mesmo do telefone desbloqueado para o testar. Qual é a melhor forma?", options: ["Pedir ao cliente para o desbloquear à sua frente, ou pôr um código temporário", "Pedir o PIN do banco", "Adivinhar o código", "Repor o telefone sem perguntar"], answer: 0, why: "O cliente mantém o controlo do seu código, e nenhum PIN de dinheiro é usado." },
          { objective: "O3", q: "O que deve fazer com as fichas de trabalho que têm os nomes e números dos clientes?", options: ["Deitá-las na rua", "Publicá-las na internet", "Guardá-las à chave ou destruí-las quando já não são precisas", "Dá-las a outras lojas"], answer: 2, why: "As fichas de trabalho têm dados pessoais, por isso têm de ser guardadas em segurança." },
          { objective: "O4", q: "Que custo os novos técnicos esquecem mais vezes no preço?", options: ["A peça", "A sua parte dos custos da loja, como a renda e a eletricidade", "O ecrã", "O nome do cliente"], answer: 1, why: "Os custos da loja, como a renda, a eletricidade e os dados de internet, têm de ser divididos pelos trabalhos, senão perde dinheiro." },
          { objective: "O4", q: "O que deve dizer uma garantia?", options: ["Nada; basta sorrir", "Que todos os problemas são grátis para sempre", "Só o preço", "Quantos dias, e o que não está coberto"], answer: 3, why: "Uma garantia clara diz os dias e as exclusões." },
          { objective: "O5", q: "Porque é um problema comprar um telefone sem prova de propriedade?", options: ["Pode ser roubado, e comprar coisas roubadas pode ser crime", "É sempre caro demais", "Os telefones sem caixa não funcionam", "Não é um problema"], answer: 0, why: "Sem prova, o telefone pode ser roubado, o que traz problemas com a lei." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Começar um Negócio de Reparação de Telefones",
    questions: [
      { objective: "O1", q: "Qual é o melhor lugar para a sua bancada de reparação?", options: ["Ao lado do fogo de cozinha", "Seco, bem iluminado, longe de combustível e água", "Lá fora, à chuva", "Em cima de um recipiente de combustível"], answer: 1, why: "Uma bancada seca e bem iluminada, longe de combustível e água, é a mais segura." },
      { objective: "O1", q: "O que deve usar quando abre um ecrã rachado?", options: ["Óculos de proteção", "Nada de especial", "Luvas de metal", "Óculos de sol só à noite"], answer: 0, why: "Os óculos de proteção protegem os olhos dos pedaços de vidro." },
      { objective: "O1", q: "Porque nunca deve usar uma pistola de ar quente perto de uma bateria?", options: ["Gasta eletricidade", "Suja o ecrã", "O calor pode fazer a bateria pegar fogo", "É lenta demais"], answer: 2, why: "Aquecer demais uma bateria de lítio pode causar um incêndio." },
      { objective: "O1", q: "O que NUNCA deve fazer a uma bateria inchada?", options: ["Tirá-la com cuidado", "Guardá-la numa lata com areia", "Avisar o cliente", "Espalmá-la ou furá-la"], answer: 3, why: "Espalmar ou furar uma bateria inchada pode fazê-la arder." },
      { objective: "O2", q: "Qual é a ordem certa das verificações?", options: ["Abrir o telefone primeiro, depois fazer perguntas", "Primeiro as causas mais simples: ver, carregador, porta, reiniciar, depois abrir", "Substituir a placa primeiro", "Cobrar ao cliente primeiro"], answer: 1, why: "Começar pelo simples poupa tempo e dinheiro e evita abrir o telefone sem necessidade." },
      { objective: "O2", q: "O que deve estar numa ficha de trabalho?", options: ["O PIN do dinheiro móvel do cliente", "A palavra-passe do banco do cliente", "O modelo do telefone, o IMEI, a avaria, os danos vistos, o preço e a data", "As chaves de casa do cliente"], answer: 2, why: "Uma ficha de trabalho regista o trabalho, não segredos como PINs ou palavras-passe." },
      { objective: "O2", q: "Um telefone \"não carrega\". Tira o cotão da porta e ele carrega. Quanto cobra?", options: ["O preço de uma placa nova", "Uma pequena taxa justa pelo trabalho que fez", "Nada, e recusa trabalhos futuros", "O preço de um telefone novo"], answer: 1, why: "Um preço honesto pelo trabalho real cria confiança e faz os clientes voltarem." },
      { objective: "O2", q: "Porque ter o sim do cliente antes de abrir o telefone?", options: ["Para ele concordar com o trabalho e o preço, o que evita discussões", "Não é preciso", "Para poder cobrar mais depois", "Para saber o PIN dele"], answer: 0, why: "Um acordo escrito protege os dois." },
      { objective: "O3", q: "De que coisa uma reparação de telefone nunca precisa?", options: ["Do modelo do telefone", "Da descrição da avaria", "Do número de telefone do cliente", "Do PIN do dinheiro móvel do cliente"], answer: 3, why: "Nenhuma reparação precisa de um PIN do dinheiro móvel ou do banco." },
      { objective: "O3", q: "Enquanto repara um ecrã, vê a galeria de fotografias do cliente. O que faz?", options: ["Abre só o que a reparação precisa e não olha para mais nada", "Vê as fotografias", "Copia-as para o seu telefone", "Mostra-as a um amigo"], answer: 0, why: "Respeitar a privacidade quer dizer abrir só o que a reparação precisa." },
      { objective: "O3", q: "Que serviço define as regras de proteção de dados na Nigéria?", options: ["Os bombeiros", "A Comissão de Proteção de Dados da Nigéria", "A federação de futebol", "Nenhum serviço"], answer: 1, why: "A Comissão de Proteção de Dados da Nigéria foi criada pela Lei de Proteção de Dados da Nigéria de 2023." },
      { objective: "O3", q: "Onde devem ficar os telefones à espera de reparação?", options: ["No balcão, para qualquer pessoa levar", "Numa gaveta fechada à chave", "Com um vizinho", "Fora da loja"], answer: 1, why: "Guardar os telefones à chave protege-os a eles e aos dados que têm." },
      { objective: "O4", q: "Peça KES 2 500, mão de obra KES 800, parte dos custos da loja KES 200, lucro KES 500. Qual é o preço?", options: ["KES 3 300", "KES 3 500", "KES 4 000", "KES 2 500"], answer: 2, why: "2 500 + 800 + 200 + 500 = 4 000." },
      { objective: "O4", q: "Um cliente pode pagar um ecrã de cópia barata ou um original. O que é honesto?", options: ["Dizer-lhe que peça é, e o preço de cada uma, e deixá-lo escolher", "Dizer que a cópia é original", "Pôr a mais barata e cobrar a original", "Recusar dizer"], answer: 0, why: "Escolhas de peças honestas criam confiança e evitam queixas." },
      { objective: "O4", q: "O que normalmente NÃO está coberto pela garantia de uma reparação?", options: ["A mesma peça avariar por causa do seu trabalho", "Um defeito na peça que pôs", "Um erro seu ao montar", "Uma nova queda ou danos por água"], answer: 3, why: "Danos novos depois da reparação normalmente não estão cobertos; escreva isso na sua garantia." },
      { objective: "O5", q: "Um vendedor tem uma caixa com um IMEI igual ao do telefone (marque *#06#) e um recibo. O que isto mostra?", options: ["Prova de que o telefone é provavelmente dele", "Que o telefone é roubado", "Nada", "Que está avariado"], answer: 0, why: "Um IMEI igual e um recibo são prova de propriedade." },
      { objective: "O5", q: "Porque nunca deve queimar placas velhas para tirar o cobre?", options: ["O cobre não vale nada", "Demora demasiado", "Os fumos são venenosos e prejudicam sobretudo as crianças e as mulheres grávidas", "É silencioso demais"], answer: 2, why: "Queimar lixo eletrónico liberta fumos tóxicos; segundo a OMS, é a prática mais perigosa." },
      { objective: "O5", q: "Como deve guardar as baterias gastas antes da recolha?", options: ["Soltas numa gaveta com as ferramentas", "Com os terminais tapados, numa lata de metal fechada com areia seca, longe do calor", "Num balde de água ao sol", "No bolso"], answer: 1, why: "Tapar com fita e usar uma lata com areia evitam curto-circuitos e incêndios." },
      { objective: "O5", q: "Quem lhe pode dizer quais são os recolhedores de lixo eletrónico autorizados?", options: ["Só os seus clientes", "Ninguém", "Alguém qualquer que queima lixo na beira da estrada", "O conselho municipal ou a agência do ambiente"], answer: 3, why: "Os conselhos municipais e as agências do ambiente conhecem os recolhedores autorizados." },
      { objective: "O1", q: "Uma bateria começa a arder e não consegue controlar o fogo. O que faz?", options: ["Tira todos de lá e liga para os bombeiros", "Continua a reparar", "Deita combustível em cima", "Pega nela com as mãos"], answer: 0, why: "Um fogo descontrolado quer dizer sair e ligar para os bombeiros." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 5, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do seu kit inicial e tente outra vez.",
    criteria: [
      { name: "Cartão de segurança das baterias", objective: "O1", notYet: "Não há cartão, ou faltam os sinais de alerta ou o que fazer se uma bateria deitar fumo.", meets: "O cartão tem os sinais de alerta, os hábitos seguros e o que fazer se uma bateria deitar fumo ou arder.", exceeds: "Também mostra o número dos bombeiros e onde está guardada a lata de areia." },
      { name: "Ficha de trabalho", objective: "O2", notYet: "Falta na ficha de trabalho a avaria, o preço ou o acordo do cliente.", meets: "Regista o cliente, o modelo do telefone, o IMEI, a avaria, os danos vistos, o trabalho, o preço, a data e o sim do cliente.", exceeds: "Também tem um número de talão e um espaço para a data de fim da garantia." },
      { name: "Promessa sobre os dados dos clientes", objective: "O3", notYet: "Não há promessa, ou ela pede um PIN ou uma palavra-passe.", meets: "Pelo menos quatro linhas claras, incluindo nunca pedir um PIN de dinheiro e não copiar nada.", exceeds: "Também diz o nome do serviço de proteção de dados do país e como as fichas de trabalho são guardadas em segurança." },
      { name: "Lista de preços", objective: "O4", notYet: "Os preços são adivinhados, ou as contas estão erradas.", meets: "Pelo menos cinco reparações, cada uma com a peça, a mão de obra, os custos da loja, o lucro, o preço e os dias de garantia, com as contas certas.", exceeds: "Também mostra as opções de peças (original ou cópia) e o que a garantia não cobre." },
      { name: "Lixo eletrónico e telefones roubados", objective: "O5", notYet: "Não há plano, ou o plano inclui queimar ou deitar fora em qualquer lugar.", meets: "As baterias e as peças são guardadas com segurança e entregues a um recolhedor ou serviço com nome; os telefones sem prova são recusados.", exceeds: "Também guarda um registo do que foi entregue e quando." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem usar uma ficha de trabalho e uma lista de preços na sua loja em 30 dias (inquérito de seguimento)",
      "Alunos que dizem não ter tido nenhum incêndio de bateria nem queixa sobre dados na sua loja em 90 dias",
      "Alunos que dizem entregar o lixo eletrónico a um recolhedor em vez de o queimar ou deitar fora em qualquer lugar, em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone simples com calculadora",
      "Papel e caneta para a planta da bancada, a ficha de trabalho, a lista de preços, a promessa sobre os dados e o cartão de segurança",
      "Se possível, um telefone velho (com a bateria já retirada com segurança por um formador) para praticar com uma ficha de trabalho",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Num programa para jovens ou de formação profissional: façam o teste inicial juntos e depois um capítulo por sessão; junte o curso a prática real com um técnico qualificado.",
      "Nunca deixe os alunos praticar em baterias inchadas ou danificadas; mostre imagens em vez disso.",
      "Antes do curso, descubra que recolhedores de lixo eletrónico autorizados e que serviço de proteção de dados servem a sua zona, para que os alunos possam escrever nomes reais.",
      "Nunca peça aos alunos para partilhar PINs ou palavras-passe na aula.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
