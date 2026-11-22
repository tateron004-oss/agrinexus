"use strict";

// Koach Learn course (Portuguese translation of leadership/lead-change-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "lead-change-management-pt",
  lang: "pt",
  translationOf: "lead-change-management",
  category: "Leadership Development",
  name: "Liderar a Mudança",
  skills: "Compreender a resistência, Explicar porque a mudança é precisa, Envolver as pessoas afetadas, Escrever um plano de mudança simples, Comunicar a mudança e ganhos rápidos, Fazer a mudança durar",
  outcome: "liderar uma mudança real no trabalho ou na sua comunidade: compreender porque as pessoas resistem, explicar porque a mudança importa, envolver as pessoas que ela afeta, escrever um plano de mudança de uma página, comunicá-lo bem e mantê-lo depois do lançamento.",
  about: [
    "Este curso é para quem tem de liderar uma mudança: um supervisor que traz um novo horário, uma organização sem fins lucrativos que passa para um novo sistema de doadores, o dono de um pequeno negócio que muda a forma de tratar as encomendas, ou um grupo de agricultores que passa para registos digitais.",
    "A maioria das mudanças falha não porque a ideia é má, mas porque as pessoas não são trazidas junto. Você vai aprender porque as pessoas resistem, como explicar a razão da mudança, como envolver as pessoas e como planear, comunicar e manter uma mudança.",
    "Cada lição dura cerca de cinco minutos. No início, escolha uma mudança real que lhe importa e use-a em cada tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva um plano de mudança de uma página para uma mudança real que quer liderar. Tem de dizer o que muda, porquê (em duas ou três frases que importem às pessoas), quem é afetado e como os vai envolver, quando acontece cada passo, como vai saber que está a funcionar, três mensagens para três grupos diferentes, um ganho rápido no primeiro mês e duas formas de manter a mudança.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Chefes de equipa, supervisores, donos de pequenos negócios, líderes de organizações sem fins lucrativos e da comunidade que precisam de liderar uma mudança real, como um novo sistema, um novo processo ou uma nova forma de servir as pessoas.",
    startingPoint: "Sabem que mudança querem e conseguem explicá-la a alguém que já concorda. A maioria já viu mudanças falharem, mas nunca escreveu um plano de mudança nem planeou como envolver as pessoas afetadas.",
    gap: "As mudanças falham muitas vezes porque as pessoas não veem porquê, não foram consultadas, ouvem falar dela só uma vez, ou voltam aos velhos hábitos depois do lançamento. Os líderes precisam de uma forma simples de compreender a resistência, explicar a razão, envolver as pessoas, planear, comunicar e manter a mudança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Tempo: lições curtas que cabem num dia de trabalho",
      "Aparelhos: um telefone ou computador; o plano pode ser feito em papel",
      "O plano de mudança tem de caber numa página",
      "Os dados e as histórias que explicam a mudança têm de ser do próprio aluno, não inventados pela IA"
    ],
    prerequisites: "Nenhum. O curso \"Gerir Equipas\" é um bom complemento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma mudança que quer liderar", action: "fazer a lista de quem é afetado, do que cada grupo pode perder e ganhar e das razões prováveis para resistir", standard: "tratando cada preocupação como informação a que deve responder" },
    { id: "O2", condition: "Com uma mudança real", action: "escrever a razão da mudança, dizendo o problema, o que vai ficar melhor e o que acontece se não fizer nada", standard: "em duas ou três frases com um dado ou uma história real" },
    { id: "O3", condition: "Com as pessoas que uma mudança afeta", action: "planear como as envolver cedo, por exemplo com ideias, um piloto ou defensores da mudança", standard: "dizendo o que está aberto e o que não está, e como vai dar resposta" },
    { id: "O4", condition: "Com uma mudança real", action: "escrever um plano de mudança de uma página que responda o quê, porquê, quem, quando e como vai saber", standard: "com um responsável para cada passo e duas ou três medidas com datas de verificação" },
    { id: "O5", condition: "Quando anuncia uma mudança", action: "escrever mensagens para três grupos diferentes e planear um ganho rápido", standard: "cada mensagem dizendo o que muda, porquê, quando, a ajuda que recebem e a quem perguntar" },
    { id: "O6", condition: "Depois do lançamento da mudança", action: "planear duas formas de manter a mudança", standard: "como verificar as medidas em datas marcadas e pôr a nova forma nas listas de verificação ou na formação" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Compreender a mudança e trazer as pessoas consigo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Porque as pessoas resistem à mudança",
          minutes: 5,
          goal: "Dizer as razões prováveis por que as pessoas vão resistir à sua mudança, para lhes poder responder.",
          text: [
            "Mudar quer dizer perder algo conhecido, mesmo quando a nova forma é melhor. As pessoas resistem por razões compreensíveis: não veem porque é precisa, têm medo de não serem boas na nova forma, preocupam-se em perder tempo, dinheiro, posição ou amigos, não foram consultadas, ou mudanças anteriores correram mal.",
            "A resistência é informação, não um ataque. A pessoa que resiste muitas vezes vê um problema real que lhe escapou. Leve a preocupação dela a sério e pergunte sobre ela.",
            "Antes de anunciar alguma coisa, faça a lista de quem é afetado e do que cada grupo pode perder e ganhar. Essa lista diz-lhe o que explicar, quem envolver e que apoio dar."
          ],
          steps: ["Escreva a mudança numa frase.", "Faça a lista de todos os grupos que ela afeta.", "Para cada grupo, escreva o que pode perder e o que pode ganhar.", "Marque as preocupações a que precisa de responder."],
          words: [["Resistência", "ir contra uma mudança, de forma aberta ou calada."], ["Parte interessada", "qualquer pessoa afetada por uma mudança ou que pode influenciar se ela funciona."]],
          slides: [
            { title: "Mudar é perder algo", bullets: ["Mesmo uma boa mudança tira algo conhecido", "As pessoas preocupam-se antes de ver os benefícios"] },
            { title: "Razões comuns para resistir", bullets: ["Não veem porquê", "Têm medo de não serem boas na nova forma", "Podem perder tempo, dinheiro ou posição", "Não foram consultadas, ou mudanças antigas falharam"] },
            { title: "A resistência é informação", bullets: ["Podem ver um problema real que lhe escapou", "Pergunte, não discuta"] },
            { title: "Faça primeiro o mapa", bullets: ["Quem é afetado", "O que cada grupo pode perder e ganhar"] }
          ],
          tryIt: "Escolha uma mudança real que quer liderar. Escreva-a numa frase. Depois faça a lista de três grupos que ela afeta e, para cada um, uma coisa que podem perder e uma coisa que podem ganhar.",
          youCanNow: "prever porque as pessoas podem resistir a uma mudança e fazer o mapa do que cada grupo pode perder e ganhar.",
          quickCheck: [
            { objective: "O1", q: "Qual é uma razão compreensível para as pessoas resistirem a uma mudança?", options: ["Querem que a equipa falhe", "Não foram consultadas", "Nunca gostam de nada", "São pagas para resistir"], answer: 1, why: "Não ser consultado é uma das razões comuns e compreensíveis para a resistência." },
            { objective: "O1", q: "Antes de anunciar uma mudança, o que faria primeiro?", options: ["Enviar um e-mail a todos ao mesmo tempo", "Esperar que as pessoas se queixem", "Pedir à IA para escrever o anúncio", "Fazer a lista de quem é afetado e do que cada grupo pode perder e ganhar"], answer: 3, why: "Essa lista diz-lhe o que explicar, quem envolver e que apoio dar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Explicar porque a mudança é precisa",
          minutes: 5,
          goal: "Explicar em poucas frases porque uma mudança é precisa, com palavras que importam às pessoas afetadas.",
          text: [
            "As pessoas precisam de compreender o porquê antes de aceitarem o quê. Uma boa razão para a mudança responde a três perguntas: Qual é o problema hoje? O que vai ficar melhor depois da mudança? O que acontece se não fizermos nada?",
            "Use dados e uma história real. \"As nossas folhas de inscrição em papel perderam 30 nomes de voluntários no mês passado, e duas famílias ficaram sem a entrega de comida\" toca mais as pessoas do que \"precisamos de modernizar\". Fale do que importa a cada grupo: tempo, justiça, segurança, clientes, as pessoas que servem.",
            "Seja honesto sobre o que é difícil. Se a nova forma der mais trabalho no início, diga-o e diga como vai ajudar. As pessoas confiam num líder que admite os custos. Um assistente de IA pode ajudar a melhorar as suas palavras, mas os dados e a história devem ser seus."
          ],
          steps: ["Descreva o problema de hoje, com um dado.", "Descreva o que vai ficar melhor.", "Diga o que acontece se nada mudar.", "Acrescente uma história real.", "Seja honesto sobre o que vai ser difícil e como vai ajudar."],
          words: [["Razão para a mudança", "uma explicação curta de porque uma mudança é precisa e do que ela vai melhorar."]],
          slides: [
            { title: "O porquê antes do quê", bullets: ["Qual é o problema hoje?", "O que vai ficar melhor?", "E se não fizermos nada?"] },
            { title: "Dados e uma história", bullets: ["Um número real mostra o tamanho do problema", "Uma história real mostra porque importa"] },
            { title: "Fale do que lhes importa", bullets: ["Tempo, justiça, segurança", "Os clientes ou as pessoas que servem"] },
            { title: "Seja honesto", bullets: ["Diga o que vai ser difícil", "Diga como vai ajudar"] }
          ],
          tryIt: "Escreva a razão da sua mudança em quatro frases: o problema de hoje com um dado, o que vai ficar melhor, o que acontece se nada mudar e uma frase honesta sobre o que vai ser difícil. Leia em voz alta. As pessoas afetadas iam importar-se?",
          youCanNow: "escrever uma razão curta e honesta para a mudança, que responde ao porquê e não só ao quê.",
          quickCheck: [
            { objective: "O2", q: "Que razão para a mudança é mais forte?", options: ["\"No mês passado os nossos formulários em papel perderam 12 encomendas e três clientes foram embora.\"", "\"Precisamos de modernizar.\"", "\"Todos os outros estão a fazer.\"", "\"O chefe quer.\""], answer: 0, why: "Um dado e uma história reais tocam mais as pessoas do que um slogan." },
            { objective: "O2", q: "A nova forma vai levar mais tempo no início. O que diria?", options: ["Esconder até ao lançamento", "Dizer que vai ser fácil", "Dizê-lo com honestidade e dizer como vai ajudar", "Culpar o sistema antigo"], answer: 2, why: "As pessoas confiam num líder que admite os custos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Envolver as pessoas afetadas",
          minutes: 5,
          goal: "Planear como envolver as pessoas que uma mudança afeta antes de as decisões serem finais.",
          text: [
            "As pessoas apoiam aquilo que ajudam a criar. Envolva-as cedo, enquanto ainda há espaço para mudar o plano. Perguntar depois de tudo estar decidido parece falso, e as pessoas percebem.",
            "Formas de envolver as pessoas: pedir as ideias delas numa reunião curta ou num pequeno inquérito, testar a mudança primeiro com um grupo pequeno, convidar alguns membros respeitados da equipa para ajudar a liderar, e deixar as pessoas escolherem como se fazem algumas partes.",
            "Diga com clareza o que está aberto e o que não está. \"Vamos passar para o novo sistema até março; vocês podem ajudar a decidir como fazemos a formação e por que ordem as equipas mudam.\" Depois mostre o que fez com as opiniões delas, mesmo quando não as pôde usar."
          ],
          steps: ["Decida o que está fixo e o que está aberto.", "Peça ideias cedo, numa reunião ou num inquérito curto.", "Teste com um pequeno grupo piloto.", "Convide membros respeitados da equipa para ajudar a liderar.", "Diga o que fez com as opiniões recebidas."],
          words: [["Piloto", "um pequeno teste de uma mudança com poucas pessoas antes de todos mudarem."], ["Defensor da mudança", "um membro respeitado da equipa que ajuda a liderar e a explicar a mudança."]],
          slides: [
            { title: "Apoiamos o que ajudamos a criar", bullets: ["Envolva as pessoas cedo", "Perguntar depois de decidir parece falso"] },
            { title: "Formas de envolver as pessoas", bullets: ["Peça ideias", "Faça um pequeno piloto", "Convide defensores da mudança", "Deixe-as escolher parte do como"] },
            { title: "Diga o que está aberto", bullets: ["\"A data está fixa; vocês ajudam a decidir a formação\"", "Diga o que fez com as opiniões delas"] }
          ],
          tryIt: "Para a sua mudança, escreva o que está fixo e o que está aberto. Depois diga duas formas de envolver as pessoas e duas pessoas a quem pode pedir para serem defensores da mudança.",
          youCanNow: "envolver de forma honesta as pessoas que uma mudança afeta e dar-lhes resposta sobre as opiniões delas.",
          quickCheck: [
            { objective: "O3", q: "Porque é que pedir opiniões depois de tudo estar decidido corre mal?", options: ["Leva tempo demais", "Parece falso, e as pessoas percebem", "Custa dinheiro", "As pessoas não têm ideias"], answer: 1, why: "Envolva as pessoas enquanto ainda há espaço para mudar o plano." },
            { objective: "O3", q: "Recolheu ideias mas não pôde usar algumas. O que faria?", options: ["Não dizer nada sobre elas", "Usá-las na mesma", "Deixar de pedir ideias", "Dizer o que fez com as opiniões e porquê"], answer: 3, why: "Mostrar o que fez com as opiniões mantém a confiança, mesmo quando não as pôde usar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Compreender a mudança e trazer as pessoas consigo",
        questions: [
          { objective: "O1", q: "Porque é que as pessoas muitas vezes resistem até a uma boa mudança?", options: ["Porque são preguiçosas", "Porque mudar quer dizer perder algo conhecido", "Porque toda a mudança é má", "Porque os líderes estão sempre errados"], answer: 1, why: "A mudança traz perda e incerteza mesmo quando ajuda." },
          { objective: "O1", q: "Um funcionário resiste muito ao seu plano. Qual é a melhor primeira resposta?", options: ["Perguntar o que o preocupa, porque pode ver um problema real", "Dizer-lhe para parar de se queixar", "Tirá-lo da equipa", "Ignorar"], answer: 0, why: "A resistência é informação; pergunte antes de discutir." },
          { objective: "O2", q: "Uma boa razão para a mudança responde a que três perguntas?", options: ["Quem, onde, quanto", "Quem é o culpado, quando, porque não", "Quanto me vai custar, quem decidiu, posso não fazer", "Qual é o problema, o que vai ficar melhor, e se não fizermos nada"], answer: 3, why: "Estas mostram porque a mudança importa." },
          { objective: "O3", q: "Quando deve envolver as pessoas numa mudança?", options: ["Depois de tudo estar decidido", "Nunca", "Cedo, enquanto ainda há espaço para mudar o plano", "Só se se queixarem"], answer: 2, why: "Opiniões dadas cedo contam de verdade e criam apoio." },
          { objective: "O3", q: "O que é um piloto?", options: ["Um pequeno teste da mudança primeiro com poucas pessoas", "O chefe do líder", "Um prazo final", "Um tipo de vídeo de formação"], answer: 0, why: "Os pilotos deixam-no aprender e corrigir problemas antes de todos mudarem." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear, comunicar e fazer a mudança durar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever um plano de mudança simples",
          minutes: 6,
          goal: "Escrever um plano de mudança de uma página que responda o quê, porquê, quem, quando e como vai saber.",
          text: [
            "Um plano de mudança não precisa de ser longo. Uma página que responda a cinco perguntas chega para a maioria das mudanças: O que muda? Porquê? Quem é afetado e quem faz o quê? Quando acontece cada passo? Como vai saber que está a funcionar?",
            "\"Como vai saber\" é a parte que as pessoas saltam. Escolha dois ou três sinais que pode mesmo verificar, como \"95% das encomendas registadas no novo sistema até à semana 4\" ou \"nenhuma entrega falhada durante um mês\". Marque uma data para os ver.",
            "Nomeie um responsável para cada passo, planeie a formação e o apoio antes da mudança, e diga o que vai fazer se algo correr mal, como manter a forma antiga disponível por pouco tempo."
          ],
          steps: ["O quê: a mudança numa frase.", "Porquê: a sua razão em duas ou três frases.", "Quem: os grupos afetados e um responsável para cada passo.", "Quando: as datas principais, com a formação antes da mudança.", "Como vai saber: duas ou três medidas e uma data para as verificar.", "Um plano de reserva se algo correr mal."],
          words: [["Plano de mudança", "um plano escrito curto que diz o que muda, porquê, quem, quando e como se vai medir o sucesso."], ["Medida", "algo que pode contar ou verificar para ver se uma mudança está a funcionar."], ["Responsável", "a única pessoa encarregada de fazer um passo acontecer."]],
          slides: [
            { title: "Cinco perguntas, uma página", bullets: ["O que muda?", "Porquê?", "Quem é afetado e quem faz o quê?", "Quando? Como vai saber que funciona?"] },
            { title: "Como vai saber", bullets: ["Dois ou três sinais que pode verificar", "Exemplo: \"95% das encomendas no novo sistema até à semana 4\"", "Marque uma data para ver"] },
            { title: "Não se esqueça", bullets: ["Um responsável para cada passo", "Formação antes da mudança", "Um plano de reserva se algo correr mal"] }
          ],
          tryIt: "Escreva o primeiro rascunho do seu plano de uma página com as cinco partes. Em \"como vai saber\", escreva duas medidas e a data em que as vai verificar.",
          youCanNow: "escrever um plano de mudança curto com responsáveis, datas e medidas de sucesso claras.",
          quickCheck: [
            { objective: "O4", q: "Que parte de um plano de mudança as pessoas saltam mais vezes?", options: ["O que muda", "Quem é afetado", "Como vai saber que está a funcionar", "Quando começa"], answer: 2, why: "Escolha dois ou três sinais que pode verificar e uma data para os ver." },
            { objective: "O4", q: "Tem medo de que o novo sistema falhe na primeira semana. O que acrescentaria ao plano?", options: ["O que vai fazer se correr mal, como manter a forma antiga por pouco tempo", "Nada; planear só para o sucesso", "Uma razão para a mudança mais longa", "Uma segunda data de lançamento daqui a um ano"], answer: 0, why: "Um bom plano diz o que vai fazer se algo correr mal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Comunicar a mudança e ter ganhos rápidos",
          minutes: 5,
          goal: "Escrever mensagens claras para grupos diferentes e planear um ganho cedo e visível.",
          text: [
            "Diga-o mais de uma vez, de mais de uma forma. As pessoas estão ocupadas e ouvem uma mensagem várias vezes antes de a reterem. Use uma reunião, uma nota escrita curta e conversas a sós. Diga primeiro às pessoas mais afetadas, pessoalmente se puder, antes de ouvirem de outra pessoa.",
            "Adapte a mensagem a cada grupo: o que muda para eles, porquê, quando, que ajuda vão ter e a quem perguntar. Deixe espaço para perguntas e, se não souber uma resposta, diga-o e diga quando vai saber.",
            "Planeie um ganho rápido: um sucesso cedo e visível nas primeiras semanas, como uma fila mais curta ou um relatório mais rápido. Partilhe-o e agradeça às pessoas que o fizeram acontecer. Os ganhos rápidos mostram que a mudança está a funcionar e conquistam quem tinha dúvidas."
          ],
          steps: ["Diga primeiro às pessoas mais afetadas, pessoalmente se possível.", "Para cada grupo: o que muda para eles, porquê, quando, ajuda, a quem perguntar.", "Repita em reuniões, notas e conversas a sós.", "Responda às perguntas com honestidade; diga quando vai saber.", "Planeie e celebre um ganho rápido no primeiro mês."],
          words: [["Ganho rápido", "um sucesso cedo e visível que mostra que uma mudança está a funcionar."], ["Público", "o grupo de pessoas para quem uma mensagem é escrita."]],
          slides: [
            { title: "Diga mais de uma vez", bullets: ["Reuniões, notas e conversas a sós", "Primeiro os mais afetados, pessoalmente"] },
            { title: "Cada mensagem diz", bullets: ["O que muda para eles e porquê", "Quando, e que ajuda vão ter", "A quem perguntar"] },
            { title: "Respostas honestas", bullets: ["Não sabe? Diga", "Diga quando vai saber"] },
            { title: "Ganhos rápidos", bullets: ["Um sucesso cedo e visível", "Partilhe-o e agradeça a quem o fez"] }
          ],
          tryIt: "Escreva três mensagens curtas sobre a sua mudança para três grupos diferentes (por exemplo o pessoal da linha da frente, os gestores e os clientes). Depois escreva um ganho rápido que poderia mostrar no primeiro mês.",
          youCanNow: "comunicar uma mudança com clareza a grupos diferentes e planear um ganho cedo que cria apoio.",
          quickCheck: [
            { objective: "O5", q: "O que é um ganho rápido?", options: ["Acabar a mudança num dia", "Um sucesso cedo e visível que mostra que a mudança está a funcionar", "Saltar a formação", "Um prémio para a primeira pessoa que mudar"], answer: 1, why: "Os ganhos rápidos conquistam quem tinha dúvidas." },
            { objective: "O5", q: "Como diria a mudança às pessoas mais afetadas por ela?", options: ["Deixá-las ouvir de outra pessoa", "Pôr um aviso na parede", "Enviar um único e-mail a todo o pessoal", "Dizer-lhes primeiro, pessoalmente se puder"], answer: 3, why: "As pessoas mais afetadas devem ouvir primeiro, antes de os boatos chegarem." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer a mudança durar",
          minutes: 5,
          goal: "Planear como manter uma mudança depois do lançamento, para as pessoas não voltarem à forma antiga.",
          text: [
            "O dia do lançamento não é a linha de chegada. Muitas mudanças apagam-se depois de algumas semanas porque as pessoas voltam aos velhos hábitos, sobretudo quando estão ocupadas ou sob pressão.",
            "Para a fazer durar: verifique as suas medidas nas datas marcadas, mantenha o apoio fácil de encontrar, acabe com a forma antiga quando a nova funcionar, e ponha a mudança nas rotinas do dia a dia, como listas de verificação, a integração de novos trabalhadores e o que se espera de cada função.",
            "Continue a ouvir. Pergunte às pessoas o que ainda é difícil e corrija. Agradeça a quem usa bem a nova forma e partilhe os resultados. Quando a mudança já faz parte de \"como fazemos as coisas aqui\", veja o que aprendeu para a próxima mudança."
          ],
          steps: ["Verifique as suas medidas nas datas planeadas.", "Mantenha a ajuda fácil de encontrar.", "Acabe com a forma antiga quando a nova funcionar.", "Ponha a mudança nas listas de verificação, na formação e no que se espera de cada função.", "Pergunte o que ainda é difícil e corrija.", "Partilhe os resultados e agradeça às pessoas."],
          words: [["Manter", "fazer algo continuar ao longo do tempo."], ["Rotina", "a forma habitual como o trabalho se faz todos os dias ou todas as semanas."]],
          slides: [
            { title: "O lançamento não é a linha de chegada", bullets: ["As mudanças apagam-se quando as pessoas estão ocupadas", "Os velhos hábitos puxam as pessoas para trás"] },
            { title: "Ponha-a nas rotinas", bullets: ["Listas de verificação e formação de novos trabalhadores", "O que se espera de cada função", "Acabe com a forma antiga quando a nova funcionar"] },
            { title: "Continue a ouvir", bullets: ["Verifique as medidas nas datas", "Pergunte o que ainda é difícil e corrija", "Partilhe os resultados e agradeça às pessoas"] }
          ],
          tryIt: "Tarefa final: termine o seu plano de mudança de uma página. Acrescente três mensagens para três grupos, um ganho rápido no primeiro mês e duas formas de manter a mudança depois do lançamento.",
          youCanNow: "manter uma mudança depois do lançamento verificando os resultados, pondo-a nas rotinas e ouvindo as pessoas que fazem o trabalho.",
          quickCheck: [
            { objective: "O6", q: "O que acontece muitas vezes a uma mudança algumas semanas depois do lançamento?", options: ["Apaga-se porque as pessoas voltam aos velhos hábitos", "Dura sempre sozinha", "Todos esquecem a forma antiga", "Cresce sozinha"], answer: 0, why: "O dia do lançamento não é a linha de chegada; os hábitos puxam as pessoas para trás." },
            { objective: "O6", q: "A nova forma funciona bem. O que faria com a forma antiga?", options: ["Manter as duas para sempre", "Pedir a cada pessoa para escolher", "Acabar com a forma antiga e pôr a nova nas listas de verificação e na formação", "Esconder a nova forma"], answer: 2, why: "Acabar com a forma antiga e pôr a nova nas rotinas ajuda a mudança a durar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Planear, comunicar e fazer a mudança durar",
        questions: [
          { objective: "O4", q: "Que pergunta faz parte de um plano de mudança simples?", options: ["Quem podemos culpar?", "Como podemos evitar dizer às pessoas?", "Como vamos saber que está a funcionar?", "Quanto tempo podemos esperar?"], answer: 2, why: "As medidas mostram se a mudança funciona." },
          { objective: "O4", q: "Qual é uma boa medida de sucesso?", options: ["\"As pessoas sentem-se modernas\"", "\"As coisas correm melhor\"", "\"Esforçámo-nos muito\"", "\"Nenhuma entrega falhada durante um mês\""], answer: 3, why: "É algo que pode mesmo verificar." },
          { objective: "O5", q: "Quem deve ouvir falar de uma mudança primeiro?", options: ["As pessoas mais afetadas, pessoalmente se possível", "O jornal local", "Só a equipa de direção, para sempre", "Ninguém até começar"], answer: 0, why: "Merecem ouvir diretamente, não por boatos." },
          { objective: "O5", q: "Alguém faz uma pergunta a que ainda não sabe responder. O que faz?", options: ["Inventa uma resposta", "Diz que não sabe e diz quando vai saber", "Muda de assunto", "Termina a reunião"], answer: 1, why: "A honestidade cria confiança durante a mudança." },
          { objective: "O6", q: "Três meses depois do lançamento, as pessoas estão a voltar à forma antiga. O que ajuda mais?", options: ["Deixar de falar disso", "Trazer de volta o sistema antigo de vez", "Culpar a equipa", "Pôr a nova forma nas listas de verificação e na formação e perguntar o que ainda é difícil"], answer: 3, why: "As rotinas e o saber ouvir fazem a mudança durar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Liderar a Mudança",
    questions: [
      { objective: "O1", q: "Qual é uma razão comum para as pessoas resistirem à mudança?", options: ["Têm medo de não serem boas na nova forma", "Gostam de conflitos", "Querem mais reuniões", "Nunca gostam do seu trabalho"], answer: 0, why: "O medo de não conseguir fazer bem a nova forma é muito comum." },
      { objective: "O1", q: "Tratar a resistência como informação quer dizer:", options: ["Ignorá-la", "Gravar as pessoas às escondidas", "Perguntar o que preocupa as pessoas, porque podem ver um problema real", "Castigá-la"], answer: 2, why: "Quem resiste pode apontar riscos reais." },
      { objective: "O1", q: "Antes de anunciar uma mudança, ajuda fazer a lista de:", options: ["Quem culpar se falhar", "Quem é afetado e o que cada grupo pode perder e ganhar", "Só os custos", "Nada"], answer: 1, why: "Esse mapa mostra o que explicar e que apoio dar." },
      { objective: "O2", q: "Que razão para a mudança é mais forte?", options: ["\"Precisamos de modernizar.\"", "\"Porque eu disse.\"", "\"Todos os outros estão a fazer.\"", "\"As inscrições em papel perderam 30 nomes de voluntários no mês passado e duas famílias ficaram sem entregas.\""], answer: 3, why: "Um dado real e uma história real mostram porque importa." },
      { objective: "O2", q: "Porque ser honesto sobre o que vai ser difícil?", options: ["Para assustar as pessoas", "As pessoas confiam num líder que admite os custos", "Para atrasar a mudança", "Nunca é uma boa ideia"], answer: 1, why: "A honestidade cria confiança e deixa-o planear o apoio." },
      { objective: "O2", q: "A razão para a mudança deve explicar:", options: ["O que acontece se não fizermos nada", "Só a opinião do líder", "Quem vai perder o emprego", "Nada sobre o problema"], answer: 0, why: "O custo de não fazer nada mostra porque a mudança é precisa." },
      { objective: "O3", q: "\"As pessoas apoiam aquilo que ajudam a criar\" quer dizer que deve:", options: ["Manter os planos em segredo", "Decidir tudo primeiro e depois perguntar", "Envolvê-las cedo, enquanto o plano ainda pode mudar", "Envolver só os gestores"], answer: 2, why: "Envolver cedo cria apoio verdadeiro." },
      { objective: "O3", q: "Um defensor da mudança é:", options: ["A pessoa que mais resiste", "Um membro respeitado da equipa que ajuda a liderar e a explicar a mudança", "Um troféu", "Um juiz de fora"], answer: 1, why: "Os defensores ajudam os outros a confiar na mudança." },
      { objective: "O3", q: "Pediu ideias e não pôde usar algumas. O que deve fazer?", options: ["Não dizer nada", "Fingir que as usou", "Deixar de pedir ideias", "Dizer o que fez com as opiniões, e porquê"], answer: 3, why: "Dar resposta mantém a confiança mesmo quando as ideias não são usadas." },
      { objective: "O4", q: "As cinco partes de um plano de mudança simples são:", options: ["O quê, porquê, quem, quando, como vai saber", "Quem, culpa, custo, atraso, cancelar", "Planear, esperar, aguardar, ver, desistir", "Orçamento, logótipo, slogan, festa, fotografia"], answer: 0, why: "Estas cinco perguntas servem para a maioria das mudanças." },
      { objective: "O4", q: "Cada passo de um plano de mudança deve ter:", options: ["Dez responsáveis", "Nenhum responsável", "Um responsável encarregado dele", "Um responsável escolhido mais tarde"], answer: 2, why: "Um responsável claro garante que o passo é feito." },
      { objective: "O4", q: "Quando deve acontecer a formação?", options: ["Meses depois da mudança", "Antes da mudança", "Nunca", "Só para os gestores"], answer: 1, why: "As pessoas precisam das habilidades antes de lhes pedirem para usar a nova forma." },
      { objective: "O5", q: "Porque repetir a sua mensagem de formas diferentes?", options: ["Para incomodar as pessoas", "Porque as pessoas ouvem uma mensagem várias vezes antes de a reterem", "Para ocupar tempo", "Porque a primeira mensagem estava errada"], answer: 1, why: "As pessoas ocupadas precisam de ouvir mais de uma vez." },
      { objective: "O5", q: "A mensagem para cada grupo deve incluir:", options: ["Só a data", "Só a razão", "Uma longa história", "O que muda para eles, porquê, quando, a ajuda que recebem e a quem perguntar"], answer: 3, why: "Isto responde às perguntas que as pessoas realmente têm." },
      { objective: "O5", q: "Um ganho rápido é:", options: ["Um sucesso cedo e visível que mostra que a mudança está a funcionar", "Acabar a mudança num dia", "Ganhar uma discussão", "Saltar o plano"], answer: 0, why: "Os ganhos rápidos criam confiança e apoio." },
      { objective: "O5", q: "Depois de um ganho rápido, deve:", options: ["Não dizer nada", "Ficar com todo o mérito", "Partilhá-lo e agradecer às pessoas que o fizeram acontecer", "Parar a mudança"], answer: 2, why: "Partilhar e agradecer espalha o apoio." },
      { objective: "O6", q: "Porque é que o dia do lançamento \"não é a linha de chegada\"?", options: ["Porque as mudanças muitas vezes se apagam quando as pessoas voltam aos velhos hábitos", "Porque há sempre uma festa depois", "Porque os planos nunca começam", "Porque o dia do lançamento é opcional"], answer: 0, why: "Manter a mudança exige trabalho contínuo." },
      { objective: "O6", q: "O que ajuda uma mudança a durar?", options: ["Manter também a forma antiga para sempre", "Pô-la nas listas de verificação e na formação de novos trabalhadores", "Nunca verificar os resultados", "Mudá-la outra vez na próxima semana"], answer: 1, why: "As rotinas tornam a nova forma normal." },
      { objective: "O6", q: "Marcou uma medida para verificar na semana 4. Na semana 4 deve:", options: ["Saltá-la", "Mudar a medida", "Esperar até ao próximo ano", "Verificá-la e agir sobre o que encontrar"], answer: 3, why: "As medidas só ajudam se as vir a tempo." },
      { objective: "O6", q: "Quando a mudança já faz parte de \"como fazemos as coisas aqui\", um bom último passo é:", options: ["Esquecê-la", "Ver o que aprendeu para a próxima mudança", "Desfazê-la", "Culpar quem resistiu"], answer: 1, why: "As lições aprendidas tornam a próxima mudança mais fácil." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Porque importa", objective: "O2", notYet: "A razão é um slogan, como \"precisamos de modernizar\".", meets: "Duas ou três frases sobre o problema, o que vai ficar melhor e o que acontece se nada mudar.", exceeds: "Usa um dado ou uma história real que importa às pessoas afetadas." },
      { name: "Quem é afetado e como é envolvido", objective: "O3", notYet: "Ninguém é envolvido antes de a decisão ser final.", meets: "Diz quem é afetado e como vai ser envolvido cedo.", exceeds: "Diz o que está aberto e o que não está, e como vai dar resposta sobre as opiniões." },
      { name: "Plano e medidas", objective: "O4", notYet: "Falta o quê, porquê, quem, quando ou como vai saber.", meets: "Responde às cinco perguntas, com quando acontece cada passo e como vai saber que está a funcionar.", exceeds: "Cada passo tem um responsável e cada medida tem uma data de verificação." },
      { name: "Mensagens e ganho rápido", objective: "O5", notYet: "Uma só mensagem para todos, ou nenhum ganho rápido.", meets: "Três mensagens para três grupos e um ganho rápido no primeiro mês.", exceeds: "Cada mensagem diz a ajuda que as pessoas vão ter e a quem perguntar." },
      { name: "Manter a mudança", objective: "O6", notYet: "O plano para no lançamento.", meets: "Duas formas de manter a mudança depois do lançamento.", exceeds: "Inclui pôr a nova forma nas listas de verificação, na formação ou no que se espera de cada função." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que lançam a mudança do seu plano em 90 dias (inquérito de seguimento)",
      "Mudanças ainda em uso três meses depois do lançamento",
      "Alunos que fazem outro curso de liderança da Koach Learn"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador para ver as lições",
      "Papel ou um documento para o plano de mudança de uma página",
      "Uma mudança real que o aluno quer liderar",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça a cada aluno para trazer uma mudança real antes de a sessão começar.",
      "Ponha os alunos em pares, um no papel da pessoa que resiste, para praticarem perguntar o que a preocupa.",
      "Peça aos alunos para trocarem a sua razão para a mudança e dizerem se os convenceria.",
      "Lembre aos alunos que os dados e as histórias devem ser seus quando usam IA para melhorar as palavras.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
