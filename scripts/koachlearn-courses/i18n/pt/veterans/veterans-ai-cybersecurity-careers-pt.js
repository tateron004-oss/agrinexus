"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-ai-cybersecurity-careers.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: US agencies, programs and amounts are kept as in the English.

module.exports = {
  id: "veterans-ai-cybersecurity-careers-pt",
  lang: "pt",
  translationOf: "veterans-ai-cybersecurity-careers",
  category: "Veterans (military)",
  name: "Carreiras em IA e Cibersegurança",
  skills: "Nomear empregos de entrada em cibersegurança, Traduzir a experiência de segurança militar, Encontrar formação oficial em cibersegurança, Estudar segurança com IA, Analisar um email suspeito",
  outcome: "escolher um emprego de entrada em cibersegurança que combine com a sua experiência militar, usar um assistente de IA com segurança para estudar e para verificar um email suspeito, e escrever uma nota de incidente curta e linhas de currículo que o provem.",
  about: [
    "Muitos veteranos já pensam como profissionais de segurança: protegeram informações, cumpriram regras de acesso, fizeram serviço de vigia e comunicaram tudo o que era estranho. Os empregadores de cibersegurança precisam exatamente dessa forma de pensar.",
    "Neste curso vai aprender os principais empregos de entrada em cibersegurança, como a IA os está a mudar, como traduzir o seu serviço para palavras de cibersegurança, onde encontrar formação oficial e como usar a IA como parceira de estudo. No fim, vai verificar um email suspeito como faria um analista júnior.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Não há nenhuma pirataria informática: só pratica com exemplos seguros e inventados."
  ],
  finalTask: "Pegue num email suspeito (um verdadeiro da sua pasta de spam, sem os dados pessoais, ou um exemplo inventado), use um assistente de IA para ajudar a fazer a lista dos sinais de alerta sem clicar em nada e escreva uma nota de incidente de cinco linhas: o que chegou, os sinais de alerta, o risco, o que fez e o que recomenda. Depois escreva duas linhas de currículo que liguem a sua experiência militar a um emprego em cibersegurança.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos e militares em transição para a vida civil interessados num emprego de entrada em cibersegurança. Muitos protegeram informações, cumpriram regras de acesso, fizeram serviço de vigia ou trabalharam em comunicações ou informática durante o serviço.",
    startingPoint: "Trazem uma forma de pensar de segurança (OPSEC, controlo de acesso, comunicação de incidentes) e sabem usar um computador e o email. A maioria não conhece os nomes civis dos empregos de cibersegurança, os caminhos de formação nem como descrever o seu serviço em palavras de cibersegurança, e poucos usaram a IA como parceira de estudo.",
    gap: "Os empregadores de cibersegurança precisam de pessoas que protejam informações e saibam julgar o que a IA produz, e os atacantes já usam IA para escrever burlas convincentes. Os alunos precisam de escolher um emprego de entrada, encontrar formação oficial, estudar com IA com segurança, verificar um email suspeito sem clicar e mostrar as suas habilidades numa nota de incidente e em linhas de currículo.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; os termos de cibersegurança são explicados",
      "Aparelhos: um computador é melhor para passar o rato por cima dos links; um smartphone serve para a maioria das lições",
      "Segurança: nunca clicar em links suspeitos; nunca colar registos reais de uma empresa, palavras-passe ou dados privados numa ferramenta de IA pública",
      "As credenciais de segurança só se indicam da forma que o gabinete de segurança permite",
      "Os valores dos apoios e as listas de programas mudam, por isso os alunos verificam diretamente em va.gov e no NICCS"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à IA e ao Futuro do Trabalho\" ajuda quem ainda não usou assistentes de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com anúncios de emprego reais da sua zona", action: "descrever três empregos de entrada em cibersegurança e como a IA os está a mudar", standard: "numa frase para cada um, usando os anúncios" },
    { id: "O2", condition: "Com as funções de segurança do seu serviço", action: "escrever três habilidades de cibersegurança que já tem, em palavras civis, e ligá-las a uma função do Cyber Career Pathways do NICCS", standard: "indicando os detalhes da credencial de segurança só como o seu gabinete de segurança permite" },
    { id: "O3", condition: "Para a função de cibersegurança que quer", action: "encontrar um caminho de formação e verificar em páginas oficiais o que o VA pode pagar", standard: "confirmando que o programa é aceite antes de começar" },
    { id: "O4", condition: "Com uma ideia de segurança, como a tríade CIA", action: "usar um assistente de IA para aprender a ideia e explicá-la de volta com as suas palavras", standard: "usando só exemplos inventados, com a IA a confirmar a sua explicação" },
    { id: "O5", condition: "Com um email suspeito", action: "fazer a lista dos seus sinais de alerta e escolher uma resposta segura", standard: "sem clicar em nada e trocando os dados privados por marcadores antes de usar a IA" },
    { id: "O6", condition: "Para o email que verificou e o seu serviço", action: "escrever uma nota de incidente de cinco linhas e duas linhas de currículo que liguem o seu serviço ao trabalho em cibersegurança", standard: "curtas, claras e factuais, terminando com o que recomenda" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O seu caminho para a cibersegurança",
      lessons: [
        {
          objectives: ["O1"],
          title: "Empregos em cibersegurança e como a IA os está a mudar",
          minutes: 5,
          goal: "Nomear três empregos de entrada em cibersegurança e dizer o que cada um faz no dia a dia.",
          text: [
            "Cibersegurança quer dizer proteger computadores, redes e informações de pessoas que os querem roubar, alterar ou estragar.",
            "Alguns empregos comuns para começar são: analista de centro de operações de segurança (SOC), que vigia os alertas e verifica se são ataques reais; apoio informático com funções de segurança, que cria contas e resolve problemas de acesso; e analista de governação, risco e conformidade (GRC), que verifica se uma organização cumpre as suas regras de segurança.",
            "Hoje a IA ajuda a ordenar alertas, resumir registos e encontrar atividade fora do normal. Os atacantes também usam IA, por exemplo para escrever emails de burla convincentes. Por isso os empregadores querem pessoas que saibam usar ferramentas de IA e mesmo assim julgar o que é verdadeiro."
          ],
          words: [["SOC", "centro de operações de segurança (em inglês, security operations center): a equipa que vigia e responde a ataques."], ["Alerta", "um aviso que uma ferramenta de segurança dá quando vê algo fora do normal."], ["GRC", "governação, risco e conformidade: garantir que uma organização cumpre as suas regras de segurança e as leis."]],
          slides: [
            { title: "O que é a cibersegurança", bullets: ["Proteger computadores, redes e informações", "De pessoas que os roubam, alteram ou estragam"] },
            { title: "Três empregos para começar", bullets: ["Analista SOC: verifica alertas", "Apoio informático com funções de segurança: contas e acessos", "Analista GRC: verifica se as regras são cumpridas"] },
            { title: "A IA dos dois lados", bullets: ["Defensores: ordenam alertas, resumem registos", "Atacantes: escrevem emails de burla convincentes", "Os empregadores precisam de quem use a IA e a saiba julgar"] }
          ],
          tryIt: "Procure num site de emprego \"SOC analyst\", \"IT support\" e \"GRC analyst\" na sua zona. Para cada um, escreva uma frase sobre o que o emprego faz, usando os anúncios.",
          youCanNow: "nomear três empregos de entrada em cibersegurança e explicar o que cada um faz.",
          quickCheck: [
            { objective: "O1", q: "De que trata a cibersegurança?", options: ["Criar jogos de vídeo", "Vender computadores", "Só reparar impressoras", "Proteger computadores, redes e informações"], answer: 3, why: "A cibersegurança protege computadores, redes e informações contra ataques e erros." },
            { objective: "O1", q: "Leu três anúncios para analista SOC. O que anota?", options: ["Só o salário mais alto", "Uma frase sobre o que o emprego faz no dia a dia, a partir dos anúncios", "Os nomes dos recrutadores", "Nada; os anúncios são todos iguais"], answer: 1, why: "Descrever o trabalho diário a partir de anúncios reais mostra-lhe o que o emprego é de verdade." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Traduzir o seu serviço em habilidades de cibersegurança",
          minutes: 5,
          goal: "Escrever três habilidades de cibersegurança que já tem do serviço militar, em palavras civis.",
          text: [
            "Pode nunca ter trabalhado em cibersegurança, mas provavelmente praticou as bases. A OPSEC (segurança das operações) é proteger informações do inimigo. Fazer serviço de vigia é monitorizar. Comunicar um incidente de segurança à cadeia de comando é resposta a incidentes. Controlar quem entra num edifício é controlo de acesso.",
            "Se teve uma credencial de segurança (security clearance), indique-a no currículo da forma que o seu gabinete de segurança permite (normalmente o nível e se está ativa). Muitos empregadores de cibersegurança dão-lhe valor.",
            "O site NICCS, da Agência de Cibersegurança e Segurança de Infraestruturas dos EUA (CISA), tem uma secção para veteranos e uma ferramenta, a Cyber Career Pathways Tool, que mostra as funções de cibersegurança e as habilidades que cada uma pede. Use-a com o My Next Move for Veterans para encontrar o seu código de função militar."
          ],
          steps: ["Faça a lista de três hábitos de segurança do seu serviço (OPSEC, vigia, controlo de acesso, comunicação de incidentes).", "Pergunte a um assistente de IA: \"Traduza estas funções de segurança militar em habilidades de cibersegurança que os empregadores usam.\"", "Compare com as funções da Cyber Career Pathways Tool do NICCS.", "Fique com as três habilidades que são verdadeiras e fáceis de explicar."],
          words: [["OPSEC", "segurança das operações: manter as informações úteis longe de um adversário."], ["Controlo de acesso", "decidir quem pode entrar num lugar, num sistema ou num ficheiro."], ["Resposta a incidentes", "o que uma equipa faz quando acontece algo mau ou suspeito."], ["NICCS", "National Initiative for Cybersecurity Careers and Studies, o site da CISA sobre carreiras e formação em cibersegurança."]],
          slides: [
            { title: "Você já praticou as bases", bullets: ["OPSEC = proteger informações", "Serviço de vigia = monitorizar", "Comunicar à cadeia de comando = resposta a incidentes"] },
            { title: "Credencial de segurança", bullets: ["Muitos empregadores de cibersegurança dão-lhe valor", "Indique-a como o seu gabinete de segurança permite"] },
            { title: "Ajuda oficial: NICCS (CISA)", bullets: ["Uma secção para veteranos", "Cyber Career Pathways Tool", "Use-a com o My Next Move for Veterans"] }
          ],
          sources: [{ name: "NICCS, Cybersecurity and Infrastructure Security Agency", url: "https://niccs.cisa.gov/" }, { name: "My Next Move for Veterans (U.S. Department of Labor)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Escreva três funções de segurança do seu próprio serviço. Peça a um assistente de IA para as pôr em palavras de cibersegurança e depois compare-as com uma função da Cyber Career Pathways Tool do NICCS.",
          youCanNow: "descrever a sua experiência de segurança militar como habilidades de cibersegurança que um empregador reconhece.",
          quickCheck: [
            { objective: "O2", q: "O serviço de vigia nas forças armadas parece-se mais com que tarefa de cibersegurança?", options: ["Monitorização", "Vender software", "Design gráfico", "Escrever anúncios"], answer: 0, why: "Vigiar tudo o que é fora do normal e comunicá-lo é o que faz a monitorização em cibersegurança." },
            { objective: "O2", q: "Quer pôr a sua credencial de segurança no currículo. O que faz?", options: ["Descreve os programas classificados em que trabalhou", "Deixa de fora todo o seu serviço", "Indica-a só como o seu gabinete de segurança permite, normalmente o nível e o estado", "Pede à IA para adivinhar como a indicar"], answer: 2, why: "As credenciais indicam-se só como o gabinete de segurança permite, nunca com detalhes classificados." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Encontrar formação oficial e ajuda para a pagar",
          minutes: 5,
          goal: "Encontrar um caminho de formação e verificar em páginas oficiais o que o VA pode pagar.",
          text: [
            "O NICCS tem um catálogo de educação e formação (Education and Training Catalog) onde pode procurar cursos de cibersegurança. Os anúncios de emprego dizem que certificação de entrada os empregadores querem; a CompTIA Security+ aparece muitas vezes nos anúncios de entrada, mas leia os anúncios da sua zona.",
            "O VA (Departamento dos Assuntos dos Veteranos dos EUA) pode devolver o custo dos exames de licença e de certificação se tiver um apoio do GI Bill que dê direito. Quando verificámos va.gov em outubro de 2026, o limite era no máximo $2,000 por exame, e isso gasta parte do seu direito. O programa VET TEC 2.0 do VA paga formação de alta tecnologia sem diploma, como programação, software e ciências da informação, com um número limitado de vagas por ano. A página do VET TEC não indicava a cibersegurança pelo nome, por isso verifique se um programa é aceite.",
            "O Serviço de Emprego e Formação para Veteranos (VETS) do Departamento do Trabalho dos EUA gere o Transition Assistance Program (programa de apoio à transição) e encaminha os veteranos para ajuda no emprego e para estágios profissionais pagos."
          ],
          steps: ["Procure um curso de entrada no catálogo de educação e formação do NICCS.", "Veja cinco anúncios de emprego para saber a certificação mais pedida.", "Leia a página de va.gov sobre os custos dos exames e a página do VET TEC 2.0.", "Veja dol.gov/agencies/vets para ajuda no emprego e estágios profissionais pagos."],
          words: [["De entrada", "um emprego para quem está a começar numa área."], ["Estágio profissional pago (apprenticeship)", "um emprego pago em que aprende no próprio trabalho enquanto trabalha."]],
          slides: [
            { title: "Encontrar formação", bullets: ["Catálogo de educação e formação do NICCS", "Os anúncios mostram que certificação é pedida"] },
            { title: "Ajuda para pagar (verifique em va.gov)", bullets: ["Exames: até $2,000 por exame (out. 2026)", "VET TEC 2.0: formação de alta tecnologia, vagas limitadas", "Verifique se o programa é aceite antes de começar"] },
            { title: "Ajuda no emprego", bullets: ["VETS, do Departamento do Trabalho", "Transition Assistance Program", "Estágios profissionais pagos"] }
          ],
          sources: [
            { name: "VA: Licensing and certification test fees", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "U.S. Department of Labor, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "NICCS, Cybersecurity and Infrastructure Security Agency", url: "https://niccs.cisa.gov/" }
          ],
          tryIt: "Encontre um curso de entrada em cibersegurança no catálogo do NICCS e a certificação mais pedida nos anúncios da sua zona. Depois abra a página de va.gov sobre os custos dos exames e anote se o seu apoio dá direito.",
          youCanNow: "encontrar um caminho oficial de formação em cibersegurança e verificar o que o VA pode ajudar a pagar.",
          quickCheck: [
            { objective: "O3", q: "O que é o NICCS?", options: ["Um curso intensivo pago", "Um site gratuito de formação e carreiras em cibersegurança gerido pela CISA", "Uma burla de emprego", "Um formulário do VA"], answer: 1, why: "O NICCS é o site da CISA com um catálogo de formação e uma ferramenta de caminhos de carreira." },
            { objective: "O3", q: "Encontrou um curso de cibersegurança de que gosta. O que verifica antes de contar com o pagamento do VA?", options: ["Nada; o VA paga tudo", "Só o que a IA diz", "Só o que um amigo diz", "Se o programa é aceite, na página oficial de va.gov"], answer: 3, why: "As condições e as listas de programas mudam, por isso confirma em va.gov antes de começar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O seu caminho para a cibersegurança",
        questions: [
          { objective: "O1", q: "O que faz principalmente um analista SOC?", options: ["Vende computadores", "Escreve leis", "Verifica alertas de segurança para ver se são ataques reais", "Só repara impressoras"], answer: 2, why: "O SOC vigia e responde a ataques." },
          { objective: "O1", q: "Como é que os atacantes usam a IA?", options: ["Para escrever emails de burla convincentes", "Não usam", "Só para jogar", "Para reparar a sua rede de graça"], answer: 0, why: "A IA ajuda os atacantes a escrever burlas que parecem verdadeiras." },
          { objective: "O2", q: "A OPSEC nas forças armadas está mais perto de que habilidade de cibersegurança?", options: ["Pintar", "Cozinhar", "Conduzir", "Proteger informações"], answer: 3, why: "A OPSEC é manter as informações longe dos adversários." },
          { objective: "O2", q: "Que site oficial tem uma Cyber Career Pathways Tool?", options: ["Um fórum de jogos", "O NICCS, da CISA", "Um site de compras", "Uma aplicação de música"], answer: 1, why: "O NICCS é o site da CISA sobre carreiras e formação em cibersegurança." },
          { objective: "O3", q: "A página do VET TEC 2.0 não indicava a cibersegurança pelo nome. O que deve fazer?", options: ["Supor que está incluída", "Verificar se o programa é aceite antes de começar", "Desistir da cibersegurança", "Perguntar a um desconhecido na internet"], answer: 1, why: "Confirme sempre na página oficial se um programa é aceite." }
        ]
      }
    },
    {
      name: "Capítulo 2: Praticar como um analista",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usar a IA como parceira de estudo em segurança",
          minutes: 5,
          goal: "Usar um assistente de IA para aprender uma ideia de segurança e explicá-la de volta com as suas palavras.",
          text: [
            "Uma ideia-chave em segurança é a tríade CIA: confidencialidade (só as pessoas certas veem a informação), integridade (a informação não é alterada sem autorização) e disponibilidade (os sistemas funcionam quando as pessoas precisam deles).",
            "Peça a um assistente de IA para explicar uma ideia com um exemplo militar, depois explique-a de volta com as suas palavras e peça à IA para o corrigir. Este \"explicar de volta\" é como sabe que entendeu de verdade.",
            "Nunca cole palavras-passe, registos reais de uma empresa, dados de clientes ou qualquer coisa de um sistema de trabalho numa ferramenta de IA pública. Use exemplos inventados ou limpos. Muitos empregadores têm regras sobre que ferramentas de IA são permitidas."
          ],
          steps: ["Escolha uma ideia, como a tríade CIA.", "Pergunte: \"Explique isto com palavras simples e um exemplo militar.\"", "Explique-a de volta com as suas palavras.", "Pergunte à IA: \"A minha explicação está certa? O que me faltou?\"", "Use só exemplos inventados, nunca dados reais."],
          words: [["Tríade CIA", "confidencialidade, integridade e disponibilidade (em inglês, confidentiality, integrity, availability): os três objetivos da segurança."], ["Explicar de volta (teach-back)", "explicar algo com as suas palavras para provar que o entendeu."], ["Registo (log)", "o registo que um computador guarda do que aconteceu e quando."]],
          slides: [
            { title: "A tríade CIA", bullets: ["Confidencialidade: só as pessoas certas a veem", "Integridade: não é alterada sem autorização", "Disponibilidade: funciona quando é preciso"] },
            { title: "Explicar de volta", bullets: ["A IA explica com um exemplo militar", "Você explica de volta", "A IA verifica o que lhe faltou"] },
            { title: "Deixe os dados reais de fora", bullets: ["Sem palavras-passe, registos reais ou dados de clientes", "Use exemplos inventados", "Cumpra as regras de IA do seu empregador"] }
          ],
          tryIt: "Peça a um assistente de IA para explicar a tríade CIA com um exemplo militar. Depois escreva a sua própria explicação em duas frases e peça-lhe para a verificar.",
          youCanNow: "usar a IA para aprender uma ideia de segurança e provar que a entende explicando-a de volta.",
          quickCheck: [
            { objective: "O4", q: "Na tríade CIA, o que quer dizer confidencialidade?", options: ["Os sistemas estão sempre ligados", "Os dados não podem ser alterados", "Só as pessoas certas podem ver a informação", "Toda a gente pode ver os dados"], answer: 2, why: "Confidencialidade quer dizer que a informação só é vista por quem tem autorização para a ver." },
            { objective: "O4", q: "Quer praticar uma ideia de segurança com IA. Que exemplo usa?", options: ["Um exemplo inventado", "Um registo real do seu trabalho", "A sua palavra-passe do trabalho", "O email de um cliente real"], answer: 0, why: "Os exemplos inventados deixam-no praticar sem partilhar informações reais da empresa ou pessoais." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar um email suspeito",
          minutes: 6,
          goal: "Fazer a lista dos sinais de alerta de um email suspeito e decidir o que fazer, sem clicar em nada.",
          text: [
            "Phishing é uma mensagem falsa que tenta fazê-lo clicar num link, abrir um ficheiro ou dar uma palavra-passe ou dinheiro. Verificar emails comunicados como suspeitos é uma primeira tarefa comum dos analistas júnior.",
            "Sinais de alerta: o endereço de quem envia não corresponde à empresa, a mensagem apressa-o ou ameaça-o, pede uma palavra-passe, um código, um pagamento ou cartões-presente, o texto do link e o endereço real são diferentes, ou há um anexo que não esperava.",
            "Para usar a IA com segurança, copie só o texto da mensagem e troque nomes, endereços de email e números de conta por marcadores como [nome]. Peça à IA a lista dos sinais de alerta. Não clique em links nem abra anexos. Passe o rato por cima de um link (num computador) para ver o seu endereço real."
          ],
          steps: ["Não clique em links nem abra anexos.", "Veja o endereço real de quem envia e os endereços dos links.", "Copie só o texto da mensagem e troque os dados privados por marcadores.", "Pergunte a um assistente de IA: \"Faça a lista dos sinais de alerta de phishing neste email.\"", "Decida: comunicar, apagar ou confirmar com a empresa usando um número que sabe que é verdadeiro."],
          words: [["Phishing", "uma mensagem falsa que tenta enganá-lo para clicar, partilhar uma palavra-passe ou enviar dinheiro."], ["Anexo", "um ficheiro enviado com um email."], ["Marcador", "um substituto como [nome] usado no lugar de dados privados reais."]],
          slides: [
            { title: "Phishing", bullets: ["Uma mensagem falsa que o engana", "Quer um clique, uma palavra-passe ou dinheiro"] },
            { title: "Sinais de alerta", bullets: ["O endereço de quem envia não corresponde", "Apressa-o ou ameaça-o", "Pede uma palavra-passe, um código ou um pagamento", "Link estranho ou anexo inesperado"] },
            { title: "Verificar com a IA em segurança", bullets: ["Nunca clique em links nem abra ficheiros", "Cole só o texto, com marcadores", "Peça à IA a lista dos sinais de alerta"] }
          ],
          tryIt: "Encontre um email suspeito na sua pasta de spam (ou peça a uma IA para escrever um inventado). Sem clicar em nada, faça você a lista dos sinais de alerta, depois pergunte à IA e compare as listas.",
          youCanNow: "reconhecer os sinais de alerta de um email de phishing e verificá-lo com segurança com a ajuda da IA.",
          quickCheck: [
            { objective: "O5", q: "O que é phishing?", options: ["Uma forma segura de partilhar ficheiros", "Um tipo de antivírus", "Uma atualização de segurança", "Uma mensagem falsa que o engana para clicar ou partilhar"], answer: 3, why: "As mensagens de phishing fingem ser verdadeiras para o fazer clicar ou partilhar informações." },
            { objective: "O5", q: "Um email diz \"A sua conta está bloqueada, clique aqui já\". Qual é o primeiro passo seguro?", options: ["Clicar para ver se é verdadeiro", "Não clicar; verificar quem envia e passar o rato por cima para ver o endereço real", "Responder com a sua palavra-passe", "Reencaminhá-lo para toda a gente"], answer: 1, why: "Verifica sem clicar: quem envia, o endereço real do link e a pressão para agir depressa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever uma nota de incidente e contar a sua história",
          minutes: 5,
          goal: "Escrever uma nota de incidente de cinco linhas e duas linhas de currículo que liguem o seu serviço ao trabalho em cibersegurança.",
          text: [
            "Os analistas escrevem notas curtas para que outros possam agir. Uma nota de incidente simples, de cinco linhas, diz: o que chegou, os sinais de alerta, o risco, o que fez e o que recomenda. É como um relatório SALUTE ou um relatório de ocorrência militar: claro, curto e factual.",
            "O seu currículo deve ligar o seu serviço ao trabalho em cibersegurança com ações e resultados, por exemplo: \"Apliquei a OPSEC e o controlo de acesso numa unidade de 120 pessoas; concluí [curso] em segurança de redes, 2026.\"",
            "Use a IA para tornar as suas palavras mais claras, mas cada linha tem de ser verdadeira. Nas entrevistas, conte uma história curta sobre uma vez em que reparou que algo estava errado e o comunicou."
          ],
          steps: ["Escreva as cinco linhas: o que chegou, sinais de alerta, risco, ação, recomendação.", "Mantenha cada linha curta e factual.", "Escreva duas linhas de currículo que liguem o seu serviço a habilidades de cibersegurança.", "Peça a um assistente de IA para as tornar mais claras e depois verifique que cada palavra é verdadeira."],
          words: [["Nota de incidente", "um relatório curto escrito sobre um acontecimento de segurança e o que foi feito."], ["Recomendação", "o que sugere que aconteça a seguir."]],
          slides: [
            { title: "Nota de incidente de cinco linhas", bullets: ["O que chegou", "Sinais de alerta e risco", "O que fez", "O que recomenda"] },
            { title: "Como um relatório de ocorrência", bullets: ["Claro, curto, factual", "Os outros podem agir com base nele"] },
            { title: "A história do seu currículo", bullets: ["Ação no serviço + habilidade de cibersegurança + resultado", "A IA pode torná-la mais clara; cada palavra tem de ser verdadeira"] }
          ],
          tryIt: "Tarefa final: escreva a nota de incidente de cinco linhas sobre o email que verificou na Lição 5 e depois escreva duas linhas de currículo que liguem a sua experiência militar a um emprego em cibersegurança.",
          youCanNow: "verificar um email suspeito como um analista júnior, comunicá-lo com clareza e apresentar o seu serviço como experiência em cibersegurança.",
          quickCheck: [
            { objective: "O6", q: "Com que termina uma nota de incidente de cinco linhas?", options: ["O que recomenda", "A sua opinião sobre quem enviou", "Uma piada", "O texto completo do email"], answer: 0, why: "A nota termina com a sua recomendação para que quem lê saiba o que fazer a seguir." },
            { objective: "O6", q: "Que linha de currículo liga melhor o serviço ao trabalho em cibersegurança?", options: ["\"Fiz coisas de segurança no Exército\"", "\"Trabalhei muito\"", "\"Apliquei o controlo de acesso numa unidade de 90 pessoas; concluí um curso de segurança de redes, 2026\"", "\"Tenho credencial de segurança; pergunte-me sobre as missões\""], answer: 2, why: "Mostra uma função de segurança real, um tamanho e uma formação, em palavras civis." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Praticar como um analista",
        questions: [
          { objective: "O4", q: "Na tríade CIA, \"integridade\" quer dizer:", options: ["Os dados são gratuitos", "Os sistemas são sempre rápidos", "Só os chefes podem entrar", "A informação não é alterada sem autorização"], answer: 3, why: "A integridade trata de a informação ficar correta e sem alterações." },
          { objective: "O5", q: "O que NUNCA deve colar numa ferramenta de IA pública?", options: ["Um registo real de uma empresa ou uma palavra-passe", "Um exemplo inventado", "Uma pergunta geral", "As palavras \"tríade CIA\""], answer: 0, why: "Os dados reais e as palavras-passe têm de ficar privados." },
          { objective: "O5", q: "Um email apressa-o e pede um código enviado para o seu telefone. Isto é:", options: ["Normal", "Uma oferta de emprego", "Um sinal de alerta de phishing", "Uma atualização do sistema"], answer: 2, why: "A pressa e os pedidos de códigos são sinais clássicos de phishing." },
          { objective: "O5", q: "Qual é o primeiro passo seguro com um link suspeito?", options: ["Clicar para ver", "Responder e perguntar", "Reencaminhá-lo para toda a gente", "Não clicar; verificar o endereço real"], answer: 3, why: "Clicar pode infetar o aparelho ou roubar dados." },
          { objective: "O6", q: "Uma boa nota de incidente é:", options: ["Longa e emotiva", "Só um palpite", "Curta, clara e factual", "Enviada ao atacante"], answer: 2, why: "Os outros precisam de factos claros para agir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Carreiras em IA e Cibersegurança",
    questions: [
      { objective: "O1", q: "A cibersegurança trata de:", options: ["Criar jogos de vídeo", "Proteger computadores, redes e informações", "Vender telefones", "Desenhar logótipos"], answer: 1, why: "Protege sistemas e informações contra atacantes." },
      { objective: "O1", q: "Um analista GRC principalmente:", options: ["Verifica se uma organização cumpre as suas regras de segurança", "Repara carros", "Escreve música", "Entrega encomendas"], answer: 0, why: "Governação, risco e conformidade trata de as regras serem cumpridas." },
      { objective: "O1", q: "Como é que os defensores usam a IA?", options: ["Para substituir todas as pessoas", "Para enviar emails de burla", "Para ordenar alertas e resumir registos", "Nunca a usam"], answer: 2, why: "A IA ajuda os defensores a lidar com grandes quantidades de dados." },
      { objective: "O1", q: "Porque é que os empregadores querem pessoas que saibam julgar o que a IA produz?", options: ["A IA pode errar e os atacantes também a usam", "A IA nunca erra", "É a lei", "A IA não sabe ler"], answer: 0, why: "O julgamento humano apanha os erros da IA e as burlas feitas com IA." },
      { objective: "O2", q: "O serviço de vigia nas forças armadas parece-se mais com que tarefa de cibersegurança?", options: ["Programar jogos", "Vender", "Pintar", "Monitorização"], answer: 3, why: "Vigiar tudo o que é fora do normal é monitorizar." },
      { objective: "O2", q: "Comunicar um problema à cadeia de comando é como:", options: ["Marketing", "Resposta a incidentes", "Expedição de encomendas", "Contratação"], answer: 1, why: "A resposta a incidentes começa por comunicar o que aconteceu." },
      { objective: "O2", q: "Como deve indicar uma credencial de segurança no currículo?", options: ["Publicar todos os detalhes na internet", "Da forma que o seu gabinete de segurança permite, normalmente o nível e o estado", "Nunca a mencionar", "Inventar uma"], answer: 1, why: "Siga as orientações do seu gabinete de segurança." },
      { objective: "O3", q: "Quem gere o NICCS?", options: ["Uma operadora de telefones", "Uma empresa de jogos de vídeo", "Um banco", "A CISA, a Agência de Cibersegurança e Segurança de Infraestruturas"], answer: 3, why: "O NICCS é o site da CISA sobre carreiras e formação em cibersegurança." },
      { objective: "O3", q: "Onde descobre que certificação de entrada os empregadores mais querem?", options: ["Em anúncios de emprego reais da sua zona", "Num anúncio qualquer", "Atirando uma moeda ao ar", "Num manual antigo"], answer: 0, why: "Os anúncios de emprego indicam o que os empregadores pedem." },
      { objective: "O3", q: "Segundo va.gov em outubro de 2026, o VA devolve o custo dos exames até:", options: ["Sem limite", "$50 por exame", "$2,000 por exame", "$10,000 por exame"], answer: 2, why: "A página dizia no máximo $2,000 por exame." },
      { objective: "O3", q: "Que agência do Departamento do Trabalho ajuda os veteranos no emprego?", options: ["O Census (recenseamento)", "O serviço de correios", "A NASA", "O VETS, o Serviço de Emprego e Formação para Veteranos"], answer: 3, why: "O VETS gere programas de emprego para veteranos, incluindo o TAP." },
      { objective: "O4", q: "Na tríade CIA, \"disponibilidade\" quer dizer:", options: ["Os dados são muitas vezes alterados", "Os dados são secretos", "Os sistemas funcionam quando as pessoas precisam deles", "Qualquer pessoa pode entrar"], answer: 2, why: "A disponibilidade trata de os sistemas estarem a funcionar quando é preciso." },
      { objective: "O4", q: "O que é explicar de volta (teach-back)?", options: ["Copiar uma resposta", "Explicar uma ideia com as suas palavras para provar que a entende", "Pedir a outra pessoa para estudar", "Saltar uma lição"], answer: 1, why: "Explicar de volta mostra que entendeu de verdade." },
      { objective: "O4", q: "O que é seguro usar quando pratica com IA?", options: ["Um exemplo inventado", "Os registos reais do seu empregador", "Dados de clientes", "A sua palavra-passe"], answer: 0, why: "Os exemplos inventados protegem os dados reais." },
      { objective: "O5", q: "Phishing é:", options: ["Um tipo de firewall", "Uma ferramenta de segurança", "Uma mensagem falsa que o engana para clicar ou partilhar", "O nome de um emprego"], answer: 2, why: "O phishing engana as pessoas para darem acesso ou dinheiro." },
      { objective: "O5", q: "Qual é um sinal de alerta de phishing?", options: ["O endereço de quem envia não corresponde à empresa", "Uma mensagem de um colega que conhece sobre o almoço", "Uma newsletter em que se inscreveu", "Um lembrete de calendário que você criou"], answer: 0, why: "Um endereço de quem envia que não corresponde é um sinal comum." },
      { objective: "O5", q: "Antes de colar um email na IA, deve:", options: ["Abrir o anexo", "Acrescentar a sua palavra-passe", "Clicar em todos os links", "Trocar nomes, emails e números por marcadores"], answer: 3, why: "Os marcadores mantêm os dados privados fora da IA." },
      { objective: "O5", q: "Como vê para onde um link vai realmente num computador?", options: ["Clica nele", "Passa o rato por cima sem clicar", "Responde a quem enviou", "Imprime o email"], answer: 1, why: "Passar o rato por cima mostra o endereço real com segurança." },
      { objective: "O6", q: "Uma nota de incidente de cinco linhas termina com:", options: ["Uma piada", "O que recomenda", "A sua palavra-passe", "Um link para clicar"], answer: 1, why: "A recomendação diz aos outros o que fazer a seguir." },
      { objective: "O6", q: "Que linha de currículo é a mais forte?", options: ["\"Trabalhador.\"", "\"Bom com computadores.\"", "\"Gosto de cibersegurança.\"", "\"Apliquei a OPSEC e o controlo de acesso numa unidade de 120 pessoas; concluí um curso de segurança de redes, 2026.\""], answer: 3, why: "Mostra ação, dimensão e formação." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 8, 11, 12, 14, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Sinais de alerta encontrados", objective: "O5", notYet: "Menos de três sinais de alerta, ou o aluno clicou no link.", meets: "Pelo menos três sinais de alerta na lista, sem clicar em nada.", exceeds: "O aluno encontrou um sinal que a IA não viu, ou a IA encontrou um que o aluno não viu, e ele sabe explicá-lo." },
      { name: "Uso seguro da IA", objective: "O4", notYet: "Foram colados na IA nomes, emails ou números reais.", meets: "Os dados privados foram trocados por marcadores, ou foi usado um exemplo inventado.", exceeds: "O aluno explica que dados tirou e porquê." },
      { name: "Nota de incidente", objective: "O6", notYet: "Faltam linhas, ou há opiniões em vez de factos.", meets: "Cinco linhas curtas e factuais: o que chegou, sinais de alerta, risco, o que fez, o que recomenda.", exceeds: "A recomendação diz um próximo passo claro para a equipa, como comunicar ou bloquear quem enviou." },
      { name: "Linhas de currículo", objective: "O2", notYet: "As linhas são vagas ou têm detalhes classificados.", meets: "Duas linhas que ligam uma função de segurança militar real a um emprego em cibersegurança, em palavras civis.", exceeds: "As linhas usam palavras de uma função do NICCS ou de anúncios de emprego reais." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem num curso ou certificação de cibersegurança em 60 dias (inquérito de seguimento)",
      "Alunos que se candidatam a um emprego de entrada em cibersegurança ou apoio informático em 90 dias",
      "Alunos que dizem ter reconhecido e comunicado um email de phishing em casa ou no trabalho"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet (para passar o rato por cima dos links), ou um smartphone",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Os sites gratuitos do NICCS (CISA) e de va.gov, e anúncios de emprego em cibersegurança da zona",
      "Um email suspeito inventado, ou um da pasta de spam do próprio aluno sem os dados pessoais",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Dê emails de phishing inventados para a aula, para que ninguém precise de abrir mensagens suspeitas reais.",
      "Repita a regra: nunca clicar num link suspeito e nunca colar registos reais, palavras-passe ou dados privados numa IA pública.",
      "Lembre aos alunos com credenciais de segurança que sigam as orientações do seu gabinete de segurança sobre como as indicar.",
      "Avalie a nota de incidente e as linhas de currículo com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Encaminhe os alunos para o VETS, os American Job Centers e o NICCS para os próximos passos."
    ]
  }
};
