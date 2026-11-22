"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-ai-multilingual.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US schools; the English sentence frames and the idiom "touch base" are kept in English because they are English being taught.

module.exports = {
  id: "edu-ai-multilingual-pt",
  lang: "pt",
  translationOf: "edu-ai-multilingual",
  category: "Leadership Development",
  name: "IA para Alunos Multilingues",
  skills: "Criar apoios linguísticos com IA, Fazer glossários bilingues, Escrever estruturas de frase por nível de proficiência, Usar a tradução com segurança, Criar um processo de tradução verificado por pessoas, Valorizar as línguas maternas",
  outcome: "usar a IA para criar apoios linguísticos para alunos multilingues (glossários, estruturas de frase por nível de proficiência e textos adaptados que mantêm as ideias do ano escolar) e seguir um processo de tradução para as famílias em que uma pessoa qualificada verifica cada tradução da IA antes de ser enviada.",
  about: [
    "Este curso é para professores de turma, professores de desenvolvimento da língua inglesa (ELD) e professores bilingues, coordenadores pedagógicos, mediadores com as famílias e diretores que servem alunos multilingues e as suas famílias. A IA pode acelerar a criação de apoios linguísticos e de traduções, mas também pode cometer erros que confundem os alunos ou enganam as famílias.",
    "O Capítulo 1 cria apoios para a sala de aula: textos adaptados que mantêm as ideias, glossários bilingues e estruturas de frase por nível de proficiência. O Capítulo 2 trata da comunicação com as famílias, de um processo de tradução com verificação humana, da privacidade e do papel do líder na valorização das línguas maternas.",
    "As orientações federais dos Estados Unidos sobre alunos de inglês mudaram recentemente; os serviços de alunos de inglês e de direitos civis do seu distrito escolar conhecem as suas obrigações atuais. Use só materiais inventados ou gerais, sem informações de alunos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Crie um pacote de apoio multilingue para uma aula: uma versão adaptada do texto principal que mantém as ideias do ano escolar, um glossário bilingue de 8 a 10 palavras-chave numa língua materna que a sua escola serve, estruturas de frase em três níveis de proficiência para a principal tarefa oral ou escrita da aula, e uma mensagem para as famílias traduzida pela IA e verificada por um falante qualificado. Escreva o processo de tradução em quatro passos que a sua escola vai seguir e anote cada correção que o verificador fez.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Professores de turma, professores de desenvolvimento da língua inglesa (ELD) e professores bilingues, coordenadores pedagógicos, mediadores com as famílias e diretores de escolas dos Estados Unidos que servem alunos multilingues e as suas famílias.",
    startingPoint: "Fazem apoios linguísticos e traduções para as famílias à mão ou com ferramentas de tradução gratuitas, muitas vezes sem verificação. Podem não saber quem, no distrito escolar, confirma as obrigações atuais para com as famílias multilingues.",
    gap: "A IA pode acelerar os apoios linguísticos e as traduções, mas os erros podem confundir os alunos ou enganar as famílias, e os apoios podem baixar a aprendizagem em vez de baixar a dificuldade da língua. Os educadores precisam de apoios que mantenham as ideias do ano escolar, de um processo de tradução com verificação por uma pessoa qualificada e de saber bem onde confirmar as obrigações.",
    constraints: [
      "Use só materiais inventados ou gerais, sem informações de alunos",
      "Cada tradução da IA para as famílias é verificada por um falante qualificado antes de ser enviada; assuntos sensíveis, como reuniões de educação especial, usam tradução profissional, como o distrito exige",
      "As orientações federais sobre alunos de inglês mudaram recentemente; o serviço de alunos de inglês (EL) do distrito e o coordenador de direitos civis confirmam as obrigações atuais",
      "Não se pede aos alunos que traduzam assuntos importantes para as suas próprias famílias",
      "Tempo: lições curtas que cabem num dia de aulas"
    ],
    prerequisites: "Nenhum. O curso \"IA para Líderes Escolares e Educativos 2: Ferramentas de IA para Educadores\" é um bom começo."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um texto do ano escolar", action: "adaptar o texto com IA para baixar a dificuldade da língua mantendo as ideias do ano escolar", standard: "passando no teste das mesmas perguntas" },
    { id: "O2", condition: "Para as palavras-chave de uma aula", action: "fazer um glossário bilingue de 8 a 10 palavras numa língua materna que a sua escola serve, com os cognatos marcados", standard: "verificado por um falante qualificado, com cada correção registada" },
    { id: "O3", condition: "Com a principal tarefa oral ou escrita de uma aula", action: "escrever estruturas de frase em três níveis de proficiência com um banco de palavras", standard: "com todos os níveis a pedir o mesmo raciocínio" },
    { id: "O4", condition: "Com uma mensagem para as famílias", action: "seguir um processo de tradução em quatro passos: inglês simples, ferramenta aprovada, verificação qualificada, guardar", standard: "sem enviar nada antes de um falante qualificado o verificar" },
    { id: "O5", condition: "Quando surgem perguntas sobre as obrigações para com as famílias multilingues", action: "identificar quem, no seu distrito, confirma as obrigações atuais e descrever à IA as necessidades dos alunos só em termos gerais", standard: "com o contacto dessa pessoa escrito na página do seu processo" },
    { id: "O6", condition: "Para a sua escola", action: "planear como a IA vai apoiar as línguas maternas sem substituir o pessoal bilingue", standard: "com uma medida de melhor comunicação com as famílias" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Apoios linguísticos na sala de aula",
      lessons: [
        {
          objectives: ["O1"],
          title: "Apoios linguísticos que mantêm a aprendizagem alta",
          minutes: 5,
          goal: "Adaptar um texto na dificuldade da língua sem baixar as ideias do ano escolar.",
          text: [
            "Os alunos multilingues conseguem pensar ao nível do seu ano escolar enquanto ainda aprendem inglês. O objetivo de um apoio é baixar a dificuldade da língua, não o raciocínio. Isso quer dizer manter os conceitos-chave, o vocabulário e as perguntas, e acrescentar clareza: frases mais curtas, títulos, imagens, termos-chave a negrito com definições.",
            "Pedido: \"Adapte este texto de ciências do 7.º ano para alunos que aprendem inglês num nível intermédio. Mantenha todos os conceitos-chave e estas palavras académicas: [lista]. Use frases mais curtas e títulos, ponha as palavras académicas a negrito e defina cada uma em inglês simples. Não retire ideias.\"",
            "Compare o texto adaptado com o original para ver se está correto. Um bom teste: um aluno que lê o texto adaptado conseguiria responder às mesmas perguntas principais que um aluno que leu o original?"
          ],
          steps: ["Faça a lista dos conceitos-chave e das palavras académicas.", "Peça à IA para adaptar ao nível da língua, mantendo os dois.", "Acrescente títulos, imagens e termos a negrito com definições.", "Compare com o original para ver se está correto.", "Teste: dá para responder às mesmas perguntas principais?"],
          words: [["Aluno multilingue", "um aluno que aprende em mais de uma língua, muitas vezes ainda a desenvolver o inglês."], ["Dificuldade da língua", "o quão difícil é a língua de um texto, à parte do quão difíceis são as ideias."], ["Vocabulário académico", "palavras usadas nas disciplinas escolares, como analisar, evidência ou fotossíntese."]],
          slides: [
            { title: "Baixe a língua, não o raciocínio", bullets: ["Mantenha conceitos, vocabulário e perguntas", "Acrescente clareza: frases curtas, títulos, imagens"] },
            { title: "O pedido", bullets: ["Diga o nível e as palavras académicas", "Termos-chave a negrito e definidos", "\"Não retire ideias\""] },
            { title: "Verifique", bullets: ["Está correto em relação ao original?", "Dá para responder às mesmas perguntas principais?"] }
          ],
          tryIt: "Adapte com IA um texto do ano escolar para um nível intermédio de inglês, mantendo todos os conceitos-chave. Verifique-o com o teste das mesmas perguntas.",
          youCanNow: "adaptar textos para alunos multilingues sem baixar as ideias do ano escolar.",
          quickCheck: [
            { objective: "O1", q: "O que é a dificuldade da língua?", options: ["O quão difícil é a língua, à parte das ideias", "Quantas páginas tem um texto", "Quantos alunos falam uma língua", "O quão pesado é um manual"], answer: 0, why: "Baixar a dificuldade da língua torna o texto mais fácil de ler sem baixar as ideias." },
            { objective: "O1", q: "O texto adaptado pela IA retira um conceito-chave para ficar mais curto. O que faria?", options: ["Usá-lo; mais curto é melhor", "Dar aos alunos multilingues um tema mais fácil", "Pôr o conceito de volta e verificar com o teste das mesmas perguntas", "Pedir aos alunos para saltar essa parte"], answer: 2, why: "Os textos adaptados mantêm os conceitos-chave para os alunos aprenderem ao nível do seu ano escolar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Glossários bilingues e cognatos",
          minutes: 5,
          goal: "Fazer um glossário bilingue verificado com as palavras-chave de uma aula.",
          text: [
            "Um glossário bilingue dá cada palavra-chave em inglês, uma definição simples, a palavra na língua materna do aluno e uma frase de exemplo. A IA consegue fazer um rascunho depressa em muitas línguas: \"Faça uma tabela de glossário com estas 10 palavras de ciências do 5.º ano: palavra em inglês, definição simples, tradução em espanhol, frase de exemplo em inglês.\"",
            "Peça à IA para marcar os cognatos (palavras com a mesma forma e o mesmo sentido nas duas línguas, como \"animal\" e \"animal\" ou \"information\" e \"información\") e os falsos amigos (palavras parecidas que querem dizer coisas diferentes). Os cognatos são um ponto forte que os alunos trazem.",
            "As traduções de palavras soltas feitas pela IA podem escolher o sentido errado para a sua disciplina (por exemplo, um termo de matemática ou de ciências que também tem um sentido do dia a dia). Peça a um falante qualificado, como um professor bilingue ou um tradutor do distrito, para verificar o glossário antes de os alunos o usarem."
          ],
          steps: ["Faça a lista de 8 a 10 palavras-chave.", "Peça uma tabela: palavra, definição, palavra na língua materna, exemplo.", "Peça à IA para marcar os cognatos e os falsos amigos.", "Peça a um falante qualificado para o verificar.", "Partilhe-o com os alunos antes da aula."],
          words: [["Glossário bilingue", "uma lista de palavras-chave com o sentido em duas línguas."], ["Cognato", "uma palavra com quase a mesma forma e o mesmo sentido em duas línguas."], ["Falso amigo", "uma palavra parecida em duas línguas mas que quer dizer uma coisa diferente."]],
          slides: [
            { title: "A tabela do glossário", bullets: ["Palavra em inglês e definição simples", "Palavra na língua materna", "Frase de exemplo"] },
            { title: "Os cognatos são um ponto forte", bullets: ["Mesma forma, mesmo sentido: animal / animal", "Cuidado com os falsos amigos"] },
            { title: "Verifique antes de usar", bullets: ["A IA pode escolher o sentido errado para a disciplina", "Um professor bilingue ou tradutor do distrito verifica"] }
          ],
          tryIt: "Faça um glossário bilingue de 8 a 10 palavras para uma aula, numa língua materna que a sua escola serve, com os cognatos marcados. Peça a um falante qualificado para o verificar e registe as correções.",
          youCanNow: "criar glossários bilingues que partem das línguas maternas dos alunos.",
          quickCheck: [
            { objective: "O2", q: "O que é um falso amigo?", options: ["Um cognato que quer dizer o mesmo em duas línguas", "Uma palavra parecida em duas línguas mas que quer dizer uma coisa diferente", "Um amigo que traduz por você", "Uma palavra sem tradução"], answer: 1, why: "Os falsos amigos parecem cognatos mas enganam, por isso precisam de ser marcados." },
            { objective: "O2", q: "A IA traduziu uma palavra de ciências com o sentido do dia a dia em vez do sentido da disciplina. O que faz?", options: ["Deixa ficar; os alunos vão perceber", "Tira a palavra do glossário", "Pede à IA uma definição mais longa", "Pede a um falante qualificado para a corrigir e regista a correção"], answer: 3, why: "As traduções de palavras soltas feitas pela IA podem escolher o sentido errado para a sua disciplina." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Estruturas de frase por nível de proficiência",
          minutes: 5,
          goal: "Escrever estruturas de frase em três níveis para uma tarefa oral ou escrita.",
          text: [
            "As estruturas de frase dão aos alunos a forma da linguagem académica, para se poderem concentrar nas ideias. Para a mesma tarefa, alunos com níveis diferentes de inglês precisam de apoios diferentes. Exemplo de tarefa: explicar se uma afirmação é apoiada por evidências.",
            "Peça à IA três níveis. Iniciante: estruturas curtas com um banco de palavras (\"The claim is ___. The evidence is ___.\"). Intermédio: estruturas com palavras de ligação (\"The claim is supported because ___. However, ___.\"). Avançado: começos abertos e conectores académicos (\"Although the evidence suggests ___, it does not fully account for ___.\").",
            "Afixe os três níveis para os alunos poderem escolher e subir de nível. Verifique que todos os níveis pedem o mesmo raciocínio. Os padrões de desenvolvimento da língua inglesa do seu distrito e os seus colegas de ELD podem ajudar a ajustar as estruturas aos níveis de proficiência."
          ],
          steps: ["Diga qual é a tarefa oral ou escrita.", "Peça estruturas nos níveis iniciante, intermédio e avançado.", "Acrescente um banco de palavras no nível iniciante.", "Verifique que todos os níveis pedem o mesmo raciocínio.", "Afixe os três; deixe os alunos subir de nível."],
          words: [["Estrutura de frase", "uma frase com espaços em branco que mostra a forma de uma resposta."], ["Nível de proficiência", "até onde um aluno já desenvolveu o inglês."], ["Conector", "uma palavra que liga ideias, como because (porque), however (no entanto) ou although (embora)."]],
          slides: [
            { title: "As estruturas libertam os alunos para pensar", bullets: ["A forma da linguagem académica", "Concentração nas ideias"] },
            { title: "Três níveis, o mesmo raciocínio", bullets: ["Iniciante: estruturas curtas, banco de palavras", "Intermédio: conectores", "Avançado: começos académicos abertos"] },
            { title: "Use-as bem", bullets: ["Afixe os três; os alunos sobem de nível", "Ajuste os níveis com os seus colegas de ELD"] }
          ],
          tryIt: "Escolha uma tarefa oral ou escrita de uma aula próxima. Use a IA para escrever estruturas em três níveis, verifique que pedem o mesmo raciocínio e acrescente um banco de palavras.",
          youCanNow: "escrever estruturas de frase que apoiam todos os níveis de inglês na mesma tarefa.",
          quickCheck: [
            { objective: "O3", q: "O que é uma estrutura de frase?", options: ["Uma moldura à volta de uma frase", "Uma lista de palavras para ortografia", "A forma de uma resposta com espaços para preencher", "A tradução de uma frase"], answer: 2, why: "As estruturas mostram aos alunos como construir uma resposta." },
            { objective: "O3", q: "A sua estrutura de nível iniciante pede aos alunos para dizer uma cor, e a avançada pede para explicar uma causa. O que mudaria?", options: ["Fazer todos os níveis pedir o mesmo raciocínio, com apoios diferentes", "Nada; os iniciantes precisam de ideias mais fáceis", "Tirar o nível iniciante", "Não dar estrutura aos iniciantes"], answer: 0, why: "As estruturas de todos os níveis pedem o mesmo raciocínio; só o apoio muda." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Apoios linguísticos na sala de aula",
        questions: [
          { objective: "O1", q: "Um bom apoio linguístico baixa:", options: ["O raciocínio", "O ano escolar", "A dificuldade da língua, mantendo as ideias", "As expectativas"], answer: 2, why: "Os alunos conseguem pensar ao nível do seu ano escolar enquanto aprendem inglês." },
          { objective: "O1", q: "Que teste verifica um texto adaptado?", options: ["Os alunos conseguem responder às mesmas perguntas principais que com o original?", "Está mais curto?", "Tem mais imagens?", "Está numa letra nova?"], answer: 0, why: "As mesmas perguntas querem dizer as mesmas ideias." },
          { objective: "O2", q: "Um cognato é:", options: ["Uma regra de gramática", "Um termo de matemática", "Uma tradução errada", "Uma palavra com quase a mesma forma e o mesmo sentido em duas línguas"], answer: 3, why: "Os cognatos são um ponto forte que os alunos trazem." },
          { objective: "O2", q: "Quem deve verificar um glossário bilingue feito pela IA?", options: ["Ninguém", "Um falante qualificado, como um professor bilingue ou um tradutor do distrito", "A própria IA outra vez", "Um aluno que está a aprender inglês"], answer: 1, why: "A IA pode escolher o sentido errado para a disciplina." },
          { objective: "O3", q: "As estruturas de frase em três níveis devem:", options: ["Pedir raciocínios diferentes", "Ser só para iniciantes", "Ficar em segredo", "Pedir o mesmo raciocínio com apoios diferentes"], answer: 3, why: "O apoio varia; o raciocínio não." }
        ]
      }
    },
    {
      name: "Capítulo 2: Famílias, tradução e liderança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Um processo de tradução com verificação humana",
          minutes: 6,
          goal: "Definir um processo de quatro passos para traduzir as comunicações com as famílias.",
          text: [
            "A tradução por IA é rápida e muitas vezes boa, mas comete erros que importam: datas erradas, tom errado, termos escolares sem tradução direta e erros em línguas menos faladas. As famílias confiam no que a escola lhes envia.",
            "Um processo de quatro passos: 1) Escreva primeiro o texto em inglês simples (frases curtas, sem expressões idiomáticas nem jargão); um inglês claro traduz-se melhor. 2) Traduza com uma ferramenta aprovada. 3) Um falante qualificado (tradutor do distrito, funcionário bilingue ou serviço contratado) verifica e corrige. 4) Envie e guarde a versão verificada para voltar a usar.",
            "Para comunicações de alto risco (educação especial, disciplina, saúde e segurança, direitos legais), use tradução ou interpretação profissional, como o seu distrito exige. Não peça aos alunos para traduzir assuntos importantes para as suas próprias famílias."
          ],
          steps: ["Escreva primeiro em inglês simples: sem expressões idiomáticas nem jargão.", "Traduza com uma ferramenta aprovada.", "Um falante qualificado verifica e corrige.", "Envie e guarde a versão verificada.", "Mensagens de alto risco: tradução ou interpretação profissional."],
          words: [["Expressão idiomática", "uma expressão cujo sentido não é a soma das suas palavras, como \"touch base\" (em inglês, \"falar rapidamente com alguém\")."], ["Interpretação", "tradução da língua falada, por exemplo numa reunião."]],
          slides: [
            { title: "Porque verificar as traduções da IA", bullets: ["Datas e tom errados", "Termos escolares sem equivalente direto", "Mais erros em línguas menos faladas"] },
            { title: "Quatro passos", bullets: ["1 Primeiro, inglês simples", "2 Traduzir com uma ferramenta aprovada", "3 Um falante qualificado verifica", "4 Enviar e guardar"] },
            { title: "Mensagens de alto risco", bullets: ["Educação especial, disciplina, saúde, direitos", "Tradução ou interpretação profissional", "Nunca peça aos alunos para as traduzir"] }
          ],
          tryIt: "Escreva em inglês simples uma mensagem curta para as famílias sobre um evento da escola, traduza-a com uma ferramenta aprovada e peça a um falante qualificado para a verificar. Registe cada correção.",
          youCanNow: "seguir um processo de tradução em que uma pessoa qualificada verifica cada tradução da IA.",
          quickCheck: [
            { objective: "O4", q: "Porque escrever a mensagem em inglês simples antes de a traduzir?", options: ["O inglês simples é mais curto para imprimir", "Um inglês claro traduz-se com mais exatidão", "As ferramentas de tradução só leem inglês simples", "A lei obriga"], answer: 1, why: "Um texto de origem claro leva a menos erros de tradução." },
            { objective: "O4", q: "Um professor quer que um aluno traduza para os pais uma nota sobre as suas próprias notas escolares. O que sugeriria?", options: ["Deixar o aluno traduzir", "Enviar só em inglês", "Usar a IA e enviar sem verificar", "Usar antes o processo com a verificação de um falante qualificado"], answer: 3, why: "Os alunos não devem traduzir assuntos importantes para as suas próprias famílias." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Obrigações, privacidade e orientações atuais",
          minutes: 5,
          goal: "Identificar quem confirma as obrigações da sua escola para com as famílias multilingues e onde verificar as orientações atuais.",
          text: [
            "Há muito tempo que as escolas têm obrigações federais de direitos civis para com os alunos de inglês e para comunicar com os pais com proficiência limitada em inglês numa língua que eles entendam. Em agosto de 2025, segundo o K-12 Dive, o Departamento de Educação dos EUA anulou a sua \"Dear Colleague Letter\" conjunta de 2015 sobre alunos de inglês, dizendo que não estava de acordo com as prioridades do governo. As \"Dear Colleague Letters\" (cartas de orientação aos responsáveis escolares) são orientações, não leis.",
            "Como as orientações mudaram, não confie em resumos antigos. Pergunte ao serviço de alunos de inglês do seu distrito, ao coordenador de direitos civis ou do Título VI (Title VI), ou ao advogado do distrito quais são as suas obrigações atuais, e consulte as orientações sobre alunos de inglês da agência de educação do seu estado, que pode definir as suas próprias exigências.",
            "A privacidade continua a aplicar-se: o estatuto de aluno de inglês, a origem linguística e os resultados de proficiência de um aluno fazem parte dos registos escolares protegidos pela FERPA (a lei federal de privacidade dos registos escolares). Mantenha-os fora das ferramentas de IA não aprovadas e descreva as necessidades em termos gerais quando escrever pedidos."
          ],
          steps: ["Não confie em resumos antigos das orientações sobre EL.", "Pergunte ao serviço de EL do distrito ou ao coordenador de direitos civis quais são as obrigações atuais.", "Consulte as orientações sobre EL da agência de educação do seu estado.", "Mantenha o estatuto de EL e os resultados fora das ferramentas de IA não aprovadas.", "Escreva pedidos com descrições gerais das necessidades."],
          words: [["Aluno de inglês (EL)", "um aluno identificado como precisando de apoio para aprender inglês para a escola."], ["Proficiência limitada em inglês (LEP)", "ainda não conseguir ler, escrever, falar ou entender inglês bem o suficiente para uma situação."], ["Anular", "cancelar ou retirar uma orientação ou decisão anterior."]],
          slides: [
            { title: "As orientações mudaram", bullets: ["Carta \"Dear Colleague\" de 2015 sobre EL anulada, ago. 2025", "Uma orientação não é uma lei"] },
            { title: "Confirme as obrigações atuais", bullets: ["Serviço de EL do distrito ou coordenador de direitos civis", "Orientações sobre EL da agência de educação do estado", "O advogado do distrito, em caso de dúvida"] },
            { title: "Privacidade", bullets: ["Estatuto de EL e resultados são registos escolares", "Mantenha-os fora de ferramentas não aprovadas", "Descreva as necessidades em termos gerais"] }
          ],
          sources: [{ name: "K-12 Dive: o Departamento de Educação anula as orientações sobre alunos de inglês (ago. 2025)", url: "https://www.k12dive.com/news/education-department-rescinds-ela-english-learner-guidance-2015-dear-colleague/758163/" }, { name: "FERPA: proteger a privacidade dos alunos", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Descubra quem, no seu distrito, responde a perguntas sobre a comunicação com as famílias multilingues (serviço de EL, coordenador de direitos civis ou mediador com as famílias) e escreva o contacto dessa pessoa na página do seu processo.",
          youCanNow: "encontrar as suas obrigações atuais para com as famílias multilingues e manter as informações delas privadas.",
          quickCheck: [
            { objective: "O5", q: "O que são as \"Dear Colleague Letters\"?", options: ["Orientações, não leis", "Novas leis federais", "Cartas para as famílias", "Contratos do distrito"], answer: 0, why: "As \"Dear Colleague Letters\" explicam como os serviços do governo leem a lei; são orientações." },
            { objective: "O5", q: "Não tem a certeza do que a sua escola tem de oferecer em comunicações traduzidas. A quem pergunta?", options: ["A um chatbot de IA", "A um artigo de jornal", "Ao serviço de EL do seu distrito ou ao coordenador de direitos civis", "A um grupo de pais na internet"], answer: 2, why: "O pessoal de EL e de direitos civis do distrito conhece as suas obrigações atuais." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Liderar com as línguas maternas como ponto forte",
          minutes: 6,
          goal: "Planear como a sua escola vai usar a IA para valorizar as línguas maternas, sem substituir pessoas.",
          text: [
            "A tradução por IA pode fazer parecer que o pessoal bilingue e os intérpretes são menos necessários. É o contrário: os rascunhos da IA tornam as verificações deles mais rápidas, e o conhecimento que têm da cultura e da comunidade não pode ser automatizado. Proteja o tempo deles para as verificações e para as conversas que mais importam.",
            "Use a IA para honrar as línguas maternas: deixe os alunos explicar as ideias primeiro na língua materna e depois construir o inglês, crie glossários e materiais de boas-vindas nas línguas das famílias, e convide as famílias a partilhar o que sabem. Evite ferramentas ou regras que tratam as línguas maternas só como um problema.",
            "Junte tudo num plano curto da escola: que apoios os professores vão usar, o processo de tradução, quem verifica, como as famílias dão a sua opinião e como vai saber que as famílias estão mais bem informadas (por exemplo, a presença nos eventos ou um pequeno inquérito nas suas línguas)."
          ],
          steps: ["Proteja o tempo do pessoal bilingue para as verificações e as conversas importantes.", "Deixe os alunos usar a língua materna para construir as ideias.", "Crie materiais de boas-vindas nas línguas das famílias.", "Escreva um plano curto da escola com o processo e os verificadores.", "Meça se as famílias estão mais bem informadas."],
          words: [["Baseado nos pontos fortes", "ver o que os alunos e as famílias trazem como pontos fortes, não como faltas."], ["Mediador com as famílias", "um funcionário que cria ligações entre a escola e as famílias."]],
          slides: [
            { title: "A IA apoia as pessoas", bullets: ["Os rascunhos aceleram as verificações do pessoal bilingue", "O conhecimento da cultura e da comunidade continua humano"] },
            { title: "As línguas maternas são um ponto forte", bullets: ["Pensar na língua materna, construir o inglês", "Materiais de boas-vindas nas línguas das famílias"] },
            { title: "Um plano curto da escola", bullets: ["Apoios, processo, verificadores", "Opinião das famílias", "Medir: as famílias estão mais bem informadas?"] }
          ],
          tryIt: "Tarefa final: crie o seu pacote de apoio multilingue (texto adaptado, glossário bilingue verificado, estruturas de frase em três níveis, uma tradução para as famílias verificada), escreva o seu processo de tradução em quatro passos com o contacto do verificador e anote cada correção feita.",
          youCanNow: "liderar um uso da IA que apoia os alunos multilingues e as famílias com exatidão e respeito.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer \"baseado nos pontos fortes\" para os alunos multilingues?", options: ["Ver o que os alunos trazem como pontos fortes", "Contar os bens da escola", "Concentrar-se no que falta aos alunos", "Usar só inglês na aula"], answer: 0, why: "Uma visão baseada nos pontos fortes trata as línguas maternas como pontos fortes." },
            { objective: "O6", q: "Um líder diz que, com a tradução por IA, o pessoal bilingue já não é necessário. O que diria?", options: ["Concordo; a IA é mais barata", "Sugerir substituir os mediadores com as famílias por chatbots", "Parar todas as traduções", "As verificações deles ficam mais rápidas, e o conhecimento que têm da comunidade continua a importar"], answer: 3, why: "A IA acelera o trabalho, mas são pessoas qualificadas que o verificam e conhecem a comunidade." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Famílias, tradução e liderança",
        questions: [
          { objective: "O4", q: "Porque escrever em inglês simples antes de traduzir?", options: ["A IA não consegue ler textos longos", "É mais curto", "Um inglês claro traduz-se com mais exatidão", "A lei obriga"], answer: 2, why: "As expressões idiomáticas e o jargão causam erros de tradução." },
          { objective: "O4", q: "Uma mensagem sobre a reunião de educação especial de um aluno precisa de tradução. Qual é a melhor opção?", options: ["Tradução profissional, como o seu distrito exige", "Pedir ao aluno para traduzir", "Tradução da IA sem verificação", "Enviar só em inglês"], answer: 0, why: "As mensagens de alto risco precisam de tradução profissional." },
          { objective: "O5", q: "O que aconteceu em 2025 à \"Dear Colleague Letter\" de 2015 sobre alunos de inglês, segundo o K-12 Dive?", options: ["Passou a ser lei", "Foi anulada", "Foi traduzida", "Nada"], answer: 1, why: "O Departamento anulou-a em agosto de 2025." },
          { objective: "O5", q: "Os resultados de proficiência em inglês de um aluno são:", options: ["Parte dos registos escolares protegidos pela FERPA", "Informação pública", "Seguros em qualquer ferramenta de IA", "Propriedade do fornecedor"], answer: 0, why: "São registos do aluno." },
          { objective: "O6", q: "Como muda a tradução por IA o papel do pessoal bilingue?", options: ["Já não é necessário", "Só precisa de rever a ortografia", "Deve ser substituído por alunos", "As verificações ficam mais rápidas, e o conhecimento da comunidade continua a importar"], answer: 3, why: "Os rascunhos da IA apoiam as pessoas; não as substituem." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Alunos Multilingues",
    questions: [
      { objective: "O1", q: "Os alunos multilingues conseguem:", options: ["Fazer só trabalhos fáceis", "Pensar ao nível do seu ano escolar enquanto ainda aprendem inglês", "Não usar palavras académicas", "Não aprender com a IA"], answer: 1, why: "O nível da língua não é o nível do raciocínio." },
      { objective: "O1", q: "A dificuldade da língua quer dizer:", options: ["O número de línguas faladas", "O quão pesado é o livro", "O quão difícil é a língua, à parte das ideias", "A quantidade de trabalhos de casa"], answer: 2, why: "Os apoios baixam a dificuldade da língua, não as ideias." },
      { objective: "O1", q: "Um texto adaptado deve manter:", options: ["Nenhuma pergunta", "Só palavras fáceis", "Os conceitos-chave e o vocabulário académico", "Metade das ideias"], answer: 2, why: "O objetivo de aprendizagem continua o mesmo." },
      { objective: "O1", q: "O vocabulário académico inclui palavras como:", options: ["Evidência e analisar", "Olá e obrigado", "Almoço e recreio", "Autocarro e carro"], answer: 0, why: "As palavras das disciplinas escolares precisam de ser ensinadas diretamente." },
      { objective: "O2", q: "Um glossário bilingue inclui:", options: ["Notas", "Só palavras em inglês", "Nomes de alunos", "Palavra, definição, palavra na língua materna, exemplo"], answer: 3, why: "As duas línguas constroem a compreensão." },
      { objective: "O2", q: "Um falso amigo é:", options: ["Um cognato", "Uma palavra parecida em duas línguas mas que quer dizer uma coisa diferente", "Um colega de turma", "Um tradutor"], answer: 1, why: "Os alunos devem ter cuidado com eles." },
      { objective: "O2", q: "As traduções de palavras soltas feitas pela IA podem:", options: ["Traduzir só nomes", "Estar sempre perfeitas", "Nunca ser úteis", "Escolher o sentido errado para a sua disciplina"], answer: 3, why: "O contexto importa; verifique-as." },
      { objective: "O3", q: "Uma estrutura de frase:", options: ["É um teste de gramática", "É uma moldura de fotografia", "Mostra a forma de uma resposta com espaços em branco", "É uma nota"], answer: 2, why: "As estruturas deixam os alunos concentrar-se nas ideias." },
      { objective: "O3", q: "As estruturas de nível iniciante incluem muitas vezes:", options: ["Um banco de palavras", "Nenhum apoio", "Só conectores avançados", "Só perguntas"], answer: 0, why: "Mais apoio nos primeiros níveis." },
      { objective: "O3", q: "Quem ajuda a ajustar as estruturas aos níveis de proficiência?", options: ["Um fornecedor", "Os colegas de ELD e os padrões de desenvolvimento da língua inglesa", "Só a IA", "Ninguém"], answer: 1, why: "Os especialistas conhecem os níveis." },
      { objective: "O4", q: "O passo 3 do processo de tradução é:", options: ["Um falante qualificado verifica e corrige", "Enviar logo", "Apagar o inglês", "Pedir a um aluno"], answer: 0, why: "A verificação humana apanha os erros." },
      { objective: "O4", q: "Porque guardar as traduções verificadas?", options: ["Por nenhuma razão", "Para as vender", "Para as esconder", "Para voltar a usar versões corretas"], answer: 3, why: "As versões verificadas poupam tempo mais tarde." },
      { objective: "O4", q: "Os alunos não devem traduzir:", options: ["Palavras de vocabulário na aula", "Assuntos importantes para as suas próprias famílias", "As suas próprias ideias", "Títulos de livros"], answer: 1, why: "É injusto para o aluno e arriscado para a família." },
      { objective: "O5", q: "As \"Dear Colleague Letters\" são:", options: ["Decisões de tribunais", "Leis aprovadas pelo Congresso", "Orientações, não leis", "Leis estaduais"], answer: 2, why: "As orientações podem ser publicadas ou retiradas." },
      { objective: "O5", q: "Para confirmar as obrigações atuais para com as famílias multilingues, pergunte:", options: ["A um fornecedor", "A um chatbot", "Ao serviço de EL do seu distrito ou ao coordenador de direitos civis", "Às redes sociais"], answer: 2, why: "Eles conhecem a lei e as políticas atuais." },
      { objective: "O5", q: "A agência de educação do seu estado pode:", options: ["Definir as suas próprias exigências sobre alunos de inglês", "Nunca publicar orientações", "Passar totalmente por cima da lei federal de direitos civis", "Proibir a tradução"], answer: 0, why: "Os estados publicam as suas próprias orientações." },
      { objective: "O5", q: "Quando escreve à IA sobre as necessidades dos alunos, descreva-as:", options: ["Com a situação do visto", "Com nomes e resultados", "Com moradas", "Em termos gerais"], answer: 3, why: "Mantenha privadas as informações dos alunos." },
      { objective: "O6", q: "\"Baseado nos pontos fortes\" quer dizer:", options: ["Contar os bens da escola", "Ver o que os alunos trazem como pontos fortes", "Concentrar-se nas faltas", "Um método de orçamento"], answer: 1, why: "As línguas maternas são um ponto forte." },
      { objective: "O6", q: "Deixar os alunos explicar as ideias primeiro na língua materna:", options: ["Substitui o ensino do inglês", "Atrasa a aprendizagem", "Não é permitido", "Constrói a compreensão antes do inglês"], answer: 3, why: "Pensar numa língua forte apoia a aprendizagem." },
      { objective: "O6", q: "Uma boa medida de melhor comunicação com as famílias é:", options: ["O número de páginas enviadas", "O número de pedidos à IA", "A presença nos eventos ou um inquérito às famílias nas suas línguas", "Os relatórios do fornecedor"], answer: 2, why: "Meça o que as famílias realmente vivem." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 5, 7, 8, 10, 13, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Texto adaptado", objective: "O1", notYet: "Perderam-se ideias-chave ou foram simplificadas até desaparecer.", meets: "Uma versão adaptada que mantém as ideias do ano escolar.", exceeds: "Passa no teste das mesmas perguntas e mantém o vocabulário académico com apoio." },
      { name: "Glossário bilingue", objective: "O2", notYet: "Menos de 8 palavras, ou não verificado por um falante qualificado.", meets: "8 a 10 palavras-chave numa língua materna, verificadas por um falante qualificado.", exceeds: "Os cognatos e os falsos amigos estão marcados, com um exemplo para cada palavra." },
      { name: "Estruturas de frase", objective: "O3", notYet: "Menos de três níveis, ou os níveis pedem raciocínios diferentes.", meets: "Estruturas em três níveis de proficiência para a tarefa principal da aula.", exceeds: "Todos os níveis pedem o mesmo raciocínio, e as estruturas de iniciante incluem um banco de palavras." },
      { name: "Tradução para as famílias verificada", objective: "O4", notYet: "A tradução não foi verificada por um falante qualificado.", meets: "Uma mensagem para as famílias traduzida pela IA e verificada por um falante qualificado, com as correções anotadas.", exceeds: "A versão verificada está guardada para voltar a usar." },
      { name: "Processo de tradução", objective: "O5", notYet: "Menos de quatro passos, ou sem o contacto do verificador.", meets: "Um processo de quatro passos que a sua escola vai seguir.", exceeds: "Inclui o contacto do verificador e a quem perguntar sobre as obrigações." }
    ]
  },
  evaluation: {
    results: [
      "Educadores que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Professores que dizem usar textos adaptados, glossários ou estruturas de frase com alunos multilingues em 30 dias (inquérito de seguimento)",
      "Escolas que adotam um processo de tradução com verificação qualificada (inquérito de seguimento)",
      "Presença das famílias nos eventos ou resultados de inquéritos às famílias nas suas línguas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet e uma ferramenta de IA e de tradução aprovada pelo distrito",
      "Um texto e uma tarefa do ano escolar de uma aula próxima (sem informações de alunos)",
      "Acesso a um falante qualificado de uma língua materna que a sua escola serve",
      "Cerca de 60 minutos no total, mais o tempo para a verificação do falante qualificado"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos, depois adaptem um texto em grupo e façam o teste das mesmas perguntas.",
      "Combine com antecedência os falantes qualificados para que cada glossário e cada tradução possam ser verificados.",
      "Use só materiais inventados ou gerais; descreva à IA as necessidades dos alunos só em termos gerais.",
      "Convide o serviço de EL do distrito ou o coordenador de direitos civis para responder a perguntas sobre as obrigações atuais.",
      "Avalie a tarefa final com a grelha de avaliação e peça a lista das correções que o verificador fez."
    ]
  }
};
