"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-women-entrepreneurs.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// All money figures are examples, exactly as in the English; no financial advice.

const UNWOMEN = { name: "ONU Mulheres: empoderamento económico (trabalho de cuidado não pago, acesso a bens e a financiamento)", url: "https://www.unwomen.org/en/what-we-do/economic-empowerment" };
const WEF = { name: "Women Enterprise Fund, Quénia (fundo do governo para empresas de mulheres)", url: "https://wef.co.ke/" };
const SMEDAN = { name: "SMEDAN, Nigéria: registo gratuito, SME Digital Academy e programas como o Women In Self-employment Programme", url: "https://smedan.gov.ng/" };
const DERFJ = { name: "DER/FJ, Senegal: Délégation générale à l'Entreprenariat Rapide des Femmes et des Jeunes (formalização, formação, financiamento)", url: "https://der.sn/" };
const GEA = { name: "Ghana Enterprises Agency: apoio às micro e pequenas empresas", url: "https://gea.gov.gh/" };
const AFAWA = { name: "Banco Africano de Desenvolvimento: AFAWA, Affirmative Finance Action for Women in Africa", url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/affirmative-finance-action-for-women-in-africa" };

module.exports = {
  id: "afr-women-entrepreneurs-pt",
  lang: "pt",
  translationOf: "afr-women-entrepreneurs",
  category: "Africa: Life and Work",
  name: "Mulheres Empreendedoras: Começar e Fazer Crescer um Negócio",
  skills: "Escolher uma ideia de negócio que combina com a sua vida, Testar uma ideia com clientes verdadeiros, Definir preços com lucro e pagar a si mesma, Planear o tempo e o apoio da família, Encontrar financiamento e apoio com segurança, Criar uma rede de contactos e um plano de crescimento",
  outcome: "começar ou fazer crescer um pequeno negócio que combina com a sua vida: escolher uma ideia, testá-la com clientes verdadeiros, definir preços que dão lucro e pagar a si mesma, planear a sua semana com o apoio de que precisa, encontrar financiamento e apoio seguros e escrever um plano de crescimento de seis meses.",
  about: [
    "As mulheres gerem uma grande parte dos pequenos negócios em toda a África: nos mercados, salões, cozinhas, machambas, lojas e na internet. Muitas fazem-no enquanto cuidam dos filhos e da família, muitas vezes com menos acesso a empréstimos, terra e tempo. Este curso é para mulheres no Quénia, Nigéria, Gana, Senegal, Camarões, Egito e em toda a África que querem começar um negócio ou fazer o que já têm render mais.",
    "Você vai escolher uma ideia que combina com as suas habilidades, o seu tempo e a procura local, testá-la de forma barata antes de gastar muito, definir o preço do seu produto para dar lucro e pagar a você, planear a sua semana e a ajuda de que precisa em casa, encontrar programas de financiamento e de apoio e verificar que são verdadeiros, e criar uma rede de contactos e um plano de seis meses.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" para o seu próprio negócio. Os valores em dinheiro são só exemplos. O curso explica opções; não é aconselhamento financeiro. Para mais detalhes, veja nesta categoria os cursos sobre grupos de poupança, vender na internet e registar um negócio."
  ],
  finalTask: "Escreva um plano de negócio de uma página para você: a ideia escolhida com as suas pontuações, o que aprendeu ao testá-la com clientes verdadeiros, o custo, o preço e o lucro de um produto e quanto vai pagar a si mesma, um plano semanal do tempo com quem ajuda, uma opção de financiamento ou de apoio que verificou no site oficial, e três metas para os próximos seis meses com uma mentora ou um grupo a contactar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Mulheres em toda a África, nas cidades e nas aldeias, que têm ou querem começar um pequeno negócio: comerciantes, cozinheiras, costureiras, cabeleireiras, agricultoras que transformam e vendem, donas de lojas e vendedoras na internet. As idades e a escolaridade variam muito; muitas são mães e cuidadoras.",
    startingPoint: "Muitas já ganham algum dinheiro com vendas ou com uma habilidade, e muitas fazem parte de um grupo de poupança. Poucas testam ideias antes de gastar, calculam todos os custos dos produtos, pagam a si mesmas um valor fixo ou escrevem metas. Algumas não controlam o dinheiro que ganham ou não mantêm em segredo o PIN do dinheiro móvel.",
    gap: "As mulheres empreendedoras muitas vezes têm menos tempo, menos acesso a financiamento e menos contactos de negócio, e muitos negócios ficam pequenos ou fecham porque os preços não cobrem os custos ou a dona está sobrecarregada. As alunas precisam de escolher e testar ideias com cuidado, definir preços com lucro, planear o tempo e o apoio, chegar a financiamento e programas verdadeiros com segurança e crescer através de redes de contactos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitas alunas falam a língua do curso como segunda língua (o curso também existe noutras línguas)",
      "Tempo: muito trabalho de cuidado e de casa; lições de 4 a 6 minutos que cabem à volta disso",
      "Aparelhos: um telefone simples, às vezes partilhado com a família; dados móveis caros",
      "Dinheiro: orçamentos pequenos; sem aconselhamento financeiro; os nomes e as condições dos programas mudam, por isso as alunas verificam nos sites oficiais",
      "Segurança: burlas que pedem às mulheres uma taxa para obter um subsídio ou um empréstimo; algumas mulheres sofrem pressão ou controlo sobre o seu dinheiro"
    ],
    prerequisites: "Nenhum. Ajuda fazer antes: \"Grupos de Poupança e Microfinanças\" nesta categoria."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com duas ou três ideias de negócio", action: "dar uma pontuação a cada ideia nas suas habilidades, no tempo, no custo inicial e na procura local, e escolher uma", standard: "usando as mesmas pontuações para todas as ideias e escrevendo porque a vencedora combina com você" },
    { id: "O2", condition: "Antes de gastar a maior parte do seu dinheiro numa ideia nova", action: "testar a ideia com um pequeno lote e pelo menos dez clientes verdadeiros", standard: "anotando quantos compraram, o preço que pagaram e uma mudança a fazer" },
    { id: "O3", condition: "Com os custos de um produto ou serviço", action: "calcular o custo por unidade, definir um preço com lucro e definir um valor para pagar a si mesma", standard: "com todos os custos incluídos e as contas certas" },
    { id: "O4", condition: "Com o seu trabalho e as suas tarefas de casa de uma semana", action: "fazer um plano semanal do tempo que mostra as horas do negócio, as tarefas de cuidado e quem vai ajudar", standard: "combinado com pelo menos um familiar ou ajudante" },
    { id: "O5", condition: "Quando procura um empréstimo, um subsídio ou um programa de apoio", action: "verificar no site oficial que a oferta é verdadeira e manter o controlo do seu dinheiro e do seu PIN", standard: "sem pagar nenhuma \"taxa de processamento\" a desconhecidos e sem partilhar o seu PIN com ninguém" },
    { id: "O6", condition: "Para os próximos seis meses", action: "escrever três metas de negócio que se podem medir e dar o nome de uma mentora, grupo ou associação a contactar", standard: "cada meta com um número e uma data" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Começar bem",
      lessons: [
        {
          title: "Escolher um negócio que combina com a sua vida",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dar uma pontuação a duas ou três ideias de negócio e escolher a que melhor combina com você.",
          text: [
            "O melhor negócio para você é um que as pessoas da sua zona querem, que usa habilidades que você tem e que cabe no tempo e no dinheiro que você tem de verdade. Um negócio que precisa de você no mercado a partir das 5 da manhã pode não servir se leva os filhos à escola.",
            "Escreva duas ou três ideias. Dê a cada uma uma pontuação de 1 (fraco) a 3 (bom) em quatro coisas: as suas habilidades, o tempo que precisa comparado com o tempo que você tem, o custo inicial comparado com o dinheiro que você tem, e a procura local (as pessoas compram isto aqui perto, e há lugar para mais uma vendedora?). Some as pontuações.",
            "Exemplo: a Halima, em Kaduna, dá pontuações a três ideias. Vender bebidas de kunu perto de uma escola: habilidades 3, tempo 2, custo 3, procura 3 = 11. Costura: habilidades 2, tempo 2, custo 1, procura 2 = 7. Vender saldo de telefone: habilidades 2, tempo 3, custo 2, procura 1 = 8 (já há muitos vendedores). Ela escolhe as bebidas. A Aïcha, em Dakar, pode pontuar da mesma forma uma banca de sobremesa thiakry, tranças de cabelo e uma pequena loja.",
            "As pontuações ajudam a pensar; não decidem por você. Pergunte também: vou gostar disto, e posso fazê-lo crescer mais tarde?"
          ],
          steps: ["Escreva duas ou três ideias.", "Dê a cada uma de 1 a 3 em habilidades, tempo, custo inicial e procura local.", "Some as pontuações.", "Escolha uma e escreva porque combina com a sua vida."],
          words: [["Custo inicial", "o dinheiro de que precisa para começar: ferramentas, o primeiro stock, uma banca ou uma licença."], ["Procura", "quantas pessoas querem comprar uma coisa, e quanto."]],
          slides: [
            { title: "Um negócio que combina com você", bullets: ["As pessoas da sua zona querem", "Usa habilidades que você tem", "Cabe no seu tempo e dinheiro reais"] },
            { title: "Dê de 1 a 3 a cada ideia", bullets: ["As suas habilidades", "Tempo que precisa vs tempo que tem", "Custo inicial vs dinheiro que tem", "Procura local"] },
            { title: "Exemplo: a Halima em Kaduna", bullets: ["Bebidas de kunu perto de uma escola: 11", "Costura: 7", "Saldo de telefone: 8, vendedores demais"] },
            { title: "Depois pergunte a si mesma", bullets: ["Vou gostar disto?", "Posso fazê-lo crescer mais tarde?"] }
          ],
          tryIt: "Escreva duas ou três ideias de negócio. Dê a cada uma de 1 a 3 em habilidades, tempo, custo inicial e procura local, some as pontuações e escreva uma frase sobre porque a sua melhor ideia combina com a sua vida.",
          youCanNow: "comparar ideias de negócio com pontuações simples e escolher uma que combina com a sua vida.",
          quickCheck: [
            { objective: "O1", q: "Em que quatro coisas dá pontuação a cada ideia?", options: ["Cor, nome, logótipo, tamanho da loja", "Habilidades, tempo, custo inicial e procura local", "O que os amigos gostam, tempo, música, moda", "Só quanto dinheiro pode dar"], answer: 1, why: "Habilidades, tempo, custo e procura mostram se uma ideia combina com você e com o seu mercado." },
            { objective: "O1", q: "Uma ideia tem pontuação alta em habilidades, mas já há dez vendedores na sua rua. Que pontuação é baixa?", options: ["Habilidades", "Tempo", "Procura local", "Custo inicial"], answer: 2, why: "Muitos vendedores perto quer dizer menos lugar para mais um, por isso a procura é baixa." }
          ]
        },
        {
          title: "Testar a sua ideia com clientes verdadeiros",
          objectives: ["O2"],
          minutes: 5,
          goal: "Testar uma ideia com um pequeno lote e pelo menos dez clientes verdadeiros antes de gastar muito.",
          text: [
            "Muitos negócios falham porque a dona gasta todas as poupanças antes de saber se as pessoas vão comprar. Teste primeiro em pequeno: faça ou compre um pequeno lote, ofereça-o a clientes verdadeiros e veja o que acontece.",
            "Faça um pequeno lote, por exemplo 20 copos de zobo, 5 vestidos ou 10 marcações de cabelo. Ofereça-o a pelo menos dez pessoas que não são da família próxima. Anote: quantas compraram, o preço que pagaram, o que gostaram e o que pediram. O que as pessoas fazem conta mais do que palavras simpáticas: \"Compro para a semana\" não é uma venda.",
            "Exemplo: a Esther, em Kisumu, testa sabão líquido. Faz 15 garrafas, vende 12 a KES 150 (um preço de exemplo), e três clientes pedem uma garrafa maior. A mudança dela: acrescentar um tamanho maior. Uma mulher em Alexandria que testa picles feitos em casa pode fazer o mesmo com os vizinhos e uma pequena loja.",
            "Depois do teste, decida: avançar, mudar alguma coisa ou experimentar a ideia seguinte. Um teste que falha custa pouco e poupa-lhe muito."
          ],
          steps: ["Faça ou compre um pequeno lote.", "Ofereça-o a pelo menos dez pessoas que não são da família próxima.", "Anote quantas compraram, o preço, o que gostaram e o que pediram.", "Decida: avançar, mudar uma coisa ou experimentar a ideia seguinte."],
          words: [["Pequeno lote", "uma pequena quantidade feita ou comprada para testar antes de fazer mais."], ["Teste", "experimentar uma ideia em pequeno para aprender antes de gastar muito."]],
          slides: [
            { title: "Teste antes de gastar muito", bullets: ["Não gaste primeiro todas as poupanças", "Faça um pequeno lote", "Ofereça-o a clientes verdadeiros"] },
            { title: "Anote", bullets: ["Quantas pessoas compraram", "O preço que pagaram", "O que gostaram e o que pediram"] },
            { title: "Ações valem mais que palavras simpáticas", bullets: ["\"Compro para a semana\" não é uma venda", "Conte as vendas reais", "Pergunte a quem não é da família próxima"] },
            { title: "Depois do teste", bullets: ["Avançar", "Mudar uma coisa", "Ou experimentar a ideia seguinte"] }
          ],
          tryIt: "Planeie um teste para a ideia escolhida: que pequeno lote vai fazer, o preço que vai experimentar e dez pessoas a quem o vai oferecer esta semana. Depois do teste, escreva quantas compraram e uma mudança a fazer.",
          youCanNow: "testar uma ideia de negócio de forma barata com clientes verdadeiros e decidir o que fazer a seguir.",
          quickCheck: [
            { objective: "O2", q: "Qual é a melhor prova de que os clientes querem o seu produto?", options: ["A sua mãe diz que é bom", "Os amigos dizem que compram no próximo mês", "Você gosta muito dele", "Pessoas que não são da família pagam por ele"], answer: 3, why: "Vendas reais a clientes verdadeiros mostram a procura verdadeira." },
            { objective: "O2", q: "O seu teste vende 3 de 20 artigos. Qual é um bom passo a seguir?", options: ["Perguntar aos compradores o que mudar, mudar uma coisa e testar outra vez", "Gastar todas as poupanças em mais stock", "Desistir de negócios para sempre", "Duplicar o preço"], answer: 0, why: "Um teste fraco é uma lição barata: aprenda, mude uma coisa e tente outra vez." }
          ]
        },
        {
          title: "Definir preços com lucro e pagar a si mesma",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular o custo por unidade, definir um preço com lucro e definir um valor para pagar a si mesma.",
          text: [
            "Muitas mulheres vendem barato demais, sobretudo aos vizinhos, e trabalham muito sem lucro real. Conte todos os custos: ingredientes ou materiais, embalagem, transporte, carvão ou gás, dados do telefone, a taxa da banca e o seu próprio tempo.",
            "Custo por unidade = custo total de um lote dividido pelo número de unidades. Depois acrescente um lucro. Exemplo de Kumasi: a Abena faz 40 empadas de carne. Farinha, carne, óleo e gás custam GHS 160, os sacos GHS 10 e o transporte GHS 10: GHS 180 no total, ou seja GHS 4.50 por empada. Ela vende a GHS 7 (valores de exemplo), por isso cada empada dá GHS 2.50 de lucro. Veja se os clientes pagam o seu preço comparando com vendedores parecidos.",
            "Pague a si mesma. Decida um valor fixo que tira do negócio cada semana e deixe o resto no negócio para stock e crescimento. Se tira tudo, o negócio não pode crescer; se não tira nada, está a trabalhar de graça. Escreva nos seus registos o que tira.",
            "Se o seu preço não cobre os custos, mude alguma coisa: um tamanho mais pequeno, um fornecedor melhor, comprar por grosso com outras pessoas, ou um preço mais alto por melhor qualidade."
          ],
          steps: ["Liste todos os custos de um lote, incluindo transporte, combustível, dados e taxas.", "Divida o total pelo número de unidades para ter o custo por unidade.", "Acrescente um lucro para definir o preço; compare com vendedores parecidos.", "Decida um valor fixo por semana para pagar a si mesma; deixe o resto no negócio."],
          words: [["Custo por unidade", "o custo total de um lote dividido pelo número de unidades feitas."], ["Lucro", "o dinheiro que sobra depois de pagar todos os custos."], ["Pagar a si mesma", "um valor fixo que a dona tira do negócio, para que o resto fique para stock e crescimento."]],
          slides: [
            { title: "Conte todos os custos", bullets: ["Materiais e embalagem", "Transporte, combustível, dados, taxa da banca", "O seu próprio tempo"] },
            { title: "Custo por unidade", bullets: ["Custo total do lote / número de unidades", "Abena: GHS 180 / 40 empadas = GHS 4.50", "Vende a GHS 7 = GHS 2.50 de lucro (exemplo)"] },
            { title: "Pague a si mesma um valor fixo", bullets: ["Tire um valor fixo cada semana", "Deixe o resto para stock e crescimento", "Escreva-o nos seus registos"] },
            { title: "Preço baixo demais?", bullets: ["Tamanho mais pequeno ou fornecedor melhor", "Compre por grosso com outras pessoas", "Preço mais alto por melhor qualidade"] }
          ],
          tryIt: "Escolha um produto. Liste todos os custos de um lote, calcule o custo por unidade, defina um preço com lucro e decida quanto vai pagar a si mesma cada semana.",
          youCanNow: "definir o preço de um produto para dar lucro e pagar a si mesma um valor fixo.",
          quickCheck: [
            { objective: "O3", q: "Um lote de 20 sacos custa 10,000 NGN no total. Qual é o custo por saco?", options: ["200 NGN", "20 NGN", "500 NGN", "10,000 NGN"], answer: 2, why: "10,000 a dividir por 20 dá 500 NGN por saco." },
            { objective: "O3", q: "Porque pagar a si mesma um valor fixo em vez de tirar todo o dinheiro?", options: ["Para nunca ganhar nada", "Para o dinheiro ficar no negócio para stock e crescimento", "Para os clientes pagarem mais", "Todos os bancos exigem"], answer: 1, why: "Um valor fixo paga você e deixa dinheiro para manter e fazer crescer o negócio." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Começar bem",
        questions: [
          { objective: "O1", q: "A ideia A tem 11 pontos e a ideia B tem 7, mas você detesta a ideia A. O que faz?", options: ["Escolhe sempre a pontuação mais alta", "Não escolhe nenhuma e para", "Volta a pontuar até a B ganhar", "Usa as pontuações para pensar e pergunta também se vai gostar"], answer: 3, why: "As pontuações ajudam a pensar; gostar do trabalho também conta." },
          { objective: "O2", q: "A quem deve oferecer o seu lote de teste?", options: ["A pelo menos dez pessoas que não são da família próxima", "Só ao seu marido", "Só à sua melhor amiga", "A ninguém; só adivinhar"], answer: 0, why: "Os clientes verdadeiros dão respostas honestas pelo que compram." },
          { objective: "O2", q: "Porque testar com um pequeno lote?", options: ["Para gastar mais dinheiro", "Para aprender antes de gastar muito", "Porque lotes grandes são proibidos", "Para evitar clientes"], answer: 1, why: "Um teste pequeno custa pouco e mostra se as pessoas vão comprar." },
          { objective: "O3", q: "Que custo muitos vendedores esquecem?", options: ["Os ingredientes principais", "O próprio produto", "Transporte, combustível, dados e o seu próprio tempo", "O preço de venda"], answer: 2, why: "Custos pequenos como transporte e combustível somam-se e comem o lucro." },
          { objective: "O3", q: "O custo por unidade é GHS 4.50 e o preço é GHS 7. Qual é o lucro por unidade?", options: ["GHS 11.50", "GHS 7", "GHS 4.50", "GHS 2.50"], answer: 3, why: "7 menos 4.50 dá 2.50." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crescer com força",
      lessons: [
        {
          title: "Arranjar tempo: família, cuidado e apoio",
          objectives: ["O4"],
          minutes: 5,
          goal: "Fazer um plano semanal do tempo com as horas do negócio, as tarefas de cuidado e quem ajuda.",
          text: [
            "Em muitos lugares, as mulheres fazem a maior parte do trabalho de cuidado não pago em casa: cozinhar, limpar, ir buscar água e cuidar das crianças, dos doentes e dos idosos. A ONU Mulheres nota que isto deixa às mulheres menos tempo para trabalho pago. Um negócio também precisa de tempo, por isso planeie-o.",
            "Desenhe uma semana: sete dias, com manhã, tarde e noite. Marque as tarefas de cuidado e depois as horas do negócio: comprar stock, fazer, vender, responder a mensagens e fazer os registos. Procure choques e espaços livres.",
            "Depois peça ajuda. Fale com o seu marido ou companheiro, os filhos mais velhos, uma irmã ou uma vizinha para dividir tarefas como ir buscar água, levar as crianças à escola ou cozinhar nos dias de mercado com mais movimento. Algumas mulheres trocam o cuidado das crianças com outras mães, ou trabalham perto de casa em alguns dias. Exemplo: a Mariam, em Yaoundé, vende no mercado à terça, sexta e sábado; a irmã fica com as crianças nessas manhãs e, em troca, a Mariam arranja o cabelo da irmã.",
            "Mostre o plano à sua família e combinem-no juntos. Cuide também de si: o descanso e a saúde mantêm o negócio a andar."
          ],
          steps: ["Desenhe sete dias com manhã, tarde e noite.", "Marque as tarefas de cuidado e de casa.", "Marque as horas do negócio: comprar, fazer, vender, mensagens, registos.", "Encontre os choques e peça a um familiar ou ajudante para dividir tarefas.", "Combinem o plano juntos e incluam descanso."],
          words: [["Trabalho de cuidado não pago", "trabalho em casa que não é pago, como cozinhar, limpar e cuidar das crianças, dos doentes e dos idosos."], ["Troca de cuidado das crianças", "mães que se revezam para cuidar dos filhos umas das outras."]],
          slides: [
            { title: "O seu tempo faz parte do negócio", bullets: ["As mulheres fazem a maior parte do cuidado não pago", "Um negócio também precisa de tempo", "Por isso planeie-o"] },
            { title: "Desenhe a sua semana", bullets: ["Sete dias: manhã, tarde, noite", "Marque as tarefas de cuidado", "Marque as horas do negócio", "Encontre os choques"] },
            { title: "Peça ajuda", bullets: ["Companheiro, filhos mais velhos, irmã, vizinha", "Dividam a água, a escola, a cozinha", "Troque o cuidado das crianças com outras mães"] },
            { title: "Combinem juntos", bullets: ["Mostre o plano à sua família", "Inclua descanso e saúde"] }
          ],
          tryIt: "Desenhe o seu plano semanal do tempo com as tarefas de cuidado e as horas do negócio. Marque um choque, escreva quem pode ajudar nele e fale com essa pessoa esta semana.",
          youCanNow: "planear a sua semana para que o negócio e as tarefas de cuidado caibam, com o apoio de que precisa.",
          quickCheck: [
            { objective: "O4", q: "O seu dia de mercado choca com a ida das crianças à escola. Qual é um bom passo?", options: ["Pedir a um familiar ou a outra mãe para dividir a ida à escola", "Fechar o negócio", "Deixar de ir ao mercado para sempre", "Deixar as crianças sozinhas"], answer: 0, why: "Dividir tarefas liberta tempo para o negócio sem prejudicar a família." },
            { objective: "O4", q: "Porque mostrar o seu plano do tempo à família?", options: ["Para pedir licença para existir", "Para concordarem e ajudarem", "Para ficarem com o seu dinheiro", "Não faz diferença"], answer: 1, why: "Quando a família concorda com o plano, é mais provável que ajude." }
          ],
          sources: [UNWOMEN]
        },
        {
          title: "Encontrar dinheiro e apoio com segurança",
          objectives: ["O5"],
          minutes: 6,
          goal: "Verificar que um empréstimo, subsídio ou programa é verdadeiro e manter o controlo do seu dinheiro.",
          text: [
            "Há programas para mulheres e pequenos negócios. Exemplos: o Women Enterprise Fund do Quénia, um fundo do governo para empresas de mulheres; a SMEDAN da Nigéria, cujo registo gratuito abre programas como o Women In Self-employment Programme; a DER/FJ do Senegal, que oferece formação, formalização e financiamento para mulheres e jovens; a Ghana Enterprises Agency; e a iniciativa AFAWA do Banco Africano de Desenvolvimento, que trabalha com bancos e credores para os ajudar a emprestar às mulheres. Os grupos de poupança e as microfinanças têm o seu próprio curso.",
            "Os nomes, as regras e as datas de candidatura mudam, por isso verifique sempre no site oficial ou no escritório do programa. Os burlões fingem oferecer subsídios e empréstimos para mulheres e pedem primeiro uma \"taxa de processamento\" ou de \"registo\". Um programa verdadeiro diz as suas taxas no site oficial; nunca pague a um desconhecido para receber um subsídio.",
            "Mantenha o controlo do seu dinheiro. Tenha a sua própria linha de dinheiro móvel ou conta em seu nome, e mantenha o seu PIN em segredo de todos, incluindo a família. Um fornecedor verdadeiro nunca pede o seu PIN. Se alguém tira os seus ganhos à força ou com ameaças, isso é abuso; fale com uma pessoa de confiança, um grupo de mulheres ou um serviço de apoio local.",
            "Antes de pedir emprestado, saiba o total que tem de devolver, quando, e o que acontece se se atrasar. Peça emprestado para algo que vai dar dinheiro, não para pagar as despesas diárias da casa."
          ],
          steps: ["Encontre o site oficial ou o escritório do programa.", "Verifique o que oferece, quem se pode candidatar, as datas e as taxas.", "Recuse quem pede uma taxa para contas de desconhecidos.", "Tenha uma linha de dinheiro móvel ou conta em seu nome e um PIN secreto.", "Antes de pedir emprestado, escreva o total a devolver, quando, e as regras de atraso."],
          words: [["Subsídio", "dinheiro dado para um fim e que não tem de ser devolvido."], ["Empréstimo", "dinheiro emprestado que tem de ser devolvido, normalmente com um custo a mais (juros)."], ["Burla da taxa antecipada", "um truque em que alguém promete dinheiro mas pede que você pague uma taxa primeiro."]],
          slides: [
            { title: "Apoio para negócios de mulheres", bullets: ["Quénia: Women Enterprise Fund", "Nigéria: programas da SMEDAN", "Senegal: DER/FJ; Gana: Ghana Enterprises Agency", "AFAWA do BAD: trabalha através de bancos e credores"] },
            { title: "Verifique que é verdadeiro", bullets: ["Só o site oficial ou o escritório", "Quem se pode candidatar, datas e taxas", "Nunca pague a um desconhecido por um subsídio"] },
            { title: "Mantenha o controlo do seu dinheiro", bullets: ["Uma conta ou linha de dinheiro móvel em seu nome", "PIN em segredo de todos, até da família", "Um fornecedor verdadeiro nunca pede o seu PIN"] },
            { title: "Antes de pedir emprestado", bullets: ["Total a devolver e quando", "O que acontece se se atrasar", "Peça para ganhar, não para despesas diárias"] }
          ],
          tryIt: "Escolha um programa desta lição ou um que conhece. Encontre o site oficial ou o escritório e escreva o que oferece, quem se pode candidatar, se está aberto agora e a data em que verificou.",
          youCanNow: "encontrar apoio para o seu negócio, verificar que é verdadeiro e manter o controlo do seu próprio dinheiro.",
          quickCheck: [
            { objective: "O5", q: "Uma mensagem diz que ganhou um subsídio para negócios de mulheres; pague primeiro 5,000 KES de \"taxa de processamento\". O que é isto?", options: ["Um passo normal de um programa", "Uma burla; verifique o site oficial e não pague a desconhecidos", "Um empréstimo que tem de aceitar", "Um imposto"], answer: 1, why: "Pedir uma taxa antes de dar um subsídio é uma burla da taxa antecipada clássica." },
            { objective: "O5", q: "Quem deve saber o PIN do seu dinheiro móvel?", options: ["O seu marido", "O seu melhor cliente", "O agente que lhe telefona", "Só você"], answer: 3, why: "O seu PIN protege o seu dinheiro; um fornecedor verdadeiro nunca o pede." }
          ],
          sources: [WEF, SMEDAN, DERFJ, GEA, AFAWA]
        },
        {
          title: "Redes, mentoras e um plano de crescimento de seis meses",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escrever três metas que se podem medir para seis meses e dar o nome de uma mentora ou grupo a contactar.",
          text: [
            "Muitas mulheres crescem mais depressa com outras: uma mentora que já o fez, uma associação de mulheres de negócios, uma associação do mercado ou do comércio, uma cooperativa, uma câmara de comércio ou um centro de apoio a negócios. Partilham compradores, fornecedores, conselhos e coragem.",
            "Uma mentora é alguém com mais experiência que lhe dá conselhos. Peça a uma mulher que admira 20 minutos de conselhos, com duas perguntas claras. Junte-se a um grupo onde os seus clientes ou fornecedores se encontram. Vá a uma feira ou a um dia de mercado numa cidade maior quando puder.",
            "Depois escreva três metas para os próximos seis meses. Faça cada uma ser medível, com um número e uma data: \"Vender 60 garrafas de sabão por semana até ao fim de março\", \"Poupar GHS 500 para uma segunda máquina de costura até junho\" (um valor de exemplo), \"Ter cinco novas lojas como clientes até maio\". Veja as suas metas uma vez por mês e escreva o que fez.",
            "Exemplo: a Ngozi, em Enugu, que vende sacos de tecido Ankara, junta-se a uma associação de comerciantes mulheres, encontra uma mentora que exporta sacos e define metas para as vendas, as poupanças e a sua primeira banca numa feira."
          ],
          steps: ["Liste pessoas e grupos que podem ajudar: mentoras, associações, cooperativas, centros de apoio.", "Escolha um para contactar este mês, com duas perguntas claras.", "Escreva três metas, cada uma com um número e uma data.", "Veja as suas metas uma vez por mês e escreva o que fez."],
          words: [["Mentora", "uma pessoa com experiência que lhe dá conselhos e apoio."], ["Meta medível", "uma meta com um número e uma data, para ver se a alcançou."], ["Associação", "um grupo de pessoas do mesmo ramo ou na mesma situação que se apoiam umas às outras."]],
          slides: [
            { title: "Cresça com outras", bullets: ["Mentoras e associações de mulheres", "Grupos do comércio, cooperativas, câmaras", "Centros de apoio a negócios"] },
            { title: "Encontre uma mentora", bullets: ["Uma mulher que admira", "Peça 20 minutos", "Leve duas perguntas claras"] },
            { title: "Três metas medíveis", bullets: ["Cada uma com um número e uma data", "Vendas, poupanças, novos clientes", "Veja-as uma vez por mês"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de negócio de uma página com a ideia pontuada, os resultados do teste, o preço e o lucro, o que paga a si mesma, o seu plano semanal do tempo, uma opção de apoio verificada, três metas de seis meses e uma mentora ou grupo a contactar.",
          youCanNow: "criar uma rede de contactos e escrever um plano de crescimento de seis meses com metas medíveis.",
          quickCheck: [
            { objective: "O6", q: "Que meta é medível?", options: ["\"Fazer melhor\"", "\"Ser famosa\"", "\"Vender 40 vestidos por mês até ao fim de junho\"", "\"Trabalhar muito\""], answer: 2, why: "Tem um número e uma data, por isso pode ver se a alcançou." },
            { objective: "O6", q: "Como pede ajuda a uma possível mentora?", options: ["Pede 20 minutos com duas perguntas claras", "Pede-lhe que lhe dê dinheiro", "Pede-lhe que gira o seu negócio", "Nunca pede; espera por ela"], answer: 0, why: "Um pedido curto e claro respeita o tempo dela e traz conselhos úteis." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Crescer com força",
        questions: [
          { objective: "O4", q: "O que é o trabalho de cuidado não pago?", options: ["Trabalho num banco", "Trabalho em casa que não é pago, como cozinhar e cuidar das crianças", "Vender no mercado", "Um emprego no governo"], answer: 1, why: "O trabalho de cuidado não pago é o trabalho de casa e de cuidar que leva tempo mas não dá salário." },
          { objective: "O4", q: "Um plano semanal do tempo deve mostrar:", options: ["Só as horas do negócio", "Só o descanso", "As horas do negócio, as tarefas de cuidado e quem ajuda", "Só os horários da escola das crianças"], answer: 2, why: "Ver tudo junto mostra os choques e onde é precisa ajuda." },
          { objective: "O5", q: "Onde verifica se um programa de empréstimos para mulheres é verdadeiro?", options: ["No site oficial ou no escritório do programa", "Numa mensagem reencaminhada", "Com um desconhecido ao telefone", "Num comentário nas redes sociais"], answer: 0, why: "Só a fonte oficial mostra o programa verdadeiro, as datas e as taxas." },
          { objective: "O5", q: "Antes de pedir emprestado, o que tem de saber?", options: ["Só o nome do credor", "Só a rapidez com que o recebe", "Nada; é só assinar", "O total a devolver, quando, e o que acontece se se atrasar"], answer: 3, why: "Saber o custo total e as regras de atraso protege-a de dívidas que não consegue pagar." },
          { objective: "O6", q: "Com que frequência deve ver as suas metas de seis meses?", options: ["Nunca", "Uma vez por mês", "Só no fim dos seis meses", "De dez em dez anos"], answer: 1, why: "Ver todos os meses mostra cedo o progresso, para poder mudar de rumo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Mulheres Empreendedoras: Começar e Fazer Crescer um Negócio",
    questions: [
      { objective: "O1", q: "Um bom negócio para você é um que:", options: ["Combina com as suas habilidades, tempo, dinheiro e a procura local", "A sua vizinha já faz bem", "Precisa de mais dinheiro", "É o mais famoso"], answer: 0, why: "Um negócio que combina com você e com o seu mercado tem mais hipóteses de durar." },
      { objective: "O1", q: "Custo inicial quer dizer:", options: ["O seu lucro semanal", "O dinheiro de que precisa para começar", "O preço que os clientes pagam", "Um empréstimo que tem de pedir"], answer: 1, why: "É o dinheiro para ferramentas, o primeiro stock, uma banca ou uma licença." },
      { objective: "O1", q: "Porque dar pontuação a cada ideia nas mesmas quatro coisas?", options: ["Para demorar mais", "Para todas as ideias ganharem", "Para poder comparar as ideias de forma justa", "Porque o banco exige"], answer: 2, why: "As mesmas pontuações para todas as ideias tornam a comparação justa." },
      { objective: "O2", q: "\"Compro para a semana\", dito por uma amiga, é:", options: ["Uma venda", "Um contrato", "Um empréstimo", "Ainda não é uma venda; conte as compras reais"], answer: 3, why: "Só as compras reais provam a procura." },
      { objective: "O2", q: "Durante um teste, você anota:", options: ["Quantos compraram, o preço, o que gostaram e o que pediram", "Só os seus custos", "Nada", "Só os nomes dos seus amigos"], answer: 0, why: "Estas notas mostram a procura e o que melhorar." },
      { objective: "O2", q: "Depois de um teste, você pode:", options: ["Só desistir", "Avançar, mudar uma coisa ou experimentar a ideia seguinte", "Só gastar todas as poupanças", "Só duplicar o preço"], answer: 1, why: "Um teste ajuda a escolher o próximo passo com cuidado." },
      { objective: "O3", q: "O custo por unidade é:", options: ["O preço que espera ter", "O preço da sua vizinha", "O custo total do lote dividido pelo número de unidades", "O seu lucro"], answer: 2, why: "Dividir o custo do lote pelas unidades dá o custo de cada uma." },
      { objective: "O3", q: "Um lote custa 30,000 XAF e faz 60 unidades. O custo por unidade é:", options: ["600 XAF", "60 XAF", "1,800 XAF", "500 XAF"], answer: 3, why: "30,000 a dividir por 60 dá 500 XAF." },
      { objective: "O3", q: "Se o seu preço não cobre os custos, você pode:", options: ["Mudar o tamanho ou o fornecedor, comprar por grosso com outras pessoas ou subir o preço pela qualidade", "Continuar a vender com prejuízo para sempre", "Deixar de registar os custos", "Pedir emprestado para cobrir todas as semanas"], answer: 0, why: "Mudar os custos ou o preço é a forma de voltar a ter lucro." },
      { objective: "O3", q: "Pagar a si mesma um valor fixo cada semana quer dizer:", options: ["Tirar todo o dinheiro", "Nunca tirar nada", "Tirar um valor fixo e deixar o resto para o negócio", "Pagar aos seus clientes"], answer: 2, why: "Um valor fixo paga você e mantém o negócio com dinheiro." },
      { objective: "O4", q: "A ONU Mulheres nota que o trabalho de cuidado não pago:", options: ["É feito por todos por igual", "Deixa a muitas mulheres menos tempo para trabalho pago", "Não existe", "É pago pelo governo"], answer: 1, why: "As mulheres fazem a maior parte do cuidado não pago, o que limita o seu tempo para o negócio." },
      { objective: "O4", q: "Uma troca de cuidado das crianças é:", options: ["Mães que se revezam para cuidar dos filhos umas das outras", "Vender roupa de criança", "Uma propina escolar", "Uma conta bancária"], answer: 0, why: "Revezar-se liberta tempo para o trabalho de cada mãe." },
      { objective: "O4", q: "O seu plano do tempo deve incluir também:", options: ["Nenhum descanso", "Só trabalho", "Os planos das suas vizinhas", "Descanso e saúde"], answer: 3, why: "O descanso mantém você e o negócio a andar." },
      { objective: "O5", q: "Um subsídio é:", options: ["Um empréstimo com juros altos", "Dinheiro dado para um fim e que não devolve", "Uma taxa que paga primeiro", "Um imposto"], answer: 1, why: "Os subsídios não se devolvem; os empréstimos sim." },
      { objective: "O5", q: "Alguém pede uma taxa antes de lhe dar um subsídio para mulheres. O mais provável é ser:", options: ["Um passo normal", "Uma regra do banco", "Uma burla da taxa antecipada", "Um imposto do governo"], answer: 2, why: "Os programas verdadeiros publicam as taxas no site oficial; desconhecidos que pedem taxas são burlões." },
      { objective: "O5", q: "Quem deve ter o PIN do seu dinheiro móvel?", options: ["Só você", "O seu companheiro", "Quem liga a dizer que é do fornecedor", "O seu filho mais velho"], answer: 0, why: "O seu PIN protege o seu dinheiro; mantenha-o em segredo de todos." },
      { objective: "O5", q: "A AFAWA, do Banco Africano de Desenvolvimento, sobretudo:", options: ["Empresta a cada mulher pelo WhatsApp", "Cobra às mulheres uma taxa por telefone", "Substitui todos os grupos de poupança", "Trabalha com bancos e credores para emprestarem mais às mulheres"], answer: 3, why: "A AFAWA trabalha através de instituições financeiras para aumentar os empréstimos às mulheres." },
      { objective: "O6", q: "Uma mentora é:", options: ["Uma cliente que lhe deve dinheiro", "Uma pessoa com experiência que dá conselhos", "Uma funcionária dos impostos", "Um empréstimo"], answer: 1, why: "Uma mentora partilha a experiência para a ajudar a crescer." },
      { objective: "O6", q: "Que meta tem um número e uma data?", options: ["\"Ficar maior\"", "\"Ser a melhor\"", "\"Poupar NGN 50,000 para uma arca congeladora até julho\"", "\"Esforçar-me mais\""], answer: 2, why: "Um número e uma data tornam a meta medível." },
      { objective: "O6", q: "Juntar-se a uma associação de mulheres ou do comércio pode ajudar a:", options: ["Encontrar compradores, fornecedores, conselhos e apoio", "Evitar todos os clientes", "Saltar os registos", "Nunca precisar de um plano"], answer: 0, why: "Os grupos partilham contactos, conhecimento e encorajamento." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 7, 10, 14, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Ideia escolhida", objective: "O1", notYet: "Uma ideia sem pontuações, ou pontuações sem razões.", meets: "Duas ou três ideias pontuadas em habilidades, tempo, custo e procura, com uma razão para a vencedora combinar com ela.", exceeds: "Também nota como a ideia pode crescer mais tarde." },
      { name: "Ideia testada", objective: "O2", notYet: "Nenhum teste, ou só perguntou à família.", meets: "Um pequeno lote oferecido a pelo menos dez clientes verdadeiros, com as vendas, o preço e uma mudança anotados.", exceeds: "A mudança foi feita e testada uma segunda vez." },
      { name: "Preço, lucro e pagamento", objective: "O3", notYet: "Faltam custos, as contas estão erradas, ou não há valor para pagar a si mesma.", meets: "Todos os custos listados, custo por unidade certo, um preço com lucro e um valor fixo por semana para pagar a si mesma.", exceeds: "Preço comparado com vendedores parecidos, com um plano se os custos subirem." },
      { name: "Plano do tempo e apoio", objective: "O4", notYet: "Nenhum plano do tempo, ou nenhuma ajuda nomeada.", meets: "Um plano semanal com as horas do negócio, as tarefas de cuidado e quem ajuda, combinado com pelo menos uma pessoa.", exceeds: "Inclui descanso e uma ajudante de reserva." },
      { name: "Financiamento e apoio verificados com segurança", objective: "O5", notYet: "Uma opção vinda de uma mensagem reencaminhada ou de um desconhecido, ou um PIN partilhado.", meets: "Uma opção verificada no site oficial, com quem se pode candidatar e a data da verificação; o dinheiro fica em seu nome.", exceeds: "Também escreve o total a devolver, quando, e as regras de atraso de qualquer empréstimo." },
      { name: "Metas e rede de contactos", objective: "O6", notYet: "Metas vagas, ou nenhuma mentora ou grupo nomeado.", meets: "Três metas com números e datas, e uma mentora ou grupo a contactar.", exceeds: "O contacto foi feito e a primeira revisão mensal está planeada." }
    ]
  },
  evaluation: {
    results: [
      "Alunas que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunas que começam ou testam um negócio, ou acrescentam um produto, em 30 dias (inquérito de seguimento)",
      "Alunas que dizem pagar a si mesmas um valor fixo e manter registos ao fim de três meses",
      "Alunas que alcançam pelo menos uma das suas metas de seis meses e não dizem ter perdido dinheiro em burlas de subsídios ou empréstimos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, caneta e uma calculadora (a calculadora do telefone serve)",
      "Um telefone para ver os sites oficiais dos programas",
      "Materiais para um pequeno lote de teste (à escolha da aluna)",
      "Cerca de 60 minutos no total, em sessões curtas, mais uma ou duas semanas para fazer o teste"
    ],
    facilitatorNotes: [
      "Faça o curso com um grupo de mulheres, um grupo de poupança ou uma cooperativa; reúnam-se a horas que convêm às mães e aceite bebés na sala.",
      "Antes do curso, veja nos sites oficiais que programas para mulheres e pequenos negócios estão abertos no seu país e leve os endereços.",
      "Nunca peça às alunas para partilhar um PIN, um saldo ou dados de contas. Pratiquem a reconhecer burlas de subsídios e empréstimos com mensagens inventadas.",
      "Algumas alunas podem sofrer pressão ou controlo sobre o seu dinheiro em casa; fale disso com cuidado, em privado, e conheça os serviços locais de apoio às mulheres para onde encaminhar.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
