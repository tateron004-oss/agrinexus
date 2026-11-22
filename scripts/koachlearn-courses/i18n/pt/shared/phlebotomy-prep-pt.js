"use strict";

// Koach Learn course (Portuguese translation of shared/phlebotomy-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Teaches the knowledge behind blood collection; it does NOT teach anyone to draw blood. No clinical advice.

module.exports = {
  id: "phlebotomy-prep-pt",
  lang: "pt",
  translationOf: "phlebotomy-prep",
  category: "Workforce Development",
  name: "Preparação para Técnico de Flebotomia",
  skills: "Escolher um programa de formação e uma certificação, Identificar o paciente e verificar a requisição, Ordem de colheita, Os passos de uma colheita de sangue de rotina, Controlo de infeções e segurança com objetos cortantes, Rotular e manusear amostras",
  outcome: "fazer a sua própria lista de verificação de bolso para uma colheita de sangue de rotina, desde identificar o paciente até rotular os tubos e arrumar, com a ordem de colheita do seu laboratório e os passos de segurança, e também um plano para o seu programa de formação e o exame de certificação.",
  about: [
    "Os técnicos de flebotomia colhem amostras de sangue em hospitais, laboratórios, clínicas, centros de doação de sangue e nas casas dos pacientes. É uma forma rápida de entrar na área da saúde e pode levar a outros trabalhos no laboratório e no cuidado de pacientes.",
    "Este curso ensina os conhecimentos por trás do trabalho: as certificações e as regras do estado, como identificar o paciente e verificar a requisição, a ordem de colheita dos tubos, os passos de uma colheita de sangue de rotina, o controlo de infeções e a segurança com objetos cortantes, e como rotular e manusear as amostras para o laboratório as poder usar. Também fala da privacidade do paciente segundo a lei HIPAA dos Estados Unidos.",
    "Importante: este curso não ensina a tirar sangue, e você não deve praticar em ninguém. A colheita de sangue só se aprende num programa de formação aprovado, com um instrutor a observar, depois de praticar em braços de treino. Os exames de certificação também pedem prova de colheitas supervisionadas em pessoas reais. Este curso prepara você para esse programa e para o exame; não dá um certificado nem uma licença.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" em papel. Há uma pequena verificação depois de cada lição, uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Faça a sua própria lista de verificação de bolso para uma colheita de sangue de rotina: identificar o paciente e verificar a requisição, preparar-se e proteger-se, a ordem de colheita dos seus tubos (da tabela do seu programa ou laboratório), os passos da colheita, rotular à frente do paciente, deitar fora os objetos cortantes e arrumar. Acrescente um plano de uma página: o programa de formação a que vai candidatar-se, o exame de certificação que quer fazer, o que o seu estado exige e as datas-alvo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que procuram uma forma rápida e estável de entrar na área da saúde: pessoas à procura de emprego, jovens adultos, imigrantes, veteranos (alguns com experiência médica militar) e adultos que voltam a estudar.",
    startingPoint: "Sabem ler o inglês do dia a dia e usar um telefone ou um computador da biblioteca. A maioria nunca trabalhou numa clínica ou num laboratório, não conhece as palavras médicas, e alguns ficam nervosos perto de agulhas ou de sangue.",
    gap: "Os programas de flebotomia e os exames de certificação esperam que os alunos conheçam a identificação do paciente, a ordem de colheita, os passos da punção venosa, o controlo de infeções, o manuseamento das amostras e a privacidade, e que tenham feito colheitas supervisionadas. Os alunos precisam destes conhecimentos, de um plano claro para a formação e o exame, e de uma imagem honesta do trabalho antes de se inscreverem.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra médica é explicada",
      "Segurança: nenhuma colheita de sangue nem prática com agulhas em casa; isso só acontece num programa supervisionado",
      "Aparelhos: um telefone ou um computador da biblioteca; papel chega para todas as tarefas",
      "As regras mudam de estado para estado (por exemplo, a Califórnia emite os seus próprios certificados de flebotomia); os alunos verificam o seu estado",
      "As cores dos tubos e a ordem de colheita seguem a tabela de cada laboratório; os alunos usam a tabela do seu programa",
      "Privacidade: nenhuma informação real de pacientes em nenhuma tarefa"
    ],
    prerequisites: "Nenhum. O curso \"Literacia em Saúde\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando a página oficial da NHA e a página do serviço de saúde do seu estado", action: "escrever um plano para um programa de formação em flebotomia, as colheitas supervisionadas exigidas e a data de um exame de certificação", standard: "com cada requisito verificado numa página oficial" },
    { id: "O2", condition: "Com um paciente de prática e uma requisição de laboratório", action: "confirmar o paciente com dois identificadores e verificar se a requisição corresponde antes de qualquer colheita", standard: "parando sempre que alguma coisa não corresponde" },
    { id: "O3", condition: "Com um conjunto de cores de tubos e a tabela do seu programa", action: "pôr os tubos na ordem de colheita", standard: "sem nenhum tubo fora da ordem" },
    { id: "O4", condition: "Com os passos de uma punção venosa de rotina fora de ordem", action: "pôr os passos em ordem e dizer quando parar a colheita", standard: "sem faltar nenhum passo" },
    { id: "O5", condition: "Com situações de segurança de prática", action: "escolher o passo certo de controlo de infeções e de segurança com objetos cortantes", standard: "acertando em todas as situações" },
    { id: "O6", condition: "Com amostras de prática", action: "decidir se cada amostra está rotulada e manuseada bem o suficiente para o laboratório a aceitar", standard: "encontrando todos os motivos de rejeição" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O trabalho, o paciente e os tubos",
      lessons: [
        {
          title: "O trabalho, a formação e a certificação",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escrever um plano para um programa de formação, as colheitas supervisionadas e um exame de certificação.",
          text: [
            "Um técnico de flebotomia colhe sangue de pacientes para análises de laboratório e para doação de sangue. O trabalho exige passos cuidadosos, uma maneira calma com pacientes nervosos e segurança rigorosa.",
            "A maioria das pessoas começa com um programa de formação em flebotomia numa escola superior comunitária, numa escola de adultos ou numa escola profissional. Primeiro aprende em braços de treino e depois faz colheitas em pessoas reais com um instrutor a observar. Esta parte prática não se aprende pela internet.",
            "Certificação: uma escolha comum é a de Técnico de Flebotomia Certificado (CPT) da NHA, a National Healthcareer Association. A NHA pede o diploma do ensino secundário ou o GED (ou um que esteja quase a sair), um programa de formação ou experiência de trabalho supervisionada, e prova de pelo menos 30 punções venosas e 10 picadas capilares (no dedo ou no calcanhar) em pessoas vivas. Outras organizações, como a ASCP, também certificam flebotomistas; veja as páginas oficiais delas.",
            "Alguns estados têm as suas próprias regras. A Califórnia, por exemplo, emite certificados estaduais de flebotomia através do Departamento de Saúde Pública da Califórnia (CDPH) e também exige um exame nacional de uma organização aprovada. Verifique o serviço de saúde do seu estado antes de escolher um programa. As regras e as taxas mudam, por isso leia as páginas oficiais."
          ],
          steps: ["Encontre dois programas de formação em flebotomia perto de você.", "Pergunte a cada um: quantas colheitas supervisionadas fazem os alunos, e para que certificação prepara?", "Leia a página oficial da certificação para ver os requisitos atuais.", "Verifique as regras do estado no serviço de saúde do seu estado.", "Escreva datas-alvo: início da formação, fim da formação, exame."],
          words: [["Flebotomia", "tirar sangue a uma pessoa para análises ou doação."], ["Punção venosa", "pôr uma agulha numa veia para colher sangue."], ["Picada capilar", "uma pequena picada no dedo ou no calcanhar para colher algumas gotas de sangue."], ["Braço de treino", "um modelo de braço usado para aprender a colher sangue com segurança."]],
          slides: [
            { title: "O trabalho", bullets: ["Colher sangue para análises e doação", "Passos cuidadosos, maneira calma, segurança rigorosa"] },
            { title: "Primeiro vem a formação", bullets: ["Programa aprovado: escola superior, de adultos ou profissional", "Braços de treino, depois colheitas reais supervisionadas", "A parte prática não se aprende pela internet"] },
            { title: "Certificação", bullets: ["CPT da NHA: formação ou experiência de trabalho", "Prova de 30 punções venosas e 10 picadas capilares", "Outras organizações, como a ASCP: veja as páginas delas"] },
            { title: "Verifique o seu estado", bullets: ["Alguns estados emitem os seus próprios certificados", "Califórnia: CDPH e também um exame nacional", "As regras e as taxas mudam: leia as páginas oficiais"] }
          ],
          sources: [
            { name: "NHA: Técnico de Flebotomia Certificado (CPT)", url: "https://www.nhanow.com/certifications/phlebotomy-technician" },
            { name: "Departamento de Saúde Pública da Califórnia: certificado de flebotomia", url: "https://www.cdph.ca.gov/Programs/OSPHLD/LFS/Pages/Phlebotomist.aspx" }
          ],
          tryIt: "Escreva um plano de uma página: dois programas de formação perto de você (nome, duração, colheitas supervisionadas, para que certificação preparam), a certificação que quer fazer e os seus requisitos tirados da página oficial, as regras do seu estado e três datas-alvo.",
          youCanNow: "dizer o que faz um técnico de flebotomia, como funciona a formação, o que a CPT da NHA pede e onde verificar as regras do seu estado.",
          quickCheck: [
            { objective: "O1", q: "Onde aprende a tirar sangue de verdade?", options: ["Com vídeos em casa", "Num amigo, com cuidado", "Num programa de formação aprovado, com um instrutor a observar", "Em si mesmo"], answer: 2, why: "A colheita só se aprende num programa supervisionado, primeiro em braços de treino." },
            { objective: "O1", q: "O que pede a CPT da NHA, além da formação ou da experiência de trabalho?", options: ["Prova de punções venosas e picadas capilares supervisionadas em pessoas vivas", "Um curso de enfermagem", "Uma carta de condução", "Mais nada"], answer: 0, why: "A NHA pede prova de pelo menos 30 punções venosas e 10 picadas capilares." }
          ]
        },
        {
          title: "O paciente certo e a requisição certa",
          objectives: ["O2"],
          minutes: 5,
          goal: "Confirmar o paciente com dois identificadores e verificar a requisição antes de qualquer colheita.",
          text: [
            "O passo mais importante acontece antes da agulha: ter a certeza de que tem o paciente certo. Uma amostra da pessoa errada pode levar ao tratamento errado.",
            "Use pelo menos dois identificadores, normalmente o nome completo e a data de nascimento. Peça ao paciente para os dizer (\"Por favor, diga-me o seu nome completo e a sua data de nascimento\") em vez de perguntar \"É o senhor João Silva?\", porque pessoas nervosas ou confusas podem simplesmente dizer que sim. Num hospital, compare também a pulseira de identificação com a requisição.",
            "Depois leia a requisição do laboratório: que análises, instruções especiais como jejum ou uma hora marcada, e que tubos são precisos. Se o nome, a data de nascimento ou qualquer outra coisa não corresponder, pare e pergunte ao seu supervisor. Nunca adivinhe.",
            "Privacidade (HIPAA): a requisição mostra informações privadas de saúde. Mantenha-a fora da vista dos outros, fale baixo e fale das análises só com o paciente e com os funcionários que precisam de saber."
          ],
          steps: ["Apresente-se e explique o que vai fazer.", "Peça ao paciente para dizer o seu nome completo e a data de nascimento.", "Compare com a requisição (e com a pulseira de identificação num hospital).", "Verifique as análises, os tubos e as instruções especiais, como o jejum.", "Se alguma coisa não corresponder, pare e pergunte ao seu supervisor."],
          words: [["Identificadores do paciente", "dados como o nome completo e a data de nascimento, usados para ter a certeza de que é a pessoa certa."], ["Requisição", "o pedido do laboratório que diz quem é o paciente e que análises colher."], ["Jejum", "não comer (e às vezes não beber nada além de água) durante um tempo marcado antes de uma análise."], ["HIPAA", "a lei federal dos Estados Unidos que protege a privacidade das informações de saúde."]],
          slides: [
            { title: "Antes da agulha", bullets: ["O paciente certo é o mais importante", "Paciente errado = resultados errados, cuidados errados"] },
            { title: "Dois identificadores", bullets: ["Nome completo e data de nascimento", "Peça ao paciente para os DIZER", "Hospital: veja também a pulseira de identificação"] },
            { title: "Leia a requisição", bullets: ["Que análises e que tubos", "Instruções de jejum ou de hora marcada", "Alguma coisa estranha? Pare e pergunte"] },
            { title: "Privacidade", bullets: ["Mantenha a requisição fora da vista", "Fale baixo", "Partilhe só com quem precisa de saber"] }
          ],
          sources: [
            { name: "HHS: HIPAA para profissionais (Regra de Privacidade)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Faça um jogo de papéis com um amigo, sem agulhas. O seu amigo faz de paciente com um nome e uma data de nascimento inventados; você tem uma requisição inventada com um dado diferente. Apresente-se, peça-lhe para dizer o nome e a data de nascimento, compare com a requisição e diga em voz alta o que faz quando não corresponde.",
          youCanNow: "identificar um paciente com dois identificadores, verificar a requisição do laboratório, parar quando alguma coisa não corresponde e manter as informações privadas.",
          quickCheck: [
            { objective: "O2", q: "Qual é a melhor forma de confirmar quem é o paciente?", options: ["Perguntar \"É a senhora Maria Lopes?\"", "Olhar para a cara da pessoa", "Perguntar a alguém na sala de espera", "Pedir-lhe para dizer o nome completo e a data de nascimento"], answer: 3, why: "Quando o paciente diz os dois identificadores, evita-se um \"sim\" nervoso a um nome errado." },
            { objective: "O2", q: "A data de nascimento na requisição não corresponde à que o paciente diz. O que faz?", options: ["Colhe na mesma; o nome corresponde", "Para e pergunta ao seu supervisor", "Muda a data na requisição", "Usa a requisição de outro paciente"], answer: 1, why: "Qualquer diferença para a colheita até o problema ser resolvido." }
          ]
        },
        {
          title: "Os tubos e a ordem de colheita",
          objectives: ["O3"],
          minutes: 6,
          goal: "Pôr um conjunto de tubos na ordem de colheita usando a tabela do seu programa.",
          text: [
            "Os tubos têm tampas de cores que dizem o que há dentro. Alguns têm aditivos que impedem o sangue de coagular; outros ajudam-no a coagular. Se o aditivo de um tubo passar para o tubo seguinte, pode mudar os resultados das análises.",
            "É por isso que os laboratórios seguem uma ordem de colheita, baseada numa norma de laboratório do CLSI. Uma ordem comum é: 1) frascos de hemocultura, 2) azul-claro (citrato de sódio), 3) vermelho ou dourado (tubos de soro, com ou sem gel), 4) verde (heparina), 5) lilás ou roxo (EDTA), 6) cinzento (fluoreto de sódio e oxalato de potássio).",
            "As cores das tampas podem ser diferentes de um fabricante para outro, e os laboratórios podem ter tubos a mais, por isso use sempre a tabela do seu programa ou do seu laboratório. Muitos alunos aprendem uma frase para decorar a ordem e praticam até sair sem pensar.",
            "Os tubos com aditivos são virados com cuidado de cabeça para baixo e de volta (invertidos) várias vezes logo depois de encher, como diz o fabricante do tubo. Nunca os agite."
          ],
          words: [["Aditivo", "um produto químico dentro de um tubo que impede a coagulação ou ajuda o sangue a coagular."], ["Ordem de colheita", "a ordem marcada para encher os tubos, para os aditivos não passarem para o tubo seguinte."], ["Soro", "a parte líquida do sangue depois de coagular."], ["Inverter", "virar um tubo com cuidado de cabeça para baixo e de volta."], ["CLSI", "o Clinical and Laboratory Standards Institute, uma organização que escreve normas de laboratório."]],
          slides: [
            { title: "Porque a ordem é importante", bullets: ["As tampas mostram o que há dentro", "Aditivo que passa para o tubo seguinte muda os resultados"] },
            { title: "Uma ordem de colheita comum", bullets: ["1. Hemoculturas  2. Azul-claro", "3. Vermelho ou dourado  4. Verde", "5. Lilás  6. Cinzento"] },
            { title: "Use a tabela do seu laboratório", bullets: ["As cores podem mudar de fabricante para fabricante", "Os laboratórios podem acrescentar tubos", "Pratique até sair sem pensar"] },
            { title: "Depois de encher", bullets: ["Inverta com cuidado, como diz o fabricante", "Nunca agite"] }
          ],
          tryIt: "Corte seis tiras de papel e pinte-as ou escreva nelas: cinzento, vermelho, hemocultura, lilás, azul-claro, verde. Misture-as e ponha-as na ordem de colheita. Faça isto cinco vezes, cada vez mais depressa. Compare a sua resposta com a ordem desta lição e, mais tarde, com a tabela do seu programa.",
          youCanNow: "pôr os tubos comuns na ordem de colheita, dizer porque a ordem é importante e inverter os tubos com cuidado depois de encher.",
          quickCheck: [
            { objective: "O3", q: "Na ordem de colheita comum, o que vem primeiro?", options: ["Lilás", "Cinzento", "Frascos de hemocultura", "Verde"], answer: 2, why: "As hemoculturas são colhidas primeiro para ficarem estéreis." },
            { objective: "O3", q: "Porque existe uma ordem de colheita?", options: ["Para os aditivos de um tubo não passarem para o seguinte", "Para o paciente ver cores bonitas", "Para usar menos tubos", "Para a colheita ser mais rápida"], answer: 0, why: "Aditivo que passa para o tubo seguinte pode mudar os resultados das análises." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O trabalho, o paciente e os tubos",
        questions: [
          { objective: "O1", q: "Quem dá a credencial de Técnico de Flebotomia Certificado (CPT) descrita neste curso?", options: ["O serviço de viação (DMV)", "Qualquer hospital", "A NHA, a National Healthcareer Association", "O médico do paciente"], answer: 2, why: "A NHA dá a credencial CPT." },
          { objective: "O1", q: "Vive na Califórnia. O que deve verificar também?", options: ["As regras de flebotomia do Departamento de Saúde Pública da Califórnia", "Nada; as regras nacionais chegam", "Um artigo de um blogue", "A sua empresa de telefones"], answer: 0, why: "A Califórnia emite os seus próprios certificados de flebotomia através do CDPH." },
          { objective: "O2", q: "Quantos identificadores do paciente deve usar, no mínimo?", options: ["Nenhum", "Um", "Cinco", "Dois"], answer: 3, why: "Pelo menos dois, normalmente o nome completo e a data de nascimento." },
          { objective: "O2", q: "A requisição diz que a análise precisa de jejum. O que faz?", options: ["Ignora", "Verifica se o paciente fez jejum e segue a regra do seu laboratório", "Diz ao paciente para comer primeiro", "Colhe um tubo a mais"], answer: 1, why: "As instruções especiais da requisição têm de ser verificadas antes da colheita." },
          { objective: "O3", q: "Na ordem de colheita comum, que tubo vem logo antes do verde?", options: ["Lilás", "Cinzento", "Vermelho ou dourado", "Hemocultura"], answer: 2, why: "A ordem é hemocultura, azul-claro, vermelho ou dourado, verde, lilás, cinzento." }
        ]
      }
    },
    {
      name: "Capítulo 2: A colheita, a segurança e as amostras",
      lessons: [
        {
          title: "Os passos de uma colheita de sangue de rotina",
          objectives: ["O4"],
          minutes: 6,
          goal: "Pôr em ordem os passos de uma punção venosa de rotina e dizer quando parar.",
          text: [
            "Esta lição ensina os passos para você os conhecer antes do seu programa de formação. Só os vai fazer com um instrutor a observar. Nunca pratique numa pessoa fora de um programa supervisionado.",
            "Os passos principais: identificar o paciente e verificar a requisição; lavar as mãos e calçar as luvas; posicionar o braço do paciente; pôr o garrote e escolher uma veia (a veia mediana cubital, na dobra do cotovelo, é muitas vezes a primeira escolha); limpar o local e deixar secar ao ar; introduzir a agulha num ângulo baixo; encher os tubos na ordem de colheita; soltar o garrote; tirar a agulha e ativar o dispositivo de segurança; fazer pressão com uma gaze; rotular os tubos à frente do paciente; arrumar e ver como o paciente está.",
            "Muitos programas ensinam a não deixar o garrote mais de cerca de um minuto, porque pode mudar os resultados das análises. Siga as regras do seu programa.",
            "Saiba quando parar: o paciente sente que vai desmaiar ou desmaia, aparece depressa um inchaço (hematoma), o paciente sente uma dor aguda, que corre pelo braço ou como um choque elétrico, ou o paciente pede para parar. Tire o garrote e a agulha, faça pressão, mantenha o paciente em segurança e chame ajuda."
          ],
          steps: ["Identifique o paciente e verifique a requisição.", "Lave as mãos e calce as luvas.", "Posicione o braço e ponha o garrote.", "Escolha a veia, depois limpe o local e deixe secar.", "Introduza a agulha e encha os tubos na ordem de colheita.", "Solte o garrote, tire a agulha e ative o dispositivo de segurança.", "Faça pressão com uma gaze.", "Rotule os tubos à frente do paciente, arrume e veja como o paciente está."],
          words: [["Garrote", "uma faixa apertada à volta do braço para as veias serem mais fáceis de encontrar."], ["Veia mediana cubital", "uma veia na dobra do cotovelo que é muitas vezes a primeira escolha para uma colheita."], ["Hematoma", "um inchaço de sangue debaixo da pele."], ["Síncope", "desmaio: uma perda curta dos sentidos."]],
          slides: [
            { title: "Aprenda os passos, pratique com supervisão", bullets: ["Conheça os passos antes da formação", "Colheitas reais só com um instrutor a observar"] },
            { title: "Antes da agulha", bullets: ["Identifique o paciente, verifique a requisição", "Lave as mãos, calce as luvas", "Garrote, escolha a veia, limpe e deixe secar"] },
            { title: "A colheita e depois", bullets: ["Encha os tubos na ordem de colheita", "Solte o garrote, tire a agulha, ative o dispositivo de segurança", "Pressão, rotule à frente do paciente"] },
            { title: "Quando parar", bullets: ["Desmaio ou sensação de que vai desmaiar", "Inchaço rápido (hematoma)", "Dor aguda, que corre pelo braço ou como choque elétrico", "O paciente pede para parar"] }
          ],
          tryIt: "Sem agulhas. Escreva os oito passos de uma colheita de rotina em oito cartões, misture-os e ponha-os em ordem. Depois, nas costas do último cartão, escreva os quatro sinais que querem dizer parar a colheita, e o que faz a seguir.",
          youCanNow: "dizer por ordem os passos de uma punção venosa de rotina e dizer quando parar uma colheita e o que fazer.",
          quickCheck: [
            { objective: "O4", q: "Que passo vem logo antes de limpar o local?", options: ["Rotular os tubos", "Tirar a agulha", "Fazer pressão", "Pôr o garrote e escolher a veia"], answer: 3, why: "Primeiro encontra a veia, depois limpa o local e deixa secar." },
            { objective: "O4", q: "Durante uma colheita, o paciente diz que se sente a desmaiar. O que faz?", options: ["Acaba depressa", "Para a colheita, mantém o paciente em segurança e chama ajuda", "Pede-lhe para se levantar", "Ignora"], answer: 1, why: "Sentir que vai desmaiar é sinal para parar: garrote e agulha fora, pressão, paciente em segurança, chamar ajuda." }
          ]
        },
        {
          title: "Controlo de infeções e segurança com objetos cortantes",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escolher o passo certo de controlo de infeções e de segurança com objetos cortantes em situações de prática.",
          text: [
            "O sangue pode levar micróbios como a hepatite B, a hepatite C e o VIH, chamados agentes patogénicos transmitidos pelo sangue. A Norma sobre Agentes Patogénicos Transmitidos pelo Sangue da OSHA obriga os empregadores a ter um plano de controlo da exposição, oferecer a vacina da hepatite B, formar os trabalhadores, dar equipamento de proteção e usar agulhas com dispositivos mais seguros.",
            "Os seus hábitos: limpe as mãos antes e depois de cada paciente e quando tira as luvas; use luvas novas para cada paciente; use agulhas com dispositivo de segurança e ative-o logo; ponha as agulhas usadas diretamente num contentor de objetos cortantes, nunca volte a pôr a tampa com a mão e nunca deixe o contentor ficar cheio demais.",
            "Se se picar com uma agulha ou se apanhar sangue na pele ou nos olhos: lave a zona com água e sabão (lave os olhos com água) e informe logo o seu supervisor para ser examinado. Não espere."
          ],
          steps: ["Limpe as mãos antes e depois de cada paciente.", "Luvas novas para cada paciente.", "Ative o dispositivo de segurança logo que a agulha sai.", "Deite a agulha diretamente no contentor de objetos cortantes; nunca volte a pôr a tampa com a mão.", "Exposição: lave a pele ou os olhos e depois informe logo."],
          words: [["Agentes patogénicos transmitidos pelo sangue", "micróbios no sangue que podem causar doenças, como a hepatite B, a hepatite C e o VIH."], ["OSHA", "a Occupational Safety and Health Administration, o serviço federal dos Estados Unidos para a segurança no trabalho."], ["Contentor de objetos cortantes", "uma caixa dura e com rótulo para agulhas usadas e outros objetos que cortam ou picam."], ["EPI", "equipamento de proteção individual, como as luvas."]],
          slides: [
            { title: "Porque é importante", bullets: ["O sangue pode levar hepatite B, hepatite C e VIH", "A norma da OSHA sobre agentes no sangue protege os trabalhadores"] },
            { title: "O empregador tem de", bullets: ["Ter um plano de controlo da exposição e dar formação", "Oferecer a vacina da hepatite B", "Dar EPI e agulhas com dispositivos mais seguros"] },
            { title: "Os seus hábitos", bullets: ["Mãos limpas; luvas novas para cada paciente", "Dispositivo de segurança ativado logo", "Diretamente no contentor; nunca tapar a agulha com a mão"] },
            { title: "Se for exposto", bullets: ["Lave com água e sabão; lave os olhos com água", "Informe logo o seu supervisor"] }
          ],
          sources: [
            { name: "OSHA: agentes patogénicos transmitidos pelo sangue e prevenção de picadas de agulha", url: "https://www.osha.gov/bloodborne-pathogens" }
          ],
          tryIt: "Só prática. Para cada situação, escreva o passo certo: (1) acaba um paciente e o seguinte senta-se, (2) a agulha saiu da veia, (3) o contentor de objetos cortantes está cheio até à linha, (4) sente uma picada através da luva com uma agulha usada. Respostas: limpar as mãos e luvas novas; ativar o dispositivo de segurança e pôr a agulha no contentor; fechá-lo e buscar um novo; lavar a zona e informar logo.",
          youCanNow: "escolher o passo certo de controlo de infeções e de segurança com objetos cortantes e dizer o que fazer depois de uma exposição.",
          quickCheck: [
            { objective: "O5", q: "O que faz com uma agulha usada?", options: ["Ativa o dispositivo de segurança e põe-na diretamente no contentor de objetos cortantes", "Volta a pôr a tampa com a mão", "Põe-na no lixo normal", "Deixa-a no tabuleiro para depois"], answer: 0, why: "Ativar o dispositivo de segurança e pôr diretamente no contentor evita picadas de agulha." },
            { objective: "O5", q: "Pica-se com uma agulha usada. O que faz primeiro?", options: ["Acaba o turno e depois decide", "Esconde para não ter a culpa", "Lava a zona com água e sabão e informa logo", "Põe um penso e esquece"], answer: 2, why: "Lave e depois informe logo, para ser examinado depressa." }
          ]
        },
        {
          title: "Rotular e manusear amostras, e a sua lista de verificação",
          objectives: ["O6"],
          minutes: 5,
          goal: "Decidir se uma amostra está rotulada e manuseada bem o suficiente para o laboratório a aceitar.",
          text: [
            "Uma colheita perfeita não serve de nada se o laboratório não puder usar a amostra. Os laboratórios rejeitam amostras sem rótulo ou com o rótulo errado, no tubo errado, sem sangue suficiente, coaguladas quando não deviam estar, hemolisadas (glóbulos vermelhos rebentados, muitas vezes por uma colheita bruta demais ou por tubos agitados), ou que não foram guardadas à temperatura certa ou no tempo certo.",
            "Rotule cada tubo à frente do paciente, logo depois da colheita, nunca antes. Siga as regras do seu laboratório sobre o que vai no rótulo, normalmente o nome completo do paciente, a data de nascimento ou o número de identificação, a data e a hora, e as suas iniciais. Depois compare o rótulo com a requisição mais uma vez.",
            "Envie as amostras como o seu laboratório diz: algumas vão em gelo, algumas ficam protegidas da luz, algumas têm de chegar ao laboratório dentro de um tempo marcado. Mantenha as informações do paciente privadas pelo caminho.",
            "Agora faça a sua tarefa final: a sua própria lista de verificação de bolso, e também o seu plano de formação e de exame."
          ],
          steps: ["Rotule cada tubo à frente do paciente, logo depois da colheita.", "Inclua o que o seu laboratório exige: nome, data de nascimento ou número, data, hora, as suas iniciais.", "Compare os rótulos com a requisição.", "Manuseie e envie os tubos como o laboratório diz (gelo, luz, tempo).", "Informe qualquer problema em vez de enviar uma amostra má."],
          words: [["Amostra", "uma porção, como um tubo de sangue, enviada para o laboratório."], ["Hemólise", "quando os glóbulos vermelhos rebentam, o que pode estragar os resultados de algumas análises."], ["Amostra rejeitada", "uma amostra que o laboratório não analisa, por isso é preciso colher sangue ao paciente outra vez."]],
          slides: [
            { title: "Porque os laboratórios rejeitam amostras", bullets: ["Sem rótulo ou com rótulo errado", "Tubo errado ou sem sangue suficiente", "Coagulada, hemolisada, temperatura errada ou tarde demais"] },
            { title: "Rotule bem", bullets: ["À frente do paciente, logo depois da colheita", "O que o laboratório exige: nome, data de nascimento ou número, data, hora, iniciais", "Compare com a requisição"] },
            { title: "Manuseie bem", bullets: ["Regras de gelo, luz ou tempo", "Mantenha as informações privadas", "Informe os problemas; nunca envie uma amostra má"] },
            { title: "Tarefa final", bullets: ["A sua lista de bolso, do início até arrumar", "A ordem de colheita do seu laboratório", "O seu plano de formação e de exame, com datas"] }
          ],
          tryIt: "Tarefa final. Faça uma lista de verificação de bolso para uma colheita de rotina: identificação do paciente e verificação da requisição, higiene das mãos e luvas, ordem de colheita, os passos da colheita, quando parar, deitar fora os objetos cortantes, rotular à frente do paciente, manusear e arrumar. Nas costas, escreva o seu plano: programa de formação, exame de certificação, as regras do seu estado e as datas-alvo. Não use nenhuma informação real de pacientes.",
          youCanNow: "rotular e manusear amostras para o laboratório as poder usar, encontrar motivos de rejeição e usar a sua própria lista de verificação e o seu plano.",
          quickCheck: [
            { objective: "O6", q: "Quando rotula os tubos?", options: ["Antes de conhecer o paciente", "No fim do seu turno", "À frente do paciente, logo depois da colheita", "Quando o laboratório telefonar"], answer: 2, why: "Rotular à frente do paciente, logo depois da colheita, evita trocas." },
            { objective: "O6", q: "Um tubo chega ao laboratório sem rótulo. O que acontece?", options: ["O laboratório adivinha de quem é", "O laboratório rejeita-o e é preciso colher sangue ao paciente outra vez", "O laboratório analisa-o na mesma", "O laboratório rotula-o de memória"], answer: 1, why: "As amostras sem rótulo são rejeitadas porque ninguém pode ter a certeza de quem é o sangue." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: A colheita, a segurança e as amostras",
        questions: [
          { objective: "O4", q: "Que veia é muitas vezes a primeira escolha para uma colheita de rotina?", options: ["Uma veia do pé", "Uma veia do pescoço", "Só uma veia das costas da mão", "A veia mediana cubital, na dobra do cotovelo"], answer: 3, why: "A veia mediana cubital é muitas vezes a primeira escolha porque costuma ser fácil de alcançar." },
          { objective: "O4", q: "Qual é um sinal para parar a colheita?", options: ["O paciente sente uma dor aguda, que corre pelo braço ou como um choque elétrico", "O tubo está a encher", "O paciente está calado", "O garrote está posto"], answer: 0, why: "Uma dor que corre pelo braço ou como um choque pode querer dizer que um nervo foi tocado; pare logo." },
          { objective: "O5", q: "Qual é uma prática segura com objetos cortantes?", options: ["Voltar a tapar as agulhas com a mão", "Encher demais o contentor de objetos cortantes", "Pôr as agulhas diretamente no contentor de objetos cortantes", "Deixar as agulhas no tabuleiro"], answer: 2, why: "As agulhas vão diretamente para o contentor de objetos cortantes, nunca tapadas com a mão." },
          { objective: "O5", q: "Segundo a Norma sobre Agentes Patogénicos Transmitidos pelo Sangue da OSHA, que vacina os empregadores têm de oferecer?", options: ["Gripe", "Hepatite B", "Sarampo", "Tétano"], answer: 1, why: "Os empregadores têm de oferecer a vacina da hepatite B aos trabalhadores expostos." },
          { objective: "O6", q: "O que é a hemólise?", options: ["Glóbulos vermelhos que rebentam", "Um tipo de tubo", "Um tipo de sangue", "Uma colheita limpa"], answer: 0, why: "A hemólise é quando os glóbulos vermelhos rebentam, o que pode estragar os resultados de algumas análises." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para Técnico de Flebotomia",
    questions: [
      { objective: "O1", q: "O que é a flebotomia?", options: ["Tirar radiografias", "Dar injeções", "Tirar sangue para análises ou doação", "Preparar receitas de medicamentos"], answer: 2, why: "Flebotomia quer dizer colher sangue." },
      { objective: "O1", q: "Só este curso pela internet pode qualificar você para tirar sangue?", options: ["Sim, depois do questionário", "Não; precisa de um programa de formação supervisionado e de colheitas supervisionadas", "Sim, se vir vídeos", "Sim, em qualquer estado"], answer: 1, why: "As colheitas reais só se aprendem e se provam num programa supervisionado." },
      { objective: "O1", q: "Onde verifica os requisitos atuais de uma certificação?", options: ["Na página oficial da organização que certifica", "Numa publicação nas redes sociais", "Com um amigo", "Num livro antigo"], answer: 0, why: "Os requisitos e as taxas mudam; a página oficial está atualizada." },
      { objective: "O2", q: "Quais são os dois identificadores mais comuns?", options: ["Número do quarto e cor da cama", "Altura e peso", "Nome do médico e nome da análise", "Nome completo e data de nascimento"], answer: 3, why: "O nome completo e a data de nascimento são os dois identificadores habituais." },
      { objective: "O2", q: "O que é uma requisição?", options: ["Um tubo de sangue", "O pedido do laboratório com o paciente e as análises", "Um penso", "Uma conta para pagar"], answer: 1, why: "A requisição é o pedido do laboratório." },
      { objective: "O2", q: "Porque pedir ao paciente para dizer o nome em vez de perguntar \"É o senhor ...?\"", options: ["É mais rápido", "É mais educado", "Um paciente nervoso pode dizer que sim a um nome errado", "A lei manda"], answer: 2, why: "Quando o paciente diz o nome, as trocas são apanhadas." },
      { objective: "O3", q: "Na ordem de colheita comum, que tubo vem em último?", options: ["Azul-claro", "Vermelho", "Verde", "Cinzento"], answer: 3, why: "O cinzento (fluoreto de sódio e oxalato de potássio) vem em último na ordem comum." },
      { objective: "O3", q: "O que vem logo depois das hemoculturas?", options: ["Azul-claro (citrato de sódio)", "Lilás", "Cinzento", "Verde"], answer: 0, why: "O azul-claro vem depois das hemoculturas na ordem comum." },
      { objective: "O3", q: "No seu novo laboratório, as cores das tampas são diferentes. O que segue?", options: ["O slide do curso", "O que se lembra de um trabalho antigo", "A tabela do seu próprio laboratório", "O que for mais rápido"], answer: 2, why: "A tabela de cada laboratório é a regra, porque os fabricantes e os laboratórios são diferentes." },
      { objective: "O3", q: "Como mistura um tubo com aditivo?", options: ["Agita com força", "Inverte com cuidado, como diz o fabricante", "Deixa ficar", "Aquece-o"], answer: 1, why: "Inverter com cuidado mistura o aditivo sem rebentar as células." },
      { objective: "O4", q: "Que passo vem primeiro?", options: ["Identificar o paciente e verificar a requisição", "Pôr o garrote", "Introduzir a agulha", "Rotular os tubos"], answer: 0, why: "Cada colheita começa com o paciente certo e a requisição certa." },
      { objective: "O4", q: "O que é um hematoma?", options: ["Uma cor de tubo", "Um tipo de agulha", "Um local limpo", "Um inchaço de sangue debaixo da pele"], answer: 3, why: "Um hematoma é sangue que se junta debaixo da pele." },
      { objective: "O4", q: "Quando solta o garrote?", options: ["Antes de limpar o local", "Depois de rotular", "Antes de tirar a agulha", "Nunca"], answer: 2, why: "O garrote sai antes de a agulha sair." },
      { objective: "O5", q: "O que são agentes patogénicos transmitidos pelo sangue?", options: ["Micróbios no sangue que podem causar doenças", "Máquinas de laboratório", "Aditivos dos tubos", "Tipos de pensos"], answer: 0, why: "A hepatite B, a hepatite C e o VIH são exemplos." },
      { objective: "O5", q: "A norma de que serviço federal protege os trabalhadores dos agentes patogénicos transmitidos pelo sangue?", options: ["FDA", "OSHA", "DMV", "IRS"], answer: 1, why: "A Norma sobre Agentes Patogénicos Transmitidos pelo Sangue da OSHA trata disto." },
      { objective: "O5", q: "Salpica-lhe sangue para um olho. O que faz?", options: ["Continua a trabalhar", "Esfrega o olho", "Espera até amanhã", "Lava-o com água e informa logo"], answer: 3, why: "Lave logo e informe para ser examinado." },
      { objective: "O5", q: "Quando muda de luvas?", options: ["Uma vez por dia", "Para cada paciente", "Só quando se rasgam", "Nunca"], answer: 1, why: "Luvas novas para cada paciente evitam espalhar micróbios." },
      { objective: "O6", q: "Qual é um motivo para um laboratório rejeitar uma amostra?", options: ["Foi rotulada à frente do paciente", "Foi enviada a tempo", "Está hemolisada", "Está no tubo certo"], answer: 2, why: "A hemólise pode estragar os resultados, por isso o laboratório pode rejeitá-la." },
      { objective: "O6", q: "O que vai no rótulo do tubo?", options: ["O que o seu laboratório exige, normalmente nome, data de nascimento ou número, data, hora e as suas iniciais", "Só a cor do tubo", "O número de telefone do paciente", "Nada"], answer: 0, why: "Os laboratórios definem as regras do rótulo; estes são os dados habituais." },
      { objective: "O6", q: "Nota que um tubo não tem sangue suficiente. O que faz?", options: ["Envia na mesma", "Acrescenta água", "Mistura com outro tubo", "Informa e segue a regra do seu laboratório; nunca envie uma amostra má"], answer: 3, why: "Um tubo sem sangue suficiente pode dar resultados errados; siga a regra do laboratório." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 6, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Plano de formação e de exame", objective: "O1", notYet: "Nenhum programa ou exame indicado, ou requisitos adivinhados.", meets: "Indica um programa de formação, um exame de certificação e os seus requisitos tirados da página oficial, as regras do estado e as datas-alvo.", exceeds: "Compara dois programas, incluindo quantas colheitas supervisionadas cada um oferece." },
      { name: "Identificação do paciente e requisição", objective: "O2", notYet: "A lista salta a identificação do paciente ou a verificação da requisição.", meets: "Começa com dois identificadores ditos pelo paciente e a verificação da requisição, com \"parar se não corresponder\".", exceeds: "Também inclui a pulseira de identificação num hospital e as instruções especiais, como o jejum." },
      { name: "Ordem de colheita", objective: "O3", notYet: "Faltam tubos ou estão fora de ordem.", meets: "Todos os tubos na ordem certa, segundo a tabela do programa ou do laboratório.", exceeds: "Acrescenta porque a ordem é importante e que os tubos se invertem com cuidado." },
      { name: "Passos e sinais para parar", objective: "O4", notYet: "Faltam passos ou estão fora de ordem, ou não há sinais para parar.", meets: "Todos os passos em ordem, com os sinais que querem dizer parar a colheita.", exceeds: "Acrescenta o que fazer quando um paciente desmaia." },
      { name: "Segurança", objective: "O5", notYet: "Nenhum passo de higiene das mãos, luvas ou objetos cortantes.", meets: "Higiene das mãos, luvas novas, dispositivo de segurança, contentor de objetos cortantes e o que fazer depois de uma exposição.", exceeds: "Indica que nunca se volta a tapar a agulha com a mão e que não se enche demais o contentor." },
      { name: "Rotular e manusear", objective: "O6", notYet: "Rotula antes da colheita ou longe do paciente.", meets: "Rotula à frente do paciente depois da colheita, compara com a requisição e segue as regras de manuseamento.", exceeds: "Indica três motivos para o laboratório rejeitar amostras e como evitar cada um." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem num programa de formação em flebotomia aprovado em 90 dias",
      "Alunos que passam num exame de certificação de flebotomia, como a CPT da NHA (dito pelo próprio aluno)",
      "Alunos contratados como técnicos de flebotomia ou assistentes de laboratório em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet para as páginas da NHA e do serviço de saúde do estado",
      "Papel, canetas de cores ou tiras de papel para praticar a ordem de colheita, e cartões para a lista de verificação",
      "A tabela de ordem de colheita do seu programa de formação, se tiver uma",
      "Cerca de 70 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Neste curso não há agulhas, tubos nem sangue; não deixe os alunos praticarem colheitas uns nos outros. A prática com as mãos é num programa aprovado e supervisionado.",
      "Alunos que se sentem mal perto de sangue: deixe-os saltar as imagens e conversem sobre se o trabalho é para eles.",
      "Traga a tabela de ordem de colheita de um programa de formação ou de um laboratório da zona, porque as cores podem ser diferentes.",
      "Faça o jogo de papéis da identificação do paciente em pares, com uma diferença escondida de propósito.",
      "Lembre aos alunos que verifiquem as regras do seu estado; alguns estados, como a Califórnia, emitem os seus próprios certificados.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
