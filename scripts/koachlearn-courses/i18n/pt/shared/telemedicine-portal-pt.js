"use strict";

// Koach Learn course (Portuguese translation of shared/telemedicine-portal.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the United States (911, HIPAA, HealthIT.gov, MyChart); only the explanations are translated.

module.exports = {
  id: "telemedicine-portal-pt",
  lang: "pt",
  translationOf: "telemedicine-portal",
  category: "Seniors and Technology",
  name: "Usar a Telemedicina e o Portal do Paciente",
  skills: "Entrar num portal do paciente, Ler resultados de exames e notas de consultas, Enviar mensagens à sua equipa de saúde, Pedir receitas e marcar consultas, Entrar numa consulta por vídeo",
  outcome: "entrar no seu portal do paciente, encontrar os resultados dos seus exames e as notas das consultas, enviar uma mensagem clara à sua equipa de saúde, pedir a renovação de um medicamento ou uma consulta, e entrar numa consulta por vídeo preparado com as suas perguntas.",
  about: [
    "Muitas clínicas e hospitais têm agora um portal do paciente: um site ou aplicação seguro onde pode ver as suas informações de saúde e falar com a sua equipa de saúde. Muitos também oferecem consultas por vídeo, às vezes chamadas telemedicina ou telessaúde, para que possa ver um médico ou enfermeiro sem viajar.",
    "Este curso mostra como entrar no seu portal, ler resultados, enviar mensagens, pedir medicamentos e consultas, e preparar-se e entrar numa consulta por vídeo.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Este curso ensina a usar as ferramentas; para perguntas sobre a sua própria saúde, pergunte sempre ao seu médico, enfermeiro ou farmacêutico. Numa emergência, ligue para o 911, não use o portal."
  ],
  finalTask: "Entre no seu portal do paciente. Encontre um resultado de exame ou um resumo de consulta e depois escreva (e envie, se tiver uma pergunta verdadeira) uma mensagem curta e clara à sua equipa de saúde com a sua pergunta. Encontre onde pedir a renovação de um medicamento ou uma consulta. Por fim, escreva uma lista com três perguntas e os medicamentos que toma agora para a sua próxima consulta, e encontre em que parte do portal ou do email vai aparecer o link da consulta por vídeo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pacientes e cuidadores que usam clínicas, hospitais ou planos de saúde nos Estados Unidos: idosos, pessoas com doenças de longa duração, cuidadores que ajudam um familiar, pessoas que voltam à comunidade e qualquer pessoa cuja clínica agora envia resultados e links de consultas pela internet.",
    startingPoint: "Sabem usar um telefone ou computador para abrir aplicações e sites e escrever mensagens curtas. Muitos receberam um código de ativação do portal mas nunca entraram, ficam preocupados com resultados que veem na internet e nunca entraram numa consulta por vídeo.",
    gap: "As clínicas agora partilham resultados, notas de consultas, renovação de medicamentos, marcações e consultas por vídeo através dos portais do paciente. Os pacientes que não os sabem usar esperam mais tempo, perdem resultados e mensagens, ficam sem medicamentos ou faltam a consultas por vídeo, e alguns enviam dados de saúde privados por meios pouco seguros.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; palavras como intervalo de referência, código de ativação e eCheck-in são explicadas",
      "Aparelhos: um telefone, tablet ou computador com câmara e microfone para as consultas por vídeo",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total",
      "Não é aconselhamento médico: as perguntas de saúde vão para o médico, enfermeiro ou farmacêutico do próprio aluno; as emergências vão para o 911",
      "Privacidade: os alunos nunca escrevem o nome, a data de nascimento ou números do processo clínico numa ferramenta de IA, e não enviam dados de saúde por email normal ou SMS"
    ],
    prerequisites: "Nenhum. O curso \"E-mail e Comunicação pela Internet\" ajuda os alunos que ainda não têm conta de email."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um código de ativação ou o link oficial de inscrição da sua clínica", action: "criar a sua conta no portal do paciente e entrar com segurança", standard: "usando o site ou a aplicação oficial, uma palavra-passe que não usa em mais lado nenhum e a verificação em dois passos, se existir" },
    { id: "O2", condition: "No seu portal do paciente", action: "encontrar um resultado de exame e um resumo de consulta e anotar qualquer pergunta sobre eles", standard: "lendo o resultado ao lado do seu intervalo de referência e levando as perguntas à sua equipa de saúde em vez de adivinhar" },
    { id: "O3", condition: "Com uma pergunta de saúde que não é urgente", action: "escrever uma mensagem curta e clara no portal à sua equipa de saúde", standard: "com a sua pergunta e detalhes úteis, e enviando tudo o que é urgente para o 911" },
    { id: "O4", condition: "No seu portal do paciente", action: "pedir a renovação de um medicamento e encontrar onde marcar ou mudar uma consulta", standard: "pedindo a renovação alguns dias antes de o medicamento acabar e ligando para a clínica quando o portal não o consegue fazer" },
    { id: "O5", condition: "No dia antes de uma consulta por vídeo", action: "preparar o seu aparelho, o lugar, as perguntas e a lista de medicamentos", standard: "com o aparelho carregado, a câmara e o microfone testados e uma lista escrita pronta" },
    { id: "O6", condition: "No dia de uma consulta por vídeo", action: "entrar a horas, falar com clareza e repetir o plano antes de desligar", standard: "entrando 10 a 15 minutos antes e lendo o resumo da consulta depois" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O seu portal do paciente",
      lessons: [
        {
          objectives: ["O1"],
          title: "Entrar no seu portal do paciente",
          minutes: 5,
          goal: "Criar a sua conta no portal e entrar com segurança.",
          text: [
            "Um portal do paciente é um site ou aplicação seguro da sua clínica, hospital ou plano de saúde. Um dos mais comuns é o MyChart, usado por muitos sistemas de saúde, mas o portal da sua clínica pode ter outro nome. Pergunte na receção qual é o portal que usam.",
            "Para se inscrever, normalmente precisa de um código de ativação da clínica (impresso num resumo de consulta ou enviado por SMS ou email), ou inscreve-se com o seu nome, a data de nascimento e um código enviado para o seu telefone. Use o link no site oficial da sua clínica ou a aplicação oficial da loja de aplicações.",
            "Escolha uma palavra-passe forte que não usa em mais lado nenhum e ative a verificação em dois passos, se existir. Não entre num computador partilhado, a não ser que termine a sessão e feche o navegador no fim."
          ],
          steps: ["Pergunte à sua clínica qual é o portal que usa.", "Peça à clínica o seu código de ativação ou o link de inscrição.", "Use o site oficial da clínica ou a aplicação oficial.", "Crie uma palavra-passe forte e só sua.", "Ative a verificação em dois passos, se existir.", "Num computador partilhado: termine a sessão e feche o navegador."],
          words: [["Portal do paciente", "um site ou aplicação seguro onde vê as suas informações de saúde e contacta a sua equipa de saúde."], ["Código de ativação", "um código de uso único dado pela clínica que liga a sua conta do portal ao seu processo clínico."], ["Equipa de saúde", "o seu médico, os enfermeiros e outros funcionários que cuidam da sua saúde."]],
          slides: [
            { title: "O que é um portal do paciente", bullets: ["Um site ou aplicação seguro da sua clínica ou plano", "O MyChart é comum; pergunte à sua clínica qual usa"] },
            { title: "Inscrever-se", bullets: ["Código de ativação dado pela clínica", "Só o site ou a aplicação oficial"] },
            { title: "Mantenha a conta segura", bullets: ["Palavra-passe forte e só sua", "Verificação em dois passos", "Termine a sessão em computadores partilhados"] }
          ],
          tryIt: "Encontre o portal da sua clínica no site oficial dela ou pergunte na receção. Crie a sua conta ou entre, depois termine a sessão e entre outra vez para ter a certeza de que consegue fazê-lo sozinho.",
          youCanNow: "encontrar o portal do paciente da sua clínica, criar a sua conta e entrar com segurança.",
          quickCheck: [
            { objective: "O1", q: "Quem lhe pode dizer qual é o portal do paciente que a sua clínica usa?", options: ["Um anúncio num motor de pesquisa", "Um desconhecido na internet", "O seu banco", "A receção da clínica"], answer: 3, why: "Pergunte na receção qual é o portal que a clínica usa." },
            { objective: "O1", q: "Entrou no seu portal num computador da biblioteca. O que faz quando acaba?", options: ["Deixa a página aberta para mais tarde", "Termina a sessão e fecha o navegador", "Guarda a palavra-passe no navegador", "Escreve a palavra-passe na mesa"], answer: 1, why: "Num computador partilhado, termine a sessão e feche o navegador no fim." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ler resultados de exames e notas de consultas",
          minutes: 5,
          goal: "Encontrar um resultado de exame e um resumo de consulta no seu portal.",
          text: [
            "Os portais têm secções como Resultados de exames, Consultas ou Marcações, Medicamentos e Resumo de saúde. Os resultados muitas vezes mostram o seu valor ao lado de um intervalo normal ou de referência. Um resultado fora do intervalo costuma estar marcado, mas isso nem sempre quer dizer que há algum problema.",
            "Pode ver um resultado antes de o seu médico falar consigo sobre ele. Não entre em pânico e não adivinhe. Anote a sua pergunta e pergunte à sua equipa de saúde. Uma ferramenta de IA pode ajudar a explicar uma palavra médica com palavras simples, mas nunca escreva nela o seu nome, a data de nascimento ou números do processo clínico, e confirme a resposta com a sua equipa de saúde.",
            "O HealthIT.gov explica que, segundo a Regra de Privacidade da HIPAA, você tem o direito de ver e de receber uma cópia do seu processo clínico, incluindo cópias eletrónicas, mesmo que não tenha pago as suas contas médicas."
          ],
          steps: ["Abra Resultados de exames ou Resultados.", "Toque num resultado para ver o seu valor e o intervalo normal.", "Abra Consultas para ler o resumo da sua consulta.", "Anote qualquer palavra ou resultado que não entende.", "Pergunte à sua equipa de saúde; não adivinhe."],
          words: [["Intervalo de referência", "os valores habituais dos resultados de pessoas saudáveis."], ["Resumo da consulta", "as notas da sua consulta, como o seu plano e os medicamentos."], ["HIPAA", "uma lei dos Estados Unidos que protege as suas informações de saúde e lhe dá o direito de ver o seu processo clínico."]],
          slides: [
            { title: "Secções do portal", bullets: ["Resultados de exames", "Consultas ou Marcações", "Medicamentos", "Resumo de saúde"] },
            { title: "Ler um resultado", bullets: ["O seu valor ao lado de um intervalo normal", "Fora do intervalo nem sempre é um problema", "Pergunte; não adivinhe"] },
            { title: "Usar a IA para explicar palavras", bullets: ["Pode usar para explicar uma palavra médica com palavras simples", "Nunca escreva o nome, a data de nascimento ou números do processo", "Confirme com a sua equipa de saúde"] },
            { title: "O seu direito ao seu processo clínico", bullets: ["Ver e receber uma cópia, incluindo cópias eletrónicas", "Mesmo que tenha contas médicas por pagar"] }
          ],
          sources: [{ name: "HealthIT.gov: Como obter o seu processo clínico (em inglês)", url: "https://www.healthit.gov/how-to-get-your-health-record/" }],
          tryIt: "No seu portal, abra um resultado de exame ou um resumo de consulta. Anote uma palavra ou um número que gostava que lhe explicassem, para perguntar à sua equipa de saúde.",
          youCanNow: "encontrar e ler um resultado de exame e um resumo de consulta, e saber quando perguntar à sua equipa de saúde.",
          quickCheck: [
            { objective: "O2", q: "O que quer dizer um resultado fora do intervalo de referência?", options: ["Nem sempre é um problema; pergunte à sua equipa de saúde", "Você tem de certeza uma doença grave", "O exame foi mal feito", "Deve parar todos os seus medicamentos"], answer: 0, why: "Um resultado marcado nem sempre quer dizer que há um problema; pergunte à sua equipa de saúde." },
            { objective: "O2", q: "O seu médico ainda não viu os seus novos resultados e você está preocupado. O que faz?", options: ["Adivinha o que quer dizer num fórum", "Escreve o seu nome e o número do processo numa ferramenta de IA", "Anota a sua pergunta e pergunta à sua equipa de saúde", "Muda você mesmo os seus medicamentos"], answer: 2, why: "Não entre em pânico nem adivinhe; anote a sua pergunta e pergunte à sua equipa de saúde." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Enviar mensagens à sua equipa de saúde",
          minutes: 5,
          goal: "Enviar uma mensagem curta e clara à sua equipa de saúde através do portal.",
          text: [
            "A maioria dos portais tem uma secção Mensagens para perguntas que não são urgentes, como uma pergunta sobre um medicamento, um formulário ou um resultado. As respostas podem demorar um dia ou mais, por isso não use as mensagens para nada urgente. Numa emergência, ligue para o 911.",
            "Uma boa mensagem é curta. Diga para quem é, a sua pergunta e os detalhes que ajudam: quando começou, o que já experimentou e o que precisa. Por exemplo: \"Desde segunda-feira sinto tonturas depois de tomar de manhã o meu novo comprimido para a tensão. Devo tomá-lo à noite?\"",
            "Algumas clínicas podem cobrar ao seu seguro as mensagens que precisam de conselho médico. Pergunte à sua clínica se não tiver a certeza. As mensagens no portal são seguras; não envie dados de saúde por email normal ou SMS em vez disso."
          ],
          steps: ["Abra Mensagens e escolha Nova mensagem.", "Escolha para quem é ou o assunto.", "Escreva a sua pergunta, quando começou e o que precisa.", "Leia uma vez e envie.", "Veja no portal ou no seu email se já há resposta.", "Urgente? Ligue para a clínica. Emergência? Ligue para o 911."],
          words: [["Mensagem segura", "uma mensagem privada enviada dentro do portal."], ["Não urgente", "pode esperar com segurança um ou dois dias por uma resposta."]],
          slides: [
            { title: "As mensagens são para perguntas não urgentes", bullets: ["Medicamentos, formulários, resultados", "As respostas podem demorar um dia ou mais", "Emergência: ligue para o 911"] },
            { title: "Uma mensagem clara", bullets: ["Para quem é e a sua pergunta", "Quando começou e o que já experimentou", "O que precisa"] },
            { title: "É bom saber", bullets: ["Algumas clínicas podem cobrar mensagens com conselho médico", "Use o portal, não o email normal nem SMS"] }
          ],
          tryIt: "Abra Mensagens no seu portal e escreva um rascunho de uma mensagem curta com as três partes. Se tiver uma pergunta verdadeira e não urgente, envie-a; se não, apague o rascunho.",
          youCanNow: "escrever e enviar uma mensagem clara e não urgente à sua equipa de saúde, e saber quando deve ligar em vez disso.",
          quickCheck: [
            { objective: "O3", q: "Porque não deve usar as mensagens do portal para problemas urgentes?", options: ["As mensagens não são seguras", "As mensagens são sempre lidas por um robô", "As respostas podem demorar um dia ou mais", "Cada mensagem custa dinheiro"], answer: 2, why: "As respostas podem demorar um dia ou mais, por isso as emergências precisam do 911." },
            { objective: "O3", q: "Tem uma pergunta sobre um formulário que a clínica lhe deu. O que faz?", options: ["Envia uma mensagem curta no portal a dizer que formulário é e o que precisa", "Envia os seus dados de saúde por email normal", "Liga para o 911", "Publica a pergunta nas redes sociais"], answer: 0, why: "As perguntas não urgentes vão numa mensagem curta e clara no portal." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O seu portal do paciente",
        questions: [
          { objective: "O1", q: "O que é um portal do paciente?", options: ["Uma aplicação de redes sociais", "Um site ou aplicação seguro para ver as suas informações de saúde e contactar a sua equipa de saúde", "Uma farmácia", "Um serviço do governo de apoios sociais"], answer: 1, why: "Os portais dão acesso seguro ao seu processo clínico e à sua equipa de saúde." },
          { objective: "O1", q: "Onde deve obter o link para se inscrever no seu portal?", options: ["Numa SMS de um desconhecido", "Num anúncio de pesquisa", "No site oficial da sua clínica ou na receção", "Numa publicação nas redes sociais"], answer: 2, why: "As fontes oficiais mantêm você longe de sites falsos." },
          { objective: "O2", q: "Um resultado de exame está fora do intervalo normal e o seu médico ainda não ligou. O que faz?", options: ["Anota a sua pergunta e pergunta à sua equipa de saúde", "Entra em pânico", "Para todos os seus medicamentos", "Publica-o nas redes sociais"], answer: 0, why: "Um resultado marcado nem sempre é um problema; pergunte à sua equipa de saúde." },
          { objective: "O2", q: "Quer que uma ferramenta de IA explique uma palavra médica. O que deve deixar de fora?", options: ["A palavra médica", "As palavras \"explique de forma simples\"", "Um pedido de exemplo", "O seu nome, a data de nascimento e os números do processo"], answer: 3, why: "Nunca coloque dados de identificação de saúde privados em ferramentas de IA." },
          { objective: "O3", q: "Sente de repente uma dor no peito. O que faz?", options: ["Envia uma mensagem no portal", "Liga para o 911", "Espera por uma consulta por vídeo na próxima semana", "Lê os seus resultados antigos"], answer: 1, why: "Os portais são para perguntas não urgentes; as emergências precisam do 911." }
        ]
      }
    },
    {
      name: "Capítulo 2: Medicamentos, consultas e consultas por vídeo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pedir medicamentos e marcar consultas",
          minutes: 4,
          goal: "Pedir a renovação de um medicamento e encontrar onde marcar ou mudar uma consulta.",
          text: [
            "Na secção Medicamentos, muitos portais mostram um botão Pedir renovação ao lado de cada medicamento. Escolha o medicamento e a sua farmácia, e envie. Peça alguns dias antes de o medicamento acabar, porque a clínica e a farmácia precisam de tempo.",
            "Na secção Marcações ou Consultas, muitas vezes pode ver as próximas consultas, marcar alguns tipos de consulta, cancelar ou entrar numa lista de espera. Algumas consultas têm de ser marcadas por telefone; o portal diz quando é assim.",
            "A sua farmácia pode ter a sua própria aplicação que avisa quando o medicamento está pronto. Se alguma coisa não funcionar no portal, ligue para a clínica; isso está sempre bem."
          ],
          steps: ["Abra Medicamentos.", "Toque em Pedir renovação ao lado do medicamento.", "Escolha a sua farmácia e envie.", "Peça alguns dias antes de o medicamento acabar.", "Abra Marcações para ver, marcar, mudar ou cancelar consultas."],
          words: [["Renovação (de um medicamento)", "mais quantidade de um medicamento que já toma."], ["Lista de espera", "uma lista que lhe oferece uma hora mais cedo se alguém cancelar."]],
          slides: [
            { title: "Renovar medicamentos", bullets: ["Secção Medicamentos", "Pedir renovação, escolher a farmácia, enviar", "Peça alguns dias antes de acabar"] },
            { title: "Consultas", bullets: ["Veja as próximas consultas", "Marque, mude ou cancele algumas consultas", "Algumas ainda precisam de uma chamada"] },
            { title: "Quando não funciona", bullets: ["Ligue para a clínica", "Isso está sempre bem"] }
          ],
          tryIt: "Abra a secção Medicamentos no seu portal e encontre o botão de renovação (só envie um pedido se precisar). Depois abra Marcações e encontre a sua próxima consulta ou onde marcar uma.",
          youCanNow: "pedir a renovação de um medicamento e encontrar, marcar ou mudar uma consulta no seu portal.",
          quickCheck: [
            { objective: "O4", q: "Onde é que muitos portais mostram um botão Pedir renovação?", options: ["Na secção Resultados de exames", "Ao lado de cada medicamento na secção Medicamentos", "Na caixa de entrada das Mensagens", "Na página de entrada"], answer: 1, why: "Muitos portais põem um botão de renovação ao lado de cada medicamento." },
            { objective: "O4", q: "O botão de renovação do portal não funciona para um dos seus medicamentos. O que faz?", options: ["Deixa de tomar o medicamento", "Espera até acabar", "Encomenda o medicamento num anúncio de um site", "Liga para a clínica"], answer: 3, why: "Se alguma coisa não funcionar no portal, ligar para a clínica está sempre bem." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Preparar-se para uma consulta por vídeo",
          minutes: 5,
          goal: "Preparar o seu aparelho, o lugar e as perguntas antes de uma consulta por vídeo.",
          text: [
            "Uma consulta por vídeo (também chamada telemedicina ou telessaúde) deixa-o ver um médico, enfermeiro ou conselheiro no seu telefone, tablet ou computador. Funciona bem para muitas consultas de seguimento, revisões de medicamentos, consultas de saúde mental e problemas simples. Alguns problemas ainda precisam de um exame presencial, e a sua equipa de saúde vai dizer-lhe.",
            "Prepare-se no dia antes: carregue o seu aparelho, confirme que a aplicação do portal ou a aplicação de vídeo está instalada, e teste a câmara e o microfone. Muitos portais têm um botão de teste ou um eCheck-in que pode fazer antes.",
            "Encontre um lugar calmo, privado e com boa luz. Anote as suas perguntas, os sintomas e quando começaram, e uma lista dos seus medicamentos. Tenha perto os óculos, as caixas dos comprimidos e, se ajudar, uma medição da tensão arterial ou um termómetro. Um familiar ou cuidador pode participar para ajudar, se quiser."
          ],
          steps: ["Carregue o aparelho e confirme que a aplicação está instalada.", "Teste a câmara e o microfone.", "Faça o eCheck-in no portal, se houver.", "Escolha um lugar calmo, privado e com boa luz.", "Anote as perguntas, os sintomas e os medicamentos.", "Tenha perto as caixas dos comprimidos e os óculos."],
          words: [["Telemedicina ou telessaúde", "ver a sua equipa de saúde por vídeo ou telefone em vez de ir pessoalmente."], ["eCheck-in", "preencher formulários no portal antes da sua consulta."]],
          slides: [
            { title: "O que é uma consulta por vídeo", bullets: ["Ver a sua equipa de saúde num ecrã", "Boa para seguimento, revisão de medicamentos, aconselhamento", "Alguns problemas ainda precisam de consulta presencial"] },
            { title: "No dia antes", bullets: ["Carregue o aparelho", "Teste a câmara e o microfone", "Faça o eCheck-in"] },
            { title: "Tenha pronto", bullets: ["Um lugar calmo, privado e com boa luz", "Perguntas, sintomas e lista de medicamentos", "Caixas dos comprimidos e óculos perto"] }
          ],
          tryIt: "Escreva uma lista para a sua próxima consulta: três perguntas, os seus sintomas e quando começaram, e todos os medicamentos que toma com a dose. Guarde-a junto do seu aparelho.",
          youCanNow: "preparar o seu aparelho, o lugar e as perguntas para uma consulta por vídeo.",
          quickCheck: [
            { objective: "O5", q: "Que tipo de consulta funciona muitas vezes bem por vídeo?", options: ["Uma revisão de medicamentos ou consulta de seguimento", "Uma emergência", "Uma consulta que precisa de um exame presencial", "Uma cirurgia"], answer: 0, why: "As consultas por vídeo funcionam bem para muitas consultas de seguimento, revisões de medicamentos e aconselhamento." },
            { objective: "O5", q: "A sua consulta por vídeo é amanhã e não tem a certeza de que a câmara funciona. O que faz hoje?", options: ["Espera para ver durante a consulta", "Cancela a consulta", "Testa a câmara e o microfone, com o botão de teste do portal se houver", "Pede à clínica para ir a sua casa"], answer: 2, why: "Testar no dia antes dá-lhe tempo para resolver um problema." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Entrar e terminar uma consulta por vídeo",
          minutes: 5,
          goal: "Entrar numa consulta por vídeo a horas, falar com clareza e saber os próximos passos.",
          text: [
            "Entre 10 a 15 minutos antes. Abra a marcação no seu portal e toque no botão para começar a consulta por vídeo, ou use o link que a clínica lhe enviou. Permita a câmara e o microfone quando pedirem. Pode ter de esperar numa sala de espera virtual até o profissional de saúde entrar.",
            "Durante a consulta, olhe para o ecrã, fale com clareza e use a sua lista. Se o som ou o vídeo falhar, mantenha a calma; normalmente o profissional de saúde liga-lhe de volta, por isso tenha o telefone perto. Pode pedir que repitam ou expliquem algo de forma simples.",
            "Antes de desligar, repita o plano: \"Então vou tomar o comprimido novo à noite e voltar daqui a duas semanas?\" Depois, veja no portal o resumo da consulta e quaisquer novas receitas ou exames."
          ],
          steps: ["Entre 10 a 15 minutos antes, pelo portal ou pelo link da clínica.", "Permita a câmara e o microfone.", "Espere na sala de espera virtual.", "Use a sua lista; peça que expliquem de forma simples se precisar.", "Repita o plano antes de desligar.", "Depois, leia o resumo da consulta no portal."],
          words: [["Sala de espera virtual", "um ecrã onde espera até o profissional de saúde entrar."], ["Profissional de saúde", "um médico, enfermeiro, assistente médico ou conselheiro que trata de você."]],
          slides: [
            { title: "Entrar", bullets: ["10 a 15 minutos antes", "Pelo portal ou pelo link da clínica", "Permita a câmara e o microfone"] },
            { title: "Durante a consulta", bullets: ["Use a sua lista", "Peça que expliquem de forma simples", "A chamada caiu? Tenha o telefone perto"] },
            { title: "Antes de desligar", bullets: ["Repita o plano", "Pergunte quando deve voltar"] },
            { title: "Depois", bullets: ["Leia o resumo da consulta no portal", "Veja as novas receitas e exames"] }
          ],
          tryIt: "Prática da tarefa final: no seu portal, abra uma marcação futura ou passada e encontre onde aparece o botão ou o link da consulta por vídeo. Depois faça a tarefa final: um resultado, uma mensagem, medicamentos e consultas, e a lista para a sua consulta.",
          youCanNow: "entrar numa consulta por vídeo a horas, falar seguindo a sua lista, confirmar o plano e encontrar o resumo depois.",
          quickCheck: [
            { objective: "O6", q: "Onde pode normalmente começar uma consulta por vídeo?", options: ["Num link de uma SMS qualquer", "Na marcação no seu portal, ou no link que a clínica enviou", "Num anúncio de um motor de pesquisa", "Na aplicação do seu banco"], answer: 1, why: "Abra a marcação no seu portal ou use o link da clínica." },
            { objective: "O6", q: "O médico explica depressa um novo plano perto do fim da consulta. O que faz?", options: ["Desliga e adivinha mais tarde", "Pergunta a um vizinho o que o médico quis dizer", "Não diz nada para poupar tempo", "Pede que explique de forma simples e depois repete o plano"], answer: 3, why: "Repetir o plano garante que percebeu os próximos passos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Medicamentos, consultas e consultas por vídeo",
        questions: [
          { objective: "O4", q: "Qual é a melhor altura para pedir a renovação de um medicamento?", options: ["Uma semana depois de ter acabado", "Alguns dias antes de acabar", "Só numa consulta por vídeo", "Nunca pelo portal"], answer: 1, why: "A clínica e a farmácia precisam de tempo para tratar do pedido." },
          { objective: "O4", q: "O portal diz que um tipo de consulta tem de ser marcado por telefone. O que faz?", options: ["Desiste", "Envia dez mensagens", "Liga para a clínica", "Marca outro médico pela internet"], answer: 2, why: "Algumas consultas só podem ser marcadas por telefone." },
          { objective: "O5", q: "O que deve fazer no dia antes de uma consulta por vídeo?", options: ["Carregar o aparelho e testar a câmara e o microfone", "Apagar a aplicação", "Mudar a palavra-passe", "Nada"], answer: 0, why: "Testar antes evita problemas na hora da consulta." },
          { objective: "O6", q: "Com quanto tempo de antecedência deve entrar numa consulta por vídeo?", options: ["30 minutos atrasado", "Exatamente à hora", "Só quando lhe ligarem", "10 a 15 minutos antes"], answer: 3, why: "Entrar mais cedo deixa tempo para o check-in e para problemas técnicos." },
          { objective: "O6", q: "Porque deve repetir o plano antes de desligar?", options: ["Para a consulta durar mais", "Para ter a certeza de que percebeu o que fazer a seguir", "É obrigatório para receber um reembolso", "Para testar o microfone"], answer: 1, why: "Repetir o plano apanha os mal-entendidos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Usar a Telemedicina e o Portal do Paciente",
    questions: [
      { objective: "O1", q: "Um portal do paciente comum, usado por muitos sistemas de saúde, é:", options: ["MyChart", "TikTok", "DoorDash", "Netflix"], answer: 0, why: "O MyChart é muito usado; a sua clínica pode usar outro." },
      { objective: "O1", q: "Um código de ativação vem de:", options: ["Um amigo das redes sociais", "A sua clínica", "Um anúncio que aparece no ecrã", "Qualquer site"], answer: 1, why: "As clínicas dão códigos de ativação para ligar a sua conta." },
      { objective: "O1", q: "Num computador da biblioteca, depois de usar o seu portal, deve:", options: ["Deixar a sessão aberta", "Guardar a palavra-passe", "Terminar a sessão e fechar o navegador", "Escrever a palavra-passe num papel"], answer: 2, why: "Isto impede a próxima pessoa de ver o seu processo clínico." },
      { objective: "O1", q: "O que dá mais proteção à sua conta do portal?", options: ["Uma palavra-passe curta", "Partilhar a palavra-passe com um amigo", "Usar a mesma palavra-passe em todo o lado", "A verificação em dois passos"], answer: 3, why: "A verificação em dois passos precisa de um código do seu telefone." },
      { objective: "O2", q: "Um intervalo de referência é:", options: ["Os valores habituais dos resultados de pessoas saudáveis", "A morada da sua clínica", "O número do seu seguro", "Um tipo de medicamento"], answer: 0, why: "Os resultados são comparados com o intervalo de referência." },
      { objective: "O2", q: "Um resultado está marcado fora do intervalo. Isto quer dizer:", options: ["Tem de ir às urgências", "É sempre sinal de doença grave", "Nem sempre é um problema; pergunte à sua equipa de saúde", "O laboratório enganou-se"], answer: 2, why: "Os resultados marcados precisam da explicação da sua equipa de saúde." },
      { objective: "O2", q: "Segundo o HealthIT.gov, a Regra de Privacidade da HIPAA dá-lhe o direito de:", options: ["Receber medicamentos de graça", "Escolher o salário do seu médico", "Ver e receber uma cópia do seu processo clínico", "Não pagar nenhuma conta"], answer: 2, why: "Você tem o direito de ver e de receber uma cópia do seu processo." },
      { objective: "O2", q: "Um prestador de saúde pode recusar dar-lhe o seu processo porque tem contas médicas por pagar?", options: ["Sim, sempre", "Só aos fins de semana", "Só para cópias em papel", "Não; o HealthIT.gov diz que o pode obter mesmo com contas por pagar"], answer: 3, why: "As contas por pagar não lhe tiram o direito ao seu processo clínico." },
      { objective: "O3", q: "As mensagens do portal são melhores para:", options: ["Emergências", "Perguntas não urgentes", "Enviar dinheiro", "Conversar com desconhecidos"], answer: 1, why: "As respostas podem demorar um dia ou mais." },
      { objective: "O3", q: "Qual é a mensagem mais clara para o portal?", options: ["\"ajuda\"", "\"?\"", "\"ligue-me\"", "\"Desde segunda-feira sinto tonturas depois do meu novo comprimido da manhã. Devo tomá-lo à noite?\""], answer: 3, why: "Diz o quê, desde quando e o que precisa." },
      { objective: "O3", q: "Algumas clínicas podem cobrar ao seguro:", options: ["Entrar no portal", "Ler resultados", "Mensagens que precisam de conselho médico", "Mudar a palavra-passe"], answer: 2, why: "Pergunte à sua clínica se não tiver a certeza sobre a cobrança das mensagens." },
      { objective: "O4", q: "Onde costuma pedir a renovação de um medicamento num portal?", options: ["Na secção Medicamentos", "Na página Definições", "No lixo das Mensagens", "No ecrã de entrada"], answer: 0, why: "Os botões de renovação estão ao lado dos seus medicamentos." },
      { objective: "O4", q: "Uma lista de espera permite-lhe:", options: ["Mudar as notas do seu médico", "Não pagar", "Ver os resultados de outros pacientes", "Ter uma hora mais cedo se alguém cancelar"], answer: 3, why: "As listas de espera oferecem as horas que ficaram livres." },
      { objective: "O5", q: "As consultas por vídeo funcionam bem para:", options: ["Todos os problemas, sempre", "Ossos partidos que precisam de raio-X", "Muitas consultas de seguimento, revisões de medicamentos e aconselhamento", "Emergências"], answer: 2, why: "Alguns problemas ainda precisam de cuidados presenciais." },
      { objective: "O5", q: "Um eCheck-in é:", options: ["Uma renovação de medicamento", "Um cheque do banco", "Um jogo de vídeo", "Preencher formulários no portal antes da sua consulta"], answer: 3, why: "Poupa tempo no início da sua consulta." },
      { objective: "O5", q: "O que deve ter pronto para uma consulta por vídeo?", options: ["As suas perguntas e a lista de medicamentos", "Música alta", "Um lugar público cheio de gente", "Nada"], answer: 0, why: "Uma lista ajuda-o a aproveitar bem a consulta." },
      { objective: "O6", q: "Uma sala de espera virtual é:", options: ["Uma sala verdadeira na clínica", "Uma conversa com outros pacientes", "Um ecrã onde espera até o profissional de saúde entrar", "Um tipo de conta"], answer: 2, why: "Espera lá até a consulta começar." },
      { objective: "O6", q: "O vídeo falha durante a sua consulta. O que faz?", options: ["Desiste do tratamento", "Marca uma nova consulta para o próximo ano", "Publica sobre isso", "Mantém a calma e tem o telefone perto para quando lhe ligarem de volta"], answer: 3, why: "Os profissionais de saúde muitas vezes ligam de volta se o vídeo falhar." },
      { objective: "O6", q: "Depois de uma consulta por vídeo, onde pode ver o plano?", options: ["Numa publicação nas redes sociais", "Na loja de aplicações", "No resumo da consulta no seu portal", "Numa SMS de um desconhecido"], answer: 2, why: "O resumo mostra o plano, as receitas e os exames." },
      { objective: "O6", q: "A quem deve fazer as perguntas sobre a sua própria saúde?", options: ["A um site qualquer", "Só a uma ferramenta de IA", "A um comentário nas redes sociais", "Ao seu médico, enfermeiro ou farmacêutico"], answer: 3, why: "A sua equipa de saúde conhece a sua história de saúde." }
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
      8,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Entrar com segurança",
        objective: "O1",
        notYet: "Não consegue entrar, ou entrou por um link que não é oficial.",
        meets: "Entra pelo site ou pela aplicação oficial da clínica, com uma palavra-passe que não usa em mais lado nenhum.",
        exceeds: "Também ativa a verificação em dois passos, se o portal a oferecer."
      },
      {
        name: "Encontrar um resultado ou resumo",
        objective: "O2",
        notYet: "Não consegue encontrar um resultado de exame nem um resumo de consulta.",
        meets: "Encontra um resultado de exame ou um resumo de consulta e anota qualquer pergunta sobre ele.",
        exceeds: "Também lê o resultado comparando-o com o intervalo de referência, sem adivinhar o que quer dizer."
      },
      {
        name: "Mensagem clara",
        objective: "O3",
        notYet: "A mensagem não é clara, é longa ou é sobre algo urgente.",
        meets: "Uma mensagem curta com a pergunta e detalhes úteis, para uma necessidade não urgente.",
        exceeds: "Inclui quando começou, o que já experimentou e o que precisa."
      },
      {
        name: "Medicamentos e consultas",
        objective: "O4",
        notYet: "Não consegue encontrar onde pedir a renovação de um medicamento ou uma consulta.",
        meets: "Encontra o pedido de renovação e a secção de consultas.",
        exceeds: "Também sabe que consultas têm de ser marcadas por telefone."
      },
      {
        name: "Pronto para a consulta por vídeo",
        objective: "O5",
        notYet: "Não tem lista de perguntas nem de medicamentos, ou não sabe dizer onde vai aparecer o link.",
        meets: "Três perguntas e uma lista dos medicamentos atuais, e sabe onde vai aparecer o link do vídeo.",
        exceeds: "Também testa a câmara e o microfone ou faz o eCheck-in antes."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem ter entrado no portal sozinhos 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem ter pedido a renovação de um medicamento ou uma consulta, ou enviado uma mensagem, pelo portal",
      "Alunos que dizem ter entrado numa consulta por vídeo a horas sem ajuda"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, tablet ou computador com câmara e microfone",
      "O código de ativação da clínica ou o link oficial de inscrição (pergunte na receção)",
      "Papel e caneta para as listas de perguntas e de medicamentos",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Nunca olhe, leia em voz alta ou anote as informações de saúde de um aluno; os alunos fazem os passos do portal em privado, nos seus próprios ecrãs.",
      "Os alunos sem conta no portal podem praticar com uma demonstração ou imagens de um portal, e pedir um código de ativação à sua clínica antes da próxima sessão.",
      "Diga com clareza que o curso não é aconselhamento médico: as perguntas sobre resultados ou medicamentos vão para a equipa de saúde do próprio aluno, e as emergências vão para o 911.",
      "Façam uma chamada de vídeo de prática na aula para os alunos experimentarem permitir a câmara e o microfone e encontrarem o botão de silenciar.",
      "Os cuidadores podem vir com um paciente; lembre-lhes que alguns portais oferecem acesso de representante, que a clínica tem de configurar."
    ]
  }
};
