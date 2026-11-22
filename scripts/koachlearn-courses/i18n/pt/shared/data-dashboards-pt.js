"use strict";

// Koach Learn course (Portuguese translation of shared/data-dashboards.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Menu names are given in Portuguese with the English menu name in brackets the first time, since many learners use the tools in English.

const PL300 = { name: "Microsoft Learn: Power BI Data Analyst Associate (exame PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const DATAPLUS = { name: "CompTIA Data+ (exame DA0-002)", url: "https://www.comptia.org/certifications/data" };
const PBI_DESKTOP = { name: "Microsoft: Power BI Desktop (descarga gratuita)", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop" };
const DATA_STUDIO = { name: "Google Cloud: ajuda do Data Studio (antes Looker Studio)", url: "https://docs.cloud.google.com/looker/docs/studio" };
const DS_SHEETS = { name: "Google Cloud: ligar o Data Studio ao Google Sheets", url: "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-sheets" };

module.exports = {
  id: "data-dashboards-pt",
  lang: "pt",
  translationOf: "data-dashboards",
  category: "Workforce Development",
  name: "Criar Painéis de Dados (Power BI e Data Studio)",
  skills: "Planear um painel e os seus números-chave, Limpar dados numa tabela organizada, Escolher o gráfico certo, Criar um painel de uma página com filtros, Verificar e partilhar um painel com segurança",
  outcome: "planear, criar, verificar e partilhar um painel de uma página no Power BI Desktop ou no Looker Studio (Data Studio) que responda a uma pergunta de negócio clara com 3 a 5 números-chave, os gráficos certos e filtros simples.",
  about: [
    "Empresas, organizações sem fins lucrativos, hospitais e as forças armadas usam painéis de dados (em inglês, \"dashboards\"): um só ecrã que mostra os números de que as pessoas precisam para tomar uma decisão. Saber criá-los é uma competência central em trabalhos de análise de dados, relatórios e operações. Este curso é para quem procura emprego, antigos militares, donos de pequenos negócios e qualquer pessoa que já usou uma folha de cálculo e quer dar o passo seguinte.",
    "Você vai planear um painel, limpar um pequeno conjunto de dados de prática no Google Sheets, carregá-lo numa ferramenta gratuita, escolher os gráficos certos, juntar cartões com números-chave e filtros, verificar cada número e partilhar o painel com segurança. Pode usar o Power BI Desktop (um programa gratuito da Microsoft para Windows) ou o Looker Studio, a que a Google agora chama Data Studio (gratuito em qualquer navegador de internet).",
    "Este curso prepara você para trabalhar com painéis e para as partes de relatórios de dois exames reais: o PL-300 da Microsoft (Power BI Data Analyst Associate) e o CompTIA Data+ (DA0-002). Não lhe dá nenhum desses certificados. Veja nas páginas oficiais, nas fontes, o que cada exame avalia, como o marcar e quanto custa hoje.",
    "Cada lição dura cerca de cinco minutos e depois tem uma tarefa \"Experimente agora\". Há uma pequena verificação de 2 perguntas depois de cada lição, uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso. Todos os dados de prática são inventados."
  ],
  finalTask: "Crie um painel de uma página para o seu próprio caminho: use os dados de vendas de prática da padaria deste curso ou um pequeno conjunto de dados inventados de um trabalho que quer (por exemplo encomendas de um armazém ou consultas numa clínica). Escreva a pergunta do painel e 3 a 5 números-chave, limpe os dados numa tabela organizada, crie pelo menos 3 cartões com números-chave e 2 gráficos que sirvam para a pergunta, junte um filtro de datas e mais um filtro, verifique 3 totais com os dados de origem e depois partilhe ou exporte o painel com um resumo de 3 frases sobre o que ele mostra. Guarde-o como peça de portefólio para mostrar numa entrevista de emprego.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos de vários perfis: pessoas à procura de emprego em funções de dados, relatórios ou operações, antigos militares a passar para trabalhos civis, donos de pequenos negócios, jovens adultos e pessoas que voltam para casa depois da prisão e estão a reconstruir as suas competências de trabalho. Muitos já usaram uma folha de cálculo; poucos criaram um painel.",
    startingPoint: "Sabem introduzir dados numa folha de cálculo, somar com SUM e fazer um gráfico simples (ou fizeram o curso \"Excel e Folhas de Cálculo para o Trabalho\"). Nunca usaram o Power BI nem o Looker Studio. Alguns não sabem bem que gráfico usar nem porque os números de um relatório podem estar errados.",
    gap: "Os empregadores querem pessoas que transformem dados em bruto numa página clara, que responda a uma pergunta de negócio e em que se possa confiar. Os alunos precisam de planear, limpar, criar, verificar e partilhar um painel, e de mostrar um numa entrevista. É também a competência de relatórios avaliada no PL-300 e no CompTIA Data+.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra sobre dados é explicada",
      "Aparelhos: o Power BI Desktop precisa de um computador com Windows; num Mac, num Chromebook ou num computador da biblioteca, use o Data Studio no navegador",
      "Só ferramentas gratuitas: Google Sheets, Power BI Desktop, Data Studio (Looker Studio)",
      "Tempo: lições de 5 a 6 minutos, que cabem entre o trabalho e a procura de emprego",
      "Privacidade: os dados de prática são inventados; nunca carregue dados reais de clientes, doentes ou trabalhadores para praticar"
    ],
    prerequisites: "Uso básico de uma folha de cálculo: introduzir dados, SUM, ordenar e um gráfico simples. Se isto for novo, faça primeiro o curso \"Excel e Folhas de Cálculo para o Trabalho\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma necessidade de negócio como \"Que produtos vendem mais?\"", action: "escrever a pergunta do painel numa frase, dizer quem é o público e escolher 3 a 5 números-chave (KPIs)", standard: "com o nome de cada número-chave, como é calculado e o seu período de tempo" },
    { id: "O2", condition: "Com uma folha de vendas de prática desarrumada", action: "limpar os dados numa tabela organizada, com uma linha por registo e uma coluna por campo", standard: "sem cabeçalhos em branco, sem linhas duplicadas e com um só formato em cada coluna" },
    { id: "O3", condition: "Com uma pergunta sobre uma tendência, uma comparação ou uma parte de um total", action: "escolher e criar no Power BI Desktop ou no Data Studio o tipo de gráfico que serve para a pergunta", standard: "acertando pelo menos 4 de 5 escolhas de gráfico" },
    { id: "O4", condition: "Usando os seus dados limpos no Power BI Desktop ou no Data Studio", action: "criar um painel de uma página com cartões de números-chave, pelo menos 2 gráficos, um filtro de datas e mais um filtro", standard: "para que quem o vê responda à pergunta do painel em menos de um minuto" },
    { id: "O5", condition: "Com um painel terminado e os seus dados de origem", action: "verificar pelo menos 3 totais do painel com os dados de origem e corrigir os que não batem certo", standard: "antes de mais alguém o ver" },
    { id: "O6", condition: "Quando o seu painel estiver pronto", action: "partilhar ou exportar o painel só com acesso de leitura e escrever um resumo de 3 frases sobre o que ele mostra", standard: "sem partilhar nenhum dado privado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear o painel e preparar os dados",
      lessons: [
        {
          title: "Começar pela pergunta e pelos números-chave",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escrever a pergunta de um painel, dizer quem é o público e escolher 3 a 5 números-chave.",
          text: [
            "Um painel é um ecrã com números e gráficos que ajuda alguém a tomar uma decisão. Um bom painel começa por uma pergunta, não por um gráfico. Pergunte: quem vai olhar para isto, e o que precisa de decidir?",
            "Exemplo: a dona de uma pequena padaria pergunta: \"Que produtos e que dias trazem mais dinheiro em cada mês?\" O público é a dona. A decisão é o que cozer mais e quando pôr mais pessoal a trabalhar.",
            "Depois escolha 3 a 5 números-chave, chamados KPIs. Para a padaria: total de vendas em dólares, número de artigos vendidos, venda média por encomenda e o produto mais vendido. Escreva como cada um é calculado e para que período, por exemplo \"Total de vendas = soma da coluna Total, este mês\".",
            "Números a mais escondem os importantes. Se um número não ajuda a responder à pergunta, deixe-o de fora."
          ],
          steps: ["Diga quem é o público: quem vai usar o painel?", "Escreva a pergunta numa frase.", "Diga que decisão ela ajuda a tomar.", "Escolha 3 a 5 números-chave que lhe respondam.", "Para cada um, escreva o nome, como é calculado e o período de tempo."],
          words: [["Painel (dashboard)", "um ecrã com números-chave e gráficos que ajuda alguém a tomar uma decisão."], ["KPI (indicador-chave de desempenho)", "um dos poucos números que mostram se as coisas estão a correr bem, como o total de vendas deste mês."], ["Público", "as pessoas que vão olhar para o painel."], ["Métrica", "qualquer número que se mede, como artigos vendidos ou venda média."]],
          slides: [
            { title: "Comece pela pergunta, não pelo gráfico", bullets: ["Quem vai olhar para ele?", "O que precisa de decidir?", "Escreva a pergunta numa frase"] },
            { title: "Exemplo: uma pequena padaria", bullets: ["Pergunta: que produtos e dias trazem mais dinheiro?", "Público: a dona", "Decisão: o que cozer e quando pôr pessoal"] },
            { title: "Escolha 3 a 5 números-chave (KPIs)", bullets: ["Total de vendas, artigos vendidos, venda média, mais vendido", "Escreva como cada um é calculado", "Escreva o período: este mês, esta semana"] },
            { title: "Menos é mais", bullets: ["Números a mais escondem os importantes", "Se não responde à pergunta, deixe de fora"] }
          ],
          tryIt: "Escolha um trabalho que quer (por exemplo armazém, receção de uma clínica, gerente de loja ou o exemplo da padaria). Num papel, escreva o público, a pergunta numa frase, a decisão e 3 a 5 números-chave, com o modo de cálculo e o período de cada um. Guarde esta página: é o plano do seu painel final.",
          youCanNow: "escrever a pergunta de um painel para um público real e escolher 3 a 5 números-chave que lhe respondam.",
          quickCheck: [
            { objective: "O1", q: "O que deve fazer PRIMEIRO quando cria um painel?", options: ["Escrever a pergunta e para quem é", "Escolher as cores dos gráficos", "Juntar todos os gráficos que a ferramenta oferece", "Escolher um tipo de letra"], answer: 0, why: "A pergunta e o público decidem que números e gráficos entram na página." },
            { objective: "O1", q: "Qual é o melhor número-chave para \"Que produtos trazem mais dinheiro em cada mês?\"", options: ["O número de trabalhadores", "A morada da padaria", "O total de vendas em dólares por produto, este mês", "O tempo que faz cada dia"], answer: 2, why: "As vendas por produto no mês respondem diretamente à pergunta." }
          ],
          sources: [PL300, DATAPLUS]
        },
        {
          title: "Limpar os dados numa tabela organizada",
          objectives: ["O2"],
          minutes: 6,
          goal: "Limpar uma folha desarrumada numa tabela organizada, com uma linha por registo e uma coluna por campo.",
          text: [
            "As ferramentas de painéis funcionam melhor com uma tabela organizada: uma linha de cabeçalho, uma linha para cada registo (cada venda, cada encomenda) e uma coluna para cada campo (Data, Produto, Unidades). Sem células unidas, sem linhas em branco e sem totais escritos no meio dos dados.",
            "Dados desarrumados dão números errados. Problemas comuns: a mesma venda escrita duas vezes (um duplicado), células em branco, datas escritas de maneiras diferentes (10/3/26 e Oct 3), números guardados como texto (\"$4.50\" escrito com um espaço) e diferenças de escrita (\"Muffin\" e \"muffins\").",
            "No Google Sheets pode corrigir quase tudo isto: Dados > Limpeza de dados > Remover duplicados (em inglês, Data > Data cleanup > Remove duplicates), Formatar > Número (Format > Number) para acertar datas e moeda, e Editar > Localizar e substituir (Edit > Find and replace) para corrigir a escrita. Guarde a folha original e limpe uma cópia, para poder sempre voltar atrás.",
            "Dados de prática deste curso (inventados): colunas Date, Product, Category, Units, Price, Total (Data, Produto, Categoria, Unidades, Preço, Total). Por exemplo 10/1/2026, Muffin, Pastry, 12, 2.50, 30.00."
          ],
          steps: ["Faça uma cópia da folha e trabalhe na cópia.", "Confirme que há uma só linha de cabeçalho, com um nome claro em cada coluna.", "Tire as linhas em branco, as células unidas e as linhas de totais no meio dos dados.", "Tire as linhas duplicadas.", "Dê a cada coluna um só formato: datas como datas, dinheiro como moeda, texto escrito sempre da mesma maneira.", "Verifique uma linha à mão: Unidades vezes Preço deve dar o Total."],
          words: [["Tabela organizada", "dados com uma linha de cabeçalho, uma linha por registo e uma coluna por campo."], ["Registo", "uma linha de dados, como uma venda."], ["Campo", "uma coluna de dados, como Data ou Produto."], ["Duplicado", "o mesmo registo escrito duas vezes."], ["Tipo de dados", "o tipo de valor que uma coluna tem: número, data, moeda ou texto."]],
          slides: [
            { title: "Uma tabela organizada", bullets: ["Uma linha de cabeçalho", "Uma linha por registo, uma coluna por campo", "Sem células unidas, linhas em branco ou totais escritos"] },
            { title: "Problemas comuns", bullets: ["Linhas duplicadas", "Datas escritas de maneiras diferentes", "Números guardados como texto", "A mesma coisa escrita de maneiras diferentes"] },
            { title: "Correções no Google Sheets", bullets: ["Dados > Limpeza de dados > Remover duplicados", "Formatar > Número para datas e moeda", "Editar > Localizar e substituir para a escrita"] },
            { title: "Trabalhe com segurança", bullets: ["Limpe uma cópia, guarde o original", "Verifique uma linha à mão: Unidades x Preço = Total"] }
          ],
          tryIt: "No Google Sheets, escreva 15 linhas de vendas inventadas da padaria (Data, Produto, Categoria, Unidades, Preço, Total) ao longo de duas semanas. De propósito, junte 1 linha duplicada, 1 linha em branco, 1 data escrita como texto (Oct 5) e 1 diferença de escrita (\"muffins\"). Depois faça uma cópia e limpe-a com os passos. Conte quantos problemas corrigiu.",
          youCanNow: "encontrar e corrigir duplicados, células em branco, formatos misturados e diferenças de escrita para fazer uma tabela organizada.",
          quickCheck: [
            { objective: "O2", q: "A sua folha mostra \"Muffin\" e \"muffins\" como dois produtos. O que faz?", options: ["Deixa assim; a ferramenta adivinha", "Apaga todas as linhas de muffins", "Junta uma terceira maneira de escrever", "Usa Localizar e substituir para todas as linhas dizerem \"Muffin\""], answer: 3, why: "Uma só maneira de escrever cada artigo faz a ferramenta somá-los corretamente." },
            { objective: "O2", q: "O que descreve uma tabela organizada?", options: ["Células de título unidas por cima dos dados", "Uma linha de cabeçalho, uma linha por registo, uma coluna por campo", "Uma linha de total no meio dos dados", "Duas linhas de cabeçalho com células em branco"], answer: 1, why: "As ferramentas de painéis leem bem as tabelas organizadas; células unidas e totais escritos confundem-nas." }
          ],
          sources: [{ name: "Ajuda dos Editores do Google Docs: dividir texto, remover duplicados ou cortar espaços", url: "https://support.google.com/docs/answer/6325535" }]
        },
        {
          title: "Carregar os dados no Power BI Desktop ou no Data Studio",
          objectives: ["O2"],
          minutes: 6,
          goal: "Carregar uma tabela organizada no Power BI Desktop ou no Data Studio e verificar o tipo de dados de cada coluna.",
          text: [
            "Escolha a sua ferramenta. O Power BI Desktop é gratuito, da Microsoft, e funciona num computador com Windows. O Looker Studio, a que a Google agora chama Data Studio, é gratuito e funciona num navegador de internet, por isso serve num Mac, num Chromebook ou num computador da biblioteca. Os dois são usados em trabalhos reais; o que aprende num serve no outro.",
            "Power BI Desktop: descarregue-o só do site oficial da Microsoft. Guarde a sua folha limpa como ficheiro Excel ou CSV. Escolha Obter dados (Get data), escolha o ficheiro e veja a pré-visualização. Escolha Transformar dados (Transform data) se uma coluna precisar de ser corrigida; isto abre o Editor do Power Query, onde pode mudar o tipo de dados de uma coluna.",
            "Data Studio: entre com uma conta Google, escolha Criar (Create), depois Origem de dados (Data source), escolha o conector do Google Sheets, escolha a sua folha de cálculo e a página, e escolha Ligar (Connect). Vai ver a lista dos seus campos com os respetivos tipos.",
            "Nas duas ferramentas, verifique cada coluna: Data deve ser uma data, Unidades e Total devem ser números, Produto deve ser texto. Um número guardado como texto não pode ser somado. Os campos que conta ou soma (Unidades, Total) chamam-se muitas vezes medidas ou métricas; os campos pelos quais agrupa (Produto, Data) chamam-se dimensões."
          ],
          steps: ["Escolha o Power BI Desktop (Windows) ou o Data Studio (qualquer navegador).", "Power BI: Obter dados, escolha o ficheiro Excel ou CSV, veja a pré-visualização, escolha Carregar ou Transformar dados.", "Data Studio: Criar, Origem de dados, conector do Google Sheets, escolha a folha, Ligar.", "Verifique o tipo de cada coluna: datas, números, texto.", "Corrija qualquer tipo errado antes de criar gráficos."],
          words: [["Power BI Desktop", "um programa gratuito da Microsoft para Windows que cria relatórios e painéis."], ["Data Studio (Looker Studio)", "a ferramenta gratuita da Google para relatórios e painéis no navegador; a Google mudou o nome de Looker Studio para Data Studio."], ["Origem de dados", "o ficheiro ou a folha de onde um painel lê os dados."], ["Editor do Power Query", "a parte do Power BI onde limpa e organiza os dados antes de criar os visuais."], ["Dimensão", "um campo pelo qual agrupa, como Produto ou Data."], ["Medida (métrica)", "um número que soma, conta ou de que faz a média, como o Total de vendas."], ["Ficheiro CSV", "um ficheiro de texto simples com dados, com os valores separados por vírgulas."]],
          slides: [
            { title: "Duas ferramentas gratuitas", bullets: ["Power BI Desktop: gratuito, Windows", "Data Studio (antes Looker Studio): gratuito, qualquer navegador", "O que aprende num serve no outro"] },
            { title: "Power BI Desktop", bullets: ["Obter dados, escolha o ficheiro Excel ou CSV", "Veja a pré-visualização", "Transformar dados abre o Editor do Power Query"] },
            { title: "Data Studio", bullets: ["Criar, depois Origem de dados", "Conector do Google Sheets, escolha a folha", "Ligar, depois veja a lista de campos"] },
            { title: "Verifique cada tipo de dados", bullets: ["Datas como datas, números como números", "Medidas: o que soma, como o Total", "Dimensões: o que agrupa, como o Produto"] }
          ],
          tryIt: "Carregue a sua folha limpa da padaria no Power BI Desktop ou no Data Studio. Anote cada coluna e o seu tipo de dados. Se algum número aparecer como texto, corrija-o na ferramenta ou na folha e carregue outra vez. Depois diga que campos são dimensões e quais são medidas.",
          youCanNow: "carregar uma tabela organizada no Power BI Desktop ou no Data Studio e confirmar que cada coluna tem o tipo de dados certo.",
          quickCheck: [
            { objective: "O2", q: "A sua coluna Total foi carregada como texto. O que acontece se a deixar assim?", options: ["A ferramenta não consegue somar os totais corretamente", "Nada; texto e números funcionam da mesma maneira", "O painel fica com mais cores", "O ficheiro fica mais pequeno"], answer: 0, why: "Só as colunas de números podem ser somadas ou dar médias." },
            { objective: "O2", q: "Você só tem um Chromebook. Que ferramenta pode usar neste curso?", options: ["Power BI Desktop", "Nenhuma ferramenta funciona", "O Data Studio no navegador", "Só papel"], answer: 2, why: "O Data Studio funciona num navegador; o Power BI Desktop precisa de Windows." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO, DS_SHEETS]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear o painel e preparar os dados",
        questions: [
          { objective: "O1", q: "Um gerente de loja quer saber que dia da semana precisa de mais pessoal. Que número-chave ajuda mais?", options: ["O número de telefone da loja", "O número de produtos do catálogo", "O número de clientes por dia da semana", "A data em que o gerente começou"], answer: 2, why: "Os clientes por dia mostram diretamente quais são os dias com mais movimento." },
          { objective: "O1", q: "Quantos números-chave deve mostrar normalmente um painel de uma página?", options: ["3 a 5", "Só 1", "O maior número possível", "Pelo menos 20"], answer: 0, why: "Poucos números-chave deixam os importantes fáceis de ver." },
          { objective: "O2", q: "Que problema faria um total de vendas ficar alto demais?", options: ["Uma linha de cabeçalho clara", "Datas formatadas como datas", "Uma só maneira de escrever cada produto", "A mesma venda escrita duas vezes"], answer: 3, why: "Uma linha duplicada conta a mesma venda duas vezes." },
          { objective: "O2", q: "Antes de limpar uma folha, o que deve fazer?", options: ["Apagar a linha de cabeçalho", "Fazer uma cópia e limpar a cópia", "Unir todas as células", "Escrever totais no meio dos dados"], answer: 1, why: "Guardar o original deixa você voltar atrás se uma correção correr mal." },
          { objective: "O2", q: "Produto e Data são campos pelos quais se agrupa. Como se chamam?", options: ["Medidas", "Palavras-passe", "Dimensões", "Filtros"], answer: 2, why: "Dimensões são campos pelos quais se agrupa ou separa; medidas são números que se somam ou de que se faz a média." }
        ]
      }
    },
    {
      name: "Capítulo 2: Criar, verificar e partilhar",
      lessons: [
        {
          title: "Escolher o gráfico certo",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escolher e criar o gráfico que serve para cada tipo de pergunta.",
          text: [
            "Escolha o gráfico conforme a pergunta. Uma mudança ao longo do tempo (vendas por dia ou por mês) é um gráfico de linhas. Uma comparação entre grupos (vendas por produto) é um gráfico de barras ou de colunas, ordenado do maior para o menor. Partes de um todo (parte das vendas por categoria) podem ser um gráfico circular (\"pizza\") ou de anel, mas só com poucas fatias; muitas vezes um gráfico de barras é mais claro.",
            "Um número-chave sozinho é um cartão no Power BI ou um indicador (scorecard) no Data Studio. Valores exatos que as pessoas precisam de consultar vão para uma tabela. Um mapa só ajuda quando o lugar importa.",
            "Para criar: no Power BI Desktop, clique num visual no painel Visualizações (Visualizations) e depois arraste uma dimensão (Produto) e uma medida (Total) para os campos dele. No Data Studio, escolha Adicionar um gráfico (Add a chart), escolha o tipo e depois defina a dimensão e a métrica.",
            "Mantenha os gráficos honestos: os gráficos de barras começam no zero, cada gráfico tem um título claro que diz o que mostra (\"Vendas por produto, outubro\") e use uma só cor, a não ser que a cor queira dizer alguma coisa."
          ],
          steps: ["Leia a pergunta: é sobre o tempo, sobre comparar grupos, sobre partes de um todo ou sobre um só número?", "Tempo: gráfico de linhas. Comparar: gráfico de barras, ordenado. Partes: circular com poucas fatias, ou barras. Um número: cartão ou indicador.", "Junte o gráfico e defina a dimensão e a medida.", "Dê-lhe um título que diga o que mostra e o período.", "Confirme que as barras começam no zero."],
          words: [["Gráfico de linhas", "um gráfico que mostra como um número muda ao longo do tempo."], ["Gráfico de barras", "um gráfico de barras que compara grupos; os gráficos de colunas são gráficos de barras em pé."], ["Gráfico circular", "um círculo cortado em fatias que mostra as partes de um todo."], ["Cartão / indicador", "uma caixa que mostra um número grande, como o total de vendas."], ["Visual", "a palavra do Power BI para um gráfico, cartão, tabela ou mapa."]],
          slides: [
            { title: "Escolha o gráfico conforme a pergunta", bullets: ["Ao longo do tempo: gráfico de linhas", "Comparar grupos: gráfico de barras, ordenado", "Partes de um todo: poucas fatias, ou barras", "Um número: cartão ou indicador"] },
            { title: "Crie o gráfico", bullets: ["Power BI: escolha um visual, arraste os campos", "Data Studio: Adicionar um gráfico, defina dimensão e métrica"] },
            { title: "Mantenha-o honesto", bullets: ["As barras começam no zero", "O título diz o que mostra e quando", "Uma só cor, a não ser que a cor queira dizer algo"] }
          ],
          tryIt: "Com os dados da padaria, crie três gráficos: (1) total de vendas por data num gráfico de linhas, (2) total de vendas por produto num gráfico de barras ordenado do maior para o menor, (3) total de vendas num cartão ou indicador. Dê a cada um um título claro. Depois escreva uma frase sobre o que cada gráfico lhe diz.",
          youCanNow: "escolher um gráfico de linhas, de barras, circular, um cartão ou uma tabela conforme a pergunta e criá-lo com um título claro.",
          quickCheck: [
            { objective: "O3", q: "Que gráfico mostra melhor como as vendas mudaram em cada dia deste mês?", options: ["Um gráfico circular", "Um mapa", "Um só cartão", "Um gráfico de linhas"], answer: 3, why: "Os gráficos de linhas mostram a mudança ao longo do tempo." },
            { objective: "O3", q: "Quer comparar as vendas de 8 produtos. O que é mais claro?", options: ["Um gráfico circular com 8 fatias", "Um gráfico de barras ordenado do maior para o menor", "Um mapa", "Uma tabela de datas"], answer: 1, why: "Um gráfico de barras ordenado torna as comparações fáceis; 8 fatias de um círculo são difíceis de ler." }
          ],
          sources: [DATAPLUS, PL300]
        },
        {
          title: "Organizar o painel com cartões e filtros",
          objectives: ["O4"],
          minutes: 6,
          goal: "Criar um painel de uma página com cartões de números-chave, gráficos, um filtro de datas e mais um filtro.",
          text: [
            "As pessoas leem um ecrã a partir do canto superior esquerdo. Ponha os cartões de números-chave numa fila em cima, o gráfico mais importante por baixo deles e os detalhes mais abaixo. Junte um título para a página toda e o intervalo de datas que ela cobre.",
            "Os filtros deixam quem vê mudar o que aparece. No Power BI chamam-se segmentações (em inglês, \"slicers\"): junte um visual de Segmentação e ponha nele a Data, depois junte outro para a Categoria. No Data Studio chamam-se controlos (\"controls\"): escolha Adicionar um controlo (Add a control), escolha o controlo de intervalo de datas (Date range control) e depois junte um controlo de lista pendente (Drop-down list) para a Categoria.",
            "Teste os filtros: escolha uma categoria e confirme que todos os cartões e gráficos mudam. Se um não mudar, não está ligado aos mesmos dados.",
            "Deixe espaço em branco, alinhe as coisas e tire tudo o que não ajuda a responder à pergunta. Depois faça o teste de um minuto: mostre a página a um amigo e faça a pergunta do painel. Ele consegue responder em menos de um minuto?"
          ],
          steps: ["Junte um título à página e o intervalo de datas.", "Ponha 3 a 5 cartões de números-chave numa fila em cima.", "Ponha o gráfico principal por baixo dos cartões e os outros gráficos mais abaixo.", "Junte um filtro de datas (segmentação ou controlo de intervalo de datas).", "Junte mais um filtro, como a Categoria.", "Teste: mude cada filtro e veja se todos os cartões e gráficos mudam.", "Faça o teste de um minuto com outra pessoa."],
          words: [["Disposição", "o lugar onde fica cada cartão e cada gráfico na página."], ["Filtro", "um comando que deixa quem vê mostrar só parte dos dados, como um mês."], ["Segmentação (slicer)", "o nome do Power BI para um filtro na página."], ["Controlo (control)", "o nome do Data Studio para um filtro na página, como um controlo de intervalo de datas."]],
          slides: [
            { title: "Disposição", bullets: ["Cartões de números-chave numa fila em cima", "Gráfico principal por baixo, detalhes mais abaixo", "Título da página com o intervalo de datas"] },
            { title: "Filtros", bullets: ["Power BI: visual de Segmentação para Data e Categoria", "Data Studio: controlo de intervalo de datas e lista pendente"] },
            { title: "Teste o painel", bullets: ["Mude um filtro: tudo muda?", "Tire tudo o que não ajuda", "Teste de um minuto com um amigo"] }
          ],
          tryIt: "Ponha os seus três gráficos da Lição 4 numa só página. Junte pelo menos mais um cartão de número-chave (por exemplo artigos vendidos ou venda média), um filtro de datas e um filtro de Categoria. Alinhe tudo. Depois faça a alguém a pergunta do seu painel e conte quanto tempo a pessoa leva a responder a partir da página.",
          youCanNow: "organizar um painel de uma página com cartões de números-chave, gráficos e filtros que funcionam, que alguém consegue ler em menos de um minuto.",
          quickCheck: [
            { objective: "O4", q: "Onde ficam normalmente os cartões de números-chave?", options: ["Numa fila em cima", "Escondidos numa segunda página", "Mesmo no fundo", "Dentro do gráfico circular"], answer: 0, why: "As pessoas leem a partir do canto superior esquerdo, por isso os números-chave vêm primeiro." },
            { objective: "O4", q: "Escolhe uma categoria no filtro, mas um gráfico não muda. O que quer isto dizer?", options: ["O painel está terminado", "Esse gráfico não está ligado aos mesmos dados ou ao mesmo filtro", "Os filtros nunca mudam os gráficos", "Precisa de um ecrã maior"], answer: 1, why: "Todos os cartões e gráficos devem responder; um que não responde tem de ser corrigido." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO]
        },
        {
          title: "Verificar os números e partilhar com segurança",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Verificar 3 totais do painel com os dados de origem e depois partilhá-lo só para leitura com um resumo curto.",
          text: [
            "Um painel só é útil se se puder confiar nele. Antes de alguém o ver, verifique pelo menos 3 números. Exemplo: o cartão diz que o total de vendas foi $1,240. Na sua folha, use SUM na coluna Total para as mesmas datas. Batem certo? Depois verifique da mesma maneira um produto e um dia.",
            "Se um número não bater certo, procure as causas habituais: um filtro ainda está ativo, os duplicados voltaram, uma coluna está como texto em vez de número, o intervalo de datas é diferente, ou o cartão usa Contagem (Count) em vez de Soma (Sum).",
            "Partilhe com segurança. No Data Studio, use o botão Partilhar (Share) e dê às pessoas acesso de leitura, não de edição. Com o Power BI Desktop, exporte a página para PDF ou guarde o ficheiro e envie-o só para a pessoa certa; publicar na internet pode precisar de uma conta de trabalho ou de escola. Nunca ponha dados reais de clientes, doentes ou trabalhadores num painel de prática.",
            "Junte um resumo de 3 frases: o que o painel mostra, a descoberta mais importante e uma ação sugerida. Exemplo: \"Isto mostra as vendas da padaria em outubro. Os muffins renderam mais e os sábados foram os dias com mais movimento. Podíamos cozer mais muffins e pôr mais uma pessoa a trabalhar aos sábados.\""
          ],
          steps: ["Limpe todos os filtros.", "Verifique 3 números com a folha de origem: o total, um produto e um dia.", "Se um estiver errado, verifique filtros, duplicados, tipos de dados, datas e Soma ou Contagem.", "Partilhe com acesso só de leitura, ou exporte para PDF.", "Escreva um resumo de 3 frases: o que mostra, a descoberta principal, uma ação."],
          words: [["Validar", "confirmar que um número está certo comparando-o com a origem."], ["Acesso só de leitura", "as pessoas podem ver o painel mas não o podem mudar."], ["Exportar", "guardar uma cópia noutro formato, como PDF."], ["Descoberta (insight)", "uma conclusão útil que ajuda alguém a decidir o que fazer."]],
          slides: [
            { title: "Verifique antes de partilhar", bullets: ["Limpe os filtros", "Verifique 3 números com a folha de origem", "Total, um produto, um dia"] },
            { title: "Se um número estiver errado", bullets: ["Um filtro ainda está ativo", "Duplicados ou números como texto", "Datas diferentes, ou Contagem em vez de Soma"] },
            { title: "Partilhe com segurança", bullets: ["Acesso só de leitura, não de edição", "Ou exporte para PDF", "Nenhum dado privado real nos trabalhos de prática"] },
            { title: "Escreva um resumo de 3 frases", bullets: ["O que mostra", "A descoberta principal", "Uma ação sugerida"] }
          ],
          tryIt: "Termine a sua tarefa final: verifique 3 números do painel com a sua folha e anote cada par. Corrija o que não bater certo. Depois partilhe só para leitura (Data Studio) ou exporte um PDF (Power BI) e escreva o seu resumo de 3 frases. Avalie-se com a grelha de avaliação antes de dar o trabalho por terminado.",
          youCanNow: "verificar os números de um painel com a origem, partilhá-lo com segurança e explicar em três frases o que ele mostra.",
          quickCheck: [
            { objective: "O5", q: "O seu cartão diz 340 artigos vendidos, mas SUM de Units na folha dá 310. O que deve verificar primeiro?", options: ["As cores dos gráficos", "O tipo de letra do título da página", "Se há um filtro ativo ou se os duplicados voltaram", "O brilho do ecrã"], answer: 2, why: "Filtros e duplicados são causas comuns de totais que não batem certo." },
            { objective: "O6", q: "O seu gerente só precisa de ver o painel. Que acesso lhe dá?", options: ["A sua palavra-passe", "Acesso de edição", "Acesso de proprietário", "Acesso só de leitura"], answer: 3, why: "O acesso só de leitura deixa-o ver sem mudar nada por engano." }
          ],
          sources: [DATA_STUDIO, DATAPLUS]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Criar, verificar e partilhar",
        questions: [
          { objective: "O3", q: "Que gráfico mostra UM número grande, como o total de vendas deste mês?", options: ["Um gráfico de linhas", "Um cartão ou indicador", "Um mapa", "Uma tabela de 100 linhas"], answer: 1, why: "Um cartão (Power BI) ou indicador (Data Studio) mostra um número-chave." },
          { objective: "O3", q: "As barras de um gráfico começam em 900 em vez de 0. Qual é o problema?", options: ["Diferenças pequenas parecem muito maiores do que são", "Nenhum; fica mais bonito", "As cores estão erradas", "O título é comprido demais"], answer: 0, why: "Barras que não começam no zero exageram as diferenças." },
          { objective: "O4", q: "No Power BI, como se chama um filtro na página?", options: ["Um cartão", "Uma origem", "Uma métrica", "Uma segmentação (slicer)"], answer: 3, why: "O Power BI chama segmentações aos filtros na página; o Data Studio chama-lhes controlos." },
          { objective: "O5", q: "Quantos números deve verificar com a origem antes de partilhar?", options: ["Nenhum; a ferramenta está sempre certa", "Só o título da página", "Pelo menos 3, como o total, um produto e um dia", "Só os números que o gerente pede"], answer: 2, why: "Verificar vários números apanha erros de filtros, duplicados e tipos de dados." },
          { objective: "O6", q: "Qual é a melhor frase de resumo para partilhar com um painel?", options: ["\"Aqui estão alguns gráficos.\"", "\"Os muffins renderam mais em outubro, por isso podíamos cozer mais aos sábados.\"", "\"Usei muitas cores.\"", "\"Veja você mesmo.\""], answer: 1, why: "Um bom resumo diz a descoberta e uma ação sugerida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criar Painéis de Dados (Power BI e Data Studio)",
    questions: [
      { objective: "O1", q: "O que é um painel de dados?", options: ["Uma lista de palavras-passe", "Um ecrã com números-chave e gráficos que ajuda alguém a decidir", "Um tipo de fórmula de folha de cálculo", "Uma definição da impressora"], answer: 1, why: "Um painel junta num ecrã os números-chave para uma decisão." },
      { objective: "O1", q: "Qual é uma pergunta clara para um painel?", options: ["\"Mostre-me dados.\"", "\"Faça ficar bonito.\"", "\"Tudo sobre o negócio.\"", "\"Que produtos trazem mais dinheiro em cada mês?\""], answer: 3, why: "É uma pergunta concreta a que um painel consegue responder." },
      { objective: "O1", q: "Para cada número-chave, escreve o nome, como é calculado e:", options: ["O seu período de tempo", "A sua cor preferida", "O preço da ferramenta", "A sua palavra-passe"], answer: 0, why: "Um número-chave precisa de um período, como este mês, para querer dizer alguma coisa." },
      { objective: "O2", q: "Numa tabela organizada, cada linha é:", options: ["Um gráfico", "Um total", "Um registo, como uma venda", "Um título"], answer: 2, why: "Uma linha por registo e uma coluna por campo é uma tabela organizada." },
      { objective: "O2", q: "As datas na sua folha estão escritas como \"10/3/26\" e \"Oct 3\". O que faz?", options: ["Deixa as duas", "Apaga a coluna das datas", "Junta uma terceira maneira", "Formata a coluna para todas as datas serem datas reais numa só maneira"], answer: 3, why: "Um só formato de data deixa a ferramenta agrupar e filtrar por data corretamente." },
      { objective: "O2", q: "Onde obtém o Power BI Desktop?", options: ["No site oficial da Microsoft", "Num link numa SMS de um desconhecido", "Em qualquer site de descargas grátis", "Num anúncio que aparece no ecrã"], answer: 0, why: "Descarregue programas só do site oficial da empresa." },
      { objective: "O2", q: "No Data Studio, como liga uma folha do Google Sheets?", options: ["Envia a folha por e-mail para a Google", "Cria uma origem de dados com o conector do Google Sheets", "Imprime-a e digitaliza-a", "Escreve todos os números outra vez"], answer: 1, why: "O conector do Google Sheets liga a folha como origem de dados." },
      { objective: "O3", q: "Que pergunta serve para um gráfico de linhas?", options: ["Que parte das vendas é pão?", "Qual é o nosso número de telefone?", "Como mudaram as vendas semanais em 3 meses?", "Que loja fica em que cidade?"], answer: 2, why: "Os gráficos de linhas mostram a mudança ao longo do tempo." },
      { objective: "O3", q: "Que pergunta serve para um gráfico de barras ordenado?", options: ["Qual dos nossos 6 produtos vendeu mais?", "Qual é o total de vendas de hoje?", "A que horas abre a loja?", "Como mudaram as vendas em cada hora?"], answer: 0, why: "Os gráficos de barras comparam grupos; ordenar torna o maior fácil de ver." },
      { objective: "O3", q: "Quando é que um gráfico circular é uma escolha razoável?", options: ["Para mostrar a mudança em 12 meses", "Para mostrar uma parte de um total com poucas fatias", "Para comparar 15 produtos", "Para mostrar um só número"], answer: 1, why: "Os gráficos circulares mostram partes de um todo e só se leem bem com poucas fatias." },
      { objective: "O3", q: "Um bom título de gráfico:", options: ["Diz \"Gráfico 1\"", "Fica em branco", "Tem letra muito pequena", "Diz o que mostra e o período"], answer: 3, why: "\"Vendas por produto, outubro\" diz exatamente o que quem vê está a ver." },
      { objective: "O4", q: "No Data Studio, um filtro na página chama-se:", options: ["Segmentação", "Tipo de dados", "Controlo", "Medida"], answer: 2, why: "O Data Studio chama controlos aos filtros na página, como um controlo de intervalo de datas." },
      { objective: "O4", q: "O que é o teste de um minuto?", options: ["Fazer a alguém a pergunta do painel e ver se responde a partir da página em menos de um minuto", "Criar o painel num minuto", "Mostrar a página durante um segundo", "Reiniciar o computador"], answer: 0, why: "Se quem vê responde depressa, a disposição funciona." },
      { objective: "O4", q: "Muda o filtro de Categoria e todos os cartões e gráficos mudam. Isto mostra que:", options: ["Os dados estão errados", "Os filtros funcionam em toda a página", "O painel precisa de mais páginas", "As cores estão estragadas"], answer: 1, why: "Tudo a mudar ao mesmo tempo quer dizer que o filtro está ligado a todos os visuais." },
      { objective: "O5", q: "O total do painel é $1,240 e SUM na folha para as mesmas datas dá $1,240. Isto quer dizer que:", options: ["O total foi verificado e bate certo", "O painel está errado", "Deve apagar a folha", "Precisa de uma ferramenta nova"], answer: 0, why: "Comparar com a origem e ver que bate certo é validar um número." },
      { objective: "O5", q: "Um cartão mostra 52 quando esperava um total de vendas de $1,240. Uma causa provável é:", options: ["O título da página", "As cores das barras", "O cartão está em Contagem em vez de Soma", "O tamanho da letra"], answer: 2, why: "A Contagem dá o número de linhas, não o total dos valores." },
      { objective: "O5", q: "Quando deve verificar os números?", options: ["Nunca", "Só depois de o chefe encontrar um erro", "Só uma vez por ano", "Antes de mais alguém ver o painel"], answer: 3, why: "Verificar primeiro impede que números errados levem a decisões erradas." },
      { objective: "O6", q: "O que NUNCA deve entrar num painel de prática?", options: ["Vendas inventadas da padaria", "Nomes e números de telefone de clientes reais", "Categorias de produtos", "Datas"], answer: 1, why: "Os dados de prática são inventados; os dados privados reais têm de ser protegidos." },
      { objective: "O6", q: "O que é que este curso lhe dá?", options: ["O certificado PL-300", "O certificado CompTIA Data+", "Uma carta de condução", "Preparação e um painel para o portefólio; os exames fazem-se à parte"], answer: 3, why: "O curso prepara você; a Microsoft e a CompTIA dão as suas certificações depois dos seus próprios exames." },
      { objective: "O6", q: "Um bom resumo de 3 frases inclui o que o painel mostra, a descoberta principal e:", options: ["Uma ação sugerida", "A sua morada", "A história da ferramenta", "Uma lista de todas as linhas"], answer: 0, why: "Uma ação transforma a descoberta numa decisão." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 3, 6, 7, 9, 11, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Pergunta e números-chave", objective: "O1", notYet: "Não há uma pergunta clara, ou há mais de 5 números sem período de tempo.", meets: "Pergunta numa frase, público indicado, 3 a 5 números-chave, cada um com o modo de cálculo e um período de tempo.", exceeds: "Diz também que decisão o painel apoia e porque cada número é importante para ela." },
      { name: "Dados organizados", objective: "O2", notYet: "Ficaram duplicados, linhas em branco, datas em formatos misturados ou números guardados como texto.", meets: "Uma linha de cabeçalho, uma linha por registo, tipos de dados certos, sem duplicados.", exceeds: "Guarda a folha original e uma pequena nota de cada correção feita." },
      { name: "Gráficos certos", objective: "O3", notYet: "Os tipos de gráfico não servem para as perguntas, ou faltam títulos.", meets: "Pelo menos 2 gráficos que servem para as suas perguntas, com títulos claros; as barras começam no zero.", exceeds: "Sabe explicar porque escolheu cada tipo de gráfico em vez de outro." },
      { name: "Disposição e filtros", objective: "O4", notYet: "Faltam cartões, ou os filtros não mudam todos os visuais.", meets: "3 ou mais cartões de números-chave em cima, um filtro de datas e mais um filtro que mudam tudo; passa no teste de um minuto.", exceeds: "Disposição limpa e alinhada, sem nada a mais; quem vê responde em bem menos de um minuto." },
      { name: "Números verificados", objective: "O5", notYet: "Nenhum número verificado com a origem.", meets: "3 números verificados e anotados; qualquer diferença corrigida.", exceeds: "Explica a causa de uma diferença que encontrou e como a corrigiu." },
      { name: "Partilhado com segurança e com resumo", objective: "O6", notYet: "Partilhado com acesso de edição, tem dados privados, ou não tem resumo.", meets: "Partilhado só para leitura ou exportado para PDF, sem dados privados, resumo de 3 frases com uma descoberta e uma ação.", exceeds: "O resumo está pronto para ser lido em voz alta numa entrevista de emprego como peça de portefólio." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e criam um painel que cumpre a grelha de avaliação",
      "Alunos que juntam o painel a um currículo, portefólio ou perfil do LinkedIn em 30 dias",
      "Alunos que marcam ou passam no PL-300 ou no CompTIA Data+, ou começam um trabalho de dados ou de relatórios, em 6 meses (inquérito de seguimento)",
      "Alunos donos de pequenos negócios que usam um painel para tomar uma decisão sobre stock, pessoal ou preços"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet: Windows para o Power BI Desktop, ou qualquer computador com navegador para o Data Studio",
      "Uma conta Google gratuita (Google Sheets e Data Studio) e, em Windows, o Power BI Desktop do site oficial da Microsoft",
      "Os dados inventados de vendas da padaria (os alunos escrevem 15 linhas ou mais) ou outro conjunto de dados inventados da sua área",
      "Papel e caneta para o plano do painel",
      "Cerca de 2 a 3 horas no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Verifique primeiro os aparelhos: os alunos com Mac, Chromebook ou computadores da biblioteca usam o Data Studio; quem tem Windows pode escolher qualquer uma das ferramentas.",
      "Faça o teste inicial antes da Lição 1 e compare com o questionário final.",
      "Peça aos alunos que guardem a página do plano da Lição 1; ela guia toda a tarefa final.",
      "Nunca use dados reais de clientes, doentes ou trabalhadores na aula. Lembre aos antigos militares e a quem procura emprego que usem números inventados também nas peças de portefólio.",
      "Avalie o painel final com a grelha de avaliação e peça a cada aluno que o apresente em 60 segundos, como prática para uma entrevista.",
      "Indique aos alunos as páginas oficiais do PL-300 e do CompTIA Data+ para o conteúdo atual dos exames, as marcações e os custos; não diga preços de memória."
    ]
  }
};
