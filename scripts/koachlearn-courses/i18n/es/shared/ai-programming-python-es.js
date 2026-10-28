"use strict";

// Koach Learn course (shared), Spanish translation of shared/ai-programming-python.js. See scripts/koachlearn-courses/README.md, "Translations".
// The sentiment model in the English course only understands English, so the model and its URL are kept and students are told
// to write the comments they classify in English (Spanish text stays in the chatbot lessons, which use plain Python rules).

const COLAB = { name: "Google Colab: Preguntas frecuentes", url: "https://research.google.com/colaboratory/faq.html" };
const HF_PIPELINES = { name: "Hugging Face Transformers: Pipelines", url: "https://huggingface.co/docs/transformers/en/main_classes/pipelines" };
const HF_MODEL = { name: "Hugging Face: ficha del modelo distilbert-base-uncased-finetuned-sst-2-english", url: "https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english" };

module.exports = {
  id: "ai-programming-python-es",
  lang: "es",
  translationOf: "ai-programming-python",
  category: "Youth",
  name: "Programación de IA con Python para principiantes",
  skills: "Usar bibliotecas de Python en Colab, Crear un chatbot basado en reglas, Cargar un modelo de IA preentrenado, Ejecutar la IA sobre muchos textos, Revisar los resultados de la IA",
  outcome: "escribir un programa en Python en Google Colab que use un modelo de IA preentrenado y gratuito para clasificar una lista de comentarios escritos en positivos y negativos, imprima un resumen y marque los resultados de los que la IA no está segura para que una persona los revise.",
  about: [
    "Este curso es para principiantes que saben un poco de Python (variables, if, listas y bucles) y quieren hacer un programa que use IA. Si nunca has programado, toma primero \"Introducción a la programación con Python\".",
    "Vas a empezar construyendo un chatbot sencillo con reglas de Python, para ver lo que un programa puede hacer sin IA. Luego vas a cargar un modelo de IA gratuito y preentrenado de Hugging Face y lo vas a usar para leer el ánimo de comentarios escritos, el mismo tipo de herramienta que usan las empresas con las reseñas y las encuestas.",
    "Todo se ejecuta gratis en Google Colab, en tu navegador. Cada lección dura unos cinco minutos y termina con código que escribes tú mismo. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Construye un clasificador de opiniones en Google Colab: escribe una lista de al menos seis comentarios cortos en inglés (por ejemplo, de una práctica del equipo, una clase o una tienda pequeña), ejecuta un modelo de sentimiento preentrenado sobre cada uno, imprime cada comentario con su etiqueta y su puntuación, marca cualquier resultado con una puntuación menor que 0.80 como \"revisar a mano\" e imprime cuántos comentarios fueron positivos y cuántos negativos.",
  chapters: [
    {
      name: "Capítulo 1: Piezas de Python para la IA",
      lessons: [
        {
          title: "Qué es programar IA y cómo preparar Colab",
          minutes: 5,
          goal: "Explicar qué es un modelo de IA e importar una biblioteca de Python en Colab.",
          text: [
            "La programación normal significa que escribes tú mismo cada regla: si la palabra es \"hola\", responde \"buenos días\". Programar IA significa que usas un modelo: un programa que aprendió patrones de muchos ejemplos, así que puede manejar casos para los que nunca escribiste una regla.",
            "Casi nunca se construye un modelo desde cero. Usas una biblioteca: código ya hecho que otra persona escribió y compartió. En Python cargas una biblioteca con import. Algunas bibliotecas de IA gratuitas y populares son Hugging Face Transformers (modelos de lenguaje), scikit-learn (aprendizaje automático clásico) y PyTorch (aprendizaje profundo).",
            "Google Colab ya tiene muchas de estas bibliotecas. Si falta una, la instalas en una celda con !pip install seguido de su nombre. El ! le dice a Colab que ejecute una orden del sistema en lugar de Python. Colab es gratis, pero sus computadoras son compartidas, así que los recursos gratuitos son limitados y pueden cambiar."
          ],
          steps: ["Abre colab.research.google.com y crea un cuaderno nuevo.", "En una celda, escribe: import random", "En la línea siguiente: print(random.choice([\"piedra\", \"papel\", \"tijera\"]))", "Ejecútala varias veces y mira cómo cambia la respuesta.", "Si alguna vez un import falla con \"No module named\", ejecuta !pip install <nombre> en una celda y vuelve a intentarlo."],
          words: [["Modelo de IA", "un programa que aprendió patrones de muchos ejemplos y puede hacer suposiciones sobre datos nuevos."], ["Biblioteca", "código ya hecho que puedes cargar y usar en tu propio programa."], ["import", "la palabra de Python que carga una biblioteca."], ["pip", "la herramienta que instala bibliotecas de Python."], ["Basado en reglas", "un programa en el que una persona escribió cada regla a mano."]],
          slides: [
            { title: "Reglas frente a modelos", bullets: ["Basado en reglas: escribes cada regla", "Modelo de IA: aprendió patrones de ejemplos", "Los modelos manejan casos que nunca escribiste"] },
            { title: "Las bibliotecas hacen el trabajo pesado", bullets: ["import carga código ya hecho", "Transformers, scikit-learn, PyTorch", "Todas gratis"] },
            { title: "Preparar Colab", bullets: ["Muchas bibliotecas ya están instaladas", "¿Falta una? !pip install <nombre>", "Los recursos gratuitos son limitados y pueden cambiar"] }
          ],
          sources: [COLAB],
          tryIt: "En un cuaderno nuevo de Colab, importa la biblioteca random y escribe un programa que elija al azar un ejercicio, una merienda o un tema de estudio de una lista de cinco y lo imprima. Ejecútalo tres veces.",
          youCanNow: "explicar la diferencia entre el código basado en reglas y un modelo de IA, e importar una biblioteca en Colab."
        },
        {
          title: "Cadenas y diccionarios: el cerebro de un chatbot sencillo",
          minutes: 6,
          goal: "Usar un diccionario para relacionar palabras clave de un mensaje con respuestas.",
          text: [
            "Los programas de IA trabajan con mucho texto, así que necesitas algunas herramientas para cadenas. mensaje.lower() pasa el texto a minúsculas, para que \"HOLA\" y \"hola\" coincidan. \"horario\" in mensaje es True si la palabra aparece en cualquier parte del mensaje. mensaje.split() parte una oración en una lista de palabras.",
            "Un diccionario guarda pares: una clave y un valor, entre llaves. respuestas = {\"horario\": \"Abrimos de 9 a 5.\", \"precio\": \"Los precios están en nuestra página del menú.\"} Obtienes un valor con respuestas[\"horario\"].",
            "Para construir el cerebro de un chatbot, recorre el diccionario con un bucle: for clave, respuesta in respuestas.items(): if clave in mensaje: return respuesta. Si nada coincide, devuelve una respuesta por defecto como \"Lo siento, todavía no sé eso.\""
          ],
          steps: ["Haz un diccionario de palabras clave y respuestas.", "Escribe una función responder(mensaje).", "Dentro, pon mensaje = mensaje.lower().", "Recorre respuestas.items() y devuelve la respuesta de la primera palabra clave que encuentres.", "Después del bucle, devuelve una respuesta por defecto."],
          words: [["Cadena", "texto en Python."], ["Diccionario", "un conjunto de pares clave: valor entre llaves."], ["Clave", "la etiqueta que buscas en un diccionario."], ["Valor", "lo que está guardado bajo una clave."], [".items()", "da cada clave y cada valor de un diccionario, para usarlos en un bucle."]],
          slides: [
            { title: "Herramientas de texto", bullets: ["lower(): \"HOLA\" se vuelve \"hola\"", "\"horario\" in mensaje: True o False", "split(): una oración en una lista de palabras"] },
            { title: "Diccionarios", bullets: ["{\"horario\": \"Abrimos de 9 a 5.\"}", "Busca con respuestas[\"horario\"]", "Claves a la izquierda, valores a la derecha"] },
            { title: "El cerebro del chatbot", bullets: ["Pasa el mensaje a minúsculas", "Recorre respuestas.items()", "Devuelve la primera coincidencia, o una por defecto"] }
          ],
          tryIt: "Escribe responder(mensaje) para un gimnasio, una biblioteca o un camión de comida imaginario, con al menos cuatro palabras clave (por ejemplo horario, precio, dirección, contacto). Pruébala con tres mensajes, incluido uno escrito en mayúsculas y uno que no debería entender.",
          youCanNow: "usar herramientas de texto y un diccionario para relacionar un mensaje con la respuesta correcta."
        },
        {
          title: "Hacer hablar al chatbot y ver sus límites",
          minutes: 5,
          goal: "Poner tu función de respuesta en un bucle que converse hasta que el usuario diga adiós, y ver lo que las reglas no pueden hacer.",
          text: [
            "Un chatbot necesita un bucle: pedir un mensaje, imprimir la respuesta y repetir. while True: se repite para siempre, así que agregas una salida: si el mensaje es \"adios\", imprime una despedida y usa break para salir del bucle.",
            "Ahora pruébalo como lo haría un usuario real. Escribe \"¿a qué hora abren?\" y puede que tu bot falle, porque escribiste \"horario\", no \"abren\". Cada nueva forma de decir algo necesita una regla nueva. Ese es el límite principal de los programas basados en reglas.",
            "Justo por eso los modelos de IA son útiles: un modelo de lenguaje aprendió de millones de oraciones, así que puede entender muchas formas de decir lo mismo. En el próximo capítulo vas a usar uno."
          ],
          steps: ["Empieza con while True:", "Dentro, toma mensaje = input(\"Tú: \")", "Si mensaje.lower() == \"adios\", imprime una despedida y usa break.", "Si no, print(\"Bot:\", responder(mensaje)).", "Prueba con cinco formas distintas de hacer la misma pregunta."],
          words: [["while True", "un bucle que sigue hasta que algo dentro de él lo detiene."], ["break", "sale de un bucle enseguida."], ["Límite", "algo que un programa no puede hacer bien."]],
          slides: [
            { title: "El bucle de conversación", bullets: ["while True: sigue conversando", "input() toma el mensaje", "break termina la conversación con \"adios\""] },
            { title: "Prueba como un usuario real", bullets: ["Pregunta lo mismo de cinco formas", "Cuenta cuántas acierta el bot"] },
            { title: "Por qué las reglas chocan con un muro", bullets: ["Cada nueva forma de decirlo necesita una regla nueva", "Los modelos de IA aprendieron de millones de oraciones", "Eso es lo que usa el Capítulo 2"] }
          ],
          tryIt: "Pon tu función responder de la Lección 2 dentro de un bucle de conversación que termine con \"adios\". Pregunta por el horario de cinco formas distintas. Anota cuántas entendió tu bot y luego agrega una regla para arreglar un fallo.",
          youCanNow: "construir un bucle de chatbot basado en reglas que funciona y explicar por qué las reglas solas son limitadas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Piezas de Python para la IA",
        questions: [
          { q: "¿Cuál es la principal diferencia entre el código basado en reglas y un modelo de IA?", options: ["El código basado en reglas siempre es más rápido", "Los modelos no usan nada de código", "Un modelo aprendió patrones de ejemplos en lugar de tener cada regla escrita a mano", "No hay diferencia"], answer: 2, why: "Los modelos aprenden patrones de los datos; el código basado en reglas necesita que se escriba cada regla." },
          { q: "Tu celda de Colab dice \"No module named\" y el nombre de una biblioteca. ¿Qué haces?", options: ["Ejecutas !pip install con el nombre de la biblioteca y vuelves a importarla", "Reinicias tu computadora", "Borras el cuaderno", "Le cambias el nombre a la variable"], answer: 0, why: "pip instala una biblioteca que falta." },
          { q: "respuestas = {\"horario\": \"Abrimos de 9 a 5.\"}. ¿Qué es respuestas[\"horario\"]?", options: ["\"horario\"", "Un error", "True", "\"Abrimos de 9 a 5.\""], answer: 3, why: "Buscar una clave da su valor." },
          { q: "¿Por qué usar mensaje.lower() en un chatbot?", options: ["Para hacer el texto más corto", "Para que \"HORARIO\" y \"horario\" coincidan", "Para borrar el mensaje", "Para traducirlo"], answer: 1, why: "Pasar a minúsculas hace que la búsqueda no dependa de las mayúsculas." },
          { q: "¿Qué palabra sale de un bucle while True?", options: ["exit", "break", "stop", "return to"], answer: 1, why: "break sale del bucle enseguida." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar un modelo de IA preentrenado",
      lessons: [
        {
          title: "Cargar un modelo preentrenado con Hugging Face",
          minutes: 6,
          goal: "Cargar un modelo de sentimiento gratuito en Colab y usarlo con una oración.",
          text: [
            "Un modelo preentrenado es uno que otra persona ya entrenó y compartió, así que puedes usarlo enseguida. Hugging Face es un sitio web que tiene miles de modelos gratuitos, y su biblioteca Transformers los carga con una sola línea.",
            "La herramienta más fácil es pipeline. Le dices la tarea y el modelo: clasificador = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\"). Este modelo lee texto en inglés y decide si su ánimo (sentimiento) es POSITIVE (positivo) o NEGATIVE (negativo). Como solo entiende inglés, escribe en inglés los textos que le des.",
            "Úsalo como una función: clasificador(\"The practice today was great!\") (\"¡La práctica de hoy estuvo genial!\"). Devuelve una lista con un diccionario dentro, por ejemplo [{'label': 'POSITIVE', 'score': 0.99}]. La puntuación (score) es qué tan seguro está el modelo, de 0 a 1. La primera vez descarga el modelo, así que tarda un poco más.",
            "Lee siempre la página de un modelo (su \"ficha del modelo\") antes de usarlo: dice con qué se entrenó, para qué sirve y cuál es su licencia."
          ],
          steps: ["En una celda nueva: from transformers import pipeline", "Crea clasificador = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "Ejecuta resultado = clasificador(\"The practice today was great!\")", "print(resultado[0][\"label\"], resultado[0][\"score\"])", "Si falta transformers, ejecuta primero !pip install transformers."],
          words: [["Modelo preentrenado", "un modelo que otra persona ya entrenó y que puedes usar enseguida."], ["Hugging Face", "un sitio web y un conjunto de bibliotecas para compartir modelos de IA gratuitos."], ["pipeline", "una herramienta de Transformers que carga un modelo para una tarea en una sola línea."], ["Sentimiento", "el ánimo de un texto: positivo o negativo."], ["Puntuación (score)", "qué tan seguro está el modelo, de 0 a 1."], ["Ficha del modelo", "la página que explica qué hace un modelo, sus datos y su licencia."]],
          slides: [
            { title: "Modelos preentrenados", bullets: ["Ya los entrenó otra persona", "Hugging Face tiene miles, gratis", "Lee primero la ficha del modelo"] },
            { title: "Una línea para cargarlo", bullets: ["from transformers import pipeline", "pipeline(\"text-classification\", model=...)", "La primera vez descarga el modelo; este solo entiende inglés"] },
            { title: "Leer el resultado", bullets: ["[{'label': 'POSITIVE', 'score': 0.99}]", "resultado[0][\"label\"] es el ánimo", "resultado[0][\"score\"] es qué tan seguro está"] }
          ],
          sources: [HF_PIPELINES, HF_MODEL],
          tryIt: "Carga el clasificador de sentimiento y ejecútalo con tres oraciones que escribas en inglés: una claramente alegre, una claramente molesta y una mixta como \"The food was good but the wait was long.\" (\"La comida estuvo buena pero la espera fue larga.\"). Imprime la etiqueta y la puntuación de cada una y anota de cuál estuvo menos seguro.",
          youCanNow: "cargar un modelo preentrenado con pipeline y leer su etiqueta y su puntuación."
        },
        {
          title: "Ejecutar el modelo sobre muchos textos",
          minutes: 5,
          goal: "Usar un bucle para clasificar una lista de comentarios y contar los resultados.",
          text: [
            "Los programas reales manejan muchos textos, no uno. Pon tus comentarios en una lista y luego usa un bucle: for comentario in comentarios: resultado = clasificador(comentario)[0]. También puedes pasar toda la lista de una vez, clasificador(comentarios), y recibir un resultado por cada comentario.",
            "Para resumir, usa contadores: positivos = 0 y negativos = 0 antes del bucle, y dentro suma 1 al que corresponda según resultado[\"label\"].",
            "Redondea la puntuación para que se lea fácil: round(resultado[\"score\"], 2) da dos decimales. Una cadena f imprime una línea ordenada: print(f\"{resultado['label']:8} {round(resultado['score'], 2)}  {comentario}\")."
          ],
          steps: ["Pon al menos cinco comentarios en inglés en una lista.", "Pon positivos = 0 y negativos = 0.", "Recorre los comentarios con un bucle y clasifica cada uno.", "Imprime la etiqueta, la puntuación redondeada y el comentario.", "Suma al contador que corresponda y luego imprime los totales después del bucle."],
          words: [["Contador", "una variable que cuenta cuántas veces pasó algo."], ["round()", "acorta un número a una cantidad fija de decimales."], ["Lote", "un grupo de entradas que se procesan juntas."]],
          slides: [
            { title: "Muchos textos, un bucle", bullets: ["Pon los comentarios en una lista", "for comentario in comentarios:", "resultado = clasificador(comentario)[0]"] },
            { title: "Cuenta sobre la marcha", bullets: ["positivos = 0, negativos = 0 antes del bucle", "Suma 1 al contador que corresponda dentro", "Imprime los totales después del bucle"] },
            { title: "Hazlo fácil de leer", bullets: ["round(puntuación, 2) para dos decimales", "Una línea ordenada por comentario"] }
          ],
          tryIt: "Escribe en inglés seis comentarios sobre una clase, una práctica del equipo o una tienda local. Clasifícalos en un bucle, imprime una línea ordenada para cada uno e imprime cuántos fueron positivos y cuántos negativos.",
          youCanNow: "ejecutar un modelo de IA sobre una lista de textos y resumir los resultados con contadores."
        },
        {
          title: "Revisar la IA y terminar el clasificador de opiniones",
          minutes: 6,
          goal: "Marcar los resultados de poca confianza para que una persona los revise y terminar el clasificador de opiniones.",
          text: [
            "Los modelos de IA se equivocan. Este solo conoce positivo y negativo, así que los comentarios neutros o mixtos se ven forzados a una de las dos opciones. También puede no entender el sarcasmo (\"Great, another rainy game day.\", \"Genial, otro día de partido con lluvia.\") y se entrenó con reseñas de películas en inglés, así que la jerga u otros idiomas, como el español, pueden confundirlo.",
            "Un buen hábito es un umbral de confianza: si la puntuación está por debajo de un número que eliges, como 0.80, el programa dice \"revisar a mano\" en lugar de confiar en la etiqueta. Una persona toma la decisión final en todo lo que importe.",
            "Usa la IA con responsabilidad: no pases mensajes privados por una herramienta sin permiso, no pegues contraseñas ni claves de API en un cuaderno compartido y di a la gente cuándo un resultado vino de la IA.",
            "Ya tienes todo para la tarea final: una lista, un modelo, un bucle, un if con un umbral, contadores y una impresión clara."
          ],
          steps: ["Elige un umbral, por ejemplo UMBRAL = 0.80.", "Dentro del bucle, revisa: if resultado[\"score\"] < UMBRAL:", "Imprime \"revisar a mano\" junto a esos comentarios.", "Cuenta los positivos y los negativos como antes.", "Imprime los totales y cuántos necesitan revisión de una persona."],
          words: [["Umbral", "un número de corte que eliges; los resultados por debajo reciben un trato especial."], ["Confianza", "qué tan seguro está un modelo de su respuesta."], ["Sarcasmo", "decir lo contrario de lo que quieres decir, algo que los modelos a menudo no captan."], ["Persona en el circuito", "una persona revisa los resultados de la IA antes de usarlos."]],
          slides: [
            { title: "Los modelos se equivocan", bullets: ["Solo positivo o negativo: lo mixto se fuerza", "No capta el sarcasmo ni la jerga", "Se entrenó con reseñas de películas en inglés"] },
            { title: "Usa un umbral", bullets: ["UMBRAL = 0.80", "Puntuación por debajo: \"revisar a mano\"", "Una persona toma la decisión final"] },
            { title: "Usa la IA con responsabilidad", bullets: ["Pide permiso para usar mensajes privados", "Nada de contraseñas ni claves en cuadernos compartidos", "Di cuándo un resultado vino de la IA"] }
          ],
          sources: [HF_MODEL],
          tryIt: "Tarea final: construye el clasificador de opiniones. Usa al menos seis comentarios en inglés, incluidos uno mixto y uno sarcástico. Imprime cada uno con su etiqueta y su puntuación, marca todo lo que esté por debajo de 0.80 como \"revisar a mano\" e imprime los totales de positivos, negativos y para revisar a mano. Luego lee tú mismo los marcados y decide.",
          youCanNow: "construir un programa de IA en Python que funcione, que clasifique texto, informe sus resultados y pase los casos dudosos a una persona."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar un modelo de IA preentrenado",
        questions: [
          { q: "¿Qué es un modelo preentrenado?", options: ["Un modelo que primero debes entrenar durante semanas", "Una lista de reglas que escribes", "Un sitio web de pago", "Un modelo que otra persona ya entrenó y que puedes usar enseguida"], answer: 3, why: "Los modelos preentrenados están listos para usar." },
          { q: "El clasificador devuelve [{'label': 'NEGATIVE', 'score': 0.97}]. ¿Qué significa 0.97?", options: ["El modelo está muy seguro de que el comentario es negativo", "Se leyeron 97 palabras", "El comentario tiene un 97% de largo", "Costó 97 centavos"], answer: 0, why: "La puntuación es la confianza del modelo, de 0 a 1." },
          { q: "¿Qué línea obtiene la etiqueta de resultado = clasificador(texto)?", options: ["resultado.label", "resultado[\"label\"][0]", "resultado[0][\"label\"]", "label(resultado)"], answer: 2, why: "El resultado es una lista con un diccionario, así que primero [0] y luego [\"label\"]." },
          { q: "Un comentario recibe una puntuación de 0.55. Con un umbral de 0.80, ¿qué hace tu programa?", options: ["Lo borra", "Lo cuenta dos veces", "Detiene el programa", "Lo marca como \"revisar a mano\""], answer: 3, why: "Las puntuaciones por debajo del umbral van a una persona." },
          { q: "¿Cuál de estos es un uso responsable de la IA?", options: ["Pegar tu clave de API en un cuaderno que compartes", "Pasar mensajes privados de tus compañeros sin preguntar", "Decir que un resultado vino de la IA y revisar los dudosos", "Confiar en todas las etiquetas"], answer: 2, why: "Ser transparente y mantener a una persona en el circuito es un uso responsable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Programación de IA con Python para principiantes",
    questions: [
      { q: "Un modelo de IA se describe mejor como:", options: ["Una lista de instrucciones if", "Un programa que aprendió patrones de muchos ejemplos", "Un tipo de teclado", "Una dirección de sitio web"], answer: 1, why: "Los modelos aprenden patrones de los datos." },
      { q: "¿Qué hace import en Python?", options: ["Carga una biblioteca para que puedas usar su código", "Descarga una película", "Imprime texto", "Borra un archivo"], answer: 0, why: "import trae una biblioteca a tu programa." },
      { q: "¿Qué significa el ! en !pip install transformers en Colab?", options: ["Es un error", "Hazlo más fuerte", "Ejecuta esto como una orden del sistema, no como Python", "Instálalo dos veces"], answer: 2, why: "! le dice a Colab que ejecute una orden del sistema." },
      { q: "¿Qué afirmación es cierta sobre la versión gratuita de Colab?", options: ["Es gratis, pero los recursos son limitados y pueden cambiar", "Los recursos son ilimitados", "Primero debes instalarlo", "Solo funciona en teléfonos"], answer: 0, why: "Colab dice que los recursos gratuitos no están garantizados ni son ilimitados." },
      { q: "\"AYUDA\".lower() da:", options: ["\"AYUDA\"", "\"Ayuda\"", "Un error", "\"ayuda\""], answer: 3, why: "lower() pasa todas las letras a minúsculas." },
      { q: "\"precio\" in \"¿cuál es el precio?\" da:", options: ["False", "True", "\"precio\"", "0"], answer: 1, why: "in revisa si la palabra aparece en el texto." },
      { q: "En {\"horario\": \"Abrimos de 9 a 5.\"}, ¿qué es \"horario\"?", options: ["El valor", "La clave", "Una lista", "Un bucle"], answer: 1, why: "El lado izquierdo del par es la clave." },
      { q: "Tu chatbot no entiende \"¿a qué hora abren?\" pero conoce \"horario\". ¿Por qué?", options: ["Colab está roto", "Python no puede leer preguntas", "El diccionario es demasiado corto para funcionar", "Los bots basados en reglas solo coinciden con las reglas que escribiste"], answer: 3, why: "En un bot basado en reglas, cada forma de decirlo necesita su propia regla." },
      { q: "En un bucle de conversación, ¿qué debe pasar cuando el usuario escribe adios?", options: ["Imprimir una despedida y usar break", "Empezar un bucle nuevo", "Pedir una contraseña", "Nada"], answer: 0, why: "break termina el bucle de forma limpia." },
      { q: "¿Por qué los modelos de lenguaje son útiles para los chatbots?", options: ["Nunca se equivocan", "No necesitan computadora", "Entienden muchas formas de decir lo mismo", "Funcionan sin datos"], answer: 2, why: "Aprendieron de millones de oraciones." },
      { q: "¿Qué es Hugging Face?", options: ["Una red social", "Un error de Python", "Un videojuego", "Un sitio y unas bibliotecas para compartir modelos de IA gratuitos"], answer: 3, why: "Hugging Face tiene modelos y la biblioteca Transformers." },
      { q: "¿Qué línea carga el modelo de sentimiento?", options: ["import sentiment", "model = load()", "pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "print(\"model\")"], answer: 2, why: "pipeline recibe la tarea y el nombre del modelo." },
      { q: "¿Por qué la primera ejecución del modelo tarda más?", options: ["Colab es lento a propósito", "Descarga el modelo", "Lo entrena desde cero", "Revisa tu correo"], answer: 1, why: "Los archivos del modelo se descargan la primera vez." },
      { q: "¿Qué debes leer antes de usar un modelo?", options: ["Su ficha del modelo", "Tu historial del navegador", "El logotipo de Colab", "Nada"], answer: 0, why: "La ficha del modelo explica su uso, sus datos y su licencia." },
      { q: "La puntuación del modelo de sentimiento es:", options: ["Qué tan largo es el texto", "La cantidad de palabras positivas", "Qué tan seguro está el modelo, de 0 a 1", "Una nota sobre 100"], answer: 2, why: "La puntuación es la confianza." },
      { q: "Para contar los comentarios positivos en un bucle, primero:", options: ["Pones positivos = 0 antes del bucle", "Imprimes positivos", "Borras la lista", "Importas counter"], answer: 0, why: "Un contador empieza en 0 antes del bucle." },
      { q: "round(0.98765, 2) da:", options: ["0.98", "0.99", "1", "98"], answer: 1, why: "Redondeado a dos decimales, 0.98765 es 0.99." },
      { q: "¿Qué comentario es más probable que este modelo clasifique mal?", options: ["\"I loved it!\"", "\"Great, another rainy game day.\"", "\"This was terrible.\"", "\"Best class ever.\""], answer: 1, why: "El sarcasmo dice lo contrario de lo que quiere decir, y los modelos a menudo no lo captan." },
      { q: "¿Por qué usar un umbral de confianza?", options: ["Para que el programa sea más rápido", "Para enviar los resultados dudosos a una persona que los revise", "Para esconder los comentarios negativos", "Para borrar las puntuaciones bajas"], answer: 1, why: "Los resultados de poca confianza necesitan la revisión de una persona." },
      { q: "¿Qué NO es seguro poner en un cuaderno que compartes?", options: ["Una lista de comentarios inventados", "Una línea de comentario que empieza con #", "Una instrucción print", "Tu contraseña o tu clave de API"], answer: 3, why: "Los secretos en cuadernos compartidos se pueden copiar y usar mal." }
    ]
  }
};
