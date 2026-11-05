"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-ai-future-workforce.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: US agencies, programs and military terms keep their English names.

module.exports = {
  id: "veterans-ai-future-workforce-pt",
  lang: "pt",
  translationOf: "veterans-ai-future-workforce",
  category: "Veterans (military)",
  name: "Introdução à IA e ao Futuro do Trabalho",
  skills: "Explicar o que é a IA, Abrir um assistente de IA gratuito, Escrever um pedido claro, Traduzir funções militares para palavras civis, Verificar respostas da IA, Proteger informações privadas e sensíveis",
  outcome: "usar um assistente de IA gratuito para transformar uma das suas funções militares em linguagem de emprego civil, verificar o resultado numa fonte oficial de empregos e deixar de fora as informações privadas e sensíveis.",
  about: [
    "Este curso é para veteranos e militares em transição que querem perceber como a inteligência artificial (IA) está a mudar o trabalho civil e como a usar a seu favor. Não é preciso conhecimento técnico.",
    "Você vai aprender o que é a IA, como abrir um assistente de IA gratuito, como lhe dar instruções claras (como uma ordem clara: tarefa, condições, padrão) e como deixar de fora as informações privadas e sensíveis. Depois vai usá-lo para traduzir a sua experiência militar em palavras que os empregadores civis entendem, e verificar o resultado.",
    "Cada lição dura cerca de cinco minutos: leia, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escolha uma função que fez nas forças armadas. Use um assistente de IA para a reescrever como três pontos de currículo civil, peça uma melhoria, procure o seu cargo militar no O*NET Military Crosswalk para verificar os cargos civis que ele sugere e tire quaisquer detalhes privados ou sensíveis antes de guardar os pontos.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos e militares em transição à procura de trabalho civil. As idades e os postos variam muito; a maioria tem boas competências de trabalho, mas descreve-as em termos militares.",
    startingPoint: "Estão à vontade com ordens, procedimentos e padrões, e com um smartphone ou computador. Usam pouco ou nada assistentes de IA e ainda não estão habituados a descrever funções militares em palavras civis.",
    gap: "Os empregadores civis leem currículos na sua própria linguagem e esperam cada vez mais que os trabalhadores usem ferramentas de IA. Os alunos precisam de usar um assistente de IA gratuito com segurança para traduzir o seu serviço em linguagem de emprego civil e verificar os resultados em fontes oficiais de empregos, para que a sua experiência seja entendida e não sejam enganados por respostas erradas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; não se assume conhecimento técnico",
      "Aparelhos: um smartphone ou computador com internet; alguns usam computadores partilhados da base, da biblioteca ou do TAP",
      "Tempo: lições de cerca de 5 minutos, que cabem entre as consultas de transição e o trabalho",
      "OPSEC e privacidade: nenhum detalhe classificado, controlado ou de missão, e nenhum número da Segurança Social ou de processo do VA em nenhum pedido",
      "Os valores de salários e as regras dos programas mudam, por isso os alunos verificam as fontes oficiais (O*NET, BLS, VA) antes de agir"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de tarefas de trabalho", action: "explicar o que é a IA, dizer como ela está a mudar os empregos civis e identificar que competências ela não substitui", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Usando um telefone ou computador", action: "abrir um assistente de IA gratuito e escrever um pedido com uma tarefa, condições e um padrão", standard: "para que a primeira resposta seja útil" },
    { id: "O3", condition: "Antes de enviar qualquer pedido", action: "verificar se tem informações privadas e sensíveis e tirá-las ou trocá-las por um marcador", standard: "sem partilhar números privados nem detalhes classificados, controlados ou de missão" },
    { id: "O4", condition: "Com o código ou o nome do seu cargo militar", action: "procurar o seu cargo militar no O*NET Military Crosswalk e fazer uma lista dos empregos civis correspondentes", standard: "com pelo menos três cargos civis e duas tarefas para cada um" },
    { id: "O5", condition: "Com uma função do seu serviço", action: "usar um assistente de IA para reescrever a função como pontos de currículo civil com uma dimensão e um resultado", standard: "sem gíria militar e com todas as afirmações verdadeiras" },
    { id: "O6", condition: "Com uma resposta da IA sobre empregos, salários ou programas", action: "verificar a resposta em fontes oficiais e escolher uma competência e um programa para o seu próximo passo", standard: "antes de a usar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O básico da IA para a missão que vem",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a IA e como está a mudar o trabalho",
          minutes: 4,
          goal: "Explicar com as suas palavras o que é a IA e dizer duas formas como está a mudar os empregos civis.",
          text: [
            "IA, ou inteligência artificial, quer dizer programas de computador que fazem tarefas que normalmente precisam de uma pessoa, como escrever, resumir, organizar informação ou encontrar padrões. Um assistente de IA é um com quem você conversa com palavras do dia a dia. Alguns gratuitos conhecidos são o ChatGPT, o Microsoft Copilot e o Google Gemini.",
            "No trabalho civil, a IA já é usada para escrever rascunhos de e-mails e relatórios, resumir documentos longos, planear horários e rotas, responder a perguntas de clientes e encontrar problemas em dados. Na logística ajuda a prever as necessidades de abastecimento; na manutenção ajuda a encontrar peças que podem avariar; nos escritórios escreve os primeiros rascunhos.",
            "A IA não substitui o bom critério, a liderança nem a responsabilidade. São competências que você construiu de farda. Os empregadores querem pessoas que usem a IA como ferramenta e mesmo assim tomem a decisão, verifiquem o trabalho e liderem a equipa."
          ],
          words: [["IA", "abreviatura de inteligência artificial: programas de computador que fazem tarefas que normalmente precisam de uma pessoa."], ["Assistente de IA", "um programa de IA com quem você conversa, a escrever ou a falar."]],
          slides: [
            { title: "A IA é...", bullets: ["Programas que escrevem, resumem, organizam e encontram padrões", "Assistentes com quem conversa: ChatGPT, Copilot, Gemini"] },
            { title: "Como a IA está a mudar o trabalho", bullets: ["Rascunhos de e-mails e relatórios", "Prever abastecimentos e planear rotas", "Encontrar equipamento que pode avariar"] },
            { title: "O que a IA não substitui", bullets: ["O bom critério e a responsabilidade", "A liderança", "Verificar o trabalho: quem decide continua a ser você"] }
          ],
          tryIt: "Escreva duas tarefas do seu cargo militar e duas tarefas de um emprego civil que quer. Ao lado de cada uma, escreva uma forma como a IA pode ajudar.",
          youCanNow: "explicar o que é a IA, dizer como está a mudar o trabalho e dizer que competências a IA não substitui.",
          quickCheck: [
            { objective: "O1", q: "Em que tarefa a IA é melhor num emprego civil?", options: ["Escrever uma primeira versão de um relatório", "Assumir a responsabilidade pela decisão final", "Ganhar a confiança de uma equipa", "Liderar pessoas numa crise"], answer: 0, why: "A IA pode escrever rascunhos e organizar informação, mas o critério, a confiança e a liderança ficam com as pessoas." },
            { objective: "O1", q: "Um colega diz que a IA vai tornar as suas competências de liderança inúteis. O que responde?", options: ["Concorda e deixa de falar da liderança", "Diz que a IA não substitui o critério, a liderança nem a responsabilidade", "Diz que a IA só é usada nas forças armadas", "Diz que a IA está sempre certa, por isso as pessoas só escrevem"], answer: 1, why: "A IA muda as tarefas, mas as pessoas continuam a liderar, decidir e ser responsáveis." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abrir um assistente e dar uma ordem clara",
          minutes: 5,
          goal: "Abrir um assistente de IA gratuito e escrever um pedido com uma tarefa, condições e um padrão.",
          text: [
            "No telefone, instale a aplicação oficial a partir da loja de aplicações (OpenAI para o ChatGPT, Microsoft para o Copilot, Google para o Gemini). No computador, escreva chatgpt.com, copilot.microsoft.com ou gemini.google.com no navegador.",
            "O que você escreve chama-se pedido (em inglês, \"prompt\"). Você já sabe dar uma ordem clara. Use a mesma ideia: a tarefa (o que precisa), as condições (a sua situação) e o padrão (como é uma boa resposta: tamanho, formato, tom).",
            "Exemplo: \"Tarefa: faça uma lista de empregos civis que usam competências de manutenção de veículos. Condições: fui mecânico de veículos ligeiros de rodas no Exército durante 6 anos. Padrão: 5 cargos, uma linha cada, palavras simples.\""
          ],
          steps: ["Abra a aplicação ou o site oficial.", "Escreva a tarefa: o que precisa.", "Acrescente as condições: a sua situação, sem detalhes privados.", "Acrescente o padrão: tamanho, formato e tom.", "Envie e leia a resposta."],
          words: [["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA para pedir alguma coisa."], ["Formato", "a forma da resposta, como uma lista, uma tabela ou um parágrafo curto."]],
          slides: [
            { title: "Onde abrir", bullets: ["Telefone: aplicação oficial da loja de aplicações", "Computador: chatgpt.com, copilot.microsoft.com, gemini.google.com"] },
            { title: "Um pedido é uma ordem clara", bullets: ["Tarefa: o que precisa", "Condições: a sua situação", "Padrão: como é uma boa resposta"] },
            { title: "Exemplo", bullets: ["Tarefa: empregos civis com competências de manutenção de veículos", "Condições: 6 anos como mecânico de veículos ligeiros", "Padrão: 5 cargos, uma linha cada, palavras simples"] }
          ],
          tryIt: "Abra um assistente de IA gratuito. Escreva um pedido com tarefa, condições e padrão a pedir cinco cargos civis que usam as competências do seu cargo militar. Leia a resposta.",
          youCanNow: "abrir um assistente de IA gratuito e escrever um pedido com uma tarefa, condições e um padrão.",
          quickCheck: [
            { objective: "O2", q: "Num pedido em forma de ordem clara, o que é a tarefa?", options: ["Os seus detalhes privados", "O tamanho que a resposta deve ter", "O que quer que a IA faça", "O nome da ferramenta de IA"], answer: 2, why: "A tarefa é o trabalho que você dá à IA; as condições e o padrão vêm depois." },
            { objective: "O2", q: "Quer ideias de empregos civis de um assistente de IA. Que pedido envia?", options: ["\"Empregos?\"", "\"Diga-me tudo sobre trabalho.\"", "\"Escreva a história da minha vida toda.\"", "\"Tarefa: faça uma lista de empregos civis. Condições: 4 anos como especialista de abastecimento. Padrão: 5 cargos, uma linha cada.\""], answer: 3, why: "Um pedido com uma tarefa, condições e um padrão dá uma primeira resposta útil." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Deixar de fora as informações privadas e sensíveis",
          minutes: 5,
          goal: "Verificar se um pedido tem informações privadas ou sensíveis e tirá-las antes de o enviar.",
          text: [
            "Os assistentes de IA públicos podem guardar o que você escreve. Nunca escreva o seu número da Segurança Social (Social Security), os números do seu DD-214, números de processo ou de pedido do VA, números de banco ou de cartão, palavras-passe, ou detalhes médicos que não quer partilhar.",
            "A mesma disciplina que usou na segurança operacional (OPSEC) continua a valer. Não escreva informação classificada ou controlada, localizações de unidades, detalhes de missões ou qualquer coisa que lhe disseram para não partilhar. Descreva o seu trabalho em termos gerais: \"chefiei uma equipa de manutenção de 12 pessoas\" está bem; nomes de unidades e missões não são precisos.",
            "Se precisar de um número num documento, escreva um marcador como \"[o meu número]\" e preencha-o você mesmo mais tarde, fora da internet."
          ],
          steps: ["Leia o seu pedido antes de o enviar.", "Tire números pessoais, dados de contas e palavras-passe.", "Tire detalhes classificados, controlados ou de missões.", "Use um marcador como \"[o meu número]\" onde for preciso."],
          words: [["OPSEC", "segurança operacional: proteger informação que um adversário pode usar."], ["Marcador", "algo como \"[o meu número]\" que fica no lugar do dado verdadeiro e que você troca mais tarde."], ["DD-214", "o documento que regista o seu serviço e a sua passagem à vida civil."]],
          slides: [
            { title: "Nunca escreva numa IA pública", bullets: ["Números da Segurança Social, do DD-214 ou de processo do VA", "Números de banco ou de cartão e palavras-passe", "Detalhes médicos privados"] },
            { title: "A OPSEC continua a valer", bullets: ["Nenhuma informação classificada ou controlada", "Nenhuma localização de unidades nem detalhes de missões", "Descreva o seu trabalho em termos gerais"] },
            { title: "Use um marcador", bullets: ["Escreva \"[o meu número]\" no lugar", "Preencha você mesmo mais tarde, fora da internet"] }
          ],
          tryIt: "Escreva um pedido que descreva o seu último cargo militar de uma forma que poderia mostrar a qualquer empregador. Leia-o linha a linha e tire tudo o que for privado ou sensível antes de o enviar.",
          youCanNow: "verificar se um pedido tem informações privadas e sensíveis e tirá-las antes de o enviar.",
          quickCheck: [
            { objective: "O3", q: "Está a escrever uma carta de apresentação com a IA e precisa do seu número de telefone nela. O que faz?", options: ["Escreve o número verdadeiro para a carta ficar pronta", "Escreve \"[o meu telefone]\" e acrescenta você mesmo o número verdadeiro mais tarde", "Escreve o seu número da Segurança Social no lugar", "Pede à IA para adivinhar um número"], answer: 1, why: "Um marcador dá-lhe a ajuda sem colocar um número privado na IA." },
            { objective: "O3", q: "Que detalhe é seguro colocar num pedido a uma IA pública?", options: ["\"Formei 8 novos membros da equipa em verificações de segurança\"", "As datas e o local do destacamento da sua unidade", "Detalhes de um briefing classificado", "O seu número de processo do VA"], answer: 0, why: "Funções gerais com números estão bem; detalhes de missões e números privados ficam de fora." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O básico da IA para a missão que vem",
        questions: [
          { objective: "O1", q: "O que descreve melhor um assistente de IA?", options: ["Um recrutador que lê as suas mensagens", "Um programa de computador com quem conversa com palavras do dia a dia", "Um serviço do governo de apoios", "Uma rede militar segura"], answer: 1, why: "Um assistente de IA é um programa a quem você escreve ou fala e que lhe escreve respostas." },
          { objective: "O1", q: "Que competência a IA NÃO substitui no trabalho?", options: ["Escrever o rascunho de um primeiro e-mail", "Resumir um relatório longo", "O critério e a responsabilidade pela decisão", "Organizar uma lista"], answer: 2, why: "A IA pode escrever rascunhos e organizar, mas uma pessoa continua a decidir e a responder pelo resultado." },
          { objective: "O2", q: "No pedido em forma de \"ordem clara\", o que são as condições?", options: ["A sua situação, sem detalhes privados", "O tamanho e o formato da resposta", "O nome da aplicação", "A sua palavra-passe"], answer: 0, why: "As condições descrevem a sua situação para o assistente adaptar a resposta a você." },
          { objective: "O3", q: "Que detalhe pode escrever num assistente de IA público?", options: ["O número do seu DD-214", "A localização atual da sua unidade", "\"Chefiei uma equipa de manutenção de 12 pessoas\"", "O seu número de pedido do VA"], answer: 2, why: "Uma descrição geral do seu trabalho é segura; números e detalhes de missões não são." },
          { objective: "O3", q: "Precisa do seu número de processo do VA numa carta que está a escrever com a IA. O que faz?", options: ["Escreve o número verdadeiro", "Escreve metade do número", "Pede à IA para o adivinhar", "Escreve \"[o meu número]\" e preenche-o você mesmo mais tarde"], answer: 3, why: "Um marcador deixa você ter ajuda sem partilhar um número privado." }
        ]
      }
    },
    {
      name: "Capítulo 2: Traduzir o seu serviço para o trabalho civil",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar os empregos civis que correspondem ao seu serviço",
          minutes: 5,
          goal: "Procurar o seu cargo militar no O*NET Military Crosswalk e fazer uma lista dos empregos civis correspondentes.",
          text: [
            "O O*NET OnLine, do Departamento do Trabalho dos EUA (U.S. Department of Labor), tem uma pesquisa chamada Military Crosswalk Search. Você escolhe o seu ramo (MOS do Exército ou dos Fuzileiros, rating da Marinha ou da Guarda Costeira, AFSC da Força Aérea, SFSC da Força Espacial), escreve o seu código ou o nome do cargo, e ela mostra as profissões civis que correspondem.",
            "Cada profissão civil no O*NET mostra as suas tarefas, ferramentas e competências. Essa é a linguagem que os empregadores usam. Depois pode pedir a um assistente de IA para explicar esses empregos com palavras simples, mas a lista em si vem da fonte oficial.",
            "O CareerOneStop, também patrocinado pelo Departamento do Trabalho, tem o Veterans Job Matcher, que faz uma correspondência parecida. Experimente os dois e compare."
          ],
          steps: ["Vá a onetonline.org e abra a Military Crosswalk Search.", "Escolha o seu ramo.", "Escreva o seu código (por exemplo 88M ou um rating da Marinha) ou o nome do cargo.", "Abra duas ou três profissões civis correspondentes e leia as tarefas.", "Escreva os cargos que lhe interessam."],
          words: [["MOS / rating / AFSC", "o código do seu cargo militar no Exército e nos Fuzileiros, na Marinha e na Guarda Costeira, e na Força Aérea."], ["Crosswalk", "uma ferramenta que faz corresponder um cargo militar a empregos civis."], ["O*NET", "a base de dados do Departamento do Trabalho sobre empregos civis e as competências de que precisam."]],
          slides: [
            { title: "O*NET Military Crosswalk", bullets: ["Gerido pelo Departamento do Trabalho dos EUA", "Escolha o seu ramo, escreva o código ou o nome do cargo", "Veja as profissões civis correspondentes"] },
            { title: "Leia as tarefas civis", bullets: ["Cada profissão mostra tarefas, ferramentas e competências", "Essa é a linguagem que os empregadores usam"] },
            { title: "Experimente também", bullets: ["CareerOneStop Veterans Job Matcher", "Compare as duas listas"] }
          ],
          sources: [{ name: "O*NET OnLine: Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "Departamento do Trabalho dos EUA (VETS): Encontrar emprego", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Procure o seu MOS, rating ou AFSC no O*NET Military Crosswalk. Escreva três cargos civis que ele sugere e duas tarefas de cada um.",
          youCanNow: "usar o O*NET Military Crosswalk para encontrar empregos civis que correspondem ao seu cargo militar.",
          quickCheck: [
            { objective: "O4", q: "O que escreve no O*NET Military Crosswalk para encontrar empregos correspondentes?", options: ["O seu número da Segurança Social", "A sua morada", "A sua empresa civil preferida", "O código ou o nome do seu cargo militar"], answer: 3, why: "O crosswalk pesquisa pelo código ou nome do cargo militar e mostra as profissões civis correspondentes." },
            { objective: "O4", q: "O crosswalk mostra vários empregos civis para o seu código. O que faz a seguir?", options: ["Escolhe o primeiro sem ler", "Ignora a lista e pergunta a um amigo", "Escreve três cargos e duas tarefas de cada um", "Fecha e adivinha um cargo"], answer: 2, why: "Escrever os cargos e as suas tarefas dá-lhe palavras civis para usar no currículo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reescrever uma função militar em palavras civis",
          minutes: 5,
          goal: "Usar a IA para reescrever uma função militar como um ponto de currículo civil com um resultado.",
          text: [
            "Os responsáveis civis pela contratação podem não saber o que é um platoon sergeant, uma PMCS ou um CONEX. O seu trabalho é dizer a mesma coisa nas palavras deles: o que fez, qual era a dimensão e que resultado teve.",
            "Dê à IA a sua função em termos simples e o emprego civil que quer. Exemplo de pedido: \"Reescreva isto para um currículo de supervisor de armazém: fui responsável por um depósito de material, 300 artigos, entreguei equipamento a 120 soldados, zero perdas em 2 inventários. Dê-me 3 pontos que comecem com um verbo forte e tenham números.\"",
            "Depois melhore com pedidos de seguimento: \"Tire a gíria militar.\" \"Use as palavras deste anúncio de emprego.\" \"Faça mais curto.\" A primeira resposta é um rascunho; quem revê é você."
          ],
          steps: ["Escreva a função com palavras simples: o quê, que dimensão, que resultado.", "Diga o emprego civil que quer.", "Peça 3 pontos com verbos fortes e números.", "Peça uma mudança, como \"tire a gíria militar\".", "Leia e confirme que cada palavra é verdade."],
          words: [["Ponto de currículo", "uma linha curta num currículo que mostra algo que fez e o seu resultado."], ["Sigla", "uma palavra feita com as primeiras letras, como PMCS; os civis muitas vezes não conhecem as siglas militares."]],
          slides: [
            { title: "Diga nas palavras deles", bullets: ["O que fez", "Qual era a dimensão: pessoas, dinheiro, equipamento", "Que resultado teve"] },
            { title: "Exemplo de pedido", bullets: ["\"Reescreva para um currículo de supervisor de armazém\"", "Depósito de material, 300 artigos, 120 soldados, zero perdas", "\"3 pontos, verbos fortes, números\""] },
            { title: "Depois reveja", bullets: ["\"Tire a gíria militar.\"", "\"Use as palavras deste anúncio de emprego.\"", "Confirme que cada palavra é verdade"] }
          ],
          tryIt: "Escolha uma função do seu serviço. Peça a um assistente de IA para a reescrever como três pontos de currículo civil para um cargo da Lição 4. Peça-lhe para tirar a gíria militar.",
          youCanNow: "reescrever uma função militar como pontos de currículo civil claros, com números e resultados.",
          quickCheck: [
            { objective: "O5", q: "Que ponto de currículo está escrito para um empregador civil?", options: ["\"Liderei uma equipa de 10 pessoas que reduziu em 20% o tempo de reparação do equipamento\"", "\"Servi como NCOIC do motor pool IAW SOP\"", "\"Fiz várias tarefas conforme me mandaram\"", "\"Estava encarregado de coisas\""], answer: 0, why: "Usa palavras simples e mostra o que fez, qual era a dimensão e o resultado." },
            { objective: "O5", q: "O ponto da IA ainda diz \"CONUS\" e \"PCS\". O que pede a seguir?", options: ["\"Ponha mais siglas.\"", "\"Faça mais comprido.\"", "\"Tire a gíria militar e use palavras civis simples.\"", "\"Escreva como um poema.\""], answer: 2, why: "Um pedido de seguimento para tirar a gíria transforma o rascunho em palavras que um leitor civil entende." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Verificar a resposta e planear a sua próxima competência",
          minutes: 5,
          goal: "Verificar uma resposta da IA em fontes oficiais e escolher uma competência para desenvolver a seguir.",
          text: [
            "A IA pode inventar coisas: um cargo que não serve, uma certificação que não existe ou um valor de salário errado. A isto chama-se alucinação. Verifique os cargos no O*NET, e verifique os salários e as perspetivas de emprego no Occupational Outlook Handbook do Bureau of Labor Statistics (bls.gov/ooh).",
            "Confirme que os seus pontos são verdadeiros. Nunca deixe a IA aumentar o seu posto, os seus números ou as suas condecorações. Um empregador pode verificar, e a confiança é difícil de recuperar.",
            "Depois planeie uma competência para desenvolver. A ajuda oficial gratuita inclui o programa Personalized Career Planning and Guidance do VA (orientação profissional gratuita para veteranos e militares elegíveis) e o Transition Assistance Program do Departamento do Trabalho. Para formação em alta tecnologia, o programa VET TEC 2.0 do VA paga certos cursos de tecnologia sem diploma universitário para veteranos elegíveis. Verifique as regras atuais de elegibilidade em va.gov."
          ],
          steps: ["Verifique cada cargo no O*NET.", "Verifique os salários e as perspetivas no Occupational Outlook Handbook.", "Confirme que cada número e afirmação nos seus pontos é verdade.", "Escolha uma competência para desenvolver e um programa oficial que pode ajudar."],
          words: [["Alucinação", "quando uma IA escreve algo que parece verdade mas é inventado."], ["Occupational Outlook Handbook", "um guia gratuito do Bureau of Labor Statistics (serviço de estatísticas do trabalho dos EUA) sobre salários, crescimento e como entrar em cada emprego."]],
          slides: [
            { title: "Verifique as respostas da IA", bullets: ["Cargos: O*NET", "Salários e perspetivas: bls.gov/ooh", "Nunca aumente o posto, os números ou as condecorações"] },
            { title: "Ajuda oficial gratuita", bullets: ["VA Personalized Career Planning and Guidance", "DOL Transition Assistance Program (TAP)", "VA VET TEC 2.0 para formação em alta tecnologia"] },
            { title: "O seu próximo passo", bullets: ["Escolha uma competência para desenvolver", "Escolha um programa que pode ajudar", "Verifique a elegibilidade em va.gov"] }
          ],
          sources: [
            { name: "Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "Departamento do Trabalho dos EUA: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" }
          ],
          tryIt: "Tarefa final: pegue nos seus três pontos da Lição 5. Verifique os cargos no O*NET Military Crosswalk, peça à IA uma melhoria, tire quaisquer detalhes privados ou sensíveis e guarde os pontos finais.",
          youCanNow: "verificar respostas da IA sobre carreiras em fontes oficiais e escolher uma competência e um programa para o seu próximo passo.",
          quickCheck: [
            { objective: "O6", q: "O que é uma alucinação da IA?", options: ["Uma resposta da IA que está sempre certa", "Uma nova ferramenta de IA para veteranos", "Uma forma de fazer pedidos mais curtos", "Algo que uma IA escreve que parece verdade mas é inventado"], answer: 3, why: "A IA pode inventar coisas e mesmo assim parecer segura, por isso verifique os dados em fontes oficiais." },
            { objective: "O6", q: "Uma IA diz-lhe o salário médio de um emprego civil. O que faz antes de usar esse valor?", options: ["Coloca-o no seu currículo", "Verifica-o no Occupational Outlook Handbook do Bureau of Labor Statistics", "Pergunta à IA se tem a certeza", "Partilha-o com amigos como se fosse certo"], answer: 1, why: "Os valores de salários vêm de fontes oficiais como o Occupational Outlook Handbook, não da IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Traduzir o seu serviço para o trabalho civil",
        questions: [
          { objective: "O4", q: "O que faz o O*NET Military Crosswalk?", options: ["Faz corresponder o código do seu cargo militar a profissões civis", "Apresenta o seu pedido ao VA", "Publica o seu currículo para empregadores", "Paga a formação"], answer: 0, why: "Você escreve o seu MOS, rating ou AFSC e ele mostra os empregos civis correspondentes." },
          { objective: "O5", q: "Que ponto de currículo é melhor para um empregador civil?", options: ["\"Fiz PMCS em MTVs\"", "\"Mantive 40 camiões com verificações preventivas; reduzi as avarias em 30%\"", "\"Estive no motor pool\"", "\"Hooah\""], answer: 1, why: "Usa palavras civis, números e um resultado." },
          { objective: "O5", q: "O rascunho da IA acrescenta uma condecoração que você não recebeu. O que faz?", options: ["Deixa ficar, porque soa bem", "Faz a condecoração maior", "Tira-a; todas as afirmações têm de ser verdadeiras", "Pergunta a um amigo se está bem"], answer: 2, why: "Afirmações exageradas podem ser verificadas e podem fazê-lo perder o emprego." },
          { objective: "O6", q: "Onde verifica os salários e as perspetivas de um emprego civil?", options: ["Numa publicação nas redes sociais", "Na primeira resposta da IA", "Num anúncio que aparece no ecrã", "No Occupational Outlook Handbook do Bureau of Labor Statistics"], answer: 3, why: "O Occupational Outlook Handbook é a fonte oficial para salários e perspetivas." },
          { objective: "O6", q: "Que programa do VA oferece orientação profissional gratuita a veteranos elegíveis?", options: ["Personalized Career Planning and Guidance", "O Military Crosswalk", "Google Gemini", "O Occupational Outlook Handbook"], answer: 0, why: "O VA apresenta o Personalized Career Planning and Guidance como orientação profissional e de estudos gratuita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à IA e ao Futuro do Trabalho",
    questions: [
      { objective: "O1", q: "A melhor descrição da IA é:", options: ["Programas de computador que fazem tarefas que normalmente precisam de uma pessoa", "Um novo ramo das forças armadas", "Um tipo de telefone", "Um site de empregos do governo"], answer: 0, why: "Os programas de IA escrevem, resumem, organizam e encontram padrões." },
      { objective: "O1", q: "Qual é uma forma como a IA é usada na logística civil?", options: ["Assinar contratos pela empresa", "Prever as necessidades de abastecimento", "Contratar chefes", "Conduzir todos os camiões"], answer: 1, why: "A IA ajuda a prever que abastecimentos vão ser precisos." },
      { objective: "O1", q: "Quando a IA é usada no trabalho, quem é responsável pela decisão?", options: ["A IA", "A empresa do programa", "A pessoa que a usa", "Ninguém"], answer: 2, why: "A IA é uma ferramenta; quem decide continua a ser a pessoa." },
      { objective: "O2", q: "Que endereço abre um assistente de IA gratuito?", options: ["vetjobs.win", "freecash.gift", "army.xyz", "gemini.google.com"], answer: 3, why: "gemini.google.com é o endereço oficial da Google para o Gemini." },
      { objective: "O2", q: "Num pedido em forma de \"ordem clara\", o padrão é:", options: ["Como é uma boa resposta: tamanho, formato, tom", "O seu posto", "A sua palavra-passe", "A loja de aplicações"], answer: 0, why: "O padrão diz ao assistente como deve ser a resposta." },
      { objective: "O2", q: "Que pedido vai dar a resposta mais útil?", options: ["\"empregos\"", "\"Tarefa: empregos civis com as minhas competências. Condições: 6 anos como mecânico de veículos. Padrão: 5 cargos, uma linha cada.\"", "\"ajude-me\"", "\"coisas militares\""], answer: 1, why: "Dá a tarefa, as condições e o padrão." },
      { objective: "O3", q: "O que NUNCA deve escrever num assistente de IA público?", options: ["\"Faça mais curto\"", "\"Liderei uma equipa de 8\"", "O seu número da Segurança Social", "\"Supervisor de armazém\""], answer: 2, why: "Os números da Segurança Social são privados e nunca devem ir para uma IA pública." },
      { objective: "O3", q: "OPSEC numa conversa com uma IA civil quer dizer:", options: ["Partilhar detalhes da missão para ter respostas melhores", "Escrever a localização da sua unidade", "Usar o seu posto como palavra-passe", "Deixar de fora detalhes classificados, controlados e de missões"], answer: 3, why: "A mesma disciplina protege a informação sensível fora do serviço." },
      { objective: "O3", q: "Um marcador como \"[o meu número]\" deixa você:", options: ["Ter ajuda sem escrever o número verdadeiro", "Esconder a IA do seu empregador", "Receber o pagamento mais depressa", "Saltar o passo de verificação"], answer: 0, why: "Você preenche o número verdadeiro mais tarde, fora da internet." },
      { objective: "O4", q: "O O*NET Military Crosswalk é gerido por:", options: ["Um recrutador privado", "O Departamento do Trabalho dos EUA", "A sua antiga unidade", "Uma empresa de IA"], answer: 1, why: "O O*NET OnLine é um site do Departamento do Trabalho." },
      { objective: "O4", q: "No Military Crosswalk, um veterano da Marinha pesquisa por:", options: ["Código postal", "Número da Segurança Social", "Código de rating ou nome do cargo", "Data de passagem à vida civil"], answer: 2, why: "Você escolhe o ramo e escreve o seu rating ou o nome do cargo." },
      { objective: "O4", q: "Outra ferramenta patrocinada pelo Departamento do Trabalho que faz corresponder cargos militares a carreiras civis é:", options: ["Um site de lotaria", "Uma aplicação de cartão de crédito", "Um videojogo", "O Veterans Job Matcher do CareerOneStop"], answer: 3, why: "O Veterans Job Matcher do CareerOneStop liga profissões militares a carreiras civis." },
      { objective: "O5", q: "Um bom ponto de currículo civil inclui:", options: ["O que fez, qual era a dimensão e o resultado", "Só siglas militares", "A missão da sua unidade", "A sua morada"], answer: 0, why: "Os empregadores civis procuram ação, dimensão e resultados." },
      { objective: "O5", q: "Que pedido de seguimento ajuda a traduzir um rascunho para civis?", options: ["\"Ponha mais siglas.\"", "\"Tire a gíria militar.\"", "\"Acrescente o meu número do DD-214.\"", "\"Invente uma condecoração.\""], answer: 1, why: "Tirar a gíria torna a sua experiência clara para leitores civis." },
      { objective: "O5", q: "O primeiro rascunho da IA dos seus pontos é:", options: ["Final e perfeito", "Algo para enviar sem ler", "Um rascunho que você revê e verifica", "Sempre errado"], answer: 2, why: "Quem revê é você; a primeira resposta é um rascunho." },
      { objective: "O6", q: "Quando a IA escreve algo que parece verdade mas é inventado, chama-se:", options: ["Um briefing", "Um crosswalk", "Um marcador", "Uma alucinação"], answer: 3, why: "É o nome comum para as respostas inventadas da IA." },
      { objective: "O6", q: "Onde deve verificar o salário de um emprego antes de confiar no valor da IA?", options: ["No Occupational Outlook Handbook do Bureau of Labor Statistics", "Numa SMS de um desconhecido", "Na segunda resposta da IA", "Num meme"], answer: 0, why: "O Occupational Outlook Handbook dá valores oficiais de salários e perspetivas." },
      { objective: "O6", q: "O programa VET TEC 2.0 do VA ajuda veteranos elegíveis com:", options: ["Crédito para casa", "Formação em alta tecnologia sem diploma universitário", "Cuidados médicos", "Reparação de carros"], answer: 1, why: "O VET TEC 2.0 paga certos programas de formação em alta tecnologia sem diploma universitário." },
      { objective: "O6", q: "Que programa do Departamento do Trabalho ajuda os militares a passar para o trabalho civil?", options: ["Só o O*NET Crosswalk", "Google Gemini", "O Transition Assistance Program (TAP)", "Um curso intensivo privado"], answer: 2, why: "O TAP dá aos militares em transição informação, ferramentas e formação." },
      { objective: "O6", q: "Antes de guardar os seus pontos de currículo finais, deve:", options: ["Acrescentar o seu número do banco", "Aumentar os seus números", "Saltar a verificação", "Verificar os cargos, confirmar que todas as afirmações são verdadeiras e tirar os detalhes privados"], answer: 3, why: "Esta é a verificação completa: certo, verdadeiro e seguro." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      5,
      6,
      9,
      12,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Pedido claro",
        objective: "O2",
        notYet: "O pedido é vago, por exemplo \"corrija o meu currículo\".",
        meets: "O pedido tem uma tarefa, condições e um padrão.",
        exceeds: "Também diz o cargo civil, e a primeira resposta está quase pronta."
      },
      {
        name: "Palavras civis",
        objective: "O5",
        notYet: "Os pontos ainda usam gíria militar ou não têm resultado.",
        meets: "Três pontos em palavras civis simples, cada um com o que fez e uma dimensão ou um resultado.",
        exceeds: "O aluno pediu uma melhoria e sabe dizer o que ela corrigiu."
      },
      {
        name: "Cargos verificados",
        objective: "O4",
        notYet: "Os cargos foram copiados da IA sem verificar.",
        meets: "Os cargos foram verificados no O*NET Military Crosswalk.",
        exceeds: "O aluno também verificou o salário ou as perspetivas no Occupational Outlook Handbook."
      },
      {
        name: "Detalhes privados e sensíveis de fora",
        objective: "O3",
        notYet: "O pedido ou os pontos têm um número privado ou um detalhe de missão.",
        meets: "Nenhum número privado e nenhum detalhe classificado, controlado ou de missão.",
        exceeds: "Usou marcadores e sabe explicar porque cada detalhe tirado tinha de sair."
      },
      {
        name: "Todas as afirmações verdadeiras",
        objective: "O6",
        notYet: "Um ponto tem uma afirmação, um número ou uma condecoração que não é verdade.",
        meets: "Todas as afirmações e números nos pontos são verdadeiros.",
        exceeds: "O aluno escolheu uma competência e um programa para o próximo passo."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter usado os seus novos pontos numa candidatura de emprego em 30 dias (inquérito de seguimento)",
      "Alunos que conseguem uma entrevista ou uma oferta de emprego civil em 90 dias",
      "Alunos que começam outro curso da Koach Learn para veteranos ou um programa de formação em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou computador com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Os sites gratuitos do O*NET Military Crosswalk e do Occupational Outlook Handbook do Bureau of Labor Statistics",
      "Papel e caneta, ou uma aplicação de notas, para o trabalho do \"Experimente agora\"",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Numa aula de transição ou num centro de veteranos: façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas ao vivo.",
      "Lembre aos alunos a OPSEC antes do primeiro pedido: nenhum detalhe classificado, controlado ou de missão, e nenhum número privado.",
      "Junte alunos de ramos diferentes para explicarem os pontos uns dos outros em palavras civis simples.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Indique aos alunos o TAP e a orientação profissional do VA para ajuda individual depois do curso."
    ]
  }
};
