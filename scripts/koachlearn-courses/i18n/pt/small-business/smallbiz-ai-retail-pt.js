"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-ai-retail.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Spreadsheet formulas stay exactly as in the English.

const FTC_ADS = { name: "FTC (Comissão Federal de Comércio dos EUA): noções básicas de publicidade e marketing", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };

module.exports = {
  id: "smallbiz-ai-retail-pt",
  lang: "pt",
  translationOf: "smallbiz-ai-retail",
  category: "Small Business",
  name: "IA para Lojas e Comércio a Retalho",
  skills: "Escrever descrições de produtos, Fazer etiquetas de prateleira, Controlar o stock numa folha de cálculo, Definir pontos de encomenda, Ler os padrões de vendas, Planear uma promoção sazonal",
  outcome: "tratar da parte de papelada de uma pequena loja com a ajuda da IA: escrever descrições de produtos e etiquetas de prateleira honestas, manter uma folha de stock com pontos de encomenda, identificar os produtos que mais vendem e os que menos vendem, e planear uma promoção sazonal a partir dos seus próprios números.",
  about: [
    "Este curso é para donos e funcionários de pequenas lojas: boutiques, lojas de bairro e mercearias, lojas de produtos de beleza, lojas de presentes, lojas de roupa usada, e pessoas que vendem pela internet ou em mercados. Muitos dos nossos alunos são donos de minorias que gerem uma loja com uma equipa pequena.",
    "Você vai usar um assistente de IA gratuito e uma folha de cálculo (Google Sheets ou Excel) para escrever sobre os seus produtos, controlar o stock para ficar menos vezes sem produtos, ver o que vende e planear uma promoção com base em factos e não em palpites.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Monte um kit de trabalho para a sua loja: cinco descrições de produtos honestas, três etiquetas de prateleira, uma folha de stock com pelo menos 15 produtos, pontos de encomenda e um aviso de encomenda, uma nota curta sobre os três produtos que mais vendem e os três que menos vendem, e um plano de uma página para uma promoção sazonal com os produtos, o preço, as datas e como vai medir o resultado.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos e funcionários de pequenas lojas: boutiques, lojas de bairro e mercearias, lojas de produtos de beleza, lojas de presentes, lojas de roupa usada, e pessoas que vendem pela internet ou em mercados. Muitos são donos de minorias que gerem uma loja com uma equipa pequena.",
    startingPoint: "Conhecem bem os seus produtos e clientes e usam uma caixa registadora ou um sistema POS. Usam pouco as folhas de cálculo para o stock e os relatórios de vendas, ou a IA para escrever, e as promoções são muitas vezes planeadas por palpite.",
    gap: "As lojas perdem dinheiro quando ficam sem os produtos que mais vendem, têm stock parado a mais, mostram preços errados ou fazem promoções que não dão lucro. Os donos precisam de usar a IA e uma folha de cálculo para escrever textos honestos sobre os produtos, controlar o stock, ler as vendas e planear promoções a partir dos seus próprios números, mantendo seguros os dados da loja.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: o computador é melhor para as folhas de cálculo; o telefone serve para escrever e fazer etiquetas",
      "Tempo: lições de cerca de 5 minutos, que cabem no horário da loja",
      "Regras: as regras da FTC sobre publicidade verdadeira para o que se diz dos produtos, e os preços nas etiquetas têm de ser iguais aos da caixa",
      "Privacidade e segurança: nada de palavras-passe de fornecedores nem dados de clientes na IA; só os totais por produto"
    ],
    prerequisites: "O curso \"Ferramentas de IA Essenciais para Pequenos Negócios\" ajuda quem ainda não conhece as folhas de cálculo."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os dados do rótulo ou da fatura de um produto", action: "escrever uma descrição de produto curta e honesta com a ajuda da IA", standard: "com cada afirmação verificada no rótulo e nada que não consiga provar" },
    { id: "O2", condition: "Usando um assistente de IA", action: "fazer etiquetas de prateleira e avisos da loja claros", standard: "com preços iguais aos da caixa, datas de fim verdadeiras nas promoções e traduções verificadas por alguém que fala bem a língua" },
    { id: "O3", condition: "Usando o Google Sheets ou o Excel", action: "criar uma folha de stock com pontos de encomenda e um aviso de encomenda", standard: "com pelo menos 15 produtos, pontos de encomenda certos e uma fórmula testada" },
    { id: "O4", condition: "Com 4 a 8 semanas de vendas por produto", action: "identificar os produtos que mais vendem e os que menos vendem com a ajuda da IA", standard: "nomeando os 3 primeiros e os 3 últimos e confirmando nos seus próprios números qualquer padrão dado pela IA" },
    { id: "O5", condition: "Com os seus números de vendas e de stock", action: "planear uma promoção sazonal", standard: "com produtos, preço, lucro por venda, datas e stock suficiente, decididos por você" },
    { id: "O6", condition: "Com uma promoção e os dados da sua loja", action: "medir os resultados da promoção e manter seguros os dados da loja", standard: "comparando com as mesmas semanas de antes, verificando as contas da IA e mantendo as palavras-passe fora da IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Produtos, etiquetas e stock",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever descrições de produtos que vendem, com honestidade",
          minutes: 5,
          goal: "Escrever descrições de produtos curtas e honestas com a ajuda da IA.",
          text: [
            "Uma descrição de produto diz ao cliente o que é, para quem é e porque o vai querer. Serve para uma etiqueta de prateleira, o seu site, um mercado na internet ou uma publicação nas redes sociais.",
            "Dê os factos à IA: \"Escreva uma descrição de 40 palavras para um creme corporal de manteiga de karité de 12 oz, sem perfume, feito no Gana, para pele seca. Tom acolhedor. Mencione o tamanho.\" A IA torna as palavras simpáticas; os factos são você que os dá.",
            "Verifique cada facto: tamanho, materiais, onde foi feito, instruções de cuidado. Tire as afirmações que não consegue provar, como \"cura o eczema\" ou \"o melhor da cidade\". A FTC (Comissão Federal de Comércio dos EUA) diz que o que se afirma num anúncio tem de ser verdade e ter provas."
          ],
          steps: ["Escreva os factos do produto: nome, tamanho, material, origem, para quem é.", "Peça à IA uma descrição curta com o seu estilo.", "Verifique cada facto no rótulo ou na fatura.", "Tire as afirmações que não consegue provar."],
          words: [["Descrição de produto", "um texto curto que diz aos clientes o que é um produto e porque o vão querer."], ["Afirmação", "uma frase que apresenta um facto sobre um produto, como aquilo que ele faz."]],
          slides: [
            { title: "O quê, para quem e porquê", bullets: ["O que é", "Para quem é", "Porque o vão querer"] },
            { title: "Os factos são seus", bullets: ["Nome, tamanho, material, origem", "A IA torna as palavras simpáticas"] },
            { title: "Seja honesto", bullets: ["Verifique no rótulo ou na fatura", "Nada de afirmações de saúde ou de \"o melhor\" sem provas", "FTC: as afirmações têm de ser verdade e ter provas"] }
          ],
          sources: [FTC_ADS],
          tryIt: "Escolha cinco produtos da sua loja. Escreva os factos de cada um, peça à IA uma descrição de 30 a 50 palavras e verifique cada uma no rótulo.",
          youCanNow: "escrever descrições de produtos honestas com a ajuda da IA.",
          quickCheck: [
            { objective: "O1", q: "Onde verifica os factos de uma descrição de produto?", options: ["No rótulo ou na fatura", "No site de um concorrente", "No que a IA escreveu", "No palpite de um cliente"], answer: 0, why: "O rótulo ou a fatura têm os factos verdadeiros do produto." },
            { objective: "O1", q: "A IA escreve que um champô \"trava a queda de cabelo\", mas o rótulo não diz isso. O que faz?", options: ["Deixa ficar para vender mais", "Acrescenta um ponto de interrogação", "Tira, a não ser que consiga provar", "Põe em letra mais pequena"], answer: 2, why: "As afirmações têm de ser verdade e ter provas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Etiquetas de prateleira, cartões de preço e avisos da loja",
          minutes: 4,
          goal: "Fazer depressa etiquetas de prateleira e avisos da loja claros.",
          text: [
            "As etiquetas respondem às perguntas antes de os clientes as fazerem: preço, promoção, novidades, política de devoluções, \"pergunte-nos sobre...\". Etiquetas claras poupam tempo aos funcionários.",
            "Peça à IA um texto curto: \"Escreva cinco etiquetas de prateleira para a minha loja de produtos de beleza: chegou cabelo novo para tranças, leve 2 e pague 1 no gel de acabamento até 31 de maio, aceitamos devoluções em 14 dias com recibo. Menos de 12 palavras cada.\" Depois desenhe-as no Canva ou num documento e imprima.",
            "Os preços nas etiquetas têm de ser iguais aos da caixa. As etiquetas de promoção precisam da data de fim verdadeira e de qualquer limite. Se atende clientes que falam outra língua, peça uma tradução à IA e depois peça a alguém que fala bem essa língua para a verificar."
          ],
          steps: ["Faça a lista das etiquetas de que precisa.", "Peça à IA um texto curto.", "Desenhe-as e imprima-as.", "Verifique se cada preço é igual ao da caixa.", "Peça a alguém que fala bem a língua para verificar qualquer tradução."],
          words: [["Etiqueta de prateleira", "um pequeno cartaz numa prateleira que mostra um preço, uma promoção ou uma informação."], ["Política de devoluções", "as suas regras sobre quando os clientes podem devolver produtos."]],
          slides: [
            { title: "As etiquetas poupam tempo aos funcionários", bullets: ["Preço, promoção e novidades", "Política de devoluções e \"pergunte-nos sobre\""] },
            { title: "A IA escreve, você desenha", bullets: ["Peça um texto curto, com menos de 12 palavras", "Desenhe no Canva ou num documento"] },
            { title: "Verifique antes de pendurar", bullets: ["O preço é igual ao da caixa", "Data de fim e limites da promoção", "Traduções verificadas por alguém que fala bem a língua"] }
          ],
          tryIt: "Peça à IA três etiquetas de prateleira para a sua loja. Verifique cada preço na sua caixa e depois faça-as e imprima-as ou guarde-as.",
          youCanNow: "fazer etiquetas de prateleira e avisos da loja claros e certos com a ajuda da IA.",
          quickCheck: [
            { objective: "O2", q: "O que deve mostrar uma etiqueta de promoção?", options: ["Só a palavra PROMOÇÃO", "A data de fim verdadeira e qualquer limite", "O número de telefone do dono", "Todos os produtos da loja"], answer: 1, why: "Uma etiqueta de promoção precisa da data de fim verdadeira e de qualquer limite para ser honesta." },
            { objective: "O2", q: "A IA traduziu a sua etiqueta para espanhol. O que faz antes de imprimir?", options: ["Imprime logo", "Pede à IA para se verificar a si mesma", "Tira o texto original", "Pede a alguém que fala bem espanhol para a verificar"], answer: 3, why: "Uma pessoa que fala bem a língua consegue encontrar os erros de tradução." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Manter uma folha de stock com pontos de encomenda",
          minutes: 6,
          goal: "Criar uma folha de cálculo de stock que mostra o que é preciso encomendar.",
          text: [
            "Ficar sem o produto que mais vende faz perder vendas; stock parado a mais prende o dinheiro. Uma folha de stock simples ajuda. Colunas: Produto, Fornecedor, Em stock, Vendidos por semana, Dias para chegar, Ponto de encomenda, Encomendar?",
            "O ponto de encomenda é o momento de voltar a encomendar. Uma regra simples: vendidos por semana x semanas para chegar + um pouco a mais (stock de segurança). Se vende 10 por semana, demora 1 semana a chegar e guarda 5 a mais, encomende quando tiver 15.",
            "Peça à IA ajuda com a fórmula: \"No Google Sheets, escreva uma fórmula que mostre REORDER quando a coluna C for menor ou igual à coluna F.\" Uma resposta comum é =IF(C2<=F2,\"REORDER\",\"\"). Teste-a em algumas linhas para ter a certeza de que funciona."
          ],
          steps: ["Faça as sete colunas.", "Preencha os seus 15 produtos principais.", "Calcule o ponto de encomenda de cada um: vendas por semana x semanas para chegar + stock de segurança.", "Peça à IA uma fórmula IF que avise quando encomendar.", "Teste-a em algumas linhas e atualize Em stock todas as semanas."],
          words: [["Stock (inventário)", "os produtos que tem na loja para vender."], ["Ponto de encomenda", "a quantidade que resta quando deve encomendar mais."], ["Stock de segurança", "produtos a mais guardados para o caso de as vendas subirem ou a entrega atrasar."]],
          slides: [
            { title: "Porquê controlar o stock", bullets: ["Ficar sem produtos faz perder vendas", "Stock parado a mais prende o dinheiro"] },
            { title: "Colunas da folha de stock", bullets: ["Produto, Fornecedor, Em stock", "Vendidos por semana, Dias para chegar", "Ponto de encomenda, Encomendar?"] },
            { title: "Ponto de encomenda", bullets: ["Vendas por semana x semanas para chegar + stock de segurança", "Exemplo: 10 x 1 + 5 = encomendar aos 15"] },
            { title: "Deixe a folha avisar", bullets: ["=IF(C2<=F2,\"REORDER\",\"\")", "Teste em algumas linhas", "Atualize Em stock todas as semanas"] }
          ],
          tryIt: "Crie a sua folha de stock com pelo menos 15 produtos, calcule os pontos de encomenda e acrescente uma fórmula IF que mostre REORDER. Teste-a mudando um número de Em stock.",
          youCanNow: "manter uma folha de stock que lhe diz quando encomendar.",
          quickCheck: [
            { objective: "O3", q: "O que é o stock de segurança?", options: ["Stock guardado numa sala fechada à chave", "Produtos que nunca vendem", "Produtos a mais para o caso de as vendas subirem ou a entrega atrasar", "Stock que devolve ao fornecedor"], answer: 2, why: "O stock de segurança cobre as surpresas nas vendas ou na entrega." },
            { objective: "O3", q: "A IA escreveu uma fórmula para o seu aviso de encomenda. O que faz a seguir?", options: ["Testa-a em algumas linhas mudando um número de Em stock", "Confia nela para todos os produtos", "Apaga a fórmula", "Copia-a para todas as folhas sem verificar"], answer: 0, why: "Testar uma fórmula em algumas linhas mostra se funciona." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Produtos, etiquetas e stock",
        questions: [
          { objective: "O1", q: "Quem dá os factos numa descrição de produto?", options: ["O palpite da IA", "Você, a partir do rótulo ou da fatura", "Um concorrente", "A opinião de um cliente"], answer: 1, why: "A IA escreve as palavras; você dá os factos verificados." },
          { objective: "O1", q: "A IA escreve que o seu creme corporal \"cura o eczema\". O que faz?", options: ["Acrescenta \"garantido\"", "Deixa ficar", "Põe em letra maior", "Tira, a não ser que consiga provar"], answer: 3, why: "A FTC exige provas para as afirmações." },
          { objective: "O2", q: "Uma etiqueta de promoção tem de mostrar:", options: ["A data de fim verdadeira e qualquer limite", "Nenhum preço", "A sua palavra-passe", "Um preço antigo falso"], answer: 0, why: "As etiquetas de promoção honestas têm datas e limites." },
          { objective: "O3", q: "Vende 8 por semana, a entrega demora 2 semanas e o stock de segurança é 4. Qual é o ponto de encomenda?", options: ["8", "12", "14", "20"], answer: 3, why: "8 x 2 + 4 = 20." },
          { objective: "O3", q: "O que faz =IF(C2<=F2,\"REORDER\",\"\")?", options: ["Soma as vendas", "Apaga a linha", "Mostra REORDER quando o stock está no ponto de encomenda ou abaixo", "Envia uma encomenda ao fornecedor"], answer: 2, why: "Avisa quais os produtos que precisam de ser encomendados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ler as vendas e planear promoções",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar os produtos que mais vendem e os que menos vendem",
          minutes: 5,
          goal: "Usar um relatório de vendas e a ajuda da IA para encontrar os produtos que mais e menos vendem.",
          text: [
            "A maioria dos sistemas de ponto de venda (POS) consegue exportar um relatório de vendas por produto como um ficheiro que abre numa folha de cálculo. Se o seu não consegue, uma contagem simples por produto todas as semanas também serve.",
            "Ordene por unidades vendidas e por valor das vendas em dinheiro. Os produtos que mais vendem merecem um bom lugar na prateleira e nunca devem faltar. Os que menos vendem podem precisar de um lugar melhor, de um pacote, de uma redução de preço ou de deixar de ser vendidos.",
            "Pode colar os totais por produto (sem dados de clientes) num assistente de IA: \"Aqui estão 8 semanas de vendas por produto da minha loja de presentes. Que produtos estão a subir, a descer ou são sazonais? Que perguntas devo fazer?\" Trate as respostas como ideias e confirme-as no seu relatório."
          ],
          steps: ["Exporte um relatório de vendas por produto ou faça a contagem à mão.", "Ordene por unidades e por dinheiro.", "Marque os 3 primeiros e os 3 últimos.", "Peça padrões à IA usando só os totais por produto.", "Confirme cada padrão no seu relatório."],
          words: [["POS", "ponto de venda (em inglês, point of sale): o sistema que regista as vendas."], ["Exportar", "guardar os dados de um sistema como um ficheiro que pode abrir noutro lugar."], ["Redução de preço", "um preço mais baixo para vender o stock parado."]],
          slides: [
            { title: "Obtenha os números", bullets: ["Exporte do seu POS um relatório de vendas por produto", "Ou conte as vendas por produto todas as semanas"] },
            { title: "Ordene de duas maneiras", bullets: ["Por unidades vendidas", "Por valor das vendas", "Marque os 3 primeiros e os 3 últimos"] },
            { title: "A IA para encontrar padrões", bullets: ["Só totais por produto, sem dados de clientes", "A subir, a descer, sazonal?", "Confirme no seu relatório"] }
          ],
          tryIt: "Obtenha 4 a 8 semanas de vendas por produto. Encontre os 3 primeiros e os 3 últimos, depois pergunte à IA que padrões vê e confirme um.",
          youCanNow: "encontrar os produtos que mais e menos vendem e verificar as ideias da IA nos seus próprios números.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer POS?", options: ["Preço na prateleira", "Ponto de venda", "Folha de encomenda de produtos", "Lucro ou vendas"], answer: 1, why: "POS quer dizer ponto de venda, o sistema que regista as suas vendas." },
            { objective: "O4", q: "Quer ajuda da IA para ler as suas vendas. O que cola lá?", options: ["Nomes e números de cartão dos clientes", "A palavra-passe do fornecedor", "O seu acesso completo ao POS", "Só os totais por produto"], answer: 3, why: "Os totais por produto chegam, e os dados privados ficam fora da IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planear uma promoção sazonal a partir dos seus números",
          minutes: 5,
          goal: "Planear uma promoção com produtos, preço, datas e uma verificação do lucro.",
          text: [
            "O comércio vive das épocas: regresso às aulas, festas, formaturas, verão, festivais locais e celebrações culturais importantes para os seus clientes. Planeie as promoções com um mês de antecedência.",
            "Use os seus números: promova produtos que vendem bem nessa época, ou junte num pacote um produto que vende pouco com um que vende muito. Peça ideias à IA: \"O que mais vendo é cabelo para tranças; o que menos vendo são toucas de cetim. Dê-me três ideias de pacotes para o regresso às aulas que mantenham lucro.\"",
            "Verifique as contas: preço, custo, lucro por venda e quantos precisa de vender. Escreva as datas e os limites, e encomende stock suficiente usando a sua folha de encomendas."
          ],
          steps: ["Escolha uma época ou um evento.", "Escolha os produtos a partir do seu relatório de vendas.", "Peça à IA ideias de promoções ou de pacotes.", "Verifique o lucro por venda no papel.", "Defina as datas e os limites e encomende o stock."],
          words: [["Promoção", "uma oferta especial durante um tempo marcado."], ["Pacote", "dois ou mais produtos vendidos juntos por um só preço."]],
          slides: [
            { title: "Planeie com um mês de antecedência", bullets: ["Regresso às aulas, festas, formaturas", "Festivais locais e celebrações culturais"] },
            { title: "Use os seus números", bullets: ["Promova os mais vendidos da época", "Junte num pacote um que vende pouco com um que vende muito"] },
            { title: "Verifique antes de lançar", bullets: ["Preço, custo e lucro por venda", "Datas e limites", "Stock suficiente encomendado"] }
          ],
          tryIt: "Planeie uma promoção para a próxima época: produtos, preço, lucro por venda, datas e quanto stock precisa.",
          youCanNow: "planear uma promoção sazonal com base nos seus próprios números de vendas.",
          quickCheck: [
            { objective: "O5", q: "O que é um pacote?", options: ["Produtos vendidos juntos por um só preço", "Uma caixa de devoluções", "Uma entrega de um fornecedor", "Um tipo de etiqueta"], answer: 0, why: "Um pacote junta produtos por um só preço, muitas vezes um que vende pouco com um que vende muito." },
            { objective: "O5", q: "Está a planear uma promoção para as festas. O que verifica antes de a lançar?", options: ["Só o aspeto da etiqueta", "Quanto cobra um concorrente", "O lucro por venda e se tem stock suficiente", "Se a IA gosta da ideia"], answer: 2, why: "Uma promoção tem de dar lucro e ter stock suficiente por trás." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir a promoção e proteger a sua loja",
          minutes: 5,
          goal: "Medir os resultados de uma promoção e manter seguros os dados da loja.",
          text: [
            "Decida como vai medir antes de começar: unidades vendidas dos produtos em promoção, total de vendas nessas datas comparado com as mesmas semanas de antes, e o lucro. Um código promocional ou um botão próprio no POS para o pacote torna o controlo fácil.",
            "No fim, peça à IA ajuda para escrever um resumo curto a partir dos seus números: o que funcionou, o que não funcionou, o que experimentar da próxima vez. Verifique as contas dela na sua folha.",
            "Mantenha seguros os dados da loja: não cole nomes de clientes, números de cartão, palavras-passe de fornecedores nem dados de funcionários em ferramentas de IA. Tenha cuidado com faturas falsas de fornecedores e pedidos de pagamento \"urgentes\"; ligue para o fornecedor para um número que já conhece."
          ],
          steps: ["Escolha as suas medidas antes da promoção.", "Acrescente um código ou um botão no POS para a controlar.", "Compare com as mesmas semanas de antes.", "Peça à IA ajuda para resumir e verifique as contas.", "Mantenha os dados de clientes e fornecedores fora da IA."],
          words: [["Período de comparação", "um tempo anterior com o qual compara os resultados, como as mesmas semanas do mês passado."], ["Código promocional", "um código que mostra quem usou uma oferta."]],
          slides: [
            { title: "Decida primeiro as medidas", bullets: ["Unidades dos produtos em promoção", "Vendas comparadas com as mesmas semanas de antes", "Lucro"] },
            { title: "Torne o controlo fácil", bullets: ["Código promocional ou um botão no POS para o pacote", "A IA ajuda a escrever o resumo; você verifica as contas"] },
            { title: "Proteja a sua loja", bullets: ["Nada de dados de clientes, cartões, fornecedores ou funcionários na IA", "Faturas: ligue aos fornecedores para números conhecidos"] }
          ],
          tryIt: "Tarefa final: junte o seu kit de trabalho da loja: cinco descrições de produtos, três etiquetas de prateleira, a sua folha de stock com avisos de encomenda, os produtos que mais e menos vendem, e o seu plano de promoção com a forma de o medir.",
          youCanNow: "fazer e medir uma promoção e usar a IA com segurança em toda a papelada da sua loja.",
          quickCheck: [
            { objective: "O6", q: "Como mede uma promoção?", options: ["Pelo movimento que a loja pareceu ter", "Comparando com as mesmas semanas de antes", "Contando as etiquetas impressas", "Pedindo à IA para adivinhar"], answer: 1, why: "Comparar com as mesmas semanas de antes mostra a mudança verdadeira." },
            { objective: "O6", q: "Um e-mail diz que o seu fornecedor tem uma nova conta bancária e que tem de pagar hoje. O que faz?", options: ["Paga logo", "Responde com o seu acesso ao banco", "Reencaminha para os clientes", "Liga para o fornecedor para um número que já conhece"], answer: 3, why: "Ligar para um número conhecido verifica com segurança um pedido de pagamento com pressa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ler as vendas e planear promoções",
        questions: [
          { objective: "O4", q: "O seu POS não consegue exportar relatórios. O que pode fazer?", options: ["Fazer uma contagem simples por produto todas as semanas", "Adivinhar", "Perguntar a um concorrente", "Deixar de controlar"], answer: 0, why: "Uma contagem à mão também mostra padrões." },
          { objective: "O4", q: "O que pode ajudar um produto que vende pouco?", options: ["Encomendar mais", "Escondê-lo", "Subir muito o preço", "Um pacote com um produto que vende muito"], answer: 3, why: "Os pacotes ajudam a vender o stock parado." },
          { objective: "O5", q: "Antes de lançar um pacote deve verificar:", options: ["Só a cor", "O lucro por venda", "O seu horóscopo", "Nada"], answer: 1, why: "As promoções têm de continuar a dar dinheiro." },
          { objective: "O6", q: "Como controla uma promoção com facilidade?", options: ["Com um código promocional ou um botão no POS para ela", "De memória", "Pedindo à IA para adivinhar", "Contando os carros dos clientes"], answer: 0, why: "Os códigos e os botões registam cada venda." },
          { objective: "O6", q: "Um e-mail diz que o seu fornecedor mudou os dados bancários e para pagar hoje. Você:", options: ["Responde com a sua palavra-passe", "Paga já", "Liga para o fornecedor para um número que conhece", "Reencaminha para os clientes"], answer: 2, why: "As faturas falsas de fornecedores são uma burla comum." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Lojas e Comércio a Retalho",
    questions: [
      { objective: "O1", q: "Uma descrição de produto responde a:", options: ["A sua palavra-passe", "O que é, para quem é, porque o vão querer", "O banco do fornecedor", "Nada"], answer: 1, why: "Essas três partes ajudam os clientes a decidir." },
      { objective: "O1", q: "Onde verifica os factos de um produto?", options: ["Num concorrente", "Na IA", "Numa publicação nas redes sociais", "No rótulo ou na fatura"], answer: 3, why: "Os rótulos e as faturas têm os factos verdadeiros." },
      { objective: "O1", q: "A FTC diz que as afirmações nos anúncios têm de ser:", options: ["Em maiúsculas", "Emocionantes", "Curtas", "Verdadeiras e com provas"], answer: 3, why: "Essa é a regra da FTC." },
      { objective: "O2", q: "Os preços nas etiquetas de prateleira têm de:", options: ["Ser arredondados para cima", "Ser iguais aos da caixa", "Estar escondidos", "Mudar todos os dias"], answer: 1, why: "Preços diferentes deixam os clientes descontentes." },
      { objective: "O2", q: "Uma etiqueta traduzida deve ser verificada por:", options: ["A gráfica", "Ninguém", "Alguém que fala bem a língua", "Um site qualquer"], answer: 2, why: "As traduções da IA podem ter erros." },
      { objective: "O2", q: "Uma boa etiqueta de prateleira tem:", options: ["Menos de cerca de 12 palavras", "Uma página inteira", "Nada escrito", "Letra minúscula"], answer: 0, why: "As etiquetas curtas leem-se depressa." },
      { objective: "O3", q: "O que é o stock de segurança?", options: ["Um seguro", "Um cofre fechado", "Produtos a mais para o caso de as vendas subirem ou a entrega atrasar", "Produtos fora de prazo"], answer: 2, why: "Protege contra ficar sem produtos." },
      { objective: "O3", q: "Vende 5 por semana, a entrega demora 2 semanas e o stock de segurança é 5. Ponto de encomenda?", options: ["7", "10", "15", "25"], answer: 2, why: "5 x 2 + 5 = 15." },
      { objective: "O3", q: "Depois de a IA escrever uma fórmula da folha de cálculo, você deve:", options: ["Confiar nela", "Testá-la em algumas linhas", "Apagá-la", "Imprimi-la"], answer: 1, why: "As fórmulas podem estar erradas." },
      { objective: "O3", q: "Porquê controlar o stock?", options: ["Para confundir os funcionários", "Por diversão", "Porque a IA diz", "Para ficar menos vezes sem produtos e evitar stock parado a mais"], answer: 3, why: "As duas coisas custam-lhe dinheiro." },
      { objective: "O4", q: "POS quer dizer:", options: ["Ponto de venda", "Preço do serviço", "Talão dos correios", "Folha de encomenda de produtos"], answer: 0, why: "É o sistema que regista as vendas." },
      { objective: "O4", q: "Ordenar pelo valor das vendas mostra:", options: ["As horas dos funcionários", "Quais pesam mais", "Quais são os mais novos", "Quais os produtos que trazem mais dinheiro"], answer: 3, why: "O valor mostra a receita de cada produto." },
      { objective: "O4", q: "Quando cola as vendas na IA, inclua:", options: ["Números de cartão", "Nomes de clientes", "Só os totais por produto", "Palavras-passe de fornecedores"], answer: 2, why: "Nada de dados privados." },
      { objective: "O5", q: "Quando deve planear uma promoção sazonal?", options: ["No próprio dia", "Cerca de um mês antes", "Depois da época", "Nunca"], answer: 1, why: "Dá tempo para encomendar stock e fazer as etiquetas." },
      { objective: "O5", q: "O que é um pacote?", options: ["Um produto partido", "Um imposto", "Um empréstimo", "Produtos vendidos juntos por um só preço"], answer: 3, why: "Os pacotes juntam produtos." },
      { objective: "O5", q: "Antes de uma promoção, use a sua folha de encomendas para:", options: ["Esconder os preços", "Apagar produtos", "Ter a certeza de que tem stock suficiente", "Pagar aos funcionários"], answer: 2, why: "Ficar sem produtos estraga uma promoção." },
      { objective: "O6", q: "Meça uma promoção comparando com:", options: ["As mesmas semanas de antes", "O palpite de um concorrente", "Nada", "O próximo ano"], answer: 0, why: "Um período de comparação mostra a mudança." },
      { objective: "O6", q: "Quando a IA escreve o resumo da sua promoção, você:", options: ["Confia em todos os números", "Verifica as contas na sua folha", "Não o lê", "Publica-o sem ler"], answer: 1, why: "A IA pode errar nas contas." },
      { objective: "O6", q: "O que nunca deve ir para uma ferramenta de IA?", options: ["Nomes de produtos", "Palavras-passe das contas de fornecedores", "Totais semanais", "Nomes das épocas"], answer: 1, why: "As palavras-passe são privadas." },
      { objective: "O5", q: "Que decisão este curso deixa para você, e não para a IA?", options: ["Que produtos promover e a que preço", "Como está escrita uma legenda", "Ideias de pacotes", "O texto das etiquetas"], answer: 0, why: "A IA sugere; você decide com os seus números." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 1, 3, 6, 7, 10, 12, 13, 14, 16]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Descrições de produtos", objective: "O1", notYet: "Menos de cinco, ou uma afirmação que não está no rótulo.", meets: "Cinco descrições curtas e honestas, verificadas no rótulo.", exceeds: "Cada uma diz o que é, para quem é e porque o vão querer." },
      { name: "Etiquetas de prateleira", objective: "O2", notYet: "Menos de três, ou um preço diferente do da caixa.", meets: "Três etiquetas claras com preços iguais aos da caixa.", exceeds: "As etiquetas de promoção mostram a data de fim e os limites; as traduções foram verificadas." },
      { name: "Folha de stock", objective: "O3", notYet: "Menos de 15 produtos, ou nenhum aviso de encomenda que funcione.", meets: "15 ou mais produtos com pontos de encomenda e um aviso REORDER testado.", exceeds: "Os pontos de encomenda incluem stock de segurança para cada produto." },
      { name: "Produtos que mais e menos vendem", objective: "O4", notYet: "Não há lista dos primeiros nem dos últimos, ou foi feita por palpite.", meets: "Os 3 primeiros e os 3 últimos a partir de números de vendas verdadeiros.", exceeds: "Um padrão da IA confirmado nos números, com uma ideia para um produto que vende pouco." },
      { name: "Plano de promoção", objective: "O5", notYet: "Faltam os produtos, o preço, as datas ou a verificação do lucro.", meets: "Produtos, preço, lucro por venda, datas e stock necessário.", exceeds: "Diz como vai ser medida em comparação com as mesmas semanas de antes." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que mantêm a folha de stock atualizada todas as semanas (inquérito de seguimento aos 30 dias)",
      "Donos que dizem ficar menos vezes sem os produtos que mais vendem em 60 dias",
      "Donos que fazem uma promoção sazonal e comunicam o resultado medido"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com Google Sheets ou Excel (um telefone serve para as descrições e as etiquetas)",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Rótulos ou faturas dos produtos, e 4 a 8 semanas de vendas por produto da caixa ou de uma contagem",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça aos donos para trazerem rótulos ou faturas dos produtos e um relatório de vendas ou uma contagem semanal.",
      "Façam juntos, num quadro, um exemplo de ponto de encomenda antes de os donos criarem as suas folhas.",
      "Nunca cole palavras-passe de fornecedores, nomes de clientes ou dados de cartões na IA; os totais por produto chegam.",
      "Lembre aos donos que são eles, e não a IA, que decidem que produtos promover e a que preço.",
      "Avalie o kit de trabalho da loja com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
