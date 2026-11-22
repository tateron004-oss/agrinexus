"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-caregiving.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: US programs, agencies and phone numbers are kept as written and explained.

module.exports = {
  id: "seniors-caregiving-pt",
  lang: "pt",
  translationOf: "seniors-caregiving",
  category: "Seniors and Technology",
  name: "Cuidar de Alguém Querido",
  skills: "Compreender as necessidades da pessoa de quem cuida, Montar um caderno de cuidados, Gerir medicamentos e consultas, Encontrar ajuda local para cuidadores, Dividir o trabalho com a família, Cuidar de si como cuidador",
  outcome: "organizar os cuidados de uma pessoa querida com um caderno de cuidados e uma lista de medicamentos, tratar das consultas e dos medicamentos com segurança junto do médico e do farmacêutico dela, encontrar ajuda local através do Eldercare Locator, dividir tarefas com a família e proteger a sua própria saúde com um plano de autocuidado.",
  about: [
    "Muitas pessoas tornam-se cuidadoras sem o ter planeado: uma mulher que ajuda o marido depois de um AVC, um homem que leva a mãe às consultas, uma avó que cria os netos enquanto cuida da irmã, um vizinho que passa todos os dias para ver se está tudo bem. Cuidar de alguém pode dar sentido à vida, mas também pode cansar e fazer sentir-se só.",
    "Este curso é para pessoas mais velhas que cuidam do cônjuge, do companheiro, de um amigo ou de um familiar, e para filhos e netos adultos que cuidam de um familiar idoso. Você vai organizar-se, tratar dos medicamentos e das consultas com segurança, encontrar ajuda na sua comunidade, dividir o trabalho e cuidar de si.",
    "Este curso ensina habilidades; não é um conselho médico nem jurídico. Confirme as questões de saúde com o médico, o enfermeiro ou o farmacêutico da pessoa de quem cuida, e as questões jurídicas ou de dinheiro com um profissional qualificado. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um primeiro caderno de cuidados para a pessoa de quem cuida (verdadeira ou de prática): os contactos principais, a lista de medicamentos, as próximas consultas e as perguntas para a próxima. Depois junte um plano de ajuda de uma página: um recurso local que contactou ou vai contactar (como o Eldercare Locator), duas tarefas concretas que vai pedir à família ou aos amigos e o seu próprio plano de autocuidado com uma pausa por semana.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos nos Estados Unidos que cuidam de um pai ou mãe idoso, do cônjuge ou de um familiar; muitas vezes são eles próprios pessoas mais velhas. Alguns são avós ou familiares que dividem os cuidados. Muitos também trabalham ou têm os seus próprios problemas de saúde.",
    startingPoint: "Já ajudam com transporte, refeições ou medicamentos, muitas vezes sem plano. Muitos guardam a informação de cabeça ou em papelinhos, não conhecem os serviços locais para cuidadores e fazem quase todo o trabalho sozinhos.",
    gap: "Os cuidadores desorganizados ou sozinhos correm o risco de trocar medicamentos, faltar a consultas e chegar à exaustão. Um caderno de cuidados, bons hábitos com medicamentos e consultas, os serviços locais, as tarefas divididas e um plano de autocuidado tornam os cuidados mais seguros para a pessoa querida e possíveis de manter para o cuidador.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: papel e um dossiê bastam; um telefone ou um computador ajuda com calendários partilhados e com a procura de serviços",
      "Tempo: os cuidadores têm pouco tempo; cerca de 5 minutos por lição, encaixados entre os cuidados",
      "Saúde: os medicamentos só mudam através do médico ou do farmacêutico; é preciso a autorização da pessoa querida para partilhar informações de saúde",
      "Privacidade e bem-estar: nenhum número completo do Medicare, da Segurança Social ou do banco na IA ou no e-mail; ajuda em crise através do 988"
    ],
    prerequisites: "Nenhum. O curso \"Noções Básicas do Medicare\" é um bom complemento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Num dia normal com a pessoa de quem cuida", action: "fazer a lista do que ela consegue fazer sozinha e de onde precisa de ajuda, em três grupos: cuidados do dia a dia, cuidados de saúde, e dinheiro e papéis", standard: "depois de lhe perguntar o que é mais importante para ela" },
    { id: "O2", condition: "Usando um dossiê ou um ficheiro privado no telefone ou no computador", action: "começar um caderno de cuidados com contactos, doenças, alergias, seguro de saúde e o lugar onde estão os documentos legais", standard: "sem escrever números privados completos em ferramentas de IA nem em e-mails" },
    { id: "O3", condition: "Com os medicamentos e a próxima consulta da pessoa de quem cuida", action: "manter uma lista completa de medicamentos e escrever perguntas para o médico ou o farmacêutico", standard: "sem nunca parar, começar ou mudar um medicamento sem lhes perguntar" },
    { id: "O4", condition: "Quando precisa de ajuda local", action: "contactar o Eldercare Locator ou outro serviço para encontrar apoio para cuidadores perto de si", standard: "escrevendo no caderno de cuidados o que ficou a saber" },
    { id: "O5", condition: "Com a sua lista de necessidades", action: "pedir à família e aos amigos tarefas concretas com hora marcada e colocá-las num calendário partilhado", standard: "com pelo menos duas tarefas assumidas por outras pessoas" },
    { id: "O6", condition: "Como cuidador", action: "procurar em si os sinais de stress do cuidador e planear uma pausa regular", standard: "com uma pausa por semana e alguém que o substitua" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Organizar-se",
      lessons: [
        {
          objectives: ["O1"],
          title: "Compreender as necessidades da pessoa de quem cuida",
          minutes: 5,
          goal: "Fazer a lista do que a pessoa de quem cuida consegue fazer sozinha e de onde precisa de ajuda.",
          text: [
            "Os cuidadores ajudam em muitas coisas. A MedlinePlus (um site de saúde do governo dos EUA) cita: lavar-se, refeições e medicamentos; trabalho de casa, cozinha e recados; transporte para as consultas; companhia e apoio emocional; organizar os cuidados médicos; e ajuda nas decisões de saúde e de dinheiro.",
            "Comece por olhar para um dia normal. O que é que a pessoa consegue fazer sozinha? O que é difícil para ela: tomar banho, vestir-se, cozinhar, lembrar-se dos medicamentos, pagar as contas, ir ao médico? Pergunte-lhe e ouça. As pessoas querem manter o máximo de independência e de palavra sobre a sua própria vida.",
            "Escreva as necessidades em três grupos: cuidados do dia a dia, cuidados de saúde, e dinheiro e papéis. Esta lista mostra onde a ajuda é mais precisa e o que pedir aos outros. As necessidades mudam com o tempo, por isso volte a ver a lista de poucos em poucos meses ou depois de um internamento no hospital."
          ],
          steps: ["Passe por um dia normal com a pessoa de quem cuida.", "Faça a lista do que ela consegue fazer sozinha.", "Faça a lista de onde precisa de ajuda: dia a dia, saúde, dinheiro e papéis.", "Pergunte-lhe o que é mais importante para ela.", "Reveja a lista de poucos em poucos meses ou depois de um internamento."],
          words: [["Cuidador", "uma pessoa que ajuda alguém que precisa de apoio por causa da idade, de uma doença ou de uma deficiência; muitas vezes é um familiar ou um amigo."], ["Independência", "ser capaz de fazer as coisas e de tomar as suas próprias decisões."]],
          slides: [
            { title: "Em que ajudam os cuidadores", bullets: ["Higiene, refeições e medicamentos", "Trabalho de casa, recados e transporte", "Companhia, organização dos cuidados e decisões"] },
            { title: "Olhe para um dia normal", bullets: ["O que consegue fazer sozinha?", "O que é difícil para ela?", "Pergunte-lhe e ouça"] },
            { title: "Três grupos de necessidades", bullets: ["Cuidados do dia a dia", "Cuidados de saúde", "Dinheiro e papéis"] }
          ],
          sources: [{ name: "MedlinePlus: Caregivers", url: "https://medlineplus.gov/caregivers.html" }],
          tryIt: "Escreva uma lista de necessidades para a pessoa de quem cuida (ou para alguém de quem talvez cuide um dia) em três colunas: dia a dia, saúde, dinheiro e papéis. Faça um círculo à volta das duas maiores necessidades.",
          youCanNow: "fazer a lista das necessidades da pessoa de quem cuida no dia a dia, na saúde e nos papéis, respeitando a independência dela.",
          quickCheck: [
            { objective: "O1", q: "Em que três grupos o curso arruma as necessidades da pessoa querida?", options: ["Manhã, tarde e noite", "Cuidados do dia a dia, cuidados de saúde, e dinheiro e papéis", "Família, amigos e vizinhos", "Comida, roupa e casa"], answer: 1, why: "Arrumar as necessidades em dia a dia, saúde, e dinheiro e papéis mostra onde a ajuda é mais precisa." },
            { objective: "O1", q: "O seu pai ainda faz refeições simples, mas esquece-se dos comprimidos. Como planeia a ajuda?", options: ["Passar a cozinhar também por ele", "Não fazer nada até haver um problema", "Ajudar com os medicamentos e deixá-lo continuar a cozinhar, como ele quer", "Tirá-lo de casa já"], answer: 2, why: "As pessoas querem manter o máximo de independência, por isso ajude onde é preciso." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Montar um caderno de cuidados",
          minutes: 5,
          goal: "Começar um caderno de cuidados que guarda as informações importantes num só lugar.",
          text: [
            "O CDC (a agência de saúde pública dos EUA) lembra que um plano de cuidados ajuda os cuidadores a guardar as informações importantes num só lugar. Chame-lhe caderno de cuidados: um dossiê, uma pasta ou um documento no telefone ou no computador que você, os familiares que ajudam e um cuidador substituto podem usar.",
            "O que lá vai: contactos (médicos, farmácia, família, vizinhos, contactos de emergência); uma lista de medicamentos; doenças e alergias; dados do seguro de saúde (Medicare, Medicaid, VA ou um plano privado); um calendário de consultas; e notas de cada consulta. Junte uma cópia dos documentos legais que a pessoa tenha, como uma procuração ou diretivas antecipadas de vontade, e o lugar onde estão os originais.",
            "Guarde-o em segurança e em privado. Se o tiver no computador ou no telefone, use uma palavra-passe. Não escreva números completos do Medicare, da Segurança Social ou do banco em ferramentas de IA nem em e-mails. Um neto que saiba de tecnologia pode ajudar a montar um calendário partilhado ou um documento simples, com a autorização da pessoa querida."
          ],
          steps: ["Escolha papel (dossiê) ou digital (documento no telefone ou no computador).", "Junte contactos, doenças, alergias e seguro de saúde.", "Junte a lista de medicamentos e o calendário de consultas.", "Escreva onde estão os documentos legais.", "Mostre a uma pessoa de reserva onde está o caderno."],
          words: [["Plano de cuidados", "um registo escrito das necessidades, dos cuidados e das informações importantes de uma pessoa."], ["Procuração", "um documento legal que deixa alguém agir por outra pessoa, por exemplo em decisões de dinheiro ou de saúde."], ["Diretivas antecipadas de vontade", "um documento legal que diz que cuidados médicos uma pessoa quer se não puder falar por si."]],
          slides: [
            { title: "Um só lugar para tudo", bullets: ["Dossiê, pasta ou documento no telefone", "Fácil para quem ajuda e para cuidadores de reserva"] },
            { title: "O que lá vai", bullets: ["Contactos e números de emergência", "Doenças, alergias, seguro de saúde", "Lista de medicamentos e consultas", "Onde estão os documentos legais"] },
            { title: "Guarde-o em segurança", bullets: ["Palavra-passe nas cópias digitais", "Nenhum número completo de identificação ou do banco na IA ou no e-mail", "Mostre a uma pessoa de reserva onde está"] }
          ],
          sources: [{ name: "CDC: Caregiving", url: "https://www.cdc.gov/caregiving/index.html" }],
          tryIt: "Comece hoje o seu caderno de cuidados: em papel ou no telefone, escreva a página de contactos (médico, farmácia, dois familiares, contacto de emergência) e a página de alergias e doenças.",
          youCanNow: "montar um caderno de cuidados que guarda contactos, informações de saúde e consultas num só lugar.",
          quickCheck: [
            { objective: "O2", q: "O que é um caderno de cuidados?", options: ["Um diário dos seus sentimentos", "Um livro de medicina", "Uma conta do médico", "Um só lugar para as informações importantes dos cuidados, que você e quem ajuda podem usar"], answer: 3, why: "Um caderno de cuidados guarda contactos, medicamentos, seguro e consultas num só lugar." },
            { objective: "O2", q: "Você tem o caderno de cuidados no telefone. O que faz para o manter privado?", options: ["Usa uma palavra-passe e não põe números completos do Medicare nem do banco em ferramentas de IA nem em e-mails", "Publica-o nas redes sociais para a família", "Envia-o por e-mail a toda a gente que conhece", "Cola tudo num assistente de IA"], answer: 0, why: "Proteja-o com uma palavra-passe e não escreva números privados completos em ferramentas de IA nem em e-mails." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gerir medicamentos e consultas",
          minutes: 6,
          goal: "Manter uma lista de medicamentos e preparar perguntas para a próxima consulta da pessoa de quem cuida.",
          text: [
            "As trocas de medicamentos são comuns quando alguém toma vários. A MedlinePlus aconselha a ter uma lista de todos os medicamentos com a dose e a hora em que se tomam, incluindo os de venda livre, as vitaminas, os suplementos e as ervas, mais as alergias, e a levá-la a todas as consultas. Leia o rótulo antes de cada dose. Uma caixa de comprimidos semanal pode ajudar. Nunca pare, comece ou mude um medicamento sem perguntar ao médico ou ao farmacêutico.",
            "O farmacêutico é um especialista gratuito. Pergunte: Porque é que isto é preciso? Que efeitos secundários devo vigiar? É seguro com os outros medicamentos? Há alimentos ou álcool a evitar? Usar uma só farmácia para tudo ajuda-os a apanhar problemas.",
            "Para as consultas, leve o caderno de cuidados, escreva as perguntas antes, tome notas e repita o plano para confirmar que percebeu. Os consultórios médicos costumam precisar da autorização da pessoa querida antes de partilhar consigo as informações de saúde dela; pergunte no consultório que formulário usam. Para perguntas sobre o Medicare (o seguro de saúde do governo dos EUA para pessoas mais velhas), ligue para 1-800-MEDICARE (1-800-633-4227) e pergunte como a pessoa querida pode deixá-lo falar por ela, ou peça ajuda gratuita e individual ao SHIP do seu estado (shiphelp.org)."
          ],
          steps: ["Atualize a lista de medicamentos: nome, dose, hora, para que serve.", "Use uma só farmácia e faça as suas perguntas ao farmacêutico.", "Use uma caixa de comprimidos se ajudar; leia sempre os rótulos.", "Antes da consulta, escreva perguntas; durante, tome notas e repita o plano.", "Pergunte no consultório que formulário de autorização lhe dá acesso às informações."],
          words: [["Caixa de comprimidos", "uma caixa com espaços para cada dia (e hora) para arrumar os comprimidos com antecedência."], ["SHIP", "State Health Insurance Assistance Program: ajuda local e gratuita com perguntas sobre o Medicare."]],
          slides: [
            { title: "Lista de medicamentos", bullets: ["Todos os medicamentos, vitaminas, suplementos e ervas", "Dose, hora e para que serve", "Alergias; leve-a a todas as consultas"] },
            { title: "Hábitos seguros", bullets: ["Leia sempre o rótulo", "Caixa de comprimidos se ajudar", "Nunca mude um medicamento sem perguntar"] },
            { title: "Pergunte ao farmacêutico", bullets: ["Porque é preciso? Efeitos secundários?", "É seguro com os outros medicamentos?", "Use uma só farmácia para tudo"] },
            { title: "Consultas", bullets: ["Leve o caderno e as perguntas", "Tome notas, repita o plano", "Pergunte que formulário de autorização o consultório usa"] }
          ],
          sources: [
            { name: "MedlinePlus: Medication Errors", url: "https://medlineplus.gov/medicationerrors.html" },
            { name: "Medicare.gov: Talk to Someone", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" }
          ],
          tryIt: "Junte a lista de medicamentos ao seu caderno de cuidados: nome, dose, hora, para que serve. Depois escreva três perguntas para a próxima consulta da pessoa de quem cuida ou para o farmacêutico.",
          youCanNow: "manter uma lista de medicamentos certa, trabalhar com o farmacêutico e preparar as consultas como cuidador.",
          quickCheck: [
            { objective: "O3", q: "O que vai numa lista de medicamentos?", options: ["Só os comprimidos receitados", "Só os medicamentos da manhã", "Todos os medicamentos, vitaminas, suplementos e ervas, com dose e hora, mais as alergias", "Só os mais caros"], answer: 2, why: "Uma lista completa ajuda o médico e o farmacêutico a apanhar problemas." },
            { objective: "O3", q: "O médico explica um plano novo muito depressa. Como confirma que percebeu?", options: ["Acena com a cabeça e sai", "Repete o plano com as suas palavras e toma notas", "Pergunta antes a uma IA mais tarde", "Adivinha em casa"], answer: 1, why: "Repetir o plano confirma que o percebeu bem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Organizar-se",
        questions: [
          { objective: "O1", q: "Qual é um bom primeiro passo para compreender as necessidades da pessoa de quem cuida?", options: ["Tomar conta de tudo já", "Decidir sem lhe perguntar", "Passar por um dia normal e perguntar-lhe o que é difícil", "Esperar por uma crise"], answer: 2, why: "Olhar para um dia normal e ouvir mostra onde a ajuda é mesmo precisa." },
          { objective: "O2", q: "Para que serve um caderno de cuidados?", options: ["Guardar as informações importantes num só lugar", "Escrever um diário que só você lê", "Guardar as palavras-passe de todas as contas", "Partilhar nas redes sociais"], answer: 0, why: "Um plano ou caderno de cuidados junta contactos, medicamentos e consultas." },
          { objective: "O2", q: "O que vai num caderno de cuidados?", options: ["Os códigos PIN do banco", "A lista de medicamentos e os contactos dos médicos", "Todos os recibos de sempre", "Nada, nem digital nem em papel"], answer: 1, why: "Contactos, medicamentos, doenças, seguro e consultas vão lá." },
          { objective: "O3", q: "A pessoa de quem cuida quer parar um medicamento porque lhe faz mal ao estômago. O que faz?", options: ["Para-o já", "Dá o dobro na próxima dose", "Dá metade a outra pessoa", "Pergunta primeiro ao médico ou ao farmacêutico"], answer: 3, why: "Nunca pare nem mude um medicamento sem perguntar primeiro." },
          { objective: "O3", q: "O consultório do médico não quer partilhar informações consigo. O que deve perguntar?", options: ["Que formulário de autorização a pessoa querida pode assinar", "A morada de casa do médico", "Para ver as fichas de outros doentes", "Nada; desistir"], answer: 0, why: "Os consultórios costumam precisar da autorização do doente; pergunte que formulário usam." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar ajuda e cuidar de si",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar ajuda na sua comunidade",
          minutes: 5,
          goal: "Encontrar serviços locais para cuidadores com o Eldercare Locator.",
          text: [
            "Não precisa de descobrir tudo sozinho. O Eldercare Locator, um serviço público da Administration for Community Living (ACL), liga pessoas mais velhas e cuidadores a serviços locais. Ligue ou envie SMS para 1-800-677-1116, converse pela internet ou pesquise pela sua zona em eldercare.acl.gov. Pode pô-lo em contacto com a Area Agency on Aging (agência local para pessoas idosas) da sua zona.",
            "Através do National Family Caregiver Support Program (programa nacional de apoio aos cuidadores familiares), os estados e as agências locais oferecem: informação sobre serviços, ajuda para conseguir esses serviços, aconselhamento, grupos de apoio e formação para cuidadores, cuidados de descanso (uma pausa para si) e alguns serviços extra. Abrange os cuidadores familiares adultos de pessoas com 60 anos ou mais, de pessoas de qualquer idade com doença de Alzheimer ou doenças parecidas, e alguns familiares mais velhos que criam crianças ou cuidam de adultos com deficiência. Pergunte o que existe perto de si.",
            "Cuida de um veterano de guerra? O VA Caregiver Support Program ajuda os cuidadores de veteranos inscritos nos cuidados de saúde do VA (o departamento dos veteranos dos EUA). Ligue para a linha de apoio aos cuidadores, 1-855-260-3274, de segunda a sexta, das 8 am às 8 pm, hora do Leste dos EUA. Para perguntas sobre o Medicare, o SHIP do seu estado dá ajuda local gratuita."
          ],
          steps: ["Ligue ou envie SMS ao Eldercare Locator: 1-800-677-1116, ou pesquise em eldercare.acl.gov.", "Peça o contacto da Area Agency on Aging da sua zona.", "Pergunte por formação para cuidadores, grupos de apoio, cuidados de descanso e refeições.", "Cuida de um veterano: ligue para 1-855-260-3274.", "Escreva no caderno de cuidados o que ficou a saber."],
          words: [["Area Agency on Aging", "um serviço local que ajuda pessoas mais velhas e cuidadores a encontrar serviços."], ["Cuidados de descanso", "cuidados por pouco tempo para a pessoa querida, para que você possa descansar (em inglês, respite care)."], ["ACL", "Administration for Community Living, parte do Departamento de Saúde e Serviços Humanos dos EUA."]],
          slides: [
            { title: "Eldercare Locator", bullets: ["Ligue ou envie SMS para 1-800-677-1116", "Ou pesquise em eldercare.acl.gov", "Liga-o à sua Area Agency on Aging"] },
            { title: "Ajuda para cuidadores familiares", bullets: ["Informação e ajuda para conseguir serviços", "Aconselhamento, grupos de apoio, formação", "Cuidados de descanso: uma pausa para si"] },
            { title: "Cuidar de um veterano", bullets: ["Linha de apoio do VA: 1-855-260-3274", "Segunda a sexta, 8 am às 8 pm, hora do Leste"] }
          ],
          sources: [
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" },
            { name: "ACL: National Family Caregiver Support Program", url: "https://www.acl.gov/programs/support-caregivers/national-family-caregiver-support-program" },
            { name: "VA Caregiver Support Program", url: "https://www.caregiver.va.gov/" }
          ],
          tryIt: "Vá a eldercare.acl.gov (ou ligue ou envie SMS para 1-800-677-1116) e encontre a Area Agency on Aging da sua zona. Escreva no caderno de cuidados o nome, o número de telefone e um serviço sobre o qual quer perguntar.",
          youCanNow: "encontrar ajuda local para cuidadores através do Eldercare Locator e da sua Area Agency on Aging, e saber para onde ligam os cuidadores de veteranos.",
          quickCheck: [
            { objective: "O4", q: "O que são cuidados de descanso?", options: ["Cuidados por pouco tempo para o cuidador poder descansar", "Um tipo de medicamento", "Um internamento no hospital", "Um formulário legal"], answer: 0, why: "Os cuidados de descanso dão uma pausa ao cuidador, e as agências locais podem oferecê-los." },
            { objective: "O4", q: "Precisa de refeições e de um grupo de apoio perto de si, mas não sabe por onde começar. O que faz?", options: ["Procura nas redes sociais", "Espera por uma crise", "Pede ao médico para encontrar tudo", "Liga ou envia SMS ao Eldercare Locator para 1-800-677-1116"], answer: 3, why: "O Eldercare Locator liga-o a serviços locais, incluindo a sua Area Agency on Aging." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dividir o trabalho com a família e os amigos",
          minutes: 5,
          goal: "Pedir ajuda concreta à família e aos amigos e montar um horário partilhado.",
          text: [
            "Muitos cuidadores fazem tudo sozinhos porque não querem incomodar ninguém. As pessoas muitas vezes querem ajudar, mas não sabem como. \"Diga-me se precisar de alguma coisa\" raramente se torna ajuda; um pedido concreto, sim.",
            "O CDC sugere dizer uma tarefa concreta ou um período de tempo em que quer ajuda e usar um calendário partilhado na internet para a ajuda regular. A MedlinePlus sugere deixar quem ajuda escolher as tarefas com que se sente à vontade. Exemplos: \"Pode levar a mãe à consulta de quinta-feira?\" \"Pode ligar ao pai todos os domingos à noite?\" \"Pode ir às compras aos sábados?\" Os familiares que vivem longe podem tratar das contas, dos telefonemas para o seguro, de pesquisas ou de videochamadas.",
            "Uma pequena reunião de família, ao vivo ou por vídeo, ajuda todos a ver a lista de necessidades e a escolher tarefas. Inclua a pessoa querida se ela puder. Se trabalha, pergunte aos recursos humanos do seu empregador sobre licenças: pela lei federal dos EUA Family and Medical Leave Act, os trabalhadores que cumprem as condições podem tirar até 12 semanas de licença sem vencimento por ano para cuidar de certos familiares."
          ],
          steps: ["Pegue na sua lista de necessidades da Lição 1.", "Transforme as necessidades em tarefas concretas com hora marcada.", "Faça uma pequena reunião de família (ao vivo ou por vídeo).", "Deixe cada pessoa escolher tarefas; coloque-as num calendário partilhado.", "Trabalha? Pergunte aos recursos humanos sobre licença familiar."],
          words: [["Calendário partilhado", "um calendário na internet que várias pessoas podem ver e onde podem acrescentar coisas."], ["FMLA", "a lei federal dos EUA Family and Medical Leave Act, que deixa os trabalhadores que cumprem as condições tirar licença sem vencimento para cuidar da família."]],
          slides: [
            { title: "Peça uma coisa concreta", bullets: ["Não \"diga-me se precisar de alguma coisa\"", "\"Pode levar a mãe na quinta-feira?\""] },
            { title: "Formas de ajudar", bullets: ["Transporte, refeições, compras, visitas", "De longe: contas, telefonemas, pesquisas, videochamadas"] },
            { title: "Juntar toda a gente", bullets: ["Pequena reunião de família, ao vivo ou por vídeo", "Cada pessoa escolhe tarefas", "Coloque-as num calendário partilhado"] },
            { title: "Se trabalha", bullets: ["Pergunte aos recursos humanos sobre licença familiar (FMLA)", "Até 12 semanas sem vencimento, para quem cumpre as condições"] }
          ],
          sources: [
            { name: "CDC: Caring for Yourself When Caring for Another", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "MedlinePlus: Caregiver Health", url: "https://medlineplus.gov/caregiverhealth.html" }
          ],
          tryIt: "Escreva dois pedidos concretos (tarefa, dia e hora) e envie-os a duas pessoas, ou escreva a quem os pediria. Exemplo: \"Pode levar o pai à consulta dos olhos no dia 14 às 10 da manhã?\"",
          youCanNow: "transformar necessidades em pedidos concretos e dividir as tarefas de cuidado com a família e os amigos.",
          quickCheck: [
            { objective: "O5", q: "Porque usar um calendário partilhado para a ajuda da família?", options: ["Todos podem ver as tarefas e inscrever-se nelas", "Substitui o caderno de cuidados", "Paga a quem ajuda", "Envia medicamentos"], answer: 0, why: "Um calendário partilhado deixa quem ajuda ver as necessidades e escolher tarefas." },
            { objective: "O5", q: "O seu irmão diz: \"Diga-me se precisar de alguma coisa.\" Qual é a melhor resposta?", options: ["\"Estou bem.\"", "\"Preciso de tudo.\"", "\"Pode levar a mãe às compras todos os sábados de manhã?\"", "Não dizer nada"], answer: 2, why: "Uma tarefa concreta com hora marcada tem muito mais hipóteses de se tornar ajuda a sério." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Cuidar de si como cuidador",
          minutes: 5,
          goal: "Reconhecer os sinais de stress do cuidador e planear pausas regulares.",
          text: [
            "O CDC diz de forma simples: para ser um bom cuidador, tem de cuidar de si. A MedlinePlus cita estes sinais de stress do cuidador: sentir-se sobrecarregado ou sozinho, dormir demais ou de menos, grandes mudanças de peso, cansaço constante, perder o interesse pelas coisas de que gostava, irritação ou raiva, preocupação ou tristeza frequentes, dores de cabeça ou dores no corpo frequentes, e fumar ou beber mais.",
            "O que ajuda: pausas regulares (mesmo poucas horas de descanso por semana podem ajudar), pedir ajuda aos outros, um grupo de apoio para cuidadores (ao vivo ou pela internet), manter o contacto com os amigos, e cuidar da sua própria saúde com atividade física, refeições saudáveis, sono e as suas próprias consultas. Diga ao seu médico que é cuidador; ele pode conhecer grupos de apoio.",
            "Se se sente sem esperança ou sobrecarregado e isso não melhora, fale com o seu médico ou com um conselheiro. Numa crise nos EUA, ligue ou envie SMS para 988; os veteranos e as suas famílias podem carregar no 1. Agora está pronto para terminar o seu caderno de cuidados e o plano de ajuda."
          ],
          steps: ["Compare-se com os sinais de stress do cuidador.", "Planeie uma pausa regular por semana e quem o substitui.", "Encontre um grupo de apoio para cuidadores (pergunte à sua Area Agency on Aging).", "Vá às suas próprias consultas e diga ao seu médico que é cuidador.", "Em crise: ligue ou envie SMS para 988."],
          words: [["Stress do cuidador", "o desgaste físico e emocional de cuidar de alguém."], ["Grupo de apoio", "um grupo de pessoas numa situação parecida que se reúnem para partilhar experiências e dicas."]],
          slides: [
            { title: "Sinais de stress do cuidador", bullets: ["Sobrecarregado, sozinho, sempre cansado", "Mudanças no sono ou no peso", "Irritado, triste, preocupado, com dores", "Perder o interesse; fumar ou beber mais"] },
            { title: "O que ajuda", bullets: ["Pausas regulares; mesmo poucas horas por semana", "Peça ajuda; entre num grupo de apoio", "O seu sono, refeições, atividade e consultas"] },
            { title: "Procure apoio", bullets: ["Diga ao seu médico que é cuidador", "Em crise: ligue ou envie SMS para 988; veteranos carregam no 1"] }
          ],
          sources: [
            { name: "MedlinePlus: Caregiver Health", url: "https://medlineplus.gov/caregiverhealth.html" },
            { name: "CDC: Caring for Yourself When Caring for Another", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Tarefa final: termine o seu primeiro caderno de cuidados (contactos, lista de medicamentos, consultas e perguntas) e junte um plano de ajuda de uma página: um recurso local que contactou ou vai contactar, duas tarefas concretas para a família ou os amigos, e o seu plano de autocuidado com uma pausa por semana.",
          youCanNow: "reconhecer o stress do cuidador, planear pausas regulares e continuar a cuidar da pessoa querida sem perder a sua própria saúde.",
          quickCheck: [
            { objective: "O6", q: "Qual é um sinal de stress do cuidador?", options: ["Dormir bem e sentir-se descansado", "Sentir-se sobrecarregado, sozinho ou sempre cansado", "Gostar dos seus passatempos", "Ver os amigos muitas vezes"], answer: 1, why: "Sentir-se sobrecarregado ou sozinho e o cansaço constante são sinais de stress do cuidador." },
            { objective: "O6", q: "Não faz uma pausa há meses. Qual é um bom primeiro passo?", options: ["Continuar até ficar doente", "Deixar de cuidar da pessoa querida", "Esconder o que sente", "Planear uma pausa regular por semana e pedir a alguém que o substitua"], answer: 3, why: "Mesmo poucas horas de descanso por semana podem ajudar, com alguém a substituí-lo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Encontrar ajuda e cuidar de si",
        questions: [
          { objective: "O4", q: "Qual é o número do Eldercare Locator (chamada ou SMS)?", options: ["911", "1-800-677-1116", "411", "988"], answer: 1, why: "O Eldercare Locator liga-o a serviços locais pelo 1-800-677-1116." },
          { objective: "O4", q: "O que são cuidados de descanso?", options: ["Um tipo de medicamento", "Uma conta do hospital", "Cuidados por pouco tempo para o cuidador poder descansar", "Um documento legal"], answer: 2, why: "Os cuidados de descanso dão tempo livre ao cuidador." },
          { objective: "O5", q: "Que pedido tem mais hipóteses de trazer ajuda a sério?", options: ["\"Diga-me se precisar de alguma coisa.\"", "\"Ajude um dia destes.\"", "Não dizer nada", "\"Pode levar a mãe à consulta de quinta-feira às 2 da tarde?\""], answer: 3, why: "É fácil dizer sim a tarefas concretas com hora marcada." },
          { objective: "O6", q: "Qual é um sinal de stress do cuidador?", options: ["Cansaço constante e perder o interesse pelas coisas de que gostava", "Dormir bem", "Rir com os amigos", "Ir às suas próprias consultas"], answer: 0, why: "A MedlinePlus cita o cansaço e a perda de interesse como sinais." },
          { objective: "O4", q: "Para onde pode ligar um cuidador de um veterano para ter apoio?", options: ["Para a linha de apoio aos cuidadores do VA, 1-855-260-3274", "Para um anúncio qualquer na internet", "Só para o serviço de contas do hospital", "Para ninguém"], answer: 0, why: "A linha de apoio aos cuidadores do VA ajuda os cuidadores de veteranos inscritos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Cuidar de Alguém Querido",
    questions: [
      { objective: "O1", q: "Qual é uma tarefa comum de quem cuida?", options: ["Passar as receitas do médico", "Mudar as leis", "Levar às consultas e ajudar com as refeições", "Dirigir o hospital"], answer: 2, why: "Transporte, refeições, medicamentos e companhia são tarefas comuns." },
      { objective: "O1", q: "Porque perguntar à pessoa querida o que é difícil para ela?", options: ["Para respeitar a independência dela e ajudar onde é preciso", "Para a envergonhar", "Porque a lei obriga", "Não interessa"], answer: 0, why: "Ouvir deixa-a no comando da sua vida e mostra as necessidades reais." },
      { objective: "O1", q: "Os três grupos de necessidades deste curso são:", options: ["Comida, televisão e telefone", "Cuidados do dia a dia, cuidados de saúde, e dinheiro e papéis", "Manhã, meio-dia e noite", "Família, amigos e vizinhos"], answer: 1, why: "Arrumar as necessidades assim mostra onde a ajuda é mais precisa." },
      { objective: "O1", q: "Quando deve rever a lista de necessidades?", options: ["Nunca", "Só uma vez", "Só se a pessoa pedir", "De poucos em poucos meses ou depois de um internamento"], answer: 3, why: "As necessidades mudam com o tempo." },
      { objective: "O2", q: "Um caderno de cuidados pode ser:", options: ["Só um dossiê em papel", "Um dossiê, uma pasta ou um documento no telefone ou no computador", "Só uma publicação nas redes sociais", "Só a sua memória"], answer: 1, why: "Qualquer formato serve se guardar as informações num só lugar." },
      { objective: "O2", q: "O que são diretivas antecipadas de vontade?", options: ["Um horário de autocarros", "Um recibo da farmácia", "Um documento legal que diz que cuidados médicos alguém quer se não puder falar", "O rótulo de um medicamento"], answer: 2, why: "Regista o que a pessoa quer para os seus cuidados médicos." },
      { objective: "O2", q: "O que NÃO deve escrever numa ferramenta de IA ou num e-mail?", options: ["Números completos do Medicare, da Segurança Social ou do banco", "Uma lista de compras", "Uma pergunta sobre uma caixa de comprimidos", "A hora de uma consulta"], answer: 0, why: "Os números privados devem ficar fora das ferramentas de IA e do e-mail." },
      { objective: "O3", q: "O que vai numa lista de medicamentos?", options: ["Só a receita mais recente", "Só os comprimidos da manhã", "Só os medicamentos caros", "Todos os medicamentos, vitaminas, suplementos e ervas, com dose e hora"], answer: 3, why: "Tudo o que se toma pode interagir, por isso ponha tudo na lista." },
      { objective: "O3", q: "Porque usar uma só farmácia para todos os medicamentos?", options: ["É sempre mais barato", "A lei obriga", "O farmacêutico pode apanhar problemas entre medicamentos", "Tem melhor estacionamento"], answer: 2, why: "Uma só farmácia vê a lista toda e pode descobrir problemas." },
      { objective: "O3", q: "Numa consulta, uma boa forma de confirmar que percebeu é:", options: ["Acenar com a cabeça e sair", "Repetir o plano com as suas palavras", "Perguntar pelo tempo", "Não tomar notas"], answer: 1, why: "Repetir o plano apanha os erros cedo." },
      { objective: "O3", q: "Para ter ajuda local, gratuita e individual com perguntas sobre o Medicare, pode contactar:", options: ["O SHIP do seu estado (shiphelp.org)", "Um anúncio que aparece no ecrã", "Um desconhecido na internet", "O banco"], answer: 0, why: "Os SHIP dão aconselhamento local e gratuito sobre o Medicare." },
      { objective: "O4", q: "Que agência gere o Eldercare Locator?", options: ["O IRS (os impostos dos EUA)", "Uma seguradora privada", "Os correios", "A Administration for Community Living (ACL)"], answer: 3, why: "O Eldercare Locator é um serviço público da ACL." },
      { objective: "O4", q: "A Area Agency on Aging da sua zona pode ajudá-lo a:", options: ["Encontrar serviços para cuidadores, como formação, grupos de apoio e cuidados de descanso", "Comprar ações", "Arranjar o carro", "Tirar um passaporte"], answer: 0, why: "As Area Agencies on Aging ligam pessoas mais velhas e cuidadores a serviços." },
      { objective: "O4", q: "A linha de apoio aos cuidadores do VA está aberta:", options: ["Só aos fins de semana", "De segunda a sexta, das 8 am às 8 pm, hora do Leste dos EUA", "Só à meia-noite", "Um dia por ano"], answer: 1, why: "O VA indica de segunda a sexta, das 8 am às 8 pm, hora do Leste." },
      { objective: "O5", q: "Qual é uma boa forma de a família que vive longe ajudar?", options: ["Não fazer nada porque está longe", "Só dar conselhos", "Tratar das contas, dos telefonemas para o seguro ou de videochamadas regulares", "Visitar uma vez de dez em dez anos"], answer: 2, why: "Quem ajuda de longe pode tratar de telefonemas, contas e contactos regulares." },
      { objective: "O5", q: "Um calendário partilhado ajuda porque:", options: ["Substitui o médico", "O Medicare obriga", "Esconde as tarefas da família", "Todos podem ver as tarefas e inscrever-se nelas"], answer: 3, why: "Quem ajuda pode ver o que é preciso e quando." },
      { objective: "O5", q: "Pela lei federal FMLA, os trabalhadores que cumprem as condições podem tirar até:", options: ["1 dia de licença paga", "12 semanas de licença sem vencimento por ano para cuidar de certos familiares", "1 ano de licença paga", "Nenhuma licença"], answer: 1, why: "A MedlinePlus indica até 12 semanas de licença sem vencimento para quem cumpre as condições; confirme com os recursos humanos." },
      { objective: "O6", q: "Segundo o CDC, porque devem os cuidadores cuidar de si?", options: ["Para serem bons cuidadores", "Porque é egoísmo não o fazer", "Para evitar toda a família", "Não interessa"], answer: 0, why: "O CDC diz que tem de cuidar de si para ser um bom cuidador." },
      { objective: "O6", q: "Qual é um passo útil contra o stress do cuidador?", options: ["Nunca fazer uma pausa", "Deixar de ir ao seu próprio médico", "Esconder de todos o que sente", "Entrar num grupo de apoio para cuidadores"], answer: 3, why: "Os grupos de apoio partilham experiências e dicas." },
      { objective: "O6", q: "Um cuidador sente-se sem esperança e sobrecarregado. Nos EUA, numa crise, pode:", options: ["Esperar que passe, sozinho", "Publicar sobre isso e desligar", "Ligar ou enviar SMS para 988", "Ligar para 411"], answer: 2, why: "O 988 é gratuito e funciona 24 horas por dia, 7 dias por semana; os veteranos e as suas famílias podem carregar no 1." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 4, 7, 9, 12, 14, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Caderno de cuidados", objective: "O2", notYet: "Faltam contactos principais, ou há números privados completos escritos onde outros os podem ver.", meets: "Contactos principais, próximas consultas e o lugar onde estão os documentos legais, tudo num só lugar.", exceeds: "Uma pessoa de reserva sabe onde está o caderno e como o usar." },
      { name: "Medicamentos e próxima consulta", objective: "O3", notYet: "A lista de medicamentos está incompleta, ou não há perguntas para a próxima consulta.", meets: "Uma lista completa de medicamentos com dose e hora, e perguntas escritas para a próxima consulta.", exceeds: "Inclui vitaminas, suplementos e alergias, e perguntas para o farmacêutico." },
      { name: "Ajuda local", objective: "O4", notYet: "Nenhum recurso local indicado.", meets: "Um recurso local contactado ou planeado, como o Eldercare Locator.", exceeds: "Escreveu no caderno os serviços que existem e os próximos passos." },
      { name: "Tarefas divididas", objective: "O5", notYet: "As tarefas são vagas, como \"dar uma ajuda\", ou são menos de duas.", meets: "Duas tarefas concretas com hora marcada, para pedir à família ou aos amigos.", exceeds: "Quem ajuda já aceitou e as tarefas estão num calendário partilhado." },
      { name: "Plano de autocuidado", objective: "O6", notYet: "Nenhuma pausa planeada.", meets: "Um plano de autocuidado com uma pausa por semana e alguém que o substitua.", exceeds: "Também indica um grupo de apoio ou diz ao seu próprio médico que é cuidador." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que contactam o Eldercare Locator, uma Area Agency on Aging ou o VA Caregiver Support Program em 30 dias (inquérito de seguimento)",
      "Alunos que dizem que familiares ou amigos assumiram tarefas regulares de cuidado",
      "Alunos que dizem fazer uma pausa regular ou ter entrado num grupo de apoio para cuidadores"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um dossiê ou uma pasta, ou um documento privado no telefone ou no computador, para o caderno de cuidados",
      "As caixas dos medicamentos da pessoa querida ou a lista atual, e as cartas das consultas (guardadas em privado)",
      "Um telefone para ligar ou enviar SMS ao Eldercare Locator",
      "Cerca de 60 minutos no total, em sessões curtas encaixadas entre os cuidados, mais tempo para preencher o caderno"
    ],
    facilitatorNotes: [
      "Os cuidadores estão muitas vezes exaustos; ofereça sessões curtas e deixe-os fazer as tarefas de prática em casa.",
      "Não dê conselhos médicos; envie as perguntas sobre medicamentos para o médico ou o farmacêutico da pessoa querida.",
      "Tenha à mão, para distribuir, os contactos da Area Agency on Aging e dos grupos de apoio da zona.",
      "Esteja atento aos sinais de stress do cuidador no grupo, e partilhe o 988 com quem estiver em crise.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
