"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-capstone.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US laws, agencies and offices (FERPA, COPPA, FTC, Department of Education, Title I) keep their names, explained the first time.

module.exports = {
  id: "edu-capstone-pt",
  lang: "pt",
  translationOf: "edu-capstone",
  category: "Leadership Development",
  name: "IA para Líderes Escolares e Educativos 8: Projeto Final",
  skills: "Escolher um problema centrado no aluno, Desenhar um projeto-piloto de IA bem delimitado, Fazer uma verificação de privacidade e equidade, Planear a formação do pessoal, Comunicar com as famílias, Definir medidas de sucesso e apresentar à direção",
  outcome: "desenhar um plano completo de projeto-piloto de IA, pronto a apresentar, para a sua escola ou distrito escolar: um problema real, um piloto bem delimitado com uma ferramenta avaliada, uma verificação de privacidade e equidade, um plano de formação do pessoal, uma comunicação às famílias, medidas de sucesso e uma regra de decisão, apresentado em dez minutos a uma equipa de direção ou a um conselho escolar.",
  about: [
    "Este é o último curso de IA para Líderes Escolares e Educativos. Você junta tudo o que aprendeu nos cursos 1 a 7 (as bases, as ferramentas, a planificação, a avaliação, a literacia em IA dos alunos, a produtividade e o uso responsável) num único plano que poderia mesmo pôr em prática.",
    "O Capítulo 1 desenha o piloto: o problema que vale a pena resolver, o âmbito e a ferramenta, e a verificação de privacidade e equidade. O Capítulo 2 prepara as pessoas e as provas: a formação do pessoal, a comunicação às famílias, as medidas de sucesso e a apresentação.",
    "Escolha um piloto que tenha autoridade para propor, ou que vai propor a alguém que a tenha. Use as orientações que escreveu no curso 7. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Termine e apresente o seu plano de piloto de IA (cerca de quatro páginas): o problema e quem ele serve, com provas; o âmbito do piloto (quem, o quê, quanto tempo) e a ferramenta, com a avaliação do fornecedor; uma verificação de privacidade e equidade (FERPA, COPPA se houver menores de 13 anos, acessibilidade, acesso); um plano de formação do pessoal; uma carta às famílias e perguntas frequentes curtas; três a cinco medidas de sucesso com um ponto de partida; e uma regra de avançar, ajustar ou parar. Apresente-o em dez minutos a uma equipa de direção, a um grupo de colegas ou a um conselho, e registe as perguntas e as suas respostas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Diretores de escola, líderes de distrito escolar, orientadores pedagógicos, pessoal de tecnologia e professores líderes que estão a terminar IA para Líderes Escolares e Educativos e que vão propor um piloto de IA na sua escola ou distrito.",
    startingPoint: "Fizeram os cursos 1 a 7: bases da IA, avaliação de ferramentas, planificação, avaliação, literacia em IA dos alunos, produtividade e orientações escritas para o uso responsável da IA. Ainda não desenharam um piloto completo com medidas, formação e comunicação às famílias.",
    gap: "Muitos esforços de IA nas escolas começam por uma ferramenta em vez de um problema, saltam as verificações de privacidade e equidade e não têm forma de saber se resultaram. Os líderes precisam de um plano de piloto completo e honesto que possam apresentar e pôr em prática, para que a IA só seja usada onde ajuda os alunos.",
    constraints: [
      "O piloto tem de ser um que o aluno tenha autoridade para propor, ou que vai propor a alguém que a tenha",
      "Aplicam-se a FERPA, a COPPA para alunos com menos de 13 anos, as regras do distrito e a lei do estado; o responsável pela privacidade dá a aprovação",
      "Nenhum dado verdadeiro de alunos nos documentos do plano; use provas em resumo",
      "As regras do financiamento federal mudam, por isso os alunos confirmam com o gabinete de programas federais",
      "Tempo: lições curtas; o plano e a apresentação levam várias sessões"
    ],
    prerequisites: "Os cursos 1 a 7 de IA para Líderes Escolares e Educativos, sobretudo o curso 7 (\"Ética, Segurança e IA Responsável\")."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um desafio na sua escola", action: "escrever uma descrição do problema centrada no aluno, com provas", standard: "dizendo o que está mal, para quem e em que medida, e se a IA é a resposta certa" },
    { id: "O2", condition: "Com o seu problema", action: "definir um âmbito pequeno para o piloto e escolher uma ferramenta que passe na avaliação do fornecedor", standard: "dizendo quem, o que muda e quanto tempo, com a ferramenta escolhida depois do âmbito" },
    { id: "O3", condition: "Antes de o piloto começar", action: "fazer uma verificação de privacidade e equidade, com uma proteção e um responsável para cada risco", standard: "cobrindo a FERPA, a COPPA se houver alunos com menos de 13 anos, a acessibilidade e o acesso, com a aprovação do responsável pela privacidade" },
    { id: "O4", condition: "Para o pessoal que participa no piloto", action: "planear formação prática, regras e apoio", standard: "com um programa de formação de 60 minutos, um contacto com nome e as notas que os professores vão manter" },
    { id: "O5", condition: "Para as famílias dos alunos do piloto", action: "escrever uma carta honesta às famílias e cinco perguntas frequentes", standard: "com menos de uma página, lida por um pai, uma mãe ou um mediador familiar, com traduções verificadas por falantes qualificados" },
    { id: "O6", condition: "Para o seu plano de piloto completo", action: "definir três a cinco medidas de sucesso com um ponto de partida e uma regra de avançar, ajustar ou parar, e apresentar o plano", standard: "em dez minutos, com a regra escrita antes do início e as perguntas e respostas registadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Desenhar o piloto",
      lessons: [
        {
          objectives: ["O1"],
          title: "Começar por um problema centrado no aluno",
          minutes: 5,
          goal: "Definir o problema que o seu piloto vai resolver, com provas e os alunos que ele serve.",
          text: [
            "Um bom piloto começa por um problema, não por um produto. Pergunte: o que está a atrapalhar a aprendizagem ou o bem-estar dos alunos, ou o tempo dos professores com os alunos? Exemplos: os professores gastam horas por semana a traduzir mensagens para as famílias; os alunos de álgebra do 9.º ano precisam de mais prática com comentários; os professores novos têm dificuldade em diferenciar o ensino.",
            "Junte provas: dados que já tem (com proteção da privacidade), inquéritos a professores e alunos, e conversas. Escreva o problema numa frase, com quem é afetado e em que medida: \"Os nossos professores de álgebra do 9.º ano dizem ter menos de 10 minutos por semana por aluno para comentários individuais, e 40 por cento dos alunos chumbaram no primeiro teste da unidade.\"",
            "Depois pergunte se a IA é mesmo a resposta certa. Às vezes, uma mudança de horário, um modelo de documento ou mais tempo do pessoal resolve melhor. Se a IA servir, diga exatamente o que ela vai fazer."
          ],
          steps: ["Faça a lista dos problemas que atrapalham a aprendizagem, o bem-estar ou o tempo dos professores.", "Junte provas: dados, inquéritos, conversas.", "Escreva o problema numa frase: quem, o quê, em que medida.", "Pergunte se a IA é a resposta certa.", "Se for, diga exatamente o que a IA vai fazer."],
          words: [["Descrição do problema", "uma frase que diz o que está mal, para quem e em que medida."], ["Provas", "dados e observações que mostram que um problema é real."]],
          slides: [
            { title: "Primeiro o problema, depois o produto", bullets: ["O que atrapalha a aprendizagem, o bem-estar ou o tempo dos professores?", "Traduções, prática, diferenciação do ensino"] },
            { title: "Mostre as provas", bullets: ["Dados que já existem, com proteção da privacidade", "Inquéritos e conversas", "Uma frase: quem, o quê, em que medida"] },
            { title: "A IA é a resposta?", bullets: ["Às vezes um horário ou um modelo é melhor", "Se a IA servir, diga exatamente o que ela faz"] }
          ],
          tryIt: "Escreva a descrição do seu problema numa frase, com provas, e uma frase sobre o que exatamente a IA faria, ou porque outra solução funcionaria melhor.",
          youCanNow: "definir um problema centrado no aluno, com provas, antes de escolher qualquer ferramenta de IA.",
          quickCheck: [
            { objective: "O1", q: "O que diz uma descrição do problema?", options: ["Que ferramenta de IA quer comprar", "O que está mal, para quem e em que medida", "Quanto vai custar o piloto", "Quem vai apresentar o plano"], answer: 1, why: "Uma descrição clara do problema mantém o piloto focado nos alunos, não numa ferramenta." },
            { objective: "O1", q: "Um fornecedor oferece à sua escola uma ferramenta de IA grátis. O que faz primeiro?", options: ["Começa a usá-la, porque é grátis", "Escolhe mais tarde um problema que ela possa resolver", "Define o problema dos alunos e pergunta se a IA é mesmo a resposta certa", "Pede aos alunos para a experimentarem em casa"], answer: 2, why: "Um bom piloto começa por um problema centrado no aluno, não por uma ferramenta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Delimitar o piloto e escolher a ferramenta",
          minutes: 6,
          goal: "Definir um âmbito pequeno e claro para o piloto e escolher uma ferramenta que passe na avaliação do fornecedor.",
          text: [
            "Mantenha-o pequeno: alguns professores, ou um ano ou uma disciplina, durante seis a doze semanas. Um piloto pequeno é mais fácil de apoiar, de medir e de parar se for preciso. Escreva quem participa, o que vai fazer de diferente e quando.",
            "Escolha a ferramenta no fim. Prefira ferramentas já aprovadas no seu distrito, ou que passem na avaliação do fornecedor do curso 7 (a lista Model Terms of Service, ou seja, modelo de termos de serviço, mais perguntas sobre IA: exatidão, preconceito, acessibilidade e se o professor pode corrigir a ferramenta). Veja as regras de idade da ferramenta se os alunos a forem usar.",
            "Pense no financiamento. A carta \"Dear Colleague\" de julho de 2025 do Departamento de Educação dos EUA, segundo o site K-12 Dive, diz que os fundos federais que já existem podem pagar IA para ferramentas de currículo de alta qualidade, tutoria de alto impacto e orientação para estudos e carreiras, se forem cumpridas as regras legais. Leia a carta em ed.gov e fale com o seu gabinete de programas federais antes de contar com qualquer verba."
          ],
          steps: ["Escolha um grupo pequeno e seis a doze semanas.", "Escreva quem, o que muda e quando.", "Prefira ferramentas aprovadas; se não, faça a avaliação do fornecedor.", "Veja as regras de idade se os alunos a usarem.", "Confirme o financiamento com o seu gabinete de programas federais."],
          words: [["Âmbito", "o tamanho e os limites de um projeto: quem, o quê e quanto tempo."], ["Gabinete de programas federais", "o serviço do distrito escolar que gere as verbas federais dos EUA, como o Title I."]],
          slides: [
            { title: "Mantenha-o pequeno", bullets: ["Alguns professores, um ano ou uma disciplina", "Seis a doze semanas", "Fácil de apoiar, medir e parar"] },
            { title: "Escolha a ferramenta no fim", bullets: ["Prefira ferramentas aprovadas pelo distrito", "Se não, faça a avaliação do fornecedor", "Veja as regras de idade para uso pelos alunos"] },
            { title: "Financiamento", bullets: ["Carta federal de julho de 2025: alguns usos de IA podem ser pagos", "Ferramentas de currículo, tutoria, orientação de carreira", "Confirme com o seu gabinete de programas federais"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department issues AI priorities (July 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Privacy and Education Technology: Model Terms of Service checklist", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Escreva o âmbito do seu piloto (quem, o que muda, quanto tempo) e diga qual é a ferramenta, com o seu estado de aprovação ou a avaliação do fornecedor que fez.",
          youCanNow: "delimitar um piloto de IA pequeno e escolher uma ferramenta que foi bem avaliada.",
          quickCheck: [
            { objective: "O2", q: "Qual é um bom âmbito para um piloto?", options: ["Todas as escolas do distrito durante três anos", "Alguns professores de uma disciplina durante seis a doze semanas", "Um aluno durante um dia", "Sem duração definida"], answer: 1, why: "Um âmbito pequeno e claro deixa você aprender depressa e limitar os riscos." },
            { objective: "O2", q: "A ferramenta que quer ainda não está aprovada pelo distrito. O que faz?", options: ["Faz a avaliação do fornecedor antes do piloto", "Usa-a na mesma num piloto curto", "Pede aos professores para a comprarem eles mesmos", "Escolhe uma ferramenta ao acaso"], answer: 0, why: "As ferramentas têm de passar na avaliação do fornecedor antes de alunos ou pessoal as usarem." }
          ]
        },
        {
          objectives: ["O3"],
          title: "A verificação de privacidade e equidade",
          minutes: 6,
          goal: "Fazer uma verificação de privacidade e equidade do seu piloto antes de ele começar.",
          text: [
            "Privacidade: faça a lista exata dos dados de alunos que o piloto usa e para onde vão. Segundo a FERPA (a lei dos EUA que protege os registos escolares), partilhar com um fornecedor informações dos registos escolares que identificam um aluno precisa, em geral, de consentimento, a não ser que haja uma exceção, como um fornecedor que atua como funcionário da escola, sob o controlo direto da escola e com limites para voltar a partilhar. Se os alunos tiverem menos de 13 anos, aplica-se a COPPA (a lei dos EUA que protege as crianças na internet); o consentimento da escola só vale para uso escolar, sem outro fim comercial. Peça a aprovação do responsável pela privacidade.",
            "Equidade: quem pode ficar de fora ou ser prejudicado? Verifique o acesso (aparelhos, internet, acessibilidade para alunos com deficiência, línguas das famílias), se os resultados podem ser diferentes entre grupos de alunos e se algum resultado da IA pode afetar notas, colocação em turmas ou disciplina; se puder, acrescente revisão humana.",
            "Escreva a verificação numa página, com cada risco, a proteção e o responsável. Um piloto que não passou nesta verificação não está pronto para começar."
          ],
          steps: ["Faça a lista dos dados dos alunos, para onde vão e porquê.", "Verifique a FERPA, e a COPPA se os alunos tiverem menos de 13 anos.", "Obtenha a aprovação do responsável pela privacidade.", "Verifique o acesso, a acessibilidade, as línguas e as diferenças entre grupos.", "Escreva cada risco com a sua proteção e o seu responsável."],
          words: [["Aprovação formal", "a aprovação oficial dada pela pessoa responsável."], ["Acessibilidade", "se as pessoas com deficiência conseguem usar uma ferramenta por completo."]],
          slides: [
            { title: "Privacidade", bullets: ["Que dados, para onde vão, porquê", "FERPA; COPPA se houver menores de 13 anos", "O responsável pela privacidade aprova"] },
            { title: "Equidade", bullets: ["Aparelhos, internet, acessibilidade, línguas", "Resultados diferentes entre grupos?", "Revisão humana para tudo o que tem consequências sérias"] },
            { title: "Uma página", bullets: ["Risco, proteção, responsável", "Não passou = não está pronto"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Escreva a sua verificação de privacidade e equidade numa página, com pelo menos três riscos de privacidade e três riscos de equidade, cada um com uma proteção e um responsável.",
          youCanNow: "verificar os riscos de privacidade e equidade de um piloto de IA antes de ele começar.",
          quickCheck: [
            { objective: "O3", q: "Qual é uma pergunta de equidade para um piloto?", options: ["A ferramenta é popular?", "A ferramenta é a mais recente?", "A ferramenta tem um design bonito?", "Os alunos com deficiência conseguem usar a ferramenta por completo?"], answer: 3, why: "A acessibilidade e o acesso fazem parte da verificação de equidade." },
            { objective: "O3", q: "A sua verificação de privacidade e equidade não está terminada, mas o piloto começa amanhã. O que faz?", options: ["Começa na mesma e termina a verificação depois", "Adia o início até a verificação estar feita e aprovada", "Salta a parte da equidade", "Começa só com metade dos alunos"], answer: 1, why: "Um piloto que não passou na verificação de privacidade e equidade não está pronto para começar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Desenhar o piloto",
        questions: [
          { objective: "O1", q: "Por onde deve começar um bom piloto?", options: ["Por uma demonstração de um produto", "Por um desconto de um fornecedor", "Por um problema centrado no aluno, com provas", "Por um comunicado de imprensa"], answer: 2, why: "Primeiro os problemas, depois os produtos." },
          { objective: "O2", q: "Qual é o melhor âmbito para um piloto?", options: ["Alguns professores de uma disciplina durante 6 a 12 semanas", "Todas as escolas do distrito durante três anos", "Nenhum grupo definido", "Só o diretor"], answer: 0, why: "Os pilotos pequenos são mais fáceis de apoiar, medir e parar." },
          { objective: "O2", q: "Quando deve escolher a ferramenta?", options: ["Primeiro", "Depois de o piloto acabar", "Nunca", "Depois de definir o problema e o âmbito"], answer: 3, why: "A ferramenta tem de servir para o problema." },
          { objective: "O3", q: "Os alunos do piloto têm 10 anos. Que lei se aplica ao serviço na internet?", options: ["Nenhuma lei", "A COPPA", "Só o código da estrada do estado", "Só os direitos de autor"], answer: 1, why: "A COPPA protege as crianças com menos de 13 anos." },
          { objective: "O3", q: "Os resultados da IA no seu piloto podem influenciar a colocação dos alunos em turmas. O que tem de acrescentar?", options: ["Nada", "Um modelo mais rápido", "Mais IA", "Revisão humana antes de qualquer decisão de colocação"], answer: 3, why: "As decisões com consequências sérias precisam de revisão humana." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pessoas, provas e apresentação",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preparar o pessoal",
          minutes: 5,
          goal: "Planear a formação e o apoio de que o pessoal do piloto precisa.",
          text: [
            "Os professores do piloto precisam de mais do que um nome de utilizador. Planeie três coisas. Competências: como usar bem a ferramenta, os pedidos ou as definições que funcionam, e como verificar o que ela produz. Regras: privacidade, os níveis de uso da IA pelos alunos e o que fazer quando alguma coisa corre mal. Apoio: um contacto com nome, uma reunião curta todas as semanas e tempo para experimentar.",
            "Faça uma formação prática. Durante a sessão, os professores devem usar a ferramenta nos seus próprios materiais reais (não privados), e não só ver uma demonstração. Junte os que adotam cedo com os colegas mais cautelosos.",
            "Peça aos professores do piloto para manterem notas curtas: tempo gasto, o que funcionou, o que falhou, as reações dos alunos. As notas deles fazem parte das suas provas e vão ajudar a tomar a decisão no fim."
          ],
          steps: ["Planeie as competências: uso, pedidos, verificar o que a ferramenta produz.", "Planeie as regras: privacidade, níveis de uso pelos alunos, incidentes.", "Planeie o apoio: contacto, reunião semanal, tempo.", "Faça sessões práticas com materiais reais.", "Peça aos professores para manterem notas curtas."],
          words: [["Formação contínua (PD)", "formação e aprendizagem para professores e pessoal; em inglês, professional development."], ["Quem adota cedo", "alguém que experimenta as ferramentas novas primeiro e pode ajudar os outros."]],
          slides: [
            { title: "Competências, regras, apoio", bullets: ["Competências: uso, pedidos, verificação", "Regras: privacidade, níveis dos alunos, incidentes", "Apoio: contacto, reuniões, tempo"] },
            { title: "Formação prática", bullets: ["Use a ferramenta em materiais reais e não privados", "Junte quem adota cedo com colegas cautelosos"] },
            { title: "As notas dos professores são provas", bullets: ["Tempo gasto, o que funcionou, o que falhou", "Reações dos alunos"] }
          ],
          tryIt: "Escreva um plano do pessoal numa página: um programa de formação prática de 60 minutos, as regras que os professores têm de seguir, o apoio que vão ter e as notas que lhes vai pedir.",
          youCanNow: "preparar e apoiar o pessoal para um piloto de IA.",
          quickCheck: [
            { objective: "O4", q: "O que deve incluir o apoio ao pessoal durante o piloto?", options: ["Um contacto com nome e reuniões semanais", "Um único e-mail", "Só um chatbot de IA", "Nada; os professores desenrascam-se"], answer: 0, why: "Um apoio com nome e reuniões regulares impedem que os problemas cresçam." },
            { objective: "O4", q: "Os professores perguntam porque têm de manter notas durante o piloto. O que responde?", options: ["É uma regra do fornecedor", "É para avaliar o ensino deles", "As notas fazem parte das provas para decidir o que acontece a seguir", "É trabalho opcional sem utilidade"], answer: 2, why: "As notas dos professores são provas para a decisão de avançar, ajustar ou parar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Comunicar com as famílias",
          minutes: 5,
          goal: "Escrever uma carta e perguntas frequentes que expliquem o piloto às famílias com honestidade.",
          text: [
            "As famílias confiam no que compreendem. Diga-lhes antes de o piloto começar: em que problema está a trabalhar, o que faz a ferramenta de IA, o que ela não faz (não dá notas nem decide a colocação em turmas), que dados dos alunos são usados e como são protegidos, e a quem fazer perguntas.",
            "Acrescente perguntas frequentes curtas: Os dados do meu filho vão ser usados para treinar a IA? (Responda a partir do seu contrato com o fornecedor.) O meu filho pode não participar, e qual é a alternativa? Como vão saber se está a funcionar? A FTC (a agência dos EUA que protege os consumidores) sugere que as escolas digam aos pais que serviços na internet aprovaram; a FERPA dá aos pais o direito de ver os registos escolares do seu filho.",
            "Escreva em inglês simples e dê traduções verificadas por falantes qualificados às famílias que precisam delas. Ofereça uma sessão curta de informação ou uma hora para fazerem perguntas."
          ],
          steps: ["Explique o problema e o que a ferramenta faz e não faz.", "Explique como os dados são usados e protegidos.", "Acrescente perguntas frequentes: treino da IA, não participar, medidas.", "Traduza, com verificação por falantes qualificados.", "Ofereça uma hora para perguntas."],
          words: [["Perguntas frequentes (FAQ)", "uma lista curta de perguntas comuns com as respostas."], ["Não participar (opt out)", "escolher não fazer parte."]],
          slides: [
            { title: "Informe primeiro as famílias", bullets: ["O problema e o que a ferramenta faz", "O que ela não faz", "Os dados usados e como são protegidos"] },
            { title: "Perguntas frequentes curtas", bullets: ["Os dados são usados para treinar a IA?", "O meu filho pode não participar? Alternativa?", "Como vão saber se funciona?"] },
            { title: "Chegue a todas as famílias", bullets: ["Inglês simples", "Traduções verificadas", "Uma hora para perguntas"] }
          ],
          sources: [{ name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Escreva a carta às famílias (menos de uma página) e cinco perguntas frequentes para o seu piloto. Peça a um pai, a uma mãe ou a um mediador familiar para a ler e lhe dizer o que não está claro.",
          youCanNow: "explicar um piloto de IA às famílias com clareza e honestidade.",
          quickCheck: [
            { objective: "O5", q: "O que deve a carta às famílias dizer que a ferramenta NÃO faz?", options: ["Ajudar os alunos a praticar", "Dar notas ou decidir a colocação em turmas", "Funcionar nos computadores da escola", "Usar a internet"], answer: 1, why: "As famílias precisam de saber que são pessoas, e não a IA, que tomam as decisões sobre os seus filhos." },
            { objective: "O5", q: "Um mediador familiar diz que a sua carta é difícil de compreender. O que faz?", options: ["Envia-a na mesma", "Acrescenta mais detalhes e termos legais", "Envia-a só em inglês", "Reescreve-a com palavras simples e pede-lhe para a ler outra vez"], answer: 3, why: "A carta só funciona se as famílias a compreenderem." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir o sucesso e apresentar o seu plano",
          minutes: 6,
          goal: "Definir medidas e uma regra de decisão, e apresentar o plano em dez minutos.",
          text: [
            "Escolha três a cinco medidas que correspondam ao seu problema, com um ponto de partida de antes do piloto: um resultado dos alunos (resultados do teste da unidade, prática feita), uma medida dos professores (tempo poupado, confiança), uma medida da experiência dos alunos ou das famílias (um inquérito curto) e uma medida de segurança (incidentes, problemas de privacidade). Mostre os resultados por grupo de alunos, quando a privacidade o permitir, para apanhar efeitos desiguais.",
            "Escreva a regra de decisão antes: avançar (alargar), ajustar (mudar e voltar a testar) ou parar. Por exemplo: \"Alargar se os resultados dos testes melhorarem e os professores pouparem tempo, sem incidentes graves e sem nenhum grupo a ficar pior.\"",
            "Apresente em dez minutos: o problema e as provas, o piloto e a ferramenta, a verificação de privacidade e equidade, o plano para as pessoas, as medidas e a regra de decisão. Convide perguntas difíceis; elas tornam o plano mais forte."
          ],
          steps: ["Escolha 3 a 5 medidas: alunos, professores, experiência, segurança.", "Recolha um ponto de partida.", "Planeie ver os resultados por grupo, quando a privacidade o permitir.", "Escreva a regra de avançar, ajustar ou parar.", "Apresente em dez minutos e registe as perguntas."],
          words: [["Medida", "algo que você conta ou avalia para ver se uma mudança resultou."], ["Regra de decisão", "uma regra escrita antes para decidir se alarga, ajusta ou para."]],
          slides: [
            { title: "Medidas com um ponto de partida", bullets: ["Resultado dos alunos", "Tempo e confiança dos professores", "Inquérito de experiência e segurança"] },
            { title: "Decida a regra primeiro", bullets: ["Avançar, ajustar ou parar", "Nenhum grupo a ficar pior", "Nenhum incidente grave"] },
            { title: "Apresentação de dez minutos", bullets: ["Problema e provas; piloto e ferramenta", "Privacidade e equidade; plano para as pessoas", "Medidas e a regra de decisão"] }
          ],
          tryIt: "Tarefa final: junte o seu plano de piloto completo (problema, âmbito e ferramenta, verificação de privacidade e equidade, plano do pessoal, carta às famílias e perguntas frequentes, medidas com ponto de partida, regra de decisão), apresente-o em dez minutos a uma equipa de direção, a um grupo de colegas ou a um conselho, e registe as perguntas e as suas respostas.",
          youCanNow: "desenhar, defender e liderar um piloto de IA responsável na sua escola ou distrito.",
          quickCheck: [
            { objective: "O6", q: "Quando se recolhe o ponto de partida?", options: ["Antes do piloto", "A meio do piloto", "Depois de o piloto acabar", "Só se o piloto falhar"], answer: 0, why: "Um ponto de partida de antes do piloto mostra se alguma coisa mudou." },
            { objective: "O6", q: "No geral os resultados parecem bons, mas um grupo de alunos ficou pior. O que faz o seu plano?", options: ["Mostra só o resultado geral", "Avança, porque a maioria dos alunos foi bem", "Vê os resultados por grupo e escolhe ajustar ou parar, como diz a regra de decisão", "Tira esse grupo dos dados"], answer: 2, why: "Ver por grupo apanha efeitos desiguais, e a regra de decisão orienta o que fazer." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Pessoas, provas e apresentação",
        questions: [
          { objective: "O4", q: "O que torna mais eficaz a formação em IA para professores?", options: ["Ver uma demonstração longa", "Ler a publicidade do fornecedor", "Usar a ferramenta na prática com os seus próprios materiais não privados", "Nenhuma formação"], answer: 2, why: "As pessoas aprendem as ferramentas usando-as em trabalho real." },
          { objective: "O5", q: "O que deve a carta às famílias dizer que a ferramenta NÃO faz?", options: ["Dar notas ou decidir a colocação em turmas", "Ajudar a praticar", "Poupar tempo aos professores", "Dar comentários"], answer: 0, why: "As famílias precisam de saber que as decisões ficam com os educadores." },
          { objective: "O6", q: "Porque ver os resultados do piloto por grupo de alunos?", options: ["Para classificar os alunos em público", "Para apanhar efeitos desiguais", "Não é útil", "Para poupar tempo"], answer: 1, why: "Um piloto pode ajudar alguns alunos e prejudicar outros." },
          { objective: "O6", q: "Quando deve ser escrita a regra de avançar, ajustar ou parar?", options: ["Antes de o piloto começar", "Depois de chegarem os resultados", "Nunca", "Só se falhar"], answer: 0, why: "Decidir antes mantém a decisão honesta." },
          { objective: "O6", q: "Durante a sua apresentação, um membro do conselho faz uma pergunta difícil sobre privacidade. Qual é a melhor resposta?", options: ["Evitá-la", "Prometer que não há riscos", "Terminar a apresentação", "Agradecer a pergunta e responder a partir da sua verificação de privacidade"], answer: 3, why: "As perguntas difíceis tornam o plano mais forte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Líderes Escolares e Educativos 8: Projeto Final",
    questions: [
      { objective: "O1", q: "Uma descrição do problema diz:", options: ["Que produto comprar", "O que está mal, para quem e em que medida", "Só o orçamento", "A lista do pessoal"], answer: 1, why: "Ela define o problema com provas." },
      { objective: "O1", q: "As provas de um problema podem incluir:", options: ["Publicidade de fornecedores", "Boatos", "Dados que já existem, inquéritos e conversas", "Palpites"], answer: 2, why: "As provas verdadeiras mostram que o problema é real." },
      { objective: "O1", q: "Antes de escolher a IA, pergunte:", options: ["Qual é a mais barata?", "Qual é a IA mais famosa?", "A IA é mesmo a resposta certa?", "Qual tem o melhor logótipo?"], answer: 2, why: "Às vezes, uma solução sem IA é melhor." },
      { objective: "O2", q: "Uma boa duração para um piloto é cerca de:", options: ["Seis a doze semanas", "Um dia", "Cinco anos", "Sem duração definida"], answer: 0, why: "Longo o bastante para aprender, curto o bastante para gerir." },
      { objective: "O2", q: "A ferramenta deve ser escolhida:", options: ["Só pelos alunos", "Antes de tudo", "Pelo fornecedor", "Depois de o problema e o âmbito estarem claros"], answer: 3, why: "A ferramenta tem de servir para o problema." },
      { objective: "O2", q: "Se uma ferramenta ainda não está aprovada, você deve:", options: ["Usá-la na mesma", "Fazer a avaliação do fornecedor", "Pedir aos alunos para se inscreverem", "Saltar a privacidade"], answer: 1, why: "A aprovação vem antes do uso." },
      { objective: "O2", q: "A carta federal de julho de 2025 diz que as verbas podem pagar IA para:", options: ["Material desportivo", "Qualquer compra", "Substituir professores", "Ferramentas de currículo, tutoria de alto impacto e orientação de carreira"], answer: 3, why: "Esses usos são citados na carta, segundo as notícias." },
      { objective: "O2", q: "Antes de contar com verbas federais, confirme com:", options: ["Um aluno", "Um fornecedor", "O seu gabinete de programas federais", "As redes sociais"], answer: 2, why: "Esse gabinete gere as regras das verbas federais." },
      { objective: "O3", q: "Segundo a FERPA, partilhar com um fornecedor dados que identificam um aluno precisa, em geral, de:", options: ["Consentimento, a não ser que haja uma exceção", "Nada", "Só um telefonema", "Autorização do fornecedor"], answer: 0, why: "As exceções incluem funcionários da escola sob controlo." },
      { objective: "O3", q: "Quem aprova a verificação de privacidade?", options: ["O fornecedor", "O responsável pela privacidade do distrito", "Um aluno", "Ninguém"], answer: 1, why: "A pessoa responsável dá a aprovação." },
      { objective: "O3", q: "Qual é uma pergunta de equidade?", options: ["Os alunos com deficiência conseguem usar a ferramenta por completo?", "De que cor é a aplicação?", "Está na moda?", "É nova?"], answer: 0, why: "A acessibilidade faz parte da equidade." },
      { objective: "O3", q: "Um piloto que não passou na verificação de privacidade e equidade está:", options: ["Terminado", "Pronto na mesma", "Aprovado", "Não pronto para começar"], answer: 3, why: "A verificação é uma porta de entrada." },
      { objective: "O4", q: "O apoio ao pessoal deve incluir:", options: ["Nada depois de entrar na ferramenta", "Um contacto com nome e reuniões semanais", "Só um e-mail", "Só a linha de ajuda do fornecedor"], answer: 1, why: "O apoio mantém os pilotos no caminho certo." },
      { objective: "O4", q: "As notas dos professores do piloto são:", options: ["Inúteis", "Diários privados", "Parte das suas provas", "Só para o fornecedor"], answer: 2, why: "Mostram o que funcionou e o que falhou." },
      { objective: "O5", q: "As perguntas frequentes para as famílias devem responder a:", options: ["Quem é o professor mais popular?", "Qual é o preço das ações do fornecedor?", "Os dados do meu filho são usados para treinar a IA?", "Nada"], answer: 2, why: "O uso dos dados é uma das maiores preocupações das famílias." },
      { objective: "O5", q: "As traduções para as famílias devem ser:", options: ["Verificadas por falantes qualificados", "Texto da IA sem verificação", "Dispensadas", "Feitas pelos alunos"], answer: 0, why: "As famílias precisam de informação exata." },
      { objective: "O6", q: "Qual é uma medida de segurança?", options: ["As receitas do fornecedor", "O número de entradas na ferramenta", "O número de slides", "O número de incidentes ou de problemas de privacidade"], answer: 3, why: "A segurança também tem de ser medida." },
      { objective: "O6", q: "O ponto de partida é recolhido:", options: ["Depois do piloto", "Antes do piloto", "Nunca", "Só se os resultados forem maus"], answer: 1, why: "Mostra o que mudou." },
      { objective: "O6", q: "Que escolhas dá uma regra de decisão?", options: ["Esperar para sempre", "Comprar ou vender", "Só sim", "Avançar, ajustar ou parar"], answer: 3, why: "O piloto acaba com uma decisão clara." },
      { objective: "O6", q: "A apresentação do seu projeto final deve durar cerca de:", options: ["Um minuto", "Duas horas", "Dez minutos", "Um dia inteiro"], answer: 2, why: "Curta e focada, com tempo para perguntas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 3, 5, 8, 10, 12, 14, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Problema e provas", objective: "O1", notYet: "Começa por uma ferramenta, ou não tem provas.", meets: "Diz qual é o problema e quem ele serve, com provas.", exceeds: "Explica porque a IA é a resposta certa, ou que outras soluções foram pensadas." },
      { name: "Âmbito e ferramenta", objective: "O2", notYet: "Não diz com clareza quem, o quê ou quanto tempo, ou a ferramenta não teve avaliação do fornecedor.", meets: "O âmbito do piloto (quem, o quê, quanto tempo) e a ferramenta, com a avaliação do fornecedor.", exceeds: "O âmbito é pequeno o bastante para correr em seis a doze semanas." },
      { name: "Verificação de privacidade e equidade", objective: "O3", notYet: "Falta a FERPA, a COPPA (se houver menores de 13 anos), a acessibilidade ou o acesso.", meets: "Cobre a FERPA, a COPPA se houver menores de 13 anos, a acessibilidade e o acesso.", exceeds: "Cada risco tem uma proteção e um responsável, e o responsável pela privacidade reviu-a." },
      { name: "Pessoal e famílias", objective: "O5", notYet: "Não há plano de formação do pessoal, ou não há carta às famílias e perguntas frequentes.", meets: "Um plano de formação do pessoal, e uma carta às famílias com perguntas frequentes curtas.", exceeds: "A carta foi lida por um pai, uma mãe ou um mediador familiar e foi melhorada." },
      { name: "Medidas e regra de decisão", objective: "O6", notYet: "Menos de três medidas, sem ponto de partida, ou sem regra de decisão.", meets: "Três a cinco medidas de sucesso com um ponto de partida, e uma regra de avançar, ajustar ou parar.", exceeds: "Inclui uma medida de segurança e um plano para ver os resultados por grupo de alunos." },
      { name: "Apresentação", objective: "O6", notYet: "Não foi apresentado, ou as perguntas não foram registadas.", meets: "Apresentado em dez minutos, com as perguntas e as respostas registadas.", exceeds: "As perguntas difíceis foram bem recebidas e respondidas com as provas do plano." }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminam o programa e passam no projeto final (grelha de avaliação)",
      "Planos de piloto apresentados a uma equipa de direção ou a um conselho em 60 dias (inquérito de seguimento)",
      "Pilotos começados com uma verificação de privacidade e equidade aprovada e uma regra de decisão escrita (inquérito de seguimento)",
      "Pilotos que chegam a uma decisão de avançar, ajustar ou parar usando o seu ponto de partida e as suas medidas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "As suas orientações para o uso responsável da IA do curso 7 e as regras do seu distrito",
      "Dados em resumo ou resultados de inquéritos sobre o problema (sem dados individuais de alunos)",
      "Um modelo de plano com cerca de quatro páginas",
      "Cerca de 90 minutos para as lições e as verificações, mais tempo para escrever e apresentar o plano"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois peça aos líderes para partilharem as descrições dos problemas em pequenos grupos antes de escolherem as ferramentas.",
      "Convide o responsável pela privacidade do distrito a rever as verificações de privacidade e equidade antes das apresentações.",
      "Peça a um pai, a uma mãe ou a um mediador familiar para ler os rascunhos das cartas às famílias.",
      "Marque uma sessão de apresentações com uma equipa de direção verdadeira ou com um grupo de colegas no papel do conselho.",
      "Avalie o projeto final com a grelha de avaliação e recolha as perguntas e as respostas registadas."
    ]
  }
};
