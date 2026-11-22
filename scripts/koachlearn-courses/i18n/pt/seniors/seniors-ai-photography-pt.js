"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-ai-photography.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "seniors-ai-photography-pt",
  lang: "pt",
  translationOf: "seniors-ai-photography",
  category: "Seniors and Technology",
  name: "IA para Fotografia",
  skills: "Tirar fotos nítidas com o telefone, Usar a melhoria automática e a edição, Tirar pequenas distrações com ferramentas de IA, Encontrar fotos com a pesquisa, Fazer um álbum para partilhar com a família",
  outcome: "tirar uma foto nítida com o seu telefone, melhorá-la com ferramentas de edição automáticas e de IA, encontrar fotos antigas com a pesquisa e partilhar um pequeno álbum com a sua família.",
  about: [
    "Este curso é para pessoas mais velhas que gostam de tirar fotos dos netos, do jardim, dos animais, das viagens e das reuniões de família, e querem que fiquem bonitas sem aprender a usar uma câmara complicada.",
    "A câmara e a aplicação de fotos do seu telefone já têm funções de IA: melhoria automática, ferramentas que tiram pequenas distrações e uma pesquisa que encontra \"cão\" ou \"praia\" entre milhares de fotos. Você vai aprender a usá-las e também quando ser honesto sobre fotos editadas.",
    "Cada lição dura cerca de cinco minutos. Tenha o seu telefone ou tablet consigo e pratique com as suas próprias fotos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Tire três fotos de algo de que gosta (uma pessoa, com a autorização dela, um animal, uma planta ou uma refeição). Melhore a melhor com a melhoria automática e mais uma edição, encontre duas fotos antigas com a pesquisa da sua aplicação de fotos e partilhe as três num pequeno álbum ou numa mensagem com um familiar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas que gostam de tirar e partilhar fotos dos netos, dos animais, do jardim, das refeições e das viagens, e que muitas vezes têm caixas de fotos antigas da família em papel.",
    startingPoint: "Sabem tirar uma foto com a câmara do telefone. Muitos acham as suas fotos desfocadas ou escuras, nunca abriram o ecrã de Editar, passam muito tempo a deslizar para encontrar fotos antigas e não sabem bem como partilhar um álbum.",
    gap: "As fotos são uma das principais formas de as famílias ficarem próximas. Fotos nítidas, edições simples com IA, pesquisa rápida, álbuns partilhados e cópias digitais de fotos antigas ajudam as pessoas mais velhas a partilhar e guardar memórias, e pedir autorização e ser honesto sobre as edições com IA mantém a confiança na família.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: um smartphone com câmara; as aplicações de fotos e as ferramentas de IA mudam de telefone para telefone, e alguns telefones não têm borracha de IA",
      "Tempo: cerca de 5 minutos por lição, com calma, e com prática",
      "Autorização: pergunte às pessoas, e aos pais das crianças, antes de partilhar as fotos delas",
      "Honestidade: as edições com IA e as fotos coloridas por IA são identificadas, e os originais são guardados"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando a câmara do seu telefone", action: "tirar uma foto nítida e com boa luz, limpando a lente, segurando o telefone firme, usando boa luz e tocando para focar", standard: "guardando a melhor de algumas fotos" },
    { id: "O2", condition: "Com uma foto no seu telefone", action: "melhorá-la com a melhoria automática, o recorte e o endireitar", standard: "e voltar atrás com Reverter se mudar de ideias" },
    { id: "O3", condition: "Com uma foto que tem uma pequena distração", action: "tirá-la com uma ferramenta de borracha de IA e ser honesto sobre como a foto foi editada", standard: "sem mudar o que aconteceu de verdade de forma a enganar" },
    { id: "O4", condition: "Com uma galeria de fotos com muitas imagens", action: "encontrar fotos pesquisando uma coisa, um lugar ou uma data, e marcar favoritas", standard: "encontrando duas fotos antigas sem deslizar" },
    { id: "O5", condition: "Com várias fotos para partilhar", action: "criar um álbum ou uma mensagem e partilhá-lo com um familiar", standard: "depois de pedir autorização para as fotos de outras pessoas" },
    { id: "O6", condition: "Com uma foto antiga em papel", action: "fazer uma cópia digital e melhorá-la, identificando qualquer versão colorida por IA", standard: "com os cantos direitos, pouco reflexo e o original guardado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tirar e melhorar fotos",
      lessons: [
        {
          objectives: ["O1","O5"],
          title: "Tirar uma foto nítida com o seu telefone",
          minutes: 5,
          goal: "Tirar uma foto nítida e com boa luz com o seu telefone.",
          text: [
            "As boas fotos começam com alguns hábitos simples. Limpe a lente da câmara com cuidado com um pano macio; as dedadas deixam as fotos desfocadas. Segure o telefone com as duas mãos e mantenha os cotovelos junto ao corpo para fotos firmes.",
            "A luz é o mais importante. Vire a pessoa ou a coisa que fotografa para uma janela ou para a luz do dia, com a luz atrás de você, não atrás dela. Toque no ecrã sobre o rosto da pessoa ou a flor que quer nítida; a câmara foca nesse ponto.",
            "Aproxime-se e encha a foto com o que importa. Tire várias fotos em vez de uma; pode guardar a melhor e apagar as outras. Pergunte sempre às pessoas, sobretudo aos pais dos netos, antes de partilhar as fotos delas."
          ],
          steps: ["Limpe a lente com um pano macio.", "Segure o telefone com as duas mãos.", "Ponha a luz atrás de você, virada para o que fotografa.", "Toque no ecrã onde quer a foto nítida.", "Tire várias fotos e guarde a melhor."],
          words: [["Lente", "o pequeno vidro redondo atrás do telefone por onde a câmara vê."], ["Focar", "tornar uma parte da foto nítida e clara."]],
          slides: [
            { title: "Antes de fotografar", bullets: ["Limpe a lente com cuidado", "Segure com as duas mãos, cotovelos junto ao corpo"] },
            { title: "Luz e foco", bullets: ["Luz atrás de você, sobre o que fotografa", "Toque no ecrã para focar"] },
            { title: "Tire a melhor foto", bullets: ["Aproxime-se", "Tire várias, guarde a melhor", "Pergunte antes de partilhar fotos de pessoas"] }
          ],
          tryIt: "Limpe a lente e depois tire três fotos de uma flor, de um animal ou de um objeto perto de uma janela. Toque para focar em cada uma. Olhe para elas e escolha a sua preferida.",
          youCanNow: "tirar uma foto nítida e com boa luz com o seu telefone.",
          quickCheck: [
            { objective: "O1", q: "Porque tocar no ecrã sobre um rosto antes de tirar a foto?", options: ["Afasta a imagem", "Foca a câmara nesse ponto", "Apaga a foto", "Liga o flash"], answer: 1, why: "Tocar no ecrã diz à câmara onde focar, para esse ponto ficar nítido." },
            { objective: "O1", q: "Está a fotografar um amigo dentro de casa. Onde se põe?", options: ["Com a janela atrás do seu amigo", "Num canto escuro", "Com a janela atrás de você, para a luz cair sobre o seu amigo", "Longe, do outro lado da sala"], answer: 2, why: "A luz deve estar virada para quem fotografa, com a luz atrás de você, não atrás da pessoa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Melhoria automática e edições simples",
          minutes: 5,
          goal: "Melhorar uma foto com a melhoria de um toque, o recorte e o endireitar.",
          text: [
            "A sua aplicação de fotos tem um botão Editar. Abra uma foto e toque em Editar. A maioria das aplicações tem um botão automático de um toque, muitas vezes com o desenho de uma varinha mágica, que usa IA para corrigir o brilho, a cor e o contraste num segundo.",
            "A seguir, recorte para tirar o espaço vazio e endireite um horizonte inclinado. Procure a ferramenta de recorte (muitas vezes um quadrado com setas), arraste os cantos para dentro e rode um pouco se for preciso.",
            "Normalmente as edições não estragam o seu original. A maioria das aplicações deixa voltar atrás com Reverter ou Anular. Toque em Concluído ou Guardar quando estiver contente."
          ],
          steps: ["Abra a foto e toque em Editar.", "Toque no botão automático ou da varinha mágica.", "Use a ferramenta de recorte para tirar o espaço vazio.", "Endireite se a foto estiver inclinada.", "Toque em Concluído ou Guardar; use Reverter se mudar de ideias."],
          words: [["Melhorar (Enhance)", "corrigir automaticamente o brilho e a cor de uma foto."], ["Recortar", "cortar as margens de uma foto."]],
          slides: [
            { title: "Um toque para melhorar", bullets: ["Abra a foto, toque em Editar", "Toque no botão automático ou da varinha mágica"] },
            { title: "Recortar e endireitar", bullets: ["Tire o espaço vazio", "Endireite horizontes inclinados"] },
            { title: "Sem estragar nada", bullets: ["A maioria das aplicações guarda o original", "Use Reverter ou Anular", "Toque em Concluído ou Guardar"] }
          ],
          tryIt: "Abra a sua foto preferida da Lição 1. Use a melhoria automática, recorte-a um pouco e guarde-a. Depois compare-a com o original.",
          youCanNow: "melhorar uma foto com a melhoria automática, o recorte e o endireitar.",
          quickCheck: [
            { objective: "O2", q: "O que faz recortar uma foto?", options: ["Corta as margens e o espaço vazio", "Deixa as cores mais vivas", "Partilha a foto", "Apaga a foto"], answer: 0, why: "Recortar tira o espaço vazio para a foto ficar cheia do que importa." },
            { objective: "O2", q: "Fez edições e agora a foto está pior. O que faz?", options: ["Apaga a foto", "Tira uma captura de ecrã", "Faz mais edições", "Toca em Reverter ou Anular para voltar atrás"], answer: 3, why: "Normalmente as edições não estragam o original; Reverter ou Anular trá-lo de volta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ferramentas de IA que tiram distrações",
          minutes: 5,
          goal: "Tirar uma pequena distração de uma foto com uma borracha de IA e saber quando partilhar as edições com honestidade.",
          text: [
            "Muitos telefones e aplicações de fotos mais novos têm uma borracha de IA: você faz um círculo ou pinta por cima de uma coisa pequena que não quer, como um caixote do lixo, um desconhecido ao fundo ou um fio elétrico, e a IA preenche o espaço.",
            "Procure no ecrã de Editar uma ferramenta com um nome como Borracha Mágica, Limpar ou Borracha de Objetos. Os nomes mudam de telefone para telefone, e alguns telefones não a têm. Se o seu não tiver, pergunte a um assistente de IA: \"Como tiro um objeto de uma foto no meu telefone?\" e diga-lhe o modelo do seu telefone.",
            "Pequenas limpezas estão bem para fotos de família. Mas não use a IA para mudar o que aconteceu de verdade numa foto de uma forma que possa enganar as pessoas, e seja honesto se alguém perguntar se uma foto foi editada."
          ],
          steps: ["Abra a foto e toque em Editar.", "Procure uma ferramenta de borracha ou de limpeza.", "Pinte ou faça um círculo à volta da pequena distração.", "Veja o resultado e guarde, ou anule.", "Seja honesto sobre fotos editadas."],
          words: [["Borracha de IA", "uma ferramenta que tira um objeto de uma foto e preenche o fundo."], ["Enganar", "fazer alguém acreditar em algo que não é verdade."]],
          slides: [
            { title: "Apague pequenas distrações", bullets: ["Caixotes do lixo, desconhecidos, fios elétricos", "Pinte ou faça um círculo à volta", "A IA preenche o espaço"] },
            { title: "Encontre a ferramenta", bullets: ["Os nomes mudam de telefone para telefone", "Procure em Editar uma borracha ou limpeza", "Pergunte à IA com o modelo do seu telefone"] },
            { title: "Seja honesto", bullets: ["Pequenas limpezas estão bem", "Não mude o que aconteceu de verdade", "Diga se uma foto foi editada"] }
          ],
          tryIt: "Encontre uma foto com uma pequena distração. Procure em Editar uma ferramenta de borracha ou de limpeza e tente tirá-la. Se o seu telefone não tiver, pergunte a um assistente de IA como fazer no seu modelo.",
          youCanNow: "usar uma borracha de IA para limpar uma foto, e usá-la com honestidade.",
          quickCheck: [
            { objective: "O3", q: "O que faz uma borracha de IA?", options: ["Apaga a foto inteira", "Tira uma coisa pequena que você pinta e preenche o espaço", "Acrescenta pessoas a uma foto", "Põe a foto a preto e branco"], answer: 1, why: "Você pinta ou faz um círculo à volta de uma pequena distração e a IA preenche o espaço." },
            { objective: "O3", q: "O seu neto pergunta se editou a foto da praia. Tirou um caixote do lixo. O que diz?", options: ["Diz que não, que nunca foi editada", "Muda de assunto", "Apaga a foto", "Diz com honestidade que tirou um caixote do lixo"], answer: 3, why: "Pequenas limpezas estão bem, mas seja honesto se alguém perguntar se uma foto foi editada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Tirar e melhorar fotos",
        questions: [
          { objective: "O1", q: "As suas fotos estão desfocadas. Que coisa simples deve experimentar primeiro?", options: ["Abanar o telefone", "Comprar um telefone novo", "Limpar a lente com um pano macio", "Desligar o ecrã"], answer: 2, why: "As dedadas na lente deixam as fotos desfocadas." },
          { objective: "O1", q: "Onde deve estar a luz para um bom retrato?", options: ["Sobre a pessoa, atrás de você", "Atrás da pessoa", "Em lado nenhum", "Debaixo da mesa"], answer: 0, why: "A luz no rosto mostra-o com clareza." },
          { objective: "O1", q: "O que faz tocar no ecrã antes de fotografar?", options: ["Envia a foto", "Apaga a foto", "Liga a música", "Foca nesse ponto"], answer: 3, why: "Tocar diz à câmara onde focar." },
          { objective: "O2", q: "O que faz normalmente o botão da varinha mágica ou automático?", options: ["Apaga a foto", "Corrige o brilho e a cor com um toque", "Partilha-a com toda a gente", "Imprime-a"], answer: 1, why: "É uma melhoria com IA de um toque." },
          { objective: "O3", q: "Quando NÃO está bem usar uma borracha de IA?", options: ["Para tirar um caixote do lixo", "Para mudar o que aconteceu de verdade de forma a enganar", "Para tirar um fio elétrico", "Para arrumar uma foto de família"], answer: 1, why: "As edições não devem enganar as pessoas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar, organizar e partilhar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar fotos com a pesquisa",
          minutes: 5,
          goal: "Encontrar fotos antigas escrevendo uma palavra na pesquisa da sua aplicação de fotos.",
          text: [
            "Se tem milhares de fotos, deslizar cansa. Aplicações de fotos como o Apple Fotos e o Google Fotos usam IA para reconhecer o que há nas suas fotos, por isso pode pesquisar \"cão\", \"praia\", \"bolo de aniversário\" ou \"neve\".",
            "Abra a sua aplicação de fotos, toque em Pesquisar (muitas vezes uma lupa) e escreva uma palavra. Também pode pesquisar por lugar (\"Florida\") ou por mês e ano (\"julho 2019\"). Muitas aplicações conseguem juntar as fotos do mesmo rosto para você dar nome às pessoas; isto é opcional e pode desligá-lo nas definições.",
            "Use as favoritas para manter as suas melhores fotos juntas: toque no coração de uma foto e depois encontre todas as favoritas num só álbum."
          ],
          steps: ["Abra a sua aplicação de fotos.", "Toque em Pesquisar ou na lupa.", "Escreva uma coisa, um lugar ou uma data.", "Toque no coração das fotos de que gosta para as tornar favoritas."],
          words: [["Álbum", "um grupo de fotos guardadas juntas, como uma página de um livro de fotos."], ["Favoritas", "fotos que marca com um coração para as encontrar depressa."]],
          slides: [
            { title: "Deixe a IA encontrar as suas fotos", bullets: ["Pesquise \"cão\", \"praia\", \"bolo de aniversário\"", "Ou um lugar, ou um mês e ano"] },
            { title: "Como pesquisar", bullets: ["Abra a sua aplicação de fotos", "Toque na lupa", "Escreva uma palavra"] },
            { title: "Guarde as melhores", bullets: ["Toque no coração para as favoritas", "Juntar rostos é opcional"] }
          ],
          tryIt: "Pesquise duas coisas na sua aplicação de fotos, como \"flor\" e um lugar que visitou. Marque uma foto de cada pesquisa como favorita.",
          youCanNow: "encontrar fotos antigas com a pesquisa e guardar as melhores como favoritas.",
          quickCheck: [
            { objective: "O4", q: "Como uma aplicação de fotos encontra todas as suas fotos de neve?", options: ["A IA reconhece o que há nas suas fotos, por isso pode pesquisar \"neve\"", "Pergunta à sua família", "Lê os nomes de ficheiro que escreveu", "Não consegue; tem de deslizar"], answer: 0, why: "As aplicações de fotos usam IA para reconhecer as coisas nas fotos, por isso pode pesquisar com uma palavra." },
            { objective: "O4", q: "Quer encontrar as fotos da sua viagem em julho de 2019. O que escreve na Pesquisa?", options: ["\"Fotos\"", "\"julho 2019\"", "\"Câmara\"", "Nada; desliza em vez disso"], answer: 1, why: "Pode pesquisar por mês e ano, por lugar ou por uma coisa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer e partilhar um álbum",
          minutes: 6,
          goal: "Criar um álbum e partilhá-lo com a família.",
          text: [
            "Um álbum é um conjunto de fotos sobre um tema, como \"Verão no lago\" ou \"O primeiro ano da Emma\". Fazer um é uma forma bonita de partilhar memórias.",
            "Na maioria das aplicações de fotos: escolha várias fotos tocando em Selecionar e depois em cada foto, toque no botão Partilhar ou no sinal de mais e escolha juntá-las a um álbum novo ou a um álbum partilhado. Dê-lhe um nome. Um álbum partilhado deixa os familiares que você convida ver as fotos e, muitas vezes, juntar as suas.",
            "Também pode simplesmente enviar algumas fotos numa mensagem de texto ou por e-mail. Antes de partilhar fotos dos netos, pergunte aos pais se está bem e com quem pode partilhar."
          ],
          steps: ["Toque em Selecionar e escolha várias fotos.", "Toque em Partilhar ou no sinal de mais.", "Escolha um álbum novo ou um álbum partilhado e dê-lhe um nome.", "Convide familiares pelo nome, número de telefone ou e-mail.", "Pergunte aos pais antes de partilhar fotos de crianças."],
          words: [["Álbum partilhado", "um álbum que as pessoas que você convida podem ver e, muitas vezes, juntar fotos."], ["Selecionar", "escolher várias coisas de uma vez."]],
          slides: [
            { title: "Um álbum conta uma história", bullets: ["\"Verão no lago\"", "\"O primeiro ano da Emma\""] },
            { title: "Faça um", bullets: ["Toque em Selecionar, escolha as fotos", "Toque em Partilhar ou +", "Álbum novo ou partilhado, e dê-lhe um nome"] },
            { title: "Partilhe com cuidado", bullets: ["Convide familiares", "Ou envie algumas por mensagem ou e-mail", "Pergunte aos pais antes de partilhar fotos de crianças"] }
          ],
          tryIt: "Faça um álbum com cinco fotos favoritas e um nome claro. Partilhe-o, ou envie duas das fotos, com um familiar.",
          youCanNow: "fazer um álbum de fotos e partilhá-lo com a família.",
          quickCheck: [
            { objective: "O5", q: "O que é um álbum partilhado?", options: ["Um livro de fotos em papel", "Fotos que só você pode ver", "Um álbum que os familiares que convida podem ver e, muitas vezes, juntar fotos", "Uma lista de favoritas"], answer: 2, why: "Um álbum partilhado deixa as pessoas que convida ver as fotos e, muitas vezes, juntar as suas." },
            { objective: "O5", q: "Quer partilhar fotos da sua neta num álbum de família. O que faz primeiro?", options: ["Pergunta aos pais dela se está bem e com quem pode partilhar", "Publica-as para toda a gente", "Partilha-as com todos os seus contactos", "Tira o rosto dela com edição"], answer: 0, why: "Pergunte aos pais antes de partilhar fotos de crianças." }
          ]
        },
        {
          objectives: ["O6","O2"],
          title: "Passar fotos antigas em papel para o telefone",
          minutes: 5,
          goal: "Transformar uma foto antiga em papel numa cópia digital e melhorá-la.",
          text: [
            "Muitas famílias têm caixas de fotos antigas em papel. Pode fazer cópias digitais para partilhar e guardar em segurança, usando só o seu telefone.",
            "Ponha a foto deitada perto de uma janela, fora do sol direto, e tire uma foto mesmo de cima para os cantos ficarem direitos. Aplicações de digitalização gratuitas, como o PhotoScan da Google, são feitas para isto e reduzem o reflexo. Depois use a melhoria automática e o recorte, como na Lição 2.",
            "Algumas aplicações usam IA para colorir ou reparar fotos antigas. Pode ser divertido, mas as cores são um palpite da IA, não o que aconteceu de verdade. Guarde também a digitalização original e diga que as cópias coloridas são coloridas quando as partilhar. Pode pedir a um assistente de IA ajuda para escrever uma pequena legenda com os nomes e o ano."
          ],
          steps: ["Ponha a foto deitada, com luz do dia suave.", "Segure o telefone mesmo por cima.", "Tire a foto, ou use uma aplicação de digitalização para reduzir o reflexo.", "Melhore e recorte.", "Guarde o original; identifique qualquer cópia colorida por IA."],
          words: [["Digitalizar", "fazer uma cópia digital de uma foto ou de um documento em papel."], ["Reflexo", "um brilho forte numa foto, da luz que bate nela."], ["Colorir", "pôr cor numa foto a preto e branco."]],
          slides: [
            { title: "Salve as suas fotos antigas", bullets: ["Faça cópias digitais para partilhar e guardar em segurança"] },
            { title: "Como copiar", bullets: ["Deitada, com luz do dia suave", "Telefone mesmo por cima", "Uma aplicação de digitalização reduz o reflexo"] },
            { title: "Colorir com IA", bullets: ["As cores são um palpite", "Guarde a digitalização original", "Identifique as cópias coloridas"] }
          ],
          tryIt: "Tarefa final: tire três fotos novas de algo de que gosta, melhore a melhor com a melhoria automática e mais uma edição, encontre duas fotos antigas com a pesquisa e partilhe as três num pequeno álbum ou numa mensagem com a família. Se tiver uma foto antiga em papel, junte também uma cópia digitalizada.",
          youCanNow: "tirar, melhorar, encontrar, organizar e partilhar fotos, incluindo cópias de fotos antigas da família.",
          quickCheck: [
            { objective: "O6", q: "O que é o reflexo numa foto de uma foto em papel?", options: ["Um rosto desfocado", "Um brilho forte da luz sobre a foto", "Uma marca de recorte", "Um canto que falta"], answer: 1, why: "O reflexo é um brilho forte; aplicações de digitalização como o PhotoScan ajudam a reduzi-lo." },
            { objective: "O6", q: "Uma aplicação coloriu a foto do casamento dos seus pais. Como a partilha?", options: ["Diz que sempre foi a cores", "Apaga o original a preto e branco", "Diz que é colorida e guarda a digitalização original", "Não diz a ninguém"], answer: 2, why: "As cores da IA são um palpite, por isso identifique as cópias coloridas e guarde o original." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Encontrar, organizar e partilhar",
        questions: [
          { objective: "O4", q: "Como encontra depressa todas as suas fotos de praia?", options: ["Pergunta a um desconhecido", "Desliza durante uma hora", "Apaga as outras fotos", "Pesquisa \"praia\" na sua aplicação de fotos"], answer: 3, why: "A pesquisa com IA reconhece o que há nas fotos." },
          { objective: "O4", q: "O que faz tocar no coração de uma foto?", options: ["Marca-a como favorita", "Apaga-a", "Publica-a para toda a gente", "Imprime-a"], answer: 0, why: "As favoritas ficam juntas para serem fáceis de encontrar." },
          { objective: "O5", q: "O que é um álbum partilhado?", options: ["Um livro em papel", "Um álbum apagado", "Um álbum que as pessoas que convida podem ver", "Uma lista de palavras-passe"], answer: 2, why: "Os álbuns partilhados deixam a família ver e juntar fotos." },
          { objective: "O5", q: "Antes de partilhar fotos dos netos, deve:", options: ["Nada", "Publicá-las em todo o lado", "Imprimi-las para desconhecidos", "Perguntar aos pais deles"], answer: 3, why: "Os pais decidem com quem se partilham as fotos dos filhos." },
          { objective: "O6", q: "Uma aplicação de IA colore uma foto antiga a preto e branco. As cores são:", options: ["Tiradas do filme original", "Exatamente o que aconteceu", "Um palpite da IA", "Sempre certas"], answer: 2, why: "Colorir é um palpite; guarde o original e identifique a cópia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Fotografia",
    questions: [
      { objective: "O1", q: "A lente é:", options: ["O ecrã", "O pequeno vidro por onde a câmara vê", "A bateria", "O carregador"], answer: 1, why: "A lente recebe a imagem." },
      { objective: "O1", q: "Para fotos firmes, segure o telefone:", options: ["Com as duas mãos, cotovelos junto ao corpo", "Com um dedo", "Por cima da cabeça", "Ao contrário"], answer: 0, why: "As duas mãos mantêm-no firme." },
      { objective: "O1", q: "Num retrato, a luz deve estar:", options: ["No rosto da pessoa", "Atrás da pessoa", "Desligada", "Debaixo da pessoa"], answer: 0, why: "A luz no rosto mostra-o com clareza." },
      { objective: "O1", q: "Tirar várias fotos ajuda porque:", options: ["Os telefones precisam de prática", "Pode guardar a melhor", "Poupa a bateria", "Apaga as fotos antigas"], answer: 1, why: "Mais fotos, mais hipóteses de uma ótima." },
      { objective: "O2", q: "Para começar a editar uma foto, toque em:", options: ["Partilhar", "Apagar", "Editar", "Definições"], answer: 2, why: "Editar abre as ferramentas de edição." },
      { objective: "O2", q: "\"Recortar\" quer dizer:", options: ["Apagar", "Pôr cor", "Partilhar", "Cortar as margens"], answer: 3, why: "Recortar apara a foto." },
      { objective: "O2", q: "Se não gostar das suas edições, normalmente pode:", options: ["Comprar o original", "Nunca voltar atrás", "Reverter ou Anular", "Reiniciar o telefone"], answer: 2, why: "A maioria das aplicações guarda o original." },
      { objective: "O3", q: "Uma borracha de IA serve para:", options: ["Tirar uma pequena distração de uma foto", "Apagar toda a sua galeria", "Imprimir fotos", "Ligar à família"], answer: 0, why: "Tira objetos e preenche o espaço." },
      { objective: "O3", q: "O seu telefone parece não ter borracha de IA. Um bom passo é:", options: ["Apagar a aplicação de fotos", "Desistir da fotografia", "Partilhar a sua palavra-passe", "Perguntar a um assistente de IA como fazer no modelo do seu telefone"], answer: 3, why: "Os nomes das ferramentas mudam; a IA pode guiá-lo." },
      { objective: "O3", q: "Usar a IA para mudar o que aconteceu de verdade numa foto para enganar as pessoas é:", options: ["Sempre aceitável", "Enganador e deve ser evitado", "Obrigatório", "Uma função de segurança"], answer: 1, why: "As edições não devem enganar." },
      { objective: "O4", q: "A pesquisa da aplicação de fotos encontra imagens por:", options: ["Só números de ficheiro", "Coisas, lugares e datas", "Só a cor", "Nada"], answer: 1, why: "A IA reconhece o conteúdo, os lugares e as datas." },
      { objective: "O4", q: "Juntar rostos numa aplicação de fotos é:", options: ["Uma palavra-passe", "Obrigatório", "Um vírus", "Opcional e pode ser desligado"], answer: 3, why: "Você escolhe se o usa." },
      { objective: "O5", q: "Um álbum é:", options: ["Um grupo de fotos guardadas juntas", "Uma única foto", "Uma câmara", "Um filtro"], answer: 0, why: "Os álbuns juntam fotos relacionadas." },
      { objective: "O5", q: "Para escolher várias fotos de uma vez, toque em:", options: ["Câmara", "Apagar", "Selecionar", "Definições"], answer: 2, why: "Selecionar deixa escolher muitas fotos." },
      { objective: "O5", q: "Uma forma simples de partilhar algumas fotos é:", options: ["Publicá-las na página de um desconhecido", "Enviar o telefone pelo correio", "Imprimir e mandar por fax", "Enviá-las por mensagem ou e-mail"], answer: 3, why: "As mensagens e os e-mails partilham com facilidade." },
      { objective: "O6", q: "Para copiar uma foto antiga em papel, segure o telefone:", options: ["Atrás da foto", "Muito inclinado", "Mesmo por cima da foto", "Longe, do outro lado da sala"], answer: 2, why: "Mesmo por cima, os cantos ficam direitos." },
      { objective: "O6", q: "O reflexo é:", options: ["Um tipo de álbum", "Um brilho forte da luz sobre a foto", "Um filtro", "Uma palavra-passe"], answer: 1, why: "O reflexo esconde partes da imagem." },
      { objective: "O6", q: "Aplicações de digitalização como o PhotoScan da Google ajudam a:", options: ["Reduzir o reflexo", "Pôr palavras-passe", "Apagar fotos em papel", "Fazer chamadas"], answer: 0, why: "São feitas para copiar bem fotos em papel." },
      { objective: "O6", q: "Quando partilha uma foto colorida por IA, deve:", options: ["Dizer que é colorida e guardar o original", "Dizer que é o original", "Apagar o original", "Escondê-la"], answer: 0, why: "As cores são um palpite; a honestidade importa." },
      { objective: "O6", q: "A IA pode ajudar com a legenda de uma foto antiga:", options: ["Sabendo quem está nela", "Ajudando a escrevê-la depois de você dar os nomes e o ano", "Encontrando as moradas das pessoas", "Adivinhando bem os aniversários delas"], answer: 1, why: "Você dá os factos; a IA ajuda com as palavras." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      4,
      7,
      9,
      10,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Fotos nítidas",
        objective: "O1",
        notYet: "As fotos estão desfocadas ou escuras, ou uma pessoa foi fotografada sem lhe perguntar.",
        meets: "Três fotos nítidas e com boa luz, com a autorização de qualquer pessoa que apareça nelas.",
        exceeds: "O que é fotografado enche a imagem e a melhor foto foi escolhida entre várias."
      },
      {
        name: "Foto melhorada",
        objective: "O2",
        notYet: "Sem edições, ou as edições pioraram a foto.",
        meets: "A melhor foto foi melhorada com a melhoria automática e mais uma edição, como um recorte.",
        exceeds: "Sabe mostrar como reverter a edição e explicar porque a escolheu."
      },
      {
        name: "Fotos antigas encontradas",
        objective: "O4",
        notYet: "Encontrou as fotos só a deslizar muito tempo, ou não as encontrou.",
        meets: "Encontrou duas fotos antigas usando a Pesquisa com uma coisa, um lugar ou uma data.",
        exceeds: "Marcou favoritas para as encontrar facilmente outra vez."
      },
      {
        name: "Partilhado com a família",
        objective: "O5",
        notYet: "As fotos não foram partilhadas, ou foram partilhadas sem autorização.",
        meets: "As três fotos foram partilhadas num pequeno álbum ou numa mensagem com um familiar.",
        exceeds: "Deu ao álbum um nome claro e convidou a família a juntar fotos."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que partilham um álbum de fotos com a família em 30 dias (inquérito de seguimento)",
      "Alunos que digitalizam fotos antigas da família e as partilham",
      "Alunos que começam outro curso de Seniors and Technology em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com câmara e uma aplicação de fotos como o Apple Fotos ou o Google Fotos",
      "Um pano macio para a lente e uma ou duas fotos antigas em papel",
      "Uma aplicação de digitalização gratuita como o PhotoScan da Google (opcional)",
      "Cerca de 60 minutos no total, em sessões curtas e calmas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Junte os alunos por tipo de telefone; as ferramentas de Editar e de borracha têm nomes diferentes em telefones diferentes.",
      "Peça aos alunos para trazerem uma foto antiga em papel para praticarem fazer uma cópia digital.",
      "Dê o exemplo de pedir autorização antes de fotografar ou partilhar fotos de outras pessoas, sobretudo crianças.",
      "Fale sobre a honestidade nas edições com IA e nas fotos coloridas, e sobre guardar os originais.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
