"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-solar-home-systems.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Small home systems only, exactly as in the English: no grid or mains wiring work; sizing figures and prices are examples, not design values.

const VERASOL = { name: "VeraSol: garantia de qualidade independente para a energia solar fora da rede (sucessor do Lighting Global Quality Assurance)", url: "https://verasol.org/" };
const VERASOL_DB = { name: "Base de dados de produtos VeraSol: procurar kits solares certificados", url: "https://data.verasol.org/" };
const NFPA = { name: "NFPA (associação americana de proteção contra incêndios): segurança das baterias de iões de lítio (sinais de alerta; não deitar no lixo, reciclar)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const GOGLA_CP = { name: "GOGLA: Proteção do consumidor na energia solar fora da rede (vendas responsáveis, transparência, tratamento justo, bom serviço, qualidade)", url: "https://www.gogla.org/what-we-do/business-environment-and-consumer-protection/consumer-protection/" };
const EPRA = { name: "Autoridade Reguladora da Energia e do Petróleo (EPRA), Quénia: energias renováveis e licenças", url: "https://www.epra.go.ke/" };
const WHO_EWASTE = { name: "OMS, ficha informativa: Resíduos eletrónicos (lixo eletrónico), incluindo os perigos de os queimar e despejar", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };

module.exports = {
  id: "afr-solar-home-systems-pt",
  lang: "pt",
  translationOf: "afr-solar-home-systems",
  category: "Africa: Life and Work",
  name: "Sistemas Solares Domésticos: Instalar, Vender e Criar Negócios de Energia Fora da Rede",
  skills: "Nomear as partes de um sistema solar doméstico e verificar a qualidade, Dimensionar um sistema a partir do consumo diário de energia, Instalar com segurança um pequeno sistema DC, Manter um sistema e encontrar avarias, Vender com honestidade a pronto ou em pagamento conforme o uso",
  outcome: "ajudar uma família a escolher, instalar e cuidar de um pequeno sistema solar doméstico: verificar se um kit é certificado, dimensioná-lo a partir do consumo diário de energia da família, instalá-lo com segurança, mantê-lo a funcionar e vendê-lo com honestidade, com preços e condições claros.",
  about: [
    "Este curso é para jovens, ajudantes de eletricista, donos de lojas e agentes de vendas em toda a África que querem ganhar dinheiro com pequenos sistemas solares fora da rede: luzes, carregar telefones, rádio, uma pequena televisão ou ventoinha para casas e quiosques sem uma ligação à rede de confiança, no interior do Quénia, no norte da Nigéria, na região Upper East do Gana, em Casamansa no Senegal ou no Extremo Norte dos Camarões.",
    "O Capítulo 1 explica como funciona um sistema solar doméstico: as partes e como verificar a qualidade, como dimensionar um sistema a partir do que uma família usa por dia, e como instalar um pequeno sistema com segurança. O Capítulo 2 explica como mantê-lo a funcionar e como gerir um negócio: manutenção e procura de avarias, venda a pronto ou em pagamento conforme o uso, e como escrever um orçamento honesto.",
    "Este curso é só para pequenos sistemas domésticos. Não ensina trabalhos na rede elétrica, na instalação elétrica da casa nem em sistemas grandes; isso precisa de um eletricista licenciado. Alguns países licenciam técnicos solares, por isso confirme com o regulador de energia do seu país. Todos os valores de dimensionamento e preços são exemplos. Cada lição dura cerca de cinco minutos e termina com uma tarefa. Há perguntas rápidas depois de cada lição, uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um orçamento para uma família real ou de exemplo (por exemplo uma família de cinco pessoas em Kitui, no Quénia, ou um quiosque em Kaolack, no Senegal): uma tabela com o que querem alimentar, com os watts e as horas por dia, o total de energia por dia, o tamanho do painel e da bateria que escolheu e como fez as contas, um kit certificado da base de dados VeraSol ou um kit com uma garantia clara, uma lista de segurança para a instalação, o preço a pronto e as condições de pagamento conforme o uso, se houver, com o total que o cliente vai pagar, e um cartão de manutenção e garantia para o cliente.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens, ajudantes de eletricista, donos de lojas e agentes de vendas de energia solar em vilas e aldeias de toda a África (Quénia, Nigéria, Gana, Senegal, Camarões, Marrocos e outros) que vendem, instalam ou querem começar um pequeno negócio solar.",
    startingPoint: "Muitos já viram lanternas e kits solares, e alguns vendem-nos. Poucos sabem dimensionar um sistema a partir do consumo de energia de uma família, verificar se um kit é certificado, instalar um pequeno sistema com segurança, encontrar avarias simples ou explicar com honestidade as condições de pagamento conforme o uso.",
    gap: "Kits pequenos demais ou falsos estragam-se depressa, e os clientes perdem dinheiro e confiança; uma má instalação causa incêndios de baterias e choques elétricos; condições de pagamento conforme o uso pouco claras prendem as famílias em dívidas. Um instalador e vendedor formado e honesto ganha clientes que voltam e ajuda as famílias a ter luz e energia limpas e de confiança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; contas simples (multiplicar, somar, dividir), cada palavra técnica explicada",
      "Aparelhos: um telefone simples com calculadora; os dados móveis são caros, por isso as pesquisas na base de dados são curtas",
      "Âmbito e segurança: só pequenos sistemas domésticos; nada de rede elétrica, instalação elétrica da casa ou sistemas grandes; as regras de licença mudam de país para país e os alunos confirmam com o regulador de energia",
      "Dinheiro: os preços e valores de dimensionamento são exemplos; nenhum conselho de investimento; as condições de pagamento conforme o uso são explicadas com honestidade",
      "O curso também está traduzido para francês e árabe, por isso os exemplos incluem clientes francófonos e do Norte de África"
    ],
    prerequisites: "Contas básicas. Não é preciso formação em eletricidade para começar; a instalação prática deve ser treinada com um instalador experiente."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um kit de sistema solar doméstico", action: "nomear cada parte (painel, controlador de carga, bateria, inversor, luzes e aparelhos) e verificar se o kit é certificado na base de dados VeraSol", standard: "nomeando todas as partes corretamente e anotando o resultado da certificação" },
    { id: "O2", condition: "Com uma lista do que uma família quer alimentar", action: "calcular a necessidade diária de energia em watts-hora e escolher o tamanho do painel e da bateria", standard: "com as contas certas e uma margem para as perdas" },
    { id: "O3", condition: "Ao instalar um pequeno sistema solar doméstico DC", action: "seguir uma lista de segurança para a posição do painel, os fios, os fusíveis e a posição da bateria", standard: "sem saltar nenhum passo e sem trabalhar na rede elétrica nem na instalação elétrica da casa" },
    { id: "O4", condition: "Quando um sistema não está a funcionar bem", action: "fazer a manutenção de rotina e encontrar avarias simples passo a passo", standard: "verificando o painel, as ligações, o controlador e a bateria por esta ordem" },
    { id: "O5", condition: "Quando vende um sistema a um cliente", action: "escrever um orçamento honesto com o preço a pronto, as condições de pagamento conforme o uso, se houver, o custo total e a garantia", standard: "para que o cliente saiba dizer o total que vai pagar antes de assinar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funciona um sistema solar doméstico",
      lessons: [
        {
          title: "As partes de um sistema solar doméstico, e a qualidade",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nomear as partes de um sistema solar doméstico e verificar se um kit é certificado.",
          text: [
            "Um sistema solar doméstico transforma a luz do sol em eletricidade para uma casa ou uma pequena loja. Tem cinco partes principais. O painel solar faz eletricidade com a luz do sol durante o dia. O controlador de carga envia essa eletricidade com segurança para a bateria e impede que ela carregue demais ou se esvazie demais. A bateria guarda energia para a noite. As luzes e os aparelhos (as cargas) usam a energia. Alguns sistemas têm um inversor, que muda a corrente DC da bateria para corrente AC para as tomadas normais.",
            "Muitos kits pequenos vêm numa só caixa, com o controlador e a bateria lá dentro, mais luzes DC, uma entrada para carregar telefones e, às vezes, um rádio, uma televisão ou uma ventoinha DC. Os aparelhos DC gastam menos energia do que os aparelhos AC com inversor, por isso fazem render mais um sistema pequeno.",
            "Há muitos kits falsos e de má qualidade. Antes de vender ou instalar um kit, verifique se é certificado pela VeraSol, um programa de qualidade independente que nasceu do Lighting Global. A sua base de dados gratuita na internet (data.verasol.org) mostra os kits solares certificados. Um kit certificado foi testado para ver o seu desempenho real, a sua durabilidade e se o que promete é verdade. Se um kit não estiver na lista, peça a garantia por escrito e os resultados dos testes.",
            "Exemplo: a Fatou, em Kaolack, no Senegal, compara dois kits do mesmo tamanho. Um está na base de dados VeraSol e tem garantia por escrito; o outro não tem etiqueta nem garantia. Ela escolhe o kit certificado para os seus clientes."
          ],
          words: [["Painel solar", "uma placa plana que faz eletricidade com a luz do sol."], ["Controlador de carga", "uma caixinha que carrega a bateria com segurança e a protege."], ["Inversor", "um aparelho que muda a corrente DC da bateria para corrente AC para as tomadas normais."], ["DC e AC", "DC (corrente contínua) é a corrente estável das baterias e dos painéis; AC (corrente alternada) é a corrente da rede elétrica e da maioria das tomadas normais."]],
          slides: [
            { title: "Cinco partes principais", bullets: ["Painel: faz energia com a luz do sol", "Controlador de carga: carrega a bateria com segurança", "Bateria: guarda energia para a noite; as cargas usam-na"] },
            { title: "Inversor e aparelhos DC", bullets: ["Inversor: DC da bateria para AC das tomadas normais", "Luzes, rádio, televisão e ventoinha DC gastam menos energia", "Muitos kits vêm numa só caixa"] },
            { title: "Verificar a qualidade: VeraSol", bullets: ["Programa de qualidade independente (nasceu do Lighting Global)", "Base de dados gratuita: data.verasol.org", "Não está na lista? Peça garantia por escrito e resultados dos testes"] }
          ],
          sources: [VERASOL, VERASOL_DB],
          tryIt: "Olhe para um kit solar (numa loja, em casa ou numa imagem na internet) e escreva o nome de cada parte. Se tiver dados móveis, procure um kit na base de dados VeraSol e anote se está na lista.",
          youCanNow: "nomear cada parte de um sistema solar doméstico e verificar se um kit é certificado.",
          quickCheck: [
            { objective: "O1", q: "Que parte impede a bateria de carregar demais?", options: ["A lâmpada", "A moldura do painel", "O controlador de carga", "O cabo do carregador do telefone"], answer: 2, why: "O controlador de carga carrega a bateria com segurança e protege-a de carregar demais e de se esvaziar demais." },
            { objective: "O1", q: "Onde pode verificar se um kit solar é certificado?", options: ["Na base de dados de produtos VeraSol", "Na cor da caixa", "Só na palavra do vendedor", "No peso do painel"], answer: 0, why: "A base de dados gratuita da VeraSol mostra os kits testados de forma independente e certificados." }
          ]
        },
        {
          title: "Dimensionar um sistema a partir do que uma família usa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular a necessidade diária de energia de uma família e escolher o tamanho do painel e da bateria.",
          text: [
            "Dimensione o sistema a partir do que a família quer mesmo alimentar. Para cada aparelho, multiplique a sua potência em watts (W) pelas horas que é usado por dia. Isso dá watts-hora (Wh) por dia. Some tudo.",
            "Exemplo (os valores são só exemplos): 3 lâmpadas LED de 3 W durante 5 horas = 45 Wh. Carregar 2 telefones, cerca de 10 Wh cada = 20 Wh. Um rádio, 5 W durante 4 horas = 20 Wh. Uma televisão DC, 20 W durante 3 horas = 60 Wh. Total: 145 Wh por dia. Some cerca de 30% para as perdas nos fios, no controlador e na bateria: cerca de 190 Wh por dia.",
            "Painel: divida a necessidade diária pelas horas de sol pleno do lugar onde o cliente vive (as horas de sol com toda a força num dia). Se houver cerca de 5 horas de sol pleno: 190 / 5 = 38 W. Arredonde para o tamanho de painel seguinte, por exemplo um painel de 50 W. As horas de sol pleno mudam com o lugar e a estação; consulte dados locais ou pergunte a um instalador experiente, e dimensione para os meses com mais nuvens.",
            "Bateria: tem de guardar pelo menos a necessidade de uma noite. A maioria das baterias não deve ser esvaziada por completo. Uma bateria de lítio é muitas vezes usada até cerca de 80%; uma de chumbo-ácido até cerca de 50% (confirme o valor do fabricante). Para 190 Wh com lítio: 190 / 0.8 = cerca de 238 Wh. Para uma bateria de 12 V, divida por 12: cerca de 20 Ah. Acrescente mais se a família quiser energia nos dias de nuvens."
          ],
          steps: ["Faça a lista de cada aparelho, os seus watts e as suas horas por dia.", "Multiplique os watts pelas horas de cada um e some: Wh por dia.", "Some cerca de 30% para as perdas.", "Painel: necessidade diária / horas de sol pleno, depois arredonde para cima.", "Bateria: necessidade diária / parte utilizável (por exemplo 0.8), depois / 12 para ter amperes-hora a 12 V."],
          words: [["Watt (W)", "quanta potência um aparelho usa num momento."], ["Watt-hora (Wh)", "energia usada: watts multiplicados por horas."], ["Horas de sol pleno", "o número de horas de sol com toda a força num dia, num lugar."], ["Ampere-hora (Ah)", "quanta carga uma bateria guarda; Wh = Ah x volts."]],
          slides: [
            { title: "Necessidade diária de energia", bullets: ["Watts x horas = Wh de cada aparelho", "Some tudo", "Exemplo: 145 Wh; +30% de perdas = cerca de 190 Wh"] },
            { title: "Tamanho do painel", bullets: ["Wh por dia / horas de sol pleno", "Exemplo: 190 / 5 = 38 W: escolha 50 W", "Dimensione para os meses com mais nuvens"] },
            { title: "Tamanho da bateria", bullets: ["Não a esvazie por completo: lítio cerca de 80%, chumbo-ácido cerca de 50%", "Exemplo: 190 / 0.8 = cerca de 238 Wh", "A 12 V: 238 / 12 = cerca de 20 Ah"] },
            { title: "Os valores são exemplos", bullets: ["Veja os watts de cada aparelho na sua etiqueta", "Confirme as horas de sol do lugar", "Confirme os valores do fabricante da bateria"] }
          ],
          tryIt: "Faça uma tabela de energia para a sua casa ou a de um vizinho: cada aparelho, watts, horas, Wh. Some o total, acrescente 30% e calcule o tamanho do painel e da bateria seguindo os passos.",
          youCanNow: "calcular a necessidade diária de energia de uma família e escolher o tamanho do painel e da bateria para ela.",
          quickCheck: [
            { objective: "O2", q: "Uma lâmpada de 4 W é usada 6 horas por dia. Quantos watts-hora são?", options: ["10 Wh", "2 Wh", "46 Wh", "24 Wh"], answer: 3, why: "4 W x 6 horas = 24 Wh." },
            { objective: "O2", q: "Uma família precisa de 200 Wh por dia e há 5 horas de sol pleno. Pela conta, qual é o painel mais pequeno?", options: ["40 W", "1,000 W", "5 W", "200 W"], answer: 0, why: "200 / 5 = 40 W; depois arredonde para o tamanho de painel seguinte que houver." }
          ]
        },
        {
          title: "Instalar um pequeno sistema com segurança",
          objectives: ["O3"],
          minutes: 6,
          goal: "Instalar um pequeno sistema solar doméstico DC seguindo uma lista de segurança.",
          text: [
            "Painel: coloque-o onde apanhe sol pleno durante a maior parte do dia, sem sombra de árvores, paredes ou fios. Vire-o para o equador: nos países a norte do equador, vire-o para sul; a sul do equador, vire-o para norte. Incline-o pelo menos um pouco, para a chuva lavar o pó. Fixe-o bem para o vento não o levantar. Num telhado, use uma escada segura, peça a um ajudante para a segurar, e nunca trabalhe com chuva ou vento.",
            "Bateria: guarde-a dentro de casa, num lugar seco, à sombra e arejado, longe do chão e fora do alcance das crianças, longe do fogo da cozinha. As baterias de chumbo-ácido soltam um gás que pega fogo quando estão a carregar e têm ácido: mantenha-as arejadas, use óculos de proteção e luvas, e mantenha as chamas longe. Um curto-circuito entre os terminais de uma bateria pode derreter os fios e começar um incêndio.",
            "Fios: use a grossura de cabo que o fabricante do kit indica, ligue o vermelho ao positivo (+) e o preto ao negativo (-), e coloque o fusível ou disjuntor que o fabricante fornece, perto da bateria. Na maioria dos kits com controlador separado, ligue primeiro a bateria ao controlador, depois o painel, depois as cargas; siga o manual do fabricante se ele disser outra coisa. Prenda bem os cabos para não serem puxados nem roídos.",
            "Limites: este curso é só para pequenos sistemas DC. Nunca ligue um sistema solar à rede elétrica nem à instalação elétrica da casa, e nunca abra um inversor. Esses trabalhos precisam de um eletricista licenciado. Alguns países licenciam técnicos solares; no Quénia, confirme com a EPRA, e nos outros países com o regulador de energia."
          ],
          steps: ["Escolha um lugar com sol e sem sombra; vire o painel para o equador com uma pequena inclinação; fixe-o bem.", "Trabalhe em altura só com uma escada segura e um ajudante; nunca com chuva ou vento.", "Coloque a bateria dentro de casa: seca, à sombra, arejada, longe do chão, das crianças e do fogo.", "Use o cabo certo, vermelho ao +, preto ao -, e coloque o fusível perto da bateria.", "Ligue primeiro a bateria ao controlador, depois o painel, depois as cargas, a não ser que o manual diga outra coisa.", "Nenhuma ligação à rede elétrica nem à instalação da casa; não abrir o inversor."],
          words: [["Polaridade", "qual fio é o positivo (+) e qual é o negativo (-). Trocá-los pode estragar as peças."], ["Fusível", "uma pequena peça de segurança que corta o circuito se passar corrente demais."], ["Arejado", "com ar fresco a circular, para os gases não se acumularem."]],
          slides: [
            { title: "Posição do painel", bullets: ["Sol pleno, sem sombra", "Virado para o equador: sul se estiver a norte dele, norte se estiver a sul", "Pequena inclinação; bem fixo; escada segura e um ajudante"] },
            { title: "Posição da bateria", bullets: ["Dentro de casa: seca, à sombra, arejada, longe do chão", "Longe das crianças e do fogo da cozinha", "Chumbo-ácido: ácido e gás; óculos, luvas, nada de chamas"] },
            { title: "Fios", bullets: ["Cabo certo; vermelho +, preto -", "Fusível perto da bateria", "Primeiro bateria ao controlador, depois painel, depois cargas (ou como diz o manual)"] },
            { title: "Os seus limites", bullets: ["Só pequenos sistemas DC", "Nunca a rede nem a instalação da casa; nunca abrir um inversor", "Licenças: no Quénia a EPRA; nos outros países o regulador de energia"] }
          ],
          sources: [EPRA, NFPA],
          tryIt: "Escreva a sua lista de segurança para a instalação com pelo menos oito linhas desta lição. Se puder, dê uma volta a uma casa, escolha o melhor lugar para o painel e para a bateria, e escreva porquê.",
          youCanNow: "instalar com segurança um pequeno sistema solar doméstico DC seguindo uma lista, e saber que trabalhos deixar para um eletricista licenciado.",
          quickCheck: [
            { objective: "O3", q: "A casa de um cliente fica em Nairobi, um pouco a sul do equador. Para onde deve ficar virado o painel?", options: ["Para sul", "Para baixo", "Para norte, para o equador", "Para a sombra"], answer: 2, why: "Os painéis ficam virados para o equador; a sul dele, isso quer dizer virados para norte." },
            { objective: "O3", q: "Um cliente pede-lhe para ligar o seu kit solar à instalação da rede elétrica da casa. O que faz?", options: ["Faz depressa", "Recusa: trabalhos na rede e na instalação da casa precisam de um eletricista licenciado", "Faz à noite", "Abre primeiro o inversor"], answer: 1, why: "Este curso é só para pequenos sistemas DC; trabalhos na rede e na instalação da casa precisam de um eletricista licenciado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funciona um sistema solar doméstico",
        questions: [
          { objective: "O1", q: "O que faz um inversor?", options: ["Guarda energia", "Faz energia com a luz do sol", "Mede a luz do sol", "Muda a corrente DC da bateria para corrente AC para as tomadas normais"], answer: 3, why: "Um inversor transforma DC em AC." },
          { objective: "O1", q: "Porque escolher um kit que está na base de dados VeraSol?", options: ["Foi testado de forma independente para ver o desempenho, a durabilidade e se o que promete é verdade", "É sempre o mais barato", "Nunca precisa de manutenção", "Funciona sem sol"], answer: 0, why: "A VeraSol certifica os kits depois de testes independentes." },
          { objective: "O2", q: "Uma família precisa de 120 Wh por dia antes das perdas. Quanto é, mais ou menos, com mais 30%?", options: ["90 Wh", "150 Wh", "156 Wh", "360 Wh"], answer: 2, why: "120 x 1.3 = 156 Wh." },
          { objective: "O2", q: "Porque não se deve esvaziar por completo uma bateria de lítio todas as noites?", options: ["Deixa as luzes mais fortes", "Ela é só para o dia", "É proibido por lei", "Esvaziá-la por completo encurta a sua vida, por isso dimensiona-se para usar cerca de 80%"], answer: 3, why: "Deixar alguma carga na bateria protege-a, por isso o dimensionamento conta só com a parte utilizável." },
          { objective: "O3", q: "Onde deve ficar o fusível?", options: ["Perto da bateria, como diz o fabricante", "No telhado", "Dentro da lâmpada", "Em qualquer lugar, ou em lado nenhum"], answer: 0, why: "Um fusível perto da bateria protege os fios de um curto-circuito na bateria." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manter o sistema a funcionar e gerir um negócio solar",
      lessons: [
        {
          title: "Manutenção e procura de avarias simples",
          objectives: ["O4"],
          minutes: 5,
          goal: "Fazer a manutenção de rotina e encontrar avarias simples passo a passo.",
          text: [
            "Um sistema bem cuidado dura anos. Ensine ao cliente: limpe o painel com água e um pano macio quando tiver pó, de manhã cedo ou ao fim da tarde, quando está fresco (nunca com sabão que deixa uma película, e nunca suba para cima dele). Corte os ramos de árvores que fazem sombra nova. Mantenha a bateria limpa e seca. Desligue as cargas que não são precisas.",
            "Quando um cliente diz \"as luzes apagam-se cedo\", verifique por esta ordem: (1) Painel: está sujo ou com sombra agora? (2) Ligações: há fios ou fichas soltos, partidos ou com corrosão? (3) Controlador: o que mostram as suas luzes ou o seu ecrã? Leia o manual para saber o que querem dizer. (4) Bateria: está velha, inchada, quente ou a verter? (5) Cargas: a família juntou uma televisão maior ou mais lâmpadas do que o sistema foi dimensionado para aguentar?",
            "Muitas avarias são sujidade, sombra, fichas soltas ou cargas a mais. Uma bateria inchada, muito quente ou a verter tem de ser trocada; nunca a carregue nem a abra. As baterias velhas são lixo eletrónico: nunca as queime, enterre ou deite fora, e entregue-as a um recolhedor aprovado ou ao programa de recolha da empresa do kit.",
            "Exemplo: o Chinedu, em Kano, recebe uma chamada a dizer que as luzes se apagam às 8 da noite. Ele encontra um ramo novo de árvore a fazer sombra no painel e uma segunda televisão. Corta o ramo com a autorização do dono e explica o tamanho do sistema; a família decide juntar um segundo painel."
          ],
          steps: ["Verifique o painel: limpo e sem sombra?", "Verifique as ligações: soltas, partidas ou com corrosão?", "Compare as luzes ou o ecrã do controlador com o manual.", "Verifique a bateria: velha, inchada, quente ou a verter?", "Verifique as cargas: aparelhos a mais ou maiores do que o previsto?"],
          words: [["Corrosão", "uma crosta verde ou branca nas ligações de metal que não deixa a energia passar bem."], ["Programa de recolha", "um programa de uma empresa para recolher os seus produtos velhos e reciclá-los com segurança."]],
          slides: [
            { title: "Cuidados de rotina", bullets: ["Limpe o painel com água e um pano macio quando está fresco", "Corte a sombra nova; mantenha a bateria limpa e seca", "Desligue o que não é preciso"] },
            { title: "Procurar avarias por ordem", bullets: ["1. Painel: sujo ou com sombra?", "2. Ligações: soltas ou com corrosão?", "3. Luzes do controlador; 4. Bateria; 5. Cargas a mais"] },
            { title: "Atenção à bateria", bullets: ["Inchada, muito quente ou a verter: troque-a", "Nunca carregue nem abra uma bateria estragada", "Baterias velhas: recolhedor aprovado ou programa de recolha"] }
          ],
          sources: [NFPA, WHO_EWASTE],
          tryIt: "Escreva um cartão de manutenção para um cliente (quatro linhas de cuidados de rotina) e uma lista de cinco passos para procurar avarias, que vai levar a cada visita de assistência.",
          youCanNow: "ensinar um cliente a cuidar do seu sistema e encontrar avarias simples pela ordem certa.",
          quickCheck: [
            { objective: "O4", q: "As luzes apagam-se cedo. Qual é a primeira coisa a verificar?", options: ["A cor da bateria", "Se o painel está sujo ou com sombra", "O telefone do cliente", "O preço do kit"], answer: 1, why: "Comece pelo painel: a sujidade e a sombra nova são causas comuns e fáceis." },
            { objective: "O4", q: "Encontra uma bateria inchada e quente. O que faz?", options: ["Troca-a; não a carrega nem a abre", "Carrega-a durante mais tempo", "Abre-a para ver lá dentro", "Queima-a"], answer: 0, why: "Uma bateria inchada e quente é perigosa e tem de ser trocada com segurança." }
          ]
        },
        {
          title: "Vender com honestidade: a pronto e pagamento conforme o uso",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explicar o preço a pronto e as condições de pagamento conforme o uso para que o cliente saiba dizer o total que vai pagar.",
          text: [
            "Muitas famílias não conseguem pagar o preço todo de uma vez, por isso muitas empresas vendem kits em pagamento conforme o uso (PAYGo, do inglês \"pay-as-you-go\"). O cliente paga uma entrada e depois pequenas prestações, muitas vezes por dia, por semana ou por mês, por dinheiro móvel. Se os pagamentos pararem, o kit bloqueia até ele voltar a pagar. Depois do último pagamento, o kit é do cliente.",
            "O PAYGo ajuda as famílias a ter energia solar mais cedo, mas o total costuma ser mais do que o preço a pronto. Um vendedor honesto mostra os dois. Exemplo (os valores são só exemplos): preço a pronto KES 20,000. PAYGo: entrada de KES 2,000, depois KES 1,500 por mês durante 18 meses: 2,000 + (1,500 x 18) = KES 29,000 no total. O cliente deve saber dizer esse total antes de assinar.",
            "A GOGLA, a associação do setor da energia solar fora da rede, tem um código de proteção do consumidor baseado em vendas e preços responsáveis (não vender mais do que a família pode pagar), transparência (informação clara e honesta), tratamento justo e respeitoso, bom serviço e qualidade do produto. Siga-o, quer a sua empresa o tenha assinado ou não.",
            "Nunca prometa mais do que o sistema consegue alimentar. Nunca peça a um cliente o PIN do dinheiro móvel; os pagamentos vão para o número ou a caixa oficial da empresa, e uma empresa verdadeira nunca pede um PIN."
          ],
          steps: ["Mostre o preço a pronto.", "Mostre a entrada do PAYGo, o valor das prestações, de quanto em quanto tempo e durante quanto tempo.", "Calcule com o cliente o custo total do PAYGo.", "Explique o que acontece se faltar um pagamento, e a garantia.", "Confirme que o cliente pode pagar as prestações; nunca peça um PIN."],
          words: [["PAYGo (pagamento conforme o uso)", "comprar um kit com uma entrada e pequenas prestações; bloqueia se os pagamentos pararem e é seu depois do último."], ["Entrada", "o primeiro pagamento, antes de o cliente levar o kit."], ["Proteção do consumidor", "regras e hábitos que tratam os clientes com justiça e honestidade."]],
          slides: [
            { title: "Como funciona o PAYGo", bullets: ["Entrada, depois pequenas prestações por dinheiro móvel", "O kit bloqueia se os pagamentos pararem", "O kit é do cliente depois do último pagamento"] },
            { title: "Mostre o total", bullets: ["O total do PAYGo costuma ser mais do que a pronto", "Exemplo: 2,000 + 1,500 x 18 = KES 29,000 contra KES 20,000 a pronto", "O cliente sabe dizer o total antes de assinar"] },
            { title: "Venda com justiça (código GOGLA)", bullets: ["Vendas responsáveis: só o que podem pagar", "Transparência; tratamento justo e respeitoso", "Bom serviço e qualidade"] },
            { title: "Nunca", bullets: ["Prometa mais do que o sistema consegue alimentar", "Peça um PIN do dinheiro móvel"] }
          ],
          sources: [GOGLA_CP],
          tryIt: "Para um kit que conhece (ou o do exemplo), escreva lado a lado o preço a pronto e as condições do PAYGo, e calcule o custo total do PAYGo. Pratique explicá-lo em voz alta em menos de um minuto.",
          youCanNow: "explicar com honestidade os preços a pronto e em pagamento conforme o uso, para que o cliente saiba o total antes de assinar.",
          quickCheck: [
            { objective: "O5", q: "Entrada do PAYGo XOF 10,000, depois XOF 5,000 por mês durante 12 meses. Qual é o total?", options: ["XOF 15,000", "XOF 60,000", "XOF 50,000", "XOF 70,000"], answer: 3, why: "10,000 + (5,000 x 12) = 70,000." },
            { objective: "O5", q: "Qual destas é uma venda honesta?", options: ["Esconder o custo total do PAYGo", "Prometer que o kit liga uma geleira quando não consegue", "Mostrar lado a lado o preço a pronto e o custo total do PAYGo", "Vender a uma família mais do que ela pode pagar"], answer: 2, why: "Transparência quer dizer mostrar os dois preços com clareza." }
          ]
        },
        {
          title: "Escrever um orçamento e gerir o seu negócio solar",
          objectives: ["O5", "O2"],
          minutes: 5,
          goal: "Escrever um orçamento completo e honesto para uma família.",
          text: [
            "Um bom orçamento ganha confiança. Mostra ao cliente o que ele pediu para alimentar, a tabela de energia, o sistema que escolheu e porquê, o preço, as condições de pagamento e a garantia. Tem também o seu nome, o seu número de telefone e a data.",
            "O seu próprio preço por uma instalação tem de cobrir o kit, os cabos e acessórios, o transporte até à casa, o seu tempo e um lucro. Exemplo (os valores são só exemplos): kit MAD 2,500, cabos e acessórios MAD 300, transporte MAD 150, mão de obra MAD 400: custo MAD 3,350. Some MAD 400 de lucro: MAD 3,750.",
            "Depois da instalação, dê ao cliente um cartão: os passos de manutenção, o que querem dizer as luzes do controlador, a garantia e o seu número para problemas. Volte passado um mês para verificar. Clientes contentes mandam-lhe os vizinhos; é assim que os negócios solares crescem nas aldeias, de Kitui a Kaolack.",
            "Guarde um registo simples de cada trabalho: o cliente, o kit e o seu número de série, a data, o preço e as visitas de reparação. Ajuda-o a cumprir as garantias e a ver que kits se estragam."
          ],
          steps: ["Escreva a tabela de energia e o dimensionamento que fez.", "Diga o nome do kit e se é certificado ou tem garantia por escrito.", "Junte a sua lista de segurança.", "Mostre o preço a pronto e as condições do PAYGo, se houver, com o total.", "Junte o cartão de manutenção e garantia, com o seu nome, número e a data."],
          words: [["Orçamento", "uma proposta escrita que mostra o que vai fornecer e fazer, e o preço."], ["Número de série", "o número único de um produto, usado para a sua garantia."], ["Visita de reparação", "uma visita de volta para resolver um problema depois da instalação."]],
          slides: [
            { title: "O que um orçamento mostra", bullets: ["O que querem alimentar: tabela de energia", "O sistema e porquê; certificado ou com garantia", "Preço, condições, garantia; o seu nome, número, data"] },
            { title: "O seu preço de instalação", bullets: ["Kit + cabos + transporte + mão de obra + lucro", "Exemplo: custo MAD 3,350 + MAD 400 = MAD 3,750", "Os valores são só exemplos"] },
            { title: "Depois do trabalho", bullets: ["Cartão de manutenção e garantia", "Volte passado um mês", "Registo: cliente, kit, número de série, data, preço"] }
          ],
          tryIt: "Escreva o seu orçamento completo para uma família, como explicado na tarefa final. Leia-o a um amigo e peça-lhe que diga o total que pagaria.",
          youCanNow: "escrever um orçamento completo e honesto para um sistema solar doméstico e guardar bons registos de cada trabalho.",
          quickCheck: [
            { objective: "O5", q: "Que item deve estar em todos os orçamentos?", options: ["O PIN do dinheiro móvel do cliente", "O total que o cliente vai pagar, e a garantia", "Uma promessa de energia grátis para sempre", "Só os preços dos seus concorrentes"], answer: 1, why: "O custo total e a garantia deixam o cliente decidir com justiça." },
            { objective: "O2", q: "Porque pôr a tabela de energia no orçamento?", options: ["Mostra como dimensionou o sistema para o uso real da família", "Para o orçamento ficar mais comprido", "Os clientes gostam de números", "Não é precisa"], answer: 0, why: "A tabela mostra que o sistema corresponde ao que a família vai alimentar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Manter o sistema a funcionar e vender",
        questions: [
          { objective: "O4", q: "Como deve um cliente limpar um painel com pó?", options: ["Com sabão ao meio-dia", "Subindo para cima dele e esfregando", "Com água e um pano macio quando está fresco", "Com areia"], answer: 2, why: "Água e um pano macio, com o painel fresco, limpam sem estragar." },
          { objective: "O4", q: "As luzes apagam-se cedo e o painel está limpo e sem sombra. O que verifica a seguir?", options: ["O canal de televisão do cliente", "As ligações: fios soltos, partidos ou com corrosão", "A previsão do tempo", "Mais nada"], answer: 1, why: "As ligações vêm a seguir na ordem de procura de avarias." },
          { objective: "O4", q: "O que deve acontecer a uma bateria solar velha?", options: ["Queimá-la", "Enterrá-la", "Deitá-la ao rio", "Entregá-la a um recolhedor aprovado ou a um programa de recolha"], answer: 3, why: "As baterias velhas são lixo eletrónico e precisam de ser recicladas com segurança." },
          { objective: "O5", q: "O que acontece no PAYGo quando os pagamentos param?", options: ["O kit bloqueia até o cliente voltar a pagar", "O kit passa logo a ser do cliente", "O painel parte-se", "Não acontece nada"], answer: 0, why: "Os kits PAYGo bloqueiam quando os pagamentos param e desbloqueiam quando são pagos." },
          { objective: "O5", q: "Um cliente só consegue pagar metade da prestação mensal. O que quer dizer vender com responsabilidade?", options: ["Vender na mesma o kit grande", "Esconder o valor das prestações", "Oferecer um kit ou um plano mais pequeno que ele possa pagar", "Pedir o PIN dele"], answer: 2, why: "Vendas responsáveis quer dizer não vender mais do que a família pode pagar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Sistemas Solares Domésticos: Instalar, Vender e Criar Negócios de Energia Fora da Rede",
    questions: [
      { objective: "O1", q: "Que parte guarda energia para a noite?", options: ["O painel", "A bateria", "O fusível", "A luz"], answer: 1, why: "A bateria guarda energia para usar quando não há sol." },
      { objective: "O1", q: "O que é a VeraSol?", options: ["Uma marca de baterias", "Uma empresa solar que vende em PAYGo", "Um programa de qualidade independente que certifica kits solares fora da rede", "Um imposto do governo"], answer: 2, why: "A VeraSol é um programa independente de garantia de qualidade para a energia solar fora da rede." },
      { objective: "O1", q: "Um kit não tem etiqueta, nem certificação, nem garantia. O que faz?", options: ["Pede uma garantia por escrito e os resultados dos testes, ou escolhe um kit certificado", "Vende-o como certificado", "Vende-o mais caro", "Instala-o sem dizer nada a ninguém"], answer: 0, why: "Sem prova de qualidade, peça uma garantia e os resultados dos testes, ou escolha um kit certificado." },
      { objective: "O1", q: "Porque é que os kits pequenos usam muitas vezes aparelhos DC?", options: ["Fazem mais barulho", "Precisam da rede elétrica", "São sempre grátis", "Gastam menos energia do que os aparelhos AC com inversor"], answer: 3, why: "Os aparelhos DC evitam as perdas do inversor e gastam menos energia." },
      { objective: "O2", q: "Um rádio usa 5 W durante 6 horas por dia. Quantos Wh?", options: ["11 Wh", "30 Wh", "56 Wh", "1 Wh"], answer: 1, why: "5 x 6 = 30 Wh." },
      { objective: "O2", q: "Porque somar cerca de 30% ao total diário?", options: ["Para as perdas nos fios, no controlador e na bateria", "Para o lucro", "Para os impostos", "Para o saldo do telefone do cliente"], answer: 0, why: "Perde-se energia pelo caminho, por isso o sistema tem de fazer mais do que as cargas usam." },
      { objective: "O2", q: "Necessidade diária de 300 Wh, 5 horas de sol pleno. Pela conta, qual é o painel mais pequeno?", options: ["1,500 W", "30 W", "6 W", "60 W"], answer: 3, why: "300 / 5 = 60 W; depois arredonde para o tamanho de painel seguinte." },
      { objective: "O2", q: "Necessidade diária de 240 Wh, bateria de lítio usada até 80%, 12 V. Mais ou menos quantos amperes-hora?", options: ["Cerca de 25 Ah", "Cerca de 12 Ah", "Cerca de 300 Ah", "Cerca de 2 Ah"], answer: 0, why: "240 / 0.8 = 300 Wh; 300 / 12 = 25 Ah." },
      { objective: "O3", q: "Um cliente vive no norte do Gana, a norte do equador. Para onde deve ficar virado o painel?", options: ["Para norte", "Para cima, sem nenhuma inclinação", "Para sul, para o equador", "Só para leste"], answer: 2, why: "A norte do equador, os painéis ficam virados para sul, para o equador, com uma pequena inclinação." },
      { objective: "O3", q: "Onde deve ficar a bateria?", options: ["No telhado, ao sol", "Ao lado do fogo da cozinha", "Dentro de casa, seca, à sombra, arejada, longe do chão e das crianças", "Numa caixa fechada sem ar"], answer: 2, why: "Um lugar seco, à sombra e arejado, longe das crianças e do fogo, é o mais seguro." },
      { objective: "O3", q: "Na maioria dos kits com controlador separado, o que liga primeiro?", options: ["O painel às cargas", "A bateria ao controlador", "As cargas à rede elétrica", "O painel diretamente à bateria"], answer: 1, why: "Ligar primeiro a bateria ao controlador deixa o controlador ajustar-se; depois o painel, depois as cargas, a não ser que o manual diga outra coisa." },
      { objective: "O3", q: "Que trabalho fica fora deste curso e precisa de um eletricista licenciado?", options: ["Limpar o painel", "Colocar a bateria", "Colocar o fusível do fabricante", "Ligar o sistema à rede elétrica ou à instalação elétrica da casa"], answer: 3, why: "Os trabalhos na rede e na instalação da casa são só para eletricistas licenciados." },
      { objective: "O3", q: "Porque manter as baterias de chumbo-ácido arejadas e longe das chamas?", options: ["Soltam um gás que pega fogo quando estão a carregar", "Ficam frias demais", "Atraem insetos", "Precisam da luz do sol"], answer: 0, why: "As baterias de chumbo-ácido soltam um gás que pega fogo quando estão a carregar." },
      { objective: "O4", q: "Qual é a melhor altura para limpar um painel?", options: ["Ao meio-dia, com sol pleno", "De manhã cedo ou ao fim da tarde, quando está fresco", "Durante uma tempestade", "Nunca"], answer: 1, why: "Um painel fresco é mais seguro de tocar e limpar do que um quente ao sol pleno." },
      { objective: "O4", q: "Qual é a ordem certa para procurar avarias?", options: ["Bateria, depois adivinhar", "Cargas, depois comprar um kit novo", "Painel, ligações, controlador, bateria, cargas", "Só o controlador"], answer: 2, why: "Verificar por esta ordem encontra primeiro as causas comuns e fáceis." },
      { objective: "O4", q: "Uma família juntou uma televisão grande e agora as luzes apagam-se cedo. Qual é a causa provável?", options: ["O painel está ao contrário", "O sol está mais fraco", "O fusível é forte demais", "Mais carga do que o sistema foi dimensionado para aguentar"], answer: 3, why: "As cargas a mais usam mais energia do que o sistema faz e guarda." },
      { objective: "O5", q: "Preço a pronto NGN 150,000. PAYGo: entrada de NGN 20,000, depois NGN 12,000 por mês durante 12 meses. Qual é o total do PAYGo?", options: ["NGN 164,000", "NGN 144,000", "NGN 32,000", "NGN 150,000"], answer: 0, why: "20,000 + (12,000 x 12) = 164,000." },
      { objective: "O5", q: "Quem vai pedir a um cliente o PIN do dinheiro móvel?", options: ["A empresa solar", "O seu chefe", "Nenhuma empresa verdadeira: só os burlões", "O instalador"], answer: 2, why: "Uma empresa verdadeira nunca pede um PIN." },
      { objective: "O5", q: "O que faz parte do código de proteção do consumidor da GOGLA?", options: ["Vender o kit maior a toda a gente", "Transparência: informação clara e honesta", "Esconder o preço total", "Nenhum serviço depois da venda"], answer: 1, why: "A transparência e as vendas responsáveis são princípios centrais." },
      { objective: "O5", q: "Kit EGP 4,000, cabos EGP 500, transporte EGP 300, mão de obra EGP 700, lucro EGP 500. Qual é o seu preço?", options: ["EGP 5,500", "EGP 4,500", "EGP 5,000", "EGP 6,000"], answer: 3, why: "4,000 + 500 + 300 + 700 + 500 = 6,000." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 4, 6, 8, 11, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do seu orçamento e tente outra vez.",
    criteria: [
      { name: "Qualidade verificada", objective: "O1", notYet: "O kit não tem nome, ou a qualidade não foi verificada.", meets: "O kit e as suas partes têm nome, e o orçamento anota se está na base de dados VeraSol ou tem garantia por escrito.", exceeds: "Também explica ao cliente porque é importante um kit certificado." },
      { name: "Bem dimensionado", objective: "O2", notYet: "Não há tabela de energia, ou as contas estão erradas.", meets: "A tabela de energia, a margem de 30% e os tamanhos do painel e da bateria estão calculados corretamente.", exceeds: "Também conta com os dias de nuvens ou os meses com mais nuvens, e diz de onde veio o valor das horas de sol." },
      { name: "Instalação segura", objective: "O3", notYet: "Não há lista de segurança, ou ela inclui trabalhos na rede ou na instalação da casa.", meets: "A lista cobre a posição do painel, a segurança da escada, a posição da bateria, a polaridade, o fusível e a ordem das ligações, sem trabalhos na rede.", exceeds: "Também diz qual é o regulador de energia a consultar sobre as licenças." },
      { name: "Cuidados e avarias", objective: "O4", notYet: "Não há cartão de manutenção, ou tem conselhos perigosos.", meets: "O cartão dá os cuidados de rotina e a ordem de cinco passos para as avarias, e diz o que fazer com as baterias velhas.", exceeds: "Também explica as luzes do controlador deste kit." },
      { name: "Preço e condições honestos", objective: "O5", notYet: "Falta o custo total do PAYGo ou a garantia, ou as contas estão erradas.", meets: "O preço a pronto, as condições do PAYGo, se houver, e o total certo estão lado a lado, com a garantia e o contacto do instalador.", exceeds: "Também confirma que as prestações cabem no orçamento da família e diz o que acontece se faltar um pagamento." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter escrito um orçamento com tabela de energia para um cliente real em 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter vendido ou instalado um kit certificado em 90 dias",
      "Alunos que dizem não ter tido incêndios de baterias, choques elétricos nem queixas de clientes sobre custos escondidos em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone simples com calculadora; dados móveis para uma pesquisa curta na base de dados VeraSol, se possível",
      "Papel e caneta para a tabela de energia, a lista de segurança, o cartão de manutenção e o orçamento",
      "Se possível, um pequeno kit solar certificado para ver e nomear as partes",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Num grupo de jovens, de formação profissional ou de mulheres: façam o teste inicial juntos e depois um capítulo por sessão, com os alunos a dimensionar um sistema para uma casa real que conhecem.",
      "A instalação prática só deve ser treinada com um instalador experiente, em pequenos kits DC; nunca deixe os alunos trabalhar na rede elétrica, na instalação elétrica da casa ou em inversores.",
      "Antes do curso, descubra se o seu país licencia técnicos solares e que recolhedores de lixo eletrónico ou programas de recolha servem a sua zona.",
      "Nunca peça aos alunos para partilhar PINs ou palavras-passe na aula.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
