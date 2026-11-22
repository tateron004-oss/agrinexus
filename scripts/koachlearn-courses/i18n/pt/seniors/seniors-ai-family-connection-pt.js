"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-ai-family-connection.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "seniors-ai-family-connection-pt",
  lang: "pt",
  translationOf: "seniors-ai-family-connection",
  category: "Seniors and Technology",
  name: "IA para Comunicar e Estar Perto da Família",
  skills: "Escrever mensagens carinhosas com a IA, Enviar uma SMS ou um e-mail, Entrar numa videochamada, Partilhar uma fotografia, Estar seguro nas mensagens da família",
  outcome: "usar um assistente de IA para ajudar a escrever uma mensagem carinhosa a um familiar, enviá-la por SMS ou e-mail, e combinar e entrar numa videochamada com essa pessoa.",
  about: [
    "Este curso é para avós, pais, tios, tias e amigos que querem continuar perto das pessoas de quem gostam, mesmo quando vivem longe.",
    "Você vai usar um assistente de IA para ajudar a encontrar as palavras certas para um aniversário, uma mensagem de melhoras ou um simples olá. Depois vai enviar a sua mensagem, partilhar uma fotografia e entrar numa videochamada para ver o rosto da sua família.",
    "Cada lição dura cerca de cinco minutos e avança um passo de cada vez. Leia a lição, veja os slides e faça a tarefa \"Experimente agora\". É boa ideia praticar com um familiar que já usa estas ferramentas. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Use um assistente de IA para ajudar a escrever uma mensagem curta e carinhosa a convidar um familiar para uma videochamada. Faça uma mudança para que soe como você, envie-a por SMS ou e-mail e depois entre na chamada à hora combinada e diga olá.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas que querem continuar perto dos filhos, netos e outros familiares que vivem longe ou têm pouco tempo. Muitas sentem-se de fora quando a família fala por SMS, vídeo e fotografias.",
    startingPoint: "Sabem fazer chamadas e talvez enviar SMS simples. Alguns têm um smartphone ou um tablet, mas nunca usaram um assistente de IA, nunca copiaram e colaram, nunca entraram numa videochamada nem partilharam uma fotografia.",
    gap: "Hoje a vida da família passa por SMS, videochamadas e fotografias partilhadas. As pessoas mais velhas que conseguem escrever uma mensagem carinhosa com a ajuda da IA, enviá-la, entrar numa videochamada e partilhar uma fotografia ficam ligadas à família e sentem-se menos sós, e as que reconhecem uma falsa emergência familiar protegem as suas poupanças.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: um smartphone, tablet ou computador com câmara; os botões pequenos podem ser difíceis de tocar",
      "Tempo: cerca de 5 minutos por lição, com calma, mais uma chamada de prática com a família",
      "Cada família usa aplicações diferentes; os alunos usam a que a sua família já usa",
      "Risco alto de burlas: nunca envie dinheiro nem códigos antes de ligar para a família num número conhecido"
    ],
    prerequisites: "O curso \"IA para Pessoas Mais Velhas: Usar Assistentes de IA\" ajuda se for feito antes, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando um assistente de IA gratuito", action: "pedir o rascunho de uma mensagem para a família que diga para quem é, sobre o que é, o tom e o tamanho", standard: "para que o primeiro rascunho sirva para essa pessoa" },
    { id: "O2", condition: "Com um rascunho feito pela IA", action: "mudar o rascunho para que soe como você e acrescentar um detalhe pessoal", standard: "para que soe natural quando o diz em voz alta" },
    { id: "O3", condition: "Com uma mensagem pronta na aplicação de IA", action: "copiá-la e colá-la numa SMS ou num e-mail e depois enviá-la", standard: "à pessoa certa, verificada antes de tocar em Enviar" },
    { id: "O4", condition: "Com uma videochamada ou um link enviado por um familiar", action: "entrar na chamada e ligar o microfone e a câmara", standard: "com o seu rosto bem visto e a sua voz bem ouvida" },
    { id: "O5", condition: "Usando a câmara do seu telefone ou tablet", action: "tirar uma fotografia e partilhá-la com um familiar com uma legenda curta", standard: "sem ajuda" },
    { id: "O6", condition: "Quando uma mensagem ou chamada diz que um familiar está em apuros e precisa de dinheiro", action: "reconhecer os sinais de alerta de uma burla de emergência familiar e confirmar ligando para um número que já tem", standard: "sem enviar dinheiro nem códigos antes de confirmar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar as palavras certas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Usar a IA para ajudar a escrever uma mensagem à família",
          minutes: 5,
          goal: "Pedir a um assistente de IA o rascunho de uma mensagem curta para um familiar.",
          text: [
            "Às vezes, o mais difícil para manter o contacto é saber o que dizer. Um assistente de IA, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, pode escrever um primeiro rascunho para você em segundos.",
            "Diga-lhe para quem é a mensagem, sobre o que é e como quer que soe. Por exemplo: \"Escreva uma SMS curta e alegre para o meu neto Leo, que acabou a primeira semana na universidade. Tenho orgulho nele. Use menos de 40 palavras.\"",
            "O rascunho é um ponto de partida, não a palavra final. Você conhece a sua família; o assistente não."
          ],
          steps: ["Abra o seu assistente de IA.", "Diga para quem é a mensagem e sobre o que é.", "Diga como deve soar: alegre, carinhosa, divertida ou simples.", "Diga qual deve ser o tamanho."],
          words: [["Rascunho", "uma primeira versão de uma mensagem que pode mudar antes de a enviar."], ["Tom", "a forma como uma mensagem soa, por exemplo carinhosa, divertida ou séria."]],
          slides: [
            { title: "Não sabe o que dizer?", bullets: ["Um assistente de IA pode escrever um primeiro rascunho", "Leva só alguns segundos"] },
            { title: "Diga-lhe quatro coisas", bullets: ["Para quem é", "Sobre o que é", "Como deve soar", "Qual deve ser o tamanho"] },
            { title: "Lembre-se", bullets: ["O rascunho é um ponto de partida", "Quem conhece melhor a sua família é você"] }
          ],
          tryIt: "Pense num familiar de quem gostaria de ter notícias. Peça a um assistente que escreva uma mensagem curta e carinhosa para essa pessoa sobre algo real, como um aniversário, um trabalho novo ou um simples olá.",
          youCanNow: "pedir a um assistente de IA o rascunho de uma mensagem curta para alguém de quem gosta.",
          quickCheck: [
            { objective: "O1", q: "O que é um rascunho de mensagem feito pela IA?", options: ["A mensagem final que a IA envia por você", "Uma mensagem da sua família", "Um ponto de partida que pode mudar", "Um código secreto"], answer: 2, why: "O rascunho é um ponto de partida; você conhece a sua família e o assistente não." },
            { objective: "O1", q: "Quer uma mensagem para o aniversário da sua neta. O que diz ao assistente?", options: ["Para quem é, sobre o que é, como deve soar e qual deve ser o tamanho", "Só a palavra \"aniversário\"", "A morada e o número de telefone dela", "Nada; ele adivinha"], answer: 0, why: "Dizer para quem, sobre o quê, o tom e o tamanho dá um rascunho que serve." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fazer a mensagem soar como você",
          minutes: 4,
          goal: "Mudar um rascunho da IA para que soe com a sua própria voz.",
          text: [
            "Os rascunhos da IA podem soar um pouco rígidos ou pomposos demais. A sua família vai notar se não soar como você, por isso faça a mensagem sua.",
            "Pode pedir ao assistente: \"Faça soar mais natural.\" \"Use palavras mais curtas.\" \"Acrescente que vou fazer a tarte de maçã de que ele mais gosta quando vier cá.\" Ou pode simplesmente mudar você mesmo as palavras.",
            "Acrescente um detalhe que só você conhece: uma alcunha, uma lembrança, uma piada que só vocês entendem. É isso que torna uma mensagem pessoal."
          ],
          steps: ["Leia o rascunho em voz alta.", "Marque as palavras que você nunca diria.", "Peça uma mudança ou mude você mesmo as palavras.", "Acrescente um detalhe pessoal que só você conhece."],
          words: [["Detalhe pessoal", "algo próprio de você e da outra pessoa, como uma lembrança ou uma alcunha."]],
          slides: [
            { title: "Faça a mensagem sua", bullets: ["Leia o rascunho em voz alta", "Mude as palavras que nunca diria"] },
            { title: "Peça mudanças", bullets: ["\"Faça soar mais natural.\"", "\"Use palavras mais curtas.\"", "\"Acrescente que vou fazer a tarte de que ele mais gosta.\""] },
            { title: "Dê um toque pessoal", bullets: ["Uma alcunha", "Uma lembrança partilhada", "Uma piada só vossa"] }
          ],
          tryIt: "Pegue no seu rascunho da Lição 1. Leia-o em voz alta, faça uma mudança para que soe como você e acrescente um detalhe pessoal.",
          youCanNow: "transformar um rascunho da IA numa mensagem que soa como você.",
          quickCheck: [
            { objective: "O2", q: "Porque mudar um rascunho da IA antes de o enviar?", options: ["A IA faz todas as mensagens curtas demais", "Para que soe como você, porque a sua família vai notar se não soar", "Porque os rascunhos da IA são sempre mal-educados", "Porque as SMS têm de ser compridas"], answer: 1, why: "Os rascunhos da IA podem soar rígidos; fazê-los seus mantém-nos pessoais." },
            { objective: "O2", q: "O seu rascunho está bom, mas parece simples demais. O que acrescenta?", options: ["Um poema comprido", "Os seus dados do banco", "Um detalhe que só você conhece, como uma alcunha ou uma lembrança", "Muitas palavras difíceis"], answer: 2, why: "Uma alcunha, uma lembrança ou uma piada só vossa torna uma mensagem pessoal." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Enviar a sua mensagem por SMS ou e-mail",
          minutes: 6,
          goal: "Copiar a sua mensagem e enviá-la por SMS ou por e-mail.",
          text: [
            "Quando a mensagem estiver pronta, tem de a passar do assistente de IA para a sua aplicação de SMS ou de e-mail. Faz isso copiando e colando.",
            "Para copiar num telefone ou tablet: carregue com o dedo no texto e mantenha até aparecer um menu, depois toque em Copiar. Muitas aplicações de IA também mostram um pequeno botão de copiar por baixo da resposta. No computador, selecione o texto com o rato, clique com o botão direito e escolha Copiar.",
            "Depois abra a aplicação Mensagens ou de e-mail, comece uma mensagem nova para o seu familiar, carregue e mantenha na caixa de mensagem e toque em Colar (no computador, clique com o botão direito e escolha Colar). Leia-a uma última vez e envie."
          ],
          steps: ["Copie a mensagem: carregue e mantenha, depois toque em Copiar, ou use o botão de copiar.", "Abra a aplicação Mensagens ou de e-mail.", "Comece uma mensagem nova para o seu familiar.", "Carregue e mantenha na caixa de mensagem e toque em Colar.", "Leia mais uma vez e depois toque em Enviar."],
          words: [["Copiar e colar", "pegar num texto de um lugar e pô-lo noutro, sem o escrever de novo."], ["SMS", "uma mensagem escrita curta enviada de um telefone para outro."]],
          slides: [
            { title: "Copie a mensagem", bullets: ["Carregue e mantenha no texto, depois toque em Copiar", "Ou toque no botão de copiar por baixo da resposta", "Computador: botão direito do rato, depois Copiar"] },
            { title: "Cole a mensagem", bullets: ["Abra as Mensagens ou o e-mail", "Comece uma mensagem nova", "Carregue e mantenha, depois toque em Colar"] },
            { title: "Antes de enviar", bullets: ["Verifique o nome da pessoa", "Leia mais uma vez", "Toque em Enviar"] }
          ],
          tryIt: "Copie a sua mensagem pronta da Lição 2 e envie-a ao seu familiar por SMS ou e-mail.",
          youCanNow: "copiar uma mensagem de um assistente de IA e enviá-la por SMS ou e-mail.",
          quickCheck: [
            { objective: "O3", q: "O que faz Colar?", options: ["Põe o texto que copiou num lugar novo", "Apaga a sua mensagem", "Envia a mensagem logo", "Tira uma fotografia"], answer: 0, why: "Copia o texto numa aplicação e cola-o na caixa de mensagem de outra." },
            { objective: "O3", q: "Já copiou a sua mensagem da aplicação de IA. O que faz a seguir?", options: ["Desliga o telefone", "Copia outra vez", "Liga para o familiar", "Abre as Mensagens ou o e-mail, começa uma mensagem para essa pessoa e cola o texto"], answer: 3, why: "Abra a aplicação Mensagens ou de e-mail, comece uma mensagem nova e cole o texto." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar as palavras certas",
        questions: [
          { objective: "O1", q: "O que deve dizer ao assistente de IA quando pede uma mensagem para a família?", options: ["O seu número do banco", "Só uma palavra", "Para quem é, sobre o que é, o tom e o tamanho", "A sua palavra-passe"], answer: 2, why: "Essas quatro coisas ajudam o assistente a escrever um rascunho útil." },
          { objective: "O2", q: "O rascunho soa pomposo demais. O que faz?", options: ["Pede que soe mais natural ou muda você mesmo as palavras", "Apaga a aplicação", "Envia-o na mesma", "Desiste"], answer: 0, why: "Pode pedir mudanças ou editá-lo para que soe como você." },
          { objective: "O2", q: "O que torna uma mensagem pessoal?", options: ["Copiar um cartão de uma loja", "Palavras muito compridas", "Muitos pontos de exclamação", "Um detalhe que só você conhece, como uma lembrança"], answer: 3, why: "Uma lembrança partilhada ou uma alcunha faz a mensagem sua." },
          { objective: "O3", q: "Num telefone, como costuma copiar um texto?", options: ["Abana o telefone", "Carrega e mantém no texto, depois toca em Copiar", "Desliga o telefone", "Tira uma fotografia ao texto"], answer: 1, why: "Carregar e manter abre um menu com Copiar." },
          { objective: "O3", q: "O que deve verificar antes de tocar em Enviar?", options: ["Só o nível da bateria", "Que vai para a pessoa certa", "Nada", "O tempo que faz lá fora"], answer: 1, why: "Verificar o nome evita enviar a mensagem à pessoa errada." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ver e partilhar com a família",
      lessons: [
        {
          objectives: ["O4"],
          title: "Entrar numa videochamada",
          minutes: 6,
          goal: "Entrar numa videochamada com um familiar e usar a câmara e o microfone.",
          text: [
            "Uma videochamada deixa você ver e ouvir alguém ao mesmo tempo, de qualquer lugar. Algumas aplicações gratuitas conhecidas são o FaceTime (no iPhone e no iPad), o WhatsApp, o Google Meet e o Zoom. Muitas vezes a família escolhe a que a maioria já usa.",
            "A forma mais fácil de começar é deixar que um familiar lhe ligue. Quando a chamada chegar, toque no botão verde ou em Aceitar. Se lhe enviarem um link, toque no link à hora combinada e depois toque em Participar.",
            "Quando estiver na chamada, encontre os botões do microfone e da câmara. Se um botão tem um risco por cima, está desligado; toque nele para o ligar. Segure o aparelho à altura dos olhos, com a luz à sua frente e não atrás, para verem o seu rosto."
          ],
          steps: ["Combine uma hora e uma aplicação com o seu familiar.", "Quando a chamada chegar, toque em Aceitar, ou toque no link que enviaram e toque em Participar.", "Verifique que o microfone e a câmara estão ligados.", "Segure o aparelho à altura dos olhos, com a luz à sua frente.", "Toque no botão vermelho para terminar a chamada."],
          words: [["Videochamada", "uma chamada em que se veem e ouvem um ao outro no ecrã."], ["Link", "um texto azul ou sublinhado em que toca para ir a algum lugar, como uma chamada."], ["Silenciar", "desligar o seu microfone para que os outros não o ouçam."]],
          slides: [
            { title: "Aplicações gratuitas de videochamada", bullets: ["FaceTime no iPhone e no iPad", "WhatsApp, Google Meet, Zoom", "Use a que a sua família usa"] },
            { title: "Entrar", bullets: ["Toque em Aceitar quando lhe ligarem", "Ou toque no link deles, depois em Participar", "Entre à hora combinada"] },
            { title: "Na chamada", bullets: ["Um risco por cima de um botão quer dizer que está desligado", "Ligue o microfone e a câmara", "O botão vermelho termina a chamada"] },
            { title: "Para ficar bem na imagem", bullets: ["Aparelho à altura dos olhos", "Luz à sua frente, não atrás"] }
          ],
          tryIt: "Peça a um familiar que lhe ligue pela aplicação que ele usa. Atenda, verifique que a câmara e o microfone estão ligados, diga olá e depois termine a chamada com o botão vermelho.",
          youCanNow: "entrar numa videochamada, ligar e desligar a câmara e o microfone e terminar a chamada.",
          quickCheck: [
            { objective: "O4", q: "O que é uma videochamada?", options: ["Um filme gravado", "Uma chamada em que se veem e ouvem ao mesmo tempo", "Uma mensagem de voz", "Um álbum de fotografias"], answer: 1, why: "Uma videochamada deixa você ver e ouvir alguém ao mesmo tempo, de qualquer lugar." },
            { objective: "O4", q: "Numa videochamada, a sua família diz que não vê bem o seu rosto. O que muda?", options: ["Aumenta o volume", "Termina a chamada", "Senta-se com uma janela clara atrás de você", "Segura o aparelho à altura dos olhos, com a luz à sua frente"], answer: 3, why: "A altura dos olhos e a luz à sua frente deixam ver o seu rosto." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Partilhar uma fotografia com a família",
          minutes: 5,
          goal: "Tirar uma fotografia e enviá-la a um familiar.",
          text: [
            "Partilhar fotografias é uma das melhores formas de continuar perto. Pode enviar uma fotografia do seu quintal, de uma refeição que cozinhou ou de uma página de um álbum de fotografias antigo.",
            "Abra a aplicação Câmara, aponte para o que quer e toque no botão grande e redondo. Para a enviar, abra a aplicação Fotos ou Galeria, toque na fotografia e depois toque no botão Partilhar (muitas vezes um quadrado com uma seta, ou três pontos ligados por linhas). Escolha Mensagens, e-mail ou WhatsApp e depois escolha o seu familiar.",
            "Um assistente de IA pode ajudar a escrever uma legenda, por exemplo: \"Escreva uma legenda curta e divertida para uma fotografia do meu primeiro tomate maduro deste verão.\""
          ],
          steps: ["Abra a aplicação Câmara e toque no botão redondo.", "Abra Fotos ou Galeria e toque na fotografia.", "Toque no botão Partilhar.", "Escolha Mensagens, e-mail ou WhatsApp e depois o seu familiar.", "Acrescente algumas palavras e envie."],
          words: [["Botão Partilhar", "um botão que envia uma fotografia ou uma página a outra pessoa."], ["Legenda", "uma linha curta de palavras que acompanha uma fotografia."]],
          slides: [
            { title: "Tire a fotografia", bullets: ["Abra a aplicação Câmara", "Toque no botão grande e redondo"] },
            { title: "Envie a fotografia", bullets: ["Abra Fotos ou Galeria", "Toque na fotografia, depois no botão Partilhar", "Escolha uma aplicação, depois o seu familiar"] },
            { title: "Acrescente uma legenda", bullets: ["Escreva você mesmo algumas palavras", "Ou peça à IA uma legenda curta e divertida"] }
          ],
          tryIt: "Tire uma fotografia de algo de que se orgulha. Peça a um assistente de IA uma legenda curta e depois envie a fotografia com a legenda a um familiar.",
          youCanNow: "tirar uma fotografia, acrescentar uma legenda e partilhá-la com a família.",
          quickCheck: [
            { objective: "O5", q: "O que faz o botão Partilhar na aplicação Fotos?", options: ["Apaga a fotografia", "Faz a fotografia maior", "Deixa enviar a fotografia por Mensagens, e-mail ou WhatsApp", "Tira uma fotografia nova"], answer: 2, why: "Toque na fotografia, toque em Partilhar e depois escolha como e a quem a enviar." },
            { objective: "O5", q: "Quer algumas palavras divertidas para acompanhar uma fotografia do seu quintal. O que pode fazer?", options: ["Pedir a um assistente de IA que escreva uma legenda curta", "Enviar sempre a fotografia sem palavras", "Publicá-la para desconhecidos", "Tirar mais dez fotografias"], answer: 0, why: "Um assistente de IA pode ajudar a escrever uma legenda curta para uma fotografia." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Estar seguro nas mensagens da família",
          minutes: 5,
          goal: "Reconhecer uma falsa mensagem de \"emergência familiar\" e confirmá-la com segurança.",
          text: [
            "Às vezes os burlões fingem ser um neto ou um familiar em apuros. Podem enviar uma SMS de um número novo (\"Olá avó, perdi o meu telefone\") ou até usar IA para copiar uma voz ao telefone. Costumam pedir dinheiro depressa, muitas vezes por cartão-presente, transferência bancária ou aplicação de pagamentos, e pedem para guardar segredo.",
            "A família verdadeira pode esperar alguns minutos enquanto você confirma. Desligue ou deixe de responder e depois ligue para o seu familiar, ou para o pai ou a mãe dele, no número que já tem guardado.",
            "Algumas famílias combinam uma palavra secreta que só elas conhecem, para usar numa emergência. Nunca envie dinheiro antes de falar com a pessoa num número em que confia. Nos Estados Unidos, pode denunciar burlas à Comissão Federal de Comércio (Federal Trade Commission, FTC) em ReportFraud.ftc.gov."
          ],
          steps: ["Repare nos sinais: número novo, pressa, pedido de dinheiro, pedido de segredo.", "Deixe de responder ou desligue.", "Ligue para o seu familiar no número que já tem.", "Combine uma palavra-código da família para emergências.", "Denuncie burlas em ReportFraud.ftc.gov."],
          words: [["Burla dos avós", "um truque em que alguém finge ser um neto em apuros para conseguir dinheiro."], ["Palavra-código", "uma palavra secreta que a sua família combina para provar quem está mesmo a ligar."]],
          slides: [
            { title: "A falsa emergência", bullets: ["\"Olá avó, perdi o meu telefone\"", "Uma voz copiada ao telefone", "Pede dinheiro depressa e em segredo"] },
            { title: "O que fazer", bullets: ["Deixe de responder ou desligue", "Ligue no número que já tem", "Nunca envie dinheiro antes de ter a certeza"] },
            { title: "Esteja preparado", bullets: ["Combine uma palavra-código da família", "Denuncie burlas em ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Como evitar uma burla (em inglês)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Denunciar uma fraude (em inglês)", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Tarefa final: peça a um assistente de IA que ajude a escrever uma mensagem curta e carinhosa a convidar um familiar para uma videochamada. Faça-a soar como você, envie-a por SMS ou e-mail e entre na chamada à hora combinada. Enquanto conversam, combinem uma palavra-código da família.",
          youCanNow: "manter o contacto com a família por mensagem, fotografia e videochamada, e confirmar com segurança uma mensagem suspeita da \"família\".",
          quickCheck: [
            { objective: "O6", q: "O que é uma palavra-código da família?", options: ["A palavra-passe do seu telefone", "Uma palavra que só a sua família conhece, para provar quem está a ligar numa emergência", "O nome da sua aplicação de vídeo", "Uma palavra que publica na internet"], answer: 1, why: "Algumas famílias combinam uma palavra secreta para confirmar quem está mesmo a ligar." },
            { objective: "O6", q: "Uma voz parecida com a do seu neto pede para enviar dinheiro depressa e guardar segredo. O que faz primeiro?", options: ["Envia o dinheiro e pergunta depois", "Guarda segredo como pediram", "Para e liga para o seu neto ou para o pai ou a mãe dele no número que já tem", "Dá-lhes o código do seu telefone"], answer: 2, why: "A pressa, o segredo e o pedido de dinheiro são sinais de burla; ligue de volta para um número em que confia." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ver e partilhar com a família",
        questions: [
          { objective: "O4", q: "Um familiar envia-lhe um link para uma videochamada. O que faz à hora combinada?", options: ["Apaga-o", "Desliga o telefone", "Reencaminha-o para desconhecidos", "Toca no link e depois em Participar"], answer: 3, why: "Tocar no link e em Participar leva você para a chamada." },
          { objective: "O4", q: "O botão do microfone tem um risco por cima. O que quer dizer?", options: ["O seu microfone está desligado", "A chamada acabou", "A bateria está fraca", "A sua câmara está avariada"], answer: 0, why: "Um risco por cima de um botão quer dizer que está desligado." },
          { objective: "O4", q: "Onde deve estar a luz durante uma videochamada?", options: ["Atrás de você", "Não deve haver luz", "À sua frente", "Debaixo da mesa"], answer: 2, why: "A luz à sua frente deixa a sua família ver o seu rosto." },
          { objective: "O5", q: "Como envia uma fotografia a partir da aplicação Fotos?", options: ["Vira o telefone ao contrário", "Tira uma captura de ecrã da bateria", "Apaga a fotografia", "Toca na fotografia, depois no botão Partilhar e depois escolhe uma pessoa"], answer: 3, why: "O botão Partilhar envia a fotografia pela aplicação e à pessoa que escolher." },
          { objective: "O6", q: "Uma SMS de um número novo diz \"Avô, estou em apuros, envia cartões-presente e não digas à mãe.\" O que faz?", options: ["Compra os cartões-presente", "Responde com o seu número do banco", "Liga para o seu neto ou para o pai ou a mãe dele no número que já tem", "Guarda segredo"], answer: 2, why: "A pressa, o segredo e os cartões-presente são sinais de burla; confirme num número em que confia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Comunicar e Estar Perto da Família",
    questions: [
      { objective: "O1", q: "Como pode um assistente de IA ajudar você a manter o contacto com a família?", options: ["Pode visitá-los por você", "Pode escrever o primeiro rascunho de uma mensagem", "Sabe os números de telefone deles", "Envia dinheiro por você"], answer: 1, why: "Escrever rascunhos de mensagens é um ponto forte dos assistentes de IA." },
      { objective: "O1", q: "Que pedido vai dar a melhor mensagem para a família?", options: ["\"Escreva uma SMS curta e alegre para a minha neta Ava, que ganhou o jogo de futebol. Use menos de 40 palavras.\"", "\"mensagem\"", "\"SMS\"", "\"olá\""], answer: 0, why: "Diz para quem, sobre o quê, o tom e o tamanho." },
      { objective: "O1", q: "O que é um rascunho?", options: ["Uma primeira versão que pode mudar", "Um vento frio", "A cópia final", "Um tipo de aplicação"], answer: 0, why: "Um rascunho é um ponto de partida que pode melhorar." },
      { objective: "O1", q: "O que quer dizer \"tom\" numa mensagem?", options: ["O toque do telefone", "A forma como a mensagem soa, por exemplo carinhosa ou divertida", "O tamanho da letra", "O número de telefone"], answer: 1, why: "O tom é o que a mensagem faz sentir a quem a lê." },
      { objective: "O2", q: "Uma boa forma de ver se um rascunho soa como você é:", options: ["Enviá-lo sem ler", "Torná-lo mais comprido", "Lê-lo em voz alta", "Acrescentar palavras difíceis"], answer: 2, why: "Ler em voz alta mostra as palavras que você nunca diria." },
      { objective: "O2", q: "O que torna uma mensagem pessoal?", options: ["Palavras pomposas", "Escrever tudo em letras maiúsculas", "Copiá-la de um cartão", "Uma lembrança partilhada ou uma alcunha"], answer: 3, why: "Os detalhes que só você conhece fazem a mensagem sua." },
      { objective: "O3", q: "Para copiar um texto num telefone, normalmente:", options: ["Toca na câmara", "Abana o telefone", "Carrega e mantém, depois toca em Copiar", "Aumenta o volume"], answer: 2, why: "Carregar e manter abre o menu Copiar." },
      { objective: "O3", q: "Depois de copiar, como põe a mensagem numa SMS?", options: ["Carrega e mantém na caixa de mensagem e toca em Colar", "Escreve de novo todas as palavras", "Tira uma fotografia", "Liga para a pessoa"], answer: 0, why: "Colar põe o texto copiado na caixa de mensagem." },
      { objective: "O3", q: "O que deve verificar antes de tocar em Enviar?", options: ["Nada", "O tempo que faz lá fora", "A sua palavra-passe", "O nome da pessoa"], answer: 3, why: "Verificar o nome evita enviar à pessoa errada." },
      { objective: "O4", q: "Qual destas é uma aplicação de videochamada?", options: ["Calculadora", "FaceTime", "Relógio", "Lanterna"], answer: 1, why: "O FaceTime, o WhatsApp, o Google Meet e o Zoom fazem videochamadas." },
      { objective: "O4", q: "Quando um familiar lhe faz uma videochamada, você toca:", options: ["No botão vermelho", "No botão verde ou em Aceitar", "No rolo da câmara", "Nas Definições"], answer: 1, why: "O verde ou Aceitar atende a chamada; o vermelho termina-a." },
      { objective: "O4", q: "Um botão com um risco por cima está:", options: ["Ligado", "A gravar", "Avariado", "Desligado"], answer: 3, why: "Um risco por cima quer dizer que está desligado." },
      { objective: "O4", q: "Para terminar uma videochamada, normalmente toca:", options: ["No botão vermelho", "No botão verde", "No botão do volume", "No microfone"], answer: 0, why: "O botão vermelho termina a chamada." },
      { objective: "O4", q: "Onde deve segurar o aparelho numa videochamada?", options: ["Perto do chão", "Atrás da cabeça", "À altura dos olhos", "No bolso"], answer: 2, why: "A altura dos olhos deixa a sua família ver o seu rosto." },
      { objective: "O5", q: "O botão Partilhar serve para:", options: ["Apagar uma fotografia", "Desligar o telefone", "Tirar uma fotografia", "Enviar uma fotografia a alguém"], answer: 3, why: "Partilhar envia a fotografia pela aplicação que escolher." },
      { objective: "O5", q: "Uma legenda é:", options: ["Um número de telefone", "Um tipo de câmara", "Uma linha curta de palavras com uma fotografia", "Uma palavra-passe"], answer: 2, why: "Uma legenda descreve a fotografia." },
      { objective: "O6", q: "Uma mensagem de um número novo diz que é o seu neto e que precisa de dinheiro depressa. A primeira coisa a fazer é:", options: ["Enviar dinheiro", "Parar e ligar para o seu neto no número que já tem", "Partilhar os seus dados do banco", "Guardar segredo"], answer: 1, why: "Confirmar num número conhecido trava esta burla." },
      { objective: "O6", q: "Os burlões podem usar a IA para:", options: ["Copiar a voz de um familiar", "Arranjar o seu telefone", "Enviar-lhe uma carta do banco pelo correio", "Visitar a sua casa"], answer: 0, why: "A cópia de vozes com IA é usada nas burlas de emergência familiar." },
      { objective: "O6", q: "Em que ajuda uma palavra-código da família?", options: ["A provar quem está mesmo a ligar numa emergência", "A desbloquear o telefone", "A tornar as videochamadas mais nítidas", "A pagar contas"], answer: 0, why: "Só a sua família verdadeira conhece a palavra-código." },
      { objective: "O6", q: "Onde pode denunciar uma burla nos Estados Unidos?", options: ["Num anúncio que aparece no ecrã", "Em ReportFraud.ftc.gov", "No número de quem ligou", "Num comentário numa rede social"], answer: 1, why: "A Comissão Federal de Comércio (FTC) recebe denúncias de burlas em ReportFraud.ftc.gov." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      4,
      6,
      9,
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
        name: "Pedido claro à IA",
        objective: "O1",
        notYet: "O pedido só diz \"escreva uma mensagem\".",
        meets: "O pedido diz para quem é, que é um convite para uma videochamada, o tom e o tamanho.",
        exceeds: "O primeiro rascunho quase não precisou de mudanças."
      },
      {
        name: "Soa como você",
        objective: "O2",
        notYet: "Enviou o rascunho da IA tal como estava.",
        meets: "Fez pelo menos uma mudança para que soe como você.",
        exceeds: "Acrescentou um detalhe pessoal que só você conhece, como uma alcunha ou uma lembrança."
      },
      {
        name: "Enviada à pessoa certa",
        objective: "O3",
        notYet: "A mensagem não foi enviada, ou foi para a pessoa errada.",
        meets: "Copiou, colou e enviou a mensagem por SMS ou e-mail à pessoa certa.",
        exceeds: "Verificou o nome e as palavras mais uma vez antes de enviar."
      },
      {
        name: "Entrou na chamada",
        objective: "O4",
        notYet: "Não conseguiu entrar, ou o microfone ou a câmara ficaram desligados.",
        meets: "Entrou à hora combinada com o microfone e a câmara ligados e disse olá.",
        exceeds: "Segurou o aparelho à altura dos olhos, com boa luz, e terminou a chamada com o botão vermelho."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter feito uma videochamada ou partilhado uma fotografia com a família em 30 dias (inquérito de seguimento)",
      "Alunos cuja família combinou uma palavra-código, e que dizem ter confirmado uma mensagem suspeita da família",
      "Alunos que começam outro curso de Seniores e Tecnologia em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone, tablet ou computador com câmara e internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini) e a aplicação de videochamada da família",
      "Um familiar ou ajudante que aceite fazer uma videochamada de prática",
      "Cerca de 60 minutos no total, em sessões curtas e calmas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes do curso, pergunte aos alunos que aplicação de vídeo a família já usa e pratique com essa.",
      "Organize videochamadas de prática entre os alunos na sala antes de ligarem para a família.",
      "Mostre os passos de copiar e colar no aparelho de cada aluno; os menus são diferentes de telefone para telefone.",
      "Fale da burla de emergência familiar com uma dramatização e incentive os alunos a combinar uma palavra-código da família.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
