"use strict";

// Koach Learn course (Portuguese translation of workforce/workforce-ai-problem-solving.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "workforce-ai-problem-solving-pt",
  lang: "pt",
  translationOf: "workforce-ai-problem-solving",
  category: "Workforce Development",
  name: "IA para Resolver Problemas e Tomar Decisões",
  skills: "Definir um problema com clareza, Encontrar a causa raiz com os 5 Porquês, Criar opções com IA, Comparar opções com uma matriz de decisão, Verificar o raciocínio da IA, Apresentar uma recomendação",
  outcome: "resolver um problema real do trabalho passo a passo com a IA como parceira de pensamento: escrever uma descrição clara do problema, encontrar a causa raiz com os 5 Porquês, fazer uma lista de opções, compará-las numa matriz de decisão, verificar o raciocínio da IA e apresentar uma recomendação de uma página ao seu chefe.",
  about: [
    "Este curso é para trabalhadores e pessoas à procura de emprego que querem ser quem resolve os problemas, e não só quem os comunica: chefes de equipa em armazéns e lojas, pessoal de apoio na saúde, trabalhadores de escritório, atendimento ao cliente e ofícios. Resolver problemas é uma das capacidades que os empregadores mais pedem.",
    "Você vai aprender um método simples que funciona com qualquer problema, desde filas longas na caixa até entregas falhadas ou um processo confuso. Um assistente de IA ajuda-o a fazer perguntas melhores, a pensar em opções e a organizar as suas ideias. Você traz os factos e toma a decisão.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Não coloque informações confidenciais da empresa ou dos clientes em ferramentas de IA e siga as regras do seu local de trabalho."
  ],
  finalTask: "Escolha um problema real do trabalho (ou um exemplo realista) e faça uma recomendação de uma página: uma descrição do problema com factos, uma causa raiz encontrada com os 5 Porquês, pelo menos quatro opções (algumas vindas da IA), uma matriz de decisão com critérios com peso, notas sobre o que verificou no raciocínio da IA, e a sua recomendação com os primeiros passos e a forma de medir o sucesso.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Trabalhadores e pessoas à procura de emprego que querem ser quem resolve os problemas, e não só quem os comunica: chefes de equipa em armazéns e lojas, pessoal de apoio na saúde, trabalhadores de escritório, atendimento ao cliente e ofícios.",
    startingPoint: "Reparam nos problemas no trabalho e muitas vezes têm ideias, e sabem usar um smartphone ou um computador. A maioria nunca usou um método organizado como os 5 Porquês ou uma matriz de decisão, e poucos usaram a IA como parceira de pensamento ou verificaram o seu raciocínio.",
    gap: "Resolver problemas é uma das capacidades que os empregadores mais pedem, mas queixas sem factos e soluções sem causas raramente são aprovadas. Os alunos precisam de um método passo a passo, da descrição do problema até à recomendação, que use a IA para alargar o seu pensamento enquanto verificam o raciocínio dela e ficam responsáveis pela decisão.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; os métodos são mostrados passo a passo",
      "Aparelhos: um computador ou smartphone; uma folha de cálculo gratuita ajuda na matriz de decisão",
      "Privacidade e regras: nenhum dado confidencial de clientes em ferramentas de IA; as regras de IA do local de trabalho vêm primeiro",
      "Factos: números, regras e políticas dados pela IA são verificados com dados reais, a fonte oficial ou um chefe",
      "Tempo: lições de cerca de 5 minutos; recolher factos sobre um problema real pode levar uma semana"
    ],
    prerequisites: "Nenhum. O curso \"Ferramentas de IA Essenciais para o Trabalho\" ajuda quem é novo nos assistentes de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma queixa vaga no trabalho", action: "escrever uma descrição clara e com factos do problema, com a IA a fazer-lhe perguntas para a tornar mais precisa", standard: "dizendo o quê, onde, quando, que tamanho tem e porque é importante" },
    { id: "O2", condition: "Com uma descrição do problema", action: "usar os 5 Porquês para encontrar a causa raiz", standard: "verificando com factos ou com colegas qualquer causa que a IA sugira" },
    { id: "O3", condition: "Com uma causa raiz", action: "criar uma lista de soluções possíveis usando a IA, os colegas e a sua própria experiência", standard: "ficando com pelo menos quatro que sirvam, incluindo \"não mudar nada\"" },
    { id: "O4", condition: "Com pelo menos quatro opções", action: "comparar as opções numa matriz de decisão com critérios com peso", standard: "com os pesos e as pontuações escolhidos por você e os totais certos" },
    { id: "O5", condition: "Com o raciocínio da IA sobre as suas opções", action: "verificar o raciocínio à procura de números inventados e regras não confirmadas, e pedir os argumentos contra", standard: "anotando pelo menos duas coisas que verificou" },
    { id: "O6", condition: "Usando a sua análise", action: "escrever uma recomendação de uma página com os primeiros passos, um pequeno teste e uma medida de sucesso", standard: "com a ideia principal nas primeiras linhas e as sete secções" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Compreender o problema",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever uma descrição clara do problema",
          minutes: 5,
          goal: "Transformar uma queixa vaga numa descrição clara e com factos do problema.",
          text: [
            "\"Está tudo uma confusão\" não é um problema que se possa resolver. Uma descrição clara do problema diz o que está a acontecer, onde, quando, que tamanho tem e porque é importante. Exemplo: \"Nos dias de semana, das 5 às 7 da tarde, os clientes esperam em média 12 minutos na caixa, e recebemos cerca de 5 queixas por semana.\"",
            "Use factos que pode ver ou contar: horas, números, quantas vezes acontece. Se não tem números, recolha alguns durante uma semana.",
            "A IA pode ajudar: \"Aqui está a minha descrição rápida. Faça-me cinco perguntas que a tornem uma descrição mais clara do problema.\" Responder a essas perguntas muitas vezes mostra o que você precisa mesmo de saber."
          ],
          steps: ["Escreva o problema com as suas palavras.", "Acrescente o quê, onde, quando, que tamanho tem e porque é importante.", "Troque os palpites por contagens ou medições.", "Peça à IA perguntas que a tornem mais precisa e depois reescreva-a."],
          words: [["Descrição do problema", "uma descrição curta e com factos de um problema."], ["Dados", "factos e números que pode contar ou medir."]],
          slides: [
            { title: "Vago e claro", bullets: ["Vago: \"Está tudo uma confusão\"", "Claro: o quê, onde, quando, que tamanho, porque é importante"] },
            { title: "Exemplo", bullets: ["Dias de semana, das 5 às 7 da tarde", "Espera média de 12 minutos na caixa", "Cerca de 5 queixas por semana"] },
            { title: "Torne-a mais precisa com a IA", bullets: ["\"Faça-me cinco perguntas para tornar isto mais claro\"", "Responda com factos e depois reescreva"] }
          ],
          tryIt: "Escolha um problema real ou de exemplo no trabalho. Escreva uma descrição rápida, peça à IA cinco perguntas para a tornar mais precisa, responda-lhes e reescreva-a como uma descrição clara do problema.",
          youCanNow: "escrever uma descrição clara e com factos de um problema.",
          quickCheck: [
            { objective: "O1", q: "O que tem uma descrição clara do problema?", options: ["Quem tem a culpa", "O quê, onde, quando, que tamanho tem e porque é importante", "Só o que você sente sobre ele", "A solução que já quer"], answer: 1, why: "Uma descrição clara apresenta os factos do problema, não culpas nem uma solução." },
            { objective: "O1", q: "A sua nota diz \"As entregas estão sempre atrasadas.\" O que faz a seguir?", options: ["Envia-a ao seu chefe como está", "Acrescenta \"muito\" para dar mais força", "Culpa os motoristas", "Responde às perguntas da IA e acrescenta factos, como em que dias e quanto atraso"], answer: 3, why: "As perguntas para tornar a descrição mais precisa transformam uma queixa vaga em factos com que se pode agir." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar a causa raiz com os 5 Porquês",
          minutes: 5,
          goal: "Usar os 5 Porquês para encontrar a causa por trás de um problema.",
          text: [
            "Corrigir um sintoma faz o problema voltar. Os 5 Porquês ajudam a cavar até à causa raiz: pergunte \"Porquê?\" sobre o problema, depois pergunte \"Porquê?\" sobre essa resposta, cerca de cinco vezes.",
            "Exemplo: filas longas na caixa. Porquê? Só uma caixa está aberta às 5 da tarde. Porquê? O turno de uma operadora de caixa acaba às 5. Porquê? O horário foi feito para as horas de mais movimento da manhã. Porquê? Ninguém olhou para as vendas da noite quando o fizeram. Causa raiz: o horário não corresponde à procura da noite.",
            "A IA pode sugerir \"porquês\" possíveis em que não tinha pensado, mas só você e os seus colegas sabem quais são verdade. Verifique cada resposta com factos ou perguntando às pessoas que fazem o trabalho."
          ],
          steps: ["Escreva a descrição do problema no topo.", "Pergunte \"Porquê?\" e escreva a resposta.", "Pergunte \"Porquê?\" sobre essa resposta; repita cerca de cinco vezes.", "Verifique cada resposta com factos ou com colegas.", "Faça um círculo à volta da causa raiz."],
          words: [["Causa raiz", "a razão mais profunda por que um problema acontece."], ["Sintoma", "um sinal de um problema, não a sua causa."], ["5 Porquês", "um método de perguntar \"porquê?\" várias vezes para encontrar uma causa raiz."]],
          slides: [
            { title: "Sintoma e causa raiz", bullets: ["Corrigir um sintoma: o problema volta", "Corrigir a causa raiz: o problema desaparece"] },
            { title: "Pergunte \"Porquê?\" cerca de cinco vezes", bullets: ["Filas longas -> só uma caixa aberta", "-> o turno acaba às 5 -> horário feito para as manhãs", "Raiz: o horário não corresponde à procura da noite"] },
            { title: "A IA sugere, você confirma", bullets: ["A IA pode dar porquês possíveis", "Verifique cada um com factos ou com colegas"] }
          ],
          tryIt: "Faça os 5 Porquês sobre o seu problema. Peça à IA outras causas possíveis e depois verifique quais são verdade com factos ou com um colega. Faça um círculo à volta da causa raiz.",
          youCanNow: "encontrar a causa raiz de um problema usando os 5 Porquês.",
          quickCheck: [
            { objective: "O2", q: "Qual é a diferença entre um sintoma e uma causa raiz?", options: ["Um sintoma é um sinal de um problema; a causa raiz é a razão mais profunda por que acontece", "Querem dizer a mesma coisa", "Um sintoma é sempre maior", "Uma causa raiz é aquilo de que os clientes se queixam"], answer: 0, why: "Corrigir só os sintomas deixa o problema voltar; a causa raiz é a razão por que ele acontece." },
            { objective: "O2", q: "A IA sugere que a causa raiz é \"o pessoal não se importa\". Você não tem a certeza. O que faz?", options: ["Anota isso como a causa", "Diz ao seu chefe que o pessoal não se importa", "Verifica com factos ou com colegas antes de aceitar", "Para os 5 Porquês"], answer: 2, why: "As sugestões da IA são ideias para verificar, não causas provadas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Criar opções com a IA",
          minutes: 5,
          goal: "Criar uma lista de pelo menos quatro soluções possíveis, usando a IA para alargar o seu pensamento.",
          text: [
            "A maioria das pessoas salta logo para a primeira solução. As melhores decisões vêm de comparar várias. Procure ter pelo menos quatro opções, incluindo \"não mudar nada\" como ponto de partida.",
            "Peça à IA uma chuva de ideias: \"A causa raiz é que o nosso horário não corresponde à procura da noite numa pequena mercearia. Dê-me oito soluções possíveis, das baratas e rápidas às mudanças maiores.\" Ela pode sugerir ideias como mudar uma pausa de hora, uma caixa de pagamento automático ou formar os repositores para também trabalharem na caixa.",
            "Risque as ideias que não servem para o seu local de trabalho ou que nunca seriam aprovadas, e acrescente ideias dos colegas. As pessoas que fazem o trabalho muitas vezes têm as melhores ideias."
          ],
          steps: ["Escreva a causa raiz.", "Peça à IA seis a oito opções, das pequenas às grandes.", "Risque as que não servem.", "Acrescente as ideias dos colegas.", "Fique com pelo menos quatro, incluindo \"não mudar nada\"."],
          words: [["Opção", "uma solução possível."], ["Chuva de ideias", "fazer depressa uma lista de muitas ideias sem as julgar ainda."], ["Ponto de partida", "o que acontece se não mudar nada."]],
          slides: [
            { title: "Não pare na primeira ideia", bullets: ["Compare pelo menos quatro opções", "Inclua \"não mudar nada\""] },
            { title: "A IA alarga o seu pensamento", bullets: ["Dê-lhe a causa raiz", "Peça opções das pequenas às grandes"] },
            { title: "Torne-as reais", bullets: ["Risque as ideias que não servem", "Acrescente as ideias dos colegas", "Quem faz o trabalho muitas vezes sabe mais"] }
          ],
          tryIt: "Peça à IA oito opções para corrigir a sua causa raiz. Risque as que não servem, acrescente uma de um colega ou da sua própria experiência e fique com pelo menos quatro.",
          youCanNow: "criar e reduzir uma lista de opções realistas com a ajuda da IA.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer fazer uma chuva de ideias?", options: ["Escolher a primeira ideia", "Julgar cada ideia logo que a ouve", "Perguntar só ao seu chefe", "Fazer depressa uma lista de muitas ideias sem as julgar ainda"], answer: 3, why: "A chuva de ideias junta primeiro muitas ideias; só depois as julga." },
            { objective: "O3", q: "A IA dá-lhe oito opções, e duas precisam de um orçamento que a sua loja não tem. O que faz?", options: ["Fica com todas", "Risca as que não servem e acrescenta uma de um colega", "Escolhe a mais cara", "Pede à IA mais 50"], answer: 1, why: "Fica com as opções que servem para o seu local de trabalho e acrescenta ideias das pessoas que fazem o trabalho." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Compreender o problema",
        questions: [
          { objective: "O1", q: "Qual é a descrição do problema mais clara?", options: ["\"Está tudo uma confusão.\"", "\"Dias de semana, das 5 às 7 da tarde, a espera na caixa é em média de 12 minutos e recebemos cerca de 5 queixas por semana.\"", "\"Os clientes são irritantes.\"", "\"Resolvam isto.\""], answer: 1, why: "Diz o quê, quando, que tamanho tem e porque é importante." },
          { objective: "O2", q: "O que é uma causa raiz?", options: ["Uma queixa", "A primeira coisa em que repara", "Uma planta", "A razão mais profunda por que um problema acontece"], answer: 3, why: "Corrigir a causa raiz impede que o problema volte." },
          { objective: "O2", q: "Nos 5 Porquês, a IA sugere uma causa. O que faz?", options: ["Verifica com factos ou com colegas", "Aceita-a", "Ignora todas as ideias da IA", "Culpa alguém"], answer: 0, why: "Só os factos confirmam uma causa." },
          { objective: "O3", q: "Porque incluir \"não mudar nada\" como opção?", options: ["É obrigatório por lei", "É sempre a melhor", "Dá um ponto de partida para comparar", "Nunca é útil"], answer: 2, why: "Um ponto de partida mostra o que cada mudança traz de ganho." },
          { objective: "O3", q: "Quem tem muitas vezes as melhores ideias para resolver um problema no trabalho?", options: ["Os amigos dos clientes", "Só a IA", "As pessoas que fazem o trabalho", "Ninguém"], answer: 2, why: "Quem faz o trabalho conhece os detalhes." }
        ]
      }
    },
    {
      name: "Capítulo 2: Decidir e recomendar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Comparar opções com uma matriz de decisão",
          minutes: 6,
          goal: "Pontuar opções com critérios com peso numa matriz de decisão.",
          text: [
            "Uma matriz de decisão é uma tabela que compara opções de forma justa. As opções ficam de lado, em linhas; os critérios ficam em cima, em colunas. Critérios comuns: custo, tempo para pôr a funcionar, quão bem corrige a causa raiz, efeito nos clientes, efeito nos colegas e risco.",
            "Dê a cada critério um peso (de 1 a 3) conforme a importância, dê a cada opção uma pontuação de 1 a 5 em cada critério, multiplique a pontuação pelo peso e some tudo. O total mais alto é uma candidata forte, não uma vencedora automática.",
            "Pode pedir à IA para fazer a tabela vazia ou uma folha de cálculo com fórmulas. Você escolhe os pesos e as pontuações com base em factos e no que o seu local de trabalho valoriza. Depois pergunte: a vencedora faz sentido? Se não fizer, reveja as suas pontuações."
          ],
          steps: ["Escreva as suas opções de lado, em linhas.", "Escolha quatro a seis critérios e dê a cada um um peso de 1 a 3.", "Dê a cada opção uma pontuação de 1 a 5 em cada critério.", "Multiplique pontuação x peso e some.", "Confirme se o resultado faz sentido."],
          words: [["Matriz de decisão", "uma tabela que pontua opções segundo critérios."], ["Critérios", "as coisas pelas quais julga as opções, como o custo ou o risco."], ["Peso", "quanto um critério importa em comparação com os outros."]],
          slides: [
            { title: "Monte a tabela", bullets: ["Opções de lado, em linhas", "Critérios em cima, em colunas", "Custo, tempo, corrige a causa raiz, pessoas, risco"] },
            { title: "Dê as pontuações", bullets: ["Peso de cada critério de 1 a 3", "Pontuação de cada opção de 1 a 5", "Pontuação x peso, depois some"] },
            { title: "Quem decide é você", bullets: ["A IA pode fazer a tabela", "Você escolhe os pesos e as pontuações", "A vencedora faz sentido?"] }
          ],
          tryIt: "Faça uma matriz de decisão para as suas quatro opções com pelo menos quatro critérios com peso. Use a IA para montar a tabela ou a folha de cálculo, depois preencha você as pontuações e calcule os totais.",
          youCanNow: "comparar opções de forma justa com uma matriz de decisão com pesos.",
          quickCheck: [
            { objective: "O4", q: "Numa matriz de decisão, o que é um critério?", options: ["A resposta final", "Uma das opções", "Algo pelo qual julga as opções, como o custo ou a segurança", "A pessoa que decide"], answer: 2, why: "Os critérios são as coisas em que pontua cada opção." },
            { objective: "O4", q: "A opção B tem 3 em rapidez (peso 2) e 5 em custo (peso 1). Qual é o total nestes dois?", options: ["11", "8", "15", "10"], answer: 0, why: "Multiplique cada pontuação pelo seu peso e some: 3 x 2 + 5 x 1 = 11." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar o raciocínio da IA",
          minutes: 5,
          goal: "Encontrar erros comuns no raciocínio da IA antes de confiar nele.",
          text: [
            "A IA pode parecer segura e mesmo assim estar errada. Problemas comuns: factos ou números inventados, erros de contas, ideias que ignoram as regras ou o orçamento do seu local de trabalho, e esquecer o lado humano (moral da equipa, segurança, justiça).",
            "Peça à IA para mostrar o raciocínio: \"Explique passo a passo porque pôs a opção B em primeiro lugar.\" Depois peça-lhe para defender o outro lado: \"Quais são as razões mais fortes para NÃO escolher a opção B?\" Isto muitas vezes mostra os pontos fracos.",
            "Verifique você mesmo os números, verifique qualquer regra ou política com a fonte oficial ou com o seu chefe, e peça a um colega a opinião sincera dele. Anote o que verificou; isso torna a sua recomendação mais forte."
          ],
          steps: ["Peça à IA para explicar o raciocínio passo a passo.", "Peça os argumentos mais fortes contra a escolha dela.", "Volte a verificar você mesmo os números e as contas.", "Verifique as regras com a fonte oficial ou com o seu chefe.", "Peça a opinião sincera de um colega e anote o que verificou."],
          words: [["Raciocínio", "os passos de pensamento que levam a uma conclusão."], ["Advogado do diabo", "defender o outro lado de propósito para pôr uma ideia à prova."]],
          slides: [
            { title: "Parecer seguro não é estar certo", bullets: ["Factos ou números inventados", "Erros de contas", "Esquecer regras, orçamento ou o lado humano"] },
            { title: "Ponha o raciocínio à prova", bullets: ["\"Explique passo a passo\"", "\"Quais são as razões para NÃO escolher isto?\""] },
            { title: "Verifique e anote", bullets: ["Volte a verificar os números você mesmo", "Regras: fonte oficial ou chefe", "Opinião sincera de um colega; anote o que verificou"] }
          ],
          tryIt: "Pergunte à IA qual das suas opções ela escolheria e porquê. Depois peça os argumentos mais fortes contra. Volte a verificar um número e anote duas coisas que confirmou.",
          youCanNow: "pôr à prova o raciocínio da IA e apanhar erros antes de confiar nele.",
          quickCheck: [
            { objective: "O5", q: "Qual é um problema comum no raciocínio da IA?", options: ["Recusa-se sempre a responder", "Números inventados que parecem verdadeiros", "Só usa fontes oficiais", "Não consegue fazer tabelas"], answer: 1, why: "A IA pode inventar números que parecem certos, por isso você volta a verificá-los." },
            { objective: "O5", q: "A IA diz que a política da empresa permite horas extra para a sua solução. O que faz?", options: ["Põe isso na sua recomendação", "Assume que é verdade", "Pergunta à IA se tem a certeza", "Verifica a política com a fonte oficial ou com o seu chefe"], answer: 3, why: "As regras e as políticas vêm da fonte oficial ou do seu chefe, não da IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Apresentar a sua recomendação",
          minutes: 5,
          goal: "Escrever uma recomendação de uma página com que o seu chefe possa agir.",
          text: [
            "Os chefes dizem sim a propostas claras e curtas. Use esta ordem: Problema (uma ou duas frases com factos), Causa raiz, Opções consideradas, Recomendação e porquê, Primeiros passos, Como vamos medir o sucesso, Riscos e como lidar com eles.",
            "Mantenha numa página. Peça à IA para tornar o seu rascunho mais curto e direto: \"Transforme isto numa recomendação de uma página para o meu chefe, com a ideia principal primeiro e palavras simples.\" Depois verifique que todos os factos e números correspondem ao seu trabalho.",
            "Proponha primeiro um pequeno teste: \"Vamos experimentar durante duas semanas, às terças e quintas à noite, e medir os tempos de espera.\" Um teste pequeno e que se pode medir é mais fácil de aprovar e prova a sua ideia."
          ],
          steps: ["Escreva as sete secções.", "Comece com a sua recomendação nas primeiras linhas.", "Peça à IA para a reduzir a uma página.", "Verifique todos os factos e números.", "Proponha um teste pequeno e que se possa medir."],
          words: [["Recomendação", "a opção que sugere e porquê."], ["Teste", "uma experiência curta e pequena de uma mudança."], ["Medida de sucesso", "o número que mostra se a mudança funcionou."]],
          slides: [
            { title: "Ordem da página única", bullets: ["Problema e causa raiz", "Opções e recomendação", "Primeiros passos, medida de sucesso, riscos"] },
            { title: "Torne fácil dizer sim", bullets: ["Ideia principal primeiro, uma página", "A IA encurta; você verifica os factos"] },
            { title: "Proponha um pequeno teste", bullets: ["\"Duas semanas, duas noites por semana\"", "Meça o resultado", "Mais fácil de aprovar; prova a ideia"] }
          ],
          tryIt: "Tarefa final: escreva a sua recomendação de uma página com as sete secções, junte os seus 5 Porquês e a matriz de decisão, notas sobre o que verificou no raciocínio da IA, e um pequeno teste com uma medida de sucesso.",
          youCanNow: "resolver um problema do trabalho passo a passo e apresentar uma recomendação com que o seu chefe possa agir.",
          quickCheck: [
            { objective: "O6", q: "O que é uma medida de sucesso?", options: ["O número que mostra se a mudança funcionou", "O tamanho do seu relatório", "Quantas pessoas gostaram da ideia", "A aprovação do seu chefe"], answer: 0, why: "Uma medida de sucesso é um número que acompanha para provar que a mudança funcionou." },
            { objective: "O6", q: "O seu chefe tem dois minutos. Como começa a sua recomendação de uma página?", options: ["Com a história do problema", "Com uma lista de todas as pessoas com quem falou", "Com a sua recomendação e o primeiro passo, nas primeiras linhas", "Com a matriz de decisão"], answer: 2, why: "Pôr a ideia principal primeiro permite a um chefe ocupado agir logo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Decidir e recomendar",
        questions: [
          { objective: "O4", q: "Numa matriz de decisão, o que é um peso?", options: ["Quanto um critério importa", "Quanto pesa uma caixa", "Uma pontuação de uma opção", "Uma palavra-passe"], answer: 0, why: "Os pesos mostram a importância." },
          { objective: "O4", q: "A opção A tem 4 em custo (peso 3) e 2 em risco (peso 2). O total nestes dois é:", options: ["6", "8", "12", "16"], answer: 3, why: "4 x 3 + 2 x 2 = 12 + 4 = 16." },
          { objective: "O5", q: "Uma boa forma de pôr à prova a escolha da IA é perguntar:", options: ["Só \"Tem a certeza?\"", "\"Quais são as razões mais fortes para NÃO escolher isto?\"", "Nada", "\"Escolha por mim\""], answer: 1, why: "Defender o outro lado mostra os pontos fracos." },
          { objective: "O6", q: "Onde deve ficar a ideia principal de uma recomendação?", options: ["Nas primeiras linhas", "Mesmo no fim", "Numa nota de rodapé", "Em lado nenhum"], answer: 0, why: "Os chefes leem primeiro o início." },
          { objective: "O6", q: "Porque propor um pequeno teste?", options: ["Porque custa mais", "Para adiar a decisão para sempre", "É mais fácil de aprovar e prova a ideia", "Não é útil"], answer: 2, why: "Testes pequenos e que se podem medir reduzem o risco." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Resolver Problemas e Tomar Decisões",
    questions: [
      { objective: "O1", q: "Uma descrição clara do problema inclui:", options: ["Só uma queixa", "O quê, onde, quando, que tamanho tem e porque é importante", "Uma pessoa para culpar", "Uma solução"], answer: 1, why: "Essas partes tornam o problema possível de resolver." },
      { objective: "O1", q: "Se não tem números sobre um problema, deve:", options: ["Pedir à IA para os inventar", "Adivinhar", "Desistir", "Recolher alguns durante uma semana"], answer: 3, why: "Os factos valem mais do que os palpites." },
      { objective: "O1", q: "Como pode a IA ajudar com uma descrição do problema?", options: ["Não pode ajudar", "Inventando os factos", "Decidindo por você", "Fazendo-lhe perguntas que a tornam mais precisa"], answer: 3, why: "Boas perguntas mostram o que precisa de saber." },
      { objective: "O2", q: "Um sintoma é:", options: ["A causa raiz", "Um sinal de um problema, não a sua causa", "Uma solução", "Uma ferramenta"], answer: 1, why: "Os sintomas apontam para causas mais profundas." },
      { objective: "O2", q: "Nos 5 Porquês, você pergunta \"Porquê?\" sobre:", options: ["Cinquenta vezes", "Só uma vez", "Cada resposta, cerca de cinco vezes", "Nada"], answer: 2, why: "Cada porquê cava mais fundo." },
      { objective: "O2", q: "No exemplo da caixa, a causa raiz era:", options: ["O horário não correspondia à procura da noite", "Os clientes eram lentos", "As caixas eram velhas", "Estava a chover"], answer: 0, why: "O horário foi feito para as manhãs." },
      { objective: "O3", q: "Quantas opções deve comparar, no mínimo?", options: ["Nenhuma", "Uma", "Quatro, incluindo não mudar nada", "Só a primeira ideia da IA"], answer: 2, why: "Comparar várias leva a melhores decisões." },
      { objective: "O3", q: "Fazer uma chuva de ideias quer dizer:", options: ["Fazer depressa uma lista de muitas ideias sem as julgar ainda", "Decidir depressa", "Discutir", "Escrever um relatório"], answer: 0, why: "Julgar vem depois." },
      { objective: "O3", q: "A IA sugere uma ideia que o seu local de trabalho nunca aprovaria. Você:", options: ["Insiste nela", "Risca-a", "Esconde-a", "Paga-a do seu bolso"], answer: 1, why: "Fique com as opções realistas." },
      { objective: "O4", q: "Qual é um critério comum numa matriz de decisão?", options: ["O tempo que vai fazer amanhã", "A cor preferida", "O número da sorte", "O custo"], answer: 3, why: "O custo é um critério importante." },
      { objective: "O4", q: "Na matriz deste curso, as pontuações vão de:", options: ["1 a 5", "1 a 100", "A a Z", "Só 0 a 1"], answer: 0, why: "Uma escala simples de 1 a 5." },
      { objective: "O4", q: "O total mais alto da matriz é:", options: ["Não é útil", "Automaticamente a resposta", "Sempre errado", "Uma candidata forte, que ainda confirma se faz sentido"], answer: 3, why: "Confirme que o resultado faz sentido." },
      { objective: "O4", q: "Quem escolhe os pesos e as pontuações?", options: ["Um número ao acaso", "Só a IA", "Você, com base em factos e no que o seu local de trabalho valoriza", "Ninguém"], answer: 2, why: "O julgamento fica com você." },
      { objective: "O5", q: "Qual é um problema comum no raciocínio da IA?", options: ["Ter sempre cuidado demais", "Números inventados", "Recusar-se a escrever", "Contas perfeitas"], answer: 1, why: "A IA pode inventar números." },
      { objective: "O5", q: "As regras e políticas na resposta da IA devem ser verificadas com:", options: ["Ninguém", "Só outra IA", "Um boato", "A fonte oficial ou o seu chefe"], answer: 3, why: "As regras precisam de uma fonte com autoridade." },
      { objective: "O5", q: "Porque anotar o que verificou?", options: ["Não é útil", "Para encher espaço", "Torna a sua recomendação mais forte", "Para culpar a IA"], answer: 2, why: "Mostra um trabalho cuidadoso." },
      { objective: "O5", q: "O que nunca deve entrar numa ferramenta de IA quando resolve um problema?", options: ["Dados confidenciais de clientes", "Uma descrição geral do problema", "A sua lista de opções", "Os nomes dos critérios"], answer: 0, why: "Os dados confidenciais ficam de fora." },
      { objective: "O6", q: "Uma recomendação de uma página inclui:", options: ["Só a sua opinião", "Problema, causa raiz, opções, recomendação, primeiros passos, medida, riscos", "Todos os emails que enviou", "Palavras-passe"], answer: 1, why: "Essas secções permitem agir." },
      { objective: "O6", q: "Uma medida de sucesso é:", options: ["O seu salário", "O número que mostra se a mudança funcionou", "Um elogio", "Um palpite"], answer: 1, why: "As medidas provam os resultados." },
      { objective: "O6", q: "Que teste é melhor propor?", options: ["Duas semanas, em duas noites, medindo os tempos de espera", "Mudar tudo para sempre já", "Nenhum teste e nenhuma medida", "Uma mudança secreta"], answer: 0, why: "Testes pequenos e medidos são fáceis de aprovar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 3, 4, 6, 9, 11, 13, 14, 17, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Descrição do problema", objective: "O1", notYet: "A descrição é vaga ou não tem factos.", meets: "Diz o quê, onde, quando, que tamanho tem e porque é importante, com factos.", exceeds: "Inclui números que o próprio aluno recolheu." },
      { name: "Causa raiz", objective: "O2", notYet: "Não há 5 Porquês, ou a causa foi tirada da IA sem verificar.", meets: "Uma cadeia de 5 Porquês até uma causa raiz verificada com factos ou com colegas.", exceeds: "Mostra que causas sugeridas pela IA foram afastadas e porquê." },
      { name: "Opções e matriz", objective: "O4", notYet: "Menos de quatro opções, ou nenhuma matriz com pesos.", meets: "Pelo menos quatro opções, incluindo não mudar nada, pontuadas numa matriz com pelo menos quatro critérios com peso e totais certos.", exceeds: "O aluno explica porque os pesos servem para o seu local de trabalho." },
      { name: "Raciocínio da IA verificado", objective: "O5", notYet: "Não há notas sobre o que foi verificado.", meets: "Notas sobre pelo menos duas coisas verificadas no raciocínio da IA, e nenhum dado confidencial usado.", exceeds: "Inclui os argumentos mais fortes contra a opção escolhida e a resposta a eles." },
      { name: "Recomendação", objective: "O6", notYet: "A ideia principal está escondida, ou faltam os passos e a medida.", meets: "Uma página com a ideia principal primeiro, os primeiros passos, um pequeno teste e uma medida de sucesso.", exceeds: "Lista os riscos e como vão ser tratados." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que apresentam a sua recomendação a um chefe em 30 dias (inquérito de seguimento)",
      "Recomendações que levam a um teste ou a uma mudança no trabalho",
      "Alunos que dizem ter tido uma promoção, um papel de chefia ou um novo emprego em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou smartphone com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini, ou a ferramenta que o local de trabalho aprova",
      "Uma folha de cálculo gratuita (Google Sheets ou Microsoft Excel online) ou papel para a matriz de decisão",
      "Um problema real do trabalho ou um exemplo realista, como os tempos de espera na caixa",
      "Cerca de 60 minutos no total, mais o tempo para recolher factos sobre um problema real"
    ],
    facilitatorNotes: [
      "Ofereça um problema de exemplo comum para os alunos que não podem usar um real, para que todos pratiquem cada passo.",
      "Peça a pequenos grupos para fazerem os 5 Porquês juntos; as pessoas que fazem o trabalho muitas vezes veem a causa raiz primeiro.",
      "Confirme que nenhum dado confidencial de clientes entra nas ferramentas de IA durante a prática.",
      "Peça aos alunos para apresentarem a sua recomendação de uma página em dois minutos a um colega que faz de chefe.",
      "Avalie a recomendação com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
