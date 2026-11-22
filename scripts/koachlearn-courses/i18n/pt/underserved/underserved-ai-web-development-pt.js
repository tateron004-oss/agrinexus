"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-ai-web-development.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// HTML code stays exactly as in the English.

module.exports = {
  id: "underserved-ai-web-development-pt",
  lang: "pt",
  translationOf: "underserved-ai-web-development",
  category: "Undeserved Community",
  name: "Desenvolvimento Web com IA",
  skills: "Planear um site de uma página, Criar um site gratuito com o Google Sites, Escrever os textos do site com IA, Ler e editar HTML simples, Acrescentar código escrito pela IA com segurança, Publicar e verificar um site",
  outcome: "planear, criar e publicar um site gratuito de uma página para um negócio de família, um clube ou um grupo da comunidade com o Google Sites, usando um assistente de IA gratuito para escrever os textos e um pequeno pedaço de HTML que você mesmo lê, testa e corrige.",
  about: [
    "Um site ajuda as pessoas a encontrar um grupo da igreja, uma associação de moradores, um programa de explicações ou um pequeno negócio de família. Não precisa de dinheiro nem de um curso de informática para criar um.",
    "Neste curso vai planear um site de uma página, criá-lo com o Google Sites (gratuito com uma conta Google), usar um assistente de IA gratuito para ajudar a escrever os textos e aprender o suficiente de HTML, a linguagem das páginas web, para ler, testar e corrigir um pequeno pedaço de código que a IA escreve para você.",
    "Pode trabalhar num computador em casa ou na biblioteca. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" que constrói o seu site verdadeiro. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Publique um site de uma página no Google Sites para um grupo da comunidade ou pequeno negócio, verdadeiro ou de prática. Tem de ter um título claro, uma secção curta \"Quem somos\" feita com ajuda da IA e editada com as suas palavras, uma pequena caixa em HTML com o horário e os contactos que você testou e corrigiu, nenhuma morada de casa nem número de telefone pessoal, e tem de ficar bem num telefone.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos de comunidades com poucos recursos que querem um site para um grupo da igreja, uma associação de moradores, um programa de explicações, um clube ou um pequeno negócio de família, e pessoas curiosas sobre um primeiro passo no trabalho web.",
    startingPoint: "Usam um telefone e navegam na internet. Nunca criaram um site nem leram HTML, e podem ter uma conta Google mas nunca usaram o Google Sites. Alguns já usaram um pouco um assistente de IA.",
    gap: "Os grupos e pequenos negócios que não se encontram na internet perdem membros e clientes, e pagar um site está fora do seu alcance. Os alunos precisam de planear e publicar um site gratuito, usar a IA para textos e código verificando cada dado, e proteger as informações privadas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 7.º ano)",
      "Aparelhos: é preciso um computador para criar no Google Sites e um telefone para verificar o site publicado",
      "Custo: só conta Google, Google Sites e editor de HTML na internet, todos gratuitos",
      "Segurança: testar todo o código da IA, só HTML simples e nenhum script que não pediu",
      "Privacidade: nenhuma morada de casa, número de telefone pessoal ou fotos de crianças sem autorização por escrito"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro o curso \"Introdução à IA e Autonomia Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um grupo ou negócio verdadeiro ou de prática", action: "planear um site de uma página com o seu público, uma ação para os visitantes, as secções e as fotos", standard: "com quatro ou cinco secções e só fotos que pode usar" },
    { id: "O2", condition: "Usando uma conta Google gratuita", action: "criar um site no Google Sites com um título, uma caixa de texto para cada secção planeada e um tema fácil de ler", standard: "sem ajuda" },
    { id: "O3", condition: "Com os dados verdadeiros do seu grupo", action: "escrever uma secção \"Quem somos\" com um assistente de IA e editá-la com as suas palavras", standard: "tirando todos os dados errados ou inventados" },
    { id: "O4", condition: "Com um pequeno pedaço de HTML num editor na internet", action: "identificar as suas etiquetas e mudar as palavras entre elas", standard: "para que a página continue a funcionar bem" },
    { id: "O5", condition: "Usando um assistente de IA gratuito", action: "pedir uma caixa simples em HTML, testá-la, corrigir um problema e incorporá-la no seu site do Google Sites", standard: "com todos os dados certos e nenhum script que não pediu" },
    { id: "O6", condition: "Quando o seu site estiver pronto", action: "publicá-lo, verificá-lo num telefone e tirar as informações privadas", standard: "com links que funcionam, texto fácil de ler e nenhuma morada privada, número pessoal ou foto sem autorização" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear e criar o seu site",
      lessons: [
        {
          objectives: ["O1"],
          title: "Como funcionam os sites, e planear a sua página",
          minutes: 4,
          goal: "Escrever um plano simples para um site de uma página.",
          text: [
            "Um site é um conjunto de páginas guardadas num computador chamado servidor. Quando escreve um endereço, o seu navegador pede a página a esse servidor e mostra-a a você.",
            "Antes de criar, planeie. Responda a quatro perguntas: Para quem é o site? Qual é a única coisa que os visitantes devem fazer (ligar, visitar, inscrever-se, doar)? De que secções precisa? Que fotos pode usar com autorização?",
            "A maioria dos sites pequenos da comunidade só precisa de algumas secções: um título, \"Quem somos\", o que oferecem, o horário e como contactar."
          ],
          steps: ["Escreva para quem é o site.", "Escreva a única ação que quer que os visitantes façam.", "Faça uma lista de quatro ou cinco secções.", "Faça uma lista das fotos que são suas ou que tem autorização para usar."],
          words: [["Site", "uma ou mais páginas que as pessoas podem visitar na internet."], ["Servidor", "um computador que guarda sites e envia as páginas aos visitantes."], ["Navegador", "o programa que usa para visitar sites, como o Chrome, o Edge ou o Safari."]],
          slides: [
            { title: "Como funciona um site", bullets: ["As páginas estão guardadas num servidor", "O seu navegador pede a página", "O servidor envia-a de volta"] },
            { title: "Planeie com quatro perguntas", bullets: ["Para quem é?", "O que devem fazer os visitantes?", "De que secções precisa?", "Que fotos pode usar?"] },
            { title: "Um site simples de uma página", bullets: ["Título", "Quem somos e o que oferecemos", "Horário e como contactar"] }
          ],
          tryIt: "Escolha um grupo verdadeiro ou de prática (por exemplo um clube de explicações para jovens ou uma carrinha de comida de família). Escreva o seu plano: para quem é, a única ação, cinco secções e duas fotos que pode usar.",
          youCanNow: "explicar como um site chega até você e planear um site de uma página.",
          quickCheck: [
            { objective: "O1", q: "O que é um servidor?", options: ["Um computador que guarda sites e envia páginas", "O ecrã que você vê", "Um endereço web", "Um tipo de telefone"], answer: 0, why: "Um servidor guarda páginas web e envia-as quando um navegador as pede." },
            { objective: "O1", q: "O site da sua carrinha de comida deve fazer as pessoas virem comer. Qual é a única ação?", options: ["Ler a história dos tacos", "Saber onde e quando a carrinha vai estar", "Deixar um comentário longo", "Descarregar um ficheiro"], answer: 1, why: "A única ação é o que mais quer que os visitantes façam, como ir até à carrinha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Criar um site gratuito com o Google Sites",
          minutes: 5,
          goal: "Criar um site no Google Sites com um título e as secções que planeou.",
          text: [
            "O Google Sites é uma ferramenta gratuita para criar sites que vem com uma conta Google. Cria-se clicando e escrevendo, sem escrever código.",
            "Abra sites.google.com num computador e comece um site novo, em branco ou a partir de um modelo. Dê um nome ao site e escreva um título para a página. Do lado direito vai encontrar Inserir (para acrescentar caixas de texto, imagens e mais), Páginas e Temas.",
            "Acrescente uma caixa de texto para cada secção do seu plano. Escolha um tema com cores fáceis de ler. O Google Sites guarda o seu trabalho à medida que avança."
          ],
          steps: ["Vá a sites.google.com e inicie sessão com a sua conta Google.", "Comece um site novo em branco ou a partir de um modelo.", "Escreva o nome do site e o título da página.", "Use Inserir, do lado direito, para acrescentar uma caixa de texto para cada secção.", "Escolha um tema fácil de ler."],
          words: [["Modelo", "um desenho já pronto que você preenche com as suas palavras."], ["Tema", "as cores e os tipos de letra usados em todo o site."]],
          sources: [{ name: "Ajuda do Google Sites: Criar, dar nome ou copiar um site", url: "https://support.google.com/sites/answer/6372878" }],
          slides: [
            { title: "Google Sites", bullets: ["Gratuito com uma conta Google", "Cria-se clicando e escrevendo", "Guarda à medida que avança"] },
            { title: "Comece o seu site", bullets: ["Abra sites.google.com", "Comece em branco ou a partir de um modelo", "Escreva o nome do site e o título da página"] },
            { title: "Acrescente as suas secções", bullets: ["Inserir, do lado direito: caixas de texto, imagens", "Uma caixa de texto por secção", "Escolha um tema fácil de ler"] }
          ],
          tryIt: "Comece um site novo no Google Sites para o seu grupo. Acrescente o título e uma caixa de texto vazia para cada secção do seu plano, e escolha um tema.",
          youCanNow: "construir a estrutura de um site gratuito com o Google Sites.",
          quickCheck: [
            { objective: "O2", q: "O que muda um tema no Google Sites?", options: ["O seu endereço web", "Quem pode ver o site", "As cores e os tipos de letra", "Os dados do site"], answer: 2, why: "Um tema define as cores e os tipos de letra do seu site." },
            { objective: "O2", q: "Quer acrescentar uma secção \"Horário\" ao seu site do Google Sites. Onde clica?", options: ["Publicar", "Temas", "Páginas", "Inserir e depois uma caixa de texto"], answer: 3, why: "Inserir, do lado direito, acrescenta caixas de texto, imagens e mais." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever os textos do seu site com IA",
          minutes: 5,
          goal: "Usar um assistente de IA gratuito para escrever um rascunho da secção \"Quem somos\" e depois torná-lo seu.",
          text: [
            "Um assistente de IA gratuito como o ChatGPT, o Microsoft Copilot ou o Google Gemini pode escrever um primeiro rascunho dos textos do seu site. Dê-lhe os dados e o tom que quer.",
            "Exemplo de pedido: \"Escreva um texto simpático de 60 palavras para a secção Quem somos de um clube de explicações gratuito depois da escola, num centro comunitário. Ajudamos crianças do 3.º ao 8.º ano na leitura e na matemática. Use palavras simples.\"",
            "Depois edite. Corrija qualquer dado que a IA errou ou inventou, corte as palavras que não soam como você e nunca a deixe inventar preços, prémios ou promessas que não pode cumprir. O seu site fala pelo seu grupo, por isso você é responsável por cada palavra."
          ],
          steps: ["Dê à IA os dados verdadeiros do seu grupo e o tom que quer.", "Peça um rascunho curto com um limite de palavras.", "Corrija os dados errados ou inventados.", "Reescreva partes para soarem como você e depois cole no seu site."],
          words: [["Rascunho", "uma primeira versão que você vai melhorar."], ["Tom", "como o texto soa: simpático, sério, alegre."]],
          slides: [
            { title: "A IA escreve o primeiro rascunho", bullets: ["Dê-lhe dados verdadeiros", "Diga o tom e o limite de palavras"] },
            { title: "Exemplo de pedido", bullets: ["\"Escreva um texto simpático de 60 palavras para Quem somos", "de um clube de explicações gratuito, do 3.º ao 8.º ano.", "Use palavras simples.\""] },
            { title: "Você edita", bullets: ["Corrija dados errados ou inventados", "Nada de preços, prémios ou promessas inventados", "Faça-o soar como você"] }
          ],
          tryIt: "Peça a um assistente de IA um texto de 60 palavras para a secção Quem somos do seu grupo. Corrija um dado ou uma frase e depois cole a versão editada no seu site do Google Sites.",
          youCanNow: "usar a IA para escrever um rascunho dos textos do site e editá-lo para que seja verdadeiro e soe como você.",
          quickCheck: [
            { objective: "O3", q: "Porque dar à IA um limite de palavras para a secção Quem somos?", options: ["Para o rascunho ser curto e caber na sua página", "Para custar menos", "Para usar palavras mais difíceis", "Para acrescentar mais dados"], answer: 0, why: "Um limite de palavras mantém o rascunho curto o suficiente para um site pequeno." },
            { objective: "O3", q: "O rascunho da IA diz que as suas explicações \"garantem notas melhores\". O que faz?", options: ["Deixa ficar; soa bem", "Tira a promessa que não pode cumprir", "Põe maior e a negrito", "Acrescenta uma segunda garantia"], answer: 1, why: "Nunca deixe a IA acrescentar promessas que não pode cumprir; você é responsável por cada palavra." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear e criar o seu site",
        questions: [
          { objective: "O1", q: "O que faz um servidor?", options: ["Guarda sites e envia páginas aos visitantes", "Imprime páginas", "Carrega o seu telefone", "Escreve os seus textos"], answer: 0, why: "Um servidor é o computador que guarda o site e envia as páginas." },
          { objective: "O1", q: "Que pergunta faz parte do plano do seu site?", options: ["Qual é a minha palavra-passe?", "Qual é a única coisa que os visitantes devem fazer?", "Qual é o meu número do banco?", "O que comi hoje?"], answer: 1, why: "Saber a única ação ajuda a desenhar a página." },
          { objective: "O2", q: "Do que precisa para usar o Google Sites de graça?", options: ["Um alojamento web pago", "Um curso de informática", "Uma conta Google", "Um cartão de crédito"], answer: 2, why: "O Google Sites vem de graça com uma conta Google." },
          { objective: "O2", q: "No Google Sites, onde acrescenta caixas de texto e imagens?", options: ["No caixote do lixo", "Na barra de endereço", "Na impressora", "Em Inserir, do lado direito"], answer: 3, why: "O painel Inserir, do lado direito, acrescenta conteúdo." },
          { objective: "O3", q: "O rascunho da IA diz que o seu clube \"ganhou um prémio nacional\", mas não ganhou. O que faz?", options: ["Tira isso antes de publicar", "Deixa ficar, soa bem", "Põe maior", "Pede à IA mais prémios"], answer: 0, why: "Você é responsável por cada palavra; tire os dados inventados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Código, publicar e verificar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ler HTML simples",
          minutes: 5,
          goal: "Ler um pequeno pedaço de HTML e mudar as suas palavras com segurança.",
          text: [
            "HTML é a linguagem em que se escrevem as páginas web. Usa etiquetas (em inglês, \"tags\") entre os sinais < e >. A maioria das etiquetas vem aos pares: uma etiqueta de abertura como <h2> e uma etiqueta de fecho como </h2>, com palavras no meio.",
            "Etiquetas comuns: <h2> para um título, <p> para um parágrafo, <ul> e <li> para uma lista com marcas, <strong> para negrito e <a href=\"...\"> para um link.",
            "Pode praticar de graça, sem conta, num editor na internet como o W3Schools Tryit Editor: cole o HTML à esquerda, clique em Run (Executar) e veja a página à direita. No início, mude só as palavras entre as etiquetas e depois execute outra vez."
          ],
          steps: ["Abra um editor de HTML gratuito na internet.", "Cole um pequeno pedaço de HTML.", "Clique em Run para ver o resultado.", "Mude as palavras entre duas etiquetas e execute outra vez."],
          words: [["HTML", "a linguagem usada para escrever páginas web."], ["Etiqueta (tag)", "uma marca entre < e >, como <p>, que diz ao navegador o que é cada coisa."], ["Etiqueta de fecho", "a etiqueta do fim, com uma barra, como </p>."]],
          slides: [
            { title: "O HTML constrói páginas web", bullets: ["Etiquetas entre < e >", "Abertura <p> ... fecho </p>"] },
            { title: "Etiquetas a conhecer", bullets: ["<h2> título, <p> parágrafo", "<ul> e <li> lista com marcas", "<strong> negrito, <a> link"] },
            { title: "Pratique de graça", bullets: ["Editor na internet como o W3Schools Tryit", "Cole, clique em Run, veja", "Mude as palavras entre as etiquetas"] }
          ],
          tryIt: "Num editor de HTML gratuito na internet, escreva <h2>Our Hours</h2><p>Mondays 3 to 6 pm</p>. Clique em Run, mude o horário e execute outra vez.",
          youCanNow: "ler etiquetas simples de HTML e mudar com segurança as palavras dentro delas.",
          quickCheck: [
            { objective: "O4", q: "Que etiqueta cria um item de uma lista com marcas?", options: ["<p>", "<h2>", "<li>", "<strong>"], answer: 2, why: "<li> marca cada item de uma lista com marcas, dentro de <ul>." },
            { objective: "O4", q: "Quer mudar \"Mondays\" para \"Tuesdays\" em <p>Mondays 3 to 6 pm</p>. O que muda?", options: ["A etiqueta <p>", "A etiqueta </p>", "Apaga as etiquetas", "Só a palavra entre as etiquetas"], answer: 3, why: "No início, mude só as palavras entre as etiquetas para o HTML continuar a funcionar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Pedir código à IA, depois testá-lo e corrigi-lo",
          minutes: 6,
          goal: "Pedir à IA uma pequena caixa em HTML, testá-la, corrigir um problema e acrescentá-la ao seu site.",
          text: [
            "Os assistentes de IA sabem escrever HTML. Seja preciso: \"Escreva só HTML simples, sem JavaScript, para uma caixa com o título Horário e Contactos, uma lista do nosso horário (segunda a quinta, das 3 às 6 da tarde) e um link para o nosso email. Use um fundo claro e letra grande.\"",
            "Teste sempre o código da IA antes de o usar. Cole-o no editor na internet, clique em Run e verifique: Todos os dados estão certos? O link funciona? O texto é fácil de ler? Se alguma coisa estiver errada, diga à IA exatamente o que corrigir, ou corrija você mesmo as palavras.",
            "Não cole código que não entende vindo de desconhecidos, nem código da IA com scripts que não pediu. Para acrescentar a sua caixa ao Google Sites: clique em Inserir, depois Incorporar, escolha Incorporar código, cole o seu HTML, clique em Seguinte e em Inserir."
          ],
          steps: ["Peça à IA só HTML simples, com o seu horário e contactos verdadeiros.", "Teste-o no editor na internet.", "Corrija uma coisa: um dado, um link ou o tamanho da letra.", "No Google Sites: Inserir, Incorporar, Incorporar código, colar, Seguinte, Inserir."],
          words: [["Código", "instruções escritas para um computador, como o HTML."], ["Incorporar", "colocar um pedaço de código ou de conteúdo dentro de uma página."], ["Erro (bug)", "um engano no código que o faz funcionar mal."]],
          sources: [{ name: "Ajuda do Google Sites: Incorporar HTML ou JavaScript no seu site", url: "https://support.google.com/sites/answer/90569" }],
          slides: [
            { title: "Peça código à IA com clareza", bullets: ["Só HTML simples, sem JavaScript", "O seu horário e contactos verdadeiros", "Letra grande e fácil de ler"] },
            { title: "Teste antes de usar", bullets: ["Cole e clique em Run no editor", "Dados certos? O link funciona? Fácil de ler?", "Corrija ou peça à IA para corrigir uma coisa"] },
            { title: "Acrescente ao Google Sites", bullets: ["Inserir e depois Incorporar", "Escolha Incorporar código e cole", "Seguinte e depois Inserir"] }
          ],
          tryIt: "Peça à IA uma caixa simples em HTML com o Horário e Contactos do seu grupo. Teste-a, corrija um problema e incorpore-a no seu site do Google Sites.",
          youCanNow: "obter da IA HTML que funciona, testá-lo, corrigi-lo e acrescentá-lo a um site.",
          quickCheck: [
            { objective: "O5", q: "Porque pedir à IA \"só HTML simples, sem JavaScript\"?", options: ["O HTML simples é mais seguro e mais fácil de verificar para um principiante", "O JavaScript não é permitido na internet", "O HTML custa menos", "A IA não sabe escrever JavaScript"], answer: 0, why: "O HTML simples é fácil de ler e testar, sem scripts que não pediu." },
            { objective: "O5", q: "Testou a caixa da IA e o link do email não funciona. O que faz?", options: ["Incorpora na mesma", "Diz à IA exatamente o que corrigir, ou corrige você mesmo, e testa outra vez", "Apaga o site todo", "Tira o email do plano"], answer: 1, why: "Corrija o único problema e teste outra vez antes de usar o código." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Publicar e verificar o seu site",
          minutes: 5,
          goal: "Publicar o seu site, verificá-lo num telefone e proteger as informações privadas.",
          text: [
            "Quando a sua página estiver pronta, clique em Publicar, no canto superior direito do Google Sites. Escolha um endereço web e publique. Pode fazer mudanças mais tarde e publicar outra vez.",
            "Verifique o site publicado num telefone, porque a maioria dos visitantes vai usar um. O texto é grande o suficiente? Os links funcionam? As imagens aparecem? Peça também a um amigo para experimentar.",
            "Proteja a privacidade. Não publique uma morada de casa, um número de telemóvel pessoal nem fotos de crianças sem autorização por escrito de um pai, mãe ou encarregado de educação. Use antes um email do grupo ou um lugar público de encontro."
          ],
          steps: ["Clique em Publicar, escolha o endereço web e publique.", "Abra o endereço do site publicado num telefone.", "Verifique o tamanho do texto, os links e as imagens.", "Tire qualquer morada privada, número pessoal ou foto sem autorização."],
          words: [["Publicar", "pôr o seu site no ar para que qualquer pessoa com o endereço o possa ver."], ["Endereço web", "o texto que escreve para visitar um site, também chamado URL."]],
          slides: [
            { title: "Publicar", bullets: ["Clique em Publicar, no canto superior direito", "Escolha um endereço web", "Pode atualizar e publicar outra vez"] },
            { title: "Verifique num telefone", bullets: ["O texto é grande o suficiente?", "Os links funcionam?", "As imagens aparecem? Peça a um amigo para testar"] },
            { title: "Proteja a privacidade", bullets: ["Nada de morada de casa nem telemóvel pessoal", "Nada de fotos de crianças sem autorização", "Use um email do grupo ou um lugar público"] }
          ],
          tryIt: "Tarefa final: publique o seu site de uma página no Google Sites com a secção Quem somos editada e a caixa de Horário e Contactos testada. Verifique-o num telefone e tire tudo o que for privado.",
          youCanNow: "publicar um site que funciona, verificá-lo num telefone e manter as informações privadas fora dele.",
          quickCheck: [
            { objective: "O6", q: "O que acontece quando clica em Publicar no Google Sites?", options: ["O site é apagado", "Só você o pode ver", "O site fica no ar no endereço web que escolheu", "O site é impresso"], answer: 2, why: "Publicar põe o site no ar no seu endereço web." },
            { objective: "O6", q: "O seu site mostra o número de telemóvel pessoal de um membro. O que faz?", options: ["Deixa ficar; ajuda as pessoas a ligar", "Põe mais pequeno", "Pede aos visitantes para não ligarem", "Troca-o por um email do grupo e publica outra vez"], answer: 3, why: "Os números pessoais ficam fora dos sites públicos; use antes um email do grupo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Código, publicar e verificar",
        questions: [
          { objective: "O4", q: "O que é HTML?", options: ["Um tipo de telefone", "A linguagem usada para escrever páginas web", "Uma palavra-passe", "Uma aplicação de email"], answer: 1, why: "As páginas web são escritas em HTML." },
          { objective: "O4", q: "Qual é uma etiqueta de fecho?", options: ["<p>", "<h2>", "</p>", "<li>"], answer: 2, why: "As etiquetas de fecho têm uma barra." },
          { objective: "O5", q: "A IA deu-lhe HTML para o seu site. O que faz primeiro?", options: ["Publica sem olhar", "Envia-o a desconhecidos", "Apaga o seu site", "Testa-o num editor na internet e verifica os dados"], answer: 3, why: "Testar apanha erros e dados errados antes de os visitantes os verem." },
          { objective: "O5", q: "Como acrescenta código HTML a um site do Google Sites?", options: ["Inserir, Incorporar, Incorporar código, colar, Seguinte, Inserir", "Imprime-o", "Envia-o por email à Google", "Escreve-o no título da página"], answer: 0, why: "Esse é o caminho para incorporar código no Google Sites." },
          { objective: "O6", q: "O que é seguro pôr no site público de um grupo da comunidade?", options: ["A sua morada de casa", "Um endereço de email do grupo", "A foto de uma criança sem autorização", "O seu número de telemóvel pessoal"], answer: 1, why: "Um email do grupo deixa as pessoas contactarem você sem mostrar dados privados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Desenvolvimento Web com IA",
    questions: [
      { objective: "O1", q: "Quando escreve um endereço web, o que acontece?", options: ["O seu navegador pede a página a um servidor", "A página é impressa", "O seu telefone escreve a página", "Nada"], answer: 0, why: "O servidor envia a página ao seu navegador." },
      { objective: "O1", q: "Qual destes é um navegador?", options: ["Uma folha de cálculo", "Chrome", "Uma impressora", "Uma mensagem SMS"], answer: 1, why: "O Chrome, o Edge e o Safari são navegadores." },
      { objective: "O1", q: "O primeiro passo para criar um site é:", options: ["Pagar anúncios", "Só escolher as cores", "Fazer um plano simples", "Publicar uma página vazia"], answer: 2, why: "Um plano diz-lhe do que o site precisa." },
      { objective: "O1", q: "Que secção costuma precisar um pequeno site da comunidade?", options: ["As moradas de casa dos membros", "Números do banco", "Palavras-passe", "Como contactar"], answer: 3, why: "Os visitantes precisam de uma maneira de contactar você." },
      { objective: "O2", q: "O Google Sites é:", options: ["Uma ferramenta gratuita para criar sites, com uma conta Google", "Só uma aplicação paga", "Uma empresa de telefones", "Uma rede social"], answer: 0, why: "Vem de graça com uma conta Google." },
      { objective: "O2", q: "Um modelo é:", options: ["Uma palavra-passe", "Um desenho já pronto que você preenche", "Um tipo de servidor", "Um erro"], answer: 1, why: "Os modelos dão-lhe um desenho para começar." },
      { objective: "O2", q: "Um tema controla:", options: ["Quem pode visitar", "O endereço web", "As cores e os tipos de letra", "A sua conta"], answer: 2, why: "Os temas definem o aspeto do site." },
      { objective: "O3", q: "Que pedido vai dar o melhor rascunho para Quem somos?", options: ["\"site\"", "\"escreve coisas\"", "\"ajuda\"", "\"Escreva um texto simpático de 60 palavras para Quem somos de um clube de explicações gratuito do 3.º ao 8.º ano. Use palavras simples.\""], answer: 3, why: "Dá os dados, o tamanho e o tom." },
      { objective: "O3", q: "Quem é responsável por cada palavra do seu site?", options: ["Você e o seu grupo", "A IA", "A Google", "Ninguém"], answer: 0, why: "A IA escreve rascunhos, mas quem publica e responde pelas palavras é você." },
      { objective: "O4", q: "O que é uma etiqueta em HTML?", options: ["Uma etiqueta de preço", "Uma marca entre < e >, como <p>", "Uma foto", "Um endereço web"], answer: 1, why: "As etiquetas dizem ao navegador o que é cada parte." },
      { objective: "O4", q: "Que etiqueta cria um parágrafo?", options: ["<li>", "<a>", "<p>", "<ul>"], answer: 2, why: "<p> quer dizer parágrafo (em inglês, \"paragraph\")." },
      { objective: "O4", q: "Num editor de HTML na internet, como vê a sua página?", options: ["Imprime-a", "Envia-a por email", "Reinicia o computador", "Clica em Run"], answer: 3, why: "Run mostra o resultado do seu HTML." },
      { objective: "O5", q: "Ao pedir código à IA para um site de principiante, um pedido seguro é:", options: ["\"Só HTML simples, sem JavaScript\"", "\"Acrescente os scripts que quiser\"", "\"Copie código de um site qualquer\"", "\"Inclua a minha palavra-passe\""], answer: 0, why: "O HTML simples é mais fácil de ler, testar e confiar." },
      { objective: "O5", q: "Um erro (bug) é:", options: ["Um tema de site", "Um engano no código que o faz funcionar mal", "Um endereço web", "Um tipo de modelo"], answer: 1, why: "Os erros são enganos que se encontram e corrigem." },
      { objective: "O5", q: "O código da IA mostra a hora de fecho errada. Você deve:", options: ["Publicar na mesma", "Apagar o site todo", "Corrigir as palavras ou pedir à IA para corrigir essa única coisa", "Ignorar"], answer: 2, why: "Corrija o problema concreto e depois teste outra vez." },
      { objective: "O5", q: "O que quer dizer \"incorporar\"?", options: ["Apagar uma página", "Imprimir uma página", "Mudar a sua palavra-passe", "Colocar código ou conteúdo dentro de uma página"], answer: 3, why: "Incorporar põe a sua caixa em HTML dentro do site." },
      { objective: "O6", q: "Para pôr o seu site do Google Sites no ar, clica em:", options: ["Publicar", "Apagar", "Imprimir", "Anular"], answer: 0, why: "Publicar torna o site visível no seu endereço." },
      { objective: "O6", q: "Porque verificar o seu site num telefone?", options: ["Os telefones não mostram sites", "A maioria dos visitantes usa um telefone", "Muda o endereço", "É obrigatório por lei"], answer: 1, why: "Muitos visitantes vão ver o seu site num telefone." },
      { objective: "O6", q: "O que NÃO deve ir para o seu site público?", options: ["O horário do grupo", "Um email do grupo", "A foto de uma criança sem autorização por escrito de um dos pais", "O que vocês oferecem"], answer: 2, why: "As fotos de crianças precisam de autorização de um pai, mãe ou encarregado de educação." },
      { objective: "O6", q: "Depois de publicar, pode mudar o seu site do Google Sites?", options: ["Não, nunca", "Só pagando", "Só começando de novo", "Sim, edita e publica outra vez"], answer: 3, why: "Pode atualizar e voltar a publicar quando quiser." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      7,
      9,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Site criado",
        objective: "O2",
        notYet: "Sem título claro, ou faltam secções.",
        meets: "Um site no Google Sites com um título claro e as secções planeadas, num tema fácil de ler.",
        exceeds: "A única ação para os visitantes é fácil de encontrar."
      },
      {
        name: "Quem somos",
        objective: "O3",
        notYet: "Texto da IA colado como estava, ou com dados errados ou inventados.",
        meets: "Uma secção Quem somos curta, com dados verdadeiros, editada com as palavras do próprio aluno.",
        exceeds: "Sabe mostrar o que mudou e porquê."
      },
      {
        name: "Caixa de Horário e Contactos",
        objective: "O5",
        notYet: "Não há caixa em HTML, ou não foi testada.",
        meets: "Uma caixa simples em HTML testada num editor, com um problema corrigido, e incorporada.",
        exceeds: "Sabe explicar o que faz cada etiqueta da caixa."
      },
      {
        name: "Publicado e pronto para telefone",
        objective: "O6",
        notYet: "Não publicado, ou não verificado num telefone.",
        meets: "Publicado e verificado num telefone: texto fácil de ler, links a funcionar, imagens a aparecer.",
        exceeds: "Um amigo também o testou e os problemas foram corrigidos."
      },
      {
        name: "Privacidade",
        objective: "O6",
        notYet: "O site tem uma morada de casa, um número pessoal ou a foto de uma criança sem autorização.",
        meets: "Só um email do grupo ou um lugar público, e nenhum dado privado.",
        exceeds: "Todas as fotos são próprias ou usadas com autorização por escrito."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Grupos da comunidade ou pequenos negócios com um site no ar criado por um aluno em 30 dias (inquérito de seguimento)",
      "Alunos que fazem um curso seguinte de web ou de programação em 60 dias",
      "Grupos que dizem ter novos membros, clientes ou chamadas vindos do seu site"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet (na biblioteca ou em casa) para criar o site, e um telefone para o verificar",
      "Uma conta Google gratuita para o Google Sites",
      "Um assistente de IA gratuito e um editor de HTML gratuito na internet, como o W3Schools Tryit Editor",
      "Dados verdadeiros sobre o grupo: nome, o que oferece, horário e um email do grupo",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Ajude primeiro a iniciar sessão na conta Google; é o que leva mais tempo aos principiantes.",
      "Quando possível, peça aos alunos para criarem o site de um grupo verdadeiro a que pertencem, com o acordo do grupo.",
      "Verifique em cada site publicado se há moradas de casa, números pessoais e fotos de crianças sem autorização.",
      "Lembre aos alunos que testem todo o código da IA e peçam só HTML simples.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
