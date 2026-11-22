"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-ai-entrepreneurship.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-ai-entrepreneurship-pt",
  lang: "pt",
  translationOf: "athletes-ai-entrepreneurship",
  category: "Athletes",
  name: "Empreendedorismo com IA para Atletas",
  skills: "Encontrar uma ideia de negócio no seu desporto, Testar uma ideia com pessoas reais, Escrever um plano de negócio de uma página com IA, Fazer um orçamento inicial simples, Conhecer as regras: NIL, marcas registadas, registos e impostos",
  outcome: "transformar uma ideia do seu desporto numa ideia de negócio testada: falar com cinco possíveis clientes, escrever com IA um plano de negócio de uma página e um orçamento inicial, e fazer a lista das regras que tem de verificar antes de começar.",
  about: [
    "Este curso é para atletas e treinadores que têm uma ideia de negócio, ou que querem ter uma: um negócio de treinos, uma ideia de aplicação, um produto que resolve um problema que viu no desporto ou um serviço para equipas locais.",
    "Os empreendedores resolvem problemas pelos quais as pessoas estão dispostas a pagar. Você vai encontrar um problema real, testar se as pessoas querem a sua solução antes de gastar dinheiro e usar a IA para escrever um plano de uma página e um orçamento.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Isto é educação geral; para perguntas sobre leis, impostos e NIL, verifique nas fontes oficiais e fale com o gabinete de conformidade da sua escola, um pai, mãe ou tutor e um profissional."
  ],
  finalTask: "Escreva um plano de negócio de uma página para uma ideia do seu desporto: o problema, a sua solução, o seu cliente, o que cinco pessoas reais lhe disseram, como vai chegar aos clientes, um orçamento inicial feito numa folha de cálculo e uma lista de regras (NIL, pesquisa de marcas registadas, registos e impostos) com o nome de quem consultou.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas e treinadores do ensino secundário, da universidade e do início de carreira que têm uma ideia de negócio, ou querem ter uma: um negócio de treinos, uma ideia de aplicação, um produto para um problema visto no desporto ou um serviço para equipas locais.",
    startingPoint: "Conhecem bem o seu desporto e veem os seus problemas de perto, e usam um smartphone e talvez uma folha de cálculo. Poucos já entrevistaram clientes, testaram uma ideia com pouco dinheiro, escreveram um plano de negócio ou um orçamento, ou verificaram as regras de NIL, marcas registadas, licenças e impostos.",
    gap: "Muitas vezes os atletas constroem ou compram antes de verificar se alguém quer a ideia, ou começam sem verificar as regras, e perdem dinheiro ou o direito de competir. Testar com clientes reais, um plano de uma página, um orçamento real e uma lista de regras dão-lhes um começo seguro e barato.",
    constraints: [
      "Linguagem simples, com um nível de leitura de cerca do 8.º ano",
      "Um telefone ou computador com um assistente de IA gratuito e o Google Sheets",
      "Cerca de 60 minutos de lições, mais tempo para falar com cinco pessoas",
      "Regras de NIL, marcas registadas, licenças comerciais e impostos; verifique com o gabinete de conformidade, a associação desportiva do estado ou o governo local",
      "Não é aconselhamento financeiro nem fiscal; atletas com menos de 18 anos precisam de um pai, mãe ou tutor para contas, contratos e qualquer empréstimo"
    ],
    prerequisites: "Nenhum. \"Plataformas de Comércio Eletrónico com IA para Atletas\" é um bom passo seguinte para vender pela internet."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com problemas que viu no seu desporto", action: "fazer a lista dos problemas e classificá-los por quantas pessoas os têm, quanto incomodam e se as pessoas já pagam por uma solução, e depois escolher um", standard: "sendo o problema escolhido um que você já viu na vida real" },
    { id: "O2", condition: "Com cinco pessoas que têm o problema", action: "entrevistá-las sobre o que fizeram no passado e anotar o que dizem", standard: "sem perguntas do tipo \"Compraria?\" e com os padrões das cinco entrevistas anotados" },
    { id: "O3", condition: "Usando o que os clientes lhe disseram", action: "escrever uma solução numa frase e escolher o teste mais simples que pode fazer em duas semanas", standard: "com um número que mostre se o teste funcionou" },
    { id: "O4", condition: "Usando as suas notas e um assistente de IA", action: "escrever um plano de negócio de uma página com problema, solução, cliente, o que os clientes disseram, como chegar a eles, dinheiro e próximos passos", standard: "com os números inventados retirados ou marcados como palpites e com a opinião de um mentor" },
    { id: "O5", condition: "Usando o Google Sheets", action: "fazer um orçamento inicial com custos, receitas esperadas, totais e lucro", standard: "com preços reais de fornecedores, fórmulas verificadas e revisto com um adulto de confiança antes de gastar" },
    { id: "O6", condition: "Antes de começar o negócio", action: "escrever uma lista de regras sobre NIL, nomes e logótipos, licença comercial, registos e impostos", standard: "com uma pesquisa no USPTO feita e o nome da pessoa com quem verificou cada regra" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar e testar uma ideia",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar um problema que vale a pena resolver",
          minutes: 5,
          goal: "Fazer a lista dos problemas que viu no desporto e escolher um que vale a pena resolver.",
          text: [
            "As boas ideias de negócio começam com um problema, não com um produto. Os atletas veem muitos problemas de perto: pais que não encontram bons treinos para principiantes, equipas que perdem equipamento, jogadores que não podem pagar treinos de qualidade, treinadores afogados em horários.",
            "Escreva os problemas de que você, os seus colegas de equipa, os pais ou os treinadores se queixam. Para cada um, pergunte: Quantas pessoas têm este problema? Quanto incomoda? Já estão a pagar por uma solução má?",
            "Use um assistente de IA para ter mais ideias: \"Sou jogador de voleibol do ensino secundário. Faça uma lista de 15 problemas que os jogadores, os pais e os treinadores têm e que um pequeno negócio podia resolver.\" Depois marque com um círculo os que já viu de verdade."
          ],
          steps: ["Escreva os problemas que viu no seu desporto.", "Peça à IA mais ideias.", "Marque com um círculo os que viu na vida real.", "Classifique cada um: quantas pessoas, quanto incomoda, já pagam?", "Escolha um."],
          words: [["Empreendedor", "alguém que começa um negócio para resolver um problema."], ["Ponto de dor", "um problema que incomoda tanto as pessoas que elas querem que seja resolvido."]],
          slides: [
            { title: "Comece com um problema", bullets: ["Não com um produto", "Os atletas veem os problemas de perto"] },
            { title: "Classifique cada problema", bullets: ["Quantas pessoas o têm?", "Quanto incomoda?", "Já pagam por uma solução má?"] },
            { title: "A IA dá ideias, você escolhe", bullets: ["Peça 15 problemas", "Marque os que já viu"] }
          ],
          tryIt: "Faça a lista de cinco problemas do seu desporto, acrescente mais com a IA, classifique-os e escolha aquele em que vai trabalhar.",
          youCanNow: "encontrar e escolher um problema real que vale a pena resolver.",
          quickCheck: [
            { objective: "O1", q: "Qual é um sinal de um problema que vale a pena resolver?", options: ["Só você o tem", "As pessoas já pagam por uma solução má", "É divertido falar dele", "Ninguém se queixa dele"], answer: 1, why: "Se as pessoas já pagam por uma solução má, o problema é importante para elas." },
            { objective: "O1", q: "A IA faz uma lista de 15 problemas do seu desporto. O que faz?", options: ["Escolhe o mais emocionante", "Constrói os 15", "Marca os que já viu de verdade", "Pede à IA para escolher por você"], answer: 2, why: "Fique com os problemas que viu na vida real." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Falar com clientes reais",
          minutes: 6,
          goal: "Entrevistar cinco possíveis clientes sobre o problema antes de construir qualquer coisa.",
          text: [
            "Antes de gastar dinheiro, fale com as pessoas que têm o problema. O seu objetivo é aprender, não vender. Pergunte o que fizeram no passado, não o que talvez façam um dia.",
            "Boas perguntas: \"Conte-me a última vez que isto aconteceu.\" \"O que fez para resolver?\" \"Quanto lhe custou?\" \"O que o incomoda nas opções que tem?\" Evite \"Compraria a minha ideia?\", porque as pessoas dizem que sim para serem simpáticas.",
            "Fale com cinco pessoas. Escreva o que dizem com as palavras delas. Se a maioria não se importar, é uma ótima notícia: poupou tempo e dinheiro. Escolha um problema novo ou faça ajustes."
          ],
          steps: ["Faça a lista de cinco pessoas que têm o problema.", "Pergunte pela última vez que aconteceu.", "Pergunte o que fizeram e quanto custou.", "Escreva as palavras delas.", "Procure padrões nas cinco conversas."],
          words: [["Entrevista com o cliente", "uma conversa curta para conhecer o problema de alguém."], ["Validar", "verificar que um problema e uma solução são reais antes de construir."]],
          slides: [
            { title: "Aprenda, não venda", bullets: ["Fale com pessoas que têm o problema", "Antes de gastar dinheiro"] },
            { title: "Boas perguntas", bullets: ["\"Conte-me a última vez que...\"", "\"O que fez? Quanto custou?\"", "Não: \"Compraria a minha ideia?\""] },
            { title: "Depois de cinco conversas", bullets: ["Escreva as palavras delas", "Procure padrões", "Sem interesse? Poupou dinheiro"] }
          ],
          tryIt: "Peça a um assistente de IA para o ajudar a escrever cinco perguntas sobre o que as pessoas fizeram no passado. Entreviste pelo menos duas pessoas esta semana e anote o que disseram.",
          youCanNow: "entrevistar possíveis clientes para testar se um problema é real.",
          quickCheck: [
            { objective: "O2", q: "Qual é o seu objetivo numa entrevista com um cliente?", options: ["Aprender", "Vender", "Conseguir uma promessa de compra", "Exibir a sua ideia"], answer: 0, why: "Fale para aprender sobre o problema, não para vender." },
            { objective: "O2", q: "Uma mãe diz: \"Um dia comprava isso de certeza.\" O que pergunta a seguir?", options: ["\"Ótimo, posso pôr o seu nome na lista?\"", "\"Quanto pagaria?\"", "\"Os seus amigos também comprariam?\"", "\"Conte-me a última vez que este problema aconteceu.\""], answer: 3, why: "Pergunte pelo que fizeram no passado, porque as pessoas dizem que sim para serem simpáticas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dar forma à sua solução e à sua oferta",
          minutes: 5,
          goal: "Escrever uma solução numa frase e a versão mais simples que podia testar.",
          text: [
            "Agora descreva a sua solução numa frase: \"Sessões de basquetebol para principiantes ao sábado, para crianças dos 6 aos 9 anos, dadas por jogadores da equipa principal do ensino secundário, a um preço que os pais podem pagar.\"",
            "Comece com o teste mais simples que pode fazer, às vezes chamado produto mínimo viável: uma sessão em vez de uma academia completa, um formulário de inscrição em vez de uma aplicação, dez camisolas em vez de 500.",
            "A IA pode ajudá-lo a pensar na versão mais simples: \"Esta é a minha ideia e o que cinco clientes me disseram. Qual é a forma mais pequena e barata de a testar em duas semanas?\" Depois escolha o que consegue mesmo fazer."
          ],
          steps: ["Escreva a sua solução numa frase.", "Peça à IA o teste mais pequeno que podia fazer.", "Escolha um teste que consegue fazer em duas semanas.", "Decida como vai saber que funcionou (por exemplo, 8 inscrições)."],
          words: [["Produto mínimo viável (MVP)", "a versão mais simples da sua ideia que lhe deixa testá-la com clientes reais."], ["Oferta", "exatamente o que os clientes recebem e quanto custa."]],
          slides: [
            { title: "Solução numa frase", bullets: ["Para quem é", "O que recebem", "Porque é melhor"] },
            { title: "Teste primeiro em pequeno", bullets: ["Uma sessão, não uma academia", "Um formulário, não uma aplicação", "10 camisolas, não 500"] },
            { title: "Defina o sucesso", bullets: ["O teste mais pequeno, em duas semanas", "Um número que quer dizer que funcionou"] }
          ],
          tryIt: "Escreva a sua solução numa frase. Use a IA para encontrar o teste mais pequeno de duas semanas e escreva o número que quer dizer que funcionou.",
          youCanNow: "descrever a sua solução e planear um teste pequeno e barato.",
          quickCheck: [
            { objective: "O3", q: "O que é um produto mínimo viável?", options: ["A sua versão mais cara", "Uma aplicação completa", "A versão mais simples que lhe deixa testar com clientes reais", "Um plano de negócio longo"], answer: 2, why: "Um MVP é o teste mais pequeno que pode fazer com clientes reais." },
            { objective: "O3", q: "Quer abrir uma academia de treino. Qual é o melhor primeiro teste?", options: ["Alugar um edifício por um ano", "Fazer uma sessão com um formulário de inscrição", "Construir uma aplicação própria", "Imprimir 500 camisolas"], answer: 1, why: "Comece com o teste mais simples que pode fazer em duas semanas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar e testar uma ideia",
        questions: [
          { objective: "O1", q: "As boas ideias de negócio começam com:", options: ["Um logótipo bonito", "Um grande empréstimo", "Um problema que as pessoas têm", "Uma aplicação cara"], answer: 2, why: "As pessoas pagam para resolver problemas reais." },
          { objective: "O2", q: "Qual é a melhor pergunta para uma entrevista?", options: ["\"Conte-me a última vez que isto aconteceu.\"", "\"Compraria a minha ideia?\"", "\"A minha ideia não é ótima?\"", "\"Quanto pagaria um dia?\""], answer: 0, why: "O que as pessoas fizeram no passado é mais honesto do que previsões." },
          { objective: "O2", q: "A maioria das pessoas que entrevistou não se importa com o problema. Isto quer dizer:", options: ["Falhou", "Construa mesmo assim", "Entreviste-as até concordarem", "Poupou tempo e dinheiro; ajuste ou escolha um problema novo"], answer: 3, why: "Aprender cedo é uma vitória." },
          { objective: "O3", q: "Um MVP é:", options: ["O melhor jogador do jogo", "A versão mais simples que lhe deixa testar com clientes reais", "Um grande lançamento", "Uma marca registada"], answer: 1, why: "Nos negócios, MVP quer dizer produto mínimo viável." },
          { objective: "O3", q: "Qual é o melhor primeiro teste para uma ideia de campo de férias desportivo?", options: ["Alugar um estádio por um mês", "Uma sessão num sábado com um formulário de inscrição", "Construir uma aplicação", "Imprimir 500 camisolas"], answer: 1, why: "Os testes pequenos são baratos e rápidos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Plano, orçamento e regras",
      lessons: [
        {
          objectives: ["O4"],
          title: "Um plano de negócio de uma página com IA",
          minutes: 5,
          goal: "Escrever um plano de negócio de uma página com a ajuda da IA.",
          text: [
            "Um plano de uma página ajuda-o a manter o foco. Secções: Problema, Solução, Cliente, O que os clientes me disseram, Como vou chegar a eles, Dinheiro (custos e preço), Próximos passos.",
            "Dê a um assistente de IA as suas notas e os resultados das entrevistas e peça: \"Transforme estas notas num plano de negócio de uma página com estas secções. Use palavras simples. Marque tudo o que for um palpite.\"",
            "Leia com atenção. A IA pode fazer a sua ideia parecer maior do que é ou inventar números. Fique só com o que é verdade ou está claramente marcado como palpite, e mostre o plano a um mentor, treinador ou professor para ter a opinião dele."
          ],
          steps: ["Junte o seu problema, a sua solução e as notas das entrevistas.", "Peça à IA um plano de uma página com secções definidas.", "Retire os números inventados ou marque-os como palpites.", "Mostre a um mentor para ter a opinião dele."],
          words: [["Plano de negócio", "um resumo escrito de como um negócio vai funcionar e ganhar dinheiro."], ["Mentor", "uma pessoa com experiência que lhe dá conselhos."]],
          slides: [
            { title: "Secções do plano de uma página", bullets: ["Problema, Solução, Cliente", "O que os clientes me disseram", "Como vou chegar a eles, Dinheiro, Próximos passos"] },
            { title: "A IA faz o rascunho", bullets: ["A partir das suas notas e entrevistas", "\"Marque tudo o que for um palpite\""] },
            { title: "Você verifica", bullets: ["Nada de números inventados", "Mostre a um mentor"] }
          ],
          tryIt: "Use a IA para transformar as suas notas num plano de uma página. Marque cada palpite e depois peça a um mentor, treinador ou professor uma opinião.",
          youCanNow: "escrever um plano de negócio de uma página com IA e verificar se está correto.",
          quickCheck: [
            { objective: "O4", q: "Que secção faz parte do seu plano de uma página?", options: ["O que os clientes me disseram", "Os seus atletas preferidos", "A história completa da sua vida", "O seu horário de treinos"], answer: 0, why: "O plano inclui o que as suas cinco entrevistas mostraram." },
            { objective: "O4", q: "O plano da IA diz 500 clientes no primeiro mês, mas você não tem provas. O que faz?", options: ["Deixa para impressionar as pessoas", "Duplica o número", "Põe no topo", "Retira ou marca como palpite"], answer: 3, why: "Fique só com o que é verdade ou está claramente marcado como palpite." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer um orçamento inicial",
          minutes: 5,
          goal: "Fazer um orçamento inicial simples numa folha de cálculo.",
          text: [
            "Um orçamento inicial mostra o que precisa de gastar antes e durante o seu primeiro teste, e o que espera ganhar. Mantenha-o pequeno no início.",
            "No Google Sheets, faça a lista dos custos (equipamento, espaço, taxas do site ou da plataforma, impressão, seguro se for preciso, publicidade) e das receitas esperadas (preço vezes clientes esperados). Procure preços reais dos fornecedores, não palpites.",
            "Peça à IA para preparar as fórmulas dos totais e do lucro, e verifique-as você mesmo. Nunca peça dinheiro emprestado nem use um cartão de crédito para um teste de negócio sem falar com um pai, mãe, tutor ou conselheiro de confiança. Isto não é aconselhamento financeiro."
          ],
          steps: ["Faça a lista de todos os custos iniciais.", "Procure os preços reais.", "Calcule as receitas: preço vezes clientes.", "Acrescente totais e lucro com fórmulas.", "Reveja com um adulto de confiança antes de gastar."],
          words: [["Orçamento inicial", "um plano do dinheiro preciso para começar e do que espera ganhar."], ["Despesa", "dinheiro que gasta para fazer funcionar o negócio."]],
          slides: [
            { title: "Custos", bullets: ["Equipamento e espaço", "Taxas da plataforma ou do site", "Impressão, seguro, publicidade"] },
            { title: "Receitas", bullets: ["Preço x clientes esperados", "Use preços reais, não palpites"] },
            { title: "Tenha cuidado", bullets: ["A IA prepara as fórmulas; você verifica", "Nada de empréstimos sem um adulto de confiança"] }
          ],
          tryIt: "Faça no Google Sheets um orçamento inicial para o seu teste de duas semanas, com preços reais. Peça à IA para escrever as fórmulas do total e do lucro e verifique-as.",
          youCanNow: "fazer um orçamento inicial simples com números reais.",
          quickCheck: [
            { objective: "O5", q: "Como calcula as receitas esperadas?", options: ["Preço vezes clientes esperados", "Custos menos preço", "Seguidores vezes gostos", "Adivinha um número redondo"], answer: 0, why: "As receitas esperadas são o preço vezes os clientes esperados." },
            { objective: "O5", q: "O seu orçamento mostra que precisa de comprar equipamento. O que faz antes de gastar?", options: ["Paga com um cartão de crédito", "Pede emprestado a um amigo", "Revê o orçamento com um pai, mãe, tutor ou conselheiro de confiança", "Compra já a opção mais barata na internet"], answer: 2, why: "Fale com um adulto de confiança antes de pedir emprestado ou gastar num teste." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Regras que todo o atleta empreendedor verifica",
          minutes: 6,
          goal: "Escrever uma lista de regras para o seu negócio.",
          text: [
            "NIL (nome, imagem e semelhança): se o seu negócio usa o seu nome, a sua imagem ou a sua semelhança, pode contar como atividade NIL. Os atletas universitários podem ter de a comunicar; no momento em que isto foi escrito, os atletas da Divisão I comunicam os acordos com terceiros que contam através do NIL Go. No ensino secundário, as regras mudam de estado para estado. Pergunte ao gabinete de conformidade ou à associação desportiva do seu estado.",
            "Nomes e logótipos: não use logótipos da escola, da equipa ou da liga sem autorização. Antes de escolher o nome do negócio, pesquise nos registos de marcas do USPTO (o serviço de patentes e marcas dos EUA) e nos registos de nomes comerciais do seu estado. A sua cidade ou o seu estado podem exigir uma licença comercial; veja o site do seu governo local.",
            "Registos e impostos: guarde todos os recibos e pagamentos numa folha de cálculo. O IRS (o serviço de impostos dos EUA) diz que tem de entregar uma declaração de impostos se os seus ganhos líquidos por conta própria forem de $400 ou mais. Fale com um profissional de impostos. Se tiver menos de 18 anos, um pai, mãe ou tutor vai ter de ajudar com contas e contratos."
          ],
          steps: ["Pergunte ao gabinete de conformidade ou à associação do seu estado sobre as regras de NIL.", "Confirme que usa só o seu próprio logótipo e nome.", "Pesquise no USPTO e nos registos de nomes do estado.", "Verifique as regras locais de licença comercial.", "Prepare uma folha de recibos e pagamentos.", "Fale com um profissional de impostos."],
          words: [["Licença comercial", "autorização de uma cidade, condado ou estado para ter um negócio nesse lugar."], ["Trabalho por conta própria", "ganhar dinheiro com o seu próprio negócio em vez de trabalhar para um patrão."]],
          slides: [
            { title: "NIL", bullets: ["Um negócio com o seu nome pode ser NIL", "Universidade: pode ter de comunicar", "Ensino secundário: veja as regras do seu estado"] },
            { title: "Nomes, logótipos, licenças", bullets: ["Nada de logótipos da escola ou da liga sem autorização", "Pesquise no USPTO e nos registos de nomes do estado", "Verifique as regras locais de licença"] },
            { title: "Registos e impostos", bullets: ["Guarde todos os recibos", "IRS: declare se os ganhos líquidos por conta própria forem $400+", "Fale com um profissional de impostos"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness (nome, imagem e semelhança)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Trademark basics (noções básicas de marcas)", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: Self-Employed Individuals Tax Center (impostos para quem trabalha por conta própria)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Tarefa final: termine o seu plano de uma página com o orçamento e depois escreva a sua lista de regras com o nome de quem consultou sobre NIL, o resultado da pesquisa de marcas, a verificação da licença local e a sua folha de registos.",
          youCanNow: "verificar as regras principais antes de começar um negócio como atleta.",
          quickCheck: [
            { objective: "O6", q: "Onde verifica se a sua cidade exige uma licença comercial?", options: ["Nas redes sociais", "No site do seu governo local", "Num chatbot de IA", "No grupo de conversa do seu treinador"], answer: 1, why: "A sua cidade ou o seu estado podem exigir uma licença; veja o site do seu governo local." },
            { objective: "O6", q: "Escolheu um nome para o negócio. O que verifica antes de o usar?", options: ["Se rima", "Se os seus amigos gostam", "Se tem uma mascote", "Os registos de marcas do USPTO e os registos de nomes comerciais do seu estado"], answer: 3, why: "Pesquise nos registos de marcas e de nomes comerciais do estado antes de escolher um nome." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Plano, orçamento e regras",
        questions: [
          { objective: "O4", q: "A IA acrescenta \"$1 milhão no primeiro ano\" ao seu plano sem nenhuma base. Você:", options: ["Deixa ficar", "Muda para $2 milhões", "Mostra a investidores", "Retira ou marca como palpite"], answer: 3, why: "Fique só com números verdadeiros ou palpites claramente marcados." },
          { objective: "O5", q: "As receitas esperadas são iguais a:", options: ["Preço vezes clientes esperados", "Custos vezes dois", "Seguidores vezes gostos", "Um palpite"], answer: 0, why: "Esse é o cálculo básico das receitas." },
          { objective: "O5", q: "Antes de pedir dinheiro emprestado para um teste de negócio, deve:", options: ["Usar depressa um cartão de crédito", "Perguntar a um desconhecido na internet", "Falar com um pai, mãe, tutor ou conselheiro de confiança", "Saltar o orçamento"], answer: 2, why: "As dívidas são arriscadas; peça conselho primeiro." },
          { objective: "O6", q: "Porque pesquisar nos registos do USPTO?", options: ["Para ter clientes", "Para encontrar um treinador", "Para pagar impostos", "Para não usar um nome que pertence a outra pessoa"], answer: 3, why: "As pesquisas de marcas evitam conflitos." },
          { objective: "O6", q: "O limite do IRS a partir do qual quem trabalha por conta própria tem de declarar os ganhos líquidos é:", options: ["$40,000", "$400", "$4", "Não há limite"], answer: 1, why: "Isso está na página do IRS para quem trabalha por conta própria." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Empreendedorismo com IA para Atletas",
    questions: [
      { objective: "O1", q: "Um empreendedor:", options: ["Só pratica desporto", "Só investe dinheiro", "Começa um negócio para resolver um problema", "Trabalha para uma equipa"], answer: 2, why: "Resolver problemas é o mais importante." },
      { objective: "O1", q: "Um ponto de dor é:", options: ["Um problema que incomoda tanto as pessoas que querem que seja resolvido", "Uma lesão", "Um marcador de resultados", "Uma penalização"], answer: 0, why: "Os pontos de dor são oportunidades de negócio." },
      { objective: "O1", q: "Quando classifica um problema, pergunte:", options: ["Quantas pessoas o têm e quanto incomoda", "De que cor é", "Quem é famoso", "Quantos gostos recebe"], answer: 0, why: "O tamanho e o incómodo mostram se vale a pena resolvê-lo." },
      { objective: "O1", q: "A IA dá-lhe ideias de 15 problemas. Você:", options: ["Escolhe o primeiro", "Usa os 15", "Marca os que viu na vida real", "Ignora-os"], answer: 2, why: "A experiência real vale mais do que palpites." },
      { objective: "O2", q: "As entrevistas com clientes servem para:", options: ["Vender com força", "Aprender", "Discutir", "Ganhar seguidores"], answer: 1, why: "Aprenda antes de construir." },
      { objective: "O2", q: "Porque evitar \"Compraria a minha ideia?\"", options: ["É falta de educação", "É ilegal", "É curta demais", "As pessoas dizem que sim para serem simpáticas"], answer: 3, why: "O que as pessoas fizeram no passado é mais honesto." },
      { objective: "O2", q: "Quantas pessoas deve entrevistar no mínimo?", options: ["Uma", "Nenhuma", "Cinco", "500"], answer: 2, why: "Cinco mostram os primeiros padrões." },
      { objective: "O2", q: "Validar quer dizer:", options: ["Carimbar um bilhete de estacionamento", "Ganhar um jogo", "Assinar um contrato", "Verificar que um problema e uma solução são reais"], answer: 3, why: "Validar poupa tempo e dinheiro." },
      { objective: "O3", q: "Qual é um MVP para uma ideia de artigos com a sua marca?", options: ["10 camisolas vendidas a pessoas que as pediram", "500 camisolas num armazém", "Uma linha de roupa completa", "O aluguer de uma loja"], answer: 0, why: "Comece em pequeno e teste." },
      { objective: "O3", q: "Um teste precisa de:", options: ["Nenhum objetivo", "Um número que quer dizer que funcionou", "Um orçamento enorme", "Uma celebridade"], answer: 1, why: "Um objetivo claro diz-lhe se funcionou." },
      { objective: "O4", q: "Um plano de uma página inclui:", options: ["Só um logótipo", "As suas estatísticas", "Problema, solução, cliente, dinheiro, próximos passos", "A sua palavra-passe"], answer: 2, why: "Essas secções explicam como o negócio funciona." },
      { objective: "O4", q: "Peça à IA para marcar:", options: ["Tudo o que for um palpite", "Nada", "Só as boas notícias", "Os seus rivais"], answer: 0, why: "Os palpites marcados mantêm você honesto." },
      { objective: "O4", q: "Um mentor é:", options: ["Um concorrente", "Um cliente", "Um árbitro", "Uma pessoa com experiência que dá conselhos"], answer: 3, why: "Os mentores ajudam a evitar erros." },
      { objective: "O5", q: "Os preços no seu orçamento devem vir de:", options: ["Palpites", "Preços reais de fornecedores", "Memórias antigas", "Só da IA"], answer: 1, why: "Preços reais fazem orçamentos reais." },
      { objective: "O5", q: "Uma despesa é:", options: ["Dinheiro que ganha", "Dinheiro que gasta para fazer funcionar o negócio", "Um troféu", "Um seguidor"], answer: 1, why: "As despesas são custos." },
      { objective: "O6", q: "Um negócio que usa o seu nome pode contar como:", options: ["Pagamento para jogar", "Uma bolsa de estudo", "Nada", "Atividade NIL"], answer: 3, why: "Usa o seu nome, imagem ou semelhança." },
      { objective: "O6", q: "Pode usar livremente o logótipo da sua escola nos seus produtos?", options: ["Não, precisa de autorização", "Sim, sempre", "Só aos fins de semana", "Só na internet"], answer: 0, why: "As escolas protegem os seus logótipos." },
      { objective: "O6", q: "Onde verifica se precisa de uma licença comercial?", options: ["Num blogue de desporto", "Com um rival", "No site do seu governo local", "Em lado nenhum"], answer: 2, why: "As licenças são regras locais." },
      { objective: "O6", q: "Porque guardar todos os recibos?", options: ["Para decorar", "Para deitar fora mais tarde", "Não é preciso", "Para os registos e os impostos"], answer: 3, why: "Os registos ajudam com os impostos e com as decisões." },
      { objective: "O6", q: "Se tem menos de 18 anos e está a começar um negócio:", options: ["Pode assinar tudo sozinho", "Um pai, mãe ou tutor ajuda com contas e contratos", "Esconda-o", "Use uma idade falsa"], answer: 1, why: "Os menores normalmente precisam da ajuda de um adulto." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      5,
      8,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Problema e cliente",
        objective: "O1",
        notYet: "O problema é vago ou não é um que o aluno já viu.",
        meets: "Um problema real, classificado por tamanho e incómodo, com um cliente claro.",
        exceeds: "Mostra o que os clientes já pagam por uma solução má."
      },
      {
        name: "Entrevistas com clientes",
        objective: "O2",
        notYet: "Menos de cinco pessoas, ou as notas são sobre se comprariam.",
        meets: "Cinco entrevistas sobre o que fizeram no passado, escritas com as palavras dos clientes, com os padrões anotados.",
        exceeds: "O plano mudou por causa do que os clientes disseram."
      },
      {
        name: "Plano de uma página",
        objective: "O4",
        notYet: "Faltam secções, ou há números inventados sem marca.",
        meets: "As sete secções numa página, os palpites marcados e a opinião de um mentor recebida.",
        exceeds: "Inclui o teste de duas semanas e o número que vai mostrar que funcionou."
      },
      {
        name: "Orçamento inicial",
        objective: "O5",
        notYet: "Preços adivinhados ou fórmulas não verificadas.",
        meets: "Cada custo com um preço real, receitas esperadas, totais e lucro, verificados e revistos com um adulto de confiança.",
        exceeds: "Mostra quantos clientes são precisos para cobrir os custos iniciais."
      },
      {
        name: "Lista de regras",
        objective: "O6",
        notYet: "Faltam NIL, nomes, licença ou impostos, ou não há o nome de ninguém.",
        meets: "NIL, nomes e logótipos, licença, registos e impostos, cada um com o nome de quem o aluno consultou.",
        exceeds: "Estão anexados o resultado de uma pesquisa no USPTO e uma folha de recibos e pagamentos."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o plano de negócio e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que fazem o seu teste de duas semanas em 30 dias e dizem se chegou ao número (inquérito de seguimento)",
      "Alunos que começam um negócio, ou decidem não começar depois das entrevistas com clientes, poupando dinheiro",
      "Alunos que dizem ter verificado as regras de NIL, marcas, licenças e impostos antes de começar"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Uma conta Google gratuita para o Google Sheets",
      "Um caderno ou as notas do telefone para as entrevistas com clientes",
      "Cerca de 60 minutos de lições, mais tempo para cinco entrevistas curtas"
    ],
    facilitatorNotes: [
      "Pratiquem primeiro as entrevistas com clientes em pares, para que os alunos perguntem pelo que as pessoas fizeram no passado e não \"Compraria?\".",
      "Arranje mentores, como donos de negócios locais ou um centro de apoio a pequenas empresas, para darem opinião sobre os planos.",
      "Não deixe os alunos pedir dinheiro emprestado nem assinar contratos no curso; envolva os pais ou tutores de quem tem menos de 18 anos.",
      "Convide o gabinete de conformidade para as perguntas sobre NIL e encaminhe as perguntas de impostos para um profissional de impostos.",
      "Celebre as ideias que os clientes rejeitaram: descobrir cedo é um bom resultado."
    ]
  }
};
