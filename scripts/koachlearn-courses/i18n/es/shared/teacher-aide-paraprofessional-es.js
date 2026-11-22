"use strict";

// Koach Learn course (Spanish translation of shared/teacher-aide-paraprofessional.js). See scripts/koachlearn-courses/README.md, "Translations".
// The ParaPro Assessment is given in English, so the English practice sentences and words in the grammar and vocabulary items stay in English.

module.exports = {
  id: "teacher-aide-paraprofessional-es",
  lang: "es",
  translationOf: "teacher-aide-paraprofessional",
  category: "Workforce Development",
  name: "Preparación para asistente de maestro y paraprofesional",
  skills: "Revisar los requisitos de paraprofesional de tu estado, Prepararte para el ParaPro Assessment, Dirigir una actividad en grupo pequeño, Apoyar la conducta y la privacidad de los estudiantes, Proteger a los niños y reportar preocupaciones",
  outcome: "averiguar exactamente qué piden tu estado y tu distrito escolar a un paraprofesional, prepararte para el examen de lectura, escritura y matemáticas que usan muchas escuelas, dirigir una actividad en grupo pequeño a partir del plan de un maestro y mantener a los estudiantes seguros y su información privada.",
  about: [
    "Los asistentes de maestro, también llamados paraprofesionales o paraeducadores, trabajan junto a los maestros para ayudar a los estudiantes a aprender. Las escuelas los contratan para salones generales, educación especial, los primeros grados y estudiantes que aprenden inglés. Es un buen primer trabajo en educación, y muchos asistentes luego se hacen maestros.",
    "Este curso te prepara para el trabajo y para los pasos de contratación. Vas a revisar las reglas de tu propio estado, practicar el tipo de preguntas de lectura, escritura y matemáticas del ParaPro Assessment de ETS (la organización que crea y aplica el examen) y aprender el trabajo diario: dirigir grupos pequeños, apoyar la conducta, mantener privados los expedientes de los estudiantes y reportar cuando un niño puede estar en peligro.",
    "Este curso te prepara; no te da un certificado ni una licencia. Tu estado y tu distrito escolar deciden a quién se puede contratar, y ellos fijan el examen y la puntuación para aprobar. Cada lección te muestra dónde revisar.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas, haz la tarea de \"Pruébalo ahora\" y responde dos preguntas rápidas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz tu Plan de preparación para paraprofesional en una o dos páginas: (1) los requisitos de tu estado y de un distrito, con las páginas oficiales que revisaste; (2) el camino que vas a usar (créditos universitarios, un título o un examen como el ParaPro) y un plan de estudio con fechas; (3) una actividad de 10 minutos en grupo pequeño escrita a partir del plan de ejemplo de un maestro, con las pistas que darás y una nota para el maestro; y (4) los pasos que seguirías y a quién llamarías si pensaras que un niño está sufriendo daño.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes adultos que quieren trabajar en escuelas: padres y madres, voluntarios escolares, choferes de autobús y personal de cafetería que quieren un trabajo en el salón, personas que cambian de carrera, personas que regresan a casa después de estar en prisión (donde las reglas del estado lo permitan) y personas de comunidades desatendidas que quieren servir a las escuelas de su propio barrio.",
    startingPoint: "La mayoría tiene un diploma de escuela secundaria (high school) o el GED y le gusta trabajar con niños. Muchos no han estudiado matemáticas ni gramática en años, no conocen las reglas de contratación y nunca han visto cómo funciona un salón desde el lado del adulto.",
    gap: "Las escuelas necesitan asistentes que cumplan las reglas del estado, puedan aprobar el examen requerido, sigan el plan de un maestro, manejen la conducta con calma y protejan a los niños. Los participantes necesitan conocer las reglas de su propio estado, repasar lectura, escritura y matemáticas y aprender las tareas diarias, para poder postularse con confianza y mantener el trabajo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas, con cada término escolar explicado",
      "Las reglas cambian según el estado y el distrito; el curso enseña cómo revisar, no una sola regla nacional",
      "Dispositivos: un teléfono o una computadora de la biblioteca; la práctica funciona en papel",
      "Seguridad infantil y privacidad de los estudiantes: ningún nombre ni dato real de estudiantes en ninguna práctica",
      "Verificación de antecedentes: la mayoría de las escuelas la exige; el curso lo dice y no le promete un trabajo a nadie"
    ],
    prerequisites: "Para este trabajo se espera un diploma de escuela secundaria o su equivalente. Quien lo necesite puede tomar primero los cursos de GED. \"Matemáticas para la vida diaria\" ayuda a quien quiera más práctica de matemáticas."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Con tu estado y un distrito escolar donde quieres trabajar", action: "enumerar los requisitos que piden a un paraprofesional y las páginas oficiales que los indican", standard: "nombrando el camino de estudios, cualquier examen y su puntuación para aprobar, y la verificación de antecedentes" },
    { id: "O2", condition: "Con preguntas de práctica de lectura, escritura y matemáticas como las del ParaPro Assessment", action: "responder las preguntas y explicar cada error", standard: "acertando al menos 8 de 10" },
    { id: "O3", condition: "Con el plan de clase de un maestro para un grupo pequeño", action: "dirigir una actividad corta de práctica que siga el plan y dé pistas antes de las respuestas", standard: "sin salirte de la meta del maestro y escribiéndole una nota de dos líneas" },
    { id: "O4", condition: "Con una situación de conducta o de privacidad en el salón", action: "elegir pasos tranquilos y positivos y compartir la información de los estudiantes solo con el personal que la necesita", standard: "siguiendo el plan del maestro y el del estudiante" },
    { id: "O5", condition: "Con una situación en la que un niño puede estar sufriendo daño o en peligro", action: "describir los pasos que sigues, a quién le avisas y cuándo", standard: "reportando el mismo día como lo exigen tu estado y tu escuela, sin investigar por tu cuenta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cumplir los requisitos",
      lessons: [
        {
          title: "El trabajo y las reglas de tu estado",
          objectives: ["O1"],
          minutes: 6,
          goal: "Enumerar los requisitos que piden tu estado y un distrito escolar a un paraprofesional.",
          text: [
            "Un paraprofesional trabaja bajo la dirección de un maestro. Puedes ayudar a un grupo pequeño a leer, ayudar a un estudiante con discapacidad a seguir la clase, vigilar el comedor o el patio, o preparar materiales. El maestro planea y califica; tú apoyas. Algunos nombres del puesto son asistente de maestro, asistente de instrucción, paraeducador y asistente de educación especial.",
            "Las reglas federales cubren a los asistentes que ayudan a enseñar en escuelas pagadas por Title I (Título I), el programa federal para escuelas con muchas familias de bajos ingresos. Esos asistentes necesitan un diploma de escuela secundaria o su equivalente, y una de estas opciones: dos años de estudios universitarios, un título asociado (associate degree) o superior, o aprobar un examen formal estatal o local de lectura, escritura y matemáticas. Muchas escuelas usan el ParaPro Assessment de ETS como ese examen.",
            "Cada estado, y a veces cada distrito, pone sus propias reglas además de esas. ETS publica una puntuación ParaPro aceptada para cada estado que lo usa; en algunos estados cada distrito fija su propia puntuación, y algunos estados usan otros exámenes (Rhode Island ahora solo acepta ParaPathways). Casi todas las escuelas también exigen una verificación de antecedentes y huellas digitales. Por eso, revisa siempre tu propio estado y tu distrito antes de pagar un examen.",
            "Dónde revisar: el sitio web del departamento de educación de tu estado, el anuncio de empleo en el sitio web del distrito y la página de requisitos por estado en parapro.ets.org."
          ],
          steps: ["Busca en el sitio del departamento de educación de tu estado \"paraprofessional\" o \"paraeducator\".", "Abre un anuncio de empleo real de un distrito cercano y lee los requisitos.", "Revisa en parapro.ets.org el examen y la puntuación aceptada de tu estado.", "Anota el camino que ya cumples o que vas a usar: créditos universitarios, un título o el examen.", "Anota la verificación de antecedentes y cualquier otro paso (examen de salud, capacitación)."],
          words: [["Paraprofesional", "persona que trabaja en una escuela y ayuda a los estudiantes a aprender bajo la dirección de un maestro; también se llama asistente de maestro o paraeducador."], ["Title I (Título I)", "programa federal que da dinero extra a las escuelas con muchos estudiantes de familias de bajos ingresos."], ["ParaPro Assessment", "examen de ETS sobre habilidades de lectura, escritura y matemáticas, y sobre cómo usarlas para ayudar en un salón."], ["Puntuación aceptada", "la puntuación más baja que acepta tu estado o tu distrito."], ["Verificación de antecedentes", "revisión de los registros penales y de otro tipo que hacen las escuelas antes de contratar."]],
          slides: [
            { title: "Qué hace un paraprofesional", bullets: ["Trabaja bajo la dirección de un maestro", "Ayuda a grupos pequeños y a estudiantes uno a uno", "Apoya a estudiantes con discapacidad y a quienes aprenden inglés", "Prepara materiales y ayuda a vigilar"] },
            { title: "Regla federal para asistentes de instrucción de Title I", bullets: ["Diploma de escuela secundaria o su equivalente", "MÁS dos años de universidad, un título asociado o un examen estatal o local aprobado"] },
            { title: "Tu estado y tu distrito agregan sus propias reglas", bullets: ["Algunos usan el ParaPro; otros usan otros exámenes", "La puntuación aceptada cambia por estado, a veces por distrito", "La verificación de antecedentes y las huellas digitales son comunes"] },
            { title: "Dónde revisar", bullets: ["El departamento de educación de tu estado", "El anuncio de empleo del distrito", "parapro.ets.org: página de requisitos por estado"] }
          ],
          sources: [
            { name: "34 CFR 200.58: requisitos para paraprofesionales de Title I (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/34/200.58" },
            { name: "ETS ParaPro: requisitos y puntuaciones aceptadas por estado", url: "https://parapro.ets.org/state-requirements.html" },
            { name: "ETS ParaPro: sobre el examen", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Busca un anuncio de empleo real de paraprofesional de un distrito escolar cerca de ti. Anota: el nombre del puesto, los estudios o el examen que pide, la verificación de antecedentes y el pago, si aparece. Luego busca tu estado en la página de requisitos por estado de ETS y anota si usa el ParaPro.",
          youCanNow: "enumerar lo que piden tu estado y un distrito cercano a un paraprofesional, y mostrar dónde lo revisaste.",
          quickCheck: [
            { objective: "O1", q: "Además del diploma de escuela secundaria, ¿qué camino cumple la regla federal para un asistente de instrucción de Title I?", options: ["Cinco años cuidando niños", "Una licencia de conducir", "Un título asociado", "Una carta de un padre de familia"], answer: 2, why: "La regla menciona dos años de universidad, un título asociado o superior, o un examen formal estatal o local." },
            { objective: "O1", q: "Un amigo dice que la puntuación para aprobar el ParaPro es la misma en todas partes. ¿Qué haces?", options: ["Revisar tu estado, y tu distrito, en las páginas oficiales", "Creerle y reservar el examen", "No hacer el examen y postularte de todos modos", "Pedirle al amigo que lo haga por ti"], answer: 0, why: "Cada estado fija su puntuación aceptada, y en algunos estados la fija cada distrito." }
          ]
        },
        {
          title: "Práctica para el ParaPro: lectura y escritura",
          objectives: ["O2"],
          minutes: 5,
          goal: "Responder preguntas de práctica de lectura y escritura y explicar cada error.",
          text: [
            "ETS dice que el ParaPro mide habilidades y conocimientos de lectura, escritura y matemáticas, y tu capacidad de usarlos al ayudar en un salón. Así que algunas preguntas te piden leer o escribir bien, y otras te preguntan cómo ayudarías a un estudiante con la lectura o la escritura. El examen es en inglés, por eso los ejemplos de práctica están en inglés.",
            "Las preguntas de lectura pueden pedir la idea principal de un texto, un detalle, qué significa una palabra según las palabras que la rodean, o lo que el autor da a entender sin decirlo. Lee primero la pregunta, luego el texto, y después vuelve a buscar la prueba.",
            "Las preguntas de escritura pueden pedir que encuentres un error de gramática, ortografía o puntuación, o que elijas la mejor forma de corregir una oración. Las preguntas sobre el salón pueden preguntar cómo ayudar a un estudiante a pronunciar una palabra por sonidos o a corregir una oración sin la puntuación correcta.",
            "ETS ofrece gratis un Study Companion y una Study Guide con preguntas de ejemplo en su página de preparación. Úsalos; muestran el tipo real de preguntas mejor que cualquier otra fuente."
          ],
          steps: ["Lee la pregunta antes que el texto.", "Busca la línea del texto que prueba tu respuesta.", "En las preguntas de escritura, lee la oración en voz alta en tu cabeza y escucha qué suena mal.", "Tacha las respuestas que sabes que están mal y luego elige.", "Por cada error, escribe una línea: por qué la respuesta correcta es la correcta."],
          words: [["Idea principal", "de qué trata sobre todo un texto."], ["Pistas del contexto", "las palabras alrededor de una palabra nueva que te ayudan a adivinar su significado."], ["Oración sin puntuación correcta (run-on)", "dos oraciones unidas sin la puntuación o la palabra de enlace correcta."], ["Fonética (phonics)", "relacionar las letras con sus sonidos para leer palabras."]],
          slides: [
            { title: "Qué mide el ParaPro", bullets: ["Lectura, escritura y matemáticas", "Usar esas habilidades para ayudar a los estudiantes en clase"] },
            { title: "Preguntas de lectura", bullets: ["Idea principal y detalles", "Significado de una palabra por las pistas del contexto", "Lo que el autor da a entender", "Busca la prueba en el texto"] },
            { title: "Preguntas de escritura", bullets: ["Encuentra el error de gramática, ortografía o puntuación", "Elige la mejor corrección de una oración", "Cómo ayudar a un estudiante a corregir lo que escribe"] },
            { title: "Estudia con inteligencia", bullets: ["Usa el Study Companion y la Study Guide gratis de ETS", "Escribe el porqué de cada error"] }
          ],
          sources: [
            { name: "ETS ParaPro: preparación para el examen (Study Companion y Study Guide)", url: "https://parapro.ets.org/parapro-test-prep.html" },
            { name: "ETS ParaPro: sobre el examen", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Practica ahora. 1) Corrige esta oración: \"The students was excited, they ran to the window.\" 2) En \"The path was so narrow that two people could not walk side by side,\" ¿qué significa narrow? 3) Escribe una oración sobre cómo ayudarías a un niño que lee \"ship\" como \"sip\". Revisa: \"The students were excited, so they ran to the window\" (o usa un punto); narrow significa estrecho, no ancho; señala la \"sh\" y practiquen juntos su sonido.",
          youCanNow: "responder preguntas de práctica de lectura y escritura, encontrar la prueba y explicar tus errores.",
          quickCheck: [
            { objective: "O2", q: "¿Qué oración está escrita correctamente?", options: ["Her and me helped the class.", "The children was ready.", "Each of the boys have a book.", "The teacher and I set up the tables."], answer: 3, why: "\"The teacher and I\" es el sujeto, y \"set up\" concuerda con él; las demás tienen errores de sujeto o de verbo." },
            { objective: "O2", q: "Un texto dice: \"The garden was barren; nothing grew there.\" ¿Qué significa barren?", options: ["Lleno de flores", "Que no produce nada", "Muy mojado", "Recién sembrado"], answer: 1, why: "La pista \"nothing grew there\" (nada crecía ahí) te dice que barren significa que no produce nada." }
          ]
        },
        {
          title: "Práctica para el ParaPro: matemáticas y tu plan de estudio",
          objectives: ["O2", "O1"],
          minutes: 6,
          goal: "Responder preguntas de práctica de matemáticas y escribir un plan de estudio con fecha de examen.",
          text: [
            "Las matemáticas del ParaPro cubren lo básico con lo que ayudarías a los estudiantes: sentido numérico, sumar, restar, multiplicar y dividir, fracciones, decimales y porcentajes, medición sencilla, leer tablas y gráficas, y ecuaciones sencillas. Algunas preguntas preguntan cómo le explicarías una idea de matemáticas a un niño.",
            "Trabaja despacio y escribe tus pasos en papel borrador. Para los problemas con palabras: encuentra la pregunta, saca los números, decide la operación, resuelve y luego pregúntate: \"¿Tiene sentido esta respuesta?\"",
            "Un plan de estudio convierte \"algún día\" en una fecha. Averigua cómo inscribirte (en un centro de exámenes o en casa, donde se ofrezca), revisa el costo y las reglas de identificación en el sitio oficial, elige una fecha de examen dentro de tres a seis semanas y dale a cada semana un enfoque: lectura, escritura, matemáticas y luego un juego completo de práctica."
          ],
          steps: ["Lee el problema dos veces y encierra la pregunta en un círculo.", "Escribe los números que necesitas.", "Elige la operación y resuelve en papel.", "Revisa que la respuesta tenga sentido.", "Pon en un calendario la fecha del examen y el enfoque de estudio de cada semana."],
          words: [["Fracción", "una parte de un entero, como 3/4."], ["Porcentaje", "un número de cada 100; 25% significa 25 de cada 100."], ["Ecuación", "una oración matemática con un signo igual, como 3 + x = 10."]],
          slides: [
            { title: "Las matemáticas en el ParaPro", bullets: ["Sentido numérico y las cuatro operaciones", "Fracciones, decimales y porcentajes", "Medición, gráficas y ecuaciones sencillas", "Cómo explicarle matemáticas a un niño"] },
            { title: "Resolver problemas con palabras", bullets: ["Encierra la pregunta en un círculo", "Saca los números", "Elige la operación y resuelve", "¿Tiene sentido la respuesta?"] },
            { title: "Tu plan de estudio", bullets: ["Revisa la inscripción, el costo y las reglas de identificación en el sitio oficial", "Elige una fecha dentro de 3 a 6 semanas", "Un enfoque por semana, luego un juego completo de práctica"] }
          ],
          sources: [
            { name: "ETS ParaPro: cómo inscribirte", url: "https://parapro.ets.org/how-to-register.html" },
            { name: "ETS ParaPro: requisitos de identificación", url: "https://parapro.ets.org/test-takers/register-requirements.html" }
          ],
          tryIt: "Practica ahora. 1) 24 estudiantes se reparten por igual en 6 mesas. ¿Cuántos hay por mesa? 2) ¿Cómo se escribe 3/4 como porcentaje? 3) 3 + x = 10; ¿cuánto es x? 4) Una clase lee 12 páginas el lunes y 15 el martes. ¿Cuántas páginas en total? Respuestas: 4, 75%, 7, 27. Luego escribe tu plan de estudio: fecha del examen y un enfoque para cada semana.",
          youCanNow: "resolver problemas básicos con palabras paso a paso y armar un plan de estudio con una fecha de examen real.",
          quickCheck: [
            { objective: "O2", q: "Cada camiseta cuesta $8. Una maestra compra 5. ¿Cuál es el total?", options: ["$13", "$35", "$40", "$45"], answer: 2, why: "5 x $8 = $40." },
            { objective: "O1", q: "¿Qué debes hacer ANTES de pagar el ParaPro?", options: ["Revisar que tu estado o tu distrito lo acepte y qué puntuación pide", "Comprar una calculadora nueva", "Dejar tu trabajo actual", "Pedirle a un estudiante que te haga preguntas"], answer: 0, why: "ETS aconseja confirmar que tu agencia estatal o local acepta el examen antes de programarlo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cumplir los requisitos",
        questions: [
          { objective: "O1", q: "¿Quién decide la puntuación ParaPro que necesitas?", options: ["Tu estado, y en algunos estados tu distrito", "El maestro con quien trabajas", "Los padres de cada estudiante", "Cualquier sitio web que venda preparación para exámenes"], answer: 0, why: "ETS publica las puntuaciones aceptadas por estado; en algunos estados, los distritos fijan las suyas." },
          { objective: "O1", q: "¿Cuál es el mejor lugar para revisar los requisitos de un distrito?", options: ["Una publicación en redes sociales", "El propio anuncio de empleo o el sitio web del distrito", "Un amigo que trabajó ahí hace años", "Un anuncio de preparación para exámenes"], answer: 1, why: "El propio anuncio del distrito es la fuente oficial y actual." },
          { objective: "O2", q: "¿Qué oración corrige \"I finished my work I went to recess\"?", options: ["I finished my work I, went to recess.", "I finished, my work I went to recess.", "I finished my work, then I went to recess.", "I finished my work, so I went to recess."], answer: 3, why: "Una coma más la palabra de enlace \"so\" une correctamente dos oraciones completas." },
          { objective: "O2", q: "¿Cuánto es el 20% de 50?", options: ["5", "25", "10", "70"], answer: 2, why: "20% es 0.2, y 0.2 x 50 = 10." },
          { objective: "O2", q: "En una pregunta de lectura, ¿dónde debes buscar la prueba de tu respuesta?", options: ["En el texto mismo", "En tu propia opinión", "En la opción de respuesta más larga", "En el título del examen"], answer: 0, why: "La respuesta correcta se apoya en palabras del texto." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabajar en el salón",
      lessons: [
        {
          title: "Dirigir un grupo pequeño con el plan del maestro",
          objectives: ["O3"],
          minutes: 5,
          goal: "Dirigir una actividad corta de práctica en grupo pequeño que siga el plan de un maestro.",
          text: [
            "El maestro decide qué aprenden los estudiantes; tú los ayudas a practicarlo. Antes de empezar con el grupo, pregúntale al maestro: ¿Cuál es la meta? ¿Qué deben poder hacer los estudiantes al final? ¿Qué ayuda puedo dar?",
            "Da pistas antes que respuestas. Un buen orden es: espera unos segundos, haz una pregunta que señale el camino (\"¿Con qué sonido empieza?\"), muestra un ejemplo parecido y solo entonces muestra la respuesta. Esto se llama andamiaje: das apoyo y luego lo vas quitando poco a poco.",
            "Elogia el esfuerzo con palabras exactas (\"Revisaste tu trabajo, así encontraste el error\"). Mantén al grupo en la tarea con indicaciones cortas y claras. Al final, escribe una nota corta para el maestro: quién lo entendió, quién tuvo dificultades y con qué."
          ],
          steps: ["Pregúntale al maestro la meta y qué ayuda está permitida.", "Ten listos los materiales antes de que lleguen los estudiantes.", "Explica la tarea en una o dos oraciones cortas.", "Da pistas antes que respuestas: espera, pregunta, muestra un ejemplo y luego muestra.", "Al final, escribe una nota de dos líneas para el maestro."],
          words: [["Plan de clase", "el plan escrito del maestro sobre qué van a aprender los estudiantes y cómo."], ["Andamiaje", "ayuda que permite a un estudiante hacer una tarea y que luego se quita paso a paso."], ["Tiempo de espera", "unos segundos de silencio después de una pregunta para que los estudiantes piensen."]],
          slides: [
            { title: "El maestro dirige; tú apoyas", bullets: ["Pregunta: ¿cuál es la meta?", "Pregunta: ¿qué ayuda puedo dar?"] },
            { title: "Pistas antes que respuestas", bullets: ["Espera unos segundos", "Haz una pregunta que señale el camino", "Muestra un ejemplo parecido", "Solo entonces muestra la respuesta"] },
            { title: "Mantén al grupo avanzando", bullets: ["Indicaciones cortas y claras", "Elogia el esfuerzo con palabras exactas", "Nota de dos líneas al maestro al final"] }
          ],
          tryIt: "Aquí tienes el plan de ejemplo de un maestro: \"Meta: los estudiantes suman números de dos cifras llevando. Grupo: 4 estudiantes, 10 minutos.\" Escribe tu actividad: cómo la explicas en dos oraciones, tres problemas de práctica, dos pistas que darás antes de mostrar una respuesta y una nota de dos líneas al maestro. Usa iniciales inventadas, nunca nombres reales de estudiantes.",
          youCanNow: "convertir el plan de un maestro en una actividad corta en grupo pequeño, con pistas y una nota de regreso.",
          quickCheck: [
            { objective: "O3", q: "Un estudiante se atora con una palabra. ¿Cuál es tu PRIMER paso?", options: ["Decirle la palabra enseguida", "Esperar y luego preguntarle con qué sonido empieza", "Pasar al siguiente estudiante", "Decirle que adivine"], answer: 1, why: "El tiempo de espera y una pregunta que señala el camino dejan que el estudiante piense primero." },
            { objective: "O3", q: "¿Quién decide qué debe aprender el grupo pequeño?", options: ["El asistente", "Los estudiantes", "El maestro", "Los padres"], answer: 2, why: "El maestro planea la clase; el asistente ayuda a los estudiantes a practicarla." }
          ]
        },
        {
          title: "Apoyo a la conducta, educación especial y privacidad",
          objectives: ["O4"],
          minutes: 6,
          goal: "Elegir pasos tranquilos y positivos ante una conducta y compartir la información de los estudiantes solo con el personal que la necesita.",
          text: [
            "La conducta es una forma en que los estudiantes se comunican. Mantén la calma y usa una voz baja y firme. Recuérdales la regla de forma positiva (\"Caminamos despacio\" en vez de \"No corras\"). Fíjate en los estudiantes que hacen lo correcto y elógialos. Da opciones cuando puedas (\"¿Quieres empezar con la hoja roja o con la azul?\"). Sigue el plan de clase del maestro, y busca enseguida al maestro o al personal de la escuela si alguien puede salir lastimado.",
            "Muchos asistentes trabajan con estudiantes que tienen un IEP, un Programa de Educación Individualizado bajo la ley federal de educación especial (IDEA). El IEP o un plan de conducta puede decir exactamente qué apoyos recibe un estudiante, como tiempo extra, un descanso tranquilo o un horario con dibujos. Pregúntale al maestro qué partes del plan te tocan a ti, y síguelas siempre.",
            "La información de los estudiantes es privada. FERPA es una ley federal que da a los padres el derecho de ver los expedientes escolares de sus hijos y cierto control sobre quién más los ve. Como asistente, compartes calificaciones, conducta, salud o detalles del IEP solo con el personal de la escuela que los necesita para su trabajo. Nunca hables de los estudiantes en la comunidad, no publiques nada sobre ellos en internet ni les tomes fotos con tu teléfono."
          ],
          steps: ["Mantén la calma y usa una voz baja.", "Di la regla como lo que hay que hacer, no lo que no hay que hacer.", "Elogia a los estudiantes que la siguen.", "Sigue el plan del maestro y el IEP o el plan de conducta del estudiante.", "Busca ayuda enseguida si alguien puede salir lastimado.", "Comparte los datos de los estudiantes solo con el personal que los necesita."],
          words: [["IEP", "Programa de Educación Individualizado (Individualized Education Program): plan escrito para un estudiante con discapacidad, bajo la ley federal IDEA."], ["IDEA", "Ley de Educación para Personas con Discapacidades (Individuals with Disabilities Education Act), la ley federal de educación especial."], ["FERPA", "ley federal que protege la privacidad de los expedientes escolares de los estudiantes."], ["Apoyo a la conducta positiva", "enseñar y elogiar la conducta que quieres, no solo reaccionar a los problemas."]],
          slides: [
            { title: "Apoyo a la conducta tranquilo y positivo", bullets: ["Voz baja y firme", "Di lo que SÍ hay que hacer: \"Caminamos despacio\"", "Elogia a los estudiantes que lo hacen bien", "Ofrece opciones cuando puedas"] },
            { title: "Estudiantes con un IEP", bullets: ["IEP: un plan escrito bajo IDEA", "Pregunta qué partes te tocan", "Síguelo siempre"] },
            { title: "Mantén privada la información de los estudiantes", bullets: ["FERPA protege los expedientes escolares", "Compártela solo con el personal que la necesita", "Nada de comentarios en la comunidad, publicaciones ni fotos"] }
          ],
          sources: [
            { name: "Departamento de Educación de EE. UU.: ¿Qué es FERPA?", url: "https://studentprivacy.ed.gov/faq/what-ferpa" },
            { name: "Departamento de Educación de EE. UU.: IDEA", url: "https://sites.ed.gov/idea/" }
          ],
          tryIt: "Situación: durante la lectura, un estudiante (llámalo J.) avienta su libro y dice: \"Esto es una tontería.\" Su plan de conducta dice que puede tomar un descanso de dos minutos en el rincón tranquilo. Escribe lo que dices y haces, en orden. Luego escribe a quién le contarías después lo que pasó, y a quién NO.",
          youCanNow: "responder a la conducta con calma y de forma positiva, seguir el plan de un estudiante y mantener privada la información de los estudiantes.",
          quickCheck: [
            { objective: "O4", q: "¿Qué indicación está dicha de forma positiva?", options: ["\"¡Deja de gritar!\"", "\"No toques eso.\"", "\"Ya no corras.\"", "\"Usa una voz bajita, por favor.\""], answer: 3, why: "Le dice al estudiante qué hacer, en lugar de solo qué no hacer." },
            { objective: "O4", q: "En la tienda, un vecino te pregunta cómo le va a un estudiante de tu clase. Tú:", options: ["Le cuentas algunos detalles porque es tu vecino", "Le dices con amabilidad que no puedes hablar de los estudiantes", "Le enseñas el trabajo del estudiante en tu teléfono", "Le describes el IEP del estudiante"], answer: 1, why: "La información de los estudiantes es privada y solo se comparte con el personal escolar que la necesita." }
          ]
        },
        {
          title: "Proteger a los niños y reportar preocupaciones",
          objectives: ["O5", "O1"],
          minutes: 6,
          goal: "Describir los pasos que sigues cuando piensas que un niño puede estar sufriendo daño, y a quién le avisas.",
          text: [
            "Todos los adultos de una escuela ayudan a mantener seguros a los niños. Si un niño está en peligro en este momento, llama al 911 (o a tu número local de emergencias) y consigue ayuda de inmediato.",
            "Las leyes estatales nombran a las personas que deben reportar sospechas de abuso o negligencia infantil; se llaman informantes obligados (mandated reporters). En muchos estados el personal escolar, incluidos los asistentes, está en esa lista. Tu deber es reportar lo que viste u oíste, no probarlo. Aprende en tu capacitación la ley de tu estado y la política de tu escuela: a quién le reportas (a menudo a la línea estatal para reportar abuso infantil o a los servicios de protección infantil) y qué tan rápido. En algunos estados, avisarle a un maestro o al director no reemplaza tu propio reporte.",
            "Si un niño te cuenta algo: mantén la calma, escucha y dale las gracias por contártelo. No hagas preguntas que sugieran la respuesta ni investigues. No prometas guardar el secreto; dile que vas a buscar ayuda con personas cuyo trabajo es proteger a los niños. Escribe las palabras exactas del niño, la fecha y la hora, y reporta el mismo día. No se lo cuentes a nadie que no necesite saberlo.",
            "La Línea Nacional contra el Abuso Infantil de Childhelp, 1-800-422-4453, da orientación y ayuda a cualquier hora; no es en sí una línea para hacer reportes, pero puede ayudarte a encontrar dónde reportar en tu estado."
          ],
          steps: ["Si el niño está en peligro ahora, llama al 911.", "Escucha con calma; no investigues ni hagas preguntas que sugieran la respuesta.", "No prometas guardar el secreto.", "Escribe las palabras exactas del niño, la fecha y la hora.", "Reporta el mismo día como lo dicen la ley de tu estado y la política de tu escuela.", "No se lo cuentes a nadie que no necesite saberlo."],
          words: [["Informante obligado (mandated reporter)", "persona a quien la ley obliga a reportar sospechas de abuso o negligencia infantil."], ["Negligencia", "cuando no se cubren las necesidades básicas de un niño, como comida, vivienda, cuidado o supervisión."], ["Servicios de protección infantil (CPS)", "la agencia estatal o del condado que investiga los reportes de abuso y negligencia infantil."], ["Pregunta que sugiere la respuesta", "una pregunta que da a entender la respuesta, como \"¿Te pegó tu papá?\""]],
          slides: [
            { title: "¿Hay peligro ahora mismo?", bullets: ["Llama al 911 o a tu número local de emergencias", "Consigue ayuda de inmediato"] },
            { title: "Informantes obligados", bullets: ["Las leyes estatales dicen quién debe reportar", "En muchos estados incluye al personal escolar", "Reporta lo que viste u oíste; no tienes que probarlo"] },
            { title: "Si un niño te cuenta algo", bullets: ["Mantén la calma, escucha, dale las gracias", "Sin preguntas que sugieran la respuesta, sin investigar", "No prometas guardar el secreto", "Escribe sus palabras exactas, la fecha y la hora"] },
            { title: "Reporta el mismo día", bullets: ["Sigue la ley de tu estado y la política de tu escuela", "A menudo, la línea estatal de reportes o CPS", "Mantenlo en privado"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway: reporte obligatorio de abuso y negligencia infantil", url: "https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway: cómo reportar abuso y negligencia infantil", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway: búsqueda de leyes estatales", url: "https://www.childwelfare.gov/resources/states-territories-tribes/state-statutes/" },
            { name: "Línea Nacional contra el Abuso Infantil de Childhelp", url: "https://www.childhelphotline.org/" }
          ],
          tryIt: "Tarea final: escribe tu Plan de preparación para paraprofesional. Incluye los requisitos de tu estado y tu distrito con enlaces, tu camino y tus fechas de estudio, tu actividad en grupo pequeño de la Lección 4 y los pasos de seguridad de esta lección con el número de tu estado para reportar abuso infantil (búscalo en la página \"how to report\" del Child Welfare Information Gateway, el centro de información federal sobre el bienestar infantil).",
          youCanNow: "decir qué hacer cuando un niño puede estar sufriendo daño, a quién reportarlo y cuándo, y poner en papel todo tu camino hacia un trabajo de paraprofesional.",
          quickCheck: [
            { objective: "O5", q: "Un niño te cuenta que un adulto en su casa le hace daño y te pide que no se lo digas a nadie. ¿Qué le dices?", options: ["\"Te prometo que no se lo diré a nadie.\"", "\"¿Estás seguro? Eso no suena cierto.\"", "\"Gracias por contármelo. Tengo que avisar a las personas cuyo trabajo es protegerte.\"", "\"Cuéntame todos los detalles para que yo decida.\""], answer: 2, why: "Nunca prometes guardar el secreto, y no interrogas ni juzgas; buscas ayuda con las personas indicadas." },
            { objective: "O5", q: "¿Cuándo debe reportar una preocupación un informante obligado?", options: ["Solo después de encontrar pruebas", "Después de hablar primero con la familia", "Al final del año escolar", "El mismo día, como lo dicen la ley estatal y la política de la escuela"], answer: 3, why: "Reportas lo que viste u oíste, rápido; probarlo es trabajo de CPS o de la policía." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Trabajar en el salón",
        questions: [
          { objective: "O3", q: "¿Qué es el andamiaje?", options: ["Ayuda que permite a un estudiante hacer una tarea y que luego se quita poco a poco", "Hacer el trabajo por el estudiante", "Un castigo por las respuestas incorrectas", "Materiales de construcción para el salón"], answer: 0, why: "El andamiaje da apoyo y lo va quitando poco a poco mientras el estudiante aprende." },
          { objective: "O3", q: "Tu grupo termina. ¿Qué le das al maestro?", options: ["Nada; el maestro lo adivinará", "Una nota corta: quién lo entendió y quién tuvo dificultades y con qué", "El teléfono de la casa de cada estudiante", "Un plan de clase nuevo escrito por ti"], answer: 1, why: "Una nota corta ayuda al maestro a planear lo que sigue." },
          { objective: "O4", q: "El IEP de una estudiante dice que tiene tiempo extra en los exámenes. La maestra te pide que apliques el examen. Tú:", options: ["Le das el mismo tiempo que a todos para ser justo", "Le preguntas si hoy quiere tiempo extra", "Le das el tiempo extra, como dice el IEP", "La dejas no hacer el examen"], answer: 2, why: "Los apoyos de un IEP son obligatorios y deben seguirse siempre." },
          { objective: "O4", q: "¿Qué opción respeta FERPA?", options: ["Publicar una foto graciosa de la clase en tus redes sociales", "Hablar de las calificaciones de un estudiante en una cena familiar", "Mandarle por mensaje a tu amigo el reporte de conducta de un estudiante", "Hablar del progreso de un estudiante solo con el maestro"], answer: 3, why: "Los expedientes y los datos de los estudiantes solo se comparten con el personal escolar que los necesita." },
          { objective: "O5", q: "Ves a un niño con una lesión grave que dice que tiene miedo de volver hoy a su casa. ¿Qué va primero?", options: ["Conseguir ayuda de inmediato, llamando al 911 si el niño está en peligro ahora, y reportar el mismo día", "Llamar a los padres para preguntar qué pasó", "Esperar una semana para ver si vuelve a pasar", "Preguntarles a sus compañeros qué saben"], answer: 0, why: "Peligro ahora significa ayuda de emergencia; luego reportas como lo exigen tu estado y tu escuela, sin investigar por tu cuenta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para asistente de maestro y paraprofesional",
    questions: [
      { objective: "O1", q: "¿Qué describe mejor a un paraprofesional?", options: ["Una persona que trabaja en la escuela y ayuda a los estudiantes a aprender bajo la dirección de un maestro", "La persona que planea y califica todas las clases", "Solo el asistente del director de la escuela", "Un maestro suplente con licencia completa"], answer: 0, why: "Los asistentes apoyan el aprendizaje; el maestro planea y califica." },
      { objective: "O1", q: "Según la regla federal, un asistente de instrucción de Title I con diploma también necesita una de estas opciones. ¿Cuál NO es una de ellas?", options: ["Dos años de estudios universitarios", "Un título asociado o superior", "Aprobar un examen formal estatal o local", "Un año de voluntariado en la escuela"], answer: 3, why: "Las tres opciones son dos años de universidad, un título o un examen académico formal." },
      { objective: "O1", q: "¿Qué exigen casi todas las escuelas antes de contratar a un asistente?", options: ["Una licencia de maestro", "Una verificación de antecedentes", "Una maestría", "Un auto"], answer: 1, why: "Las escuelas verifican los antecedentes para proteger a los niños." },
      { objective: "O1", q: "¿Qué fuente te dice la puntuación ParaPro aceptada en tu estado?", options: ["Un anuncio de preparación para exámenes", "Un compañero de clase", "La página de requisitos por estado en parapro.ets.org y tu estado o tu distrito", "Cualquier foro en internet"], answer: 2, why: "ETS publica las puntuaciones aceptadas por estado; tu estado o tu distrito las confirma." },
      { objective: "O2", q: "El ParaPro mide:", options: ["Datos de ciencias e historia", "La velocidad para escribir en el teclado", "Solo las reglas del salón", "Lectura, escritura y matemáticas, y cómo usarlas para ayudar en clase"], answer: 3, why: "ETS dice que mide lectura, escritura y matemáticas y su uso en la enseñanza en el salón." },
      { objective: "O2", q: "¿Qué palabra va en el espacio? \"Neither the teacher nor the students ___ ready.\"", options: ["were", "was", "is", "be"], answer: 0, why: "Con \"neither...nor\", el verbo concuerda con el sujeto más cercano, \"students\", así que va \"were\"." },
      { objective: "O2", q: "¿Cuánto es 1/2 + 1/4?", options: ["2/6", "3/4", "1/8", "2/4"], answer: 1, why: "1/2 es 2/4, y 2/4 + 1/4 = 3/4." },
      { objective: "O2", q: "Una clase de 28 va de excursión. En cada camioneta caben 8. ¿Cuántas camionetas se necesitan?", options: ["3", "3.5", "4", "5"], answer: 2, why: "28 / 8 = 3.5, y no puedes llevar media camioneta, así que necesitas 4." },
      { objective: "O2", q: "¿Cuál es la mejor manera de usar el Study Companion gratis de ETS?", options: ["Leer solo las respuestas", "Saltarte las preguntas que fallaste", "Usarlo solo la noche anterior", "Hacer las preguntas de ejemplo y escribir el porqué de cada error"], answer: 3, why: "Explicar cada error te muestra qué estudiar después." },
      { objective: "O3", q: "Antes de dirigir un grupo pequeño, ¿qué debes preguntarle al maestro?", options: ["La meta y qué ayuda puedes dar", "Si puedes salir temprano", "Qué estudiantes son los más inteligentes", "Si puedes cambiar la clase"], answer: 0, why: "Saber la meta y la ayuda permitida te mantiene dentro del plan del maestro." },
      { objective: "O3", q: "Un estudiante da una respuesta incorrecta. ¿Cuál es el mejor paso siguiente?", options: ["Decir \"Mal\" y seguir", "Hacer una pregunta que señale el error", "Darle la respuesta enseguida", "Dejar que otro estudiante se ría"], answer: 1, why: "Una pregunta que señala el camino deja que el estudiante encuentre y corrija el error." },
      { objective: "O3", q: "¿Qué elogio ayuda más?", options: ["\"Bien.\"", "\"Eres muy inteligente.\"", "\"Revisaste tu trabajo, y así encontraste el error.\"", "\"Por fin.\""], answer: 2, why: "Un elogio exacto del esfuerzo le dice al estudiante qué debe seguir haciendo." },
      { objective: "O4", q: "Un estudiante se está alterando. ¿Cuál es un paso tranquilo y positivo?", options: ["Subir la voz para que escuche", "Usar una voz baja y ofrecerle una opción", "Ignorarlo por completo", "Amenazarlo con llamar a sus padres"], answer: 1, why: "Una voz tranquila y una opción ayudan a que el estudiante se calme." },
      { objective: "O4", q: "¿Qué es un IEP?", options: ["Un plan escrito para un estudiante con discapacidad, bajo IDEA", "Un programa de almuerzo escolar", "Un plan de pago para maestros", "Un examen para asistentes"], answer: 0, why: "IEP significa Programa de Educación Individualizado, un plan bajo la ley federal IDEA." },
      { objective: "O4", q: "El padre de otro estudiante te pregunta por la conducta de un compañero de clase. Tú:", options: ["Le explicas lo que pasó", "Le compartes el plan de conducta del compañero", "Le enseñas las notas del incidente", "Le dices que no puedes compartir información de otros estudiantes y lo envías con el maestro"], answer: 3, why: "La información de los estudiantes es privada; compártela solo con el personal que la necesita." },
      { objective: "O4", q: "¿Está bien tomarles fotos a los estudiantes con tu propio teléfono?", options: ["Sí, si salen lindos", "Sí, si no las publicas", "No; sigue la política de la escuela y mantén privadas las imágenes de los estudiantes", "Solo en las excursiones"], answer: 2, why: "Las fotos son información de los estudiantes; sigue la política de la escuela." },
      { objective: "O5", q: "¿Qué es un informante obligado?", options: ["Una persona a quien la ley obliga a reportar sospechas de abuso o negligencia infantil", "Un periodista en los eventos de la escuela", "Un estudiante que reporta acoso escolar", "Un padre voluntario"], answer: 0, why: "Las leyes estatales nombran a los profesionales que deben reportar sospechas de abuso o negligencia." },
      { objective: "O5", q: "Como informante obligado, ¿cuál es tu trabajo?", options: ["Probar que hubo abuso", "Interrogar a la familia", "Reportar lo que viste u oíste, como lo exigen tu estado y tu escuela", "Esperar hasta estar seguro"], answer: 2, why: "Tú reportas; CPS o la policía investigan." },
      { objective: "O5", q: "Un niño frente a ti está en peligro en este momento. Tú:", options: ["Le mandas un correo al director", "Llamas al 911 o a tu número local de emergencias", "Escribes una nota para mañana", "Le pides al niño que espere"], answer: 1, why: "Un peligro inmediato significa buscar primero ayuda de emergencia." },
      { objective: "O5", q: "¿Qué debes escribir después de que un niño te cuenta que alguien le hace daño?", options: ["Tu idea de quién lo hizo", "Preguntas para la familia", "Nada; solo recuérdalo", "Las palabras exactas del niño, la fecha y la hora"], answer: 3, why: "Las palabras exactas, la fecha y la hora hacen un reporte claro y justo." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 7, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila dice Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      { name: "Requisitos revisados", objective: "O1", notYet: "Los requisitos son supuestos o vienen de una fuente no oficial.", meets: "Enumera el camino de estudios, el examen y la puntuación (si los hay) y la verificación de antecedentes del estado y de un distrito, con enlaces oficiales.", exceeds: "Además compara dos distritos y anota el pago u otros pasos, como la capacitación." },
      { name: "Plan de estudio", objective: "O2", notYet: "No hay fecha de examen o no hay plan de qué estudiar.", meets: "Una fecha de examen real (o un camino sin examen) y un enfoque de estudio por semana.", exceeds: "Incluye los resultados de los juegos de práctica y las áreas débiles que mostraron." },
      { name: "Actividad en grupo pequeño", objective: "O3", notYet: "La actividad no coincide con la meta del maestro, o da las respuestas primero.", meets: "Sigue la meta, tiene ejercicios de práctica, dos pistas antes de las respuestas y una nota para el maestro.", exceeds: "Además planea una forma rápida de ver qué estudiantes necesitan más ayuda." },
      { name: "Conducta y privacidad", objective: "O4", notYet: "Usa nombres o datos reales de estudiantes, o piensa compartirlos fuera del personal escolar.", meets: "Usa iniciales inventadas y dice quién puede y quién no puede ver la información de los estudiantes.", exceeds: "Agrega una respuesta tranquila y positiva a una conducta que sigue el plan de un estudiante." },
      { name: "Pasos de seguridad", objective: "O5", notYet: "Falta el paso de emergencia, promete guardar el secreto o piensa investigar.", meets: "Enumera los pasos en orden, con el número estatal para reportar y el plazo del mismo día.", exceeds: "Anota lo que agrega la política propia de la escuela, después de preguntar en la escuela o leerla." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que presentan y aprueban el ParaPro o el examen que exige su estado, o que cumplen el requisito de otra forma, en 90 días",
      "Participantes que se postulan y son contratados como paraprofesionales, suplentes o personal de apoyo escolar (encuesta de seguimiento)",
      "Las escuelas aliadas reportan nuevos asistentes que siguen los planes de clase, manejan la conducta con calma y protegen la privacidad de los estudiantes"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para las páginas oficiales; papel, lápiz y papel borrador para practicar",
      "El Study Companion y la Study Guide gratis del ParaPro de ETS (en parapro.ets.org)",
      "Un anuncio de empleo real de un distrito escolar cercano",
      "Unos 75 minutos en total, en sesiones cortas, más tiempo extra de estudio antes del examen"
    ],
    facilitatorNotes: [
      "Antes del curso, busca las reglas de paraprofesional de tu estado y un anuncio de empleo de un distrito local para poder responder preguntas sobre ellos.",
      "Nunca uses nombres ni datos reales de estudiantes en la práctica; usa iniciales inventadas.",
      "Haz la Lección 4 como un juego de roles: un participante dirige, los demás hacen de estudiantes y el grupo da su opinión con la rúbrica.",
      "La Lección 6 puede ser difícil para personas que sufrieron daño de niños. Dilo antes de empezar, deja que los participantes salgan si quieren y ten lista la información de apoyo local.",
      "Diles a los participantes con condenas anteriores que revisen directamente las reglas de verificación de antecedentes del estado y del distrito; no adivines si califican.",
      "Invita a un paraprofesional en activo o a alguien del personal de contratación del distrito para responder preguntas."
    ]
  }
};
