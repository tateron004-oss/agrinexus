"use strict";

// Koach Learn course (Spanish translation of leadership/edu-ai-differentiation.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-differentiation-es",
  lang: "es",
  translationOf: "edu-ai-differentiation",
  category: "Leadership Development",
  name: "Diferenciación con IA",
  skills: "Escribir una evaluación diagnóstica rápida, Diseñar tareas por niveles, Crear tableros de opciones, Agrupar de forma flexible a partir de pruebas, Llevar una clase diferenciada, Revisar la equidad",
  outcome: "diferenciar una clase con IA de principio a fin: una evaluación diagnóstica rápida, tres tareas por niveles hacia el mismo objetivo, un tablero de opciones y un plan de agrupamiento flexible basado en pruebas, todo revisado en exactitud y equidad.",
  about: [
    "Este curso es para docentes de aula, coordinadores pedagógicos y líderes escolares que quieren que cada estudiante alcance las metas del grado por caminos distintos. Diferenciar siempre ha sido difícil porque lleva tiempo hacer varias versiones de todo. La IA puede hacer las versiones; el docente sigue decidiendo quién necesita qué y por qué.",
    "El capítulo 1 crea los materiales: una evaluación diagnóstica, tareas por niveles y tableros de opciones. El capítulo 2 trata de cómo usarlos: agrupar a los estudiantes de forma flexible a partir de pruebas, manejar un aula diferenciada y asegurar que la diferenciación abra puertas en lugar de encerrar a los estudiantes en grupos de bajo nivel.",
    "Nunca pongas nombres, puntajes ni otros datos que identifiquen a estudiantes en una herramienta que tu distrito no haya aprobado; usa datos inventados para practicar. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Diferencia una clase real: escribe una evaluación diagnóstica de cinco preguntas con clave, tres tareas por niveles que lleguen al mismo objetivo (más apoyo, en nivel, extensión), un tablero de opciones de nueve casillas para practicar y un plan de agrupamiento hecho con los resultados diagnósticos de un grupo inventado (sin nombres reales). Revisa la exactitud y la equidad de cada tarea, y escribe cómo y cuándo pasarán los estudiantes de un grupo a otro.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Docentes de aula, coordinadores pedagógicos y líderes escolares que quieren que cada estudiante alcance las metas del grado por caminos distintos, y que empiezan a usar la IA para ahorrar tiempo de planificación.",
    startingPoint: "Saben planear y dar una clase a todo el grupo y aplicar un examen. Algunos han probado un asistente de IA para hacer hojas de trabajo. Pocos tienen una rutina para crear rápido tareas por niveles, tableros de opciones o grupos flexibles.",
    gap: "Hacer varias versiones de cada tarea toma más tiempo del que tienen la mayoría de los docentes, así que la diferenciación muchas veces se omite o se convierte en grupos fijos de nivel bajo y alto. Los docentes necesitan usar la IA para hacer las versiones mientras ellos toman las decisiones, protegen la privacidad de los estudiantes y mantienen altas las expectativas para todos.",
    constraints: [
      "Tiempo: lecciones cortas que caben en un periodo de planificación",
      "Dispositivos: una computadora de la escuela o una laptop con un asistente de IA que el distrito permita",
      "Privacidad: ni nombres, ni puntajes ni datos que identifiquen a estudiantes en herramientas que el distrito no haya aprobado; la práctica usa datos inventados",
      "Las adaptaciones obligatorias del IEP y del plan 504 deben darse en cada versión",
      "El docente debe revisar la exactitud y la equidad de cada tarea hecha con IA antes de usarla"
    ],
    prerequisites: "Ninguno. Los docentes que no conocen las herramientas de IA pueden tomar primero un curso introductorio de IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una tarea que enseñas", action: "explicar la diferenciación según la preparación, el interés y la forma preferida de aprender, y describir qué hace la IA y qué decide el docente", standard: "manteniendo la misma meta de aprendizaje en cada versión" },
    { id: "O2", condition: "Con un objetivo de aprendizaje y un asistente de IA", action: "crear una evaluación diagnóstica de cinco preguntas con clave y tres tareas por niveles", standard: "con los tres niveles practicando el mismo objetivo" },
    { id: "O3", condition: "Con una habilidad para practicar", action: "crear un tablero de opciones de nueve casillas con una casilla obligatoria", standard: "con cada casilla practicando la habilidad y tomando más o menos el mismo tiempo" },
    { id: "O4", condition: "Con los resultados diagnósticos de un grupo inventado", action: "agrupar a los estudiantes a partir de pruebas y escribir cuándo y cómo pasan de un grupo a otro", standard: "usando códigos en lugar de nombres y sin grupos fijos" },
    { id: "O5", condition: "Al planear una clase diferenciada", action: "planear las rutinas, las tarjetas de tareas y los tiempos de la clase", standard: "cubriendo cómo encuentran los estudiantes su tarea, qué hacer si se atascan y qué hacer al terminar" },
    { id: "O6", condition: "Con una clase diferenciada terminada", action: "revisar que tenga la misma meta, movimiento entre grupos, patrones justos y acceso, y corregir lo que falle", standard: "pasando las cuatro revisiones de equidad" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Crear materiales diferenciados",
      lessons: [
        {
          objectives: ["O1"],
          title: "La diferenciación en un minuto, y dónde ayuda la IA",
          minutes: 5,
          goal: "Explicar la diferenciación según la preparación, el interés y la forma preferida de aprender, y nombrar el papel de la IA.",
          text: [
            "Diferenciar significa ajustar cómo llegan los estudiantes a la misma meta de aprendizaje. Los docentes suelen diferenciar según la preparación (lo que el estudiante ya sabe y puede hacer), el interés (lo que lo motiva) y la forma preferida de aprender (por ejemplo, leer, conversar, dibujar o construir). La meta sigue igual; cambia el camino.",
            "La IA ayuda con la parte lenta: producir varias versiones de una tarea, un conjunto de ejemplos según intereses o una variedad de práctica. Puede convertir un conjunto de problemas en tres, o una lectura en versiones sobre deportes, música y cocina con la misma habilidad.",
            "La IA no conoce a tus estudiantes. El docente decide la meta, lee las pruebas, elige quién recibe cada camino y revisa la exactitud y la equidad de cada versión."
          ],
          words: [["Diferenciación", "ajustar cómo llegan los estudiantes a la misma meta de aprendizaje."], ["Preparación", "lo que un estudiante ya sabe y puede hacer en una habilidad."], ["Forma preferida de aprender", "una manera en que un estudiante suele aprender bien, como conversar o dibujar."]],
          slides: [
            { title: "La misma meta, caminos distintos", bullets: ["Preparación: lo que saben ahora", "Interés: lo que los motiva", "Forma preferida: cómo trabajan mejor"] },
            { title: "La IA hace las versiones", bullets: ["Una tarea en tres niveles", "La misma habilidad, distintos intereses", "Una variedad de práctica"] },
            { title: "El docente decide", bullets: ["La meta y las pruebas", "Quién recibe cada camino", "Revisiones de exactitud y equidad"] }
          ],
          tryIt: "Toma una tarea que enseñas. Pide a la IA que la reescriba de tres formas para distintos intereses (por ejemplo deportes, música, cocina) con la misma habilidad. Revisa que cada una conserve la habilidad.",
          youCanNow: "explicar la diferenciación y usar la IA para producir versiones de una tarea mientras tú tomas las decisiones.",
          quickCheck: [
            { objective: "O1", q: "¿Qué cambia cuando diferencias una clase?", options: ["El camino que siguen los estudiantes hacia la meta", "La meta de aprendizaje misma", "El estándar del grado", "Qué estudiantes hacen el examen final"], answer: 0, why: "En la diferenciación la meta se mantiene igual; solo cambia el camino." },
            { objective: "O1", q: "La IA convierte tu tarea de lectura en una versión sobre deportes, otra sobre música y otra sobre cocina. ¿Qué harías después?", options: ["Repartirlas sin leerlas", "Revisar que cada versión siga practicando la misma habilidad", "Dar la versión de deportes a todos los estudiantes", "Pedirle a la IA que elija qué estudiante recibe cada versión"], answer: 1, why: "La IA hace las versiones, pero el docente las revisa y decide quién recibe cuál." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Evaluaciones diagnósticas y tareas por niveles",
          minutes: 6,
          goal: "Escribir una evaluación diagnóstica rápida y tres tareas por niveles hacia un objetivo.",
          text: [
            "Empieza por las pruebas. Pide a la IA una evaluación diagnóstica de cinco preguntas sobre el objetivo: dos sobre las habilidades previas, dos sobre el objetivo mismo y una de reto. Pide una clave y qué sugiere cada respuesta incorrecta. Revisa cada pregunta.",
            "Las tareas por niveles llegan al mismo objetivo con distintos grados de apoyo y complejidad. Instrucción: “Objetivo: [pégalo]. Escribe tres tareas. Nivel 1: más apoyo (ejemplo resuelto, pasos, banco de palabras). Nivel 2: en nivel. Nivel 3: extensión (una tarea más difícil o de transferencia al mundo real). Las tres deben practicar el objetivo. Incluye las claves de respuestas.”",
            "Revisa que el nivel 1 no sea simplemente más fácil, sino que tenga apoyo hacia la misma meta, y que el nivel 3 sea más profundo, no solo más trabajo. Los estudiantes de todos los niveles deben terminar habiendo practicado el objetivo."
          ],
          steps: ["Pide una evaluación diagnóstica de cinco preguntas con clave.", "Revisa cada pregunta y la clave.", "Pide tres niveles hacia el mismo objetivo.", "Nivel 1 con apoyo, no más fácil; nivel 3 más profundo, no más largo.", "Revisa todas las claves."],
          words: [["Evaluación diagnóstica", "una verificación breve antes de enseñar para ver qué saben ya los estudiantes."], ["Tarea por niveles", "versiones de una tarea con distintos grados de apoyo o complejidad, dirigidas a la misma meta."], ["Tarea de transferencia", "usar una habilidad en una situación nueva, a menudo del mundo real."]],
          slides: [
            { title: "Empieza por las pruebas", bullets: ["5 preguntas: habilidades previas, objetivo, reto", "Clave y qué sugieren las respuestas incorrectas"] },
            { title: "Tres niveles, un objetivo", bullets: ["Nivel 1: más apoyo", "Nivel 2: en nivel", "Nivel 3: extensión o transferencia"] },
            { title: "Revisa los niveles", bullets: ["Nivel 1 con apoyo, no más fácil", "Nivel 3 más profundo, no más largo", "Todos practican el objetivo"] }
          ],
          tryIt: "Escribe con IA una evaluación diagnóstica de cinco preguntas y tres tareas por niveles para un objetivo. Revisa que los tres niveles practiquen el mismo objetivo.",
          youCanNow: "crear una evaluación diagnóstica y tareas por niveles que llegan a la misma meta.",
          quickCheck: [
            { objective: "O2", q: "¿Qué debe incluir una evaluación diagnóstica de cinco preguntas según esta lección?", options: ["Cinco preguntas de reto", "Cinco preguntas sobre la unidad del año pasado", "Dos preguntas de habilidades previas, dos sobre el objetivo y una pregunta de reto", "Solo preguntas que los estudiantes seguro responderán bien"], answer: 2, why: "Esa mezcla muestra quién necesita ayuda con lo previo, quién está listo y quién está listo para más." },
            { objective: "O2", q: "Tu tarea de nivel 3 es la tarea de nivel 2 con el doble de problemas. ¿Qué harías?", options: ["Dejarla así, porque más trabajo es más difícil", "Quitar el nivel 3", "Dársela al grupo de apoyo", "Reemplazarla por una tarea más profunda, como usar la habilidad en una situación nueva"], answer: 3, why: "El nivel 3 debe ser más profundo, no solo más trabajo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tableros de opciones",
          minutes: 5,
          goal: "Crear con IA un tablero de opciones de nueve casillas para practicar.",
          text: [
            "Un tablero de opciones es una cuadrícula de actividades, a menudo de nueve casillas, que practican la misma habilidad de formas distintas: escribir, dibujar, explicar en voz alta, resolver, construir, enseñar a alguien. Los estudiantes eligen un número fijo, por ejemplo tres en línea.",
            "Instrucción: “Haz un tablero de opciones de 3 por 3 para estudiantes de 6.º grado que practican [habilidad]. Cada casilla es una forma distinta de practicar: escribir, dibujar, conversar, resolver problemas, crear, mundo real. Cada casilla debe practicar la habilidad. Pon una casilla obligatoria en el centro.”",
            "Revisa que cada casilla practique de verdad la habilidad y tome más o menos el mismo tiempo, y que haya materiales. Elegir aumenta la motivación; nunca debe convertirse en una forma de evitar la parte difícil."
          ],
          steps: ["Indica la habilidad y el grado.", "Pide un tablero de 3 por 3 con formas variadas de practicar.", "Haz obligatoria la casilla del centro.", "Revisa que cada casilla practique la habilidad y tome un tiempo parecido.", "Revisa que haya materiales."],
          words: [["Tablero de opciones", "una cuadrícula de actividades que practican la misma habilidad de formas distintas, entre las que eligen los estudiantes."], ["Obligatoria", "una actividad que todos los estudiantes completan."]],
          slides: [
            { title: "Una cuadrícula de formas de practicar", bullets: ["Escribir, dibujar, conversar, resolver, construir", "Los estudiantes eligen, p. ej. tres en línea"] },
            { title: "La instrucción", bullets: ["3 por 3, formas variadas de practicar", "Cada casilla practica la habilidad", "Obligatoria en el centro"] },
            { title: "Revísalo", bullets: ["Misma habilidad, tiempo parecido", "Materiales disponibles", "Elegir, no evitar"] }
          ],
          tryIt: "Crea con IA un tablero de opciones de 3 por 3 para una habilidad. Revisa cada casilla y reemplaza las que no practiquen la habilidad.",
          youCanNow: "crear tableros de opciones que ofrecen una elección real mientras practican la misma habilidad.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un tablero de opciones?", options: ["Una cuadrícula de actividades que practican la misma habilidad de formas distintas", "Una lista de temas distintos que los estudiantes pueden saltarse", "Un mapa de asientos", "Un tablero donde los estudiantes votan por la tarea"], answer: 0, why: "Cada casilla practica la misma habilidad; solo cambia la forma de practicarla." },
            { objective: "O3", q: "Una casilla de tu tablero de opciones hecho con IA pide a los estudiantes dibujar su animal favorito, y eso no practica la habilidad. ¿Qué harías?", options: ["Dejarla para que tengan una opción divertida", "Convertirla en la casilla obligatoria", "Reemplazarla por una casilla que practique la habilidad", "Quitar todo el tablero"], answer: 2, why: "Elegir nunca debe convertirse en una forma de evitar la habilidad." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Crear materiales diferenciados",
        questions: [
          { objective: "O1", q: "En la diferenciación, ¿qué se mantiene igual?", options: ["El camino", "Los materiales", "La meta de aprendizaje", "El grupo"], answer: 2, why: "La meta se mantiene; cambia el camino." },
          { objective: "O1", q: "¿Qué NO sabe la IA al diferenciar?", options: ["Cómo son tus estudiantes", "Cómo reescribir una tarea", "Cómo hacer tres niveles", "Intereses comunes"], answer: 0, why: "Los docentes conocen a los estudiantes y deciden los caminos." },
          { objective: "O2", q: "Una buena tarea de nivel 1 es:", options: ["Una habilidad distinta y más fácil", "Saltarse el objetivo", "Solo colorear", "Con apoyo hacia el mismo objetivo"], answer: 3, why: "Apoyo, no una meta más baja." },
          { objective: "O2", q: "Una buena tarea de nivel 3 es:", options: ["Más de los mismos problemas", "Más profunda, como una tarea de transferencia", "Opcional", "Más corta"], answer: 1, why: "Extensión significa profundidad, no cantidad." },
          { objective: "O3", q: "Cada casilla de un tablero de opciones debe:", options: ["Necesitar materiales especiales", "Ser un juego", "Tomar tiempos muy distintos", "Practicar la misma habilidad"], answer: 3, why: "Se elige el camino, no la habilidad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar bien la diferenciación",
      lessons: [
        {
          objectives: ["O4"],
          title: "Agrupamiento flexible a partir de pruebas",
          minutes: 6,
          goal: "Agrupar a los estudiantes a partir de la evaluación diagnóstica y planear cómo pasan de un grupo a otro.",
          text: [
            "Los grupos flexibles cambian seguido, según las pruebas actuales en una habilidad concreta, no según una etiqueta. Después de la evaluación diagnóstica, ordena los resultados en grupos para este objetivo: necesita apoyo en lo previo, listo para el objetivo, listo para la extensión.",
            "La IA puede ayudarte a ver patrones, pero los puntajes con nombres de estudiantes son registros educativos. Haz tú el ordenamiento en tu libro de calificaciones, usa una herramienta aprobada por el distrito o reemplaza los nombres por códigos antes de usar la IA. Practica con un grupo inventado.",
            "Planea los cambios: después de cada verificación (un boleto de salida, una pregunta bisagra), los estudiantes pasan al grupo que les corresponde ahora. Escribe cuándo volverás a verificar y cómo sube un estudiante. Los grupos que nunca cambian se convierten en agrupamiento fijo por niveles."
          ],
          steps: ["Ordena los resultados diagnósticos por habilidad, no por etiqueta.", "Usa tu libro de calificaciones o una herramienta aprobada; nunca nombres en herramientas no aprobadas.", "Forma tres grupos para este objetivo.", "Planea nuevas verificaciones después de cada clase.", "Cambia a los estudiantes de grupo cuando cambien las pruebas."],
          words: [["Agrupamiento flexible", "agrupar a los estudiantes según las pruebas actuales en una habilidad, cambiando seguido."], ["Agrupamiento fijo por niveles", "mantener a los estudiantes en el mismo grupo de nivel por mucho tiempo, lo que puede limitar sus oportunidades."]],
          slides: [
            { title: "Grupos a partir de pruebas", bullets: ["Por habilidad actual, no por etiqueta", "Apoyo en lo previo, listo, extensión"] },
            { title: "Protege los datos de los estudiantes", bullets: ["Los puntajes con nombres son registros educativos", "Libro de calificaciones o herramienta aprobada", "O códigos, no nombres"] },
            { title: "Que los grupos se muevan", bullets: ["Nueva verificación tras cada clase", "Los estudiantes cambian cuando cambian las pruebas", "Los grupos fijos se vuelven agrupamiento fijo"] }
          ],
          sources: [{ name: "FERPA: protección de la privacidad estudiantil", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Inventa resultados diagnósticos para 24 estudiantes usando códigos (E1 a E24). Forma tres grupos para el objetivo y escribe cuándo y cómo pasarán los estudiantes de un grupo a otro.",
          youCanNow: "agrupar a los estudiantes de forma flexible a partir de pruebas y mantener los grupos en movimiento.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace que un grupo sea \"flexible\"?", options: ["Los estudiantes eligen el grupo que quieran", "Cambia seguido, según las pruebas actuales en una habilidad", "Se mantiene igual todo el año", "Se basa en la etiqueta de un estudiante"], answer: 1, why: "Los grupos flexibles siguen las pruebas actuales y cambian a medida que los estudiantes aprenden." },
            { objective: "O4", q: "Quieres que la IA te ayude a ver patrones en los puntajes diagnósticos de tu grupo. ¿Qué harías primero?", options: ["Pegar el registro de calificaciones con los nombres", "Enviar los puntajes por correo a un colega", "Poner los puntajes en la pared", "Reemplazar los nombres por códigos como E1, o usar una herramienta aprobada por el distrito"], answer: 3, why: "Los puntajes con nombres son registros educativos, así que protégelos antes de usar la IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Llevar una clase diferenciada",
          minutes: 5,
          goal: "Planear las rutinas que hacen funcionar una clase diferenciada en el aula.",
          text: [
            "Las clases diferenciadas fallan más por la logística que por los materiales. Planea las rutinas: cómo sabe cada estudiante cuál es su tarea (una diapositiva o tarjeta con nombres o colores de grupo), dónde están los materiales, qué hacer si se atasca (“pregunta a tres antes que a mí”, una tarjeta de ayuda) y qué hacer al terminar (el tablero de opciones).",
            "Planea tu tiempo: empieza con una minilección breve para todo el grupo, luego reúnete con el grupo que más te necesita mientras los demás trabajan, y después pasa por cada grupo. La IA puede redactar tarjetas de tareas, tarjetas de ayuda y un plan de tiempos.",
            "Haz que se sienta normal. Usa nombres de grupo neutros (colores o figuras, no “bajo” y “alto”), cambia los grupos seguido y deja que todos los grupos hagan trabajo interesante. Los estudiantes notan cuando un grupo siempre recibe las tareas aburridas."
          ],
          steps: ["Muestra con claridad la tarea de cada grupo.", "Fija las rutinas de materiales, de atasco y de terminar.", "Minilección y luego tiempo del docente con el grupo que más lo necesita.", "Pasa por cada grupo.", "Usa nombres neutros y trabajo interesante para todos."],
          words: [["Rutina", "una forma habitual de hacer algo que los estudiantes aprenden y siguen."], ["Enseñanza en grupos pequeños", "el docente enseña a unos pocos estudiantes a la vez mientras los demás trabajan."]],
          slides: [
            { title: "La logística decide el éxito", bullets: ["Tarjetas de tareas claras", "Rutinas de materiales, de atasco y de terminar"] },
            { title: "Planea tu tiempo", bullets: ["Minilección breve para todo el grupo", "Reúnete con el grupo que más te necesita", "Pasa por cada grupo"] },
            { title: "Que se sienta normal", bullets: ["Nombres de grupo neutros", "Los grupos cambian seguido", "Trabajo interesante para todos los grupos"] }
          ],
          tryIt: "Usa la IA para redactar tarjetas de tareas para tus tres niveles, una tarjeta de ayuda para cuando los estudiantes se atasquen y un plan de tiempos para una clase de 50 minutos.",
          youCanNow: "llevar una clase diferenciada con rutinas claras y prácticas de grupo justas.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué fallan con más frecuencia las clases diferenciadas?", options: ["Por la logística y las rutinas", "Por tener muy pocas hojas de trabajo", "Porque a los estudiantes no les gusta elegir", "Porque la IA hace demasiadas versiones"], answer: 0, why: "La lección dice que fallan más por la logística que por los materiales." },
            { objective: "O5", q: "Unos estudiantes terminan su tarea de nivel diez minutos antes. ¿Qué debe decirles tu plan que hagan?", options: ["Esperar en silencio", "Empezar la tarea del siguiente nivel", "Ir al tablero de opciones", "Unirse al grupo del docente"], answer: 2, why: "El plan debe decir qué hacer al terminar, como ir al tablero de opciones." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Revisar la equidad de la diferenciación",
          minutes: 6,
          goal: "Revisar que la diferenciación abra puertas en lugar de bajar las expectativas.",
          text: [
            "La diferenciación puede convertirse sin ruido en expectativas más bajas: algunos estudiantes siempre reciben tareas más fáciles y nunca llegan a la meta del grado. Revisa cuatro cosas. Misma meta: ¿todos los estudiantes practican el objetivo del grado? Movimiento: ¿cambiaron los estudiantes de grupo a lo largo de la unidad?",
            "Patrones: mira (protegiendo la privacidad) quién termina en cada grupo con el tiempo. Si los estudiantes de un mismo origen, los que aprenden inglés o los que tienen discapacidad siempre están en el grupo de apoyo, pregúntate por qué. Acceso: ¿los apoyos como la lectura en voz alta o los visuales llegan a todos los que los necesitan, incluidas las adaptaciones obligatorias del IEP y del plan 504?",
            "Los materiales de IA necesitan la misma revisión: ¿los ejemplos y nombres son variados y respetuosos, sin estereotipos sobre quién es bueno en qué? Los líderes pueden pedir a los equipos que traigan una clase diferenciada a una reunión y hagan juntos esta revisión."
          ],
          steps: ["¿La misma meta en cada nivel?", "¿Los estudiantes cambiaron de grupo?", "¿Quién está siempre en qué grupo, y por qué?", "¿Los apoyos y las adaptaciones obligatorias llegan a todos?", "¿Los ejemplos de la IA son variados y sin estereotipos?"],
          words: [["Expectativas", "lo que los docentes creen que los estudiantes pueden lograr, que influye en lo que se les enseña."], ["Estereotipo", "una idea fija e injusta sobre un grupo de personas."]],
          slides: [
            { title: "Cuidado con las expectativas bajas", bullets: ["Todos los niveles llegan a la meta del grado", "Los estudiantes cambian de grupo"] },
            { title: "Mira los patrones", bullets: ["¿Quién está siempre en el grupo de apoyo?", "Estudiantes que aprenden inglés, discapacidad, origen", "Pregúntate por qué"] },
            { title: "Acceso y contenido", bullets: ["Los apoyos y adaptaciones llegan a todos", "Ejemplos de IA variados, sin estereotipos"] }
          ],
          tryIt: "Tarea final: arma tu clase diferenciada (evaluación diagnóstica con clave, tres niveles, tablero de opciones, plan de agrupamiento con datos inventados y reglas de cambio), luego aplícale las cuatro revisiones de equidad y corrige lo que falle.",
          youCanNow: "diferenciar clases con IA manteniendo altas las expectativas para cada estudiante.",
          quickCheck: [
            { objective: "O6", q: "¿Qué pregunta la revisión de equidad de la \"misma meta\"?", options: ["¿Todos los grupos reciben la misma hoja de trabajo?", "¿Cada estudiante practica el objetivo del grado?", "¿Todos los grupos terminan al mismo tiempo?", "¿Todos los estudiantes sacan el mismo puntaje?"], answer: 1, why: "La diferenciación no debe dejar a algunos estudiantes lejos de la meta del grado." },
            { objective: "O6", q: "Durante la unidad, los mismos estudiantes de un mismo origen están siempre en el grupo de apoyo. ¿Qué harías?", options: ["Dejarlos ahí, porque está funcionando", "Pasarlos al grupo de extensión sin pruebas", "Dejar de usar grupos", "Preguntarte por qué y revisar si el agrupamiento refleja la habilidad o algo más"], answer: 3, why: "Un patrón así es una señal de alerta de que la diferenciación se está convirtiendo en expectativas bajas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar bien la diferenciación",
        questions: [
          { objective: "O4", q: "Los grupos flexibles se basan en:", options: ["Una etiqueta del año pasado", "La popularidad del estudiante", "Las pruebas actuales en una habilidad concreta", "El mapa de asientos"], answer: 2, why: "Deciden las pruebas sobre la habilidad actual." },
          { objective: "O4", q: "Quieres que la IA te ayude a ordenar los resultados diagnósticos. ¿Qué es seguro?", options: ["Usar códigos en lugar de nombres, o una herramienta aprobada", "Pegar nombres y puntajes en una herramienta gratuita", "Publicar los resultados en línea", "Enviarlos por correo a un proveedor"], answer: 0, why: "Los puntajes con nombres son registros educativos." },
          { objective: "O5", q: "¿Qué nombres de grupo son mejores?", options: ["Bajo, medio, alto", "Colores o figuras", "Listos y lentos", "Los puntajes de los estudiantes"], answer: 1, why: "Los nombres neutros evitan etiquetar a los estudiantes." },
          { objective: "O6", q: "Los estudiantes que aprenden inglés están en el grupo de apoyo toda la unidad. ¿Qué debes hacer?", options: ["Preguntarte por qué y revisar si el agrupamiento refleja el idioma y no la comprensión", "Nada", "Hacerlo permanente", "Sacarlos de la clase"], answer: 0, why: "Los patrones pueden mostrar un agrupamiento injusto." },
          { objective: "O4", q: "¿Cuál es el riesgo de los grupos que nunca cambian?", options: ["Ninguno", "Ahorran tiempo", "Mejoran el aprendizaje", "Se convierten en agrupamiento fijo por niveles"], answer: 3, why: "Los grupos fijos limitan las oportunidades." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Diferenciación con IA",
    questions: [
      { objective: "O1", q: "Diferenciar significa:", options: ["Dar metas distintas", "Ajustar cómo llegan los estudiantes a la misma meta", "Clases separadas", "Menos trabajo para algunos"], answer: 1, why: "La misma meta, caminos distintos." },
      { objective: "O1", q: "La preparación se refiere a:", options: ["La edad", "La puntualidad", "Lo que un estudiante ya sabe y puede hacer", "Solo la velocidad de lectura"], answer: 2, why: "Depende de cada habilidad." },
      { objective: "O1", q: "Las versiones según intereses conservan:", options: ["Ninguna habilidad", "Habilidades distintas", "La misma habilidad", "Solo el tema"], answer: 2, why: "Cambia el contexto, no la habilidad." },
      { objective: "O1", q: "¿Quién decide qué camino recibe cada estudiante?", options: ["El docente", "La IA", "El proveedor", "Solo los padres del estudiante"], answer: 0, why: "Los docentes leen las pruebas y deciden." },
      { objective: "O2", q: "Una evaluación diagnóstica se aplica:", options: ["Solo a algunos estudiantes", "Al final del año", "Nunca", "Antes de enseñar"], answer: 3, why: "Muestra desde dónde empiezan los estudiantes." },
      { objective: "O2", q: "Una buena evaluación diagnóstica incluye:", options: ["Solo las preguntas más difíciles", "Habilidades previas, el objetivo y una pregunta de reto", "Solo preguntas de opinión", "Nada sobre el objetivo"], answer: 1, why: "Muestra la variedad de preparación." },
      { objective: "O2", q: "Las tareas por niveles apuntan a:", options: ["Solo los mejores estudiantes", "Objetivos distintos", "Ningún objetivo", "El mismo objetivo"], answer: 3, why: "Los niveles varían el apoyo y la complejidad, no la meta." },
      { objective: "O2", q: "Una tarea de transferencia:", options: ["Copia una respuesta", "Cambia a un estudiante de escuela", "Usa una habilidad en una situación nueva", "Es repetir un examen"], answer: 2, why: "Profundiza el aprendizaje." },
      { objective: "O3", q: "Un tablero de opciones suele tener:", options: ["Nueve casillas de actividades para la misma habilidad", "Una actividad", "Solo juegos", "Calificaciones"], answer: 0, why: "Una cuadrícula de formas de practicar." },
      { objective: "O3", q: "La casilla obligatoria de un tablero de opciones:", options: ["Es opcional", "La completan todos los estudiantes", "Es para el docente", "Es solo para estudiantes avanzados"], answer: 1, why: "Asegura la práctica central." },
      { objective: "O3", q: "Las casillas de un tablero de opciones deben tomar:", options: ["Más o menos el mismo tiempo", "Tiempos muy distintos", "Nada de tiempo", "Solo tiempo de tarea en casa"], answer: 0, why: "Una elección justa necesita un esfuerzo parecido." },
      { objective: "O4", q: "Los puntajes de los estudiantes con nombres son:", options: ["Propiedad de las empresas de IA", "Públicos", "Seguros en cualquier aplicación", "Registros educativos protegidos por FERPA"], answer: 3, why: "Protégelos." },
      { objective: "O4", q: "Reemplazar los nombres por códigos como E1 ayuda a:", options: ["Calificar más rápido", "Proteger la privacidad de los estudiantes al practicar con IA", "Ocultar calificaciones a los docentes", "Nada"], answer: 1, why: "Los códigos quitan los nombres identificadores." },
      { objective: "O4", q: "Los estudiantes deben cambiar de grupo:", options: ["Solo al final del año", "Nunca", "Cuando nuevas pruebas muestran un cambio", "Al azar"], answer: 2, why: "Flexible significa cambiar según las pruebas." },
      { objective: "O5", q: "Las clases diferenciadas suelen fallar por:", options: ["Aulas iluminadas", "Demasiadas ideas", "La logística y las rutinas", "Nombres cortos"], answer: 2, why: "Las rutinas las hacen funcionar." },
      { objective: "O5", q: "“Pregunta a tres antes que a mí” es una rutina para:", options: ["Cuando los estudiantes se atascan", "Cuando los estudiantes terminan", "Hacer fila", "El almuerzo"], answer: 0, why: "Desarrolla la autonomía." },
      { objective: "O5", q: "Durante el trabajo en grupos, el docente debe reunirse primero con:", options: ["El director", "Nadie", "Solo el grupo de extensión", "El grupo que más lo necesita"], answer: 3, why: "El tiempo del docente va donde más importa." },
      { objective: "O6", q: "La diferenciación se convierte en expectativas bajas cuando:", options: ["Todos los niveles llegan a la meta", "Algunos estudiantes nunca practican la meta del grado", "Los grupos cambian seguido", "Se ofrecen apoyos"], answer: 1, why: "Todos los estudiantes necesitan la meta del grado." },
      { objective: "O6", q: "Las adaptaciones obligatorias del IEP y del plan 504 en una clase diferenciada:", options: ["Solo aplican en los exámenes", "Se reemplazan con los niveles", "Son opcionales", "Deben darse de todos modos"], answer: 3, why: "Son obligatorias." },
      { objective: "O6", q: "Los ejemplos hechos con IA deben revisarse en:", options: ["Solo la extensión", "Solo el tamaño de letra", "Variedad y estereotipos", "Nada"], answer: 2, why: "Los materiales deben ser justos y respetuosos." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      4,
      6,
      8,
      11,
      13,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Evaluación diagnóstica",
        objective: "O2",
        notYet: "Menos de cinco preguntas, sin clave o sin relación con el objetivo.",
        meets: "Cinco preguntas (habilidades previas, objetivo y reto) con clave.",
        exceeds: "La clave también dice qué sugiere cada respuesta incorrecta."
      },
      {
        name: "Tareas por niveles",
        objective: "O2",
        notYet: "Los niveles practican metas distintas, o el nivel 3 es solo más trabajo.",
        meets: "Tres niveles (más apoyo, en nivel, extensión) que practican el mismo objetivo, con claves.",
        exceeds: "El nivel 1 tiene apoyos claros y el nivel 3 es una verdadera tarea de transferencia."
      },
      {
        name: "Tablero de opciones",
        objective: "O3",
        notYet: "Algunas casillas no practican la habilidad.",
        meets: "Nueve casillas que practican la habilidad, con una casilla obligatoria en el centro.",
        exceeds: "Las casillas toman más o menos el mismo tiempo y usan formas de trabajo distintas."
      },
      {
        name: "Plan de agrupamiento",
        objective: "O4",
        notYet: "Usa nombres reales, o los grupos no cambian.",
        meets: "Los grupos salen de los resultados inventados con códigos, y el plan dice cuándo y cómo pasan los estudiantes de un grupo a otro.",
        exceeds: "Nombra la nueva revisión, como un boleto de salida, que hace cambiar a los estudiantes de grupo."
      },
      {
        name: "Revisión de equidad",
        objective: "O6",
        notYet: "No se hicieron las revisiones de equidad.",
        meets: "Se hicieron las cuatro revisiones (misma meta, movimiento, patrones, acceso) y se corrigió lo que falló.",
        exceeds: "Puede decir qué cambió gracias a la revisión."
      }
    ]
  },
  evaluation: {
    results: [
      "Docentes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Docentes que dan al menos una clase diferenciada en los 30 días siguientes (encuesta de seguimiento)",
      "Tiempo de planificación que los docentes dicen ahorrar al hacer versiones de las tareas",
      "Escuelas donde los líderes hacen la revisión de equidad con un equipo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con un asistente de IA que tu distrito permita",
      "Un objetivo real de una clase que enseñas",
      "Una lista de grupo inventada con códigos (E1 a E24)",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Hazlo como una sesión de formación docente: respondan juntos la prueba inicial y luego pide a cada docente que traiga una clase que dará pronto.",
      "Nunca permitas que los participantes peguen nombres ni puntajes reales de estudiantes en la IA; dales un grupo inventado con códigos.",
      "Forma parejas de docentes del mismo grado o materia para que revisen los niveles del otro.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez.",
      "Los líderes pueden cerrar haciendo juntos las cuatro revisiones de equidad sobre una clase compartida."
    ]
  }
};
