"use strict";

// Koach Learn course (Spanish translation of youth/youth-ai-school-success.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-school-success-es",
  lang: "es",
  translationOf: "youth-ai-school-success",
  category: "Youth",
  name: "IA para que te vaya bien en la escuela",
  skills: "Planear tu semana escolar, Dividir un proyecto grande en pasos, Entender lecturas difíciles, Recibir comentarios sobre lo que escribes, Hacer un plan de estudio para un examen, Usar la IA dentro de las reglas de la escuela",
  outcome: "usar un asistente de IA gratis, dentro de las reglas de tu escuela, para planear tu semana, dividir una tarea grande en pasos, entender lecturas difíciles, recibir comentarios sobre lo que escribiste y armar un plan de estudio para un examen real.",
  about: [
    "Este curso es para estudiantes de secundaria y preparatoria de unos 13 a 18 años que quieren que la escuela se sienta menos abrumadora. Trata a la IA como una agenda, un entrenador y un compañero de estudio, nunca como alguien que hace tu trabajo por ti.",
    "Vas a planear una semana real, dividir un proyecto grande en pasos pequeños, recibir ayuda para entender una lectura difícil, recibir comentarios sobre un borrador que escribiste y hacer un plan de estudio para un examen que se acerca.",
    "Primero las reglas: cada escuela y cada maestro tiene sus propias reglas sobre la IA. Revísalas, revisa la regla de edad de la herramienta y habla con tu madre, padre o tutor antes de registrarte en cualquier cosa. Usa tu cuenta escolar para las herramientas aprobadas por la escuela. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\"."
  ],
  finalTask: "Escoge un examen o proyecto real de las próximas dos semanas. Usa la IA para hacer un plan de estudio día por día que se acomode a tus clases, actividades y trabajo o quehaceres, luego pídele 5 preguntas de práctica con las respuestas escondidas, contéstalas tú, revísalas con tus apuntes y escribe una línea sobre cómo seguiste las reglas de IA de tu escuela.",
  chapters: [
    {
      name: "Capítulo 1: Organizarte",
      lessons: [
        {
          title: "Planear tu semana escolar",
          minutes: 5,
          goal: "Convertir una lista desordenada de pendientes en un plan semanal sencillo.",
          text: [
            "La escuela, los entrenamientos, los clubes, un trabajo de medio tiempo, los quehaceres y los amigos compiten por tu tiempo. Un asistente de IA puede ayudarte a ponerlo en orden si le das los datos.",
            "Haz una lista de lo que tienes que entregar y cuándo, más tus horarios fijos como entrenamientos o trabajo. Luego pide: \"Esta es mi semana. Haz un plan sencillo con tiempo de estudio cada día, lo más difícil primero y descansos. Que quepa en una pantalla.\"",
            "El plan es un borrador. Mueve las cosas hasta que se acomode a tu vida real y luego pásalo a una agenda, a Google Calendar o a la aplicación de calendario de tu escuela."
          ],
          steps: ["Anota cada pendiente y su fecha de entrega.", "Agrega tus horarios fijos: clases, entrenamientos, trabajo, familia.", "Pide a la IA un plan semanal sencillo con descansos.", "Cámbialo para que te quede y luego cópialo a tu agenda o calendario."],
          words: [["Fecha de entrega", "el día en que hay que entregar un trabajo."], ["Priorizar", "decidir qué hacer primero porque es lo más importante o lo que vence antes."]],
          slides: [
            { title: "Dale los datos a la IA", bullets: ["Qué tienes que entregar y cuándo", "Horarios de entrenamiento, trabajo y familia"] },
            { title: "Pide un plan sencillo", bullets: ["Tiempo de estudio cada día", "Lo más difícil primero", "Con descansos", "Que quepa en una pantalla"] },
            { title: "Hazlo real", bullets: ["Mueve las cosas para que se acomoden a tu vida", "Cópialo a una agenda o calendario"] }
          ],
          tryIt: "Haz una lista de todo lo que tienes que entregar esta semana y tus horarios fijos. Pide a un asistente de IA que tengas permiso de usar que haga un plan semanal sencillo. Cambia una cosa para que se acomode a tu vida y cópialo a una agenda o calendario.",
          youCanNow: "armar con ayuda de la IA un plan semanal realista."
        },
        {
          title: "Dividir un proyecto grande en pasos pequeños",
          minutes: 5,
          goal: "Dividir una tarea grande en pasos pequeños con fechas.",
          text: [
            "Los proyectos grandes asustan porque parecen una sola cosa enorme. Dividirlos en pasos pequeños los hace posibles.",
            "Dale a la IA las instrucciones de la tarea (con tus propias palabras o pegadas, sin información privada) y la fecha de entrega. Pide: \"Divide esto en pasos pequeños que pueda hacer en 30 minutos cada uno, con una fecha para cada paso, para terminar dos días antes.\"",
            "Lee los pasos y asegúrate de que coincidan con lo que pidió tu maestro. Las instrucciones y la rúbrica de tu maestro siempre valen más que el plan de la IA."
          ],
          steps: ["Comparte las instrucciones y la fecha de entrega.", "Pide pasos de 30 minutos con fechas.", "Pide terminar dos días antes.", "Compara los pasos con la rúbrica de tu maestro."],
          words: [["Rúbrica", "la lista que usa tu maestro para calificar el trabajo."], ["Meta intermedia", "una meta pequeña en el camino para terminar una grande."]],
          slides: [
            { title: "Proyecto grande, pasos pequeños", bullets: ["Las tareas enormes asustan", "Los pasos pequeños se sienten posibles"] },
            { title: "Pide a la IA que lo divida", bullets: ["Pasos de 30 minutos", "Una fecha para cada uno", "Terminar dos días antes"] },
            { title: "La rúbrica manda", bullets: ["Compara los pasos con las instrucciones", "Las reglas de tu maestro van primero"] }
          ],
          tryIt: "Toma una tarea grande que tengas ahora o que hayas tenido hace poco. Pide a la IA que la divida en pasos de 30 minutos con fechas. Compáralos con las instrucciones y corrige cualquier paso que no coincida.",
          youCanNow: "convertir una tarea grande en pasos pequeños con fechas."
        },
        {
          title: "Entender una lectura difícil",
          minutes: 5,
          goal: "Usar la IA para entender un texto difícil sin dejar de leerlo tú.",
          text: [
            "Algunas lecturas son difíciles: lenguaje antiguo, palabras de ciencias o párrafos largos. La IA puede ayudarte a entenderlas, siempre que tú sigas leyendo el texto.",
            "Prueba esto: primero lee un párrafo. Luego pide a la IA: \"Explica este párrafo con palabras sencillas\" o \"¿Qué significan estas 3 palabras?\" o \"Dame 3 preguntas para pensar mientras leo.\"",
            "Un resumen de la IA puede dejar fuera cosas o equivocarse, y no reemplaza la lectura para la clase. Úsalo para abrir el texto y luego vuelve a leerlo."
          ],
          steps: ["Lee tú primero el párrafo.", "Pide a la IA que lo explique de forma sencilla o que defina las palabras difíciles.", "Pide preguntas que guíen tu lectura.", "Vuelve a leer el párrafo con lo que ahora entiendes."],
          words: [["Resumen", "una versión corta de las ideas principales."], ["Contexto", "las palabras e ideas alrededor de una palabra que ayudan a explicar su significado."]],
          slides: [
            { title: "Primero lee", bullets: ["Intenta tú el párrafo", "Marca las palabras que no conoces"] },
            { title: "Luego pregunta a la IA", bullets: ["\"Explica esto con palabras sencillas\"", "\"¿Qué significan estas 3 palabras?\"", "\"Dame preguntas para guiar mi lectura\""] },
            { title: "Luego vuelve a leer", bullets: ["Los resúmenes de la IA pueden dejar cosas fuera", "No reemplazan la lectura"] }
          ],
          tryIt: "Toma un párrafo difícil de una lectura de clase. Léelo, pide a la IA que lo explique con palabras sencillas y que defina dos palabras difíciles, luego vuelve a leerlo y escribe una frase con tus propias palabras sobre lo que significa.",
          youCanNow: "usar la IA para abrir una lectura difícil y luego entenderla por tu cuenta."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Organizarte",
        questions: [
          { q: "¿Qué le debes dar a la IA para que te ayude a planear tu semana?", options: ["Tu contraseña", "Lo que tienes que entregar y tus horarios fijos", "La dirección de tu casa", "Nada"], answer: 1, why: "La IA necesita tus pendientes y horarios para hacer un plan útil." },
          { q: "La IA hizo un plan semanal que no se acomoda a tu horario de entrenamiento. Tú:", options: ["Lo sigues de todos modos", "Dejas el entrenamiento", "Borras tu calendario", "Lo cambias para que se acomode a tu vida real"], answer: 3, why: "El plan es un borrador; tú haces que te quede." },
          { q: "¿Qué es una rúbrica?", options: ["La lista que usa tu maestro para calificar el trabajo", "Un tipo de rompecabezas", "Una aplicación para estudiar", "Una contraseña"], answer: 0, why: "La rúbrica muestra lo que califica tu maestro." },
          { q: "Los pasos del proyecto que hizo la IA dejan fuera una parte que pidió tu maestro. Tú:", options: ["Te saltas esa parte", "Le pides a la IA que te califique", "La agregas, porque las instrucciones del maestro mandan", "Cambias las fechas de entrega"], answer: 2, why: "Las instrucciones del maestro van primero." },
          { q: "¿Cuál es la mejor forma de usar la IA con una lectura difícil?", options: ["Saltarte la lectura y usar solo el resumen de la IA", "Pedirle a la IA que haga el examen", "Leerla primero, pedir a la IA que la explique y volver a leer", "No leerla nunca"], answer: 2, why: "La IA te ayuda a entender, pero tú sigues leyendo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Escribir y estudiar de forma más inteligente",
      lessons: [
        {
          title: "Recibir comentarios sobre lo que escribes",
          minutes: 5,
          goal: "Pedir a la IA comentarios sobre un borrador que escribiste y luego corregirlo tú.",
          text: [
            "Escribir tu propio borrador es donde se aprende. Después, la IA puede actuar como un entrenador: puede señalar frases poco claras, pruebas que faltan o errores de gramática.",
            "Pide comentarios, no que lo reescriba: \"Este es mi párrafo. No lo reescribas. Dime 3 cosas que mejorar y por qué.\" Luego tú haces los cambios con tus propias palabras.",
            "Si tu maestro no permite comentarios de la IA, busca otra ayuda: un compañero de clase, el centro de escritura de la escuela o tu maestro en su horario de atención."
          ],
          steps: ["Escribe primero tu propio borrador.", "Revisa que tu maestro permita comentarios de la IA.", "Pide 3 cosas que mejorar, no que lo reescriba.", "Corrígelo con tus propias palabras."],
          words: [["Borrador", "una versión temprana de lo que escribes."], ["Corregir", "mejorar lo que escribiste cambiando ideas, orden o palabras."]],
          slides: [
            { title: "Primero escribe", bullets: ["En tu borrador es donde aprendes", "La IA viene después, como entrenador"] },
            { title: "Pide comentarios, no que lo reescriba", bullets: ["\"No lo reescribas\"", "\"Dime 3 cosas que mejorar y por qué\""] },
            { title: "Tú haces los cambios", bullets: ["Corrige con tus propias palabras", "¿No se permite la IA? Pregunta a un compañero o al maestro"] }
          ],
          tryIt: "Toma un párrafo que escribiste (si tu maestro permite comentarios de la IA). Pide 3 cosas que mejorar sin que lo reescriba. Haz tú los cambios y compara las dos versiones.",
          youCanNow: "recibir comentarios de la IA y corregir tú lo que escribiste."
        },
        {
          title: "Hacer un plan de estudio para un examen",
          minutes: 5,
          goal: "Armar un plan de estudio día por día y preguntas de práctica para un examen real.",
          text: [
            "Estudiar todo la noche anterior normalmente no funciona bien. Estudiar un poco cada día y ponerte a prueba sí funciona.",
            "Dile a la IA la fecha del examen, los temas y cuánto tiempo tienes cada día: \"Mi examen de biología es el viernes sobre células y ADN. Tengo 30 minutos cada día. Haz un plan de estudio con un examen de práctica cada día.\"",
            "Pide preguntas de práctica con las respuestas escondidas, contéstalas tú y luego revisa con tus apuntes o tu libro de texto. Dedica más tiempo a las preguntas que tuviste mal."
          ],
          steps: ["Dile a la IA la fecha del examen, los temas y tu tiempo diario.", "Pide un plan día por día con práctica.", "Contesta las preguntas de práctica antes de ver las respuestas.", "Revisa con tus apuntes y enfócate en lo que fallaste."],
          words: [["Estudiar a última hora", "tratar de aprender todo justo antes de un examen."], ["Práctica espaciada", "estudiar un poco durante varios días en vez de todo de una vez."]],
          slides: [
            { title: "Poco y seguido le gana a la última hora", bullets: ["Estudia un poco cada día", "Ponte a prueba sobre la marcha"] },
            { title: "Pide un plan", bullets: ["Fecha del examen y temas", "Minutos que tienes cada día", "Un examen de práctica cada día"] },
            { title: "Practica bien", bullets: ["Contesta antes de mirar", "Revisa con tus apuntes", "Enfócate en lo que fallaste"] }
          ],
          tryIt: "Escoge un examen real que se acerque. Pide a la IA un plan de estudio día por día con el tiempo que de verdad tienes. Haz las preguntas de práctica del primer día y revísalas con tus apuntes.",
          youCanNow: "hacer un plan de estudio y practicar con la IA para un examen real."
        },
        {
          title: "Usar la IA con honestidad en la escuela",
          minutes: 5,
          goal: "Seguir las reglas de IA de tu escuela y decir cómo usaste la IA.",
          text: [
            "Las escuelas tienen reglas distintas sobre la IA. Algunas la permiten para buscar ideas y recibir comentarios, algunas quieren que digas cuándo la usaste y algunas la prohíben para ciertos trabajos. La regla de tu maestro para esa tarea es la que cuenta.",
            "Nunca entregues como tuyo un trabajo escrito por la IA cuando no está permitido. Puede contar como hacer trampa, y te pierdes el aprendizaje. Si la IA te ayudó, di cómo: \"Usé la IA para hacer preguntas de práctica y para recibir comentarios sobre mi segundo párrafo.\"",
            "La IA puede inventar datos y fuentes. Nunca copies en tu trabajo una cita o el título de un libro que te dio la IA sin encontrarlo tú. Deja la información privada fuera de las herramientas de IA y usa tu cuenta escolar para las herramientas de la escuela."
          ],
          steps: ["Lee la regla de IA de tu maestro para esta tarea.", "Usa la IA solo de las formas permitidas.", "Escribe una línea diciendo cómo la usaste.", "Revisa tú cualquier dato o fuente antes de usarlo."],
          words: [["Integridad académica", "ser honesto en los trabajos de la escuela: lo que entregas muestra lo que tú hiciste."], ["Citar", "decir de dónde viene la información."]],
          slides: [
            { title: "Las reglas cambian", bullets: ["Algunas permiten la IA para ideas o comentarios", "Algunas la prohíben para ciertos trabajos", "La regla de tu maestro es la que cuenta"] },
            { title: "Sé abierto sobre la ayuda de la IA", bullets: ["Nunca hagas pasar el trabajo de la IA como tuyo", "Di en una línea cómo ayudó la IA"] },
            { title: "Revisa datos y fuentes", bullets: ["La IA puede inventar citas y libros", "Encuentra tú cada fuente", "Nada de información privada en la IA"] }
          ],
          tryIt: "Tarea final: para un examen o proyecto real de las próximas dos semanas, haz con la IA un plan de estudio día por día, haz 5 preguntas de práctica con las respuestas escondidas, revísalas con tus apuntes y escribe una línea sobre cómo seguiste las reglas de IA de tu escuela.",
          youCanNow: "usar la IA en la escuela de formas permitidas, honestas y que de verdad te ayudan a aprender."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Escribir y estudiar de forma más inteligente",
        questions: [
          { q: "¿Qué pedido consigue comentarios útiles sin hacer tu trabajo?", options: ["\"No lo reescribas. Dime 3 cosas que mejorar y por qué.\"", "\"Reescribe mi ensayo\"", "\"Escríbelo por mí\"", "\"Hazlo perfecto\""], answer: 0, why: "Pedir comentarios hace que lo escrito siga siendo tuyo." },
          { q: "Tu maestro no permite comentarios de la IA. Puedes:", options: ["Usar la IA a escondidas", "No escribir", "Copiar a un amigo", "Preguntar a un compañero, al centro de escritura o al maestro"], answer: 3, why: "Otras personas pueden darte comentarios dentro de las reglas." },
          { q: "¿Qué es la práctica espaciada?", options: ["Estudiar toda la noche antes del examen", "Estudiar un poco durante varios días", "No estudiar", "Estudiar en el espacio"], answer: 1, why: "Repartir el estudio en varios días te ayuda a recordar." },
          { q: "La IA te da una cita de un libro para tu ensayo. Debes:", options: ["Buscar tú primero la cita en el libro real", "Copiarla", "Inventar un número de página", "Preguntarle a la IA si es real"], answer: 0, why: "La IA puede inventar citas; revisa la fuente real." },
          { q: "¿La regla de IA de quién cuenta para una tarea?", options: ["La de un amigo", "La de la empresa de IA", "La de tu maestro", "La de nadie"], answer: 2, why: "Tu maestro pone la regla para esa tarea." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para que te vaya bien en la escuela",
    questions: [
      { q: "Para planear tu semana con la IA, haz una lista de:", options: ["Tus contraseñas", "Pendientes, fechas de entrega y horarios fijos", "Los teléfonos de tus amigos", "Nada"], answer: 1, why: "Esos datos dejan que la IA arme un plan real." },
      { q: "Un buen plan semanal incluye:", options: ["Ningún descanso", "Solo videojuegos", "Todo el domingo en la noche", "Lo más difícil primero y descansos"], answer: 3, why: "Los descansos y hacer primero lo difícil te ayudan a terminar." },
      { q: "Después de que la IA hace un plan, debes:", options: ["No hacerle caso", "Compartirlo con desconocidos", "Borrarlo", "Cambiarlo para que se acomode a tu vida y copiarlo a un calendario"], answer: 3, why: "El plan solo ayuda si te queda y lo puedes ver." },
      { q: "¿Por qué dividir un proyecto grande en pasos?", options: ["Lo hace más largo", "Los pasos pequeños se sienten posibles", "Los maestros lo odian", "Lo exige la ley"], answer: 1, why: "Los pasos pequeños hacen manejable un trabajo grande." },
      { q: "Un buen pedido para dividir un proyecto es:", options: ["\"proyecto\"", "\"Haz mi proyecto\"", "\"Divide esto en pasos de 30 minutos con fechas, para terminar dos días antes\"", "\"Haz que desaparezca\""], answer: 2, why: "Fija el tamaño de los pasos, las fechas y un margen." },
      { q: "Si los pasos de la IA y la rúbrica de tu maestro no coinciden:", options: ["Sigue la rúbrica", "Sigue a la IA", "No hagas ninguno", "Pregúntale a un desconocido"], answer: 0, why: "Tu maestro califica con la rúbrica." },
      { q: "Al usar la IA con una lectura difícil, primero:", options: ["Sáltate al resumen", "Lee tú el párrafo", "Cierra el libro", "Pídele a la IA las respuestas del examen"], answer: 1, why: "Leer primero hace que la IA te ayude a entender, no a saltarte la lectura." },
      { q: "¿Por qué un resumen de la IA no puede reemplazar la lectura?", options: ["Es demasiado largo", "Cuesta dinero", "Siempre es perfecto", "Puede dejar fuera cosas o equivocarse"], answer: 3, why: "Los resúmenes pueden omitir o torcer partes importantes." },
      { q: "¿Cuál es una instrucción útil para leer?", options: ["\"¿Qué significan estas 3 palabras?\"", "\"Escribe mi reporte del libro\"", "\"Dame mi calificación\"", "\"Léelo por mí para siempre\""], answer: 0, why: "Definir las palabras difíciles te ayuda a entender." },
      { q: "¿Dónde pasa sobre todo el aprendizaje al escribir?", options: ["Al copiar texto de la IA", "Al imprimir la hoja", "Al escribir tu propio borrador y corregirlo", "Al escoger un tipo de letra"], answer: 2, why: "Escribir el borrador y corregirlo desarrolla la habilidad." },
      { q: "Cuando la IA da comentarios, ¿quién hace los cambios?", options: ["La IA", "Un desconocido", "Tú, con tus propias palabras", "Nadie"], answer: 2, why: "Corregirlo tú mantiene el trabajo como tuyo." },
      { q: "¿Qué significa corregir?", options: ["Mejorar lo que escribiste cambiándolo", "Borrarlo", "Imprimirlo", "Entregarlo tarde"], answer: 0, why: "Corregir es mejorar un borrador." },
      { q: "¿Qué hábito de estudio funciona mejor?", options: ["Estudiar todo la noche anterior", "Solo releer", "No estudiar", "Un poco cada día con autoexámenes"], answer: 3, why: "La práctica espaciada con autoexámenes funciona bien." },
      { q: "¿Qué tres cosas le dices a la IA para un plan de estudio?", options: ["Tu contraseña, dirección y edad", "Fecha del examen, temas y tiempo diario", "Color, comida y canción favoritos", "Nada"], answer: 1, why: "Eso deja que la IA arme un plan que te quede." },
      { q: "Después de las preguntas de práctica, dedica más tiempo a:", options: ["Las que tuviste mal", "Las que tuviste bien", "Ninguna", "Temas nuevos al azar"], answer: 0, why: "Enfocarte en los errores llena los huecos." },
      { q: "Entregar un trabajo escrito por la IA cuando no está permitido:", options: ["Siempre está bien", "Es obligatorio", "Puede contar como hacer trampa", "Da puntos extra"], answer: 2, why: "Rompe las reglas y te saltas el aprendizaje." },
      { q: "Una buena línea sobre el uso de la IA es:", options: ["Nada", "\"Usé la IA para hacer preguntas de práctica y recibir comentarios sobre el párrafo 2\"", "\"La IA hizo todo\" cuando no fue así", "\"Nunca uso computadoras\""], answer: 1, why: "Dice con honestidad cómo ayudó la IA." },
      { q: "La IA te da un libro como fuente para tu proyecto. Debes:", options: ["Copiarlo en tu lista", "Inventar un autor", "No hacer caso a ninguna fuente", "Buscar tú el libro antes de usarlo"], answer: 3, why: "La IA puede inventar fuentes." },
      { q: "¿Qué cuenta debes usar para las herramientas aprobadas por la escuela?", options: ["La cuenta de un amigo", "Una cuenta falsa", "Ninguna cuenta nunca", "Tu cuenta escolar"], answer: 3, why: "Las herramientas de la escuela están preparadas para tu cuenta escolar." },
      { q: "Antes de registrarte en una aplicación de IA nueva debes:", options: ["Usar cualquier fecha de nacimiento", "Revisar su regla de edad y hablar con tu madre, padre o tutor", "Darle tu contraseña de la escuela", "Saltarte los términos"], answer: 1, why: "Las reglas de edad y el permiso de tu madre, padre o tutor van primero." }
    ]
  }
};
