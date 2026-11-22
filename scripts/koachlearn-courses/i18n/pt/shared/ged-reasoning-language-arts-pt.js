"use strict";

// Koach Learn course (Portuguese translation of shared/ged-reasoning-language-arts.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The GED RLA test is in English, so the English grammar examples stay in English inside quotes; only the explanations are translated.

const GED_SUBJECTS = { name: "GED Testing Service: disciplinas do teste (tempo, tipos de perguntas, redação)", url: "https://ged.com/about_test/test_subjects/" };
const GED_RLA = { name: "GED Testing Service: Reasoning Through Language Arts (raciocínio em língua)", url: "https://ged.com/about_test/test_subjects/language_arts/" };
const GED_SCORES = { name: "GED Testing Service: pontuações", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: testes de amostra gratuitos (inglês e espanhol)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, o teste de prática oficial", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, outro teste de equivalência ao ensino secundário (site oficial)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-reasoning-language-arts-pt",
  lang: "pt",
  translationOf: "ged-reasoning-language-arts",
  category: "Workforce Development",
  name: "Preparação para o GED: Raciocínio em Língua (Reasoning Through Language Arts)",
  skills: "Encontrar a ideia principal e as provas, Fazer inferências, Corrigir a gramática e a pontuação, Avaliar argumentos e provas, Escrever a resposta desenvolvida, Fazer um plano de estudo",
  outcome: "ler um texto e responder a perguntas ao estilo do GED sobre a sua ideia principal, as suas provas e a sua gramática, e escrever em 45 minutos uma resposta desenvolvida de prática que escolhe o argumento mais bem apoiado e explica porquê com provas.",
  about: [
    "Este curso é para adultos que se preparam para o teste GED Reasoning Through Language Arts (raciocínio em língua): pessoas à procura de emprego, pessoas que voltam para casa depois da prisão, antigos militares, jovens adultos, imigrantes e qualquer pessoa que volta a estudar. O diploma GED pode abrir portas a empregos, programas de formação e à universidade.",
    "O curso prepara você para o teste. Não lhe dá o diploma GED. Quem organiza o teste é o GED Testing Service, e o seu estado define as regras para o fazer. Alguns estados usam outro teste, chamado HiSET. Consulte ged.com e o serviço de educação de adultos do seu estado para ver as regras, os preços e os locais de teste atuais.",
    "Vai aprender como funciona o teste, ler para encontrar a ideia principal e as provas, corrigir erros comuns de gramática, avaliar argumentos e escrever a resposta desenvolvida (a redação). Cada lição tem exemplos resolvidos, uma prática \"Experimente agora\" com as respostas explicadas e uma verificação rápida de duas perguntas.",
    "Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. A tarefa final é uma redação de prática que você escreve em 45 minutos e avalia com uma grelha de avaliação."
  ],
  finalTask: "Escreva em 45 minutos uma resposta desenvolvida de prática do GED sobre os dois textos da biblioteca da Lição 6. Escolha o argumento com melhores provas, explique porquê com pelo menos duas provas tiradas dos textos e use uma introdução, parágrafos de desenvolvimento e uma conclusão. Depois reveja a gramática e avalie a sua redação com a grelha de avaliação do curso.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que se preparam para o teste GED Reasoning Through Language Arts: pessoas à procura de emprego, pessoas que voltam para casa depois da prisão, antigos militares, jovens adultos que deixaram a escola, imigrantes e adultos que voltam a estudar depois de muitos anos.",
    startingPoint: "Sabem ler textos do dia a dia, como placas, formulários e artigos curtos. Muitos não escrevem uma redação nem estudam gramática há anos, e alguns ficam nervosos com testes ou ainda estão a aprender inglês.",
    gap: "Muitos empregos, programas de formação e universidades pedem o diploma do ensino secundário ou um diploma equivalente. Os alunos precisam de ler com atenção para encontrar provas, avaliar argumentos, usar a gramática padrão e escrever uma redação com tempo limitado. Estas capacidades são avaliadas no teste e também servem no trabalho.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas no ensino; os textos de prática são curtos",
      "Aparelhos: um telefone, um computador da biblioteca, ou papel e caneta",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho, as consultas e a família",
      "As regras, os preços e o teste que cada estado usa (GED ou HiSET) mudam; os alunos consultam ged.com e o seu estado",
      "Alguns alunos têm ansiedade nos testes; a prática não conta para nota e as respostas são explicadas"
    ],
    prerequisites: "Nenhum. Quem lê abaixo do nível do 6.º ano pode querer frequentar ao mesmo tempo uma aula de leitura para adultos."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o site oficial do GED", action: "enumerar as partes, os tipos de perguntas e o tempo do teste de língua do GED e escrever um plano de estudo com datas", standard: "com todas as partes do teste nomeadas e pelo menos uma data de estudo por semana até ao teste" },
    { id: "O2", condition: "Com um texto curto", action: "identificar a ideia principal, os pormenores de apoio e uma inferência apoiada em provas", standard: "apontando a frase exata que apoia cada resposta" },
    { id: "O3", condition: "Com frases que têm erros", action: "corrigir erros de gramática, pontuação, maiúsculas e escolha de palavras", standard: "acertando pelo menos 4 de 5" },
    { id: "O4", condition: "Com um argumento curto", action: "identificar a afirmação e as provas e classificar cada prova como forte ou fraca", standard: "dando uma razão para cada classificação" },
    { id: "O5", condition: "Com dois textos que discordam e um cronómetro de 45 minutos", action: "escrever uma resposta desenvolvida que escolhe o argumento mais bem apoiado e explica porquê com provas", standard: "com uma introdução, pelo menos duas provas tiradas dos textos e uma conclusão" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ler com atenção e escrever corretamente",
      lessons: [
        {
          title: "Como funciona o teste de língua do GED",
          objectives: ["O1"],
          minutes: 5,
          goal: "Enumerar as partes do teste de língua do GED e escrever um plano de estudo com datas.",
          text: [
            "O GED tem quatro testes: Matemática, Reasoning Through Language Arts (RLA, raciocínio em língua), Ciências e Estudos Sociais. Pode fazê-los um de cada vez. Quem faz o teste é o GED Testing Service. Alguns estados usam outro teste de equivalência ao ensino secundário, o HiSET, por isso veja que teste o seu estado usa.",
            "Em ged.com, o teste RLA aparece com 150 minutos em três secções, com um intervalo de 10 minutos entre as partes 2 e 3. Avalia a leitura para compreender, a identificação e a construção de argumentos, e a gramática e a língua. Uma secção é uma redação escrita, chamada resposta desenvolvida (extended response), com 45 minutos.",
            "A maioria das perguntas é de escolha múltipla. Outras pedem para arrastar e largar, selecionar uma zona do ecrã ou escolher numa lista pendente dentro de uma frase. Ged.com indica uma pontuação mínima de 145 em cada disciplina. Os tempos e as regras podem mudar, por isso consulte ged.com antes de marcar.",
            "Um plano é melhor do que estudar tudo à última hora. Praticar pouco tempo quatro ou cinco dias por semana funciona melhor do que uma noite longa. Ged.com tem testes de amostra gratuitos e um teste de prática oficial, o GED Ready, que mostra se é provável você passar."
          ],
          steps: ["Vá a ged.com e leia a página de Reasoning Through Language Arts.", "Anote o tempo, as secções e os tipos de perguntas.", "Faça o teste de amostra RLA gratuito para ver o seu nível.", "Escolha uma semana para o teste e conte as semanas até lá.", "Escreva pelo menos uma data de estudo por semana, com a lição ou a capacidade desse dia."],
          words: [["GED", "um teste de equivalência ao ensino secundário; passar nas quatro disciplinas dá um diploma que muitos empregadores e universidades aceitam como um diploma do secundário."], ["HiSET", "outro teste de equivalência ao ensino secundário que alguns estados usam."], ["Resposta desenvolvida (extended response)", "o nome que o GED dá à redação que você escreve no teste."], ["Lista pendente (drop-down)", "uma lista que se abre quando carrega nela, para escolher uma resposta."], ["Plano de estudo", "um calendário do que vai praticar e quando."]],
          slides: [
            { title: "Quatro disciplinas do GED", bullets: ["Matemática", "Reasoning Through Language Arts (RLA)", "Ciências", "Estudos Sociais"] },
            { title: "O teste RLA (consulte ged.com)", bullets: ["150 minutos, três secções, um intervalo de 10 minutos", "Ler para compreender, argumentos, gramática", "Uma redação: a resposta desenvolvida, 45 minutos"] },
            { title: "Tipos de perguntas", bullets: ["Escolha múltipla", "Arrastar e largar", "Selecionar uma zona", "Lista pendente"] },
            { title: "Faça um plano", bullets: ["Faça primeiro o teste de amostra gratuito", "Escolha uma semana para o teste", "Estude um pouco na maioria dos dias da semana"] }
          ],
          sources: [GED_SUBJECTS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Abra ged.com e faça o teste de amostra RLA gratuito (ou leia a página do RLA se não o puder fazer agora). Depois escreva o seu plano de estudo: a semana do teste e uma data por semana com a capacidade que vai praticar (leitura, gramática, argumentos ou a redação). Guarde-o; vai acrescentar coisas.",
          youCanNow: "dizer quais são as partes do teste de língua do GED e seguir um plano de estudo com datas.",
          quickCheck: [
            { objective: "O1", q: "O que é a resposta desenvolvida no teste de língua do GED?", options: ["Uma lista de palavras de vocabulário", "Uma entrevista oral", "A redação que você escreve no teste", "Uma secção de matemática"], answer: 2, why: "Ged.com chama resposta desenvolvida (extended response) à redação escrita." },
            { objective: "O1", q: "O seu teste é daqui a 8 semanas. Que plano é o melhor?", options: ["Estudar 30 minutos em quatro dias por semana, com uma capacidade para cada dia", "Estudar a noite toda na véspera", "Fazer o teste sem praticar para ver o que acontece", "Ler só as dicas sobre a redação"], answer: 0, why: "Praticar pouco tempo e com regularidade, com uma capacidade planeada para cada dia, dá melhores resultados do que estudar tudo à última hora." }
          ]
        },
        {
          title: "Ideia principal, pormenores e inferências",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identificar a ideia principal, dois pormenores de apoio e uma inferência num texto curto.",
          text: [
            "A ideia principal é aquilo de que o texto inteiro trata sobretudo. Os pormenores de apoio são os factos, os exemplos e as razões que a sustentam. Pergunte: \"Se tivesse de dizer este texto numa só frase, o que diria?\"",
            "Exemplo resolvido. Texto: \"Hoje muitos armazéns funcionam toda a noite. Os turnos da noite muitas vezes pagam mais por hora. Mas os trabalhadores do turno da noite dizem ter mais dificuldade em dormir, e alguns dizem que é mais difícil ver a família.\" Ideia principal: os turnos da noite pagam mais, mas têm custos para os trabalhadores. Pormenores: pagam mais; os trabalhadores têm problemas de sono; o tempo com a família é mais difícil.",
            "Uma inferência é uma suposição inteligente baseada em pistas do texto. Não está escrita palavra por palavra, mas o texto apoia-a. A partir do texto, pode inferir que um trabalhador com filhos pequenos talvez pense duas vezes antes de aceitar um turno da noite. Não pode inferir que os turnos da noite são proibidos por lei; nada no texto diz isso.",
            "No teste, aponte sempre a frase que prova a sua resposta. Se não a conseguir apontar, a resposta provavelmente está errada."
          ],
          steps: ["Leia primeiro a pergunta, para saber o que procurar.", "Leia o texto uma vez do princípio ao fim.", "Diga a ideia principal numa frase.", "Encontre dois pormenores que a apoiam.", "Para uma inferência, escolha a resposta que o texto apoia e encontre a frase que a prova."],
          words: [["Ideia principal", "aquilo de que um texto trata sobretudo."], ["Pormenor de apoio", "um facto, exemplo ou razão que sustenta a ideia principal."], ["Inferência", "uma conclusão a que chega a partir de pistas do texto."], ["Prova", "as palavras do texto que mostram que uma resposta está certa."]],
          slides: [
            { title: "Ideia principal", bullets: ["Aquilo de que o texto trata sobretudo", "Diga-a numa frase"] },
            { title: "Pormenores de apoio", bullets: ["Factos, exemplos e razões", "Sustentam a ideia principal"] },
            { title: "Inferência", bullets: ["Uma suposição inteligente a partir de pistas do texto", "Não está escrita palavra por palavra", "Tem de ser apoiada pelo texto"] },
            { title: "Prove", bullets: ["Aponte a frase que prova a sua resposta", "Não há frase para apontar? Escolha outra vez"] }
          ],
          tryIt: "Texto de prática: \"Este verão, a cidade abriu três novos centros de arrefecimento. Nos dias com mais de 100 graus (Fahrenheit), ficaram abertos até às 22h. As visitas foram mais altas entre os idosos e as pessoas sem ar condicionado.\" 1) Ideia principal? 2) Dois pormenores? 3) Que inferência é apoiada: (a) a cidade quer proteger as pessoas do calor, ou (b) os centros custam demasiado? Respostas: 1) A cidade abriu centros de arrefecimento para ajudar as pessoas no tempo quente. 2) Abertos até às 22h nos dias muito quentes; a maioria dos visitantes eram idosos e pessoas sem ar condicionado. 3) (a). Nada no texto fala do custo.",
          youCanNow: "encontrar a ideia principal, os pormenores e uma inferência apoiada, e apontar a prova.",
          quickCheck: [
            { objective: "O2", q: "Um texto diz que uma padaria acrescentou um turno à noite, contratou cinco pessoas e vendeu mais 30% de pão. Qual é a ideia principal?", options: ["O pão é saudável", "Acrescentar um turno à noite ajudou a padaria a crescer", "Foram contratadas cinco pessoas", "As padarias fecham à noite"], answer: 1, why: "O texto inteiro fala do turno da noite que ajudou a padaria; as contratações e as vendas são pormenores." },
            { objective: "O2", q: "Qual é uma inferência, e não um pormenor escrito no texto?", options: ["Um facto copiado palavra por palavra do texto", "O título do texto", "O número de parágrafos", "Uma conclusão a que chega a partir de pistas que o texto dá"], answer: 3, why: "Uma inferência é uma conclusão apoiada em pistas, não um facto dito diretamente." }
          ]
        },
        {
          title: "Corrigir a gramática e a pontuação",
          objectives: ["O3"],
          minutes: 6,
          goal: "Corrigir em frases cinco tipos comuns de erros de gramática e de pontuação.",
          text: [
            "O teste é em inglês, por isso os exemplos ficam em inglês. Muitas perguntas do RLA mostram uma frase com uma lista pendente e perguntam qual versão está correta. Alguns erros aparecem vezes sem conta. Aprenda-os e vai ganhar muitos pontos.",
            "1) O sujeito e o verbo concordam: \"The list of jobs is long\" (o sujeito é list, não jobs). 2) Frases completas: \"Because the bus was late.\" é um fragmento; corrija: \"I was late because the bus was late.\" 3) Frases coladas: \"I applied I got the job\" precisa de um ponto final, de um ponto e vírgula ou de uma palavra de ligação: \"I applied, and I got the job.\"",
            "4) Palavras que soam igual: their (deles), there (um lugar), they're (they are); its (dele, de uma coisa), it's (it is); your (seu), you're (you are). 5) Maiúsculas e apóstrofos: nomes de pessoas, lugares e dias levam maiúscula (Monday, Texas); o apóstrofo mostra posse (the manager's office) ou uma letra que falta (don't), não um plural (two shifts, e não two shift's).",
            "As palavras de transição ligam ideias: however (mas), therefore (por isso), for example (por exemplo), in addition (além disso). Escolha a que combina com o sentido entre as duas frases."
          ],
          steps: ["Leia a frase inteira, não só a parte sublinhada.", "Encontre o sujeito e o verbo e veja se concordam.", "Veja se é uma frase completa e não duas frases coladas.", "Verifique as palavras que soam igual, as maiúsculas e os apóstrofos.", "Leia a opção que escolheu dentro da frase para ter a certeza de que soa bem."],
          words: [["Sujeito", "quem ou aquilo de que a frase fala."], ["Verbo", "a palavra de ação ou de estado, como runs ou is."], ["Fragmento", "um pedaço de frase que não se aguenta sozinho."], ["Frase colada (run-on)", "duas frases juntas sem a pontuação correta."], ["Transição", "uma palavra que liga duas ideias, como however ou therefore."]],
          slides: [
            { title: "Cinco erros a apanhar", bullets: ["Sujeito e verbo que não concordam", "Fragmentos e frases coladas", "Palavras que soam igual", "Maiúsculas e apóstrofos"] },
            { title: "Palavras que soam igual", bullets: ["their / there / they're", "its / it's", "your / you're"] },
            { title: "Apóstrofos", bullets: ["Posse: the manager's office", "Letra que falta: don't, it's", "Nunca num plural simples: two shifts"] },
            { title: "Palavras de transição", bullets: ["however = mas", "therefore = por isso", "for example, in addition"] }
          ],
          tryIt: "Corrija cada frase. 1) \"The box of gloves are on the shelf.\" 2) \"Their going to the job fair on friday.\" 3) \"I finished my shift I went home.\" 4) \"The company changed it's hours.\" 5) \"Because I wanted to learn.\" Respostas: 1) \"is\" (o sujeito é box). 2) \"They're going to the job fair on Friday.\" 3) \"I finished my shift, and I went home.\" 4) \"its\" (posse). 5) Acrescente uma ideia principal: \"I signed up for class because I wanted to learn.\"",
          youCanNow: "encontrar e corrigir os erros de gramática e de pontuação mais comuns do teste.",
          quickCheck: [
            { objective: "O3", q: "Que frase está correta?", options: ["The team of nurses are ready.", "The team of nurses were ready.", "The team of nurses is ready.", "The team of nurses be ready."], answer: 2, why: "O sujeito é team (um só grupo), por isso o verbo é is." },
            { objective: "O3", q: "Que palavra serve: \"___ going to start training on Monday.\"", options: ["There", "They're", "Their", "Thier"], answer: 1, why: "They're quer dizer they are: they are going to start training." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ler com atenção e escrever corretamente",
        questions: [
          { objective: "O1", q: "Que tipos de perguntas há no teste de língua do GED, segundo ged.com?", options: ["Só verdadeiro ou falso", "Só respostas orais", "Só redações", "Escolha múltipla, arrastar e largar, selecionar uma zona, lista pendente e uma redação"], answer: 3, why: "Ged.com indica estes tipos de perguntas mais uma resposta desenvolvida." },
          { objective: "O2", q: "Um texto diz que uma clínica passou a abrir ao sábado e as visitas de pais que trabalham duplicaram. Que inferência é apoiada?", options: ["Muitos pais que trabalham não podiam ir durante a semana", "A clínica vai fechar em breve", "O sábado é feriado", "Os médicos não gostam dos sábados"], answer: 0, why: "Vieram mais pais que trabalham quando abriu ao sábado, o que mostra que os dias de semana eram difíceis para eles." },
          { objective: "O2", q: "Como verifica que a sua resposta sobre um texto está certa?", options: ["Escolhe a resposta mais longa", "Aponta a frase do texto que a prova", "Escolhe a resposta de que gosta mais", "Escolhe sempre a C"], answer: 1, why: "Uma resposta certa é apoiada por palavras do texto." },
          { objective: "O3", q: "Que frase está correta?", options: ["The store changed it's hours.", "The store changed its hours.", "The store changed its' hours.", "The store changed it is hours."], answer: 1, why: "Its sem apóstrofo quer dizer \"dele\" (de uma coisa)." },
          { objective: "O3", q: "\"I passed the test I was so happy.\" Qual é o problema?", options: ["É uma frase colada; precisa de um ponto final ou de uma palavra de ligação", "Há uma palavra mal escrita", "Precisa de maiúscula em test", "Não há problema"], answer: 0, why: "Duas frases completas estão juntas sem nada entre elas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Argumentos e a resposta desenvolvida",
      lessons: [
        {
          title: "Afirmações, provas e razões fortes",
          objectives: ["O4"],
          minutes: 5,
          goal: "Identificar a afirmação e as provas num argumento e classificar cada prova como forte ou fraca.",
          text: [
            "Um argumento tenta convencer você. A afirmação é aquilo em que o autor quer que acredite. As provas são o que ele usa para a provar.",
            "Uma prova forte é concreta e pode ser verificada: números de um estudo ou de um registo, factos, ou um especialista nessa área. Uma prova fraca é um sentimento, a história de uma só pessoa usada para falar de todos, uma pessoa famosa que não é especialista, ou uma afirmação sem prova.",
            "Exemplo resolvido. Afirmação: \"A nossa cidade devia acrescentar uma linha de autocarro até à zona industrial.\" Prova A: \"Um inquérito do condado a 600 trabalhadores concluiu que 1 em cada 4 falta a turnos por falta de transporte.\" Forte: um número de um inquérito. Prova B: \"O meu primo diz que o autocarro seria bom.\" Fraca: a opinião de uma só pessoa.",
            "Tenha também cuidado com truques: frases como \"toda a gente sabe\", ataques à pessoa em vez da sua ideia, e só duas escolhas quando há mais."
          ],
          steps: ["Encontre a afirmação: em que quer o autor que você acredite?", "Sublinhe cada prova.", "Pergunte: é concreta e eu podia verificá-la?", "Classifique-a como forte ou fraca e escreva uma razão."],
          words: [["Argumento", "um texto que tenta convencer você de alguma coisa."], ["Afirmação", "o ponto principal em que o autor quer que você acredite."], ["Prova forte", "factos ou números concretos que pode verificar, ou um especialista nessa área."], ["Prova fraca", "sentimentos, uma só história, ou afirmações sem prova."]],
          slides: [
            { title: "Partes de um argumento", bullets: ["Afirmação: aquilo em que o autor quer que acredite", "Provas: o que ele usa para a provar"] },
            { title: "Provas fortes", bullets: ["Números de um estudo ou de um registo", "Factos que pode verificar", "Um especialista nessa área"] },
            { title: "Provas fracas", bullets: ["Sentimentos ou \"toda a gente sabe\"", "A história de uma só pessoa", "Uma pessoa famosa que não é especialista"] },
            { title: "Cuidado com os truques", bullets: ["Atacar a pessoa, não a ideia", "Só duas escolhas quando há mais"] }
          ],
          tryIt: "Argumento de prática: \"A cidade devia plantar mais árvores no centro. Um estudo da cidade mediu que as ruas com árvores ficam cerca de 10 graus mais frescas no verão. Um cantor local disse que as árvores são bonitas. Quem discorda simplesmente odeia a natureza.\" Encontre a afirmação e classifique cada apoio. Respostas: Afirmação: plantar mais árvores no centro. Estudo da cidade: forte (um número medido num estudo). Cantor: fraco (não é especialista; é só uma opinião). \"Quem discorda odeia a natureza\": fraco (ataca as pessoas em vez de dar provas).",
          youCanNow: "encontrar a afirmação, separar as provas fortes das fracas e dizer porquê.",
          quickCheck: [
            { objective: "O4", q: "Qual é a prova mais forte de que um programa de formação profissional funciona?", options: ["O diretor diz que é ótimo", "Uma pessoa famosa gosta dele", "Os registos mostram que 70% dos formandos encontraram emprego em seis meses", "Toda a gente sabe que funciona"], answer: 2, why: "É um número concreto de registos que pode ser verificado." },
            { objective: "O4", q: "\"O meu vizinho ficou doente depois de comer lá, por isso o restaurante não é seguro.\" Que tipo de prova é esta?", options: ["Prova de um especialista", "Um estudo", "Dados oficiais", "Fraca: a história de uma só pessoa"], answer: 3, why: "Uma só história não prova nada sobre todas as refeições desse restaurante." }
          ]
        },
        {
          title: "Comparar dois argumentos e planear a redação",
          objectives: ["O4", "O5"],
          minutes: 5,
          goal: "Comparar dois argumentos e escrever um plano curto para uma resposta desenvolvida.",
          text: [
            "No teste, você lê dois textos que defendem lados diferentes. Ged.com diz que você os analisa, decide qual argumento tem provas mais convincentes e explica porquê. Não lhe perguntam de que lado está; você avalia as provas.",
            "Use uma tabela simples. Para cada texto, escreva a afirmação, as provas e uma marca de forte ou fraca. O texto com mais provas fortes costuma ser a sua escolha, mesmo que você pessoalmente acredite no outro lado.",
            "Use cerca de 10 minutos para planear. O seu plano: 1) a sua tese, uma frase que diz qual argumento é mais bem apoiado; 2) duas ou três provas desse texto e porque são fortes; 3) um ponto fraco do outro texto.",
            "Os textos de prática estão na Lição 6. Hoje, pratique a tabela com dois artigos de opinião curtos que discordem, como duas cartas ao diretor de um jornal."
          ],
          steps: ["Leia os dois textos e encontre a afirmação de cada um.", "Faça uma tabela de duas colunas: as provas de cada texto.", "Marque cada prova como forte ou fraca.", "Escreva uma frase de tese: qual argumento é mais bem apoiado.", "Anote as provas que vai usar em cada parágrafo de desenvolvimento."],
          words: [["Tese", "uma frase que diz o seu ponto principal; na redação do GED, qual argumento é mais bem apoiado."], ["Analisar", "olhar com atenção para as partes para ver como funcionam."], ["Parágrafo de desenvolvimento", "um parágrafo do meio que dá uma razão com provas."]],
          slides: [
            { title: "O que a redação pede", bullets: ["Ler dois textos que discordam", "Decidir qual tem provas mais convincentes", "Explicar porquê; não de que lado gosta"] },
            { title: "Faça uma tabela", bullets: ["A afirmação de cada texto", "As suas provas", "Forte ou fraca?"] },
            { title: "Planeie em cerca de 10 minutos", bullets: ["Tese: qual argumento é mais bem apoiado", "2 ou 3 provas e porque são fortes", "Um ponto fraco do outro texto"] }
          ],
          sources: [GED_RLA],
          tryIt: "Prática: o Texto 1 diz que a semana de trabalho de quatro dias é boa e cita um registo da empresa: as faltas por doença baixaram de 6 para 4 por trabalhador num ano. O Texto 2 diz que é má porque \"os trabalhadores vão ficar preguiçosos\" e um gestor \"tem a sensação\" de que a produção vai baixar. Escreva uma tese. Resposta: \"O Texto 1 é mais bem apoiado porque usa registos da empresa sobre faltas por doença, enquanto o Texto 2 se baseia em sensações sem dados.\"",
          youCanNow: "comparar dois argumentos com uma tabela e escrever uma tese e um plano para a sua redação.",
          quickCheck: [
            { objective: "O5", q: "O que pede a resposta desenvolvida do GED?", options: ["Escrever sobre a história da sua vida", "Decidir qual argumento tem provas mais convincentes e explicar porquê", "Resumir um romance", "Escrever um poema"], answer: 1, why: "Ged.com diz que você analisa dois textos e explica qual argumento tem melhores provas." },
            { objective: "O4", q: "Você concorda com o Texto B, mas o Texto A tem mais provas fortes. Qual deve a sua tese escolher?", options: ["O Texto A, porque é mais bem apoiado", "O Texto B, porque concorda com ele", "Nenhum", "Os dois por igual"], answer: 0, why: "A redação avalia as provas, não a sua opinião sobre o tema." }
          ]
        },
        {
          title: "Escrever a resposta desenvolvida em 45 minutos",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escrever com tempo limitado uma resposta desenvolvida que escolhe o argumento mais bem apoiado e explica porquê com provas.",
          text: [
            "Use uma forma simples. Introdução (2 a 3 frases): diga o tema e dê a sua tese. Parágrafos de desenvolvimento (dois ou três): cada um dá uma razão, cita ou descreve uma prova do texto e explica porque é forte ou fraca. Conclusão (2 frases): repita a sua tese com outras palavras.",
            "Textos de prática (inventados para este curso). Texto A, da bibliotecária da cidade: \"Mantenham a biblioteca central aberta até às 21h. Durante um ensaio de três meses, o nosso contador da porta registou cerca de 340 visitas depois das 18h por semana. O registo dos nossos computadores mostra que 6 em cada 10 sessões de procura de emprego foram depois das 18h. As horas a mais custam menos de 1% do nosso orçamento.\" Texto B, de um vereador: \"Fechem às 18h. Passei por lá numa noite e parecia vazia. As pessoas podem simplesmente usar o telefone. É um desperdício de dinheiro.\"",
            "Plano de tempo: cerca de 10 minutos para ler e planear, 30 minutos para escrever, 5 minutos para rever. Use palavras de transição (first, in addition, however, therefore). Escreva frases completas com as suas palavras e cite pequenos pedaços dos textos como provas.",
            "Reveja os erros da Lição 3: sujeito e verbo, frases coladas, palavras que soam igual, maiúsculas e apóstrofos."
          ],
          steps: ["Ligue um cronómetro de 45 minutos.", "Leia os dois textos e preencha a sua tabela de forte ou fraca (cerca de 10 minutos).", "Escreva a introdução com a sua tese.", "Escreva dois ou três parágrafos de desenvolvimento, cada um com uma prova e porque é forte ou fraca.", "Escreva uma conclusão curta.", "Reveja nos últimos 5 minutos."],
          words: [["Introdução", "o primeiro parágrafo; diz o tema e dá a sua tese."], ["Conclusão", "o último parágrafo; repete o seu ponto principal."], ["Citar", "copiar algumas palavras exatas do texto, entre aspas."], ["Rever", "ler outra vez o que escreveu para encontrar e corrigir erros."]],
          slides: [
            { title: "A forma da redação", bullets: ["Introdução com a sua tese", "Dois ou três parágrafos de desenvolvimento com provas", "Uma conclusão curta"] },
            { title: "Cada parágrafo de desenvolvimento", bullets: ["Uma razão", "Uma prova do texto", "Porque é forte, ou porque o outro lado é fraco"] },
            { title: "Plano de tempo de 45 minutos", bullets: ["Cerca de 10 minutos: ler e planear", "Cerca de 30 minutos: escrever", "Cerca de 5 minutos: rever"] }
          ],
          tryIt: "Tarefa final: ligue um cronómetro de 45 minutos e escreva a sua resposta desenvolvida sobre os textos da biblioteca acima. Depois reveja-a e avalie-a com a grelha de avaliação. Tese modelo: \"O Texto A é mais bem apoiado porque usa as contagens de visitas e os registos dos computadores da própria biblioteca, enquanto o Texto B se baseia num olhar numa só noite e em opiniões.\" Provas fortes a usar: cerca de 340 visitas depois das 18h por semana; 6 em cada 10 sessões de procura de emprego depois das 18h; custo abaixo de 1% do orçamento. Ponto fraco do B: uma só visita, nenhum número.",
          youCanNow: "escrever, com tempo limitado, uma resposta desenvolvida completa que avalia dois argumentos pelas suas provas.",
          quickCheck: [
            { objective: "O5", q: "O que deve ter a sua introdução?", options: ["Uma lista de regras de gramática", "Todas as provas", "O tema e a sua tese", "O seu nome e a sua morada"], answer: 2, why: "A introdução diz o tema e qual argumento é mais bem apoiado." },
            { objective: "O5", q: "Nos textos da biblioteca, qual é a prova mais forte?", options: ["\"Parecia vazia\" numa noite", "\"As pessoas podem simplesmente usar o telefone\"", "\"É um desperdício de dinheiro\"", "O contador da porta registou cerca de 340 visitas depois das 18h por semana"], answer: 3, why: "É um número concreto de um registo que pode ser verificado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Argumentos e a resposta desenvolvida",
        questions: [
          { objective: "O4", q: "O que é a afirmação num argumento?", options: ["O ponto principal em que o autor quer que você acredite", "O título", "A frase mais longa", "Um erro de gramática"], answer: 0, why: "A afirmação é aquilo de que o autor tenta convencer você." },
          { objective: "O4", q: "\"Quem quer a biblioteca aberta até mais tarde é simplesmente preguiçoso.\" O que está errado neste apoio?", options: ["Usa números a mais", "Cita um especialista", "Ataca as pessoas em vez de dar provas", "Nada; é uma prova forte"], answer: 2, why: "Atacar as pessoas que discordam não é uma prova sobre a ideia." },
          { objective: "O5", q: "Na redação de 45 minutos, mais ou menos quanto tempo deve usar para ler e planear?", options: ["0 minutos", "Cerca de 40 minutos", "Cerca de 2 minutos", "Cerca de 10 minutos"], answer: 3, why: "Cerca de 10 minutos para planear deixa cerca de 30 para escrever e 5 para rever." },
          { objective: "O5", q: "O que tem um bom parágrafo de desenvolvimento?", options: ["Uma razão, uma prova do texto e porque é forte", "Só a sua opinião", "Um tema novo", "Uma lista de palavras sem frases"], answer: 0, why: "Cada parágrafo de desenvolvimento liga uma razão a uma prova e explica-a." },
          { objective: "O1", q: "Onde deve consultar as regras, os tempos e os preços atuais do teste GED?", options: ["Na memória de um amigo", "Numa publicação nas redes sociais", "Em ged.com e no serviço de educação de adultos do seu estado", "Num livro antigo"], answer: 2, why: "As regras e os preços mudam; o site oficial e o seu estado têm os atuais." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para o GED: Raciocínio em Língua (Reasoning Through Language Arts)",
    questions: [
      { objective: "O1", q: "Para que teste este curso prepara você?", options: ["O teste GED Reasoning Through Language Arts", "Um exame de condução", "Um teste de dactilografia", "Uma entrevista de cidadania"], answer: 0, why: "O curso prepara você para o teste GED RLA; não dá o diploma." },
      { objective: "O1", q: "Qual é outro teste de equivalência ao ensino secundário que alguns estados usam?", options: ["SAT", "HiSET", "CDL", "ESL"], answer: 1, why: "O HiSET é outro teste de equivalência ao ensino secundário usado em alguns estados." },
      { objective: "O1", q: "Qual é o melhor primeiro passo para um plano de estudo?", options: ["Marcar o teste para amanhã", "Saltar as partes difíceis", "Fazer um teste de amostra gratuito para ver o seu nível", "Estudar só na véspera"], answer: 2, why: "Um teste de amostra mostra que capacidades precisam de mais prática." },
      { objective: "O1", q: "Segundo ged.com, quanto tempo dura a parte da redação do teste RLA?", options: ["10 minutos", "2 horas", "Não há redação", "45 minutos"], answer: 3, why: "Ged.com indica 45 minutos para a resposta desenvolvida." },
      { objective: "O2", q: "A ideia principal de um texto é:", options: ["A primeira palavra", "Aquilo de que o texto trata sobretudo", "A palavra mais difícil", "Só a última frase"], answer: 1, why: "A ideia principal é o texto dito numa só frase." },
      { objective: "O2", q: "Um texto diz que uma fábrica acrescentou formação em segurança e os acidentes baixaram para metade. Que pormenor apoia \"a formação tornou a fábrica mais segura\"?", options: ["Os acidentes baixaram para metade", "A fábrica é grande", "A formação era às segundas-feiras", "A fábrica faz cadeiras"], answer: 0, why: "A descida dos acidentes é a prova de que a segurança melhorou." },
      { objective: "O2", q: "Qual é uma inferência apoiada por: \"As filas no banco alimentar duplicaram depois de a fábrica fechar\"?", options: ["O banco alimentar vai fechar", "Os preços dos alimentos baixaram", "Muitas pessoas que perderam o emprego precisaram de ajuda com comida", "A fábrica voltou a abrir"], answer: 2, why: "O momento do fecho e as filas mais longas apoiam esta conclusão." },
      { objective: "O3", q: "Que frase está correta?", options: ["The list of tasks are on the board.", "The list of tasks is on the board.", "The list of tasks were on the board.", "The list of tasks be on the board."], answer: 1, why: "O sujeito é list (uma só lista), por isso o verbo é is." },
      { objective: "O3", q: "Que frase usa as maiúsculas corretamente?", options: ["I start work on monday in ohio.", "I Start Work on Monday in Ohio.", "i start work on Monday in ohio.", "I start work on Monday in Ohio."], answer: 3, why: "Os dias e os lugares levam maiúscula; as outras palavras não." },
      { objective: "O3", q: "Qual é um fragmento de frase?", options: ["I got the job.", "Because the shift ended late.", "She called the manager.", "We passed."], answer: 1, why: "Não se aguenta sozinha; precisa de uma ideia principal, como \"I was tired because the shift ended late.\"" },
      { objective: "O3", q: "Escolha a palavra certa: \"___ a good day to apply.\"", options: ["Its", "Its'", "It's", "It"], answer: 2, why: "It's quer dizer it is: it is a good day to apply." },
      { objective: "O4", q: "Qual é uma prova forte?", options: ["Um relatório do estado que mostra 2,000 novos empregos de enfermagem no ano passado", "\"Eu simplesmente sei\"", "A opinião de uma estrela de cinema sobre a enfermagem", "\"Toda a gente diz isso\""], answer: 0, why: "Números concretos de um relatório oficial podem ser verificados." },
      { objective: "O4", q: "\"Ou cortamos todas as linhas de autocarro ou a cidade vai à falência.\" Qual é o truque?", options: ["Usa um estudo", "Cita um especialista", "É um facto", "Dá só duas escolhas quando há mais"], answer: 3, why: "Há outras opções, como cortar algumas linhas ou encontrar mais dinheiro." },
      { objective: "O4", q: "Porque é que a história de uma só pessoa é uma prova fraca para uma afirmação grande?", options: ["As histórias são sempre falsas", "Um só caso pode não ser verdade para a maioria das pessoas", "As histórias são longas demais", "É contra as regras"], answer: 1, why: "Um só exemplo não mostra o que é verdade em geral." },
      { objective: "O4", q: "Para avaliar um argumento, primeiro encontra:", options: ["A palavra mais longa", "A idade do autor", "A afirmação e as suas provas", "Os erros de gramática"], answer: 2, why: "Avalia-se um argumento pela forma como as provas apoiam a afirmação." },
      { objective: "O5", q: "Na redação do GED, a sua tese deve dizer:", options: ["Qual argumento é mais bem apoiado", "A sua cor preferida", "De que autor gosta", "Que os dois são perfeitos"], answer: 0, why: "A tarefa é decidir qual argumento tem provas mais convincentes." },
      { objective: "O5", q: "Qual é uma boa forma de usar as provas na sua redação?", options: ["Copiar textos inteiros", "Inventar números", "Deixar as provas de fora", "Citar um pedaço curto e explicar porque é forte"], answer: 3, why: "Citações curtas com a sua explicação mostram que analisou as provas." },
      { objective: "O5", q: "O que faz nos últimos minutos da redação?", options: ["Começa uma redação nova", "Revê a gramática e a pontuação", "Apaga a sua tese", "Sai da sala"], answer: 1, why: "Rever apanha erros que fazem perder pontos." },
      { objective: "O5", q: "Qual é a melhor conclusão?", options: ["\"Fim.\"", "\"Gosto de bibliotecas.\"", "\"Como o Texto A usa registos e contagens, e o Texto B usa só opiniões, o Texto A é mais bem apoiado.\"", "\"Algumas pessoas concordam e outras não.\""], answer: 2, why: "Repete a tese e a razão principal com outras palavras." },
      { objective: "O2", q: "Quando não tem a certeza de uma resposta sobre um texto, deve:", options: ["Voltar atrás e procurar a frase que prova uma resposta", "Escolher a opção mais curta", "Não ler e adivinhar", "Escolher a resposta com as palavras mais difíceis"], answer: 0, why: "A resposta certa é apoiada pelo texto, por isso volte atrás e encontre a prova." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [2, 3, 4, 6, 7, 10, 11, 13, 15, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, pratique essa parte e escreva uma redação nova sobre um novo par de textos.",
    criteria: [
      { name: "Tese clara", objective: "O5", notYet: "Não há tese, ou ela diz com que lado o autor concorda em vez de qual é mais bem apoiado.", meets: "A introdução tem uma frase que diz qual argumento é mais bem apoiado.", exceeds: "A tese também diz a razão principal, como registos contra opiniões." },
      { name: "Provas tiradas dos textos", objective: "O4", notYet: "Não há provas dos textos, ou as provas são inventadas.", meets: "Pelo menos duas provas dos textos, cada uma explicada como forte ou fraca.", exceeds: "Também aponta e explica um truque ou um ponto fraco do outro texto." },
      { name: "Organização", objective: "O5", notYet: "Um só bloco de texto, ou as ideias saltam de um lado para o outro.", meets: "Introdução, pelo menos dois parágrafos de desenvolvimento e uma conclusão, com palavras de transição.", exceeds: "Cada parágrafo de desenvolvimento começa com uma frase de tema clara que se liga à tese." },
      { name: "Gramática e pontuação", objective: "O3", notYet: "Muitos erros tornam o texto difícil de ler.", meets: "Alguns erros pequenos, mas o sentido é sempre claro.", exceeds: "Quase nenhum erro; as palavras que soam igual, as maiúsculas e os apóstrofos estão todos corretos." },
      { name: "Leitura correta", objective: "O2", notYet: "Erra a ideia principal de um texto.", meets: "Descreve corretamente a ideia principal de cada texto.", exceeds: "Usa citações curtas e exatas que correspondem ao que os textos dizem." },
      { name: "Plano e tempo", objective: "O1", notYet: "Não acabou em 45 minutos e não tem plano de estudo.", meets: "Acabou em 45 minutos e o plano de estudo tem datas até à semana do teste.", exceeds: "Também marcou um teste de prática GED Ready ou uma data de teste real em ged.com." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou melhor em todas as linhas da grelha de avaliação",
      "Alunos que fazem o GED Ready ou um teste de amostra gratuito de ged.com em 30 dias",
      "Alunos que marcam ou passam no teste de língua do GED em 90 dias (dito pelo próprio aluno)",
      "Os programas parceiros dizem que mais alunos passam para a formação profissional ou para aulas na universidade"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, tablet ou computador com internet, ou as lições impressas",
      "Papel e caneta para as tabelas, as respostas de prática e as redações",
      "Um cronómetro (o do telefone serve) para a redação de 45 minutos",
      "Os testes de amostra gratuitos de ged.com; o GED Ready se o aluno decidir comprá-lo",
      "Cerca de 90 minutos no total para as lições e as verificações, mais 45 minutos para a redação final"
    ],
    facilitatorNotes: [
      "Comece com o teste inicial e o teste de amostra RLA gratuito de ged.com, e depois agrupe os alunos pelas capacidades de que mais precisam.",
      "Faça em voz alta uma tabela de forte ou fraca como exemplo antes de os alunos fazerem a sua.",
      "Peça aos alunos que leiam as redações em voz alta, aos pares, e que comentem uma linha da grelha de avaliação de cada vez.",
      "Veja que teste o seu estado usa (GED ou HiSET) e partilhe os locais de teste da zona e qualquer ajuda com o preço.",
      "Mantenha a prática sem pressão; muitos alunos adultos trazem da escola ansiedade nos testes."
    ]
  }
};
