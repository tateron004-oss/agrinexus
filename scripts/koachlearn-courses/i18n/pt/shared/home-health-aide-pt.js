"use strict";

// Koach Learn course (Portuguese translation of shared/home-health-aide.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: US names (Medicare, BLS, HIPAA, Adult Protective Services, 911) are kept and explained.

module.exports = {
  id: "home-health-aide-pt",
  lang: "pt",
  translationOf: "home-health-aide",
  category: "Workforce Development",
  name: "Competências de Auxiliar de Saúde ao Domicílio",
  skills: "Conhecer o trabalho e o caminho do auxiliar de saúde ao domicílio, Verificar a segurança de uma casa, Seguir um plano de cuidados com dignidade, Escrever uma nota de visita e comunicar mudanças, Proteger a privacidade e manter limites",
  outcome: "explicar o que faz um auxiliar de saúde ao domicílio e como receber formação no seu estado, e montar um kit de visita de prática: uma lista de verificação de segurança da casa, uma lista de tarefas do plano de cuidados e uma nota de visita com factos.",
  about: [
    "Os auxiliares de saúde ao domicílio ajudam as pessoas a viver em segurança em casa: idosos, pessoas com deficiência e pessoas a recuperar depois de um internamento no hospital. Ajudam no banho, a vestir, nas refeições e a mover-se, e observam as mudanças e comunicam-nas a um enfermeiro.",
    "Este curso prepara você para a formação e para o trabalho. Não lhe dá um certificado. Nos Estados Unidos, os auxiliares que trabalham para agências de cuidados ao domicílio ou de cuidados paliativos pagas pelo Medicare (o seguro de saúde do governo) têm de terminar uma formação formal e passar num teste, e muitos estados acrescentam regras próprias. Vai aprender onde verificar as do seu estado.",
    "Vai praticar a forma de pensar de que o trabalho precisa: verificar a segurança de uma casa, seguir um plano de cuidados, escrever o que vê e proteger as informações e o dinheiro do cliente. Os cuidados com as mãos, como as transferências, aprendem-se com a supervisão de um enfermeiro, não numa pessoa real em casa.",
    "Este é também um bom caminho para quem volta para casa depois da prisão. As regras sobre a verificação de antecedentes mudam de estado para estado e de agência para agência, por isso o curso mostra como perguntar."
  ],
  finalTask: "Faça um kit de visita de prática para um cliente inventado (só para praticar): uma lista de verificação de segurança da casa numa página, a lista das tarefas do plano de cuidados que faria numa visita, por ordem, uma nota de visita com factos e uma mudança que comunicaria, e o nome da página oficial do seu estado com as regras para auxiliares de saúde ao domicílio.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos à procura de um trabalho estável a cuidar de pessoas: quem procura emprego, quem volta para casa depois da prisão, imigrantes, familiares cuidadores que querem ser pagos pelas competências que já têm e adultos que voltam ao trabalho.",
    startingPoint: "Muitos já cuidaram de um familiar. Poucos sabem a diferença entre um auxiliar de saúde ao domicílio e um auxiliar de cuidados pessoais, as regras da formação ou como escrever uma nota de visita.",
    gap: "As agências precisam de auxiliares com formação, que sigam o plano de cuidados, se mantenham seguros na casa do cliente, comuniquem mudanças e protejam a privacidade. Os alunos precisam de conhecer o caminho da formação e estes hábitos para serem contratados e manterem os clientes seguros.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 7.º ano)",
      "Aparelhos: um telefone ou um computador da biblioteca; todas as tarefas podem ser feitas em papel",
      "As regras de formação e de teste vêm da lei federal, do estado e da agência; o curso aponta para páginas oficiais e não indica horas nem custos",
      "Nenhum conselho sobre medicamentos nem doses; nenhuma prática com as mãos em clientes reais em casa",
      "Alguns alunos têm registo criminal; as regras de verificação de antecedentes mudam conforme o estado e a agência"
    ],
    prerequisites: "Nenhum. Os cursos \"Cuidar de Alguém Querido\" e \"Literacia em Saúde\" ajudam, mas não são obrigatórios."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando a página oficial do seu estado e um anúncio de emprego de uma agência", action: "descrever o que faz um auxiliar de saúde ao domicílio e os passos para receber formação no seu estado", standard: "indicando a formação, o teste ou a avaliação de competências e a página que verificou" },
    { id: "O2", condition: "Com uma imagem ou descrição da casa de um cliente", action: "fazer a lista dos perigos para a segurança e do que faria em cada um", standard: "encontrando pelo menos 4 perigos, incluindo um para a sua própria segurança" },
    { id: "O3", condition: "Com um plano de cuidados para um cliente inventado", action: "pôr por ordem as tarefas da visita e fazer cada uma de forma a proteger a dignidade e as escolhas do cliente", standard: "sem sair do plano de cuidados" },
    { id: "O4", condition: "Com uma mudança que nota numa visita", action: "escrever uma nota de visita com factos e decidir se liga ao enfermeiro ou ao 911", standard: "com a hora, o que viu ou ouviu e a quem contou" },
    { id: "O5", condition: "Com uma situação sobre privacidade, dinheiro, presentes ou possível abuso", action: "escolher a ação que protege o cliente e segue as regras", standard: "acertando pelo menos 4 de 5 situações" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O trabalho e a casa",
      lessons: [
        {
          title: "O que faz um auxiliar de saúde ao domicílio e como ter formação",
          objectives: ["O1"],
          minutes: 5,
          goal: "Descrever o trabalho do auxiliar de saúde ao domicílio e fazer a lista dos passos para ter formação no seu estado.",
          text: [
            "Os auxiliares de saúde ao domicílio e os auxiliares de cuidados pessoais ajudam as pessoas em casa nas tarefas do dia a dia, como o banho, vestir, as refeições e a roupa. Os auxiliares de saúde ao domicílio também podem fazer tarefas básicas de saúde, como medir o pulso, a temperatura e a respiração, conforme o estado. São supervisionados por enfermeiros ou outros profissionais de saúde.",
            "Os auxiliares de cuidados pessoais costumam dar ajuda não médica, como companhia, limpeza, cozinhar e conduzir. Os anúncios de emprego usam muitas vezes os dois nomes, por isso leia as funções.",
            "As agências de cuidados ao domicílio e de cuidados paliativos pagas pelo Medicare têm de seguir regras federais sobre os seus auxiliares. O Departamento de Estatísticas do Trabalho dos EUA (BLS) diz que os auxiliares destas agências têm de terminar uma formação formal e passar num teste padronizado. Alguns estados também exigem uma licença ou certificação, uma verificação de antecedentes ou um exame de competências.",
            "Este curso prepara você. A sua formação e o seu teste vêm de uma agência ou de um programa aprovado. Para verificar as regras do seu estado, vá à página do conselho ou do departamento de saúde do seu estado. Muitas agências dão formação a novos auxiliares, às vezes de graça, por isso pergunte."
          ],
          steps: ["Pesquise o nome do seu estado mais \"home health aide training requirements\" e abra a página do departamento de saúde do estado.", "Escreva as regras sobre a formação, o teste e a verificação de antecedentes.", "Veja dois anúncios de emprego de agências de cuidados ao domicílio perto de si e faça a lista das funções e dos requisitos.", "Pergunte a cada agência se dá formação a novos auxiliares."],
          words: [["Auxiliar de saúde ao domicílio (HHA)", "um auxiliar com formação que dá cuidados pessoais e algumas tarefas básicas de saúde na casa do cliente, supervisionado por um enfermeiro."], ["Auxiliar de cuidados pessoais", "um auxiliar que dá ajuda não médica em casa, como limpeza, cozinhar e companhia."], ["Agência", "uma empresa que envia auxiliares e enfermeiros às casas dos clientes."], ["Teste de competências", "um teste que verifica se sabe e consegue fazer as tarefas do trabalho."]],
          slides: [
            { title: "Dois tipos de auxiliares", bullets: ["Auxiliar de saúde ao domicílio: cuidados pessoais e algumas tarefas de saúde", "Auxiliar de cuidados pessoais: ajuda não médica", "Leia as funções em cada anúncio de emprego"] },
            { title: "Quem supervisiona", bullets: ["O auxiliar de saúde ao domicílio trabalha com um enfermeiro", "O enfermeiro escreve o plano de cuidados", "Você segue-o e comunica as mudanças"] },
            { title: "Regras da formação", bullets: ["Agências pagas pelo Medicare: formação formal e um teste", "Os estados podem exigir licença, exame ou verificação de antecedentes", "Veja a página do departamento de saúde do seu estado"] },
            { title: "Este curso prepara você", bullets: ["Não lhe dá um certificado", "Muitas agências dão formação a novos auxiliares", "Pergunte antes de pagar"] }
          ],
          sources: [
            { name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): Home Health and Personal Care Aides", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
            { name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Encontre a página oficial do seu estado sobre as regras para auxiliares de saúde ao domicílio. Depois encontre um anúncio de emprego de uma agência de cuidados ao domicílio perto de si. Em papel, escreva a regra da formação da página do estado, três funções do anúncio e uma pergunta que faria à agência.",
          youCanNow: "explicar o que faz um auxiliar de saúde ao domicílio e encontrar as regras de formação do seu estado numa página oficial.",
          quickCheck: [
            { objective: "O1", q: "Quem supervisiona um auxiliar de saúde ao domicílio?", options: ["O vizinho do cliente", "Ninguém", "Um enfermeiro ou outro profissional de saúde", "Os amigos do auxiliar"], answer: 2, why: "Os auxiliares de saúde ao domicílio são supervisionados por enfermeiros ou outros profissionais de saúde." },
            { objective: "O1", q: "Onde verifica as regras de formação para auxiliares de saúde ao domicílio no seu estado?", options: ["No conselho ou departamento de saúde do seu estado", "Num anúncio na internet", "Num comentário nas redes sociais", "Numa mensagem em corrente"], answer: 0, why: "A página oficial de saúde do estado define e explica as regras." }
          ]
        },
        {
          title: "Verificar a segurança da casa de um cliente",
          objectives: ["O2"],
          minutes: 5,
          goal: "Fazer a lista dos perigos de uma casa e do que fazer em cada um.",
          text: [
            "Uma casa não é um hospital. Cada casa é diferente, por isso olhe à sua volta sempre que chega. As quedas são um dos maiores perigos para os idosos. O MedlinePlus (um site de saúde do governo dos EUA) indica formas de baixar o risco: tirar o que faz tropeçar, ter corrimãos nas escadas e na banheira ou no duche, e fazer exames aos olhos.",
            "Procure tapetes soltos, fios no chão, coisas espalhadas nas escadas, pouca luz, o chão da casa de banho molhado e coisas que o cliente tem de ir buscar muito alto. Conte ao seu supervisor os perigos que não consegue resolver, e nunca mude móveis de lugar nem deite coisas fora sem perguntar ao cliente.",
            "Os micróbios também contam em casa. Limpe as mãos antes e depois dos cuidados, use luvas quando pode tocar em fluidos do corpo e limpe as mãos logo depois de tirar as luvas. Use água e sabão quando as mãos parecem sujas.",
            "Proteja-se a si próprio. Saiba a morada e o número de telefone da sua agência. Peça que os animais fiquem fechados se o deixam pouco à vontade. Se alguma vez não se sentir seguro, saia e ligue ao seu supervisor. Ninguém espera que fique em perigo."
          ],
          steps: ["Olhe à sua volta quando chega: chão, escadas, luz, casa de banho.", "Resolva pequenos perigos com o acordo do cliente, como um fio no caminho.", "Escreva e comunique os perigos que não consegue resolver.", "Se não se sentir seguro, saia e ligue ao seu supervisor."],
          words: [["Perigo", "algo que pode causar uma lesão, como um tapete solto."], ["Risco de queda", "a probabilidade de uma pessoa cair."], ["Barra de apoio", "uma barra forte presa à parede para a pessoa se agarrar, muitas vezes ao lado da sanita ou da banheira."]],
          slides: [
            { title: "Olhe à volta em cada visita", bullets: ["Chão: tapetes, fios, coisas espalhadas", "Escadas e luz", "Casa de banho: chão molhado, sem corrimãos"] },
            { title: "Baixar o risco de queda", bullets: ["Tirar o que faz tropeçar, com o acordo do cliente", "Corrimãos nas escadas e na banheira ou no duche", "Comunicar o que não consegue resolver"] },
            { title: "Micróbios em casa", bullets: ["Mãos limpas antes e depois dos cuidados", "Luvas para fluidos do corpo", "Mãos limpas depois de tirar as luvas"] },
            { title: "A sua própria segurança", bullets: ["Saiba a morada e o número da agência", "Peça que os animais fiquem fechados", "Não se sente seguro? Saia e ligue ao supervisor"] }
          ],
          sources: [
            { name: "MedlinePlus: Falls", url: "https://medlineplus.gov/falls.html" },
            { name: "CDC: Clinical Safety: Hand Hygiene for Healthcare Workers", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }
          ],
          tryIt: "Percorra a sua própria casa como se fosse um auxiliar de saúde ao domicílio. Faça a lista de pelo menos quatro perigos que encontra (por exemplo um tapete solto ou um corredor escuro), o que faria em cada um e uma coisa que faria para se manter seguro.",
          youCanNow: "verificar os perigos de uma casa, resolvê-los ou comunicá-los, e proteger a sua própria segurança numa visita.",
          quickCheck: [
            { objective: "O2", q: "Vê o fio de um candeeiro no caminho para a casa de banho. O que faz?", options: ["Ignora-o", "Com o acordo do cliente, tira-o do caminho", "Corta o fio", "Deita o candeeiro fora"], answer: 1, why: "Tirar do caminho o que faz tropeçar, com o acordo do cliente, baixa o risco de queda." },
            { objective: "O2", q: "Uma visita em casa do cliente faz ameaças e você não se sente seguro. O que faz?", options: ["Fica e acaba primeiro todas as tarefas", "Discute com a visita", "Esconde-se na casa de banho", "Sai e liga ao seu supervisor"], answer: 3, why: "A sua segurança vem primeiro; saia e ligue ao seu supervisor." }
          ]
        },
        {
          title: "Seguir o plano de cuidados com dignidade",
          objectives: ["O3"],
          minutes: 5,
          goal: "Pôr por ordem as tarefas do plano de cuidados de uma visita e fazê-las com respeito pelo cliente.",
          text: [
            "O enfermeiro escreve um plano de cuidados para cada cliente. Diz o que você faz em cada visita: por exemplo ajudar no duche, ajudar a vestir, fazer o almoço, um passeio curto e tratar da roupa. Faça o que o plano diz. Se o cliente pedir algo que não está no plano, ligue ao seu supervisor.",
            "Os auxiliares não mudam o plano de cuidados e não dão conselhos médicos. Conforme o estado e o plano, pode lembrar o cliente de que está na hora do medicamento, mas não decide as doses nem muda os medicamentos. As perguntas sobre medicamentos vão para o enfermeiro.",
            "Dignidade é tratar o cliente como um adulto que manda na sua própria vida. Bata à porta, cumprimente-o pelo nome que ele prefere, explique o que vai fazer e pergunte antes de começar. Dê escolhas, como que camisa vestir. Deixe-o fazer o que consegue sozinho, mesmo que demore mais. Mantenha-o tapado durante o banho.",
            "As tarefas com as mãos, como as transferências e dar banho a alguém que não consegue ficar de pé, aprendem-se e são avaliadas na sua formação, com a supervisão de um enfermeiro."
          ],
          steps: ["Leia o plano de cuidados antes de começar.", "Cumprimente o cliente, explique o plano de hoje e pergunte o que ele deseja.", "Faça as tarefas numa ordem que faça sentido, por exemplo o banho antes de vestir, e as refeições à hora certa.", "Deixe o cliente fazer o que consegue e dê escolhas.", "Ligue ao seu supervisor sobre tudo o que não está no plano."],
          words: [["Plano de cuidados", "a lista escrita pelo enfermeiro com os cuidados que o cliente recebe e como."], ["Dignidade", "tratar uma pessoa com respeito, como um adulto que faz as suas próprias escolhas."], ["Âmbito", "as tarefas que tem formação e autorização para fazer no seu trabalho."]],
          slides: [
            { title: "O plano de cuidados é o seu guia", bullets: ["Escrito pelo enfermeiro", "Faça o que ele diz", "Não está no plano? Ligue ao seu supervisor"] },
            { title: "Fique no seu papel", bullets: ["Nenhum conselho médico", "Não mude medicamentos nem doses", "Perguntas sobre medicamentos vão para o enfermeiro"] },
            { title: "Dignidade", bullets: ["Bata à porta, cumprimente, explique, pergunte", "Dê escolhas", "Deixe-o fazer o que consegue", "Mantenha-o tapado"] }
          ],
          tryIt: "Só para praticar, cliente inventada: o plano de cuidados da Sra. Okafor diz \"roupa, ajudar no duche, ajudar a vestir, almoço ao meio-dia, passeio de 10 minutos depois do almoço\". Você chega às 10:30. Escreva as tarefas pela ordem em que as faria e uma forma de lhe dar uma escolha em cada uma.",
          youCanNow: "seguir um plano de cuidados numa ordem que faça sentido, ficar no seu papel e respeitar a dignidade e as escolhas do cliente.",
          quickCheck: [
            { objective: "O3", q: "Um cliente pede-lhe para limpar as caleiras do telhado, o que não está no plano de cuidados. O que faz?", options: ["Faz para ser simpático", "Liga ao seu supervisor sobre o pedido", "Recusa com má educação", "Pede a um amigo para o fazer por dinheiro"], answer: 1, why: "As tarefas que não estão no plano de cuidados vão para o seu supervisor." },
            { objective: "O3", q: "Um cliente quer abotoar a sua própria camisa, mas é lento. O que faz?", options: ["Faz por ele para poupar tempo", "Diz-lhe para se despachar", "Deixa-o fazer e só ajuda se ele pedir", "Salta a camisa"], answer: 2, why: "Deixar os clientes fazer o que conseguem protege a sua dignidade e independência." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O trabalho e a casa",
        questions: [
          { objective: "O1", q: "Qual é uma diferença importante entre um auxiliar de saúde ao domicílio e um auxiliar de cuidados pessoais?", options: ["O auxiliar de saúde ao domicílio pode fazer algumas tarefas básicas de saúde com um enfermeiro", "O auxiliar de cuidados pessoais faz cirurgias", "Não há diferença nenhuma", "O auxiliar de saúde ao domicílio nunca ajuda no banho"], answer: 0, why: "Os auxiliares de saúde ao domicílio podem medir sinais vitais e fazer tarefas parecidas, conforme o estado; os auxiliares de cuidados pessoais costumam dar ajuda não médica." },
          { objective: "O2", q: "Qual destes é um perigo de queda?", options: ["Uma luz de presença no corredor", "Um corrimão nas escadas", "Uma barra de apoio ao lado da banheira", "Um tapete solto no topo das escadas"], answer: 3, why: "Os tapetes soltos podem fazer tropeçar; os outros baixam o risco." },
          { objective: "O2", q: "Encontra um perigo que não consegue resolver, como um corrimão das escadas partido. O que faz?", options: ["Arranja-o com fita-cola", "Escreve-o e comunica-o ao seu supervisor", "Não diz nada", "Diz ao cliente para nunca mais usar as escadas"], answer: 1, why: "Os perigos que não consegue resolver são comunicados para que a agência possa agir." },
          { objective: "O3", q: "O cliente pergunta quanto deve tomar de um medicamento. O que diz?", options: ["Dá o seu melhor palpite", "Diz-lhe para tomar o dobro", "Diz que vai perguntar ao enfermeiro", "Procura na internet e decide por ele"], answer: 2, why: "Os auxiliares não dão conselhos nem doses de medicamentos; o enfermeiro responde às perguntas sobre medicamentos." },
          { objective: "O3", q: "Quem escreve o plano de cuidados do cliente?", options: ["O enfermeiro", "O auxiliar", "O vizinho do cliente", "Ninguém"], answer: 0, why: "O enfermeiro escreve o plano de cuidados; o auxiliar segue-o." }
        ]
      }
    },
    {
      name: "Capítulo 2: Comunicar, privacidade e o seu kit de visita",
      lessons: [
        {
          title: "Observar mudanças e escrever uma nota de visita",
          objectives: ["O4"],
          minutes: 5,
          goal: "Escrever uma nota de visita com factos e decidir se liga ao enfermeiro ou ao 911.",
          text: [
            "Pode ser a única pessoa que vê o cliente hoje. Observe as mudanças: comer ou beber menos, uma dor nova, uma ferida ou uma nódoa negra nova, mais confusão, dificuldade em respirar, uma queda ou uma mudança de humor.",
            "Escreva a nota de visita com factos: o que fez, o que viu e ouviu, e a hora. Use as palavras do próprio cliente entre aspas. \"11:00. Ajudei no duche. Zona vermelha no calcanhar direito, do tamanho de uma moeda. O cliente disse: 'Dói-me o calcanhar.'\" é uma boa nota. \"Parecia estranho\" não é.",
            "Ligue ao seu supervisor ou enfermeiro sobre qualquer mudança. Numa emergência, ligue primeiro para o 911 (o número de emergência dos EUA): dificuldade em respirar, dor no peito, uma pessoa que não acorda, uma hemorragia forte ou sinais de AVC. Depois ligue à sua agência.",
            "A sua agência vai dizer-lhe como quer as notas escritas, em papel ou numa aplicação. Nunca escreva dados privados noutro sítio, como nas notas do seu próprio telefone."
          ],
          steps: ["Repare na mudança.", "É uma emergência? Ligue primeiro para o 911 e depois à sua agência.", "Não é uma emergência? Ligue ao seu enfermeiro ou supervisor.", "Escreva os factos, a hora, as palavras do cliente e a quem contou."],
          words: [["Nota de visita", "o registo que o auxiliar escreve sobre cada visita."], ["Emergência", "um perigo súbito e grave para a vida ou a saúde que precisa do 911."], ["Úlcera de pressão", "pele danificada por ficar muito tempo na mesma posição; muitas vezes começa como uma zona vermelha sobre um osso."]],
          slides: [
            { title: "Observe as mudanças", bullets: ["Comer ou beber menos", "Dor, ferida ou nódoa negra nova", "Mais confusão, uma queda ou dificuldade em respirar"] },
            { title: "Escreva factos", bullets: ["O que fez, viu e ouviu", "A hora e as palavras do próprio cliente", "Não: \"Parecia estranho\""] },
            { title: "A quem ligar", bullets: ["Emergência: primeiro o 911, depois a sua agência", "Qualquer outra mudança: o seu enfermeiro ou supervisor", "Escreva a quem contou"] }
          ],
          sources: [{ name: "MedlinePlus: Pressure Sores", url: "https://medlineplus.gov/pressuresores.html" }],
          tryIt: "Só para praticar, cliente inventado: \"O Sr. Diaz costuma comer o almoço todo. Hoje comeu duas garfadas, disse 'Não me apetece comer' e o tornozelo esquerdo parece mais inchado do que na semana passada.\" Escreva uma nota de visita de três linhas e decida: liga ao enfermeiro ou ao 911? Escreva porquê.",
          youCanNow: "escrever uma nota de visita com factos e decidir se uma mudança precisa do enfermeiro ou do 911.",
          quickCheck: [
            { objective: "O4", q: "O seu cliente tem de repente dificuldade em respirar. O que faz primeiro?", options: ["Escreve uma nota", "Liga para o 911", "Espera para ver se passa", "Manda uma mensagem a um amigo"], answer: 1, why: "A dificuldade em respirar é uma emergência; ligue primeiro para o 911 e depois à agência." },
            { objective: "O4", q: "Qual é a melhor nota de visita?", options: ["\"O cliente estava esquisito hoje.\"", "\"Tudo bem, acho eu.\"", "\"Deve ter sido um dia mau.\"", "\"13:15. Comeu 2 garfadas do almoço. Disse: 'Não tenho fome.'\""], answer: 3, why: "Dá a hora, o que foi observado e as palavras do cliente." }
          ]
        },
        {
          title: "Privacidade, dinheiro e limites",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escolher a ação que protege a privacidade, o dinheiro e a segurança de um cliente.",
          text: [
            "As informações de saúde de um cliente são privadas. A HIPAA, uma lei federal dos EUA, protege-as. Partilhe-as só com a sua equipa de cuidados. Não fale dos clientes com amigos, não publique nada sobre eles e não tire fotografias na casa deles.",
            "Mantenha limites claros sobre dinheiro e presentes. Nunca peça dinheiro emprestado, nunca empreste dinheiro, não aceite presentes de valor nem use o cartão de um cliente, a não ser que as regras da sua agência e o plano de cuidados permitam uma tarefa como fazer compras com recibos. Siga as regras da sua agência à risca e guarde os recibos.",
            "Os idosos e as pessoas com deficiência podem ser vítimas de abuso, de negligência e de roubo de dinheiro, às vezes por pessoas próximas. Os sinais de alerta incluem nódoas negras que ninguém sabe explicar, falta de higiene, úlceras de pressão, medo ou isolamento, e mudanças súbitas com o dinheiro.",
            "Se suspeitar de abuso, conte logo ao seu supervisor. Também pode contactar os Serviços de Proteção de Adultos (Adult Protective Services) do seu estado. Se o cliente estiver em perigo agora, ligue para o 911. Alguns estados obrigam os auxiliares a comunicar; a sua agência vai dizer-lhe como."
          ],
          steps: ["Partilhe as informações do cliente só com a equipa de cuidados.", "Siga as regras da agência sobre dinheiro, guarde os recibos e recuse presentes de valor.", "Esteja atento a sinais de abuso, negligência ou roubo de dinheiro.", "Comunique as preocupações ao seu supervisor ou aos Serviços de Proteção de Adultos; ligue para o 911 se houver perigo."],
          words: [["HIPAA", "uma lei federal dos EUA que protege a privacidade das informações de saúde."], ["Limite", "uma fronteira clara sobre o que faz numa relação de trabalho."], ["Exploração financeira", "tirar ou usar mal o dinheiro ou os bens de alguém."], ["Serviços de Proteção de Adultos (APS)", "o serviço do estado ou do condado que investiga o abuso e a negligência de idosos ou de adultos com deficiência."]],
          slides: [
            { title: "Privacidade", bullets: ["Partilhe só com a equipa de cuidados", "Nada de conversas, publicações ou fotografias", "A HIPAA protege as informações de saúde"] },
            { title: "Dinheiro e presentes", bullets: ["Nada de pedir ou emprestar dinheiro, nem presentes de valor", "Compras só se o plano permitir, com recibos", "Siga as regras da agência à risca"] },
            { title: "Sinais de abuso", bullets: ["Nódoas negras que ninguém sabe explicar", "Falta de higiene ou úlceras de pressão", "Medo, isolamento ou mudanças súbitas com o dinheiro"] },
            { title: "Comunique", bullets: ["Conte logo ao seu supervisor", "Serviços de Proteção de Adultos", "Perigo agora: 911"] }
          ],
          sources: [
            { name: "MedlinePlus: Elder Abuse", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Leia estas três situações inventadas e escreva o que faria: 1) O cliente oferece-lhe $200 \"por ser tão simpático\". 2) O sobrinho do cliente pede-lhe o PIN do cartão bancário do cliente. 3) Um amigo pergunta-lhe de que pessoa famosa cuida. Depois escreva uma frase sobre um limite que podia dizer com simpatia.",
          youCanNow: "proteger a privacidade, o dinheiro e a segurança de um cliente e comunicar as preocupações à pessoa certa.",
          quickCheck: [
            { objective: "O5", q: "Um cliente oferece-lhe um relógio caro como agradecimento. O que faz?", options: ["Diz que não com simpatia e conta ao seu supervisor", "Aceita-o em silêncio", "Vende-o e divide o dinheiro", "Pede dinheiro em vez do relógio"], answer: 0, why: "Os presentes de valor passam um limite; recuse com simpatia e siga as regras da agência." },
            { objective: "O5", q: "Repara que o dinheiro do cliente desaparece sempre depois da visita de um familiar. O que faz?", options: ["Confronta o familiar", "Ignora, é assunto de família", "Comunica ao seu supervisor", "Esconde a carteira do cliente na sua mala"], answer: 2, why: "A possível exploração financeira é comunicada ao seu supervisor ou aos Serviços de Proteção de Adultos." }
          ]
        },
        {
          title: "O seu kit de visita de prática e os próximos passos",
          objectives: ["O2", "O3", "O4", "O1"],
          minutes: 6,
          goal: "Montar um kit de visita de prática para um cliente inventado e planear o seu próximo passo para a formação.",
          text: [
            "Agora vai juntar o curso todo. Um kit de visita é o que um auxiliar preparado leva na cabeça e em papel: uma verificação rápida da segurança da casa, as tarefas do plano de cuidados por ordem e uma nota de visita clara.",
            "Use um cliente inventado, por exemplo \"Sr. Johnson, 78 anos, vive sozinho, usa um andarilho, plano de cuidados: ajudar no duche, vestir, fazer o pequeno-almoço, passeio curto, roupa.\" Nunca use o nome ou os dados de uma pessoa real para praticar.",
            "Depois dê um passo real para o trabalho. Encontre perto de si uma agência de cuidados ao domicílio ou um programa aprovado que dê formação a novos auxiliares. Pergunte sobre a formação, o teste, a verificação de antecedentes, o pagamento durante a formação e o horário. Um American Job Center (centro de emprego público dos EUA) pode ajudar a encontrar e pagar a formação.",
            "No currículo, indique os cuidados que já deu, como cuidar de um familiar, com palavras simples: \"Ajudei um familiar nas refeições, no banho e nas consultas durante 2 anos.\""
          ],
          steps: ["Escreva uma lista de verificação de segurança da casa com pelo menos 6 pontos.", "Faça a lista das tarefas do plano de cuidados do cliente inventado pela ordem em que as faria.", "Escreva uma nota de visita com factos e uma mudança que comunicaria, e a quem contaria.", "Escreva a página oficial do seu estado e uma agência ou programa que vai contactar esta semana."],
          words: [["Kit de visita", "a sua lista de verificação, lista de tarefas e modelo de nota para cada visita."], ["Programa aprovado", "um programa de formação que o seu estado ou uma agência certificada aceita."]],
          slides: [
            { title: "O seu kit de visita", bullets: ["Lista de verificação de segurança da casa", "Tarefas do plano de cuidados por ordem", "Uma nota de visita com factos"] },
            { title: "Só para praticar", bullets: ["Use um cliente inventado", "Nunca nomes ou dados reais"] },
            { title: "O seu próximo passo real", bullets: ["Encontre uma agência ou programa que forme auxiliares", "Pergunte sobre formação, teste, antecedentes e pagamento", "Um American Job Center pode ajudar"] },
            { title: "Linha para o currículo", bullets: ["Indique os cuidados a familiares com palavras simples", "Diga o que fez e durante quanto tempo"] }
          ],
          sources: [{ name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): Home Health and Personal Care Aides (How to Become One)", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm#tab-4" }],
          tryIt: "Tarefa final: faça o seu kit de visita de prática para um cliente inventado: uma lista de verificação de segurança da casa, as tarefas do plano de cuidados por ordem, uma nota de visita com factos e uma mudança que comunicaria e a quem, e a página oficial do seu estado mais uma agência ou programa que vai contactar.",
          youCanNow: "montar um kit de visita de prática e dar um passo real para a formação de auxiliar de saúde ao domicílio.",
          quickCheck: [
            { objective: "O1", q: "Qual é uma boa pergunta para fazer a uma agência de cuidados ao domicílio?", options: ["\"Posso saltar a formação?\"", "\"Dão formação a novos auxiliares, e há um teste?\"", "\"Posso dar os medicamentos à minha maneira?\"", "\"Posso levar os meus amigos a casa dos clientes?\""], answer: 1, why: "Perguntar sobre a formação e o teste mostra o caminho real nessa agência." },
            { objective: "O3", q: "O seu plano de cuidados inventado diz duche, vestir e pequeno-almoço. Que ordem faz sentido?", options: ["Duche, vestir e depois pequeno-almoço", "Pequeno-almoço no duche", "Vestir, duche e vestir outra vez", "Saltar o duche"], answer: 0, why: "O banho antes de vestir, e depois uma refeição, é uma ordem que faz sentido para estas tarefas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Comunicar, privacidade e o seu kit de visita",
        questions: [
          { objective: "O4", q: "Que mudança deve comunicar ao enfermeiro?", options: ["O cliente viu televisão", "O cliente vestiu uma camisa azul", "Uma zona vermelha nova no calcanhar do cliente", "O cliente teve uma visita"], answer: 2, why: "Uma zona vermelha nova pode ser o início de uma úlcera de pressão e tem de ser comunicada." },
          { objective: "O4", q: "O seu cliente não acorda. O que faz primeiro?", options: ["Liga para o 911", "Deixa-o dormir", "Escreve uma nota e vai-se embora", "Liga a um amigo dele"], answer: 0, why: "Uma pessoa que não acorda é uma emergência; ligue primeiro para o 911." },
          { objective: "O5", q: "Um vizinho pergunta o que tem o seu cliente. O que diz?", options: ["Diz-lhe o diagnóstico", "Mostra-lhe as notas de visita", "Diz que não pode partilhar informações sobre os clientes", "Publica uma atualização na internet"], answer: 2, why: "As informações de saúde do cliente são privadas e só vão para a equipa de cuidados." },
          { objective: "O5", q: "Quem investiga o abuso ou a negligência de idosos ou de adultos com deficiência?", options: ["Os correios", "Os Serviços de Proteção de Adultos", "Um funcionário do banco", "O ginásio do cliente"], answer: 1, why: "Os Serviços de Proteção de Adultos investigam o abuso e a negligência; ligue para o 911 se houver perigo imediato." },
          { objective: "O5", q: "O cliente pede-lhe $50 emprestados. O que faz?", options: ["Empresta em silêncio", "Empresta e cobra juros", "Dá-lhe o seu cartão", "Diz que não com simpatia e conta ao seu supervisor"], answer: 3, why: "Emprestar dinheiro passa um limite de trabalho; siga as regras da agência." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Competências de Auxiliar de Saúde ao Domicílio",
    questions: [
      { objective: "O1", q: "Onde trabalha normalmente um auxiliar de saúde ao domicílio?", options: ["Em casa dos clientes", "Só em blocos operatórios", "Num banco", "Num laboratório de farmácia"], answer: 0, why: "Os auxiliares de saúde ao domicílio ajudam as pessoas nas suas próprias casas." },
      { objective: "O1", q: "O que faz este curso?", options: ["Dá-lhe um certificado de auxiliar", "Substitui a formação da sua agência", "Prepara você para a formação e para o trabalho", "Dá-lhe uma licença do estado"], answer: 2, why: "O curso prepara você; a formação e o teste vêm de uma agência ou de um programa aprovado." },
      { objective: "O1", q: "Os auxiliares de agências pagas pelo Medicare têm de:", options: ["Ter um curso de enfermagem", "Terminar uma formação formal e passar num teste", "Trabalhar sem nenhuma formação", "Trabalhar só à noite"], answer: 1, why: "O BLS diz que os auxiliares de agências certificadas têm de terminar uma formação formal e passar num teste padronizado." },
      { objective: "O1", q: "Para conhecer as regras do seu estado para auxiliares de saúde ao domicílio, verifique:", options: ["Um comentário num vídeo", "Uma mensagem em corrente", "O conselho de um desconhecido", "O conselho ou departamento de saúde do seu estado"], answer: 3, why: "A página oficial de saúde do estado explica as suas regras." },
      { objective: "O2", q: "Qual é a melhor forma de baixar o risco de queda em casa?", options: ["Tirar o que faz tropeçar, com o acordo do cliente", "Pôr mais tapetes", "Apagar as luzes do corredor", "Pôr as coisas em prateleiras altas"], answer: 0, why: "Tirar o que faz tropeçar é uma das principais formas de evitar quedas." },
      { objective: "O2", q: "Quando deve limpar as mãos numa visita?", options: ["Só quando sai", "Antes e depois dos cuidados, e depois de tirar as luvas", "Só se o cliente pedir", "Nunca, as luvas chegam"], answer: 1, why: "Limpe as mãos antes e depois dos cuidados e logo depois de tirar as luvas." },
      { objective: "O2", q: "Não se sente seguro em casa de um cliente. O que faz?", options: ["Fica até a visita acabar", "Fecha-se num quarto", "Sai e liga ao seu supervisor", "Publica sobre isso na internet"], answer: 2, why: "A sua segurança vem primeiro; saia e ligue ao seu supervisor." },
      { objective: "O2", q: "O que ajuda a evitar quedas na casa de banho?", options: ["Um chão molhado", "Um tapete de banho solto", "Luzes fracas", "Corrimãos ou barras de apoio na banheira ou no duche"], answer: 3, why: "Os corrimãos na banheira ou no duche ajudam a evitar quedas." },
      { objective: "O3", q: "Um cliente pede uma tarefa que não está no plano de cuidados. Você:", options: ["Liga ao seu supervisor", "Faz na mesma", "Diz que não e vai-se embora", "Pergunta a outro cliente"], answer: 0, why: "As mudanças ao plano passam pelo seu supervisor." },
      { objective: "O3", q: "O que mostra respeito pela dignidade de um cliente?", options: ["Decidir tudo por ele", "Dar escolhas, como que camisa vestir", "Falar dele como se não estivesse lá", "Deixá-lo destapado durante o banho"], answer: 1, why: "Dar escolhas trata o cliente como um adulto que manda na sua vida." },
      { objective: "O3", q: "Quem responde às perguntas sobre os medicamentos de um cliente?", options: ["O auxiliar", "O vizinho do cliente", "O enfermeiro", "Um fórum na internet"], answer: 2, why: "Os auxiliares não dão conselhos sobre medicamentos; o enfermeiro responde às perguntas sobre medicamentos." },
      { objective: "O3", q: "Antes de começar os cuidados, o que faz?", options: ["Começa sem falar", "Lê o plano de cuidados, cumprimenta o cliente e explica", "Muda os móveis de lugar", "Muda o plano de cuidados"], answer: 1, why: "Ler o plano, cumprimentar e explicar vem primeiro." },
      { objective: "O4", q: "Qual é uma emergência que precisa primeiro do 911?", options: ["O cliente quer um lanche", "O cliente está aborrecido", "A roupa está atrasada", "Dor no peito ou dificuldade em respirar"], answer: 3, why: "A dor no peito e a dificuldade em respirar precisam primeiro do 911 e depois da agência." },
      { objective: "O4", q: "Uma boa nota de visita inclui:", options: ["A hora, o que viu e as palavras do cliente", "A sua opinião sobre a família do cliente", "Palpites sobre o que está mal", "Dados privados no seu próprio telefone"], answer: 0, why: "As notas são factos com a hora e as palavras do próprio cliente." },
      { objective: "O4", q: "Esta semana o cliente está a comer muito menos do que o normal. Você:", options: ["Não diz nada", "Comunica ao enfermeiro e escreve na sua nota", "Obriga-o a comer tudo", "Deita a comida dele fora"], answer: 1, why: "Uma mudança na alimentação é comunicada e escrita." },
      { objective: "O4", q: "Depois de ligar para o 911 numa emergência, também:", options: ["Vai para casa", "Apaga as suas notas", "Liga à sua agência", "Espera um dia para contar a alguém"], answer: 2, why: "Depois do 911, ligue à sua agência para que o enfermeiro e o supervisor saibam." },
      { objective: "O5", q: "Que lei protege as informações de saúde dos clientes?", options: ["A HIPAA", "O limite de velocidade", "A lei do salário mínimo", "A lei dos direitos de autor"], answer: 0, why: "A HIPAA protege a privacidade das informações de saúde." },
      { objective: "O5", q: "Qual é um sinal de alerta de exploração financeira?", options: ["O cliente paga uma conta a tempo", "O cliente compra mercearias", "O cliente tem um cartão da biblioteca", "Mudanças súbitas e sem explicação no dinheiro do cliente"], answer: 3, why: "As mudanças súbitas no dinheiro podem querer dizer que alguém está a tirar o dinheiro do cliente." },
      { objective: "O5", q: "Tirar fotografias a um cliente em casa dele para partilhar com amigos é:", options: ["Normal se ele parecer contente", "Um problema de privacidade; não o faça", "Exigido pela agência", "Normal se desfocar a casa"], answer: 1, why: "As fotografias e publicações sobre clientes quebram a sua privacidade." },
      { objective: "O5", q: "Suspeita que um cliente está a ser negligenciado por um familiar. Você:", options: ["Conta aos vizinhos do cliente", "Espera até piorar", "Comunica ao seu supervisor ou aos Serviços de Proteção de Adultos", "Não faz nada porque é família"], answer: 2, why: "A suspeita de negligência é comunicada; ligue para o 911 se houver perigo agora." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 2, 4, 6, 9, 10, 13, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Lista de segurança da casa", objective: "O2", notYet: "Menos de 4 pontos, ou nenhum ponto sobre a segurança do próprio auxiliar.", meets: "Pelo menos 6 pontos sobre o chão, as escadas, a luz, a casa de banho, os micróbios e a segurança do auxiliar.", exceeds: "Diz o que fazer em cada ponto: resolver com o acordo do cliente, ou comunicar." },
      { name: "Tarefas do plano de cuidados", objective: "O3", notYet: "Faltam tarefas, estão numa ordem sem sentido ou fora do plano.", meets: "Todas as tarefas do plano numa ordem que faz sentido, com uma forma de dar uma escolha.", exceeds: "Indica em que tarefas o cliente pode fazer uma parte sozinho." },
      { name: "Nota de visita", objective: "O4", notYet: "A nota tem palpites ou opiniões, ou não tem hora.", meets: "Factos, a hora, as palavras do próprio cliente e a quem se contou.", exceeds: "Diz corretamente se a mudança precisa do enfermeiro ou do 911, e porquê." },
      { name: "Privacidade protegida", objective: "O5", notYet: "O kit usa o nome ou dados privados de uma pessoa real.", meets: "Usa um cliente inventado e nenhum dado privado.", exceeds: "Acrescenta uma frase sobre um limite com dinheiro ou presentes." },
      { name: "Próximo passo", objective: "O1", notYet: "Não indica nenhuma página oficial nem agência.", meets: "Indica a página oficial do estado e uma agência ou programa a contactar.", exceeds: "Faz a lista das perguntas sobre a formação, o teste, a verificação de antecedentes e o pagamento." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que contactam uma agência de cuidados ao domicílio ou um programa de formação aprovado em 30 dias",
      "Alunos que terminam a formação de auxiliar de saúde ao domicílio e passam no teste de competências",
      "Alunos contratados como auxiliares de saúde ao domicílio ou de cuidados pessoais em 6 meses (inquérito de seguimento)",
      "As agências parceiras dizem que os novos auxiliares comunicam mudanças e seguem os planos de cuidados desde as primeiras semanas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para encontrar a página do departamento de saúde do estado e as agências locais",
      "Papel e caneta para a lista de verificação, a lista de tarefas e a nota de visita",
      "A sua própria casa para a verificação de segurança",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Antes do curso, encontre as regras do seu estado para auxiliares de saúde ao domicílio e duas agências locais que dão formação a novos auxiliares, e partilhe-as.",
      "Use só clientes inventados; lembre aos alunos que nunca usem o nome ou os dados de uma pessoa real na prática.",
      "Não deixe os alunos praticar transferências ou banhos uns nos outros sem um formador qualificado.",
      "Diga claramente que o curso prepara os alunos e não lhes dá um certificado; as regras vêm da lei federal, do estado e da agência.",
      "Aos alunos com registo criminal, indique as regras do estado e um conselheiro de reintegração ou de apoio jurídico antes de se candidatarem."
    ]
  }
};
