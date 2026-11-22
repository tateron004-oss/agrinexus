"use strict";

// Koach Learn course (Portuguese translation of shared/teacher-aide-paraprofessional.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US (ETS ParaPro, Title I, IDEA, FERPA, CPS, 911). The ParaPro is taken in English, so the English sentences
// and words being tested in the reading and writing practice are kept in English inside quotes; only the explanations are translated.

module.exports = {
  id: "teacher-aide-paraprofessional-pt",
  lang: "pt",
  translationOf: "teacher-aide-paraprofessional",
  category: "Workforce Development",
  name: "Preparação para Auxiliar de Professor e Paraprofissional",
  skills: "Verificar os requisitos do seu estado para paraprofissionais, Preparar-se para o ParaPro Assessment, Orientar uma atividade em pequeno grupo, Apoiar o comportamento e a privacidade dos alunos, Proteger as crianças e comunicar preocupações",
  outcome: "saber exatamente o que o seu estado e o seu distrito escolar pedem a um paraprofissional, preparar-se para o teste de leitura, escrita e matemática que muitas escolas usam, orientar uma atividade em pequeno grupo a partir do plano de um professor, e manter os alunos em segurança e as suas informações privadas.",
  about: [
    "Os auxiliares de professor, também chamados paraprofissionais ou paraeducadores, trabalham ao lado dos professores para ajudar os alunos a aprender. As escolas contratam-nos para turmas gerais, educação especial, primeiros anos e alunos que estão a aprender inglês. É um bom primeiro emprego na educação, e muitos auxiliares tornam-se depois professores.",
    "Este curso prepara você para o trabalho e para os passos da contratação. Você vai verificar as regras do seu próprio estado, praticar o tipo de perguntas de leitura, escrita e matemática do ParaPro Assessment da ETS (a organização que faz o teste), e aprender o trabalho do dia a dia: orientar pequenos grupos, apoiar o comportamento, manter privados os registos dos alunos e comunicar quando uma criança pode estar em perigo.",
    "Este curso prepara você; não lhe dá um certificado nem uma licença. O seu estado e o seu distrito escolar decidem quem pode ser contratado, e escolhem o teste e a nota mínima. Cada lição mostra onde verificar.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides, faça a tarefa \"Experimente agora\" e responda a duas perguntas rápidas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça o seu Plano de Preparação para Paraprofissional em uma ou duas páginas: (1) os requisitos do seu estado e de um distrito, com as páginas oficiais que verificou; (2) o caminho que vai usar (créditos universitários, um diploma ou um teste como o ParaPro) e um plano de estudo com datas; (3) uma atividade de 10 minutos em pequeno grupo, escrita a partir de um plano de professor de exemplo, com as pistas que vai dar e uma nota para o professor; e (4) os passos que daria e a quem ligaria se achasse que uma criança está a ser maltratada.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos que querem trabalhar em escolas: pais, voluntários escolares, motoristas de autocarro e funcionários da cantina que querem um trabalho na sala de aula, pessoas que mudam de carreira, pessoas que voltam da prisão (onde as regras do estado o permitem) e pessoas de comunidades desfavorecidas que querem servir as escolas do seu próprio bairro.",
    startingPoint: "A maioria tem o diploma do ensino secundário ou o GED (o exame equivalente nos EUA) e gosta de trabalhar com crianças. Muitos não estudam matemática nem gramática há anos, não conhecem as regras de contratação e nunca viram como uma sala de aula funciona do lado dos adultos.",
    gap: "As escolas precisam de auxiliares que cumpram as regras do estado, passem no teste exigido, sigam o plano do professor, lidem com o comportamento com calma e protejam as crianças. Os alunos precisam de conhecer as regras do seu próprio estado, rever a leitura, a escrita e a matemática, e aprender as tarefas do dia a dia, para se candidatarem com confiança e manterem o emprego.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas, com cada termo escolar explicado",
      "As regras mudam de estado para estado e de distrito para distrito; o curso ensina a verificar, não uma regra nacional única",
      "Aparelhos: um telefone ou um computador da biblioteca; a prática também se faz em papel",
      "Segurança das crianças e privacidade dos alunos: nenhum nome ou dado de alunos verdadeiros em nenhuma prática",
      "Verificação de antecedentes: a maioria das escolas exige-a; o curso diz isso e não promete emprego a ninguém"
    ],
    prerequisites: "Espera-se um diploma do ensino secundário ou equivalente para este trabalho. Quem precisar dele pode fazer primeiro os cursos de GED. O curso \"Everyday Math\" (Matemática do Dia a Dia) ajuda quem quiser praticar mais matemática."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o seu estado e um distrito escolar onde quer trabalhar", action: "fazer a lista das qualificações que pedem a um paraprofissional e das páginas oficiais que as indicam", standard: "indicando o caminho de estudos, o teste e a nota mínima, se houver, e a verificação de antecedentes" },
    { id: "O2", condition: "Com perguntas de prática de leitura, escrita e matemática como as do ParaPro Assessment", action: "responder às perguntas e explicar cada erro", standard: "acertando pelo menos 8 de 10" },
    { id: "O3", condition: "Com o plano de aula de um professor para um pequeno grupo", action: "orientar uma atividade curta de prática que segue o plano e dá pistas antes das respostas", standard: "mantendo o objetivo do professor e escrevendo uma nota de duas linhas para o professor" },
    { id: "O4", condition: "Com uma situação de comportamento ou de privacidade na sala de aula", action: "escolher passos calmos e positivos e partilhar informações dos alunos só com o pessoal que precisa delas", standard: "seguindo o plano do professor e o plano do aluno" },
    { id: "O5", condition: "Com uma situação em que uma criança pode estar a ser maltratada ou em perigo", action: "descrever os passos que dá, a quem conta e quando", standard: "comunicando no mesmo dia, como o seu estado e a sua escola exigem, sem investigar sozinho" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Obter as qualificações",
      lessons: [
        {
          title: "O trabalho e as regras do seu estado",
          objectives: ["O1"],
          minutes: 6,
          goal: "Fazer a lista das qualificações que o seu estado e um distrito escolar pedem a um paraprofissional.",
          text: [
            "Um paraprofissional trabalha sob a orientação de um professor. Pode ajudar um pequeno grupo a ler, ajudar um aluno com deficiência a acompanhar a aula, vigiar o refeitório ou o recreio, ou preparar materiais. O professor planeia e dá as notas; você apoia. Os nomes do cargo incluem auxiliar de professor, assistente pedagógico, paraeducador e auxiliar de educação especial.",
            "As regras federais aplicam-se aos auxiliares que ajudam a ensinar em escolas pagas pelo Title I, o programa federal para escolas com muitas famílias de baixos rendimentos. Esses auxiliares precisam de um diploma do ensino secundário ou equivalente e de uma destas coisas: dois anos de estudos universitários, um diploma de associate degree (curso superior de dois anos) ou mais, ou passar num teste formal estadual ou local de leitura, escrita e matemática. Muitas escolas usam o ParaPro Assessment da ETS como esse teste.",
            "Cada estado, e às vezes cada distrito, junta as suas próprias regras. A ETS indica uma nota mínima do ParaPro para cada estado que o usa; em alguns estados cada distrito escolhe a sua própria nota, e alguns estados usam outros testes (Rhode Island agora só aceita o ParaPathways). Quase todas as escolas também exigem verificação de antecedentes e impressões digitais. Por isso, verifique sempre o seu estado e o seu distrito antes de pagar um teste.",
            "Onde verificar: o site do departamento de educação do seu estado, o anúncio de emprego no site do distrito e a página de requisitos por estado em parapro.ets.org."
          ],
          steps: ["Procure no site do departamento de educação do seu estado as palavras \"paraprofessional\" ou \"paraeducator\".", "Abra um anúncio de emprego verdadeiro de um distrito perto de você e leia os requisitos.", "Veja em parapro.ets.org o teste e a nota mínima do seu estado.", "Anote o caminho que já cumpre ou vai usar: créditos universitários, um diploma ou o teste.", "Anote a verificação de antecedentes e outros passos (exame de saúde, formação)."],
          words: [["Paraprofissional", "um trabalhador da escola que ajuda os alunos a aprender sob a orientação de um professor; também chamado auxiliar de professor ou paraeducador."], ["Title I", "um programa federal dos EUA que dá dinheiro extra a escolas com muitos alunos de famílias de baixos rendimentos."], ["ParaPro Assessment", "um teste da ETS de leitura, escrita e matemática, e de como usar estas competências para ajudar na sala de aula."], ["Nota mínima", "a nota mais baixa que o seu estado ou distrito aceita."], ["Verificação de antecedentes", "uma consulta dos registos criminais e outros registos, que as escolas fazem antes de contratar."]],
          slides: [
            { title: "O que faz um paraprofissional", bullets: ["Trabalha sob a orientação de um professor", "Ajuda pequenos grupos e alunos sozinhos", "Apoia alunos com deficiência e alunos que aprendem inglês", "Prepara materiais e ajuda a vigiar"] },
            { title: "Regra federal para auxiliares do Title I", bullets: ["Diploma do ensino secundário ou equivalente", "MAIS dois anos de universidade, um associate degree ou um teste estadual ou local aprovado"] },
            { title: "O seu estado e distrito juntam regras próprias", bullets: ["Uns usam o ParaPro; outros usam outros testes", "A nota mínima muda por estado, às vezes por distrito", "Verificação de antecedentes e impressões digitais são comuns"] },
            { title: "Onde verificar", bullets: ["O departamento de educação do seu estado", "O anúncio de emprego do distrito", "parapro.ets.org: página de requisitos por estado"] }
          ],
          sources: [
            { name: "34 CFR 200.58: qualificações dos paraprofissionais do Title I (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/34/200.58" },
            { name: "ETS ParaPro: requisitos e notas mínimas por estado", url: "https://parapro.ets.org/state-requirements.html" },
            { name: "ETS ParaPro: sobre o teste", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Encontre um anúncio verdadeiro de emprego para paraprofissional de um distrito escolar perto de você. Anote: o nome do cargo, os estudos ou o teste que pede, a verificação de antecedentes e o salário, se estiver indicado. Depois encontre o seu estado na página de requisitos por estado da ETS e anote se ele usa o ParaPro.",
          youCanNow: "fazer a lista do que o seu estado e um distrito perto de você pedem a um paraprofissional, e mostrar onde verificou.",
          quickCheck: [
            { objective: "O1", q: "Junto com um diploma do ensino secundário, que caminho cumpre a regra federal para um auxiliar do Title I?", options: ["Cinco anos a tomar conta de crianças", "Uma carta de condução", "Um associate degree", "Uma carta de um pai"], answer: 2, why: "A regra indica dois anos de universidade, um associate degree ou mais, ou um teste formal estadual ou local." },
            { objective: "O1", q: "Um amigo diz que a nota mínima do ParaPro é igual em todo o lado. O que faz?", options: ["Verifica o seu estado, e o seu distrito, nas páginas oficiais", "Acredita e marca o teste", "Não faz o teste e candidata-se na mesma", "Pede ao amigo para fazer o teste por você"], answer: 0, why: "As notas mínimas são definidas por cada estado e, em alguns estados, por cada distrito." }
          ]
        },
        {
          title: "Prática do ParaPro: leitura e escrita",
          objectives: ["O2"],
          minutes: 5,
          goal: "Responder a perguntas de prática de leitura e escrita e explicar cada erro.",
          text: [
            "A ETS diz que o ParaPro mede competências e conhecimentos de leitura, escrita e matemática, e a sua capacidade de os usar para ajudar na sala de aula. Por isso, algumas perguntas pedem que leia ou escreva bem, e outras perguntam como ajudaria um aluno na leitura ou na escrita. O teste é em inglês.",
            "As perguntas de leitura podem pedir a ideia principal de um texto, um pormenor, o que uma palavra significa pelas palavras à volta, ou o que o autor dá a entender sem o dizer. Leia primeiro a pergunta, depois o texto, e volte ao texto para encontrar a prova.",
            "As perguntas de escrita podem pedir que encontre um erro de gramática, ortografia ou pontuação, ou que escolha a melhor forma de corrigir uma frase. As perguntas sobre a sala de aula podem perguntar como ajudar um aluno a soletrar os sons de uma palavra ou a corrigir uma frase corrida (run-on sentence).",
            "A ETS oferece um Study Companion e um Study Guide gratuitos, com perguntas de exemplo, na sua página de preparação. Use-os; mostram o tipo verdadeiro de perguntas melhor do que qualquer outra fonte."
          ],
          steps: ["Leia a pergunta antes do texto.", "Encontre a linha do texto que prova a sua resposta.", "Nas perguntas de escrita, leia a frase em voz alta na sua cabeça e escute o que soa mal.", "Risque as respostas que sabe que estão erradas e depois escolha.", "Para cada erro, escreva uma linha: porque é que a resposta certa está certa."],
          words: [["Ideia principal", "aquilo de que um texto trata sobretudo."], ["Pistas do contexto", "as palavras à volta de uma palavra nova que ajudam a adivinhar o seu significado."], ["Frase corrida (run-on sentence)", "duas frases juntas sem a pontuação certa ou sem uma palavra de ligação."], ["Fónica (phonics)", "ligar as letras aos seus sons para ler palavras."]],
          slides: [
            { title: "O que o ParaPro mede", bullets: ["Leitura, escrita e matemática", "Usar essas competências para ajudar os alunos na aula"] },
            { title: "Perguntas de leitura", bullets: ["Ideia principal e pormenores", "Significado de palavras pelas pistas do contexto", "O que o autor dá a entender", "Encontrar a prova no texto"] },
            { title: "Perguntas de escrita", bullets: ["Encontrar o erro de gramática, ortografia ou pontuação", "Escolher a melhor correção para uma frase", "Como ajudar um aluno a corrigir o que escreveu"] },
            { title: "Estudar com inteligência", bullets: ["Use o Study Companion e o Study Guide gratuitos da ETS", "Escreva o porquê de cada erro"] }
          ],
          sources: [
            { name: "ETS ParaPro: preparação para o teste (Study Companion e Study Guide)", url: "https://parapro.ets.org/parapro-test-prep.html" },
            { name: "ETS ParaPro: sobre o teste", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Pratique agora (as frases do teste estão em inglês). 1) Corrija esta frase: \"The students was excited, they ran to the window.\" 2) Em \"The path was so narrow that two people could not walk side by side,\" o que significa narrow? 3) Escreva uma frase sobre como ajudaria uma criança que lê \"ship\" como \"sip\". Verifique: \"The students were excited, so they ran to the window\" (ou use um ponto final); narrow significa estreito, não largo; aponte para o \"sh\" e pratiquem juntos esse som.",
          youCanNow: "responder a perguntas de prática de leitura e escrita, encontrar a prova e explicar os seus erros.",
          quickCheck: [
            { objective: "O2", q: "Que frase em inglês está escrita corretamente?", options: ["\"Her and me helped the class.\"", "\"The children was ready.\"", "\"Each of the boys have a book.\"", "\"The teacher and I set up the tables.\""], answer: 3, why: "\"The teacher and I\" é o sujeito, e \"set up\" concorda com ele; as outras têm erros no sujeito ou no verbo." },
            { objective: "O2", q: "Um texto diz: \"The garden was barren; nothing grew there.\" O que significa barren?", options: ["Cheio de flores", "Que não produz nada", "Muito molhado", "Plantado há pouco"], answer: 1, why: "A pista \"nothing grew there\" (nada crescia lá) mostra que barren significa que não produz nada." }
          ]
        },
        {
          title: "Prática do ParaPro: matemática e o seu plano de estudo",
          objectives: ["O2", "O1"],
          minutes: 6,
          goal: "Responder a perguntas de prática de matemática e escrever um plano de estudo com uma data de teste.",
          text: [
            "A matemática do ParaPro cobre o básico com que você ajudaria os alunos: sentido dos números, somar, subtrair, multiplicar e dividir, frações, decimais e percentagens, medidas simples, ler tabelas e gráficos, e equações simples. Algumas perguntas perguntam como explicaria uma ideia de matemática a uma criança.",
            "Trabalhe devagar e mostre os seus passos num papel de rascunho. Nos problemas com texto: encontre a pergunta, tire os números, escolha a operação, resolva e depois pergunte: \"Esta resposta faz sentido?\"",
            "Um plano de estudo transforma \"um dia\" numa data. Veja como se inscrever (num centro de testes ou em casa, onde houver), confirme o preço e as regras do documento de identificação no site oficial, escolha uma data de teste daqui a três a seis semanas e dê a cada semana um foco: leitura, escrita, matemática e depois um conjunto completo de prática."
          ],
          steps: ["Leia o problema duas vezes e faça um círculo à volta da pergunta.", "Escreva os números de que precisa.", "Escolha a operação e resolva no papel.", "Confirme que a resposta faz sentido.", "Ponha num calendário a data do teste e o foco de estudo de cada semana."],
          words: [["Fração", "uma parte de um todo, como 3/4."], ["Percentagem", "um número em 100; 25% quer dizer 25 em 100."], ["Equação", "uma frase de matemática com um sinal de igual, como 3 + x = 10."]],
          slides: [
            { title: "Matemática no ParaPro", bullets: ["Sentido dos números e as quatro operações", "Frações, decimais e percentagens", "Medidas, gráficos e equações simples", "Como explicar matemática a uma criança"] },
            { title: "Resolver problemas com texto", bullets: ["Faça um círculo à volta da pergunta", "Tire os números", "Escolha a operação e resolva", "A resposta faz sentido?"] },
            { title: "O seu plano de estudo", bullets: ["Veja a inscrição, o preço e as regras de identificação no site oficial", "Escolha uma data daqui a 3 a 6 semanas", "Um foco por semana, depois um conjunto completo de prática"] }
          ],
          sources: [
            { name: "ETS ParaPro: como se inscrever", url: "https://parapro.ets.org/how-to-register.html" },
            { name: "ETS ParaPro: requisitos de identificação", url: "https://parapro.ets.org/test-takers/register-requirements.html" }
          ],
          tryIt: "Pratique agora. 1) 24 alunos dividem-se igualmente por 6 mesas. Quantos ficam em cada mesa? 2) Quanto é 3/4 em percentagem? 3) 3 + x = 10; quanto é x? 4) Uma turma lê 12 páginas na segunda-feira e 15 na terça-feira. Quantas páginas ao todo? Respostas: 4, 75%, 7, 27. Depois escreva o seu plano de estudo: a data do teste e um foco para cada semana.",
          youCanNow: "resolver problemas simples com texto passo a passo e fazer um plano de estudo com uma data de teste verdadeira.",
          quickCheck: [
            { objective: "O2", q: "Cada camisola custa $8. Um professor compra 5. Qual é o total?", options: ["$13", "$35", "$40", "$45"], answer: 2, why: "5 x $8 = $40." },
            { objective: "O1", q: "O que deve fazer ANTES de pagar o ParaPro?", options: ["Confirmar que o seu estado ou distrito o aceita e que nota exige", "Comprar uma calculadora nova", "Deixar o seu emprego atual", "Pedir a um aluno para lhe fazer perguntas"], answer: 0, why: "A ETS aconselha a confirmar que o seu estado ou serviço local aceita o teste antes de o marcar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Obter as qualificações",
        questions: [
          { objective: "O1", q: "Quem decide a nota mínima do ParaPro de que precisa?", options: ["O seu estado e, em alguns estados, o seu distrito", "O professor com quem trabalha", "Os pais de cada aluno", "Qualquer site que vende preparação para testes"], answer: 0, why: "A ETS indica as notas mínimas por estado; em alguns estados, os distritos escolhem a sua própria nota." },
          { objective: "O1", q: "Qual é o melhor sítio para verificar os requisitos de um distrito?", options: ["Uma publicação numa rede social", "O próprio anúncio de emprego ou site do distrito", "Um amigo que trabalhou lá há anos", "Um anúncio de preparação para testes"], answer: 1, why: "O anúncio do próprio distrito é a fonte oficial e atual." },
          { objective: "O2", q: "Que frase corrige a frase corrida em inglês \"I finished my work I went to recess\"?", options: ["\"I finished my work I, went to recess.\"", "\"I finished, my work I went to recess.\"", "\"I finished my work, then I went to recess.\"", "\"I finished my work, so I went to recess.\""], answer: 3, why: "Uma vírgula com a palavra de ligação \"so\" junta corretamente duas frases completas." },
          { objective: "O2", q: "Quanto é 20% de 50?", options: ["5", "25", "10", "70"], answer: 2, why: "20% é 0,2, e 0,2 x 50 = 10." },
          { objective: "O2", q: "Numa pergunta de leitura, onde deve procurar a prova da sua resposta?", options: ["No próprio texto", "Na sua opinião", "Na opção de resposta mais longa", "No título do teste"], answer: 0, why: "A resposta certa é apoiada por palavras do texto." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabalhar na sala de aula",
      lessons: [
        {
          title: "Orientar um pequeno grupo a partir do plano do professor",
          objectives: ["O3"],
          minutes: 5,
          goal: "Orientar uma atividade curta de prática em pequeno grupo que segue o plano de um professor.",
          text: [
            "O professor decide o que os alunos aprendem; você ajuda-os a praticar. Antes de o grupo começar, pergunte ao professor: Qual é o objetivo? O que devem os alunos saber fazer no fim? Que ajuda posso dar?",
            "Dê pistas antes das respostas. Uma boa ordem é: espere alguns segundos, faça uma pergunta que mostre o caminho (\"Com que som começa esta palavra?\"), mostre um exemplo parecido e só depois mostre a resposta. A isto chama-se andaime (scaffolding): você dá apoio e depois retira-o aos poucos.",
            "Elogie o esforço com palavras exatas (\"Você reviu o seu trabalho, foi assim que encontrou o erro\"). Mantenha o grupo na tarefa com instruções curtas e claras. No fim, escreva uma nota curta para o professor: quem percebeu, quem teve dificuldade e em quê."
          ],
          steps: ["Pergunte ao professor o objetivo e que ajuda é permitida.", "Prepare os materiais antes de os alunos chegarem.", "Explique a tarefa em uma ou duas frases curtas.", "Dê pistas antes das respostas: espere, pergunte, mostre um exemplo e depois mostre a resposta.", "No fim, escreva uma nota de duas linhas para o professor."],
          words: [["Plano de aula", "o plano escrito do professor sobre o que os alunos vão aprender e como."], ["Andaime (scaffolding)", "ajuda que permite a um aluno fazer uma tarefa e que depois é retirada passo a passo."], ["Tempo de espera", "alguns segundos de silêncio depois de uma pergunta, para os alunos pensarem."]],
          slides: [
            { title: "O professor orienta; você apoia", bullets: ["Pergunte: qual é o objetivo?", "Pergunte: que ajuda posso dar?"] },
            { title: "Pistas antes das respostas", bullets: ["Espere alguns segundos", "Faça uma pergunta que mostre o caminho", "Mostre um exemplo parecido", "Só depois mostre a resposta"] },
            { title: "Manter o grupo a avançar", bullets: ["Instruções curtas e claras", "Elogie o esforço com palavras exatas", "No fim, uma nota de duas linhas para o professor"] }
          ],
          tryIt: "Aqui está um plano de professor de exemplo: \"Objetivo: os alunos somam números de dois algarismos com transporte (\"e vai um\"). Grupo: 4 alunos, 10 minutos.\" Escreva a sua atividade: como a explica em duas frases, três problemas de prática, duas pistas que vai dar antes de mostrar uma resposta e uma nota de duas linhas para o professor. Use iniciais inventadas, nunca nomes verdadeiros de alunos.",
          youCanNow: "transformar o plano de um professor numa atividade curta em pequeno grupo, com pistas e uma nota de retorno.",
          quickCheck: [
            { objective: "O3", q: "Um aluno não consegue ler uma palavra. Qual é o seu PRIMEIRO passo?", options: ["Dizer-lhe logo a palavra", "Esperar e depois perguntar com que som começa", "Passar para o aluno seguinte", "Mandá-lo adivinhar"], answer: 1, why: "O tempo de espera e uma pergunta que mostra o caminho deixam o aluno pensar primeiro." },
            { objective: "O3", q: "Quem decide o que o pequeno grupo deve aprender?", options: ["O auxiliar", "Os alunos", "O professor", "Os pais"], answer: 2, why: "O professor planeia a aula; o auxiliar ajuda os alunos a praticá-la." }
          ]
        },
        {
          title: "Apoio ao comportamento, educação especial e privacidade",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escolher passos calmos e positivos perante um comportamento e partilhar informações dos alunos só com o pessoal que precisa delas.",
          text: [
            "O comportamento é uma forma de os alunos comunicarem. Mantenha a calma e use uma voz baixa e firme. Lembre a regra aos alunos de forma positiva (\"Pés que andam devagar\" em vez de \"Não corras\"). Repare nos alunos que estão a fazer o que está certo e elogie-os. Dê escolhas quando puder (\"Queres começar pela página vermelha ou pela azul?\"). Siga o plano da turma do professor e chame logo o professor ou o pessoal da escola se alguém puder magoar-se.",
            "Muitos auxiliares trabalham com alunos que têm um IEP, um Programa de Educação Individualizado previsto na lei federal de educação especial (IDEA). O IEP ou um plano de comportamento pode dizer exatamente que apoios um aluno recebe, como mais tempo, uma pausa calma ou um horário com imagens. Pergunte ao professor que partes do plano você aplica e siga-as sempre.",
            "As informações dos alunos são privadas. A FERPA é uma lei federal que dá aos pais o direito de ver os registos escolares do filho e algum controlo sobre quem mais os vê. Como auxiliar, partilhe notas, comportamento, saúde ou pormenores do IEP só com o pessoal da escola que precisa deles para o seu trabalho. Nunca fale dos alunos na comunidade, não publique nada sobre eles na internet e não lhes tire fotografias com o seu telefone."
          ],
          steps: ["Mantenha a calma e use uma voz baixa.", "Diga a regra como o que fazer, não como o que não fazer.", "Elogie os alunos que a cumprem.", "Siga o plano do professor e o IEP ou o plano de comportamento do aluno.", "Peça ajuda logo se alguém puder magoar-se.", "Partilhe dados dos alunos só com o pessoal que precisa deles."],
          words: [["IEP", "Individualized Education Program (Programa de Educação Individualizado): um plano escrito para um aluno com deficiência, previsto na lei federal IDEA."], ["IDEA", "Individuals with Disabilities Education Act, a lei federal de educação especial dos EUA."], ["FERPA", "uma lei federal que protege a privacidade dos registos escolares dos alunos."], ["Apoio positivo ao comportamento", "ensinar e elogiar o comportamento que se quer, e não só reagir aos problemas."]],
          slides: [
            { title: "Apoio ao comportamento calmo e positivo", bullets: ["Voz baixa e firme", "Diga o que FAZER: \"Pés que andam devagar\"", "Elogie os alunos que fazem bem", "Dê escolhas quando puder"] },
            { title: "Alunos com um IEP", bullets: ["IEP: um plano escrito previsto na IDEA", "Pergunte que partes você aplica", "Siga-o sempre"] },
            { title: "Manter privadas as informações dos alunos", bullets: ["A FERPA protege os registos escolares", "Partilhe só com o pessoal que precisa", "Sem conversas na comunidade, sem publicações, sem fotografias"] }
          ],
          sources: [
            { name: "Departamento de Educação dos EUA: O que é a FERPA?", url: "https://studentprivacy.ed.gov/faq/what-ferpa" },
            { name: "Departamento de Educação dos EUA: IDEA", url: "https://sites.ed.gov/idea/" }
          ],
          tryIt: "Situação: durante a leitura, um aluno (chame-lhe J.) atira o livro e diz \"Isto é estúpido.\" O plano de comportamento dele diz que pode fazer uma pausa de dois minutos no canto da calma. Escreva o que diz e faz, por ordem. Depois escreva a quem contaria isto mais tarde e a quem NÃO contaria.",
          youCanNow: "responder ao comportamento com calma e de forma positiva, seguir o plano de um aluno e manter privadas as informações dos alunos.",
          quickCheck: [
            { objective: "O4", q: "Que instrução está dita de forma positiva?", options: ["\"Pára de gritar!\"", "\"Não mexas nisso.\"", "\"Deixa de correr.\"", "\"Usa uma voz baixa, por favor.\""], answer: 3, why: "Diz ao aluno o que fazer, em vez de só dizer o que não fazer." },
            { objective: "O4", q: "Um vizinho na loja pergunta como está um aluno da sua turma. Você:", options: ["Conta alguns pormenores, porque é um vizinho", "Diz com educação que não pode falar dos alunos", "Mostra-lhe o trabalho do aluno no seu telefone", "Descreve o IEP do aluno"], answer: 1, why: "As informações dos alunos são privadas e só se partilham com o pessoal da escola que precisa delas." }
          ]
        },
        {
          title: "Proteger as crianças e comunicar preocupações",
          objectives: ["O5", "O1"],
          minutes: 6,
          goal: "Descrever os passos que dá quando acha que uma criança pode estar a ser maltratada, e a quem conta.",
          text: [
            "Todos os adultos de uma escola ajudam a proteger as crianças. Se uma criança está em perigo agora mesmo, ligue para o 911 (ou para o número de emergência local) e peça ajuda imediatamente.",
            "As leis dos estados indicam as pessoas que são obrigadas a comunicar suspeitas de abuso ou negligência de crianças, chamadas denunciantes obrigatórios (mandated reporters). Em muitos estados, o pessoal da escola, incluindo os auxiliares, está nessa lista. O seu dever é comunicar o que viu ou ouviu, não prová-lo. Aprenda na sua formação a lei do seu estado e a política da sua escola: a quem comunica (muitas vezes a linha estadual de denúncia de abuso de crianças ou os serviços de proteção de crianças) e em quanto tempo. Em alguns estados, contar a um professor ou ao diretor não substitui a sua própria comunicação.",
            "Se uma criança lhe conta alguma coisa: mantenha a calma, ouça e agradeça-lhe por contar. Não faça perguntas que sugerem a resposta e não investigue. Não prometa guardar segredo; diga que vai pedir ajuda a pessoas cujo trabalho é proteger as crianças. Escreva as palavras exatas da criança, a data e a hora, e comunique no mesmo dia. Mantenha isto em privado de todos os que não precisam de saber.",
            "A National Child Abuse Hotline da Childhelp (linha nacional sobre abuso de crianças), 1-800-422-4453, dá aconselhamento e ajuda a qualquer hora; não é ela própria uma linha de denúncia, mas pode ajudar você a encontrar onde comunicar no seu estado."
          ],
          steps: ["Se a criança está em perigo agora, ligue para o 911.", "Ouça com calma; não investigue nem faça perguntas que sugerem a resposta.", "Não prometa guardar segredo.", "Escreva as palavras exatas da criança, a data e a hora.", "Comunique no mesmo dia, como dizem a lei do seu estado e a política da escola.", "Mantenha isto em privado de todos os que não precisam de saber."],
          words: [["Denunciante obrigatório (mandated reporter)", "uma pessoa que a lei obriga a comunicar suspeitas de abuso ou negligência de crianças."], ["Negligência", "quando as necessidades básicas de uma criança, como comida, casa, cuidados ou vigilância, não são satisfeitas."], ["Serviços de proteção de crianças (CPS)", "o serviço do estado ou do condado que investiga as comunicações de abuso e negligência de crianças."], ["Pergunta que sugere a resposta", "uma pergunta que dá a ideia da resposta, como \"O teu pai bateu-te?\""]],
          slides: [
            { title: "Perigo agora mesmo?", bullets: ["Ligue para o 911 ou para o número de emergência local", "Peça ajuda imediatamente"] },
            { title: "Denunciantes obrigatórios", bullets: ["As leis dos estados dizem quem tem de comunicar", "Em muitos estados isso inclui o pessoal da escola", "Comunique o que viu ou ouviu; não tem de provar"] },
            { title: "Se uma criança lhe contar", bullets: ["Mantenha a calma, ouça, agradeça", "Sem perguntas que sugerem a resposta, sem investigar", "Não prometa segredo", "Escreva as palavras exatas, a data e a hora"] },
            { title: "Comunique no mesmo dia", bullets: ["Siga a lei do seu estado e a política da escola", "Muitas vezes a linha estadual de denúncia ou os CPS", "Mantenha em privado"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway: comunicação obrigatória de abuso e negligência de crianças", url: "https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway: como comunicar abuso e negligência de crianças", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway: pesquisa das leis dos estados", url: "https://www.childwelfare.gov/resources/states-territories-tribes/state-statutes/" },
            { name: "Childhelp: National Child Abuse Hotline", url: "https://www.childhelphotline.org/" }
          ],
          tryIt: "Tarefa final: escreva o seu Plano de Preparação para Paraprofissional. Inclua os requisitos do seu estado e do distrito com os links, o seu caminho e as datas de estudo, a sua atividade em pequeno grupo da Lição 4 e os passos de segurança desta lição, com o número de denúncia de abuso de crianças do seu estado (procure-o na página \"how to report\" do Child Welfare Information Gateway).",
          youCanNow: "dizer o que fazer quando uma criança pode estar a ser maltratada, a quem comunica e quando, e pôr no papel todo o seu caminho até um emprego de paraprofissional.",
          quickCheck: [
            { objective: "O5", q: "Uma criança conta-lhe que um adulto em casa a magoa e pede-lhe para não contar. O que diz?", options: ["\"Prometo que não conto a ninguém.\"", "\"Tens a certeza? Isso não parece verdade.\"", "\"Obrigado por me contares. Tenho de contar a pessoas cujo trabalho é proteger-te.\"", "\"Conta-me todos os pormenores para eu decidir.\""], answer: 2, why: "Nunca prometa segredo, nem questione ou julgue; peça ajuda às pessoas certas." },
            { objective: "O5", q: "Quando deve um denunciante obrigatório comunicar uma preocupação?", options: ["Só depois de encontrar provas", "Depois de falar primeiro com a família", "No fim do ano letivo", "No mesmo dia, como dizem a lei do estado e a política da escola"], answer: 3, why: "Você comunica o que viu ou ouviu, depressa; provar é trabalho dos CPS ou da polícia." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Trabalhar na sala de aula",
        questions: [
          { objective: "O3", q: "O que é o andaime (scaffolding)?", options: ["Ajuda que permite a um aluno fazer uma tarefa e que depois é retirada aos poucos", "Fazer o trabalho pelo aluno", "Um castigo por respostas erradas", "Materiais de construção para a sala de aula"], answer: 0, why: "O andaime dá apoio e retira-o devagar à medida que o aluno aprende." },
          { objective: "O3", q: "O seu grupo termina. O que entrega ao professor?", options: ["Nada; o professor adivinha", "Uma nota curta: quem percebeu e quem teve dificuldade em quê", "O número de telefone de casa de cada aluno", "Um novo plano de aula escrito por você"], answer: 1, why: "Uma nota curta ajuda o professor a planear o passo seguinte." },
          { objective: "O4", q: "O IEP de uma aluna diz que ela tem mais tempo nos testes. O professor pede-lhe para aplicar o teste. Você:", options: ["Dá-lhe o mesmo tempo que aos outros, para ser justo", "Pergunta-lhe se hoje quer mais tempo", "Dá-lhe o tempo extra, como diz o IEP", "Deixa-a não fazer o teste"], answer: 2, why: "Os apoios de um IEP são obrigatórios e têm de ser seguidos sempre." },
          { objective: "O4", q: "Que escolha respeita a FERPA?", options: ["Publicar uma fotografia engraçada da turma nas suas redes sociais", "Falar das notas de um aluno num jantar de família", "Enviar por SMS a um amigo o relatório de comportamento de um aluno", "Falar do progresso de um aluno só com o professor"], answer: 3, why: "Os registos e os dados dos alunos só se partilham com o pessoal da escola que precisa deles." },
          { objective: "O5", q: "Vê uma criança com uma ferida grave que diz ter medo de ir para casa hoje. O que vem primeiro?", options: ["Pedir ajuda logo, ligando para o 911 se a criança está em perigo agora, e comunicar no mesmo dia", "Ligar aos pais para perguntar o que aconteceu", "Esperar uma semana para ver se volta a acontecer", "Perguntar aos colegas da criança o que sabem"], answer: 0, why: "Perigo agora quer dizer ajuda de emergência; depois comunique como o seu estado e a escola exigem, sem investigar sozinho." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para Auxiliar de Professor e Paraprofissional",
    questions: [
      { objective: "O1", q: "O que descreve melhor um paraprofissional?", options: ["Um trabalhador da escola que ajuda os alunos a aprender sob a orientação de um professor", "A pessoa que planeia e dá nota a todas as aulas", "Apenas o assistente do diretor da escola", "Um professor substituto com licença completa"], answer: 0, why: "Os auxiliares apoiam a aprendizagem; o professor planeia e dá as notas." },
      { objective: "O1", q: "Pela regra federal, um auxiliar do Title I com diploma também precisa de uma destas. Qual NÃO é uma das opções?", options: ["Dois anos de estudos universitários", "Um associate degree ou mais", "Passar num teste formal estadual ou local", "Um ano de voluntariado na escola"], answer: 3, why: "As três opções são dois anos de universidade, um diploma ou um teste académico formal." },
      { objective: "O1", q: "O que quase todas as escolas exigem antes de contratar um auxiliar?", options: ["Uma licença de professor", "Uma verificação de antecedentes", "Um mestrado", "Um carro"], answer: 1, why: "As escolas verificam os antecedentes para proteger as crianças." },
      { objective: "O1", q: "Que fonte lhe diz a nota mínima do ParaPro do seu estado?", options: ["Um anúncio de preparação para testes", "Um colega", "A página de requisitos por estado em parapro.ets.org e o seu estado ou distrito", "Qualquer fórum na internet"], answer: 2, why: "A ETS indica as notas mínimas por estado; o seu estado ou distrito confirma-as." },
      { objective: "O2", q: "O ParaPro mede:", options: ["Factos de ciências e de história", "A velocidade a escrever no teclado", "Só as regras da sala de aula", "Leitura, escrita e matemática, e usá-las para ajudar na aula"], answer: 3, why: "A ETS diz que mede leitura, escrita e matemática e a sua aplicação no ensino na sala de aula." },
      { objective: "O2", q: "Que palavra em inglês completa a frase? \"Neither the teacher nor the students ___ ready.\"", options: ["were", "was", "is", "be"], answer: 0, why: "Com \"neither...nor\", o verbo concorda com o sujeito mais próximo, \"students\", por isso \"were\"." },
      { objective: "O2", q: "Quanto é 1/2 + 1/4?", options: ["2/6", "3/4", "1/8", "2/4"], answer: 1, why: "1/2 é 2/4, e 2/4 + 1/4 = 3/4." },
      { objective: "O2", q: "Uma turma de 28 vai a uma visita de estudo. Cada carrinha leva 8. Quantas carrinhas são precisas?", options: ["3", "3,5", "4", "5"], answer: 2, why: "28 / 8 = 3,5, e não se pode levar meia carrinha, por isso são precisas 4." },
      { objective: "O2", q: "Qual é a melhor forma de usar o Study Companion gratuito da ETS?", options: ["Ler só as respostas", "Saltar as perguntas que errou", "Usá-lo só na noite antes do teste", "Fazer as perguntas de exemplo e escrever o porquê de cada erro"], answer: 3, why: "Explicar cada erro mostra o que estudar a seguir." },
      { objective: "O3", q: "Antes de orientar um pequeno grupo, o que deve perguntar ao professor?", options: ["O objetivo e que ajuda pode dar", "Se pode sair mais cedo", "Que alunos são os mais inteligentes", "Se pode mudar a aula"], answer: 0, why: "Saber o objetivo e a ajuda permitida mantém você no plano do professor." },
      { objective: "O3", q: "Um aluno dá uma resposta errada. Qual é o melhor passo seguinte?", options: ["Dizer \"Errado\" e continuar", "Fazer uma pergunta que aponte para o erro", "Dar logo a resposta", "Deixar outro aluno rir-se"], answer: 1, why: "Uma pergunta que aponta o caminho deixa o aluno encontrar e corrigir o erro." },
      { objective: "O3", q: "Que elogio ajuda mais?", options: ["\"Bom.\"", "\"És tão inteligente.\"", "\"Reviste o teu trabalho, e foi assim que encontraste o erro.\"", "\"Finalmente.\""], answer: 2, why: "Um elogio exato ao esforço diz ao aluno o que deve continuar a fazer." },
      { objective: "O4", q: "Um aluno está a ficar nervoso. Qual é um passo calmo e positivo?", options: ["Levantar a voz para ele ouvir", "Usar uma voz baixa e dar uma escolha", "Ignorá-lo por completo", "Ameaçar ligar aos pais"], answer: 1, why: "Uma voz calma e uma escolha ajudam o aluno a acalmar-se." },
      { objective: "O4", q: "O que é um IEP?", options: ["Um plano escrito para um aluno com deficiência, previsto na IDEA", "Um programa de almoço escolar", "Um plano de salário dos professores", "Um teste para auxiliares"], answer: 0, why: "IEP quer dizer Individualized Education Program (Programa de Educação Individualizado), um plano previsto na lei federal IDEA." },
      { objective: "O4", q: "O pai de outro aluno pergunta-lhe sobre o comportamento de um colega de turma. Você:", options: ["Explica o que aconteceu", "Partilha o plano de comportamento do colega", "Mostra-lhe as notas sobre o incidente", "Diz que não pode partilhar informações de outros alunos e indica-lhe o professor"], answer: 3, why: "As informações dos alunos são privadas; partilhe-as só com o pessoal que precisa delas." },
      { objective: "O4", q: "Pode tirar fotografias aos alunos com o seu próprio telefone?", options: ["Sim, se forem giros", "Sim, se não as publicar", "Não; siga a política da escola e mantenha as imagens dos alunos em privado", "Só nas visitas de estudo"], answer: 2, why: "As fotografias são informações dos alunos; siga a política da escola." },
      { objective: "O5", q: "O que é um denunciante obrigatório?", options: ["Uma pessoa que a lei obriga a comunicar suspeitas de abuso ou negligência de crianças", "Um repórter de notícias em eventos da escola", "Um aluno que denuncia o bullying", "Um pai voluntário"], answer: 0, why: "As leis dos estados indicam os profissionais que têm de comunicar suspeitas de abuso ou negligência." },
      { objective: "O5", q: "Como denunciante obrigatório, qual é o seu trabalho?", options: ["Provar que o abuso aconteceu", "Interrogar a família", "Comunicar o que viu ou ouviu, como o seu estado e a escola exigem", "Esperar até ter a certeza"], answer: 2, why: "Você comunica; os CPS ou a polícia investigam." },
      { objective: "O5", q: "Uma criança à sua frente está em perigo agora mesmo. Você:", options: ["Envia um email ao diretor", "Liga para o 911 ou para o número de emergência local", "Escreve uma nota para amanhã", "Pede à criança para esperar"], answer: 1, why: "Perigo imediato quer dizer ajuda de emergência primeiro." },
      { objective: "O5", q: "O que deve escrever depois de uma criança lhe contar que está a ser maltratada?", options: ["O seu palpite sobre quem o fez", "Perguntas para fazer à família", "Nada; basta lembrar-se", "As palavras exatas da criança, a data e a hora"], answer: 3, why: "As palavras exatas, a data e a hora fazem uma comunicação clara e justa." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 7, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Requisitos verificados", objective: "O1", notYet: "Os requisitos foram adivinhados ou vêm de uma fonte não oficial.", meets: "Indica o caminho de estudos, o teste e a nota (se houver) e a verificação de antecedentes do estado e de um distrito, com links oficiais.", exceeds: "Também compara dois distritos e anota o salário ou outros passos, como a formação." },
      { name: "Plano de estudo", objective: "O2", notYet: "Sem data de teste, ou sem plano do que estudar.", meets: "Uma data de teste verdadeira (ou um caminho sem teste) e um foco de estudo por semana.", exceeds: "Inclui as notas dos conjuntos de prática e os pontos fracos que mostraram." },
      { name: "Atividade em pequeno grupo", objective: "O3", notYet: "A atividade não corresponde ao objetivo do professor, ou dá as respostas primeiro.", meets: "Segue o objetivo, tem exercícios de prática, duas pistas antes das respostas e uma nota para o professor.", exceeds: "Também planeia uma forma rápida de ver que alunos precisam de mais ajuda." },
      { name: "Comportamento e privacidade", objective: "O4", notYet: "Usa nomes ou dados verdadeiros de alunos, ou planeia partilhá-los fora do pessoal da escola.", meets: "Usa iniciais inventadas e diz quem pode e quem não pode ver as informações dos alunos.", exceeds: "Junta uma resposta calma e positiva a um comportamento, que segue o plano de um aluno." },
      { name: "Passos de segurança", objective: "O5", notYet: "Falta o passo de emergência, promete segredo ou planeia investigar.", meets: "Indica os passos por ordem, com o número de denúncia do estado e o prazo do mesmo dia.", exceeds: "Anota o que a política da própria escola acrescenta, depois de perguntar à escola ou de a ler." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem e passam no ParaPro ou no teste exigido pelo seu estado, ou que cumprem o requisito de outra forma, em 90 dias",
      "Alunos que se candidatam e são contratados como paraprofissionais, substitutos ou pessoal de apoio escolar (inquérito de seguimento)",
      "As escolas parceiras dizem que os novos auxiliares seguem os planos de aula, lidam com o comportamento com calma e protegem a privacidade dos alunos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para as páginas oficiais; papel, lápis e papel de rascunho para a prática",
      "O Study Companion e o Study Guide gratuitos do ParaPro da ETS (em parapro.ets.org)",
      "Um anúncio de emprego verdadeiro de um distrito escolar perto de você",
      "Cerca de 75 minutos no total, em sessões curtas, mais tempo de estudo extra antes do teste"
    ],
    facilitatorNotes: [
      "Antes do curso, procure as regras do seu estado para paraprofissionais e um anúncio de um distrito local, para poder responder a perguntas sobre elas.",
      "Nunca use nomes ou dados verdadeiros de alunos na prática; use iniciais inventadas.",
      "Faça a Lição 4 como um jogo de papéis: um aluno orienta, os outros fazem de alunos da escola, e o grupo dá comentários com a grelha de avaliação.",
      "A Lição 6 pode ser difícil para pessoas que foram maltratadas em crianças. Diga isso antes de começar, deixe os alunos sair se quiserem e tenha à mão informações de apoio locais.",
      "Diga aos alunos com condenações no passado que verifiquem diretamente as regras de verificação de antecedentes do estado e do distrito; não adivinhe se cumprem os requisitos.",
      "Convide um paraprofissional no ativo ou um funcionário de contratação do distrito para responder a perguntas."
    ]
  }
};
