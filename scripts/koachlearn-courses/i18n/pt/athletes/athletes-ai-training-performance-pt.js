"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-ai-training-performance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-ai-training-performance-pt",
  lang: "pt",
  translationOf: "athletes-ai-training-performance",
  category: "Athletes",
  name: "IA para o Treino e o Desempenho",
  skills: "Definir um objetivo de treino mensurável, Registar dados de treino, Ler uma tendência de treino simples, Preparar com a IA uma pergunta sobre a semana de treino para o seu treinador, Reconhecer conselhos de treino perigosos da IA",
  outcome: "definir um objetivo de desempenho mensurável, registar quatro semanas de dados de treino numa folha de cálculo, usar um assistente de IA para resumir a tendência e levar ao seu treinador uma pergunta clara e segura sobre o seu treino.",
  about: [
    "Este curso é para atletas que querem treinar de forma mais inteligente e para treinadores que querem que os seus atletas entendam os próprios números. É educação geral, não é um programa de treino: quem define o seu treino é o seu treinador e o seu preparador físico.",
    "Você vai definir um objetivo que pode medir, registar os números certos, ver o que eles dizem e usar um assistente de IA para organizar os seus dados e preparar melhores conversas com o seu treinador.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escolha um objetivo mensurável, registe pelo menos quatro sessões de dados de treino numa folha do Google Sheets (data, o que fez, esforço de 1 a 10, resultado), peça a um assistente de IA para descrever a tendência com palavras simples e escreva três perguntas sobre o seu próximo bloco de treino para levar ao seu treinador.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário, da universidade e de clubes que querem treinar de forma mais inteligente, e treinadores que querem que os seus atletas entendam os próprios números.",
    startingPoint: "Treinam com regularidade com um treinador e usam um smartphone todos os dias. Muitos têm objetivos como \"ficar mais rápido\", mas sem uma meta mensurável, sem um registo de treino regular e com pouca prática a ler um gráfico ou a avaliar conselhos de treino da internet.",
    gap: "Sem um objetivo mensurável e um registo simples, os atletas não conseguem ver se o treino está a funcionar, e a IA ou os planos da internet podem dar conselhos perigosos. Números claros e perguntas seguras melhoram as conversas com o treinador e protegem a saúde do atleta.",
    constraints: [
      "Linguagem simples, com um nível de leitura de cerca do 7.º ano",
      "Um telefone ou computador com o Google Sheets gratuito e um assistente de IA gratuito",
      "Cerca de 60 minutos de lições, mais quatro semanas de registo junto com o treino normal",
      "Só educação geral: o treinador e o preparador físico definem o treino, as cargas e o regresso depois de uma lesão",
      "Os dados e registos de saúde ficam privados e nunca são colados num assistente de IA"
    ],
    prerequisites: "Nenhum. O curso \"Ferramentas de IA para Atletas\" ajuda se nunca usou o Google Sheets."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um objetivo de treino vago", action: "reescrevê-lo como um objetivo mensurável com um número, uma data e um teste", standard: "com as quatro partes presentes e o objetivo combinado com o seu treinador" },
    { id: "O2", condition: "Usando o Google Sheets", action: "criar e manter um registo de treino com Data, Sessão, Esforço e Resultado", standard: "com uma linha preenchida depois de cada sessão, durante pelo menos quatro sessões" },
    { id: "O3", condition: "Com um gráfico do seu próprio registo de treino", action: "descrever a tendência em uma ou duas frases e comparar o esforço com o resultado", standard: "dizendo a direção certa e verificando você mesmo as contas da IA" },
    { id: "O4", condition: "Com uma lista de tarefas de treino", action: "identificar em que tarefas a IA pode ajudar e quais são do seu treinador ou do seu preparador físico", standard: "acertando pelo menos 4 de 5" },
    { id: "O5", condition: "Com conselhos de treino da IA ou da internet", action: "identificar sinais de alerta como treinar com dor, cortar a água ou suplementos arriscados", standard: "encontrando todos os sinais de alerta e levando-os ao seu treinador ou preparador físico em vez de os seguir" },
    { id: "O6", condition: "Usando o seu objetivo, o seu registo e um assistente de IA", action: "escrever uma atualização de três frases para o treinador e três perguntas sobre o seu próximo bloco de treino", standard: "com as suas próprias palavras, sem partilhar registos de saúde e usando a resposta do seu treinador para atualizar o seu plano" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Objetivos e dados",
      lessons: [
        {
          objectives: ["O1"],
          title: "Definir um objetivo que pode medir",
          minutes: 5,
          goal: "Transformar um objetivo vago num objetivo mensurável com uma data.",
          text: [
            "\"Ficar mais rápido\" é um desejo. \"Correr as 40 jardas 0,1 segundos mais rápido até ao fim da pré-temporada, cronometrado sempre da mesma maneira\" é um objetivo que pode medir.",
            "Um bom objetivo de treino diz uma coisa, um número, uma data e como vai ser medido. Deve ser combinado com o seu treinador para caber no plano da equipa.",
            "Um assistente de IA pode ajudar a reescrever um objetivo vago. Experimente: \"Transforme o meu objetivo 'ficar mais forte para o futebol' num objetivo mensurável com uma data. Faça-me perguntas se precisar de mais informação.\""
          ],
          steps: ["Escreva o seu objetivo com as suas palavras.", "Acrescente um número para medir.", "Acrescente uma data.", "Diga como e quando vai ser testado.", "Combine-o com o seu treinador."],
          words: [["Mensurável", "algo que pode contar ou cronometrar, para saber se mudou."], ["Ponto de partida", "o seu número inicial antes de treinar para o objetivo (em inglês, \"baseline\")."]],
          slides: [
            { title: "Desejo e objetivo", bullets: ["Desejo: \"ficar mais rápido\"", "Objetivo: \"40 jardas 0,1 s mais rápido até ao fim da pré-temporada\""] },
            { title: "Um objetivo tem", bullets: ["Uma coisa", "Um número e uma data", "Como vai ser testado"] },
            { title: "Use a IA para o afinar", bullets: ["\"Transforme o meu objetivo num objetivo mensurável\"", "Depois combine-o com o seu treinador"] }
          ],
          tryIt: "Escreva um objetivo vago. Peça a um assistente de IA para o tornar mensurável com uma data. Corrija-o para que seja verdadeiro para você e depois escreva o seu número de partida, se o souber.",
          youCanNow: "escrever um objetivo de treino mensurável com um número, uma data e um teste.",
          quickCheck: [
            { objective: "O1", q: "O que transforma \"ficar mais forte\" num objetivo mensurável?", options: ["Acrescentar a palavra \"mesmo\"", "Acrescentar um número, uma data e como vai ser testado", "Publicá-lo na internet", "Torná-lo mais comprido"], answer: 1, why: "Um objetivo mensurável diz uma coisa, um número, uma data e como é medido." },
            { objective: "O1", q: "Escreveu um objetivo mensurável com a ajuda da IA. O que faz a seguir?", options: ["Começa a treinar para ele sozinho", "Pede à IA para o aprovar", "Guarda-o em segredo", "Combina-o com o seu treinador"], answer: 3, why: "O seu objetivo deve ser combinado com o seu treinador para caber no plano da equipa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Registar os dados de treino certos",
          minutes: 5,
          goal: "Criar um registo de treino simples que vai mesmo manter.",
          text: [
            "Os dados só são úteis se os recolher sempre da mesma maneira. Um registo simples é melhor do que uma aplicação sofisticada que deixa de usar ao fim de uma semana.",
            "Para começar chegam quatro colunas: Data, Sessão (o que fez), Esforço (quão duro pareceu, de 1 a 10) e Resultado (o número do seu objetivo). Alguns atletas acrescentam as horas de sono ou uma nota curta.",
            "Os aparelhos que se usam no corpo, como relógios e cintas de frequência cardíaca, podem dar mais dados, mas não são perfeitos. Trate os números deles como pistas, não como factos, e mantenha os seus dados de saúde privados."
          ],
          steps: ["Abra o Google Sheets.", "Crie as colunas: Data, Sessão, Esforço (1-10), Resultado.", "Preencha uma linha depois de cada sessão.", "Guarde-o no mesmo lugar do telefone para levar só um minuto."],
          words: [["Nota de esforço", "uma pontuação de 1 a 10 para quão dura pareceu uma sessão; os treinadores muitas vezes chamam-lhe RPE (perceção subjetiva do esforço)."], ["Aparelho de vestir", "um aparelho que se usa no corpo, como um relógio, que mede coisas como a frequência cardíaca ou os passos (em inglês, \"wearable\")."]],
          slides: [
            { title: "Simples é melhor do que sofisticado", bullets: ["Da mesma maneira, sempre", "Um minuto depois de cada sessão"] },
            { title: "Quatro colunas", bullets: ["Data", "Sessão", "Esforço 1-10", "Resultado"] },
            { title: "Sobre os relógios e as cintas", bullets: ["Pistas úteis, não factos perfeitos", "Mantenha os dados de saúde privados"] }
          ],
          tryIt: "Crie o seu registo de treino no Google Sheets com as quatro colunas. Preencha as suas últimas duas ou três sessões de memória ou a partir das suas notas.",
          youCanNow: "manter um registo de treino simples e regular.",
          quickCheck: [
            { objective: "O2", q: "O que vai na coluna Resultado do seu registo?", options: ["O número do seu objetivo", "Quão duro pareceu", "O que comeu", "O nome do seu treinador"], answer: 0, why: "O Resultado guarda o número que está a acompanhar para o seu objetivo." },
            { objective: "O2", q: "Está sempre a esquecer-se de preencher o registo. O que ajuda mais?", options: ["Mudar para uma aplicação mais sofisticada", "Preenchê-lo uma vez por mês de memória", "Guardá-lo no mesmo lugar do telefone e preencher uma linha logo depois de cada sessão", "Deixar de registar"], answer: 2, why: "O registo simples, preenchido sempre da mesma maneira, é o que vai manter." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ler a tendência do seu treino",
          minutes: 5,
          goal: "Ler um gráfico dos seus dados e descrever o que mostra em uma ou duas frases.",
          text: [
            "Depois de algumas semanas, faça um gráfico da coluna Resultado por data. Veja a direção: a subir, a descer ou parada. Um dia mau não quer dizer muito; olhe para a linha no geral.",
            "Compare o Esforço com o Resultado. Se o esforço continua a subir mas os resultados ficam parados ou descem, pode estar cansado, e isso é algo a dizer ao seu treinador.",
            "Pode colar a sua tabela (sem nomes nem registos de saúde) num assistente de IA e perguntar: \"Descreva a tendência destes dados de treino com palavras simples. Que perguntas devo fazer ao meu treinador?\" Verifique você mesmo as contas."
          ],
          steps: ["Selecione Data e Resultado e insira um gráfico de linhas.", "Diga a direção: a subir, a descer ou parada.", "Compare o Esforço com o Resultado.", "Escreva um resumo de uma frase."],
          words: [["Tendência", "a direção geral dos seus números ao longo do tempo."], ["Estagnação", "quando os resultados deixam de melhorar durante algum tempo (em inglês, \"plateau\")."]],
          slides: [
            { title: "Olhe para a linha", bullets: ["A subir, a descer ou parada?", "Um dia mau não é uma tendência"] },
            { title: "Esforço e resultado", bullets: ["Esforço a subir, resultado parado ou a descer?", "Pode estar cansado: diga ao seu treinador"] },
            { title: "A IA pode descrevê-la", bullets: ["Cole a tabela, sem nomes nem registos de saúde", "Verifique você mesmo as contas"] }
          ],
          tryIt: "Faça um gráfico da sua coluna Resultado. Escreva uma frase a descrever a tendência. Depois peça a um assistente de IA para a descrever e compare a frase dele com a sua.",
          youCanNow: "fazer um gráfico dos seus dados de treino e descrever a tendência com palavras simples.",
          quickCheck: [
            { objective: "O3", q: "Para que olha primeiro no seu gráfico de treino?", options: ["O pior dia de todos", "As cores", "A direção geral: a subir, a descer ou parada", "O título do gráfico"], answer: 2, why: "Um dia mau não quer dizer muito; a linha no geral mostra a tendência." },
            { objective: "O3", q: "Vai colar a sua tabela num assistente de IA. O que tira primeiro?", options: ["Os nomes e os registos de saúde", "As datas", "A coluna Resultado", "Nada"], answer: 0, why: "Mantenha os nomes e os registos de saúde fora das ferramentas de IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Objetivos e dados",
        questions: [
          { objective: "O1", q: "Qual é um objetivo mensurável?", options: ["Ficar melhor", "Ser uma fera", "Acertar 16 de 20 lances livres até 15 de janeiro, testado no treino", "Trabalhar muito"], answer: 2, why: "Tem um número, uma data e um teste." },
          { objective: "O1", q: "O que é o ponto de partida?", options: ["O seu número inicial antes de treinar para o objetivo", "A linha de fundo do campo", "O seu melhor dia de sempre", "A média da equipa"], answer: 0, why: "O ponto de partida mostra de onde você começou." },
          { objective: "O2", q: "Que registo de treino é mais útil?", options: ["Um sofisticado que abandona ao fim de uma semana", "Um que preenche uma vez por temporada", "Um que preenche a adivinhar", "Um simples que preenche sempre"], answer: 3, why: "Dados regulares são o que dá sentido às tendências." },
          { objective: "O2", q: "Como deve tratar os números de um relógio ou de uma cinta?", options: ["Como factos perfeitos", "Como pistas úteis que não são perfeitas", "Como conselhos médicos", "Como algo para publicar"], answer: 1, why: "Esses aparelhos ajudam, mas podem falhar." },
          { objective: "O3", q: "As suas notas de esforço continuam a subir, mas os seus tempos estão a piorar. O que deve fazer?", options: ["Treinar com o dobro da força", "Dizer ao seu treinador; pode estar cansado", "Deixar de registar", "Ignorar"], answer: 1, why: "Esforço a subir com resultados a descer pode ser sinal de cansaço, e o seu treinador deve saber." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a IA com o seu treinador",
      lessons: [
        {
          objectives: ["O4"],
          title: "O que a IA pode e não pode fazer pelo treino",
          minutes: 4,
          goal: "Separar as tarefas de treino em que a IA pode ajudar das que são do seu treinador ou preparador físico.",
          text: [
            "Os assistentes de IA são bons a organizar: transformar notas numa tabela, explicar uma palavra de treino, resumir o seu registo ou escrever perguntas para o seu treinador.",
            "Não são bons a conhecer o seu corpo. Não veem a sua técnica, o seu historial de lesões nem como dormiu, e os planos gerais da internet podem não servir para a sua idade, o seu nível ou a sua época.",
            "Por isso, use a IA para entender e preparar, e deixe o seu treinador e o seu preparador físico decidir os seus treinos, as cargas e o regresso depois de uma lesão."
          ],
          words: [["Carga de treino", "quanto e com que intensidade treina ao longo do tempo."], ["Preparador físico", "aqui, um profissional de saúde com licença que previne e trata lesões e ajuda os atletas a recuperar (em inglês, \"athletic trainer\")."]],
          slides: [
            { title: "A IA é boa a", bullets: ["Organizar notas em tabelas", "Explicar palavras de treino", "Resumir o seu registo", "Escrever perguntas para o seu treinador"] },
            { title: "A IA não consegue", bullets: ["Ver a sua técnica", "Saber o seu historial de lesões", "Saber como se sente hoje"] },
            { title: "Quem decide", bullets: ["Treinador: treinos e cargas", "Preparador físico: lesões e regresso ao jogo"] }
          ],
          tryIt: "Peça a um assistente de IA para explicar com palavras simples uma palavra de treino que já ouviu (por exemplo \"periodização\" ou \"semana de descarga\"). Escreva uma pergunta sobre ela para o seu treinador.",
          youCanNow: "dizer em que tarefas de treino a IA pode ajudar e quais são do seu treinador ou preparador físico.",
          quickCheck: [
            { objective: "O4", q: "Qual destas coisas um assistente de IA faz bem no treino?", options: ["Ver a sua técnica no treino", "Saber o seu historial de lesões", "Decidir o seu regresso depois de uma lesão", "Explicar uma palavra de treino"], answer: 3, why: "A IA é boa a organizar e a explicar, não a conhecer o seu corpo." },
            { objective: "O4", q: "Um assistente de IA dá-lhe um plano de musculação mais pesado do que o do seu treinador. O que faz?", options: ["Segue o plano da IA", "Usa-o para preparar uma pergunta e deixa o treinador decidir", "Faz os dois planos", "Deixa de fazer musculação"], answer: 1, why: "Use a IA para entender e preparar; o seu treinador decide os treinos e as cargas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reconhecer conselhos de treino perigosos da IA",
          minutes: 5,
          goal: "Reconhecer sinais de alerta em conselhos de treino da IA ou da internet.",
          text: [
            "A IA e os planos da internet podem dar conselhos que são demais, depressa demais, ou errados para atletas jovens ou lesionados. Você precisa de os reconhecer.",
            "Sinais de alerta: treinar com dor aguda; grandes aumentos de treino de uma só vez; cortar comida ou água para atingir o peso; suplementos que prometem resultados rápidos; \"nenhum dia de descanso\"; e qualquer plano que ignora o que o seu treinador escreveu.",
            "Os suplementos são um risco especial: a FDA (a agência dos EUA que controla alimentos e medicamentos) não os verifica antes de serem vendidos, e alguns têm substâncias proibidas. Fale com o seu preparador físico ou um nutricionista registado antes de tomar qualquer um."
          ],
          steps: ["Leia o conselho devagar.", "Compare-o com a lista de sinais de alerta.", "Se aparecer algum sinal de alerta, não o siga.", "Leve-o ao seu treinador ou preparador físico."],
          words: [["Sinal de alerta", "um aviso de que algo é perigoso ou está errado."], ["Suplemento", "um comprimido, pó ou bebida vendido para acrescentar algo à sua alimentação."]],
          slides: [
            { title: "Sinais de alerta", bullets: ["Treinar com dor aguda", "Grandes aumentos de uma só vez", "Cortar comida ou água para atingir o peso", "\"Nenhum dia de descanso\""] },
            { title: "Suplementos", bullets: ["Não são verificados pela FDA antes da venda", "Alguns têm substâncias proibidas", "Pergunte primeiro ao preparador físico ou a um nutricionista"] },
            { title: "Quando vir um", bullets: ["Não o siga", "Leve-o ao seu treinador ou preparador físico"] }
          ],
          sources: [{ name: "USADA: Supplement Connect (riscos dos suplementos para atletas)", url: "https://www.usada.org/athletes/substances/supplement-connect/" }],
          tryIt: "Peça a um assistente de IA \"um plano para ficar mais rápido em duas semanas\". Leia-o e marque os sinais de alerta. Escreva o que perguntaria ao seu treinador sobre ele.",
          youCanNow: "reconhecer conselhos de treino perigosos e levá-los à pessoa certa.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um sinal de alerta num conselho de treino?", options: ["Um dia de descanso por semana", "Um plano igual ao que o seu treinador escreveu", "Grandes aumentos de treino de uma só vez", "Aquecer antes do treino"], answer: 2, why: "Demais e depressa demais é um dos sinais de alerta da lição." },
            { objective: "O5", q: "Um colega de equipa partilha um suplemento que promete resultados rápidos. O que faz?", options: ["Fala primeiro com o seu preparador físico ou com um nutricionista registado", "Experimenta um pouco", "Compra-o se as avaliações forem boas", "Pede à IA para o aprovar"], answer: 0, why: "A FDA não verifica os suplementos antes da venda e alguns têm substâncias proibidas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Preparar uma conversa de treino com o seu treinador",
          minutes: 5,
          goal: "Usar a IA para preparar uma atualização curta e clara e três perguntas para o seu treinador.",
          text: [
            "Os treinadores têm pouco tempo. Uma atualização curta e clara com os seus números melhora a conversa: qual é o seu objetivo, o que os seus dados mostram e o que quer perguntar.",
            "Peça a um assistente de IA: \"Aqui estão o meu objetivo e o meu registo de treino. Escreva uma atualização de três frases para o meu treinador e sugira três perguntas que eu poderia fazer sobre o meu próximo bloco de treino.\" Depois corrija-a para que soe como você.",
            "Leve a atualização ao seu treinador em pessoa ou da maneira que a sua equipa prefere. Ouça, tome notas e atualize o seu plano com o que o seu treinador diz, não com o que a IA disse."
          ],
          steps: ["Cole o seu objetivo e o seu registo (sem registos de saúde).", "Peça uma atualização de três frases e três perguntas.", "Corrija-a com as suas próprias palavras.", "Partilhe-a com o seu treinador da maneira que a sua equipa prefere.", "Atualize o seu plano com a resposta do seu treinador."],
          words: [["Bloco de treino", "um conjunto de semanas com um foco principal de treino."], ["Atualização", "uma mensagem curta que diz onde você está agora."]],
          slides: [
            { title: "Uma boa atualização", bullets: ["O meu objetivo", "O que os meus dados mostram", "As minhas perguntas"] },
            { title: "Use a IA para o rascunho", bullets: ["Atualização de três frases", "Três perguntas", "Corrija-a com as suas próprias palavras"] },
            { title: "Depois", bullets: ["Fale com o seu treinador", "Tome notas", "Siga o plano do seu treinador"] }
          ],
          tryIt: "Tarefa final: registe pelo menos quatro sessões, peça a um assistente de IA para descrever a sua tendência e escreva uma atualização de três frases com três perguntas para o seu treinador.",
          youCanNow: "transformar os seus dados de treino numa atualização clara e em perguntas para o seu treinador.",
          quickCheck: [
            { objective: "O6", q: "Que três coisas tem uma boa atualização para o treinador?", options: ["O seu objetivo, o que os seus dados mostram e o que quer perguntar", "As suas redes sociais, o sono e as notas da escola", "As estatísticas de outros jogadores", "Só o seu melhor dia"], answer: 0, why: "Uma atualização curta dá o seu objetivo, os seus dados e as suas perguntas." },
            { objective: "O6", q: "A resposta do seu treinador é diferente da sugestão da IA. O que faz?", options: ["Segue a IA", "Pergunta a outra IA", "Ignora as duas", "Atualiza o seu plano com o que o seu treinador disse"], answer: 3, why: "Atualize o seu plano com a resposta do seu treinador, não com o que a IA disse." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a IA com o seu treinador",
        questions: [
          { objective: "O4", q: "Em que tarefa de treino a IA é boa?", options: ["Ver a sua técnica em pessoa", "Autorizar o seu regresso depois de uma lesão", "Saber como dormiu", "Resumir o seu registo de treino"], answer: 3, why: "Organizar e resumir é um ponto forte da IA." },
          { objective: "O4", q: "Quem decide quando volta depois de uma lesão?", options: ["O seu preparador físico ou médico", "Um assistente de IA", "Um colega de equipa", "Um influenciador de fitness"], answer: 0, why: "O regresso ao jogo é uma decisão de saúde para profissionais qualificados." },
          { objective: "O5", q: "Qual é um sinal de alerta num conselho de treino?", options: ["Dias de descanso todas as semanas", "Aquecer primeiro", "Treinar com dor aguda", "Perguntar ao seu treinador"], answer: 2, why: "Uma dor aguda é um sinal para parar e ser examinado." },
          { objective: "O5", q: "Porque são os suplementos arriscados para os atletas?", options: ["São sempre proibidos", "São testados pelo seu treinador", "Têm mau sabor", "A FDA não os verifica antes da venda, e alguns têm substâncias proibidas"], answer: 3, why: "A USADA avisa que os suplementos podem estar contaminados ou ter rótulos errados." },
          { objective: "O6", q: "Depois de falar com o seu treinador, que plano segue?", options: ["O da IA", "O do seu treinador", "O de um vídeo qualquer", "O do seu rival"], answer: 1, why: "O treinador define o treino; a IA ajuda-o a preparar-se." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para o Treino e o Desempenho",
    questions: [
      { objective: "O1", q: "\"Ficar mais rápido\" é:", options: ["Um objetivo perfeito", "Um registo de treino", "Um desejo, não um objetivo mensurável", "Um exercício"], answer: 2, why: "Não tem número, data nem teste." },
      { objective: "O1", q: "Um bom objetivo de treino inclui:", options: ["Uma coisa, um número, uma data e um teste", "Só um sentimento", "A sua palavra-passe", "Dez objetivos ao mesmo tempo"], answer: 0, why: "Essas partes tornam-no mensurável." },
      { objective: "O1", q: "Quem deve combinar o objetivo com você?", options: ["O seu treinador", "Um desconhecido na internet", "Só uma IA", "Ninguém"], answer: 0, why: "O seu objetivo deve caber no plano da equipa." },
      { objective: "O2", q: "O que deve ter o seu primeiro registo de treino?", options: ["Cinquenta colunas", "Os seus registos médicos", "Data, Sessão, Esforço e Resultado", "Só fotografias"], answer: 2, why: "Quatro colunas simples chegam para começar." },
      { objective: "O2", q: "Uma nota de esforço de 1 a 10 mede:", options: ["A sua altura", "Quão dura pareceu uma sessão", "As suas notas da escola", "Os seus seguidores"], answer: 1, why: "É uma pontuação rápida do esforço sentido." },
      { objective: "O2", q: "Os números de um relógio ou de uma cinta são:", options: ["Sempre exatos", "Diagnósticos médicos", "Sem sentido", "Pistas úteis que podem falhar"], answer: 3, why: "Esses aparelhos ajudam, mas trate os números como pistas." },
      { objective: "O3", q: "Ao ler o seu gráfico, deve concentrar-se em:", options: ["O seu pior dia", "A cor do gráfico", "A direção geral da linha", "Os gráficos de outros atletas"], answer: 2, why: "A tendência conta mais do que um dia." },
      { objective: "O3", q: "Os resultados ficam parados durante semanas. Isto chama-se:", options: ["Um sprint", "Um ponto de partida", "Um aparelho de vestir", "Uma estagnação"], answer: 3, why: "Uma estagnação é um período sem melhorias." },
      { objective: "O3", q: "Antes de colar o seu registo numa IA, tire:", options: ["Os nomes e os registos de saúde", "As datas", "As notas de esforço", "Os resultados"], answer: 0, why: "Mantenha os dados privados e de saúde fora das ferramentas de IA." },
      { objective: "O3", q: "A IA diz que a sua média melhorou 2 segundos. Você deve:", options: ["Publicar", "Verificar você mesmo as contas", "Confiar totalmente", "Apagar o seu registo"], answer: 1, why: "A IA pode errar nas contas." },
      { objective: "O4", q: "O que é que a IA NÃO pode fazer por você?", options: ["Explicar uma palavra de treino", "Transformar notas numa tabela", "Ver a sua técnica no treino", "Escrever perguntas para o seu treinador"], answer: 2, why: "Não consegue ver você a treinar." },
      { objective: "O4", q: "O que faz um preparador físico (athletic trainer)?", options: ["Previne e trata lesões e ajuda a recuperar", "Vende sapatilhas", "Gere as redes sociais", "Escreve o calendário da equipa"], answer: 0, why: "Os preparadores físicos são profissionais de saúde com licença." },
      { objective: "O5", q: "Um plano da internet diz para cortar a água para atingir o peso. Isto é:", options: ["Seguro para todos", "Obrigatório", "Uma boa ideia antes dos jogos", "Um sinal de alerta"], answer: 3, why: "Cortar comida ou água para atingir o peso pode ser perigoso." },
      { objective: "O5", q: "Um plano com \"nenhum dia de descanso\" é:", options: ["O melhor para crescer", "Um sinal de alerta", "Obrigatório pela NCAA", "Normal para principiantes"], answer: 1, why: "O descanso faz parte do treino; não descansar é um sinal de aviso." },
      { objective: "O5", q: "Antes de tomar qualquer suplemento, fale com:", options: ["Um anúncio", "O seu preparador físico ou um nutricionista registado", "Um colega de equipa", "Ninguém"], answer: 1, why: "Eles podem explicar os riscos, incluindo as substâncias proibidas." },
      { objective: "O5", q: "Se o conselho da IA for contra o plano do seu treinador, você:", options: ["Segue a IA", "Sai da equipa", "Segue o seu treinador e pergunta-lhe sobre isso", "Faz os dois"], answer: 2, why: "O seu treinador conhece você e o plano da equipa." },
      { objective: "O6", q: "Uma boa atualização para o treinador inclui:", options: ["O seu objetivo, o que os seus dados mostram e as suas perguntas", "Só queixas", "Um texto longo", "A sua palavra-passe"], answer: 0, why: "Curta e clara ajuda os treinadores com pouco tempo." },
      { objective: "O6", q: "Depois de a IA escrever o rascunho da atualização, você deve:", options: ["Enviá-lo sem o ler", "Publicá-lo para todos", "Corrigi-lo com as suas próprias palavras", "Enviá-lo a um rival"], answer: 2, why: "Deve soar como você e ser verdadeiro." },
      { objective: "O6", q: "Um bloco de treino é:", options: ["Um bloco de madeira", "Um remate bloqueado", "Um dia de descanso", "Um conjunto de semanas com um foco principal"], answer: 3, why: "Os treinadores planeiam o treino em blocos." },
      { objective: "O4", q: "O melhor uso da IA no treino é:", options: ["Substituir o seu treinador", "Entender os seus dados e preparar melhores perguntas", "Diagnosticar lesões", "Escolher os seus suplementos"], answer: 1, why: "A IA ajuda a entender e a preparar; as pessoas decidem." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Objetivo mensurável", objective: "O1", notYet: "O objetivo é vago, ou falta um número, uma data ou um teste.", meets: "Uma coisa, um número, uma data e um teste, combinados com o treinador.", exceeds: "Inclui um número de partida e cabe numa parte concreta do plano da temporada da equipa." },
      { name: "Registo de treino", objective: "O2", notYet: "Menos de quatro sessões, ou faltam colunas.", meets: "Data, Sessão, Esforço e Resultado preenchidos em pelo menos quatro sessões.", exceeds: "Cada sessão registada no mesmo dia, com uma nota curta ou as horas de sono." },
      { name: "Resumo da tendência", objective: "O3", notYet: "Não há gráfico, ou a direção está errada ou falta.", meets: "Um gráfico e um resumo de uma ou duas frases sobre a direção, com o esforço comparado com o resultado e as contas da IA verificadas.", exceeds: "Encontra uma estagnação ou um esforço a subir com resultados parados e leva-a como pergunta ao treinador." },
      { name: "Uso seguro da IA", objective: "O5", notYet: "Segue ou repete um conselho com um sinal de alerta, ou partilha registos de saúde com a IA.", meets: "Não segue nenhum conselho com sinal de alerta, e leva tudo o que é duvidoso ao treinador ou ao preparador físico.", exceeds: "Diz qual é o sinal de alerta e porque é perigoso quando o apresenta." },
      { name: "Perguntas ao treinador", objective: "O6", notYet: "Menos de três perguntas, ou a atualização parece texto copiado da IA.", meets: "Uma atualização de três frases e três perguntas claras com as palavras do próprio atleta.", exceeds: "O atleta anota as respostas do treinador e atualiza o plano a partir delas." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam a tarefa final e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos que ainda mantêm o registo de treino 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem ter atingido o seu objetivo mensurável, ou estar a aproximar-se dele, até à data combinada",
      "Alunos que dizem ter levado uma atualização e perguntas ao treinador, ou ter recusado conselhos perigosos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Uma conta Google gratuita para o Google Sheets",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Um objetivo combinado com o seu treinador",
      "Cerca de 60 minutos de lições e depois cerca de um minuto após cada sessão, durante quatro semanas"
    ],
    facilitatorNotes: [
      "Combine com o treinador principal antes de começar para que os objetivos e os registos caibam no plano da equipa; este curso não define o treino.",
      "Ensine os atletas a tirar os nomes e os registos de saúde antes de colar quaisquer dados numa ferramenta de IA.",
      "Envie qualquer pergunta sobre dor, lesões, peso ou suplementos ao preparador físico ou a um nutricionista registado; não responda em grupo.",
      "Dê primeiro as Lições 1 e 2, deixe os atletas registar durante quatro semanas e depois dê as Lições 3 a 6 e a tarefa final.",
      "Marque reuniões curtas com o treinador para que os atletas possam apresentar a sua atualização e as suas perguntas."
    ]
  }
};
