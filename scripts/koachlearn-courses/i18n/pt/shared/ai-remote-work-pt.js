"use strict";

// Koach Learn course (Portuguese translation of shared/ai-remote-work.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-remote-work-pt",
  lang: "pt",
  translationOf: "ai-remote-work",
  category: "Re-Entry",
  name: "Competências de Trabalho Remoto com IA",
  skills: "Preparar um espaço de trabalho em casa, Entrar e participar em videochamadas, Escrever mensagens de trabalho claras com IA, Trabalhar em documentos partilhados, Gerir o seu próprio tempo, Encontrar empregos remotos verdadeiros e evitar burlas",
  outcome: "preparar-se para trabalhar a partir de casa, entrar numa videochamada de forma profissional, escrever atualizações e mensagens claras com a ajuda da IA, colaborar num documento partilhado, planear o seu dia de trabalho e distinguir um emprego remoto verdadeiro de uma burla.",
  about: [
    "Hoje, muitos empregos deixam as pessoas trabalhar a partir de casa durante parte do tempo ou o tempo todo: apoio ao cliente, introdução de dados, marcação de agendas, assistência virtual, vendas, explicações e apoio técnico. O trabalho remoto pode abrir portas quando o transporte, o cuidado dos filhos, uma deficiência ou o lugar onde vive tornam difícil a deslocação para o trabalho.",
    "Trabalhar à distância pede competências próprias: escrita clara, videochamadas, documentos partilhados, gestão do seu próprio tempo e segurança na internet. Assistentes de IA como o ChatGPT, o Microsoft Copilot e o Google Gemini podem ajudar em grande parte disto.",
    "Este curso é para pessoas que voltam para casa depois da prisão, para quem procura emprego em programas de formação profissional e para membros da comunidade sem um mercado de trabalho perto. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Monte um kit de preparação para o trabalho remoto: uma foto ou lista de verificação do seu espaço de trabalho, uma gravação de um minuto ou lista de verificação de um teste de videochamada, três mensagens de trabalho escritas com a ajuda da IA (uma atualização do ponto de situação, uma pergunta a um chefe e um aviso \"Vou chegar atrasado\"), um documento partilhado que editou com um comentário e uma alteração sugerida, um plano de blocos de tempo para um dia e um anúncio de emprego remoto verdadeiro verificado com os sinais de alerta de burla.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) e que se interessam por empregos remotos como apoio ao cliente, introdução de dados, apoio administrativo ou trabalho em centros de atendimento, muitas vezes por causa do transporte, do horário ou das necessidades da família.",
    startingPoint: "Sabem fazer chamadas e enviar SMS num telefone; alguns têm uma conta de email e já experimentaram um assistente de IA. Muitos nunca usaram ferramentas de videochamada, chat de trabalho ou documentos partilhados, e podem ainda não ter computador nem internet em casa.",
    gap: "Os empregos remotos podem alargar as opções de trabalho para quem não tem carro ou tem responsabilidades de família, mas exigem tecnologia fiável, escrita clara, gestão do próprio tempo e a capacidade de reconhecer as muitas burlas de trabalho a partir de casa. Os alunos precisam destas competências básicas de trabalho remoto para se candidatarem com confiança e manterem um emprego remoto.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: talvez só um telefone ou um computador da biblioteca; muitos empregos remotos precisam de um computador e de internet em casa",
      "Tempo: lições de 5 minutos, que cabem entre consultas e o trabalho",
      "Algumas condições de liberdade condicional ou de pena suspensa limitam o uso da internet; cada aluno cumpre as suas próprias condições",
      "Risco alto de burlas e de perda de privacidade: nenhum número bancário nem de Segurança Social partilhado antes de uma oferta verificada"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à IA e Confiança Digital\" é um bom primeiro curso para quem nunca usou IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Em casa ou no lugar onde pensa trabalhar", action: "preparar um espaço de trabalho e verificar a internet, o auricular e a segurança das suas contas", standard: "com um teste de velocidade feito, a verificação em dois passos ativada e o bloqueio de ecrã configurado" },
    { id: "O2", condition: "Com uma ligação para uma reunião", action: "entrar numa videochamada e usar o silenciar, a câmara, o chat e a partilha de ecrã", standard: "entrando mais cedo e resolvendo um problema de som sem ajuda" },
    { id: "O3", condition: "Perante uma situação de trabalho", action: "escrever uma mensagem de trabalho curta e clara com a ajuda da IA", standard: "começando pelo essencial, dizendo o que precisa e para quando, sem dados de clientes em ferramentas de IA não aprovadas" },
    { id: "O4", condition: "Com uma ligação para um documento partilhado", action: "adicionar um comentário, fazer uma alteração sugerida e abrir o histórico de versões", standard: "sem mudar as definições de partilha" },
    { id: "O5", condition: "Com uma lista de tarefas para um dia de trabalho", action: "criar um plano de blocos de tempo com horas de início, de pausa e de fim", standard: "que se ajuste à sua vida real e termine com uma atualização do ponto de situação" },
    { id: "O6", condition: "Com um anúncio de emprego remoto", action: "verificar se o emprego é verdadeiro ou uma burla de trabalho a partir de casa", standard: "usando todos os sinais de alerta antes de partilhar qualquer número privado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar-se para trabalhar à distância",
      lessons: [
        {
          objectives: ["O1"],
          title: "O seu espaço de trabalho em casa e a tecnologia básica",
          minutes: 5,
          goal: "Preparar um espaço de trabalho e verificar se a sua tecnologia está pronta para o trabalho remoto.",
          text: [
            "Você precisa de uma ligação à internet fiável, de um computador (muitos empregos não aceitam trabalho só pelo telefone), de um auricular ou auscultadores com microfone e de um lugar sossegado. Uma mesa pequena junto a uma parede serve. Boa luz à sua frente, e não atrás, ajuda na câmara.",
            "Verifique a sua internet com um teste de velocidade gratuito antes de se candidatar. Se estiver lenta ou se não tiver internet em casa, pergunte na biblioteca, no seu programa de formação profissional ou ao seu fornecedor de internet sobre opções de baixo custo; alguns programas mudam, por isso veja o que existe onde vive.",
            "Proteja as contas de trabalho como as suas: frases-passe fortes, verificação em dois passos, atualizações do software e nada de trabalho em computadores públicos, a não ser que o empregador o permita. Bloqueie o ecrã quando se afastar."
          ],
          steps: ["Escolha um lugar sossegado com uma mesa e boa luz à sua frente.", "Arranje um auricular ou auscultadores com microfone.", "Faça um teste de velocidade da internet gratuito.", "Ative as atualizações, a verificação em dois passos e o bloqueio de ecrã.", "Pergunte sobre internet de baixo custo se precisar."],
          words: [["Trabalho remoto", "fazer o seu trabalho a partir de casa ou de outro lugar fora do escritório do empregador."], ["Auricular", "auscultadores com microfone (em inglês, \"headset\")."], ["Largura de banda", "a quantidade de dados que a sua internet consegue levar; quanto mais, melhor para vídeo."]],
          slides: [
            { title: "Do que precisa", bullets: ["Internet fiável e um computador", "Auricular com microfone", "Um lugar sossegado com uma mesa"] },
            { title: "Boa imagem e bom som", bullets: ["Luz à sua frente, não atrás", "Fundo sossegado"] },
            { title: "Mantenha a segurança", bullets: ["Frases-passe e verificação em dois passos", "Atualizações ativadas", "Bloqueie o ecrã quando se afastar"] }
          ],
          tryIt: "Prepare o seu espaço de trabalho, faça um teste de velocidade da internet e escreva uma lista do que já tem e do que ainda precisa.",
          youCanNow: "preparar um espaço de trabalho em casa seguro e que funciona.",
          quickCheck: [
            { objective: "O1", q: "Além da internet, que equipamento muitos empregos remotos exigem?", options: ["Só um tablet", "Um relógio inteligente", "Um computador, não só o telefone", "Uma impressora"], answer: 2, why: "Muitos empregos remotos não aceitam trabalho só pelo telefone, por isso precisa de um computador." },
            { objective: "O1", q: "O teste de velocidade mostra que a sua internet está lenta e você quer candidatar-se a empregos remotos. O que faz?", options: ["Pergunta na biblioteca, no programa de formação profissional ou ao fornecedor de internet sobre opções de baixo custo", "Candidata-se na mesma e espera que funcione", "Usa o Wi-Fi de um desconhecido sem pedir", "Desiste do trabalho remoto"], answer: 0, why: "As bibliotecas, os programas de formação profissional e os fornecedores podem conhecer opções de internet de baixo custo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Entrar e participar em videochamadas",
          minutes: 5,
          goal: "Entrar numa videochamada de forma profissional e resolver os problemas mais comuns.",
          text: [
            "A maioria dos empregos remotos usa ferramentas de vídeo como o Zoom, o Microsoft Teams ou o Google Meet. Normalmente entra clicando numa ligação num email ou num convite de calendário. Entre dois ou três minutos mais cedo para resolver qualquer problema.",
            "Conheça os controlos básicos: silenciar e ativar o som, ligar e desligar a câmara, partilhar o ecrã e usar o chat. Fique com o som desligado quando não estiver a falar. Olhe para a câmara quando falar e use o seu nome como nome visível.",
            "Se alguma coisa falhar: verifique nas definições se o microfone e o altifalante certos estão escolhidos, saia e volte a entrar, ou ligue pelo telefone se o convite tiver um número. Avise o organizador no chat. Muitas ferramentas também têm legendas ao vivo e resumos de reuniões feitos por IA; siga as regras do seu empregador sobre o seu uso."
          ],
          steps: ["Clique na ligação da reunião dois ou três minutos mais cedo.", "Verifique o seu nome visível, a câmara e o microfone.", "Fique em silêncio quando não estiver a falar.", "Use o chat para dizer se tem problemas.", "Se o som falhar, verifique as definições do aparelho ou volte a entrar."],
          words: [["Silenciar", "desligar o seu microfone para que os outros não o ouçam (em inglês, \"mute\")."], ["Partilha de ecrã", "mostrar o ecrã do seu computador às outras pessoas na chamada."], ["Legendas", "palavras no ecrã que mostram o que as pessoas dizem."]],
          slides: [
            { title: "Entrar bem", bullets: ["Clique na ligação 2-3 minutos mais cedo", "Use o seu nome verdadeiro", "Verifique a câmara e o microfone"] },
            { title: "Controlos básicos", bullets: ["Silenciar e ativar o som", "Ligar e desligar a câmara", "Partilhar o ecrã e usar o chat"] },
            { title: "Quando algo falha", bullets: ["Verifique as definições do aparelho", "Saia e volte a entrar", "Avise o organizador no chat"] }
          ],
          tryIt: "Comece uma reunião de teste gratuita no Zoom, no Teams ou no Google Meet com um amigo, um familiar ou sozinho. Pratique silenciar, a câmara, o chat e a partilha de ecrã.",
          youCanNow: "entrar e participar numa videochamada de forma profissional e resolver os problemas mais comuns.",
          quickCheck: [
            { objective: "O2", q: "O que faz a partilha de ecrã numa videochamada?", options: ["Silencia toda a gente", "Grava a reunião", "Desliga a sua câmara", "Mostra o ecrã do seu computador às outras pessoas na chamada"], answer: 3, why: "A partilha de ecrã mostra o seu ecrã às outras pessoas na chamada." },
            { objective: "O2", q: "O seu som deixa de funcionar numa reunião de equipa. O que faz?", options: ["Sai e não diz nada", "Avisa o organizador no chat, verifica as definições do aparelho ou volta a entrar", "Fala mais alto", "Desliga o computador"], answer: 1, why: "Use o chat para avisar o organizador e depois verifique as definições, volte a entrar ou ligue pelo telefone." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever mensagens de trabalho claras com IA",
          minutes: 5,
          goal: "Escrever mensagens de trabalho curtas, claras e profissionais com a ajuda da IA.",
          text: [
            "No trabalho remoto, a maior parte da comunicação é escrita: chat (como o Teams ou o Slack) e email. Escrever com clareza é a competência mais importante do trabalho remoto. Comece pelo essencial, seja breve e diga o que precisa e para quando.",
            "A IA pode ajudar: \"Transforma isto numa mensagem curta e educada para o meu chefe: terminei os 40 registos de clientes, 3 não tinham número de telefone, devo ligar-lhes ou passar à frente?\" Depois verifique se soa como você e se não está formal demais.",
            "Tipos de mensagem úteis: uma atualização diária do ponto de situação (feito, a seguir, bloqueado), uma pergunta clara e um aviso quando vai chegar atrasado ou está doente. Nunca cole dados de clientes, palavras-passe ou segredos da empresa numa ferramenta de IA que o seu empregador não aprovou."
          ],
          steps: ["Comece pelo ponto principal.", "Diga o que precisa e para quando.", "Peça à IA para a tornar curta e educada.", "Verifique se soa como você.", "Mantenha os dados dos clientes e da empresa fora de ferramentas de IA não aprovadas."],
          words: [["Ponto de situação", "uma mensagem curta sobre o que fez, o que vem a seguir e qualquer problema."], ["Aplicação de chat", "uma ferramenta de mensagens de trabalho como o Microsoft Teams ou o Slack."]],
          slides: [
            { title: "Escrever é a competência principal", bullets: ["Comece pelo essencial", "Curto e claro", "O que precisa e para quando"] },
            { title: "Três mensagens importantes", bullets: ["Ponto de situação: feito, a seguir, bloqueado", "Uma pergunta clara", "Aviso de atraso ou doença"] },
            { title: "A IA ajuda, com segurança", bullets: ["Torne-a curta e educada", "Verifique se soa como você", "Nada de dados da empresa em ferramentas não aprovadas"] }
          ],
          tryIt: "Com a ajuda da IA, escreva três mensagens: um ponto de situação, uma pergunta a um chefe e um aviso \"Vou chegar 15 minutos atrasado\". Edite cada uma para soar como você.",
          youCanNow: "escrever mensagens de trabalho claras e curtas com a ajuda da IA.",
          quickCheck: [
            { objective: "O3", q: "Que três coisas entram num ponto de situação diário?", options: ["O seu almoço, o seu humor e o tempo", "O que fez, o que vem a seguir e o que o está a bloquear", "Todos os emails que leu", "A sua palavra-passe e a hora de entrada"], answer: 1, why: "Um ponto de situação diz o que está feito, o que vem a seguir e o que está bloqueado." },
            { objective: "O3", q: "Quer que a IA o ajude a escrever uma mensagem sobre a queixa de um cliente. O que deixa de fora?", options: ["O ponto principal", "O que precisa do seu chefe", "Quando precisa de uma resposta", "O nome e o número de telefone do cliente"], answer: 3, why: "Nunca cole dados de clientes numa ferramenta de IA que o seu empregador não aprovou." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar-se para trabalhar à distância",
        questions: [
          { objective: "O1", q: "Onde deve estar a luz nas videochamadas?", options: ["Atrás de você", "Em lado nenhum", "À sua frente", "Debaixo da mesa"], answer: 2, why: "A luz à frente torna o seu rosto visível." },
          { objective: "O1", q: "O que deve fazer quando se afasta do computador de trabalho?", options: ["Bloquear o ecrã", "Deixá-lo aberto", "Publicar a sua palavra-passe", "Desligar a internet"], answer: 0, why: "Bloquear o ecrã protege os dados de trabalho." },
          { objective: "O2", q: "Quando deve entrar numa reunião por vídeo?", options: ["Dez minutos atrasado", "Só se o lembrarem duas vezes", "Nunca", "Dois ou três minutos mais cedo"], answer: 3, why: "Entrar mais cedo dá tempo para resolver problemas." },
          { objective: "O2", q: "Os outros não o ouvem numa chamada. O que verifica primeiro?", options: ["A sua caixa de email", "Se o som está ativado e se o microfone certo está escolhido", "O brilho do ecrã", "O tempo"], answer: 1, why: "O silenciar e as definições do aparelho causam a maioria dos problemas de som." },
          { objective: "O3", q: "O que é um bom ponto de situação?", options: ["Uma longa história sobre o seu fim de semana", "O que fiz, o que vem a seguir e o que me está a bloquear", "Nada", "Só emojis"], answer: 1, why: "Os pontos de situação mantêm a equipa informada." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabalhar bem e encontrar empregos remotos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Trabalhar em documentos partilhados",
          minutes: 5,
          goal: "Editar, comentar e sugerir alterações num documento partilhado.",
          text: [
            "As equipas remotas trabalham no mesmo documento ao mesmo tempo com o Google Docs, o Google Sheets ou o Microsoft 365 (Word, Excel) online. Você abre-o a partir de uma ligação partilhada e vê as alterações dos outros enquanto escrevem.",
            "Aprenda três gestos. Comentar: selecione um texto e adicione um comentário para perguntar ou sugerir sem o mudar. Sugerir: o Google Docs tem o modo Sugestão e o Word tem o Controlar Alterações, por isso as suas edições aparecem para os outros aceitarem. O histórico de versões deixa-o ver ou recuperar versões anteriores.",
            "Tenha cuidado com as definições de partilha: partilhe só com as pessoas que precisam e não mude a opção \"qualquer pessoa com a ligação\" sem perguntar. Muitas ferramentas têm IA incorporada (como o Gemini no Google Workspace ou o Copilot no Microsoft 365) se o seu empregador a ativar."
          ],
          steps: ["Abra o documento partilhado a partir da ligação.", "Selecione um texto e adicione um comentário.", "Ative o modo Sugestão (Google Docs) ou o Controlar Alterações (Word) e faça uma edição.", "Abra o histórico de versões para ver versões anteriores.", "Verifique as definições de partilha antes de partilhar com mais pessoas."],
          words: [["Documento partilhado", "um ficheiro que várias pessoas podem abrir e editar online."], ["Comentário", "uma nota ligada a uma parte de um documento."], ["Histórico de versões", "um registo das versões anteriores de um ficheiro que pode ver ou recuperar."]],
          slides: [
            { title: "Trabalhar juntos online", bullets: ["Google Docs e Sheets", "Word e Excel online do Microsoft 365", "Veja as alterações enquanto os outros escrevem"] },
            { title: "Três gestos", bullets: ["Comentar", "Sugerir ou Controlar Alterações", "Histórico de versões"] },
            { title: "Partilhe com cuidado", bullets: ["Só com as pessoas que precisam", "Pergunte antes de mudar as definições da ligação"] }
          ],
          tryIt: "Crie um documento no Google Docs ou no Word online, partilhe-o com alguém de confiança e pratiquem juntos um comentário, uma edição sugerida e a consulta do histórico de versões.",
          youCanNow: "colaborar num documento partilhado com comentários, sugestões e histórico de versões.",
          quickCheck: [
            { objective: "O4", q: "O que faz o Controlar Alterações no Word?", options: ["Mostra as suas edições para os outros as reverem e aceitarem", "Apaga as versões antigas", "Partilha o ficheiro com toda a gente", "Conta as palavras"], answer: 0, why: "O Controlar Alterações mostra as edições para os outros aceitarem, como o modo Sugestão no Google Docs." },
            { objective: "O4", q: "Um colega pede-lhe para partilhar o documento da equipa com um amigo de fora da empresa. O que faz?", options: ["Muda para \"qualquer pessoa com a ligação\"", "Envia a ligação logo", "Pergunta ao dono do documento antes de partilhar com mais pessoas", "Copia o documento inteiro para um email"], answer: 2, why: "Partilhe só com as pessoas que precisam e pergunte antes de mudar as definições de partilha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gerir o seu próprio tempo",
          minutes: 5,
          goal: "Planear um dia de trabalho remoto com blocos de tempo e horas claras de início e de fim.",
          text: [
            "Em casa, ninguém passa pela sua secretária. Quem gere o seu tempo é você. Defina uma hora fixa de início, pausas e uma hora de fim, e diga às pessoas com quem vive quando está a trabalhar.",
            "Os blocos de tempo ajudam: divida o dia em blocos para trabalho concentrado, mensagens, reuniões e pausas. Peça à IA: \"Faz um plano de blocos de tempo para o meu dia de trabalho das 9 às 5 com 30 minutos de almoço. Tarefas: [lista]. Põe o trabalho concentrado de manhã e vê as mensagens a horas fixas.\"",
            "Registe o que termina. No fim do dia, escreva um ponto de situação curto. Se tiver dificuldades com distrações, com o cuidado dos filhos ou com a saúde, diga ao seu chefe cedo; muitos têm soluções se souberem."
          ],
          steps: ["Defina as horas de início, de pausa e de fim.", "Faça a lista das tarefas de hoje.", "Peça à IA um plano de blocos de tempo.", "Ajuste-o à sua vida real.", "Termine o dia com um ponto de situação curto."],
          words: [["Blocos de tempo", "planear o seu dia em blocos de tempo para tarefas específicas."], ["Trabalho concentrado", "trabalho feito sem interrupções."]],
          slides: [
            { title: "Você gere o seu tempo", bullets: ["Início, pausas e fim a horas fixas", "Diga aos que vivem consigo o seu horário"] },
            { title: "Blocos de tempo", bullets: ["Trabalho concentrado, mensagens, reuniões, pausas", "A IA pode fazer o rascunho do plano"] },
            { title: "Manter o rumo", bullets: ["Ponto de situação no fim do dia", "Avise o chefe cedo sobre problemas"] }
          ],
          tryIt: "Peça à IA um plano de blocos de tempo para um dia de trabalho real ou de prática, ajuste-o e siga-o durante pelo menos meio dia. Escreva um ponto de situação curto no fim do dia.",
          youCanNow: "planear e gerir um dia de trabalho remoto com blocos de tempo.",
          quickCheck: [
            { objective: "O5", q: "O que é um bloco de tempo?", options: ["Um computador avariado", "Uma reunião a que falta", "Uma parte fixa do dia para um tipo de tarefa", "Um tipo de palavra-passe"], answer: 2, why: "Os blocos de tempo dividem o dia em partes para trabalho concentrado, mensagens, reuniões e pausas." },
            { objective: "O5", q: "O plano da IA põe o trabalho concentrado às 15h, quando os seus filhos chegam da escola. O que faz?", options: ["Muda o trabalho concentrado para uma hora mais calma que se ajuste à sua vida real", "Segue-o à risca", "Deixa de fazer trabalho concentrado", "Trabalha até à meia-noite em vez disso"], answer: 0, why: "Ajuste o plano da IA à sua vida real." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Encontrar empregos remotos verdadeiros e evitar burlas",
          minutes: 6,
          goal: "Procurar empregos remotos em fontes de confiança e reconhecer burlas de trabalho a partir de casa.",
          text: [
            "Procure em lugares de confiança: páginas de carreiras das empresas, sites de emprego conhecidos, a bolsa de emprego do seu estado e o American Job Center local (centro público de emprego dos EUA). Use o filtro \"remoto\" e leia onde o emprego permite que viva; alguns empregos remotos são só para certos estados ou países.",
            "As burlas de trabalho a partir de casa são comuns. A FTC (a agência de proteção do consumidor dos EUA) avisa sobre promessas de muito dinheiro por pouco trabalho, pedidos para pagar kits iniciais, formações ou certificações, cheques que lhe enviam para depositar e devolver uma parte, e o reenvio de encomendas. Os empregadores honestos não lhe cobram nada para conseguir um emprego.",
            "Verifique antes de partilhar: procure a empresa você mesmo, confirme que o email vem do domínio verdadeiro da empresa (e não de um endereço de email gratuito) e desconfie de entrevistas feitas só por mensagens escritas. Não dê números bancários nem de Segurança Social antes de ter uma oferta verificada. Denuncie burlas em ReportFraud.ftc.gov."
          ],
          steps: ["Procure em fontes de emprego de confiança com o filtro remoto.", "Veja onde o emprego permite que viva.", "Procure a empresa por sua conta.", "Esteja atento a taxas, cheques para depositar, reenvio de encomendas e entrevistas só por mensagens.", "Partilhe números privados só depois de uma oferta verificada."],
          words: [["Burla de trabalho a partir de casa", "um falso emprego remoto feito para roubar dinheiro ou informações."], ["Domínio", "a parte de um endereço de email ou de um site depois do @ ou do www, como empresa.com."]],
          slides: [
            { title: "Onde procurar", bullets: ["Páginas de carreiras e sites de emprego conhecidos", "Bolsa de emprego do estado e American Job Centers", "Veja onde o emprego permite que viva"] },
            { title: "Sinais de burla (FTC)", bullets: ["Muito dinheiro por pouco trabalho", "Pagar kits, formações ou certificados", "Depositar um cheque e devolver dinheiro"] },
            { title: "Verifique antes de partilhar", bullets: ["Procure a empresa você mesmo", "Domínio de email verdadeiro da empresa", "Números privados só depois de uma oferta verificada"] }
          ],
          sources: [{ name: "FTC: Burlas de emprego (em inglês)", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Tarefa final: encontre um anúncio de emprego remoto verdadeiro, verifique-o com os sinais de burla e guarde-o. Junte-o à lista do seu espaço de trabalho, ao teste de videochamada, às três mensagens, à prática no documento partilhado e ao plano de blocos de tempo para terminar o seu kit de preparação para o trabalho remoto.",
          youCanNow: "preparar-se, comunicar, colaborar e gerir o tempo para o trabalho remoto, e encontrar empregos remotos verdadeiros com segurança.",
          quickCheck: [
            { objective: "O6", q: "Qual é um sinal de alerta de uma burla de trabalho a partir de casa?", options: ["O anúncio diz onde pode viver", "O recrutador envia emails do domínio da própria empresa", "A empresa tem uma página de carreiras", "Tem de pagar um kit inicial antes de começar"], answer: 3, why: "Os empregadores honestos não lhe cobram nada para conseguir um emprego." },
            { objective: "O6", q: "Uma \"empresa\" oferece-lhe um emprego remoto depois de uma entrevista só por mensagens e pede já o seu número bancário. O que faz?", options: ["Envia-o para receber mais depressa", "Não o partilha; procura a empresa você mesmo e denuncia-a se for uma burla", "Envia antes o seu número de Segurança Social", "Pede-lhes que lhe enviem um cheque"], answer: 1, why: "Entrevistas só por mensagens e pedidos cedo de números bancários são sinais de alerta; partilhe números privados só depois de uma oferta verificada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Trabalhar bem e encontrar empregos remotos",
        questions: [
          { objective: "O4", q: "No Google Docs, que modo faz as suas edições aparecerem como sugestões para os outros aceitarem?", options: ["Modo Apagar", "Modo Imprimir", "Modo Noturno", "Modo Sugestão"], answer: 3, why: "O modo Sugestão mostra as edições para aprovação." },
          { objective: "O4", q: "O que o histórico de versões lhe permite fazer?", options: ["Ver ou recuperar versões anteriores de um ficheiro", "Apagar o ficheiro para sempre", "Partilhar palavras-passe", "Mudar o seu nome"], answer: 0, why: "Guarda um registo das versões anteriores." },
          { objective: "O5", q: "O que são blocos de tempo?", options: ["Bloquear sites", "Desligar o relógio", "Planear o dia em blocos para tarefas específicas", "Trabalhar sem pausas"], answer: 2, why: "Os blocos protegem o trabalho concentrado." },
          { objective: "O6", q: "Um \"emprego remoto\" pede-lhe para comprar um kit inicial de $200 antes de começar. Segundo a FTC, isto é:", options: ["Uma contratação normal", "Um imposto", "Um benefício", "Um sinal de alerta de burla"], answer: 3, why: "Os empregadores honestos não lhe cobram nada para conseguir um emprego." },
          { objective: "O6", q: "Um recrutador envia emails de um endereço gratuito e quer fazer a entrevista só por mensagens escritas. Você deve:", options: ["Enviar os seus dados bancários", "Pagar uma taxa", "Procurar a empresa você mesmo e ter cuidado", "Ignorar todos os empregos para sempre"], answer: 2, why: "Estes são sinais comuns de um emprego falso." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Competências de Trabalho Remoto com IA",
    questions: [
      { objective: "O1", q: "Trabalho remoto quer dizer:", options: ["Trabalhar só de noite", "Fazer o seu trabalho fora do escritório do empregador", "Trabalho não pago", "Usar um comando de televisão"], answer: 1, why: "É trabalho feito a partir de casa ou de outro lugar." },
      { objective: "O1", q: "Que equipamento é o mais importante para as videochamadas?", options: ["Um auricular ou auscultadores com microfone", "Uma cadeira cara", "Uma segunda televisão", "Uma impressora"], answer: 0, why: "Nas chamadas, um som claro é o que mais conta." },
      { objective: "O1", q: "Como pode verificar se a sua internet é rápida o suficiente?", options: ["Adivinhando", "Perguntando à IA", "Fazendo um teste de velocidade da internet gratuito", "Contando as suas aplicações"], answer: 2, why: "Um teste de velocidade mede-a." },
      { objective: "O1", q: "O que mantém segura a sua conta de trabalho?", options: ["A verificação em dois passos", "Partilhar a palavra-passe com a família", "Escrevê-la no ecrã", "Desligar as atualizações"], answer: 0, why: "A verificação em dois passos trava a maioria dos ataques." },
      { objective: "O2", q: "Como entra normalmente numa videochamada de trabalho?", options: ["Liga para um número qualquer", "Espera que alguém o visite", "Envia uma carta pelo correio", "Clica na ligação do email ou do convite de calendário"], answer: 3, why: "Os convites trazem uma ligação para a reunião." },
      { objective: "O2", q: "Quando não está a falar numa chamada, normalmente deve:", options: ["Pôr música", "Ficar com o som desligado", "Sair da chamada", "Aumentar o volume"], answer: 1, why: "Silenciar evita o ruído de fundo." },
      { objective: "O2", q: "Partilha de ecrã quer dizer:", options: ["Partir o ecrã", "Mostrar o ecrã do seu computador às outras pessoas na chamada", "Comprar um ecrã novo", "Esconder o ecrã"], answer: 1, why: "Permite que os outros vejam o que você vê." },
      { objective: "O3", q: "A competência mais importante no trabalho remoto é:", options: ["Escrever tudo em maiúsculas", "Chamadas telefónicas longas", "Evitar mensagens", "Escrever com clareza"], answer: 3, why: "A maior parte da comunicação remota é escrita." },
      { objective: "O3", q: "Uma mensagem de trabalho clara:", options: ["Começa pelo essencial e diz o que precisa e para quando", "Esconde o ponto principal no fim", "É o mais longa possível", "Não pede nada"], answer: 0, why: "As mensagens claras recebem respostas mais rápidas." },
      { objective: "O3", q: "O que nunca deve ir para uma ferramenta de IA que o seu empregador não aprovou?", options: ["Uma mensagem de prática sobre um atraso", "Perguntas gerais de gramática", "Dados de clientes", "A data de um feriado público"], answer: 2, why: "Os dados dos clientes têm de ser protegidos." },
      { objective: "O3", q: "Vai chegar atrasado ao seu turno. A melhor ação é:", options: ["Não dizer nada", "Entrar tarde sem explicar", "Despedir-se", "Enviar um aviso curto antes da hora de início"], answer: 3, why: "Avisar cedo é profissional." },
      { objective: "O4", q: "Um comentário num documento partilhado:", options: ["Apaga o documento", "Bloqueia o acesso a toda a gente", "Adiciona uma nota sem mudar o texto", "Imprime-o"], answer: 2, why: "Os comentários perguntam ou sugerem sem editar." },
      { objective: "O4", q: "No Word, a função que mostra as suas edições para os outros reverem é:", options: ["Contar Palavras", "Controlar Alterações", "Verificar Ortografia", "Cor da Página"], answer: 1, why: "O Controlar Alterações regista as edições." },
      { objective: "O4", q: "Antes de mudar a partilha de um documento para \"qualquer pessoa com a ligação\", deve:", options: ["Perguntar ao dono do documento", "Fazê-lo e pronto", "Publicar a ligação para todos", "Apagar o documento"], answer: 0, why: "As definições de partilha protegem as informações." },
      { objective: "O5", q: "Uma hora de fim fixa quando trabalha a partir de casa ajuda a:", options: ["Nada", "Trabalhar mais horas sem pagamento", "Manter o equilíbrio entre o trabalho e a vida em casa", "Aumentar a velocidade da internet"], answer: 2, why: "Os limites evitam o esgotamento." },
      { objective: "O5", q: "Se o cuidado dos filhos está a dificultar o trabalho, o melhor passo é:", options: ["Avisar o chefe cedo", "Escondê-lo", "Deixar de entrar no sistema", "Inventar os pontos de situação"], answer: 0, why: "Os chefes podem ajudar se souberem cedo." },
      { objective: "O6", q: "Alguns empregos remotos só contratam pessoas que:", options: ["Não têm computador", "Nunca usam email", "Trabalham de graça", "Vivem em certos estados ou países"], answer: 3, why: "Veja as regras de localização no anúncio." },
      { objective: "O6", q: "O recrutador de uma empresa verdadeira normalmente envia emails de:", options: ["Um endereço de email gratuito qualquer", "O domínio da própria empresa", "Uma aplicação só de mensagens", "Só mensagens privadas nas redes sociais"], answer: 1, why: "Um domínio da empresa é sinal de um recrutador verdadeiro." },
      { objective: "O6", q: "Pedirem-lhe para reenviar encomendas a partir de casa é, segundo a FTC:", options: ["Um emprego remoto normal", "Parte de uma burla", "Um programa do governo", "Seguro se pagar bem"], answer: 1, why: "Os empregos de reenvio de encomendas são uma burla conhecida." },
      { objective: "O6", q: "Onde denuncia uma burla de emprego nos EUA?", options: ["No email do burlão", "Numa secção de comentários", "Em lado nenhum", "Em ReportFraud.ftc.gov"], answer: 3, why: "A FTC recolhe as denúncias de fraude." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 3, 5, 6, 8, 9, 11, 12, 14, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Espaço de trabalho e tecnologia", objective: "O1", notYet: "Não há teste de velocidade, ou a verificação em dois passos ou o bloqueio de ecrã está desligado.", meets: "Uma foto ou lista do espaço de trabalho com teste de velocidade, auricular, verificação em dois passos e bloqueio de ecrã.", exceeds: "A luz está à frente do aluno e há um plano alternativo se a internet falhar." },
      { name: "Pronto para videochamadas", objective: "O2", notYet: "O teste de chamada não foi feito, ou não encontrou os controlos de silenciar e da câmara.", meets: "Um teste de chamada de um minuto ou lista que mostra o nome visível, o silenciar, a câmara e o chat.", exceeds: "Também praticou a partilha de ecrã e a resolução de um problema de som." },
      { name: "Mensagens de trabalho", objective: "O3", notYet: "Menos de três mensagens, ou uma mensagem esconde o essencial ou tem dados privados.", meets: "Um ponto de situação, uma pergunta a um chefe e um aviso de atraso, cada um curto e a começar pelo essencial.", exceeds: "Cada um diz o que é preciso e para quando, e soa como o aluno." },
      { name: "Documento partilhado", objective: "O4", notYet: "Nenhum comentário nem alteração sugerida no documento.", meets: "Um comentário e uma alteração sugerida num documento partilhado.", exceeds: "Também abriu o histórico de versões e deixou as definições de partilha como estavam." },
      { name: "Plano de blocos de tempo", objective: "O5", notYet: "Não há horas de início, de pausa ou de fim.", meets: "Um plano para um dia com horas de início, de pausa e de fim e blocos para as tarefas.", exceeds: "Ajusta-se à vida real do aluno e termina com um ponto de situação." },
      { name: "Anúncio de emprego verificado", objective: "O6", notYet: "O anúncio de emprego não foi verificado com os sinais de burla.", meets: "Um anúncio de emprego remoto verdadeiro verificado com os sinais de alerta, com a empresa pesquisada.", exceeds: "Também indica onde o emprego permite que as pessoas vivam e o domínio de email usado." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam a pelo menos um emprego remoto em 30 dias (inquérito de seguimento)",
      "Alunos que conseguem um emprego remoto ou uma entrevista para um emprego remoto em 90 dias",
      "Alunos que dizem ter reconhecido e evitado uma burla de trabalho a partir de casa"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet (um computador da biblioteca ou do programa serve para praticar)",
      "Um auricular ou auscultadores com microfone",
      "Contas gratuitas numa ferramenta de vídeo (Zoom, Teams ou Google Meet) e no Google Docs ou no Microsoft 365 online",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; façam uma videochamada de prática real para que todos entrem, silenciem e partilhem o ecrã.",
      "Prepare um documento partilhado de prática para que os alunos possam comentar e sugerir alterações no trabalho uns dos outros.",
      "Mostre exemplos reais de anúncios de burlas de trabalho a partir de casa e peça ao grupo que encontre os sinais de alerta.",
      "Lembre aos alunos em liberdade condicional ou com pena suspensa que cumpram as condições sobre o uso da internet e que confirmem se o trabalho remoto é compatível com elas.",
      "Avalie o kit final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
