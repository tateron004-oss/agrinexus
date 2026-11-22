"use strict";

// Koach Learn course (Portuguese translation of shared/ged-math.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// This is a US course: GED, GED Testing Service, GED Ready, HiSET, Mathematical Reasoning and TI-30XS are kept as written. Math and formulas unchanged.

const GED_SUBJECTS = { name: "GED Testing Service: Disciplinas do exame (Matemática)", url: "https://www.ged.com/about-test/test-subjects.html" };
const GED_MATH = { name: "GED Testing Service: Exame de Matemática, folha de fórmulas e pergunta de exemplo", url: "https://ged.com/about_test/test_subjects/math/" };
const GED_PRACTICE = { name: "GED Testing Service: Exames de exemplo gratuitos e GED Ready", url: "https://www.ged.com/practice-test/" };
const GED_CALC = { name: "GED Testing Service: Folha de referência da calculadora TI-30XS (PDF)", url: "https://www.ged.com/wp-content/uploads/calculator_sheet.pdf" };
const HISET = { name: "HiSET: exame de equivalência ao ensino secundário", url: "https://hiset.org/" };

module.exports = {
  id: "ged-math-pt",
  lang: "pt",
  translationOf: "ged-math",
  category: "Workforce Development",
  name: "Preparação para o Exame GED: Matemática",
  skills: "Conhecer o exame de Matemática do GED e fazer um plano de estudo, Cálculo sem calculadora, Razões, percentagens e dados, Resolver equações e inequações, Geometria com a folha de fórmulas, Declive, gráficos e funções",
  outcome: "resolver os principais tipos de problemas de Matemática do GED (cálculo com números, percentagens e dados, equações, geometria com a folha de fórmulas e gráficos) e seguir um plano de estudo e de exame com datas que o prepara para fazer o exame de Matemática do GED.",
  about: [
    "Este curso é para adultos que querem obter um diploma de equivalência ao ensino secundário (high school, nos Estados Unidos): jovens adultos, pessoas que voltam para casa depois da prisão, imigrantes, veteranos e qualquer pessoa que volta a estudar. Um diploma abre portas a empregos, programas de formação e à universidade.",
    "O exame GED tem quatro disciplinas, e a Matemática (chamada Mathematical Reasoning, raciocínio matemático) é uma delas. É dado pela GED Testing Service num computador. O exame de Matemática cobre Matemática Básica, Geometria, Álgebra Básica, e Gráficos e Funções. Recebe uma folha de fórmulas, por isso não tem de decorar fórmulas. Alguns estados usam o exame HiSET em vez do GED, ou além dele; o serviço de educação de adultos do seu estado ou o site ged.com diz-lhe qual.",
    "Vai aprender como funciona o exame de Matemática e depois praticar cada tipo de problema com exemplos resolvidos e exercícios com as respostas explicadas. No fim, faz o seu próprio plano de estudo e de exame com datas.",
    "Este curso prepara-o para o exame; não lhe dá o diploma GED. Só passar no exame GED oficial dá o diploma. Veja em ged.com as regras atuais do seu estado, o custo, fazer o exame num centro de exames ou pela internet, e os exames de prática oficiais. Cada lição dura cerca de seis minutos, com uma verificação rápida depois, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça o seu próprio plano de estudo e de exame de Matemática do GED: faça o GED Math Sample Test gratuito em ged.com e escreva o seu resultado; escreva os 3 temas em que está mais fraco, a partir desse exame e dos questionários deste curso; escreva um horário de estudo semanal com datas reais para as próximas 6 a 8 semanas (que tema, que dia, quanto tempo); resolva uma série de 12 problemas de prática (2 de cada lição) e explique os que errou; e escreva as datas em que pensa fazer o exame de prática oficial GED Ready e o exame de Matemática do GED, depois de ver as regras e os custos do seu estado em ged.com.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos sem diploma do ensino secundário: pessoas que voltam para casa depois da prisão, imigrantes, veteranos, pais e trabalhadores que precisam de um diploma para um emprego, uma promoção ou a universidade. Muitos deixaram a escola há anos; alguns tiveram más experiências com a matemática.",
    startingPoint: "Sabem somar, subtrair, multiplicar e dividir números inteiros, muitas vezes com calculadora. Muitos estão esquecidos de frações, números negativos e percentagens, e sabem pouca ou nenhuma álgebra. A maioria nunca viu o formato do exame GED nem a sua calculadora.",
    gap: "O exame de Matemática do GED pede cálculo com números, percentagens e dados, álgebra, geometria com uma folha de fórmulas e gráficos, em 115 minutos num computador. Os alunos precisam de conhecer o formato do exame, praticar cada tipo de problema com exemplos resolvidos e seguir um plano de estudo para fazerem o exame quando estiverem prontos. Passar abre portas a empregos, formação e universidade.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra de matemática é explicada",
      "Aparelhos: um telefone ou computador para o exame de exemplo gratuito do GED; papel e lápis para praticar",
      "Calculadora: praticar com uma TI-30XS se possível, ou com uma calculadora científica gratuita na internet",
      "Tempo: lições de 5 a 6 minutos, mais um horário de estudo semanal que o aluno escolhe",
      "As regras, os custos e as opções de exame mudam de estado para estado e podem mudar: indique sempre ged.com ou o serviço do estado",
      "Medo da matemática: muitos exemplos resolvidos, verificar as respostas, sem pressão de tempo na prática"
    ],
    prerequisites: "Somar, subtrair, multiplicar e dividir números inteiros. Quem não está seguro com frações, decimais e percentagens pode fazer primeiro o curso \"Matemática do Dia a Dia para o Trabalho e a Vida\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando ged.com e o GED Math Sample Test gratuito", action: "listar as áreas de conteúdo, o tempo, as regras da calculadora e os tipos de perguntas do exame de Matemática do GED, e escrever um plano de estudo e de exame com datas", standard: "com um horário semanal para 6 a 8 semanas e uma data-alvo para o exame" },
    { id: "O2", condition: "Sem calculadora", action: "resolver problemas com a ordem das operações, frações, números negativos, potências e raízes quadradas", standard: "acertando pelo menos 4 de 5" },
    { id: "O3", condition: "Com problemas escritos e pequenos conjuntos de dados", action: "resolver problemas de razões, proporções e percentagens e encontrar a média, a mediana, a moda e a amplitude", standard: "acertando pelo menos 4 de 5" },
    { id: "O4", condition: "Com um problema escrito ou uma equação", action: "escrever e resolver equações e inequações lineares com uma variável", standard: "acertando pelo menos 4 de 5 e verificando cada resposta ao colocá-la de volta no problema" },
    { id: "O5", condition: "Usando uma folha de fórmulas e uma calculadora", action: "calcular o perímetro, a área, o volume e o lado que falta de um triângulo retângulo", standard: "acertando pelo menos 4 de 5, com as unidades certas" },
    { id: "O6", condition: "Com um gráfico, uma tabela, dois pontos ou uma função", action: "encontrar o declive, ler valores e calcular o valor da função", standard: "acertando pelo menos 4 de 5" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O exame, os números e os dados",
      lessons: [
        {
          title: "O exame de Matemática do GED e o seu plano de estudo",
          objectives: ["O1"],
          minutes: 6,
          goal: "Dizer como funciona o exame de Matemática do GED e começar um plano de estudo com datas.",
          text: [
            "O exame GED tem quatro disciplinas: Matemática, Linguagem (Reasoning Through Language Arts), Ciências e Estudos Sociais. Pode fazê-las uma de cada vez. O exame de Matemática chama-se Mathematical Reasoning. Cobre quatro áreas: Matemática Básica, Geometria, Álgebra Básica, e Gráficos e Funções.",
            "Segundo ged.com, o exame de Matemática dura 115 minutos, incluindo o tempo para as instruções e a revisão. Tem partes, com um intervalo curto entre elas. Na parte 2 há uma calculadora no ecrã; num centro de exames pode levar a sua própria calculadora TI-30XS. Algumas perguntas têm de ser feitas sem calculadora, por isso também precisa de fazer contas de cabeça e no papel. Recebe uma folha de fórmulas e uma folha de referência da calculadora, por isso não tem de decorar fórmulas.",
            "Os tipos de perguntas incluem escolha múltipla, arrastar e largar, preencher o espaço, selecionar uma área (clicar num gráfico ou numa imagem) e lista pendente. Veja ged.com antes do exame, porque os detalhes podem mudar. Em alguns estados usa-se o exame HiSET em vez do GED, ou além dele; quem decide é o seu estado.",
            "Comece pelo GED Math Sample Test gratuito em ged.com. Ele mostra o ecrã e os tipos de perguntas. Use-o para encontrar os seus temas fracos. Quando estiver mais perto, o exame de prática oficial, o GED Ready, diz-lhe se é provável que esteja pronto (veja o custo em ged.com). Depois faça um plano de estudo: sessões curtas, vários dias por semana, um tema de cada vez."
          ],
          steps: ["Vá a ged.com e leia a página do exame de Matemática e as regras do seu estado.", "Faça o GED Math Sample Test gratuito e escreva o seu resultado.", "Escreva os temas que achou difíceis.", "Escolha dias e horas de estudo para as próximas 6 a 8 semanas, com datas reais.", "Ponha um tema em cada dia de estudo, começando pelo mais fraco.", "Escolha uma data para fazer o GED Ready e uma data-alvo para o exame verdadeiro."],
          words: [["GED", "um exame de equivalência ao ensino secundário da GED Testing Service; passar nas quatro disciplinas dá um diploma de equivalência ao ensino secundário."], ["HiSET", "outro exame de equivalência ao ensino secundário usado em alguns estados."], ["Folha de fórmulas", "uma página com fórmulas de matemática que recebe durante o exame."], ["TI-30XS", "o modelo de calculadora científica usado no exame de Matemática do GED."], ["GED Ready", "o exame de prática oficial do GED que mostra se é provável que esteja pronto."], ["Plano de estudo", "um horário escrito do que vai estudar e quando."]],
          slides: [
            { title: "Matemática do GED (Mathematical Reasoning)", bullets: ["Matemática Básica, Geometria, Álgebra Básica, Gráficos e Funções", "115 minutos, num computador, com um intervalo curto", "Recebe a folha de fórmulas e a folha de referência da calculadora"] },
            { title: "Calculadora e tipos de perguntas", bullets: ["Calculadora no ecrã na parte 2; ou a sua TI-30XS num centro de exames", "Algumas perguntas sem calculadora", "Escolha múltipla, arrastar e largar, preencher, selecionar uma área, lista pendente"] },
            { title: "Exames de prática", bullets: ["GED Math Sample Test gratuito em ged.com", "GED Ready: o exame de prática oficial (veja o custo)", "Alguns estados usam o HiSET: veja o seu estado"] },
            { title: "O seu plano de estudo", bullets: ["Comece pelos temas mais fracos", "Sessões curtas, vários dias por semana, datas reais", "Escolha uma data para o GED Ready e uma data-alvo para o exame"] }
          ],
          tryIt: "Vá a ged.com e faça o GED Math Sample Test gratuito. Escreva o seu resultado e os temas que pareceram difíceis. Depois, no papel, faça um calendário para as próximas 6 a 8 semanas: marque com um círculo os seus dias de estudo, escreva uma hora para cada um e ponha o tema mais difícil no primeiro dia. Este é o começo da sua tarefa final.",
          youCanNow: "descrever o exame de Matemática do GED (conteúdo, tempo, calculadora, folha de fórmulas, tipos de perguntas) e começar um plano de estudo com datas.",
          quickCheck: [
            { objective: "O1", q: "Tem de decorar fórmulas para o exame de Matemática do GED?", options: ["Sim, todas as fórmulas", "Não, recebe uma folha de fórmulas", "Só as que estão atrás da calculadora", "Só se fizer o exame pela internet"], answer: 1, why: "A GED Testing Service dá uma folha de fórmulas durante o exame." },
            { objective: "O1", q: "Onde deve ver as regras e os custos atuais do GED no seu estado?", options: ["Numa publicação nas redes sociais", "Com um amigo que fez o exame há anos", "Em ged.com ou no serviço de educação de adultos do seu estado", "Só neste curso"], answer: 2, why: "As regras e os custos mudam e variam de estado para estado; a fonte é o site oficial." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE, HISET]
        },
        {
          title: "Cálculo com números sem calculadora",
          objectives: ["O2"],
          minutes: 6,
          goal: "Resolver à mão problemas de ordem das operações, frações, números negativos, potências e raízes quadradas.",
          text: [
            "Ordem das operações: faça primeiro os Parênteses, depois as Potências (expoentes), depois Multiplique e Divida da esquerda para a direita, e depois Some e Subtraia da esquerda para a direita. Em inglês, muitos lembram-se com a palavra PEMDAS. Exemplo: 3 + 4 x (6 - 2)^2 / 8. Parênteses: 6 - 2 = 4. Potência: 4^2 = 16. Multiplicar e dividir da esquerda para a direita: 4 x 16 = 64, 64 / 8 = 8. Somar: 3 + 8 = 11.",
            "Frações: para multiplicar, multiplique os de cima e os de baixo: 2/3 x 3/4 = 6/12 = 1/2. Para dividir, vire a segunda fração ao contrário e multiplique: 3/4 / 1/2 = 3/4 x 2/1 = 6/4 = 1 1/2. Para comparar frações e decimais, passe tudo para decimais: 2/3 é cerca de 0.667, por isso do menor para o maior: 0.65, 2/3, 0.7.",
            "Números negativos: -5 + 8 = 3. Subtrair um negativo é somar: 6 - (-2) = 8. Um negativo vezes um negativo dá positivo: -3 x -4 = 12; um negativo vezes um positivo dá negativo: -3 x 4 = -12. Na reta numérica, os números ficam maiores para a direita.",
            "Potências e raízes: 2^5 quer dizer 2 x 2 x 2 x 2 x 2 = 32. A raiz quadrada desfaz o quadrado: a raiz quadrada de 49 é 7, porque 7 x 7 = 49. A raiz quadrada de 50 é um pouco mais de 7, porque 50 está entre 49 e 64."
          ],
          steps: ["Primeiro os parênteses.", "Depois as potências e as raízes.", "Depois multiplique e divida, da esquerda para a direita.", "Depois some e subtraia, da esquerda para a direita.", "Frações: multiplique em linha reta; para dividir, vire a segunda ao contrário e multiplique.", "Sinais: sinais iguais multiplicados dão positivo, sinais diferentes dão negativo."],
          words: [["Ordem das operações", "a ordem combinada para fazer os passos de matemática: parênteses, potências, multiplicar e dividir, somar e subtrair."], ["Expoente", "um número pequeno escrito em cima que diz quantas vezes se multiplica um número por ele mesmo: 2^3 = 2 x 2 x 2."], ["Raiz quadrada", "o número que, multiplicado por ele mesmo, dá o número: a raiz quadrada de 25 é 5."], ["Número negativo", "um número menor do que zero, como -4."], ["Reta numérica", "uma linha com os números em ordem; os números ficam maiores para a direita."]],
          slides: [
            { title: "Ordem das operações", bullets: ["Parênteses, Potências", "Multiplicar e Dividir, da esquerda para a direita", "Somar e Subtrair, da esquerda para a direita", "3 + 4 x (6 - 2)^2 / 8 = 11"] },
            { title: "Frações", bullets: ["Multiplicar: 2/3 x 3/4 = 6/12 = 1/2", "Dividir: virar e multiplicar: 3/4 / 1/2 = 1 1/2", "Comparar: passar para decimais"] },
            { title: "Números negativos", bullets: ["-5 + 8 = 3", "6 - (-2) = 8", "-3 x -4 = 12; -3 x 4 = -12"] },
            { title: "Potências e raízes", bullets: ["2^5 = 32", "Raiz quadrada de 49 = 7", "A raiz quadrada de 50 é um pouco mais de 7"] }
          ],
          tryIt: "Pratique sem calculadora (respostas em baixo): (1) 10 - 2 x 3 + 4. (2) 5/6 x 3/5. (3) 2/3 / 4/9. (4) -7 - (-10). (5) 3^3 - raiz quadrada de 16. Respostas: (1) 10 - 6 + 4 = 8 (multiplicar primeiro). (2) 15/30 = 1/2. (3) 2/3 x 9/4 = 18/12 = 1 1/2. (4) -7 + 10 = 3. (5) 27 - 4 = 23. Para cada uma que errou, encontre o passo em que errou e escreva a regra de que precisa.",
          youCanNow: "fazer à mão a ordem das operações, frações, números negativos, potências e raízes quadradas.",
          quickCheck: [
            { objective: "O2", q: "Quanto é 8 + 12 / 4?", options: ["5", "20", "14", "11"], answer: 3, why: "Divida antes de somar: 12 / 4 = 3, depois 8 + 3 = 11." },
            { objective: "O2", q: "Quanto é -6 x -5?", options: ["30", "-30", "-11", "11"], answer: 0, why: "Um negativo vezes um negativo dá positivo: 30." }
          ],
          sources: [GED_MATH]
        },
        {
          title: "Razões, proporções, percentagens e dados",
          objectives: ["O3"],
          minutes: 6,
          goal: "Resolver problemas de razões, proporções e percentagens e encontrar a média, a mediana, a moda e a amplitude.",
          text: [
            "Uma razão compara duas quantidades: 3 chávenas de farinha para cada 2 chávenas de açúcar é 3:2. Uma proporção diz que duas razões são iguais. Para resolver uma, multiplique em cruz. Exemplo: 3 chávenas de farinha dão 24 bolachas. Quanto é preciso para 40 bolachas? 3/24 = x/40, por isso 24x = 120 e x = 5 chávenas.",
            "Três perguntas de percentagem: (1) Quanto é 35% de 80? 0.35 x 80 = 28. (2) 18 é que percentagem de 72? 18 / 72 = 0.25 = 25%. (3) Variação percentual: um preço passa de $40 para $50. A variação é $10, e 10 / 40 = 0.25, por isso subiu 25%. Divida sempre a variação pela quantidade ORIGINAL.",
            "Dados: para os números 4, 7, 7, 9, 13, a média é o total dividido por quantos números há: 40 / 5 = 8. A mediana é o número do meio quando estão em ordem: 7. A moda é o número que aparece mais vezes: 7. A amplitude é o maior menos o menor: 13 - 4 = 9. Se houver dois números no meio, a mediana fica a meio caminho entre eles.",
            "A probabilidade é a hipótese de uma coisa acontecer: o número de maneiras de acontecer / o número total de resultados. Um saco tem 3 berlindes vermelhos e 9 azuis: a probabilidade de sair vermelho é 3/12 = 1/4, ou 25%."
          ],
          steps: ["Proporção: escreva duas frações iguais com as mesmas unidades nos mesmos lugares, depois multiplique em cruz e divida.", "Percentagem de um número: passe a percentagem para decimal e multiplique.", "Que percentagem: parte / todo, depois passe para percentagem.", "Variação percentual: variação / original.", "Média: some e depois divida por quantos são. Mediana: ponha em ordem e encontre o do meio.", "Moda: o mais comum. Amplitude: o maior menos o menor."],
          words: [["Razão", "uma comparação de duas quantidades, como 3:2."], ["Proporção", "duas razões iguais, como 3/24 = 5/40."], ["Multiplicar em cruz", "multiplicar o de cima de cada fração pelo de baixo da outra para resolver uma proporção."], ["Média", "somar os números e dividir por quantos números há."], ["Mediana", "o número do meio quando os números estão em ordem."], ["Moda", "o número que aparece mais vezes."], ["Amplitude", "o maior número menos o menor."], ["Probabilidade", "a hipótese de uma coisa acontecer, de 0 (nunca) a 1 (sempre)."]],
          slides: [
            { title: "Razões e proporções", bullets: ["3 chávenas para 24 bolachas; x chávenas para 40", "3/24 = x/40, por isso 24x = 120", "x = 5 chávenas"] },
            { title: "Três perguntas de percentagem", bullets: ["35% de 80 = 0.35 x 80 = 28", "18 de 72 = 18 / 72 = 25%", "De $40 para $50: 10 / 40 = aumento de 25%"] },
            { title: "Dados: 4, 7, 7, 9, 13", bullets: ["Média: 40 / 5 = 8", "Mediana: 7; Moda: 7", "Amplitude: 13 - 4 = 9"] },
            { title: "Probabilidade", bullets: ["Maneiras de acontecer / total de resultados", "3 vermelhos em 12 berlindes: 3/12 = 1/4 = 25%"] }
          ],
          tryIt: "Pratique (respostas em baixo): (1) A escala de um mapa é 1 polegada : 20 milhas. Quantas milhas são 3.5 polegadas? (2) Quanto é 15% de 260? (3) Um telefone de $250 custa agora $200. Qual é a diminuição percentual? (4) Encontre a média, a mediana, a moda e a amplitude de 12, 15, 15, 18, 20, 22. Respostas: (1) 70 milhas. (2) 39. (3) 50 / 250 = diminuição de 20%. (4) Média 102 / 6 = 17; mediana a meio caminho entre 15 e 18 = 16.5; moda 15; amplitude 10.",
          youCanNow: "resolver proporções e os três tipos de problemas de percentagem, e descrever um conjunto de dados com a média, a mediana, a moda e a amplitude.",
          quickCheck: [
            { objective: "O3", q: "Qual é a mediana de 3, 9, 4, 8, 6?", options: ["4", "9", "6", "30"], answer: 2, why: "Em ordem: 3, 4, 6, 8, 9. O número do meio é 6." },
            { objective: "O3", q: "Um artigo de $60 sobe para $75. Qual é o aumento percentual?", options: ["15%", "20%", "80%", "25%"], answer: 3, why: "A variação é 15, e 15 / 60 = 0.25 = 25%." }
          ],
          sources: [GED_SUBJECTS]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O exame, os números e os dados",
        questions: [
          { objective: "O1", q: "Qual destas é uma das quatro áreas de conteúdo do exame de Matemática do GED?", options: ["Ortografia", "Gráficos e Funções", "História mundial", "Velocidade a escrever no teclado"], answer: 1, why: "O exame de Matemática cobre Matemática Básica, Geometria, Álgebra Básica, e Gráficos e Funções." },
          { objective: "O2", q: "Quanto é 2 + 3 x 4^2?", options: ["50", "80", "26", "400"], answer: 0, why: "Primeiro a potência: 16. Multiplicar: 48. Somar: 50." },
          { objective: "O2", q: "Quanto é 3/4 / 3/8?", options: ["9/32", "1/2", "3/8", "2"], answer: 3, why: "Virar e multiplicar: 3/4 x 8/3 = 24/12 = 2." },
          { objective: "O3", q: "5 trabalhadores embalam 40 caixas por hora. Ao mesmo ritmo, quantas caixas embalam 8 trabalhadores?", options: ["43", "50", "64", "80"], answer: 2, why: "40/5 = x/8, por isso 5x = 320 e x = 64." },
          { objective: "O3", q: "Qual é a média de 10, 14, 15 e 21?", options: ["15", "14.5", "11", "60"], answer: 0, why: "O total é 60, dividido por 4 números, dá 15." }
        ]
      }
    },
    {
      name: "Capítulo 2: Álgebra, geometria e gráficos",
      lessons: [
        {
          title: "Resolver equações e inequações",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escrever e resolver equações e inequações com uma variável e verificar cada resposta.",
          text: [
            "Uma variável é uma letra, como x, que representa um número desconhecido. As palavras passam a matemática: \"5 a mais do que o dobro de um número\" é 2x + 5. \"Um número diminuído de 7\" é x - 7. \"O produto de 4 por um número\" é 4x.",
            "Para resolver uma equação, faça a mesma coisa aos dois lados até o x ficar sozinho. Desfaça primeiro as somas ou subtrações, depois as multiplicações ou divisões. Exemplo: 3x - 7 = 20. Some 7: 3x = 27. Divida por 3: x = 9. Verificar: 3 x 9 - 7 = 20. Certo. Exemplo com parênteses: 2(x + 4) = 18. Divida por 2: x + 4 = 9, por isso x = 5.",
            "Problema escrito: um tarifário de telefone custa $25 por mês mais $0.10 por cada SMS. A conta foi de $32. Quantas SMS? 25 + 0.10t = 32. Subtraia 25: 0.10t = 7. Divida por 0.10: t = 70 SMS.",
            "As inequações usam <, >, <= ou >= e resolvem-se da mesma maneira, com uma regra: quando multiplica ou divide os dois lados por um número negativo, vire o sinal. 4x + 3 > 19 dá 4x > 16, por isso x > 4. Mas -2x <= 10 dá x >= -5. Nas perguntas de escolha múltipla, também pode verificar colocando cada resposta de volta no problema."
          ],
          steps: ["Passe as palavras para uma equação com uma letra para o desconhecido.", "Desfaça as somas ou subtrações nos dois lados.", "Desfaça as multiplicações ou divisões nos dois lados.", "Inequação: vire o sinal se multiplicar ou dividir por um negativo.", "Verifique: coloque a sua resposta de volta no problema original."],
          words: [["Variável", "uma letra que representa um número desconhecido."], ["Expressão", "números, letras e operações sem sinal de igual, como 2x + 5."], ["Equação", "uma frase matemática com sinal de igual, como 3x - 7 = 20."], ["Inequação", "uma frase matemática que usa <, >, <= ou >= em vez de um sinal de igual."], ["Resolver", "encontrar o valor da variável que torna a frase verdadeira."]],
          slides: [
            { title: "De palavras para matemática", bullets: ["5 a mais do que o dobro de um número: 2x + 5", "Um número diminuído de 7: x - 7", "O produto de 4 por um número: 4x"] },
            { title: "Resolver uma equação", bullets: ["3x - 7 = 20", "Some 7: 3x = 27; divida por 3: x = 9", "Verificar: 3 x 9 - 7 = 20"] },
            { title: "Um problema escrito", bullets: ["$25 por mês + $0.10 por SMS = $32", "25 + 0.10t = 32, por isso 0.10t = 7", "t = 70 SMS"] },
            { title: "Inequações", bullets: ["Resolva como uma equação", "Multiplicar ou dividir por um negativo: vire o sinal", "-2x <= 10 dá x >= -5"] }
          ],
          tryIt: "Pratique (respostas em baixo): (1) Escreva \"8 a menos do que o triplo de um número\" como expressão. (2) Resolva 5x + 6 = 41. (3) Resolva 4(x - 2) = 28. (4) Um táxi cobra $3 mais $2 por milha. A viagem custou $19. Quantas milhas? (5) Resolva -3x + 1 > 13. Respostas: (1) 3x - 8. (2) 5x = 35, x = 7. (3) x - 2 = 7, x = 9. (4) 3 + 2m = 19, m = 8 milhas. (5) -3x > 12, por isso x < -4 (vire o sinal). Verifique cada resposta colocando-a de volta no problema.",
          youCanNow: "passar palavras para equações, resolver equações e inequações e verificar as suas respostas.",
          quickCheck: [
            { objective: "O4", q: "Resolva: x / 4 + 3 = 8", options: ["x = 44", "x = 5", "x = 20", "x = 1.25"], answer: 2, why: "Subtraia 3: x / 4 = 5. Multiplique por 4: x = 20." },
            { objective: "O4", q: "Resolva: -5x < 20", options: ["x > -4", "x < -4", "x < 4", "x > 4"], answer: 0, why: "Divida por -5 e vire o sinal: x > -4." }
          ],
          sources: [GED_SUBJECTS]
        },
        {
          title: "Geometria com a folha de fórmulas e a calculadora",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular o perímetro, a área, o volume e o lado que falta de um triângulo retângulo com uma folha de fórmulas e uma calculadora.",
          text: [
            "O perímetro é a distância à volta de uma figura; some os lados. A área é o espaço dentro, em unidades quadradas. O volume é o espaço dentro de um objeto 3-D, em unidades cúbicas. Um retângulo de 8 pés por 5 pés tem perímetro 2 x (8 + 5) = 26 pés e área 8 x 5 = 40 pés quadrados. Um triângulo com base 10 e altura 6 tem área 1/2 x 10 x 6 = 30.",
            "Os círculos usam pi, cerca de 3.14 (a calculadora tem uma tecla pi). Para um círculo de raio 3: área = pi x r^2 = cerca de 28.27 unidades quadradas; perímetro do círculo (circunferência) = 2 x pi x r = cerca de 18.85. O diâmetro é o dobro do raio, por isso leia com atenção qual dos dois a pergunta dá.",
            "Volume: uma caixa de 4 por 3 por 2 tem volume 4 x 3 x 2 = 24 unidades cúbicas. Um cilindro com raio 2 e altura 5 tem volume pi x r^2 x h = pi x 4 x 5 = cerca de 62.83 unidades cúbicas.",
            "Triângulos retângulos: a^2 + b^2 = c^2 (o teorema de Pitágoras), em que c é o lado mais comprido, em frente ao canto reto. Se os catetos forem 6 e 8, c^2 = 36 + 64 = 100, por isso c = 10. No exame recebe uma folha de fórmulas: pratique com a folha atual de ged.com para saber onde está cada fórmula. Na TI-30XS, use a tecla (-) para os números negativos e a tecla x^2 para os quadrados; a folha de referência da calculadora do GED mostra as teclas."
          ],
          steps: ["Desenhe a figura e escreva o que sabe.", "Decida: perímetro (à volta), área (dentro, plana) ou volume (dentro, 3-D)?", "Encontre a fórmula na folha de fórmulas.", "Ponha os números e use a calculadora.", "Escreva as unidades: pés, pés quadrados ou pés cúbicos.", "Pergunte-se: a resposta faz sentido para o desenho?"],
          words: [["Perímetro", "a distância à volta de uma figura plana."], ["Área", "o espaço dentro de uma figura plana, em unidades quadradas."], ["Volume", "o espaço dentro de um objeto 3-D, em unidades cúbicas."], ["Raio", "a distância do centro de um círculo até à borda; o diâmetro é o dobro do raio."], ["Pi", "o número, cerca de 3.14, usado com os círculos."], ["Teorema de Pitágoras", "num triângulo retângulo, a^2 + b^2 = c^2, em que c é o lado mais comprido."]],
          slides: [
            { title: "Perímetro, área, volume", bullets: ["Perímetro: à volta, em unidades", "Área: dentro de uma figura plana, unidades quadradas", "Volume: dentro de um objeto 3-D, unidades cúbicas"] },
            { title: "Retângulos e triângulos", bullets: ["Retângulo de 8 por 5: perímetro 26, área 40", "Triângulo: 1/2 x base x altura", "Base 10, altura 6: área 30"] },
            { title: "Círculos e cilindros", bullets: ["Área = pi x r^2; raio 3: cerca de 28.27", "Circunferência = 2 x pi x r", "Volume do cilindro = pi x r^2 x h"] },
            { title: "Triângulos retângulos", bullets: ["a^2 + b^2 = c^2", "Catetos 6 e 8: c = 10", "Pratique com a folha de fórmulas atual de ged.com"] }
          ],
          tryIt: "Pratique com uma calculadora e a folha de fórmulas de ged.com (respostas em baixo): (1) Área e perímetro de um retângulo de 12 m por 7 m. (2) Área de um círculo com 10 polegadas de diâmetro. (3) Volume de uma caixa de 6 pés por 2 pés por 3 pés. (4) Uma escada de 13 pés está encostada a uma parede, com o pé a 5 pés da parede. A que altura da parede chega? Respostas: (1) área 84 metros quadrados, perímetro 38 m. (2) raio 5, área cerca de 78.54 polegadas quadradas. (3) 36 pés cúbicos. (4) 5^2 + b^2 = 13^2, por isso b^2 = 169 - 25 = 144, b = 12 pés.",
          youCanNow: "encontrar o perímetro, a área, o volume e o lado que falta de um triângulo retângulo, com as unidades certas.",
          quickCheck: [
            { objective: "O5", q: "Uma sala tem 14 pés por 10 pés. Qual é a sua área?", options: ["24 pés quadrados", "48 pés", "140 pés cúbicos", "140 pés quadrados"], answer: 3, why: "Área = comprimento x largura = 140, em pés quadrados." },
            { objective: "O5", q: "Um triângulo retângulo tem catetos 9 e 12. Qual é o comprimento do lado mais comprido?", options: ["21", "15", "225", "108"], answer: 1, why: "81 + 144 = 225, e a raiz quadrada de 225 é 15." }
          ],
          sources: [GED_MATH, GED_CALC]
        },
        {
          title: "Declive, gráficos e funções",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Encontrar o declive, ler gráficos e tabelas, calcular funções e terminar o seu plano de estudo e de exame.",
          text: [
            "Um referencial (grelha de coordenadas) tem um eixo dos x (na horizontal) e um eixo dos y (na vertical). Um ponto escreve-se (x, y): (3, 5) quer dizer 3 para a direita e 5 para cima. O declive diz quão inclinada é uma reta: subida a dividir pelo avanço, ou (y2 - y1) / (x2 - x1). De (1, 3) a (4, 9): (9 - 3) / (4 - 1) = 6 / 3 = 2. Uma reta que sobe da esquerda para a direita tem declive positivo; se desce, tem declive negativo.",
            "Uma reta pode escrever-se y = mx + b, em que m é o declive e b é onde a reta corta o eixo dos y. Numa tabela em que x = 0, 1, 2 dá y = 5, 8, 11, o y sobe 3 de cada vez, por isso m = 3, e quando x = 0, y = 5, por isso b = 5: y = 3x + 5.",
            "Uma função dá um só resultado para cada entrada. f(x) = x^2 - 3x quer dizer: pegue na entrada, eleve-a ao quadrado e subtraia 3 vezes ela. f(4) = 16 - 12 = 4. Num gráfico, encontre o valor indo na horizontal até ao x que quer, depois para cima ou para baixo até à reta, e depois na horizontal para ler o y.",
            "Termine o seu plano. Veja os seus resultados nas verificações rápidas, nas verificações de conhecimentos e no exame de exemplo. Ponha os seus 3 temas mais fracos primeiro no horário semanal, junte dias de revisão e escolha datas para o GED Ready e para o exame verdadeiro, depois de ver as regras do seu estado em ged.com."
          ],
          steps: ["Declive: subtraia os valores de y, subtraia os valores de x pela mesma ordem e divida.", "y = mx + b: m é o declive, b é o valor de y quando x = 0.", "Numa tabela: o quanto o y muda cada vez que o x sobe 1 é o declive.", "Função: troque o x pelo número e siga a ordem das operações.", "Plano: temas mais fracos primeiro, datas reais, GED Ready antes do exame verdadeiro."],
          words: [["Referencial", "uma grelha com um eixo dos x e um eixo dos y para marcar pontos."], ["Par ordenado", "um ponto escrito (x, y)."], ["Declive", "quão inclinada é uma reta: a subida a dividir pelo avanço."], ["Ordenada na origem", "onde uma reta corta o eixo dos y; o b em y = mx + b."], ["Função", "uma regra que dá exatamente um resultado para cada entrada, como f(x) = 2x + 1."]],
          slides: [
            { title: "Declive = subida / avanço", bullets: ["(y2 - y1) / (x2 - x1)", "De (1, 3) a (4, 9): 6 / 3 = 2", "Sobe da esquerda para a direita: positivo; desce: negativo"] },
            { title: "y = mx + b", bullets: ["m: o declive; b: onde corta o eixo dos y", "Tabela x = 0, 1, 2 dá y = 5, 8, 11", "Por isso y = 3x + 5"] },
            { title: "Funções", bullets: ["f(x) = x^2 - 3x", "f(4) = 16 - 12 = 4", "Gráfico: vá até ao x, encontre a reta, leia o y"] },
            { title: "Termine o seu plano", bullets: ["Os 3 temas mais fracos primeiro", "Datas reais, dias de revisão", "Data do GED Ready, depois a data do seu exame"] }
          ],
          tryIt: "Pratique (respostas em baixo): (1) Encontre o declive de (2, 1) a (6, 9). (2) Escreva a equação de uma reta com declive -2 que corta o eixo dos y em 7. (3) Se f(x) = 3x - 4, encontre f(5). (4) Uma tabela tem x = 0, 1, 2 e y = 10, 7, 4. Qual é o declive? Respostas: (1) 8 / 4 = 2. (2) y = -2x + 7. (3) 15 - 4 = 11. (4) o y desce 3 de cada vez, por isso -3. Depois termine a sua tarefa final: o seu horário semanal com datas, a sua série de 12 problemas com os erros explicados, e as suas datas do GED Ready e do exame.",
          youCanNow: "encontrar o declive, escrever y = mx + b, ler gráficos e tabelas, calcular funções e seguir um plano de estudo e de exame de Matemática do GED com datas.",
          quickCheck: [
            { objective: "O6", q: "Qual é o declive de (0, 2) a (3, 11)?", options: ["2", "9", "1/3", "3"], answer: 3, why: "(11 - 2) / (3 - 0) = 9 / 3 = 3." },
            { objective: "O6", q: "Se f(x) = 2x + 1, quanto é f(6)?", options: ["9", "13", "8", "12"], answer: 1, why: "2 x 6 + 1 = 13." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Álgebra, geometria e gráficos",
        questions: [
          { objective: "O4", q: "Que equação corresponde a \"O dobro de um número mais 9 é 25\"?", options: ["2 + x + 9 = 25", "2(x + 9) = 25", "2x + 9 = 25", "x + 9 = 2 x 25"], answer: 2, why: "O dobro de um número é 2x, mais 9, é igual a 25." },
          { objective: "O4", q: "Resolva: 7x - 4 = 31", options: ["x = 5", "x = 27", "x = 3.9", "x = 35"], answer: 0, why: "Some 4: 7x = 35. Divida por 7: x = 5." },
          { objective: "O5", q: "Qual é o volume de uma caixa de 5 por 4 por 2 polegadas?", options: ["11 polegadas cúbicas", "20 polegadas quadradas", "22 polegadas", "40 polegadas cúbicas"], answer: 3, why: "Volume = 5 x 4 x 2 = 40 polegadas cúbicas." },
          { objective: "O5", q: "Um círculo tem raio 7. Qual é, mais ou menos, a sua circunferência?", options: ["21.99", "43.98", "153.94", "49"], answer: 1, why: "2 x pi x 7 é cerca de 43.98." },
          { objective: "O6", q: "Em y = 4x - 2, qual é o declive?", options: ["-2", "2", "4", "x"], answer: 2, why: "Em y = mx + b, m é o declive, por isso é 4." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para o Exame GED: Matemática",
    questions: [
      { objective: "O1", q: "Quanto tempo dura o exame de Matemática do GED, segundo ged.com?", options: ["30 minutos", "115 minutos", "3 horas", "Não tem limite de tempo"], answer: 1, why: "ged.com indica que o exame de Matemática dura 115 minutos, incluindo as instruções e a revisão." },
      { objective: "O1", q: "Que ferramenta gratuita lhe mostra o ecrã do exame de Matemática do GED e os tipos de perguntas?", options: ["O GED Math Sample Test em ged.com", "Uma aplicação de questionários qualquer", "Um jogo de vídeo", "Não existe nenhuma"], answer: 0, why: "ged.com oferece um exame de exemplo de Matemática gratuito." },
      { objective: "O1", q: "Que modelo de calculadora pode levar para um centro de exames do GED?", options: ["Qualquer telefone", "Uma calculadora gráfica", "Nunca se pode usar calculadora", "TI-30XS"], answer: 3, why: "ged.com diz que pode levar a sua própria TI-30XS; na parte 2 há uma calculadora no ecrã." },
      { objective: "O1", q: "O seu estado usa o HiSET. O que quer isto dizer?", options: ["Não pode obter um diploma", "Tem de mudar para outro estado", "O HiSET é outro exame de equivalência ao ensino secundário que o seu estado usa; veja as regras", "Só faz o exame de Matemática"], answer: 2, why: "Alguns estados usam o HiSET em vez do GED, ou além dele." },
      { objective: "O2", q: "Quanto é 20 - 4 x 3 + 2?", options: ["50", "10", "6", "18"], answer: 1, why: "Multiplique primeiro: 12. Depois 20 - 12 + 2 = 10." },
      { objective: "O2", q: "Quanto é 4/5 x 5/8?", options: ["1/2", "9/13", "20/13", "32/25"], answer: 0, why: "20/40 = 1/2." },
      { objective: "O2", q: "Que número está entre 8 e 9?", options: ["Raiz quadrada de 60", "Raiz quadrada de 100", "Raiz quadrada de 70", "Raiz quadrada de 81"], answer: 2, why: "64 < 70 < 81, por isso a raiz quadrada de 70 está entre 8 e 9." },
      { objective: "O3", q: "Quanto é 40% de 150?", options: ["40", "6", "110", "60"], answer: 3, why: "0.40 x 150 = 60." },
      { objective: "O3", q: "Uma receita usa 2 chávenas de arroz para 6 pessoas. Quantas chávenas para 15 pessoas?", options: ["5", "4", "7.5", "45"], answer: 0, why: "2/6 = x/15, por isso 6x = 30 e x = 5." },
      { objective: "O3", q: "Qual é a amplitude de 5, 12, 3, 9, 20?", options: ["9", "17", "49", "20"], answer: 1, why: "O maior menos o menor: 20 - 3 = 17." },
      { objective: "O3", q: "Um saco tem 4 berlindes verdes e 6 amarelos. Qual é a probabilidade de tirar um verde?", options: ["4/6", "1/4", "2/5", "6/10"], answer: 2, why: "4 verdes em 10 no total = 4/10 = 2/5." },
      { objective: "O4", q: "Resolva: 6x + 5 = 47", options: ["x = 8.67", "x = 6", "x = 42", "x = 7"], answer: 3, why: "Subtraia 5: 6x = 42. Divida por 6: x = 7." },
      { objective: "O4", q: "Um ginásio cobra $40 de inscrição mais $20 por mês. Pagou $160. Quantos meses?", options: ["6", "8", "10", "4"], answer: 0, why: "40 + 20m = 160, por isso 20m = 120 e m = 6." },
      { objective: "O4", q: "Resolva: 10 - 2x >= 4", options: ["x >= 3", "x <= 3", "x <= -3", "x >= 7"], answer: 1, why: "Subtraia 10: -2x >= -6. Divida por -2 e vire o sinal: x <= 3." },
      { objective: "O5", q: "Qual é a área de um triângulo com base 12 e altura 5?", options: ["60", "17", "30", "120"], answer: 2, why: "1/2 x 12 x 5 = 30." },
      { objective: "O5", q: "Um quintal retangular tem 30 pés por 20 pés. Quanta vedação é precisa à volta dele?", options: ["600 pés", "50 pés", "100 pés quadrados", "100 pés"], answer: 3, why: "Perímetro = 2 x (30 + 20) = 100 pés." },
      { objective: "O5", q: "Um cilindro tem raio 3 e altura 10. Qual é, mais ou menos, o seu volume?", options: ["282.74 unidades cúbicas", "94.25 unidades cúbicas", "30 unidades cúbicas", "188.50 unidades cúbicas"], answer: 0, why: "pi x 9 x 10 é cerca de 282.74." },
      { objective: "O6", q: "Qual é o declive de (2, 7) a (5, 1)?", options: ["2", "-2", "-1/2", "6"], answer: 1, why: "(1 - 7) / (5 - 2) = -6 / 3 = -2." },
      { objective: "O6", q: "Uma reta tem declive 5 e corta o eixo dos y em -3. A sua equação é:", options: ["y = -3x + 5", "y = 5x", "y = 5x - 3", "y = x - 8"], answer: 2, why: "y = mx + b com m = 5 e b = -3." },
      { objective: "O6", q: "Se f(x) = x^2 + 2, quanto é f(-3)?", options: ["-7", "-1", "8", "11"], answer: 3, why: "(-3)^2 = 9, e 9 + 2 = 11." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 4, 6, 7, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e depois mostre o plano a um professor ou a um colega de estudo.",
    criteria: [
      { name: "Conhece o exame", objective: "O1", notYet: "Não fez o exame de exemplo gratuito, ou o plano não tem dados do exame tirados de ged.com.", meets: "Resultado do exame de exemplo escrito; áreas de conteúdo, tempo, regras da calculadora e tipos de perguntas listados a partir de ged.com.", exceeds: "Também lista as regras do estado (GED ou HiSET), como marcar o exame e o custo atual, a partir do site oficial." },
      { name: "Plano de estudo com datas", objective: "O1", notYet: "Sem datas, ou sem ordem dos temas.", meets: "6 a 8 semanas de dias de estudo com datas e horas reais, os 3 temas mais fracos primeiro, data do GED Ready e data-alvo do exame.", exceeds: "Inclui dias de revisão e um plano de reserva para as sessões perdidas." },
      { name: "Números e dados", objective: "O3", notYet: "Menos de 3 de 4 problemas de prática de números e dados certos.", meets: "Pelo menos 3 de 4 problemas de números e dados (Lições 2 e 3) certos, com os erros explicados.", exceeds: "Todos certos, com as contas mostradas com clareza, passo a passo." },
      { name: "Álgebra", objective: "O4", notYet: "Equações de prática resolvidas sem verificar, ou 1 ou as duas erradas.", meets: "Os dois problemas de álgebra certos e verificados colocando a resposta de volta no problema.", exceeds: "Explica com as suas palavras a regra de virar o sinal nas inequações." },
      { name: "Geometria e gráficos", objective: "O6", notYet: "Fórmula errada, unidades em falta, ou sinal do declive errado.", meets: "Problemas de geometria e gráficos (Lições 5 e 6) quase todos certos, com as unidades e os sinais do declive certos.", exceeds: "Sabe mostrar onde está cada fórmula na folha de fórmulas e desenhar o gráfico de um problema de declive." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso com um plano de estudo e de exame com datas que cumpre a grelha de avaliação",
      "Melhoria do teste inicial para o questionário final",
      "Alunos que voltam a fazer o GED Ready ou o exame de exemplo oficial em 60 dias e têm um resultado melhor (inquérito de seguimento)",
      "Alunos que passam no exame de Matemática do GED (ou na matemática do HiSET) em 6 meses, e que depois terminam o diploma completo"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, lápis e um calendário",
      "Uma calculadora TI-30XS se possível, ou uma calculadora científica gratuita na internet",
      "A folha de fórmulas atual do GED e a folha de referência da calculadora TI-30XS, de ged.com",
      "Um telefone ou computador com internet para o GED Math Sample Test gratuito",
      "Cerca de 2 a 3 horas para o curso, e depois o horário de estudo semanal do próprio aluno"
    ],
    facilitatorNotes: [
      "Dê o teste inicial como um aquecimento sem nota; muitos alunos têm medo da matemática.",
      "Resolva cada exemplo no quadro e depois peça aos alunos que façam o seguinte em pares antes de trabalharem sozinhos.",
      "Imprima a folha de fórmulas atual e a folha de referência da calculadora de ged.com para os alunos praticarem com o que vão ver.",
      "Ajude os alunos a ver as regras do seu estado (GED ou HiSET, idade, identificação, custo, pela internet ou num centro de exames) nos sites oficiais; não diga custos nem notas mínimas de memória.",
      "Em programas prisionais ou de reintegração, pergunte ao serviço de educação como se organiza o exame no local.",
      "Junte este curso com \"Matemática do Dia a Dia para o Trabalho e a Vida\" para os alunos que precisam de mais prática com frações e percentagens."
    ]
  }
};
