"use strict";

// Koach Learn course (Spanish translation of leadership/edu-ai-stem.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-stem-es",
  lang: "es",
  translationOf: "edu-ai-stem",
  category: "Leadership Development",
  name: "IA en la educación STEM",
  skills: "Generar problemas STEM con soluciones verificadas, Usar la IA como ayudante de programación en investigaciones con datos, Enseñar cómo aprende la IA a partir de datos, Verificar las afirmaciones de la IA como un científico, Usar la IA en el proceso de diseño de ingeniería, Diseñar tareas que muestren el razonamiento",
  outcome: "diseñar y dar una clase STEM en la que los estudiantes usan la IA como herramienta (para ayudar a escribir código, analizar datos o generar ideas de diseño) y luego verifican lo que produce como científicos e ingenieros, con tareas que hacen visible su razonamiento.",
  about: [
    "Este curso es para docentes, coordinadores y líderes de ciencias, tecnología, ingeniería y matemáticas (STEM, por sus siglas en inglés). La IA es a la vez una herramienta para aprender STEM y un tema STEM en sí misma. Los estudiantes deben aprender a usarla, a revisarla y a entender cómo funciona.",
    "El capítulo 1 usa la IA como herramienta del docente y del estudiante: conjuntos de problemas con soluciones verificadas, simulaciones y gráficas, e investigaciones con datos en las que la IA ayuda a escribir código. El capítulo 2 convierte la IA en el tema: cómo aprenden las máquinas a partir de datos, cómo verificar las afirmaciones de la IA como un científico, la IA en el proceso de diseño de ingeniería y tareas que mantienen el razonamiento del estudiante en el centro.",
    "El uso de herramientas de IA por los estudiantes depende de la aprobación de tu distrito y de las reglas de edad de cada herramienta. Mantén la información de los estudiantes fuera de las herramientas no aprobadas. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Planea y (si puedes) da una clase STEM en la que los estudiantes usan una herramienta de IA aprobada como parte de una investigación, por ejemplo pedir a la IA que ayude a escribir código de Python en Google Colab para graficar un conjunto de datos públicos, o que genere ideas de diseño para un reto de ingeniería. La clase debe incluir un paso de verificación (los estudiantes revisan el código, los números o las afirmaciones de la IA con datos, un cálculo o una prueba), una tarea en la que los estudiantes explican su razonamiento con sus propias palabras y un nivel de uso de IA para la tarea.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Docentes de ciencias, tecnología, ingeniería y matemáticas, coordinadores pedagógicos y líderes escolares que quieren que los estudiantes usen la IA como herramienta en investigaciones y diseño sin dejar de desarrollar un razonamiento real.",
    startingPoint: "Saben enseñar contenidos STEM, hacer prácticas de laboratorio y asignar conjuntos de problemas. Algunos han usado un asistente de IA para crear problemas de práctica. Pocos tienen una rutina para revisar las matemáticas, el código o las afirmaciones de la IA, o para diseñar tareas en las que el razonamiento del estudiante siga siendo visible.",
    gap: "La IA comete errores con mucha seguridad en matemáticas de varios pasos, código, diagramas y citas, y puede resolver muchos problemas del libro por los estudiantes. Los docentes necesitan clases en las que los estudiantes usen la IA como lo harían científicos e ingenieros: como una ayuda cuyo resultado es una hipótesis que hay que probar, con los estudiantes explicando su propio razonamiento.",
    constraints: [
      "Tiempo: lecciones cortas que caben en un periodo de planificación",
      "Dispositivos: una computadora de la escuela; algunas herramientas (Google Colab, Teachable Machine) necesitan cuentas y la aprobación del distrito",
      "Privacidad y reglas: revisa la política del distrito y los términos de la herramienta antes de que los estudiantes usen cualquier IA o herramienta en línea",
      "Los recursos gratuitos de las herramientas no están garantizados, así que los planes necesitan una alternativa y los estudiantes deben guardar su trabajo seguido",
      "Cada problema, explicación y fragmento de código hecho con IA debe revisarse antes de que lo vean los estudiantes"
    ],
    prerequisites: "Ninguno. Los docentes que no conocen las herramientas de IA pueden tomar primero un curso introductorio de IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con problemas de práctica STEM hechos con IA y sus soluciones", action: "verificar cada solución con un segundo método, una calculadora o una herramienta para graficar", standard: "antes de que los estudiantes vean cualquier problema" },
    { id: "O2", condition: "Con un conjunto de datos públicos y una IA que ayuda a programar", action: "planear una investigación con datos en la que los estudiantes comentan cada línea de código, predicen el resultado y comprueban un número a mano", standard: "incluyendo cada paso que muestra comprensión" },
    { id: "O3", condition: "Con una explicación, una analogía o un diagrama hecho por la IA", action: "encontrar y corregir concepciones erróneas comparándolo con tu currículo o una fuente confiable", standard: "antes de usarlo en clase" },
    { id: "O4", condition: "Usando una herramienta gratuita o una actividad con tarjetas sin dispositivos", action: "explicar cómo el aprendizaje automático usa datos de entrenamiento para hacer predicciones y por qué importa que los datos sean variados", standard: "con un ejemplo que funcione en el aula" },
    { id: "O5", condition: "Con una afirmación de la IA, como una estadística, una conversión o una cita", action: "aplicar la rutina de afirmación, evidencia, prueba y conclusión", standard: "llegando a aceptar, rechazar o no hay suficiente evidencia, con una razón" },
    { id: "O6", condition: "Al planear una tarea STEM o un reto de diseño", action: "diseñar una tarea en la que los estudiantes muestran su propio razonamiento y etiquetar su nivel de uso de IA", standard: "con un paso de verificación y una explicación con palabras de los estudiantes" }
  ],
  chapters: [
    {
      name: "Capítulo 1: La IA como herramienta STEM",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conjuntos de problemas con soluciones verificadas",
          minutes: 5,
          goal: "Generar práctica STEM con IA y verificar cada solución.",
          text: [
            "La IA puede producir muchos problemas de práctica rápido: problemas verbales con contextos del mundo real, problemas en varios niveles de dificultad y soluciones resueltas paso a paso. Eso ahorra tiempo, pero se sabe que la IA comete errores de aritmética y de razonamiento, sobre todo en problemas de varios pasos, y puede dar una respuesta equivocada con total seguridad.",
            "Por eso, verifica cada solución. Resuélvela tú, compruébala con una calculadora o una herramienta de gráficas como Desmos, o pide a la IA que revise su respuesta con un segundo método y compara. Si los dos métodos no coinciden, resuélvelo tú.",
            "Pide problemas con números redondos para practicar, o con números realistas y desordenados para aplicar. Pide los errores comunes que cometen los estudiantes en cada problema; son buenas preguntas para conversar."
          ],
          steps: ["Pide problemas del nivel y el contexto que necesitas.", "Pide soluciones paso a paso.", "Resuelve o comprueba cada respuesta con una calculadora o una herramienta de gráficas.", "Pide un segundo método y compara.", "Pide los errores comunes para conversar."],
          words: [["Solución resuelta", "una solución que muestra todos los pasos."], ["Verificar", "comprobar que algo es correcto usando otro método u otra fuente."]],
          slides: [
            { title: "Práctica rápida", bullets: ["Problemas verbales del mundo real", "Varios niveles de dificultad", "Soluciones paso a paso"] },
            { title: "La IA se equivoca en matemáticas", bullets: ["Sobre todo en problemas de varios pasos", "Puede equivocarse con seguridad", "Verifica cada respuesta"] },
            { title: "Cómo verificar", bullets: ["Resuélvelo tú", "Calculadora o herramienta de gráficas como Desmos", "Segundo método; compara"] }
          ],
          tryIt: "Pide a la IA seis problemas de varios pasos sobre un tema que enseñas, con soluciones. Verifica cada uno y cuenta cuántos estaban mal.",
          youCanNow: "generar práctica STEM con IA y verificar cada solución antes de que la vean los estudiantes.",
          quickCheck: [
            { objective: "O1", q: "¿Dónde es especialmente probable que la IA se equivoque en matemáticas?", options: ["Al copiar el texto de un problema", "En problemas de varios pasos", "Al escribir el contexto de un problema verbal", "Al elegir números sencillos"], answer: 1, why: "La IA comete errores de cálculo y de razonamiento, sobre todo cuando hay varios pasos." },
            { objective: "O1", q: "La solución paso a paso de la IA y tu comprobación con calculadora dan respuestas distintas. ¿Qué harías?", options: ["Confiar en la IA porque mostró los pasos", "Confiar en la calculadora sin mirar", "Quitar el problema sin revisarlo", "Resolver el problema tú mismo"], answer: 3, why: "Cuando dos métodos no coinciden, la lección dice que lo resuelvas tú mismo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Investigaciones con datos y la IA como ayudante de programación",
          minutes: 6,
          goal: "Planear una investigación con datos en la que la IA ayuda a escribir código que los estudiantes revisan y explican.",
          text: [
            "Los datos reales hacen real la enseñanza STEM. Los estudiantes pueden investigar conjuntos de datos públicos (clima, salud, deportes, medio ambiente) en Google Colab, un cuaderno de Python gratuito en el navegador; necesita una cuenta de Google y los recursos gratuitos no están garantizados, así que hay que guardar el trabajo seguido. Revisa primero las reglas de tu distrito sobre cuentas de Google para estudiantes.",
            "La IA puede ser una ayudante de programación: los estudiantes describen lo que quieren (“lee este CSV y haz una gráfica de líneas de la temperatura por mes”) y la IA sugiere código. Así, muchos estudiantes pueden ejecutar código que todavía no podrían escribir solos, y aprender de él.",
            "Incluye la comprensión: los estudiantes deben agregar un comentario a cada línea explicando qué hace, predecir la gráfica antes de ejecutar el código y comprobar a mano un número del resultado. Si no pueden explicar el código, todavía no lo aprendieron."
          ],
          steps: ["Elige un conjunto de datos públicos y una pregunta.", "Los estudiantes piden a la IA ayuda para escribir el código de un paso.", "Los estudiantes comentan cada línea con sus propias palabras.", "Predicen el resultado y luego ejecutan el código.", "Comprueban un número a mano."],
          words: [["Conjunto de datos", "una colección organizada de datos, a menudo una tabla."], ["CSV", "un formato de archivo sencillo para tablas, con los valores separados por comas."], ["Comentario de código", "una nota en el código, que a menudo empieza con #, que explica qué hace el código."]],
          slides: [
            { title: "Datos reales, herramientas gratuitas", bullets: ["Datos públicos: clima, salud, deportes", "Google Colab: gratuito, en el navegador", "Revisa las reglas del distrito sobre cuentas estudiantiles"] },
            { title: "La IA como ayudante de programación", bullets: ["Describe el paso con palabras", "La IA sugiere código", "Los estudiantes ejecutan lo que aún no podrían escribir"] },
            { title: "Construir comprensión", bullets: ["Comentar cada línea", "Predecir y luego ejecutar", "Comprobar un número a mano"] }
          ],
          sources: [{ name: "Preguntas frecuentes de Google Colab", url: "https://research.google.com/colaboratory/faq.html" }],
          tryIt: "Busca un conjunto de datos públicos sobre un tema que interese a tus estudiantes. Usa la IA para ayudarte a escribir en Colab un código que grafique una variable, agrega un comentario a cada línea y comprueba un número a mano.",
          youCanNow: "planear una investigación con datos en la que la IA ayuda con el código y los estudiantes muestran comprensión.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es Google Colab?", options: ["Un cuaderno de Python gratuito que funciona en el navegador", "Un programa de estadística de pago", "Una herramienta que solo hace diapositivas", "Un conjunto de datos del clima"], answer: 0, why: "Colab permite a los estudiantes ejecutar Python en el navegador con una cuenta de Google." },
            { objective: "O2", q: "Un estudiante ejecutó un código escrito por la IA y obtuvo una gráfica, pero no puede decir qué hace el código. ¿Qué harías?", options: ["Aceptar la gráfica como trabajo terminado", "Pedirle que comente cada línea con sus palabras y compruebe un número a mano", "Pedirle a la IA que escriba un programa más largo", "Bajarle la nota y seguir adelante"], answer: 1, why: "Si los estudiantes no pueden explicar el código, todavía no lo han aprendido." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Simulaciones, apoyos visuales y explicaciones",
          minutes: 5,
          goal: "Usar la IA para crear explicaciones y apoyos visuales, y revisarlos en busca de concepciones erróneas.",
          text: [
            "La IA puede explicar ideas STEM de varias formas (una analogía, paso a paso, una historia) y sugerir diagramas, simulaciones o demostraciones. Herramientas gratuitas de simulación y de gráficas como las simulaciones PhET y Desmos permiten a los estudiantes explorar; la IA puede ayudarte a escribir las preguntas guía.",
            "Cuidado con las concepciones erróneas. Las analogías de la IA pueden confundir (por ejemplo, explicar la corriente eléctrica con el flujo del agua de formas que dejan de funcionar), y los diagramas generados con IA pueden ser científicamente incorrectos. Revisa cada explicación con tu currículo y una fuente confiable.",
            "Una práctica útil en clase: da a los estudiantes una explicación de la IA con un error (intencional o real) y pídeles que lo encuentren y lo corrijan. Encontrar errores en lo que produce la IA es una habilidad científica."
          ],
          steps: ["Pide a la IA dos o tres explicaciones de un concepto.", "Revisa cada una con tu currículo y una fuente confiable.", "Usa la IA para escribir preguntas guía para una simulación.", "Revisa la exactitud científica de los diagramas.", "Pide a los estudiantes que encuentren errores en una explicación de la IA."],
          words: [["Simulación", "un modelo por computadora que permite explorar cómo funciona algo."], ["Analogía", "explicar algo comparándolo con algo conocido."], ["Concepción errónea", "una idea equivocada común sobre cómo funciona algo."]],
          slides: [
            { title: "Explicaciones y simulaciones", bullets: ["Varias formas de explicar una idea", "Preguntas guía para PhET o Desmos"] },
            { title: "Cuidado con las concepciones erróneas", bullets: ["Las analogías pueden confundir", "Los diagramas de IA pueden estar mal", "Revisa con una fuente confiable"] },
            { title: "Encuentra el error", bullets: ["Da a los estudiantes una explicación de IA con fallas", "Ellos la encuentran y la corrigen"] }
          ],
          tryIt: "Pide a la IA que explique de dos formas distintas un concepto STEM que enseñas. Encuentra cualquier concepción errónea en cada una y escribe una tarea de “encuentra el error” para los estudiantes.",
          youCanNow: "usar explicaciones y simulaciones con IA detectando sus concepciones erróneas.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es el riesgo de una analogía de la IA en ciencias?", options: ["Siempre es demasiado larga", "No se puede imprimir", "Puede confundir en el punto donde la analogía deja de funcionar", "Solo funciona en matemáticas"], answer: 2, why: "Analogías como comparar la corriente eléctrica con el agua pueden fallar y crear concepciones erróneas." },
            { objective: "O3", q: "Un diagrama hecho con IA que piensas mostrar parece estar mal en una parte. ¿Qué harías?", options: ["Compararlo con tu currículo o una fuente confiable y corregirlo", "Mostrarlo de todos modos porque lo hizo la IA", "Pedir a los estudiantes que lo memoricen", "Borrar todos tus diagramas hechos con IA"], answer: 0, why: "Los diagramas de la IA pueden estar científicamente mal, así que revísalos antes de usarlos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La IA como herramienta STEM",
        questions: [
          { objective: "O1", q: "La IA da una solución paso a paso a un problema de varios pasos. Debes:", options: ["Usarla tal cual", "Alargarla", "Verificarla antes de que la vean los estudiantes", "Borrar los pasos"], answer: 2, why: "La IA comete errores de aritmética y de razonamiento." },
          { objective: "O1", q: "Una buena forma de verificar una respuesta de la IA es:", options: ["Comprobarla con un segundo método o una calculadora", "Hacer otra vez la misma pregunta y aceptar la misma respuesta", "Confiar si suena segura", "Pedir a un estudiante que adivine"], answer: 0, why: "Un segundo método detecta errores." },
          { objective: "O2", q: "Los recursos gratuitos de Google Colab:", options: ["Están garantizados y son ilimitados", "Solo son de pago", "Son solo para docentes", "No están garantizados; guarda el trabajo seguido"], answer: 3, why: "Colab dice que los recursos gratuitos no están garantizados." },
          { objective: "O2", q: "Los estudiantes usaron la IA para escribir código. ¿Cómo muestran que lo entienden?", options: ["Lo ejecutan sin leerlo", "Comentan cada línea con sus palabras y comprueban un resultado a mano", "Lo copian a otro cuaderno", "Piden a la IA que se lo explique al docente"], answer: 1, why: "Explicar y comprobar construyen comprensión." },
          { objective: "O3", q: "¿Por qué dar a los estudiantes una explicación de la IA con un error?", options: ["Para confundirlos", "Es una prueba de velocidad", "Para ahorrar tiempo", "Encontrar errores en lo que produce la IA es una habilidad científica"], answer: 3, why: "Revisar afirmaciones es lo que hacen los científicos." }
        ]
      }
    },
    {
      name: "Capítulo 2: La IA como tema STEM",
      lessons: [
        {
          objectives: ["O4"],
          title: "Cómo aprenden las máquinas a partir de datos",
          minutes: 6,
          goal: "Enseñar la idea básica del aprendizaje automático con un ejemplo práctico.",
          text: [
            "El aprendizaje automático es un tema STEM que los estudiantes pueden entender. La idea central: en lugar de escribir reglas, mostramos a un programa muchos ejemplos etiquetados (datos de entrenamiento) y este encuentra patrones; luego hace predicciones con ejemplos nuevos. Su exactitud depende de los datos: pocos ejemplos, o ejemplos poco variados, llevan a predicciones equivocadas.",
            "Práctica: herramientas gratuitas como Teachable Machine de Google permiten a los estudiantes entrenar en el navegador un clasificador sencillo de imágenes o sonidos; revisa sus términos y la aprobación de tu distrito antes de que la usen los estudiantes. También sirve una versión desconectada: los estudiantes clasifican tarjetas de animales por sus rasgos, escriben reglas y luego las prueban con tarjetas nuevas.",
            "Después, haz las grandes preguntas: ¿Qué pasa si los datos de entrenamiento muestran un solo tipo de ejemplo? ¿Cómo mediríamos la exactitud? Esto conecta el aprendizaje automático con la estadística, la calidad de los datos y la equidad."
          ],
          steps: ["Explica: entran ejemplos etiquetados, se encuentran patrones, salen predicciones.", "Entrena un clasificador sencillo, o haz la clasificación de tarjetas sin dispositivos.", "Pruébalo con ejemplos nuevos.", "Cambia los datos de entrenamiento y mira qué pasa.", "Conversen sobre exactitud, calidad de los datos y equidad."],
          words: [["Aprendizaje automático", "programas que aprenden patrones a partir de ejemplos en lugar de seguir reglas escritas a mano."], ["Datos de entrenamiento", "los ejemplos etiquetados de los que aprende un programa."], ["Clasificador", "un programa que ordena cosas en categorías."]],
          slides: [
            { title: "El aprendizaje automático en una línea", bullets: ["Entran ejemplos etiquetados", "Se encuentran patrones", "Predicciones con ejemplos nuevos"] },
            { title: "Práctica", bullets: ["Entrenar un clasificador sencillo en el navegador", "O clasificar tarjetas sin dispositivos", "Revisa primero los términos y la aprobación"] },
            { title: "Grandes preguntas", bullets: ["¿Y si los datos son de un solo tipo?", "¿Cómo medimos la exactitud?", "Conexión con estadística y equidad"] }
          ],
          tryIt: "Planea una actividad de 20 minutos en la que los estudiantes entrenen (o simulen sin dispositivos) un clasificador sencillo, luego cambien los datos de entrenamiento y expliquen qué pasó con sus predicciones.",
          youCanNow: "enseñar la idea central del aprendizaje automático con una actividad práctica.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es la idea central del aprendizaje automático?", options: ["Una persona escribe cada regla a mano", "El programa memoriza una sola respuesta", "La computadora adivina al azar", "Un programa encuentra patrones en muchos ejemplos etiquetados"], answer: 3, why: "El aprendizaje automático aprende de datos de entrenamiento en lugar de reglas escritas a mano." },
            { objective: "O4", q: "Tu grupo no tiene dispositivos para usar Teachable Machine. ¿Qué harías?", options: ["Saltarte el tema", "Hacer la versión sin dispositivos: clasificar tarjetas de animales por sus rasgos, escribir reglas y probarlas con tarjetas nuevas", "Mostrar solo un video", "Esperar hasta el próximo año"], answer: 1, why: "La actividad con tarjetas sin dispositivos enseña la misma idea." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar las afirmaciones de la IA como un científico",
          minutes: 5,
          goal: "Enseñar a los estudiantes una rutina para poner a prueba las afirmaciones de la IA con evidencia.",
          text: [
            "El pensamiento científico es la mejor defensa contra los errores de la IA. Enseña una rutina de cuatro pasos: Afirmación: ¿qué dice exactamente la IA? Evidencia: ¿qué datos o fuente mostrarían que es cierto? Prueba: compara la afirmación con datos, un cálculo, un experimento o una fuente confiable. Conclusión: aceptar, rechazar o “no hay suficiente evidencia”.",
            "Practica con afirmaciones STEM en las que la IA podría equivocarse: una conversión de unidades, una estadística, una afirmación de causa y efecto, una fórmula química o una cita que quizá no exista. Los estudiantes aprenden que las fuentes de la IA hay que encontrarlas y revisarlas, no creerlas.",
            "Esta rutina sirve en todas las materias y construye el hábito que quieres para la vida: lo que produce la IA es una hipótesis que hay que probar, no una respuesta para copiar."
          ],
          steps: ["Afirmación: di exactamente qué dice la IA.", "Evidencia: ¿qué mostraría que es cierto?", "Prueba: datos, cálculo, experimento o fuente confiable.", "Conclusión: aceptar, rechazar o no hay suficiente evidencia."],
          words: [["Afirmación", "una declaración de que algo es cierto."], ["Hipótesis", "una idea que se puede poner a prueba."], ["Cita", "una referencia a una fuente de información."]],
          slides: [
            { title: "Rutina de cuatro pasos", bullets: ["Afirmación", "Evidencia", "Prueba", "Conclusión"] },
            { title: "Afirmaciones para practicar", bullets: ["Conversiones de unidades y estadísticas", "Causa y efecto", "Citas que quizá no existan"] },
            { title: "El hábito para la vida", bullets: ["Lo que produce la IA es una hipótesis", "Pruébalo, no lo copies"] }
          ],
          tryIt: "Reúne tres afirmaciones STEM de una herramienta de IA sobre un tema que enseñas. Pasa cada una por la rutina de cuatro pasos y anota cuáles se sostuvieron.",
          youCanNow: "enseñar a los estudiantes a poner a prueba las afirmaciones de la IA como científicos.",
          quickCheck: [
            { objective: "O5", q: "En la rutina de verificación, ¿qué viene justo después de \"Afirmación\"?", options: ["Conclusión", "Prueba", "Evidencia", "Publicación"], answer: 2, why: "La rutina es Afirmación, Evidencia, Prueba, Conclusión." },
            { objective: "O5", q: "La IA da a los estudiantes una estadística con una cita. ¿Qué deben hacer?", options: ["Copiar la cita en su informe", "Preguntarle a la IA si la cita es real", "Ignorar la estadística", "Encontrar la fuente y comprobar que existe y dice eso"], answer: 3, why: "Las fuentes de la IA hay que encontrarlas y revisarlas, no creerlas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Diseño de ingeniería y tareas que muestran el razonamiento",
          minutes: 6,
          goal: "Usar la IA en el proceso de diseño de ingeniería y diseñar tareas en las que el razonamiento sigue siendo visible.",
          text: [
            "En el proceso de diseño de ingeniería (definir el problema, generar ideas, planear, construir, probar, mejorar), la IA es más útil en las etapas de generar ideas y mejorar: producir muchas ideas de diseño, sugerir pruebas o explicar por qué falló un prototipo. Los estudiantes siguen eligiendo, construyendo, probando y justificando.",
            "Como la IA puede resolver muchos problemas de libro de texto, diseña tareas en las que el razonamiento sea visible: pide a los estudiantes que expliquen por qué funciona un método, comparen dos métodos, encuentren un error, hagan una predicción antes de calcular o apliquen la idea a sus propios datos o diseño. Las explicaciones orales y los cuadernos de laboratorio muestran el pensamiento.",
            "Etiqueta cada tarea con un nivel de uso de IA para que los estudiantes sepan cuándo la IA es una herramienta y cuándo deben mostrar la habilidad solos, y explica por qué."
          ],
          steps: ["Usa la IA para generar ideas y mejorar en el diseño.", "Los estudiantes eligen, construyen, prueban y justifican.", "Diseña tareas: explicar, comparar, encontrar errores, predecir, aplicar.", "Usa explicaciones orales y cuadernos de laboratorio.", "Etiqueta el nivel de uso de IA de cada tarea."],
          words: [["Proceso de diseño de ingeniería", "el ciclo de definir un problema, diseñar, construir, probar y mejorar."], ["Prototipo", "un modelo inicial construido para probar una idea."], ["Cuaderno de laboratorio", "un registro de lo que un estudiante hizo, observó y concluyó."]],
          slides: [
            { title: "La IA en el diseño de ingeniería", bullets: ["Generar muchas ideas", "Sugerir pruebas; explicar fallas", "Los estudiantes eligen, construyen, prueban, justifican"] },
            { title: "Mantén visible el razonamiento", bullets: ["Explicar por qué, comparar métodos", "Encontrar el error, predecir primero", "Aplicar a sus propios datos o diseño"] },
            { title: "Etiqueta el nivel de uso de IA", bullets: ["Cuándo la IA es una herramienta", "Cuándo la habilidad se muestra sin ayuda"] }
          ],
          tryIt: "Tarea final: planea tu clase STEM en la que los estudiantes usan una herramienta de IA aprobada en una investigación o un reto de diseño, con un paso de verificación, una tarea de razonamiento con sus propias palabras y un nivel de uso de IA. Dala si puedes y anota lo que encontraron los estudiantes al revisar la IA.",
          youCanNow: "liderar un aprendizaje STEM en el que los estudiantes usan la IA como herramienta, la revisan con rigor y mantienen visible su propio razonamiento.",
          quickCheck: [
            { objective: "O6", q: "¿En qué etapas del proceso de diseño de ingeniería es más útil la IA?", options: ["Generar ideas y mejorar", "Solo construir y probar", "Solo definir el problema", "En ninguna etapa"], answer: 0, why: "La IA ayuda a generar ideas y a explicar fallas; los estudiantes siguen eligiendo, construyendo, probando y justificando." },
            { objective: "O6", q: "La IA puede resolver tu conjunto de problemas del libro. ¿Qué cambiarías para que el razonamiento siga siendo visible?", options: ["Asignar más problemas del mismo tipo", "Prohibir las calculadoras", "Pedir a los estudiantes que primero predigan y expliquen por qué funciona el método", "Dar las respuestas por adelantado"], answer: 2, why: "Predecir, explicar y comparar métodos muestran un razonamiento que la IA no puede hacer por ellos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: La IA como tema STEM",
        questions: [
          { objective: "O4", q: "En el aprendizaje automático, los datos de entrenamiento son:", options: ["La calificación final", "El código del programa", "Los ejemplos etiquetados de los que aprende un programa", "Una contraseña"], answer: 2, why: "Los patrones se aprenden de los ejemplos." },
          { objective: "O4", q: "Un clasificador entrenado solo con fotos de un tipo de perro probablemente:", options: ["Hará predicciones equivocadas con ejemplos variados", "Reconocerá perfectamente a todos los animales", "No funcionará", "Será más rápido"], answer: 0, why: "Los datos de un solo tipo llevan a malas predicciones." },
          { objective: "O5", q: "¿Cuál es el paso 3 de la rutina de verificación?", options: ["Afirmación", "Prueba", "Evidencia", "Conclusión"], answer: 1, why: "Se prueba la afirmación con datos o una fuente confiable." },
          { objective: "O5", q: "La IA da una cita para una estadística. Los estudiantes deben:", options: ["Encontrar la fuente y comprobar que existe y dice eso", "Copiarla", "Ignorarla", "Citar a la IA en su lugar"], answer: 0, why: "Las citas de la IA pueden no existir." },
          { objective: "O6", q: "¿Qué tarea mantiene más visible el razonamiento del estudiante?", options: ["Resolver 20 problemas del libro en casa", "Solo ver un video", "Copiar la clave de respuestas", "Predecir antes de calcular y explicar por qué funciona el método"], answer: 3, why: "Predecir y explicar muestran el pensamiento." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA en la educación STEM",
    questions: [
      { objective: "O1", q: "¿Qué significa STEM?", options: ["Estudiantes, docentes, editores, gerentes", "Ciencias, tecnología, ingeniería y matemáticas", "Estudiar, probar, evaluar, memorizar", "Programas, herramientas, correo, medios"], answer: 1, why: "Son los cuatro campos." },
      { objective: "O1", q: "La IA es especialmente propensa a errores en:", options: ["Listas de colores", "Mensajes de saludo", "Problemas de matemáticas de varios pasos", "La ortografía de palabras comunes"], answer: 2, why: "El razonamiento de varios pasos causa errores." },
      { objective: "O1", q: "Desmos sirve para:", options: ["Correo electrónico", "Calificar ensayos", "Graficar y comprobar matemáticas", "Pasar lista"], answer: 2, why: "Las herramientas de gráficas verifican respuestas de forma visual." },
      { objective: "O1", q: "Pedir a la IA los errores comunes en un problema te da:", options: ["Preguntas para conversar sobre concepciones erróneas", "La respuesta final", "Una calificación", "Un atajo"], answer: 0, why: "Los errores son buenos temas de conversación." },
      { objective: "O2", q: "Google Colab es:", options: ["Una aplicación de video", "Una computadora portátil de pago", "Una herramienta de calificación", "Un cuaderno de Python gratuito en el navegador"], answer: 3, why: "Ejecuta Python en línea." },
      { objective: "O2", q: "Un archivo CSV es:", options: ["Una imagen", "Un archivo sencillo de tabla con valores separados por comas", "Un video", "Un archivo de contraseñas"], answer: 1, why: "Es común para conjuntos de datos." },
      { objective: "O2", q: "Un comentario de código explica:", options: ["Nada", "El clima", "La calificación del estudiante", "Qué hace una línea de código"], answer: 3, why: "Los comentarios muestran comprensión." },
      { objective: "O2", q: "Predecir una gráfica antes de ejecutar el código ayuda a los estudiantes a:", options: ["Ejecutar el código más rápido", "Saltarse el aprendizaje", "Pensar en lo que debería hacer el código", "Evitar errores de forma automática"], answer: 2, why: "Predecir construye razonamiento." },
      { objective: "O3", q: "Las analogías de la IA en ciencias pueden:", options: ["Confundir si dejan de funcionar", "No equivocarse nunca", "Reemplazar los experimentos", "Probar afirmaciones"], answer: 0, why: "Revisa las analogías en busca de concepciones erróneas." },
      { objective: "O3", q: "Una simulación permite a los estudiantes:", options: ["No pensar", "Explorar cómo funciona algo con un modelo", "Calificarse solos", "Saltarse la clase"], answer: 1, why: "Los modelos apoyan la exploración." },
      { objective: "O4", q: "El aprendizaje automático encuentra:", options: ["Patrones en ejemplos etiquetados", "Solo reglas escritas a mano", "Contraseñas", "Archivos perdidos"], answer: 0, why: "Aprende de los datos." },
      { objective: "O4", q: "Si los datos de entrenamiento no son variados, las predicciones:", options: ["Se detienen por completo", "Siempre aciertan", "Son más rápidas", "Pueden fallar con ejemplos nuevos"], answer: 3, why: "La calidad de los datos decide la exactitud." },
      { objective: "O4", q: "Antes de que los estudiantes usen una herramienta como Teachable Machine, revisa:", options: ["Su color", "Sus términos y la aprobación de tu distrito", "Su popularidad", "Nada"], answer: 1, why: "El uso estudiantil necesita aprobación y revisión de edad." },
      { objective: "O4", q: "Una actividad de aprendizaje automático sin dispositivos usa:", options: ["Solo teléfonos", "Solo computadoras portátiles", "Tarjetas y reglas, sin dispositivos", "Robots"], answer: 2, why: "Las ideas pueden enseñarse sin dispositivos." },
      { objective: "O5", q: "En la rutina de verificación, la “conclusión” puede ser:", options: ["Siempre rechazar", "Siempre aceptar", "Aceptar, rechazar o no hay suficiente evidencia", "Saltarla"], answer: 2, why: "Decide la evidencia." },
      { objective: "O5", q: "Lo que produce la IA debe tratarse como:", options: ["Una hipótesis que hay que probar", "Una respuesta final", "Una ley", "Una calificación"], answer: 0, why: "Prueba antes de confiar." },
      { objective: "O6", q: "En el diseño de ingeniería, la IA es más útil para:", options: ["Calificar diseños", "Construir el prototipo por los estudiantes", "Probar ella misma los materiales físicos", "Generar ideas y mejorar"], answer: 3, why: "Los estudiantes siguen construyendo, probando y justificando." },
      { objective: "O6", q: "Un prototipo es:", options: ["Un producto final", "Un modelo inicial para probar una idea", "Una calificación de examen", "Una licencia de software"], answer: 1, why: "Los prototipos se prueban y se mejoran." },
      { objective: "O6", q: "Un cuaderno de laboratorio muestra:", options: ["La asistencia", "Solo la respuesta final", "El plan del docente", "Lo que un estudiante hizo, observó y concluyó"], answer: 3, why: "Hace visible el pensamiento." },
      { objective: "O6", q: "Cada tarea STEM debe etiquetarse con:", options: ["Una contraseña", "Un precio", "Un nivel de uso de IA", "Nada"], answer: 2, why: "Los estudiantes necesitan saber cuándo se permite la IA." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      4,
      7,
      8,
      10,
      11,
      14,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "La IA como herramienta en una investigación",
        objective: "O2",
        notYet: "La IA hace la investigación por los estudiantes, o la herramienta no está aprobada.",
        meets: "Los estudiantes usan una herramienta de IA aprobada para una parte clara, como escribir código o generar ideas de diseño.",
        exceeds: "Los estudiantes también predicen qué debería mostrar el resultado de la IA antes de ejecutarlo."
      },
      {
        name: "Paso de verificación",
        objective: "O5",
        notYet: "No hay un paso en el que los estudiantes revisen lo que produce la IA.",
        meets: "Los estudiantes revisan el código, los números o las afirmaciones de la IA con datos, un cálculo o una prueba.",
        exceeds: "Los estudiantes anotan una conclusión: aceptar, rechazar o no hay suficiente evidencia, con una razón."
      },
      {
        name: "Razonamiento con sus propias palabras",
        objective: "O6",
        notYet: "Los estudiantes solo entregan una respuesta o una gráfica.",
        meets: "Una tarea en la que los estudiantes explican su razonamiento con sus propias palabras.",
        exceeds: "Los estudiantes también comparan dos métodos o encuentran un error."
      },
      {
        name: "Nivel de uso de IA",
        objective: "O6",
        notYet: "No se indica un nivel de uso de IA.",
        meets: "La tarea está etiquetada con un nivel de uso de IA.",
        exceeds: "El plan explica a los estudiantes por qué ese nivel es el adecuado para la tarea."
      },
      {
        name: "El docente revisó los materiales",
        objective: "O1",
        notYet: "No se revisaron los problemas, el código ni las explicaciones hechos con IA.",
        meets: "Cada solución y explicación hecha con IA se revisó antes de la clase.",
        exceeds: "El plan nombra el método usado para revisar, como una calculadora, Desmos o una fuente confiable."
      }
    ]
  },
  evaluation: {
    results: [
      "Docentes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Docentes que dan una clase STEM con un paso de verificación de la IA en los 30 días siguientes (encuesta de seguimiento)",
      "Estudiantes que pueden nombrar un error de la IA que encontraron y cómo lo comprobaron",
      "Docentes que toman otro curso de Koach Learn sobre IA para educadores"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con un asistente de IA que tu distrito permita",
      "Herramientas gratuitas como Desmos, las simulaciones PhET, Google Colab o Teachable Machine, donde tu distrito las apruebe",
      "Una clase STEM o un reto de diseño que darás pronto",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Hazlo como una sesión de departamento: respondan juntos la prueba inicial y luego pide a cada docente que planee una clase para su propio grupo.",
      "Revisa la aprobación del distrito y las reglas de cuentas de estudiantes antes de que alguien pruebe Colab o Teachable Machine con estudiantes.",
      "Pide a las parejas que intercambien un conjunto de problemas hecho con IA y verifiquen las soluciones del otro con un segundo método.",
      "Usa la actividad con tarjetas sin dispositivos cuando los dispositivos o las aprobaciones no estén listos.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
