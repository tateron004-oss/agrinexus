"use strict";

// Koach Learn course (Portuguese translation of shared/retail-sales-cashier.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US stores, US money and US rules (BLS, FDA, FTC, OSHA, US Secret Service, NRF Foundation).

module.exports = {
  id: "retail-sales-cashier-pt",
  lang: "pt",
  translationOf: "retail-sales-cashier",
  category: "Workforce Development",
  name: "Vendas no Comércio e Trabalho de Caixa",
  skills: "Registar uma venda, Contar o troco em voz alta, Verificar documentos e notas grandes, Sugerir artigos sem pressão, Tratar devoluções e clientes zangados, Fazer um turno",
  outcome: "trabalhar numa caixa registadora de loja da abertura ao fecho: registar uma venda, contar o troco certo em voz alta, verificar o documento de identificação e as notas grandes antes de uma venda, sugerir um artigo útil, tratar uma devolução ou um cliente zangado segundo as regras da loja e seguir uma lista de tarefas do turno.",
  about: [
    "Os empregos de caixa e de vendas em lojas estão entre os primeiros empregos mais comuns nos Estados Unidos, e as lojas contratam pessoas sem experiência. São também um bom primeiro passo para quem volta ao trabalho depois de um tempo fora. Este curso prepara você para o primeiro dia.",
    "Você vai praticar uma venda do cumprimento ao recibo, contar o troco como fazem os operadores de caixa treinados, verificar documentos para artigos com limite de idade, reconhecer uma nota falsa e uma burla com cartões-presente, sugerir um artigo sem insistir e tratar devoluções e clientes zangados segundo as regras.",
    "Cada loja tem a sua própria caixa registadora e as suas próprias regras, e a loja dá formação sobre elas. Este curso dá-lhe as competências que servem em qualquer loja, para aprender mais depressa e errar menos. Mostra também um certificado verdadeiro do comércio que você pode obter.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" que pode fazer em casa com moedas, dinheiro de um jogo de tabuleiro ou papelinhos. Há duas perguntas rápidas depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça o seu próprio Cartão do Turno de Caixa numa página: (1) os passos de abertura da sua gaveta, (2) o seu guião de venda do cumprimento ao recibo, com uma frase de sugestão, (3) o registo de cinco vendas de prática em que contou o troco certo, (4) os seus passos para uma venda com limite de idade e para uma nota grande, (5) as três situações em que vai chamar um gerente, (6) os passos de fecho e (7) uma frase com o certificado ou o emprego do comércio que vai procurar e a data em que vai começar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens à procura do primeiro emprego, adultos que voltam para casa depois da prisão e adultos que mudam de profissão ou voltam ao trabalho. Muitos nunca trabalharam numa caixa registadora; alguns já usaram a caixa de autoatendimento, mas nunca estiveram atrás do balcão.",
    startingPoint: "Sabem somar e subtrair dinheiro com alguma ajuda e conhecem as moedas e as notas. Pouca ou nenhuma experiência com uma caixa registadora (sistema POS), uma gaveta de dinheiro, verificação de documentos, regras da loja ou vendas.",
    gap: "As lojas contratam pela atitude e dão formação no trabalho, mas os novos operadores de caixa que são lentos com o troco, inseguros na verificação de documentos ou nervosos com clientes zangados são os que ficam com falta de dinheiro na gaveta ou perdem o emprego cedo. Os alunos precisam dos hábitos básicos antes do primeiro turno para passar na entrevista, terminar a formação depressa e manter o emprego.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 7.º ano)",
      "Aparelhos: um telefone ou um computador da biblioteca; a prática usa moedas, dinheiro de brincar ou papelinhos, sem caixa registadora",
      "Tempo: lições de 4 a 6 minutos",
      "Cada loja tem a sua caixa registadora, as suas políticas e as suas regras; os alunos seguem a formação da sua loja",
      "As regras das vendas com limite de idade mudam de estado para estado; em alguns estados os jovens podem não ter permissão para vender álcool ou tabaco",
      "Segurança: não perseguir ladrões de loja e não resistir a um assalto; seguir a política da loja e ligar para o 911"
    ],
    prerequisites: "Nenhum. Os alunos que querem praticar mais percentagens e dinheiro podem fazer o curso \"Matemática do Dia a Dia para o Trabalho e a Vida\"; o curso \"Excelência no Atendimento ao Cliente\" aprofunda o atendimento."
  },
  // ---- ADDIE: Conceção ----
  objectives: [
    { id: "O1", condition: "Dada uma venda de prática com vários artigos, um cupão e um pagamento", action: "registar uma venda do cumprimento ao recibo pela ordem certa", standard: "com o total certo e um obrigado todas as vezes" },
    { id: "O2", condition: "Dados um total e o dinheiro que o cliente lhe entrega", action: "contar o troco ao cliente com o método de contar para cima", standard: "com o troco certo em 5 de 5 vendas de prática" },
    { id: "O3", condition: "Dado um artigo com limite de idade, uma nota grande ou um cliente que compra muitos cartões-presente", action: "verificar o documento, a nota ou os sinais de alerta antes de terminar a venda", standard: "cumprindo a lei e a política da loja, e chamando um gerente quando algo está errado" },
    { id: "O4", condition: "Dado um cliente à procura de alguma coisa", action: "fazer uma pergunta aberta e sugerir um artigo relacionado com a sua vantagem", standard: "sem pressão e aceitando um não com educação" },
    { id: "O5", condition: "Dada uma devolução, um problema de preço ou um cliente zangado", action: "tratar o problema segundo a política da loja e chamar um gerente quando ultrapassa o seu papel", standard: "mantendo a calma e protegendo-se a si e aos outros" },
    { id: "O6", condition: "Usando o que aprendeu neste curso", action: "escrever uma lista de tarefas do turno numa página para abrir, trabalhar e fechar uma caixa registadora", standard: "com todos os passos em ordem e o próximo passo para o emprego com data" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A caixa registadora e o dinheiro",
      lessons: [
        {
          title: "A venda do cumprimento ao recibo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Registar uma venda de prática pela ordem certa, do cumprimento ao recibo.",
          text: [
            "Os operadores de caixa passam os artigos no leitor, recebem o pagamento, dão o troco e os recibos, põem os artigos nos sacos, tratam devoluções e respondem a perguntas. Segundo o Departamento de Estatísticas do Trabalho dos EUA (BLS), a formação costuma ser feita no trabalho e dura até algumas semanas. Não é preciso diploma nem licença, mas muitas lojas preferem um diploma do ensino secundário ou o GED (o exame que equivale ao ensino secundário nos EUA).",
            "Cada caixa registadora é diferente, mas todas as vendas seguem a mesma ordem: cumprimentar o cliente, passar cada artigo e olhar para o preço no ecrã, aplicar cupões ou descontos, dizer o total ao cliente, receber o pagamento, dar o troco e o recibo, e agradecer.",
            "Olhe para o ecrã enquanto passa os artigos. Se um artigo for registado duas vezes, ou se o preço não for o da etiqueta da prateleira, pare e corrija antes de receber o pagamento. O seu formador vai mostrar como retirar (anular) um artigo e como pedir uma verificação de preço na sua caixa.",
            "Os clientes pagam com dinheiro, cartões (aproximar, inserir ou passar), carteiras digitais no telefone, cartões-presente ou cartões de apoio social. Deixe o cliente usar o seu próprio cartão e o seu PIN. Nunca peça o PIN em voz alta e nunca fique com o cartão de um cliente."
          ],
          steps: [
            "Cumprimente o cliente e olhe-o nos olhos: \"Olá, encontrou tudo o que procurava?\"",
            "Passe cada artigo e veja no ecrã se o nome e o preço estão certos.",
            "Pergunte por cupões ou pelo número de cliente da loja antes de fechar o total.",
            "Diga o total em voz alta: \"O total é $23.40.\"",
            "Receba o pagamento e siga as instruções da caixa registadora.",
            "Dê o troco e o recibo, e agradeça ao cliente."
          ],
          words: [
            ["POS (ponto de venda)", "o sistema da caixa registadora: o ecrã, o leitor de códigos, o leitor de cartões e a gaveta do dinheiro."],
            ["Anular (void)", "retirar um artigo da venda antes de ser pago."],
            ["Verificação de preço", "pedir a um colega ou ao sistema o preço certo de um artigo."],
            ["Recibo", "o registo, impresso ou por e-mail, do que o cliente comprou e pagou."]
          ],
          slides: [
            { title: "O que faz um operador de caixa", bullets: ["Passa os artigos, recebe o pagamento, dá o troco e o recibo", "Põe os artigos nos sacos e trata devoluções", "A formação é no trabalho, normalmente algumas semanas"] },
            { title: "A mesma ordem em cada venda", bullets: ["Cumprimentar, passar os artigos, cupões, total", "Pagamento, troco e recibo", "Agradecer ao cliente"] },
            { title: "Olhe para o ecrã", bullets: ["Artigo registado duas vezes? Corrija antes do pagamento", "Preço diferente da etiqueta? Peça uma verificação de preço", "O seu formador mostra como anular um artigo"] },
            { title: "Pagamentos com cartão", bullets: ["O cliente usa o seu próprio cartão e o seu PIN", "Nunca peça o PIN em voz alta", "Nunca fique com o cartão de um cliente"] }
          ],
          sources: [{ name: "US Bureau of Labor Statistics: Cashiers (Occupational Outlook Handbook)", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }],
          tryIt: "Ponha cinco objetos de casa numa mesa e escreva um preço num papelinho para cada um. Faça de operador de caixa: cumprimente um cliente imaginário, \"passe\" cada artigo lendo o preço em voz alta e escrevendo-o, tire $2 com um cupão, diga o total e agradeça ao cliente. Confirme o total com uma calculadora.",
          youCanNow: "registar uma venda pela ordem certa, apanhar um erro de leitura antes do pagamento e receber um pagamento com cartão em segurança.",
          quickCheck: [
            { objective: "O1", q: "O que vem logo antes de dizer o total ao cliente?", options: ["Perguntar por cupões ou pelo número de cliente", "Dar o recibo", "Contar o troco", "Dizer adeus"], answer: 0, why: "Os cupões e os pontos de cliente têm de entrar antes do total, senão o total fica errado." },
            { objective: "O1", q: "Uma camisa aparece duas vezes no ecrã. O que faz?", options: ["Deixa o cliente descobrir no recibo", "Cobra e corrige da próxima vez", "Para e retira o artigo a mais antes do pagamento", "Tira a segunda camisa da prateleira"], answer: 2, why: "Corrigir uma leitura dupla antes do pagamento mantém o total certo e evita uma devolução mais tarde." }
          ]
        },
        {
          title: "Contar o troco e manter a sua gaveta certa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Contar o troco certo, contando para cima do total até ao valor pago.",
          text: [
            "Mesmo quando a caixa registadora mostra o troco, os operadores de caixa treinados contam-no em voz alta. Isto apanha erros e mostra ao cliente que o troco está certo. Chama-se o método de contar para cima: comece no total e conte para cima até ao valor que o cliente lhe deu.",
            "Exemplo: o total é $13.47 e o cliente dá-lhe $20. Diga \"$13.47\", depois dê 3 moedas de 1 cêntimo (\"$13.50\"), 2 moedas de 25 cêntimos (\"$14\"), uma nota de um dólar (\"$15\") e uma nota de cinco (\"e $20\"). São $6.53 de troco.",
            "Deixe a nota do cliente em cima da gaveta, não dentro, até o troco estar contado. Se ele disser \"Eu dei-lhe uma nota de cinquenta\", os dois podem ver que era uma de vinte.",
            "A sua gaveta (também chamada caixa) começa cada turno com um valor fixo, que você conta com um gerente. No fim é contada outra vez. O dinheiro a mais ou a menos (\"sobra/falta\") é verificado, por isso nunca deixe outra pessoa usar a sua gaveta e nunca misture o seu próprio dinheiro."
          ],
          steps: [
            "Diga o total em voz alta.",
            "Ponha o dinheiro do cliente em cima da gaveta, não dentro.",
            "Conte para cima com as moedas mais pequenas primeiro, dizendo cada novo valor.",
            "Depois conte para cima com as notas até chegar ao valor que ele lhe deu.",
            "Ponha o dinheiro do cliente na gaveta e feche-a."
          ],
          words: [
            ["Método de contar para cima", "contar o troco começando no total e juntando moedas e notas até chegar ao valor pago."],
            ["Gaveta (caixa)", "o tabuleiro do dinheiro na caixa registadora pelo qual um só operador é responsável."],
            ["Sobra/falta", "a diferença entre o que a gaveta devia ter e o que tem de verdade no fim do turno."]
          ],
          slides: [
            { title: "Conte para cima, em voz alta", bullets: ["Comece no total", "Junte moedas, depois notas", "Pare no valor que o cliente lhe deu"] },
            { title: "Exemplo: $13.47 pagos com $20", bullets: ["3 moedas de 1 cêntimo: $13.50", "2 moedas de 25 cêntimos: $14. Um dólar: $15", "Uma nota de cinco: $20. Troco: $6.53"] },
            { title: "Proteja-se", bullets: ["Deixe a nota em cima da gaveta até o troco estar dado", "Depois guarde-a", "Resolve qualquer dúvida do tipo \"Eu dei-lhe uma de cinquenta\""] },
            { title: "A sua gaveta é sua", bullets: ["Conte-a com um gerente no início e no fim", "Mais ninguém usa a sua gaveta", "Nunca misture o seu próprio dinheiro"] }
          ],
          tryIt: "Use moedas verdadeiras ou dinheiro de brincar. Faça estas três vendas em voz alta com o método de contar para cima: total $7.80 pago com $10; total $4.35 pago com $5; total $26.62 pago com $30. Escreva o troco de cada uma e depois confirme: $2.20, $0.65 e $3.38.",
          youCanNow: "contar o troco certo com o método de contar para cima e proteger a sua gaveta contra erros.",
          quickCheck: [
            { objective: "O2", q: "O total é $7.80 e o cliente paga com $10. Que troco conta?", options: ["$3.20", "$2.20", "$2.80", "$1.20"], answer: 1, why: "Duas moedas de 10 cêntimos levam a $8.00 e dois dólares a $10.00, por isso o troco é $2.20." },
            { objective: "O2", q: "Onde deve estar a nota de $20 do cliente enquanto conta o troco?", options: ["No seu bolso", "Debaixo da gaveta", "De volta na mão do cliente", "Em cima da gaveta, onde os dois a podem ver"], answer: 3, why: "Mantê-la à vista até o troco estar dado resolve qualquer dúvida sobre a nota com que pagou." }
          ]
        },
        {
          title: "Documentos, notas grandes e burlas na caixa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Verificar um documento, uma nota grande e os sinais de uma burla com cartões-presente antes de terminar a venda.",
          text: [
            "Alguns artigos têm limite de idade. Pela lei federal dos EUA, ninguém com menos de 21 anos pode comprar tabaco ou cigarros eletrónicos (vapes), e a FDA (a agência dos EUA que controla alimentos, medicamentos e tabaco) diz para pedir um documento com fotografia a quem tenha menos de 30 anos. Para comprar álcool também é preciso ter 21 anos em todos os estados. A idade para VENDER álcool ou tabaco como operador de caixa é decidida por cada estado, e as lojas muitas vezes juntam as suas próprias regras. A sua loja vai dizer-lhe.",
            "Para verificar um documento: compare a fotografia com o rosto, veja se não está caducado e leia a data de nascimento. Uma forma rápida: se hoje for 15 de março de 2027, o cliente tem de ter nascido em 15 de março de 2006 ou antes para ter 21 anos. Se não tiver a certeza, ou se o documento parecer alterado, não venda e chame um gerente. Vender a um menor pode dar multas para si e para a loja.",
            "Para uma nota grande, use as verificações do site uscurrency.gov. Numa nota de $100: incline-a e os sinos da fita azul mudam para 100, e o 100 do canto muda de cor de cobre para verde; ponha-a contra a luz para ver o retrato da marca de água e o fio de segurança; sinta a impressão áspera e em relevo. Se uma nota falhar, não acuse o cliente: chame um gerente. As lojas comunicam as suspeitas de notas falsas ao Serviço Secreto dos EUA.",
            "As burlas com cartões-presente acontecem na caixa. Os burlões dizem às pessoas para comprarem cartões-presente para pagar uma \"taxa do governo\" ou ajudar um \"familiar em apuros\". A FTC (a agência dos EUA que protege os consumidores) diz que nenhuma empresa ou agência verdadeira pede para ser paga com cartões-presente. Se um cliente estiver a comprar muitos cartões enquanto alguém ao telefone lhe diz o que fazer, siga a política da sua loja, que pode ser chamar um gerente ou partilhar esse aviso com gentileza."
          ],
          steps: [
            "Artigo com limite de idade: peça um documento com fotografia se o cliente parecer ter menos de 30 anos.",
            "Compare a fotografia, veja se não está caducado e calcule a idade pela data de nascimento.",
            "Nota grande: incline-a, ponha-a contra a luz e sinta-a.",
            "Cartões-presente: atenção a muitos cartões, pressa ou alguém ao telefone a dar ordens.",
            "Alguma coisa errada: não termine a venda; chame um gerente."
          ],
          words: [
            ["Artigo com limite de idade", "um produto que, por lei, só pessoas acima de uma certa idade podem comprar, como tabaco ou álcool."],
            ["Nota falsa (contrafeita)", "dinheiro falso feito para parecer verdadeiro."],
            ["Marca de água", "uma imagem leve dentro do papel da nota que aparece quando a põe contra a luz."],
            ["Burla com cartões-presente", "um truque em que alguém pressiona uma pessoa a pagar-lhe com os números de cartões-presente."]
          ],
          slides: [
            { title: "Vendas com limite de idade", bullets: ["Tabaco e vapes: 21 anos para comprar (lei federal)", "FDA: peça documento com fotografia a quem tenha menos de 30", "Álcool: 21 anos para comprar; a idade para vender é do seu estado"] },
            { title: "Verificar um documento", bullets: ["A fotografia corresponde ao rosto", "Não está caducado", "Nasceu na data de hoje há 21 anos ou antes", "Na dúvida? Não venda. Chame um gerente."] },
            { title: "Verificar uma nota de $100", bullets: ["Incline: os sinos viram 100; o 100 do canto passa de cobre a verde", "Contra a luz: retrato da marca de água e fio de segurança", "Toque: impressão áspera e em relevo"] },
            { title: "Sinais de burla com cartões-presente", bullets: ["Muitos cartões, pressa, alguém ao telefone a dar ordens", "Nenhuma empresa ou agência verdadeira aceita cartões-presente", "Siga a política da loja; chame um gerente"] }
          ],
          sources: [
            { name: "FDA: Tobacco 21", url: "https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21" },
            { name: "US Currency Education Program: $100 note security features", url: "https://www.uscurrency.gov/denominations/100" },
            { name: "US Currency Education Program: Report a counterfeit", url: "https://www.uscurrency.gov/report-counterfeit" },
            { name: "FTC: Avoiding and reporting gift card scams", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" }
          ],
          tryIt: "Pegue numa nota que tenha (de $1, $5, $10 ou $20). Ponha-a contra a luz, incline-a e sinta-a, e escreva todos os elementos de segurança que encontrar. Depois use a data de hoje para escrever a data de nascimento mais recente com idade suficiente para comprar tabaco.",
          youCanNow: "verificar um documento antes de uma venda com limite de idade, verificar uma nota grande e reconhecer os sinais de uma burla com cartões-presente.",
          quickCheck: [
            { objective: "O3", q: "Um cliente que parece ter uns 25 anos quer comprar vapes. O que faz?", options: ["Vende, porque parece ter mais de 21", "Pergunta a idade e acredita na resposta", "Pede um documento com fotografia e verifica a data de nascimento", "Recusa vender vapes a qualquer pessoa"], answer: 2, why: "A FDA diz para pedir documento com fotografia a quem tenha menos de 30 anos e compre produtos de tabaco." },
            { objective: "O3", q: "O número do canto de uma nota de $100 não muda de cor quando a inclina. O que faz?", options: ["Chama um gerente sem acusar o cliente", "Diz ao cliente que é um criminoso", "Aceita na mesma; deve estar boa", "Rasga-a ao meio"], answer: 0, why: "Uma verificação falhada vai para um gerente; é a loja que trata e comunica as suspeitas de notas falsas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A caixa registadora e o dinheiro",
        questions: [
          { objective: "O1", q: "Qual é a ordem certa de uma venda?", options: ["Pagamento, passar os artigos, cumprimentar, recibo", "Passar os artigos, recibo, cumprimentar, pagamento", "Cumprimentar, passar os artigos, total, pagamento, troco e recibo", "Total, cumprimentar, passar os artigos, agradecer"], answer: 2, why: "Todas as vendas seguem: cumprimentar, passar os artigos, cupões, total, pagamento, troco e recibo, agradecer." },
          { objective: "O1", q: "Um cliente quer pagar com cartão. Qual é o seu papel?", options: ["Deixá-lo usar o seu próprio cartão e PIN, e seguir as instruções da caixa", "Pedir-lhe que diga o PIN para você o escrever", "Ficar com o cartão até a venda terminar", "Escrever o número do cartão no recibo"], answer: 0, why: "Os clientes usam o seu próprio cartão e PIN; os operadores de caixa nunca os pedem nem ficam com eles." },
          { objective: "O2", q: "O total é $4.35 e o cliente paga com $5. Qual é o troco certo?", options: ["$1.35", "$0.75", "$0.55", "$0.65"], answer: 3, why: "Uma moeda de 5 cêntimos até $4.40, uma de 10 até $4.50 e duas de 25 até $5.00 fazem $0.65." },
          { objective: "O3", q: "Hoje é 15 de março de 2027. Para comprar álcool, o cliente tem de ter nascido em ou antes de:", options: ["15 de março de 2009", "15 de março de 2006", "15 de março de 2007", "1 de janeiro de 2006"], answer: 1, why: "21 anos antes de 15 de março de 2027 é 15 de março de 2006." },
          { objective: "O3", q: "Um cliente ao telefone está a comprar $500 em cartões-presente e diz que quem liga é \"do governo\". O que é mais provável?", options: ["Uma prenda normal", "Uma promoção da loja", "Uma burla com cartões-presente", "Um reembolso de impostos"], answer: 2, why: "A FTC diz que nenhuma empresa ou agência do governo verdadeira pede para ser paga com cartões-presente." }
        ]
      }
    },
    {
      name: "Capítulo 2: Vender, atender e fazer um turno",
      lessons: [
        {
          title: "Ajudar os clientes a escolher, sem pressão",
          objectives: ["O4"],
          minutes: 5,
          goal: "Fazer uma pergunta aberta e sugerir um artigo relacionado com a sua vantagem.",
          text: [
            "Vender numa loja é ajudar as pessoas a encontrar o que vieram buscar e alguma coisa que o faça funcionar melhor. Comece com uma pergunta aberta, que não se responde com sim ou não: \"Para que é que vai usar?\"",
            "Depois diga uma vantagem, não só uma característica. Uma característica é o que o artigo tem (\"esta capa de telefone tem a borda levantada\"); uma vantagem é o que faz pelo cliente (\"assim o ecrã fica protegido se cair virado para baixo\").",
            "Uma sugestão (as lojas chamam-lhe venda sugestiva ou artigo adicional) é um artigo relacionado: pilhas com um brinquedo, uma capa com um telefone, meias com sapatos. Sugira um, diga porquê e, se disserem que não, sorria e não insista. Insistir faz as pessoas irem embora e não voltarem.",
            "Nunca invente informações sobre um produto. Se não souber, diga \"Deixe-me confirmar\" e pergunte a um colega ou leia o rótulo."
          ],
          steps: [
            "Cumprimente e faça uma pergunta aberta: \"Para que é que vai usar?\"",
            "Ouça a resposta.",
            "Mostre uma vantagem que combine com o que o cliente disse.",
            "Sugira um artigo relacionado e diga porquê.",
            "Aceite um não com educação: \"Não há problema!\""
          ],
          words: [
            ["Pergunta aberta", "uma pergunta que precisa de mais do que um sim ou um não como resposta."],
            ["Característica", "uma coisa que um produto tem."],
            ["Vantagem", "o que essa característica faz pelo cliente."],
            ["Venda sugestiva (artigo adicional)", "oferecer um artigo relacionado que ajuda o cliente."]
          ],
          slides: [
            { title: "Comece com uma pergunta aberta", bullets: ["\"Para que é que vai usar?\"", "Não \"Posso ajudar?\" (é fácil dizer que não)", "Ouça a resposta"] },
            { title: "Característica e vantagem", bullets: ["Característica: a capa tem a borda levantada", "Vantagem: o ecrã fica protegido se cair virado para baixo", "Os clientes compram vantagens"] },
            { title: "Uma sugestão, sem pressão", bullets: ["Pilhas com um brinquedo, meias com sapatos", "Diga porque ajuda", "Um não está bem: sorria e siga em frente"] }
          ],
          tryIt: "Escolha três objetos da sua casa. Para cada um, escreva uma pergunta aberta que faria a um cliente, uma vantagem e um artigo relacionado que poderia sugerir, com uma razão curta. Diga-os em voz alta.",
          youCanNow: "fazer uma pergunta aberta, explicar uma vantagem e sugerir um artigo sem pressão.",
          quickCheck: [
            { objective: "O4", q: "Qual é uma pergunta aberta?", options: ["\"Posso ajudar?\"", "\"Quer um saco?\"", "\"É tudo?\"", "\"Para que é que vai usar?\""], answer: 3, why: "Precisa de mais do que um sim ou um não, por isso fica a saber o que o cliente precisa." },
            { objective: "O4", q: "Sugere uma capa de telefone e o cliente diz que não, obrigado. O que faz?", options: ["Pergunta mais três vezes", "Sorri, diz \"Não há problema\" e termina a venda", "Diz-lhe que se vai arrepender", "Põe a capa no saco na mesma"], answer: 1, why: "Uma sugestão ajuda; insistir depois de um não afasta os clientes." }
          ]
        },
        {
          title: "Devoluções, problemas de preço e clientes zangados",
          objectives: ["O5"],
          minutes: 6,
          goal: "Tratar uma devolução, um problema de preço ou um cliente zangado segundo a política da loja, e chamar um gerente quando for preciso.",
          text: [
            "Cada loja tem uma política de devoluções: quantos dias, se é preciso recibo e como o dinheiro é devolvido (no cartão, em dinheiro ou como crédito na loja). Aprenda a da sua loja na formação. Siga-a da mesma forma para todos e chame um gerente quando uma devolução estiver fora da política.",
            "Os problemas de preço são comuns: a etiqueta da prateleira diz $4.99 e a caixa diz $5.49. Mantenha a calma, faça uma verificação de preço e siga a regra da sua loja. Não discuta e não mude preços por sua conta.",
            "Com um cliente zangado, use quatro passos: ouça sem interromper, peça desculpa pelo incómodo, resolva o que puder ou chame um gerente, e agradeça. O curso \"Excelência no Atendimento ao Cliente\" aprofunda este tema.",
            "A sua segurança vem primeiro. Não persiga nem agarre um ladrão de loja; avise um gerente ou a segurança. Se um cliente o ameaçar, ou num assalto, não discuta nem lute: siga a formação de segurança da sua loja, entregue o que lhe pedirem e ligue para o 911 quando for seguro. A OSHA (a agência dos EUA para a segurança no trabalho) aponta lidar com dinheiro em contacto com o público e trabalhar tarde da noite como fatores de risco de violência no trabalho."
          ],
          steps: [
            "Devolução: compare o recibo, a data e o artigo com a política.",
            "Problema de preço: faça uma verificação de preço e siga a regra da loja.",
            "Cliente zangado: ouça, peça desculpa, resolva ou chame um gerente, agradeça.",
            "Fora do seu papel ou sem segurança: chame um gerente, a segurança ou o 911."
          ],
          words: [
            ["Política de devoluções", "as regras da loja para aceitar artigos de volta e devolver o dinheiro."],
            ["Crédito na loja", "dinheiro devolvido que só pode ser gasto nessa loja."],
            ["Autorização do gerente", "um gerente aprovar uma coisa que a caixa registadora não deixa o operador fazer sozinho."],
            ["Furto em loja", "levar artigos de uma loja sem pagar."]
          ],
          slides: [
            { title: "Devoluções", bullets: ["Aprenda os dias, a regra do recibo e o tipo de reembolso da sua loja", "As mesmas regras para todos", "Fora da política? Chame um gerente"] },
            { title: "Problemas de preço", bullets: ["Mantenha a calma e faça uma verificação de preço", "Siga a regra da loja", "Nunca mude um preço por sua conta"] },
            { title: "Clientes zangados", bullets: ["Ouça sem interromper", "Peça desculpa pelo incómodo", "Resolva ou chame um gerente, e depois agradeça"] },
            { title: "Segurança primeiro", bullets: ["Nunca persiga nem agarre um ladrão de loja", "Num assalto: não discuta nem lute; siga a sua formação", "Ligue para o 911 quando for seguro"] }
          ],
          sources: [{ name: "OSHA: Workplace violence", url: "https://www.osha.gov/workplace-violence" }],
          tryIt: "Com um amigo, ou sozinho em voz alta, faça esta encenação: um cliente está zangado porque uma etiqueta de $4.99 na prateleira passou na caixa como $5.49. Use os quatro passos. Depois escreva dois tipos de devolução que enviaria a um gerente.",
          youCanNow: "tratar com calma uma devolução, um problema de preço e um cliente zangado, e saber quando chamar um gerente ou o 911.",
          quickCheck: [
            { objective: "O5", q: "Um cliente quer devolver um artigo depois do prazo de devolução da loja. O que faz?", options: ["Chama um gerente", "Devolve o dinheiro na mesma", "Grita que é tarde demais", "Esconde o artigo"], answer: 0, why: "Tudo o que está fora da política vai para um gerente, que pode decidir." },
            { objective: "O5", q: "Vê alguém pôr um carregador de telefone no casaco e sair. O que faz?", options: ["Persegue-o até ao parque de estacionamento", "Agarra-lhe o braço", "Avisa logo um gerente ou a segurança", "Ignora e não diz nada"], answer: 2, why: "A sua segurança vem primeiro; as lojas tratam os furtos através dos gerentes e da segurança." }
          ]
        },
        {
          title: "O seu cartão do turno e o seu caminho para o emprego",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escrever uma lista de tarefas do turno numa página e marcar uma data para o próximo passo para o emprego.",
          text: [
            "Um bom turno tem três partes. Abertura: registe a entrada a horas, conte a gaveta com um gerente, verifique o papel da caixa e os sacos, e limpe o seu posto. Durante o turno: siga a ordem da venda, conte o troco em voz alta, verifique documentos e mantenha a gaveta fechada entre vendas. Fecho: conte a gaveta com um gerente, comunique a sobra ou a falta com honestidade, arrume e registe a saída.",
            "Pôr tudo num cartão ajuda a aprender depressa e mostra a quem contrata que você está preparado. Leve-o à entrevista e explique-o.",
            "Um certificado pode ajudar a sua candidatura. A NRF Foundation (parte da National Retail Federation, a federação nacional do comércio dos EUA) tem o RISE Up, um programa de formação e certificação com certificados como Retail Industry Fundamentals, Customer Service and Sales e Customer Conflict De-escalation. Este curso PREPARA você; não dá um certificado. Veja em nrffoundation.org como se inscrever e quanto custa, ou pergunte a um centro de emprego ou programa local, que pode oferecê-lo.",
            "Depois candidate-se. As lojas contratam o ano todo, e mais antes das festas. Candidate-se pela internet na página de emprego da própria loja ou pessoalmente, e nunca pague a ninguém para conseguir um emprego."
          ],
          steps: [
            "Escreva os seus passos de abertura.",
            "Escreva o seu guião de venda, com uma frase de sugestão.",
            "Junte a sua prática de troco e os passos para documentos e notas grandes.",
            "Escreva três situações em que vai chamar um gerente.",
            "Escreva os seus passos de fecho.",
            "Junte um próximo passo com data: um certificado ou uma candidatura a emprego."
          ],
          words: [
            ["Registar a entrada / a saída", "marcar a hora em que começa e acaba o trabalho."],
            ["Certificado", "um diploma ou distintivo que mostra que passou num teste de uma competência."],
            ["RISE Up", "o programa de formação e certificação para o comércio da NRF Foundation."]
          ],
          slides: [
            { title: "Abertura", bullets: ["Registe a entrada a horas", "Conte a gaveta com um gerente", "Verifique o papel, os sacos e o seu posto"] },
            { title: "Durante o turno e fecho", bullets: ["Ordem da venda, contar o troco, verificar documentos", "Gaveta fechada entre vendas", "Fecho: conte com um gerente e comunique sobra/falta com honestidade"] },
            { title: "Um certificado do comércio", bullets: ["Certificados RISE Up da NRF Foundation", "Retail Industry Fundamentals, Customer Service and Sales", "Este curso prepara você; não dá um certificado"] },
            { title: "O seu próximo passo", bullets: ["Leve o seu cartão do turno às entrevistas", "Candidate-se na página de emprego da própria loja", "Nunca pague a ninguém para conseguir um emprego"] }
          ],
          sources: [
            { name: "NRF Foundation: RISE Up", url: "https://nrffoundation.org/riseup" },
            { name: "US Bureau of Labor Statistics: Cashiers", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }
          ],
          tryIt: "Faça o seu Cartão do Turno de Caixa numa página (papel ou nota no telefone) com as sete partes da tarefa final. Faça cinco vendas com troco contado em voz alta usando dinheiro de brincar e escreva-as no cartão. Termine com uma frase: o certificado ou a loja que vai procurar e a data em que vai começar.",
          youCanNow: "abrir, fazer e fechar um turno de caixa com uma lista de tarefas, e dar um próximo passo com data para um emprego no comércio.",
          quickCheck: [
            { objective: "O6", q: "Qual é a primeira coisa que faz com a gaveta no início do turno?", options: ["Começa a atender clientes", "Pede emprestada a gaveta de um colega", "Junta-lhe o seu próprio dinheiro", "Conta-a com um gerente"], answer: 3, why: "Contar no início marca o valor pelo qual você é responsável." },
            { objective: "O6", q: "O que é que este curso lhe dá para um certificado RISE Up?", options: ["O próprio certificado", "Preparação; quem dá o certificado é a NRF Foundation", "Uma licença do estado", "Nada"], answer: 1, why: "O curso prepara você; o certificado vem do programa RISE Up da NRF Foundation." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Vender, atender e fazer um turno",
        questions: [
          { objective: "O4", q: "Qual é uma vantagem, e não uma característica?", options: ["A capa tem a borda levantada", "O ecrã fica protegido se o telefone cair virado para baixo", "A capa é azul", "A capa é de plástico"], answer: 1, why: "Uma vantagem diz o que a característica faz pelo cliente." },
          { objective: "O4", q: "Um cliente compra um carro de controlo remoto. Qual é uma boa sugestão?", options: ["Uma esfregona", "Um segundo carro que não pediu", "Nada; nunca sugira", "As pilhas de que precisa, para funcionar quando chegar a casa"], answer: 3, why: "Um artigo relacionado, com uma razão, ajuda o cliente." },
          { objective: "O5", q: "A etiqueta da prateleira diz $4.99, mas a caixa diz $5.49. O que faz primeiro?", options: ["Mantém a calma e faz uma verificação de preço", "Muda o preço na caixa por sua conta", "Diz ao cliente que a etiqueta está errada sem verificar", "Recusa vender o artigo"], answer: 0, why: "A verificação de preço encontra o preço certo; depois segue a regra da loja." },
          { objective: "O5", q: "Alguém o ameaça e exige o dinheiro da sua gaveta. O que faz?", options: ["Luta para proteger o dinheiro", "Discute com a pessoa", "Segue a formação de segurança, não resiste e liga para o 911 quando for seguro", "Persegue a pessoa para fora da loja"], answer: 2, why: "A sua segurança vem primeiro; o dinheiro pode ser substituído." },
          { objective: "O6", q: "No fecho, faltam $3 na sua gaveta. O que faz?", options: ["Junta $3 do seu próprio dinheiro", "Comunica com honestidade quando conta com o gerente", "Tira $3 de outra gaveta", "Vai embora sem contar"], answer: 1, why: "A sobra ou a falta é contada e comunicada com honestidade; misturar dinheiro esconde erros e vai contra a política." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Vendas no Comércio e Trabalho de Caixa",
    questions: [
      { objective: "O1", q: "Quando deve perguntar por cupões ou pelo número de cliente?", options: ["Depois de o recibo sair", "Antes de fechar o total da venda", "Na próxima vez que o cliente comprar", "Só se o cliente reclamar"], answer: 1, why: "Os cupões e os pontos entram antes do total, para o total ficar certo." },
      { objective: "O1", q: "O que quer dizer \"anular\" (void) numa caixa registadora?", options: ["Fazer um reembolso", "Abrir a gaveta", "Imprimir um recibo", "Retirar um artigo da venda antes de ser pago"], answer: 3, why: "Anular tira um artigo da venda antes do pagamento." },
      { objective: "O1", q: "Um cliente quer pagar com o seu cartão. O que está certo?", options: ["Ele próprio aproxima ou insere o cartão e escreve o seu PIN", "Você pede o PIN em voz alta", "Você guarda o cartão atrás do balcão", "Você escreve o número do cartão"], answer: 0, why: "O cliente usa o seu próprio cartão e o seu PIN." },
      { objective: "O2", q: "O total é $13.47 e o cliente dá-lhe $20. Qual é o troco?", options: ["$7.53", "$6.47", "$6.53", "$7.47"], answer: 2, why: "3 moedas de 1 cêntimo até $13.50, 2 de 25 até $14, $1 até $15 e $5 até $20: $6.53." },
      { objective: "O2", q: "No método de contar para cima, começa:", options: ["Do zero", "No total da venda", "No valor que o cliente lhe deu", "No valor que está na gaveta"], answer: 1, why: "Conta para cima do total até ao valor pago." },
      { objective: "O2", q: "Porque deve deixar a nota do cliente em cima da gaveta até o troco estar contado?", options: ["Para os dois verem com que nota pagou, se houver dúvida", "Para não se molhar", "Para o próximo cliente a poder usar", "Porque a gaveta está cheia"], answer: 0, why: "Resolve qualquer dúvida do tipo \"Eu dei-lhe uma de cinquenta\"." },
      { objective: "O3", q: "Qual é a idade mínima federal para comprar tabaco ou vapes?", options: ["16", "18", "19", "21"], answer: 3, why: "A lei Tobacco 21 subiu a idade federal para 21 anos em dezembro de 2019." },
      { objective: "O3", q: "A FDA diz para pedir documento com fotografia a quem compra tabaco e parece ter menos de:", options: ["18", "21", "30", "40"], answer: 2, why: "A regra da FDA é pedir documento com fotografia a quem tenha menos de 30 anos." },
      { objective: "O3", q: "Qual é uma verificação que pode fazer numa nota de $100?", options: ["Incliná-la e ver o 100 do canto mudar de cobre para verde", "Cheirá-la", "Dobrá-la ao meio", "Ver a data em que foi impressa"], answer: 0, why: "A tinta que muda de cor é um dos elementos de segurança da nota de $100." },
      { objective: "O3", q: "Quem decide a idade mínima para VENDER álcool como operador de caixa?", options: ["O cliente", "Cada estado, mais as regras da sua loja", "A FTC", "O operador de caixa"], answer: 1, why: "A idade para vender é fixada pela lei do estado, e as lojas muitas vezes juntam as suas próprias regras." },
      { objective: "O4", q: "Que pergunta lhe diz mais sobre o que o cliente precisa?", options: ["\"Posso ajudar?\"", "\"É tudo?\"", "\"Para que é que vai usar?\"", "\"Dinheiro ou cartão?\""], answer: 2, why: "Uma pergunta aberta dá mais do que um sim ou um não." },
      { objective: "O4", q: "O que é a venda sugestiva?", options: ["Dizer aos clientes o que têm de comprar", "Vender artigos que não estão na prateleira", "Subir os preços", "Oferecer um artigo relacionado que ajuda o cliente"], answer: 3, why: "É um artigo adicional útil, não pressão." },
      { objective: "O4", q: "Não sabe se um aquecedor pode ser usado com segurança numa casa de banho. O que diz?", options: ["\"Deixe-me confirmar para si\"", "\"Sim, não há problema\"", "\"Não sei\" e vai embora", "\"Ninguém sabe\""], answer: 0, why: "Nunca invente informações sobre um produto; confirme com um colega ou no rótulo." },
      { objective: "O5", q: "Uma devolução está fora da política da loja. O que faz?", options: ["Devolve o dinheiro na mesma", "Chama um gerente", "Manda o cliente sair", "Dá crédito na loja por sua conta"], answer: 1, why: "As devoluções fora da política vão para um gerente." },
      { objective: "O5", q: "Quais são os quatro passos com um cliente zangado?", options: ["Discutir, explicar, recusar, sair", "Ignorar, esperar, sorrir, fechar", "Ouvir, pedir desculpa, resolver ou chamar um gerente, agradecer", "Ligar para o 911, fechar a loja, esperar, reabrir"], answer: 2, why: "Estes quatro passos acalmam a maioria dos clientes zangados." },
      { objective: "O5", q: "Vê um ladrão de loja a sair. Qual é a escolha segura?", options: ["Correr atrás dele", "Bloquear a porta", "Agarrar o saco", "Avisar um gerente ou a segurança"], answer: 3, why: "Nunca persiga nem agarre; a segurança vem primeiro." },
      { objective: "O5", q: "Durante um assalto, o que é mais importante?", options: ["A sua segurança e a dos outros", "Ficar com o dinheiro", "Saber o nome do assaltante", "Terminar a venda"], answer: 0, why: "Siga a sua formação e não resista; o dinheiro pode ser substituído." },
      { objective: "O6", q: "O que faz parte dos seus passos de fecho?", options: ["Emprestar a gaveta a um colega", "Deixar a gaveta para a manhã", "Contar a gaveta com um gerente e comunicar a sobra/falta com honestidade", "Levar para casa o dinheiro a mais"], answer: 2, why: "Contar e comunicar com honestidade fecha o seu turno corretamente." },
      { objective: "O6", q: "Qual é um programa verdadeiro de certificação do comércio?", options: ["A licença de comércio da FTC", "O RISE Up da NRF Foundation", "O cartão de caixa da OSHA", "O distintivo de vendas do Serviço Secreto"], answer: 1, why: "O RISE Up é o programa de formação e certificação para o comércio da NRF Foundation." },
      { objective: "O6", q: "Um \"recrutador\" diz que tem de pagar $50 para conseguir um emprego de caixa. O que faz?", options: ["Paga depressa", "Paga metade agora", "Dá-lhe os seus dados bancários", "Não paga; candidata-se na página de emprego da própria loja"], answer: 3, why: "Os empregadores verdadeiros nunca pedem que pague para conseguir um emprego." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 6, 8, 10, 13, 17] },
  rubric: {
    mastery: "Atende ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Guião de venda", objective: "O1", notYet: "Faltam passos ou estão fora de ordem (por exemplo, cupões depois do total).", meets: "Cumprimentar, passar os artigos, cupões, total, pagamento, troco e recibo, agradecer, por esta ordem.", exceeds: "Diz também o que fazer quando um artigo passa duas vezes ou o preço não corresponde." },
      { name: "Troco certo", objective: "O2", notYet: "Menos de 5 vendas de prática, ou algum troco errado.", meets: "5 de 5 vendas de prática com o troco contado certo pelo método de contar para cima.", exceeds: "Inclui pelo menos uma venda com moedas e notas e a contagem em voz alta escrita." },
      { name: "Verificação de documentos e notas grandes", objective: "O3", notYet: "Não há passo de documento, ou a regra da idade está errada.", meets: "Verifica a fotografia, a validade e a data de nascimento, e inclinar-luz-tocar nas notas grandes; chama um gerente na dúvida.", exceeds: "Lista também os sinais de alerta da burla com cartões-presente e o passo da loja para eles." },
      { name: "Sugestão útil", objective: "O4", notYet: "Não há sugestão, ou a sugestão é insistente.", meets: "Uma frase de sugestão com uma vantagem e uma forma educada de aceitar um não.", exceeds: "Começa com uma pergunta aberta que leva à sugestão." },
      { name: "Quando chamar um gerente", objective: "O5", notYet: "Menos de três situações, ou diz para perseguir um ladrão de loja.", meets: "Três situações claras (por exemplo, uma devolução fora da política, uma nota que falhou a verificação, um documento duvidoso) e a segurança primeiro.", exceeds: "Junta o que dizer ao cliente enquanto espera pelo gerente." },
      { name: "Passos do turno e próximo passo", objective: "O6", notYet: "Faltam os passos de abertura ou de fecho, ou não há próximo passo com data.", meets: "Passos de abertura, durante o turno e de fecho por ordem, e um passo com data para um certificado ou emprego.", exceeds: "Indica uma loja ou programa concreto e um segundo passo com data." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam a um emprego no comércio ou de caixa em 30 dias (inquérito de seguimento)",
      "Alunos contratados no comércio que continuam empregados depois de 90 dias",
      "Alunos que se inscrevem num certificado RISE Up da NRF Foundation ou o obtêm",
      "Lojas parceiras ou programas de emprego referem menos faltas nas gavetas e formação mais rápida dos novos contratados vindos do curso"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador para ler as lições",
      "Moedas e dinheiro de brincar (ou papelinhos com valores) para praticar o troco",
      "Alguns objetos de casa e etiquetas de preço em papel para as vendas de prática",
      "Papel e caneta, ou uma nota no telefone, para o Cartão do Turno de Caixa",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Em grupo, monte uma caixa registadora a fingir numa mesa e troque os papéis de operador de caixa, cliente e gerente.",
      "Faça a prática do troco como um jogo cronometrado quando os alunos já acertarem; primeiro a exatidão, depois a rapidez.",
      "Use só dinheiro de brincar e documentos inventados; nunca peça aos alunos para mostrarem o seu próprio documento ou dados do cartão.",
      "Confirme a idade para vender álcool e tabaco no seu estado e diga aos alunos jovens o que se aplica a eles.",
      "Avalie o Cartão do Turno de Caixa com a grelha de avaliação e peça aos alunos que o levem às entrevistas simuladas.",
      "Os programas que são parceiros de formação do RISE Up podem ligar este curso ao certificado; consulte nrffoundation.org."
    ]
  }
};
