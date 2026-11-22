"use strict";

// Koach Learn course (Portuguese translation of shared/nursing-assistant-cna-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the United States (state registry, CDC, HIPAA, 911); US names are kept and explained.

module.exports = {
  id: "nursing-assistant-cna-prep-pt",
  lang: "pt",
  translationOf: "nursing-assistant-cna-prep",
  category: "Workforce Development",
  name: "Preparação para Auxiliar de Enfermagem Certificado (CNA)",
  skills: "Conhecer o caminho para CNA no seu estado, Limpar as mãos e usar luvas com segurança, Proteger os direitos e a privacidade dos residentes, Dar cuidados diários seguros, Observar e comunicar mudanças, Planear o exame do estado",
  outcome: "fazer um plano pessoal para se tornar auxiliar de enfermagem certificado no seu estado e explicar os conhecimentos básicos de segurança, privacidade, cuidados e comunicação que o exame do estado verifica.",
  about: [
    "Um auxiliar de enfermagem certificado (em inglês, CNA) ajuda as pessoas nos cuidados do dia a dia em lares de idosos, hospitais e outros locais de cuidados. É uma das formas mais rápidas de entrar numa carreira na saúde, e muitos enfermeiros começaram como CNA.",
    "Este curso prepara você. Não faz de você um CNA. Para ser certificado, você termina um programa de formação aprovado pelo estado, passa no exame de competências do seu estado e fica inscrito no registo de auxiliares de enfermagem do seu estado. Cada estado tem as suas próprias regras, por isso vai aprender onde verificar as suas.",
    "Vai aprender os conhecimentos em que o trabalho e o exame se baseiam: mãos limpas, direitos e privacidade dos residentes, cuidados diários seguros e como observar e comunicar. As habilidades práticas, como mover uma pessoa ou medir a tensão arterial, são praticadas no seu programa com supervisão, e não em casa num doente real.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" e uma pequena verificação de duas perguntas. No final, faz o seu próprio plano de estudo e de exame com datas reais."
  ],
  finalTask: "Faça um plano de estudo e de exame para CNA no seu estado, numa página: a página oficial do registo ou do departamento de saúde que verificou, dois programas aprovados perto de você com o custo e a data de início (das páginas deles), as partes do exame do seu estado, um horário de estudo semanal com datas, as cinco habilidades que mais vai praticar nas aulas e uma pessoa a quem vai comunicar se tiver uma dúvida.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que querem um primeiro emprego na saúde: pessoas à procura de trabalho, jovens adultos, pessoas que voltam para casa depois da prisão, imigrantes e adultos que voltam a estudar. Muitos são pessoas atenciosas com experiência a cuidar de familiares, mas sem formação na saúde.",
    startingPoint: "Sabem ler instruções curtas e usar um telefone ou um computador para procurar informação. A maioria nunca fez uma aula de saúde. Alguns já cuidaram de um familiar em casa.",
    gap: "Os empregos de auxiliar de enfermagem pedem um programa aprovado pelo estado e um exame do estado feito com sucesso. Muitas vezes os alunos não conhecem os passos, não sabem em que página oficial confiar nem conhecem o básico de segurança e privacidade que o exame espera. Conhecer o caminho e o básico ajuda-os a escolher um programa verdadeiro e a terminá-lo.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 7.º ano)",
      "Aparelhos: um telefone ou um computador da biblioteca; o papel serve para todas as tarefas",
      "As regras mudam de estado para estado; o curso indica o registo do estado em vez de dar horas ou taxas",
      "Nenhuma prática clínica em pessoas reais em casa; as habilidades práticas aprendem-se num programa com supervisão",
      "Uma condenação no passado pode afetar a inscrição no registo em alguns estados; cada aluno verifica as regras do seu estado"
    ],
    prerequisites: "Nenhum. O curso \"Literacia em Saúde: Compreender os Seus Cuidados de Saúde\" é um bom primeiro curso."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando a página oficial do registo de auxiliares de enfermagem ou do departamento de saúde do seu estado", action: "listar os passos para se tornar auxiliar de enfermagem certificado no seu estado", standard: "nomeando o programa aprovado, o exame de competências e o registo, com a página que verificou" },
    { id: "O2", condition: "Perante uma situação de cuidados", action: "escolher quando e como limpar as mãos e usar luvas", standard: "acertando pelo menos 4 de 5 situações" },
    { id: "O3", condition: "Com uma pequena história sobre um residente", action: "identificar se os direitos ou a privacidade de um residente estão a ser protegidos e dizer o que fazer se não estiverem", standard: "incluindo a quem iria comunicar" },
    { id: "O4", condition: "Perante uma tarefa de cuidados diários, como mudar a posição, ajudar a andar ou servir uma refeição", action: "pôr os passos de segurança pela ordem certa", standard: "sem nenhum passo que ponha o residente ou você em risco" },
    { id: "O5", condition: "Com a ficha de um residente inventado e uma mudança que você nota", action: "escrever uma nota curta com factos e comunicá-la ao enfermeiro", standard: "usando o que viu ou mediu, e não suposições" },
    { id: "O6", condition: "Usando o seu próprio calendário", action: "fazer um plano de estudo e de exame com datas", standard: "cobrindo todas as partes do exame do seu estado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O caminho para CNA e o básico dos cuidados seguros",
      lessons: [
        {
          title: "O que faz um CNA e como ser certificado",
          objectives: ["O1"],
          minutes: 5,
          goal: "Listar os passos para ser CNA no seu estado e encontrar a página oficial do seu estado.",
          text: [
            "Os auxiliares de enfermagem dão cuidados básicos e ajudam as pessoas na vida diária: tomar banho, vestir-se, usar a casa de banho, comer, mover-se e virar-se. Medem os sinais vitais, prestam atenção às mudanças e comunicam-nas ao enfermeiro. Trabalham sob a orientação do enfermeiro.",
            "Na maioria dos estados o caminho tem três passos. Primeiro, terminar um programa de formação de auxiliar de enfermagem aprovado pelo estado. Ele junta aulas com prática supervisionada. Segundo, passar no exame de competências do seu estado. Terceiro, ficar inscrito no registo de auxiliares de enfermagem do seu estado. Tem de estar no registo para trabalhar como auxiliar de enfermagem num lar de idosos.",
            "Este curso prepara você. Não lhe dá um certificado. As horas, as taxas, a verificação de antecedentes e as regras do exame mudam de estado para estado e podem mudar com o tempo. Verifique a página do registo de auxiliares de enfermagem ou do departamento de saúde do seu estado, e pergunte a qualquer programa que encontrar se é aprovado pelo estado.",
            "Alguns programas são gratuitos ou pagos por um empregador, como um lar de idosos que o contrata enquanto faz a formação. Um American Job Center (centro de emprego dos EUA) também pode ajudar a pagar a formação. Pergunte antes de pagar."
          ],
          steps: ["Procure na internet o nome do seu estado mais \"nurse aide registry\" (registo de auxiliares de enfermagem).", "Abra o resultado do site do governo do seu estado (muitas vezes acaba em .gov).", "Anote os passos, o exame e as regras sobre a verificação de antecedentes.", "Anote dois programas aprovados pelo estado perto de você e verifique a página de cada um."],
          words: [["CNA", "auxiliar de enfermagem certificado (certified nursing assistant): um auxiliar de enfermagem que passou no exame do estado e está no registo do estado."], ["Registo de auxiliares de enfermagem", "a lista oficial do estado com os auxiliares de enfermagem que podem trabalhar em lares de idosos."], ["Programa aprovado pelo estado", "um programa de formação que o estado verificou e autorizou a formar auxiliares de enfermagem."], ["Exame de competências", "o exame do estado que verifica o que você sabe e o que consegue fazer."]],
          slides: [
            { title: "O que faz um CNA", bullets: ["Ajuda a tomar banho, vestir, comer e mover-se", "Mede os sinais vitais e presta atenção às mudanças", "Comunica ao enfermeiro"] },
            { title: "Três passos na maioria dos estados", bullets: ["1. Terminar um programa de formação aprovado pelo estado", "2. Passar no exame de competências do estado", "3. Ficar inscrito no registo de auxiliares de enfermagem"] },
            { title: "Este curso prepara você", bullets: ["Não dá um certificado", "As regras, as horas e as taxas mudam de estado para estado", "Verifique a página do registo do seu estado"] },
            { title: "Pagar a formação", bullets: ["Alguns empregadores pagam enquanto faz a formação", "Um American Job Center pode ajudar", "Pergunte antes de pagar"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Nursing Assistants and Orderlies", url: "https://www.bls.gov/ooh/healthcare/nursing-assistants.htm" },
            { name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Encontre a página do registo de auxiliares de enfermagem ou do departamento de saúde do seu estado. Num papel, escreva os três passos do seu estado, o endereço da página e uma regra que não conhecia (por exemplo sobre a verificação de antecedentes).",
          youCanNow: "listar os passos para ser CNA no seu estado e encontrar a página oficial que define as regras.",
          quickCheck: [
            { objective: "O1", q: "Que passo vem depois de terminar um programa de formação aprovado pelo estado?", options: ["Começar a dar medicamentos", "Passar no exame de competências do estado", "Abrir a sua própria clínica", "Comprar um certificado na internet"], answer: 1, why: "Depois do programa, passa no exame do estado e depois fica inscrito no registo." },
            { objective: "O1", q: "Onde verifica as regras para CNA do seu estado?", options: ["Numa publicação nas redes sociais", "Com um amigo que fez isso há anos", "Na página do registo de auxiliares de enfermagem ou do departamento de saúde do seu estado", "Em qualquer anúncio que diga \"certifique-se depressa\""], answer: 2, why: "É o estado que define as regras, por isso a página oficial dele é a página em que deve confiar." }
          ]
        },
        {
          title: "Mãos limpas e luvas: travar a propagação dos micróbios",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escolher quando limpar as mãos e de que forma limpá-las.",
          text: [
            "As mãos limpas são a forma mais importante de impedir que os micróbios se espalhem num local de cuidados. As pessoas de quem cuida são muitas vezes idosas ou doentes, por isso os micróbios podem fazer-lhes mais mal.",
            "O CDC (a agência de saúde pública dos EUA) diz que os profissionais de saúde devem limpar as mãos logo antes de tocar num doente, depois de tocar num doente ou nas coisas dele, depois de contacto com sangue ou líquidos do corpo e logo depois de tirar as luvas.",
            "O desinfetante para as mãos à base de álcool é a escolha habitual quando as mãos não parecem sujas. Esfregue-o em toda a superfície das mãos até ficarem secas, o que leva cerca de 20 segundos. Use água e sabão quando as mãos parecem sujas, antes de comer e depois de usar a casa de banho. Esfregue todas as partes das mãos e dos dedos.",
            "As luvas ajudam, mas não substituem as mãos limpas. Use um par novo para cada residente, nunca as lave para as usar outra vez e limpe as mãos logo que as tirar. O seu programa vai ensinar como pôr e tirar luvas, batas e máscaras pela ordem certa."
          ],
          steps: ["Limpe as mãos logo antes de tocar num residente.", "Ponha luvas se puder tocar em sangue, líquidos do corpo ou pele ferida.", "Tire as luvas sem tocar na parte de fora com a pele.", "Limpe as mãos logo depois de tirar as luvas e antes de sair do quarto."],
          words: [["Higiene das mãos", "limpar as mãos com desinfetante ou com água e sabão."], ["Controlo de infeções", "os passos que os profissionais de saúde seguem para impedir que os micróbios se espalhem."], ["EPI", "equipamento de proteção individual (em inglês, PPE): luvas, batas, máscaras e proteção para os olhos."]],
          slides: [
            { title: "Quando limpar as mãos", bullets: ["Logo antes de tocar num residente", "Depois de tocar num residente ou nas coisas dele", "Depois de sangue ou líquidos do corpo", "Logo depois de tirar as luvas"] },
            { title: "De que forma", bullets: ["Mãos não sujas: desinfetante, esfregar até secar", "Mãos que parecem sujas: água e sabão", "Água e sabão antes de comer e depois da casa de banho"] },
            { title: "Luvas", bullets: ["Não substituem as mãos limpas", "Um par novo para cada residente", "Limpe as mãos logo que as tirar"] }
          ],
          sources: [{ name: "CDC: Clinical Safety: Hand Hygiene for Healthcare Workers", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }],
          tryIt: "Pratique no seu lavatório. Lave com água e sabão, esfregando as palmas, as costas das mãos, entre os dedos, os polegares, as pontas dos dedos e os pulsos. Depois escreva num cartão os quatro momentos em que um CNA tem de limpar as mãos e guarde-o para estudar.",
          youCanNow: "dizer quando um CNA limpa as mãos, escolher entre desinfetante e água e sabão, e usar luvas sem deixar de limpar as mãos.",
          quickCheck: [
            { objective: "O2", q: "As suas mãos parecem sujas depois de ajudar um residente. O que usa?", options: ["Só desinfetante para as mãos", "Uma toalha de papel seca", "Nada até ao intervalo", "Água e sabão"], answer: 3, why: "Água e sabão é a escolha quando as mãos parecem sujas." },
            { objective: "O2", q: "Acabou de tirar as luvas. O que faz a seguir?", options: ["Limpa as mãos", "Põe as luvas no bolso para as usar outra vez", "Toca no próximo residente", "Nada, porque usou luvas"], answer: 0, why: "As luvas não substituem as mãos limpas; limpe-as logo depois de tirar as luvas." }
          ]
        },
        {
          title: "Direitos dos residentes, privacidade e comunicar maus-tratos",
          objectives: ["O3"],
          minutes: 5,
          goal: "Identificar quando os direitos ou a privacidade de um residente não são respeitados e dizer a quem comunica.",
          text: [
            "As pessoas de quem cuida têm direitos. Escolhem o que vestir e quando descansar, quando conseguem. Têm privacidade quando tomam banho ou usam a casa de banho. São tratadas com respeito e chamadas pelo nome que preferem. Bata à porta, diga quem é e explique o que vai fazer.",
            "As informações de saúde são privadas. Uma lei federal dos EUA chamada HIPAA protege-as. Partilhe as informações de um residente só com a equipa de cuidados que precisa delas para o trabalho. Não fale dos residentes no corredor, em casa nem nas redes sociais, e nunca publique fotografias deles.",
            "Os maus-tratos e a negligência podem ser físicos, emocionais, sexuais ou financeiros, como tirar dinheiro. Os sinais de alerta incluem nódoas negras que ninguém consegue explicar, úlceras de pressão, pouca higiene, uma pessoa que parece com medo ou fechada, ou uma mudança repentina com o dinheiro dela.",
            "Se vir ou suspeitar de maus-tratos, diga logo ao seu enfermeiro ou supervisor. Em muitos estados, os auxiliares de enfermagem são obrigados a comunicar suspeitas de maus-tratos. Se alguém estiver em perigo agora, ligue para o 911 (o número de emergência nos EUA). O Long-Term Care Ombudsman (provedor dos cuidados de longa duração) do seu estado também ajuda os residentes de lares de idosos."
          ],
          steps: ["Bata à porta, diga o seu nome e explique o que vai fazer.", "Feche a cortina ou a porta para os cuidados privados.", "Partilhe informações só com a equipa de cuidados.", "Comunique logo ao enfermeiro os sinais de maus-tratos ou de negligência."],
          words: [["HIPAA", "uma lei federal dos EUA que protege a privacidade das informações de saúde das pessoas."], ["Negligência", "não dar a uma pessoa os cuidados de que precisa, como comida, limpeza ou mudar de posição."], ["Provedor (ombudsman)", "uma pessoa que defende os residentes de lares de idosos e ajuda a resolver problemas."], ["Comunicador obrigatório (mandated reporter)", "um trabalhador que a lei obriga a comunicar suspeitas de maus-tratos."]],
          slides: [
            { title: "Respeito sempre", bullets: ["Bata à porta e diga quem é", "Explique antes de começar", "Dê escolhas quando puder", "Feche a cortina para os cuidados privados"] },
            { title: "Privacidade (HIPAA)", bullets: ["Partilhe só com a equipa de cuidados", "Não fale disso nos corredores nem em casa", "Nada de fotografias nem publicações nas redes sociais"] },
            { title: "Sinais de maus-tratos ou negligência", bullets: ["Nódoas negras que ninguém consegue explicar", "Úlceras de pressão ou pouca higiene", "Medo, isolamento ou mudanças repentinas com o dinheiro"] },
            { title: "O que você faz", bullets: ["Diga logo ao seu enfermeiro ou supervisor", "Perigo agora: ligue para o 911", "O provedor (ombudsman) também ajuda os residentes"] }
          ],
          sources: [
            { name: "MedlinePlus: Elder Abuse", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "MedlinePlus: Patient Rights", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Leia esta história inventada: \"Um colega publica nas redes sociais uma fotografia engraçada do Sr. Lee, um residente, e diz-lhe que a família do Sr. Lee nunca o visita.\" Escreva dois problemas que vê e o que faria sobre cada um.",
          youCanNow: "reconhecer quando os direitos ou a privacidade de um residente não são respeitados e comunicar isso à pessoa certa.",
          quickCheck: [
            { objective: "O3", q: "Um amigo pergunta como está um residente que ele conhece. O que diz?", options: ["Partilha os detalhes de saúde do residente", "Mostra-lhe a ficha", "Diz que não pode partilhar informações dos residentes", "Envia-lhe uma fotografia"], answer: 2, why: "As informações de saúde são privadas e vão só para a equipa de cuidados." },
            { objective: "O3", q: "Vê nódoas negras num residente que ninguém consegue explicar. O que faz?", options: ["Espera uma semana para ver se desaparecem", "Diz logo ao seu enfermeiro ou supervisor", "Pede ao residente para guardar segredo", "Publica sobre isso na internet"], answer: 1, why: "Possíveis maus-tratos comunicam-se logo ao enfermeiro ou ao supervisor." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O caminho para CNA e o básico dos cuidados seguros",
        questions: [
          { objective: "O1", q: "Em que lista tem de estar um auxiliar de enfermagem para trabalhar num lar de idosos?", options: ["Num grupo das redes sociais", "No registo de auxiliares de enfermagem do estado", "Na lista de sócios de um ginásio", "Num site privado de empregos"], answer: 1, why: "Os auxiliares de enfermagem têm de estar no registo do estado para trabalhar num lar de idosos." },
          { objective: "O1", q: "Um site diz \"Obtenha o seu certificado de CNA na internet num dia.\" O que é verdade?", options: ["É o caminho verdadeiro mais rápido", "Substitui o exame do estado", "Verifique primeiro a lista de programas aprovados do estado", "Todos os estados o aceitam"], answer: 2, why: "Só um programa aprovado pelo estado e o exame do estado levam ao registo; verifique a página do próprio estado." },
          { objective: "O2", q: "Quando deve um CNA limpar as mãos?", options: ["Logo antes de tocar num residente", "Só no início do turno", "Só quando as mãos parecem sujas", "Só quando as luvas estão rasgadas"], answer: 0, why: "O CDC diz para limpar as mãos logo antes de tocar num doente, entre outros momentos." },
          { objective: "O2", q: "Porque é que ainda limpa as mãos depois de usar luvas?", options: ["As luvas deixam as mãos mais limpas", "É só para mostrar", "As luvas são usadas outra vez, por isso não importa", "As luvas podem ter furos muito pequenos e os micróbios passam para as mãos quando as tira"], answer: 3, why: "As luvas não substituem as mãos limpas; os micróbios podem chegar às suas mãos." },
          { objective: "O3", q: "Antes de ajudar um residente a tomar banho, o que faz?", options: ["Começa depressa sem falar", "Bate à porta, diz quem é, explica e fecha a cortina", "Deixa a porta aberta para outros ajudarem", "Pede ao colega de quarto do residente para ver"], answer: 1, why: "Bater à porta, explicar e fechar a cortina protegem a dignidade e a privacidade." }
        ]
      }
    },
    {
      name: "Capítulo 2: Cuidados diários, comunicação e o seu plano de exame",
      lessons: [
        {
          title: "Cuidados diários seguros: mover, andar e refeições",
          objectives: ["O4"],
          minutes: 6,
          goal: "Pôr pela ordem certa os passos de segurança das tarefas de cuidados diários.",
          text: [
            "Todas as tarefas de cuidados começam da mesma forma: limpe as mãos, diga quem é, explique o que vai fazer, dê privacidade e verifique o plano de cuidados. Todas as tarefas também terminam da mesma forma: deixe a campainha ao alcance, a cama baixa e travada, e limpe as mãos.",
            "As pessoas que ficam muito tempo na mesma posição podem ter úlceras de pressão, também chamadas escaras, em partes com osso perto da pele, como as ancas, os calcanhares e as costas. O MedlinePlus diz para mudar de posição mais ou menos de duas em duas horas e manter a pele limpa e seca. Siga o horário de mudança de posição do plano de cuidados.",
            "As quedas são um grande risco. Mantenha o chão livre, a campainha perto e a cama baixa. Confirme que o residente usa calçado antiderrapante. Trave as rodas da cadeira de rodas e da cama antes de uma transferência. Use o cinto de marcha e o número de ajudantes que o plano de cuidados diz.",
            "Proteja as suas próprias costas. Dobre os joelhos, mantenha a pessoa ou o objeto perto de você e vire-se com os pés em vez de torcer o corpo. Nunca levante uma pessoa sozinho se o plano diz duas pessoas ou um elevador de transferência. Só vai praticar transferências no seu programa com supervisão."
          ],
          steps: ["Limpe as mãos, diga quem é e explique a tarefa.", "Verifique o plano de cuidados e dê privacidade.", "Trave as rodas e baixe ou suba a cama até uma altura segura.", "Faça a tarefa como o plano de cuidados diz, com ajuda se for preciso.", "Deixe a cama baixa, a campainha ao alcance e limpe as mãos."],
          words: [["Atividades da vida diária (AVD)", "os cuidados pessoais do dia a dia: tomar banho, vestir-se, comer, usar a casa de banho e mover-se."], ["Plano de cuidados", "o plano escrito do enfermeiro que diz que cuidados recebe cada residente."], ["Úlcera de pressão", "pele danificada por ficar muito tempo na mesma posição, também chamada escara."], ["Cinto de marcha", "um cinto forte posto à volta da cintura de uma pessoa para que um ajudante a possa segurar enquanto ela anda ou se move."], ["Mecânica corporal", "usar o corpo de formas seguras para não magoar as costas."]],
          slides: [
            { title: "Comece todas as tarefas", bullets: ["Limpe as mãos e diga quem é", "Explique o que vai fazer", "Dê privacidade e verifique o plano de cuidados"] },
            { title: "Prevenir úlceras de pressão", bullets: ["Mudar de posição mais ou menos de 2 em 2 horas", "Manter a pele limpa e seca", "Seguir o horário de mudança de posição"] },
            { title: "Prevenir quedas", bullets: ["Chão livre, cama baixa, campainha perto", "Calçado antiderrapante", "Travar as rodas antes de uma transferência"] },
            { title: "Proteja as suas costas", bullets: ["Dobre os joelhos e mantenha o peso perto", "Vire-se com os pés, não torça o corpo", "Peça ajuda quando o plano diz duas pessoas"] },
            { title: "Termine todas as tarefas", bullets: ["Cama baixa e travada", "Campainha ao alcance", "Limpe as mãos"] }
          ],
          sources: [
            { name: "MedlinePlus: Pressure Sores", url: "https://medlineplus.gov/pressuresores.html" },
            { name: "MedlinePlus: Falls", url: "https://medlineplus.gov/falls.html" }
          ],
          tryIt: "Escreva estes passos em cartões, misture-os e depois ponha-os por ordem: \"Travar as rodas da cadeira de rodas\", \"Limpar as mãos\", \"Explicar o que vai fazer\", \"Deixar a campainha ao alcance\", \"Verificar o plano de cuidados\". Depois compare a sua ordem com a lição.",
          youCanNow: "pôr pela ordem certa os passos de segurança dos cuidados diários e explicar como eles previnem quedas, úlceras e lesões nas costas.",
          quickCheck: [
            { objective: "O4", q: "O que faz antes de ajudar um residente a passar da cama para uma cadeira de rodas?", options: ["Tira os sapatos do residente", "Sobe a cama o mais alto possível", "Trava as rodas da cadeira de rodas e da cama", "Apaga as luzes"], answer: 2, why: "As rodas travadas impedem a cadeira ou a cama de andar durante uma transferência." },
            { objective: "O4", q: "O plano de cuidados diz duas pessoas para uma transferência, mas você está sozinho. O que faz?", options: ["Faz sozinho para ganhar tempo", "Espera por ajuda ou pergunta ao enfermeiro", "Pede ao residente para tentar sozinho", "Não faz a transferência nesse dia sem dizer a ninguém"], answer: 1, why: "Seguir o plano protege o residente e você; peça ajuda ou pergunte ao enfermeiro." }
          ]
        },
        {
          title: "Observar, medir e comunicar",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escrever uma nota curta com factos sobre uma mudança e comunicá-la ao enfermeiro.",
          text: [
            "Você vê os residentes mais do que qualquer outra pessoa, por isso muitas vezes é o primeiro a notar uma mudança. O seu trabalho é observar, registar e comunicar. É o enfermeiro que decide o que isso significa.",
            "Os quatro sinais vitais principais são a tensão arterial, o pulso (batimentos do coração), a frequência respiratória e a temperatura. Vai aprender a medi-los no seu programa e a praticar nos colegas com supervisão.",
            "Escreva o que viu, ouviu ou mediu, e não o que acha que significa. \"Comeu metade do almoço. Disse: 'Dói-me a barriga.' Com a mão na barriga.\" é melhor do que \"Parece doente.\" Escreva a hora e assine o seu nome.",
            "Algumas mudanças têm de ser comunicadas logo: dor nova, dificuldade em respirar, uma queda, uma mudança em quão acordada ou confusa a pessoa está, ou uma grande mudança num sinal vital. Na dúvida, diga ao enfermeiro."
          ],
          steps: ["Repare na mudança: o que vê, ouve ou mede.", "Escreva os factos, a hora e o seu nome.", "Comunique logo ao enfermeiro se for novo ou grave.", "Anote que comunicou e a quem."],
          words: [["Sinais vitais", "medições das funções básicas do corpo: tensão arterial, pulso, frequência respiratória e temperatura."], ["Objetivo", "factos que pode ver, ouvir, medir ou contar."], ["Subjetivo", "o que o residente lhe diz que sente, escrito com as palavras dele."], ["Ficha", "o registo de cuidados do residente."]],
          slides: [
            { title: "Observar, registar, comunicar", bullets: ["Você nota as mudanças primeiro", "Você regista os factos", "O enfermeiro decide o que significam"] },
            { title: "Quatro sinais vitais", bullets: ["Tensão arterial", "Pulso (batimentos do coração)", "Frequência respiratória", "Temperatura"] },
            { title: "Escreva factos, não suposições", bullets: ["Bem: \"Comeu metade do almoço. Disse: 'Dói-me a barriga.'\"", "Mal: \"Parece doente.\"", "Acrescente a hora e o seu nome"] },
            { title: "Comunique logo", bullets: ["Dor nova ou dificuldade em respirar", "Uma queda", "Mais confuso ou sonolento do que o normal"] }
          ],
          sources: [{ name: "MedlinePlus: Vital Signs", url: "https://medlineplus.gov/vitalsigns.html" }],
          tryIt: "Só para praticar, com um residente inventado: \"A Sra. Rivera costuma ir a pé para o pequeno-almoço. Hoje às 8:15 ficou na cama, disse 'Sinto-me tonta' e não comeu.\" Escreva uma nota de três linhas com factos e uma frase que diria ao enfermeiro.",
          youCanNow: "escrever uma nota curta com factos sobre uma mudança que nota e comunicá-la ao enfermeiro.",
          quickCheck: [
            { objective: "O5", q: "Que nota está escrita da forma certa?", options: ["\"Ele está a ser difícil.\"", "\"Ele deve estar a ficar doente.\"", "\"Ele parece bem, acho eu.\"", "\"10:30. Recusou o almoço. Disse: 'Sinto o peito apertado.'\""], answer: 3, why: "Dá a hora, o que aconteceu e as próprias palavras do residente." },
            { objective: "O5", q: "Um residente fica de repente muito mais confuso do que o normal. O que faz?", options: ["Diz logo ao enfermeiro", "Espera até ao fim do turno", "Dá-lhe um medicamento do carrinho", "Diz só ao colega de quarto dele"], answer: 0, why: "Uma mudança repentina no estado de alerta ou na confusão comunica-se logo ao enfermeiro." }
          ]
        },
        {
          title: "Preparar-se para o exame do estado: o seu plano de estudo",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Fazer um plano de estudo e de exame com datas reais para o exame de CNA do seu estado.",
          text: [
            "Na maioria dos estados o exame de CNA tem duas partes: um exame escrito (alguns estados oferecem-no lido em voz alta) e um exame de habilidades em que mostra algumas habilidades de cuidados a um avaliador. A página do registo do seu estado ou da empresa do exame diz as partes exatas, a lista de habilidades e como se inscrever.",
            "Use o manual oficial do candidato se o seu estado tiver um. Ele lista as habilidades, os passos que o avaliador observa e o que levar no dia do exame. As perguntas de prática gratuitas do seu programa também ajudam.",
            "Estude um pouco todos os dias. Pratique as habilidades nas aulas ou no laboratório aberto, onde um instrutor pode ver você. Diga cada passo em voz alta, incluindo os que as pessoas esquecem: limpar as mãos, dar privacidade e deixar a campainha ao alcance.",
            "Planeie a parte prática: o seu documento de identificação, como vai chegar ao local do exame, quem cuida das crianças e a folga do trabalho. Escreva as datas num calendário."
          ],
          steps: ["Encontre na página oficial as partes do exame do seu estado e o manual do candidato.", "Faça a lista das habilidades que mais precisa de praticar.", "Defina uma hora de estudo diária e duas datas para exames de prática.", "Escreva a data do exame, o que levar e como vai chegar lá."],
          words: [["Manual do candidato", "o guia oficial do estado ou da empresa do exame que explica o exame."], ["Avaliador", "a pessoa que observa e dá a nota do seu exame de habilidades."], ["Exame de habilidades", "a parte do exame em que mostra as habilidades de cuidados passo a passo."]],
          slides: [
            { title: "Duas partes na maioria dos estados", bullets: ["Um exame escrito (alguns estados oferecem-no lido em voz alta)", "Um exame de habilidades observado por um avaliador", "A página do seu estado tem os detalhes"] },
            { title: "Use materiais oficiais", bullets: ["O manual do candidato e a lista de habilidades", "Perguntas de prática do seu programa", "Pratique as habilidades onde um instrutor possa ver"] },
            { title: "Passos que as pessoas esquecem", bullets: ["Limpar as mãos", "Dar privacidade", "Campainha ao alcance, cama baixa"] },
            { title: "Planeie o dia do exame", bullets: ["Documento de identificação e o que levar", "Transporte e quem cuida das crianças", "Folga do trabalho"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Nursing Assistants and Orderlies (How to Become One)", url: "https://www.bls.gov/ooh/healthcare/nursing-assistants.htm#tab-4" }
          ],
          tryIt: "Tarefa final: faça o seu plano de estudo e de exame para CNA numa página. Inclua a página oficial do seu estado, dois programas aprovados com o custo e a data de início das páginas deles, as partes do exame, um horário de estudo semanal com datas, as cinco habilidades que mais vai praticar e uma pessoa a quem vai perguntar quando tiver uma dúvida.",
          youCanNow: "fazer um plano de estudo e de exame com datas que cobre todas as partes do exame de CNA do seu estado.",
          quickCheck: [
            { objective: "O6", q: "Onde encontra as habilidades exatas do exame do seu estado?", options: ["Num comentário qualquer num vídeo", "No manual oficial do candidato ou na página do registo", "No palpite de um amigo", "O exame não diz"], answer: 1, why: "O manual oficial ou a página do registo lista as habilidades e o que o avaliador verifica." },
            { objective: "O6", q: "Que plano de estudo é o mais forte?", options: ["Estudar na noite antes do exame", "Estudar só a parte escrita", "Estudo diário, prática de habilidades nas aulas, exames de prática com datas", "Não praticar e esperar que corra bem"], answer: 2, why: "O estudo regular, a prática de habilidades com supervisão e os exames de prática com datas cobrem todas as partes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Cuidados diários, comunicação e o seu plano de exame",
        questions: [
          { objective: "O4", q: "Mais ou menos de quanto em quanto tempo se deve mudar a posição de uma pessoa que não se consegue mexer, a não ser que o plano de cuidados diga outra coisa?", options: ["Uma vez por dia", "Uma vez por semana", "Só quando ela pede", "Mais ou menos de duas em duas horas"], answer: 3, why: "O MedlinePlus diz para mudar de posição mais ou menos de duas em duas horas para ajudar a prevenir úlceras de pressão." },
          { objective: "O4", q: "Qual destas é uma mecânica corporal segura?", options: ["Dobrar-se pela cintura e torcer o corpo", "Dobrar os joelhos e manter o peso perto", "Levantar com os braços esticados para a frente", "Levantar sozinho e depressa uma pessoa pesada"], answer: 1, why: "Dobrar os joelhos e manter o peso perto protege as suas costas." },
          { objective: "O5", q: "Qual destes é um sinal vital?", options: ["Pulso", "Comida preferida", "Número dos sapatos", "Número do quarto"], answer: 0, why: "O pulso, a tensão arterial, a frequência respiratória e a temperatura são os sinais vitais principais." },
          { objective: "O5", q: "Quem decide o que significa uma mudança num residente?", options: ["Só o CNA", "O colega de quarto do residente", "O enfermeiro, depois de o CNA a comunicar", "Ninguém"], answer: 2, why: "O CNA observa e comunica; o enfermeiro decide o que significa." },
          { objective: "O6", q: "O que deve ter um plano de exame de CNA?", options: ["Só a data do exame", "Horas de estudo, exames de prática, a data do exame e o que levar", "Só a morada do programa", "Uma lista de programas de televisão"], answer: 1, why: "Um plano completo cobre o estudo, a prática e os detalhes do dia do exame." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para Auxiliar de Enfermagem Certificado (CNA)",
    questions: [
      { objective: "O1", q: "Qual é um trabalho principal de um auxiliar de enfermagem?", options: ["Ajudar as pessoas a tomar banho, vestir-se, comer e mover-se", "Passar receitas médicas", "Fazer cirurgias", "Decidir um diagnóstico"], answer: 0, why: "Os CNA ajudam na vida diária e comunicam ao enfermeiro." },
      { objective: "O1", q: "O que faz este curso?", options: ["Dá-lhe um certificado de CNA", "Inscreve-o no registo", "Prepara-o para um programa aprovado pelo estado e para o exame do estado", "Substitui o exame de habilidades"], answer: 2, why: "O curso prepara você; é o programa do estado, o exame e o registo que fazem de você um CNA." },
      { objective: "O1", q: "Quais são os três passos na maioria dos estados?", options: ["Comprar uma farda, candidatar-se, começar a trabalhar", "Programa aprovado, exame do estado, inscrição no registo", "Questionário na internet, entrevista, crachá", "Ver vídeos, assinar um formulário, trabalhar"], answer: 1, why: "A maioria dos estados exige um programa aprovado, o exame de competências e o registo." },
      { objective: "O1", q: "As regras sobre a verificação de antecedentes dos auxiliares de enfermagem:", options: ["São iguais em todo o lado", "Não existem", "São só para enfermeiros", "Mudam de estado para estado, por isso verifique a página do seu estado"], answer: 3, why: "Cada estado define as suas próprias regras, por isso verifique a página oficial." },
      { objective: "O2", q: "As suas mãos não parecem sujas e vai tocar num residente. O que usa?", options: ["Nada", "Desinfetante para as mãos à base de álcool, esfregado até secar", "Creme para as mãos", "Um toalhete húmido da sua mala"], answer: 1, why: "O desinfetante para as mãos é a escolha habitual quando as mãos não parecem sujas." },
      { objective: "O2", q: "Como usa as luvas da forma certa?", options: ["Um par novo para cada residente e depois limpar as mãos", "Um par para o turno inteiro", "Lavá-las e usá-las outra vez", "Usá-las em vez de limpar as mãos"], answer: 0, why: "Luvas novas para cada residente, e mãos limpas depois de as tirar." },
      { objective: "O2", q: "Quando deve usar água e sabão em vez de desinfetante?", options: ["Nunca", "Só aos fins de semana", "Quando as mãos parecem sujas e depois de usar a casa de banho", "Só antes de sair do trabalho"], answer: 2, why: "O CDC diz água e sabão quando as mãos parecem sujas, antes de comer e depois da casa de banho." },
      { objective: "O3", q: "Que lei protege a privacidade das informações de saúde?", options: ["OSHA", "HIPAA", "FMLA", "ADA"], answer: 1, why: "A HIPAA protege a privacidade das informações de saúde." },
      { objective: "O3", q: "Um colega publica na internet uma fotografia de um residente. Isto é:", options: ["Aceitável se for engraçada", "Aceitável se a cara estiver desfocada", "Bom para a instituição", "Um problema de privacidade a comunicar"], answer: 3, why: "As fotografias de residentes nas redes sociais violam a privacidade deles; comunique-o." },
      { objective: "O3", q: "Qual é um possível sinal de negligência?", options: ["Roupa limpa", "Um residente que sorri", "Úlceras de pressão e pouca higiene", "Uma visita da família"], answer: 2, why: "As úlceras de pressão e a pouca higiene podem ser sinais de que os cuidados não estão a ser dados." },
      { objective: "O3", q: "Um residente quer vestir hoje uma camisa vermelha, e não a azul que você escolheu. O que faz?", options: ["Ajuda-o a vestir a camisa vermelha", "Insiste na azul", "Diz-lhe que não pode escolher", "Não o veste"], answer: 0, why: "Os residentes têm o direito de fazer escolhas sobre os seus próprios cuidados quando conseguem." },
      { objective: "O4", q: "O que faz no fim de todas as tarefas de cuidados?", options: ["Deixa a cama alta", "Tira a campainha de perto", "Deixa a cama baixa, a campainha ao alcance e limpa as mãos", "Deixa a porta aberta para verificações"], answer: 2, why: "Uma cama baixa, a campainha ao alcance e as mãos limpas mantêm o residente seguro." },
      { objective: "O4", q: "As úlceras de pressão aparecem muitas vezes em:", options: ["Partes com osso, como as ancas e os calcanhares", "Cabelo", "Unhas", "Pálpebras"], answer: 0, why: "Aparecem onde o osso está perto da pele e a pressão fica demasiado tempo." },
      { objective: "O4", q: "Para prevenir quedas, um residente deve usar:", options: ["Só meias", "Nenhum calçado", "Sapatos de salto alto", "Calçado antiderrapante"], answer: 3, why: "O calçado antiderrapante ajuda a prevenir quedas." },
      { objective: "O4", q: "Onde se praticam as transferências na prática?", options: ["Em casa, num familiar, sozinho", "Num programa aprovado pelo estado, com supervisão", "Só no dia do exame", "Só a partir de um vídeo"], answer: 1, why: "As habilidades práticas aprendem-se num programa com supervisão, onde um instrutor pode corrigir você." },
      { objective: "O5", q: "Que nota tem factos?", options: ["\"Ela está preguiçosa hoje.\"", "\"Provavelmente é gripe.\"", "\"2:00. Bebeu um copo de água. Disse: 'Tenho frio.'\"", "\"Parece estranha.\""], answer: 2, why: "Regista a hora, uma quantidade medida e as próprias palavras do residente." },
      { objective: "O5", q: "Um residente cai mas diz que se sente bem. O que faz?", options: ["Comunica logo a queda ao enfermeiro", "Ajuda-o a levantar-se e não diz nada", "Escreve sobre isso na semana seguinte", "Pede-lhe para não dizer a ninguém"], answer: 0, why: "Todas as quedas se comunicam logo para que o enfermeiro possa examinar o residente." },
      { objective: "O5", q: "Qual destes NÃO é um dos quatro sinais vitais principais?", options: ["Temperatura", "Frequência respiratória", "Tensão arterial", "Peso dos sapatos"], answer: 3, why: "Os quatro sinais vitais principais são a tensão arterial, o pulso, a frequência respiratória e a temperatura." },
      { objective: "O6", q: "Na maioria dos estados, o exame de CNA tem:", options: ["Só uma redação", "Uma parte escrita e uma parte de habilidades", "Só uma entrevista", "Nenhum exame"], answer: 1, why: "A maioria dos estados usa um exame escrito (ou lido em voz alta) e um exame de habilidades; verifique a página do seu estado." },
      { objective: "O6", q: "No exame de habilidades, que passo as pessoas esquecem muitas vezes?", options: ["Cumprimentar a família do avaliador", "Levar lanches", "Limpar as mãos e deixar a campainha ao alcance", "Usar joias"], answer: 2, why: "Limpar as mãos, a privacidade e a campainha são passos fáceis de saltar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [2, 4, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Caminho oficial do estado", objective: "O1", notYet: "Nenhuma página oficial, ou os passos vieram de um anúncio ou de um amigo.", meets: "Lista os passos do programa, do exame e do registo a partir da página oficial do estado, com o endereço dela.", exceeds: "Também anota as regras do estado sobre a verificação de antecedentes e para quem ligar com dúvidas." },
      { name: "Programas aprovados", objective: "O1", notYet: "Faltam programas, ou não está claro que são aprovados pelo estado.", meets: "Dois programas com o custo e a data de início tirados das páginas deles, e a aprovação verificada.", exceeds: "Também lista uma opção gratuita ou paga pelo empregador, ou ajuda de um American Job Center." },
      { name: "Partes do exame cobertas", objective: "O6", notYet: "Só a parte escrita, ou nenhuma parte do exame listada.", meets: "Lista todas as partes do exame do estado e as cinco habilidades que mais vai praticar.", exceeds: "Liga cada habilidade aos passos que as pessoas esquecem muitas vezes, como mãos limpas e privacidade." },
      { name: "Horário com datas", objective: "O6", notYet: "Sem datas, ou uma única sessão de estudo à pressa.", meets: "Horas de estudo semanais, duas datas de exames de prática e a data do exame num calendário.", exceeds: "Também planeia o que precisa no dia do exame: identificação, transporte, quem cuida das crianças e folga." },
      { name: "Segurança e comunicação", objective: "O5", notYet: "Nenhuma pessoa indicada a quem comunicar ou fazer perguntas.", meets: "Indica a pessoa a quem perguntar ou comunicar, como o instrutor ou o enfermeiro.", exceeds: "Acrescenta uma pequena nota de prática escrita com factos, e não suposições." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que se inscrevem num programa de auxiliar de enfermagem aprovado pelo estado em 60 dias",
      "Alunos que passam no exame de competências de CNA do seu estado e ficam inscritos no registo",
      "Alunos contratados como auxiliares de enfermagem em 6 meses (inquérito de seguimento)",
      "Os programas parceiros dizem que menos alunos desistem nas primeiras semanas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet para encontrar a página do registo do estado",
      "Papel, caneta e cartões para as tarefas \"Experimente agora\"",
      "Um lavatório com sabão para a prática de lavar as mãos",
      "Um calendário (em papel ou no telefone) para o plano de estudo",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Antes do curso, encontre a página do registo de auxiliares de enfermagem do seu estado e uma lista de programas aprovados da zona, e partilhe os links.",
      "Nunca deixe os alunos praticarem transferências ou levantar pessoas uns nos outros sem um instrutor formado e o equipamento certo.",
      "Diga claramente que este curso não certifica ninguém e que as regras, as horas e as taxas vêm do estado.",
      "Se um aluno estiver preocupado com uma condenação no passado, indique-lhe as regras do próprio estado e um conselheiro de reintegração ou de apoio jurídico.",
      "Avalie o plano final com a grelha de avaliação e ajude cada aluno a contactar um programa aprovado antes de sair."
    ]
  }
};
