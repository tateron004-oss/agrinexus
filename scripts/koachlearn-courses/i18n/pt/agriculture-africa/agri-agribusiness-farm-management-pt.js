"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-agribusiness-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const CBK = { name: "Central Bank of Kenya (Banco Central do Quénia: veja as suas listas de instituições licenciadas)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria (Banco Central da Nigéria: proteção do consumidor e instituições licenciadas)", url: "https://www.cbn.gov.ng" };
const FAO_CSA = { name: "FAO: Climate-Smart Agriculture Sourcebook (manual de agricultura inteligente face ao clima: gestão do risco na exploração)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-agribusiness-farm-management-pt",
  lang: "pt",
  translationOf: "agri-agribusiness-farm-management",
  category: "Agriculture (Africa)",
  name: "Agronegócio e Gestão da Machamba",
  skills: "Manter registos simples da machamba, Calcular a margem bruta de cada cultura ou criação, Encontrar mercados e obter melhores preços, Gerir o fluxo de caixa com dinheiro móvel, Avaliar o custo do crédito e gerir o risco, Escrever um plano de negócio da machamba numa página",
  outcome: "gerir a sua machamba como um negócio: manter registos, calcular que culturas ou criações rendem mais por acre, planear o seu dinheiro ao longo do ano, avaliar se um empréstimo faz sentido e escrever um plano de negócio de uma página que pode mostrar a uma cooperativa, a quem empresta ou a um parceiro.",
  about: [
    "Este curso é para pequenos agricultores, jovens empreendedores agrícolas, grupos de mulheres e de jovens, líderes de cooperativas e extensionistas no Quénia, na Nigéria e em toda a África que querem que a sua machamba renda mais e tenha menos risco.",
    "O Capítulo 1 trata a machamba como um negócio: manter registos simples, calcular a margem bruta de cada atividade (como milho, feijão, tomate, aves ou gado leiteiro) e encontrar mercados e melhores preços. O Capítulo 2 é sobre dinheiro e crescimento: usar o dinheiro móvel para gerir o fluxo de caixa, decidir se deve pedir emprestado e como gerir o risco, e escrever um plano de negócio de uma página.",
    "Todos os exemplos de dinheiro deste curso são números inventados para mostrar o método; use os seus preços locais. Este curso não dá conselhos de investimento nem de empréstimo: antes de pedir emprestado, compare ofertas, confirme que quem empresta está licenciado e fale com um conselheiro de confiança, como a sua cooperativa, a sua SACCO ou o seu extensionista. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Escreva um plano de negócio de uma página para a sua machamba (ou uma machamba de exemplo): o que produz e em quanta terra, as margens brutas de pelo menos duas atividades (com os seus preços e custos locais), a quem vai vender e como, um esboço do fluxo de caixa de 12 meses que mostre quando o dinheiro entra e sai, qualquer empréstimo que esteja a pensar pedir com o seu custo total e como o pagaria, os seus principais riscos e como os vai reduzir, e três metas para a próxima época.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores, jovens empreendedores agrícolas, grupos de mulheres e de jovens, líderes de cooperativas e extensionistas no Quénia, na Nigéria e em toda a África que querem que a sua machamba renda mais e tenha menos risco.",
    startingPoint: "Sabem cultivar e criar animais e sabem mais ou menos quanto gastam e ganham. Poucos mantêm registos escritos, calculam margens brutas, planeiam o fluxo de caixa ao longo do ano ou comparam o custo total dos empréstimos.",
    gap: "Sem registos e números, os agricultores não veem que atividade dá lucro, ficam sem dinheiro nos meses de fome, vendem aos preços mais baixos e podem aceitar empréstimos que não conseguem pagar. Uma maneira simples de pensar como negócio ajuda-os a ganhar mais, a pedir emprestado com segurança e a mostrar um plano claro a quem empresta e a quem compra.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos usam o português como segunda língua",
      "Aparelhos: um caderno ou um telefone simples; uma folha de cálculo no telefone ajuda, mas é opcional",
      "Matemática: somar, subtrair e totais simples; os números de exemplo são inventados e os alunos usam os seus preços locais",
      "Segurança do dinheiro: nunca partilhar PINs ou códigos de dinheiro móvel e usar só quem empresta com licença",
      "Os preços, quem empresta e os reguladores mudam de país para país e de época para época: os alunos confirmam com cooperativas, extensionistas e reguladores oficiais"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando um caderno ou uma folha de cálculo no telefone", action: "manter registos do dinheiro que entra, do dinheiro que sai e da produção da machamba", standard: "escrevendo cada item no mesmo dia, incluindo os dias de trabalho da família" },
    { id: "O2", condition: "Com colheitas, preços e custos variáveis", action: "calcular a margem bruta por acre de duas atividades e compará-las", standard: "com as contas certas e tendo em conta o risco e o trabalho, não só a margem" },
    { id: "O3", condition: "Com a sua cultura principal", action: "comparar pelo menos três maneiras de vender e escolher a melhor", standard: "com preços de vários compradores, a qualidade que cada um exige e as condições de qualquer contrato por escrito" },
    { id: "O4", condition: "Para os próximos 12 meses", action: "planear o fluxo de caixa da sua machamba e usar o dinheiro móvel com segurança", standard: "marcando os meses de fome com um plano para cada um e nunca partilhando um PIN ou código" },
    { id: "O5", condition: "Com uma oferta de empréstimo", action: "calcular o custo total do empréstimo e decidir se ele cabe no seu fluxo de caixa", standard: "somando todas as taxas e confirmando que quem empresta está licenciado" },
    { id: "O6", condition: "Usando os seus registos e números", action: "escrever um plano de negócio da machamba numa página, com os seus principais riscos e como os vai reduzir", standard: "com todas as partes pedidas e três metas com números" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A machamba como negócio",
      lessons: [
        {
          objectives: ["O1"],
          title: "Manter registos simples da machamba",
          minutes: 5,
          goal: "Começar um registo simples do dinheiro que entra, do dinheiro que sai e da produção da machamba.",
          text: [
            "Não se pode gerir o que não se mede. Muitos agricultores sabem mais ou menos quanto gastam e ganham, mas sem registos é difícil ver que cultura dá lucro, planear, ou conseguir um empréstimo ou um contrato com um comprador.",
            "Mantenha três registos simples. Dinheiro que sai: data, para quê (semente, adubo, mão de obra, transporte, veterinário), que cultura ou animal, valor. Dinheiro que entra: data, o que vendeu, quanto, a quem, valor. Produção: datas de sementeira, insumos usados, colheita por talhão, ovos ou leite por dia. Um caderno serve; uma folha de cálculo no telefone também. Os extratos do dinheiro móvel também ajudam a lembrar.",
            "Escreva os registos no mesmo dia. Nos registos, separe o dinheiro da machamba do dinheiro da casa, mesmo que saiam do mesmo bolso, e conte também os dias de trabalho da família, porque o seu tempo tem valor."
          ],
          steps: ["Escolha um caderno ou uma folha de cálculo no telefone.", "Faça três páginas ou folhas: dinheiro que sai, dinheiro que entra, produção.", "Registe cada item no mesmo dia: data, o quê, que cultura ou animal, valor.", "Use os extratos do dinheiro móvel para preencher o que falta.", "Conte os dias de trabalho da família, além do trabalho pago."],
          words: [["Registos", "escrever o que acontece na machamba: dinheiro, insumos e produção."], ["Atividade", "uma parte do trabalho da machamba, como milho, feijão, aves ou gado leiteiro."]],
          slides: [
            { title: "Porquê registos?", bullets: ["Ver que cultura dá lucro", "Planear a época", "Conseguir um empréstimo ou contrato com comprador"] },
            { title: "Três registos simples", bullets: ["Sai: data, o quê, que atividade, valor", "Entra: data, o que vendeu, a quem, valor", "Produção: sementeira, insumos, colheita, ovos, leite"] },
            { title: "Bons hábitos", bullets: ["Escreva no mesmo dia", "Dinheiro da machamba separado do da casa", "Conte também o trabalho da família"] }
          ],
          tryIt: "Comece hoje os seus registos. Faça as três folhas e preencha pelo menos cinco itens do último mês, de memória e com o seu extrato do dinheiro móvel.",
          youCanNow: "manter registos simples do dinheiro que entra, do dinheiro que sai e da produção de cada atividade da machamba.",
          quickCheck: [
            { objective: "O1", q: "Quais são os três registos simples da machamba neste curso?", options: ["Dinheiro que sai, dinheiro que entra e produção", "Tempo, preços e notícias", "Nomes, telefones e moradas", "Sementes, ferramentas e edifícios"], answer: 0, why: "Estes três registos mostram o que gasta, ganha e produz." },
            { objective: "O1", q: "Esqueceu-se de escrever a compra de adubo da semana passada. O que o pode ajudar a lembrar?", options: ["Adivinhar um número", "O seu extrato do dinheiro móvel", "Deixar de fora", "Pedir à IA para o inventar"], answer: 1, why: "Os extratos do dinheiro móvel ajudam a preencher o que falta nos registos." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Margem bruta: que cultura rende mais?",
          minutes: 6,
          goal: "Calcular a margem bruta por acre de duas atividades e compará-las.",
          text: [
            "Margem bruta = receita de uma atividade menos os custos que lhe pertencem (custos variáveis: semente, adubo, químicos, mão de obra contratada, sacos, transporte). Calcule-a por acre (ou por hectare, ou por 100 aves) para poder comparar as atividades de forma justa.",
            "Exemplo com números inventados em xelins quenianos, um acre cada. Milho: 18 sacos a 3,500 = 63,000 de receita; custos 34,000 (semente 3,000, adubo 14,000, mão de obra 12,000, químicos 2,000, sacos e transporte 3,000); margem bruta 29,000. Feijão: 5 sacos a 9,000 = 45,000 de receita; custos 18,000; margem bruta 27,000. As margens são parecidas, mas o feijão também dá azoto ao solo e colhe-se mais cedo. Use os seus preços: eles mudam de lugar para lugar e de época para época.",
            "Compare também a margem por dia de trabalho e o risco: uma cultura com margem alta mas com grande probabilidade de falhar pode não ser a melhor escolha. Os custos fixos (renda da terra, ferramentas, um tanque de água) são pagos com o total de todas as margens brutas."
          ],
          steps: ["Escolha duas atividades.", "Escreva a colheita esperada e o preço por unidade para ter a receita.", "Liste os custos variáveis de cada uma.", "Margem bruta = receita - custos variáveis, por acre.", "Compare a margem, o trabalho e o risco."],
          words: [["Margem bruta", "a receita de uma atividade menos os custos que lhe pertencem."], ["Custos variáveis", "custos que mudam com a quantidade que produz, como semente, adubo e mão de obra."], ["Custos fixos", "custos que ficam iguais seja o que for que produza, como a renda da terra ou um tanque de água."]],
          slides: [
            { title: "A fórmula", bullets: ["Margem bruta = receita - custos variáveis", "Por acre, hectare ou 100 aves"] },
            { title: "Exemplo (KSh inventados, 1 acre)", bullets: ["Milho: 63,000 - 34,000 = 29,000", "Feijão: 45,000 - 18,000 = 27,000", "Use os seus preços locais"] },
            { title: "Compare também", bullets: ["Margem por dia de trabalho", "Risco de falhar", "Custos fixos pagos com todas as margens"] }
          ],
          tryIt: "Calcule a margem bruta por acre de duas atividades da sua machamba (ou duas em que está a pensar) com os seus preços locais. Qual é maior, e qual tem mais risco?",
          youCanNow: "calcular e comparar margens brutas para decidir o que cultivar ou criar.",
          quickCheck: [
            { objective: "O2", q: "Qual é um custo fixo e não um custo variável?", options: ["Semente", "Adubo", "Um tanque de água", "Mão de obra contratada para a sacha"], answer: 2, why: "Um tanque de água paga-se seja o que for que cultive, por isso é um custo fixo." },
            { objective: "O2", q: "O tomate dá 50,000 por acre e custa 30,000 em custos variáveis. Qual é a margem bruta?", options: ["80,000", "30,000", "50,000", "20,000"], answer: 3, why: "A margem bruta é a receita menos os custos variáveis: 50,000 - 30,000 = 20,000." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Encontrar mercados e melhores preços",
          minutes: 5,
          goal: "Comparar pelo menos três maneiras de vender uma cultura e escolher a melhor.",
          text: [
            "Os preços muitas vezes caem logo depois da colheita, quando todos vendem, e sobem meses mais tarde. Vender sozinho, em pequenas quantidades, ao primeiro comerciante à porta da machamba é fácil, mas muitas vezes paga menos. Compare: o mercado local, os comerciantes, as cooperativas que juntam a produção, as fábricas de processamento e as escolas ou hotéis, a agricultura por contrato com um comprador e, onde existam, os armazéns certificados que guardam o grão e podem ajudar os agricultores a obter crédito com esse grão como garantia.",
            "Procure informação sobre preços: pergunte a vários compradores, consulte os serviços de preços de mercado e a rádio, e fale com a sua cooperativa. Conheça o padrão de qualidade do comprador (humidade, classificação, tamanho, limpeza) e cumpra-o: produtos limpos, secos e escolhidos rendem mais e duram mais tempo.",
            "Os contratos podem dar um mercado seguro, mas leia as condições: o preço ou como é fixado, a quantidade, o padrão de qualidade, as datas de entrega, quem paga o transporte, a data e a forma de pagamento, e o que acontece se a colheita falhar. Peça-o por escrito e peça à sua cooperativa ou ao seu extensionista para o verificar."
          ],
          steps: ["Liste pelo menos três maneiras de vender a sua cultura.", "Obtenha preços de vários compradores e de serviços de informação de mercado.", "Conheça o padrão de qualidade de cada comprador.", "Pense em juntar a produção com um grupo ou guardá-la para um preço melhor.", "Leia as condições de qualquer contrato e peça-o por escrito."],
          words: [["Juntar a produção", "pôr junta a produção de muitos agricultores para vender maiores quantidades a melhores preços."], ["Agricultura por contrato", "um acordo para produzir e vender a um comprador com condições fixadas."], ["Padrão de qualidade", "as regras do comprador sobre humidade, tamanho, classe e limpeza."]],
          slides: [
            { title: "O momento conta", bullets: ["Preços muitas vezes baixos logo após a colheita", "Mais altos meses depois", "Guardar e juntar a produção pode ajudar"] },
            { title: "Maneiras de vender", bullets: ["Mercado, comerciantes, cooperativas", "Fábricas de processamento, escolas, hotéis", "Contratos, armazéns certificados"] },
            { title: "Receber mais", bullets: ["Compare vários preços", "Cumpra o padrão de qualidade", "Leia os contratos; peça-os por escrito"] }
          ],
          tryIt: "Para a sua cultura principal, escreva três maneiras de a vender, o preço que cada uma pagaria hoje (pergunte ou estime), a qualidade que cada uma exige, e qual vai escolher e porquê.",
          youCanNow: "comparar mercados e escolher a melhor maneira de vender uma cultura.",
          quickCheck: [
            { objective: "O3", q: "O que é juntar a produção?", options: ["Vender em grupo para ter maiores quantidades", "Pôr água no grão", "Comprar semente em pacotes pequenos", "Guardar o grão em casa"], answer: 0, why: "Juntar a produção com uma cooperativa ou um grupo faz lotes maiores, que podem ter melhores preços." },
            { objective: "O3", q: "Um comprador quer o seu feijão, mas não diz nada sobre quando vai pagar. O que faz?", options: ["Entrega e espera", "Pede a data e a forma de pagamento por escrito", "Vende-lhe na mesma", "Baixa o seu preço"], answer: 1, why: "Um contrato deve fixar por escrito a data e a forma de pagamento." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A machamba como negócio",
        questions: [
          { objective: "O1", q: "Porquê manter registos da machamba?", options: ["Só servem para os funcionários dos impostos", "Para ver que atividade dá lucro, planear e conseguir empréstimos ou contratos", "Para passar o tempo", "Os registos não servem para nada"], answer: 1, why: "Os registos transformam palpites em decisões." },
          { objective: "O2", q: "A margem bruta é:", options: ["O total da terra da machamba", "A receita menos os custos variáveis de uma atividade", "O preço do adubo", "O dinheiro emprestado"], answer: 1, why: "Mostra quanto cada atividade rende antes dos custos fixos." },
          { objective: "O2", q: "Qual é um custo variável?", options: ["Semente", "A terra que é sua", "Um tanque de água já construído", "A sua casa"], answer: 0, why: "A semente muda com a quantidade que semeia." },
          { objective: "O3", q: "Um comprador oferece um contrato. O que deve verificar?", options: ["Só o nome do comprador", "Nada; os contratos são sempre justos", "Só a cor dos sacos", "Preço, quantidade, qualidade, entrega, pagamento e o que acontece se a colheita falhar"], answer: 3, why: "As condições decidem se o contrato o ajuda." },
          { objective: "O3", q: "Porque é que os preços muitas vezes caem logo depois da colheita?", options: ["As culturas encolhem", "Os compradores deixam de comer", "Muitos agricultores vendem ao mesmo tempo", "O governo fixa-os baixos"], answer: 2, why: "Muita oferta na colheita faz baixar os preços." }
        ]
      }
    },
    {
      name: "Capítulo 2: Dinheiro, risco e crescimento",
      lessons: [
        {
          objectives: ["O4"],
          title: "Dinheiro móvel e fluxo de caixa",
          minutes: 5,
          goal: "Planear um fluxo de caixa de 12 meses e usar o dinheiro móvel com segurança na machamba.",
          text: [
            "Muitas machambas têm problemas de dinheiro não porque tenham prejuízo, mas porque o dinheiro entra uma ou duas vezes por ano e sai o ano todo. Um plano de fluxo de caixa mostra, mês a mês, o dinheiro que espera receber e gastar, para que veja os meses de fome a chegar e possa planear.",
            "O dinheiro móvel (como o M-Pesa no Quénia, e as carteiras móveis e aplicações bancárias na Nigéria) facilita pagar trabalhadores e fornecedores, receber pagamentos de compradores, poupar e manter um registo. Alguns agricultores têm uma carteira ou conta separada para a machamba, para que o dinheiro da machamba e o da casa não se misturem.",
            "Proteja-se: nunca partilhe o seu PIN ou código de uso único com ninguém, incluindo pessoas que dizem ser da empresa de dinheiro móvel ou um comprador; confirme o nome antes de enviar; e tenha cuidado com mensagens inesperadas de \"transferência por engano\" que lhe pedem para devolver dinheiro. Comunique os problemas ao fornecedor pelos seus canais oficiais."
          ],
          steps: ["Desenhe 12 colunas, uma por mês.", "Escreva o dinheiro que espera receber em cada mês (vendas, outras receitas).", "Escreva o dinheiro que espera gastar (insumos, mão de obra, propinas escolares, comida).", "Encontre os meses em que sai mais do que entra e planeie poupanças ou o momento das vendas.", "Use uma carteira ou conta separada para o dinheiro da machamba; nunca partilhe o seu PIN."],
          words: [["Fluxo de caixa", "o momento em que o dinheiro entra e sai."], ["Meses de fome", "meses em que falta dinheiro ou comida, muitas vezes antes da colheita."], ["PIN", "o número secreto que protege a sua conta de dinheiro móvel."]],
          slides: [
            { title: "Fluxo de caixa, não só lucro", bullets: ["Dinheiro entra uma ou duas vezes por ano", "Dinheiro sai o ano todo", "Planeie os meses de fome"] },
            { title: "O dinheiro móvel ajuda", bullets: ["Pagar trabalhadores e fornecedores", "Receber pagamentos de compradores", "Poupar e manter um registo"] },
            { title: "Proteja-se", bullets: ["Nunca partilhe o PIN ou o código", "Confirme o nome antes de enviar", "Cuidado com o truque da \"transferência por engano\""] }
          ],
          tryIt: "Desenhe o seu plano de fluxo de caixa de 12 meses com o dinheiro que entra e o que sai. Marque com um círculo os meses de fome e escreva uma maneira de se preparar para cada um (poupar da colheita, vender aos poucos, uma pequena atividade fora da época).",
          youCanNow: "planear o fluxo de caixa da sua machamba ao longo do ano e usar o dinheiro móvel com segurança.",
          quickCheck: [
            { objective: "O4", q: "O que é que um plano de fluxo de caixa de 12 meses o ajuda a ver?", options: ["Que cultura cresce mais alta", "O tempo de cada mês", "Os meses de fome antes de chegarem", "O rendimento dos seus vizinhos"], answer: 2, why: "Mostra os meses em que sai mais dinheiro do que entra." },
            { objective: "O4", q: "As propinas escolares vencem num mês sem vendas da colheita. Qual é uma maneira de se preparar?", options: ["Gastar todo o dinheiro da colheita de uma vez", "Aceitar qualquer empréstimo oferecido por SMS", "Ignorar até lá", "Poupar parte do dinheiro da colheita ou vender aos poucos"], answer: 3, why: "Poupar da colheita ou vender aos poucos cobre os meses de fome." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Crédito e risco: pedir emprestado com cuidado",
          minutes: 6,
          goal: "Calcular o custo total de um empréstimo e decidir se faz sentido para a machamba.",
          text: [
            "Um empréstimo pode ajudar a comprar insumos ou equipamento que rendem mais do que custam. Também pode tornar-se uma armadilha. Antes de pedir emprestado, pergunte: o que vai comprar com o dinheiro, quanto a mais vai render, e quando? Vai conseguir pagar nas datas que quem empresta fixa, mesmo que a colheita seja fraca?",
            "Compare as ofertas pelo valor total que vai pagar, não só pela taxa de juro: some todos os juros, taxas e custos de seguro. Por exemplo (números inventados), pedir 20,000 emprestados e pagar 2,000 por mês durante 12 meses significa pagar 24,000: o empréstimo custa 4,000. Confirme que as datas de pagamento coincidem com quando o seu dinheiro entra. Os empréstimos digitais curtos podem ser muito caros quando soma as taxas.",
            "Use quem empresta com licença: bancos, bancos de microfinanças, SACCOs e cooperativas, e credores digitais aprovados pelo banco central ou pelo regulador certo (no Quénia, o Central Bank of Kenya lista as instituições licenciadas; na Nigéria, o Central Bank of Nigeria). Reduza o risco com poupanças, culturas variadas, seguro onde existir, e pedindo só o que o plano precisa. Fale com um conselheiro de confiança antes de assinar."
          ],
          steps: ["Escreva o que o empréstimo vai comprar e quanto a mais deve render.", "Some o total que vai pagar: juros, taxas, seguro.", "Compare as datas de pagamento com o seu plano de fluxo de caixa.", "Confirme que quem empresta está licenciado.", "Prepare-se para uma época má: poupanças, seguro, empréstimo menor.", "Peça conselho a alguém de confiança antes de assinar."],
          words: [["Juro", "o preço que paga para pedir dinheiro emprestado."], ["Custo total do crédito", "tudo o que paga a mais do que pediu emprestado: juros mais taxas e encargos."], ["SACCO", "uma cooperativa de poupança e crédito que pertence aos seus membros."], ["Garantia", "algo que promete a quem empresta se não conseguir pagar."]],
          slides: [
            { title: "Antes de pedir emprestado", bullets: ["O que vai comprar?", "Quanto a mais vai render, e quando?", "Consegue pagar se a colheita for fraca?"] },
            { title: "Compare o total", bullets: ["Juros + taxas + seguro", "Pede 20,000, paga 24,000: custo 4,000", "Os pagamentos batem com o seu fluxo de caixa?"] },
            { title: "Use quem empresta com licença", bullets: ["Bancos, microfinanças, SACCOs, cooperativas", "Quénia: listas do CBK; Nigéria: CBN", "Fale primeiro com um conselheiro de confiança"] }
          ],
          sources: [CBK, CBN],
          tryIt: "Pegue numa oferta de empréstimo real ou de exemplo. Escreva o valor emprestado, cada pagamento e taxa, o total pago e o custo total. Depois compare os meses de pagamento com o seu plano de fluxo de caixa e escreva se faz sentido.",
          youCanNow: "calcular o custo verdadeiro de um empréstimo e avaliar se pedir emprestado faz sentido para a sua machamba.",
          quickCheck: [
            { objective: "O5", q: "Como deve comparar duas ofertas de empréstimo?", options: ["Pelo valor total que vai pagar, incluindo todas as taxas", "Pela rapidez com que o dinheiro chega", "Só pela taxa de juro", "Pelo anúncio de quem empresta"], answer: 0, why: "O total pago mostra o custo verdadeiro de cada empréstimo." },
            { objective: "O5", q: "Os pagamentos de um empréstimo começam no mês a seguir à sementeira, antes da colheita. O que faz?", options: ["Assina depressa", "Compara com o seu fluxo de caixa e pede datas que batam com quando o dinheiro entra", "Pede mais emprestado para cobrir", "Usa o seu PIN para acelerar"], answer: 1, why: "As datas de pagamento devem bater com os meses em que o seu dinheiro entra." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever um plano de negócio da machamba numa página",
          minutes: 5,
          goal: "Escrever um plano de negócio de uma página que possa mostrar a uma cooperativa, a quem empresta ou a um parceiro.",
          text: [
            "Um plano de negócio é a história da sua machamba em números e metas. Quem empresta, as cooperativas, os compradores e os parceiros querem ver que conhece a sua machamba, o seu mercado e os seus riscos. Uma página clara é melhor do que dez vagas.",
            "Inclua: quem você é e a sua machamba (local, terra, o que produz); as suas atividades com as margens brutas; o seu mercado (quem compra, como, a que preço); o esboço do seu fluxo de caixa; o que precisa (insumos, equipamento, um empréstimo) e como isso se vai pagar; os seus principais riscos (tempo, pragas, preços) e o que faz em relação a eles; e três metas com números para a próxima época.",
            "Guarde os seus registos e contas por trás do plano, para poder responder a perguntas. Atualize-o todas as épocas com o que realmente aconteceu."
          ],
          steps: ["Resumo da machamba: local, terra, atividades.", "Margens brutas de cada atividade.", "Mercado: compradores, canal, preço.", "Esboço do fluxo de caixa e o que precisa.", "Riscos e como os gere.", "Três metas com números; atualize todas as épocas."],
          words: [["Plano de negócio", "um documento curto que explica o que um negócio faz, como ganha dinheiro, o que precisa e quais são as suas metas."], ["Meta", "um objetivo claro com um número e uma data."]],
          slides: [
            { title: "A história da sua machamba em números", bullets: ["Para quem empresta, cooperativas, compradores, parceiros", "Uma página clara vale mais do que dez vagas"] },
            { title: "O que entra no plano", bullets: ["Resumo da machamba e atividades", "Margens brutas e mercado", "Fluxo de caixa, necessidades, como se paga"] },
            { title: "Termine bem", bullets: ["Riscos e como os gere", "Três metas com números", "Atualize todas as épocas"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Tarefa final: escreva o plano de negócio de uma página da sua machamba, com margens brutas de duas atividades, mercado, fluxo de caixa de 12 meses, qualquer empréstimo e o seu custo total, riscos e respostas, e três metas para a próxima época.",
          youCanNow: "escrever um plano de negócio da machamba numa página, apoiado nos seus próprios registos e números.",
          quickCheck: [
            { objective: "O6", q: "Porquê guardar os registos e as contas por trás do seu plano de uma página?", options: ["Para tornar o plano mais longo", "Quem empresta não lê planos", "Para poder responder a perguntas sobre os seus números", "Para esconder o seu rendimento real"], answer: 2, why: "Os registos apoiam o seu plano quando quem empresta ou quem compra faz perguntas." },
            { objective: "O6", q: "O seu milho rendeu menos do que o planeado nesta época. O que faz com o seu plano de negócio?", options: ["Deita-o fora", "Mantém os números antigos", "Muda só as metas", "Atualiza-o com o que realmente aconteceu"], answer: 3, why: "Um plano atualiza-se todas as épocas com os resultados reais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Dinheiro, risco e crescimento",
        questions: [
          { objective: "O4", q: "Porque é que uma machamba com lucro pode mesmo assim ficar sem dinheiro?", options: ["O lucro não é real", "O dinheiro entra uma ou duas vezes por ano mas sai o ano todo", "O dinheiro móvel perde-o", "Os registos causam isso"], answer: 1, why: "É o momento do dinheiro, e não só o lucro, que decide se consegue pagar as contas." },
          { objective: "O4", q: "Alguém que liga \"do seu fornecedor de dinheiro móvel\" pede o seu PIN. Você deve:", options: ["Dá-lo depressa", "Dar metade", "Nunca o partilhar; contactar o fornecedor pelos canais oficiais", "Enviá-lo por SMS"], answer: 2, why: "Os fornecedores verdadeiros nunca pedem o seu PIN." },
          { objective: "O5", q: "Pede 20,000 emprestados e paga 2,000 por mês durante 12 meses. O empréstimo custa:", options: ["4,000", "2,000", "20,000", "Nada"], answer: 0, why: "Paga 24,000, que são 4,000 a mais do que pediu emprestado." },
          { objective: "O5", q: "Antes de aceitar um empréstimo, confirme que quem empresta:", options: ["É amigo do seu vizinho", "É muito rápido", "Está nas redes sociais", "Está licenciado pelo banco central ou pelo regulador certo"], answer: 3, why: "Quem empresta com licença segue regras que protegem quem pede emprestado." },
          { objective: "O6", q: "Um bom plano de negócio da machamba é:", options: ["Longo e vago", "Uma página clara apoiada em registos e números", "Só uma lista de desejos", "Segredo para todos"], answer: 1, why: "Planos curtos e concretos são mais fáceis de pôr em prática e de confiar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Agronegócio e Gestão da Machamba",
    questions: [
      { objective: "O1", q: "Qual é um registo simples da machamba?", options: ["Dinheiro que sai: data, o quê, atividade, valor", "Uma fotografia do céu", "Uma lista de canções", "Nada escrito"], answer: 0, why: "Registar o dinheiro que sai por atividade mostra os custos." },
      { objective: "O1", q: "Quando deve escrever os registos?", options: ["Uma vez por ano", "No mesmo dia", "Só quando lhe pedem", "Nunca"], answer: 1, why: "Os registos do mesmo dia são exatos." },
      { objective: "O1", q: "Porquê contar os dias de trabalho da família?", options: ["São grátis", "Para pagar impostos", "O seu tempo tem valor e influencia que atividade dá lucro", "Não é preciso"], answer: 2, why: "O trabalho não pago continua a ser um custo real de tempo." },
      { objective: "O2", q: "Uma atividade é:", options: ["Um banco", "Um trator", "Um mercado", "Uma parte do trabalho da machamba, como milho ou aves"], answer: 3, why: "Cada atividade é medida à parte." },
      { objective: "O2", q: "Receita 63,000, custos variáveis 34,000. A margem bruta é:", options: ["29,000", "34,000", "63,000", "97,000"], answer: 0, why: "63,000 - 34,000 = 29,000." },
      { objective: "O2", q: "Porquê calcular a margem bruta por acre?", options: ["Para os números ficarem maiores", "Para comparar as atividades de forma justa", "Porque os compradores pedem", "Para pagar a renda"], answer: 1, why: "A mesma unidade de terra torna a comparação justa." },
      { objective: "O2", q: "A renda da terra que paga seja o que for que cultive é:", options: ["Um custo variável", "Uma margem bruta", "Um custo fixo", "Uma venda"], answer: 2, why: "Os custos fixos não mudam com a quantidade que produz." },
      { objective: "O2", q: "Duas culturas têm margens parecidas, mas uma falha muitas vezes. Você deve:", options: ["Ignorar o risco", "Cultivar só a que tem risco", "Escolher pela cor", "Ter em conta o risco além da margem"], answer: 3, why: "Uma margem alta vale menos se for provável falhar." },
      { objective: "O3", q: "Juntar a produção com uma cooperativa ajuda porque:", options: ["Maiores quantidades podem ter melhores preços", "As culturas crescem mais depressa", "Não é preciso qualidade", "Os compradores pagam menos"], answer: 0, why: "Os compradores pagam mais por uma oferta grande e regular." },
      { objective: "O3", q: "Produtos limpos, secos e escolhidos:", options: ["Rendem menos", "Rendem mais e duram mais tempo", "Ninguém os quer", "Estragam-se mais depressa"], answer: 1, why: "Cumprir os padrões de qualidade aumenta o preço e o tempo de armazenamento." },
      { objective: "O3", q: "Antes de assinar um acordo de agricultura por contrato, você deve:", options: ["Assinar logo", "Combinar só por telefone", "Ler as condições e pedi-lo por escrito", "Deixar o comprador decidir tudo"], answer: 2, why: "As condições por escrito protegem-no." },
      { objective: "O4", q: "Um plano de fluxo de caixa mostra:", options: ["Só o lucro total", "As variedades das culturas", "A chuva", "O dinheiro que entra e sai, mês a mês"], answer: 3, why: "O momento do dinheiro é o que quer dizer fluxo de caixa." },
      { objective: "O4", q: "Os meses de fome são:", options: ["Meses em que falta dinheiro ou comida", "Meses de colheita", "Feriados", "Dias de mercado"], answer: 0, why: "Planear para eles evita empréstimos ou vendas de aflição." },
      { objective: "O4", q: "Uma vantagem de ter uma carteira ou conta separada para a machamba é:", options: ["Preços mais altos", "O dinheiro da machamba e o da casa não se misturam", "Não precisar de registos", "Adubo grátis"], answer: 1, why: "Separar mostra quanto a machamba realmente ganha e gasta." },
      { objective: "O4", q: "Uma mensagem diz que recebeu dinheiro por engano e pede para o devolver. Você deve:", options: ["Enviá-lo logo", "Enviar o dobro", "Verificar o seu saldo e extrato reais e contactar o fornecedor pelos canais oficiais", "Partilhar o seu PIN"], answer: 2, why: "As mensagens falsas de \"transferência por engano\" são um truque comum." },
      { objective: "O5", q: "Para comparar empréstimos, veja:", options: ["Só o anúncio", "Só a taxa de juro", "Só a rapidez com que é pago", "O valor total que vai pagar, incluindo todas as taxas"], answer: 3, why: "As taxas podem tornar caro um empréstimo com juro baixo." },
      { objective: "O5", q: "Uma SACCO é:", options: ["Uma cooperativa de poupança e crédito que pertence aos membros", "Uma praga das culturas", "Um imposto do governo", "Um drone"], answer: 0, why: "As SACCOs juntam as poupanças dos membros e emprestam aos membros." },
      { objective: "O5", q: "As datas de pagamento de um empréstimo devem:", options: ["Ser ignoradas", "Bater com os meses em que o seu dinheiro entra", "Ser sempre semanais", "Ser decididas depois de gastar o dinheiro"], answer: 1, why: "Fazer os pagamentos bater com as receitas evita a falta de pagamento." },
      { objective: "O6", q: "O que reduz o risco da machamba?", options: ["Pedir o máximo emprestado possível", "Cultivar só uma cultura", "Poupanças, culturas variadas e seguro onde existir", "Vender tudo na colheita"], answer: 2, why: "Repartir o risco protege a machamba nas épocas más." },
      { objective: "O6", q: "Um plano de negócio deve ser atualizado:", options: ["Nunca", "De dez em dez anos", "Só quando quem empresta pede", "Todas as épocas com o que realmente aconteceu"], answer: 3, why: "Atualizar mantém o plano real e útil." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 4, 7, 8, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Margens brutas", objective: "O2", notYet: "Menos de duas atividades, ou erros nas contas.", meets: "Margens brutas por acre de duas atividades, com preços locais e contas certas.", exceeds: "Compara o trabalho e o risco além da margem." },
      { name: "Mercado", objective: "O3", notYet: "Nenhum comprador nem maneira de vender indicados.", meets: "Diz quem vai comprar, como e a que preço.", exceeds: "Compara pelo menos três maneiras de vender e a qualidade que cada uma exige." },
      { name: "Fluxo de caixa", objective: "O4", notYet: "Nenhum esboço mês a mês.", meets: "Um esboço de 12 meses do dinheiro que entra e sai, com os meses de fome marcados.", exceeds: "Um plano para cada mês de fome." },
      { name: "Empréstimo", objective: "O5", notYet: "Um empréstimo aparece sem o custo total nem o plano de pagamento.", meets: "Qualquer empréstimo mostra o total pago, o custo total e como os pagamentos batem com o fluxo de caixa, ou não é preciso empréstimo.", exceeds: "Indica quem empresta com licença e um plano para uma época má." },
      { name: "Riscos e metas", objective: "O6", notYet: "Nenhum risco nem meta.", meets: "Os principais riscos com a maneira de os reduzir, e três metas com números.", exceeds: "Cabe numa página clara apoiada em registos." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Agricultores que mantêm registos durante pelo menos três meses (inquérito de seguimento)",
      "Rendimento ou margem bruta da machamba comparados com a época anterior, segundo os agricultores ou os parceiros",
      "Agricultores que entram numa cooperativa, assinam um contrato escrito com um comprador ou obtêm um empréstimo de quem empresta com licença, com um plano"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno e uma caneta, ou uma folha de cálculo no telefone",
      "Uma calculadora (um telefone simples tem uma)",
      "Os preços e custos locais do próprio aluno, ou os exemplos do curso",
      "Um extrato do dinheiro móvel, se o aluno tiver",
      "Cerca de 60 minutos de lições, mais tempo para recolher preços e escrever o plano"
    ],
    facilitatorNotes: [
      "Façam juntos uma margem bruta com os preços locais reais do grupo antes de os alunos fazerem a sua.",
      "Lembre os alunos de que os números do curso são inventados; os preços mudam de lugar para lugar e de época para época.",
      "Insista na segurança do dinheiro móvel: nunca partilhar um PIN ou código, e comunicar problemas só pelos canais oficiais.",
      "Convide um responsável de uma cooperativa ou SACCO para explicar o crédito licenciado; não recomende você mesmo nenhum empréstimo.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha em Ainda não de cada vez."
    ]
  }
};
