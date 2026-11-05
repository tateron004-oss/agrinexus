"use strict";

// Koach Learn course (Portuguese translation of re-entry/reentry-clearing-record.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: California and US names, forms and agencies are kept as written.

module.exports = {
  id: "reentry-clearing-record-pt",
  lang: "pt",
  translationOf: "reentry-clearing-record",
  category: "Re-Entry",
  name: "Limpar o Seu Registo Criminal: Expungement e Alívio do Registo",
  skills: "Obter uma cópia do seu registo, Entender as palavras do alívio do registo, Encontrar ajuda jurídica gratuita, Preparar um processo de alívio do registo, Usar os direitos de contratação justa",
  outcome: "obter uma cópia do seu registo criminal, dizer que tipos de alívio do registo podem servir para os seus casos, encontrar ajuda jurídica gratuita e juntar os papéis de que precisa para pedir o alívio com essa ajuda.",
  about: [
    "Um registo criminal pode segui-lo até às entrevistas de emprego, aos pedidos de casa e à escola. Em muitos estados, incluindo a Califórnia, a lei dá às pessoas formas de limpar o registo ou de limitar quem o pode ver. Muitas pessoas que têm direito nunca pedem, porque ninguém lhes mostrou como.",
    "Este curso mostra como obter uma cópia do seu próprio registo, o que querem dizer palavras como expungement, anulação (dismissal), selagem (sealing) e certificado de reabilitação, a diferença entre registos federais e estaduais, onde encontrar ajuda jurídica gratuita, como preparar os seus papéis e o que a Fair Chance Act da Califórnia diz sobre ofertas de emprego. Os exemplos usam a Califórnia, e cada lição diz onde verificar as regras do seu estado.",
    "Isto não é aconselhamento jurídico. As leis são diferentes em cada estado e mudam. Use este curso para se preparar e depois peça ajuda a um advogado, a um serviço de apoio jurídico (legal aid) ou a um centro de autoajuda do tribunal antes de entregar qualquer coisa.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa para fazer logo. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um plano de ação de uma página para limpar o registo: onde vai obter o seu registo, cada caso que conhece (condado, ano, acusação) e o tipo de alívio que pode servir para ele, a ajuda jurídica gratuita que vai contactar primeiro, os papéis que vai juntar e uma declaração de reabilitação curta e honesta que poderia dar a um empregador depois de uma oferta de emprego.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos com registo criminal, muitos a voltar para casa depois da prisão, cujo registo atrapalha o acesso a trabalho, casa ou escola. Os exemplos usam a Califórnia, com indicações para verificar as regras de outros estados.",
    startingPoint: "Lembram-se de alguns dos seus casos de memória. A maioria nunca viu o seu registo oficial, não conhece as palavras do alívio do registo e não sabe onde há ajuda jurídica gratuita.",
    gap: "Muitas pessoas que têm direito ao alívio do registo nunca pedem porque ninguém lhes mostrou como. Os alunos precisam de obter o registo, dizer que alívio pode servir, encontrar ajuda jurídica gratuita e preparar os papéis, para que um advogado ou uma clínica possa fazer o pedido por eles e eles possam defender os seus direitos na contratação.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca com internet",
      "Tempo: lições de cerca de 5 minutos, que cabem entre o trabalho e as consultas",
      "Não é aconselhamento jurídico: as leis variam por estado e mudam; os alunos pedem ajuda a um advogado, a um serviço de legal aid ou a um centro de autoajuda do tribunal antes de entregar",
      "Privacidade: os detalhes dos casos ficam fora das ferramentas de IA e dos computadores partilhados"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à IA e Confiança Digital\" ajuda quem ainda não sabe encontrar sites oficiais."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o site oficial do seu estado", action: "pedir uma cópia do seu próprio registo criminal e encontrar onde obter os registos federais e dos tribunais", standard: "anotando o nome do formulário, a taxa, a isenção da taxa e o local de impressões digitais mais perto" },
    { id: "O2", condition: "Com as palavras do alívio do registo", action: "explicar a diferença entre expungement, selagem, anulação da condenação (set-aside ou dismissal), certificado de reabilitação e perdão", standard: "com uma frase simples e correta para cada uma" },
    { id: "O3", condition: "Com a sua lista de casos", action: "identificar se cada caso é federal ou estadual e verificar se o alívio automático pode aplicar-se", standard: "com todos os casos marcados e um plano para verificar o seu registo mais recente" },
    { id: "O4", condition: "Usando fontes oficiais e de organizações sem fins lucrativos", action: "encontrar dois lugares gratuitos que ajudam com o alívio do registo e preparar perguntas para a primeira chamada", standard: "com nome, telefone, horário e três perguntas para cada um, e nenhum serviço pago que garanta resultados" },
    { id: "O5", condition: "Com os seus casos e as provas da sua vida de hoje", action: "montar uma pasta de alívio do registo que um advogado ou uma clínica possa usar", standard: "com o condado, o ano e a acusação de cada caso e uma lista das provas que ainda faltam" },
    { id: "O6", condition: "Usando a Fair Chance Act da Califórnia", action: "explicar quando um empregador pode verificar o seu registo e escrever uma declaração de reabilitação curta", standard: "com uma declaração honesta, curta e que diz o que você fez desde então" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conheça o seu registo e as suas opções",
      lessons: [
        {
          objectives: ["O1"],
          title: "Obter uma cópia do seu próprio registo",
          minutes: 5,
          goal: "Pedir uma cópia do seu registo criminal estadual e saber onde encontrar os seus registos federais e dos tribunais.",
          text: [
            "Não se pode corrigir o que não se vê. Antes de pedir qualquer alívio do registo, obtenha uma cópia do seu próprio registo. Ele mostra cada detenção e cada caso, o condado, as datas e como terminou cada caso. Os registos muitas vezes têm erros ou resultados em falta.",
            "Na Califórnia, o Departamento de Justiça (DOJ) tem um serviço chamado Record Review. Se vive na Califórnia, preenche o formulário BCIA 8016RR, marca Record Review como tipo de pedido e leva-o a um local de Live Scan para tirar as impressões digitais. O DOJ cobra uma taxa de processamento de $25 (há isenção da taxa) e o local de Live Scan cobra a sua própria taxa. Se vive fora da Califórnia, envia pelo correio o formulário BCIA 8705 com um cartão de impressões digitais. Veja em oag.ca.gov o formulário e a taxa atuais.",
            "O seu registo pode estar em mais de um lugar. O registo estadual cobre os casos do estado. O FBI (a polícia federal dos EUA) guarda um registo nacional chamado Identity History Summary; veja em fbi.gov como o pedir e qual é a taxa atual. Cada tribunal de condado também guarda os seus próprios processos, que pode pedir na secretaria do tribunal.",
            "Se encontrar um erro no seu registo da Califórnia, o DOJ envia com o registo um formulário chamado BCIA 8706, o Claim of Alleged Inaccuracy or Incompleteness (reclamação por erro ou falta de dados). Você devolve-o pelo correio com provas."
          ],
          steps: ["Escolha o registo de que precisa primeiro: normalmente o registo do seu estado.", "Na Califórnia, preencha o BCIA 8016RR e marque Record Review.", "Tire as impressões digitais num local de Live Scan e pague as taxas, ou pergunte pela isenção da taxa.", "Quando o registo chegar, faça a lista de cada caso: condado, número do processo se aparecer, data, acusação e resultado.", "Marque tudo o que parecer errado ou em falta e guarde o registo numa pasta segura."],
          words: [["Registo criminal", "a lista oficial das suas detenções e casos em tribunal, guardada pelo estado ou pelo FBI."], ["Live Scan", "uma máquina que tira as suas impressões digitais em formato digital e as envia para o estado."], ["Record Review", "o serviço do DOJ da Califórnia que deixa você ver o seu próprio registo estadual."], ["Resultado do caso (disposition)", "como um caso terminou, por exemplo arquivado, condenado ou absolvido."]],
          slides: [
            { title: "Veja primeiro o seu registo", bullets: ["Não se pode corrigir o que não se vê", "Os registos muitas vezes têm erros ou resultados em falta"] },
            { title: "Record Review na Califórnia", bullets: ["Formulário BCIA 8016RR, marque Record Review", "Impressões digitais num local de Live Scan", "Taxa do DOJ de $25, há isenção da taxa; veja em oag.ca.gov"] },
            { title: "Outros lugares onde está o seu registo", bullets: ["Identity History Summary do FBI: veja em fbi.gov", "Processos do tribunal do condado: peça na secretaria"] },
            { title: "Encontrou um erro?", bullets: ["A Califórnia envia o formulário BCIA 8706 com o seu registo", "Devolva-o pelo correio com provas"] }
          ],
          sources: [
            { name: "DOJ da Califórnia: Record Review (pedir o seu próprio registo)", url: "https://oag.ca.gov/fingerprints/record-review" },
            { name: "DOJ da Califórnia: Pedir a isenção da taxa", url: "https://oag.ca.gov/fingerprints/record-review/fee-waiver" },
            { name: "FBI: Verificações do Identity History Summary", url: "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks" }
          ],
          tryIt: "Encontre a página oficial onde o seu estado deixa pedir o seu próprio registo (na Califórnia, Record Review em oag.ca.gov). Anote o nome do formulário, a taxa, se há isenção da taxa e o lugar mais perto para tirar as impressões digitais.",
          youCanNow: "pedir uma cópia do seu registo estadual, dizer onde estão guardados os seus registos do FBI e dos tribunais e encontrar erros para contestar.",
          quickCheck: [
            { objective: "O1", q: "Na Califórnia, o que precisa de fazer para ver o seu próprio registo estadual?", options: ["Ligar para a esquadra da polícia", "Preencher o formulário Record Review do DOJ e tirar as impressões digitais num local de Live Scan", "Pedir a um assistente de IA para o procurar", "Pagar a um site de verificação de antecedentes"], answer: 1, why: "O Record Review do DOJ da Califórnia usa um formulário e impressões digitais de Live Scan." },
            { objective: "O1", q: "Recebe o seu registo e vê um caso que não é seu. O que faria?", options: ["Ignorava-o", "Pedia à IA para o apagar", "Esperava até um empregador perguntar", "Contestava-o com o formulário oficial para erros"], answer: 3, why: "Ter o seu registo permite encontrar erros e contestá-los de forma oficial." }
          ]
        },
        {
          objectives: ["O2"],
          title: "O que querem dizer as palavras do alívio do registo",
          minutes: 5,
          goal: "Explicar a diferença entre expungement, anulação, selagem, set-aside, certificado de reabilitação e perdão.",
          text: [
            "As pessoas dizem expungement para quase qualquer forma de limpar um registo, mas as palavras certas e o que fazem são diferentes em cada estado. Conhecer as palavras ajuda a fazer as perguntas certas.",
            "Expungement normalmente quer dizer que o registo é apagado ou destruído. Selagem (sealing) quer dizer que o registo continua a existir, mas a maioria das pessoas, como muitos empregadores e senhorios, não o pode ver. Set-aside ou dismissal (anulação) quer dizer que o tribunal reabre uma condenação e a anula, por isso na maioria dos casos já não tem de dizer que foi condenado. Os tribunais da Califórnia dizem que o expungement verdadeiro não existe na Califórnia; o que lá se chama expungement é normalmente uma anulação.",
            "Um certificado de reabilitação é uma ordem do tribunal que diz que você tem vivido dentro da lei desde a sua pena. Em alguns estados pode ajudar com licenças ou ser um passo para um perdão. Um perdão é uma desculpa oficial dada por um governador (para crimes estaduais) ou pelo Presidente (para crimes federais).",
            "Nenhuma destas opções limpa sempre o registo para tudo. Alguns empregos do governo, licenças, regras sobre armas e a imigração ainda olham para casos antigos. Um advogado pode dizer-lhe o que cada opção faz por você."
          ],
          words: [["Expungement", "apagar ou destruir um registo; em muitos lugares a palavra é usada de forma solta para qualquer limpeza do registo."], ["Selagem (sealing)", "o registo continua a existir, mas a maior parte do público não o pode ver."], ["Set-aside ou dismissal (anulação)", "um tribunal reabre uma condenação e anula-a."], ["Certificado de reabilitação", "uma ordem do tribunal que diz que você tem vivido dentro da lei desde a sua pena."], ["Perdão", "desculpa oficial dada por um governador ou pelo Presidente."]],
          slides: [
            { title: "O mesmo objetivo, palavras diferentes", bullets: ["Cada estado usa as suas próprias palavras", "Conhecê-las ajuda a fazer as perguntas certas"] },
            { title: "Apagar, esconder ou anular", bullets: ["Expungement: registo apagado", "Selagem: registo escondido da maioria das pessoas", "Set-aside ou dismissal: condenação anulada pelo tribunal"] },
            { title: "Outros tipos de alívio", bullets: ["Certificado de reabilitação: o tribunal diz que você mudou", "Perdão: desculpa oficial de um governador ou do Presidente"] },
            { title: "Limites", bullets: ["Califórnia: o expungement verdadeiro não existe", "Alguns empregos, licenças e a imigração ainda veem casos antigos", "Pergunte a um advogado o que cada opção faz por você"] }
          ],
          sources: [
            { name: "Guia de Autoajuda dos Tribunais da Califórnia: Limpar o seu registo", url: "https://selfhelp.courts.ca.gov/clean-your-record" }
          ],
          tryIt: "Faça uma pequena tabela com cinco linhas: expungement, selagem, set-aside ou dismissal, certificado de reabilitação, perdão. Ao lado de cada uma, escreva uma frase simples sobre o que faz. Depois escreva uma pergunta sobre o seu próprio caso para fazer a um advogado.",
          youCanNow: "explicar com palavras simples os principais tipos de alívio do registo e dizer porque continua a perguntar a um advogado o que cada um faz por você.",
          quickCheck: [
            { objective: "O2", q: "O que faz normalmente a selagem de um registo?", options: ["Guarda o registo mas esconde-o da maioria das pessoas", "Destrói todas as cópias para sempre", "Transforma um crime grave numa multa", "Dá-lhe um perdão"], answer: 0, why: "Um registo selado continua a existir, mas a maioria das pessoas não o pode ver." },
            { objective: "O2", q: "Não tem a certeza de que alívio serve para o seu caso. O que faria?", options: ["Escolhia o que tem o nome mais bonito", "Pedia todos ao mesmo tempo", "Anotava a sua pergunta e perguntava a um advogado ou ao legal aid", "Perguntava a um amigo que teve um caso diferente"], answer: 2, why: "Um advogado ou o legal aid pode dizer que alívio serve para o seu caso." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Federal, estadual e o Clean Slate da Califórnia",
          minutes: 5,
          goal: "Dizer se cada um dos seus casos é federal ou estadual e verificar se o alívio automático da Califórnia já se pode aplicar.",
          text: [
            "Cada caso pertence ao sistema que fez a acusação. Um caso estadual passou por um tribunal de condado e é tratado pelas leis desse estado. Um caso federal passou por um United States District Court (tribunal federal). O alívio estadual não pode limpar uma condenação federal, e o alívio federal não limpa condenações estaduais.",
            "O alívio para condenações federais é muito limitado. O caminho principal é um perdão presidencial. O Office of the Pardon Attorney (gabinete dos perdões) do Departamento de Justiça dos EUA recebe pedidos de perdão de pessoas com condenações federais que já cumpriram a pena.",
            "A Califórnia tem leis chamadas Clean Slate (ficha limpa). Todos os meses o DOJ da Califórnia revê os seus registos, marca as detenções e condenações que têm direito ao alívio e informa os tribunais. Não precisa de pedir nada para este alívio automático, e o DOJ não o avisa quando acontece. Uma lei de 2022, a SB 731, acrescentou muitos mais crimes graves a partir de 2024.",
            "O alívio automático limita quem pode ver um caso, mas não o anula, não o sela nem o apaga. Alguns empregadores que usam verificações por impressões digitais, como a polícia e as escolas, podem ainda vê-lo. Para saber se o recebeu, peça o seu próprio registo. Para uma anulação, uma selagem ou uma acusação reduzida, continua a ter de fazer o pedido ao tribunal."
          ],
          steps: ["Para cada caso do seu registo, escreva o tribunal: tribunal de condado quer dizer estadual, US District Court quer dizer federal.", "Para casos federais, veja a página do Office of the Pardon Attorney.", "Na Califórnia, procure no seu novo registo do DOJ uma nota a dizer que o alívio foi dado.", "Faça a lista dos casos que ainda precisam de um pedido ao tribunal."],
          words: [["Caso federal", "um caso acusado pelo governo dos EUA e julgado num US District Court."], ["Caso estadual", "um caso acusado pela lei do estado e julgado num tribunal de condado."], ["Clean Slate", "leis que dão algum alívio do registo de forma automática, sem pedido ao tribunal."], ["Pedido ao tribunal (petition)", "um pedido por escrito que entrega para pedir a um tribunal que faça alguma coisa."]],
          slides: [
            { title: "Federal ou estadual?", bullets: ["Tribunal de condado = caso estadual", "US District Court = caso federal", "Cada sistema só limpa os seus próprios casos"] },
            { title: "Condenações federais", bullets: ["O alívio é muito limitado", "Caminho principal: perdão presidencial", "Office of the Pardon Attorney, justice.gov/pardon"] },
            { title: "Clean Slate da Califórnia", bullets: ["O DOJ revê os registos todos os meses", "Não precisa de pedido; o DOJ não o avisa", "A SB 731 acrescentou mais crimes graves a partir de 2024"] },
            { title: "O que o alívio automático não faz", bullets: ["Não anula, não sela nem apaga", "Algumas verificações por impressões digitais ainda o veem", "A anulação ou a selagem continuam a precisar de um pedido ao tribunal"] }
          ],
          sources: [
            { name: "DOJ da Califórnia: Alívio automático do registo (Penal Code 851.93 e 1203.425)", url: "https://oag.ca.gov/fingerprints/automatic-record-relief-penal-code-sections-851.93-and-1203.425" },
            { name: "Office of the Pardon Attorney do DOJ dos EUA: Pedir clemência", url: "https://www.justice.gov/pardon/apply-clemency" }
          ],
          tryIt: "Usando o seu registo ou o que se lembra, faça a lista de cada caso e escreva estadual ou federal ao lado. Se vive na Califórnia, anote se o seu registo mais recente do DOJ mostra alívio automático para algum caso, ou planeie pedi-lo para saber.",
          youCanNow: "separar os seus casos em federais e estaduais, explicar o que o alívio automático da Califórnia faz e não faz, e fazer a lista dos casos que ainda precisam de um pedido ao tribunal.",
          quickCheck: [
            { objective: "O3", q: "O seu caso foi julgado num tribunal superior de condado. Que tipo de caso é?", options: ["Um caso federal", "Um caso estadual", "Um caso militar", "Só um caso civil"], answer: 1, why: "Os tribunais superiores de condado julgam casos estaduais." },
            { objective: "O3", q: "Vive na Califórnia e acha que o alívio automático pode aplicar-se a um caso antigo. O que faria?", options: ["Assumia que foi limpo", "Fazia um pedido federal", "Pedia a um empregador para verificar", "Pedia o seu registo mais recente do DOJ e procurava a nota do alívio"], answer: 3, why: "O seu registo mais recente do DOJ mostra se o alívio automático foi aplicado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conheça o seu registo e as suas opções",
        questions: [
          { objective: "O1", q: "Qual é o melhor primeiro passo antes de pedir o alívio do registo?", options: ["Dizer a todos os empregadores que não tem registo", "Obter uma cópia do seu próprio registo", "Pagar a um site para apagar o seu registo", "Esperar que o tribunal lhe ligue"], answer: 1, why: "O seu registo mostra cada caso e o seu resultado, por isso sabe o que corrigir e pode encontrar erros." },
          { objective: "O1", q: "Na Califórnia, como vê o seu próprio registo estadual?", options: ["Pergunta a um amigo no tribunal", "Procura o seu nome nas redes sociais", "Liga para o 911", "Preenche o formulário Record Review do DOJ e tira as impressões digitais num local de Live Scan"], answer: 3, why: "O Record Review do DOJ da Califórnia usa o formulário BCIA 8016RR e impressões digitais de Live Scan." },
          { objective: "O2", q: "Que opção guarda o registo mas esconde-o da maioria das pessoas?", options: ["A selagem", "Uma multa de trânsito", "A pena suspensa (probation)", "Um mandado"], answer: 0, why: "Selagem quer dizer que o registo continua a existir, mas a maior parte do público não o pode ver." },
          { objective: "O3", q: "A sua única condenação é de um US District Court. Qual é o caminho mais provável?", options: ["Uma anulação na Califórnia", "Um programa Clean Slate do condado", "Um perdão presidencial", "Uma mudança no certificado escolar"], answer: 2, why: "Um caso de um US District Court é federal e o alívio estadual não o pode limpar; o caminho principal é um perdão presidencial." },
          { objective: "O3", q: "O que é verdade sobre o alívio automático do registo na Califórnia?", options: ["Apaga o caso por completo", "Tem de fazer um pedido ao tribunal para o ter", "O DOJ liga-lhe quando está feito", "Limita quem pode ver um caso, mas não o anula"], answer: 3, why: "O alívio automático acrescenta uma nota que limita quem vê o caso; o caso não é anulado nem apagado." }
        ]
      }
    },
    {
      name: "Capítulo 2: Peça ajuda, prepare-se e use os seus direitos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar ajuda jurídica gratuita",
          minutes: 5,
          goal: "Encontrar dois lugares gratuitos que o podem ajudar com o alívio do registo e preparar-se para a primeira chamada.",
          text: [
            "As leis do alívio do registo são complicadas, e um erro pode custar meses. A boa notícia: muita ajuda é gratuita. O guia de autoajuda dos tribunais da Califórnia tem um formulário Get started (começar) que faz algumas perguntas e dá instruções para a sua situação, e também uma página de ajuda jurídica.",
            "Lugares que muitas vezes ajudam de graça: centros de autoajuda dos tribunais, serviços de legal aid, gabinetes de defensores públicos (cerca de 19 condados da Califórnia têm programas para limpar registos), clínicas de faculdades de Direito, organizações de reintegração e clínicas de ficha limpa de um só dia. Na Califórnia, o serviço Clear My Record liga as pessoas a ajuda jurídica em alguns condados.",
            "Se não é cidadão dos EUA, fale com um advogado de imigração antes de entregar qualquer coisa. As ações em tribunal podem afetar a sua situação de imigração, e algum alívio não conta para a imigração.",
            "Tenha cuidado com quem promete apagar o seu registo por uma taxa alta, garante um resultado ou pede pagamento antes de dizer o que vai fazer. A ajuda verdadeira explica primeiro as suas opções."
          ],
          steps: ["Vá ao site de autoajuda do tribunal do seu estado (na Califórnia, selfhelp.courts.ca.gov, Clean your record).", "Encontre dois lugares de ajuda gratuitos: um centro de autoajuda, o legal aid, um programa do defensor público ou uma clínica de ficha limpa.", "Anote o número de telefone, o horário e o que pedem para levar.", "Prepare três perguntas antes de ligar.", "Se não é cidadão, contacte primeiro um advogado de imigração."],
          words: [["Legal aid", "ajuda jurídica gratuita para pessoas com rendimentos baixos."], ["Defensor público", "um advogado do governo para quem não pode pagar; muitos também têm programas para limpar registos."], ["Clínica de ficha limpa (clean slate clinic)", "um evento onde advogados voluntários ajudam as pessoas a preencher os papéis do alívio do registo, normalmente de graça."]],
          slides: [
            { title: "Não precisa de fazer isto sozinho", bullets: ["As leis são complicadas; os erros custam tempo", "Muita ajuda é gratuita"] },
            { title: "Lugares gratuitos onde perguntar", bullets: ["Centros de autoajuda dos tribunais e legal aid", "Programas dos defensores públicos para limpar registos", "Clínicas de faculdades de Direito e clínicas de ficha limpa"] },
            { title: "Não é cidadão dos EUA?", bullets: ["Fale primeiro com um advogado de imigração", "Algum alívio não conta para a imigração"] },
            { title: "Sinais de alerta", bullets: ["Taxas altas para apagar o seu registo", "Resultados garantidos", "Pague primeiro, explicamos depois"] }
          ],
          sources: [
            { name: "Guia de Autoajuda dos Tribunais da Califórnia: Limpar o seu registo", url: "https://selfhelp.courts.ca.gov/clean-your-record" },
            { name: "Guia de Autoajuda dos Tribunais da Califórnia: Ajuda jurídica para limpar o seu registo", url: "https://selfhelp.courts.ca.gov/clean-your-record/legal-help" }
          ],
          tryIt: "Encontre perto de você dois lugares de ajuda jurídica gratuita para o alívio do registo. Para cada um, anote o nome, o número de telefone, o horário e o que levar. Depois escreva três perguntas que vai fazer, como: Que casos meus podem ser limpos? Que tipo de alívio serve? Quanto tempo vai demorar?",
          youCanNow: "encontrar ajuda jurídica gratuita para o alívio do registo, preparar-se para a primeira chamada e reconhecer as ofertas pagas que são sinais de alerta.",
          quickCheck: [
            { objective: "O4", q: "Qual é um lugar gratuito onde procurar ajuda com o alívio do registo?", options: ["Um site que garante resultados por uma taxa alta", "Um centro de autoajuda do tribunal", "Um desconhecido nas redes sociais", "Um escritório de fianças"], answer: 1, why: "Os centros de autoajuda dos tribunais dão ajuda gratuita com os formulários do tribunal." },
            { objective: "O4", q: "Alguém promete limpar o seu registo com certeza se pagar $1,000 hoje. O que faria?", options: ["Ia-me embora e contactava ajuda jurídica gratuita", "Pagava metade agora", "Pagava com um cartão-presente", "Dava-lhe os detalhes do meu caso para verificar"], answer: 0, why: "Garantias e taxas altas pagas antes são sinais de alerta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Preparar e entregar o pedido com ajuda",
          minutes: 6,
          goal: "Montar uma pasta de alívio do registo que um advogado ou uma clínica possa usar para fazer o pedido por você.",
          text: [
            "Os advogados e as clínicas podem ajudá-lo muito mais depressa quando chega organizado. Monte uma só pasta, em papel ou digital, com tudo sobre os seus casos.",
            "Ponha lá: uma cópia do seu registo; uma lista de cada caso com o condado, o número do processo, o ano e a acusação; provas de que terminou a pena suspensa (probation), a liberdade condicional (parole) ou os programas; provas de multas, taxas e indemnizações pagas, ou do que ainda deve; e provas da sua vida de hoje, como cartas de trabalho, certificados, cursos, tratamento, voluntariado e cartas de apoio.",
            "Quem o ajuda vai escolher os formulários certos, entregá-los no tribunal certo e dizer-lhe se há uma audiência. Peça que lhe expliquem cada formulário antes de assinar. Guarde cópias de tudo o que entregar e anote todas as datas.",
            "Depois de o tribunal dar o alívio, peça uma cópia da decisão. Alguns meses depois, peça outra vez o seu registo para ter a certeza de que foi atualizado. Se não foi, contacte quem o ajudou ou a secretaria do tribunal."
          ],
          steps: ["Comece uma só pasta para o seu alívio do registo.", "Junte o seu registo e uma lista de cada caso: condado, número do processo, ano, acusação.", "Junte provas de que terminou a pena suspensa, a liberdade condicional e os programas, e das multas pagas ou em dívida.", "Junte provas da sua vida de hoje: trabalho, escola, tratamento, voluntariado, cartas de apoio.", "Leve a pasta a quem o ajuda; guarde cópias de tudo o que entregar e todas as datas.", "Depois de o alívio ser dado, guarde a decisão e verifique outra vez o seu registo mais tarde."],
          words: [["Número do processo", "o número que um tribunal dá a cada caso; ajuda a encontrar o processo depressa."], ["Indemnização (restitution)", "dinheiro que um tribunal manda pagar à vítima de um crime."], ["Audiência", "uma reunião no tribunal em que um juiz ouve e decide."], ["Decisão (order)", "a decisão escrita do juiz."]],
          slides: [
            { title: "Chegue organizado", bullets: ["Uma só pasta, em papel ou digital", "Quem ajuda trabalha mais depressa com os seus papéis prontos"] },
            { title: "O que vai na pasta", bullets: ["O seu registo e uma lista de todos os casos", "Prova de que terminou a pena suspensa, a liberdade condicional e os programas", "Multas e indemnizações: pagas ou ainda em dívida"] },
            { title: "Provas da sua vida de hoje", bullets: ["Cartas de trabalho e recibos de salário", "Certificados, cursos, tratamento", "Voluntariado e cartas de apoio"] },
            { title: "Depois de entregar", bullets: ["Guarde cópias e anote todas as datas", "Peça uma cópia da decisão do juiz", "Verifique outra vez o seu registo alguns meses depois"] }
          ],
          tryIt: "Comece hoje a sua pasta de alívio do registo. Escreva a lista dos casos que conhece (condado, ano, acusação) e uma lista das provas que ainda tem de juntar. Ponha uma estrela ao lado dos dois primeiros papéis que vai obter esta semana.",
          youCanNow: "montar uma pasta de alívio do registo, trabalhar com quem o ajuda para entregar o pedido e verificar depois que o seu registo foi atualizado.",
          quickCheck: [
            { objective: "O5", q: "O que é um número do processo?", options: ["O seu número da Segurança Social", "O seu número de recluso", "O número que um tribunal dá a cada caso", "O seu número de telefone"], answer: 2, why: "Cada caso em tribunal tem o seu próprio número do processo." },
            { objective: "O5", q: "O tribunal deu-lhe o alívio. O que faria mais tarde?", options: ["Nunca mais pensava nisso", "Pedia outra vez o meu registo para ter a certeza de que foi atualizado", "Dizia aos empregadores que não tenho registo sem verificar", "Deitava fora a minha pasta"], answer: 1, why: "Verificar outra vez o seu registo garante que o alívio aparece." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Contratação justa e os seus direitos",
          minutes: 6,
          goal: "Explicar a Fair Chance Act da Califórnia e preparar uma declaração de reabilitação curta para um empregador.",
          text: [
            "A Fair Chance Act da Califórnia aplica-se aos empregadores públicos e aos empregadores privados com cinco ou mais trabalhadores, com algumas exceções, como empregos em que uma lei exige verificação de antecedentes. A maioria dos empregadores abrangidos não pode perguntar pelas suas condenações no formulário de candidatura, fazer uma verificação de antecedentes, nem pôr anúncios a dizer No Felons (sem ex-condenados), antes de lhe oferecer o emprego.",
            "Depois de uma oferta de emprego condicional, podem fazer a verificação, mas nunca podem usar detenções que não levaram a condenação (com exceções limitadas), condenações que foram seladas, anuladas ou apagadas (expunged), casos limpos depois de um programa alternativo (diversion), nem, na maioria dos casos, condenações com mais de sete anos. Não o podem recusar só por ter registo. Têm de olhar para a sua situação e para o emprego.",
            "Se quiserem retirar a oferta, têm de lhe dizer por escrito, dar-lhe uma cópia do relatório com a lista das condenações e dar-lhe pelo menos cinco dias úteis para responder com provas de reabilitação ou mostrar um erro no relatório. Se acha que um empregador violou a lei, pode contactar o California Civil Rights Department (departamento dos direitos civis). Outros estados e cidades têm as suas próprias regras, muitas vezes chamadas ban the box; verifique as suas.",
            "Prepare já uma declaração curta e honesta: o que aconteceu numa frase, o que fez desde então e porque está pronto para este emprego. Junte provas, como certificados, programas terminados, cartas de apoio e uma carta de garantia (bonding letter), se tiver."
          ],
          steps: ["Verifique se o seu estado ou cidade tem uma lei de contratação justa ou de ban the box.", "Escreva uma frase sobre o que aconteceu, sem desculpas.", "Escreva duas ou três frases sobre o que fez desde então.", "Termine com porque está pronto para este emprego.", "Junte provas e guarde-as com a sua declaração."],
          words: [["Fair Chance Act", "a lei da Califórnia que limita quando e como os empregadores podem ver as condenações."], ["Oferta de emprego condicional", "uma oferta de emprego que depende de alguma coisa, como uma verificação de antecedentes."], ["Ban the box", "leis que tiram a pergunta sobre o registo criminal dos formulários de candidatura."], ["Provas de reabilitação", "provas de como a sua vida mudou, como programas terminados e cartas de apoio."]],
          slides: [
            { title: "Antes de uma oferta de emprego (Califórnia)", bullets: ["Aplica-se a empregadores com 5 ou mais trabalhadores", "Nenhuma pergunta sobre condenações na candidatura", "Nenhuma verificação de antecedentes antes da oferta"] },
            { title: "Depois de uma oferta condicional", bullets: ["Detenções sem condenação: proibidas (exceções limitadas)", "Casos selados, anulados ou apagados: proibidos", "A maioria das condenações com mais de 7 anos: proibidas"] },
            { title: "Se quiserem retirar a oferta", bullets: ["Aviso por escrito com o relatório e a lista das condenações", "Pelo menos 5 dias úteis para você responder", "Dúvidas: California Civil Rights Department"] },
            { title: "A sua declaração de reabilitação", bullets: ["Uma frase: o que aconteceu", "Duas ou três: o que fez desde então", "Final: porque está pronto para este emprego"] }
          ],
          sources: [
            { name: "California Civil Rights Department: Fair Chance Act", url: "https://calcivilrights.ca.gov/fair-chance-act/" },
            { name: "California Civil Rights Department: Ficha informativa sobre antecedentes criminais e emprego (junho de 2025)", url: "https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2025/07/Fair-Chance-Act-Factsheet_English.pdf" }
          ],
          tryIt: "Tarefa final: faça o seu plano de ação de uma página para limpar o registo. Inclua onde vai obter o seu registo, cada caso e o alívio que pode servir para ele, a ajuda jurídica gratuita que vai contactar primeiro, os papéis que vai juntar e a sua declaração de reabilitação curta para os empregadores.",
          youCanNow: "explicar os seus direitos de contratação justa na Califórnia, descobrir as regras do seu estado e responder a um empregador sobre o seu registo com uma declaração curta e honesta e provas.",
          quickCheck: [
            { objective: "O6", q: "Pela Fair Chance Act da Califórnia, quando pode a maioria dos empregadores abrangidos fazer uma verificação de antecedentes?", options: ["Antes da entrevista", "No formulário de candidatura", "Nunca", "Depois de uma oferta de emprego condicional"], answer: 3, why: "Os empregadores abrangidos esperam até depois de uma oferta condicional para verificar o seu registo." },
            { objective: "O6", q: "Um empregador pergunta pelo seu passado depois de lhe fazer uma oferta. O que faria?", options: ["Dava uma declaração curta e honesta sobre o que fiz desde então", "Contava uma história longa sobre o caso", "Recusava dizer qualquer coisa e ia-me embora", "Dizia que não tenho registo"], answer: 0, why: "Uma declaração de reabilitação curta e honesta mostra que está pronto para o emprego." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Peça ajuda, prepare-se e use os seus direitos",
        questions: [
          { objective: "O4", q: "Qual é um sinal de alerta quando alguém se oferece para limpar o seu registo?", options: ["Explica primeiro as suas opções", "Trabalha num centro de autoajuda do tribunal", "Garante resultados e quer uma taxa alta paga antes", "Pede-lhe para levar o seu registo"], answer: 2, why: "Garantias e taxas altas pagas antes são sinais de burla; a ajuda verdadeira explica primeiro as opções." },
          { objective: "O4", q: "Não é cidadão dos EUA e quer o alívio do registo. O que deve fazer primeiro?", options: ["Falar com um advogado de imigração", "Entregar os formulários sozinho já", "Não pedir ajuda jurídica", "Pedir a um amigo para entregar por você"], answer: 0, why: "As ações em tribunal podem afetar a sua situação de imigração, por isso um advogado de imigração deve aconselhá-lo primeiro." },
          { objective: "O5", q: "O que deve ir na sua pasta de alívio do registo?", options: ["A palavra-passe do seu banco", "Prova de que terminou a pena suspensa", "O acesso às suas redes sociais", "Uma folha em branco"], answer: 1, why: "A prova de que terminou a pena suspensa ajuda a mostrar que tem direito e que fez o que o tribunal pediu." },
          { objective: "O6", q: "Pela Fair Chance Act da Califórnia, quando pode a maioria dos empregadores abrangidos fazer uma verificação de antecedentes?", options: ["Antes de se candidatar", "Na primeira chamada", "No anúncio de emprego", "Depois de uma oferta de emprego condicional"], answer: 3, why: "A maioria dos empregadores abrangidos tem de esperar até depois de uma oferta de emprego condicional." },
          { objective: "O6", q: "Um empregador quer retirar a sua oferta por causa do seu registo. Quanto tempo tem para responder na Califórnia?", options: ["Nenhum tempo", "Uma hora", "Pelo menos cinco dias úteis", "Um ano"], answer: 2, why: "O empregador tem de dar pelo menos cinco dias úteis para responder com provas ou mostrar um erro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Limpar o Seu Registo Criminal: Expungement e Alívio do Registo",
    questions: [
      { objective: "O1", q: "Porque obter primeiro uma cópia do seu próprio registo?", options: ["Para o publicar na internet", "Para ver cada caso e encontrar erros", "Porque os empregadores exigem que o mostre", "Não serve para nada"], answer: 1, why: "O seu registo mostra o que precisa de alívio e pode ter erros para corrigir." },
      { objective: "O1", q: "Na Califórnia, o lugar onde tira as impressões digitais para o Record Review é:", options: ["Um local de Live Scan", "Um banco", "Uma caixa postal", "Um stand de carros"], answer: 0, why: "O Record Review usa impressões digitais de Live Scan tiradas em locais de Live Scan." },
      { objective: "O1", q: "Encontra um erro no seu registo do DOJ da Califórnia. Que formulário serve para o contestar?", options: ["Um formulário de candidatura a emprego", "Uma FAFSA", "O BCIA 8706, o Claim of Alleged Inaccuracy or Incompleteness", "Um formulário da carta de condução"], answer: 2, why: "O DOJ envia o BCIA 8706 com o seu registo para que possa contestar os erros." },
      { objective: "O1", q: "Onde pode pedir o seu registo nacional do FBI?", options: ["Na biblioteca do seu condado", "Numa rede social", "Ao seu senhorio", "Ao FBI, através de fbi.gov"], answer: 3, why: "O FBI guarda o Identity History Summary nacional; fbi.gov explica como o pedir." },
      { objective: "O2", q: "O que quer dizer normalmente a selagem de um registo?", options: ["O registo continua a existir mas a maioria das pessoas não o pode ver", "Volta ao tribunal para um novo julgamento", "Paga outra vez uma multa", "O caso fica mais longo"], answer: 0, why: "Um registo selado existe, mas está escondido da maior parte do público." },
      { objective: "O2", q: "Um set-aside ou dismissal (anulação) quer dizer:", options: ["É detido outra vez", "O tribunal reabre uma condenação e anula-a", "As suas impressões digitais são apagadas", "Tem de se mudar para outro estado"], answer: 1, why: "Um set-aside ou dismissal é um tribunal a anular uma condenação antiga." },
      { objective: "O2", q: "O que é um certificado de reabilitação?", options: ["Um diploma do ensino secundário", "Uma licença de estacionamento", "Uma ordem do tribunal que diz que você tem vivido dentro da lei desde a sua pena", "Um contrato de trabalho"], answer: 2, why: "É uma declaração oficial do tribunal de que você foi reabilitado." },
      { objective: "O2", q: "O que é verdade sobre a palavra expungement na Califórnia?", options: ["Apaga sempre todos os registos", "Só o FBI a usa", "É um programa federal", "Os tribunais dizem que lá não existe o expungement verdadeiro"], answer: 3, why: "Os tribunais da Califórnia dizem que o expungement verdadeiro não existe; o alívio habitual é uma anulação." },
      { objective: "O3", q: "O seu caso foi julgado num tribunal superior de condado. É um:", options: ["Caso estadual", "Caso federal", "Caso militar", "Caso tribal"], answer: 0, why: "Os tribunais de condado julgam casos estaduais." },
      { objective: "O3", q: "Uma anulação estadual pode limpar uma condenação federal?", options: ["Sim, sempre", "Sim, se pagar mais", "Não, cada sistema só limpa os seus próprios casos", "Só aos fins de semana"], answer: 2, why: "O alívio estadual não pode limpar uma condenação federal." },
      { objective: "O3", q: "Como recebe o alívio automático Clean Slate da Califórnia?", options: ["Tem de fazer um pedido ao tribunal", "O DOJ aplica-o aos casos que têm direito, sem pedido", "Liga para o 911", "Pede ao seu empregador"], answer: 1, why: "O DOJ revê os registos todos os meses e dá o alívio automaticamente a quem tem direito." },
      { objective: "O3", q: "Como pode saber se recebeu o alívio automático na Califórnia?", options: ["Espera por uma carta do DOJ", "Pergunta a um vizinho", "Procura nas notícias", "Pede o seu próprio registo do DOJ e procura a nota do alívio"], answer: 3, why: "O DOJ não avisa as pessoas, por isso você verifica o seu próprio registo." },
      { objective: "O4", q: "Qual é um lugar gratuito onde procurar ajuda com o alívio do registo?", options: ["Um centro de autoajuda do tribunal", "Um site que garante resultados por uma taxa alta", "Um desconhecido nas redes sociais", "Uma casa de penhores"], answer: 0, why: "Os centros de autoajuda dos tribunais, o legal aid e os programas dos defensores públicos muitas vezes ajudam de graça." },
      { objective: "O4", q: "Antes de ligar a quem dá ajuda jurídica, um passo inteligente é:", options: ["Deitar fora os seus papéis", "Escrever três perguntas e juntar o seu registo", "Adivinhar os números dos seus processos", "Assinar formulários em branco"], answer: 1, why: "Estar preparado ajuda quem o ajuda a trabalhar mais depressa e a responder às suas perguntas reais." },
      { objective: "O5", q: "O que é um número do processo?", options: ["O seu número de telefone", "Uma conta bancária", "O número que um tribunal dá a cada caso", "O número dos seus sapatos"], answer: 2, why: "Os números do processo ajudam quem o ajuda ou a secretaria a encontrar o processo certo." },
      { objective: "O5", q: "Depois de o tribunal dar o alívio, o que deve fazer mais tarde?", options: ["Nada, nunca mais", "Deitar fora a decisão", "Não dizer a ninguém", "Pedir outra vez o seu registo para ter a certeza de que foi atualizado"], answer: 3, why: "Os registos nem sempre são atualizados, por isso você verifica e corrige qualquer problema." },
      { objective: "O5", q: "Qual é uma boa prova da sua vida de hoje?", options: ["Certificados de cursos e cartas de apoio", "Um cartão antigo da cadeia", "Um cheque em branco", "A sua lista de palavras-passe"], answer: 0, why: "Os certificados e as cartas de apoio são provas de reabilitação." },
      { objective: "O6", q: "A que empregadores se aplica a Fair Chance Act da Califórnia?", options: ["Só ao governo do estado", "Aos empregadores públicos e aos privados com cinco ou mais trabalhadores", "Só a empregadores com 500 ou mais trabalhadores", "Só a restaurantes"], answer: 1, why: "A lei aplica-se aos empregadores públicos e aos privados com cinco ou mais trabalhadores, com algumas exceções." },
      { objective: "O6", q: "Depois de uma oferta condicional, o que um empregador da Califórnia NUNCA pode usar?", options: ["O seu teste de competências", "As suas referências de trabalho", "Uma condenação que foi anulada", "A sua data de início"], answer: 2, why: "As condenações seladas, anuladas ou apagadas são proibidas." },
      { objective: "O6", q: "Uma boa declaração de reabilitação para um empregador:", options: ["Culpa todos os outros", "Tem três páginas", "Diz numa frase o que aconteceu, o que fez desde então e porque está pronto", "Mente sobre o registo"], answer: 2, why: "Curta, honesta e focada na mudança e em estar pronto é o que funciona melhor." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 1, 4, 7, 8, 10, 12, 14, 17, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Obter o registo", objective: "O1", notYet: "Não há plano, ou planeia usar um site privado de verificação de antecedentes.", meets: "Diz o lugar oficial onde pedir o registo e o local das impressões digitais.", exceeds: "Também anota a taxa, a isenção da taxa e onde obter um registo federal, se for preciso." },
      { name: "Casos e alívio possível", objective: "O3", notYet: "Faltam casos, ou nenhum está marcado como estadual ou federal.", meets: "Cada caso conhecido tem condado, ano, acusação, estadual ou federal, e um tipo de alívio possível.", exceeds: "Anota que casos verificar para o alívio automático e uma pergunta para um advogado." },
      { name: "Ajuda jurídica gratuita", objective: "O4", notYet: "Nenhum lugar de ajuda indicado, ou um serviço pago que garante resultados.", meets: "Um lugar de ajuda jurídica gratuita para contactar primeiro, com telefone e horário.", exceeds: "Também tem escrito um segundo lugar de ajuda e três perguntas para fazer." },
      { name: "Papéis para juntar", objective: "O5", notYet: "Não há lista de papéis.", meets: "Uma lista de registos e de provas da vida de hoje para juntar.", exceeds: "Os dois primeiros papéis para obter esta semana estão marcados com uma estrela." },
      { name: "Declaração de reabilitação", objective: "O6", notYet: "Falta, é longa demais ou não é honesta.", meets: "Uma declaração curta e honesta: o que aconteceu numa frase, o que fez desde então e porque está pronto.", exceeds: "Treinada em voz alta e menciona provas como certificados ou cartas de apoio." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que pedem uma cópia do seu próprio registo em 30 dias (inquérito de seguimento)",
      "Alunos que contactam ajuda jurídica gratuita ou pedem o alívio do registo em 90 dias",
      "Alunos que dizem ter recebido uma oferta de emprego ou de casa depois de usar a sua declaração de reabilitação"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou um computador com internet",
      "Papel e caneta, ou uma pasta, para o plano de ação e os papéis do alívio do registo",
      "Os contactos de um serviço local de legal aid ou de um centro de autoajuda do tribunal",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Este curso não é aconselhamento jurídico; trabalhe com um serviço de legal aid ou uma clínica e, se possível, convide-os para uma sessão.",
      "Os alunos de fora da Califórnia devem procurar as páginas oficiais do seu próprio estado; tenha esses links prontos.",
      "Os alunos não devem partilhar detalhes dos casos em voz alta no grupo nem escrevê-los na IA; deixe-os trabalhar nas listas de casos em privado.",
      "Diga aos alunos que não são cidadãos dos EUA para falarem com um advogado de imigração antes de pedirem qualquer alívio do registo.",
      "Avalie o plano de ação com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
