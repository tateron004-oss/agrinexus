"use strict";

// Koach Learn course (Artificial Intelligence), Spanish translation of artificial-intelligence/agentic-building-agents.js. See scripts/koachlearn-courses/README.md, "Translations".
// Python names, function names, dictionary keys and JSON keys stay in English; text values and messages inside the code examples are translated.

module.exports = {
  id: "agentic-building-agents-es",
  lang: "es",
  translationOf: "agentic-building-agents",
  category: "Artificial Intelligence",
  name: "Crear agentes de IA",
  skills: "Escribir el ciclo de un agente en Python, Definir herramientas como funciones, Pedirle al modelo su siguiente acción en JSON, Llevar la memoria y un registro de ejecución, Añadir límites de pasos y manejo de errores",
  outcome: "crear un pequeño agente de IA que funcione, en Python, en un cuaderno gratuito de Colab: un ciclo que le pide a un modelo su siguiente acción, ejecuta una de dos herramientas que tú escribiste, le devuelve el resultado, se detiene en un límite de pasos y registra cada paso.",
  about: [
    "Este es el curso 3 de Diseñar, crear y desplegar agentes de IA autónomos. Ya tienes una ficha de diseño (curso 1) y un prompt probado (curso 2). Ahora vas a crear el agente en sí, en Python sencillo, para que veas cada pieza en movimiento en lugar de esconderla dentro de un framework.",
    "El Capítulo 1 construye el ciclo: herramientas como funciones de Python, un prompt que hace que el modelo elija una acción en JSON, y el código que ejecuta la acción y le devuelve el resultado. El Capítulo 2 lo vuelve confiable: memoria, un registro de ejecución, límites de pasos, manejo de errores, y un vistazo a los frameworks de agentes que puedes usar más adelante.",
    "Necesitas una cuenta de Google para Colab y una clave de API de un modelo (sirve el nivel gratuito de la API de Gemini del curso 2, o un modelo local gratuito con Ollama en tu propia computadora). El código aparece como líneas cortas en las lecciones. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "En un cuaderno de Colab, crea un agente con dos herramientas que tú escribiste (por ejemplo, calculator(expression) y lookup_note(topic), que lee de un pequeño diccionario de notas en Python). Dale el objetivo \"¿Cuántas horas voy a estudiar este mes si estudio 45 minutos cada día de clase que aparece en mis notas?\". El agente debe elegir las herramientas en JSON, ejecutarlas, devolver los resultados, detenerse en un límite de 6 pasos, manejar una mala respuesta del modelo sin caerse e imprimir un registro de cada paso.",
  chapters: [
    {
      name: "Capítulo 1: El ciclo del agente en código",
      lessons: [
        {
          title: "Las herramientas son solo funciones",
          minutes: 5,
          goal: "Escribir dos herramientas como funciones de Python con nombres y descripciones claros.",
          text: [
            "Para un agente, una herramienta es una función que tu código ejecuta cuando el modelo lo pide. El modelo nunca ejecuta nada por sí mismo: solo escribe el nombre de una herramienta y su entrada. Tu código decide si la ejecuta.",
            "Empieza con herramientas seguras de solo lectura. Una calculadora: def calculator(expression): con un cuerpo que solo permite dígitos y + - * / ( ) . y luego calcula el resultado. Una consulta de notas: NOTES = {'schedule': 'Días de clase: lun, mié, jue'}, y def lookup_note(topic): return NOTES.get(topic, 'no se encontró la nota').",
            "Júntalas en un diccionario para que el ciclo las encuentre por su nombre: TOOLS = {'calculator': calculator, 'lookup_note': lookup_note}. Escribe una descripción de una línea para cada una. El modelo lee esas descripciones para elegir, así que importan tanto como el código."
          ],
          steps: ["Escribe cada herramienta como una función de Python con una entrada.", "Hazla segura: revisa la entrada antes de usarla.", "Devuelve un texto que el modelo pueda leer, con un mensaje claro si falla.", "Pon las herramientas en un diccionario TOOLS.", "Escribe una descripción de una línea de cada herramienta."],
          words: [["Función", "un bloque de código con nombre que recibe una entrada y devuelve un resultado."], ["Diccionario", "una colección de Python de pares de nombre y valor, como {'calculator': calculator}."], ["Herramienta de solo lectura", "una herramienta que solo consulta información y no cambia nada."]],
          slides: [
            { title: "Una herramienta es una función", bullets: ["El modelo solo nombra la herramienta y su entrada", "Tu código decide si la ejecuta"] },
            { title: "Dos herramientas seguras para empezar", bullets: ["calculator(expression): revisa la entrada, hace cuentas", "lookup_note(topic): lee de un diccionario"] },
            { title: "Haz fácil elegir las herramientas", bullets: ["TOOLS = {nombre: función}", "Una línea clara que describa cada herramienta", "Devuelve un mensaje claro si falla"] }
          ],
          tryIt: "En un cuaderno nuevo de Colab, escribe calculator y lookup_note, ponlas en TOOLS y prueba cada una llamándola tú mismo: calculator('45*12/60') y lookup_note('schedule').",
          youCanNow: "escribir herramientas seguras como funciones de Python y registrarlas por su nombre."
        },
        {
          title: "Pedirle al modelo su siguiente acción",
          minutes: 6,
          goal: "Escribir un prompt que haga que el modelo responda con una acción en JSON.",
          text: [
            "El modelo necesita conocer el objetivo, las herramientas y el formato de respuesta. Tu prompt del sistema enumera cada herramienta con su descripción y dice: responde solo con JSON, ya sea {\"tool\": \"nombre\", \"input\": \"...\"} para usar una herramienta, o {\"final\": \"...\"} cuando se cumpla el objetivo.",
            "Añade reglas de tu ficha de diseño: usa solo las herramientas de la lista; una acción por respuesta; si el resultado de una herramienta dice que falló, prueba otro camino; nunca inventes el resultado de una herramienta.",
            "Escribe una función auxiliar para que al resto de tu código no le importe qué proveedor usas: def ask_model(text): que llama a tu modelo (copia la llamada de la guía de inicio rápido de tu proveedor, como en el curso 2) y devuelve el texto de la respuesta. Si después cambias de proveedor, solo cambia ask_model."
          ],
          steps: ["Enumera en el prompt del sistema el nombre de cada herramienta y su descripción.", "Da las dos formas de respuesta en JSON: herramienta o final.", "Añade las reglas de tu ficha de diseño.", "Escribe ask_model(text), que devuelve el texto de la respuesta del modelo.", "Pruébalo una vez con el objetivo e imprime la respuesta."],
          words: [["Acción", "una cosa que el agente decide hacer a continuación, como usar una herramienta o dar la respuesta final."], ["Función auxiliar", "una función pequeña que esconde detalles, como a qué proveedor de modelos llamas."]],
          slides: [
            { title: "El prompt le dice al modelo", bullets: ["El objetivo", "Las herramientas y lo que hace cada una", "Las formas exactas de respuesta en JSON"] },
            { title: "Dos formas de respuesta", bullets: ["{\"tool\": \"nombre\", \"input\": \"...\"}", "{\"final\": \"...\"} cuando se cumple el objetivo"] },
            { title: "Reglas de tu ficha de diseño", bullets: ["Solo herramientas de la lista, una acción por respuesta", "Si una herramienta falla, prueba otro camino", "Nunca inventes el resultado de una herramienta"] },
            { title: "Esconde al proveedor", bullets: ["ask_model(text) devuelve el texto de la respuesta", "Cambia de proveedor cambiando una función"] }
          ],
          tryIt: "Escribe el prompt del sistema y ask_model. Envía el objetivo de la tarea final e imprime la respuesta. ¿Eligió primero lookup_note? Si no, mejora las descripciones de las herramientas.",
          youCanNow: "hacer que un modelo elija su siguiente acción en JSON a partir de una lista de herramientas."
        },
        {
          title: "Ejecutar el ciclo: actuar y devolver el resultado",
          minutes: 6,
          goal: "Escribir el ciclo que ejecuta la herramienta elegida y devuelve el resultado.",
          text: [
            "El ciclo es corto. history = [] guarda lo que pasó. En cada paso: arma el texto (prompt del sistema, objetivo, historial), llama a ask_model y lee el JSON. Si tiene 'final', imprímelo y detente. Si tiene 'tool', búscala en TOOLS, ejecútala con la entrada y añade una línea al historial: la acción y el resultado.",
            "Devolver el resultado es el paso de observar del curso 1. Sin él, el modelo pediría lo mismo para siempre. Con él, el modelo ve \"lookup_note(schedule) devolvió: Días de clase: lun, mié, jue\" y puede decidir el siguiente paso, como usar la calculadora.",
            "Si el modelo nombra una herramienta que no está en TOOLS, no dejes que el programa se caiga: añade \"Herramienta desconocida: X. Usa una de estas: calculator, lookup_note\" al historial y continúa. Los mensajes claros de vuelta al modelo son la forma en que un agente se recupera de sus propios errores."
          ],
          steps: ["history = []", "Arma el texto: prompt del sistema, objetivo, historial.", "Llama a ask_model y lee el JSON.", "Si hay 'final': imprímelo y detente.", "Si hay 'tool': ejecútala desde TOOLS y añade la acción y el resultado al historial."],
          words: [["Historial", "la lista de acciones y resultados que el agente ha visto en esta ejecución."], ["Observación", "el resultado de una herramienta, que se le devuelve al modelo."]],
          slides: [
            { title: "Cada paso del ciclo", bullets: ["Arma el texto: prompt, objetivo, historial", "Pregunta al modelo, lee el JSON", "¿Final? Detente. ¿Herramienta? Ejecútala."] },
            { title: "Devuelve el resultado", bullets: ["Añade la acción y el resultado al historial", "El modelo lo ve en el siguiente paso", "Sin eso, el agente se repite"] },
            { title: "¿Herramienta desconocida?", bullets: ["No dejes que se caiga", "Dile al modelo qué herramientas existen", "Deja que lo intente otra vez"] }
          ],
          tryIt: "Escribe el ciclo y ejecútalo con el objetivo de la tarea final. Imprime el historial después de cada paso. Cuenta cuántos pasos le tomó llegar a una respuesta final.",
          youCanNow: "escribir el ciclo de un agente que ejecuta herramientas y le devuelve los resultados al modelo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El ciclo del agente en código",
        questions: [
          { q: "¿Quién ejecuta de verdad una herramienta en un agente?", options: ["El modelo", "El navegador del usuario", "Tu código", "El sitio web de la herramienta"], answer: 2, why: "El modelo solo nombra la herramienta; tu código decide y la ejecuta." },
          { q: "¿Por qué cada herramienta necesita una descripción clara de una línea?", options: ["El modelo la lee para elegir la herramienta correcta", "Hace que el código corra más rápido", "Python la exige", "Esconde la herramienta del modelo"], answer: 0, why: "Las descripciones son la forma en que el modelo sabe para qué sirve cada herramienta." },
          { q: "El modelo responde {\"final\": \"Unas 27 horas\"}. ¿Qué hace el ciclo?", options: ["Ejecuta la calculadora", "Vuelve a empezar", "Le pide una contraseña al usuario", "Imprime la respuesta y se detiene"], answer: 3, why: "Una respuesta final significa que se cumplió el objetivo." },
          { q: "¿Para qué sirve la función auxiliar ask_model?", options: ["Para ejecutar herramientas", "Para tener en un solo lugar los detalles del proveedor", "Para guardar la clave de API en el código", "Para saltarse el ciclo"], answer: 1, why: "Así, cambiar de proveedor significa cambiar una sola función." },
          { q: "El modelo pide una herramienta llamada \"search\" que tú no escribiste. ¿Cuál es la mejor respuesta?", options: ["Que el programa se caiga para que lo notes", "Decirle al modelo qué herramientas existen y continuar", "Ejecutar cualquier búsqueda que encuentres", "Detener el agente para siempre"], answer: 1, why: "Una respuesta clara permite que el agente se recupere." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer que el agente sea confiable",
      lessons: [
        {
          title: "Memoria y registro de ejecución",
          minutes: 5,
          goal: "Mantener ordenada la memoria a corto plazo y registrar cada paso.",
          text: [
            "La memoria a corto plazo es la lista de historial que ya tienes. Crece en cada paso, y todo lo que contiene se le envía al modelo, lo que cuesta tokens y tiempo. En ejecuciones largas, guarda completos los últimos pasos y reemplaza los pasos más viejos con un resumen de una línea.",
            "La memoria a largo plazo es todo lo que se guarda entre ejecuciones: un archivo de notas, una hoja de cálculo, una pequeña base de datos. Guarda solo lo que el agente de verdad necesita la próxima vez, y nunca guardes datos privados que no necesites.",
            "El registro de ejecución es para ti, no para el modelo. En cada paso, anota el número de paso, la respuesta original del modelo, la herramienta y la entrada, el resultado y la hora. Cuando el agente hace algo raro, el registro te dice por qué. Una forma sencilla: log.append({'step': n, 'reply': reply, 'result': result}) e imprímelo al final."
          ],
          words: [["Memoria a corto plazo", "lo que el agente ve durante una ejecución: el historial hasta ahora."], ["Memoria a largo plazo", "información que se guarda entre ejecuciones, como un archivo de notas."], ["Registro de ejecución", "tu registro de cada paso que dio el agente, para revisar y depurar."]],
          slides: [
            { title: "Memoria a corto plazo", bullets: ["La lista de historial, enviada en cada paso", "Un historial largo cuesta tokens y tiempo", "Resume los pasos más viejos"] },
            { title: "Memoria a largo plazo", bullets: ["Guardada entre ejecuciones: archivo o base de datos", "Guarda solo lo necesario", "Nada de datos privados que no necesites"] },
            { title: "El registro de ejecución", bullets: ["Paso, respuesta original, herramienta, entrada, resultado, hora", "Para ti, no para el modelo", "Léelo cuando el agente actúe raro"] }
          ],
          tryIt: "Añade una lista log a tu agente y anota cada paso. Ejecútalo y luego imprime el registro como una tabla ordenada: paso, herramienta, entrada, resultado.",
          youCanNow: "manejar la memoria de un agente y llevar un registro de ejecución que puedas leer."
        },
        {
          title: "Límites de pasos, malas respuestas y errores",
          minutes: 6,
          goal: "Añadir un límite de pasos y manejar las malas respuestas del modelo y los errores de las herramientas.",
          text: [
            "Todo ciclo necesita un techo: MAX_STEPS = 6 y for step in range(MAX_STEPS): en lugar de un ciclo que corre para siempre. Si llega al límite sin una respuesta final, detente e informa \"Detenido: se alcanzó el límite de pasos\" junto con el registro.",
            "Las malas respuestas pasan: palabras extra alrededor del JSON, una clave que falta, una respuesta vacía. Lee la respuesta dentro de try y except. Si falla, añade \"Tu última respuesta no era JSON válido. Responde solo con JSON.\" al historial y deja que el siguiente paso lo intente otra vez. Cuéntalas; si hay dos seguidas, detente.",
            "Las herramientas también fallan: a la calculadora le llegan letras, falta un archivo. Cada herramienta debe atrapar sus propios errores y devolver un mensaje claro como \"error de calculator: solo se permiten números y + - * /\". Así el modelo puede corregir su entrada en el siguiente paso."
          ],
          steps: ["Fija MAX_STEPS y haz el ciclo con range(MAX_STEPS).", "Lee las respuestas dentro de try / except.", "Ante una mala respuesta, avísale al modelo y continúa.", "Detente después de dos malas respuestas seguidas.", "Haz que cada herramienta devuelva un mensaje de error claro en lugar de caerse."],
          words: [["Límite de pasos", "el máximo de pasos que puede dar un agente en una ejecución."], ["Excepción", "un error que ocurre mientras corre un programa; try / except lo atrapa."]],
          slides: [
            { title: "Pon siempre un techo", bullets: ["MAX_STEPS = 6", "for step in range(MAX_STEPS):", "En el límite: detente e informa"] },
            { title: "Malas respuestas del modelo", bullets: ["Lee la respuesta dentro de try / except", "Dile al modelo: responde solo con JSON", "Dos malas respuestas seguidas: detente"] },
            { title: "Errores de las herramientas", bullets: ["Cada herramienta atrapa sus propios errores", "Devuelve un mensaje de error claro", "El modelo corrige su entrada en el siguiente paso"] }
          ],
          tryIt: "Prueba tu código de seguridad: haz por un momento que ask_model devuelva \"hola\" en el paso 2, y envíale a calculator la entrada 'abc'. Revisa que el agente se recupere y que se detenga en el límite de pasos cuando pongas MAX_STEPS = 2.",
          youCanNow: "evitar que un agente dé vueltas para siempre y ayudarlo a recuperarse de malas respuestas y errores de las herramientas."
        },
        {
          title: "Frameworks, y terminar tu primer agente",
          minutes: 6,
          goal: "Terminar y probar tu agente, y saber cuándo te ayudaría un framework.",
          text: [
            "Los frameworks de agentes son bibliotecas que te dan ya hechos el ciclo, el manejo de herramientas y la memoria. Entre los más conocidos están LangGraph, CrewAI, el OpenAI Agents SDK y el Agent Development Kit de Google, y muchos proveedores de modelos ofrecen la llamada nativa a herramientas, en la que el modelo te devuelve una llamada a herramienta estructurada. Cambian a menudo, así que lee la documentación de cada proyecto para la configuración actual.",
            "Construir primero el ciclo tú mismo significa que entiendes lo que un framework hace por ti, y que puedes depurarlo cuando algo sale mal. Muchos agentes reales siguen siendo un ciclo sencillo como el tuyo.",
            "Antes de dar por terminado tu agente, pruébalo como en el curso 2: tres objetivos que debería cumplir, uno que no puede cumplir (debe decirlo, no inventar una respuesta) y una entrada mala. Lee el registro de cada ejecución."
          ],
          steps: ["Ejecuta el agente con tres objetivos que debería cumplir.", "Ejecuta un objetivo que no puede cumplir: debe decirlo.", "Ejecuta una entrada mala.", "Lee el registro de cada ejecución.", "Corrige una debilidad y vuelve a ejecutar las cinco pruebas."],
          words: [["Framework", "una biblioteca ya hecha que se encarga por ti de partes comunes de un programa."], ["Llamada nativa a herramientas", "una función del modelo en la que este devuelve una solicitud estructurada para usar una herramienta."]],
          slides: [
            { title: "Frameworks de agentes", bullets: ["Ciclo, herramientas y memoria ya hechos", "LangGraph, CrewAI, OpenAI Agents SDK, Google ADK", "Cambian a menudo: lee su documentación"] },
            { title: "Por qué construirlo a mano primero", bullets: ["Entiendes lo que hace un framework", "Puedes depurarlo", "Muchos agentes reales son un ciclo sencillo"] },
            { title: "Prueba antes de darlo por terminado", bullets: ["Tres objetivos que debería cumplir", "Uno que no puede cumplir: debe decirlo", "Una entrada mala; lee cada registro"] }
          ],
          tryIt: "Tarea final: termina tu agente de dos herramientas con el objetivo de las horas de estudio, con un límite de 6 pasos, una mala respuesta recuperada y un registro impreso de cada paso. Luego haz las cinco pruebas de arriba y escribe dos frases sobre lo que corregiste.",
          youCanNow: "crear, probar y explicar un agente de IA que funcione, en Python sencillo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer que el agente sea confiable",
        questions: [
          { q: "¿Por qué resumir los pasos más viejos en una ejecución larga?", options: ["El modelo no olvida nada de todos modos", "Esconde los errores", "Python no puede guardar listas largas", "Un historial largo cuesta tokens y tiempo"], answer: 3, why: "Todo lo que hay en el historial se envía en cada paso." },
          { q: "¿Para quién es principalmente el registro de ejecución?", options: ["Para ti, para ver por qué el agente actuó como actuó", "Para el modelo", "Para el proveedor de la API", "Para otros usuarios"], answer: 0, why: "El registro sirve para revisar y depurar." },
          { q: "¿Qué debe pasar cuando un agente llega a MAX_STEPS sin una respuesta final?", options: ["Seguir de todos modos", "Inventar una respuesta final", "Detenerse e informar que se alcanzó el límite", "Borrar el registro"], answer: 2, why: "Informa con honestidad y muestra el registro." },
          { q: "A la calculadora le llega la entrada 'abc'. Una herramienta bien hecha:", options: ["Hace caer todo el agente", "Borra el cuaderno", "Devuelve cero sin decir nada", "Devuelve un mensaje de error claro que el modelo puede usar"], answer: 3, why: "Los mensajes de error claros permiten que el modelo corrija su entrada." },
          { q: "¿Cuál es una buena prueba antes de dar por terminado el agente?", options: ["Solo objetivos que seguro va a cumplir", "Ninguna prueba, publícalo", "Un objetivo que no puede cumplir, para ver que lo diga", "Ejecutarlo una vez"], answer: 2, why: "Un \"no puedo\" honesto es mejor que una respuesta inventada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Crear agentes de IA",
    questions: [
      { q: "Para un agente, una herramienta es:", options: ["Un sitio web", "Una función que tu código ejecuta cuando el modelo lo pide", "El propio modelo", "Una contraseña"], answer: 1, why: "Las herramientas son funciones; el modelo solo las nombra." },
      { q: "¿Cuál es el tipo de herramienta más seguro para empezar?", options: ["Una consulta de solo lectura", "Una herramienta para borrar archivos", "Una herramienta de pagos", "Un enviador de correos"], answer: 0, why: "Las herramientas de solo lectura no cambian nada." },
      { q: "TOOLS = {'calculator': calculator} permite que el ciclo:", options: ["Encuentre una herramienta por su nombre", "Se salte el modelo", "Guarde la clave de API", "Haga más rápido el modelo"], answer: 0, why: "El diccionario relaciona nombres con funciones." },
      { q: "Una herramienta debe revisar su entrada porque:", options: ["Python lo exige", "El modelo puede enviar algo inseguro o equivocado", "Ahorra tokens", "Esconde el resultado"], answer: 1, why: "Nunca confíes a ciegas en lo que produce el modelo." },
      { q: "¿Qué respuesta significa que el agente quiere usar una herramienta?", options: ["{\"final\": \"listo\"}", "\"hola\"", "{\"tool\": \"calculator\", \"input\": \"2+2\"}", "Una respuesta vacía"], answer: 2, why: "La forma de herramienta nombra una herramienta y su entrada." },
      { q: "Una regla en el prompt del sistema que ayuda a la honestidad es:", options: ["\"Ignora las fallas.\"", "\"Responde siempre en un paso.\"", "\"Usa cualquier herramienta que quieras.\"", "\"Nunca inventes el resultado de una herramienta.\""], answer: 3, why: "Los resultados inventados son una falla común de los agentes." },
      { q: "ask_model(text) es útil porque:", options: ["Hace públicas las claves", "Ejecuta las herramientas", "Tiene en un solo lugar los detalles del proveedor", "Quita el ciclo"], answer: 2, why: "Cambiar de proveedor solo cambia esa función." },
      { q: "Devolver el resultado de una herramienta al historial es el paso de:", options: ["Observar", "Pensar", "Disparador", "Respuesta final"], answer: 0, why: "Observar los resultados permite que el modelo elija el siguiente paso." },
      { q: "Si no se le devuelven los resultados, un agente probablemente:", options: ["Terminará más rápido", "Escribirá mejor JSON", "Será más barato", "Repetirá la misma acción"], answer: 3, why: "Nunca se entera de lo que pasó." },
      { q: "El modelo nombra una herramienta desconocida. El ciclo debe:", options: ["Caerse", "Decirle al modelo los nombres de herramientas válidos y continuar", "Instalar una herramienta nueva automáticamente", "Darle acceso total a la computadora"], answer: 1, why: "Una respuesta clara ayuda al agente a recuperarse." },
      { q: "La memoria a corto plazo de tu agente es:", options: ["Un archivo guardado para siempre", "La lista de historial de esta ejecución", "Tu cuenta de Google", "Los datos de entrenamiento del modelo"], answer: 1, why: "El historial es lo que el modelo ve en esta ejecución." },
      { q: "La memoria a largo plazo debe guardar:", options: ["Todo, incluidos los datos privados", "Nunca nada", "Tu clave de API", "Solo lo que el agente necesita la próxima vez"], answer: 3, why: "Guarda solo lo necesario; evita los datos privados." },
      { q: "Un buen registro de ejecución anota:", options: ["Paso, respuesta original, herramienta, entrada y resultado", "Solo la respuesta final", "Tu contraseña", "Nada"], answer: 0, why: "Los pasos completos te dejan ver por qué pasaron las cosas." },
      { q: "for step in range(MAX_STEPS): le da al agente:", options: ["Pasos ilimitados", "Más herramientas", "Un techo de pasos", "Un modelo más rápido"], answer: 2, why: "El ciclo no puede correr para siempre." },
      { q: "El modelo responde con palabras alrededor del JSON. Un buen agente:", options: ["Quita el límite de pasos", "Se cae", "Acepta las palabras como respuesta", "Le dice al modelo que responda solo con JSON y continúa"], answer: 3, why: "Recupérate una vez y detente si las fallas se repiten." },
      { q: "¿Cuándo debe detenerse el agente después de malas respuestas?", options: ["Nunca", "Después de la primera palabra", "Después de dos seguidas", "Solo cuando se apague la computadora"], answer: 2, why: "Las fallas repetidas significan que algo está mal." },
      { q: "Los frameworks de agentes:", options: ["Nunca cambian", "Dan ya hechos el ciclo, las herramientas y la memoria", "Quitan la necesidad de hacer pruebas", "Son obligatorios para todo agente"], answer: 1, why: "Ayudan, pero cambian a menudo y aun así hay que probarlos." },
      { q: "La llamada nativa a herramientas significa:", options: ["El modelo devuelve una solicitud estructurada para usar una herramienta", "El modelo ejecuta código en tu computadora por sí solo", "Tú escribes las herramientas a mano", "Las herramientas corren sin código"], answer: 0, why: "El proveedor devuelve una llamada estructurada que tu código ejecuta." },
      { q: "¿Por qué construir primero el ciclo a mano?", options: ["Entiendes y puedes depurar lo que hace un framework", "Los frameworks son ilegales", "Siempre es más rápido", "Los modelos lo exigen"], answer: 0, why: "Conocer las piezas hace posible depurar." },
      { q: "Ante un objetivo que no puede alcanzar, un buen agente:", options: ["Inventa una respuesta", "Dice que no puede y muestra lo que intentó", "Da vueltas para siempre", "Borra su registro"], answer: 1, why: "Una falla honesta es mejor que una respuesta inventada." }
    ]
  }
};
