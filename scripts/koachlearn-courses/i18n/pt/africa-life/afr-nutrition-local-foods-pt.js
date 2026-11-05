"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-nutrition-local-foods.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const WHO_DIET = { name: "OMS, ficha informativa: Alimentação saudável (fruta e legumes, sal, açúcar e gordura)", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" };
const WHO_IYCF = { name: "OMS, ficha informativa: Alimentação de bebés e crianças pequenas", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_ANAEMIA = { name: "OMS, ficha informativa: Anemia (quem está em risco, alimentos ricos em ferro, alimentos que bloqueiam o ferro)", url: "https://www.who.int/news-room/fact-sheets/detail/anaemia" };
const WHO_FIVE_KEYS = { name: "OMS: Manual das cinco chaves para alimentos mais seguros", url: "https://www.who.int/publications/i/item/9789241594639" };

module.exports = {
  id: "afr-nutrition-local-foods-pt",
  lang: "pt",
  translationOf: "afr-nutrition-local-foods",
  category: "Africa: Life and Work",
  name: "Boa Alimentação com Pouco Dinheiro e Alimentos Locais",
  skills: "Separar os alimentos locais por grupos, Montar um prato equilibrado, Reduzir o sal, o açúcar e o óleo e manter os alimentos seguros, Comparar preços dos alimentos para ver o que compensa, Alimentar crianças pequenas e mulheres grávidas ou a amamentar, Escrever um plano de refeições semanal com pouco dinheiro",
  outcome: "escrever um plano de refeições semanal para a sua casa que use todos os dias alimentos locais de vários grupos, caiba no seu orçamento para comida, siga os conselhos da OMS sobre sal, açúcar e alimentos seguros, e dê às crianças pequenas e às mulheres grávidas ou a amamentar aquilo de que precisam.",
  about: [
    "Este curso é para quem compra ou cozinha a comida de uma casa em África: mães e pais, avós, estudantes que vivem sozinhos e pessoas que vendem comida cozinhada. Não precisa de dinheiro para alimentos especiais. A boa alimentação vem do feijão, das folhas verdes, dos cereais, do peixe, dos ovos e da fruta que já existem no seu mercado.",
    "O Capítulo 1 trata de conhecer os seus alimentos: os grupos de alimentos com exemplos locais, como montar um prato equilibrado, e como reduzir o sal, o açúcar e o óleo mantendo os alimentos seguros. O Capítulo 2 trata de comer bem com pouco dinheiro: comparar preços para ver o que compensa, alimentar quem mais precisa e escrever um plano de refeições semanal.",
    "Este curso segue os conselhos da Organização Mundial da Saúde (OMS). Não dá dietas para doenças como a diabetes, o VIH ou a desnutrição, nem conselhos sobre suplementos; para isso, fale com um centro de saúde, um nutricionista ou um agente comunitário de saúde. Todos os preços são exemplos; use os preços do seu mercado. Cada lição dura cerca de cinco minutos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de refeições de uma semana para a sua casa (ou um exemplo, como uma família de cinco pessoas em Kisumu, uma família de quatro em Ibadan ou um estudante em Accra): para cada dia, as refeições e os grupos de alimentos que têm, com fruta ou legumes todos os dias; os alimentos para qualquer criança pequena ou mulher grávida ou a amamentar; uma lista de compras com os preços do seu mercado e o total da semana comparado com o seu orçamento; e três hábitos que vai usar (menos sal, menos açúcar e uma chave para alimentos seguros).",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que compram ou cozinham a comida de uma casa no Quénia, na Nigéria, no Gana, no Senegal, na Costa do Marfim, nos Camarões, em Marrocos, no Egito e em toda a África: pais e mães, avós, jovens adultos que vivem sozinhos e pequenos vendedores de comida cozinhada. Muitos têm rendimentos baixos que mudam muito e usam um telefone simples.",
    startingPoint: "A maioria cozinha todos os dias refeições à base de um alimento principal que enche (ugali, arroz, garri, fufu, banku, attiéké, pão), mas muitas vezes com poucos legumes, pouco feijão e poucos alimentos de origem animal. Muitos põem muito sal, cubos de caldo, açúcar ou óleo. Poucos comparam os preços dos alimentos pelo que valem ou planeiam uma semana de refeições, e muitos não sabem bem como alimentar um bebé a partir dos 6 meses.",
    gap: "Muitas famílias comem o suficiente para se sentirem cheias, mas com pouca variedade, o que leva à anemia, ao mau crescimento das crianças e, cada vez mais, à tensão alta e à diabetes nos adultos. Os alunos podem comer melhor pelo mesmo preço se escolherem alimentos locais de vários grupos, reduzirem o sal e o açúcar e planearem as compras.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; todas as palavras de nutrição são explicadas",
      "Orçamento: apertado e variável; o curso nunca dá preços reais, só exemplos, e os alunos usam os preços do seu mercado",
      "Os alimentos mudam de país para país e com a estação: os exemplos vêm do Quénia, da Nigéria, do Gana, do Senegal, da Costa do Marfim, de Marrocos e do Egito",
      "Nada de dietas para doenças, suplementos ou medicamentos: essas perguntas vão para o centro de saúde ou para um nutricionista",
      "Aparelhos: um telefone simples para a calculadora e as notas, ou papel"
    ],
    prerequisites: "Nenhum. Saber somar e multiplicar um pouco ajuda na Lição 4; a calculadora do telefone serve."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de alimentos vendidos no seu mercado", action: "separar os alimentos locais em grupos de energia, de construção do corpo e de proteção", standard: "acertando pelo menos 8 de 10" },
    { id: "O2", condition: "Com os alimentos que tem na sua cozinha", action: "planear um prato equilibrado com um alimento principal, um alimento de construção e legumes ou fruta", standard: "com legumes ou fruta a encher cerca de metade do prato" },
    { id: "O3", condition: "Com uma receita ou refeição da sua casa", action: "mudar a receita para usar menos sal, açúcar e óleo e aplicar as cinco chaves da OMS para alimentos mais seguros", standard: "dizendo pelo menos duas mudanças e as cinco chaves" },
    { id: "O4", condition: "Usando os preços do seu mercado", action: "comparar o custo de alimentos do mesmo grupo para encontrar o que compensa mais", standard: "escolhendo a opção mais barata que dá os mesmos nutrientes, com as contas certas" },
    { id: "O5", condition: "Para uma criança dos 6 aos 23 meses, ou uma mulher grávida ou a amamentar", action: "planear as refeições de um dia que sigam os conselhos de alimentação da OMS", standard: "com o número certo de refeições para a idade da criança, ou alimentos ricos em ferro a mais para a mulher" },
    { id: "O6", condition: "Com o tamanho da sua casa e o seu orçamento para comida", action: "escrever um plano de refeições semanal e uma lista de compras", standard: "com vários grupos de alimentos todos os dias e sem passar do orçamento" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conheça os seus alimentos",
      lessons: [
        {
          title: "Grupos de alimentos com alimentos locais",
          objectives: ["O1"],
          minutes: 5,
          goal: "Separar os alimentos vendidos no seu mercado em grupos de energia, de construção do corpo e de proteção.",
          text: [
            "Nenhum alimento sozinho dá ao corpo tudo o que ele precisa. Uma forma fácil de lembrar é usar três grupos. Os alimentos de energia (alimentos \"que dão força\") dão força: milho, arroz, milheto, sorgo, mandioca, inhame, banana-pão, batata-doce, pão, e também o óleo. Os alimentos de construção (alimentos \"que fazem crescer\") constroem os músculos e o sangue: feijão, lentilhas, feijão-nhemba, amendoim, ovos, peixe, carne, frango e leite. Os alimentos de proteção (alimentos \"que dão brilho\") ajudam a lutar contra as doenças: legumes e fruta.",
            "Exemplos locais: no Quénia, ugali (energia), githeri ou omena (construção) e sukuma wiki (proteção). Na Nigéria, garri ou inhame (energia), feijão ou egusi (construção) e ugu ou folha amarga (proteção). No Gana, banku ou kenkey (energia), peixe ou sopa de amendoim (construção) e kontomire (proteção). No Senegal, arroz ou milheto com niébé (feijão-nhemba) e legumes. No Egito, pão com ful (favas) e salada.",
            "Alguns alimentos são ajudantes especiais. As folhas verde-escuras (folhas de amaranto, folhas de mandioca, moringa, kontomire) e os alimentos cor de laranja (batata-doce de polpa laranja, papaia, manga, cenoura) são ricos em vitaminas. O feijão, o peixe seco pequeno, os ovos, o fígado e as folhas verde-escuras dão ferro, que evita a anemia."
          ],
          steps: ["Escreva os alimentos que a sua casa comeu ontem.", "Marque cada um: energia, construção ou proteção.", "Veja que grupo falta ou é pequeno.", "Diga um alimento local que pode juntar para esse grupo."],
          words: [["Grupo de alimentos", "alimentos que fazem um trabalho parecido no corpo."], ["Alimento principal", "o alimento que enche e se come quase todos os dias, como ugali, arroz, garri ou pão."], ["Anemia", "sangue fraco, muitas vezes por falta de ferro; deixa as pessoas cansadas e fracas."]],
          slides: [
            { title: "Três grupos de alimentos", bullets: ["Energia (dá força): milho, arroz, mandioca, inhame, banana-pão, pão", "Construção (faz crescer): feijão, amendoim, ovos, peixe, carne, leite", "Proteção (dá brilho): legumes e fruta"] },
            { title: "Pratos locais", bullets: ["Quénia: ugali, omena, sukuma wiki", "Nigéria: garri ou inhame, feijão, ugu", "Gana: banku, peixe, kontomire; Egito: pão, ful, salada"] },
            { title: "Ajudantes especiais", bullets: ["Folhas verde-escuras e alimentos cor de laranja: vitaminas", "Feijão, peixe seco pequeno, ovos, fígado, folhas verdes: ferro"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Escreva tudo o que a sua casa comeu ontem. Marque cada alimento com E (energia), C (construção) ou P (proteção). Faça um círculo à volta do grupo que comeram menos e escreva um alimento local que pode juntar amanhã.",
          youCanNow: "separar os alimentos locais em grupos de energia, de construção e de proteção e ver o que falta.",
          quickCheck: [
            { objective: "O1", q: "Qual destes é um alimento de construção?", options: ["Mandioca", "Feijão", "Arroz", "Açúcar"], answer: 1, why: "O feijão é rico em proteína, que constrói o corpo." },
            { objective: "O1", q: "Uma família em Accra comeu banku com molho de piri-piri o dia todo. Que grupo falta mais?", options: ["Alimentos de energia", "Sal", "Alimentos de construção e de proteção", "Nada"], answer: 2, why: "O banku é um alimento de energia; a refeição precisa de peixe ou feijão e de legumes." }
          ]
        },
        {
          title: "Montar um prato equilibrado",
          objectives: ["O2"],
          minutes: 5,
          goal: "Planear um prato equilibrado com um alimento principal, um alimento de construção e legumes ou fruta.",
          text: [
            "Uma regra simples para cada refeição principal: cerca de metade do prato com legumes e fruta, cerca de um quarto com o alimento principal e cerca de um quarto com um alimento de construção. Não precisa de um prato a sério; pense na tigela ou no tabuleiro partilhado dividido nas mesmas partes.",
            "A OMS aconselha os adultos a comer pelo menos 400 gramas de fruta e legumes por dia, o que dá cerca de cinco mãos-cheias. As folhas cozinhadas numa sopa ou num guisado contam. Os cereais integrais e os alimentos menos refinados, como o arroz integral, o milheto, o sorgo ou a farinha de milho integral, enchem durante mais tempo.",
            "Faça pequenas mudanças, não uma cozinha nova. Junte uma mão-cheia de folhas verdes ao guisado. Junte feijão ao arroz (waakye no Gana, arroz com feijão na Nigéria, githeri no Quénia). Junte um pedaço pequeno de peixe ou um ovo para as crianças. Coma uma fruta da época em vez de um doce.",
            "Para ajudar o corpo a usar o ferro do feijão e das folhas verdes, coma-os com um alimento com vitamina C, como tomate, laranja, goiaba ou manga. Beba chá ou café entre as refeições, não com elas, porque dificultam a absorção do ferro."
          ],
          steps: ["Imagine o prato em quatro partes.", "Encha cerca de metade com legumes e fruta.", "Encha cerca de um quarto com o alimento principal.", "Encha cerca de um quarto com um alimento de construção.", "Junte um alimento com vitamina C; deixe o chá para entre as refeições."],
          words: [["Equilibrado", "uma refeição com a mistura certa de grupos de alimentos."], ["Cereal integral", "cereal que mantém a camada de fora, como o arroz integral, o milheto ou a farinha de milho integral."]],
          slides: [
            { title: "O prato equilibrado", bullets: ["Cerca de metade: legumes e fruta", "Cerca de um quarto: alimento principal", "Cerca de um quarto: alimento de construção"] },
            { title: "Fruta e legumes", bullets: ["OMS: pelo menos 400 g por dia para adultos", "Cerca de cinco mãos-cheias", "As folhas na sopa ou no guisado contam"] },
            { title: "Pequenas mudanças", bullets: ["Folhas verdes no guisado; feijão no arroz", "Um ovo ou peixe para as crianças", "Fruta da época em vez de doces"] },
            { title: "Ajude o ferro a funcionar", bullets: ["Coma feijão e folhas verdes com tomate, laranja ou manga", "Chá e café entre as refeições, não com elas"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Planeie a refeição principal de amanhã com os alimentos que já tem. Desenhe o prato (ou a tigela) e escreva o que vai em cada parte. Junte um alimento com vitamina C.",
          youCanNow: "planear um prato equilibrado com um alimento principal, um alimento de construção e bastantes legumes ou fruta.",
          quickCheck: [
            { objective: "O2", q: "Num prato equilibrado, mais ou menos quanto deve ser de legumes e fruta?", options: ["Cerca de metade", "Nada", "Um cantinho", "O prato todo"], answer: 0, why: "Cerca de metade do prato com legumes e fruta é a regra simples." },
            { objective: "O2", q: "Porque comer tomate ou uma laranja com feijão e folhas verdes?", options: ["Juntam sal", "Ajudam o corpo a absorver o ferro", "Substituem o feijão", "Fazem a comida durar mais"], answer: 1, why: "A vitamina C ajuda o corpo a usar o ferro dos alimentos vegetais." }
          ]
        },
        {
          title: "Menos sal, açúcar e óleo, e alimentos seguros",
          objectives: ["O3"],
          minutes: 5,
          goal: "Mudar uma receita para usar menos sal, açúcar e óleo e aplicar as cinco chaves para alimentos mais seguros.",
          text: [
            "Sal a mais sobe a tensão arterial, o que pode levar a um AVC e a doenças do coração. A OMS aconselha os adultos a comer menos de 5 gramas de sal por dia, um pouco menos de uma colher de chá rasa, contando todo o sal dos cubos de caldo, dos temperos em pó, do peixe salgado e do pão. Use menos sal e menos cubos, e dê sabor com cebola, alho, gengibre, piri-piri e ervas. Se usar sal, escolha sal iodado.",
            "Açúcar: a OMS aconselha que os açúcares livres (o açúcar posto na comida e nas bebidas, e o açúcar do mel, dos refrigerantes e dos sumos) fiquem abaixo de 10% da energia do dia, e menos ainda é melhor. Para a maioria dos adultos, isso é menos de cerca de 12 colheres de chá rasas por dia. O chá doce, os refrigerantes e os sumos somam depressa. Óleo: use pouco e frite menos vezes; coza, cozinhe a vapor ou guise em vez de fritar.",
            "Os alimentos seguros evitam a diarreia e as intoxicações alimentares. As cinco chaves da OMS para alimentos mais seguros: mantenha a limpeza (lave as mãos e as superfícies); separe os alimentos crus dos cozinhados; cozinhe bem, sobretudo a carne, o peixe e os ovos; mantenha os alimentos a temperaturas seguras (não deixe comida cozinhada fora durante horas); e use água segura e alimentos frescos e seguros.",
            "Estas regras contam ainda mais se vende comida cozinhada, porque um só erro pode pôr muitos clientes doentes."
          ],
          steps: ["Conte o sal, os cubos e o açúcar de uma receita habitual.", "Reduza um pouco cada um e junte cebola, alho, piri-piri ou ervas.", "Uma vez por semana, escolha guisar ou cozer em vez de fritar.", "Compare a receita com as cinco chaves para alimentos mais seguros."],
          words: [["Sal iodado", "sal com iodo, de que o corpo precisa."], ["Açúcares livres", "o açúcar posto na comida e nas bebidas, mais o açúcar do mel, dos xaropes e dos sumos de fruta."], ["Intoxicação alimentar", "doença causada por comer alimentos com micróbios ou veneno."]],
          slides: [
            { title: "Menos sal", bullets: ["OMS: menos de 5 g por dia, pouco menos de uma colher de chá rasa", "Conte os cubos, os temperos, o peixe salgado e o pão", "Junte cebola, alho, piri-piri, ervas; use sal iodado"] },
            { title: "Menos açúcar e óleo", bullets: ["OMS: açúcares livres abaixo de 10% da energia; menos é melhor", "O chá doce, os refrigerantes e os sumos somam depressa", "Frite menos: coza, cozinhe a vapor ou guise"] },
            { title: "Cinco chaves para alimentos mais seguros (OMS)", bullets: ["Mantenha a limpeza; separe o cru do cozinhado", "Cozinhe bem; guarde a comida a temperaturas seguras", "Use água segura e alimentos crus seguros"] }
          ],
          sources: [WHO_DIET, WHO_FIVE_KEYS],
          tryIt: "Pegue num prato que a sua casa come muitas vezes, como arroz jollof, sopa de egusi, thieboudienne ou um guisado de feijão. Escreva duas mudanças que reduzam o sal, o açúcar ou o óleo, e uma chave para alimentos seguros que vai praticar quando o cozinhar.",
          youCanNow: "mudar uma receita para usar menos sal, açúcar e óleo e manter os alimentos seguros com as cinco chaves.",
          quickCheck: [
            { objective: "O3", q: "Que mudança reduz o sal num guisado?", options: ["Juntar mais dois cubos de caldo", "Juntar peixe salgado e mais sal", "Usar menos cubos e juntar cebola, alho e piri-piri", "Juntar mais tempero em pó"], answer: 2, why: "Os cubos e os temperos em pó são salgados; as ervas e as especiarias dão sabor sem sal." },
            { objective: "O3", q: "Qual é uma das cinco chaves da OMS para alimentos mais seguros?", options: ["Deixar a comida cozinhada fora o dia todo", "Separar os alimentos crus dos cozinhados", "Usar a mesma tábua para carne crua e salada sem lavar", "Provar a carne crua para ver se está boa"], answer: 1, why: "Separar os alimentos crus dos cozinhados impede os micróbios de passar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conheça os seus alimentos",
        questions: [
          { objective: "O1", q: "Qual é um alimento de proteção (que dá brilho)?", options: ["Kontomire (folhas de inhame-coco)", "Garri", "Óleo de palma", "Pão branco"], answer: 0, why: "As folhas verdes são alimentos de proteção cheios de vitaminas." },
          { objective: "O1", q: "Que alimento dá ferro para ajudar a evitar a anemia?", options: ["Açúcar", "Refrigerante", "Peixe seco pequeno, como a omena", "Chá"], answer: 2, why: "O peixe seco pequeno, o feijão, os ovos e as folhas verde-escuras dão ferro." },
          { objective: "O2", q: "Que refeição é mais equilibrada?", options: ["Arroz e refrigerante", "Ugali, feijão e sukuma wiki", "Pão e chá doce", "Garri e açúcar"], answer: 1, why: "Tem um alimento principal, um alimento de construção e legumes." },
          { objective: "O2", q: "Mais ou menos quanta fruta e legumes a OMS aconselha os adultos a comer por dia?", options: ["Uma fatia", "Nenhuma", "Só aos domingos", "Pelo menos 400 g, cerca de cinco mãos-cheias"], answer: 3, why: "A OMS aconselha pelo menos 400 g por dia para adultos." },
          { objective: "O3", q: "A OMS aconselha os adultos a comer menos sal do que:", options: ["5 g por dia, pouco menos de uma colher de chá rasa", "Um copo por dia", "Dez colheres de chá por dia", "Não há limite"], answer: 0, why: "Menos de 5 g de sal por dia baixa o risco de tensão alta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Comer bem com pouco dinheiro",
      lessons: [
        {
          title: "Comparar os preços dos alimentos para ver o que compensa",
          objectives: ["O4"],
          minutes: 5,
          goal: "Comparar o custo de alimentos do mesmo grupo para encontrar o que compensa mais.",
          text: [
            "A boa comida não tem de custar mais. O segredo é comparar alimentos que fazem o mesmo trabalho. Para os alimentos de construção, compare o feijão, as lentilhas, o feijão-nhemba, o amendoim, os ovos, o peixe seco pequeno e a carne pelo que custa uma refeição da família de cada um. O feijão e o peixe pequeno muitas vezes dão muito por pouco dinheiro.",
            "Como comparar: escreva o preço e a quantidade que recebe e depois calcule o custo de uma refeição da família. Exemplo (números inventados, não são preços reais): uma chávena de feijão seco custa NGN 600 e alimenta a família uma vez; a carne para a mesma refeição custa NGN 3,000. O feijão é cinco vezes mais barato para essa refeição. Use os preços do seu mercado; mudam com a estação.",
            "Formas de poupar: compre fruta e legumes da época, quando estão mais baratos. Compre alimentos secos (feijão, cereais, peixe seco) em maior quantidade com os vizinhos ou com o seu grupo de poupança e dividam. Cultive folhas como amaranto, couve, moringa ou espinafre numa pequena horta, num saco ou numa lata. Compre menos refrigerantes, doces e salgadinhos de pacote, que custam muito e dão pouco.",
            "Não desperdice: guarde os alimentos secos em recipientes fechados e secos, longe da humidade e das pragas, e use as sobras com segurança no dia seguinte."
          ],
          steps: ["Escolha um grupo de alimentos, por exemplo os alimentos de construção.", "Escreva o preço e a quantidade de três alimentos desse grupo.", "Calcule o custo de uma refeição da família de cada um.", "Escolha o que compensa mais e anote que alimentos são da época."],
          words: [["Compensar", "dar muita comida boa pelo dinheiro que paga."], ["Da época", "a altura do ano em que uma cultura é colhida, por isso há muita e é mais barata."]],
          slides: [
            { title: "Compare o que é parecido", bullets: ["Mesmo grupo de alimentos, mesmo trabalho", "Custo de uma refeição da família", "O feijão e o peixe pequeno muitas vezes dão muito por pouco"] },
            { title: "Como comparar", bullets: ["Escreva o preço e a quantidade", "Calcule o custo por refeição da família", "Use os preços do seu mercado; eles mudam"] },
            { title: "Formas de poupar", bullets: ["Compre o que é da época", "Compre alimentos secos em quantidade com os vizinhos", "Cultive folhas num saco ou lata; menos refrigerantes e salgadinhos"] }
          ],
          tryIt: "No seu mercado ou loja, escreva o preço e a quantidade de três alimentos de construção (por exemplo feijão, ovos e peixe seco). Com a calculadora do telefone, calcule o custo de uma refeição da família de cada um. Faça um círculo à volta do que compensa mais. Escreva a moeda (KES, NGN, GHS, XOF, MAD ou a sua).",
          youCanNow: "comparar os preços dos alimentos pelo custo por refeição e escolher o que compensa mais em cada grupo de alimentos.",
          quickCheck: [
            { objective: "O4", q: "Qual é a forma mais justa de comparar o feijão e a carne?", options: ["A cor do saco", "A loja mais perto", "O que pesa mais", "O custo de uma refeição da família de cada um"], answer: 3, why: "O custo por refeição compara o que realmente recebe pelo dinheiro." },
            { objective: "O4", q: "Só um exemplo: o feijão para uma refeição custa XOF 500 e o peixe para uma refeição custa XOF 1,500. Quantas vezes mais barato é o feijão?", options: ["2 vezes", "3 vezes", "5 vezes", "É igual"], answer: 1, why: "1,500 dividido por 500 dá 3." }
          ]
        },
        {
          title: "Alimentar crianças pequenas e mulheres grávidas ou a amamentar",
          objectives: ["O5"],
          minutes: 6,
          goal: "Planear as refeições de um dia para uma criança pequena ou uma mulher grávida ou a amamentar, seguindo os conselhos da OMS.",
          text: [
            "As crianças pequenas crescem depressa e têm o estômago pequeno, por isso precisam de refeições pequenas, frequentes e cheias de boa comida. A OMS aconselha só leite materno nos primeiros 6 meses. A partir dos 6 meses, mais ou menos, junte comida da família mole e esmagada e continue a amamentar até aos 2 anos ou mais. Comece com pequenas quantidades e dê aos poucos mais comida, mais grossa e de mais tipos.",
            "Quantas vezes (OMS): 2 a 3 refeições por dia para bebés dos 6 aos 8 meses; 3 a 4 refeições por dia para crianças dos 9 aos 23 meses, mais 1 a 2 lanches se for preciso. Faça a papa grossa o bastante para ficar na colher e junte algo de outro grupo: feijão esmagado ou pasta de amendoim, um ovo, peixe pequeno moído em pó, folhas verdes esmagadas ou papaia. Dê à criança a sua própria tigela para ver quanto ela come.",
            "As mulheres grávidas e a amamentar precisam de mais comida boa, não só de mais alimento principal. Junte uma pequena refeição ou um lanche a mais por dia, com alimentos ricos em ferro (feijão, peixe pequeno, ovos, fígado, folhas verde-escuras) comidos com um alimento com vitamina C. Vá a todas as consultas pré-natais e tome só os suplementos que o centro de saúde lhe der.",
            "Quando uma criança está doente, a OMS aconselha mais bebidas, mais mamadas e comidas moles de que ela gosta. Depois da doença, dê comida a mais para a ajudar a recuperar. Se uma criança não está a crescer bem, ou está muito magra ou inchada, vá ao centro de saúde."
          ],
          steps: ["Veja a idade da criança em meses.", "Planeie o número de refeições para essa idade.", "Faça cada refeição grossa e junte outro grupo de alimentos.", "Para uma mulher grávida ou a amamentar: junte um lanche com um alimento rico em ferro e vitamina C."],
          words: [["Alimentação complementar", "dar comida da família a partir dos 6 meses, mais ou menos, enquanto se continua a amamentar."], ["Lanche", "uma pequena quantidade de comida entre as refeições, como uma banana, amendoim ou um ovo."]],
          slides: [
            { title: "Bebés e crianças pequenas (OMS)", bullets: ["0-6 meses: só leite materno", "A partir dos 6 meses: comida da família mole mais leite materno", "Continue a amamentar até aos 2 anos ou mais"] },
            { title: "Quantas vezes", bullets: ["6-8 meses: 2-3 refeições por dia", "9-23 meses: 3-4 refeições por dia, mais 1-2 lanches", "Papa grossa mais outro grupo de alimentos"] },
            { title: "Mulheres grávidas e a amamentar", bullets: ["Uma pequena refeição ou lanche a mais", "Alimentos ricos em ferro com vitamina C", "Só os suplementos que o centro de saúde der"] },
            { title: "Criança doente", bullets: ["Mais bebidas e mais mamadas", "Comidas moles de que gosta; comida a mais depois", "Não cresce bem: vá ao centro de saúde"] }
          ],
          sources: [WHO_IYCF, WHO_ANAEMIA],
          tryIt: "Planeie um dia de comida para uma criança de 10 meses (por exemplo em Douala ou Kumasi) ou para uma mãe que amamenta. Escreva cada refeição e lanche e os grupos de alimentos que têm.",
          youCanNow: "planear as refeições de um dia para uma criança pequena ou uma mulher grávida ou a amamentar seguindo os conselhos da OMS.",
          quickCheck: [
            { objective: "O5", q: "Quantas refeições por dia a OMS aconselha para um bebé de 7 meses?", options: ["2 a 3", "1", "6 a 8", "Nenhuma; só leite materno"], answer: 0, why: "A OMS aconselha 2 a 3 refeições por dia dos 6 aos 8 meses, com amamentação." },
            { objective: "O5", q: "Que papa é melhor para uma criança de 9 meses?", options: ["Papa rala e aguada com açúcar", "Só chá", "Papa grossa com pasta de amendoim ou ovo esmagado", "Refrigerante"], answer: 2, why: "Uma papa grossa com outro grupo de alimentos dá mais nutrientes num estômago pequeno." }
          ]
        },
        {
          title: "Escrever um plano de refeições semanal com pouco dinheiro",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escrever um plano de refeições semanal e uma lista de compras que caibam no seu orçamento.",
          text: [
            "Um plano poupa dinheiro e torna mais fácil comer bem. Comece pelo seu orçamento para comida da semana. Depois planeie as refeições principais, com alimentos principais baratos, feijão ou peixe pequeno na maioria dos dias, e legumes todos os dias. Planeie ovos, carne ou frango para alguns dias se o orçamento deixar.",
            "Repita as refeições de que a família gosta, mas mude o legume ou o feijão para haver variedade. Cozinhe o feijão uma vez e use-o em duas refeições. Planeie primeiro as refeições da criança e o lanche da mulher grávida ou a amamentar, para que nunca sejam eles a ficar de fora.",
            "A partir do plano, escreva a lista de compras com os preços do seu mercado, some-os e compare com o orçamento. Se passar, troque um alimento caro por um mais barato do mesmo grupo, não por nada. Exemplo (números inventados): uma família em Nakuru com um orçamento semanal de KES 2,500 troca duas refeições de carne por omena e feijão para não passar do orçamento.",
            "Ponha o plano na parede ou guarde uma foto no telefone. No fim da semana, veja o que gastou e o que deitou fora, e mude o plano da semana seguinte."
          ],
          steps: ["Escreva o seu orçamento semanal para comida.", "Planeie as refeições principais dos sete dias, com vários grupos de alimentos por dia.", "Planeie primeiro as refeições das crianças e das mulheres grávidas ou a amamentar.", "Escreva a lista de compras com os seus preços e some.", "Se passar do orçamento, troque dentro do mesmo grupo de alimentos."],
          words: [["Orçamento", "o dinheiro que planeia gastar."], ["Plano de refeições", "uma lista do que vai cozinhar em cada dia."]],
          slides: [
            { title: "Comece pelo orçamento", bullets: ["Dinheiro da semana para comida", "Alimentos principais baratos, feijão ou peixe pequeno", "Legumes todos os dias"] },
            { title: "Planeie com jeito", bullets: ["Repita os pratos preferidos, mude o legume", "Cozinhe o feijão uma vez, use duas", "Crianças e mães primeiro"] },
            { title: "Lista de compras", bullets: ["Os preços do seu mercado", "Some e compare com o orçamento", "Passou? Troque dentro do mesmo grupo de alimentos"] },
            { title: "Veja e ajuste", bullets: ["Quanto gastou?", "O que se desperdiçou?", "Mude o plano da semana seguinte"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de refeições de uma semana. Para cada dia, escreva as refeições e os grupos de alimentos, com fruta ou legumes todos os dias; marque os alimentos para qualquer criança pequena ou mulher grávida ou a amamentar; escreva a lista de compras com os seus preços e compare o total com o orçamento; e escreva três hábitos que vai usar.",
          youCanNow: "escrever um plano de refeições semanal e uma lista de compras que alimentem bem a casa sem passar do orçamento.",
          quickCheck: [
            { objective: "O6", q: "A sua lista de compras passa do orçamento. Qual é a melhor mudança?", options: ["Tirar todos os legumes", "Trocar um alimento caro por um mais barato do mesmo grupo", "Dar menos às crianças", "Comprar mais refrigerante"], answer: 1, why: "Trocar dentro do mesmo grupo mantém a refeição equilibrada e mais barata." },
            { objective: "O6", q: "As refeições de quem deve planear primeiro?", options: ["Das visitas", "Só dos adultos", "De ninguém em especial", "Das crianças pequenas e das mulheres grávidas ou a amamentar"], answer: 3, why: "São elas que mais precisam de boa comida, por isso nunca devem ficar de fora." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Comer bem com pouco dinheiro",
        questions: [
          { objective: "O4", q: "Qual é uma boa forma de poupar nos legumes?", options: ["Comprar só fora da época", "Comprá-los na época ou cultivar folhas num saco", "Comprar só salgadinhos de pacote", "Comprar menos vezes e deixá-los apodrecer"], answer: 1, why: "Os produtos da época são mais baratos, e as folhas crescem facilmente em casa." },
          { objective: "O4", q: "Só um exemplo: 1 kg de lentilhas em Casablanca custa MAD 20 e dá 4 refeições da família. Qual é o custo por refeição?", options: ["MAD 80", "MAD 4", "MAD 5", "MAD 24"], answer: 2, why: "20 dividido por 4 refeições dá 5." },
          { objective: "O5", q: "Até que idade a OMS aconselha continuar a amamentar?", options: ["2 anos ou mais", "6 meses", "1 mês", "Deve parar quando a comida começa"], answer: 0, why: "A amamentação continua com a comida da família até aos 2 anos ou mais." },
          { objective: "O5", q: "O que deve uma mãe que amamenta juntar todos os dias?", options: ["Mais chá doce", "Nada", "Só mais arroz", "Uma pequena refeição ou lanche a mais com alimentos ricos em ferro"], answer: 3, why: "Ela precisa de mais comida boa, sobretudo de alimentos ricos em ferro." },
          { objective: "O6", q: "Qual é a primeira coisa a escrever quando planeia as refeições da semana?", options: ["O seu orçamento semanal para comida", "A lista das visitas", "A encomenda de refrigerantes", "Nada; vá só às compras"], answer: 0, why: "O orçamento define o que o plano pode incluir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Boa Alimentação com Pouco Dinheiro e Alimentos Locais",
    questions: [
      { objective: "O1", q: "Qual é um alimento de energia (que dá força)?", options: ["Sukuma wiki", "Inhame", "Ovos", "Laranjas"], answer: 1, why: "O inhame é um alimento principal que dá energia." },
      { objective: "O1", q: "Qual é um alimento de construção (que faz crescer)?", options: ["Amendoim", "Mandioca", "Açúcar", "Papaia"], answer: 0, why: "O amendoim dá proteína." },
      { objective: "O1", q: "A batata-doce de polpa laranja, a papaia e a manga são ricas em:", options: ["Sal", "Nada de útil", "Vitaminas", "Óleo"], answer: 2, why: "Os alimentos cor de laranja são ricos em vitaminas." },
      { objective: "O1", q: "A anemia é muitas vezes causada por falta de:", options: ["Açúcar", "Sal", "Óleo", "Ferro"], answer: 3, why: "A falta de ferro é a causa alimentar mais comum da anemia." },
      { objective: "O2", q: "No prato equilibrado, cerca de um quarto é:", options: ["Doces", "Um alimento de construção", "Sal", "Refrigerante"], answer: 1, why: "Cerca de um quarto de alimento principal, um quarto de alimento de construção e metade de legumes e fruta." },
      { objective: "O2", q: "Quando deve beber chá se quer aproveitar o ferro da refeição?", options: ["Entre as refeições", "Com todas as refeições", "Em vez de comer", "Não importa"], answer: 0, why: "O chá com as refeições dificulta a absorção do ferro." },
      { objective: "O2", q: "Que pequena mudança torna o arroz mais equilibrado?", options: ["Juntar mais sal", "Juntar açúcar", "Juntar feijão e folhas verdes", "Juntar um refrigerante"], answer: 2, why: "O feijão e as folhas verdes juntam alimentos de construção e de proteção." },
      { objective: "O3", q: "O que esconde muito sal?", options: ["Tomate fresco", "Cubos de caldo e tempero em pó", "Feijão simples", "Fruta fresca"], answer: 1, why: "Os cubos e os temperos em pó são muito salgados." },
      { objective: "O3", q: "Que bebida tem mais açúcar livre?", options: ["Água limpa", "Chá sem açúcar", "Leite simples", "Uma garrafa de refrigerante"], answer: 3, why: "Os refrigerantes estão cheios de açúcar adicionado." },
      { objective: "O3", q: "Uma vendedora de comida em Abidjan deixa attiéké e peixe cozinhados fora a tarde toda, ao calor. Que chave não está a cumprir?", options: ["Manter os alimentos a temperaturas seguras", "Cozinhar bem", "Usar sal iodado", "Comer mais legumes"], answer: 0, why: "Os micróbios crescem depressa na comida cozinhada deixada quente durante horas." },
      { objective: "O3", q: "Uma forma mais barata e mais saudável de cozinhar do que fritar em muito óleo é:", options: ["Mais óleo", "Guisar, cozer ou cozinhar a vapor", "Fritar duas vezes", "Juntar açúcar"], answer: 1, why: "Guisar, cozer e cozinhar a vapor usam pouco óleo." },
      { objective: "O4", q: "Para comparar o que compensa, você calcula:", options: ["Que saco parece maior", "O nome do vendedor", "O custo de uma refeição da família", "Que loja tem mais gente"], answer: 2, why: "O custo por refeição mostra o que realmente recebe." },
      { objective: "O4", q: "A fruta e os legumes costumam estar mais baratos:", options: ["Fora da época", "Quando são da época", "Em pacotes", "Só à noite"], answer: 1, why: "Na época, há muitos e estão mais baratos." },
      { objective: "O4", q: "Só um exemplo: os ovos para uma refeição custam GHS 30 e o feijão custa GHS 10. Qual compensa mais nessa refeição?", options: ["Os ovos", "São iguais", "Nenhum", "O feijão"], answer: 3, why: "Os dois são alimentos de construção, e o feijão custa um terço." },
      { objective: "O5", q: "Nos primeiros 6 meses, um bebé precisa de:", options: ["Só leite materno", "Água e papa", "Chá", "Leite de vaca e açúcar"], answer: 0, why: "A OMS aconselha só leite materno nos primeiros 6 meses." },
      { objective: "O5", q: "Uma criança de 12 meses deve comer mais ou menos quantas refeições por dia?", options: ["Uma", "3 a 4, mais 1 a 2 lanches se for preciso", "Só leite materno", "Dez"], answer: 1, why: "A OMS aconselha 3 a 4 refeições dos 9 aos 23 meses, mais lanches se for preciso." },
      { objective: "O5", q: "Quando uma criança pequena está doente, a OMS aconselha:", options: ["Parar toda a comida", "Parar de amamentar", "Mais bebidas, mais mamadas e comidas moles de que ela gosta", "Só água"], answer: 2, why: "Mais líquidos e comida ajudam a criança a recuperar." },
      { objective: "O6", q: "Um bom plano de refeições semanal tem:", options: ["Só o mesmo alimento principal, todos os dias", "Legumes só aos domingos", "Nenhum orçamento", "Vários grupos de alimentos todos os dias"], answer: 3, why: "O objetivo é variedade todos os dias." },
      { objective: "O6", q: "Uma forma barata de fazer o feijão render mais no plano é:", options: ["Cozinhá-lo uma vez e usá-lo em duas refeições", "Deitar fora as sobras", "Cozinhá-lo de hora a hora", "Comprá-lo em pacotes pequeninos"], answer: 0, why: "Cozinhar uma vez poupa combustível e tempo, e as sobras bem guardadas dão uma segunda refeição." },
      { objective: "O6", q: "No fim da semana, você deve:", options: ["Deitar o plano fora", "Ver o que gastou e desperdiçou, e mudar o plano da semana seguinte", "Dobrar o orçamento", "Deixar de planear"], answer: 1, why: "Ver como correu ajuda a melhorar o plano seguinte." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Grupos de alimentos todos os dias", objective: "O1", notYet: "A maioria dos dias só tem o alimento principal, ou os grupos estão mal identificados.", meets: "Todos os dias têm alimentos de energia, de construção e de proteção, bem identificados.", exceeds: "Inclui também folhas verde-escuras ou alimentos cor de laranja e um alimento rico em ferro na maioria dos dias." },
      { name: "Refeições equilibradas", objective: "O2", notYet: "Faltam legumes ou fruta em alguns dias.", meets: "Legumes ou fruta todos os dias, e as refeições principais seguem o prato equilibrado.", exceeds: "Os alimentos ricos em ferro vêm com um alimento com vitamina C, e o chá fica para entre as refeições." },
      { name: "Sal, açúcar e segurança", objective: "O3", notYet: "Não há hábitos escritos, ou não reduzem o sal nem o açúcar.", meets: "Escreve um hábito para o sal, um para o açúcar e uma das cinco chaves para alimentos mais seguros.", exceeds: "Mostra as mudanças em receitas do plano, com o nome do prato." },
      { name: "Orçamento e lista de compras", objective: "O4", notYet: "Não há preços, ou o total está errado ou passa do orçamento sem nenhuma troca.", meets: "Lista de compras com os preços do próprio mercado e um total certo dentro do orçamento.", exceeds: "Mostra pelo menos uma troca para poupar dentro de um grupo de alimentos e anota os alimentos da época." },
      { name: "Alimentar quem mais precisa", objective: "O5", notYet: "Não há plano para a criança pequena ou a mulher grávida ou a amamentar da casa.", meets: "As refeições e os lanches seguem os conselhos da OMS para a idade da criança ou para a mulher.", exceeds: "Papa grossa com outro grupo de alimentos e o número certo de refeições estão escritos para cada dia." },
      { name: "Plano semanal", objective: "O6", notYet: "Faltam alguns dias.", meets: "Sete dias de refeições, prontos para pôr na parede ou no telefone.", exceeds: "Usa as sobras com segurança e repete os pratos preferidos com variedade." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem comer legumes ou fruta todos os dias e feijão ou peixe pequeno na maioria dos dias 30 dias depois (inquérito de seguimento)",
      "Casas que dizem usar um plano de refeições semanal e não passar do orçamento para comida",
      "Alunos que dizem usar menos cubos de caldo, sal ou bebidas açucaradas",
      "Os centros de saúde parceiros ou os agentes comunitários de saúde dizem que as crianças dos 6 aos 23 meses das famílias dos alunos estão mais bem alimentadas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone simples com calculadora, ou papel e caneta",
      "Preços de um mercado ou loja local para as lições sobre preços",
      "Um prato, uma tigela ou um desenho para mostrar o prato equilibrado",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Bons parceiros: grupos de mulheres, grupos de poupança, escolas, centros de saúde e agentes comunitários de saúde; uma demonstração de cozinha com alimentos locais funciona bem.",
      "Use os alimentos e os preços da sua zona; os preços do curso são só exemplos.",
      "Não dê dietas para doenças nem conselhos sobre suplementos; envie essas perguntas para o centro de saúde ou para um nutricionista.",
      "Tenha sensibilidade: alguns alunos podem não ter comida suficiente. Concentre-se em mudanças de baixo custo e indique o apoio alimentar local onde existir.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
