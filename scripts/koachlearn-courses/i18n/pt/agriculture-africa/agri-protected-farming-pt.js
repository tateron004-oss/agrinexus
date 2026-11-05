"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-protected-farming.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Safety rule kept from the English: all money figures are invented examples; no fertilizer recipes or pesticide products; follow the agronomist, the label and the national regulator.

const FAO_GAP_GH = { name: "FAO: Boas Práticas Agrícolas para hortícolas em estufa: princípios para zonas de clima mediterrânico (Plant Production and Protection Paper 217)", url: "https://www.fao.org/agriculture/crops/publications/detail/en/item/276049/icode/" };
const NORDEY_REVIEW = { name: "Nordey e outros (2017): Cultivo protegido de hortícolas na África subsariana: limites e perspetivas para pequenos produtores. Uma revisão (Agronomy for Sustainable Development)", url: "https://publications.cirad.fr/une_notice.php?dk=585832" };
const ICIPE_TUTA = { name: "icipe: Inseto do mês: a traça-do-tomateiro, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const PCPB = { name: "Pest Control Products Board (PCPB, regulador de pesticidas do Quénia)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigéria)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (EPA, Gana)", url: "https://www.epa.gov.gh" };
const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS): sementes e mudas certificadas", url: "https://www.kephis.go.ke" };

