"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-sports-management-marketing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-sports-management-marketing-pt",
  lang: "pt",
  translationOf: "athletes-sports-management-marketing",
  category: "Athletes",
  name: "Marketing na Gestão Desportiva",
  skills: "Definir a oferta e o público de um evento, Escrever um plano de divulgação de uma página, Montar um pacote de patrocínio local, Escrever com IA um e-mail de proposta a um patrocinador, Acompanhar a presença e os resultados para os patrocinadores",
  outcome: "planear o marketing de um evento desportivo, de um campo de treino ou da época de uma equipa: um plano de divulgação de uma página, um pacote de patrocínio local com três níveis, um e-mail de proposta a um patrocinador escrito com a ajuda da IA e um relatório simples de resultados para os patrocinadores.",
  about: [
    "Este curso é para treinadores, gestores de equipa, pessoal desportivo, organizadores de clubes e atletas que organizam campos de treino, torneios, angariações de fundos ou a época de uma equipa, e que precisam que as pessoas venham e que as empresas apoiem.",
    "Você vai aprender as bases do marketing desportivo do lado de quem organiza: para quem é o evento, como chegar a essas pessoas, como montar um pacote de patrocínio a que uma empresa local possa dizer sim e como apresentar os resultados para os patrocinadores voltarem.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. As escolas e as ligas têm as suas próprias regras sobre patrocinadores, logótipos e angariação de fundos, por isso fale com o seu diretor desportivo ou com a liga antes de começar."
  ],
  finalTask: "Escolha um evento real ou planeado (um campo de treino, um torneio, uma angariação de fundos ou um jogo em casa). Escreva um plano de divulgação de uma página, um pacote de patrocínio com três níveis e um e-mail de proposta a uma empresa local, escrito com a ajuda da IA e corrigido com as suas palavras. Peça a aprovação do seu diretor desportivo ou da liga e depois escreva os três números que vai apresentar aos patrocinadores no fim.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Treinadores, gestores de equipa, pessoal desportivo, organizadores de clubes e atletas que organizam campos de treino, torneios, angariações de fundos ou a época de uma equipa, e que precisam que as pessoas venham e que as empresas apoiem.",
    startingPoint: "Conhecem o seu desporto e a sua comunidade e usam redes sociais e e-mail. A maioria divulga os eventos com uma publicação ou um folheto à última hora, nunca escreveu um pacote de patrocínio e não apresenta os resultados aos patrocinadores.",
    gap: "Sem um plano, os eventos têm pouca gente e os patrocinadores locais recebem pedidos fáceis de recusar, ou nunca mais são contactados. Um plano de divulgação simples, um pacote de patrocínio claro, uma proposta pessoal e um relatório honesto de resultados trazem famílias e patrocinadores que voltam.",
    constraints: [
      "Linguagem simples, mais ou menos ao nível de leitura do 8.º ano",
      "Um telefone ou computador com um assistente de IA gratuito e o Canva; só ferramentas gratuitas",
      "Cerca de 60 minutos de lições, mais tempo para planear um evento real",
      "Aprovação da escola, da liga ou do clube para datas, patrocinadores, logótipos e fotografias; autorização dos pais para imagens de menores",
      "O dinheiro dos patrocinadores passa só pelo processo oficial da escola ou do clube"
    ],
    prerequisites: "Nenhum. O curso \"Ferramentas de IA para Atletas\" ajuda se nunca usou o Canva."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um evento desportivo real ou planeado", action: "escrever a oferta numa frase e indicar o público que decide vir ou pagar", standard: "com a data, o local, o custo e as aprovações confirmados com o seu diretor desportivo ou com a liga" },
    { id: "O2", condition: "Usando a sua oferta e um assistente de IA", action: "escrever um plano de divulgação de uma página com canais, uma mensagem principal e um calendário", standard: "com três a cinco canais, um calendário de anúncio, lembrete, última semana e agradecimento, e uma pessoa responsável por cada tarefa" },
    { id: "O3", condition: "Usando um assistente de IA e um modelo do Canva", action: "criar um folheto e uma publicação para as redes sociais com os cinco dados do evento", standard: "revistos por outra pessoa e seguindo as regras da sua escola sobre logótipos e fotografias de menores" },
    { id: "O4", condition: "Com aquilo que a sua escola deixa oferecer", action: "montar um pacote de patrocínio local com três níveis", standard: "com os preços confirmados com o seu diretor desportivo, só promessas que consegue cumprir e o dinheiro a passar pelo processo oficial" },
    { id: "O5", condition: "Usando um rascunho feito pela IA", action: "escrever um e-mail de proposta de patrocínio a uma empresa local", standard: "com menos de 150 palavras, uma razão verdadeira e concreta para a ter escolhido, enviado de uma conta oficial e com um só seguimento" },
    { id: "O6", condition: "Depois do seu evento", action: "criar um relatório de agradecimento de uma página para o patrocinador com três números, uma fotografia e uma frase de alguém", standard: "com todos os números verificados e o relatório enviado no prazo de duas semanas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Divulgar o evento",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que você oferece e a quem",
          minutes: 5,
          goal: "Escrever numa frase a oferta e o público do seu evento.",
          text: [
            "Cada evento é uma oferta: algo que as pessoas recebem em troca do seu tempo ou do seu dinheiro. Um campo de treino para jovens oferece habilidades e diversão num lugar seguro. Um jogo em casa oferece espetáculo e comunidade. Um torneio oferece competição para as equipas.",
            "Escreva a sua oferta numa frase: \"Um campo de treino de futebol de dois dias para iniciantes, para crianças dos 6 aos 10 anos, dado pelos jogadores da nossa equipa principal, com T-shirt e lanche, a 12 e 13 de junho.\" Depois indique o público: quem decide vir ou pagar? Num campo de treino para jovens, são os pais.",
            "Antes de divulgar seja o que for, confirme o básico com o seu diretor desportivo ou com a liga: a data, o local, o custo, o seguro, a segurança e qualquer aprovação necessária."
          ],
          steps: ["Dê um nome ao evento.", "Escreva o que as pessoas recebem.", "Indique quem decide vir ou pagar.", "Confirme a data, o local, o custo e as aprovações com o seu diretor desportivo ou com a liga."],
          words: [["Oferta", "aquilo que as pessoas recebem em troca do seu tempo ou do seu dinheiro."], ["Diretor desportivo", "a pessoa que dirige o programa de desporto de uma escola e aprova os eventos."]],
          slides: [
            { title: "Cada evento é uma oferta", bullets: ["Campo de treino: habilidades e diversão, com segurança", "Jogo em casa: espetáculo e comunidade", "Torneio: competição"] },
            { title: "A oferta numa frase", bullets: ["Para quem é e o que recebem", "Quando e onde"] },
            { title: "Confirme primeiro", bullets: ["Data, local, custo", "Seguro, segurança, aprovações"] }
          ],
          tryIt: "Escolha um evento real ou planeado. Escreva a sua oferta numa frase e indique o público que decide vir ou pagar.",
          youCanNow: "descrever numa frase a oferta de um evento e o público que decide.",
          quickCheck: [
            { objective: "O1", q: "O que oferece um jogo em casa às pessoas que vêm?", options: ["Espetáculo e comunidade", "Um pacote de patrocínio", "Seguro grátis", "Um plano de treino"], answer: 0, why: "Cada evento é uma oferta; um jogo em casa oferece espetáculo e comunidade." },
            { objective: "O1", q: "Quer organizar um torneio no próximo mês. O que faz antes de qualquer divulgação?", options: ["Publica a data nas redes sociais", "Imprime folhetos", "Confirma a data, o local, o custo, o seguro e as aprovações com o diretor desportivo ou com a liga", "Envia e-mails aos patrocinadores"], answer: 2, why: "Confirme o básico e as aprovações antes de divulgar seja o que for." }
          ]
        },
        {
          objectives: ["O2"],
          title: "O plano de divulgação de uma página",
          minutes: 5,
          goal: "Escrever um plano de uma página com canais, mensagens e um calendário.",
          text: [
            "Um plano de divulgação responde a três perguntas: onde é que o público vai ouvir falar do evento, o que vamos dizer, e quando? Mantenha-o numa só página.",
            "Os eventos desportivos locais costumam correr melhor com uma mistura: boletins da escola ou do clube, as contas da equipa nas redes sociais, grupos locais no Facebook, folhetos em escolas, ginásios e lojas, o passa-palavra dos jogadores e das famílias, e as notícias locais ou as agendas da comunidade.",
            "Use um calendário simples: anuncie cerca de quatro a seis semanas antes, lembre duas semanas antes, insista muito na última semana e publique agradecimentos depois. Um assistente de IA pode transformar as suas notas numa tabela arrumada."
          ],
          steps: ["Faça uma lista de três a cinco canais.", "Escreva uma mensagem principal.", "Faça um calendário: anúncio, lembrete, última semana, agradecimento.", "Peça à IA para pôr tudo numa tabela de uma página.", "Indique quem faz cada tarefa."],
          words: [["Divulgação", "dizer às pessoas que o seu evento existe para que venham."], ["Calendário", "o que acontece em cada data."]],
          slides: [
            { title: "Três perguntas", bullets: ["Onde vão ouvir falar do evento?", "O que vamos dizer?", "Quando?"] },
            { title: "Canais locais", bullets: ["Boletins e contas da equipa nas redes sociais", "Grupos locais no Facebook e folhetos", "Passa-palavra e agendas da comunidade"] },
            { title: "Calendário", bullets: ["Anunciar 4-6 semanas antes", "Lembrar 2 semanas antes", "Insistir na última semana", "Agradecer depois"] }
          ],
          tryIt: "Peça a um assistente de IA: \"Transforme estas notas numa tabela de uma página para um plano de divulgação, com canal, mensagem, data e responsável.\" Cole as notas do seu evento e corrija o resultado.",
          youCanNow: "escrever um plano de divulgação de uma página com canais, uma mensagem, um calendário e responsáveis.",
          quickCheck: [
            { objective: "O2", q: "A que três perguntas responde um plano de divulgação?", options: ["Quem joga, quem ganha, quem marca", "Onde o público ouve falar do evento, o que dizemos e quando", "Quanto custa, quanto tempo, que distância", "Que logótipo, que cor, que letra"], answer: 1, why: "Um plano de divulgação trata dos canais, da mensagem e do momento." },
            { objective: "O2", q: "O seu evento é na próxima semana e ninguém ficou encarregado de publicar os lembretes. O que faz?", options: ["Espera que o passa-palavra funcione", "Cancela o evento", "Espera até à véspera", "Indica já uma pessoa para cada tarefa de divulgação"], answer: 3, why: "Cada tarefa do plano precisa de uma pessoa responsável." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer materiais de divulgação com a IA e o Canva",
          minutes: 5,
          goal: "Fazer um folheto e uma publicação para as redes sociais que sigam as regras da sua escola.",
          text: [
            "Cada material de divulgação precisa dos mesmos cinco dados: o quê, para quem é, quando, onde, e como se inscrever ou comprar bilhetes. Junte uma fotografia e uma razão para vir.",
            "Use um assistente de IA para escrever um texto curto e depois use uma ferramenta de design gratuita como o Canva para fazer, a partir de um modelo, um folheto e uma publicação quadrada para as redes sociais.",
            "Siga as regras da sua escola ou da liga sobre logótipos, nomes de equipas e fotografias de menores. Use fotografias só com autorização; muitas escolas exigem uma autorização de imagem assinada pelos pais antes de publicar fotografias de alunos."
          ],
          steps: ["Faça a lista dos cinco dados.", "Peça à IA um título e duas frases curtas.", "Faça um folheto e uma publicação no Canva.", "Verifique os logótipos e as fotografias com as regras da sua escola.", "Peça a outra pessoa para rever a data, a hora e o link."],
          words: [["Autorização de imagem", "uma permissão assinada para usar a fotografia ou o vídeo de alguém."], ["Rever", "verificar com cuidado se há erros antes de partilhar."]],
          slides: [
            { title: "Cinco dados em cada material", bullets: ["O quê e para quem é", "Quando e onde", "Como se inscrever ou comprar bilhetes"] },
            { title: "Como fazer", bullets: ["A IA escreve o texto", "Modelo do Canva para o folheto e a publicação"] },
            { title: "Antes de partilhar", bullets: ["Logótipos e nomes de equipas: siga as regras da escola", "Fotografias de menores: permissão e autorização de imagem", "Outra pessoa revê"] }
          ],
          tryIt: "Faça um folheto e uma publicação para as redes sociais para o seu evento. Peça a outra pessoa para verificar os cinco dados e o link de inscrição.",
          youCanNow: "fazer materiais de divulgação claros que seguem as regras da escola e das fotografias.",
          quickCheck: [
            { objective: "O3", q: "Qual destes é um dos cinco dados de que cada material de divulgação precisa?", options: ["Como se inscrever ou comprar bilhetes", "O número de telefone do treinador", "O resultado do ano passado", "A lista de preços dos patrocinadores"], answer: 0, why: "O quê, para quem é, quando, onde e como se inscrever vão em cada material." },
            { objective: "O3", q: "O seu folheto está pronto. O que faz antes de o partilhar?", options: ["Partilha logo", "Junta mais fotografias de alunos sem pedir", "Pede a outra pessoa para rever a data, a hora e o link", "Tira o link de inscrição"], answer: 2, why: "Outra pessoa apanha os erros nos dados importantes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Divulgar o evento",
        questions: [
          { objective: "O1", q: "Num campo de treino para jovens, quem costuma ser o público que decide?", options: ["O árbitro", "Os treinadores rivais", "Os pais das crianças", "O motorista do autocarro"], answer: 2, why: "São os pais que decidem e pagam os campos de treino para jovens." },
          { objective: "O1", q: "Antes de divulgar um evento, deve confirmar:", options: ["A data, o local, o custo e as aprovações", "Só a cor das T-shirts", "O seu número de seguidores", "Nada"], answer: 0, why: "Não pode divulgar um evento que não está aprovado e marcado." },
          { objective: "O2", q: "Quando deve normalmente anunciar um evento local?", options: ["Na véspera", "Depois de acontecer", "Um ano depois", "Cerca de quatro a seis semanas antes"], answer: 3, why: "Assim as pessoas têm tempo para se organizar, com lembretes mais tarde." },
          { objective: "O3", q: "Que cinco dados vão em cada folheto?", options: ["Resultado, tempo, mascote, cor, hino", "O quê, para quem, quando, onde, como se inscrever", "A sua palavra-passe e a sua morada", "Só o logótipo"], answer: 1, why: "Esses dados deixam as pessoas decidir e agir." },
          { objective: "O3", q: "Quer publicar fotografias das crianças do campo de treino. De que precisa?", options: ["De nada", "De permissão e, muitas vezes, de uma autorização de imagem dos pais", "De um filtro", "De mais hashtags"], answer: 1, why: "Na maioria das escolas, as fotografias de menores precisam de permissão." }
        ]
      }
    },
    {
      name: "Capítulo 2: Patrocinadores e resultados",
      lessons: [
        {
          objectives: ["O4"],
          title: "Montar um pacote de patrocínio local",
          minutes: 6,
          goal: "Montar um pacote de patrocínio com três níveis a que uma empresa local possa dizer sim.",
          text: [
            "Um patrocinador é uma empresa que dá dinheiro, produtos ou serviços em troca de ser vista pelo seu público. Empresas locais como pizzarias, stands de automóveis, ginásios e dentistas patrocinam muitas vezes o desporto das escolas e dos clubes.",
            "Torne tudo fácil com três níveis, por exemplo Bronze, Prata e Ouro. Cada nível diz o que o patrocinador dá e o que recebe: o nome na faixa, o logótipo na T-shirt, uma publicação a agradecer-lhe, anúncios nos jogos ou uma mesa no evento. Prometa só o que consegue cumprir e o que a sua escola permite.",
            "Para definir os preços, pergunte ao seu diretor desportivo quanto pagaram outros patrocinadores e quais são os seus custos. Não adivinhe números grandes, e mantenha o dinheiro dentro do processo oficial da sua escola ou do seu clube."
          ],
          steps: ["Faça a lista do que pode oferecer aos patrocinadores e que a sua escola permite.", "Junte as ofertas em três níveis.", "Pergunte ao seu diretor desportivo pelos preços anteriores e pelos seus custos.", "Ponha o pacote numa página.", "Faça o dinheiro passar pelo processo oficial da escola ou do clube."],
          words: [["Patrocinador", "uma empresa que apoia o seu evento em troca de ser vista."], ["Pacote de patrocínio", "uma lista de uma página com os níveis de patrocínio, o que o patrocinador dá e o que recebe."]],
          slides: [
            { title: "O que um patrocinador quer", bullets: ["Ser visto pelo seu público", "Boa imagem na comunidade"] },
            { title: "Três níveis", bullets: ["Bronze, Prata, Ouro", "O que dão e o que recebem", "Prometa só o que consegue cumprir"] },
            { title: "Dinheiro", bullets: ["Pergunte pelos preços anteriores e pelos seus custos", "Use o processo oficial da escola ou do clube"] }
          ],
          tryIt: "Peça a um assistente de IA que o ajude a organizar um pacote de patrocínio com três níveis para o seu evento, usando só os benefícios que escreveu. Ponha os preços só depois de falar com o seu diretor desportivo.",
          youCanNow: "montar um pacote de patrocínio local com três níveis, que diz com clareza o que se dá e o que se recebe.",
          quickCheck: [
            { objective: "O4", q: "O que é um patrocinador?", options: ["Um pai ou mãe de um jogador que ajuda como voluntário", "Uma empresa que dá dinheiro, produtos ou serviços para ser vista pelo seu público", "O escritório da liga", "Alguém que compra um bilhete"], answer: 1, why: "Os patrocinadores dão apoio em troca de serem vistos pelo seu público." },
            { objective: "O4", q: "Um patrocinador pede para pôr o logótipo nas camisolas dos jogadores, mas a sua escola não permite. O que faz?", options: ["Promete na mesma", "Faz sem dizer à escola", "Cobra-lhe mais", "Oferece só o que a escola permite, como uma faixa ou uma publicação de agradecimento"], answer: 3, why: "Prometa só o que consegue cumprir e o que a sua escola permite." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Propor um patrocínio com um e-mail escrito com a IA",
          minutes: 5,
          goal: "Escrever e enviar um e-mail de proposta curto e pessoal a um patrocinador.",
          text: [
            "Um e-mail de proposta é curto e pessoal. Diz quem você é, o que é o evento, porque é que a empresa combina com ele, o que está a pedir e o que a empresa ganha. Junte o pacote de uma página como anexo ou link.",
            "Peça a um assistente de IA: \"Escreva um e-mail curto e simpático para [tipo de empresa] a pedir que patrocine o nosso campo de treino de basquetebol para jovens. Fale do nosso público de 80 famílias locais e do nosso nível Prata. Menos de 150 palavras.\" Depois corrija-o: junte algo verdadeiro e concreto sobre essa empresa e porque a escolheu.",
            "Se não tiver resposta, faça um seguimento uma vez, depois de cerca de uma semana. Com as empresas locais, ir lá pessoalmente com um jogador ou com um pai muitas vezes funciona melhor do que o e-mail. Agradeça sempre, mesmo que digam que não."
          ],
          steps: ["Escolha uma empresa local que combine com o seu público.", "Peça à IA um rascunho curto, com menos de 150 palavras.", "Junte uma razão verdadeira e concreta para a ter escolhido.", "Anexe o pacote e envie de uma conta oficial.", "Faça um seguimento uma vez depois de uma semana; agradeça em qualquer caso."],
          words: [["Proposta", "um pedido curto que explica o que quer e como isso ajuda a outra pessoa."], ["Seguimento", "uma segunda mensagem educada quando não teve resposta."]],
          slides: [
            { title: "Um bom e-mail de proposta", bullets: ["Quem você é e o evento", "Porque a empresa combina", "O que pede e o que a empresa ganha"] },
            { title: "A IA escreve, você personaliza", bullets: ["Menos de 150 palavras", "Junte uma razão verdadeira e concreta"] },
            { title: "Depois de enviar", bullets: ["Faça um seguimento uma vez depois de uma semana", "Vá lá pessoalmente, se puder", "Agradeça, seja sim ou não"] }
          ],
          tryIt: "Escolha uma empresa local. Use a IA para escrever um e-mail de proposta, personalize-o e peça ao seu treinador ou ao diretor desportivo para o ler antes de o enviar.",
          youCanNow: "escrever um e-mail de proposta de patrocínio curto e pessoal e fazer um seguimento com educação.",
          quickCheck: [
            { objective: "O5", q: "O que deve ter um e-mail de proposta?", options: ["Quem você é, o evento, porque a empresa combina, o pedido e o que a empresa ganha", "O calendário completo da época", "Uma longa história da equipa", "Só o preço"], answer: 0, why: "Uma proposta curta e pessoal trata desses cinco pontos e junta o link do pacote." },
            { objective: "O5", q: "Uma pizzaria local não respondeu à sua proposta depois de uma semana. O que faz?", options: ["Envia-lhe um e-mail todos os dias", "Publica sobre ela na internet", "Faz um seguimento uma vez, ou vai lá com um jogador ou com um pai", "Desiste e nunca mais pede"], answer: 2, why: "Faça um seguimento uma vez depois de cerca de uma semana; ir lá pessoalmente muitas vezes funciona melhor." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Apresentar resultados para os patrocinadores voltarem",
          minutes: 5,
          goal: "Acompanhar os números do evento e enviar aos patrocinadores um curto relatório de agradecimento.",
          text: [
            "Os patrocinadores voltam quando veem o que receberam. Acompanhe alguns números durante e depois do evento: a presença ou as inscrições, o alcance e as interações das publicações, e números próprios do patrocinador, como cupões usados ou visitas à mesa dele.",
            "Envie um relatório de agradecimento de uma página no prazo de duas semanas: uma fotografia da faixa ou do logótipo deles no evento, os números, uma frase de uma família ou de um jogador e um agradecimento da equipa.",
            "Peça a um assistente de IA para transformar os seus números e notas num relatório simpático e depois verifique você mesmo cada número. Nunca aumente os números; é a confiança que traz os patrocinadores de volta no ano seguinte."
          ],
          steps: ["Escolha três números antes do evento.", "Recolha-os durante e depois.", "Tire fotografias da publicidade do patrocinador.", "Escreva um relatório de uma página com a IA.", "Verifique cada número e envie no prazo de duas semanas."],
          words: [["Alcance", "quantas pessoas viram uma publicação."], ["Relatório de agradecimento", "um resumo curto para os patrocinadores, com fotografias e resultados."]],
          slides: [
            { title: "Acompanhe três números", bullets: ["Presença ou inscrições", "Alcance e interações das publicações", "Próprios do patrocinador: cupões, visitas"] },
            { title: "Relatório de agradecimento", bullets: ["Fotografia do logótipo deles no evento", "Os números e uma frase de alguém", "Envie no prazo de duas semanas"] },
            { title: "Confiança", bullets: ["Verifique cada número", "Nunca aumente os números"] }
          ],
          tryIt: "Tarefa final: para o seu evento, termine o plano de divulgação, o pacote de patrocínio e o e-mail de proposta, peça a aprovação do seu diretor desportivo ou da liga e escreva os três números que vai apresentar aos patrocinadores.",
          youCanNow: "apresentar resultados honestos aos patrocinadores para que queiram voltar.",
          quickCheck: [
            { objective: "O6", q: "O que traz os patrocinadores de volta no ano seguinte?", options: ["Um logótipo maior da próxima vez", "Verem o que receberam, com números honestos", "Um e-mail mais longo", "Um preço mais baixo"], answer: 1, why: "Os patrocinadores voltam quando um relatório mostra resultados reais." },
            { objective: "O6", q: "A IA escreveu o seu relatório e diz que vieram 200 pessoas, mas a sua contagem foi 150. O que faz?", options: ["Envia; maior parece melhor", "Faz a média dos dois números", "Tira o número", "Corrige para 150 antes de enviar"], answer: 3, why: "Verifique você mesmo cada número e nunca o aumente." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Patrocinadores e resultados",
        questions: [
          { objective: "O4", q: "O que costuma querer um patrocinador?", options: ["Treinar a equipa", "Só bilhetes grátis", "As suas palavras-passe", "Ser visto pelo seu público e ganhar boa imagem"], answer: 3, why: "Os patrocinadores apoiam para serem vistos pelo seu público." },
          { objective: "O4", q: "Como deve definir os preços do patrocínio?", options: ["Perguntar ao diretor desportivo pelos preços anteriores e pelos seus custos", "Adivinhar um número grande", "Copiar uma equipa profissional", "Deixar a IA decidir"], answer: 0, why: "Os preços reais anteriores e os custos mantêm tudo justo e realista." },
          { objective: "O5", q: "O que torna pessoal um e-mail de proposta?", options: ["Um e-mail muito longo", "Muitos emojis", "Uma razão verdadeira e concreta para ter escolhido essa empresa", "Enviá-lo a 500 empresas ao mesmo tempo"], answer: 2, why: "Razões concretas mostram que conhece a empresa." },
          { objective: "O5", q: "Uma empresa não responde. O que faz?", options: ["Envia e-mails todos os dias", "Publica sobre ela", "Desiste logo", "Faz um seguimento uma vez, depois de cerca de uma semana"], answer: 3, why: "Um só seguimento educado é profissional." },
          { objective: "O6", q: "O seu evento teve 140 pessoas. Que número apresenta?", options: ["250, para parecer melhor", "140", "Cerca de 200", "Nenhum"], answer: 1, why: "Números honestos criam confiança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Marketing na Gestão Desportiva",
    questions: [
      { objective: "O1", q: "A oferta de um evento é:", options: ["Só o preço do bilhete", "O logótipo da equipa", "O que as pessoas recebem pelo seu tempo ou dinheiro", "O estádio"], answer: 2, why: "A oferta é o valor para o público." },
      { objective: "O1", q: "Quem aprova os eventos e os patrocinadores da escola?", options: ["Normalmente o diretor desportivo", "Um adepto", "Um patrocinador", "O treinador adversário"], answer: 0, why: "O diretor desportivo dirige o programa de desporto da escola." },
      { objective: "O2", q: "Um bom plano de divulgação cabe em:", options: ["Uma página", "Cinquenta páginas", "Um guardanapo sem datas", "Nada"], answer: 0, why: "Uma página mantém-no claro e fácil de usar." },
      { objective: "O2", q: "Qual é um bom canal local?", options: ["O balneário de um rival", "Mensagens privadas a desconhecidos", "Grupos locais no Facebook e boletins da escola", "Nenhum"], answer: 2, why: "Esses canais chegam às famílias locais." },
      { objective: "O2", q: "Quando deve publicar os agradecimentos?", options: ["Nunca", "Depois do evento", "Antes de anunciar", "Só se ganhar"], answer: 1, why: "Os agradecimentos criam boa vontade para a próxima vez." },
      { objective: "O2", q: "Cada tarefa de divulgação deve ter:", options: ["Nenhum responsável", "Dez responsáveis", "A IA como responsável", "Uma pessoa responsável"], answer: 3, why: "Alguém tem de ficar com cada tarefa." },
      { objective: "O3", q: "Que dado falta em \"Campo de treino de futebol, 12 de junho, Lincoln Park\"?", options: ["Quando", "Onde", "Como se inscrever", "O quê"], answer: 2, why: "As pessoas precisam de saber como se inscrever." },
      { objective: "O3", q: "Uma autorização de imagem é:", options: ["Uma conferência de imprensa", "Uma notícia", "Um bilhete", "Uma permissão assinada para usar a fotografia ou o vídeo de alguém"], answer: 3, why: "Dá permissão para partilhar imagens." },
      { objective: "O3", q: "Antes de partilhar um folheto, deve:", options: ["Pedir a outra pessoa para o rever", "Juntar mais cores", "Publicá-lo à meia-noite", "Tirar a data"], answer: 0, why: "Um segundo leitor apanha os erros." },
      { objective: "O4", q: "Um pacote de patrocínio costuma ter:", options: ["Um único preço enorme", "Três níveis do que se dá e do que se recebe", "Nenhum benefício", "Só um logótipo"], answer: 1, why: "Os níveis tornam fácil dizer sim." },
      { objective: "O4", q: "Qual é um benefício para o patrocinador?", options: ["Treinar a equipa", "Escolher os jogadores que entram", "O nome dele na faixa", "Dados grátis dos jogadores"], answer: 2, why: "Ser visto é o benefício principal." },
      { objective: "O4", q: "O dinheiro dos patrocinadores deve passar por:", options: ["O processo oficial da escola ou do clube", "A sua conta pessoal", "Dinheiro vivo num saco", "Um amigo"], answer: 0, why: "Os processos oficiais protegem toda a gente." },
      { objective: "O4", q: "Aos patrocinadores, só deve prometer:", options: ["Tudo o que quiserem", "Campeonatos", "Tempo dos jogadores sem perguntar", "O que consegue cumprir e a sua escola permite"], answer: 3, why: "Promessas não cumpridas fazem perder patrocinadores." },
      { objective: "O5", q: "Um e-mail de proposta deve ter:", options: ["Duas páginas", "Menos de 150 palavras", "Uma palavra", "O maior tamanho possível"], answer: 1, why: "Os e-mails curtos são lidos." },
      { objective: "O5", q: "A IA escreve o rascunho da sua proposta. A seguir você:", options: ["Envia-o a toda a gente sem mudar nada", "Junta uma razão verdadeira e concreta para ter escolhido essa empresa", "Junta números falsos", "Apaga-o"], answer: 1, why: "Os toques pessoais trazem respostas." },
      { objective: "O5", q: "Com as empresas locais, muitas vezes funciona melhor do que o e-mail:", options: ["Enviar 10 e-mails", "Ligar à meia-noite", "Publicar comentários zangados", "Ir lá pessoalmente com um jogador ou com um pai"], answer: 3, why: "As empresas locais respondem a pessoas reais." },
      { objective: "O5", q: "Uma empresa diz que não. Você:", options: ["Agradece na mesma", "Discute", "Publica sobre ela", "Continua a enviar e-mails"], answer: 0, why: "A boa vontade pode levar a um sim mais tarde." },
      { objective: "O6", q: "Que número é próprio do patrocinador?", options: ["O número dos seus sapatos", "O tempo que fez", "Os cupões usados da oferta dele", "Só o resultado final"], answer: 2, why: "Mostra diretamente o que ele recebeu." },
      { objective: "O6", q: "Quando deve enviar o relatório de agradecimento?", options: ["No ano seguinte", "Nunca", "Antes do evento", "No prazo de duas semanas"], answer: 3, why: "Os resultados recentes causam a melhor impressão." },
      { objective: "O6", q: "A IA escreve o seu relatório. Antes de o enviar, você:", options: ["Arredonda os números para cima", "Verifica você mesmo cada número", "Tira as fotografias", "Envia-o sem ler"], answer: 1, why: "A IA pode errar; a confiança depende da exatidão." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 6, 9, 11, 14, 18, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Plano de divulgação",
        objective: "O2",
        notYet: "Não tem calendário, tem poucos canais ou ninguém está encarregado das tarefas.",
        meets: "Uma página com três a cinco canais, uma mensagem principal, um calendário de anúncio, lembrete, última semana e agradecimento, e um responsável por cada tarefa.",
        exceeds: "Os canais combinam com o público que decide, indicado na oferta."
      },
      {
        name: "Pacote de patrocínio",
        objective: "O4",
        notYet: "Menos de três níveis, preços adivinhados ou promessas que a escola não permite.",
        meets: "Três níveis que dizem com clareza o que se dá e o que se recebe, preços confirmados com o diretor desportivo e o dinheiro a passar pelo processo oficial.",
        exceeds: "Cada nível serve para um tamanho diferente de empresa local e inclui um número próprio do patrocinador para apresentar."
      },
      {
        name: "E-mail de proposta",
        objective: "O5",
        notYet: "Parece texto copiado da IA, é longo ou não tem uma razão concreta para essa empresa.",
        meets: "Menos de 150 palavras, com as palavras de quem escreve, uma razão verdadeira para ter escolhido a empresa e o pacote em anexo.",
        exceeds: "Inclui um plano de seguimento e a opção de uma visita pessoal."
      },
      {
        name: "Aprovação e plano de resultados",
        objective: "O6",
        notYet: "Sem aprovação, ou sem números escolhidos para o relatório aos patrocinadores.",
        meets: "Aprovado pelo diretor desportivo ou pela liga, com três números escolhidos para apresentar aos patrocinadores.",
        exceeds: "Diz como cada número vai ser recolhido e quando o relatório vai ser enviado."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam a tarefa final e ficam em Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Eventos que atingem a meta de presença ou de inscrições",
      "Patrocinadores locais conseguidos, e patrocinadores que voltam no evento ou na época seguinte",
      "Alunos que dizem ter enviado um relatório de resultados aos patrocinadores no prazo de duas semanas depois do evento"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Uma conta gratuita no Canva",
      "As regras da sua escola, liga ou clube sobre patrocinadores, logótipos e autorizações de imagem",
      "Cerca de 60 minutos de lições, mais tempo para planear um evento real"
    ],
    facilitatorNotes: [
      "Convide o diretor desportivo ou o contacto da liga para a primeira sessão, para que as aprovações, os preços e o manuseamento do dinheiro fiquem claros desde o início.",
      "Tenha prontos os formulários de autorização de imagem dos pais antes de alguém publicar fotografias de menores.",
      "Junte os atletas a um adulto para as visitas e os e-mails aos patrocinadores; envie as propostas de contas oficiais.",
      "Nunca deixe os alunos lidar com o dinheiro dos patrocinadores fora do processo oficial da escola ou do clube.",
      "Depois do evento, revejam em grupo os relatórios para os patrocinadores e verifiquem cada número antes de os enviar."
    ]
  }
};
