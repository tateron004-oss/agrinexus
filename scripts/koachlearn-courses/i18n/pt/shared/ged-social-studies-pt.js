"use strict";

// Koach Learn course (Portuguese translation of shared/ged-social-studies.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: US names (GED, HiSET, Congress, Supreme Court, Bill of Rights) are kept and explained. Test facts as in the English (checked 30 October 2026 on ged.com and usa.gov).

const GED_SUBJECTS = { name: "GED Testing Service: disciplinas do teste (tempo, tipos de pergunta, calculadora)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SS = { name: "GED Testing Service: teste de Estudos Sociais", url: "https://ged.com/about_test/test_subjects/social_studies/" };
const GED_SCORES = { name: "GED Testing Service: pontuações", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: testes de amostra gratuitos (inglês e espanhol)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, o teste de prática oficial", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, outro teste de equivalência ao ensino secundário (site oficial)", url: "https://hiset.org/" };
const USA_BRANCHES = { name: "USAGov: Poderes do governo dos EUA", url: "https://www.usa.gov/branches-of-government" };
const ARCHIVES_CONST = { name: "National Archives: A Constituição dos Estados Unidos (texto em inglês)", url: "https://www.archives.gov/founding-docs/constitution-transcript" };
const ARCHIVES_BOR = { name: "National Archives: A Carta de Direitos, Bill of Rights (texto em inglês)", url: "https://www.archives.gov/founding-docs/bill-of-rights-transcript" };

module.exports = {
  id: "ged-social-studies-pt",
  lang: "pt",
  translationOf: "ged-social-studies",
  category: "Workforce Development",
  name: "Preparação para o Teste GED: Estudos Sociais",
  skills: "Ler fontes primárias e secundárias, Distinguir factos de opiniões, Explicar como funciona o governo dos EUA, Encontrar causa e efeito, Ler mapas, tabelas e gráficos, Fazer um plano de estudo",
  outcome: "ler um texto de estudos sociais, um documento histórico, um mapa ou um gráfico e responder a perguntas ao estilo do GED sobre ele: a ideia principal, o ponto de vista, facto ou opinião, causa e efeito, como funciona o governo dos EUA e o que mostram os dados.",
  about: [
    "Este curso é para adultos que se preparam para o teste de Estudos Sociais do GED: quem procura trabalho, pessoas que voltam para casa depois da prisão, veteranos, jovens adultos, imigrantes e quem volta a estudar. O site ged.com diz que não é um teste de memorização. Ele avalia como você lê, raciocina e usa gráficos sobre governo, história e dinheiro.",
    "O curso prepara você para o teste. Não lhe dá o diploma do GED. Quem organiza o teste é o GED Testing Service, e o seu estado define as regras para o fazer. Alguns estados usam outro teste chamado HiSET. Consulte o ged.com e o serviço de educação de adultos do seu estado para ver as regras, os preços e os locais de teste atuais.",
    "Cada lição ensina uma habilidade com exemplos resolvidos, uma prática \"Experimente agora\" com as respostas explicadas e uma pequena verificação de duas perguntas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final.",
    "A tarefa final é uma ficha de análise de fonte que você preenche sobre um documento fundador verdadeiro do National Archives (o Arquivo Nacional dos EUA), mais o seu próprio plano de estudo para o GED, com datas."
  ],
  finalTask: "Preencha uma ficha de análise de fonte de uma página sobre o Preâmbulo da Constituição dos EUA (ou outro documento fundador em archives.gov): quem o escreveu e quando, se é fonte primária ou secundária, a ideia principal numa frase, o ponto de vista, um facto e uma opinião ou objetivo, uma causa e um efeito ligados a ele, e a que poder do governo se refere e porquê. Acrescente no fundo o seu plano de estudo para o GED, com datas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que se preparam para o teste de Estudos Sociais do GED: quem procura trabalho, pessoas que voltam para casa depois da prisão, veteranos, jovens adultos que deixaram a escola, imigrantes (alguns também a preparar-se para a cidadania) e adultos que voltam a estudar depois de muitos anos.",
    startingPoint: "Sabem ler textos do dia a dia e tabelas simples. Muitos lembram-se de pouca história ou educação cívica dos EUA da escola e pensam que o teste é decorar datas. Alguns ainda estão a aprender inglês.",
    gap: "O teste pede aos alunos que leiam fontes, identifiquem o ponto de vista e as provas, expliquem como funciona o governo e leiam gráficos e mapas. Estas habilidades também ajudam as pessoas a acompanhar as notícias, votar quando têm esse direito, conhecer os seus direitos e tomar decisões sobre dinheiro.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; os documentos antigos são explicados linha a linha",
      "Aparelhos: um telefone, um computador da biblioteca ou papel e caneta",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho, as consultas e a família",
      "Os temas políticos são ensinados de forma neutra: como as coisas funcionam e como avaliar provas, não que lado escolher",
      "As regras do teste, os preços e o teste que cada estado usa (GED ou HiSET) mudam; os alunos consultam o ged.com e o seu estado"
    ],
    prerequisites: "Nenhum. O curso de linguagem do GED ajuda a ler para encontrar a ideia principal e a avaliar provas."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o site oficial do GED", action: "enumerar as partes, os tipos de pergunta, o tempo e as ferramentas do teste de Estudos Sociais do GED e escrever um plano de estudo com datas", standard: "com as três áreas de habilidades indicadas e pelo menos uma data de estudo por semana até ao teste" },
    { id: "O2", condition: "Com uma fonte primária ou secundária", action: "identificar a ideia principal, o ponto de vista do autor e que afirmações são factos e quais são opiniões", standard: "apontando as palavras que mostram cada resposta" },
    { id: "O3", condition: "Com uma pequena situação de educação cívica", action: "explicar que poder do governo atua e como se aplicam os pesos e contrapesos ou um direito da Constituição", standard: "acertando pelo menos 4 de 5" },
    { id: "O4", condition: "Com um acontecimento histórico ou um argumento", action: "identificar uma causa e um efeito e a prova que apoia uma inferência", standard: "indicando a prova tirada da fonte" },
    { id: "O5", condition: "Com um mapa, uma tabela ou um gráfico sobre história, economia ou geografia", action: "ler valores, descrever uma tendência e escolher a conclusão que os dados apoiam", standard: "sem acrescentar factos que não aparecem" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ler fontes e como funciona o governo",
      lessons: [
        {
          title: "Como funciona o teste de Estudos Sociais do GED",
          objectives: ["O1"],
          minutes: 5,
          goal: "Enumerar as partes e as ferramentas do teste de Estudos Sociais do GED e escrever um plano de estudo com datas.",
          text: [
            "O GED tem quatro testes: Matemática, Raciocínio através da Linguagem (Reasoning Through Language Arts), Ciências e Estudos Sociais. Pode fazê-los um de cada vez. Quem faz o teste é o GED Testing Service. Alguns estados usam outro teste de equivalência ao ensino secundário, o HiSET, por isso verifique que teste o seu estado usa.",
            "No ged.com, o teste de Estudos Sociais aparece com 70 minutos, sem intervalo. Cobre três áreas de habilidades: ler para compreender em estudos sociais, analisar acontecimentos e argumentos históricos, e usar números e gráficos em estudos sociais. As perguntas são de escolha múltipla, preencher o espaço, arrastar e largar, selecionar uma área e lista suspensa.",
            "Tem uma calculadora no ecrã e uma folha de referência da calculadora, e o ged.com diz que pode levar a sua própria calculadora TI-30XS a um centro de teste. O ged.com diz que não é um teste de memorização: você usa a informação dada para tirar conclusões.",
            "O ged.com indica uma pontuação mínima de 145 em cada disciplina. Os tempos e as regras podem mudar, por isso consulte o ged.com antes de marcar. O ged.com tem testes de amostra gratuitos e um teste de prática oficial, o GED Ready."
          ],
          steps: ["Vá ao ged.com e leia a página do teste de Estudos Sociais.", "Anote o tempo, as três áreas de habilidades e as ferramentas que recebe.", "Faça o teste de amostra gratuito de Estudos Sociais para ver em que ponto está.", "Escolha uma semana para fazer o teste.", "Escreva pelo menos uma data de estudo por semana, com a habilidade que vai praticar."],
          words: [["GED", "um teste de equivalência ao ensino secundário; quem passa nas quatro disciplinas recebe um diploma que muitos empregadores e faculdades aceitam como o do ensino secundário."], ["HiSET", "outro teste de equivalência ao ensino secundário que alguns estados usam."], ["Educação cívica", "o estudo do governo e dos direitos e deveres dos cidadãos."], ["Economia", "o estudo de como as pessoas fazem, compram, vendem e usam bens e dinheiro."]],
          slides: [
            { title: "O teste de Estudos Sociais (consulte o ged.com)", bullets: ["70 minutos, sem intervalo", "Escolha múltipla e outros tipos de pergunta", "Pontuação mínima indicada: 145"] },
            { title: "Três áreas de habilidades", bullets: ["Ler para compreender em estudos sociais", "Analisar acontecimentos e argumentos históricos", "Usar números e gráficos"] },
            { title: "Não é um teste de memória", bullets: ["Use a informação dada", "Tire conclusões a partir dela", "Calculadora no ecrã e folha de referência"] },
            { title: "Faça um plano", bullets: ["Faça primeiro o teste de amostra gratuito", "Escolha uma semana para o teste", "Estude um pouco, na maioria dos dias da semana"] }
          ],
          sources: [GED_SUBJECTS, GED_SS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Abra o ged.com e faça o teste de amostra gratuito de Estudos Sociais (ou leia a página de Estudos Sociais, se não puder fazê-lo agora). Escreva o seu plano de estudo: a semana em que quer fazer o teste e uma data por semana com a habilidade que vai praticar: ler fontes, governo, história ou gráficos. Guarde-o para a tarefa final.",
          youCanNow: "dizer as partes e as ferramentas do teste de Estudos Sociais do GED e seguir um plano de estudo com datas.",
          quickCheck: [
            { objective: "O1", q: "O que diz o ged.com sobre o teste de Estudos Sociais?", options: ["É sobretudo decorar datas", "Não é um teste de memorização", "Não tem gráficos", "É só sobre outros países"], answer: 1, why: "O ged.com diz que não é um teste de memorização; você raciocina com a informação dada." },
            { objective: "O1", q: "Qual é uma das três áreas de habilidades do teste?", options: ["Soletrar as capitais dos estados", "Desenhar bandeiras", "Usar números e gráficos em estudos sociais", "Velocidade a escrever no teclado"], answer: 2, why: "O ged.com indica ler para compreender, acontecimentos e argumentos históricos, e números e gráficos." }
          ]
        },
        {
          title: "Fontes, ponto de vista, facto e opinião",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identificar a ideia principal, o ponto de vista, os factos e as opiniões numa fonte.",
          text: [
            "Uma fonte primária foi feita por alguém que estava lá na altura: uma carta, um discurso, uma lei, uma fotografia, um diário. Uma fonte secundária foi feita mais tarde por alguém que estuda o acontecimento, como um manual escolar ou uma análise de notícias. As duas são úteis; as fontes primárias mostram como as pessoas viam as coisas naquela época.",
            "O ponto de vista é a forma como o autor vê o tema, marcada por quem ele é e pelo que quer. Pergunte: quem escreveu isto, quando e porquê? Em 1900, o dono de uma fábrica e um operário da fábrica podiam descrever a mesma greve de formas muito diferentes.",
            "Um facto pode ser verificado e provado verdadeiro ou falso: \"A 19.ª Emenda foi ratificada em 1920.\" Uma opinião é uma crença ou um sentimento: \"Foi a mudança mais importante da nossa história.\" Palavras como melhor, pior, deve, importante e eu acho muitas vezes mostram uma opinião.",
            "Exemplo resolvido. Um anúncio de jornal de 1910: \"As nossas máquinas novas fazem 500 camisas por dia. Todas as famílias modernas devem comprar as nossas camisas!\" Facto: 500 camisas por dia (pode ser verificado). Opinião: todas as famílias devem comprá-las. Ponto de vista: uma empresa a vender o seu produto."
          ],
          steps: ["Pergunte quem fez a fonte, quando e porquê.", "Decida: primária (feita na altura) ou secundária (feita mais tarde).", "Diga a ideia principal numa frase.", "Marque cada afirmação como facto (pode ser verificado) ou opinião (crença ou juízo).", "Descreva o ponto de vista do autor e o que ele quer que o leitor faça ou pense."],
          words: [["Fonte primária", "algo feito na altura de um acontecimento por alguém que estava lá."], ["Fonte secundária", "algo feito mais tarde por alguém que estuda o acontecimento."], ["Ponto de vista", "a forma como um autor vê um tema, marcada por quem ele é e pelo que quer."], ["Facto", "uma afirmação que pode ser verificada e provada."], ["Opinião", "uma crença, um sentimento ou um juízo."]],
          slides: [
            { title: "Primária ou secundária?", bullets: ["Primária: feita na altura, por alguém que estava lá", "Secundária: feita mais tarde, por alguém que estuda o tema"] },
            { title: "Ponto de vista", bullets: ["Quem escreveu?", "Quando?", "Porquê, e o que quer?"] },
            { title: "Facto ou opinião?", bullets: ["Facto: pode ser verificado", "Opinião: uma crença ou um juízo", "Palavras de sinal: melhor, pior, deve, eu acho"] }
          ],
          tryIt: "Prática: uma carta de um agricultor, de 1935: \"As tempestades de poeira cobriram os nossos campos três vezes nesta primavera. O governo deve ajudar agricultores como nós antes que seja tarde demais.\" 1) Primária ou secundária? 2) Um facto. 3) Uma opinião. 4) Ponto de vista? Respostas: 1) Primária: escrita na altura por alguém que estava lá. 2) As tempestades de poeira cobriram os campos três vezes naquela primavera. 3) O governo deve ajudar os agricultores. 4) Um agricultor em dificuldades a pedir ajuda.",
          youCanNow: "distinguir fontes primárias de secundárias, descrever o ponto de vista e separar factos de opiniões.",
          quickCheck: [
            { objective: "O2", q: "Qual é uma fonte primária sobre a Segunda Guerra Mundial?", options: ["Um capítulo de um manual escolar de 2020", "Um resumo num site escrito no ano passado", "Um filme feito em 2015", "Uma carta que um soldado escreveu para casa em 1944"], answer: 3, why: "Foi feita na altura por alguém que estava lá." },
            { objective: "O2", q: "Que afirmação é uma opinião?", options: ["O Congresso aprovou a lei em 1964.", "A cidade tem 40,000 habitantes.", "Foi a melhor lei que o Congresso alguma vez aprovou.", "A ponte abriu em 1937."], answer: 2, why: "\"Melhor\" é um juízo que não pode ser provado." }
          ]
        },
        {
          title: "Como funciona o governo dos EUA",
          objectives: ["O3"],
          minutes: 6,
          goal: "Explicar que poder do governo atua numa situação e como se aplicam os pesos e contrapesos.",
          text: [
            "A Constituição dos EUA divide o governo federal em três poderes, para que nenhuma pessoa ou grupo tenha poder demais. O poder legislativo é o Congresso (o Senado e a Câmara dos Representantes); faz as leis. O poder executivo é o presidente, o vice-presidente e o gabinete; aplica as leis. O poder judicial é o Supremo Tribunal (Supreme Court) e os outros tribunais federais; interpretam as leis e decidem se estão contra a Constituição.",
            "Os pesos e contrapesos deixam cada poder limitar os outros. O presidente pode vetar uma lei aprovada pelo Congresso. O Senado confirma ou rejeita as pessoas que o presidente escolhe, como os juízes federais. O Supremo Tribunal pode anular uma lei que considere inconstitucional. Em casos extremos, o Congresso pode afastar um presidente do cargo.",
            "A Carta de Direitos (Bill of Rights) são as dez primeiras emendas à Constituição. Protege direitos como a liberdade de expressão, de religião, de imprensa e de reunião (Primeira Emenda), e direitos das pessoas acusadas de crimes, como um julgamento justo e rápido. O poder também é partilhado entre o governo federal e os estados; a isto chama-se federalismo.",
            "Exemplo resolvido. \"O Congresso aprova uma lei. O presidente veta-a.\" Que controlo é este? O executivo a controlar o poder legislativo."
          ],
          steps: ["Encontre quem atua: o Congresso, o presidente ou um tribunal.", "Diga o poder: legislativo, executivo ou judicial.", "Pergunte que função está a ser usada: fazer, aplicar ou interpretar leis.", "Se um poder limita outro, diga qual é o controlo.", "Se estão em causa os direitos de uma pessoa, procure o direito na Carta de Direitos."],
          words: [["Constituição", "a lei mais alta dos Estados Unidos; organiza o governo."], ["Poder legislativo", "o Congresso; faz as leis."], ["Poder executivo", "o presidente, o vice-presidente e o gabinete; aplica as leis."], ["Poder judicial", "os tribunais; interpretam as leis."], ["Veto", "quando o presidente rejeita uma lei aprovada pelo Congresso."], ["Emenda", "uma mudança ou um acrescento à Constituição."]],
          slides: [
            { title: "Três poderes", bullets: ["Legislativo (Congresso): faz as leis", "Executivo (presidente): aplica as leis", "Judicial (tribunais): interpreta as leis"] },
            { title: "Pesos e contrapesos", bullets: ["O presidente pode vetar leis", "O Senado confirma ou rejeita as pessoas escolhidas", "O Supremo Tribunal pode anular leis inconstitucionais"] },
            { title: "A Carta de Direitos (Bill of Rights)", bullets: ["As dez primeiras emendas", "Expressão, religião, imprensa, reunião", "Direitos das pessoas acusadas de crimes"] },
            { title: "Federalismo", bullets: ["Poder partilhado entre o país e os estados"] }
          ],
          sources: [USA_BRANCHES, ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Prática: diga o poder ou o direito. 1) O Senado vota a pessoa que o presidente escolheu para juiz federal. 2) O Supremo Tribunal decide que uma lei viola a Constituição. 3) Um jornal publica uma notícia a criticar o presidente da câmara. 4) O presidente assina uma lei. Respostas: 1) O legislativo a controlar o executivo. 2) O judicial a controlar o legislativo. 3) Liberdade de imprensa, Primeira Emenda. 4) Executivo (a cumprir a sua parte na criação de uma lei).",
          youCanNow: "dizer os três poderes, explicar os pesos e contrapesos numa situação e ligar uma situação à Carta de Direitos.",
          quickCheck: [
            { objective: "O3", q: "Que poder faz as leis federais?", options: ["O poder legislativo (Congresso)", "O poder judicial", "O poder executivo", "Só os estados"], answer: 0, why: "O Congresso, o poder legislativo, faz as leis." },
            { objective: "O3", q: "O Supremo Tribunal decide que uma lei é inconstitucional. Isto é um exemplo de quê?", options: ["Federalismo", "Um veto", "Um controlo do poder judicial sobre o poder legislativo", "Uma emenda"], answer: 2, why: "Os tribunais podem anular leis que vão contra a Constituição." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ler fontes e como funciona o governo",
        questions: [
          { objective: "O1", q: "Onde deve consultar os tempos, os preços e as regras atuais do teste GED?", options: ["Numa publicação nas redes sociais", "No ged.com e no serviço de educação de adultos do seu estado", "Num manual antigo", "Na memória de um amigo"], answer: 1, why: "As regras e os preços mudam; as fontes oficiais têm os atuais." },
          { objective: "O2", q: "Qual é uma fonte secundária?", options: ["Um discurso feito em 1963", "Uma fotografia tirada durante uma tempestade de poeira nos anos 1930", "Uma carta de 1776", "Um manual de história escrito em 2015"], answer: 3, why: "Um manual é feito mais tarde por pessoas que estudam os acontecimentos." },
          { objective: "O2", q: "Um anúncio de 1912 de uma empresa diz que os seus comboios são \"os melhores do país\". O que é isto?", options: ["Uma opinião do ponto de vista de uma empresa", "Um facto", "Uma lei", "Uma fonte secundária"], answer: 0, why: "\"Os melhores\" é um juízo, e a empresa quer vender bilhetes." },
          { objective: "O3", q: "O presidente veta uma lei. Que poder está a ser controlado?", options: ["O poder judicial", "O poder executivo", "O poder legislativo", "Os estados"], answer: 2, why: "O veto deixa o executivo controlar o Congresso, o poder legislativo." },
          { objective: "O3", q: "O que é a Carta de Direitos (Bill of Rights)?", options: ["O orçamento do presidente", "As dez primeiras emendas à Constituição", "Uma lista de leis estaduais", "Uma decisão do Supremo Tribunal"], answer: 1, why: "A Carta de Direitos são as dez primeiras emendas." }
        ]
      }
    },
    {
      name: "Capítulo 2: História, economia e gráficos",
      lessons: [
        {
          title: "Causa, efeito e provas na história",
          objectives: ["O4"],
          minutes: 5,
          goal: "Identificar uma causa e um efeito num acontecimento histórico e a prova que apoia uma inferência.",
          text: [
            "As perguntas de história muitas vezes perguntam porque é que algo aconteceu (a causa) e o que aconteceu por causa disso (o efeito). Palavras de sinal: porque, por isso, como resultado, levou a, portanto, devido a.",
            "Exemplo resolvido. \"No final dos anos 1800, as fábricas nas cidades ofereciam muitos empregos novos. Como resultado, milhões de pessoas mudaram-se do campo para as cidades. A população das cidades cresceu depressa e as casas apinhadas tornaram-se um problema.\" Causa: empregos nas fábricas das cidades. Efeito: as pessoas mudaram-se para as cidades. Um efeito mais tarde: casas apinhadas. Uma causa pode levar a uma cadeia de efeitos.",
            "Uma inferência é uma conclusão que as provas apoiam. As perguntas do GED podem perguntar que afirmação de uma fonte apoia uma inferência. Escolha a afirmação que dá a prova, não apenas uma que fala do mesmo tema.",
            "Cuidado: duas coisas acontecerem ao mesmo tempo nem sempre quer dizer que uma causou a outra. Procure que a fonte diga ou mostre a ligação."
          ],
          steps: ["Encontre o acontecimento de que a pergunta fala.", "Procure palavras de sinal: porque, por isso, como resultado, levou a.", "Diga a causa (porquê) e o efeito (o que aconteceu a seguir).", "Para uma inferência, escolha a afirmação que a prova.", "Verifique se a fonte liga mesmo as duas coisas; não suponha."],
          words: [["Causa", "porque é que algo aconteceu."], ["Efeito", "o que aconteceu por causa da causa."], ["Inferência", "uma conclusão apoiada por provas."], ["Industrialização", "o crescimento das fábricas e das máquinas que fazem produtos."]],
          slides: [
            { title: "Causa e efeito", bullets: ["Causa: porque aconteceu", "Efeito: o que aconteceu a seguir", "Palavras de sinal: porque, como resultado, levou a"] },
            { title: "Uma cadeia de efeitos", bullets: ["Empregos nas fábricas das cidades", "As pessoas mudaram-se do campo para as cidades", "Casas apinhadas nas cidades"] },
            { title: "Provas para uma inferência", bullets: ["Escolha a afirmação que a prova", "O mesmo tema não é o mesmo que uma prova", "Ao mesmo tempo não quer dizer causado por"] }
          ],
          tryIt: "Prática: \"Nos anos 1930, o Dust Bowl (tempestades de poeira) destruiu as colheitas nas Grandes Planícies. Muitas famílias de agricultores perderam as suas terras e foram para oeste à procura de trabalho.\" 1) Causa? 2) Efeito? 3) Que afirmação apoia melhor a inferência \"o Dust Bowl mudou o lugar onde as pessoas viviam\": (a) \"O Dust Bowl destruiu as colheitas\" ou (b) \"Muitas famílias de agricultores foram para oeste\"? Respostas: 1) As tempestades de poeira destruíram as colheitas. 2) As famílias perderam as terras e foram para oeste. 3) (b): mostra pessoas a mudar de lugar.",
          youCanNow: "encontrar causas e efeitos na história e escolher a prova que apoia uma inferência.",
          quickCheck: [
            { objective: "O4", q: "\"O preço da gasolina subiu muito, por isso mais pessoas apanharam o autocarro.\" Qual é o efeito?", options: ["O preço da gasolina subiu", "Mais pessoas apanharam o autocarro", "Os autocarros ficaram mais baratos", "Os carros ficaram maiores"], answer: 1, why: "Apanhar o autocarro foi o que aconteceu porque o preço da gasolina subiu." },
            { objective: "O4", q: "Que afirmação apoia melhor a inferência de que uma nova autoestrada ajudou os negócios de uma vila?", options: ["\"A autoestrada tem quatro faixas.\"", "\"A autoestrada abriu em 1960.\"", "\"As autoestradas são feitas de betão.\"", "\"As vendas das lojas da vila duplicaram nos cinco anos depois de a autoestrada abrir.\""], answer: 3, why: "Dá provas de crescimento dos negócios ligado à autoestrada." }
          ]
        },
        {
          title: "Economia e gráficos",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ler uma tabela ou um mapa, descrever a tendência e escolher a conclusão que os dados apoiam.",
          text: [
            "A oferta é a quantidade de uma coisa que está à venda. A procura é a quantidade que as pessoas querem comprar. Quando a procura sobe e a oferta fica igual, os preços normalmente sobem. Quando a oferta sobe e a procura fica igual, os preços normalmente descem. Exemplo: depois de uma geada estragar as colheitas de laranja, a oferta de laranjas cai e os preços sobem.",
            "Gráficos: leia primeiro o título, as legendas dos eixos e as unidades. Tabela de prática (inventada): a taxa de desemprego de uma cidade era 8% em 2020, 6% em 2021, 5% em 2022 e 4% em 2023. Tendência: desce todos os anos. Conclusão apoiada: em 2023, uma parte menor das pessoas que procuravam trabalho estava sem emprego do que em 2020. Não apoiada: porque desceu, porque a tabela não o diz.",
            "Mapas: leia o título, a legenda (chave) e a rosa dos ventos. A legenda diz o que querem dizer as cores ou os símbolos. Um mapa da chuva pode usar cores mais escuras para mais chuva. Use a escala para calcular a distância.",
            "A variação em percentagem aparece muito: de 8% para 4% é uma descida de 4 pontos percentuais. Pode usar a calculadora no ecrã para as contas."
          ],
          steps: ["Leia o título, as legendas, as unidades ou a legenda do mapa.", "Encontre o valor de que a pergunta fala.", "Descreva a tendência: a subir, a descer ou sem padrão claro.", "Escolha a conclusão que fica dentro dos dados.", "Para os preços, pergunte: mudou a oferta ou a procura?"],
          words: [["Oferta", "a quantidade de um bem ou serviço que está à venda."], ["Procura", "a quantidade dele que as pessoas querem comprar."], ["Taxa de desemprego", "a parte das pessoas que procuram trabalho e não têm emprego."], ["Legenda", "a chave de um mapa ou gráfico que diz o que querem dizer as cores ou os símbolos."], ["Ponto percentual", "a diferença simples entre duas percentagens; de 8% para 4% são 4 pontos."]],
          slides: [
            { title: "Oferta e procura", bullets: ["Procura sobe, oferta igual: os preços normalmente sobem", "Oferta sobe, procura igual: os preços normalmente descem"] },
            { title: "Ler um gráfico", bullets: ["Primeiro o título, as legendas e as unidades", "Encontre o valor", "Descreva a tendência"] },
            { title: "Ler um mapa", bullets: ["Título e legenda (chave)", "Rosa dos ventos para a direção", "Escala para a distância"] },
            { title: "Fique dentro dos dados", bullets: ["Um gráfico mostra o quê, nem sempre o porquê", "Sem conclusões sobre o que não aparece"] }
          ],
          tryIt: "Prática (dados inventados): um gráfico de barras mostra a renda média mensal de uma casa numa cidade: 2019: $1,000; 2021: $1,150; 2023: $1,400. 1) A renda em 2021? 2) Tendência? 3) Quanto subiu a renda de 2019 a 2023? 4) Que conclusão é apoiada: (a) a renda subiu neste período, ou (b) a renda subiu por causa de novos empregos? Respostas: 1) $1,150. 2) A subir. 3) $400. 4) (a); o gráfico não mostra porquê.",
          youCanNow: "usar a oferta e a procura para explicar mudanças de preço, e ler gráficos e mapas para escolher uma conclusão apoiada.",
          quickCheck: [
            { objective: "O5", q: "Uma tempestade destrói muitas serrações, por isso há menos madeira à venda, mas os construtores continuam a querê-la. O que normalmente acontece ao preço da madeira?", options: ["Sobe", "Desce", "Fica igual", "A madeira fica de graça"], answer: 0, why: "A oferta caiu e a procura ficou igual, por isso os preços normalmente sobem." },
            { objective: "O5", q: "Num mapa, o que lhe diz o que quer dizer cada cor?", options: ["A rosa dos ventos", "O título", "A legenda (chave)", "A escala"], answer: 2, why: "A legenda explica as cores e os símbolos." }
          ]
        },
        {
          title: "Juntar tudo: analisar um documento fundador",
          objectives: ["O2", "O3", "O4"],
          minutes: 6,
          goal: "Preencher uma ficha de análise de fonte sobre um documento fundador.",
          text: [
            "As perguntas do GED muitas vezes dão um pequeno trecho de um documento antigo e perguntam a ideia principal, o objetivo ou como se liga ao governo de hoje. O Preâmbulo, a frase de abertura da Constituição, é bom para praticar. Leia-o no site do National Archives.",
            "O Preâmbulo começa com \"We the People of the United States\" (Nós, o Povo dos Estados Unidos) e enumera objetivos: formar uma união mais perfeita, estabelecer a justiça, garantir a tranquilidade interna (paz dentro do país), prover a defesa comum, promover o bem-estar geral (o bem de todos) e assegurar os benefícios da liberdade.",
            "Análise resolvida. Quem e quando: os delegados da Convenção Constitucional, 1787. Tipo: fonte primária. Ideia principal: o povo organiza um governo para alcançar objetivos comuns. Ponto de vista: líderes que queriam um governo nacional mais forte do que o que tinham antes. Causa e efeito: o governo anterior, com os Artigos da Confederação, era fraco, e isso levou a escrever uma nova Constituição. Poderes: o Preâmbulo apresenta toda a Constituição, que organiza os três poderes.",
            "A sua ficha não precisa de respostas perfeitas. Precisa de respostas que você consiga apoiar apontando as palavras do documento."
          ],
          steps: ["Abra o texto da Constituição em archives.gov e leia o Preâmbulo.", "Escreva quem o escreveu, quando e se é fonte primária ou secundária.", "Escreva a ideia principal numa frase e o ponto de vista.", "Escreva um facto sobre ele e um objetivo ou opinião que ele tem.", "Escreva uma causa e um efeito, e o poder ou o direito a que se liga.", "Acrescente no fundo o seu plano de estudo com datas."],
          words: [["Preâmbulo", "a frase de abertura da Constituição, que diz o seu objetivo."], ["Artigos da Confederação", "o primeiro plano de governo dos EUA, usado antes da Constituição."], ["Tranquilidade interna", "paz dentro do país."], ["Bem-estar geral", "o bem de todas as pessoas."]],
          slides: [
            { title: "O Preâmbulo", bullets: ["A frase de abertura da Constituição", "Começa com \"We the People\" (Nós, o Povo)", "Enumera os objetivos do novo governo"] },
            { title: "A sua ficha de análise", bullets: ["Quem, quando, primária ou secundária", "Ideia principal e ponto de vista", "Um facto e um objetivo ou opinião"] },
            { title: "Faça a ligação", bullets: ["Uma causa e um efeito", "O poder ou o direito a que se refere", "Aponte as palavras que o provam"] }
          ],
          sources: [ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Tarefa final: preencha a sua ficha de análise de fonte de uma página sobre o Preâmbulo (ou a Carta de Direitos) de archives.gov, seguindo os passos acima. Acrescente no fundo o seu plano de estudo para o GED com datas e depois avalie o seu trabalho com a grelha de avaliação do curso.",
          youCanNow: "analisar um documento fundador: o tipo de fonte, a ideia principal, o ponto de vista, as causas e os efeitos e as ligações ao funcionamento do governo.",
          quickCheck: [
            { objective: "O2", q: "O Preâmbulo foi escrito em 1787 pelos delegados da Convenção Constitucional. Que tipo de fonte é?", options: ["Secundária", "Uma sondagem de opinião", "Um mapa", "Primária"], answer: 3, why: "Foi feito na altura pelas pessoas que escreveram a Constituição." },
            { objective: "O4", q: "Os Artigos da Confederação criaram um governo nacional fraco. Qual foi um efeito?", options: ["Os líderes escreveram uma nova Constituição", "A Carta de Direitos foi retirada", "O Congresso foi fechado para sempre", "Os estados deixaram de existir"], answer: 0, why: "A fraqueza dos Artigos levou à Constituição de 1787." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: História, economia e gráficos",
        questions: [
          { objective: "O4", q: "\"Como a fábrica fechou, muitos trabalhadores foram embora.\" Qual é a causa?", options: ["Os trabalhadores foram embora", "A vila cresceu", "A fábrica fechou", "Abriram lojas novas"], answer: 2, why: "O fecho da fábrica é a razão por que os trabalhadores foram embora." },
          { objective: "O4", q: "Duas coisas aconteceram no mesmo ano. O que pode dizer com certeza?", options: ["Uma causou a outra", "Aconteceram ao mesmo tempo; procure na fonte uma ligação", "As duas são opiniões", "Nenhuma aconteceu"], answer: 1, why: "Acontecerem juntas não prova que uma causou a outra." },
          { objective: "O5", q: "A procura de bicicletas sobe e a oferta fica igual. O que normalmente acontece ao preço das bicicletas?", options: ["Desce", "Fica igual", "As bicicletas ficam de graça", "Sobe"], answer: 3, why: "Mais compradores para a mesma oferta normalmente faz subir os preços." },
          { objective: "O5", q: "Uma tabela mostra a população de uma vila: 2000: 10,000; 2010: 12,000; 2020: 15,000. Que conclusão é apoiada?", options: ["A população cresceu nestes anos", "A vila vai ter 50,000 pessoas em 2030", "As pessoas mudaram-se por causa das boas escolas", "A vila perdeu pessoas"], answer: 0, why: "Os números sobem em cada década; a tabela não mostra o futuro nem as razões." },
          { objective: "O3", q: "O Senado rejeita uma pessoa que o presidente escolheu para juiz federal. Que controlo é este?", options: ["O poder judicial a controlar o executivo", "O poder legislativo a controlar o executivo", "Federalismo", "Um veto"], answer: 1, why: "O Senado, parte do Congresso, confirma ou rejeita as pessoas escolhidas pelo presidente." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para o Teste GED: Estudos Sociais",
    questions: [
      { objective: "O1", q: "O que faz este curso por você?", options: ["Dá-lhe um diploma do GED", "Torna você cidadão dos EUA", "Prepara você para o teste de Estudos Sociais do GED", "Substitui o teste GED"], answer: 2, why: "Prepara você; o GED Testing Service organiza o teste e o seu estado atribui o diploma." },
      { objective: "O1", q: "Qual é outro teste de equivalência ao ensino secundário que alguns estados usam?", options: ["HiSET", "SAT", "CDL", "LSAT"], answer: 0, why: "O HiSET é outro teste de equivalência ao ensino secundário." },
      { objective: "O1", q: "Segundo o ged.com, o teste de Estudos Sociais:", options: ["É só decorar datas", "É só uma redação", "Não é um teste de memorização", "É uma entrevista oral"], answer: 2, why: "O ged.com diz que não é um teste de memorização." },
      { objective: "O2", q: "O que é uma fonte primária?", options: ["Um manual escrito no ano passado", "Algo feito na altura por alguém que estava lá", "Um resumo num site", "As notas de um professor"], answer: 1, why: "As fontes primárias vêm de pessoas da altura do acontecimento." },
      { objective: "O2", q: "Qual é um facto?", options: ["A Lei dos Direitos Civis (Civil Rights Act) foi assinada em 1964.", "Foi a melhor lei alguma vez escrita.", "Toda a gente deve adorá-la.", "Foi o dia mais emocionante da história."], answer: 0, why: "A data em que foi assinada pode ser verificada; as outras são juízos." },
      { objective: "O2", q: "Para encontrar o ponto de vista de um autor, pergunte:", options: ["Qual é o tamanho da fonte", "De que cor é o papel", "Quantas páginas tem", "Quem a escreveu, quando e porquê"], answer: 3, why: "Quem, quando e porquê marcam a forma como um autor vê um tema." },
      { objective: "O2", q: "Que palavra muitas vezes mostra uma opinião?", options: ["Ratificada", "Deve", "1920", "Congresso"], answer: 1, why: "\"Deve\" diz o que alguém acha que devia acontecer." },
      { objective: "O3", q: "Que poder aplica as leis?", options: ["Legislativo", "Judicial", "Executivo", "Nenhum"], answer: 2, why: "O presidente e o poder executivo aplicam as leis." },
      { objective: "O3", q: "O Congresso é formado por:", options: ["O Senado e a Câmara dos Representantes", "O presidente e o gabinete", "O Supremo Tribunal", "Os governadores"], answer: 0, why: "O Congresso tem duas partes: o Senado e a Câmara." },
      { objective: "O3", q: "Um grupo faz um protesto pacífico num parque. Que direito protege isto?", options: ["O direito a um julgamento rápido", "O direito de votar aos 18 anos", "O veto do presidente", "A liberdade de reunião (Primeira Emenda)"], answer: 3, why: "A Primeira Emenda protege a reunião pacífica." },
      { objective: "O3", q: "O poder partilhado entre o governo nacional e os estados chama-se:", options: ["Um veto", "Federalismo", "Um preâmbulo", "Uma opinião"], answer: 1, why: "O federalismo divide o poder entre o país e os estados." },
      { objective: "O4", q: "Que palavra de sinal mostra causa e efeito?", options: ["Como resultado", "Também", "Por exemplo", "Além disso"], answer: 0, why: "\"Como resultado\" apresenta um efeito." },
      { objective: "O4", q: "\"Os empregos nas fábricas cresceram nas cidades, por isso as pessoas saíram do campo.\" Qual é a causa?", options: ["As pessoas saíram do campo", "As quintas ficaram maiores", "Os empregos nas fábricas cresceram nas cidades", "As cidades ficaram mais pequenas"], answer: 2, why: "Os empregos nas fábricas são a razão por que as pessoas se mudaram." },
      { objective: "O4", q: "Que afirmação apoia melhor a inferência de que uma nova lei reduziu os acidentes de trabalho?", options: ["\"A lei tinha 20 páginas.\"", "\"Os registos de acidentes caíram um terço nos três anos depois de a lei começar.\"", "\"Muitas pessoas falaram sobre a lei.\"", "\"A lei tinha um nome comprido.\""], answer: 1, why: "Dá provas de menos acidentes depois da lei." },
      { objective: "O5", q: "Uma geada estraga grande parte da colheita de laranja. O que normalmente acontece ao preço das laranjas?", options: ["Desce", "Fica igual", "As laranjas ficam de graça", "Sobe"], answer: 3, why: "Menos oferta com a mesma procura normalmente faz subir os preços." },
      { objective: "O5", q: "O que deve ler primeiro num gráfico?", options: ["O título, as legendas e as unidades", "Só as opções de resposta", "O número mais pequeno", "Só as cores"], answer: 0, why: "Dizem-lhe o que os números querem dizer." },
      { objective: "O5", q: "O desemprego era 8% em 2020 e 4% em 2023. Quanto desceu?", options: ["2 pontos percentuais", "12 pontos percentuais", "4 pontos percentuais", "8 pontos percentuais"], answer: 2, why: "8% - 4% = 4 pontos percentuais." },
      { objective: "O5", q: "Um gráfico mostra a renda a subir todos os anos. Que conclusão vai além dos dados?", options: ["A renda subiu nestes anos", "A renda vai duplicar no próximo ano", "A renda era mais alta no fim do que no início", "O gráfico mostra vários anos"], answer: 1, why: "O gráfico não mostra o próximo ano." },
      { objective: "O2", q: "O Preâmbulo começa com \"We the People\" (Nós, o Povo). O que mostra isto sobre o ponto de vista do governo?", options: ["O poder vem do povo", "O poder vem de um rei", "Só os estados têm poder", "Foram os tribunais que o escreveram"], answer: 0, why: "\"We the People\" mostra que o governo é organizado pelo povo e para o povo." },
      { objective: "O4", q: "Porque é que os líderes escreveram a Constituição em 1787?", options: ["O país não tinha estados", "O rei pediu-lhes", "A Carta de Direitos tinha falhado", "O governo com os Artigos da Confederação era fraco demais"], answer: 3, why: "Os Artigos da Confederação, fracos, levaram a um novo plano de governo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [2, 3, 4, 7, 9, 12, 13, 14, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, leia outra vez essa parte do documento e corrija a sua resposta.",
    criteria: [
      { name: "Fonte e ponto de vista", objective: "O2", notYet: "O tipo de fonte ou o autor está errado ou falta.", meets: "Autor, data e tipo de fonte certos, e um ponto de vista que combina com quem o escreveu e porquê.", exceeds: "Também explica como o ponto de vista marca o que o documento diz." },
      { name: "Ideia principal, facto e opinião", objective: "O2", notYet: "A ideia principal está errada, ou o facto e a opinião estão trocados.", meets: "Uma ideia principal certa numa frase, um facto e um objetivo ou opinião, cada um ligado às palavras.", exceeds: "Cita as palavras exatas que mostram cada resposta." },
      { name: "Causa e efeito", objective: "O4", notYet: "Não há causa nem efeito, ou estão trocados.", meets: "Uma causa certa e um efeito certo ligados ao documento.", exceeds: "Mostra uma cadeia: uma causa, um efeito e um efeito mais tarde." },
      { name: "Ligação ao governo", objective: "O3", notYet: "Nenhum poder ou direito indicado, ou o errado.", meets: "Diz o poder ou o direito a que se refere e explica porquê numa frase.", exceeds: "Também dá um exemplo de pesos e contrapesos ou de um direito a ser usado hoje." },
      { name: "Leitura de dados", objective: "O5", notYet: "Não fez a prática de gráficos da Lição 5.", meets: "Fez a prática de gráficos da Lição 5 com uma conclusão que fica dentro dos dados.", exceeds: "Também explica uma mudança de preço usando a oferta e a procura." },
      { name: "Plano de estudo", objective: "O1", notYet: "Não há plano de estudo, ou não tem datas.", meets: "Um plano de estudo com pelo menos uma data por semana até à semana escolhida para o teste.", exceeds: "Também tem uma data para o GED Ready ou uma data de teste já marcada." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou melhor em todas as linhas da grelha de avaliação",
      "Alunos que fazem o GED Ready ou um teste de amostra gratuito do ged.com em 30 dias",
      "Alunos que marcam ou passam o teste de Estudos Sociais do GED em 90 dias (dito pelo próprio aluno)",
      "Os programas parceiros dizem ter mais alunos a terminar as quatro disciplinas do GED e a seguir para formação profissional ou para a faculdade"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, tablet ou computador com internet, ou as lições impressas",
      "Papel e caneta para as respostas da prática e a ficha de análise de fonte",
      "Uma cópia impressa ou no ecrã do Preâmbulo e da Carta de Direitos de archives.gov",
      "Testes de amostra gratuitos do ged.com; o GED Ready, se o aluno decidir comprá-lo",
      "Cerca de 90 minutos para as lições e as verificações, mais cerca de 45 minutos para a tarefa final"
    ],
    facilitatorNotes: [
      "Comece com o teste inicial e o teste de amostra gratuito de Estudos Sociais do ged.com para ver de que área de habilidades cada aluno mais precisa.",
      "Leiam juntos o Preâmbulo em voz alta e digam cada objetivo com palavras do dia a dia antes de os alunos escreverem as suas fichas.",
      "Mantenha os temas políticos neutros: ensine como funciona o governo e como avaliar provas, não que lado escolher.",
      "Use tabelas locais e verdadeiras (por exemplo dados de empregos ou de rendas do condado) para mais prática de gráficos, e verifique os números na fonte oficial.",
      "Verifique que teste o seu estado usa (GED ou HiSET) e partilhe os locais de teste da zona e qualquer ajuda com os preços."
    ]
  }
};
