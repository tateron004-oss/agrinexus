"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-ai-education.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "underserved-ai-education-pt",
  lang: "pt",
  translationOf: "underserved-ai-education",
  category: "Undeserved Community",
  name: "IA para a Educação e a Aprendizagem",
  skills: "Usar a IA como um explicador paciente, Fazer perguntas de prática, Encontrar sites de aprendizagem gratuitos, Fazer um plano de estudo, Ajudar uma criança a aprender sem fazer o trabalho por ela",
  outcome: "usar um assistente de IA gratuito e um site de aprendizagem gratuito para aprender algo novo: pedir a explicação de uma ideia difícil, praticar com perguntas feitas pela IA e seguir um plano de estudo simples de duas semanas feito por você.",
  about: [
    "Nunca é tarde para aprender. Talvez queira terminar um diploma, melhorar o seu inglês, aprender uma habilidade para o trabalho ou acompanhar os trabalhos de casa do seu filho. As ferramentas de IA gratuitas podem ser um explicador paciente que nunca se cansa das suas perguntas.",
    "Vai aprender a pedir à IA que explique as coisas ao seu nível, que faça perguntas de prática, a encontrar sites de aprendizagem gratuitos, a fazer um plano de estudo que caiba numa vida ocupada e a ajudar uma criança a aprender sem a IA fazer os trabalhos de casa por ela.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escolha uma coisa que quer aprender. Faça com um assistente de IA um plano de estudo de duas semanas que use um site de aprendizagem gratuito (como a Khan Academy ou o LearnFree) durante 20 minutos por dia. Depois peça à IA cinco perguntas de prática sobre o primeiro tema, responda você mesmo e verifique as suas respostas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos de comunidades desfavorecidas que querem aprender algo novo: pessoas a terminar um diploma, a melhorar o inglês, a aprender uma habilidade para o trabalho ou a ajudar os filhos com os trabalhos de casa. Muitos trabalham, criam filhos ou cuidam da família.",
    startingPoint: "Sabem usar um pouco o telefone e a internet. Alguns tiveram experiências difíceis na escola ou deixaram a escola cedo, e poucos já usaram um assistente de IA ou um site de aprendizagem gratuito para estudar.",
    gap: "As ferramentas de IA e os sites de aprendizagem gratuitos podem servir de explicador paciente, mas os alunos não sabem pedir explicações ao seu nível, praticar em vez de só voltar a ler, nem fazer um plano de estudo que caiba numa vida ocupada. Sem isto, muitos desistem de objetivos de aprendizagem que ajudariam o seu trabalho e a sua família.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca",
      "Tempo: estudo curto todos os dias, muitas vezes 20 minutos ou menos",
      "A IA pode errar em matemática e em factos; os alunos verificam os passos e fontes de confiança",
      "As escolas têm as suas próprias regras sobre a IA, e muitas ferramentas de IA têm limites de idade para crianças"
    ],
    prerequisites: "Nenhum. Quem é novo nos assistentes de IA pode fazer primeiro o curso \"Introdução à IA e Autonomia Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma ideia que acha difícil", action: "pedir a um assistente de IA que a explique ao seu nível com um exemplo do dia a dia, e dizer que parte ainda está confusa", standard: "até conseguir explicá-la com as suas próprias palavras" },
    { id: "O2", condition: "Depois de aprender uma ideia", action: "pedir a um assistente de IA perguntas de prática, uma de cada vez, responder você mesmo e verificar as respostas", standard: "respondendo antes de olhar e verificando qualquer resposta que pareça errada" },
    { id: "O3", condition: "Com uma habilidade que quer aprender", action: "encontrar um curso gratuito num site de aprendizagem ou na sua biblioteca", standard: "abrindo a primeira lição" },
    { id: "O4", condition: "Com o tempo real que tem em cada semana", action: "criar com um assistente de IA um plano de estudo de duas semanas que use um site de aprendizagem gratuito", standard: "com um tema pequeno por dia, dias de descanso e o plano num lugar onde o vai ver" },
    { id: "O5", condition: "Com o tema de um trabalho de casa de uma criança", action: "usar um assistente de IA para lhe explicar a ideia a você, para a poder ensinar, sem dar as respostas à criança", standard: "cumprindo as regras da escola sobre a IA" },
    { id: "O6", condition: "No fim de uma semana de estudo", action: "verificar o seu progresso com um questionário curto e ajustar o seu plano", standard: "revendo todos os temas em que errou" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A IA como o seu explicador",
      lessons: [
        {
          objectives: ["O1"],
          title: "Pedir que lhe expliquem uma ideia difícil ao seu nível",
          minutes: 5,
          goal: "Pedir a um assistente de IA que explique uma ideia difícil de uma forma que você entenda.",
          text: [
            "Um explicador é alguém que explica as coisas a uma pessoa de cada vez. Um assistente de IA gratuito pode ser como um explicador paciente. Pode fazer a mesma pergunta muitas vezes, e ele não o julga.",
            "Diga-lhe o seu nível: \"Explique as frações como se eu estivesse a começar\" ou \"Explique com um exemplo sobre cozinhar.\" Exemplos do dia a dia da sua própria vida ajudam as ideias a ficar.",
            "Se ainda estiver confuso, diga que parte não percebe: \"Percebo a primeira parte, mas não percebo porque viramos a segunda fração.\""
          ],
          steps: ["Diga o nome da ideia que quer aprender.", "Diga à IA o seu nível e peça um exemplo do dia a dia.", "Leia a resposta devagar.", "Diga exatamente que parte ainda está confusa e pergunte outra vez."],
          words: [["Explicador", "um professor que ajuda uma pessoa de cada vez."], ["Exemplo", "um caso da vida real que mostra como uma ideia funciona."]],
          slides: [
            { title: "A IA pode ser um explicador paciente", bullets: ["Pergunte quantas vezes precisar", "Ela não o julga"] },
            { title: "Diga-lhe o seu nível", bullets: ["\"Explique como se eu estivesse a começar\"", "\"Use um exemplo sobre cozinhar ou o trabalho\""] },
            { title: "Ainda está confuso?", bullets: ["Diga que parte não percebe", "Peça um exemplo diferente"] }
          ],
          tryIt: "Escolha uma ideia que sempre achou difícil (percentagens, uma regra de gramática, como funcionam os juros). Peça a um assistente de IA que a explique para principiantes, com um exemplo do seu dia a dia.",
          youCanNow: "pedir que lhe expliquem uma ideia difícil ao seu nível e fazer perguntas de seguimento até ela fazer sentido.",
          quickCheck: [
            { objective: "O1", q: "O que é um explicador?", options: ["Alguém que explica as coisas a uma pessoa de cada vez", "Um teste que se faz na escola", "Um tipo de calculadora", "Um edifício da escola"], answer: 0, why: "Um explicador ajuda uma pessoa a aprender, e um assistente de IA pode ser um explicador paciente." },
            { objective: "O1", q: "Percebe a primeira parte de uma explicação, mas não a segunda. O que pergunta?", options: ["\"Explique tudo outra vez.\"", "\"Percebo a primeira parte, mas não porque viramos a segunda fração.\"", "\"Deixe estar.\"", "\"Dê-me a resposta.\""], answer: 1, why: "Dizer exatamente que parte está confusa ajuda a IA a explicar essa parte." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Praticar com perguntas feitas pela IA",
          minutes: 5,
          goal: "Pedir a um assistente de IA que lhe faça perguntas e verifique as suas respostas.",
          text: [
            "Ler não é o mesmo que aprender. Lembra-se de mais quando pratica: responder a perguntas obriga o cérebro a ir buscar a ideia outra vez.",
            "Peça: \"Dê-me cinco perguntas de prática sobre percentagens, uma de cada vez. Espere pela minha resposta e depois diga-me se estou certo e porquê.\"",
            "A IA pode errar em matemática e em factos. Se uma resposta parecer errada, peça-lhe que mostre os passos, ou verifique num site de aprendizagem de confiança ou com um professor."
          ],
          steps: ["Peça um pequeno número de perguntas, uma de cada vez.", "Responda a cada uma você mesmo antes de procurar seja o que for.", "Peça à IA que verifique a sua resposta e explique.", "Se a resposta dela parecer errada, peça-lhe que mostre os passos ou verifique outra fonte."],
          words: [["Pergunta de prática", "uma pergunta a que responde para se lembrar e testar o que aprendeu."]],
          slides: [
            { title: "Praticar é melhor do que voltar a ler", bullets: ["Responder tira a ideia da sua memória", "Lembra-se de mais"] },
            { title: "Peça à IA que lhe faça perguntas", bullets: ["\"Dê-me cinco perguntas, uma de cada vez\"", "\"Espere pela minha resposta e depois explique\""] },
            { title: "A IA também pode errar", bullets: ["Peça-lhe que mostre os passos", "Verifique num site de aprendizagem ou com um professor"] }
          ],
          tryIt: "Peça a um assistente de IA três perguntas de prática sobre a ideia da Lição 1, uma de cada vez. Responda a cada uma antes de ele lhe dar a resposta.",
          youCanNow: "usar um assistente de IA para se testar e verificar o que aprendeu.",
          quickCheck: [
            { objective: "O2", q: "Porque pedir as perguntas de prática uma de cada vez?", options: ["A IA só consegue escrever uma", "Custa menos", "Responde a cada uma antes de ver a seguinte", "Torna as perguntas mais difíceis"], answer: 2, why: "Uma de cada vez deixa você responder a cada pergunta antes de passar à seguinte." },
            { objective: "O2", q: "A IA diz que 25% de 80 é 25. O que faz?", options: ["Aceita", "Deixa de praticar", "Apaga a conversa", "Pede-lhe que mostre os passos ou verifica outra fonte"], answer: 3, why: "A IA pode errar em matemática, por isso peça os passos ou verifique numa fonte de confiança." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Encontrar sites de aprendizagem gratuitos",
          minutes: 4,
          goal: "Encontrar um site de aprendizagem gratuito com lições sobre a habilidade que quer.",
          text: [
            "A IA é uma grande ajuda, mas funciona melhor ao lado de lições verdadeiras. Os sites de aprendizagem gratuitos dão-lhe cursos por ordem, com vídeos e prática.",
            "A Khan Academy é uma organização sem fins lucrativos com cursos gratuitos de matemática, ciências, leitura, economia, informática e preparação para exames. O LearnFree tem lições gratuitas, ao seu ritmo, sobre computadores, Microsoft Office, ferramentas do Google, procura de emprego, noções básicas de dinheiro, leitura e matemática.",
            "A sua biblioteca pública também pode oferecer aulas gratuitas, explicações ou contas de aprendizagem na internet. Se está a pensar ir para a universidade (college, nos Estados Unidos), pergunte ao gabinete de apoio financeiro da escola como pagar, ou veja o studentaid.gov, o site oficial do Departamento de Educação dos EUA."
          ],
          steps: ["Decida a habilidade que quer aprender.", "Procure-a na Khan Academy ou no LearnFree.", "Escolha um curso e veja a primeira lição.", "Pergunte à sua biblioteca que aulas ou explicações gratuitas oferece."],
          words: [["Ao seu ritmo", "avança à sua própria velocidade, a qualquer hora do dia."], ["Sem fins lucrativos", "uma organização que trabalha por uma missão, não para ganhar dinheiro para donos."]],
          sources: [
            { name: "Khan Academy: Sobre nós", url: "https://www.khanacademy.org/about" },
            { name: "LearnFree (lições gratuitas ao seu ritmo)", url: "https://www.learnfree.org/en/" },
            { name: "Federal Student Aid (Departamento de Educação dos EUA)", url: "https://studentaid.gov/" }
          ],
          slides: [
            { title: "Use a IA ao lado de lições verdadeiras", bullets: ["Cursos por ordem", "Vídeos e prática"] },
            { title: "Sites de aprendizagem gratuitos", bullets: ["Khan Academy: matemática, ciências, leitura, preparação para exames", "LearnFree: computadores, emprego, dinheiro, leitura, matemática"] },
            { title: "Mais ajuda gratuita", bullets: ["Aulas e explicações na biblioteca", "Pagar a universidade: o apoio financeiro da escola ou studentaid.gov"] }
          ],
          tryIt: "Vá à Khan Academy ou ao LearnFree e encontre um curso sobre uma habilidade que quer. Abra a primeira lição e escreva o nome dela.",
          youCanNow: "encontrar um site de aprendizagem gratuito com um curso sobre a habilidade que quer.",
          quickCheck: [
            { objective: "O3", q: "O que oferece o LearnFree?", options: ["Lições gratuitas sobre computadores, procura de emprego, noções de dinheiro, leitura e matemática", "Cursos universitários pagos", "Telefones grátis", "Só colocação em empregos"], answer: 0, why: "O LearnFree tem lições gratuitas, ao seu ritmo, sobre habilidades do dia a dia." },
            { objective: "O3", q: "Quer ajuda gratuita, presencial, para ler melhor. Onde pergunta?", options: ["Num vendedor de carros", "Na sua biblioteca pública", "Num anúncio nas redes sociais", "Num banco"], answer: 1, why: "As bibliotecas públicas oferecem muitas vezes aulas gratuitas, explicações ou contas de aprendizagem na internet." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A IA como o seu explicador",
        questions: [
          { objective: "O1", q: "A explicação da IA é difícil demais. O que deve pedir?", options: ["Nada; desiste", "\"Explique como se eu estivesse a começar, com um exemplo sobre cozinhar.\"", "\"Use palavras mais difíceis.\"", "\"Faça mais comprido.\""], answer: 1, why: "Dizer o seu nível e pedir um exemplo do dia a dia torna a explicação mais clara." },
          { objective: "O2", q: "Porque é que praticar com perguntas ajuda mais do que voltar a ler?", options: ["É mais rápido saltar", "Fica mais bonito", "Responder obriga o cérebro a ir buscar a ideia outra vez, por isso lembra-se de mais", "Custa menos"], answer: 2, why: "A prática fortalece a memória." },
          { objective: "O2", q: "A IA diz que a sua resposta de matemática está errada, mas você acha que está certa. O que faz?", options: ["Pede-lhe que mostre os passos, ou verifica outra fonte", "Confia sempre na IA", "Deixa de aprender matemática", "Apaga a aplicação"], answer: 0, why: "A IA pode errar em matemática; verificar os passos mostra quem tem razão." },
          { objective: "O3", q: "Qual é um site de aprendizagem gratuito e sem fins lucrativos?", options: ["Um site de compras", "Uma aplicação de redes sociais", "Uma loja de jogos", "A Khan Academy"], answer: 3, why: "A Khan Academy é um site de aprendizagem gratuito e sem fins lucrativos." },
          { objective: "O3", q: "O que quer dizer \"ao seu ritmo\"?", options: ["Tem de terminar num dia", "Avança à sua própria velocidade", "Um professor marca todas as horas", "Paga por minuto"], answer: 1, why: "As lições ao seu ritmo cabem no seu próprio horário." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aprender de uma forma que cabe na sua vida",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer um plano de estudo que caiba numa vida ocupada",
          minutes: 5,
          goal: "Fazer com um assistente de IA um plano de estudo simples de duas semanas.",
          text: [
            "Muitos adultos aprendem enquanto trabalham, criam os filhos e cuidam da família. Estudar pouco tempo, mas sempre, funciona melhor do que sessões longas que não consegue manter.",
            "Peça à IA um plano que caiba na sua semana real: \"Trabalho à noite e tenho 20 minutos todas as manhãs. Faça um plano de duas semanas para aprender o básico do Excel com o LearnFree. Um tema pequeno por dia, com um dia de descanso por semana.\"",
            "Ponha o plano num lugar onde o vai ver: no calendário do telefone, no frigorífico ou num caderno. Marque cada dia feito."
          ],
          steps: ["Escolha uma habilidade e um site de aprendizagem gratuito.", "Diga à IA quanto tempo tem e quando.", "Peça um plano de duas semanas com um tema pequeno por dia e dias de descanso.", "Ponha-o no calendário ou no frigorífico e marque cada dia feito."],
          words: [["Plano de estudo", "um horário do que vai aprender e quando."]],
          slides: [
            { title: "Pouco mas sempre ganha", bullets: ["20 minutos por dia é melhor do que 3 horas uma vez", "Planeie à volta do trabalho e da família"] },
            { title: "Peça um plano à IA", bullets: ["A sua habilidade e o site de aprendizagem", "Quanto tempo tem e quando", "Um tema pequeno por dia, com dias de descanso"] },
            { title: "Mantenha-o à vista", bullets: ["Calendário do telefone, frigorífico ou caderno", "Marque cada dia feito"] }
          ],
          tryIt: "Peça a um assistente de IA que faça um plano de estudo de duas semanas para o curso que encontrou na Lição 3, com base no tempo real que tem em cada dia.",
          youCanNow: "fazer um plano de estudo que caiba na sua semana real.",
          quickCheck: [
            { objective: "O4", q: "Porque é que sessões de estudo curtas e regulares funcionam para adultos ocupados?", options: ["São sempre mais fáceis", "Não precisam de plano", "Consegue mantê-las todos os dias", "Substituem a prática"], answer: 2, why: "As sessões curtas cabem numa semana real, por isso continua em vez de desistir." },
            { objective: "O4", q: "Só tem 15 minutos ao almoço. O que diz à IA quando pede um plano?", options: ["Nada sobre o seu tempo", "Que pode estudar 3 horas por dia", "Só a matéria", "Que tem 15 minutos ao almoço todos os dias"], answer: 3, why: "Dizer à IA o seu tempo real deixa-a fazer um plano que você consegue seguir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ajudar uma criança a aprender sem fazer o trabalho por ela",
          minutes: 5,
          goal: "Usar a IA para ajudar uma criança a perceber os trabalhos de casa em vez de lhe dar as respostas.",
          text: [
            "A IA pode ajudar você a ajudar o seu filho, mesmo em matérias que nunca aprendeu ou que já esqueceu. O segredo é usá-la para explicar, não para fazer os trabalhos de casa.",
            "As escolas têm regras sobre a IA. Muitas não deixam os alunos entregar trabalhos escritos por uma IA. Pergunte ao professor do seu filho quais são as regras. Veja também os limites de idade: muitas ferramentas de IA são só para maiores de 13 anos, e algumas pedem autorização dos pais para adolescentes; leia os termos da ferramenta.",
            "Bons pedidos para os pais: \"Explique como calcular a área de um retângulo para eu ensinar ao meu filho de 10 anos. Não dê a resposta deste exercício.\" Ou: \"Dê-me três perguntas fáceis para ver se o meu filho percebeu.\""
          ],
          steps: ["Leia os trabalhos de casa com o seu filho.", "Peça à IA que lhe explique a ideia a você, não que resolva o exercício.", "Explique-a ao seu filho com as suas próprias palavras.", "Deixe o seu filho fazer o trabalho; use perguntas feitas pela IA para ver se percebeu.", "Cumpra as regras da escola sobre o uso da IA."],
          words: [["Termos", "as regras que aceita quando usa uma aplicação ou um site, incluindo os limites de idade."]],
          slides: [
            { title: "Explicar, não fazer", bullets: ["Use a IA para você perceber a ideia", "O seu filho faz o trabalho"] },
            { title: "Cumpra as regras", bullets: ["Pergunte ao professor as regras sobre a IA", "Muitas ferramentas de IA são para maiores de 13 anos", "Leia os termos da ferramenta"] },
            { title: "Pedidos para os pais", bullets: ["\"Explique isto para eu ensinar ao meu filho de 10 anos\"", "\"Não dê a resposta\"", "\"Dê-me três perguntas fáceis para verificar\""] }
          ],
          tryIt: "Pegue num tema dos trabalhos de casa (ou num tema do ano escolar do seu filho). Peça a uma IA que o explique para o poder ensinar, sem resolver o exercício. Escreva como o explicaria com as suas próprias palavras.",
          youCanNow: "usar a IA para ajudar uma criança a aprender, cumprindo as regras da escola e deixando o trabalho com ela.",
          quickCheck: [
            { objective: "O5", q: "Qual é a regra principal para usar a IA nos trabalhos de casa de uma criança?", options: ["Usá-la para explicar, não para fazer o trabalho", "Deixá-la escrever a resposta toda", "Usá-la só nos testes", "Nunca olhar para os trabalhos de casa"], answer: 0, why: "A IA deve ajudar você a explicar a ideia; o seu filho continua a fazer o trabalho." },
            { objective: "O5", q: "O seu filho de 11 anos quer usar uma ferramenta de IA sozinho. O que verifica primeiro?", options: ["As cores dela", "O limite de idade e os termos, e as regras da escola sobre a IA", "A rapidez com que escreve", "Se tem jogos"], answer: 1, why: "Muitas ferramentas de IA são para maiores de 13 anos, e as escolas têm as suas próprias regras." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Manter o rumo e verificar o seu progresso",
          minutes: 5,
          goal: "Verificar o seu próprio progresso e ajustar o seu plano.",
          text: [
            "Depois de uma semana, olhe para trás. Em que dias estudou? O que consegue fazer agora que não conseguia antes? As pequenas vitórias contam.",
            "Peça à IA que lhe faça perguntas sobre a semana toda: \"Estudei estes cinco temas. Dê-me uma pergunta sobre cada um.\" As perguntas em que errar mostram o que tem de rever.",
            "Se o plano foi demais, faça-o mais pequeno. Se foi fácil, acrescente um pouco. Um plano que muda continua a ser um plano."
          ],
          steps: ["Conte os dias em que estudou.", "Peça à IA uma pergunta sobre cada tema que estudou.", "Marque as que errou e reveja-as.", "Faça o plano mais pequeno ou maior para caber na sua vida."],
          words: [["Progresso", "quanto já avançou em direção ao seu objetivo."], ["Rever", "voltar a estudar uma coisa para se lembrar melhor dela."]],
          slides: [
            { title: "Olhe para trás em cada semana", bullets: ["Em que dias estudou?", "O que consegue fazer agora?", "As pequenas vitórias contam"] },
            { title: "Teste a semana toda", bullets: ["Uma pergunta por tema", "As perguntas erradas mostram o que rever"] },
            { title: "Ajuste o seu plano", bullets: ["Foi demais? Faça-o mais pequeno", "Foi fácil? Acrescente um pouco"] }
          ],
          tryIt: "Tarefa final: faça o seu plano de estudo de duas semanas com um assistente de IA e um site de aprendizagem gratuito, depois peça cinco perguntas de prática sobre o primeiro tema, responda você mesmo e verifique as suas respostas.",
          youCanNow: "aprender uma nova habilidade com um plano de estudo, lições gratuitas e prática com a IA, ajustando pelo caminho.",
          quickCheck: [
            { objective: "O6", q: "O que lhe mostram as perguntas em que erra num questionário semanal?", options: ["Que deve desistir", "Que a IA está errada", "O que deve rever a seguir", "Que o plano era perfeito"], answer: 2, why: "As perguntas erradas apontam os temas que tem de rever." },
            { objective: "O6", q: "O seu plano pareceu fácil demais esta semana. O que faz?", options: ["Deixa de estudar", "Começa uma matéria nova", "Não faz nada", "Acrescenta um pouco mais ao plano"], answer: 3, why: "Um plano deve mudar para caber em você; se é fácil, acrescente um pouco." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Aprender de uma forma que cabe na sua vida",
        questions: [
          { objective: "O4", q: "Que plano de estudo tem mais hipóteses de funcionar para um pai ou uma mãe com pouco tempo?", options: ["Três horas todas as noites", "20 minutos por dia com dias de descanso", "Só nas férias", "Nenhum plano"], answer: 1, why: "Estudar pouco tempo, mas sempre, cabe numa vida ocupada." },
          { objective: "O4", q: "O que deve dizer a uma IA quando pede um plano de estudo?", options: ["A sua palavra-passe", "Os seus dados bancários", "A habilidade, o site e quanto tempo tem", "Nada"], answer: 2, why: "Esses detalhes fazem o plano caber na sua semana real." },
          { objective: "O5", q: "O seu filho tem trabalhos de casa de matemática. Qual é a melhor forma de usar a IA?", options: ["Pedir-lhe que lhe explique a ideia a você para a poder ensinar", "Pedir-lhe que escreva as respostas para o seu filho", "Copiar as respostas para os trabalhos de casa", "Ignorar os trabalhos de casa"], answer: 0, why: "Usar a IA para explicar deixa a aprendizagem e o trabalho com o seu filho." },
          { objective: "O5", q: "Onde fica a saber as regras de uma escola sobre a IA?", options: ["Numa publicação nas redes sociais", "Na própria IA", "Com um desconhecido na internet", "Perguntando ao professor ou à escola"], answer: 3, why: "Cada escola define as suas próprias regras." },
          { objective: "O6", q: "O seu questionário semanal mostra que errou em dois temas. O que faz a seguir?", options: ["Desiste", "Revê esses dois temas", "Salta-os para sempre", "Começa uma nova habilidade"], answer: 1, why: "As perguntas erradas mostram o que tem de rever." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Educação e a Aprendizagem",
    questions: [
      { objective: "O1", q: "Um explicador é:", options: ["Alguém que ajuda uma pessoa a aprender", "Um tipo de computador", "Um teste", "Um edifício da escola"], answer: 0, why: "Um explicador ensina uma pessoa de cada vez." },
      { objective: "O1", q: "Para ter uma explicação mais clara, diga à IA:", options: ["A sua morada", "O seu nível, e peça um exemplo do dia a dia", "Que use palavras mais difíceis", "Nada"], answer: 1, why: "O seu nível e um exemplo tornam a explicação mais clara." },
      { objective: "O1", q: "Percebe parte de uma resposta, mas não toda. Diga:", options: ["\"Deixe estar.\"", "\"Faça mais comprido.\"", "Que parte exata está confusa", "\"Use mais números.\""], answer: 2, why: "Dizer que parte está confusa dá uma resposta de seguimento melhor." },
      { objective: "O1", q: "Porque é útil um explicador de IA paciente?", options: ["Dá notas aos seus trabalhos da escola", "Dá-lhe um diploma", "Custa dinheiro a cada pergunta", "Pode fazer a mesma pergunta muitas vezes"], answer: 3, why: "Não se cansa nem o julga." },
      { objective: "O2", q: "Que pedido faz a IA testá-lo bem?", options: ["\"Dê-me cinco perguntas, uma de cada vez, e verifique as minhas respostas.\"", "\"Diga-me todas as respostas.\"", "\"Perguntas.\"", "\"Faça o meu teste.\""], answer: 0, why: "Uma de cada vez, com verificação, é prática a sério." },
      { objective: "O2", q: "Antes de a IA lhe dizer a resposta, você deve:", options: ["Procurá-la", "Responder você mesmo", "Saltá-la", "Fechar a conversa"], answer: 1, why: "Responder primeiro é o que faz a prática funcionar." },
      { objective: "O2", q: "Se uma resposta de matemática da IA parecer errada:", options: ["Confie nela na mesma", "Deixe de aprender", "Peça-lhe que mostre os passos ou verifique outra fonte", "Faça queixa do seu amigo"], answer: 2, why: "A IA pode errar em matemática." },
      { objective: "O3", q: "A Khan Academy é:", options: ["Uma universidade paga", "Um jogo", "Uma loja", "Um site de aprendizagem gratuito e sem fins lucrativos"], answer: 3, why: "Oferece cursos gratuitos como organização sem fins lucrativos." },
      { objective: "O3", q: "O LearnFree oferece lições gratuitas sobre:", options: ["Computadores, procura de emprego, noções de dinheiro, leitura e matemática", "Só culinária", "Só desporto", "Nada para adultos"], answer: 0, why: "O LearnFree cobre muitas habilidades do dia a dia e do trabalho." },
      { objective: "O3", q: "Onde mais pode encontrar aulas ou explicações gratuitas?", options: ["Numa lavagem de carros", "Na sua biblioteca pública", "Na entrada de um banco", "Num anúncio que aparece no ecrã"], answer: 1, why: "As bibliotecas oferecem muitas vezes aulas e explicações gratuitas." },
      { objective: "O3", q: "Para perguntas sobre como pagar a universidade, onde pode procurar?", options: ["Num site qualquer que pede uma taxa", "Numa SMS de um desconhecido", "No gabinete de apoio financeiro da escola ou no studentaid.gov", "Num videojogo"], answer: 2, why: "Essas são as fontes oficiais." },
      { objective: "O4", q: "Um bom plano de estudo para a maioria dos adultos é:", options: ["Cinco horas todos os domingos", "Quando lhe apetecer", "Tudo numa só noite", "Estudo curto todos os dias com dias de descanso"], answer: 3, why: "Estudar pouco tempo, mas sempre, é mais fácil de manter." },
      { objective: "O4", q: "Onde deve guardar o seu plano de estudo?", options: ["Num lugar onde o vai ver, como um calendário ou o frigorífico", "Escondido numa gaveta", "Só na sua cabeça", "No lixo"], answer: 0, why: "Vê-lo lembra-o de estudar." },
      { objective: "O4", q: "Quando pede um plano de estudo à IA, inclua:", options: ["O seu número da Segurança Social", "Quanto tempo tem de verdade e quando", "O PIN do seu banco", "A sua morada completa"], answer: 1, why: "O seu tempo real dá um plano que consegue seguir." },
      { objective: "O5", q: "Muitas ferramentas de IA têm um limite de idade de:", options: ["5 anos ou mais", "10 anos ou mais", "13 anos ou mais, às vezes com autorização dos pais", "Nunca há limite"], answer: 2, why: "Muitas ferramentas de IA são para maiores de 13 anos; veja os termos de cada ferramenta." },
      { objective: "O5", q: "Ao usar a IA nos trabalhos de casa do seu filho, a IA deve:", options: ["Escrever os trabalhos de casa", "Fazer o teste", "Enviar um email ao professor por você", "Explicar a ideia, não fazer o trabalho"], answer: 3, why: "Explicar deixa a aprendizagem com o seu filho." },
      { objective: "O5", q: "Qual é um bom pedido para os pais?", options: ["\"Explique isto para eu ensinar ao meu filho de 10 anos. Não dê a resposta.\"", "\"Faça os trabalhos de casa do meu filho.\"", "\"Escreva a redação.\"", "\"Dê todas as respostas.\""], answer: 0, why: "Pede uma explicação, não respostas." },
      { objective: "O6", q: "No fim de uma semana de estudo, você deve:", options: ["Apagar as suas notas", "Olhar para o que fez e testar-se", "Recomeçar do zero", "Deixar de estudar"], answer: 1, why: "Olhar para trás mostra o progresso e o que tem de rever." },
      { objective: "O6", q: "O seu plano foi demais para a sua semana. O que faz?", options: ["Desiste", "Sente-se mal", "Faz o plano mais pequeno", "Duplica o plano"], answer: 2, why: "Um plano deve caber na sua vida; ajustá-lo é normal." },
      { objective: "O2", q: "Na tarefa final, depois de a IA dar cinco perguntas de prática, você:", options: ["Copia as respostas dela", "Salta-as", "Partilha-as na internet", "Responde você mesmo e depois verifica as suas respostas"], answer: 3, why: "Responder você mesmo e verificar prova que aprendeu." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      4,
      7,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Site de aprendizagem gratuito",
        objective: "O3",
        notYet: "Nenhum site de aprendizagem, ou um site pago.",
        meets: "Diz o nome de um site de aprendizagem gratuito e do curso ou das lições usadas.",
        exceeds: "Também diz o nome de uma aula ou explicação gratuita na biblioteca."
      },
      {
        name: "Plano de duas semanas",
        objective: "O4",
        notYet: "Nenhum plano, ou um plano que não cabe no tempo real do aluno.",
        meets: "Duas semanas, cerca de 20 minutos por dia, um tema pequeno por dia, com dias de descanso.",
        exceeds: "Posto num calendário ou no frigorífico, com os dias marcados."
      },
      {
        name: "Perguntas de prática",
        objective: "O2",
        notYet: "Viu as respostas primeiro, ou não respondeu às perguntas.",
        meets: "Cinco perguntas respondidas antes de verificar, e cada uma verificada.",
        exceeds: "Pediu à IA que mostrasse os passos em qualquer resposta que parecia errada."
      },
      {
        name: "Verificação do progresso",
        objective: "O6",
        notYet: "Não olhou para trás para ver o que errou.",
        meets: "Faz a lista das perguntas erradas e do que tem de rever.",
        exceeds: "Diz como o plano vai mudar com base nos resultados."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que seguem o plano de estudo pelo menos 10 dos 14 dias (inquérito de seguimento)",
      "Alunos que se inscrevem num curso gratuito, numa aula de GED ou de inglês, ou num programa universitário em 90 dias",
      "Pais que dizem ajudar um filho nos trabalhos de casa usando a IA para explicar, não para responder"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca ou de um centro comunitário",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Um site de aprendizagem gratuito, como a Khan Academy ou o LearnFree",
      "Um caderno ou calendário para o plano de estudo",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Comece por perguntar a cada aluno o que quer aprender, e use essa habilidade em todas as tarefas de prática.",
      "Mostre como pedir uma explicação mais simples; muitos alunos têm vergonha de perguntar outra vez.",
      "Para os pais, sublinhe que a IA explica e a criança faz o trabalho, e que as regras da escola vêm primeiro.",
      "Fale com os alunos depois de uma semana para ver quem manteve o plano e ajude-os a torná-lo mais pequeno ou maior.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
