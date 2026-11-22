"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-ai-nonprofit-leadership.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "underserved-ai-nonprofit-leadership-pt",
  lang: "pt",
  translationOf: "underserved-ai-nonprofit-leadership",
  category: "Undeserved Community",
  name: "IA para a Liderança de Organizações sem Fins Lucrativos",
  skills: "Escrever uma missão e uma meta claras, Planear um programa com IA, Organizar voluntários com segurança, Encontrar e resumir subsídios, Dar notícias aos apoiantes, Definir regras simples de IA para o seu grupo",
  outcome: "usar um assistente de IA gratuito para escrever um plano de programa de uma página para o seu grupo comunitário (meta, calendário, funções dos voluntários e um pequeno resumo para um subsídio) e definir regras simples para o seu grupo usar a IA com segurança.",
  about: [
    "Este curso é para quem lidera ou quer liderar trabalho comunitário: um banco alimentar, uma associação de inquilinos, um ministério de igreja, um programa para jovens, um grupo de moradores ou uma pequena organização sem fins lucrativos. Muitas vezes faz isto com pouco dinheiro, pouco pessoal e muito coração.",
    "Você vai usar um assistente de IA gratuito para melhorar a sua missão, planear um programa, organizar voluntários, encontrar oportunidades de subsídios e manter os apoiantes informados, protegendo sempre as pessoas que serve. A IA poupa tempo a escrever e a planear; você traz o bom senso, as relações e o conhecimento da comunidade.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" que constrói o seu plano verdadeiro. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Para questões legais, de impostos ou sobre o estatuto de organização sem fins lucrativos, consulte fontes oficiais como irs.gov e o procurador-geral (attorney general) ou o secretário de estado (secretary of state) do seu estado."
  ],
  finalTask: "Escreva um plano de programa de uma página para um projeto comunitário verdadeiro ou de prática, com a ajuda de um assistente de IA gratuito: uma missão numa frase, uma meta que se pode medir, um calendário simples, três funções de voluntários (com passos de segurança se houver menores envolvidos), um resumo de cinco frases para um subsídio e cinco regras simples sobre como o seu grupo vai usar a IA. Retire todas as informações privadas antes de partilhar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que lideram ou querem liderar trabalho comunitário em zonas carenciadas: líderes de bancos alimentares, associações de inquilinos, ministérios de igreja, programas para jovens e grupos de moradores, e pessoal ou membros da direção de pequenas organizações sem fins lucrativos.",
    startingPoint: "Gerem programas com pouco dinheiro e pouco pessoal, e escrevem panfletos, e-mails e relatórios à mão. A maioria usou pouco ou nada um assistente de IA, e poucos têm por escrito uma missão, uma meta que se pode medir, funções de voluntários ou regras de IA.",
    gap: "Os pequenos grupos perdem horas com papelada e perdem subsídios por falta de tempo e de planos claros. A IA pode fazer o rascunho de grande parte deste trabalho, mas os líderes têm de manter seguras as pessoas que servem, verificar cada dado e deixar as decisões nas mãos de pessoas.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 7.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca ou do escritório",
      "Custo: só ferramentas gratuitas ou doadas",
      "Privacidade: nenhum nome, morada, número de telefone, dado de saúde ou de imigração das pessoas servidas na IA",
      "A segurança com menores e adultos vulneráveis segue a política da organização e as regras do estado"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro o curso \"Introdução à IA e Autonomia Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as tarefas que o seu grupo faz todos os meses", action: "identificar em quais a IA pode ajudar a fazer um rascunho e quais precisam de pessoas", standard: "indicando pelo menos três tarefas para a IA e o trabalho humano para o qual ela liberta tempo" },
    { id: "O2", condition: "Com aquilo que o seu grupo faz", action: "escrever uma missão numa frase e uma meta que se pode medir, com a ajuda da IA", standard: "revistas com a sua equipa para dizerem quem, o quê e porquê, e para a meta poder ser contada até uma data" },
    { id: "O3", condition: "Com a meta de um programa ou evento", action: "criar um calendário e uma lista de tarefas com a IA", standard: "acrescentando o que a IA esqueceu e pondo um nome e uma data em cada tarefa" },
    { id: "O4", condition: "Com os trabalhos de voluntário do seu plano", action: "escrever descrições curtas das funções dos voluntários e os passos de segurança de que precisam", standard: "seguindo a política da sua organização quando há menores ou adultos vulneráveis envolvidos e sem usar nomes verdadeiros na IA" },
    { id: "O5", condition: "Com um projeto que precisa de dinheiro", action: "encontrar uma oportunidade de subsídio e fazer com a IA o rascunho de um resumo de cinco frases", standard: "com todos os dados iguais aos seus registos e seguindo as regras do financiador" },
    { id: "O6", condition: "Quando partilha resultados e usa a IA em grupo", action: "escrever uma mensagem de notícias para os apoiantes e cinco regras simples de IA para o seu grupo", standard: "usando histórias só com autorização por escrito e deixando as decisões sobre pessoas nas mãos de pessoas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Liderar e planear com IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que a IA pode fazer por um grupo comunitário",
          minutes: 4,
          goal: "Fazer a lista de três tarefas do seu grupo que tomam muito tempo e em que a IA pode ajudar.",
          text: [
            "Os líderes comunitários passam horas a escrever panfletos, e-mails, notas de reuniões, listas de inscrição e relatórios. Um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, pode fazer o rascunho disto em minutos.",
            "A IA é boa em primeiros rascunhos, resumos, listas de verificação, horários, passar um panfleto para palavras simples e dar ideias. Não é boa a conhecer os seus vizinhos, a julgar o que a sua comunidade precisa de verdade nem a guardar em segurança histórias privadas.",
            "Um bom líder usa a IA para ganhar tempo para o trabalho humano: ouvir, criar confiança e estar presente."
          ],
          words: [["Organização sem fins lucrativos", "uma organização que serve uma missão em vez de dar lucro aos donos."], ["Rascunho", "uma primeira versão que você vai melhorar."]],
          slides: [
            { title: "Onde os líderes gastam tempo", bullets: ["Panfletos, e-mails e notas de reuniões", "Listas de inscrição e relatórios"] },
            { title: "A IA é boa em", bullets: ["Primeiros rascunhos e resumos", "Listas de verificação e horários", "Reescrever com palavras simples e dar ideias"] },
            { title: "A IA não é boa a", bullets: ["Conhecer os seus vizinhos", "Julgar as necessidades reais da comunidade", "Guardar em segurança histórias privadas"] }
          ],
          tryIt: "Escreva as três tarefas que tomam mais tempo ao seu grupo todos os meses. Ao lado de cada uma, escreva como a IA pode ajudar com um primeiro rascunho.",
          youCanNow: "identificar as tarefas do seu grupo que a IA pode tornar mais rápidas e as que precisam de pessoas.",
          quickCheck: [
            { objective: "O1", q: "Em que é que a IA é boa para um grupo comunitário?", options: ["Escrever um primeiro rascunho das notas de uma reunião", "Conhecer os seus vizinhos", "Julgar o que a sua comunidade precisa", "Guardar em segurança histórias privadas"], answer: 0, why: "A IA é boa em rascunhos e resumos; as pessoas é que conhecem a comunidade." },
            { objective: "O1", q: "A IA poupa-lhe três horas por semana de papelada. Qual é o melhor uso desse tempo?", options: ["Mais papelada", "Ouvir as famílias e criar confiança", "Deixar a IA falar com as famílias por você", "Nada"], answer: 1, why: "Os líderes usam a IA para ganhar tempo para o trabalho humano, como ouvir e estar presente." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Uma missão clara e uma meta que se pode medir",
          minutes: 5,
          goal: "Escrever uma missão numa frase e uma meta que se pode medir, com a ajuda da IA.",
          text: [
            "A missão diz numa frase porque o seu grupo existe: quem serve, o que faz e porque é importante. Exemplo: \"Garantimos que nenhuma família do Bairro Leste passa fome, com um banco alimentar gratuito todas as semanas.\"",
            "A meta diz o que vai alcançar e até quando, de uma forma que se pode contar. \"Ajudar mais pessoas\" não se pode medir. \"Servir 150 famílias por mês até junho\" pode.",
            "Peça à IA: \"Isto é o que o nosso grupo faz: [descreva]. Escreva três missões de uma frase com palavras simples e duas metas que se podem medir para os próximos seis meses.\" Depois escolha e reveja com a sua equipa para as palavras soarem como a sua comunidade."
          ],
          steps: ["Descreva quem serve, o que faz e porquê.", "Peça à IA três opções de missão e duas metas que se podem medir.", "Escolha uma de cada com a sua equipa.", "Reveja para soar como a sua comunidade."],
          words: [["Missão", "uma frase que diz porque o seu grupo existe."], ["Meta que se pode medir", "uma meta que você pode contar e verificar até uma data."]],
          slides: [
            { title: "Missão: porque existe", bullets: ["Quem serve", "O que faz", "Porque é importante"] },
            { title: "Meta: o que vai alcançar", bullets: ["Não se pode medir: \"Ajudar mais pessoas\"", "Pode-se medir: \"Servir 150 famílias por mês até junho\""] },
            { title: "A IA faz o rascunho, vocês decidem juntos", bullets: ["Peça três missões e duas metas", "Escolha e reveja com a sua equipa"] }
          ],
          tryIt: "Peça a um assistente de IA três missões e duas metas que se podem medir para o seu grupo. Escolha uma de cada e reveja-as com as suas palavras.",
          youCanNow: "escrever uma missão clara e uma meta que se pode medir para o seu grupo.",
          quickCheck: [
            { objective: "O2", q: "O que faz uma meta poder ser medida?", options: ["Soa inspiradora", "É muito comprida", "Pode-se contar até uma data", "Usa palavras difíceis"], answer: 2, why: "Uma meta que se pode medir diz o que vai alcançar e até quando, de uma forma que se pode contar." },
            { objective: "O2", q: "A missão escrita pela IA usa palavras que os seus membros nunca diriam. O que faz?", options: ["Usa-a mesmo assim", "Pede à IA uma mais comprida", "Desiste da missão", "Revê-a com a sua equipa para soar como a sua comunidade"], answer: 3, why: "A missão deve soar como a sua comunidade, por isso revêem-na juntos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planear um programa ou um evento com IA",
          minutes: 5,
          goal: "Usar a IA para fazer um calendário simples e uma lista de tarefas para um programa ou evento.",
          text: [
            "Quando já tem uma meta, planeie o trabalho. A IA pode transformar uma meta num calendário (o que acontece e quando) e numa lista de tarefas (quem faz o quê).",
            "Exemplo de pedido: \"Vamos fazer uma distribuição de material escolar para 100 crianças a 10 de agosto no centro comunitário. Faça um calendário simples de 6 semanas e uma lista de tarefas com três funções de voluntários. Use frases curtas.\"",
            "Reveja com a sua equipa. Tire os passos que não servem para a sua comunidade, acrescente o que a IA esqueceu (como licenças, tradução ou transporte para os idosos) e ponha um nome e uma data em cada tarefa."
          ],
          steps: ["Diga à IA o evento, a data, o lugar e quantas pessoas.", "Peça um calendário e uma lista de tarefas.", "Reveja com a sua equipa e acrescente o que falta.", "Ponha um nome e uma data em cada tarefa."],
          words: [["Calendário", "uma lista do que acontece e quando, por ordem."], ["Lista de tarefas", "uma lista de trabalhos com quem vai fazer cada um."]],
          slides: [
            { title: "Da meta ao plano", bullets: ["Calendário: o que acontece e quando", "Lista de tarefas: quem faz o quê"] },
            { title: "Exemplo de pedido", bullets: ["Distribuição de material escolar, 100 crianças, 10 de agosto", "Calendário de 6 semanas e lista de tarefas", "Três funções de voluntários, frases curtas"] },
            { title: "Torne o plano seu", bullets: ["Tire o que não serve", "Acrescente o que a IA esqueceu: licenças, tradução, transporte", "Um nome e uma data em cada tarefa"] }
          ],
          tryIt: "Peça à IA um calendário e uma lista de tarefas para um programa ou evento que o seu grupo possa fazer. Acrescente uma coisa que a IA esqueceu e ponha um nome em cada tarefa.",
          youCanNow: "transformar uma meta num calendário e numa lista de tarefas com a IA e a sua equipa.",
          quickCheck: [
            { objective: "O3", q: "O que é uma lista de tarefas?", options: ["Uma lista de quem faz o quê", "Uma lista de doadores", "Um orçamento", "Uma missão"], answer: 0, why: "Uma lista de tarefas mostra cada trabalho e quem o vai fazer." },
            { objective: "O3", q: "O plano da IA para um almoço ao ar livre não fala da licença para usar o parque. O que faz?", options: ["Ignora; a IA sabe mais", "Acrescenta \"verificar a licença\" à lista de tarefas, com um nome e uma data", "Cancela o almoço", "Pede à IA para a pedir"], answer: 1, why: "Você acrescenta o que a IA esqueceu, como licenças, e dá à tarefa um responsável e uma data." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Liderar e planear com IA",
        questions: [
          { objective: "O1", q: "Em que tarefa a IA é boa para um grupo comunitário?", options: ["Saber o que os seus vizinhos precisam", "Fazer o rascunho de um panfleto", "Criar confiança com as famílias", "Guardar em segurança histórias privadas"], answer: 1, why: "A IA é boa em primeiros rascunhos; as pessoas fazem o trabalho das relações." },
          { objective: "O2", q: "Qual destas é uma missão?", options: ["\"Servir 150 famílias até junho\"", "\"Reunião terça-feira às 6\"", "\"Garantimos que nenhuma família do Bairro Leste passa fome, com um banco alimentar gratuito todas as semanas.\"", "\"Comprar mais cadeiras\""], answer: 2, why: "Uma missão diz quem serve, o que faz e porquê." },
          { objective: "O2", q: "Que meta se pode medir?", options: ["\"Ajudar mais pessoas\"", "\"Fazer o bem\"", "\"Ser melhores\"", "\"Servir 150 famílias por mês até junho\""], answer: 3, why: "Pode-se contar e verificar até uma data." },
          { objective: "O3", q: "O plano da IA para o evento esqueceu o transporte para os idosos. O que faz?", options: ["Acrescenta-o ao plano", "Segue o plano da IA exatamente", "Cancela o evento", "Pede à IA para tirar os idosos"], answer: 0, why: "Você conhece a sua comunidade; acrescente o que a IA esqueceu." },
          { objective: "O3", q: "O que deve estar ao lado de cada tarefa da sua lista?", options: ["Um emoji", "Um nome e uma data", "Uma palavra-passe", "Nada"], answer: 1, why: "Os nomes e as datas garantem que as tarefas são feitas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pessoas, dinheiro e confiança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Organizar voluntários e manter todos em segurança",
          minutes: 5,
          goal: "Escrever descrições claras das funções dos voluntários e os passos de segurança.",
          text: [
            "Os voluntários ficam quando sabem o que fazer. A IA pode escrever descrições curtas das funções: qual é o trabalho, quanto tempo leva, que habilidades ajudam e a quem pedir ajuda. Também pode fazer o rascunho de uma mensagem de inscrição e de mensagens de lembrete.",
            "Se o seu programa serve crianças ou adultos vulneráveis, a segurança vem primeiro. Práticas comuns são a verificação de antecedentes dos voluntários, a regra de estarem sempre dois adultos presentes em vez de um adulto sozinho com uma criança, e regras claras para o contacto por telefone e redes sociais. Siga a política da sua organização e as regras do estado, e pergunte à sua seguradora ou a um advogado se tiver dúvidas.",
            "Mantenha privadas as informações dos voluntários e das pessoas que serve. Não cole nomes, números de telefone nem histórias pessoais em ferramentas de IA; use funções e marcadores em vez disso."
          ],
          steps: ["Peça à IA descrições curtas para cada trabalho de voluntário.", "Acrescente passos de segurança se houver menores ou adultos vulneráveis.", "Siga a política da sua organização e as regras do estado.", "Use marcadores nos pedidos à IA, nunca nomes ou números verdadeiros."],
          words: [["Verificação de antecedentes", "uma verificação do registo de uma pessoa antes de ela trabalhar com crianças ou pessoas vulneráveis."], ["Regra dos dois adultos", "uma prática de segurança comum: pelo menos dois adultos estão presentes com as crianças, nunca um sozinho."], ["Adulto vulnerável", "um adulto que pode precisar de mais proteção, como alguns idosos ou pessoas com deficiência."]],
          slides: [
            { title: "Funções claras mantêm os voluntários", bullets: ["Qual é o trabalho e quanto tempo leva", "Habilidades que ajudam", "A quem pedir ajuda"] },
            { title: "Segurança com crianças", bullets: ["Verificação de antecedentes", "Dois adultos presentes, nunca um sozinho", "Regras para o contacto por telefone e redes sociais"] },
            { title: "Siga as regras", bullets: ["A política da sua organização", "As regras do estado", "Pergunte à seguradora ou a um advogado se tiver dúvidas"] },
            { title: "Proteja a privacidade", bullets: ["Nenhum nome ou número verdadeiro na IA", "Use funções e marcadores"] }
          ],
          tryIt: "Peça à IA três descrições curtas de funções de voluntários para o seu plano. Se houver menores envolvidos, acrescente os passos de segurança que a sua organização exige.",
          youCanNow: "escrever funções claras para os voluntários e incluir os passos de segurança de que o seu grupo precisa.",
          quickCheck: [
            { objective: "O4", q: "O que deve ter a descrição da função de um voluntário?", options: ["A morada de casa do voluntário", "Só o nome do trabalho", "Qual é o trabalho, quanto tempo leva e a quem pedir ajuda", "O número de telefone do voluntário"], answer: 2, why: "As funções claras dizem o que fazer, quanto tempo e a quem perguntar." },
            { objective: "O4", q: "Quer que a IA faça o rascunho de uma mensagem de lembrete para os voluntários. O que cola no pedido?", options: ["O nome e o número de telefone de cada voluntário", "Os resultados das verificações de antecedentes", "As moradas de casa deles", "A função, a data e a hora, com marcadores no lugar dos nomes"], answer: 3, why: "Use funções e marcadores nos pedidos à IA, nunca nomes ou números verdadeiros." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Encontrar subsídios e escrever um resumo para um subsídio",
          minutes: 6,
          goal: "Encontrar uma oportunidade de subsídio e fazer o rascunho de um resumo de cinco frases do seu projeto.",
          text: [
            "Os subsídios são dinheiro dado para um fim, que não se devolve. As fontes locais costumam servir melhor os pequenos grupos: fundações comunitárias, empresas locais, bancos, grupos religiosos e programas da cidade ou do condado. A sua biblioteca pode dar ajuda gratuita para procurar subsídios.",
            "O Grants.gov é o site dos subsídios federais dos EUA. A maioria é para organizações, não para pessoas individuais, e nenhum dá ajuda financeira pessoal. Para se candidatar pelo Grants.gov, a sua organização tem de se registar, o que leva tempo, por isso leia os passos de registo no Grants.gov e comece cedo.",
            "A IA pode ajudar a escrever um pequeno resumo do projeto: a necessidade, o que vai fazer, quem ajuda, a sua meta que se pode medir e o valor que pede. Cada dado e cada número têm de ser verdadeiros e iguais aos seus registos. Leia as regras do financiador e use as perguntas, os limites de palavras e o prazo dele."
          ],
          steps: ["Pergunte à sua biblioteca ou fundação comunitária por subsídios locais.", "Procure no Grants.gov se a sua organização está pronta para subsídios federais.", "Peça à IA um resumo de cinco frases: necessidade, plano, quem ajuda, meta, valor.", "Verifique cada dado e siga as regras do financiador."],
          words: [["Subsídio", "dinheiro dado para um fim, que não se devolve (em inglês, grant)."], ["Financiador", "o grupo ou serviço que dá o subsídio."], ["Fundação comunitária", "uma instituição de caridade local que dá subsídios a grupos da sua zona."]],
          sources: [{ name: "Grants.gov: Grant eligibility (quem pode receber subsídios)", url: "https://www.grants.gov/learn-grants/grant-eligibility" }],
          slides: [
            { title: "Onde os pequenos grupos encontram subsídios", bullets: ["Fundações comunitárias", "Empresas locais, bancos, grupos religiosos", "Programas da cidade ou do condado; pergunte na biblioteca"] },
            { title: "Subsídios federais: Grants.gov", bullets: ["Sobretudo para organizações, não para pessoas individuais", "O registo leva tempo: comece cedo", "Leia os passos no Grants.gov"] },
            { title: "Um resumo de cinco frases", bullets: ["A necessidade e o seu plano", "Quem ajuda e a sua meta", "O valor que pede"] },
            { title: "Seja honesto", bullets: ["Cada dado tem de ser verdadeiro", "Siga as regras e o prazo do financiador"] }
          ],
          tryIt: "Encontre um subsídio a que o seu grupo se possa candidatar (local ou no Grants.gov). Peça à IA o rascunho de um resumo de cinco frases do seu projeto e depois verifique cada dado.",
          youCanNow: "encontrar uma oportunidade de subsídio e fazer o rascunho de um resumo honesto do projeto.",
          quickCheck: [
            { objective: "O5", q: "O que é um subsídio?", options: ["Dinheiro para um fim, que não se devolve", "Um empréstimo com juros baixos", "Uma doação de comida", "Um formulário de impostos"], answer: 0, why: "Um subsídio é dinheiro dado para um fim, que não se devolve." },
            { objective: "O5", q: "Um financiador permite 100 palavras e a IA escreveu 180. O que faz?", options: ["Envia as 180 palavras", "Corta para caber no limite de 100 palavras do financiador", "Aumenta para 200 palavras", "Não envia o resumo"], answer: 1, why: "Siga as regras do financiador, incluindo os limites de palavras." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dar notícias aos apoiantes e definir regras de IA para o grupo",
          minutes: 5,
          goal: "Escrever uma mensagem de notícias para os apoiantes e cinco regras simples de IA para o seu grupo.",
          text: [
            "Os apoiantes voltam a dar quando veem resultados. A IA pode transformar os seus números numa mensagem curta e calorosa: \"Este mês servimos 142 famílias e distribuímos 300 mochilas. Obrigado!\" Partilhe histórias só com autorização por escrito e mude os nomes se a pessoa quiser.",
            "Todos os grupos que usam IA devem combinar algumas regras simples. Por exemplo: 1) Nunca pôr na IA nomes, moradas, números de telefone, dados de saúde ou de imigração das pessoas que servimos. 2) Uma pessoa lê e verifica tudo antes de sair. 3) Não deixamos a IA decidir quem recebe ajuda. 4) Se perguntarem, dizemos quando uma mensagem foi escrita sobretudo pela IA. 5) Usamos só ferramentas aprovadas, gratuitas ou doadas.",
            "Escreva as suas regras, partilhe-as com os voluntários e reveja-as uma vez por ano."
          ],
          steps: ["Peça à IA para transformar os seus resultados numa curta mensagem de agradecimento.", "Use histórias só com autorização por escrito.", "Escreva cinco regras de IA com a sua equipa.", "Partilhe as regras com os voluntários e reveja-as todos os anos."],
          words: [["Apoiante", "alguém que dá tempo, dinheiro ou ajuda ao seu grupo."], ["Política", "um conjunto de regras por escrito que o seu grupo combina seguir."]],
          slides: [
            { title: "As notícias mantêm os apoiantes", bullets: ["Partilhe números verdadeiros", "Agradeça", "Histórias só com autorização por escrito"] },
            { title: "Cinco regras simples de IA", bullets: ["Nenhum dado privado das pessoas que servimos", "Uma pessoa verifica tudo", "A IA não decide quem recebe ajuda"] },
            { title: "Mantenha as regras vivas", bullets: ["Seja aberto sobre o uso da IA se perguntarem", "Use ferramentas aprovadas", "Partilhe com os voluntários; reveja todos os anos"] }
          ],
          tryIt: "Tarefa final: junte tudo num plano de programa de uma página: missão, meta que se pode medir, calendário, três funções de voluntários com passos de segurança, um resumo de cinco frases para um subsídio e as cinco regras de IA do seu grupo. Retire tudo o que for privado antes de partilhar.",
          youCanNow: "liderar um projeto comunitário com um plano claro e um uso seguro e honesto da IA.",
          quickCheck: [
            { objective: "O6", q: "Quando pode partilhar a história de uma família numa mensagem aos apoiantes?", options: ["Sempre que ajude a angariar fundos", "Se mudar uma palavra", "Só com a autorização por escrito da família", "Se a história for curta"], answer: 2, why: "As histórias só se partilham com autorização por escrito." },
            { objective: "O6", q: "Um membro da direção sugere deixar a IA escolher que famílias recebem ajuda primeiro. O que diz a vossa regra de IA?", options: ["Sim, a IA é justa", "Sim, se for mais rápido", "Só nos dias de muito trabalho", "Não; são as pessoas que decidem quem recebe ajuda"], answer: 3, why: "A IA não toma decisões sobre quem recebe ajuda; as pessoas é que decidem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Pessoas, dinheiro e confiança",
        questions: [
          { objective: "O4", q: "O seu programa serve crianças. Qual é uma prática de segurança comum?", options: ["Um adulto sozinho com cada criança", "Os voluntários enviam mensagens privadas às crianças", "Verificação de antecedentes e dois adultos presentes", "Não são precisas regras"], answer: 2, why: "A verificação de antecedentes e a regra dos dois adultos são proteções comuns; siga a política da sua organização." },
          { objective: "O4", q: "Pode colar na IA o nome e a história de uma pessoa que serve para escrever um relatório?", options: ["Sim, sempre", "Só se for curto", "Sim, se a IA for gratuita", "Não; use marcadores e deixe os dados privados de fora"], answer: 3, why: "Proteja as pessoas que serve deixando os dados delas fora das ferramentas de IA." },
          { objective: "O5", q: "A maior parte do financiamento no Grants.gov é para:", options: ["Organizações", "Contas pessoais", "A renda de pessoas individuais", "Comprar carros"], answer: 0, why: "O Grants.gov diz que a maioria das oportunidades é para organizações, não para pessoas individuais." },
          { objective: "O5", q: "A IA escreveu que o seu grupo serviu 500 famílias, mas os seus registos dizem 312. Você:", options: ["Mantém 500, soa melhor", "Muda para 312", "Tira todos os números", "Pede à IA um número maior"], answer: 1, why: "Cada dado num pedido de subsídio ou numa mensagem tem de ser igual aos seus registos." },
          { objective: "O6", q: "Qual é uma boa regra de IA para um grupo comunitário?", options: ["A IA decide quem recebe ajuda", "Ninguém verifica o que a IA escreve", "Uma pessoa lê e verifica tudo antes de sair", "Colar na IA todos os processos das pessoas servidas"], answer: 2, why: "A revisão por uma pessoa mantém o seu grupo correto e de confiança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Liderança de Organizações sem Fins Lucrativos",
    questions: [
      { objective: "O1", q: "Que tarefa é melhor deixar para as pessoas, e não para a IA?", options: ["Criar confiança com as famílias", "Fazer o rascunho de um panfleto", "Fazer uma lista de verificação", "Resumir as notas de uma reunião"], answer: 0, why: "As relações e a confiança são trabalho humano." },
      { objective: "O1", q: "Porque é que os líderes devem usar a IA para rascunhos?", options: ["Para substituir a equipa", "Para ganhar tempo para ouvir e estar presente", "Para não terem de verificar o trabalho", "Para recolher dados privados"], answer: 1, why: "A IA poupa tempo de escrita para os líderes se concentrarem nas pessoas." },
      { objective: "O2", q: "Uma missão diz:", options: ["A hora da reunião", "O saldo do banco", "Quem serve, o que faz e porquê", "Os números de telefone dos voluntários"], answer: 2, why: "É esse o objetivo de uma missão." },
      { objective: "O2", q: "Que meta pode medir?", options: ["\"Fazer a diferença\"", "\"Ajudar muito\"", "\"Ser conhecidos\"", "\"Distribuir 300 mochilas até 10 de agosto\""], answer: 3, why: "Tem um número e uma data." },
      { objective: "O2", q: "Depois de a IA sugerir missões, você deve:", options: ["Escolher e rever com a sua equipa", "Usar a primeira sem ler", "Publicar as três", "Ignorar a sua equipa"], answer: 0, why: "A sua equipa garante que soa como a sua comunidade." },
      { objective: "O3", q: "Um calendário mostra:", options: ["Quem doou", "O que acontece e quando, por ordem", "Só o seu orçamento", "As moradas dos voluntários"], answer: 1, why: "Um calendário põe os passos por ordem." },
      { objective: "O3", q: "Que informação deve dar à IA para planear um evento?", options: ["Os números de telefone dos voluntários", "As moradas das famílias", "O evento, a data, o lugar e o número de pessoas", "Os dados de acesso ao seu banco"], answer: 2, why: "Esses dados ajudam sem partilhar informações privadas." },
      { objective: "O3", q: "O plano da IA não inclui tradução para as famílias que falam espanhol. Você:", options: ["Segue a IA exatamente", "Cancela", "Tira essas famílias", "Acrescenta a tradução ao plano"], answer: 3, why: "Você acrescenta o que a sua comunidade precisa." },
      { objective: "O4", q: "Uma boa descrição da função de um voluntário inclui:", options: ["Qual é o trabalho, quanto tempo leva e a quem perguntar", "O número da Segurança Social (Social Security) do voluntário", "Nada", "Só o nome do evento"], answer: 0, why: "As funções claras ajudam os voluntários a ter sucesso." },
      { objective: "O4", q: "A regra dos dois adultos quer dizer:", options: ["Dois voluntários partilham um telefone", "Pelo menos dois adultos estão presentes com as crianças, nunca um sozinho", "Dois adultos assinam cada cheque", "Só dois adultos podem ser voluntários"], answer: 1, why: "É uma prática comum que protege as crianças e os voluntários." },
      { objective: "O4", q: "Quando tem dúvidas sobre as regras de segurança para trabalhar com menores, deve:", options: ["Inventar as suas próprias", "Ignorá-las", "Seguir a política da sua organização e as regras do estado, e perguntar à seguradora ou a um advogado", "Perguntar a um amigo de um voluntário"], answer: 2, why: "A política oficial e os profissionais dão a resposta certa." },
      { objective: "O5", q: "Um subsídio é:", options: ["Um empréstimo que se devolve com juros", "Um cartão de crédito", "Uma conta de impostos", "Dinheiro para um fim, que não se devolve"], answer: 3, why: "Os subsídios não se devolvem." },
      { objective: "O5", q: "Qual é um lugar local onde os pequenos grupos costumam encontrar subsídios?", options: ["Uma fundação comunitária", "Um anúncio que aparece no ecrã", "Um agiota de empréstimos rápidos", "Uma SMS de um desconhecido"], answer: 0, why: "As fundações comunitárias dão subsídios a grupos locais." },
      { objective: "O5", q: "Sobre o registo para subsídios federais no Grants.gov, o mais sensato é:", options: ["Esperar até à véspera do prazo", "Começar cedo, porque o registo leva tempo", "Não fazer o registo", "Pagar a um desconhecido para o fazer"], answer: 1, why: "O registo leva tempo, por isso comece cedo." },
      { objective: "O5", q: "Um resumo de cinco frases para um subsídio inclui:", options: ["Só o seu nome", "Os números de telefone dos voluntários", "A necessidade, o plano, quem ajuda, a meta e o valor", "Uma lista de queixas"], answer: 2, why: "Essas partes dizem ao financiador o que ele precisa de saber." },
      { objective: "O5", q: "Antes de enviar um resumo que a IA ajudou a escrever, você:", options: ["Envia sem ler", "Põe números maiores", "Tira o prazo", "Verifica cada dado e segue as regras do financiador"], answer: 3, why: "A honestidade e o cumprimento das regras protegem o seu grupo." },
      { objective: "O6", q: "Quer partilhar a história de uma família num boletim. Precisa de:", options: ["A autorização por escrito da família", "Nada", "A autorização da IA", "Só a opinião de um voluntário"], answer: 0, why: "As histórias só se partilham com autorização." },
      { objective: "O6", q: "Qual é uma boa regra de IA?", options: ["Pôr dados de imigração na IA", "Nunca pôr na IA nomes, moradas ou dados de saúde das pessoas que servimos", "Deixar a IA decidir quem recebe comida", "Nunca verificar o que a IA escreve"], answer: 1, why: "Os dados privados ficam fora das ferramentas de IA." },
      { objective: "O6", q: "A IA deve decidir quem recebe ajuda do seu programa?", options: ["Sim, sempre", "Sim, se for gratuita", "Não; são as pessoas que tomam essas decisões", "Só aos fins de semana"], answer: 2, why: "As decisões sobre a ajuda às pessoas precisam de bom senso humano e de justiça." },
      { objective: "O6", q: "Com que frequência o seu grupo deve rever as regras de IA?", options: ["Nunca", "De dez em dez anos", "Só depois de um problema", "Cerca de uma vez por ano"], answer: 3, why: "As ferramentas mudam, por isso reveja as suas regras com regularidade." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 8, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Missão e meta", objective: "O2", notYet: "Não há missão, ou a meta não se pode contar.", meets: "Uma missão numa frase com quem, o quê e porquê, e uma meta com um número e uma data.", exceeds: "Revista com a equipa para soar como a comunidade." },
      { name: "Calendário", objective: "O3", notYet: "Não há calendário, ou há tarefas sem nome ou sem data.", meets: "Um calendário simples com um nome e uma data em cada tarefa.", exceeds: "Inclui algo que a IA esqueceu, como licenças, tradução ou transporte." },
      { name: "Funções dos voluntários e segurança", objective: "O4", notYet: "Menos de três funções, ou nenhum passo de segurança quando há menores envolvidos.", meets: "Três funções claras, com os passos de segurança da organização onde são precisos.", exceeds: "As funções dizem quanto tempo leva o trabalho e a quem pedir ajuda." },
      { name: "Resumo para o subsídio", objective: "O5", notYet: "Faltam partes, ou há dados que não batem com os registos.", meets: "Cinco frases: necessidade, plano, quem ajuda, meta e valor, tudo verificado.", exceeds: "Cabe no limite de palavras e responde às perguntas de um financiador verdadeiro." },
      { name: "Regras de IA e privacidade", objective: "O6", notYet: "Menos de cinco regras, ou ficaram informações privadas no plano.", meets: "Cinco regras de IA claras e nenhuma informação privada no plano.", exceeds: "As regras incluem uma revisão anual e estão prontas para partilhar com os voluntários." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Grupos que adotam regras de IA por escrito em 30 dias (inquérito de seguimento)",
      "Grupos que se candidatam a pelo menos um subsídio em 90 dias, e subsídios ganhos",
      "Grupos que dizem ter mais voluntários ou mais pessoas servidas depois de usarem o seu plano"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone, ou um computador da biblioteca ou do escritório",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Dados sobre um programa verdadeiro ou de prática: quem serve, resultados e registos",
      "Papel ou uma ferramenta de documentos gratuita para o plano de uma página",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Ponha a trabalhar juntas as pessoas do mesmo grupo, para o plano e as regras de IA serem partilhados.",
      "Verifique se algum pedido tem nomes, números de telefone, dados de saúde ou de imigração das pessoas servidas.",
      "Para programas com menores, indique a política de segurança da própria organização; este curso não a substitui.",
      "Traga uma lista das fundações comunitárias locais e da ajuda para subsídios na biblioteca.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
