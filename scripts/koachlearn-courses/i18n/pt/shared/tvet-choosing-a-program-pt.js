"use strict";

// Koach Learn course (Portuguese translation of shared/tvet-choosing-a-program.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "tvet-choosing-a-program-pt",
  lang: "pt",
  translationOf: "tvet-choosing-a-program",
  category: "Workforce Development",
  name: "Escolher um Programa de Formação Técnica e Profissional (TVET)",
  skills: "Escolher um ofício que combine consigo e com os empregos locais, Comparar tipos de programas, Verificar a acreditação nos registos oficiais, Fazer as perguntas certas a uma escola, Reconhecer escolas falsas e burlas de formação, Escrever um plano de decisão sobre o programa",
  outcome: "escolher um programa de formação técnica e profissional (TVET) que combine consigo e com os empregos perto de si: comparar as opções, verificar no registo oficial que a escola e o programa estão acreditados, fazer as perguntas certas à escola, evitar escolas falsas e escrever um plano de decisão com custos e datas.",
  about: [
    "Este curso é para jovens e adultos de qualquer parte do mundo que querem aprender um ofício ou uma competência técnica: eletricista, canalizador, alfaiate, soldador, mecânico de automóveis, cabeleireiro, cozinheiro, técnico de energia solar, auxiliar de enfermagem, técnico de informática e muitos mais. Usa exemplos do Quénia, da Nigéria, do Gana, do Senegal, de Marrocos, do Egito, da Índia, das Filipinas, do México, da Colômbia e dos Estados Unidos.",
    "Escolher um programa é uma decisão grande. Custa dinheiro e meses ou anos da sua vida. Alguns programas levam a bons empregos. Outros são antigos, mal equipados, não reconhecidos ou falsos. Você vai aprender a escolher um ofício que combine consigo e com o mercado de trabalho, comparar tipos de programas, verificar uma escola no registo oficial do governo, fazer perguntas difíceis à escola e reconhecer burlas.",
    "Este curso não lhe dá um certificado num ofício e não recomenda nenhuma escola. Ensina-o a escolher bem. Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\", uma pequena verificação rápida, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. No fim, você terá o seu próprio plano de decisão sobre o programa."
  ],
  finalTask: "Escreva para si um plano de decisão de uma página: o ofício que escolheu e porquê (os seus interesses e os empregos locais que encontrou), dois programas comparados lado a lado (tipo, duração, requisitos de entrada, custo total e o diploma ou certificado que recebe), a prova de que cada um está acreditado (o registo oficial que consultou e o que ele mostrou), as respostas que a escola deu às suas perguntas, os sinais de alerta que encontrou e os seus próximos passos, com datas e como vai pagar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens que terminam o ensino primário ou secundário e adultos que querem um novo ofício ou uma primeira qualificação, em África, na Ásia, na América Latina, no Médio Oriente e nos EUA. Muitos são os primeiros da família a escolher um programa de formação. Alguns falam inglês ou francês como segunda língua; o curso está traduzido em dez línguas.",
    startingPoint: "Conhecem alguns ofícios pelo nome, muitas vezes pela família ou por amigos. A maioria nunca verificou se uma escola está acreditada, nunca comparou o custo total dos programas nem viu que empregos têm procura onde vive. Muitos recebem conselhos de anúncios ou das redes sociais.",
    gap: "Os alunos precisam de escolher um programa reconhecido, que ensine competências práticas reais e leve ao trabalho, e de evitar escolas falsas e burlas que cobram propinas e dão certificados sem valor. Uma escolha cuidadosa poupa dinheiro e anos, e torna mais provável um emprego ou um negócio.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano); muitos leem numa segunda língua",
      "Aparelhos: muitas vezes um smartphone simples com poucos dados; alguns usam um cibercafé ou um computador da escola",
      "As regras mudam de país para país: cada país tem a sua autoridade de TVET e o seu registo, por isso as lições ensinam a encontrá-los e a verificá-los, não as regras de um só país",
      "Custo: os alunos podem ter pouco dinheiro; nunca pague a uma pessoa ou a um agente antes de verificar a escola",
      "Tempo: lições de 4 a 6 minutos; cerca de 60 a 75 minutos no total"
    ],
    prerequisites: "Nenhum. Quem ainda está a decidir o ofício pode fazer também o curso \"Carreiras em Ofícios Qualificados\"; quem é novo na internet pode fazer primeiro o curso \"Noções Básicas de Internet\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os seus próprios interesses e o que conseguir saber sobre os empregos onde vive", action: "listar três ofícios que combinem consigo e tenham procura no local", standard: "com pelo menos uma prova do mercado de trabalho para cada um, como anúncios de emprego ou um empregador a quem perguntou" },
    { id: "O2", condition: "Com duas ou mais opções de formação", action: "comparar programas pelo tipo, duração, requisitos de entrada, custo total e diploma ou certificado obtido", standard: "numa tabela escrita sem nenhuma casa vazia" },
    { id: "O3", condition: "Com o nome de uma escola e de um programa", action: "verificar no registo oficial da autoridade nacional de TVET que a escola e o programa estão acreditados", standard: "e anotar onde verificou e o que encontrou" },
    { id: "O4", condition: "Antes de se inscrever", action: "perguntar a uma escola sobre a prática, o equipamento, os formadores, o exame final, os resultados de emprego e o custo total", standard: "e anotar a resposta a cada pergunta" },
    { id: "O5", condition: "Com um anúncio, uma mensagem ou uma oferta de formação", action: "reconhecer os sinais de alerta de uma escola falsa ou de uma burla de formação", standard: "indicando pelo menos dois sinais quando existem e sem pagar antes de verificar" },
    { id: "O6", condition: "Usando a sua comparação e as suas verificações", action: "escrever um plano de decisão sobre o programa com a sua escolha, os custos, o financiamento e as datas", standard: "que outra pessoa consiga seguir" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar o ofício certo e o tipo de programa certo",
      lessons: [
        {
          title: "O que é a TVET e onde pode levar",
          objectives: ["O1"],
          minutes: 4,
          goal: "Dizer o nome de cinco ofícios ou profissões técnicas para os quais os programas de TVET preparam as pessoas.",
          text: [
            "TVET é a sigla inglesa de Educação e Formação Técnica e Profissional (Technical and Vocational Education and Training). A UNESCO descreve-a como educação, formação e desenvolvimento de competências para muitos tipos de trabalho e de formas de ganhar a vida. Em palavras simples: a TVET ensina-o a fazer um trabalho com as mãos, as ferramentas e o saber fazer.",
            "A TVET acontece em muitos lugares: institutos técnicos e profissionais, politécnicos, centros de formação, aprendizagem com um empregador ou com um mestre de ofício, e algumas escolas secundárias. Os nomes mudam: um politécnico no Gana ou na Nigéria, um TVET college no Quénia, um centro de formação registado na TESDA nas Filipinas, uma escola CONALEP no México, um centro SENA na Colômbia, um community college nos EUA.",
            "Os ofícios incluem a construção (eletricista, canalizador, pedreiro, carpinteiro, soldador), máquinas e veículos (mecânico de automóveis, reparação de motos, refrigeração e ar condicionado), serviços (cabeleireiro, estética, costura, restauração e cozinha, hotelaria), cuidados (auxiliar de enfermagem, cuidador), agricultura e transformação de alimentos, e tecnologia (reparação de computadores, redes, instalação solar, reparação de telefones).",
            "Um bom programa de TVET pode levar a um emprego, a uma aprendizagem, ao seu próprio pequeno negócio ou a mais estudos. Um programa fraco não leva a lado nenhum, por isso o resto deste curso é sobre escolher bem."
          ],
          words: [["TVET", "Educação e Formação Técnica e Profissional: aprender uma competência de trabalho pela prática, não só pelos livros."], ["Ofício", "um trabalho qualificado que se aprende com formação e prática, como canalização ou costura."], ["Politécnico", "uma escola superior que ensina matérias técnicas e práticas, muitas vezes até ao nível de diploma."]],
          slides: [
            { title: "A TVET em palavras simples", bullets: ["Educação e Formação Técnica e Profissional", "Aprender uma competência de trabalho com ferramentas e prática"] },
            { title: "Onde acontece a TVET", bullets: ["Institutos de TVET, politécnicos, centros de formação", "Aprendizagem com um empregador ou um mestre", "Community colleges nos EUA"] },
            { title: "Alguns ofícios", bullets: ["Eletricista, canalizador, soldador, pedreiro", "Mecânico, alfaiate, cabeleireiro, cozinheiro", "Solar, reparação de computadores e telefones, cuidados"] },
            { title: "Onde pode levar", bullets: ["Um emprego ou uma aprendizagem", "O seu próprio pequeno negócio", "Mais estudos"] }
          ],
          sources: [{ name: "UNESCO-UNEVOC TVETipedia: Technical and vocational education and training", url: "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/show=term/term=Technical+and+vocational+education+and+training" }],
          tryIt: "Num papel, escreva os cinco ofícios desta lição que mais lhe interessam. Ao lado de cada um, escreva o nome de uma pessoa que conhece que faz esse trabalho ou algo parecido.",
          youCanNow: "dizer o que é a TVET, onde é ensinada e o nome de cinco ofícios a que pode levar.",
          quickCheck: [
            { objective: "O1", q: "O que ensina principalmente um programa de TVET?", options: ["Só teoria dos livros", "Como passar em qualquer exame da universidade", "Uma competência de trabalho pela prática com ferramentas", "Como obter um visto"], answer: 2, why: "A TVET é formação para um trabalho ou um ofício, com prática." },
            { objective: "O1", q: "Qual destes é um caminho de TVET?", options: ["Um curso de dois anos de instalações elétricas num instituto técnico", "Um bilhete de lotaria", "Uma página de moda nas redes sociais", "Um empréstimo de um agiota"], answer: 0, why: "Um curso num ofício num instituto técnico é um programa de TVET." }
          ]
        },
        {
          title: "Escolher um ofício que combine consigo e com os empregos locais",
          objectives: ["O1"],
          minutes: 5,
          goal: "Listar três ofícios que combinem com os seus interesses e mostrar provas de que cada um tem procura onde vive.",
          text: [
            "Comece por si. Gosta de trabalhar dentro ou fora de casa? Com pessoas, máquinas, comida, tecido ou computadores? É bom com números, cuidadoso com os detalhes, forte, paciente? Quer um emprego numa empresa ou o seu próprio negócio?",
            "Depois olhe para os empregos. É difícil viver de um ofício de que gosta se ninguém perto de si está a contratar ou a comprar. Procure provas: conte os anúncios de emprego para o ofício em sites de emprego, nos jornais e nos quadros de avisos; pergunte a dois ou três empregadores ou donos de negócios que competências não conseguem encontrar; pergunte a pessoas que trabalham no ofício se foi fácil encontrar trabalho e clientes.",
            "Alguns governos publicam informação sobre o mercado de trabalho, como listas de competências procuradas. Procure-a no site do ministério do trabalho. Tenha cuidado com as listas que vê em anúncios ou nas redes sociais: uma escola que vende um curso vai sempre dizer que o seu ofício tem procura.",
            "Escolha três ofícios que combinem consigo e tenham alguma prova de procura. Nas próximas lições vai comparar programas para eles."
          ],
          steps: ["Escreva do que gosta e em que é bom.", "Liste os ofícios que combinam.", "Para cada um, procure provas de empregos: anúncios, empregadores, pessoas do ofício.", "Fique com os três ofícios que combinam melhor e têm as melhores provas."],
          words: [["Procura", "quantos empregadores ou clientes querem uma competência."], ["Informação sobre o mercado de trabalho", "factos sobre os empregos: quais estão a crescer, quanto pagam e que competências pedem."]],
          slides: [
            { title: "Comece por si", bullets: ["Dentro ou fora de casa? Pessoas ou máquinas?", "Em que é bom?", "Um emprego numa empresa ou o seu próprio negócio?"] },
            { title: "Depois olhe para os empregos", bullets: ["Conte os anúncios de emprego para o ofício", "Pergunte a 2 ou 3 empregadores que competências precisam", "Pergunte a pessoas que trabalham no ofício"] },
            { title: "Cuidado com os anúncios", bullets: ["Uma escola que vende um curso diz sempre \"muita procura\"", "Procure a informação do próprio ministério do trabalho"] },
            { title: "A sua lista curta", bullets: ["Três ofícios que combinam consigo", "Alguma prova de procura para cada um"] }
          ],
          tryIt: "Faça uma tabela com três linhas, uma por ofício. Colunas: porque combina comigo, provas de empregos (por exemplo \"5 anúncios esta semana\" ou \"o dono da oficina disse que precisa de um mecânico formado\") e onde encontrei. Preencha todas as casas.",
          youCanNow: "escolher três ofícios que combinem consigo e apoiar cada um com provas reais de procura local.",
          quickCheck: [
            { objective: "O1", q: "Qual é a melhor prova de que um ofício tem procura onde vive?", options: ["O anúncio de uma escola diz isso", "Contou muitos anúncios de emprego e dois empregadores disseram que precisam", "Um amigo na internet disse que paga bem em todo o lado", "É popular noutro país"], answer: 1, why: "Os anúncios de emprego e os empregadores perto de si são provas reais; os anúncios de uma escola que vende o curso não são." },
            { objective: "O1", q: "Você adora design de moda, mas não encontrou empregos perto de si. Qual é um próximo passo sensato?", options: ["Desistir de qualquer formação", "Inscrever-se no primeiro curso que vê", "Procurar clientes e ofícios parecidos, como a costura, e verificar a procura desses", "Pagar a um agente para lhe arranjar um emprego no estrangeiro"], answer: 2, why: "Ofícios parecidos com procura local podem usar o mesmo interesse e dar-lhe uma forma de ganhar dinheiro." }
          ]
        },
        {
          title: "Tipos de programas e o diploma ou certificado que recebe",
          objectives: ["O2"],
          minutes: 6,
          goal: "Comparar tipos de programas pela duração, requisitos de entrada, custo e o diploma ou certificado que recebe.",
          text: [
            "A TVET existe em vários tipos. Os cursos curtos duram de alguns dias a alguns meses e ensinam uma competência. Os programas de certificado e de diploma nos institutos e politécnicos duram mais e normalmente juntam teoria na sala de aula com prática na oficina. Os certificados nacionais, como os emitidos através da TESDA nas Filipinas, baseiam-se em normas nacionais e numa avaliação. Na aprendizagem, você trabalha com um empregador ou com um mestre de ofício enquanto aprende; nos EUA, as aprendizagens registadas (Registered Apprenticeships) estão listadas em apprenticeship.gov. Na formação dual, o seu tempo é dividido entre uma escola e uma empresa.",
            "Em muitos países, sobretudo na África Ocidental, muitos jovens aprendem através de uma aprendizagem informal com um mestre de ofício. Esta pode ensinar competências reais, mas o certificado pode não ser reconhecido. Pergunte se também pode fazer um teste nacional de ofício ou uma avaliação para obter um certificado reconhecido.",
            "Compare cada opção nos mesmos cinco pontos: tipo de programa, duração, requisitos de entrada (por exemplo um certificado escolar ou uma idade mínima), custo total, e o diploma ou certificado que recebe no fim e quem o emite. Um certificado emitido ou reconhecido pela autoridade nacional vale mais para os empregadores do que um certificado impresso só pela escola."
          ],
          steps: ["Escreva as opções para um ofício.", "Para cada uma, anote o tipo e a duração.", "Anote os requisitos de entrada.", "Anote o custo total (propinas, ferramentas, uniforme, exame, transporte).", "Anote o diploma ou certificado e quem o emite ou reconhece."],
          words: [["Diploma ou certificado", "um documento, como um certificado, diploma ou licença, que prova a sua competência."], ["Aprendizagem", "aprender um ofício a trabalhar com uma pessoa qualificada ou um empregador, muitas vezes com pagamento."], ["Avaliação", "um teste em que mostra a sua competência, muitas vezes fazendo uma tarefa real."]],
          slides: [
            { title: "Tipos de programas", bullets: ["Curso curto: de dias a meses, uma competência", "Certificado ou diploma num instituto ou politécnico", "Aprendizagem ou formação dual com um empregador"] },
            { title: "Aprendizagem informal", bullets: ["Aprender com um mestre de ofício", "Competências reais, mas o certificado pode não contar", "Pergunte por um teste nacional de ofício"] },
            { title: "Compare cinco pontos", bullets: ["Tipo e duração", "Requisitos de entrada", "Custo total", "Diploma ou certificado e quem o emite"] },
            { title: "Que certificado conta?", bullets: ["Emitido ou reconhecido pela autoridade nacional: mais forte", "Impresso só pela escola: mais fraco"] }
          ],
          sources: [{ name: "TESDA (Philippines)", url: "https://www.tesda.gov.ph/" }, { name: "Apprenticeship.gov (US Department of Labor)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Para o seu ofício preferido, encontre dois tipos diferentes de programa (por exemplo um certificado de um instituto e uma aprendizagem). Faça uma tabela com os cinco pontos: tipo, duração, requisitos de entrada, custo total e diploma ou certificado. Escreva \"desconhecido\" onde ainda precisa de perguntar.",
          youCanNow: "comparar programas de formação pelo tipo, duração, requisitos de entrada, custo total e o diploma ou certificado que dão.",
          quickCheck: [
            { objective: "O2", q: "Que certificado vale normalmente mais para os empregadores?", options: ["Um certificado que a própria escola imprimiu", "Um certificado de um curso nas redes sociais", "Uma carta de um amigo", "Um certificado emitido ou reconhecido pela autoridade nacional de TVET"], answer: 3, why: "O reconhecimento nacional mostra aos empregadores que a formação cumpriu uma norma oficial." },
            { objective: "O2", q: "O que deve incluir o \"custo total\"?", options: ["Só a propina do primeiro mês", "Propinas, ferramentas, uniforme, taxas de exame e transporte", "Só o preço do cartaz", "Nada; os bons programas são sempre gratuitos"], answer: 1, why: "Custos escondidos como ferramentas, exames e transporte podem duplicar o que paga." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar o ofício e o programa certos",
        questions: [
          { objective: "O1", q: "O que significa TVET?", options: ["Educação e Formação Técnica e Profissional", "Teste de Visto de Viagem e Emprego", "Ferramenta de Validação e Exame de Professores", "Imposto sobre a Troca de Valor de Ofícios"], answer: 0, why: "TVET é a Educação e Formação Técnica e Profissional." },
          { objective: "O1", q: "Quer verificar a procura de canalização na sua cidade. Qual é o melhor passo?", options: ["Confiar no cartaz de uma escola de formação", "Perguntar a um empreiteiro de canalização e contar os anúncios de emprego locais", "Procurar empregos de canalização noutro continente", "Adivinhar"], answer: 1, why: "Os empregadores e os anúncios de emprego locais são provas reais de procura onde vive." },
          { objective: "O2", q: "Que programa o põe a trabalhar com um empregador enquanto aprende?", options: ["Um vídeo curto na internet", "Um seminário de um dia", "Uma aprendizagem", "Um livro escolar"], answer: 2, why: "Uma aprendizagem significa aprender no trabalho com uma pessoa qualificada ou um empregador." },
          { objective: "O2", q: "Aprendeu soldadura com um mestre numa oficina, mas o seu certificado não é reconhecido. O que pode ajudar?", options: ["Comprar um certificado na internet", "Deixar de soldar", "Imprimir o seu próprio certificado", "Perguntar se pode fazer o teste nacional de ofício ou uma avaliação"], answer: 3, why: "Um teste nacional de ofício ou uma avaliação pode dar um certificado reconhecido para competências que já tem." },
          { objective: "O2", q: "Dois programas parecem iguais. Que detalhe importa mais quando os compara?", options: ["A cor do uniforme", "Quem emite ou reconhece o certificado", "Quantas fotos há no site deles", "O tamanho da placa da escola"], answer: 1, why: "Um certificado reconhecido pela autoridade nacional vale muito mais para os empregadores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Verificar a escola e fazer a sua escolha",
      lessons: [
        {
          title: "Está acreditada? Verificar o registo oficial",
          objectives: ["O3"],
          minutes: 6,
          goal: "Verificar no site oficial da autoridade nacional de TVET que uma escola e o seu programa estão registados ou acreditados.",
          text: [
            "A maioria dos países tem um organismo do governo que regista ou acredita as escolas e os programas de TVET. Acreditado significa que a autoridade verificou que a escola cumpre as suas normas. Um certificado de uma escola não acreditada pode não ser aceite pelos empregadores, por outras escolas ou para um emprego no estrangeiro.",
            "Exemplos: no Quénia, a Autoridade de TVET (TVETA) licencia, regista e acredita as instituições e publica uma lista de instituições acreditadas em tveta.go.ke. Na Nigéria, o Conselho Nacional de Educação Técnica (NBTE) regula as instituições de TVET, como os politécnicos e os institutos técnicos. Nas Filipinas, a TESDA lista as instituições de formação com programas registados. No Gana, procure a Comissão de TVET (CTVET); na Índia, o Conselho Nacional de Educação e Formação Profissional (NCVET) e o Skill India; em Marrocos, o OFPPT é um grande prestador público; no México, o CONALEP é uma rede pública de escolas técnicas; na Colômbia, o SENA é o serviço público de formação. No Senegal, no Egito e noutros países, comece pelo ministério responsável pelo ensino profissional ou técnico. Nos EUA, verifique as aprendizagens registadas em apprenticeship.gov e pergunte ao seu estado pelas escolas licenciadas.",
            "Verifique o nome da escola E o do programa. Uma escola pode estar registada sem que um dos seus cursos esteja. Use o site oficial (muitas vezes termina em .gov, .go.ke, .gov.ng, .gov.ph ou na terminação do governo do seu país), não um link enviado pela escola ou por um agente. Se não encontrar a escola, telefone ou vá ao escritório da autoridade e pergunte."
          ],
          steps: ["Encontre a autoridade de TVET do seu país no site do ministério da educação ou do trabalho.", "Abra você mesmo o site oficial; não use um link da escola.", "Procure no registo o nome exato da escola e da filial.", "Verifique que o seu programa também está na lista.", "Anote o site, a data e o que encontrou. Se não estiver lá, pergunte diretamente à autoridade."],
          words: [["Acreditado", "verificado e aprovado por um organismo oficial por cumprir as suas normas."], ["Registo", "uma lista oficial, aqui das escolas e dos programas aprovados."], ["Autoridade", "o organismo do governo responsável por algo, aqui pela TVET."]],
          slides: [
            { title: "Porque a acreditação importa", bullets: ["A autoridade verificou as normas da escola", "Certificados não acreditados podem não ser aceites"] },
            { title: "Algumas autoridades nacionais", bullets: ["Quénia: TVETA. Nigéria: NBTE", "Filipinas: TESDA. Gana: CTVET. Índia: NCVET", "México: CONALEP. Colômbia: SENA. Marrocos: OFPPT"] },
            { title: "Verifique os dois", bullets: ["A escola e a filial exatas", "O programa exato que quer"] },
            { title: "Verifique com segurança", bullets: ["Abra você mesmo o site oficial", "Não um link da escola ou de um agente", "Anote onde e quando verificou"] }
          ],
          sources: [{ name: "TVETA Kenya: accredited TVET institutions", url: "https://www.tveta.go.ke/accredited-tvet-institutions/" }, { name: "National Board for Technical Education (Nigeria)", url: "https://web.nbte.gov.ng/" }, { name: "TESDA (Philippines): registered programs", url: "https://www.tesda.gov.ph/" }, { name: "Apprenticeship.gov (US)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Encontre a autoridade oficial de TVET do seu país. Abra você mesmo o site e procure uma escola perto de si e o programa que quer. Anote o endereço do site, a data de hoje e o que encontrou. Se não encontrou a escola, escreva o número de telefone ou o escritório a quem vai perguntar.",
          youCanNow: "encontrar a autoridade de TVET do seu país e verificar no registo oficial que uma escola e o seu programa estão acreditados.",
          quickCheck: [
            { objective: "O3", q: "Uma escola envia-lhe um link para \"provar\" que está acreditada. O que faz?", options: ["Confia no link porque parece oficial", "Abre você mesmo o site oficial da autoridade e procura a escola", "Paga primeiro a propina e verifica depois", "Pergunta ao agente da escola se é verdade"], answer: 1, why: "Um link da escola pode levar a uma página falsa; vá você mesmo ao site oficial." },
            { objective: "O3", q: "A escola está no registo, mas o seu curso não está na lista. O que é verdade?", options: ["O curso está de certeza bem", "Só o edifício precisa de estar registado", "O curso pode não estar acreditado; pergunte à autoridade antes de se inscrever", "Não importa para os empregadores"], answer: 2, why: "As escolas e os programas são muitas vezes verificados separadamente; verifique também o programa." }
          ]
        },
        {
          title: "Perguntas a fazer, e como reconhecer uma escola falsa",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Fazer seis perguntas-chave a uma escola e dizer os sinais de alerta de uma burla de formação.",
          text: [
            "Visite a escola se puder e pergunte: Quantas horas de prática vou ter? Posso ver a oficina e o equipamento? Quem são os formadores e já trabalharam no ofício? Que exame ou avaliação há no fim e quem dá o certificado? Quantos antigos alunos encontraram trabalho ou abriram um negócio, e posso falar com um? Qual é o custo total, incluindo ferramentas, exames e uniformes, e qual é a regra de reembolso? Anote todas as respostas.",
            "As boas escolas respondem com clareza e deixam-no ver a oficina. Tenha cuidado se só mostram uma sala de aula, não conseguem dizer o nome de um empregador que contrata os seus formados ou não querem pôr as propinas por escrito.",
            "Sinais de alerta de uma escola falsa ou de uma burla: um emprego prometido ou \"garantido\", sobretudo no estrangeiro; pressão para pagar hoje; propinas pagas para o telefone ou a conta de uma pessoa em vez da conta oficial da escola com recibo; nenhuma morada real; um certificado completo em poucos dias sem prática; pedir para ficar com o seu passaporte ou bilhete de identidade. Nunca pague para conseguir um emprego, fique com os seus próprios documentos e verifique primeiro a escola no registo oficial.",
            "Se acha que é uma burla, não pague. Denuncie à autoridade de TVET ou à polícia, e avise os seus amigos."
          ],
          steps: ["Pergunte pelas horas de prática, pela oficina e pelo equipamento.", "Pergunte quem são os formadores e que experiência têm.", "Pergunte pelo exame final e por quem emite o certificado.", "Pergunte pelos empregos dos antigos alunos, pelo custo total e pelos reembolsos.", "Anote todas as respostas e compare com os sinais de alerta."],
          words: [["Reembolso", "dinheiro que lhe devolvem se sair ou se o curso for cancelado."], ["Recibo", "um registo escrito ou impresso de que pagou, com o nome da escola."]],
          slides: [
            { title: "Seis perguntas a fazer", bullets: ["Horas de prática? Oficina e equipamento?", "Experiência dos formadores? Exame final e certificado?", "Empregos dos antigos alunos? Custo total e reembolsos?"] },
            { title: "Bons sinais", bullets: ["Respostas claras, propinas por escrito", "Pode ver uma oficina a funcionar", "Pode falar com antigos alunos"] },
            { title: "Sinais de alerta", bullets: ["\"Emprego garantido\", sobretudo no estrangeiro", "Pagar hoje, para um telefone ou conta pessoal", "Sem morada; certificado em dias; fica com o seu passaporte"] },
            { title: "Se parece uma burla", bullets: ["Não pague", "Denuncie à autoridade de TVET ou à polícia", "Avise os seus amigos"] }
          ],
          tryIt: "Escreva as seis perguntas numa página. Faça-as a uma escola, numa visita ou por telefone, ou a alguém que estudou lá. Anote todas as respostas. Depois faça um círculo à volta de qualquer sinal de alerta que ouviu.",
          youCanNow: "fazer a uma escola as perguntas que importam, anotar as respostas e reconhecer os sinais de alerta de uma escola falsa.",
          quickCheck: [
            { objective: "O4", q: "Que pergunta lhe mostra melhor quanta prática real vai ter?", options: ["\"O uniforme é bonito?\"", "\"Têm um site?\"", "\"A escola fica perto de uma paragem de autocarro?\"", "\"Quantas horas vou trabalhar na oficina com equipamento real?\""], answer: 3, why: "As horas de prática e o equipamento real são a forma de aprender um ofício." },
            { objective: "O5", q: "Um recrutador diz: \"Pague hoje para o meu telefone e terá um emprego garantido no estrangeiro depois do curso.\" O que é isto?", options: ["Um sinal de alerta de burla; não pague", "Uma oferta normal de uma escola", "Uma bolsa do governo", "Um bom negócio se for barato"], answer: 0, why: "Empregos garantidos, pressão para pagar já e pagar para um telefone pessoal são sinais clássicos de burla." }
          ]
        },
        {
          title: "Comparar e decidir: o seu plano de decisão sobre o programa",
          objectives: ["O2", "O6"],
          minutes: 6,
          goal: "Escrever um plano de decisão de uma página com a sua escolha, os custos, o financiamento e as datas.",
          text: [
            "Ponha os seus dois melhores programas lado a lado numa tabela: tipo, duração, requisitos de entrada, custo total, diploma ou certificado e quem o emite, acreditação (onde verificou), respostas às suas seis perguntas e quaisquer sinais de alerta. A melhor escolha nem sempre é a mais barata: é o programa acreditado com mais prática e com as melhores provas de que os formados encontram trabalho.",
            "Planeie como vai pagar. Escreva o custo total e quando vence cada pagamento. Procure ajuda só em fontes oficiais: bolsas do governo, empréstimos ou formação pública gratuita em alguns países, bolsas de empregadores ou de grupos comunitários, ou uma aprendizagem que lhe paga enquanto aprende. Verifique qualquer oferta de financiamento no site oficial da agência que a dá, e nunca pague uma taxa para receber uma bolsa.",
            "Escreva as datas: quando abrem e fecham as candidaturas, que documentos precisa (fique com os originais e entregue cópias), a data de início e a data do exame final. Mostre o seu plano a um pai ou mãe, a um professor, a um orientador ou a alguém do ofício, e pergunte o que lhe escapou."
          ],
          steps: ["Faça uma tabela a comparar os seus dois melhores programas.", "Escolha um e escreva porquê.", "Escreva o custo total, as datas de pagamento e como vai pagar.", "Escreva os documentos, o prazo de candidatura, a data de início e a data do exame.", "Mostre o plano a alguém de confiança e corrija o que essa pessoa encontrar."],
          words: [["Bolsa", "dinheiro dado para ajudar um aluno a pagar a escola, que não precisa de devolver."], ["Prazo", "o último dia para fazer algo, como candidatar-se."]],
          slides: [
            { title: "Lado a lado", bullets: ["Tipo, duração, entrada, custo total, certificado", "Acreditação e onde verificou", "Respostas da escola e sinais de alerta"] },
            { title: "O melhor nem sempre é o mais barato", bullets: ["Acreditado", "Mais prática", "Melhores provas de que os formados encontram trabalho"] },
            { title: "Como pagar", bullets: ["Custo total e datas de pagamento", "Bolsas, empréstimos, aprendizagens pagas", "Verifique em sites oficiais; nunca pague por uma bolsa"] },
            { title: "Datas e documentos", bullets: ["Prazo de candidatura e data de início", "Fique com os originais; entregue cópias", "Mostre o plano a alguém de confiança"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de decisão de uma página: o seu ofício e porquê, dois programas comparados, onde verificou a acreditação, as respostas da escola, os sinais de alerta, a sua escolha, como vai pagar e as datas da candidatura, do início e do exame final. Mostre-o a uma pessoa de confiança.",
          youCanNow: "comparar dois programas e escrever um plano de decisão com a sua escolha, os custos, o financiamento, os documentos e as datas.",
          quickCheck: [
            { objective: "O6", q: "Alguém lhe oferece uma bolsa se primeiro pagar uma \"taxa de processamento\". O que faz?", options: ["Paga depressa antes que feche", "Envia uma cópia do passaporte para guardar o lugar", "Não paga; verifica a bolsa no site oficial da agência", "Pede dinheiro emprestado para pagar a taxa"], answer: 2, why: "As bolsas verdadeiras não cobram para as receber; verifique-as no site oficial." },
            { objective: "O2", q: "O Programa A é mais barato, mas não está acreditado. O Programa B custa mais, está acreditado e tem uma oficina completa. Qual é normalmente a melhor escolha?", options: ["O Programa A, porque é mais barato", "Nenhum; nunca fazer formação", "O que acabar mais depressa", "O Programa B, se encontrar uma forma de pagar"], answer: 3, why: "Um programa acreditado com prática real vale mais para os empregadores do que um barato e não reconhecido." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Verificar a escola e fazer a sua escolha",
        questions: [
          { objective: "O3", q: "No Quénia, que organismo publica a lista das instituições de TVET acreditadas?", options: ["A Autoridade de TVET (TVETA)", "Uma empresa privada de publicidade", "Qualquer agente de recrutamento", "A página de Facebook da própria escola"], answer: 0, why: "A TVETA licencia, regista e acredita as instituições de TVET no Quénia e lista-as no seu site." },
          { objective: "O3", q: "O que deve anotar depois de verificar um registo?", options: ["Nada", "Só o slogan da escola", "O site, a data e o que encontrou", "O número de telefone do agente"], answer: 2, why: "Um registo de onde e quando verificou é a sua prova." },
          { objective: "O4", q: "A escola não o deixa ver a oficina. O que é que isto lhe diz?", options: ["Nada de importante", "É um sinal de alerta; faça mais perguntas ou procure noutro lado", "A escola deve ser excelente", "As oficinas não importam na TVET"], answer: 1, why: "A prática é o coração da TVET; uma escola que esconde a oficina pode não ter uma." },
          { objective: "O5", q: "Qual é um sinal de alerta de uma escola falsa?", options: ["Propinas escritas num recibo oficial", "Uma visita a uma oficina a funcionar", "Formadores que já trabalharam no ofício", "Um certificado completo em três dias sem prática"], answer: 3, why: "As competências reais de um ofício exigem prática; um certificado rápido sem prática é sinal de uma escola falsa." },
          { objective: "O6", q: "O que deve estar no seu plano de decisão sobre o programa?", options: ["O programa escolhido, o custo total, como vai pagar e as datas importantes", "Só o nome da escola", "As suas palavras-passe", "Uma lista dos seus amigos"], answer: 0, why: "Um plano útil diz o que escolheu, quanto custa, como vai pagar e quando as coisas acontecem." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Escolher um Programa de Formação Técnica e Profissional (TVET)",
    questions: [
      { objective: "O1", q: "Qual é um exemplo de um programa de TVET?", options: ["Um curso de certificado em mecânica automóvel", "Uma lotaria", "Uma aplicação de poupança", "Um serviço de música na internet"], answer: 0, why: "A mecânica automóvel é um ofício ensinado em programas de TVET." },
      { objective: "O1", q: "Antes de escolher um ofício, o que deve ver além dos seus interesses?", options: ["A sua cor preferida", "Provas de empregos ou clientes onde vive", "O que está na moda nas redes sociais esta semana", "O ofício com o nome mais curto"], answer: 1, why: "Um ofício combina melhor quando gosta dele e as pessoas perto de si estão a contratar ou a comprar." },
      { objective: "O1", q: "Com que fonte de informação sobre empregos deve ter mais cuidado?", options: ["Um empregador a quem perguntou", "Contar os anúncios de emprego na sua cidade", "Um anúncio de uma escola que vende o curso", "Pessoas que já trabalham no ofício"], answer: 2, why: "Uma escola que vende um curso tem razões para dizer que o seu ofício tem procura." },
      { objective: "O2", q: "O que é uma aprendizagem?", options: ["Um pequeno teste na internet", "Um tipo de empréstimo", "Um uniforme escolar", "Aprender um ofício a trabalhar com uma pessoa qualificada ou um empregador"], answer: 3, why: "Os aprendizes aprendem no trabalho, muitas vezes com pagamento." },
      { objective: "O2", q: "Que cinco pontos deve comparar entre programas?", options: ["Tipo, duração, requisitos de entrada, custo total e diploma ou certificado", "Logótipo, cores, site, slogan e música", "Só o preço", "Só a distância"], answer: 0, why: "Estes cinco pontos mostram o que recebe, o que é preciso e quanto custa." },
      { objective: "O2", q: "Que custo é muitas vezes esquecido quando se comparam programas?", options: ["Nenhum; o preço do cartaz está sempre completo", "Ferramentas, taxas de exame e transporte", "A conta de eletricidade da escola", "O salário do formador"], answer: 1, why: "As ferramentas, os exames e o transporte podem aumentar muito o custo real." },
      { objective: "O2", q: "Quem deve emitir ou reconhecer o seu certificado para ele ter mais valor?", options: ["Só a escola", "Um amigo", "A autoridade nacional de TVET ou um organismo de certificação reconhecido", "Um fórum na internet"], answer: 2, why: "O reconhecimento nacional mostra aos empregadores que a formação cumpriu uma norma oficial." },
      { objective: "O3", q: "O que significa \"acreditado\"?", options: ["A escola tem uma placa grande", "A escola é cara", "A escola é popular na internet", "Um organismo oficial verificou e aprovou-a por cumprir as normas"], answer: 3, why: "A acreditação é uma verificação oficial em relação às normas." },
      { objective: "O3", q: "Nas Filipinas, que agência lista as instituições de formação com programas registados?", options: ["A TESDA", "Uma agência de viagens", "Um banco", "Uma empresa de telefones"], answer: 0, why: "A TESDA regista os programas e lista as instituições que os oferecem." },
      { objective: "O3", q: "Onde deve verificar se uma escola está acreditada?", options: ["Num link que a escola lhe envia", "No site oficial da autoridade nacional de TVET, aberto por você", "No cartaz da escola", "Perguntando ao agente que vende o curso"], answer: 1, why: "Só o site da própria autoridade, aberto por você, é uma verificação de confiança." },
      { objective: "O3", q: "A escola está acreditada, mas o seu programa não está no registo. Você deve:", options: ["Inscrever-se na mesma", "Ignorar", "Perguntar à autoridade antes de se inscrever", "Pagar uma taxa para resolver"], answer: 2, why: "Os programas podem ser acreditados separadamente da escola, por isso pergunte à autoridade." },
      { objective: "O4", q: "Que pergunta o ajuda a ver se os formados encontram trabalho?", options: ["\"De que cor são as paredes?\"", "\"Têm estacionamento?\"", "\"Há uma cantina?\"", "\"Quantos antigos alunos encontraram trabalho, e posso falar com um?\""], answer: 3, why: "Falar com antigos alunos mostra resultados reais." },
      { objective: "O4", q: "Porque deve anotar todas as respostas que a escola dá?", options: ["Para poder comparar escolas e cobrar-lhes o que disseram", "Para a visita durar mais", "Porque as escolas exigem", "Não serve para nada"], answer: 0, why: "As respostas escritas permitem comparar com justiça e lembrar as promessas." },
      { objective: "O4", q: "Que resposta de uma escola é um bom sinal?", options: ["\"Não podemos pôr as propinas por escrito.\"", "\"Venha ver a oficina, e aqui está a lista completa das propinas.\"", "\"Não precisa de prática para ter o nosso certificado.\"", "\"Pague hoje ou perde o lugar.\""], answer: 1, why: "Mostrar a oficina abertamente e dar as propinas por escrito são sinais de uma escola verdadeira." },
      { objective: "O5", q: "Qual é um sinal de alerta de uma burla de formação?", options: ["Um recibo oficial", "Uma regra de reembolso clara", "Um emprego \"garantido\" no estrangeiro se pagar já", "Uma visita à oficina"], answer: 2, why: "Empregos garantidos e pressão para pagar são sinais clássicos de burla." },
      { objective: "O5", q: "Uma escola pede para ficar com o seu passaporte até acabar o curso. Você deve:", options: ["Entregá-lo", "Enviar uma foto dele ao agente", "Deixá-lo com eles para poupar tempo", "Ficar com o seu passaporte e os seus documentos; entregar só cópias"], answer: 3, why: "Nunca entregue o seu passaporte ou documento de identidade; ficar com os documentos de alguém é um sinal de alerta de abuso." },
      { objective: "O5", q: "Acha que uma oferta de formação é uma burla. O que faz?", options: ["Não paga e denuncia à autoridade de TVET ou à polícia", "Paga um pouco para testar", "Partilha os seus dados bancários para verificar", "Não conta a ninguém"], answer: 0, why: "Não pagar e denunciar protege-o a si e aos outros." },
      { objective: "O6", q: "O que deve o seu plano de decisão incluir sobre dinheiro?", options: ["Nada", "O custo total, as datas de pagamento e como vai pagar", "Só a primeira propina", "A palavra-passe do seu banco"], answer: 1, why: "Saber o custo total e como vai pagar evita surpresas a meio do caminho." },
      { objective: "O6", q: "Que financiamento deve verificar num site oficial antes de confiar nele?", options: ["Nenhum", "Só os empréstimos", "Qualquer oferta de bolsa ou empréstimo", "Só as ofertas de amigos"], answer: 2, why: "Existem bolsas falsas; verifique cada oferta com a agência que a dá." },
      { objective: "O6", q: "Antes de enviar a sua candidatura, qual é um bom último passo?", options: ["Entregar os seus documentos originais a um agente", "Apagar a sua tabela de comparação", "Pagar uma taxa extra para ir mais depressa", "Mostrar o seu plano a um professor, a um orientador ou a alguém do ofício"], answer: 3, why: "Outra pessoa pode ver o que lhe escapou." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 4, 7, 9, 12, 14, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "O ofício combina consigo e com os empregos locais", objective: "O1", notYet: "O ofício foi escolhido sem razão ou sem provas de procura.", meets: "Diz porque o ofício combina e dá pelo menos uma prova de emprego local.", exceeds: "Dá provas de duas ou mais fontes, como anúncios de emprego e uma conversa com um empregador." },
      { name: "Programas comparados", objective: "O2", notYet: "Só um programa, ou a tabela tem casas vazias.", meets: "Dois programas comparados pelo tipo, duração, requisitos de entrada, custo total e certificado.", exceeds: "Inclui também os custos escondidos e quem emite ou reconhece cada certificado." },
      { name: "Acreditação verificada", objective: "O3", notYet: "Nenhuma verificação, ou a verificação usou um link da escola.", meets: "Escola e programa verificados no site oficial da autoridade nacional, com onde e quando.", exceeds: "Também contactou a autoridade para confirmar o que não estava claro." },
      { name: "Perguntas feitas e burlas afastadas", objective: "O4", notYet: "Nenhuma resposta da escola anotada, ou sinais de alerta ignorados.", meets: "Respostas às seis perguntas anotadas e sinais de alerta indicados.", exceeds: "Também falou com um antigo aluno ou com um empregador sobre a escola." },
      { name: "Plano de decisão", objective: "O6", notYet: "Sem escolha, custo nem datas.", meets: "Uma escolha clara com o custo total, como pagar, os documentos e as datas.", exceeds: "Revisto por uma pessoa de confiança, com as suas observações acrescentadas." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e completam o plano de decisão (grelha de avaliação)",
      "Alunos que se inscrevem num programa de TVET acreditado ou numa aprendizagem dentro de 3 meses",
      "Alunos que dizem ter verificado uma escola num registo oficial antes de pagar (seguimento aos 30 dias)",
      "Alunos que dizem ter evitado ou denunciado uma escola falsa ou uma burla de formação",
      "Os programas parceiros relatam menos alunos perdidos para escolas não acreditadas ou burlas de formação"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para abrir os registos oficiais (um computador partilhado ou de cibercafé serve)",
      "Papel e caneta para as tabelas e o plano de decisão",
      "O nome e o site da autoridade de TVET do seu país (encontrados na Lição 4)",
      "Cerca de 60 a 75 minutos no total, mais tempo para visitar ou telefonar a uma escola"
    ],
    facilitatorNotes: [
      "Antes da sessão, encontre a autoridade de TVET do seu país e a página do registo, e teste se abre; os registos mudam de lugar e alguns sites são lentos.",
      "Convide um empregador local ou um formado de um programa de TVET para responder a perguntas na Lição 2 ou na Lição 5.",
      "Não recomende escolas específicas; ensine os alunos a verificar e a comparar por si mesmos.",
      "Lembre aos alunos que nunca devem pagar a um agente nem entregar passaportes ou documentos de identidade; denunciem suspeitas de burla à autoridade de TVET ou à polícia.",
      "Avalie o plano de decisão com a grelha e dê observações sobre uma linha em Ainda não de cada vez."
    ]
  }
};
