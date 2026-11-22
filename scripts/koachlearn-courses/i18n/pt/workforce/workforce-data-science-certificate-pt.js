"use strict";

// Koach Learn course (Portuguese translation of workforce/workforce-data-science-certificate.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const GOOGLE_DA = { name: "Coursera: Google Data Analytics Professional Certificate (certificado profissional de análise de dados da Google)", url: "https://www.coursera.org/professional-certificates/google-data-analytics" };
const IBM_DS = { name: "Coursera: IBM Data Science Professional Certificate (certificado profissional de ciência de dados da IBM)", url: "https://www.coursera.org/professional-certificates/ibm-data-science" };
const MS_PL300 = { name: "Microsoft Learn: Microsoft Certified: Power BI Data Analyst Associate (Exame PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const COLAB = { name: "Google Colab", url: "https://colab.research.google.com/" };

module.exports = {
  id: "workforce-data-science-certificate-pt",
  lang: "pt",
  translationOf: "workforce-data-science-certificate",
  category: "Workforce Development",
  name: "Preparação para um Certificado Profissional em Ciência de Dados",
  skills: "Escolher o certificado de dados certo, Fazer um plano de estudo semanal, Limpar e resumir um conjunto de dados, Fazer uma pergunta aos dados e responder com um gráfico, Construir um projeto de portefólio",
  outcome: "escolher o certificado de dados que serve o seu objetivo, fazer um plano de estudo que consiga cumprir e terminar um pequeno projeto de prática do tipo que estes certificados pedem: pegar num conjunto de dados real, limpá-lo, resumi-lo, fazer um gráfico claro e escrever o que ele quer dizer.",
  about: [
    "Este curso é para quem procura emprego e para quem já trabalha e quer passar para o trabalho com dados, ou usar dados no emprego que já tem, e está a pensar num certificado de dados online conhecido, como o Google Data Analytics Professional Certificate, o IBM Data Science Professional Certificate ou o Power BI Data Analyst Associate da Microsoft.",
    "Este curso não substitui esses programas. Prepara você para eles: vai aprender o que cada um ensina, escolher um que sirva o seu objetivo e a sua semana, e praticar as habilidades principais que todos usam, num pequeno projeto que pode mostrar aos empregadores.",
    "Um certificado é uma forma de aprender e de mostrar o que aprendeu. Não promete um emprego nem um aumento de salário. O que mais ajuda é terminar, praticar e saber explicar os seus próprios projetos. Antes de se inscrever, veja na página atual de cada programa o custo, o tempo e o conteúdo.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Termine um pequeno projeto de portefólio: escolha um conjunto de dados público e gratuito (ou a tabela de vendas de exemplo da Lição 4), escreva uma pergunta clara, limpe os dados (corrija células vazias, duplicados e formatos), faça uma tabela de resumo, faça um gráfico que responda à pergunta e escreva uma conclusão de três frases com um limite dos seus dados. Guarde-o no Google Sheets, no Excel ou no Google Colab com um título e uma descrição curtos.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que procuram emprego e pessoas que já trabalham e querem passar para o trabalho com dados, ou usar dados no emprego que já têm, e estão a pensar num certificado de dados online conhecido (Google Data Analytics, IBM Data Science ou Microsoft Power BI Data Analyst).",
    startingPoint: "Sabem usar um computador e folhas de cálculo simples. A maioria nunca comparou certificados de dados, nunca seguiu um plano de estudo online longo, nem limpou, resumiu e fez gráficos de um conjunto de dados real.",
    gap: "As habilidades com dados abrem muitos empregos, mas muitas vezes as pessoas escolhem o certificado errado, param a meio ou terminam sem trabalho para mostrar. Os alunos precisam de escolher um certificado que sirva o seu objetivo, planear um estudo que consigam cumprir e terminar um pequeno projeto de portefólio do tipo que estes certificados pedem.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; os termos de dados são explicados",
      "Aparelhos: é preciso um computador para as folhas de cálculo e o Google Colab; um telefone chega para planear",
      "Os custos e os detalhes dos cursos mudam, por isso os alunos verificam hoje a página oficial de cada programa",
      "Privacidade: nenhum dado privado de clientes num portefólio público sem autorização; só conjuntos de dados de exemplo ou públicos",
      "Tempo: lições de cerca de 5 minutos mais prática; os certificados levam meses depois deste curso"
    ],
    prerequisites: "Nenhum. Ajuda ter alguma prática com folhas de cálculo."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um local de trabalho que conhece", action: "descrever o caminho do trabalho com dados e escrever três perguntas a que os dados podem responder nesse local", standard: "marcando cada uma como trabalho de analista ou de cientista de dados" },
    { id: "O2", condition: "Com três certificados de dados conhecidos", action: "comparar o nível, as ferramentas principais, o tempo e o custo de cada um e escolher o que serve o seu objetivo", standard: "com o custo tirado hoje da página oficial" },
    { id: "O3", condition: "Para o certificado que escolheu", action: "criar um plano de estudo semanal com horários de estudo fixos e um objetivo para cada semana", standard: "que encaixe no seu trabalho e na sua família" },
    { id: "O4", condition: "Com um pequeno conjunto de dados com problemas", action: "encontrar e corrigir células vazias, duplicados e problemas de formato e escrever um registo de limpeza", standard: "guardando primeiro uma cópia do original" },
    { id: "O5", condition: "Com um conjunto de dados limpo e uma pergunta", action: "fazer uma tabela de resumo e um gráfico que responda à pergunta", standard: "com o tipo de gráfico certo e um título que diga a resposta" },
    { id: "O6", condition: "Usando o seu gráfico e o seu resumo", action: "escrever uma conclusão de três frases com um limite e guardá-la como projeto de portefólio", standard: "com um título e uma descrição curtos e sem dados privados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher o seu certificado e planear para terminar",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que fazem os analistas de dados e os cientistas de dados",
          minutes: 5,
          goal: "Descrever o caminho do trabalho com dados e dizer que parte lhe interessa mais.",
          text: [
            "O trabalho com dados segue um caminho simples: fazer uma pergunta, recolher os dados, limpá-los, explorá-los e analisá-los, mostrá-los com gráficos e partilhar o que querem dizer. O programa da Google descreve a mesma ideia com os seus próprios passos.",
            "Um analista de dados trabalha sobretudo com o que já aconteceu: \"Que produto vendeu mais no mês passado?\" Usa folhas de cálculo, SQL (uma linguagem para fazer perguntas a bases de dados) e ferramentas de painéis como o Tableau ou o Power BI.",
            "Um cientista de dados também faz isso, e além disso constrói modelos que preveem ou classificam coisas: \"Que clientes podem deixar de comprar?\" Normalmente programa em Python e usa mais matemática. Muitas pessoas começam como analistas e depois passam para a ciência de dados."
          ],
          words: [["Conjunto de dados", "um grupo de dados, normalmente uma tabela com linhas e colunas."], ["SQL", "Structured Query Language (linguagem de consulta estruturada): uma linguagem para tirar dados de bases de dados."], ["Modelo", "um programa que aprende padrões a partir dos dados para prever ou classificar coisas."], ["Painel (dashboard)", "uma página de gráficos que se atualiza quando os dados mudam."]],
          slides: [
            { title: "O caminho do trabalho com dados", bullets: ["Fazer uma pergunta", "Recolher e limpar os dados", "Analisar e fazer gráficos", "Partilhar o que querem dizer"] },
            { title: "Analista de dados", bullets: ["Explica o que aconteceu", "Folhas de cálculo, SQL, Tableau ou Power BI", "\"Que produto vendeu mais no mês passado?\""] },
            { title: "Cientista de dados", bullets: ["Também prevê e classifica com modelos", "Normalmente Python e mais matemática", "\"Que clientes podem deixar de comprar?\""] }
          ],
          tryIt: "Pense no seu emprego atual ou no último (uma loja, um armazém, uma clínica, um restaurante). Escreva três perguntas a que os dados podem responder ali, como \"Que horas têm mais movimento?\" Marque cada uma como \"analista\" ou \"cientista de dados\".",
          youCanNow: "descrever o caminho do trabalho com dados e a diferença entre um analista de dados e um cientista de dados.",
          quickCheck: [
            { objective: "O1", q: "Qual é normalmente o primeiro passo do trabalho com dados?", options: ["Fazer um gráfico", "Limpar os dados", "Construir um modelo", "Fazer uma pergunta"], answer: 3, why: "O trabalho com dados começa com uma pergunta clara, que guia todos os passos seguintes." },
            { objective: "O1", q: "Na sua loja, quer saber que horas têm mais movimento. Que tipo de trabalho é este?", options: ["Só de cientista de dados", "De analista de dados", "De ninguém; não se pode responder", "Só de um programador de computadores"], answer: 1, why: "Descrever o que aconteceu, como as horas de mais movimento, é trabalho típico de analista." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Comparar os certificados de dados conhecidos",
          minutes: 6,
          goal: "Comparar três certificados de dados muito conhecidos e escolher o que serve o seu objetivo.",
          text: [
            "Google Data Analytics Professional Certificate (no Coursera): uma série de 9 cursos para principiantes, sem experiência necessária. A sua página indica folhas de cálculo, SQL, Tableau e apresentações, e as perguntas frequentes dizem que ensina Python. Sugere cerca de 6 meses com 10 horas por semana.",
            "IBM Data Science Professional Certificate (no Coursera): uma série de 12 cursos para principiantes. A sua página indica Python, SQL, Jupyter e bibliotecas como Pandas, NumPy, Matplotlib e Scikit-learn, e ensina análise de dados, visualização e modelos de aprendizagem automática. Sugere cerca de 4 meses com 10 horas por semana.",
            "Microsoft Certified: Power BI Data Analyst Associate: uma certificação de nível intermédio que se obtém passando no Exame PL-300, um exame vigiado. Avalia a preparação, a modelação, a visualização e a análise de dados no Power BI, e é renovada de graça a cada 12 meses no Microsoft Learn.",
            "Os custos, os tempos e as listas de cursos mudam, e alguns programas estão incluídos em assinaturas ou são oferecidos de graça por bibliotecas, centros de emprego ou apoio financeiro. Abra a página oficial de cada um e verifique antes de se inscrever. Nenhum certificado garante um emprego."
          ],
          steps: ["Escreva o seu objetivo: analista, cientista de dados, ou usar dados no seu emprego atual.", "Abra a página oficial de cada certificado.", "Anote o nível, as ferramentas, a duração e o custo atual.", "Pergunte no centro de emprego ou na biblioteca local se há acesso gratuito.", "Escolha um e escreva porquê."],
          words: [["Certificado profissional", "uma série de cursos online de uma empresa ou escola que termina com um certificado."], ["Exame vigiado", "um teste observado por um responsável, presencial ou online, para evitar fraude."], ["Python", "uma linguagem de programação popular usada na ciência de dados."]],
          slides: [
            { title: "Google Data Analytics", bullets: ["9 cursos no Coursera, nível principiante", "Folhas de cálculo, SQL, Tableau; as perguntas frequentes dizem também Python", "Cerca de 6 meses com 10 horas por semana (segundo a sua página)"] },
            { title: "IBM Data Science", bullets: ["12 cursos no Coursera, nível principiante", "Python, SQL, Jupyter, Pandas, Scikit-learn", "Cerca de 4 meses com 10 horas por semana (segundo a sua página)"] },
            { title: "Microsoft Power BI Data Analyst", bullets: ["Nível intermédio: passar no Exame PL-300", "Preparar, modelar, visualizar e analisar no Power BI", "Renovação gratuita a cada 12 meses no Microsoft Learn"] },
            { title: "Antes de se inscrever", bullets: ["Veja o custo e o tempo na página oficial", "Pergunte por acesso gratuito: biblioteca, centro de emprego, apoio", "Nenhum certificado garante um emprego"] }
          ],
          sources: [GOOGLE_DA, IBM_DS, MS_PL300],
          tryIt: "Faça uma tabela de comparação com três linhas: certificado, nível, ferramentas principais, tempo, custo hoje (da página oficial). Faça um círculo à volta do que serve o seu objetivo e escreva uma frase a dizer porquê.",
          youCanNow: "comparar os certificados de dados da Google, da IBM e da Microsoft e escolher um que sirva o seu objetivo.",
          quickCheck: [
            { objective: "O2", q: "O que garante obter um certificado de dados?", options: ["Nada; mostra o que você aprendeu", "Uma oferta de emprego", "Um aumento", "Um curso universitário"], answer: 0, why: "Um certificado mostra habilidades; não garante um emprego." },
            { objective: "O2", q: "Um amigo diz que um certificado custa um certo valor por mês. O que faz antes de se inscrever?", options: ["Confia no seu amigo", "Pergunta o preço a uma IA", "Verifica hoje o custo na página oficial do programa", "Inscreve-se e descobre depois"], answer: 2, why: "Os custos mudam, por isso verifica a página oficial no momento em que se inscreve." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer um plano de estudo que vai cumprir",
          minutes: 5,
          goal: "Construir um plano de estudo semanal que encaixe no trabalho e na família.",
          text: [
            "A maioria das pessoas que não termina um certificado para porque a vida fica ocupada, não porque era difícil demais. Um plano escrito, com horários fixos, torna muito mais provável terminar.",
            "Comece pela sua semana real. Se trabalha por turnos, escolha horários de estudo que encaixem: por exemplo, três blocos de 45 minutos em dias de semana e um bloco de 2 horas no fim de semana. Estudar pouco e com regularidade é melhor do que uma longa sessão no fim de semana.",
            "Em cada semana, defina um pequeno objetivo que possa marcar como feito: \"terminar o módulo 2 e o seu questionário\". Tome notas com as suas palavras e faça todos os laboratórios práticos: é nos laboratórios que a habilidade se constrói. Um assistente de IA pode explicar uma ideia confusa com palavras mais simples ou fazer-lhe perguntas, mas faça você mesmo o trabalho avaliado e cumpra as regras de honestidade do programa."
          ],
          steps: ["Anote as suas horas fixas: trabalho, família, sono.", "Escolha 3 a 5 blocos de estudo por semana e ponha-os no seu calendário.", "Defina um objetivo semanal que possa marcar como feito.", "Peça a um amigo ou a um assistente de IA para lhe fazer perguntas sobre as suas notas.", "Reveja tudo todos os domingos e ajuste."],
          words: [["Bloco de estudo", "um horário fixo no seu calendário para aprender."], ["Laboratório", "um exercício prático em que treina uma habilidade com dados ou código reais."]],
          slides: [
            { title: "Porque é que os planos contam", bullets: ["As pessoas param quando a vida fica ocupada", "Um plano escrito com horários fixos ajuda a terminar"] },
            { title: "Ajuste à sua semana", bullets: ["3 a 5 blocos curtos são melhores do que uma sessão longa", "Exemplo: três blocos de 45 minutos em dias de semana", "Mais um bloco de 2 horas no fim de semana"] },
            { title: "Em cada semana", bullets: ["Um pequeno objetivo que possa marcar como feito", "Faça todos os laboratórios práticos", "A IA pode fazer-lhe perguntas; o trabalho avaliado é seu"] }
          ],
          tryIt: "Ponha quatro blocos de estudo para a próxima semana no calendário do telefone ou de papel. Escreva um objetivo semanal do certificado que escolheu, por exemplo \"terminar o primeiro módulo\".",
          youCanNow: "fazer um plano de estudo semanal com horários fixos e um objetivo que possa marcar como feito.",
          quickCheck: [
            { objective: "O3", q: "Onde se constrói a verdadeira habilidade num curso online?", options: ["A ver vídeos a dobrar a velocidade", "A ler os anúncios do curso", "A fazer os laboratórios práticos", "A saltar para o teste final"], answer: 2, why: "A prática nos laboratórios constrói a habilidade que os empregadores querem ver." },
            { objective: "O3", q: "Trabalha em turnos à noite. Que plano de estudo escreve?", options: ["Blocos de estudo fixos no calendário que encaixem nos turnos, com um objetivo semanal", "Estudar sempre que tiver um dia livre", "Estudar oito horas numa noite por mês", "Esperar até o horário mudar"], answer: 0, why: "Blocos regulares no calendário com um objetivo são o plano com mais hipóteses de funcionar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher o seu certificado e planear para terminar",
        questions: [
          { objective: "O1", q: "Que pergunta é mais parecida com o trabalho de um analista de dados?", options: ["Como reparo o motor de um carro?", "Que produto vendeu mais no mês passado?", "O que devo cozinhar esta noite?", "Quem vai ganhar o jogo?"], answer: 1, why: "Os analistas explicam o que aconteceu usando dados que já existem." },
          { objective: "O2", q: "Que certificado se obtém passando no Exame PL-300?", options: ["Google Data Analytics Professional Certificate", "IBM Data Science Professional Certificate", "Um diploma do ensino secundário", "Microsoft Certified: Power BI Data Analyst Associate"], answer: 3, why: "O Power BI Data Analyst Associate da Microsoft obtém-se passando no PL-300." },
          { objective: "O2", q: "O seu objetivo é construir modelos de previsão em Python. Os temas de que programa servem melhor?", options: ["IBM Data Science Professional Certificate", "Um curso de dactilografia", "Uma carta de condução de empilhadores", "Um cartão de manipulador de alimentos"], answer: 0, why: "O programa da IBM ensina Python, Scikit-learn e modelos de aprendizagem automática." },
          { objective: "O2", q: "No ano passado, um programa custava $49 por mês. O que faz agora?", options: ["Supõe que é igual", "Pergunta a um desconhecido na internet", "Verifica hoje a página oficial", "Não verifica"], answer: 2, why: "Os custos mudam; a página oficial tem o custo atual." },
          { objective: "O3", q: "Que plano de estudo tem mais hipóteses de funcionar para quem trabalha por turnos?", options: ["Estudar 10 horas uma vez por mês", "Estudar só quando lhe apetece", "Três blocos de 45 minutos em dias de semana e um bloco no fim de semana", "Saltar os laboratórios para poupar tempo"], answer: 2, why: "Blocos curtos e regulares no calendário são mais fáceis de cumprir." }
        ]
      }
    },
    {
      name: "Capítulo 2: Praticar as habilidades principais",
      lessons: [
        {
          objectives: ["O4"],
          title: "Limpar um conjunto de dados",
          minutes: 6,
          goal: "Encontrar e corrigir células vazias, duplicados e problemas de formato num pequeno conjunto de dados.",
          text: [
            "Os dados reais são desarrumados. Antes de analisar, você limpa-os. Todos os certificados acima dedicam tempo a isto, porque dados errados dão respostas erradas.",
            "Problemas comuns: células vazias, a mesma linha duas vezes (duplicados), a mesma coisa escrita de formas diferentes (\"CA\", \"Calif.\", \"California\"), números guardados como texto e datas em formatos misturados.",
            "No Google Sheets ou no Excel pode ordenar e filtrar para encontrar problemas, usar Remover duplicados, usar Localizar e substituir para igualar os nomes e mudar o formato de uma coluna para número ou data. Guarde uma cópia do original e anote cada mudança que fez, para que os outros possam confiar no seu trabalho."
          ],
          steps: ["Guarde uma cópia dos dados originais.", "Ordene e filtre cada coluna para ver células vazias e valores estranhos.", "Remova as linhas duplicadas.", "Iguale a escrita com Localizar e substituir.", "Defina os formatos de número e de data.", "Escreva um pequeno registo de cada mudança."],
          words: [["Limpeza de dados", "corrigir erros nos dados antes de os analisar."], ["Duplicado", "uma linha que aparece mais de uma vez."], ["Registo de limpeza", "uma lista de todas as mudanças que fez nos dados."]],
          slides: [
            { title: "Porquê limpar primeiro", bullets: ["Dados desarrumados dão respostas erradas", "Todos os certificados de dados ensinam isto"] },
            { title: "Problemas comuns", bullets: ["Células vazias e linhas duplicadas", "\"CA\", \"Calif.\", \"California\"", "Números como texto; datas em formatos misturados"] },
            { title: "Como corrigir", bullets: ["Ordene e filtre para encontrar problemas", "Remover duplicados; Localizar e substituir", "Defina os formatos de número e de data"] },
            { title: "Seja de confiança", bullets: ["Guarde a cópia original", "Escreva um registo de cada mudança"] }
          ],
          tryIt: "Faça uma pequena tabela de 15 vendas: Data, Artigo, Loja, Valor. Ponha 2 linhas duplicadas, um valor vazio e duas formas de escrever uma loja. Depois limpe-a e escreva o seu registo de limpeza.",
          youCanNow: "encontrar e corrigir problemas comuns nos dados e manter um registo de limpeza.",
          quickCheck: [
            { objective: "O4", q: "O que é um duplicado num conjunto de dados?", options: ["Uma célula vazia", "Uma linha que aparece mais de uma vez", "Um gráfico", "O título de uma coluna"], answer: 1, why: "Os duplicados contam a mesma coisa duas vezes e tornam os totais errados." },
            { objective: "O4", q: "Vai limpar uma tabela de vendas. O que faz primeiro?", options: ["Apaga as linhas que parecem estranhas", "Faz um gráfico", "Ordena só pela data", "Guarda uma cópia do original"], answer: 3, why: "Guardar o original permite verificar ou desfazer a limpeza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Resumir dados e fazer um gráfico claro",
          minutes: 5,
          goal: "Responder a uma pergunta com uma tabela de resumo e um gráfico.",
          text: [
            "Comece com uma pergunta clara, como \"Que loja vendeu mais no mês passado?\" Uma boa pergunta decide de que colunas precisa.",
            "Uma tabela de resumo agrupa os dados e soma os totais. No Sheets ou no Excel, uma tabela dinâmica faz isto: ponha Loja nas linhas e a soma de Valor nos valores. Em Python, a biblioteca Pandas faz o mesmo com groupby. Pode experimentar Python de graça no Google Colab, que é parecido com as ferramentas do programa da IBM.",
            "Depois escolha o gráfico que serve: um gráfico de barras para comparar grupos, um gráfico de linhas para mudanças ao longo do tempo, e evite gráficos circulares com muitas fatias. Dê-lhe um título que diga a resposta, como \"Eastside vendeu mais em março\", e ponha nomes nos eixos."
          ],
          steps: ["Escreva uma pergunta.", "Faça uma tabela dinâmica (ou um groupby do Pandas).", "Escolha o gráfico: barras para comparar, linhas para o tempo.", "Escreva um título que diga a resposta.", "Ponha nomes nos eixos."],
          words: [["Tabela dinâmica", "uma ferramenta da folha de cálculo que agrupa os dados e soma os totais."], ["Pandas", "uma biblioteca de Python para trabalhar com tabelas de dados."], ["Gráfico de barras", "um gráfico que compara grupos com barras de comprimentos diferentes."]],
          slides: [
            { title: "Comece com uma pergunta", bullets: ["\"Que loja vendeu mais no mês passado?\"", "A pergunta escolhe as suas colunas"] },
            { title: "Resumir", bullets: ["Folha de cálculo: tabela dinâmica", "Python: groupby do Pandas (experimente no Google Colab)", "Linhas: Loja. Valores: soma de Valor"] },
            { title: "Um gráfico claro", bullets: ["Barras para comparar, linhas para o tempo", "O título diz a resposta", "Ponha nomes nos eixos"] }
          ],
          sources: [COLAB],
          tryIt: "Use a tabela que limpou na Lição 4. Faça uma tabela dinâmica do Valor total por Loja e depois um gráfico de barras com um título que diga a resposta.",
          youCanNow: "transformar uma pergunta numa tabela de resumo e num gráfico claro.",
          quickCheck: [
            { objective: "O5", q: "O que faz uma tabela dinâmica?", options: ["Desenha um mapa", "Apaga duplicados", "Corrige a ortografia", "Agrupa os dados e soma os totais"], answer: 3, why: "Uma tabela dinâmica agrupa as linhas, por exemplo por loja, e soma os totais." },
            { objective: "O5", q: "Quer comparar as vendas totais de 5 lojas. Que gráfico faz?", options: ["Um gráfico de linhas", "Um gráfico de barras com um título que diga a resposta", "Um gráfico circular com 50 fatias", "Nenhum gráfico"], answer: 1, why: "Os gráficos de barras comparam categorias, e um título que diz a resposta torna tudo claro." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Contar a história e construir um projeto de portefólio",
          minutes: 5,
          goal: "Escrever uma conclusão curta e organizar o seu trabalho como projeto de portefólio.",
          text: [
            "Os empregadores querem ver que você sabe explicar os dados, não só fazer gráficos. Uma boa conclusão tem três frases: o que encontrou, porque é importante e um limite dos dados. Exemplo: \"Eastside fez 40% das vendas de março. Pode precisar de mais pessoal aos sábados. Os dados cobrem só um mês.\"",
            "A maioria destes certificados termina com um projeto final ou de portefólio. Pode começar um agora: um título, a pergunta, de onde vieram os dados, o seu registo de limpeza, o gráfico e a sua conclusão. Use dados públicos e gratuitos, como o site de dados abertos de uma cidade, ou a sua tabela de prática. Nunca use dados privados de clientes ou de uma empresa sem autorização.",
            "Um assistente de IA pode ajudar a ver se o seu texto está claro, mas confirme que cada número da sua conclusão vem da sua própria tabela."
          ],
          steps: ["Escreva a sua conclusão em três frases: resultado, porque é importante, um limite.", "Junte o título, a pergunta, a fonte dos dados, o registo de limpeza e o gráfico.", "Confira cada número com a sua tabela.", "Guarde tudo num só lugar que possa partilhar, como uma pasta do Google Drive ou o GitHub."],
          words: [["Projeto final (capstone)", "um projeto final no fim de um programa."], ["Portefólio", "um conjunto dos seus trabalhos que mostra aos empregadores."], ["Limite", "algo nos dados que faz com que a resposta possa não estar completa."]],
          slides: [
            { title: "Uma conclusão de três frases", bullets: ["O que encontrou", "Porque é importante", "Um limite dos dados"] },
            { title: "O seu projeto de portefólio", bullets: ["Título, pergunta e fonte dos dados", "Registo de limpeza, gráfico e conclusão", "Só dados públicos ou de prática"] },
            { title: "Antes de partilhar", bullets: ["Confira cada número com a sua tabela", "A IA pode ver a clareza, não os seus factos", "Guarde onde possa partilhar um link"] }
          ],
          tryIt: "Tarefa final: termine o seu pequeno projeto de portefólio. Pergunta, dados limpos, registo de limpeza, tabela de resumo, um gráfico e uma conclusão de três frases com um limite. Guarde-o com um título e uma descrição curta.",
          youCanNow: "terminar e explicar um pequeno projeto de dados do tipo que os certificados de dados pedem.",
          quickCheck: [
            { objective: "O6", q: "Porquê incluir um limite na sua conclusão?", options: ["Mostra honestidade sobre o que os dados podem e não podem dizer", "Torna a conclusão mais longa", "É obrigatório por lei", "Esconde erros"], answer: 0, why: "Dizer um limite, como cobrir só um mês, cria confiança no seu trabalho." },
            { objective: "O6", q: "Quer usar a lista de clientes do seu empregador no seu portefólio público. O que faz?", options: ["Publica-a como está", "Tira só os nomes", "Usa antes um conjunto de dados público ou de exemplo, a não ser que tenha autorização", "Publica-a e pergunta depois"], answer: 2, why: "Os dados privados de clientes não entram num portefólio público sem autorização." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Praticar as habilidades principais",
        questions: [
          { objective: "O4", q: "Os seus dados têm \"CA\", \"Calif.\" e \"California\". O que faz?", options: ["Iguala-os com Localizar e substituir", "Deixa como está", "Apaga a coluna", "Adivinha os totais"], answer: 0, why: "Igualar a escrita evita que um só lugar seja contado como três." },
          { objective: "O4", q: "Porquê manter um registo de limpeza?", options: ["Não serve para nada", "Para o ficheiro ficar maior", "Porque os gráficos precisam dele", "Para que os outros possam confiar nas suas mudanças e repeti-las"], answer: 3, why: "Um registo mostra exatamente o que mudou." },
          { objective: "O5", q: "Que ferramenta agrupa os dados e soma os totais numa folha de cálculo?", options: ["O corretor ortográfico", "Uma tabela dinâmica", "A pré-visualização de impressão", "Os comentários"], answer: 1, why: "As tabelas dinâmicas agrupam e resumem." },
          { objective: "O5", q: "Quer mostrar as vendas a mudar ao longo de 12 meses. Que gráfico?", options: ["Gráfico de linhas", "Gráfico circular", "Nenhum gráfico", "Uma fotografia"], answer: 0, why: "Os gráficos de linhas mostram mudanças ao longo do tempo." },
          { objective: "O6", q: "Qual é uma boa conclusão de três frases?", options: ["\"Aqui está um gráfico.\"", "\"Os dados são interessantes.\"", "\"Eastside vendeu mais em março. Pode precisar de mais pessoal ao sábado. Os dados cobrem um mês.\"", "\"Usei o Excel.\""], answer: 2, why: "Dá o resultado, porque é importante e um limite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para um Certificado Profissional em Ciência de Dados",
    questions: [
      { objective: "O1", q: "Qual é normalmente o primeiro passo do trabalho com dados?", options: ["Fazer um gráfico", "Fazer uma pergunta", "Comprar programas", "Partilhar os resultados"], answer: 1, why: "Uma pergunta clara guia tudo o que vem depois." },
      { objective: "O1", q: "Um cientista de dados, mais do que um analista, normalmente:", options: ["Só usa papel", "Só escreve dados", "Nunca usa dados", "Constrói modelos que preveem"], answer: 3, why: "Os cientistas de dados constroem modelos de previsão, muitas vezes em Python." },
      { objective: "O1", q: "Para que serve o SQL?", options: ["Desenhar imagens", "Editar vídeo", "Enviar e-mails", "Tirar dados de bases de dados"], answer: 3, why: "O SQL é uma linguagem para fazer perguntas a bases de dados." },
      { objective: "O2", q: "O Google Data Analytics Professional Certificate é oferecido:", options: ["Só no Microsoft Learn", "No Coursera", "No serviço de cartas de condução", "Numa loja de aplicações do telefone"], answer: 1, why: "A sua página oficial está no Coursera." },
      { objective: "O2", q: "Segundo a sua página, quantos cursos tem o IBM Data Science Professional Certificate?", options: ["3", "9", "12", "20"], answer: 2, why: "A página da IBM no Coursera indica uma série de 12 cursos." },
      { objective: "O2", q: "Em que ferramenta se centra a certificação da Microsoft?", options: ["Power BI", "Photoshop", "Word", "Tableau"], answer: 0, why: "É o Power BI Data Analyst Associate." },
      { objective: "O2", q: "O que garante obter um certificado de dados?", options: ["Um emprego", "Um aumento de salário", "Nada; mostra o que você aprendeu", "Um curso universitário"], answer: 2, why: "Os certificados mostram aprendizagem; não garantem resultados." },
      { objective: "O2", q: "Antes de se inscrever, deve verificar o custo:", options: ["Na página oficial do programa", "Num anúncio de uma rede social", "Nas notas do ano passado", "Na memória de uma IA"], answer: 0, why: "A página oficial tem o custo e o conteúdo atuais." },
      { objective: "O3", q: "Que plano é melhor para terminar um certificado?", options: ["Estudar quando houver tempo", "Blocos de estudo fixos no calendário com um objetivo semanal", "Saltar os laboratórios", "Estudar um dia por mês"], answer: 1, why: "Blocos regulares e marcados, com objetivos, ajudam a terminar." },
      { objective: "O3", q: "Ao usar um assistente de IA durante um certificado, você deve:", options: ["Pôr a IA a fazer o trabalho avaliado", "Nunca a usar, em nenhum caso", "Colar nela o seu exame", "Usá-la para explicar ideias e fazer-lhe perguntas, e cumprir as regras de honestidade"], answer: 3, why: "A IA pode ajudar a aprender, mas o trabalho avaliado tem de ser seu." },
      { objective: "O3", q: "Onde se constrói a verdadeira habilidade num curso online?", options: ["A fazer os laboratórios práticos", "Só a ver vídeos", "A ler o título", "A saltar os questionários"], answer: 0, why: "Os laboratórios são prática com as mãos." },
      { objective: "O4", q: "O que é um duplicado num conjunto de dados?", options: ["Uma célula vazia", "O nome de uma coluna", "Um gráfico", "Uma linha que aparece mais de uma vez"], answer: 3, why: "Os duplicados são linhas repetidas." },
      { objective: "O4", q: "Antes de limpar, deve:", options: ["Apagar o original", "Fazer um gráfico", "Guardar uma cópia do original", "Enviá-lo por e-mail a toda a gente"], answer: 2, why: "Uma cópia permite recomeçar ou verificar o seu trabalho." },
      { objective: "O4", q: "Números guardados como texto podem causar:", options: ["Trabalho mais rápido", "Totais errados", "Gráficos melhores", "Nada"], answer: 1, why: "Números em texto podem não somar bem." },
      { objective: "O4", q: "Em Python, que biblioteca trabalha com tabelas como uma folha de cálculo?", options: ["Outlook", "Paint", "Zoom", "Pandas"], answer: 3, why: "O Pandas serve para trabalhar com tabelas de dados." },
      { objective: "O5", q: "Que ferramenta gratuita permite correr Python num navegador de internet?", options: ["Uma calculadora", "Bloco de Notas", "Google Colab", "Paint"], answer: 2, why: "O Google Colab corre cadernos (notebooks) de Python online." },
      { objective: "O5", q: "Para comparar as vendas de 5 lojas, o melhor gráfico é normalmente:", options: ["Um gráfico de barras", "Um gráfico circular com 20 fatias", "Um mapa", "Nenhum gráfico"], answer: 0, why: "Os gráficos de barras comparam grupos com clareza." },
      { objective: "O5", q: "Um bom título de gráfico:", options: ["\"Gráfico 1\"", "Diz a resposta, como \"Eastside vendeu mais em março\"", "Fica em branco", "É muito longo"], answer: 1, why: "Um título que diz a resposta ajuda quem lê." },
      { objective: "O6", q: "Que dados NÃO deve usar num portefólio público?", options: ["Dados abertos de uma cidade", "Dados privados de clientes sem autorização", "A sua tabela de prática", "Conjuntos de dados públicos e gratuitos"], answer: 1, why: "Os dados privados precisam de autorização e não devem ser partilhados." },
      { objective: "O6", q: "A sua conclusão deve incluir um limite porque:", options: ["Mostra honestidade sobre o que os dados podem e não podem dizer", "Torna-a mais longa", "Os empregadores não gostam disso", "É obrigatório por lei"], answer: 0, why: "Dizer um limite mostra uma análise cuidadosa e de confiança." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 6, 8, 10, 11, 12, 16, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Pergunta clara", objective: "O1", notYet: "Não há pergunta, ou é uma a que os dados não podem responder.", meets: "Uma pergunta clara a que o conjunto de dados pode responder.", exceeds: "A pergunta é importante para um local de trabalho real e diz porquê." },
      { name: "Dados limpos e registo", objective: "O4", notYet: "Ainda há células vazias, duplicados ou problemas de formato, ou não há registo.", meets: "Células vazias, duplicados e formatos corrigidos, com um registo de limpeza e o original guardado.", exceeds: "O registo diz quantas linhas cada correção mudou." },
      { name: "Resumo e gráfico", objective: "O5", notYet: "Não há tabela de resumo, ou o gráfico não responde à pergunta.", meets: "Uma tabela de resumo e um gráfico do tipo certo com um título que diz a resposta.", exceeds: "Os eixos têm nomes e o gráfico lê-se com facilidade num relance." },
      { name: "Conclusão e limite", objective: "O6", notYet: "Não há conclusão, ou não diz nenhum limite.", meets: "Uma conclusão de três frases com um limite dos dados.", exceeds: "A conclusão sugere um próximo passo prático." },
      { name: "Pronto para o portefólio", objective: "O6", notYet: "Não foi guardado, ou tem dados privados.", meets: "Guardado no Google Sheets, no Excel ou no Google Colab com um título e uma descrição curtos, e sem dados privados.", exceeds: "Partilhado como um link que o aluno pode juntar a um currículo ou a um perfil." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem num certificado de dados em 30 dias (inquérito de seguimento)",
      "Alunos que terminam um certificado de dados em 6 meses",
      "Alunos que usam o seu projeto de portefólio numa candidatura de emprego ou conseguem um trabalho ligado a dados"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "Uma folha de cálculo gratuita (Google Sheets ou Microsoft Excel online) e, se quiser, o Google Colab",
      "Um conjunto de dados público e gratuito, ou a tabela de vendas de exemplo da Lição 4",
      "Um calendário no telefone ou em papel para o plano de estudo",
      "Cerca de 60 minutos para as lições e as verificações, mais tempo de prática para o projeto"
    ],
    facilitatorNotes: [
      "Prepare a tabela de vendas de exemplo com problemas colocados de propósito, para que todos os alunos pratiquem a limpeza com os mesmos dados.",
      "Peça aos alunos que verifiquem os custos dos certificados nas páginas oficiais, ao vivo na aula, em vez de usarem números antigos.",
      "Mostre uma tabela dinâmica e um gráfico passo a passo antes de os alunos fazerem os seus.",
      "Lembre aos alunos que usem só dados públicos ou de exemplo nos portefólios.",
      "Avalie o projeto de portefólio com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
