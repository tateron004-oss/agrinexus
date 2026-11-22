"use strict";

// Koach Learn course (Portuguese translation of shared/resume-linkedin-interviews.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "resume-linkedin-interviews-pt",
  lang: "pt",
  translationOf: "resume-linkedin-interviews",
  category: "Athletes",
  name: "Currículos, LinkedIn e Entrevistas de Emprego",
  skills: "Escrever um currículo de uma página, Escrever pontos de conquistas, Criar um perfil no LinkedIn, Responder com o método STAR, Responder com honestidade sobre uma pausa ou um registo criminal, Fazer o seguimento depois de uma entrevista",
  outcome: "escrever um currículo de uma página com pontos fortes de conquistas, criar um perfil simples no LinkedIn e responder em voz alta a perguntas comuns de entrevista com o método STAR, incluindo uma resposta curta e honesta sobre uma pausa no trabalho ou um registo criminal.",
  about: [
    "Este curso é para quem se está a preparar para procurar trabalho: um estudante à procura do primeiro emprego, um atleta a passar do desporto para uma carreira, um antigo militar a entrar no trabalho civil, uma pessoa que volta para casa depois da prisão, ou alguém que muda de emprego depois de anos no mesmo lugar.",
    "Você vai criar três coisas que pode usar já: um currículo de uma página, um perfil no LinkedIn e um conjunto de respostas de entrevista que praticou em voz alta. Também vai aprender o que perguntar ao empregador e como fazer o seguimento.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Ferramentas de IA como o ChatGPT ou o Microsoft Copilot podem ajudar com as palavras, mas os factos e a voz têm de ser seus."
  ],
  finalTask: "Escolha um anúncio de emprego real. Escreva para ele um currículo de uma página com pelo menos quatro pontos de conquistas, atualize o título e a secção Sobre do seu LinkedIn para combinarem, e grave-se a responder em voz alta a três perguntas de entrevista com o método STAR, incluindo uma resposta honesta sobre uma pausa ou um registo criminal, se for o seu caso. No fim, escreva uma nota curta de agradecimento que poderia enviar depois da entrevista.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Quem se está a preparar para procurar trabalho: estudantes à procura do primeiro emprego, atletas a passar do desporto para uma carreira, antigos militares a entrar no trabalho civil, pessoas que voltam para casa depois da prisão e pessoas que mudam de emprego depois de anos no mesmo lugar.",
    startingPoint: "Têm experiência de trabalho, escola, desporto, serviço militar ou da vida, e sabem usar um telefone ou um computador. Muitos têm um currículo antigo ou nenhum, não têm perfil no LinkedIn e nunca praticaram respostas de entrevista em voz alta, sobretudo sobre uma pausa ou um registo criminal.",
    gap: "Os empregadores decidem depressa a partir de um currículo, de um perfil e de uma entrevista curta. Os alunos precisam de um currículo claro de uma página, de um perfil simples no LinkedIn e de respostas honestas e praticadas, para que as suas verdadeiras habilidades sejam vistas e consigam entrevistas e ofertas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou um computador com uma ferramenta de documentos gratuita e um gravador de voz",
      "Honestidade: tudo no currículo, no perfil ou num texto reescrito pela IA tem de ser verdade",
      "Privacidade: nada de morada de casa nem números de identificação no LinkedIn ou em ferramentas de IA",
      "As regras sobre registos criminais e oportunidades justas mudam de lugar para lugar; cada aluno verifica as regras do seu local"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um anúncio de emprego real", action: "organizar um currículo de uma página com contactos, um resumo, habilidades que combinam com o anúncio e experiência com datas", standard: "numa só página, adaptado ao anúncio" },
    { id: "O2", condition: "Com uma lista simples de tarefas de um trabalho", action: "escrever pontos de conquistas com um verbo de ação, o que fez e um resultado ou um número", standard: "com pelo menos quatro pontos, todos verdadeiros" },
    { id: "O3", condition: "Usando o seu currículo", action: "criar um perfil no LinkedIn com foto, título, secção Sobre e experiência", standard: "sem morada de casa nem números de identificação, e com três pedidos de ligação enviados" },
    { id: "O4", condition: "Com uma pergunta de entrevista sobre comportamento", action: "responder com uma história STAR: Situação, Tarefa, Ação e Resultado", standard: "em um a dois minutos, com a maior parte do tempo na Ação" },
    { id: "O5", condition: "Quando lhe fazem uma pergunta difícil sobre uma pausa ou um registo criminal", action: "dar em voz alta uma resposta curta e honesta que diga o que fez desde então", standard: "gravada, ouvida e melhorada pelo menos uma vez" },
    { id: "O6", condition: "No fim de uma entrevista", action: "fazer boas perguntas e escrever uma nota de agradecimento", standard: "com a nota enviada em 24 horas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O seu currículo e o LinkedIn",
      lessons: [
        {
          objectives: ["O1"],
          title: "Criar um currículo de uma página",
          minutes: 5,
          goal: "Organizar um currículo limpo, de uma página, com as secções certas na ordem certa.",
          text: [
            "Um currículo é um resumo de uma página do que você pode fazer por um empregador. A maioria dos responsáveis pela contratação passa menos de um minuto no primeiro olhar, por isso a página tem de ser fácil de ler depressa: títulos claros, bastante espaço em branco e um só tipo de letra simples, como Calibri ou Arial, no tamanho 10 a 12.",
            "Use estas secções, de cima para baixo: o seu nome e contactos (telefone, um email profissional, cidade e estado ou província, e o link do seu LinkedIn se tiver); um resumo de duas linhas; habilidades; experiência de trabalho, com o emprego mais recente primeiro; e depois estudos, formações e certificados.",
            "Experiência é mais do que empregos pagos. Conte o voluntariado, o serviço militar, o papel de capitão de equipa ou de treinador, o trabalho na igreja ou na comunidade, e os trabalhos ou formações que fez durante a prisão, como cozinha, manutenção ou um programa de ofício. Se preferir, descreva o que fez, e não onde foi.",
            "Mude o seu currículo um pouco para cada emprego. Leia o anúncio, encontre as habilidades que pede e garanta que as palavras que usa combinam com as habilidades que tem de verdade. Muitos empregadores usam programas que procuram essas palavras nos currículos."
          ],
          steps: ["Abra um processador de texto gratuito, como o Google Docs ou o Microsoft Word, ou use um modelo simples de currículo.", "Escreva o seu nome e contactos no topo. Use um email profissional, por exemplo um feito com o seu nome e apelido.", "Escreva um resumo de duas linhas: quem você é e o que oferece.", "Faça a lista de 6 a 10 habilidades que combinam com o anúncio de emprego.", "Escreva a experiência, a mais recente primeiro: cargo, organização, cidade, datas e 3 a 4 pontos para cada uma.", "Acrescente estudos, formações e certificados. Mantenha tudo numa só página."],
          words: [["Currículo", "um resumo de uma página das suas habilidades, experiência e formação, que envia quando se candidata a um emprego."], ["Anúncio de emprego", "o anúncio que descreve um trabalho e o que o empregador procura."], ["Sistema de seleção de candidatos", "um programa que muitos empregadores usam para receber currículos e procurar neles palavras-chave (em inglês, \"applicant tracking system\")."]],
          slides: [
            { title: "O currículo é a sua apresentação numa página", bullets: ["Fácil de ler em menos de um minuto", "Um só tipo de letra simples, tamanho 10 a 12", "Títulos claros e espaço em branco"] },
            { title: "Secções, de cima para baixo", bullets: ["Nome e contactos", "Resumo de duas linhas e habilidades", "Experiência, a mais recente primeiro", "Estudos, formações e certificados"] },
            { title: "Toda a experiência conta", bullets: ["Voluntariado e serviço militar", "Capitão de equipa, treinador, papéis na comunidade", "Trabalho e formações durante a prisão"] },
            { title: "Adapte a cada anúncio", bullets: ["Encontre as habilidades que o anúncio pede", "Use as mesmas palavras para as habilidades que tem de verdade"] }
          ],
          tryIt: "Encontre um anúncio de emprego real a que se candidataria. Abra um documento novo e faça o esboço do currículo para ele: os seus contactos, um resumo de duas linhas, seis habilidades que combinam com o anúncio e a sua experiência com datas. Deixe os pontos para a próxima lição.",
          youCanNow: "organizar um currículo de uma página com as secções certas e adaptá-lo a um anúncio de emprego.",
          quickCheck: [
            { objective: "O1", q: "O que é o resumo de um currículo?", options: ["Duas linhas no topo a dizer quem você é e o que oferece", "Uma lista de todos os empregos que já teve", "Os números de telefone das suas referências", "O seu histórico de salários"], answer: 0, why: "Um resumo curto diz depressa ao empregador o que você traz." },
            { objective: "O1", q: "Um anúncio pede habilidades com empilhadores e com inventário, que você tem. O que faria com o seu currículo?", options: ["Deixá-lo igual para todos os empregos", "Acrescentar a história toda da sua vida", "Acrescentar essas habilidades às secções de habilidades e de experiência", "Fazê-lo com três páginas"], answer: 2, why: "Adaptar o currículo ao anúncio mostra que você serve para o trabalho." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever pontos de conquistas",
          minutes: 5,
          goal: "Transformar tarefas simples em pontos que mostram o que conseguiu.",
          text: [
            "Pontos fracos fazem a lista de tarefas: \"Responsável pela limpeza.\" Pontos fortes mostram resultados: \"Limpei e reabasteci 12 quartos por turno e passei em todas as inspeções semanais.\" O empregador consegue imaginar você a fazer bem o trabalho.",
            "Uma fórmula simples: verbo de ação + o que fez + um resultado ou um número. Comece com um verbo forte, como liderei, construí, formei, reparei, servi, organizei, reduzi ou melhorei. Depois junte um número se puder: quantas pessoas, quanto dinheiro, com que frequência ou quanto mais rápido.",
            "Exemplos de vidas diferentes: \"Formei 4 novos membros da equipa na lista de abertura da loja.\" (comércio) \"Liderei uma secção de 9 soldados nas verificações diárias do equipamento, sem nenhuma perda.\" (militar) \"Fui capitão de uma equipa escolar de 22 atletas e organizei a análise semanal de vídeos dos jogos.\" (atleta) \"Preparei refeições para 300 pessoas por dia na cozinha de uma instituição, cumprindo todas as inspeções de segurança alimentar.\" (reintegração)",
            "Diga a verdade. Nunca invente números nem cargos. Se não tiver a certeza de um número, use uma estimativa justa com a palavra \"cerca de\", ou descreva o resultado por palavras."
          ],
          steps: ["Escreva uma tarefa que fez num emprego, numa equipa ou num programa.", "Comece com um verbo de ação.", "Junte o que fez e para quem.", "Junte um número ou um resultado.", "Leia em voz alta: parece algo que fez de verdade?"],
          words: [["Ponto de conquista", "uma linha curta num currículo que mostra um resultado que conseguiu, e não só uma tarefa."], ["Verbo de ação", "uma palavra que diz o que fez, como liderei, construí, formei ou reparei."]],
          slides: [
            { title: "Tarefas e resultados", bullets: ["Fraco: \"Responsável pela limpeza\"", "Forte: \"Limpei 12 quartos por turno e passei em todas as inspeções\""] },
            { title: "A fórmula do ponto", bullets: ["Verbo de ação", "+ o que fez", "+ um número ou um resultado"] },
            { title: "Exemplos de muitas vidas", bullets: ["\"Formei 4 novos membros da equipa na lista de abertura\"", "\"Fui capitão de uma equipa de 22 e organizei a análise de vídeos\"", "\"Preparei 300 refeições por dia, cumprindo todas as inspeções\""] },
            { title: "Diga a verdade", bullets: ["Nunca invente números nem cargos", "Use \"cerca de\" para uma estimativa justa", "Sem número, descreva o resultado por palavras"] }
          ],
          tryIt: "Escreva quatro pontos de conquistas para o seu currículo usando a fórmula. Pode pedir a um assistente de IA: \"Torne este ponto do currículo mais forte sem acrescentar nada que não seja verdade: [o seu ponto].\" Confirme que cada palavra que ele lhe dá é verdade antes de a guardar.",
          youCanNow: "escrever pontos de conquistas que começam com um verbo de ação e mostram um resultado.",
          quickCheck: [
            { objective: "O2", q: "Qual é um verbo de ação que começa um ponto forte?", options: ["Responsável por", "Formei", "As tarefas incluíam", "Estava encarregado"], answer: 1, why: "Os pontos começam com um verbo de ação que mostra o que fez." },
            { objective: "O2", q: "O seu ponto diz \"Fiz atendimento ao cliente.\" O que escreveria no lugar?", options: ["\"Fiz muito atendimento ao cliente\"", "\"Atendimento ao cliente, caixa, telefones\"", "\"Fui o melhor no atendimento ao cliente\"", "\"Atendi cerca de 50 clientes por dia e tratei das devoluções com calma\""], answer: 3, why: "Pontos fortes mostram o que fez, com um resultado ou um número." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Criar um perfil no LinkedIn",
          minutes: 5,
          goal: "Criar um perfil no LinkedIn com foto, título, secção Sobre e experiência.",
          text: [
            "O LinkedIn é um site e uma aplicação gratuitos de contactos profissionais. Empregadores e recrutadores procuram lá pessoas para contratar, e muitos empregos são anunciados lá. O seu perfil funciona como um currículo na internet que as pessoas podem encontrar.",
            "As partes mais importantes: uma foto clara do seu rosto com um fundo simples; um título (a linha por baixo do seu nome) que diga o que faz ou quer fazer, como \"Operador de empilhador | OSHA 10 | De confiança nos turnos da manhã cedo\"; uma secção Sobre de três a cinco frases com a sua própria voz; e a sua experiência, usando os pontos do seu currículo.",
            "Depois crie a sua rede. Ligue-se a pessoas que conhece: antigos treinadores, supervisores, professores, gestores de caso, pessoas com quem serviu, colegas de turma. Envie uma nota curta quando fizer a ligação. Siga as empresas onde quer trabalhar para ver os empregos que anunciam.",
            "Mantenha tudo profissional e seguro. Não publique a sua morada de casa, a data de nascimento nem números de identificação. O seu perfil não tem de falar de um registo criminal nem de uma pausa; ele mostra as suas habilidades."
          ],
          steps: ["Vá a linkedin.com ou instale a aplicação oficial do LinkedIn, e crie uma conta gratuita com um email profissional.", "Acrescente uma foto clara e simpática.", "Escreva um título que diga o que faz ou o emprego que quer.", "Escreva uma secção Sobre de três a cinco frases.", "Acrescente a experiência e as habilidades do seu currículo.", "Ligue-se a cinco pessoas que conhece, com uma nota curta."],
          words: [["LinkedIn", "um site e uma aplicação gratuitos de contactos profissionais, onde as pessoas mostram o seu percurso de trabalho e os empregadores anunciam empregos."], ["Título", "a linha curta por baixo do seu nome no LinkedIn que diz o que faz (em inglês, \"headline\")."], ["Rede de contactos", "as pessoas que conhece e que podem partilhar ofertas de emprego ou falar bem do seu trabalho."]],
          slides: [
            { title: "Porquê o LinkedIn", bullets: ["Os recrutadores procuram lá pessoas para contratar", "Muitos empregos são anunciados lá", "O seu currículo na internet, que as pessoas podem encontrar"] },
            { title: "As partes principais", bullets: ["Foto clara com fundo simples", "Título: o que faz ou quer fazer", "Sobre: 3 a 5 frases com a sua voz", "Pontos de experiência do seu currículo"] },
            { title: "Crie a sua rede", bullets: ["Treinadores, supervisores, professores, gestores de caso", "Envie uma nota curta com cada pedido", "Siga as empresas onde quer trabalhar"] },
            { title: "Fique seguro", bullets: ["Nada de morada de casa, data de nascimento ou números de identificação", "Mostre as suas habilidades; você escolhe o que partilha"] }
          ],
          tryIt: "Crie ou atualize o seu perfil no LinkedIn. Escreva o título e a secção Sobre, acrescente um emprego com os seus novos pontos e envie pedidos de ligação com uma nota curta a três pessoas que conhece.",
          youCanNow: "criar um perfil no LinkedIn com foto, título, secção Sobre e experiência, e começar a criar a sua rede de contactos.",
          quickCheck: [
            { objective: "O3", q: "Para que serve a secção Sobre no LinkedIn?", options: ["Para mostrar a sua morada de casa", "Para contar em poucas linhas curtas a sua história de trabalho e o que procura", "Para mostrar as suas palavras-passe", "Para fazer a lista dos seus amigos nas redes sociais"], answer: 1, why: "A secção Sobre é uma história curta das suas habilidades e objetivos." },
            { objective: "O3", q: "Quer ligar-se a um antigo supervisor no LinkedIn. O que faria?", options: ["Enviar um pedido com uma nota curta e simpática", "Enviar um pedido sem nota e com o seu número de telefone", "Enviar-lhe logo uma mensagem a pedir um emprego", "Esperar que ele o encontre"], answer: 0, why: "Uma nota curta lembra-lhe quem você é e começa uma boa ligação." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O seu currículo e o LinkedIn",
        questions: [
          { objective: "O1", q: "Que tamanho deve ter um currículo para a maioria dos empregos de nível inicial e intermédio?", options: ["Três páginas", "Uma página", "Meia página", "O mais longo possível"], answer: 1, why: "Uma página é fácil de ler depressa e é o normal para a maioria dos empregos." },
          { objective: "O2", q: "Qual é o ponto mais forte?", options: ["\"Responsável pelo armazém\"", "\"Fiz várias tarefas\"", "\"Trabalhador esforçado\"", "\"Organizei o armazém e reduzi para cerca de metade o tempo de procura de peças\""], answer: 3, why: "Começa com um verbo de ação e mostra um resultado." },
          { objective: "O1", q: "Durante a prisão, você dirigiu a linha da cozinha num programa da instituição. Isso deve ir para o currículo?", options: ["Sim, como experiência, descrevendo as habilidades que usou", "Não, nunca conta", "Só se lhe pagaram muito", "Só no LinkedIn"], answer: 0, why: "Trabalho e programas de formação são experiência verdadeira; descreva o que fez." },
          { objective: "O3", q: "Qual é um bom título no LinkedIn?", options: ["\"À procura\"", "A sua morada de casa", "\"Soldador certificado | Segurança em primeiro lugar | Aberto a estágios profissionais\"", "A sua data de nascimento"], answer: 2, why: "Um título diz o que faz ou quer fazer e mostra os seus pontos fortes." },
          { objective: "O2", q: "Uma ferramenta de IA reescreveu o seu ponto e acrescentou um cargo de gerente que nunca teve. O que faz?", options: ["Guarda-o, soa melhor", "Tira-o, porque tudo num currículo tem de ser verdade", "Acrescenta outro cargo", "Põe-no só no LinkedIn"], answer: 1, why: "Um currículo tem de ser verdadeiro; você verifica cada palavra que a IA escreve." }
        ]
      }
    },
    {
      name: "Capítulo 2: Entrevistas e seguimento",
      lessons: [
        {
          objectives: ["O4"],
          title: "Responder com o método STAR",
          minutes: 5,
          goal: "Responder a uma pergunta de entrevista sobre comportamento com uma história STAR curta.",
          text: [
            "Muitas perguntas de entrevista começam com \"Fale-me de uma vez em que...\". O empregador quer um exemplo verdadeiro de como você age. O método STAR mantém a sua resposta clara e curta.",
            "S é a Situação: onde estava e o que se passava. T é a Tarefa: o que tinha de fazer. A é a Ação: o que VOCÊ fez, passo a passo. R é o Resultado: como acabou, com um número se puder, e o que aprendeu. (STAR vem do inglês: Situation, Task, Action, Result.)",
            "Exemplo: \"Fale-me de uma vez em que resolveu um problema.\" S: \"No meu emprego num armazém, uma entrega chegou duas horas atrasada num dia de muito movimento.\" T: \"Eu tinha de a pôr nas prateleiras antes de a loja abrir.\" A: \"Perguntei ao meu chefe de equipa se podia dividir a equipa, montei duas linhas de descarga e verifiquei eu mesmo as etiquetas.\" R: \"Acabámos 15 minutos antes da abertura e não faltava nada.\"",
            "Prepare cinco histórias antes de qualquer entrevista: uma vez em que resolveu um problema, trabalhou em equipa, lidou com um erro, lidou com uma pessoa difícil e aprendeu algo depressa. O desporto, a vida militar, a escola, a família e os programas dão boas histórias."
          ],
          steps: ["Leia a pergunta e escolha uma história verdadeira.", "Situação: uma frase sobre onde e quando.", "Tarefa: uma frase sobre o que tinha de fazer.", "Ação: duas ou três frases sobre o que fez.", "Resultado: uma frase sobre como acabou e o que aprendeu.", "Mantenha a resposta toda em cerca de um a dois minutos."],
          words: [["Pergunta sobre comportamento", "uma pergunta de entrevista sobre uma vez em que fez alguma coisa, para ver como age no trabalho."], ["Método STAR", "uma forma de responder: Situação, Tarefa, Ação, Resultado."]],
          slides: [
            { title: "\"Fale-me de uma vez em que...\"", bullets: ["O empregador quer um exemplo verdadeiro", "O STAR mantém a resposta clara e curta"] },
            { title: "STAR", bullets: ["Situação: onde e quando", "Tarefa: o que tinha de fazer", "Ação: o que VOCÊ fez", "Resultado: como acabou e o que aprendeu"] },
            { title: "Prepare cinco histórias", bullets: ["Resolveu um problema; trabalhou em equipa", "Lidou com um erro; lidou com uma pessoa difícil", "Aprendeu algo depressa"] },
            { title: "Seja breve", bullets: ["Cerca de um a dois minutos", "Use \"eu\" para as suas ações", "Termine com um resultado"] }
          ],
          tryIt: "Escreva uma história STAR para \"Fale-me de uma vez em que trabalhou em equipa.\" Use uma frase para a Situação e uma para a Tarefa, duas ou três para a Ação, e uma para o Resultado.",
          youCanNow: "responder a uma pergunta \"fale-me de uma vez em que\" com uma história STAR clara.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer o S de STAR?", options: ["Saber", "Sucesso", "Situação", "Síntese"], answer: 2, why: "STAR é Situação, Tarefa, Ação e Resultado." },
            { objective: "O4", q: "Perguntam-lhe: \"Fale-me de uma vez em que resolveu um problema.\" O que faria?", options: ["Dizer \"Sou bom a resolver problemas\" e parar", "Falar dez minutos sobre muitos problemas", "Dizer que nunca teve um problema", "Contar uma história curta: situação, tarefa, o que fez e o resultado"], answer: 3, why: "Uma história STAR curta prova a sua habilidade com um exemplo verdadeiro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Praticar em voz alta e responder com honestidade sobre uma pausa ou um registo",
          minutes: 6,
          goal: "Praticar respostas em voz alta, incluindo uma resposta curta e honesta sobre uma pausa ou um registo criminal.",
          text: [
            "As respostas que só leu na cabeça saem confusas. Diga-as em voz alta, grave-se no telefone e ouça de novo. Pratique as perguntas comuns: \"Fale-me de si\", \"Porque quer este emprego?\", \"Quais são os seus pontos fortes?\" e \"Fale-me de uma vez em que...\". Pode pedir a um assistente de IA para fazer de entrevistador e lhe fazer uma pergunta de cada vez.",
            "Uma pausa no percurso de trabalho é comum: escola, desporto, serviço militar, cuidar da família, saúde ou prisão. Mantenha a resposta curta e olhe para a frente: o que foi a pausa, o que fez ou aprendeu, e porque está pronto agora. Exemplo: \"Passei dois anos a cuidar da minha mãe. Mantive as minhas habilidades com um curso na internet e estou pronto para trabalhar a tempo inteiro.\"",
            "Se tem um registo criminal, não minta numa candidatura nem numa entrevista. Quando lhe perguntarem, dê uma resposta curta e honesta: assuma, diga o que fez desde então e volte ao emprego. Exemplo: \"Cometi um erro grave em 2019 e cumpri a minha pena. Desde então tirei um certificado de operador de empilhador e trabalhei 18 meses sem faltar a nenhum turno. Estou pronto para trazer essa confiança para aqui.\" Não dê muitos detalhes, a não ser que lhe peçam.",
            "Conheça os seus direitos. Nos Estados Unidos, segundo as orientações da EEOC (a agência federal contra a discriminação no trabalho), uma detenção sozinha não é prova de um crime, e os empregadores devem ter em conta o delito, há quanto tempo foi e o emprego. Muitos estados e cidades têm leis \"ban the box\" ou de oportunidade justa que adiam as perguntas sobre registos. Alguns registos podem ser selados ou apagados; informe-se num serviço de apoio jurídico ou no seu programa de reintegração. Veja as páginas oficiais abaixo."
          ],
          steps: ["Escreva a sua resposta a \"Fale-me de si\" em quatro frases: agora, passado, pontos fortes, porquê este emprego.", "Grave-se no telefone a responder a três perguntas e ouça de novo.", "Escreva uma resposta em três partes para qualquer pausa: o que foi, o que fez, porque está pronto.", "Se tem um registo: assuma, mostre o que fez desde então, volte ao emprego.", "Pratique a resposta difícil em voz alta até soar calma e curta."],
          words: [["Pausa no percurso de trabalho", "um período em que não trabalhou, que se vê pelas datas que faltam num currículo."], ["Ban the box", "leis de muitos estados e cidades dos EUA que proíbem os empregadores de perguntar sobre registos criminais na primeira candidatura (em inglês, \"tirar a caixa\")."], ["Eliminação do registo", "um processo no tribunal que pode apagar ou selar alguns registos; as regras mudam de estado para estado (em inglês, \"expungement\")."]],
          slides: [
            { title: "Pratique em voz alta", bullets: ["Grave-se no seu telefone", "Ouça de novo e encurte a resposta", "Peça a um assistente de IA para fazer de entrevistador"] },
            { title: "Responder sobre uma pausa", bullets: ["O que foi a pausa", "O que fez ou aprendeu", "Porque está pronto agora"] },
            { title: "Responder sobre um registo", bullets: ["Nunca minta numa candidatura", "Assuma numa frase", "Mostre o que fez desde então", "Volte ao emprego"] },
            { title: "Conheça os seus direitos", bullets: ["Uma detenção sozinha não é prova de um crime", "Muitos lugares têm leis \"ban the box\" ou de oportunidade justa", "Pergunte ao apoio jurídico sobre selar ou apagar registos"] }
          ],
          sources: [
            { name: "EEOC: Registos de detenção e condenação, o que quem procura emprego e os trabalhadores devem saber (em inglês)", url: "https://www.eeoc.gov/arrestandconviction" }
          ],
          tryIt: "Grave-se a responder a \"Fale-me de si\" e a uma pergunta difícil (uma pausa, um registo, ou \"Porque saiu do seu último emprego?\"). Ouça de novo. Corte tudo o que não é preciso e grave outra vez.",
          youCanNow: "praticar respostas em voz alta e dar uma resposta curta, honesta e virada para o futuro sobre uma pausa ou um registo.",
          quickCheck: [
            { objective: "O5", q: "Porque se deve gravar a responder a perguntas de entrevista?", options: ["Para ouvir o que cortar e melhorar", "Para publicar na internet", "Para enviar ao empregador", "Porque as entrevistas são sempre gravadas"], answer: 0, why: "Ouvir de novo mostra o que encurtar e corrigir." },
            { objective: "O5", q: "Um entrevistador pergunta sobre uma pausa de dois anos em que esteve preso. O que diria?", options: ["Inventar outro emprego", "Recusar responder e ir embora", "Contar uma longa história sobre o processo", "Dar uma resposta curta e honesta e dizer o que fez desde então"], answer: 3, why: "Curta e honesta, e depois foque no que fez desde então." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer perguntas e fazer o seguimento",
          minutes: 4,
          goal: "Fazer boas perguntas no fim de uma entrevista e enviar uma nota de agradecimento.",
          text: [
            "Perto do fim, a maioria dos entrevistadores pergunta: \"Tem alguma pergunta para nós?\" Tenha sempre duas ou três prontas. Isso mostra interesse. Boas perguntas: \"Como é um primeiro mês muito bom neste emprego?\", \"O que fazem de diferente as melhores pessoas desta equipa?\", \"Quais são os próximos passos, e quando devo ter uma resposta?\"",
            "Guarde as perguntas sobre salário e benefícios para quando eles falarem disso ou fizerem uma oferta, a não ser que o anúncio não diga o salário e você precise de saber. Pergunte com educação.",
            "Em 24 horas, envie uma nota curta de agradecimento por email (ou um cartão, para um pequeno negócio local). Agradeça o tempo deles, fale de uma coisa de que falaram e diga outra vez porque quer o emprego. Mantenha-a em quatro ou cinco frases.",
            "Se não tiver resposta até à data que deram, envie uma mensagem educada de seguimento uns dias depois. Entretanto, continue a candidatar-se a outros empregos."
          ],
          steps: ["Prepare duas ou três perguntas antes da entrevista.", "Pergunte pelos próximos passos e pelos prazos.", "Anote o nome e o email do entrevistador.", "Envie uma nota curta de agradecimento em 24 horas.", "Faça o seguimento uma vez se passar a data que deram."],
          words: [["Seguimento", "uma mensagem curta e educada depois de uma entrevista, para agradecer ao empregador ou perguntar pelos próximos passos."]],
          slides: [
            { title: "Tenha sempre perguntas", bullets: ["\"Como é um primeiro mês muito bom?\"", "\"O que fazem de diferente as melhores pessoas daqui?\"", "\"Quais são os próximos passos?\""] },
            { title: "Salário e benefícios", bullets: ["Normalmente espere até eles falarem disso ou fazerem uma oferta", "Pergunte com educação se o salário não estava no anúncio"] },
            { title: "Nota de agradecimento", bullets: ["Envie em 24 horas", "Fale de uma coisa de que falaram", "Quatro ou cinco frases"] },
            { title: "Ainda sem resposta?", bullets: ["Faça o seguimento uma vez depois da data deles", "Continue a candidatar-se a outros lugares"] }
          ],
          tryIt: "Tarefa final: escreva uma nota curta de agradecimento para a entrevista para a qual praticou. Depois junte tudo: o seu currículo de uma página, o título e a secção Sobre atualizados no LinkedIn, e três respostas STAR gravadas.",
          youCanNow: "fazer boas perguntas no fim de uma entrevista e fazer o seguimento com uma nota curta de agradecimento.",
          quickCheck: [
            { objective: "O6", q: "O que tem uma boa nota de agradecimento?", options: ["Agradecimento, uma coisa de que falaram e porque quer o emprego", "Só a palavra obrigado", "Um pedido de salário mais alto", "O seu currículo completo outra vez"], answer: 0, why: "Falar de uma coisa de que falaram mostra interesse verdadeiro." },
            { objective: "O6", q: "No fim da entrevista perguntam se tem perguntas. O que perguntaria?", options: ["\"Quando posso tirar férias?\"", "\"Não, estou bem.\"", "\"Quais são os próximos passos, e quando devo ter uma resposta?\"", "\"Fiquei com o emprego?\""], answer: 2, why: "Perguntar pelos próximos passos mostra interesse e diz-lhe quando fazer o seguimento." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Entrevistas e seguimento",
        questions: [
          { objective: "O4", q: "O que quer dizer o A de STAR?", options: ["Atitude", "Avaliação", "Ação", "Agradecimento"], answer: 2, why: "STAR é Situação, Tarefa, Ação, Resultado." },
          { objective: "O5", q: "Qual é a melhor forma de praticar respostas de entrevista?", options: ["Lê-las uma vez em silêncio", "Decorar um texto palavra por palavra e nunca o dizer em voz alta", "Não praticar, para parecer natural", "Dizê-las em voz alta e gravar-se"], answer: 3, why: "Falar e ouvir de novo mostra o que corrigir." },
          { objective: "O5", q: "Esteve um ano sem trabalhar a cuidar de um dos pais. Qual é a melhor resposta?", options: ["\"Cuidei da minha mãe durante um ano, mantive as minhas habilidades com um curso e estou pronto para trabalhar a tempo inteiro.\"", "\"Prefiro não dizer.\"", "Inventar um emprego para tapar a pausa", "Uma história de dez minutos sobre problemas de família"], answer: 0, why: "É curta, honesta e avança para a razão por que está pronto." },
          { objective: "O5", q: "Um entrevistador pergunta sobre o seu registo criminal. O que deve fazer?", options: ["Negar", "Dar uma resposta curta e honesta e dizer o que fez desde então", "Ir embora", "Contar todos os detalhes durante dez minutos"], answer: 1, why: "A honestidade e o que fez desde então criam confiança; mentir pode custar-lhe o emprego mais tarde." },
          { objective: "O6", q: "Quando deve enviar uma nota de agradecimento?", options: ["Em 24 horas", "Depois de um mês", "Só se ficar com o emprego", "Nunca"], answer: 0, why: "Uma nota rápida mostra interesse enquanto eles ainda se lembram bem de você." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Currículos, LinkedIn e Entrevistas de Emprego",
    questions: [
      { objective: "O1", q: "O que vai mesmo no topo de um currículo?", options: ["Os seus passatempos", "As suas referências", "O seu nome e contactos", "A sua data de nascimento"], answer: 2, why: "O nome e os contactos vêm primeiro para o empregador o poder contactar." },
      { objective: "O1", q: "Porque mudar o currículo um pouco para cada emprego?", options: ["Para combinar com as habilidades que o anúncio pede", "Porque a lei obriga", "Para o fazer mais longo", "Para acrescentar empregos que não teve"], answer: 0, why: "Adaptar as habilidades verdadeiras ao anúncio ajuda as pessoas e os programas a encontrá-lo." },
      { objective: "O1", q: "Que endereço de email é melhor num currículo?", options: ["partyking99@example.com", "jordan.smith@example.com", "Nenhum email", "O seu antigo email da escola que já não consegue abrir"], answer: 1, why: "Um endereço simples e profissional, que vê muitas vezes, é o melhor." },
      { objective: "O2", q: "Um antigo militar liderou uma equipa de 9 nas verificações diárias do equipamento. Qual é o ponto mais forte?", options: ["\"Estive no exército\"", "\"Fiz verificações\"", "\"Várias tarefas\"", "\"Liderei 9 soldados nas verificações diárias do equipamento, sem nenhuma perda\""], answer: 3, why: "Verbo de ação, o que foi feito e um resultado." },
      { objective: "O2", q: "Qual é a fórmula do ponto?", options: ["Cargo + salário", "Verbo de ação + o que fez + um resultado ou um número", "Adjetivo + adjetivo + adjetivo", "Data + lugar"], answer: 1, why: "Essa fórmula transforma tarefas em conquistas." },
      { objective: "O2", q: "Não tem a certeza do número exato para um ponto. O que faz?", options: ["Usa uma estimativa justa com \"cerca de\" ou descreve o resultado por palavras", "Inventa um número grande", "Tira o emprego todo", "Copia um número do currículo de um amigo"], answer: 0, why: "Diga a verdade; as estimativas têm de ser justas e indicadas como estimativas." },
      { objective: "O3", q: "O que é o título no LinkedIn?", options: ["A sua morada de casa", "Uma notícia", "A linha curta por baixo do seu nome que diz o que faz", "A sua palavra-passe"], answer: 2, why: "O título diz aos recrutadores o que faz ou quer fazer." },
      { objective: "O3", q: "Que foto é melhor para o LinkedIn?", options: ["Uma foto de grupo de uma festa", "Uma foto do seu carro", "Sem rosto, só um logótipo", "Uma foto clara do seu rosto com um fundo simples"], answer: 3, why: "Uma foto clara e simpática do rosto parece profissional." },
      { objective: "O3", q: "O que NÃO deve pôr no seu perfil do LinkedIn?", options: ["As suas habilidades", "A sua morada de casa e números de identificação", "A sua experiência de trabalho", "Os seus certificados"], answer: 1, why: "Os dados privados podem ser mal usados; deixe-os de fora." },
      { objective: "O3", q: "Quem é uma boa pessoa para se ligar primeiro no LinkedIn?", options: ["Um antigo treinador ou supervisor que conhece o seu trabalho", "Uma celebridade qualquer", "Ninguém", "Só pessoas que nunca conheceu"], answer: 0, why: "Quem conhece o seu trabalho pode partilhar ofertas e falar bem de você." },
      { objective: "O4", q: "\"Fale-me de uma vez em que cometeu um erro.\" Que tipo de pergunta é esta?", options: ["Uma pergunta com rasteira, para saltar", "Uma pergunta sobre salário", "Uma pergunta sobre comportamento, boa para uma resposta STAR", "Uma pergunta de sim ou não"], answer: 2, why: "Pede um exemplo verdadeiro, e o STAR responde bem a isso." },
      { objective: "O4", q: "Numa resposta STAR, que parte deve levar mais tempo?", options: ["Situação", "Tarefa", "Resultado", "Ação: o que fez"], answer: 3, why: "O que o empregador mais quer ouvir é o que você fez." },
      { objective: "O4", q: "Quanto tempo deve durar mais ou menos uma resposta STAR?", options: ["Um a dois minutos", "Dez segundos", "Dez minutos", "Meia hora"], answer: 0, why: "Curta e clara mantém o entrevistador atento." },
      { objective: "O5", q: "Como pode um assistente de IA ajudar a praticar?", options: ["Indo à entrevista por você", "Fazendo de entrevistador e fazendo uma pergunta de cada vez", "Inventando o seu percurso de trabalho", "Guardando o seu número de identificação"], answer: 1, why: "A IA pode fazer as perguntas de prática; as respostas têm de continuar a ser suas." },
      { objective: "O5", q: "Qual é uma resposta forte e honesta sobre um registo?", options: ["\"Não tenho nenhum\", quando tem", "\"Isso não lhe diz respeito\"", "\"Cometi um erro em 2019 e cumpri a minha pena. Desde então tirei um certificado e nunca faltei ao trabalho.\"", "Uma longa história a culpar os outros"], answer: 2, why: "Assuma, mostre o que fez desde então e volte ao emprego." },
      { objective: "O5", q: "Segundo as orientações da EEOC, uma detenção sozinha:", options: ["É prova de um crime", "Não é prova de um crime", "Tem de estar em todos os currículos", "Nunca pode ser perguntada"], answer: 1, why: "Uma detenção sozinha não prova que alguém cometeu um crime." },
      { objective: "O5", q: "O que são as leis \"ban the box\" ou de oportunidade justa?", options: ["Regras sobre o envio de caixas", "Leis que proíbem para sempre todas as verificações de antecedentes", "Leis que proíbem os currículos", "Leis de muitos lugares que adiam as perguntas sobre registos na primeira candidatura"], answer: 3, why: "Dão aos candidatos a oportunidade de serem avaliados primeiro pelas habilidades; as regras mudam de lugar para lugar." },
      { objective: "O6", q: "No fim da entrevista perguntam: \"Tem perguntas para nós?\" Você diz:", options: ["\"Quais são os próximos passos, e quando devo ter uma resposta?\"", "\"Não.\"", "\"Quando posso tirar férias?\"", "\"O que faz esta empresa?\""], answer: 0, why: "Uma pergunta preparada e útil mostra interesse." },
      { objective: "O6", q: "Uma boa nota de agradecimento:", options: ["Tem três páginas", "Pede outra vez um salário mais alto", "Agradece, fala de uma coisa de que falaram e diz porque quer o emprego", "É enviada um mês depois"], answer: 2, why: "Curta, concreta e rápida funciona melhor." },
      { objective: "O6", q: "O empregador disse que ligava até sexta-feira. Agora é quarta-feira da semana seguinte. Você:", options: ["Liga dez vezes por dia", "Envia uma mensagem educada de seguimento e continua a candidatar-se a outros lugares", "Desiste de procurar trabalho", "Aparece todos os dias no escritório deles sem ser convidado"], answer: 1, why: "Uma mensagem educada de seguimento é profissional; continue a sua procura." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      4,
      6,
      8,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Currículo de uma página",
        objective: "O1",
        notYet: "Mais de uma página, faltam secções, ou não está adaptado ao anúncio.",
        meets: "Uma página com contactos, resumo, habilidades que combinam com o anúncio e experiência com datas.",
        exceeds: "As habilidades e o resumo usam palavras do anúncio de emprego."
      },
      {
        name: "Pontos de conquistas",
        objective: "O2",
        notYet: "Os pontos só fazem a lista de tarefas, ou alguma coisa não é verdade.",
        meets: "Pelo menos quatro pontos verdadeiros com um verbo de ação e um resultado ou um número.",
        exceeds: "Cada ponto mostra um resultado claro."
      },
      {
        name: "Perfil no LinkedIn",
        objective: "O3",
        notYet: "Sem título ou sem secção Sobre, ou com dados privados à vista.",
        meets: "O título e a secção Sobre combinam com o currículo, sem dados privados.",
        exceeds: "Foto acrescentada e três pedidos de ligação enviados com notas."
      },
      {
        name: "Respostas STAR",
        objective: "O4",
        notYet: "As respostas são vagas ou falta uma parte do STAR.",
        meets: "Três respostas STAR gravadas com as quatro partes, cada uma com um a dois minutos.",
        exceeds: "As respostas terminam com um resultado claro, e a maior parte do tempo é na Ação."
      },
      {
        name: "Resposta difícil honesta",
        objective: "O5",
        notYet: "Nenhuma resposta preparada, ou é longa, defensiva ou falsa.",
        meets: "Uma resposta curta e honesta sobre uma pausa ou um registo que passa para o que o aluno fez desde então.",
        exceeds: "Gravada, melhorada e dita com calma."
      },
      {
        name: "Nota de agradecimento",
        objective: "O6",
        notYet: "Sem nota, ou uma nota geral de uma só palavra.",
        meets: "Uma nota curta com agradecimento, uma coisa de que falaram e porque o aluno quer o emprego.",
        exceeds: "Pronta a enviar em 24 horas, com um plano de seguimento educado."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que se candidatam a pelo menos um emprego com o novo currículo em 30 dias (inquérito de seguimento)",
      "Alunos que conseguem uma entrevista em 60 dias",
      "Alunos que recebem uma oferta de emprego em 90 dias",
      "Alunos que começam outro curso de carreira da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com uma ferramenta de documentos gratuita, como o Google Docs ou o Microsoft Word",
      "Uma conta gratuita no LinkedIn",
      "Um gravador de voz ou de vídeo num telefone",
      "Um anúncio de emprego real",
      "Cerca de 60 minutos para as lições e as verificações, mais tempo para acabar o currículo e as gravações"
    ],
    facilitatorNotes: [
      "Façam entrevistas simuladas em pares, para que cada aluno responda em voz alta pelo menos três vezes.",
      "Ajude os alunos a transformar o desporto, a vida militar, o cuidar da família e o trabalho feito durante a prisão em experiência honesta no currículo.",
      "Confirme que os textos reescritos pela IA continuam verdadeiros; tire tudo o que o aluno não fez.",
      "Lembre aos alunos que não ponham a morada de casa nem números de identificação no LinkedIn ou em ferramentas de IA.",
      "Avalie o pacote final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
