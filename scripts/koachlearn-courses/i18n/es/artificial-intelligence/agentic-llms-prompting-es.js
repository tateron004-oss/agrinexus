"use strict";

// Koach Learn course (Artificial Intelligence), Spanish translation of artificial-intelligence/agentic-llms-prompting.js. See scripts/koachlearn-courses/README.md, "Translations".
// Python code, library names and JSON keys/values (category, order, complaint, other) stay in English; only the message text inside the examples is translated.

module.exports = {
  id: "agentic-llms-prompting-es",
  lang: "es",
  translationOf: "agentic-llms-prompting",
  category: "Artificial Intelligence",
  name: "Entender los LLM y la ingeniería de prompts",
  skills: "Explicar los tokens y el contexto, Escribir un prompt del sistema, Usar ejemplos, Obtener una salida estructurada en JSON, Llamar a un LLM desde Python, Probar un prompt",
  outcome: "escribir y probar un prompt del sistema confiable para un agente: indica un papel, una tarea, reglas y un formato de salida con un ejemplo, devuelve JSON limpio, y lo habrás comprobado con cinco entradas de prueba desde un cuaderno corto de Python.",
  about: [
    "Este es el curso 2 de Diseñar, crear y desplegar agentes de IA autónomos. El modelo dentro de cada agente es un modelo de lenguaje grande (LLM), y la forma en que le das instrucciones decide si el agente se porta bien. Este curso te enseña con palabras sencillas cómo funcionan los LLM y cómo darles buenas instrucciones.",
    "El Capítulo 1 trata de cómo funciona el modelo y de cómo escribir un prompt sólido en un chatbot gratuito. El Capítulo 2 pasa a Python en Google Colab, un cuaderno gratuito en tu navegador web, donde llamas a un modelo desde el código, le pides JSON y pruebas tu prompt como lo hace un ingeniero.",
    "El código aparece como líneas cortas en el texto de la lección. Puedes copiarlas en Colab. Si nunca has programado, sigue la lección de todos modos; el curso \"Introducción a la programación con Python\" es un buen compañero. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Escribe un prompt del sistema para un trabajo de tu agente del curso 1 (por ejemplo, \"clasificar un mensaje que llega en: pregunta, queja, pedido, otro\"). Debe dar un papel, la tarea, tres reglas, el formato exacto de salida en JSON y un ejemplo. Ejecútalo desde un cuaderno de Colab con cinco entradas de prueba, incluida una tramposa, anota si cada salida fue JSON válido y correcta, y cambia el prompt una vez para corregir una falla.",
  chapters: [
    {
      name: "Capítulo 1: Cómo funcionan los LLM y cómo darles instrucciones",
      lessons: [
        {
          title: "Cómo escribe un LLM: tokens, predicción y contexto",
          minutes: 5,
          goal: "Explicar por qué un LLM puede sonar bien y aun así estar equivocado.",
          text: [
            "Un LLM escribe un pedacito de texto a la vez. Esos pedacitos se llaman tokens: una palabra corta, parte de una palabra más larga o un signo de puntuación. En cada paso, el modelo predice un token siguiente probable a partir de todo lo que ha visto hasta ahora.",
            "Todo lo que el modelo puede ver a la vez es su ventana de contexto: el prompt del sistema, la conversación, los documentos que pegues y su propia respuesta hasta ese momento. Lo que queda fuera de la ventana de contexto no existe para el modelo. No recuerda chats pasados a menos que la app los añada.",
            "Como predice texto probable, un LLM puede escribir una respuesta fluida que es falsa. No está consultando datos a menos que tenga una herramienta de búsqueda. Tu prompt, el contexto que le das y las revisiones que construyes son lo que lo vuelve confiable."
          ],
          words: [["Token", "un pedacito de texto, a menudo parte de una palabra, que un LLM lee y escribe."], ["Ventana de contexto", "todo el texto que el modelo puede ver a la vez."], ["Predicción", "el modelo eligiendo un token siguiente probable según lo que vino antes."]],
          slides: [
            { title: "Un LLM escribe token por token", bullets: ["Un token es una palabra o parte de una palabra", "Cada paso predice un token siguiente probable"] },
            { title: "La ventana de contexto", bullets: ["Todo lo que el modelo ve a la vez", "Prompt del sistema, chat, documentos, su respuesta", "Lo que está fuera no existe para él"] },
            { title: "Por qué puede equivocarse", bullets: ["Predice texto probable, no datos comprobados", "Tu prompt, el contexto y las revisiones lo vuelven confiable"] }
          ],
          tryIt: "En un chatbot gratuito, pregunta: \"¿Cuántas letras r hay en la palabra ferrocarril? Luego explica por qué los tokens podrían hacer esto difícil para ti.\" Anota si la primera respuesta fue correcta y por qué importan los tokens.",
          youCanNow: "explicar los tokens y la ventana de contexto, y por qué hay que revisar a un LLM."
        },
        {
          title: "Las partes de un prompt sólido",
          minutes: 6,
          goal: "Escribir un prompt con papel, tarea, contexto, reglas y formato de salida.",
          text: [
            "Un prompt sólido para un agente tiene cinco partes. Papel: quién es el modelo (\"Clasificas los mensajes de los clientes de una panadería pequeña.\"). Tarea: el único trabajo. Contexto: los datos que necesita. Reglas: lo que debe y no debe hacer. Formato de salida: exactamente cómo debe verse la respuesta.",
            "El prompt del sistema contiene las partes que no cambian en ninguna ejecución: el papel, las reglas y el formato. El mensaje del usuario contiene lo que cambia cada vez: el mensaje nuevo que hay que clasificar, la pregunta nueva.",
            "Sé específico y di las cosas en positivo. \"Responde en dos frases\" funciona mejor que \"no te alargues\". Di qué hacer cuando no esté seguro: \"Si el mensaje no encaja en ninguna categoría, usa other.\" Esa sola regla evita muchas suposiciones equivocadas."
          ],
          steps: ["Papel: ¿quién es el modelo?", "Tarea: un trabajo claro.", "Contexto: los datos que necesita.", "Reglas: lo que debe, lo que no debe, y qué hacer cuando no esté seguro.", "Formato: exactamente cómo se ve la respuesta."],
          words: [["Prompt del sistema", "las instrucciones permanentes que se envían con cada solicitud."], ["Mensaje del usuario", "la parte que cambia cada vez, como una pregunta o una entrada nueva."]],
          slides: [
            { title: "Cinco partes de un prompt sólido", bullets: ["Papel", "Tarea", "Contexto y reglas", "Formato de salida"] },
            { title: "Prompt del sistema vs mensaje del usuario", bullets: ["Sistema: lo que no cambia (papel, reglas, formato)", "Usuario: lo que cambia cada vez (la entrada nueva)"] },
            { title: "Escribe reglas claras", bullets: ["Di qué hacer, no solo qué no hacer", "Da una regla para cuando no esté seguro", "Ejemplo: si nada encaja, usa \"other\""] }
          ],
          tryIt: "Escribe un prompt del sistema de cinco partes para un trabajo de tu agente del curso 1. Pégalo en un chatbot gratuito, luego envía tres entradas distintas y fíjate si sigue todas las reglas.",
          youCanNow: "escribir un prompt con papel, tarea, contexto, reglas y formato de salida."
        },
        {
          title: "Ejemplos, pasos y salida estructurada",
          minutes: 5,
          goal: "Usar un ejemplo y un formato JSON para obtener respuestas que un programa pueda leer.",
          text: [
            "Mostrar es mejor que decir. Uno o dos ejemplos resueltos en el prompt (la entrada y la salida exacta que quieres) mejoran mucho los resultados. A esto se le llama prompting con pocos ejemplos (few-shot). Sin ejemplos se llama zero-shot.",
            "Los agentes necesitan respuestas que el código pueda leer, no párrafos de plática. Pide JSON, un formato de texto sencillo con nombres y valores: {\"category\": \"order\", \"urgent\": false}. Di: \"Responde solo con JSON, sin otro texto\", y muestra las claves exactas.",
            "Para trabajos más difíciles, pídele al modelo que trabaje por pasos: primero que haga una lista de los datos y luego que decida. Muchos servicios de modelos también pueden obligar a que el JSON sea válido con un ajuste llamado salida estructurada; búscalo en la documentación de tu proveedor."
          ],
          words: [["Prompting con pocos ejemplos", "darle al modelo unos pocos ejemplos de entrada y de la salida correcta."], ["JSON", "un formato de texto sencillo con valores con nombre que los programas pueden leer, como {\"name\": \"Ana\"}."], ["Salida estructurada", "un ajuste del modelo que hace que la respuesta siga un formato exacto."]],
          slides: [
            { title: "Muestra, no solo digas", bullets: ["Zero-shot: sin ejemplos", "Few-shot: de uno a tres ejemplos resueltos", "Los ejemplos mejoran mucho los resultados"] },
            { title: "Pide JSON", bullets: ["Los programas lo pueden leer", "\"Responde solo con JSON, sin otro texto\"", "Muestra las claves exactas que quieres"] },
            { title: "Trabajos más difíciles", bullets: ["Pide que liste los datos y luego decida", "Usa salida estructurada si tu proveedor la tiene"] }
          ],
          tryIt: "Añade un ejemplo resuelto y un formato JSON a tu prompt de la Lección 2. Envía cinco entradas. Cuenta cuántas respuestas fueron solo JSON con las claves correctas.",
          youCanNow: "usar ejemplos y un formato JSON para obtener respuestas que tu código pueda leer."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funcionan los LLM y cómo darles instrucciones",
        questions: [
          { q: "¿Qué es un token?", options: ["Una contraseña para la IA", "Una moneda para pagar la IA", "Un pedacito de texto que el modelo lee y escribe", "Un tipo de chatbot"], answer: 2, why: "Los LLM trabajan con tokens: palabras o partes de palabras." },
          { q: "Pegaste un documento en un chat. En un chat nuevo, el modelo no lo conoce. ¿Por qué?", options: ["El documento ahora está fuera de su ventana de contexto", "El modelo está roto", "Los documentos no están permitidos", "Necesita una computadora más rápida"], answer: 0, why: "El modelo solo ve lo que está en la ventana de contexto actual." },
          { q: "¿Qué parte va en el prompt del sistema?", options: ["Un chiste al azar", "El mensaje del cliente de hoy", "Tu contraseña", "Las reglas que aplican en cada ejecución"], answer: 3, why: "El prompt del sistema contiene lo que no cambia; el mensaje del usuario, lo que cambia." },
          { q: "¿Qué regla está mejor escrita?", options: ["\"No te alargues.\"", "\"Responde en dos frases. Si no estás seguro, di: no estoy seguro.\"", "\"Esfuérzate.\"", "\"Sé bueno.\""], answer: 1, why: "Es específica, positiva y dice qué hacer cuando no está seguro." },
          { q: "¿Por qué pedirle JSON al modelo de un agente?", options: ["Se ve más bonito", "Los modelos no pueden escribir párrafos", "Es más corto de escribir", "Tu código puede leer la respuesta de forma confiable"], answer: 3, why: "Los agentes pasan las respuestas al código, y el código necesita un formato fijo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Llamar y probar un LLM desde Python",
      lessons: [
        {
          title: "Tu primera llamada a un modelo desde Google Colab",
          minutes: 6,
          goal: "Llamar a un LLM desde un cuaderno de Python e imprimir la respuesta.",
          text: [
            "Google Colab es un cuaderno de Python gratuito que funciona en tu navegador; necesitas una cuenta de Google. Los recursos gratuitos no están garantizados y los cuadernos inactivos se desconectan, así que guarda tu trabajo. Abre colab.research.google.com y crea un cuaderno nuevo.",
            "Para llamar a un modelo necesitas una clave de API, una contraseña secreta para programas. La API de Gemini de Google tiene un nivel gratuito para proyectos pequeños; consigues una clave en Google AI Studio (aistudio.google.com/apikey). Google dice que el contenido del nivel gratuito se puede usar para mejorar sus productos, así que nunca envíes datos privados ni de clientes en el nivel gratuito.",
            "La guía de inicio rápido actual de Google muestra líneas como estas: pip install -U google-genai, luego from google import genai, client = genai.Client(), luego interaction = client.interactions.create(model='MODEL_NAME', input='Explica un agente de IA en una frase'), luego print(interaction.output_text). Copia el nombre exacto del modelo y el código de la página de inicio rápido, porque los nombres y el código cambian. La clave se lee de una variable de entorno llamada GEMINI_API_KEY.",
            "Nunca pegues tu clave en un cuaderno compartido, en una captura de pantalla ni en un chatbot. Guárdala en un ajuste secreto, y crea una clave nueva si una se filtra. Otros proveedores (OpenAI, Anthropic, o un modelo local gratuito con Ollama) funcionan igual: un cliente, un nombre de modelo, una entrada y una salida."
          ],
          steps: ["Abre colab.research.google.com y crea un cuaderno nuevo.", "Consigue una clave de API en Google AI Studio y mantenla en secreto.", "Instala la biblioteca y copia el código de inicio rápido.", "Usa el nombre de modelo que muestra la página de inicio rápido.", "Ejecuta la celda e imprime la respuesta."],
          words: [["API", "una forma en que un programa habla con otro, como tu código pidiéndole una respuesta a un modelo."], ["Clave de API", "un código secreto que permite a tu programa usar un servicio; trátalo como una contraseña."], ["Variable de entorno", "un ajuste guardado fuera de tu código, que se usa a menudo para secretos."]],
          slides: [
            { title: "Colab: Python gratis en el navegador", bullets: ["Necesita una cuenta de Google", "Los recursos gratuitos no están garantizados", "Los cuadernos inactivos se desconectan: guarda"] },
            { title: "Hacer que un modelo responda", bullets: ["Consigue una clave de API en Google AI Studio", "Copia código y nombre del modelo del inicio rápido", "Cliente, nombre del modelo, entrada, salida"] },
            { title: "Protege tu clave", bullets: ["Nunca en un cuaderno compartido ni en capturas", "Guárdala en un ajuste secreto", "Crea una nueva si se filtra"] },
            { title: "Nivel gratuito y privacidad", bullets: ["El contenido gratuito puede usarse para mejorar productos", "Nunca envíes ahí datos privados ni de clientes"] }
          ],
          sources: [{ name: "Google Colab: preguntas frecuentes", url: "https://research.google.com/colaboratory/faq.html" }, { name: "API de Gemini: inicio rápido", url: "https://ai.google.dev/gemini-api/docs/quickstart" }, { name: "API de Gemini: precios y nivel gratuito", url: "https://ai.google.dev/gemini-api/docs/pricing" }],
          tryIt: "Crea un cuaderno de Colab, configura una clave de la forma segura y haz que el modelo responda: \"Explica un agente de IA en una frase.\" Guarda el cuaderno como agent-prompts.",
          youCanNow: "llamar a un LLM desde Python en un cuaderno gratuito y mantener en secreto tu clave de API."
        },
        {
          title: "Enviar tu prompt del sistema y leer JSON en el código",
          minutes: 6,
          goal: "Enviar tu prompt desde el código y convertir la respuesta JSON en datos de Python.",
          text: [
            "Pon tu prompt del sistema en una variable de Python: SYSTEM = '''Clasificas mensajes para una panadería... Responde solo con JSON.''' Pon cada entrada nueva en otra variable. La forma más sencilla de juntarlas es enviar SYSTEM más la entrada como un solo texto; la mayoría de los proveedores también tienen un ajuste aparte para las instrucciones del sistema, que se explica en su documentación.",
            "Lee la respuesta con la biblioteca json de Python: import json, luego data = json.loads(text). Ahora data['category'] es un valor normal de Python con el que tu agente puede actuar.",
            "A veces el modelo pondrá palabras alrededor del JSON o le faltará una clave. Prepárate: envuelve la lectura en try y except y, si falla, vuelve a intentarlo una vez con \"Responde solo con JSON\" o marca la entrada como fallida. Nunca dejes que una mala respuesta haga caer al agente ni que pase sin que nadie lo note."
          ],
          steps: ["Guarda el prompt del sistema en una variable.", "Envía el prompt del sistema y la entrada al modelo.", "Lee la respuesta con json.loads dentro de try / except.", "Revisa que estén las claves que necesitas.", "Si falla: reintenta una vez o márcala como fallida."],
          words: [["Analizar (parse)", "convertir texto en datos que un programa puede usar."], ["try / except", "la forma de Python de atrapar un error y manejarlo en lugar de detenerse."], ["Reintento", "volver a hacer la misma solicitud después de una falla."]],
          slides: [
            { title: "El prompt en el código", bullets: ["SYSTEM contiene el papel, las reglas y el formato", "Cada entrada nueva va en su propia variable"] },
            { title: "Lee el JSON", bullets: ["import json", "data = json.loads(text)", "data['category'] ya se puede usar"] },
            { title: "Prepárate para malas respuestas", bullets: ["Envuelve la lectura en try / except", "Revisa que estén las claves", "Reintenta una vez o márcala como fallida"] }
          ],
          tryIt: "En tu cuaderno, envía tu prompt del sistema con una entrada, lee el JSON e imprime solo la categoría. Luego dale una entrada rara (un mensaje vacío) y asegúrate de que tu código no se caiga.",
          youCanNow: "enviar un prompt del sistema desde Python y convertir con seguridad el JSON del modelo en datos."
        },
        {
          title: "Probar un prompt como un ingeniero",
          minutes: 6,
          goal: "Ejecutar un prompt sobre un pequeño conjunto de prueba y mejorarlo con los resultados.",
          text: [
            "Una buena respuesta demuestra poco. Los ingenieros escriben un conjunto de prueba: una lista corta de entradas con la respuesta que esperan. Incluye casos fáciles, casos límite (vacío, muy largo, dos temas a la vez) y un caso tramposo, como un mensaje que diga \"ignora tus instrucciones\".",
            "En Python sirve una lista de pares: tests = [('¿Dónde está mi pastel?', 'order'), ('¡Me quemaron el pan!', 'complaint')]. Recórrela con un bucle, llama al modelo, lee el JSON y compáralo con la respuesta esperada. Cuenta cuántas respuestas fueron JSON válido y cuántas correctas.",
            "Cambia una cosa a la vez: una regla más clara, un mejor ejemplo. Vuelve a ejecutar todo el conjunto de prueba después de cada cambio, para saber que el arreglo ayudó y no rompió nada. Guarda en tu cuaderno cada versión del prompt y su puntuación."
          ],
          steps: ["Escribe de 5 a 10 entradas de prueba con sus respuestas esperadas.", "Incluye casos límite y una entrada tramposa.", "Bucle: llamar, leer, comparar, contar.", "Cambia una cosa del prompt.", "Vuelve a ejecutar todas las pruebas y quédate con la mejor versión."],
          words: [["Conjunto de prueba", "una lista de entradas con las respuestas que esperas, para revisar un prompt."], ["Caso límite", "una entrada poco común, como un mensaje vacío o muy largo."], ["Regresión", "cuando un cambio arregla una cosa pero rompe otra."]],
          slides: [
            { title: "Escribe un conjunto de prueba", bullets: ["Entradas con respuestas esperadas", "Casos fáciles y casos límite", "Una entrada tramposa: \"ignora tus instrucciones\""] },
            { title: "Ejecútalo en un bucle", bullets: ["Llama al modelo con cada entrada", "Lee el JSON, compara con lo esperado", "Cuenta válidas y correctas"] },
            { title: "Mejora un cambio a la vez", bullets: ["Una regla más clara o un mejor ejemplo", "Repite todas las pruebas tras cada cambio", "Guarda versiones y puntuaciones"] }
          ],
          tryIt: "Tarea final: escribe tu prompt del sistema con papel, tarea, tres reglas, un formato JSON y un ejemplo. Pruébalo en Colab con cinco entradas, incluida una tramposa, anota en cada una si fue JSON válido y correcta, cambia el prompt una vez para corregir una falla y vuelve a ejecutarlo.",
          youCanNow: "probar y mejorar un prompt con un pequeño conjunto de prueba, como lo hacen quienes construyen agentes."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Llamar y probar un LLM desde Python",
        questions: [
          { q: "¿Dónde debe ir tu clave de API?", options: ["En una celda de un cuaderno compartido", "En una captura de pantalla para pedir ayuda", "En un ajuste secreto o una variable de entorno", "En el chatbot para que la recuerde"], answer: 2, why: "Las claves son contraseñas para programas y deben quedar en secreto." },
          { q: "¿Por qué copiar el nombre del modelo de la página de inicio rápido del proveedor?", options: ["Los nombres de los modelos y el código cambian con el tiempo", "Lo exige la ley", "Hace más corta la respuesta", "Si no, Colab no se ejecuta"], answer: 0, why: "Los proveedores cambian de nombre y retiran modelos; su página está al día." },
          { q: "json.loads(text) falla porque el modelo añadió palabras. Un buen agente:", options: ["Se cae", "Atrapa el error, reintenta una vez o lo marca como fallido", "Borra la entrada", "Usa el texto de todos modos"], answer: 1, why: "Prepárate para las malas respuestas para que no hagan caer al agente ni pasen sin ser notadas." },
          { q: "¿Qué va en un buen conjunto de prueba?", options: ["Casos fáciles, casos límite y una entrada tramposa", "Solo una entrada", "Solo entradas fáciles", "Las respuestas que ya dio el modelo"], answer: 0, why: "Los casos límite y tramposos muestran dónde falla un prompt." },
          { q: "Cambiaste el prompt y ahora pasa una prueba. ¿Qué sigue?", options: ["Publicarlo de inmediato", "Cambiar cinco cosas más a la vez", "Borrar las pruebas viejas", "Volver a ejecutar todo el conjunto de prueba"], answer: 3, why: "Volver a ejecutar todo detecta las regresiones." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Entender los LLM y la ingeniería de prompts",
    questions: [
      { q: "Un LLM escribe:", options: ["Copiando una página web", "Prediciendo un token a la vez", "Preguntándole a una persona", "Buscando en una lista fija de respuestas"], answer: 1, why: "Predice un token siguiente probable, una y otra vez." },
      { q: "La ventana de contexto es:", options: ["Una pestaña del navegador", "El precio del modelo", "Todo lo que el modelo puede ver a la vez", "El tema de color de la app de chat"], answer: 2, why: "Solo el texto dentro de la ventana existe para el modelo." },
      { q: "¿Por qué un modelo puede afirmar algo falso con fluidez?", options: ["Se quedó sin tokens", "Miente a propósito", "Predice texto probable en lugar de comprobar datos", "Su clave venció"], answer: 2, why: "Predecir no es comprobar datos, a menos que se añada una herramienta." },
      { q: "¿Cuál NO es una de las cinco partes de un prompt sólido?", options: ["Tu contraseña", "El formato de salida", "Las reglas", "El papel"], answer: 0, why: "Las contraseñas nunca van en los prompts." },
      { q: "¿Qué debe cambiar en cada ejecución?", options: ["El prompt del sistema", "El formato de salida", "El papel", "El mensaje del usuario"], answer: 3, why: "La entrada nueva va en el mensaje del usuario." },
      { q: "Una buena regla para los casos dudosos es:", options: ["\"Adivina.\"", "\"Si nada encaja, usa other.\"", "\"Nunca dudes.\"", "\"Invéntate algo.\""], answer: 1, why: "Decirle qué hacer cuando no está seguro evita suposiciones equivocadas." },
      { q: "El prompting con pocos ejemplos (few-shot) significa:", options: ["Solo prompts cortos", "Enviar menos solicitudes", "Usar un modelo pequeño", "Incluir unos pocos ejemplos resueltos"], answer: 3, why: "Los ejemplos de entrada y salida guían al modelo." },
      { q: "¿Cuál es JSON válido?", options: ["category = order", "<category>order", "{\"category\": \"order\"}", "category: order;"], answer: 2, why: "El JSON usa llaves, nombres entre comillas y valores." },
      { q: "La salida estructurada es:", options: ["Un ajuste del modelo que obliga a seguir un formato exacto", "Una respuesta más larga", "Un tipo de chatbot", "Un menú de Colab"], answer: 0, why: "Muchos proveedores pueden obligar a que el JSON sea válido con ella; revisa la documentación." },
      { q: "Google Colab es:", options: ["Un servidor de pago que debes instalar", "Un cuaderno de Python gratuito en el navegador", "Solo una app de teléfono", "Un modelo de IA"], answer: 1, why: "Colab ejecuta cuadernos de Python gratis en tu navegador." },
      { q: "Los recursos gratuitos de Colab:", options: ["No están garantizados; los cuadernos inactivos se desconectan", "Están garantizados y son ilimitados", "Son solo para escuelas", "Son solo los fines de semana"], answer: 0, why: "Colab dice que los recursos gratuitos no están garantizados." },
      { q: "Una clave de API se debe tratar como:", options: ["Un nombre de usuario público", "Un comentario", "Un nombre de archivo", "Una contraseña"], answer: 3, why: "Cualquiera con la clave puede usar tu cuenta." },
      { q: "En el nivel gratuito de la API de Gemini no debes enviar:", options: ["Una pregunta de prueba", "Datos privados o de clientes", "Un mensaje de panadería de ejemplo que inventaste", "\"Hola\""], answer: 1, why: "El contenido del nivel gratuito se puede usar para mejorar los productos de Google." },
      { q: "Tu clave se filtró en una captura de pantalla. Debes:", options: ["Esperar que nadie la haya visto", "Publicarla otra vez", "Crear una clave nueva y dejar de usar la vieja", "Mandarla por correo a soporte"], answer: 2, why: "Una clave filtrada se debe reemplazar." },
      { q: "json.loads convierte:", options: ["Datos en una imagen", "Python en JavaScript", "Texto JSON en datos de Python", "Un prompt en un modelo"], answer: 2, why: "Analizar hace que la respuesta se pueda usar en el código." },
      { q: "Envolver la lectura en try / except permite que tu agente:", options: ["Maneje una mala respuesta en lugar de caerse", "Corra más rápido", "Se salte la llamada al modelo", "Oculte la clave"], answer: 0, why: "Los errores se atrapan y se manejan." },
      { q: "Un caso límite es:", options: ["Una entrada muy común", "Un nombre de modelo", "La primera prueba", "Una entrada poco común, como un mensaje vacío"], answer: 3, why: "Los casos límite ponen a prueba los límites de un prompt." },
      { q: "¿Por qué incluir en las pruebas una entrada que diga \"ignora tus instrucciones\"?", options: ["Para que el modelo sea más rápido", "Para comprobar que el prompt resiste la inyección", "Para ahorrar tokens", "Porque lo dice la ley"], answer: 1, why: "Los agentes leen texto no confiable; el prompt debe sostener sus reglas." },
      { q: "Una regresión es cuando:", options: ["El modelo se vuelve más barato", "La clave vence", "Todas las pruebas pasan", "Un arreglo rompe algo que funcionaba"], answer: 3, why: "Volver a ejecutar todas las pruebas detecta las regresiones." },
      { q: "La mejor forma de mejorar un prompt es:", options: ["Cambiar muchas cosas a la vez", "No cambiarlo nunca", "Cambiar una cosa y volver a ejecutar todas las pruebas", "Pedirle al modelo que solo se califique a sí mismo"], answer: 2, why: "Un cambio a la vez muestra qué ayudó de verdad." }
    ]
  }
};
