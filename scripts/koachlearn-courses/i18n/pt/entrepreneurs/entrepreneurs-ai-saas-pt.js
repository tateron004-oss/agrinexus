"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-saas.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-ai-saas-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-saas",
  category: "Entrepreneurs",
  name: "Criar Produtos SaaS com IA",
  skills: "Escolher um nicho SaaS estreito, Definir um produto mínimo viável, Entender as APIs de IA e os custos de uso, Fazer um protótipo sem muito código, Definir o preço de uma assinatura, Lançar com confiança e segurança",
  outcome: "transformar um problema de negócio estreito num plano de uma página para um pequeno produto de software como serviço com IA, construir um protótipo clicável ou funcional da sua função principal, calcular um preço de assinatura que cubra os custos de uso da IA e preparar uma lista de verificação de lançamento honesta e segura.",
  about: [
    "SaaS (software como serviço, em inglês \"software as a service\") é software que as pessoas usam pela internet e pagam por assinatura, como um plano mensal. Muitos produtos SaaS novos colocam um modelo de IA por trás de um ecrã simples que faz muito bem uma só tarefa: escrever anúncios para gestores de imóveis, resumir chamadas para oficinas de reparação, traduzir menus.",
    "Este curso é para empreendedores que querem criar um pequeno produto SaaS com IA, incluindo pessoas que ainda não sabem programar. Você vai escolher um nicho estreito, definir um produto mínimo viável, aprender como funcionam as APIs de IA e os seus custos de uso, construir um protótipo, definir o preço e preparar um lançamento honesto sobre o que a IA faz e cuidadoso com os dados dos utilizadores.",
    "Cada lição dura cerca de cinco minutos, mais uma tarefa prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Os preços dos modelos de IA e os planos das ferramentas mudam muitas vezes: verifique sempre a página de preços do próprio fornecedor."
  ],
  finalTask: "Prepare um kit inicial de SaaS com IA: um plano de produto de uma página (nicho, utilizador, problema, a única função principal), um protótipo da função principal (um modelo clicável, uma aplicação sem código ou um pequeno notebook que funcione), uma folha de preços que mostre o custo de uso da IA por utilizador por mês e o seu preço, e uma lista de verificação de lançamento que cubra afirmações honestas, privacidade, termos, revisão humana e como os utilizadores podem contactá-lo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Empreendedores que querem criar um pequeno produto de software como serviço com IA para um nicho que conhecem, incluindo pessoas que ainda não sabem programar.",
    startingPoint: "Usam bem assistentes de conversa com IA e conhecem uma área ou um setor. A maioria nunca definiu um produto de software, usou uma API de IA, estimou custos de uso nem preparou um lançamento com privacidade e termos.",
    gap: "Muitos produtos de IA tentam fazer coisas demais, custam mais em uso de IA do que cobram, deixam escapar chaves de API ou dados dos utilizadores, ou prometem mais do que a IA consegue fazer. Os alunos precisam de definir uma função principal, provar que funciona, pôr um preço que cubra o uso e lançar com honestidade e segurança.",
    constraints: [
      "Palavras simples; programar é opcional, e protótipos sem código ou modelos de ecrã contam",
      "Aparelhos: um computador com uma folha de cálculo, um assistente de IA gratuito e, se quiser, um notebook gratuito ou uma ferramenta sem código",
      "Tempo: cerca de cinco minutos por lição, mais tarefas práticas",
      "Os preços dos modelos de IA e os planos das ferramentas mudam muitas vezes; verifique a página de preços do próprio fornecedor",
      "Só dados de teste anónimos; política de privacidade e termos revistos por um advogado; imposto sobre vendas verificado com o estado ou com um contabilista"
    ],
    prerequisites: "Recomenda-se o curso \"Criar Produtos e Serviços com IA\", e saber usar folhas de cálculo."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Numa área que você conhece", action: "escolher um utilizador específico e uma tarefa repetida para um produto SaaS com IA", standard: "escrito como uma ideia numa frase e confirmado com pelo menos uma pessoa do nicho" },
    { id: "O2", condition: "Com a sua ideia de produto", action: "escrever um fluxo principal numa linha, uma lista de \"ainda não\" e três regras de \"nunca\" para a primeira versão", standard: "com a função principal a caber num só ecrã" },
    { id: "O3", condition: "Usando o preço atual da página de preços do seu fornecedor", action: "explicar como a sua aplicação usa um modelo de IA através de uma API e estimar o custo da IA por utilizador por mês", standard: "com todas as fórmulas verificadas e a chave de API mantida privada" },
    { id: "O4", condition: "Com dez dados reais anónimos", action: "testar o seu pedido (prompt), avaliar os resultados e construir um protótipo da função principal", standard: "melhorando o pedido até a maioria dos resultados ser boa e mostrando-o a pelo menos um utilizador do nicho" },
    { id: "O5", condition: "Com o valor e o custo por utilizador", action: "criar uma folha de preços com dois planos, limites de uso e o lucro por utilizador", standard: "para que cada plano cubra o uso da IA e os outros custos, com margem de lucro" },
    { id: "O6", condition: "Antes de receber pagamentos", action: "preparar uma lista de verificação de lançamento para afirmações honestas, dados, termos do fornecedor, política de privacidade e termos, e uma forma de contacto", standard: "com uma revisão por advogado planeada e um primeiro lançamento pequeno" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Definir o produto",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher um nicho estreito",
          minutes: 5,
          goal: "Escolher um utilizador específico e uma tarefa repetida específica para o seu produto SaaS com IA.",
          text: [
            "Já existem ferramentas de IA grandes e gerais, muitas vezes gratuitas. Os pequenos produtos SaaS ganham por serem estreitos: um tipo de utilizador, uma tarefa repetida, feita melhor do que um assistente de conversa geral. \"Ferramenta de escrita com IA\" é largo demais. \"Transforma as notas de obra de um empreiteiro num orçamento limpo para o cliente em dois minutos\" é estreito.",
            "Os bons nichos têm utilizadores que fazem a mesma tarefa muitas vezes, perdem tempo ou dinheiro com ela e já pagam por software. Pode chegar a eles através de uma associação profissional, de um fórum ou de uma rede local.",
            "Peça à IA ideias de nichos a partir da sua experiência: \"Trabalhei em [área]. Faça uma lista de dez tarefas repetidas de escrita ou de organização que as pessoas desta área fazem todas as semanas.\" Depois fale com três pessoas do nicho antes de avançar."
          ],
          steps: ["Faça uma lista das áreas que conhece bem.", "Peça à IA tarefas repetidas nessas áreas.", "Escolha um utilizador e uma tarefa.", "Verifique: frequente, custosa, já paga por software, fácil de alcançar.", "Fale com três pessoas que fazem essa tarefa."],
          words: [["SaaS", "software como serviço: software na internet que as pessoas pagam por assinatura."], ["Nicho", "um grupo pequeno e específico de utilizadores com uma necessidade comum."]],
          slides: [
            { title: "Estreito ganha", bullets: ["Um utilizador, uma tarefa repetida", "Melhor do que um assistente de conversa geral", "\"Notas de obra num orçamento em dois minutos\""] },
            { title: "Bons nichos", bullets: ["Fazem a tarefa muitas vezes", "Perdem tempo ou dinheiro com ela", "Já pagam por software; fáceis de alcançar"] },
            { title: "Comece pelo que conhece", bullets: ["Peça à IA tarefas repetidas da sua área", "Fale com três pessoas antes de construir"] }
          ],
          tryIt: "Use a IA para fazer uma lista de dez tarefas repetidas numa área que conhece, escolha um utilizador e uma tarefa e escreva uma ideia de produto numa frase. Pergunte a pelo menos uma pessoa desse nicho se isso a ajudaria.",
          youCanNow: "escolher um nicho estreito e fácil de alcançar para um produto SaaS com IA.",
          quickCheck: [
            { objective: "O1", q: "O que torna um nicho bom para um pequeno produto SaaS com IA?", options: ["Utilizadores que fazem a tarefa muitas vezes e já pagam por software", "Todas as pessoas do mundo", "Uma tarefa que as pessoas fazem uma vez na vida", "Uma área de que não sabe nada"], answer: 0, why: "Tarefas frequentes e utilizadores que já pagam tornam um produto mais fácil de vender." },
            { objective: "O1", q: "A sua ideia é \"IA para todas as pequenas empresas\". O que faz?", options: ["Mantém-na larga para chegar a mais pessoas", "Estreita-a para um utilizador e uma tarefa repetida", "Acrescenta mais funções", "Começa logo a programar"], answer: 1, why: "Os pequenos produtos SaaS com IA ganham por fazerem muito bem uma tarefa para um utilizador." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Definir um produto mínimo viável",
          minutes: 5,
          goal: "Definir a única função principal que a sua primeira versão tem de fazer bem.",
          text: [
            "Um produto mínimo viável (MVP, em inglês \"minimum viable product\") é a versão mais pequena que resolve o problema principal bem o suficiente para que alguém pague. Num SaaS com IA, costuma ser um só ecrã: o utilizador coloca alguma coisa, a IA faz a tarefa, o utilizador verifica e copia o resultado.",
            "Escreva o seu fluxo principal numa linha: \"O empreiteiro cola as notas de obra, escolhe um modelo, recebe um rascunho de orçamento, edita e descarrega.\" Tudo o resto (contas, equipas, integrações, painéis) espera até haver pessoas a pagar.",
            "Decida também o que a IA nunca pode fazer, como inventar preços, dar conselhos legais ou enviar alguma coisa sem o clique do utilizador. Estas regras dão forma ao seu pedido de instruções e ao seu ecrã."
          ],
          steps: ["Escreva o fluxo principal numa linha: entrada, tarefa da IA, verificação pelo utilizador, resultado.", "Faça a lista das funções que AINDA NÃO vai construir.", "Escreva três coisas que a IA nunca pode fazer.", "Desenhe o único ecrã num papel."],
          words: [["MVP", "produto mínimo viável: a versão mais pequena que resolve o problema principal bem o suficiente para vender."], ["Fluxo principal", "o caminho principal que um utilizador segue para fazer a tarefa."]],
          slides: [
            { title: "A versão útil mais pequena", bullets: ["Um ecrã", "Entrada, tarefa da IA, verificação, resultado"] },
            { title: "Ainda não", bullets: ["Equipas e painéis", "Integrações", "Tudo o que não está no fluxo principal"] },
            { title: "A IA nunca pode", bullets: ["Inventar preços ou factos", "Dar conselhos legais ou médicos", "Agir sem o clique do utilizador"] }
          ],
          tryIt: "Escreva o seu fluxo principal numa linha, a sua lista de \"ainda não\" e três regras de \"nunca\", e desenhe o único ecrã.",
          youCanNow: "definir um MVP de SaaS com IA à volta de uma função principal com limites claros.",
          quickCheck: [
            { objective: "O2", q: "O que vai para a lista de \"ainda não\"?", options: ["A sua função principal", "O seu preço", "Funções que esperam até haver pessoas a pagar", "As suas regras de \"nunca\""], answer: 2, why: "Uma lista de \"ainda não\" mantém a primeira versão pequena." },
            { objective: "O2", q: "Quer acrescentar painéis de equipa, conversa e relatórios à versão um. O que faz?", options: ["Constrói tudo agora", "Contrata uma equipa grande", "Deixa cair a função principal", "Mantém uma função principal e põe o resto na lista de \"ainda não\""], answer: 3, why: "Um MVP resolve primeiro o problema principal." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Como funcionam as APIs de IA e quanto custam",
          minutes: 6,
          goal: "Explicar como uma aplicação usa um modelo de IA através de uma API e estimar o custo por utilizador.",
          text: [
            "Uma API (interface de programação de aplicações) deixa a sua aplicação enviar um pedido a um modelo de IA e receber a resposta. A sua aplicação envia o seu pedido de instruções mais o que o utilizador escreveu; o modelo devolve texto (ou uma imagem, ou dados organizados); a sua aplicação mostra-o.",
            "A maioria dos fornecedores de modelos de IA cobra pelo uso, muitas vezes contado em tokens (pequenos pedaços de texto, mais ou menos partes de palavras), com preços diferentes para a entrada e a saída e para modelos diferentes. Os preços mudam muitas vezes, por isso procure-os na página de preços do fornecedor no dia em que fizer o plano.",
            "Estime o custo por utilizador: mais ou menos quantos pedidos um utilizador faz por mês, vezes o tamanho médio de cada pedido e resposta, vezes o preço. Peça à IA ajuda para montar a folha de cálculo e verifique as contas. Mantenha a sua chave de API secreta: nunca a cole numa conversa, numa página web ou num ficheiro público."
          ],
          steps: ["Escreva o que a sua aplicação envia: pedido de instruções + o que o utilizador escreve.", "Estime os pedidos por utilizador por mês.", "Estime o tamanho de cada pedido e resposta.", "Procure os preços atuais na página de preços do fornecedor.", "Calcule o custo por utilizador por mês e mantenha a sua chave de API secreta."],
          words: [["API", "uma forma de um programa enviar pedidos a outro e receber respostas."], ["Token", "um pequeno pedaço de texto que os fornecedores de IA contam para medir o uso e o preço."], ["Chave de API", "um código secreto que deixa a sua aplicação usar a API de um fornecedor e que é cobrado a você."]],
          slides: [
            { title: "Como funciona", bullets: ["A sua aplicação envia o pedido + a entrada do utilizador", "O modelo devolve uma resposta", "A sua aplicação mostra-a ao utilizador"] },
            { title: "Preço por uso", bullets: ["Muitas vezes contado em tokens", "Entrada e saída com preços diferentes", "Verifique a página de preços do fornecedor"] },
            { title: "Custo por utilizador", bullets: ["Pedidos por mês", "x tamanho de cada pedido e resposta", "x preço atual"] },
            { title: "Mantenha a chave de API secreta", bullets: ["Nunca numa conversa, página web ou ficheiro público", "Quem a tiver pode gastar o seu dinheiro"] }
          ],
          tryIt: "Monte uma pequena folha de cálculo para estimar o custo da IA por utilizador por mês: pedidos, tamanho e o preço atual da página de preços do fornecedor que escolheu. Verifique todas as fórmulas.",
          youCanNow: "explicar como uma aplicação SaaS com IA usa uma API e estimar o seu custo de uso por utilizador.",
          quickCheck: [
            { objective: "O3", q: "O que é que uma API deixa a sua aplicação fazer?", options: ["Enviar pedidos a um modelo de IA e receber respostas", "Desenhar um logótipo", "Receber pagamentos", "Escrever os seus termos"], answer: 0, why: "A API liga a sua aplicação ao modelo de IA." },
            { objective: "O3", q: "Alguém que o ajuda pede-lhe para colar a sua chave de API numa conversa de grupo. O que faz?", options: ["Cola-a", "Mantém-na privada e nunca a cola numa conversa ou num ficheiro", "Põe-na no seu site", "Publica-a num ficheiro público"], answer: 1, why: "Quem tiver a sua chave pode usar a API e gastar o seu dinheiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Definir o produto",
        questions: [
          { objective: "O1", q: "Qual é o melhor nicho para um pequeno produto SaaS com IA?", options: ["Uma ferramenta de IA para todos", "Transformar as notas de obra de empreiteiros em orçamentos para clientes", "Um assistente de conversa geral", "Todos os negócios"], answer: 1, why: "Um utilizador estreito mais uma tarefa repetida ganham às ferramentas gerais." },
          { objective: "O2", q: "O que é um MVP?", options: ["Um produto acabado com todas as funções", "A versão mais cara", "Um prémio desportivo", "A versão mais pequena que resolve o problema principal bem o suficiente para vender"], answer: 3, why: "MVP = produto mínimo viável." },
          { objective: "O2", q: "Que função deve esperar até haver pessoas a pagar?", options: ["Painéis de equipa", "O fluxo principal da entrada ao resultado", "O passo de verificação pelo utilizador", "A própria tarefa da IA"], answer: 0, why: "Só o fluxo principal pertence ao MVP." },
          { objective: "O3", q: "Os fornecedores de IA medem muitas vezes o uso em:", options: ["Minutos de luz do dia", "Páginas", "Tokens", "Clientes"], answer: 2, why: "Os tokens são pequenos pedaços de texto usados para o preço." },
          { objective: "O3", q: "Onde é que a sua chave de API NUNCA deve ir?", options: ["Para um gestor de palavras-passe", "Para uma área de definições segura da sua aplicação", "Para uma conversa, uma página web ou um ficheiro público", "Para a sua conta no fornecedor"], answer: 2, why: "Quem tiver a chave pode usá-la e gastar o seu dinheiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir, pôr o preço e lançar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer um protótipo da função principal",
          minutes: 6,
          goal: "Construir um protótipo da sua função principal e testá-lo com dados reais.",
          text: [
            "Comece por testar a própria tarefa da IA, antes de qualquer aplicação: coloque o seu pedido de instruções e dez dados reais (anónimos) num assistente de conversa e verifique os resultados. Se a IA não consegue fazer bem a tarefa numa conversa, uma aplicação não vai resolver isso. Afine o pedido até 8 ou 9 de 10 resultados serem bons.",
            "Depois faça o protótipo ao nível que consegue: um modelo clicável do ecrã (numa ferramenta de design como o Canva ou numa apresentação de slides), um construtor de aplicações sem código que consiga chamar um modelo de IA, ou um pequeno notebook de Python no Google Colab que chame uma API com a sua chave mantida secreta.",
            "Mostre o protótipo a três pessoas do seu nicho e veja-as a usá-lo. Anote onde ficam presas e onde o resultado da IA precisou de ser corrigido."
          ],
          steps: ["Junte dez dados reais e tire os detalhes privados.", "Teste o seu pedido de instruções num assistente de conversa.", "Melhore o pedido até a maioria dos resultados ser boa.", "Construa um protótipo: modelo de ecrã, aplicação sem código ou notebook.", "Veja três utilizadores do nicho a experimentá-lo e anote os problemas."],
          words: [["Protótipo", "uma versão inicial e simples usada para testar uma ideia."], ["Modelo de ecrã (mock-up)", "uma imagem ou um modelo clicável de um ecrã que mostra como a aplicação vai ficar."], ["Google Colab", "um notebook gratuito na internet onde pode correr código Python num navegador."]],
          slides: [
            { title: "Teste primeiro a tarefa da IA", bullets: ["Pedido de instruções + dez dados reais", "Num assistente de conversa", "Objetivo: 8 ou 9 bons resultados em 10"] },
            { title: "Escolha o nível do protótipo", bullets: ["Modelo de ecrã clicável", "Construtor de aplicações sem código", "Notebook de Python no Google Colab"] },
            { title: "Veja utilizadores reais", bullets: ["Três pessoas do seu nicho", "Onde é que ficam presas?", "Onde é que a IA precisou de correção?"] }
          ],
          tryIt: "Teste o seu pedido com dez dados anónimos e avalie os resultados. Depois construa o protótipo mais simples que conseguir e mostre-o a pelo menos uma pessoa do seu nicho.",
          youCanNow: "provar que uma função de IA funciona e construir um protótipo que as pessoas possam experimentar.",
          quickCheck: [
            { objective: "O4", q: "O que deve testar antes de construir qualquer aplicação?", options: ["O logótipo", "O preço", "Se a IA faz bem a tarefa com o seu pedido", "As cores do seu site"], answer: 2, why: "Se a IA não consegue fazer a tarefa, a aplicação não vai ajudar." },
            { objective: "O4", q: "Um utilizador de teste fica preso na caixa de entrada do seu protótipo. O que faz?", options: ["Ignora", "Culpa o utilizador", "Acrescenta mais funções", "Anota e torna esse passo mais claro"], answer: 3, why: "Os sítios onde os utilizadores ficam presos mostram o que corrigir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Definir o preço de uma assinatura",
          minutes: 5,
          goal: "Definir um preço mensal que cubra o uso da IA e os outros custos, com margem de lucro.",
          text: [
            "Comece pelo valor: quanto tempo ou dinheiro o seu produto poupa a um utilizador por mês? Se poupa três horas a um empreiteiro, é fácil justificar um preço bem abaixo do valor dessas horas.",
            "Depois veja os custos: uso da IA por utilizador (da Lição 3), alojamento e ferramentas, taxas de processamento de pagamentos, tempo de apoio ao cliente e o seu próprio tempo. Os utilizadores pesados podem custar muito mais do que a média, por isso pense em limites de uso em cada plano.",
            "Muitos produtos SaaS oferecem dois ou três planos com limites claros e um período de teste gratuito. Peça à IA ideias de estrutura de planos, mas defina você os números finais e verifique-os numa folha de cálculo. Para o imposto sobre vendas e os impostos da empresa sobre software, verifique na agência de receitas do seu estado e em irs.gov, ou pergunte a um contabilista, porque as regras são diferentes."
          ],
          steps: ["Estime o valor para o utilizador por mês.", "Some os custos por utilizador: uso da IA, alojamento, pagamentos, apoio.", "Planeie os utilizadores pesados com limites.", "Desenhe dois ou três planos e um período de teste.", "Verifique as contas e pergunte a um contabilista sobre os impostos."],
          words: [["Assinatura", "pagar um valor regular, por exemplo todos os meses, para continuar a usar um produto."], ["Limite de uso", "um teto para o que um plano pode usar, como 100 orçamentos por mês."], ["Teste gratuito", "um período curto em que as pessoas podem usar o produto sem pagar."]],
          slides: [
            { title: "Comece pelo valor", bullets: ["Tempo ou dinheiro poupado por mês", "Preço bem abaixo desse valor"] },
            { title: "Cubra os seus custos", bullets: ["Uso da IA por utilizador", "Alojamento, pagamentos, apoio", "Utilizadores pesados: defina limites"] },
            { title: "Planos", bullets: ["Dois ou três planos com limites claros", "Um teste gratuito", "As regras de impostos variam: pergunte a um contabilista"] }
          ],
          sources: [{ name: "IRS: Centro de Impostos para Trabalhadores por Conta Própria (Self-Employed Individuals Tax Center)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Faça uma folha de preços: valor por utilizador, custo por utilizador (incluindo o uso da IA), dois planos com limites e o lucro por utilizador em cada plano. Verifique todas as fórmulas.",
          youCanNow: "definir o preço de uma assinatura de IA que cubra os custos de uso e corresponda ao valor para os utilizadores.",
          quickCheck: [
            { objective: "O5", q: "Por onde deve começar o preço de uma assinatura?", options: ["Pelo valor que o produto dá ao utilizador", "Pelo preço mais baixo que conseguir encontrar", "Por um número ao acaso", "Pelo que os seus amigos acham"], answer: 0, why: "Defina o preço a partir do valor e depois veja se cobre os custos." },
            { objective: "O5", q: "Alguns utilizadores pesados custam-lhe mais em uso de IA do que pagam. O que faz?", options: ["Tira todos os limites", "Define limites de uso em cada plano", "Baixa o preço", "Deixa de acompanhar os custos"], answer: 1, why: "Os limites de uso impedem os utilizadores pesados de acabar com o lucro." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lançar com confiança e segurança",
          minutes: 6,
          goal: "Preparar uma lista de verificação de lançamento que mantenha as afirmações honestas e os dados dos utilizadores seguros.",
          text: [
            "A confiança é o seu maior bem como SaaS novo. Seja honesto sobre o que a IA faz e os seus limites: diga que os resultados são gerados por IA e devem ser verificados. A FTC (a Comissão Federal de Comércio dos Estados Unidos) diz que a publicidade tem de ser verdadeira, não enganosa e apoiada em provas, e já agiu contra empresas por afirmações falsas sobre IA.",
            "Proteja os dados dos utilizadores. Siga os princípios de segurança de dados da FTC: saiba o que recolhe, reduza ao que precisa, guarde com segurança, elimine o que já não precisa e prepare-se para problemas. Veja o que o seu fornecedor de IA faz com os dados enviados pela API e diga-o numa política de privacidade.",
            "Tenha uma política de privacidade e termos de serviço antes de receber pagamentos; existem modelos, mas peça a um advogado que os reveja para a sua situação. Dê aos utilizadores uma forma fácil de falar com uma pessoa, e lance em pequeno: primeiro alguns utilizadores do seu nicho, depois cresça."
          ],
          steps: ["Escreva publicidade honesta: o que faz, os seus limites, \"verifique os resultados da IA\".", "Faça a lista dos dados dos utilizadores que recolhe e corte o que não precisa.", "Veja os termos de dados do seu fornecedor de IA.", "Prepare uma política de privacidade e termos, revistos por um advogado.", "Acrescente uma forma de falar com uma pessoa e lance primeiro para um grupo pequeno."],
          words: [["Política de privacidade", "uma declaração pública sobre os dados que recolhe e como os usa."], ["Termos de serviço", "as regras que os utilizadores aceitam quando usam o seu produto."], ["Lançamento", "pôr o seu produto à disposição dos utilizadores."]],
          slides: [
            { title: "Honesto sobre a IA", bullets: ["Diga o que faz e os seus limites", "\"Gerado por IA: verifique, por favor\"", "FTC: as afirmações precisam de provas"] },
            { title: "Proteja os dados dos utilizadores", bullets: ["Saiba o que recolhe, reduza, guarde com segurança", "Elimine o que não precisa; prepare-se", "Veja os termos de dados do seu fornecedor de IA"] },
            { title: "Antes de receber pagamentos", bullets: ["Política de privacidade e termos", "Revistos por um advogado", "Forma fácil de falar com uma pessoa"] },
            { title: "Lance em pequeno", bullets: ["Primeiro alguns utilizadores do nicho", "Corrija e depois cresça"] }
          ],
          sources: [{ name: "FTC: Noções básicas de publicidade e marketing (Advertising and Marketing Basics)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Proteger Informações Pessoais, um Guia para Empresas (Protecting Personal Information)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Tarefa final: escreva a sua lista de verificação de lançamento (afirmações honestas, lista de dados, termos do fornecedor, política de privacidade e termos para um advogado rever, forma de contacto, primeiro lançamento pequeno) e junte o seu kit inicial de SaaS com IA com o seu plano, protótipo e folha de preços.",
          youCanNow: "planear, fazer um protótipo, pôr o preço e preparar um lançamento honesto e seguro de um pequeno produto SaaS com IA.",
          quickCheck: [
            { objective: "O6", q: "O que deve a sua publicidade dizer sobre os resultados da IA?", options: ["Que são sempre perfeitos", "Que substituem os especialistas", "Que são gerados por IA e devem ser verificados", "Nada sobre a IA"], answer: 2, why: "As afirmações honestas dizem aos utilizadores o que a IA faz e os seus limites." },
            { objective: "O6", q: "Está pronto para lançar. Para quem lança primeiro?", options: ["Para todos de uma vez com anúncios pagos", "Para ninguém; continua a testar para sempre", "Só para pessoas fora do seu nicho", "Para um grupo pequeno de utilizadores do nicho"], answer: 3, why: "Um primeiro lançamento pequeno deixa-o corrigir problemas com segurança." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Construir, pôr o preço e lançar",
        questions: [
          { objective: "O4", q: "O que deve testar antes de construir qualquer aplicação?", options: ["Se a IA consegue fazer bem a tarefa com o seu pedido numa conversa", "O logótipo", "A página de preços", "O nome do domínio"], answer: 0, why: "Se a IA não consegue fazer a tarefa, uma aplicação não vai resolver isso." },
          { objective: "O4", q: "Qual é um nível de protótipo rápido para quem não programa?", options: ["Nada até ao lançamento", "Um centro de dados próprio completo", "Contratar 20 engenheiros", "Um modelo clicável do ecrã"], answer: 3, why: "Os modelos de ecrã deixam os utilizadores reagir sem código." },
          { objective: "O5", q: "Porque definir limites de uso nos planos?", options: ["Para irritar os utilizadores", "Os utilizadores pesados podem custar muito mais em uso de IA", "Porque a lei obriga", "Para esconder os preços"], answer: 1, why: "Os limites mantêm os custos da IA previsíveis." },
          { objective: "O6", q: "O que deve a sua publicidade dizer sobre os resultados da IA?", options: ["Que são gerados por IA e devem ser verificados", "Que são 100% exatos", "Que substituem os profissionais", "Nada"], answer: 0, why: "Limites honestos criam confiança e evitam afirmações enganosas." },
          { objective: "O6", q: "Antes de receber pagamentos, deve ter:", options: ["O apoio de uma celebridade", "Mil funções", "Uma política de privacidade e termos de serviço revistos por um advogado", "Nenhuma informação de contacto"], answer: 2, why: "Eles definem regras claras e protegem você e os utilizadores." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criar Produtos SaaS com IA",
    questions: [
      { objective: "O1", q: "SaaS quer dizer:", options: ["Vendas e uma loja", "Software como serviço", "IA simples e pesquisa", "Serviço de aplicação de acesso seguro"], answer: 1, why: "É software na internet pago por assinatura." },
      { objective: "O1", q: "Os pequenos produtos SaaS com IA costumam ganhar por:", options: ["Copiar um grande assistente de conversa", "Fazer tudo para todos", "Ser os mais caros", "Fazer muito bem uma tarefa para um tipo de utilizador"], answer: 3, why: "Um foco estreito ganha às ferramentas gerais." },
      { objective: "O1", q: "Um bom nicho tem utilizadores que:", options: ["Não têm orçamento", "Nunca fazem a tarefa", "Não se consegue alcançar", "Fazem a tarefa muitas vezes e já pagam por software"], answer: 3, why: "É provável que esses utilizadores comprem." },
      { objective: "O1", q: "Antes de construir, deve falar com:", options: ["Ninguém", "Três pessoas do nicho", "Só investidores", "Só a IA"], answer: 1, why: "Utilizadores reais confirmam o problema." },
      { objective: "O2", q: "Um MVP de SaaS com IA costuma ser:", options: ["Uma empresa completa", "Dez aplicações", "Um ecrã: entrada, tarefa da IA, verificação pelo utilizador, resultado", "Um logótipo"], answer: 2, why: "É a versão útil mais pequena." },
      { objective: "O2", q: "Escrever o que a IA nunca pode fazer ajuda a:", options: ["Dar forma ao seu pedido de instruções e ao seu ecrã", "Tornar a aplicação mais lenta", "Subir o preço", "Nada"], answer: 0, why: "Limites claros reduzem os erros que fazem mal." },
      { objective: "O3", q: "Uma API deixa a sua aplicação:", options: ["Pagar impostos", "Imprimir documentos", "Enviar pedidos a um modelo de IA e receber respostas", "Contratar pessoal"], answer: 2, why: "É isso que uma API faz." },
      { objective: "O3", q: "Onde deve verificar os preços atuais dos modelos de IA?", options: ["Na página de preços do fornecedor", "Num artigo antigo de um blogue", "Num palpite", "Na aplicação de um concorrente"], answer: 0, why: "Os preços mudam muitas vezes." },
      { objective: "O3", q: "O custo por utilizador estima-se a partir de:", options: ["Número de logótipos", "Pedidos por mês x tamanho x preço", "Só a sua renda", "A idade do utilizador"], answer: 1, why: "O uso é o que faz o custo da IA." },
      { objective: "O3", q: "Se alguém ficar com a sua chave de API, pode:", options: ["Corrigir os seus erros", "Nada", "Só ler o seu e-mail", "Usar a API e gastar o seu dinheiro"], answer: 3, why: "As chaves são cobradas a você." },
      { objective: "O4", q: "Testa o seu pedido com dez dados e 4 resultados são bons. E agora?", options: ["Melhora o pedido antes de construir a aplicação", "Constrói a aplicação na mesma", "Lança amanhã", "Sobe os preços"], answer: 0, why: "Primeiro procure que a maioria dos resultados seja boa." },
      { objective: "O4", q: "O Google Colab é:", options: ["Só uma folha de cálculo", "Uma aplicação de pagamentos", "Uma rede social", "Um notebook gratuito na internet para correr Python num navegador"], answer: 3, why: "Deixa testar código sem instalar nada." },
      { objective: "O4", q: "Quando vê utilizadores a experimentar o seu protótipo, anote:", options: ["A morada de casa deles", "As palavras-passe deles", "Onde ficam presos e onde o resultado da IA precisou de correção", "Nada"], answer: 2, why: "Isto mostra o que corrigir." },
      { objective: "O5", q: "O preço deve começar por:", options: ["Um número ao acaso", "O valor que o produto dá ao utilizador", "O logótipo do seu concorrente", "A cor do seu site"], answer: 1, why: "O valor define quanto os utilizadores vão pagar." },
      { objective: "O5", q: "Qual é um custo de SaaS por utilizador?", options: ["Um troféu", "O almoço do utilizador", "As suas férias", "O uso da IA"], answer: 3, why: "O uso da IA cresce com cada utilizador." },
      { objective: "O5", q: "Para o imposto sobre vendas de software, deve:", options: ["Perguntar aos utilizadores", "Achar que nunca se aplica", "Verificar na agência de receitas do seu estado ou perguntar a um contabilista", "Ignorar"], answer: 2, why: "As regras mudam de estado para estado." },
      { objective: "O6", q: "O princípio de dados da FTC \"reduza\" (scale down) quer dizer:", options: ["Recolher e guardar só o que precisa", "Fazer o seu logótipo mais pequeno", "Baixar o seu preço", "Contratar menos pessoas"], answer: 0, why: "Menos dados quer dizer menos risco." },
      { objective: "O6", q: "Porque verificar os termos de dados do seu fornecedor de IA?", options: ["Para mudar as letras", "Para saber o que acontece aos dados dos utilizadores enviados pela API", "Para ter créditos grátis", "Não é preciso"], answer: 1, why: "Tem de dizer aos utilizadores como os dados deles são tratados." },
      { objective: "O6", q: "Quem deve rever a sua política de privacidade e os seus termos?", options: ["Só uma conversa com IA", "Um advogado", "O seu primeiro utilizador", "Ninguém"], answer: 1, why: "Os documentos legais precisam de revisão profissional." },
      { objective: "O6", q: "Uma forma segura de lançar é:", options: ["Primeiro para um grupo pequeno de utilizadores do nicho", "Para todos de uma vez sem apoio", "Sem forma de contacto", "Sem testar"], answer: 0, why: "Um lançamento pequeno deixa corrigir problemas cedo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      4,
      6,
      8,
      10,
      12,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Plano do produto",
        objective: "O2",
        notYet: "O nicho, o utilizador, o problema ou a função principal estão vagos ou faltam.",
        meets: "Uma página com nicho, utilizador, problema, uma função principal e regras de \"nunca\".",
        exceeds: "Inclui o que um utilizador do nicho disse sobre a ideia."
      },
      {
        name: "Protótipo",
        objective: "O4",
        notYet: "Não há protótipo, ou o pedido não foi testado com dados reais.",
        meets: "Um modelo de ecrã, uma aplicação sem código ou um notebook para a função principal, testado com dez dados anónimos.",
        exceeds: "Mostrado a um utilizador do nicho, com mudanças feitas a partir do que ele fez."
      },
      {
        name: "Estimativa do custo da IA",
        objective: "O3",
        notYet: "Não há custo por utilizador, ou os preços não vêm da página do fornecedor.",
        meets: "Custo da IA por utilizador por mês a partir dos pedidos, do tamanho e do preço atual, com as fórmulas verificadas.",
        exceeds: "Mostra os custos de um utilizador leve e de um utilizador pesado."
      },
      {
        name: "Folha de preços",
        objective: "O5",
        notYet: "O preço não cobre o uso da IA e os outros custos.",
        meets: "Dois planos com limites e o lucro por utilizador em cada um, com as fórmulas verificadas.",
        exceeds: "Liga o preço de cada plano ao valor que dá aos utilizadores."
      },
      {
        name: "Lista de verificação de lançamento",
        objective: "O6",
        notYet: "Faltam afirmações honestas, dados, privacidade e termos, ou uma forma de contacto.",
        meets: "Todos os pontos da lista, revisão por advogado planeada e um primeiro lançamento pequeno.",
        exceeds: "Indica exatamente que dados dos utilizadores são recolhidos e o que o fornecedor faz com eles."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que mostram o seu protótipo a pelo menos três utilizadores do nicho em 30 dias (inquérito de seguimento)",
      "Alunos que lançam para um primeiro grupo pequeno ou conseguem um primeiro utilizador pagante",
      "Alunos que começam outro curso de empreendedorismo da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com uma folha de cálculo e um assistente de IA gratuito",
      "Opcional: um notebook gratuito como o Google Colab, ou uma ferramenta sem código ou de modelos de ecrã",
      "Dez dados reais anónimos do nicho escolhido",
      "Cerca de 75 minutos para as lições e as verificações, mais tempo para construir e testar o protótipo"
    ],
    facilitatorNotes: [
      "Deixe quem não programa construir um modelo de ecrã clicável; não é preciso uma aplicação que funcione.",
      "Nunca mostre uma chave de API verdadeira no ecrã; ensine os alunos a manter as chaves fora das conversas e dos ficheiros.",
      "Verifique os preços atuais dos modelos de IA na página do fornecedor antes da sessão sobre preços.",
      "Lembre aos alunos que as políticas de privacidade e os termos precisam de um advogado, e as questões de imposto sobre vendas de um contabilista.",
      "Avalie o kit inicial com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
