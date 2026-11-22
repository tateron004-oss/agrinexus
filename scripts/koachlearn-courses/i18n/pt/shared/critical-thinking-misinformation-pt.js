"use strict";

// Koach Learn course (Portuguese translation of shared/critical-thinking-misinformation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "critical-thinking-misinformation-pt",
  lang: "pt",
  translationOf: "critical-thinking-misinformation",
  category: "Seniors and Technology",
  name: "Pensamento Crítico e Como Reconhecer a Desinformação",
  skills: "Parar antes de acreditar ou partilhar, Leitura lateral, Verificar uma fonte, Pesquisa reversa de imagens, Reconhecer falsificações feitas com IA e deepfakes, Notar os seus próprios preconceitos",
  outcome: "verificar uma publicação, imagem, vídeo ou mensagem antes de acreditar nela ou de a partilhar: parar, ler para os lados para verificar a fonte, seguir a origem de uma imagem com uma pesquisa reversa, reconhecer sinais de falsificações feitas com IA e de burlas, e notar quando os seus próprios sentimentos o estão a guiar.",
  about: [
    "Todos os dias vemos publicações, vídeos, mensagens reencaminhadas e títulos de notícias. Algumas são verdade, outras são erros, e outras são inventadas de propósito para ganhar dinheiro, vender alguma coisa, assustar-nos ou dividir-nos. As ferramentas de IA agora tornam fácil criar imagens, vídeos e vozes falsas. Saber verificar é uma habilidade para a vida de todos.",
    "Este curso é para todos: idosos que recebem mensagens reencaminhadas da família, jovens nas redes sociais, pessoal de organizações sem fins lucrativos que partilha notícias com os apoiantes, trabalhadores e quem procura emprego, e pessoas que voltam para casa e estão a pôr-se a par do que mudou na internet. Não precisa de ser especialista. Precisa de alguns hábitos rápidos.",
    "Vai aprender a parar antes de partilhar, a ler para os lados para verificar uma fonte, a fazer uma pesquisa reversa de imagens, a reconhecer falsificações feitas com IA e burlas disfarçadas de notícias, e a notar os seus próprios preconceitos. Cada lição dura cerca de cinco minutos e termina com uma prática sobre uma publicação real. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Encontre uma publicação, imagem ou mensagem reencaminhada real que o surpreendeu ou que o fez sentir algo forte. Verifique-a com os passos deste curso: pare, leia para os lados sobre a fonte, procure outras notícias de confiança, faça uma pesquisa reversa de qualquer imagem e procure sinais de burla. Escreva uma conclusão de três frases (verdadeiro, falso, enganador ou ainda não sei) com as provas, e decida se a vai partilhar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Todas as pessoas que veem publicações e mensagens: idosos que recebem mensagens reencaminhadas da família, jovens nas redes sociais, pessoal de organizações sem fins lucrativos que partilha notícias, trabalhadores e quem procura emprego, e pessoas que voltam para casa e estão a pôr-se a par do que mudou na internet.",
    startingPoint: "Usam um telefone ou um computador para ler publicações, ver vídeos e partilhar mensagens. A maioria nunca verificou uma fonte lendo outros sites, nunca fez uma pesquisa reversa de imagens nem usou uma palavra-código da família contra burlas por voz.",
    gap: "Publicações falsas, falsificações feitas com IA e burlas espalham-se depressa e custam às pessoas dinheiro, saúde e confiança. Os alunos precisam de alguns hábitos rápidos de verificação para decidirem em que acreditar e o que partilhar, protegerem a família contra burlas e notarem quando os seus próprios sentimentos os estão a guiar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou um computador com navegador de internet",
      "Os menus das ferramentas mudam; as lições descrevem a ação quando os nomes exatos dos menus podem ser diferentes",
      "Afirmações sobre saúde, dinheiro e leis são verificadas em fontes oficiais ou com um profissional",
      "Privacidade: os alunos não partilham mensagens privadas da família na aula"
    ],
    prerequisites: "Nenhum. Quem é novo nos telefones ou nos navegadores pode fazer primeiro o curso \"Usar um Smartphone e um Tablet\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Quando uma publicação o faz sentir algo forte", action: "parar e perguntar quem a fez, quais são as provas e o que dizem outras fontes", standard: "antes de acreditar nela ou de a partilhar" },
    { id: "O2", condition: "Com um site ou uma conta", action: "verificar quem está por trás, lendo o que outras fontes de confiança dizem sobre ele", standard: "encontrando pelo menos duas outras fontes antes de decidir" },
    { id: "O3", condition: "Com uma imagem impressionante", action: "fazer uma pesquisa reversa de imagens para encontrar onde e quando apareceu pela primeira vez", standard: "anotando a data mais antiga que encontrar e se ela corresponde à publicação" },
    { id: "O4", condition: "Com um vídeo, imagem ou voz que pode ter sido feito com IA", action: "compará-lo com a conta oficial da pessoa e com notícias de confiança, e usar uma palavra-código da família nas chamadas", standard: "sem confiar apenas na aparência ou no som" },
    { id: "O5", condition: "Com um anúncio ou publicação que promete dinheiro, uma cura ou um grande negócio", action: "fazer a lista dos sinais de alerta de burla e denunciá-lo", standard: "encontrando todos os sinais de alerta antes de clicar, pagar ou inscrever-se" },
    { id: "O6", condition: "Depois de verificar uma publicação surpreendente", action: "escrever uma conclusão curta com provas e anotar como os seus próprios sentimentos ou crenças o podem ter puxado", standard: "em três frases, com um claro verdadeiro, falso, enganador ou ainda não sei" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Verificar o que vê",
      lessons: [
        {
          objectives: ["O1"],
          title: "Parar e verificar uma afirmação",
          minutes: 5,
          goal: "Parar antes de acreditar ou partilhar, e fazer três perguntas rápidas.",
          text: [
            "As publicações falsas espalham-se mais depressa quando nos fazem sentir algo forte: raiva, medo, orgulho ou entusiasmo. Esse sentimento é o seu sinal para parar. Alguns segundos de verificação podem impedi-lo de passar uma coisa falsa a pessoas que confiam em você.",
            "Faça três perguntas. Quem está por trás disto? (Um órgão de notícias verdadeiro, um serviço do governo, um médico, ou uma conta de que nunca ouviu falar?) Quais são as provas? (Um link para um estudo, um documento, um vídeo do acontecimento completo, ou só a palavra de alguém?) O que dizem outras fontes de confiança? (Mais alguém está a noticiar isto?)",
            "Um conjunto útil de passos chama-se SIFT (do inglês): Stop, Parar; Investigar a fonte; Find, Encontrar notícias melhores; Trace, Seguir as afirmações, as citações e as imagens até onde apareceram pela primeira vez. Vai praticar cada parte neste curso. Se não tiver a certeza, pode esperar. Não partilhar é sempre uma opção."
          ],
          steps: ["Note um sentimento forte: é o seu sinal para parar.", "Pergunte: quem está por trás disto?", "Pergunte: quais são as provas?", "Pergunte: o que dizem outras fontes de confiança?", "Não tem a certeza? Ainda não partilhe."],
          words: [["Informação errada", "informação falsa partilhada por pessoas que podem pensar que é verdade (em inglês, \"misinformation\")."], ["Desinformação", "informação falsa feita e espalhada de propósito para enganar as pessoas."], ["Afirmação", "algo que uma publicação diz que é verdade."]],
          slides: [
            { title: "Sentimento forte = pare", bullets: ["As publicações falsas espalham-se com raiva, medo e entusiasmo", "Alguns segundos de verificação protegem quem confia em você"] },
            { title: "Três perguntas rápidas", bullets: ["Quem está por trás disto?", "Quais são as provas?", "O que dizem outras fontes de confiança?"] },
            { title: "SIFT", bullets: ["Stop: Parar", "Investigar a fonte", "Find: Encontrar notícias melhores", "Trace: Seguir até à origem"] },
            { title: "Não tem a certeza?", bullets: ["Espere", "Não partilhar é sempre uma opção"] }
          ],
          sources: [
            { name: "Digital Inquiry Group: Civic Online Reasoning (lições gratuitas sobre como avaliar informação na internet)", url: "https://cor.inquirygroup.org/" }
          ],
          tryIt: "Abra as suas redes sociais, uma aplicação de notícias ou um grupo da família. Encontre uma publicação que o fez sentir algo forte. Escreva as respostas às três perguntas: quem, que provas, o que dizem os outros.",
          youCanNow: "parar quando uma publicação desperta sentimentos fortes e perguntar quem está por trás dela, quais são as provas e o que dizem os outros.",
          quickCheck: [
            { objective: "O1", q: "Que pergunta o ajuda a verificar uma afirmação?", options: ["Quantos gostos tem?", "Quem fez isto, e quais são as provas?", "A imagem é colorida?", "O meu amigo partilhou?"], answer: 1, why: "Perguntar quem fez e que provas tem faz parte de parar para verificar." },
            { objective: "O1", q: "Um grupo da família reencaminha um aviso chocante. O que faria primeiro?", options: ["Reencaminhar logo para todos", "Apagar o grupo", "Parar e verificar antes de partilhar", "Responder todo em maiúsculas"], answer: 2, why: "Os sentimentos fortes são um sinal para parar e verificar primeiro." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Leitura lateral: verificar a fonte",
          minutes: 5,
          goal: "Verificar quem está por trás de um site ou de uma conta lendo outros sites sobre ele.",
          text: [
            "Os sites falsos podem parecer muito profissionais, com logótipos, páginas \"Sobre nós\" e nomes que soam oficiais. Ler o próprio site não lhe diz se pode confiar nele. Os verificadores de factos profissionais fazem outra coisa: saem do site e leem para os lados. A isto chama-se leitura lateral.",
            "Abra um novo separador e pesquise o nome do site, da organização ou da pessoa, junto com palavras como \"quem financia\" ou \"fiável\". Veja o que os outros dizem sobre eles: órgãos de notícias, o artigo da Wikipédia sobre eles, ou sites de verificação de factos como AP Fact Check, Reuters Fact Check, PolitiFact, FactCheck.org ou Snopes. Uma afirmação sobre saúde? Veja o que dizem o seu médico ou os sites oficiais de saúde. Uma afirmação sobre um programa do governo? Vá ao site oficial, que nos EUA muitas vezes acaba em .gov.",
            "Procure também a mesma notícia em pelo menos duas fontes de confiança que já conhece. Se só um site desconhecido está a noticiar algo enorme, tenha cuidado."
          ],
          steps: ["Não julgue um site pelo aspeto ou pela página \"Sobre nós\".", "Abra um novo separador.", "Pesquise o nome do site, do grupo ou da pessoa com \"fiável\" ou \"quem financia\".", "Leia o que os órgãos de notícias, a Wikipédia ou os verificadores de factos dizem sobre eles.", "Procure a mesma notícia em duas fontes de confiança."],
          words: [["Leitura lateral", "verificar uma fonte saindo dela e lendo o que outros sites dizem sobre ela."], ["Verificador de factos", "uma pessoa ou grupo cujo trabalho é verificar se as afirmações são verdade."]],
          slides: [
            { title: "Sites falsos podem parecer reais", bullets: ["Logótipos, páginas \"Sobre nós\", nomes oficiais", "Ler só o próprio site não chega"] },
            { title: "Leia para os lados", bullets: ["Abra um novo separador", "Pesquise o nome com \"fiável\" ou \"quem financia\"", "Veja o que os outros dizem sobre eles"] },
            { title: "Onde procurar", bullets: ["Órgãos de notícias e Wikipédia", "Verificadores de factos: AP, Reuters, PolitiFact, FactCheck.org, Snopes", "Sites oficiais, nos EUA muitas vezes acabam em .gov"] },
            { title: "Duas fontes de confiança", bullets: ["Só um site desconhecido dá uma grande notícia?", "Tenha cuidado"] }
          ],
          sources: [
            { name: "Digital Inquiry Group: Introdução à leitura lateral (Civic Online Reasoning)", url: "https://cor.inquirygroup.org/" }
          ],
          tryIt: "Pegue na publicação da Lição 1. Abra um novo separador e pesquise o nome do site ou da conta que a publicou. Escreva uma frase sobre o que outras fontes dizem sobre ele, e se algum órgão de confiança dá a mesma notícia.",
          youCanNow: "verificar um site ou uma conta lendo o que outras fontes de confiança dizem sobre ele.",
          quickCheck: [
            { objective: "O2", q: "O que é a leitura lateral?", options: ["Abrir novos separadores para ver o que outras fontes dizem sobre um site", "Ler uma página devagar de cima a baixo", "Ler só o título", "Ler a página \"Sobre nós\" do site"], answer: 0, why: "A leitura lateral verifica uma fonte saindo dela e lendo outras sobre ela." },
            { objective: "O2", q: "Encontra um site de notícias que nunca viu com uma grande notícia. O que faria?", options: ["Confiar porque parece profissional", "Partilhar para os outros decidirem", "Ler só a página \"Sobre nós\"", "Pesquisar o nome do site e ver o que dizem as fontes de confiança"], answer: 3, why: "O que os outros dizem sobre um site diz-lhe mais do que o que ele diz de si próprio." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pesquisa reversa de imagens: de onde veio esta imagem?",
          minutes: 5,
          goal: "Usar uma pesquisa reversa de imagens para encontrar onde uma imagem apareceu pela primeira vez.",
          text: [
            "Muitas publicações falsas usam uma fotografia real com uma história falsa: uma imagem de uma cheia de há anos partilhada como sendo de \"hoje\", ou uma fotografia de outro país. Uma pesquisa reversa de imagens encontra onde mais uma imagem aparece na internet, e muitas vezes mostra a sua data e história verdadeiras.",
            "No computador: vá a google.com e clique no ícone da câmara (\"Pesquisar por imagem\"), depois carregue a imagem ou arraste-a para a caixa de pesquisa. No navegador Chrome também pode clicar com o botão direito numa imagem de um site e escolher \"Pesquisar com o Google Lens\". No telefone, a aplicação Google e o Google Lens deixam pesquisar com uma imagem ou uma captura de ecrã. O TinEye (tineye.com) é outro site gratuito de pesquisa reversa de imagens.",
            "Nos resultados, procure a versão mais antiga, o lugar onde apareceu primeiro, e notícias ou verificações de factos sobre ela. Se a imagem é de outro tempo, lugar ou acontecimento diferente do que a publicação diz, a publicação é enganadora, mesmo que a fotografia seja real."
          ],
          steps: ["Guarde a imagem ou faça uma captura de ecrã.", "Abra a pesquisa de imagens do Google (ícone da câmara), o Google Lens ou tineye.com.", "Carregue a imagem.", "Procure a cópia mais antiga, onde apareceu primeiro e qualquer verificação de factos.", "Compare: a história verdadeira corresponde ao que a publicação diz?"],
          words: [["Pesquisa reversa de imagens", "pesquisar com uma imagem para encontrar onde mais ela aparece na internet."], ["Captura de ecrã", "uma imagem do que está no seu ecrã (em inglês, \"screenshot\")."], ["Enganador", "que usa algo real de uma forma que dá uma ideia falsa."]],
          slides: [
            { title: "Fotografia real, história falsa", bullets: ["Imagens antigas partilhadas como de \"hoje\"", "Fotografias de outro lugar ou acontecimento"] },
            { title: "Como pesquisar com uma imagem", bullets: ["google.com: clique no ícone da câmara e carregue", "Chrome: botão direito, \"Pesquisar com o Google Lens\"", "Telefone: aplicação Google ou Lens; também tineye.com"] },
            { title: "Leia os resultados", bullets: ["Encontre a cópia mais antiga", "Onde apareceu primeiro?", "Há verificações de factos?"] },
            { title: "Compare", bullets: ["Outro tempo, lugar ou acontecimento?", "Então a publicação é enganadora"] }
          ],
          sources: [
            { name: "Ajuda da Pesquisa Google: Pesquisar com uma imagem", url: "https://support.google.com/websearch/answer/1325808" }
          ],
          tryIt: "Encontre uma fotografia impressionante numa publicação ou nas notícias. Faça uma captura de ecrã e uma pesquisa reversa de imagens. Anote a data mais antiga que conseguir encontrar e se ela corresponde à história da publicação.",
          youCanNow: "fazer uma pesquisa reversa de imagens e dizer se uma fotografia real está a ser usada com uma história falsa.",
          quickCheck: [
            { objective: "O3", q: "O que usa uma pesquisa reversa de imagens para pesquisar?", options: ["Uma palavra que escreve", "Um número de telefone", "Uma gravação de voz", "Uma imagem"], answer: 3, why: "Uma pesquisa reversa de imagens procura outras cópias de uma imagem." },
            { objective: "O3", q: "Uma pesquisa reversa mostra que uma fotografia da \"tempestade de hoje\" apareceu pela primeira vez há cinco anos. O que decide?", options: ["A publicação é enganadora", "A publicação é verdadeira", "A fotografia é falsa", "A pesquisa reversa está avariada"], answer: 0, why: "Uma fotografia real e antiga partilhada como nova é enganadora." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Verificar o que vê",
        questions: [
          { objective: "O1", q: "Uma publicação deixa-o muito zangado. Qual é o melhor primeiro passo?", options: ["Partilhá-la logo", "Parar e verificar antes de partilhar", "Comentar todo em maiúsculas", "Reencaminhá-la para toda a família"], answer: 1, why: "Os sentimentos fortes são o sinal para parar e verificar." },
          { objective: "O2", q: "O que quer dizer leitura lateral?", options: ["Ler com cuidado a página \"Sobre nós\" do site", "Ler só os títulos", "Ler os comentários", "Sair do site para ver o que outras fontes dizem sobre ele"], answer: 3, why: "Os verificadores de factos leem para os lados, em novos separadores." },
          { objective: "O2", q: "Um site novo com um logótipo profissional dá uma notícia enorme que mais ninguém tem. O que deve fazer?", options: ["Procurar a notícia em duas fontes de confiança", "Acreditar; o logótipo parece oficial", "Partilhar para os outros decidirem", "Pagar para ler mais"], answer: 0, why: "Uma grande notícia deve ser confirmada por fontes de confiança." },
          { objective: "O3", q: "O que uma pesquisa reversa de imagens o ajuda a encontrar?", options: ["A palavra-passe do fotógrafo", "Quem gostou da fotografia", "Onde mais uma imagem aparece na internet e quando apareceu pela primeira vez", "Uma câmara melhor"], answer: 2, why: "Ela segue uma imagem até à sua origem." },
          { objective: "O3", q: "Uma fotografia real de uma cheia de 2015 é partilhada como sendo de \"hoje\". A publicação é:", options: ["Verdadeira, porque a fotografia é real", "Enganadora", "Um deepfake", "Uma verificação de factos"], answer: 1, why: "Uma fotografia real com uma história falsa é enganadora." }
        ]
      }
    },
    {
      name: "Capítulo 2: Falsificações com IA, burlas e a sua própria mente",
      lessons: [
        {
          objectives: ["O4"],
          title: "Reconhecer deepfakes e falsificações feitas com IA",
          minutes: 5,
          goal: "Verificar uma imagem, um vídeo ou uma voz que pode ter sido feito com IA.",
          text: [
            "As ferramentas de IA conseguem agora fazer imagens, vídeos e vozes que parecem e soam reais. Um deepfake pode mostrar uma pessoa famosa a dizer algo que nunca disse. Uma clonagem de voz pode copiar um familiar a partir de um pequeno excerto da sua voz.",
            "Truques antigos, como contar os dedos ou procurar orelhas desfocadas, ainda apanham algumas falsificações, mas as ferramentas mais novas cometem menos erros, por isso não confie só na aparência. Verifique antes o contexto. Quem publicou primeiro? Está na conta verdadeira e oficial da pessoa ou da organização? Órgãos de notícias de confiança falam disso? Algumas plataformas e ferramentas de IA põem etiquetas ou marcas escondidas nos conteúdos feitos com IA, mas muitas falsificações não têm nenhuma, por isso a falta de etiqueta não prova que algo é real.",
            "Para chamadas e mensagens de voz, o conselho da FTC (a agência de proteção do consumidor dos EUA) é simples: não confie na voz. Se um \"neto\" ou um \"chefe\" liga a pedir dinheiro ou segredos, desligue e ligue de volta para um número que já conhece. Algumas famílias combinam uma palavra-código para emergências."
          ],
          steps: ["Tenha ainda mais cuidado com vídeos chocantes, excertos de famosos e mensagens de voz urgentes.", "Não confie só na aparência.", "Verifique quem publicou primeiro e se está na conta oficial verdadeira.", "Procure notícias de confiança sobre isso.", "Para vozes: desligue e ligue de volta para um número que conhece."],
          words: [["Deepfake", "um vídeo, imagem ou áudio falso feito com IA para parecer ou soar como uma pessoa real."], ["Clonagem de voz", "uma cópia da voz de alguém feita com IA."], ["Gerado por IA", "feito por uma ferramenta de IA em vez de gravado da vida real."]],
          slides: [
            { title: "A IA consegue falsificar", bullets: ["Imagens, vídeos e vozes", "Pessoas famosas a dizer coisas que nunca disseram", "Vozes copiadas a partir de um pequeno excerto"] },
            { title: "Não confie só na aparência", bullets: ["Mãos estranhas ou partes desfocadas apanham algumas falsificações", "As ferramentas mais novas cometem menos erros", "Sem etiqueta não quer dizer real"] },
            { title: "Verifique o contexto", bullets: ["Quem publicou primeiro?", "Está na conta oficial verdadeira?", "Órgãos de confiança falam disso?"] },
            { title: "Vozes: não confie na voz", bullets: ["Desligue", "Ligue de volta para um número que conhece", "Pense numa palavra-código da família"] }
          ],
          sources: [
            { name: "Alerta ao consumidor da FTC: burlões usam IA para melhorar os seus esquemas de emergência familiar", url: "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes" }
          ],
          tryIt: "Encontre um vídeo ou uma imagem viral de uma pessoa famosa. Verifique quem publicou primeiro, se aparece na conta oficial dessa pessoa e se órgãos de notícias de confiança falam disso. Depois combine uma palavra-código da família com alguém de quem gosta.",
          youCanNow: "verificar uma possível falsificação feita com IA pelo seu contexto e proteger-se de vozes clonadas.",
          quickCheck: [
            { objective: "O4", q: "Para que serve uma palavra-código da família?", options: ["Entrar no seu banco", "Confirmar que quem liga é mesmo o seu familiar", "Entrar num grupo de conversa", "Fazer vozes com IA"], answer: 1, why: "Uma palavra-código ajuda a confirmar quem liga quando uma voz pode ser falsificada." },
            { objective: "O4", q: "Um vídeo mostra uma pessoa famosa a dizer algo chocante. O que faria?", options: ["Partilhá-lo porque parece real", "Decidir olhando bem para a cara", "Achar que é falso e partilhar isso", "Verificar primeiro a conta oficial e as notícias de confiança"], answer: 3, why: "Verifique a fonte e as notícias de confiança; a aparência sozinha não chega." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Burlas que usam notícias falsas",
          minutes: 5,
          goal: "Reconhecer notícias e anúncios falsos que na verdade são burlas.",
          text: [
            "Muitas burlas disfarçam-se de notícias. Um artigo falso mostra uma pessoa famosa a \"revelar\" um investimento para enriquecer depressa, uma cura milagrosa ou um pagamento gratuito do governo, com um link para se inscrever. Pedidos falsos de caridade aparecem logo depois de desastres. Anúncios falsos nas redes sociais prometem descontos enormes \"por tempo limitado\". Algumas notícias falsas usam vídeos feitos com IA de famosos ou de apresentadores de notícias.",
            "Sinais de alerta: apressa você; promete muito dinheiro, uma cura ou um prémio; pede para pagar com cartões-presente, transferências bancárias ou criptomoedas; pede palavras-passe, códigos ou números de identificação; ou o link vai para um site que não é o verdadeiro. A FTC diz que só os burlões lhe dizem para comprar um cartão-presente para lhes pagar.",
            "O que fazer: não clique no link. Vá ao site da organização verdadeira escrevendo você mesmo o endereço, ou ligue para um número que já conhece. Dê a organizações de caridade que pode verificar. Se você ou alguém próximo perdeu dinheiro, contacte o seu banco imediatamente e denuncie a burla à FTC em ReportFraud.ftc.gov (nos EUA)."
          ],
          steps: ["Esteja atento a publicações com ar de notícia que vendem algo ou pedem dinheiro.", "Procure sinais de alerta: pressa, grandes promessas, cartões-presente, transferência ou cripto, códigos.", "Não clique no link.", "Escreva você mesmo o site verdadeiro ou ligue para um número que conhece.", "Perdeu dinheiro? Ligue para o seu banco e depois denuncie em ReportFraud.ftc.gov."],
          words: [["Burla", "um truque para roubar dinheiro ou informações."], ["Phishing", "mensagens falsas que tentam fazê-lo clicar num link ou partilhar dados privados."], ["Publicação patrocinada", "um anúncio pago nas redes sociais; pode não ter sido verificado."]],
          slides: [
            { title: "Burlas disfarçadas de notícias", bullets: ["Um famoso \"revela\" um investimento ou uma cura", "Falsas organizações de caridade depois de desastres", "Vídeos com IA de famosos ou apresentadores"] },
            { title: "Sinais de alerta", bullets: ["Apressa você", "Muito dinheiro, uma cura ou um prémio", "Cartões-presente, transferências ou cripto", "Pede palavras-passe, códigos ou números de identificação"] },
            { title: "O que fazer", bullets: ["Não clique no link", "Escreva você mesmo o site verdadeiro", "Ligue para um número que já conhece"] },
            { title: "Perdeu dinheiro?", bullets: ["Ligue já para o seu banco", "Denuncie em ReportFraud.ftc.gov (EUA)"] }
          ],
          sources: [
            { name: "FTC: Evitar e denunciar burlas com cartões-presente", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" },
            { name: "FTC: Pessoas que fingem ser do governo ou de empresas", url: "https://consumer.ftc.gov/government-business-impersonators" },
            { name: "FTC: ReportFraud (denunciar fraudes)", url: "https://reportfraud.ftc.gov/" }
          ],
          tryIt: "Procure nas suas redes sociais ou mensagens um anúncio ou publicação que promete dinheiro, uma cura ou um grande desconto. Faça a lista de todos os sinais de alerta que vê. Se for uma burla, use o menu da plataforma para a denunciar.",
          youCanNow: "reconhecer burlas que parecem notícias, evitar os seus links e saber onde as denunciar.",
          quickCheck: [
            { objective: "O5", q: "Qual é um sinal de que uma publicação é uma burla?", options: ["Pede para pagar com cartões-presente", "Leva a um endereço .gov verdadeiro que escreveu você mesmo", "Dá tempo para pensar", "Vem de uma organização de caridade que conhece e em que confia"], answer: 0, why: "Pedir pagamentos com cartões-presente é um sinal claro de burla." },
            { objective: "O5", q: "Um anúncio diz que um médico famoso encontrou uma cura milagrosa e que tem de comprar hoje. O que faria?", options: ["Comprar antes que esgote", "Partilhar com amigos doentes", "Confirmar com o seu médico ou com fontes oficiais de saúde e denunciar o anúncio", "Dar o número do seu cartão para saber mais"], answer: 2, why: "As afirmações sobre saúde verificam-se com um médico ou uma fonte oficial, e as burlas devem ser denunciadas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Os preconceitos no seu próprio pensamento",
          minutes: 5,
          goal: "Notar quando as suas próprias crenças ou sentimentos estão a guiar o que aceita como verdade.",
          text: [
            "As falsificações mais difíceis de apanhar são as que queremos acreditar. O viés de confirmação quer dizer que aceitamos depressa o que combina com o que já pensamos e procuramos muito os problemas no que não combina. Todos fazemos isto, seja qual for a idade, a origem ou a posição política.",
            "As redes sociais podem torná-lo mais forte. Os feeds mostram-nos mais daquilo em que já clicamos, por isso podemos acabar por ver só um lado. Uma publicação partilhada por um amigo parece de confiança, mas o seu amigo também pode não a ter verificado.",
            "Três hábitos ajudam. Pergunte: \"Acreditaria nisto se fosse sobre o outro lado?\" Pergunte: \"Que provas me fariam mudar de ideia?\" E vá procurar uma fonte de confiança que possa discordar. Mudar de ideia quando os factos mudam é uma força, não uma fraqueza. Antes de partilhar, dê uma última olhadela: é verdade, é útil e é justo?"
          ],
          steps: ["Note quando uma publicação parece \"mesmo certa\" para o que já pensa.", "Pergunte: acreditaria nisto se fosse sobre o outro lado?", "Pergunte: que provas me fariam mudar de ideia?", "Procure uma fonte de confiança que possa discordar.", "Antes de partilhar: é verdade, útil e justo?"],
          words: [["Preconceito (viés)", "uma inclinação que pode empurrar o nosso pensamento para um lado sem darmos conta."], ["Viés de confirmação", "aceitar o que combina com as nossas crenças e duvidar do que não combina."], ["Câmara de eco", "um lugar onde só ouve opiniões iguais às suas."]],
          slides: [
            { title: "Acreditamos no que queremos", bullets: ["Viés de confirmação: um sim fácil ao que combina", "Olhar duro para o que não combina", "Todos fazemos isto"] },
            { title: "Os feeds tornam-no mais forte", bullets: ["Mostram mais daquilo em que clicamos", "Podemos ver só um lado", "Os amigos também partilham sem verificar"] },
            { title: "Três hábitos", bullets: ["\"Acreditaria nisto se fosse sobre o outro lado?\"", "\"Que provas me fariam mudar de ideia?\"", "Procure uma fonte de confiança que discorde"] },
            { title: "Antes de partilhar", bullets: ["É verdade?", "É útil?", "É justo?"] }
          ],
          tryIt: "Tarefa final: pegue numa publicação surpreendente e verifique-a com todos os passos deste curso. Escreva uma conclusão de três frases (verdadeiro, falso, enganador ou ainda não sei) com as suas provas, e anote uma forma como os seus próprios sentimentos o podem ter puxado.",
          youCanNow: "verificar uma publicação do início ao fim e notar quando os seus próprios preconceitos o estão a puxar.",
          quickCheck: [
            { objective: "O6", q: "O que é uma câmara de eco?", options: ["Um lugar onde só ouve opiniões como as suas", "Uma sala com som alto", "Um site de verificação de factos", "Um tipo de ferramenta de IA"], answer: 0, why: "Numa câmara de eco ouve sobretudo o que já pensa." },
            { objective: "O6", q: "Uma publicação sobre um político de quem não gosta deixa-o contente e quer partilhá-la. O que faria?", options: ["Partilhá-la porque combina com o que pensa", "Partilhá-la com uma piada", "Perguntar se acreditaria nela sobre o outro lado, e verificá-la", "Ignorar todas as notícias daqui em diante"], answer: 2, why: "Fazer essa pergunta ajuda a apanhar os seus próprios preconceitos antes de partilhar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Falsificações com IA, burlas e a sua própria mente",
        questions: [
          { objective: "O4", q: "Recebe uma chamada com a voz do seu neto a pedir dinheiro já. O que deve fazer?", options: ["Enviar o dinheiro depressa", "Pedir os dados bancários dele", "Desligar e ligar-lhe de volta para um número que conhece", "Comprar cartões-presente como pedido"], answer: 2, why: "As vozes podem ser clonadas; ligue de volta para um número conhecido." },
          { objective: "O4", q: "Um vídeo chocante de um famoso não tem a etiqueta \"IA\". Isso quer dizer:", options: ["É de certeza real", "É de certeza falso", "O famoso aprovou-o", "Ainda nada; verifique quem publicou primeiro e se órgãos de confiança falam disso"], answer: 3, why: "Muitas falsificações não têm etiqueta; verifique o contexto." },
          { objective: "O5", q: "Uma publicação com ar de notícia diz que uma pessoa famosa encontrou um investimento secreto e pede-lhe para se inscrever. Isto é muito provavelmente:", options: ["Uma burla", "Um programa do governo", "Uma verificação de factos", "Uma notícia de última hora"], answer: 0, why: "Histórias falsas de famosos com investimentos são uma burla comum." },
          { objective: "O5", q: "Onde é que as pessoas nos EUA podem denunciar uma burla?", options: ["Nos comentários do burlão", "ReportFraud.ftc.gov", "Respondendo à SMS da burla", "Em lado nenhum"], answer: 1, why: "A FTC recolhe as denúncias de burlas em ReportFraud.ftc.gov." },
          { objective: "O6", q: "Viés de confirmação quer dizer:", options: ["Verificar todos os factos", "Duvidar de tudo", "Aceitar o que combina com o que já pensamos", "Ler só as notícias"], answer: 2, why: "Aceitamos mais facilmente o que combina com as nossas crenças." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Pensamento Crítico e Como Reconhecer a Desinformação",
    questions: [
      { objective: "O1", q: "Informação errada (misinformation) é:", options: ["Sempre feita de propósito", "Informação falsa que as pessoas podem partilhar pensando que é verdade", "Só na televisão", "Notícias verdadeiras"], answer: 1, why: "A informação errada pode ser partilhada por um erro honesto." },
      { objective: "O1", q: "Que sentimento é um sinal para parar e verificar?", options: ["Sentir-se aborrecido", "Sentir sono", "Sentir fome", "Sentir raiva ou muito entusiasmo com uma publicação"], answer: 3, why: "As publicações falsas espalham-se com emoções fortes." },
      { objective: "O1", q: "O que quer dizer o S de SIFT?", options: ["Stop: Parar", "Share: Partilhar", "Search: Pesquisar", "Save: Guardar"], answer: 0, why: "O SIFT começa por Stop, Parar." },
      { objective: "O1", q: "Não tem a certeza de que uma publicação é verdade. A escolha mais segura é:", options: ["Partilhá-la com um aviso", "Partilhá-la duas vezes", "Esperar e ainda não partilhar", "Acrescentar o seu palpite"], answer: 2, why: "Não partilhar é sempre uma opção." },
      { objective: "O2", q: "Porque é que a própria página \"Sobre nós\" de um site não chega para confiar nele?", options: ["É sempre comprida demais", "Os sites falsos podem escrever o que quiserem sobre si próprios", "Está em letra pequena", "Custa dinheiro ler"], answer: 1, why: "Precisa do que os outros dizem sobre o site." },
      { objective: "O2", q: "Qual é uma organização de verificação de factos?", options: ["Um blogue qualquer", "Um anúncio que aparece no ecrã", "Reuters Fact Check", "Uma mensagem em corrente"], answer: 2, why: "A Reuters Fact Check é um verificador de factos conhecido." },
      { objective: "O2", q: "Os sites oficiais do governo dos EUA costumam acabar em:", options: [".gov", ".win", ".xyz", ".shop"], answer: 0, why: "Os sites do governo dos EUA usam .gov." },
      { objective: "O2", q: "Uma publicação sobre saúde diz que uma fruta cura a diabetes. Com quem deve verificar?", options: ["Os comentários da publicação", "A pessoa que vende a fruta", "Um amigo que a partilhou", "O seu médico ou fontes oficiais de saúde"], answer: 3, why: "As afirmações sobre saúde precisam de um médico ou de uma fonte oficial." },
      { objective: "O3", q: "Em google.com, como começa uma pesquisa com uma imagem?", options: ["Escreve a palavra imagem", "Clica no ícone da câmara e carrega a imagem", "Liga para a Google", "Imprime a imagem"], answer: 1, why: "O ícone da câmara abre a pesquisa por imagem." },
      { objective: "O3", q: "No Chrome, clicar com o botão direito numa imagem deixa-o escolher:", options: ["Pesquisar com o Google Lens", "Apagar a internet", "Comprar a imagem", "Enviá-la a todos"], answer: 0, why: "O Chrome oferece Pesquisar com o Google Lens nas imagens." },
      { objective: "O3", q: "Nos resultados da pesquisa reversa, o que procura sobretudo?", options: ["A que tem mais gostos", "A versão mais bonita", "A cópia mais antiga e onde apareceu primeiro", "O maior tamanho"], answer: 2, why: "A primeira aparição mostra a história verdadeira." },
      { objective: "O4", q: "Um deepfake é:", options: ["Um ecrã partido", "Uma fotografia do fundo do mar", "Uma etiqueta de verificação de factos", "Um vídeo, imagem ou áudio falso feito com IA"], answer: 3, why: "Os deepfakes usam IA para imitar pessoas reais." },
      { objective: "O4", q: "Porque não deve confiar só na aparência para reconhecer falsificações feitas com IA?", options: ["As ferramentas de IA mais novas cometem menos erros visíveis", "As falsificações com IA são sempre óbvias", "A aparência nunca importa", "Só os especialistas conseguem ver imagens"], answer: 0, why: "Verificar o contexto funciona melhor à medida que as falsificações melhoram." },
      { objective: "O4", q: "Uma palavra-código da família ajuda-o a:", options: ["Entrar nas redes sociais", "Confirmar que quem liga é mesmo o seu familiar", "Pagar contas", "Desbloquear o telefone"], answer: 1, why: "Uma voz clonada não sabe a palavra-código." },
      { objective: "O5", q: "Que pedido de pagamento é um sinal claro de burla?", options: ["Pagar a sua conta da luz ou da água conhecida no site oficial", "Pagar a uma loja no balcão", "\"Compre cartões-presente e envie-me os números\"", "Uma conta do consultório do seu médico que pode confirmar"], answer: 2, why: "A FTC diz que só os burlões pedem pagamentos com cartões-presente." },
      { objective: "O5", q: "Acabou de acontecer um desastre e uma nova página de caridade pede donativos. O que é sensato?", options: ["Dar a uma organização de caridade que pode verificar e em que confia", "Enviar dinheiro para a página já", "Dar a sua palavra-passe do banco", "Partilhar a página sem verificar"], answer: 0, why: "As falsas organizações de caridade aparecem depois de desastres." },
      { objective: "O5", q: "Uma publicação tem um link para se inscrever num \"pagamento do governo\". O passo mais seguro é:", options: ["Clicar e pôr os seus dados", "Enviar-lhes o seu número de identificação", "Responder a perguntar se é verdade", "Escrever você mesmo o endereço .gov verdadeiro para verificar"], answer: 3, why: "Ir você mesmo ao site oficial evita os links falsos." },
      { objective: "O6", q: "Que pergunta ajuda a apanhar os seus próprios preconceitos?", options: ["\"Quem concorda comigo?\"", "\"Acreditaria nisto se fosse sobre o outro lado?\"", "\"Quão depressa posso partilhar isto?\"", "\"Tem graça?\""], answer: 1, why: "Trocar de lado mostra se os sentimentos o estão a guiar." },
      { objective: "O6", q: "Uma câmara de eco é:", options: ["Uma sala barulhenta", "Um site de verificação de factos", "Um lugar onde só ouve opiniões como as suas", "Um tipo de microfone"], answer: 2, why: "As câmaras de eco escondem outras opiniões." },
      { objective: "O6", q: "Mudar de ideia quando os factos mudam é:", options: ["Uma fraqueza", "Uma força do bom pensamento", "Proibido", "Um sinal de preconceito"], answer: 1, why: "Quem pensa bem segue as provas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      4,
      7,
      10,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Parou e perguntou",
        objective: "O1",
        notYet: "Partilhou ou acreditou sem verificar.",
        meets: "Escreveu quem fez, as provas e o que dizem os outros.",
        exceeds: "Anotou o sentimento que lhe deu vontade de partilhar."
      },
      {
        name: "Fonte verificada",
        objective: "O2",
        notYet: "Confiou na página do próprio site ou só na publicação.",
        meets: "Leu o que pelo menos duas outras fontes dizem sobre o site ou a conta.",
        exceeds: "Encontrou a notícia, ou a falta dela, em órgãos de confiança e verificadores de factos."
      },
      {
        name: "Imagem seguida até à origem",
        objective: "O3",
        notYet: "Não fez pesquisa reversa de uma imagem da publicação.",
        meets: "Fez uma pesquisa reversa de imagens e anotou a data mais antiga encontrada.",
        exceeds: "Explicou se a imagem corresponde ao tempo e ao lugar da publicação."
      },
      {
        name: "Sinais de burla",
        objective: "O5",
        notYet: "Não viu sinais claros de burla, como pressão ou pagamento com cartão-presente.",
        meets: "Fez a lista de todos os sinais de burla, ou confirmou que não havia nenhum.",
        exceeds: "Denunciou-a na plataforma, se era uma burla."
      },
      {
        name: "Conclusão e preconceito",
        objective: "O6",
        notYet: "Nenhuma conclusão clara, ou nenhuma prova dada.",
        meets: "Uma conclusão de três frases com provas e uma decisão sobre partilhar.",
        exceeds: "Também anota como os seus próprios sentimentos ou crenças o podem ter puxado."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que dizem ter verificado uma publicação antes de a partilhar em 30 dias (inquérito de seguimento)",
      "Alunos que combinaram uma palavra-código da família",
      "Alunos que dizem ter evitado ou denunciado uma burla",
      "Alunos que começam outro curso de segurança digital da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com navegador de internet",
      "Acesso a uma pesquisa reversa de imagens, como o Google Lens",
      "Uma publicação, imagem ou mensagem reencaminhada real para verificar",
      "Papel ou uma aplicação de notas para a conclusão",
      "Cerca de 60 minutos no total"
    ],
    facilitatorNotes: [
      "Traga algumas publicações de exemplo seguras (uma fotografia antiga partilhada como nova, um anúncio falso) para os alunos que não querem usar os seus próprios feeds.",
      "Evite discussões políticas na aula; concentre-se nos passos de verificação, não em quem tem razão.",
      "Lembre aos alunos que nunca cliquem em links nem paguem nada em publicações suspeitas durante a prática.",
      "Ajude os idosos a combinar uma palavra-código da família com um familiar durante ou depois da aula.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
