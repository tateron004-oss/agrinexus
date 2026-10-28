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
  chapters: [
    {
      name: "Capítulo 1: Diseñar un equipo de agentes",
      lessons: [
        {
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
          youCanNow: "decidir cuándo una tarea de verdad necesita más de un agente."
        },
        {
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
          youCanNow: "elegir entre una cadena, un orquestador con trabajadores, y un redactor con un revisor."
        },
        {
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
          youCanNow: "escribir prompts de papel y traspasos estructurados para un equipo de agentes."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Diseñar un equipo de agentes",
        questions: [
          { q: "¿Cuál es el mejor punto de partida para la mayoría de los proyectos nuevos con agentes?", options: ["Cinco agentes", "Un orquestador con diez trabajadores", "Un agente con buenas herramientas", "Ningún agente"], answer: 2, why: "Los agentes extra añaden costo y complejidad; empieza sencillo." },
          { q: "¿Cuál es una buena razón para añadir un agente revisor?", options: ["Tener una revisión independiente con reglas claras", "Que el proyecto se vea más grande", "Gastar más tokens", "Porque dos siempre es mejor"], answer: 0, why: "Unas instrucciones nuevas y una lista detectan errores que el redactor no ve." },
          { q: "Investigar, luego escribir, luego dar formato, en un orden fijo, es:", options: ["Un esquema", "Un orquestador", "Un disparador", "Una cadena"], answer: 3, why: "Una cadena pasa el trabajo en un orden fijo." },
          { q: "¿Qué traspaso es más fácil de revisar con código?", options: ["\"Esto es lo que pienso, ¡ojalá te sirva!\"", "{\"decision\": \"revise\", \"reasons\": [\"más de 80 palabras\"]}", "Un párrafo largo", "Una imagen"], answer: 1, why: "El JSON estructurado tiene claves fijas que el código puede leer." },
          { q: "¿Qué instrucción al revisor da la revisión más real?", options: ["\"¿Está bien?\"", "\"Sé crítico.\"", "\"¿Te gusta?\"", "\"¿Cada dato está en la ficha, y tiene menos de 80 palabras?\""], answer: 3, why: "Las preguntas concretas de sí o no evitan el acuerdo fácil." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir y probar el equipo",
      lessons: [
        {
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
          youCanNow: "guardar el trabajo de un sistema multiagente en un solo estado compartido que controla tu código."
        },
        {
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
          youCanNow: "detener el ping-pong entre agentes con un límite de rondas y pasarle a una persona el trabajo sin resolver."
        },
        {
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
          youCanNow: "crear un pequeño sistema multiagente y demostrar si le gana a un solo agente."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Construir y probar el equipo",
        questions: [
          { q: "¿Quién debe actualizar el estado compartido?", options: ["Cualquier agente, cuando quiera", "Solo el revisor", "Tu código, después de revisar cada traspaso", "Nadie"], answer: 2, why: "Un estado controlado por el código mantiene una sola verdad y bloquea los malos resultados." },
          { q: "El revisor no ha aprobado después de 3 rondas. ¿Qué debe pasar?", options: ["Detenerse con 'needs_human' y mostrar el borrador y las razones", "Aprobarlo automáticamente", "Seguir hasta que apruebe", "Borrar el borrador"], answer: 0, why: "Pásaselo a una persona en lugar de dar vueltas." },
          { q: "El revisor aprueba todos los borradores, incluso los malos. Esto es:", options: ["Ping-pong", "Aprobar sin mirar", "Una cadena", "Estado compartido"], answer: 1, why: "Las listas vagas llevan a aprobar todo." },
          { q: "¿Cómo debes calificar los resultados del equipo y del agente solo?", options: ["Calificarlos tú mismo con la misma lista", "Preguntarle al agente revisor", "Elegir el más largo", "Contar solo las palabras"], answer: 0, why: "Una puntuación independiente y constante hace justa la comparación." },
          { q: "El agente solo saca la misma puntuación que el equipo con un tercio de las llamadas al modelo. ¿Qué debes hacer?", options: ["Usar el equipo de todos modos", "Añadir más agentes", "Dejar de probar", "Usar el agente solo"], answer: 3, why: "La misma calidad por menos costo significa que gana el diseño más sencillo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Sistemas multiagente",
    questions: [
      { q: "Un sistema multiagente es:", options: ["Un agente con un prompt largo", "Varios agentes con sus propios papeles trabajando en un trabajo", "Un chatbot con muchos usuarios", "Una base de datos"], answer: 1, why: "Cada agente tiene su propio papel, instrucciones y herramientas." },
      { q: "Cada agente extra añade:", options: ["Calidad gratis", "Nada", "Costo, traspasos y trabajo de pruebas", "Menos tiempo"], answer: 2, why: "Más agentes significan más llamadas y más cosas que revisar." },
      { q: "La prueba de contratación pregunta:", options: ["¿El agente es amable?", "¿Cuánto cuesta el modelo?", "¿Contratarías a dos personas distintas para este trabajo?", "¿El prompt es largo?"], answer: 2, why: "Las habilidades claramente distintas sugieren agentes separados." },
      { q: "¿Qué tarea probablemente necesita un solo agente?", options: ["Clasificar mensajes en cuatro categorías con una lista", "Investigar, escribir y verificar un informe largo", "Hacer diez búsquedas a la vez", "Escribir anuncios y revisarlos de forma independiente"], answer: 0, why: "Una sola persona con una lista podría hacerlo." },
      { q: "En un patrón de orquestador, el orquestador:", options: ["Aprueba su propio trabajo", "Solo da formato al texto", "Guarda la clave de API", "Divide el objetivo y les da las partes a los trabajadores"], answer: 3, why: "Planea y reparte, y luego junta los resultados." },
      { q: "¿Por qué el patrón de redactor y revisor es bueno para principiantes?", options: ["No necesita límites", "Añade una revisión de calidad independiente", "No usa modelo", "Nunca da vueltas"], answer: 1, why: "Un segundo agente con una lista detecta errores." },
      { q: "Una cadena es fácil de depurar porque:", options: ["Corre en secreto", "No tiene agentes", "Nunca falla", "Siempre sabes qué agente actúa después"], answer: 3, why: "El orden fijo deja claro cada paso." },
      { q: "Un prompt de papel debe incluir:", options: ["Tu contraseña", "El prompt completo de cada uno de los otros agentes", "El único trabajo del agente, sus herramientas y su formato de salida", "Un chiste"], answer: 2, why: "Cada agente necesita solo su propio papel y sus reglas." },
      { q: "¿El agente revisor debe tener herramientas para escribir?", options: ["No, solo lo que necesita para revisar", "Sí, todas las herramientas", "Solo la herramienta de correo", "Debe tener la clave de API"], answer: 0, why: "El mínimo privilegio aplica a cada agente." },
      { q: "Los traspasos estructurados son útiles porque:", options: ["Son más largos", "El código puede revisar lo que se pasó", "Esconden información", "Los modelos no pueden leer texto"], answer: 1, why: "Las claves fijas hacen que los traspasos se puedan revisar." },
      { q: "Un revisor al que se le pregunta \"¿Está bien?\" lo más probable es que:", options: ["Esté de acuerdo con demasiada facilidad", "Revise cada dato", "Se niegue a responder", "Cuente las palabras con exactitud"], answer: 0, why: "Las preguntas vagas consiguen aprobaciones vagas." },
      { q: "El estado compartido es de:", options: ["El navegador del usuario", "El agente redactor", "El proveedor del modelo", "Tu código"], answer: 3, why: "El código guarda la única fuente de verdad." },
      { q: "La desviación significa:", options: ["Que el modelo se vuelve más rápido", "Que las copias de una información se van volviendo distintas", "Un límite de rondas", "Un disparador"], answer: 1, why: "El estado compartido evita las copias que se desvían." },
      { q: "¿Por qué guardar el estado en el registro después de cada paso?", options: ["Para saltarse rondas", "Para que el modelo sea más listo", "Para ver exactamente cómo cambió el trabajo", "Para compartir tu clave"], answer: 2, why: "El registro muestra cada cambio para depurar." },
      { q: "MAX_ROUNDS evita:", options: ["Por completo las llamadas al modelo", "Los buenos borradores", "El ir y venir sin fin entre agentes", "El registro"], answer: 2, why: "Un límite de rondas termina el ping-pong." },
      { q: "El ping-pong en un ciclo de redactor y revisor es cuando:", options: ["Arreglar un problema trae de vuelta uno viejo", "El revisor aprueba todo", "El borrador es perfecto", "Se guarda el estado"], answer: 0, why: "Los agentes se siguen pasando los mismos problemas." },
      { q: "El escalamiento significa:", options: ["Borrar el registro", "Añadir más agentes", "Subir el límite de rondas para siempre", "Pasarle a una persona el trabajo sin resolver"], answer: 3, why: "Las personas resuelven lo que el sistema no puede." },
      { q: "Con más agentes, el punto de control humano se vuelve:", options: ["Innecesario", "Más importante", "Automático", "Ilegal"], answer: 1, why: "Más piezas en movimiento significan más formas de que algo salga mal." },
      { q: "En este curso, una línea de base es:", options: ["El resultado más largo", "El primer borrador", "La clave de API", "Un solo agente con el que comparas al equipo"], answer: 3, why: "Comparas al equipo con la opción sencilla." },
      { q: "Se cuentan las llamadas al modelo porque representan:", options: ["El número de palabras", "La calidad", "El costo y el tiempo", "El número de usuarios"], answer: 2, why: "Más llamadas cuestan más y tardan más." }
    ]
  }
};
