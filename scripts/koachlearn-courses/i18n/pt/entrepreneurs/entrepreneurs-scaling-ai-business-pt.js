"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-scaling-ai-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-scaling-ai-business-pt",
  lang: "pt",
  translationOf: "entrepreneurs-scaling-ai-business",
  category: "Entrepreneurs",
  name: "Fazer Crescer um Negócio com IA",
  skills: "Conhecer os seus números principais, Encontrar o gargalo, Transformar o trabalho em sistemas, Trazer ajuda, Ganhar clientes passo a passo, Manter a qualidade enquanto cresce",
  outcome: "usar a IA para ler os números principais do seu negócio, encontrar o que trava o crescimento, transformar o seu trabalho em sistemas que outras pessoas possam seguir e escrever um plano realista de crescimento a 90 dias com verificações de qualidade.",
  about: [
    "Fazer crescer (em inglês, \"scaling\") quer dizer aumentar as vendas sem que os custos, as horas de trabalho e os erros aumentem ao mesmo ritmo. Este curso é para donos de negócios que já funcionam e que estão prontos para crescer, com a IA a fazer mais do trabalho de rotina.",
    "No Capítulo 1 você vai usar a IA para perceber os seus números, encontrar o gargalo que mais o atrasa e transformar o seu trabalho em sistemas escritos. No Capítulo 2 vai planear a ajuda de que precisa (prestadores de serviços, empregados e ferramentas de IA), escolher canais de crescimento e definir verificações de qualidade e de risco, para que o crescimento não estrague aquilo de que os clientes gostam.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa sobre o seu próprio negócio. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Os pontos sobre impostos, emprego e lei têm ligações para fontes oficiais; fale com um contabilista ou um advogado sobre a sua situação."
  ],
  finalTask: "Escreva um plano de crescimento a 90 dias numa só página: os seus cinco números principais hoje e as metas, o seu gargalo principal e como o vai eliminar, dois sistemas que vai escrever, a ajuda que vai trazer (pessoa ou ferramenta de IA) e o custo, um canal de crescimento para testar e três verificações de qualidade que vai acompanhar todas as semanas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios nos Estados Unidos que já funcionam e têm clientes regulares, que estão prontos para crescer e querem que a IA faça mais do trabalho de rotina.",
    startingPoint: "Fazem vendas, atendem clientes e fazem eles próprios a maior parte dos trabalhos principais. Muitos não acompanham os números principais todos os meses, têm poucos sistemas escritos e ainda não planearam contratações nem testes de crescimento.",
    gap: "Fazer crescer um negócio que perde dinheiro em cada venda, ou que depende do tempo do dono para cada tarefa, torna os problemas maiores, não menores. Os donos precisam de ler os seus números, resolver o gargalo principal, escrever sistemas, trazer a ajuda certa e testar o crescimento com verificações de qualidade, para que o negócio cresça sem se partir.",
    constraints: [
      "Palavras simples e contas básicas numa folha de cálculo",
      "Aparelhos: um computador com uma folha de cálculo e um assistente de IA gratuito",
      "Tempo: cerca de cinco minutos por lição, mais trabalho com os números e sistemas do próprio dono",
      "Os pontos sobre impostos e emprego (como o estatuto do trabalhador) têm ligações para fontes oficiais; os donos confirmam com um contabilista ou um advogado",
      "Os nomes dos clientes são retirados antes de quaisquer dados do negócio entrarem na IA"
    ],
    prerequisites: "Recomenda-se o curso \"IA para a Produtividade no Negócio\" e um negócio com pelo menos seis meses de vendas."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com seis meses de números do negócio sem os nomes dos clientes", action: "acompanhar cinco números principais numa folha de cálculo e usar a IA para explicar as tendências", standard: "verificando as contas da IA e dizendo se cada venda dá lucro" },
    { id: "O2", condition: "Com os passos do seu processo principal e o tempo de cada um", action: "identificar o gargalo e escolher uma solução: eliminar, automatizar ou passar a outra pessoa", standard: "com a solução pronta para experimentar este mês" },
    { id: "O3", condition: "Com dois trabalhos principais que você faz sozinho", action: "escrever cada um como um sistema com passos, uma lista de verificação e um padrão de qualidade", standard: "para que outra pessoa o consiga seguir sem fazer perguntas" },
    { id: "O4", condition: "Com a ajuda de que o seu negócio mais precisa", action: "escolher entre uma ferramenta de IA e uma pessoa e preparar uma descrição de função justa", standard: "com palavras ligadas ao trabalho e uma nota sobre o estatuto do trabalhador usando as três categorias do IRS" },
    { id: "O5", condition: "Com vários canais de crescimento possíveis", action: "planear um teste de 30 dias de um canal com uma meta, uma medida e um limite de gastos", standard: "comparando o custo por cada novo cliente com os seus números principais" },
    { id: "O6", condition: "Para o seu plano de crescimento a 90 dias", action: "definir três verificações de qualidade semanais e uma revisão das ferramentas de IA e dos dados dos clientes", standard: "revendo o plano de duas em duas semanas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepare-se para crescer",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conhecer os seus números principais",
          minutes: 5,
          goal: "Acompanhar cinco números principais e usar a IA para explicar o que significam.",
          text: [
            "Você não consegue fazer crescer aquilo que não mede. Para a maioria dos pequenos negócios, cinco números contam: as receitas de cada mês (o dinheiro que entra), os custos, o lucro (o que sobra), o número de clientes e quanto vale cada cliente ao longo do tempo, comparado com o que custa conquistá-lo.",
            "Coloque os últimos seis meses numa folha de cálculo. Depois peça à IA que o ajude a lê-la: \"Aqui estão as minhas receitas, custos e número de clientes de cada mês (sem nomes). Que tendências vê? Com que número me devo preocupar?\" Verifique as contas você mesmo.",
            "Um negócio está pronto para crescer quando cada venda dá lucro e os clientes voltam ou recomendam você a outras pessoas. Se cada venda perde dinheiro, crescer só aumenta a perda."
          ],
          steps: ["Faça uma folha de cálculo com seis meses de receitas, custos, lucro e número de clientes.", "Calcule a venda média e o custo para conquistar um cliente.", "Peça à IA que descreva tendências e riscos (sem nomes de clientes).", "Refaça você mesmo todas as contas.", "Escreva uma frase: cada venda dá lucro?"],
          words: [["Receitas", "todo o dinheiro que entra das vendas."], ["Lucro", "as receitas menos os custos."], ["Custo de aquisição de cliente", "quanto você gasta, em média, para conquistar um novo cliente."], ["Crescer (scale)", "aumentar as vendas mais depressa do que os custos e o esforço."]],
          slides: [
            { title: "Cinco números principais", bullets: ["Receitas e custos", "Lucro", "Número de clientes", "Valor do cliente comparado com o custo de o conquistar"] },
            { title: "A IA lê as tendências", bullets: ["Seis meses numa folha de cálculo", "Peça à IA tendências e riscos", "Verifique as contas você mesmo"] },
            { title: "Pronto para crescer?", bullets: ["Cada venda dá lucro", "Os clientes voltam ou recomendam você", "Se uma venda perde dinheiro, crescer aumenta a perda"] }
          ],
          tryIt: "Faça a sua folha com os números de seis meses, peça à IA que mostre as tendências e um risco, verifique as contas e escreva se cada venda dá lucro.",
          youCanNow: "acompanhar os seus números principais e avaliar se o seu negócio está pronto para crescer.",
          quickCheck: [
            { objective: "O1", q: "O que é o custo de aquisição de cliente?", options: ["Quanto você gasta, em média, para conquistar um novo cliente", "O preço que um cliente paga", "A sua renda", "O número de clientes que tem"], answer: 0, why: "Mostra quanto lhe custa conquistar cada novo cliente." },
            { objective: "O1", q: "A IA diz que o seu lucro duplicou no mês passado, mas isso parece errado. O que faz?", options: ["Festeja e contrata logo", "Verifica as contas você mesmo na folha de cálculo", "Pede à IA que o diga outra vez", "Ignora os seus números"], answer: 1, why: "Verifique sempre as contas da IA antes de agir." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar o gargalo",
          minutes: 5,
          goal: "Encontrar o passo que mais limita o trabalho que o seu negócio consegue fazer.",
          text: [
            "Um gargalo é o ponto mais estreito, que limita tudo o resto. Num negócio de bolos pode ser o espaço no forno; num negócio de serviços, muitas vezes é o tempo do dono para fazer orçamentos, dar seguimento aos clientes ou verificar a qualidade.",
            "Faça uma lista dos passos desde o primeiro contacto até ao cliente satisfeito e quanto tempo leva cada um por cliente. Pergunte à IA: \"Aqui estão os meus passos e tempos. Onde está o gargalo, e quais são três formas de o resolver: eliminar o passo, automatizá-lo ou passá-lo a outra pessoa?\"",
            "Resolva primeiro o gargalo. Acelerar qualquer outro passo não ajuda, porque o trabalho continua a acumular-se no ponto estreito."
          ],
          steps: ["Faça uma lista de cada passo desde o primeiro contacto até ao trabalho terminado.", "Escreva o tempo que cada passo leva por cliente e quem o faz.", "Peça à IA que encontre o gargalo e sugira soluções.", "Escolha eliminar, automatizar ou passar a outra pessoa.", "Planeie uma solução para experimentar no próximo mês."],
          words: [["Gargalo", "o passo mais lento, que limita quanto o negócio inteiro consegue fazer."], ["Passar a outra pessoa", "dar uma tarefa a outra pessoa para ela a fazer."]],
          slides: [
            { title: "O ponto mais estreito", bullets: ["Limita tudo o resto", "Muitas vezes é o tempo do dono"] },
            { title: "Encontre-o", bullets: ["Liste os passos e o tempo por cliente", "Pergunte à IA onde o trabalho se acumula"] },
            { title: "Resolva-o primeiro", bullets: ["Eliminar, automatizar ou passar a outra pessoa", "Acelerar outros passos não ajuda"] }
          ],
          tryIt: "Escreva os seus passos com os tempos, peça à IA que encontre o gargalo e escolha uma solução (eliminar, automatizar ou passar a outra pessoa) para experimentar este mês.",
          youCanNow: "encontrar o passo que limita o seu crescimento e escolher uma solução.",
          quickCheck: [
            { objective: "O2", q: "O que é um gargalo?", options: ["O seu passo mais rápido", "Um tipo de garrafa", "O passo mais lento, que limita tudo o resto", "Um novo cliente"], answer: 2, why: "O trabalho acumula-se no gargalo, por isso ele limita o crescimento." },
            { objective: "O2", q: "Todos os orçamentos esperam que você os escreva, e as encomendas acumulam-se. Que solução pode escolher?", options: ["Acelerar as entregas", "Aceitar mais encomendas", "Deixar de enviar orçamentos", "Usar um modelo de orçamento ou passar os orçamentos a um ajudante formado"], answer: 3, why: "Automatizar o passo do gargalo, ou passá-lo a outra pessoa, faz o trabalho voltar a andar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Transformar o seu trabalho em sistemas",
          minutes: 5,
          goal: "Escrever dois trabalhos principais como sistemas que outra pessoa (ou uma ferramenta de IA) consiga seguir.",
          text: [
            "Se tudo está na sua cabeça, o negócio não consegue crescer para além de você. Um sistema é uma forma escrita de fazer um trabalho: os passos, as ferramentas, a lista de verificação e como é um trabalho \"bem feito\".",
            "Grave-se a fazer um trabalho, ou escreva notas rápidas, e peça à IA que as transforme num procedimento operacional padrão (POP, em inglês SOP) com uma lista de verificação e um padrão de qualidade. Marque que passos as ferramentas de IA podem fazer e onde uma pessoa tem de verificar.",
            "Teste cada sistema: peça a outra pessoa que o siga enquanto você observa em silêncio. Cada pergunta que ela faz mostra um passo que falta. Guarde todos os sistemas num único lugar partilhado."
          ],
          steps: ["Escolha os dois trabalhos que lhe tomam mais tempo.", "Grave ou escreva notas enquanto faz cada um.", "Peça à IA que transforme as notas num POP com uma lista de verificação e um padrão de qualidade.", "Marque os passos da IA e as verificações humanas.", "Teste com outra pessoa e preencha o que falta."],
          words: [["Sistema", "uma forma escrita e repetível de fazer um trabalho."], ["POP (SOP)", "procedimento operacional padrão: os passos escritos de um trabalho."], ["Padrão de qualidade", "uma descrição clara de como é um bom trabalho."]],
          slides: [
            { title: "Tire-o da sua cabeça", bullets: ["Um sistema = passos, ferramentas, lista, padrão", "O negócio pode crescer para além de você"] },
            { title: "Construa-o com a IA", bullets: ["Grave ou escreva notas rápidas", "A IA transforma-as num POP", "Marque os passos da IA e as verificações humanas"] },
            { title: "Teste-o", bullets: ["Outra pessoa segue-o", "Cada pergunta = um passo em falta", "Guarde todos os sistemas num só lugar"] }
          ],
          tryIt: "Transforme um dos seus dois maiores trabalhos num POP com a ajuda da IA, com uma lista de verificação e um padrão de qualidade. Se puder, peça a alguém que o teste.",
          youCanNow: "transformar o que você sabe em sistemas que outras pessoas ou ferramentas de IA possam seguir.",
          quickCheck: [
            { objective: "O3", q: "O que é um padrão de qualidade num POP?", options: ["Uma descrição clara de como é um bom resultado", "O preço da ferramenta", "A assinatura do dono", "Uma lista de clientes"], answer: 0, why: "Um padrão de qualidade diz à pessoa o que quer dizer bem feito." },
            { objective: "O3", q: "Um ajudante liga-lhe sempre com perguntas enquanto segue o seu POP. O que faz?", options: ["Volta a fazer o trabalho você mesmo", "Junta ao POP os detalhes que faltam e testa-o outra vez", "Despede o ajudante", "Deita fora o POP"], answer: 1, why: "As perguntas mostram onde o POP ainda não está completo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Prepare-se para crescer",
        questions: [
          { objective: "O1", q: "Cada venda perde um pouco de dinheiro. O que acontece se crescer?", options: ["O lucro aparece sozinho", "As perdas aumentam", "Nada muda", "Os custos desaparecem"], answer: 1, why: "O crescimento multiplica o resultado de cada venda." },
          { objective: "O1", q: "O que é o lucro?", options: ["O número de clientes", "Todo o dinheiro que entra", "O seu preço", "As receitas menos os custos"], answer: 3, why: "O lucro é o que sobra depois dos custos." },
          { objective: "O1", q: "A IA diz que os seus custos subiram 40%. O que deve fazer?", options: ["Verificar as contas você mesmo na folha de cálculo", "Acreditar e entrar em pânico", "Apagar a folha de cálculo", "Ignorar"], answer: 0, why: "As contas da IA podem estar erradas; verifique." },
          { objective: "O2", q: "O que é um gargalo?", options: ["O seu melhor cliente", "Um tipo de garrafa", "O passo mais lento, que limita tudo o resto", "Um canal de marketing"], answer: 2, why: "É o ponto mais estreito do seu processo." },
          { objective: "O3", q: "Como sabe que um POP está completo?", options: ["Foi a IA que o escreveu", "É muito longo", "Outra pessoa consegue segui-lo sem fazer perguntas", "Tem um título bonito"], answer: 2, why: "As perguntas durante o teste mostram os passos que faltam." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crescer sem se partir",
      lessons: [
        {
          objectives: ["O4"],
          title: "Trazer ajuda: pessoas e ferramentas de IA",
          minutes: 6,
          goal: "Decidir que ajuda trazer e preparar uma descrição de função.",
          text: [
            "Algum trabalho fica melhor com uma ferramenta de IA ou uma automação (organizar, fazer rascunhos, marcar horários). Outro precisa de uma pessoa (decidir com bom senso, trabalho com as mãos, relações com os clientes). Use o seu gargalo e os seus sistemas para decidir.",
            "Se contratar uma pessoa, a IA pode escrever um rascunho claro da descrição de função a partir dos seus POP: tarefas, competências, horário e intervalo de salário. Verifique se as palavras são justas e inclusivas e retire tudo o que não tem a ver com o trabalho.",
            "Prestador de serviços ou empregado? O IRS (a autoridade fiscal dos Estados Unidos) olha para três tipos de provas: controlo do comportamento (você controla como o trabalho é feito?), controlo financeiro (quem controla o pagamento, as despesas e as ferramentas?) e o tipo de relação (contratos, benefícios, trabalho contínuo e central). Errar aqui pode custar-lhe impostos e multas; leia a página do IRS e pergunte a um contabilista ou a um advogado. As regras de cada estado podem ser mais rigorosas."
          ],
          steps: ["Faça uma lista do trabalho que quer tirar das suas mãos.", "Marque cada um: ferramenta de IA, prestador de serviços ou empregado.", "Peça à IA um rascunho da descrição de função a partir dos seus POP.", "Verifique se as palavras são justas e retire exigências que não têm a ver com o trabalho.", "Leia a página do IRS sobre o estatuto do trabalhador e pergunte a um contabilista antes de contratar."],
          words: [["Prestador de serviços", "alguém que trabalha por conta própria e faz trabalho para você, normalmente decidindo como o faz (em inglês, \"contractor\")."], ["Empregado", "alguém cujo trabalho você controla; você retém e paga os impostos sobre o emprego."], ["Descrição de função", "um resumo escrito das tarefas, competências, horário e salário de um trabalho."]],
          slides: [
            { title: "Pessoa ou ferramenta de IA?", bullets: ["IA: organizar, fazer rascunhos, marcar horários", "Pessoas: bom senso, trabalho com as mãos, relações"] },
            { title: "Descrição de função com a IA", bullets: ["Rascunho a partir dos seus POP", "Tarefas, competências, horário, intervalo de salário", "Verifique se as palavras são justas e ligadas ao trabalho"] },
            { title: "Prestador ou empregado? (IRS)", bullets: ["Controlo do comportamento", "Controlo financeiro", "Tipo de relação", "Pergunte a um contabilista; regras estaduais podem ser mais rigorosas"] }
          ],
          sources: [{ name: "IRS: Independent Contractor (Self-Employed) or Employee?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" }],
          tryIt: "Escolha a ajuda de que mais precisa. Se for uma pessoa, peça à IA um rascunho da descrição de função a partir do seu POP e verifique se é justa; anote se acha que é uma função de prestador de serviços ou de empregado e porquê, usando as três categorias do IRS.",
          youCanNow: "decidir entre ferramentas de IA e pessoas para crescer e preparar uma descrição de função justa.",
          quickCheck: [
            { objective: "O4", q: "Que trabalho normalmente precisa de uma pessoa e não da IA?", options: ["Organizar e-mails", "Fazer o rascunho de um modelo", "Criar relações com os clientes mais importantes", "Resumir notas"], answer: 2, why: "As relações precisam do bom senso e da confiança de uma pessoa." },
            { objective: "O4", q: "A descrição de função da IA diz \"membro da equipa jovem e cheio de energia\". O que faz?", options: ["Deixa ficar", "Junta mais adjetivos", "Publica como está", "Muda para palavras justas e ligadas ao trabalho"], answer: 3, why: "As descrições de função devem ser justas e falar do trabalho." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ganhar clientes passo a passo",
          minutes: 5,
          goal: "Escolher um canal de crescimento e planear um teste pequeno e que se possa medir.",
          text: [
            "Os canais de crescimento são as formas como os novos clientes encontram você: recomendações, parcerias, pesquisas locais e listas em mapas, redes sociais, e-mail, anúncios pagos e mercados online. A maioria dos pequenos negócios cresce melhor com um ou dois canais bem trabalhados.",
            "Pergunte à IA: \"O meu negócio é [tipo] e serve [cliente]. Sugira cinco canais de crescimento, como cada um funcionaria para mim, quanto custaria e como eu o mediria.\" Escolha o que combina com o seu cliente e o seu orçamento.",
            "Faça um pequeno teste de 30 dias com uma meta clara: \"Pedir recomendações a 20 clientes antigos; meta: 5 novos contactos.\" Meça o resultado, compare o custo por cada novo cliente com os seus números da Lição 1 e só depois gaste mais."
          ],
          steps: ["Peça à IA cinco canais de crescimento possíveis, com custos e medidas.", "Escolha um que combine com o seu cliente e o seu orçamento.", "Defina um teste de 30 dias com uma meta clara.", "Acompanhe os resultados e o custo por cada novo cliente.", "Decida: aumentar, mudar ou parar."],
          words: [["Canal de crescimento", "uma forma de os novos clientes encontrarem você e lhe comprarem."], ["Recomendação", "um cliente que fala bem de você a outra pessoa (em inglês, \"referral\")."], ["Teste", "uma pequena tentativa, com tempo limitado e uma meta clara."]],
          slides: [
            { title: "Como os clientes encontram você", bullets: ["Recomendações e parcerias", "Pesquisa local, redes sociais, e-mail", "Anúncios pagos e mercados online"] },
            { title: "Escolha um ou dois", bullets: ["Peça à IA opções, custos e medidas", "Escolha o que combina com o seu cliente e orçamento"] },
            { title: "Teste primeiro em pequeno", bullets: ["30 dias, meta clara", "Acompanhe o custo por cada novo cliente", "Aumentar, mudar ou parar"] }
          ],
          tryIt: "Escolha um canal de crescimento com a ajuda da IA e escreva um teste de 30 dias: o que vai fazer, a meta, como a vai medir e o máximo que vai gastar.",
          youCanNow: "escolher um canal de crescimento e testá-lo antes de gastar mais.",
          quickCheck: [
            { objective: "O5", q: "O que tem um bom teste de crescimento de 30 dias?", options: ["Uma meta clara e um limite de gastos", "O máximo de gastos possível", "Nenhuma forma de o medir", "Todos os canais ao mesmo tempo"], answer: 0, why: "Uma meta e um limite mostram se o canal funciona sem grande risco." },
            { objective: "O5", q: "O seu teste traz clientes, mas cada um custa mais do que vale para você. O que faz?", options: ["Gasta mais nesse canal", "Para ou muda o canal antes de gastar mais", "Ignora os números", "Baixa os preços"], answer: 1, why: "Compare o custo por cada novo cliente com o valor do cliente antes de fazer crescer um canal." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Manter a qualidade enquanto cresce",
          minutes: 5,
          goal: "Definir verificações de qualidade semanais e um plano para os riscos da IA e dos dados enquanto cresce.",
          text: [
            "O crescimento muitas vezes estraga a qualidade: trabalho feito à pressa, respostas mais lentas, rascunhos da IA que ninguém verifica. Escolha três números de qualidade para acompanhar todas as semanas, como a nota média das avaliações, o tempo de resposta e a taxa de trabalhos refeitos ou de reembolsos.",
            "Quando mais trabalho passa pelas ferramentas de IA, os riscos também crescem: mais dados de clientes em mais ferramentas, mais conteúdo da IA a sair. Reveja que ferramentas guardam dados de clientes, quem tem acesso, e confirme que uma pessoa continua a verificar tudo o que os clientes veem.",
            "Junte tudo num plano a 90 dias. Peça à IA que o ajude a organizá-lo, mas cada número e cada data devem ser seus e em que você acredita. Reveja-o de duas em duas semanas e ajuste."
          ],
          steps: ["Escolha três números de qualidade para acompanhar todas as semanas.", "Faça uma lista das ferramentas que guardam dados de clientes e de quem tem acesso.", "Confirme que uma pessoa verifica tudo o que os clientes veem.", "Peça à IA que organize o seu plano a 90 dias a partir das suas notas.", "Marque uma revisão de duas em duas semanas."],
          words: [["Verificação de qualidade", "um olhar regular a um número ou a uma amostra de trabalho para ter a certeza de que o padrão se mantém."], ["Taxa de reembolsos", "a parte das vendas em que teve de devolver o dinheiro."]],
          slides: [
            { title: "Crescer pode estragar a qualidade", bullets: ["Trabalho à pressa, respostas lentas", "Rascunhos da IA que ninguém verifica"] },
            { title: "Acompanhe três números por semana", bullets: ["Nota das avaliações", "Tempo de resposta", "Taxa de trabalhos refeitos ou de reembolsos"] },
            { title: "Os riscos da IA e dos dados também crescem", bullets: ["Que ferramentas guardam dados de clientes?", "Quem tem acesso?", "Uma pessoa verifica o que os clientes veem"] },
            { title: "O seu plano a 90 dias", bullets: ["A IA organiza; você põe os números reais", "Reveja de duas em duas semanas"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de crescimento a 90 dias numa só página: números principais e metas, solução para o gargalo, dois sistemas, a ajuda que vai trazer, um teste de crescimento e três verificações de qualidade semanais.",
          youCanNow: "planear e gerir o crescimento com a IA, protegendo a qualidade e os dados dos clientes.",
          quickCheck: [
            { objective: "O6", q: "Qual destes é um número de qualidade semanal?", options: ["A sua cor preferida", "O número de seguidores nas redes sociais", "A taxa de trabalhos refeitos ou de reembolsos", "O tamanho do escritório"], answer: 2, why: "As taxas de trabalhos refeitos e de reembolsos mostram se a qualidade está a baixar." },
            { objective: "O6", q: "As vendas estão a crescer, mas as queixas duplicaram este mês. O que diz o seu plano?", options: ["Continuar a crescer mais depressa", "Ignorar até ao próximo trimestre", "Tirar as verificações de qualidade", "Encontrar a causa e resolvê-la antes de aceitar mais clientes"], answer: 3, why: "As verificações de qualidade existem para que o crescimento não estrague aquilo de que os clientes gostam." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Crescer sem se partir",
        questions: [
          { objective: "O4", q: "Que trabalho fica melhor com uma ferramenta de IA?", options: ["Organizar os pedidos que chegam", "Ganhar a confiança do seu maior cliente", "Trabalho de reparação com as mãos", "Decidir quem contratar"], answer: 0, why: "Organizar tarefas de rotina serve bem para a IA; o bom senso e as relações precisam de pessoas." },
          { objective: "O4", q: "Qual destas é uma das três categorias do IRS para o estatuto do trabalhador?", options: ["Tipo de telefone", "Cor preferida", "Anos de escola", "Controlo do comportamento"], answer: 3, why: "As três são o controlo do comportamento, o controlo financeiro e o tipo de relação." },
          { objective: "O5", q: "Antes de gastar mais num canal de crescimento, você deve:", options: ["Gastar todo o seu orçamento", "Fazer um teste pequeno e medido", "Copiar um concorrente", "Não medir nada"], answer: 1, why: "Os testes mostram se o canal funciona antes de você investir." },
          { objective: "O6", q: "Qual destes é um bom número de qualidade semanal?", options: ["O tempo médio de resposta aos clientes", "O número de aplicações que usa", "O tamanho do seu logótipo", "O tamanho da sua biografia nas redes sociais"], answer: 0, why: "O tempo de resposta mostra se o serviço está a piorar." },
          { objective: "O6", q: "Quando mais trabalho passa pelas ferramentas de IA, você deve:", options: ["Dar todos os seus dados a todas as ferramentas", "Deixar de verificar o trabalho da IA", "Rever que ferramentas guardam dados de clientes e quem tem acesso a elas", "Tirar as verificações humanas"], answer: 2, why: "Os riscos dos dados e da qualidade crescem com o negócio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Fazer Crescer um Negócio com IA",
    questions: [
      { objective: "O1", q: "Fazer crescer (scaling) quer dizer:", options: ["Só subir os preços", "Aumentar as vendas mais depressa do que os custos e o esforço", "Trabalhar mais horas", "Comprar mais ferramentas"], answer: 1, why: "É a definição usada no curso." },
      { objective: "O1", q: "As receitas são:", options: ["O seu número de clientes", "O que sobra depois dos custos", "A sua conta das ferramentas", "Todo o dinheiro que entra das vendas"], answer: 3, why: "As receitas são o dinheiro que entra." },
      { objective: "O1", q: "O custo de aquisição de cliente é:", options: ["Um imposto", "O seu preço", "A sua renda", "Quanto você gasta, em média, para conquistar um novo cliente"], answer: 3, why: "É a definição." },
      { objective: "O1", q: "Antes de pedir à IA que analise os seus números, você deve:", options: ["Juntar números de cartões", "Retirar os nomes dos clientes", "Juntar palavras-passe", "Publicá-los na internet"], answer: 1, why: "Mantenha os dados privados fora das ferramentas de IA." },
      { objective: "O1", q: "Um negócio está pronto para crescer quando:", options: ["Tem muitas aplicações", "Tem um logótipo novo", "Cada venda dá lucro e os clientes voltam ou recomendam", "O dono trabalha 80 horas"], answer: 2, why: "Vendas com lucro e que se repetem podem crescer." },
      { objective: "O2", q: "Num negócio de serviços, o gargalo muitas vezes é:", options: ["O tempo do dono", "A cor da carrinha", "O tipo de letra do site", "O número de seguidores"], answer: 0, why: "Muitas vezes é o dono que faz os orçamentos, o seguimento e as verificações." },
      { objective: "O2", q: "As três formas de resolver um gargalo são:", options: ["Subir, baixar ou congelar os preços", "Ignorar, esconder ou adiar", "Eliminar, automatizar ou passar a outra pessoa", "Comprar, vender ou alugar"], answer: 2, why: "Estas tiram o limite." },
      { objective: "O2", q: "Porque se resolve primeiro o gargalo?", options: ["Acelerar outros passos não ajuda enquanto o trabalho se acumula ali", "É o passo mais barato", "É o mais divertido", "A IA diz que sim"], answer: 0, why: "O ponto mais estreito limita o processo inteiro." },
      { objective: "O3", q: "Um sistema é:", options: ["Uma marca de computador", "Uma forma escrita e repetível de fazer um trabalho", "Um canal de vendas", "Um formulário de impostos"], answer: 1, why: "É a definição." },
      { objective: "O3", q: "Um POP deve ter:", options: ["Os números dos cartões dos clientes", "Só um título", "As suas palavras-passe", "Passos, uma lista de verificação e um padrão de qualidade"], answer: 3, why: "Isto torna o trabalho repetível e fácil de verificar." },
      { objective: "O3", q: "Num POP, você marca os passos da IA e:", options: ["Onde uma pessoa tem de verificar", "As suas músicas preferidas", "Os preços dos concorrentes", "Mais nada"], answer: 0, why: "As verificações humanas mantêm a qualidade." },
      { objective: "O4", q: "Que trabalho precisa de uma pessoa e não da IA?", options: ["Resumir notas", "Organizar e-mails", "Fazer o rascunho de um horário", "Criar relações com os clientes"], answer: 3, why: "As relações e o bom senso precisam de pessoas." },
      { objective: "O4", q: "Quando a IA escreve o rascunho de uma descrição de função, você deve:", options: ["Juntar limites de idade", "Publicá-la sem mudanças", "Verificar se as palavras são justas e ligadas ao trabalho", "Tirar o intervalo de salário"], answer: 2, why: "Palavras justas evitam problemas de discriminação." },
      { objective: "O4", q: "Para pedir ao IRS que decida o estatuto de um trabalhador, qualquer uma das partes pode entregar:", options: ["O Form 1040-ES", "O Form SS-8", "Um W-2", "Um plano de negócio"], answer: 1, why: "A página do IRS fala do Form SS-8." },
      { objective: "O4", q: "Errar no estatuto do trabalhador pode levar a:", options: ["Nada", "Publicidade gratuita", "Custos mais baixos para sempre", "Impostos e multas"], answer: 3, why: "Classificar mal um trabalhador tem consequências nos impostos." },
      { objective: "O5", q: "Qual destes é um canal de crescimento?", options: ["O seu POP", "A sua folha de cálculo", "As recomendações dos clientes", "O seu gargalo"], answer: 2, why: "As recomendações trazem novos clientes." },
      { objective: "O5", q: "Um bom teste de 30 dias tem:", options: ["Uma meta clara e um limite de gastos", "Nenhuma medida", "Orçamento sem limite", "Nenhuma data de fim"], answer: 0, why: "As metas e os limites tornam os testes úteis." },
      { objective: "O5", q: "Depois de um teste de crescimento, você compara o custo por cada novo cliente com:", options: ["O logótipo do seu concorrente", "Os seus números principais, como o valor do cliente", "O tempo que faz", "A sua conta de telefone"], answer: 1, why: "Um canal vale a pena se os clientes valem mais do que custam." },
      { objective: "O6", q: "Qual destes é um número de qualidade para acompanhar enquanto cresce?", options: ["O número de tipos de letra", "A taxa de trabalhos refeitos ou de reembolsos", "O número de plantas no escritório", "O tamanho da assinatura do e-mail"], answer: 1, why: "Os trabalhos refeitos e os reembolsos mostram que a qualidade está a baixar." },
      { objective: "O6", q: "Com que frequência deve rever o seu plano a 90 dias?", options: ["De duas em duas semanas", "Nunca", "Só uma vez, no fim", "De hora a hora"], answer: 0, why: "As revisões regulares deixam-no ajustar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      5,
      8,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Números principais",
        objective: "O1",
        notYet: "Menos de cinco números, sem metas, ou as contas da IA não foram verificadas.",
        meets: "Cinco números principais de hoje com metas a 90 dias, com as contas verificadas.",
        exceeds: "Diz com clareza se cada venda dá lucro e porquê."
      },
      {
        name: "Solução para o gargalo",
        objective: "O2",
        notYet: "Nenhum gargalo identificado, ou a solução é vaga.",
        meets: "O gargalo principal e uma solução: eliminar, automatizar ou passar a outra pessoa.",
        exceeds: "Mostra os tempos dos passos que provam que é o gargalo."
      },
      {
        name: "Sistemas",
        objective: "O3",
        notYet: "Menos de dois sistemas, ou faltam passos ou um padrão de qualidade.",
        meets: "Dois sistemas identificados, cada um com passos, uma lista de verificação e um padrão de qualidade.",
        exceeds: "Pelo menos um foi testado por outra pessoa."
      },
      {
        name: "Ajuda e teste de crescimento",
        objective: "O5",
        notYet: "A ajuda não tem custo, ou o teste de crescimento não tem meta nem limite.",
        meets: "A ajuda a trazer com o seu custo, e um teste de crescimento com meta, medida e limite.",
        exceeds: "O estatuto do trabalhador anotado com as categorias do IRS, e um plano para comparar o custo por cada novo cliente."
      },
      {
        name: "Verificações de qualidade",
        objective: "O6",
        notYet: "Menos de três verificações, ou nenhuma data de revisão.",
        meets: "Três verificações de qualidade semanais e uma revisão de duas em duas semanas.",
        exceeds: "Inclui também uma verificação de que ferramentas de IA guardam dados de clientes."
      }
    ]
  },
  evaluation: {
    results: [
      "Donos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que fazem a solução para o gargalo e um teste de crescimento em 90 dias (inquérito de seguimento)",
      "Mudança nas receitas e no lucro por venda indicada pelos donos depois de 90 dias",
      "Donos que trazem ajuda (uma pessoa ou uma ferramenta de IA) com um sistema escrito para seguir"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com uma folha de cálculo e um assistente de IA gratuito",
      "Seis meses de números de vendas e custos sem os nomes dos clientes",
      "Um modelo de plano a 90 dias numa só página",
      "Cerca de 75 minutos para as lições e verificações, mais tempo com os números do próprio dono"
    ],
    facilitatorNotes: [
      "Peça aos donos que tragam seis meses de números antes da primeira sessão.",
      "Verifique que os nomes dos clientes foram retirados antes de quaisquer dados entrarem na IA.",
      "Encaminhe as perguntas sobre estatuto do trabalhador, impostos e emprego para as páginas do IRS e para um contabilista ou advogado.",
      "Peça aos donos que apresentem o seu plano a 90 dias em pequenos grupos, para receberem comentários.",
      "Avalie o plano com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
