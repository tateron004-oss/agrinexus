"use strict";

// Koach Learn course (Portuguese translation of leadership/lead-agentic-transformation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "lead-agentic-transformation-pt",
  lang: "pt",
  translationOf: "lead-agentic-transformation",
  category: "Leadership Development",
  name: "Liderança na Era da IA Agêntica 3: IA Agêntica, Automação e Liderar a Transformação",
  skills: "Escolher um processo para automatizar, Definir o nível de autonomia de um agente, Medir o ponto de partida e o valor, Manter um registo de riscos, Liderar as pessoas na mudança, Escrever um plano piloto de 90 dias",
  outcome: "escolher um processo de trabalho que os agentes de IA podem melhorar e escrever para ele um plano piloto de 90 dias, com o mapa do processo, o nível de autonomia e as aprovações do agente, o ponto de partida e as medidas de sucesso, um registo de riscos, um plano para as pessoas e a formação, e uma regra de avançar ou não avançar para alargar.",
  about: [
    "Este curso é para líderes que vão decidir se e como os agentes de IA entram na sua organização: gestores, diretores, proprietários e líderes de organizações sem fins lucrativos e do setor público. Termina a série Liderança na Era da IA Agêntica.",
    "O Capítulo 1 é sobre o trabalho: encontrar um processo que vale a pena automatizar, decidir quanto um agente pode fazer sozinho e medir o valor e o risco com honestidade. O Capítulo 2 é sobre as pessoas: liderar a mudança, criar uma governação simples e escrever um plano piloto de 90 dias que possa apresentar à sua direção, ao proprietário ou à equipa de liderança.",
    "Não é preciso programar. Vai usar um assistente de IA gratuito para ajudar a escrever rascunhos, e o seu próprio juízo para decidir. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Escreva um plano piloto de 90 dias, com duas páginas, para um agente de IA na sua organização. Inclua: o mapa do processo (passos e tempo atuais), a tarefa do agente e o seu nível de autonomia, cada ponto de aprovação humana e a pessoa responsável, o ponto de partida e as medidas de sucesso, um registo de riscos com pelo menos cinco riscos, um plano para as pessoas (quem é afetado, como vai comunicar e dar formação) e uma regra de avançar ou não avançar para o dia 90. Apresente-o em cinco minutos a um colega e anote as duas perguntas mais difíceis que ele fizer.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Líderes que vão decidir se e como os agentes de IA entram na sua organização: gestores, diretores, proprietários e líderes de organizações sem fins lucrativos e do setor público que estão a terminar a série Liderança na Era da IA Agêntica.",
    startingPoint: "Sabem explicar a IA generativa e a IA agêntica, usam IA no seu próprio trabalho de liderança e têm um guia de uso de IA para a equipa. Ainda não planearam nem lideraram um piloto com um agente de IA.",
    gap: "Os projetos com agentes falham muitas vezes porque os líderes automatizam o processo errado, dão autonomia demais aos agentes, não medem o ponto de partida ou esquecem as pessoas afetadas. Os líderes precisam de um plano piloto claro e honesto, com aprovações, medidas, riscos, um plano para as pessoas e uma regra de paragem, antes de qualquer coisa entrar em funcionamento.",
    constraints: [
      "Não é preciso programar; palavras simples para líderes sem formação técnica",
      "Aparelhos: um computador com um assistente de IA gratuito para escrever rascunhos",
      "As leis e regras mudam conforme o setor e o lugar, por isso os alunos confirmam com um consultor qualificado",
      "Nenhum dado pessoal ou confidencial nas ferramentas de IA enquanto escreve o plano",
      "Tempo: lições curtas; o plano final leva mais tempo"
    ],
    prerequisites: "Os cursos 1 e 2 de Liderança na Era da IA Agêntica."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com cinco processos da sua área", action: "mapear um processo e dar-lhe uma pontuação como primeiro candidato para um agente de IA", standard: "usando os cinco fatores: volume, passos claros, dados digitais, incómodo e pouco dano" },
    { id: "O2", condition: "Para o processo do seu piloto", action: "escolher o nível de autonomia inicial do agente, fazer a lista de cada ponto de aprovação humana e indicar o responsável pelo agente", standard: "com aprovação antes de o agente gastar dinheiro ou falar com clientes" },
    { id: "O3", condition: "Antes de o piloto começar", action: "definir um ponto de partida, três a cinco medidas de sucesso e um registo de riscos", standard: "com medidas de qualidade e pelo menos cinco riscos, cada um com uma proteção e um responsável" },
    { id: "O4", condition: "Com as pessoas que o seu piloto afeta", action: "planear como vai comunicar com elas, envolvê-las e dar-lhes formação", standard: "dizendo com honestidade o que vai e não vai mudar e como levantar preocupações" },
    { id: "O5", condition: "Para a sua equipa ou organização", action: "criar uma governação de IA simples, com um inventário, um responsável por cada agente e um grupo de revisão", standard: "com pelo menos três linhas no inventário e alguém que pode pausar cada agente" },
    { id: "O6", condition: "Usando as partes acima", action: "escrever e apresentar um plano piloto de 90 dias, com duas páginas e uma regra de avançar ou não avançar", standard: "com a regra escrita antes de o piloto começar e duas perguntas difíceis anotadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Os agentes no trabalho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar um processo que vale a pena automatizar",
          minutes: 6,
          goal: "Mapear um processo e avaliar se é um bom primeiro candidato para um agente.",
          text: [
            "Não comece pela tecnologia; comece pelo trabalho. Um bom primeiro processo é frequente, segue passos claros, usa informação que já está em formato digital, é incómodo ou lento para as pessoas e tem erros que se podem apanhar antes de causarem dano. Exemplos: separar os pedidos que chegam, preparar relatórios semanais, marcar horários, primeiros rascunhos de respostas de rotina.",
            "Mapeie o processo antes de o automatizar. Escreva cada passo, quem o faz, a ferramenta usada e o tempo que leva. Muitas vezes o mapa mostra desperdício que pode tirar sem IA nenhuma. Automatizar um processo avariado só o faz avariar mais depressa.",
            "Dê a cada candidato uma pontuação de 1 a 5 em: volume, passos claros, dados digitais, incómodo para os trabalhadores e pouco dano se correr mal. Escolha o total mais alto para o seu primeiro piloto, não a ideia mais entusiasmante. Evite primeiros pilotos que tomam decisões sobre pessoas, dinheiro ou segurança."
          ],
          steps: ["Faça a lista de cinco processos candidatos.", "Mapeie os dois melhores: passos, quem, ferramenta, tempo.", "Tire primeiro o desperdício óbvio.", "Dê a cada um uma pontuação de 1 a 5 em volume, passos claros, dados digitais, incómodo, pouco dano.", "Escolha a pontuação mais alta que evita decisões sobre pessoas, dinheiro ou segurança."],
          words: [["Mapa do processo", "uma imagem, passo a passo, de como um trabalho é feito hoje."], ["Piloto", "um teste pequeno e com tempo limitado antes de alargar a todos."]],
          slides: [
            { title: "Comece pelo trabalho", bullets: ["Frequente, passos claros, dados digitais", "Lento ou incómodo para as pessoas", "Erros que se apanham antes do dano"] },
            { title: "Mapeie antes de automatizar", bullets: ["Passos, quem, ferramenta, tempo", "Tire primeiro o desperdício", "Processo avariado + IA = avaria mais rápida"] },
            { title: "Dê pontuação aos candidatos", bullets: ["Volume, passos claros, dados digitais, incómodo, pouco dano", "Escolha a melhor pontuação, não a mais entusiasmante", "Evite primeiro decisões sobre pessoas, dinheiro, segurança"] }
          ],
          tryIt: "Faça a lista de cinco processos da sua área. Mapeie os dois primeiros, dê-lhes pontuação nos cinco fatores e escolha o processo do seu piloto.",
          youCanNow: "mapear um processo e escolher um primeiro candidato sensato para um agente de IA.",
          quickCheck: [
            { objective: "O1", q: "O que mostra um mapa do processo?", options: ["Cada passo, quem o faz, a ferramenta usada e o tempo que leva", "A planta do escritório", "Só o resultado final", "Que trabalhadores substituir"], answer: 0, why: "Um mapa mostra como o trabalho acontece de verdade, e isso revela onde um agente pode ajudar." },
            { objective: "O1", q: "Um processo é raro, pouco claro e causa dano se correr mal. Que pontuação lhe dá como primeiro piloto?", options: ["Um primeiro piloto forte, porque é difícil", "Um mau primeiro candidato; escolha um processo frequente, claro e de pouco dano", "Automatizá-lo todo de uma vez", "Dar-lhe pontuação mais tarde, depois de o agente estar feito"], answer: 1, why: "Os primeiros pilotos devem ser frequentes, claros e de pouco dano se correrem mal." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Quanto pode o agente fazer? Autonomia e aprovações",
          minutes: 5,
          goal: "Definir o nível de autonomia de um agente e indicar as aprovações humanas.",
          text: [
            "Pense na autonomia em níveis. Nível 1, sugerir: o agente escreve rascunhos e uma pessoa faz tudo. Nível 2, preparar: o agente prepara a ação (um formulário preenchido, um email pronto) e uma pessoa aprova cada uma. Nível 3, agir com verificações: o agente trata dos casos de rotina e envia as exceções a uma pessoa, que também revê uma amostra. Nível 4, agir sozinho: raro, só para tarefas de pouco dano que se podem desfazer.",
            "Comece os pilotos no nível 1 ou 2. Suba só quando as suas medidas mostrarem que o agente é fiável, e só para os casos em que o provou. Mantenha a aprovação antes de qualquer coisa que gaste dinheiro, fale com clientes ou com o público, mude registos ou afete os direitos de uma pessoa.",
            "Indique uma pessoa responsável pelo agente: alguém que responde pelos seus resultados, revê o seu registo de atividade e pode desligá-lo. Um agente sem responsável é a forma mais comum de a automação correr mal."
          ],
          words: [["Nível de autonomia", "quanto um agente de IA pode fazer sem uma pessoa aprovar."], ["Exceção", "um caso que não segue o padrão normal e precisa de uma pessoa."], ["Responsável pelo agente", "a pessoa que responde pelos resultados de um agente e pode desligá-lo."]],
          slides: [
            { title: "Quatro níveis de autonomia", bullets: ["1 Sugerir: o agente escreve rascunhos, as pessoas agem", "2 Preparar: as pessoas aprovam cada ação", "3 Agir com verificações: exceções para as pessoas", "4 Agir sozinho: raro, pouco dano, pode desfazer-se"] },
            { title: "Comece baixo, ganhe confiança", bullets: ["Pilotos no nível 1 ou 2", "Suba só com provas"] },
            { title: "Aprove sempre antes de", bullets: ["Gastar dinheiro", "Falar com clientes ou com o público", "Mudar registos ou afetar direitos"] },
            { title: "Cada agente tem um responsável", bullets: ["Responde pelos resultados, revê os registos", "Pode desligá-lo"] }
          ],
          tryIt: "Para o processo do seu piloto, escolha o nível de autonomia inicial, faça a lista de cada passo em que uma pessoa tem de aprovar e indique o responsável pelo agente.",
          youCanNow: "definir o nível de autonomia, os pontos de aprovação e o responsável de um agente.",
          quickCheck: [
            { objective: "O2", q: "O que faz o responsável pelo agente?", options: ["Escreve o código do agente", "Compra o programa", "Responde pelos resultados do agente, revê os seus registos e pode desligá-lo", "É quem mais usa o agente"], answer: 2, why: "Cada agente precisa de uma pessoa com nome que responda por ele." },
            { objective: "O2", q: "O agente do seu piloto vai escrever rascunhos de respostas a clientes. Em que nível de autonomia começa?", options: ["Autonomia total, para poupar mais tempo", "Agir com verificações, enviando só as exceções", "Nenhum nível; não toma a decisão", "Nível 1 ou 2, para que uma pessoa aprove antes de algo chegar a um cliente"], answer: 3, why: "Os pilotos costumam começar baixo, e a aprovação vem antes de um agente falar com clientes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Medir o valor e o risco com honestidade",
          minutes: 6,
          goal: "Definir um ponto de partida, medidas de sucesso e um registo de riscos para um piloto.",
          text: [
            "Não consegue mostrar uma melhoria sem um ponto de partida: como o processo funciona hoje. Meça o tempo por tarefa, o volume, a taxa de erros, o tempo de espera e a satisfação dos trabalhadores ou dos clientes durante algumas semanas antes do piloto.",
            "Escolha três a cinco medidas de sucesso, e inclua a qualidade, não só a rapidez: \"tempo por pedido 30 por cento mais baixo, sem aumento de erros\". Conte os custos escondidos: o tempo de revisão, o custo das ferramentas, a formação e o tempo para corrigir os erros do agente.",
            "Mantenha um registo de riscos: uma tabela simples com cada risco, a probabilidade, a gravidade, a proteção e o responsável. Riscos comuns dos agentes: resultados errados, fugas de dados privados, injeção de instruções (prompt injection), acesso demais, resultados injustos, trabalhadores que confiam demais no agente e dependência de um fornecedor. O AI Risk Management Framework do NIST (o instituto de normas dos Estados Unidos), gratuito e organizado em Govern, Map, Measure e Manage (governar, mapear, medir e gerir), é um bom guia."
          ],
          steps: ["Meça o ponto de partida durante algumas semanas.", "Escolha três a cinco medidas, incluindo a qualidade.", "Conte os custos escondidos: revisão, ferramentas, formação, correções.", "Faça a lista de pelo menos cinco riscos num registo.", "Dê a cada risco uma proteção e um responsável."],
          words: [["Ponto de partida", "como um processo funciona antes de o mudar (em inglês, \"baseline\")."], ["Registo de riscos", "uma tabela de riscos com a probabilidade, a gravidade, a proteção e o responsável."], ["Dependência de um fornecedor", "ficar preso a um só fornecedor porque mudar é difícil (em inglês, \"vendor lock-in\")."]],
          slides: [
            { title: "Primeiro, o ponto de partida", bullets: ["Tempo por tarefa, volume, erros", "Tempo de espera, satisfação", "Meça durante algumas semanas"] },
            { title: "Meça a qualidade, não só a rapidez", bullets: ["\"30% mais rápido, sem aumento de erros\"", "Conte o tempo de revisão, ferramentas, formação e correções"] },
            { title: "Registo de riscos", bullets: ["Risco, probabilidade, impacto, proteção, responsável", "Resultado errado, privacidade, injeção, acesso", "Injustiça, confiança demais, dependência"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Escreva as medidas do ponto de partida do processo do seu piloto, três a cinco medidas de sucesso e um registo de riscos com pelo menos cinco riscos, cada um com uma proteção e um responsável.",
          youCanNow: "definir um ponto de partida, medidas de sucesso honestas e um registo de riscos para um piloto de IA.",
          quickCheck: [
            { objective: "O3", q: "O que é um registo de riscos?", options: ["Uma lista de riscos, cada um com probabilidade, impacto, proteção e responsável", "Uma lista dos trabalhadores que usam IA", "Uma apólice de seguro", "O registo de atividade do agente"], answer: 0, why: "Um registo de riscos torna cada risco visível e dá-lhe uma proteção e um responsável." },
            { objective: "O3", q: "A sua única medida de sucesso é \"mais rápido\". O que acrescenta?", options: ["Nada; a rapidez é o que importa", "Uma medida de qualidade, como não haver aumento de erros", "Uma medida de quanto os trabalhadores gostam do fornecedor", "A nota que o agente dá a si próprio"], answer: 1, why: "Rapidez sem qualidade pode esconder erros e trabalho refeito." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Os agentes no trabalho",
        questions: [
          { objective: "O1", q: "Qual é o melhor primeiro processo para um piloto com um agente de IA?", options: ["Decidir quem promover", "Aprovar pagamentos grandes", "Separar os pedidos de rotina que chegam", "Tratar de incidentes de segurança"], answer: 2, why: "Trabalho frequente, claro e de pouco dano é um primeiro piloto seguro." },
          { objective: "O1", q: "Porque mapear um processo antes de o automatizar?", options: ["O mapa revela muitas vezes desperdício, e automatizar um processo avariado só o faz avariar mais depressa", "É obrigatório por lei", "Os agentes não funcionam sem um mapa", "Torna o piloto mais longo"], answer: 0, why: "Corrija primeiro o processo e depois automatize." },
          { objective: "O2", q: "No nível de autonomia 2 (preparar), quem aprova cada ação?", options: ["Ninguém", "O agente", "O fornecedor", "Uma pessoa"], answer: 3, why: "O nível 2 prepara as ações para uma pessoa aprovar." },
          { objective: "O3", q: "O que é o ponto de partida?", options: ["O plano mais barato", "Como o processo funciona antes da mudança", "O nome do agente", "O relatório final"], answer: 1, why: "Sem um ponto de partida não consegue mostrar uma melhoria." },
          { objective: "O3", q: "Qual é a melhor medida de sucesso?", options: ["\"Parece mais rápido\"", "\"Os trabalhadores gostam do logótipo\"", "\"O agente está ocupado\"", "\"Tempo por pedido 30% mais baixo, sem aumento de erros\""], answer: 3, why: "Mede a rapidez e a qualidade em comparação com o ponto de partida." }
        ]
      }
    },
    {
      name: "Capítulo 2: Liderar as pessoas e o plano",
      lessons: [
        {
          objectives: ["O4"],
          title: "Liderar as pessoas na mudança",
          minutes: 5,
          goal: "Planear como vai comunicar com as pessoas afetadas, envolvê-las e dar-lhes formação.",
          text: [
            "A automação muda os empregos, e as pessoas sentem isso antes de anunciar qualquer coisa. Envolva desde o início as pessoas que fazem o trabalho hoje: elas conhecem as exceções, os desenrascanços e os riscos reais. Devem ajudar a mapear o processo e a testar o agente.",
            "Comunique cedo e com honestidade: porque está a fazer o piloto, o que vai e não vai mudar, o que acontece ao tempo poupado e como as pessoas podem levantar preocupações. Se ainda não sabe, diga isso e diga quando vai saber. O silêncio enche-se de boatos.",
            "Planeie as novas competências: rever o trabalho do agente, tratar das exceções, encontrar erros da IA e escrever boas instruções. Reserve tempo para a formação e reconheça as pessoas que encontram problemas; apanhar um erro do agente é uma contribuição, não uma deslealdade."
          ],
          steps: ["Faça a lista de quem é afetado e como.", "Convide as pessoas que fazem o trabalho para ajudar a mapear e a testar.", "Diga-lhes porquê, o que muda, o que não muda e como levantar preocupações.", "Planeie as novas competências e o tempo de formação.", "Reconheça as pessoas que encontram problemas."],
          words: [["Gestão da mudança", "planear como as pessoas passam da forma antiga de trabalhar para a nova."], ["Parte interessada", "qualquer pessoa afetada por uma mudança ou capaz de a influenciar."]],
          slides: [
            { title: "Envolva quem faz o trabalho", bullets: ["Conhecem as exceções e os riscos", "Ajudam a mapear e a testar"] },
            { title: "Comunique cedo e com honestidade", bullets: ["Porquê, o que muda, o que não muda", "O que acontece ao tempo poupado", "Diga quando ainda não sabe"] },
            { title: "Crie novas competências", bullets: ["Rever o trabalho do agente e as exceções", "Encontrar erros da IA", "Reconheça quem encontra problemas"] }
          ],
          tryIt: "Faça a lista das pessoas que o seu piloto afeta. Escreva-lhes uma primeira mensagem curta que explique porquê, o que vai e não vai mudar e como levantar preocupações. Planeie uma sessão de formação.",
          youCanNow: "planear o lado humano de uma mudança com IA: envolvimento, comunicação honesta e formação.",
          quickCheck: [
            { objective: "O4", q: "De que trata a gestão da mudança?", options: ["Mudar versões de programas", "Mudar o orçamento", "Fazer as pessoas passar da forma antiga de trabalhar para a nova", "Mudar de gestores"], answer: 2, why: "A gestão da mudança trata das pessoas, não só das ferramentas." },
            { objective: "O4", q: "Os trabalhadores perguntam se o piloto vai afetar os seus empregos e você ainda não sabe. O que diz?", options: ["Promete que nada vai mudar", "Não diz nada até ao dia 90", "Diz-lhes que é confidencial", "Diz que ainda não sabe e quando vai saber"], answer: 3, why: "Respostas honestas, mesmo \"ainda não sei\", criam confiança durante a mudança." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Uma governação de IA simples que funciona",
          minutes: 5,
          goal: "Criar uma governação simples: um inventário, um responsável por cada agente e um ritmo de revisão.",
          text: [
            "Governação quer dizer decidir quem pode fazer o quê com a IA, e verificar que está a funcionar. Não tem de ser pesada. Comece com três coisas.",
            "Um inventário: uma lista de cada ferramenta e agente de IA em uso, o que faz, que dados toca, o seu nível de autonomia e o seu responsável. Não consegue governar o que não sabe que existe, e os trabalhadores muitas vezes começam a usar ferramentas por conta própria.",
            "Um pequeno grupo de revisão (numa organização pequena, duas ou três pessoas) que aprova os novos agentes, revê todos os meses o registo de riscos e os relatórios de incidentes, e pode pausar qualquer agente. Escreva como alguém comunica um problema com a IA e com que rapidez responde. Confirme com um consultor qualificado as leis ou regras que se aplicam ao seu setor e ao seu lugar."
          ],
          steps: ["Faça um inventário das ferramentas e agentes de IA.", "Registe para cada um o objetivo, os dados, o nível de autonomia e o responsável.", "Forme um pequeno grupo de revisão.", "Reveja os riscos e os incidentes todos os meses; permita pausar qualquer agente.", "Publique como comunicar um problema com a IA."],
          words: [["Governação", "as regras e os papéis para decidir e verificar como uma coisa é usada."], ["Inventário", "uma lista completa das ferramentas e agentes de IA em uso."], ["Incidente", "um acontecimento em que algo correu mal ou quase correu mal."]],
          slides: [
            { title: "A governação pode ser simples", bullets: ["Quem pode fazer o quê com a IA", "E verificar que funciona"] },
            { title: "Comece com um inventário", bullets: ["Cada ferramenta e agente de IA", "Objetivo, dados, nível de autonomia, responsável"] },
            { title: "Um pequeno grupo de revisão", bullets: ["Aprova os novos agentes", "Revisão mensal de riscos e incidentes", "Pode pausar qualquer agente"] },
            { title: "Facilite a comunicação de problemas", bullets: ["Como comunicar um problema com a IA", "Com que rapidez responde", "Confirme as regras do setor com um consultor"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework (Govern function)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Comece um inventário de IA para a sua equipa com pelo menos três linhas (ferramenta, objetivo, dados, nível de autonomia, responsável). Indique quem estaria no seu grupo de revisão.",
          youCanNow: "criar uma governação de IA simples, com um inventário, responsáveis e um ritmo de revisão.",
          quickCheck: [
            { objective: "O5", q: "O que é um inventário de IA?", options: ["Uma lista de cada ferramenta e agente de IA em uso, com os responsáveis", "Uma loja que vende IA", "Uma contagem de computadores", "Uma lista dos trabalhadores com formação em IA"], answer: 0, why: "Não consegue governar o que não pôs na lista." },
            { objective: "O5", q: "Não tem a certeza de que leis se aplicam ao seu agente no seu setor. O que faz?", options: ["Pergunta ao assistente de IA e segue a resposta", "Confirma com um consultor qualificado", "Assume que nenhuma lei se aplica aos pilotos", "Copia o plano de outra empresa"], answer: 1, why: "As leis mudam conforme o setor e o lugar, por isso um consultor qualificado deve confirmá-las." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever o plano piloto de 90 dias",
          minutes: 6,
          goal: "Montar um plano piloto de 90 dias com uma regra de avançar ou não avançar.",
          text: [
            "Junte o seu trabalho num plano de duas páginas. Dias 1 a 30: ponto de partida, preparação, formação, agente no nível 1 ou 2 numa pequena parte do trabalho. Dias 31 a 60: funcionar, rever o registo de atividade todas as semanas, corrigir problemas, acompanhar as medidas. Dias 61 a 90: comparar com o ponto de partida, entrevistar os trabalhadores e decidir.",
            "Escreva a regra de avançar ou não avançar antes de começar, para que seja o resultado a decidir, e não o entusiasmo: \"Alargar a toda a equipa se o tempo por pedido descer pelo menos 25 por cento, os erros não aumentarem e não houver nenhum incidente grave. Caso contrário, parar ou redesenhar.\" Inclua uma regra de paragem para incidentes graves a qualquer momento.",
            "Use um assistente de IA para transformar as suas notas num rascunho limpo e depois reveja-o você mesmo. Apresente-o em cinco minutos: o problema, o processo, o agente e os seus limites, as medidas, os riscos, o plano para as pessoas e a regra de decisão."
          ],
          steps: ["Dias 1-30: ponto de partida, preparação, formação, começo pequeno.", "Dias 31-60: funcionar, revisão semanal do registo, correções, medidas.", "Dias 61-90: comparar, entrevistar os trabalhadores, decidir.", "Escreva primeiro a regra de avançar ou não avançar e a regra de paragem.", "Faça o rascunho com IA, reveja-o você mesmo, apresente em cinco minutos."],
          words: [["Regra de avançar ou não avançar", "uma regra de decisão, escrita antes, para saber se se continua."], ["Regra de paragem", "uma condição que pausa o piloto de imediato, como um incidente grave."]],
          slides: [
            { title: "Três fases", bullets: ["Dias 1-30: ponto de partida, preparação, começo pequeno", "Dias 31-60: funcionar, rever, corrigir", "Dias 61-90: comparar, entrevistar, decidir"] },
            { title: "Decida a regra primeiro", bullets: ["Avançar se as medidas forem atingidas e sem incidente grave", "Caso contrário, parar ou redesenhar", "Regra de paragem para incidentes graves"] },
            { title: "Apresente em cinco minutos", bullets: ["Problema, processo, agente e limites", "Medidas, riscos, plano para as pessoas", "A regra de decisão"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano piloto de 90 dias, com duas páginas, com o mapa do processo, a autonomia e as aprovações, o responsável, o ponto de partida e as medidas, o registo de riscos, o plano para as pessoas e a regra de avançar ou não avançar. Apresente-o a um colega em cinco minutos e anote as duas perguntas mais difíceis que ele fizer.",
          youCanNow: "liderar um piloto com um agente de IA, da ideia até um plano com medidas claras, proteções e uma regra de decisão.",
          quickCheck: [
            { objective: "O6", q: "O que é uma regra de avançar ou não avançar?", options: ["Uma regra sobre quando os trabalhadores podem usar IA", "A hora a que o agente começa todos os dias", "Uma regra escrita antes que decide se se alarga, muda ou para no dia 90", "Uma lista de ferramentas proibidas"], answer: 2, why: "Escrever a regra primeiro mantém honesta a decisão do dia 90." },
            { objective: "O6", q: "Um colega faz uma pergunta difícil sobre o seu plano e você não sabe responder. O que faz?", options: ["Anota-a e acrescenta ao plano a resposta ou um próximo passo", "Muda de assunto", "Tira essa parte do plano", "Diz que a IA vai resolver isso"], answer: 0, why: "As perguntas difíceis mostram onde o plano precisa de trabalho antes de o piloto começar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Liderar as pessoas e o plano",
        questions: [
          { objective: "O4", q: "Quem deve ajudar a mapear o processo e a testar o agente?", options: ["Só o fornecedor", "Só os líderes de topo", "As pessoas que fazem o trabalho hoje", "Ninguém"], answer: 2, why: "Elas conhecem as exceções e os riscos reais." },
          { objective: "O4", q: "Ainda não sabe como o piloto vai afetar os empregos. O que deve dizer?", options: ["Que ainda não sabe e quando vai saber", "Que nada vai mudar nunca", "Nada até ao fim", "Que todos vão perder o emprego"], answer: 0, why: "A honestidade sobre o que não se sabe evita os boatos." },
          { objective: "O5", q: "O que é um inventário de IA?", options: ["Uma lista de compras", "Uma lista de cada ferramenta e agente de IA em uso, com os responsáveis", "Uma lista dos trabalhadores", "Um orçamento"], answer: 1, why: "Não consegue governar o que não sabe que existe." },
          { objective: "O6", q: "Quando deve ser escrita a regra de avançar ou não avançar?", options: ["Antes de o piloto começar", "Depois de saírem os resultados", "Nunca", "Só se o piloto falhar"], answer: 0, why: "Escrevê-la primeiro deixa os resultados decidir, e não o entusiasmo." },
          { objective: "O6", q: "Acontece um incidente grave de privacidade no dia 40. O que deve dizer o plano?", options: ["Continuar até ao dia 90", "Subir o nível de autonomia", "Escondê-lo", "Pausar de imediato pela regra de paragem"], answer: 3, why: "Uma regra de paragem aplica-se a qualquer momento." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Liderança na Era da IA Agêntica 3: IA Agêntica, Automação e Liderar a Transformação",
    questions: [
      { objective: "O1", q: "Um bom primeiro candidato para automatizar é:", options: ["Raro e complexo", "Frequente, com passos claros, pouco dano se correr mal", "Sobre despedir pessoas", "Sobre pagamentos grandes"], answer: 1, why: "Trabalho simples, frequente e de pouco dano é um começo seguro." },
      { objective: "O1", q: "Um mapa do processo mostra:", options: ["Só o organigrama", "A planta do escritório", "Cada passo, quem o faz, a ferramenta e o tempo", "Os salários"], answer: 2, why: "Os mapas mostram como o trabalho é feito hoje." },
      { objective: "O1", q: "Automatizar um processo avariado:", options: ["Torna-o gratuito", "Corrige-o automaticamente", "Fá-lo avariar mais depressa", "Tira todos os riscos"], answer: 2, why: "Corrija primeiro o processo." },
      { objective: "O1", q: "Os cinco fatores de pontuação incluem:", options: ["Volume, passos claros, dados digitais, incómodo, pouco dano", "Cor, tamanho, marca", "Só o custo", "A popularidade"], answer: 0, why: "Eles indicam um bom primeiro piloto." },
      { objective: "O2", q: "O nível de autonomia 1 (sugerir) quer dizer:", options: ["Não se usa IA", "O agente age sozinho", "O agente aprova as pessoas", "O agente escreve rascunhos; as pessoas fazem tudo"], answer: 3, why: "Ele só sugere." },
      { objective: "O2", q: "O nível 3 (agir com verificações) envia o quê às pessoas?", options: ["Nada", "As exceções, mais uma amostra para revisão", "Só faturas", "Só elogios"], answer: 1, why: "Os casos de rotina seguem; as exceções vão para as pessoas." },
      { objective: "O2", q: "Os pilotos devem normalmente começar:", options: ["No nível mais alto disponível", "No nível 4", "Sem nível", "No nível 1 ou 2"], answer: 3, why: "Comece baixo e ganhe confiança." },
      { objective: "O2", q: "A aprovação deve vir sempre antes de um agente:", options: ["Contar palavras", "Ler uma página pública", "Gastar dinheiro ou falar com clientes", "Formatar uma tabela"], answer: 2, why: "Estas ações têm consequências reais." },
      { objective: "O2", q: "O responsável pelo agente:", options: ["Responde pelos seus resultados, revê os registos e pode desligá-lo", "É o fornecedor de IA", "É opcional", "É o próprio agente"], answer: 0, why: "Cada agente precisa de uma pessoa que responda por ele." },
      { objective: "O3", q: "As medidas de sucesso devem incluir:", options: ["Só a rapidez", "A qualidade, não só a rapidez", "Só o custo", "Só a opinião dos trabalhadores"], answer: 1, why: "Mais rápido mas pior não é sucesso." },
      { objective: "O3", q: "Qual é um custo escondido de um agente?", options: ["O tempo gasto a rever e a corrigir o seu trabalho", "A renda do escritório", "O café", "O estacionamento"], answer: 0, why: "O tempo de revisão e de correção conta contra a poupança." },
      { objective: "O3", q: "Um registo de riscos lista cada risco com:", options: ["Mais nada", "Uma piada", "Só o custo", "Probabilidade, impacto, proteção e responsável"], answer: 3, why: "Isso torna os riscos geríveis." },
      { objective: "O3", q: "Dependência de um fornecedor quer dizer:", options: ["Um escritório fechado à chave", "Ficar preso a um só fornecedor porque mudar é difícil", "Uma palavra-passe", "Um desconto"], answer: 1, why: "É um risco estratégico que vale a pena pôr na lista." },
      { objective: "O5", q: "As quatro funções do AI RMF do NIST são:", options: ["Buy, Build, Run, Sell (comprar, construir, operar, vender)", "Plan, Do, Check, Act (planear, fazer, verificar, agir)", "Govern, Map, Measure, Manage (governar, mapear, medir, gerir)", "Hire, Train, Promote, Retire (contratar, formar, promover, reformar)"], answer: 2, why: "O NIST dá esses quatro nomes." },
      { objective: "O4", q: "A gestão da mudança trata de:", options: ["Mudar palavras-passe", "Contar moedas", "Fazer as pessoas passar da forma antiga de trabalhar para a nova", "Comprar programas"], answer: 2, why: "É o lado humano da mudança." },
      { objective: "O4", q: "Um trabalhador encontra um erro do agente. Os líderes devem:", options: ["Reconhecê-lo como uma contribuição", "Tratá-lo como uma deslealdade", "Ignorá-lo", "Escondê-lo"], answer: 0, why: "Encontrar problemas mantém o piloto seguro." },
      { objective: "O5", q: "A governação de IA pode começar com:", options: ["Nada", "Um manual de 200 páginas", "Proibir todas as ferramentas", "Um inventário, responsáveis e um pequeno grupo de revisão"], answer: 3, why: "Uma governação simples chega para começar." },
      { objective: "O5", q: "Numa boa governação, quem pode pausar um agente?", options: ["Ninguém", "O grupo de revisão ou o responsável", "Só o fornecedor", "Só o agente"], answer: 1, why: "Alguém tem de poder sempre pará-lo." },
      { objective: "O5", q: "Para as leis que se aplicam ao seu setor e ao seu lugar, deve:", options: ["Copiar as regras de outro país", "Pedir à IA para decidir", "Assumir que nenhuma se aplica", "Confirmar com um consultor qualificado"], answer: 3, why: "As questões legais precisam de um conselho qualificado." },
      { objective: "O6", q: "Os dias 61 a 90 do piloto servem para:", options: ["Comprar mais ferramentas", "Começar a preparação", "Comparar com o ponto de partida, entrevistar os trabalhadores e decidir", "Saltar a revisão"], answer: 2, why: "A última fase produz a decisão." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 4, 7, 9, 11, 14, 16, 17, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Mapa do processo",
        objective: "O1",
        notYet: "Faltam os passos ou os tempos atuais.",
        meets: "Mostra os passos atuais, quem os faz e o tempo.",
        exceeds: "Anota o desperdício encontrado ao mapear e porque este processo teve boa pontuação."
      },
      {
        name: "Autonomia e aprovações",
        objective: "O2",
        notYet: "Sem nível de autonomia, pontos de aprovação ou pessoa responsável.",
        meets: "Diz a tarefa do agente, o seu nível de autonomia, cada ponto de aprovação humana e a pessoa responsável.",
        exceeds: "Explica porque esse nível serve para um primeiro piloto."
      },
      {
        name: "Medidas e riscos",
        objective: "O3",
        notYet: "Sem ponto de partida, ou com menos de cinco riscos.",
        meets: "Ponto de partida e medidas de sucesso, e um registo de riscos com pelo menos cinco riscos.",
        exceeds: "Cada risco tem uma proteção e um responsável, e as medidas incluem a qualidade."
      },
      {
        name: "Plano para as pessoas",
        objective: "O4",
        notYet: "Não diz quem é afetado nem como vai ser informado e receber formação.",
        meets: "Indica quem é afetado e como vai comunicar e dar formação.",
        exceeds: "Envolve os trabalhadores no mapa e nos testes e diz como levantar preocupações."
      },
      {
        name: "Regra de avançar ou não avançar",
        objective: "O6",
        notYet: "Sem regra, ou com uma regra que não se pode medir.",
        meets: "Uma regra clara de avançar ou não avançar para o dia 90, escrita antes do início.",
        exceeds: "Inclui uma regra de paragem para incidentes graves durante o piloto."
      },
      {
        name: "Apresentado e testado",
        objective: "O6",
        notYet: "Não foi apresentado, ou as perguntas não foram anotadas.",
        meets: "Apresentado em cinco minutos, com as duas perguntas mais difíceis do colega anotadas.",
        exceeds: "O plano foi atualizado para responder a essas perguntas."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Planos piloto apresentados a uma direção, a um proprietário ou a uma equipa de liderança em 60 dias (inquérito de seguimento)",
      "Pilotos começados com uma regra escrita de avançar ou não avançar e um responsável pelo agente com nome (inquérito de seguimento)",
      "Organizações com um inventário de IA e um grupo de revisão em funcionamento em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com um assistente de IA gratuito para escrever rascunhos",
      "Uma lista de processos da sua área e acesso às pessoas que os fazem",
      "Um modelo de plano de duas páginas ou um documento em branco",
      "Cerca de 60 minutos para as lições e as verificações, mais o tempo para escrever e apresentar o plano"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois peça aos líderes que deem pontuação aos processos candidatos em pequenos grupos.",
      "Incentive os líderes a convidar os trabalhadores que fazem o trabalho para ajudar a mapear o processo.",
      "Lembre aos líderes que não ponham dados pessoais ou confidenciais nas ferramentas de IA enquanto escrevem o rascunho, e que confirmem as leis com um consultor qualificado.",
      "Faça uma sessão de apresentações em que os colegas fazem as duas perguntas mais difíceis.",
      "Avalie o plano final com a grelha de avaliação e confirme que a regra de avançar ou não avançar foi escrita antes da data de início."
    ]
  }
};
