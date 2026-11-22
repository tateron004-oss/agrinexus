"use strict";

// Koach Learn course (Portuguese translation of shared/ai-programming-python.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Python code, model names and the English example sentences fed to the English-only model stay exactly as in the English course.

const COLAB = { name: "Google Colab: Perguntas frequentes", url: "https://research.google.com/colaboratory/faq.html" };
const HF_PIPELINES = { name: "Hugging Face Transformers: Pipelines", url: "https://huggingface.co/docs/transformers/en/main_classes/pipelines" };
const HF_MODEL = { name: "Hugging Face: ficha do modelo distilbert-base-uncased-finetuned-sst-2-english", url: "https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english" };

module.exports = {
  id: "ai-programming-python-pt",
  lang: "pt",
  translationOf: "ai-programming-python",
  category: "Youth",
  name: "Programação de IA com Python para Principiantes",
  skills: "Usar bibliotecas de Python no Colab, Criar um chatbot com regras, Carregar um modelo de IA pré-treinado, Usar a IA em muitos textos, Verificar os resultados da IA",
  outcome: "escrever um programa em Python no Google Colab que usa um modelo de IA gratuito e pré-treinado para separar uma lista de comentários escritos em positivos e negativos, mostra um resumo e marca os resultados em que a IA não tem certeza para uma pessoa verificar.",
  about: [
    "Este curso é para principiantes que já sabem um pouco de Python (variáveis, if, listas e ciclos) e querem fazer um programa que usa IA. Se nunca programou, faça primeiro o curso \"Introdução à Programação com Python\".",
    "Vai começar por criar um chatbot simples com regras de Python, para ver o que um programa consegue fazer sem IA. Depois vai carregar um modelo de IA gratuito e pré-treinado do Hugging Face e usá-lo para ler o tom de comentários escritos, o mesmo tipo de ferramenta que as empresas usam em avaliações e inquéritos.",
    "Tudo funciona no Google Colab, no seu navegador, de graça. Cada lição dura cerca de cinco minutos e termina com código que você mesmo escreve. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Crie um separador de opiniões no Google Colab: escreva uma lista de pelo menos seis comentários curtos (por exemplo sobre um treino da equipa, uma aula ou uma pequena loja), use um modelo de sentimento pré-treinado em cada um, mostre cada comentário com a sua etiqueta e pontuação, marque qualquer resultado com pontuação abaixo de 0.80 como \"verificar à mão\" e mostre quantos comentários foram positivos e quantos negativos.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos que já escreveram um pouco de Python e querem criar alguma coisa com IA: alunos do ensino secundário e superior, membros de clubes de programação, pessoas a mudar de profissão e formandos de programas de emprego.",
    startingPoint: "Sabem escrever e executar pequenos programas em Python no Google Colab com variáveis, if, listas, ciclos e funções. A maioria nunca importou uma biblioteca de IA, nunca usou um modelo pré-treinado e nunca pensou em quanta certeza um modelo tem ou quando uma pessoa deve verificar as respostas dele.",
    gap: "As ferramentas de IA já fazem parte de muitos trabalhos e produtos, e os empregadores valorizam quem as sabe usar em código e verificar com responsabilidade. Sem prática, os alunos acham que a IA é magia ou que está fora do seu alcance, e não aprendem a testar os limites de um modelo nem a proteger os dados privados.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; termos como biblioteca, modelo, pontuação e limiar são explicados",
      "Aparelhos: um computador ou portátil com navegador de internet; num tablet é difícil escrever código",
      "Contas e custo: uma conta Google gratuita para o Google Colab e modelos gratuitos do Hugging Face; os recursos gratuitos do Colab são limitados e podem mudar",
      "Tempo: cerca de 5 a 6 minutos por lição mais a prática, cerca de 60 a 75 minutos no total",
      "Privacidade: os alunos usam comentários inventados ou autorizados e nunca colam palavras-passe nem chaves de API num caderno partilhado"
    ],
    prerequisites: "Introdução à Programação com Python (variáveis, if, listas, ciclos e funções)."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "No Google Colab", action: "explicar a diferença entre um modelo de IA e código com regras, e importar ou instalar uma biblioteca de Python", standard: "com uma explicação certa numa frase e a biblioteca a carregar sem erros" },
    { id: "O2", condition: "Com palavras-chave e respostas para um chatbot simples", action: "usar ferramentas de texto e um dicionário para ligar uma mensagem à resposta certa", standard: "com as palavras a corresponder com ou sem maiúsculas e uma resposta padrão quando nada corresponde" },
    { id: "O3", condition: "Com a sua função de resposta", action: "escrever um ciclo de conversa que termina quando o utilizador diz bye e descrever os limites das respostas com regras", standard: "com o ciclo a terminar com bye e pelo menos um exemplo que as regras não conseguem tratar" },
    { id: "O4", condition: "Usando o pipeline do Hugging Face", action: "carregar um modelo de sentimento pré-treinado, usá-lo numa frase e ler a sua etiqueta e pontuação", standard: "depois de ler a ficha do modelo, com a etiqueta e a pontuação lidas corretamente" },
    { id: "O5", condition: "Com uma lista de comentários", action: "usar o modelo em cada comentário dentro de um ciclo, contar as etiquetas e mostrar um resumo arrumado", standard: "com as contagens iguais às etiquetas e as pontuações arredondadas a duas casas decimais" },
    { id: "O6", condition: "Com os resultados do modelo", action: "marcar os resultados abaixo de um limiar de confiança para uma pessoa verificar e seguir bons hábitos de uso responsável da IA", standard: "com todas as pontuações abaixo do limiar marcadas \"verificar à mão\" e nenhum dado privado nem chave no caderno" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Peças de Python para a IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é programar com IA, e preparar o Colab",
          minutes: 5,
          goal: "Explicar o que é um modelo de IA e importar uma biblioteca de Python no Colab.",
          text: [
            "Na programação normal, você escreve todas as regras: se a palavra for \"hi\", diga \"hello\". Na programação com IA, você usa um modelo: um programa que aprendeu padrões a partir de muitos exemplos e por isso consegue tratar casos para os quais você nunca escreveu uma regra.",
            "Quase nunca se cria um modelo do zero. Usa-se uma biblioteca: código pronto que outra pessoa escreveu e partilhou. Em Python, carrega-se uma biblioteca com import. Algumas bibliotecas de IA gratuitas conhecidas são o Hugging Face Transformers (modelos de linguagem), o scikit-learn (aprendizagem automática clássica) e o PyTorch (aprendizagem profunda).",
            "O Google Colab já tem muitas destas bibliotecas. Se faltar uma, instale-a numa célula com !pip install seguido do nome dela. O ! diz ao Colab para executar um comando do sistema em vez de Python. O Colab é gratuito, mas os computadores são partilhados, por isso os recursos gratuitos são limitados e podem mudar."
          ],
          steps: ["Abra colab.research.google.com e crie um caderno novo.", "Numa célula, escreva: import random", "Na linha seguinte: print(random.choice([\"rock\", \"paper\", \"scissors\"]))", "Execute algumas vezes e veja a resposta mudar.", "Se um import falhar com \"No module named\", execute !pip install <name> numa célula e tente outra vez."],
          words: [["Modelo de IA", "um programa que aprendeu padrões a partir de muitos exemplos e consegue adivinhar sobre dados novos."], ["Biblioteca", "código pronto que pode carregar e usar no seu próprio programa."], ["import", "a palavra de Python que carrega uma biblioteca."], ["pip", "a ferramenta que instala bibliotecas de Python."], ["Com regras", "um programa em que uma pessoa escreveu todas as regras à mão."], ["Caderno (notebook)", "o documento do Colab onde escreve e executa código, em células."]],
          slides: [
            { title: "Regras ou modelos", bullets: ["Com regras: você escreve todas as regras", "Modelo de IA: aprendeu padrões com exemplos", "Os modelos tratam casos que você nunca escreveu"] },
            { title: "As bibliotecas fazem o trabalho pesado", bullets: ["import carrega código pronto", "Transformers, scikit-learn, PyTorch", "Todas gratuitas"] },
            { title: "Preparar o Colab", bullets: ["Muitas bibliotecas já instaladas", "Falta uma? !pip install <name>", "Os recursos gratuitos são limitados e podem mudar"] }
          ],
          sources: [COLAB],
          tryIt: "Num caderno novo do Colab, importe a biblioteca random e escreva um programa que escolhe ao acaso um exercício, um lanche ou um tema de estudo de uma lista de cinco e o mostra. Execute-o três vezes.",
          youCanNow: "explicar a diferença entre código com regras e um modelo de IA, e importar uma biblioteca no Colab.",
          quickCheck: [
            { objective: "O1", q: "O que é uma biblioteca em Python?", options: ["Uma lista dos seus cadernos guardados", "Uma pasta do Google Drive", "Código pronto que outra pessoa escreveu e partilhou", "Uma mensagem de erro"], answer: 2, why: "Uma biblioteca é código pronto e partilhado que se carrega com import." },
            { objective: "O1", q: "Quer usar o scikit-learn mas não sabe se o Colab o tem. O que experimenta primeiro?", options: ["Executar import sklearn e, se disser \"No module named\", executar !pip install scikit-learn", "Escrever a biblioteca você mesmo", "Apagar o caderno", "Escrever o nome da biblioteca dentro de print()"], answer: 0, why: "O Colab já tem muitas bibliotecas; instale com !pip só se o import falhar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Textos e dicionários: o cérebro de um chatbot simples",
          minutes: 6,
          goal: "Usar um dicionário para ligar palavras-chave de uma mensagem a respostas.",
          text: [
            "Os programas de IA trabalham com muito texto, por isso precisa de algumas ferramentas de texto (strings). message.lower() põe o texto em minúsculas, para \"HELLO\" e \"hello\" serem iguais. \"hours\" in message dá True se a palavra aparecer em qualquer parte da mensagem. message.split() parte uma frase numa lista de palavras.",
            "Um dicionário guarda pares: uma chave e um valor, dentro de chavetas. replies = {\"hours\": \"We are open 9 to 5.\", \"price\": \"Prices are on our menu page.\"} Obtém um valor com replies[\"hours\"].",
            "Para criar o cérebro do chatbot, percorra o dicionário com um ciclo: for keyword, answer in replies.items(): if keyword in message: return answer. Se nada corresponder, devolva uma resposta padrão como \"Sorry, I do not know that yet.\" (\"Desculpe, ainda não sei isso.\")."
          ],
          steps: ["Crie um dicionário de palavras-chave e respostas.", "Escreva uma função reply(message).", "Dentro dela, faça message = message.lower().", "Percorra replies.items() e devolva a resposta da primeira palavra-chave encontrada.", "Depois do ciclo, devolva uma resposta padrão."],
          words: [["String", "texto em Python."], ["Dicionário", "um conjunto de pares chave: valor dentro de chavetas."], ["Chave", "a etiqueta que procura num dicionário."], ["Valor", "o que está guardado debaixo de uma chave."], [".items()", "dá cada chave e cada valor de um dicionário, para usar num ciclo."]],
          slides: [
            { title: "Ferramentas de texto", bullets: ["lower(): \"HELLO\" passa a \"hello\"", "\"hours\" in message: True ou False", "split(): uma frase passa a uma lista de palavras"] },
            { title: "Dicionários", bullets: ["{\"hours\": \"Open 9 to 5.\"}", "Procure com replies[\"hours\"]", "Chaves à esquerda, valores à direita"] },
            { title: "O cérebro do chatbot", bullets: ["Ponha a mensagem em minúsculas", "Percorra replies.items()", "Devolva a primeira correspondência ou uma resposta padrão"] }
          ],
          tryIt: "Escreva reply(message) para um ginásio, uma biblioteca ou uma carrinha de comida a fingir, com pelo menos quatro palavras-chave (por exemplo hours, price, location, contact). Teste com três mensagens, uma escrita em maiúsculas e uma que ele não deve entender.",
          youCanNow: "usar ferramentas de texto e um dicionário para ligar uma mensagem à resposta certa.",
          quickCheck: [
            { objective: "O2", q: "O que dá \"I need help now\".split()?", options: ["\"i need help now\"", "[\"I\", \"need\", \"help\", \"now\"]", "True", "4"], answer: 1, why: "split() parte uma frase numa lista de palavras." },
            { objective: "O2", q: "O seu chatbot não encontra nenhuma palavra-chave na mensagem. O que deve ele fazer?", options: ["Parar com um erro", "Mostrar todas as respostas do dicionário", "Parar o programa", "Devolver uma resposta padrão como \"Sorry, I do not know that yet.\""], answer: 3, why: "Uma resposta padrão trata as mensagens que não correspondem a nenhuma palavra-chave." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pôr o chatbot a conversar, e ver os seus limites",
          minutes: 5,
          goal: "Pôr a sua função de resposta num ciclo que conversa até o utilizador dizer bye, e ver o que as regras não conseguem fazer.",
          text: [
            "Um chatbot precisa de um ciclo: pedir uma mensagem, mostrar a resposta e repetir. while True: repete para sempre, por isso acrescenta uma saída: se a mensagem for \"bye\", mostre uma despedida e use break para sair do ciclo.",
            "Agora teste-o como um utilizador verdadeiro faria. Escreva \"when do you open?\" (\"a que horas abrem?\") e o seu bot pode falhar, porque você escreveu \"hours\", não \"open\". Cada nova maneira de dizer uma coisa precisa de uma regra nova. Este é o principal limite dos programas com regras.",
            "É exatamente por isso que os modelos de IA são úteis: um modelo de linguagem aprendeu com milhões de frases, por isso consegue entender muitas maneiras de dizer a mesma coisa. No próximo capítulo vai usar um."
          ],
          steps: ["Comece com while True:", "Dentro, obtenha message = input(\"You: \")", "Se message.lower() == \"bye\", mostre uma despedida e faça break.", "Senão, print(\"Bot:\", reply(message)).", "Teste com cinco maneiras diferentes de fazer a mesma pergunta."],
          words: [["while True", "um ciclo que continua até alguma coisa dentro dele o parar."], ["break", "sai de um ciclo imediatamente."], ["Limite", "uma coisa que um programa não consegue fazer bem."]],
          slides: [
            { title: "O ciclo de conversa", bullets: ["while True: continua a conversar", "input() recebe a mensagem", "break termina a conversa com \"bye\""] },
            { title: "Teste como um utilizador verdadeiro", bullets: ["Pergunte a mesma coisa de cinco maneiras", "Conte quantas o bot acerta"] },
            { title: "Porque as regras batem numa parede", bullets: ["Cada nova maneira de dizer precisa de uma regra nova", "Os modelos de IA aprenderam com milhões de frases", "É isso que o Capítulo 2 usa"] }
          ],
          tryIt: "Ponha a sua função de resposta da Lição 2 num ciclo de conversa que termina com \"bye\". Pergunte pelo horário de cinco maneiras diferentes. Anote quantas o bot entendeu e depois acrescente uma regra para corrigir uma falha.",
          youCanNow: "criar um ciclo de chatbot com regras que funciona e explicar porque as regras sozinhas são limitadas.",
          quickCheck: [
            { objective: "O3", q: "O que faz while True: sozinho?", options: ["Repete para sempre até algo como break o parar", "Executa só uma vez", "Executa só se o utilizador disser bye", "Carrega uma biblioteca"], answer: 0, why: "while True repete para sempre, por isso precisa de uma saída como break." },
            { objective: "O3", q: "Os utilizadores escrevem \"what time do you close?\" e o seu bot com regras falha. O que isto lhe diz?", options: ["O bot tem um erro de escrita", "O Colab está avariado", "Cada nova maneira de dizer uma coisa precisa de uma regra nova, que é o limite dos bots com regras", "Os utilizadores devem escrever em maiúsculas"], answer: 2, why: "Os bots com regras só reconhecem as regras que você escreveu; os modelos de linguagem tratam mais maneiras de dizer as coisas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Peças de Python para a IA",
        questions: [
          { objective: "O1", q: "Qual é a principal diferença entre código com regras e um modelo de IA?", options: ["O código com regras é sempre mais rápido", "Os modelos não usam código nenhum", "Um modelo aprendeu padrões com exemplos em vez de ter todas as regras escritas à mão", "Não há diferença"], answer: 2, why: "Os modelos aprendem padrões com dados; o código com regras precisa de todas as regras escritas." },
          { objective: "O1", q: "A sua célula do Colab diz \"No module named\" e o nome de uma biblioteca. O que faz?", options: ["Executa !pip install com o nome da biblioteca e depois faz o import outra vez", "Reinicia o computador", "Apaga o caderno", "Muda o nome da variável"], answer: 0, why: "O pip instala uma biblioteca que falta." },
          { objective: "O2", q: "replies = {\"hours\": \"Open 9 to 5.\"}. O que é replies[\"hours\"]?", options: ["\"hours\"", "Um erro", "True", "\"Open 9 to 5.\""], answer: 3, why: "Procurar uma chave dá o seu valor." },
          { objective: "O2", q: "Porque usar message.lower() num chatbot?", options: ["Para encurtar o texto", "Para \"HOURS\" e \"hours\" corresponderem", "Para apagar a mensagem", "Para a traduzir"], answer: 1, why: "Pôr em minúsculas faz a correspondência ignorar as maiúsculas." },
          { objective: "O3", q: "Que palavra sai de um ciclo while True?", options: ["exit", "break", "stop", "return to"], answer: 1, why: "break sai do ciclo imediatamente." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar um modelo de IA pré-treinado",
      lessons: [
        {
          objectives: ["O4"],
          title: "Carregar um modelo pré-treinado com o Hugging Face",
          minutes: 6,
          goal: "Carregar um modelo de sentimento gratuito no Colab e usá-lo numa frase.",
          text: [
            "Um modelo pré-treinado é um modelo que alguém já treinou e partilhou, por isso pode usá-lo logo. O Hugging Face é um site que guarda milhares de modelos gratuitos, e a sua biblioteca Transformers carrega-os com uma só linha.",
            "A ferramenta mais fácil é o pipeline. Diz-lhe a tarefa e o modelo: classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\"). Este modelo lê texto em inglês e decide se o seu tom (sentimento) é POSITIVE (positivo) ou NEGATIVE (negativo).",
            "Use-o como uma função: classifier(\"The practice today was great!\"). Ele devolve uma lista com um dicionário dentro, por exemplo [{'label': 'POSITIVE', 'score': 0.99}]. A pontuação (score) diz quanta certeza o modelo tem, de 0 a 1. Da primeira vez, o modelo é descarregado, por isso demora um pouco mais.",
            "Leia sempre a página do modelo (a sua \"ficha do modelo\", em inglês \"model card\") antes de o usar: diz com que dados o modelo foi treinado, para que serve e qual é a sua licença."
          ],
          steps: ["Numa célula nova: from transformers import pipeline", "Crie classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "Execute result = classifier(\"The practice today was great!\")", "print(result[0][\"label\"], result[0][\"score\"])", "Se faltar o transformers, execute primeiro !pip install transformers."],
          words: [["Modelo pré-treinado", "um modelo que outra pessoa já treinou e que pode usar logo."], ["Hugging Face", "um site e um conjunto de bibliotecas para partilhar modelos de IA gratuitos."], ["pipeline", "uma ferramenta do Transformers que carrega um modelo para uma tarefa numa só linha."], ["Sentimento", "o tom de um texto: positivo ou negativo."], ["Pontuação (score)", "quanta certeza o modelo tem, de 0 a 1."], ["Ficha do modelo (model card)", "a página que explica o que um modelo faz, os seus dados e a sua licença."]],
          slides: [
            { title: "Modelos pré-treinados", bullets: ["Já treinados por outra pessoa", "O Hugging Face guarda milhares, gratuitos", "Leia primeiro a ficha do modelo"] },
            { title: "Uma linha para carregar", bullets: ["from transformers import pipeline", "pipeline(\"text-classification\", model=...)", "Da primeira vez o modelo é descarregado"] },
            { title: "Ler o resultado", bullets: ["[{'label': 'POSITIVE', 'score': 0.99}]", "result[0][\"label\"] é o tom", "result[0][\"score\"] é a certeza do modelo"] }
          ],
          sources: [HF_PIPELINES, HF_MODEL],
          tryIt: "Carregue o classificador de sentimento e use-o em três frases que você escreve em inglês: uma claramente feliz, uma claramente zangada e uma mista como \"The food was good but the wait was long.\" Mostre a etiqueta e a pontuação de cada uma e anote em qual o modelo teve menos certeza.",
          youCanNow: "carregar um modelo pré-treinado com pipeline e ler a sua etiqueta e pontuação.",
          quickCheck: [
            { objective: "O4", q: "O que lhe diz a ficha de um modelo?", options: ["A sua palavra-passe do Colab", "Quantos comentários tem", "O preço de um computador", "Com que dados o modelo foi treinado, para que serve e a sua licença"], answer: 3, why: "Leia a ficha do modelo antes de usar um modelo." },
            { objective: "O4", q: "Executa o classificador pela primeira vez e ele demora. O que faz?", options: ["Para e desiste", "Espera; da primeira vez o modelo é descarregado", "Instala o Python outra vez", "Muda a etiqueta para POSITIVE à mão"], answer: 1, why: "Da primeira vez o modelo é descarregado, por isso demora mais." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usar o modelo em muitos textos",
          minutes: 5,
          goal: "Usar um ciclo para classificar uma lista de comentários e contar os resultados.",
          text: [
            "Os programas verdadeiros tratam muitos textos, não só um. Ponha os comentários numa lista e faça um ciclo: for comment in comments: result = classifier(comment)[0]. Também pode passar a lista toda de uma vez, classifier(comments), e receber um resultado por comentário.",
            "Para fazer o resumo, use contadores: positive = 0 e negative = 0 antes do ciclo, e depois some 1 ao contador certo dentro do ciclo, conforme result[\"label\"].",
            "Arredonde a pontuação para ser fácil de ler: round(result[\"score\"], 2) dá duas casas decimais. Uma f-string mostra uma linha arrumada: print(f\"{result['label']:8} {round(result['score'], 2)}  {comment}\")."
          ],
          steps: ["Ponha pelo menos cinco comentários numa lista.", "Faça positive = 0 e negative = 0.", "Percorra os comentários e classifique cada um.", "Mostre a etiqueta, a pontuação arredondada e o comentário.", "Some 1 ao contador certo e, depois do ciclo, mostre os totais."],
          words: [["Contador", "uma variável que conta quantas vezes uma coisa aconteceu."], ["round()", "encurta um número para um certo número de casas decimais."], ["Lote (batch)", "um grupo de entradas tratadas juntas."]],
          slides: [
            { title: "Muitos textos, um ciclo", bullets: ["Ponha os comentários numa lista", "for comment in comments:", "result = classifier(comment)[0]"] },
            { title: "Conte pelo caminho", bullets: ["positive = 0, negative = 0 antes do ciclo", "Some 1 ao contador certo dentro do ciclo", "Mostre os totais depois do ciclo"] },
            { title: "Torne-o fácil de ler", bullets: ["round(score, 2) para duas casas decimais", "Uma linha arrumada por comentário"] }
          ],
          tryIt: "Escreva em inglês seis comentários sobre uma aula, um treino da equipa ou uma loja do bairro. Classifique-os num ciclo, mostre uma linha arrumada para cada um e mostre quantos foram positivos e quantos negativos.",
          youCanNow: "usar um modelo de IA numa lista de textos e resumir os resultados com contadores.",
          quickCheck: [
            { objective: "O5", q: "O que devolve classifier(comments) quando comments é uma lista?", options: ["Um resultado para a lista toda", "Um erro sempre", "Um resultado por comentário", "Só o resultado do primeiro comentário"], answer: 2, why: "Passar uma lista devolve um resultado para cada comentário." },
            { objective: "O5", q: "Dentro do ciclo, result[\"label\"] é \"POSITIVE\". O que faz com os contadores?", options: ["Soma 1 a positive", "Soma 1 a negative", "Volta a pôr positive a 0", "Apaga o comentário"], answer: 0, why: "Some 1 ao contador que corresponde à etiqueta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Verificar a IA e terminar o separador de opiniões",
          minutes: 6,
          goal: "Marcar os resultados com pouca confiança para uma pessoa verificar, e terminar o separador de opiniões.",
          text: [
            "Os modelos de IA erram. Este só conhece positivo e negativo, por isso os comentários neutros ou mistos são forçados a ir para um dos dois. Também pode não perceber a ironia (\"Great, another rainy game day.\", ou seja \"Ótimo, mais um dia de jogo com chuva.\") e foi treinado com críticas de filmes em inglês, por isso calão ou outras línguas podem confundi-lo.",
            "Um bom hábito é usar um limiar de confiança: se a pontuação estiver abaixo de um número que você escolhe, como 0.80, o programa diz \"verificar à mão\" em vez de confiar na etiqueta. Em tudo o que é importante, a decisão final é de uma pessoa.",
            "Use a IA com responsabilidade: não passe mensagens privadas por uma ferramenta sem autorização, não cole palavras-passe nem chaves de API num caderno partilhado, e diga às pessoas quando um resultado veio da IA.",
            "Agora tem tudo para a tarefa final: uma lista, um modelo, um ciclo, um if com um limiar, contadores e uma saída clara."
          ],
          steps: ["Escolha um limiar, por exemplo THRESHOLD = 0.80.", "Dentro do ciclo, verifique: if result[\"score\"] < THRESHOLD:", "Mostre \"verificar à mão\" ao lado desses comentários.", "Conte os positivos e os negativos como antes.", "Mostre os totais e quantos precisam de verificação por uma pessoa."],
          words: [["Limiar (threshold)", "um número de corte que você escolhe; os resultados abaixo dele recebem um tratamento especial."], ["Confiança", "quanta certeza um modelo tem da sua resposta."], ["Ironia (sarcasmo)", "dizer o contrário do que se quer dizer, que os modelos muitas vezes não percebem."], ["Pessoa no circuito", "uma pessoa revê os resultados da IA antes de serem usados."], ["Chave de API", "um código secreto que dá acesso a um serviço; nunca o partilhe."]],
          slides: [
            { title: "Os modelos erram", bullets: ["Só positivo ou negativo: o que é misto é forçado", "Não percebe ironia nem calão", "Treinado com críticas de filmes em inglês"] },
            { title: "Use um limiar", bullets: ["THRESHOLD = 0.80", "Pontuação abaixo dele: \"verificar à mão\"", "A decisão final é de uma pessoa"] },
            { title: "Use a IA com responsabilidade", bullets: ["Peça autorização para mensagens privadas", "Nada de palavras-passe nem chaves em cadernos partilhados", "Diga quando um resultado veio da IA"] }
          ],
          sources: [HF_MODEL],
          tryIt: "Tarefa final: crie o separador de opiniões. Use pelo menos seis comentários em inglês, um misto e um irónico. Mostre cada um com a etiqueta e a pontuação, marque tudo abaixo de 0.80 como \"verificar à mão\" e mostre os totais de positivos, negativos e para verificar à mão. Depois leia você mesmo os marcados e decida.",
          youCanNow: "criar em Python um programa de IA que funciona, que separa textos, mostra os resultados e passa os casos incertos a uma pessoa.",
          quickCheck: [
            { objective: "O6", q: "Porque pode este modelo de sentimento errar num comentário neutro?", options: ["Só lê números", "Só conhece positivo e negativo, por isso os comentários neutros são forçados a ir para um", "Precisa de uma palavra-passe", "Só funciona às sextas-feiras"], answer: 1, why: "O modelo só tem duas etiquetas, por isso os comentários mistos ou neutros são forçados a ir para uma." },
            { objective: "O6", q: "Um amigo quer que passe as mensagens privadas dele pelo seu separador. O que faz?", options: ["Passa-as sem perguntar a quem as escreveu", "Publica os resultados na internet", "Cola a sua chave de API no caderno para ser mais rápido", "Usa só mensagens que tem autorização para usar, e diz que os resultados vieram da IA"], answer: 3, why: "Usar a IA com responsabilidade é ter autorização para dados privados e dizer às pessoas quando a IA foi usada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar um modelo de IA pré-treinado",
        questions: [
          { objective: "O4", q: "O que é um modelo pré-treinado?", options: ["Um modelo que tem de treinar durante semanas primeiro", "Uma lista de regras que você escreve", "Um site pago", "Um modelo que alguém já treinou e que pode usar logo"], answer: 3, why: "Os modelos pré-treinados estão prontos a usar." },
          { objective: "O4", q: "O classificador devolve [{'label': 'NEGATIVE', 'score': 0.97}]. O que quer dizer 0.97?", options: ["O modelo tem muita certeza de que o comentário é negativo", "Foram lidas 97 palavras", "O comentário tem 97% de comprimento", "Custou 97 cêntimos"], answer: 0, why: "A pontuação é a confiança do modelo, de 0 a 1." },
          { objective: "O5", q: "Que linha obtém a etiqueta de result = classifier(text)?", options: ["result.label", "result[\"label\"][0]", "result[0][\"label\"]", "label(result)"], answer: 2, why: "O resultado é uma lista com um dicionário dentro, por isso primeiro [0] e depois [\"label\"]." },
          { objective: "O6", q: "Um comentário tem pontuação 0.55. Com um limiar de 0.80, o que faz o seu programa?", options: ["Apaga-o", "Conta-o duas vezes", "Para o programa", "Marca-o como \"verificar à mão\""], answer: 3, why: "As pontuações abaixo do limiar vão para uma pessoa." },
          { objective: "O6", q: "Qual destes é um uso responsável da IA?", options: ["Colar a sua chave de API num caderno que partilha", "Passar mensagens privadas dos colegas sem perguntar", "Dizer às pessoas que um resultado veio da IA e verificar os incertos", "Confiar em todas as etiquetas"], answer: 2, why: "Ser transparente e manter uma pessoa no circuito é um uso responsável." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Programação de IA com Python para Principiantes",
    questions: [
      { objective: "O1", q: "A melhor descrição de um modelo de IA é:", options: ["Uma lista de instruções if", "Um programa que aprendeu padrões a partir de muitos exemplos", "Um tipo de teclado", "O endereço de um site"], answer: 1, why: "Os modelos aprendem padrões com dados." },
      { objective: "O1", q: "O que faz import em Python?", options: ["Carrega uma biblioteca para poder usar o seu código", "Descarrega um filme", "Mostra texto", "Apaga um ficheiro"], answer: 0, why: "import traz uma biblioteca para o seu programa." },
      { objective: "O1", q: "O que quer dizer o ! em !pip install transformers no Colab?", options: ["É um erro", "Fazer mais alto", "Executar isto como comando do sistema, não como Python", "Instalar duas vezes"], answer: 2, why: "O ! diz ao Colab para executar um comando do sistema." },
      { objective: "O1", q: "Qual é verdade sobre o Colab gratuito?", options: ["É gratuito, mas os recursos são limitados e podem mudar", "Os recursos são ilimitados", "Tem de o instalar primeiro", "Só funciona em telefones"], answer: 0, why: "O Colab diz que os recursos gratuitos não são garantidos nem ilimitados." },
      { objective: "O2", q: "\"HELP\".lower() dá:", options: ["\"HELP\"", "\"Help\"", "Um erro", "\"help\""], answer: 3, why: "lower() põe todas as letras em minúsculas." },
      { objective: "O2", q: "\"price\" in \"what is the price?\" dá:", options: ["False", "True", "\"price\"", "0"], answer: 1, why: "in verifica se a palavra aparece no texto." },
      { objective: "O2", q: "Em {\"hours\": \"Open 9 to 5.\"}, o que é \"hours\"?", options: ["O valor", "A chave", "Uma lista", "Um ciclo"], answer: 1, why: "O lado esquerdo do par é a chave." },
      { objective: "O3", q: "O seu chatbot não entende \"when do you open?\" mas conhece \"hours\". Porquê?", options: ["O Colab está avariado", "O Python não consegue ler perguntas", "O dicionário é curto demais para funcionar", "Os bots com regras só reconhecem as regras que você escreveu"], answer: 3, why: "Num bot com regras, cada maneira de dizer precisa da sua própria regra." },
      { objective: "O3", q: "Num ciclo de conversa, o que deve acontecer quando o utilizador escreve bye?", options: ["Mostrar uma despedida e fazer break", "Começar um ciclo novo", "Pedir uma palavra-passe", "Nada"], answer: 0, why: "break termina o ciclo de forma limpa." },
      { objective: "O3", q: "Porque são úteis os modelos de linguagem para chatbots?", options: ["Nunca erram", "Não precisam de computador", "Entendem muitas maneiras de dizer a mesma coisa", "Funcionam sem dados"], answer: 2, why: "Aprenderam com milhões de frases." },
      { objective: "O4", q: "O que é o Hugging Face?", options: ["Uma rede social", "Um erro de Python", "Um videojogo", "Um site e bibliotecas para partilhar modelos de IA gratuitos"], answer: 3, why: "O Hugging Face guarda modelos e a biblioteca Transformers." },
      { objective: "O4", q: "Que linha carrega o modelo de sentimento?", options: ["import sentiment", "model = load()", "pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "print(\"model\")"], answer: 2, why: "O pipeline recebe a tarefa e o nome do modelo." },
      { objective: "O4", q: "Porque demora mais a primeira vez que se usa o modelo?", options: ["O Colab é lento de propósito", "O modelo é descarregado", "Treina do zero", "Verifica o seu email"], answer: 1, why: "Os ficheiros do modelo são descarregados da primeira vez." },
      { objective: "O4", q: "O que deve ler antes de usar um modelo?", options: ["A ficha do modelo", "O histórico do seu navegador", "O logótipo do Colab", "Nada"], answer: 0, why: "A ficha do modelo explica o uso, os dados e a licença." },
      { objective: "O4", q: "A pontuação do modelo de sentimento é:", options: ["O comprimento do texto", "O número de palavras positivas", "Quanta certeza o modelo tem, de 0 a 1", "Uma nota de 0 a 100"], answer: 2, why: "A pontuação é a confiança." },
      { objective: "O5", q: "Para contar os comentários positivos num ciclo, primeiro:", options: ["Faz positive = 0 antes do ciclo", "Mostra positive", "Apaga a lista", "Importa counter"], answer: 0, why: "Um contador começa em 0 antes do ciclo." },
      { objective: "O5", q: "round(0.98765, 2) dá:", options: ["0.98", "0.99", "1", "98"], answer: 1, why: "Arredondado a duas casas decimais, 0.98765 dá 0.99." },
      { objective: "O6", q: "Em que comentário é mais provável este modelo errar?", options: ["\"I loved it!\"", "\"Great, another rainy game day.\"", "\"This was terrible.\"", "\"Best class ever.\""], answer: 1, why: "A ironia diz o contrário do que quer dizer, e os modelos muitas vezes não a percebem." },
      { objective: "O6", q: "Porque usar um limiar de confiança?", options: ["Para o programa ficar mais rápido", "Para enviar os resultados incertos a uma pessoa para verificar", "Para esconder os comentários negativos", "Para apagar as pontuações baixas"], answer: 1, why: "Os resultados com pouca confiança precisam de verificação por uma pessoa." },
      { objective: "O6", q: "O que NÃO é seguro pôr num caderno que partilha?", options: ["Uma lista de comentários inventados", "Uma linha de comentário que começa com #", "Uma instrução print", "A sua palavra-passe ou chave de API"], answer: 3, why: "Segredos em cadernos partilhados podem ser copiados e mal usados." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 5, 7, 8, 10, 14, 15, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Modelo carregado e usado", objective: "O4", notYet: "O modelo não carrega, ou não aparecem etiquetas nem pontuações.", meets: "O modelo de sentimento pré-treinado funciona e dá uma etiqueta e uma pontuação para cada comentário.", exceeds: "O caderno anota com que dados a ficha do modelo diz que ele foi treinado." },
      { name: "Ciclo e saída", objective: "O5", notYet: "Menos de seis comentários, ou os comentários não aparecem cada um com a etiqueta e a pontuação.", meets: "Pelo menos seis comentários, cada um mostrado com a sua etiqueta e uma pontuação arredondada.", exceeds: "A saída está bem alinhada com uma f-string." },
      { name: "Contagens", objective: "O5", notYet: "As contagens de positivos e negativos faltam ou estão erradas.", meets: "Aparecem as contagens certas de comentários positivos e negativos.", exceeds: "Também mostra quantos foram marcados \"verificar à mão\"." },
      { name: "Limiar de confiança", objective: "O6", notYet: "Não há limiar, ou as pontuações baixas não são marcadas.", meets: "Todas as pontuações abaixo de 0.80 estão marcadas \"verificar à mão\".", exceeds: "Inclui um comentário irónico ou misto e explica porque o modelo pode errar nele." },
      { name: "Uso responsável", objective: "O6", notYet: "O caderno tem mensagens privadas sem autorização, ou uma palavra-passe ou chave de API.", meets: "Só comentários inventados ou autorizados, e nenhuma palavra-passe nem chave no caderno.", exceeds: "Acrescenta uma nota a dizer que as etiquetas vieram da IA e que uma pessoa verifica as incertas." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do separador de opiniões",
      "Alunos que dizem ter criado ou mudado outro programa de IA nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que passam a um curso seguinte, como Introdução à Aprendizagem Automática ou Ciência de Dados para Principiantes",
      "Alunos que mostram o separador de opiniões num portefólio, numa aula, num clube ou numa candidatura de emprego"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou portátil com navegador de internet",
      "Uma conta Google gratuita para usar o Google Colab",
      "Seis ou mais comentários curtos inventados, em inglês, por exemplo sobre um treino, uma aula ou uma pequena loja",
      "Cerca de 60 a 75 minutos no total, mais o tempo de prática"
    ],
    facilitatorNotes: [
      "Antes da aula, descarregue o modelo uma vez na mesma rede para confirmar que funciona; as redes das escolas às vezes bloqueiam o download de modelos.",
      "Peça aos alunos que usem comentários inventados ou que tenham autorização para usar; nunca mensagens privadas verdadeiras.",
      "Lembre aos alunos que nunca colem palavras-passe nem chaves de API num caderno, sobretudo num que partilham.",
      "Peça a cada aluno que encontre um comentário em que o modelo erra e discutam em grupo porquê.",
      "Os recursos gratuitos do Colab podem acabar; se uma sessão parar, mostre aos alunos como voltar a ligar e executar outra vez as células desde o início."
    ]
  }
};
