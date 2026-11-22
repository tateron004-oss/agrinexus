"use strict";

// Koach Learn course (Portuguese translation of shared/usajobs-government-jobs.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: US agency, form and site names are kept in English and explained.

module.exports = {
  id: "usajobs-government-jobs-pt",
  lang: "pt",
  translationOf: "usajobs-government-jobs",
  category: "Workforce Development",
  name: "Candidatar-se a Empregos do Governo (USAJOBS)",
  skills: "Encontrar a sua via de contratação, Pesquisar no USAJOBS, Ler um anúncio de emprego, Escrever um currículo federal, Responder ao questionário com honestidade, Acompanhar a sua candidatura com segurança",
  outcome: "candidatar-se a um emprego federal real dos EUA no USAJOBS: encontrar os empregos abertos para você, ler o anúncio, escrever um currículo federal que corresponda a ele, juntar os documentos certos, responder ao questionário com honestidade e acompanhar a sua candidatura sem cair em burlas.",
  about: [
    "O governo federal dos Estados Unidos contrata pessoas em todos os estados e em muitos tipos de trabalho: escritório e atendimento ao público, ofícios e manutenção, armazéns, saúde, parques, informática e mais. Quase todos estes empregos são publicados no USAJOBS (usajobs.gov), o site oficial gerido pelo Office of Personnel Management (OPM), o serviço federal de pessoal. Usá-lo é gratuito.",
    "As candidaturas federais são diferentes da maioria dos empregos privados. O anúncio é longo, o currículo precisa de mais detalhes, muitas vezes há um questionário, e vias especiais de contratação ajudam veteranos, cônjuges de militares, pessoas com deficiência, estudantes e recém-formados. Este curso guia você em cada passo com um anúncio real à sua escolha.",
    "Este curso é para quem procura emprego, veteranos, pessoas que voltam para casa depois da prisão, jovens adultos e qualquer pessoa que muda de carreira. Prepara você para se candidatar; não garante que seja contratado nem decide se você cumpre os requisitos. Cada serviço decide isso a partir da sua candidatura. Cada lição dura cerca de cinco minutos, acaba com uma pequena verificação e uma tarefa \"Experimente agora\", e constrói o seu dossiê de candidatura de prática."
  ],
  finalTask: "Prepare um dossiê de candidatura de prática para um anúncio real do USAJOBS a que possa candidatar-se: (1) um resumo do anúncio numa página (quem pode candidatar-se, grau e salário, data de encerramento, funções, experiência especializada, documentos exigidos); (2) pelo menos duas entradas de emprego no currículo federal que correspondam ao anúncio, com datas, horas por semana, funções e resultados; (3) uma lista de todos os documentos exigidos e onde vai obter cada um; (4) um registo de candidaturas com o número do anúncio, a data em que se candidatou e a próxima data de verificação.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos nos EUA que procuram trabalho estável com bons benefícios: pessoas à procura de emprego, veteranos e cônjuges de militares, pessoas que voltam para casa depois da prisão, pessoas com deficiência, estudantes e recém-formados, e pessoas que mudam de carreira. Muitos nunca se candidataram a um emprego federal, e alguns têm um historial de trabalho curto ou irregular.",
    startingPoint: "Sabem usar um telefone ou um computador para o e-mail e para sites, e já se candidataram a pelo menos um emprego comum ou têm um currículo simples. A maioria nunca leu um anúncio de emprego federal e não conhece as vias de contratação, os graus nem a experiência especializada.",
    gap: "As candidaturas federais são muitas vezes rejeitadas por razões que têm solução: candidatar-se a um emprego que não está aberto para a pessoa, um currículo sem datas, sem horas ou sem a experiência que o anúncio pede, um documento em falta como o DD-214, ou respostas ao questionário que o currículo não confirma. Os alunos precisam de uma forma cuidadosa, passo a passo, de se candidatar, e precisam de saber que candidatar-se é gratuito, para evitarem burlas de emprego.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano); os termos federais são explicados sempre",
      "Aparelhos: um telefone ou um computador da biblioteca ou de um centro de emprego; um computador é mais fácil para o currículo",
      "Tempo: lições de 4 a 6 minutos; o dossiê final leva uma a duas horas a mais",
      "As regras mudam: limites de páginas, vias de contratação e documentos exigidos vêm de cada anúncio e do USAJOBS, não deste curso",
      "Privacidade: nenhum número da Segurança Social nem outros números privados nas tarefas de prática ou em ferramentas de IA",
      "Alguns alunos têm registo criminal ou deficiência; o curso ensina respostas honestas e onde encontrar as regras oficiais, não dá conselhos jurídicos"
    ],
    prerequisites: "Saber usar o básico de um computador ou de um telefone e ter um endereço de e-mail. O curso \"Currículos, LinkedIn e Entrevistas\" ajuda como primeiro curso, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um anúncio de emprego federal e o seu próprio percurso", action: "identificar as vias de contratação para as quais pode cumprir os requisitos e verificar se um emprego está aberto para você", standard: "lendo corretamente a secção \"This job is open to\" (este emprego está aberto a)" },
    { id: "O2", condition: "Usando um telefone ou um computador da biblioteca", action: "criar um perfil no USAJOBS e guardar uma pesquisa de empregos filtrada por local, grau salarial e via de contratação", standard: "usando só o site oficial usajobs.gov e sem pagar a ninguém" },
    { id: "O3", condition: "Com um anúncio de emprego real", action: "fazer a lista das funções, dos requisitos, do grau, da data de encerramento e dos documentos exigidos", standard: "numa folha de resumo de uma página, sem faltar nenhum dos cinco" },
    { id: "O4", condition: "Com a experiência especializada que um anúncio pede", action: "escrever entradas de emprego no currículo federal com datas, horas por semana, funções e resultados que correspondam ao anúncio", standard: "usando as palavras-chave do anúncio e só informações verdadeiras" },
    { id: "O5", condition: "Antes de enviar uma candidatura", action: "responder ao questionário com honestidade e juntar todos os documentos que o anúncio exige", standard: "para que cada resposta alta seja confirmada pelo seu currículo e não falte nenhum documento exigido" },
    { id: "O6", condition: "Depois de se candidatar", action: "acompanhar o estado da sua candidatura e reconhecer ofertas falsas de emprego no governo", standard: "mantendo um registo com datas e nunca pagando uma taxa nem partilhando números privados fora do USAJOBS" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar um emprego federal aberto para você",
      lessons: [
        {
          title: "Como funciona a contratação federal e as suas vias de contratação",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar as vias de contratação que lhe podem servir e verificar para quem um emprego está aberto.",
          text: [
            "Os empregos federais são publicados no USAJOBS, o site oficial gerido pelo Office of Personnel Management (OPM). Cada publicação chama-se anúncio de emprego. Cada serviço do governo (por exemplo o Department of Veterans Affairs, o Forest Service ou o IRS) lê as candidaturas e decide quem cumpre os requisitos.",
            "Cada anúncio diz quem pode candidatar-se, numa parte chamada \"This job is open to\" (este emprego está aberto a). O USAJOBS junta os candidatos em vias de contratação. Algumas delas: aberto ao público (cidadãos e nacionais dos EUA), veteranos, cônjuges de militares, pessoas com deficiência, estudantes, recém-formados, funcionários federais, e Guarda Nacional e reservistas.",
            "Se um emprego está aberto só a funcionários federais e você não é um deles, a sua candidatura não será considerada, por melhor que seja. Por isso, verifique sempre esta parte primeiro. Algumas vias especiais têm as suas próprias regras: por exemplo, pessoas com deficiência podem candidatar-se pelo Schedule A com uma carta que comprova a deficiência, e os veteranos podem ter preferência de veterano.",
            "O salário de muitos empregos de escritório e profissionais segue o General Schedule (GS): 15 graus, do GS-1 ao GS-15, cada um com 10 escalões, mais um subsídio de localidade que depende de onde trabalha. Muitos empregos de ofícios e trabalho manual usam outra tabela, o Federal Wage System (muitas vezes indicado como WG)."
          ],
          steps: ["Anote as vias de contratação que lhe podem servir: público, veterano, cônjuge de militar, deficiência, estudante, recém-formado ou outra.", "Abra um anúncio e encontre \"This job is open to\".", "Verifique que pelo menos uma via da lista serve para você.", "Se nenhuma servir, deixe esse emprego e procure outro."],
          words: [["USAJOBS", "o site oficial e gratuito onde são publicados os empregos federais dos EUA."], ["OPM", "o Office of Personnel Management, o serviço que gere as regras de contratação federal e o USAJOBS."], ["Anúncio de emprego", "a publicação completa do emprego: quem pode candidatar-se, funções, requisitos, salário e como se candidatar."], ["Via de contratação", "um grupo de pessoas a quem um emprego está aberto, como o público, os veteranos ou os estudantes."], ["Schedule A", "uma autorização de contratação que deixa os serviços contratar pessoas com deficiência sem a concorrência habitual."], ["General Schedule (GS)", "a principal tabela salarial federal, com os graus GS-1 a GS-15 e 10 escalões em cada grau."], ["Subsídio de localidade", "um valor a mais no salário que depende da zona onde fica o emprego."]],
          slides: [
            { title: "Onde estão os empregos federais", bullets: ["USAJOBS (usajobs.gov), gerido pelo OPM", "Pesquisar é gratuito e candidatar-se é gratuito", "Cada serviço decide quem cumpre os requisitos"] },
            { title: "Vias de contratação", bullets: ["Aberto ao público: cidadãos e nacionais dos EUA", "Veteranos, cônjuges de militares, Guarda Nacional e reservistas", "Pessoas com deficiência (Schedule A), estudantes, recém-formados"] },
            { title: "Verifique primeiro \"This job is open to\"", bullets: ["Se nenhuma via servir para você, a candidatura não é considerada", "Deixe esse emprego e procure um que esteja aberto para você"] },
            { title: "Como aparece o salário federal", bullets: ["GS: graus 1 a 15, 10 escalões cada, mais subsídio de localidade", "Muitos empregos de ofícios usam o Federal Wage System (WG)"] }
          ],
          sources: [
            { name: "USAJOBS: Explorar as vias de contratação", url: "https://www.usajobs.gov/hiringpath/" },
            { name: "USAJOBS: Aberto ao público", url: "https://www.usajobs.gov/HiringPath/Public" },
            { name: "OPM: General Schedule", url: "https://www.opm.gov/policy-data-oversight/pay-leave/pay-systems/general-schedule/" }
          ],
          tryIt: "Num papel, faça a lista de todas as vias de contratação que lhe podem servir e porquê (por exemplo: \"Aberto ao público: sou cidadão dos EUA\" ou \"Veteranos: servi no Exército\"). Depois abra usajobs.gov/hiringpath e leia a página de cada via da sua lista.",
          youCanNow: "dizer as vias de contratação que lhe podem servir e verificar se um emprego federal está aberto para você antes de gastar tempo com ele.",
          quickCheck: [
            { objective: "O1", q: "Um anúncio diz \"This job is open to: Federal employees - competitive service\" (aberto a funcionários federais). Você nunca trabalhou para o governo. O que faz?", options: ["Candidata-se na mesma com um currículo forte", "Liga para o serviço a pedir uma exceção", "Deixa esse e procura um emprego aberto ao público", "Candidata-se com o estatuto federal de um amigo"], answer: 2, why: "Se nenhuma via da lista servir para você, a candidatura não será considerada, por isso é melhor usar o seu tempo num emprego aberto para você." },
            { objective: "O1", q: "Que via de contratação é para os cidadãos e nacionais dos EUA em geral?", options: ["Autoridades especiais", "Altos dirigentes", "Funcionários federais", "Aberto ao público"], answer: 3, why: "\"Aberto ao público\" é a via para os cidadãos e nacionais dos EUA em geral." }
          ]
        },
        {
          title: "Criar o perfil no USAJOBS e pesquisar bem",
          objectives: ["O2"],
          minutes: 5,
          goal: "Criar um perfil no USAJOBS e guardar uma pesquisa de empregos com filtros.",
          text: [
            "Vá a usajobs.gov e escolha criar um perfil. O USAJOBS usa o Login.gov, o serviço de início de sessão do governo, por isso você cria uma conta Login.gov com o seu e-mail, uma palavra-passe forte e um segundo passo de entrada (como um código enviado para o seu telefone). Escreva você mesmo o endereço; não siga links de SMS nem de anúncios.",
            "No seu perfil, acrescenta os seus contactos e responde a perguntas sobre você, como se é veterano ou funcionário federal neste momento. Estas respostas ajudam o USAJOBS a mostrar-lhe as vias de contratação que servem para você. O perfil é também onde ficam guardados os seus currículos e documentos.",
            "Para pesquisar, escreva uma palavra do trabalho ou uma habilidade (por exemplo \"maintenance\", \"customer service\" ou \"medical support\") e uma cidade ou um estado. Depois use os filtros: local, grau salarial, via de contratação, horário (tempo inteiro ou tempo parcial) e trabalho remoto ou teletrabalho, se quiser. Quando os resultados parecerem certos, guarde a pesquisa para o USAJOBS lhe enviar novos empregos por e-mail.",
            "Usar o USAJOBS é gratuito. Nenhum serviço verdadeiro do governo cobra para criar um perfil, pesquisar ou candidatar-se."
          ],
          steps: ["Escreva você mesmo usajobs.gov no navegador.", "Crie um perfil e inicie sessão pelo Login.gov.", "Preencha o seu perfil, incluindo as perguntas sobre o estatuto de veterano e o serviço federal.", "Pesquise com uma palavra do trabalho e um local.", "Acrescente filtros: grau salarial, via de contratação, horário.", "Guarde a pesquisa e ative os alertas por e-mail."],
          words: [["Perfil", "a página da sua conta no USAJOBS, onde ficam os seus dados, currículos e documentos."], ["Login.gov", "o serviço de início de sessão do governo dos EUA, usado para entrar no USAJOBS e noutros sites do governo."], ["Filtro", "uma opção que reduz os resultados da pesquisa, como o local ou o grau salarial."], ["Pesquisa guardada", "uma pesquisa de que o USAJOBS se lembra e que usa para lhe enviar por e-mail novos empregos que correspondam."], ["Teletrabalho", "trabalhar a partir de casa durante parte ou todo o tempo."]],
          slides: [
            { title: "Comece no site verdadeiro", bullets: ["Escreva você mesmo usajobs.gov", "Inicie sessão com o Login.gov", "É gratuito: nunca pague para se candidatar"] },
            { title: "Preencha o seu perfil", bullets: ["Contactos", "Perguntas sobre veterano e funcionário federal", "Os seus currículos e documentos ficam aqui"] },
            { title: "Pesquise e depois filtre", bullets: ["Uma palavra do trabalho e um local", "Grau salarial, via de contratação, horário, teletrabalho", "Guarde a pesquisa e ative os alertas por e-mail"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "Login.gov", url: "https://www.login.gov/" },
            { name: "FTC: Burlas de emprego", url: "https://consumer.ftc.gov/articles/job-scams" }
          ],
          tryIt: "Crie (ou entre no) seu perfil do USAJOBS. Faça uma pesquisa de um tipo de emprego que poderia fazer na sua zona, acrescente pelo menos dois filtros e guarde-a. Anote quantos empregos apareceram e o título de três.",
          youCanNow: "criar um perfil no USAJOBS com segurança e guardar uma pesquisa que lhe envia empregos que servem para você.",
          quickCheck: [
            { objective: "O2", q: "Uma SMS diz: \"Candidate-se a empregos federais aqui, taxa de inscrição de $25\" com um link. O que é verdade?", options: ["É uma burla: usar o USAJOBS é gratuito", "Está bem se o link acabar em .com", "Os empregos federais precisam de uma conta paga", "Deve pagar com um cartão-presente para estar seguro"], answer: 0, why: "Pesquisar e candidatar-se a empregos federais é sempre gratuito, por isso quem cobra uma taxa é um burlão." },
            { objective: "O2", q: "Quer que o USAJOBS lhe avise de novos empregos em armazéns perto de você. O que faz?", options: ["Pesquisa outra vez a cada hora", "Guarda a pesquisa e ativa os alertas por e-mail", "Pede a um amigo para vigiar o site", "Cria um perfil novo todas as semanas"], answer: 1, why: "Uma pesquisa guardada com alertas envia-lhe por e-mail os novos empregos que correspondem aos seus filtros." }
          ]
        },
        {
          title: "Ler um anúncio de emprego federal",
          objectives: ["O3"],
          minutes: 6,
          goal: "Fazer a lista das funções, dos requisitos, do grau, da data de encerramento e dos documentos exigidos de um anúncio.",
          text: [
            "Os anúncios federais são longos, mas seguem sempre o mesmo modelo. Perto do topo: o título do emprego, o serviço, o local, o salário e o grau, as datas de abertura e de encerramento, e para quem o emprego está aberto. Depois vêm secções como Duties (funções), Requirements (condições de emprego e requisitos), How you will be evaluated (como será avaliado), Required documents (documentos exigidos) e How to apply (como se candidatar).",
            "A parte mais importante são os requisitos (Qualifications). Muitos empregos pedem experiência especializada: experiência a fazer o tipo de trabalho do emprego, muitas vezes descrita como um ano a um nível como o grau imediatamente abaixo. Alguns empregos deixam cumprir os requisitos com estudos em vez disso, ou com uma mistura dos dois. O seu currículo tem de mostrar esta experiência com clareza, ou pode ser considerado sem os requisitos.",
            "As condições de emprego são regras que tem de cumprir para ser contratado, por exemplo ter a cidadania dos EUA, passar numa verificação de antecedentes ou num teste de drogas, ou ter carta de condução. Leia-as antes de se candidatar.",
            "Atenção à data de encerramento. Alguns anúncios também fecham mais cedo quando recebem um certo número de candidaturas, por isso candidate-se logo que estiver pronto."
          ],
          steps: ["Copie o título do emprego, o serviço, o número do anúncio, o grau e o salário.", "Copie as datas de abertura e de encerramento.", "Leia \"This job is open to\".", "Copie a experiência especializada ou os estudos de que precisa.", "Faça a lista das funções principais.", "Faça a lista de cada item em Required documents."],
          words: [["Experiência especializada", "experiência a fazer o tipo de trabalho de que o emprego precisa, ao nível que o anúncio pede."], ["Condições de emprego", "regras que tem de cumprir para ser contratado, como a cidadania ou uma verificação de antecedentes."], ["Data de encerramento", "o último dia em que pode candidatar-se. Alguns empregos fecham mais cedo."], ["Número do anúncio", "o código que identifica uma publicação de emprego; use-o para acompanhar a sua candidatura."], ["Documentos exigidos", "os papéis que o anúncio diz que tem de carregar, como um currículo, certificados de notas ou um DD-214."]],
          slides: [
            { title: "O topo do anúncio", bullets: ["Título, serviço, local, salário e grau", "Datas de abertura e de encerramento", "This job is open to (para quem está aberto)"] },
            { title: "Os requisitos decidem muito", bullets: ["Experiência especializada, estudos, ou os dois", "O seu currículo tem de a mostrar com clareza"] },
            { title: "Leia antes de se candidatar", bullets: ["Condições de emprego: cidadania, verificação de antecedentes, carta", "Documentos exigidos: a lista do que tem de carregar"] },
            { title: "Atenção às datas", bullets: ["Candidate-se antes da data de encerramento", "Alguns empregos fecham mais cedo depois de candidaturas suficientes"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "OPM: Perguntas frequentes sobre a contratação federal", url: "https://www.opm.gov/frequently-asked-questions/employment-faq/federal-hiring/" }
          ],
          tryIt: "Escolha um anúncio real da sua pesquisa guardada que esteja aberto para você. Numa folha de papel, faça o resumo do anúncio: título, serviço, número do anúncio, grau e salário, data de encerramento, para quem está aberto, a experiência especializada com as suas palavras, três funções principais e todos os documentos exigidos.",
          youCanNow: "ler um anúncio de emprego federal e tirar dele o que precisa numa página.",
          quickCheck: [
            { objective: "O3", q: "Que secção lhe diz a experiência que o seu currículo tem de mostrar?", options: ["How to apply (como se candidatar)", "Required documents (documentos exigidos)", "Next steps (próximos passos)", "Qualifications (experiência especializada)"], answer: 3, why: "A secção Qualifications descreve a experiência especializada ou os estudos de que precisa para cumprir os requisitos." },
            { objective: "O3", q: "Um anúncio fecha na sexta-feira, mas diz que pode fechar mais cedo. Quando deve candidatar-se?", options: ["Logo que a sua candidatura estiver pronta", "Na sexta-feira à meia-noite", "Na semana seguinte", "Só depois de o serviço lhe ligar"], answer: 0, why: "Os empregos que podem fechar mais cedo podem deixar de aceitar candidaturas antes da data de encerramento, por isso candidate-se quando estiver pronto." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar um emprego federal aberto para você",
        questions: [
          { objective: "O1", q: "O que deve ler primeiro em qualquer anúncio para poupar tempo?", options: ["A história do serviço", "\"This job is open to\" (para quem está aberto)", "A secção dos benefícios", "A fotografia do escritório"], answer: 1, why: "Se nenhuma via de contratação servir para você, a candidatura não será considerada, por isso verifique isto primeiro." },
          { objective: "O1", q: "Um veterano quer ver que empregos federais dão atenção especial aos veteranos. Onde pode procurar?", options: ["Na via de contratação Veterans do USAJOBS", "Num site de empregos pago que cobra aos veteranos", "Só nos quadros de avisos das bases militares", "Em anúncios nas redes sociais que prometem empregos federais"], answer: 0, why: "O USAJOBS tem uma via de contratação Veterans que explica a preferência de veterano e as opções de contratação de veteranos." },
          { objective: "O2", q: "Como inicia sessão no USAJOBS?", options: ["Só com o seu número da Segurança Social", "Com um código que um recrutador lhe envia por SMS", "Com uma conta Login.gov", "Com uma inscrição paga"], answer: 2, why: "O USAJOBS usa o Login.gov, o serviço de início de sessão do governo." },
          { objective: "O3", q: "O que quer dizer \"experiência especializada\" num anúncio?", options: ["Qualquer emprego que já teve", "Experiência a fazer o tipo de trabalho de que o emprego precisa, ao nível pedido", "Um curso superior em qualquer área", "Só tempo passado como voluntário"], answer: 1, why: "A experiência especializada é experiência no tipo de trabalho de que o emprego precisa, ao nível que o anúncio pede." },
          { objective: "O3", q: "Um anúncio diz \"tem de passar numa verificação de antecedentes\" e \"cidadania dos EUA\". O que são estas coisas?", options: ["Funções", "Documentos exigidos", "Benefícios", "Condições de emprego"], answer: 3, why: "As regras que tem de cumprir para ser contratado são condições de emprego." }
        ]
      }
    },
    {
      name: "Capítulo 2: Candidatar-se e acompanhar",
      lessons: [
        {
          title: "Escrever um currículo federal que corresponda ao emprego",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escrever entradas de emprego no currículo federal que mostrem a experiência especializada que o anúncio pede.",
          text: [
            "Um currículo federal precisa de mais detalhes do que a maioria dos currículos para empregos privados. Para cada emprego, ponha o título do cargo, o empregador, as datas de início e de fim (mês e ano) e as horas que trabalhava por semana. Os serviços usam as datas e as horas para contar a sua experiência, por isso um emprego sem elas pode não contar.",
            "Debaixo de cada emprego, escreva as suas funções e resultados com as próprias palavras do anúncio. Se o anúncio pede experiência a \"manter registos de inventário\" e você fez isso, escreva essas palavras e acrescente detalhes: o que fez, quanto, com que frequência e o que melhorou. Por exemplo: \"Mantive os registos de inventário de 1,200 artigos com um leitor portátil; reduzi os erros de contagem para metade em seis meses.\"",
            "Conte toda a experiência real: empregos pagos, trabalho a tempo parcial, serviço militar, trabalho voluntário e trabalhos feitos durante a prisão, como na cozinha, na manutenção ou como auxiliar administrativo. Seja honesto; nunca diga que tem experiência que não tem.",
            "Leia o anúncio e o USAJOBS Help Center (centro de ajuda) para saber se há limite de páginas ou regras de formato, porque mudam. Pode fazer um currículo dentro do USAJOBS ou carregar o seu. Se usar uma ferramenta de IA para ajudar com as palavras, deixe de fora os números privados e verifique que cada linha é verdadeira."
          ],
          steps: ["Copie a frase da experiência especializada da sua folha de resumo.", "Escolha os empregos onde fez esse tipo de trabalho.", "Para cada emprego, escreva o título, o empregador, o mês e o ano de início e de fim, e as horas por semana.", "Escreva 3 a 5 linhas de funções e resultados usando as palavras-chave do anúncio.", "Acrescente um número a pelo menos uma linha: quantos, quanto ou com que frequência.", "Verifique no anúncio o limite de páginas e leia tudo em voz alta para confirmar que é verdade e que a ortografia está certa."],
          words: [["Currículo federal", "um currículo para um emprego no governo, com datas, horas por semana e funções detalhadas para cada emprego."], ["Palavras-chave", "as palavras importantes do anúncio que o seu currículo deve repetir, quando forem verdade."], ["Resultado", "o que melhorou por causa do seu trabalho, de preferência com um número."], ["Horas por semana", "quantas horas por semana trabalhava num emprego; os serviços usam isto para contar a sua experiência."]],
          slides: [
            { title: "Cada entrada de emprego precisa de", bullets: ["Título e empregador", "Datas de início e de fim: mês e ano", "Horas por semana", "Funções e resultados"] },
            { title: "Corresponda ao anúncio", bullets: ["Use as palavras-chave dele quando forem verdade", "Acrescente números: quantos, quanto, com que frequência"] },
            { title: "Toda a experiência real conta", bullets: ["Empregos pagos e a tempo parcial, serviço militar", "Trabalho voluntário e trabalho feito durante a prisão", "Nunca diga o que não fez"] },
            { title: "Verifique as regras", bullets: ["Limite de páginas e formato: leia o anúncio", "A ajuda da IA pode ser usada; sem números privados, cada linha verdadeira"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "OPM FedsHireVets (empregos federais para veteranos)", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Com o seu resumo do anúncio, escreva duas entradas de emprego do currículo federal num papel ou num documento. Cada uma precisa de título, empregador, datas com mês e ano, horas por semana e 3 a 5 linhas de funções e resultados que usem as palavras-chave do anúncio. Sublinhe cada palavra-chave que usou.",
          youCanNow: "escrever entradas de currículo federal com as datas, as horas e a experiência correspondente de que um serviço precisa para contar o seu trabalho.",
          quickCheck: [
            { objective: "O4", q: "Que entrada de emprego está pronta para um currículo federal?", options: ["\"Trabalhador de armazém, fiz muitas coisas\"", "\"Assistente de armazém, ABC Supply, 03/2022 a 08/2024, 40 horas por semana; mantive os registos de inventário de 1,200 artigos\"", "\"Trabalhei num armazém durante algum tempo\"", "\"Trabalhador esforçado, bom colega de equipa\""], answer: 1, why: "Tem o título, o empregador, datas com mês e ano, horas por semana e uma função com um número." },
            { objective: "O4", q: "O anúncio pede experiência a \"conduzir um empilhador\". Você conduziu um empilhador durante a prisão. O que faz?", options: ["Deixa de fora porque não conta", "Diz que conduziu um empilhador numa empresa onde nunca trabalhou", "Escreve só \"trabalho geral\"", "Põe-no com honestidade, com datas, horas e o que fez"], answer: 3, why: "A experiência de trabalho real conta, incluindo o trabalho durante a prisão, quando é posta com honestidade e com detalhes." }
          ]
        },
        {
          title: "O questionário e os seus documentos",
          objectives: ["O5"],
          minutes: 5,
          goal: "Responder ao questionário com honestidade e juntar todos os documentos que o anúncio exige.",
          text: [
            "Muitos anúncios têm um questionário na internet. Você avalia a sua própria experiência em tarefas do emprego, por exemplo desde \"não tenho experiência\" até \"sou especialista ou já formei outras pessoas\". As suas respostas ajudam a decidir se cumpre os requisitos e em que posição fica.",
            "Responda com honestidade e garanta que o seu currículo confirma cada resposta alta. Se diz que é especialista em fazer horários mas o seu currículo nunca fala de horários, quem avalia pode baixar a sua pontuação ou considerar que não cumpre os requisitos.",
            "Depois junte os documentos da secção Required documents. Os mais comuns: o seu currículo; certificados de notas da universidade se cumpre os requisitos com estudos; para veteranos, um DD-214 que mostre a natureza do serviço, mais um SF-15 ou uma carta do VA (serviço dos veteranos) se pede a preferência de 10 pontos; uma carta do Schedule A que comprova a deficiência se se candidata por essa via; e um formulário de pessoal recente (SF-50) para funcionários federais atuais ou antigos. Carregue cópias nítidas e legíveis.",
            "Alguns formulários perguntam pelo registo criminal. A lei federal em geral limita quando os serviços podem perguntar antes de uma oferta de emprego condicional, com exceções para alguns empregos, como as forças de segurança. Quando lhe perguntarem, responda com verdade: respostas falsas podem fazer perder o emprego mais tarde. Veja as regras atuais no anúncio e no OPM, e pergunte a um programa de reintegração ou de apoio jurídico gratuito se tiver dúvidas."
          ],
          steps: ["Leia cada pergunta do questionário com calma.", "Escolha a resposta que é verdade para você.", "Para cada resposta alta, encontre a linha do currículo que a confirma; acrescente uma se a experiência for real mas faltar.", "Faça a lista de todos os documentos exigidos da sua folha de resumo.", "Escreva onde vai obter cada um (por exemplo: DD-214 dos seus papéis ou do National Archives, os arquivos nacionais; certificados de notas da sua escola).", "Carregue cópias nítidas e verifique que cada uma abre."],
          words: [["Questionário", "perguntas na internet em que você avalia a sua própria experiência em tarefas do emprego."], ["DD-214", "o papel que mostra as datas e a natureza do serviço militar de um veterano."], ["SF-15", "o formulário usado para pedir a preferência de veterano de 10 pontos."], ["Preferência de veterano", "atenção a mais na contratação federal para os veteranos que têm direito a ela."], ["SF-50", "um formulário federal de pessoal que mostra o emprego, o grau e o estatuto de um funcionário federal."], ["Oferta de emprego condicional", "uma oferta de emprego que depende de passar nas verificações finais, como uma verificação de antecedentes."]],
          slides: [
            { title: "O questionário", bullets: ["Você avalia a sua própria experiência", "Responda com verdade", "O seu currículo tem de confirmar cada resposta alta"] },
            { title: "Documentos exigidos comuns", bullets: ["Currículo; certificados de notas se usar os estudos", "Veteranos: DD-214; SF-15 ou carta do VA para os 10 pontos", "Carta do Schedule A; SF-50 para funcionários federais"] },
            { title: "Perguntas sobre o registo criminal", bullets: ["As regras limitam quando os serviços podem perguntar; há exceções", "Quando lhe perguntarem, responda sempre com verdade", "Consulte o OPM e um programa de reintegração ou de apoio jurídico"] },
            { title: "Antes de enviar", bullets: ["Todos os documentos exigidos carregados e legíveis", "Nada da lista em falta"] }
          ],
          sources: [
            { name: "USAJOBS: Via de contratação de veteranos (DD-214, SF-15, carta do VA)", url: "https://www.usajobs.gov/HiringPath/Veterans" },
            { name: "OPM FedsHireVets: Preferência de veterano", url: "https://www.opm.gov/fedshirevets/current-veteran-employees/veterans-preference/" },
            { name: "USAJOBS: Explorar as vias de contratação (pessoas com deficiência)", url: "https://www.usajobs.gov/hiringpath/" }
          ],
          tryIt: "Faça uma lista de documentos para o seu anúncio com três colunas: documento, onde o vou obter, feito. Depois escreva três tarefas no estilo do questionário a partir das funções do emprego, avalie-se com honestidade em cada uma e, ao lado de cada avaliação alta, escreva a linha do currículo que a prova.",
          youCanNow: "responder a um questionário federal com honestidade, com o seu currículo a confirmar cada resposta, e juntar todos os documentos que o emprego pede.",
          quickCheck: [
            { objective: "O5", q: "Você avalia-se como \"especialista\" em fazer horários, mas o seu currículo nunca fala de horários. O que é provável?", options: ["Quem avalia pode baixar a sua pontuação ou considerar que não cumpre os requisitos", "Nada; só o questionário conta", "Vai ser contratado mais depressa", "O serviço acrescenta isso ao seu currículo por você"], answer: 0, why: "Quem avalia verifica se o seu currículo confirma as suas respostas ao questionário." },
            { objective: "O5", q: "Um veterano pede a preferência de 10 pontos. O que deve carregar, segundo o USAJOBS?", options: ["Só um currículo", "Uma carta de um amigo", "Um DD-214 mais um SF-15 ou uma carta do VA aceite", "Uma fotografia da sua farda"], answer: 2, why: "O USAJOBS pede um DD-214 e um SF-15 ou outra prova aceite, como uma carta do VA, para a preferência de 10 pontos." }
          ]
        },
        {
          title: "Enviar, acompanhar e manter-se seguro",
          objectives: ["O6", "O4"],
          minutes: 5,
          goal: "Acompanhar o estado da sua candidatura no USAJOBS e reconhecer ofertas falsas de emprego no governo.",
          text: [
            "Quando se candidata, o USAJOBS envia você para o sistema de candidaturas do serviço para terminar. Garanta que completa todos os passos e recebe uma confirmação; sair depois do questionário é uma razão comum para uma candidatura nunca chegar.",
            "Acompanhe cada candidatura no seu perfil do USAJOBS. O estado muda à medida que o serviço trabalha: por exemplo recebida, em análise, enviada ao responsável pela contratação (referred) ou não enviada (not referred), e mais tarde selecionado ou não selecionado. A contratação federal pode levar semanas ou meses, por isso continue a candidatar-se a outros empregos enquanto espera. Se não for enviado ao responsável, leia o aviso e corrija essa parte (muitas vezes falta de experiência, de datas ou de documentos) na próxima candidatura.",
            "Mantenha um registo simples: título do emprego, número do anúncio, serviço, data da candidatura, estado e a próxima data em que vai verificar. Verifique cerca de uma vez por semana.",
            "Cuidado com as burlas. Candidatar-se a empregos federais é sempre gratuito. Tenha cuidado com quem promete um emprego no governo em troca de uma taxa, pede pagamento ou cartões-presente, pede o seu número da Segurança Social ou do banco por SMS ou chat, ou faz a entrevista só por SMS. Os e-mails e sites federais verdadeiros acabam em .gov ou .mil. Na dúvida, escreva você mesmo usajobs.gov e verifique lá."
          ],
          steps: ["Termine todos os passos no sistema do serviço e guarde a confirmação.", "Comece o seu registo de candidaturas.", "Verifique o estado no USAJOBS cerca de uma vez por semana.", "Se não for enviado ao responsável, leia porquê e corrija da próxima vez.", "Nunca pague, e nunca envie números privados por SMS ou chat."],
          words: [["Enviado ao responsável (referred)", "a sua candidatura foi enviada ao responsável pela contratação para ser considerada."], ["Não enviado (not referred)", "a sua candidatura não seguiu, muitas vezes porque o serviço considerou que não cumpre os requisitos ou outros candidatos ficaram mais bem classificados."], ["Registo de candidaturas", "a sua própria lista dos empregos a que se candidatou, com datas e estado."], [".gov", "o final de endereço da internet usado só pelos serviços do governo dos EUA."]],
          slides: [
            { title: "Termine a candidatura", bullets: ["O USAJOBS envia você para o sistema do serviço", "Complete todos os passos", "Guarde a confirmação"] },
            { title: "Acompanhe-a", bullets: ["O estado está no seu perfil do USAJOBS", "Referred, not referred, selecionado, não selecionado", "Continue a candidatar-se enquanto espera"] },
            { title: "O seu registo de candidaturas", bullets: ["Título, número, serviço, data da candidatura", "Estado e próxima data de verificação"] },
            { title: "Sinais de alerta de burla", bullets: ["Uma taxa para ter ou para se candidatar a um emprego no governo", "Cartões-presente, números do banco ou da Segurança Social por SMS", "Entrevistas só por SMS; endereços que não acabam em .gov ou .mil"] }
          ],
          sources: [
            { name: "FTC: Burlas de emprego (candidatar-se a empregos federais é gratuito)", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "USAJOBS", url: "https://www.usajobs.gov/" }
          ],
          tryIt: "Tarefa final: junte o seu dossiê de candidatura de prática para o seu anúncio: o resumo de uma página, pelo menos duas entradas de currículo correspondentes, a lista de documentos e um registo de candidaturas com o número do anúncio, a data em que se vai candidatar e a próxima data de verificação. Depois compare o dossiê com a grelha de avaliação e corrija uma parte fraca.",
          youCanNow: "preparar uma candidatura federal completa, acompanhá-la e proteger-se de ofertas de emprego falsas.",
          quickCheck: [
            { objective: "O6", q: "Alguém nas redes sociais oferece-lhe um emprego garantido num serviço federal por uma taxa de processamento de $200. O que é isto?", options: ["Um passo normal da contratação federal", "Uma forma legal de passar à frente", "Uma burla: candidatar-se a empregos federais é gratuito", "Uma taxa que o USAJOBS cobra aos veteranos"], answer: 2, why: "A FTC diz que candidatar-se a empregos federais é sempre gratuito e que quem cobra por isso é um burlão." },
            { objective: "O6", q: "O seu estado no USAJOBS diz \"Not referred\" (não enviado). Qual é o melhor passo a seguir?", options: ["Deixar de se candidatar a empregos federais", "Ler o aviso e corrigir a parte fraca na próxima candidatura", "Pagar a alguém para mudar o seu estado", "Candidatar-se outra vez ao mesmo emprego já fechado"], answer: 1, why: "O aviso muitas vezes mostra o que faltou, para poder corrigir da próxima vez." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Candidatar-se e acompanhar",
        questions: [
          { objective: "O4", q: "Porque é que um currículo federal precisa de datas de início e de fim e de horas por semana?", options: ["Para o serviço poder contar a sua experiência", "Porque faz o currículo parecer mais longo", "Para mostrar a sua idade", "Não precisa delas"], answer: 0, why: "Os serviços usam as datas e as horas para contar quanta experiência válida você tem." },
          { objective: "O4", q: "Como deve usar as palavras-chave do anúncio no seu currículo?", options: ["Copiar o anúncio inteiro para o currículo", "Evitá-las para parecer original", "Usá-las para a experiência que tem de verdade", "Usá-las mesmo para coisas que nunca fez"], answer: 2, why: "Usar as palavras-chave para experiência real ajuda quem avalia a ligar o seu currículo ao emprego." },
          { objective: "O5", q: "O que deve fazer antes de enviar uma candidatura?", options: ["Saltar o questionário", "Carregar só os documentos que já tem", "Avaliar-se como \"especialista\" em tudo", "Verificar que todos os documentos exigidos estão carregados e legíveis"], answer: 3, why: "Um documento exigido em falta ou ilegível pode travar a sua candidatura." },
          { objective: "O6", q: "Que endereço da internet é mais provável ser de um serviço federal verdadeiro?", options: ["fedjobs-hiring.com", "agency-careers.net", "um link numa SMS de um número desconhecido", "um endereço que acaba em .gov"], answer: 3, why: "Só os serviços do governo dos EUA usam endereços .gov." },
          { objective: "O6", q: "O que deve ter o seu registo de candidaturas?", options: ["O seu número da Segurança Social", "O título do emprego, o número do anúncio, a data da candidatura, o estado e a próxima data de verificação", "A sua palavra-passe do Login.gov", "Só o nome do serviço"], answer: 1, why: "Estes dados deixam acompanhar cada candidatura sem escrever números privados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Candidatar-se a Empregos do Governo (USAJOBS)",
    questions: [
      { objective: "O1", q: "O que é o USAJOBS?", options: ["Uma agência privada de recrutamento", "Um site de empregos pago", "O site oficial e gratuito onde são publicados os empregos federais", "O site de um sindicato"], answer: 2, why: "O USAJOBS é o site oficial de empregos do governo federal, gerido pelo OPM, e é gratuito." },
      { objective: "O1", q: "A Maria é cidadã dos EUA e nunca trabalhou para o governo. A que empregos pode candidatar-se?", options: ["Empregos abertos ao público", "Só empregos abertos a funcionários federais", "Só empregos de altos dirigentes", "Qualquer emprego, seja para quem for"], answer: 0, why: "Os empregos \"abertos ao público\" são para os cidadãos e nacionais dos EUA em geral." },
      { objective: "O1", q: "O que quer dizer GS-7 num anúncio?", options: ["Um emprego no estado da Geórgia", "Grau 7 na tabela salarial General Schedule", "São precisos sete anos de experiência", "Sete vagas abertas"], answer: 1, why: "GS é o General Schedule; tem os graus 1 a 15, e 7 é o grau." },
      { objective: "O2", q: "Qual é a forma mais segura de chegar ao USAJOBS?", options: ["Clicar num link numa SMS de um recrutador", "Clicar num anúncio de pesquisa que promete empregos no governo", "Usar um link numa publicação nas redes sociais", "Escrever você mesmo usajobs.gov no navegador"], answer: 3, why: "Escrever você mesmo o endereço oficial evita sites falsos." },
      { objective: "O2", q: "Que filtros ajudam a encontrar empregos que servem para você?", options: ["Local, grau salarial e via de contratação", "As cores do logótipo do serviço", "O número de palavras do título", "Nenhum; os filtros escondem bons empregos"], answer: 0, why: "O local, o grau e a via de contratação reduzem os resultados aos empregos que pode e quer fazer." },
      { objective: "O2", q: "Porque responde às perguntas sobre veterano e funcionário federal no seu perfil do USAJOBS?", options: ["Para pagar uma taxa mais baixa", "Para o USAJOBS mostrar as vias de contratação que servem para você", "Porque aparecem impressas no seu currículo", "Para os recrutadores lhe poderem enviar SMS"], answer: 1, why: "As respostas do perfil ajudam o USAJOBS a ligar você às vias de contratação; não há taxas." },
      { objective: "O3", q: "Onde encontra a lista dos papéis que tem de carregar?", options: ["Duties (funções)", "A página principal do serviço", "Required documents (documentos exigidos)", "This job is open to (para quem está aberto)"], answer: 2, why: "A secção Required documents tem a lista do que tem de carregar." },
      { objective: "O3", q: "Qual destas é uma condição de emprego?", options: ["Atender o telefone", "Passar numa verificação de antecedentes", "Seguro de saúde", "Férias pagas"], answer: 1, why: "A verificação de antecedentes é uma regra que tem de cumprir para ser contratado, por isso é uma condição de emprego." },
      { objective: "O3", q: "Que cinco itens pertencem à sua folha de resumo do anúncio?", options: ["Logótipo do serviço, fotografias, morada, mapa, história", "A sua palavra-passe, número da Segurança Social, banco, data de nascimento, morada", "Só o salário", "Funções, requisitos, grau, data de encerramento, documentos exigidos"], answer: 3, why: "Estes cinco dizem-lhe o que é o emprego, se cumpre os requisitos, quando se candidatar e o que carregar." },
      { objective: "O3", q: "Um anúncio diz que pode fechar mais cedo. O que quer dizer?", options: ["Pode deixar de aceitar candidaturas antes da data de encerramento", "Vai ficar aberto mais tempo", "Só os veteranos podem candidatar-se", "O emprego já foi preenchido"], answer: 0, why: "Alguns empregos fecham quando recebem um certo número de candidaturas." },
      { objective: "O4", q: "Que linha é a mais forte para um currículo federal?", options: ["\"Fiz atendimento ao cliente\"", "\"Atendi cerca de 60 chamadas de clientes por dia e resolvi a maioria à primeira chamada\"", "\"Gosto de pessoas\"", "\"Responsável por coisas\""], answer: 1, why: "Mostra uma função real com um número, o que ajuda quem avalia a ver a sua experiência." },
      { objective: "O4", q: "O James fez trabalho de cozinha durante dois anos na prisão. O emprego pede experiência em restauração. O que deve fazer?", options: ["Deixar de fora", "Dizer que foi num restaurante", "Pôr só \"desempregado\"", "Pô-lo com honestidade, com as datas, as horas e as funções"], answer: 3, why: "O trabalho real conta, seja onde for que aconteceu, quando é posto com honestidade e com detalhes." },
      { objective: "O4", q: "Como fica a saber o limite de páginas ou as regras de formato de um currículo?", options: ["Lendo o anúncio e o USAJOBS Help Center", "Adivinhando: mais longo é sempre melhor", "Perguntando a um desconhecido na internet", "Nunca há regras"], answer: 0, why: "As regras podem mudar, por isso o anúncio e o USAJOBS são os lugares onde verificar." },
      { objective: "O4", q: "Que informação precisa de ter cada entrada de emprego de um currículo federal?", options: ["A morada de casa do seu chefe", "O seu número da Segurança Social", "As horas trabalhadas por semana", "A sua fotografia"], answer: 2, why: "As horas por semana, com as datas, deixam o serviço contar a sua experiência." },
      { objective: "O5", q: "Como deve responder ao questionário?", options: ["Escolher a resposta mais alta sempre", "Responder com verdade, com o seu currículo a confirmar cada resposta alta", "Saltar as perguntas que achar difíceis", "Copiar as respostas de um amigo"], answer: 1, why: "Respostas honestas, confirmadas pelo seu currículo, são o que quem avalia verifica." },
      { objective: "O5", q: "Quem precisa de carregar uma carta do Schedule A que comprova a deficiência?", options: ["Toda a gente", "Só os estudantes", "Só os funcionários federais atuais", "As pessoas que se candidatam pela via das pessoas com deficiência"], answer: 3, why: "A carta do Schedule A apoia as candidaturas pela via de contratação das pessoas com deficiência." },
      { objective: "O5", q: "Um formulário pergunta pelo seu registo criminal depois de uma oferta condicional. O que faz?", options: ["Responde com verdade", "Deixa em branco", "Dá uma resposta falsa", "Pede a um amigo para responder por você"], answer: 0, why: "Respostas falsas podem fazer perder o emprego mais tarde; as respostas honestas são obrigatórias." },
      { objective: "O6", q: "Onde verifica o estado da sua candidatura?", options: ["Numa SMS de um número desconhecido", "No seu perfil do USAJOBS", "Num site de acompanhamento pago", "Só indo ao serviço em pessoa"], answer: 1, why: "O USAJOBS mostra o estado das suas candidaturas no seu perfil." },
      { objective: "O6", q: "Qual é um sinal de alerta de uma oferta falsa de emprego federal?", options: ["O e-mail acaba em .gov", "A publicação está no USAJOBS", "Pedem uma taxa ou cartões-presente", "O anúncio tem uma data de encerramento"], answer: 2, why: "Os empregos federais verdadeiros nunca cobram; taxas e cartões-presente são sinais de burla." },
      { objective: "O6", q: "Já se candidatou e está à espera. Qual é o melhor plano?", options: ["Parar de procurar até ter resposta", "Ligar para o serviço todos os dias", "Pagar para andar mais depressa", "Continuar a candidatar-se a outros empregos e verificar o estado todas as semanas"], answer: 3, why: "A contratação federal pode levar semanas ou meses, por isso continue a candidatar-se e verifique com regularidade." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 3, 6, 8, 11, 13, 14, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "O emprego está aberto para você", objective: "O1", notYet: "O emprego escolhido não está aberto a nenhuma via de contratação que sirva para o aluno.", meets: "O emprego está aberto a uma via de contratação que serve, e o resumo diz qual é.", exceeds: "Também faz a lista de outras vias que o aluno pode usar e de mais um emprego aberto." },
      { name: "Resumo do anúncio", objective: "O3", notYet: "Falta um ou mais destes: funções, requisitos, grau, data de encerramento ou documentos exigidos.", meets: "Os cinco estão numa página, com as palavras do próprio aluno.", exceeds: "Também anota as condições de emprego e se o emprego pode fechar mais cedo." },
      { name: "Entradas do currículo", objective: "O4", notYet: "As entradas não têm datas com mês e ano, horas por semana ou funções que correspondam ao emprego.", meets: "Duas ou mais entradas com título, empregador, datas, horas e funções que usam as palavras-chave do anúncio.", exceeds: "Cada entrada tem pelo menos um resultado com um número, e todas as linhas são verdadeiras e claras." },
      { name: "Documentos e questionário", objective: "O5", notYet: "Falta um documento exigido na lista, ou uma autoavaliação alta não tem nenhuma linha do currículo a confirmá-la.", meets: "Cada documento exigido está na lista com o lugar onde o obter, e cada avaliação alta é confirmada por uma linha do currículo.", exceeds: "Os documentos já estão juntos e verificados como legíveis." },
      { name: "Acompanhamento e segurança", objective: "O6", notYet: "Não há registo, ou o registo ou o dossiê tem números privados.", meets: "Um registo com o número do anúncio, datas, estado e próxima data de verificação; sem números privados.", exceeds: "O aluno sabe dizer três sinais de alerta de burla e como verificar um emprego em usajobs.gov." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que enviam pelo menos uma candidatura real no USAJOBS em 30 dias (inquérito de seguimento)",
      "Alunos que são enviados a um responsável pela contratação, entrevistados ou contratados em 6 meses",
      "Os programas parceiros (veteranos, reintegração e centros de emprego) dizem ter menos candidaturas rejeitadas por falta de documentos ou de detalhes"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet; um computador é mais fácil para escrever o currículo",
      "Um endereço de e-mail e um telefone para o segundo passo de entrada do Login.gov",
      "Papel e caneta, ou um editor de documentos gratuito como o Google Docs ou o Microsoft Word na internet",
      "Qualquer currículo que já exista, e cópias de documentos como um DD-214, certificados de notas ou uma carta do Schedule A, se o aluno os tiver",
      "Cerca de 60 minutos para as lições e as verificações, mais uma a duas horas para o dossiê final"
    ],
    facilitatorNotes: [
      "Num centro de emprego, num programa para veteranos ou num programa de reintegração, façam o teste inicial juntos e depois um capítulo por sessão, com um anúncio real no ecrã.",
      "Peça a cada aluno que escolha, antes da Lição 3, um anúncio que esteja mesmo aberto para ele; isso poupa trabalho repetido.",
      "Ponha os alunos em pares para verificarem as entradas do currículo um do outro: datas, horas e palavras-chave.",
      "Nunca recolha números da Segurança Social nem outros números privados; os alunos guardam os seus próprios documentos.",
      "As regras sobre limites de páginas, vias de contratação e perguntas sobre o registo criminal mudam: verifique o anúncio, o USAJOBS e o OPM antes de cada grupo, e envie as perguntas jurídicas para um programa de apoio jurídico ou de reintegração.",
      "Avalie o dossiê final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
