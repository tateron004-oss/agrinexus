"use strict";

// Koach Learn course (Portuguese translation of shared/ai-job-readiness.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-job-readiness-pt",
  lang: "pt",
  translationOf: "ai-job-readiness",
  category: "Re-Entry",
  name: "IA para Preparação para o Emprego e Desenvolvimento de Carreira",
  skills: "Encontrar as suas habilidades, Escrever um currículo com IA, Adaptar a um anúncio de emprego, Escrever uma carta de apresentação, Praticar entrevistas com IA, Procurar emprego com segurança",
  outcome: "usar um assistente de IA gratuito para transformar a sua experiência num currículo de uma página adaptado a um anúncio de emprego real, escrever uma carta de apresentação curta, praticar em voz alta as respostas a perguntas de entrevista e candidatar-se com segurança, evitando burlas de emprego.",
  about: [
    "Conseguir um emprego pede um currículo, uma candidatura, uma entrevista e muita confiança. Assistentes de IA como o ChatGPT, o Microsoft Copilot e o Google Gemini podem ajudar em cada passo, sobretudo se você tem períodos sem trabalho, um registo criminal ou uma experiência que não parece um currículo \"normal\".",
    "Este curso é para pessoas que voltam para casa depois da prisão, quem procura emprego em programas de formação profissional, quem quer mudar de carreira e jovens à procura do primeiro emprego. Conta a experiência de trabalho na prisão, no serviço militar, a cuidar de alguém, como voluntário ou em biscates.",
    "Você vai montar o seu próprio kit de emprego passo a passo. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\"; há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Não coloque dados privados na IA: nada de números da Segurança Social, de identificação, de processo ou de recluso."
  ],
  finalTask: "Encontre um anúncio de emprego real a que possa candidatar-se. Com um assistente de IA, faça um currículo de uma página adaptado a ele, uma carta de apresentação com menos de 200 palavras e respostas a cinco perguntas de entrevista prováveis, incluindo uma sobre um período sem trabalho ou o seu passado, se for o seu caso. Pratique as respostas em voz alta, verifique o anúncio com os sinais de alerta de burla e candidate-se, ou guarde tudo pronto para enviar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) e procuram trabalho, muitas vezes com períodos sem trabalho no seu percurso e um registo criminal para explicar. Muitos têm uma boa experiência de trabalho em empregos na prisão, no serviço militar, a cuidar de alguém ou em trabalho informal.",
    startingPoint: "Sabem fazer chamadas e enviar SMS num telefone simples; alguns têm uma conta de email e já experimentaram um assistente de IA. Muitos não têm um currículo atualizado, não fazem uma entrevista há muito tempo e não sabem bem como falar do seu passado.",
    gap: "Um emprego estável é um dos apoios mais fortes para um bom regresso a casa, mas hoje as candidaturas fazem-se pela internet e os empregadores esperam um currículo adaptado e respostas seguras na entrevista. Os alunos precisam de transformar a sua experiência real em documentos de candidatura com a ajuda da IA, responder com honestidade sobre períodos sem trabalho e evitar as burlas de emprego que visam quem precisa de trabalho depressa.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: talvez só um telefone simples ou um computador com tempo limitado na biblioteca ou num centro de emprego",
      "Tempo: lições de 5 minutos, que cabem entre consultas e o trabalho",
      "Privacidade: nada de números da Segurança Social, de processo ou de recluso, nem dados do banco, nas ferramentas de IA ou no currículo",
      "As regras sobre registos criminais mudam de estado para estado e de cidade para cidade; os alunos verificam no departamento do trabalho do seu estado ou num grupo de apoio jurídico à reintegração, e cumprem as suas próprias condições de liberdade condicional ou de pena suspensa"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à IA e Confiança Digital\" é um bom primeiro curso para quem é novo na IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a sua experiência de trabalho, formação, voluntariado e vida, dentro ou fora da prisão", action: "fazer a lista das suas habilidades de trabalho com as palavras dos empregadores, com um exemplo verdadeiro para cada uma", standard: "ficando só com as habilidades que são verdadeiras para você" },
    { id: "O2", condition: "Com um anúncio de emprego real e um modelo gratuito", action: "criar um currículo de uma página adaptado ao emprego, com tópicos que começam por verbos de ação e têm números", standard: "com todas as palavras verdadeiras e sem número da Segurança Social, data de nascimento nem fotografia" },
    { id: "O3", condition: "Para o mesmo anúncio de emprego", action: "escrever uma carta de apresentação em três parágrafos curtos", standard: "com menos de 200 palavras e a soar como você quando a lê em voz alta" },
    { id: "O4", condition: "Usando um assistente de IA como entrevistador de prática", action: "responder em voz alta a cinco perguntas comuns de entrevista, usando o método STAR nas perguntas \"fale-me de uma vez em que\"", standard: "sem ler notas" },
    { id: "O5", condition: "Se tem um período sem trabalho ou um registo criminal", action: "preparar uma resposta curta e honesta que passa para a razão por que está pronto agora", standard: "usando só factos que se sente à vontade para partilhar, ditos com calma em voz alta" },
    { id: "O6", condition: "Quando procura emprego e se candidata", action: "encontrar vagas em sites de confiança, registar cada candidatura e verificar cada anúncio para ver sinais de alerta de burla", standard: "sem dar o número do banco nem da Segurança Social antes de uma oferta verdadeira" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar os seus documentos de candidatura",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar as habilidades que já tem",
          minutes: 5,
          goal: "Transformar a sua experiência de vida e de trabalho numa lista de habilidades de trabalho.",
          text: [
            "A maioria das pessoas tem mais habilidades do que pensa. Trabalhar na cozinha, na lavandaria ou na oficina de manutenção de uma prisão, o serviço militar, cuidar de um familiar, ser voluntário na igreja, cortar cabelo ou arranjar carros para os vizinhos: tudo isto dá habilidades que os empregadores querem.",
            "Peça a um assistente de IA para o ajudar a dar-lhes nome: \"Trabalhei 3 anos numa cozinha grande a preparar refeições para 500 pessoas por dia e formei novos trabalhadores. Que habilidades de trabalho isso mostra? Use as palavras que os empregadores usam.\" Pode receber: segurança alimentar, trabalhar com pressão de tempo, formar outras pessoas, controlo de stock, trabalho em equipa.",
            "Faça uma lista principal de habilidades com um exemplo para cada uma. Não deixe a IA acrescentar habilidades que você não tem de verdade. Tudo no seu currículo tem de ser verdade, porque podem perguntar-lhe sobre isso na entrevista."
          ],
          steps: ["Faça a lista de todos os empregos, formações, trabalhos de voluntariado e responsabilidades que já teve, dentro ou fora da prisão.", "Para cada um, pergunte à IA que habilidades mostra, com as palavras dos empregadores.", "Fique só com as habilidades que são verdadeiras para você.", "Escreva um exemplo real para cada habilidade."],
          words: [["Habilidade transferível", "uma habilidade de um lugar ou situação que é útil noutro."], ["Habilidade interpessoal", "uma habilidade de lidar com pessoas, como trabalho em equipa, ser de confiança ou comunicar bem."], ["Habilidade técnica", "uma capacidade concreta, como conduzir um empilhador, cozinhar ou usar o Excel."]],
          slides: [
            { title: "Toda a experiência conta", bullets: ["Trabalho dentro ou fora da prisão", "Serviço militar, cuidar de alguém, voluntariado", "Biscates para os vizinhos"] },
            { title: "Peça à IA para dar nome às habilidades", bullets: ["Descreva o que fez e para quantas pessoas", "Peça as palavras dos empregadores"] },
            { title: "Mantenha tudo verdadeiro", bullets: ["Tire as habilidades que não tem", "Um exemplo real para cada uma", "Podem perguntar-lhe sobre qualquer uma"] }
          ],
          tryIt: "Descreva a um assistente de IA três coisas que já fez e pergunte que habilidades de trabalho mostram. Escreva uma lista principal com pelo menos oito habilidades verdadeiras, cada uma com um exemplo.",
          youCanNow: "transformar a sua experiência numa lista verdadeira de habilidades de trabalho com a linguagem dos empregadores.",
          quickCheck: [
            { objective: "O1", q: "O que é uma habilidade transferível?", options: ["Uma habilidade que só pode usar num emprego", "Uma habilidade de um lugar que é útil noutro", "Uma habilidade que paga para aprender", "Uma habilidade que só os chefes têm"], answer: 1, why: "As habilidades transferíveis, como formar outras pessoas, passam de um lugar para outro." },
            { objective: "O1", q: "Arranjou carros para os vizinhos durante anos sem salário. O que faz com essa experiência?", options: ["Deixa-a de fora; não era um emprego a sério", "Diz que era mecânico com licença", "Espera que o entrevistador pergunte por ela", "Pergunta à IA que habilidades mostra e põe na lista as verdadeiras, com um exemplo"], answer: 3, why: "O trabalho informal dá habilidades reais; ponha na lista só as verdadeiras, com um exemplo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever um currículo de uma página com IA",
          minutes: 6,
          goal: "Fazer um currículo limpo, de uma página, adaptado a um anúncio de emprego real.",
          text: [
            "Um currículo é um resumo de uma página das suas habilidades, experiência e formação. Um formato simples funciona melhor: nome e contacto, um resumo de duas linhas, habilidades, experiência, e estudos ou formação. Use um modelo gratuito no Google Docs ou no Microsoft Word.",
            "Adapte-o a cada emprego. Cole o anúncio de emprego (não os seus dados privados) na IA e pergunte: \"Que habilidades e palavras-chave este emprego quer? Quais das minhas habilidades combinam?\" Depois peça-lhe para escrever tópicos a partir dos seus exemplos, que comecem por verbos de ação e tenham números: \"Preparei refeições para 500 pessoas por dia, cumprindo as normas de segurança alimentar.\"",
            "Para o trabalho feito enquanto esteve preso, pode indicar o tipo de estabelecimento ou o empregador da forma que o seu conselheiro de reintegração sugerir, por exemplo o departamento de serviços prisionais do estado, e dar destaque às habilidades. Nunca ponha o seu número da Segurança Social, a data de nascimento nem uma fotografia num currículo para os Estados Unidos."
          ],
          steps: ["Abra um modelo de currículo gratuito no Google Docs ou no Word.", "Cole o anúncio de emprego na IA e pergunte que palavras-chave ele quer.", "Peça à IA para escrever tópicos com verbos de ação a partir dos seus exemplos verdadeiros, com números.", "Preencha o modelo e mantenha-o numa só página.", "Verifique se cada palavra é verdadeira e está bem escrita."],
          words: [["Currículo", "um resumo de uma página das suas habilidades, experiência e formação."], ["Palavra-chave", "uma palavra importante do anúncio de emprego que os empregadores e os programas de computador procuram."], ["Adaptar", "mudar o seu currículo para servir a um emprego específico."]],
          slides: [
            { title: "Formato simples de uma página", bullets: ["Nome, contacto, resumo de duas linhas", "Habilidades e experiência", "Estudos ou formação"] },
            { title: "Adapte ao emprego", bullets: ["Cole o anúncio de emprego na IA", "Encontre as palavras-chave que combinam", "Verbos de ação e números"] },
            { title: "Seguro e verdadeiro", bullets: ["Sem número da Segurança Social, data de nascimento nem fotografia", "Pergunte ao conselheiro como indicar o trabalho na prisão", "Verifique cada palavra"] }
          ],
          tryIt: "Encontre um anúncio de emprego real. Use a IA para encontrar as palavras-chave e escrever cinco tópicos a partir dos seus exemplos verdadeiros. Ponha-os num modelo de currículo de uma página.",
          youCanNow: "fazer um currículo de uma página adaptado a um anúncio de emprego real com a ajuda da IA.",
          quickCheck: [
            { objective: "O2", q: "O que deve colar na IA para adaptar o seu currículo?", options: ["O anúncio de emprego", "O seu número da Segurança Social", "O seu número de processo", "Os seus dados do banco"], answer: 0, why: "Cole o anúncio de emprego, não os seus dados privados, para a IA encontrar as palavras-chave." },
            { objective: "O2", q: "O seu currículo tem uma página e meia para um emprego de nível inicial. O que faz?", options: ["Põe a letra muito pequena", "Acrescenta mais páginas", "Corta até ficar com os tópicos mais fortes que combinam com o emprego, numa página", "Acrescenta uma fotografia"], answer: 2, why: "A maioria dos currículos de nível inicial deve caber numa página, centrada no que o emprego quer." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever uma carta de apresentação curta",
          minutes: 5,
          goal: "Escrever uma carta de apresentação com menos de 200 palavras que soe como você.",
          text: [
            "Uma carta de apresentação é uma carta curta que diz porque quer este emprego e porque é uma boa escolha. Muitos empregos não a pedem, mas uma boa carta pode fazer você se destacar.",
            "Use três parágrafos curtos: porquê este emprego e esta empresa, duas habilidades que combinam com o que precisam, com um exemplo rápido, e um agradecimento com a forma de o contactar. Peça à IA: \"Escreva uma carta de apresentação com menos de 200 palavras para este anúncio de emprego, usando estas duas habilidades e exemplos. Simpática, confiante, palavras simples.\"",
            "Depois torne-a sua. Mude qualquer frase que você nunca diria. Acrescente um detalhe verdadeiro sobre porque quer trabalhar lá. Leia-a em voz alta: se não soar como você, mude-a outra vez."
          ],
          steps: ["Parágrafo 1: porquê este emprego e esta empresa.", "Parágrafo 2: duas habilidades que combinam, com exemplos.", "Parágrafo 3: agradecimento e como o contactar.", "Peça à IA um rascunho com menos de 200 palavras.", "Edite-o para soar como você e leia-o em voz alta."],
          words: [["Carta de apresentação", "uma carta curta enviada com o currículo que explica porque você serve para o emprego."]],
          slides: [
            { title: "Três parágrafos curtos", bullets: ["Porquê este emprego", "Duas habilidades que combinam, com exemplos", "Agradecimento e contacto"] },
            { title: "Deixe a IA fazer o rascunho", bullets: ["Menos de 200 palavras", "Simpática, confiante, palavras simples"] },
            { title: "Torne-a sua", bullets: ["Mude as frases que nunca diria", "Acrescente um detalhe verdadeiro", "Leia-a em voz alta"] }
          ],
          tryIt: "Escreva com a IA uma carta de apresentação para o seu anúncio de emprego, com menos de 200 palavras, e edite-a até soar como você quando a lê em voz alta.",
          youCanNow: "escrever uma carta de apresentação curta e pessoal com a ajuda da IA.",
          quickCheck: [
            { objective: "O3", q: "O que vai no segundo parágrafo da carta de apresentação?", options: ["A sua data de nascimento", "Os salários que já recebeu", "Só um agradecimento", "Duas habilidades que combinam com o emprego, com um exemplo rápido"], answer: 3, why: "O parágrafo 2 dá duas habilidades que combinam, com exemplos." },
            { objective: "O3", q: "A carta da IA diz \"Estou extraordinariamente entusiasmado por alavancar as minhas sinergias.\" O que faz?", options: ["Deixa ficar; parece inteligente", "Muda para palavras que diria de verdade", "Torna-a mais comprida", "Envia sem ler"], answer: 1, why: "Mude qualquer frase que nunca diria, para a carta soar como você." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar os seus documentos de candidatura",
        questions: [
          { objective: "O1", q: "Formou novos trabalhadores na cozinha de uma prisão. Que habilidade isso mostra?", options: ["Conduzir um empilhador", "Contabilidade", "Formar outras pessoas", "Nenhuma"], answer: 2, why: "Formar novos trabalhadores é uma habilidade transferível." },
          { objective: "O1", q: "A IA acrescenta \"fala espanhol fluentemente\" às suas habilidades, mas você não fala. O que faz?", options: ["Tira-a", "Deixa ficar", "Aprende espanhol até à entrevista", "Acrescenta mais línguas"], answer: 0, why: "Tudo num currículo tem de ser verdade." },
          { objective: "O2", q: "O que NÃO deve ir num currículo para os Estados Unidos?", options: ["As suas habilidades", "A sua experiência de trabalho", "O seu número de telefone", "O seu número da Segurança Social"], answer: 3, why: "Os números privados ficam fora dos currículos." },
          { objective: "O2", q: "O que quer dizer adaptar um currículo?", options: ["Costurar roupa", "Mudá-lo para servir a um anúncio de emprego específico", "Fazê-lo com três páginas", "Usar o mesmo currículo para todos os empregos"], answer: 1, why: "Os currículos adaptados combinam com as palavras-chave do emprego." },
          { objective: "O3", q: "Que tamanho deve ter a carta de apresentação neste curso?", options: ["Cinco páginas", "Menos de 200 palavras", "Uma palavra", "Mais de 1,000 palavras"], answer: 1, why: "As cartas curtas são lidas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Entrevistas e procura de emprego",
      lessons: [
        {
          objectives: ["O4"],
          title: "Praticar entrevistas com IA",
          minutes: 6,
          goal: "Usar a IA como entrevistador de prática e melhorar as suas respostas.",
          text: [
            "A IA pode fazer de entrevistador. Peça: \"Está a contratar para este emprego [cole o anúncio]. Faça-me uma pergunta de entrevista de cada vez. Depois de eu responder, diga-me uma coisa que fiz bem e uma coisa a melhorar.\" Muitas aplicações de IA deixam você falar em voz alta, o que é uma ótima prática.",
            "Use o método STAR (em inglês: Situation, Task, Action, Result, ou seja Situação, Tarefa, Ação, Resultado) nas perguntas \"fale-me de uma vez em que\". \"Na cozinha (situação) tínhamos de servir 500 refeições numa hora (tarefa). Organizei uma linha de preparação e formei dois trabalhadores novos (ação). Terminámos a tempo todos os dias daquele mês (resultado).\"",
            "Prepare cinco perguntas comuns: fale-me de si, porque quer este emprego, um ponto forte, uma vez em que resolveu um problema, e tem alguma pergunta para nós. Pratique até conseguir responder sem ler."
          ],
          steps: ["Cole o anúncio de emprego e peça à IA para o entrevistar, uma pergunta de cada vez.", "Responda em voz alta ou a escrever.", "Use o STAR nas perguntas \"fale-me de uma vez em que\".", "Depois de cada resposta, peça um ponto forte e uma coisa a melhorar.", "Pratique cinco perguntas até não precisar de notas."],
          words: [["Método STAR", "uma forma de responder: Situação, Tarefa, Ação, Resultado (do inglês Situation, Task, Action, Result)."], ["Entrevista simulada", "uma entrevista de prática."]],
          slides: [
            { title: "A IA como entrevistador de prática", bullets: ["Uma pergunta de cada vez", "Comentários: um ponto forte, uma coisa a melhorar", "Pratique em voz alta, se puder"] },
            { title: "Respostas STAR", bullets: ["Situação e Tarefa", "Ação: o que você fez", "Resultado: o que aconteceu"] },
            { title: "Cinco perguntas a preparar", bullets: ["Fale-me de si; porquê este emprego", "Um ponto forte; um problema que resolveu", "As suas perguntas para eles"] }
          ],
          tryIt: "Faça uma entrevista simulada com a IA para o seu anúncio de emprego. Responda a cinco perguntas em voz alta, usando o STAR quando servir, e anote os comentários.",
          youCanNow: "praticar entrevistas com a IA e responder com o método STAR.",
          quickCheck: [
            { objective: "O4", q: "No método STAR, o que quer dizer \"Resultado\"?", options: ["O nome do seu cargo", "O problema que enfrentou", "O que aconteceu por causa do que você fez", "A pergunta que lhe fizeram"], answer: 2, why: "O resultado é a consequência da sua ação, como terminar a tempo todos os dias." },
            { objective: "O4", q: "Só consegue responder a \"Fale-me de si\" a ler as suas notas. O que faz?", options: ["Pratica em voz alta com a IA até conseguir responder sem notas", "Salta essa pergunta na entrevista", "Decora um discurso comprido que a IA escreveu", "Leva as notas e lê-as"], answer: 0, why: "Pratique em voz alta até conseguir responder sem ler." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Falar com confiança de períodos sem trabalho ou de um registo criminal",
          minutes: 5,
          goal: "Preparar uma resposta curta, honesta e virada para o futuro sobre um período sem trabalho ou o seu passado.",
          text: [
            "Períodos sem trabalho acontecem: prisão, doença, cuidar de alguém, mudanças no serviço militar, despedimentos. Os empregadores querem sobretudo saber que você está pronto agora. Prepare uma resposta curta: seja honesto, seja breve, mostre o que aprendeu ou fez e passe para a razão por que está pronto para este emprego.",
            "Exemplo: \"Cometi um erro e cumpri pena. Lá dentro tirei o meu certificado de manipulador de alimentos e coordenei a linha da cozinha. Estou pronto para trazer essa ética de trabalho para aqui.\" Peça à IA para ajudar a encurtar e a tornar firme a sua resposta, mas use só factos que se sente à vontade para partilhar e deixe de fora números de processo e pormenores.",
            "Conheça os seus apoios. Muitos estados e cidades dos Estados Unidos têm regras de \"oportunidade justa\" (fair chance) ou \"ban the box\" sobre quando os empregadores podem perguntar por registos criminais; verifique no departamento do trabalho do seu estado ou num grupo de apoio jurídico à reintegração. O Federal Bonding Program (programa federal de cauções) oferece cauções de fidelidade gratuitas aos empregadores que contratam pessoas em risco que procuram emprego, durante os primeiros seis meses. Alguns empregadores também podem ter direito ao Work Opportunity Tax Credit (WOTC, um crédito fiscal); veja a página do WOTC no IRS (a autoridade fiscal dos EUA) para saber a situação atual e os grupos abrangidos."
          ],
          steps: ["Escreva o facto honesto numa frase.", "Acrescente o que aprendeu ou fez desde então.", "Acrescente porque está pronto para este emprego.", "Peça à IA para a tornar mais curta e mais firme.", "Pratique-a em voz alta até se sentir calmo."],
          words: [["Contratação com oportunidade justa", "regras ou práticas que dão às pessoas com registo criminal uma avaliação justa antes de perguntarem pelo seu passado."], ["Caução de fidelidade", "um seguro que protege o empregador contra perdas causadas pela desonestidade de um trabalhador."]],
          slides: [
            { title: "Uma boa resposta curta", bullets: ["Honesta e breve", "O que aprendeu ou fez", "Porque está pronto agora"] },
            { title: "Use a IA com cuidado", bullets: ["Encurte e torne firmes as suas palavras", "Só os factos que escolhe partilhar", "Sem números de processo"] },
            { title: "Conheça os seus apoios", bullets: ["Regras de oportunidade justa: verifique no seu estado", "Federal Bonding Program: cauções gratuitas, primeiros 6 meses", "WOTC: veja a página do IRS para a situação atual"] }
          ],
          sources: [{ name: "The Federal Bonding Program", url: "https://bonds4jobs.com/" }, { name: "Departamento do Trabalho dos EUA: Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" }, { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" }],
          tryIt: "Escreva uma resposta de três frases sobre um período sem trabalho ou o seu passado (a sua, ou uma de prática). Use a IA para a apertar e depois diga-a em voz alta três vezes.",
          youCanNow: "responder com honestidade e confiança a perguntas sobre um período sem trabalho ou um registo criminal, e dizer que apoios podem ajudar.",
          quickCheck: [
            { objective: "O5", q: "O que querem os empregadores sobretudo saber quando perguntam por um período sem trabalho?", options: ["Todos os pormenores do seu processo", "O seu número de processo", "Que está pronto para trabalhar agora", "Quem foi o seu advogado"], answer: 2, why: "Os empregadores querem sobretudo saber que está pronto agora, por isso seja breve e fale do futuro." },
            { objective: "O5", q: "Um entrevistador pergunta pelo seu registo criminal. Qual é a melhor resposta?", options: ["\"Isso não é da sua conta.\"", "Uma história comprida com todos os pormenores", "\"Nunca tive problemas.\"", "\"Cometi um erro e cumpri pena. Lá tirei o meu certificado de manipulador de alimentos, e estou pronto para trabalhar.\""], answer: 3, why: "Honesta, breve e centrada no que aprendeu e porque está pronto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Procurar emprego e candidatar-se com segurança",
          minutes: 5,
          goal: "Encontrar vagas reais, registar as candidaturas e evitar burlas de emprego.",
          text: [
            "Procure emprego em sites de confiança, nos sites das empresas e no seu American Job Center local, que dá ajuda gratuita na procura de emprego e na formação. O seu programa de reintegração, o serviço de apoio a antigos militares ou o programa de formação profissional podem ter ofertas de emprego e empregadores que contratam pessoas com registo criminal.",
            "Registe cada candidatura numa folha simples: empresa, emprego, data da candidatura, contacto, data para voltar a contactar. Volte a contactar cerca de uma semana depois com um email curto e educado. A IA pode fazer o rascunho.",
            "Cuidado com as burlas de emprego. A FTC (a agência de proteção do consumidor dos EUA) avisa: os empregadores honestos não cobram para lhe dar um emprego; desconfie de muito dinheiro por pouco trabalho, de pedidos para depositar um cheque e devolver dinheiro, de reenviar encomendas ou de pagar adiantado por formação ou certificados. Nunca dê o número da conta do banco nem da Segurança Social antes de ter uma oferta verdadeira de uma empresa verdadeira. Denuncie burlas em ReportFraud.ftc.gov."
          ],
          steps: ["Procure em sites de confiança, nas páginas das empresas e no seu American Job Center.", "Registe cada candidatura numa folha.", "Volte a contactar cerca de uma semana depois.", "Verifique cada anúncio para ver sinais de alerta de burla.", "Denuncie burlas em ReportFraud.ftc.gov."],
          words: [["American Job Center", "um serviço gratuito pago pelo governo dos EUA que ajuda na procura de emprego e na formação."], ["Burla de emprego", "uma falsa oferta de emprego feita para roubar dinheiro ou informações."]],
          slides: [
            { title: "Onde procurar", bullets: ["Sites de emprego de confiança e páginas das empresas", "American Job Centers", "Programas de reintegração, de antigos militares e de formação"] },
            { title: "Registe e volte a contactar", bullets: ["Empresa, emprego, data, contacto", "Volte a contactar dentro de cerca de uma semana"] },
            { title: "Sinais de burla de emprego (FTC)", bullets: ["Cobram para lhe dar um emprego", "Depositar um cheque e devolver dinheiro", "Reenviar encomendas; muito dinheiro por pouco trabalho"] }
          ],
          sources: [{ name: "FTC: Burlas de emprego", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "CareerOneStop (Departamento do Trabalho dos EUA): encontrar um American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Tarefa final: termine o seu currículo adaptado, a carta de apresentação e as cinco respostas de entrevista praticadas para o seu anúncio de emprego real. Verifique o anúncio com os sinais de burla, acrescente-o a uma folha de registo e candidate-se, ou deixe tudo pronto para enviar.",
          youCanNow: "montar um kit de emprego com a IA, fazer entrevistas com confiança e candidatar-se com segurança.",
          quickCheck: [
            { objective: "O6", q: "Onde pode ter ajuda gratuita na procura de emprego e na formação?", options: ["Num American Job Center", "Num site que cobra para se candidatar", "Numa SMS de um número desconhecido", "Num emprego que pede para reenviar encomendas"], answer: 0, why: "Os American Job Centers dão ajuda gratuita na procura de emprego e na formação." },
            { objective: "O6", q: "Um \"emprego\" oferece muito dinheiro por pouco trabalho e pede a sua conta do banco antes de qualquer entrevista. O que faz?", options: ["Envia-a para começar mais depressa", "Envia só metade do número da conta", "Não a partilha; verifica os sinais de burla e denuncia", "Paga primeiro uma pequena taxa"], answer: 2, why: "Nunca dê a conta do banco antes de uma oferta verdadeira; isto tem sinais de alerta de burla." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Entrevistas e procura de emprego",
        questions: [
          { objective: "O4", q: "O que quer dizer STAR?", options: ["Começar, Falar, Perguntar, Descansar", "Habilidades, Formação, Prémios, Referências", "Sorrir, Agradecer, Responder, Voltar", "Situação, Tarefa, Ação, Resultado"], answer: 3, why: "O STAR organiza as respostas a \"fale-me de uma vez em que\"." },
          { objective: "O5", q: "Uma boa resposta sobre um período sem trabalho ou um registo criminal é:", options: ["Honesta, breve e centrada na razão por que está pronto agora", "Uma história comprida com todos os pormenores", "Uma mentira", "Recusar responder com má educação"], answer: 0, why: "As respostas curtas, honestas e viradas para o futuro funcionam melhor." },
          { objective: "O5", q: "O que oferece o Federal Bonding Program?", options: ["Carros grátis", "Dinheiro a quem procura emprego", "Cauções de fidelidade gratuitas aos empregadores que contratam pessoas em risco que procuram emprego", "Saída da prisão"], answer: 2, why: "Dá aos empregadores cauções gratuitas para os primeiros seis meses." },
          { objective: "O6", q: "Uma oferta de emprego pede-lhe que pague $150 por formação antes de começar. Segundo a FTC, isto é:", options: ["Normal em todos os empregos", "Um imposto", "Um bónus", "Um sinal de alerta de burla"], answer: 3, why: "Os empregadores honestos não cobram para lhe dar um emprego." },
          { objective: "O6", q: "Quando deve voltar a contactar depois de se candidatar?", options: ["De hora a hora", "Nunca", "Cerca de uma semana depois, com um email curto e educado", "Depois de um ano"], answer: 2, why: "Voltar a contactar com educação mostra interesse." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Preparação para o Emprego e Desenvolvimento de Carreira",
    questions: [
      { objective: "O1", q: "Uma habilidade transferível é:", options: ["Uma habilidade que pode vender", "Uma habilidade de um lugar que é útil noutro", "Uma habilidade só para computadores", "Uma habilidade falsa"], answer: 1, why: "As habilidades passam de um lugar para outro." },
      { objective: "O1", q: "Qual é uma habilidade interpessoal?", options: ["Ser de confiança", "Conduzir um empilhador", "Soldar", "Rapidez a escrever no teclado"], answer: 0, why: "As habilidades interpessoais são habilidades de lidar com pessoas." },
      { objective: "O1", q: "Que experiência conta para as habilidades de trabalho?", options: ["Só empregos pagos de escritório", "Só a universidade", "Cuidar de um familiar", "Nada fora de um emprego"], answer: 2, why: "Toda a experiência real dá habilidades." },
      { objective: "O1", q: "Porque tem de ser verdade tudo o que está no seu currículo?", options: ["Podem perguntar-lhe sobre isso na entrevista", "A IA verifica", "Não precisa de ser", "Para ficar mais comprido"], answer: 0, why: "Os entrevistadores perguntam pelo que você pôs na lista." },
      { objective: "O2", q: "Uma palavra-chave é:", options: ["Uma palavra-passe", "Uma chave do escritório", "O seu nome", "Uma palavra importante do anúncio de emprego"], answer: 3, why: "Combinar as palavras-chave ajuda o seu currículo a ser notado." },
      { objective: "O2", q: "Qual é o tópico mais forte?", options: ["\"Fiz coisas na cozinha\"", "\"Preparei refeições para 500 pessoas por dia, cumprindo as normas de segurança alimentar\"", "\"Trabalhei\"", "\"Comida\""], answer: 1, why: "Verbo de ação, números e um resultado." },
      { objective: "O2", q: "Quando pede à IA para adaptar o seu currículo, cole:", options: ["O seu número da Segurança Social", "O anúncio de emprego, não os seus dados privados", "O seu número de processo", "Os seus dados do banco"], answer: 1, why: "O anúncio de emprego é o que a IA precisa." },
      { objective: "O2", q: "Que tamanho deve ter normalmente um currículo para a maioria dos empregos de nível inicial?", options: ["Dez páginas", "Meia linha", "O mais comprido possível", "Uma página"], answer: 3, why: "Uma página é fácil de ler." },
      { objective: "O3", q: "Uma carta de apresentação explica:", options: ["Porque quer o emprego e porque serve para ele", "Toda a história da sua vida", "Só os salários que já recebeu", "As suas palavras-passe"], answer: 0, why: "Liga você ao emprego." },
      { objective: "O3", q: "Depois de a IA fazer o rascunho da carta de apresentação, você deve:", options: ["Enviá-la sem ler", "Acrescentar habilidades que não tem", "Editá-la e lê-la em voz alta até soar como você", "Fazê-la com 1,000 palavras"], answer: 2, why: "A sua carta deve soar como você." },
      { objective: "O4", q: "Uma entrevista simulada é:", options: ["Um emprego falso", "Uma entrevista mal-educada", "Uma entrevista a que falta", "Uma entrevista de prática"], answer: 3, why: "A prática dá confiança." },
      { objective: "O4", q: "No STAR, \"Ação\" quer dizer:", options: ["O tempo que está lá fora", "O nome da empresa", "O que você fez", "O seu salário"], answer: 2, why: "A ação é a sua parte da história." },
      { objective: "O4", q: "\"Tem alguma pergunta para nós?\" A melhor resposta:", options: ["\"Não.\"", "Fazer uma pergunta pensada sobre o emprego ou a equipa", "Só \"Quando posso tirar férias?\"", "Ir-se embora"], answer: 1, why: "Boas perguntas mostram interesse." },
      { objective: "O5", q: "Quando fala de um registo criminal, deve:", options: ["Partilhar, de forma breve, só os factos com que está à vontade", "Dar o seu número de processo", "Mentir sobre isso", "Falar sobre isso durante 20 minutos"], answer: 0, why: "Breve, honesto e virado para o futuro é o melhor." },
      { objective: "O5", q: "As regras de oportunidade justa ou \"ban the box\":", options: ["São iguais em todo o lado", "Não existem", "Mudam de estado para estado e de cidade para cidade; verifique no departamento do trabalho do seu estado", "Proíbem todas as verificações de antecedentes"], answer: 2, why: "Estas regras são diferentes de lugar para lugar." },
      { objective: "O5", q: "Onde pode ver a situação atual do Work Opportunity Tax Credit?", options: ["Na página do WOTC no IRS", "Numa publicação nas redes sociais", "Num palpite da IA", "Num anúncio de emprego"], answer: 0, why: "As regras e as datas dos créditos fiscais mudam; o IRS é a fonte." },
      { objective: "O6", q: "Os American Job Centers oferecem:", options: ["Só currículos escritos a pagar", "Empréstimos", "Habitação", "Ajuda gratuita na procura de emprego e na formação"], answer: 3, why: "São centros gratuitos de apoio ao emprego." },
      { objective: "O6", q: "Uma folha de registo de candidaturas inclui:", options: ["As suas palavras-passe", "Empresa, emprego, data da candidatura, contacto e data para voltar a contactar", "A sua conta do banco", "Nada"], answer: 1, why: "Registar mantém você organizado." },
      { objective: "O6", q: "Um \"emprego\" pede-lhe para depositar um cheque e devolver parte do dinheiro. Isto é:", options: ["Um pagamento de salário normal", "Uma burla do cheque falso", "Um bónus", "Um reembolso de impostos"], answer: 1, why: "A FTC diz que esta é uma burla comum." },
      { objective: "O6", q: "Quando pode dar o número da sua conta do banco para o pagamento do salário?", options: ["Na sua primeira mensagem a qualquer recrutador", "Num comentário num site de emprego", "A qualquer pessoa que peça", "Depois de uma oferta verdadeira de um empregador verdadeiro e verificado"], answer: 3, why: "Partilhe para o salário só depois de uma oferta verdadeira e verificada." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Currículo adaptado",
        objective: "O2",
        notYet: "Tem mais de uma página, não combina com o emprego ou tem números privados.",
        meets: "Uma página com as palavras-chave do emprego, tópicos com verbos de ação e números, e sem números privados.",
        exceeds: "Cada tópico liga a uma habilidade que o anúncio de emprego pede."
      },
      {
        name: "Habilidades verdadeiras",
        objective: "O1",
        notYet: "Uma habilidade ou afirmação no currículo não é verdade.",
        meets: "Todas as habilidades são verdadeiras e têm um exemplo real.",
        exceeds: "As habilidades de empregos na prisão, de cuidar de alguém ou de trabalho informal estão descritas com as palavras dos empregadores."
      },
      {
        name: "Carta de apresentação",
        objective: "O3",
        notYet: "Tem mais de 200 palavras, ou parece uma carta genérica de IA.",
        meets: "Três parágrafos curtos com menos de 200 palavras que soam como o aluno.",
        exceeds: "Inclui um detalhe verdadeiro sobre porque quer trabalhar lá."
      },
      {
        name: "Respostas de entrevista",
        objective: "O4",
        notYet: "Menos de cinco respostas, ou as respostas são lidas das notas.",
        meets: "Cinco respostas praticadas em voz alta, com o STAR nas perguntas \"fale-me de uma vez em que\".",
        exceeds: "Usa os comentários da IA para melhorar pelo menos duas respostas."
      },
      {
        name: "Resposta sobre um período sem trabalho ou o passado",
        objective: "O5",
        notYet: "A resposta é comprida, defensiva ou falsa (se for o caso).",
        meets: "Curta, honesta e acaba com a razão por que o aluno está pronto agora.",
        exceeds: "Dita com calma em voz alta, sem notas."
      },
      {
        name: "Candidatura segura",
        objective: "O6",
        notYet: "O anúncio de emprego não foi verificado para ver sinais de burla.",
        meets: "O anúncio foi verificado com os sinais de burla e a candidatura está registada.",
        exceeds: "Está marcada uma data para voltar a contactar cerca de uma semana depois."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam a pelo menos três empregos em 30 dias (inquérito de seguimento)",
      "Alunos que conseguem uma entrevista ou uma oferta de emprego em 90 dias",
      "Alunos que dizem ter reconhecido e evitado uma burla de emprego"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca, de um centro de emprego ou do programa",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini) e um modelo de currículo gratuito no Google Docs ou no Word",
      "Um anúncio de emprego real a que o aluno possa candidatar-se",
      "Papel e caneta para a lista de habilidades e as notas da entrevista",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo de prática"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas ao vivo.",
      "Trabalhe com um conselheiro de reintegração ou um American Job Center para os alunos terem ajuda a indicar o trabalho feito enquanto estiveram presos.",
      "Façam entrevistas simuladas em pares; deixe os alunos escolher se querem praticar uma pergunta sobre o passado à frente dos outros.",
      "Nunca peça aos alunos para escrever números da Segurança Social, de processo ou de recluso em ferramentas de IA; use marcadores.",
      "Lembre aos alunos em liberdade condicional ou com pena suspensa que cumpram as condições sobre o uso da internet, e avalie a tarefa final com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
