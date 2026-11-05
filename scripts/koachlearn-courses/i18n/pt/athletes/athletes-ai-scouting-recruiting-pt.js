"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-ai-scouting-recruiting.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Recruiting contact rules and calendars differ by sport and division and change often: the course gives no dates and sends students to ncaa.org, the NCAA Eligibility Center and their coaches.

module.exports = {
  id: "athletes-ai-scouting-recruiting-pt",
  lang: "pt",
  translationOf: "athletes-ai-scouting-recruiting",
  category: "Athletes",
  name: "IA na Observação e no Recrutamento de Atletas",
  skills: "Criar uma lista de escolas-alvo numa folha de cálculo, Fazer um perfil de recrutamento e um vídeo de melhores jogadas, Escrever e-mails pessoais a treinadores universitários com IA, Saber onde verificar as regras de elegibilidade e de recrutamento, Organizar notas de observação justas (para treinadores)",
  outcome: "seguir um plano de recrutamento organizado: uma lista de 15 escolas-alvo numa folha de cálculo, um perfil de recrutamento de uma página e um vídeo de melhores jogadas de dois a quatro minutos, e e-mails pessoais a três treinadores universitários preparados com IA, verificando as regras oficiais de elegibilidade e de recrutamento do seu desporto.",
  about: [
    "Este curso é para atletas do ensino secundário e de faculdades comunitárias (junior college) que querem jogar na universidade, para os pais deles e para os treinadores que os ajudam. Uma parte curta também ajuda os treinadores a organizar as notas de observação de forma justa.",
    "O recrutamento é um processo que você pode gerir como um projeto. Vai pesquisar escolas, mostrar a sua capacidade e o seu carácter com clareza, contactar treinadores de forma profissional e registar tudo num só lugar, usando a IA para poupar tempo, mas nunca para inventar nada.",
    "As regras de recrutamento e de elegibilidade dependem do seu desporto e da divisão (NCAA Divisão I, II, III, NAIA, faculdade comunitária) e mudam muitas vezes. Este curso mostra onde verificar; confirme sempre com o treinador da sua escola, o orientador escolar e os sites oficiais."
  ],
  finalTask: "Monte o seu plano de recrutamento: uma folha de cálculo com 15 escolas-alvo (difícil, adequada e provável), um perfil de recrutamento de uma página, um vídeo de melhores jogadas de dois a quatro minutos com as melhores jogadas primeiro, e e-mails pessoais a três treinadores preparados com IA e corrigidos por você. Acrescente uma nota a dizer de que conta de elegibilidade precisa e onde verificou as regras de recrutamento do seu desporto.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário e de faculdades comunitárias que querem jogar na universidade, os pais deles e os treinadores que os ajudam ou que observam jogadores.",
    startingPoint: "Jogam em competição e podem ter vídeos de jogos, estatísticas e um treinador de clube ou da escola. Muitos não sabem de que conta de elegibilidade precisam, confiam na IA ou em artigos antigos para as regras de recrutamento, enviam e-mails iguais para todos e não registam os contactos.",
    gap: "Saltar passos de elegibilidade, procurar as escolas erradas ou enviar mensagens genéricas pode custar a um atleta um lugar na equipa universitária ou uma ajuda financeira, e serviços pagos podem ficar com dinheiro com falsas promessas. Um plano organizado, com as regras verificadas, materiais honestos e e-mails pessoais, dá-lhes uma oportunidade verdadeira.",
    constraints: [
      "Linguagem simples, mais ou menos ao nível de leitura do 8.º ano",
      "Um telefone ou computador com Google Sheets, um assistente de IA gratuito e um editor de vídeo",
      "Cerca de 60 minutos de lições, mais tempo para fazer o perfil, o vídeo e a lista de escolas",
      "As regras de elegibilidade e de contacto no recrutamento variam com a organização, o desporto e a divisão e mudam muitas vezes; verifique em ncaa.org, no site da NAIA e com o orientador escolar",
      "Muitas vezes os jogadores são menores: nada de moradas de casa nem dados privados nos perfis ou nas ferramentas de IA"
    ],
    prerequisites: "Nenhum. Os cursos \"Análise de Vídeo e Inteligência de Jogo\" e \"SEO e Criar o Seu Site com IA\" são bons complementos."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Tendo em conta os níveis universitários que quer alcançar", action: "identificar de que conta de elegibilidade precisa e onde verificar as regras de contacto no recrutamento do seu desporto", standard: "usando os sites oficiais e o seu orientador escolar, e não a IA ou artigos antigos, para regras e datas" },
    { id: "O2", condition: "Usando o Google Sheets e um assistente de IA", action: "criar uma lista de 15 escolas-alvo marcadas como difícil, adequada ou provável", standard: "com cada escola, nome de treinador e dado do plantel verificado nas páginas oficiais da escola" },
    { id: "O3", condition: "Usando as suas estatísticas, notas e jogadas verdadeiras", action: "criar um perfil de recrutamento de uma página e um vídeo de melhores jogadas de dois a quatro minutos", standard: "com todas as estatísticas verdadeiras, as melhores jogadas nos primeiros 30 segundos, você assinalado antes de cada jogada, sem morada de casa e revisto por um treinador" },
    { id: "O4", condition: "Usando o seu perfil e um rascunho feito pela IA", action: "escrever e-mails pessoais de apresentação a três treinadores universitários", standard: "com menos de 150 palavras cada um, um assunto claro e uma razão verdadeira e concreta para cada escola, enviados por você a partir de um e-mail profissional" },
    { id: "O5", condition: "Usando a sua lista de escolas-alvo", action: "registar cada contacto, resposta e próximo passo com datas", standard: "atualizada todas as semanas, e com qualquer serviço de recrutamento pago verificado antes com o seu treinador ou orientador escolar" },
    { id: "O6", condition: "Como treinador que observa jogadores", action: "organizar as notas de observação com os mesmos critérios e uma escala de 1 a 5 definida para cada jogador", standard: "com avaliações baseadas no que viu, a IA usada só para resumir notas, os dados privados protegidos e o preconceito verificado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar-se para ser recrutado",
      lessons: [
        {
          objectives: ["O1"],
          title: "Primeiro as regras: elegibilidade e o básico do recrutamento",
          minutes: 5,
          goal: "Encontrar a conta de elegibilidade e as regras de recrutamento que se aplicam a você.",
          text: [
            "O desporto universitário tem organizações diferentes: as Divisões I, II e III da NCAA, a NAIA e as faculdades comunitárias (junior colleges). Cada uma tem as suas regras académicas e de elegibilidade.",
            "Se pensa jogar na Divisão I ou II da NCAA, vai precisar de uma conta no NCAA Eligibility Center (Centro de Elegibilidade da NCAA), que verifica os seus estudos e o seu estatuto de amador. O site do centro descreve uma Profile Page (página de perfil) para alunos mais novos e para a Divisão III, e contas de certificação para as Divisões I e II. A NAIA tem o seu próprio centro de elegibilidade; verifique no site oficial dela.",
            "Quando e como os treinadores universitários podem contactar você depende do seu desporto e da divisão, e muda muitas vezes. Não confie na IA nem em artigos antigos para as datas; verifique em ncaa.org, pergunte ao treinador da sua escola e ao orientador escolar, e mantenha as suas notas e as disciplinas obrigatórias em dia."
          ],
          steps: ["Decida que níveis quer alcançar.", "Visite o NCAA Eligibility Center e leia que conta serve para você.", "Se for o seu caso, veja o site de elegibilidade da própria NAIA.", "Pergunte ao orientador escolar sobre as disciplinas obrigatórias e as notas.", "Verifique as regras de contacto no recrutamento do seu desporto em ncaa.org."],
          words: [["Elegibilidade", "cumprir as regras académicas e outras necessárias para jogar desporto universitário."], ["NCAA Eligibility Center", "o serviço da NCAA onde os futuros atletas universitários se registam para que os seus estudos e o seu estatuto de amador sejam verificados."], ["Divisão", "um nível do desporto universitário, como a Divisão I, II ou III da NCAA."]],
          slides: [
            { title: "Níveis do desporto universitário", bullets: ["NCAA Divisões I, II, III", "NAIA", "Faculdades comunitárias (junior colleges)"] },
            { title: "Contas de elegibilidade", bullets: ["NCAA DI e DII: conta de certificação", "Alunos mais novos e DIII: Profile Page", "NAIA: o seu próprio centro de elegibilidade"] },
            { title: "As regras de contacto mudam", bullets: ["Dependem do desporto e da divisão", "Verifique em ncaa.org, não na IA", "Pergunte ao seu treinador e ao orientador escolar"] }
          ],
          sources: [
            { name: "NCAA Eligibility Center (Centro de Elegibilidade da NCAA)", url: "https://web3.ncaa.org/ecwr3/" },
            { name: "NCAA: Nome, Imagem e Semelhança (regras para recrutas e atletas)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Visite o site do NCAA Eligibility Center e escreva que tipo de conta serve para você. Depois escreva uma pergunta sobre as regras de recrutamento do seu desporto para fazer ao treinador da sua escola ou ao orientador escolar.",
          youCanNow: "encontrar a conta de elegibilidade e as regras oficiais que se aplicam a você.",
          quickCheck: [
            { objective: "O1", q: "Que organização tem o seu próprio centro de elegibilidade, separado da NCAA?", options: ["A NAIA", "A sua escola secundária", "A equipa do seu clube", "O jornal local"], answer: 0, why: "A NAIA tem o seu próprio centro de elegibilidade; verifique no site oficial dela." },
            { objective: "O1", q: "Uma IA diz-lhe a data a partir da qual os treinadores universitários podem ligar para você. O que faz?", options: ["Confia nela", "Publica-a para os colegas de equipa", "Verifica em ncaa.org e pergunta ao seu treinador ou orientador escolar", "Espera que um treinador ligue"], answer: 2, why: "As regras de contacto mudam muitas vezes; verifique nas fontes oficiais, não na IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Criar a sua lista de escolas-alvo",
          minutes: 6,
          goal: "Criar uma folha de cálculo com 15 escolas que combinam com você no desporto, nos estudos e na vida pessoal.",
          text: [
            "A escola certa é uma onde você pode jogar, estudar o que quer, pagar os custos e ser feliz se o desporto acabar. Procure uma mistura: escolas difíceis (um grande esforço), escolas adequadas (uma boa combinação) e escolas prováveis (onde claramente ia contribuir).",
            "Faça uma folha no Google Sheets com as colunas: Escola, Divisão, Local, Curso que quer, Necessidade do plantel na sua posição, Combinação académica, Notas sobre custos, Nome e e-mail do treinador, Estado. Tire os nomes dos treinadores e os dados do plantel do site oficial de desporto de cada escola.",
            "Um assistente de IA pode sugerir escolas para pesquisar: \"Sou um médio de futebol de 5'9\" (cerca de 1,75 m) com média 3,5 (GPA) e quero estudar enfermagem no sudeste dos EUA. Sugira 20 universidades com equipas de futebol de níveis diferentes para eu pesquisar.\" Depois verifique cada uma você mesmo; as listas da IA podem estar desatualizadas ou erradas."
          ],
          steps: ["Crie a folha com as colunas acima.", "Peça à IA escolas para pesquisar.", "Verifique as páginas oficiais de desporto e de estudos de cada escola.", "Marque cada uma como difícil, adequada ou provável.", "Fique com 15 que combinam mesmo com você."],
          words: [["Lista de escolas-alvo", "as escolas que pensa contactar."], ["Plantel", "a lista dos jogadores de uma equipa; mostra quem está a terminar os estudos na sua posição."]],
          slides: [
            { title: "A escola certa", bullets: ["Pode jogar?", "Pode estudar o que quer?", "Pode pagar? Seria feliz sem o desporto?"] },
            { title: "Colunas da folha", bullets: ["Escola, Divisão, Local, Curso", "Necessidade do plantel, Combinação académica, Custos", "Contacto do treinador, Estado"] },
            { title: "A IA sugere, você verifica", bullets: ["Peça escolas para pesquisar", "Verifique as páginas oficiais", "Difícil, adequada, provável"] }
          ],
          tryIt: "Crie a sua folha de escolas-alvo. Use a IA para ter ideias, verifique dez escolas nos sites oficiais e marque cada uma como difícil, adequada ou provável.",
          youCanNow: "criar e verificar uma lista equilibrada de escolas-alvo.",
          quickCheck: [
            { objective: "O2", q: "O que é uma escola \"provável\" na sua lista?", options: ["Um esforço muito grande", "Uma escola onde claramente ia contribuir", "Uma escola sem equipa no seu desporto", "Só a escola dos seus sonhos"], answer: 1, why: "As escolas prováveis são aquelas onde claramente ia contribuir." },
            { objective: "O2", q: "A IA põe na lista uma escola de que nunca ouviu falar. O que faz?", options: ["Acrescenta-a sem verificar", "Apaga a lista toda", "Envia logo um e-mail ao treinador", "Verifica primeiro as páginas oficiais de desporto e de estudos dela"], answer: 3, why: "As listas da IA podem estar desatualizadas ou erradas, por isso verifique cada escola." }
          ]
        },
        {
          objectives: ["O3"],
          title: "O seu perfil de recrutamento e o vídeo de melhores jogadas",
          minutes: 6,
          goal: "Fazer um perfil de recrutamento de uma página e planear um vídeo de melhores jogadas de dois a quatro minutos.",
          text: [
            "Um perfil de recrutamento tem uma página: nome, ano em que termina o secundário, posição, altura e peso (verdadeiros), escola e clube, estatísticas principais, dados académicos (média, resultados de exames se os tiver, curso que pensa seguir), prémios, os contactos dos seus treinadores, o link do seu vídeo e o seu e-mail.",
            "Um vídeo de melhores jogadas deve ser curto, muitas vezes de dois a quatro minutos, com as suas melhores jogadas nos primeiros 30 segundos. Mostre quem você é antes de cada jogada, com uma seta ou um círculo. Acrescente o link de um jogo completo se os treinadores do seu desporto gostam de ver um. Pergunte ao seu treinador o que os treinadores do seu desporto esperam.",
            "A IA pode ajudar a escrever o perfil a partir das suas notas e a pôr a lista de jogadas por ordem. Todas as estatísticas têm de ser verdadeiras e possíveis de confirmar; os treinadores confirmam com os seus treinadores. Não ponha dados privados, como a morada de casa, no perfil."
          ],
          steps: ["Junte as suas estatísticas, notas e prémios verdadeiros.", "Peça à IA para organizar um perfil de uma página.", "Escolha as suas melhores jogadas e ponha as melhores primeiro.", "Assinale-se antes de cada jogada.", "Peça ao seu treinador para rever os dois."],
          words: [["Perfil de recrutamento", "um resumo de uma página sobre você como atleta e aluno, para os treinadores universitários."], ["Vídeo de melhores jogadas", "um vídeo curto com as suas melhores jogadas."]],
          slides: [
            { title: "Perfil de uma página", bullets: ["Ano de conclusão, posição, tamanho verdadeiro", "Estatísticas, média, curso que pensa seguir", "Contactos dos treinadores, link do vídeo, o seu e-mail"] },
            { title: "Vídeo de melhores jogadas", bullets: ["Muitas vezes 2-4 minutos", "Melhores jogadas nos primeiros 30 segundos", "Assinale-se antes de cada jogada"] },
            { title: "Honesto e seguro", bullets: ["Os treinadores confirmam as estatísticas", "Nada de morada de casa", "O treinador revê"] }
          ],
          tryIt: "Use a IA para transformar as suas notas num perfil de uma página. Escreva a sua lista de jogadas com as cinco melhores primeiro e peça ao seu treinador para rever os dois.",
          youCanNow: "criar um perfil de recrutamento honesto e um bom plano para o vídeo de melhores jogadas.",
          quickCheck: [
            { objective: "O3", q: "Porque se assinalar antes de cada jogada?", options: ["Para os treinadores saberem que jogador é você", "Para o vídeo ficar mais longo", "Para esconder o seu número", "Porque a música obriga"], answer: 0, why: "Uma seta ou um círculo ajuda os treinadores a encontrar você logo." },
            { objective: "O3", q: "O tempo de 40 jardas no seu perfil é mais rápido do que alguma vez correu. O que faz?", options: ["Deixa ficar; os treinadores não confirmam", "Tira a estatística por completo", "Muda para o seu tempo verdadeiro, que se pode confirmar", "Arredonda ainda um pouco mais para baixo"], answer: 2, why: "Todas as estatísticas têm de ser verdadeiras; os treinadores confirmam com os seus treinadores." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar-se para ser recrutado",
        questions: [
          { objective: "O1", q: "Pensa jogar na Divisão I da NCAA. Onde se regista para a elegibilidade?", options: ["Numa aplicação de redes sociais", "No seu ginásio", "No NCAA Eligibility Center", "Em lado nenhum"], answer: 2, why: "Os atletas da DI e da DII precisam de uma conta de certificação no Eligibility Center." },
          { objective: "O1", q: "Onde deve verificar quando os treinadores podem contactar você?", options: ["Em ncaa.org e com o treinador da sua escola ou o orientador escolar", "Só num chatbot de IA", "Num artigo de há 5 anos", "Com um rival"], answer: 0, why: "As regras dependem do desporto e da divisão e mudam muitas vezes." },
          { objective: "O2", q: "Uma lista de escolas-alvo equilibrada tem:", options: ["Só as 5 melhores equipas", "Só uma escola", "Escolas que não verificou", "Escolas difíceis, adequadas e prováveis"], answer: 3, why: "Uma mistura dá-lhe opções verdadeiras." },
          { objective: "O2", q: "A IA sugere uma escola cuja equipa já acabou. O que correu mal?", options: ["Nada", "As listas da IA podem estar desatualizadas; verifique nas páginas oficiais", "A escola está a esconder isso", "Deve candidatar-se na mesma"], answer: 1, why: "Verifique sempre os sites oficiais." },
          { objective: "O3", q: "Onde devem ficar as suas melhores jogadas num vídeo?", options: ["Mesmo no fim", "Nos primeiros 30 segundos", "No meio", "Escondidas"], answer: 1, why: "Os treinadores decidem depressa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Contactar treinadores e manter-se organizado",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever e-mails pessoais a treinadores com IA",
          minutes: 6,
          goal: "Escrever um e-mail de apresentação curto e pessoal a um treinador universitário.",
          text: [
            "Os treinadores recebem muitos e-mails. O que é curto e pessoal ganha. Inclua: um assunto com o ano de conclusão, a posição e um dado principal (\"2027 Médio | Média 3,5 | Clube Metro FC\"); porque se interessa por aquela escola em concreto; as suas estatísticas e dados académicos principais; o link do vídeo e do perfil; o seu calendário próximo (torneios, showcases); e o contacto do seu treinador.",
            "Peça a um assistente de IA: \"Escreva um e-mail curto ao treinador principal de futebol de [escola]. Use o meu perfil abaixo. Diga que me interesso pelo curso de enfermagem deles e pelo estilo de jogo de posse de bola. Menos de 150 palavras.\" Depois torne-o seu e verifique cada detalhe.",
            "Envie a partir de um e-mail profissional que vê todos os dias. Nunca envie exatamente o mesmo e-mail a todas as escolas; os treinadores percebem. Envie você mesmo, não os seus pais, e depois de umas duas semanas faça um seguimento educado com uma novidade, como um vídeo novo."
          ],
          steps: ["Escreva um assunto claro.", "Peça à IA um rascunho com menos de 150 palavras usando o seu perfil.", "Acrescente uma razão verdadeira e concreta para aquela escola.", "Verifique cada detalhe e o nome do treinador.", "Envie do seu e-mail profissional; faça seguimento com novidades."],
          words: [["Assunto", "o título curto de um e-mail; a primeira coisa que o treinador vê."], ["Showcase", "um evento onde os atletas jogam à frente de treinadores universitários."]],
          slides: [
            { title: "Curto e pessoal", bullets: ["Assunto: ano de conclusão, posição, dado principal", "Porquê esta escola, em concreto", "Estatísticas, estudos, link do vídeo"] },
            { title: "A IA escreve o rascunho, você personaliza", bullets: ["Menos de 150 palavras", "Uma razão verdadeira para aquela escola", "Verifique o nome do treinador"] },
            { title: "Envie da forma certa", bullets: ["E-mail profissional, visto todos os dias", "Você envia, não os seus pais", "Faça seguimento com novidades"] }
          ],
          tryIt: "Escreva e-mails a três treinadores da sua lista com a ajuda da IA. Torne cada um pessoal e peça ao seu treinador ou a um dos pais para ler um antes de o enviar.",
          youCanNow: "escrever um e-mail curto e pessoal a um treinador universitário.",
          quickCheck: [
            { objective: "O4", q: "O que deve ter o assunto de um e-mail a um treinador?", options: ["\"Olá treinador\"", "Ano de conclusão, posição e dados principais", "Os nomes dos seus pais", "\"Por favor leia\""], answer: 1, why: "Um assunto claro com o ano de conclusão, a posição e os dados principais chama a atenção." },
            { objective: "O4", q: "Duas semanas depois do seu e-mail, não há resposta. O que faz?", options: ["Envia o mesmo e-mail outra vez", "Pede a um dos pais para ligar ao treinador", "Desiste daquela escola", "Faz um seguimento educado com uma novidade, como um vídeo novo"], answer: 3, why: "Faça um seguimento educado depois de umas duas semanas, com algo novo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gerir o seu recrutamento como um projeto",
          minutes: 5,
          goal: "Registar cada contacto e cada próximo passo na sua folha de recrutamento.",
          text: [
            "Acrescente colunas de registo à sua lista de escolas: Data do contacto, Resposta (sim/não), O que disseram, Próximo passo, Data do próximo passo. Atualize-a todas as semanas.",
            "Esteja atento aos sinais de interesse verdadeiro: respostas pessoais, perguntas sobre as suas notas, convites para campos de treino ou visitas, ou um treinador a ver você jogar. Um anúncio geral de um campo de treino não é o mesmo que interesse pessoal.",
            "O recrutamento pode causar stress. Ponha a escola e o treino primeiro. Tenha cuidado com \"serviços de recrutamento\" que garantem bolsas a troco de dinheiro; fale com o treinador da sua escola e com o orientador escolar antes de pagar a alguém."
          ],
          steps: ["Acrescente colunas de registo à sua folha.", "Registe cada e-mail, resposta e chamada.", "Escreva o próximo passo e a data.", "Atualize todas as semanas.", "Verifique qualquer serviço de recrutamento pago primeiro com o seu treinador."],
          words: [["Seguimento", "uma próxima mensagem educada com informação nova."], ["Serviço de recrutamento", "uma empresa que cobra para promover você junto das universidades."]],
          slides: [
            { title: "Registe tudo", bullets: ["Data do contacto, resposta, o que disseram", "Próximo passo e data", "Atualize todas as semanas"] },
            { title: "Interesse verdadeiro", bullets: ["Respostas pessoais", "Perguntas sobre as notas", "Convites para campos de treino ou visitas"] },
            { title: "Mantenha o equilíbrio", bullets: ["Escola e treino primeiro", "Nada de pagar por bolsas garantidas", "Fale primeiro com o seu treinador"] }
          ],
          tryIt: "Acrescente as colunas de registo à sua folha e registe os seus três e-mails, com um próximo passo e uma data para cada um.",
          youCanNow: "registar os contactos e os próximos passos do recrutamento como um projeto.",
          quickCheck: [
            { objective: "O5", q: "Que coluna de registo ajuda a lembrar o que fazer?", options: ["Próximo passo e data do próximo passo", "Cor favorita", "Mascote", "Resultados da equipa"], answer: 0, why: "O próximo passo e a data mantêm o seu recrutamento a andar." },
            { objective: "O5", q: "Recebe de uma universidade um anúncio geral de um campo de treino. O que quer dizer?", options: ["Já tem uma bolsa", "Não é o mesmo que interesse pessoal", "É obrigado a ir", "O treinador viu o seu vídeo"], answer: 1, why: "Respostas e perguntas pessoais mostram interesse verdadeiro; um anúncio geral não." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Para treinadores: notas de observação justas e organizadas",
          minutes: 5,
          goal: "Organizar as notas de observação de jogadores de forma justa e coerente.",
          text: [
            "Os treinadores que observam e recomendam jogadores podem usar as mesmas ferramentas. Crie uma folha com os mesmos critérios para todos os jogadores: técnica da posição, capacidade física, leitura de jogo, capacidade de aprender com o treinador, estudos e notas sobre o carácter vindas de fontes confirmadas.",
            "Use uma escala simples de 1 a 5, com uma descrição escrita para cada número, para que as avaliações queiram dizer o mesmo para todos os avaliadores. A IA pode resumir as suas notas escritas num relatório curto, mas garanta que as avaliações vêm do que você viu, não de palpites da IA.",
            "Proteja a privacidade dos jogadores: muitos são menores. Guarde as notas em lugares privados e aprovados, não cole dados pessoais em ferramentas de IA, siga as regras de recrutamento da sua organização e esteja atento ao preconceito, como julgar só pelo tamanho ou pela qualidade do vídeo em vez da capacidade."
          ],
          steps: ["Use os mesmos critérios para todos os jogadores.", "Defina cada número numa escala de 1-5.", "Escreva notas a partir do que viu.", "Use a IA para resumir notas, não para avaliar.", "Mantenha os dados privados; verifique o preconceito."],
          words: [["Grelha de avaliação", "um guia de pontuação que descreve o que quer dizer cada nota."], ["Capacidade de aprender com o treinador", "como um jogador ouve e usa os comentários do treinador."]],
          slides: [
            { title: "Os mesmos critérios para todos", bullets: ["Técnica, capacidade física, leitura de jogo", "Aprender com o treinador, estudos, carácter"] },
            { title: "Grelha clara de 1-5", bullets: ["Descreva cada número", "Avaliações a partir do que viu", "A IA resume, não avalia"] },
            { title: "Justo e privado", bullets: ["Muitos jogadores são menores", "Nada de dados pessoais na IA", "Atenção ao preconceito"] }
          ],
          tryIt: "Tarefa final: atletas, terminem a folha de 15 escolas, o perfil, o plano do vídeo e os três e-mails a treinadores, mais uma nota sobre a sua conta de elegibilidade e onde verificaram as regras. Treinadores: façam uma grelha de 1-5 com descrições para cinco critérios.",
          youCanNow: "organizar o trabalho de recrutamento ou de observação com clareza, honestidade e justiça.",
          quickCheck: [
            { objective: "O6", q: "Porque escrever uma descrição para cada número da escala de 1 a 5?", options: ["Para as avaliações quererem dizer o mesmo para todos os avaliadores", "Para a folha ficar mais longa", "Para a IA poder avaliar jogadores", "Para ordenar os jogadores pela altura"], answer: 0, why: "Números definidos mantêm as avaliações coerentes entre treinadores." },
            { objective: "O6", q: "Um jogador é baixo, mas joga com inteligência e ganha todos os duelos. Como avalia a leitura de jogo?", options: ["Baixa, por causa da altura", "Ignora o jogador", "Com base no que viu, não no tamanho", "Com base na qualidade do vídeo"], answer: 2, why: "Julgar só pelo tamanho é uma forma de preconceito." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Contactar treinadores e manter-se organizado",
        questions: [
          { objective: "O4", q: "Qual é o melhor assunto para um e-mail a um treinador?", options: ["\"Olá\"", "\"Por favor leia!!!\"", "Em branco", "\"2027 Médio | Média 3,5 | Clube Metro FC\""], answer: 3, why: "Dá os dados principais num relance." },
          { objective: "O4", q: "Quem deve enviar os e-mails aos treinadores universitários?", options: ["O atleta", "Só os pais", "Um desconhecido", "Um robô de IA, automaticamente"], answer: 0, why: "Os treinadores querem ouvir o próprio atleta." },
          { objective: "O5", q: "Qual é um sinal de interesse verdadeiro?", options: ["Um anúncio de campo de treino enviado a muitos", "Um gosto nas redes sociais", "Uma resposta pessoal a perguntar pelas suas notas", "Nada"], answer: 2, why: "Perguntas pessoais mostram interesse verdadeiro." },
          { objective: "O5", q: "Um serviço garante uma bolsa a troco de dinheiro. Você deve:", options: ["Pagar logo", "Dar a sua palavra-passe", "Assinar sem ler", "Falar primeiro com o treinador da sua escola e com o orientador escolar"], answer: 3, why: "Ninguém pode garantir uma bolsa." },
          { objective: "O6", q: "Para os treinadores, a IA deve ser usada para:", options: ["Avaliar jogadores que não viu", "Resumir notas escritas, não criar avaliações", "Guardar dados privados de menores", "Substituir as avaliações"], answer: 1, why: "As avaliações vêm do que o treinador viu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA na Observação e no Recrutamento de Atletas",
    questions: [
      { objective: "O1", q: "Qual destas é uma organização de desporto universitário?", options: ["A NFL", "Uma marca de sapatilhas", "A NAIA", "Uma aplicação social"], answer: 2, why: "A NAIA é uma associação de desporto universitário." },
      { objective: "O1", q: "O NCAA Eligibility Center verifica:", options: ["Os estudos e o estatuto de amador", "O número de seguidores", "Só a sua altura", "O seu gosto musical"], answer: 0, why: "Ele certifica a elegibilidade." },
      { objective: "O1", q: "Os alunos mais novos e os atletas da DIII podem começar com:", options: ["Uma Profile Page", "Nada", "Um serviço pago", "Um teste de captação"], answer: 0, why: "O Eligibility Center descreve uma Profile Page para eles." },
      { objective: "O1", q: "As regras de contacto no recrutamento dependem:", options: ["Do número dos seus sapatos", "Do tempo que faz", "Do desporto e da divisão", "Da sua equipa favorita"], answer: 2, why: "As regras variam com o desporto e o nível." },
      { objective: "O1", q: "Quem ajuda a manter as disciplinas obrigatórias em dia?", options: ["Um rival", "O orientador escolar", "Um influenciador", "Ninguém"], answer: 1, why: "Os orientadores escolares conhecem os requisitos académicos." },
      { objective: "O2", q: "Uma escola \"difícil\" é:", options: ["Uma coisa certa", "Fechada", "Uma escola do ensino básico", "Um grande esforço para você"], answer: 3, why: "As escolas difíceis são mais difíceis de entrar ou de lá jogar." },
      { objective: "O2", q: "Onde encontra o e-mail verdadeiro de um treinador?", options: ["Num palpite", "Numa IA", "No site oficial de desporto da escola", "Numa página de fãs"], answer: 2, why: "Os sites oficiais estão atualizados." },
      { objective: "O2", q: "Porque verificar o plantel?", options: ["Para copiar as biografias", "Para enviar mensagens aos jogadores", "Não serve para nada", "Para ver quem está a terminar os estudos na sua posição"], answer: 3, why: "As necessidades do plantel afetam as suas hipóteses." },
      { objective: "O3", q: "A altura e o peso no seu perfil devem ser:", options: ["Verdadeiros", "Muito arredondados para cima", "Sempre deixados de fora", "Adivinhados"], answer: 0, why: "Os treinadores confirmam." },
      { objective: "O3", q: "Um vídeo de melhores jogadas tem muitas vezes:", options: ["30 minutos", "2-4 minutos", "5 segundos", "Duas horas"], answer: 1, why: "Curto e focado funciona melhor." },
      { objective: "O3", q: "Antes de cada jogada, você deve:", options: ["Pôr só música alta", "Mostrar o público", "Assinalar-se com uma seta ou um círculo", "Saltá-la"], answer: 2, why: "Os treinadores precisam de saber que jogador é você." },
      { objective: "O3", q: "O que NÃO deve estar no seu perfil?", options: ["A morada de sua casa", "O ano de conclusão", "O link do seu vídeo", "O contacto do seu treinador"], answer: 0, why: "Deixe de fora os dados privados." },
      { objective: "O4", q: "Um bom e-mail a um treinador tem menos de cerca de:", options: ["1,000 palavras", "5 palavras", "Sem limite", "150 palavras"], answer: 3, why: "E-mails curtos são lidos." },
      { objective: "O4", q: "Enviar o mesmo e-mail a todas as escolas:", options: ["É o melhor", "Os treinadores percebem; personalize cada um", "É obrigatório", "Dá mais respostas"], answer: 1, why: "E-mails pessoais destacam-se." },
      { objective: "O4", q: "Um seguimento deve ter:", options: ["O mesmo e-mail outra vez", "Informação nova, como um vídeo novo", "Uma queixa", "Nada"], answer: 1, why: "Informação nova dá uma razão para responder." },
      { objective: "O4", q: "Um showcase é:", options: ["Uma vitrine de troféus", "Uma loja", "Um programa de televisão", "Um evento onde os atletas jogam à frente de treinadores"], answer: 3, why: "Os showcases ajudam os treinadores a ver você." },
      { objective: "O5", q: "Com que frequência deve atualizar a sua folha de recrutamento?", options: ["Todas as semanas", "Uma vez por ano", "Nunca", "Só depois de assinar"], answer: 0, why: "Atualizar todas as semanas mantém os próximos passos a tempo." },
      { objective: "O5", q: "O que vem primeiro durante o recrutamento?", options: ["As redes sociais", "Os serviços pagos", "A escola e o treino", "Os rumores"], answer: 2, why: "As notas e o jogo são o mais importante." },
      { objective: "O6", q: "Uma grelha de avaliação é:", options: ["Um tipo de exercício", "Um sapato", "Um troféu", "Um guia de pontuação que descreve cada nota"], answer: 3, why: "Mantém as avaliações coerentes." },
      { objective: "O6", q: "Julgar jogadores pela qualidade do vídeo em vez da capacidade é:", options: ["Justo", "Uma forma de preconceito", "Obrigatório", "A melhor prática"], answer: 1, why: "Uma observação justa olha para a capacidade." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      5,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Nota sobre elegibilidade e regras",
        objective: "O1",
        notYet: "Nenhuma conta de elegibilidade indicada, ou regras tiradas da IA ou de artigos antigos.",
        meets: "Indica a conta de elegibilidade necessária e a fonte oficial onde verificou as regras de recrutamento.",
        exceeds: "Inclui a verificação das disciplinas obrigatórias e das notas feita com o orientador escolar."
      },
      {
        name: "Lista de escolas-alvo",
        objective: "O2",
        notYet: "Menos de 15 escolas, sem mistura de difíceis, adequadas e prováveis, ou com dados não verificados.",
        meets: "15 escolas com todas as colunas, marcadas como difícil, adequada ou provável, verificadas nas páginas oficiais.",
        exceeds: "Anota as necessidades do plantel na posição do atleta e os custos de cada escola."
      },
      {
        name: "Perfil e vídeo de melhores jogadas",
        objective: "O3",
        notYet: "Estatísticas falsas, dados privados, ou as melhores jogadas escondidas no fim do vídeo.",
        meets: "Um perfil honesto de uma página e um vídeo de 2 a 4 minutos com as melhores jogadas primeiro e o atleta assinalado, revistos por um treinador.",
        exceeds: "Acrescenta o link de um jogo completo se os treinadores do desporto o esperam e mantém o perfil atualizado."
      },
      {
        name: "E-mails aos treinadores",
        objective: "O4",
        notYet: "Genéricos, longos ou enviados por um dos pais.",
        meets: "Três e-mails pessoais com menos de 150 palavras, assuntos claros e uma razão verdadeira para cada escola, enviados pelo atleta.",
        exceeds: "Cada um inclui o calendário próximo e o contacto do treinador, e as datas de seguimento estão registadas."
      },
      {
        name: "Registo",
        objective: "O5",
        notYet: "Sem colunas de registo nem próximos passos.",
        meets: "Cada contacto registado com a resposta, o próximo passo e a data.",
        exceeds: "Atualizado todas as semanas durante um mês, com os sinais de interesse verdadeiro anotados."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o plano de recrutamento e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos com a conta de elegibilidade certa criada (inquérito de seguimento)",
      "Alunos que dizem ter recebido respostas pessoais e convites para campos de treino ou visitas de treinadores universitários",
      "Alunos que se comprometem com uma equipa universitária, e os que dizem ter evitado um serviço pago que garantia resultados"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Uma conta Google gratuita para o Google Sheets",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Vídeos de jogos e um editor de vídeo gratuito",
      "O seu certificado de notas, as estatísticas verdadeiras e os contactos dos seus treinadores",
      "Cerca de 60 minutos de lições, mais tempo para fazer o perfil e o vídeo"
    ],
    facilitatorNotes: [
      "Convide o orientador escolar para explicar as disciplinas obrigatórias e as contas de elegibilidade; não dê você mesmo decisões sobre elegibilidade.",
      "Peça aos alunos para verificarem as regras de contacto no recrutamento em ncaa.org ou no site da NAIA durante a sessão; as regras mudam muitas vezes.",
      "Envolva os pais ou encarregados de educação, mas garanta que os atletas escrevem e enviam os seus próprios e-mails aos treinadores.",
      "Avise as famílias sobre serviços pagos que garantem bolsas e peça-lhes para falar com o treinador ou o orientador escolar antes de pagar.",
      "Para os treinadores que usam a Lição 6, mantenham as notas sobre os jogadores privadas, usem os mesmos critérios para todos e revejam as avaliações para ver se há preconceito."
    ]
  }
};
