"use strict";

// Koach Learn course (shared), Spanish translation of shared/intro-machine-learning.js. See scripts/koachlearn-courses/README.md, "Translations".
// scikit-learn code stays in English; Python writes decimals with a point (5.1), which is noted for students.

const COLAB = { name: "Google Colab: Preguntas frecuentes", url: "https://research.google.com/colaboratory/faq.html" };
const SKLEARN = { name: "scikit-learn: Primeros pasos", url: "https://scikit-learn.org/stable/getting_started.html" };

module.exports = {
  id: "intro-machine-learning-es",
  lang: "es",
  translationOf: "intro-machine-learning",
  category: "Youth",
  name: "Introducción al aprendizaje automático",
  skills: "Explicar cómo aprenden las máquinas, Elegir características y etiquetas, Dividir los datos para entrenar y probar, Entrenar un modelo con scikit-learn, Medir y comparar la exactitud",
  outcome: "entrenar dos modelos sencillos de aprendizaje automático en Google Colab con scikit-learn, probarlos con datos que no han visto, comparar su exactitud y explicar cuál usarías y cuáles son sus límites.",
  about: [
    "El aprendizaje automático está detrás de los filtros de spam, las sugerencias de películas, los tiempos de tráfico de los mapas y las alertas de fraude de una tarjeta bancaria. Este curso te muestra cómo funciona y luego te pide que construyas un modelo tú mismo.",
    "El Capítulo 1 no necesita código: aprendes las ideas con ejemplos de todos los días y pequeñas tablas que haces tú. El Capítulo 2 pasa a Google Colab, un sitio web gratuito que ejecuta Python, donde entrenas y pruebas modelos reales con una biblioteca gratuita llamada scikit-learn. Saber un poco de Python ayuda, pero cada línea de código se da y se explica.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\". Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "En Google Colab, carga el conjunto de datos de flores iris, divídelo en conjuntos de entrenamiento y de prueba, entrena un árbol de decisión y un modelo de k vecinos más cercanos, imprime la exactitud de cada modelo en el conjunto de prueba, usa el mejor para predecir la especie de una flor nueva y escribe dos oraciones: qué modelo elegirías y un límite de tu modelo.",
  chapters: [
    {
      name: "Capítulo 1: Cómo aprenden las máquinas",
      lessons: [
        {
          title: "Qué es el aprendizaje automático",
          minutes: 4,
          goal: "Explicar el aprendizaje automático con tus propias palabras y reconocerlo en la vida diaria.",
          text: [
            "En la programación normal, una persona escribe las reglas. En el aprendizaje automático (en inglés, machine learning o ML), le das a la computadora muchos ejemplos con las respuestas correctas y ella misma encuentra las reglas. El resultado se llama modelo.",
            "Ejemplos de todos los días: tu correo aprende cómo es el spam a partir de millones de correos marcados. Una aplicación de música sugiere canciones según lo que escucharon personas parecidas a ti. Una aplicación de mapas predice el tráfico a partir de viajes pasados.",
            "Dos trabajos comunes: la clasificación pone las cosas en grupos (spam o no spam, qué tipo de flor). La regresión predice un número (el precio de una casa, los minutos que faltan para que llegue el autobús). Cuando los ejemplos vienen con respuestas, se llama aprendizaje supervisado, y eso es lo que enseña este curso."
          ],
          words: [["Aprendizaje automático (ML)", "computadoras que encuentran patrones en ejemplos en lugar de seguir reglas que escribió una persona."], ["Modelo", "lo que produce el aprendizaje automático: un conjunto de patrones aprendidos que hace predicciones."], ["Clasificación", "predecir un grupo o una categoría."], ["Regresión", "predecir un número."], ["Aprendizaje supervisado", "aprender con ejemplos que vienen con las respuestas correctas."]],
          slides: [
            { title: "Reglas frente a aprendizaje", bullets: ["Programación: una persona escribe las reglas", "ML: la computadora encuentra las reglas en los ejemplos", "El resultado es un modelo"] },
            { title: "Aprendizaje automático que ya usas", bullets: ["Filtros de spam", "Sugerencias de canciones y videos", "Tiempos de tráfico en los mapas", "Alertas de fraude de la tarjeta"] },
            { title: "Dos trabajos comunes", bullets: ["Clasificación: ¿qué grupo?", "Regresión: ¿qué número?", "Supervisado: los ejemplos vienen con respuestas"] }
          ],
          tryIt: "Haz una lista de tres aplicaciones que usas y que probablemente usan aprendizaje automático. Para cada una, escribe qué predice y si eso es clasificación (un grupo) o regresión (un número).",
          youCanNow: "explicar qué es el aprendizaje automático y distinguir la clasificación de la regresión."
        },
        {
          title: "Datos: características y etiquetas",
          minutes: 5,
          goal: "Construir un pequeño conjunto de datos con características y una etiqueta.",
          text: [
            "El aprendizaje automático aprende de datos, normalmente una tabla. Cada fila es un ejemplo. Las columnas que describen el ejemplo son las características. La columna con la respuesta que quieres predecir es la etiqueta.",
            "Ejemplo: para predecir si un autobús llegará tarde, cada fila es un viaje. Las características podrían ser la hora del día, el día de la semana y si llovió. La etiqueta es tarde o a tiempo.",
            "Las buenas características son cosas que de verdad afectan la respuesta. Más filas suelen ayudar. Los datos también deben ser justos y completos: si solo juntas viajes de días entre semana, el modelo será malo los fines de semana. Un modelo solo puede ser tan bueno como sus datos."
          ],
          steps: ["Decide qué quieres predecir: esa es tu etiqueta.", "Haz una lista de cosas que podrían afectarlo: esas son tus características.", "Haz una tabla con una fila por ejemplo.", "Llena al menos 10 filas con datos de la vida real.", "Revisa: ¿faltan algunos tipos de ejemplos?"],
          words: [["Conjunto de datos", "una colección de ejemplos, normalmente una tabla."], ["Característica", "una columna que describe un ejemplo y se usa para hacer la predicción."], ["Etiqueta", "la columna con la respuesta que el modelo aprende a predecir."], ["Sesgo en los datos", "cuando los datos dejan fuera o cuentan de más a algunos grupos, y el modelo es injusto o se equivoca con ellos."]],
          slides: [
            { title: "Los datos son una tabla", bullets: ["Cada fila: un ejemplo", "Características: las columnas que describen", "Etiqueta: la respuesta a predecir"] },
            { title: "Ejemplo: ¿llega tarde el autobús?", bullets: ["Características: hora, día, lluvia", "Etiqueta: tarde o a tiempo"] },
            { title: "Buenos datos", bullets: ["Características que de verdad importan", "Suficientes filas", "Que no falten grupos, como los fines de semana"] }
          ],
          tryIt: "Elige algo de la vida diaria que puedas predecir, como si estarás cansado después de entrenar o si una tienda estará llena. Haz una tabla con dos o tres características y una etiqueta, y llena 10 filas.",
          youCanNow: "elegir una etiqueta y características útiles y construir un pequeño conjunto de datos."
        },
        {
          title: "Entrenar y probar: ¿el modelo sirve?",
          minutes: 5,
          goal: "Dividir los datos en un conjunto de entrenamiento y uno de prueba y medir la exactitud.",
          text: [
            "Entrenar es cuando el modelo estudia ejemplos para encontrar patrones. Pero un modelo que solo memorizó sus ejemplos podría parecer perfecto y aun así fallar con ejemplos nuevos. Eso se llama sobreajuste, como un estudiante que memorizó las respuestas del examen del año pasado.",
            "Por eso guardas algunos datos aparte. El conjunto de entrenamiento (a menudo cerca del 75 al 80 por ciento de las filas) se usa para aprender. El conjunto de prueba (el resto) se esconde hasta el final y se usa para revisar el modelo con ejemplos que nunca ha visto.",
            "La exactitud es la parte de los ejemplos de prueba que acertó. 18 aciertos de 20 es el 90 por ciento. Pregúntate siempre cuánto cuesta un error: una sugerencia de canción equivocada no importa, una alerta de fraude que no llegó sí."
          ],
          steps: ["Mezcla tus filas.", "Pon cerca del 75 por ciento en el conjunto de entrenamiento.", "Guarda el resto como conjunto de prueba y no lo mires.", "Encuentra un patrón (una regla) solo con el conjunto de entrenamiento.", "Úsalo con el conjunto de prueba y cuenta cuántos acertó."],
          words: [["Entrenamiento", "el modelo aprendiendo patrones a partir de ejemplos."], ["Conjunto de entrenamiento", "las filas que se usan para aprender."], ["Conjunto de prueba", "filas guardadas aparte para revisar el modelo con ejemplos nuevos."], ["Sobreajuste", "cuando un modelo memoriza sus datos de entrenamiento y le va mal con datos nuevos."], ["Exactitud", "la parte de las predicciones que fueron correctas."]],
          slides: [
            { title: "Entrenamiento", bullets: ["El modelo estudia ejemplos", "Encuentra patrones", "Memorizar no es aprender"] },
            { title: "Guarda datos aparte", bullets: ["Entrenamiento: cerca del 75-80% de las filas", "Prueba: el resto, escondido hasta el final"] },
            { title: "Exactitud", bullets: ["Aciertos / total de ejemplos de prueba", "18 de 20 aciertos = 90%", "Pregúntate cuánto cuesta un error"] }
          ],
          tryIt: "Toma tu tabla de 10 filas de la Lección 2. Tapa las últimas 2 filas. Con las primeras 8, escribe una regla sencilla (por ejemplo \"si llovió, el autobús llega tarde\"). Prueba la regla con las 2 filas escondidas y calcula la exactitud.",
          youCanNow: "dividir los datos en conjuntos de entrenamiento y de prueba y calcular la exactitud."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo aprenden las máquinas",
        questions: [
          { q: "¿De qué aprende un modelo de aprendizaje automático?", options: ["De reglas que escribe una persona para cada caso", "De la batería de la computadora", "De ejemplos, a menudo con las respuestas correctas", "Solo de suposiciones al azar"], answer: 2, why: "El aprendizaje automático encuentra patrones en ejemplos." },
          { q: "Predecir la temperatura de mañana en grados es:", options: ["Regresión", "Clasificación", "No es aprendizaje automático", "Una etiqueta"], answer: 0, why: "Predecir un número es regresión." },
          { q: "En una tabla para predecir si una tienda estará llena, \"llena o no llena\" es la:", options: ["Característica", "Conjunto de prueba", "Exactitud", "Etiqueta"], answer: 3, why: "La etiqueta es la respuesta que quieres predecir." },
          { q: "¿Por qué mantener escondido el conjunto de prueba hasta el final?", options: ["Para entrenar más rápido", "Para revisar el modelo con ejemplos que nunca ha visto", "Porque está roto", "Para agrandar los datos"], answer: 1, why: "Probar con datos nuevos muestra si el modelo de verdad aprendió." },
          { q: "Un modelo acierta 15 de 20 ejemplos de prueba. ¿Cuál es su exactitud?", options: ["15%", "20%", "50%", "75%"], answer: 3, why: "15 dividido entre 20 es 0.75, o el 75 por ciento." }
        ]
      }
    },
    {
      name: "Capítulo 2: Entrenar tu primer modelo en Colab",
      lessons: [
        {
          title: "Cargar un conjunto de datos con scikit-learn",
          minutes: 5,
          goal: "Cargar un conjunto de datos de práctica en Colab y mirar sus características y etiquetas.",
          text: [
            "scikit-learn es una biblioteca gratuita de Python para el aprendizaje automático, ya instalada en Google Colab. Trae pequeños conjuntos de datos de práctica. El conjunto iris tiene 150 flores. Cada una tiene cuatro características (el largo y el ancho de dos partes de la flor, en centímetros) y una etiqueta: una de tres especies.",
            "Cárgalo con: from sklearn.datasets import load_iris, y luego iris = load_iris(). Las características están en iris.data y las etiquetas en iris.target. iris.feature_names e iris.target_names te dicen qué significan las columnas y las etiquetas.",
            "Mira siempre tus datos antes de entrenar: cuántas filas hay, cuáles son las columnas y algunas filas de ejemplo. iris.data.shape te dice las filas y las columnas: (150, 4)."
          ],
          steps: ["Abre un cuaderno nuevo en colab.research.google.com.", "Ejecuta: from sklearn.datasets import load_iris", "Ejecuta: iris = load_iris()", "Imprime iris.data.shape, iris.feature_names e iris.target_names.", "Imprime las tres primeras filas: print(iris.data[:3], iris.target[:3])"],
          words: [["scikit-learn", "una biblioteca gratuita de Python para el aprendizaje automático, que se importa como sklearn."], ["Conjunto iris", "un famoso conjunto de datos de práctica con 150 flores de tres especies."], ["shape", "la cantidad de filas y columnas de los datos."], ["X e y", "nombres comunes: X para las características, y para las etiquetas."]],
          slides: [
            { title: "scikit-learn", bullets: ["Biblioteca gratuita de Python para ML", "Ya está en Google Colab", "Trae conjuntos de datos de práctica"] },
            { title: "El conjunto iris", bullets: ["150 flores, 4 características cada una", "Etiqueta: una de 3 especies", "iris.data e iris.target"] },
            { title: "Mira antes de entrenar", bullets: ["iris.data.shape da (150, 4)", "feature_names y target_names", "Imprime algunas filas"] }
          ],
          sources: [SKLEARN, COLAB],
          tryIt: "Carga el conjunto iris en Colab. Imprime la forma (shape), los nombres de las cuatro características, los nombres de las tres especies y las cinco primeras filas con sus etiquetas. Anota qué número corresponde a cada especie.",
          youCanNow: "cargar un conjunto de datos en Colab y describir sus características, sus etiquetas y su tamaño."
        },
        {
          title: "Entrenar y probar un árbol de decisión",
          minutes: 6,
          goal: "Dividir los datos, entrenar un árbol de decisión y medir su exactitud.",
          text: [
            "Un árbol de decisión aprende un conjunto de preguntas de sí o no, como un diagrama de flujo: \"¿El pétalo mide menos de 2.5 cm? Entonces es la especie 0.\" Es fácil de explicar, y por eso es un buen primer modelo.",
            "Todos los modelos de scikit-learn funcionan igual: lo creas, lo ajustas (fit) con los datos de entrenamiento y luego predices (predict) con datos nuevos. El código: X, y = load_iris(return_X_y=True). X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42). model = DecisionTreeClassifier(random_state=42). model.fit(X_train, y_train).",
            "Luego pruébalo: predictions = model.predict(X_test) y print(accuracy_score(y_test, predictions)). random_state=42 solo fija la mezcla para que obtengas el mismo resultado cada vez que lo ejecutes."
          ],
          steps: ["Importa: from sklearn.model_selection import train_test_split", "Importa: from sklearn.tree import DecisionTreeClassifier", "Importa: from sklearn.metrics import accuracy_score", "Divide con train_test_split(X, y, test_size=0.25, random_state=42).", "Crea el modelo, llama a model.fit(X_train, y_train), luego predice con X_test e imprime la exactitud."],
          words: [["Árbol de decisión", "un modelo que aprende un diagrama de flujo de preguntas de sí o no."], ["fit", "entrenar el modelo con datos."], ["predict", "usar el modelo entrenado para adivinar las etiquetas de datos nuevos."], ["train_test_split", "la herramienta de scikit-learn que divide los datos en conjuntos de entrenamiento y de prueba."], ["random_state", "un número que fija la mezcla al azar para que los resultados se repitan."]],
          slides: [
            { title: "Árboles de decisión", bullets: ["Un diagrama de flujo de preguntas de sí o no", "Fácil de explicar", "Un buen primer modelo"] },
            { title: "El patrón para todo modelo", bullets: ["Créalo", "fit(X_train, y_train)", "predict(X_test)"] },
            { title: "Mídelo", bullets: ["accuracy_score(y_test, predictions)", "test_size=0.25 guarda el 25% para probar", "random_state hace que los resultados se repitan"] }
          ],
          sources: [SKLEARN],
          tryIt: "Escribe y ejecuta en Colab todo el código del árbol de decisión. Imprime la exactitud. Luego cambia test_size a 0.5, ejecútalo de nuevo y anota si la exactitud subió o bajó.",
          youCanNow: "dividir los datos, entrenar un árbol de decisión con fit, predecir con él y medir la exactitud."
        },
        {
          title: "Comparar modelos y conocer sus límites",
          minutes: 6,
          goal: "Entrenar un segundo modelo, compararlo con el primero, predecir un ejemplo nuevo y nombrar un límite.",
          text: [
            "Casi nunca hay un modelo perfecto, así que pruebas más de uno. Los k vecinos más cercanos (KNN) predicen buscando los k ejemplos más parecidos en los datos de entrenamiento y haciendo una votación. Lo creas con KNeighborsClassifier(n_neighbors=5) de sklearn.neighbors; usa los mismos pasos fit y predict.",
            "Compara los dos modelos con el mismo conjunto de prueba. Para predecir una flor nueva, dale al modelo una lista dentro de otra lista: model.predict([[5.1, 3.5, 1.4, 0.2]]). En Python los decimales se escriben con punto. Devuelve el número de la especie; iris.target_names lo convierte en un nombre.",
            "Conoce los límites. Estos modelos solo conocen estas tres especies y estas cuatro medidas: muéstrales una rosa y aun así dirán que es un iris. Un conjunto de prueba pequeño puede hacer que la exactitud parezca mejor o peor de lo que es. Y con datos reales sobre personas, revisa que el modelo funcione de forma justa para cada grupo antes de que alguien dependa de él."
          ],
          steps: ["Importa: from sklearn.neighbors import KNeighborsClassifier", "Crea knn = KNeighborsClassifier(n_neighbors=5) y ajústalo con los mismos datos de entrenamiento.", "Imprime las dos exactitudes.", "Predice una flor nueva con el mejor modelo: model.predict([[5.1, 3.5, 1.4, 0.2]])", "Escribe qué modelo elegirías y un límite."],
          words: [["k vecinos más cercanos (KNN)", "un modelo que predice con una votación de los ejemplos de entrenamiento más parecidos."], ["n_neighbors", "cuántos ejemplos parecidos mira KNN (la k)."], ["Límite", "un caso que el modelo no puede manejar bien."], ["Equidad", "que un modelo funcione igual de bien para cada grupo de personas al que afecta."]],
          slides: [
            { title: "Prueba más de un modelo", bullets: ["KNN: votación de los k ejemplos más parecidos", "KNeighborsClassifier(n_neighbors=5)", "Los mismos pasos fit y predict"] },
            { title: "Compara y predice", bullets: ["El mismo conjunto de prueba para los dos modelos", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "target_names convierte los números en nombres"] },
            { title: "Conoce los límites", bullets: ["Solo conoce aquello con lo que se entrenó", "Los conjuntos de prueba pequeños pueden engañar", "Con datos de personas, revisa la equidad"] }
          ],
          sources: [SKLEARN],
          tryIt: "Tarea final: en un solo cuaderno, entrena el árbol de decisión y un modelo KNN con la misma división, imprime las dos exactitudes, predice con el mejor modelo la especie de la flor [6.0, 2.9, 4.5, 1.5] e imprime su nombre, y luego escribe dos oraciones sobre qué modelo elegiste y un límite que tiene.",
          youCanNow: "entrenar, probar y comparar dos modelos, hacer una predicción y explicar los límites de un modelo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Entrenar tu primer modelo en Colab",
        questions: [
          { q: "¿Qué te dice iris.data.shape (150, 4)?", options: ["150 especies y 4 flores", "El modelo tiene una exactitud del 150%", "4 filas y 150 columnas", "150 filas y 4 columnas de características"], answer: 3, why: "shape muestra primero las filas y luego las columnas." },
          { q: "¿Cuál es el orden correcto de los pasos para un modelo de scikit-learn?", options: ["Crearlo, ajustarlo con los datos de entrenamiento y luego predecir", "predict, luego fit, luego crear", "fit con el conjunto de prueba, luego predecir con los datos de entrenamiento", "Solo predecir"], answer: 0, why: "Todo modelo se crea, se ajusta y luego se usa para predecir." },
          { q: "¿Qué significa test_size=0.25 en train_test_split?", options: ["Usar 25 filas", "Entrenar durante 25 minutos", "Guardar el 25% de las filas para probar", "La exactitud debe ser del 25%"], answer: 2, why: "test_size fija la parte de las filas que se guarda aparte." },
          { q: "¿Cómo hace una predicción el modelo de k vecinos más cercanos?", options: ["Le pregunta a una persona", "Lanza una moneda", "Escribe reglas a mano", "Hace una votación de los ejemplos de entrenamiento más parecidos"], answer: 3, why: "KNN usa los k ejemplos más cercanos." },
          { q: "A tu modelo de iris le dan las medidas de una rosa. ¿Qué pasa?", options: ["Dice \"rosa\"", "Se niega", "Igual nombra una de las tres especies de iris", "Aprende solo qué es una rosa"], answer: 2, why: "Un modelo solo conoce las etiquetas con las que se entrenó." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción al aprendizaje automático",
    questions: [
      { q: "Aprendizaje automático significa:", options: ["Una persona escribe cada regla", "Una computadora encuentra patrones a partir de ejemplos", "Un robot que camina", "Un internet más rápido"], answer: 1, why: "El aprendizaje automático aprende de los datos." },
      { q: "¿Cuál es un uso diario del aprendizaje automático?", options: ["Un filtro de spam del correo", "Un interruptor de luz", "Un mapa de papel", "Una calculadora que suma 2 + 2"], answer: 0, why: "Los filtros de spam aprenden de muchos correos marcados." },
      { q: "Decidir si una foto muestra un gato o un perro es:", options: ["Regresión", "Sobreajuste", "Clasificación", "Una característica"], answer: 2, why: "Elegir un grupo es clasificación." },
      { q: "Predecir cuántos minutos faltan para que llegue el autobús es:", options: ["Regresión", "Clasificación", "Un conjunto de etiquetas", "Una prueba"], answer: 0, why: "Predecir un número es regresión." },
      { q: "El aprendizaje supervisado usa:", options: ["Ningún dato", "Solo imágenes", "Solo un maestro en el salón", "Ejemplos con las respuestas correctas"], answer: 3, why: "Supervisado significa que los ejemplos están etiquetados." },
      { q: "En un conjunto de datos, cada fila suele ser:", options: ["Una característica", "Un ejemplo", "Todo el modelo", "Una nota de prueba"], answer: 1, why: "Las filas son ejemplos; las columnas son características o la etiqueta." },
      { q: "Para predecir si se agotarán las entradas de un partido, ¿qué característica tiene sentido?", options: ["El color del sitio web de las entradas", "El día de la semana y el rival", "La exactitud del modelo", "La etiqueta"], answer: 1, why: "Las características deben afectar de verdad la respuesta." },
      { q: "Tus datos de autobuses solo tienen viajes de días entre semana. ¿Cuál es el riesgo?", options: ["Ninguno", "Entrenará demasiado rápido", "La exactitud será del 100%", "El modelo predecirá mal los fines de semana"], answer: 3, why: "Si faltan tipos de ejemplos, el modelo se equivoca con ellos." },
      { q: "El sobreajuste es cuando un modelo:", options: ["Memoriza los datos de entrenamiento y falla con datos nuevos", "Es demasiado pequeño para cargarlo", "Tiene muy pocas características", "Se queda sin memoria"], answer: 0, why: "Un modelo sobreajustado no generaliza." },
      { q: "¿Qué datos debes usar para medir la exactitud?", options: ["El conjunto de entrenamiento", "Cualquier dato que quieras", "El conjunto de prueba que el modelo no ha visto", "Solo una fila"], answer: 2, why: "Solo los datos no vistos muestran el rendimiento real." },
      { q: "Un modelo acierta 45 de 50 filas de prueba. La exactitud es:", options: ["45%", "50%", "90%", "95%"], answer: 2, why: "45 dividido entre 50 es 0.9." },
      { q: "scikit-learn es:", options: ["Una aplicación de pago", "Un tipo de conjunto de datos", "Una biblioteca gratuita de Python para el aprendizaje automático", "Una hoja de cálculo"], answer: 2, why: "scikit-learn (sklearn) es gratuita y de código abierto." },
      { q: "En el conjunto iris, la especie es la:", options: ["Característica", "Etiqueta", "Forma", "Modelo"], answer: 1, why: "La especie es lo que predecimos, así que es la etiqueta." },
      { q: "¿Qué línea entrena un modelo?", options: ["model.fit(X_train, y_train)", "model.predict(X_test)", "print(model)", "load_iris()"], answer: 0, why: "fit entrena el modelo." },
      { q: "¿Qué línea da las predicciones para el conjunto de prueba?", options: ["model.fit(X_test)", "accuracy_score(X_test)", "model.predict(X_test)", "train_test_split(model)"], answer: 2, why: "predict usa el modelo entrenado con datos nuevos." },
      { q: "¿Por qué poner random_state=42?", options: ["Para que los resultados sean iguales en cada ejecución", "Para que el modelo sea un 42% mejor", "Para usar 42 filas", "Es obligatorio para ejecutar Python"], answer: 0, why: "Fija la mezcla al azar." },
      { q: "Un árbol de decisión es como:", options: ["Una votación de vecinos", "El total de una hoja de cálculo", "Una suposición al azar", "Un diagrama de flujo de preguntas de sí o no"], answer: 3, why: "Los árboles dividen los datos con preguntas." },
      { q: "Para predecir una flor nueva escribes:", options: ["model.predict(5.1, 3.5, 1.4, 0.2)", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "model.fit([5.1])", "predict.model(5.1)"], answer: 1, why: "El modelo espera una lista de filas, así que una fila va dentro de otra lista." },
      { q: "Dos modelos sacan 93% y 97% con el mismo conjunto de prueba. Un buen paso siguiente es:", options: ["Borrar los dos", "Elegir el de 97% y pensar también en sus límites y en el costo de los errores", "Volver a entrenar con el conjunto de prueba", "Elegir el más lento"], answer: 1, why: "Compara de forma justa y luego considera los límites y el costo de los errores." },
      { q: "Antes de usar un modelo que toma decisiones sobre personas, debes:", options: ["Saltarte las pruebas", "Esconder cómo funciona", "Usar solo los datos de entrenamiento", "Revisar que funcione de forma justa para cada grupo"], answer: 3, why: "Revisar la equidad protege a las personas a las que afecta." }
    ]
  }
};
