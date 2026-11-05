"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-capstone.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-capstone-pt",
  lang: "pt",
  translationOf: "entrepreneurs-capstone",
  category: "Entrepreneurs",
  name: "Projeto Final: Construa o Seu Plano de Negócios, Serviço, Automação, Estratégia de Marketing ou Sistema de Produtividade com IA",
  skills: "Escolher e delimitar um projeto, Validar com pessoas reais, Desenhar a solução, Construí-la com IA, Verificar números e riscos, Testar e apresentar o seu trabalho",
  outcome: "escolher um projeto de negócio com IA (um plano de negócios para uma startup, um negócio de serviços, um sistema de automação, uma estratégia de marketing ou um ecossistema de produtividade), construí-lo do início ao fim com a IA como assistente, testá-lo com pessoas reais e apresentar uma versão terminada e verificada.",
  about: [
    "Este é o projeto final: o projeto que junta tudo o que aprendeu nos cursos para Empreendedores. Vai escolher UM de cinco projetos e construí-lo para um negócio real, o seu ou um que conheça bem.",
    "As cinco opções são: 1) um plano de negócios para uma startup com IA, 2) um negócio de serviços com IA, 3) um sistema de automação com IA para um negócio, 4) uma estratégia de marketing com IA, ou 5) um ecossistema de produtividade com IA (as ferramentas, modelos e rotinas que fazem andar a semana de um negócio). Cada lição é uma etapa da construção: escolher e delimitar, validar, desenhar, construir, verificar números e riscos, e depois testar e apresentar.",
    "Cada lição leva cerca de cinco minutos a ler, mas as tarefas \"Experimente agora\" são trabalho real do projeto e podem levar uma hora ou mais. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Quando o seu projeto envolver impostos, licenças ou questões legais, as lições indicam fontes oficiais; fale com um contabilista ou um advogado sobre a sua situação."
  ],
  finalTask: "Entregue o seu projeto final terminado num só documento ou pasta: um resumo de uma página (o negócio, o cliente, o problema, a sua solução), o projeto completo (plano de negócios, pacote de serviço, automação a funcionar com o seu registo, estratégia de marketing ou ecossistema de produtividade), as suas notas de validação de pelo menos três pessoas reais, os números e a lista de verificação de riscos, os resultados dos testes e as mudanças que fez, e uma apresentação de três minutos que consiga fazer em voz alta.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Empreendedores que estão a terminar os cursos para Empreendedores da Koach Learn e querem construir um projeto de IA completo para o seu próprio negócio ou para um que conheçam bem.",
    startingPoint: "Já usaram IA para escrita de negócios, ferramentas, marketing, automação ou produtividade nos cursos anteriores. A maioria ainda não levou um projeto da ideia até um resultado testado e apresentado.",
    gap: "As competências aprendidas uma de cada vez só dão fruto quando se juntam num projeto terminado. Os alunos precisam de delimitar, validar, desenhar, construir, verificar e apresentar um projeto real, para saírem com algo que possam usar, mostrar a um sócio ou financiador e continuar a melhorar.",
    constraints: [
      "Palavras simples; cada lição é curta, mas o trabalho do projeto pode levar uma hora ou mais por etapa",
      "Aparelhos: um computador com um assistente de IA gratuito, uma folha de cálculo e um programa de documentos",
      "Tempo: cerca de duas a quatro semanas de trabalho no projeto a tempo parcial",
      "As questões de impostos, licenças e lei vão para fontes oficiais (SBA, IRS) e para um contabilista ou advogado",
      "Marcadores em vez de nomes de clientes ou dados privados em cada pedido à IA"
    ],
    prerequisites: "\"Introdução à IA para Empreendedores\" e pelo menos dois outros cursos para Empreendedores, de preferência o que corresponde ao projeto escolhido."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as cinco opções de projeto final e um negócio real", action: "escolher um projeto e escrever uma delimitação de um parágrafo com o que entra, o que fica de fora e uma data de fim", standard: "pequena o suficiente para terminar a tempo" },
    { id: "O2", condition: "Com as principais suposições do seu projeto", action: "entrevistar pelo menos três pessoas reais com perguntas neutras e marcar cada suposição como confirmada, errada ou incerta", standard: "anotando as palavras exatas delas e atualizando a delimitação quando uma suposição está errada" },
    { id: "O3", condition: "Com a sua delimitação e as notas de validação", action: "escrever um esboço com as secções certas para o seu tipo de projeto", standard: "marcando que secções precisam dos seus próprios dados" },
    { id: "O4", condition: "Usando a IA como assistente", action: "construir o projeto uma secção de cada vez, com a IA a escrever o rascunho e você a verificar", standard: "mantendo um registo de construção e usando marcadores para os dados privados" },
    { id: "O5", condition: "Com o seu projeto", action: "verificar os números numa folha de cálculo e escrever uma lista de verificação de riscos", standard: "com todas as fórmulas verificadas e os pontos de impostos e lei marcados para confirmar numa fonte oficial ou com um profissional" },
    { id: "O6", condition: "Com o seu projeto terminado", action: "testá-lo com três pessoas, fazer as mudanças principais e fazer uma apresentação de três minutos", standard: "falando do problema, da sua solução, da prova e do próximo passo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear o seu projeto",
      lessons: [
        {
          objectives: ["O1"],
          title: "Etapa 1: Escolher e delimitar o seu projeto",
          minutes: 6,
          goal: "Escolher um dos cinco projetos finais e escrever uma delimitação de um parágrafo.",
          text: [
            "Escolha o projeto que mais vai ajudar um negócio real nos próximos três meses. Um plano de negócios serve para uma ideia nova que precisa de um plano claro ou de financiamento. Um negócio de serviços serve para quem está pronto a vender um serviço usando IA. Um sistema de automação serve para um negócio afogado em tarefas repetidas. Uma estratégia de marketing serve para um negócio que precisa de mais clientes. Um ecossistema de produtividade serve para um dono sobrecarregado que precisa de uma semana melhor.",
            "Delimitar quer dizer decidir o que entra e o que fica de fora. Uma boa delimitação é pequena o suficiente para terminar: \"Uma estratégia de marketing de 90 dias para a minha lavagem de carros móvel, focada num bairro e em dois canais\" é melhor do que \"marketing para tudo\".",
            "Peça à IA para ajudar a comparar: \"Este é o meu negócio e o meu maior problema. Qual destes cinco projetos finais ajudaria mais, e porquê?\" Depois decida você e escreva a sua delimitação."
          ],
          steps: ["Escreva o seu negócio (ou aquele que está a ajudar) e o maior problema dele.", "Leia as cinco opções de projeto.", "Pergunte à IA qual ajudaria mais e porquê.", "Escolha uma.", "Escreva uma delimitação de um parágrafo: o que entra, o que fica de fora e a data de fim."],
          words: [["Projeto final", "um último projeto que junta tudo o que aprendeu (em inglês, \"capstone\")."], ["Delimitação", "os limites de um projeto: o que está incluído e o que não está (em inglês, \"scope\")."]],
          slides: [
            { title: "Cinco opções de projeto final", bullets: ["Plano de negócios para uma startup com IA", "Negócio de serviços com IA", "Sistema de automação com IA", "Estratégia de marketing ou ecossistema de produtividade com IA"] },
            { title: "Qual serve?", bullets: ["Ideia nova que precisa de plano: plano de negócios", "Pronto a vender um serviço: negócio de serviços", "Demasiadas tarefas repetidas: automação"] },
            { title: "E também", bullets: ["Precisa de clientes: estratégia de marketing", "Dono sobrecarregado: ecossistema de produtividade"] },
            { title: "Delimite pequeno", bullets: ["O que entra, o que fica de fora", "Uma data de fim", "Pequeno o suficiente para terminar"] }
          ],
          tryIt: "Escolha o seu projeto final e escreva uma delimitação de um parágrafo com o que entra, o que fica de fora e a sua data de fim.",
          youCanNow: "escolher um projeto final que sirva um negócio real e delimitá-lo para o conseguir terminar.",
          quickCheck: [
            { objective: "O1", q: "O que diz a delimitação de um projeto?", options: ["O que entra e o que fica de fora do projeto, e quando vai estar pronto", "A história da sua vida", "Todas as ideias que já teve", "O nome da sua ferramenta de IA"], answer: 0, why: "A delimitação mantém o projeto pequeno o suficiente para terminar." },
            { objective: "O1", q: "A sua delimitação cobre marketing em cinco cidades e seis canais em duas semanas. O que faz?", options: ["Deixa como está", "Reduz para uma zona e poucos canais", "Acrescenta mais cidades", "Tira a data de fim"], answer: 1, why: "Uma delimitação menor pode ser terminada e bem feita." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Etapa 2: Validar com pessoas reais",
          minutes: 5,
          goal: "Verificar as suposições do seu projeto falando com pelo menos três pessoas reais.",
          text: [
            "Todo o projeto assenta em suposições: os clientes querem isto, vão pagar este valor, esta tarefa gasta estas horas, as pessoas encontram-nos nesta plataforma. Validar quer dizer verificá-las com pessoas reais antes de construir.",
            "Peça à IA: \"Faça a lista das cinco maiores suposições deste projeto e escreva três perguntas neutras de entrevista para cada uma.\" Neutra quer dizer que não empurra a pessoa: pergunte \"Como resolve isto hoje?\" e não \"Não adoraria a minha ideia?\"",
            "Fale com pelo menos três pessoas: possíveis clientes, o dono do negócio ou funcionários que fazem o trabalho. Escreva as palavras exatas delas. Depois peça à IA para ajudar a agrupar o que ouviu e anote que suposições se confirmaram e quais não."
          ],
          steps: ["Peça à IA a lista das cinco maiores suposições do seu projeto.", "Escreva perguntas de entrevista neutras.", "Fale com pelo menos três pessoas reais.", "Anote as palavras exatas delas.", "Marque cada suposição: confirmada, errada ou incerta, e atualize a sua delimitação."],
          words: [["Suposição", "algo que acredita ser verdade mas ainda não verificou."], ["Validação", "verificar as suposições com provas reais antes de construir."], ["Pergunta neutra", "uma pergunta que não empurra a pessoa para uma resposta."]],
          slides: [
            { title: "Todo o projeto tem suposições", bullets: ["Os clientes querem isto", "Vão pagar este valor", "Esta tarefa gasta estas horas"] },
            { title: "Faça perguntas neutras", bullets: ["\"Como resolve isto hoje?\"", "E não \"Não adoraria a minha ideia?\""] },
            { title: "Fale com três ou mais pessoas", bullets: ["Clientes, dono ou funcionários", "Anote as palavras exatas delas", "Confirmada, errada ou incerta?"] }
          ],
          tryIt: "Faça a lista das suas cinco suposições com a ajuda da IA, entreviste pelo menos três pessoas com perguntas neutras e marque cada suposição como confirmada, errada ou incerta.",
          youCanNow: "validar um projeto de negócio com pessoas reais antes de o construir.",
          quickCheck: [
            { objective: "O2", q: "O que é uma suposição num projeto de negócio?", options: ["Um facto provado", "Uma regra legal", "Algo em que acredita mas ainda não verificou", "O nome de um cliente"], answer: 2, why: "A validação verifica as suposições com pessoas reais." },
            { objective: "O2", q: "Uma entrevista mostra que os clientes não se importam com a função à volta da qual planeou tudo. O que faz?", options: ["Ignora", "Entrevista só pessoas que concordam", "Constrói na mesma", "Atualiza a sua delimitação ou o desenho"], answer: 3, why: "Suposições erradas devem mudar o plano antes de construir." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Etapa 3: Desenhar a solução",
          minutes: 6,
          goal: "Escrever o esboço do seu projeto usando a estrutura certa para a sua escolha.",
          text: [
            "Cada projeto tem uma estrutura. Plano de negócios: a SBA (o serviço do governo dos EUA para pequenas empresas) lista as secções de um plano tradicional (resumo executivo, descrição da empresa, análise de mercado, organização e gestão, linha de serviços ou produtos, marketing e vendas, pedido de financiamento, projeções financeiras) e a opção de um plano enxuto. Negócio de serviços: o problema, o que entrega, os passos (IA e pessoa), o pedido de instruções, o preço. Sistema de automação: o mapa do fluxo de trabalho, o gatilho e as ações, o passo da IA, as proteções de aprovação, os testes e o acompanhamento.",
            "Estratégia de marketing: cliente ideal, oferta, um ou dois canais, um calendário de conteúdos, um plano de e-mail e os números que vai acompanhar. Ecossistema de produtividade: o plano da semana, o conjunto de ferramentas (uma ferramenta por tarefa), modelos, procedimentos (SOP), automações e um registo de tempo.",
            "Peça à IA para transformar a sua delimitação e as notas de validação num esboço com estas secções. Edite-o para que cada secção mostre o que as pessoas reais lhe disseram."
          ],
          steps: ["Encontre a estrutura do seu tipo de projeto.", "Dê à IA a sua delimitação e as notas de validação.", "Peça um esboço com essas secções e uma linha sobre o que vai em cada uma.", "Edite o esboço usando o que as pessoas reais lhe disseram.", "Marque que secções a IA pode escrever em rascunho e quais precisam dos seus próprios dados."],
          words: [["Esboço", "a lista das secções que um projeto vai ter, antes de o escrever por completo."], ["Plano enxuto", "um plano de negócios curto, focado nas partes principais, em vez de um plano tradicional longo (em inglês, \"lean plan\")."]],
          slides: [
            { title: "Plano de negócios (secções da SBA)", bullets: ["Resumo executivo, empresa, análise de mercado", "Organização, produto ou serviço, marketing", "Pedido de financiamento, projeções financeiras"] },
            { title: "Serviço ou automação", bullets: ["Serviço: problema, entrega, passos, pedido, preço", "Automação: mapa, gatilho, ações, proteções, testes"] },
            { title: "Marketing ou produtividade", bullets: ["Marketing: cliente, oferta, canais, calendário, e-mail", "Produtividade: plano da semana, ferramentas, modelos, SOP"] },
            { title: "Construa o esboço", bullets: ["A IA escreve o rascunho a partir da delimitação e das notas", "Você edita com o que as pessoas reais disseram"] }
          ],
          sources: [{ name: "SBA: Escreva o seu plano de negócios (em inglês)", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Peça à IA para transformar a sua delimitação e as notas de validação num esboço com as secções certas para o seu projeto. Edite-o e marque que secções precisam dos seus próprios dados.",
          youCanNow: "desenhar a estrutura completa do seu projeto final com base em provas reais.",
          quickCheck: [
            { objective: "O3", q: "Onde pode encontrar as secções habituais de um plano de negócios?", options: ["Na página da SBA sobre planos de negócios", "Numa publicação nas redes sociais", "Num palpite qualquer da IA", "Nos ficheiros privados de um concorrente"], answer: 0, why: "A SBA lista as secções de um plano de negócios tradicional." },
            { objective: "O3", q: "O esboço da IA para o seu projeto de automação deixa de fora as proteções. O que faz?", options: ["Aceita o esboço", "Acrescenta uma secção de proteções", "Tira também os testes", "Muda para um projeto de marketing"], answer: 1, why: "Um projeto de automação precisa de fluxo de trabalho, gatilho e ações, passo da IA, proteções e testes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear o seu projeto",
        questions: [
          { objective: "O1", q: "Um dono de negócio diz: \"Passo 10 horas por semana a copiar encomendas entre aplicações.\" Que projeto final serve melhor?", options: ["Estratégia de marketing com IA", "Sistema de automação com IA", "Plano de negócios para uma startup com IA", "Nenhum"], answer: 1, why: "Copiar coisas repetidamente é exatamente o que a automação resolve." },
          { objective: "O1", q: "Qual é um projeto bem delimitado?", options: ["Usar todas as ferramentas de IA", "Marketing para tudo e para sempre", "Resolver o negócio inteiro", "Uma estratégia de marketing de 90 dias para um bairro e dois canais"], answer: 3, why: "É pequeno e claro o suficiente para terminar." },
          { objective: "O2", q: "Qual é uma pergunta de entrevista neutra?", options: ["\"Como resolve isto hoje?\"", "\"Não adoraria a minha ideia?\"", "\"Pagaria $100, não é?\"", "\"Toda a gente precisa disto, certo?\""], answer: 0, why: "Não empurra a pessoa para uma resposta." },
          { objective: "O2", q: "Com quantas pessoas reais deve falar, no mínimo?", options: ["Uma conversa com a IA", "Zero", "Três", "Só consigo mesmo"], answer: 2, why: "Três conversas é o mínimo para este projeto final." },
          { objective: "O3", q: "Qual é uma das secções de um plano de negócios tradicional segundo a SBA?", options: ["Palavras-passe das redes sociais", "Aplicações preferidas", "Análise de mercado", "Decoração do escritório"], answer: 2, why: "A análise de mercado é uma das secções que a SBA lista." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir, verificar e apresentar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Etapa 4: Construir com IA",
          minutes: 6,
          goal: "Construir o projeto completo secção a secção, com a IA a escrever o rascunho e você a verificar.",
          text: [
            "Trabalhe uma secção de cada vez. Para cada uma, dê à IA o nome da secção, os seus dados reais e o formato que quer. Exemplo: \"Escreva a secção de análise de mercado do plano de negócios da minha lavagem de carros móvel. Aqui está o que três clientes me disseram e os dados locais que encontrei. Menos de 300 palavras, linguagem simples.\"",
            "Nos projetos práticos, construa a coisa real: configure a automação e teste-a, crie os modelos e os procedimentos, faça as primeiras publicações e o e-mail, ou escreva o pacote de serviço e faça-o uma vez.",
            "Mantenha um registo de construção curto: o que fez, com que ferramenta, o que mudou depois de verificar. Nunca ponha dados privados de clientes ou de dinheiro em ferramentas de IA; use marcadores e preencha-os você mesmo."
          ],
          steps: ["Escolha a próxima secção do seu esboço.", "Dê à IA o nome da secção, os seus dados e o formato.", "Verifique o rascunho: dados, números, tom, afirmações.", "Construa as partes práticas a sério e teste-as.", "Escreva uma linha no seu registo de construção e passe à próxima secção."],
          words: [["Registo de construção", "um registo simples do que fez, com que ferramenta e o que mudou."], ["Marcador", "algo que fica no lugar de um dado, como [nome do cliente], que você substitui fora da ferramenta de IA."]],
          slides: [
            { title: "Uma secção de cada vez", bullets: ["Nome da secção + os seus dados + formato", "A IA escreve o rascunho; você verifica"] },
            { title: "Construa a coisa real", bullets: ["Configure e teste a automação", "Crie modelos, procedimentos, publicações", "Faça o serviço uma vez"] },
            { title: "Mantenha um registo de construção", bullets: ["O quê, com que ferramenta, o que mudou", "Nenhum dado privado nas ferramentas de IA"] }
          ],
          tryIt: "Construa pelo menos metade das secções do seu projeto (ou a peça principal a funcionar), com a IA a escrever o rascunho e você a verificar. Mantenha o seu registo de construção.",
          youCanNow: "construir um projeto de negócio real com a IA como assistente e você como quem verifica.",
          quickCheck: [
            { objective: "O4", q: "O que fica num registo de construção?", options: ["As suas palavras-passe", "Só o resultado final", "O que fez, com que ferramenta e o que mudou", "Números de telefone de clientes"], answer: 2, why: "Um registo de construção mostra como o projeto foi construído e verificado." },
            { objective: "O4", q: "Precisa que a IA escreva o rascunho de um e-mail para um cliente do seu projeto. Como inclui o cliente?", options: ["Cola o nome completo e a morada dele", "Cola o número do cartão dele", "Deixa o e-mail de fora", "Usa um marcador como [nome do cliente]"], answer: 3, why: "Os marcadores mantêm os dados privados fora da IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Etapa 5: Verificar números e riscos",
          minutes: 6,
          goal: "Verificar os números do seu projeto e fazer uma lista de verificação de riscos.",
          text: [
            "Todo o projeto precisa de números honestos: custos (ferramentas, tempo, materiais), preços ou poupanças, e quando se paga. Ponha-os numa folha de cálculo e verifique você mesmo cada fórmula. A IA pode sugerir o que incluir, mas quem verifica as contas é você.",
            "Depois faça uma lista de verificação de riscos com o que aprendeu: Todas as afirmações de marketing e de IA são verdadeiras e podem ser provadas (regras de publicidade da FTC, a agência dos EUA para o consumidor)? Os dados dos clientes ficam fora das ferramentas de IA e protegidos? Uma pessoa verifica tudo o que os clientes veem? As promoções pagas são indicadas? Precisa de uma licença, autorização ou registo fiscal onde trabalha?",
            "Para a parte oficial, use sites oficiais. Por exemplo, o IRS (a agência de impostos dos EUA) diz que nunca tem de pagar para obter um Número de Identificação de Empregador (EIN) e avisa sobre sites que cobram por ele. Os trabalhadores por conta própria geralmente pagam o imposto de trabalho por conta própria e muitas vezes impostos estimados trimestrais; veja irs.gov e fale com um contabilista. Pergunte a um advogado sobre qualquer questão legal do seu plano."
          ],
          steps: ["Faça a lista de todos os custos, preços ou poupanças numa folha de cálculo.", "Calcule quando o projeto se paga.", "Verifique você mesmo cada fórmula.", "Faça uma lista de verificação de riscos: afirmações, dados, verificação humana, indicações, licenças e impostos.", "Marque os pontos a confirmar num site oficial, com um contabilista ou um advogado."],
          words: [["Retorno", "quanto tempo até o dinheiro ganho ou poupado cobrir o que gastou (em inglês, \"payback\")."], ["EIN", "Employer Identification Number (Número de Identificação de Empregador): um número fiscal federal gratuito para um negócio, emitido pelo IRS."], ["Imposto de trabalho por conta própria", "o imposto da Segurança Social (Social Security) e do Medicare que os trabalhadores por conta própria pagam nos EUA."]],
          slides: [
            { title: "Números honestos", bullets: ["Custos: ferramentas, tempo, materiais", "Preços ou poupanças", "Quando se paga; verifique cada fórmula"] },
            { title: "Lista de verificação de riscos", bullets: ["Afirmações verdadeiras e que se podem provar", "Dados dos clientes protegidos", "Verificação humana; indicações"] },
            { title: "Fontes oficiais", bullets: ["IRS: o EIN é gratuito; cuidado com sites que cobram", "Imposto por conta própria e impostos estimados: irs.gov", "Pergunte a um contabilista ou advogado"] }
          ],
          sources: [{ name: "IRS: Obter um Número de Identificação de Empregador (em inglês)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Centro de impostos para trabalhadores por conta própria (em inglês)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "FTC: Noções básicas de publicidade e marketing (em inglês)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Faça a sua folha de números (custos, preços ou poupanças, retorno), verifique cada fórmula e escreva a sua lista de verificação de riscos com os pontos a confirmar oficialmente.",
          youCanNow: "verificar os números e os riscos de um projeto, e saber onde confirmar as questões de impostos e de lei.",
          quickCheck: [
            { objective: "O5", q: "O que é o retorno?", options: ["Quanto tempo até os ganhos ou as poupanças cobrirem o custo", "Um reembolso a um cliente", "Um formulário de impostos", "Uma multa por atraso"], answer: 0, why: "O retorno mostra quanto tempo falta até o projeto se pagar." },
            { objective: "O5", q: "O seu projeto precisa de uma licença comercial. O que vai para a sua lista de verificação de riscos?", options: ["Nada; a IA disse que está tudo bem", "Confirmar as regras da licença com o serviço oficial", "Ignorar a licença", "Perguntar a um amigo na internet"], answer: 1, why: "As questões de licenças e de lei confirmam-se com fontes oficiais ou com um profissional." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Etapa 6: Testar, melhorar e apresentar",
          minutes: 6,
          goal: "Testar o seu projeto terminado com pessoas reais, melhorá-lo e apresentá-lo em três minutos.",
          text: [
            "Mostre o projeto terminado a pelo menos três pessoas: o dono, um possível cliente ou alguém que o vá usar. Pergunte: \"O que está claro? O que é confuso? O que mudaria?\" Nos projetos práticos, deixe-as experimentar.",
            "Faça as mudanças mais importantes e anote-as. Depois peça à IA para ajudar a escrever uma apresentação de três minutos: o problema, quem o tem, a sua solução, a prova (o que as pessoas lhe disseram e os resultados dos testes), os números e o próximo passo.",
            "Pratique em voz alta. Peça à IA para fazer de ouvinte difícil (um investidor, um dono de negócio, um cliente) e lhe fazer perguntas difíceis. Depois junte tudo como o seu pacote final do projeto."
          ],
          steps: ["Mostre ou teste o projeto com pelo menos três pessoas.", "Faça as mudanças principais e anote-as.", "Peça à IA o esboço de uma apresentação de três minutos.", "Pratique em voz alta e cronometre.", "Treine as perguntas difíceis com a IA a fazer um papel.", "Junte o pacote final."],
          words: [["Apresentação curta (pitch)", "uma fala curta que explica o seu projeto e porque é importante."], ["Prova", "sinais de que o seu projeto funciona, como os resultados dos testes e o que as pessoas disseram."]],
          slides: [
            { title: "Teste o projeto terminado", bullets: ["Pelo menos três pessoas", "O que está claro, o que é confuso, o que vale a pena mudar?", "Deixe-as experimentar as partes práticas"] },
            { title: "Uma apresentação de três minutos", bullets: ["O problema e quem o tem", "A sua solução e a prova", "Os números e o próximo passo"] },
            { title: "Pratique", bullets: ["Em voz alta, com tempo marcado", "A IA faz de ouvinte difícil", "Depois junte o pacote final"] }
          ],
          tryIt: "Tarefa final: teste o seu projeto com três pessoas, faça as mudanças principais, pratique a sua apresentação de três minutos e junte o pacote do projeto final: resumo, projeto completo, notas de validação, números e lista de riscos, resultados dos testes e apresentação.",
          youCanNow: "construir, verificar, testar e apresentar um projeto de negócio com IA completo, do início ao fim.",
          quickCheck: [
            { objective: "O6", q: "O que é a prova numa apresentação de três minutos?", options: ["A sua opinião", "Uma longa lista de funções", "Sinais como os resultados dos testes e o que as pessoas disseram", "Uma piada"], answer: 2, why: "A prova mostra que o projeto funciona para pessoas reais." },
            { objective: "O6", q: "Quem testou acha duas secções confusas. O que faz antes de apresentar?", options: ["Apresenta como está", "Apaga as notas de quem testou", "Acrescenta mais secções", "Faz as mudanças principais e volta a testar as partes confusas"], answer: 3, why: "Os testes servem para encontrar e corrigir problemas antes de apresentar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Construir, verificar e apresentar",
        questions: [
          { objective: "O4", q: "Ao construir com IA, o que lhe deve dar para cada secção?", options: ["O nome da secção, os seus dados reais e o formato", "A palavra-passe do seu banco", "Nada; deixe-a adivinhar", "O plano de um concorrente para copiar"], answer: 0, why: "Dados reais e um formato claro dão um rascunho que se pode usar." },
          { objective: "O5", q: "Quem verifica as fórmulas da sua folha de números?", options: ["Um site qualquer", "Só a IA", "Ninguém", "Você"], answer: 3, why: "As contas da IA podem estar erradas." },
          { objective: "O5", q: "Um site oferece-se para lhe tratar de um EIN por $250. O que diz o IRS?", options: ["Esse é o preço oficial", "Nunca tem de pagar para obter um EIN; cuidado com sites que cobram", "Os EIN custam $1,000", "Só os EIN pagos são válidos"], answer: 1, why: "O IRS emite o EIN de graça e avisa sobre sites pagos." },
          { objective: "O6", q: "O que deve estar numa apresentação de três minutos?", options: ["O problema, a sua solução, a prova e o próximo passo", "Todos os detalhes de todas as folhas de cálculo", "As suas palavras-passe", "Só piadas"], answer: 0, why: "Uma apresentação curta foca-se no que importa." },
          { objective: "O6", q: "Como pode a IA ajudar a praticar a sua apresentação?", options: ["Escrevendo avaliações falsas", "Fazendo a apresentação por você", "Fazendo de ouvinte difícil que faz perguntas difíceis", "Saltando a prática"], answer: 2, why: "Treinar com um papel dá confiança para as perguntas reais." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Projeto Final: Construa o Seu Plano de Negócios, Serviço, Automação, Estratégia de Marketing ou Sistema de Produtividade com IA",
    questions: [
      { objective: "O1", q: "Quantos projetos finais escolhe?", options: ["Os cinco", "Um", "Três", "Nenhum"], answer: 1, why: "Escolhe UM projeto e termina-o." },
      { objective: "O1", q: "Um dono sobrecarregado que precisa de uma semana melhor deve escolher:", options: ["Um logótipo novo", "Um plano de negócios para uma startup com IA", "Nada", "Um ecossistema de produtividade com IA"], answer: 3, why: "Um ecossistema de produtividade organiza a semana do dono." },
      { objective: "O1", q: "Uma ideia nova que precisa de financiamento serve melhor com:", options: ["Um modelo de reclamação", "Um sistema de automação", "Só um calendário de conteúdos", "Um plano de negócios para uma startup com IA"], answer: 3, why: "Um plano de negócios explica a ideia e o dinheiro necessário." },
      { objective: "O1", q: "Delimitação quer dizer:", options: ["O logótipo do projeto", "O que entra e o que fica de fora do projeto", "O preço", "O programa de computador"], answer: 1, why: "A delimitação põe os limites para que consiga terminar." },
      { objective: "O2", q: "Uma suposição é:", options: ["Um formulário de impostos", "Um facto provado", "Algo em que acredita mas ainda não verificou", "Um tipo de IA"], answer: 2, why: "A validação verifica as suposições." },
      { objective: "O2", q: "Durante as entrevistas deve anotar:", options: ["As palavras exatas das pessoas", "Só o que esperava ouvir", "Os números dos cartões delas", "Nada"], answer: 0, why: "As palavras exatas mantêm você honesto." },
      { objective: "O2", q: "Se uma suposição se revelar errada, deve:", options: ["Escondê-la", "Ignorá-la", "Atualizar a sua delimitação ou o desenho", "Perguntar a outras pessoas até alguém concordar"], answer: 2, why: "A validação só serve se agir com base nela." },
      { objective: "O3", q: "Onde pode encontrar as secções habituais de um plano de negócios?", options: ["Na página da SBA sobre planos de negócios", "Numa publicação qualquer nas redes sociais", "Num concorrente", "Na sua caixa de e-mail"], answer: 0, why: "A SBA lista as secções do plano tradicional e do plano enxuto." },
      { objective: "O3", q: "Um projeto de sistema de automação inclui:", options: ["Só um logótipo", "Mapa do fluxo de trabalho, gatilho e ações, passo da IA, proteções, testes", "Só um preço", "Só uma apresentação"], answer: 1, why: "Estas partes fazem uma automação que funciona e é segura." },
      { objective: "O3", q: "Um projeto de estratégia de marketing inclui:", options: ["Só um extrato bancário", "Só um procedimento (SOP)", "Só um registo de tempo", "Cliente ideal, oferta, canais, calendário e plano de e-mail"], answer: 3, why: "Estas são as partes de uma estratégia de marketing." },
      { objective: "O4", q: "Ao construir, a melhor forma é:", options: ["Uma secção de cada vez, a IA escreve o rascunho, você verifica", "Tudo de uma vez sem verificar", "Copiar outro projeto", "Deixar a IA publicá-lo"], answer: 0, why: "Pequenos passos com verificação mantêm a qualidade alta." },
      { objective: "O4", q: "Um registo de construção guarda:", options: ["Nada de útil", "As suas palavras-passe", "As moradas dos seus clientes", "O que fez, com que ferramenta e o que mudou"], answer: 3, why: "Mostra o seu processo e ajuda a melhorar." },
      { objective: "O4", q: "Como deve tratar os nomes dos clientes nos pedidos à IA?", options: ["Acrescentar números de cartão", "Escrevê-los com os números de telefone", "Usar marcadores como [nome do cliente]", "Publicá-los para todos verem"], answer: 2, why: "Os marcadores mantêm os dados privados de fora." },
      { objective: "O5", q: "O retorno é:", options: ["Um reembolso a um cliente", "Quanto tempo até os ganhos ou as poupanças cobrirem o custo", "Uma taxa", "Um empréstimo"], answer: 1, why: "Mostra quando o projeto se paga." },
      { objective: "O5", q: "O que deve estar na sua lista de verificação de riscos?", options: ["O meu logótipo é redondo?", "Qual é a minha cor preferida?", "Quantas aplicações tenho?", "Todas as afirmações de marketing são verdadeiras e podem ser provadas?"], answer: 3, why: "As regras da FTC exigem afirmações verdadeiras." },
      { objective: "O5", q: "Os trabalhadores por conta própria geralmente pagam:", options: ["Só imposto sobre as vendas", "Nenhum imposto", "O imposto de trabalho por conta própria e também o imposto sobre o rendimento", "Só imposto sobre imóveis"], answer: 2, why: "O IRS diz isso no seu centro de impostos para trabalhadores por conta própria." },
      { objective: "O5", q: "Para as questões legais do seu projeto, deve:", options: ["Falar com um advogado", "Confiar em qualquer resposta da IA", "Ignorá-las", "Copiar um concorrente"], answer: 0, why: "Um advogado pode aconselhar sobre a sua situação." },
      { objective: "O6", q: "Ao testar o projeto terminado, pergunte às pessoas:", options: ["Dá-me cinco estrelas?", "O que está claro, o que é confuso, o que mudaria?", "Qual é a sua palavra-passe?", "Pode dar-me o número do seu cartão?"], answer: 1, why: "Estas perguntas encontram melhorias reais." },
      { objective: "O6", q: "A prova na sua apresentação quer dizer:", options: ["Uma promessa", "Sinais como os resultados dos testes e o que as pessoas disseram", "Um logótipo", "Uma longa lista de funções"], answer: 1, why: "As provas tornam uma apresentação credível." },
      { objective: "O6", q: "O pacote final do projeto inclui:", options: ["Resumo, projeto completo, notas de validação, números e riscos, resultados dos testes, apresentação", "Só uma página de título", "Só o histórico de conversa com a IA", "Só um logótipo"], answer: 0, why: "Juntos, estes mostram um projeto completo e verificado." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 5, 7, 10, 13, 14, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Resumo e delimitação", objective: "O1", notYet: "Falta o negócio, o cliente, o problema ou a solução, ou a delimitação é grande demais para terminar.", meets: "Um resumo de uma página com o negócio, o cliente, o problema e a solução, e uma delimitação clara.", exceeds: "Explica porque escolheu este tipo de projeto para este negócio." },
      { name: "Validação", objective: "O2", notYet: "Menos de três pessoas, ou perguntas que empurram para uma resposta.", meets: "Notas de três ou mais pessoas com as palavras exatas e cada suposição marcada.", exceeds: "Mostra o que mudou no projeto por causa do que as pessoas disseram." },
      { name: "Projeto completo", objective: "O4", notYet: "Faltam secções ou ficou texto da IA sem verificar.", meets: "Todas as secções do tipo de projeto, construídas com IA e verificadas, com um registo de construção.", exceeds: "O projeto já está em uso ou pronto a lançar." },
      { name: "Números e riscos", objective: "O5", notYet: "Fórmulas sem verificar ou sem lista de verificação de riscos.", meets: "Folha de números com fórmulas verificadas e o retorno, mais uma lista de verificação de riscos.", exceeds: "As questões de impostos e de lei foram confirmadas com fontes oficiais ou com um profissional." },
      { name: "Testes e apresentação", objective: "O6", notYet: "Não foi testado, ou a apresentação é longa demais ou não tem prova.", meets: "Testado com três pessoas, mudanças principais feitas, apresentação de três minutos com problema, solução, prova e próximo passo.", exceeds: "Apresentou em voz alta a um público real e respondeu a perguntas difíceis." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o projeto final e passam na tarefa final (grelha de avaliação)",
      "Projetos lançados ou em uso em 60 dias (inquérito de seguimento)",
      "Alunos que apresentam o seu projeto a um sócio, credor, financiador ou cliente",
      "Receitas, tempo poupado ou novos clientes que os alunos ligam ao projeto"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com um assistente de IA gratuito, uma folha de cálculo e um programa de documentos",
      "Acesso a pelo menos três pessoas reais para entrevistas e testes",
      "Os materiais dos cursos anteriores para Empreendedores que correspondem ao projeto",
      "Cerca de 60 minutos de lições e verificações, mais várias horas de trabalho no projeto ao longo de duas a quatro semanas"
    ],
    facilitatorNotes: [
      "Faça um pequeno ponto de situação depois de cada etapa para que os alunos não se atrasem no trabalho do projeto.",
      "Aprove cada delimitação antes de os alunos começarem a validar, e incentive delimitações mais pequenas.",
      "Lembre aos alunos que usem marcadores para os dados dos clientes e que confirmem oficialmente as questões de impostos, licenças e lei.",
      "Termine com um dia de demonstração em que cada aluno faz a sua apresentação de três minutos.",
      "Avalie o pacote do projeto final com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
