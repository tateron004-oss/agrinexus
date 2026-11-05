"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-savings-groups-microfinance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// All money figures are examples, exactly as in the English; no investment or lending advice.

const VSLA = { name: "VSL Associates: o método VSLA (ações, fundo de empréstimos, fundo social, ciclo de um ano, partilha)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Quénia: lista das SACCO autorizadas a receber depósitos", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: regras para as instituições de microfinanças (sistemas financeiros descentralizados) nos países do franco CFA (XOF)", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Banco Central da Nigéria: bancos de microfinanças", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const BOG = { name: "Banco do Gana: todas as instituições licenciadas e os procedimentos de reclamação", url: "https://www.bog.gov.gh" };
const CBK_DCP = { name: "Banco Central do Quénia: supervisão bancária, incluindo bancos de microfinanças e fornecedores de crédito digital licenciados", url: "https://www.centralbank.go.ke/bank-supervision/" };
const FCCPC = { name: "FCCPC, Nigéria: estado do registo dos credores digitais (aplicações de empréstimo aprovadas)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const SEC_NG = { name: "Nairametrics (14 de maio de 2026): a SEC da Nigéria alerta contra esquemas Ponzi promovidos no WhatsApp, TikTok e Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-savings-groups-microfinance-pt",
  lang: "pt",
  translationOf: "afr-savings-groups-microfinance",
  category: "Africa: Life and Work",
  name: "Grupos de Poupança e Microfinanças (Chamas, VSLA, Tontinas, Esusu)",
  skills: "Escolher entre um grupo rotativo e um grupo de poupança e crédito, Escrever um plano de poupança mensal, Verificar as regras de um grupo, Guardar os registos e o dinheiro do grupo com segurança, Comparar empréstimos de microfinanças e de grupo, Reconhecer esquemas Ponzi e falsos credores",
  outcome: "escolher um grupo de poupança que sirva para o seu objetivo, verificar as suas regras e registos, comparar um empréstimo de microfinanças ou de grupo pelo total que vai pagar, reconhecer um esquema Ponzi ou um falso credor e seguir um plano de poupança mensal escrito.",
  about: [
    "Em toda a África, as pessoas poupam juntas: chamas e merry-go-rounds no Quénia, esusu e ajo na Nigéria, susu no Gana, tontinas no Senegal, na Costa do Marfim e nos Camarões (njangi nos Camarões de língua inglesa), gam'eya no Egito e daret em Marrocos. Grupos de poupança, SACCO (cooperativas de poupança e crédito) e bancos de microfinanças ajudam milhões de pessoas a pagar as propinas da escola, a abastecer uma loja ou a passar um mês difícil.",
    "Este curso é para comerciantes, pais e mães, artesãos, trabalhadores e jovens que querem poupar com regularidade ou pedir emprestado com cuidado. Vai aprender os dois tipos principais de grupos, como escrever um plano de poupança, o que verificar nas regras e nos registos de um grupo, como comparar um empréstimo pelo total que vai pagar e como reconhecer esquemas que roubam poupanças.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\", uma pequena verificação, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Todos os valores em dinheiro são exemplos. Este curso explica como os produtos funcionam e os seus riscos; não lhe diz onde pôr o seu dinheiro."
  ],
  finalTask: "Escreva o seu plano de poupança mensal numa página: o seu objetivo e a data em que precisa dele, o total, o valor a poupar cada semana ou cada mês, onde vai poupar (grupo, SACCO, banco de microfinanças ou conta) e uma folha de verificação com as suas respostas sobre o grupo ou a instituição: as regras escritas, como o dinheiro e os registos são guardados, a licença (se recebe depósitos ou empresta como negócio) e o custo total de qualquer empréstimo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens de toda a África, em cidades e aldeias: comerciantes, artesãos, mães e pais, trabalhadores e jovens, muitos já num chama, esusu, susu ou tontina. Exemplos do Quénia, Nigéria, Gana, Senegal, Camarões, Costa do Marfim, Egito e Marrocos.",
    startingPoint: "Muitos já poupam num grupo informal ou numa carteira móvel, mas sem um objetivo escrito. Alguns entraram num grupo sem ler as regras, pediram emprestado sem calcular o total a pagar, ou perderam dinheiro num grupo que acabou mal ou num esquema de \"duplicar o seu dinheiro\".",
    gap: "Os alunos precisam de escolher o tipo de grupo certo para o seu objetivo, verificar as regras e os registos antes de confiar o seu dinheiro a um grupo, comparar empréstimos pelo que vão realmente pagar e reconhecer esquemas Ponzi e credores sem licença, para que as suas poupanças cresçam em vez de desaparecerem.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; traduzido para várias línguas",
      "Aparelhos: telefone simples; muitos grupos reúnem-se em pessoa e guardam registos em papel",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho e os dias de reunião do grupo",
      "As regras e as licenças mudam de país para país e com o tempo: os alunos consultam as listas atuais do regulador",
      "Dinheiro: só exemplos; nenhum conselho de investimento; nunca partilhe PIN nem palavras-passe"
    ],
    prerequisites: "Nenhum. Saber somar e multiplicar, com a calculadora do telefone, ajuda."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um objetivo de poupança e dois tipos de grupo", action: "explicar como funcionam um grupo rotativo e um grupo de poupança e crédito e escolher o que serve para o objetivo", standard: "dando uma razão para a escolha e um risco de cada um" },
    { id: "O2", condition: "Com um objetivo e o seu próprio rendimento", action: "escrever um plano de poupança mensal com o objetivo, o total, a data, o valor por semana ou por mês e onde vai poupar", standard: "com contas que chegam ao objetivo na data" },
    { id: "O3", condition: "Com a constituição ou as regras de um grupo", action: "verificar as regras principais: contribuições, reuniões, empréstimos, multas, saída, partilha e quem controla o dinheiro", standard: "encontrando pelo menos seis das sete e dizendo quais faltam" },
    { id: "O4", condition: "Numa reunião do grupo", action: "registar as contribuições e os empréstimos numa caderneta ou livro de registos e verificar que o dinheiro e os registos batem certo", standard: "com cada valor lido em voz alta e aceite diante dos membros" },
    { id: "O5", condition: "Com uma oferta de empréstimo de microfinanças ou de grupo", action: "calcular o total que vai pagar e comparar as datas de pagamento com o seu rendimento", standard: "antes de assinar, e dizendo o que a responsabilidade solidária significa para você" },
    { id: "O6", condition: "Com uma oferta para poupar, investir ou pedir emprestado", action: "identificar os sinais de alerta de um esquema Ponzi ou de um falso credor e procurar o fornecedor na lista oficial do regulador", standard: "antes de pagar ou partilhar qualquer dado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Poupar juntos",
      lessons: [
        {
          title: "Dois tipos de grupos de poupança",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explicar como funcionam um grupo rotativo e um grupo de poupança e crédito, e escolher um para o seu objetivo.",
          text: [
            "Um grupo rotativo (merry-go-round, esusu, ajo, susu, tontina, njangi, gam'eya ou daret) é simples. Todos os membros pagam o mesmo valor cada semana ou cada mês, e de cada vez um membro recebe o bolo todo, à vez, até todos o terem recebido uma vez. Exemplo: 10 membros pagam cada um KES 1,000 por mês; cada mês um membro recebe KES 10,000.",
            "É bom para uma quantia grande de uma vez: propinas da escola, uma máquina de costura, mercadoria para uma loja. Os seus riscos: quem recebe o bolo cedo pode deixar de pagar, e ninguém ganha nada com o dinheiro. Os primeiros recebem um adiantamento sem juros; os últimos estão, na verdade, a emprestar ao grupo.",
            "Um grupo de poupança e crédito (uma VSLA, uma ASCA ou muitos chamas e, numa versão maior e formal, uma SACCO) guarda o dinheiro junto. Os membros poupam em cada reunião, as poupanças formam um fundo de empréstimos, os membros pedem emprestado e pagam de volta com uma taxa de serviço que o grupo decide, e no fim do ciclo, muitas vezes cerca de um ano, tudo é partilhado na proporção do que cada membro poupou. Os seus riscos: empréstimos que não são pagos e dinheiro roubado ou mal registado.",
            "Escolha pelo seu objetivo. Uma quantia grande em breve: um grupo rotativo pode servir. Poupar sempre, com a possibilidade de pedir emprestado: um grupo de poupança e crédito pode servir. Muitas pessoas usam os dois."
          ],
          words: [["Grupo rotativo (ROSCA)", "os membros pagam o mesmo valor e cada um recebe o bolo todo à vez."], ["Grupo de poupança e crédito", "os membros poupam num fundo comum, emprestam uns aos outros e partilham no fim de um ciclo (VSLA, ASCA, SACCO)."], ["Partilha", "o dia em que o grupo paga aos membros todas as poupanças e ganhos, na proporção do que cada um poupou."]],
          slides: [
            { title: "Grupo rotativo", bullets: ["Todos pagam o mesmo; cada um recebe o bolo à vez", "Esusu, ajo, susu, tontina, njangi, gam'eya, daret", "Bom para uma quantia grande; risco: os primeiros deixam de pagar"] },
            { title: "Grupo de poupança e crédito", bullets: ["As poupanças formam um fundo de empréstimos", "Os membros pedem emprestado e pagam com uma taxa de serviço", "Partilha pelo que cada um poupou; risco: empréstimos não pagos"] },
            { title: "Escolha pelo seu objetivo", bullets: ["Quantia grande em breve: grupo rotativo pode servir", "Poupar sempre e pedir emprestado: VSLA ou SACCO", "Muitas pessoas usam os dois"] }
          ],
          sources: [VSLA],
          tryIt: "Pense num grupo de que faz parte ou que conhece. É rotativo ou de poupança e crédito? Escreva uma coisa para que é bom e um risco.",
          youCanNow: "explicar os dois tipos de grupos de poupança e escolher o que serve para o seu objetivo.",
          quickCheck: [
            { objective: "O1", q: "Doze membros pagam cada um GHS 200 por mês e um membro recebe o bolo todo cada mês. Que tipo de grupo é este?", options: ["Um grupo de poupança e crédito", "Um banco de microfinanças", "Um grupo rotativo", "Um esquema Ponzi"], answer: 2, why: "Todos pagam o mesmo e recebem o bolo à vez: um grupo rotativo (susu)." },
            { objective: "O1", q: "Numa VSLA, como é partilhado o dinheiro no fim do ciclo?", options: ["Na proporção do que cada membro poupou", "Em partes iguais, seja qual for a poupança de cada um", "Tudo para o presidente", "Para quem pediu mais emprestado"], answer: 0, why: "Os membros que pouparam mais recebem uma parte maior do fundo e dos seus ganhos." }
          ]
        },
        {
          title: "O seu objetivo e o plano de poupança mensal",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escrever um plano de poupança que chega a um objetivo numa data.",
          text: [
            "Poupar funciona melhor com um objetivo claro: para que é, quanto custa e quando precisa dele. \"Propinas de NGN 120,000 até janeiro\" é um objetivo. \"Poupar mais\" não é.",
            "Divida o total pelo número de semanas ou de meses que tem. Exemplo: NGN 120,000 em 8 meses são NGN 15,000 por mês. Se for demais, mude a data, o objetivo ou os seus gastos. Olhe para o seu rendimento nos meses bons e nos maus; um comerciante pode poupar mais na época de muito movimento.",
            "Decida onde o dinheiro vai ficar: num grupo de poupança, numa SACCO, num banco de microfinanças, num banco ou numa conta de poupança móvel. Guarde uma pequena quantia de emergência a que chega depressa, separada do dinheiro do objetivo.",
            "Pague-se a si primeiro: poupe no dia em que o dinheiro entra, antes de outros gastos. Exemplo: a Aïcha, cabeleireira em Abidjan, põe XOF 5,000 na sua tontina todos os sábados antes de comprar qualquer outra coisa."
          ],
          steps: ["Escreva o objetivo, o total e a data.", "Conte as semanas ou os meses até à data.", "Divida o total por esse número.", "Compare com o seu rendimento num mês mau.", "Escolha onde vai poupar.", "Poupe no dia em que o dinheiro entra."],
          words: [["Objetivo de poupança", "aquilo para que poupa, quanto custa e até quando."], ["Dinheiro de emergência", "uma pequena quantia guardada à parte para problemas de repente, fácil de alcançar."]],
          slides: [
            { title: "Um objetivo claro", bullets: ["Para que é, quanto, até quando", "\"Propinas de NGN 120,000 até janeiro\"", "Não só \"poupar mais\""] },
            { title: "Faça a conta", bullets: ["Total / meses = valor por mês", "NGN 120,000 / 8 = NGN 15,000 (exemplo)", "É demais? Mude a data, o objetivo ou os gastos"] },
            { title: "Onde e quando", bullets: ["Grupo, SACCO, banco de microfinanças ou conta", "Guarde o dinheiro de emergência à parte", "Poupe primeiro, no dia em que o dinheiro entra"] }
          ],
          tryIt: "Escreva um objetivo real com um total e uma data. Divida para saber o valor por semana ou por mês e compare com o seu rendimento num mês mau. Mude-o até funcionar.",
          youCanNow: "escrever um plano de poupança com um objetivo, um total, uma data e um valor por semana ou por mês.",
          quickCheck: [
            { objective: "O2", q: "Precisa de KES 24,000 em 6 meses. Quanto poupa cada mês?", options: ["KES 2,400", "KES 6,000", "KES 3,000", "KES 4,000"], answer: 3, why: "24,000 a dividir por 6 dá 4,000." },
            { objective: "O2", q: "Qual é um objetivo de poupança claro?", options: ["\"Poupar mais este ano\"", "\"Uma máquina de costura de GHS 1,500 até junho\"", "\"Ficar rico\"", "\"Parar de gastar\""], answer: 1, why: "Diz o quê, quanto e até quando." }
          ]
        },
        {
          title: "Verificar as regras de um grupo antes de entrar",
          objectives: ["O3"],
          minutes: 5,
          goal: "Verificar os sete pontos principais nas regras escritas de um grupo.",
          text: [
            "Um grupo forte tem regras escritas, muitas vezes chamadas constituição ou estatutos, aceites por todos os membros. Peça para as ver antes de entrar. Se não houver, peça ao grupo para as escrever primeiro.",
            "Verifique sete coisas: 1. Contribuições: quanto, de quanto em quanto tempo e o que acontece se pagar atrasado (multas). 2. Reuniões: quando e onde. 3. Empréstimos: quem pode pedir, quanto, por quanto tempo, a taxa de serviço e o que acontece se um empréstimo não for pago. 4. Multas e disciplina. 5. Saída: como recebe o seu dinheiro de volta se sair ou mudar de terra. 6. Partilha ou ordem de rotação: quando e como. 7. Quem controla o dinheiro: os dirigentes, como são eleitos e quem assina.",
            "Alguns grupos registam-se, por exemplo como grupo de autoajuda, cooperativa ou SACCO; pergunte no serviço local de desenvolvimento social ou de cooperativas o que se aplica onde vive. Um grupo que recebe depósitos do público como negócio pode precisar de uma licença do regulador.",
            "Exemplo: o chama da Grace em Nakuru escreve nas suas regras que a tesoureira não pode ter também as chaves da caixa do dinheiro, e os membros votam cada empréstimo."
          ],
          steps: ["Peça para ver as regras escritas.", "Verifique as contribuições e as multas por atraso.", "Verifique os dias de reunião.", "Verifique as regras dos empréstimos e o que acontece se um não for pago.", "Verifique como sai e recebe o seu dinheiro de volta.", "Verifique a partilha ou a ordem de rotação.", "Verifique quem controla e assina pelo dinheiro."],
          words: [["Constituição (estatutos)", "as regras escritas que um grupo aceita e segue."], ["Dirigentes", "membros eleitos para liderar: muitas vezes um presidente, um secretário e um tesoureiro."]],
          slides: [
            { title: "Peça as regras escritas", bullets: ["Constituição ou estatutos, aceites pelos membros", "Não há regras? Peça ao grupo para as escrever"] },
            { title: "Sete coisas a verificar", bullets: ["Contribuições e multas; reuniões", "Empréstimos e empréstimos não pagos; saída", "Partilha ou rotação; quem controla o dinheiro"] },
            { title: "Registo", bullets: ["Alguns grupos registam-se no local", "Pergunte ao serviço de desenvolvimento social ou de cooperativas", "Receber depósitos do público pode precisar de licença"] }
          ],
          sources: [SASRA, BCEAO_SFD],
          tryIt: "Arranje as regras de um grupo de que faz parte ou onde quer entrar (ou escreva o que sabe). Marque cada um dos sete pontos. Escreva os que faltam como perguntas para a próxima reunião.",
          youCanNow: "verificar os sete pontos principais nas regras de um grupo antes de lhe confiar o seu dinheiro.",
          quickCheck: [
            { objective: "O3", q: "Que pergunta verifica a regra da \"saída\"?", options: ["Quando nos reunimos?", "Quem é o presidente?", "De que cor é a caixa do dinheiro?", "Se eu mudar para outra cidade, como recebo as minhas poupanças de volta?"], answer: 3, why: "A regra da saída diz como um membro recebe o seu dinheiro de volta." },
            { objective: "O3", q: "Um grupo não tem regras escritas. Qual é um passo sensato antes de entrar?", options: ["Pedir aos membros para combinarem e escreverem regras primeiro", "Entrar e esperar que corra bem", "Dar as suas poupanças ao presidente para guardar", "Entrar em dois grupos para estar seguro"], answer: 0, why: "As regras escritas evitam a maioria das discussões sobre dinheiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Poupar juntos",
        questions: [
          { objective: "O1", q: "Num grupo rotativo, quem corre mais risco?", options: ["O membro que recebe o bolo primeiro", "Os membros que recebem o bolo no fim, se os primeiros deixarem de pagar", "O banco", "Ninguém"], answer: 1, why: "Os últimos pagaram durante meses e perdem se os primeiros deixarem de pagar." },
          { objective: "O1", q: "Quer poupar sempre e pedir pequenos empréstimos durante o ano. O que pode servir melhor?", options: ["Só um grupo rotativo", "Um esquema Ponzi", "Guardar o dinheiro debaixo da cama", "Um grupo de poupança e crédito, como uma VSLA"], answer: 3, why: "Uma VSLA deixa os membros poupar e pedir emprestado do fundo comum." },
          { objective: "O2", q: "O seu objetivo é GHS 900 em 3 meses. Quanto cada mês?", options: ["GHS 300", "GHS 450", "GHS 270", "GHS 90"], answer: 0, why: "900 a dividir por 3 dá 300." },
          { objective: "O3", q: "Qual NÃO é uma das sete regras a verificar?", options: ["Regras dos empréstimos", "Partilha ou rotação", "A comida preferida do presidente", "Quem controla o dinheiro"], answer: 2, why: "As sete são contribuições, reuniões, empréstimos, multas, saída, partilha e controlo do dinheiro." },
          { objective: "O3", q: "Porque verificar quem assina e controla o dinheiro?", options: ["Para que uma só pessoa não o possa levar", "Para as reuniões serem mais curtas", "Para baixar as multas", "Para o grupo não pagar impostos"], answer: 0, why: "O controlo partilhado impede um dirigente de usar mal o dinheiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Registos, empréstimos e segurança",
      lessons: [
        {
          title: "Registos e segurança do dinheiro nas reuniões",
          objectives: ["O4"],
          minutes: 5,
          goal: "Registar as contribuições e os empréstimos e verificar que o dinheiro bate certo com os registos.",
          text: [
            "A maioria dos grupos que falham começa com registos fracos ou com uma só pessoa a guardar o dinheiro. Os bons grupos têm registos que todos os membros conseguem seguir.",
            "Ferramentas comuns: cada membro tem uma caderneta com as suas poupanças e empréstimos, o grupo tem um livro de registos e, em muitas VSLA, a caixa do dinheiro tem três fechaduras com três chaves guardadas por três membros diferentes, que não são quem guarda a caixa. Alguns grupos guardam o dinheiro numa conta bancária ou móvel do grupo que precisa de dois ou três signatários.",
            "Em cada reunião: cada contribuição e cada pagamento é contado diante dos membros, escrito na caderneta e no livro de registos, e o total é lido em voz alta. No fim, o dinheiro contado tem de bater certo com os registos. Se não bater, pare e descubra porquê antes de alguém sair.",
            "Exemplo: numa VSLA em Tamale, o secretário lê o saldo em voz alta e dois membros contam o dinheiro. Bate certo: GHS 3,450. A caixa é fechada e as chaves vão para casa com três membros diferentes."
          ],
          steps: ["Conte cada pagamento diante dos membros.", "Escreva-o na caderneta do membro e no livro de registos.", "Leia os totais em voz alta.", "Conte o dinheiro e compare com o livro de registos.", "Se não bater certo, descubra porquê antes de alguém sair.", "Feche o dinheiro; chaves ou poder de assinar com membros diferentes."],
          words: [["Caderneta", "o livro de cada membro, com as suas poupanças e empréstimos."], ["Signatário", "uma pessoa autorizada a assinar pela conta do grupo; os bons grupos precisam de dois ou mais."]],
          slides: [
            { title: "Porque os registos importam", bullets: ["Registos fracos e uma só pessoa com o dinheiro", "são onde a maioria dos grupos falha"] },
            { title: "Ferramentas", bullets: ["Cadernetas e um livro de registos", "Caixa com três fechaduras, três guardas das chaves", "Conta do grupo com dois ou mais signatários"] },
            { title: "Em cada reunião", bullets: ["Conte diante dos membros; escreva", "Leia os totais em voz alta", "O dinheiro tem de bater com os registos antes de alguém sair"] }
          ],
          sources: [VSLA],
          tryIt: "Faça uma tabela simples de registos para uma reunião: nome do membro, poupança paga, empréstimo pago, novo empréstimo. Acrescente três membros de exemplo. Some cada coluna e verifique que os totais são iguais ao dinheiro que contaria.",
          youCanNow: "registar as contribuições e os empréstimos numa reunião e verificar que o dinheiro bate certo com os registos.",
          quickCheck: [
            { objective: "O4", q: "No fim de uma reunião, o dinheiro tem GHS 200 a menos do que o livro de registos. O que faz?", options: ["Ignora; fica certo da próxima vez", "Deixa o tesoureiro explicar no mês que vem", "Para e descobre porquê antes de alguém sair", "Arranca a página"], answer: 2, why: "Uma diferença tem de ser encontrada enquanto todos estão presentes e se lembram bem." },
            { objective: "O4", q: "Porque é que muitas VSLA dão as três chaves a três membros diferentes?", options: ["Para nenhuma pessoa sozinha poder abrir a caixa", "Porque as fechaduras são baratas", "Para as reuniões serem mais longas", "Para quem guarda a caixa a poder abrir em casa"], answer: 0, why: "Com as chaves partilhadas, a caixa só se abre com os membros presentes." }
          ]
        },
        {
          title: "Microfinanças e empréstimos de grupo",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular o total que vai pagar num empréstimo e comparar as datas com o seu rendimento.",
          text: [
            "Os bancos e as instituições de microfinanças emprestam valores mais pequenos a pessoas e pequenos negócios, muitas vezes através de grupos. Na Nigéria, o Banco Central licencia os bancos de microfinanças; no Quénia, o Banco Central licencia os bancos de microfinanças e os fornecedores de crédito digital; no Gana, o Banco do Gana publica a lista das instituições licenciadas; nos países do XOF, como o Senegal e a Costa do Marfim, as microfinanças seguem as regras do BCEAO.",
            "Nunca compare empréstimos só pela taxa de juro que anunciam. Peça o total que vai pagar, por escrito, com todas as comissões, seguros e encargos. Exemplo (valores inventados): pede KES 10,000 emprestados; paga KES 1,000 por semana durante 12 semanas. Total pago: KES 12,000, por isso o empréstimo custa KES 2,000.",
            "Compare as datas de pagamento com o seu rendimento. Um pagamento semanal é difícil se recebe por mês ou por época. Pergunte o que acontece se pagar atrasado: multas, e se isso é comunicado a uma central de crédito.",
            "Muitos empréstimos de grupo usam responsabilidade solidária: se um membro não paga, os outros têm de pagar por ele. Entre só com pessoas em quem confia, e saiba que pode ter de pagar por outra pessoa. Peça emprestado para algo que dá ou poupa dinheiro, não para pagar outro empréstimo."
          ],
          steps: ["Peça o total a pagar, por escrito, com todas as comissões.", "Calcule o custo: total pago menos o valor emprestado.", "Escreva as datas de pagamento.", "Compare cada data com o seu rendimento num mês mau.", "Pergunte pelas multas por atraso e pela central de crédito.", "Pergunte se o empréstimo tem responsabilidade solidária."],
          words: [["Microfinanças", "pequenos empréstimos e serviços de poupança para pessoas e pequenos negócios."], ["Total pago", "todo o dinheiro que paga de volta, com juros e comissões."], ["Responsabilidade solidária", "os membros do grupo têm de pagar por um membro que não paga."], ["Central de crédito", "uma empresa que regista como as pessoas pagam os empréstimos; os credores consultam-na."]],
          slides: [
            { title: "Quem empresta", bullets: ["Bancos e instituições de microfinanças, muitas vezes a grupos", "Licenciados pelo banco central (CBN, CBK, Banco do Gana)", "Países do XOF: regras do BCEAO"] },
            { title: "Compare o total pago", bullets: ["Peça-o por escrito, com todas as comissões", "Exemplo: KES 1,000 x 12 semanas = KES 12,000", "Custo = KES 12,000 - KES 10,000 = KES 2,000"] },
            { title: "Datas e responsabilidade solidária", bullets: ["As datas de pagamento têm de caber no seu rendimento", "Multas por atraso; central de crédito", "Empréstimos de grupo: pode ter de pagar por outros"] }
          ],
          sources: [CBN_MFB, CBK_DCP, BOG, BCEAO_SFD],
          tryIt: "Use este exemplo ou uma oferta real: pede NGN 50,000 emprestados e paga NGN 4,800 por semana durante 12 semanas. Calcule o total pago e o custo. Depois escreva se os pagamentos semanais cabem no seu rendimento.",
          youCanNow: "calcular o total que vai pagar num empréstimo e verificar que as datas cabem no seu rendimento antes de assinar.",
          quickCheck: [
            { objective: "O5", q: "Pede GHS 1,000 emprestados e paga GHS 120 por mês durante 10 meses. Qual é o total pago?", options: ["GHS 1,000", "GHS 1,120", "GHS 1,200", "GHS 120"], answer: 2, why: "120 x 10 = 1,200." },
            { objective: "O5", q: "Num empréstimo de grupo com responsabilidade solidária, um membro deixa de pagar. O que pode acontecer?", options: ["Nada", "Os outros membros têm de pagar por esse membro", "O credor cancela o empréstimo", "Só o presidente do grupo paga"], answer: 1, why: "Responsabilidade solidária quer dizer que os membros cobrem os empréstimos não pagos uns dos outros." }
          ]
        },
        {
          title: "Esquemas Ponzi, falsos credores e o seu plano",
          objectives: ["O6", "O2"],
          minutes: 6,
          goal: "Identificar os sinais de alerta de um esquema Ponzi ou de um falso credor e procurar um fornecedor na lista do regulador.",
          text: [
            "Um esquema Ponzi paga aos primeiros membros com o dinheiro dos novos membros. Acaba sempre por cair, e a maioria das pessoas perde as suas poupanças. Sinais de alerta: promessas de duplicar o seu dinheiro ou ganhos altos garantidos em pouco tempo, pressão para trazer amigos e família, prémios por trazer pessoas, um negócio que ninguém consegue explicar, e promoção em grupos de WhatsApp, TikTok, Instagram ou Telegram e por influenciadores. A SEC da Nigéria (o regulador do mercado de capitais) já alertou muitas vezes contra estes esquemas.",
            "Falsos credores e aplicações de empréstimo: pedem uma taxa antes de dar o empréstimo, pedem o seu PIN ou a sua palavra-passe, exigem acesso a todos os contactos do seu telefone, ou ameaçam e envergonham quem pediu emprestado. Os credores verdadeiros nunca precisam do seu PIN.",
            "Verifique antes de pagar ou partilhar dados. Procure o fornecedor na lista oficial do regulador: a SASRA para as SACCO que recebem depósitos e o Banco Central do Quénia para os bancos de microfinanças e credores digitais no Quénia; o CBN para os bancos de microfinanças e a lista da FCCPC dos credores digitais aprovados na Nigéria; a lista das instituições licenciadas do Banco do Gana; o BCEAO e os ministérios das finanças nos países do XOF. Se não estiver na lista, não o use.",
            "Depois termine o seu plano: objetivo, total, data, valor por semana ou por mês, onde poupa e as respostas da sua folha de verificação sobre o grupo ou a instituição."
          ],
          steps: ["Pergunte: promete ganhos garantidos ou muito altos depressa?", "Pergunte: paga-me para trazer outras pessoas?", "Pergunte: quer uma taxa primeiro, ou o meu PIN?", "Procure-o na lista oficial do regulador.", "Não está na lista, ou há algum sinal de alerta: não pague.", "Escreva o seu plano de poupança mensal e a folha de verificação."],
          words: [["Esquema Ponzi", "uma fraude que paga aos membros antigos com o dinheiro dos novos até cair."], ["Regulador", "o organismo oficial que licencia e supervisiona os fornecedores financeiros, como um banco central."], ["Licenciado", "autorizado oficialmente pelo regulador a fazer este negócio."]],
          slides: [
            { title: "Sinais de alerta de Ponzi", bullets: ["\"Duplique o seu dinheiro\"; ganhos altos garantidos", "Prémios por trazer amigos", "Um negócio que ninguém explica; promovido nas redes sociais"] },
            { title: "Sinais de falso credor", bullets: ["Taxa antes do empréstimo", "Pede o seu PIN ou a palavra-passe", "Quer todos os seus contactos; ameaça quem deve"] },
            { title: "Consulte a lista oficial", bullets: ["Quénia: SASRA, CBK", "Nigéria: CBN, credores aprovados pela FCCPC", "Gana: Banco do Gana; XOF: BCEAO"] },
            { title: "Termine o seu plano", bullets: ["Objetivo, total, data, valor por mês", "Onde poupa", "Respostas da folha de verificação"] }
          ],
          sources: [SEC_NG, SASRA, CBK_DCP, FCCPC, BOG, BCEAO_SFD],
          tryIt: "Tarefa final: escreva o seu plano de poupança mensal com objetivo, total, data, valor por semana ou por mês e onde vai poupar. Acrescente a folha de verificação: as regras do grupo, como o dinheiro e os registos são guardados, a licença (verificada na lista do regulador, se for preciso) e o custo total de qualquer empréstimo.",
          youCanNow: "reconhecer um esquema Ponzi ou um falso credor, procurar um fornecedor na lista oficial e seguir o seu plano de poupança escrito.",
          quickCheck: [
            { objective: "O6", q: "Um grupo de WhatsApp promete duplicar o seu dinheiro em 30 dias e paga-lhe por cada amigo que trouxer. O que é?", options: ["Um grupo de poupança", "Um banco de microfinanças licenciado", "Um grupo rotativo", "Os sinais de um esquema Ponzi"], answer: 3, why: "Ganhos rápidos garantidos e prémios por trazer pessoas são sinais clássicos de Ponzi." },
            { objective: "O6", q: "Uma aplicação de empréstimo pede uma \"taxa de processamento\" antes de enviar o empréstimo. O que faz?", options: ["Não paga; procura-a na lista do regulador", "Paga depressa antes de a oferta acabar", "Paga metade", "Dá o seu PIN em vez disso"], answer: 0, why: "Uma taxa antes do empréstimo é sinal de falso credor; consulte primeiro a lista oficial." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Registos, empréstimos e segurança",
        questions: [
          { objective: "O4", q: "O que deve acontecer a cada contribuição numa reunião?", options: ["O tesoureiro leva-a para casa para contar", "É contada diante dos membros e escrita na caderneta e no livro de registos", "É escrita na semana seguinte", "Vai direta para o telefone do presidente"], answer: 1, why: "Contar e registar diante dos membros mantém os registos honestos." },
          { objective: "O4", q: "Uma conta do grupo deve precisar de:", options: ["Só a assinatura do tesoureiro", "Nenhuma assinatura", "Dois ou mais signatários", "Um PIN novo para cada membro"], answer: 2, why: "Mais de um signatário impede uma pessoa de levar o dinheiro." },
          { objective: "O5", q: "Qual é a melhor forma de comparar dois empréstimos?", options: ["O funcionário mais simpático", "A taxa de juro do anúncio", "A aprovação mais rápida", "O total que vai pagar, com todas as comissões, e datas que cabem no seu rendimento"], answer: 3, why: "O total pago mostra o custo real; as datas mostram se consegue pagar." },
          { objective: "O6", q: "Onde verifica se uma SACCO no Quénia pode receber depósitos?", options: ["Na lista da SASRA das SACCO licenciadas para receber depósitos", "Numa página do Facebook", "Só no folheto da própria SACCO", "Na palavra de um amigo"], answer: 0, why: "A SASRA licencia as SACCO que recebem depósitos e publica a lista." },
          { objective: "O6", q: "Qual é um sinal de alerta de um falso credor?", options: ["Dá o custo total por escrito", "Pede o seu PIN ou uma taxa antes do empréstimo", "Está na lista do banco central", "Explica as multas por atraso"], answer: 1, why: "Os credores verdadeiros nunca precisam do seu PIN e não cobram uma taxa antes de emprestar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Grupos de Poupança e Microfinanças (Chamas, VSLA, Tontinas, Esusu)",
    questions: [
      { objective: "O1", q: "Esusu, susu, tontina e gam'eya são normalmente:", options: ["Bancos de microfinanças", "Grupos de poupança rotativos", "Aplicações de empréstimo", "Companhias de seguros"], answer: 1, why: "São nomes locais para grupos em que os membros recebem o bolo à vez." },
      { objective: "O1", q: "O que faz um grupo de poupança e crédito que um grupo rotativo não faz?", options: ["Empresta as poupanças aos membros e partilha com os ganhos", "Dá o bolo a cada membro à vez", "Nunca se reúne", "Não tem regras"], answer: 0, why: "Uma VSLA ou ASCA tem um fundo de empréstimos e partilha as poupanças mais as taxas de serviço." },
      { objective: "O1", q: "Qual é um risco de um grupo rotativo?", options: ["Paga juros altos", "É licenciado pelo banco central", "Tem uma caixa com três fechaduras", "Os membros que receberam o bolo cedo podem deixar de pagar"], answer: 3, why: "Os primeiros que deixam de pagar prejudicam os membros que ainda esperam." },
      { objective: "O2", q: "Precisa de XOF 60,000 em 12 semanas. Quanto cada semana?", options: ["XOF 6,000", "XOF 12,000", "XOF 4,000", "XOF 5,000"], answer: 3, why: "60,000 a dividir por 12 dá 5,000." },
      { objective: "O2", q: "\"Pague-se a si primeiro\" quer dizer:", options: ["Compre um presente para si", "Pague primeiro ao presidente do grupo", "Peça emprestado antes de poupar", "Poupe no dia em que o dinheiro entra, antes de outros gastos"], answer: 3, why: "Poupar primeiro faz a poupança acontecer antes de o dinheiro ser gasto." },
      { objective: "O2", q: "O seu plano precisa de EGP 900 por mês, mas só consegue poupar EGP 600. O que pode fazer?", options: ["Pedir emprestado a uma aplicação", "Desistir de poupar", "Adiar a data, baixar o objetivo ou cortar gastos", "Entrar num esquema que duplica o dinheiro"], answer: 2, why: "Mude a data, o objetivo ou os seus gastos até o plano caber." },
      { objective: "O2", q: "Porque guardar o dinheiro de emergência separado das poupanças do objetivo?", options: ["Para um problema de repente não esvaziar o seu objetivo", "Porque os bancos exigem", "Para pagar as multas do grupo", "Rende mais"], answer: 0, why: "Uma quantia de emergência à parte protege o objetivo das surpresas." },
      { objective: "O3", q: "O que é a constituição de um grupo?", options: ["O diário do presidente", "Uma aplicação de empréstimo", "As regras escritas que os membros aceitam e seguem", "A caixa do dinheiro"], answer: 2, why: "A constituição ou os estatutos são as regras escritas do grupo." },
      { objective: "O3", q: "Que regra diz o que acontece se o empréstimo de um membro não for pago?", options: ["A regra das reuniões", "A regra dos empréstimos", "A regra da partilha", "Nenhuma das regras"], answer: 1, why: "As regras dos empréstimos dizem quem pede, quanto e o que acontece se um empréstimo não for pago." },
      { objective: "O3", q: "As regras de um grupo não dizem como um membro sai. O que faz?", options: ["Pede ao grupo para acrescentar uma regra de saída antes de entrar", "Entra na mesma", "Sai sem avisar ninguém", "Tira as suas poupanças da caixa"], answer: 0, why: "Uma regra em falta é uma pergunta a resolver antes de confiar o dinheiro ao grupo." },
      { objective: "O4", q: "O que é uma caderneta?", options: ["O livro de um membro com as suas poupanças e empréstimos", "Um passaporte", "Um cartão do banco", "Uma aplicação de empréstimo"], answer: 0, why: "A caderneta de cada membro mostra as suas próprias poupanças e empréstimos." },
      { objective: "O4", q: "No fim de cada reunião:", options: ["O presidente leva o dinheiro para casa sem contar", "O dinheiro contado tem de bater certo com o livro de registos", "Os registos vão para o lixo", "Só o tesoureiro lê os totais"], answer: 1, why: "O dinheiro e os registos têm de bater certo, com os totais lidos em voz alta." },
      { objective: "O4", q: "Porque ler os totais em voz alta nas reuniões?", options: ["Para as reuniões serem mais longas", "Para se mostrar", "Para todos os membros ouvirem e poderem aceitar os números", "Porque é lei em todo o lado"], answer: 2, why: "Ler em voz alta deixa todos os membros, incluindo os que não sabem ler, verificar os números." },
      { objective: "O5", q: "Pede MAD 2,000 emprestados e paga MAD 250 por mês durante 10 meses. Quanto custa o empréstimo?", options: ["MAD 250", "MAD 2,500", "MAD 2,000", "MAD 500"], answer: 3, why: "Total pago 2,500 menos 2,000 emprestados = 500." },
      { objective: "O5", q: "Recebe sobretudo depois da colheita ou na época de muito movimento. O que deve verificar num empréstimo?", options: ["A cor do formulário", "O modelo do telefone do funcionário", "Nada", "As datas de pagamento comparadas com o seu rendimento"], answer: 3, why: "As datas de pagamento têm de caber quando o dinheiro entra." },
      { objective: "O5", q: "Responsabilidade solidária quer dizer:", options: ["Os membros pagam por um membro que não paga", "O banco paga o seu empréstimo", "Ninguém paga", "Pode pedir emprestado duas vezes"], answer: 0, why: "Na responsabilidade solidária, o grupo cobre os empréstimos não pagos." },
      { objective: "O5", q: "O que deve um credor dar-lhe antes de assinar?", options: ["Um telefone grátis", "Só a taxa de juro", "O total a pagar, por escrito, com todas as comissões e datas", "O registo de empréstimos do seu vizinho"], answer: 2, why: "O total e as datas por escrito deixam-no comparar e planear." },
      { objective: "O6", q: "Qual é um sinal de alerta de Ponzi?", options: ["Regras escritas", "Ganhos altos garantidos depressa e prémios por trazer pessoas", "Os membros leem os totais em voz alta", "Uma caixa com três fechaduras"], answer: 1, why: "Ganhos rápidos garantidos e prémios por trazer pessoas são sinais clássicos de Ponzi." },
      { objective: "O6", q: "Na Nigéria, onde verifica se uma aplicação de empréstimo está aprovada?", options: ["Nas avaliações da própria aplicação", "Num grupo de WhatsApp", "Num vídeo do TikTok", "Na lista da FCCPC dos credores digitais registados"], answer: 3, why: "A FCCPC publica o estado do registo dos credores digitais." },
      { objective: "O6", q: "Um fornecedor não está na lista do regulador. O que faz?", options: ["Usa-o só para valores pequenos", "Paga se um amigo o recomendar", "Não o usa", "Dá-lhe o seu PIN para verificar"], answer: 2, why: "Os fornecedores fora da lista não são supervisionados; o seu dinheiro não está protegido." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Objetivo e conta claros", objective: "O2", notYet: "Sem total ou data, ou o valor por mês não chega ao objetivo.", meets: "Objetivo, total, data e valor por semana ou por mês, com contas certas.", exceeds: "Também comparou com o rendimento de um mês mau e guarda o dinheiro de emergência à parte." },
      { name: "Tipo certo de poupança", objective: "O1", notYet: "Não escolheu onde poupar, ou não deu razão.", meets: "Diz onde o dinheiro vai ser poupado e dá uma razão por que serve para o objetivo e um risco.", exceeds: "Compara duas opções (por exemplo um grupo rotativo e uma SACCO) antes de escolher." },
      { name: "Regras do grupo verificadas", objective: "O3", notYet: "Não viu as regras ou verificou menos de quatro dos sete pontos.", meets: "Verificou pelo menos seis dos sete pontos, com os que faltam escritos como perguntas.", exceeds: "Verificou os sete e levou as regras em falta ao grupo." },
      { name: "Registos e segurança do dinheiro", objective: "O4", notYet: "Não diz como o dinheiro e os registos são guardados.", meets: "Diz como o dinheiro é guardado (caixa com três fechaduras ou conta com dois ou mais signatários) e que os totais são lidos em voz alta.", exceeds: "Inclui uma tabela de registos de exemplo que bate certo." },
      { name: "Custo e segurança do empréstimo", objective: "O5", notYet: "Planeia um empréstimo sem o total a pagar.", meets: "Qualquer empréstimo tem o total pago, o custo e as datas comparadas com o rendimento; ou o plano não tem empréstimo.", exceeds: "Também anota as multas por atraso, a central de crédito e a responsabilidade solidária." },
      { name: "Verificação de licença e de burla", objective: "O6", notYet: "O plano tem um fornecedor sem licença ou um esquema com sinais de alerta.", meets: "Qualquer instituição que recebe depósitos ou empresta como negócio foi verificada na lista oficial do regulador, e não há sinais de alerta.", exceeds: "Diz que lista usou e a data em que verificou." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem, aos 30 dias, que poupam cada semana ou cada mês segundo o seu plano",
      "Grupos parceiros que adotam regras escritas, cadernetas e totais lidos em voz alta",
      "Alunos que dizem ter recusado um esquema Ponzi ou um credor sem licença em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, caneta e a calculadora do telefone",
      "A constituição ou as regras de um grupo, se o aluno estiver num grupo",
      "A lista oficial do regulador do seu país (SASRA, CBK, CBN, FCCPC, Banco do Gana, BCEAO), aberta uma vez no telefone ou impressa",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Ideal para fazer dentro de um chama, VSLA, susu, tontina ou grupo de mulheres que já existe: uma lição por reunião, com o teste inicial na primeira reunião.",
      "Use as regras do próprio grupo como texto de prática na Lição 3, e uma reunião de faz de conta com dinheiro a brincar na Lição 4.",
      "Não recomende nenhum banco, SACCO, aplicação ou esquema em particular; ensine os alunos a consultar eles próprios a lista do regulador.",
      "Verifique que as listas dos reguladores estão atualizadas antes da sessão; os nomes e os endereços dos sites podem mudar.",
      "Nunca peça aos alunos para partilhar PIN, palavras-passe ou saldos reais de contas no grupo."
    ]
  }
};
