"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-health-wellness-accessibility.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Settings search words are given in Portuguese (phones set to Portuguese), with the English menu name where it helps.

module.exports = {
  id: "seniors-health-wellness-accessibility-pt",
  lang: "pt",
  translationOf: "seniors-health-wellness-accessibility",
  category: "Seniors and Technology",
  name: "Saúde, Bem-estar e Acessibilidade com a Tecnologia",
  skills: "Aumentar o texto, Usar a lupa e a leitura em voz alta, Ligar as legendas, Criar lembretes de medicamentos, Preparar perguntas para o médico com IA, Encontrar informação de saúde de confiança",
  outcome: "configurar o seu telefone ou tablet para ser mais fácil de ver e ouvir, criar um lembrete diário de medicamentos e usar um assistente de IA para preparar uma lista clara de perguntas para a sua próxima consulta médica.",
  about: [
    "Este curso é para pessoas mais velhas que querem que a tecnologia ajude os seus olhos, os seus ouvidos e a sua saúde, e não que atrapalhe. Não precisa de comprar nada novo; a maior parte destas ferramentas já está no seu telefone ou tablet.",
    "No Capítulo 1 vai aumentar o texto, usar o telefone como lupa, fazê-lo ler textos em voz alta e ligar as legendas. No Capítulo 2 vai criar lembretes de medicamentos, usar a IA para preparar uma consulta médica e aprender onde encontrar informação de saúde de confiança.",
    "Cada lição dura cerca de cinco minutos. Um familiar pode ajudar com as definições da primeira vez. Este curso não dá conselhos médicos: siga sempre as indicações do seu médico e do seu farmacêutico. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Torne o seu telefone mais fácil de usar mudando uma definição para ver ou ouvir melhor, crie um lembrete diário para um medicamento ou para uma pequena caminhada, e use um assistente de IA para transformar as suas preocupações de saúde numa lista curta e clara de perguntas para levar à sua próxima consulta, sem nenhum número privado.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas que cuidam da sua própria saúde e dos seus medicamentos e que podem ter mudanças na vista ou na audição. Muitas vão a mais do que um médico e tomam vários medicamentos.",
    startingPoint: "Têm um smartphone ou tablet e usam-no para chamadas e mensagens. Muitas acham o texto pequeno ou as vozes difíceis de ouvir, e nunca exploraram as definições de acessibilidade, os lembretes que se repetem nem os assistentes de IA.",
    gap: "O texto pequeno e o som difícil de ouvir fazem as pessoas desistir de telefones que as podiam ajudar a manter a saúde. Tornar o telefone mais fácil de ver e ouvir, usar lembretes para os medicamentos, preparar perguntas claras para o médico e verificar dados de saúde num site de confiança apoiam a independência e consultas melhores, sem deixar a IA tomar o lugar do médico.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: iPhone, telefones Android e tablets; os nomes dos menus mudam, por isso os alunos pesquisam nas Definições",
      "Tempo: cerca de 5 minutos por lição, com calma",
      "Saúde: a IA serve para preparar, nunca para diagnosticar; os medicamentos seguem o médico e o farmacêutico",
      "Privacidade: nada de nome, data de nascimento ou números do seguro de saúde nos pedidos à IA"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando a aplicação Definições do seu telefone ou tablet", action: "aumentar o texto, pô-lo em negrito e ampliar um ecrã", standard: "até o texto ser confortável de ler" },
    { id: "O2", condition: "Com letras pequenas, como as de um rótulo de medicamento", action: "usar o telefone como lupa e ligar a leitura em voz alta", standard: "para conseguir ler ou ouvir essas letras" },
    { id: "O3", condition: "Quando as vozes em vídeos ou chamadas são difíceis de ouvir", action: "ligar as legendas e encontrar as opções de audição do telefone", standard: "para as palavras aparecerem no ecrã" },
    { id: "O4", condition: "Com um medicamento ou um hábito saudável", action: "criar no telefone um lembrete que se repete todos os dias", standard: "à hora que o médico ou o farmacêutico indicou, confirmando que ficou criado" },
    { id: "O5", condition: "Antes de uma consulta médica", action: "usar um assistente de IA para transformar as suas preocupações numa lista curta de perguntas claras", standard: "sem números privados e sem mudar medicamentos por causa da IA" },
    { id: "O6", condition: "Com informação de saúde vinda da IA ou de um site", action: "verificá-la numa fonte de confiança, como o MedlinePlus, o seu médico ou o seu farmacêutico", standard: "antes de agir com base nela" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tornar o seu aparelho mais fácil de ver e ouvir",
      lessons: [
        {
          objectives: ["O1"],
          title: "Aumentar o texto e torná-lo mais fácil de ler",
          minutes: 5,
          goal: "Aumentar o texto do seu telefone ou tablet e pô-lo em negrito.",
          text: [
            "O texto pequeno é uma das razões mais comuns para as pessoas desistirem de um telefone. A boa notícia: todos os smartphones e tablets deixam aumentar o texto, e muitos também deixam pô-lo em negrito.",
            "Os nomes dos menus mudam de telefone para telefone, por isso o mais fácil é pesquisar. Abra a aplicação Definições (muitas vezes uma roda dentada cinzenta), toque na barra de pesquisa em cima e escreva \"tamanho do texto\" ou \"tamanho da letra\". Toque no resultado e deslize a barra para a direita até o texto ficar confortável. Procure também ali perto um botão \"texto em negrito\".",
            "Algumas aplicações também deixam ampliar: ponha dois dedos no ecrã e afaste-os. Junte-os outra vez para voltar a reduzir."
          ],
          steps: ["Abra a aplicação Definições.", "Toque na barra de pesquisa em cima.", "Escreva \"tamanho do texto\" ou \"tamanho da letra\".", "Deslize a barra para a direita até o texto ficar confortável.", "Ligue o \"texto em negrito\", se quiser."],
          words: [["Definições", "a aplicação onde muda o aspeto e o funcionamento do telefone, normalmente com o desenho de uma roda dentada. Em alguns telefones chama-se Configurações."], ["Letra (fonte)", "o estilo e o tamanho das letras no ecrã."], ["Ampliar (zoom)", "fazer o que está no ecrã parecer maior."]],
          slides: [
            { title: "Texto pequeno? Pode resolver", bullets: ["Todos os telefones e tablets podem aumentar o texto", "Muitos também o podem pôr em negrito"] },
            { title: "Pesquise nas Definições", bullets: ["Abra as Definições (a roda dentada)", "Pesquise \"tamanho do texto\" ou \"tamanho da letra\"", "Deslize a barra para a direita"] },
            { title: "Ampliar com dois dedos", bullets: ["Afaste dois dedos para ampliar", "Junte-os para reduzir"] }
          ],
          tryIt: "Abra as Definições, pesquise \"tamanho do texto\" e aumente o texto um ou dois passos. Abra as suas mensagens ou o seu e-mail para ver a diferença.",
          youCanNow: "aumentar o texto do seu aparelho e pô-lo em negrito.",
          quickCheck: [
            { objective: "O1", q: "Em muitas aplicações, o que acontece quando afasta dois dedos no ecrã?", options: ["Amplia", "Desliga o telefone", "Faz uma chamada", "Apaga a página"], answer: 0, why: "Afastar dois dedos amplia; juntá-los volta a reduzir." },
            { objective: "O1", q: "Não encontra o menu do tamanho do texto no seu telefone novo. O que faz?", options: ["Compra outro telefone", "Desiste", "Abre as Definições, toca na barra de pesquisa e escreve \"tamanho do texto\"", "Desliga e volta a ligar o telefone"], answer: 2, why: "Os nomes dos menus mudam, por isso pesquisar nas Definições é a forma mais fácil de encontrar a definição." }
          ]
        },
        {
          objectives: ["O2"],
          title: "O seu telefone como lupa e leitor",
          minutes: 5,
          goal: "Usar o telefone para ampliar letras pequenas e para ler textos em voz alta.",
          text: [
            "A câmara do telefone pode servir de lupa para rótulos de medicamentos, ementas e recibos. Os iPhones têm uma aplicação chamada Lupa (Magnifier). Em muitos telefones Android pode usar o zoom da aplicação Câmara, ou pesquisar \"lupa\" nas Definições.",
            "Os telefones também podem ler textos em voz alta. Pesquise nas Definições \"conteúdo falado\" ou \"selecionar para ouvir\" e ligue. Depois pode selecionar um texto e escolher Falar. O Google Lens e alguns assistentes de IA também podem ler em voz alta uma página fotografada.",
            "Ligue a lanterna se houver pouca luz e segure o telefone firme, alguns centímetros acima da página."
          ],
          steps: ["Abra a Lupa, ou a aplicação Câmara, e amplie.", "Segure o telefone alguns centímetros acima das letras pequenas.", "Ligue a luz, se for preciso.", "Para ouvir o texto, pesquise nas Definições \"conteúdo falado\" ou \"selecionar para ouvir\" e ligue.", "Selecione o texto e escolha Falar."],
          words: [["Lupa", "uma ferramenta que faz as coisas pequenas parecerem maiores no ecrã."], ["Leitura em voz alta", "quando o telefone diz em voz alta as palavras escritas."]],
          slides: [
            { title: "Uma lupa no seu bolso", bullets: ["Rótulos de medicamentos, ementas, recibos", "iPhone: a aplicação Lupa", "Android: zoom da Câmara ou pesquise \"lupa\""] },
            { title: "Deixe o telefone ler para você", bullets: ["Pesquise \"conteúdo falado\" ou \"selecionar para ouvir\"", "Selecione o texto e escolha Falar"] },
            { title: "Dicas", bullets: ["Ligue a luz em lugares escuros", "Segure o telefone firme acima da página"] }
          ],
          tryIt: "Use o telefone para ampliar as letras pequenas de um rótulo de alimento ou de medicamento. Depois ligue a leitura em voz alta e faça o telefone ler-lhe uma mensagem.",
          youCanNow: "ampliar letras pequenas e fazer o telefone ler textos em voz alta.",
          quickCheck: [
            { objective: "O2", q: "Para que serve a aplicação Lupa num iPhone?", options: ["Tirar selfies", "Pôr as chamadas mais altas", "Enviar fotografias", "Usar a câmara como lupa"], answer: 3, why: "A Lupa transforma a câmara numa lupa para letras pequenas." },
            { objective: "O2", q: "Quer que o telefone leia em voz alta um artigo longo. O que pesquisa nas Definições?", options: ["\"Fundo do ecrã\"", "\"Conteúdo falado\" ou \"selecionar para ouvir\"", "\"Bateria\"", "\"Toque\""], answer: 1, why: "Ligar o conteúdo falado ou o selecionar para ouvir deixa selecionar um texto e escolher Falar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Legendas e ajuda para ouvir",
          minutes: 5,
          goal: "Ligar as legendas para poder ler o que está a ser dito.",
          text: [
            "Se as vozes em vídeos ou chamadas são difíceis de ouvir, as legendas mostram as palavras no ecrã enquanto são ditas.",
            "Muitos telefones têm uma função que põe legendas em quase todos os vídeos e sons, chamada Legendas instantâneas (Live Captions). Pesquise \"legenda\" nas Definições para a encontrar e ligar. No YouTube, toque no botão CC de um vídeo. Muitas aplicações de videochamada também têm um botão de legendas.",
            "Os telefones também se podem ligar por Bluetooth a muitos aparelhos auditivos modernos. Pesquise \"audição\" nas Definições para ver o que o seu telefone oferece, e pergunte ao profissional que cuida da sua audição que definições servem para os seus aparelhos auditivos."
          ],
          steps: ["Abra as Definições e pesquise \"legenda\".", "Ligue as Legendas instantâneas ou as legendas.", "No YouTube, toque em CC no vídeo.", "Nas videochamadas, procure um botão de legendas.", "Pesquise \"audição\" nas Definições para ver as opções para aparelhos auditivos."],
          words: [["Legendas", "palavras que aparecem no ecrã enquanto as pessoas falam."], ["Bluetooth", "uma forma de ligar o telefone sem fios a coisas como aparelhos auditivos ou colunas de som."]],
          slides: [
            { title: "Leia o que é dito", bullets: ["As legendas mostram as palavras faladas no ecrã"] },
            { title: "Ligar as legendas", bullets: ["Pesquise \"legenda\" nas Definições", "YouTube: toque em CC", "Videochamadas: procure um botão de legendas"] },
            { title: "Aparelhos auditivos", bullets: ["Muitos ligam-se por Bluetooth", "Pesquise \"audição\" nas Definições", "Pergunte ao profissional que cuida da sua audição"] }
          ],
          tryIt: "Pesquise \"legenda\" nas suas Definições e ligue as legendas, ou abra um vídeo qualquer no YouTube e toque em CC. Veja um minuto com legendas.",
          youCanNow: "ligar as legendas no seu aparelho e encontrar as definições de audição.",
          quickCheck: [
            { objective: "O3", q: "O que fazem as Legendas instantâneas?", options: ["Põem legendas em quase todos os vídeos e sons do telefone", "Gravam as suas chamadas", "Tiram fotografias", "Aumentam o volume"], answer: 0, why: "As Legendas instantâneas mostram no ecrã as palavras dos vídeos e dos sons." },
            { objective: "O3", q: "Quer ligar os seus aparelhos auditivos ao telefone. Qual é um bom primeiro passo?", options: ["Desligar o Bluetooth", "Comprar aparelhos auditivos novos", "Pesquisar \"audição\" nas Definições e perguntar ao profissional que cuida da sua audição", "Desligar o toque"], answer: 2, why: "As Definições mostram as opções de audição, e o profissional que cuida da sua audição sabe quais servem para os seus aparelhos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Tornar o seu aparelho mais fácil de ver e ouvir",
        questions: [
          { objective: "O1", q: "Os nomes dos menus mudam de telefone para telefone. Qual é a forma mais fácil de encontrar a definição do tamanho do texto?", options: ["Reiniciar o telefone", "Comprar outro telefone", "Abrir as Definições e pesquisar \"tamanho do texto\"", "Ligar para um desconhecido"], answer: 2, why: "A barra de pesquisa das Definições encontra-a em qualquer telefone." },
          { objective: "O1", q: "Como amplia em muitos ecrãs?", options: ["Afastando dois dedos no ecrã", "Abanando o telefone", "Carregando no botão de ligar", "Virando o telefone ao contrário"], answer: 0, why: "Afastar dois dedos faz as coisas ficarem maiores." },
          { objective: "O2", q: "Não consegue ler as letras muito pequenas de um frasco de medicamento. O que pode ajudar?", options: ["A aplicação de música", "A calculadora", "O relógio", "A lupa do telefone ou o zoom da câmara"], answer: 3, why: "A lupa aumenta as letras pequenas." },
          { objective: "O3", q: "O que são legendas?", options: ["Fotografias de comida", "Palavras que aparecem no ecrã enquanto as pessoas falam", "Um tipo de alarme", "Números de telefone"], answer: 1, why: "As legendas ajudam quando as vozes são difíceis de ouvir." },
          { objective: "O3", q: "No YouTube, que botão liga as legendas?", options: ["Partilhar", "CC", "Gosto", "Subscrever"], answer: 1, why: "CC quer dizer \"closed captions\", legendas em inglês." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tecnologia para a sua saúde",
      lessons: [
        {
          objectives: ["O4"],
          title: "Criar lembretes de medicamentos e de bem-estar",
          minutes: 5,
          goal: "Criar um lembrete que se repete todos os dias para um medicamento ou um hábito saudável.",
          text: [
            "Um lembrete diário no telefone pode ajudar a tomar os medicamentos a horas, a beber água ou a dar uma pequena caminhada.",
            "A forma mais fácil é pedir ao assistente de voz do telefone: \"Lembra-me de tomar o comprimido da manhã todos os dias às 8 da manhã.\" Também pode abrir a aplicação Relógio ou Lembretes, criar um alarme ou um lembrete e escolher que se repete todos os dias.",
            "Um lembrete só ajuda a lembrar; não diz o que deve tomar. Siga sempre as indicações do seu médico e do seu farmacêutico, e pergunte ao farmacêutico se tiver dúvidas sobre as horas. Algumas farmácias também oferecem lembretes gratuitos para renovar os medicamentos, por SMS ou por aplicação."
          ],
          steps: ["Peça ao assistente de voz, ou abra a aplicação Relógio ou Lembretes.", "Diga ou escreva o que quer lembrar e a hora.", "Escolha que se repete todos os dias.", "Confirme que ficou criado.", "Siga as indicações do seu médico e do seu farmacêutico."],
          words: [["Lembrete que se repete", "um lembrete que volta todos os dias ou todas as semanas sem o criar outra vez."], ["Renovar o medicamento", "obter mais de um medicamento que já toma."]],
          slides: [
            { title: "Os lembretes diários ajudam", bullets: ["Medicamentos a horas", "Beber água", "Uma pequena caminhada"] },
            { title: "Crie um", bullets: ["\"Lembra-me de tomar o comprimido todos os dias às 8 da manhã.\"", "Ou use a aplicação Relógio ou Lembretes", "Escolha \"todos os dias\""] },
            { title: "Lembre-se", bullets: ["O lembrete não diz o que deve tomar", "Siga o seu médico e o seu farmacêutico", "Pergunte na farmácia por lembretes para renovar"] }
          ],
          tryIt: "Crie um lembrete que se repete todos os dias para um medicamento que já toma, ou para um hábito saudável como uma caminhada de 10 minutos.",
          youCanNow: "criar um lembrete que se repete todos os dias para um medicamento ou um hábito saudável.",
          quickCheck: [
            { objective: "O4", q: "O que faz um lembrete que se repete?", options: ["Toca só uma vez", "Diz que medicamento deve tomar", "Encomenda os seus medicamentos", "Volta todos os dias à hora que escolheu"], answer: 3, why: "Um lembrete que se repete volta todos os dias; ajuda a lembrar mas não diz o que deve tomar." },
            { objective: "O4", q: "Não sabe se deve tomar um comprimido antes ou depois do pequeno-almoço. A quem pergunta?", options: ["À aplicação de lembretes", "Ao seu farmacêutico", "A um amigo", "A um site que vende vitaminas"], answer: 1, why: "Siga as indicações do seu médico e do seu farmacêutico, e pergunte ao farmacêutico sobre as horas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Preparar uma consulta médica com a IA",
          minutes: 5,
          goal: "Usar um assistente de IA para transformar as suas preocupações numa lista clara de perguntas para o médico.",
          text: [
            "As consultas médicas podem parecer apressadas, e é fácil esquecer o que queria perguntar. Um assistente de IA pode ajudar a organizar as suas ideias antes de ir.",
            "Descreva as suas preocupações com palavras gerais, sem o seu nome, a data de nascimento ou os números do seguro de saúde: \"Tenho uma consulta de rotina na próxima semana. Ando mais cansado do que é costume, os joelhos doem-me nas escadas e quero perguntar sobre o meu medicamento para a tensão arterial. Ajude-me a fazer uma lista curta de perguntas claras para fazer ao meu médico.\"",
            "A IA serve para preparar, não para diagnosticar. Não mude nem pare nenhum medicamento por causa do que uma IA diz. Leve a sua lista à consulta, anote as respostas do médico ou leve um familiar para ajudar."
          ],
          steps: ["Escreva as suas preocupações com palavras gerais, sem números privados.", "Peça à IA uma lista curta de perguntas claras.", "Ponha a pergunta mais importante em primeiro lugar.", "Leve a lista e anote as respostas.", "Nunca mude um medicamento por causa da IA; pergunte ao seu médico."],
          words: [["Diagnosticar", "decidir que doença ou problema uma pessoa tem; só um profissional de saúde o pode fazer."]],
          slides: [
            { title: "As consultas parecem apressadas", bullets: ["É fácil esquecer as perguntas", "A IA pode ajudar a preparar"] },
            { title: "Peça uma lista de perguntas", bullets: ["Descreva as preocupações com palavras gerais", "Sem nome, data de nascimento ou números do seguro", "A pergunta mais importante primeiro"] },
            { title: "Preparar, não diagnosticar", bullets: ["A IA não substitui o seu médico", "Nunca mude um medicamento por causa da IA", "Anote as respostas do médico"] }
          ],
          tryIt: "Pense na sua próxima consulta. Peça a um assistente de IA para transformar duas ou três das suas preocupações numa lista curta de perguntas. Confirme que não tem números privados e depois guarde-a ou imprima-a.",
          youCanNow: "preparar com a IA, com segurança, uma lista clara de perguntas para o seu médico.",
          quickCheck: [
            { objective: "O5", q: "Para que é útil a IA antes de uma consulta médica?", options: ["Diagnosticar a sua doença", "Mudar o seu medicamento", "Organizar as suas preocupações em perguntas claras", "Marcar uma cirurgia"], answer: 2, why: "A IA serve para preparar as suas perguntas, não para diagnosticar." },
            { objective: "O5", q: "Está a escrever as suas preocupações para a IA. O que deixa de fora?", options: ["Como se tem sentido", "O seu nome, a data de nascimento e os números do seguro", "Que tem uma consulta na próxima semana", "Que os joelhos lhe doem"], answer: 1, why: "Descreva as preocupações com palavras gerais, sem números privados." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Encontrar informação de saúde de confiança",
          minutes: 5,
          goal: "Verificar informação de saúde numa fonte gratuita e de confiança.",
          text: [
            "A informação de saúde na internet vai do excelente ao perigoso. Os assistentes de IA também se podem enganar sobre saúde. Por isso, verifique o que lê numa fonte de confiança.",
            "O MedlinePlus (medlineplus.gov) é um site gratuito de informação de saúde da Biblioteca Nacional de Medicina (National Library of Medicine), que faz parte dos Institutos Nacionais de Saúde dos Estados Unidos (NIH). Não tem publicidade e explica doenças, exames e medicamentos com palavras simples. O consultório do seu médico e o seu farmacêutico também são fontes de confiança.",
            "Desconfie de sites que vendem uma cura, prometem resultados milagrosos ou dizem para parar o seu medicamento. Quando alguma coisa que leu o preocupar, anote-a e pergunte ao seu médico ou farmacêutico."
          ],
          steps: ["Repare nas afirmações sobre saúde vindas da IA ou de sites.", "Procure-as em medlineplus.gov.", "Pergunte ao seu médico ou farmacêutico sobre tudo o que o preocupar.", "Evite sites que vendem curas ou prometem milagres."],
          words: [["Fonte de confiança", "um lugar seguro para obter informação, como um site de saúde do governo ou o seu próprio médico."], ["MedlinePlus", "um site gratuito de informação de saúde, sem publicidade, da Biblioteca Nacional de Medicina dos Estados Unidos."]],
          slides: [
            { title: "Nem toda a informação de saúde é boa", bullets: ["Os sites podem estar errados", "A IA também pode estar errada"] },
            { title: "MedlinePlus: medlineplus.gov", bullets: ["Gratuito e sem publicidade", "Da Biblioteca Nacional de Medicina dos EUA", "Explicações com palavras simples"] },
            { title: "Sinais de alerta", bullets: ["Vender uma cura", "Promessas de milagres", "\"Pare o seu medicamento\""] }
          ],
          sources: [{ name: "Sobre o MedlinePlus (Biblioteca Nacional de Medicina dos EUA)", url: "https://medlineplus.gov/about/general/aboutmedlineplus/" }],
          tryIt: "Tarefa final: mude uma definição para tornar o telefone mais fácil de ver ou ouvir, crie um lembrete diário para um medicamento ou uma caminhada, e use a IA para fazer uma lista curta de perguntas, sem números privados, para a sua próxima consulta. Procure um tema da sua lista em medlineplus.gov.",
          youCanNow: "tornar o seu aparelho mais fácil de usar, manter os seus hábitos de saúde diários, preparar as consultas e encontrar informação de saúde de confiança.",
          quickCheck: [
            { objective: "O6", q: "O que é o MedlinePlus?", options: ["Uma loja que vende medicamentos", "Uma aplicação de saúde paga", "Um assistente de IA", "Um site gratuito de informação de saúde, sem publicidade, da Biblioteca Nacional de Medicina"], answer: 3, why: "O MedlinePlus explica doenças, exames e medicamentos com palavras simples, sem publicidade." },
            { objective: "O6", q: "Um site diz que um chá vai curar a sua tensão arterial e que pode parar o seu medicamento. O que faz?", options: ["Trata isso como um sinal de alerta, anota e pergunta ao seu médico", "Para o medicamento e experimenta o chá", "Compra chá para um ano", "Partilha com os amigos"], answer: 0, why: "Os sites que prometem curas ou dizem para parar o medicamento são sinais de alerta; pergunte ao seu médico ou farmacêutico." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Tecnologia para a sua saúde",
        questions: [
          { objective: "O4", q: "Como faz um lembrete voltar todos os dias?", options: ["Apaga a aplicação", "Cria-o uma vez e espera que dê certo", "Desliga o telefone", "Escolhe que se repete todos os dias"], answer: 3, why: "Um lembrete que se repete volta todos os dias." },
          { objective: "O4", q: "Um lembrete do telefone diz-lhe que medicamento deve tomar?", options: ["Não, siga o seu médico e o seu farmacêutico", "Sim, sempre", "Só aos fins de semana", "Sim, se tocar alto"], answer: 0, why: "Ele só ajuda a lembrar." },
          { objective: "O5", q: "O que deve deixar de fora quando pede à IA ajuda para preparar uma consulta?", options: ["As suas preocupações", "A palavra \"médico\"", "O seu nome, a data de nascimento e os números do seguro", "A data da consulta"], answer: 2, why: "Os números privados nunca devem ir para a IA." },
          { objective: "O5", q: "A IA sugere que talvez não precise de um medicamento. O que faz?", options: ["Deixa de o tomar", "Pergunta a um desconhecido", "Toma o dobro da dose", "Pergunta ao seu médico; nunca mude um medicamento por causa da IA"], answer: 3, why: "Só o seu médico deve mudar o seu medicamento." },
          { objective: "O6", q: "Qual é um site gratuito de informação de saúde, sem publicidade, do governo dos EUA?", options: ["Um anúncio que aparece no ecrã", "Um site que vende uma cura milagrosa", "MedlinePlus", "Uma publicação numa rede social"], answer: 2, why: "O MedlinePlus é da Biblioteca Nacional de Medicina." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Saúde, Bem-estar e Acessibilidade com a Tecnologia",
    questions: [
      { objective: "O1", q: "A aplicação Definições aparece normalmente como:", options: ["Uma câmara", "Uma roda dentada", "Um telefone", "Um relógio"], answer: 1, why: "As Definições usam normalmente o desenho de uma roda dentada." },
      { objective: "O1", q: "Para encontrar depressa a definição do tamanho do texto, você:", options: ["Pesquisa \"tamanho do texto\" nas Definições", "Reinicia o telefone", "Abre a câmara", "Liga para o seu banco"], answer: 0, why: "Pesquisar funciona em qualquer telefone." },
      { objective: "O1", q: "Deslizar a barra do tamanho do texto para a direita faz o texto ficar:", options: ["Maior", "Mais pequeno", "Desaparecer", "Vermelho"], answer: 0, why: "Para a direita é maior." },
      { objective: "O1", q: "Juntar dois dedos no ecrã:", options: ["Amplia", "Reduz", "Desliga o telefone", "Tira uma fotografia"], answer: 1, why: "Juntar os dedos reduz; afastá-los amplia." },
      { objective: "O2", q: "A aplicação do iPhone que transforma a câmara numa lupa é:", options: ["Tempo", "Calculadora", "Lupa", "Música"], answer: 2, why: "A Lupa aumenta as letras pequenas." },
      { objective: "O2", q: "Num lugar escuro, a lupa funciona melhor se você:", options: ["Abanar o telefone", "Tapar a câmara", "Afastar muito o telefone", "Ligar a luz"], answer: 3, why: "A luz ajuda a câmara a ver bem." },
      { objective: "O2", q: "Para o telefone ler textos em voz alta, pesquise nas Definições:", options: ["\"toque\"", "\"fundo do ecrã\"", "\"conteúdo falado\" ou \"selecionar para ouvir\"", "\"bateria\""], answer: 2, why: "Esses são os nomes habituais da definição de leitura em voz alta." },
      { objective: "O3", q: "As legendas são:", options: ["Palavras no ecrã enquanto as pessoas falam", "Imagens", "Números de telefone", "Palavras-passe"], answer: 0, why: "As legendas mostram as palavras faladas." },
      { objective: "O3", q: "Para encontrar as Legendas instantâneas, pesquise nas Definições:", options: ["\"contactos\"", "\"câmara\"", "\"relógio\"", "\"legenda\""], answer: 3, why: "Pesquisar \"legenda\" encontra as definições de legendas." },
      { objective: "O3", q: "Muitos aparelhos auditivos modernos ligam-se ao telefone usando:", options: ["Um clipe de papel", "Bluetooth", "Um telefone fixo", "Um carregador"], answer: 1, why: "O Bluetooth é uma ligação sem fios." },
      { objective: "O3", q: "Quem deve ajudar a escolher as definições dos aparelhos auditivos?", options: ["Um anúncio que aparece no ecrã", "O profissional que cuida da sua audição", "Um desconhecido na internet", "Ninguém"], answer: 1, why: "Ele conhece os seus aparelhos auditivos e a sua audição." },
      { objective: "O4", q: "Que pedido falado cria um lembrete diário de medicamento?", options: ["\"Medicamento?\"", "\"Comprimido.\"", "\"Olá.\"", "\"Lembra-me de tomar o comprimido todos os dias às 8 da manhã.\""], answer: 3, why: "Diz o quê, quando e com que frequência." },
      { objective: "O4", q: "Se não tem a certeza de quando tomar um medicamento, pergunte:", options: ["Ao seu farmacêutico", "Só a uma IA", "A um vizinho", "A um anúncio que aparece no ecrã"], answer: 0, why: "Os farmacêuticos são especialistas em medicamentos." },
      { objective: "O5", q: "Antes de uma consulta médica, a IA é útil para:", options: ["Mudar o seu medicamento", "Diagnosticar você", "Organizar as suas perguntas", "Passar receitas"], answer: 2, why: "A IA ajuda a preparar, não a diagnosticar." },
      { objective: "O5", q: "\"Diagnosticar\" quer dizer:", options: ["Aumentar o texto", "Escrever uma lista", "Criar um lembrete", "Decidir que doença uma pessoa tem"], answer: 3, why: "Só um profissional de saúde pode diagnosticar." },
      { objective: "O5", q: "O que NÃO deve estar no seu pedido à IA sobre saúde?", options: ["\"Os meus joelhos doem\"", "\"Sinto-me cansado\"", "O número do seu seguro de saúde", "\"Tenho uma consulta na próxima semana\""], answer: 2, why: "Os números do seguro são privados." },
      { objective: "O5", q: "Na consulta, um bom hábito é:", options: ["Deixar a lista em casa", "Anotar as respostas do médico", "Não perguntar nada", "Confiar só na memória"], answer: 1, why: "Anotar as respostas ajuda a lembrar-se delas." },
      { objective: "O6", q: "O MedlinePlus é gerido por:", options: ["A Biblioteca Nacional de Medicina", "Uma empresa de suplementos", "Uma rede social", "Uma empresa de telefones"], answer: 0, why: "É um serviço da Biblioteca Nacional de Medicina, nos NIH." },
      { objective: "O6", q: "Um site que promete uma cura milagrosa é:", options: ["Um sinal de alerta", "Sempre de confiança", "Gerido pelo seu médico", "Cuidados médicos gratuitos"], answer: 0, why: "As promessas de milagres são sinais de alerta." },
      { objective: "O6", q: "Alguma coisa que leu sobre a sua saúde preocupa-o. Qual é o melhor passo?", options: ["Parar todos os medicamentos", "Anotar e perguntar ao seu médico ou farmacêutico", "Ignorar o seu médico", "Comprar o produto"], answer: 1, why: "O seu médico ou farmacêutico pode explicar com segurança." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 4, 7, 11, 13, 15, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Mais fácil de ver ou ouvir", objective: "O1", notYet: "Nenhuma definição mudada.", meets: "Mudou uma definição para ver ou ouvir melhor, como texto maior ou legendas.", exceeds: "Mudou duas ou mais definições e sabe mostrar a outra pessoa como se faz." },
      { name: "Lembrete diário", objective: "O4", notYet: "Nenhum lembrete, ou o lembrete não se repete.", meets: "Um lembrete que se repete todos os dias para um medicamento ou uma caminhada, confirmado que ficou criado.", exceeds: "A hora é a que o médico ou o farmacêutico indicou." },
      { name: "Perguntas claras", objective: "O5", notYet: "Nenhuma lista, ou as perguntas são vagas.", meets: "Uma lista curta e clara de perguntas feita com a ajuda da IA, a mais importante primeiro.", exceeds: "Tem espaço para anotar as respostas do médico." },
      { name: "Números privados de fora", objective: "O5", notYet: "O pedido ou a lista tem um nome, uma data de nascimento ou um número do seguro.", meets: "Nenhum número privado no pedido nem na lista.", exceeds: "As preocupações estão descritas com palavras gerais que mesmo assim dão ao médico uma ideia clara." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que ainda usam o lembrete de medicamento ou de bem-estar no seguimento aos 30 dias",
      "Alunos que levam uma lista escrita de perguntas a uma consulta médica em 30 dias (inquérito de seguimento)",
      "Alunos que começam outro curso de Seniors and Technology em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou tablet com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Alguma coisa com letras pequenas para praticar, como uma ementa ou uma caixa de medicamento vazia",
      "Cerca de 60 minutos no total, em sessões curtas e calmas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Junte os alunos por tipo de telefone para as definições no ecrã serem iguais, e ajude cada um a pesquisar nas Definições.",
      "Nunca dê conselhos médicos; encaminhe as perguntas sobre medicamentos e saúde para o médico ou o farmacêutico do aluno.",
      "Lembre aos alunos que não ponham nomes, datas de nascimento nem números do seguro nos pedidos à IA.",
      "Alguns alunos podem sentir vergonha da vista ou da audição; mantenha um tom prático e discreto.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
