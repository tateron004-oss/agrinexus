"use strict";

// Koach Learn course (Portuguese translation of youth/youth-cyberbullying-safety.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "youth-cyberbullying-safety-pt",
  lang: "pt",
  translationOf: "youth-cyberbullying-safety",
  category: "Youth",
  name: "Proteger-se do Cyberbullying",
  skills: "Reconhecer o cyberbullying, Manter a calma e não retaliar, Guardar provas, Bloquear e denunciar nas aplicações, Contar a um adulto de confiança e à escola, Ajudar outra pessoa como defensor",
  outcome: "reconhecer o cyberbullying, responder sem piorar a situação, guardar provas, bloquear e denunciar a pessoa na aplicação, contar a um adulto de confiança e à escola, saber quando é um caso para a polícia e ajudar um amigo que está a ser alvo.",
  about: [
    "O cyberbullying é o bullying (intimidação) que acontece por telefones, computadores e jogos: SMS, grupos de conversa, redes sociais, comentários, fóruns e jogos online. Como pode segui-lo até casa e espalhar-se depressa, pode parecer que não há saída. Há muito que você pode fazer, e não tem de enfrentar isto sozinho.",
    "Este curso é para jovens, e para os pais, treinadores, mentores e trabalhadores de juventude que os apoiam. Você vai aprender o que é o cyberbullying, como responder com segurança, como guardar provas, como bloquear e denunciar, a quem contar e como ajudar outra pessoa.",
    "Se alguma vez se sentir em perigo ou pensar em fazer mal a si mesmo, conte logo a um adulto de confiança. Nos Estados Unidos pode ligar ou enviar SMS para o 988 a qualquer hora. Se alguém estiver em perigo imediato, ligue para o 911 (ou para o número de emergência do seu país).",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça o seu plano pessoal de segurança contra o cyberbullying: como guardar provas no seu telefone (os passos para tirar capturas de ecrã e onde as vai guardar), onde estão os botões de bloquear e denunciar nas duas aplicações que mais usa, os nomes de dois adultos de confiança a quem contaria (e de uma pessoa na escola), o que lhes diria, quando iria à polícia e uma coisa que faria para apoiar um amigo que está a ser alvo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens que usam telefones, redes sociais, grupos de conversa e jogos online, e os pais, treinadores, mentores e trabalhadores de juventude que os apoiam.",
    startingPoint: "Usam aplicações e jogos todos os dias e já viram ou sofreram mensagens maldosas online. Muitos respondem com raiva, reencaminham publicações que magoam, apagam mensagens antes de guardar provas ou não contam a um adulto.",
    gap: "O cyberbullying pode seguir os jovens até casa, espalhar-se depressa e fazer mal ao seu humor, à sua segurança e aos estudos. Saber responder com calma, guardar provas, bloquear e denunciar, contar ao adulto certo, reconhecer quando é um caso para a polícia e apoiar um amigo ajuda-os a ficar seguros e a não enfrentar isto sozinhos.",
    constraints: [
      "Tema emocionalmente sensível: os alunos que se sentem em perigo ou sem esperança são orientados para um adulto de confiança, o 988 nos EUA, ou o 911 numa emergência",
      "Imagens sexuais de jovens nunca podem ser guardadas nem reencaminhadas, nem mesmo como prova",
      "Os menus das aplicações mudam; os alunos procuram na ajuda ou no centro de segurança de cada aplicação",
      "Privacidade: nenhum conteúdo real que magoa é partilhado na aula",
      "Lições curtas e palavras simples para adolescentes e para os adultos que os apoiam"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com situações online", action: "identificar quais são cyberbullying e quais são um conflito normal", standard: "explicando porquê com a intenção, a repetição e o poder" },
    { id: "O2", condition: "Quando alguém lhe envia uma mensagem que magoa", action: "afastar-se em vez de responder, revidar ou reencaminhar a publicação", standard: "dizendo três coisas que não vai fazer e os próximos passos que vai dar" },
    { id: "O3", condition: "Quando acontece cyberbullying", action: "guardar provas com capturas de ecrã e um registo simples antes de bloquear qualquer coisa", standard: "mostrando o nome de utilizador, a data e a hora, e sem nunca guardar nem reencaminhar imagens sexuais de um jovem" },
    { id: "O4", condition: "Nas duas aplicações que mais usa", action: "encontrar as opções de bloquear e denunciar e verificar as suas definições de privacidade", standard: "sem ajuda" },
    { id: "O5", condition: "Quando você ou um amigo está a sofrer bullying online", action: "contar a um adulto de confiança, mostrando as suas provas, e decidir quando o caso vai para a escola ou para a polícia", standard: "dizendo o nome de dois adultos de confiança e de uma pessoa na escola" },
    { id: "O6", condition: "Quando outra pessoa está a ser alvo", action: "apoiá-la como defensor e escrever o seu próprio plano de segurança", standard: "com todas as partes do plano incluídas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Reconhecer o cyberbullying e responder com segurança",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é o cyberbullying (e o que não é)",
          minutes: 5,
          goal: "Distinguir o cyberbullying de um desentendimento normal.",
          text: [
            "Cyberbullying é usar a tecnologia para magoar, envergonhar, ameaçar ou perseguir alguém, normalmente mais de uma vez. Exemplos: mensagens maldosas ou com ameaças, espalhar boatos, publicar fotos ou vídeos que envergonham, criar contas falsas para gozar com alguém, deixar alguém de fora de um grupo de conversa de propósito para o magoar, ou partilhar mensagens ou imagens privadas sem autorização.",
            "Muitas vezes acontece por SMS, redes sociais, comentários, mensagens diretas, fóruns e jogos. As publicações online podem ficar para sempre e ser públicas, a não ser que sejam denunciadas e retiradas, e podem chegar depressa a muitas pessoas.",
            "Nem toda a discussão online é bullying. Um desentendimento de uma só vez entre iguais é um conflito. O bullying é magoar alguém de propósito, muitas vezes repetidamente, e muitas vezes com uma diferença de poder: mais pessoas, mais popularidade ou informações privadas para usar contra a pessoa. Algum cyberbullying, como ameaças ou assédio por causa da raça, religião, género, orientação sexual ou deficiência, pode ser contra a lei."
          ],
          steps: ["Pergunte: isto é para magoar, envergonhar ou ameaçar?", "Pergunte: está a acontecer mais de uma vez, ou a espalhar-se?", "Pergunte: há uma diferença de poder (um grupo, popularidade, informações privadas)?", "Se sim, trate-o como cyberbullying e use os passos deste curso."],
          words: [["Cyberbullying", "usar telefones, computadores ou jogos para magoar, envergonhar, ameaçar ou perseguir alguém."], ["Assédio", "um comportamento repetido que perturba, assusta ou ameaça alguém."], ["Conflito", "um desentendimento entre pessoas; não é o mesmo que bullying."]],
          slides: [
            { title: "Como é o cyberbullying", bullets: ["Mensagens maldosas ou com ameaças, boatos", "Fotos ou vídeos que envergonham publicados", "Contas falsas, deixar de fora de propósito", "Partilhar mensagens ou imagens privadas"] },
            { title: "Onde acontece", bullets: ["SMS e grupos de conversa", "Redes sociais, comentários, mensagens diretas", "Fóruns e jogos online"] },
            { title: "Bullying ou conflito?", bullets: ["É para magoar?", "Repete-se ou espalha-se?", "Há diferença de poder?"] },
            { title: "Parte dele é crime", bullets: ["Ameaças", "Assédio por raça, religião, género, sexualidade ou deficiência"] }
          ],
          sources: [
            { name: "MedlinePlus: Bullying", url: "https://medlineplus.gov/bullying.html" },
            { name: "StopBullying.gov: What Is Cyberbullying", url: "https://www.stopbullying.gov/cyberbullying/what-is-it" }
          ],
          tryIt: "Leia estas três situações e marque cada uma como bullying ou conflito: (1) um amigo discorda uma vez da sua opinião sobre um jogo; (2) um grupo continua a publicar numa conta falsa para gozar com um colega; (3) alguém continua a enviar-lhe ameaças depois de você dizer para parar. Escreva porquê em cada uma.",
          youCanNow: "reconhecer o cyberbullying e distingui-lo de um desentendimento normal.",
          quickCheck: [
            { objective: "O1", q: "O que normalmente faz de uma coisa cyberbullying e não um conflito?", options: ["É para magoar, muitas vezes repete-se e muitas vezes há diferença de poder", "Dois amigos discordam uma vez", "Alguém publica uma opinião de que você não gosta", "Um jogo termina numa derrota"], answer: 0, why: "O bullying é magoar alguém de propósito, muitas vezes repetidamente, muitas vezes com diferença de poder." },
            { objective: "O1", q: "Um colega é deixado de fora de um grupo de conversa de propósito, todas as semanas, para o magoar. Como chama a isto?", options: ["Um conflito normal", "Nada de preocupante", "Cyberbullying", "Um jogo"], answer: 2, why: "Deixar alguém de fora de propósito para o magoar, vezes sem conta, é uma forma de cyberbullying." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Responder sem piorar a situação",
          minutes: 5,
          goal: "Responder a uma mensagem que magoa afastando-se em vez de revidar.",
          text: [
            "Quando alguém o ataca online, é natural querer revidar. Mas responder com raiva, insultar de volta ou publicar sobre a pessoa normalmente piora tudo e pode fazer você parecer parte do problema. O KidsHealth (um site de saúde para jovens) aconselha a não responder nem retaliar, afastar-se e não reencaminhar a mensagem.",
            "Primeiro, afaste-se do ecrã. Respire devagar algumas vezes. Lembre-se: isto tem a ver com o comportamento da outra pessoa, não com o seu valor, e a culpa não é sua. Depois siga o plano: guardar provas, bloquear, denunciar e contar a alguém. Vai aprender cada passo neste curso.",
            "Não reencaminhe nem partilhe a publicação que magoa, nem mesmo para mostrar aos amigos como é má; isso espalha-a ainda mais. E não finja ser outra pessoa nem crie contas falsas para se vingar."
          ],
          steps: ["Não responda nem revide.", "Afaste-se e respire.", "Lembre-se de que a culpa não é sua.", "Não reencaminhe nem partilhe a publicação.", "A seguir: guardar provas, bloquear, denunciar, contar a um adulto."],
          words: [["Retaliar", "magoar alguém de volta depois de essa pessoa o ter magoado."], ["Reencaminhar", "enviar uma mensagem ou publicação para outras pessoas."]],
          slides: [
            { title: "Não revide", bullets: ["Responder com raiva normalmente piora tudo", "Pode fazer você parecer parte do problema"] },
            { title: "Afaste-se", bullets: ["Pouse o telefone", "Respire devagar", "A culpa não é sua"] },
            { title: "Não espalhe", bullets: ["Não reencaminhe nem partilhe a publicação", "Nada de contas falsas para se vingar"] },
            { title: "Depois siga o plano", bullets: ["Guarde provas", "Bloqueie e denuncie", "Conte a um adulto de confiança"] }
          ],
          sources: [{ name: "KidsHealth (Nemours): Cyberbullying (for teens)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "Alguém comenta \"és uma piada, toda a gente te odeia\" na sua publicação. Escreva o que NÃO vai fazer (três coisas) e o que VAI fazer nos próximos cinco minutos.",
          youCanNow: "manter a calma, evitar revidar ou espalhar a publicação e passar para um plano seguro.",
          quickCheck: [
            { objective: "O2", q: "Porque é má ideia responder com insultos?", options: ["Acaba sempre com o bullying", "Normalmente piora tudo e pode fazer você parecer parte do problema", "As aplicações proíbem insultos automaticamente", "Guarda provas"], answer: 1, why: "Revidar normalmente piora as coisas." },
            { objective: "O2", q: "Uma publicação que o magoa está a circular. Um amigo pede-lhe para a reencaminhar para ele ver. O que faz?", options: ["Reencaminha-a para alguns amigos", "Publica-a na sua página", "Cria uma conta falsa para responder", "Não a reencaminha; guarda provas e segue o seu plano"], answer: 3, why: "Reencaminhar uma publicação que magoa espalha-a ainda mais." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Guardar provas",
          minutes: 5,
          goal: "Tirar e guardar capturas de ecrã que provam o que aconteceu.",
          text: [
            "As provas ajudam os adultos, as escolas, as aplicações e a polícia a agir. Antes de bloquear ou apagar qualquer coisa, guarde provas. O KidsHealth sugere capturas de ecrã ou pedir a um dos pais para copiar ou guardar as mensagens.",
            "Uma boa captura de ecrã mostra: a mensagem ou publicação, o nome de utilizador ou da conta (e a página do perfil ou o link, se conseguir) e a data e a hora. Guarde todos os casos, não só o pior. Mantenha um registo simples: data, aplicação, o que aconteceu, quem viu. Guarde as capturas numa pasta privada ou envie-as a um adulto de confiança.",
            "Uma exceção importante: se alguém enviar ou partilhar uma imagem sexual de um jovem, NÃO tire captura de ecrã, não guarde nem reencaminhe a própria imagem; isso pode ser crime, até para você. Guarde o nome de utilizador, o link e as mensagens à volta, e conte logo a um adulto de confiança. Se alguém ameaçar partilhar imagens sexuais se você não pagar ou não enviar mais, não pague nem envie nada; bloqueie a pessoa mas não apague as mensagens, e peça ajuda. Nos EUA, denuncie em report.cybertip.org e use o serviço gratuito Take It Down (takeitdown.ncmec.org) para ajudar a retirar imagens tiradas quando tinha menos de 18 anos."
          ],
          steps: ["Antes de bloquear, tire uma captura de ecrã de cada mensagem ou publicação.", "Confirme que mostra o nome de utilizador, a data e a hora.", "Guarde o link do perfil, se conseguir.", "Escreva um registo curto: data, aplicação, o que aconteceu.", "Guarde-o em privado ou envie-o a um adulto de confiança."],
          words: [["Provas", "aquilo que mostra o que aconteceu, como capturas de ecrã e mensagens guardadas."], ["Captura de ecrã", "uma imagem do que está no seu ecrã (em inglês, \"screenshot\")."], ["Sextorsão", "ameaçar partilhar imagens sexuais de alguém se a pessoa não pagar ou não enviar mais; é um crime."]],
          slides: [
            { title: "Primeiro guarde provas", bullets: ["Antes de bloquear ou apagar", "As provas ajudam adultos, escolas, aplicações e polícia a agir"] },
            { title: "Uma boa captura de ecrã mostra", bullets: ["A mensagem ou publicação", "O nome de utilizador ou da conta", "A data e a hora"] },
            { title: "Mantenha um registo", bullets: ["Data, aplicação, o que aconteceu, quem viu", "Guarde-o em privado ou dê-o a um adulto"] },
            { title: "Imagens sexuais: outras regras", bullets: ["Não tire captura nem partilhe a imagem", "Guarde nome, link e mensagens; conte a um adulto", "Denuncie: report.cybertip.org; Take It Down"] }
          ],
          sources: [
            { name: "KidsHealth (Nemours): Cyberbullying (for teens)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "NCMEC: Sextortion", url: "https://www.missingkids.org/theissues/sextortion" },
            { name: "NCMEC: Take It Down", url: "https://takeitdown.ncmec.org/" }
          ],
          tryIt: "Pratique tirar uma captura de ecrã no seu telefone de um ecrã inofensivo (como a aplicação do tempo). Veja onde ficou guardada. Crie uma pasta ou álbum privado chamado \"provas\" e escreva os passos para não os esquecer.",
          youCanNow: "tirar capturas de ecrã que provam o que aconteceu, manter um registo e lidar com imagens sexuais com segurança, contando a um adulto em vez de as guardar.",
          quickCheck: [
            { objective: "O3", q: "O que é um bom registo de provas?", options: ["Uma lista com a data, a aplicação, o que aconteceu e quem viu", "O histórico de chamadas do seu telefone", "Uma lista das suas palavras-passe", "Uma cópia da morada de quem faz bullying"], answer: 0, why: "Um registo simples ajuda os adultos, as escolas, as aplicações e a polícia a agir." },
            { objective: "O3", q: "Vai bloquear alguém que lhe enviou ameaças. O que faz primeiro?", options: ["Apaga todas as mensagens", "Responde uma última vez", "Tira capturas de ecrã das mensagens com o nome de utilizador, a data e a hora", "Reencaminha-as para a turma toda"], answer: 2, why: "Guarde provas antes de bloquear ou apagar qualquer coisa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Reconhecer o cyberbullying e responder com segurança",
        questions: [
          { objective: "O1", q: "Qual é um exemplo de cyberbullying?", options: ["Um amigo discorda de você uma vez sobre um filme", "Um grupo continua a publicar numa conta falsa para gozar com um colega", "Alguém se esquece de responder a uma SMS", "Um professor publica os trabalhos de casa online"], answer: 1, why: "Repete-se, é para magoar e tem um grupo por trás." },
          { objective: "O2", q: "Alguém publica um comentário maldoso sobre você. Qual é o melhor primeiro passo?", options: ["Insultar de volta", "Reencaminhá-lo para toda a gente", "Criar uma conta falsa para se vingar", "Não responder; afastar-se e seguir o seu plano de segurança"], answer: 3, why: "Revidar normalmente piora tudo; afastar-se mantém você no controlo." },
          { objective: "O3", q: "Quando deve guardar provas?", options: ["Antes de bloquear ou apagar qualquer coisa", "Nunca", "Só depois de um mês", "Só se acontecer dez vezes"], answer: 0, why: "Depois de bloquear ou apagar, as provas podem desaparecer." },
          { objective: "O3", q: "O que deve mostrar uma boa captura de ecrã?", options: ["Só a sua resposta", "O seu ecrã inicial", "A mensagem, o nome de utilizador e a data e a hora", "A sua palavra-passe"], answer: 2, why: "Esses detalhes provam quem enviou o quê e quando." },
          { objective: "O3", q: "Alguém lhe envia uma imagem sexual de um colega. O que deve fazer?", options: ["Tirar uma captura e partilhá-la como prova", "Reencaminhá-la para os amigos do colega", "Publicá-la para avisar os outros", "Não guardar nem partilhar a imagem; anotar o nome de utilizador e contar logo a um adulto de confiança"], answer: 3, why: "Guardar ou partilhar essas imagens pode ser crime; os adultos e os serviços de denúncia podem agir." }
        ]
      }
    },
    {
      name: "Capítulo 2: Agir e pedir apoio",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bloquear e denunciar nas aplicações",
          minutes: 5,
          goal: "Encontrar e usar as opções de bloquear e denunciar nas aplicações que usa.",
          text: [
            "Quase todas as aplicações de redes sociais, de mensagens e jogos online deixam bloquear, silenciar e denunciar. Bloquear impede a pessoa de o contactar ou de ver as suas publicações. Silenciar esconde-a sem lhe dizer nada. Denunciar diz à empresa que a pessoa quebrou as regras; a empresa pode retirar publicações ou banir a conta. O KidsHealth também sugere denunciar ao seu operador de telefone ou de email quando o bullying chega por eles.",
            "As opções costumam estar nos três pontos, no nome ou no perfil da pessoa, ou ao carregar e manter o dedo na mensagem. Os nomes dos menus mudam, por isso, se não as encontrar, procure \"bloquear\" e \"denunciar\" na ajuda ou no centro de segurança da aplicação.",
            "Proteja também a sua privacidade: torne as suas contas privadas se puder, limite quem pode comentar ou enviar-lhe mensagens, nunca partilhe as suas palavras-passe (nem com amigos) e pense antes de publicar dados pessoais como a sua escola, a sua morada ou onde está neste momento."
          ],
          steps: ["Primeiro guarde provas.", "Abra o perfil da pessoa ou a mensagem, e depois o menu (muitas vezes três pontos).", "Escolha Denunciar e o motivo certo.", "Escolha Bloquear (ou Silenciar se bloquear piorar as coisas).", "Verifique as definições de privacidade: quem pode enviar mensagens, comentar ou ver as suas publicações."],
          words: [["Bloquear", "impedir alguém de o contactar ou de ver as suas publicações."], ["Denunciar", "dizer à aplicação ou à empresa que alguém quebrou as regras."], ["Definições de privacidade", "escolhas que controlam quem vê as suas publicações e quem o pode contactar."]],
          slides: [
            { title: "Três ferramentas", bullets: ["Bloquear: a pessoa não o pode contactar", "Silenciar: esconder a pessoa sem ela saber", "Denunciar: dizer à empresa que ela quebrou as regras"] },
            { title: "Onde as encontrar", bullets: ["Toque nos três pontos, no nome ou no perfil", "Ou carregue e mantenha o dedo na mensagem", "Não encontra? Procure no centro de segurança"] },
            { title: "Proteja a privacidade", bullets: ["Conta privada se puder", "Limite quem pode enviar mensagens ou comentar", "Nunca partilhe palavras-passe, nem com amigos"] }
          ],
          sources: [{ name: "KidsHealth (Nemours): Cyberbullying (for teens)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "Nas duas aplicações que mais usa, encontre (mas não use) as opções de bloquear e denunciar uma conta. Depois verifique uma definição de privacidade em cada aplicação, como quem lhe pode enviar mensagens, e mude-a se quiser.",
          youCanNow: "encontrar e usar bloquear, silenciar e denunciar nas suas aplicações e reforçar as suas definições de privacidade.",
          quickCheck: [
            { objective: "O4", q: "O que faz silenciar alguém?", options: ["Apaga a conta da pessoa", "Esconde as publicações dela sem lhe dizer", "Denuncia a pessoa à polícia", "Deixa-a ver mais das suas publicações"], answer: 1, why: "Silenciar esconde a pessoa sem lhe dizer; bloquear impede-a de o contactar." },
            { objective: "O4", q: "Desconhecidos continuam a comentar as suas publicações. Que passo de privacidade ajuda mais?", options: ["Partilhar a sua palavra-passe com um amigo", "Publicar o nome da sua escola", "Ligar a partilha de localização", "Limitar quem pode comentar ou enviar-lhe mensagens"], answer: 3, why: "Limitar quem pode enviar mensagens ou comentar protege você." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Contar a um adulto de confiança, à escola e quando ligar à polícia",
          minutes: 6,
          goal: "Contar a um adulto de confiança o que está a acontecer e saber quando o caso vai para a escola ou para a polícia.",
          text: [
            "Muitos jovens não contam a ninguém porque têm medo de que fique pior, de perder o telefone, ou porque sentem vergonha. Mas os adultos podem fazer coisas que você não pode: falar com a escola, contactar a aplicação ou ir à polícia. O KidsHealth diz para continuar a falar até encontrar alguém que ajude.",
            "Os adultos de confiança incluem um dos pais ou o encarregado de educação, outro familiar, um professor, um orientador escolar, um treinador, um mentor ou um líder de juventude. Comece de forma simples: \"Alguém continua a enviar-me mensagens maldosas e não sei o que fazer. Pode ajudar-me? Guardei capturas de ecrã.\" Se o primeiro adulto não ajudar, conte a outro. A maioria das escolas tem regras contra o bullying, sobretudo quando envolve alunos; um orientador escolar ou o diretor pode agir.",
            "Vá à polícia, com um adulto, quando houver ameaças de violência, imagens ou mensagens sexuais, fotos ou vídeos tirados num lugar privado (como uma casa de banho ou um balneário), perseguição ou ódio por causa de quem você é. O StopBullying.gov (site do governo dos EUA) explica quando denunciar à polícia e as leis do seu estado sobre bullying. Se alguém estiver em perigo imediato, ligue para o 911 (ou para o número de emergência do seu país). Se o bullying o deixar sem esperança ou a pensar em fazer mal a si mesmo, conte já a um adulto; nos EUA, ligue ou envie SMS para o 988."
          ],
          steps: ["Escolha um adulto de confiança.", "Conte-lhe o que aconteceu e mostre as suas provas.", "Peça-lhe ajuda para contactar a escola se houver alunos envolvidos.", "Vá à polícia com um adulto se houver ameaças, imagens sexuais, perseguição ou ódio.", "Perigo agora: ligue para o 911. Sem esperança: ligue ou envie SMS para o 988."],
          words: [["Adulto de confiança", "um adulto com quem se sente seguro e que pode ajudar, como um dos pais, um professor, um orientador ou um treinador."], ["Perseguição", "seguir, observar ou contactar alguém repetidamente de uma forma que lhe causa medo."]],
          slides: [
            { title: "Porquê contar a um adulto", bullets: ["Pode contactar a escola, a aplicação ou a polícia", "Continue a falar até alguém ajudar"] },
            { title: "A quem e como", bullets: ["Pais, professor, orientador, treinador, mentor", "\"Alguém continua a enviar-me mensagens maldosas.\"", "Mostre as suas capturas de ecrã"] },
            { title: "Quando ligar à polícia", bullets: ["Ameaças de violência", "Imagens ou mensagens sexuais", "Fotos em lugares privados, perseguição, ódio"] },
            { title: "Ajuda urgente", bullets: ["Perigo agora: ligue para o 911", "Sem esperança: ligue ou envie SMS para o 988 (EUA)"] }
          ],
          sources: [
            { name: "StopBullying.gov: How to Report Cyberbullying", url: "https://www.stopbullying.gov/cyberbullying/how-to-report" },
            { name: "StopBullying.gov: Laws, Policies and Regulations", url: "https://www.stopbullying.gov/resources/laws" },
            { name: "KidsHealth (Nemours): Cyberbullying (for teens)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Escreva os nomes de dois adultos de confiança e de uma pessoa na escola a quem poderia contar. Depois escreva as duas ou três frases exatas que diria para começar a conversa.",
          youCanNow: "contar a um adulto de confiança mostrando as suas provas, envolver a escola e saber quando é um caso para a polícia ou para ajuda de emergência.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um adulto de confiança?", options: ["Um orientador escolar com quem se sente seguro", "Um desconhecido online que oferece ajuda", "A pessoa que lhe faz bullying", "Qualquer pessoa numa secção de comentários"], answer: 0, why: "Os adultos de confiança incluem um dos pais ou o encarregado de educação, um familiar, um professor, um orientador, um treinador, um mentor ou um líder de juventude." },
            { objective: "O5", q: "Alguém lhe envia mensagens a ameaçar magoá-lo depois das aulas. O que faz?", options: ["Espera para ver se para", "Responde com uma ameaça", "Conta já a um adulto de confiança e vai com ele à polícia", "Apaga as mensagens"], answer: 2, why: "As ameaças de violência vão para a polícia, com um adulto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ser um defensor e fazer o seu plano de segurança",
          minutes: 5,
          goal: "Apoiar alguém que está a ser alvo e escrever o seu próprio plano de segurança.",
          text: [
            "A maior parte do cyberbullying tem público. Um espectador fica a ver. Um defensor ajuda. Não precisa de enfrentar quem faz bullying em público para ajudar; muitas vezes a ajuda mais segura é discreta.",
            "Formas de ser um defensor: não dê gosto, não partilhe nem comente a publicação que magoa; denuncie-a; envie uma mensagem privada à pessoa que é alvo (\"Eu vi aquilo. Não está certo. Estás bem?\"); convide-a para estar consigo ou sentar-se ao seu lado; ajude-a a guardar provas e a contar a um adulto de confiança. Se vir ameaças ou sinais de que ela pode fazer mal a si mesma, conte logo a um adulto.",
            "Agora junte tudo no seu próprio plano, para saber exatamente o que fazer se isto acontecer a você ou a um amigo."
          ],
          steps: ["Não dê gosto, não partilhe nem comente a publicação.", "Denuncie-a na aplicação.", "Envie à pessoa que é alvo uma mensagem privada de apoio.", "Ajude-a a guardar provas e a contar a um adulto de confiança.", "Escreva o seu próprio plano de segurança."],
          words: [["Espectador", "alguém que vê o bullying mas não faz nada."], ["Defensor", "alguém que vê o bullying e ajuda com segurança a pessoa que é alvo."]],
          slides: [
            { title: "Espectador ou defensor?", bullets: ["Espectador: fica a ver", "Defensor: ajuda com segurança"] },
            { title: "Formas discretas de ajudar", bullets: ["Não dê gosto nem partilhe; denuncie", "Escreva à pessoa: \"Não está certo. Estás bem?\"", "Ajude-a a guardar provas e a contar a um adulto"] },
            { title: "O seu plano de segurança", bullets: ["Como tirar capturas e onde as guardar", "Bloquear e denunciar nas duas aplicações principais", "Dois adultos de confiança e o que dizer"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de segurança contra o cyberbullying: os passos para tirar capturas de ecrã e onde as vai guardar, onde estão bloquear e denunciar nas suas duas aplicações principais, dois adultos de confiança e uma pessoa na escola com o que lhes diria, quando iria à polícia e uma forma de apoiar um amigo.",
          youCanNow: "apoiar um amigo que está a ser alvo e seguir o seu próprio plano de segurança contra o cyberbullying.",
          quickCheck: [
            { objective: "O6", q: "Qual é a diferença entre um espectador e um defensor?", options: ["Não há diferença", "Um espectador fica a ver; um defensor ajuda", "Um defensor junta-se ao bullying", "Um espectador denuncia"], answer: 1, why: "A maior parte do cyberbullying tem público; os defensores ajudam a pessoa que é alvo." },
            { objective: "O6", q: "A publicação de um amigo diz que lhe apetece fazer mal a si mesmo depois de sofrer bullying. O que faz?", options: ["Dá gosto à publicação", "Espera até amanhã", "Guarda segredo", "Conta logo a um adulto de confiança"], answer: 3, why: "Os sinais de que alguém pode fazer mal a si mesmo precisam de um adulto imediatamente." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Agir e pedir apoio",
        questions: [
          { objective: "O4", q: "O que faz bloquear alguém?", options: ["Impede a pessoa de o contactar ou de ver as suas publicações", "Apaga a conta da pessoa", "Envia-lhe um aviso da polícia", "Partilha as suas capturas de ecrã"], answer: 0, why: "Bloquear corta o contacto da pessoa com você." },
          { objective: "O4", q: "Não encontra o botão de denunciar numa aplicação. O que faz?", options: ["Desiste", "Publica a sua palavra-passe", "Procura \"denunciar\" na ajuda ou no centro de segurança da aplicação", "Envia uma mensagem a quem faz bullying a perguntar"], answer: 2, why: "Os nomes dos menus mudam; a ajuda ou o centro de segurança mostra onde estão." },
          { objective: "O5", q: "O primeiro adulto a quem contou não ajuda. E agora?", options: ["Nunca mais conta a ninguém", "Conta a outro adulto de confiança", "Vinga-se sozinho de quem faz bullying", "Apaga as suas provas"], answer: 1, why: "Continue a falar até alguém ajudar." },
          { objective: "O5", q: "Que situação deve ir para a polícia, com um adulto?", options: ["Alguém deixou de o seguir", "Um amigo não respondeu", "Um colega discordou num grupo de conversa", "Alguém ameaça magoá-lo"], answer: 3, why: "As ameaças de violência são um caso para a polícia." },
          { objective: "O6", q: "Vê um colega a ser gozado nos comentários. O que faz um bom defensor?", options: ["Dá gosto à publicação para se integrar", "Denuncia-a e envia ao colega uma mensagem privada de apoio", "Partilha-a com mais pessoas", "Acrescenta a sua própria piada"], answer: 1, why: "Denunciar e apoiar com discrição ajuda sem espalhar a publicação." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Proteger-se do Cyberbullying",
    questions: [
      { objective: "O1", q: "Cyberbullying é:", options: ["Qualquer desentendimento online", "Usar a tecnologia para magoar, envergonhar, ameaçar ou perseguir alguém", "Esquecer-se de responder a uma SMS", "Publicar sobre o seu fim de semana"], answer: 1, why: "É magoar ou perseguir alguém através da tecnologia." },
      { objective: "O1", q: "O que torna uma coisa mais provavelmente bullying do que conflito?", options: ["Repete-se e é para magoar", "Acontece uma vez entre iguais", "As duas pessoas estão a brincar juntas", "É sobre resultados desportivos"], answer: 0, why: "O bullying normalmente é de propósito, repete-se e tem uma diferença de poder." },
      { objective: "O1", q: "Porque pode ser tão difícil escapar ao bullying online?", options: ["Os telefones são pesados", "Só acontece na escola", "Pode segui-lo até casa e espalhar-se depressa", "É sempre anónimo"], answer: 2, why: "As publicações online chegam a você em qualquer lugar e podem espalhar-se a muitas pessoas." },
      { objective: "O1", q: "Qual é uma diferença de poder no bullying?", options: ["As duas pessoas têm a mesma idade", "Nenhuma conhece a outra", "As duas são amigas", "Um grupo contra uma só pessoa"], answer: 3, why: "Mais pessoas, popularidade ou informações privadas dão poder a quem faz bullying." },
      { objective: "O2", q: "Responder com insultos normalmente:", options: ["Acaba com o bullying", "Piora tudo", "Faz retirar a publicação", "É exigido pela aplicação"], answer: 1, why: "Revidar muitas vezes faz as coisas crescer." },
      { objective: "O2", q: "Porque não deve reencaminhar uma publicação que magoa para os amigos?", options: ["Espalha-a ainda mais", "Custa dinheiro", "Estraga o seu telefone", "É lento demais"], answer: 0, why: "Reencaminhar põe o conteúdo que magoa à frente de mais pessoas." },
      { objective: "O2", q: "Quando é alvo, ajuda lembrar-se de que:", options: ["Mereceu", "Ninguém pode ajudar", "A culpa não é sua", "Deve resolver sozinho"], answer: 2, why: "O bullying tem a ver com o comportamento de quem o faz, não com o seu valor." },
      { objective: "O3", q: "O que deve fazer antes de bloquear alguém?", options: ["Apagar todas as mensagens", "Enviar-lhe a sua morada", "Publicar sobre a pessoa", "Guardar provas com capturas de ecrã"], answer: 3, why: "Bloquear pode tornar as provas mais difíceis de obter." },
      { objective: "O3", q: "Que detalhe é mais importante numa captura de ecrã?", options: ["O nome de utilizador e a data e a hora", "O nível da bateria", "A imagem de fundo", "O tempo"], answer: 0, why: "Quem enviou e quando prova o que aconteceu." },
      { objective: "O3", q: "Alguém ameaça partilhar as suas imagens privadas se não enviar dinheiro. O que deve fazer?", options: ["Pagar logo", "Enviar mais imagens", "Não pagar; guardar as mensagens, bloquear, contar a um adulto de confiança e denunciar", "Apagar tudo e não dizer nada"], answer: 2, why: "O NCMEC diz que pagar raramente acaba com isto; guarde provas e peça ajuda." },
      { objective: "O3", q: "Nos EUA, onde pode denunciar a exploração sexual online de um jovem?", options: ["report.cybertip.org", "Uma secção de comentários qualquer", "Nas mensagens diretas de quem faz bullying", "Em lado nenhum"], answer: 0, why: "A CyberTipline, gerida pelo NCMEC, recebe estas denúncias." },
      { objective: "O3", q: "Em que ajuda o Take It Down (takeitdown.ncmec.org)?", options: ["Apagar o telefone todo", "Encontrar novos amigos", "Pagar a um chantagista", "Retirar imagens sexuais tiradas quando tinha menos de 18 anos"], answer: 3, why: "É o serviço gratuito do NCMEC para ajudar a retirar essas imagens." },
      { objective: "O4", q: "Denunciar alguém numa aplicação quer dizer:", options: ["Telefonar à pessoa", "Dizer à empresa que a pessoa quebrou as regras", "Segui-la também", "Partilhar a publicação dela"], answer: 1, why: "A empresa pode retirar publicações ou banir a conta." },
      { objective: "O4", q: "Que passo de privacidade ajuda a proteger você?", options: ["Partilhar a palavra-passe com o seu melhor amigo", "Publicar a morada de casa", "Limitar quem pode enviar mensagens ou comentar as suas publicações", "Tornar todas as contas públicas"], answer: 2, why: "Limitar o contacto afasta muitos agressores." },
      { objective: "O5", q: "Quem é um adulto de confiança?", options: ["Um desconhecido que conheceu num jogo", "Um dos pais, um professor, um orientador escolar ou um treinador com quem se sente seguro", "A pessoa que lhe faz bullying", "Uma conta anónima"], answer: 1, why: "Os adultos de confiança podem contactar a escola, a aplicação ou a polícia." },
      { objective: "O5", q: "O que deve levar quando conta a um adulto?", options: ["Nada", "A sua palavra-passe", "As suas provas: capturas de ecrã e o seu registo", "Um presente"], answer: 2, why: "As provas ajudam-no a agir depressa." },
      { objective: "O5", q: "Quando deve o cyberbullying ir para a polícia?", options: ["Quando alguém sai de um grupo de conversa", "Quando alguém faz uma má crítica a um jogo", "Quando alguém discorda de você", "Quando há ameaças, imagens sexuais, perseguição ou ódio"], answer: 3, why: "Isto pode ser crime; o StopBullying.gov explica quando denunciar à polícia." },
      { objective: "O5", q: "Nos EUA, se o bullying o deixar sem esperança, pode ligar ou enviar SMS para:", options: ["988", "411", "611", "211 só aos fins de semana"], answer: 0, why: "O 988 é a linha gratuita de prevenção do suicídio e de crise, 24 horas por dia, 7 dias por semana." },
      { objective: "O6", q: "Um defensor é alguém que:", options: ["Fica a ver e não faz nada", "Ajuda com segurança a pessoa que é alvo", "Junta-se ao bullying", "Grava para ter visualizações"], answer: 1, why: "Os defensores ajudam, muitas vezes com discrição." },
      { objective: "O6", q: "Qual é uma forma discreta e segura de ajudar um amigo que sofre bullying online?", options: ["Publicar as mensagens privadas dele", "Comentar algo ainda mais maldoso", "Dar gosto à publicação", "Enviar-lhe uma mensagem privada e ajudá-lo a contar a um adulto"], answer: 3, why: "O apoio privado e envolver um adulto ajudam sem espalhar a publicação." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 4, 7, 9, 12, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Guardar provas", objective: "O3", notYet: "Não há passos para tirar capturas de ecrã, ou não há lugar para as guardar.", meets: "Passos para tirar capturas de ecrã com o nome de utilizador, a data e a hora, e um lugar privado para as guardar.", exceeds: "Também inclui um registo simples e a regra de nunca guardar imagens sexuais." },
      { name: "Bloquear e denunciar", objective: "O4", notYet: "As opções de bloquear e denunciar não foram encontradas nas duas aplicações principais.", meets: "Onde estão bloquear e denunciar nas duas aplicações, e uma definição de privacidade verificada.", exceeds: "Também diz quando silenciar em vez de bloquear." },
      { name: "A quem contar", objective: "O5", notYet: "Nenhum adulto nomeado, ou nada para dizer.", meets: "Dois adultos de confiança e uma pessoa na escola, com as palavras para começar a conversa.", exceeds: "Também diz o que fazer se o primeiro adulto não ajudar." },
      { name: "Quando ir à polícia", objective: "O5", notYet: "Falta ou está errado.", meets: "Ameaças, imagens sexuais, perseguição ou ódio vão para a polícia com um adulto; perigo agora quer dizer 911.", exceeds: "Também indica o 988 para quem se sente sem esperança e onde denunciar a exploração online." },
      { name: "Apoiar um amigo", objective: "O6", notYet: "Nenhuma ação de defensor, ou a ação espalha a publicação.", meets: "Uma forma segura de apoiar um amigo, como uma mensagem privada e ajudá-lo a contar a um adulto.", exceeds: "Duas ou mais ações seguras, incluindo denunciar a publicação." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter bloqueado, denunciado ou contado a um adulto sobre bullying online no seguimento de 30 dias",
      "Alunos que dizem ter apoiado um amigo que era alvo (inquérito de seguimento)",
      "Escolas ou programas de juventude que dizem ter mais alunos a pedir ajuda com provas guardadas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "O telefone ou aparelho do próprio aluno, para encontrar bloquear, denunciar e as definições de privacidade",
      "Papel ou uma aplicação de notas privada para o plano de segurança",
      "Uma lista de contactos locais de confiança: orientador escolar, pessoal do programa, linhas de crise",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Nunca peça aos alunos para partilhar mensagens ou imagens reais que magoam na aula; use os exemplos inventados do curso.",
      "Antes de começar, diga com quem os alunos podem falar em privado, e partilhe o 988 e os números de emergência locais.",
      "Esteja pronto para seguir as regras de denúncia e de proteção da sua organização se um aluno revelar bullying, ameaças ou imagens sexuais.",
      "Sublinhe que imagens sexuais de jovens nunca podem ser guardadas nem reencaminhadas, nem mesmo como prova.",
      "Deixe os alunos manter os seus planos de segurança privados; verifique-os a sós com a grelha de avaliação, se eles aceitarem."
    ]
  }
};
