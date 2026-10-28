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
  chapters: [
    {
      name: "Capítulo 1: Una mentoría segura y sólida con IA",
      lessons: [
        {
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
          youCanNow: "explicar el papel de un mentor y las reglas de seguridad que sigues."
        },
        {
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
          youCanNow: "planear una sesión de mentoría con IA protegiendo la privacidad del joven."
        },
        {
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
          youCanNow: "hacer preguntas abiertas y escuchar de una forma que ayuda a los jóvenes a hablar."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Una mentoría segura y sólida con IA",
        questions: [
          { q: "¿Cuál es una regla de seguridad común en la mentoría?", options: ["Reunirse a solas en tu auto", "Reunirse en lugares públicos o aprobados con otro adulto cerca", "Mandar mensajes privados tarde en la noche", "Dar dinero cuando te lo pidan"], answer: 1, why: "Los lugares públicos o aprobados con otro adulto cerca protegen a todos." },
          { q: "Un joven te cuenta que alguien en su casa le hace daño y te pide que guardes el secreto. Tú:", options: ["Prometes guardar el secreto", "Lo ignoras", "Escuchas, no prometes secreto y sigues los pasos de reporte de tu programa", "Lo publicas en internet"], answer: 2, why: "La seguridad va primero; sigue de inmediato los pasos de reporte." },
          { q: "¿Qué dato está bien darle a la IA al planear una sesión?", options: ["El nombre completo del joven", "Su escuela y su dirección", "Algo que te contó en confianza", "\"Alguien de 14 años a quien le encanta el básquetbol\""], answer: 3, why: "Los datos generales como la edad y los intereses bastan." },
          { q: "¿Cuál es una pregunta abierta?", options: ["\"¿En qué te gustaría mejorar?\"", "\"¿Te fue bien en la escuela?\"", "\"¿Estás cansado?\"", "\"¿Ya comiste?\""], answer: 0, why: "No se puede responder con sí o no." },
          { q: "Tu joven está molesto por una calificación. Un buen primer paso es:", options: ["Decirle exactamente qué hacer", "Escuchar y repetir lo que escuchaste", "Revisar tu teléfono", "Cambiar de tema"], answer: 1, why: "Escuchar primero le ayuda a sentirse escuchado y a pensarlo bien." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ayudar a los jóvenes a usar bien la IA",
      lessons: [
        {
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
          youCanNow: "mostrarle a un joven cómo usar la IA con honestidad como ayuda para estudiar."
        },
        {
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
          youCanNow: "ayudar a un joven a explorar carreras y ponerse un siguiente paso pequeño y real."
        },
        {
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
          youCanNow: "planear, dirigir y dar seguimiento a sesiones de mentoría seguras que ayudan a los jóvenes a usar bien la IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Ayudar a los jóvenes a usar bien la IA",
        questions: [
          { q: "Antes de que tu joven use la IA para la tarea, revisa:", options: ["Nada", "Solo el clima", "Las reglas de IA de la escuela y del maestro", "Sus redes sociales"], answer: 2, why: "Las escuelas tienen reglas de IA distintas; revísalas primero." },
          { q: "¿Cuál es un uso honesto de la IA en la escuela?", options: ["Copiar el ensayo de la IA", "Que la IA haga la tarea de matemáticas", "Entregar el trabajo de la IA como tuyo", "\"Pregúntame estas palabras de vocabulario\""], answer: 3, why: "Usar la IA para practicar te ayuda a aprender." },
          { q: "La IA le da a tu joven una lista de carreras. ¿Cómo revisas el sueldo y la capacitación?", options: ["Lo buscas en bls.gov/ooh", "Confías en la IA", "Le preguntas a un desconocido en internet", "No lo revisas"], answer: 0, why: "El Occupational Outlook Handbook es la fuente oficial." },
          { q: "¿Cuál es la mejor nota de avance?", options: ["Nombre completo, escuela y problemas familiares", "\"J.: meta subir matemáticas; practicamos fracciones; logro: B en la prueba; sigue: plan de estudio.\"", "Nada", "Una foto publicada en internet"], answer: 1, why: "Es corta, usa iniciales y registra la meta, el logro y el siguiente paso." },
          { q: "¿Puedes pegar tus notas sobre un joven en la IA para pedir consejo?", options: ["Sí, siempre", "Solo si son cortas", "No; haz solo preguntas generales", "Sí, con su foto"], answer: 2, why: "La información sobre un joven se queda en privado." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la mentoría de jóvenes",
    questions: [
      { q: "La mejor forma de describir a un mentor es:", options: ["Un adulto de confianza que escucha y anima", "El jefe de un joven", "Un terapeuta", "Un maestro que pone calificaciones"], answer: 0, why: "Los mentores son guías que se preocupan, no padres, maestros ni terapeutas." },
      { q: "¿Qué reglas van primero cuando das mentoría?", options: ["Las de la IA", "La política de tu programa de mentoría", "Las de tus amigos", "Las de las redes sociales"], answer: 1, why: "Sigue siempre la política de tu programa." },
      { q: "¿Qué se pide casi siempre antes de dar mentoría a jóvenes?", options: ["Un regalo para el joven", "Un auto", "Una revisión de antecedentes", "Una cuenta de redes sociales"], answer: 2, why: "Los programas suelen pedir revisión de antecedentes." },
      { q: "En una emergencia sobre la seguridad de un joven, tú:", options: ["Esperas a la próxima semana", "Lo publicas en internet", "Le preguntas a la IA", "Llamas al 911"], answer: 3, why: "Las emergencias necesitan ayuda inmediata." },
      { q: "¿Qué número es la línea nacional de Childhelp contra el abuso infantil?", options: ["(800) 422-4453", "(800) 555-0000", "411", "0"], answer: 0, why: "La línea de Childhelp es el (800) 422-4453." },
      { q: "Una buena sesión de mentoría tiene:", options: ["Solo tiempo con el teléfono", "Romper el hielo, actividad, plática y siguientes pasos", "Ningún plan", "Un examen"], answer: 1, why: "Esas cuatro partes le dan forma a la sesión." },
      { q: "¿Qué es seguro decirle a la IA al planear?", options: ["La dirección del joven", "El nombre de su escuela", "Rango de edad, intereses y meta", "Algo que te contó en confianza"], answer: 2, why: "Los datos generales bastan para planear." },
      { q: "Después de que la IA sugiere un plan de sesión, debes:", options: ["Usarlo sin leerlo", "Compartirlo en redes sociales", "Agregar el nombre del joven", "Revisar que sea seguro, barato y adecuado para el joven"], answer: 3, why: "Tú conoces al joven; la IA no." },
      { q: "¿Cuál es una pregunta cerrada?", options: ["\"¿Te fue bien en la escuela?\"", "\"¿Qué te hizo reír esta semana?\"", "\"¿Qué cambiarías de tu día?\"", "\"¿Qué quieres aprender después?\""], answer: 0, why: "Se puede responder con sí o no." },
      { q: "La escucha activa quiere decir:", options: ["Revisar tu teléfono mientras habla", "Escuchar con atención y repetir lo que escuchaste", "Hablar más que él", "Arreglar cada problema de inmediato"], answer: 1, why: "Repetir muestra que entendiste." },
      { q: "Antes de dar un consejo, ayuda:", options: ["Terminar la sesión", "Cambiar de tema", "Preguntarle qué cree que podría intentar", "Preguntarle a la IA sobre él por su nombre"], answer: 2, why: "Sus propias ideas le dan confianza." },
      { q: "¿Con qué le puede ayudar la IA a un mentor?", options: ["Guardar secretos", "Tomar decisiones de seguridad", "Reemplazar al mentor", "Sugerir maneras de empezar una conversación"], answer: 3, why: "La IA puede sugerir preguntas; tú eliges y diriges." },
      { q: "Antes de que un adolescente se inscriba en una herramienta de IA, revisa:", options: ["Las reglas de edad de la herramienta, con la madre, el padre o el tutor", "Nada", "Solo los colores", "Cuántos amigos la usan"], answer: 0, why: "Muchas herramientas tienen límites de edad y piden permiso de los padres para adolescentes." },
      { q: "Entregar el ensayo de la IA como si fuera tuyo es:", options: ["Está bien", "Hacer trampa", "Obligatorio", "Estudiar"], answer: 1, why: "El trabajo debe ser tuyo." },
      { q: "¿Cuál es una buena instrucción de estudio para la IA?", options: ["\"Escribe mi ensayo\"", "\"Haz toda mi tarea\"", "\"Explícame las fracciones como si tuviera 12 y luego hazme preguntas\"", "\"Contesta mi examen\""], answer: 2, why: "Usa la IA como tutor." },
      { q: "La IA le da a tu joven una respuesta que no coincide con el libro de texto. Debe:", options: ["Confiar en la IA", "Ignorar los dos", "Cambiar el libro", "Revisar con los apuntes de clase o con el maestro"], answer: 3, why: "La IA se puede equivocar; revisa con los materiales de clase." },
      { q: "Una buena forma de empezar a explorar carreras es:", options: ["Preguntar qué le encanta al joven", "Elegirle un empleo", "Elegir solo el empleo que paga más", "Saltárselo"], answer: 0, why: "Los intereses llevan a carreras que le van a importar." },
      { q: "La guía oficial y gratuita de sueldos y capacitación por empleo es:", options: ["Un anuncio emergente", "El Occupational Outlook Handbook en bls.gov/ooh", "Un video de redes sociales", "Un mensaje de un desconocido"], answer: 1, why: "La publica la Oficina de Estadísticas Laborales de Estados Unidos." },
      { q: "Una nota de avance debe usar:", options: ["Nombres completos y direcciones", "Fotos", "Iniciales y la meta, un logro y el siguiente paso", "Secretos familiares"], answer: 2, why: "Las notas cortas con iniciales protegen la privacidad." },
      { q: "¿Por qué celebrar los pequeños logros?", options: ["Lo exige la ley", "Para publicarlo en internet", "Reemplaza las metas", "Los jóvenes recuerdan cuando un adulto lo notó"], answer: 3, why: "Notar el avance da motivación y confianza." }
    ]
  }
};
