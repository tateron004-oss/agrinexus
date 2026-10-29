"use strict";

// Koach Learn course (Artificial Intelligence), Spanish translation of artificial-intelligence/agentic-multi-agent.js. See scripts/koachlearn-courses/README.md, "Translations".
// Python code, dictionary keys and JSON keys/values (approve, revise, needs_human) stay in English.

module.exports = {
  id: "agentic-multi-agent-es",
  lang: "es",
  translationOf: "agentic-multi-agent",
  category: "Artificial Intelligence",
  name: "Sistemas multiagente",
  skills: "Decidir cuándo basta con un agente, Elegir un patrón: cadena, orquestador, revisor, Escribir papeles y traspasos, Compartir el estado con seguridad, Detener los ciclos de revisión, Comparar con un solo agente",
  outcome: "diseñar y crear en Python un pequeño sistema multiagente, un agente redactor y un agente revisor con papeles claros, un traspaso por escrito, un estado compartido y un límite de rondas, y mostrar con una prueba sencilla si le gana a un solo agente.",
  about: [
    "Este es el curso 5 de Diseñar, crear y desplegar agentes de IA autónomos. Un sistema multiagente reparte un trabajo entre varios agentes, cada uno con su propio papel, instrucciones y herramientas, como un equipo se reparte el trabajo. Bien hecho, puede subir la calidad. Mal hecho, multiplica el costo, la confusión y los errores.",
    "El Capítulo 1 trata del diseño: cuándo usar más de un agente, los patrones comunes (cadena, orquestador y trabajadores, redactor y revisor) y cómo escribir los papeles y los traspasos. El Capítulo 2 trata de la construcción: el estado compartido, cómo detener el ir y venir sin fin, cómo mantener a las personas al mando y cómo probar si el equipo de verdad le gana a un agente.",
    "Vas a reutilizar tu ciclo de Python y la función auxiliar ask_model del curso 3. El código aparece como líneas cortas en las lecciones. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Crea en Python un sistema de dos agentes: un agente redactor escribe una descripción de producto de un párrafo a partir de una ficha corta de datos, y un agente revisor la comprueba con una lista escrita (usa solo datos de la ficha, menos de 80 palabras, nada de afirmaciones como \"el mejor\" o \"garantizado\") y devuelve JSON: aprobar o revisar, con razones. Pasa el trabajo por un diccionario de estado compartido, detente como máximo a las 3 rondas e imprime el registro completo. Luego pasa las mismas 3 fichas por un solo agente y escribe cuál lo hizo mejor y por qué.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos del programa Diseñar, crear y desplegar agentes de IA autónomos que terminaron los cursos 1 a 4: dueños de pequeños negocios, personas que cambian de carrera, estudiantes y personal que quieren saber cuándo y cómo usar un equipo de agentes.",
    startingPoint: "Pueden crear en Python un solo agente con herramientas, revisión de argumentos, un límite de pasos, un registro de ejecución y aprobación en las acciones de escritura. No han repartido un trabajo entre varios agentes.",
    gap: "Los sistemas multiagente son populares, pero mal hechos multiplican el costo, la confusión y los errores. Necesitan decidir cuándo vale la pena un equipo, diseñar papeles y traspasos claros, detener los ciclos sin fin, mantener a una persona a cargo y demostrar con una prueba si el equipo supera a un solo agente.",
    constraints: [
      "Nivel de lectura: palabras sencillas; el código aparece en líneas cortas para copiar",
      "Dispositivos: una computadora con navegador web; los niveles gratuitos de las API limitan cuántas llamadas al modelo puedes hacer",
      "La práctica usa solo fichas de datos inventadas",
      "Cada ciclo tiene un límite de rondas y pasa a una persona el trabajo sin resolver",
      "Tiempo: lecciones cortas con una tarea práctica cada una"
    ],
    prerequisites: "Los cursos 3 y 4 de Diseñar, crear y desplegar agentes de IA autónomos (\"Crear agentes de IA\" y \"Uso de herramientas y automatización con agentes de IA\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un trabajo que podrías automatizar", action: "decidir si necesita un agente o un equipo, usando la prueba de contratación", standard: "con una razón de una frase para cada trabajo" },
    { id: "O2", condition: "Con un trabajo que necesita un equipo", action: "elegir un patrón (cadena, orquestador y trabajadores, o redactor y revisor) y dibujar cómo pasa el trabajo entre los agentes", standard: "anotando lo que pasa por cada flecha" },
    { id: "O3", condition: "Para cada agente del equipo", action: "escribir un prompt de papel y un formato de traspaso en JSON", standard: "con un solo trabajo por agente y una lista de revisión del revisor que se pueda comprobar" },
    { id: "O4", condition: "En tu código de Python", action: "guardar el trabajo del equipo en un solo estado compartido que solo tu código actualiza", standard: "registrando el estado después de cada paso" },
    { id: "O5", condition: "Con un ciclo de redactor y revisor", action: "añadir un límite de rondas y pasar a una persona el trabajo sin resolver", standard: "deteniéndose con needs_human después de 3 rondas como máximo" },
    { id: "O6", condition: "Con las mismas entradas de prueba", action: "comparar el equipo con un solo agente de referencia en calidad y llamadas al modelo", standard: "calificando los dos con la misma lista de revisión y eligiendo el más simple cuando empatan" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Diseñar un equipo de agentes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cuándo basta con un agente y cuándo no",
          minutes: 5,
          goal: "Decidir si una tarea necesita más de un agente.",
          text: [
            "Empieza con un agente. Cada agente extra añade llamadas al modelo (costo y tiempo), traspasos (lugares donde se pierde información) y más cosas que probar. Muchas tareas que parecen necesitar un equipo funcionan bien con un agente con un buen prompt y buenas herramientas.",
            "Considera más de un agente cuando: el trabajo tiene habilidades claramente distintas (investigar, luego escribir, luego revisar); un solo prompt se está volviendo demasiado largo y confuso; quieres una revisión independiente, porque un revisor con instrucciones nuevas detecta errores que el redactor no ve; o hay partes que pueden correr al mismo tiempo.",
            "Una prueba útil: si contratarías a dos personas distintas para hacerlo, dos agentes pueden ayudar. Si una sola persona podría hacerlo con una lista de revisión, probablemente es mejor un agente con una lista de revisión."
          ],
          words: [["Sistema multiagente", "varios agentes de IA, cada uno con su propio papel, que trabajan juntos en un trabajo."], ["Traspaso", "pasar trabajo e información de un agente a otro."], ["Carga extra", "el costo y el esfuerzo de más que añade un diseño."]],
          slides: [
            { title: "Empieza con un agente", bullets: ["Cada agente extra añade costo y tiempo", "Cada traspaso puede perder información", "Más partes que probar"] },
            { title: "Considera un equipo cuando", bullets: ["El trabajo necesita habilidades claramente distintas", "Un prompt es demasiado largo y confuso", "Quieres una revisión independiente", "Hay partes que pueden correr a la vez"] },
            { title: "La prueba de contratación", bullets: ["¿Dos personas distintas? Quizá dos agentes", "¿Una persona con una lista? Un agente"] }
          ],
          tryIt: "Haz una lista de tres trabajos que podrías automatizar. Para cada uno, escribe \"un agente\" o \"equipo\" y una frase sobre por qué, usando la prueba de contratación.",
          youCanNow: "decidir cuándo una tarea de verdad necesita más de un agente.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es la prueba de contratación?", options: ["Preguntar si una persona pasaría una entrevista de trabajo", "Probar si una empresa puede contratar un modelo", "Preguntar si contratarías a dos personas distintas para este trabajo", "Contar cuántas herramientas necesita un trabajo"], answer: 2, why: "Si no contratarías a dos personas, normalmente basta con un agente." },
            { objective: "O1", q: "Un trabajo consiste en clasificar mensajes en cuatro categorías con una lista de revisión. ¿Qué crearías?", options: ["Un solo agente con instrucciones claras", "Un equipo de cuatro agentes, uno por categoría", "Un orquestador con trabajadores", "Un redactor y un revisor"], answer: 0, why: "Un trabajo simple y bien definido no necesita el costo extra ni los traspasos de un equipo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Patrones comunes: cadena, orquestador, revisor",
          minutes: 6,
          goal: "Elegir un patrón multiagente que se ajuste a una tarea.",
          text: [
            "Cadena: los agentes trabajan en un orden fijo, y cada uno le pasa su resultado al siguiente, como una línea de montaje: investigar, luego escribir, luego dar formato. Es fácil de construir y de depurar, porque siempre sabes quién actúa después.",
            "Orquestador y trabajadores: un agente (el orquestador) divide el objetivo en partes, le da cada parte a un agente trabajador y luego junta los resultados. Es flexible, pero el orquestador puede dividir mal el trabajo, y más libertad significa más cosas que revisar.",
            "Redactor y revisor: un agente produce y un segundo agente juzga con una lista de revisión y aprueba o lo regresa con razones. Es el patrón más útil para principiantes porque añade una revisión de calidad independiente. Necesita un límite de rondas para que los dos nunca discutan para siempre."
          ],
          words: [["Cadena", "agentes que trabajan en un orden fijo, y cada uno le pasa el trabajo al siguiente."], ["Orquestador", "un agente que divide un objetivo en tareas y se las da a otros agentes."], ["Agente revisor", "un agente que revisa el trabajo de otro agente con reglas claras."]],
          slides: [
            { title: "Cadena", bullets: ["Orden fijo: investigar, escribir, dar formato", "Fácil de construir y depurar"] },
            { title: "Orquestador y trabajadores", bullets: ["Un agente divide el objetivo", "Los trabajadores hacen las partes", "Flexible, pero más difícil de revisar"] },
            { title: "Redactor y revisor", bullets: ["Uno produce, otro juzga con una lista", "Aprueba, o lo regresa con razones", "Necesita un límite de rondas"] }
          ],
          tryIt: "Para el trabajo de \"equipo\" de la Lección 1, dibuja los agentes como cajas con flechas (en papel está bien). Escribe qué patrón es y qué pasa por cada flecha.",
          youCanNow: "elegir entre una cadena, un orquestador con trabajadores, y un redactor con un revisor.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace el orquestador en el patrón de orquestador y trabajadores?", options: ["Revisa cada borrador con una lista de revisión", "Divide la meta y entrega partes a los trabajadores", "Guarda archivos en el disco", "Funciona solo al final"], answer: 1, why: "El orquestador divide el trabajo y pasa partes a los agentes trabajadores." },
            { objective: "O2", q: "Tu trabajo siempre va así: investigar, luego escribir, luego dar formato, en ese orden. ¿Qué patrón encaja?", options: ["Redactor y revisor", "Orquestador y trabajadores", "Ningún patrón; usar tres chatbots", "Cadena"], answer: 3, why: "Un orden fijo de pasos es una cadena, que además es fácil de depurar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir papeles y traspasos",
          minutes: 5,
          goal: "Escribir un prompt de papel para cada agente y un formato de traspaso entre ellos.",
          text: [
            "Cada agente recibe su propio prompt del sistema corto: quién es, su único trabajo, sus herramientas (solo las que necesita) y su formato de salida. El redactor no necesita la lista completa del revisor; el revisor no necesita ninguna herramienta para escribir.",
            "El traspaso es el mensaje que pasa entre agentes. Hazlo estructurado, no de plática: {\"draft\": \"...\", \"facts_used\": [...]} del redactor al revisor, y {\"decision\": \"approve\" o \"revise\", \"reasons\": [...]} de regreso. Los traspasos estructurados dejan claro qué se pasó y son fáciles de revisar con código.",
            "Dale al revisor una lista de revisión, no una impresión. \"¿Está bien?\" consigue que esté de acuerdo. \"¿Cada dato aparece en la ficha? ¿Tiene menos de 80 palabras? ¿Evita las palabras el mejor y garantizado?\" consigue una revisión de verdad."
          ],
          steps: ["Escribe un prompt de papel para cada agente: papel, un trabajo, herramientas, formato de salida.", "Dale a cada agente solo las herramientas que necesita.", "Define el traspaso como JSON con claves fijas.", "Escribe la lista del revisor como preguntas de sí o no."],
          words: [["Prompt de papel", "el prompt del sistema que le da a un agente su trabajo y sus reglas."], ["Lista de revisión", "una lista de comprobaciones concretas de sí o no para juzgar un trabajo."]],
          slides: [
            { title: "Un prompt de papel por agente", bullets: ["Quién es y su único trabajo", "Solo las herramientas que necesita", "Su formato de salida"] },
            { title: "Traspasos estructurados", bullets: ["Redactor -> revisor: borrador y datos usados", "Revisor -> redactor: decisión y razones", "El código puede revisar cada traspaso"] },
            { title: "Dale al revisor una lista", bullets: ["\"¿Está bien?\" consigue un sí fácil", "Las preguntas de sí o no dan una revisión real"] }
          ],
          tryIt: "Escribe el prompt de papel del redactor, el prompt de papel del revisor con una lista de 3 puntos, y los dos formatos JSON de traspaso para el sistema de la tarea final.",
          youCanNow: "escribir prompts de papel y traspasos estructurados para un equipo de agentes.",
          quickCheck: [
            { objective: "O3", q: "¿Qué va en un prompt de papel?", options: ["El único trabajo del agente, sus herramientas y su formato de salida", "Las instrucciones de todos los demás agentes", "Tu clave de API", "Una lista de todas las ejecuciones pasadas"], answer: 0, why: "Un prompt de papel mantiene a cada agente enfocado en su propio trabajo y formato." },
            { objective: "O3", q: "A tu revisor se le dice \"Revisa si el borrador está bien.\" ¿Qué cambiarías?", options: ["Nada, es corto", "Darle herramientas de escritura para que corrija los borradores", "Reemplazarlo con una lista de preguntas concretas que pueda responder con sí o no", "Dejar que decida sus propias reglas"], answer: 2, why: "Las preguntas de revisión vagas llevan a aprobar con demasiada facilidad; una lista da una revisión real." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Diseñar un equipo de agentes",
        questions: [
          { objective: "O1", q: "¿Cuál es el mejor punto de partida para la mayoría de los proyectos nuevos con agentes?", options: ["Cinco agentes", "Un orquestador con diez trabajadores", "Un agente con buenas herramientas", "Ningún agente"], answer: 2, why: "Los agentes extra añaden costo y complejidad; empieza sencillo." },
          { objective: "O1", q: "¿Cuál es una buena razón para añadir un agente revisor?", options: ["Tener una revisión independiente con reglas claras", "Que el proyecto se vea más grande", "Gastar más tokens", "Porque dos siempre es mejor"], answer: 0, why: "Unas instrucciones nuevas y una lista detectan errores que el redactor no ve." },
          { objective: "O2", q: "Investigar, luego escribir, luego dar formato, en un orden fijo, es:", options: ["Un esquema", "Un orquestador", "Un disparador", "Una cadena"], answer: 3, why: "Una cadena pasa el trabajo en un orden fijo." },
          { objective: "O3", q: "¿Qué traspaso es más fácil de revisar con código?", options: ["\"Esto es lo que pienso, ¡ojalá te sirva!\"", "{\"decision\": \"revise\", \"reasons\": [\"más de 80 palabras\"]}", "Un párrafo largo", "Una imagen"], answer: 1, why: "El JSON estructurado tiene claves fijas que el código puede leer." },
          { objective: "O3", q: "¿Qué instrucción al revisor da la revisión más real?", options: ["\"¿Está bien?\"", "\"Sé crítico.\"", "\"¿Te gusta?\"", "\"¿Cada dato está en la ficha, y tiene menos de 80 palabras?\""], answer: 3, why: "Las preguntas concretas de sí o no evitan el acuerdo fácil." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir y probar el equipo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Estado compartido: un solo lugar para el trabajo",
          minutes: 5,
          goal: "Guardar el trabajo de un equipo en un estado compartido del que lee cada agente.",
          text: [
            "El estado compartido es un solo lugar donde vive el trabajo del equipo, y es de tu código, no de ningún agente. En Python sirve un diccionario: state = {'facts': FACTS, 'draft': None, 'reviews': [], 'round': 0, 'status': 'drafting'}.",
            "Cada agente recibe solo las partes que necesita y devuelve un traspaso; tu código revisa el traspaso y actualiza el estado. El redactor lee los datos y la última revisión; el revisor lee los datos y el borrador. Ningún agente edita el estado directamente.",
            "Así la verdad queda en un solo lugar, el registro es fácil (guarda el estado después de cada paso) y los agentes no se pasan copias que se van volviendo distintas. Si el resultado de un agente es malo, tu código lo puede rechazar antes de que llegue al siguiente agente."
          ],
          steps: ["Crea un diccionario de estado con cada campo que necesita el equipo.", "Dale a cada agente solo los campos que necesita.", "Revisa cada traspaso en el código antes de actualizar el estado.", "Guarda una copia del estado en el registro después de cada paso."],
          words: [["Estado compartido", "el registro único del trabajo de un equipo, que guarda el código y del que lee cada agente."], ["Desviación", "cuando las copias de una información se van volviendo distintas entre sí."]],
          slides: [
            { title: "Un solo lugar para el trabajo", bullets: ["state = {facts, draft, reviews, round, status}", "Es de tu código, no de un agente"] },
            { title: "Los agentes leen, el código escribe", bullets: ["Cada agente recibe solo los campos que necesita", "El código revisa el traspaso y actualiza el estado"] },
            { title: "Por qué ayuda", bullets: ["Una sola verdad, sin copias que se desvían", "Registro fácil: guarda el estado en cada paso", "El resultado malo se detiene antes del siguiente agente"] }
          ],
          tryIt: "Crea el diccionario de estado para la tarea final. Escribe dos funciones, run_writer(state) y run_reviewer(state), que llamen cada una a ask_model con su prompt de papel y devuelvan el JSON ya leído, sin cambiar ellas mismas el estado.",
          youCanNow: "guardar el trabajo de un sistema multiagente en un solo estado compartido que controla tu código.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es el estado compartido en un sistema multiagente?", options: ["Las notas privadas de cada agente", "Un solo lugar, controlado por tu código, que guarda el trabajo del equipo", "La memoria del modelo de un día a otro", "Una contraseña compartida"], answer: 1, why: "Un solo estado compartido que actualiza tu código hace que todos los agentes trabajen con los mismos datos." },
            { objective: "O4", q: "El redactor y el revisor guardan cada uno su propia copia del borrador, y las copias empiezan a ser distintas. ¿Qué harías?", options: ["Dejar que cada agente actualice el estado directamente", "Añadir un tercer agente para unirlas", "Ignorarlo si la respuesta final se ve bien", "Mantener un solo estado compartido que solo tu código actualiza después de revisar cada traspaso"], answer: 3, why: "Las copias separadas se van alejando; un solo estado compartido y revisado lo evita." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Detener los ciclos y mantener a las personas al mando",
          minutes: 5,
          goal: "Añadir un límite de rondas y un paso a una persona en un ciclo de redactor y revisor.",
          text: [
            "Dos agentes pueden dar vueltas para siempre: el revisor siempre encuentra algo, el redactor siempre cambia algo. Fija MAX_ROUNDS = 3. Si el revisor no ha aprobado para entonces, detente con el estado 'needs_human' y muestra el último borrador y las razones.",
            "Cuidado con otras dos fallas de equipo. Aprobar sin mirar: el revisor aprueba todo, a menudo porque su lista es vaga. Ping-pong: el redactor arregla un problema y trae de vuelta uno viejo. Busca las dos en el registro.",
            "Mantén a las personas al mando del resultado. El equipo produce un borrador y una revisión; una persona aprueba todo lo que se vaya a publicar, enviar o usar para tomar una decisión. Más agentes no quitan la necesidad de ese punto de control; lo vuelven más importante."
          ],
          steps: ["Fija MAX_ROUNDS.", "Ciclo: el redactor escribe, el revisor decide.", "Si aprueba: estado 'approved', detente.", "Si pide revisar: pásale las razones al redactor.", "En el límite: estado 'needs_human', muestra el borrador y las razones."],
          words: [["Ronda", "un ciclo de borrador y revisión."], ["Aprobar sin mirar", "aprobar todo sin revisar de verdad."], ["Escalamiento", "pasarle un problema a una persona cuando el sistema no lo puede resolver."]],
          slides: [
            { title: "Dos agentes pueden dar vueltas sin fin", bullets: ["MAX_ROUNDS = 3", "Sin aprobación para entonces: 'needs_human'"] },
            { title: "Dos fallas de equipo", bullets: ["Aprobar sin mirar: aprueba todo", "Ping-pong: vuelven problemas viejos", "Busca las dos en el registro"] },
            { title: "Las personas siguen al mando", bullets: ["El equipo redacta y revisa", "Una persona aprueba lo que se publica o se envía"] }
          ],
          tryIt: "Escribe el ciclo de redactor y revisor con MAX_ROUNDS = 3. Pruébalo con una ficha en la que sea probable que el redactor exagere. Luego prueba el límite haciendo imposible la lista del revisor (\"menos de 5 palabras\") y confirma que se detiene con needs_human.",
          youCanNow: "detener el ping-pong entre agentes con un límite de rondas y pasarle a una persona el trabajo sin resolver.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es el ping-pong en un ciclo de redactor y revisor?", options: ["Corregir un problema hace volver uno viejo, ronda tras ronda", "El revisor aprueba todos los borradores", "Dos agentes funcionan al mismo tiempo", "Un ciclo rápido que termina en una ronda"], answer: 0, why: "El ping-pong es un ir y venir sin fin, y por eso el ciclo necesita un límite de rondas." },
            { objective: "O5", q: "El revisor no ha aprobado después de 3 rondas. ¿Qué debe hacer el sistema?", options: ["Aprobar el último borrador de todos modos", "Empezar otra vez desde la ronda 1", "Detenerse con needs_human y mostrar el borrador y las razones", "Subir el límite a 10 rondas"], answer: 2, why: "El trabajo sin resolver pasa a una persona con todo lo que necesita para decidir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "¿El equipo le gana a un solo agente? Probarlo",
          minutes: 6,
          goal: "Comparar un sistema multiagente con un solo agente en las mismas pruebas.",
          text: [
            "Un equipo solo vale la pena si lo hace mejor. Pruébalo como probaste los prompts en el curso 2: las mismas entradas, una puntuación clara y una comparación. Haz tres fichas de datos y pásalas por el equipo y por un solo agente que tenga la lista de revisión en su propio prompt.",
            "Califica tú mismo cada resultado con la lista del revisor (no con el agente revisor), y cuenta las llamadas al modelo de cada enfoque. Las llamadas al modelo representan el costo y el tiempo.",
            "Escribe el resultado con honestidad. Si el agente solo sacó la misma puntuación con un tercio de las llamadas, usa el agente solo. Si el equipo detectó errores reales que el agente solo no vio, las llamadas extra te compraron calidad. Cualquiera de las dos respuestas es un buen resultado de ingeniería."
          ],
          steps: ["Haz tres fichas de datos de prueba.", "Pasa cada una por el equipo y por un solo agente.", "Califica tú mismo cada resultado con la lista de revisión.", "Cuenta las llamadas al modelo de cada enfoque.", "Escribe qué enfoque gana y por qué."],
          words: [["Línea de base", "la versión sencilla con la que comparas, aquí un solo agente."], ["Llamada al modelo", "una solicitud al modelo; más llamadas significan más costo y tiempo."]],
          slides: [
            { title: "Un equipo debe ganarse su lugar", bullets: ["Mismas entradas, puntuación clara, comparación", "Línea de base: un agente con la lista"] },
            { title: "Mide dos cosas", bullets: ["Calidad: califica tú mismo con la lista", "Costo: cuenta las llamadas al modelo"] },
            { title: "Informa con honestidad", bullets: ["¿Misma puntuación, menos llamadas? Usa un agente", "¿Detectó errores reales? El equipo se lo gana"] }
          ],
          tryIt: "Tarea final: termina el sistema de redactor y revisor con estado compartido, traspasos estructurados y MAX_ROUNDS = 3, ejecútalo con tres fichas, ejecuta una línea de base de un solo agente con las mismas fichas y escribe una comparación corta de la calidad y las llamadas al modelo.",
          youCanNow: "crear un pequeño sistema multiagente y demostrar si le gana a un solo agente.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una referencia (baseline) en este curso?", options: ["El primer borrador que hace el redactor", "Un solo agente con el que comparas el equipo", "La calificación más baja permitida", "El límite de rondas"], answer: 1, why: "Comparar con un solo agente muestra si el equipo vale su costo extra." },
            { objective: "O6", q: "El equipo califica un poco más alto que un solo agente, pero usa tres veces más llamadas al modelo. ¿Qué harías?", options: ["Elegir siempre el equipo, porque los equipos son mejores", "Dejar de probar", "Añadir más agentes para subir la calificación", "Pensar si la pequeña mejora vale el costo y el tiempo extra, y anotar por qué"], answer: 3, why: "Las llamadas al modelo representan costo y tiempo, así que la decisión compara la calidad con ellos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Construir y probar el equipo",
        questions: [
          { objective: "O4", q: "¿Quién debe actualizar el estado compartido?", options: ["Cualquier agente, cuando quiera", "Solo el revisor", "Tu código, después de revisar cada traspaso", "Nadie"], answer: 2, why: "Un estado controlado por el código mantiene una sola verdad y bloquea los malos resultados." },
          { objective: "O5", q: "El revisor no ha aprobado después de 3 rondas. ¿Qué debe pasar?", options: ["Detenerse con 'needs_human' y mostrar el borrador y las razones", "Aprobarlo automáticamente", "Seguir hasta que apruebe", "Borrar el borrador"], answer: 0, why: "Pásaselo a una persona en lugar de dar vueltas." },
          { objective: "O5", q: "El revisor aprueba todos los borradores, incluso los malos. Esto es:", options: ["Ping-pong", "Aprobar sin mirar", "Una cadena", "Estado compartido"], answer: 1, why: "Las listas vagas llevan a aprobar todo." },
          { objective: "O6", q: "¿Cómo debes calificar los resultados del equipo y del agente solo?", options: ["Calificarlos tú mismo con la misma lista", "Preguntarle al agente revisor", "Elegir el más largo", "Contar solo las palabras"], answer: 0, why: "Una puntuación independiente y constante hace justa la comparación." },
          { objective: "O6", q: "El agente solo saca la misma puntuación que el equipo con un tercio de las llamadas al modelo. ¿Qué debes hacer?", options: ["Usar el equipo de todos modos", "Añadir más agentes", "Dejar de probar", "Usar el agente solo"], answer: 3, why: "La misma calidad por menos costo significa que gana el diseño más sencillo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Sistemas multiagente",
    questions: [
      { objective: "O1", q: "Un sistema multiagente es:", options: ["Un agente con un prompt largo", "Varios agentes con sus propios papeles trabajando en un trabajo", "Un chatbot con muchos usuarios", "Una base de datos"], answer: 1, why: "Cada agente tiene su propio papel, instrucciones y herramientas." },
      { objective: "O1", q: "Cada agente extra añade:", options: ["Calidad gratis", "Nada", "Costo, traspasos y trabajo de pruebas", "Menos tiempo"], answer: 2, why: "Más agentes significan más llamadas y más cosas que revisar." },
      { objective: "O1", q: "La prueba de contratación pregunta:", options: ["¿El agente es amable?", "¿Cuánto cuesta el modelo?", "¿Contratarías a dos personas distintas para este trabajo?", "¿El prompt es largo?"], answer: 2, why: "Las habilidades claramente distintas sugieren agentes separados." },
      { objective: "O1", q: "¿Qué tarea probablemente necesita un solo agente?", options: ["Clasificar mensajes en cuatro categorías con una lista", "Investigar, escribir y verificar un informe largo", "Hacer diez búsquedas a la vez", "Escribir anuncios y revisarlos de forma independiente"], answer: 0, why: "Una sola persona con una lista podría hacerlo." },
      { objective: "O2", q: "En un patrón de orquestador, el orquestador:", options: ["Aprueba su propio trabajo", "Solo da formato al texto", "Guarda la clave de API", "Divide el objetivo y les da las partes a los trabajadores"], answer: 3, why: "Planea y reparte, y luego junta los resultados." },
      { objective: "O2", q: "¿Por qué el patrón de redactor y revisor es bueno para principiantes?", options: ["No necesita límites", "Añade una revisión de calidad independiente", "No usa modelo", "Nunca da vueltas"], answer: 1, why: "Un segundo agente con una lista detecta errores." },
      { objective: "O2", q: "Una cadena es fácil de depurar porque:", options: ["Corre en secreto", "No tiene agentes", "Nunca falla", "Siempre sabes qué agente actúa después"], answer: 3, why: "El orden fijo deja claro cada paso." },
      { objective: "O3", q: "Un prompt de papel debe incluir:", options: ["Tu contraseña", "El prompt completo de cada uno de los otros agentes", "El único trabajo del agente, sus herramientas y su formato de salida", "Un chiste"], answer: 2, why: "Cada agente necesita solo su propio papel y sus reglas." },
      { objective: "O3", q: "¿El agente revisor debe tener herramientas para escribir?", options: ["No, solo lo que necesita para revisar", "Sí, todas las herramientas", "Solo la herramienta de correo", "Debe tener la clave de API"], answer: 0, why: "El mínimo privilegio aplica a cada agente." },
      { objective: "O3", q: "Los traspasos estructurados son útiles porque:", options: ["Son más largos", "El código puede revisar lo que se pasó", "Esconden información", "Los modelos no pueden leer texto"], answer: 1, why: "Las claves fijas hacen que los traspasos se puedan revisar." },
      { objective: "O3", q: "Un revisor al que se le pregunta \"¿Está bien?\" lo más probable es que:", options: ["Esté de acuerdo con demasiada facilidad", "Revise cada dato", "Se niegue a responder", "Cuente las palabras con exactitud"], answer: 0, why: "Las preguntas vagas consiguen aprobaciones vagas." },
      { objective: "O4", q: "El estado compartido es de:", options: ["El navegador del usuario", "El agente redactor", "El proveedor del modelo", "Tu código"], answer: 3, why: "El código guarda la única fuente de verdad." },
      { objective: "O4", q: "La desviación significa:", options: ["Que el modelo se vuelve más rápido", "Que las copias de una información se van volviendo distintas", "Un límite de rondas", "Un disparador"], answer: 1, why: "El estado compartido evita las copias que se desvían." },
      { objective: "O4", q: "¿Por qué guardar el estado en el registro después de cada paso?", options: ["Para saltarse rondas", "Para que el modelo sea más listo", "Para ver exactamente cómo cambió el trabajo", "Para compartir tu clave"], answer: 2, why: "El registro muestra cada cambio para depurar." },
      { objective: "O5", q: "MAX_ROUNDS evita:", options: ["Por completo las llamadas al modelo", "Los buenos borradores", "El ir y venir sin fin entre agentes", "El registro"], answer: 2, why: "Un límite de rondas termina el ping-pong." },
      { objective: "O5", q: "El ping-pong en un ciclo de redactor y revisor es cuando:", options: ["Arreglar un problema trae de vuelta uno viejo", "El revisor aprueba todo", "El borrador es perfecto", "Se guarda el estado"], answer: 0, why: "Los agentes se siguen pasando los mismos problemas." },
      { objective: "O5", q: "El escalamiento significa:", options: ["Borrar el registro", "Añadir más agentes", "Subir el límite de rondas para siempre", "Pasarle a una persona el trabajo sin resolver"], answer: 3, why: "Las personas resuelven lo que el sistema no puede." },
      { objective: "O5", q: "Con más agentes, el punto de control humano se vuelve:", options: ["Innecesario", "Más importante", "Automático", "Ilegal"], answer: 1, why: "Más piezas en movimiento significan más formas de que algo salga mal." },
      { objective: "O6", q: "En este curso, una línea de base es:", options: ["El resultado más largo", "El primer borrador", "La clave de API", "Un solo agente con el que comparas al equipo"], answer: 3, why: "Comparas al equipo con la opción sencilla." },
      { objective: "O6", q: "Se cuentan las llamadas al modelo porque representan:", options: ["El número de palabras", "La calidad", "El costo y el tiempo", "El número de usuarios"], answer: 2, why: "Más llamadas cuestan más y tardan más." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Papeles claros y lista de revisión",
        objective: "O3",
        notYet: "Los papeles se mezclan, o el revisor solo pregunta si el borrador está bien.",
        meets: "El redactor y el revisor tienen un trabajo cada uno; el revisor comprueba los datos de la ficha, menos de 80 palabras y ninguna afirmación como \"el mejor\".",
        exceeds: "El revisor no tiene herramientas de escritura y da una razón para cada pedido de corrección."
      },
      {
        name: "Traspasos estructurados",
        objective: "O3",
        notYet: "Los agentes se pasan texto libre que el código no puede revisar.",
        meets: "El revisor devuelve JSON con approve o revise y las razones.",
        exceeds: "El código revisa cada traspaso antes de usarlo."
      },
      {
        name: "Estado compartido",
        objective: "O4",
        notYet: "Los agentes guardan copias separadas del trabajo.",
        meets: "El trabajo pasa por un solo diccionario de estado que actualiza el código.",
        exceeds: "El estado se registra después de cada paso."
      },
      {
        name: "Límite de rondas y escalamiento",
        objective: "O5",
        notYet: "No hay límite de rondas, o el ciclo puede seguir para siempre.",
        meets: "Se detiene después de 3 rondas como máximo e imprime el registro completo.",
        exceeds: "El trabajo sin resolver se detiene con needs_human y muestra el borrador y las razones."
      },
      {
        name: "Comparación justa",
        objective: "O6",
        notYet: "No hay un solo agente de referencia, o se usaron entradas distintas.",
        meets: "Las mismas 3 fichas pasaron por los dos, con una nota escrita sobre cuál lo hizo mejor y por qué.",
        exceeds: "Los dos se calificaron con la misma lista de revisión y se contaron las llamadas al modelo."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que pasan al curso 6 del programa de agentes en un plazo de 30 días",
      "Personas que dicen haber elegido entre un agente o un equipo según una prueba y no a ojo (encuesta de seguimiento)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con navegador web e internet; Colab o Python en tu propia computadora",
      "Tu ciclo de agente y la función auxiliar ask_model del curso 3, y una clave de API de un modelo",
      "Tres fichas de producto cortas e inventadas",
      "Papel para dibujar los patrones de agentes",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego pide al grupo que aplique la prueba de contratación a trabajos reales antes de que alguien escriba código.",
      "Da a todos las mismas tres fichas para que se puedan comparar en el grupo los resultados del equipo y del agente solo.",
      "Vigila el número de llamadas al modelo en los niveles gratuitos; mantén el límite de rondas en 3.",
      "Pide a las personas que muestren una ejecución que se detuvo con needs_human, y conversen sobre lo que decidiría la persona.",
      "Califica la tarea final con la rúbrica y acepta \"un solo agente lo hizo igual de bien\" como buen resultado cuando la prueba lo muestra."
    ]
  }
};
