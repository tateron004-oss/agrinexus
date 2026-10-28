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
  chapters: [
    {
      name: "Capítulo 1: La IA como herramienta STEM",
      lessons: [
        {
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
          youCanNow: "generar práctica STEM con IA y verificar cada solución antes de que la vean los estudiantes."
        },
        {
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
          youCanNow: "planear una investigación con datos en la que la IA ayuda con el código y los estudiantes muestran comprensión."
        },
        {
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
          youCanNow: "usar explicaciones y simulaciones con IA detectando sus concepciones erróneas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La IA como herramienta STEM",
        questions: [
          { q: "La IA da una solución paso a paso a un problema de varios pasos. Debes:", options: ["Usarla tal cual", "Alargarla", "Verificarla antes de que la vean los estudiantes", "Borrar los pasos"], answer: 2, why: "La IA comete errores de aritmética y de razonamiento." },
          { q: "Una buena forma de verificar una respuesta de la IA es:", options: ["Comprobarla con un segundo método o una calculadora", "Hacer otra vez la misma pregunta y aceptar la misma respuesta", "Confiar si suena segura", "Pedir a un estudiante que adivine"], answer: 0, why: "Un segundo método detecta errores." },
          { q: "Los recursos gratuitos de Google Colab:", options: ["Están garantizados y son ilimitados", "Solo son de pago", "Son solo para docentes", "No están garantizados; guarda el trabajo seguido"], answer: 3, why: "Colab dice que los recursos gratuitos no están garantizados." },
          { q: "Los estudiantes usaron la IA para escribir código. ¿Cómo muestran que lo entienden?", options: ["Lo ejecutan sin leerlo", "Comentan cada línea con sus palabras y comprueban un resultado a mano", "Lo copian a otro cuaderno", "Piden a la IA que se lo explique al docente"], answer: 1, why: "Explicar y comprobar construyen comprensión." },
          { q: "¿Por qué dar a los estudiantes una explicación de la IA con un error?", options: ["Para confundirlos", "Es una prueba de velocidad", "Para ahorrar tiempo", "Encontrar errores en lo que produce la IA es una habilidad científica"], answer: 3, why: "Revisar afirmaciones es lo que hacen los científicos." }
        ]
      }
    },
    {
      name: "Capítulo 2: La IA como tema STEM",
      lessons: [
        {
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
          youCanNow: "enseñar la idea central del aprendizaje automático con una actividad práctica."
        },
        {
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
          youCanNow: "enseñar a los estudiantes a poner a prueba las afirmaciones de la IA como científicos."
        },
        {
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
          youCanNow: "liderar un aprendizaje STEM en el que los estudiantes usan la IA como herramienta, la revisan con rigor y mantienen visible su propio razonamiento."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: La IA como tema STEM",
        questions: [
          { q: "En el aprendizaje automático, los datos de entrenamiento son:", options: ["La calificación final", "El código del programa", "Los ejemplos etiquetados de los que aprende un programa", "Una contraseña"], answer: 2, why: "Los patrones se aprenden de los ejemplos." },
          { q: "Un clasificador entrenado solo con fotos de un tipo de perro probablemente:", options: ["Hará predicciones equivocadas con ejemplos variados", "Reconocerá perfectamente a todos los animales", "No funcionará", "Será más rápido"], answer: 0, why: "Los datos de un solo tipo llevan a malas predicciones." },
          { q: "¿Cuál es el paso 3 de la rutina de verificación?", options: ["Afirmación", "Prueba", "Evidencia", "Conclusión"], answer: 1, why: "Se prueba la afirmación con datos o una fuente confiable." },
          { q: "La IA da una cita para una estadística. Los estudiantes deben:", options: ["Encontrar la fuente y comprobar que existe y dice eso", "Copiarla", "Ignorarla", "Citar a la IA en su lugar"], answer: 0, why: "Las citas de la IA pueden no existir." },
          { q: "¿Qué tarea mantiene más visible el razonamiento del estudiante?", options: ["Resolver 20 problemas del libro en casa", "Solo ver un video", "Copiar la clave de respuestas", "Predecir antes de calcular y explicar por qué funciona el método"], answer: 3, why: "Predecir y explicar muestran el pensamiento." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA en la educación STEM",
    questions: [
      { q: "¿Qué significa STEM?", options: ["Estudiantes, docentes, editores, gerentes", "Ciencias, tecnología, ingeniería y matemáticas", "Estudiar, probar, evaluar, memorizar", "Programas, herramientas, correo, medios"], answer: 1, why: "Son los cuatro campos." },
      { q: "La IA es especialmente propensa a errores en:", options: ["Listas de colores", "Mensajes de saludo", "Problemas de matemáticas de varios pasos", "La ortografía de palabras comunes"], answer: 2, why: "El razonamiento de varios pasos causa errores." },
      { q: "Desmos sirve para:", options: ["Correo electrónico", "Calificar ensayos", "Graficar y comprobar matemáticas", "Pasar lista"], answer: 2, why: "Las herramientas de gráficas verifican respuestas de forma visual." },
      { q: "Pedir a la IA los errores comunes en un problema te da:", options: ["Preguntas para conversar sobre concepciones erróneas", "La respuesta final", "Una calificación", "Un atajo"], answer: 0, why: "Los errores son buenos temas de conversación." },
      { q: "Google Colab es:", options: ["Una aplicación de video", "Una computadora portátil de pago", "Una herramienta de calificación", "Un cuaderno de Python gratuito en el navegador"], answer: 3, why: "Ejecuta Python en línea." },
      { q: "Un archivo CSV es:", options: ["Una imagen", "Un archivo sencillo de tabla con valores separados por comas", "Un video", "Un archivo de contraseñas"], answer: 1, why: "Es común para conjuntos de datos." },
      { q: "Un comentario de código explica:", options: ["Nada", "El clima", "La calificación del estudiante", "Qué hace una línea de código"], answer: 3, why: "Los comentarios muestran comprensión." },
      { q: "Predecir una gráfica antes de ejecutar el código ayuda a los estudiantes a:", options: ["Ejecutar el código más rápido", "Saltarse el aprendizaje", "Pensar en lo que debería hacer el código", "Evitar errores de forma automática"], answer: 2, why: "Predecir construye razonamiento." },
      { q: "Las analogías de la IA en ciencias pueden:", options: ["Confundir si dejan de funcionar", "No equivocarse nunca", "Reemplazar los experimentos", "Probar afirmaciones"], answer: 0, why: "Revisa las analogías en busca de concepciones erróneas." },
      { q: "Una simulación permite a los estudiantes:", options: ["No pensar", "Explorar cómo funciona algo con un modelo", "Calificarse solos", "Saltarse la clase"], answer: 1, why: "Los modelos apoyan la exploración." },
      { q: "El aprendizaje automático encuentra:", options: ["Patrones en ejemplos etiquetados", "Solo reglas escritas a mano", "Contraseñas", "Archivos perdidos"], answer: 0, why: "Aprende de los datos." },
      { q: "Si los datos de entrenamiento no son variados, las predicciones:", options: ["Se detienen por completo", "Siempre aciertan", "Son más rápidas", "Pueden fallar con ejemplos nuevos"], answer: 3, why: "La calidad de los datos decide la exactitud." },
      { q: "Antes de que los estudiantes usen una herramienta como Teachable Machine, revisa:", options: ["Su color", "Sus términos y la aprobación de tu distrito", "Su popularidad", "Nada"], answer: 1, why: "El uso estudiantil necesita aprobación y revisión de edad." },
      { q: "Una actividad de aprendizaje automático sin dispositivos usa:", options: ["Solo teléfonos", "Solo computadoras portátiles", "Tarjetas y reglas, sin dispositivos", "Robots"], answer: 2, why: "Las ideas pueden enseñarse sin dispositivos." },
      { q: "En la rutina de verificación, la “conclusión” puede ser:", options: ["Siempre rechazar", "Siempre aceptar", "Aceptar, rechazar o no hay suficiente evidencia", "Saltarla"], answer: 2, why: "Decide la evidencia." },
      { q: "Lo que produce la IA debe tratarse como:", options: ["Una hipótesis que hay que probar", "Una respuesta final", "Una ley", "Una calificación"], answer: 0, why: "Prueba antes de confiar." },
      { q: "En el diseño de ingeniería, la IA es más útil para:", options: ["Calificar diseños", "Construir el prototipo por los estudiantes", "Probar ella misma los materiales físicos", "Generar ideas y mejorar"], answer: 3, why: "Los estudiantes siguen construyendo, probando y justificando." },
      { q: "Un prototipo es:", options: ["Un producto final", "Un modelo inicial para probar una idea", "Una calificación de examen", "Una licencia de software"], answer: 1, why: "Los prototipos se prueban y se mejoran." },
      { q: "Un cuaderno de laboratorio muestra:", options: ["La asistencia", "Solo la respuesta final", "El plan del docente", "Lo que un estudiante hizo, observó y concluyó"], answer: 3, why: "Hace visible el pensamiento." },
      { q: "Cada tarea STEM debe etiquetarse con:", options: ["Una contraseña", "Un precio", "Un nivel de uso de IA", "Nada"], answer: 2, why: "Los estudiantes necesitan saber cuándo se permite la IA." }
    ]
  }
};
