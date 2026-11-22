"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-ai-business-strategy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "smallbiz-ai-business-strategy-pt",
  lang: "pt",
  translationOf: "smallbiz-ai-business-strategy",
  category: "Small Business",
  name: "Criar uma Estratégia de IA para o Negócio e Ligar as Ferramentas",
  skills: "Mapear para onde vai o tempo, Escolher projetos de IA pelo valor e pelo risco, Fazer um piloto de 30 dias, Medir os resultados, Ligar ferramentas com segurança, Escrever uma política de uso da IA",
  outcome: "escrever um plano de IA de uma página para o seu negócio: as duas tarefas que vai melhorar primeiro e porquê, um piloto de 30 dias com uma medida de antes e depois, como as suas ferramentas se vão ligar e quem aprova o quê, e uma pequena política de uso da IA para você e os seus funcionários.",
  about: [
    "Este curso é para donos de pequenos negócios que já experimentaram um pouco a IA e agora querem um plano em vez de experiências soltas: lojas, restaurantes, salões, serviços de limpeza e de reparações, e pequenos escritórios.",
    "Você vai mapear para onde vai o seu tempo, escolher os projetos de IA que valem a pena, testar um durante 30 dias e medi-lo, aprender como as ferramentas se ligam umas às outras (integrações) e escrever regras simples sobre como o seu negócio usa a IA.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As tarefas juntam-se para formar o seu plano de IA de uma página."
  ],
  finalTask: "Escreva o seu plano de IA de uma página com cinco partes: (1) o seu mapa do tempo e as duas tarefas que escolheu, com uma nota de valor e de risco para cada uma; (2) um piloto de 30 dias para a primeira tarefa com uma medida de antes e depois; (3) um desenho simples ou uma lista de como as suas ferramentas se ligam e que passos precisam da sua aprovação; (4) uma verificação de custos; (5) uma política de uso da IA com cinco regras para você e os seus funcionários.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios que já experimentaram um pouco a IA e agora querem um plano em vez de experiências soltas: lojas, restaurantes, salões, serviços de limpeza e de reparações, e pequenos escritórios, alguns com poucos funcionários.",
    startingPoint: "Já usaram um assistente de conversa para algumas tarefas e usam várias aplicações de negócio, como uma ferramenta de marcações, pagamentos e uma folha de cálculo. Não têm um plano escrito sobre que projetos de IA fazer, como medi-los, como as ferramentas se ligam ou quais são as regras.",
    gap: "Experiências soltas com IA gastam tempo e dinheiro, e automatizações sem aprovações podem repetir erros caros ou deixar sair dados. Os donos precisam de escolher os projetos que valem a pena, testar um e medi-lo, ligar as ferramentas com segurança e definir regras claras de IA para si e para os seus funcionários.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um computador ou smartphone com as aplicações que o negócio já usa",
      "Tempo: lições de cerca de 5 minutos, que cabem num dia de trabalho cheio",
      "Os preços e as funções das ferramentas mudam; os donos verificam a página de preços de cada ferramenta",
      "Privacidade e segurança: as pessoas ficam com as decisões sobre dinheiro, lei, contratações e segurança; os dados dos clientes ficam protegidos"
    ],
    prerequisites: "Primeiro \"Introdução à IA para Pequenos Negócios\" ou \"Ferramentas de IA Essenciais para Pequenos Negócios\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Lembrando-se de uma semana normal", action: "fazer um mapa do tempo com as tarefas que ocupam o seu tempo", standard: "com pelo menos dez tarefas, os minutos de cada uma, organizadas por grupos e as três maiores marcadas com um círculo" },
    { id: "O2", condition: "Com pelo menos cinco ideias de IA", action: "dar a cada uma uma nota de valor e de risco e escolher dois projetos para começar", standard: "com uma vitória rápida e um projeto maior, cada um com uma razão numa frase" },
    { id: "O3", condition: "Com o seu projeto de vitória rápida", action: "planear um piloto de 30 dias com uma medida de antes e depois", standard: "com um ponto de partida, uma meta clara e um registo semanal" },
    { id: "O4", condition: "Com as ferramentas que o seu negócio usa", action: "desenhar como as suas ferramentas passam informação umas às outras", standard: "com caixas e setas e pelo menos um passo feito à mão que podia ser automatizado" },
    { id: "O5", condition: "Com o seu mapa de ferramentas e os custos", action: "marcar os passos que precisam da sua aprovação e calcular o custo real da automatização", standard: "pondo uma estrela em cada passo que envia dinheiro ou mensagens a muitas pessoas, e comparando o custo com as horas poupadas" },
    { id: "O6", condition: "Sabendo como o seu negócio usa a IA", action: "escrever uma política de uso da IA com cinco regras e um plano de IA de uma página", standard: "com as cinco partes do plano e regras que um funcionário acha claras" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher o que melhorar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mapear para onde vai o seu tempo",
          minutes: 5,
          goal: "Fazer um mapa simples das tarefas que ocupam o seu tempo cada semana.",
          text: [
            "Uma estratégia começa com factos sobre o seu próprio negócio. Durante uma semana, anote as tarefas que ocupam o seu tempo e quanto tempo leva cada uma, mais ou menos: responder a mensagens, fazer marcações, encomendar materiais, publicações nas redes sociais, contabilidade, orçamentos, arrumar e limpar, formar funcionários.",
            "Junte-as em grupos: clientes, vendas e marketing, operações (encomendas, marcações), dinheiro (faturas, contabilidade) e pessoas (contratar, formar).",
            "Muitas vezes vai descobrir que poucas tarefas comem a maior parte do seu tempo. É aí que a IA pode ajudar, mas só se a tarefa for adequada para ela, e isso é a próxima lição."
          ],
          steps: ["Durante uma semana, anote cada tarefa e os minutos que leva.", "Junte as tarefas em cinco grupos.", "Some o tempo de cada grupo.", "Faça um círculo à volta das três tarefas que comem mais tempo."],
          words: [["Estratégia", "um plano sobre o que fazer primeiro e porquê."], ["Mapa do tempo", "uma lista das suas tarefas e de quanto tempo leva cada uma."], ["Operações", "o trabalho diário de gerir o negócio, como encomendar e fazer marcações."]],
          slides: [
            { title: "Comece com os seus próprios factos", bullets: ["Anote cada tarefa durante uma semana", "Escreva quanto tempo leva cada uma, mais ou menos"] },
            { title: "Cinco grupos", bullets: ["Clientes; vendas e marketing", "Operações; dinheiro", "Pessoas"] },
            { title: "Encontre o que come o seu tempo", bullets: ["Some cada grupo", "Faça um círculo nas três maiores tarefas"] }
          ],
          tryIt: "Comece o seu mapa do tempo. De memória, escreva pelo menos dez tarefas semanais com os minutos de cada uma, organize-as nos cinco grupos e faça um círculo nas três maiores.",
          youCanNow: "mapear para onde vai o seu tempo e encontrar as tarefas que mais tempo lhe comem.",
          quickCheck: [
            { objective: "O1", q: "O que mostra um mapa do tempo?", options: ["As suas tarefas e quanto tempo leva cada uma", "As moradas de casa dos seus funcionários", "As suas vendas do mês", "Só o seu horário de abertura"], answer: 0, why: "Um mapa do tempo mostra para onde vai o seu tempo de cada semana." },
            { objective: "O1", q: "O seu mapa do tempo mostra que três tarefas ocupam a maior parte da semana. O que faz com elas?", options: ["Ignora-as", "Faz um círculo nelas, porque é aí que a IA pode ajudar mais", "Apaga-as da lista", "Fá-las mais depressa sem mudar nada"], answer: 1, why: "As tarefas que comem mais tempo são onde a IA pode ajudar mais." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escolher projetos de IA pelo valor e pelo risco",
          minutes: 5,
          goal: "Dar notas aos projetos de IA possíveis e escolher os dois para começar.",
          text: [
            "Nem toda a tarefa que come tempo é um bom projeto de IA. Dê a cada uma uma nota de 1 a 5 para o valor (tempo ou dinheiro poupado, melhor serviço) e de 1 a 5 para o risco (o que acontece se a IA errar: clientes zangados, dinheiro perdido, problemas legais).",
            "Comece com valor alto e risco baixo. Escrever rascunhos de publicações para as redes sociais e responder a perguntas comuns são muitas vezes bons começos. As categorias da contabilidade ou os orçamentos podem ter valor alto, mas precisam de verificação cuidadosa. Decisões de contratação, documentos legais e tudo o que tem a ver com saúde ou segurança são de risco alto: deixe uma pessoa e um profissional no comando.",
            "Escolha dois projetos. Uma vitória rápida para ganhar confiança e um projeto maior que vai planear com cuidado."
          ],
          steps: ["Escreva as três tarefas que mais tempo comem e outras ideias que tenha.", "Dê uma nota de valor de 1 a 5 e de risco de 1 a 5.", "Escolha uma vitória rápida (valor alto, risco baixo).", "Escolha um projeto maior que vai planear com cuidado."],
          words: [["Valor", "quanto um projeto poupa ou ganha, ou quanto melhora o serviço."], ["Risco", "quanto mal um erro pode causar."], ["Vitória rápida", "um projeto pequeno que funciona depressa e dá confiança."]],
          slides: [
            { title: "Dê uma nota a cada ideia", bullets: ["Valor 1-5: tempo, dinheiro, melhor serviço", "Risco 1-5: o mal que acontece se a IA errar"] },
            { title: "Por onde começar", bullets: ["Primeiro valor alto e risco baixo", "Publicações nas redes sociais e perguntas comuns são bons começos", "Contratação, lei, saúde e segurança: pessoas no comando"] },
            { title: "Escolha dois", bullets: ["Uma vitória rápida", "Um projeto maior, planeado com cuidado"] }
          ],
          tryIt: "Numa pequena tabela, dê notas de valor e de risco a pelo menos cinco ideias de IA. Escolha a sua vitória rápida e o seu projeto maior, e escreva uma frase sobre o porquê de cada um.",
          youCanNow: "escolher projetos de IA para o seu negócio pesando o valor contra o risco.",
          quickCheck: [
            { objective: "O2", q: "Quando dá notas de valor e de risco, o que quer dizer risco?", options: ["Quanto custa a ferramenta", "Quanto tempo leva a preparar", "O mal que acontece se a IA errar", "Quantos funcionários a usam"], answer: 2, why: "O risco é o mal que pode acontecer se a IA cometer um erro." },
            { objective: "O2", q: "Uma ideia tem valor alto e risco baixo; outra tem valor alto e risco alto. Com qual começa?", options: ["A de risco alto", "Nenhuma", "As duas ao mesmo tempo", "A de valor alto e risco baixo"], answer: 3, why: "Valor alto e risco baixo faz o melhor primeiro projeto." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer um piloto de 30 dias e medi-lo",
          minutes: 5,
          goal: "Planear um pequeno teste de 30 dias com uma medida clara de antes e depois.",
          text: [
            "Um piloto é um teste pequeno e com tempo limitado. Em vez de mudar tudo, você experimenta a IA numa só tarefa durante 30 dias e mede se ajudou.",
            "Primeiro meça o \"antes\": quanto tempo leva a tarefa agora, quantos erros há, como os clientes reagem. Depois decida a meta do \"depois\": \"Responder a mensagens comuns desce de 60 para 25 minutos por dia, sem aumento das queixas.\"",
            "Durante o piloto, mantenha um registo curto: o que funcionou, o que correu mal, o que corrigiu. No fim, decida: manter, mudar ou parar. Parar não faz mal; aprendeu alguma coisa com pouco custo."
          ],
          steps: ["Escolha a tarefa e escreva os números do antes.", "Escreva a meta do depois.", "Faça o teste durante 30 dias e mantenha um registo curto.", "No dia 30: manter, mudar ou parar."],
          words: [["Piloto", "um teste pequeno e com tempo limitado de uma nova forma de trabalhar."], ["Ponto de partida", "os números do \"antes\" com que compara (em inglês, \"baseline\")."], ["Meta", "o resultado que espera alcançar."]],
          slides: [
            { title: "Um piloto é um teste pequeno", bullets: ["Uma tarefa, 30 dias", "Meça se ajudou"] },
            { title: "Antes e depois", bullets: ["Antes: tempo, erros, reação dos clientes", "Exemplo de meta do depois: de 60 para 25 minutos por dia", "Sem aumento das queixas"] },
            { title: "No dia 30", bullets: ["Leia o seu registo", "Manter, mudar ou parar", "Parar é uma lição barata"] }
          ],
          tryIt: "Escreva um plano de piloto para a sua vitória rápida: a tarefa, os números do antes (faça uma estimativa se for preciso), a meta do depois e o que vai escrever no seu registo cada semana.",
          youCanNow: "planear e medir um piloto de IA de 30 dias para uma tarefa do negócio.",
          quickCheck: [
            { objective: "O3", q: "O que é o ponto de partida num piloto?", options: ["Os números do \"antes\" com que compara", "O resultado final", "O preço da ferramenta", "Um horário dos funcionários"], answer: 0, why: "O ponto de partida é onde começa, para poder medir a mudança." },
            { objective: "O3", q: "No dia 30, o seu piloto não poupou tempo nenhum. O que faz?", options: ["Mantém-no para sempre", "Para ou muda; aprendeu com pouco custo", "Compra uma versão mais cara", "Esconde os resultados"], answer: 1, why: "Um piloto é um teste pequeno, por isso um piloto falhado custa pouco e ensina muito." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher o que melhorar",
        questions: [
          { objective: "O1", q: "Neste curso, qual é o primeiro passo de uma estratégia de IA?", options: ["Comprar muitas ferramentas", "Mapear para onde vai o seu tempo", "Despedir funcionários", "Copiar um concorrente"], answer: 1, why: "A estratégia começa com factos sobre o seu negócio." },
          { objective: "O2", q: "Que projeto é a melhor primeira escolha?", options: ["O que for mais novo", "Valor baixo, risco alto", "Risco alto, qualquer valor", "Valor alto, risco baixo"], answer: 3, why: "Comece onde a IA ajuda mais e pode fazer pouco mal." },
          { objective: "O2", q: "Que tarefa deve deixar uma pessoa e um profissional no comando?", options: ["Decisões de contratação", "Escrever rascunhos de publicações para as redes sociais", "Responder a \"Qual é o vosso horário?\"", "Ter ideias de nomes para os pratos"], answer: 0, why: "Contratar é de risco alto." },
          { objective: "O3", q: "O que é um piloto?", options: ["Um trabalho numa companhia aérea", "Uma mudança permanente", "Um teste pequeno e com tempo limitado", "Uma licença de software"], answer: 2, why: "Um piloto testa uma tarefa durante um tempo definido." },
          { objective: "O3", q: "No dia 30, o piloto não ajudou. Qual é a decisão certa?", options: ["Esconder os resultados", "Alargá-lo a tudo", "Parar ou mudar; aprendeu com pouco custo", "Nunca mais medir"], answer: 2, why: "Parar um teste que não funcionou é uma boa decisão." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ligar as ferramentas e definir regras",
      lessons: [
        {
          objectives: ["O4"],
          title: "Como as ferramentas se ligam: integrações em palavras simples",
          minutes: 5,
          goal: "Desenhar como as ferramentas do seu negócio passam informação umas às outras.",
          text: [
            "Uma integração é uma ligação que deixa uma ferramenta enviar informação a outra de forma automática. Por exemplo: um formulário de marcação põe a consulta no seu calendário; uma encomenda paga acrescenta uma linha à sua folha de vendas; uma nova avaliação envia-lhe uma SMS.",
            "Muitas ferramentas têm ligações próprias nas suas definições, muitas vezes chamadas aplicações, integrações ou contas ligadas. Serviços de ligação como o Zapier, o Make ou o Microsoft Power Automate ligam ferramentas que não se ligam sozinhas. Veja no site oficial de cada ferramenta a que se liga e quanto custa.",
            "Desenhe as suas ferramentas como caixas e a informação como setas: \"aplicação de marcações -> calendário\", \"POS (caixa registadora) -> folha de vendas\". Depois marque que setas já funcionam, quais faz à mão e quais podia automatizar."
          ],
          steps: ["Escreva as ferramentas que usa: POS, marcações, e-mail, calendário, folhas de cálculo, redes sociais.", "Desenhe cada uma como uma caixa.", "Desenhe setas para a informação que passa entre elas.", "Marque cada seta: automática, feita à mão ou podia ser automatizada."],
          words: [["Integração", "uma ligação que deixa uma ferramenta enviar informação a outra de forma automática."], ["Serviço de ligação", "uma ferramenta como o Zapier, o Make ou o Power Automate que liga outras ferramentas."], ["Automatizar", "fazer uma tarefa acontecer sozinha, sem uma pessoa fazer cada passo."]],
          slides: [
            { title: "Uma integração é uma ligação", bullets: ["Formulário de marcação -> calendário", "Encomenda paga -> folha de vendas", "Nova avaliação -> alerta por SMS"] },
            { title: "Formas de ligar", bullets: ["Ligações próprias nas definições da ferramenta", "Serviços de ligação: Zapier, Make, Power Automate", "Veja os custos em cada site oficial"] },
            { title: "Desenhe o seu mapa", bullets: ["As ferramentas são caixas; a informação são setas", "Marque: automática, à mão, podia automatizar"] }
          ],
          tryIt: "Desenhe o seu mapa de ferramentas em papel com caixas e setas. Marque pelo menos uma seta que hoje faz à mão e que podia ser automatizada.",
          youCanNow: "mapear como as ferramentas do seu negócio se ligam e encontrar tarefas que podiam ser automatizadas.",
          quickCheck: [
            { objective: "O4", q: "O que mostram as setas no seu mapa de ferramentas?", options: ["Quem manda", "Que ferramenta custa mais", "A informação que passa entre as ferramentas", "A ordem em que comprou as ferramentas"], answer: 2, why: "As setas mostram como a informação passa de uma ferramenta para outra." },
            { objective: "O4", q: "Você copia à mão cada encomenda paga para a sua folha de vendas. O que faz?", options: ["Deixa de registar as vendas", "Contrata alguém que escreva mais depressa", "Apaga a folha de vendas", "Marca-a no seu mapa como um passo que podia ser automatizado"], answer: 3, why: "Os passos feitos à mão que passam informação são bons candidatos para uma integração." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Manter o controlo: aprovações, custos e dados",
          minutes: 5,
          goal: "Decidir que passos automáticos precisam da sua aprovação e verificar o custo real.",
          text: [
            "A automatização poupa tempo, mas também pode repetir um erro cem vezes. Deixe uma pessoa a aprovar tudo o que envia dinheiro, envia mensagens a muitos clientes, muda preços, apaga registos ou faz promessas.",
            "Conte o custo completo: assinaturas, cobranças por uso, tempo de preparação e o tempo para verificar o trabalho. Compare-o com o tempo poupado no seu piloto. Se as contas não baterem certo, continue a fazer à mão por agora.",
            "Saiba para onde vão os seus dados. Antes de ligar uma ferramenta, leia que dados ela pode ver e mantenha-os no mínimo. Use palavras-passe fortes e início de sessão em dois passos nas contas do negócio, e tire o acesso aos funcionários que saem."
          ],
          steps: ["Marque cada passo automático que envia dinheiro, envia mensagens a muitas pessoas, muda preços ou apaga dados.", "Exija a sua aprovação nesses passos.", "Some o custo mensal completo.", "Veja que dados cada ligação pode ver.", "Ative o início de sessão em dois passos."],
          words: [["Passo de aprovação", "um ponto em que uma pessoa tem de dizer sim antes de o processo continuar."], ["Início de sessão em dois passos", "uma segunda verificação, como um código no seu telefone, quando entra numa conta."], ["Assinatura", "um pagamento regular para continuar a usar uma ferramenta."]],
          slides: [
            { title: "Uma pessoa aprova", bullets: ["Tudo o que envia dinheiro", "Mensagens a muitos clientes", "Mudanças de preço, apagamentos, promessas"] },
            { title: "Conte o custo completo", bullets: ["Assinaturas e cobranças por uso", "Tempo de preparação e de verificação", "Compare com o tempo poupado"] },
            { title: "Proteja os seus dados", bullets: ["Dê a cada ferramenta só os dados de que precisa", "Palavras-passe fortes e início de sessão em dois passos", "Tire o acesso quando um funcionário sai"] }
          ],
          tryIt: "No seu mapa de ferramentas, ponha uma estrela em cada passo que precisa da sua aprovação. Depois escreva uma verificação de custos: custos mensais das ferramentas comparados com as horas poupadas vezes o valor de uma hora sua.",
          youCanNow: "manter o controlo das automatizações com passos de aprovação, verificações de custos e limites aos dados.",
          quickCheck: [
            { objective: "O5", q: "Porque manter a aprovação nas automatizações que enviam dinheiro ou mensagens em massa?", options: ["A automatização pode repetir um erro muitas vezes", "As aprovações tornam as ferramentas mais baratas", "A lei exige-o sempre", "Torna a automatização mais rápida"], answer: 0, why: "Um só erro numa automatização pode repetir-se muitas vezes antes de você reparar." },
            { objective: "O5", q: "Um funcionário sai do seu negócio. O que faz?", options: ["Deixa o acesso dele caso volte", "Dá a palavra-passe dele ao novo funcionário", "Tira-lhe o acesso às ferramentas do negócio", "Não muda nada"], answer: 2, why: "Tirar o acesso protege os dados do seu negócio." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever a sua política de uso da IA e o plano de uma página",
          minutes: 5,
          goal: "Escrever cinco regras simples de IA para o seu negócio e terminar o seu plano de IA de uma página.",
          text: [
            "Uma política de uso da IA é uma lista curta de regras sobre como você e os seus funcionários usam a IA. Protege os clientes e faz com que todos trabalhem da mesma forma. Cinco regras chegam para começar.",
            "Exemplos de regras: (1) Não se põem nas ferramentas de IA nomes de clientes com contactos, números de cartão, palavras-passe ou fichas de funcionários. (2) Uma pessoa verifica cada dado antes de os clientes o verem. (3) Nunca escrevemos avaliações ou afirmações falsas. (4) Só se usam no negócio ferramentas aprovadas. (5) As decisões sobre dinheiro, lei, contratações e segurança são tomadas por pessoas.",
            "Peça à IA para tornar as suas regras claras e curtas, e depois ponha-as numa página com o seu mapa do tempo, os projetos escolhidos, o plano do piloto, o mapa de ferramentas e a verificação de custos. Reveja o plano a cada três meses."
          ],
          steps: ["Escreva cinco regras com palavras simples.", "Peça à IA para as tornar claras e curtas.", "Partilhe-as com os funcionários e ouça as perguntas deles.", "Ponha tudo numa página e marque uma data de revisão."],
          words: [["Política de uso da IA", "regras escritas sobre como um negócio usa a IA."], ["Ferramenta aprovada", "uma ferramenta que o dono verificou e autorizou para uso no negócio."]],
          slides: [
            { title: "Porquê uma política", bullets: ["Protege os clientes", "Todos os funcionários trabalham da mesma forma", "Cinco regras chegam para começar"] },
            { title: "Exemplos de regras", bullets: ["Nenhum dado privado de clientes ou funcionários na IA", "Uma pessoa verifica os dados; nada de avaliações falsas", "Só ferramentas aprovadas; as pessoas tomam as grandes decisões"] },
            { title: "O seu plano de uma página", bullets: ["Mapa do tempo e dois projetos", "Piloto, mapa de ferramentas e verificação de custos", "Cinco regras; revisão a cada três meses"] }
          ],
          tryIt: "Tarefa final: escreva as suas cinco regras de IA e o seu plano de IA de uma página com as cinco partes. Partilhe as regras com um funcionário ou uma pessoa de confiança e pergunte se alguma coisa não está clara.",
          youCanNow: "guiar o uso da IA no seu negócio com um plano escrito e regras claras.",
          quickCheck: [
            { objective: "O6", q: "O que é uma política de uso da IA?", options: ["Um plano pago de IA", "Regras escritas sobre como o seu negócio usa a IA", "Uma avaliação de um cliente", "Os termos de serviço de uma ferramenta"], answer: 1, why: "Uma política de uso da IA define regras claras para você e os seus funcionários." },
            { objective: "O6", q: "Escreveu as suas cinco regras de IA. O que faz a seguir?", options: ["Guarda-as em segredo", "Publica-as na internet sem as ler", "Pede à IA para as aprovar", "Partilha-as com um funcionário e pergunta se alguma coisa não está clara"], answer: 3, why: "As regras só funcionam se as pessoas que as usam as entenderem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ligar as ferramentas e definir regras",
        questions: [
          { objective: "O4", q: "O que é uma integração?", options: ["Uma ligação que deixa uma ferramenta enviar informação a outra", "Um novo funcionário", "Um formulário de impostos", "Um tipo de empréstimo"], answer: 0, why: "As integrações passam informação entre ferramentas." },
          { objective: "O4", q: "Qual destes é um serviço de ligação?", options: ["Um agrafador", "Uma gaveta de dinheiro", "Uma máquina de fax", "Zapier"], answer: 3, why: "O Zapier liga ferramentas que não se ligam sozinhas." },
          { objective: "O5", q: "Que passo automático precisa mais da sua aprovação?", options: ["Guardar o nome de um ficheiro", "Enviar um e-mail de desconto a todos os 800 clientes", "Pôr uma cor no calendário", "Ordenar uma lista"], answer: 1, why: "As mensagens a muitos clientes precisam do sim de uma pessoa." },
          { objective: "O5", q: "Uma automatização custa mais por mês do que o tempo que poupa. O que faz?", options: ["Continua a fazer à mão por agora", "Continua a pagar", "Junta mais ferramentas", "Ignora o custo"], answer: 0, why: "As contas têm de bater certo." },
          { objective: "O6", q: "Qual é uma boa regra de uso da IA?", options: ["Colar os números de cartão dos clientes para poupar tempo", "Usar qualquer ferramenta que encontre", "Uma pessoa verifica cada dado antes de os clientes o verem", "A IA toma as decisões de contratação"], answer: 2, why: "Verificar os dados protege os clientes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criar uma Estratégia de IA para o Negócio e Ligar as Ferramentas",
    questions: [
      { objective: "O1", q: "Um mapa do tempo mostra:", options: ["As suas palavras-passe", "As suas tarefas e quanto tempo leva cada uma", "As moradas dos seus clientes", "Os seus concorrentes"], answer: 1, why: "Mostra para onde vai o seu tempo." },
      { objective: "O1", q: "Qual destes é um dos cinco grupos?", options: ["Filmes", "Tempo (clima)", "Desporto", "Operações"], answer: 3, why: "Clientes, vendas e marketing, operações, dinheiro, pessoas." },
      { objective: "O1", q: "Porque fazer um círculo nas três tarefas que mais tempo comem?", options: ["Para enfeitar", "Para as apagar", "Para as partilhar na internet", "É onde a IA pode ajudar mais"], answer: 3, why: "As tarefas grandes dão a maior poupança de tempo." },
      { objective: "O2", q: "Quando dá notas de valor e de risco, o risco quer dizer:", options: ["Quanto é divertido", "O mal que acontece se a IA errar", "Quão nova é a ferramenta", "Quantas aplicações tem"], answer: 1, why: "O risco mede o mal possível." },
      { objective: "O2", q: "Uma vitória rápida é:", options: ["Um bilhete da lotaria", "O projeto maior e mais arriscado", "Um projeto pequeno que funciona depressa", "Um processo em tribunal"], answer: 2, why: "As vitórias rápidas dão confiança." },
      { objective: "O2", q: "Que projeto é de risco alto?", options: ["Escrever um contrato legal", "Escrever o texto de uma publicação no Instagram", "Ter ideias para o nome de uma promoção", "Arrumar o formato de uma lista de verificação"], answer: 0, why: "Os documentos legais precisam de um profissional." },
      { objective: "O3", q: "Os números do \"antes\" num piloto chamam-se:", options: ["Orçamento", "Meta", "Ponto de partida", "Palavra-passe"], answer: 2, why: "O ponto de partida é aquilo com que compara." },
      { objective: "O3", q: "Uma boa meta para um piloto é:", options: ["\"As mensagens descem de 60 para 25 minutos por dia sem aumento das queixas\"", "\"Ser melhor\"", "\"Usar mais IA\"", "\"Experimentar coisas\""], answer: 0, why: "É concreta e pode ser medida." },
      { objective: "O3", q: "Durante o piloto, você mantém:", options: ["Nenhuma nota", "Um registo curto do que funcionou e do que correu mal", "Os números de cartão dos clientes", "Só as boas notícias"], answer: 1, why: "O registo guia a sua decisão do dia 30." },
      { objective: "O4", q: "\"Encomenda paga -> folha de vendas\" é um exemplo de:", options: ["Um imposto", "Uma política", "Uma avaliação", "Uma integração"], answer: 3, why: "A informação passa automaticamente entre ferramentas." },
      { objective: "O4", q: "Onde ficam normalmente as ligações próprias de uma ferramenta?", options: ["Nas definições da ferramenta", "Num recibo", "No correio", "Em lado nenhum"], answer: 0, why: "As definições muitas vezes mostram aplicações ou integrações." },
      { objective: "O4", q: "No seu mapa de ferramentas, as setas mostram:", options: ["Os nomes dos funcionários", "O humor dos clientes", "Os preços", "A informação que passa entre as ferramentas"], answer: 3, why: "As caixas são ferramentas; as setas são informação." },
      { objective: "O5", q: "Porque manter a aprovação nas automatizações que enviam dinheiro?", options: ["Para irritar os funcionários", "É mais lento", "A automatização pode repetir um erro muitas vezes", "Não é preciso"], answer: 2, why: "Uma pessoa trava erros caros e repetidos." },
      { objective: "O5", q: "O custo completo de uma ferramenta inclui:", options: ["Só o preço do anúncio", "Assinatura, cobranças por uso, tempo de preparação e de verificação", "Nada", "Só a eletricidade"], answer: 1, why: "Todos os custos contam contra o tempo poupado." },
      { objective: "O5", q: "Quando um funcionário sai, você deve:", options: ["Não fazer nada", "Deixar o acesso aberto", "Partilhar a palavra-passe dele", "Tirar-lhe o acesso às ferramentas do negócio"], answer: 3, why: "Tirar o acesso protege os seus dados." },
      { objective: "O5", q: "O que acrescenta o início de sessão em dois passos?", options: ["Uma melhoria grátis", "Uma segunda palavra-passe em papel", "Uma segunda verificação, como um código no telefone", "Nada"], answer: 2, why: "Torna as contas mais difíceis de invadir." },
      { objective: "O6", q: "Uma política de uso da IA é:", options: ["Regras escritas sobre como o seu negócio usa a IA", "Uma apólice de seguro", "Um contrato de arrendamento", "Uma ferramenta"], answer: 0, why: "Mantém todos seguros e a trabalhar da mesma forma." },
      { objective: "O6", q: "O que pertence à sua política de IA?", options: ["A IA decide quem contratar", "As pessoas tomam as decisões sobre dinheiro, lei, contratações e segurança", "Qualquer ferramenta serve", "Avaliações falsas não fazem mal"], answer: 1, why: "As grandes decisões ficam com as pessoas." },
      { objective: "O6", q: "De quanto em quanto tempo deve rever o seu plano de IA?", options: ["Nunca", "Mais ou menos a cada três meses", "A cada hora", "Só depois de um desastre"], answer: 1, why: "Revisões regulares mantêm-no atualizado." },
      { objective: "O6", q: "O seu plano de IA de uma página inclui:", options: ["Mapa do tempo, projetos, piloto, mapa de ferramentas, verificação de custos e regras", "Só uma lista de aplicações", "As palavras-passe dos clientes", "Os preços de um concorrente"], answer: 0, why: "Essas partes fazem um plano completo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 6, 7, 9, 11, 12, 13, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Mapa do tempo e dois projetos", objective: "O2", notYet: "Não há mapa do tempo, ou os projetos foram escolhidos sem notas de valor e de risco.", meets: "Mapa do tempo e duas tarefas escolhidas, cada uma com uma nota de valor e de risco.", exceeds: "Cada escolha tem uma razão clara numa frase, ligada ao mapa do tempo." },
      { name: "Piloto de 30 dias", objective: "O3", notYet: "Não há medida, ou não há números do antes.", meets: "Um piloto para a primeira tarefa com um ponto de partida e uma meta do depois.", exceeds: "Também tem um plano de registo semanal e uma regra para parar ou mudar no dia 30." },
      { name: "Ligações das ferramentas e aprovações", objective: "O4", notYet: "Não há mapa de ferramentas, ou não há aprovações marcadas.", meets: "Um desenho ou uma lista de como as ferramentas se ligam, com os passos de aprovação marcados.", exceeds: "Cada passo que envia dinheiro ou mensagens em massa tem uma estrela." },
      { name: "Verificação de custos", objective: "O5", notYet: "Não há verificação de custos.", meets: "Custos mensais das ferramentas comparados com as horas poupadas vezes o valor de uma hora sua.", exceeds: "Inclui cobranças por uso e tempo de preparação e de verificação." },
      { name: "Política de uso da IA", objective: "O6", notYet: "Menos de cinco regras, ou regras que passam para a IA decisões sobre dinheiro, lei, contratações ou segurança.", meets: "Cinco regras claras para você e os seus funcionários.", exceeds: "Partilhada com um funcionário ou uma pessoa de confiança e tornada mais clara com os comentários dessa pessoa." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que fazem o seu piloto de 30 dias e comunicam o resultado de antes e depois (inquérito de seguimento)",
      "Donos que dizem quantas horas poupam por semana depois do piloto",
      "Donos que partilham uma política de uso da IA escrita com os funcionários em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou smartphone com internet e as aplicações que o negócio já usa",
      "Um assistente de IA gratuito e uma folha de cálculo gratuita para dar notas e acompanhar",
      "Papel e caneta para o mapa do tempo e o mapa de ferramentas",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça aos donos para estimarem as tarefas de uma semana normal antes da sessão, para o mapa do tempo ser rápido.",
      "Desenhe num quadro um exemplo de mapa de ferramentas com caixas e setas antes de os donos desenharem o seu.",
      "Lembre aos donos que verifiquem a página de preços de cada ferramenta; os preços e as funções mudam.",
      "Sublinhe que as pessoas ficam com as decisões sobre dinheiro, lei, contratações e segurança, e que os dados dos clientes ficam protegidos.",
      "Avalie o plano de uma página com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
