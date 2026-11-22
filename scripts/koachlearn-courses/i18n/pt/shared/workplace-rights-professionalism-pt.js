"use strict";

// Koach Learn course (Portuguese translation of shared/workplace-rights-professionalism.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US rules (FLSA, EEOC, OSHA); US agency names, phone numbers and websites are kept as written.

module.exports = {
  id: "workplace-rights-professionalism-pt",
  lang: "pt",
  translationOf: "workplace-rights-professionalism",
  category: "Re-Entry",
  name: "Direitos no Trabalho e Profissionalismo",
  skills: "Chegar a horas e pronto para trabalhar, Comunicar de forma profissional no trabalho, Usar o telefone da maneira certa no trabalho, Verificar o seu salário e o recibo de vencimento, Conhecer os seus direitos de trabalhador nos EUA, Denunciar um problema da maneira certa",
  outcome: "chegar a um novo trabalho pronto e com profissionalismo, comunicar com clareza com um supervisor, comparar o recibo de vencimento com as suas horas e saber onde e como denunciar salários não pagos, discriminação, assédio ou um problema de segurança.",
  about: [
    "Este curso é para qualquer pessoa que começa ou recomeça a trabalhar nos Estados Unidos: um jovem no primeiro emprego, um antigo militar que passa para um trabalho civil, uma pessoa que volta para casa depois da prisão, ou qualquer pessoa que quer sentir-se mais segura no trabalho.",
    "O primeiro capítulo é sobre ser alguém com quem o supervisor pode contar: chegar a horas, vestir-se para o trabalho, falar e escrever com clareza e saber usar o telefone. O segundo capítulo é sobre os seus direitos: salário justo e horas extraordinárias, proteção contra a discriminação e o assédio, um local de trabalho seguro e como ler um recibo de vencimento.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Este curso explica as regras federais dos EUA com palavras simples; não é aconselhamento jurídico. As leis do estado e da cidade podem dar-lhe mais proteção, e cada lição mostra onde verificar."
  ],
  finalTask: "Faça um plano de uma página \"Pronto para Trabalhar\" para um trabalho real ou de prática: o seu plano para chegar 10 minutos mais cedo (caminho, transporte alternativo, alarme), o que vai vestir, uma mensagem curta para enviar se estiver atrasado ou doente, a sua regra do telefone para o turno, uma rotina para verificar o salário (registo de horas e verificação do recibo de vencimento) e o lugar oficial onde denunciaria salários não pagos, discriminação ou assédio, e um perigo de segurança, mais o serviço de trabalho do seu estado.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Qualquer pessoa que começa ou recomeça a trabalhar nos Estados Unidos: jovens no primeiro emprego, antigos militares que passam para trabalhos civis, pessoas que voltam para casa depois da prisão e qualquer pessoa que quer sentir-se mais segura no trabalho.",
    startingPoint: "Estão prontos para trabalhar e sabem usar um telefone, mas muitos não tiveram um emprego fixo nos últimos tempos, não sabem bem o que os supervisores esperam, nunca compararam um recibo de vencimento com as suas horas e não sabem onde denunciar salários não pagos, discriminação, assédio ou problemas de segurança.",
    gap: "Os trabalhadores novos perdem empregos por atrasos, uso do telefone e má comunicação, e podem perder dinheiro ou ser tratados de forma injusta sem conhecer os seus direitos. Os alunos precisam de hábitos que os tornem pessoas de confiança e de saber verificar o seu salário e denunciar problemas no lugar oficial certo.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Regras federais dos EUA com palavras simples; não é aconselhamento jurídico, e as leis do estado e da cidade podem dar mais proteção",
      "Os alunos verificam as regras do seu estado nos sites oficiais (dol.gov, eeoc.gov, osha.gov e o serviço de trabalho do estado)",
      "Aparelhos: um telefone para caminhos, mensagens e sites oficiais",
      "Alguns alunos têm limites de liberdade condicional, de transporte ou de cuidado dos filhos que afetam os horários"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para um trabalho real ou de prática", action: "planear o caminho, um transporte alternativo e a manhã para chegar cerca de 10 minutos mais cedo", standard: "com uma mensagem pronta a enviar se estiver atrasado ou doente" },
    { id: "O2", condition: "Num trabalho novo", action: "vestir-se para o trabalho e escrever mensagens claras e educadas a um supervisor, incluindo assumir um erro", standard: "com cada mensagem curta e respeitosa" },
    { id: "O3", condition: "Para o seu próximo turno", action: "escrever uma regra do telefone que o mantenha seguro e concentrado no trabalho", standard: "sem usar o telefone enquanto conduz ou usa máquinas" },
    { id: "O4", condition: "Com o seu registo de horas e um recibo de vencimento", action: "calcular o seu salário, incluindo as horas extraordinárias, e compará-lo com o recibo de vencimento", standard: "apresentando qualquer diferença aos serviços de pagamento com o seu registo de horas" },
    { id: "O5", condition: "Com um caso de possível discriminação ou assédio", action: "listar os passos para registar e denunciar o caso, dentro da empresa e à EEOC", standard: "pela ordem certa e dentro do prazo" },
    { id: "O6", condition: "Com um perigo de segurança ou uma dúvida sobre as regras do estado", action: "encontrar onde denunciar um problema de segurança e o serviço de trabalho do seu estado", standard: "indicando a OSHA e o site do serviço de trabalho do seu estado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ser profissional no trabalho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Chegar a horas e pronto para trabalhar",
          minutes: 5,
          goal: "Planear a viagem e a manhã para chegar cedo e pronto.",
          text: [
            "Chegar a horas é a primeira coisa que a maioria dos supervisores repara. Em muitos trabalhos, \"a horas\" quer dizer estar no seu posto e pronto a começar quando o turno começa, não estar a entrar pela porta. Tente chegar 10 minutos mais cedo.",
            "Planeie a viagem antes do primeiro dia. Veja os horários do autocarro ou do comboio, ou faça o caminho de carro à mesma hora do dia. Tenha uma alternativa: um segundo autocarro, uma boleia de um amigo ou dinheiro para uma aplicação de transporte. Ponha dois alarmes.",
            "Se for chegar atrasado ou estiver doente, avise o seu supervisor ANTES de o turno começar, da maneira que ele pediu (chamada, SMS ou uma aplicação). Diga a que horas vai chegar ou quando volta. Não avisar e não aparecer (em inglês, \"no call, no show\") pode fazê-lo perder o emprego depressa.",
            "Estar pronto também quer dizer estar descansado e preparado: na noite anterior, deixe prontos a roupa, o documento de identificação, as chaves, o almoço e as ferramentas ou o equipamento de segurança."
          ],
          steps: ["Descubra a hora exata de início e onde se deve apresentar.", "Planeie o caminho e um caminho alternativo.", "Ponha dois alarmes e tente chegar 10 minutos mais cedo.", "Guarde o número do seu supervisor e as regras para avisar faltas.", "Na noite anterior, deixe prontos a roupa, o documento de identificação, o almoço e o equipamento."],
          words: [["Turno", "as horas marcadas em que tem de trabalhar."], ["Avisar falta", "dizer ao seu supervisor, antes do turno, que não pode ir ou que vai chegar atrasado."], ["\"No call, no show\"", "faltar a um turno sem avisar ninguém; muitas vezes é motivo de despedimento."]],
          slides: [
            { title: "A horas quer dizer pronto a começar", bullets: ["No seu posto quando o turno começa", "Tente chegar 10 minutos mais cedo"] },
            { title: "Planeie a viagem", bullets: ["Veja o caminho à mesma hora do dia", "Tenha um transporte ou caminho alternativo", "Ponha dois alarmes"] },
            { title: "Atrasado ou doente?", bullets: ["Avise o supervisor antes do turno", "Da maneira que ele pediu: chamada, SMS ou aplicação", "Nunca falte sem avisar (\"no call, no show\")"] },
            { title: "Na noite anterior", bullets: ["Roupa, documento, chaves e almoço prontos", "Ferramentas e equipamento de segurança arrumados", "Descanse"] }
          ],
          tryIt: "Escolha a morada de um trabalho real ou de prática. Planeie o caminho até lá para começar às 7 da manhã, escolha uma maneira alternativa de chegar e escreva a mensagem exata que enviaria ao seu supervisor se o seu autocarro avariasse.",
          youCanNow: "planear chegar cedo e pronto, e avisar o seu supervisor da maneira certa se for chegar atrasado ou estiver doente.",
          quickCheck: [
            { objective: "O1", q: "O que é um plano alternativo para chegar ao trabalho?", options: ["Uma segunda maneira de chegar se o transporte habitual falhar", "Sair depois de o turno começar", "Avisar que está doente", "Pedir um turno mais tarde"], answer: 0, why: "Um transporte alternativo faz com que chegue a horas quando alguma coisa corre mal." },
            { objective: "O1", q: "O seu autocarro avaria e vai chegar 20 minutos atrasado. O que faria?", options: ["Não dizer nada e chegar atrasado", "Ir para casa e faltar ao turno", "Enviar uma SMS ou ligar logo ao supervisor, da maneira que ele pediu", "Esperar até ao dia seguinte para explicar"], answer: 2, why: "Avisar logo o supervisor mostra que é uma pessoa de confiança." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Roupa e comunicação no trabalho",
          minutes: 5,
          goal: "Vestir-se para o trabalho e falar e escrever a um supervisor com clareza e educação.",
          text: [
            "Vista-se para o trabalho que tem. Pergunte antes do primeiro dia: \"Há uma farda ou regras de vestuário?\" Um armazém pode exigir botas com biqueira de aço; um escritório pode pedir roupa formal simples; uma cozinha exige sapatos fechados e o cabelo preso. Limpo, arrumado e seguro está sempre certo.",
            "Fale com respeito com todos: supervisores, colegas e clientes. Ouça a instrução toda, repita-a se for longa (\"Então quer que eu leve as paletes para a zona 3 antes do almoço?\") e pergunte quando não tiver a certeza. Perguntar é melhor do que adivinhar e fazer mal.",
            "Se não concordar ou se cometer um erro, mantenha a calma e fale em privado. Assuma um erro depressa: diga o que aconteceu, o que fez para o corrigir e o que vai fazer da próxima vez. Isto cria confiança.",
            "As mensagens escritas no trabalho devem ser curtas e claras: um cumprimento, o que precisa e o seu nome. Evite calão, letras todas maiúsculas e emojis com o supervisor até saber o que é normal nesse lugar."
          ],
          steps: ["Pergunte pelas regras de vestuário antes do primeiro dia.", "Ouça a instrução toda.", "Repita as instruções longas para confirmar.", "Pergunte quando não tiver a certeza.", "Assuma os erros depressa e em privado.", "Faça mensagens de trabalho curtas: cumprimento, o que precisa, nome."],
          words: [["Regras de vestuário", "as regras sobre o que vestir num trabalho."], ["Roupa formal simples", "roupa arrumada, menos formal do que um fato, como calças de tecido e uma camisa com colarinho."]],
          slides: [
            { title: "Vista-se para o trabalho", bullets: ["Pergunte pela farda ou pelas regras de vestuário", "Limpo, arrumado e seguro está sempre certo", "Alguns trabalhos exigem botas ou o cabelo preso"] },
            { title: "Ouça e confirme", bullets: ["Ouça a instrução toda", "Repita-a se for longa", "Pergunte em vez de adivinhar"] },
            { title: "Erros e desacordos", bullets: ["Mantenha a calma e fale em privado", "Diga o que aconteceu e como corrigiu", "Diga o que vai fazer da próxima vez"] },
            { title: "Mensagens de trabalho", bullets: ["Cumprimento, o que precisa, o seu nome", "No início, sem calão, maiúsculas ou emojis"] }
          ],
          tryIt: "Escreva uma SMS curta a um supervisor com uma pergunta sobre o turno de amanhã. Depois escreva uma mensagem de duas frases a assumir um pequeno erro, como pôr produtos no corredor errado, e a dizer como o corrigiu.",
          youCanNow: "vestir-se para o trabalho e comunicar com um supervisor com clareza e respeito, incluindo assumir um erro.",
          quickCheck: [
            { objective: "O2", q: "Qual é a melhor maneira de confirmar que percebeu uma instrução longa?", options: ["Acenar e esperar que corra bem", "Repeti-la com as suas palavras", "Perguntar a um colega mais tarde", "Fazer à sua maneira"], answer: 1, why: "Repetir a instrução apanha os erros antes de acontecerem." },
            { objective: "O2", q: "Partiu uma caixa de copos ao arrumar produtos. O que faria?", options: ["Esconder a caixa", "Culpar outro trabalhador", "Esperar para ver se alguém repara", "Dizer ao supervisor o que aconteceu e o que fez"], answer: 3, why: "Assumir um erro e dizer como o corrigiu cria confiança." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar o telefone no trabalho",
          minutes: 4,
          goal: "Seguir uma regra simples do telefone que o mantenha seguro e concentrado no trabalho.",
          text: [
            "Muitas pessoas perdem o emprego por causa do telefone. Conheça as regras do telefone do seu trabalho no primeiro dia. Alguns trabalhos deixam-no ter o telefone no bolso em silêncio; outros pedem para o deixar num cacifo; outros proíbem telefones na zona de trabalho porque são um risco perto de máquinas, veículos ou comida.",
            "Uma regra simples que funciona em quase todo o lado: telefone em silêncio e guardado enquanto trabalha; veja-o só nos intervalos e nas zonas de descanso. Nunca o use enquanto conduz um empilhador, usa uma máquina ou atende um cliente.",
            "Se estiver à espera de uma chamada importante, como uma emergência da família ou uma chamada do seu agente de liberdade condicional, de um médico ou da escola do seu filho, diga ao seu supervisor no início do turno e pergunte como ele quer que faça.",
            "Tenha cuidado com o que publica. Não publique fotografias do local de trabalho, de clientes ou de colegas, nem queixas sobre eles, sem conhecer as regras. Isso pode ir contra as regras da empresa e as regras de privacidade."
          ],
          steps: ["Pergunte pelas regras do telefone no primeiro dia.", "Ponha o telefone em silêncio e guarde-o enquanto trabalha.", "Veja-o nos intervalos, nas zonas de descanso.", "Avise o supervisor antes se tiver de atender uma chamada importante.", "Não publique fotografias do local de trabalho ou de pessoas sem autorização."],
          words: [["Regras do telefone", "as regras do local de trabalho sobre quando e onde pode usar o telefone."], ["Intervalo", "um tempo de descanso marcado durante o turno."]],
          slides: [
            { title: "Conheça as regras do telefone", bullets: ["Pergunte no primeiro dia", "No bolso, num cacifo, ou nunca na zona de trabalho"] },
            { title: "Uma regra que funciona", bullets: ["Em silêncio e guardado enquanto trabalha", "Veja-o só nos intervalos", "Nunca perto de máquinas, veículos ou a atender clientes"] },
            { title: "Espera uma chamada importante?", bullets: ["Avise o supervisor no início", "Pergunte como ele quer que faça"] },
            { title: "Cuidado com o que publica", bullets: ["Nada de fotografias de clientes ou colegas", "Não publique problemas do trabalho sem conhecer as regras"] }
          ],
          tryIt: "Escreva numa frase a sua regra do telefone para o próximo turno. Depois escreva o que diria a um supervisor se estivesse à espera de uma chamada importante da escola do seu filho.",
          youCanNow: "seguir uma regra do telefone que o mantém seguro e concentrado, e tratar de uma chamada importante da maneira certa.",
          quickCheck: [
            { objective: "O3", q: "Qual é uma boa regra pessoal do telefone para a maioria dos trabalhos?", options: ["Telefone em silêncio e guardado enquanto trabalha; vê-lo nos intervalos", "Telefone sempre na mão", "Atender logo todas as chamadas", "Usar auriculares com música enquanto atende clientes"], answer: 0, why: "Em silêncio e guardado durante o trabalho, visto nos intervalos, mantém-no concentrado." },
            { objective: "O3", q: "Está a conduzir um empilhador e o telefone vibra. O que faria?", options: ["Ver depressa", "Atender em alta voz", "Ignorar até ter parado em segurança e estar num intervalo", "Responder por SMS enquanto conduz devagar"], answer: 2, why: "Usar o telefone enquanto conduz ou usa máquinas nunca é seguro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ser profissional no trabalho",
        questions: [
          { objective: "O1", q: "O seu turno começa às 7:00. A que horas deve planear chegar?", options: ["Às 7:00 exatas", "Às 7:10", "Por volta das 6:50, pronto a começar às 7:00", "Quando o autocarro chegar"], answer: 2, why: "Chegar cerca de 10 minutos mais cedo deixa-o pronto no seu posto a horas." },
          { objective: "O1", q: "Acorda doente. O que faz?", options: ["Avisa o supervisor antes do turno, da maneira que ele pediu", "Não vai e não avisa", "Envia uma SMS a um colega e espera que ele passe a mensagem", "Liga depois de o turno acabar"], answer: 0, why: "Avisar o supervisor antes do turno é profissional; faltar sem avisar pode fazê-lo perder o emprego." },
          { objective: "O2", q: "O seu supervisor dá-lhe uma instrução longa. O que é boa ideia?", options: ["Acenar e adivinhar depois", "Pedir a um colega para a fazer", "Ignorá-la", "Repeti-la para confirmar que percebeu"], answer: 3, why: "Repetir a instrução apanha os erros antes de acontecerem." },
          { objective: "O2", q: "Pôs produtos na prateleira errada. O que faz?", options: ["Esconde", "Diz ao supervisor o que aconteceu e como corrigiu", "Culpa um colega", "Despede-se"], answer: 1, why: "Assumir um erro depressa cria confiança." },
          { objective: "O3", q: "Qual é o melhor hábito com o telefone na maioria dos trabalhos?", options: ["Telefone com som alto na mão", "Atender chamadas enquanto conduz um empilhador", "Em silêncio e guardado enquanto trabalha, visto nos intervalos", "Publicar fotografias de clientes"], answer: 2, why: "Isto mantém-no concentrado e seguro e cumpre a maioria das regras do telefone." }
        ]
      }
    },
    {
      name: "Capítulo 2: Os seus direitos no trabalho nos EUA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Salário mínimo, horas extraordinárias e recibo de vencimento",
          minutes: 6,
          goal: "Verificar se o seu salário está certo comparando as suas horas com o recibo de vencimento.",
          text: [
            "A lei federal Fair Labor Standards Act (FLSA, a lei sobre normas justas de trabalho) define um salário mínimo e o pagamento de horas extraordinárias para a maioria dos trabalhadores. A Divisão de Salários e Horários (Wage and Hour Division) do Departamento do Trabalho dos EUA diz que o salário mínimo federal é de $7.25 por hora. Muitos estados e cidades têm um mínimo mais alto. Quando isso acontece, o empregador tem de pagar o mais alto. Veja o do seu estado em dol.gov.",
            "Horas extraordinárias: a não ser que o seu trabalho seja isento, tem de receber pelo menos uma vez e meia o seu valor normal por cada hora acima de 40 numa semana de trabalho. A semana de trabalho é um período fixo de sete dias, e não se pode fazer a média das horas de duas semanas. Trabalhar ao fim de semana ou num feriado não é, por si só, hora extraordinária segundo a lei federal. Alguns estados têm regras extra sobre horas extraordinárias.",
            "O recibo de vencimento mostra as suas horas, o valor por hora, o salário bruto (antes dos descontos), os descontos, como os impostos, e o salário líquido (o que leva para casa). A lei federal obriga os empregadores a guardar registos certos das horas e do salário, mas não obriga a dar recibos de vencimento; muitos estados obrigam. Guarde o seu próprio registo dos dias e das horas que trabalha e compare-o com cada recibo.",
            "Se o seu salário estiver errado, pergunte primeiro com educação aos serviços de pagamento ou ao seu supervisor, com o seu registo de horas. Se não for corrigido, pode contactar a Divisão de Salários e Horários ou o serviço de trabalho do seu estado. A FLSA proíbe que o despeçam ou castiguem por fazer uma queixa sobre o salário, falada ou escrita."
          ],
          steps: ["Anote a hora a que começa e acaba cada dia, e os seus intervalos.", "Quando receber, encontre no recibo as horas, o valor por hora, o salário bruto, os descontos e o salário líquido.", "Verifique se as horas são iguais ao seu registo e se o valor por hora é o que lhe prometeram.", "Verifique as horas extraordinárias: as horas acima de 40 na semana pagas a 1.5 vezes o seu valor (a não ser que seja isento).", "Se algo estiver errado, pergunte aos serviços de pagamento com o seu registo; se não for corrigido, contacte a Divisão de Salários e Horários ou o serviço de trabalho do seu estado."],
          words: [["Salário mínimo", "o valor por hora mais baixo que a lei permite."], ["Horas extraordinárias", "pagamento extra, de pelo menos 1.5 vezes o seu valor, pelas horas acima de 40 numa semana de trabalho, para a maioria dos trabalhadores pagos à hora."], ["Isento", "um trabalho, muitas vezes com salário fixo e de chefia, a que a lei não obriga a pagar horas extraordinárias."], ["Salário bruto", "o seu salário antes dos impostos e dos descontos."], ["Salário líquido", "o que leva para casa depois dos descontos."]],
          slides: [
            { title: "Salário mínimo", bullets: ["Mínimo federal: $7.25 por hora (dol.gov)", "Muitos estados e cidades pagam mais", "O empregador tem de pagar o mais alto"] },
            { title: "Horas extraordinárias", bullets: ["Acima de 40 horas numa semana de trabalho", "Pelo menos 1.5 vezes o seu valor normal", "A não ser que o seu trabalho seja isento"] },
            { title: "Leia o seu recibo de vencimento", bullets: ["Horas e valor por hora", "Salário bruto, descontos, salário líquido", "Compare com o seu próprio registo de horas"] },
            { title: "O salário está errado?", bullets: ["Pergunte primeiro aos serviços de pagamento, com o seu registo", "Depois, a Divisão de Salários e Horários ou o serviço de trabalho do estado", "É ilegal despedi-lo ou castigá-lo por uma queixa sobre o salário"] }
          ],
          sources: [
            { name: "Departamento do Trabalho dos EUA: Salário mínimo", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
            { name: "Departamento do Trabalho dos EUA: Leis do salário mínimo dos estados", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
            { name: "Departamento do Trabalho dos EUA: Horas extraordinárias", url: "https://www.dol.gov/agencies/whd/overtime" },
            { name: "Departamento do Trabalho dos EUA: Perguntas e respostas sobre a FLSA (recibos e registos)", url: "https://www.dol.gov/agencies/whd/flsa/faq" },
            { name: "Departamento do Trabalho dos EUA: Ficha 77A, retaliação segundo a FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/77a-flsa-prohibiting-retaliation" }
          ],
          tryIt: "Prática: ganha $16 por hora e trabalhou 44 horas esta semana (não isento). Calcule o salário: 40 x $16, mais 4 horas x $24. Depois procure o salário mínimo do seu estado na página dos estados em dol.gov e anote-o.",
          youCanNow: "comparar as suas horas e o seu salário com o recibo de vencimento, notar horas extraordinárias em falta e saber onde ir se o salário estiver errado.",
          quickCheck: [
            { objective: "O4", q: "O que é o salário bruto num recibo de vencimento?", options: ["O que leva para casa", "O seu salário antes dos descontos", "Só as horas extraordinárias", "O reembolso de impostos"], answer: 1, why: "O salário bruto é antes dos descontos; o salário líquido é o que leva para casa." },
            { objective: "O4", q: "Ganha $16 por hora e trabalhou 42 horas (não isento). Como calcularia o salário?", options: ["42 x $16", "40 x $24 mais 2 x $16", "42 x $24", "40 x $16 mais 2 x $24"], answer: 3, why: "As horas acima de 40 são pagas a pelo menos 1.5 vezes o valor, ou seja $24 aqui." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Discriminação e assédio, e como os denunciar",
          minutes: 5,
          goal: "Reconhecer a discriminação e o assédio no trabalho e saber os passos para os denunciar.",
          text: [
            "A lei federal, aplicada pela Comissão para a Igualdade de Oportunidades no Emprego dos EUA (EEOC), proíbe tratar pior os trabalhadores ou os candidatos por causa da raça, cor, religião, sexo (incluindo orientação sexual, ser uma pessoa transgénero e gravidez), origem nacional, idade (40 anos ou mais), deficiência ou informação genética.",
            "Assédio é um comportamento indesejado ligado a uma destas características. É ilegal quando aguentá-lo passa a ser uma condição para manter o emprego, ou quando é tão grave ou frequente que torna o local de trabalho hostil ou abusivo. Exemplos: insultos repetidos, toques indesejados ou ameaças.",
            "Como denunciar: anote o que aconteceu, quando, onde, quem estava presente, e guarde as mensagens. Denuncie pelo processo de queixas do seu empregador (um supervisor, um gestor ou os recursos humanos). Também pode apresentar uma queixa formal (charge) à EEOC: pela internet no Portal Público da EEOC (EEOC Public Portal), pessoalmente num escritório da EEOC, ou começando por ligar para 1-800-669-4000. Na maioria dos casos tem de apresentar a queixa no prazo de 180 dias de calendário, ou 300 dias se um serviço do estado ou local aplicar uma lei parecida. A queixa é gratuita e não precisa de advogado.",
            "É ilegal o empregador castigá-lo (retaliar) por denunciar discriminação, apresentar uma queixa ou ajudar numa investigação. O seu estado pode ter o seu próprio serviço de emprego justo e proteções extra."
          ],
          steps: ["Anote o que aconteceu: data, hora, lugar, pessoas, palavras ou ações.", "Guarde SMS, emails e fotografias.", "Denuncie pelo processo do seu empregador: supervisor, gestor ou recursos humanos.", "Se não for resolvido, contacte a EEOC (portal na internet, um escritório ou 1-800-669-4000) ou o serviço do seu estado.", "Aja depressa: o prazo é normalmente de 180 dias, ou 300 em muitos estados."],
          words: [["Discriminação", "tratar alguém pior por causa de uma característica protegida, como a raça, o sexo, a idade ou uma deficiência."], ["Assédio", "comportamento indesejado ligado a uma característica protegida, que é grave ou frequente, ou que tem de aceitar para manter o emprego."], ["Retaliação", "castigar alguém por denunciar um problema ou participar numa investigação."], ["EEOC", "a Comissão para a Igualdade de Oportunidades no Emprego dos EUA (Equal Employment Opportunity Commission), o serviço federal que aplica as leis contra a discriminação no emprego."]],
          slides: [
            { title: "Características protegidas (lei federal)", bullets: ["Raça, cor, religião, origem nacional", "Sexo, incluindo gravidez, orientação sexual, identidade de género", "Idade 40+, deficiência, informação genética"] },
            { title: "O que é assédio", bullets: ["Comportamento indesejado ligado a uma característica protegida", "Grave ou frequente, ou uma condição para o emprego", "Insultos, toques indesejados, ameaças"] },
            { title: "Como denunciar", bullets: ["Anote tudo e guarde as mensagens", "Use o processo de queixas do seu empregador", "EEOC: portal na internet, um escritório ou 1-800-669-4000"] },
            { title: "Prazos e proteção", bullets: ["Normalmente 180 dias, ou 300 em muitos estados", "A queixa é gratuita; não precisa de advogado", "A retaliação é ilegal"] }
          ],
          sources: [
            { name: "EEOC: Como apresentar uma queixa de discriminação no emprego", url: "https://www.eeoc.gov/how-file-charge-employment-discrimination" },
            { name: "EEOC: Assédio", url: "https://www.eeoc.gov/harassment" }
          ],
          tryIt: "Leia este caso: um colega faz piadas todos os dias sobre a religião de um trabalhador novo, e o supervisor ri-se. Escreva as três primeiras coisas que o trabalhador novo deve fazer, por ordem, e onde pode ir se a empresa não fizer nada.",
          youCanNow: "reconhecer a discriminação e o assédio, anotar o que aconteceu e denunciá-lo dentro da empresa ou à EEOC.",
          quickCheck: [
            { objective: "O5", q: "O que é retaliação no trabalho?", options: ["Castigar alguém por denunciar um problema ou usar os seus direitos", "Uma avaliação de desempenho normal", "Um aumento de salário", "Uma mudança de horário que pediu"], answer: 0, why: "Retaliação é um castigo por denunciar ou usar os seus direitos, e é ilegal." },
            { objective: "O5", q: "Um colega faz sempre piadas sobre a sua deficiência. O que faria primeiro?", options: ["Despedir-se logo", "Fazer piadas também", "Ignorar durante um ano", "Anotar o que aconteceu, com as datas, e guardar as mensagens"], answer: 3, why: "Anotar o que aconteceu e guardar as mensagens é o primeiro passo para denunciar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Um local de trabalho seguro e onde ver as regras do seu estado",
          minutes: 5,
          goal: "Explicar o seu direito a um trabalho seguro e encontrar onde denunciar um perigo e o serviço de trabalho do seu estado.",
          text: [
            "A Administração de Segurança e Saúde no Trabalho (OSHA, Occupational Safety and Health Administration) é o serviço federal para a segurança no trabalho. Os empregadores têm de ter um local de trabalho sem perigos graves conhecidos, cumprir as regras de segurança, dar o equipamento de segurança obrigatório e ensiná-lo sobre os perigos de uma maneira que você perceba.",
            "Tem o direito de denunciar um perigo ou um ferimento, de pedir à OSHA que inspecione o seu local de trabalho e de ver os registos de acidentes de trabalho. Pode apresentar uma queixa de segurança à OSHA pela internet, por telefone para 1-800-321-OSHA (6742), por correio ou num escritório da OSHA, e pode pedir que o seu nome não seja dado ao seu empregador.",
            "É ilegal castigá-lo por levantar uma preocupação de segurança ou comunicar um ferimento. Se for castigado, apresente depressa uma queixa de retaliação (de denunciante, \"whistleblower\") à OSHA: segundo a lei federal tem só 30 dias.",
            "As leis do estado podem dar mais: um salário mínimo mais alto, baixa por doença paga, pausas para refeição e descanso, regras sobre recibos de vencimento e mais. Muitos estados têm os seus próprios planos de segurança aprovados pela OSHA. Encontre o serviço de trabalho do seu estado na lista de serviços de trabalho dos estados do Departamento do Trabalho, e veja as páginas do seu estado."
          ],
          steps: ["Comunique primeiro um perigo ao seu supervisor, se for seguro fazê-lo.", "Anote o que viu e quando.", "Se não for corrigido, apresente uma queixa à OSHA pela internet ou pelo 1-800-321-6742.", "Se for castigado por denunciar, apresente uma queixa de denunciante no prazo de 30 dias.", "Procure o serviço de trabalho do seu estado para ver os direitos extra do estado."],
          words: [["OSHA", "a Administração de Segurança e Saúde no Trabalho (Occupational Safety and Health Administration), o serviço federal que cria e aplica as regras de segurança no trabalho."], ["Perigo", "algo no trabalho que o pode magoar, como um chão molhado, barulho forte ou uma máquina sem proteção."], ["Queixa de denunciante", "uma queixa de que foi castigado por denunciar um problema (em inglês, \"whistleblower complaint\")."]],
          slides: [
            { title: "O seu empregador tem de", bullets: ["Manter o local de trabalho sem perigos graves conhecidos", "Dar o equipamento de segurança obrigatório", "Ensiná-lo de uma maneira que você perceba"] },
            { title: "Os seus direitos de segurança", bullets: ["Denunciar perigos e ferimentos", "Pedir uma inspeção à OSHA; pedir que o seu nome fique privado", "OSHA: osha.gov ou 1-800-321-6742"] },
            { title: "Castigado por falar?", bullets: ["A retaliação é ilegal", "Apresente uma queixa de denunciante no prazo de 30 dias"] },
            { title: "O seu estado pode dar mais", bullets: ["Salário mínimo mais alto, baixa por doença, pausas", "Regras sobre recibos e planos de segurança do estado", "Encontre o serviço de trabalho do seu estado em dol.gov"] }
          ],
          sources: [
            { name: "OSHA: Apresentar uma queixa de segurança e saúde", url: "https://www.osha.gov/workers/file-complaint" },
            { name: "OSHA: Direitos dos trabalhadores", url: "https://www.osha.gov/workers" },
            { name: "Programa de Proteção de Denunciantes da OSHA: apresentar uma queixa de retaliação", url: "https://www.whistleblowers.gov/complaint_page.html" },
            { name: "Departamento do Trabalho dos EUA: Serviços de trabalho dos estados", url: "https://www.dol.gov/agencies/whd/state/contacts" }
          ],
          tryIt: "Tarefa final: faça o seu plano de uma página \"Pronto para Trabalhar\". Inclua o seu plano de chegada, a roupa, a mensagem de atraso ou doença, a regra do telefone, a rotina para verificar o salário e onde denunciaria salários não pagos (dol.gov), discriminação ou assédio (eeoc.gov) e um perigo de segurança (osha.gov), mais o site do serviço de trabalho do seu estado.",
          youCanNow: "dizer qual é o seu direito a um local de trabalho seguro, denunciar um perigo da maneira certa e encontrar as regras extra do seu estado.",
          quickCheck: [
            { objective: "O6", q: "Que serviço trata das queixas de segurança no trabalho?", options: ["A EEOC", "A OSHA", "O IRS (serviço de impostos)", "Os correios"], answer: 1, why: "A OSHA trata da segurança no trabalho." },
            { objective: "O6", q: "Quer saber se o seu estado dá baixa por doença paga. O que faria?", options: ["Perguntar a um amigo de outro estado", "Adivinhar", "Ver no serviço de trabalho do seu estado, que está na lista do Departamento do Trabalho", "Perguntar a uma IA e confiar na resposta"], answer: 2, why: "O serviço de trabalho do seu estado tem as regras oficiais do seu estado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Os seus direitos no trabalho nos EUA",
        questions: [
          { objective: "O4", q: "O salário mínimo do seu estado é mais alto do que os $7.25 federais. Qual tem o seu empregador de pagar?", options: ["Os $7.25 federais", "O valor mais alto do estado", "O que ele quiser", "A média dos dois"], answer: 1, why: "Os empregadores têm de cumprir as duas leis, por isso vale o valor mais alto." },
          { objective: "O4", q: "É um trabalhador pago à hora, não isento, e trabalhou 45 horas esta semana. O que deve ver?", options: ["5 horas extraordinárias a pelo menos 1.5 vezes o seu valor", "Nenhuma hora extraordinária porque foi só uma semana", "Horas extraordinárias só se trabalhou ao domingo", "Um dia de folga em vez de pagamento"], answer: 0, why: "As horas acima de 40 numa semana de trabalho são pagas a pelo menos uma vez e meia." },
          { objective: "O5", q: "Que serviço aplica as leis federais contra a discriminação no emprego?", options: ["A OSHA", "O IRS", "O DMV (serviço de viação)", "A EEOC"], answer: 3, why: "A Comissão para a Igualdade de Oportunidades no Emprego dos EUA trata das queixas de discriminação." },
          { objective: "O5", q: "O que deve fazer PRIMEIRO se estiver a ser assediado no trabalho?", options: ["Publicar sobre isso na internet", "Despedir-se sem aviso", "Anotar o que aconteceu e guardar as mensagens", "Esperar um ano"], answer: 2, why: "Um registo escrito ajuda em todos os passos seguintes, dentro ou fora da empresa." },
          { objective: "O6", q: "Comunicou que a proteção de uma máquina estava partida e na semana seguinte tiraram-no do horário. O que pode fazer?", options: ["Nada", "Apresentar uma queixa de denunciante à OSHA, no prazo de 30 dias", "Esperar seis meses e depois queixar-se", "Só publicar sobre isso"], answer: 1, why: "Castigá-lo por uma denúncia de segurança é ilegal, e o prazo federal é curto." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Direitos no Trabalho e Profissionalismo",
    questions: [
      { objective: "O1", q: "Em muitos trabalhos, \"a horas\" quer dizer:", options: ["Entrar pela porta à hora de início", "Estar no seu posto e pronto quando o turno começa", "Até 15 minutos depois da hora de início", "Quando o seu transporte chegar"], answer: 1, why: "Esteja pronto a trabalhar quando o turno começa, por isso planeie chegar mais cedo." },
      { objective: "O1", q: "O que é um \"no call, no show\"?", options: ["Faltar a um turno sem avisar ninguém", "Um dia de folga que pediu", "Uma regra do telefone", "Um feriado pago"], answer: 0, why: "É uma das maneiras mais rápidas de perder o emprego." },
      { objective: "O1", q: "Um bom plano alternativo para chegar ao trabalho é:", options: ["Esperar que corra bem", "Sair mais tarde", "Um segundo autocarro ou um amigo que lhe pode dar boleia", "Avisar falta sempre que o autocarro se atrasa"], answer: 2, why: "Um caminho alternativo faz com que chegue a horas quando alguma coisa corre mal." },
      { objective: "O2", q: "Não sabe o que vestir no primeiro dia. Você:", options: ["Veste o que for confortável", "Copia o que vê na televisão", "Vai de sandálias por segurança", "Pergunta pela farda ou pelas regras de vestuário"], answer: 3, why: "Perguntar evita erros, e alguns trabalhos exigem calçado de segurança." },
      { objective: "O2", q: "Qual é a melhor mensagem de trabalho para um supervisor?", options: ["\"EI ONDE É QUE EU VOU\"", "\"Olá, Sra. Lee, que entrada devo usar amanhã? Obrigado, Sam\"", "Uma fila de emojis", "Nenhuma mensagem; só adivinhar"], answer: 1, why: "Um cumprimento, o que precisa e o seu nome é claro e educado." },
      { objective: "O2", q: "Um colega discorda de si em voz alta à frente dos clientes. Você:", options: ["Mantém a calma e fala com ele em privado mais tarde", "Grita também", "Publica sobre isso", "Abandona o trabalho"], answer: 0, why: "Uma conversa calma e em privado resolve os problemas sem os piorar." },
      { objective: "O3", q: "Quando é que NUNCA pode usar o telefone no trabalho?", options: ["No seu intervalo", "Na sala de descanso", "Antes do turno", "Enquanto conduz um empilhador ou usa uma máquina"], answer: 3, why: "Os telefones perto de veículos e máquinas causam ferimentos graves." },
      { objective: "O3", q: "Espera uma chamada importante da escola do seu filho. Você:", options: ["Fica com o telefone na mão o turno todo", "Avisa o supervisor no início e pergunta como deve fazer", "Sai sem dizer nada", "Ignora"], answer: 1, why: "Avisar o supervisor antes mostra respeito e evita problemas." },
      { objective: "O4", q: "Qual é o salário mínimo federal segundo o Departamento do Trabalho?", options: ["$5.15 por hora", "$10.00 por hora", "$7.25 por hora", "$15.00 por hora"], answer: 2, why: "O mínimo federal é de $7.25; muitos estados e cidades pagam mais." },
      { objective: "O4", q: "As horas extraordinárias federais começam depois de quantas horas numa semana de trabalho?", options: ["40", "35", "45", "50"], answer: 0, why: "Os trabalhadores abrangidos e não isentos recebem horas extraordinárias pelas horas acima de 40 numa semana de trabalho." },
      { objective: "O4", q: "Trabalhou 30 horas numa semana e 50 na seguinte. Segundo a lei federal:", options: ["Faz-se a média, por isso não há horas extraordinárias", "Recebe 10 horas extraordinárias pela segunda semana", "Recebe 20 horas extraordinárias", "As horas extraordinárias só contam nos feriados"], answer: 1, why: "Cada semana de trabalho conta sozinha; não se pode fazer a média das horas de várias semanas." },
      { objective: "O4", q: "Num recibo de vencimento, o \"salário líquido\" é:", options: ["O salário antes dos impostos", "O valor dos impostos", "O seu valor por hora", "O que leva para casa depois dos descontos"], answer: 3, why: "O salário líquido é o que fica depois dos impostos e de outros descontos." },
      { objective: "O4", q: "O seu recibo mostra 32 horas mas o seu registo diz 38. Qual é o melhor primeiro passo?", options: ["Perguntar com educação aos serviços de pagamento e mostrar o seu registo de horas", "Não dizer nada", "Despedir-se", "Tirar coisas da loja para compensar"], answer: 0, why: "A maioria dos erros corrige-se mais depressa perguntando aos serviços de pagamento com o seu registo." },
      { objective: "O5", q: "Qual é uma característica protegida pela lei federal contra a discriminação no emprego?", options: ["A equipa de futebol preferida", "Uma deficiência", "O número do sapato", "O gosto musical"], answer: 1, why: "A deficiência é protegida, tal como a raça, a cor, a religião, o sexo, a origem nacional, a idade 40+ e a informação genética." },
      { objective: "O5", q: "Como pode começar uma queixa à EEOC?", options: ["Só contratando um advogado", "Só por fax", "Pela internet no Portal Público da EEOC, num escritório ou ligando para 1-800-669-4000", "Publicando nas redes sociais"], answer: 2, why: "A queixa é gratuita e pode começar pela internet, pessoalmente ou por telefone." },
      { objective: "O5", q: "Na maioria dos casos, quanto tempo tem para apresentar uma queixa à EEOC?", options: ["7 dias", "Cinco anos", "Não há prazo", "180 dias, ou 300 dias se um serviço do estado ou local aplicar uma lei parecida"], answer: 3, why: "São esses os prazos normais da EEOC; aja depressa." },
      { objective: "O5", q: "O seu chefe corta-lhe as horas depois de denunciar assédio. Isto pode ser:", options: ["Normal", "Retaliação, que é ilegal", "Uma promoção", "Obrigatório por lei"], answer: 1, why: "Castigar alguém por denunciar é retaliação." },
      { objective: "O6", q: "Que serviço trata das queixas de segurança no trabalho?", options: ["A OSHA", "A EEOC", "Os correios", "A FCC (comissão das comunicações)"], answer: 0, why: "A Administração de Segurança e Saúde no Trabalho trata da segurança." },
      { objective: "O6", q: "Quando apresenta uma queixa de segurança à OSHA, pode:", options: ["Só apresentar se o chefe concordar", "Nunca ficar anónimo", "Pedir que o seu nome não seja dado ao seu empregador", "Só apresentar em inglês"], answer: 2, why: "A OSHA deixa os trabalhadores pedir que o seu nome fique privado." },
      { objective: "O6", q: "Onde pode encontrar os direitos extra que o seu estado dá, como baixa por doença paga ou regras sobre recibos?", options: ["Uma publicação nas redes sociais", "O serviço de trabalho do seu estado, que está na lista do Departamento do Trabalho", "O palpite de um colega", "Em lado nenhum; só existem regras federais"], answer: 1, why: "As leis do estado podem dar mais proteção; o serviço de trabalho do estado é o lugar oficial para verificar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      4,
      6,
      9,
      12,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Plano de chegada",
        objective: "O1",
        notYet: "Sem caminho, transporte alternativo ou alarme, ou sem mensagem de atraso ou doença.",
        meets: "Caminho, transporte alternativo e alarme para chegar cerca de 10 minutos mais cedo, mais uma mensagem de atraso ou doença pronta.",
        exceeds: "Os horários foram verificados numa aplicação de mapas e a mensagem diz a quem vai ser enviada."
      },
      {
        name: "Roupa e mensagens",
        objective: "O2",
        notYet: "A roupa não está planeada, ou a mensagem não é clara ou é mal-educada.",
        meets: "A roupa serve para o trabalho, e a mensagem é curta, clara e educada.",
        exceeds: "Inclui também como perguntar pelas regras de vestuário em caso de dúvida."
      },
      {
        name: "Regra do telefone",
        objective: "O3",
        notYet: "Sem regra do telefone, ou a regra deixa usar o telefone enquanto conduz ou usa máquinas.",
        meets: "Uma regra de uma frase que mantém o telefone guardado enquanto trabalha.",
        exceeds: "Planeia também como tratar de uma chamada importante que espera."
      },
      {
        name: "Rotina para verificar o salário",
        objective: "O4",
        notYet: "Sem registo de horas nem verificação do recibo de vencimento.",
        meets: "Mantém um registo de horas e compara-o com cada recibo de vencimento, incluindo as horas extraordinárias.",
        exceeds: "Sabe o que dizer aos serviços de pagamento se os números forem diferentes."
      },
      {
        name: "Onde denunciar",
        objective: "O5",
        notYet: "Falta um dos lugares oficiais, ou estão errados.",
        meets: "Indica dol.gov para salários, eeoc.gov para discriminação ou assédio e osha.gov para segurança.",
        exceeds: "Anota os prazos para apresentar queixa e os passos para registar primeiro um problema."
      },
      {
        name: "Serviço de trabalho do estado",
        objective: "O6",
        notYet: "Não indica o serviço de trabalho do estado.",
        meets: "Indica o site do serviço de trabalho do seu estado.",
        exceeds: "Anota um direito extra que o seu estado dá, tirado do site oficial."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que começam ou mantêm um emprego durante 90 dias (inquérito de seguimento)",
      "Alunos que dizem comparar o recibo de vencimento com as suas horas",
      "Alunos que denunciam um problema de salário, discriminação, assédio ou segurança no lugar certo quando é preciso",
      "Alunos que começam outro curso de carreira da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com uma aplicação de mapas e internet",
      "Um recibo de vencimento de exemplo ou o do próprio aluno (mantido privado)",
      "Papel e caneta ou uma aplicação de notas para o plano \"Pronto para Trabalhar\"",
      "Sites oficiais: dol.gov, eeoc.gov, osha.gov e o serviço de trabalho do estado",
      "Cerca de 60 minutos no total"
    ],
    facilitatorNotes: [
      "Lembre aos alunos que este curso não é aconselhamento jurídico; para um problema real, contactem o serviço oficial ou um serviço de apoio jurídico gratuito.",
      "Use recibos de vencimento de exemplo na prática; nunca peça aos alunos para partilhar os seus próprios dados de salário.",
      "Ajude os alunos a encontrar o salário mínimo e o serviço de trabalho do seu próprio estado nos sites oficiais durante a aula.",
      "Para os alunos em reintegração, tenha em conta as apresentações da liberdade condicional, os limites de transporte e o cuidado dos filhos ao fazer os planos de chegada.",
      "Avalie o plano \"Pronto para Trabalhar\" com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
