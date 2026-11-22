"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-ai-certifications.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: VA, GI Bill, My Next Move, COOL and form names are kept as in the English.

module.exports = {
  id: "veterans-ai-certifications-pt",
  lang: "pt",
  translationOf: "veterans-ai-certifications",
  category: "Veterans (military)",
  name: "Certificações com IA para Veteranos",
  skills: "Traduzir um cargo militar em cargos civis, Encontrar a certificação que os empregadores pedem, Verificar o que o GI Bill paga, Fazer um plano de estudo com IA, Mostrar uma certificação no currículo",
  outcome: "escolher um trabalho civil que combine com a sua experiência militar, encontrar a certificação que os empregadores pedem, verificar se o VA pode pagar a taxa do exame e fazer um plano de estudo semana a semana com um assistente de IA.",
  about: [
    "Você já ganhou qualificações na farda: cursos, distintivos, licenças e formação no trabalho. Os empregadores civis muitas vezes querem ver as mesmas competências como uma certificação com nome. Este curso ajuda você a escolher a certa e a planear como a obter.",
    "Você vai traduzir o seu cargo militar em cargos civis, ler anúncios de emprego reais para ver que certificação pedem, verificar nas páginas oficiais do VA (o Departamento de Assuntos de Veteranos dos EUA) o que o GI Bill pode pagar, e usar um assistente de IA para fazer um plano de estudo e perguntas de prática.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso. As regras dos apoios mudam, por isso cada dado sobre dinheiro indica a página oficial do VA para verificar."
  ],
  finalTask: "Faça um Plano de Certificação de uma página: o seu cargo militar e dois cargos civis que combinam com ele, a certificação que aparece mais nos anúncios de emprego reais, se o VA pode pagar a taxa do exame (com a página oficial que verificou), um plano de estudo semana a semana feito com um assistente de IA, e a linha do currículo que vai acrescentar quando passar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos e militares em transição que querem uma certificação civil para mostrar as competências que ganharam na farda, muitas vezes nas áreas de informática, logística, manutenção, saúde ou segurança.",
    startingPoint: "Têm cursos militares, distintivos, licenças e formação no trabalho, e sabem usar um computador ou um smartphone. A maioria ainda não sabe que certificação os empregadores querem, se o VA pode pagar a taxa do exame, ou como planear o estudo à volta do trabalho e da família.",
    gap: "Os empregadores civis muitas vezes filtram os candidatos por certificações com nome, e uma escolha errada desperdiça tempo e apoios. Os alunos precisam de escolher a certificação que os anúncios reais pedem, verificar as regras de pagamento do VA nas páginas oficiais e seguir um plano de estudo realista feito com IA, sem atalhos desonestos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um computador ou smartphone com internet e um assistente de IA gratuito",
      "Os valores dos apoios, os formulários e as regras dos exames mudam, por isso os alunos confirmam-nos no va.gov e no site da própria entidade certificadora",
      "OPSEC (segurança das operações): nenhum detalhe classificado nem informação da unidade em nenhum pedido à IA",
      "Tempo: lições de cerca de 5 minutos; o próprio plano de estudo continua durante semanas depois do curso"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à IA e ao Futuro do Trabalho\" ajuda os alunos a traduzir primeiro as suas funções."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o código do seu cargo militar", action: "identificar dois ou três cargos civis que combinam com o seu cargo militar", standard: "usando o My Next Move for Veterans e sem nenhum detalhe classificado em nenhum pedido" },
    { id: "O2", condition: "Com pelo menos cinco anúncios de emprego reais para o trabalho que procura", action: "identificar a certificação que os empregadores pedem mais e confirmar as suas regras no site da entidade certificadora", standard: "usando uma contagem dos anúncios" },
    { id: "O3", condition: "Para a certificação que escolheu", action: "verificar no va.gov se o VA pode devolver a taxa do exame e como pedi-la", standard: "anotando o limite, os apoios que dão direito e o formulário a partir da página oficial" },
    { id: "O4", condition: "Com o programa oficial do exame, as suas semanas e as suas horas", action: "criar um plano de estudo semana a semana com um assistente de IA", standard: "com um objetivo para cada semana, uma semana de revisão e um teste de prática" },
    { id: "O5", condition: "Quando pratica para o exame", action: "usar a IA para lhe fazer perguntas e explicar os seus erros, verificando-a com o material oficial", standard: "sem usar \"brain dumps\" nem perguntas de exame divulgadas" },
    { id: "O6", condition: "Quando obtém a certificação ou está a trabalhar para a obter", action: "escrever uma linha de currículo que mostre a certificação e o seu serviço juntos", standard: "com o nome completo, a entidade certificadora e o ano ou a data do exame" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher a certificação certa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Traduzir o seu cargo militar em cargos civis",
          minutes: 5,
          goal: "Transformar o código do seu cargo militar em dois ou três cargos civis.",
          text: [
            "Os responsáveis pela contratação civis raramente sabem o que quer dizer um MOS, um \"rating\" ou um AFSC. O seu primeiro trabalho é traduzi-lo nos nomes de cargos que eles usam, como \"técnico de apoio informático\", \"coordenador de logística\" ou \"técnico de manutenção\".",
            "O My Next Move for Veterans (mynextmove.org/vets), feito para o Departamento do Trabalho dos EUA, deixa você escrever o seu ramo e o código ou o nome do seu cargo militar e ver carreiras civis com trabalho parecido.",
            "Um assistente de IA também pode ajudar. Peça-lhe para explicar as suas funções com palavras civis e depois compare a resposta com o My Next Move. Não cole detalhes classificados, nomes de unidades nem nada que lhe disseram para não partilhar."
          ],
          steps: ["Abra mynextmove.org/vets.", "Na parte militar, escolha o seu ramo e escreva o código ou o nome do seu cargo.", "Anote duas ou três carreiras civis que ele sugere.", "Pergunte a um assistente de IA: \"Fui 25B do Exército (especialista de informática). Descreva as minhas funções com palavras civis para um anúncio de emprego.\"", "Fique com os cargos que aparecem nos dois lugares."],
          words: [["MOS / rating / AFSC", "os códigos que as forças armadas dos EUA usam para os cargos militares (MOS no Exército e nos Fuzileiros, \"ratings\" na Marinha e na Guarda Costeira, AFSC na Força Aérea)."], ["Cargo", "o nome que um empregador dá a um trabalho num anúncio de emprego."]],
          slides: [
            { title: "Os empregadores não falam MOS", bullets: ["Traduza o código do seu cargo em cargos civis", "Use as palavras que um anúncio de emprego usaria"] },
            { title: "My Next Move for Veterans", bullets: ["mynextmove.org/vets, para o Departamento do Trabalho", "Escreva o seu ramo e o código do cargo", "Veja carreiras civis com trabalho parecido"] },
            { title: "Peça à IA para traduzir", bullets: ["\"Descreva as minhas funções de 25B com palavras civis\"", "Compare com o My Next Move", "Nunca cole detalhes classificados nem da unidade"] }
          ],
          sources: [{ name: "My Next Move for Veterans (Departamento do Trabalho dos EUA)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Procure o seu próprio cargo militar em mynextmove.org/vets e peça a um assistente de IA para descrever as suas funções com palavras civis. Anote os dois cargos civis que aparecem nos dois.",
          youCanNow: "transformar o código do seu cargo militar em cargos civis que um empregador reconhece.",
          quickCheck: [
            { objective: "O1", q: "O que faz o My Next Move for Veterans?", options: ["Mostra carreiras civis parecidas com o seu cargo militar", "Paga a sua certificação", "Escreve o seu currículo por você", "Marca o seu exame"], answer: 0, why: "Você escreve o seu cargo militar e ele mostra carreiras civis parecidas." },
            { objective: "O1", q: "Pede a uma IA para descrever as suas funções com palavras civis. O que deixa de fora do pedido?", options: ["O nome do seu cargo", "O número de pessoas que chefiou", "O tipo de equipamento que mantinha", "Detalhes classificados e informação da unidade"], answer: 3, why: "As funções gerais podem ir, mas os detalhes classificados e a informação da unidade nunca vão para uma IA pública." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar a certificação que os empregadores pedem",
          minutes: 5,
          goal: "Encontrar a certificação que aparece mais nos anúncios de emprego reais para o trabalho que procura.",
          text: [
            "Uma certificação é a prova, dada por uma organização de fora, de que você passou num exame sobre uma competência. Os empregadores escrevem nos anúncios as que querem, por isso os anúncios de emprego são o melhor guia.",
            "Procure num site de emprego o cargo que quer e a sua zona. Leia de cinco a dez anúncios e conte cada certificação que aparece. A que aparece mais costuma ser o seu primeiro alvo.",
            "Cada ramo das forças armadas tem um site COOL (Credentialing Opportunities On-Line) que liga os cargos militares a certificações relacionadas. Pergunte ao seu gabinete de educação ou pesquise \"COOL\" com o nome do seu ramo. Verifique sempre no site da própria entidade certificadora o exame, as regras e o preço atuais.",
            "A IA pode ajudar a comparar duas certificações, mas pode estar desatualizada. Use-a para explicar, não para decidir preços ou regras."
          ],
          steps: ["Procure num site de emprego o cargo que quer.", "Leia de cinco a dez anúncios e faça a lista de cada certificação que aparece.", "Conte-as; marque com um círculo a mais comum.", "Veja no site COOL do seu ramo como ela se liga ao seu cargo militar.", "Abra o site da própria entidade certificadora para ver os detalhes atuais do exame."],
          words: [["Certificação", "a prova, dada por uma organização de fora, de que você passou num exame sobre uma competência."], ["Entidade certificadora", "a organização que faz o exame e dá a certificação."], ["COOL", "Credentialing Opportunities On-Line, os sites das forças armadas dos EUA que ligam os cargos militares a certificações civis."]],
          slides: [
            { title: "Deixe os anúncios decidir", bullets: ["Leia 5-10 anúncios para o trabalho que procura", "Conte cada certificação que aparece", "A mais comum é o seu primeiro alvo"] },
            { title: "Use o site COOL do seu ramo", bullets: ["Liga o seu cargo militar a certificações relacionadas", "Peça o link ao seu gabinete de educação"] },
            { title: "Verifique na fonte", bullets: ["O site da entidade certificadora tem o exame atual", "A IA pode explicar, mas pode estar desatualizada"] }
          ],
          tryIt: "Leia pelo menos cinco anúncios de emprego reais para um dos seus cargos civis. Faça a contagem das certificações que aparecem e marque com um círculo a mais comum.",
          youCanNow: "usar anúncios de emprego reais para escolher a certificação que os empregadores mais querem.",
          quickCheck: [
            { objective: "O2", q: "O que é uma certificação?", options: ["Um curso universitário", "Uma carta de um amigo", "A prova, dada por uma organização de fora, de que passou num exame de competência", "O nome de um cargo"], answer: 2, why: "Uma certificação obtém-se ao passar num exame feito por uma entidade certificadora de fora." },
            { objective: "O2", q: "Três dos seus cinco anúncios falam da mesma certificação. O que faz?", options: ["Escolhe outra que parece mais difícil", "Marca-a como alvo e verifica as regras no site da entidade certificadora", "Ignora os anúncios e pergunta à IA", "Tira todas as certificações ao mesmo tempo"], answer: 1, why: "A certificação que aparece mais nos anúncios reais é a que os empregadores querem; as regras atuais vêm da entidade certificadora." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Verificar o que o GI Bill pode pagar",
          minutes: 5,
          goal: "Verificar no va.gov se o VA pode devolver a taxa do seu exame de certificação e como pedi-la.",
          text: [
            "O VA pode devolver-lhe o dinheiro das taxas dos exames de licença e de certificação, incluindo as taxas de inscrição e administrativas. Quando verificámos o va.gov em outubro de 2026, o limite era de no máximo $2,000 por exame, e o VA tira o valor que devolve do seu direito ao GI Bill. Não paga o próprio certificado.",
            "Você tem de já ter um destes apoios: o Post-9/11 GI Bill, o Montgomery GI Bill Active Duty ou Selected Reserve, ou o Survivors' and Dependents' Educational Assistance. Para pedir o dinheiro, envie o VA Form 22-0803 com o recibo da taxa e os resultados do exame ou o certificado.",
            "O VA também mostra outras formas de usar os apoios, como cursos de preparação, programas que não são universitários e o programa de formação em alta tecnologia VET TEC 2.0, que tem um número limitado de vagas por ano. As regras e os valores mudam, por isso abra a página oficial antes de gastar dinheiro."
          ],
          steps: ["Abra o va.gov e encontre a página das taxas dos exames de licença e de certificação.", "Confirme que tem um dos apoios do GI Bill da lista.", "Anote o limite atual e que ele gasta parte do seu direito.", "Guarde o recibo do exame e os seus resultados.", "Envie o VA Form 22-0803 como a página explica."],
          words: [["Direito (entitlement)", "a quantidade de apoio do GI Bill que ainda tem para usar."], ["Reembolso", "receber de volta o dinheiro que já gastou."]],
          slides: [
            { title: "O VA pode devolver taxas de exame", bullets: ["Taxas dos exames de licença e de certificação", "No máximo $2,000 por exame (va.gov, out. 2026)", "Sai do seu direito ao GI Bill"] },
            { title: "Como pedir", bullets: ["Guarde o recibo da taxa e os seus resultados", "Envie o VA Form 22-0803", "Veja no va.gov para onde enviar"] },
            { title: "Outras opções", bullets: ["Cursos de preparação e programas não universitários", "VET TEC 2.0 para formação em alta tecnologia (vagas limitadas)", "Verifique sempre primeiro a página oficial"] }
          ],
          sources: [
            { name: "VA: Taxas dos exames de licença e de certificação", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA: Como usar os seus apoios do GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" }
          ],
          tryIt: "Abra a página das taxas de exame no va.gov. Anote o limite atual, os apoios que dão direito e o número do formulário. Depois veja se tem um desses apoios.",
          youCanNow: "verificar no va.gov se o VA pode devolver a taxa de um exame de certificação e o que precisa de enviar.",
          quickCheck: [
            { objective: "O3", q: "O que acontece ao seu GI Bill quando o VA devolve uma taxa de exame?", options: ["Nada muda", "Recebe mais direito", "O seu GI Bill é cancelado", "O valor é tirado do seu direito"], answer: 3, why: "O reembolso da taxa de exame gasta parte do seu direito ao GI Bill." },
            { objective: "O3", q: "Uma mensagem num fórum diz que o VA paga qualquer taxa de exame por inteiro. O que faz?", options: ["Verifica as regras atuais na página oficial das taxas de exame no va.gov", "Marca o exame mais caro", "Confia na mensagem porque muitas pessoas gostaram dela", "Pede à IA para confirmar"], answer: 0, why: "As regras e os limites dos apoios mudam, por isso confirme-os na página oficial do va.gov." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher a certificação certa",
        questions: [
          { objective: "O1", q: "Um responsável pela contratação não sabe o que quer dizer o seu MOS. O que deve fazer?", options: ["Escrever o código com letras maiores", "Tirar esse trabalho do currículo", "Traduzi-lo em cargos e funções civis", "Pedir-lhe para o pesquisar"], answer: 2, why: "Os cargos e as funções civis são palavras que o empregador já entende." },
          { objective: "O1", q: "Que site gratuito deixa escrever o código de um cargo militar e ver carreiras civis?", options: ["My Next Move for Veterans", "Uma aplicação de redes sociais", "Uma loja de videojogos", "Um site do tempo"], answer: 0, why: "mynextmove.org/vets é a ferramenta do Departamento do Trabalho para isto." },
          { objective: "O2", q: "Como descobre que certificação os empregadores querem mais?", options: ["Escolhe a mais cara", "Pergunta a um amigo qualquer", "Faz todos os exames ao mesmo tempo", "Conta as certificações que aparecem nos anúncios de emprego reais"], answer: 3, why: "Os anúncios de emprego mostram o que os empregadores pedem." },
          { objective: "O2", q: "Onde verifica as regras e o preço atuais do exame de uma certificação?", options: ["Só numa conversa com a IA", "No site da própria entidade certificadora", "Numa mensagem antiga de um fórum", "Num anúncio que aparece no ecrã"], answer: 1, why: "A organização que faz o exame tem os detalhes atuais." },
          { objective: "O3", q: "Segundo o va.gov em outubro de 2026, o que é verdade sobre o VA pagar taxas de exames de certificação?", options: ["O VA paga o documento do certificado", "O VA pode devolver até $2,000 por exame e isso gasta direito", "Não há limite", "Qualquer pessoa pode pedir sem um apoio do GI Bill"], answer: 1, why: "A página dizia no máximo $2,000 por exame, descontados do direito." }
        ]
      }
    },
    {
      name: "Capítulo 2: Obter a certificação",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer um plano de estudo com IA",
          minutes: 5,
          goal: "Usar um assistente de IA para transformar o programa oficial do exame num plano de estudo semana a semana.",
          text: [
            "A maioria das entidades certificadoras publica um programa do exame, às vezes chamado objetivos do exame. Ele mostra todos os temas que o exame cobre. É o seu briefing de missão.",
            "Copie os temas principais (não o documento inteiro, se for longo) para um assistente de IA e diga-lhe a sua situação: quantas semanas tem, quantas horas por semana e o que já sabe das forças armadas.",
            "Peça um plano com um objetivo para cada semana, uma semana de revisão antes do exame e uma data para um teste de prática. Depois ponha as sessões no seu calendário como horários de serviço."
          ],
          steps: ["Descarregue o programa oficial do exame no site da entidade certificadora.", "Diga à IA as suas semanas, as horas por semana e o que já sabe.", "Cole os temas principais e peça um plano semana a semana.", "Peça-lhe para acrescentar uma semana de revisão e um teste de prática.", "Ponha cada sessão de estudo no seu calendário."],
          words: [["Programa do exame (objetivos)", "a lista oficial dos temas que um exame de certificação cobre."], ["Plano de estudo", "um horário que diz o que vai estudar e quando."]],
          slides: [
            { title: "O programa do exame é o seu briefing de missão", bullets: ["Mostra todos os temas que o exame cobre", "Obtenha-o na entidade certificadora"] },
            { title: "Diga à IA a sua situação", bullets: ["Semanas até ao exame", "Horas que pode estudar por semana", "O que já sabe do serviço"] },
            { title: "Peça um plano a sério", bullets: ["Um objetivo para cada semana", "Uma semana de revisão e um teste de prática", "Depois ponha-o no seu calendário"] }
          ],
          tryIt: "Obtenha o programa do exame da certificação que escolheu. Pergunte a um assistente de IA: \"Tenho 8 semanas e 6 horas por semana. Já sei [o que sabe]. Faça um plano de estudo semana a semana para estes temas: [temas].\"",
          youCanNow: "transformar o programa oficial de um exame num plano de estudo semana a semana com um assistente de IA.",
          quickCheck: [
            { objective: "O4", q: "O que é o programa de um exame?", options: ["Um teste de prática de um site", "A lista oficial dos temas que o exame cobre", "O horário de um grupo de estudo", "Uma lista de respostas de exames antigos"], answer: 1, why: "O programa do exame, da entidade certificadora, mostra exatamente o que o exame cobre." },
            { objective: "O4", q: "Tem 10 semanas e 5 horas por semana. O que dá à IA para o seu plano de estudo?", options: ["Só \"ajude-me a passar\"", "O seu login do site do exame", "Os temas do exame, 10 semanas, 5 horas por semana e o que já sabe", "O plano de estudo de um amigo"], answer: 2, why: "Os temas, o tempo e o que já sabe deixam a IA fazer um plano realista semana a semana." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Praticar com a IA da forma certa",
          minutes: 5,
          goal: "Usar a IA para lhe fazer perguntas e explicar os erros, verificando-a com o material oficial.",
          text: [
            "A IA é uma boa companheira de estudo. Pode fazer-lhe perguntas sobre um tema, explicar uma resposta errada com palavras mais simples, ou dar um exemplo real do seu cargo militar.",
            "Também pode estar errada ou desatualizada. Se a resposta dela não for igual ao guia de estudo oficial ou ao programa do exame, confie no material oficial.",
            "Nunca use \"brain dumps\" (cópias de perguntas reais do exame). Vão contra as regras da entidade certificadora e podem fazer você perder a certificação. Pratique para entender, não para decorar respostas."
          ],
          steps: ["Peça: \"Faça-me 5 perguntas sobre [um tema]. Espere pela minha resposta de cada vez.\"", "Quando errar uma, peça-lhe para explicar com palavras simples.", "Peça um exemplo do seu cargo militar.", "Verifique no guia de estudo oficial qualquer resposta de que duvide.", "Anote os seus temas fracos e estude-os outra vez."],
          words: [["Brain dump", "uma cópia de perguntas reais do exame partilhada contra as regras; usar uma pode fazer você perder a certificação."], ["Teste de prática", "um teste feito para praticar, parecido com o verdadeiro mas não copiado dele."]],
          slides: [
            { title: "A IA como companheira de estudo", bullets: ["Faz-lhe perguntas sobre um tema", "Explica as respostas erradas de forma simples", "Dá exemplos do seu cargo militar"] },
            { title: "Verifique com o material oficial", bullets: ["A IA pode estar errada ou desatualizada", "O guia de estudo oficial ganha"] },
            { title: "Nada de brain dumps", bullets: ["Perguntas de exame copiadas vão contra as regras", "Podem fazer você perder a certificação", "Pratique para entender"] }
          ],
          tryIt: "Escolha o primeiro tema do seu plano de estudo. Peça a um assistente de IA para lhe fazer cinco perguntas, uma de cada vez. Em cada erro, peça uma explicação simples e verifique-a no material oficial.",
          youCanNow: "usar a IA para se testar e explicar os erros, verificando-a com o material oficial.",
          quickCheck: [
            { objective: "O5", q: "O que é um brain dump?", options: ["Perguntas reais do exame divulgadas e partilhadas contra as regras", "Um plano de estudo feito pela IA", "Um teste de prática oficial gratuito", "Uma lista dos temas do exame"], answer: 0, why: "Os brain dumps partilham perguntas reais do exame, o que vai contra as regras e pode fazer você perder a certificação." },
            { objective: "O5", q: "Errou uma pergunta de prática da IA. O que faz a seguir?", options: ["Salta esse tema", "Decora a resposta da IA sem verificar", "Procura um brain dump", "Pede à IA para explicar de forma simples e verifica no guia oficial"], answer: 3, why: "As explicações da IA ajudam, mas o guia oficial tem a última palavra." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mostrar a sua certificação aos empregadores",
          minutes: 4,
          goal: "Escrever a linha do currículo e uma pequena história que mostrem a sua certificação e o seu serviço juntos.",
          text: [
            "Quando passar, ponha a certificação onde os empregadores olham: uma secção \"Certificações\" no currículo com o nome completo, a entidade certificadora e o ano, e também no seu perfil na internet.",
            "Ligue-a ao seu serviço. Por exemplo: \"Geri o acesso à rede de 300 utilizadores como especialista de informática do Exército; obtive [nome da certificação] em 2026.\" A certificação prova a competência; o seu serviço prova que a usou sob pressão.",
            "Ainda a estudar? Pode escrever \"[nome da certificação], em curso, data do exame [mês ano]\". Peça a um assistente de IA ajuda com as palavras e depois confirme que cada palavra é verdade."
          ],
          steps: ["Acrescente uma secção Certificações ao seu currículo.", "Escreva o nome completo da certificação, a entidade e o ano.", "Acrescente uma linha que a ligue a algo que fez no serviço.", "Se ainda está a estudar, escreva \"em curso\" com o mês do exame.", "Leia em voz alta e confirme que cada palavra é verdade."],
          words: [["Currículo", "um resumo de uma ou duas páginas do seu trabalho, formação e competências para os empregadores."]],
          slides: [
            { title: "Ponha-a onde os empregadores olham", bullets: ["Uma secção Certificações no seu currículo", "Nome completo, a entidade certificadora, o ano"] },
            { title: "Ligue-a ao seu serviço", bullets: ["A certificação prova a competência", "O serviço mostra que a usou sob pressão"] },
            { title: "Ainda a estudar?", bullets: ["\"[Nome], em curso, data do exame [mês ano]\"", "Cada palavra tem de ser verdade"] }
          ],
          tryIt: "Tarefa final: faça o seu Plano de Certificação de uma página com os seus cargos, a certificação que escolheu, a página do VA que verificou, o seu plano de estudo feito com IA e a linha do currículo que vai acrescentar quando passar.",
          youCanNow: "planear, financiar, estudar e mostrar uma certificação que combina com a sua experiência militar.",
          quickCheck: [
            { objective: "O6", q: "O que vai na secção Certificações do seu currículo?", options: ["Só a sigla", "A sua nota no exame", "O nome completo, a entidade certificadora e o ano", "O preço que pagou"], answer: 2, why: "Os empregadores precisam do nome completo, de quem a deu e de quando." },
            { objective: "O6", q: "O seu exame é em março e ainda não passou. Como a escreve?", options: ["Escreve que passou", "\"[Nome], em curso, data do exame março de 2027\"", "Não diz que está a estudar", "Escreve \"quase certificado\""], answer: 1, why: "Escrever \"em curso\" com a data do exame é honesto e mostra o seu plano." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Obter a certificação",
        questions: [
          { objective: "O4", q: "O que deve dar a um assistente de IA para fazer um bom plano de estudo?", options: ["O seu número da Segurança Social", "Os dados do seu banco", "Só o nome da certificação", "Os temas do exame, as suas semanas e as suas horas por semana"], answer: 3, why: "Os temas e o seu tempo dão à IA o que precisa para planear." },
          { objective: "O4", q: "O que é o programa de um exame?", options: ["A lista oficial dos temas que o exame cobre", "Uma lista de respostas", "Um teste de prática", "Um anúncio de emprego"], answer: 0, why: "A entidade certificadora publica-o para você saber o que estudar." },
          { objective: "O5", q: "A explicação da IA não é igual ao guia de estudo oficial. O que faz?", options: ["Confia na IA", "Salta o tema", "Confia no guia de estudo oficial", "Pede à IA para discutir"], answer: 2, why: "O material oficial é a base que o exame usa." },
          { objective: "O5", q: "Alguém lhe oferece um \"brain dump\" de perguntas reais do exame. O que deve fazer?", options: ["Usá-lo na noite antes do exame", "Partilhá-lo com amigos", "Pagar mais por um mais recente", "Recusá-lo: vai contra as regras e pode fazer você perder a certificação"], answer: 3, why: "Os brain dumps vão contra as regras das certificações." },
          { objective: "O6", q: "Que linha de currículo liga melhor uma certificação ao seu serviço?", options: ["\"Sou certificado.\"", "\"Bom com computadores.\"", "\"Geri o acesso à rede de 300 utilizadores como especialista de informática do Exército; obtive [certificação] em 2026.\"", "\"Ver anexo.\""], answer: 2, why: "Mostra a competência em ação e também a prova." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Certificações com IA para Veteranos",
    questions: [
      { objective: "O1", q: "Porque traduzir o seu cargo militar em cargos civis?", options: ["Para esconder o seu serviço", "Para os empregadores entenderem as suas competências", "Porque os códigos são secretos", "Para o currículo ficar mais comprido"], answer: 1, why: "Os cargos civis usam palavras que os empregadores conhecem." },
      { objective: "O1", q: "No My Next Move for Veterans você pode:", options: ["Escrever o seu cargo militar e ver carreiras civis parecidas", "Pedir o apoio de incapacidade do VA", "Comprar vales de exame", "Descarregar o seu DD-214"], answer: 0, why: "Liga os cargos militares a carreiras civis." },
      { objective: "O1", q: "O que NÃO deve colar num assistente de IA quando traduz as suas funções?", options: ["O nome do seu cargo", "As funções gerais", "Detalhes classificados ou informação da unidade", "A palavra \"liderança\""], answer: 2, why: "Os detalhes classificados e da unidade têm de ficar privados." },
      { objective: "O2", q: "Uma certificação é:", options: ["A prova, dada por uma organização de fora, de que passou num exame de competência", "Um curso universitário", "Um posto militar", "Uma oferta de emprego"], answer: 0, why: "Prova que passou num exame de competência." },
      { objective: "O2", q: "O melhor primeiro guia para saber que certificação tirar é:", options: ["O exame mais longo", "O exame mais barato", "Um vídeo qualquer", "Anúncios de emprego reais para o trabalho que procura"], answer: 3, why: "Os empregadores escrevem nos anúncios o que querem." },
      { objective: "O2", q: "O que quer dizer COOL?", options: ["Civilian Office of Online Learning", "Credentialing Opportunities On-Line", "Certified Officer Operations List", "Career Options Over Lunch"], answer: 1, why: "O COOL liga os cargos militares a certificações civis." },
      { objective: "O2", q: "Onde deve confirmar o preço e as regras atuais do exame?", options: ["Numa conversa com a IA", "No site da entidade certificadora", "Na memória de um amigo", "Num comentário nas redes sociais"], answer: 1, why: "A entidade certificadora tem os detalhes atuais." },
      { objective: "O3", q: "Segundo o va.gov em outubro de 2026, o reembolso das taxas de exame pelo VA tem um limite de:", options: ["$200 por exame", "$20,000 por ano", "Sem limite", "$2,000 por exame"], answer: 3, why: "A página dizia no máximo $2,000 por exame." },
      { objective: "O3", q: "Quando o VA devolve uma taxa de exame, o que acontece ao seu GI Bill?", options: ["O valor é tirado do seu direito", "Nada", "Duplica", "Acaba"], answer: 0, why: "O VA desconta do seu direito o valor devolvido." },
      { objective: "O3", q: "Que formulário envia para pedir ao VA que devolva uma taxa de exame?", options: ["W-2", "DD-214", "VA Form 22-0803", "SF-86"], answer: 2, why: "O va.gov indica o VA Form 22-0803 para o reembolso das taxas de exame." },
      { objective: "O3", q: "O reembolso das taxas de exame pelo VA cobre:", options: ["A taxa do documento do certificado", "Os lanches de estudo", "A viagem até ao exame", "As taxas de exame, incluindo as de inscrição e administrativas"], answer: 3, why: "Cobre as taxas de exame, não o próprio certificado." },
      { objective: "O3", q: "A melhor descrição do VET TEC 2.0 é:", options: ["Um pedido de incapacidade", "Um empréstimo para casa", "Um programa do VA de formação em alta tecnologia com vagas limitadas", "Um posto militar"], answer: 2, why: "Paga formação em alta tecnologia que não é universitária, com um limite por ano." },
      { objective: "O3", q: "Os valores dos apoios podem mudar. Antes de gastar dinheiro deve:", options: ["Confiar num blog antigo", "Verificar a página oficial do va.gov", "Perguntar só à IA", "Adivinhar"], answer: 1, why: "A página oficial tem as regras atuais." },
      { objective: "O4", q: "A primeira coisa a juntar para um plano de estudo com IA é:", options: ["O programa oficial do exame", "Um brain dump", "A sua palavra-passe", "As notas de outra pessoa"], answer: 0, why: "O programa mostra o que o exame cobre." },
      { objective: "O4", q: "Um bom plano de estudo inclui:", options: ["Só a data do exame", "Estudar tudo na noite anterior", "Um objetivo para cada semana, uma semana de revisão e um teste de prática", "Nenhum calendário"], answer: 2, why: "Os objetivos semanais e a revisão deixam você preparado." },
      { objective: "O5", q: "Que pedido é melhor para praticar?", options: ["\"Faça-me 5 perguntas sobre este tema, uma de cada vez.\"", "\"Dê-me as respostas reais do exame.\"", "\"Passe no exame por mim.\"", "\"Conte-me uma piada.\""], answer: 0, why: "Faz você praticar e espera pela sua resposta." },
      { objective: "O5", q: "Porque evitar os brain dumps?", options: ["São longos demais", "São aborrecidos", "São gratuitos", "Vão contra as regras e podem fazer você perder a certificação"], answer: 3, why: "As entidades certificadoras proíbem-nos." },
      { objective: "O5", q: "Errou uma pergunta de prática. Um bom passo a seguir é:", options: ["Deixar de estudar", "Pedir à IA para explicar de forma simples e verificar no guia oficial", "Saltar o tema inteiro", "Mudar a data do exame para amanhã"], answer: 1, why: "Entender o erro corrige o ponto fraco." },
      { objective: "O6", q: "A secção Certificações do seu currículo deve mostrar:", options: ["Só um logótipo", "O nome completo, a entidade certificadora e o ano", "A folha com a sua nota", "As suas horas de estudo"], answer: 1, why: "O nome completo, a entidade e o ano são o que os empregadores verificam." },
      { objective: "O6", q: "Ainda não passou. Como pode escrever a certificação?", options: ["Dizer que passou", "Escrever outra diferente", "Deixar uma linha em branco", "\"[Nome], em curso, data do exame [mês ano]\""], answer: 3, why: "\"Em curso\" com uma data é honesto e útil." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 4, 6, 8, 12, 13, 16, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Cargos civis", objective: "O1", notYet: "Nenhum cargo civil, ou cargos que não combinam com o cargo militar.", meets: "O cargo militar e dois cargos civis que combinam com ele.", exceeds: "Os cargos aparecem tanto no My Next Move for Veterans como na descrição da IA." },
      { name: "Certificação escolhida", objective: "O2", notYet: "A certificação foi adivinhada ou escolhida a partir de um anúncio publicitário.", meets: "A certificação que aparece mais em pelo menos cinco anúncios de emprego reais.", exceeds: "Mostra a contagem e a página da entidade certificadora verificada para as regras atuais." },
      { name: "Pagamento do VA verificado", objective: "O3", notYet: "Nenhuma verificação no VA, ou informação só de um fórum ou da IA.", meets: "Se o VA pode pagar a taxa do exame, com a página oficial do va.gov indicada.", exceeds: "Também indica o formulário e que o reembolso gasta direito." },
      { name: "Plano de estudo", objective: "O4", notYet: "Nenhum plano, ou um plano sem semanas ou sem temas.", meets: "Um plano semana a semana a partir do programa oficial do exame, com uma semana de revisão e um teste de prática.", exceeds: "O plano cabe nas horas reais do aluno e tem uma data de exame marcada." },
      { name: "Linha do currículo", objective: "O6", notYet: "Nenhuma linha no currículo, ou uma que diz ter uma certificação ainda não obtida.", meets: "Uma linha de currículo verdadeira com o nome completo, a entidade e o ano ou a data do exame, ligada ao serviço.", exceeds: "Inclui uma pequena história de um resultado no serviço que a certificação confirma." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem no exame de certificação em 60 dias (inquérito de seguimento)",
      "Alunos que passam na certificação em 6 meses",
      "Alunos que se candidatam a um trabalho que pede a certificação em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou smartphone com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Os sites gratuitos My Next Move for Veterans, va.gov e das entidades certificadoras, e cinco anúncios de emprego reais",
      "Papel ou um documento para o Plano de Certificação de uma página",
      "Cerca de 60 minutos no total para o curso; o plano de estudo continua depois"
    ],
    facilitatorNotes: [
      "Agrupe os alunos por área (informática, logística, manutenção, saúde) para poderem partilhar anúncios de emprego e programas de exame.",
      "Peça aos alunos para confirmarem cada valor e formulário no va.gov durante a sessão, em vez de confiarem em notas ou na IA.",
      "Avise com clareza contra os brain dumps; podem fazer os alunos perder a certificação.",
      "Avalie o Plano de Certificação com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Marque um ponto de situação aos 30 dias para os alunos contarem o progresso no estudo e a data do exame."
    ]
  }
};
