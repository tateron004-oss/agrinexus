"use strict";

// Koach Learn course (Portuguese translation of shared/ai-in-finance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Spreadsheet formulas (SUMIF) stay exactly as in the English.

module.exports = {
  id: "ai-in-finance-pt",
  lang: "pt",
  translationOf: "ai-in-finance",
  category: "Small Business",
  name: "IA nas Finanças",
  skills: "Proteger os dados financeiros ao usar IA, Classificar receitas e despesas, Fazer um orçamento mensal, Comparar o orçamento com o real, Prever o fluxo de caixa, Explicar os números",
  outcome: "usar um assistente de IA e uma folha de cálculo para organizar um mês de receitas e despesas, fazer um orçamento e compará-lo com o que realmente aconteceu, fazer uma previsão de fluxo de caixa de 13 semanas e explicar os resultados com palavras simples, sem partilhar dados financeiros privados.",
  about: [
    "As perguntas sobre dinheiro tiram o sono a donos de negócios e a dirigentes de associações: Conseguimos pagar os salários? Para onde foi o dinheiro? Podemos contratar mais alguém ou abrir um novo programa? As ferramentas de IA podem ajudar a organizar números, fazer folhas de cálculo e explicar o que eles querem dizer.",
    "Este curso é para donos de pequenos negócios, diretores de organizações sem fins lucrativos, tesoureiros e pessoas a aprender contabilidade. Os exemplos incluem uma carrinha de comida, uma empresa de limpeza, uma associação de desporto para jovens e um serviço de alimentação de uma igreja.",
    "Vai usar ferramentas gratuitas como o Google Sheets ou o Excel com o ChatGPT, o Microsoft Copilot ou o Google Gemini. Vai praticar com números de exemplo ou limpos, nunca com números de conta. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\"; há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Este curso não é aconselhamento fiscal, jurídico nem de investimento; para isso, fale com um profissional licenciado e veja o irs.gov."
  ],
  finalTask: "Com um mês de movimentos reais ou de exemplo, sem nenhum número de conta nem nome, faça uma folha de cálculo que organize as receitas e as despesas por categorias, uma tabela de orçamento versus real com as três maiores diferenças explicadas e uma previsão de fluxo de caixa de 13 semanas com a semana mais baixa marcada. Depois escreva uma atualização financeira de cinco frases, com palavras simples, para um dono, um sócio ou a direção.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios, pessoas que fazem a contabilidade, gestores de escritório e tesoureiros ou funcionários de organizações sem fins lucrativos que tratam do dinheiro mas não são contabilistas formados.",
    startingPoint: "Sabem ler um extrato bancário e usar um telefone ou um computador; alguns guardam registos numa folha de cálculo ou numa aplicação de contabilidade. Poucos fazem orçamentos, previsões de fluxo de caixa ou fórmulas, e muitos nunca usaram IA com segurança para tarefas de dinheiro.",
    gap: "Muitas pequenas organizações descobrem tarde demais os problemas de caixa, não veem cobranças em duplicado ou burlas, e têm dificuldade em explicar os números aos sócios ou à direção. Os alunos precisam de usar a IA e uma folha de cálculo para organizar, planear, prever e explicar o dinheiro, mantendo os dados financeiros privados fora das ferramentas de IA e verificando cada número.",
    constraints: [
      "Nível de leitura: palavras simples; os termos de dinheiro são explicados da primeira vez",
      "Aparelhos: um computador é o melhor para folhas de cálculo; num telefone este trabalho é difícil",
      "Privacidade: nenhum número de conta, de banco, de cartão, da Segurança Social ou de contribuinte, nenhuma palavra-passe e nenhum nome de pessoa nas ferramentas de IA",
      "Sem aconselhamento fiscal, de salários, jurídico ou de investimento: confirme no irs.gov, na autoridade fiscal do estado ou com um profissional licenciado",
      "Tempo: lições de 5 minutos, cerca de 60 minutos no total, mais o tempo para fazer a folha de cálculo"
    ],
    prerequisites: "Nenhum. Ajuda ter um pouco de prática com folhas de cálculo (escrever em células, uma soma simples com SUM)."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um mês de movimentos exportados", action: "preparar os dados para a IA, tirando os números de conta e trocando os nomes por etiquetas", standard: "sem nenhum dado financeiro privado e com as contas da IA verificadas na folha de cálculo" },
    { id: "O2", condition: "Com os seus movimentos limpos e uma lista de categorias", action: "colocar cada movimento numa categoria e somar cada uma com SUMIF", standard: "de modo que os totais das categorias deem o total geral" },
    { id: "O3", condition: "Com um orçamento mensal e os totais reais", action: "fazer uma tabela de orçamento versus real com a diferença e a percentagem de desvio", standard: "com as três maiores diferenças explicadas numa frase cada" },
    { id: "O4", condition: "Com o dinheiro em caixa hoje e as entradas e saídas esperadas", action: "fazer uma previsão de fluxo de caixa de 13 semanas e marcar a semana mais baixa", standard: "com o saldo final de cada semana passado para a semana seguinte" },
    { id: "O5", condition: "Com um mês de movimentos limpos e pedidos de pagamento", action: "identificar possíveis duplicados, gastos fora do normal e burlas de pagamento", standard: "confirmando qualquer mudança de dados bancários ligando para um número que já conhece" },
    { id: "O6", condition: "Com os resultados da sua folha de cálculo", action: "escrever uma atualização financeira de cinco frases com palavras simples e planear durante quanto tempo guardar os registos", standard: "com cada número verificado na folha de cálculo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Organizar o dinheiro",
      lessons: [
        {
          objectives: ["O1"],
          title: "Usar a IA com o dinheiro em segurança",
          minutes: 5,
          goal: "Preparar os dados financeiros para ter ajuda da IA sem expor dados privados.",
          text: [
            "Os assistentes de IA são bons em fórmulas de folhas de cálculo, em organizar dados, em encontrar padrões e em explicar termos como \"regime de acréscimo\" ou \"margem bruta\". Não são contabilistas, podem errar nas contas e não conhecem as regras fiscais da sua situação exata.",
            "Nunca cole números de conta ou de cartão, códigos do banco, palavras-passe, números da Segurança Social ou de contribuinte, nem nomes de clientes, doadores ou funcionários numa ferramenta de IA geral. Em vez disso, exporte os movimentos para uma folha de cálculo, apague essas colunas e troque os nomes por etiquetas gerais como \"Cliente A\" ou \"Fornecedor 1\".",
            "Verifique as contas da IA na própria folha de cálculo. Peça à IA uma fórmula, deixe a folha de cálculo fazer a conta e confirme alguns totais à mão. Para perguntas sobre impostos, salários e leis, confirme no irs.gov (o serviço de impostos dos Estados Unidos), na autoridade fiscal do seu estado ou com um contabilista licenciado."
          ],
          steps: ["Exporte os movimentos do seu banco ou da ferramenta de contabilidade para uma folha de cálculo.", "Apague os números de conta e todos os números de identificação.", "Troque os nomes das pessoas por etiquetas como \"Cliente A\".", "Use a IA para fórmulas e explicações, não para respostas finais sobre impostos.", "Confirme as contas da IA na folha de cálculo."],
          words: [["Exportar", "guardar informação de um programa num ficheiro que outro programa consegue abrir."], ["Movimento", "uma entrada ou saída de dinheiro, como uma venda ou uma conta paga."]],
          slides: [
            { title: "A IA é boa em", bullets: ["Fórmulas de folhas de cálculo e organizar dados", "Encontrar padrões", "Explicar termos de dinheiro"] },
            { title: "Nunca cole na IA", bullets: ["Números de conta, de cartão ou códigos do banco", "Palavras-passe, números da Segurança Social ou de contribuinte", "Nomes de clientes, doadores ou funcionários"] },
            { title: "Limpe e depois verifique", bullets: ["Apague os números, ponha etiquetas nos nomes", "Deixe a folha de cálculo fazer as contas", "Impostos: irs.gov ou um contabilista"] }
          ],
          tryIt: "Exporte ou escreva numa folha de cálculo 20 movimentos de um mês real ou de exemplo. Tire todos os números de conta e troque os nomes por etiquetas.",
          youCanNow: "preparar os dados de dinheiro para ter ajuda da IA sem expor dados privados.",
          quickCheck: [
            { objective: "O1", q: "Que coluna deve apagar antes de colar os movimentos numa ferramenta de IA?", options: ["Data", "Valor", "Descrição da compra", "Número de conta"], answer: 3, why: "Os números de conta são privados e nunca devem ir para uma ferramenta de IA geral." },
            { objective: "O1", q: "Os seus movimentos mostram uma cliente chamada \"Maria Lopez\". O que faz antes de pedir ajuda à IA?", options: ["Deixa o nome; a IA guarda-o em privado", "Troca-o por uma etiqueta como \"Cliente A\"", "Acrescenta também o telefone dela", "Apaga o movimento todo"], answer: 1, why: "Trocar os nomes por etiquetas protege a privacidade e a IA continua a ajudar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Organizar receitas e despesas por categorias",
          minutes: 5,
          goal: "Usar a IA para sugerir categorias e uma folha de cálculo para somar cada uma.",
          text: [
            "As categorias transformam uma lista longa de movimentos numa imagem clara. Categorias comuns num negócio: vendas, custo das mercadorias (ingredientes, materiais para os produtos), renda, salários, publicidade, software, viatura e combustível, seguros e taxas. As organizações sem fins lucrativos juntam muitas vezes donativos, subvenções, custos dos programas e custos de angariação de fundos.",
            "Cole as colunas limpas de descrição e de valor num assistente de IA e peça: \"Sugira uma categoria para cada linha a partir desta lista: [as suas categorias]. Responda numa tabela.\" Depois copie a tabela para a sua folha e corrija as que estiverem erradas.",
            "Peça à IA a fórmula para somar cada categoria. No Google Sheets e no Excel em inglês, SUMIF soma os valores que têm uma certa etiqueta, por exemplo =SUMIF(C:C, \"Rent\", D:D) soma todas as linhas da categoria Rent (renda)."
          ],
          steps: ["Escreva a sua lista de categorias.", "Peça à IA uma categoria para cada movimento limpo.", "Cole as categorias na sua folha e corrija os erros.", "Use SUMIF para somar cada categoria.", "Verifique que os totais das categorias dão o total geral."],
          words: [["Categoria", "um grupo de movimentos parecidos, como a renda ou a publicidade."], ["SUMIF", "uma fórmula de folha de cálculo que soma os valores que cumprem uma condição (no Excel em português chama-se SOMA.SE)."], ["Custo das mercadorias", "o que gasta para fazer ou comprar os produtos que vende."]],
          slides: [
            { title: "Categorias comuns", bullets: ["Vendas, custo das mercadorias, renda, salários", "Publicidade, software, combustível, seguros", "Sem fins lucrativos: donativos, subvenções, programas"] },
            { title: "A IA sugere, você corrige", bullets: ["Cole as descrições e os valores limpos", "Peça uma categoria da sua lista", "Corrija as que estiverem erradas"] },
            { title: "Some com SUMIF", bullets: ["=SUMIF(C:C, \"Rent\", D:D)", "Os totais das categorias têm de dar o total geral"] }
          ],
          tryIt: "Peça à IA categorias para os seus 20 movimentos limpos, corrija-as e some cada categoria com SUMIF. Confirme que os totais dão o total geral.",
          youCanNow: "organizar os movimentos por categorias e somá-los com uma fórmula de folha de cálculo.",
          quickCheck: [
            { objective: "O2", q: "O que faz o SUMIF numa folha de cálculo?", options: ["Soma os valores que têm uma certa etiqueta", "Ordena as linhas por data", "Apaga as células vazias", "Conta o número de colunas"], answer: 0, why: "O SUMIF soma os valores cuja etiqueta corresponde, como todas as linhas de renda." },
            { objective: "O2", q: "Os totais das suas categorias dão $4,800, mas o total geral é $5,000. O que faz?", options: ["Ignora a diferença", "Muda o total geral para $4,800", "Procura os movimentos sem categoria ou com a etiqueta errada", "Pede à IA para fazer os números baterem certo"], answer: 2, why: "Os totais das categorias devem dar o total geral, por isso procure as linhas em falta ou mal classificadas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer um orçamento e compará-lo com o real",
          minutes: 6,
          goal: "Fazer um orçamento mensal e uma tabela de orçamento versus real que mostre onde há desvios.",
          text: [
            "Um orçamento é o seu plano para o dinheiro que entra e sai num período. O orçamento versus real compara o plano com o que realmente aconteceu. A diferença chama-se desvio.",
            "Prepare as colunas: categoria, orçamento, real, desvio (real menos orçamento) e percentagem de desvio. Peça à IA: \"Dê-me fórmulas do Google Sheets para o desvio e para a percentagem de desvio.\" Depois procure os maiores desvios, em dólares e em percentagem.",
            "Explique cada grande desvio numa frase. \"O combustível ficou $300 acima do orçamento porque acrescentámos uma segunda rota de entregas.\" A IA pode ajudar a escrever as explicações, mas só você sabe as razões verdadeiras."
          ],
          steps: ["Faça a lista das categorias com um valor de orçamento para cada uma.", "Traga os totais reais da Lição 2.", "Acrescente o desvio = real menos orçamento.", "Acrescente a percentagem de desvio = desvio a dividir pelo orçamento.", "Explique os três maiores desvios numa frase cada."],
          words: [["Orçamento", "um plano para o dinheiro que entra e o que sai."], ["Desvio", "a diferença entre o orçamento e o que realmente aconteceu."]],
          slides: [
            { title: "Orçamento versus real", bullets: ["Orçamento: o plano", "Real: o que aconteceu", "Desvio: a diferença"] },
            { title: "Prepare a tabela", bullets: ["Categoria, orçamento, real", "Desvio e percentagem de desvio"] },
            { title: "Explique os grandes", bullets: ["As três maiores diferenças", "Uma frase cada, com a razão verdadeira"] }
          ],
          tryIt: "Faça uma tabela de orçamento versus real para o seu mês, com o desvio e a percentagem de desvio. Explique os três maiores desvios numa frase cada.",
          youCanNow: "fazer um orçamento, compará-lo com os resultados reais e explicar as diferenças.",
          quickCheck: [
            { objective: "O3", q: "No orçamento versus real, como se calcula o desvio neste curso?", options: ["Orçamento mais real", "Orçamento a dividir pelo real", "Real menos orçamento", "Real vezes orçamento"], answer: 2, why: "O desvio é o real menos o orçamento." },
            { objective: "O3", q: "Os materiais ficaram $200 acima do orçamento. A IA sugere \"os preços subiram\", mas você sabe que comprou mais para um evento. O que escreve?", options: ["A razão verdadeira: materiais a mais comprados para o evento", "A razão da IA, porque parece bem", "Nenhuma razão", "Que o orçamento estava errado"], answer: 0, why: "Só você sabe a razão verdadeira; a IA ajuda nas palavras, não nos factos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Organizar o dinheiro",
        questions: [
          { objective: "O1", q: "O que NUNCA deve colar numa ferramenta de IA geral?", options: ["Uma lista de categorias", "Uma tabela limpa de valores", "O seu número de conta e o código do seu banco", "Uma pergunta sobre o que quer dizer \"desvio\""], answer: 2, why: "Os números de conta são dados financeiros privados." },
          { objective: "O1", q: "A IA dá um total que parece errado. O que deve fazer?", options: ["Deixar a folha de cálculo fazer a conta e confirmar à mão", "Confiar na IA", "Apagar os dados", "Enviá-lo para a direção"], answer: 0, why: "A IA pode errar nas contas; a folha de cálculo e uma verificação à mão confirmam." },
          { objective: "O2", q: "O que faz =SUMIF(C:C, \"Rent\", D:D)?", options: ["Apaga as linhas de renda", "Conta os clientes", "Ordena por data", "Soma os valores da coluna D onde a coluna C diz Rent"], answer: 3, why: "O SUMIF soma os valores que cumprem uma condição." },
          { objective: "O3", q: "O orçamento para combustível era $500; o real foi $800. Qual é o desvio?", options: ["$1,300", "$300 acima", "$300 abaixo", "$500"], answer: 1, why: "Real menos orçamento = 800 - 500 = 300 acima." },
          { objective: "O3", q: "Quem deve explicar porque aconteceu um desvio?", options: ["Só a IA", "Você, com base no que realmente aconteceu", "Ninguém", "Um site qualquer"], answer: 1, why: "Só você sabe as razões verdadeiras por trás dos números." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear e explicar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Prever o fluxo de caixa das próximas 13 semanas",
          minutes: 6,
          goal: "Fazer uma previsão de fluxo de caixa de 13 semanas e encontrar a semana em que o dinheiro está mais apertado.",
          text: [
            "Lucro e dinheiro em caixa não são a mesma coisa. Pode ter lucro no papel e mesmo assim ficar sem dinheiro se os clientes pagarem tarde ou se chegar uma conta grande. Uma previsão de fluxo de caixa mostra quando o dinheiro entra e sai, semana a semana.",
            "Uma previsão de 13 semanas (cerca de três meses) é uma ferramenta comum. Linhas: saldo inicial, entradas (vendas, pagamentos, donativos, subvenções), saídas (salários, renda, fornecedores, prestações de empréstimos) e saldo final. O saldo final de cada semana passa a ser o saldo inicial da semana seguinte.",
            "Peça à IA para fazer o modelo: \"Faça uma tabela de previsão de fluxo de caixa de 13 semanas para o Google Sheets, com fórmulas em que o saldo final de cada semana passa a ser o saldo inicial da semana seguinte.\" Preencha os números que espera e encontre a semana mais baixa. É nessa altura que pode ter de adiar uma compra, cobrar um pagamento em atraso ou combinar uma linha de crédito."
          ],
          steps: ["Peça à IA um modelo de fluxo de caixa de 13 semanas com fórmulas.", "Escreva o saldo de hoje como saldo inicial da semana 1.", "Escreva as entradas e as saídas esperadas de cada semana.", "Verifique que o saldo final passa para a semana seguinte.", "Marque a semana mais baixa e faça um plano para ela."],
          words: [["Fluxo de caixa", "o momento em que o dinheiro entra e sai."], ["Previsão", "a melhor estimativa dos números futuros."], ["Linha de crédito", "um valor fixo que o banco o deixa pedir emprestado quando precisar."]],
          slides: [
            { title: "Lucro não é dinheiro em caixa", bullets: ["Pagamentos atrasados e contas grandes", "Pode faltar dinheiro mesmo com lucro"] },
            { title: "Linhas da previsão de 13 semanas", bullets: ["Saldo inicial", "Entradas e saídas", "O saldo final passa para a semana seguinte"] },
            { title: "Encontre a semana mais baixa", bullets: ["Adie uma compra", "Cobre um pagamento em atraso", "Planeie o financiamento cedo"] }
          ],
          tryIt: "Faça uma previsão de fluxo de caixa de 13 semanas com a ajuda da IA. Preencha números reais ou de exemplo e marque a semana mais baixa com uma ação que faria.",
          youCanNow: "fazer uma previsão de fluxo de caixa de 13 semanas e planear a semana mais apertada.",
          quickCheck: [
            { objective: "O4", q: "O que mostra uma previsão de fluxo de caixa?", options: ["O seu lucro do ano passado", "Quando o dinheiro entra e sai, semana a semana", "A sua pontuação de crédito", "Os seus impostos a pagar"], answer: 1, why: "Uma previsão de fluxo de caixa mostra as entradas e saídas semana a semana." },
            { objective: "O4", q: "A sua previsão mostra o caixa abaixo de zero na semana 7. O que pode fazer?", options: ["Nada; é só uma previsão", "Esconder a semana 7 da direção", "Gastar mais na semana 6", "Adiar uma compra, cobrar um pagamento ou combinar uma linha de crédito"], answer: 3, why: "A semana mais baixa é quando planeia com antecedência para cobrir a falta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Encontrar problemas e fraudes com a IA",
          minutes: 5,
          goal: "Usar a IA e verificações simples para encontrar gastos fora do normal, duplicados e burlas.",
          text: [
            "A IA e as folhas de cálculo podem assinalar coisas que uma pessoa ocupada não vê: pagamentos em duplicado, uma assinatura de que se esqueceu, uma subida repentina numa categoria ou um fornecedor que não conhece.",
            "Peça: \"Veja esta tabela limpa. Faça a lista dos possíveis duplicados, dos valores fora do normal e das categorias que mudaram muito em relação ao mês passado.\" Depois investigue você mesmo cada ponto.",
            "Tenha cuidado com burlas contra negócios e organizações sem fins lucrativos: faturas falsas, emails a pedir para mudar os dados bancários de um fornecedor e pedidos urgentes de pagamento que parecem vir do chefe. Confirme sempre ligando para um número de telefone que já conhece. Nos Estados Unidos, denuncie fraudes em ReportFraud.ftc.gov (a FTC é a agência federal de proteção do consumidor)."
          ],
          steps: ["Peça à IA a lista dos possíveis duplicados e dos valores fora do normal.", "Compare as categorias com o mês passado.", "Investigue você mesmo cada ponto assinalado.", "Confirme qualquer mudança de dados bancários ligando para um número conhecido.", "Denuncie a fraude à FTC."],
          words: [["Pagamento em duplicado", "pagar a mesma conta duas vezes."], ["Fatura", "uma conta que pede um pagamento."], ["Fraude de pagamento", "enganar alguém para enviar dinheiro para o sítio errado."]],
          slides: [
            { title: "O que a IA pode assinalar", bullets: ["Pagamentos em duplicado", "Assinaturas esquecidas", "Subidas repentinas ou fornecedores desconhecidos"] },
            { title: "Burlas contra negócios", bullets: ["Faturas falsas", "\"Por favor, atualize os nossos dados bancários\"", "Pedidos urgentes que parecem vir do chefe"] },
            { title: "Proteja o dinheiro", bullets: ["Ligue para um número que já conhece", "Investigue cada ponto assinalado", "Denuncie em ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: Como reconhecer e evitar burlas de phishing", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Peça à IA para rever os seus movimentos limpos à procura de duplicados e valores fora do normal. Investigue cada ponto assinalado e escreva o que encontrou.",
          youCanNow: "usar a IA e verificações simples para encontrar gastos fora do normal e burlas de pagamento.",
          quickCheck: [
            { objective: "O5", q: "Qual é uma burla comum contra negócios e organizações sem fins lucrativos?", options: ["Um cliente que paga a tempo", "Um pagamento mensal da renda", "Um extrato bancário que chega pelo correio", "Um email a pedir para mudar os dados bancários de um fornecedor"], answer: 3, why: "Os pedidos para mudar os dados bancários de um fornecedor são uma burla comum." },
            { objective: "O5", q: "A IA assinala dois pagamentos iguais ao mesmo fornecedor no mesmo dia. O que faz?", options: ["Acha que a IA tem razão e cancela os dois", "Investiga você mesmo, por exemplo vendo as faturas", "Ignora", "Paga ao fornecedor uma terceira vez"], answer: 1, why: "A IA assinala possíveis problemas; você investiga cada um." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Explicar os números e guardar bons registos",
          minutes: 5,
          goal: "Escrever uma atualização financeira com palavras simples e saber durante quanto tempo guardar os registos.",
          text: [
            "Os donos, os sócios e a direção precisam de uma atualização curta e clara, não de uma folha de cálculo enorme. Uma boa atualização tem cinco frases: quanto entrou, quanto saiu, o maior desvio e porquê, a perspetiva de caixa da sua previsão e uma decisão ou ação necessária.",
            "Peça à IA para transformar os seus números num rascunho e depois verifique cada valor na folha de cálculo. Tire tudo o que a IA acrescentou que não é verdade.",
            "Guarde os registos. O IRS (o serviço de impostos dos Estados Unidos) diz para guardar os registos que comprovam as receitas e as deduções até acabar o prazo de prescrição dessa declaração, em geral 3 anos, com prazos mais longos em alguns casos e pelo menos 4 anos para os registos de impostos sobre salários. Confirme no irs.gov ou com um contabilista para a sua situação."
          ],
          steps: ["Escreva cinco frases: entradas, saídas, maior desvio, perspetiva de caixa, decisão necessária.", "Peça à IA para melhorar as palavras.", "Verifique cada número na folha de cálculo.", "Guarde a folha de cálculo e os recibos numa pasta segura e com cópia de segurança.", "Veja no irs.gov durante quanto tempo os deve guardar."],
          words: [["Direção", "o grupo que supervisiona uma organização sem fins lucrativos ou uma empresa (em inglês, \"board\")."], ["Prazo de prescrição", "o tempo que o IRS tem para rever ou mudar uma declaração de impostos."]],
          slides: [
            { title: "Uma atualização de cinco frases", bullets: ["Dinheiro que entrou e que saiu", "Maior desvio e porquê", "Perspetiva de caixa e decisão necessária"] },
            { title: "A IA faz o rascunho, você verifica", bullets: ["Verifique cada valor", "Tire tudo o que não é verdade"] },
            { title: "Guarde os registos (IRS)", bullets: ["Em geral 3 anos; mais tempo em alguns casos", "Pelo menos 4 anos para registos de impostos sobre salários", "Confirme no irs.gov ou com um contabilista"] }
          ],
          sources: [{ name: "IRS: Durante quanto tempo devo guardar os registos?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }],
          tryIt: "Tarefa final: escreva uma atualização financeira de cinco frases a partir do seu mês organizado por categorias, da tabela de orçamento versus real e da previsão de 13 semanas. Verifique cada número e depois guarde todos os ficheiros numa pasta com cópia de segurança.",
          youCanNow: "organizar, planear e explicar o dinheiro de uma organização com a ajuda da IA, mantendo os dados seguros.",
          quickCheck: [
            { objective: "O6", q: "O que deve estar numa atualização financeira de cinco frases?", options: ["A perspetiva de caixa da sua previsão", "Todos os movimentos do mês", "Os números das contas bancárias", "As moradas dos funcionários"], answer: 0, why: "A atualização fala das entradas, das saídas, do maior desvio, da perspetiva de caixa e de uma decisão necessária." },
            { objective: "O6", q: "O rascunho da IA diz que as receitas subiram 20%, mas a sua folha mostra 12%. O que faz?", options: ["Envia; está perto", "Arredonda para 15%", "Corrige para bater certo com a folha de cálculo antes de enviar", "Tira todos os números"], answer: 2, why: "Verifique cada valor na folha de cálculo e tire tudo o que não é verdade." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Planear e explicar",
        questions: [
          { objective: "O4", q: "Porque é que um negócio com lucro pode ficar sem dinheiro em caixa?", options: ["O lucro é sempre igual ao dinheiro em caixa", "Os bancos ficam com todo o lucro", "Isso não pode acontecer", "Os pagamentos chegam tarde enquanto as contas vencem"], answer: 3, why: "O momento das entradas e saídas de dinheiro conta." },
          { objective: "O4", q: "Numa previsão de fluxo de caixa, o saldo inicial da próxima semana é igual a:", options: ["O saldo final desta semana", "O lucro do ano passado", "O orçamento", "Zero"], answer: 0, why: "Cada semana passa para a seguinte." },
          { objective: "O5", q: "Um email de um fornecedor pede para enviar os próximos pagamentos para uma nova conta bancária. O que faz?", options: ["Muda logo", "Responde com o seu acesso ao banco", "Liga para o fornecedor para um número que já conhece para confirmar", "Reencaminha para todos os funcionários"], answer: 2, why: "Os pedidos de mudança de dados bancários são uma fraude comum." },
          { objective: "O6", q: "Segundo o IRS, qual é o prazo geral para guardar os registos que comprovam uma declaração?", options: ["Uma semana", "Nunca os guardar", "Exatamente 50 anos", "Em geral 3 anos, mais tempo em alguns casos"], answer: 3, why: "As orientações do IRS dão 3 anos como prazo geral, com exceções." },
          { objective: "O6", q: "A IA faz o rascunho de uma atualização financeira para a direção. O que tem de fazer antes de a enviar?", options: ["Enviá-la sem ler", "Acrescentar números para ficar bem", "Verificar cada número na folha de cálculo", "Apagar a folha de cálculo"], answer: 2, why: "A IA pode errar nos valores; você verifica." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA nas Finanças",
    questions: [
      { objective: "O1", q: "Em que é a IA boa no trabalho de finanças?", options: ["Dar decisões finais sobre impostos", "Escrever fórmulas de folhas de cálculo e explicar termos", "Garantir ganhos nos investimentos", "Assinar documentos do banco"], answer: 1, why: "A IA ajuda com fórmulas e explicações, não com respostas finais fiscais ou jurídicas." },
      { objective: "O1", q: "Antes de colar os movimentos na IA, deve:", options: ["Tirar os números de conta e trocar os nomes por etiquetas", "Acrescentar a sua palavra-passe", "Incluir os telefones dos doadores", "Acrescentar números da Segurança Social"], answer: 0, why: "Dados limpos protegem a privacidade." },
      { objective: "O1", q: "\"Cliente A\" no lugar de um nome verdadeiro é:", options: ["Um erro de escrita", "Uma categoria", "Uma etiqueta que protege a privacidade", "Um desvio"], answer: 2, why: "As etiquetas escondem os nomes privados." },
      { objective: "O1", q: "Onde deve confirmar uma pergunta sobre impostos?", options: ["No irs.gov, na autoridade fiscal do seu estado ou com um contabilista licenciado", "Numa publicação nas redes sociais", "Só numa conversa com a IA", "No palpite de um amigo"], answer: 0, why: "As fontes oficiais e os profissionais dão respostas fiscais de confiança." },
      { objective: "O2", q: "Qual é uma categoria de receita típica de uma organização sem fins lucrativos?", options: ["Custo das mercadorias", "Combustível", "Renda", "Subvenções"], answer: 3, why: "As subvenções e os donativos são receitas de organizações sem fins lucrativos." },
      { objective: "O2", q: "O que é um movimento?", options: ["Um tipo de orçamento", "Uma entrada ou saída de dinheiro", "Um formulário de impostos", "Uma palavra-passe do banco"], answer: 1, why: "Cada venda ou pagamento é um movimento." },
      { objective: "O2", q: "Depois de a IA sugerir as categorias, deve:", options: ["Aceitá-las todas", "Corrigir as que estiverem erradas", "Apagar a folha", "Enviá-las por email aos clientes"], answer: 1, why: "As sugestões da IA precisam de ser verificadas." },
      { objective: "O2", q: "Os totais das categorias devem:", options: ["Ser maiores do que o total geral", "Ser ao acaso", "Ficar em branco", "Dar o total geral"], answer: 3, why: "Esta verificação apanha linhas em falta ou contadas duas vezes." },
      { objective: "O3", q: "Um orçamento é:", options: ["Um plano para o dinheiro que entra e sai", "Uma conta bancária", "Uma declaração de impostos", "Um empréstimo"], answer: 0, why: "É o plano do dinheiro para um período." },
      { objective: "O3", q: "Orçamento de $1,000 para publicidade; real de $700. O desvio é:", options: ["$300 acima do orçamento", "$1,700", "$300 abaixo do orçamento", "$700"], answer: 2, why: "700 - 1,000 = -300, ou seja, $300 abaixo." },
      { objective: "O3", q: "Porque explicar cada grande desvio?", options: ["Para o relatório ficar mais comprido", "Nunca é preciso", "Para esconder erros", "Para quem decide saber o que aconteceu e porquê"], answer: 3, why: "As explicações transformam os números em decisões." },
      { objective: "O4", q: "Quantas semanas cobre a previsão de fluxo de caixa do curso?", options: ["2", "13", "52", "100"], answer: 1, why: "Uma previsão de 13 semanas cobre cerca de três meses." },
      { objective: "O4", q: "A semana mais baixa da sua previsão diz-lhe:", options: ["O seu lucro total", "Quando o dinheiro vai estar mais apertado, para poder planear", "Os seus impostos a pagar", "Nada de útil"], answer: 1, why: "Mostra quando agir com antecedência." },
      { objective: "O4", q: "Uma linha de crédito é:", options: ["Um valor fixo que o banco o deixa pedir emprestado quando precisar", "Uma linha da folha de cálculo", "Um tipo de donativo", "Uma dedução nos impostos"], answer: 0, why: "Pode cobrir faltas curtas de dinheiro." },
      { objective: "O5", q: "O que a IA pode ajudar a assinalar nos seus movimentos?", options: ["Os seus futuros prémios da lotaria", "O imposto exato que deve", "Possíveis pagamentos em duplicado", "As palavras-passe dos clientes"], answer: 2, why: "A IA consegue encontrar padrões como os duplicados." },
      { objective: "O5", q: "Um email urgente que parece ser do seu chefe pede uma transferência hoje. Deve:", options: ["Confirmar por telefone, para um número que já conhece", "Enviar logo", "Responder com os dados bancários", "Ignorar o chefe para sempre"], answer: 0, why: "Os pedidos urgentes de pagamento são uma burla comum." },
      { objective: "O5", q: "Onde pode denunciar uma fraude nos EUA?", options: ["Num fórum qualquer", "No email do burlão", "Em lado nenhum", "Em ReportFraud.ftc.gov"], answer: 3, why: "A FTC recolhe as denúncias de fraude." },
      { objective: "O6", q: "Uma boa atualização financeira para a direção é:", options: ["Só a folha de cálculo em bruto", "Cinco frases claras com os números principais e uma decisão", "Um relatório de 40 páginas", "Nenhum número"], answer: 1, why: "Curta e clara ajuda as pessoas a decidir." },
      { objective: "O6", q: "Segundo o IRS, os registos de impostos sobre salários devem ser guardados pelo menos durante:", options: ["1 mês", "4 anos", "1 ano", "Nenhum tempo"], answer: 1, why: "O IRS diz pelo menos 4 anos para os registos de impostos sobre salários." },
      { objective: "O1", q: "Este curso dá aconselhamento de investimento.", options: ["Verdadeiro: compre o que a IA sugerir", "Verdadeiro: invista sempre o dinheiro das subvenções", "Verdadeiro: a IA escolhe as ações", "Falso: para isso, fale com um profissional licenciado"], answer: 3, why: "O curso ensina a gerir o dinheiro, não dá aconselhamento de investimento." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 3, 6, 7, 9, 11, 12, 15, 17, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Dados privados retirados", objective: "O1", notYet: "Os dados ainda têm números de conta, números de identificação ou nomes verdadeiros.", meets: "Todos os números de conta e de identificação foram retirados e os nomes trocados por etiquetas.", exceeds: "Sabe mostrar como as contas da IA foram confirmadas na folha de cálculo." },
      { name: "Categorias e totais", objective: "O2", notYet: "Os movimentos não estão organizados, ou os totais não dão o total geral.", meets: "Cada movimento tem uma categoria, o SUMIF soma cada uma e os totais dão o total geral.", exceeds: "As categorias erradas da IA foram encontradas e corrigidas, com uma nota a dizer quais." },
      { name: "Orçamento versus real", objective: "O3", notYet: "Não há coluna de desvio, ou os grandes desvios não estão explicados.", meets: "Desvio e percentagem de desvio para cada categoria, e os três maiores explicados numa frase cada.", exceeds: "Cada explicação diz o que se vai fazer no próximo mês." },
      { name: "Previsão de 13 semanas", objective: "O4", notYet: "O saldo final não passa para a semana seguinte, ou a semana mais baixa não está marcada.", meets: "13 semanas com entradas, saídas e saldo final passado para a semana seguinte, e a semana mais baixa marcada.", exceeds: "Inclui um plano para a semana mais baixa." },
      { name: "Atualização financeira", objective: "O6", notYet: "Falta, é mais longa do que precisa, ou tem números que não batem certo com a folha.", meets: "Cinco frases: entradas, saídas, maior desvio, perspetiva de caixa e uma decisão, tudo a bater certo com a folha.", exceeds: "Clara o suficiente para alguém sem formação em finanças, e diz onde estão guardados os registos." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Organizações que mantêm o orçamento versus real e a previsão de 13 semanas atualizados todos os meses durante três meses (inquérito de seguimento)",
      "Cobranças em duplicado, assinaturas esquecidas ou burlas encontradas e travadas em 60 dias",
      "Donos ou direções que dizem receber uma atualização financeira mensal clara"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com Google Sheets ou Excel",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Um mês de movimentos exportados de um banco ou de uma ferramenta de contabilidade, ou os dados de exemplo do curso",
      "Cerca de 60 minutos para as lições e as verificações, mais o tempo para fazer a folha de cálculo"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; construam as fórmulas SUMIF e da previsão num ecrã partilhado.",
      "Ofereça um mês de exemplo com movimentos inventados aos alunos que não querem usar dados reais.",
      "Confirme que cada aluno tirou os números de conta e os nomes antes de colar qualquer coisa na IA.",
      "Não dê aconselhamento fiscal, de salários, jurídico ou de investimento; envie essas perguntas para o irs.gov, a autoridade fiscal do estado ou um profissional licenciado.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
