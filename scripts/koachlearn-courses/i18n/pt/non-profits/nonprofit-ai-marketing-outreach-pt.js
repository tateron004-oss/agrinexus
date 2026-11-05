"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-ai-marketing-outreach.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "nonprofit-ai-marketing-outreach-pt",
  lang: "pt",
  translationOf: "nonprofit-ai-marketing-outreach",
  category: "Non Profits",
  name: "IA para Divulgação e Comunicação com a Comunidade",
  skills: "Definir o seu público e a sua mensagem, Escrever publicações para redes sociais com IA, Redigir boletins informativos, Tornar a divulgação clara e acessível, Planear um mês de divulgação",
  outcome: "usar a IA para planear e redigir um mês de divulgação de um programa de uma organização sem fins lucrativos: uma mensagem-chave para um público, quatro publicações para redes sociais, um artigo curto para o boletim informativo e um folheto em linguagem simples, tudo verificado, acessível e com a voz da sua organização.",
  about: [
    "Este curso é para funcionários e voluntários de organizações sem fins lucrativos e de organizações religiosas que tratam das redes sociais, dos boletins informativos, dos folhetos e dos avisos à comunidade, muitas vezes além de todo o resto do trabalho.",
    "Você vai aprender a definir o seu público e a sua mensagem e depois usar a IA para redigir depressa publicações, boletins e folhetos, torná-los claros e acessíveis a todas as pessoas da sua comunidade e planear um mês de divulgação.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa prática que passa a fazer parte do seu plano de divulgação. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Faça um plano de divulgação de um mês para um programa ou evento real. Inclua um público e uma mensagem-chave, quatro publicações para redes sociais com descrições das imagens, um artigo de 200 palavras para o boletim informativo e o texto de um folheto em linguagem simples, tudo redigido com IA, verificado quanto aos factos e à privacidade, e editado para soar como a sua organização. Coloque tudo num calendário simples de quatro semanas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Funcionários e voluntários de organizações sem fins lucrativos e de organizações religiosas que tratam das redes sociais, dos boletins informativos, dos folhetos e dos avisos à comunidade, muitas vezes além de todo o resto do trabalho.",
    startingPoint: "Publicam nas redes sociais e enviam e-mails ou folhetos de vez em quando, normalmente à pressa. Muitos nunca planearam a divulgação com antecedência, nunca escreveram descrições de imagens nem usaram IA para rascunhos.",
    gap: "Uma divulgação feita à pressa, pouco clara ou difícil de ler não chega às pessoas para quem o programa existe, incluindo quem lê noutra língua ou usa um leitor de ecrã. Os alunos precisam de planear depressa, com IA, um mês de divulgação clara, acessível e honesta, sem pôr em risco a privacidade de ninguém.",
    constraints: [
      "Tempo: a divulgação é feita além de outras tarefas, por isso as lições têm cerca de 5 minutos cada",
      "Privacidade: autorização por escrito para fotos de crianças e de utentes; nenhum detalhe que identifique alguém nas histórias sem acordo",
      "As traduções feitas com IA são verificadas por uma pessoa da comunidade que fala bem a língua",
      "Os boletins enviados por e-mail precisam de uma forma clara de cancelar a subscrição",
      "Aparelhos: um telefone ou um computador com ferramentas gratuitas"
    ],
    prerequisites: "\"Introdução à IA para Organizações sem Fins Lucrativos\", ou alguma experiência a usar um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um programa e um público", action: "escrever uma mensagem-chave que diga o que é, porque é importante para esse público e o que fazer a seguir", standard: "em uma ou duas frases" },
    { id: "O2", condition: "Com a sua mensagem-chave", action: "redigir com IA quatro publicações para redes sociais: um anúncio, uma publicação dos bastidores, um agradecimento e um último lembrete", standard: "cada uma curta, a terminar com uma só ação, e usando só fotos e histórias com autorização" },
    { id: "O3", condition: "Com as suas notas sobre o programa", action: "escrever um artigo de 200 palavras para o boletim informativo com uma história, um número verdadeiro e como ajudar", standard: "com todos os números, nomes, datas e citações verificados" },
    { id: "O4", condition: "Com um rascunho de divulgação", action: "reescrevê-lo em linguagem simples e redigir uma tradução para a sua comunidade", standard: "com a tradução verificada por uma pessoa que fala bem a língua antes de a partilhar" },
    { id: "O5", condition: "Com as suas publicações e o seu folheto", action: "escrever texto alternativo e torná-los acessíveis com legendas, contraste e hashtags fáceis de ler", standard: "com um texto alternativo que corresponda ao que está realmente em cada imagem" },
    { id: "O6", condition: "Com as suas peças de divulgação e a data do evento", action: "criar um calendário de divulgação de quatro semanas com a semana, o canal, a peça e quem publica", standard: "com as datas verificadas no seu calendário verdadeiro" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Mensagem e canais",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conhecer o seu público e a sua mensagem",
          minutes: 5,
          goal: "Escrever uma mensagem-chave clara para um público.",
          text: [
            "Uma boa divulgação fala com um grupo de cada vez. Os voluntários, os doadores, as famílias que você apoia, os membros da igreja e os negócios locais interessam-se, cada um, por coisas diferentes.",
            "Uma mensagem-chave diz, em uma ou duas frases, o que você quer que esse público saiba e faça. Exemplo para pais: \"As explicações gratuitas depois das aulas começam a 8 de setembro no centro comunitário. Inscreva-se até 1 de setembro para o seu filho ter lugar.\"",
            "A IA pode ajudar a melhorá-la. Peça: \"Este é o nosso programa: [detalhes públicos]. Escreva três versões de uma mensagem de uma frase para [público]. Cada uma deve dizer o que é, porque é importante para eles e o que fazer a seguir.\""
          ],
          steps: ["Escolha um programa e um público.", "Escreva o que quer que eles saibam e façam.", "Peça à IA três versões de uma frase.", "Escolha a mais clara e edite-a."],
          words: [["Público", "o grupo de pessoas que você está a tentar alcançar."], ["Mensagem-chave", "as uma ou duas frases que você mais quer que o seu público lembre e ponha em prática."]],
          slides: [
            { title: "Um público de cada vez", bullets: ["Voluntários, doadores, famílias, membros", "Cada um interessa-se por coisas diferentes"] },
            { title: "Uma mensagem-chave diz", bullets: ["O que é", "Porque é importante para eles", "O que fazer a seguir"] },
            { title: "Melhore-a com a IA", bullets: ["Peça três versões de uma frase", "Escolha a mais clara", "Edite-a para soar como você"] }
          ],
          tryIt: "Escolha um programa e um público. Use a IA para obter três versões de uma mensagem-chave e depois escreva a sua versão final no topo de uma página com o título \"Plano de divulgação\".",
          youCanNow: "escrever uma mensagem-chave clara para um público.",
          quickCheck: [
            { objective: "O1", q: "Porque é que a divulgação deve falar com um grupo de cada vez?", options: ["Grupos diferentes interessam-se por coisas diferentes", "Fica mais barato imprimir", "As redes sociais só permitem um grupo", "Os doadores e os voluntários são as mesmas pessoas"], answer: 0, why: "Os voluntários, os doadores, as famílias e os negócios interessam-se, cada um, por coisas diferentes." },
            { objective: "O1", q: "A sua mensagem para os voluntários não diz o que fazer a seguir. O que acrescenta?", options: ["Uma história mais longa da organização", "Uma ação clara, como \"Inscreva-se até sexta-feira\"", "Mais hashtags", "Uma lista de todos os programas"], answer: 1, why: "Uma mensagem-chave diz o que é, porque é importante e o que fazer a seguir." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever publicações para redes sociais com IA",
          minutes: 5,
          goal: "Redigir com IA quatro publicações para redes sociais sobre um programa.",
          text: [
            "As publicações nas redes sociais funcionam melhor quando são curtas, mostram um momento real e terminam com uma ação clara. Cada plataforma serve para um tamanho diferente: uma publicação no Facebook pode ser mais longa, uma legenda no Instagram acompanha uma foto, e uma publicação numa plataforma de textos curtos tem de ser breve.",
            "Peça: \"Usando esta mensagem-chave: [mensagem], escreva quatro publicações para [plataforma] ao longo de quatro semanas: um anúncio, uma publicação dos bastidores, um agradecimento a um voluntário ou participante e um último lembrete. Menos de 60 palavras cada, num tom amigável, com um apelo à ação.\"",
            "Use as suas próprias fotos, com autorização. Nunca publique fotos de crianças ou de utentes sem autorização por escrito, e nunca partilhe a história de alguém com detalhes que possam identificá-lo, a não ser que essa pessoa tenha concordado."
          ],
          steps: ["Dê à IA a sua mensagem-chave e a plataforma.", "Peça quatro tipos de publicação ao longo de quatro semanas.", "Edite cada uma para soar como a sua organização.", "Escolha fotos que tem autorização para usar."],
          words: [["Plataforma", "um serviço de rede social, como o Facebook ou o Instagram."], ["Legenda", "o texto que acompanha uma publicação com foto ou vídeo."], ["Autorização", "o acordo de uma pessoa, de preferência por escrito, para aparecer ou ser citada."]],
          slides: [
            { title: "Publicações que funcionam", bullets: ["Curtas", "Um momento real", "Uma ação clara"] },
            { title: "Quatro tipos de publicação", bullets: ["Anúncio", "Bastidores", "Agradecimento", "Último lembrete"] },
            { title: "Fotos e histórias", bullets: ["Use as suas próprias fotos, com autorização", "Autorização por escrito para crianças e utentes"] }
          ],
          tryIt: "Use a IA para redigir quatro publicações para uma plataforma a partir da sua mensagem-chave. Edite-as e acrescente-as ao seu plano de divulgação.",
          youCanNow: "redigir com IA uma série de publicações para redes sociais.",
          quickCheck: [
            { objective: "O2", q: "Que tipo de publicação tem de ser breve?", options: ["Uma publicação no Facebook", "Um artigo do boletim informativo", "Uma publicação numa plataforma de textos curtos", "Um folheto impresso"], answer: 2, why: "Uma publicação numa plataforma de textos curtos tem de ser breve; uma publicação no Facebook pode ser mais longa." },
            { objective: "O2", q: "Um participante partilhou uma história comovente, mas não concordou em ser identificado. Como a publica?", options: ["Publica-a com o nome dele", "Publica a foto dele com a história", "Publica-a e pergunta depois", "Partilha-a só sem detalhes que o identifiquem, ou não a partilha"], answer: 3, why: "Nunca partilhe a história de alguém com detalhes que o identifiquem, a não ser que essa pessoa tenha concordado." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Redigir um artigo para o boletim informativo",
          minutes: 5,
          goal: "Transformar com IA as notas sobre o programa num artigo curto para o boletim informativo.",
          text: [
            "Os boletins informativos mantêm os doadores, os voluntários e os membros perto da organização. Um artigo curto conta uma história: o que aconteceu, quem ajudou (sem detalhes privados), o que isso significa para a missão e o que os leitores podem fazer a seguir.",
            "Dê as suas notas à IA: \"Transforme estas notas num artigo de 200 palavras para o boletim dos nossos apoiantes. Use um título amigável, uma história curta, um número verdadeiro, e termine com como ajudar: [notas].\"",
            "Verifique o número e todos os nomes e datas. Só acrescente uma citação se uma pessoa real a disse e concordou em ser citada. Se envia boletins por e-mail, inclua uma forma clara de cancelar a subscrição e siga as regras da sua ferramenta de e-mail."
          ],
          steps: ["Escreva notas rápidas sobre um momento recente.", "Peça à IA um artigo de 200 palavras com título, história, número e como ajudar.", "Verifique todos os factos e citações.", "Acrescente-o ao seu boletim com uma foto que pode usar."],
          words: [["Boletim informativo", "uma atualização regular enviada aos apoiantes por e-mail ou em papel."], ["Cancelar a subscrição", "um link que deixa alguém deixar de receber os seus e-mails."]],
          slides: [
            { title: "Uma história por artigo", bullets: ["O que aconteceu", "Quem ajudou, sem detalhes privados", "O que os leitores podem fazer"] },
            { title: "O pedido", bullets: ["200 palavras, título amigável", "Uma história, um número verdadeiro", "Termine com como ajudar"] },
            { title: "Antes de enviar", bullets: ["Verifique factos e citações", "Só citações reais, com acordo", "Inclua um link para cancelar a subscrição"] }
          ],
          tryIt: "Escreva cinco linhas de notas sobre um momento recente do programa. Use a IA para as transformar num artigo de 200 palavras para o boletim informativo. Verifique todos os factos.",
          youCanNow: "transformar notas sobre o programa num artigo verificado para o boletim informativo.",
          quickCheck: [
            { objective: "O3", q: "Quantas histórias deve contar um artigo curto do boletim informativo?", options: ["Uma", "Cinco", "Nenhuma", "Todas as que couberem"], answer: 0, why: "Um artigo curto conta uma história." },
            { objective: "O3", q: "O rascunho do boletim feito pela IA tem uma citação de um voluntário que nunca a disse. O que faz?", options: ["Mantém-na; soa bem", "Tira-a, ou pede ao voluntário uma citação real com que ele concorde", "Muda o nome do voluntário", "Passa-a para o fim"], answer: 1, why: "Só acrescente uma citação se uma pessoa real a disse e concordou em ser citada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Mensagem e canais",
        questions: [
          { objective: "O1", q: "O que é uma mensagem-chave?", options: ["Uma ou duas frases que quer que um público lembre e ponha em prática", "O seu relatório anual completo", "Uma palavra-passe", "Uma lista de doadores"], answer: 0, why: "Uma mensagem-chave é curta e leva à ação." },
          { objective: "O1", q: "Qual é a melhor mensagem-chave para pais?", options: ["\"Fazemos muitas coisas.\"", "\"As explicações gratuitas começam a 8 de setembro no centro comunitário. Inscreva-se até 1 de setembro.\"", "\"Saiba mais.\"", "\"Apoie-nos.\""], answer: 1, why: "Diz o quê, porquê e o que fazer a seguir." },
          { objective: "O2", q: "Quer publicar uma foto de crianças no seu programa. Precisa de:", options: ["Nada", "Um filtro", "Autorização por escrito de um pai, mãe ou encarregado de educação", "Uma legenda feita pela IA"], answer: 2, why: "As fotos de crianças precisam de autorização." },
          { objective: "O3", q: "Uma citação num artigo do boletim informativo deve vir de:", options: ["A IA", "Um voluntário inventado", "Uma pessoa famosa com quem nunca falou", "Uma pessoa real que concordou em ser citada"], answer: 3, why: "As citações inventadas são desonestas." },
          { objective: "O3", q: "Porque incluir um link para cancelar a subscrição nos boletins por e-mail?", options: ["Para as pessoas poderem deixar de receber e-mails", "Para receber mais donativos", "É só decoração", "Para partilhar dados"], answer: 0, why: "As pessoas devem poder sair da lista." }
        ]
      }
    },
    {
      name: "Capítulo 2: Chegar a todas as pessoas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Linguagem simples e outras línguas",
          minutes: 5,
          goal: "Usar a IA para reescrever a divulgação em linguagem simples e redigir uma tradução para ser revista.",
          text: [
            "Muitas pessoas da sua comunidade leem numa segunda língua, leem a um nível básico, ou estão ocupadas e só leem por cima. A linguagem simples ajuda toda a gente: frases curtas, palavras comuns e o mais importante primeiro.",
            "Peça: \"Reescreva isto para um nível de leitura do 6.º ano. Frases curtas. Ponha primeiro a data, o lugar e como se inscrever.\" Depois: \"Traduza isto para espanhol para as famílias da nossa comunidade.\"",
            "As traduções feitas pela IA podem estar erradas ou soar estranhas. Peça sempre a uma pessoa da sua comunidade que fale bem a língua para verificar a tradução antes de a partilhar."
          ],
          steps: ["Peça à IA para reescrever o seu texto para um nível de leitura do 6.º ano.", "Ponha primeiro a data, o lugar e a ação.", "Peça uma tradução para uma língua que a sua comunidade usa.", "Peça a uma pessoa que fale bem a língua para a verificar."],
          words: [["Linguagem simples", "uma escrita que as pessoas entendem logo à primeira leitura."], ["Nível de leitura", "o grau de facilidade de leitura de um texto; um ano escolar mais baixo é mais fácil."]],
          slides: [
            { title: "A linguagem simples ajuda toda a gente", bullets: ["Frases curtas, palavras comuns", "O mais importante primeiro"] },
            { title: "Peça à IA", bullets: ["\"Reescreva para um nível de leitura do 6.º ano\"", "\"Traduza isto para espanhol\""] },
            { title: "Verifique as traduções", bullets: ["A IA pode errar", "Uma pessoa da comunidade que fala bem a língua revê"] }
          ],
          tryIt: "Pegue na sua mensagem-chave e numa publicação. Peça à IA para as reescrever em linguagem simples e traduzi-las para uma língua que a sua comunidade usa. Anote quem pode verificar a tradução.",
          youCanNow: "tornar a divulgação simples e redigir traduções para uma pessoa que fala bem a língua verificar.",
          quickCheck: [
            { objective: "O4", q: "O que faz parte da linguagem simples?", options: ["Frases longas", "Palavras técnicas", "Frases curtas e palavras comuns", "O mais importante no fim"], answer: 2, why: "A linguagem simples usa frases curtas, palavras comuns e põe o mais importante primeiro." },
            { objective: "O4", q: "A IA traduziu o seu folheto para vietnamita e ninguém da equipa fala essa língua. O que faz?", options: ["Partilha-o na mesma", "Pede à IA para verificar a própria tradução", "Usa só inglês", "Procura primeiro uma pessoa da sua comunidade que fale bem a língua para o verificar"], answer: 3, why: "As traduções da IA podem estar erradas, por isso uma pessoa da comunidade que fala bem a língua verifica-as antes de as partilhar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tornar a divulgação acessível",
          minutes: 4,
          goal: "Escrever descrições de imagens e tornar as publicações e os folhetos mais fáceis de usar para todos.",
          text: [
            "Uma divulgação acessível funciona para pessoas cegas ou com baixa visão, surdas, ou que usam um leitor de ecrã. O texto alternativo é uma descrição curta de uma imagem que o leitor de ecrã lê em voz alta.",
            "A IA pode redigir o texto alternativo: \"Escreva um texto alternativo com menos de 125 caracteres para uma foto de voluntários a separar latas numa recolha de alimentos.\" Verifique se descreve o que está realmente na foto.",
            "Outras melhorias fáceis: ponha legendas nos vídeos, use um contraste forte de cores nos folhetos, não ponha palavras importantes só dentro de uma imagem, e escreva as hashtags com letra maiúscula em cada palavra (#AlimentarACidade) para que os leitores de ecrã as digam corretamente."
          ],
          steps: ["Escreva texto alternativo para todas as imagens (a IA pode redigi-lo).", "Acrescente legendas aos vídeos.", "Use um contraste forte nos folhetos.", "Mantenha os detalhes principais no texto, não só na imagem.", "Use maiúscula no início de cada palavra das hashtags."],
          words: [["Texto alternativo", "uma descrição escrita e curta de uma imagem, lida em voz alta pelos leitores de ecrã."], ["Leitor de ecrã", "um programa que lê em voz alta o texto do ecrã para pessoas cegas ou com baixa visão."], ["Contraste", "o quanto a cor do texto é diferente da cor do fundo."]],
          slides: [
            { title: "Divulgação acessível", bullets: ["Funciona para pessoas cegas, com baixa visão ou surdas", "O texto alternativo descreve as imagens"] },
            { title: "A IA redige o texto alternativo", bullets: ["Menos de 125 caracteres", "Verifique se corresponde à foto"] },
            { title: "Melhorias fáceis", bullets: ["Legendas nos vídeos", "Contraste forte", "Detalhes principais no texto, não só nas imagens", "#MaiúsculaEmCadaPalavra"] }
          ],
          tryIt: "Escreva texto alternativo para as fotos das suas quatro publicações, com a IA a redigir e você a verificar. Corrija as hashtags para que cada palavra comece com maiúscula.",
          youCanNow: "tornar as publicações e os folhetos acessíveis com texto alternativo, legendas e um desenho claro.",
          quickCheck: [
            { objective: "O5", q: "A quem ajuda o texto alternativo?", options: ["Às pessoas que usam um leitor de ecrã", "Só aos motores de busca", "Só à equipa", "Às pessoas com internet rápida"], answer: 0, why: "Um leitor de ecrã lê o texto alternativo em voz alta para pessoas cegas ou com baixa visão." },
            { objective: "O5", q: "O seu folheto tem a data e o lugar só dentro de uma imagem. O que muda?", options: ["Nada", "Põe os detalhes importantes também no texto", "Aumenta a imagem", "Acrescenta mais imagens"], answer: 1, why: "Os leitores de ecrã não conseguem ler palavras dentro de uma imagem." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Planear um mês de divulgação",
          minutes: 5,
          goal: "Colocar as suas peças de divulgação num calendário de quatro semanas.",
          text: [
            "Um calendário simples mantém a divulgação regular. Liste quatro semanas. Para cada semana, escreva o que sai, em que canal e quem o publica.",
            "A IA pode sugerir um horário: \"Estas são as minhas peças: [lista]. O nosso evento é a [data]. Faça um calendário de divulgação de quatro semanas numa tabela: semana, canal, peça, quem publica.\" Verifique as datas no seu calendário verdadeiro.",
            "Depois, veja o que funcionou: inscrições, comentários, partilhas, respostas. Continue a fazer o que trouxe pessoas."
          ],
          steps: ["Liste as suas peças: publicações, boletim, folheto.", "Peça à IA uma tabela com um calendário de quatro semanas.", "Verifique as datas no seu calendário verdadeiro.", "Decida quem publica cada peça.", "Depois do mês, anote o que trouxe pessoas."],
          words: [["Calendário de conteúdos", "um horário com o que vai publicar ou enviar, e quando."], ["Canal", "uma forma de chegar às pessoas: redes sociais, e-mail, folhetos, avisos."]],
          slides: [
            { title: "Um calendário simples", bullets: ["Quatro semanas", "O que sai, onde e quem publica"] },
            { title: "Peça à IA uma tabela", bullets: ["Semana, canal, peça, quem publica", "Verifique você mesmo as datas"] },
            { title: "Aprenda com os resultados", bullets: ["Inscrições, comentários, partilhas", "Mantenha o que trouxe pessoas"] }
          ],
          tryIt: "Tarefa final: termine o seu plano de divulgação de um mês. Coloque a sua mensagem-chave, as quatro publicações com texto alternativo, o artigo do boletim e o texto do folheto em linguagem simples num calendário de quatro semanas.",
          youCanNow: "planear e redigir com IA um mês de divulgação de uma organização sem fins lucrativos.",
          quickCheck: [
            { objective: "O6", q: "O que vê depois de um mês de divulgação?", options: ["Só quantas publicações fez", "A cor dos folhetos", "Inscrições, comentários, partilhas e respostas", "As publicações de outros grupos"], answer: 2, why: "Veja o que funcionou: inscrições, comentários, partilhas e respostas." },
            { objective: "O6", q: "O calendário da IA põe o último lembrete depois da data do seu evento. O que faz?", options: ["Usa-o como está", "Apaga o lembrete", "Publica-o duas vezes", "Passa-o para antes do evento, verificando as datas no seu calendário verdadeiro"], answer: 3, why: "Verifique as datas da IA no seu calendário verdadeiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Chegar a todas as pessoas",
        questions: [
          { objective: "O4", q: "O que é linguagem simples?", options: ["Escrever sem pontuação", "Uma escrita que as pessoas entendem à primeira", "Frases muito longas", "Só palavras técnicas"], answer: 1, why: "A linguagem simples é clara logo à primeira leitura." },
          { objective: "O4", q: "A IA traduziu o seu folheto para espanhol. Antes de o partilhar, deve:", options: ["Partilhá-lo logo", "Traduzi-lo outra vez com IA", "Pedir a uma pessoa que fala bem a língua para o verificar", "Encurtá-lo"], answer: 2, why: "As traduções da IA podem estar erradas." },
          { objective: "O5", q: "O que é o texto alternativo?", options: ["Uma palavra-passe de reserva", "Uma segunda publicação", "Um tipo de letra", "Uma descrição curta de uma imagem lida pelos leitores de ecrã"], answer: 3, why: "O texto alternativo torna as imagens acessíveis." },
          { objective: "O5", q: "Que hashtag é mais fácil para um leitor de ecrã?", options: ["#AlimentarACidade", "#alimentaracidade", "#ALIMENTARACIDADE", "#a_a_c"], answer: 0, why: "As letras maiúsculas ajudam os leitores de ecrã a dizer cada palavra." },
          { objective: "O6", q: "O que é um calendário de conteúdos?", options: ["Uma lista de feriados", "Um horário com o que publica ou envia, e quando", "Uma lista de aniversários dos doadores", "Um formulário de impostos"], answer: 1, why: "Mantém a divulgação regular e organizada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Divulgação e Comunicação com a Comunidade",
    questions: [
      { objective: "O1", q: "Uma boa divulgação fala com:", options: ["Toda a gente com a mesma mensagem", "Ninguém em especial", "Um público de cada vez", "Só a direção"], answer: 2, why: "Públicos diferentes interessam-se por coisas diferentes." },
      { objective: "O1", q: "Uma mensagem-chave deve dizer:", options: ["Toda a sua história", "Só o seu logótipo", "O seu orçamento", "O que é, porque é importante para eles e o que fazer a seguir"], answer: 3, why: "Essas partes levam à ação." },
      { objective: "O1", q: "Uma boa forma de melhorar uma mensagem com IA é:", options: ["Pedir três versões curtas e escolher a mais clara", "Pedir uma versão muito longa", "Pedir-lhe para escolher o seu público", "Não editar"], answer: 0, why: "Comparar versões ajuda a escolher." },
      { objective: "O2", q: "As publicações nas redes sociais funcionam melhor quando são:", options: ["Longas e gerais", "Curtas, reais e terminam com uma ação", "Sem nenhuma ação", "Cheias de jargão"], answer: 1, why: "As publicações curtas e concretas recebem respostas." },
      { objective: "O2", q: "Qual é um dos quatro tipos de publicação da lição?", options: ["Uma declaração de impostos", "Um contrato legal", "Um último lembrete", "Uma redefinição de palavra-passe"], answer: 2, why: "Os lembretes ajudam as pessoas a agir antes do prazo." },
      { objective: "O2", q: "O que é uma legenda?", options: ["Um chapéu", "Uma oferta de um doador", "Um endereço de site", "O texto que acompanha uma foto ou um vídeo"], answer: 3, why: "As legendas explicam a imagem ou o vídeo." },
      { objective: "O2", q: "Antes de partilhar a história de um utente, precisa de:", options: ["A autorização dele e nenhum detalhe que o identifique, a não ser que ele concorde", "Nada", "Os dados bancários dele", "Uma citação famosa"], answer: 0, why: "As histórias exigem autorização e privacidade." },
      { objective: "O3", q: "Um artigo do boletim informativo deve contar:", options: ["Todos os eventos do ano", "Uma história com um número verdadeiro e como ajudar", "Só os nomes dos doadores", "Nada sobre a missão"], answer: 1, why: "Uma história com um só foco é mais fácil de ler." },
      { objective: "O3", q: "O que deve verificar num rascunho do boletim feito pela IA?", options: ["Só a cor do título", "Nada", "Todos os números, nomes, datas e citações", "Só o número de palavras"], answer: 2, why: "A IA pode errar nos factos." },
      { objective: "O3", q: "Um link para cancelar a subscrição deixa as pessoas:", options: ["Doar duas vezes", "Ser voluntárias", "Mudar a sua palavra-passe", "Deixar de receber os seus e-mails"], answer: 3, why: "As pessoas devem poder sair da lista." },
      { objective: "O4", q: "Que pedido torna o texto mais fácil de ler?", options: ["\"Reescreva para um nível de leitura do 6.º ano com frases curtas.\"", "\"Torne-o mais complicado.\"", "\"Acrescente jargão.\"", "\"Torne-o mais longo.\""], answer: 0, why: "Os níveis de leitura mais baixos são mais fáceis." },
      { objective: "O4", q: "Na linguagem simples, o que vem primeiro?", options: ["Uma história longa", "O mais importante, como a data, o lugar e a ação", "Agradecimentos à direção", "Notas legais"], answer: 1, why: "Os leitores ocupados veem primeiro os detalhes principais." },
      { objective: "O4", q: "Quem deve verificar uma tradução feita pela IA?", options: ["A IA outra vez", "Ninguém", "Uma pessoa da sua comunidade que fala bem a língua", "Um site qualquer"], answer: 2, why: "As pessoas que falam bem a língua encontram os erros." },
      { objective: "O5", q: "Um leitor de ecrã é:", options: ["Uma pessoa que lê ecrãs", "Uma televisão", "Uma impressora", "Um programa que lê em voz alta o texto do ecrã"], answer: 3, why: "Ajuda pessoas cegas ou com baixa visão." },
      { objective: "O5", q: "A IA redigiu o texto alternativo de uma foto. Você deve:", options: ["Verificar se corresponde ao que está realmente na foto", "Usá-lo sem olhar", "Apagar a foto", "Fazê-lo com 500 palavras"], answer: 0, why: "A IA pode descrever as imagens de forma errada." },
      { objective: "O5", q: "Qual é uma melhoria fácil de acessibilidade para vídeos?", options: ["Desligar o som", "Acrescentar legendas", "Torná-lo mais longo", "Usar letras muito pequenas"], answer: 1, why: "As legendas ajudam pessoas surdas ou quem vê sem som." },
      { objective: "O5", q: "Porque evitar pôr os detalhes principais só dentro de uma imagem?", options: ["As imagens são ilegais", "Custa mais", "Os leitores de ecrã não conseguem ler palavras numa imagem", "Os doadores não gostam de imagens"], answer: 2, why: "O texto na publicação chega a toda a gente." },
      { objective: "O6", q: "A tabela de um calendário de conteúdos deve incluir:", options: ["Só cores", "Os valores das ofertas dos doadores", "Palavras-passe", "Semana, canal, peça e quem publica"], answer: 3, why: "Isto mantém a divulgação organizada." },
      { objective: "O6", q: "A IA fez o seu calendário de divulgação. Antes de o usar:", options: ["Verifique as datas no seu calendário verdadeiro", "Publique tudo hoje", "Confie em todas as datas", "Apague-o"], answer: 0, why: "A IA pode errar nas datas." },
      { objective: "O6", q: "Depois de um mês de divulgação, deve:", options: ["Nunca ver os resultados", "Anotar o que trouxe pessoas e continuar a fazê-lo", "Apagar todas as publicações", "Parar toda a divulgação"], answer: 1, why: "Os resultados mostram o que funciona." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 7, 10, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Público e mensagem-chave", objective: "O1", notYet: "Não há um só público, ou a mensagem não tem um próximo passo.", meets: "Um público e uma mensagem de uma ou duas frases com o quê, o porquê e o que fazer a seguir.", exceeds: "O aluno experimentou três versões e sabe dizer porque escolheu esta." },
      { name: "Quatro publicações nas redes sociais", objective: "O2", notYet: "Menos de quatro publicações, ou uma foto ou história sem autorização.", meets: "Quatro publicações curtas dos quatro tipos, cada uma a terminar com uma ação, com autorização para todas as fotos e histórias.", exceeds: "Cada publicação tem o tamanho certo para a sua plataforma." },
      { name: "Artigo do boletim informativo", objective: "O3", notYet: "Um número, nome, data ou citação não foi verificado.", meets: "Cerca de 200 palavras, uma história, um número verdadeiro e como ajudar, tudo verificado.", exceeds: "Inclui uma citação real com que a pessoa concordou." },
      { name: "Simples e acessível", objective: "O5", notYet: "O folheto é difícil de ler, ou as imagens não têm texto alternativo.", meets: "Folheto em linguagem simples com os detalhes principais primeiro, e texto alternativo para todas as imagens que corresponde à foto.", exceeds: "Tem também uma tradução verificada por uma pessoa que fala bem a língua e hashtags fáceis de ler." },
      { name: "Calendário de quatro semanas", objective: "O6", notYet: "Não há calendário, ou as datas não correspondem ao calendário verdadeiro.", meets: "Uma tabela de quatro semanas com semana, canal, peça e quem publica, com as datas verificadas.", exceeds: "Indica como os resultados vão ser acompanhados depois do mês." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Organizações que fazem um mês de divulgação planeada em 60 dias (inquérito de seguimento)",
      "Inscrições nos programas ou participação nos eventos registadas antes e depois do mês de divulgação",
      "Organizações que acrescentam texto alternativo e traduções à sua divulgação"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Um assistente de IA gratuito",
      "Os detalhes públicos de um programa ou evento real, e fotos que tem autorização para usar",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça aos alunos para escolherem um programa ou evento real e próximo antes da sessão.",
      "Lembre aos alunos a autorização por escrito para fotos de crianças e de utentes.",
      "Convide uma pessoa da comunidade que fale bem a língua para verificar as traduções feitas na sessão.",
      "Experimentem juntos um leitor de ecrã num telefone para os alunos ouvirem porque o texto alternativo e as hashtags são importantes.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
