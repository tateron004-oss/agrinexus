"use strict";

// Koach Learn course (Portuguese translation of shared/python-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Python code stays exactly as in the English.

const COLAB = { name: "Google Colab: Perguntas Frequentes", url: "https://research.google.com/colaboratory/faq.html" };

module.exports = {
  id: "python-basics-pt",
  lang: "pt",
  translationOf: "python-basics",
  category: "Youth",
  name: "Introdução à Programação com Python",
  skills: "Executar Python no Google Colab, Usar variáveis e input, Tomar decisões com if, Trabalhar com listas e ciclos, Escrever uma função",
  outcome: "escrever e executar no Google Colab um pequeno programa em Python que pede informações ao utilizador, guarda-as, toma uma decisão com elas, repete passos com um ciclo e mostra um resultado claro.",
  about: [
    "Este curso é para quem nunca escreveu código: estudantes, antigos militares que mudam de carreira e adultos que procuram um trabalho na área da tecnologia. Só precisa de uma conta Google gratuita e de um navegador de internet.",
    "Vai escrever Python verdadeiro no Google Colab, um site gratuito que executa o código por você, por isso não há nada para instalar. Cada lição acrescenta uma ferramenta nova: mostrar texto, variáveis, decisões, listas, ciclos e funções.",
    "Cada lição dura cerca de cinco minutos. Leia-a, veja os slides e depois escreva você mesmo o código no \"Experimente agora\". No final vai construir do zero um pequeno verificador do orçamento de compras. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "No Google Colab, escreva um verificador do orçamento de compras: uma função que recebe uma lista de preços e um orçamento, soma os preços com um ciclo e mostra o total e \"Abaixo do orçamento\" ou \"Acima do orçamento\" com a diferença. Peça o orçamento ao utilizador com input(), chame a sua função e teste-a com dois orçamentos diferentes.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos que experimentam programar pela primeira vez: alunos do ensino secundário e da universidade, membros de programas para jovens, pessoas que mudam de carreira e formandos de programas de emprego com curiosidade por código, dados ou IA.",
    startingPoint: "Sabem usar um computador e um navegador de internet e entrar numa conta Google. A maioria nunca escreveu código e não sabe o que é uma variável, uma condição, uma lista, um ciclo ou uma função.",
    gap: "Programar é um ponto de partida para empregos em tecnologia, dados e IA, e uma ferramenta útil em muitos outros trabalhos. Quem nunca escreveu um programa que funciona pensa muitas vezes que o código não é para si; um primeiro programa que resolve um problema real dá as habilidades e a confiança para continuar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra de programação é explicada com um exemplo",
      "Aparelhos: funciona melhor um computador ou portátil com navegador de internet; um tablet é possível, mas é mais difícil escrever código",
      "Contas e custo: uma conta Google gratuita para o Google Colab; nada para instalar nem comprar",
      "Tempo: cerca de 5 a 6 minutos por lição mais a prática, cerca de 60 a 75 minutos no total",
      "Matemática: só somar, comparar e decimais simples"
    ],
    prerequisites: "Nenhum. O curso \"Competências Básicas de Informática\" ajuda quem ainda está a aprender a escrever no teclado e a usar um navegador."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o Google Colab num navegador de internet", action: "abrir um notebook, escrever e executar uma linha print e ler a última linha de uma mensagem de erro", standard: "com o programa a funcionar e qualquer erro de escrita corrigido com a ajuda da mensagem de erro" },
    { id: "O2", condition: "Com as informações de que um programa precisa", action: "guardá-las em variáveis do tipo certo, pedir dados ao utilizador e mostrá-los com uma f-string", standard: "convertendo o input num número com float() ou int() antes de fazer contas" },
    { id: "O3", condition: "Com uma regra que tem dois ou mais resultados", action: "escrever um bloco if, elif e else que escolhe o resultado certo", standard: "com os sinais de comparação, os dois pontos e a indentação certos, dando o resultado certo para cada valor de teste" },
    { id: "O4", condition: "Com vários valores", action: "criar uma lista, acrescentar um item, ler itens pelo índice e usar len() e sum() nela", standard: "com todos os índices e resultados certos" },
    { id: "O5", condition: "Com uma lista ou uma tarefa para repetir", action: "escrever um ciclo for com um total acumulado e um ciclo while que para", standard: "com o total certo e nenhum ciclo que corre para sempre" },
    { id: "O6", condition: "Com um pequeno problema, como verificar um orçamento", action: "escrever uma função com parâmetros e um valor de retorno, chamá-la num programa completo e testá-la", standard: "com o programa a dar resultados certos para pelo menos dois inputs diferentes" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Os seus primeiros programas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abrir o Google Colab e executar a sua primeira linha",
          minutes: 5,
          goal: "Abrir um notebook do Colab, escrever uma linha de Python e executá-la.",
          text: [
            "Um programa é uma lista de instruções que um computador segue por ordem. Python é uma linguagem de programação: uma forma de escrever essas instruções que as pessoas conseguem ler. É usado em sites, dados, jogos, robôs e IA.",
            "O Google Colab é um site gratuito que executa Python no seu navegador. Não instala nada. O seu trabalho fica guardado como um notebook no seu Google Drive. Um notebook é feito de células: caixas onde escreve código e o executa.",
            "A sua primeira instrução é print. print(\"Hello, world!\") mostra as palavras que estão dentro das aspas. As aspas dizem ao Python que isto é texto e não um comando. Se escrever algo mal, o Python mostra uma mensagem de erro. Leia a última linha: ela diz o que correu mal."
          ],
          steps: ["Vá a colab.research.google.com e entre com uma conta Google.", "Escolha criar um notebook novo.", "Clique dentro da primeira célula de código e escreva: print(\"Hello, world!\")", "Carregue no botão de reprodução ao lado da célula, ou em Shift + Enter, para a executar.", "Leia o resultado por baixo da célula."],
          words: [["Programa", "uma lista de instruções que um computador segue por ordem."], ["Python", "uma linguagem de programação popular e fácil de ler."], ["Notebook", "um ficheiro do Colab feito de células onde escreve e executa código."], ["Célula", "uma caixa de um notebook com código que pode executar."], ["Mensagem de erro", "o aviso do Python de que alguma coisa no código está errada; a última linha diz o quê."]],
          slides: [
            { title: "O que é o Python", bullets: ["Uma linguagem para escrever instruções para um computador", "Usado em sites, dados, jogos e IA", "Fácil de ler, comparado com muitas linguagens"] },
            { title: "Google Colab", bullets: ["Site gratuito que executa Python no seu navegador", "Nada para instalar", "Os notebooks ficam guardados no seu Google Drive"] },
            { title: "A sua primeira linha", bullets: ["Escreva: print(\"Hello, world!\")", "Execute com o botão de reprodução ou Shift + Enter", "As palavras aparecem por baixo da célula"] },
            { title: "Os erros são normais", bullets: ["Leia a última linha do erro", "Verifique a escrita, as aspas e os parênteses", "Corrija e execute outra vez"] }
          ],
          sources: [COLAB],
          tryIt: "Abra um notebook novo do Colab. Numa célula, mostre o seu primeiro nome com print. Numa segunda célula, mostre uma frase sobre a sua comida preferida. Depois tire uma aspa de propósito, execute e leia o erro. Ponha a aspa de volta e execute outra vez.",
          youCanNow: "abrir o Google Colab, escrever uma linha print, executá-la e ler uma mensagem de erro.",
          quickCheck: [
            { objective: "O1", q: "Num notebook do Colab, o que é uma célula?", options: ["Uma pasta do Google Drive", "Uma caixa onde escreve código e o executa", "Uma mensagem de erro", "Um tipo de número"], answer: 1, why: "Um notebook é feito de células onde escreve e executa código." },
            { objective: "O1", q: "Escreveu prnt(\"Hi\") e o Python mostra um erro comprido. O que faz?", options: ["Fecha o Colab e cria uma conta nova", "Ignora e escreve mais código", "Lê a última linha do erro e corrige a escrita para print", "Apaga o notebook inteiro"], answer: 2, why: "A última linha do erro diz o que correu mal; aqui, um nome mal escrito." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Variáveis: dar um nome aos dados",
          minutes: 5,
          goal: "Guardar informações em variáveis e pedir dados ao utilizador.",
          text: [
            "Uma variável é um nome que guarda um valor, como uma caixa com etiqueta. name = \"Maya\" põe o texto Maya numa caixa chamada name. hours = 20 põe o número 20 numa caixa chamada hours. O sinal = quer dizer \"guarde isto\", e não \"é igual a\".",
            "Os valores têm tipos. Texto entre aspas é uma string (str). Números inteiros são integers (int). Números com ponto decimal são floats (float). O tipo conta: \"5\" + \"5\" dá \"55\", mas 5 + 5 dá 10.",
            "input() pede à pessoa que usa o programa para escrever alguma coisa. Devolve sempre uma string, por isso, para fazer contas, transforme-a num número: hours = float(input(\"Hours worked: \")).",
            "Uma f-string mistura texto e variáveis: print(f\"Hi {name}, you worked {hours} hours.\") O f antes das aspas e as chavetas fazem o trabalho."
          ],
          steps: ["Escolha um nome de variável curto e claro, sem espaços (use_underscores).", "Guarde um valor com =.", "Para pedir dados ao utilizador, use input(\"question: \").", "Ponha dentro de int() ou float() se precisar de um número.", "Mostre o resultado com uma f-string."],
          words: [["Variável", "um nome que guarda um valor."], ["String (str)", "texto, escrito entre aspas."], ["Integer (int)", "um número inteiro, como 7."], ["Float", "um número com ponto decimal, como 7.5."], ["input()", "pede ao utilizador para escrever algo e devolve-o como string."], ["f-string", "texto que começa com f e pode mostrar variáveis dentro de { }."]],
          slides: [
            { title: "Uma variável é uma caixa com etiqueta", bullets: ["name = \"Maya\"", "hours = 20", "= quer dizer guardar, não igual a"] },
            { title: "Três tipos comuns", bullets: ["str: texto entre aspas", "int: números inteiros", "float: números com ponto decimal"] },
            { title: "Pedir dados ao utilizador", bullets: ["input() devolve sempre texto", "hours = float(input(\"Hours worked: \"))", "Transforme o texto num número antes das contas"] },
            { title: "Mostrar com f-strings", bullets: ["print(f\"Hi {name}!\")", "Ponha as variáveis dentro das chavetas"] }
          ],
          tryIt: "Escreva um programa que pede o nome do utilizador, quanto ganha por hora e quantas horas trabalhou esta semana. Guarde cada um numa variável, multiplique o valor por hora pelas horas e mostre: Olá <nome>, ganhou <valor> esta semana.",
          youCanNow: "guardar valores em variáveis, pedir dados ao utilizador, transformar texto em números e mostrar um resultado claro.",
          quickCheck: [
            { objective: "O2", q: "De que tipo é o valor 3.75?", options: ["str", "int", "list", "float"], answer: 3, why: "Um número com ponto decimal é um float." },
            { objective: "O2", q: "Quer que o utilizador escreva quanto ganha por hora para o multiplicar pelas horas. Que linha escreve?", options: ["rate = float(input(\"Pay rate: \"))", "rate = input(\"Pay rate: \")", "print(\"Pay rate\")", "rate == input(\"Pay rate: \")"], answer: 0, why: "input() dá uma string, por isso float() transforma-a num número com que pode fazer contas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tomar decisões com if, elif e else",
          minutes: 6,
          goal: "Escrever código que faz coisas diferentes conforme uma condição.",
          text: [
            "Os programas fazem escolhas com if. Uma condição é uma pergunta que é True (verdadeiro) ou False (falso), como hours > 40. Se for True, as linhas indentadas por baixo são executadas.",
            "Sinais de comparação: == igual a (dois sinais de igual), != diferente de, > maior que, < menor que, >= pelo menos, <= no máximo. Pode juntar condições com and e or.",
            "elif quer dizer \"senão, se\": uma segunda verificação quando a primeira é False. else é executado quando nenhuma das verificações foi True. A indentação (quatro espaços) é a forma de o Python saber que linhas pertencem ao if. O Colab acrescenta-a por você depois dos dois pontos.",
            "Exemplo: if score >= 90: print(\"A\") elif score >= 80: print(\"B\") else: print(\"Keep practicing\"). Cada parte fica na sua própria linha, com o print indentado."
          ],
          steps: ["Escreva if, depois uma condição, depois dois pontos.", "Indente as linhas que devem ser executadas quando for True.", "Acrescente elif para outra verificação, se precisar.", "Acrescente else para todo o resto.", "Teste com valores que passam por cada ramo."],
          words: [["Condição", "uma pergunta cuja resposta é True ou False."], ["Booleano", "o tipo True ou False do Python."], ["Indentação", "espaços no início de uma linha que mostram a que bloco ela pertence."], ["Ramo", "um dos caminhos que uma instrução if pode seguir."]],
          slides: [
            { title: "if executa código só quando é True", bullets: ["if hours > 40:", "    print(\"Overtime!\")", "Não se esqueça dos dois pontos e da indentação"] },
            { title: "Sinais de comparação", bullets: ["== igual, != diferente", "> maior, < menor", ">= pelo menos, <= no máximo"] },
            { title: "elif e else", bullets: ["elif: verifica outra condição", "else: executado quando nada mais serviu", "O Python verifica de cima para baixo"] },
            { title: "Teste cada ramo", bullets: ["Experimente um valor para cada caminho", "Experimente o limite, como exatamente 40"] }
          ],
          tryIt: "Escreva um programa que pede uma temperatura em graus Fahrenheit. Se for 85 ou mais, mostre \"Calor: beba água.\" Se for 50 ou mais, mostre \"Dia agradável.\" Caso contrário, mostre \"Leve um casaco.\" Execute-o três vezes, com 90, 50 e 30.",
          youCanNow: "escrever blocos if, elif e else e testar cada ramo.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer o sinal !=?", options: ["Igual a", "Maior que", "Diferente de", "Guardar este valor"], answer: 2, why: "!= quer dizer diferente de; == quer dizer igual a." },
            { objective: "O3", q: "Quer mostrar \"Bilhete grátis\" se a idade for menor que 5 ou pelo menos 65. Que condição usa?", options: ["if age < 5 and age >= 65:", "if age < 5 or age >= 65:", "if age = 5 or 65:", "if age > 5 or age < 65:"], answer: 1, why: "or torna a condição True quando qualquer uma das partes é True; nenhuma idade é ao mesmo tempo menor que 5 e pelo menos 65." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Os seus primeiros programas",
        questions: [
          { objective: "O1", q: "O que faz print(\"Hello\")?", options: ["Guarda um ficheiro chamado Hello", "Envia Hello para uma impressora", "Mostra a palavra Hello por baixo da célula", "Apaga a célula"], answer: 2, why: "print mostra texto como resultado." },
          { objective: "O1", q: "O seu código mostra um erro. Onde olha primeiro?", options: ["Na última linha da mensagem de erro", "Na primeira palavra do notebook", "No seu Google Drive", "No histórico do navegador"], answer: 0, why: "A última linha de um erro do Python diz o que correu mal." },
          { objective: "O2", q: "Executa age = input(\"Age: \") e escreve 16. De que tipo é age?", options: ["int", "float", "Booleano", "str (texto)"], answer: 3, why: "input() devolve sempre uma string; use int() para a transformar num número." },
          { objective: "O3", q: "Que linha verifica corretamente se hours é mais do que 40?", options: ["if hours = 40", "if hours > 40:", "if hours more 40", "hours > 40 if:"], answer: 1, why: "if, a condição e depois dois pontos." },
          { objective: "O3", q: "Quando é executada a parte else?", options: ["Sempre, em primeiro lugar", "Só quando nenhuma das condições if ou elif foi True", "Só quando o if foi True", "Nunca"], answer: 1, why: "else apanha todos os casos que as verificações anteriores não apanharam." }
        ]
      }
    },
    {
      name: "Capítulo 2: Programas que repetem e se lembram",
      lessons: [
        {
          objectives: ["O4"],
          title: "Listas: guardar muitos valores juntos",
          minutes: 5,
          goal: "Criar uma lista, acrescentar-lhe itens e ler itens dela.",
          text: [
            "Uma lista guarda muitos valores por ordem, dentro de parênteses retos: prices = [3.50, 12.00, 6.25]. Uma lista também pode guardar texto: chores = [\"dishes\", \"laundry\"].",
            "Cada item tem um número de posição chamado índice. O Python conta a partir de 0, por isso prices[0] é o primeiro item (3.50) e prices[-1] é o último.",
            "Ferramentas úteis das listas: prices.append(4.99) acrescenta um item no fim. len(prices) diz quantos itens há. sum(prices) soma uma lista de números. \"dishes\" in chores é True se o item estiver na lista."
          ],
          steps: ["Faça uma lista com parênteses retos e vírgulas.", "Leia um item com list_name[index], a começar em 0.", "Acrescente com .append(value).", "Conte os itens com len().", "Some os números com sum()."],
          words: [["Lista", "um grupo ordenado de valores dentro de parênteses retos."], ["Índice", "a posição de um item numa lista, a começar em 0."], ["append", "acrescenta um item no fim de uma lista."], ["len()", "dá o número de itens."]],
          slides: [
            { title: "Uma lista guarda muitos valores", bullets: ["prices = [3.50, 12.00, 6.25]", "chores = [\"dishes\", \"laundry\"]"] },
            { title: "A contagem começa em 0", bullets: ["prices[0] é o primeiro item", "prices[-1] é o último item"] },
            { title: "Ferramentas das listas", bullets: ["append() acrescenta no fim", "len() conta os itens", "sum() soma os números", "in verifica se um item está lá"] }
          ],
          tryIt: "Faça uma lista de três coisas que precisa de comprar, com os preços numa segunda lista. Acrescente mais um item e o seu preço. Mostre quantos itens há, o primeiro item e o total dos preços com sum().",
          youCanNow: "criar uma lista, ler itens pelo índice, acrescentar itens e contá-los ou somá-los.",
          quickCheck: [
            { objective: "O4", q: "O que é um índice numa lista?", options: ["O número da posição de um item, a começar em 0", "O total da lista", "O nome da lista", "Só o último item"], answer: 0, why: "Cada item tem um índice, e o Python conta a partir de 0." },
            { objective: "O4", q: "chores = [\"dishes\", \"laundry\"]. Quer verificar se \"laundry\" está na lista. O que escreve?", options: ["len(\"laundry\")", "chores[\"laundry\"]", "sum(chores)", "\"laundry\" in chores"], answer: 3, why: "\"laundry\" in chores é True se o item estiver na lista." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ciclos: repetir passos sem escrever tudo outra vez",
          minutes: 6,
          goal: "Usar um ciclo for para percorrer uma lista e um ciclo while para repetir até acabar.",
          text: [
            "Um ciclo repete código. Um ciclo for é executado uma vez para cada item de uma lista: for price in prices: print(price). Em cada volta, a variável price guarda o item seguinte.",
            "range() faz uma série de números para contar: for i in range(5) é executado cinco vezes, com i = 0, 1, 2, 3, 4.",
            "Um total acumulado é um padrão comum: comece com total = 0 antes do ciclo e depois some total = total + price dentro dele (ou total += price). Depois do ciclo, total guarda a soma.",
            "Um ciclo while repete enquanto uma condição for True, por exemplo while answer != \"done\". Garanta que alguma coisa dentro do ciclo muda a condição, senão ele corre para sempre. No Colab, carregue no botão de parar para terminar um ciclo que não para."
          ],
          steps: ["Decida o que se repete.", "Para cada item de uma lista, use: for item in my_list:", "Indente o código que se repete.", "Para um total, ponha total = 0 antes do ciclo e some dentro dele.", "Num ciclo while, garanta que a condição pode ficar False."],
          words: [["Ciclo", "código que se repete (também se diz \"loop\")."], ["Ciclo for", "repete uma vez para cada item de uma lista ou de um range."], ["Ciclo while", "repete enquanto uma condição for True."], ["range()", "faz uma série de números, a começar em 0 se não disser outra coisa."], ["Total acumulado", "uma variável à qual vai somando dentro de um ciclo."]],
          slides: [
            { title: "for: uma vez por item", bullets: ["for price in prices:", "    print(price)", "price guarda o item seguinte em cada volta"] },
            { title: "Contar com range", bullets: ["for i in range(5): é executado 5 vezes", "i vai de 0, 1, 2, 3, 4"] },
            { title: "O padrão do total acumulado", bullets: ["total = 0 antes do ciclo", "total += price dentro do ciclo", "Mostre total depois do ciclo"] },
            { title: "while: até uma condição mudar", bullets: ["Repete enquanto a condição for True", "Mude algo lá dentro, senão nunca acaba", "O botão de parar termina um ciclo preso"] }
          ],
          tryIt: "Escreva um ciclo while que continua a pedir \"Acrescente um preço (ou escreva done): \". Acrescente cada número a uma lista. Quando o utilizador escrever done, use um ciclo for e um total acumulado para somar os preços e mostre o total.",
          youCanNow: "repetir código com ciclos for e while e manter um total acumulado.",
          quickCheck: [
            { objective: "O5", q: "Que números dá range(4)?", options: ["1, 2, 3, 4", "0, 1, 2, 3", "0, 1, 2, 3, 4", "Só o 4"], answer: 1, why: "range(4) conta a partir de 0 e para antes do 4." },
            { objective: "O5", q: "O seu ciclo soma preços, mas total volta sempre a 0. Para onde muda total = 0?", options: ["Para dentro do ciclo", "Para depois do ciclo", "Para antes do ciclo", "Para uma linha print"], answer: 2, why: "Ponha total = 0 uma vez antes do ciclo e depois some dentro dele." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Funções: embalar código para usar outra vez",
          minutes: 6,
          goal: "Escrever uma função com inputs e um valor de retorno e depois usá-la num programa completo.",
          text: [
            "Uma função é um bloco de código com nome que pode executar sempre que precisar. Já usou algumas que vêm com o Python: print(), len(), sum(). Agora vai escrever as suas com def.",
            "def check_budget(prices, budget): começa uma função com dois parâmetros, os inputs de que ela precisa. Lá dentro, faz o trabalho. return envia um resultado de volta para quem a chamou.",
            "Chamar a função executa-a: result = check_budget([3.5, 12, 6.25], 25). Uma boa função faz um só trabalho e tem um nome que diz que trabalho é esse.",
            "Juntar tudo: a tarefa final usa tudo o que aprendeu neste curso. Planeie-a primeiro com palavras simples (pedir o orçamento, somar os preços, comparar, mostrar), depois transforme cada linha em código e teste-o com dois orçamentos."
          ],
          steps: ["Escreva o plano com palavras simples, como comentários que começam com #.", "Comece a função com def name(parameters):", "Indente o corpo; use um ciclo e um if lá dentro.", "Use return para devolver um resultado, ou print lá dentro.", "Chame a função e teste-a com inputs diferentes."],
          words: [["Função", "um bloco de código com nome que pode executar muitas vezes."], ["def", "a palavra que começa uma função nova."], ["Parâmetro", "um input de que uma função precisa, com o nome escrito entre os seus parênteses."], ["return", "devolve um valor de dentro de uma função."], ["Comentário", "uma nota no código que começa com #; o Python ignora-a."]],
          slides: [
            { title: "Porquê usar funções", bullets: ["Escreva o código uma vez e use-o muitas vezes", "Um só trabalho por função", "Um nome claro diz o que ela faz"] },
            { title: "Escrever uma função", bullets: ["def check_budget(prices, budget):", "Indente o corpo", "return devolve um resultado"] },
            { title: "Chamar uma função", bullets: ["check_budget([3.5, 12, 6.25], 25)", "Experimente inputs diferentes para a testar"] },
            { title: "Plano da tarefa final", bullets: ["Peça o orçamento com input()", "Some os preços com um ciclo", "Compare com if e mostre o resultado"] }
          ],
          tryIt: "Tarefa final: escreva check_budget(prices, budget). Lá dentro, use um ciclo para somar os preços e depois mostre o total e \"Abaixo do orçamento em X\" ou \"Acima do orçamento em X\". Peça o orçamento ao utilizador com float(input()), chame a função com a sua lista de compras e teste-a com um orçamento alto e um baixo.",
          youCanNow: "escrever e chamar a sua própria função e juntar variáveis, input, if, listas e ciclos num programa que funciona.",
          quickCheck: [
            { objective: "O6", q: "O que são os parâmetros de uma função?", options: ["Mensagens de erro", "Ciclos dentro da função", "O nome da função", "Os inputs de que a função precisa"], answer: 3, why: "Os parâmetros, como prices e budget, são os inputs de que uma função precisa." },
            { objective: "O6", q: "Antes de escrever o verificador do orçamento, o que faz primeiro?", options: ["Planeia com palavras simples: pedir o orçamento, somar os preços, comparar, mostrar", "Escreve o máximo de código possível e espera que funcione", "Escreve só o nome da função", "Testa-o sem orçamento"], answer: 0, why: "Planear primeiro com palavras simples torna fácil transformar cada linha em código." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Programas que repetem e se lembram",
        questions: [
          { objective: "O4", q: "colors = [\"red\", \"blue\", \"green\"]. O que é colors[0]?", options: ["\"blue\"", "\"green\"", "Um erro", "\"red\""], answer: 3, why: "O Python conta as posições da lista a partir de 0, por isso o índice 0 é o primeiro item." },
          { objective: "O4", q: "Que linha acrescenta 4.99 no fim da lista prices?", options: ["prices.append(4.99)", "prices + 4.99", "append.prices(4.99)", "prices[4.99]"], answer: 0, why: "append acrescenta um item no fim de uma lista." },
          { objective: "O5", q: "Quantas vezes é executado for i in range(3):?", options: ["2", "4", "3", "Para sempre"], answer: 2, why: "range(3) dá 0, 1 e 2: três vezes." },
          { objective: "O5", q: "O seu ciclo while nunca para. Qual é a causa mais provável?", options: ["Usou uma lista", "O Colab está sem internet", "Usou print", "Nada dentro do ciclo faz a condição ficar False"], answer: 3, why: "Um ciclo while só acaba quando a sua condição fica False." },
          { objective: "O6", q: "O que faz return dentro de uma função?", options: ["Apaga a função", "Reinicia o Colab", "Devolve um valor para o lugar onde a função foi chamada", "Mostra um erro"], answer: 2, why: "return entrega o resultado a quem chamou a função." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à Programação com Python",
    questions: [
      { objective: "O1", q: "O que é um programa?", options: ["Um tipo de ecrã de computador", "Uma lista de instruções que um computador segue por ordem", "O endereço de um site", "Uma conta Google"], answer: 1, why: "Um programa é um conjunto de instruções executadas por ordem." },
      { objective: "O1", q: "Porque é que o Google Colab é prático para quem está a começar?", options: ["Executa Python no navegador sem nada para instalar", "Só funciona sem internet", "Escreve o código todo por você", "Precisa de uma licença paga"], answer: 0, why: "O Colab é um notebook gratuito na internet; não instala nada." },
      { objective: "O1", q: "Como executa uma célula de código no Colab?", options: ["Fecha o separador", "Escreve run no topo da página", "Carrega no botão de reprodução ou em Shift + Enter", "Envia-a por e-mail para si mesmo"], answer: 2, why: "O botão de reprodução ou Shift + Enter executa a célula." },
      { objective: "O1", q: "Que linha mostra o texto Good job?", options: ["print(\"Good job\")", "print(Good job)", "print \"Good job\"", "say(\"Good job\")"], answer: 0, why: "O texto vai entre aspas, dentro dos parênteses do print." },
      { objective: "O2", q: "Em Python, o que faz o = em pay = 15?", options: ["Verifica se pay é igual a 15", "Mostra 15", "Apaga pay", "Guarda 15 na variável pay"], answer: 3, why: "Um só = guarda um valor; == compara." },
      { objective: "O2", q: "Quanto dá \"5\" + \"5\"?", options: ["10", "\"55\"", "Um erro, sempre", "5"], answer: 1, why: "Duas strings juntas dão \"55\"." },
      { objective: "O2", q: "Precisa de fazer contas com o que o utilizador escreve. Que linha está certa?", options: ["hours = input(\"Hours: \") * 2", "hours = float(input(\"Hours: \"))", "hours = print(\"Hours\")", "hours = text(input())"], answer: 1, why: "input dá texto; float() transforma-o num número." },
      { objective: "O2", q: "name = \"Ana\". Qual mostra Hi Ana?", options: ["print(\"Hi {name}\")", "print(Hi name)", "print(f(Hi name))", "print(f\"Hi {name}\")"], answer: 3, why: "O f antes das aspas deixa {name} mostrar a variável." },
      { objective: "O3", q: "Que sinal quer dizer \"é igual a\" numa condição?", options: ["==", "=", "=>", "!="], answer: 0, why: "== compara; = guarda." },
      { objective: "O3", q: "O que tem de vir no fim de uma linha if?", options: ["Um ponto e vírgula", "Um ponto final", "Dois pontos", "Nada"], answer: 2, why: "As linhas if, elif, else, for, while e def acabam com dois pontos." },
      { objective: "O3", q: "score = 85. Que ramo é executado? if score >= 90 / elif score >= 80 / else", options: ["O if", "O else", "Nenhum deles", "O elif"], answer: 3, why: "85 não é 90 ou mais, mas é 80 ou mais, por isso o elif é executado." },
      { objective: "O3", q: "Como sabe o Python que linhas pertencem a um if?", options: ["Pela cor do texto", "Pelas letras maiúsculas", "Pela indentação", "Pelos números das linhas"], answer: 2, why: "As linhas indentadas por baixo do if são o seu bloco." },
      { objective: "O4", q: "nums = [4, 8, 2]. Quanto dá len(nums)?", options: ["2", "3", "8", "14"], answer: 1, why: "len conta os itens; há três." },
      { objective: "O4", q: "nums = [4, 8, 2]. Quanto dá sum(nums)?", options: ["3", "8", "14", "482"], answer: 2, why: "sum soma os números: 4 + 8 + 2 = 14." },
      { objective: "O4", q: "O que é prices[-1]?", options: ["O primeiro item", "Um erro", "O último item", "Menos o primeiro preço"], answer: 2, why: "O índice -1 quer dizer o último item." },
      { objective: "O5", q: "Quer somar uma lista num ciclo. O que vem antes do ciclo?", options: ["total = 0", "return total", "print(total)", "def total"], answer: 0, why: "Um total acumulado começa em 0 antes do ciclo." },
      { objective: "O5", q: "O que faz for chore in chores:?", options: ["Apaga a lista", "É executado só uma vez", "Ordena a lista", "É executado uma vez para cada item de chores"], answer: 3, why: "Um ciclo for passa por cada item, por ordem." },
      { objective: "O6", q: "Que palavra começa uma função nova?", options: ["func", "def", "new", "make"], answer: 1, why: "def define uma função." },
      { objective: "O6", q: "Em def check_budget(prices, budget):, o que são prices e budget?", options: ["Erros", "Parâmetros: os inputs de que a função precisa", "Listas de funções", "Comentários"], answer: 1, why: "Os nomes dentro dos parênteses são os parâmetros." },
      { objective: "O6", q: "Escreveu um verificador do orçamento. Qual é a melhor forma de o testar?", options: ["Executá-lo uma vez e esperar que esteja bem", "Apagar os comentários", "Partilhá-lo antes de o executar", "Executá-lo com um orçamento alto e um baixo e verificar os dois resultados"], answer: 3, why: "Testar com inputs diferentes verifica que cada ramo funciona." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      6,
      8,
      10,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Função",
        objective: "O6",
        notYet: "Não há função, ou ela não recebe os preços e um orçamento.",
        meets: "Uma função com parâmetros para os preços e o orçamento, que devolve ou mostra o resultado.",
        exceeds: "A função tem um nome claro, faz um só trabalho e usa return."
      },
      {
        name: "Ciclo e total",
        objective: "O5",
        notYet: "O total está errado ou não se usa nenhum ciclo.",
        meets: "Um ciclo for soma os preços num total acumulado que começa em 0.",
        exceeds: "Também mostra quantos itens foram verificados, usando len()."
      },
      {
        name: "Decisão",
        objective: "O3",
        notYet: "O programa não diz Abaixo do orçamento nem Acima do orçamento, ou diz o errado.",
        meets: "if e else mostram a mensagem certa com a diferença.",
        exceeds: "Também trata o caso de ficar exatamente no orçamento com elif."
      },
      {
        name: "Input",
        objective: "O2",
        notYet: "O orçamento não é pedido, ou é usado como texto e as contas falham.",
        meets: "input() pede o orçamento e float() transforma-o num número.",
        exceeds: "Mostra o resultado com uma f-string fácil de ler."
      },
      {
        name: "Testes",
        objective: "O6",
        notYet: "O programa foi executado uma vez ou nenhuma.",
        meets: "Executado com dois orçamentos diferentes, e os dois resultados estão certos.",
        exceeds: "Também testado com um orçamento exatamente igual ao total, ou com uma lista vazia."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do verificador do orçamento",
      "Alunos que dizem ter escrito outro programa em Python seu nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que seguem para um próximo curso, como Programação de IA com Python ou Ciência de Dados para Principiantes",
      "Alunos que entram num clube de programação, numa aula, num estágio ou num programa de formação depois do curso"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou portátil com navegador de internet",
      "Uma conta Google gratuita para usar o Google Colab",
      "Papel e caneta para planear o programa com palavras simples",
      "Cerca de 60 a 75 minutos no total, mais o tempo de prática"
    ],
    facilitatorNotes: [
      "Antes da aula, confirme que cada aluno consegue entrar no Google Colab; as contas da escola às vezes bloqueiam-no, por isso tenha prontas contas pessoais ou outro notebook de Python gratuito.",
      "Incentive os alunos a escrever o código eles mesmos em vez de copiar e colar, e a ler as mensagens de erro em voz alta, juntos.",
      "Use a programação em pares: um escreve, o outro lê e verifica, e trocam em cada lição.",
      "Celebre os erros como parte da programação; mostre no ecrã como corrige um erro seu.",
      "Para a tarefa final, dê exemplos de listas de preços e de orçamentos para os alunos compararem os seus resultados com os seus."
    ]
  }
};
