"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-data-technology.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const KMD = { name: "Departamento Meteorológico do Quénia (KMD): previsões e boletins agrometeorológicos", url: "https://meteo.go.ke" };
const NIMET = { name: "Agência Meteorológica da Nigéria (NiMet)", url: "https://nimet.gov.ng" };
const COPERNICUS = { name: "Copernicus Browser (imagens de satélite Sentinel gratuitas)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_EO = { name: "FAO GIEWS, observação da Terra (mapas de chuva, NDVI e stress agrícola)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const KALRO = { name: "Organização de Investigação Agrícola e Pecuária do Quénia (KALRO)", url: "https://www.kalro.org" };
const KOBO = { name: "KoboToolbox (formulários gratuitos de recolha de dados)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Gabinete do Comissário de Proteção de Dados (Quénia, ODPC)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Comissão de Proteção de Dados da Nigéria (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-data-technology-pt",
  lang: "pt",
  translationOf: "agri-data-technology",
  category: "Agriculture (Africa)",
  name: "Dados e Tecnologia Agrícolas",
  skills: "Encontrar e verificar informação agrícola de confiança, Recolher dados da machamba no telefone, Usar informação gratuita do tempo e de satélite, Analisar os registos da machamba numa folha de cálculo, Usar assistentes de IA com responsabilidade para perguntas agrícolas, Proteger os dados da sua machamba",
  outcome: "usar um smartphone barato para recolher os dados da sua machamba, juntar informação gratuita do tempo e de satélite, analisá-los numa folha de cálculo para tomar uma decisão melhor, verificar os conselhos de aplicações e ferramentas de IA em fontes de confiança e manter os seus dados seguros.",
  about: [
    "Este curso é para agricultores, jovens empreendedores agrícolas, líderes de grupos de agricultores e de cooperativas, e extensionistas no Quénia, na Nigéria e em toda a África que têm um smartphone (mesmo barato) e querem usá-lo para cultivar melhor. Não precisa de computador, mas um computador ajuda no Capítulo 2.",
    "O Capítulo 1 trata de recolher informação: encontrar conselhos agrícolas de confiança e evitar burlas, registar os dados da sua própria machamba no telefone e usar previsões do tempo e mapas de satélite gratuitos. O Capítulo 2 trata de usar a informação: analisar os seus registos numa folha de cálculo gratuita, fazer boas perguntas agrícolas a assistentes de IA e verificar as respostas, e proteger os seus dados.",
    "Usamos ferramentas gratuitas em todo o curso: Google Sheets ou a versão web gratuita do Microsoft Excel, ferramentas gratuitas de formulários, serviços nacionais de meteorologia, os mapas de observação da Terra da FAO e assistentes de IA gratuitos. Cada lição termina com uma tarefa. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Prepare uma folha de dados da machamba para uma época (talhões, culturas, variedades, datas de sementeira, insumos e custos, notas de chuva ou de previsão, notas de inspeção, colheita e vendas), preencha-a com dados reais ou de exemplo para pelo menos três talhões, faça um gráfico que compare os talhões, escreva uma decisão que vai tomar para a próxima época por causa disso e anote que fontes verificou e como mantém os dados seguros.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Agricultores, jovens empreendedores agrícolas, líderes de grupos de agricultores e de cooperativas, e extensionistas no Quénia, na Nigéria e em toda a África que têm um smartphone, mesmo barato, e querem usá-lo para cultivar melhor.",
    startingPoint: "A maioria usa o telefone para chamadas, dinheiro móvel, WhatsApp e Facebook, e recebe conselhos agrícolas de vizinhos, lojas de insumos agrícolas, rádio e grupos nas redes sociais. Poucos mantêm registos escritos da machamba, usam uma folha de cálculo, leem previsões oficiais ou mapas de satélite, ou verificam os conselhos da IA e das aplicações numa fonte de confiança.",
    gap: "Sem os seus próprios registos, os agricultores não conseguem ver que talhão, variedade ou prática dá mesmo lucro, e os conselhos errados, os insumos falsos e as burlas com dados custam-lhes dinheiro. Registar, analisar e verificar informação num telefone que já têm ajuda-os a tomar melhores decisões, a mostrar o seu historial a quem empresta dinheiro e a compradores, e a manter os seus dados seguros.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo de tecnologia é explicado",
      "Aparelhos: um smartphone barato com poucos dados móveis; um computador só ajuda no Capítulo 2",
      "Rede: cobertura fraca nas zonas rurais, por isso os formulários offline e as folhas guardadas são importantes",
      "Tempo: lições curtas que cabem no meio do trabalho na machamba",
      "Privacidade e burlas: nunca escrever PIN, números de identificação ou dados bancários em aplicações, folhas ou ferramentas de IA"
    ],
    prerequisites: "Nenhum. Quem é novo no smartphone deve primeiro saber abrir uma aplicação e escrever uma mensagem."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um conselho agrícola vindo de uma mensagem, uma aplicação ou um vizinho", action: "verificar quem o dá, se serve para a sua zona e cultura, se é recente e se a pessoa está a vender alguma coisa", standard: "antes de gastar dinheiro, e reconhecendo qualquer sinal de burla" },
    { id: "O2", condition: "Usando uma folha de cálculo ou uma aplicação de formulários gratuita no telefone", action: "preparar uma folha de dados da machamba com uma linha por acontecimento e um nome fixo para cada talhão", standard: "com pelo menos as colunas data, talhão, atividade, quantidade e custo" },
    { id: "O3", condition: "Para a sua zona e época", action: "encontrar a previsão oficial do tempo e um mapa gratuito de satélite ou de chuva e registar o que mostram na sua folha da machamba", standard: "com a fonte e a data" },
    { id: "O4", condition: "Com registos de pelo menos três talhões", action: "calcular o rendimento e o lucro por acre com fórmulas, fazer um gráfico de barras e escrever uma decisão para a próxima época", standard: "com somas certas e a decisão ligada aos números" },
    { id: "O5", condition: "Usando um assistente de IA gratuito", action: "escrever uma pergunta agrícola clara e verificar a resposta com a extensão, uma loja de insumos agrícolas ou o rótulo", standard: "antes de agir, e sem escrever informações privadas" },
    { id: "O6", condition: "Quando uma aplicação, um comprador ou um grupo pede dados da machamba", action: "decidir o que partilhar, com quem e porquê, e proteger o resto", standard: "respeitando os direitos de proteção de dados do seu país e pedindo o consentimento dos outros" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Recolher boa informação",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar informação agrícola de confiança",
          minutes: 5,
          goal: "Avaliar se um conselho agrícola é de confiança antes de agir.",
          text: [
            "Os agricultores recebem conselhos de muitos lugares: extensionistas, institutos de investigação como o KALRO no Quénia, programas de desenvolvimento agrícola dos estados da Nigéria, a FAO (a agência da ONU para a alimentação e a agricultura) e os centros do CGIAR, lojas de insumos agrícolas, programas de rádio e televisão, serviços de SMS e aplicações, grupos de WhatsApp e Facebook, e vizinhos. Alguns são excelentes; outros estão errados, desatualizados ou querem vender-lhe alguma coisa.",
            "Faça quatro perguntas sobre qualquer conselho: Quem o dá, e essa pessoa sabe do assunto (um instituto de investigação ou um técnico formado, ou uma conta desconhecida)? É para a minha zona e a minha cultura? É recente? Estão a vender alguma coisa? Verifique os conselhos importantes numa segunda fonte de confiança antes de gastar dinheiro.",
            "Cuidado com as burlas: sementes e adubos falsos, produtos \"milagrosos\", empregos ou subsídios falsos que pedem uma taxa, e mensagens que fingem ser de um programa do governo e pedem o PIN do seu dinheiro móvel. Compre insumos a vendedores registados e denuncie os produtos falsos à autoridade certa."
          ],
          steps: ["Pergunte: quem o diz, e essa pessoa sabe do assunto?", "Pergunte: é para a minha zona e cultura, e é recente?", "Pergunte: estão a vender alguma coisa?", "Verifique numa segunda fonte de confiança antes de gastar dinheiro.", "Compre insumos a vendedores registados; nunca partilhe o seu PIN."],
          words: [["Extensionista", "um conselheiro formado, do governo ou de um projeto, que ajuda os agricultores."], ["Instituto de investigação", "uma organização que testa e desenvolve métodos de cultivo e variedades, como o KALRO."], ["Burla", "um truque para ficar com o seu dinheiro ou as suas informações."]],
          slides: [
            { title: "Muitas fontes", bullets: ["Extensão, institutos de investigação, FAO, CGIAR", "Lojas de insumos, rádio, SMS e aplicações", "Grupos nas redes sociais e vizinhos"] },
            { title: "Quatro perguntas", bullets: ["Quem o diz, e sabe do assunto?", "É para a minha zona e cultura?", "É recente?", "Estão a vender alguma coisa?"] },
            { title: "Cuidado com as burlas", bullets: ["Sementes e adubos falsos, produtos milagrosos", "Subsídios ou empregos que pedem uma taxa", "Nunca partilhe o seu PIN"] }
          ],
          sources: [KALRO],
          tryIt: "Encontre um conselho agrícola que viu há pouco tempo (na rádio, no WhatsApp ou de um vendedor). Responda às quatro perguntas sobre ele e verifique-o numa segunda fonte de confiança. Escreva se vai segui-lo ou não.",
          youCanNow: "avaliar se um conselho agrícola é de confiança e reconhecer as burlas mais comuns.",
          quickCheck: [
            { objective: "O1", q: "Que pergunta ajuda a avaliar um conselho agrícola?", options: ["Quantas pessoas gostaram da publicação?", "É para a minha zona e cultura, e é recente?", "A mensagem é comprida?", "Usa muitas imagens?"], answer: 1, why: "Verificar quem o diz, se serve para a sua zona e cultura e se é recente mostra se o conselho é de confiança." },
            { objective: "O1", q: "Uma mensagem diz que ganhou um subsídio agrícola e pede o PIN do seu dinheiro móvel. O que faz?", options: ["Envia o PIN depressa", "Paga primeiro uma pequena taxa", "Trata-a como uma burla e não partilha o PIN", "Reencaminha-a para o seu grupo para se candidatarem"], answer: 2, why: "Os programas verdadeiros nunca pedem o seu PIN nem uma taxa para libertar um subsídio." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Registar os dados da sua machamba no telefone",
          minutes: 6,
          goal: "Montar um sistema simples no telefone para registar talhões, insumos, inspeções e colheita.",
          text: [
            "Os seus próprios registos são os dados mais valiosos que tem, porque falam da sua machamba. Uma aplicação de folha de cálculo (Google Sheets ou Microsoft Excel, ambas gratuitas no telefone) funciona bem: uma linha por acontecimento, com colunas como data, talhão, cultura, atividade, quantidade, custo e notas.",
            "Dê a cada talhão um nome curto ou um número e mantenha-o sempre igual. Registe um ponto GPS ou um limite aproximado de cada talhão (muitas aplicações de mapas deixam marcar um ponto e partilhar as suas coordenadas). Tire fotografias dos problemas e dê-lhes um nome com a data e o talhão. Para grupos e cooperativas, ferramentas gratuitas de formulários como o KoboToolbox deixam muitos membros preencher o mesmo formulário no telefone, mesmo offline, e enviá-lo quando tiverem rede.",
            "Mantenha tudo simples o suficiente para fazer sempre. Cinco colunas preenchidas todas as semanas valem mais do que vinte colunas preenchidas uma vez. Faça uma cópia de segurança da folha (a maioria das folhas de cálculo na nuvem guarda sozinha) e não ponha nela números privados como o PIN ou números de identificação."
          ],
          steps: ["Abra uma aplicação de folha de cálculo gratuita e faça as colunas: data, talhão, cultura, atividade, quantidade, custo, notas.", "Dê um nome a cada talhão e registe um ponto GPS para ele.", "Acrescente uma linha cada vez que semeia, aplica insumos, inspeciona, colhe ou vende.", "Dê às fotografias um nome com a data e o talhão.", "Para grupos: pense num formulário partilhado que funcione offline."],
          words: [["Folha de cálculo", "uma tabela de linhas e colunas no telefone ou no computador para registar e calcular."], ["Ponto GPS", "um ponto guardado num mapa com as suas coordenadas."], ["Offline", "a funcionar sem ligação à internet."]],
          slides: [
            { title: "Os seus dados valem ouro", bullets: ["Falam da SUA machamba", "Uma linha por acontecimento"] },
            { title: "Colunas para começar", bullets: ["Data, talhão, cultura, atividade", "Quantidade, custo, notas"] },
            { title: "Bons hábitos", bullets: ["Sempre os mesmos nomes de talhões", "Um ponto GPS por talhão, fotografias com data", "Simples o suficiente para fazer todas as semanas"] },
            { title: "Grupos e segurança", bullets: ["Formulários offline partilhados, por exemplo o KoboToolbox", "Cópia de segurança; nada de PIN nem números de identificação"] }
          ],
          sources: [KOBO],
          tryIt: "Crie a sua folha da machamba no telefone com as sete colunas. Acrescente os seus talhões e pelo menos cinco linhas de atividades reais desta época. Marque um ponto GPS de um talhão e guarde as coordenadas nas notas.",
          youCanNow: "registar no telefone as atividades, os insumos e a colheita da sua machamba de forma sempre igual.",
          quickCheck: [
            { objective: "O2", q: "Numa folha de dados da machamba, o que é uma linha?", options: ["Um acontecimento, como uma sementeira ou uma venda", "Uma época inteira", "Uma cultura para todos os anos", "Um número de telefone"], answer: 0, why: "Uma linha por acontecimento, com data, talhão, atividade, quantidade e custo, torna os registos fáceis de somar." },
            { objective: "O2", q: "O seu grupo de agricultores quer que os membros enviem relatórios de inspeção de zonas com pouca rede. O que pode usar?", options: ["Uma chamada longa todas as semanas", "Notas em papel que ficam em casa", "Uma aplicação diferente para cada membro", "Uma ferramenta de formulários partilhada como o KoboToolbox, que funciona offline"], answer: 3, why: "Ferramentas de formulários como o KoboToolbox deixam muitos membros preencher o mesmo formulário offline e enviá-lo quando têm rede." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar informação gratuita do tempo e de satélite",
          minutes: 6,
          goal: "Usar previsões oficiais e mapas de satélite gratuitos para apoiar as decisões na machamba.",
          text: [
            "Os serviços nacionais de meteorologia publicam previsões para os agricultores: no Quénia, o Departamento Meteorológico do Quénia (KMD) publica previsões sazonais e boletins agrometeorológicos; na Nigéria, a NiMet publica previsões climáticas sazonais e previsões do tempo. Anote na sua folha da machamba o que dizem para a sua zona, com a data, para depois ver se acertaram na sua época.",
            "A informação gratuita de satélite também ajuda. As páginas de observação da Terra da FAO mostram mapas de chuva, de vegetação (NDVI) e de stress agrícola para países e regiões, úteis para ver se um período seco é só local ou é geral. O Copernicus Browser mostra imagens gratuitas do satélite Sentinel-2 de poucos em poucos dias, com cerca de 10 metros por pixel: chega para ver a forma dos campos e se um campo grande está mais verde ou mais castanho do que no mês passado.",
            "Se puder, meça você mesmo a chuva com um pluviómetro simples e registe-a todos os dias. O seu próprio registo de chuva, ao lado das datas de sementeira e dos rendimentos, mostra depressa o que funciona na sua machamba."
          ],
          steps: ["Encontre a previsão do serviço nacional de meteorologia para a sua zona.", "Escreva-a na sua folha da machamba com a data.", "Veja os mapas de observação da Terra da FAO para o seu país.", "Encontre a sua machamba no Copernicus Browser e compare duas datas.", "Se puder, registe a chuva todos os dias com um pluviómetro simples."],
          words: [["Boletim agrometeorológico", "um relatório do tempo escrito para os agricultores."], ["Imagem de satélite", "uma fotografia da Terra tirada do espaço."], ["Pluviómetro", "um recipiente simples com uma escala que mede a chuva."]],
          slides: [
            { title: "Previsões oficiais", bullets: ["Quénia: previsões sazonais e boletins agromet do KMD", "Nigéria: NiMet", "Escreva-as na sua folha com a data"] },
            { title: "Informação gratuita de satélite", bullets: ["FAO: mapas de chuva, NDVI e stress", "Copernicus Browser: Sentinel-2, cerca de 10 m", "O período seco é local ou geral?"] },
            { title: "O seu próprio pluviómetro", bullets: ["Registe a chuva todos os dias", "Compare com as datas de sementeira e os rendimentos"] }
          ],
          sources: [KMD, NIMET, FAO_EO, COPERNICUS],
          tryIt: "Encontre a previsão desta época para a sua zona e escreva-a na sua folha da machamba. Depois encontre a sua zona nos mapas de observação da Terra da FAO ou no Copernicus Browser e escreva uma coisa que repara.",
          youCanNow: "usar previsões oficiais e mapas de satélite gratuitos junto com os registos da sua machamba.",
          quickCheck: [
            { objective: "O3", q: "De onde vêm as previsões sazonais oficiais para os agricultores na Nigéria?", options: ["De uma página de Facebook", "De uma empresa de sementes", "De um vizinho", "Da NiMet"], answer: 3, why: "A NiMet publica as previsões climáticas sazonais e as previsões do tempo da Nigéria." },
            { objective: "O3", q: "Quer saber se um período seco é só na sua machamba ou em toda a região. O que consulta?", options: ["O nível da bateria do telefone", "Os mapas de chuva e de vegetação de observação da Terra da FAO", "Um anúncio na rádio", "O pacote de sementes do ano passado"], answer: 1, why: "Os mapas de observação da Terra da FAO mostram a chuva, a vegetação e o stress em países e regiões." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Recolher boa informação",
        questions: [
          { objective: "O1", q: "Uma mensagem de WhatsApp anuncia um \"adubo milagroso\" de um vendedor desconhecido. Você deve:", options: ["Comprá-lo depressa antes que acabe", "Verificar numa fonte de confiança, como a extensão, antes de gastar", "Reencaminhá-la para toda a gente", "Enviar o seu PIN para encomendar"], answer: 1, why: "Vendedores desconhecidos e promessas milagrosas são sinais de alerta." },
          { objective: "O2", q: "Que coluna é útil numa folha de dados da machamba?", options: ["O PIN do seu dinheiro móvel", "O seu número de identificação", "Data, talhão e atividade", "A sua palavra-passe"], answer: 2, why: "Os registos precisam de acontecimentos, não de números privados." },
          { objective: "O2", q: "Porque dar a cada talhão um nome fixo?", options: ["Para poder comparar os registos ao longo do tempo", "Fica bonito", "O telefone exige", "Não serve para nada"], answer: 0, why: "Nomes sempre iguais deixam somar e comparar os talhões." },
          { objective: "O3", q: "O que mostram as imagens gratuitas do Sentinel-2 no Copernicus Browser?", options: ["Insetos um a um", "O seu saldo bancário", "O tempo do próximo ano", "Campos com cerca de 10 metros por pixel, de poucos em poucos dias"], answer: 3, why: "São gratuitas, frequentes e com pouco pormenor." },
          { objective: "O3", q: "Porque registar a previsão na sua folha da machamba com a data?", options: ["Para a comparar depois com o que aconteceu de verdade na sua machamba", "O serviço de meteorologia exige", "Para partilhar com compradores", "Para encher espaço"], answer: 0, why: "Ao longo das épocas, aprende como as previsões se ajustam à sua machamba." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a informação para decidir",
      lessons: [
        {
          objectives: ["O4"],
          title: "Analisar os seus registos numa folha de cálculo",
          minutes: 6,
          goal: "Calcular o rendimento e o lucro por talhão e fazer um gráfico para os comparar.",
          text: [
            "Os registos tornam-se úteis quando os soma. Na sua folha de cálculo, faça uma tabela de resumo: uma linha por talhão com o tamanho, o custo total, a colheita, a receita e depois o rendimento por acre e o lucro por acre. As folhas de cálculo fazem as contas com fórmulas simples, por exemplo =SUM para somar os custos e uma divisão para obter o rendimento por acre.",
            "Depois faça um gráfico. Selecione os nomes dos talhões e o rendimento por acre (ou o lucro por acre) e insira um gráfico de barras. Um gráfico torna as diferenças fáceis de ver e de explicar à família, a um grupo ou a quem empresta dinheiro.",
            "Procure as razões: o melhor talhão recebeu estrume, foi semeado mais cedo, tinha outra variedade ou teve mais chuva? O talhão mais fraco teve pragas ou encharcamento? Escreva uma decisão para a próxima época e continue a registar para a poder testar."
          ],
          steps: ["Faça uma tabela de resumo: talhão, tamanho, custo total, colheita, receita.", "Use =SUM para os totais e divida para obter o rendimento e o lucro por acre.", "Selecione os nomes dos talhões e o rendimento por acre; insira um gráfico de barras.", "Procure as razões nas suas notas.", "Escreva uma decisão para a próxima época."],
          words: [["Fórmula", "uma instrução numa célula da folha de cálculo que faz uma conta, como =SUM(B2:B10)."], ["Rendimento por acre", "quanto um talhão produziu, dividido pelo seu tamanho."], ["Gráfico de barras", "um gráfico com barras que comparam quantidades."]],
          slides: [
            { title: "Some tudo", bullets: ["Uma linha por talhão", "Tamanho, custo, colheita, receita", "Rendimento e lucro por acre"] },
            { title: "Deixe a folha fazer as contas", bullets: ["=SUM para os totais", "Divida para os valores por acre"] },
            { title: "Faça um gráfico", bullets: ["Nomes dos talhões + rendimento por acre", "Insira um gráfico de barras", "Fácil de explicar aos outros"] },
            { title: "Encontre as razões, decida", bullets: ["Estrume, data, variedade, chuva, pragas?", "Uma decisão para a próxima época"] }
          ],
          tryIt: "Faça a tabela de resumo para pelo menos três talhões (números reais ou de exemplo), calcule o rendimento e o lucro por acre com fórmulas, insira um gráfico de barras e escreva uma decisão para a próxima época.",
          youCanNow: "analisar os registos da machamba numa folha de cálculo e usar um gráfico para comparar os talhões e decidir.",
          quickCheck: [
            { objective: "O4", q: "O que é o lucro por acre?", options: ["Só a colheita total", "Só o custo total", "A receita menos o custo, dividido pelo tamanho do talhão em acres", "O preço por saco"], answer: 2, why: "O lucro por acre tira o custo à receita e divide pelo tamanho do talhão, para comparar talhões de tamanhos diferentes." },
            { objective: "O4", q: "A sua tabela de resumo mostra que um talhão deu muito mais milho. O que faz a seguir?", options: ["Procura as razões, como o estrume ou a data de sementeira, e escreve uma decisão", "Apaga os outros talhões da folha", "Deixa de registar", "Semeia só esse talhão para sempre sem verificar"], answer: 0, why: "Encontrar as razões e escrever uma decisão que pode testar na próxima época transforma os registos numa agricultura melhor." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usar assistentes de IA para perguntas agrícolas, com responsabilidade",
          minutes: 5,
          goal: "Fazer uma pergunta agrícola clara a um assistente de IA e verificar a resposta antes de agir.",
          text: [
            "Assistentes de IA gratuitos como o ChatGPT, o Microsoft Copilot e o Google Gemini podem explicar ideias de agricultura, ajudar a planear uma época, escrever o rascunho de uma mensagem para um comprador, traduzir ou ajudar a fazer uma fórmula da folha de cálculo. Pergunte com clareza: diga a sua cultura, a zona, a época, o tamanho da machamba e o que quer, por exemplo: \"Cultivo 2 acres de milho em Bungoma. As chuvas curtas começam em outubro. Faça-me uma lista semanal simples, da preparação da terra até à colheita. Use frases curtas.\"",
            "A IA pode estar errada, desatualizada ou dar conselhos para outro país. Pode indicar produtos que não estão registados no seu país ou doses erradas. Nunca siga conselhos da IA sobre pesticidas, doses de adubo, medicamentos para animais ou dinheiro sem verificar com o seu extensionista, a loja de insumos agrícolas, o rótulo do produto ou outra fonte de confiança.",
            "Não escreva informações privadas num assistente de IA: o seu número de identificação, o PIN do dinheiro móvel, dados bancários ou dados pessoais de outras pessoas. Use a IA como um ponto de partida útil, não como a última palavra."
          ],
          steps: ["Diga a sua cultura, zona, época, tamanho da machamba e o que quer.", "Peça frases curtas ou uma lista de verificação.", "Faça perguntas de seguimento para melhorar a resposta.", "Verifique conselhos sobre pesticidas, adubos, medicamentos e dinheiro numa fonte de confiança.", "Nunca escreva o PIN, números de identificação ou dados bancários."],
          words: [["Assistente de IA", "um programa de computador com quem conversa com palavras do dia a dia e que escreve respostas."], ["Pedido (prompt)", "o que você escreve ou diz a um assistente de IA."]],
          slides: [
            { title: "Em que a IA pode ajudar", bullets: ["Explicar ideias, planear uma época", "Escrever rascunhos de mensagens, traduzir", "Fazer fórmulas da folha de cálculo"] },
            { title: "Pergunte com clareza", bullets: ["Cultura, zona, época, tamanho da machamba", "O que quer e como", "Frases curtas, lista de verificação"] },
            { title: "Verifique antes de agir", bullets: ["Pesticidas, doses, medicamentos, dinheiro", "Extensão, loja de insumos, rótulo", "A IA pode errar ou falar de outro país"] },
            { title: "Deixe os dados privados de fora", bullets: ["Nada de PIN, identificação ou números bancários", "Nada de dados de outras pessoas"] }
          ],
          tryIt: "Peça a um assistente de IA gratuito uma lista semanal para a sua cultura principal nesta época, usando o modelo de pedido desta lição. Marque cada ponto que precisa de ser verificado numa fonte de confiança e verifique um deles.",
          youCanNow: "fazer uma pergunta agrícola clara a um assistente de IA e verificar a resposta antes de agir.",
          quickCheck: [
            { objective: "O5", q: "Qual é uma pergunta agrícola clara para um assistente de IA?", options: ["\"Cultivo 1 acre de feijão em Kakamega. As chuvas longas começam em março. Dê-me uma lista curta para a sementeira.\"", "\"agricultura\"", "\"Diga-me tudo sobre culturas.\"", "\"feijão?\""], answer: 0, why: "Dá a cultura, a zona, a época, o tamanho da machamba e o que quer." },
            { objective: "O5", q: "Um assistente de IA dá-lhe uma dose de adubo para a sua cultura. O que faz?", options: ["Usa-a hoje", "Duplica-a por segurança", "Verifica-a com o extensionista, a loja de insumos ou o rótulo", "Publica-a no seu grupo como facto"], answer: 2, why: "A IA pode dar doses erradas ou conselhos para outro país, por isso as doses têm de ser verificadas primeiro." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger e partilhar os dados da sua machamba",
          minutes: 5,
          goal: "Decidir que dados da machamba partilhar, com quem, e manter o resto seguro.",
          text: [
            "Os dados da sua machamba têm valor: compradores, quem empresta dinheiro, seguradoras, empresas de insumos e aplicações podem querê-los. Partilhar pode ajudar a obter um empréstimo, um seguro ou um contrato, mas deve saber o que partilha, porquê e com quem. Leia o que uma aplicação ou um programa diz que vai fazer com os seus dados e diga não se não se sentir à vontade.",
            "As leis de proteção de dados dão-lhe direitos sobre os seus dados pessoais. No Quénia, a Lei de Proteção de Dados de 2019 é supervisionada pelo Gabinete do Comissário de Proteção de Dados (ODPC); na Nigéria, a Lei de Proteção de Dados da Nigéria de 2023 é supervisionada pela Comissão de Proteção de Dados da Nigéria (NDPC). Se recolhe dados de outros agricultores, por exemplo como líder de grupo, também tem de respeitar os direitos deles: peça o consentimento e guarde os dados em segurança.",
            "Mantenha o telefone e as folhas seguros: bloqueio do ecrã, uma palavra-passe forte nas suas contas, cópias de segurança e cuidado com telefones partilhados. Partilhe resumos (como o rendimento por acre) em vez de tudo, quando isso chegar."
          ],
          steps: ["Antes de partilhar, pergunte: o quê, porquê, com quem, e o que ganho com isso?", "Leia as condições de dados da aplicação ou do programa.", "Peça o consentimento dos outros agricultores antes de recolher os dados deles.", "Bloqueie o telefone; use palavras-passe fortes; faça cópias de segurança.", "Partilhe resumos em vez de todos os detalhes, quando possível."],
          words: [["Dados pessoais", "informação sobre uma pessoa que pode ser identificada."], ["Consentimento", "um sim claro depois de perceber o que vai acontecer com os dados."], ["Lei de proteção de dados", "uma lei que controla como os dados pessoais podem ser recolhidos e usados."]],
          slides: [
            { title: "Os seus dados têm valor", bullets: ["Compradores, credores, seguradoras e aplicações querem-nos", "Partilhar pode ajudar: empréstimos, seguros, contratos", "Saiba o quê, porquê e com quem"] },
            { title: "Os seus direitos", bullets: ["Quénia: Lei de Proteção de Dados de 2019, ODPC", "Nigéria: Lei de Proteção de Dados de 2023, NDPC", "Respeite também os dados dos outros agricultores"] },
            { title: "Mantenha-os seguros", bullets: ["Bloqueio do ecrã, palavras-passe fortes, cópias de segurança", "Cuidado com telefones partilhados", "Partilhe resumos quando chegar"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Tarefa final: complete a sua folha de dados da machamba da época para pelo menos três talhões, faça um gráfico de comparação, escreva uma decisão para a próxima época, faça a lista das fontes que verificou e escreva três passos que segue para manter os dados seguros.",
          youCanNow: "recolher, analisar, partilhar e proteger os dados da sua machamba para tomar melhores decisões.",
          quickCheck: [
            { objective: "O6", q: "Que entidade supervisiona a proteção de dados no Quénia?", options: ["O Departamento Meteorológico do Quénia", "O Gabinete do Comissário de Proteção de Dados (ODPC)", "O KALRO", "A sua rede móvel"], answer: 1, why: "A Lei de Proteção de Dados de 2019 do Quénia é supervisionada pelo ODPC." },
            { objective: "O6", q: "Quem lhe vai emprestar dinheiro quer ver como corre a sua machamba. O que partilha?", options: ["A palavra-passe do telefone", "O PIN do seu dinheiro móvel", "Todos os dados pessoais dos membros", "Um resumo como o rendimento por acre, depois de ler como o vão usar"], answer: 3, why: "Muitas vezes um resumo chega, e deve saber o que partilha, porquê e com quem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a informação para decidir",
        questions: [
          { objective: "O4", q: "Que fórmula da folha de cálculo soma uma coluna de custos?", options: ["=SUM", "=PIN", "=PHOTO", "=RAIN"], answer: 0, why: "=SUM soma um intervalo de células." },
          { objective: "O4", q: "O talhão A deu 900 kg em meio acre. O seu rendimento por acre é:", options: ["90 kg", "450 kg", "900 kg", "1,800 kg"], answer: 3, why: "900 a dividir por 0.5 acres dá 1,800 kg por acre." },
          { objective: "O5", q: "Um assistente de IA sugere um pesticida e uma dose. Você deve:", options: ["Pulverizar logo", "Duplicar a dose por segurança", "Partilhar o seu PIN com ele", "Verificar o registo e a dose com a extensão, uma loja de insumos ou o rótulo"], answer: 3, why: "A IA pode indicar produtos e doses errados ou não registados." },
          { objective: "O5", q: "O que NÃO é seguro escrever num assistente de IA?", options: ["A sua cultura e a zona", "O PIN do seu dinheiro móvel", "As datas da sua época", "O tamanho da sua machamba"], answer: 1, why: "O PIN e os números de identificação têm de ficar privados." },
          { objective: "O6", q: "Como líder de grupo que recolhe os dados agrícolas dos membros, você deve:", options: ["Pedir o consentimento e guardá-los em segurança", "Vendê-los a compradores", "Publicá-los na internet", "Recolher o máximo possível"], answer: 0, why: "As leis de proteção de dados protegem os dados pessoais das outras pessoas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Dados e Tecnologia Agrícolas",
    questions: [
      { objective: "O1", q: "Qual é normalmente uma fonte de confiança para conselhos agrícolas?", options: ["Uma conta desconhecida que vende produtos milagrosos", "Um instituto de investigação como o KALRO ou um extensionista formado", "Uma mensagem em cadeia", "Um anúncio que aparece no ecrã"], answer: 1, why: "As fontes formadas e responsáveis são mais fiáveis." },
      { objective: "O1", q: "Antes de gastar dinheiro com um conselho novo, você deve:", options: ["Agir logo", "Perguntar a um desconhecido", "Verificar numa segunda fonte de confiança", "Ignorar todos os conselhos"], answer: 2, why: "Uma segunda fonte apanha erros e burlas." },
      { objective: "O1", q: "Uma mensagem diz que um subsídio do governo precisa de uma taxa e do seu PIN. É:", options: ["Provavelmente uma burla", "Normal", "Obrigatório por lei", "Um empréstimo"], answer: 0, why: "Os programas verdadeiros não pedem o seu PIN." },
      { objective: "O2", q: "Os seus dados agrícolas mais valiosos são normalmente:", options: ["Dados sobre outros países", "Publicidade", "Notícias de famosos", "Os registos da sua própria machamba"], answer: 3, why: "Falam dos seus próprios talhões, insumos e resultados." },
      { objective: "O2", q: "Uma boa folha da machamba tem:", options: ["Uma só coluna", "Uma linha por acontecimento com data, talhão, atividade, quantidade, custo, notas", "Só fotografias", "Palavras-passe"], answer: 1, why: "Linhas e colunas sempre iguais permitem analisar." },
      { objective: "O2", q: "Um ponto GPS regista:", options: ["A chuva", "O preço da cultura", "As coordenadas de um lugar", "O pH do solo"], answer: 2, why: "Os pontos guardam uma localização num mapa." },
      { objective: "O2", q: "O KoboToolbox ajuda os grupos a:", options: ["Preencher o mesmo formulário no telefone, mesmo offline", "Pilotar drones", "Pagar empréstimos", "Fazer crescer sementes"], answer: 0, why: "Os formulários offline partilhados facilitam a recolha de dados em grupo." },
      { objective: "O2", q: "Cinco colunas preenchidas todas as semanas:", options: ["São piores do que vinte preenchidas uma vez", "Não servem para nada", "São contra a lei", "Valem mais do que vinte colunas preenchidas uma vez"], answer: 3, why: "Os registos simples e regulares são os úteis." },
      { objective: "O3", q: "Os boletins agrometeorológicos oficiais do Quénia vêm:", options: ["Da KCAA", "Do Departamento Meteorológico do Quénia", "De uma empresa de sementes", "Do ODPC"], answer: 1, why: "O KMD publica previsões e boletins agromet." },
      { objective: "O3", q: "Os mapas de observação da Terra da FAO podem mostrar:", options: ["O seu saldo bancário", "Só os preços do mercado", "Chuva, vegetação e stress agrícola", "Nomes de pragas"], answer: 2, why: "O FAO GIEWS faz mapas de chuva, NDVI e indicadores de stress." },
      { objective: "O3", q: "Um pluviómetro simples permite:", options: ["Registar a sua própria chuva diária", "Prever o próximo ano", "Medir o pH do solo", "Contar plantas"], answer: 0, why: "O seu próprio registo de chuva liga o tempo aos seus rendimentos." },
      { objective: "O4", q: "O rendimento por acre é:", options: ["A colheita vezes o preço", "O custo a dividir pela receita", "O tamanho do talhão vezes a chuva", "A colheita a dividir pelo tamanho do talhão"], answer: 3, why: "Permite comparar talhões de tamanhos diferentes." },
      { objective: "O4", q: "Um gráfico de barras ajuda a:", options: ["Esconder números", "Ver e explicar as diferenças entre talhões", "Guardar fotografias", "Enviar dinheiro"], answer: 1, why: "As barras tornam as comparações fáceis de ver." },
      { objective: "O4", q: "Depois de encontrar o seu melhor talhão, o passo seguinte é:", options: ["Apagar os registos", "Deixar de registar", "Procurar as razões e escrever uma decisão para a próxima época", "Vender o telefone"], answer: 2, why: "A análise deve levar a uma decisão que possa testar." },
      { objective: "O5", q: "Um pedido claro à IA sobre agricultura inclui:", options: ["Cultura, zona, época, tamanho da machamba e o que quer", "O seu número de identificação", "Uma só palavra", "Os seus dados bancários"], answer: 0, why: "O contexto ajuda o assistente a dar respostas úteis." },
      { objective: "O5", q: "Os conselhos da IA sobre medicamentos para animais devem ser:", options: ["Seguidos à letra", "Totalmente ignorados", "Partilhados com toda a gente", "Verificados com um veterinário ou uma fonte de confiança antes de agir"], answer: 3, why: "A IA pode errar; os medicamentos precisam do conselho de um especialista." },
      { objective: "O6", q: "Na Nigéria, a proteção de dados é supervisionada:", options: ["Pela NCAA", "Pela Comissão de Proteção de Dados da Nigéria (NDPC)", "Pela NiMet", "Pela NAFDAC"], answer: 1, why: "A NDPC supervisiona a Lei de Proteção de Dados da Nigéria de 2023." },
      { objective: "O6", q: "Antes de uma aplicação recolher os dados da sua machamba, você deve:", options: ["Nunca ler nada", "Dar todos os dados", "Ler o que vai fazer com os dados e decidir", "Partilhar o seu PIN"], answer: 2, why: "Saiba o que partilha, porquê e com quem." },
      { objective: "O6", q: "Partilhar um resumo como o rendimento por acre em vez de todos os detalhes:", options: ["Pode chegar e protege a sua privacidade", "Nunca é permitido", "É uma burla", "Não serve para nada"], answer: 0, why: "Partilhe só o que é preciso." },
      { objective: "O6", q: "O que mantém os dados do seu telefone mais seguros?", options: ["Nenhum bloqueio do ecrã", "Partilhar palavras-passe", "Nunca fazer cópias de segurança", "Bloqueio do ecrã, palavras-passe fortes e cópias de segurança"], answer: 3, why: "Estes passos básicos protegem os seus registos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 8, 9, 11, 12, 14, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte da folha e verifique outra vez.",
    criteria: [
      { name: "Folha de dados da machamba", objective: "O2", notYet: "Faltam colunas, ou os talhões têm nomes diferentes em linhas diferentes.", meets: "Uma linha por acontecimento com data, talhão, atividade, quantidade e custo, e nomes fixos dos talhões, para pelo menos três talhões.", exceeds: "Tem também notas de inspeção, fotografias ou pontos GPS ligados aos talhões." },
      { name: "Notas do tempo e de satélite", objective: "O3", notYet: "Nenhuma informação de previsão ou de chuva.", meets: "A previsão oficial ou um mapa de satélite ou de chuva está anotado com a fonte e a data.", exceeds: "Inclui o registo do próprio pluviómetro do aluno ao lado da previsão." },
      { name: "Análise e gráfico", objective: "O4", notYet: "Não há tabela de resumo, ou as somas estão erradas.", meets: "O rendimento e o lucro por acre estão certos para cada talhão e aparecem num gráfico de barras.", exceeds: "O gráfico é explicado em uma ou duas frases a um grupo ou a quem empresta dinheiro." },
      { name: "Decisão para a próxima época", objective: "O4", notYet: "Não há decisão, ou ela não sai dos números.", meets: "Uma decisão clara ligada ao que a folha mostra.", exceeds: "Diz como os registos da próxima época vão testar a decisão." },
      { name: "Fontes verificadas", objective: "O1", notYet: "Usa conselhos de aplicações, da IA ou das redes sociais sem verificar.", meets: "Anota que fontes de confiança foram usadas para verificar os conselhos, incluindo qualquer resposta da IA.", exceeds: "Indica uma segunda fonte para cada conselho importante." },
      { name: "Dados seguros", objective: "O6", notYet: "A folha tem PIN, números de identificação ou dados de outras pessoas sem consentimento.", meets: "Nenhum número privado; uma nota sobre cópias de segurança, o bloqueio do ecrã e o que é partilhado com quem.", exceeds: "Mostra um resumo curto preparado para partilhar em vez da folha inteira." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da folha de dados da machamba",
      "Alunos que ainda registam dados da machamba no telefone 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem ter tomado uma decisão na machamba a partir dos seus próprios registos ou ter verificado conselhos antes de comprar insumos",
      "Alunos que dizem ter evitado uma burla de insumo falso, de subsídio ou de PIN"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, mesmo barato; um computador ajuda no Capítulo 2",
      "Ferramentas gratuitas: Google Sheets ou a versão web gratuita do Microsoft Excel, uma aplicação de mapas e um assistente de IA gratuito",
      "Registos reais ou de exemplo de pelo menos três talhões; um pluviómetro simples, se houver",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo para preencher a folha de dados da machamba"
    ],
    facilitatorNotes: [
      "Num grupo de agricultores ou numa sessão de extensão: façam o teste inicial juntos e depois preparem uma folha de exemplo partilhada num telefone para todos verem as colunas.",
      "Prepare dados de exemplo para os alunos que ainda não têm registos, para que todos possam praticar as fórmulas e o gráfico.",
      "Nunca peça aos alunos para escrever o PIN, números de identificação ou dados bancários em folhas, formulários ou ferramentas de IA; use marcadores.",
      "Quando um grupo recolhe dados dos membros, explique o consentimento e combinem quem pode ver a folha.",
      "Avalie a folha final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
