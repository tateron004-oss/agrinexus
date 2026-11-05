"use strict";

// Koach Learn course (Portuguese translation of re-entry/reentry-family-ties.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: California and US names (988, 211, childsupport.ca.gov) are kept.

module.exports = {
  id: "reentry-family-ties-pt",
  lang: "pt",
  translationOf: "reentry-family-ties",
  category: "Re-Entry",
  name: "Reconstruir os Laços com a Família e a Comunidade",
  skills: "Planear um primeiro contacto, Reaproximar-se dos seus filhos, Pedir uma revisão da pensão de alimentos, Ouvir e pedir desculpa, Encontrar mentores e grupos da comunidade, Definir limites saudáveis",
  outcome: "fazer um plano para se reaproximar da família e dos filhos, dar o primeiro passo sobre a pensão de alimentos se for o seu caso, encontrar mentores e apoio na comunidade e definir limites que protegem o seu progresso.",
  about: [
    "Voltar para casa não é só ter um trabalho e um lugar para viver. As pessoas à sua volta contam tanto quanto isso. A família, os filhos, os amigos, os mentores e os grupos da comunidade podem ajudá-lo a manter-se no bom caminho, e reconstruir esses laços é uma habilidade que se aprende.",
    "Neste curso vai planear um primeiro contacto, aprender a reaproximar-se dos seus filhos ao ritmo deles, pedir uma revisão da pensão de alimentos se o valor já não corresponde ao seu rendimento, praticar ouvir e pedir desculpa, encontrar mentores e grupos da comunidade e definir limites saudáveis. Também vai fazer uma lista de apoio que inclui a linha 988 (Suicide and Crisis Lifeline, a linha de apoio em crise e prevenção do suicídio dos Estados Unidos).",
    "Cada família é diferente. Algumas pessoas vão recebê-lo depressa, outras precisam de tempo, e alguns contactos podem não ser seguros ou não ser permitidos. Cumpra sempre as ordens do tribunal e pergunte a um conselheiro, à assistência jurídica gratuita ou ao seu agente de liberdade condicional quando tiver dúvidas.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa que faz logo a seguir. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva um plano de reaproximação e apoio numa página: o primeiro familiar que vai contactar e a sua primeira mensagem para ele, um passo sobre os filhos ou a pensão de alimentos se for o seu caso, dois apoios da comunidade (um mentor, um grupo ou uma comunidade de fé), dois limites que vai manter e uma lista de apoio com pessoas e números para ligar, incluindo o 988.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) e querem reaproximar-se da família, dos filhos, dos amigos e da comunidade. Alguns são pais ou mães com uma ordem de pensão de alimentos; alguns têm ordens do tribunal que limitam o contacto.",
    startingPoint: "Sabem quem querem contactar e talvez já tenham algum contacto por telefone ou carta. Muitos não sabem por onde começar, têm medo de ser rejeitados e não sabem como funcionam as revisões da pensão de alimentos, a mentoria ou os grupos de apoio.",
    gap: "Laços fortes com a família e a comunidade ajudam as pessoas a manter-se no bom caminho depois de sair, mas um primeiro contacto apressado ou mal planeado pode estragar as relações, e uma pensão de alimentos ignorada pode tornar-se uma dívida grande. Os alunos precisam de um plano para se reaproximar ao ritmo dos outros, reconstruir a confiança, encontrar apoio e proteger o seu progresso.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um telefone simples ou um smartphone; papel e caneta também servem",
      "Tempo: lições de cerca de 5 minutos, que cabem entre o trabalho e as consultas",
      "As ordens do tribunal, as proibições de contacto e as condições da liberdade condicional ou da pena suspensa vêm sempre primeiro",
      "Temas emocionais: os alunos só partilham o que quiserem, e o 988 está em todas as listas de apoio"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as pessoas de quem se quer reaproximar", action: "escolher quem contactar primeiro e escrever uma primeira mensagem curta e respeitosa", standard: "sem pedir dinheiro, sem culpar, sem pressionar e cumprindo qualquer ordem do tribunal" },
    { id: "O2", condition: "Com um filho ou uma filha de quem se quer reaproximar", action: "planear uma primeira visita ou chamada que põe as necessidades da criança em primeiro lugar", standard: "com perguntas para a pessoa que cuida da criança e uma pequena promessa que consegue cumprir" },
    { id: "O3", condition: "Com uma ordem de pensão de alimentos que já não corresponde ao seu rendimento", action: "pedir uma revisão ao serviço de pensão de alimentos", standard: "com o contacto do serviço, os papéis necessários e uma data para o contactar" },
    { id: "O4", condition: "Numa conversa difícil", action: "ouvir, usar frases com \"eu\" e pedir desculpa em três partes", standard: "sem \"mas\" no pedido de desculpa e sem pedir para ser perdoado" },
    { id: "O5", condition: "Usando o 211, o seu gestor de caso ou grupos locais", action: "encontrar um mentor e um grupo da comunidade e pedir ao mentor um compromisso concreto", standard: "com os contactos de cada um e as palavras exatas do seu pedido" },
    { id: "O6", condition: "Com pessoas ou situações que o podem fazer recuar", action: "definir dois limites saudáveis e escrever uma lista de apoio que inclui o 988", standard: "com a lista guardada no telefone e em papel" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Reaproximar-se da família e dos filhos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear o seu primeiro contacto",
          minutes: 5,
          goal: "Escolher quem contactar primeiro e escrever uma primeira mensagem curta e respeitosa.",
          text: [
            "Enquanto você esteve fora, a sua família continuou a viver. As crianças cresceram, pessoas mudaram de casa, algumas relações ficaram mais fortes e outras ficaram feridas. A reaproximação corre melhor quando é planeada, em vez de aparecer sem avisar.",
            "Comece por fazer uma lista das pessoas que quer de volta na sua vida. Ao lado de cada nome, escreva como as coisas ficaram e se há alguma ordem do tribunal, como uma proibição de contacto ou uma ordem de guarda. Cumpra todas as ordens. Se não tiver a certeza, pergunte ao seu agente de liberdade condicional ou à assistência jurídica gratuita.",
            "Escolha uma pessoa que deve estar aberta e comece com pouco: uma carta, uma SMS ou uma chamada curta. Diga que está em casa, diga que gostaria de se reaproximar e deixe a pessoa escolher o ritmo. Não peça dinheiro nem um lugar para ficar na primeira mensagem.",
            "Espere sentimentos misturados, incluindo os seus. Se alguém não estiver pronto, agradeça e deixe a porta aberta. Isso não é o fim; é o começo."
          ],
          steps: ["Faça a lista das pessoas de quem se quer reaproximar.", "Anote como as coisas ficaram e qualquer ordem do tribunal; cumpra todas as ordens.", "Escolha uma pessoa que deve estar aberta.", "Escreva uma mensagem curta: está em casa, gostaria de se reaproximar, a pessoa pode escolher o ritmo.", "Envie-a e depois dê tempo à pessoa para responder."],
          words: [["Proibição de contacto", "uma ordem do tribunal que diz que você não pode contactar uma certa pessoa."], ["Ordem de guarda", "uma ordem do tribunal sobre com quem as crianças vivem e quem toma as decisões por elas."], ["Ritmo", "a velocidade com que uma coisa acontece."]],
          slides: [
            { title: "Planeie, não surpreenda", bullets: ["A família continuou a viver enquanto esteve fora", "Um primeiro contacto planeado corre melhor"] },
            { title: "Faça a sua lista", bullets: ["Quem quer de volta na sua vida", "Como as coisas ficaram", "Qualquer ordem do tribunal: cumpra todas"] },
            { title: "Comece com pouco", bullets: ["Uma carta, uma SMS ou uma chamada curta", "Diga que está em casa e quer reaproximar-se", "Deixe a pessoa escolher o ritmo"] },
            { title: "Se a pessoa não estiver pronta", bullets: ["Agradeça", "Deixe a porta aberta", "Tente outra vez mais tarde, com calma"] }
          ],
          tryIt: "Escreva a sua lista de pessoas, escolha uma pessoa e escreva uma primeira mensagem de três ou quatro frases. Leia-a em voz alta. Tire tudo o que pede dinheiro, culpa alguém ou pressiona para uma resposta rápida.",
          youCanNow: "planear um primeiro contacto, cumprir qualquer ordem do tribunal e escrever uma mensagem curta e respeitosa que deixa a outra pessoa escolher o ritmo.",
          quickCheck: [
            { objective: "O1", q: "O que deve ter uma primeira mensagem para um familiar?", options: ["Um pedido para ficar em casa dele", "Que está em casa e gostaria de se reaproximar", "Uma lista do que ele fez de errado", "A exigência de uma resposta hoje"], answer: 1, why: "Uma mensagem curta e respeitosa abre a porta sem pressão." },
            { objective: "O1", q: "O seu irmão responde que precisa de tempo antes de falar. O que faria?", options: ["Ligar-lhe todos os dias até ele responder", "Aparecer em casa dele", "Agradecer e deixar a porta aberta", "Pedir a outros familiares para o pressionar"], answer: 2, why: "Respeitar o ritmo dele deixa a porta aberta para mais tarde." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reaproximar-se dos seus filhos",
          minutes: 6,
          goal: "Planear uma primeira visita ou chamada com o seu filho que põe as necessidades da criança em primeiro lugar.",
          text: [
            "As crianças precisam de três coisas de um pai ou de uma mãe que volta: segurança, uma honestidade que consigam entender e alguém que aparece vez após vez. Ser constante conta mais do que grandes presentes ou grandes promessas.",
            "Trabalhe com o adulto que cuida agora do seu filho. Pergunte-lhe o que a criança sabe, para o que está pronta e que horários servem. Fale com respeito do outro pai ou mãe, ou de quem cuida da criança, à frente dela, mesmo quando é difícil.",
            "Seja honesto com palavras adequadas à idade da criança. Uma criança pequena talvez só precise de ouvir: Cometi um erro, estive fora e agora estou aqui. As crianças mais velhas podem ter perguntas ou raiva. Ouça, não discuta e não faça promessas que não consegue cumprir.",
            "Se precisar de visitas ou de uma mudança na guarda, o site de autoajuda do tribunal do seu estado explica os formulários, e os facilitadores de direito da família ou a assistência jurídica gratuita podem ajudar. Nunca leve uma criança nem pressione quem cuida dela fora do que diz uma ordem do tribunal."
          ],
          steps: ["Fale primeiro com a pessoa que cuida da criança.", "Pergunte o que a criança sabe e para o que está pronta.", "Planeie uma primeira visita ou chamada curta, num horário que sirva à criança.", "Use palavras honestas adequadas à idade da criança.", "Cumpra todas as promessas, começando pelas pequenas, como ligar quando disse que ia ligar."],
          words: [["Pessoa que cuida da criança", "o adulto que trata da criança no dia a dia."], ["Direito de visita", "o tempo que um pai ou uma mãe passa com um filho que não vive com ele, muitas vezes fixado por um tribunal."], ["Facilitador de direito da família", "um ajudante do tribunal que explica os formulários de direito da família, muitas vezes de graça."]],
          slides: [
            { title: "Do que as crianças precisam", bullets: ["Segurança", "Uma honestidade que consigam entender", "Alguém que aparece vez após vez"] },
            { title: "Trabalhe com quem cuida da criança", bullets: ["Pergunte o que a criança sabe e para o que está pronta", "Combinem os horários", "Fale com respeito dessa pessoa"] },
            { title: "Palavras honestas, certas para a idade", bullets: ["Pequenos: estive fora, agora estou aqui", "Mais velhos: ouça as perguntas e a raiva", "Nada de promessas que não consegue cumprir"] },
            { title: "Visitas e guarda", bullets: ["Use o site de autoajuda do tribunal do seu estado", "Pergunte a um facilitador de direito da família ou à assistência jurídica", "Cumpra sempre as ordens do tribunal"] }
          ],
          tryIt: "Escreva três perguntas para fazer à pessoa que cuida do seu filho antes de uma primeira visita ou chamada, e uma pequena promessa que sabe que consegue cumprir, como ligar todos os domingos às 6 da tarde.",
          youCanNow: "planear uma primeira visita ou chamada que põe o seu filho em primeiro lugar, trabalhar com quem cuida dele e cumprir pequenas promessas que constroem a confiança.",
          quickCheck: [
            { objective: "O2", q: "O que constrói mais a confiança de uma criança quando o pai ou a mãe volta para casa?", options: ["Presentes caros", "Grandes promessas sobre o futuro", "Uma visita longa", "Cumprir pequenas promessas vez após vez"], answer: 3, why: "As crianças confiam num pai ou numa mãe que continua a aparecer e a cumprir pequenas promessas." },
            { objective: "O2", q: "Quer ligar à sua filha pela primeira vez em anos. O que faria primeiro?", options: ["Falar com a pessoa que cuida dela", "Ligar para a escola dela", "Enviar-lhe uma mensagem nas redes sociais", "Aparecer à saída da escola"], answer: 0, why: "A pessoa que cuida dela pode ajudar a planear um contacto que põe as necessidades da criança em primeiro lugar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pensão de alimentos: pedir uma revisão",
          minutes: 5,
          goal: "Pedir uma revisão ao serviço de pensão de alimentos quando o valor já não corresponde ao seu rendimento.",
          text: [
            "A pensão de alimentos não para sozinha quando o seu rendimento muda. A pensão não paga pode tornar-se uma dívida grande e levar a coisas como a suspensão da carta de condução. Ignorá-la piora as coisas. Pedir uma revisão é o passo certo.",
            "Na Califórnia, qualquer um dos pais pode pedir ao serviço local de pensão de alimentos uma revisão e um ajuste, chamado modificação. Não custa nada. Pode aplicar-se quando a ordem mudaria 20% ou $50, o que for menor. As mudanças que contam incluem perder ou começar um trabalho, uma mudança no rendimento, mudanças na guarda, incapacidade, prisão e destacamento militar. Um pai ou uma mãe que vai ficar preso 60 dias ou mais seguidos pode pedir um valor mais baixo com o formulário Incarcerated Parent's Request to Review Child Support (pedido de revisão da pensão para pais presos).",
            "Leve provas dos seus rendimentos e despesas, como recibos de vencimento ou uma carta de apoios. Se os dois pais estiverem de acordo, podem assinar um acordo para o tribunal; se não, o tribunal decide. O facilitador de direito da família do seu condado pode ajudar.",
            "Fora da Califórnia, contacte o serviço de pensão de alimentos do seu estado ou da sua tribo e pergunte como pedir uma revisão. Peça cedo: em muitos lugares a mudança só conta a partir da data em que pede, não de quando o seu rendimento baixou."
          ],
          steps: ["Encontre o seu serviço local de pensão de alimentos (na Califórnia, childsupport.ca.gov).", "Ligue ou escreva para pedir uma revisão e um ajuste.", "Junte provas dos rendimentos e das despesas.", "Guarde cópias e anote a data em que fez o pedido.", "Pague o que puder enquanto espera e guarde o registo de cada pagamento."],
          words: [["Ordem de pensão de alimentos", "uma ordem do tribunal que diz quanto um pai ou uma mãe paga para ajudar a sustentar um filho."], ["Modificação", "uma mudança numa ordem de pensão de alimentos."], ["Atrasados", "pensão de alimentos que era devida e não foi paga."]],
          slides: [
            { title: "Não ignore a pensão de alimentos", bullets: ["Não para sozinha", "A pensão não paga torna-se uma dívida grande", "Pedir uma revisão é o passo certo"] },
            { title: "Revisão e ajuste na Califórnia", bullets: ["Qualquer um dos pais pode pedir; não custa nada", "Mudanças: trabalho, rendimento, guarda, prisão", "Preso 60 dias ou mais seguidos: peça um valor mais baixo"] },
            { title: "O que levar", bullets: ["Provas dos rendimentos e das despesas", "Ajuda: o facilitador de direito da família do seu condado"] },
            { title: "Fora da Califórnia", bullets: ["Contacte o serviço de pensão de alimentos do seu estado ou da sua tribo", "Peça cedo: a mudança muitas vezes só conta a partir do dia do pedido"] }
          ],
          sources: [
            { name: "California Department of Child Support Services: Modify my payment", url: "https://childsupport.ca.gov/overview/modify-my-payment/" },
            { name: "California Department of Child Support Services: Home", url: "https://childsupport.ca.gov/" }
          ],
          tryIt: "Encontre o site ou o número de telefone do seu serviço de pensão de alimentos. Anote como pedir uma revisão, os papéis que pedem e a data em que os vai contactar. Se não tiver nenhuma ordem, anote uma forma de ajudar o seu filho este mês.",
          youCanNow: "pedir uma revisão ao serviço de pensão de alimentos e levar as provas certas, em vez de deixar a pensão não paga acumular.",
          quickCheck: [
            { objective: "O3", q: "O que pode acontecer se ignorar a pensão de alimentos depois de o seu rendimento baixar?", options: ["A ordem para sozinha", "A pensão não paga pode tornar-se uma dívida grande", "O serviço de pensão de alimentos esquece-se", "O seu filho paga"], answer: 1, why: "A pensão ignorada continua a acumular, por isso pedir uma revisão é importante." },
            { objective: "O3", q: "Perdeu horas no trabalho e a sua pensão de alimentos agora é alta demais. O que faria?", options: ["Deixar de pagar e esperar", "Pagar só quando puder", "Pedir a um amigo para ligar por você", "Contactar o serviço de pensão de alimentos e pedir uma revisão"], answer: 3, why: "A revisão é a forma oficial de ajustar a ordem ao seu rendimento." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Reaproximar-se da família e dos filhos",
        questions: [
          { objective: "O1", q: "Quer reaproximar-se de um primo com quem não fala há anos. Qual é o melhor primeiro passo?", options: ["Aparecer em casa dele tarde da noite", "Enviar uma mensagem curta a dizer que está em casa e gostaria de se reaproximar", "Pedir-lhe dinheiro logo", "Publicar sobre ele na internet"], answer: 1, why: "Uma mensagem curta e respeitosa deixa a pessoa escolher o ritmo." },
          { objective: "O1", q: "Há uma proibição de contacto com um familiar. O que deve fazer?", options: ["Cumprir a ordem", "Ignorá-la se se sentir pronto", "Pedir a um amigo para passar mensagens", "Contactá-lo uma vez para explicar"], answer: 0, why: "As ordens do tribunal têm de ser sempre cumpridas; pergunte à assistência jurídica ou ao seu agente se tiver dúvidas." },
          { objective: "O2", q: "O que conta mais para uma criança quando o pai ou a mãe volta para casa?", options: ["Presentes caros", "Grandes promessas", "Aparecer vez após vez", "Falar mal de quem cuida dela"], answer: 2, why: "A constância constrói a confiança de uma criança mais do que presentes ou promessas." },
          { objective: "O3", q: "O seu rendimento baixou e não consegue pagar a pensão de alimentos. O que faz?", options: ["Deixa de pagar e não diz nada", "Espera até a dívida ficar grande", "Muda-se para longe", "Pede uma revisão ao serviço de pensão de alimentos"], answer: 3, why: "Uma revisão pode baixar o valor; ignorá-la deixa a dívida crescer." },
          { objective: "O3", q: "Na Califórnia, quanto custa pedir uma revisão da pensão de alimentos?", options: ["$500", "Nada", "Um mês de pensão", "Depende do juiz"], answer: 1, why: "A revisão e o ajuste na Califórnia são gratuitos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Comunidade, limites e apoio",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ouvir, pedir desculpa e reconstruir a confiança",
          minutes: 5,
          goal: "Ouvir, usar frases com \"eu\" e fazer um verdadeiro pedido de desculpa numa conversa difícil.",
          text: [
            "A confiança reconstrói-se com ações ao longo do tempo, não numa só conversa. Uma boa comunicação ajuda a que essas ações sejam vistas.",
            "Ouça primeiro. Deixe a outra pessoa acabar e depois repita o que ouviu: Então sentiste-te desiludido quando eu faltei à tua formatura. Isto mostra que entende, mesmo que veja as coisas de outra maneira.",
            "Use frases com \"eu\" para partilhar o que sente sem culpar: Eu sinto-me nervoso com isto, em vez de Tu tornas sempre isto difícil. Um verdadeiro pedido de desculpa diz o que fez, diz como isso magoou a pessoa e diz o que vai fazer de diferente. Não tem \"mas\" e não exige perdão.",
            "Algumas pessoas vão precisar de muito tempo. Tenha paciência. Continue a aparecer, cumpra a sua palavra e deixe a confiança voltar ao ritmo delas."
          ],
          steps: ["Deixe a outra pessoa acabar de falar.", "Repita o que ouviu.", "Partilhe o que sente com frases com \"eu\".", "Peça desculpa: o que fez, como magoou, o que vai fazer de diferente.", "Não acrescente \"mas\"; não exija perdão.", "Cumpra a sua palavra depois."],
          words: [["Frase com \"eu\"", "uma forma de partilhar o que sente começando por \"eu\", sem culpar."], ["Repetir o que ouviu", "dizer com as suas palavras o que alguém disse, para mostrar que entendeu."], ["Confiança", "acreditar que alguém vai fazer o que diz."]],
          slides: [
            { title: "A confiança volta com ações", bullets: ["Não numa só conversa", "A comunicação ajuda a que as ações sejam vistas"] },
            { title: "Ouça primeiro", bullets: ["Deixe a pessoa acabar", "Repita o que ouviu"] },
            { title: "Um verdadeiro pedido de desculpa", bullets: ["Diga o que fez", "Diga como isso a magoou", "Diga o que vai fazer de diferente", "Sem \"mas\"; sem exigir perdão"] },
            { title: "Tenha paciência", bullets: ["Alguns precisam de muito tempo", "Continue a aparecer e cumpra a sua palavra"] }
          ],
          tryIt: "Escreva um verdadeiro pedido de desculpa para uma pessoa, com as três partes: o que fez, como isso a magoou e o que vai fazer de diferente. Confirme que não tem \"mas\" e que não pede perdão. Depois decide se e quando o vai partilhar.",
          youCanNow: "ouvir e repetir o que ouviu, falar com frases com \"eu\" e fazer um verdadeiro pedido de desculpa que ajuda a reconstruir a confiança.",
          quickCheck: [
            { objective: "O4", q: "Quais são as três partes de um verdadeiro pedido de desculpa?", options: ["O que fez, como isso magoou a pessoa e o que vai fazer de diferente", "Porque o fez, quem mais teve culpa e o que a pessoa deve fazer", "Desculpa, mas, e por favor perdoa-me", "Um presente, um abraço e uma promessa de esquecer"], answer: 0, why: "Um verdadeiro pedido de desculpa diz o mal feito e a mudança, sem desculpas." },
            { objective: "O4", q: "A sua mãe começa a dizer-lhe como se sentiu magoada. O que faria primeiro?", options: ["Explicar logo o seu lado", "Mudar de assunto", "Ouvir e deixá-la acabar", "Sair da sala"], answer: 2, why: "Ouvir primeiro mostra respeito e ajuda a reconstruir a confiança." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mentores, fé e grupos da comunidade",
          minutes: 5,
          goal: "Encontrar um mentor e um grupo da comunidade em que pode entrar este mês.",
          text: [
            "Um mentor é alguém uns passos à sua frente que pode dar conselhos, perguntar como está e dar-lhe ânimo. Muitos programas de reintegração juntam as pessoas com mentores, muitas vezes pessoas que também já voltaram para casa.",
            "Os grupos da comunidade dão-lhe um lugar a que pertencer: grupos de apoio à reintegração, reuniões de recuperação, comunidades de fé, ligas de desporto, grupos de voluntariado, aulas para pais e grupos de antigos participantes de programas que terminou. Estar com pessoas que estão a construir uma vida boa torna mais fácil fazer o mesmo.",
            "Para os encontrar, pergunte ao seu programa de reintegração, ao seu gestor de caso ou ao seu agente de liberdade condicional, ligue para o 211 (a linha de ajuda local dos Estados Unidos) ou pergunte a uma comunidade de fé perto de você. Vá uma vez e depois vá outra vez. A maioria dos grupos parece estranha no início e fica melhor na terceira visita.",
            "Quando pedir a alguém para ser seu mentor, seja concreto: Podemos falar 30 minutos uma vez por mês? Estou a trabalhar para manter o meu emprego e para me reaproximar dos meus filhos."
          ],
          steps: ["Pergunte ao seu programa de reintegração ou ao gestor de caso sobre mentores.", "Ligue para o 211 ou pergunte a uma comunidade de fé sobre grupos perto de você.", "Escolha um grupo e vá pelo menos três vezes.", "Peça a um possível mentor um compromisso pequeno e concreto.", "Agradeça às pessoas que o ajudam."],
          words: [["Mentor", "uma pessoa de confiança que dá conselhos e apoio enquanto você cresce."], ["Grupo de apoio", "pessoas com uma experiência em comum que se reúnem para se ajudarem."], ["Comunidade de fé", "uma igreja, mesquita, templo ou outro lugar de culto e os seus membros."]],
          slides: [
            { title: "Porquê um mentor", bullets: ["Alguém uns passos à sua frente", "Conselhos, contactos regulares e ânimo", "Muitas vezes alguém que também voltou para casa"] },
            { title: "Lugares a que pertencer", bullets: ["Grupos de reintegração e de recuperação", "Comunidades de fé e voluntariado", "Desporto, grupos de pais e de antigos participantes"] },
            { title: "Como os encontrar", bullets: ["Pergunte ao programa de reintegração ou ao gestor de caso", "Ligue para o 211", "Vá pelo menos três vezes"] },
            { title: "Pedir a alguém para ser seu mentor", bullets: ["Seja concreto e peça pouco", "30 minutos uma vez por mês", "Diga em que está a trabalhar"] }
          ],
          sources: [
            { name: "211: Find local help", url: "https://www.211.org/" }
          ],
          tryIt: "Encontre um possível mentor e um grupo da comunidade. Anote como contactar cada um. Depois escreva as palavras exatas que vai usar para pedir ao mentor um compromisso pequeno e concreto.",
          youCanNow: "encontrar um mentor e um grupo da comunidade e pedir apoio de forma clara e concreta.",
          quickCheck: [
            { objective: "O5", q: "O que é um mentor?", options: ["Alguém que paga as suas contas", "Uma pessoa de confiança uns passos à frente que dá conselhos e apoio", "O seu agente de liberdade condicional", "Qualquer pessoa que conhece uma vez"], answer: 1, why: "Um mentor já fez um caminho parecido e ajuda a orientá-lo." },
            { objective: "O5", q: "Quer que alguém da sua igreja seja seu mentor. O que diria?", options: ["Pode resolver a minha vida?", "Pode estar disponível sempre que eu precisar?", "Pode emprestar-me dinheiro?", "Podemos encontrar-nos 30 minutos uma vez por mês para falar dos meus objetivos?"], answer: 3, why: "Um pedido pequeno e concreto é mais fácil de aceitar para um mentor." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Limites saudáveis e procurar apoio",
          minutes: 6,
          goal: "Definir dois limites saudáveis e fazer uma lista de apoio que inclui o 988.",
          text: [
            "Um limite é uma linha que você traça para proteger a sua saúde, a sua liberdade e o seu progresso. Alguns amigos antigos, lugares e hábitos podem puxá-lo para trás. Um limite pode ser: Já não vou àquela rua, ou: Não guardo nada no meu carro para ninguém.",
            "Diga o limite de forma simples e gentil: Gosto de ti, mas agora não posso estar perto de bebida. Não precisa de discutir nem de explicar muitas vezes. Os limites também valem para os dois lados: respeite os limites que a sua família define consigo.",
            "Voltar para casa é stressante. Sentir ansiedade, raiva, tristeza ou solidão é comum, e pedir ajuda é normal. A 988 Suicide and Crisis Lifeline é gratuita, confidencial e está aberta 24 horas por dia, todos os dias. Pode ligar ou enviar SMS para o 988, ou conversar por chat em 988lifeline.org, por você ou por alguém que o preocupa. Numa emergência, ligue para o 911.",
            "Faça uma lista de apoio: duas ou três pessoas de confiança, o seu mentor ou grupo, o seu gestor de caso e o 988. Guarde-a no telefone e em papel."
          ],
          steps: ["Diga duas situações que o podem puxar para trás.", "Escreva um limite para cada uma.", "Pratique dizer cada uma de forma gentil e simples.", "Escreva a sua lista de apoio: pessoas de confiança, mentor ou grupo, gestor de caso, 988.", "Guarde a lista no telefone e em papel."],
          words: [["Limite", "uma regra que você define para proteger a sua saúde, a sua segurança e o seu progresso."], ["988", "a Suicide and Crisis Lifeline (linha de apoio em crise); ligue, envie SMS ou converse por chat de graça, 24 horas por dia, todos os dias."], ["Gatilho", "uma pessoa, um lugar ou um sentimento que torna um hábito antigo mais forte."]],
          slides: [
            { title: "O que é um limite", bullets: ["Uma linha que protege o seu progresso", "Exemplo: Já não vou àquela rua"] },
            { title: "Como o dizer", bullets: ["De forma simples e gentil", "Não precisa de discutir nem de explicar vez após vez", "Respeite também os limites da sua família"] },
            { title: "988: ajuda a qualquer hora", bullets: ["Ligue ou envie SMS para o 988, ou use o chat em 988lifeline.org", "Gratuito, confidencial, 24 horas por dia, todos os dias", "Emergência: ligue para o 911"] },
            { title: "A sua lista de apoio", bullets: ["Duas ou três pessoas de confiança", "Mentor, grupo e gestor de caso", "O 988, no telefone e em papel"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Tarefa final: escreva o seu plano de reaproximação e apoio numa página, com o primeiro familiar que vai contactar e a sua mensagem, um passo sobre os filhos ou a pensão de alimentos se for o seu caso, dois apoios da comunidade, dois limites e a sua lista de apoio com o 988.",
          youCanNow: "definir limites saudáveis, dizê-los com gentileza e procurar apoio, incluindo o 988, quando as coisas ficam difíceis.",
          quickCheck: [
            { objective: "O6", q: "O que é um limite?", options: ["Uma regra que você define para proteger a sua saúde e o seu progresso", "Uma regra que a sua família define para você", "Uma ordem do tribunal", "Uma forma de castigar as pessoas"], answer: 0, why: "Os limites são regras que você escolhe para se proteger a si e ao seu progresso." },
            { objective: "O6", q: "Um amigo antigo continua a convidá-lo para lugares que o podem meter em problemas. O que faria?", options: ["Ir uma vez para ele deixar de pedir", "Dizer não com gentileza e propor outra coisa, ou afastar-se", "Ir mas sair cedo", "Bloquear toda a gente que conhece"], answer: 1, why: "Um não claro e gentil protege o seu progresso." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Comunidade, limites e apoio",
        questions: [
          { objective: "O4", q: "Qual é um verdadeiro pedido de desculpa?", options: ["Desculpa, mas foste tu que me obrigaste", "Desculpa se ficaste chateado", "Podemos simplesmente esquecer isto?", "Faltei aos teus aniversários. Sei que isso te magoou. Agora vou ligar-te todas as semanas."], answer: 3, why: "Diz o que fez, como magoou e o que vai fazer de diferente." },
          { objective: "O4", q: "Qual é uma frase com \"eu\"?", options: ["Tu nunca ouves", "Eu sinto-me nervoso com esta conversa", "Tu estragas sempre tudo", "Estão todos contra mim"], answer: 1, why: "Uma frase com \"eu\" partilha o que sente sem culpar." },
          { objective: "O5", q: "Qual é uma boa forma de pedir a alguém para ser seu mentor?", options: ["Podemos falar 30 minutos uma vez por mês sobre como manter o meu emprego?", "Resolva a minha vida", "Dê-me dinheiro", "Esteja sempre disponível"], answer: 0, why: "Um pedido pequeno e concreto é fácil de aceitar." },
          { objective: "O6", q: "Um amigo antigo quer que guarde uma coisa no seu carro. Um limite saudável é:", options: ["Dizer que sim para manter a amizade", "Dizer que sim só desta vez", "Dizer não com gentileza: Já não posso fazer isso", "Ignorar as regras da sua liberdade condicional"], answer: 2, why: "Um não claro e gentil protege a sua liberdade e o seu progresso." },
          { objective: "O6", q: "Sente-se sem esperança tarde da noite. O que pode fazer?", options: ["Esperar até ao próximo mês", "Ligar ou enviar SMS para o 988", "Guardar isso para si", "Procurar um fórum qualquer na internet"], answer: 1, why: "O 988 é gratuito, confidencial e está aberto 24 horas por dia, todos os dias, por chamada, SMS ou chat." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Reconstruir os Laços com a Família e a Comunidade",
    questions: [
      { objective: "O1", q: "Porque planear o primeiro contacto em vez de aparecer sem avisar?", options: ["Um plano respeita a outra pessoa e corre melhor", "A lei obriga a ter um plano", "É mais rápido surpreender as pessoas", "Não faz diferença"], answer: 0, why: "Um contacto planeado e respeitoso dá à relação um começo melhor." },
      { objective: "O1", q: "O que NÃO deve ter uma primeira mensagem?", options: ["Que está em casa", "Que gostaria de se reaproximar", "Um pedido de dinheiro ou de um lugar para ficar", "Que a pessoa pode escolher o ritmo"], answer: 2, why: "Pedir dinheiro ou casa logo no início põe pressão na pessoa." },
      { objective: "O1", q: "Um familiar diz que não está pronto para falar. Qual é a melhor resposta?", options: ["Continuar a ligar de hora a hora", "Ficar zangado", "Pedir a outros para o pressionar", "Agradecer e deixar a porta aberta"], answer: 3, why: "Respeitar o ritmo dele deixa a porta aberta para mais tarde." },
      { objective: "O2", q: "Antes da primeira visita ao seu filho, deve falar primeiro com:", options: ["A pessoa que cuida da criança", "Um desconhecido na internet", "Os seus amigos antigos", "Ninguém"], answer: 0, why: "A pessoa que cuida da criança sabe para o que ela está pronta e que horários servem." },
      { objective: "O2", q: "Uma criança pequena pergunta onde você esteve. Uma boa resposta é:", options: ["Uma história longa com todos os detalhes", "Cometi um erro, estive fora e agora estou aqui", "A culpa foi da tua mãe", "Nada"], answer: 1, why: "Palavras simples e honestas são adequadas à idade de uma criança pequena." },
      { objective: "O2", q: "Quer visitas regulares fixadas por um tribunal. Por onde pode começar?", options: ["Um grupo nas redes sociais", "O seu antigo companheiro de cela", "O site de autoajuda do tribunal do seu estado ou um facilitador de direito da família", "Uma casa de penhores"], answer: 2, why: "Os sites de autoajuda dos tribunais e os facilitadores de direito da família explicam os formulários." },
      { objective: "O2", q: "O que constrói mais a confiança de uma criança?", options: ["Grandes promessas", "Grandes presentes uma vez por ano", "Falar mal de quem cuida dela", "Cumprir pequenas promessas vez após vez"], answer: 3, why: "A constância mostra à criança que pode contar com você." },
      { objective: "O3", q: "O que acontece à pensão de alimentos se a ignorar depois de o seu rendimento baixar?", options: ["A pensão não paga pode tornar-se uma dívida grande", "Para sozinha", "É perdoada automaticamente", "Não acontece nada"], answer: 0, why: "As ordens continuam em vigor até serem mudadas, por isso a pensão não paga acumula." },
      { objective: "O3", q: "Na Califórnia, quem pode pedir uma revisão da pensão de alimentos?", options: ["Só o juiz", "Qualquer um dos pais", "Só a criança", "Só um advogado"], answer: 1, why: "Qualquer um dos pais pode pedir uma revisão ao serviço local de pensão de alimentos." },
      { objective: "O3", q: "Na Califórnia, um pai ou uma mãe preso 60 dias ou mais seguidos pode:", options: ["Nunca mudar a ordem", "Ignorar a ordem", "Pedir um valor mais baixo com o formulário Incarcerated Parent's Request to Review Child Support", "Pagar o dobro"], answer: 2, why: "A Califórnia tem um formulário próprio para os pais presos pedirem uma revisão." },
      { objective: "O3", q: "Fora da Califórnia, onde pergunta sobre mudar uma ordem de pensão de alimentos?", options: ["Ao seu patrão", "Ao seu senhorio", "A uma estação de rádio", "Ao serviço de pensão de alimentos do seu estado ou da sua tribo"], answer: 3, why: "Os serviços de pensão de alimentos dos estados e das tribos tratam das revisões." },
      { objective: "O4", q: "O que deve fazer primeiro numa conversa difícil?", options: ["Ouvir e deixar a pessoa acabar", "Interromper para explicar", "Ir-se embora", "Levantar a voz"], answer: 0, why: "Ouvir primeiro mostra respeito e ajuda-o a entender." },
      { objective: "O4", q: "Dizer de volta o que ouviu chama-se:", options: ["Discutir", "Repetir o que ouviu", "Ignorar", "Culpar"], answer: 1, why: "Repetir o que ouviu mostra à outra pessoa que entendeu." },
      { objective: "O4", q: "Que palavra deve deixar de fora de um pedido de desculpa?", options: ["Desculpa", "Vou", "Mas", "Eu"], answer: 2, why: "O \"mas\" transforma um pedido de desculpa numa desculpa para o que fez." },
      { objective: "O5", q: "Um mentor é:", options: ["O seu agente de liberdade condicional", "Alguém que paga as suas contas", "Um juiz", "Uma pessoa de confiança uns passos à frente que dá conselhos e apoio"], answer: 3, why: "Os mentores dão conselhos e ânimo enquanto você cresce." },
      { objective: "O5", q: "Foi uma vez a um grupo de apoio e sentiu-se deslocado. Qual é um bom passo a seguir?", options: ["Ir pelo menos mais duas vezes antes de decidir", "Nunca mais ir", "Queixar-se na internet", "Dizer aos outros para não irem"], answer: 0, why: "A maioria dos grupos fica melhor na terceira visita." },
      { objective: "O5", q: "Qual é uma forma de encontrar grupos da comunidade?", options: ["Pedir dinheiro a um desconhecido", "Ligar para o 211 ou perguntar ao seu gestor de caso", "Esperar que alguém o encontre", "Voltar aos sítios de antigamente"], answer: 1, why: "O 211 e os gestores de caso conhecem os grupos e programas locais." },
      { objective: "O6", q: "O que é um limite?", options: ["Uma cerca à volta da sua casa", "Uma regra que outros definem para você", "Uma regra que você define para proteger a sua saúde e o seu progresso", "Um tipo de ordem do tribunal"], answer: 2, why: "Um limite protege a sua saúde, a sua segurança e o seu progresso." },
      { objective: "O6", q: "O que é verdade sobre o 988?", options: ["Custa dinheiro", "Só funciona nos dias úteis", "É só para emergências com a polícia", "Pode ligar, enviar SMS ou usar o chat de graça, 24 horas por dia, todos os dias"], answer: 3, why: "O 988 é gratuito, confidencial e está aberto 24 horas por dia, todos os dias, por chamada, SMS ou chat." },
      { objective: "O6", q: "Onde deve guardar a sua lista de apoio?", options: ["No telefone e em papel", "Só na sua cabeça", "Em lado nenhum", "Com um desconhecido"], answer: 0, why: "Tê-la em dois lugares quer dizer que a consegue encontrar quando precisar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 1, 3, 6, 7, 10, 11, 13, 14, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Primeiro contacto", objective: "O1", notYet: "Não há mensagem, ou ela pede dinheiro, culpa ou pressiona.", meets: "Diz quem vai contactar primeiro e tem uma mensagem curta e respeitosa.", exceeds: "A mensagem foi lida em voz alta e deixa espaço para a pessoa ir com calma." },
      { name: "Passo sobre os filhos ou a pensão de alimentos", objective: "O3", notYet: "Nenhum passo quando é o seu caso.", meets: "Um passo claro, como contactar quem cuida da criança ou pedir uma revisão ao serviço, com uma data.", exceeds: "Indica os papéis necessários ou as perguntas para quem cuida da criança." },
      { name: "Apoios da comunidade", objective: "O5", notYet: "Menos de dois apoios.", meets: "Dois apoios, como um mentor, um grupo ou uma comunidade de fé, com a forma de os contactar.", exceeds: "Inclui as palavras exatas para pedir a um mentor um compromisso concreto." },
      { name: "Limites", objective: "O6", notYet: "Menos de dois limites, ou são vagos.", meets: "Dois limites claros que protegem o progresso do aluno.", exceeds: "Cada limite tem as palavras que o aluno vai usar para o manter." },
      { name: "Lista de apoio", objective: "O6", notYet: "Não há lista, ou falta o 988.", meets: "Uma lista de pessoas e números para ligar, incluindo o 988.", exceeds: "Guardada no telefone e em papel." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter contactado um familiar ou um filho em 30 dias (inquérito de seguimento)",
      "Alunos que entram num programa de mentoria, num grupo de apoio ou numa comunidade de fé em 60 dias",
      "Alunos que pedem uma revisão da pensão de alimentos quando o valor já não corresponde ao seu rendimento"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel e caneta, ou uma aplicação de notas no telefone",
      "Um telefone para guardar a lista de apoio",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Estes temas podem trazer sentimentos fortes; deixe os alunos partilhar só o que quiserem e mantenha o 988 à vista.",
      "Lembre aos alunos que as ordens do tribunal, as proibições de contacto e as condições da liberdade condicional ou da pena suspensa vêm primeiro.",
      "Tenha prontos os contactos do serviço local de pensão de alimentos, da assistência jurídica gratuita e do 211.",
      "Pratiquem ouvir e as frases com \"eu\" em pares, com situações inventadas, não com conflitos reais da família.",
      "Avalie o plano com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
