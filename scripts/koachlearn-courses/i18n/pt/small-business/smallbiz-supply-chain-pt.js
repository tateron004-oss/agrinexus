"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-supply-chain.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Spreadsheet formulas stay exactly as in the English (=IF, "REORDER", "OK").

module.exports = {
  id: "smallbiz-supply-chain-pt",
  lang: "pt",
  translationOf: "smallbiz-supply-chain",
  category: "Small Business",
  name: "Noções Básicas de Cadeia de Abastecimento e Stock",
  skills: "Mapear a sua cadeia de abastecimento, Encontrar e comparar fornecedores, Fazer e verificar encomendas, Contar o stock, Definir o ponto de encomenda e o stock de segurança, Manter o stock numa folha de cálculo com o primeiro a entrar, primeiro a sair",
  outcome: "escolher e comparar fornecedores, fazer e verificar encomendas, contar o seu stock, calcular quando voltar a encomendar e quanto stock extra manter, e gerir um stock simples numa folha de cálculo que usa o primeiro a entrar, primeiro a sair.",
  about: [
    "Ficar sem o seu produto mais vendido faz perder vendas e clientes. Comprar demais prende o dinheiro numa prateleira, e algum stock estraga-se ou passa de moda. Bons hábitos de cadeia de abastecimento e de stock mantêm a quantidade certa dos produtos certos.",
    "Este curso é para donos e trabalhadores de pequenos negócios que compram e vendem produtos ou usam materiais: uma mercearia de bairro, uma carrinha de comida, um salão de beleza, uma banca de produtos da machamba, uma loja online ou uma empresa de limpeza. Você vai mapear a sua cadeia de abastecimento, encontrar e comparar fornecedores, fazer e verificar encomendas, contar o stock, calcular um ponto de encomenda e um stock de segurança, e montar uma folha de cálculo simples que avisa quando voltar a encomendar.",
    "Só precisa de papel e caneta ou de uma folha de cálculo gratuita, como o Google Sheets ou o Microsoft Excel na web. Os exemplos usam números simples, por isso consegue acompanhar mesmo que a matemática não seja a sua preferida.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa que você faz logo. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Monte uma folha de cálculo de stock simples para cinco produtos que compra ou vende, com colunas para produto, SKU, fornecedor principal, fornecedor de reserva, custo unitário, em stock, consumo médio diário, prazo de entrega em dias, stock de segurança, ponto de encomenda (calculado com uma fórmula) e um aviso de encomenda, e escreva como vai manter o primeiro a entrar, primeiro a sair na prateleira.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos e gerentes de pequenos negócios que compram e vendem produtos ou usam materiais, como lojas, mercearias de bairro, restaurantes, salões de beleza, vendedores de mercado e vendedores online, muitos deles de minorias.",
    startingPoint: "Compram stock e materiais com regularidade e conhecem os seus produtos mais vendidos. A maioria encomenda por hábito ou de memória, raramente conta o stock com um horário certo e nunca usou um ponto de encomenda nem uma folha de cálculo de stock.",
    gap: "Ficar sem os produtos mais vendidos faz perder vendas, e comprar demais prende o dinheiro e deixa stock estragado ou por vender. Os alunos precisam de hábitos simples e de uma folha de cálculo que lhes digam o que encomendar, quando e quanto, e que apanhem erros e perdas.",
    constraints: [
      "Matemática básica: multiplicação e fórmulas simples de folha de cálculo, explicadas passo a passo",
      "Aparelhos: um telefone ou computador com uma folha de cálculo gratuita, como o Google Sheets ou o Excel na web",
      "Tempo: cerca de 60 minutos no total, e a contagem é feita no horário do próprio aluno",
      "Risco de burla de fornecedores novos que pedem transferências bancárias, cartões-presente ou criptomoedas",
      "Privacidade: não é preciso pôr preços de fornecedores nem dados privados do negócio em ferramentas de IA"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os seus cinco produtos principais", action: "desenhar a sua cadeia de abastecimento e identificar os pontos fracos", standard: "com um fornecedor de reserva ou stock extra planeado para cada ponto fraco" },
    { id: "O2", condition: "Com um produto que você compra", action: "comparar três fornecedores pelo custo final, encomenda mínima, prazo de entrega, condições de pagamento e confiança", standard: "com um orçamento escrito de cada um e os sinais de alerta verificados" },
    { id: "O3", condition: "Com uma encomenda para fazer", action: "escrever uma nota de encomenda e verificar a entrega com ela", standard: "com cada problema escrito na guia de entrega e comunicado no mesmo dia" },
    { id: "O4", condition: "Com o seu stock e os seus registos", action: "contar o seu stock e encontrar a diferença em relação aos seus registos", standard: "com cada diferença contada de novo por uma segunda pessoa" },
    { id: "O5", condition: "Com o consumo diário e o prazo de entrega de um produto", action: "calcular o stock de segurança e o ponto de encomenda desse produto", standard: "acertando o ponto de encomenda com a fórmula" },
    { id: "O6", condition: "Usando uma folha de cálculo gratuita", action: "montar uma folha de stock que avisa que produtos encomendar e planear como manter o primeiro a entrar, primeiro a sair na prateleira", standard: "com o ponto de encomenda e o estado calculados por fórmulas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Fornecedores e encomendas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mapear a sua cadeia de abastecimento",
          minutes: 5,
          goal: "Desenhar a cadeia de abastecimento dos seus produtos principais e ver onde ela pode falhar.",
          text: [
            "Uma cadeia de abastecimento é cada passo que leva um produto até ao seu cliente: o fabricante, algum grossista ou distribuidor, o transporte, a sua prateleira ou armazém e, no fim, o cliente. Até um pequeno negócio tem uma.",
            "Comece pelos seus cinco produtos principais: os que trazem mais dinheiro ou sem os quais não consegue trabalhar. Para cada um, escreva a quem compra, como chega até si, quanto tempo demora e onde o guarda.",
            "Depois procure os pontos fracos. Compra um produto importante a um só fornecedor? Vem de longe? Estraga-se depressa? É de época? Um ponto fraco é onde deve manter stock extra ou ter um fornecedor de reserva preparado.",
            "Um assistente de IA pode ajudá-lo a pensar no que pode correr mal com cada produto, como um fornecedor fechar, um preço subir de repente ou um atraso no transporte. Quem decide que riscos são reais para o seu negócio é você."
          ],
          steps: ["Faça a lista dos seus cinco produtos principais.", "Para cada um, escreva o fornecedor, como é enviado, quanto tempo demora e onde o guarda.", "Desenhe setas: fornecedor, transporte, você, cliente.", "Faça um círculo nos pontos fracos: um só fornecedor, longe, estraga-se depressa, de época.", "Escreva uma solução para cada ponto fraco."],
          words: [["Cadeia de abastecimento", "todos os passos que levam um produto do fabricante até ao seu cliente."], ["Fornecedor", "um negócio a quem você compra produtos ou materiais."], ["Grossista ou distribuidor", "um negócio que compra em grande quantidade aos fabricantes e vende a outros negócios."], ["Ponto fraco", "um passo onde algo pode correr mal com facilidade."]],
          slides: [
            { title: "O que é uma cadeia de abastecimento", bullets: ["Fabricante, grossista, transporte", "A sua prateleira ou armazém", "O seu cliente"] },
            { title: "Mapeie os seus cinco produtos principais", bullets: ["A quem compra", "Como chega até si e quanto tempo demora", "Onde o guarda"] },
            { title: "Encontre os pontos fracos", bullets: ["Um só fornecedor", "Longe ou transporte lento", "Estraga-se depressa ou é de época"] },
            { title: "Resolva os pontos fracos", bullets: ["Mantenha um pouco de stock extra", "Tenha um fornecedor de reserva preparado"] }
          ],
          tryIt: "Desenhe numa só folha a cadeia de abastecimento dos seus cinco produtos principais. Faça um círculo em cada ponto fraco e escreva ao lado uma solução, como encontrar um fornecedor de reserva ou manter uma semana extra de stock.",
          youCanNow: "mapear a cadeia de abastecimento dos seus produtos mais importantes e mostrar onde ela pode falhar.",
          quickCheck: [
            { objective: "O1", q: "Que produtos deve mapear primeiro?", options: ["Os seus cinco produtos principais, que trazem mais dinheiro ou sem os quais não consegue trabalhar", "Todos os produtos que já vendeu", "Só os produtos em promoção", "Os produtos que os seus concorrentes vendem"], answer: 0, why: "Comece pelos seus cinco produtos principais em dinheiro ou importância." },
            { objective: "O1", q: "O seu produto principal vem de longe e estraga-se depressa. O que faz?", options: ["Ignora", "Marca-o como ponto fraco e planeia um fornecedor de reserva ou stock extra", "Deixa de o vender já", "Deixa a IA decidir que riscos são reais"], answer: 1, why: "Num ponto fraco mantém stock extra ou prepara um fornecedor de reserva; quem decide que riscos são reais é você." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar e comparar fornecedores",
          minutes: 6,
          goal: "Encontrar três fornecedores possíveis para um produto e compará-los em mais do que o preço.",
          text: [
            "Onde encontrar fornecedores: fabricantes e marcas (pergunte quem distribui na sua zona), grossistas e distribuidores, feiras comerciais, associações do setor, machambas e produtores locais, e outros donos de negócios da sua área. Pesquise na internet o nome do produto mais a palavra grossista ou distribuidor.",
            "Compare mais do que o preço. Veja o preço unitário, a quantidade mínima de encomenda, o prazo de entrega, o custo do transporte, as condições de pagamento, a qualidade e a confiança que merecem. Some o transporte e as taxas ao preço para ter o custo final, o custo real de cada unidade quando chega até si.",
            "Peça a cada fornecedor um orçamento escrito e, se puder, uma amostra. Pergunte a outros clientes ou veja avaliações. Tenha pelo menos um fornecedor de reserva para cada produto importante.",
            "Tenha cuidado com fornecedores novos que só aceitam transferências bancárias, cartões-presente ou criptomoedas, que têm preços muito abaixo de todos os outros ou que o apressam. Verifique a morada e o número de telefone deles e comece com uma encomenda pequena."
          ],
          steps: ["Faça a lista de três fornecedores possíveis para um produto.", "Peça a cada um orçamento escrito: preço unitário, encomenda mínima, prazo de entrega, transporte e condições de pagamento.", "Calcule o custo final por unidade de cada um.", "Peça uma amostra e veja avaliações ou referências.", "Escolha um fornecedor principal e um de reserva."],
          words: [["Quantidade mínima de encomenda (MOQ)", "a encomenda mais pequena que um fornecedor aceita. MOQ é a sigla em inglês."], ["Prazo de entrega", "o tempo entre fazer a encomenda e ter os produtos na mão."], ["Custo final", "o custo total de uma unidade quando chega até si: preço mais transporte e taxas."], ["Condições de pagamento", "quando tem de pagar; por exemplo, Net 30 quer dizer pagar no prazo de 30 dias."], ["Orçamento", "uma oferta de preço por escrito de um fornecedor."]],
          slides: [
            { title: "Onde encontrar fornecedores", bullets: ["Fabricantes, grossistas e distribuidores", "Feiras comerciais e associações do setor", "Produtores locais e outros donos de negócios"] },
            { title: "Compare mais do que o preço", bullets: ["Preço unitário e encomenda mínima", "Prazo de entrega e transporte", "Condições de pagamento, qualidade, confiança"] },
            { title: "Custo final", bullets: ["Preço + transporte + taxas", "Divida pelo número de unidades", "O custo real de cada unidade"] },
            { title: "Proteja-se", bullets: ["Peça orçamentos escritos e amostras", "Tenha um fornecedor de reserva", "Evite negócios só por transferência, baratos demais ou à pressa"] }
          ],
          tryIt: "Escolha um produto que compra. Encontre três fornecedores possíveis e preencha uma pequena tabela: preço unitário, encomenda mínima, prazo de entrega, transporte, condições de pagamento e custo final por unidade. Faça um círculo na sua escolha principal e na de reserva. Exemplo: 100 unidades a $2.00 com $30 de transporte dão um custo final de $2.30 por unidade.",
          youCanNow: "encontrar fornecedores, compará-los pelo custo final, prazo de entrega, condições e confiança, e escolher um fornecedor principal e um de reserva.",
          quickCheck: [
            { objective: "O2", q: "Qual é um bom sítio para encontrar fornecedores?", options: ["Um anúncio qualquer nas redes sociais que promete produtos grátis", "Só o site mais barato que encontrar", "Feiras comerciais e associações do setor", "E-mails de desconhecidos a pedir cartões-presente"], answer: 2, why: "Feiras comerciais, associações, grossistas e outros donos de negócios são bons sítios para encontrar fornecedores." },
            { objective: "O2", q: "Um fornecedor novo tem um preço ótimo. O que faz antes de uma encomenda grande?", options: ["Encomenda stock para um ano para garantir o preço", "Paga logo por transferência", "Não pede orçamento para poupar tempo", "Pede um orçamento escrito e uma amostra, verifica a morada e o telefone e começa com pouco"], answer: 3, why: "Peça um orçamento escrito e uma amostra, verifique o fornecedor e comece com uma encomenda pequena." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer e verificar encomendas",
          minutes: 5,
          goal: "Escrever uma nota de encomenda clara e verificar uma entrega com ela.",
          text: [
            "Uma nota de encomenda (PO, sigla em inglês) é a sua encomenda por escrito a um fornecedor. Evita confusões. Tem um número de encomenda, a data, o fornecedor, cada produto com o seu código, a quantidade, o preço, a data e a morada de entrega e as condições de pagamento.",
            "Quando a entrega chegar, verifique-a antes de assinar ou de a arrumar. Conte as caixas e as unidades, confirme que os produtos e os tamanhos são os da nota de encomenda, veja se há estragos e verifique os prazos de validade da comida e de outros produtos que se estragam.",
            "Escreva qualquer problema na guia de entrega e avise o fornecedor no mesmo dia, com fotografias. Não pague o que não recebeu.",
            "Guarde juntas cada nota de encomenda, a guia de entrega e a fatura. Conferir as três antes de pagar chama-se conferência tripla, e apanha erros e cobranças a mais."
          ],
          steps: ["Escreva uma nota de encomenda com número, data, fornecedor, produtos, quantidades, preços, data de entrega e condições.", "Quando a entrega chegar, conte-a e compare-a com a nota de encomenda.", "Veja se há estragos e verifique os prazos de validade.", "Escreva os problemas na guia de entrega, tire fotografias e avise o fornecedor nesse dia.", "Antes de pagar, confira a nota de encomenda, a guia de entrega e a fatura."],
          words: [["Nota de encomenda (PO)", "a sua encomenda por escrito a um fornecedor. PO é a sigla em inglês."], ["Guia de entrega", "o papel que vem com a entrega e lista o que foi enviado."], ["Fatura", "a conta do fornecedor."], ["Conferência tripla", "verificar que a nota de encomenda, a guia de entrega e a fatura batem certo antes de pagar."]],
          slides: [
            { title: "Uma nota de encomenda clara", bullets: ["Número, data e fornecedor", "Produtos, códigos, quantidades e preços", "Data e morada de entrega, e condições"] },
            { title: "Verifique cada entrega", bullets: ["Conte caixas e unidades", "Compare produtos e tamanhos com a nota de encomenda", "Veja estragos e prazos de validade"] },
            { title: "Há problemas?", bullets: ["Escreva-os na guia de entrega", "Fotografias, e avise o fornecedor no mesmo dia", "Não pague o que não recebeu"] },
            { title: "Conferência tripla", bullets: ["Nota de encomenda + guia de entrega + fatura", "Confira as três antes de pagar"] }
          ],
          tryIt: "Escreva uma nota de encomenda de exemplo para um produto da sua tabela de fornecedores, com todas as partes desta lição. Depois escreva uma lista de verificação de cinco linhas para usar da próxima vez que chegar uma entrega.",
          youCanNow: "escrever uma nota de encomenda clara, verificar uma entrega com ela e conferir os papéis antes de pagar.",
          quickCheck: [
            { objective: "O3", q: "O que deve estar numa nota de encomenda?", options: ["Cada produto com o seu código, quantidade e preço", "Os nomes dos seus clientes", "A sua palavra-passe do banco", "As suas metas de vendas"], answer: 0, why: "Uma nota de encomenda tem o número, a data, o fornecedor, os produtos com códigos, as quantidades, os preços, a entrega e as condições." },
            { objective: "O3", q: "Chega uma caixa de iogurtes com o prazo de validade já passado. O que faz?", options: ["Põe-na depressa na prateleira", "Escreve na guia, tira fotografias, avisa o fornecedor nesse dia e não a paga", "Assina a guia e reclama no mês seguinte", "Deita-a fora e não diz nada"], answer: 1, why: "Verifique as datas antes de assinar, escreva os problemas na guia e não pague o que não recebeu em bom estado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Fornecedores e encomendas",
        questions: [
          { objective: "O1", q: "Você compra o seu produto mais vendido a um só fornecedor. Qual é o risco?", options: ["Nenhum", "Se esse fornecedor tiver um problema, você fica sem stock", "Os seus preços vão sempre baixar", "Os clientes vão comprar mais"], answer: 1, why: "Um só fornecedor é um ponto fraco; um fornecedor de reserva protege-o." },
          { objective: "O2", q: "O que é o prazo de entrega?", options: ["O tempo entre encomendar e ter os produtos na mão", "O tempo que um cliente espera na fila", "Quanto tempo um produto dura na prateleira", "O horário de funcionamento do fornecedor"], answer: 0, why: "O prazo de entrega é quanto tempo uma encomenda demora a chegar." },
          { objective: "O2", q: "O fornecedor A vende 100 unidades por $200 com $50 de transporte. Qual é o custo final por unidade?", options: ["$2.00", "$2.25", "$0.50", "$2.50"], answer: 3, why: "$200 mais $50 são $250; a dividir por 100 unidades dá $2.50 cada." },
          { objective: "O2", q: "Um fornecedor novo tem preços muito baixos e só aceita cartões-presente. O que faz?", options: ["Encomenda muito logo", "Paga com cartões-presente", "Tem cuidado: verifica o fornecedor e evita essa forma de pagamento", "Envia os seus dados de acesso ao banco"], answer: 2, why: "Pagamento só com cartões-presente e preços baixos demais são sinais de alerta de burla." },
          { objective: "O3", q: "Faltam duas caixas numa entrega. O que deve fazer?", options: ["Assinar e não dizer nada", "Pagar tudo na mesma", "Deitar fora a guia de entrega", "Escrever na guia, tirar fotografias e avisar o fornecedor nesse dia"], answer: 3, why: "Registar os problemas logo permite-lhe receber aquilo que pagou." }
        ]
      }
    },
    {
      name: "Capítulo 2: Controlo do stock",
      lessons: [
        {
          objectives: ["O4"],
          title: "Contar o seu stock",
          minutes: 5,
          goal: "Fazer uma contagem certa do seu stock e encontrar a diferença em relação aos seus registos.",
          text: [
            "O stock são os produtos e materiais que você tem. Os seus registos dizem quanto deveria ter; uma contagem mostra quanto tem de verdade. A diferença chama-se muitas vezes quebra: perda por roubo, estragos, produtos estragados ou erros.",
            "Uma contagem física completa é contar tudo, muitas vezes uma ou duas vezes por ano, com o negócio fechado. Uma contagem cíclica é contar alguns produtos todas as semanas, para que cada produto seja contado ao longo do tempo. Conte com mais frequência os produtos de maior valor ou que se vendem mais depressa.",
            "Para contar bem: dê a cada produto um SKU (um código curto), conte na mesma unidade em que compra e vende, conte prateleira a prateleira e peça a uma segunda pessoa para contar de novo tudo o que não bater certo. Escreva a contagem, a data e quem contou.",
            "Depois compare a sua contagem com os seus registos. Descubra porque houve diferenças grandes e corrija os registos para ficarem iguais à contagem real."
          ],
          steps: ["Dê a cada produto um SKU e uma unidade, como unidade, caixa ou quilo.", "Escolha uma contagem completa ou contagens cíclicas semanais.", "Conte prateleira a prateleira e escreva a contagem, a data e quem contou.", "Peça a uma segunda pessoa para contar de novo qualquer diferença.", "Compare com os seus registos, descubra as razões das diferenças grandes e atualize os registos."],
          words: [["Stock", "os produtos e materiais que você tem no negócio."], ["SKU", "do inglês stock keeping unit: um código curto para cada produto que tem em stock."], ["Contagem cíclica", "contar alguns produtos de cada vez, com um horário regular."], ["Quebra", "stock perdido por roubo, estragos, produtos estragados ou erros."]],
          slides: [
            { title: "Registos e realidade", bullets: ["Registos: o que deveria ter", "Contagem: o que tem de verdade", "A diferença é a quebra"] },
            { title: "Duas formas de contar", bullets: ["Contagem completa: tudo, uma ou duas vezes por ano", "Contagem cíclica: alguns produtos todas as semanas", "Conte mais vezes os de valor e os que vendem depressa"] },
            { title: "Conte bem", bullets: ["Um SKU e uma unidade para cada produto", "Prateleira a prateleira; escreva a data e quem contou", "Conte de novo qualquer diferença"] },
            { title: "Depois da contagem", bullets: ["Compare com os seus registos", "Descubra as razões das diferenças grandes", "Atualize os registos"] }
          ],
          tryIt: "Escolha cinco produtos. Dê a cada um SKU e uma unidade. Conte-os agora e escreva a contagem, a data e o seu nome. Se tiver registos, compare e escreva a diferença de cada um.",
          youCanNow: "contar o seu stock com exatidão, fazer contagens cíclicas e encontrar a quebra comparando as contagens com os registos.",
          quickCheck: [
            { objective: "O4", q: "O que é uma contagem física completa?", options: ["Contar uma prateleira", "Contar só os produtos caros", "Contar tudo, muitas vezes uma ou duas vezes por ano", "Adivinhar a partir das vendas"], answer: 2, why: "Uma contagem física completa é contar tudo, muitas vezes uma ou duas vezes por ano." },
            { objective: "O4", q: "Encontra uma diferença grande entre a contagem e os registos. O que faz depois de contar de novo?", options: ["Muda a contagem para ficar igual aos registos", "Ignora", "Apaga o produto", "Descobre porque aconteceu e corrige os registos para ficarem iguais à contagem real"], answer: 3, why: "Descubra porque houve diferenças grandes e corrija os registos para ficarem iguais à contagem real." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ponto de encomenda e stock de segurança",
          minutes: 6,
          goal: "Calcular quando voltar a encomendar um produto e quanto stock extra manter.",
          text: [
            "O ponto de encomenda é o nível de stock que lhe diz para encomendar outra vez. Se encomendar quando chegar a ele, o stock novo deve chegar antes de ficar sem nada.",
            "Ponto de encomenda = consumo médio diário x prazo de entrega em dias + stock de segurança. Exemplo: vende 10 sacos de arroz por dia, e o seu fornecedor demora 4 dias a entregar. Sem nada extra, precisa de 10 x 4 = 40 sacos para aguentar até a encomenda chegar.",
            "O stock de segurança é stock extra para surpresas: um dia de muito movimento ou um camião atrasado. Uma forma simples: decida quantos dias extra quer cobrir e multiplique pelo consumo diário. Com 2 dias extra, o stock de segurança é 10 x 2 = 20 sacos. Então o ponto de encomenda é 40 + 20 = 60 sacos. Quando chegar a 60, encomende.",
            "Mantenha mais stock de segurança para os produtos mais importantes, para os que têm prazos de entrega longos ou pouco certos e para os que compra a um só fornecedor. Mantenha menos para os que se estragam depressa ou custam muito a guardar. Reveja os números de poucos em poucos meses, porque as vendas e os prazos de entrega mudam."
          ],
          steps: ["Encontre o consumo médio diário: unidades usadas em 30 dias a dividir por 30.", "Saiba o prazo de entrega do seu fornecedor em dias.", "Escolha os dias extra a cobrir e multiplique pelo consumo diário: isso é o stock de segurança.", "Ponto de encomenda = consumo diário x prazo de entrega + stock de segurança.", "Reveja os números de poucos em poucos meses."],
          words: [["Ponto de encomenda", "o nível de stock que lhe diz para encomendar outra vez."], ["Stock de segurança", "stock extra guardado para surpresas, como dias de muito movimento ou entregas atrasadas."], ["Consumo médio diário", "quantas unidades usa ou vende num dia normal."]],
          slides: [
            { title: "O ponto de encomenda", bullets: ["O nível que lhe diz para encomendar", "O stock novo chega antes de ficar sem nada"] },
            { title: "A fórmula", bullets: ["Consumo diário x prazo de entrega + stock de segurança"] },
            { title: "Exemplo resolvido", bullets: ["10 sacos por dia, prazo de 4 dias: 40 sacos", "Stock de segurança, 2 dias extra: 20 sacos", "Ponto de encomenda: 60 sacos"] },
            { title: "Quanto stock de segurança", bullets: ["Mais: produtos importantes, fornecedores lentos ou pouco certos", "Menos: produtos que se estragam ou custam muito a guardar", "Reveja de poucos em poucos meses"] }
          ],
          tryIt: "Para um produto, encontre o consumo médio diário e o prazo de entrega. Escolha os dias extra a cobrir. Calcule o stock de segurança e o ponto de encomenda e escreva-os num cartão que fica junto desse produto.",
          youCanNow: "calcular o ponto de encomenda e o stock de segurança de um produto e saber quando manter mais ou menos stock extra.",
          quickCheck: [
            { objective: "O5", q: "Usa 6 unidades por dia e quer cobrir 3 dias extra. Qual é o stock de segurança?", options: ["18", "9", "3", "63"], answer: 0, why: "O stock de segurança é os dias extra vezes o consumo diário: 3 x 6 = 18." },
            { objective: "O5", q: "O prazo de entrega do seu fornecedor passa de 4 para 8 dias. O que faz?", options: ["Mantém o mesmo ponto de encomenda", "Calcula de novo o ponto de encomenda com o novo prazo de entrega", "Deixa de usar stock de segurança", "Só encomenda quando ficar sem nada"], answer: 1, why: "Reveja os números quando os prazos de entrega mudam, porque o ponto de encomenda depende deles." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Stock numa folha de cálculo e primeiro a entrar, primeiro a sair",
          minutes: 6,
          goal: "Montar uma folha de cálculo que avisa que produtos encomendar e manter o stock a rodar pelo primeiro a entrar, primeiro a sair.",
          text: [
            "Uma folha de cálculo gratuita, como o Google Sheets ou o Microsoft Excel na web, consegue gerir o stock de um pequeno negócio. Faça uma linha por produto e estas colunas: Produto, SKU, Fornecedor principal, Fornecedor de reserva, Custo unitário, Em stock, Consumo diário, Prazo de entrega (dias), Stock de segurança, Ponto de encomenda e Estado.",
            "Deixe a folha de cálculo fazer as contas. Se o Consumo diário estiver na coluna G, o Prazo de entrega na H e o Stock de segurança na I, o ponto de encomenda em J2 é =G2*H2+I2. O estado em K2 pode ser =IF(F2<=J2,\"REORDER\",\"OK\"), que mostra REORDER (encomendar, em inglês) quando o Em stock (coluna F) está igual ou abaixo do ponto de encomenda. Copie as fórmulas para baixo. Atualize o Em stock depois de cada contagem ou entrega.",
            "Primeiro a entrar, primeiro a sair (FIFO, sigla em inglês) quer dizer que vende ou usa primeiro o stock mais antigo. Isso evita que a comida e outros produtos passem do prazo no fundo da prateleira. Quando chegar stock novo, ponha-o atrás ou por baixo do stock mais antigo e escreva nas caixas a data em que chegaram.",
            "Um assistente de IA pode ajudá-lo a escrever ou corrigir uma fórmula de folha de cálculo. Descreva as suas colunas por palavras; não precisa de partilhar os preços dos seus fornecedores nem outros dados privados do negócio."
          ],
          steps: ["Abra uma folha de cálculo gratuita e escreva os onze títulos das colunas.", "Preencha cinco produtos.", "Na coluna Ponto de encomenda, escreva =G2*H2+I2 e copie para baixo.", "Na coluna Estado, escreva =IF(F2<=J2,\"REORDER\",\"OK\") e copie para baixo.", "Atualize o Em stock depois de cada contagem ou entrega.", "Na prateleira, ponha o stock novo atrás do antigo e escreva a data em cada caixa."],
          words: [["Folha de cálculo", "uma grelha de linhas e colunas que faz contas por si."], ["Fórmula", "uma instrução numa célula da folha de cálculo que calcula um resultado; começa com =."], ["Primeiro a entrar, primeiro a sair (FIFO)", "usar ou vender primeiro o stock mais antigo. FIFO é a sigla em inglês."]],
          slides: [
            { title: "Uma linha por produto", bullets: ["Produto, SKU, fornecedor principal e de reserva", "Custo unitário, em stock, consumo diário, prazo de entrega", "Stock de segurança, ponto de encomenda, estado"] },
            { title: "Deixe as fórmulas trabalhar", bullets: ["Ponto de encomenda: =G2*H2+I2", "Estado: =IF(F2<=J2,\"REORDER\",\"OK\")", "Copie para baixo; atualize o em stock depois das contagens"] },
            { title: "Primeiro a entrar, primeiro a sair", bullets: ["Venda ou use primeiro o stock mais antigo", "O stock novo vai atrás ou por baixo do antigo", "Escreva a data em cada caixa"] },
            { title: "A IA pode ajudar com fórmulas", bullets: ["Descreva as suas colunas por palavras", "Não precisa de partilhar preços nem dados privados"] }
          ],
          tryIt: "Tarefa final: monte a sua folha de cálculo de stock para cinco produtos com as onze colunas, a fórmula do ponto de encomenda e o aviso REORDER. Depois escreva duas frases sobre como vai manter o primeiro a entrar, primeiro a sair na sua prateleira.",
          youCanNow: "gerir um stock simples numa folha de cálculo que avisa quando voltar a encomendar e manter o stock a rodar pelo primeiro a entrar, primeiro a sair.",
          quickCheck: [
            { objective: "O6", q: "Na folha desta lição, o que calcula =G2*H2+I2?", options: ["O custo unitário", "O estado", "O ponto de encomenda", "O número de fornecedores"], answer: 2, why: "O consumo diário vezes o prazo de entrega mais o stock de segurança dá o ponto de encomenda." },
            { objective: "O6", q: "Quer que a IA o ajude a corrigir uma fórmula. O que partilha?", options: ["Os preços dos seus fornecedores e os dados do banco", "A sua lista completa de clientes", "A sua palavra-passe", "Uma descrição das suas colunas por palavras"], answer: 3, why: "Descreva as suas colunas; não precisa de partilhar preços nem dados privados do negócio." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Controlo do stock",
        questions: [
          { objective: "O4", q: "Contar alguns produtos todas as semanas, para que cada produto seja contado ao longo do tempo, chama-se:", options: ["Uma contagem física completa", "Quebra", "Uma contagem cíclica", "Uma nota de encomenda"], answer: 2, why: "Uma contagem cíclica espalha a contagem ao longo do ano." },
          { objective: "O5", q: "Usa 5 unidades por dia, o prazo de entrega é de 6 dias e o stock de segurança é 10. Qual é o ponto de encomenda?", options: ["30", "40", "11", "16"], answer: 1, why: "5 x 6 = 30, mais 10 de stock de segurança = 40." },
          { objective: "O5", q: "Que produto deve normalmente ter mais stock de segurança?", options: ["Um produto importante de um só fornecedor lento e pouco certo", "Um produto que se estraga num dia", "Um produto que já não vende", "Um produto muito caro que vende uma vez por ano"], answer: 0, why: "Os produtos importantes com abastecimento arriscado precisam de mais margem." },
          { objective: "O6", q: "Na folha de cálculo, o Em stock é 25 e o ponto de encomenda é 30. O que mostra o estado?", options: ["OK", "Erro", "Nada", "REORDER"], answer: 3, why: "O Em stock está igual ou abaixo do ponto de encomenda, por isso a fórmula mostra REORDER." },
          { objective: "O6", q: "Chega leite novo. Seguindo o FIFO, onde o põe?", options: ["À frente do leite mais antigo", "Atrás do leite mais antigo", "No lixo", "Em cima do leite mais antigo para vender primeiro"], answer: 1, why: "O FIFO põe o stock novo atrás do antigo para o mais antigo se vender primeiro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Cadeia de Abastecimento e Stock",
    questions: [
      { objective: "O1", q: "O que é uma cadeia de abastecimento?", options: ["Todos os passos que levam um produto do fabricante até ao seu cliente", "Uma corrente que fecha o seu armazém", "Uma lista de clientes", "Um tipo de empréstimo"], answer: 0, why: "Uma cadeia de abastecimento inclui cada passo, do fabricante ao cliente." },
      { objective: "O1", q: "Qual destes é um ponto fraco numa cadeia de abastecimento?", options: ["Dois fornecedores de confiança", "Um produto importante de um só fornecedor", "Um prazo de entrega curto", "Contagens certas"], answer: 1, why: "Depender de um só fornecedor é arriscado." },
      { objective: "O1", q: "Qual é uma boa solução para um ponto fraco?", options: ["Ignorá-lo", "Subir os preços", "Preparar um fornecedor de reserva ou manter stock extra", "Deixar de contar"], answer: 2, why: "Fornecedores de reserva e stock extra protegem-no das falhas." },
      { objective: "O2", q: "A quantidade mínima de encomenda é:", options: ["O máximo que pode comprar", "O tempo que uma encomenda demora", "A morada do fornecedor", "A encomenda mais pequena que um fornecedor aceita"], answer: 3, why: "A MOQ é a encomenda mais pequena que um fornecedor aceita." },
      { objective: "O2", q: "O que é o custo final?", options: ["Preço mais transporte e taxas, por unidade", "Só o preço no site", "O preço de um bilhete de avião", "A sua renda"], answer: 0, why: "O custo final é o custo real de cada unidade quando chega até si." },
      { objective: "O2", q: "As condições de pagamento Net 30 querem dizer:", options: ["Pagar 30% agora", "Pagar no prazo de 30 dias", "Pagar depois de 30 encomendas", "Pagar $30"], answer: 1, why: "Net 30 quer dizer que o valor total tem de ser pago no prazo de 30 dias." },
      { objective: "O2", q: "Antes de escolher um fornecedor novo, é sensato:", options: ["Pagar o ano todo adiantado", "Enviar os seus dados de acesso ao banco", "Pedir um orçamento escrito e uma amostra, e começar com pouco", "Pagar com cartão-presente"], answer: 2, why: "Orçamentos, amostras e primeiras encomendas pequenas baixam o seu risco." },
      { objective: "O3", q: "O que é uma nota de encomenda?", options: ["A conta do fornecedor", "Um recibo de cliente", "Um camião de entregas", "A sua encomenda por escrito a um fornecedor"], answer: 3, why: "Uma nota de encomenda é a sua encomenda por escrito com produtos, quantidades e preços." },
      { objective: "O3", q: "Uma conferência tripla compara:", options: ["A nota de encomenda, a guia de entrega e a fatura", "Os logótipos de três fornecedores", "Os horários de três trabalhadores", "Três contas bancárias"], answer: 0, why: "Conferir as três apanha erros antes de pagar." },
      { objective: "O3", q: "Quando chega uma entrega, primeiro deve:", options: ["Pagar a fatura", "Contá-la e verificá-la com a nota de encomenda", "Deitar fora a guia", "Pô-la logo na prateleira sem verificar"], answer: 1, why: "Verificar primeiro apanha produtos em falta ou estragados." },
      { objective: "O4", q: "O que é a quebra?", options: ["Embalagens mais pequenas", "Preços mais baixos", "Stock perdido por roubo, estragos, produtos estragados ou erros", "Uma promoção"], answer: 2, why: "A quebra é a diferença entre os registos e o stock real." },
      { objective: "O4", q: "O que é um SKU?", options: ["O nome de um fornecedor", "Um tipo de prateleira", "Uma empresa de transportes", "Um código curto para cada produto que tem em stock"], answer: 3, why: "SKU quer dizer stock keeping unit, em inglês: unidade de controlo de stock." },
      { objective: "O4", q: "A sua contagem de um produto não bate certo com os registos. O que faz?", options: ["Pede a uma segunda pessoa para o contar de novo", "Ignora", "Muda os registos sem verificar", "Deita o produto fora"], answer: 0, why: "Uma nova contagem confirma o número real antes de atualizar os registos." },
      { objective: "O5", q: "A fórmula do ponto de encomenda é:", options: ["Preço x quantidade", "Consumo diário x prazo de entrega + stock de segurança", "Em stock - vendas", "Stock de segurança x 10"], answer: 1, why: "Cobre o consumo durante o prazo de entrega mais uma margem." },
      { objective: "O5", q: "Vende 8 unidades por dia, com um prazo de entrega de 5 dias e 16 unidades de stock de segurança. Ponto de encomenda?", options: ["40", "13", "56", "21"], answer: 2, why: "8 x 5 = 40, mais 16 = 56." },
      { objective: "O5", q: "O stock de segurança é:", options: ["Stock fechado num cofre", "Stock que nunca vende", "Stock antigo", "Stock extra guardado para surpresas como entregas atrasadas"], answer: 3, why: "O stock de segurança cobre dias de muito movimento e atrasos." },
      { objective: "O5", q: "O consumo foi de 300 unidades nos últimos 30 dias. Qual é o consumo médio diário?", options: ["10", "30", "300", "9,000"], answer: 0, why: "300 a dividir por 30 dias dá 10 por dia." },
      { objective: "O6", q: "Numa folha de cálculo, uma fórmula começa com:", options: ["#", "=", "@", "$"], answer: 1, why: "As fórmulas das folhas de cálculo começam com o sinal de igual." },
      { objective: "O6", q: "O que quer dizer primeiro a entrar, primeiro a sair?", options: ["Vender primeiro o stock mais novo", "Encomendar ao primeiro fornecedor que encontrar", "Vender ou usar primeiro o stock mais antigo", "Contar só a primeira prateleira"], answer: 2, why: "O FIFO evita que o stock mais antigo passe do prazo." },
      { objective: "O6", q: "Como pode facilitar o FIFO na prateleira?", options: ["Pôr o stock novo à frente", "Misturar todas as caixas", "Tirar as etiquetas", "Escrever a data nas caixas e pôr o stock novo atrás do antigo"], answer: 3, why: "As etiquetas e o lugar certo tornam fácil apanhar primeiro o stock mais antigo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      4,
      7,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Produtos e fornecedores",
        objective: "O2",
        notYet: "Faltam produtos com SKU, custo unitário ou fornecedor principal.",
        meets: "Cinco produtos, cada um com SKU, fornecedor principal, fornecedor de reserva e custo unitário.",
        exceeds: "O custo unitário é o custo final, com transporte e taxas."
      },
      {
        name: "Números de stock e de consumo",
        objective: "O4",
        notYet: "O Em stock, o consumo diário ou o prazo de entrega são adivinhados ou faltam.",
        meets: "O Em stock vem de uma contagem real, com o consumo diário e o prazo de entrega preenchidos.",
        exceeds: "Indica a data da contagem e quem contou."
      },
      {
        name: "Ponto de encomenda e stock de segurança",
        objective: "O5",
        notYet: "O ponto de encomenda é escrito à mão ou está mal calculado.",
        meets: "Stock de segurança definido e ponto de encomenda calculado com uma fórmula para cada produto.",
        exceeds: "Há mais stock de segurança para produtos importantes ou de um só fornecedor, com uma razão."
      },
      {
        name: "Aviso de encomenda",
        objective: "O6",
        notYet: "Não há coluna de estado, ou ela não muda quando o stock está baixo.",
        meets: "O estado mostra REORDER quando o Em stock está igual ou abaixo do ponto de encomenda.",
        exceeds: "O aluno testa-o mudando o Em stock e vendo o aviso."
      },
      {
        name: "Plano de primeiro a entrar, primeiro a sair",
        objective: "O6",
        notYet: "Não há plano para rodar o stock.",
        meets: "Plano escrito para pôr a data nas caixas e pôr o stock novo atrás do antigo.",
        exceeds: "Diz quem o faz e quando, por exemplo em cada entrega."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que ainda usam a folha de stock 30 dias depois (inquérito de seguimento)",
      "Donos que dizem ter menos faltas de stock ou menos stock estragado ou desperdiçado em 60 dias",
      "Donos que preparam um fornecedor de reserva para pelo menos um produto importante"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com uma folha de cálculo gratuita, como o Google Sheets ou o Excel na web",
      "Uma lista de cinco produtos que compra ou vende, com encomendas e guias de entrega recentes",
      "Papel, caneta e uma calculadora para a contagem e as contas de prática",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam juntos o exemplo do ponto de encomenda num quadro antes de os alunos usarem os seus próprios números.",
      "Leve uma folha de cálculo de exemplo com as fórmulas já prontas para os alunos que nunca usaram folhas de cálculo.",
      "Avise os alunos sobre burlas de fornecedores que pedem transferências bancárias, cartões-presente ou criptomoedas.",
      "Deixe os alunos usarem produtos de exemplo se não quiserem partilhar preços reais na aula.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha em Ainda não de cada vez."
    ]
  }
};
