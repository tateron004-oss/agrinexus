"use strict";

// Koach Learn course (Portuguese translation of shared/health-literacy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US names, sites and phone numbers are kept as in the English (many readers are immigrants in the US).

module.exports = {
  id: "health-literacy-pt",
  lang: "pt",
  translationOf: "health-literacy",
  category: "Seniors and Technology",
  name: "Literacia em Saúde: Compreender os Seus Cuidados de Saúde",
  skills: "Encontrar informação de saúde de confiança, Preparar uma consulta médica, Fazer perguntas e confirmar que entendeu, Ler rótulos de medicamentos e manter uma lista de medicamentos, Usar resultados de análises e portais do paciente, Compreender as palavras do seguro de saúde",
  outcome: "preparar uma consulta médica com uma nota sobre o sintoma, uma lista de perguntas e uma lista de medicamentos, fazer perguntas até entender, repetir o plano com as suas palavras, e encontrar respostas de confiança e a pessoa certa a quem perguntar sobre medicamentos, resultados de análises e custos.",
  about: [
    "Literacia em saúde quer dizer ser capaz de encontrar, compreender e usar informação de saúde para tomar decisões por si e pelas pessoas de quem cuida. É uma habilidade que qualquer pessoa pode aprender. Até os médicos se confundem com palavras médicas fora da sua área.",
    "Este curso é para todos: pessoas mais velhas que tomam vários medicamentos, jovens que vão ao médico sozinhos pela primeira vez, veteranos que usam os cuidados da VA (o serviço de veteranos dos EUA), trabalhadores que escolhem um plano de saúde, pessoas que voltam da prisão e precisam de recomeçar os cuidados, e qualquer pessoa que já saiu de uma consulta a pensar \"O que é que me disseram?\"",
    "Vai aprender a reconhecer informação de saúde de confiança, preparar uma consulta, fazer boas perguntas, ler o rótulo de um medicamento, usar um portal do paciente e compreender as palavras do seguro. Este curso ensina habilidades; não dá conselhos médicos. Confirme sempre as decisões sobre a sua saúde com o seu médico, enfermeiro ou farmacêutico.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça uma folha de consulta de uma página para uma consulta real ou de prática: uma nota curta sobre o seu sintoma ou preocupação (quando começou, o que melhora ou piora), as suas três perguntas principais e uma lista completa de medicamentos (receitados, de venda livre, vitaminas, suplementos e alergias). Depois da consulta (ou de um ensaio com um amigo), escreva o plano com as suas palavras: qual é o problema, o que precisa de fazer e porquê.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas que tomam vários medicamentos, jovens que vão ao médico sozinhos pela primeira vez, veteranos que usam os cuidados da VA, trabalhadores que escolhem um plano de saúde, pessoas que voltam da prisão e precisam de recomeçar os cuidados, e cuidadores.",
    startingPoint: "Vão ao médico e tomam medicamentos, mas muitas vezes saem das consultas sem certeza do que foi dito, não têm uma lista completa de medicamentos, nunca usaram um portal do paciente e acham confusas as palavras do seguro.",
    gap: "Não compreender a informação de saúde leva a erros com medicamentos, cuidados perdidos e custos inesperados. Os alunos precisam de encontrar informação de confiança, preparar as consultas, perguntar até entender e saber a quem perguntar sobre medicamentos, resultados e custos, para poderem participar nas decisões sobre a sua saúde e a da sua família.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Não é conselho médico; cada decisão de saúde é confirmada com um médico, enfermeiro ou farmacêutico",
      "Privacidade: nenhum detalhe de saúde nem palavra-passe do portal é partilhado na aula ou escrito em ferramentas de IA",
      "Aparelhos: um telefone ou computador; alguns alunos ainda não têm portal do paciente",
      "Língua: alguns alunos precisam de um intérprete nas consultas"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um site ou uma publicação sobre saúde", action: "verificar se a fonte é de confiança e procurar uma palavra de saúde num site de confiança como o medlineplus.gov", standard: "escrevendo o significado com as suas palavras" },
    { id: "O2", condition: "Antes de uma consulta médica", action: "escrever uma folha de consulta com a sua preocupação, as suas três perguntas principais e uma lista completa de medicamentos", standard: "com a data em que o sintoma começou e o que o melhora ou piora" },
    { id: "O3", condition: "Durante uma consulta ou uma simulação", action: "fazer perguntas até entender e repetir o plano com as suas palavras", standard: "dizendo qual é o problema, o que fazer e porquê" },
    { id: "O4", condition: "Com um medicamento, vitamina ou suplemento", action: "ler o rótulo e juntá-lo à sua lista de medicamentos com o nome, a dose, quantas vezes, para que serve e um aviso", standard: "com uma pergunta escrita para o farmacêutico" },
    { id: "O5", condition: "Usando um portal do paciente ou a sua clínica", action: "encontrar um resultado de análise ou uma nota de consulta e escrever perguntas sobre ele", standard: "com pelo menos duas perguntas para o seu profissional de saúde" },
    { id: "O6", condition: "Com palavras comuns do seguro de saúde", action: "explicar palavras como franquia, copagamento e dentro da rede e dizer a quem perguntar sobre custos", standard: "com as suas palavras, sem ajuda" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar-se e falar com o seu profissional de saúde",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar informação de saúde de confiança",
          minutes: 5,
          goal: "Distinguir uma fonte de saúde de confiança de uma que não é.",
          text: [
            "A informação de saúde está em todo o lado: sites, redes sociais, anúncios na televisão, amigos e assistentes de IA. Alguma é excelente. Alguma é antiga, errada ou quer vender-lhe alguma coisa.",
            "Bons lugares gratuitos para começar nos EUA: o MedlinePlus (medlineplus.gov), da Biblioteca Nacional de Medicina, o CDC (cdc.gov, a agência de saúde pública dos EUA) e os Institutos Nacionais de Saúde (nih.gov). Os sites oficiais do governo dos EUA acabam em .gov. Hospitais, universidades e associações médicas conhecidas também costumam ser boas fontes.",
            "Faça quatro perguntas sobre qualquer fonte: Quem escreveu? Quando foi atualizada? Está a tentar vender-me alguma coisa? Diz o mesmo que outras fontes de confiança? Um assistente de IA pode explicar uma palavra médica difícil com palavras simples, mas pode estar errado. Confirme o que ele diz num site de confiança e nunca escreva nele o seu nome completo, a sua identificação ou os números do seu seguro. Para si, a última palavra é do seu médico ou farmacêutico."
          ],
          steps: ["Descubra quem fez a página.", "Procure a data em que foi atualizada.", "Veja se está a vender alguma coisa.", "Compare com o MedlinePlus ou outro site .gov.", "Leve as suas perguntas ao seu médico ou farmacêutico."],
          words: [["Literacia em saúde", "ser capaz de encontrar, compreender e usar informação de saúde para tomar decisões."], ["MedlinePlus", "um site gratuito de informação de saúde do governo dos EUA, da Biblioteca Nacional de Medicina."]],
          slides: [
            { title: "A literacia em saúde é uma habilidade", bullets: ["Encontrar informação de saúde", "Compreendê-la", "Usá-la para tomar decisões"] },
            { title: "Lugares de confiança para começar", bullets: ["medlineplus.gov", "cdc.gov e nih.gov", "Os sites oficiais dos EUA acabam em .gov"] },
            { title: "Quatro perguntas para qualquer fonte", bullets: ["Quem escreveu?", "Quando foi atualizada?", "Está a vender alguma coisa?", "Diz o mesmo que outras fontes de confiança?"] },
            { title: "A IA pode explicar, não decidir", bullets: ["Use-a para explicar palavras difíceis", "Confirme num site de confiança", "A última palavra é do seu médico ou farmacêutico"] }
          ],
          sources: [
            { name: "MedlinePlus: Health Literacy", url: "https://medlineplus.gov/healthliteracy.html" },
            { name: "CDC: What Is Health Literacy?", url: "https://www.cdc.gov/health-literacy/php/about/index.html" }
          ],
          tryIt: "Escolha uma palavra de saúde que já ouviu mas não entende bem (por exemplo tensão arterial, colesterol ou asma). Procure-a no medlineplus.gov e escreva o significado numa frase, com as suas palavras.",
          youCanNow: "encontrar informação de saúde em sites de confiança e verificar qualquer fonte com quatro perguntas simples.",
          quickCheck: [
            { objective: "O1", q: "Que detalhe torna um site de saúde mais de confiança?", options: ["Vende um produto em todas as páginas", "Tem muitos pontos de exclamação", "Mostra quem o escreveu e quando foi atualizado pela última vez", "Promete uma cura"], answer: 2, why: "Saber quem escreveu e quando ajuda a julgar a informação." },
            { objective: "O1", q: "Um amigo partilha uma publicação a dizer que um chá cura a tensão alta. O que faz?", options: ["Deixa de tomar o medicamento da tensão", "Partilha-a com a família", "Compra o chá logo", "Confirma num site de confiança e pergunta ao seu médico"], answer: 3, why: "As afirmações sobre saúde confirmam-se em sites de confiança e com o seu profissional de saúde." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Preparar uma consulta médica",
          minutes: 5,
          goal: "Fazer uma folha de consulta com a sua preocupação, perguntas e lista de medicamentos.",
          text: [
            "As consultas costumam ser curtas. Preparar-se antes ajuda-o a lembrar-se de tudo e ajuda o profissional de saúde a entendê-lo. O MedlinePlus aconselha a escrever as suas perguntas, descrever os sintomas por escrito e fazer a lista das suas alergias e de todos os medicamentos, ervas, vitaminas e suplementos que toma.",
            "Para um sintoma, escreva: o que é, quando começou, quantas vezes acontece, o que o melhora ou piora, e o que já experimentou. Ponha primeiro as suas três perguntas principais, para que as mais importantes tenham resposta.",
            "Pode levar um amigo ou familiar de confiança para ouvir e tomar notas. Se precisar de um intérprete, peça ao consultório com antecedência para o arranjar. Leve o seu cartão do seguro ou do Medicare (o seguro de saúde do governo dos EUA para pessoas mais velhas), um documento de identificação com fotografia e a sua lista de medicamentos ou as próprias embalagens."
          ],
          steps: ["Escreva a sua preocupação: o quê, quando começou, quantas vezes, o que ajuda ou piora.", "Escreva as suas três perguntas principais.", "Faça a lista de todos os medicamentos, vitaminas, suplementos e alergias.", "Peça a alguém para ir consigo, se isso ajudar.", "Peça um intérprete com antecedência, se precisar."],
          words: [["Profissional de saúde", "um médico, enfermeiro especializado, assistente médico ou outro profissional que presta cuidados de saúde."], ["Sintoma", "uma mudança no seu corpo ou na sua mente que você nota, como dor, tosse ou cansaço."], ["Suplemento", "uma vitamina, mineral, erva ou outro produto que toma para completar a sua alimentação."]],
          slides: [
            { title: "Porquê preparar-se", bullets: ["As consultas são curtas", "Você lembra-se de tudo", "O profissional de saúde entende-o melhor"] },
            { title: "Descreva o seu sintoma", bullets: ["O que é e quando começou", "Quantas vezes acontece", "O que o melhora ou piora"] },
            { title: "Leve consigo", bullets: ["As três perguntas principais", "A lista de medicamentos ou as embalagens", "Cartão do seguro ou do Medicare e identificação"] },
            { title: "Não precisa de ir sozinho", bullets: ["Leve alguém para tomar notas", "Peça um intérprete com antecedência"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Comece a sua folha de consulta. Escreva uma preocupação real ou de prática, com quando começou e o que a melhora ou piora, e depois as suas três perguntas principais.",
          youCanNow: "preparar uma folha de consulta com a sua preocupação, as suas perguntas principais e o que levar.",
          quickCheck: [
            { objective: "O2", q: "Porque levar uma lista completa de medicamentos à consulta?", options: ["Para o médico confirmar que tudo o que toma pode ser tomado junto com segurança", "Porque é obrigatório para entrar", "Para não ter de falar", "Para mostrar que toma muitos"], answer: 0, why: "Uma lista completa ajuda o profissional de saúde a evitar misturas perigosas e erros." },
            { objective: "O2", q: "Tem cinco preocupações mas a consulta é curta. O que faz?", options: ["Não fala de nenhuma", "Escreve as três perguntas principais e faz primeiro a mais importante", "Fala muito depressa sobre as cinco", "Guarda todas para o ano que vem"], answer: 1, why: "Pôr primeiro as perguntas principais garante que as mais importantes têm resposta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Durante a consulta: fazer perguntas e confirmar que entendeu",
          minutes: 5,
          goal: "Fazer perguntas até entender e repetir o plano com as suas palavras.",
          text: [
            "Você tem o direito de entender os seus cuidados. Se o profissional de saúde usar uma palavra que não conhece, diga: \"Pode explicar isso com palavras mais simples?\" Se falar depressa demais, diga: \"Pode falar mais devagar?\" Pode pedir-lhe para escrever as instruções.",
            "Três perguntas servem para a maioria das consultas: Qual é o meu problema principal? O que preciso de fazer? Porque é importante eu fazer isto? Continue a perguntar até conseguir responder às três.",
            "Antes de sair, use o método de repetir: diga o plano com as suas palavras. \"Então tomo um comprimido todas as manhãs com comida e volto daqui a duas semanas. Se o tornozelo inchar, ligo para si.\" Se faltou alguma coisa, o profissional de saúde pode corrigir logo ali. Pergunte também como contactar o consultório mais tarde e o que fazer se piorar."
          ],
          steps: ["Pergunte o que quer dizer qualquer palavra que não conhece.", "Faça as três perguntas: problema principal, o que fazer, porquê.", "Tome notas ou peça à pessoa que o acompanha para as tomar.", "Diga o plano com as suas palavras (método de repetir).", "Pergunte como contactar o consultório e o que fazer se piorar."],
          words: [["Método de repetir (teach-back)", "dizer o plano com as suas palavras para confirmar que o entendeu."], ["Seguimento", "uma consulta ou chamada mais tarde para ver como está."]],
          slides: [
            { title: "Pode perguntar", bullets: ["\"Pode explicar isso com palavras mais simples?\"", "\"Pode falar mais devagar?\"", "\"Pode escrever isso?\""] },
            { title: "Três perguntas-chave", bullets: ["Qual é o meu problema principal?", "O que preciso de fazer?", "Porque é importante?"] },
            { title: "Método de repetir", bullets: ["Diga o plano com as suas palavras", "O profissional de saúde corrige o que faltou"] },
            { title: "Antes de sair", bullets: ["Como contacto o consultório?", "E se piorar?"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Faça uma simulação com um amigo ou diga em voz alta: o seu amigo lê uma instrução curta do médico (por exemplo \"Tome isto duas vezes por dia durante 10 dias e acabe a embalagem toda\"). Faça uma pergunta sobre ela e depois repita-a com as suas palavras.",
          youCanNow: "fazer perguntas claras durante uma consulta e usar o método de repetir para confirmar que entendeu o plano.",
          quickCheck: [
            { objective: "O3", q: "Qual é uma das três perguntas-chave para fazer numa consulta?", options: ["Quanto ganha o médico?", "Porque é importante eu fazer isto?", "Posso deixar de tomar o medicamento?", "Quanto tempo vou esperar?"], answer: 1, why: "As três perguntas-chave são: qual é o meu problema principal, o que preciso de fazer e porque é importante." },
            { objective: "O3", q: "O médico diz para tomar um comprimido \"duas vezes por dia com comida\". O que faz antes de sair?", options: ["Acena com a cabeça e sai", "Pergunta a um desconhecido na sala de espera", "Repete: \"Então tomo ao pequeno-almoço e ao jantar, com comida, certo?\"", "Tenta adivinhar mais tarde em casa"], answer: 2, why: "O método de repetir confirma que entendeu bem o plano." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar-se e falar com o seu profissional de saúde",
        questions: [
          { objective: "O1", q: "Que site é um lugar de confiança para começar a procurar informação de saúde?", options: ["Uma publicação de um desconhecido nas redes sociais", "Um anúncio de um comprimido milagroso", "medlineplus.gov", "Um comentário qualquer num fórum"], answer: 2, why: "O MedlinePlus é um site de saúde gratuito do governo dos EUA, da Biblioteca Nacional de Medicina." },
          { objective: "O2", q: "O que deve escrever sobre um sintoma antes da consulta?", options: ["Quando começou e o que o melhora ou piora", "Nada; o médico adivinha", "Só a sua cor preferida", "O número da sua conta bancária"], answer: 0, why: "Detalhes claros sobre o sintoma ajudam o profissional de saúde a entendê-lo." },
          { objective: "O2", q: "O que deve estar na sua lista de medicamentos?", options: ["Só os medicamentos receitados", "Só os comprimidos que tomou hoje", "Nada; a farmácia sabe", "Medicamentos receitados, medicamentos de venda livre, vitaminas, suplementos e alergias"], answer: 3, why: "Tudo o que toma pode importar, incluindo vitaminas e suplementos." },
          { objective: "O3", q: "O médico usa uma palavra que não entende. O que faz?", options: ["Acena e finge que entendeu", "Pede-lhe para explicar com palavras mais simples", "Sai da consulta", "Procura a palavra no ano que vem"], answer: 1, why: "Tem o direito de entender os seus cuidados; perguntar é normal." },
          { objective: "O3", q: "O que é o método de repetir?", options: ["Ensinar medicina ao médico", "Pedir o dinheiro de volta", "Dizer o plano com as suas palavras", "Ler o plano em silêncio"], answer: 2, why: "O método de repetir confirma que entendeu, para que os erros se corrijam logo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a sua informação de saúde",
      lessons: [
        {
          objectives: ["O4"],
          title: "Medicamentos: ler o rótulo e manter uma lista",
          minutes: 5,
          goal: "Ler o rótulo de um medicamento e manter uma lista de medicamentos atualizada.",
          text: [
            "Os erros com medicamentos são comuns e muitas vezes podem ser evitados. O MedlinePlus aconselha a manter uma lista de todos os medicamentos, com a dose e a hora em que os toma, incluindo produtos de venda livre, vitaminas, suplementos e ervas, mais as alergias, e a levá-la a todas as consultas.",
            "Leia o rótulo todas as vezes, não de memória. Procure: o nome do medicamento, quanto tomar (a dose), quantas vezes e quando, durante quanto tempo, os avisos (por exemplo \"pode causar sonolência\" ou \"tomar com comida\") e a informação sobre a renovação da receita e o prazo de validade. Nos EUA, os medicamentos de venda livre têm um rótulo \"Drug Facts\" com os usos, os avisos e as instruções.",
            "O seu farmacêutico é um especialista gratuito. Pergunte: Porque estou a tomar isto? Que efeitos secundários são comuns e o que devo fazer? Quando devo parar? É seguro com os meus outros medicamentos e suplementos? Preciso de evitar algum alimento ou álcool? Nunca pare nem mude um medicamento receitado sem perguntar primeiro ao seu médico ou farmacêutico."
          ],
          steps: ["Leia o nome, a dose, quantas vezes e durante quanto tempo.", "Leia os avisos.", "Junte-o à sua lista de medicamentos com a dose e a hora.", "Faça as suas perguntas ao farmacêutico.", "Leve a lista a todas as consultas e atualize-a quando alguma coisa mudar."],
          words: [["Dose", "quanto de um medicamento se toma de cada vez."], ["Venda livre", "medicamento que pode comprar sem receita."], ["Efeito secundário", "um efeito extra de um medicamento que você não queria, como dor de estômago."]],
          slides: [
            { title: "Leia o rótulo todas as vezes", bullets: ["Nome e dose", "Quantas vezes, quando e durante quanto tempo", "Avisos: sonolência, tomar com comida"] },
            { title: "Mantenha uma lista de medicamentos", bullets: ["Todos os medicamentos, vitaminas, suplementos e ervas", "Dose e hora do dia", "Alergias; leve-a a todas as consultas"] },
            { title: "Pergunte ao seu farmacêutico", bullets: ["Porque estou a tomar isto? Que efeitos secundários?", "É seguro com os meus outros medicamentos?", "Algum alimento ou álcool a evitar?"] },
            { title: "Nunca mude por conta própria", bullets: ["Pergunte ao médico ou farmacêutico antes de parar ou mudar"] }
          ],
          sources: [{ name: "MedlinePlus: Medication Errors", url: "https://medlineplus.gov/medicationerrors.html" }],
          tryIt: "Pegue num medicamento, vitamina ou suplemento que você (ou um familiar) usa. Leia o rótulo e junte-o à sua lista de medicamentos: nome, dose, quantas vezes, para que serve e um aviso. Escreva uma pergunta para fazer a um farmacêutico.",
          youCanNow: "ler o rótulo de um medicamento, manter uma lista completa de medicamentos e fazer as perguntas certas ao farmacêutico.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer \"dose\" no rótulo de um medicamento?", options: ["Quanto medicamento tomar de cada vez", "O preço do medicamento", "A data em que foi feito", "O nome da farmácia"], answer: 0, why: "A dose é a quantidade que toma de cada vez." },
            { objective: "O4", q: "Começa a tomar uma vitamina nova. O que faz com a sua lista de medicamentos?", options: ["Deixa-a de fora porque as vitaminas não contam", "Espera até ao seu próximo aniversário", "Só conta aos amigos", "Junta-a à lista e pergunta ao farmacêutico se é segura com os seus outros medicamentos"], answer: 3, why: "As vitaminas e os suplementos fazem parte da lista e podem misturar-se com os medicamentos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Resultados de análises, portais do paciente e os seus registos",
          minutes: 5,
          goal: "Encontrar um resultado de análise num portal do paciente e escrever perguntas sobre ele.",
          text: [
            "Muitas clínicas e hospitais têm um portal do paciente: um site ou aplicação segura onde pode ver resultados de análises, notas das consultas e as próximas marcações, pedir a renovação de receitas e enviar mensagens à sua equipa de saúde. O MedlinePlus recomenda aprender a aceder aos seus registos para acompanhar resultados, planos de tratamento e medicamentos. Os veteranos podem usar as ferramentas online da VA; pergunte à sua equipa da VA como se inscrever.",
            "Os resultados das análises mostram muitas vezes o seu número ao lado de um intervalo \"normal\" ou de referência. Um resultado marcado como alto ou baixo nem sempre é um problema; depende de si, da sua história e de outros resultados. Não entre em pânico e não mude o tratamento por conta própria. Escreva perguntas e pergunte ao seu profissional de saúde o que o resultado quer dizer para si.",
            "Proteja o seu portal: use uma palavra-passe forte, nunca a partilhe e termine a sessão em computadores partilhados ou da biblioteca. Se precisar de ajuda para se inscrever, ligue para a receção da clínica. Muitas vezes um familiar ou cuidador pode ter acesso com a sua autorização; pergunte no consultório como."
          ],
          steps: ["Pergunte à sua clínica como se inscrever no portal do paciente.", "Encontre o seu resultado de análise mais recente.", "Veja o seu número e o intervalo de referência.", "Escreva perguntas: O que quer isto dizer para mim? Preciso de fazer alguma coisa?", "Envie a pergunta pelo portal ou faça-a na próxima consulta."],
          words: [["Portal do paciente", "um site ou aplicação segura onde vê os seus registos de saúde e envia mensagens à sua equipa de saúde."], ["Intervalo de referência", "os resultados habituais na maioria das pessoas saudáveis."]],
          slides: [
            { title: "O que faz um portal do paciente", bullets: ["Ver resultados de análises e notas das consultas", "Pedir renovação de receitas e ver marcações", "Enviar mensagens à sua equipa de saúde"] },
            { title: "Ler um resultado", bullets: ["O seu número e um intervalo de referência", "Alto ou baixo nem sempre é um problema", "Pergunte o que quer dizer para si"] },
            { title: "Proteja-o", bullets: ["Palavra-passe forte, nunca partilhada", "Termine a sessão em computadores partilhados", "Pergunte à clínica sobre o acesso de um cuidador"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Se tem um portal do paciente, entre e encontre um resultado ou uma nota de consulta recente. Se não tem, ligue ou pergunte à sua clínica como se inscrever. Em qualquer caso, escreva duas perguntas que faria sobre um resultado de análise.",
          youCanNow: "usar um portal do paciente com segurança, ler um resultado ao lado do seu intervalo de referência e perguntar ao seu profissional de saúde o que quer dizer para si.",
          quickCheck: [
            { objective: "O5", q: "O que pode normalmente fazer num portal do paciente?", options: ["Mudar as suas próprias receitas", "Ver os seus registos e enviar mensagens à sua equipa de saúde", "Encomendar medicamentos sem receita", "Ler os resultados de outros doentes"], answer: 1, why: "Um portal é um lugar seguro para ver os seus registos e enviar mensagens à sua equipa de saúde." },
            { objective: "O5", q: "Usou um computador da biblioteca para ver o seu portal. O que faz quando acaba?", options: ["Deixa aberto para a próxima vez", "Escreve a palavra-passe num papel ao lado do computador", "Termina a sessão e fecha o navegador", "Só desliga o ecrã"], answer: 2, why: "Terminar a sessão em computadores partilhados mantém privados os seus registos de saúde." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Palavras do seguro de saúde e o seu kit de consulta",
          minutes: 6,
          goal: "Explicar palavras comuns do seguro de saúde e saber a quem perguntar sobre custos.",
          text: [
            "As palavras sobre custos confundem quase toda a gente. O HealthCare.gov (o site oficial de seguros de saúde dos EUA) define-as. O prémio é o que paga pelo seu plano, normalmente todos os meses. A franquia (em inglês \"deductible\") é o valor que paga pelos cuidados cobertos antes de o seu plano começar a pagar. O copagamento (\"copay\") é um valor fixo em dólares que paga por um serviço coberto, como uma consulta. Os profissionais dentro da rede (\"in-network\") têm um contrato com o seu plano e normalmente custam-lhe menos.",
            "Antes de uma análise ou consulta, pode perguntar: \"Este profissional está dentro da minha rede?\" \"Mais ou menos quanto vou pagar?\" Ligue para o número do seu cartão do seguro. Medicare: ligue para 1-800-MEDICARE (1-800-633-4227), aberto 24 horas por dia, 7 dias por semana, exceto alguns feriados federais. Os veteranos podem perguntar à VA sobre os seus benefícios. Muitos centros de saúde comunitários cobram de acordo com o rendimento; procure em findahealthcenter.hrsa.gov e pergunte ao centro quanto custa.",
            "Agora junte tudo. O seu kit de consulta é a sua folha de consulta (preocupação e perguntas principais), a sua lista de medicamentos, o seu cartão do seguro e a identificação, e uma caneta ou o telefone para notas. Depois da consulta, escreva o plano com as suas palavras."
          ],
          steps: ["Aprenda quatro palavras: prémio, franquia, copagamento, dentro da rede.", "Antes dos cuidados, pergunte se o profissional está dentro da sua rede e quanto pode pagar.", "Ligue para o número do seu cartão, ou para 1-800-MEDICARE se tiver Medicare.", "Prepare o seu kit de consulta: folha de consulta, lista de medicamentos, cartão, identificação, notas.", "Depois da consulta, escreva o plano com as suas palavras."],
          words: [["Prémio", "o que paga pelo seu plano de saúde, normalmente todos os meses."], ["Franquia (deductible)", "o que paga pelos cuidados cobertos antes de o seu plano começar a pagar."], ["Copagamento (copay)", "um valor fixo em dólares que paga por um serviço coberto."], ["Dentro da rede (in-network)", "profissionais que têm um contrato com o seu plano; normalmente custam-lhe menos."]],
          slides: [
            { title: "Quatro palavras do seguro", bullets: ["Prémio: o que paga pelo plano, muitas vezes por mês", "Franquia: o que paga antes de o plano pagar", "Copagamento: um valor fixo por serviço", "Dentro da rede: profissionais com contrato, normalmente mais baratos"] },
            { title: "Pergunte antes de ir", bullets: ["\"Este profissional está dentro da minha rede?\"", "\"Mais ou menos quanto vou pagar?\"", "Ligue para o número do seu cartão"] },
            { title: "Onde perguntar", bullets: ["Medicare: 1-800-633-4227, 24 horas por dia, 7 dias por semana", "Veteranos: pergunte à VA", "Centros de saúde comunitários: findahealthcenter.hrsa.gov"] },
            { title: "O seu kit de consulta", bullets: ["Folha de consulta e lista de medicamentos", "Cartão do seguro e identificação", "Notas; escreva o plano depois"] }
          ],
          sources: [
            { name: "HealthCare.gov Glossary: Deductible", url: "https://www.healthcare.gov/glossary/deductible/" },
            { name: "HealthCare.gov Glossary: Copayment", url: "https://www.healthcare.gov/glossary/co-payment/" },
            { name: "Medicare.gov: Talk to Someone", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "HRSA: Find a Health Center", url: "https://findahealthcenter.hrsa.gov/" }
          ],
          tryIt: "Tarefa final: acabe a sua folha de consulta de uma página com a sua preocupação, as suas três perguntas principais e a sua lista completa de medicamentos. Depois de uma consulta real, ou de um ensaio com um amigo a fazer de médico, escreva o plano com as suas palavras: o problema principal, o que fazer e porquê.",
          youCanNow: "explicar palavras comuns do seguro, perguntar sobre custos antes dos cuidados e levar um kit de consulta completo a todas as consultas.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer \"dentro da rede\"?", options: ["O profissional está nas redes sociais", "O profissional está no seu bairro", "O profissional é gratuito", "O profissional tem um contrato com o seu plano e normalmente custa-lhe menos"], answer: 3, why: "Os profissionais dentro da rede têm um contrato com o seu plano." },
            { objective: "O6", q: "Não sabe quanto uma consulta lhe vai custar. O que faz?", options: ["Pergunta ao seu plano ou ao consultório sobre os custos antes da consulta", "Falta à consulta", "Adivinha e espera pelo melhor", "Pergunta a um desconhecido na internet"], answer: 0, why: "O seu plano ou o consultório podem dizer-lhe os custos com antecedência." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a sua informação de saúde",
        questions: [
          { objective: "O4", q: "Antes de tomar uma dose de um medicamento, deve:", options: ["Confiar na memória", "Ler o rótulo todas as vezes", "Adivinhar a dose", "Tomar um comprimido de um amigo"], answer: 1, why: "Ler o rótulo todas as vezes evita erros." },
          { objective: "O4", q: "Quer parar um medicamento receitado por causa de um efeito secundário. O que faz primeiro?", options: ["Para logo", "Toma o dobro da dose", "Dá-o a um amigo", "Pergunta ao seu médico ou farmacêutico"], answer: 3, why: "Nunca pare nem mude um medicamento receitado sem confirmar primeiro." },
          { objective: "O5", q: "O que é um portal do paciente?", options: ["Um site ou aplicação segura para ver os seus registos e enviar mensagens à sua equipa de saúde", "Uma porta do hospital", "Um grupo nas redes sociais", "Um cupão de desconto da farmácia"], answer: 0, why: "Os portais mostram resultados e deixam-no enviar mensagens à sua equipa." },
          { objective: "O5", q: "Um resultado de análise aparece marcado como \"alto\" no seu portal. Qual é o melhor passo a seguir?", options: ["Entrar em pânico", "Mudar o medicamento por conta própria", "Escrever as suas perguntas e perguntar ao profissional de saúde o que quer dizer para si", "Ignorá-lo para sempre"], answer: 2, why: "Alto ou baixo nem sempre é um problema; o seu profissional de saúde explica o que quer dizer para si." },
          { objective: "O6", q: "O que é a franquia (deductible)?", options: ["Um valor fixo por cada consulta", "O custo mensal do seu plano", "Um cupão de desconto", "O que paga pelos cuidados cobertos antes de o seu plano começar a pagar"], answer: 3, why: "O HealthCare.gov define a franquia como o que paga antes de o seu plano começar a pagar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Literacia em Saúde: Compreender os Seus Cuidados de Saúde",
    questions: [
      { objective: "O1", q: "Literacia em saúde quer dizer:", options: ["Ser médico", "Ser capaz de encontrar, compreender e usar informação de saúde", "Ler depressa", "Conhecer todas as palavras médicas"], answer: 1, why: "É a habilidade de encontrar, compreender e usar informação de saúde." },
      { objective: "O1", q: "Os sites oficiais do governo dos EUA acabam em:", options: [".gov", ".shop", ".win", ".xyz"], answer: 0, why: "Sites .gov como medlineplus.gov e cdc.gov são oficiais." },
      { objective: "O1", q: "Que pergunta ajuda a julgar um site de saúde?", options: ["Tem muitas cores?", "Tem muitos anúncios?", "Quando foi atualizado pela última vez?", "É comprido?"], answer: 2, why: "A informação antiga pode estar errada; veja a data de atualização." },
      { objective: "O1", q: "Um assistente de IA explica uma palavra médica. O que deve fazer?", options: ["Escrever o número do seu seguro para ter uma resposta melhor", "Mudar o tratamento com base nisso", "Partilhá-lo como se fosse certo", "Confirmar num site de confiança e perguntar ao seu profissional de saúde"], answer: 3, why: "A IA pode estar errada; confirme e deixe a última palavra ao seu profissional de saúde." },
      { objective: "O2", q: "O que deve estar numa folha de consulta?", options: ["As suas três perguntas principais", "A palavra-passe do seu banco", "Uma lista de compras", "Nada"], answer: 0, why: "Escrever as perguntas antes garante que as mais importantes têm resposta." },
      { objective: "O2", q: "Precisa de um intérprete para uma consulta. Quando deve pedir?", options: ["Nunca", "Depois da consulta", "Com antecedência, quando marca a consulta", "Só se o médico oferecer"], answer: 2, why: "Pedir com antecedência deixa o consultório arranjar um." },
      { objective: "O2", q: "Qual destas descreve bem um sintoma?", options: ["\"Sinto-me mal.\"", "\"Dor forte no joelho há 2 semanas, pior nas escadas, melhor quando descanso.\"", "\"Há alguma coisa errada.\"", "\"O mesmo de sempre.\""], answer: 1, why: "Diz o quê, há quanto tempo e o que melhora ou piora." },
      { objective: "O2", q: "Quem pode levar consigo a uma consulta para ajudar?", options: ["Nunca é permitido levar ninguém", "Só um advogado", "Só uma criança com menos de 5 anos", "Um amigo ou familiar de confiança para tomar notas"], answer: 3, why: "Quem o acompanha pode ouvir e tomar notas." },
      { objective: "O3", q: "Qual é uma das três perguntas-chave para fazer numa consulta?", options: ["O que preciso de fazer?", "Que carro tem?", "Quantos anos tem este prédio?", "Posso faltar à consulta de seguimento?"], answer: 0, why: "Problema principal, o que fazer e porquê: estas três servem para a maioria das consultas." },
      { objective: "O3", q: "O médico está a falar depressa demais. Pode dizer:", options: ["Nada", "\"Depois eu descubro.\"", "\"Pode falar mais devagar e escrever isso?\"", "\"Deixe estar.\""], answer: 2, why: "Pedir para falar mais devagar ou escrever é um direito seu." },
      { objective: "O3", q: "Dizer o plano com as suas palavras chama-se:", options: ["Renovação de receita", "Método de repetir", "Franquia", "Copagamento"], answer: 1, why: "O método de repetir confirma que entendeu antes de sair." },
      { objective: "O3", q: "Antes de sair de uma consulta, também deve perguntar:", options: ["Nada", "Onde fica a cantina", "Só por amostras grátis", "Como contactar o consultório e o que fazer se piorar"], answer: 3, why: "Saber como os contactar e quando ligar mantém-no seguro." },
      { objective: "O4", q: "Quem é um especialista gratuito nos seus medicamentos?", options: ["Um influenciador das redes sociais", "Um anúncio na internet", "O seu farmacêutico", "Um desconhecido na paragem do autocarro"], answer: 2, why: "Os farmacêuticos respondem a perguntas sobre medicamentos sem cobrar." },
      { objective: "O4", q: "\"Dose\" quer dizer:", options: ["Quanto medicamento tomar de cada vez", "O preço de um medicamento", "O nome da farmácia", "O prazo de validade"], answer: 0, why: "A dose é a quantidade de cada vez." },
      { objective: "O4", q: "Que pergunta deve fazer ao farmacêutico sobre um medicamento novo?", options: ["De que cor é a embalagem?", "Posso partilhá-lo com a minha família?", "Posso parar quando quiser?", "É seguro com os meus outros medicamentos e suplementos?"], answer: 3, why: "Os medicamentos e os suplementos podem afetar-se uns aos outros." },
      { objective: "O5", q: "Um \"intervalo de referência\" num resultado de análise é:", options: ["O número de telefone do seu médico", "Os resultados habituais na maioria das pessoas saudáveis", "O preço da análise", "Um tipo de seguro"], answer: 1, why: "O seu número aparece ao lado do intervalo habitual." },
      { objective: "O5", q: "Como mantém seguro o seu portal do paciente?", options: ["Usa uma palavra-passe forte e termina a sessão em computadores partilhados", "Partilha a palavra-passe com amigos", "Escreve a palavra-passe no ecrã", "Fica com a sessão aberta na biblioteca"], answer: 0, why: "Uma palavra-passe forte e privada e terminar a sessão protegem os seus registos." },
      { objective: "O6", q: "O que é um copagamento (copay)?", options: ["O custo mensal do seu plano", "Uma consulta grátis", "Um valor fixo em dólares que paga por um serviço coberto", "O rótulo de um medicamento"], answer: 2, why: "O HealthCare.gov define o copagamento como um valor fixo por um serviço coberto." },
      { objective: "O6", q: "Para onde pode ligar uma pessoa com Medicare para fazer perguntas?", options: ["911", "411", "Qualquer número de uma mensagem SMS", "1-800-MEDICARE (1-800-633-4227)"], answer: 3, why: "1-800-MEDICARE é o número oficial do Medicare." },
      { objective: "O6", q: "Os profissionais \"dentro da rede\":", options: ["Nunca aceitam seguro", "Têm um contrato com o seu plano e normalmente custam-lhe menos", "Só trabalham pela internet", "São sempre gratuitos"], answer: 1, why: "Os profissionais dentro da rede têm contrato com o seu plano, o que normalmente baixa o seu custo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      2,
      4,
      6,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Nota sobre o sintoma",
        objective: "O2",
        notYet: "A preocupação é vaga, ou falta quando começou.",
        meets: "Diz qual é a preocupação, quando começou e o que a melhora ou piora.",
        exceeds: "Também diz como afeta o dia a dia."
      },
      {
        name: "Três perguntas principais",
        objective: "O3",
        notYet: "Menos de três perguntas, ou pouco claras.",
        meets: "Três perguntas claras, com a mais importante primeiro.",
        exceeds: "Inclui as três perguntas-chave: o problema, o que fazer e porquê."
      },
      {
        name: "Lista de medicamentos",
        objective: "O4",
        notYet: "Faltam medicamentos de venda livre, vitaminas, suplementos ou alergias.",
        meets: "Todos os medicamentos receitados, de venda livre, vitaminas, suplementos e alergias, com a dose e quantas vezes.",
        exceeds: "Também diz para que serve cada um e tem uma pergunta para o farmacêutico."
      },
      {
        name: "Plano com as suas palavras",
        objective: "O3",
        notYet: "O plano falta, ou copia as palavras do médico sem as entender.",
        meets: "Diz o problema principal, o que fazer e porquê, com as palavras do próprio aluno.",
        exceeds: "Também diz como contactar o consultório e o que fazer se piorar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que levam uma folha de consulta ou lista de medicamentos a uma consulta real em 60 dias (inquérito de seguimento)",
      "Alunos que dizem ter usado o método de repetir ou feito uma pergunta que antes não teriam feito",
      "Alunos que se inscrevem ou usam um portal do paciente em 60 dias",
      "Alunos que começam outro curso de saúde ou de habilidades para a vida da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel e caneta ou uma nota no telefone para a folha de consulta",
      "Rótulos de um medicamento, vitamina ou suplemento",
      "Um telefone ou computador com internet para o medlineplus.gov e um portal do paciente, se o aluno tiver um",
      "Cerca de 60 minutos no total"
    ],
    facilitatorNotes: [
      "Lembre aos alunos no início que este curso ensina habilidades e não dá conselhos médicos.",
      "Use preocupações de prática e rótulos de exemplo na aula; os alunos nunca têm de partilhar os seus próprios dados de saúde.",
      "Pratiquem o método de repetir aos pares, com um aluno a ler uma instrução de exemplo no papel de médico.",
      "Ajude os alunos que precisam de intérprete a saber pedi-lo quando marcam uma consulta.",
      "Avalie a folha de consulta e o plano com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
