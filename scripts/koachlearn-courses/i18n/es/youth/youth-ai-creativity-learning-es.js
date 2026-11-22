"use strict";

// Koach Learn course (Spanish translation of youth/youth-ai-creativity-learning.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-creativity-learning-es",
  lang: "es",
  translationOf: "youth-ai-creativity-learning",
  category: "Youth",
  name: "Herramientas de IA para crear y aprender",
  skills: "Buscar ideas con IA, Hacer un diseño con Canva, Aprender una habilidad nueva con un tutor de IA, Hacer preguntas de práctica, Dar crédito y ser original",
  outcome: "usar herramientas de IA gratis para buscar ideas para un proyecto creativo, diseñar algo con ellas y aprender por tu cuenta una habilidad nueva con un compañero de estudio de IA, manteniendo el trabajo como tuyo y dando crédito donde la IA ayudó.",
  about: [
    "Este curso es para jóvenes de unos 13 a 18 años a quienes les gusta crear cosas (carteles, historias, ritmos, ideas para juegos, volantes de clubes) y que quieren aprender más rápido.",
    "Vas a usar la IA como compañera para crear y como compañera de estudio. Vas a buscar ideas, diseñar un cartel, aprender algo nuevo paso a paso y ponerte a prueba. También vas a aprender a mantener tu propia voz y a ser honesto sobre lo que hizo la IA.",
    "Antes de empezar: revisa la regla de edad de cada herramienta, sigue las reglas de tu escuela sobre la IA y habla con tu madre, padre o tutor antes de crear cualquier cuenta nueva. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\"."
  ],
  finalTask: "Haz un cartel para un club o evento escolar real o inventado. Usa la IA para buscar al menos cinco ideas, escoge una y hazla tuya, diseña el cartel en Canva o Google Slides y luego agrega una nota pequeña abajo que diga cómo ayudó la IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes de unos 13 a 18 años a quienes les gusta crear cosas como carteles, historias, ritmos, ideas para juegos y volantes para clubes, y que quieren aprender más rápido.",
    startingPoint: "Usan teléfonos y computadoras de la escuela y quizás han probado un asistente de chat o una aplicación de diseño. Pocos usan la IA a propósito para buscar ideas, estudiar paso a paso o ponerse a prueba, y muchos no están seguros de qué cuenta como un uso honesto de la IA.",
    gap: "Los jóvenes pueden usar la IA para destrabarse, diseñar más rápido y estudiar mejor, pero usarla para copiar el trabajo se salta el aprendizaje y puede romper las reglas de la escuela. Necesitan usar la IA como compañera creativa y de estudio, conservando su propia voz y dando crédito.",
    constraints: [
      "Límites de edad: las herramientas y las funciones de imágenes con IA tienen sus propias reglas de edad; la madre, el padre o el tutor aprueba las cuentas nuevas",
      "Las reglas sobre la IA y las imágenes hechas con IA cambian según la escuela, la clase y el concurso",
      "Dispositivos: un teléfono, una computadora de la escuela o de la biblioteca; solo planes gratuitos",
      "Privacidad: nada de información privada en las instrucciones ni en los apuntes que pegas",
      "Lecciones cortas y palabras sencillas para distintos niveles de lectura"
    ],
    prerequisites: "\"¿Qué es la IA? (para jóvenes)\" es un buen primer curso, pero no es obligatorio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un proyecto creativo", action: "usar un asistente de IA para hacer una lista de muchas ideas variadas, y luego cambiarlas o combinarlas en una idea propia", standard: "consiguiendo por lo menos cinco ideas y haciendo tuya una de ellas" },
    { id: "O2", condition: "Usando una herramienta de diseño gratis como Canva o Google Slides", action: "hacer un cartel sencillo a partir de una plantilla, después de revisar la regla de edad de la herramienta y la configuración de la escuela", standard: "con un título grande y la fecha, la hora y el lugar claros" },
    { id: "O3", condition: "En cualquier trabajo en el que ayudó la IA", action: "escribir una nota de crédito que diga lo que hizo la IA y lo que hiciste tú, y agregar algo que solo tú podrías hacer", standard: "siguiendo las reglas de la clase o del concurso sobre la IA y sin usar arte de otras personas sin permiso" },
    { id: "O4", condition: "Con una habilidad pequeña que quieres aprender", action: "pedirle a un asistente de IA que te enseñe en pasos pequeños a tu nivel y te haga preguntas después de cada uno", standard: "nombrando la habilidad, tu nivel y el pedido de ir un paso a la vez" },
    { id: "O5", condition: "Con tus propios apuntes de clase", action: "crear preguntas de práctica o tarjetas de estudio con IA, responderlas primero y comprobar las respuestas", standard: "sin información privada y con cada respuesta comprobada en tus apuntes o tu libro de texto" },
    { id: "O6", condition: "Antes y después de usar la IA para tareas escolares", action: "decidir si un uso de la IA te ayuda a aprender o se salta el aprendizaje, con la prueba de mañana y las reglas de tu maestro", standard: "preguntándole primero a tu maestro siempre que no estés seguro" }
  ],
  chapters: [
    {
      name: "Capítulo 1: La IA como tu compañera para crear",
      lessons: [
        {
          objectives: ["O1"],
          title: "Buscar ideas con la IA",
          minutes: 5,
          goal: "Usar un asistente de IA para conseguir muchas ideas y luego escoger y mejorar la mejor.",
          text: [
            "Hacer una lluvia de ideas es pensar muchas ideas rápido, sin juzgarlas todavía. Los asistentes de IA como ChatGPT, Microsoft Copilot y Google Gemini son buenos para esto porque pueden hacer una lista de muchas ideas en segundos.",
            "Pide cantidad y variedad: \"Dame 10 ideas distintas para un cartel del club de robótica de mi escuela. Que algunas sean chistosas, otras serias y otras atrevidas.\" Luego tú eliges. Los mejores resultados salen cuando mezclas las ideas de la IA con las tuyas.",
            "Toma las ideas de la IA como un punto de partida. Cámbialas, junta dos o usa una para que se te ocurra algo nuevo. Así la idea final es de verdad tuya."
          ],
          steps: ["Di qué vas a hacer y para quién es.", "Pide muchas ideas con estilos distintos.", "Encierra las dos o tres que te gusten.", "Cámbialas o júntalas para hacer tu propia idea."],
          words: [["Lluvia de ideas", "pensar muchas ideas rápido antes de escoger una."]],
          slides: [
            { title: "Lluvia de ideas = muchas ideas, rápido", bullets: ["Todavía no juzgues las ideas", "La IA puede hacer una lista de 10 ideas en segundos"] },
            { title: "Pide variedad", bullets: ["Di qué vas a hacer y para quién", "Pide ideas chistosas, serias y atrevidas"] },
            { title: "Hazla tuya", bullets: ["Escoge dos o tres que te gusten", "Cámbialas o júntalas", "Agrégales tu toque"] }
          ],
          tryIt: "Escoge un proyecto: un cartel para un club, una historia corta, un nivel de un juego o el tema de una canción. Pide 10 ideas distintas a un asistente de IA que tengas permiso de usar. Escoge tus dos favoritas y escribe cómo las cambiarías.",
          youCanNow: "buscar ideas con la IA y convertirlas en ideas tuyas.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es la regla principal al buscar ideas?", options: ["Escoger la primera idea", "Usar solo ideas de la IA", "Juzgar cada idea de inmediato", "Sacar muchas ideas antes de juzgarlas"], answer: 3, why: "Buscar ideas significa sacar muchas ideas rápido, sin juzgarlas todavía." },
            { objective: "O1", q: "La IA te dio 10 ideas para un cartel y dos se parecen a lo que quieres. ¿Qué haces?", options: ["Copias la primera tal cual", "Las combinas o las cambias y les pones tu propio toque", "Pides 100 más y nunca escoges", "Dejas el cartel"], answer: 1, why: "Mezclar las ideas de la IA con las tuyas hace que la idea final sea de verdad tuya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Diseñar con herramientas de IA gratis",
          minutes: 5,
          goal: "Hacer un cartel o gráfico sencillo con una herramienta de diseño gratis.",
          text: [
            "Canva es una herramienta de diseño con un plan gratis que funciona en el navegador o en una aplicación. Algunas escuelas también dan acceso a los estudiantes con una cuenta escolar, así que pregunta a tu maestro. Google Slides y Microsoft PowerPoint también sirven para carteles sencillos.",
            "Empieza con una plantilla (un diseño ya hecho) y luego cambia las palabras, los colores y las imágenes. Algunas herramientas pueden hacer una imagen a partir de palabras que escribes. Estas funciones de imágenes con IA pueden tener sus propias reglas de edad o estar apagadas en las cuentas escolares, así que revisa antes de usarlas.",
            "Un buen diseño es sencillo: un título grande, unas cuantas líneas cortas, colores claros que se lean fácil y los datos importantes como fecha, hora y lugar."
          ],
          steps: ["Abre Canva, Google Slides o PowerPoint (usa tu cuenta escolar si tu escuela te da una).", "Escoge una plantilla de cartel.", "Cambia el título, los datos y los colores.", "Agrega o crea una imagen.", "Revisa que la fecha, la hora y el lugar se lean fácil."],
          words: [["Plantilla", "un diseño ya hecho que puedes cambiar."], ["Generador de imágenes con IA", "una herramienta que hace una imagen a partir de las palabras que escribes."]],
          slides: [
            { title: "Herramientas gratis para diseñar", bullets: ["Canva (plan gratis; pregunta si tu escuela da acceso)", "Google Slides", "Microsoft PowerPoint"] },
            { title: "Empieza con una plantilla", bullets: ["Cambia palabras, colores e imágenes", "Las funciones de imágenes con IA pueden tener sus propias reglas de edad"] },
            { title: "Lo sencillo gana", bullets: ["Un título grande", "Unas cuantas líneas cortas", "Colores fáciles de leer", "Fecha, hora y lugar"] }
          ],
          tryIt: "Abre una herramienta de diseño gratis y escoge una plantilla de cartel. Pon un título y la fecha, la hora y el lugar de tu idea de la Lección 1. Guárdalo.",
          youCanNow: "hacer un cartel sencillo con una herramienta de diseño gratis.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace que un cartel sea fácil de leer?", options: ["Un título grande, unas pocas líneas cortas y colores claros", "Mucho texto pequeño", "Diez tipos de letra distintos", "Texto oscuro sobre un fondo oscuro"], answer: 0, why: "Un buen diseño es sencillo, con un título grande y los datos clave fáciles de ver." },
            { objective: "O2", q: "Quieres usar una función de imágenes con IA en una herramienta de diseño con tu cuenta de la escuela. ¿Qué haces primero?", options: ["Usar la cuenta de un amigo", "Crear una cuenta nueva sin decirle a nadie", "Revisar su regla de edad y si tu escuela la permite", "Dejar el cartel"], answer: 2, why: "Las funciones de imágenes con IA pueden tener sus propias reglas de edad o estar apagadas en las cuentas de la escuela." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mantener tu trabajo original y dar crédito",
          minutes: 4,
          goal: "Decir con honestidad cómo ayudó la IA y mantener tu propia voz en el trabajo.",
          text: [
            "Si la IA te ayudó a hacer algo, dilo. Una nota corta como \"Ideas buscadas con Microsoft Copilot; diseño y textos míos\" es honesta y muestra que sabes usar la herramienta.",
            "No uses arte, música, logos ni personajes de otras personas sin permiso, y no le pidas a la IA que copie exactamente el trabajo de un artista real. Algunas escuelas y concursos no permiten para nada las imágenes hechas con IA, así que lee las reglas.",
            "Tu voz importa. Agrega algo que solo tú podrías agregar: una broma interna de tu club, una foto que tomaste, un dibujo o tus propias palabras."
          ],
          steps: ["Anota lo que hizo la IA y lo que hiciste tú.", "Agrega una nota corta de crédito.", "Lee las reglas del concurso o de la clase sobre la IA.", "Agrega algo que solo tú podrías hacer."],
          words: [["Crédito", "decir quién o qué ayudó a hacer algo."], ["Derechos de autor", "la ley que protege el trabajo creativo de las personas, como el arte, la música y los textos."]],
          slides: [
            { title: "Di cómo ayudó la IA", bullets: ["\"Ideas buscadas con IA; diseño mío\"", "Es honesto y muestra habilidad"] },
            { title: "Respeta a otros creadores", bullets: ["Nada de copiar arte, logos ni personajes", "Algunos concursos prohíben imágenes de IA: lee las reglas"] },
            { title: "Agrega tu propia voz", bullets: ["Una foto que tomaste", "Un dibujo o tus propias palabras", "Algo que solo tú podrías agregar"] }
          ],
          tryIt: "Agrega una nota de crédito de una línea al cartel que empezaste. Luego agrega algo que solo tú podrías agregar, como tu propia foto o un lema.",
          youCanNow: "dar crédito honesto por la ayuda de la IA y mantener tu propia voz en tu trabajo.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué agregar una nota de crédito cuando ayudó la IA?", options: ["Para que el cartel sea más largo", "Los concursos exigen imágenes de IA", "Esconde lo que hiciste", "Es honesto y muestra cómo usaste la herramienta"], answer: 3, why: "Una nota de crédito corta dice con honestidad lo que hizo la IA y lo que hiciste tú." },
            { objective: "O3", q: "Tu cartel se parece mucho a todos los demás carteles hechos con IA. ¿Cómo le pones tu propia voz?", options: ["Agregando tu propia foto, dibujo, lema o una broma interna del club", "Pidiéndole a la IA que copie exactamente a un artista famoso", "Usando un logotipo famoso", "Quitando tu nombre"], answer: 0, why: "Agregar algo que solo tú podrías hacer mantiene el trabajo como tuyo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La IA como tu compañera para crear",
        questions: [
          { objective: "O1", q: "¿Qué es una lluvia de ideas?", options: ["Copiar el trabajo de alguien", "Pensar muchas ideas antes de escoger", "Arreglar una computadora descompuesta", "Borrar archivos viejos"], answer: 1, why: "La lluvia de ideas es pensar muchas ideas rápido y luego escoger." },
          { objective: "O1", q: "¿Qué instrucción dará la mejor lluvia de ideas?", options: ["\"cartel\"", "\"hazlo\"", "\"ideas\"", "\"Dame 10 ideas distintas para un cartel del club de robótica: algunas chistosas, otras serias\""], answer: 3, why: "Dice qué, para quién, cuántas y de qué estilos." },
          { objective: "O2", q: "¿Qué es una plantilla?", options: ["Un diseño ya hecho que puedes cambiar", "Una contraseña", "Un tipo de virus", "Una regla de la escuela"], answer: 0, why: "Las plantillas te dan un diseño inicial para editar." },
          { objective: "O3", q: "Un concurso dice que no se permiten imágenes hechas con IA. Tú:", options: ["Usas una de todos modos", "Escondes que usaste IA", "Sigues la regla y haces o usas tu propia imagen", "No lees las reglas"], answer: 2, why: "Seguir las reglas del concurso mantiene tu participación honesta y permitida." },
          { objective: "O3", q: "¿Cuál es una buena nota de crédito?", options: ["Nada", "\"Yo hice todo\" cuando la IA ayudó", "\"Ideas buscadas con IA; diseño y textos míos\"", "\"Lo hizo un robot\""], answer: 2, why: "Dice con honestidad lo que hizo la IA y lo que hiciste tú." }
        ]
      }
    },
    {
      name: "Capítulo 2: La IA como tu compañera de estudio",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aprender una habilidad nueva paso a paso",
          minutes: 5,
          goal: "Pedir a la IA que te enseñe una habilidad nueva en pasos pequeños y a tu nivel.",
          text: [
            "La IA puede actuar como un tutor paciente. Dile qué quieres aprender, qué sabes ya y pídele que vaya paso a paso. Por ejemplo: \"Quiero aprender a leer tablaturas de guitarra. Todavía no sé nada. Enséñame en 5 pasos pequeños y espérame después de cada uno.\"",
            "Pídele que revise si entendiste: \"Hazme una pregunta antes de seguir.\" Si algo te confunde, dilo: \"Explícamelo como si tuviera 12 años\" o \"Dame un ejemplo de básquetbol.\"",
            "Sitios gratis para aprender como Khan Academy tienen lecciones y práctica que puedes usar junto con un asistente de IA. Puede que tu escuela tenga herramientas aprobadas, así que pregunta a tu maestro cuáles usar."
          ],
          steps: ["Di la habilidad y tu nivel.", "Pide pasos pequeños, uno a la vez.", "Pídele que te haga preguntas antes de seguir.", "Pide ejemplos de cosas que te gustan."],
          words: [["Tutor", "alguien (o una herramienta) que te ayuda a aprender de forma personal."]],
          slides: [
            { title: "La IA como tutor", bullets: ["Di qué quieres aprender", "Di qué sabes ya", "Pide un paso a la vez"] },
            { title: "Haz que te revise", bullets: ["\"Hazme una pregunta antes de seguir\"", "\"Explícamelo como si tuviera 12 años\""] },
            { title: "Usa ejemplos que te gusten", bullets: ["Deportes, juegos, música", "Pregunta a tu maestro por las herramientas aprobadas"] }
          ],
          tryIt: "Escoge una habilidad pequeña que quieras aprender esta semana (un acorde, un método de matemáticas, una técnica de dibujo, una palabra en un idioma nuevo). Pide a un asistente de IA que te la enseñe en pasos pequeños y que te haga preguntas después de cada uno.",
          youCanNow: "usar la IA como tutor paso a paso a tu propio nivel.",
          quickCheck: [
            { objective: "O4", q: "¿Qué debe incluir una instrucción para aprender una habilidad nueva?", options: ["Solo la palabra \"enséñame\"", "La habilidad, tu nivel y el pedido de ir un paso a la vez", "Tu contraseña", "La respuesta que quieres"], answer: 1, why: "Decirle a la IA la habilidad, tu nivel y que vaya paso a paso hace que actúe como un tutor paciente." },
            { objective: "O4", q: "La explicación de la IA sobre un método de matemáticas te confunde. ¿Qué le envías?", options: ["Nada; cierras la aplicación", "\"Haz mi tarea.\"", "\"Explícamelo como si tuviera 12 años, con un ejemplo de básquetbol.\"", "La misma pregunta otra vez"], answer: 2, why: "Pedir palabras más sencillas o un ejemplo que te guste te ayuda a entender." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hacer preguntas de práctica y tarjetas de estudio",
          minutes: 5,
          goal: "Convertir tus apuntes en preguntas de práctica y ponerte a prueba.",
          text: [
            "Ponerte a prueba es una de las mejores formas de recordar las cosas. La IA puede convertir tus propios apuntes en preguntas de examen en segundos.",
            "Pega o escribe tus apuntes de clase (sin información privada) y pide: \"Haz 8 preguntas de práctica con estos apuntes. No me muestres las respuestas hasta que yo conteste.\" Luego contéstalas tú antes de mirar.",
            "También puedes pedir tarjetas de estudio: una palabra de un lado y su significado del otro. Herramientas gratis como Google Docs o tarjetas de papel funcionan bien. Revisa las respuestas con tus apuntes o tu libro de texto, porque la IA todavía se puede equivocar."
          ],
          steps: ["Junta tus apuntes de un tema.", "Pide a la IA preguntas de práctica con las respuestas escondidas.", "Contéstalas tú primero.", "Revisa las respuestas con tus apuntes o tu libro de texto."],
          words: [["Tarjeta de estudio", "una tarjeta con una pregunta o palabra de un lado y la respuesta del otro."], ["Ponerse a prueba", "hacerte preguntas a ti mismo para ayudarte a recordar."]],
          slides: [
            { title: "Ponte a prueba para recordar", bullets: ["Hacerte preguntas funciona mejor que releer", "La IA puede hacer preguntas con tus apuntes"] },
            { title: "Pídelo bien", bullets: ["\"Haz 8 preguntas con estos apuntes\"", "\"Esconde las respuestas hasta que yo conteste\""] },
            { title: "Revisa las respuestas", bullets: ["Usa tus apuntes o tu libro de texto", "La IA todavía se puede equivocar"] }
          ],
          tryIt: "Toma los apuntes de una clase de esta semana. Pide a la IA 5 preguntas de práctica con las respuestas escondidas. Contéstalas y luego revísate con tus apuntes.",
          youCanNow: "convertir apuntes en preguntas de práctica y ponerte a prueba.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué pedirle a la IA que esconda las respuestas cuando hace preguntas de práctica?", options: ["Para ahorrar papel", "Para que la IA se califique sola", "Porque las respuestas son privadas", "Para que respondas primero y te pongas a prueba de verdad"], answer: 3, why: "Ponerte a prueba antes de ver la respuesta te ayuda a recordar." },
            { objective: "O5", q: "La respuesta de la IA a una pregunta de práctica no coincide con tus apuntes. ¿Qué haces?", options: ["Revisas tus apuntes o tu libro de texto y confías en ellos", "Siempre confías en la IA", "Borras tus apuntes", "Te saltas ese tema"], answer: 0, why: "La IA puede equivocarse, así que compara con tus apuntes o tu libro de texto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar la IA para aprender, no para saltarte el aprendizaje",
          minutes: 4,
          goal: "Decidir cuándo la ayuda de la IA es aprender y cuándo es saltarte el trabajo.",
          text: [
            "Hay una diferencia entre que la IA te ayude a aprender y que la IA haga el trabajo por ti. Si le pides que te explique, te haga preguntas o te dé comentarios, estás aprendiendo. Si le pides que escriba tu ensayo o resuelva tu tarea para que la copies, te estás saltando el aprendizaje, y puede ir contra las reglas de la escuela.",
            "Una buena prueba: después de usar la IA, ¿podrías hacer la tarea tú solo mañana? Si sí, la IA te ayudó a aprender. Si no, inténtalo otra vez de una forma en que tú hagas el pensamiento.",
            "Sigue siempre las reglas de tu maestro. Si no estás seguro de si algo está permitido, pregunta antes de usar la IA y prepárate para decir cómo la usaste."
          ],
          steps: ["Pide a la IA que explique, te haga preguntas o te dé comentarios, no que haga el trabajo.", "Revisa: ¿podría hacer esto yo solo mañana?", "Sigue las reglas de IA de tu maestro.", "Prepárate para decir cómo usaste la IA."],
          words: [["Comentarios", "observaciones que te ayudan a mejorar tu propio trabajo."]],
          slides: [
            { title: "Aprender o saltárselo", bullets: ["Aprender: explicar, preguntar, comentarios", "Saltárselo: la IA lo escribe, tú lo copias"] },
            { title: "La prueba de mañana", bullets: ["¿Podrías hacerlo tú solo mañana?", "Si no, haz tú más del pensamiento"] },
            { title: "Sigue las reglas", bullets: ["Pregunta a tu maestro si tienes dudas", "Prepárate para decir cómo usaste la IA"] }
          ],
          tryIt: "Tarea final: haz el cartel de tu club o evento. Busca al menos cinco ideas con la IA, haz una tuya, diséñalo en Canva o Google Slides y agrega una nota de crédito que diga cómo ayudó la IA.",
          youCanNow: "usar la IA para crear y aprender de una forma honesta en la que la habilidad sigue siendo tuya.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál de estos es usar la IA para aprender?", options: ["Copiar un ensayo de la IA", "Pedirle a la IA que explique un paso que no entendiste y luego intentarlo tú", "Hacer que la IA resuelva todos los problemas de la tarea", "Pegar respuestas de la IA en un examen"], answer: 1, why: "Las explicaciones, las preguntas y la retroalimentación te ayudan a aprender; copiar se salta el aprendizaje." },
            { objective: "O6", q: "Después de que te ayudó la IA, no podrías hacer la tarea solo mañana. ¿Qué haces?", options: ["Entregar el trabajo de la IA", "Dejar de usar la IA para siempre", "Intentarlo otra vez para que tú pienses más", "Esconder que usaste IA"], answer: 2, why: "La prueba de mañana muestra que la IA hizo el trabajo de pensar, así que hazlo de nuevo de forma que aprendas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: La IA como tu compañera de estudio",
        questions: [
          { objective: "O4", q: "¿Qué instrucción hace que la IA actúe como un buen tutor?", options: ["\"Enséñame tablaturas de guitarra en 5 pasos pequeños y hazme preguntas después de cada uno\"", "\"Haz mi tarea\"", "\"Contesta todo\"", "\"tablaturas\""], answer: 0, why: "Fija el nivel, los pasos pequeños y las revisiones." },
          { objective: "O5", q: "¿Por qué sirve ponerte a prueba?", options: ["Pierde el tiempo", "Los maestros lo prohíben", "Borra los apuntes", "Te ayuda a recordar"], answer: 3, why: "Ponerte a prueba es una de las mejores formas de recordar." },
          { objective: "O5", q: "La IA hizo preguntas de práctica con tus apuntes. Antes de confiar en las respuestas debes:", options: ["Compartirlas en internet", "Revisarlas con tus apuntes o tu libro de texto", "Borrar tus apuntes", "Preguntarle a un desconocido"], answer: 1, why: "La IA todavía se puede equivocar, así que revisa." },
          { objective: "O6", q: "¿Qué uso de la IA es saltarse el aprendizaje?", options: ["Pedirle que escriba tu ensayo para copiarlo", "Pedirle que explique un paso", "Pedirle que te haga preguntas", "Pedirle comentarios sobre tu borrador"], answer: 0, why: "Copiar el trabajo de la IA significa saltarte el aprendizaje y puede romper las reglas." },
          { objective: "O6", q: "¿Qué es la \"prueba de mañana\"?", options: ["Hacer la tarea mañana", "Tener un examen mañana", "Preguntarte si podrías hacer la tarea tú solo mañana", "Apagar la IA mañana"], answer: 2, why: "Si lo podrías hacer tú solo, la IA te ayudó a aprender." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Herramientas de IA para crear y aprender",
    questions: [
      { objective: "O1", q: "Al buscar ideas con la IA, primero debes:", options: ["Juzgar cada idea", "Pedir muchas ideas distintas", "Escoger la primera", "Parar después de una idea"], answer: 1, why: "La lluvia de ideas se trata primero de tener muchas ideas." },
      { objective: "O1", q: "La mejor forma de hacer tuya una idea de la IA es:", options: ["Copiarla igual", "Pedirle a un amigo que escoja", "No usar nunca ideas de la IA", "Cambiar o juntar ideas y agregarles tu toque"], answer: 3, why: "Cambiar y mezclar ideas hace que el resultado sea tuyo." },
      { objective: "O1", q: "Pedir ideas \"chistosas, serias y atrevidas\" te da:", options: ["Un virus", "Menos ideas", "Una contraseña", "Variedad"], answer: 3, why: "Los distintos estilos te dan más de dónde escoger." },
      { objective: "O2", q: "Canva es:", options: ["Una consola de videojuegos", "Una herramienta de diseño con un plan gratis", "Una regla de la escuela", "Solo una aplicación de música"], answer: 1, why: "Canva es una herramienta de diseño con un plan gratis." },
      { objective: "O2", q: "Antes de usar una función de imágenes con IA debes:", options: ["Subir la foto de un amigo", "Compartir tu contraseña", "Revisar su regla de edad y la configuración de tu escuela", "Saltarte todas las reglas"], answer: 2, why: "Las funciones de imágenes con IA pueden tener sus propias reglas de edad." },
      { objective: "O2", q: "Un buen cartel tiene:", options: ["Un título grande y la fecha, hora y lugar claros", "Mucho texto diminuto", "Todos los colores a la vez", "Ningún dato"], answer: 0, why: "El diseño sencillo es el más fácil de leer." },
      { objective: "O3", q: "Un crédito honesto por la ayuda de la IA se ve así:", options: ["Esconder que usaste IA", "\"Ideas buscadas con IA; diseño mío\"", "Decir que un robot lo hizo todo", "Nada"], answer: 1, why: "Dice la verdad sobre quién hizo qué." },
      { objective: "O3", q: "Quieres usar un personaje de caricatura famoso en un cartel. Debes:", options: ["Usarlo sin preguntar", "Pedirle a la IA que lo copie igual", "Quitar la nota de crédito", "Hacer tu propia imagen en su lugar, o conseguir permiso"], answer: 3, why: "Los personajes y el arte están protegidos por derechos de autor." },
      { objective: "O3", q: "Los derechos de autor protegen:", options: ["El trabajo creativo de las personas, como el arte y la música", "La batería de tu teléfono", "El almuerzo de la escuela", "El wifi"], answer: 0, why: "Los derechos de autor protegen el trabajo de los creadores." },
      { objective: "O4", q: "Para aprender una habilidad nueva con la IA, debes decirle:", options: ["Nada", "Tu contraseña", "La habilidad, tu nivel y que vaya paso a paso", "Que se salte hasta el final"], answer: 2, why: "El nivel y los pasos pequeños hacen de la IA un buen tutor." },
      { objective: "O4", q: "Si una explicación de la IA te confunde, un buen pedido de seguimiento es:", options: ["\"Ya no importa\"", "\"Dame mi calificación\"", "\"Explícamelo como si tuviera 12 años\"", "\"Escribe mi examen\""], answer: 2, why: "Pedir palabras más sencillas te ayuda a entender." },
      { objective: "O4", q: "¿Quién te puede decir qué herramientas de IA están aprobadas para la escuela?", options: ["Tu maestro", "Un anuncio emergente", "Un desconocido en internet", "Nadie"], answer: 0, why: "Los maestros conocen las herramientas aprobadas y las reglas de la escuela." },
      { objective: "O5", q: "¿Qué debes dejar fuera al pegar apuntes en la IA?", options: ["Palabras del tema", "Fechas clave del tema", "Palabras de vocabulario", "Información privada como tu dirección"], answer: 3, why: "Nunca pongas información privada en las herramientas de IA." },
      { objective: "O5", q: "¿Por qué pedirle a la IA que esconda las respuestas de las preguntas de práctica?", options: ["Para ahorrar papel", "Para que contestes primero y de verdad te pongas a prueba", "Lo exige la ley", "Para engañar a tu maestro"], answer: 1, why: "Contestar primero es ponerte a prueba de verdad." },
      { objective: "O5", q: "Una tarjeta de estudio tiene:", options: ["Una pregunta o palabra de un lado y la respuesta del otro", "Solo imágenes", "Una contraseña", "Solo notas musicales"], answer: 0, why: "Así funcionan las tarjetas de estudio." },
      { objective: "O5", q: "Después de que la IA hace respuestas de práctica debes:", options: ["Confiar del todo en ellas", "Publicarlas en internet", "Revisarlas con tus apuntes o un libro de texto", "Borrarlas"], answer: 2, why: "Las respuestas de la IA pueden estar mal." },
      { objective: "O6", q: "¿Qué es usar la IA para aprender?", options: ["Copiar un ensayo de la IA", "Pedirle a la IA comentarios sobre tu propio borrador", "Dejar que la IA haga tu examen", "Pegar respuestas de tarea de la IA"], answer: 1, why: "Los comentarios sobre tu propio trabajo te ayudan a mejorar." },
      { objective: "O6", q: "No estás seguro de si la IA está permitida para un proyecto. Debes:", options: ["Usarla y esperar que todo salga bien", "Usarla a escondidas", "Preguntarle a la IA si está permitido", "Preguntar primero a tu maestro"], answer: 3, why: "Tu maestro decide las reglas de la clase." },
      { objective: "O2", q: "Antes de crear una cuenta nueva en una aplicación para crear, debes:", options: ["Usar una edad falsa", "Darle tu contraseña de la escuela", "Saltarte los términos", "Hablar con tu madre, padre o tutor y revisar la regla de edad"], answer: 3, why: "Las reglas de edad y el permiso de tu madre, padre o tutor van primero." },
      { objective: "O6", q: "Después de usar la IA, no podrías hacer la tarea tú solo mañana. Eso significa:", options: ["Aprendiste todo", "La IA hizo el pensamiento; inténtalo otra vez para que tú hagas más", "La IA está descompuesta", "Deberías dejar la escuela"], answer: 1, why: "La prueba de mañana muestra si aprendiste." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      3,
      6,
      7,
      9,
      13,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Búsqueda de ideas",
        objective: "O1",
        notYet: "Menos de cinco ideas, o se usó la primera idea de la IA tal cual.",
        meets: "Por lo menos cinco ideas, con una cambiada o combinada en una idea propia.",
        exceeds: "Puede mostrar qué ideas combinó y por qué escogió esa."
      },
      {
        name: "Diseño del cartel",
        objective: "O2",
        notYet: "Faltan el título o la fecha, la hora y el lugar, o son difíciles de leer.",
        meets: "Un título grande, unas pocas líneas cortas, colores claros, y la fecha, la hora y el lugar fáciles de leer.",
        exceeds: "El diseño va con el club o el evento, y un compañero lo puede leer desde el otro lado del salón."
      },
      {
        name: "Voz propia",
        objective: "O3",
        notYet: "Nada del cartel es propio, o usa arte o un logotipo de otra persona.",
        meets: "Incluye algo que solo la persona podría agregar, como una foto, un dibujo o un lema.",
        exceeds: "La mayoría de las palabras y decisiones son claramente propias."
      },
      {
        name: "Nota de crédito",
        objective: "O3",
        notYet: "No hay nota, o esconde cómo ayudó la IA.",
        meets: "Una nota corta dice lo que hizo la IA y lo que hizo la persona.",
        exceeds: "La nota es concreta, por ejemplo qué herramienta buscó las ideas."
      },
      {
        name: "Siguió las reglas",
        objective: "O6",
        notYet: "Usó una herramienta o función contra su regla de edad, las reglas de la escuela o las del concurso.",
        meets: "Cada herramienta y función usada está permitida para su edad y su escuela.",
        exceeds: "Puede explicar qué reglas revisó y dónde."
      }
    ]
  },
  evaluation: {
    results: [
      "Jóvenes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Jóvenes que dicen en la encuesta de seguimiento a los 30 días que usan la IA para ponerse a prueba o aprender una habilidad",
      "Carteles o proyectos hechos en el curso que de verdad usa un club, un evento o una clase",
      "Jóvenes que empiezan otro curso juvenil de Koach Learn dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono, una computadora de la escuela o de la biblioteca con internet",
      "Un asistente de IA gratuito que la persona tenga permiso de usar, y Canva, Google Slides o PowerPoint",
      "Apuntes de clase de una materia para las lecciones de estudio",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Revisa las reglas de edad de cada herramienta y función de imágenes con IA antes de la clase, y usa cuentas de la escuela donde la escuela las dé.",
      "Comparte al inicio las reglas de IA de tu escuela o programa, incluido si se permiten imágenes hechas con IA.",
      "Recuérdales que no peguen información privada cuando conviertan sus apuntes en preguntas de práctica.",
      "Haz una muestra corta de carteles en la que cada persona explique su nota de crédito y la parte que es suya.",
      "Califica el cartel con la rúbrica y da retroalimentación sobre una fila en Todavía no a la vez."
    ]
  }
};
