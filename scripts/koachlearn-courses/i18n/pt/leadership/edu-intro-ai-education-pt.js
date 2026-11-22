"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-intro-ai-education.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US schools and US law (FERPA, COPPA, US Department of Education); US names are kept.

module.exports = {
  id: "edu-intro-ai-education-pt",
  lang: "pt",
  translationOf: "edu-intro-ai-education",
  category: "Leadership Development",
  name: "IA para Líderes Escolares e Educativos 1: Introdução à IA na Educação",
  skills: "Explicar a IA aos funcionários e às famílias, Reconhecer bons e maus usos nas escolas, Conhecer o básico da privacidade dos alunos (FERPA, COPPA), Ler as orientações federais sobre IA, Conduzir uma conversa com os funcionários",
  outcome: "explicar aos seus funcionários o que é a IA e como ela já aparece na escola, dizer os bons usos e os riscos, explicar o básico da privacidade dos alunos segundo a FERPA e a COPPA, e conduzir uma conversa de 15 minutos com os funcionários usando um folheto de uma página \"A IA na nossa escola\".",
  about: [
    "Este curso é para diretores, diretores-adjuntos, professores líderes, orientadores pedagógicos e líderes distritais. Não precisa de formação técnica. Os seus professores e alunos já usam IA; este curso ajuda você a orientar esse uso em vez de apenas reagir a ele.",
    "O Capítulo 1 explica o que é a IA, onde ela já aparece na sua escola e onde ajuda e prejudica a aprendizagem. O Capítulo 2 trata do que os líderes precisam de saber antes de tudo: a privacidade dos alunos segundo a FERPA e a COPPA (leis dos Estados Unidos), o que o Departamento de Educação dos EUA disse sobre a IA e como abrir a conversa com os seus funcionários.",
    "Este curso explica a lei com palavras simples para você saber o que perguntar; não é aconselhamento jurídico. O advogado do seu distrito e o responsável pela privacidade têm a última palavra. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso. Este é o curso 1 de 8 de IA para Líderes Escolares e Educativos."
  ],
  finalTask: "Escreva um folheto de uma página \"A IA na nossa escola\" para os funcionários: o que é a IA em duas frases, três maneiras em que pode ajudar os professores, três riscos para os alunos, a regra de privacidade (\"nenhum nome, nota ou outra informação pessoal identificável de alunos em ferramentas de IA que o distrito não aprovou\") e a quem perguntar. Use-o para conduzir uma conversa de 15 minutos com os funcionários e anote as três principais perguntas que eles fizeram.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Diretores, diretores-adjuntos, professores líderes, orientadores pedagógicos e líderes distritais em escolas dos Estados Unidos. Não é preciso formação técnica.",
    startingPoint: "Sabem que os professores e os alunos usam IA e talvez já tenham experimentado um chatbot. Ainda não conseguem explicar a IA com clareza aos funcionários, mapear onde ela é usada na escola nem dizer o básico da privacidade dos alunos que se aplica às ferramentas de IA.",
    gap: "A IA já está nas salas de aula, muitas vezes sem orientação. Os líderes precisam de a explicar com simplicidade, ver onde é usada, avaliar os usos que ajudam e os que prejudicam e conhecer o básico da FERPA e da COPPA, para orientarem o uso da IA em vez de apenas reagirem e para protegerem a privacidade dos alunos.",
    constraints: [
      "Palavras simples para líderes escolares sem formação técnica; o curso explica a lei mas não é aconselhamento jurídico",
      "O advogado do distrito e o responsável pela privacidade têm a última palavra sobre as obrigações de privacidade",
      "Nenhum nome, nota ou outra informação pessoal identificável de alunos em ferramentas de IA não aprovadas, nem mesmo na prática",
      "As orientações federais e estaduais mudam, por isso os líderes verificam eles próprios a versão atual",
      "Tempo: lições curtas que cabem num dia de escola, mais uma conversa de 15 minutos com os funcionários"
    ],
    prerequisites: "Nenhum. Este é o curso 1 de 8 de IA para Líderes Escolares e Educativos."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Quando um funcionário, um pai ou um aluno pergunta o que é a IA", action: "explicar a IA e a IA generativa com palavras simples, incluindo porque pode estar errada", standard: "em duas frases que um professor novo, um pai e um aluno do 5.º ano conseguem entender" },
    { id: "O2", condition: "Com o seu coordenador de tecnologia ou dois professores", action: "mapear onde a IA já aparece na sua escola", standard: "indicando pelo menos seis lugares, cada um marcado como aprovado ou não e se usa dados de alunos" },
    { id: "O3", condition: "Com usos de IA vistos nas escolas", action: "classificar cada uso como útil, com cuidado ou prejudicial", standard: "com uma razão para cada um, usando o teste da família" },
    { id: "O4", condition: "Quando os funcionários usam ferramentas de IA", action: "dizer o básico da FERPA e da COPPA e reescrever um pedido para que não tenha nenhuma informação de alunos", standard: "dizendo quando perguntar ao responsável pela privacidade ou ao advogado" },
    { id: "O5", condition: "Com as orientações federais e estaduais sobre IA nas escolas", action: "resumir um princípio federal e encontrar as orientações atuais do seu estado", standard: "anotando a data e um ponto que elas trazem, ou que ainda não existem" },
    { id: "O6", condition: "Com os seus funcionários", action: "conduzir uma conversa de 15 minutos sobre IA usando um folheto de uma página \"A IA na nossa escola\"", standard: "com todas as partes do folheto e as três principais perguntas dos funcionários anotadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A IA nas escolas de hoje",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a IA, com palavras que os seus funcionários vão usar",
          minutes: 5,
          goal: "Explicar a IA e a IA generativa aos funcionários com palavras simples.",
          text: [
            "A inteligência artificial (IA) é um programa de computador que faz tarefas que normalmente precisam do juízo de uma pessoa, como reconhecer a fala, encontrar padrões ou escrever. A IA generativa cria conteúdo novo: textos, imagens, áudio e código. Ferramentas de conversa como o ChatGPT, o Microsoft Copilot, o Google Gemini e o Claude funcionam com grandes modelos de linguagem (LLM, em inglês) que preveem as palavras mais prováveis.",
            "Como preveem as palavras mais prováveis, estas ferramentas escrevem bem e mesmo assim podem estar erradas, desatualizadas ou ter preconceitos. Não conhecem os seus alunos, o seu currículo nem a sua comunidade, a não ser que alguém lhes diga, e não se lhes deve dar informações privadas dos alunos.",
            "Uma maneira simples de o dizer aos funcionários: \"A IA é um parceiro rápido para um primeiro rascunho. Não substitui o juízo do professor e nunca tem a última palavra sobre um aluno.\""
          ],
          words: [["IA generativa", "IA que cria textos, imagens, áudio ou código novos."], ["LLM", "grande modelo de linguagem (em inglês, large language model): a IA por trás dos assistentes de conversa."], ["Alucinação", "quando a IA escreve algo que parece verdade mas é inventado."]],
          slides: [
            { title: "A IA em duas frases", bullets: ["Programa que faz tarefas que precisam de juízo", "A IA generativa cria textos, imagens, código"] },
            { title: "Escrever bem não é o mesmo que estar certo", bullets: ["Pode estar errada, desatualizada ou ter preconceitos", "Não conhece os seus alunos nem o seu currículo"] },
            { title: "Diga aos funcionários", bullets: ["Um parceiro rápido para o primeiro rascunho", "Nunca substitui o juízo do professor", "Nunca tem a última palavra sobre um aluno"] }
          ],
          tryIt: "Escreva uma explicação da IA em duas frases que um professor novo, um pai e um aluno do 5.º ano consigam entender. Experimente-a com um colega.",
          youCanNow: "explicar a IA e a IA generativa com palavras simples aos funcionários e às famílias.",
          quickCheck: [
            { objective: "O1", q: "O que é a IA generativa?", options: ["IA que cria textos, imagens ou código novos", "Um programa que corrige testes sozinho", "Um motor de busca para registos escolares", "Um programa que nunca erra"], answer: 0, why: "A IA generativa cria conteúdo novo, e por isso também pode produzir erros." },
            { objective: "O1", q: "Um pai pergunta porque um chatbot deu ao filho um dado errado. O que explicaria?", options: ["A criança deve ter escrito mal", "A IA prevê as palavras mais prováveis e pode errar, por isso as respostas precisam de ser verificadas", "A ferramenta estava avariada nesse dia", "Só as ferramentas de IA pagas são exatas"], answer: 1, why: "A IA prevê o texto mais provável em vez de verificar os factos, por isso pode parecer certa e estar errada." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Onde a IA já aparece na sua escola",
          minutes: 5,
          goal: "Mapear onde a IA já é usada na sua escola, de forma oficial e não oficial.",
          text: [
            "A IA já está na sua escola. Os professores podem usar ferramentas de conversa para preparar aulas ou mensagens aos pais. Os alunos podem usá-las nos trabalhos de casa, às vezes de forma correta, às vezes não. Muitos produtos que o seu distrito já paga (plataformas de aprendizagem, ferramentas de escrita, programas de leitura, programas de escritório) acrescentaram funções de IA, às vezes já ligadas de origem.",
            "Também há IA nos bastidores: programas de prática adaptativos que escolhem a próxima pergunta, painéis de alerta precoce, detetores de plágio e de textos escritos por IA, e ferramentas de segurança ou de vigilância.",
            "Os líderes não conseguem orientar o que não conseguem ver. Um mapa rápido, feito com o coordenador de tecnologia e alguns professores, mostra que ferramentas estão aprovadas, quais são usadas mesmo sem aprovação e quais usam dados de alunos. Esse mapa é o ponto de partida para todas as decisões seguintes."
          ],
          steps: ["Pergunte aos professores, aos alunos e ao coordenador de tecnologia que ferramentas de IA usam.", "Faça a lista das funções de IA dentro dos produtos que já têm.", "Marque cada uma: aprovada ou não, e se usa dados de alunos.", "Anote onde os alunos encontram IA sem o saber."],
          words: [["Programa adaptativo", "programa que muda a próxima pergunta ou atividade conforme as respostas do aluno."], ["Detetor de textos de IA", "ferramenta que diz saber se um texto foi escrito por IA; muitas vezes não é fiável."]],
          slides: [
            { title: "A IA já está aqui", bullets: ["Professores a preparar aulas e mensagens", "Alunos a usar ferramentas de conversa", "Funções de IA nas ferramentas que já têm"] },
            { title: "Nos bastidores", bullets: ["Programas de prática adaptativos", "Painéis de alerta precoce", "Detetores e ferramentas de vigilância"] },
            { title: "Faça o mapa", bullets: ["Aprovada ou não?", "Usa dados de alunos?", "Onde os alunos encontram IA sem saber"] }
          ],
          tryIt: "Com o coordenador de tecnologia ou dois professores, faça a lista de pelo menos seis lugares onde a IA aparece na sua escola. Marque cada um como aprovado ou não, e se usa dados de alunos.",
          youCanNow: "mapear onde a IA já é usada na sua escola e que usos tocam em dados de alunos.",
          quickCheck: [
            { objective: "O2", q: "O que é um programa de aprendizagem adaptativo?", options: ["Um programa que os professores mudam à mão todos os dias", "Um programa que funciona sem internet", "Um programa que muda a próxima atividade conforme as respostas do aluno", "Um programa que só os adultos podem usar"], answer: 2, why: "Os programas adaptativos usam as respostas do aluno para escolher o que vem a seguir." },
            { objective: "O2", q: "Descobre que uma ferramenta que a escola já tem passou a ter uma função de IA ligada. O que faz?", options: ["Ignora, porque a ferramenta já estava aprovada", "Proíbe logo a ferramenta toda", "Pede aos professores para deixarem de usar computadores", "Acrescenta-a ao seu mapa de IA e verifica se usa dados de alunos"], answer: 3, why: "As funções de IA podem aparecer em ferramentas que já tem, por isso entram no mapa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Onde a IA ajuda a aprendizagem, e onde prejudica",
          minutes: 5,
          goal: "Classificar os usos da IA na escola como úteis, com cuidado e prejudiciais.",
          text: [
            "Os usos úteis normalmente poupam tempo aos professores ou abrem o acesso: preparar materiais de aula, criar perguntas de prática em vários níveis de leitura, traduzir cartas às famílias para uma pessoa qualificada verificar, e dar aos alunos um explicador paciente, como um explicador particular, com a orientação do professor.",
            "Os usos com cuidado precisam de regras claras: alunos a usar IA nos trabalhos (pode substituir o raciocínio que o trabalho devia desenvolver), comentários da IA sobre o trabalho dos alunos (podem ser genéricos ou errados) e detetores de textos de IA (podem acusar alunos injustamente, incluindo alunos que aprendem inglês).",
            "Usos prejudiciais: colocar informações pessoais de alunos em ferramentas não aprovadas, deixar a IA decidir notas, colocação em turmas, disciplina ou educação especial, e usar a IA de formas que não foram explicadas às famílias. Um teste para os funcionários: \"Eu ficaria à vontade para explicar este uso à família do aluno?\""
          ],
          words: [["Acesso", "se todos os alunos conseguem participar e beneficiar, incluindo os alunos com deficiência e os que aprendem inglês."], ["Acusação injusta", "dizer erradamente que um aluno fez batota, por exemplo porque um detetor marcou o seu trabalho."]],
          slides: [
            { title: "Útil", bullets: ["Preparar materiais e prática", "Vários níveis de leitura", "Rascunhos de tradução que uma pessoa verifica"] },
            { title: "Com cuidado", bullets: ["Uso pelos alunos nos trabalhos", "Comentários da IA sobre o trabalho dos alunos", "Detetores de textos de IA podem acusar injustamente"] },
            { title: "Prejudicial", bullets: ["Dados de alunos em ferramentas não aprovadas", "A IA a decidir notas, colocação, disciplina", "Usos que não foram explicados às famílias"] },
            { title: "O teste da família", bullets: ["Eu explicaria este uso à família?"] }
          ],
          tryIt: "Faça a lista de oito usos de IA que viu ou de que ouviu falar nas escolas. Marque cada um como ÚTIL, COM CUIDADO ou PREJUDICIAL e escreva uma razão.",
          youCanNow: "avaliar que usos da IA na escola ajudam a aprendizagem e quais põem os alunos em risco.",
          quickCheck: [
            { objective: "O3", q: "O que pergunta o teste da família?", options: ["Eu explicaria este uso de IA à família do aluno?", "A família tem computador?", "A família pagou a ferramenta?", "A família usaria IA em casa?"], answer: 0, why: "Se não o explicaria a uma família, esse uso precisa de ser revisto." },
            { objective: "O3", q: "Um professor quer usar um detetor de IA para decidir se houve batota nas redações. Como o marcaria?", options: ["ÚTIL: poupa tempo", "PREJUDICIAL: nunca se deve usar IA", "COM CUIDADO: os detetores podem acusar alunos injustamente, por isso nunca são a única prova", "Não vale a pena discutir"], answer: 2, why: "Os detetores podem acusar alunos injustamente, incluindo os que aprendem inglês." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A IA nas escolas de hoje",
        questions: [
          { objective: "O1", q: "Qual é a melhor descrição simples da IA generativa para os funcionários?", options: ["Uma câmara de segurança da escola", "Um novo sistema de notas", "IA que cria textos, imagens ou código novos", "Uma aplicação de presenças"], answer: 2, why: "A IA generativa cria conteúdo novo." },
          { objective: "O1", q: "Um professor diz: \"Foi a IA que escreveu, por isso deve estar certo.\" Qual é a melhor resposta?", options: ["A IA prevê as palavras mais prováveis e pode errar; verifique", "Concordar", "Só se for comprido", "Só se usar palavras difíceis"], answer: 0, why: "Um texto bem escrito pode estar errado." },
          { objective: "O2", q: "Porque fazer primeiro o mapa do uso de IA na sua escola?", options: ["Para proibir tudo", "Os fornecedores exigem", "É divertido", "Os líderes não conseguem orientar o que não conseguem ver"], answer: 3, why: "O mapa mostra o uso aprovado, o uso escondido e o risco para os dados dos alunos." },
          { objective: "O3", q: "Porque os detetores de textos de IA são um uso COM CUIDADO?", options: ["Estão sempre certos", "Podem acusar alunos injustamente, incluindo os que aprendem inglês", "São gratuitos", "Escrevem redações"], answer: 1, why: "Os falsos positivos podem prejudicar os alunos." },
          { objective: "O3", q: "Que uso é PREJUDICIAL?", options: ["Preparar perguntas de prática", "Fazer um texto de leitura em três níveis", "Preparar um boletim informativo", "Deixar a IA decidir a colocação de um aluno na educação especial"], answer: 3, why: "As decisões sobre os alunos ficam com pessoas qualificadas." }
        ]
      }
    },
    {
      name: "Capítulo 2: O que os líderes precisam de saber primeiro",
      lessons: [
        {
          objectives: ["O4"],
          title: "O básico da privacidade dos alunos: FERPA e COPPA",
          minutes: 6,
          goal: "Dizer o básico da FERPA e da COPPA que se aplica quando os funcionários usam ferramentas de IA.",
          text: [
            "A FERPA (Family Educational Rights and Privacy Act, lei federal dos EUA sobre os direitos educativos e a privacidade das famílias) protege a privacidade dos registos escolares dos alunos: registos diretamente ligados a um aluno e guardados pela escola. Os pais têm o direito de examinar e rever esses registos e de pedir correções; os direitos passam para o aluno aos 18 anos ou quando ele entra no ensino superior. Em geral, as escolas precisam de consentimento para divulgar informações pessoais identificáveis, com exceções como as informações de diretório (depois de aviso e da possibilidade de recusar) e os funcionários da escola com um interesse educativo legítimo. Um fornecedor externo só conta como funcionário da escola se presta um serviço da escola, está sob o controlo direto da escola e cumpre limites na partilha com outros.",
            "A COPPA (Children's Online Privacy Protection Act, lei de proteção da privacidade das crianças na internet), aplicada pela Comissão Federal de Comércio (FTC), protege as crianças com menos de 13 anos na internet. A FTC diz que uma escola só pode dar consentimento no lugar dos pais quando o serviço recolhe informações para uso e benefício da escola e para nenhum outro fim comercial. A FTC alterou a sua Regra COPPA em 22 de abril de 2025.",
            "Na prática, isto quer dizer: um professor que cola nomes, notas, dados do IEP (plano educativo individual) ou outras informações identificáveis de alunos numa ferramenta de IA gratuita que o distrito não aprovou pode estar a divulgar registos escolares a uma empresa sem nenhum acordo. A regra do líder: só ferramentas aprovadas pelo distrito para tudo o que diz respeito aos alunos, e tirar os dados identificáveis mesmo assim. Para as suas obrigações exatas, pergunte ao responsável pela privacidade ou ao advogado do distrito; as leis estaduais de privacidade dos alunos podem acrescentar mais."
          ],
          words: [["FERPA", "a lei federal dos EUA que protege a privacidade dos registos escolares dos alunos."], ["COPPA", "a lei federal dos EUA que protege a privacidade na internet das crianças com menos de 13 anos."], ["Informação pessoal identificável (PII)", "informação que identifica um aluno, como o nome, o número de identificação ou uma mistura de dados."], ["Informações de diretório", "dados básicos como o nome e as datas de frequência que a escola pode partilhar depois de aviso e da possibilidade de recusar."]],
          slides: [
            { title: "A FERPA em resumo", bullets: ["Protege os registos escolares dos alunos", "Os pais podem examiná-los e pedir correções", "Os direitos passam para o aluno aos 18 anos ou no ensino superior"] },
            { title: "A FERPA e os fornecedores", bullets: ["Em geral é preciso consentimento para partilhar PII", "Fornecedor como funcionário: serviço da escola, controlo direto", "E limites na partilha com outros"] },
            { title: "A COPPA em resumo", bullets: ["Crianças com menos de 13 anos na internet; aplicada pela FTC", "Consentimento da escola só para uso escolar, sem outro uso comercial", "Regra alterada em 22 de abril de 2025"] },
            { title: "A regra do líder", bullets: ["Só ferramentas aprovadas pelo distrito para assuntos de alunos", "Tire os dados identificáveis mesmo assim", "Pergunte ao responsável pela privacidade; leis estaduais podem somar"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy (US Department of Education)", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FTC: Children's Privacy", url: "https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy" }],
          tryIt: "Escreva três exemplos do que um professor NÃO deve colar numa ferramenta de IA não aprovada, e reescreva um deles para pedir a mesma ajuda sem nenhuma informação de alunos.",
          youCanNow: "dizer o básico da FERPA e da COPPA que se aplica ao uso de IA pelos funcionários e a regra que vem daí.",
          quickCheck: [
            { objective: "O4", q: "O que protege a COPPA?", options: ["As contas de email dos professores", "A privacidade na internet das crianças com menos de 13 anos", "Os edifícios escolares", "Só os registos desportivos dos alunos"], answer: 1, why: "A COPPA protege a privacidade na internet das crianças com menos de 13 anos." },
            { objective: "O4", q: "Um professor quer ajuda da IA para escrever comentários para um aluno, com nome, que teve uma nota baixa. O que sugere?", options: ["Colar o nome e a nota em qualquer ferramenta gratuita", "Usar as iniciais do aluno, que é sempre seguro", "Não dar comentários a esse aluno", "Pedir ajuda com os comentários sem nenhum nome ou nota do aluno, ou usar uma ferramenta aprovada pelo distrito"], answer: 3, why: "Tirar as informações do aluno, ou usar uma ferramenta aprovada, protege o registo escolar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "O que dizem as orientações federais sobre a IA nas escolas",
          minutes: 5,
          goal: "Resumir as orientações federais sobre IA e encontrar você mesmo a versão atual.",
          text: [
            "Em 22 de julho de 2025, o Departamento de Educação dos EUA enviou uma carta de orientação (Dear Colleague Letter) sobre a IA. Segundo o K-12 Dive, ela diz que os fundos federais de subvenção já existentes podem apoiar a IA usada em ferramentas de currículo de alta qualidade, em explicações de alto impacto e no aconselhamento sobre percursos para o ensino superior e para a carreira, e apresenta princípios: as iniciativas de IA devem ser conduzidas por educadores, éticas, acessíveis aos alunos com deficiência, transparentes sobre como as novas ferramentas são introduzidas e cumprir as leis federais de privacidade dos dados.",
            "As orientações mudam. Leia a própria carta e qualquer orientação mais recente em ed.gov, e veja o que a agência de educação do seu estado publicou; muitos estados têm as suas próprias orientações sobre IA nas escolas. O site do Gabinete de Política de Privacidade dos Alunos do Departamento (studentprivacy.ed.gov) tem recursos sobre serviços educativos na internet, incluindo uma lista de verificação de Termos de Serviço Modelo (Model Terms of Service).",
            "Para os líderes, os princípios são um bom teste para qualquer plano de IA: É conduzido por educadores? É acessível? Explicámos às famílias como funciona? Protege os dados dos alunos?"
          ],
          steps: ["Leia a carta sobre IA do Departamento de Educação em ed.gov.", "Veja na agência de educação do seu estado se há orientações sobre IA.", "Veja os recursos de studentprivacy.ed.gov sobre serviços educativos na internet.", "Teste os seus planos com os princípios: conduzido por educadores, ético, acessível, transparente, de acordo com a privacidade."],
          words: [["Dear Colleague Letter", "carta de orientação de uma agência federal dos EUA para as escolas e os estados; é orientação, não uma lei nova."], ["Agência estadual de educação", "o departamento de educação do seu estado."]],
          slides: [
            { title: "Carta federal sobre IA, 22 de julho de 2025", bullets: ["Fundos podem apoiar IA em ferramentas de currículo", "Explicações de alto impacto", "Aconselhamento sobre ensino superior e carreira"] },
            { title: "Os seus princípios", bullets: ["Conduzida por educadores e ética", "Acessível aos alunos com deficiência", "Transparente; de acordo com as leis de privacidade"] },
            { title: "Encontre a versão atual", bullets: ["ed.gov para a carta e orientações mais recentes", "A agência de educação do seu estado", "studentprivacy.ed.gov para recursos sobre fornecedores"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department issues AI priorities (July 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Privacy and Education Technology (Student Privacy Policy Office)", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Encontre a página sobre IA da agência de educação do seu estado (procure \"artificial intelligence\" no site). Anote a data da orientação mais recente e um ponto que ela traz, ou anote que ainda não existe.",
          youCanNow: "resumir as orientações federais sobre IA para as escolas e encontrar as versões federal e estadual atuais.",
          quickCheck: [
            { objective: "O5", q: "Onde procura as orientações do seu estado sobre IA nas escolas?", options: ["No site da agência de educação do seu estado", "Numa publicação nas redes sociais", "Na resposta da própria ferramenta de IA", "Na página de vendas de um fornecedor"], answer: 0, why: "A agência estadual de educação é a fonte oficial das orientações do estado." },
            { objective: "O5", q: "Um colega cita de memória as orientações federais sobre IA. O que faz antes de as partilhar com os funcionários?", options: ["Partilha, porque parece certo", "Encontra o documento oficial atual e verifica a data e as palavras", "Pede a um chatbot de IA para confirmar", "Espera que outro colega concorde"], answer: 1, why: "As orientações mudam, por isso os líderes verificam eles próprios a versão oficial atual." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Abrir a conversa sobre IA com os seus funcionários",
          minutes: 6,
          goal: "Conduzir uma conversa de 15 minutos com os funcionários sobre IA usando um folheto de uma página.",
          text: [
            "Os funcionários sentem muitas coisas sobre a IA: entusiasmo, preocupação com a batota, medo de serem substituídos, ou simplesmente estão ocupados demais para se importarem. Comece por ouvir, não por uma regra. Pergunte: \"Onde viram IA este ano, na vossa turma ou na vossa vida?\"",
            "Depois partilhe um folheto de uma página: o que é a IA em duas frases, três maneiras em que pode ajudar os professores, três riscos para os alunos, a regra de privacidade e a quem perguntar. Mantenha-o numa só página; pode acrescentar detalhes mais tarde.",
            "Termine dizendo um próximo passo (por exemplo, um inquérito curto sobre as ferramentas que os funcionários usam, ou um grupo de professores voluntários para testar uma ferramenta aprovada) e recolha as principais perguntas. Essas perguntas dizem-lhe o que ensinar a seguir."
          ],
          steps: ["Comece com uma pergunta para ouvir.", "Partilhe o folheto de uma página.", "Discutam um exemplo útil e um exemplo arriscado.", "Diga um próximo passo.", "Recolha as três principais perguntas."],
          words: [["Folheto", "uma página curta, impressa ou partilhada, que as pessoas guardam."], ["Próximo passo", "uma ação clara que o grupo combina fazer."]],
          slides: [
            { title: "Comece por ouvir", bullets: ["\"Onde viram IA este ano?\"", "Entusiasmo, preocupação, cansaço: tudo é normal"] },
            { title: "O folheto de uma página", bullets: ["A IA em duas frases", "Três ajudas, três riscos", "A regra de privacidade e a quem perguntar"] },
            { title: "Termine bem", bullets: ["Um próximo passo", "Recolha as três principais perguntas"] }
          ],
          tryIt: "Tarefa final: escreva o seu folheto de uma página \"A IA na nossa escola\" (definição em duas frases, três ajudas, três riscos, regra de privacidade, a quem perguntar). Conduza com ele uma conversa de 15 minutos com os funcionários e anote as três principais perguntas que eles fizeram.",
          youCanNow: "abrir e conduzir a conversa da sua escola sobre a IA com um ponto de partida claro e comum.",
          quickCheck: [
            { objective: "O6", q: "Qual é uma boa maneira de abrir uma conversa com os funcionários sobre IA?", options: ["Anunciar uma lista de proibições", "Mostrar uma longa apresentação sobre como a IA funciona", "Fazer uma pergunta para ouvir onde os funcionários viram IA", "Começar com um teste"], answer: 2, why: "Começar por ouvir mostra aos funcionários que a experiência deles conta." },
            { objective: "O6", q: "No fim da sua conversa de 15 minutos, os funcionários ainda têm muitas perguntas. O que faz?", options: ["Responde a todas, mesmo que dure uma hora", "Diz-lhes para procurarem na internet", "Termina sem próximo passo", "Anota as três principais perguntas e dá um próximo passo"], answer: 3, why: "Um próximo passo claro e as perguntas recolhidas orientam o que faz a seguir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: O que os líderes precisam de saber primeiro",
        questions: [
          { objective: "O4", q: "O que protege a FERPA?", options: ["Os salários dos professores", "A segurança do edifício escolar", "A privacidade dos registos escolares dos alunos", "As ementas da cantina"], answer: 2, why: "A FERPA protege os registos escolares dos alunos." },
          { objective: "O4", q: "A COPPA protege a privacidade na internet das crianças:", options: ["Com menos de 13 anos", "Com menos de 18 anos", "Com menos de 21 anos", "De qualquer idade"], answer: 0, why: "A FTC diz que a regra protege as crianças com menos de 13 anos." },
          { objective: "O4", q: "Segundo a FTC, quando pode uma escola dar consentimento no lugar dos pais, segundo a COPPA?", options: ["Sempre que um professor quiser", "Quando o serviço recolhe dados só para uso e benefício da escola, sem outro fim comercial", "Nunca", "Quando a aplicação é gratuita"], answer: 1, why: "O consentimento da escola limita-se ao uso educativo, sem outro fim comercial." },
          { objective: "O5", q: "Qual é um princípio da carta sobre IA do Departamento de Educação de julho de 2025?", options: ["As iniciativas de IA devem ser conduzidas por educadores", "A IA deve substituir os professores", "A IA tem de ser proibida", "Só as escolas privadas podem usar IA"], answer: 0, why: "A carta pede iniciativas conduzidas por educadores." },
          { objective: "O6", q: "Como deve abrir uma conversa com os funcionários sobre IA?", options: ["Com uma regra de 30 páginas", "Com a apresentação de vendas de um fornecedor", "Com uma proibição", "Com uma pergunta para ouvir onde os funcionários viram IA"], answer: 3, why: "Ouvir primeiro cria confiança e mostra o que os funcionários precisam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Líderes Escolares e Educativos 1: Introdução à IA na Educação",
    questions: [
      { objective: "O1", q: "As ferramentas de conversa como o ChatGPT funcionam com:", options: ["Folhas de cálculo", "Grandes modelos de linguagem", "Impressoras", "Sistemas de presenças"], answer: 1, why: "Os LLM fazem funcionar as ferramentas de conversa." },
      { objective: "O1", q: "Uma alucinação da IA é:", options: ["Uma resposta rápida", "Um ecrã partido", "Conteúdo inventado que parece verdade", "Um exercício de segurança da escola"], answer: 2, why: "A IA pode inventar factos e fontes." },
      { objective: "O6", q: "A melhor mensagem de uma linha para os funcionários é:", options: ["A IA corrige tudo", "A IA substitui a preparação das aulas", "A IA é um parceiro para o primeiro rascunho, nunca a última palavra sobre um aluno", "A IA está sempre certa"], answer: 2, why: "Mantém o juízo do professor no centro." },
      { objective: "O2", q: "As funções de IA podem aparecer em ferramentas que já tem:", options: ["Às vezes já ligadas de origem", "Nunca", "Só se pagar mais", "Só nos telefones"], answer: 0, why: "Os fornecedores acrescentam funções de IA a produtos que já existem." },
      { objective: "O2", q: "Um programa adaptativo:", options: ["Imprime boletins de notas", "Regista as presenças", "Tranca as portas", "Muda a próxima atividade conforme as respostas do aluno"], answer: 3, why: "Adapta-se às respostas." },
      { objective: "O2", q: "O seu mapa de IA deve marcar se cada ferramenta:", options: ["Tem um logótipo bonito", "Está aprovada e usa dados de alunos", "É popular", "É nova"], answer: 1, why: "A aprovação e os dados são o que os líderes precisam de saber." },
      { objective: "O3", q: "Que uso é ÚTIL?", options: ["Vigilância secreta", "Decidir a disciplina", "Colar IEP numa ferramenta gratuita", "Fazer perguntas de prática em vários níveis de leitura"], answer: 3, why: "Poupa tempo e abre o acesso." },
      { objective: "O3", q: "Porque o uso da IA pelos alunos nos trabalhos pode ser um problema?", options: ["É ilegal", "É sempre batota", "Pode substituir o raciocínio que o trabalho desenvolve", "É lento demais"], answer: 2, why: "As regras decidem quando a IA apoia ou substitui a aprendizagem." },
      { objective: "O3", q: "O teste da família pergunta:", options: ["Eu explicaria este uso de IA à família do aluno?", "A família tem computador?", "A família está na internet?", "A família pagou?"], answer: 0, why: "Estar à vontade para explicar um uso é uma boa verificação." },
      { objective: "O4", q: "Os direitos da FERPA passam dos pais para o aluno:", options: ["Aos 10 anos", "Aos 18 anos ou ao entrar no ensino superior", "Aos 13 anos", "Nunca"], answer: 1, why: "O aluno torna-se um aluno elegível (eligible student)." },
      { objective: "O4", q: "Segundo a FERPA, os pais podem:", options: ["Examinar e rever os registos escolares do filho", "Ler os diários privados dos professores", "Mudar eles próprios as notas", "Nada"], answer: 0, why: "Examinar e rever são direitos centrais da FERPA." },
      { objective: "O4", q: "Um fornecedor só pode ser \"funcionário da escola\" segundo a FERPA se:", options: ["Tiver uma aplicação", "For gratuito", "For popular", "Prestar um serviço da escola sob o controlo direto da escola, com limites na partilha com outros"], answer: 3, why: "Essas condições vêm das orientações da FERPA." },
      { objective: "O4", q: "As informações de diretório podem ser partilhadas:", options: ["Nunca", "Depois de aviso e da possibilidade de recusar", "Só com fornecedores", "Só pelos alunos"], answer: 1, why: "As escolas têm de avisar e deixar recusar." },
      { objective: "O4", q: "Que agência aplica a COPPA?", options: ["Os Correios", "O Departamento de Agricultura", "A Comissão Federal de Comércio (FTC)", "O conselho escolar"], answer: 2, why: "A FTC aplica a COPPA." },
      { objective: "O4", q: "Um professor cola nomes e notas de alunos numa ferramenta de IA gratuita e não aprovada. Isto:", options: ["É obrigatório", "Está sempre bem", "Pode divulgar registos escolares a uma empresa sem acordo", "Melhora a privacidade"], answer: 2, why: "Esse é o risco da FERPA com ferramentas não aprovadas." },
      { objective: "O4", q: "Para as obrigações exatas de privacidade do seu distrito, pergunte:", options: ["Ao responsável pela privacidade ou ao advogado", "A um chatbot", "A um aluno", "Ao vendedor de um fornecedor"], answer: 0, why: "Pessoas qualificadas têm a última palavra." },
      { objective: "O5", q: "A carta sobre IA do Departamento de Educação tem a data de:", options: ["3 de março de 2019", "1 de janeiro de 2000", "27 de outubro de 2026", "22 de julho de 2025"], answer: 3, why: "Foi enviada em 22 de julho de 2025." },
      { objective: "O5", q: "Onde encontra a lista de verificação de Termos de Serviço Modelo?", options: ["Numa aplicação de redes sociais", "studentprivacy.ed.gov", "Num anúncio de um fornecedor", "Numa secção de comentários de notícias"], answer: 1, why: "Está no site do Gabinete de Política de Privacidade dos Alunos." },
      { objective: "O5", q: "Além das orientações federais, deve verificar:", options: ["Só os blogues dos fornecedores", "As regras de outro país", "Mais nada", "As orientações sobre IA da agência de educação do seu estado"], answer: 3, why: "Muitos estados publicam as suas próprias orientações sobre IA." },
      { objective: "O6", q: "Uma boa conversa com os funcionários sobre IA termina com:", options: ["Uma apresentação de vendas", "Uma proibição", "Um próximo passo e as principais perguntas recolhidas", "Nenhuma conclusão"], answer: 2, why: "Os próximos passos e as perguntas orientam o que fazer a seguir." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      3,
      6,
      9,
      13,
      14,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Definição simples",
        objective: "O1",
        notYet: "A definição usa jargão ou tem mais de duas frases.",
        meets: "Explica a IA em duas frases simples.",
        exceeds: "Um colega novo na IA entendeu-a à primeira leitura."
      },
      {
        name: "Ajudas e riscos",
        objective: "O3",
        notYet: "Menos de três ajudas ou três riscos, ou não se aplicam à escola.",
        meets: "Três maneiras em que a IA pode ajudar os professores e três riscos para os alunos.",
        exceeds: "Cada risco diz o que os funcionários devem fazer."
      },
      {
        name: "Regra de privacidade",
        objective: "O4",
        notYet: "A regra de privacidade falta ou não está clara.",
        meets: "Diz que nenhum nome, nota ou outra informação pessoal identificável de alunos entra em ferramentas de IA que o distrito não aprovou.",
        exceeds: "Dá um exemplo curto de como pedir ajuda sem informações de alunos."
      },
      {
        name: "A quem perguntar",
        objective: "O6",
        notYet: "Não diz a quem perguntar.",
        meets: "Diz a quem fazer perguntas.",
        exceeds: "Também indica o responsável pela privacidade para as perguntas sobre privacidade."
      },
      {
        name: "Conversa com os funcionários",
        objective: "O6",
        notYet: "Nenhuma conversa feita, ou perguntas não anotadas.",
        meets: "Conduziu uma conversa de 15 minutos e anotou as três principais perguntas.",
        exceeds: "Terminou com um próximo passo claro para os funcionários."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Escolas onde os funcionários receberam um folheto \"A IA na nossa escola\" em 30 dias (inquérito de seguimento)",
      "Escolas com um mapa das ferramentas de IA em uso, marcadas como aprovadas ou não (inquérito de seguimento)",
      "Líderes que seguem para o curso 2 de IA para Líderes Escolares e Educativos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "A lista de ferramentas aprovadas do seu distrito, se existir",
      "Papel ou um documento para o mapa de IA e o folheto de uma página",
      "Cerca de 60 minutos no total, mais uma conversa de 15 minutos com os funcionários"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois construam o mapa de IA em equipas de escola com o coordenador de tecnologia.",
      "Lembre aos líderes que o curso explica a lei com palavras simples e não é aconselhamento jurídico; convide o responsável pela privacidade do distrito, se possível.",
      "Nunca use informações reais de alunos nos exemplos de prática.",
      "Deixe os líderes praticarem a abertura da conversa com os funcionários aos pares antes de a conduzirem na escola.",
      "Avalie a tarefa final com a grelha de avaliação e peça as perguntas dos funcionários anotadas como prova."
    ]
  }
};
