"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-ai-tools-educators.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course is about US schools: US laws and agencies (FERPA, COPPA, FTC, Department of Education) keep their names.

module.exports = {
  id: "edu-ai-tools-educators-pt",
  lang: "pt",
  translationOf: "edu-ai-tools-educators",
  category: "Leadership Development",
  name: "IA para Líderes Escolares e Educativos 2: Ferramentas de IA para Educadores",
  skills: "Conhecer os tipos de ferramentas de IA para escolas, Escrever pedidos de professor que funcionam, Usar a IA em três tarefas do dia a dia do professor, Verificar os termos de privacidade de uma ferramenta, Fazer uma lista de ferramentas verde-amarelo-vermelho",
  outcome: "usar ferramentas de IA em tarefas do dia a dia do professor com um modelo de pedido fiável, verificar os termos de privacidade de uma ferramenta de IA com uma lista de verificação antes de alguém a usar com alunos, e publicar uma lista curta verde-amarelo-vermelho de ferramentas de IA para a sua escola.",
  about: [
    "Este curso é para diretores de escola, orientadores pedagógicos, professores líderes, coordenadores de tecnologia e professores. É prático: você vai usar ferramentas de IA em tarefas reais da escola e depois decidir que ferramentas são seguras para recomendar.",
    "O Capítulo 1 divide as muitas ferramentas de IA em poucos tipos, ensina um modelo de pedido que funciona para professores e pratica três tarefas do dia a dia. O Capítulo 2 ensina a verificar uma ferramenta antes de os funcionários ou os alunos a usarem: termos de privacidade, regras de idade, uso dos dados, e como publicar uma lista simples de ferramentas em que os funcionários possam confiar.",
    "Nunca coloque nomes de alunos, notas, detalhes do IEP (plano de educação individual) ou outras informações que identifiquem alguém em nenhuma ferramenta que o seu distrito escolar não tenha aprovado. Pratique com exemplos inventados. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso. Este é o curso 2 de 8 de IA para Líderes Escolares e Educativos."
  ],
  finalTask: "Crie o kit inicial de IA da sua escola: um cartão de pedidos com três pedidos de professor testados (um email para os pais, um texto de leitura em três níveis e dez perguntas de prática com a chave de respostas), e uma lista verde-amarelo-vermelho de pelo menos três ferramentas de IA, cada uma verificada com uma lista de verificação de privacidade feita a partir do recurso Model Terms of Service do studentprivacy.ed.gov, com uma linha a explicar a sua cor.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Diretores de escola, orientadores pedagógicos, professores líderes, coordenadores de tecnologia e professores de escolas dos Estados Unidos que querem praticar com ferramentas de IA e ter uma forma de decidir quais são seguras.",
    startingPoint: "Sabem o que é a IA e conhecem o básico do FERPA e do COPPA do curso 1. Já experimentaram um chatbot, mas não têm um modelo de pedido fiável nem uma forma de verificar os termos de privacidade de uma ferramenta.",
    gap: "Os funcionários estão a experimentar muitas ferramentas de IA, algumas com termos de privacidade fracos ou regras de idade que os alunos não cumprem. Os líderes precisam de ter bons resultados da IA nas tarefas do dia a dia do professor, verificar as ferramentas antes de alguém as usar com alunos e dar aos funcionários uma lista simples em que possam confiar.",
    constraints: [
      "Nunca colocar nomes de alunos, notas, detalhes do IEP ou outras informações que identifiquem alguém numa ferramenta que o distrito não aprovou; a prática usa exemplos inventados",
      "Os termos e as regras de idade das ferramentas mudam, por isso os alunos do curso verificam eles próprios os termos atuais",
      "O responsável pela privacidade do distrito ou a equipa de tecnologia confirma a lista final de ferramentas",
      "Aparelhos: um computador com internet e pelo menos um assistente de IA gratuito",
      "Tempo: lições curtas que cabem num dia de escola"
    ],
    prerequisites: "\"IA para Líderes Escolares e Educativos 1: Introdução à IA na Educação\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as ferramentas de IA que os seus funcionários usam", action: "classificar cada ferramenta como assistente geral, plataforma educativa ou função integrada", standard: "indicando se o distrito tem um acordo para ela" },
    { id: "O2", condition: "Para uma aula que você dá ou apoia", action: "escrever um pedido de professor com papel, alunos, objetivo, limites e formato", standard: "com as cinco partes e guardado num cartão de pedidos partilhado" },
    { id: "O3", condition: "Usando detalhes inventados", action: "usar a IA para um email aos pais, um texto por níveis e perguntas de prática com a chave de respostas, e verificar cada um", standard: "corrigindo todos os erros antes de usar e resolvendo você mesmo cada resposta" },
    { id: "O4", condition: "Com uma ferramenta de IA que os funcionários querem", action: "verificar a sua política de privacidade e os seus termos com uma lista de verificação de privacidade", standard: "marcando cada ponto como claro, pouco claro ou problema, para o plano que usaria" },
    { id: "O5", condition: "Antes de os alunos entrarem numa ferramenta", action: "verificar a idade mínima atual da ferramenta, as regras de autorização dos pais e como se aplica o COPPA", standard: "usando os termos atuais da própria ferramenta" },
    { id: "O6", condition: "Com pelo menos três ferramentas verificadas", action: "publicar uma lista de ferramentas verde-amarelo-vermelho para os funcionários", standard: "mostrando a cor, a razão, os usos permitidos e a data de verificação de cada ferramenta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Usar ferramentas de IA em tarefas do professor",
      lessons: [
        {
          objectives: ["O1"],
          title: "Os tipos de ferramentas de IA nas escolas",
          minutes: 5,
          goal: "Classificar as ferramentas de IA em assistentes gerais, plataformas educativas e funções integradas.",
          text: [
            "Os assistentes gerais de IA, como o ChatGPT, o Microsoft Copilot, o Google Gemini e o Claude, conseguem fazer quase qualquer tarefa de escrita ou de raciocínio. São flexíveis, mas não sabem nada do seu currículo se você não lhes disser, e as regras sobre os dados dependem do plano que usa.",
            "As plataformas educativas de IA são feitas para professores ou alunos: geradores de aulas e de testes, ferramentas de explicação, ferramentas de comentários. Podem servir melhor para as tarefas da escola e algumas oferecem acordos com o distrito, mas cada uma tem de ser verificada quanto à privacidade e à qualidade.",
            "As funções de IA integradas estão dentro de ferramentas que já usa: Microsoft 365, Google Workspace, Canva, a sua plataforma de gestão da aprendizagem (LMS). São práticas, mas podem ser ligadas sem ninguém decidir, por isso confirme com a sua equipa de tecnologia quais estão ligadas e com que acordo."
          ],
          words: [["Assistente geral", "uma ferramenta de conversa com IA que pode ajudar em quase qualquer tarefa."], ["Plataforma educativa", "uma ferramenta de IA feita para tarefas de ensino ou de aprendizagem."], ["Função integrada", "uma função de IA dentro de um programa que já usa."]],
          slides: [
            { title: "Assistentes gerais", bullets: ["ChatGPT, Copilot, Gemini, Claude", "Flexíveis, mas não sabem nada do seu currículo", "As regras dos dados dependem do plano"] },
            { title: "Plataformas educativas", bullets: ["Ferramentas para aulas, testes, explicações e comentários", "Servem melhor para tarefas da escola", "Cada uma tem de ser verificada"] },
            { title: "Funções integradas", bullets: ["Dentro do Microsoft 365, Google, Canva, a sua LMS", "Podem vir ligadas de origem", "Veja quais estão ligadas e com que acordo"] }
          ],
          tryIt: "Faça a lista das ferramentas de IA que você ou os seus funcionários usam agora. Ponha cada uma num dos três tipos e marque se o seu distrito tem um acordo para ela (sim, não, não sei).",
          youCanNow: "classificar as ferramentas de IA em três tipos e saber o que verificar em cada um.",
          quickCheck: [
            { objective: "O1", q: "O que é uma função de IA integrada?", options: ["Uma ferramenta de IA que tem de comprar à parte", "Uma função de IA dentro de um programa que já usa", "Um chatbot feito por um aluno", "Uma ficha de trabalho em papel"], answer: 1, why: "As funções integradas aparecem dentro de ferramentas que já tem, às vezes ligadas de origem." },
            { objective: "O1", q: "Um professor usa uma plataforma educativa de IA nova de que você nunca ouviu falar. O que faz primeiro?", options: ["Aprova-a, porque é feita para escolas", "Proíbe todas as plataformas de IA", "Põe-na na lista e verifica se o distrito tem um acordo para ela", "Pergunta aos alunos se gostam dela"], answer: 2, why: "As plataformas educativas também têm de ser verificadas quanto à privacidade e à qualidade." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Um modelo de pedido que funciona para professores",
          minutes: 5,
          goal: "Escrever pedidos de professor com papel, alunos, objetivo, limites e formato.",
          text: [
            "Os professores têm melhores resultados com um pedido de cinco partes. Papel: \"Você é um professor experiente de ciências do 7.º ano.\" Alunos: ano, nível de leitura, necessidades em termos gerais (sem nomes). Objetivo: o objetivo de aprendizagem ou a norma curricular. Limites: tempo, materiais, tamanho, o que evitar. Formato: uma tabela, passos numerados, uma ficha.",
            "Exemplo: \"Você é um professor experiente do 4.º ano. A minha turma lê em vários níveis. Escreva um texto de 300 palavras sobre o ciclo da água em três níveis de leitura, com os mesmos factos principais, e depois cinco perguntas de compreensão para cada um. Use uma tabela.\"",
            "Depois melhore-o com pedidos de seguimento: \"faça o nível 1 mais simples\", \"acrescente uma lista de vocabulário\", \"ligue as perguntas à ideia principal\". Guarde os pedidos que funcionam num cartão de pedidos partilhado, para os colegas os poderem usar outra vez."
          ],
          steps: ["Papel: que papel deve a IA fazer?", "Alunos: ano, nível, necessidades em termos gerais.", "Objetivo: objetivo de aprendizagem ou norma.", "Limites: tempo, tamanho, materiais.", "Formato: tabela, passos, ficha."],
          words: [["Pedido (prompt)", "o que você escreve a uma ferramenta de IA para pedir alguma coisa."], ["Cartão de pedidos", "uma lista partilhada de pedidos testados que os funcionários podem usar outra vez."]],
          slides: [
            { title: "Pedido de professor em cinco partes", bullets: ["Papel", "Alunos (sem nomes)", "Objetivo, limites, formato"] },
            { title: "Exemplo", bullets: ["Professor do 4.º ano, vários níveis de leitura", "Texto sobre o ciclo da água em três níveis", "Cinco perguntas para cada um, numa tabela"] },
            { title: "Melhorar e guardar", bullets: ["Seguimentos: mais simples, acrescentar vocabulário", "Guarde os melhores num cartão de pedidos partilhado"] }
          ],
          tryIt: "Escreva um pedido de cinco partes para uma aula que vai dar (ou apoiar) em breve. Envie-o, faça um pedido de seguimento e guarde o pedido final.",
          youCanNow: "escrever pedidos de professor que dão resultados úteis à primeira.",
          quickCheck: [
            { objective: "O2", q: "O que vai na parte dos \"limites\" de um pedido de professor?", options: ["Limites como o tamanho, o nível de leitura ou o que evitar", "O nome completo do aluno", "A palavra-passe do professor", "O nome da ferramenta de IA"], answer: 0, why: "Os limites fazem a resposta servir para a sua turma." },
            { objective: "O2", q: "A IA dá um texto difícil demais para os seus alunos. O que envia?", options: ["Começa de novo noutra ferramenta", "Aceita-o e explica as palavras difíceis na aula", "Cola os resultados de leitura de um aluno", "Um pedido de seguimento como \"Faça mais simples, com frases mais curtas\""], answer: 3, why: "Um pedido de seguimento claro ajusta a resposta sem partilhar dados dos alunos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Três tarefas do dia a dia, bem feitas",
          minutes: 6,
          goal: "Usar a IA para um email aos pais, um texto por níveis e perguntas de prática, e verificar cada um.",
          text: [
            "Email aos pais: diga o objetivo, os factos principais (evento, data, o que as famílias têm de fazer) e o tom. Peça uma versão curta e calorosa em inglês simples. Se tiver de ir noutras línguas, uma tradução feita pela IA é um rascunho; peça a uma pessoa qualificada que fale essa língua para a verificar antes de chegar às famílias.",
            "Texto por níveis: peça o mesmo conteúdo em três níveis de leitura, com os mesmos factos principais. Verifique você mesmo os factos; a IA pode criar erros quando simplifica.",
            "Perguntas de prática: peça dez perguntas com a chave de respostas e uma explicação curta para cada resposta. Resolva você mesmo as respostas; as chaves de respostas da IA estão erradas mais vezes do que as pessoas pensam, sobretudo em matemática e ciências. Nas três tarefas, você é o revisor e a verificação final."
          ],
          steps: ["Email aos pais: objetivo, factos, tom; tradução verificada por uma pessoa qualificada.", "Texto por níveis: os mesmos factos em três níveis; verifique os factos.", "Perguntas de prática: chave de respostas com explicações; resolva você mesmo cada resposta.", "Reveja tudo antes de ser usado."],
          words: [["Texto por níveis", "o mesmo conteúdo escrito em diferentes níveis de leitura."], ["Chave de respostas", "a lista das respostas certas das perguntas."]],
          slides: [
            { title: "Email aos pais", bullets: ["Objetivo, factos, tom", "Inglês simples", "Traduções verificadas por um falante qualificado"] },
            { title: "Texto por níveis", bullets: ["Os mesmos factos, três níveis", "Verifique os factos: simplificar pode criar erros"] },
            { title: "Perguntas de prática", bullets: ["Dez perguntas com a chave de respostas", "Resolva você mesmo cada resposta", "Você é o revisor e a verificação final"] }
          ],
          tryIt: "Faça as três tarefas com detalhes inventados: um email aos pais sobre uma visita de estudo, um texto em três níveis e dez perguntas com a chave de respostas. Conte os erros que teve de corrigir.",
          youCanNow: "usar a IA em três tarefas do dia a dia do professor e verificar os resultados como um revisor.",
          quickCheck: [
            { objective: "O3", q: "O que é um texto por níveis?", options: ["Um texto impresso em letras grandes", "O mesmo conteúdo escrito em diferentes níveis de leitura", "Um texto sem imagens", "Um teste com três partes"], answer: 1, why: "O texto por níveis deixa alunos de diferentes níveis de leitura aprender o mesmo conteúdo." },
            { objective: "O3", q: "A IA escreve dez perguntas de prática com a chave de respostas. O que faz antes de as usar?", options: ["Resolve você mesmo cada resposta e corrige os erros", "Usa-as como estão", "Verifica só a primeira pergunta", "Pergunta à IA se as respostas estão certas"], answer: 0, why: "As chaves de respostas da IA estão erradas mais vezes do que as pessoas pensam, por isso o professor verifica cada uma." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Usar ferramentas de IA em tarefas do professor",
        questions: [
          { objective: "O1", q: "As funções de IA dentro de programas que já tem:", options: ["Estão sempre desligadas", "Nunca mexem em dados", "Podem vir ligadas de origem; confirme com a equipa de tecnologia", "Não precisam de acordo"], answer: 2, why: "As funções integradas podem ser ligadas sem ninguém decidir." },
          { objective: "O2", q: "O que pertence à parte dos \"alunos\" de um pedido de professor?", options: ["O ano e os níveis de leitura em termos gerais", "Os nomes completos dos alunos", "As metas do IEP dos alunos com o nome", "Os números de telefone dos pais"], answer: 0, why: "Descreva os alunos de forma geral, nunca com detalhes que os identifiquem." },
          { objective: "O3", q: "Uma tradução feita pela IA de uma carta às famílias é:", options: ["Pronta para enviar", "Sempre perfeita", "Ilegal", "Um rascunho que um falante qualificado deve verificar"], answer: 3, why: "As traduções podem estar erradas; as famílias merecem informações certas." },
          { objective: "O3", q: "Porque deve resolver você mesmo cada resposta de uma chave de respostas da IA?", options: ["É obrigatório por lei", "As chaves de respostas da IA estão erradas mais vezes do que as pessoas pensam", "Torna o teste mais comprido", "Os alunos gostam"], answer: 1, why: "Erros na chave enganam os alunos." },
          { objective: "O2", q: "Onde deve guardar os pedidos que funcionam bem?", options: ["Em lado nenhum", "No email aos pais", "Na conta de um aluno", "Num cartão de pedidos partilhado"], answer: 3, why: "Pedidos partilhados e testados poupam tempo aos colegas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Escolher ferramentas seguras para os alunos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ler os termos de privacidade de uma ferramenta com uma lista",
          minutes: 6,
          goal: "Verificar a política de privacidade e os termos de uma ferramenta de IA com uma lista curta.",
          text: [
            "O Gabinete de Políticas de Privacidade dos Alunos (Student Privacy Policy Office) do Departamento de Educação dos Estados Unidos publica uma lista de verificação chamada Model Terms of Service, para ajudar as escolas a rever a política de privacidade e os termos de uma ferramenta na internet antes de se inscreverem. Use-a, ou uma lista que o seu distrito já tenha.",
            "Perguntas principais: Que dados dos alunos recolhe? Quem é o dono dos dados? A empresa usa os dados dos alunos para publicidade ou para treinar os seus modelos de IA? A escola pode pedir para apagar os dados, e quando? Quem mais recebe os dados? Como são protegidos, e o que acontece se houver uma fuga de dados? A empresa pode mudar os termos sem lhe dizer?",
            "Leia a política do plano que vai mesmo usar; os planos gratuitos para o público e os planos para a educação muitas vezes têm termos diferentes. Se as respostas não forem claras, a resposta é \"ainda não\". O FERPA e o COPPA são o mínimo, e o seu estado pode ter leis de privacidade dos alunos mais rigorosas; o responsável pela privacidade do seu distrito pode dizer-lhe quais se aplicam."
          ],
          steps: ["Abra a política de privacidade e os termos da ferramenta para o plano que usaria.", "Siga a lista: dados recolhidos, dono dos dados, publicidade e treino, apagar dados, partilha, segurança, mudanças.", "Marque cada ponto como claro, pouco claro ou problema.", "Faça por escrito à empresa as perguntas sobre os pontos pouco claros.", "Envie o resultado ao responsável pela privacidade do seu distrito."],
          words: [["Política de privacidade", "o texto de uma empresa que diz que dados recolhe e como os usa."], ["Termos de serviço", "as regras e o acordo para usar um produto."], ["Fuga de dados", "quando alguém acede a dados ou eles são divulgados sem autorização."]],
          slides: [
            { title: "Use uma lista de verificação", bullets: ["Model Terms of Service (studentprivacy.ed.gov)", "Ou a lista do seu distrito"] },
            { title: "Perguntas principais", bullets: ["Que dados, quem é o dono", "Publicidade ou treino da IA com dados dos alunos?", "Apagar, partilhar, segurança, fuga de dados"] },
            { title: "Leia o plano certo", bullets: ["Os termos para o público e para a educação são diferentes", "Pouco claro quer dizer \"ainda não\"", "Pergunte ao responsável pela privacidade pelas leis do estado"] }
          ],
          sources: [{ name: "Privacy and Education Technology: Model Terms of Service checklist (lista de verificação de privacidade, em inglês)", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }, { name: "FERPA: Protecting Student Privacy (proteger a privacidade dos alunos, em inglês)", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Escolha uma ferramenta de IA que os seus funcionários querem. Leia a sua política de privacidade para o plano que usaria e marque cada ponto da lista como claro, pouco claro ou problema.",
          youCanNow: "verificar os termos de privacidade de uma ferramenta de IA com uma lista antes de ela ser usada com alunos.",
          quickCheck: [
            { objective: "O4", q: "Qual é uma pergunta da lista de verificação de privacidade?", options: ["O logótipo da ferramenta é simpático?", "Quantas pessoas a usam?", "A empresa usa os dados dos alunos para treinar a sua IA?", "Funciona em tablets?"], answer: 2, why: "Saber se os dados dos alunos treinam a IA é uma pergunta principal de privacidade." },
            { objective: "O4", q: "Os termos de privacidade do plano gratuito são diferentes dos do plano para a educação. Quais verifica?", options: ["Os que forem mais curtos", "Os do plano gratuito, porque é mais barato", "Nenhuns; os termos são todos iguais", "Os termos do plano que a sua escola vai mesmo usar"], answer: 3, why: "Os planos gratuitos para o público e os planos para a educação muitas vezes têm termos diferentes." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Regras de idade e contas dos alunos",
          minutes: 5,
          goal: "Verificar as regras de idade de uma ferramenta e como se aplica o COPPA antes de os alunos entrarem.",
          text: [
            "Muitas ferramentas de IA definem idades mínimas e regras de autorização dos pais nos seus termos, e estas mudam. Verifique os termos atuais de cada ferramenta; não confie no que um colega se lembra. Uma ferramenta que serve para professores pode não ser permitida para alunos.",
            "Para crianças com menos de 13 anos, o COPPA (lei dos EUA de proteção da privacidade das crianças na internet) aplica-se ao serviço na internet. A FTC (a comissão federal de comércio dos EUA) diz que uma escola só pode dar autorização no lugar dos pais quando o serviço recolhe informações dos alunos para uso e benefício da escola e para nenhum outro fim comercial. A FTC também sugere, como boa prática, que as escolas digam aos pais que serviços na internet aprovaram.",
            "Prefira contas de alunos geridas pela escola, com um acordo do distrito, em vez de os alunos se inscreverem sozinhos com emails pessoais. Decida antes para que os alunos podem usar a IA, e diga às famílias."
          ],
          steps: ["Leia as regras atuais de idade e de autorização da ferramenta.", "Se os alunos tiverem menos de 13 anos, veja como funcionaria a autorização do COPPA.", "Prefira contas geridas pela escola, com um acordo.", "Diga às famílias que serviços estão aprovados.", "Decida para que os alunos a podem usar."],
          words: [["Idade mínima", "a idade mais nova que os termos de uma ferramenta permitem para a usar."], ["Conta gerida pela escola", "uma conta de aluno criada e controlada pela escola."]],
          slides: [
            { title: "Verifique as regras de idade de cada ferramenta", bullets: ["Estão nos termos da própria ferramenta", "Mudam: leia a versão atual", "Serve para o professor não quer dizer que serve para o aluno"] },
            { title: "Menos de 13 anos: COPPA", bullets: ["Autorização da escola só para uso da escola", "Nenhum outro fim comercial", "Diga aos pais o que aprovou"] },
            { title: "Contas", bullets: ["Geridas pela escola, com um acordo", "Não inscrições pessoais", "Diga às famílias os usos permitidos"] }
          ],
          sources: [{ name: "FTC: Complying with COPPA, Frequently Asked Questions (perguntas frequentes sobre o COPPA, em inglês)", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Para a ferramenta da Lição 4, encontre nos seus termos a idade mínima atual e a regra de autorização dos pais. Escreva se os alunos da sua escola a podiam usar, e como.",
          youCanNow: "verificar as regras de idade de uma ferramenta e a autorização do COPPA antes de qualquer aluno entrar.",
          quickCheck: [
            { objective: "O5", q: "Como devem ser criadas, de preferência, as contas dos alunos numa ferramenta de IA?", options: ["Os alunos inscrevem-se com o email pessoal", "Os professores partilham um só acesso com a turma", "Contas geridas pela escola, com um acordo", "Sem contas; os alunos usam a conta de um dos pais"], answer: 2, why: "As contas geridas pela escola, com um acordo, mantêm os dados dos alunos sob o controlo da escola." },
            { objective: "O5", q: "Um colega diz que uma ferramenta serve para crianças de 10 anos. O que verifica?", options: ["Os termos atuais da ferramenta, com a idade mínima e a regra de autorização dos pais", "Uma opinião nas redes sociais", "Se outras escolas a usam", "Nada; confia no colega"], answer: 0, why: "As regras de idade mudam, por isso verifique você mesmo os termos atuais da ferramenta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Publicar uma lista de ferramentas verde-amarelo-vermelho",
          minutes: 6,
          goal: "Publicar uma lista simples que diz aos funcionários que ferramentas de IA estão aprovadas e para quê.",
          text: [
            "Os funcionários precisam de uma resposta simples a \"posso usar isto?\". Uma lista verde-amarelo-vermelho dá essa resposta. Verde: aprovada com um acordo do distrito; pode ser usada com informações dos alunos como o acordo permite. Amarelo: permitida para tarefas do professor sem informações dos alunos (ideias de aulas, materiais gerais). Vermelho: não permitida, por problemas de privacidade, de idade ou de qualidade.",
            "Para cada ferramenta, anote a cor, a razão, os usos permitidos, se os alunos a podem usar e a data em que verificou. O responsável pela privacidade do seu distrito ou a equipa de tecnologia deve concordar com a lista verde.",
            "Junte a lista ao seu cartão de pedidos, para os funcionários saberem o que usar e como usar bem. Reveja os dois em cada período escolar, porque as ferramentas e os termos mudam."
          ],
          steps: ["Faça a lista das ferramentas que verificou.", "Dê uma cor a cada uma: verde, amarelo ou vermelho.", "Escreva a razão, os usos permitidos, o uso pelos alunos e a data de verificação.", "Peça ao responsável pela privacidade ou à equipa de tecnologia para confirmar.", "Partilhe-a com o cartão de pedidos; reveja em cada período."],
          words: [["Lista aprovada", "uma lista publicada das ferramentas que os funcionários podem usar e como."], ["Acordo", "um contrato assinado ou um acordo de privacidade de dados entre o distrito e uma empresa."]],
          slides: [
            { title: "Três cores", bullets: ["Verde: aprovada com um acordo", "Amarelo: tarefas do professor, sem informações dos alunos", "Vermelho: não permitida"] },
            { title: "Para cada ferramenta, anote", bullets: ["Cor e razão", "Usos permitidos e uso pelos alunos", "Data de verificação"] },
            { title: "Mantenha-a útil", bullets: ["Confirme com a equipa de privacidade ou de tecnologia", "Partilhe com o cartão de pedidos", "Reveja em cada período"] }
          ],
          tryIt: "Tarefa final: faça o seu kit inicial, um cartão de pedidos com os seus três pedidos testados (email aos pais, texto por níveis, perguntas de prática) e uma lista verde-amarelo-vermelho de pelo menos três ferramentas verificadas com a lista de privacidade, cada uma com uma linha a explicar a razão.",
          youCanNow: "dar aos funcionários um guia simples e de confiança sobre que ferramentas de IA usar e como as usar.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer uma ferramenta VERDE na lista?", options: ["É gratuita", "Pode ser usada, mesmo com informações dos alunos, como o acordo do distrito permite", "É proibida", "Só os alunos a podem usar"], answer: 1, why: "As ferramentas verdes estão aprovadas, e as informações dos alunos só são permitidas como o acordo permite." },
            { objective: "O6", q: "Os termos de uma ferramenta mudaram desde que fez a lista. O que faz?", options: ["Deixa a lista como está até ao próximo ano", "Apaga a lista toda", "Verifica de novo a ferramenta e atualiza a cor e a data de verificação", "Diz aos funcionários para decidirem sozinhos"], answer: 2, why: "A lista mostra a data de verificação para se manter atualizada quando os termos mudam." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Escolher ferramentas seguras para os alunos",
        questions: [
          { objective: "O4", q: "Onde encontra a lista de verificação Model Terms of Service?", options: ["Numa publicação nas redes sociais", "Num anúncio de uma empresa", "Em studentprivacy.ed.gov", "No logótipo da ferramenta"], answer: 2, why: "O Student Privacy Policy Office publica-a." },
          { objective: "O4", q: "A política de privacidade de uma ferramenta não é clara sobre treinar a IA com dados dos alunos. A sua decisão?", options: ["\"Ainda não\": perguntar à empresa por escrito", "Aprová-la", "Deixar os alunos decidirem", "Ignorar a pergunta"], answer: 0, why: "Respostas pouco claras querem dizer que a ferramenta ainda não está pronta para ser aprovada." },
          { objective: "O5", q: "Um colega diz que a idade mínima de uma ferramenta é 13 anos. O que deve fazer?", options: ["Confiar", "Verificar você mesmo os termos atuais da ferramenta", "Perguntar a um aluno", "Pensar que não há limite"], answer: 1, why: "As regras de idade são definidas por cada ferramenta e mudam." },
          { objective: "O6", q: "O que quer dizer uma ferramenta AMARELA na lista?", options: ["Só tarefas do professor, sem informações dos alunos", "Aprovada para todos os dados dos alunos", "Proibida", "Só para os pais"], answer: 0, why: "O amarelo permite o uso geral pelo professor sem dados dos alunos." },
          { objective: "O6", q: "Com que frequência deve ser revista a lista de ferramentas?", options: ["Nunca", "Só depois de uma fuga de dados", "De dez em dez anos", "Em cada período escolar"], answer: 3, why: "As ferramentas e os termos mudam muitas vezes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Líderes Escolares e Educativos 2: Ferramentas de IA para Educadores",
    questions: [
      { objective: "O1", q: "Qual é um assistente geral de IA?", options: ["Uma caderneta de notas", "Google Gemini", "Um projetor", "Um horário de toques"], answer: 1, why: "O Gemini, o ChatGPT, o Copilot e o Claude são assistentes gerais." },
      { objective: "O1", q: "Os assistentes gerais conhecem o seu currículo:", options: ["Pelos registos dos seus alunos", "Sempre", "Só se você lhes disser", "Pelo horário de toques"], answer: 2, why: "Precisam de contexto no pedido." },
      { objective: "O1", q: "As plataformas educativas de IA têm de ser:", options: ["Pagas pelos alunos", "Usadas sem verificar", "Verificadas quanto à privacidade e à qualidade", "Proibidas"], answer: 2, why: "Todas as ferramentas precisam de ser verificadas." },
      { objective: "O2", q: "O pedido de professor em cinco partes inclui:", options: ["Papel, alunos, objetivo, limites, formato", "Nomes, notas, IEP, moradas, telefones", "Só o tema", "Uma palavra-passe"], answer: 0, why: "Essas partes dão resultados úteis." },
      { objective: "O2", q: "Um bom pedido de seguimento é:", options: ["\"Apague a resposta.\"", "\"Aqui estão os nomes dos meus alunos.\"", "\"Dê notas à minha turma.\"", "\"Faça o nível 1 mais simples.\""], answer: 3, why: "Melhora o resultado sem dados privados." },
      { objective: "O2", q: "Um cartão de pedidos é:", options: ["Um cartão de identificação de aluno", "Uma lista partilhada de pedidos testados", "Um passe de estacionamento", "Uma pauta de notas"], answer: 1, why: "Deixa os colegas usarem outra vez o que funciona." },
      { objective: "O3", q: "Texto por níveis quer dizer:", options: ["Um tamanho de letra", "Um texto numa prateleira", "Uma nota de teste", "O mesmo conteúdo em diferentes níveis de leitura"], answer: 3, why: "Dá a mais alunos acesso às mesmas ideias." },
      { objective: "O3", q: "Quando a IA simplifica um texto, você deve:", options: ["Torná-lo mais comprido", "Confiar nele", "Verificar se os factos continuam certos", "Tirar todos os factos"], answer: 2, why: "Simplificar pode criar erros." },
      { objective: "O3", q: "Nas tarefas do professor feitas com ajuda da IA, o professor é:", options: ["O revisor e a verificação final", "Desnecessário", "O assistente da IA", "Só um leitor"], answer: 0, why: "O professor é responsável pelo que chega aos alunos." },
      { objective: "O4", q: "Que pergunta está numa lista de verificação de privacidade?", options: ["De que cor é a aplicação?", "A empresa usa os dados dos alunos para treinar a sua IA?", "Quantos downloads tem?", "Está na moda?"], answer: 1, why: "O uso de dados dos alunos para treino é uma preocupação principal." },
      { objective: "O4", q: "Os planos gratuitos para o público e os planos para a educação:", options: ["Muitas vezes têm termos diferentes", "Têm sempre os mesmos termos", "Nunca recolhem dados", "São os dois inseguros"], answer: 0, why: "Leia os termos do plano que vai usar." },
      { objective: "O4", q: "Quem deve confirmar a sua lista verde?", options: ["Ninguém", "Um aluno", "A empresa que vende a ferramenta", "O responsável pela privacidade do distrito ou a equipa de tecnologia"], answer: 3, why: "A aprovação precisa das pessoas responsáveis pela privacidade." },
      { objective: "O4", q: "As leis estaduais de privacidade dos alunos:", options: ["Nunca existem", "Podem acrescentar exigências além do FERPA e do COPPA", "Substituem por completo a lei federal", "Só se aplicam às universidades"], answer: 1, why: "A lei federal é o mínimo; os estados podem acrescentar mais." },
      { objective: "O5", q: "No COPPA, a autorização da escola só vale quando os dados são recolhidos:", options: ["Por qualquer razão", "Para publicidade", "Para uso e benefício da escola, sem nenhum outro fim comercial", "Nunca"], answer: 2, why: "Essa é a condição da FTC." },
      { objective: "O5", q: "A FTC sugere que as escolas:", options: ["Deixem os alunos aprovar as ferramentas", "Mantenham as aprovações em segredo", "Digam aos pais que serviços na internet aprovaram", "Evitem todas as ferramentas"], answer: 2, why: "É uma prática recomendada." },
      { objective: "O5", q: "As contas dos alunos devem ser, de preferência:", options: ["Geridas pela escola, com um acordo", "Inscrições pessoais com o email de casa", "Partilhadas pela turma toda", "Criadas pela empresa que vende a ferramenta"], answer: 0, why: "As contas geridas pela escola mantêm o controlo na escola." },
      { objective: "O6", q: "Uma ferramenta VERMELHA é:", options: ["Em análise para sempre", "Aprovada para todos os usos", "Só para tarefas do professor", "Não permitida"], answer: 3, why: "Vermelho quer dizer não usar." },
      { objective: "O6", q: "Uma ferramenta VERDE pode ser usada com informações dos alunos:", options: ["Sem nenhum limite", "Como o acordo do distrito permite", "Nunca", "Só ao fim de semana"], answer: 1, why: "O acordo define os limites." },
      { objective: "O6", q: "Cada ferramenta na lista deve mostrar:", options: ["O número de downloads", "Só o logótipo", "Só o preço", "Cor, razão, usos permitidos e data de verificação"], answer: 3, why: "Os funcionários precisam da razão e dos limites." },
      { objective: "O3", q: "A prática deste curso deve usar:", options: ["Os nomes dos alunos", "Registos reais de alunos", "Exemplos inventados", "Documentos do IEP"], answer: 2, why: "Nunca use informações que identifiquem alunos na prática." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      7,
      8,
      9,
      10,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Cartão de pedidos",
        objective: "O2",
        notYet: "Menos de três pedidos, ou faltam partes nos pedidos.",
        meets: "Três pedidos testados (email aos pais, texto por níveis, perguntas de prática) com papel, alunos, objetivo, limites e formato.",
        exceeds: "Cada pedido inclui um pedido de seguimento útil que os funcionários podem usar outra vez."
      },
      {
        name: "Resultados verificados",
        objective: "O3",
        notYet: "Os resultados foram usados sem verificar, ou as respostas da chave não foram resolvidas.",
        meets: "Cada resultado foi verificado e os erros corrigidos; cada resposta da chave foi resolvida.",
        exceeds: "Anota quantos erros encontrou e de que tipo."
      },
      {
        name: "Lista de verificação de privacidade",
        objective: "O4",
        notYet: "As ferramentas não foram verificadas, ou a lista não se baseia no recurso Model Terms of Service.",
        meets: "Cada ferramenta foi verificada com uma lista de privacidade feita a partir do recurso Model Terms of Service do studentprivacy.ed.gov.",
        exceeds: "Os pontos pouco claros foram enviados à empresa como perguntas por escrito."
      },
      {
        name: "Regras de idade",
        objective: "O5",
        notYet: "O uso pelos alunos é permitido sem verificar as regras de idade.",
        meets: "Anota a idade mínima atual e a regra de autorização dos pais de cada ferramenta, tiradas dos seus termos.",
        exceeds: "Explica como os alunos a poderiam usar, por exemplo com contas geridas pela escola."
      },
      {
        name: "Lista verde-amarelo-vermelho",
        objective: "O6",
        notYet: "Menos de três ferramentas, ou cores sem razões.",
        meets: "Pelo menos três ferramentas, cada uma com uma cor e uma linha a explicar a razão.",
        exceeds: "Também mostra os usos permitidos e a data de verificação, e foi enviada ao responsável pela privacidade ou à equipa de tecnologia para confirmar."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Escolas que publicam uma lista verde-amarelo-vermelho de ferramentas de IA em 30 dias (inquérito de seguimento)",
      "Professores que dizem usar um cartão de pedidos partilhado nas tarefas da semana (inquérito de seguimento)",
      "Líderes que continuam para o curso 3 de IA para Líderes Escolares e Educativos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet e pelo menos um assistente de IA gratuito",
      "O recurso Model Terms of Service do studentprivacy.ed.gov",
      "Exemplos inventados para as tarefas de prática",
      "A lista de ferramentas e acordos aprovados do seu distrito, se existir",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois façam as três tarefas do dia a dia ao vivo, com detalhes inventados.",
      "Nunca use nomes, notas ou detalhes do IEP de alunos reais na prática.",
      "Divida o grupo para cada par verificar uma ferramenta diferente e depois junte os resultados num rascunho de lista.",
      "Convide o responsável pela privacidade do distrito ou a equipa de tecnologia para rever o rascunho da lista.",
      "Avalie a tarefa final com a grelha de avaliação e confirme que a data de verificação de cada ferramenta está anotada."
    ]
  }
};
