"use strict";

// Koach Learn course (shared), Spanish translation of shared/deep-learning-intro.js. See scripts/koachlearn-courses/README.md, "Translations".
// Keras code stays in English.

const COLAB = { name: "Google Colab: Preguntas frecuentes", url: "https://research.google.com/colaboratory/faq.html" };
const KERAS_MNIST = { name: "Ejemplo de código de Keras: red convolucional sencilla para MNIST", url: "https://keras.io/examples/vision/mnist_convnet/" };

module.exports = {
  id: "deep-learning-intro-es",
  lang: "es",
  translationOf: "deep-learning-intro",
  category: "Veterans (military)",
  name: "Introducción al aprendizaje profundo y las redes neuronales",
  skills: "Explicar cómo funciona una red neuronal, Calcular la salida de una neurona, Cargar y escalar datos de imágenes, Construir y entrenar una red en Keras, Evaluar y mejorar un modelo",
  outcome: "construir, entrenar y probar en Google Colab con Keras una pequeña red neuronal que lee dígitos escritos a mano, informar su exactitud con imágenes nuevas, probar un cambio para mejorarla y explicar lo que el modelo puede y no puede hacer.",
  about: [
    "El aprendizaje profundo hace funcionar el desbloqueo con la cara en los teléfonos, los asistentes de voz, las aplicaciones de traducción, las herramientas de imágenes médicas y las cámaras que revisan piezas en una línea de fábrica. Este curso explica cómo funciona con palabras sencillas y luego te pide que construyas tú mismo una red neuronal que funcione.",
    "Es para veteranos que pasan al sector tecnológico, personas que saben algo de Python y cualquiera que haya terminado \"Introducción al aprendizaje automático\". El Capítulo 1 construye las ideas con práctica de lápiz y papel. El Capítulo 2 pasa a Google Colab, un sitio web gratuito que ejecuta Python, donde entrenas una red con Keras, una biblioteca gratuita de aprendizaje profundo. Cada línea de código se da y se explica.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\". Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "En Google Colab, carga los dígitos escritos a mano de MNIST, escálalos, construye y entrena una red neuronal en Keras, informa su exactitud con las imágenes de prueba, predice cinco imágenes de prueba y compáralas con las etiquetas verdaderas, luego haz un cambio (más neuronas o más épocas), vuelve a entrenar y escribe dos oraciones sobre si ayudó y un límite del modelo.",
  chapters: [
    {
      name: "Capítulo 1: Cómo funcionan las redes neuronales",
      lessons: [
        {
          title: "Qué es el aprendizaje profundo",
          minutes: 4,
          goal: "Explicar el aprendizaje profundo con tus propias palabras y decir dónde se usa.",
          text: [
            "El aprendizaje profundo (en inglés, deep learning) es un tipo de aprendizaje automático que usa redes neuronales: muchas pequeñas unidades matemáticas, llamadas neuronas, unidas en capas. \"Profundo\" significa que hay muchas capas. Cada capa encuentra patrones en la salida de la capa anterior.",
            "En una imagen, las primeras capas notan cosas simples como los bordes, las capas del medio notan formas y las últimas capas notan objetos completos, como una cara o un número. Nadie escribe esas reglas: la red las aprende de muchos ejemplos etiquetados.",
            "Funciona mejor cuando hay muchos datos y los datos son variados y ricos: imágenes, sonido, voz y textos largos. Necesita más datos y más potencia de cálculo que los modelos más sencillos, y por eso despegó cuando se volvieron comunes los grandes conjuntos de datos y los chips gráficos rápidos (GPU)."
          ],
          words: [["Aprendizaje profundo", "aprendizaje automático con redes neuronales que tienen muchas capas."], ["Red neuronal", "un modelo hecho de muchas pequeñas unidades (neuronas) unidas en capas."], ["Capa", "un grupo de neuronas que reciben todas la entrada de la capa anterior."], ["GPU", "un chip gráfico que hace muchos cálculos a la vez y se usa para entrenar redes rápido."]],
          slides: [
            { title: "El aprendizaje profundo es", bullets: ["Aprendizaje automático con redes neuronales", "Muchas capas de pequeñas unidades matemáticas", "\"Profundo\" = muchas capas"] },
            { title: "Las capas encuentran patrones", bullets: ["Primeras capas: bordes", "Capas del medio: formas", "Últimas capas: objetos completos"] },
            { title: "Donde se luce", bullets: ["Imágenes, sonido, voz y texto", "Muchos datos", "Necesita más potencia de cálculo (GPU)"] }
          ],
          tryIt: "Anota cuatro herramientas que has usado y que probablemente usan aprendizaje profundo (por ejemplo, desbloqueo con la cara, dictado por voz, búsqueda de fotos, traducción). Para cada una, escribe de qué tipo de datos aprende: imágenes, sonido o texto.",
          youCanNow: "explicar qué es el aprendizaje profundo, por qué usa capas y dónde se usa."
        },
        {
          title: "Dentro de una neurona: pesos, sesgo y activación",
          minutes: 6,
          goal: "Calcular a mano la salida de una sola neurona.",
          text: [
            "Una neurona recibe algunos números, multiplica cada uno por un peso, los suma y agrega un número más llamado sesgo. Los pesos dicen qué tan importante es cada entrada; la red los aprende.",
            "Luego aplica una función de activación, que decide qué pasa adelante. La más común, ReLU, es sencilla: si el total es menor que cero, la salida es 0; si no, la salida es el total.",
            "Ejemplo: entradas 2 y 3, pesos 0.5 y -1, sesgo 1. Total = 2 x 0.5 + 3 x (-1) + 1 = 1 - 3 + 1 = -1. ReLU convierte -1 en 0, así que esta neurona da 0. Con entradas 2 y 1: 1 - 1 + 1 = 1, así que da 1.",
            "Una red tiene miles de estas. La última capa suele usar softmax, que convierte sus salidas en probabilidades que suman el 100 por ciento, una por cada respuesta posible."
          ],
          steps: ["Multiplica cada entrada por su peso.", "Suma los resultados.", "Agrega el sesgo.", "Aplica la activación: con ReLU, lo negativo se vuelve 0.", "Ese número es la salida de la neurona."],
          words: [["Neurona", "una pequeña unidad que multiplica las entradas por pesos, agrega un sesgo y aplica una activación."], ["Peso", "un número que aprende la red y que dice cuánto importa una entrada."], ["Sesgo", "un número extra que se suma al total; también se aprende."], ["Función de activación", "la regla que decide qué pasa adelante una neurona."], ["ReLU", "una activación: los totales negativos se vuelven 0 y los demás quedan igual."], ["Softmax", "convierte las salidas de la última capa en probabilidades que suman 1."]],
          slides: [
            { title: "Una neurona", bullets: ["Entradas x pesos, sumadas", "Más el sesgo", "Luego una función de activación"] },
            { title: "ReLU", bullets: ["Menos de cero: salida 0", "Cero o más: salida igual al total"] },
            { title: "Ejemplo resuelto", bullets: ["Entradas 2, 3; pesos 0.5, -1; sesgo 1", "2 x 0.5 + 3 x (-1) + 1 = -1", "ReLU(-1) = 0"] },
            { title: "La última capa", bullets: ["Softmax da probabilidades para cada respuesta", "Las probabilidades suman el 100%"] }
          ],
          tryIt: "Calcula a mano la salida de una neurona: entradas 4 y 1, pesos 0.5 y 2, sesgo -3, activación ReLU. Luego cambia el sesgo a -6 y vuelve a calcularla. (Respuestas: 1 y luego 0.)",
          youCanNow: "calcular la salida de una neurona a partir de sus entradas, pesos, sesgo y activación."
        },
        {
          title: "Cómo aprende una red: pérdida, épocas y pasos pequeños",
          minutes: 5,
          goal: "Explicar cómo el entrenamiento cambia los pesos para cometer menos errores.",
          text: [
            "Al principio los pesos son aleatorios, así que las suposiciones de la red son malas. El entrenamiento arregla eso. La red hace una suposición y una función de pérdida mide qué tan equivocada estuvo: una pérdida grande significa muy equivocada; una pérdida pequeña, cerca.",
            "Luego calcula, para cada peso, en qué dirección bajaría la pérdida (este paso se llama retropropagación) y mueve cada peso un pequeño paso en esa dirección (descenso de gradiente). El tamaño del paso es la tasa de aprendizaje: si es muy grande se pasa, si es muy pequeña va muy lento.",
            "Una pasada por todos los ejemplos de entrenamiento es una época. El entrenamiento suele tomar varias épocas. Miras cómo baja la pérdida y sube la exactitud, y revisas un conjunto de validación (datos guardados aparte del entrenamiento) para detectar el sobreajuste: si la exactitud de entrenamiento sigue subiendo pero la de validación baja, detente."
          ],
          steps: ["Empieza con pesos aleatorios.", "Haz suposiciones con los ejemplos de entrenamiento.", "Mide el error con la función de pérdida.", "Mueve cada peso un pequeño paso para bajar la pérdida.", "Repite durante varias épocas, mirando la exactitud de validación."],
          words: [["Pérdida", "un número que mide qué tan equivocadas son las suposiciones de la red."], ["Retropropagación", "calcular cómo afectó cada peso a la pérdida."], ["Descenso de gradiente", "mover los pesos en pasos pequeños para bajar la pérdida."], ["Tasa de aprendizaje", "qué tan grande es cada paso."], ["Época", "una pasada completa por los datos de entrenamiento."], ["Conjunto de validación", "datos guardados aparte durante el entrenamiento para detectar el sobreajuste."]],
          slides: [
            { title: "Adivinar, medir, ajustar", bullets: ["Pesos aleatorios al principio", "La pérdida mide qué tan equivocada está", "Ajusta los pesos para bajar la pérdida"] },
            { title: "Pasos pequeños", bullets: ["La retropropagación encuentra la dirección", "El descenso de gradiente da el paso", "La tasa de aprendizaje fija el tamaño del paso"] },
            { title: "Épocas y validación", bullets: ["Época: una pasada por los datos", "Mira la exactitud de validación", "Entrenamiento sube, validación baja = sobreajuste"] }
          ],
          tryIt: "Juega a \"adivina el número\" con un amigo o solo: elige un número escondido del 1 al 100, adivina, recibe \"muy alto\" o \"muy bajo\" y cambia tu suposición con un paso más pequeño cada vez. Anota qué parte del juego se parece a la pérdida, cuál a la tasa de aprendizaje y cuántas rondas (épocas) tomó.",
          youCanNow: "explicar con palabras sencillas la pérdida, la retropropagación, el descenso de gradiente, la tasa de aprendizaje, las épocas y el sobreajuste."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funcionan las redes neuronales",
        questions: [
          { q: "¿Qué significa \"profundo\" en el aprendizaje profundo?", options: ["Que usa mucha electricidad", "Que solo funciona bajo el agua", "Que la red tiene muchas capas", "Que es difícil de explicar"], answer: 2, why: "Profundo significa muchas capas de neuronas." },
          { q: "El total de una neurona es -2. Con ReLU, ¿qué salida da?", options: ["-2", "0", "1", "2"], answer: 1, why: "ReLU convierte cualquier total negativo en 0." },
          { q: "Entradas 1 y 2, pesos 3 y 1, sesgo 0, ReLU. ¿Cuál es la salida?", options: ["0", "3", "5", "6"], answer: 2, why: "1 x 3 + 2 x 1 + 0 = 5, y 5 no es negativo." },
          { q: "¿Qué mide la función de pérdida?", options: ["Cuántas capas hay", "Qué tan equivocadas son las suposiciones de la red", "Qué tan rápida es la computadora", "Cuántos datos tienes"], answer: 1, why: "La pérdida es el tamaño del error." },
          { q: "La exactitud de entrenamiento sigue subiendo pero la de validación baja. ¿Qué está pasando?", options: ["La red es perfecta", "Sobreajuste", "La tasa de aprendizaje es cero", "Faltan los datos"], answer: 1, why: "Mejorar con los datos de entrenamiento pero empeorar con los guardados aparte es sobreajuste." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir una red neuronal en Colab",
      lessons: [
        {
          title: "Cargar y preparar datos de imágenes",
          minutes: 5,
          goal: "Cargar los dígitos de MNIST en Colab, escalarlos y mirar una imagen.",
          text: [
            "MNIST es un famoso conjunto de datos de práctica: 70,000 imágenes pequeñas de dígitos del 0 al 9 escritos a mano, cada una de 28 por 28 píxeles, con el dígito correcto como etiqueta. Keras, una biblioteca gratuita de aprendizaje profundo que funciona en Google Colab, puede cargarlo con una línea, ya dividido en 60,000 imágenes de entrenamiento y 10,000 de prueba.",
            "Cada píxel es un número de 0 (negro) a 255 (blanco). Las redes aprenden mejor con números pequeños, así que los escalas entre 0 y 1 dividiendo entre 255. Esto se llama normalizar.",
            "Mira tus datos antes de entrenar. matplotlib, una biblioteca para hacer gráficos, puede dibujar una imagen para que compruebes que la etiqueta coincide con el dibujo."
          ],
          steps: ["En un cuaderno nuevo de Colab ejecuta: import keras", "Carga: (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()", "Escala: x_train = x_train / 255.0 y x_test = x_test / 255.0", "Revisa los tamaños: print(x_train.shape, x_test.shape)", "Dibuja una: import matplotlib.pyplot as plt; plt.imshow(x_train[0], cmap=\"gray\"); plt.show(); print(y_train[0])"],
          words: [["MNIST", "un conjunto de datos de práctica con 70,000 imágenes de dígitos escritos a mano."], ["Keras", "una biblioteca de Python gratuita y fácil para principiantes para construir redes neuronales."], ["Píxel", "un punto de una imagen, guardado como número."], ["Normalizar", "escalar los números a un rango pequeño, como de 0 a 1, para que el entrenamiento funcione mejor."], ["matplotlib", "una biblioteca de Python para dibujar gráficos e imágenes."]],
          slides: [
            { title: "Los dígitos de MNIST", bullets: ["70,000 dígitos escritos a mano, del 0 al 9", "28 x 28 píxeles cada uno", "60,000 para entrenar, 10,000 para probar"] },
            { title: "Escala los píxeles", bullets: ["Los píxeles van de 0 a 255", "Divide entre 255.0 para tener de 0 a 1", "Los números pequeños entrenan mejor"] },
            { title: "Mira antes de entrenar", bullets: ["plt.imshow(x_train[0], cmap=\"gray\")", "Imprime la etiqueta para revisar que coincida"] }
          ],
          sources: [KERAS_MNIST, COLAB],
          tryIt: "Carga y escala MNIST en Colab. Imprime las formas de los conjuntos de entrenamiento y de prueba. Dibuja las imágenes de las posiciones 0, 1 y 2 e imprime sus etiquetas para revisar que coincidan.",
          youCanNow: "cargar un conjunto de datos de imágenes, normalizarlo y revisarlo a simple vista."
        },
        {
          title: "Construir y entrenar la red",
          minutes: 6,
          goal: "Construir una red en Keras, compilarla y entrenarla durante unas pocas épocas.",
          text: [
            "Un modelo Sequential es una pila de capas. El nuestro: keras.Input(shape=(28, 28)) dice qué entra. layers.Flatten() convierte cada imagen de 28 x 28 en una fila de 784 números. layers.Dense(128, activation=\"relu\") es una capa de 128 neuronas. layers.Dense(10, activation=\"softmax\") es la salida: una probabilidad para cada dígito del 0 al 9.",
            "compile fija cómo aprende: optimizer=\"adam\" (un tipo popular de descenso de gradiente), loss=\"sparse_categorical_crossentropy\" (la pérdida adecuada cuando las etiquetas son números simples como 7) y metrics=[\"accuracy\"] para que veas con qué frecuencia acierta.",
            "fit la entrena: model.fit(x_train, y_train, epochs=5, validation_split=0.1). validation_split=0.1 guarda aparte el 10 por ciento de los datos de entrenamiento para detectar el sobreajuste. Cada época imprime loss (pérdida), accuracy (exactitud), val_loss y val_accuracy. Mira cómo baja la pérdida."
          ],
          steps: ["from keras import layers", "model = keras.Sequential([keras.Input(shape=(28, 28)), layers.Flatten(), layers.Dense(128, activation=\"relu\"), layers.Dense(10, activation=\"softmax\")])", "model.compile(optimizer=\"adam\", loss=\"sparse_categorical_crossentropy\", metrics=[\"accuracy\"])", "model.summary() para ver las capas.", "model.fit(x_train, y_train, epochs=5, validation_split=0.1)"],
          words: [["Modelo Sequential", "una red hecha de capas apiladas una tras otra."], ["Flatten", "una capa que convierte una cuadrícula de píxeles en una sola fila larga."], ["Capa Dense", "una capa en la que cada neurona se conecta con cada entrada."], ["Optimizador", "el método que actualiza los pesos; adam es uno común."], ["compile", "fija el optimizador, la pérdida y las métricas antes de entrenar."], ["validation_split", "la parte de los datos de entrenamiento que se guarda aparte para detectar el sobreajuste."]],
          slides: [
            { title: "Las capas", bullets: ["Input: una imagen de 28 x 28", "Flatten: una fila de 784 números", "Dense 128, relu: la capa oculta", "Dense 10, softmax: una probabilidad por dígito"] },
            { title: "compile", bullets: ["optimizer=\"adam\"", "loss=\"sparse_categorical_crossentropy\"", "metrics=[\"accuracy\"]"] },
            { title: "fit", bullets: ["epochs=5: cinco pasadas por los datos", "validation_split=0.1 revisa el sobreajuste", "Mira cómo baja la pérdida y sube la exactitud"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Construye, compila y entrena la red durante 5 épocas. Anota accuracy y val_accuracy después de la época 1 y de la época 5. ¿Subieron las dos?",
          youCanNow: "construir una red neuronal en Keras, compilarla y entrenarla vigilando el sobreajuste."
        },
        {
          title: "Probar, predecir y mejorar",
          minutes: 6,
          goal: "Medir la exactitud de prueba, predecir imágenes reales, probar una mejora y nombrar los límites del modelo.",
          text: [
            "La prueba de verdad son los datos que la red nunca vio: model.evaluate(x_test, y_test) imprime la pérdida y la exactitud de prueba. Una red pequeña como la nuestra suele pasar bastante del 90 por ciento en MNIST.",
            "Para predecir, dale imágenes: probs = model.predict(x_test[:5]) da 10 probabilidades para cada imagen. probs.argmax(axis=1) elige el dígito con la probabilidad más alta. Compáralos con y_test[:5].",
            "Para mejorarla, cambia una cosa a la vez y vuelve a probar: más neuronas (Dense(256)), más épocas o una red convolucional (capas que recorren pequeños trozos de la imagen), que llega a cerca del 99 por ciento en el ejemplo oficial de Keras.",
            "Conoce los límites: solo conoce dígitos sueltos y centrados como los de MNIST. Una foto de una señal de tránsito o de una letra igual recibirá un dígito. En el trabajo real, como leer formularios o revisar piezas, una persona revisa los resultados de poca confianza, y el modelo se prueba con datos del lugar real donde se va a usar."
          ],
          steps: ["Ejecuta model.evaluate(x_test, y_test) y anota la exactitud de prueba.", "probs = model.predict(x_test[:5])", "print(probs.argmax(axis=1), y_test[:5]) para comparar las suposiciones con la verdad.", "Cambia una cosa (neuronas o épocas), reconstruye, vuelve a entrenar y vuelve a evaluar.", "Escribe si ayudó y un límite."],
          words: [["evaluate", "prueba el modelo entrenado con datos e informa la pérdida y la exactitud."], ["argmax", "elige la posición del número más grande: aquí, el dígito más probable."], ["Red convolucional (CNN)", "una red con capas que recorren pequeños trozos de una imagen; muy buena con imágenes."], ["Hiperparámetro", "un ajuste que eliges tú, como las neuronas o las épocas, y no uno que aprende la red."]],
          slides: [
            { title: "Prueba con datos no vistos", bullets: ["model.evaluate(x_test, y_test)", "Informa la pérdida y la exactitud de prueba"] },
            { title: "Haz predicciones", bullets: ["probs = model.predict(x_test[:5])", "probs.argmax(axis=1) = los dígitos que adivinó", "Compara con y_test[:5]"] },
            { title: "Mejora una cosa a la vez", bullets: ["Más neuronas o más épocas", "O una red convolucional", "Vuelve a probar después de cada cambio"] },
            { title: "Conoce los límites", bullets: ["Solo conoce dígitos sueltos como los de MNIST", "Pruébalo con datos reales del lugar donde se usará", "Una persona revisa los resultados dudosos"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Tarea final: evalúa tu red con el conjunto de prueba, predice las cinco primeras imágenes de prueba y compáralas con las etiquetas verdaderas, luego cambia Dense(128) por Dense(256) o las épocas a 10, vuelve a entrenar y a evaluar. Escribe dos oraciones: ¿ayudó el cambio y cuál es un límite de este modelo?",
          youCanNow: "entrenar, probar, usar y mejorar una red neuronal, y explicar cuándo se debe confiar en ella y cuándo no."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Construir una red neuronal en Colab",
        questions: [
          { q: "¿Por qué dividir los píxeles de MNIST entre 255.0?", options: ["Para agrandar las imágenes", "Para borrar los píxeles oscuros", "Para cambiar las etiquetas", "Para escalarlos entre 0 y 1 y que el entrenamiento funcione mejor"], answer: 3, why: "Normalizar entre 0 y 1 ayuda a la red a aprender." },
          { q: "¿Qué hace layers.Flatten()?", options: ["Convierte una cuadrícula de 28 x 28 en una fila de 784 números", "Hace más clara la imagen", "Agrega 10 neuronas", "Divide los datos"], answer: 0, why: "Flatten cambia la cuadrícula a una fila para las capas Dense." },
          { q: "¿Por qué la última capa tiene 10 neuronas con softmax?", options: ["Hay 10 épocas", "Siempre son 10", "Hay 10 dígitos posibles y softmax da una probabilidad para cada uno", "Para ahorrar memoria"], answer: 2, why: "Una salida por dígito, como probabilidades que suman 1." },
          { q: "¿Qué línea da el dígito más probable para cada imagen?", options: ["probs.sum()", "model.fit(probs)", "y_test.argmax()", "probs.argmax(axis=1)"], answer: 3, why: "argmax elige la probabilidad más alta." },
          { q: "Quieres saber si Dense(256) es mejor que Dense(128). ¿Qué haces?", options: ["Cambiar cinco cosas a la vez", "Mirar solo la pérdida de entrenamiento", "Cambiarlo, volver a entrenar y comparar la exactitud de prueba", "Adivinar"], answer: 2, why: "Cambia una cosa y vuelve a probar con el mismo conjunto de prueba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción al aprendizaje profundo y las redes neuronales",
    questions: [
      { q: "El aprendizaje profundo es:", options: ["Una forma de guardar archivos", "Aprendizaje automático con redes neuronales de muchas capas", "Un tipo de hoja de cálculo", "Aprender mientras duermes"], answer: 1, why: "Usa redes profundas (de muchas capas)." },
      { q: "¿En qué tarea es especialmente bueno el aprendizaje profundo?", options: ["Reconocer caras en fotos", "Sumar dos números", "Ordenar una lista corta", "Imprimir una página"], answer: 0, why: "Las imágenes, el sonido y el texto son sus puntos fuertes." },
      { q: "En una red de imágenes, las primeras capas suelen notar:", options: ["Caras completas", "El nombre del archivo", "Bordes simples", "La etiqueta"], answer: 2, why: "Las capas van de bordes a formas y a objetos." },
      { q: "¿Por qué despegó el aprendizaje profundo en los últimos años?", options: ["Por los grandes conjuntos de datos y las GPU rápidas", "Por las pantallas más pequeñas", "Por tener menos computadoras", "Por los teclados nuevos"], answer: 0, why: "Necesita muchos datos y mucha potencia de cálculo." },
      { q: "¿Qué hace un peso en una neurona?", options: ["Cuenta las épocas", "Guarda la etiqueta", "Dibuja la imagen", "Fija cuánto importa una entrada"], answer: 3, why: "Los pesos escalan cada entrada." },
      { q: "Entradas 2 y 2, pesos 1 y -2, sesgo 1, ReLU. ¿Salida?", options: ["-1", "0", "1", "3"], answer: 1, why: "2 - 4 + 1 = -1, y ReLU convierte -1 en 0." },
      { q: "Softmax en la última capa da:", options: ["La cantidad de capas", "Probabilidades para cada respuesta que suman el 100%", "La pérdida", "Un número al azar"], answer: 1, why: "Softmax convierte las salidas en probabilidades." },
      { q: "Que la pérdida baje durante el entrenamiento significa:", options: ["Que los datos se achican", "Que la computadora va más lenta", "Que seguro hay sobreajuste", "Que las suposiciones de la red son cada vez menos equivocadas"], answer: 3, why: "Menos pérdida significa errores más pequeños." },
      { q: "La tasa de aprendizaje controla:", options: ["Qué tan grande es cada paso de actualización de los pesos", "Cuántas imágenes hay", "El tamaño de la pantalla", "La cantidad de etiquetas"], answer: 0, why: "Fija el tamaño de cada paso." },
      { q: "Una época es:", options: ["Una neurona", "Una imagen de prueba", "Una pasada por todos los datos de entrenamiento", "Un minuto de entrenamiento"], answer: 2, why: "Una época recorre una vez todo el conjunto de entrenamiento." },
      { q: "Un conjunto de validación se usa para:", options: ["Entrenar más rápido", "Guardar el modelo", "Etiquetar las imágenes", "Detectar el sobreajuste durante el entrenamiento"], answer: 3, why: "Se guarda aparte para revisar el modelo mientras entrena." },
      { q: "¿Cuántas imágenes pone MNIST en su conjunto de prueba?", options: ["28", "784", "10,000", "60,000"], answer: 2, why: "MNIST tiene 60,000 imágenes de entrenamiento y 10,000 de prueba." },
      { q: "Cada imagen de MNIST es:", options: ["Una foto a color de una calle", "28 x 28 píxeles de un dígito escrito a mano", "Un clip de sonido", "Una oración"], answer: 1, why: "Son pequeñas imágenes de dígitos en escala de grises." },
      { q: "¿Qué capa de Keras tiene cada neurona conectada a cada entrada?", options: ["Dense", "Flatten", "Input", "Softmax"], answer: 0, why: "Dense significa totalmente conectada." },
      { q: "¿Qué fija model.compile?", options: ["El conjunto de datos", "El tamaño de la imagen", "El optimizador, la pérdida y las métricas", "La exactitud de prueba"], answer: 2, why: "compile fija cómo aprende el modelo y qué informa." },
      { q: "Las etiquetas son números simples como 7. ¿Qué pérdida va bien?", options: ["sparse_categorical_crossentropy", "accuracy", "relu", "adam"], answer: 0, why: "Esa pérdida espera etiquetas enteras." },
      { q: "¿Qué hace validation_split=0.1 en fit?", options: ["Entrena durante 0.1 épocas", "Borra el 10% de los datos", "Fija la tasa de aprendizaje", "Guarda aparte el 10% de los datos de entrenamiento para revisar el modelo"], answer: 3, why: "Reserva una parte para la validación." },
      { q: "¿Qué línea mide la exactitud con imágenes no vistas?", options: ["model.fit(x_test, y_test)", "model.evaluate(x_test, y_test)", "model.summary()", "plt.imshow(x_test[0])"], answer: 1, why: "evaluate prueba con los datos que le das." },
      { q: "¿Qué tipo de red recorre pequeños trozos de una imagen y funciona muy bien con imágenes?", options: ["Una hoja de cálculo", "Una red convolucional (CNN)", "Un chatbot basado en reglas", "Una sola neurona"], answer: 1, why: "Las CNN están hechas para imágenes." },
      { q: "Tu modelo de dígitos se usa en el trabajo para leer formularios escritos a mano. ¿Cuál es un paso responsable?", options: ["Confiar en todas las respuestas", "No probarlo nunca", "Esconder que se usa un modelo", "Que una persona revise los resultados de poca confianza y probarlo primero con formularios reales"], answer: 3, why: "Las pruebas en el mundo real y la revisión de personas detectan los errores del modelo." }
    ]
  }
};
