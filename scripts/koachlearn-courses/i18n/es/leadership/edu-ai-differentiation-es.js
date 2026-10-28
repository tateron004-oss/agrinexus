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
  chapters: [
    {
      name: "Capítulo 1: Crear materiales diferenciados",
      lessons: [
        {
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
          youCanNow: "explicar la diferenciación y usar la IA para producir versiones de una tarea mientras tú tomas las decisiones."
        },
        {
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
          youCanNow: "crear una evaluación diagnóstica y tareas por niveles que llegan a la misma meta."
        },
        {
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
          youCanNow: "crear tableros de opciones que ofrecen una elección real mientras practican la misma habilidad."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Crear materiales diferenciados",
        questions: [
          { q: "En la diferenciación, ¿qué se mantiene igual?", options: ["El camino", "Los materiales", "La meta de aprendizaje", "El grupo"], answer: 2, why: "La meta se mantiene; cambia el camino." },
          { q: "¿Qué NO sabe la IA al diferenciar?", options: ["Cómo son tus estudiantes", "Cómo reescribir una tarea", "Cómo hacer tres niveles", "Intereses comunes"], answer: 0, why: "Los docentes conocen a los estudiantes y deciden los caminos." },
          { q: "Una buena tarea de nivel 1 es:", options: ["Una habilidad distinta y más fácil", "Saltarse el objetivo", "Solo colorear", "Con apoyo hacia el mismo objetivo"], answer: 3, why: "Apoyo, no una meta más baja." },
          { q: "Una buena tarea de nivel 3 es:", options: ["Más de los mismos problemas", "Más profunda, como una tarea de transferencia", "Opcional", "Más corta"], answer: 1, why: "Extensión significa profundidad, no cantidad." },
          { q: "Cada casilla de un tablero de opciones debe:", options: ["Necesitar materiales especiales", "Ser un juego", "Tomar tiempos muy distintos", "Practicar la misma habilidad"], answer: 3, why: "Se elige el camino, no la habilidad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar bien la diferenciación",
      lessons: [
        {
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
          youCanNow: "agrupar a los estudiantes de forma flexible a partir de pruebas y mantener los grupos en movimiento."
        },
        {
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
          youCanNow: "llevar una clase diferenciada con rutinas claras y prácticas de grupo justas."
        },
        {
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
          youCanNow: "diferenciar clases con IA manteniendo altas las expectativas para cada estudiante."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar bien la diferenciación",
        questions: [
          { q: "Los grupos flexibles se basan en:", options: ["Una etiqueta del año pasado", "La popularidad del estudiante", "Las pruebas actuales en una habilidad concreta", "El mapa de asientos"], answer: 2, why: "Deciden las pruebas sobre la habilidad actual." },
          { q: "Quieres que la IA te ayude a ordenar los resultados diagnósticos. ¿Qué es seguro?", options: ["Usar códigos en lugar de nombres, o una herramienta aprobada", "Pegar nombres y puntajes en una herramienta gratuita", "Publicar los resultados en línea", "Enviarlos por correo a un proveedor"], answer: 0, why: "Los puntajes con nombres son registros educativos." },
          { q: "¿Qué nombres de grupo son mejores?", options: ["Bajo, medio, alto", "Colores o figuras", "Listos y lentos", "Los puntajes de los estudiantes"], answer: 1, why: "Los nombres neutros evitan etiquetar a los estudiantes." },
          { q: "Los estudiantes que aprenden inglés están en el grupo de apoyo toda la unidad. ¿Qué debes hacer?", options: ["Preguntarte por qué y revisar si el agrupamiento refleja el idioma y no la comprensión", "Nada", "Hacerlo permanente", "Sacarlos de la clase"], answer: 0, why: "Los patrones pueden mostrar un agrupamiento injusto." },
          { q: "¿Cuál es el riesgo de los grupos que nunca cambian?", options: ["Ninguno", "Ahorran tiempo", "Mejoran el aprendizaje", "Se convierten en agrupamiento fijo por niveles"], answer: 3, why: "Los grupos fijos limitan las oportunidades." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Diferenciación con IA",
    questions: [
      { q: "Diferenciar significa:", options: ["Dar metas distintas", "Ajustar cómo llegan los estudiantes a la misma meta", "Clases separadas", "Menos trabajo para algunos"], answer: 1, why: "La misma meta, caminos distintos." },
      { q: "La preparación se refiere a:", options: ["La edad", "La puntualidad", "Lo que un estudiante ya sabe y puede hacer", "Solo la velocidad de lectura"], answer: 2, why: "Depende de cada habilidad." },
      { q: "Las versiones según intereses conservan:", options: ["Ninguna habilidad", "Habilidades distintas", "La misma habilidad", "Solo el tema"], answer: 2, why: "Cambia el contexto, no la habilidad." },
      { q: "¿Quién decide qué camino recibe cada estudiante?", options: ["El docente", "La IA", "El proveedor", "Solo los padres del estudiante"], answer: 0, why: "Los docentes leen las pruebas y deciden." },
      { q: "Una evaluación diagnóstica se aplica:", options: ["Solo a algunos estudiantes", "Al final del año", "Nunca", "Antes de enseñar"], answer: 3, why: "Muestra desde dónde empiezan los estudiantes." },
      { q: "Una buena evaluación diagnóstica incluye:", options: ["Solo las preguntas más difíciles", "Habilidades previas, el objetivo y una pregunta de reto", "Solo preguntas de opinión", "Nada sobre el objetivo"], answer: 1, why: "Muestra la variedad de preparación." },
      { q: "Las tareas por niveles apuntan a:", options: ["Solo los mejores estudiantes", "Objetivos distintos", "Ningún objetivo", "El mismo objetivo"], answer: 3, why: "Los niveles varían el apoyo y la complejidad, no la meta." },
      { q: "Una tarea de transferencia:", options: ["Copia una respuesta", "Cambia a un estudiante de escuela", "Usa una habilidad en una situación nueva", "Es repetir un examen"], answer: 2, why: "Profundiza el aprendizaje." },
      { q: "Un tablero de opciones suele tener:", options: ["Nueve casillas de actividades para la misma habilidad", "Una actividad", "Solo juegos", "Calificaciones"], answer: 0, why: "Una cuadrícula de formas de practicar." },
      { q: "La casilla obligatoria de un tablero de opciones:", options: ["Es opcional", "La completan todos los estudiantes", "Es para el docente", "Es solo para estudiantes avanzados"], answer: 1, why: "Asegura la práctica central." },
      { q: "Las casillas de un tablero de opciones deben tomar:", options: ["Más o menos el mismo tiempo", "Tiempos muy distintos", "Nada de tiempo", "Solo tiempo de tarea en casa"], answer: 0, why: "Una elección justa necesita un esfuerzo parecido." },
      { q: "Los puntajes de los estudiantes con nombres son:", options: ["Propiedad de las empresas de IA", "Públicos", "Seguros en cualquier aplicación", "Registros educativos protegidos por FERPA"], answer: 3, why: "Protégelos." },
      { q: "Reemplazar los nombres por códigos como E1 ayuda a:", options: ["Calificar más rápido", "Proteger la privacidad de los estudiantes al practicar con IA", "Ocultar calificaciones a los docentes", "Nada"], answer: 1, why: "Los códigos quitan los nombres identificadores." },
      { q: "Los estudiantes deben cambiar de grupo:", options: ["Solo al final del año", "Nunca", "Cuando nuevas pruebas muestran un cambio", "Al azar"], answer: 2, why: "Flexible significa cambiar según las pruebas." },
      { q: "Las clases diferenciadas suelen fallar por:", options: ["Aulas iluminadas", "Demasiadas ideas", "La logística y las rutinas", "Nombres cortos"], answer: 2, why: "Las rutinas las hacen funcionar." },
      { q: "“Pregunta a tres antes que a mí” es una rutina para:", options: ["Cuando los estudiantes se atascan", "Cuando los estudiantes terminan", "Hacer fila", "El almuerzo"], answer: 0, why: "Desarrolla la autonomía." },
      { q: "Durante el trabajo en grupos, el docente debe reunirse primero con:", options: ["El director", "Nadie", "Solo el grupo de extensión", "El grupo que más lo necesita"], answer: 3, why: "El tiempo del docente va donde más importa." },
      { q: "La diferenciación se convierte en expectativas bajas cuando:", options: ["Todos los niveles llegan a la meta", "Algunos estudiantes nunca practican la meta del grado", "Los grupos cambian seguido", "Se ofrecen apoyos"], answer: 1, why: "Todos los estudiantes necesitan la meta del grado." },
      { q: "Las adaptaciones obligatorias del IEP y del plan 504 en una clase diferenciada:", options: ["Solo aplican en los exámenes", "Se reemplazan con los niveles", "Son opcionales", "Deben darse de todos modos"], answer: 3, why: "Son obligatorias." },
      { q: "Los ejemplos hechos con IA deben revisarse en:", options: ["Solo la extensión", "Solo el tamaño de letra", "Variedad y estereotipos", "Nada"], answer: 2, why: "Los materiales deben ser justos y respetuosos." }
    ]
  }
};
