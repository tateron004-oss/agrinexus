"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-productivity.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-ai-productivity-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-productivity",
  category: "Entrepreneurs",
  name: "IA para a Produtividade no Negócio",
  skills: "Planear a semana com IA, Despachar o correio eletrónico mais depressa, Escrever modelos reutilizáveis, Fazer um procedimento padrão, Medir o tempo poupado",
  outcome: "usar a IA para planear a semana do seu negócio, tratar o correio eletrónico mais depressa com modelos de resposta reutilizáveis, transformar um trabalho repetido num procedimento escrito passo a passo e medir quanto tempo poupou.",
  about: [
    "A maioria dos donos de negócio não fica sem ideias; fica sem horas. Este curso é para donos que fazem tudo sozinhos e querem recuperar algum tempo.",
    "Você vai usar um assistente de IA gratuito para planear a semana por prioridade, organizar e responder ao correio eletrónico mais depressa, criar modelos para as mensagens que escreve vezes sem conta e escrever um procedimento simples para que um ajudante (ou você no futuro) faça um trabalho sempre da mesma maneira. Depois vai medir o tempo que poupou.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa que faz no seu negócio real. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Monte um \"kit para recuperar tempo\" para o seu negócio: uma semana planeada com IA com as suas três prioridades principais, três modelos de resposta reutilizáveis, um procedimento escrito para um trabalho repetido e um registo simples de tempo de antes e depois que mostre os minutos poupados numa tarefa.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios que fazem a maior parte do trabalho sozinhos e têm pouco tempo, como prestadores de serviços que trabalham sozinhos, donos de lojas e pessoas com um negócio paralelo.",
    startingPoint: "Têm uma lista de tarefas, respondem ao correio eletrónico e fazem os mesmos trabalhos todas as semanas, quase sempre de memória. Alguns já usaram um assistente de IA para escrever, mas não para planear, criar modelos ou registar o seu trabalho por escrito.",
    gap: "Os donos perdem horas com semanas sem plano, correio eletrónico lento e mensagens repetidas, e cada trabalho depende de eles se lembrarem de como se faz. Precisam de planear por prioridade, reutilizar modelos, escrever procedimentos e medir se a IA poupa mesmo tempo, para que as horas livres vão para fazer crescer o negócio.",
    constraints: [
      "Palavras simples; não é preciso formação técnica",
      "Aparelhos: um telefone ou computador com correio eletrónico, uma agenda e um assistente de IA gratuito",
      "Tempo: cerca de cinco minutos por lição, mais tarefas feitas durante a semana de trabalho real",
      "Nada de moradas de clientes, números de cartão ou detalhes privados de contratos colados na IA",
      "Perguntas sobre a lei, licenças e dinheiro vão para o serviço oficial ou para um profissional"
    ],
    prerequisites: "\"Introdução à IA para Empreendedores\", ou alguma experiência em pedir ajuda a um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista desarrumada das tarefas da próxima semana", action: "usar a IA para agrupá-las e criar um plano semanal em blocos de tempo com as suas próprias três prioridades principais", standard: "com o plano colocado na sua agenda" },
    { id: "O2", condition: "Com a caixa de entrada de hoje", action: "organizar o correio eletrónico em grupos e enviar respostas escritas pela IA que você verifica primeiro", standard: "sem colar na IA nenhum detalhe privado de clientes" },
    { id: "O3", condition: "Com as três perguntas que os clientes mais fazem", action: "criar para cada uma um modelo de resposta reutilizável com espaços para preencher", standard: "com os seus dados reais verificados e os modelos guardados num lugar fácil de alcançar" },
    { id: "O4", condition: "Com um trabalho que repete todas as semanas", action: "escrever um procedimento numerado passo a passo com uma lista de verificação", standard: "testado uma vez seguindo-o palavra por palavra e corrigido" },
    { id: "O5", condition: "Com um documento comercial longo sem os detalhes privados", action: "obter da IA um resumo das datas, taxas e obrigações e compará-lo com o original", standard: "lendo você mesmo as partes sobre dinheiro e sobre a lei" },
    { id: "O6", condition: "Para uma tarefa que faz todas as semanas", action: "registar o seu tempo antes e depois de usar a IA e calcular os minutos poupados por semana", standard: "contando o tempo gasto a verificar e a corrigir o trabalho da IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear e comunicar mais depressa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear a sua semana por prioridade",
          minutes: 5,
          goal: "Usar a IA para transformar uma lista de tarefas desarrumada num plano semanal com três prioridades.",
          text: [
            "Uma lista de tarefas comprida esconde o que importa. A IA é boa a organizar. Cole a sua lista (sem detalhes privados de clientes) e peça-lhe para agrupar as tarefas e sugerir as três que mais vão ajudar o seu negócio esta semana.",
            "Uma forma simples de decidir: as tarefas que trazem dinheiro ou mantêm os clientes satisfeitos costumam vir primeiro; as tarefas que podem esperar ou ser passadas a outra pessoa vêm depois. A ordem final decide você, porque conhece o seu negócio.",
            "Depois peça um plano em blocos de tempo: \"Ponha estas tarefas na minha semana. Trabalho das 8 da manhã às 4 da tarde, de segunda a sexta, e faço entregas nas manhãs de terça e quinta.\" Coloque o plano na sua agenda."
          ],
          steps: ["Escreva numa lista todas as tarefas que tem na cabeça.", "Peça à IA para agrupar as tarefas e sugerir as três principais da semana.", "Escolha você as suas três principais.", "Peça à IA para colocar as tarefas em blocos de tempo à volta do seu horário fixo.", "Copie os blocos para a sua agenda."],
          words: [["Prioridade", "uma tarefa que é a mais importante neste momento."], ["Bloco de tempo", "um período marcado na sua agenda para um tipo de trabalho."]],
          slides: [
            { title: "Listas compridas escondem o que importa", bullets: ["Cole a sua lista na IA (sem detalhes privados)", "Peça-lhe para agrupar as tarefas", "Peça as três principais desta semana"] },
            { title: "O que costuma vir primeiro", bullets: ["Tarefas que trazem dinheiro", "Tarefas que mantêm os clientes satisfeitos", "A ordem final decide você"] },
            { title: "Faça blocos de tempo", bullets: ["Diga à IA o seu horário e os trabalhos fixos", "Receba um plano semanal", "Coloque-o na sua agenda"] }
          ],
          tryIt: "Escreva a lista completa das tarefas da próxima semana, peça a um assistente de IA para agrupá-las e sugerir as três principais, escolha você as suas três principais e obtenha um plano em blocos de tempo que coloca na sua agenda.",
          youCanNow: "transformar uma lista desarrumada num plano semanal com prioridades claras e blocos de tempo.",
          quickCheck: [
            { objective: "O1", q: "O que é um bloco de tempo?", options: ["Um período marcado na sua agenda para um tipo de trabalho", "Uma lista de todas as tarefas", "Uma pausa entre reuniões", "Um prazo dado por um cliente"], answer: 0, why: "Os blocos de tempo protegem o tempo para as suas prioridades." },
            { objective: "O1", q: "A IA sugere as suas três tarefas principais, mas uma é um trabalho de pouco valor. O que faz?", options: ["Aceita a lista da IA", "Escolhe você as suas três principais", "Faz todas as tarefas ao mesmo tempo", "Não planeia esta semana"], answer: 1, why: "As prioridades finais decide você; a IA só sugere." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Despachar a sua caixa de entrada mais depressa",
          minutes: 5,
          goal: "Usar a IA para organizar os e-mails e escrever rascunhos de respostas que verifica antes de enviar.",
          text: [
            "O correio eletrónico come horas. Organize-o primeiro: responder já (clientes, dinheiro, urgente), responder mais tarde, só ler, e apagar ou cancelar a subscrição. Muitas aplicações de correio também conseguem filtrar mensagens automaticamente para pastas ou etiquetas.",
            "Para as respostas, a IA pode transformar as suas notas rápidas numa mensagem educada: \"Responda a um cliente que pede para mudar a marcação de sexta-feira. Diga que sim, ofereça sábado às 10 da manhã ou segunda às 2 da tarde, e seja breve e simpático.\" O Gmail e o Outlook também podem ter sugestões de IA incluídas, conforme o seu plano.",
            "Nunca cole numa ferramenta de conversa o e-mail completo de um cliente com o número de telefone, a morada ou os dados do cartão. Resuma a pergunta com as suas palavras. E leia sempre a resposta antes de a enviar."
          ],
          steps: ["Organize a caixa de entrada em: responder já, responder mais tarde, só ler, apagar.", "Para cada e-mail de responder já, escreva uma nota de uma linha com o que quer dizer.", "Peça à IA para transformar a nota numa resposta curta.", "Leia, corrija e envie você mesmo."],
          words: [["Filtro", "uma regra do correio eletrónico que move as mensagens para uma pasta ou etiqueta automaticamente."], ["Cancelar a subscrição", "o link que faz uma empresa deixar de lhe enviar e-mails."]],
          slides: [
            { title: "Organize primeiro", bullets: ["Responder já: clientes, dinheiro, urgente", "Responder mais tarde", "Só ler, ou apagar e cancelar a subscrição"] },
            { title: "A IA transforma notas em respostas", bullets: ["Escreva numa linha o que quer dizer", "Peça uma resposta curta e simpática", "A IA incluída pode ajudar no Gmail ou no Outlook"] },
            { title: "Fique seguro", bullets: ["Resuma você a pergunta do cliente", "Nada de números de telefone, moradas ou dados do cartão", "Leia antes de enviar"] }
          ],
          tryIt: "Organize a caixa de entrada de hoje nos quatro grupos. Para dois e-mails de responder já, escreva uma nota de uma linha, peça à IA o rascunho da resposta, verifique-o e envie-o. Meça quanto tempo levou.",
          youCanNow: "organizar o correio eletrónico por importância e enviar respostas mais rápidas e verificadas com a ajuda da IA.",
          quickCheck: [
            { objective: "O2", q: "Que e-mails pertencem ao grupo de responder já?", options: ["Boletins informativos", "Recibos antigos", "Clientes, dinheiro e assuntos urgentes", "Anúncios de outras empresas"], answer: 2, why: "Os e-mails de responder já mexem com clientes e dinheiro." },
            { objective: "O2", q: "A IA escreve o rascunho de uma resposta a um cliente. O que faz antes de enviar?", options: ["Envia sem ler", "Acrescenta o número do cartão do cliente", "Reencaminha outra vez para a IA", "Lê e corrige o que estiver errado"], answer: 3, why: "Você verifica cada rascunho da IA antes de sair com o seu nome." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Modelos reutilizáveis para mensagens que escreve vezes sem conta",
          minutes: 4,
          goal: "Criar três modelos de resposta para as perguntas que os clientes mais fazem.",
          text: [
            "Se responde à mesma pergunta todas as semanas (preços, horário, como marcar, política de reembolso), escreva a resposta uma vez e reutilize-a. A IA pode ajudar a escrever um modelo claro e simpático.",
            "Um bom modelo tem espaços que você preenche: \"Olá [nome], obrigado por perguntar sobre [serviço]. O nosso preço para [tamanho] é [preço]. Pode marcar em [link ou número].\" Mantenha os seus dados reais no modelo e verifique-os sempre que os preços ou as regras mudarem.",
            "Guarde os modelos onde os encontra depressa: um documento, a aplicação de notas do telefone ou a função de respostas guardadas que muitas aplicações de correio e de mensagens para negócios oferecem."
          ],
          steps: ["Faça a lista das cinco perguntas que os clientes mais fazem.", "Escolha as três principais.", "Peça à IA um modelo curto e simpático para cada uma, com [espaços].", "Preencha os seus dados reais e verifique-os.", "Guarde os modelos onde os alcança depressa."],
          words: [["Modelo", "uma mensagem já feita com espaços que você preenche de cada vez."], ["Resposta guardada", "uma função do correio eletrónico ou das mensagens que guarda um modelo para usar com um clique."]],
          slides: [
            { title: "Escreva uma vez, reutilize", bullets: ["Preços, horário, marcações, reembolsos", "A IA ajuda a escrever com clareza"] },
            { title: "Um bom modelo", bullets: ["Simpático e curto", "[Espaços] para nome, serviço, preço", "Os seus dados reais, verificados"] },
            { title: "Tenha-os à mão", bullets: ["Um documento ou aplicação de notas", "Respostas guardadas no correio ou nas mensagens", "Atualize quando os preços mudarem"] }
          ],
          tryIt: "Escreva as três perguntas que os clientes mais fazem e use a IA para fazer um modelo para cada uma. Preencha os seus dados reais e guarde-os.",
          youCanNow: "escrever e reutilizar modelos para as perguntas dos clientes a que mais responde.",
          quickCheck: [
            { objective: "O3", q: "Para que servem os espaços como [nome] num modelo?", options: ["Para detalhes que preenche de cada vez", "Para palavras que a IA não pode ler", "Para erros a apagar", "Para links escondidos"], answer: 0, why: "Os espaços deixam reutilizar um modelo para muitos clientes." },
            { objective: "O3", q: "Mudou o seu horário de abertura. O que faz aos seus modelos?", options: ["Nada", "Atualiza e verifica outra vez cada modelo que fala do horário", "Apaga-os todos", "Espera que um cliente se queixe"], answer: 1, why: "Os modelos têm de corresponder aos seus dados atuais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear e comunicar mais depressa",
        questions: [
          { objective: "O1", q: "Que tarefas costumam merecer estar nas suas três principais da semana?", options: ["As que são divertidas", "As que trazem dinheiro ou mantêm os clientes satisfeitos", "As que levam 30 segundos", "As que outra pessoa pediu"], answer: 1, why: "As tarefas de dinheiro e de clientes mantêm o negócio a funcionar." },
          { objective: "O1", q: "O que deve dizer à IA para obter um plano útil em blocos de tempo?", options: ["Nada", "O saldo do seu banco", "A sua palavra-passe", "O seu horário de trabalho e os trabalhos fixos"], answer: 3, why: "A IA precisa do seu horário e dos compromissos fixos para colocar as tarefas." },
          { objective: "O2", q: "O e-mail de um cliente tem a morada de casa e o número do cartão. Como pede ajuda à IA para responder?", options: ["Resume a pergunta com as suas palavras", "Cola o e-mail inteiro", "Reencaminha-o para a empresa da IA", "Ignora o cliente"], answer: 0, why: "Resumir mantém os detalhes privados fora da ferramenta de IA." },
          { objective: "O3", q: "Qual é um bom modelo?", options: ["\"Veja o site\"", "Uma mensagem diferente escrita do zero de cada vez", "\"Olá [nome], o nosso preço para [serviço] é [preço]. Marque em [link].\"", "Uma mensagem com o número do cartão de um cliente"], answer: 2, why: "Tem espaços que você preenche com dados reais." },
          { objective: "O3", q: "Os seus preços subiram. O que tem de fazer aos seus modelos?", options: ["Apagá-los todos", "Nada", "Atualizá-los e verificá-los outra vez", "Deixar a IA adivinhar os novos preços"], answer: 2, why: "Os modelos têm de corresponder aos seus dados atuais." }
        ]
      }
    },
    {
      name: "Capítulo 2: Sistemas que poupam tempo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever um procedimento operacional padrão",
          minutes: 5,
          goal: "Transformar com a IA um trabalho que repete num procedimento escrito passo a passo.",
          text: [
            "Um procedimento operacional padrão (POP, em inglês SOP) é uma lista escrita de passos para fazer um trabalho sempre da mesma maneira. Deixa um ajudante fazer o trabalho sem lhe telefonar e evita erros quando está ocupado.",
            "Uma forma fácil de fazer um: faça o trabalho uma vez enquanto diz ou escreve cada passo em notas rápidas. Depois peça à IA: \"Transforme estas notas num procedimento numerado e claro que um ajudante novo consiga seguir. Acrescente uma lista de verificação curta no final.\"",
            "Teste o procedimento: dê-o a alguém (ou siga-o você mesmo, palavra por palavra) e corrija qualquer passo que estava confuso ou faltava."
          ],
          steps: ["Escolha um trabalho que repete todas as semanas, como abrir a loja ou embalar uma encomenda.", "Faça-o uma vez enquanto escreve notas rápidas de cada passo.", "Peça à IA para transformar as notas num procedimento numerado e numa lista de verificação.", "Teste-o seguindo-o à risca, ou peça a um ajudante para experimentar.", "Corrija os passos pouco claros e guarde a versão final."],
          words: [["POP (SOP)", "procedimento operacional padrão: passos escritos para fazer um trabalho sempre da mesma maneira."], ["Lista de verificação", "uma lista curta que vai marcando para ter a certeza de que nada ficou esquecido."]],
          slides: [
            { title: "Para que serve um POP", bullets: ["O mesmo trabalho, da mesma maneira, sempre", "Um ajudante faz o trabalho sem lhe telefonar", "Menos erros quando está ocupado"] },
            { title: "Faça um com a IA", bullets: ["Faça o trabalho uma vez e escreva notas rápidas", "Peça à IA passos numerados e uma lista de verificação"] },
            { title: "Teste-o", bullets: ["Siga-o palavra por palavra", "Ou peça a um ajudante para experimentar", "Corrija os passos confusos ou que faltam"] }
          ],
          tryIt: "Escolha um trabalho semanal, escreva notas rápidas enquanto o faz e peça à IA para as transformar num POP numerado com uma lista de verificação. Teste-o uma vez e corrija-o.",
          youCanNow: "transformar um trabalho repetido num procedimento escrito e testado.",
          quickCheck: [
            { objective: "O4", q: "Para que serve um procedimento operacional padrão (POP)?", options: ["Acompanha as suas vendas", "Substitui a sua agenda", "Escreve os passos de um trabalho repetido para que qualquer pessoa o faça da mesma maneira", "Responde aos e-mails dos clientes"], answer: 2, why: "Um POP deixa um ajudante fazer o trabalho sem lhe telefonar." },
            { objective: "O4", q: "O seu ajudante segue o seu novo POP e fica parado no passo 4. O que faz?", options: ["Culpa o ajudante", "Deita fora o POP", "Faz você o trabalho para sempre", "Corrige o passo 4 para ficar claro e testa outra vez"], answer: 3, why: "O teste mostra onde o procedimento precisa de ser corrigido." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Resumos e pesquisa rápida",
          minutes: 4,
          goal: "Usar a IA para resumir documentos longos e fazer pesquisa rápida e verificada.",
          text: [
            "Os donos de negócio recebem documentos longos: condições de fornecedores, regras de subsídios, rascunhos de contratos de arrendamento, relatórios. A IA pode resumi-los: \"Resuma isto em 8 tópicos. Faça a lista das datas, taxas ou coisas que tenho de fazer.\" Tire primeiro os detalhes privados e leia as partes do original que importam, sobretudo tudo o que fala de dinheiro ou de obrigações legais.",
            "A IA também pode acelerar a pesquisa: comparar fornecedores, explicar um termo novo ou fazer a lista de perguntas para um contabilista. Peça-lhe as fontes e depois abra você mesmo essas fontes.",
            "Para perguntas sobre a lei, impostos ou licenças, use a IA para preparar boas perguntas e depois obtenha a resposta no site do serviço oficial ou de um profissional."
          ],
          steps: ["Tire os detalhes privados do documento.", "Peça um resumo curto, mais as datas, taxas e obrigações.", "Leia as partes do original sobre dinheiro ou obrigações legais.", "Na pesquisa, peça as fontes e abra-as você mesmo."],
          words: [["Resumo", "uma versão curta que guarda os pontos principais."], ["Condições", "as regras de um acordo ou contrato."]],
          slides: [
            { title: "Resuma documentos longos", bullets: ["Tire primeiro os detalhes privados", "Peça tópicos, datas, taxas e obrigações", "Leia você as partes sobre dinheiro e a lei"] },
            { title: "Pesquisa rápida", bullets: ["Compare opções, explique termos", "Peça as fontes", "Abra você mesmo as fontes"] },
            { title: "Lei, impostos, licenças", bullets: ["Use a IA para preparar perguntas", "Obtenha as respostas no serviço oficial ou de um profissional"] }
          ],
          tryIt: "Pegue num documento longo do seu negócio (sem os detalhes privados), peça à IA um resumo em 8 tópicos com as datas, taxas e obrigações e compare-o com o original.",
          youCanNow: "obter um resumo rápido e verificado de um documento comercial longo.",
          quickCheck: [
            { objective: "O5", q: "O que deve pedir um bom pedido de resumo?", options: ["Os pontos principais, mais as datas, taxas e obrigações", "Só o título", "Um poema sobre o documento", "A frase mais comprida"], answer: 0, why: "As datas, as taxas e as obrigações são aquilo sobre o qual um dono tem de agir." },
            { objective: "O5", q: "A IA resume o seu contrato de arrendamento e diz que não há multa por atraso. O que faz?", options: ["Confia", "Verifica você mesmo a parte do contrato sobre dinheiro", "Assina um contrato novo", "Faz à IA a mesma pergunta outra vez"], answer: 1, why: "As partes sobre dinheiro e a lei lê você mesmo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir o tempo que poupa",
          minutes: 5,
          goal: "Registar o seu tempo antes e depois de usar a IA numa tarefa para ver se ajuda mesmo.",
          text: [
            "A IA deve poupar-lhe tempo, e não só dar a sensação de estar ocupado. Meça. Escolha uma tarefa, como responder a perguntas sobre marcações ou escrever a publicação semanal. Anote quanto tempo leva da maneira antiga e depois quanto leva com a IA, incluindo o tempo para verificar e corrigir.",
            "Multiplique: minutos poupados de cada vez, vezes o número de vezes por semana. Dez minutos poupados numa tarefa que faz 15 vezes por semana são 150 minutos, duas horas e meia.",
            "Se uma tarefa não fica mais rápida com a IA, ou precisa de tantas correções que não vale a pena, deixe de usar a IA nessa tarefa. Ponha o tempo poupado nas tarefas que fazem crescer o seu negócio."
          ],
          steps: ["Escolha uma tarefa que faz muitas vezes.", "Meça uma vez o tempo da maneira antiga.", "Meça o tempo com a IA, incluindo verificar e corrigir.", "Multiplique os minutos poupados pelo número de vezes que a faz por semana.", "Mantenha, mude ou deixe a IA nessa tarefa."],
          words: [["Registo de tempo", "um registo simples de quanto tempo levam as tarefas."]],
          slides: [
            { title: "Meça, não adivinhe", bullets: ["Meça o tempo da maneira antiga", "Meça o tempo com a IA, incluindo verificar", "Compare"] },
            { title: "Faça as contas", bullets: ["Minutos poupados x vezes por semana", "10 min x 15 vezes = 150 min por semana"] },
            { title: "Decida", bullets: ["Mais rápido? Mantenha", "Mais lento ou com muitas correções? Deixe", "Use o tempo poupado para crescer"] }
          ],
          tryIt: "Tarefa final: monte o seu kit para recuperar tempo: a sua semana planeada com IA, os seus três modelos, o seu POP e um registo de tempo de antes e depois para uma tarefa, com os minutos poupados por semana.",
          youCanNow: "provar se a IA lhe poupa tempo e decidir onde usá-la no seu negócio.",
          quickCheck: [
            { objective: "O6", q: "O que deve incluir o seu tempo \"com a IA\"?", options: ["Só o tempo que a IA levou a escrever", "Nada; a IA é instantânea", "Também o tempo para verificar e corrigir o trabalho da IA", "O tempo que passou a almoçar"], answer: 2, why: "Verificar e corrigir faz parte do custo real em tempo." },
            { objective: "O6", q: "Poupa 4 minutos numa tarefa que faz 10 vezes por semana. O que escreve no seu registo?", options: ["4 minutos por semana", "10 minutos por semana", "14 minutos por semana", "40 minutos por semana"], answer: 3, why: "4 minutos vezes 10 vezes por semana são 40 minutos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Sistemas que poupam tempo",
        questions: [
          { objective: "O4", q: "O que é um POP?", options: ["Um procedimento escrito passo a passo para um trabalho repetido", "Um tipo de fatura", "Uma publicação nas redes sociais", "Um formulário de impostos"], answer: 0, why: "Um POP deixa fazer um trabalho sempre da mesma maneira." },
          { objective: "O4", q: "Como sabe que o seu POP funciona?", options: ["Pergunta à IA se está bom", "Imprime-o a cores", "Torna-o mais comprido", "Segue-o palavra por palavra ou pede a um ajudante para experimentar"], answer: 3, why: "O teste mostra os passos que faltam ou que estão confusos." },
          { objective: "O5", q: "A IA resumiu um contrato de arrendamento. Que partes ainda tem de ler você mesmo?", options: ["Nenhuma", "As partes sobre dinheiro e obrigações legais", "Só o título", "Os números das páginas"], answer: 1, why: "Os resumos podem deixar de fora ou dizer mal detalhes importantes." },
          { objective: "O6", q: "Poupa 5 minutos de cada vez numa tarefa que faz 20 vezes por semana. Quanto tempo é?", options: ["100 minutos por semana", "25 minutos por semana", "5 minutos por semana", "20 minutos por semana"], answer: 0, why: "5 x 20 = 100 minutos." },
          { objective: "O6", q: "Usar a IA numa tarefa leva mais tempo por causa de tantas correções. O que deve fazer?", options: ["Usar duas ferramentas de IA ao mesmo tempo", "Continuar a usá-la na mesma", "Deixar de usar a IA nessa tarefa", "Deixar de verificar o trabalho"], answer: 2, why: "Use a IA só onde ela poupa mesmo tempo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Produtividade no Negócio",
    questions: [
      { objective: "O1", q: "O primeiro passo para planear uma semana com a IA é:", options: ["Comprar uma aplicação nova", "Escrever todas as tarefas", "Apagar a sua agenda", "Perguntar a um cliente"], answer: 1, why: "A IA só consegue organizar o que você escreve na lista." },
      { objective: "O1", q: "Quando escolhe as suas três principais, quem decide a ordem final?", options: ["A sua aplicação de correio", "A IA", "Um concorrente", "Você"], answer: 3, why: "A IA sugere; você conhece o seu negócio." },
      { objective: "O1", q: "Um bloco de tempo é:", options: ["Um tipo de e-mail", "Um relógio avariado", "Uma multa por atraso", "Um período marcado na sua agenda para um tipo de trabalho"], answer: 3, why: "Os blocos de tempo protegem o tempo para as prioridades." },
      { objective: "O2", q: "Que grupo da caixa de entrada deve vir primeiro?", options: ["Boletins informativos", "Responder já: clientes, dinheiro, urgente", "Recibos antigos", "Anúncios"], answer: 1, why: "Os e-mails de clientes e de dinheiro são os mais importantes." },
      { objective: "O2", q: "Um filtro de correio eletrónico:", options: ["Envia dinheiro", "Apaga a sua conta", "Move as mensagens para uma pasta automaticamente", "Escreve respostas"], answer: 2, why: "Os filtros organizam o correio sem você." },
      { objective: "O2", q: "Uma forma segura de ter ajuda da IA com o e-mail de um cliente é:", options: ["Resumir a pergunta com as suas palavras", "Colar o número do cartão dele", "Colar a morada de casa dele", "Reencaminhar a palavra-passe dele"], answer: 0, why: "Mantenha os detalhes privados dos clientes fora das ferramentas de IA." },
      { objective: "O2", q: "Antes de enviar uma resposta escrita pela IA, deve:", options: ["Acrescentar um desconto ao acaso", "Enviá-la sem ler", "Lê-la e corrigi-la", "Copiá-la para todos os clientes"], answer: 2, why: "Você é responsável pelo que envia." },
      { objective: "O3", q: "Os modelos são melhores para:", options: ["Perguntas que os clientes fazem vezes sem conta", "Disputas legais que só acontecem uma vez", "Transferências bancárias", "Palavras-passe"], answer: 0, why: "Escreva a resposta uma vez e reutilize-a." },
      { objective: "O3", q: "Os espaços como [nome] e [preço] num modelo são:", options: ["Erros", "Lugares que preenche de cada vez", "Palavras-passe", "Links para a IA"], answer: 1, why: "Fazem um modelo servir para muitos clientes." },
      { objective: "O3", q: "Onde pode ter os modelos à mão?", options: ["Na conversa com a IA, com os dados dos clientes", "Só na sua cabeça", "Num papelinho colado na porta", "Em respostas guardadas no correio ou numa aplicação de notas"], answer: 3, why: "As respostas guardadas e as notas tornam-nos rápidos de usar." },
      { objective: "O4", q: "Um POP ajuda porque:", options: ["Um ajudante pode fazer o trabalho da mesma maneira sem lhe telefonar", "Torna os trabalhos mais longos", "Substitui os clientes", "É um formulário de impostos"], answer: 0, why: "Os passos escritos tornam o trabalho repetível." },
      { objective: "O4", q: "A forma mais rápida de começar um POP é:", options: ["Não fazer o teste", "Adivinhar os passos", "Copiar o manual de um concorrente", "Fazer o trabalho uma vez enquanto escreve notas rápidas e depois pedir à IA para as organizar"], answer: 3, why: "Notas reais mais a organização da IA dão passos certos." },
      { objective: "O4", q: "Uma lista de verificação no final de um POP:", options: ["Substitui os passos", "Acrescenta uma taxa", "Ajuda a ter a certeza de que nada ficou esquecido", "É um contrato legal"], answer: 2, why: "Marcar os itens apanha os passos esquecidos." },
      { objective: "O5", q: "Antes de pedir à IA para resumir um contrato com um fornecedor, deve:", options: ["Acrescentar os dados de acesso ao seu banco", "Tirar os detalhes privados", "Assiná-lo", "Enviá-lo aos clientes"], answer: 1, why: "Mantenha as informações privadas fora das ferramentas de IA." },
      { objective: "O5", q: "Um bom pedido de resumo pede:", options: ["Uma versão mais comprida", "Só o título", "Piadas", "Os pontos principais, mais as datas, taxas e coisas que tem de fazer"], answer: 3, why: "As datas, as taxas e as obrigações são aquilo sobre o qual age." },
      { objective: "O5", q: "Quando a IA dá fontes de pesquisa, deve:", options: ["Nunca olhar", "Confiar nos links sem olhar", "Abri-las e lê-las você mesmo", "Partilhá-las logo como factos"], answer: 2, why: "A IA pode dar fontes erradas ou inventadas." },
      { objective: "O5", q: "Para uma pergunta sobre uma licença, a IA serve melhor para:", options: ["Preparar perguntas para o serviço oficial ou para um profissional", "Dar a resposta legal final", "Fazer o pedido por você", "Pagar a taxa"], answer: 0, why: "As fontes oficiais e os profissionais dão a resposta final." },
      { objective: "O6", q: "Quando mede o tempo com a IA, inclua:", options: ["Só os segundos que a IA leva a responder", "O tempo para verificar e corrigir o trabalho da IA", "Nada", "A sua pausa para o almoço"], answer: 1, why: "Verificar faz parte do custo real." },
      { objective: "O6", q: "Dez minutos poupados numa tarefa que faz 15 vezes por semana são:", options: ["10 minutos", "25 minutos", "150 minutos", "1,500 minutos"], answer: 2, why: "10 x 15 = 150 minutos." },
      { objective: "O6", q: "Para onde deve ir o tempo poupado?", options: ["Para as tarefas que fazem crescer o seu negócio", "Para mais correio eletrónico", "Para experimentar todas as aplicações novas", "Para lado nenhum"], answer: 0, why: "Poupar tempo serve para o usar no crescimento." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      7,
      10,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Plano semanal",
        objective: "O1",
        notYet: "Não escolheu prioridades, ou o plano não está na agenda.",
        meets: "Três prioridades escolhidas pelo dono e blocos de tempo na agenda.",
        exceeds: "As três principais ligam-se claramente ao dinheiro ou aos clientes, e os trabalhos fixos foram marcados primeiro."
      },
      {
        name: "Modelos de resposta",
        objective: "O3",
        notYet: "Menos de três modelos, ou os dados estão errados.",
        meets: "Três modelos com espaços e dados verificados, guardados num lugar fácil de alcançar.",
        exceeds: "Os modelos já estão a ser usados e foram atualizados uma vez."
      },
      {
        name: "Procedimento",
        objective: "O4",
        notYet: "Faltam passos ou o POP não foi testado.",
        meets: "Passos numerados e uma lista de verificação, testados uma vez e corrigidos.",
        exceeds: "Um ajudante seguiu-o sem fazer perguntas."
      },
      {
        name: "Registo de tempo",
        objective: "O6",
        notYet: "Não há tempos de antes e depois, ou o tempo de verificação ficou de fora.",
        meets: "Tempos de antes e depois para uma tarefa, incluindo a verificação, com os minutos poupados por semana.",
        exceeds: "Também diz para onde vai o tempo poupado."
      },
      {
        name: "Detalhes privados",
        objective: "O2",
        notYet: "Moradas de clientes, números de cartão ou detalhes privados de contratos foram colocados na IA.",
        meets: "As perguntas foram resumidas com as palavras do próprio dono; nenhum detalhe privado foi partilhado.",
        exceeds: "Os detalhes privados também foram tirados dos documentos antes de os resumir."
      }
    ]
  },
  evaluation: {
    results: [
      "Donos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Minutos poupados por semana, segundo o inquérito de seguimento aos 30 dias",
      "Donos que entregam um procedimento escrito a um ajudante ou familiar em 30 dias",
      "Alunos que começam outro curso da Koach Learn para empreendedores em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com correio eletrónico, uma agenda e um assistente de IA gratuito",
      "Uma aplicação de notas ou papel para os modelos, os procedimentos e o registo de tempo",
      "Um cronómetro (o relógio do telefone serve)",
      "Cerca de 60 minutos para as lições e as verificações, mais tarefas repartidas por uma semana de trabalho real"
    ],
    facilitatorNotes: [
      "Faça o curso ao longo de uma semana para que os donos possam registar tempos reais de antes e depois.",
      "Mostre como resumir o e-mail de um cliente com as suas próprias palavras em vez de o colar.",
      "Junte os donos aos pares para trocarem e testarem os procedimentos uns dos outros.",
      "Lembre aos donos que as perguntas sobre a lei, licenças e dinheiro vão para o serviço oficial ou para um profissional.",
      "Avalie o kit para recuperar tempo com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
