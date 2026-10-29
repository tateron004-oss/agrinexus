"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-ai-youth-mentoring.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-youth-mentoring-es",
  lang: "es",
  translationOf: "underserved-ai-youth-mentoring",
  category: "Undeserved Community",
  name: "IA para la mentoría de jóvenes",
  skills: "Seguir las reglas de seguridad para la mentoría de menores, Planear una sesión de mentoría con IA, Hacer buenas preguntas y escuchar, Enseñar el uso honesto de la IA en la escuela, Explorar carreras juntos, Dar seguimiento al avance de un joven",
  outcome: "planear y dirigir una sesión de mentoría segura de 45 minutos con un joven, usando un asistente de IA gratuito para preparar la actividad y las preguntas, y mostrándole cómo usar la IA con honestidad para sus metas de la escuela y de su carrera.",
  about: [
    "A los jóvenes de cualquier barrio les va mejor cuando tienen a un adulto que se preocupa por ellos y los apoya. Este curso es para mentores voluntarios en iglesias, centros comunitarios, escuelas, ligas deportivas y programas juveniles, incluidos los mentores que son nuevos en la tecnología.",
    "Vas a aprender las reglas de seguridad que protegen a los jóvenes y a ti, cómo planear una sesión con un asistente de IA gratuito, cómo hacer preguntas que abran una conversación de verdad, cómo ayudar a tu joven a usar la IA con honestidad en la escuela y cómo explorar carreras y dar seguimiento a su avance juntos.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" que va armando un plan de sesión real. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Sigue siempre las políticas de tu propio programa de mentoría; van antes que cualquier cosa de este curso."
  ],
  finalTask: "Escribe y dirige (o practica con otro adulto haciendo los papeles) un plan de sesión de mentoría de 45 minutos hecho con ayuda de un asistente de IA gratuito: una meta, una pregunta para romper el hielo, una actividad, tres preguntas abiertas, una demostración corta del uso honesto de la IA para la tarea o para explorar carreras, y una nota de avance de una línea. El plan debe seguir las reglas de seguridad de tu programa y no tener datos privados del joven.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mentores voluntarios de comunidades desatendidas en iglesias, centros comunitarios, escuelas, ligas deportivas y programas juveniles, incluidos mentores que son nuevos con la tecnología.",
    startingPoint: "Les importan los jóvenes y quizás han criado hijos o han sido entrenadores, pero nadie les ha capacitado en seguridad para la mentoría, preguntas abiertas o cómo planear una sesión. Muchos han usado poco la IA y no están seguros de cómo deben usarla los jóvenes para la escuela.",
    gap: "A los jóvenes les va mejor con un adulto que se preocupa por ellos, pero los mentores necesitan hábitos seguros, un plan para cada sesión y una forma de guiar el uso honesto de la IA para la escuela y las carreras. Sin esto, las sesiones se pierden, la privacidad corre riesgo y los jóvenes pueden usar mal la IA.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de sexto o séptimo grado)",
      "Dispositivos: un teléfono inteligente o una computadora del programa",
      "Primero va la política del programa: revisión de antecedentes, reuniones en lugares públicos, formas de contacto aprobadas y pasos para reportar",
      "Privacidad: nada del nombre, la escuela, las fotos ni las historias privadas de un joven en la IA ni en notas sueltas",
      "Las escuelas y las herramientas de IA tienen sus propias reglas y límites de edad, que se revisan con el maestro y con la madre, el padre o el tutor"
    ],
    prerequisites: "La revisión de antecedentes y la capacitación de tu propio programa de mentoría. Quien es nuevo con los asistentes de IA puede tomar primero \"Introducción a la IA y el empoderamiento digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Cada vez que te reúnes con un joven", action: "seguir las reglas de seguridad de tu programa y los pasos que debes dar si un joven te cuenta de un daño", standard: "nombrando al menos cinco reglas y los pasos para reportar sin ayuda" },
    { id: "O2", condition: "Con un asistente de IA gratuito", action: "planear una sesión de 45 minutos con un calentamiento, una actividad, una plática y los siguientes pasos", standard: "dándole a la IA solo detalles generales y revisando que el plan sea seguro, barato y adecuado" },
    { id: "O3", condition: "En una conversación con un joven", action: "hacer preguntas abiertas y repetir lo que escuchaste antes de dar consejos", standard: "usando al menos tres preguntas abiertas con tus propias palabras" },
    { id: "O4", condition: "Cuando un joven usa la IA para la escuela", action: "demostrar un uso honesto de la IA para explicar, hacer preguntas de práctica y dar comentarios, y revisar sus respuestas", standard: "siguiendo las reglas de la escuela y de la herramienta, y sin entregar nunca el trabajo de la IA" },
    { id: "O5", condition: "Con los intereses de un joven", action: "explorar carreras con la IA y revisar una en bls.gov/ooh", standard: "terminando con un siguiente paso pequeño y una fecha" },
    { id: "O6", condition: "Después de cada sesión", action: "escribir una nota de avance corta y privada y celebrar un logro", standard: "usando solo iniciales y sin pegar nunca las notas en la IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Una mentoría segura y sólida con IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "El papel del mentor y las reglas de seguridad",
          minutes: 5,
          goal: "Nombrar las reglas de seguridad que vas a seguir cada vez que te reúnas con un joven.",
          text: [
            "Un mentor es un adulto de confianza que escucha, anima y ayuda a un joven a ponerse metas y alcanzarlas. No eres su padre, su maestro ni su terapeuta; eres una guía constante y que se preocupa por él.",
            "Los programas protegen a los jóvenes y a los mentores con reglas. Algunas comunes: una revisión de antecedentes antes de empezar, reunirse en lugares públicos o aprobados, tener a otro adulto cerca en lugar de estar a solas con un joven, el contacto solo por medios aprobados, y nunca dar aventones, regalos ni dinero a menos que tu programa lo permita. La política de tu programa es la regla que hay que seguir.",
            "Si un joven te cuenta que alguien le hace daño o que está en peligro, mantén la calma, escucha, no prometas guardar el secreto y sigue de inmediato los pasos de reporte de tu programa. En una emergencia llama al 911. La línea nacional de Childhelp contra el abuso infantil en Estados Unidos es el (800) 422-4453."
          ],
          steps: ["Completa la revisión de antecedentes y la capacitación de tu programa.", "Reúnete solo en lugares públicos o aprobados, con otro adulto cerca.", "Usa solo las formas de contacto aprobadas con tu joven.", "Si un joven te cuenta de un daño: escucha, no prometas secreto, sigue los pasos de reporte."],
          words: [["Mentor", "un adulto de confianza que guía y anima a un joven."], ["Joven acompañado", "el joven que recibe la mentoría."], ["Revisión de antecedentes", "una revisión de los registros de una persona antes de que trabaje con jóvenes."]],
          sources: [{ name: "Línea nacional de Childhelp contra el abuso infantil", url: "https://www.childhelphotline.org/" }, { name: "MENTOR: Elementos de una práctica eficaz de mentoría", url: "https://www.mentoring.org/resource/elements-of-effective-practice-for-mentoring/" }],
          slides: [
            { title: "Un mentor es", bullets: ["Un adulto de confianza que se preocupa", "Alguien que escucha y anima", "No es padre, maestro ni terapeuta"] },
            { title: "Reglas de seguridad comunes", bullets: ["Primero la revisión de antecedentes", "Lugares públicos o aprobados, otro adulto cerca", "Solo contacto aprobado; sin aventones ni regalos si no se permite"] },
            { title: "Si un joven te cuenta de un daño", bullets: ["Mantén la calma y escucha", "No prometas guardar el secreto", "Sigue los pasos de reporte; emergencias: 911"] },
            { title: "La política de tu programa va primero", bullets: ["Línea de Childhelp: (800) 422-4453"] }
          ],
          tryIt: "Busca la política de mentoría de tu programa (o pregúntale al coordinador). Escribe cinco reglas que vas a seguir cada vez que te reúnas con tu joven.",
          youCanNow: "explicar el papel de un mentor y las reglas de seguridad que sigues.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es el papel de un mentor?", options: ["Un guía constante y cariñoso que escucha y anima", "Alguien que reemplaza a la madre o al padre", "Un terapeuta", "Un maestro que pone calificaciones"], answer: 0, why: "Un mentor es un adulto de confianza que guía, no una madre o un padre, un maestro ni un terapeuta." },
            { objective: "O1", q: "Tu joven te pide que lo lleves a su casa después de una sesión. ¿Qué haces?", options: ["Lo llevas; es un gesto amable", "Sigues la política de tu programa sobre llevar a los jóvenes", "Le pides que lo mantenga en secreto", "Dejas que se vaya caminando solo de noche"], answer: 1, why: "Nunca lleves a un joven en tu auto a menos que tu programa lo permita; la política es la regla." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Planear una sesión con IA",
          minutes: 5,
          goal: "Usar un asistente de IA gratuito para planear una sesión de 45 minutos con una meta clara.",
          text: [
            "Una buena sesión tiene cuatro partes: romper el hielo (5 minutos), una actividad (20 minutos), una plática sobre lo que aprendieron (15 minutos) y un plan para la próxima vez (5 minutos).",
            "Un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini puede sugerir actividades. Describe al joven solo de forma general: rango de edad, intereses y meta. Ejemplo: \"Planea una sesión de mentoría de 45 minutos para alguien de 14 años a quien le encanta el básquetbol y quiere subir su calificación de matemáticas. Incluye una actividad para romper el hielo, una actividad de bajo costo y tres preguntas.\"",
            "Nunca le des a la IA el nombre del joven, su escuela, su dirección, fotos, problemas familiares ni nada que te haya contado en confianza. Luego revisa el plan: ¿Es seguro, gratis o barato, y adecuado para este joven?"
          ],
          steps: ["Elige una meta para la sesión.", "Describe al joven solo de forma general: edad, intereses, meta.", "Pide a la IA una actividad para romper el hielo, una actividad y preguntas.", "Revisa el plan por seguridad, costo y si le queda, y cambia lo que no le quede."],
          words: [["Sesión", "una reunión entre un mentor y un joven."], ["Romper el hielo", "un inicio corto y fácil que ayuda a que la gente se relaje."]],
          slides: [
            { title: "Una sesión de 45 minutos", bullets: ["Romper el hielo: 5 minutos", "Actividad: 20 minutos", "Plática: 15 minutos; siguientes pasos: 5"] },
            { title: "Pregunta a la IA con datos generales", bullets: ["Rango de edad, intereses, meta", "Pide romper el hielo, actividad y preguntas"] },
            { title: "Nunca compartas con la IA", bullets: ["Nombre, escuela, dirección o fotos", "Problemas familiares o algo dicho en confianza"] },
            { title: "Revisa el plan", bullets: ["¿Es seguro?", "¿Es gratis o barato?", "¿Es adecuado para este joven?"] }
          ],
          tryIt: "Pide a la IA que planee una sesión de 45 minutos para un joven al que acompañas o podrías acompañar, usando solo datos generales. Cambia una parte para que le quede mejor.",
          youCanNow: "planear una sesión de mentoría con IA protegiendo la privacidad del joven.",
          quickCheck: [
            { objective: "O2", q: "¿Cuánto dura la actividad en el plan de sesión de 45 minutos?", options: ["5 minutos", "10 minutos", "20 minutos", "40 minutos"], answer: 2, why: "El plan es de 5 minutos de calentamiento, 20 de actividad, 15 de plática y 5 de siguientes pasos." },
            { objective: "O2", q: "La IA sugiere un paseo pagado a un parque de diversiones para tu sesión. ¿Qué haces?", options: ["Lo reservas", "Le pides a la familia del joven que pague", "Lo usas tal como está", "Lo cambias por una actividad gratuita o barata que sea adecuada"], answer: 3, why: "Revisas que el plan de la IA sea seguro, barato y adecuado, y cambias lo que no lo es." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer buenas preguntas y escuchar de verdad",
          minutes: 5,
          goal: "Escribir tres preguntas abiertas y practicar escuchar sin querer arreglarlo todo.",
          text: [
            "Las preguntas cerradas reciben respuestas de una palabra: \"¿Te fue bien en la escuela?\" \"Sí.\" Las preguntas abiertas invitan a una respuesta de verdad: \"¿Qué fue lo mejor de tu semana?\" \"¿En qué te gustaría mejorar?\"",
            "Escuchar importa más que hablar. Míralo, guarda tu teléfono, asiente y repite lo que escuchaste: \"¿Entonces el examen de matemáticas te pareció injusto porque estudiaste el capítulo equivocado?\" No te apures a arreglarlo todo; pregúntale qué cree que podría intentar.",
            "La IA puede sugerir maneras de empezar una conversación según el ánimo y los intereses. Pídele diez preguntas abiertas para un adolescente al que le encanta la música y elige las tres que más suenen a ti."
          ],
          steps: ["Convierte las preguntas cerradas en abiertas.", "Guarda tu teléfono y pon toda tu atención.", "Repite lo que escuchaste.", "Pregunta qué cree que podría intentar antes de dar consejos."],
          words: [["Pregunta abierta", "una pregunta que no se puede responder con sí o no."], ["Escucha activa", "escuchar con atención y repetir lo que escuchaste."]],
          slides: [
            { title: "Cerradas o abiertas", bullets: ["Cerrada: \"¿Te fue bien en la escuela?\"", "Abierta: \"¿Qué fue lo mejor de tu semana?\""] },
            { title: "Escucha de verdad", bullets: ["Teléfono guardado, mirada arriba", "Asiente y repite", "Pregunta qué podría intentar antes de aconsejar"] },
            { title: "La IA para empezar conversaciones", bullets: ["Pide diez preguntas abiertas", "Elige tres que suenen a ti"] }
          ],
          tryIt: "Pide a la IA diez preguntas abiertas para un joven con un pasatiempo que conoces. Elige tres y reescríbelas con tus propias palabras.",
          youCanNow: "hacer preguntas abiertas y escuchar de una forma que ayuda a los jóvenes a hablar.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una pregunta abierta?", options: ["Una que invita a una respuesta de verdad, no solo sí o no", "Una pregunta con una sola respuesta correcta", "Una pregunta solo sobre calificaciones", "Una pregunta hecha en voz alta"], answer: 0, why: "Las preguntas abiertas invitan a los jóvenes a contar más que una palabra." },
            { objective: "O3", q: "Tu joven dice que el entrenamiento estuvo terrible. ¿Qué le dices primero?", options: ["\"Mejor sal del equipo.\"", "\"O sea que el entrenamiento se sintió muy difícil hoy. ¿Qué pasó?\"", "\"Yo he tenido días peores.\"", "\"Hablemos de otra cosa.\""], answer: 1, why: "Repetir lo que escuchaste y preguntar más muestra que estás escuchando." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Una mentoría segura y sólida con IA",
        questions: [
          { objective: "O1", q: "¿Cuál es una regla de seguridad común en la mentoría?", options: ["Reunirse a solas en tu auto", "Reunirse en lugares públicos o aprobados con otro adulto cerca", "Mandar mensajes privados tarde en la noche", "Dar dinero cuando te lo pidan"], answer: 1, why: "Los lugares públicos o aprobados con otro adulto cerca protegen a todos." },
          { objective: "O1", q: "Un joven te cuenta que alguien en su casa le hace daño y te pide que guardes el secreto. Tú:", options: ["Prometes guardar el secreto", "Lo ignoras", "Escuchas, no prometes secreto y sigues los pasos de reporte de tu programa", "Lo publicas en internet"], answer: 2, why: "La seguridad va primero; sigue de inmediato los pasos de reporte." },
          { objective: "O2", q: "¿Qué dato está bien darle a la IA al planear una sesión?", options: ["El nombre completo del joven", "Su escuela y su dirección", "Algo que te contó en confianza", "\"Alguien de 14 años a quien le encanta el básquetbol\""], answer: 3, why: "Los datos generales como la edad y los intereses bastan." },
          { objective: "O3", q: "¿Cuál es una pregunta abierta?", options: ["\"¿En qué te gustaría mejorar?\"", "\"¿Te fue bien en la escuela?\"", "\"¿Estás cansado?\"", "\"¿Ya comiste?\""], answer: 0, why: "No se puede responder con sí o no." },
          { objective: "O3", q: "Tu joven está molesto por una calificación. Un buen primer paso es:", options: ["Decirle exactamente qué hacer", "Escuchar y repetir lo que escuchaste", "Revisar tu teléfono", "Cambiar de tema"], answer: 1, why: "Escuchar primero le ayuda a sentirse escuchado y a pensarlo bien." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ayudar a los jóvenes a usar bien la IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "El uso honesto de la IA en la escuela",
          minutes: 5,
          goal: "Mostrarle a un joven cómo usar la IA como tutor, no para que haga su trabajo.",
          text: [
            "Muchos estudiantes ya usan la IA. Las escuelas tienen reglas distintas: algunas la permiten para ciertas tareas, otras no. Revisa siempre primero las reglas de la escuela y del maestro. Muchas herramientas de IA también tienen una edad mínima y pueden necesitar permiso de la madre, el padre o el tutor para adolescentes; revisa las condiciones de cada herramienta con la madre, el padre o el tutor.",
            "Usarla con honestidad quiere decir que la IA te ayuda a aprender, no que hace el trabajo por ti. Buenos usos: \"Explícame las fracciones como si tuviera 12 años.\" \"Pregúntame estas palabras de vocabulario.\" \"Dame comentarios sobre mi párrafo, pero no lo reescribas.\" Copiar las respuestas de la IA y entregarlas como tuyas es hacer trampa.",
            "Enséñale también a revisar a la IA. Se puede equivocar. Compara con el libro de texto, los apuntes de clase o el maestro."
          ],
          steps: ["Revisa las reglas de IA de la escuela y del maestro.", "Revisa las reglas de edad de la herramienta con la madre, el padre o el tutor.", "Usa la IA para explicar, hacer preguntas o dar comentarios.", "Nunca entregues el trabajo de la IA como tuyo.", "Revisa las respuestas con los materiales de clase."],
          words: [["Tutor", "alguien o algo que te ayuda a aprender, no que hace el trabajo por ti."], ["Hacer trampa", "entregar un trabajo que no es tuyo como si lo fuera."]],
          slides: [
            { title: "Primero las reglas", bullets: ["Reglas de IA de la escuela y del maestro", "Edad mínima de la herramienta y permiso de los padres"] },
            { title: "La IA como tutor", bullets: ["\"Explícame las fracciones como si tuviera 12\"", "\"Pregúntame estas palabras\"", "\"Dame comentarios, no lo reescribas\""] },
            { title: "No está bien", bullets: ["Copiar las respuestas de la IA como tuyas", "Confiar en la IA sin revisar"] }
          ],
          tryIt: "Con tu joven (o tú solo para practicar), pide a la IA que explique con palabras sencillas un tema de la escuela y luego que te haga tres preguntas. Revisa una respuesta con un libro de texto o los apuntes de clase.",
          youCanNow: "mostrarle a un joven cómo usar la IA con honestidad como ayuda para estudiar.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es un buen pedido a la IA para la escuela?", options: ["\"Escribe mi ensayo por mí.\"", "\"Haz mi tarea de matemáticas.\"", "\"Dame comentarios sobre mi párrafo, pero no lo vuelvas a escribir.\"", "\"Contesta las preguntas del examen.\""], answer: 2, why: "Pedir comentarios ayuda al estudiante a aprender mientras hace su propio trabajo." },
            { objective: "O4", q: "Tu joven de 12 años quiere registrarse en una herramienta de IA. ¿Qué haces primero?", options: ["Lo registras con tu correo", "Le dices que mienta sobre su edad", "Te saltas las reglas de la escuela", "Revisas las reglas de edad de la herramienta con su madre, su padre o su tutor"], answer: 3, why: "Muchas herramientas de IA tienen reglas de edad que necesitan la revisión de la madre, el padre o el tutor." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Explorar carreras y metas juntos",
          minutes: 5,
          goal: "Usar la IA y un sitio oficial para explorar una carrera con tu joven.",
          text: [
            "Los jóvenes muchas veces solo conocen los trabajos que ven a su alrededor. Explorar carreras abre puertas. Empieza por lo que les encanta: videojuegos, música, deportes, arreglar cosas, ayudar a la gente, dibujar.",
            "Pregunta a la IA: \"Haz una lista de cinco carreras para un adolescente al que le encantan los videojuegos y el arte. Para cada una, di en una frase en qué consiste el trabajo y qué hay que estudiar.\" Luego busquen juntos un empleo en el Occupational Outlook Handbook en bls.gov/ooh, la guía gratuita del gobierno de Estados Unidos, para revisar su sueldo, capacitación y perspectivas de empleo.",
            "Convierte el interés en una meta pequeña: unirse a un club, tomar una clase gratis en la biblioteca, hablar con alguien que hace ese trabajo o probar una lección gratuita en línea."
          ],
          steps: ["Pregunta qué le encanta.", "Pide a la IA cinco carreras relacionadas.", "Busquen una juntos en bls.gov/ooh.", "Pongan un pequeño siguiente paso con fecha."],
          words: [["Carrera", "el tipo de trabajo que alguien hace durante muchos años."], ["Perspectivas de empleo", "qué tan rápido se espera que crezca un empleo."]],
          sources: [{ name: "Oficina de Estadísticas Laborales de EE. UU.: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          slides: [
            { title: "Empieza con lo que le encanta", bullets: ["Videojuegos, música, deportes", "Arreglar cosas, ayudar a la gente, arte"] },
            { title: "Explora con la IA, revisa en lo oficial", bullets: ["Pide a la IA cinco carreras relacionadas", "Revisa una en bls.gov/ooh: sueldo, capacitación, perspectivas"] },
            { title: "Un pequeño siguiente paso", bullets: ["Unirse a un club o una clase gratis", "Hablar con alguien de ese trabajo", "Ponerle fecha"] }
          ],
          tryIt: "Elige un interés (tuyo o de tu joven). Pide a la IA cinco carreras relacionadas, revisa una en bls.gov/ooh y escribe un pequeño siguiente paso con fecha.",
          youCanNow: "ayudar a un joven a explorar carreras y ponerse un siguiente paso pequeño y real.",
          quickCheck: [
            { objective: "O5", q: "¿Qué muestra el Occupational Outlook Handbook sobre un empleo?", options: ["El sueldo, la capacitación y las perspectivas", "Solo las vacantes cerca de ti", "Las carreras de los famosos", "Las calificaciones de la escuela"], answer: 0, why: "El manual en bls.gov/ooh muestra el sueldo, la capacitación y las perspectivas de un empleo." },
            { objective: "O5", q: "A tu joven le gusta dibujar y la IA menciona diseñador gráfico. ¿Cuál es un buen siguiente paso?", options: ["Decirle que no es un trabajo de verdad", "Poner un paso pequeño, como una clase gratuita en la biblioteca, con una fecha", "Elegirle otra carrera", "Esperar a que termine la escuela"], answer: 1, why: "Convertir un interés en un paso pequeño con fecha crea impulso." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dar seguimiento al avance y juntarlo todo",
          minutes: 5,
          goal: "Llevar notas de avance sencillas y privadas, y terminar tu plan de sesión.",
          text: [
            "Las notas cortas te ayudan a recordar metas y celebrar logros. Después de cada sesión, escribe una o dos líneas: la meta, lo que hicieron, un logro y el siguiente paso. Usa solo nombres de pila o iniciales, y guarda las notas donde diga tu programa.",
            "Celebra el avance, aunque sean pasos pequeños: subir una calificación, terminar una solicitud, llegar a tiempo. Los jóvenes recuerdan cuando un adulto lo notó.",
            "No pegues notas sobre un joven en la IA. Si quieres ayuda, pregunta de forma general: \"¿Qué formas divertidas hay de celebrar que un adolescente subió una calificación?\""
          ],
          steps: ["Después de cada sesión, escribe la meta, lo que hicieron, un logro y el siguiente paso.", "Usa solo iniciales y guarda las notas donde diga tu programa.", "Celebra los pequeños logros.", "Hazle a la IA solo preguntas generales, nunca sobre un joven en particular."],
          words: [["Nota de avance", "un registro corto de lo que pasó y lo que sigue."]],
          slides: [
            { title: "Notas de avance sencillas", bullets: ["Meta y lo que hicieron", "Un logro y el siguiente paso", "Solo iniciales; guárdalas como diga tu programa"] },
            { title: "Celebra los pequeños logros", bullets: ["Subir una calificación", "Terminar una solicitud", "Llegar a tiempo"] },
            { title: "Las notas fuera de la IA", bullets: ["Haz solo preguntas generales", "Nunca sobre un joven en particular"] }
          ],
          tryIt: "Tarea final: escribe tu plan de sesión de 45 minutos con ayuda de la IA: meta, romper el hielo, actividad, tres preguntas abiertas, una demostración del uso honesto de la IA para la escuela o las carreras, y una nota de avance de una línea. Revísalo con las reglas de seguridad de tu programa y luego dirígelo o practícalo con otro adulto.",
          youCanNow: "planear, dirigir y dar seguimiento a sesiones de mentoría seguras que ayudan a los jóvenes a usar bien la IA.",
          quickCheck: [
            { objective: "O6", q: "¿Cómo debes nombrar a tu joven en las notas de avance?", options: ["Con su nombre completo y su escuela", "Con su nombre completo y su dirección", "Solo con sus iniciales o su nombre de pila", "Con su número de teléfono"], answer: 2, why: "Usar solo las iniciales o el nombre de pila mantiene privada la información del joven." },
            { objective: "O6", q: "Quieres ideas para celebrar que tu joven subió una calificación. ¿Qué le preguntas a la IA?", options: ["Pegas todas tus notas de las sesiones", "Incluyes su nombre y su escuela", "Subes su boleta de calificaciones", "Haces una pregunta general sobre cómo celebrar que un adolescente subió una calificación"], answer: 3, why: "Hazle a la IA solo preguntas generales, nunca sobre un joven en particular." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Ayudar a los jóvenes a usar bien la IA",
        questions: [
          { objective: "O4", q: "Antes de que tu joven use la IA para la tarea, revisa:", options: ["Nada", "Solo el clima", "Las reglas de IA de la escuela y del maestro", "Sus redes sociales"], answer: 2, why: "Las escuelas tienen reglas de IA distintas; revísalas primero." },
          { objective: "O4", q: "¿Cuál es un uso honesto de la IA en la escuela?", options: ["Copiar el ensayo de la IA", "Que la IA haga la tarea de matemáticas", "Entregar el trabajo de la IA como tuyo", "\"Pregúntame estas palabras de vocabulario\""], answer: 3, why: "Usar la IA para practicar te ayuda a aprender." },
          { objective: "O5", q: "La IA le da a tu joven una lista de carreras. ¿Cómo revisas el sueldo y la capacitación?", options: ["Lo buscas en bls.gov/ooh", "Confías en la IA", "Le preguntas a un desconocido en internet", "No lo revisas"], answer: 0, why: "El Occupational Outlook Handbook es la fuente oficial." },
          { objective: "O6", q: "¿Cuál es la mejor nota de avance?", options: ["Nombre completo, escuela y problemas familiares", "\"J.: meta subir matemáticas; practicamos fracciones; logro: B en la prueba; sigue: plan de estudio.\"", "Nada", "Una foto publicada en internet"], answer: 1, why: "Es corta, usa iniciales y registra la meta, el logro y el siguiente paso." },
          { objective: "O6", q: "¿Puedes pegar tus notas sobre un joven en la IA para pedir consejo?", options: ["Sí, siempre", "Solo si son cortas", "No; haz solo preguntas generales", "Sí, con su foto"], answer: 2, why: "La información sobre un joven se queda en privado." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la mentoría de jóvenes",
    questions: [
      { objective: "O1", q: "La mejor forma de describir a un mentor es:", options: ["Un adulto de confianza que escucha y anima", "El jefe de un joven", "Un terapeuta", "Un maestro que pone calificaciones"], answer: 0, why: "Los mentores son guías que se preocupan, no padres, maestros ni terapeutas." },
      { objective: "O1", q: "¿Qué reglas van primero cuando das mentoría?", options: ["Las de la IA", "La política de tu programa de mentoría", "Las de tus amigos", "Las de las redes sociales"], answer: 1, why: "Sigue siempre la política de tu programa." },
      { objective: "O1", q: "¿Qué se pide casi siempre antes de dar mentoría a jóvenes?", options: ["Un regalo para el joven", "Un auto", "Una revisión de antecedentes", "Una cuenta de redes sociales"], answer: 2, why: "Los programas suelen pedir revisión de antecedentes." },
      { objective: "O1", q: "En una emergencia sobre la seguridad de un joven, tú:", options: ["Esperas a la próxima semana", "Lo publicas en internet", "Le preguntas a la IA", "Llamas al 911"], answer: 3, why: "Las emergencias necesitan ayuda inmediata." },
      { objective: "O1", q: "¿Qué número es la línea nacional de Childhelp contra el abuso infantil?", options: ["(800) 422-4453", "(800) 555-0000", "411", "0"], answer: 0, why: "La línea de Childhelp es el (800) 422-4453." },
      { objective: "O2", q: "Una buena sesión de mentoría tiene:", options: ["Solo tiempo con el teléfono", "Romper el hielo, actividad, plática y siguientes pasos", "Ningún plan", "Un examen"], answer: 1, why: "Esas cuatro partes le dan forma a la sesión." },
      { objective: "O2", q: "¿Qué es seguro decirle a la IA al planear?", options: ["La dirección del joven", "El nombre de su escuela", "Rango de edad, intereses y meta", "Algo que te contó en confianza"], answer: 2, why: "Los datos generales bastan para planear." },
      { objective: "O2", q: "Después de que la IA sugiere un plan de sesión, debes:", options: ["Usarlo sin leerlo", "Compartirlo en redes sociales", "Agregar el nombre del joven", "Revisar que sea seguro, barato y adecuado para el joven"], answer: 3, why: "Tú conoces al joven; la IA no." },
      { objective: "O3", q: "¿Cuál es una pregunta cerrada?", options: ["\"¿Te fue bien en la escuela?\"", "\"¿Qué te hizo reír esta semana?\"", "\"¿Qué cambiarías de tu día?\"", "\"¿Qué quieres aprender después?\""], answer: 0, why: "Se puede responder con sí o no." },
      { objective: "O3", q: "La escucha activa quiere decir:", options: ["Revisar tu teléfono mientras habla", "Escuchar con atención y repetir lo que escuchaste", "Hablar más que él", "Arreglar cada problema de inmediato"], answer: 1, why: "Repetir muestra que entendiste." },
      { objective: "O3", q: "Antes de dar un consejo, ayuda:", options: ["Terminar la sesión", "Cambiar de tema", "Preguntarle qué cree que podría intentar", "Preguntarle a la IA sobre él por su nombre"], answer: 2, why: "Sus propias ideas le dan confianza." },
      { objective: "O3", q: "¿Con qué le puede ayudar la IA a un mentor?", options: ["Guardar secretos", "Tomar decisiones de seguridad", "Reemplazar al mentor", "Sugerir maneras de empezar una conversación"], answer: 3, why: "La IA puede sugerir preguntas; tú eliges y diriges." },
      { objective: "O4", q: "Antes de que un adolescente se inscriba en una herramienta de IA, revisa:", options: ["Las reglas de edad de la herramienta, con la madre, el padre o el tutor", "Nada", "Solo los colores", "Cuántos amigos la usan"], answer: 0, why: "Muchas herramientas tienen límites de edad y piden permiso de los padres para adolescentes." },
      { objective: "O4", q: "Entregar el ensayo de la IA como si fuera tuyo es:", options: ["Está bien", "Hacer trampa", "Obligatorio", "Estudiar"], answer: 1, why: "El trabajo debe ser tuyo." },
      { objective: "O4", q: "¿Cuál es una buena instrucción de estudio para la IA?", options: ["\"Escribe mi ensayo\"", "\"Haz toda mi tarea\"", "\"Explícame las fracciones como si tuviera 12 y luego hazme preguntas\"", "\"Contesta mi examen\""], answer: 2, why: "Usa la IA como tutor." },
      { objective: "O4", q: "La IA le da a tu joven una respuesta que no coincide con el libro de texto. Debe:", options: ["Confiar en la IA", "Ignorar los dos", "Cambiar el libro", "Revisar con los apuntes de clase o con el maestro"], answer: 3, why: "La IA se puede equivocar; revisa con los materiales de clase." },
      { objective: "O5", q: "Una buena forma de empezar a explorar carreras es:", options: ["Preguntar qué le encanta al joven", "Elegirle un empleo", "Elegir solo el empleo que paga más", "Saltárselo"], answer: 0, why: "Los intereses llevan a carreras que le van a importar." },
      { objective: "O5", q: "La guía oficial y gratuita de sueldos y capacitación por empleo es:", options: ["Un anuncio emergente", "El Occupational Outlook Handbook en bls.gov/ooh", "Un video de redes sociales", "Un mensaje de un desconocido"], answer: 1, why: "La publica la Oficina de Estadísticas Laborales de Estados Unidos." },
      { objective: "O6", q: "Una nota de avance debe usar:", options: ["Nombres completos y direcciones", "Fotos", "Iniciales y la meta, un logro y el siguiente paso", "Secretos familiares"], answer: 2, why: "Las notas cortas con iniciales protegen la privacidad." },
      { objective: "O6", q: "¿Por qué celebrar los pequeños logros?", options: ["Lo exige la ley", "Para publicarlo en internet", "Reemplaza las metas", "Los jóvenes recuerdan cuando un adulto lo notó"], answer: 3, why: "Notar el avance da motivación y confianza." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      5,
      6,
      8,
      9,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Plan de sesión",
        objective: "O2",
        notYet: "Falta la meta, el calentamiento o la actividad, o no cabe en 45 minutos.",
        meets: "Una meta, un calentamiento, una actividad, una plática y los siguientes pasos que caben en 45 minutos.",
        exceeds: "Cambió el plan de la IA para que vaya con los intereses del joven y sea barato."
      },
      {
        name: "Preguntas abiertas",
        objective: "O3",
        notYet: "Menos de tres preguntas, o preguntas de sí o no.",
        meets: "Tres preguntas abiertas con las propias palabras del mentor.",
        exceeds: "Incluye un plan para repetir lo que dice el joven."
      },
      {
        name: "Demostración del uso honesto de la IA",
        objective: "O4",
        notYet: "En la demostración la IA hace el trabajo, o se salta las reglas de la escuela.",
        meets: "Muestra a la IA explicando o haciendo preguntas de práctica, y revisa una respuesta con los materiales de la clase.",
        exceeds: "También cubre las reglas de edad de la herramienta y las reglas de la escuela sobre la IA."
      },
      {
        name: "Nota de avance",
        objective: "O6",
        notYet: "No hay nota, o usa el nombre completo o datos privados.",
        meets: "Una línea con las iniciales, la meta, un logro y el siguiente paso.",
        exceeds: "Dice dónde se va a guardar la nota según las reglas del programa."
      },
      {
        name: "Seguridad y privacidad",
        objective: "O1",
        notYet: "El plan rompe una regla de seguridad del programa o tiene datos privados del joven.",
        meets: "Sigue las reglas de seguridad del programa y no tiene datos privados.",
        exceeds: "Enumera los pasos para reportar que seguiría el mentor si un joven le contara de un daño."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Mentores que dirigen al menos cuatro sesiones planeadas dentro de 60 días (encuesta de seguimiento)",
      "Jóvenes que se ponen y alcanzan un paso de escuela o de carrera, según reporta el programa",
      "Programas que no reportan incidentes de seguridad ni de privacidad entre los mentores capacitados"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora del programa",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "La política de mentoría y de seguridad del programa",
      "Papel para el plan de sesión y las notas de avance",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Empieza con la política de seguridad y los pasos para reportar de tu propio programa; este curso no los reemplaza.",
      "Durante la capacitación, pide que los mentores ensayen la sesión con otro adulto, no con un joven.",
      "Revisa que ningún prompt ni ninguna nota incluya el nombre, la escuela, las fotos ni las historias privadas de un joven.",
      "Comparte los contactos locales para reportar y la línea de Childhelp, y recuerda a los mentores que llamen al 911 en una emergencia.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
