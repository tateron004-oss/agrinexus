"use strict";

// Koach Learn course (Portuguese translation of youth/youth-ai-music.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "youth-ai-music-pt",
  lang: "pt",
  translationOf: "youth-ai-music",
  category: "Youth",
  name: "Produção Musical com IA",
  skills: "Fazer um beat num estúdio online gratuito, Criar ideias de letras com IA, Montar a estrutura de uma canção, Respeitar os direitos de autor e as vozes, Exportar e partilhar com segurança",
  outcome: "fazer uma faixa original curta (cerca de 60 segundos) num estúdio de música online gratuito, usando a IA para ter ideias e letras, com uma estrutura de canção clara, sem canções copiadas nem vozes clonadas, e com créditos que dizem como usou a IA.",
  about: [
    "Este curso é para adolescentes que gostam de música e querem fazer a sua própria música, mesmo que ainda não saibam tocar um instrumento. Pode fazê-lo num telefone ou num computador da escola ou da biblioteca.",
    "Você vai fazer um beat no BandLab, um estúdio de música online gratuito, usar um assistente de IA como parceiro para ter ideias e letras, montar as partes de uma canção e aprender as regras sobre os direitos de autor e o uso da voz de outras pessoas. No fim, vai exportar uma faixa curta e partilhá-la com segurança.",
    "Os termos do BandLab dizem que os utilizadores têm de ter pelo menos 13 anos e que os menores de 18 precisam da autorização de um pai, de uma mãe ou de um responsável. Veja as regras de idade de cada ferramenta que usa, veja as regras da sua escola sobre a IA e peça ajuda a um pai, a uma mãe ou a um responsável quando criar a conta. Cada lição termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça uma faixa original de cerca de 60 segundos num estúdio online gratuito: um beat, uma introdução, uma estrofe e um refrão. Use um assistente de IA para ter ideias de um tema e de pelo menos quatro versos de letra, e depois reescreva-os com as suas palavras. Não use canções copiadas nem uma cópia feita por IA da voz de uma pessoa real. Exporte a faixa e escreva uma nota de créditos curta que diga o que você fez e como usou a IA.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adolescentes que gostam de música e querem fazer a sua própria música, incluindo os que ainda não sabem tocar um instrumento.",
    startingPoint: "Ouvem música todos os dias e conhecem canções de que gostam. A maioria nunca fez um beat, nunca organizou uma canção nem aprendeu as regras sobre direitos de autor, samples e vozes feitas por IA.",
    gap: "As ferramentas de música com IA tornam fácil copiar canções ou vozes sem saber que isso é errado, e escrever pedidos não faz de ninguém o autor. Os adolescentes precisam de fazer música original eles próprios, usar a IA só como parceiro de ideias e partilhar o seu trabalho com honestidade e segurança.",
    constraints: [
      "Limites de idade: o BandLab e outras ferramentas têm idades mínimas e precisam da autorização de um pai, de uma mãe ou de um responsável para menores de 18",
      "Regras da escola sobre a IA na aula de música",
      "Aparelhos: um telefone ou um computador da escola ou da biblioteca com navegador de internet; só ferramentas gratuitas",
      "Direitos de autor e direitos sobre a voz: nada de canções copiadas, samples sem autorização ou cópias de vozes reais feitas por IA",
      "Privacidade ao partilhar: nada de nome completo, escola ou local em publicações públicas"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "A pensar na música que ouve e que faz", action: "explicar como a IA é usada na música e as regras básicas que vai seguir", standard: "dizendo três usos e as regras sobre cópias, vozes, limites de idade e honestidade" },
    { id: "O2", condition: "Usando um estúdio online gratuito como o BandLab, com a autorização de um pai, de uma mãe ou de um responsável", action: "fazer um beat de 4 compassos com bateria e mais um som, num andamento que combine com o ambiente", standard: "a tocar sem falhas" },
    { id: "O3", condition: "Com um tema da sua própria vida", action: "usar a IA para ter ideias de imagens e rimas e depois escrever quatro versos de letra com as suas palavras", standard: "de forma que os versos encaixem no beat quando ditos em voz alta" },
    { id: "O4", condition: "Com o seu beat e a sua letra", action: "organizar a faixa em introdução, estrofe e refrão", standard: "com cerca de 60 segundos, e cada parte a soar um pouco diferente" },
    { id: "O5", condition: "Para cada som e cada voz da sua faixa", action: "decidir se cada som ou voz pode ser usado e tirar tudo o que não consegue mostrar que é permitido", standard: "sem canções copiadas, samples sem licença ou cópias de vozes reais feitas por IA" },
    { id: "O6", condition: "Quando a faixa estiver pronta", action: "equilibrar a mistura, exportar a faixa e escrever uma nota de créditos honesta", standard: "partilhando só onde a sua família concorda e mantendo os dados pessoais privados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Fazer música com IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Como a IA é usada na música, e as regras básicas",
          minutes: 4,
          goal: "Explicar três formas de usar a IA na música e as regras que vai seguir.",
          text: [
            "A IA é usada na música de muitas formas: aplicações que sugerem acordes ou ritmos de bateria, ferramentas que limpam gravações, assistentes como o ChatGPT, o Microsoft Copilot ou o Google Gemini que ajudam a ter ideias de letras, e geradores que criam canções inteiras a partir de um pedido escrito.",
            "Neste curso, a IA é a sua parceira de ideias. Quem faz as principais escolhas criativas é você. Isso é importante para aprender e também é importante pela lei: o Gabinete de Direitos de Autor dos EUA (U.S. Copyright Office) disse que só escrever pedidos não chega para fazer de você o autor do que a IA produz. O que conta são as suas próprias palavras, os seus sons e a forma como organiza a canção.",
            "Regras básicas: não copie canções de outras pessoas, não use uma cópia feita por IA da voz de um cantor real ou de um colega, veja as regras de idade de cada ferramenta, siga as regras da sua escola sobre a IA na aula de música e seja honesto sobre como usou a IA."
          ],
          words: [["Gerador de música com IA", "uma ferramenta que cria música a partir de uma descrição escrita."], ["Autor", "a pessoa que cria uma obra e pode ter os direitos de autor sobre ela."], ["Pedido (prompt)", "o que você escreve para pedir alguma coisa a uma IA."]],
          slides: [
            { title: "A IA na música", bullets: ["Sugere acordes e ritmos de bateria", "Limpa gravações", "Dá ideias de letras", "Gera canções a partir de um pedido"] },
            { title: "A IA é a sua parceira", bullets: ["Você faz as principais escolhas criativas", "Só os pedidos não fazem de você o autor", "Contam as suas palavras e os seus sons"] },
            { title: "Regras básicas", bullets: ["Nada de canções copiadas", "Nada de cópias de vozes reais feitas por IA", "Veja as regras de idade e da escola", "Seja honesto sobre o uso da IA"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright and Artificial Intelligence, Part 2 (copyrightability)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "U.S. Copyright Office: Copyright and AI", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Escreva o nome de uma canção de que gosta muito e três coisas de que gosta nela (o beat, o ambiente, as palavras). São ideias com que pode aprender sem copiar a canção.",
          youCanNow: "dizer formas de usar a IA na música e explicar as regras para a usar de forma justa.",
          quickCheck: [
            { objective: "O1", q: "Qual é uma forma de usar a IA na música?", options: ["Ferramentas que limpam gravações", "Afinar uma guitarra à mão", "Imprimir bilhetes para concertos", "Construir colunas de som"], answer: 0, why: "A IA sugere acordes, limpa gravações, ajuda nas letras e pode gerar canções." },
            { objective: "O1", q: "Um gerador de canções faz uma faixa inteira a partir do seu pedido de uma linha. Pode dizer que é totalmente obra sua?", options: ["Sim, o pedido faz de você o autor", "Sim, se lhe mudar o nome", "Não; só os pedidos não chegam, por isso faça você as principais escolhas criativas", "Só se ninguém perguntar"], answer: 2, why: "O Gabinete de Direitos de Autor dos EUA disse que só escrever pedidos não chega para fazer de você o autor." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fazer o seu primeiro beat num estúdio online gratuito",
          minutes: 6,
          goal: "Abrir um estúdio online gratuito e fazer um beat de 4 compassos com bateria e mais um som.",
          text: [
            "O BandLab é uma aplicação e um site de música gratuitos, com um estúdio online para fazer música. Pode usá-lo num navegador de internet em bandlab.com ou na sua aplicação, a partir da loja de aplicações oficial. Precisa de uma conta, por isso peça ajuda a um pai, a uma mãe ou a um responsável quando a criar.",
            "A música conta-se em tempos e compassos. A maioria das canções pop e hip-hop tem 4 tempos em cada compasso. Um loop é um pedaço curto de música que se repete. Muitos beats começam com um loop de bateria, depois juntam o baixo e depois mais um som, como teclado ou guitarra.",
            "Os menus mudam com o tempo, por isso procure estas ações: começar um projeto novo, adicionar uma faixa, escolher um instrumento ou procurar loops, arrastar um loop para a faixa e carregar em tocar. Mude o andamento (a velocidade) para combinar com o ambiente: mais lento para relaxar, mais rápido para animar."
          ],
          steps: ["Com um pai, uma mãe ou um responsável, crie uma conta no BandLab ou noutro estúdio online gratuito.", "Comece um projeto novo.", "Adicione uma faixa de bateria, usando um loop ou tocando um ritmo simples.", "Adicione uma faixa de baixo ou de teclado que combine com a bateria.", "Escolha o andamento, faça-o com 4 compassos e carregue em tocar."],
          words: [["Beat", "o pulso regular da música; também quer dizer uma faixa instrumental curta."], ["Compasso", "um grupo de tempos, normalmente 4."], ["Loop", "um pedaço curto de música que se repete."], ["Andamento (tempo)", "a velocidade da música, contada em batidas por minuto (BPM)."]],
          slides: [
            { title: "Um estúdio online gratuito", bullets: ["BandLab: navegador de internet ou aplicação oficial", "Crie a conta com um pai, uma mãe ou um responsável", "Os termos do BandLab pedem 13 anos ou mais"] },
            { title: "Tempos, compassos e loops", bullets: ["A maioria das canções: 4 tempos em cada compasso", "Um loop é um pedaço curto que se repete", "Comece pela bateria, depois o baixo, depois mais um som"] },
            { title: "Monte o seu beat", bullets: ["Projeto novo, adicione uma faixa", "Escolha um loop ou um instrumento", "Escolha o andamento e carregue em tocar"] }
          ],
          sources: [{ name: "BandLab Terms of Use (age and parent permission)", url: "https://bandlabtechnologies.com/policies/bandlab-terms-of-use/" }],
          tryIt: "Faça um beat de 4 compassos com bateria e mais um som. Experimente dois andamentos diferentes e fique com o que combina com o ambiente que quer.",
          youCanNow: "abrir um estúdio online gratuito e montar um beat curto com faixas e loops.",
          quickCheck: [
            { objective: "O2", q: "O que é um compasso na música?", options: ["Um som alto", "Um tipo de tambor", "Uma aplicação de gravação", "Um grupo de tempos, normalmente 4 no pop e no hip-hop"], answer: 3, why: "A música conta-se em tempos e compassos, e a maioria das canções pop e hip-hop tem 4 tempos em cada compasso." },
            { objective: "O2", q: "O seu beat devia ser animado, mas soa sonolento. O que muda?", options: ["Põe mais baixo", "Acelera o andamento", "Apaga a bateria", "Junta mais compassos de silêncio"], answer: 1, why: "O andamento é a velocidade: mais rápido para animar, mais lento para relaxar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ter ideias de letras com a IA",
          minutes: 5,
          goal: "Usar a IA para ter ideias de um tema e de rimas e depois escrever a letra com as suas palavras.",
          text: [
            "Comece com um tema da sua vida: o primeiro dia numa escola nova, um trabalho nas férias, um amigo que se muda, entrar para a equipa. Sentimentos verdadeiros fazem canções melhores do que sentimentos gerais.",
            "Peça à IA ideias, não uma canção pronta: \"Dê-me 10 imagens e frases sobre o último dia de férias antes do ensino secundário\" ou \"Dê-me palavras que rimem com 'tarde' e 'espera'.\" Depois escolha o que gosta e escreva você os versos.",
            "Conte as sílabas para as palavras encaixarem no beat. Leia os seus versos em voz alta por cima do beat. Se um verso parecer apertado, corte palavras. A sua letra deve soar como você."
          ],
          steps: ["Escolha um tema da sua própria vida.", "Peça à IA imagens, frases ou rimas, não uma canção inteira.", "Escreva quatro versos com as suas palavras.", "Diga-os em voz alta por cima do seu beat.", "Corte ou mude palavras até encaixarem."],
          words: [["Letra", "as palavras de uma canção."], ["Tema", "aquilo de que uma canção fala."], ["Sílaba", "um pedaço de som numa palavra; \"mú-si-ca\" tem três."]],
          slides: [
            { title: "Comece pela sua vida", bullets: ["Um momento ou um sentimento verdadeiro", "O concreto vale mais do que o geral"] },
            { title: "Peça ideias, não uma canção", bullets: ["\"10 imagens sobre...\"", "\"Rimas para 'tarde'\"", "Você escolhe e escreve"] },
            { title: "Faça encaixar", bullets: ["Conte as sílabas", "Leia por cima do beat", "Corte os versos apertados"] }
          ],
          tryIt: "Escolha um tema, peça a um assistente de IA 10 imagens ou frases sobre ele e escreva quatro versos de letra com as suas palavras que encaixem no seu beat.",
          youCanNow: "ter ideias com a IA e escrever uma letra original que encaixa num beat.",
          quickCheck: [
            { objective: "O3", q: "O que deve pedir à IA quando escreve uma letra?", options: ["Uma canção pronta para copiar", "A letra do seu amigo", "As palavras de uma canção famosa", "Ideias como imagens, frases ou rimas"], answer: 3, why: "A IA dá ideias; você escreve os versos para soarem como você." },
            { objective: "O3", q: "Um verso parece apertado quando o diz por cima do beat. O que faz?", options: ["Corta ou muda palavras até encaixar", "Acelera a canção toda", "Junta mais palavras", "Deixa como está e canta mais depressa"], answer: 0, why: "Contar as sílabas e cortar palavras ajuda os versos a encaixar no beat." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Fazer música com IA",
        questions: [
          { objective: "O1", q: "Segundo o Gabinete de Direitos de Autor dos EUA, só escrever pedidos chega para fazer de você o autor do que a IA produz?", options: ["Sim, sempre", "Não, só os pedidos não chegam", "Só para canções", "Só se pagar"], answer: 1, why: "O Gabinete disse que dar apenas pedidos não é suficiente." },
          { objective: "O1", q: "Um amigo quer usar na sua faixa uma cópia feita por IA da voz de um cantor famoso. O que faz?", options: ["Usa-a", "Usa-a mas esconde", "Diz que não e usa a sua voz ou a de uma pessoa que aceite", "Copia também a canção toda"], answer: 2, why: "Não use a voz de uma pessoa real sem autorização." },
          { objective: "O2", q: "O que é um loop?", options: ["Um pedaço curto de música que se repete", "A letra de uma canção", "Um botão de volume", "Um tipo de microfone"], answer: 0, why: "Os loops repetem-se e são uma forma comum de montar beats." },
          { objective: "O2", q: "O que quer dizer andamento?", options: ["O volume da canção", "O título da canção", "Quantas faixas tem", "A velocidade da música"], answer: 3, why: "O andamento é a velocidade, contada em batidas por minuto." },
          { objective: "O3", q: "Que pedido à IA combina melhor com este curso?", options: ["\"Escreva a minha canção inteira\"", "\"Dê-me 10 imagens sobre o meu primeiro trabalho de férias\"", "\"Copie um sucesso\"", "\"Cante com a voz do meu professor\""], answer: 1, why: "Peça ideias à IA e depois escreva você a canção." }
        ]
      }
    },
    {
      name: "Capítulo 2: Montar, proteger e partilhar a sua faixa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Montar a estrutura de uma canção",
          minutes: 5,
          goal: "Organizar a sua faixa em introdução, estrofe e refrão.",
          text: [
            "A maioria das canções é feita de partes. A introdução abre a canção. A estrofe conta a história e muda de palavras de cada vez. O refrão é a parte que fica no ouvido e se repete. Uma canção curta pode ser assim: introdução, estrofe, refrão.",
            "Faça cada parte soar um pouco diferente. Por exemplo, a introdução tem só teclado, a estrofe junta a bateria e o refrão junta o baixo e uma melodia. Copie e cole secções no estúdio para montar a canção ao longo da linha do tempo.",
            "Pode perguntar à IA: \"Tenho um beat de 4 compassos a 90 BPM. Como posso organizar uma canção de 60 segundos com introdução, estrofe e refrão?\" Depois experimente as ideias e confie nos seus ouvidos."
          ],
          steps: ["Planeie a ordem: introdução, estrofe, refrão.", "Copie o seu beat para fazer cada secção.", "Tire ou junte sons para cada parte soar diferente.", "Ponha a sua letra na estrofe e no refrão.", "Toque tudo e faça ajustes."],
          words: [["Introdução", "o início de uma canção."], ["Estrofe", "a parte que conta a história; as palavras mudam de cada vez."], ["Refrão", "a parte que fica no ouvido e se repete."], ["Arranjo", "a forma como as partes de uma canção são ordenadas e postas umas por cima das outras."]],
          slides: [
            { title: "Partes de uma canção", bullets: ["Introdução: abre a canção", "Estrofe: conta a história", "Refrão: a parte que fica no ouvido e se repete"] },
            { title: "Faça cada parte diferente", bullets: ["Introdução: menos sons", "Estrofe: junte a bateria", "Refrão: junte o baixo e a melodia"] },
            { title: "Pergunte à IA, confie nos ouvidos", bullets: ["Peça ideias de arranjo", "Experimente-as", "Fique com o que soa bem para você"] }
          ],
          tryIt: "Organize o seu beat em introdução, estrofe e refrão, com cerca de 60 segundos. Junte os seus quatro versos como notas de texto ou grave-os, se quiser.",
          youCanNow: "organizar uma faixa em partes claras, cada uma a soar diferente.",
          quickCheck: [
            { objective: "O4", q: "O que faz a introdução de uma canção?", options: ["Repete a parte que fica no ouvido", "Termina a canção", "Abre a canção", "Conta a história toda"], answer: 2, why: "A introdução abre a canção antes da estrofe e do refrão." },
            { objective: "O4", q: "A sua introdução, a estrofe e o refrão soam todos iguais. O que faz?", options: ["Tira ou junta sons para cada parte soar diferente", "Põe todas as partes mais altas", "Apaga o refrão", "Usa outra canção"], answer: 0, why: "Mudar os sons que tocam em cada parte deixa a estrutura clara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Direitos de autor, samples e vozes",
          minutes: 5,
          goal: "Decidir se um som ou uma voz pode ser usado na sua faixa.",
          text: [
            "Os direitos de autor protegem obras originais como canções e gravações. Segundo o Gabinete de Direitos de Autor dos EUA, uma obra fica protegida logo que é criada e fixada numa forma que as pessoas podem ouvir ou ver, e o registo é em geral voluntário. Por isso, a maioria das canções que ouve está protegida, e a canção que você faz é sua.",
            "Usar um pedaço da gravação de outra pessoa chama-se fazer um sample (amostra). Não faça samples de canções sem autorização, a não ser que o som venha de uma biblioteca que diz que o pode usar, como os loops do seu estúdio. Leia as regras da ferramenta.",
            "As vozes são pessoais. Não faça nem use uma cópia feita por IA da voz de uma pessoa real, seja uma estrela, um professor ou um colega, sem a autorização clara dessa pessoa. Se não tiver a certeza de que uma coisa é permitida, deixe-a de fora ou pergunte a um professor, a um pai ou a uma mãe."
          ],
          steps: ["Pergunte: fui eu que fiz este som, ou a ferramenta diz que o posso usar?", "Se vier da canção de outra pessoa, deixe-o de fora, a não ser que tenha autorização.", "Nunca use uma cópia feita por IA da voz de uma pessoa real sem autorização.", "Na dúvida, deixe de fora ou pergunte a um adulto de confiança."],
          words: [["Direitos de autor", "o direito legal de quem cria uma obra de controlar as cópias dessa obra."], ["Sample (amostra)", "um pedaço da gravação de outra pessoa usado numa faixa nova."], ["Clone de voz", "uma cópia da voz de uma pessoa real feita por IA."]],
          slides: [
            { title: "O básico dos direitos de autor", bullets: ["Protegem canções e gravações", "Começam quando a obra é criada e fixada", "O registo é em geral voluntário"] },
            { title: "Samples", bullets: ["Não faça samples de canções sem autorização", "Loops do estúdio: veja as regras da ferramenta"] },
            { title: "Vozes", bullets: ["Nada de cópias de pessoas reais feitas por IA sem autorização", "Inclui estrelas, professores e colegas", "Na dúvida? Deixe de fora ou pergunte"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright basics FAQ", url: "https://www.copyright.gov/help/faq/faq-general.html" }, { name: "U.S. Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Faça a lista de todos os sons da sua faixa e de onde vieram: feitos por você, um loop do estúdio ou outra coisa. Tire tudo o que não consegue dizer que pode usar.",
          youCanNow: "verificar cada som e cada voz da sua faixa e ficar só com o que pode usar.",
          quickCheck: [
            { objective: "O5", q: "O que é fazer um sample?", options: ["Gravar a sua própria voz", "Usar um pedaço da gravação de outra pessoa numa faixa nova", "Mudar o andamento", "Exportar uma canção"], answer: 1, why: "Fazer um sample é usar parte da gravação de outra pessoa." },
            { objective: "O5", q: "Encontrou um som fixe na internet, mas não sabe quem o fez nem se o pode usar. O que faz?", options: ["Usa-o; ninguém vai reparar", "Acelera-o para soar diferente", "Dá o crédito a si mesmo", "Deixa-o de fora ou pergunta a um adulto de confiança"], answer: 3, why: "Se não consegue dizer que um som pode ser usado, deixe-o de fora ou pergunte." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Misturar, exportar e partilhar com segurança",
          minutes: 5,
          goal: "Equilibrar a sua faixa, exportá-la e partilhá-la com créditos honestos.",
          text: [
            "Misturar quer dizer escolher o volume de cada faixa para nada abafar o resto. Baixe o que estiver alto demais e ouça com auscultadores e também no altifalante de um telefone.",
            "Depois exporte ou guarde a faixa como ficheiro de áudio, usando a opção de exportar ou descarregar do estúdio. Escreva uma nota de créditos curta: o seu nome ou nome artístico, o título e como usou a IA, por exemplo \"A IA ajudou a ter ideias para a letra; toda a música e a letra foram escritas e organizadas por mim.\"",
            "Partilhe com segurança: publique só onde a sua família concorda, mantenha privados o seu nome completo, a escola e o local se publicar para o público, e pense bem antes de ligar os comentários. Se a faixa for para a escola, siga as regras do seu professor sobre a IA."
          ],
          steps: ["Equilibre o volume de cada faixa.", "Ouça com auscultadores e no altifalante de um telefone.", "Exporte ou guarde a faixa como ficheiro de áudio.", "Escreva uma nota de créditos que diga como usou a IA.", "Partilhe só onde a sua família concorda, mantendo os dados pessoais privados."],
          words: [["Mistura", "equilibrar o volume de cada faixa."], ["Exportar", "guardar o seu projeto como um ficheiro que outras pessoas podem tocar."], ["Nota de créditos", "uma nota curta que diz quem fez o quê."]],
          slides: [
            { title: "Faça a mistura", bullets: ["Equilibre o volume de cada faixa", "Ouça com auscultadores e no altifalante de um telefone"] },
            { title: "Exporte e dê os créditos", bullets: ["Guarde como ficheiro de áudio", "Título e nome artístico", "Diga como usou a IA"] },
            { title: "Partilhe com segurança", bullets: ["Onde a sua família concorda", "Mantenha privados o nome, a escola e o local", "Siga as regras da escola sobre a IA"] }
          ],
          tryIt: "Tarefa final: termine a sua faixa original de 60 segundos com beat, introdução, estrofe e refrão e a sua própria letra. Verifique que todos os sons podem ser usados, exporte-a e escreva uma nota de créditos que diga como usou a IA.",
          youCanNow: "fazer, misturar, exportar e partilhar uma faixa original de forma justa e segura, com créditos honestos.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer misturar?", options: ["Escolher o volume de cada faixa para nada abafar o resto", "Juntar mais letra", "Escolher o título da canção", "Carregar a canção na internet"], answer: 0, why: "A mistura equilibra o volume de cada faixa." },
            { objective: "O6", q: "Quer publicar a sua faixa para o público. O que mantém privado?", options: ["O título da canção", "O seu nome artístico", "O seu nome completo, a escola e o local", "Como usou a IA"], answer: 2, why: "Partilhe com segurança: mantenha os dados pessoais privados e publique só onde a sua família concorda." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Montar, proteger e partilhar a sua faixa",
        questions: [
          { objective: "O4", q: "Que parte de uma canção fica no ouvido e se repete?", options: ["A introdução", "A estrofe", "A exportação", "O refrão"], answer: 3, why: "O refrão é a parte que se repete e fica no ouvido." },
          { objective: "O5", q: "Segundo o Gabinete de Direitos de Autor dos EUA, quando começa a proteção dos direitos de autor?", options: ["Quando a obra é criada e fixada numa forma que as pessoas podem ouvir ou ver", "Só depois do registo", "Depois de 10 anos", "Só para artistas famosos"], answer: 0, why: "A proteção começa quando a obra é criada e fixada." },
          { objective: "O5", q: "Quer usar 5 segundos de um sucesso no seu beat. O que faz?", options: ["Usa; é curto", "Deixa de fora, a não ser que tenha autorização", "Muda a velocidade para ninguém reparar", "Dá o crédito ao cantor e usa"], answer: 1, why: "Fazer um sample de uma canção protegida precisa de autorização." },
          { objective: "O6", q: "O que é a mistura?", options: ["Escrever a letra", "Criar uma conta numa aplicação", "Equilibrar o volume de cada faixa", "Escolher um tema"], answer: 2, why: "A mistura equilibra o volume de cada parte." },
          { objective: "O6", q: "Que nota de créditos é honesta?", options: ["\"Não foi usada IA\" quando foi", "\"A IA ajudou a ter ideias para a letra; música e letra feitas por mim\"", "Nenhuma nota num trabalho da escola", "\"Feito por um produtor famoso\""], answer: 1, why: "Diz com clareza como a IA foi usada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Produção Musical com IA",
    questions: [
      { objective: "O1", q: "Qual é uma forma de usar a IA na música?", options: ["Sugerir acordes ou ritmos de bateria", "Substituir os seus ouvidos", "Assinar contratos com editoras por você", "Ser dona das suas canções"], answer: 0, why: "As ferramentas de IA podem sugerir ideias musicais." },
      { objective: "O1", q: "Neste curso, o papel da IA é ser a sua:", options: ["Escritora escondida que faz o trabalho por você", "Parceira de ideias", "Chefe", "Advogada"], answer: 1, why: "Quem faz as principais escolhas criativas é você." },
      { objective: "O1", q: "O que disse o Gabinete de Direitos de Autor dos EUA sobre só escrever pedidos?", options: ["Faz de você o autor", "É ilegal", "Não chega para fazer de você o autor", "É só para adultos"], answer: 2, why: "Dar apenas pedidos não é suficiente para ser autor." },
      { objective: "O2", q: "Segundo os termos do BandLab, os utilizadores têm de ter pelo menos:", options: ["8 anos", "10 anos", "21 anos", "13 anos, com autorização dos pais se tiverem menos de 18"], answer: 3, why: "Os termos dizem 13 anos ou mais, com a autorização de um pai, de uma mãe ou de um responsável para os menores." },
      { objective: "O2", q: "Quantos tempos tem um compasso na maioria das canções pop e hip-hop?", options: ["1", "4", "12", "100"], answer: 1, why: "Quatro tempos por compasso é o mais comum." },
      { objective: "O2", q: "Uma boa ordem para montar um beat é:", options: ["Só vozes", "Bateria, depois baixo, depois mais um som", "Exportar primeiro", "Dez sons ao mesmo tempo"], answer: 1, why: "Começar pela bateria e pelo baixo dá uma base sólida." },
      { objective: "O2", q: "Quer um ambiente calmo e relaxado. O mais provável é que deva:", options: ["Pôr o andamento muito rápido", "Juntar alarmes altos", "Usar um andamento mais lento", "Apagar a bateria"], answer: 2, why: "Andamentos mais lentos costumam soar mais calmos." },
      { objective: "O3", q: "Que tema deve dar uma canção mais forte?", options: ["\"Coisas\"", "\"A vida em geral\"", "\"Acontecem coisas\"", "\"Arrumar o meu cacifo no último dia do 8.º ano\""], answer: 3, why: "Momentos concretos e verdadeiros dão letras mais fortes." },
      { objective: "O3", q: "Um bom pedido à IA para uma letra é:", options: ["\"Dê-me palavras que rimem com 'tarde'\"", "\"Escreva a canção toda e eu assino\"", "\"Copie as palavras de uma canção famosa\"", "\"Use o diário do meu amigo\""], answer: 0, why: "Pedir ideias soltas mantém a escrita sua." },
      { objective: "O3", q: "Um verso está apertado demais para o beat. O que faz?", options: ["Acelera a canção toda", "Corta palavras até encaixar", "Junta mais palavras", "Apaga o refrão"], answer: 1, why: "Cortar palavras ajuda os versos a encaixar no ritmo." },
      { objective: "O4", q: "A estrofe de uma canção:", options: ["Nunca tem palavras", "É igual todas as vezes", "Conta a história, com palavras que mudam", "É o ficheiro exportado"], answer: 2, why: "As estrofes levam a história e mudam de palavras." },
      { objective: "O4", q: "Como pode fazer o refrão destacar-se?", options: ["Pôr em silêncio", "Apagar o beat", "Usar os mesmos sons da introdução", "Juntar mais sons, como o baixo e uma melodia"], answer: 3, why: "Juntar camadas faz o refrão soar maior." },
      { objective: "O4", q: "A IA dá-lhe ideias de arranjo. Depois você:", options: ["Experimenta-as e confia nos seus ouvidos", "Tem de as usar todas", "Tem de as ignorar todas", "Publica-as como a sua canção"], answer: 0, why: "Quem faz as escolhas criativas é você." },
      { objective: "O5", q: "É preciso registar a sua canção para ela ter a proteção dos direitos de autor?", options: ["Sim, sempre", "Não, o registo é em geral voluntário", "Só aos fins de semana", "Só para canções da escola"], answer: 1, why: "O Gabinete de Direitos de Autor diz que o registo é em geral voluntário." },
      { objective: "O5", q: "Um sample é:", options: ["Uma experiência grátis", "Um tipo de microfone", "Um pedaço da gravação de outra pessoa usado numa faixa nova", "Uma ideia para a letra"], answer: 2, why: "Fazer um sample é usar parte de uma gravação que já existe." },
      { objective: "O5", q: "A IA podia clonar a voz de um colega para o seu refrão. Qual é a regra?", options: ["Fazer como surpresa", "Fazer se soar bem", "Fazer só nos computadores da escola", "Só com a autorização clara dessa pessoa"], answer: 3, why: "As vozes são pessoais; peça autorização clara ou não as use." },
      { objective: "O5", q: "Não tem a certeza se pode usar um som. A escolha mais segura é:", options: ["Deixá-lo de fora ou perguntar a um adulto de confiança", "Usá-lo e esperar que corra bem", "Escondê-lo na mistura", "Mudar o nome do ficheiro"], answer: 0, why: "Na dúvida, deixe de fora ou pergunte." },
      { objective: "O6", q: "Porque ouvir com auscultadores e também no altifalante de um telefone?", options: ["A lei obriga", "Para ver se a mistura soa bem em aparelhos diferentes", "Para soar mais alto", "Para a exportar"], answer: 1, why: "As misturas soam diferentes em aparelhos diferentes." },
      { objective: "O6", q: "Quando publica a sua faixa para o público, deve manter privados:", options: ["O título da canção", "O seu nome artístico", "O seu nome completo, a escola e o local", "O género musical"], answer: 2, why: "Os dados pessoais ficam privados na internet." },
      { objective: "O6", q: "A sua faixa é para a aula de música. Sobre a IA, você deve:", options: ["Esconder que a usou", "Pedir à IA uma nota a dizer que não usou IA", "Não fazer a nota de créditos", "Seguir as regras do seu professor e dizer como a usou"], answer: 3, why: "Ser honesto sobre o uso da IA faz parte das regras da escola." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      6,
      8,
      10,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Beat",
        objective: "O2",
        notYet: "Sem bateria, ou só com um som.",
        meets: "Um beat com bateria e pelo menos mais um som, num andamento que combina com o ambiente.",
        exceeds: "O aluno sabe explicar porque escolheu esse andamento."
      },
      {
        name: "Estrutura da canção",
        objective: "O4",
        notYet: "Sem introdução, estrofe ou refrão claros.",
        meets: "Cerca de 60 segundos, com introdução, estrofe e refrão que soam um pouco diferentes.",
        exceeds: "O refrão destaca-se com clareza, por exemplo com baixo ou melodia a mais."
      },
      {
        name: "Letra própria",
        objective: "O3",
        notYet: "Falta a letra, ou foi copiada da IA.",
        meets: "Pelo menos quatro versos com as palavras do próprio aluno, que encaixam no beat.",
        exceeds: "A letra usa um tema verdadeiro da vida do aluno e mostra ideias da IA que foram mudadas."
      },
      {
        name: "Original e permitido",
        objective: "O5",
        notYet: "Usa uma canção copiada, um sample sem licença ou uma cópia de uma voz real feita por IA.",
        meets: "Cada som foi feito pelo aluno ou é permitido pelo estúdio, e nenhuma voz real é copiada.",
        exceeds: "Inclui uma lista de cada som e de onde veio."
      },
      {
        name: "Exportação e créditos",
        objective: "O6",
        notYet: "Não foi exportada, ou não tem nota de créditos.",
        meets: "Exportada como ficheiro de áudio, com uma nota de créditos que diz como a IA foi usada.",
        exceeds: "A mistura foi verificada com auscultadores e no altifalante de um telefone, e ajustada."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem uma segunda faixa original em 30 dias (inquérito de seguimento)",
      "Alunos que partilham uma faixa com segurança com a família, uma turma ou uma mostra de um programa para jovens",
      "Alunos que entram numa aula, num clube ou num programa de música em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador da escola ou da biblioteca com internet",
      "Auscultadores",
      "O BandLab ou outro estúdio online gratuito, com a autorização de um pai, de uma mãe ou de um responsável para menores de 18",
      "Um assistente de IA gratuito que o aluno possa usar",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes da aula, veja as regras de idade de cada ferramenta e recolha a autorização dos pais ou responsáveis para criar as contas; tenha uma conta de demonstração pronta, se for preciso.",
      "Tenha auscultadores disponíveis para os alunos poderem trabalhar lado a lado numa sala de informática.",
      "Antes da exportação, reveja a lista de sons de cada aluno para encontrar canções copiadas, samples sem licença ou vozes clonadas.",
      "Faça uma sessão de audição só dentro do grupo, com o acordo das famílias antes de qualquer coisa ser publicada para o público.",
      "Avalie a faixa com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