module.exports = {
  id: "agri-protected-farming-pt",
  lang: "pt",
  translationOf: "agri-protected-farming",
  category: "Agriculture (Africa)",
  name: "Estufas e Cultivo Protegido para Culturas de Alto Valor",
  skills: "Decidir quando o cultivo protegido compensa, Comparar estufas, redes de sombra e túneis e verificar o que os vendedores prometem, Produzir mudas e planear a fertirrega gota a gota, Controlar o calor, a humidade, as pragas e a higiene, Escrever um plano de negócio com o prazo de retorno",
  outcome: "escrever um plano de negócio para produzir uma cultura de alto valor (tomate, pimento ou pepino) numa estufa, numa rede de sombra ou num túnel na sua machamba: se combina com a sua água, o seu mercado e as suas competências, a estrutura e três orçamentos, um plano da cultura e da fertirrega, uma rotina de pragas e de higiene, e os custos, a receita, a margem bruta e o prazo de retorno.",
  about: [
    "Este curso é para pequenos agricultores e agricultores comerciais em crescimento, jovens agroempreendedores, grupos de jovens e de mulheres e extensionistas que pensam numa estufa, numa rede de sombra ou num túnel, ou que já têm um que não dá lucro. Os exemplos são o tomate, o pimento e o pepino no Quénia, na Nigéria, no Gana e no Senegal.",
    "O Capítulo 1 ajuda você a decidir e a montar: quando o cultivo protegido compensa e quando não compensa, as principais estruturas e como comparar orçamentos, como reconhecer vendedores que prometem demais, e como escolher uma cultura e produzir mudas limpas. O Capítulo 2 é sobre gerir como um negócio: o básico da fertirrega gota a gota, o controlo do calor, da humidade, das doenças e das pragas, a limpeza da estrutura e o plano de negócio com o prazo de retorno.",
    "Uma estufa é um grande investimento, e muitas ficaram vazias porque as contas, a água ou o mercado não funcionaram. Todos os valores em dinheiro neste curso são exemplos inventados para praticar as contas; use os seus próprios orçamentos e preços do mercado, e fale com um agrónomo, o seu extensionista e um conselheiro de confiança antes de assinar ou pagar. Há uma pequena verificação depois de cada lição, uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Escreva um plano de negócio de cultivo protegido para uma cultura na sua própria machamba: as suas respostas às cinco condições de \"compensa?\" (água, mercado, competências, capital, clima), a estrutura que usaria com pelo menos três orçamentos comparados e os vendedores verificados, a cultura e a variedade, um plano de viveiro e de fertirrega combinado com um agrónomo, uma rotina semanal de pragas, clima e higiene, e os custos, a produção esperada, a receita, a margem bruta por ciclo, o prazo de retorno e o que acontece ao prazo de retorno se o preço cair um quarto.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores comerciais em crescimento, jovens agroempreendedores, grupos de jovens e de mulheres e extensionistas em África que pensam ter, ou já têm, uma estufa, uma rede de sombra ou um túnel para tomate, pimento, pepino ou outras hortícolas de alto valor.",
    startingPoint: "Já produziram hortícolas a céu aberto. A alguns já ofereceram um kit de estufa com grandes promessas de produção; outros têm uma que teve problemas de pragas, de doenças ou de mercado. Poucos compararam orçamentos, planearam a fertirrega ou calcularam o prazo de retorno.",
    gap: "O cultivo protegido pode dar produções maiores, mais limpas e mais regulares, mas custa muito no início, precisa de competências e de água segura, acumula calor e doenças, e só compensa com um mercado estável. Os alunos precisam de decidir se lhes convém, escolher e verificar uma estrutura, conduzir bem a cultura e provar com números que ela se paga antes de a cobertura se gastar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos usam o português como segunda língua",
      "Matemática: contas simples com a calculadora do telefone; cada cálculo é mostrado passo a passo",
      "Dinheiro: todos os valores são exemplos inventados; os alunos usam os seus próprios orçamentos e preços na moeda local (KES, NGN, GHS ou XOF)",
      "Segurança: nenhuma receita de adubo, nenhum produto ou dose de pesticida; os alunos trabalham com um agrónomo e seguem o rótulo e o regulador nacional",
      "Finanças: nenhum conselho de investimento; os alunos leem os contratos até ao fim e falam com um conselheiro de confiança antes de pagar"
    ],
    prerequisites: "Nenhum. Os cursos \"Rega e Gestão da Água\" (gota a gota e bombas) e \"Maneio Integrado de Pragas e Controlo Biológico de Pragas\" são úteis junto com este curso."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para a sua própria machamba", action: "verificar as cinco condições do cultivo protegido (água, mercado, competências, capital e clima) e decidir se avança", standard: "dando um sim ou não a cada uma, com uma razão" },
    { id: "O2", condition: "Ao escolher uma estrutura", action: "comparar orçamentos de estufas, redes de sombra ou túneis e verificar o que cada vendedor promete", standard: "usando pelo menos três orçamentos e pedindo referências e uma garantia por escrito" },
    { id: "O3", condition: "Para uma cultura à sua escolha", action: "planear a variedade, o viveiro, a transplantação e a fertirrega gota a gota com um agrónomo", standard: "como um plano com datas para um ciclo da cultura" },
    { id: "O4", condition: "Depois de a cultura estar plantada", action: "seguir uma rotina diária e semanal para o calor, a humidade, as pragas e a higiene", standard: "cobrindo janelas de ventilação, observação, armadilhas e regras de entrada todas as semanas" },
    { id: "O5", condition: "Com os seus orçamentos e os preços do mercado", action: "calcular o custo, a receita, a margem bruta e o prazo de retorno da cultura", standard: "e testar o que acontece se o preço cair um quarto" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Decidir e montar",
      lessons: [
        {
          title: "Quando o cultivo protegido compensa, e quando não compensa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Verificar as cinco condições do cultivo protegido na sua própria machamba e decidir se avança.",
          text: [
            "Cultivo protegido quer dizer produzir uma cultura debaixo de uma cobertura: uma estufa com plástico e rede anti-insetos, uma casa de rede de sombra, ou um túnel baixo ou alto (onde se entra a pé). Bem feito, protege da chuva forte, do granizo e de muitos insetos, reduz algumas doenças e dá produções maiores, mais limpas e mais regulares de culturas de alto valor, como o tomate, o pimento e o pepino.",
            "Não serve para todos. Uma revisão de 2017 sobre o cultivo protegido na África subsariana concluiu que não serve para todos os climas e que continua a precisar de outros meios de controlo de pragas, e que a falta de competências, de apoio técnico e de financiamento trava muitos pequenos agricultores. Muitas estufas no Quénia, na Nigéria e no Gana ficam vazias depois de uma ou duas culturas.",
            "Verifique cinco condições antes de gastar dinheiro. Água: uma fonte segura e limpa durante todo o ano, porque a cultura não recebe chuva. Mercado: compradores que levam a sua produção todas as semanas a um preço justo, como um hotel, um supermercado, uma escola ou vendedores do mercado, e não apenas \"o mercado\". Competências: você ou um trabalhador formado em fertirrega, poda e observação de pragas, e um agrónomo a quem possa ligar. Capital: dinheiro para a estrutura, a primeira cultura e alguns meses de custos, sem pôr em risco a comida da sua família. Clima: nas terras baixas muito quentes, uma estufa fechada pode aquecer demais, por isso uma rede de sombra ou um modelo bem ventilado pode servir melhor."
          ],
          steps: ["Água: há uma fonte segura e limpa durante todo o ano?", "Mercado: quem vai comprar todas as semanas, e a que preço?", "Competências: quem faz a fertirrega, a poda e a observação, e que agrónomo pode chamar?", "Capital: consegue pagar a estrutura, a primeira cultura e os custos sem tocar no dinheiro da comida?", "Clima: uma estrutura fechada vai aquecer demais onde você está?", "Decida: avançar, começar mais pequeno, ou ainda não."],
          words: [["Cultivo protegido", "produzir culturas debaixo de uma cobertura, como uma estufa, uma rede de sombra ou um túnel."], ["Estufa", "uma armação coberta com plástico e rede anti-insetos, com janelas para o ar."], ["Rede de sombra", "uma rede que corta parte do sol e do calor e trava alguns insetos e aves."], ["Túnel", "uma armação curva coberta com plástico ou rede; os túneis baixos cobrem um canteiro, os túneis altos cobrem um talhão."]],
          slides: [
            { title: "O que a proteção pode fazer", bullets: ["Protege da chuva forte, do granizo e de muitos insetos", "Produções maiores, mais limpas e mais regulares", "Melhor para culturas de alto valor"] },
            { title: "Não serve para todos", bullets: ["Não serve para todos os climas (revisão, 2017)", "Continua a precisar de outros controlos de pragas", "Competências, apoio e financiamento são os grandes obstáculos"] },
            { title: "Cinco condições", bullets: ["Água todo o ano", "Um comprador todas as semanas", "Competências e um agrónomo", "Capital e o clima certo"] },
            { title: "A sua decisão", bullets: ["Avançar", "Começar mais pequeno (túnel ou rede de sombra)", "Ainda não: resolver primeiro a condição que falta"] }
          ],
          sources: [NORDEY_REVIEW, FAO_GAP_GH],
          tryIt: "Escreva as cinco condições e responda a cada uma para a sua machamba com sim ou não e uma razão. Depois escreva a sua decisão: avançar, começar mais pequeno, ou ainda não, e o que precisaria de mudar.",
          youCanNow: "verificar as cinco condições do cultivo protegido e decidir se ele convém agora à sua machamba.",
          quickCheck: [
            { objective: "O1", q: "Qual é o sinal mais forte de que está pronto para uma estufa?", options: ["Um vendedor diz que se paga em três meses", "O seu vizinho comprou uma", "Tem água todo o ano e um comprador que leva tomate todas as semanas", "Viu fotografias na internet"], answer: 2, why: "Água segura e um comprador estável são duas das cinco condições que fazem compensar." },
            { objective: "O1", q: "Você cultiva numa terra baixa muito quente. O que deve verificar primeiro?", options: ["Se uma estufa fechada vai aquecer demais, e se uma rede de sombra serve melhor", "Só a cor do plástico", "Nada; o calor é bom para todas as culturas", "Se pode cultivar sem água"], answer: 0, why: "As estruturas fechadas acumulam calor; nas zonas quentes, a ventilação ou as redes de sombra podem servir melhor." }
          ]
        },
        {
          title: "Estufas, redes de sombra e túneis: opções, custos e vendedores",
          objectives: ["O2"],
          minutes: 6,
          goal: "Comparar pelo menos três orçamentos de estruturas e verificar o que cada vendedor promete.",
          text: [
            "As principais opções: uma estufa (armação de madeira ou de aço com plástico tratado contra UV no teto e rede anti-insetos nos lados) dá a maior proteção e é a mais cara. Uma casa de rede de sombra custa menos, é mais fresca e serve para zonas quentes e culturas como o pimento e as folhosas, mas não protege da chuva. Os túneis altos ou baixos são a forma mais barata de começar e aprender. O aço dura mais do que a madeira, mas custa mais; a madeira tratada pode servir se as térmitas forem controladas. A cobertura de plástico gasta-se ao fim de alguns anos, por isso pergunte durante quanto tempo a proteção UV é garantida.",
            "Os custos variam muito com o tamanho, o material, o país e o que está incluído, por isso peça pelo menos três orçamentos escritos para o mesmo tamanho e compare linha a linha: armação, cobertura e rede, portas, sistema gota a gota, tanque de água, viveiro, instalação, formação e visitas pós-venda. Por exemplo (valores inventados, só para mostrar o método), o orçamento A de KES 380,000 pode incluir o gota a gota e a formação, enquanto o orçamento B de KES 300,000 não inclui, por isso B não é realmente mais barato.",
            "Cuidado com os vendedores que prometem demais. Sinais de alerta: produção ou rendimento garantidos, \"paga-se numa só época\", uma promessa de \"recompra\" sem contrato escrito, pressão para pagar hoje um grande sinal, nenhum agricultor que possa visitar, nenhuma garantia escrita, e kits vendidos sem formação nem plano de água. Peça para visitar dois agricultores que usam a estrutura desse vendedor há pelo menos duas épocas. Tenha por escrito a garantia, a data de entrega e o que está incluído, leia o contrato todo e fale com um conselheiro de confiança antes de pagar."
          ],
          steps: ["Escolha o tamanho que consegue gerir e regar.", "Peça a pelo menos três vendedores orçamentos escritos para o mesmo tamanho.", "Compare linha a linha: armação, cobertura, rede, gota a gota, tanque, viveiro, instalação, formação, pós-venda.", "Peça referências a cada vendedor e visite dois agricultores que usam a estrutura deles.", "Tenha a garantia, a data de entrega e o conteúdo por escrito; leia tudo e fale com um conselheiro."],
          words: [["Plástico tratado contra UV", "plástico de estufa feito para resistir à luz ultravioleta do sol, para durar mais."], ["Rede anti-insetos", "uma rede fina nos lados e nas janelas que trava muitos insetos mas deixa passar o ar."], ["Orçamento", "um preço escrito de um vendedor que mostra exatamente o que está incluído."], ["Garantia", "uma promessa escrita do vendedor de reparar ou trocar as peças que falharem dentro de um prazo."]],
          slides: [
            { title: "As opções", bullets: ["Estufa: mais proteção, mais custo", "Rede de sombra: mais fresca, mais barata, não protege da chuva", "Túneis: a forma mais barata de começar e aprender"] },
            { title: "Compare três orçamentos", bullets: ["Mesmo tamanho, por escrito, linha a linha", "Armação, cobertura, rede, gota a gota, tanque, viveiro", "Instalação, formação, pós-venda"] },
            { title: "Sinais de alerta", bullets: ["Produção garantida ou \"paga-se numa só época\"", "Promessas de recompra sem contrato", "Pressão para pagar hoje um sinal"] },
            { title: "Proteja-se", bullets: ["Visite dois agricultores que a usam há 2+ épocas", "Garantia e conteúdo por escrito", "Leia o contrato todo; fale com um conselheiro"] }
          ],
          sources: [FAO_GAP_GH, NORDEY_REVIEW],
          tryIt: "Peça a pelo menos três vendedores ou construtores perto de si orçamentos escritos para o mesmo tamanho de estrutura. Ponha-os numa tabela, linha a linha, e marque o que cada um deixa de fora. Escreva as perguntas que vai fazer a cada vendedor, incluindo dois agricultores que possa visitar.",
          youCanNow: "comparar orçamentos de estruturas linha a linha e verificar o que um vendedor promete antes de pagar.",
          quickCheck: [
            { objective: "O2", q: "Um vendedor garante 10 toneladas de tomate e retorno numa só época, se pagar hoje um sinal. O que faz?", options: ["Paga já antes de a oferta acabar", "Paga metade e decide depois", "Assina sem ler", "Trata isso como um sinal de alerta, pede referências e condições escritas, e compara orçamentos"], answer: 3, why: "Produções garantidas e pressão para pagar hoje são sinais clássicos de quem promete demais." },
            { objective: "O2", q: "O orçamento B é mais barato do que o A, mas não tem sistema gota a gota nem formação. O que é verdade?", options: ["B é claramente o melhor negócio", "B pode custar mais quando juntar o que ele deixa de fora", "O gota a gota e a formação nunca são precisos", "Os orçamentos não se podem comparar"], answer: 1, why: "Compare linha a linha; o que falta tem de ser comprado à parte." }
          ]
        },
        {
          title: "Escolher uma cultura e produzir mudas limpas",
          objectives: ["O3"],
          minutes: 5,
          goal: "Escolher uma cultura e uma variedade para a sua estrutura e planear um viveiro limpo e a transplantação.",
          text: [
            "As culturas protegidas mais comuns são o tomate, o pimento e o pepino. O tomate tem o maior mercado, mas também o maior risco de pragas e doenças, incluindo a Tuta absoluta. O pimento vende bem a hotéis e supermercados, sobretudo os coloridos, e demora mais a começar a produzir. O pepino cresce depressa e dá dinheiro rápido. Escolha primeiro pelo seu comprador: que cultura, cor e tamanho ele vai levar todas as semanas.",
            "Use variedades criadas para estufa. Muitos tomates de estufa são indeterminados (continuam a crescer e são guiados por um fio durante muitos meses), e muitos pepinos de estufa dão fruto sem abelhas. A semente destas variedades pode ser cara, por isso compre semente selada e certificada num vendedor registado (no Quénia, a KEPHIS certifica as sementes) e não guarde semente de híbridos.",
            "Produza as mudas num viveiro limpo: tabuleiros de mudas com um substrato limpo (não terra do campo), debaixo de rede anti-insetos, com uma rega cuidadosa. Muitos agricultores compram mudas a um viveirista licenciado, o que poupa tempo, mas tem de ser uma fonte limpa e de confiança. Transplante mudas fortes e saudáveis, sem pragas, ao fim da tarde, quando está fresco, no compasso que o seu agrónomo indicar, e regue-as logo. Planeie as datas: sementeira, transplantação, primeira colheita e última colheita, para que o seu comprador receba a produção a tempo."
          ],
          steps: ["Pergunte ao seu comprador que cultura, cor e tamanho vai levar todas as semanas.", "Escolha uma variedade de estufa; compre semente selada e certificada.", "Produza as mudas em tabuleiros com substrato limpo debaixo de rede, ou compre a um viveirista licenciado.", "Transplante mudas fortes e sem pragas ao fim da tarde, no compasso do agrónomo.", "Escreva as datas: sementeira, transplantação, primeira e última colheita."],
          words: [["Pimento", "pimento doce; verde, vermelho, amarelo ou laranja."], ["Indeterminado", "um tipo de tomate que continua a crescer e a dar fruto durante meses; é guiado por um fio."], ["Substrato", "uma mistura limpa (por exemplo, fibra de coco) usada em vez de terra para produzir mudas."], ["Viveirista", "uma empresa de viveiro que produz e vende mudas."]],
          slides: [
            { title: "Escolha pelo seu comprador", bullets: ["Tomate: maior mercado, mais risco de pragas", "Pimento: hotéis e supermercados; começa mais devagar", "Pepino: rápido, dinheiro depressa"] },
            { title: "Variedades de estufa", bullets: ["Tomates indeterminados guiados por fios", "Pepinos que dão fruto sem abelhas", "Semente selada e certificada; não guardar semente de híbridos"] },
            { title: "Mudas limpas", bullets: ["Tabuleiros, substrato limpo, debaixo de rede", "Ou um viveirista licenciado e de confiança", "Transplantar sem pragas ao fim da tarde fresca"] },
            { title: "Planeie as datas", bullets: ["Sementeira, transplantação, primeira e última colheita", "De acordo com o que o comprador precisa por semana"] }
          ],
          sources: [KEPHIS, ICIPE_TUTA],
          tryIt: "Pergunte a um comprador que cultura, cor e tamanho levaria todas as semanas. Escolha a sua cultura e uma variedade de estufa, e escreva as datas de sementeira (ou da compra das mudas), transplantação, primeira colheita e última colheita.",
          youCanNow: "escolher uma cultura protegida de acordo com o que o seu comprador precisa e planear mudas limpas e a transplantação.",
          quickCheck: [
            { objective: "O3", q: "O que deve decidir a primeira cultura que vai produzir na sua estufa?", options: ["O que o seu comprador vai levar todas as semanas", "A cultura com o pacote de sementes mais bonito", "O que o vizinho produz", "A semente mais barata"], answer: 0, why: "Um comprador estável é o que faz uma cultura protegida compensar." },
            { objective: "O3", q: "Onde se devem produzir as mudas para a estufa?", options: ["Na terra do campo ao lado de tomates velhos", "Debaixo de uma árvore, sem rede", "Em tabuleiros com substrato limpo debaixo de rede anti-insetos, ou num viveirista licenciado", "Em qualquer lado; as pragas não importam numa estufa"], answer: 2, why: "Mudas limpas evitam que pragas e doenças entrem na estrutura com a cultura." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Decidir e montar",
        questions: [
          { objective: "O1", q: "Qual NÃO é uma das cinco condições deste curso?", options: ["Água todo o ano", "Um comprador todas as semanas", "Uma estufa da cor mais viva", "Competências e um agrónomo"], answer: 2, why: "As cinco condições são água, mercado, competências, capital e clima." },
          { objective: "O1", q: "Porque é que a água tem de ser segura todo o ano numa estufa?", options: ["A cultura debaixo da cobertura não recebe chuva", "O plástico tem de ser lavado todos os dias", "A água arrefece a armação", "Não é importante"], answer: 0, why: "Debaixo de uma cobertura, toda a água tem de vir da sua fonte." },
          { objective: "O2", q: "Que estrutura é a mais fresca e serve para zonas quentes, mas não protege da chuva?", options: ["Uma estufa de plástico fechada", "Uma casa de rede de sombra", "Um armazém de tijolo", "Um túnel baixo de plástico"], answer: 1, why: "As redes de sombra cortam o sol e o calor, mas deixam passar a chuva." },
          { objective: "O2", q: "Qual é a melhor forma de verificar o que um vendedor promete?", options: ["Confiar no folheto", "Pagar primeiro e perguntar depois", "Perguntar só nas redes sociais", "Visitar dois agricultores que usam a estrutura dele há duas épocas ou mais"], answer: 3, why: "Os agricultores que já a usaram mostram o que ela faz de verdade." },
          { objective: "O3", q: "Um tomate indeterminado:", options: ["Continua a crescer e a dar fruto durante meses, guiado por um fio", "Para de crescer ao fim de poucas semanas", "Nunca precisa de suporte", "É um tipo de pepino"], answer: 0, why: "Os tomates indeterminados continuam a crescer, por isso são guiados por fios nas estufas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir como um negócio",
      lessons: [
        {
          title: "O básico da fertirrega gota a gota",
          objectives: ["O3"],
          minutes: 5,
          goal: "Descrever como funciona um sistema de fertirrega gota a gota e planear as verificações diárias com um agrónomo.",
          text: [
            "Fertirrega quer dizer dar o adubo pelo sistema gota a gota, dissolvido na água da rega, para que cada planta receba um pouco de alimento e de água nas raízes todos os dias. Poupa água e adubo e mantém as folhas secas, o que ajuda contra as doenças. Os sistemas gota a gota, as bombas e as opções solares são ensinados no curso \"Rega e Gestão da Água\"; esta lição trata do que é diferente debaixo de uma cobertura.",
            "Um sistema simples tem um tanque de água, um filtro, uma forma de juntar o adubo (um tanque doseador ou um injetor), tubos principais e linhas gota a gota com gotejadores em cada planta. Use só adubos solúveis em água feitos para fertirrega. A receita muda com a cultura e a sua fase (muda, floração, frutificação) e com a sua água e o seu solo, por isso peça-a a um agrónomo, faça uma análise de solo e de água, ou peça-a aos técnicos do fornecedor de adubo. Nunca adivinhe, e nunca misture produtos no mesmo tanque a não ser que o agrónomo diga que se podem misturar.",
            "Verifique o sistema todos os dias: o filtro está limpo, todos os gotejadores pingam, nenhuma linha tem fugas, e a terra à volta das plantas está húmida, não encharcada. Muitos produtores usam um medidor de EC barato para verificar se a força do adubo na água é a que o agrónomo definiu, e um medidor de pH ou tiras. Lave as linhas com água limpa como lhe aconselharem, para que os sais e o adubo não entupam os gotejadores. Escreva num registo a água e o adubo de cada dia."
          ],
          steps: ["Peça um plano de adubação por fase da cultura a um agrónomo ou faça uma análise de solo e de água.", "Use só adubos solúveis em água para fertirrega; misture só como lhe aconselharem.", "Todos os dias: filtro limpo, gotejadores a pingar e linhas sem fugas.", "Verifique a força com um medidor de EC e o pH como o agrónomo definiu.", "Lave as linhas como lhe aconselharem; registe a água e o adubo de cada dia."],
          words: [["Fertirrega", "dar adubo dissolvido na água da rega por um sistema gota a gota."], ["Gotejador", "a pequena saída numa linha gota a gota que liberta água em cada planta."], ["Medidor de EC", "um pequeno aparelho que mede quanto adubo dissolvido (sal) há na água."], ["Lavagem das linhas", "passar água limpa pelas linhas para tirar sais e entupimentos."]],
          slides: [
            { title: "O que é a fertirrega", bullets: ["Adubo dissolvido na água do gota a gota", "Um pouco de alimento e água nas raízes todos os dias", "Poupa água e mantém as folhas secas"] },
            { title: "As peças", bullets: ["Tanque, filtro, tanque doseador ou injetor", "Tubo principal e linhas gota a gota com gotejadores", "Só adubos solúveis em água"] },
            { title: "A receita", bullets: ["Muda com a fase da cultura, a água e o solo", "De um agrónomo ou de uma análise de água e solo", "Nunca adivinhe; misture só como aconselhado"] },
            { title: "Verificações diárias", bullets: ["Filtro limpo; todos os gotejadores pingam", "EC e pH como o agrónomo definiu", "Lave as linhas como aconselhado; registe"] }
          ],
          sources: [FAO_GAP_GH],
          tryIt: "Desenhe o seu sistema de fertirrega gota a gota, do tanque até às plantas, e escreva o nome de cada peça. Depois escreva uma lista de verificação diária (filtro, gotejadores, fugas, EC, pH, humidade do solo, registo) e as perguntas que vai fazer ao seu agrónomo sobre o plano de adubação para cada fase da cultura.",
          youCanNow: "descrever um sistema de fertirrega gota a gota, planear a adubação com um agrónomo e fazer as verificações diárias.",
          quickCheck: [
            { objective: "O3", q: "De onde deve vir a sua receita de fertirrega?", options: ["De um palpite pela cor das folhas", "De um agrónomo, de uma análise de solo e de água ou dos técnicos do fornecedor", "A mesma receita para todas as culturas e fases", "O que for mais barato nessa semana"], answer: 1, why: "A receita depende da cultura, da fase, da água e do solo, por isso tem de vir de um especialista." },
            { objective: "O3", q: "Várias plantas estão murchas enquanto outras estão bem. O que verifica primeiro?", options: ["Se os gotejadores delas estão entupidos e se o filtro está limpo", "Juntar mais adubo ao tanque", "Tirar a rede anti-insetos", "Regar por cima com uma mangueira"], answer: 0, why: "Os gotejadores entupidos são uma razão comum para algumas plantas não receberem água nem adubo." }
          ]
        },
        {
          title: "Controlar o calor, a humidade, as pragas e a higiene",
          objectives: ["O4"],
          minutes: 6,
          goal: "Seguir uma rotina diária e semanal para o calor, a humidade, as pragas e a higiene na sua estrutura.",
          text: [
            "O calor e a humidade são os maiores problemas do dia a dia debaixo de cobertura nos trópicos. Uma estufa fechada pode ficar muito mais quente do que lá fora, e o ar quente, parado e húmido traz doenças de fungos como o míldio e o bolor cinzento. Abra as janelas laterais e do teto de manhã e feche-as à noite conforme for preciso, mantenha as folhas secas regando só pelo gota a gota, pode as folhas velhas de baixo e os rebentos laterais para o ar circular, e não ponha plantas demais. Uma rede de sombra por cima do teto nos meses mais quentes pode ajudar. Tenha um termómetro barato lá dentro e escreva as leituras.",
            "As redes anti-insetos travam muitas pragas, mas as que entram multiplicam-se depressa, sem chuva nem inimigos naturais para as travar: moscas-brancas, tripes, afídeos, ácaros e, no tomate, a Tuta absoluta. No solo, os nemátodes das galhas são um problema comum nas estufas usadas há muito tempo. Observe todas as linhas de plantas todas as semanas, pendure placas adesivas amarelas para as moscas-brancas e os afídeos e azuis para os tripes, e use armadilhas de feromonas para a Tuta absoluta. Siga os passos da proteção integrada (PI); se for preciso um pesticida, use só um registado para a sua cultura (PCPB no Quénia, NAFDAC na Nigéria, a EPA no Gana), siga o rótulo e o seu intervalo de segurança antes da colheita, e use equipamento de proteção, porque vai colher fruta muitas vezes num espaço fechado.",
            "A higiene trava as pragas e as doenças. Use uma porta dupla para que uma esteja sempre fechada, e um pedilúvio à entrada. Limite as visitas, e peça aos trabalhadores que lavem as mãos e usem roupa limpa. Tire as plantas doentes e as folhas e frutos caídos num saco fechado, mantenha a zona à volta da estrutura sem ervas, repare logo os buracos na rede e limpe as ferramentas. Entre culturas, tire todos os restos de plantas e limpe a estrutura antes de plantar outra vez."
          ],
          steps: ["Todas as manhãs: abrir as janelas; ler o termómetro; ver se há folhas molhadas.", "Todas as tardes: fechar as janelas conforme preciso; registar a temperatura.", "Todas as semanas: observar todas as linhas; contar o que caiu nas placas e nas armadilhas de feromonas.", "Todas as semanas: podar folhas de baixo e rebentos laterais; tirar plantas doentes e restos num saco fechado.", "Sempre: porta dupla fechada, pedilúvio, poucas visitas, ferramentas limpas, reparar buracos na rede."],
          words: [["Ventilação", "deixar o ar passar pela estrutura através das janelas para baixar o calor e a humidade."], ["Humidade", "quanto vapor de água há no ar; muita humidade ajuda as doenças de fungos."], ["Nemátode das galhas", "um verme minúsculo no solo que faz inchaços nas raízes e enfraquece as plantas."], ["Pedilúvio", "um tabuleiro baixo com desinfetante à entrada para limpar as botas."]],
          slides: [
            { title: "Calor e humidade", bullets: ["Abrir as janelas de manhã, fechar conforme preciso", "Regar só pelo gota a gota; manter as folhas secas", "Podar folhas de baixo e rebentos laterais; não pôr plantas demais"] },
            { title: "Pragas debaixo de cobertura", bullets: ["Moscas-brancas, tripes, afídeos, ácaros", "Tuta absoluta no tomate", "Nemátodes das galhas em solo velho"] },
            { title: "Observar e apanhar", bullets: ["Observar todas as linhas todas as semanas", "Placas amarelas: moscas-brancas, afídeos; azuis: tripes", "Armadilhas de feromonas para a Tuta absoluta"] },
            { title: "Higiene", bullets: ["Porta dupla e pedilúvio", "Poucas visitas; mãos, roupa e ferramentas limpas", "Tirar os restos num saco fechado; reparar logo as redes"] }
          ],
          sources: [FAO_GAP_GH, ICIPE_TUTA, PCPB, NAFDAC, GHANA_EPA],
          tryIt: "Escreva uma rotina de uma página para a sua estrutura: o que faz todas as manhãs e tardes, o que faz todas as semanas (observação, armadilhas, poda, restos) e as suas regras de entrada (portas, pedilúvio, visitas). Ponha-a na porta.",
          youCanNow: "seguir uma rotina diária e semanal para o calor, a humidade, as pragas e a higiene numa estrutura protegida.",
          quickCheck: [
            { objective: "O4", q: "Lá dentro está quente e húmido e vê o bolor cinzento a começar. O que ajuda mais?", options: ["Regar as folhas com uma mangueira", "Fechar todas as janelas o dia todo", "Plantar mais plantas mais juntas", "Abrir as janelas, manter as folhas secas e podar as folhas de baixo para o ar circular"], answer: 3, why: "O ar a circular e as folhas secas travam as doenças de fungos." },
            { objective: "O4", q: "Porque usar uma porta dupla à entrada da estufa?", options: ["Para parecer moderna", "Para que uma porta esteja sempre fechada e entrem menos insetos", "Para manter os trabalhadores lá dentro", "Deixa entrar mais calor"], answer: 1, why: "Com uma porta sempre fechada, os insetos não conseguem entrar a voar diretamente." }
          ]
        },
        {
          title: "O plano de negócio: margem bruta e prazo de retorno",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular o custo, a receita, a margem bruta e o prazo de retorno de uma cultura protegida.",
          text: [
            "Um plano de negócio mostra, com números, se a estrutura se consegue pagar antes de se gastar. Precisa de dois tipos de custo. O investimento é o que paga uma só vez: a estrutura, o sistema gota a gota, o tanque e a instalação. Os custos de funcionamento repetem-se em cada ciclo da cultura: semente ou mudas, adubo, proteção da cultura, mão de obra, água e energia, transporte, embalagem e taxas do mercado.",
            "Margem bruta por ciclo = receita (kg que espera vender x preço por kg) - custos de funcionamento. Prazo de retorno = investimento / margem bruta por ano. Exemplo inventado em KES, só para praticar o método: investimento KES 400,000; um ciclo de tomate por ano; vendas esperadas de 4,000 kg a KES 40 = KES 160,000; custos de funcionamento KES 90,000; margem bruta KES 70,000 por ano. Prazo de retorno = 400,000 / 70,000 = cerca de 5.7 anos. Se o vendedor diz que a cobertura dura cerca de 4 anos, este plano não se paga antes de ter de a trocar. Isso é um sinal de alerta, não uma razão para pedir mais dinheiro emprestado.",
            "Agora teste-o. Se o preço cair um quarto (KES 30 em vez de 40), a receita passa a KES 120,000, a margem a KES 30,000 e o prazo de retorno a mais de 13 anos. Os preços do tomate mudam muito com a época, por isso teste um preço mau, uma produção mais baixa e uma cultura perdida. Depois procure formas de o melhorar: uma estrutura mais pequena ou mais barata, um contrato com um comprador, dois ciclos por ano, uma cultura de mais valor como o pimento colorido, ou dividir o custo num grupo. As mesmas contas funcionam em NGN, GHS ou XOF: um produtor perto de Dakar, no Senegal, faz as mesmas contas em francos CFA. Use os seus próprios orçamentos e preços, mantenha registos reais quando começar, e fale com um conselheiro de confiança antes de pedir um empréstimo ou assinar."
          ],
          steps: ["Some o investimento do orçamento que escolheu.", "Faça a lista dos custos de funcionamento de um ciclo.", "Receita = kg que espera vender x preço por kg (do seu comprador).", "Margem bruta = receita - custos de funcionamento; por ano = margem x ciclos por ano.", "Prazo de retorno = investimento / margem bruta por ano; compare com a duração da cobertura.", "Teste uma queda de um quarto no preço, uma produção mais baixa e uma cultura perdida."],
          words: [["Investimento", "dinheiro pago uma só vez para montar, como a estrutura e o sistema gota a gota."], ["Custos de funcionamento", "dinheiro gasto em cada ciclo da cultura, como mudas, adubo, mão de obra e transporte."], ["Margem bruta", "a receita menos os custos de funcionamento de um ciclo ou de um ano."], ["Prazo de retorno", "o tempo que a margem bruta leva a pagar o investimento."]],
          slides: [
            { title: "Dois tipos de custo", bullets: ["Investimento: estrutura, gota a gota, tanque, instalação", "Custos de funcionamento: mudas, adubo, mão de obra, água, transporte"] },
            { title: "As fórmulas", bullets: ["Margem bruta = receita - custos de funcionamento", "Prazo de retorno = investimento / margem bruta por ano", "O prazo de retorno tem de ser mais curto do que a vida da cobertura"] },
            { title: "Exemplo inventado (KES)", bullets: ["Investimento 400,000; margem 70,000 por ano", "Prazo de retorno cerca de 5.7 anos", "Preço um quarto mais baixo: mais de 13 anos"] },
            { title: "Torne-o mais forte", bullets: ["Estrutura mais pequena ou dividida em grupo", "Contrato com um comprador; dois ciclos por ano", "Cultura de mais valor; registos reais; fale com um conselheiro"] }
          ],
          sources: [NORDEY_REVIEW],
          tryIt: "Tarefa final: escreva o seu plano de negócio de cultivo protegido para uma cultura: as suas cinco condições, a estrutura com três orçamentos comparados e os vendedores verificados, a cultura e a variedade, o seu plano de viveiro e de fertirrega, a sua rotina semanal, e o investimento, os custos de funcionamento, a receita, a margem bruta, o prazo de retorno e o prazo de retorno se o preço cair um quarto.",
          youCanNow: "calcular a margem bruta e o prazo de retorno de uma cultura protegida e testá-los com uma queda do preço.",
          quickCheck: [
            { objective: "O5", q: "O investimento é 300,000 e a margem bruta é 100,000 por ano. Qual é o prazo de retorno?", options: ["1 ano", "30 anos", "3 anos", "100 anos"], answer: 2, why: "300,000 / 100,000 = 3 anos." },
            { objective: "O5", q: "O seu prazo de retorno é de 6 anos, mas a cobertura dura cerca de 4. O que isto lhe diz?", options: ["O plano não se paga a tempo; mude o plano ou não invista ainda", "Está bem; peça mais emprestado", "O prazo de retorno não importa", "Compre uma segunda estufa"], answer: 0, why: "Se a cobertura se gastar antes do retorno, perde dinheiro, a não ser que o plano mude." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir como um negócio",
        questions: [
          { objective: "O3", q: "O que é a fertirrega?", options: ["Pulverizar pesticida com uma mangueira", "Queimar restos de plantas", "Cobrir uma estufa com rede", "Dar adubo dissolvido na água da rega gota a gota"], answer: 3, why: "A fertirrega alimenta as plantas pelas linhas gota a gota." },
          { objective: "O3", q: "Um medidor de EC diz-lhe:", options: ["A temperatura do ar", "Quanto adubo dissolvido há na água", "O preço do tomate", "Quantos insetos há numa placa"], answer: 1, why: "A EC mede os sais dissolvidos, o que mostra a força do adubo." },
          { objective: "O4", q: "Que praga é um risco especial para o tomate de estufa?", options: ["Tuta absoluta", "Gafanhotos", "Ratos no celeiro", "Carraças do gado"], answer: 0, why: "A Tuta absoluta ataca as folhas, os caules e os frutos do tomate e multiplica-se depressa debaixo de cobertura." },
          { objective: "O4", q: "As placas adesivas azuis numa estufa apanham sobretudo:", options: ["Moscas-brancas", "Ácaros", "Tripes", "Nemátodes"], answer: 2, why: "Os tripes são atraídos pelo azul; as moscas-brancas e os afídeos pelo amarelo." },
          { objective: "O5", q: "A margem bruta é:", options: ["A receita menos os custos de funcionamento", "O preço da estrutura", "O número de plantas", "A receita mais o investimento"], answer: 0, why: "A margem bruta mostra o que fica das vendas depois dos custos de funcionamento." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Estufas e Cultivo Protegido para Culturas de Alto Valor",
    questions: [
      { objective: "O1", q: "Cultivo protegido quer dizer:", options: ["Cultivar só à noite", "Produzir culturas debaixo de uma cobertura, como uma estufa, uma rede de sombra ou um túnel", "Usar um cão de guarda", "Cultivar sem água"], answer: 1, why: "A cobertura protege a cultura da chuva, do granizo e de muitos insetos." },
      { objective: "O1", q: "Que situação de comprador apoia melhor uma estufa?", options: ["\"Hei de vender no mercado de alguma forma\"", "Ainda não há comprador", "Um vizinho talvez compre um pouco", "Um hotel aceita levar uma quantidade fixa todas as semanas"], answer: 3, why: "Um comprador semanal estável é uma das cinco condições." },
      { objective: "O1", q: "Uma revisão de 2017 sobre o cultivo protegido na África subsariana concluiu que:", options: ["Não serve para todos os climas e continua a precisar de outros controlos de pragas", "Acaba com todas as pragas", "Não precisa de competências", "Paga-se sempre numa só época"], answer: 0, why: "A revisão encontrou limites de clima e concluiu que as competências, o apoio e o financiamento são obstáculos." },
      { objective: "O1", q: "Qual é uma condição de capital?", options: ["Ter um trator", "Ter uma família grande", "Dinheiro para a estrutura, a primeira cultura e os custos sem tocar no dinheiro da comida", "Uma estufa de cor viva"], answer: 2, why: "Precisa de dinheiro para montar e para os custos sem pôr a sua família em risco." },
      { objective: "O2", q: "Porque comparar orçamentos linha a linha?", options: ["Para ver o que cada um inclui e deixa de fora", "Para escolher o orçamento mais comprido", "Porque os vendedores gostam", "Não serve para nada"], answer: 0, why: "Um orçamento mais barato pode deixar de fora o gota a gota, a formação ou a instalação." },
      { objective: "O2", q: "Qual é um sinal de alerta de um vendedor de estufas?", options: ["Uma garantia escrita", "Agricultores de referência que pode visitar", "Uma lista clara do que está incluído", "Uma produção garantida e pressão para pagar hoje"], answer: 3, why: "Garantias e pressão para pagar depressa são sinais de quem promete demais." },
      { objective: "O2", q: "Que opção é a forma mais barata de começar e aprender?", options: ["Uma grande estufa de aço", "Túneis altos ou baixos", "Uma estufa de vidro", "Uma câmara frigorífica"], answer: 1, why: "Os túneis custam menos e deixam aprender antes de um investimento maior." },
      { objective: "O2", q: "O que deve ter por escrito antes de pagar?", options: ["Só o número de telefone do vendedor", "Nada; a confiança chega", "A garantia, a data de entrega e tudo o que está incluído", "Uma fotografia do vendedor"], answer: 2, why: "As condições escritas protegem você se alguma coisa correr mal." },
      { objective: "O3", q: "Muitas variedades de pepino de estufa:", options: ["Dão fruto sem abelhas", "Precisam de abelhas lá dentro", "Só crescem no inverno", "São plantadas por estacas"], answer: 0, why: "Muitos pepinos de estufa foram criados para dar fruto sem polinização." },
      { objective: "O3", q: "Qual é a melhor altura para transplantar as mudas?", options: ["Ao meio-dia, com sol forte", "Durante uma chuva forte lá fora", "Antes de as mudas terem raízes", "Ao fim da tarde, quando está fresco, e regá-las logo"], answer: 3, why: "As tardes frescas reduzem o choque da transplantação." },
      { objective: "O3", q: "Que adubos se usam na fertirrega?", options: ["Qualquer adubo granulado", "Adubos solúveis em água feitos para fertirrega", "Estrume fresco", "Cal"], answer: 1, why: "Só os adubos totalmente solúveis passam pelas linhas gota a gota sem as entupir." },
      { objective: "O4", q: "O ar quente, parado e húmido debaixo de cobertura favorece sobretudo:", options: ["Doenças de fungos como o míldio e o bolor cinzento", "Uma polinização mais rápida", "Menos pragas", "Custos mais baixos"], answer: 0, why: "A humidade e as folhas molhadas ajudam as doenças de fungos a espalhar-se." },
      { objective: "O4", q: "Porque é que as pragas que entram numa estufa se podem multiplicar depressa?", options: ["O plástico alimenta-as", "São sempre maiores", "As estufas atraem a chuva", "Lá dentro não há chuva nem muitos inimigos naturais para as travar"], answer: 3, why: "Debaixo de cobertura, há menos travões naturais às pragas." },
      { objective: "O4", q: "Qual é uma boa regra de higiene?", options: ["Deixar entrar livremente visitas de outras machambas", "Deixar os frutos caídos no chão", "Usar um pedilúvio e manter sempre fechada uma das portas duplas", "Deixar buracos na rede para o ar"], answer: 2, why: "Os pedilúvios e as portas duplas travam as pragas e as doenças." },
      { objective: "O4", q: "Se for preciso um pesticida numa estufa no Quénia, ele tem de ser:", options: ["Registado no PCPB e usado como diz o rótulo, com equipamento de proteção", "Qualquer produto que o vizinho tenha", "Misturado mais forte por ser num espaço fechado", "Pulverizado logo antes da colheita"], answer: 0, why: "Só os produtos registados, usados como diz o rótulo, são legais e seguros." },
      { objective: "O5", q: "Qual é um custo de investimento?", options: ["As mudas", "A mão de obra da colheita", "A estrutura da estufa e o sistema gota a gota", "O transporte para o mercado"], answer: 2, why: "O investimento paga-se uma só vez para montar; os outros são custos de funcionamento." },
      { objective: "O5", q: "Investimento 500,000; margem bruta 125,000 por ano. Qual é o prazo de retorno?", options: ["2 anos", "6 anos", "10 anos", "4 anos"], answer: 3, why: "500,000 / 125,000 = 4 anos." },
      { objective: "O5", q: "Receita 200,000 e custos de funcionamento 120,000. Qual é a margem bruta?", options: ["320,000", "80,000", "120,000", "200,000"], answer: 1, why: "200,000 - 120,000 = 80,000." },
      { objective: "O5", q: "Porque testar o que acontece se o preço cair um quarto?", options: ["Porque os preços das hortícolas mudam e precisa de saber se ainda se paga", "Para os números parecerem melhores", "Porque os preços nunca mudam", "Porque o vendedor exige"], answer: 0, why: "Um plano que só funciona com o melhor preço é arriscado." },
      { objective: "O5", q: "Que mudança pode tornar mais forte um plano de negócio fraco?", options: ["Pedir mais emprestado para comprar uma estufa maior", "Ignorar o prazo de retorno", "Escolher uma cultura sem comprador", "Um contrato com um comprador, uma estrutura mais pequena ou dois ciclos por ano"], answer: 3, why: "Menos investimento, preços mais estáveis ou mais ciclos aumentam a margem ou encurtam o prazo de retorno." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 2, 5, 6, 9, 10, 11, 13, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano de negócio e verifique-a outra vez com um agrónomo ou um conselheiro de confiança antes de investir.",
    criteria: [
      { name: "Convém-me?", objective: "O1", notYet: "Faltam as cinco condições ou estão respondidas sem razões.", meets: "Água, mercado, competências, capital e clima têm cada um um sim ou não com uma razão, e está escrita uma decisão clara.", exceeds: "Uma condição que falta tem um plano para a resolver, como um comprador com nome ou uma análise da água." },
      { name: "Estrutura e verificação dos vendedores", objective: "O2", notYet: "Só um orçamento, ou as promessas de um vendedor aceites sem verificar.", meets: "Pelo menos três orçamentos comparados linha a linha, com referências pedidas e a garantia e o conteúdo por escrito.", exceeds: "Foram visitados dois agricultores de referência e os seus resultados reais estão anotados." },
      { name: "Plano da cultura e da fertirrega", objective: "O3", notYet: "Não há calendário da cultura, ou o plano de adubação é um palpite.", meets: "Cultura e variedade escolhidas de acordo com o que o comprador precisa, com datas de viveiro, transplantação e colheita, e um plano de adubação de um agrónomo ou de uma análise, com verificações diárias do gota a gota.", exceeds: "O plano inclui metas de EC e de pH definidas pelo agrónomo e uma folha de registo diário." },
      { name: "Rotina de clima, pragas e higiene", objective: "O4", notYet: "Não há rotina, ou as pragas são tratadas só com pulverizações.", meets: "Uma rotina diária e semanal para as janelas, a observação, as armadilhas, a poda, os restos e as regras de entrada, usando só produtos registados como diz o rótulo.", exceeds: "A rotina está afixada na porta e foi seguida e registada durante pelo menos duas semanas." },
      { name: "Números e prazo de retorno", objective: "O5", notYet: "Não há números, ou a margem bruta ou o prazo de retorno estão errados.", meets: "O investimento, os custos de funcionamento, a receita, a margem bruta e o prazo de retorno estão certos, comparados com a vida da cobertura, e uma queda de um quarto no preço foi testada.", exceeds: "Também testa uma produção mais baixa e uma cultura perdida, e faz a lista das mudanças que tornariam o plano mais forte." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que comparam pelo menos três orçamentos e visitam agricultores de referência antes de comprar uma estrutura (inquérito de seguimento)",
      "Alunos que decidem não investir ainda, ou começar mais pequeno, porque o seu plano de negócio não se pagava (um bom resultado, não um fracasso)",
      "Alunos com uma estrutura que dizem seguir uma rotina semanal e perder menos culturas por pragas ou doenças depois de um ciclo",
      "Alunos que comunicam a sua margem bruta real por ciclo comparada com o seu plano de negócio"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com calculadora, ou papel, caneta e uma calculadora simples",
      "Orçamentos escritos de vendedores locais de estufas, redes de sombra ou túneis (os alunos recolhem-nos durante o curso)",
      "Os contactos de um agrónomo ou extensionista e de um comprador com quem o aluno possa falar",
      "Opcional: uma visita a uma estufa em funcionamento, um termómetro, placas adesivas e um medidor de EC para mostrar ao grupo",
      "Cerca de 60 a 90 minutos no total para as lições, as verificações e os questionários, mais tempo para recolher orçamentos e falar com compradores"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois, se puderem, visitem uma estufa ou rede de sombra em funcionamento e perguntem ao dono pelos custos e problemas reais.",
      "Lembre aos alunos que todos os valores em dinheiro do curso são exemplos inventados; têm de usar os seus próprios orçamentos e os preços dos compradores.",
      "Não recomende nenhum vendedor de estufas, produto ou receita de adubo; ensine os alunos a comparar e a verificar.",
      "Trate \"ainda não\" ou \"começar mais pequeno\" como um bom resultado se os números não funcionarem; isso livra as famílias de dívidas.",
      "Nunca recomende um produto ou dose de pesticida; mostre aos alunos como consultar a lista do regulador e ler um rótulo.",
      "Avalie cada plano de negócio com a grelha de avaliação e verifique cada cálculo com o aluno antes de ele falar com um credor ou um vendedor."
    ]
  }
};
