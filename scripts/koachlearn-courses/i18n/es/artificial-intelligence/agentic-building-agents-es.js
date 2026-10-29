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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos del programa Diseñar, crear y desplegar agentes de IA autónomos que terminaron los cursos 1 y 2: dueños de pequeños negocios, personas que cambian de carrera, estudiantes y personal que quieren crear ellos mismos un agente que funcione.",
    startingPoint: "Tienen una tarjeta de diseño del agente y un prompt del sistema probado que devuelve JSON. Pueden ejecutar líneas cortas de Python en Google Colab y llamar a un modelo con una clave de API secreta, pero no han escrito un ciclo de agente.",
    gap: "Los frameworks esconden cómo funciona un agente, así que cuando uno falla, los principiantes no saben por qué. Necesitan construir el ciclo a mano, con herramientas, memoria, un registro, límites de pasos y manejo de errores, para que sus agentes sean confiables y puedan depurarlos.",
    constraints: [
      "Nivel de lectura: palabras sencillas; el código aparece en líneas cortas para copiar",
      "Dispositivos: una computadora con navegador web; Colab gratuito y los niveles gratuitos de las API tienen límites",
      "Nada de datos privados ni de clientes en las herramientas ni en las notas de práctica",
      "Las claves de API se quedan en un ajuste secreto, nunca en el cuaderno",
      "Tiempo: lecciones cortas con una tarea práctica cada una"
    ],
    prerequisites: "Los cursos 1 y 2 de Diseñar, crear y desplegar agentes de IA autónomos (\"Entender los LLM y la ingeniería de prompts\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En un cuaderno de Colab", action: "escribir dos herramientas como funciones de Python con nombres claros, descripciones de una línea y revisión de la entrada", standard: "y que cada herramienta funcione cuando tú mismo la llamas" },
    { id: "O2", condition: "Con tus herramientas y una meta", action: "escribir un prompt del sistema y una función auxiliar ask_model que hagan que el modelo responda con una acción en JSON", standard: "para que el modelo elija una herramienta válida o una respuesta final" },
    { id: "O3", condition: "Con la acción que eligió el modelo", action: "escribir un ciclo que ejecute la herramienta elegida y le devuelva el resultado al modelo", standard: "hasta que el modelo dé una respuesta final" },
    { id: "O4", condition: "Mientras el agente funciona", action: "mantener ordenado el historial y registrar cada paso en un registro de ejecución", standard: "con el paso, la respuesta original, la herramienta, la entrada y el resultado de cada paso" },
    { id: "O5", condition: "Ante una mala respuesta del modelo, un error de herramienta o una ejecución larga", action: "añadir un límite de pasos y manejar las malas respuestas y los errores de las herramientas", standard: "para que el agente se recupere o se detenga e informe sin caerse" },
    { id: "O6", condition: "Con tu agente terminado", action: "probarlo con metas normales e imposibles y explicar cuándo ayudaría un framework", standard: "ejecutando las cinco pruebas y escribiendo lo que corregiste" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El ciclo del agente en código",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "escribir herramientas seguras como funciones de Python y registrarlas por su nombre.",
          quickCheck: [
            { objective: "O1", q: "En tu agente, ¿qué es una herramienta?", options: ["Una función de Python que tu código ejecuta cuando el modelo la pide", "Un ajuste dentro del modelo", "Un sitio web que el modelo visita por su cuenta", "Un segundo modelo de IA"], answer: 0, why: "El modelo solo pide; tu código ejecuta la función." },
            { objective: "O1", q: "Tu herramienta lookup_note recibe un tema que no está en las notas. ¿Qué debe hacer?", options: ["Inventar una nota probable", "Caerse para que lo notes", "Devolver un mensaje claro de que no encontró el tema", "Devolver todo el diccionario de notas"], answer: 2, why: "Un mensaje claro permite que el modelo intente otra cosa en lugar de adivinar." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "hacer que un modelo elija su siguiente acción en JSON a partir de una lista de herramientas.",
          quickCheck: [
            { objective: "O2", q: "¿Cómo debe ser la respuesta del modelo cuando quiere una herramienta?", options: ["Un párrafo amable que explica su plan", "Una acción en JSON que nombra la herramienta y su entrada", "El código de Python de la herramienta", "Una lista de todas las herramientas"], answer: 1, why: "Una acción en JSON es algo que tu ciclo puede leer y ejecutar." },
            { objective: "O2", q: "El modelo sigue eligiendo la calculadora antes de tener los días de clase. ¿Qué cambiarías primero?", options: ["Quitar la calculadora", "Subir el límite de pasos", "Cambiar a un framework", "Mejorar las descripciones de las herramientas para que sepa buscar primero en las notas"], answer: 3, why: "El modelo elige las herramientas por sus descripciones, así que descripciones más claras guían su elección." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "escribir el ciclo de un agente que ejecuta herramientas y le devuelve los resultados al modelo.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es el paso de observar en el ciclo?", options: ["Añadir el resultado de la herramienta al historial para que el modelo lo vea", "Imprimir la respuesta final", "Elegir qué herramienta escribir", "Revisar la clave de API"], answer: 0, why: "Devolver el resultado permite que el modelo decida su siguiente paso según lo que pasó." },
            { objective: "O3", q: "Tu agente llama a la misma herramienta una y otra vez. ¿Cuál es el arreglo más probable?", options: ["Añadir más herramientas", "Asegurarte de que cada resultado de herramienta se añada al historial", "Acortar el prompt del sistema", "Usar otro cuaderno"], answer: 1, why: "Sin el resultado en el historial, el modelo no sabe que la acción ya se ejecutó." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El ciclo del agente en código",
        questions: [
          { objective: "O1", q: "¿Quién ejecuta de verdad una herramienta en un agente?", options: ["El modelo", "El navegador del usuario", "Tu código", "El sitio web de la herramienta"], answer: 2, why: "El modelo solo nombra la herramienta; tu código decide y la ejecuta." },
          { objective: "O1", q: "¿Por qué cada herramienta necesita una descripción clara de una línea?", options: ["El modelo la lee para elegir la herramienta correcta", "Hace que el código corra más rápido", "Python la exige", "Esconde la herramienta del modelo"], answer: 0, why: "Las descripciones son la forma en que el modelo sabe para qué sirve cada herramienta." },
          { objective: "O3", q: "El modelo responde {\"final\": \"Unas 27 horas\"}. ¿Qué hace el ciclo?", options: ["Ejecuta la calculadora", "Vuelve a empezar", "Le pide una contraseña al usuario", "Imprime la respuesta y se detiene"], answer: 3, why: "Una respuesta final significa que se cumplió el objetivo." },
          { objective: "O2", q: "¿Para qué sirve la función auxiliar ask_model?", options: ["Para ejecutar herramientas", "Para tener en un solo lugar los detalles del proveedor", "Para guardar la clave de API en el código", "Para saltarse el ciclo"], answer: 1, why: "Así, cambiar de proveedor significa cambiar una sola función." },
          { objective: "O3", q: "El modelo pide una herramienta llamada \"search\" que tú no escribiste. ¿Cuál es la mejor respuesta?", options: ["Que el programa se caiga para que lo notes", "Decirle al modelo qué herramientas existen y continuar", "Ejecutar cualquier búsqueda que encuentres", "Detener el agente para siempre"], answer: 1, why: "Una respuesta clara permite que el agente se recupere." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer que el agente sea confiable",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "manejar la memoria de un agente y llevar un registro de ejecución que puedas leer.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es la memoria a corto plazo en tu agente?", options: ["Un archivo guardado para siempre", "Los datos de entrenamiento del modelo", "La lista del historial de esta ejecución", "El diccionario de notas"], answer: 2, why: "La memoria a corto plazo es el historial que el agente guarda durante una ejecución." },
            { objective: "O4", q: "El agente dio una respuesta extraña y quieres saber por qué. ¿Qué revisas?", options: ["Solo la respuesta final", "La clave de API", "Solo las descripciones de las herramientas", "El registro de ejecución de cada paso"], answer: 3, why: "El registro muestra cada respuesta, herramienta, entrada y resultado, así que puedes ver dónde falló." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "evitar que un agente dé vueltas para siempre y ayudarlo a recuperarse de malas respuestas y errores de las herramientas.",
          quickCheck: [
            { objective: "O5", q: "¿Qué hace MAX_STEPS?", options: ["Pone un tope a cuántos pasos puede dar el agente", "Hace que el modelo responda más rápido", "Limita cuántas herramientas puedes escribir", "Fija qué tan largo puede ser el registro"], answer: 0, why: "Un límite de pasos detiene una ejecución que, si no, seguiría sin fin." },
            { objective: "O5", q: "En un paso, el modelo responde \"hola\" en lugar de JSON. ¿Qué debe hacer tu agente?", options: ["Caerse", "Tomar \"hola\" como la respuesta final", "Pedirle al modelo que responda solo con JSON y seguir", "Empezar toda la ejecución otra vez desde el paso 1"], answer: 2, why: "Una mala respuesta se puede recuperar; el agente se detiene solo después de malas respuestas repetidas." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "crear, probar y explicar un agente de IA que funcione, en Python sencillo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es un framework de agentes?", options: ["Una regla que prohíbe las herramientas", "Un ciclo, herramientas y memoria ya hechos que puedes usar en lugar de escribir los tuyos", "Un modelo gratuito", "Un tipo de clave de API"], answer: 1, why: "Los frameworks empaquetan las partes que construiste a mano en este curso." },
            { objective: "O6", q: "Le das a tu agente una meta que no puede alcanzar con sus herramientas. ¿Qué debe hacer un buen agente?", options: ["Decir que no puede terminar y mostrar lo que intentó", "Inventar una respuesta que suene bien", "Seguir funcionando para siempre", "Llamar a una herramienta que no existe"], answer: 0, why: "Un agente honesto informa lo que no pudo hacer en lugar de inventar algo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer que el agente sea confiable",
        questions: [
          { objective: "O4", q: "¿Por qué resumir los pasos más viejos en una ejecución larga?", options: ["El modelo no olvida nada de todos modos", "Esconde los errores", "Python no puede guardar listas largas", "Un historial largo cuesta tokens y tiempo"], answer: 3, why: "Todo lo que hay en el historial se envía en cada paso." },
          { objective: "O4", q: "¿Para quién es principalmente el registro de ejecución?", options: ["Para ti, para ver por qué el agente actuó como actuó", "Para el modelo", "Para el proveedor de la API", "Para otros usuarios"], answer: 0, why: "El registro sirve para revisar y depurar." },
          { objective: "O5", q: "¿Qué debe pasar cuando un agente llega a MAX_STEPS sin una respuesta final?", options: ["Seguir de todos modos", "Inventar una respuesta final", "Detenerse e informar que se alcanzó el límite", "Borrar el registro"], answer: 2, why: "Informa con honestidad y muestra el registro." },
          { objective: "O5", q: "A la calculadora le llega la entrada 'abc'. Una herramienta bien hecha:", options: ["Hace caer todo el agente", "Borra el cuaderno", "Devuelve cero sin decir nada", "Devuelve un mensaje de error claro que el modelo puede usar"], answer: 3, why: "Los mensajes de error claros permiten que el modelo corrija su entrada." },
          { objective: "O6", q: "¿Cuál es una buena prueba antes de dar por terminado el agente?", options: ["Solo objetivos que seguro va a cumplir", "Ninguna prueba, publícalo", "Un objetivo que no puede cumplir, para ver que lo diga", "Ejecutarlo una vez"], answer: 2, why: "Un \"no puedo\" honesto es mejor que una respuesta inventada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Crear agentes de IA",
    questions: [
      { objective: "O1", q: "Para un agente, una herramienta es:", options: ["Un sitio web", "Una función que tu código ejecuta cuando el modelo lo pide", "El propio modelo", "Una contraseña"], answer: 1, why: "Las herramientas son funciones; el modelo solo las nombra." },
      { objective: "O1", q: "¿Cuál es el tipo de herramienta más seguro para empezar?", options: ["Una consulta de solo lectura", "Una herramienta para borrar archivos", "Una herramienta de pagos", "Un enviador de correos"], answer: 0, why: "Las herramientas de solo lectura no cambian nada." },
      { objective: "O1", q: "TOOLS = {'calculator': calculator} permite que el ciclo:", options: ["Encuentre una herramienta por su nombre", "Se salte el modelo", "Guarde la clave de API", "Haga más rápido el modelo"], answer: 0, why: "El diccionario relaciona nombres con funciones." },
      { objective: "O1", q: "Una herramienta debe revisar su entrada porque:", options: ["Python lo exige", "El modelo puede enviar algo inseguro o equivocado", "Ahorra tokens", "Esconde el resultado"], answer: 1, why: "Nunca confíes a ciegas en lo que produce el modelo." },
      { objective: "O2", q: "¿Qué respuesta significa que el agente quiere usar una herramienta?", options: ["{\"final\": \"listo\"}", "\"hola\"", "{\"tool\": \"calculator\", \"input\": \"2+2\"}", "Una respuesta vacía"], answer: 2, why: "La forma de herramienta nombra una herramienta y su entrada." },
      { objective: "O2", q: "Una regla en el prompt del sistema que ayuda a la honestidad es:", options: ["\"Ignora las fallas.\"", "\"Responde siempre en un paso.\"", "\"Usa cualquier herramienta que quieras.\"", "\"Nunca inventes el resultado de una herramienta.\""], answer: 3, why: "Los resultados inventados son una falla común de los agentes." },
      { objective: "O2", q: "ask_model(text) es útil porque:", options: ["Hace públicas las claves", "Ejecuta las herramientas", "Tiene en un solo lugar los detalles del proveedor", "Quita el ciclo"], answer: 2, why: "Cambiar de proveedor solo cambia esa función." },
      { objective: "O3", q: "Devolver el resultado de una herramienta al historial es el paso de:", options: ["Observar", "Pensar", "Disparador", "Respuesta final"], answer: 0, why: "Observar los resultados permite que el modelo elija el siguiente paso." },
      { objective: "O3", q: "Si no se le devuelven los resultados, un agente probablemente:", options: ["Terminará más rápido", "Escribirá mejor JSON", "Será más barato", "Repetirá la misma acción"], answer: 3, why: "Nunca se entera de lo que pasó." },
      { objective: "O3", q: "El modelo nombra una herramienta desconocida. El ciclo debe:", options: ["Caerse", "Decirle al modelo los nombres de herramientas válidos y continuar", "Instalar una herramienta nueva automáticamente", "Darle acceso total a la computadora"], answer: 1, why: "Una respuesta clara ayuda al agente a recuperarse." },
      { objective: "O4", q: "La memoria a corto plazo de tu agente es:", options: ["Un archivo guardado para siempre", "La lista de historial de esta ejecución", "Tu cuenta de Google", "Los datos de entrenamiento del modelo"], answer: 1, why: "El historial es lo que el modelo ve en esta ejecución." },
      { objective: "O4", q: "La memoria a largo plazo debe guardar:", options: ["Todo, incluidos los datos privados", "Nunca nada", "Tu clave de API", "Solo lo que el agente necesita la próxima vez"], answer: 3, why: "Guarda solo lo necesario; evita los datos privados." },
      { objective: "O4", q: "Un buen registro de ejecución anota:", options: ["Paso, respuesta original, herramienta, entrada y resultado", "Solo la respuesta final", "Tu contraseña", "Nada"], answer: 0, why: "Los pasos completos te dejan ver por qué pasaron las cosas." },
      { objective: "O5", q: "for step in range(MAX_STEPS): le da al agente:", options: ["Pasos ilimitados", "Más herramientas", "Un techo de pasos", "Un modelo más rápido"], answer: 2, why: "El ciclo no puede correr para siempre." },
      { objective: "O5", q: "El modelo responde con palabras alrededor del JSON. Un buen agente:", options: ["Quita el límite de pasos", "Se cae", "Acepta las palabras como respuesta", "Le dice al modelo que responda solo con JSON y continúa"], answer: 3, why: "Recupérate una vez y detente si las fallas se repiten." },
      { objective: "O5", q: "¿Cuándo debe detenerse el agente después de malas respuestas?", options: ["Nunca", "Después de la primera palabra", "Después de dos seguidas", "Solo cuando se apague la computadora"], answer: 2, why: "Las fallas repetidas significan que algo está mal." },
      { objective: "O6", q: "Los frameworks de agentes:", options: ["Nunca cambian", "Dan ya hechos el ciclo, las herramientas y la memoria", "Quitan la necesidad de hacer pruebas", "Son obligatorios para todo agente"], answer: 1, why: "Ayudan, pero cambian a menudo y aun así hay que probarlos." },
      { objective: "O6", q: "La llamada nativa a herramientas significa:", options: ["El modelo devuelve una solicitud estructurada para usar una herramienta", "El modelo ejecuta código en tu computadora por sí solo", "Tú escribes las herramientas a mano", "Las herramientas corren sin código"], answer: 0, why: "El proveedor devuelve una llamada estructurada que tu código ejecuta." },
      { objective: "O6", q: "¿Por qué construir primero el ciclo a mano?", options: ["Entiendes y puedes depurar lo que hace un framework", "Los frameworks son ilegales", "Siempre es más rápido", "Los modelos lo exigen"], answer: 0, why: "Conocer las piezas hace posible depurar." },
      { objective: "O6", q: "Ante un objetivo que no puede alcanzar, un buen agente:", options: ["Inventa una respuesta", "Dice que no puede y muestra lo que intentó", "Da vueltas para siempre", "Borra su registro"], answer: 1, why: "Una falla honesta es mejor que una respuesta inventada." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      4,
      6,
      7,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Dos herramientas que funcionan",
        objective: "O1",
        notYet: "Falta una herramienta, se cae o no tiene descripción.",
        meets: "Las dos herramientas funcionan, tienen nombres y descripciones claros y revisan su entrada.",
        exceeds: "Las herramientas devuelven mensajes de error claros con los que el modelo puede actuar."
      },
      {
        name: "Acciones en JSON",
        objective: "O2",
        notYet: "El modelo responde con texto libre que el ciclo no puede leer.",
        meets: "El modelo elige herramientas y una respuesta final en JSON.",
        exceeds: "El prompt también le dice al modelo que nunca invente el resultado de una herramienta."
      },
      {
        name: "El ciclo devuelve los resultados",
        objective: "O3",
        notYet: "Los resultados de las herramientas no se devuelven, o el ciclo nunca termina.",
        meets: "El ciclo ejecuta la herramienta elegida, devuelve el resultado y se detiene en una respuesta final.",
        exceeds: "Los nombres de herramientas desconocidos se manejan diciéndole al modelo qué herramientas existen."
      },
      {
        name: "Límites de seguridad",
        objective: "O5",
        notYet: "No hay límite de pasos, o una mala respuesta hace caer al agente.",
        meets: "Se detiene en un límite de 6 pasos y se recupera de una mala respuesta del modelo.",
        exceeds: "También maneja un error de herramienta y se detiene después de dos malas respuestas seguidas."
      },
      {
        name: "Registro de ejecución",
        objective: "O4",
        notYet: "No hay registro, o le faltan pasos.",
        meets: "Imprime un registro de cada paso.",
        exceeds: "El registro es una tabla ordenada que otra persona podría leer para explicar la ejecución."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que pasan al curso 4 del programa de agentes en un plazo de 30 días",
      "Personas que dicen haber creado o adaptado un agente para una tarea real en un plazo de 30 días (encuesta de seguimiento)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con navegador web e internet",
      "Una cuenta gratuita de Google para usar Google Colab",
      "Una clave de API de un modelo del curso 2 (nivel gratuito de la API de Gemini) o un modelo local gratuito con Ollama",
      "La tarjeta de diseño y el prompt probado de los cursos 1 y 2",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego construyan el ciclo una lección a la vez, con todos ejecutando el código en vivo.",
      "Comprueba que las claves de API estén guardadas como secretos y que nunca aparezcan en una pantalla compartida.",
      "Mantén las herramientas de práctica en modo de solo lectura y usa notas inventadas, no datos privados ni de clientes.",
      "Cuando un agente se porte mal, pide a las personas que lean en voz alta su registro de ejecución antes de cambiar el código.",
      "Califica la tarea final con la rúbrica y pide a cada persona que muestre en su registro la mala respuesta que se recuperó."
    ]
  }
};
