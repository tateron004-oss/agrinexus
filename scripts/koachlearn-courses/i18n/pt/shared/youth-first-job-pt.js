"use strict";

// Koach Learn course (Portuguese translation of shared/youth-first-job.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US jobs and US rules (Department of Labor, IRS, USCIS, OSHA, FTC); many readers are immigrants in the US.

const SRC = {
  youthRules: { name: "US Department of Labor: YouthRules!", url: "https://www.dol.gov/agencies/whd/youthrules" },
  fs43: { name: "US Department of Labor: Fact Sheet 43, child labor rules for non-farm jobs", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
  childLabor: { name: "US Department of Labor: Child labor", url: "https://www.dol.gov/agencies/whd/child-labor" },
  stateChildLabor: { name: "US Department of Labor: State child labor laws", url: "https://www.dol.gov/agencies/whd/state/child-labor" },
  minWage: { name: "US Department of Labor: Minimum wage", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
  stateMinWage: { name: "US Department of Labor: State minimum wage laws", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
  i9: { name: "USCIS: Form I-9, Employment Eligibility Verification", url: "https://www.uscis.gov/i-9" },
  w4: { name: "IRS: About Form W-4", url: "https://www.irs.gov/forms-pubs/about-form-w-4" },
  irs751: { name: "IRS: Topic 751, Social Security and Medicare withholding rates", url: "https://www.irs.gov/taxtopics/tc751" },
  oshaYoung: { name: "OSHA: Young workers", url: "https://www.osha.gov/young-workers" },
  ftcJobScams: { name: "FTC: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" }
};

module.exports = {
  id: "youth-first-job-pt",
  lang: "pt",
  translationOf: "youth-first-job",
  category: "Workforce Development",
  name: "O Seu Primeiro Emprego: Autorizações de Trabalho, Salário e o Que o Chefe Espera",
  skills: "Verificar as regras de trabalho para jovens, Preparar os documentos de trabalho, Ler um recibo de vencimento, Registar as suas horas, Responder ao que o chefe espera, Falar sobre segurança",
  outcome: "começar o seu primeiro emprego bem preparado: verificar se o trabalho e o horário são legais para a sua idade, juntar os seus documentos de trabalho, ler e verificar o seu recibo de vencimento, agir como o chefe espera e falar se alguma coisa for perigosa ou injusta.",
  about: [
    "Este curso é para jovens que se preparam para o primeiro emprego, por exemplo numa loja, num restaurante, num campo de férias, num cinema ou num escritório. Ajuda também pais, mentores e programas de emprego para jovens.",
    "Você vai verificar as regras para a sua idade, preparar os seus documentos, ler um recibo de vencimento e compará-lo com as suas horas, aprender o que o chefe espera nas primeiras semanas e conhecer os seus direitos e o que fazer se um trabalho for perigoso.",
    "O curso é sobre empregos nos Estados Unidos (EUA) e as regras dos EUA. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" em papel ou no telefone. No fim, você faz a sua própria Folha de Arranque do Primeiro Emprego. Este curso ensina as regras; não substitui o serviço de trabalho do seu estado. Verifique sempre a página do seu próprio estado."
  ],
  finalTask: "Faça uma Folha de Arranque do Primeiro Emprego de uma página para um emprego real ou planeado: (1) a sua idade, o trabalho e as horas que pode trabalhar segundo as regras federais e do seu estado, com a página oficial que verificou; (2) uma lista dos documentos de que precisa (autorização de trabalho se o seu estado a exigir, documentos de identificação para o Formulário I-9, Formulário W-4) e onde obter cada um; (3) uma prática de verificação do recibo de vencimento: a partir de um recibo inventado, escreva o salário bruto, cada desconto e o salário líquido, e confirme as contas; (4) três hábitos que vai mostrar ao seu chefe nas primeiras duas semanas; (5) o seu plano se alguma coisa for perigosa: a quem conta primeiro e o número de telefone oficial para onde ligar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adolescentes (de cerca de 14 a 19 anos) e jovens adultos à procura do primeiro emprego, incluindo estudantes em programas de emprego de verão para jovens, jovens em famílias de acolhimento e jovens em programas de formação profissional. Alguns são os primeiros da família a trabalhar num local de trabalho nos EUA.",
    startingPoint: "Sabem usar um telefone e preencher formulários simples. A maioria nunca viu um recibo de vencimento, um Formulário W-4 ou uma autorização de trabalho, e não conhece as regras sobre o trabalho de menores nem os seus direitos no trabalho.",
    gap: "Muitas vezes, os jovens trabalhadores recebem horários ou tarefas que a lei não permite para a sua idade, não sabem bem de que documentos precisam, não conseguem ver se o salário está certo e têm medo de falar sobre segurança. Conhecer as regras e os hábitos que o chefe espera ajuda-os a ser contratados, a manter o emprego e a ficar em segurança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano)",
      "Aparelhos: um telefone ou um computador da escola ou da biblioteca; papel e caneta servem para todas as tarefas",
      "Tempo: lições de 4 a 6 minutos",
      "As regras mudam de estado para estado; a lei federal define um mínimo e aplica-se a regra mais rigorosa, por isso cada lição indica a página oficial",
      "Privacidade: não se partilham na aula números da Segurança Social verdadeiros, dados bancários nem recibos de vencimento reais; a prática usa números inventados"
    ],
    prerequisites: "Nenhum. Quem quiser ajuda com o currículo e as entrevistas pode fazer também o curso \"Currículos, LinkedIn e Entrevistas\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a sua idade e uma oferta de emprego com horário", action: "verificar se as tarefas e as horas do emprego são permitidas para a sua idade segundo as regras federais e do estado", standard: "indicando a página oficial que usou" },
    { id: "O2", condition: "Para um emprego no seu estado", action: "fazer a lista dos documentos de que precisa para começar a trabalhar e onde obter cada um", standard: "incluindo uma autorização de trabalho se o seu estado a exigir, a identificação para o Formulário I-9 e o Formulário W-4" },
    { id: "O3", condition: "Com um recibo de vencimento e o seu próprio registo de horas", action: "encontrar o salário bruto, cada desconto e o salário líquido, e compará-los com as suas horas", standard: "com as contas certas ao cêntimo" },
    { id: "O4", condition: "Numa situação de trabalho nas primeiras semanas", action: "escolher e descrever a ação profissional que o chefe espera", standard: "acertando pelo menos 4 de 5 situações" },
    { id: "O5", condition: "Numa situação perigosa ou injusta no trabalho", action: "descrever os passos para falar e denunciar o problema", standard: "indicando a quem conta primeiro e o serviço oficial para onde ligar se não for resolvido" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar-se para trabalhar",
      lessons: [
        {
          title: "Que trabalhos e horários são legais na sua idade",
          objectives: ["O1"],
          minutes: 6,
          goal: "Verificar se as tarefas e as horas de um emprego são permitidas para a sua idade.",
          text: [
            "Nos EUA, a lei federal sobre o trabalho de menores é a Fair Labor Standards Act (FLSA, Lei das Normas Justas de Trabalho). Os estados também têm as suas próprias leis sobre o trabalho de menores. Quando as duas são diferentes, aplica-se a regra mais rigorosa.",
            "Segundo as regras federais para a maioria dos trabalhos fora da agricultura: abaixo dos 14 anos, em geral, não pode trabalhar (com algumas exceções na página oficial). Aos 14 e 15 anos pode trabalhar fora do horário escolar, mas no máximo 3 horas num dia de aulas (sexta-feira também), 18 horas numa semana de aulas, 8 horas num dia sem aulas e 40 horas numa semana sem aulas, e só entre as 7 da manhã e as 7 da noite. De 1 de junho até ao Labor Day (Dia do Trabalhador nos EUA, no início de setembro), o limite da noite passa para as 9 da noite.",
            "Aos 16 e 17 anos, a lei federal não limita as suas horas, mas não pode fazer trabalhos que o Department of Labor (Departamento do Trabalho) chama perigosos. Exemplos: conduzir na via pública como parte do trabalho (quem tem 17 anos tem uma exceção limitada), manobrar um empilhador ou outro equipamento de elevação a motor e a maioria das máquinas de carpintaria a motor. O seu estado pode acrescentar mais limites.",
            "Se tem menos de 18 anos e um horário ou uma tarefa parece ir contra estas regras, você não está em falta: as regras existem para o proteger, e quem tem de as cumprir é o empregador."
          ],
          steps: ["Escreva a sua idade e as tarefas e horas do emprego.", "Leia as regras federais na página YouthRules ou na Fact Sheet 43 do Department of Labor.", "Abra a página do seu estado sobre o trabalho de menores (o Department of Labor tem a lista de todos os estados).", "Use a regra mais rigorosa. Faça um círculo à volta de qualquer hora ou tarefa que não seja permitida."],
          words: [["FLSA", "a Fair Labor Standards Act, a lei federal sobre o salário mínimo, as horas extraordinárias e o trabalho de menores."], ["Lei do trabalho de menores", "regras sobre que trabalhos e horários são permitidos para trabalhadores com menos de 18 anos."], ["Trabalho perigoso", "uma tarefa que o Department of Labor considera perigosa demais para trabalhadores com menos de 18 anos, como conduzir ou manobrar um empilhador."], ["Semana de aulas", "uma semana em que há aulas pelo menos num dia."]],
          slides: [
            { title: "Dois conjuntos de regras", bullets: ["A lei federal (a FLSA) e a lei do seu estado", "Quando são diferentes, aplica-se a regra mais rigorosa"] },
            { title: "14 e 15 anos (federal)", bullets: ["3 horas num dia de aulas, 18 horas numa semana de aulas", "8 horas num dia sem aulas, 40 numa semana sem aulas", "Das 7h às 19h; até às 21h de 1 de junho ao Labor Day"] },
            { title: "16 e 17 anos (federal)", bullets: ["Sem limite federal de horas", "Sem trabalhos perigosos: conduzir, empilhadores, muitas máquinas a motor", "O seu estado pode acrescentar limites"] },
            { title: "Como verificar", bullets: ["Escreva a sua idade, as tarefas e as horas", "Leia a YouthRules e a página do seu estado", "Faça um círculo no que não é permitido"] }
          ],
          sources: [SRC.youthRules, SRC.fs43, SRC.stateChildLabor],
          tryIt: "Oferecem a um jovem de 15 anos um emprego num supermercado à terça e à quinta, das 4 às 8 da noite, em outubro, e ao sábado, das 9 da manhã às 3 da tarde. Em papel, compare cada turno com as regras federais. Depois abra a página do seu estado sobre o trabalho de menores e escreva uma regra que ela acrescenta.",
          youCanNow: "verificar se as tarefas e as horas de um emprego são legais para a sua idade, usando as regras federais e a página do seu estado.",
          quickCheck: [
            { objective: "O1", q: "Você tem 15 anos. Estamos em outubro. O seu chefe põe-no a trabalhar até às 8 da noite num dia de aulas. O que é verdade segundo as regras federais?", options: ["Está bem porque são menos de 3 horas", "É tarde demais: quem tem 14 e 15 anos para às 7 da noite fora do verão", "Está bem se os seus pais concordarem", "Só o estado pode decidir"], answer: 1, why: "Fora do período de 1 de junho ao Labor Day, quem tem 14 e 15 anos só pode trabalhar entre as 7 da manhã e as 7 da noite." },
            { objective: "O1", q: "A regra do seu estado é mais rigorosa do que a regra federal. Qual segue?", options: ["A regra federal, sempre", "A que o seu chefe escolher", "Nenhuma; anulam-se uma à outra", "A regra mais rigorosa do estado"], answer: 3, why: "Quando as leis federal e estadual sobre o trabalho de menores são diferentes, aplica-se a regra mais rigorosa." }
          ]
        },
        {
          title: "Autorizações de trabalho e documentos do primeiro dia",
          objectives: ["O2"],
          minutes: 5,
          goal: "Fazer a lista dos documentos de que precisa para começar o emprego e onde obter cada um.",
          text: [
            "A lei federal não exige uma autorização de trabalho, mas muitos estados exigem-na para trabalhadores com menos de 18 anos. A autorização de trabalho às vezes chama-se working papers ou employment certificate. Conforme o estado, pode obtê-la na escola, no serviço de trabalho do estado ou pela internet, e pode precisar da assinatura de um dos pais. Veja na página do seu estado se precisa de uma e como a obter.",
            "No primeiro dia ou antes, todos os empregadores dos EUA pedem-lhe que preencha o Formulário I-9. Ele mostra que você tem autorização para trabalhar nos EUA. Você mostra documentos de identificação originais da lista do formulário, por exemplo um passaporte dos EUA, ou um cartão de estudante ou um cartão de identificação do estado junto com um cartão da Segurança Social (Social Security) ou uma certidão de nascimento.",
            "Também preenche o Formulário W-4. Ele diz ao seu empregador quanto imposto federal sobre o rendimento deve tirar de cada salário. O seu estado pode ter também o seu próprio formulário de impostos. Pergunte ao seu chefe ou a um dos pais se uma pergunta o confundir.",
            "Proteja-se: dê o seu número da Segurança Social só em documentos de contratação verdadeiros, depois de ser contratado. Um empregador verdadeiro nunca lhe pede dinheiro para conseguir um emprego nem que compre cartões-presente. Isso é uma burla."
          ],
          steps: ["Veja a página do seu estado sobre o trabalho de menores: precisa de uma autorização de trabalho? Quem a passa?", "Encontre os seus documentos de identificação originais para o Formulário I-9 (veja a lista no formulário).", "Leia o Formulário W-4 antes do primeiro dia para saber o que pergunta.", "Ponha cópias dos seus documentos numa pasta. Guarde os originais em segurança em casa."],
          words: [["Autorização de trabalho", "um documento que alguns estados exigem antes de uma pessoa com menos de 18 anos poder trabalhar; também se chama working papers ou employment certificate."], ["Formulário I-9", "o formulário federal que mostra que você tem autorização para trabalhar nos EUA; para ele, mostra documentos de identificação."], ["Formulário W-4", "o formulário federal que diz ao seu empregador quanto imposto sobre o rendimento deve reter do seu salário."], ["Documento original", "o papel ou cartão verdadeiro, não uma foto nem uma cópia."]],
          slides: [
            { title: "Autorização de trabalho", bullets: ["Não é exigida pela lei federal", "Muitos estados exigem-na abaixo dos 18 anos", "A página do seu estado diz quem a passa"] },
            { title: "Formulário I-9", bullets: ["Mostra que você pode trabalhar nos EUA", "Leve documentos de identificação originais da lista do formulário"] },
            { title: "Formulário W-4", bullets: ["Diz ao seu empregador quanto imposto deve reter", "O seu estado pode ter o seu próprio formulário"] },
            { title: "Proteja-se", bullets: ["Dê o número da Segurança Social só em documentos de contratação verdadeiros", "Nunca pague para conseguir um emprego"] }
          ],
          sources: [SRC.fs43, SRC.stateChildLabor, SRC.i9, SRC.w4, SRC.ftcJobScams],
          tryIt: "Faça em papel uma lista \"Documentos do Primeiro Dia\". Para o seu estado, escreva: preciso de uma autorização de trabalho, e onde a obtenho? Que dois documentos de identificação vou levar para o Formulário I-9? Quem me pode ajudar com o Formulário W-4?",
          youCanNow: "fazer a lista dos documentos de que precisa para começar um emprego, onde obter cada um e como proteger os seus números privados.",
          quickCheck: [
            { objective: "O2", q: "Que formulário mostra ao seu empregador que você tem autorização para trabalhar nos EUA?", options: ["Formulário I-9", "Formulário W-4", "Uma caderneta escolar", "Um recibo de vencimento"], answer: 0, why: "O Formulário I-9 verifica que você tem autorização para trabalhar nos EUA; para ele, mostra documentos de identificação originais." },
            { objective: "O2", q: "Alguém lhe oferece um emprego se primeiro pagar $50 por \"materiais de formação\". O que é isto, muito provavelmente?", options: ["Um custo normal do primeiro dia", "Uma taxa do Formulário W-4", "Uma burla: os empregadores verdadeiros não cobram para dar um emprego", "Uma taxa do seu estado pela autorização de trabalho"], answer: 2, why: "Pedir-lhe dinheiro para conseguir um emprego é um sinal comum de burla de emprego." }
          ]
        },
        {
          title: "O que o chefe espera nas primeiras semanas",
          objectives: ["O4"],
          minutes: 5,
          goal: "Escolher a ação profissional que o chefe espera em situações comuns do primeiro emprego.",
          text: [
            "No primeiro emprego, a maioria dos chefes liga menos à experiência e mais aos hábitos: chegar a horas, estar pronto para trabalhar, seguir as instruções, ser educado com os clientes e os colegas e avisar cedo quando surge algum problema.",
            "Chegar a horas quer dizer estar pronto para trabalhar no início do turno, não estar a entrar pela porta. Se estiver doente ou for chegar atrasado, avise o seu chefe o mais cedo possível, da forma que o seu local de trabalho pede (muitas vezes com uma chamada, não só uma mensagem). Não falte simplesmente a um turno.",
            "Guarde o telefone enquanto trabalha, a não ser que o seu trabalho o permita. Quando não souber fazer alguma coisa, pergunte. Repita as instruções para ter a certeza de que percebeu. Receba as observações com calma e agradeça; elas querem dizer que o seu chefe quer que você se saia bem.",
            "Leia o seu horário todas as semanas e peça folgas com antecedência. Ser de confiança é o que lhe dá mais horas, uma boa referência e o próximo emprego."
          ],
          steps: ["Chegue alguns minutos mais cedo, pronto para trabalhar.", "Se for chegar atrasado ou estiver doente, avise o seu chefe o mais cedo possível, da forma que ele pediu.", "Guarde o telefone, a não ser que o trabalho o permita.", "Pergunte quando não tiver a certeza; repita as instruções.", "Receba as observações com calma e use-as."],
          words: [["Turno", "o bloco de tempo em que está escalado para trabalhar."], ["Avisar que falta", "dizer ao seu chefe com antecedência que não pode vir a um turno."], ["Referência", "uma pessoa, muitas vezes um antigo chefe, que diz a um novo empregador que tipo de trabalhador você é."], ["Observações", "comentários sobre como está a trabalhar e como fazer melhor."]],
          slides: [
            { title: "Hábitos que o chefe procura", bullets: ["Chegar a horas e pronto para trabalhar", "Seguir as instruções", "Ser educado com clientes e colegas"] },
            { title: "Atrasado ou doente?", bullets: ["Avise o seu chefe o mais cedo possível", "Use a forma que o seu local de trabalho pede", "Nunca falte simplesmente a um turno"] },
            { title: "No trabalho", bullets: ["Telefone guardado, a não ser que seja permitido", "Pergunte na dúvida; repita as instruções", "Receba as observações com calma"] },
            { title: "Porque é importante", bullets: ["Mais horas", "Uma boa referência", "O seu próximo emprego"] }
          ],
          tryIt: "Escreva o que diria em duas situações: (1) acorda doente duas horas antes do seu turno; (2) o seu gerente diz-lhe que arrumou mal uma prateleira. Diga as duas em voz alta, como se estivesse a falar com o seu chefe.",
          youCanNow: "escolher e descrever o que o chefe espera quando você está atrasado ou doente, não sabe o que fazer ou recebe observações.",
          quickCheck: [
            { objective: "O4", q: "O seu turno começa às 4 da tarde. O que quer dizer \"chegar a horas\"?", options: ["Entrar pela porta às 4:00", "Chegar até às 4:15", "Estar pronto para trabalhar às 4:00, por isso chegar alguns minutos antes", "Qualquer hora antes do seu intervalo"], answer: 2, why: "Chegar a horas quer dizer estar pronto para começar a trabalhar quando o turno começa." },
            { objective: "O4", q: "Não sabe bem como usar a caixa registadora. Qual é a melhor coisa a fazer?", options: ["Adivinhar e esperar que funcione", "Esperar até um cliente se queixar", "Procurar no telefone durante o turno", "Pedir ao seu supervisor que lhe mostre e depois repetir"], answer: 3, why: "Perguntar e repetir as instruções mostra cuidado e evita erros." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar-se para trabalhar",
        questions: [
          { objective: "O1", q: "Você tem 14 anos. É uma semana de aulas. Quantas horas pode trabalhar no total nessa semana segundo as regras federais?", options: ["18", "40", "Sem limite", "8"], answer: 0, why: "As regras federais permitem que quem tem 14 e 15 anos trabalhe até 18 horas numa semana em que há aulas." },
          { objective: "O1", q: "Você tem 16 anos. O seu chefe pede-lhe que conduza a carrinha da loja para entregar encomendas. O que é verdade segundo as regras federais?", options: ["Qualquer pessoa com carta de condução o pode fazer", "Conduzir na via pública como parte do trabalho é um trabalho perigoso proibido abaixo dos 17, com só uma exceção limitada aos 17", "Está bem ao fim de semana", "Está bem se lhe pagarem mais"], answer: 1, why: "As regras federais sobre trabalhos perigosos proíbem conduzir no trabalho abaixo dos 17 anos e só permitem uma condução limitada aos 17." },
          { objective: "O2", q: "A lei federal exige uma autorização de trabalho para um jovem de 15 anos?", options: ["Sim, sempre", "Só no verão", "Não, mas muitos estados exigem, por isso veja a página do seu estado", "Só para empregos em restaurantes"], answer: 2, why: "As regras federais não exigem autorizações de trabalho, mas muitos estados exigem." },
          { objective: "O2", q: "Para que serve o Formulário W-4?", options: ["Mostra que você tem autorização para trabalhar nos EUA", "Dá-lhe uma autorização de trabalho", "Lista as suas horas", "Diz ao seu empregador quanto imposto federal sobre o rendimento deve reter"], answer: 3, why: "O Formulário W-4 define quanto imposto federal sobre o rendimento é retido do seu salário." },
          { objective: "O4", q: "Vai chegar 20 minutos atrasado porque o autocarro avariou. O que faz?", options: ["Avisa o seu chefe logo, da forma que o seu local de trabalho pede", "Não diz nada e entra atrasado", "Falta ao turno", "Publica sobre isso na internet"], answer: 0, why: "Avisar o seu chefe cedo, da forma que ele pediu, mostra que você é de confiança." }
        ]
      }
    },
    {
      name: "Capítulo 2: O seu salário, os seus direitos e a sua segurança",
      lessons: [
        {
          title: "Ler o seu primeiro recibo de vencimento",
          objectives: ["O3"],
          minutes: 6,
          goal: "Encontrar o salário bruto, cada desconto e o salário líquido num recibo de vencimento.",
          text: [
            "Um recibo de vencimento (paystub ou pay statement) vem com cada pagamento, em cheque ou por transferência para a sua conta. Mostra o período de pagamento, as suas horas, o valor por hora, o salário bruto, cada desconto e o salário líquido.",
            "O salário bruto é o número de horas vezes o valor por hora, antes de se tirar alguma coisa. Os descontos são valores que se tiram. Os mais comuns: imposto federal sobre o rendimento (com base no seu Formulário W-4), Segurança Social (6,2 por cento do seu salário) e Medicare (1,45 por cento), muitas vezes mostrados juntos como FICA, e em muitos estados um imposto estadual sobre o rendimento. O salário líquido é o que sobra e leva para casa.",
            "Só para praticar, com números inventados: 20 horas a $12.00 por hora = $240.00 bruto. Segurança Social: 240 x 0.062 = $14.88. Medicare: 240 x 0.0145 = $3.48. Imposto federal sobre o rendimento: $6.00. Imposto estadual: $3.00. Os descontos somam $27.36, por isso o salário líquido = $240.00 - $27.36 = $212.64.",
            "O salário mínimo federal é de $7.25 por hora. Muitos estados e cidades têm um mais alto, e é o mais alto que se aplica a você. Veja a página do seu estado para saber se o seu valor é legal."
          ],
          steps: ["Encontre as datas do período de pagamento e as suas horas.", "Verifique o salário bruto: horas x valor por hora.", "Faça a lista de cada desconto e some-os.", "Verifique o salário líquido: salário bruto menos o total dos descontos.", "Se alguma coisa não bater certo, pergunte com educação aos serviços de pagamento ou ao seu chefe."],
          words: [["Salário bruto", "o seu salário antes de se tirar alguma coisa: horas x valor por hora."], ["Desconto", "um valor que se tira do seu salário, como os impostos."], ["Salário líquido", "o que leva para casa: salário bruto menos os descontos."], ["FICA", "os impostos da Segurança Social e do Medicare tirados do seu salário."], ["Período de pagamento", "as datas de trabalho que um pagamento cobre."]],
          slides: [
            { title: "O que tem um recibo de vencimento", bullets: ["Período de pagamento, horas e valor por hora", "Salário bruto e cada desconto", "Salário líquido (o que leva para casa)"] },
            { title: "Descontos comuns", bullets: ["Imposto federal sobre o rendimento (do seu W-4)", "Segurança Social 6,2% e Medicare 1,45% (FICA)", "Imposto estadual sobre o rendimento em muitos estados"] },
            { title: "Prática: números inventados", bullets: ["20 horas x $12.00 = $240.00 bruto", "Descontos: $14.88 + $3.48 + $6.00 + $3.00 = $27.36", "Salário líquido: $240.00 - $27.36 = $212.64"] },
            { title: "Salário mínimo", bullets: ["Federal: $7.25 por hora", "Muitos estados e cidades pagam mais; aplica-se o mais alto"] }
          ],
          sources: [SRC.irs751, SRC.minWage, SRC.stateMinWage, SRC.w4],
          tryIt: "Só para praticar: trabalhou 15 horas a $13.00 por hora. O imposto federal sobre o rendimento é $5.00 e o imposto estadual é $2.00. Em papel, calcule o salário bruto, a Segurança Social, o Medicare, o total dos descontos e o salário líquido. (Resposta: $195.00 bruto, $12.09, $2.83, $21.92 no total, $173.08 líquido.)",
          youCanNow: "ler um recibo de vencimento, encontrar o salário bruto, cada desconto e o salário líquido, e verificar as contas.",
          quickCheck: [
            { objective: "O3", q: "Trabalhou 10 horas a $14.00 por hora. Qual é o seu salário bruto?", options: ["$14.00", "$124.00", "$104.00", "$140.00"], answer: 3, why: "O salário bruto é horas vezes o valor por hora: 10 x $14.00 = $140.00." },
            { objective: "O3", q: "O salário bruto é $300.00 e os descontos somam $35.00. Qual é o salário líquido?", options: ["$265.00", "$335.00", "$300.00", "$35.00"], answer: 0, why: "O salário líquido é o salário bruto menos os descontos: $300.00 - $35.00 = $265.00." }
          ]
        },
        {
          title: "Registar as suas horas para receber o salário certo",
          objectives: ["O3"],
          minutes: 5,
          goal: "Manter o seu próprio registo de horas e compará-lo com o recibo de vencimento.",
          text: [
            "Há erros nos salários. A melhor proteção é o seu próprio registo. Em cada turno, escreva a data, a hora a que começou, quando começou e acabou o intervalo e a hora a que terminou. O Department of Labor tem uma aplicação gratuita de registo de horas, ou pode usar um caderno ou as notas do telefone.",
            "Some as horas do período de pagamento. Lembre-se de tirar os intervalos de refeição não pagos. Depois compare o seu total com as horas do recibo de vencimento.",
            "Se os números não baterem certo, não entre em pânico e não acuse ninguém. Leve o seu registo ao seu chefe ou aos serviços de pagamento e pergunte: \"As minhas notas mostram 22 horas e o meu recibo mostra 19. Pode ajudar-me a verificar?\" A maioria dos erros resolve-se assim.",
            "Se não lhe pagarem horas que trabalhou e isso não for corrigido, a Wage and Hour Division (Divisão de Salários e Horários) do Department of Labor recebe queixas. É gratuito e confidencial."
          ],
          steps: ["Em cada turno: escreva a data, a hora de início, as horas do intervalo e a hora de fim.", "No fim do período de pagamento, some as suas horas (menos os intervalos não pagos).", "Compare o seu total com as horas do recibo de vencimento.", "Se forem diferentes, leve o seu registo e peça com educação para verificar.", "Se não for corrigido, contacte a Wage and Hour Division."],
          words: [["Folha de horas", "um registo dos dias e das horas que trabalhou."], ["Intervalo não pago", "uma pausa para refeição em que está totalmente livre do trabalho e não é pago."], ["Serviços de pagamento", "a pessoa ou a equipa que paga aos trabalhadores (payroll)."], ["Wage and Hour Division", "a parte do Department of Labor dos EUA que faz cumprir as regras sobre salários e o trabalho de menores."]],
          slides: [
            { title: "Mantenha o seu próprio registo", bullets: ["Data, hora de início, do intervalo e de fim", "Caderno, notas do telefone ou a aplicação gratuita do DOL"] },
            { title: "Compare em cada período de pagamento", bullets: ["Some as suas horas, menos os intervalos não pagos", "Compare com o recibo de vencimento"] },
            { title: "Se não bater certo", bullets: ["Leve o seu registo e pergunte com educação", "\"Pode ajudar-me a verificar?\""] },
            { title: "Ainda não foi corrigido?", bullets: ["Wage and Hour Division: gratuito e confidencial", "1-866-487-9243 (1-866-4-US-WAGE)"] }
          ],
          sources: [SRC.youthRules, SRC.childLabor],
          tryIt: "Só para praticar: segunda-feira das 3:30 às 7:00 da tarde, quarta-feira das 3:30 às 7:00 da tarde, sábado das 9:00 da manhã às 3:00 da tarde com 30 minutos de almoço não pago. Some as horas. O seu recibo diz 11 horas. Escreva o que diria ao seu chefe. (Resposta: 3,5 + 3,5 + 5,5 = 12,5 horas.)",
          youCanNow: "manter um registo das suas horas, compará-lo com o recibo de vencimento e pedir com educação que corrijam um erro.",
          quickCheck: [
            { objective: "O3", q: "Trabalhou das 9 da manhã às 2 da tarde com 30 minutos de almoço não pago. Quantas horas pagas?", options: ["5", "5,5", "4,5", "4"], answer: 2, why: "Das 9 da manhã às 2 da tarde são 5 horas; menos um intervalo não pago de 30 minutos dá 4,5 horas." },
            { objective: "O3", q: "As suas notas mostram 22 horas, mas o recibo mostra 19. O que faz primeiro?", options: ["Despede-se logo", "Leva o seu registo ao seu chefe ou aos serviços de pagamento e pede com educação para verificar", "Não diz nada", "Publica o recibo na internet"], answer: 1, why: "A maioria dos erros no salário resolve-se mostrando o seu registo e perguntando com educação." }
          ]
        },
        {
          title: "Os seus direitos e a segurança: falar",
          objectives: ["O5"],
          minutes: 6,
          goal: "Descrever os passos para falar e denunciar uma situação perigosa ou injusta.",
          text: [
            "Todos os trabalhadores, incluindo os adolescentes, têm direitos. O seu empregador tem de lhe dar um local de trabalho seguro e pagar-lhe pelo menos o salário mínimo legal por cada hora que trabalha. Deve receber formação antes de fazer uma tarefa e pode fazer perguntas. O seu empregador não pode castigá-lo por perguntar sobre os seus direitos nem por fazer uma queixa.",
            "Os jovens trabalhadores magoam-se mais quando são novos no trabalho, estão com pressa ou não têm formação. Sinais de alerta: mandarem-no usar uma máquina para a qual não teve formação, uma tarefa proibida para a sua idade, falta de equipamento de proteção, chão escorregadio, óleo quente ou ficar sozinho tarde à noite.",
            "Passos para falar: pare se estiver em perigo. Diga com calma ao seu supervisor qual é o problema. Se ele não resolver, diga a outro gerente e a um dos pais, a um professor ou a um técnico do programa de emprego. Se ainda não for resolvido, contacte o governo: a OSHA (1-800-321-6742) para a segurança, ou a Wage and Hour Division (1-866-487-9243) para problemas de salário, horas ou trabalho de menores.",
            "Se alguém se magoar gravemente, ligue primeiro para o 911 (ou o número de emergência local)."
          ],
          steps: ["Se estiver em perigo, pare e afaste-se.", "Diga com calma ao seu supervisor o que está mal.", "Se não for resolvido, diga a outro gerente e a um adulto de confiança.", "Ainda não resolvido: ligue para a OSHA sobre segurança ou para a Wage and Hour Division sobre salário, horas ou trabalho de menores.", "Emergência: ligue primeiro para o 911."],
          words: [["OSHA", "a Occupational Safety and Health Administration, o serviço federal para a segurança no trabalho."], ["Retaliação", "castigar um trabalhador por falar ou fazer uma queixa; não é permitido."], ["Equipamento de proteção", "coisas como luvas, óculos de proteção ou sapatos antiderrapantes que o mantêm seguro."]],
          slides: [
            { title: "Os seus direitos", bullets: ["Um local de trabalho seguro", "Pelo menos o salário mínimo legal por cada hora", "Formação, perguntas e nenhum castigo por falar"] },
            { title: "Sinais de alerta", bullets: ["Uma máquina para a qual não teve formação", "Uma tarefa proibida para a sua idade", "Sem equipamento de proteção, óleo quente, chão escorregadio"] },
            { title: "Falar por passos", bullets: ["Pare se estiver em perigo", "Diga ao supervisor, depois a outro gerente e a um adulto de confiança", "Não resolvido: OSHA ou Wage and Hour Division"] },
            { title: "Números a saber", bullets: ["Emergência: primeiro o 911", "OSHA: 1-800-321-6742", "Wage and Hour: 1-866-487-9243"] }
          ],
          sources: [SRC.oshaYoung, SRC.youthRules, SRC.fs43],
          tryIt: "Você tem 16 anos. O seu gerente manda-o usar a máquina de cortar carne numa charcutaria, e não teve nenhuma formação. Escreva as palavras que diria ao seu gerente e a quem diria a seguir se ele insistir. Guarde no telefone os números da OSHA e da Wage and Hour Division.",
          youCanNow: "reconhecer uma situação perigosa ou injusta e falar por passos: o seu supervisor, um adulto de confiança e depois o serviço oficial.",
          quickCheck: [
            { objective: "O5", q: "O seu chefe manda-o limpar uma fritadeira com óleo quente e não lhe dá luvas nem formação. O que faz primeiro?", options: ["Diz com calma ao seu supervisor que precisa de formação e de equipamento antes de o fazer", "Faz depressa para não ter problemas", "Liga para o 911", "Despede-se sem dizer porquê"], answer: 0, why: "Falar primeiro com o seu supervisor é o primeiro passo habitual quando ainda ninguém se magoou." },
            { objective: "O5", q: "Falou com dois gerentes sobre um problema no salário e nada mudou. Quem pode contactar?", options: ["Ninguém; tem de aceitar", "Um desconhecido na internet", "A Wage and Hour Division do Department of Labor dos EUA", "Só o treinador de desporto da escola"], answer: 2, why: "A Wage and Hour Division recebe queixas gratuitas e confidenciais sobre salários, horas e trabalho de menores." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: O seu salário, os seus direitos e a sua segurança",
        questions: [
          { objective: "O3", q: "Num recibo de vencimento, o que é o salário líquido?", options: ["O salário antes dos impostos", "O seu valor por hora", "O que leva para casa depois dos descontos", "O total de impostos tirados"], answer: 2, why: "O salário líquido é o que sobra depois de tirar todos os descontos do salário bruto." },
          { objective: "O3", q: "Só para praticar: o salário bruto é $200.00. Qual é o desconto da Segurança Social a 6,2 por cento?", options: ["$6.20", "$2.90", "$15.30", "$12.40"], answer: 3, why: "$200.00 x 0.062 = $12.40." },
          { objective: "O3", q: "Porque deve manter o seu próprio registo de horas?", options: ["Para o comparar com o recibo de vencimento e encontrar erros", "Porque a lei diz que só você pode registar as horas", "Para poder saltar os intervalos", "Para não precisar de recibo de vencimento"], answer: 0, why: "O seu próprio registo permite verificar se lhe pagaram todas as horas que trabalhou." },
          { objective: "O5", q: "Um colega queimou-se gravemente. O que faz primeiro?", options: ["Acaba a sua tarefa", "Liga para o 911 (ou o número de emergência local)", "Liga para a OSHA", "Manda mensagens aos amigos"], answer: 1, why: "Numa emergência, ligue primeiro para o 911; as queixas aos serviços vêm depois." },
          { objective: "O5", q: "O seu empregador pode castigá-lo por fazer uma queixa sobre segurança ou salário?", options: ["Sim, se tiver menos de 18 anos", "Sim, se a queixa estiver errada", "Não, a retaliação por falar não é permitida", "Só no primeiro mês"], answer: 2, why: "A lei protege os trabalhadores contra a retaliação por perguntarem sobre os seus direitos ou fazerem uma queixa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: O Seu Primeiro Emprego: Autorizações de Trabalho, Salário e o Que o Chefe Espera",
    questions: [
      { objective: "O1", q: "Você tem 15 anos e está de férias de verão em julho. Até que horas pode trabalhar segundo as regras federais?", options: ["7 da noite", "9 da noite", "11 da noite", "A qualquer hora"], answer: 1, why: "De 1 de junho ao Labor Day, o limite da noite para quem tem 14 e 15 anos passa para as 9 da noite." },
      { objective: "O2", q: "Que documentos preenche todo o novo trabalhador, em qualquer idade?", options: ["Formulário I-9 e Formulário W-4", "Uma autorização de trabalho e uma caderneta escolar", "Um recibo de vencimento e uma folha de horas", "Um exame de condução"], answer: 0, why: "Todo o novo trabalhador preenche o Formulário I-9 e o Formulário W-4; as autorizações de trabalho dependem da idade e do estado." },
      { objective: "O3", q: "Só para praticar: 18 horas a $12.50 por hora. Qual é o salário bruto?", options: ["$215.00", "$250.00", "$225.00", "$180.00"], answer: 2, why: "18 x $12.50 = $225.00." },
      { objective: "O4", q: "Acorda doente duas horas antes do seu turno. Qual é a atitude profissional?", options: ["Ir trabalhar doente sem dizer nada", "Faltar ao turno e explicar na semana seguinte", "Pedir a um amigo que vá no seu lugar sem dizer a ninguém", "Avisar o seu chefe logo, da forma que o seu local de trabalho pede"], answer: 3, why: "Avisar o seu chefe cedo, da forma que ele pediu, permite-lhe cobrir o turno e mostra que você é de confiança." },
      { objective: "O5", q: "Que serviço trata das queixas sobre segurança no trabalho?", options: ["O IRS", "A OSHA", "Os correios", "O distrito escolar"], answer: 1, why: "A OSHA é o serviço federal para a segurança e a saúde no trabalho." },
      { objective: "O1", q: "Você tem 14 anos. Num dia de aulas, quantas horas pode trabalhar segundo as regras federais?", options: ["3", "5", "8", "Sem limite"], answer: 0, why: "Quem tem 14 e 15 anos pode trabalhar até 3 horas num dia de aulas, incluindo à sexta-feira." },
      { objective: "O1", q: "Você tem 17 anos. Que tarefa é proibida para si segundo as regras federais sobre trabalhos perigosos?", options: ["Pôr as compras em sacos", "Atender o telefone", "Arrumar prateleiras à mão", "Manobrar um empilhador"], answer: 3, why: "Manobrar equipamento de elevação a motor, como um empilhador, é um trabalho perigoso proibido abaixo dos 18 anos." },
      { objective: "O2", q: "Onde descobre se o seu estado exige uma autorização de trabalho?", options: ["Na página oficial do seu estado sobre o trabalho de menores (o Department of Labor tem a lista)", "Numa publicação nas redes sociais", "Em qualquer site de emprego", "No verso de um recibo de vencimento"], answer: 0, why: "As autorizações de trabalho são uma regra do estado, por isso a página oficial do estado é o lugar para verificar." },
      { objective: "O2", q: "Um novo chefe manda-lhe uma mensagem, antes de qualquer entrevista, a pedir os seus dados de acesso ao banco \"para tratar do pagamento\". O que é isto?", options: ["Normal para a transferência do salário", "Parte do Formulário W-4", "Um sinal de alerta de burla; nunca partilhe dados de acesso", "Parte do Formulário I-9"], answer: 2, why: "Os empregadores verdadeiros nunca precisam dos seus dados de acesso ao banco; pedi-los é um sinal de burla." },
      { objective: "O3", q: "Que desconto depende do que escreveu no Formulário W-4?", options: ["Medicare", "Segurança Social", "O seu valor por hora", "Imposto federal sobre o rendimento"], answer: 3, why: "O Formulário W-4 diz ao seu empregador quanto imposto federal sobre o rendimento deve reter." },
      { objective: "O3", q: "Só para praticar: salário bruto $240.00, descontos $27.36. Qual é o salário líquido?", options: ["$212.64", "$267.36", "$222.64", "$213.64"], answer: 0, why: "$240.00 - $27.36 = $212.64." },
      { objective: "O3", q: "O salário mínimo federal é $7.25, mas o da sua cidade é mais alto. Qual se aplica a você?", options: ["Os $7.25 federais", "O que o seu chefe escolher", "O mais alto", "O mais baixo"], answer: 2, why: "Quando o salário mínimo do estado ou da cidade é mais alto do que o federal, aplica-se o mais alto." },
      { objective: "O4", q: "O seu gerente diz que arrumou mal uma prateleira. Qual é a melhor resposta?", options: ["Discutir que está bem assim", "Dizer \"Obrigado por me dizer. Pode mostrar-me a forma certa?\"", "Ignorar", "Queixar-se aos clientes"], answer: 1, why: "Receber as observações com calma e perguntar como corrigir é o que o chefe espera." },
      { objective: "O4", q: "Quando pode usar o telefone durante o turno?", options: ["Sempre que houver pouco movimento", "Só quando o trabalho o permite", "Sempre que os clientes não estejam a ver", "A qualquer hora, se continuar a trabalhar"], answer: 1, why: "Guarde o telefone enquanto trabalha, a não ser que o seu local de trabalho o permita." },
      { objective: "O4", q: "Precisa de um sábado livre para um evento de família no próximo mês. O que faz?", options: ["Pede ao seu chefe com antecedência, da forma que o seu local de trabalho pede", "Simplesmente não aparece", "Diz só a um colega", "Pede na noite anterior"], answer: 0, why: "Pedir folga com antecedência dá tempo ao seu chefe para se organizar." },
      { objective: "O5", q: "Você tem 16 anos e mandam-no usar uma máquina de cortar carne. O que deve saber?", options: ["Está bem depois de uma tentativa", "Está bem se nenhum cliente vir", "A escolha é sua", "As máquinas de cortar carne a motor são um trabalho perigoso proibido abaixo dos 18, por isso fale"], answer: 3, why: "As regras federais sobre trabalhos perigosos proíbem que quem tem menos de 18 anos use máquinas de cortar carne a motor." },
      { objective: "O5", q: "Qual é o primeiro passo habitual quando alguma coisa no trabalho é perigosa mas ninguém se magoou?", options: ["Ligar para a comunicação social", "Publicar na internet", "Dizer com calma ao seu supervisor", "Despedir-se sem dizer nada"], answer: 2, why: "Dizer ao seu supervisor dá-lhe a oportunidade de resolver; depois suba mais alto se não for resolvido." },
      { objective: "O1", q: "Você tem 16 anos. Quantas horas por semana pode trabalhar segundo a lei federal?", options: ["18", "40", "Sem limite federal, mas veja o seu estado", "8"], answer: 2, why: "A lei federal não limita as horas aos 16 e 17 anos, mas o seu estado pode limitar." },
      { objective: "O4", q: "Com o que é que um chefe costuma importar-se mais num trabalhador no primeiro emprego?", options: ["Roupa cara", "Anos de experiência", "Conhecer o dono", "Chegar a horas e ser de confiança"], answer: 3, why: "No primeiro emprego, os chefes procuram sobretudo hábitos de confiança, como chegar a horas e seguir as instruções." },
      { objective: "O5", q: "O seu salário está errado e dois gerentes não resolveram. Para que número pode ligar?", options: ["A Wage and Hour Division, 1-866-487-9243", "Só a OSHA", "911", "O IRS"], answer: 0, why: "A Wage and Hour Division trata das queixas sobre salários, horas e trabalho de menores." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 2, 3, 4, 6, 9, 15] },
  rubric: {
    mastery: "Atende ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Horas e tarefas verificadas", objective: "O1", notYet: "Não há regras de idade escritas, ou não se repara num turno ou numa tarefa que vai contra as regras.", meets: "Cada turno e cada tarefa são comparados com as regras federais e do estado, com a página oficial indicada.", exceeds: "Indica também uma regra do estado mais rigorosa do que a federal e como ela muda o horário." },
      { name: "Documentos prontos", objective: "O2", notYet: "Falta na lista o Formulário I-9, o Formulário W-4 ou a pergunta sobre a autorização de trabalho do estado.", meets: "Lista a autorização de trabalho (se for precisa), a identificação para o Formulário I-9 e o Formulário W-4, e onde obter cada um.", exceeds: "Lista também como proteger os números privados e um sinal de burla de emprego." },
      { name: "Recibo de vencimento verificado", objective: "O3", notYet: "Falta o salário bruto, os descontos ou o salário líquido, ou as contas estão erradas.", meets: "O salário bruto, cada desconto e o salário líquido estão escritos e as contas estão certas ao cêntimo.", exceeds: "Compara também as horas do recibo com uma folha de horas escrita e diz o que fazer se forem diferentes." },
      { name: "O que o chefe espera", objective: "O4", notYet: "Os hábitos são vagos, como \"portar-me bem\".", meets: "Três hábitos claros, como chegar cedo, avisar cedo quando falta e perguntar na dúvida.", exceeds: "Cada hábito tem uma frase curta do que o aluno diria." },
      { name: "Plano de segurança", objective: "O5", notYet: "Não há plano, ou o plano não inclui dizer ao supervisor nem indica um serviço oficial.", meets: "Indica a quem contar primeiro, um adulto de confiança e a OSHA ou a Wage and Hour Division com o número de telefone.", exceeds: "Diz também que numa emergência se liga primeiro para o 911 e lista sinais de alerta para o próprio emprego do aluno." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que começam um emprego, um estágio ou uma colocação de emprego de verão para jovens em 90 dias (inquérito de seguimento ou registos do programa)",
      "Alunos que ainda estão nesse emprego depois de 60 dias, e a parte deles que recebe uma boa referência",
      "Alunos que dizem ter comparado pelo menos uma vez um recibo de vencimento com as suas próprias horas (seguimento aos 30 dias)",
      "Os programas para jovens e os empregadores relatam menos problemas de horários ou tarefas que vão contra as regras do trabalho de menores"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para abrir as páginas do Department of Labor e do estado, ou cópias impressas da página do estado sobre o trabalho de menores",
      "Papel, caneta e uma calculadora (a calculadora do telefone serve)",
      "Formulários W-4 e I-9 em branco, impressos de irs.gov e uscis.gov, para observar (não preencha números verdadeiros na aula)",
      "Um recibo de vencimento de exemplo inventado para praticar",
      "Cerca de 60 a 75 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes do curso, procure as páginas do seu estado sobre o trabalho de menores e o salário mínimo e imprima as regras principais; elas são diferentes de estado para estado e mudam.",
      "Num programa de emprego de verão para jovens: façam o teste inicial juntos, depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas em pares.",
      "Nunca recolha números da Segurança Social verdadeiros, cópias de documentos de identificação nem recibos de vencimento reais; use exemplos inventados.",
      "Faça dramatizações das frases para avisar que falta e para receber observações na Lição 3 e dos passos para falar na Lição 6.",
      "Avalie a tarefa final com a grelha de avaliação e dê observações sobre uma linha Ainda não de cada vez.",
      "Se um aluno descrever um emprego real perigoso ou ilegal, ajude-o a seguir os passos da Lição 6 e envolva um dos pais ou o responsável."
    ]
  }
};
