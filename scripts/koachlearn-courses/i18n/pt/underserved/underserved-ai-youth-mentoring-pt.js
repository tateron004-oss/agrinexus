"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-ai-youth-mentoring.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "underserved-ai-youth-mentoring-pt",
  lang: "pt",
  translationOf: "underserved-ai-youth-mentoring",
  category: "Undeserved Community",
  name: "IA para a Mentoria de Jovens",
  skills: "Seguir as regras de segurança na mentoria de menores, Planear uma sessão de mentoria com IA, Fazer boas perguntas e ouvir, Ensinar o uso honesto da IA na escola, Explorar profissões juntos, Acompanhar o progresso do mentorado",
  outcome: "planear e conduzir uma sessão de mentoria segura de 45 minutos com um jovem, usando um assistente de IA gratuito para preparar a atividade e as perguntas, e mostrar ao seu mentorado como usar a IA com honestidade para a escola e para os objetivos de carreira.",
  about: [
    "Os jovens de todos os bairros saem-se melhor quando têm um adulto atento do seu lado. Este curso é para mentores voluntários em igrejas, centros comunitários, escolas, ligas desportivas e programas para jovens, incluindo mentores que são novos na tecnologia.",
    "Você vai aprender as regras de segurança que protegem os jovens e você, como planear uma sessão com um assistente de IA gratuito, como fazer perguntas que abrem uma conversa verdadeira, como ajudar o seu mentorado a usar a IA com honestidade na escola, e como explorar profissões e acompanhar o progresso juntos.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" que constrói um plano de sessão real. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Siga sempre as regras do seu programa de mentoria; elas vêm antes de tudo o que está neste curso."
  ],
  finalTask: "Escreva e conduza (ou faça um ensaio com outro adulto) um plano de sessão de mentoria de 45 minutos feito com a ajuda de um assistente de IA gratuito: um objetivo, uma pergunta para começar, uma atividade, três perguntas abertas, uma pequena demonstração do uso honesto da IA nos trabalhos de casa ou nas profissões, e uma nota de progresso de uma linha. O plano tem de seguir as regras de segurança do seu programa e não ter nenhuma informação privada sobre o jovem.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Mentores voluntários em comunidades carenciadas, em igrejas, centros comunitários, escolas, ligas desportivas e programas para jovens, incluindo mentores que são novos na tecnologia.",
    startingPoint: "Preocupam-se com os jovens e talvez tenham criado filhos ou treinado equipas, mas não tiveram formação em segurança na mentoria, perguntas abertas ou planeamento de uma sessão. Muitos usaram pouco a IA e não têm a certeza de como os jovens a devem usar na escola.",
    gap: "Os jovens saem-se melhor com um adulto atento, mas os mentores precisam de hábitos seguros, de um plano para cada sessão e de uma forma de orientar o uso honesto da IA na escola e nas profissões. Sem isto, as sessões perdem o rumo, a privacidade fica em risco e os jovens podem usar mal a IA.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 7.º ano)",
      "Aparelhos: um smartphone ou um computador do programa",
      "As regras do programa vêm primeiro: verificação de antecedentes, encontros em locais públicos, contacto aprovado e passos de denúncia",
      "Privacidade: nenhum nome, escola, fotografia ou história privada de um jovem na IA ou em notas soltas",
      "As escolas e as ferramentas de IA têm as suas próprias regras e limites de idade, confirmados com o professor e com um dos pais ou o encarregado de educação"
    ],
    prerequisites: "A verificação de antecedentes e a formação do seu próprio programa de mentoria. Quem é novo nos assistentes de IA pode fazer primeiro o curso \"Introdução à IA e Autonomia Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Sempre que se encontrar com um jovem", action: "seguir as regras de segurança do seu programa e os passos a dar se um jovem lhe contar que está a sofrer algum mal", standard: "dizendo pelo menos cinco regras e os passos de denúncia sem ajuda" },
    { id: "O2", condition: "Usando um assistente de IA gratuito", action: "planear uma sessão de 45 minutos com um início, uma atividade, uma conversa e os próximos passos", standard: "dando à IA só dados gerais e verificando se o plano é seguro, barato e adequado" },
    { id: "O3", condition: "Numa conversa com um jovem", action: "fazer perguntas abertas e repetir o que ouviu antes de dar conselhos", standard: "usando pelo menos três perguntas abertas com as suas próprias palavras" },
    { id: "O4", condition: "Quando um jovem usa a IA na escola", action: "mostrar o uso honesto da IA para explicar, fazer perguntas de treino e dar comentários, e verificar as respostas dela", standard: "seguindo as regras da escola e da ferramenta e nunca entregando o trabalho da IA" },
    { id: "O5", condition: "Com os interesses de um jovem", action: "explorar profissões com a IA e verificar uma em bls.gov/ooh", standard: "terminando com um pequeno próximo passo e uma data" },
    { id: "O6", condition: "Depois de cada sessão", action: "escrever uma nota de progresso curta e privada e celebrar uma conquista", standard: "usando só as iniciais e nunca colando as notas na IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Mentoria segura e forte com IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "O papel do mentor e as regras de segurança",
          minutes: 5,
          goal: "Dizer as regras de segurança que vai seguir sempre que se encontrar com um jovem.",
          text: [
            "Um mentor é um adulto de confiança que ouve, encoraja e ajuda um jovem a definir e a alcançar objetivos. Você não é o pai ou a mãe, o professor nem o terapeuta dele; é um guia constante e atento.",
            "Os programas protegem os jovens e os mentores com regras. Algumas comuns: uma verificação de antecedentes antes de começar, encontros em locais públicos ou aprovados, outro adulto por perto em vez de ficar a sós com um jovem, contacto só pelos meios aprovados, e nunca dar boleias, presentes ou dinheiro, a não ser que o seu programa o permita. A regra a seguir é a do seu programa.",
            "Se um jovem lhe contar que está a ser magoado ou que está em perigo, mantenha a calma, ouça, não prometa guardar segredo e siga logo os passos de denúncia do seu programa. Numa emergência, ligue para o 911 (o número de emergência nos Estados Unidos). A linha nacional Childhelp contra o abuso de crianças é o (800) 422-4453."
          ],
          steps: ["Faça a verificação de antecedentes e a formação do seu programa.", "Encontre-se só em locais públicos ou aprovados, com outro adulto por perto.", "Use só os meios aprovados para contactar o seu mentorado.", "Se um jovem lhe contar que está a sofrer algum mal: ouça, não prometa segredo e siga os passos de denúncia."],
          words: [["Mentor", "um adulto de confiança que orienta e encoraja um jovem."], ["Mentorado", "o jovem que recebe a mentoria."], ["Verificação de antecedentes", "uma consulta do registo de uma pessoa antes de ela trabalhar com jovens."]],
          sources: [{ name: "Childhelp National Child Abuse Hotline", url: "https://www.childhelphotline.org/" }, { name: "MENTOR: Elements of Effective Practice for Mentoring", url: "https://www.mentoring.org/resource/elements-of-effective-practice-for-mentoring/" }],
          slides: [
            { title: "Um mentor é", bullets: ["Um adulto atento e de confiança", "Alguém que ouve e encoraja", "Não é pai ou mãe, professor nem terapeuta"] },
            { title: "Regras de segurança comuns", bullets: ["Primeiro, a verificação de antecedentes", "Locais públicos ou aprovados, com outro adulto por perto", "Só contacto aprovado; sem boleias nem presentes, a não ser que seja permitido"] },
            { title: "Se um jovem contar que sofre algum mal", bullets: ["Mantenha a calma e ouça", "Não prometa segredo", "Siga os passos de denúncia; emergências: 911"] },
            { title: "As regras do seu programa vêm primeiro", bullets: ["Linha Childhelp: (800) 422-4453"] }
          ],
          tryIt: "Encontre as regras de mentoria do seu programa (ou pergunte ao coordenador). Escreva cinco regras que vai seguir sempre que se encontrar com o seu mentorado.",
          youCanNow: "explicar o papel de um mentor e as regras de segurança que segue.",
          quickCheck: [
            { objective: "O1", q: "Qual é o papel de um mentor?", options: ["Um guia constante e atento que ouve e encoraja", "Substituir o pai ou a mãe", "Ser terapeuta", "Ser um professor que dá notas"], answer: 0, why: "Um mentor é um adulto de confiança que orienta, não um pai, professor ou terapeuta." },
            { objective: "O1", q: "O seu mentorado pede uma boleia para casa depois de uma sessão. O que faz?", options: ["Dá a boleia; é um gesto simpático", "Segue as regras do seu programa sobre boleias", "Pede-lhe para guardar segredo", "Deixa-o ir a pé sozinho à noite"], answer: 1, why: "Nunca dê boleias a não ser que o seu programa o permita; a regra é a do programa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Planear uma sessão com IA",
          minutes: 5,
          goal: "Usar um assistente de IA gratuito para planear uma sessão de 45 minutos com um objetivo claro.",
          text: [
            "Uma boa sessão tem quatro partes: um início para descontrair (5 minutos), uma atividade (20 minutos), uma conversa sobre o que aprenderam (15 minutos) e um plano para a próxima vez (5 minutos).",
            "Um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, pode sugerir atividades. Descreva o jovem só em termos gerais: idade, interesses e objetivo. Exemplo: \"Planeie uma sessão de mentoria de 45 minutos para um jovem de 14 anos que adora basquetebol e quer subir a nota a matemática. Inclua um início para descontrair, uma atividade barata e três perguntas.\"",
            "Nunca dê à IA o nome, a escola, a morada, fotografias, problemas de família do jovem, nem nada que ele lhe tenha contado em confiança. Depois verifique o plano: é seguro, gratuito ou barato, e adequado a este jovem?"
          ],
          steps: ["Escolha um objetivo para a sessão.", "Descreva o mentorado só em termos gerais: idade, interesses, objetivo.", "Peça à IA um início, uma atividade e perguntas.", "Verifique se o plano é seguro, barato e adequado, e mude o que não servir."],
          words: [["Sessão", "um encontro entre um mentor e um mentorado."], ["Início para descontrair", "um começo curto e fácil que ajuda as pessoas a ficarem à vontade."]],
          slides: [
            { title: "Uma sessão de 45 minutos", bullets: ["Início: 5 minutos", "Atividade: 20 minutos", "Conversa: 15 minutos; próximos passos: 5"] },
            { title: "Peça à IA com dados gerais", bullets: ["Idade, interesses, objetivo", "Peça um início, uma atividade e perguntas"] },
            { title: "Nunca partilhe com a IA", bullets: ["Nome, escola, morada ou fotografias", "Problemas de família ou o que lhe contaram em confiança"] },
            { title: "Verifique o plano", bullets: ["É seguro?", "É gratuito ou barato?", "É adequado a este jovem?"] }
          ],
          tryIt: "Peça à IA para planear uma sessão de 45 minutos para um jovem que acompanha ou que poderá acompanhar, usando só dados gerais. Mude uma parte para servir melhor.",
          youCanNow: "planear uma sessão de mentoria com IA protegendo a privacidade do jovem.",
          quickCheck: [
            { objective: "O2", q: "Quanto tempo dura a atividade no plano de sessão de 45 minutos?", options: ["5 minutos", "10 minutos", "20 minutos", "40 minutos"], answer: 2, why: "O plano tem 5 minutos de início, 20 minutos de atividade, 15 minutos de conversa e 5 minutos de próximos passos." },
            { objective: "O2", q: "A IA sugere uma ida paga a um parque de diversões para a sua sessão. O que faz?", options: ["Faz a reserva", "Pede à família do mentorado para pagar", "Usa a ideia como está", "Troca por uma atividade gratuita ou barata que sirva"], answer: 3, why: "Você verifica se o plano da IA é seguro, barato e adequado, e muda o que não servir." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer boas perguntas e ouvir de verdade",
          minutes: 5,
          goal: "Escrever três perguntas abertas e praticar ouvir sem querer resolver tudo.",
          text: [
            "As perguntas fechadas recebem respostas de uma palavra: \"A escola correu bem?\" \"Sim.\" As perguntas abertas convidam a uma resposta verdadeira: \"Qual foi a melhor parte da sua semana?\" \"Em que coisa quer melhorar?\"",
            "Ouvir é mais importante do que falar. Olhe para o jovem, guarde o telefone, acene com a cabeça e repita o que ouviu: \"Então o teste de matemática pareceu injusto porque estudou o capítulo errado?\" Não se apresse a resolver tudo; pergunte o que ele acha que pode tentar.",
            "A IA pode sugerir formas de começar uma conversa para diferentes estados de espírito e interesses. Peça-lhe dez perguntas abertas para um adolescente que adora música e depois escolha as três que soam mais como você."
          ],
          steps: ["Transforme as perguntas fechadas em perguntas abertas.", "Guarde o telefone e dê toda a sua atenção.", "Repita o que ouviu.", "Pergunte o que ele acha que pode tentar antes de dar conselhos."],
          words: [["Pergunta aberta", "uma pergunta a que não se pode responder só com sim ou não."], ["Escuta ativa", "ouvir com atenção e repetir o que ouviu."]],
          slides: [
            { title: "Fechada e aberta", bullets: ["Fechada: \"A escola correu bem?\"", "Aberta: \"Qual foi a melhor parte da sua semana?\""] },
            { title: "Ouça de verdade", bullets: ["Telefone guardado, olhos no jovem", "Acene e repita o que ouviu", "Pergunte o que ele pode tentar antes de aconselhar"] },
            { title: "IA para começar conversas", bullets: ["Peça dez perguntas abertas", "Escolha três que soam como você"] }
          ],
          tryIt: "Peça à IA dez perguntas abertas para um jovem com um passatempo que você conhece. Escolha três e reescreva-as com as suas próprias palavras.",
          youCanNow: "fazer perguntas abertas e ouvir de uma forma que ajuda os jovens a falar.",
          quickCheck: [
            { objective: "O3", q: "O que é uma pergunta aberta?", options: ["Uma que convida a uma resposta verdadeira, não só sim ou não", "Uma pergunta com uma só resposta certa", "Uma pergunta só sobre notas", "Uma pergunta feita em voz alta"], answer: 0, why: "As perguntas abertas convidam os jovens a partilhar mais do que uma palavra." },
            { objective: "O3", q: "O seu mentorado diz que o treino foi horrível. O que diz primeiro?", options: ["\"Sai da equipa e pronto.\"", "\"Então o treino foi mesmo difícil hoje. O que aconteceu?\"", "\"Eu já tive dias piores.\"", "\"Vamos falar de outra coisa.\""], answer: 1, why: "Repetir o que ouviu e perguntar mais mostra que está a ouvir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Mentoria segura e forte com IA",
        questions: [
          { objective: "O1", q: "Qual é uma regra de segurança comum na mentoria?", options: ["Encontrar-se a sós no seu carro", "Encontrar-se em locais públicos ou aprovados com outro adulto por perto", "Enviar mensagens privadas tarde da noite", "Dar dinheiro quando pedem"], answer: 1, why: "Locais públicos ou aprovados com outro adulto por perto protegem toda a gente." },
          { objective: "O1", q: "Um mentorado conta-lhe que alguém em casa o está a magoar e pede-lhe para guardar segredo. Você:", options: ["Promete guardar o segredo", "Ignora", "Ouve, não promete segredo e segue os passos de denúncia do seu programa", "Publica sobre isso na internet"], answer: 2, why: "A segurança vem primeiro; siga logo os passos de denúncia." },
          { objective: "O2", q: "Que dado pode dar à IA quando planeia uma sessão?", options: ["O nome completo do mentorado", "A escola e a morada dele", "Uma história que ele lhe contou em confiança", "\"Um jovem de 14 anos que adora basquetebol\""], answer: 3, why: "Dados gerais como a idade e os interesses chegam." },
          { objective: "O3", q: "Qual é uma pergunta aberta?", options: ["\"Em que coisa quer melhorar?\"", "\"A escola correu bem?\"", "\"Está cansado?\"", "\"Já comeu?\""], answer: 0, why: "Não se pode responder com sim ou não." },
          { objective: "O3", q: "O seu mentorado está chateado com uma nota. Um bom primeiro passo é:", options: ["Dizer-lhe exatamente o que fazer", "Ouvir e repetir o que ouviu", "Ver o seu telefone", "Mudar de assunto"], answer: 1, why: "Ouvir primeiro ajuda-o a sentir-se ouvido e a pensar no assunto." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ajudar os jovens a usar bem a IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Uso honesto da IA na escola",
          minutes: 5,
          goal: "Mostrar a um jovem como usar a IA como explicador, e não para fazer o trabalho por ele.",
          text: [
            "Muitos alunos já usam IA. As escolas têm regras diferentes: algumas permitem-na para certas tarefas, outras não. Confirme sempre primeiro as regras da escola e do professor. Muitas ferramentas de IA também têm uma idade mínima e podem precisar da autorização de um dos pais ou do encarregado de educação no caso dos adolescentes; confirme as condições de cada ferramenta com os pais ou o encarregado de educação.",
            "Uso honesto quer dizer que a IA o ajuda a aprender, e não que faz o trabalho por si. Bons usos: \"Explique as frações como se eu tivesse 12 anos.\" \"Faça-me perguntas sobre estas palavras de vocabulário.\" \"Dê-me comentários sobre o meu parágrafo, mas não o reescreva.\" Copiar as respostas da IA e entregá-las como suas é fazer batota.",
            "Ensine-os também a verificar a IA. Ela pode estar errada. Comparem com o livro escolar, os apontamentos das aulas ou o professor."
          ],
          steps: ["Confirme as regras da escola e do professor sobre a IA.", "Confirme as regras de idade da ferramenta com um dos pais ou o encarregado de educação.", "Use a IA para explicar, fazer perguntas de treino ou dar comentários.", "Nunca entregue o trabalho da IA como seu.", "Verifique as respostas com os materiais das aulas."],
          words: [["Explicador", "alguém ou algo que o ajuda a aprender, e não que faz o trabalho por si."], ["Batota", "entregar um trabalho que não é seu como se fosse."]],
          slides: [
            { title: "Primeiro, as regras", bullets: ["Regras da escola e do professor sobre a IA", "Limites de idade da ferramenta e autorização dos pais"] },
            { title: "A IA como explicador", bullets: ["\"Explique as frações como se eu tivesse 12 anos\"", "\"Faça-me perguntas sobre estas palavras\"", "\"Dê comentários, não reescreva\""] },
            { title: "Não está certo", bullets: ["Copiar as respostas da IA como suas", "Confiar na IA sem verificar"] }
          ],
          tryIt: "Com o seu mentorado (ou sozinho, para praticar), peça à IA para explicar um tema da escola com palavras simples e depois fazer-lhe três perguntas. Verifique uma resposta com um livro escolar ou com os apontamentos das aulas.",
          youCanNow: "mostrar a um jovem como usar a IA com honestidade para ajudar no estudo.",
          quickCheck: [
            { objective: "O4", q: "Qual é um bom pedido à IA para a escola?", options: ["\"Escreva a minha redação por mim.\"", "\"Faça os meus trabalhos de casa de matemática.\"", "\"Dê-me comentários sobre o meu parágrafo, mas não o reescreva.\"", "\"Responda às perguntas do teste.\""], answer: 2, why: "Pedir comentários ajuda o aluno a aprender enquanto faz o seu próprio trabalho." },
            { objective: "O4", q: "O seu mentorado de 12 anos quer inscrever-se numa ferramenta de IA. O que faz primeiro?", options: ["Inscreve-o com o seu e-mail", "Diz-lhe para mentir sobre a idade", "Ignora as regras da escola", "Confirma as regras de idade da ferramenta com um dos pais ou o encarregado de educação"], answer: 3, why: "Muitas ferramentas de IA têm regras de idade que precisam da confirmação dos pais ou do encarregado de educação." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Explorar profissões e objetivos juntos",
          minutes: 5,
          goal: "Usar a IA e um site oficial para explorar uma profissão com o seu mentorado.",
          text: [
            "Os jovens muitas vezes só conhecem as profissões que veem à sua volta. Explorar profissões abre portas. Comece pelo que eles adoram: jogos, música, desporto, consertar coisas, ajudar pessoas, desenhar.",
            "Pergunte à IA: \"Liste cinco profissões para um adolescente que adora videojogos e arte. Para cada uma, diga numa frase o que é o trabalho e o que se deve estudar.\" Depois procurem juntos uma profissão no Occupational Outlook Handbook em bls.gov/ooh, o guia gratuito do governo dos Estados Unidos sobre profissões, para verificar o salário, a formação e as perspetivas de emprego.",
            "Transforme o interesse num pequeno objetivo: entrar num clube, fazer uma aula gratuita na biblioteca, falar com alguém que faz esse trabalho ou experimentar uma lição gratuita na internet."
          ],
          steps: ["Pergunte o que ele adora.", "Peça à IA cinco profissões ligadas a isso.", "Procurem juntos uma delas em bls.gov/ooh.", "Defina um pequeno próximo passo com uma data."],
          words: [["Profissão", "o tipo de trabalho que alguém faz durante muitos anos."], ["Perspetivas de emprego", "quanto se espera que uma profissão cresça."]],
          sources: [{ name: "U.S. Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          slides: [
            { title: "Comece pelo que eles adoram", bullets: ["Jogos, música, desporto", "Consertar coisas, ajudar pessoas, arte"] },
            { title: "Explore com a IA, verifique no site oficial", bullets: ["Peça à IA cinco profissões ligadas a isso", "Verifique uma em bls.gov/ooh: salário, formação, perspetivas"] },
            { title: "Um pequeno próximo passo", bullets: ["Entrar num clube ou numa aula gratuita", "Falar com alguém que faz esse trabalho", "Marcar uma data"] }
          ],
          tryIt: "Escolha um interesse (seu ou do seu mentorado). Peça à IA cinco profissões ligadas a ele, verifique uma em bls.gov/ooh e escreva um pequeno próximo passo com uma data.",
          youCanNow: "ajudar um jovem a explorar profissões e a definir um pequeno próximo passo real.",
          quickCheck: [
            { objective: "O5", q: "O que mostra o Occupational Outlook Handbook sobre uma profissão?", options: ["O salário, a formação e as perspetivas de emprego", "Só as vagas de emprego perto de si", "As profissões das celebridades", "As notas da escola"], answer: 0, why: "O Handbook em bls.gov/ooh mostra o salário, a formação e as perspetivas de uma profissão." },
            { objective: "O5", q: "O seu mentorado gosta de desenhar e a IA indica designer gráfico. Qual é um bom próximo passo?", options: ["Dizer-lhe que não é uma profissão a sério", "Definir um pequeno passo, como uma aula gratuita na biblioteca, com uma data", "Escolher outra profissão por ele", "Esperar até ele acabar a escola"], answer: 1, why: "Transformar o interesse num pequeno passo com data dá impulso." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Acompanhar o progresso e juntar tudo",
          minutes: 5,
          goal: "Manter notas de progresso simples e privadas e terminar o seu plano de sessão.",
          text: [
            "Notas curtas ajudam-no a lembrar-se dos objetivos e a celebrar conquistas. Depois de cada sessão, escreva uma ou duas linhas: o objetivo, o que fizeram, uma conquista e o próximo passo. Use só o primeiro nome ou as iniciais e guarde as notas onde o seu programa disser.",
            "Celebre o progresso, mesmo os passos pequenos: uma nota que subiu, uma candidatura terminada, chegar a horas. Os jovens lembram-se de quando um adulto reparou.",
            "Não cole notas sobre um jovem na IA. Se quiser ajuda, pergunte em termos gerais: \"Quais são formas divertidas de celebrar quando um adolescente sobe uma nota?\""
          ],
          steps: ["Depois de cada sessão, escreva o objetivo, o que fizeram, uma conquista e o próximo passo.", "Use só as iniciais e guarde as notas onde o seu programa disser.", "Celebre as pequenas conquistas.", "Faça à IA só perguntas gerais, nunca sobre um jovem em concreto."],
          words: [["Nota de progresso", "um registo curto do que aconteceu e do que vem a seguir."]],
          slides: [
            { title: "Notas de progresso simples", bullets: ["O objetivo e o que fizeram", "Uma conquista e o próximo passo", "Só as iniciais; guarde como o seu programa disser"] },
            { title: "Celebre as pequenas conquistas", bullets: ["Uma nota que subiu", "Uma candidatura terminada", "Chegar a horas"] },
            { title: "Mantenha as notas fora da IA", bullets: ["Faça só perguntas gerais", "Nunca sobre um jovem em concreto"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de sessão de 45 minutos com a ajuda da IA: objetivo, início, atividade, três perguntas abertas, uma demonstração do uso honesto da IA na escola ou nas profissões, e uma nota de progresso de uma linha. Verifique-o com as regras de segurança do seu programa e depois conduza-o ou ensaie-o com outro adulto.",
          youCanNow: "planear, conduzir e acompanhar sessões de mentoria seguras que ajudam os jovens a usar bem a IA.",
          quickCheck: [
            { objective: "O6", q: "Como deve identificar o seu mentorado nas notas de progresso?", options: ["Nome completo e escola", "Nome completo e morada", "Só as iniciais ou o primeiro nome", "O número de telefone dele"], answer: 2, why: "Só as iniciais ou o primeiro nome mantêm privadas as informações do jovem." },
            { objective: "O6", q: "Quer ideias para celebrar a melhor nota do seu mentorado. O que pergunta à IA?", options: ["Cola as suas notas completas da sessão", "Inclui o nome e a escola dele", "Envia a caderneta de notas dele", "Faz uma pergunta geral sobre como celebrar quando um adolescente sobe uma nota"], answer: 3, why: "Faça à IA só perguntas gerais, nunca sobre um jovem em concreto." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ajudar os jovens a usar bem a IA",
        questions: [
          { objective: "O4", q: "Antes de o seu mentorado usar a IA nos trabalhos de casa, confirme:", options: ["Nada", "Só o tempo que faz", "As regras da escola e do professor sobre a IA", "As redes sociais dele"], answer: 2, why: "As escolas têm regras diferentes sobre a IA; confirme-as primeiro." },
          { objective: "O4", q: "Qual é um uso honesto da IA na escola?", options: ["Copiar a redação da IA", "Pôr a IA a fazer os trabalhos de casa de matemática", "Entregar o trabalho da IA como seu", "\"Faça-me perguntas sobre estas palavras de vocabulário\""], answer: 3, why: "Usar a IA para praticar ajuda a aprender." },
          { objective: "O5", q: "A IA indica profissões para o seu mentorado. Como verifica o salário e a formação?", options: ["Procura em bls.gov/ooh", "Confia na IA", "Pergunta a um desconhecido na internet", "Não verifica"], answer: 0, why: "O Occupational Outlook Handbook é a fonte oficial." },
          { objective: "O6", q: "Qual é a melhor nota de progresso?", options: ["Nome completo, escola e problemas de família", "\"J.: objetivo subir nota a matemática; praticou frações; conquista: B no teste; a seguir: plano de estudo.\"", "Nada", "Uma fotografia publicada na internet"], answer: 1, why: "É curta, usa as iniciais e regista o objetivo, a conquista e o próximo passo." },
          { objective: "O6", q: "Pode colar as suas notas sobre um mentorado na IA para pedir conselhos?", options: ["Sim, sempre", "Só se forem curtas", "Não; faça só perguntas gerais", "Sim, com a fotografia dele"], answer: 2, why: "As informações sobre um jovem ficam privadas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Mentoria de Jovens",
    questions: [
      { objective: "O1", q: "A melhor descrição de um mentor é:", options: ["Um adulto de confiança que ouve e encoraja", "O chefe de um jovem", "Um terapeuta", "Um professor que dá notas"], answer: 0, why: "Os mentores são guias atentos, não pais, professores nem terapeutas." },
      { objective: "O1", q: "As regras de quem vêm primeiro quando faz mentoria?", options: ["As da IA", "As do seu programa de mentoria", "As dos seus amigos", "As das redes sociais"], answer: 1, why: "Siga sempre as regras do seu programa." },
      { objective: "O1", q: "O que costuma ser exigido antes de fazer mentoria com jovens?", options: ["Um presente para o mentorado", "Um carro", "Uma verificação de antecedentes", "Uma conta nas redes sociais"], answer: 2, why: "Os programas costumam exigir uma verificação de antecedentes." },
      { objective: "O1", q: "Numa emergência que envolve a segurança de um jovem, você:", options: ["Espera até à próxima semana", "Publica na internet", "Pergunta à IA", "Liga para o 911"], answer: 3, why: "As emergências precisam de ajuda imediata." },
      { objective: "O1", q: "Que número liga para a linha nacional Childhelp contra o abuso de crianças?", options: ["(800) 422-4453", "(800) 555-0000", "411", "0"], answer: 0, why: "A linha da Childhelp é o (800) 422-4453." },
      { objective: "O2", q: "Uma boa sessão de mentoria tem:", options: ["Só tempo ao telefone", "Um início, uma atividade, uma conversa e os próximos passos", "Nenhum plano", "Um teste"], answer: 1, why: "Estas quatro partes dão forma à sessão." },
      { objective: "O2", q: "O que é seguro dizer à IA quando planeia?", options: ["A morada do mentorado", "O nome da escola dele", "Idade, interesses e objetivo", "Algo que ele lhe contou em confiança"], answer: 2, why: "Os dados gerais chegam para planear." },
      { objective: "O2", q: "Depois de a IA sugerir um plano de sessão, você deve:", options: ["Usá-lo sem ler", "Partilhá-lo nas redes sociais", "Acrescentar o nome do mentorado", "Verificar se é seguro, barato e adequado ao jovem"], answer: 3, why: "Você conhece o jovem; a IA não o conhece." },
      { objective: "O3", q: "Qual é uma pergunta fechada?", options: ["\"A escola correu bem?\"", "\"O que o fez rir esta semana?\"", "\"O que mudaria no seu dia?\"", "\"O que quer aprender a seguir?\""], answer: 0, why: "Pode-se responder com sim ou não." },
      { objective: "O3", q: "Escuta ativa quer dizer:", options: ["Ver o telefone enquanto ele fala", "Ouvir com atenção e repetir o que ouviu", "Falar mais do que ele", "Resolver logo todos os problemas"], answer: 1, why: "Repetir mostra que percebeu." },
      { objective: "O3", q: "Antes de dar conselhos, ajuda:", options: ["Terminar a sessão", "Mudar de assunto", "Perguntar o que ele acha que pode tentar", "Perguntar à IA sobre ele pelo nome"], answer: 2, why: "As ideias dele próprio constroem confiança." },
      { objective: "O3", q: "Em que pode a IA ajudar um mentor?", options: ["A guardar segredos", "A tomar decisões de segurança", "A substituir o mentor", "A sugerir formas de começar uma conversa"], answer: 3, why: "A IA pode sugerir perguntas; você escolhe e conduz." },
      { objective: "O4", q: "Antes de um adolescente se inscrever numa ferramenta de IA, confirme:", options: ["As regras de idade da ferramenta, com um dos pais ou o encarregado de educação", "Nada", "Só as cores", "Quantos amigos a usam"], answer: 0, why: "Muitas ferramentas têm limites de idade e precisam da autorização dos pais no caso dos adolescentes." },
      { objective: "O4", q: "Entregar a redação da IA como sua é:", options: ["Normal", "Batota", "Obrigatório", "Estudar"], answer: 1, why: "O trabalho tem de ser seu." },
      { objective: "O4", q: "Qual é um bom pedido à IA para estudar?", options: ["\"Escreva a minha redação\"", "\"Faça todos os meus trabalhos de casa\"", "\"Explique as frações como se eu tivesse 12 anos e depois faça-me perguntas\"", "\"Responda ao meu teste\""], answer: 2, why: "Usa a IA como explicador." },
      { objective: "O4", q: "A IA dá ao seu mentorado uma resposta diferente da do livro escolar. Ele deve:", options: ["Confiar na IA", "Ignorar os dois", "Mudar o livro", "Verificar com os apontamentos das aulas ou com o professor"], answer: 3, why: "A IA pode estar errada; verifique com os materiais das aulas." },
      { objective: "O5", q: "Uma boa forma de começar a explorar profissões é:", options: ["Perguntar o que o jovem adora", "Escolher uma profissão por ele", "Escolher só a profissão que paga mais", "Não o fazer"], answer: 0, why: "Os interesses apontam para profissões de que ele vai gostar." },
      { objective: "O5", q: "O guia oficial e gratuito sobre salários e formação das profissões é:", options: ["Um anúncio que aparece no ecrã", "O Occupational Outlook Handbook em bls.gov/ooh", "Um vídeo nas redes sociais", "Uma SMS de um desconhecido"], answer: 1, why: "É feito pelo U.S. Bureau of Labor Statistics, o serviço de estatísticas do trabalho dos Estados Unidos." },
      { objective: "O6", q: "Uma nota de progresso deve usar:", options: ["Nomes completos e moradas", "Fotografias", "As iniciais e o objetivo, uma conquista e o próximo passo", "Segredos de família"], answer: 2, why: "Notas curtas com as iniciais protegem a privacidade." },
      { objective: "O6", q: "Porque celebrar as pequenas conquistas?", options: ["É exigido por lei", "Para publicar na internet", "Substitui os objetivos", "Os jovens lembram-se de quando um adulto reparou"], answer: 3, why: "Reparar no progresso aumenta a motivação e a confiança." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 1, 5, 6, 8, 9, 13, 14, 16, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Plano de sessão", objective: "O2", notYet: "Falta o objetivo, o início ou a atividade, ou não cabe em 45 minutos.", meets: "Um objetivo, um início, uma atividade, uma conversa e os próximos passos que cabem em 45 minutos.", exceeds: "Mudou o plano da IA para servir aos interesses do jovem e para ficar barato." },
      { name: "Perguntas abertas", objective: "O3", notYet: "Menos de três perguntas, ou perguntas de sim ou não.", meets: "Três perguntas abertas com as palavras do próprio mentor.", exceeds: "Inclui um plano para repetir o que o mentorado diz." },
      { name: "Demonstração honesta da IA", objective: "O4", notYet: "Na demonstração a IA faz o trabalho, ou as regras da escola são ignoradas.", meets: "Mostra a IA a explicar ou a fazer perguntas de treino, e verifica uma resposta com os materiais das aulas.", exceeds: "Também fala das regras de idade da ferramenta e das regras da escola sobre a IA." },
      { name: "Nota de progresso", objective: "O6", notYet: "Não há nota, ou usa o nome completo ou dados privados.", meets: "Uma linha com as iniciais, o objetivo, uma conquista e o próximo passo.", exceeds: "Diz onde a nota vai ser guardada segundo as regras do programa." },
      { name: "Segurança e privacidade", objective: "O1", notYet: "O plano quebra uma regra de segurança do programa ou tem dados privados sobre o jovem.", meets: "Segue as regras de segurança do programa e não tem dados privados.", exceeds: "Lista os passos de denúncia que o mentor seguiria se um jovem contasse que sofre algum mal." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Mentores que conduzem pelo menos quatro sessões planeadas em 60 dias (inquérito de seguimento)",
      "Mentorados que definem e alcançam um passo na escola ou na profissão, segundo o programa",
      "Programas que não registam nenhum incidente de segurança ou de privacidade entre os mentores formados"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou um computador do programa",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "As regras de mentoria e de segurança do programa",
      "Papel para o plano de sessão e as notas de progresso",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Comece pelas regras de segurança e pelos passos de denúncia do seu próprio programa; este curso não os substitui.",
      "Na formação, peça aos mentores que ensaiem a sessão com outro adulto, e não com um jovem.",
      "Confirme que nenhum pedido ou nota inclui o nome, a escola, fotografias ou histórias privadas de um jovem.",
      "Partilhe os contactos locais para denúncias e a linha Childhelp, e lembre aos mentores que liguem para o 911 numa emergência.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
