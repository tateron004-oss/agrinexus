"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-ai-learning-hobbies.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "seniors-ai-learning-hobbies-pt",
  lang: "pt",
  translationOf: "seniors-ai-learning-hobbies",
  category: "Seniors and Technology",
  name: "IA para Aprender e para os Passatempos",
  skills: "Pedir à IA para ensinar passo a passo, Fazer testes a si mesmo com a IA, Fazer um plano de estudo, Encontrar bons vídeos explicativos, Usar a IA num projeto de passatempo",
  outcome: "usar um assistente de IA para fazer um plano simples de duas semanas para aprender um passatempo ou um tema de que gosta, pedir-lhe que o ensine e lhe faça perguntas passo a passo, e terminar a primeira sessão de prática.",
  about: [
    "Nunca é tarde para aprender. Este curso é para pessoas mais velhas que querem começar um passatempo novo, voltar a um antigo ou aprender sobre algo que sempre as deixou curiosas: jardinagem, história da família, pintura, uma língua nova, aves, música ou história.",
    "Vai usar um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, como um professor paciente que não se importa de repetir. Vai pedir-lhe para o ensinar em pequenos passos, fazer-lhe perguntas, planear a sua prática e ajudar num projeto real de passatempo.",
    "Cada lição dura cerca de cinco minutos. Faça sempre a tarefa \"Experimente agora\"; juntas, elas constroem o seu próprio plano de estudo. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escolha um passatempo ou um tema. Peça a um assistente de IA um plano de estudo de duas semanas com sessões diárias curtas, peça-lhe que lhe ensine a primeira lição passo a passo, deixe-o fazer-lhe três perguntas e escreva uma coisa que vai praticar amanhã.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas, muitas vezes reformadas, que têm mais tempo livre e querem aprender algo novo ou voltar a um passatempo: jardinagem, pintura, música, trabalhos manuais, observação de aves ou história da família.",
    startingPoint: "Sabem usar um telefone, um tablet ou um computador para chamadas, e-mail e alguns sites. Muitas nunca usaram um assistente de IA como professor nem procuraram vídeos explicativos no YouTube.",
    gap: "Aprender um passatempo novo mantém a mente ativa e cria laços, mas as aulas podem ser caras, longe ou rápidas demais. Um assistente de IA pode ensinar ao ritmo do aluno, fazer-lhe perguntas e fazer um plano, desde que o aluno também verifique os dados de segurança e não confie nele para os registos da família.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: um telefone, tablet ou computador com internet; um ecrã maior ajuda para os vídeos",
      "Tempo: cerca de 5 minutos por lição e sessões curtas de prática diária",
      "A energia e a saúde variam; os planos têm de permitir sessões curtas e dias de descanso",
      "Privacidade: não colocar na IA os dados privados de familiares vivos"
    ],
    prerequisites: "O curso \"IA para Pessoas Mais Velhas: Usar Assistentes de IA\" ajuda se for feito antes, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando um assistente de IA gratuito", action: "pedir-lhe que ensine um tema passo a passo, dizendo o que já sabe e pedindo-lhe que espere até você dizer \"próximo\"", standard: "recebendo passos pequenos que consegue seguir ao seu ritmo" },
    { id: "O2", condition: "Depois de uma lição curta", action: "pedir ao assistente que lhe faça perguntas, uma de cada vez, e que explique outra vez o que errar", standard: "respondendo bem a pelo menos 2 de 3 perguntas com as suas palavras" },
    { id: "O3", condition: "Com um passatempo ou tema de que gosta", action: "pedir um plano de estudo de duas semanas que se ajuste ao seu tempo, ao seu material e à sua energia", standard: "com um pequeno objetivo por dia, escrito no calendário ou em papel" },
    { id: "O4", condition: "Com uma habilidade que se aprende melhor a ver", action: "procurar no YouTube um vídeo explicativo para principiantes e saltar os anúncios e os links de inscrição", standard: "escolhendo um vídeo claro para principiantes" },
    { id: "O5", condition: "Com um projeto de passatempo, como uma horta ou um álbum de recordações", action: "pedir uma lista de material e passos simples, e verificar os dados de segurança num rótulo ou numa fonte de confiança", standard: "antes de comprar ou usar qualquer coisa perigosa" },
    { id: "O6", condition: "Com uma memória da família", action: "escrever com a ajuda da IA uma história curta da família com a sua própria voz, procurando os registos em sites de confiança e não na IA", standard: "sem nenhum dado privado de familiares vivos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A IA como o seu professor paciente",
      lessons: [
        {
          objectives: ["O1"],
          title: "Pedir à IA para o ensinar, um passo de cada vez",
          minutes: 5,
          goal: "Pedir a um assistente de IA que ensine um tema em passos pequenos e claros, ao seu ritmo.",
          text: [
            "Um assistente de IA pode ser como um professor paciente. Explica uma coisa quantas vezes precisar, de quantas maneiras precisar, e nunca se cansa de perguntas.",
            "Diga-lhe o que quer aprender, o que já sabe e como gosta de aprender. Por exemplo: \"Quero começar a observar aves no meu quintal. Sou completamente principiante. Ensine-me as três primeiras coisas que devo saber, uma de cada vez, em frases curtas. Espere que eu diga 'próximo' antes de continuar.\"",
            "Pedir-lhe que espere pelo \"próximo\" mantém cada passo pequeno, para que possa experimentar ou pensar antes de avançar."
          ],
          steps: ["Diga o que quer aprender.", "Diga o que já sabe, mesmo que não seja nada.", "Peça passos curtos e simples.", "Peça-lhe que espere até você dizer \"próximo\"."],
          words: [["Professor particular (tutor)", "um professor que ajuda uma pessoa a aprender ao seu próprio ritmo."]],
          slides: [
            { title: "Um professor paciente", bullets: ["Explica quantas vezes precisar", "Nunca se cansa de perguntas"] },
            { title: "Diga-lhe", bullets: ["O que quer aprender", "O que já sabe", "Como gosta de aprender"] },
            { title: "Mantenha os passos pequenos", bullets: ["\"Ensine-me uma coisa de cada vez.\"", "\"Espere que eu diga 'próximo'.\""] }
          ],
          tryIt: "Escolha um tema que o deixa curioso. Peça a um assistente que lhe ensine as três primeiras coisas a saber, uma de cada vez, à espera que você diga \"próximo\". Faça as três.",
          youCanNow: "pedir a um assistente de IA que lhe ensine um tema em passos pequenos, ao seu próprio ritmo.",
          quickCheck: [
            { objective: "O1", q: "Porque é que um assistente de IA pode ser um bom professor?", options: ["Sabe tudo sobre você", "Explica outra vez quantas vezes e de quantas maneiras precisar, sem se cansar", "Dá-lhe notas como numa escola", "Só funciona para crianças"], answer: 1, why: "A lição diz que um assistente é como um professor paciente que nunca se cansa de perguntas." },
            { objective: "O1", q: "Quer aprender a tocar harmónica e nunca experimentou. O que diz ao assistente?", options: ["\"Harmónica.\"", "\"Diga-me tudo sobre música.\"", "\"Sou completamente principiante. Ensine-me as três primeiras coisas, uma de cada vez. Espere que eu diga próximo.\"", "\"Toque uma música para mim.\""], answer: 2, why: "Dizer o que sabe e pedir passos pequenos que esperam pelo \"próximo\" mantém a aprendizagem ao seu ritmo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fazer testes a si mesmo para se lembrar mais",
          minutes: 4,
          goal: "Pedir a um assistente de IA que lhe faça perguntas sobre o que acabou de aprender.",
          text: [
            "Lembramo-nos mais quando tentamos recordar uma coisa, e não só quando a lemos outra vez. Um pequeno teste é uma das melhores maneiras de fixar o que aprendeu.",
            "Depois de uma lição, peça: \"Faça-me três perguntas fáceis sobre o que acabou de me ensinar. Pergunte uma de cada vez e diga-me se acertei.\" Responda com as suas palavras. Se errar uma, peça-lhe que explique outra vez de outra maneira.",
            "Faça o mesmo teste outra vez no dia seguinte. Um pouco de prática espalhada por vários dias funciona melhor do que muita prática de uma só vez."
          ],
          steps: ["Termine uma lição curta.", "Peça três perguntas fáceis, uma de cada vez.", "Responda com as suas palavras.", "Peça uma nova explicação do que errou.", "Repita o teste amanhã."],
          words: [["Recordar", "trazer uma coisa de volta à mente, de memória."]],
          slides: [
            { title: "Os testes ajudam a lembrar", bullets: ["Recordar é melhor do que reler", "Curto e frequente é o melhor"] },
            { title: "Peça um teste", bullets: ["\"Faça-me três perguntas fáceis.\"", "\"Uma de cada vez; diga-me se acertei.\""] },
            { title: "Errou uma?", bullets: ["Peça uma explicação diferente", "Tente outra vez amanhã"] }
          ],
          tryIt: "Peça ao assistente que lhe faça três perguntas sobre o que lhe ensinou na Lição 1. Responda-lhes uma de cada vez.",
          youCanNow: "usar a IA para fazer testes a si mesmo e lembrar-se mais do que aprende.",
          quickCheck: [
            { objective: "O2", q: "Porque é que um teste curto ajuda a aprender?", options: ["Tentar recordar uma coisa ajuda a lembrar-se dela", "Torna a lição mais comprida", "Dá-lhe uma nota para os seus registos", "Substitui a prática"], answer: 0, why: "Lembramo-nos mais quando tentamos recordar uma coisa, e não só quando a lemos outra vez." },
            { objective: "O2", q: "Errou uma pergunta do teste sobre o canto das aves. O que faz?", options: ["Deixa de aprender esse tema", "Salta e continua", "Zanga-se com o assistente", "Pede-lhe que explique essa parte outra vez de outra maneira"], answer: 3, why: "Peça uma nova explicação do que errou e depois tente outra vez." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer um plano de estudo simples",
          minutes: 5,
          goal: "Pedir a um assistente de IA um plano de estudo curto e realista.",
          text: [
            "Um plano transforma \"um dia destes\" em \"hoje\". Peça ao assistente um plano de duas semanas com sessões curtas que se ajustem à sua energia e ao seu horário.",
            "Por exemplo: \"Faça-me um plano de duas semanas para aprender o básico da pintura em aguarela. Posso praticar 20 minutos por dia, cinco dias por semana. Tenho uma pequena caixa de tintas e papel. Dê-me só um pequeno objetivo por dia.\"",
            "Leia o plano e mude o que não lhe servir. Peça-lhe que torne os dias mais fáceis ou mais curtos, ou que acrescente dias de descanso. Depois escreva o plano no seu calendário ou num papel ao lado da sua cadeira."
          ],
          steps: ["Diga o que quer aprender e durante quanto tempo.", "Diga quantos minutos e quantos dias pode praticar.", "Diga que material já tem.", "Peça um pequeno objetivo por dia.", "Ajuste o plano e depois escreva-o."],
          words: [["Plano de estudo", "uma lista do que praticar em cada dia para chegar a um objetivo."]],
          slides: [
            { title: "De \"um dia destes\" para \"hoje\"", bullets: ["Um plano curto e realista", "Um pequeno objetivo por dia"] },
            { title: "Diga ao assistente", bullets: ["O quê e durante quanto tempo", "Minutos e dias que pode praticar", "Material que já tem"] },
            { title: "Ajuste-o a você", bullets: ["Peça dias mais fáceis ou mais curtos", "Acrescente dias de descanso", "Escreva-o no calendário"] }
          ],
          tryIt: "Peça a um assistente um plano de estudo de duas semanas para o seu tema, com um pequeno objetivo por dia e o tempo que pode dar. Faça uma mudança para que lhe sirva melhor e depois escreva os três primeiros dias.",
          youCanNow: "fazer com a IA um plano de estudo realista que se ajuste ao seu tempo e à sua energia.",
          quickCheck: [
            { objective: "O3", q: "O que deve ter um bom plano de estudo em cada dia?", options: ["Várias horas de prática", "Um pequeno objetivo que cabe no seu tempo", "Um exame", "Um passatempo novo"], answer: 1, why: "Um pequeno objetivo por dia transforma \"um dia destes\" em \"hoje\"." },
            { objective: "O3", q: "O plano que a IA lhe deu parece cansativo demais. O que faz?", options: ["Desiste do passatempo", "Segue-o na mesma", "Pede-lhe que torne os dias mais curtos ou acrescente dias de descanso", "Começa um passatempo novo"], answer: 2, why: "Pode pedir ao assistente que mude o plano para se ajustar à sua energia." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A IA como o seu professor paciente",
        questions: [
          { objective: "O1", q: "Porque pedir ao assistente que espere até você dizer \"próximo\"?", options: ["Para ele parar de funcionar", "Para ele ir mais depressa", "Para cada passo ficar pequeno e você poder pensar nele", "É obrigatório para iniciar sessão"], answer: 2, why: "Passos pequenos ao seu ritmo são mais fáceis de aprender." },
          { objective: "O1", q: "O que deve dizer ao assistente quando quer aprender uma coisa?", options: ["O que quer aprender, o que sabe e como gosta de aprender", "O seu número do banco", "Só uma palavra", "A sua palavra-passe"], answer: 0, why: "Estes dados ajudam-no a ensinar ao nível certo." },
          { objective: "O2", q: "O que o ajuda a lembrar-se mais?", options: ["Ler a mesma página dez vezes", "Aprender tudo num só dia", "Nunca praticar", "Responder a um teste curto"], answer: 3, why: "Recordar as respostas fixa a aprendizagem." },
          { objective: "O2", q: "Errou uma pergunta do teste. Qual é um bom passo a seguir?", options: ["Desistir do passatempo", "Pedir-lhe que explique outra vez de outra maneira", "Apagar a aplicação", "Saltar o tema para sempre"], answer: 1, why: "Uma nova explicação muitas vezes faz tudo ficar claro." },
          { objective: "O3", q: "Um bom plano de estudo tem:", options: ["Dez horas de trabalho por dia", "Um pequeno objetivo por dia que cabe no seu tempo", "Nenhum dia", "Só objetivos grandes"], answer: 1, why: "Objetivos pequenos e realistas ajudam a continuar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aproveitar os seus passatempos com a IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar bons vídeos explicativos",
          minutes: 5,
          goal: "Procurar um vídeo explicativo útil e decidir se é bom.",
          text: [
            "Algumas habilidades aprendem-se melhor a ver: um ponto de tricô, podar roseiras, um acorde na guitarra. O YouTube tem vídeos explicativos gratuitos sobre quase todos os passatempos.",
            "Primeiro, peça a um assistente de IA boas palavras para procurar: \"O que devo procurar no YouTube para aprender um ponto de tricô para principiantes?\" Depois abra o YouTube, toque na caixa de pesquisa (a lupa) e escreva essas palavras. Procure vídeos feitos para principiantes, com títulos claros e comentários úteis.",
            "Pode pausar, voltar atrás e ver outra vez quantas vezes quiser. Tenha cuidado com os anúncios e com os links na descrição do vídeo que lhe pedem para comprar coisas ou para se inscrever; não precisa deles para aprender."
          ],
          steps: ["Peça à IA boas palavras para procurar.", "Abra o YouTube e toque na lupa.", "Escreva as palavras e procure vídeos para principiantes.", "Pause e veja outra vez sempre que precisar.", "Salte os anúncios e os links que pedem para comprar ou para se inscrever."],
          words: [["YouTube", "um site e uma aplicação gratuitos com vídeos sobre quase todos os assuntos."], ["Caixa de pesquisa", "onde escreve palavras para encontrar alguma coisa; muitas vezes aparece como uma lupa."]],
          slides: [
            { title: "Aprender a ver", bullets: ["Tricô, jardinagem, música e mais", "Grátis no YouTube"] },
            { title: "Encontre um bom vídeo", bullets: ["Peça à IA palavras para procurar", "Toque na lupa e escreva", "Escolha vídeos para principiantes"] },
            { title: "Veja à sua maneira", bullets: ["Pause e veja outra vez", "Salte os anúncios e os links \"compre já\""] }
          ],
          tryIt: "Pergunte a um assistente de IA o que procurar no YouTube para o primeiro dia do seu plano de estudo. Procure, veja um vídeo para principiantes e pause-o pelo menos uma vez para experimentar um passo.",
          youCanNow: "encontrar um vídeo útil para principiantes e aprender com ele ao seu próprio ritmo.",
          quickCheck: [
            { objective: "O4", q: "O que faz a lupa no YouTube?", options: ["Aumenta o vídeo", "Abre a caixa de pesquisa", "Aumenta o som", "Compra o vídeo"], answer: 1, why: "A lupa é o botão de pesquisa onde escreve as suas palavras." },
            { objective: "O4", q: "Um vídeo de tricô mostra um link para \"comprar o curso completo\". O que faz?", options: ["Salta-o; não precisa dele para aprender", "Compra-o logo", "Escreve o número do seu cartão para ver mais", "Deixa de ver vídeos"], answer: 0, why: "Os anúncios e os links que pedem para comprar ou para se inscrever não são precisos para aprender." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usar a IA num projeto de passatempo",
          minutes: 5,
          goal: "Usar um assistente de IA para planear um projeto real de passatempo do início ao fim.",
          text: [
            "A IA pode ajudar a planear um projeto: uma pequena horta, um álbum de recordações para o aniversário de um neto, um livro de receitas da família ou uma casinha para pássaros.",
            "Descreva o projeto e peça uma lista de material e os passos: \"Ajude-me a fazer um pequeno álbum de recordações do primeiro ano da minha neta. Faça a lista do material e dos passos. Mantenha tudo simples.\" Para uma horta, diga a sua região e a estação: \"Vivo em Ohio e tenho um pátio com muito sol. Quais são três legumes fáceis de cultivar em vasos nesta primavera?\"",
            "Para tudo o que tem a ver com segurança, como ferramentas, produtos químicos ou plantas que podem fazer mal aos animais de estimação, verifique o rótulo ou uma fonte de confiança, como a loja de jardinagem do seu bairro ou a biblioteca."
          ],
          steps: ["Descreva o projeto e para quem é.", "Diga a sua região, a estação ou o espaço, se for importante.", "Peça uma lista de material e passos simples.", "Verifique os dados de segurança num rótulo ou numa fonte de confiança."],
          words: [["Lista de material", "as coisas que precisa de juntar antes de começar um projeto."]],
          slides: [
            { title: "Planeie um projeto real", bullets: ["Horta, álbum, livro de receitas, casinha para pássaros"] },
            { title: "Peça", bullets: ["Uma lista de material", "Passos simples", "Ideias para a sua região e estação"] },
            { title: "Proteja-se", bullets: ["Verifique os rótulos das ferramentas e dos produtos químicos", "Pergunte numa loja de jardinagem ou na biblioteca"] }
          ],
          tryIt: "Escolha um pequeno projeto ligado ao seu tema. Peça a um assistente uma lista de material e passos simples, e faça um círculo à volta do material que já tem.",
          youCanNow: "planear um projeto de passatempo com a IA, desde o material até aos passos.",
          quickCheck: [
            { objective: "O5", q: "O que é uma lista de material?", options: ["Uma lista de lojas perto de você", "Um recibo de compras", "Uma lista de amigos que podem ajudar", "As coisas de que precisa antes de começar um projeto"], answer: 3, why: "Uma lista de material mostra o que precisa antes de começar." },
            { objective: "O5", q: "A IA sugere uma planta para o seu pátio, e você tem um gato. O que faz?", options: ["Compra-a logo", "Pergunta à IA se tem a certeza", "Verifica na loja de jardinagem ou no rótulo da planta se é segura para animais", "Ignora a pergunta"], answer: 2, why: "Os dados de segurança, como plantas que podem fazer mal aos animais, verificam-se num rótulo ou numa fonte de confiança." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Explorar a história e as histórias da família",
          minutes: 5,
          goal: "Usar a IA para ajudar a escrever uma história da família para partilhar.",
          text: [
            "Muitas pessoas mais velhas gostam de explorar a história da família e de passar histórias aos netos. A IA pode ajudar a transformar memórias numa história curta que os outros vão gostar de ler.",
            "Conte-lhe uma memória com as suas palavras: \"O meu pai tinha uma padaria em Chicago nos anos 1950. Eu ajudava aos sábados. Ajude-me a escrever isto como uma história de uma página para os meus netos, com a minha voz.\" Depois faça mudanças para que soe como você.",
            "A IA não conhece a história verdadeira da sua família, por isso não lhe peça para completar dados sobre os seus antepassados; ela pode inventá-los. Para os registos, sites como o FamilySearch (gratuito) ou o balcão de genealogia da biblioteca do seu bairro são lugares melhores para procurar. Não coloque na IA os dados privados de familiares vivos."
          ],
          steps: ["Conte à IA uma memória com as suas palavras.", "Peça uma história de uma página com a sua voz.", "Mude o que não soar como você.", "Procure os registos em sites de confiança, não na IA.", "Partilhe a história com a família."],
          words: [["Genealogia", "o estudo da história da família e dos antepassados."], ["Antepassado", "um familiar de há muito tempo, como um bisavô ou uma bisavó."]],
          slides: [
            { title: "Transforme memórias em histórias", bullets: ["Conte à IA a memória com as suas palavras", "Peça uma história curta com a sua voz"] },
            { title: "Os dados vêm dos registos", bullets: ["A IA pode inventar dados da família", "Experimente o FamilySearch ou a sua biblioteca"] },
            { title: "Partilhe-a", bullets: ["Deixe de fora os dados privados dos familiares vivos", "Leia-a em voz alta aos netos"] }
          ],
          tryIt: "Tarefa final: escolha um passatempo ou um tema, peça a um assistente de IA um plano de duas semanas, peça-lhe que lhe ensine a primeira lição passo a passo, deixe-o fazer-lhe três perguntas e escreva uma coisa que vai praticar amanhã.",
          youCanNow: "usar a IA para aprender, planear projetos de passatempo e registar histórias da família.",
          quickCheck: [
            { objective: "O6", q: "O que é a genealogia?", options: ["O estudo da história da família", "Um tipo de jardim", "Um estilo de pintura", "Uma aplicação de vídeo"], answer: 0, why: "A genealogia é o estudo da história da família." },
            { objective: "O6", q: "Quer saber onde nasceu a sua bisavó. Onde procura?", options: ["Pede à IA para completar", "Adivinha e escreve na história", "Publica na internet os dados dos seus familiares", "No FamilySearch ou no balcão de genealogia da sua biblioteca"], answer: 3, why: "A IA pode inventar dados da família; os registos verdadeiros estão em sites de confiança ou na biblioteca." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Aproveitar os seus passatempos com a IA",
        questions: [
          { objective: "O4", q: "Como pode a IA ajudar a encontrar um bom vídeo explicativo?", options: ["Apaga os anúncios", "Grava o vídeo", "Paga o vídeo", "Sugere boas palavras para procurar"], answer: 3, why: "Boas palavras de pesquisa levam a vídeos melhores." },
          { objective: "O4", q: "Um link na descrição de um vídeo diz \"Compre já o curso completo\". Precisa dele para aprender?", options: ["Não, pode saltá-lo", "Sim, sempre", "Sim, é obrigatório", "Só aos fins de semana"], answer: 0, why: "Os vídeos gratuitos ensinam muito; não precisa de comprar." },
          { objective: "O5", q: "Para o plano de uma horta, o que deve dizer à IA?", options: ["A sua palavra-passe", "O seu número do banco", "A sua região, a estação e o espaço", "Nada"], answer: 2, why: "A região, a estação e o espaço mudam o que cresce bem." },
          { objective: "O5", q: "A IA sugere um spray para o jardim. Como verifica se é seguro?", options: ["Confia na IA", "Pergunta a um desconhecido", "Usa mais spray", "Lê o rótulo ou pergunta numa loja de jardinagem"], answer: 3, why: "Os dados de segurança devem vir dos rótulos ou de fontes de confiança." },
          { objective: "O6", q: "Porque não pedir à IA dados sobre os seus bisavós?", options: ["Custa dinheiro", "É lenta demais", "Pode inventá-los", "Só fala francês"], answer: 2, why: "A IA não conhece a história da sua família; os registos conhecem." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Aprender e para os Passatempos",
    questions: [
      { objective: "O1", q: "Um assistente de IA pode ser como:", options: ["O seu médico", "Um professor paciente", "O seu banco", "Um farmacêutico"], answer: 1, why: "Explica as coisas quantas vezes precisar." },
      { objective: "O1", q: "Que pedido o vai ensinar melhor?", options: ["\"Sou principiante. Ensine-me três coisas sobre as aves do quintal, uma de cada vez.\"", "\"aves\"", "\"ensine\"", "\"tudo\""], answer: 0, why: "Diz o tema, o seu nível e o ritmo." },
      { objective: "O1", q: "Dizer \"espere que eu diga próximo\" ajuda porque:", options: ["Mantém cada passo pequeno", "Aumenta o som", "Desliga o aparelho", "Paga menos"], answer: 0, why: "Passos pequenos deixam-no pensar antes de continuar." },
      { objective: "O1", q: "Um professor particular (tutor) é:", options: ["Um tipo de telefone", "Um professor que ajuda uma pessoa ao seu próprio ritmo", "O final de um endereço de site", "Um vídeo"], answer: 1, why: "Um professor particular ensina uma pessoa de cada vez." },
      { objective: "O2", q: "O que o ajuda a lembrar-se do que aprendeu?", options: ["Aprender tudo numa noite", "Nunca rever", "Fazer testes a si mesmo", "Saltar a prática"], answer: 2, why: "Recordar as respostas fortalece a memória." },
      { objective: "O2", q: "Como deve a IA fazer-lhe o teste?", options: ["Sem dizer se acertou", "Cinquenta perguntas de uma vez", "Só perguntas difíceis", "Uma pergunta de cada vez, dizendo se acertou"], answer: 3, why: "Uma de cada vez, com resposta sobre se acertou, é o mais fácil." },
      { objective: "O2", q: "A prática funciona melhor quando é:", options: ["Uma vez por ano", "Toda de uma vez", "Curta e espalhada por vários dias", "Só quando está cansado"], answer: 2, why: "A prática espalhada no tempo ajuda a memória." },
      { objective: "O3", q: "Um bom plano de estudo inclui:", options: ["Um pequeno objetivo por dia", "Nenhum objetivo", "Horas de prática todos os dias", "Só um exame final"], answer: 0, why: "Pequenos objetivos diários são realistas." },
      { objective: "O3", q: "Se o plano parecer difícil demais, você pode:", options: ["Apagar o plano", "Desistir", "Fazer tudo na mesma", "Pedir à IA que torne os dias mais fáceis ou acrescente dias de descanso"], answer: 3, why: "Os planos devem ajustar-se a você." },
      { objective: "O3", q: "O que deve dizer à IA quando pede um plano?", options: ["A sua palavra-passe", "Os minutos e os dias que pode praticar", "O seu número do banco", "O seu número do Medicare"], answer: 1, why: "O tempo que tem molda o plano." },
      { objective: "O4", q: "A lupa no YouTube é o:", options: ["Volume", "Botão de pesquisa", "Botão de ligar", "Câmara"], answer: 1, why: "Abre a caixa de pesquisa." },
      { objective: "O4", q: "Quando vê um vídeo explicativo, você pode:", options: ["Não voltar atrás", "Ver só uma vez", "Não o parar", "Pausar e ver outra vez quantas vezes quiser"], answer: 3, why: "Pausar deixa-o experimentar cada passo." },
      { objective: "O4", q: "Os anúncios que lhe pedem para se inscrever ou comprar:", options: ["Não são precisos para aprender", "São obrigatórios", "São do governo", "Fazem parte da lição"], answer: 0, why: "Pode aprender sem eles." },
      { objective: "O5", q: "Para um projeto de passatempo, a IA pode dar-lhe:", options: ["O saldo do seu banco", "O próprio material", "Uma lista de material e passos simples", "Uma declaração médica"], answer: 2, why: "Ela pode planear; você junta o material e faz." },
      { objective: "O5", q: "Uma lista de material é:", options: ["Um número de telefone", "Um recibo do supermercado", "Uma palavra-passe", "As coisas de que precisa antes de começar"], answer: 3, why: "Mostra o que deve juntar." },
      { objective: "O5", q: "Os dados de segurança sobre ferramentas ou produtos químicos devem ser verificados:", options: ["Nunca", "Só com a IA", "No rótulo ou numa fonte de confiança", "Com um desconhecido"], answer: 2, why: "Os rótulos e os especialistas são de confiança." },
      { objective: "O6", q: "A genealogia é:", options: ["Uma planta de jardim", "O estudo da história da família", "Uma aplicação de telefone", "Um tipo de tinta"], answer: 1, why: "A genealogia segue a pista dos antepassados." },
      { objective: "O6", q: "A IA pode ajudar numa história da família:", options: ["Transformando a sua memória numa história curta com a sua voz", "Sabendo os aniversários dos seus antepassados", "Encontrando as moradas dos seus familiares", "Assinando documentos"], answer: 0, why: "Ela dá forma às suas palavras; a memória é sua." },
      { objective: "O6", q: "Onde deve procurar os registos verdadeiros da família?", options: ["No FamilySearch ou no balcão de genealogia da sua biblioteca", "Só na IA", "Num anúncio que aparece no ecrã", "Em boatos nas redes sociais"], answer: 0, why: "Os registos vêm de fontes de registos de confiança." },
      { objective: "O6", q: "O que deve deixar fora da IA quando escreve histórias da família?", options: ["A sua cor preferida", "Os dados privados de familiares vivos", "O nome de um animal de estimação", "A estação do ano"], answer: 1, why: "Os dados privados de familiares vivos merecem proteção." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      4,
      7,
      10,
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
        name: "Plano de duas semanas",
        objective: "O3",
        notYet: "Não há plano, ou o plano não se ajusta ao seu tempo ou ao seu material.",
        meets: "Um plano de duas semanas com sessões diárias curtas e um pequeno objetivo por dia.",
        exceeds: "Ajustou o plano para acrescentar dias de descanso ou dias mais fáceis, e escreveu-o."
      },
      {
        name: "Primeira lição passo a passo",
        objective: "O1",
        notYet: "Pediu tudo de uma vez.",
        meets: "Pediu ao assistente que ensinasse a primeira lição passo a passo, ao seu ritmo.",
        exceeds: "Disse o que já sabia, para que os passos começassem no nível certo."
      },
      {
        name: "Fez um teste a si mesmo",
        objective: "O2",
        notYet: "Saltou o teste.",
        meets: "Respondeu a três perguntas do teste, uma de cada vez, com as suas palavras.",
        exceeds: "Pediu uma nova explicação do que errou e tentou outra vez."
      },
      {
        name: "Próxima prática",
        objective: "O3",
        notYet: "Nada escrito para amanhã.",
        meets: "Escreveu uma coisa para praticar amanhã.",
        exceeds: "Escolheu uma hora para isso e colocou-a no calendário."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que continuam a praticar o seu passatempo no seguimento aos 30 dias",
      "Alunos que partilham um projeto ou uma história da família com a família ou com um grupo",
      "Alunos que começam outro curso de Seniores e Tecnologia em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone, tablet ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini) e o YouTube",
      "Papel e caneta, ou um calendário, para o plano de estudo",
      "Cerca de 60 minutos no total, em sessões curtas e calmas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça a cada aluno que escolha um passatempo de que gosta antes da primeira sessão; isso mantém-no motivado.",
      "Mostre o YouTube num ecrã grande e aponte os anúncios e os links de inscrição antes de os alunos procurarem sozinhos.",
      "Lembre aos alunos que verifiquem os dados de segurança sobre ferramentas, produtos químicos e plantas nos rótulos ou numa loja de jardinagem.",
      "Para as histórias da família, lembre aos alunos que a IA pode inventar dados da família e que devem manter privados os dados dos familiares vivos.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
