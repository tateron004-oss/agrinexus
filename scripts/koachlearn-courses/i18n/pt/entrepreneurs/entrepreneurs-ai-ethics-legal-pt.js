"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-ethics-legal.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US rules (FTC, US Copyright Office); US names are kept and explained. Not legal advice.

module.exports = {
  id: "entrepreneurs-ai-ethics-legal-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-ethics-legal",
  category: "Entrepreneurs",
  name: "Ética da IA, Riscos e Questões Legais",
  skills: "Identificar os riscos da IA num negócio, Rever o trabalho da IA quanto à exatidão e ao enviesamento, Proteger os dados dos clientes, Fazer afirmações honestas sobre IA, Compreender os direitos de autor de trabalhos feitos com IA, Escrever uma política de uso da IA",
  outcome: "identificar os principais riscos de usar IA no seu negócio, criar verificações para a exatidão, o enviesamento e a privacidade, fazer só afirmações honestas sobre IA, compreender o básico dos direitos de autor de trabalhos feitos com IA e escrever uma política de uso da IA de uma página para o seu negócio.",
  about: [
    "A IA pode poupar muito tempo a um pequeno negócio, mas traz riscos reais: respostas erradas, resultados injustos, fugas de dados de clientes, publicidade enganosa e surpresas com os direitos de autor. Este curso é para donos de negócios que querem usar a IA de forma responsável e evitar problemas.",
    "No Capítulo 1 vai aprender os principais riscos, como verificar o trabalho da IA quanto à exatidão e ao enviesamento, e como proteger os dados dos clientes. No Capítulo 2 vai aprender o que dizem as agências dos Estados Unidos sobre afirmações publicitárias sobre IA, recomendações pagas e avaliações, e sobre trabalhos feitos com IA e direitos de autor. No fim, escreve uma política de uso da IA para o seu negócio.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Os pontos legais foram verificados em páginas oficiais do governo dos Estados Unidos (ftc.gov e copyright.gov) e estão indicados em cada lição. Este curso é formação, não aconselhamento jurídico: as leis mudam e variam de estado para estado e de país para país, por isso fale com um advogado sobre a sua própria situação."
  ],
  finalTask: "Escreva uma política de uso da IA de uma página para o seu negócio que diga: que ferramentas de IA estão aprovadas, que informações nunca podem entrar nelas, que resultados precisam de uma verificação humana (factos, dinheiro, questões legais, saúde e tudo o que os clientes veem), como faz afirmações honestas sobre IA e revela as recomendações pagas, como trata os direitos de autor do conteúdo feito com IA, a quem perguntar quando tiver dúvidas (incluindo um advogado) e quando vai rever a política.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios nos Estados Unidos que já usam, ou pensam usar, IA para publicidade, atendimento ao cliente, contratação ou conteúdos, e querem fazê-lo de forma responsável.",
    startingPoint: "Usam uma ou mais ferramentas de IA em tarefas do negócio. Poucos têm uma lista escrita de riscos, um passo de revisão, regras para os dados dos clientes ou uma noção básica das regras de publicidade da FTC e dos direitos de autor de trabalhos feitos com IA.",
    gap: "A IA pode produzir factos errados, resultados injustos, fugas de dados, afirmações enganosas e surpresas com os direitos de autor, e o dono do negócio é responsável por tudo isso. Os donos precisam de verificações simples e de uma política de uso da IA escrita, para manterem a confiança dos clientes e evitarem problemas legais.",
    constraints: [
      "Palavras simples; isto é formação, não aconselhamento jurídico, e as leis variam de estado para estado e de país para país",
      "Aparelhos: um telefone ou computador com as ferramentas de IA que o dono já usa e o seu site ou páginas nas redes sociais",
      "Tempo: cerca de cinco minutos por lição, mais o tempo para rever os materiais do próprio negócio",
      "Os pontos legais baseiam-se só nas páginas oficiais da ftc.gov e da copyright.gov indicadas nas lições",
      "Nenhum dado verdadeiro de clientes é usado nas tarefas de prática"
    ],
    prerequisites: "\"Introdução à IA para Empreendedores\", ou uso regular de ferramentas de IA no negócio."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com pelo menos três formas como o seu negócio usa a IA", action: "fazer a lista dos principais riscos da IA que se aplicam e classificar a gravidade de cada um", standard: "com uma verificação escrita para cada risco grave" },
    { id: "O2", condition: "Com um resultado da IA que os clientes veem ou que influencia uma decisão", action: "verificar se tem factos errados, contas erradas, afirmações que não se podem provar e resultados injustos", standard: "usando um passo de revisão escrito e deixando as decisões sobre contratação, crédito e habitação com uma pessoa" },
    { id: "O3", condition: "Com as informações de clientes que você guarda", action: "escrever uma lista do que nunca entra na IA e verificar as definições de privacidade da sua principal ferramenta de IA", standard: "seguindo os cinco princípios de dados da FTC" },
    { id: "O4", condition: "Com o seu site ou as suas publicações nas redes sociais", action: "marcar cada afirmação sobre IA ou sobre resultados como manter, corrigir ou retirar, e verificar as publicações pagas e as avaliações", standard: "para que cada afirmação seja verdadeira e se possa provar, cada publicação paga seja claramente revelada e nenhuma avaliação seja falsa ou comprada" },
    { id: "O5", condition: "Com bens do negócio feitos com IA", action: "explicar quem pode ser dono de um trabalho feito com ajuda da IA e planear o trabalho criativo humano que vai acrescentar", standard: "indicando qualquer bem que precise do conselho de um advogado" },
    { id: "O6", condition: "Para o seu próprio negócio", action: "escrever uma política de uso da IA de uma página com as sete partes", standard: "dizendo quem é responsável, quando perguntar a um advogado e uma data de revisão" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer os riscos e verificar o trabalho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Os principais riscos da IA num negócio",
          minutes: 5,
          goal: "Dizer quais são os principais riscos da IA e encontrar onde aparecem no seu negócio.",
          text: [
            "Há cinco riscos que aparecem muitas vezes. Exatidão: a IA pode inventar factos, preços ou regras. Justiça: a IA pode tratar grupos de pessoas de forma injusta, por causa de padrões no que aprendeu. Privacidade: os dados de clientes que você escreve podem ser guardados ou usados. Honestidade: afirmações publicitárias sobre IA, ou avaliações feitas por IA, podem enganar. Propriedade: quem é dono do trabalho feito com IA, e se ele copia o trabalho de outra pessoa.",
            "Ser ético com a IA quer dizer ser honesto, justo e cuidadoso com as informações das pessoas, e manter uma pessoa como responsável. Normalmente, fazer o que é ético também o mantém dentro da lei.",
            "Faça uma lista de riscos para o seu negócio: onde usa IA, o que pode correr mal, quão grave seria e que verificação vai acrescentar."
          ],
          steps: ["Faça a lista de todos os sítios onde usa ou pensa usar IA.", "Para cada um, pergunte quais dos cinco riscos se aplicam.", "Classifique a gravidade de um erro: baixa, média ou alta.", "Escreva uma verificação para cada risco médio ou alto."],
          words: [["Ética", "ideias sobre o que é certo e justo."], ["Risco", "algo que pode correr mal, e quanto dano causaria."], ["Enviesamento", "resultados injustos para alguns grupos de pessoas (em inglês, \"bias\")."]],
          slides: [
            { title: "Cinco riscos da IA", bullets: ["Exatidão: factos inventados", "Justiça: resultados injustos", "Privacidade: dados dos clientes", "Honestidade e propriedade"] },
            { title: "Usar a IA de forma ética", bullets: ["Honesto, justo, cuidadoso com os dados", "Uma pessoa continua responsável", "A ética normalmente também o mantém dentro da lei"] },
            { title: "A sua lista de riscos", bullets: ["Onde usa IA", "O que pode correr mal, e quão grave", "Uma verificação para cada risco grave"] }
          ],
          tryIt: "Faça uma lista de riscos com pelo menos três formas como o seu negócio usa a IA. Marque quais dos cinco riscos se aplicam, classifique cada um e escreva uma verificação para os graves.",
          youCanNow: "dizer quais são os principais riscos da IA e ligá-los ao seu próprio negócio.",
          quickCheck: [
            { objective: "O1", q: "Qual é um risco de privacidade da IA num negócio?", options: ["Dados de clientes a escapar através de uma ferramenta de IA", "A IA escrever devagar demais", "Uma ferramenta custar dinheiro", "A IA usar frases compridas"], answer: 0, why: "Colocar dados de clientes em ferramentas de IA pode expô-los." },
            { objective: "O1", q: "O seu assistente de conversa com IA (chatbot) responde a perguntas dos clientes sobre entregas. Como o trata na sua lista de riscos?", options: ["Deixa-o de fora; é só um chatbot", "Põe-no na lista, classifica-o e escreve uma verificação para respostas erradas", "Desliga toda a IA", "Deixa os clientes encontrarem os erros"], answer: 1, why: "Tudo o que os clientes veem entra na lista de riscos, com uma verificação." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Verificar o trabalho da IA quanto à exatidão e à justiça",
          minutes: 5,
          goal: "Criar um passo de revisão humana que apanhe factos errados e resultados injustos.",
          text: [
            "Tudo o que a IA faz e que um cliente vai ver, ou que tem a ver com dinheiro, a lei, a saúde ou a segurança, precisa de uma verificação humana. Compare os factos com os seus próprios registos ou com fontes oficiais, refaça as contas e retire qualquer afirmação que não consiga provar.",
            "Verifique também a justiça. Se usa IA para escolher candidatos a emprego, definir preços, aprovar clientes ou escrever anúncios de emprego, veja se ela trata as pessoas de forma diferente por causa da raça, do sexo, da idade, de uma deficiência, da religião, da origem nacional ou de características parecidas. As leis contra a discriminação continuam a aplicar-se quando um computador ajuda a tomar a decisão.",
            "Nas decisões de alto risco, como contratar, despedir, emprestar dinheiro, habitação ou qualquer coisa sobre saúde, não deixe a IA decidir. Use-a para organizar a informação, deixe a decisão com uma pessoa e fale com um advogado sobre as regras que se aplicam a você."
          ],
          steps: ["Marque que resultados da IA os clientes veem ou têm a ver com dinheiro, a lei, a saúde ou a segurança.", "Nesses, verifique sempre os factos, as contas e as afirmações.", "Veja se as decisões feitas com ajuda da IA têm diferenças injustas entre grupos.", "Deixe as decisões de alto risco com uma pessoa.", "Pergunte a um advogado sobre as regras para decisões de contratação, crédito ou habitação."],
          words: [["Revisão humana", "uma pessoa verifica o trabalho da IA antes de ele ser usado."], ["Decisão de alto risco", "uma escolha que afeta muito o emprego, o dinheiro, a casa ou a saúde de alguém."], ["Discriminação", "tratar as pessoas de forma injusta por causa de quem são."]],
          slides: [
            { title: "O que precisa de verificação humana", bullets: ["Tudo o que os clientes veem", "Tudo sobre dinheiro, lei, saúde ou segurança"] },
            { title: "Verifique a justiça", bullets: ["Contratação, preços, aprovações, anúncios de emprego", "Resultados diferentes para grupos diferentes?", "As leis contra a discriminação continuam a aplicar-se"] },
            { title: "Alto risco = decide uma pessoa", bullets: ["Contratar, despedir, crédito, habitação, saúde", "A IA organiza; uma pessoa decide", "Pergunte a um advogado sobre as regras"] }
          ],
          tryIt: "Escolha um resultado da IA que os seus clientes veem. Verifique os factos, as contas, as afirmações que não se podem provar e as palavras injustas. Escreva o passo de revisão que vai usar sempre.",
          youCanNow: "rever o trabalho da IA quanto à exatidão e à justiça antes de ele afetar os clientes ou as decisões.",
          quickCheck: [
            { objective: "O2", q: "O que é o enviesamento num resultado da IA?", options: ["Um erro de escrita", "Uma resposta lenta", "Um resultado injusto para alguns grupos", "Uma resposta curta"], answer: 2, why: "Enviesamento quer dizer que a IA trata alguns grupos de pessoas de forma injusta." },
            { objective: "O2", q: "A IA põe por ordem os candidatos a um emprego. O que faz?", options: ["Contrata o primeiro nome", "Rejeita a metade de baixo", "Deixa a IA enviar os resultados por email", "Verifica se a ordem é injusta e toma você a decisão"], answer: 3, why: "Uma pessoa toma as decisões de contratação, e as leis contra a discriminação continuam a aplicar-se." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Proteger os dados dos clientes",
          minutes: 5,
          goal: "Decidir que dados podem e não podem entrar nas ferramentas de IA, usando os cinco princípios da FTC.",
          text: [
            "A FTC (Comissão Federal do Comércio dos Estados Unidos) tem um guia para empresas sobre a proteção de informações pessoais com cinco princípios: fazer o inventário (saber que informações pessoais tem), reduzir (guardar só o que precisa), trancar (proteger o que guarda), deitar fora (eliminar o que já não precisa) e planear com antecedência (ter um plano para um problema de segurança).",
            "Aplique-os à IA. Não coloque números da Segurança Social (Social Security), números de cartão ou de banco, palavras-passe, dados de saúde ou listas completas de contactos de clientes em ferramentas de conversa com IA. Use marcadores ou resumos. Verifique as definições de privacidade e os termos de cada ferramenta e, se tiver mesmo de usar informações de clientes, prefira planos empresariais que prometem não treinar a IA com os seus dados.",
            "Seja honesto no seu aviso de privacidade: se usa ferramentas de IA que tratam informações de clientes, diga-o. As leis de privacidade variam de estado para estado e de país para país; pergunte a um advogado o que se aplica a você."
          ],
          steps: ["Faça o inventário: liste as informações de clientes que guarda.", "Reduza: deixe de recolher o que não precisa.", "Escreva uma lista do que nunca entra na IA: números de identificação, números de cartão e de banco, palavras-passe, dados de saúde.", "Verifique as definições de privacidade e os termos de cada ferramenta de IA.", "Faça um plano curto para o que vai fazer se houver uma fuga de dados."],
          words: [["Informações pessoais", "dados que identificam uma pessoa, como o nome com a morada, números de identificação ou números de cartão."], ["Aviso de privacidade", "um texto que diz aos clientes que dados recolhe e como os usa."], ["Incidente de segurança", "quando dados são perdidos, roubados ou vistos por alguém que não os devia ver."]],
          slides: [
            { title: "Os cinco princípios da FTC", bullets: ["Fazer o inventário, reduzir", "Trancar, deitar fora", "Planear com antecedência"] },
            { title: "Nunca em ferramentas de conversa com IA", bullets: ["Números de identificação, de cartão ou de banco", "Palavras-passe e dados de saúde", "Listas completas de contactos de clientes"] },
            { title: "Uso mais seguro", bullets: ["Marcadores e resumos", "Verifique as definições de privacidade e os termos", "Planos empresariais que não treinam a IA com os seus dados"] },
            { title: "Seja honesto", bullets: ["Diga no aviso de privacidade se a IA trata dados", "As leis variam; pergunte a um advogado"] }
          ],
          sources: [{ name: "FTC: Protecting Personal Information, A Guide for Business (guia para empresas sobre a proteção de informações pessoais)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Faça o inventário das informações de clientes que guarda, escreva a sua lista do que nunca entra na IA e verifique as definições de privacidade da ferramenta de IA que mais usa.",
          youCanNow: "decidir que dados de clientes podem entrar nas ferramentas de IA e proteger o resto.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer \"reduzir\" nos princípios de dados da FTC?", options: ["Guardar só as informações de que precisa", "Usar letras mais pequenas", "Contratar menos pessoas", "Apagar o seu site"], answer: 0, why: "Guardar menos dados quer dizer que há menos para perder." },
            { objective: "O3", q: "Quer que a IA resuma emails de clientes. O que verifica primeiro?", options: ["A rapidez da ferramenta", "Os termos de privacidade da ferramenta e as definições sobre treinar a IA com os seus dados", "As cores da ferramenta", "Nada"], answer: 1, why: "Saiba como uma ferramenta guarda e usa os dados antes de lá pôr informações de clientes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer os riscos e verificar o trabalho",
        questions: [
          { objective: "O1", q: "Qual é um risco de exatidão?", options: ["A IA usa as cores da sua marca", "A IA inventa um preço que você nunca definiu", "A IA escreve um email curto", "A IA faz uma lista"], answer: 1, why: "Factos inventados são o risco de exatidão." },
          { objective: "O2", q: "Usa IA para separar candidaturas a emprego. O que mais tem de verificar?", options: ["O tempo que faz", "Só o tipo de letra", "Nada, a IA é neutra", "Se ela trata grupos de pessoas de forma injusta"], answer: 3, why: "As leis contra a discriminação continuam a aplicar-se quando a IA ajuda a decidir." },
          { objective: "O2", q: "Quem deve tomar uma decisão de contratação?", options: ["Uma pessoa, com a IA só a organizar a informação", "Só a IA", "Uma ferramenta qualquer", "O candidato"], answer: 0, why: "As decisões de alto risco ficam com uma pessoa." },
          { objective: "O3", q: "Qual é um dos cinco princípios de dados da FTC?", options: ["Partilhar os dados com todas as ferramentas", "Recolher tudo para sempre", "Reduzir: guardar só o que precisa", "Nunca planear com antecedência"], answer: 2, why: "Reduzir é um dos cinco." },
          { objective: "O3", q: "O que nunca deve entrar numa ferramenta de conversa com IA?", options: ["Um resumo sem nomes", "O seu horário de funcionamento", "O número do cartão de um cliente", "A sua lista de serviços"], answer: 2, why: "Os números de cartão são informações pessoais sensíveis." }
        ]
      }
    },
    {
      name: "Capítulo 2: Afirmações honestas, propriedade e a sua política",
      lessons: [
        {
          objectives: ["O4"],
          title: "Afirmações honestas sobre IA, recomendações pagas e avaliações",
          minutes: 5,
          goal: "Verificar a sua publicidade para encontrar afirmações enganosas sobre IA, recomendações pagas não reveladas e avaliações falsas.",
          text: [
            "A FTC diz que a publicidade tem de ser verdadeira, não enganosa e apoiada em provas, e isso aplica-se às afirmações sobre IA. Não diga que o seu produto \"usa IA\" se não usar, e não exagere o que a IA faz nem quão exata ela é. Em 2026, a FTC finalizou decisões contra empresas que afirmavam que o seu serviço de publicidade com IA ouvia as conversas das pessoas através de aparelhos inteligentes, quando isso não acontecia.",
            "Se paga ou oferece produtos a alguém para o promover, essa ligação tem de ser claramente revelada, por exemplo com \"#ad\" (anúncio) no início da publicação ou no próprio vídeo. Você é responsável pelo que os seus promotores dizem.",
            "A regra da FTC sobre avaliações falsas proíbe avaliações e testemunhos falsos, incluindo avaliações feitas por IA em nome de pessoas que não existem, e proíbe recompensas dadas só por avaliações positivas. Fale com um advogado se não tiver a certeza de que uma afirmação ou campanha é permitida."
          ],
          steps: ["Faça a lista de todas as afirmações da sua publicidade sobre IA ou sobre resultados.", "Fique só com as afirmações verdadeiras que consegue provar.", "Verifique que cada promoção paga ou oferecida tem uma revelação clara.", "Confirme que cada avaliação é verdadeira e não foi paga com uma recompensa por uma boa nota.", "Pergunte a um advogado quando tiver dúvidas."],
          words: [["Fundamentar", "apoiar uma afirmação com provas (em inglês, \"substantiate\")."], ["Ligação material", "uma ligação, como um pagamento ou produtos oferecidos, entre um negócio e alguém que o promove."]],
          slides: [
            { title: "Afirmações honestas sobre IA", bullets: ["Verdadeiras, não enganosas, com provas", "Não diga \"usa IA\" se não usar", "Não exagere a exatidão"] },
            { title: "Exemplo de ação da FTC", bullets: ["Decisões de 2026 sobre afirmações falsas de um serviço de publicidade com IA", "Dizia usar dados de voz; não usava"] },
            { title: "Recomendações pagas e avaliações", bullets: ["Revele claramente as promoções pagas ou oferecidas", "Avaliações falsas e feitas por IA são proibidas", "Nada de recompensas só por avaliações positivas"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics (o básico da publicidade e do marketing)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Orders against Cox Media Group and two other firms over AI marketing claims (2026) (decisões sobre afirmações de publicidade com IA)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }, { name: "FTC: Endorsement Guides, What People Are Asking (perguntas frequentes sobre recomendações pagas)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }, { name: "FTC: Final rule banning fake reviews and testimonials (comunicado sobre a regra que proíbe avaliações falsas)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Reveja o seu site ou as suas publicações nas redes sociais. Faça a lista de cada afirmação sobre IA ou sobre resultados e marque-a como manter (verdadeira e com provas), corrigir ou retirar. Verifique se cada publicação paga tem uma revelação clara.",
          youCanNow: "verificar a sua publicidade para ter afirmações honestas sobre IA, revelações corretas e avaliações verdadeiras.",
          quickCheck: [
            { objective: "O4", q: "O que torna aceitável, pelas regras da FTC, uma afirmação sobre IA num anúncio?", options: ["Parecer entusiasmante", "Os concorrentes dizerem o mesmo", "Ser verdadeira, não enganosa e apoiada em provas", "Estar em letras pequenas"], answer: 2, why: "As regras de publicidade da FTC aplicam-se às afirmações sobre IA como a qualquer outra." },
            { objective: "O4", q: "Um criador de conteúdos a quem pagou publica sobre a sua loja sem revelar o pagamento. O que faz?", options: ["Nada; a publicação é dele", "Partilha-a com mais pessoas", "Paga-lhe outra vez", "Pede-lhe para acrescentar uma revelação clara, como \"#ad\" no início"], answer: 3, why: "O negócio é responsável pelo que os seus promotores pagos dizem." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Direitos de autor e trabalhos feitos com IA",
          minutes: 5,
          goal: "Explicar quem pode ser dono de um trabalho feito com ajuda da IA e como reduzir o risco de cópia.",
          text: [
            "O relatório do Copyright Office dos Estados Unidos (o serviço oficial de direitos de autor) sobre o que pode ter direitos de autor (janeiro de 2025) diz que os direitos de autor protegem a autoria humana. O material gerado só pela IA não é protegido, e escrever um pedido (prompt) não faz de você o autor do resultado. Mas usar a IA como ferramenta não impede a proteção: a sua própria organização criativa, as suas correções ou o trabalho feito por uma pessoa que aparece no resultado podem ser protegidos.",
            "O que isto quer dizer para um negócio: se precisa de ser dono de alguma coisa, como o seu logótipo, os desenhos dos seus produtos ou um livro, ponha nela criatividade humana real e guarde registos do que fez. Quando registar uma obra que inclui material gerado por IA, o Copyright Office tem orientações sobre como o declarar.",
            "O outro risco é a cópia. Às vezes, o resultado da IA pode parecer o trabalho ou a marca de outra pessoa. Não peça à IA para copiar um artista vivo, o logótipo de uma marca ou uma personagem famosa, e verifique os resultados importantes. A lei dos direitos de autor sobre a IA ainda está a mudar, com processos em tribunal a decorrer; fale com um advogado antes de contar com um trabalho feito com IA para algo importante."
          ],
          steps: ["Marque que bens do negócio precisa de ter como seus (logótipo, desenhos, livros, cursos).", "Nesses, acrescente trabalho criativo humano real e guarde notas ou rascunhos.", "Não peça à IA para copiar um artista, uma marca ou uma personagem concreta.", "Verifique se os resultados importantes se parecem com o trabalho de outros.", "Fale com um advogado antes de registar ou de contar com um trabalho feito com ajuda da IA."],
          words: [["Direitos de autor", "o direito legal de controlar a cópia de uma obra criativa original (em inglês, \"copyright\")."], ["Autoria humana", "escolhas criativas feitas por uma pessoa, que os direitos de autor protegem."], ["Registar", "entregar uma obra no Copyright Office para registar o seu direito."]],
          slides: [
            { title: "O que diz o Copyright Office", bullets: ["Os direitos de autor protegem a autoria humana", "Material gerado só pela IA: não é protegido", "Um pedido sozinho não faz de você o autor"] },
            { title: "Usar a IA como ferramenta é aceite", bullets: ["As suas correções e organização criativas podem ser protegidas", "As partes feitas por você que aparecem no resultado"] },
            { title: "Ser dono do que importa", bullets: ["Acrescente criatividade humana real", "Guarde rascunhos e notas", "Siga as orientações do Office sobre declarar a IA"] },
            { title: "Evite copiar", bullets: ["Não copie artistas, logótipos ou personagens", "A lei ainda está a mudar: pergunte a um advogado"] }
          ],
          sources: [{ name: "US Copyright Office: Copyright and Artificial Intelligence (direitos de autor e inteligência artificial)", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office: Part 2 Copyrightability report announcement (January 2025) (anúncio do relatório sobre o que pode ter direitos de autor)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Faça a lista de três bens do negócio que fez ou pensa fazer com IA. Para cada um, escreva se precisa de ser dono dele e que trabalho criativo humano vai acrescentar, e indique os que precisam do conselho de um advogado.",
          youCanNow: "explicar o básico dos direitos de autor de trabalhos feitos com IA e reduzir o seu risco de cópia.",
          quickCheck: [
            { objective: "O5", q: "Segundo o Copyright Office dos Estados Unidos, o que é protegido num trabalho feito com ajuda da IA?", options: ["As contribuições criativas humanas", "Tudo o que a IA fez", "Só o pedido", "Nada, nunca"], answer: 0, why: "O trabalho criativo humano pode ser protegido; o material gerado só pela IA não é." },
            { objective: "O5", q: "Precisa de ser dono do seu novo logótipo. O que faz?", options: ["Usa uma imagem feita só pela IA, tal como está", "Acrescenta trabalho criativo humano real, guarda registos e pergunta a um advogado se tiver dúvidas", "Copia um logótipo famoso", "Fica sem logótipo"], answer: 1, why: "O trabalho criativo humano e os registos tornam a proteção mais provável; um advogado pode aconselhar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escrever a sua política de uso da IA",
          minutes: 6,
          goal: "Escrever uma política de uso da IA de uma página para o seu negócio.",
          text: [
            "Uma política de uso da IA é um conjunto curto de regras sobre como você e quem trabalha consigo usam a IA. Transforma tudo o que aprendeu neste curso em hábitos. Ajuda quem começa a trabalhar consigo, dá confiança aos clientes e mostra que teve cuidado se alguma coisa correr mal.",
            "Uma política simples tem sete partes: ferramentas aprovadas; informações que nunca entram na IA; resultados que precisam sempre de uma verificação humana; afirmações honestas e revelações; direitos de autor e propriedade; a quem perguntar quando tiver dúvidas (incluindo um advogado); e uma data de revisão.",
            "A IA pode fazer o rascunho: dê-lhe a sua lista de riscos e as regras deste curso e peça uma política de uma página com palavras simples. Depois corrija-a para que cada regra seja algo que vai mesmo fazer, partilhe-a com quem o ajuda e reveja-a de seis em seis meses."
          ],
          steps: ["Junte a sua lista de riscos, a lista do que nunca entra na IA e a verificação das afirmações das lições anteriores.", "Peça à IA uma política de uma página com as sete partes, com palavras simples.", "Corrija cada regra para que seja verdadeira para o seu negócio.", "Partilhe-a com quem o ajuda.", "Marque uma data de revisão daqui a seis meses."],
          words: [["Política de uso da IA", "um conjunto curto de regras sobre como um negócio usa a IA."], ["Data de revisão", "o dia em que vai verificar e atualizar a política."]],
          slides: [
            { title: "Porquê uma política", bullets: ["Transforma boas regras em hábitos", "Orienta quem ajuda, dá confiança aos clientes"] },
            { title: "Sete partes", bullets: ["Ferramentas aprovadas; informações que nunca entram na IA", "Verificações humanas; afirmações honestas e revelações", "Direitos de autor; a quem perguntar; data de revisão"] },
            { title: "Torne-a real", bullets: ["Deixe a IA fazer o rascunho a partir das suas notas", "Corrija cada regra para servir para você", "Partilhe-a e reveja-a de seis em seis meses"] }
          ],
          tryIt: "Tarefa final: escreva a sua política de uso da IA de uma página com as sete partes, corrija-a para servir para o seu negócio e marque uma data de revisão.",
          youCanNow: "gerir o uso da IA no seu negócio com uma política escrita, clara e honesta, e saber quando chamar um advogado.",
          quickCheck: [
            { objective: "O6", q: "O que é uma política de uso da IA?", options: ["Uma lista de preços de ferramentas de IA", "Um texto de blogue escrito pela IA", "Um conjunto escrito de regras sobre como o seu negócio usa a IA", "Um contrato com um cliente"], answer: 2, why: "Uma política diz a todos como a IA é usada com segurança no negócio." },
            { objective: "O6", q: "Sai uma nova ferramenta de IA que a sua equipa quer usar. O que lhe diz a sua política para fazer?", options: ["Deixar todos experimentarem com dados de clientes", "Proibir toda a IA", "Ignorar a política", "Compará-la com a política antes de a pôr na lista de ferramentas aprovadas"], answer: 3, why: "A política diz quais são as ferramentas aprovadas e como se acrescentam novas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Afirmações honestas, propriedade e a sua política",
        questions: [
          { objective: "O4", q: "A sua aplicação não usa IA. Pode anunciá-la como \"com IA\"?", options: ["Não, é uma afirmação falsa", "Sim, todos fazem isso", "Só em letras pequenas", "Só na internet"], answer: 0, why: "As afirmações nos anúncios, incluindo as sobre IA, têm de ser verdadeiras." },
          { objective: "O4", q: "Que prática com avaliações é proibida pela regra da FTC?", options: ["Mostrar avaliações verdadeiras com autorização", "Pedir aos clientes avaliações honestas", "Responder às avaliações", "Publicar avaliações feitas por IA em nome de pessoas que não existem"], answer: 3, why: "A regra proíbe avaliações falsas, incluindo as feitas por IA." },
          { objective: "O5", q: "Segundo o Copyright Office dos Estados Unidos, escrever um pedido faz de você o autor do resultado da IA?", options: ["Sim, sempre", "Não, um pedido sozinho não chega", "Só com pedidos longos", "Só com imagens"], answer: 1, why: "O Office diz que os pedidos sozinhos não fazem de alguém o autor." },
          { objective: "O5", q: "Como pode tornar mais provável a proteção de um trabalho feito com ajuda da IA?", options: ["Acrescentando trabalho criativo humano real e guardando registos", "Usando mais pedidos", "Acrescentando a palavra \"copyright\"", "Usando uma ferramenta de IA paga"], answer: 0, why: "As contribuições criativas humanas podem ser protegidas." },
          { objective: "O6", q: "Com que frequência deve rever a sua política de uso da IA?", options: ["Só depois de um processo em tribunal", "Nunca", "Numa data marcada, por exemplo de seis em seis meses", "Todos os dias"], answer: 2, why: "As ferramentas e as leis mudam, por isso as revisões regulares mantêm-na atualizada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Ética da IA, Riscos e Questões Legais",
    questions: [
      { objective: "O1", q: "Qual NÃO é um dos cinco riscos da IA deste curso?", options: ["Exatidão", "Duração da bateria", "Privacidade", "Justiça"], answer: 1, why: "Os cinco são a exatidão, a justiça, a privacidade, a honestidade e a propriedade." },
      { objective: "O6", q: "Ser ético com a IA inclui:", options: ["Recolher todos os dados que puder", "Deixar a IA decidir tudo", "Esconder de todos o uso da IA", "Manter uma pessoa como responsável"], answer: 3, why: "Uma pessoa continua responsável pelo uso da IA." },
      { objective: "O1", q: "Uma lista de riscos regista:", options: ["Os seus seguidores nas redes sociais", "As palavras-passe dos concorrentes", "Só os preços das suas ferramentas", "Onde usa IA, o que pode correr mal, quão grave seria e uma verificação"], answer: 3, why: "Assim os riscos ficam controláveis." },
      { objective: "O2", q: "Que resultado da IA precisa sempre de uma verificação humana?", options: ["Uma lista de ideias privada que vai deitar fora", "Uma lista de preços que os clientes vão ver", "Uma lista de ideias para o almoço", "Uma piada só para você"], answer: 1, why: "A informação sobre dinheiro que os clientes veem tem de ser verificada." },
      { objective: "O2", q: "O enviesamento na IA quer dizer:", options: ["Um erro de ortografia", "Uma resposta lenta", "Resultados injustos para alguns grupos", "Um tipo de ferramenta"], answer: 2, why: "É essa a definição." },
      { objective: "O2", q: "As leis contra a discriminação aplicam-se quando a IA ajuda a tomar uma decisão de contratação?", options: ["Sim", "Não, os computadores estão isentos", "Só para grandes empresas no estrangeiro", "Só para candidaturas em papel"], answer: 0, why: "A lei aplica-se à decisão, seja qual for a forma como é tomada." },
      { objective: "O2", q: "Nas decisões de crédito ou de habitação, a IA deve:", options: ["Ficar escondida do cliente", "Decidir sozinha", "Organizar a informação enquanto uma pessoa decide", "Substituir o seu advogado"], answer: 2, why: "As decisões de alto risco ficam com uma pessoa." },
      { objective: "O3", q: "\"Fazer o inventário\" no guia da FTC quer dizer:", options: ["Saber que informações pessoais tem", "Comprar ações", "Contar só o seu stock", "Apagar tudo"], answer: 0, why: "É o primeiro dos cinco princípios." },
      { objective: "O3", q: "\"Deitar fora\" no guia da FTC quer dizer:", options: ["Fazer uma apresentação de vendas", "Eliminar de forma correta as informações de que já não precisa", "Atirar uma bola", "Publicá-las na internet"], answer: 1, why: "Os dados antigos de que não precisa são um risco." },
      { objective: "O3", q: "Se tiver mesmo de usar informações de clientes com uma ferramenta de IA, prefira:", options: ["Enviá-las por email para si próprio", "Qualquer ferramenta gratuita sem ler os termos", "Publicá-las para todos verem", "Um plano cujos termos dizem que não treina a IA com os seus dados"], answer: 3, why: "Os termos empresariais podem proteger melhor os dados." },
      { objective: "O3", q: "Se as ferramentas de IA tratam dados de clientes, o seu aviso de privacidade deve:", options: ["Dizê-lo com honestidade", "Escondê-lo", "Dizer que nunca usa computadores", "Ser retirado"], answer: 0, why: "A honestidade com os clientes é obrigatória e ética." },
      { objective: "O4", q: "As regras de publicidade da FTC dizem que as afirmações têm de ser:", options: ["Aprovadas por uma ferramenta de IA", "Engraçadas", "Curtas", "Verdadeiras, não enganosas e apoiadas em provas"], answer: 3, why: "É essa a regra da verdade na publicidade." },
      { objective: "O4", q: "As decisões da FTC de 2026 referidas neste curso eram sobre:", options: ["Horários de abertura de lojas", "Entregas de impostos atrasadas", "Afirmações falsas sobre o que um serviço de publicidade com IA fazia", "Atrasos nas entregas"], answer: 2, why: "As empresas afirmavam usar dados de voz quando não usavam." },
      { objective: "O4", q: "Uma pessoa influente nas redes sociais a quem pagou publica sobre você. Ela tem de:", options: ["Escondê-lo nos comentários", "Revelá-lo claramente, por exemplo com \"#ad\" no início", "Não dizer nada", "Mencioná-lo uma vez por ano"], answer: 1, why: "As ligações materiais têm de ser claramente reveladas." },
      { objective: "O4", q: "Quem é responsável pelo que os seus promotores pagos dizem sobre você?", options: ["Ninguém", "Só o promotor", "A plataforma", "Você, o negócio"], answer: 3, why: "A FTC diz que os negócios são responsáveis pelas afirmações dos seus promotores." },
      { objective: "O4", q: "Oferecer um desconto só aos clientes que deixam avaliações de 5 estrelas é:", options: ["Obrigatório", "Uma ótima ideia", "Proibido pela regra da FTC sobre avaliações falsas", "Aceitável se for revelado em letras muito pequenas"], answer: 2, why: "As recompensas que dependem de avaliações positivas são proibidas." },
      { objective: "O5", q: "Segundo o Copyright Office, o material gerado só pela IA:", options: ["Não é protegido por direitos de autor", "É automaticamente seu", "Pertence à IA", "É protegido durante 100 anos"], answer: 0, why: "Os direitos de autor exigem autoria humana." },
      { objective: "O5", q: "Usar a IA como ferramenta no seu trabalho criativo:", options: ["Anula sempre os direitos de autor", "Não impede, por si só, os direitos de autor sobre as suas contribuições humanas", "Torna tudo de domínio público", "É ilegal"], answer: 1, why: "O Office diz que as obras feitas com ajuda da IA podem ser protegidas onde a criatividade humana aparece." },
      { objective: "O5", q: "Que pedido aumenta o risco de cópia?", options: ["\"Dê-me ideias para o logótipo de uma padaria\"", "\"Faça um logótipo exatamente igual ao da [marca famosa]\"", "\"Sugira cores para uma empresa de limpezas\"", "\"Escreva um slogan sobre pão fresco\""], answer: 1, why: "Copiar o logótipo de uma marca pode violar a marca registada ou os direitos de autor." },
      { objective: "O6", q: "Quando tem dúvidas sobre uma questão legal do seu negócio, deve:", options: ["Falar com um advogado sobre a sua situação", "Confiar no que uma IA disser", "Ignorar a questão", "Copiar o que um concorrente faz"], answer: 0, why: "As leis mudam e variam de lugar para lugar; um advogado pode aconselhá-lo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 1, 3, 4, 7, 9, 11, 13, 16, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Ferramentas aprovadas e dados",
        objective: "O3",
        notYet: "Não há lista de ferramentas aprovadas ou não há lista do que nunca entra na IA.",
        meets: "Diz o nome das ferramentas aprovadas e tem uma lista clara das informações que nunca podem entrar nelas.",
        exceeds: "Indica a definição de privacidade verificada em cada ferramenta aprovada."
      },
      {
        name: "Verificações humanas",
        objective: "O2",
        notYet: "Não diz que resultados precisam de ser verificados por uma pessoa.",
        meets: "Os factos, o dinheiro, as questões legais, a saúde e tudo o que os clientes veem precisam de uma verificação humana.",
        exceeds: "Diz quem verifica e o que procura, incluindo a justiça."
      },
      {
        name: "Afirmações honestas e recomendações pagas",
        objective: "O4",
        notYet: "Não há regra sobre afirmações sobre IA, recomendações pagas ou avaliações.",
        meets: "As afirmações têm de ser verdadeiras e ter provas; as publicações pagas são reveladas; não há avaliações falsas nem compradas.",
        exceeds: "Inclui os resultados da revisão manter, corrigir ou retirar feita pelo dono."
      },
      {
        name: "Direitos de autor",
        objective: "O5",
        notYet: "Não há regra para o conteúdo feito com IA.",
        meets: "Diz quando se acrescenta trabalho criativo humano e quando perguntar a um advogado sobre a propriedade.",
        exceeds: "Faz a lista dos principais bens do negócio feitos com ajuda da IA e de como cada um é tratado."
      },
      {
        name: "Responsabilidade e revisão",
        objective: "O6",
        notYet: "Ninguém é indicado como responsável, ou não há data de revisão.",
        meets: "Diz quem é responsável, quando chamar um advogado e uma data de revisão.",
        exceeds: "Liga-se à lista de riscos, para que cada risco grave tenha uma regra."
      }
    ]
  },
  evaluation: {
    results: [
      "Donos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que adotam a sua política de uso da IA e a partilham com a equipa em 30 dias (inquérito de seguimento)",
      "Donos que corrigem ou retiram pelo menos uma afirmação enganosa do seu site ou das suas redes sociais",
      "Alunos que começam outro curso da Koach Learn para empreendedores em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com as ferramentas de IA que o negócio usa",
      "O site do negócio, as suas páginas nas redes sociais e uma lista das informações de clientes que guarda",
      "Um modelo de política de uma página com as sete partes",
      "Cerca de 60 a 75 minutos no total para as lições, as revisões, as verificações e a política"
    ],
    facilitatorNotes: [
      "Diga no início que o curso é formação, não aconselhamento jurídico, e que as leis variam de estado para estado e de país para país.",
      "Peça aos donos que revejam em pares as afirmações dos seus próprios sites, marcando manter, corrigir ou retirar.",
      "Não use dados verdadeiros de clientes na prática; use antes os tipos de dados.",
      "Tenha uma lista de serviços locais de apoio jurídico a pequenos negócios ou de indicação de advogados para partilhar.",
      "Avalie a política com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
