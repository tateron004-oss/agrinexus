"use strict";

// Koach Learn course (Portuguese translation of shared/deep-learning-intro.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Code, function names and settings (keras, fit, relu, adam ...) stay exactly as in the English.

const COLAB = { name: "Google Colab: Perguntas frequentes", url: "https://research.google.com/colaboratory/faq.html" };
const KERAS_MNIST = { name: "Exemplo de código Keras: rede convolucional simples para MNIST", url: "https://keras.io/examples/vision/mnist_convnet/" };

module.exports = {
  id: "deep-learning-intro-pt",
  lang: "pt",
  translationOf: "deep-learning-intro",
  category: "Veterans (military)",
  name: "Introdução à Aprendizagem Profunda e às Redes Neuronais",
  skills: "Explicar como funciona uma rede neuronal, Calcular a saída de um neurónio, Carregar e escalar dados de imagens, Construir e treinar uma rede no Keras, Avaliar e melhorar um modelo",
  outcome: "construir, treinar e testar no Google Colab, com o Keras, uma pequena rede neuronal que lê algarismos escritos à mão, indicar a sua exatidão em imagens novas, experimentar uma mudança para a melhorar e explicar o que o modelo pode e não pode fazer.",
  about: [
    "A aprendizagem profunda está por trás do desbloqueio do telefone pelo rosto, dos assistentes de voz, das aplicações de tradução, das ferramentas de imagens médicas e das câmaras que inspecionam peças numa linha de fábrica. Este curso explica como funciona com palavras simples e depois leva você a construir uma rede neuronal que funciona.",
    "É indicado para antigos militares que estão a mudar para a tecnologia, para pessoas que já sabem um pouco de Python e para quem terminou o curso \"Introdução à Aprendizagem Automática\". O Capítulo 1 constrói as ideias com prática em papel e lápis. O Capítulo 2 passa para o Google Colab, um site gratuito que executa Python, onde você treina uma rede com o Keras, uma biblioteca gratuita de aprendizagem profunda. Cada linha de código é dada e explicada.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "No Google Colab, carregue os algarismos escritos à mão do MNIST, escale-os, construa e treine uma rede neuronal no Keras, indique a sua exatidão nas imagens de teste, faça a previsão de cinco imagens de teste e compare-as com as etiquetas verdadeiras. Depois faça uma mudança (mais neurónios ou mais épocas), treine outra vez e escreva duas frases a dizer se ajudou e um limite do modelo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Antigos militares e militares em transição para trabalhos de tecnologia, dados ou IA, junto com cônjuges de militares e outros adultos em programas de emprego para antigos militares que já têm alguma experiência com Python.",
    startingPoint: "Sabem escrever e executar pequenos programas em Python no Google Colab e conhecem a ideia básica de treinar e testar um modelo. A maioria nunca viu o interior de uma rede neuronal, nunca calculou a saída de um neurónio nem construiu e treinou uma rede com o Keras.",
    gap: "A aprendizagem profunda move ferramentas de imagem, voz e texto na defesa, na logística, na saúde e na indústria, e muitos trabalhos de tecnologia esperam que as pessoas saibam como as redes neuronais aprendem e falham. A prática com as mãos permite falar disso com confiança em entrevistas, julgar os resultados de um modelo e ver onde uma pessoa tem de continuar a acompanhar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; termos como peso, viés, perda e época são explicados com pequenos exemplos resolvidos",
      "Aparelhos: um computador ou portátil com navegador de internet",
      "Contas e custo: uma conta Google gratuita para o Google Colab; o Keras e os dados MNIST são gratuitos; os recursos gratuitos do Colab são limitados e podem mudar",
      "Tempo: cerca de 5 a 6 minutos por lição, mais tempo de prática e de treino, cerca de 60 a 75 minutos no total",
      "Matemática: multiplicar e somar números pequenos à mão; não é preciso cálculo"
    ],
    prerequisites: "Introdução à Programação com Python; o curso Introdução à Aprendizagem Automática ajuda."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Sem notas", action: "explicar o que é a aprendizagem profunda e dizer com que tipos de dados ela funciona melhor", standard: "falando de camadas que aprendem padrões a partir de exemplos e de pelo menos dois tipos de dados adequados" },
    { id: "O2", condition: "Com as entradas, os pesos, o viés e a ReLU de um neurónio", action: "calcular à mão a saída do neurónio", standard: "acertando sempre, incluindo quando a ReLU dá 0" },
    { id: "O3", condition: "Com um registo de treino com perda e exatidão", action: "explicar como o treino muda os pesos e identificar sinais de sobreajuste", standard: "usando corretamente as palavras perda, taxa de aprendizagem, época e validação" },
    { id: "O4", condition: "No Google Colab, com o Keras", action: "carregar os algarismos do MNIST, escalar os píxeis e mostrar uma imagem com a sua etiqueta", standard: "com os píxeis entre 0 e 1 e a etiqueta igual à imagem" },
    { id: "O5", condition: "Com os dados MNIST já preparados", action: "construir, compilar e treinar uma rede neuronal no Keras", standard: "com o código a funcionar, uma parte de validação usada e a perda a descer ao longo das épocas" },
    { id: "O6", condition: "Com uma rede já treinada", action: "medir a sua exatidão no teste, prever imagens novas, testar uma mudança e descrever os seus limites", standard: "mudando uma coisa de cada vez e indicando pelo menos um limite real" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funcionam as redes neuronais",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a aprendizagem profunda",
          minutes: 4,
          goal: "Explicar com as suas palavras o que é a aprendizagem profunda e dizer onde é usada.",
          text: [
            "A aprendizagem profunda (em inglês, deep learning) é um tipo de aprendizagem automática que usa redes neuronais: muitas pequenas unidades de cálculo, chamadas neurónios, ligadas em camadas. \"Profunda\" quer dizer que há muitas camadas. Cada camada encontra padrões na saída da camada anterior.",
            "Numa imagem, as primeiras camadas notam coisas simples como contornos, as camadas do meio notam formas, e as últimas camadas notam objetos inteiros, como um rosto ou um número. Ninguém escreve essas regras: a rede aprende-as a partir de muitos exemplos com etiqueta.",
            "Funciona melhor quando há muitos dados e os dados são confusos e ricos: imagens, som, fala e textos longos. Precisa de mais dados e de mais poder de computação do que modelos mais simples. Por isso cresceu quando os grandes conjuntos de dados e os chips gráficos rápidos (GPU) ficaram comuns."
          ],
          words: [["Aprendizagem profunda", "aprendizagem automática com redes neuronais que têm muitas camadas."], ["Rede neuronal", "um modelo feito de muitas pequenas unidades (neurónios) ligadas em camadas."], ["Camada", "um grupo de neurónios que recebem todos a entrada da camada anterior."], ["GPU", "um chip gráfico que faz muitos cálculos ao mesmo tempo, usado para treinar redes depressa."]],
          slides: [
            { title: "A aprendizagem profunda é", bullets: ["Aprendizagem automática com redes neuronais", "Muitas camadas de pequenas unidades de cálculo", "\"Profunda\" = muitas camadas"] },
            { title: "As camadas encontram padrões", bullets: ["Primeiras camadas: contornos", "Camadas do meio: formas", "Últimas camadas: objetos inteiros"] },
            { title: "Onde ela brilha", bullets: ["Imagens, som, fala e texto", "Muitos dados", "Precisa de mais poder de computação (GPU)"] }
          ],
          tryIt: "Escreva quatro ferramentas que já usou e que provavelmente usam aprendizagem profunda (por exemplo desbloqueio pelo rosto, escrita por voz, pesquisa de fotos, tradução). Para cada uma, escreva com que tipo de dados aprende: imagens, som ou texto.",
          youCanNow: "explicar o que é a aprendizagem profunda, porque usa camadas e onde é usada.",
          quickCheck: [
            { objective: "O1", q: "O que são os neurónios numa rede neuronal?", options: ["Células do cérebro copiadas para um computador", "Chips gráficos", "Pequenas unidades de cálculo ligadas em camadas", "Imagens com etiqueta"], answer: 2, why: "Uma rede neuronal é feita de muitas pequenas unidades de cálculo, chamadas neurónios, em camadas." },
            { objective: "O1", q: "A sua unidade quer separar milhares de mensagens de rádio gravadas por quem fala. Pensaria em aprendizagem profunda?", options: ["Sim; funciona melhor com muitos dados ricos como o som", "Não; a aprendizagem profunda não pode usar som", "Não; só funciona com números numa tabela", "Só se houver menos de dez gravações"], answer: 0, why: "A aprendizagem profunda funciona melhor com muitos dados ricos e confusos, como imagens, som e texto." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dentro de um neurónio: pesos, viés e ativação",
          minutes: 6,
          goal: "Calcular à mão a saída de um único neurónio.",
          text: [
            "Um neurónio recebe alguns números, multiplica cada um por um peso, soma tudo e junta mais um número chamado viés (em inglês, bias). Os pesos dizem a importância de cada entrada; a rede aprende-os.",
            "Depois aplica uma função de ativação, que decide o que passar adiante. A mais comum, a ReLU, é simples: se o total for menor que zero, a saída é 0; se não, a saída é o total.",
            "Exemplo: entradas 2 e 3, pesos 0.5 e -1, viés 1. Total = 2 x 0.5 + 3 x (-1) + 1 = 1 - 3 + 1 = -1. A ReLU transforma -1 em 0, por isso este neurónio dá 0. Com as entradas 2 e 1: 1 - 1 + 1 = 1, por isso dá 1.",
            "Uma rede tem milhares destes neurónios. A última camada usa muitas vezes a softmax, que transforma as saídas em probabilidades que somam 100 por cento, uma para cada resposta possível."
          ],
          steps: ["Multiplique cada entrada pelo seu peso.", "Some os resultados.", "Junte o viés.", "Aplique a ativação: com a ReLU, um número negativo passa a 0.", "Esse número é a saída do neurónio."],
          words: [["Neurónio", "uma pequena unidade que multiplica as entradas por pesos, junta um viés e aplica uma ativação."], ["Peso", "um número que a rede aprende e que diz quanto uma entrada conta."], ["Viés", "um número extra somado ao total, também aprendido."], ["Função de ativação", "a regra que decide o que um neurónio passa adiante."], ["ReLU", "uma ativação: os totais negativos passam a 0, os outros ficam iguais."], ["Softmax", "transforma as saídas da última camada em probabilidades que somam 1."]],
          slides: [
            { title: "Um neurónio", bullets: ["Entradas x pesos, somadas", "Mais o viés", "Depois uma função de ativação"] },
            { title: "ReLU", bullets: ["Abaixo de zero: a saída é 0", "Zero ou mais: a saída é o total"] },
            { title: "Exemplo resolvido", bullets: ["Entradas 2, 3; pesos 0.5, -1; viés 1", "2 x 0.5 + 3 x (-1) + 1 = -1", "ReLU(-1) = 0"] },
            { title: "A última camada", bullets: ["A softmax dá a probabilidade de cada resposta", "As probabilidades somam 100%"] }
          ],
          tryIt: "Calcule à mão a saída de um neurónio: entradas 4 e 1, pesos 0.5 e 2, viés -3, ativação ReLU. Depois mude o viés para -6 e calcule outra vez. (Respostas: 1, depois 0.)",
          youCanNow: "calcular a saída de um neurónio a partir das entradas, dos pesos, do viés e da ativação.",
          quickCheck: [
            { objective: "O2", q: "Num neurónio, o que é o viés?", options: ["A entrada com o valor maior", "A função de ativação", "Uma regra que diz que o modelo é injusto", "Mais um número somado depois de somar as entradas com os pesos"], answer: 3, why: "O neurónio junta o viés à soma com pesos antes da ativação." },
            { objective: "O2", q: "Entradas 4 e 1, pesos 0.5 e 2, viés -1, ReLU. Que saída calcularia?", options: ["0", "3", "5", "-1"], answer: 1, why: "4 x 0.5 + 1 x 2 - 1 = 3, e a ReLU mantém os totais positivos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Como uma rede aprende: perda, épocas e pequenos passos",
          minutes: 5,
          goal: "Explicar como o treino muda os pesos para cometer menos erros.",
          text: [
            "No início, os pesos são aleatórios, por isso os palpites da rede são maus. O treino corrige isso. A rede dá um palpite e uma função de perda (em inglês, loss) mede quanto errou: uma perda grande quer dizer muito errado, uma perda pequena quer dizer perto.",
            "Depois calcula, para cada peso, em que direção a perda desceria (este passo chama-se retropropagação, em inglês backpropagation) e move cada peso um pequeno passo nessa direção (descida do gradiente). O tamanho do passo é a taxa de aprendizagem: grande demais e passa do ponto, pequena demais e fica muito lento.",
            "Uma passagem por todos os exemplos de treino é uma época (em inglês, epoch). O treino costuma levar várias épocas. Você vê a perda descer e a exatidão subir, e verifica um conjunto de validação (dados guardados fora do treino) para apanhar o sobreajuste: se a exatidão no treino continua a subir mas a exatidão na validação desce, pare."
          ],
          steps: ["Comece com pesos aleatórios.", "Dê palpites sobre os exemplos de treino.", "Meça o erro com a função de perda.", "Mova cada peso um pequeno passo para baixar a perda.", "Repita durante várias épocas, de olho na exatidão da validação."],
          words: [["Perda", "um número que mede quanto os palpites da rede estão errados."], ["Retropropagação", "calcular como cada peso afetou a perda."], ["Descida do gradiente", "mover os pesos em pequenos passos para baixar a perda."], ["Taxa de aprendizagem", "o tamanho de cada passo."], ["Época", "uma passagem completa pelos dados de treino."], ["Conjunto de validação", "dados guardados fora do treino para verificar o sobreajuste."]],
          slides: [
            { title: "Palpite, medição, ajuste", bullets: ["Pesos aleatórios no início", "A perda mede quanto errou", "Ajustar os pesos para baixar a perda"] },
            { title: "Pequenos passos", bullets: ["A retropropagação encontra a direção", "A descida do gradiente dá o passo", "A taxa de aprendizagem define o tamanho do passo"] },
            { title: "Épocas e validação", bullets: ["Época: uma passagem pelos dados", "Acompanhe a exatidão da validação", "Treino a subir, validação a descer = sobreajuste"] }
          ],
          tryIt: "Jogue \"adivinha o número\" com um amigo ou sozinho: escolha um número escondido de 1 a 100, dê um palpite, ouça \"alto demais\" ou \"baixo demais\" e mude o palpite com um passo mais pequeno de cada vez. Escreva que parte do jogo é como a perda, qual é como a taxa de aprendizagem e quantas rondas (épocas) foram precisas.",
          youCanNow: "explicar com palavras simples a perda, a retropropagação, a descida do gradiente, a taxa de aprendizagem, as épocas e o sobreajuste.",
          quickCheck: [
            { objective: "O3", q: "O que é a taxa de aprendizagem?", options: ["Quantas imagens há no conjunto de dados", "O tamanho de cada passo com que os pesos se movem", "O número de camadas", "A exatidão final"], answer: 1, why: "Um passo grande demais passa do ponto; um passo pequeno demais é muito lento." },
            { objective: "O3", q: "Depois da época 4, a exatidão da validação começa a descer enquanto a exatidão do treino continua a subir. O que faria?", options: ["Treinar mais 50 épocas", "Apagar o conjunto de validação", "Parar o treino; o modelo está a começar a sobreajustar", "Aumentar muito a taxa de aprendizagem"], answer: 2, why: "A exatidão da validação a descer com a do treino a subir é um sinal de sobreajuste." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funcionam as redes neuronais",
        questions: [
          { objective: "O1", q: "O que quer dizer \"profunda\" na aprendizagem profunda?", options: ["Que usa muita eletricidade", "Que só funciona debaixo de água", "Que a rede tem muitas camadas", "Que é difícil de explicar"], answer: 2, why: "Profunda quer dizer muitas camadas de neurónios." },
          { objective: "O2", q: "O total de um neurónio é -2. Com a ReLU, qual é a saída?", options: ["-2", "0", "1", "2"], answer: 1, why: "A ReLU transforma qualquer total negativo em 0." },
          { objective: "O2", q: "Entradas 1 e 2, pesos 3 e 1, viés 0, ReLU. Qual é a saída?", options: ["0", "3", "5", "6"], answer: 2, why: "1 x 3 + 2 x 1 + 0 = 5, e 5 não é negativo." },
          { objective: "O3", q: "O que mede a função de perda?", options: ["Quantas camadas há", "Quanto os palpites da rede estão errados", "A velocidade do computador", "Quantos dados você tem"], answer: 1, why: "A perda é o tamanho do erro." },
          { objective: "O3", q: "A exatidão do treino continua a subir, mas a da validação desce. O que está a acontecer?", options: ["A rede é perfeita", "Sobreajuste", "A taxa de aprendizagem é zero", "Faltam os dados"], answer: 1, why: "Ficar melhor nos dados de treino mas pior nos dados guardados de fora é sobreajuste." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir uma rede neuronal no Colab",
      lessons: [
        {
          objectives: ["O4"],
          title: "Carregar e preparar dados de imagens",
          minutes: 5,
          goal: "Carregar os algarismos do MNIST no Colab, escalá-los e ver uma imagem.",
          text: [
            "O MNIST é um conjunto de dados de prática famoso: 70,000 pequenas imagens de algarismos de 0 a 9 escritos à mão, cada uma com 28 por 28 píxeis, com o algarismo certo como etiqueta. O Keras, uma biblioteca gratuita de aprendizagem profunda que funciona no Google Colab, carrega-o com uma linha, já dividido em 60,000 imagens de treino e 10,000 de teste.",
            "Cada píxel é um número de 0 (preto) a 255 (branco). As redes aprendem melhor com números pequenos, por isso você escala-os para ficarem entre 0 e 1, dividindo por 255. Isto chama-se normalizar.",
            "Olhe para os seus dados antes de treinar. O matplotlib, uma biblioteca de gráficos, pode desenhar uma imagem para você verificar que a etiqueta corresponde à imagem."
          ],
          steps: ["Num novo notebook do Colab execute: import keras", "Carregue: (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()", "Escale: x_train = x_train / 255.0 e x_test = x_test / 255.0", "Verifique os tamanhos: print(x_train.shape, x_test.shape)", "Desenhe uma: import matplotlib.pyplot as plt; plt.imshow(x_train[0], cmap=\"gray\"); plt.show(); print(y_train[0])"],
          words: [["MNIST", "um conjunto de dados de prática com 70,000 imagens de algarismos escritos à mão."], ["Keras", "uma biblioteca de Python gratuita e fácil para principiantes, usada para construir redes neuronais."], ["Píxel", "um ponto de uma imagem, guardado como um número."], ["Normalizar", "escalar números para um intervalo pequeno, como de 0 a 1, para o treino funcionar melhor."], ["matplotlib", "uma biblioteca de Python para desenhar gráficos e imagens."]],
          slides: [
            { title: "Os algarismos do MNIST", bullets: ["70,000 algarismos escritos à mão, de 0 a 9", "28 x 28 píxeis cada um", "60,000 para treino, 10,000 para teste"] },
            { title: "Escalar os píxeis", bullets: ["Os píxeis vão de 0 a 255", "Divida por 255.0 para ter de 0 a 1", "Números pequenos treinam melhor"] },
            { title: "Olhe antes de treinar", bullets: ["plt.imshow(x_train[0], cmap=\"gray\")", "Mostre a etiqueta para verificar que corresponde"] }
          ],
          sources: [KERAS_MNIST, COLAB],
          tryIt: "Carregue e escale o MNIST no Colab. Mostre os tamanhos dos conjuntos de treino e de teste. Desenhe as imagens nas posições 0, 1 e 2 e mostre as suas etiquetas para verificar que correspondem.",
          youCanNow: "carregar um conjunto de dados de imagens, normalizá-lo e verificá-lo a olho.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer aqui normalizar os píxeis do MNIST?", options: ["Escalá-los para ficarem entre 0 e 1, dividindo por 255", "Virar as imagens ao contrário", "Apagar os píxeis escuros", "Fazer de cada imagem o algarismo 0"], answer: 0, why: "Dividir por 255 transforma 0 a 255 em 0 a 1, o que ajuda a aprendizagem." },
            { objective: "O4", q: "Carregou o MNIST e quer ter a certeza de que as etiquetas estão certas. O que faria?", options: ["Treinar primeiro e verificar depois", "Dividir as etiquetas por 255", "Apagar o conjunto de teste", "Desenhar uma imagem com o matplotlib e verificar que corresponde à etiqueta"], answer: 3, why: "Olhe para os dados antes de treinar para verificar que a etiqueta corresponde à imagem." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Construir e treinar a rede",
          minutes: 6,
          goal: "Construir uma rede no Keras, compilá-la e treiná-la durante algumas épocas.",
          text: [
            "Um modelo Sequential é uma pilha de camadas. A nossa: keras.Input(shape=(28, 28)) diz o que entra. layers.Flatten() transforma cada imagem de 28 x 28 numa só linha de 784 números. layers.Dense(128, activation=\"relu\") é uma camada de 128 neurónios. layers.Dense(10, activation=\"softmax\") é a saída: uma probabilidade para cada algarismo de 0 a 9.",
            "compile define como aprende: optimizer=\"adam\" (um tipo popular de descida do gradiente), loss=\"sparse_categorical_crossentropy\" (a perda certa quando as etiquetas são números simples como 7) e metrics=[\"accuracy\"] para você ver quantas vezes acerta.",
            "fit faz o treino: model.fit(x_train, y_train, epochs=5, validation_split=0.1). validation_split=0.1 guarda 10 por cento dos dados de treino para verificar o sobreajuste. Cada época mostra loss, accuracy, val_loss e val_accuracy. Veja a perda descer."
          ],
          steps: ["from keras import layers", "model = keras.Sequential([keras.Input(shape=(28, 28)), layers.Flatten(), layers.Dense(128, activation=\"relu\"), layers.Dense(10, activation=\"softmax\")])", "model.compile(optimizer=\"adam\", loss=\"sparse_categorical_crossentropy\", metrics=[\"accuracy\"])", "model.summary() para ver as camadas.", "model.fit(x_train, y_train, epochs=5, validation_split=0.1)"],
          words: [["Modelo Sequential", "uma rede feita de camadas empilhadas uma depois da outra."], ["Flatten", "uma camada que transforma uma grelha de píxeis numa linha comprida."], ["Camada Dense", "uma camada em que cada neurónio está ligado a todas as entradas."], ["Otimizador", "o método que atualiza os pesos; adam é um dos mais comuns."], ["compile", "define o otimizador, a perda e as métricas antes do treino."], ["validation_split", "a parte dos dados de treino guardada para verificar o sobreajuste."]],
          slides: [
            { title: "As camadas", bullets: ["Entrada: uma imagem de 28 x 28", "Flatten: uma linha de 784 números", "Dense 128, relu: a camada escondida", "Dense 10, softmax: uma probabilidade por algarismo"] },
            { title: "compile", bullets: ["optimizer=\"adam\"", "loss=\"sparse_categorical_crossentropy\"", "metrics=[\"accuracy\"]"] },
            { title: "fit", bullets: ["epochs=5: cinco passagens pelos dados", "validation_split=0.1 verifica o sobreajuste", "Veja a perda descer e a exatidão subir"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Construa, compile e treine a rede durante 5 épocas. Anote a accuracy e a val_accuracy depois da época 1 e depois da época 5. Subiram as duas?",
          youCanNow: "construir uma rede neuronal no Keras, compilá-la e treiná-la, de olho no sobreajuste.",
          quickCheck: [
            { objective: "O5", q: "O que é um modelo Sequential no Keras?", options: ["Uma lista de imagens", "Um registo de treino", "Uma pilha de camadas, uma depois da outra", "Um tipo de função de perda"], answer: 2, why: "Sequential empilha as camadas por ordem, da entrada até à saída." },
            { objective: "O5", q: "Quer ver durante o treino se o modelo começa a sobreajustar. O que juntaria ao fit?", options: ["validation_split=0.1", "epochs=0", "activation=\"softmax\"", "Flatten()"], answer: 0, why: "validation_split guarda alguns dados de treino para verificar o modelo em cada época." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Testar, prever e melhorar",
          minutes: 6,
          goal: "Medir a exatidão no teste, prever imagens reais, experimentar uma melhoria e dizer os limites do modelo.",
          text: [
            "O verdadeiro teste são dados que a rede nunca viu: model.evaluate(x_test, y_test) mostra a perda e a exatidão no teste. Uma rede pequena como a nossa costuma ficar bem acima de 90 por cento no MNIST.",
            "Para prever, dê-lhe imagens: probs = model.predict(x_test[:5]) dá 10 probabilidades para cada imagem. probs.argmax(axis=1) escolhe o algarismo com a probabilidade mais alta. Compare-os com y_test[:5].",
            "Para a melhorar, mude uma coisa de cada vez e teste outra vez: mais neurónios (Dense(256)), mais épocas, ou uma rede convolucional (camadas que percorrem pequenos pedaços da imagem), que chega a cerca de 99 por cento no exemplo oficial do Keras.",
            "Conheça os limites: ela só conhece algarismos isolados e centrados como os do MNIST. Uma foto de um sinal de trânsito ou de uma letra vai receber na mesma um algarismo. No trabalho real, como ler formulários ou inspecionar peças, uma pessoa verifica os resultados de pouca confiança, e o modelo é testado com dados do local real onde vai ser usado."
          ],
          steps: ["Execute model.evaluate(x_test, y_test) e anote a exatidão no teste.", "probs = model.predict(x_test[:5])", "print(probs.argmax(axis=1), y_test[:5]) para comparar os palpites com a verdade.", "Mude uma coisa (neurónios ou épocas), construa, treine e avalie outra vez.", "Escreva se ajudou e um limite."],
          words: [["evaluate", "testa o modelo treinado com dados e mostra a perda e a exatidão."], ["argmax", "escolhe a posição do número maior: aqui, o algarismo mais provável."], ["Rede convolucional (CNN)", "uma rede com camadas que percorrem pequenos pedaços de uma imagem; muito boa com imagens."], ["Hiperparâmetro", "uma definição que você escolhe, como os neurónios ou as épocas, e que a rede não aprende."]],
          slides: [
            { title: "Testar com dados nunca vistos", bullets: ["model.evaluate(x_test, y_test)", "Mostra a perda e a exatidão no teste"] },
            { title: "Fazer previsões", bullets: ["probs = model.predict(x_test[:5])", "probs.argmax(axis=1) = os algarismos previstos", "Compare com y_test[:5]"] },
            { title: "Melhorar uma coisa de cada vez", bullets: ["Mais neurónios ou mais épocas", "Ou uma rede convolucional", "Teste outra vez depois de cada mudança"] },
            { title: "Conhecer os limites", bullets: ["Só conhece algarismos isolados como os do MNIST", "Teste com dados reais do local onde vai ser usado", "Uma pessoa verifica os resultados duvidosos"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Tarefa final: avalie a sua rede no conjunto de teste, preveja as cinco primeiras imagens de teste e compare com as etiquetas verdadeiras. Depois mude Dense(128) para Dense(256) ou as épocas para 10, treine e avalie outra vez. Escreva duas frases: a mudança ajudou, e qual é um limite deste modelo?",
          youCanNow: "treinar, testar, usar e melhorar uma rede neuronal, e explicar onde se deve e onde não se deve confiar nela.",
          quickCheck: [
            { objective: "O6", q: "O que lhe dá model.predict(x_test[:5])?", options: ["A exatidão no teste", "10 probabilidades para cada uma das 5 imagens", "As 5 etiquetas verdadeiras", "Um novo modelo treinado"], answer: 1, why: "predict devolve uma probabilidade para cada algarismo em cada imagem; argmax escolhe o mais provável." },
            { objective: "O6", q: "Quer saber se mais épocas ajudam. O que faria?", options: ["Mudar as épocas, os neurónios e as camadas ao mesmo tempo", "Julgar só pela exatidão do treino", "Saltar o conjunto de teste desta vez", "Mudar só o número de épocas, treinar outra vez e comparar a exatidão no teste"], answer: 3, why: "Mude uma coisa de cada vez para saber o que causou a diferença." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Construir uma rede neuronal no Colab",
        questions: [
          { objective: "O4", q: "Porque se dividem os píxeis do MNIST por 255.0?", options: ["Para aumentar as imagens", "Para apagar os píxeis escuros", "Para mudar as etiquetas", "Para os escalar entre 0 e 1 e o treino funcionar melhor"], answer: 3, why: "Normalizar para 0-1 ajuda a rede a aprender." },
          { objective: "O5", q: "O que faz layers.Flatten()?", options: ["Transforma uma grelha de 28 x 28 numa linha de 784 números", "Deixa a imagem mais clara", "Junta 10 neurónios", "Divide os dados"], answer: 0, why: "Flatten muda a forma da grelha para uma linha, para as camadas Dense." },
          { objective: "O5", q: "Porque é que a última camada tem 10 neurónios com softmax?", options: ["Há 10 épocas", "É sempre 10", "Há 10 algarismos possíveis, e a softmax dá uma probabilidade para cada um", "Para poupar memória"], answer: 2, why: "Uma saída por algarismo, como probabilidades que somam 1." },
          { objective: "O6", q: "Que linha dá o algarismo mais provável para cada imagem?", options: ["probs.sum()", "model.fit(probs)", "y_test.argmax()", "probs.argmax(axis=1)"], answer: 3, why: "argmax escolhe a probabilidade mais alta." },
          { objective: "O6", q: "Quer saber se Dense(256) é melhor do que Dense(128). O que faz?", options: ["Muda cinco coisas ao mesmo tempo", "Olha só para a perda do treino", "Muda isso, treina outra vez e compara a exatidão no teste", "Adivinha"], answer: 2, why: "Mude uma coisa e teste outra vez com o mesmo conjunto de teste." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à Aprendizagem Profunda e às Redes Neuronais",
    questions: [
      { objective: "O1", q: "A aprendizagem profunda é:", options: ["Uma forma de guardar ficheiros", "Aprendizagem automática com redes neuronais de muitas camadas", "Um tipo de folha de cálculo", "Aprender enquanto se dorme"], answer: 1, why: "Usa redes profundas (com muitas camadas)." },
      { objective: "O1", q: "Em que tarefa a aprendizagem profunda é especialmente boa?", options: ["Reconhecer rostos em fotos", "Somar dois números", "Ordenar uma lista curta", "Imprimir uma página"], answer: 0, why: "Imagens, som e texto são os seus pontos fortes." },
      { objective: "O1", q: "Numa rede de imagens, as primeiras camadas costumam notar:", options: ["Rostos inteiros", "O nome do ficheiro", "Contornos simples", "A etiqueta"], answer: 2, why: "As camadas avançam dos contornos para as formas e depois para os objetos." },
      { objective: "O1", q: "Porque é que a aprendizagem profunda cresceu nos últimos anos?", options: ["Grandes conjuntos de dados e GPU rápidas", "Ecrãs mais pequenos", "Menos computadores", "Teclados novos"], answer: 0, why: "Precisa de muitos dados e de muito poder de computação." },
      { objective: "O2", q: "O que faz um peso num neurónio?", options: ["Conta as épocas", "Guarda a etiqueta", "Desenha a imagem", "Define quanto uma entrada conta"], answer: 3, why: "Os pesos aumentam ou diminuem cada entrada." },
      { objective: "O2", q: "Entradas 2 e 2, pesos 1 e -2, viés 1, ReLU. Saída?", options: ["-1", "0", "1", "3"], answer: 1, why: "2 - 4 + 1 = -1, e a ReLU transforma -1 em 0." },
      { objective: "O2", q: "A softmax na última camada dá:", options: ["O número de camadas", "Probabilidades para cada resposta que somam 100%", "A perda", "Um número aleatório"], answer: 1, why: "A softmax transforma as saídas em probabilidades." },
      { objective: "O3", q: "A perda a descer durante o treino quer dizer:", options: ["Os dados estão a diminuir", "O computador está a ficar lento", "Sobreajuste com certeza", "Os palpites da rede estão a ficar menos errados"], answer: 3, why: "Uma perda mais baixa quer dizer erros mais pequenos." },
      { objective: "O3", q: "A taxa de aprendizagem controla:", options: ["O tamanho de cada passo de atualização dos pesos", "Quantas imagens há", "O tamanho do ecrã", "O número de etiquetas"], answer: 0, why: "Define o tamanho de cada passo." },
      { objective: "O3", q: "Uma época é:", options: ["Um neurónio", "Uma imagem de teste", "Uma passagem por todos os dados de treino", "Um minuto de treino"], answer: 2, why: "Uma época percorre todo o conjunto de treino uma vez." },
      { objective: "O3", q: "Um conjunto de validação serve para:", options: ["Treinar mais depressa", "Guardar o modelo", "Pôr etiquetas nas imagens", "Apanhar o sobreajuste durante o treino"], answer: 3, why: "É guardado de fora para verificar o modelo enquanto treina." },
      { objective: "O4", q: "Quantas imagens o MNIST põe no conjunto de teste?", options: ["28", "784", "10,000", "60,000"], answer: 2, why: "O MNIST tem 60,000 imagens de treino e 10,000 de teste." },
      { objective: "O4", q: "Cada imagem do MNIST é:", options: ["Uma foto a cores de uma rua", "28 x 28 píxeis de um algarismo escrito à mão", "Um pedaço de som", "Uma frase"], answer: 1, why: "Pequenas imagens de algarismos em tons de cinzento." },
      { objective: "O5", q: "Que camada do Keras tem cada neurónio ligado a todas as entradas?", options: ["Dense", "Flatten", "Input", "Softmax"], answer: 0, why: "Dense quer dizer totalmente ligada." },
      { objective: "O5", q: "O que define model.compile?", options: ["O conjunto de dados", "O tamanho da imagem", "O otimizador, a perda e as métricas", "A exatidão no teste"], answer: 2, why: "compile define como o modelo aprende e o que mostra." },
      { objective: "O5", q: "As etiquetas são números simples como 7. Que perda serve?", options: ["sparse_categorical_crossentropy", "accuracy", "relu", "adam"], answer: 0, why: "Essa perda espera etiquetas que são números inteiros." },
      { objective: "O5", q: "O que faz validation_split=0.1 no fit?", options: ["Treina durante 0.1 épocas", "Apaga 10% dos dados", "Define a taxa de aprendizagem", "Guarda 10% dos dados de treino para verificar o modelo"], answer: 3, why: "Reserva uma parte para validação." },
      { objective: "O6", q: "Que linha mede a exatidão em imagens nunca vistas?", options: ["model.fit(x_test, y_test)", "model.evaluate(x_test, y_test)", "model.summary()", "plt.imshow(x_test[0])"], answer: 1, why: "evaluate testa com os dados que você lhe dá." },
      { objective: "O6", q: "Que tipo de rede percorre pequenos pedaços de uma imagem e se sai muito bem com imagens?", options: ["Uma folha de cálculo", "Uma rede convolucional (CNN)", "Um chatbot baseado em regras", "Um único neurónio"], answer: 1, why: "As CNN são feitas para imagens." },
      { objective: "O6", q: "O seu modelo de algarismos é usado para ler formulários escritos à mão no trabalho. Qual é um passo responsável?", options: ["Confiar em todas as respostas", "Nunca o testar", "Esconder que se usa um modelo", "Ter uma pessoa a verificar os resultados de pouca confiança e testá-lo antes com formulários reais"], answer: 3, why: "Testar no mundo real e ter uma pessoa a verificar apanha os erros do modelo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 5, 7, 9, 11, 12, 14, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Dados preparados", objective: "O4", notYet: "O MNIST não está carregado ou os píxeis não estão escalados.", meets: "O MNIST está carregado e os píxeis estão escalados entre 0 e 1.", exceeds: "Uma imagem é desenhada e verificada com a sua etiqueta." },
      { name: "Rede construída e treinada", objective: "O5", notYet: "O modelo não compila ou não treina.", meets: "Uma rede Keras com Flatten, uma camada escondida Dense e uma saída softmax de 10 neurónios treina com uma parte de validação.", exceeds: "Anota como a perda e a exatidão da validação mudaram ao longo das épocas." },
      { name: "Exatidão no teste e previsões", objective: "O6", notYet: "Não há exatidão no teste, ou as previsões não são comparadas com as etiquetas verdadeiras.", meets: "Indica a exatidão no teste e compara cinco previsões com as etiquetas verdadeiras.", exceeds: "Também olha para uma previsão errada e sugere porque aconteceu." },
      { name: "Uma mudança testada", objective: "O6", notYet: "Nenhuma mudança feita, ou várias coisas mudadas ao mesmo tempo.", meets: "Uma mudança (mais neurónios ou mais épocas), novo treino e uma frase a dizer se ajudou.", exceeds: "Também verifica se a mudança mostra sinais de sobreajuste." },
      { name: "Limites", objective: "O6", notYet: "Nenhum limite indicado, ou o limite está errado.", meets: "Um limite real, como só conhecer algarismos isolados e centrados.", exceeds: "Também diz como uma pessoa verificaria os resultados de pouca confiança no trabalho real." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem ter treinado outra rede neuronal ou outro exemplo do Keras nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que juntam o notebook a um portefólio ou o usam para falar de IA numa entrevista de emprego",
      "Alunos que entram num programa de formação, certificado ou emprego de tecnologia, dados ou IA depois do curso"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou portátil com navegador de internet",
      "Uma conta Google gratuita para usar o Google Colab",
      "Papel e caneta para o cálculo à mão de um neurónio",
      "Cerca de 60 a 75 minutos no total, mais o tempo para o treino correr"
    ],
    facilitatorNotes: [
      "Façam o cálculo do neurónio no quadro, em grupo, antes de qualquer código; isso torna as camadas seguintes muito mais fáceis de seguir.",
      "Faça o download do MNIST uma vez antes da aula para confirmar que a rede de internet o permite.",
      "O treino leva alguns minutos; use a espera para conversar sobre os números da perda e da exatidão à medida que aparecem.",
      "Ligue os exemplos a funções que os alunos conhecem, como ler formulários ou inspecionar peças, e sublinhe que uma pessoa verifica os resultados de pouca confiança.",
      "Incentive os alunos a guardar o notebook para um portefólio e a praticar explicá-lo num minuto, como fariam numa entrevista."
    ]
  }
};
