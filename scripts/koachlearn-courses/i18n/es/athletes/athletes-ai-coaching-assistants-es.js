"use strict";

// Koach Learn course (Spanish translation of athletes-ai-coaching-assistants). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "athletes-ai-coaching-assistants-es",
  lang: "es",
  translationOf: "athletes-ai-coaching-assistants",
  category: "Athletes",
  name: "Asistentes de IA para entrenadores",
  skills: "Configurar un asistente de IA con instrucciones de entrenador, Planear entrenamientos con IA, Escribir mensajes a padres y jugadores, Crear fichas de ejercicios y cuestionarios, Mantener privados los datos de los atletas y humanas las decisiones",
  outcome: "configurar un asistente de IA como ayudante de entrenador con tus propias instrucciones fijas, y luego usarlo para planear un entrenamiento de 90 minutos, escribir un mensaje claro a los padres y hacer una ficha de ejercicio y un cuestionario de cinco preguntas sobre las jugadas del equipo, todo revisado por ti y sin datos privados de los atletas.",
  about: [
    "Este curso es para entrenadores principales, asistentes, directores de club y atletas que ayudan a entrenar a jugadores más jóvenes. Los entrenadores pasan horas planeando y haciendo papeleo; un asistente de IA puede quitarles parte de esa carga.",
    "Vas a configurar un asistente de IA gratuito con instrucciones fijas sobre tu equipo y luego usarlo para planear entrenamientos, escribir mensajes y hacer materiales de enseñanza. También vas a poner reglas claras: qué se queda privado y qué decisiones se quedan en manos humanas.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Sigue las reglas de tu escuela, club o liga sobre tecnología, comunicación con menores de edad y datos de estudiantes."
  ],
  finalTask: "Escribe las instrucciones fijas de tu asistente de entrenador (nivel del equipo, estilo, reglas de seguridad, qué no incluir) y luego úsalo para hacer un plan de entrenamiento de 90 minutos, un mensaje a los padres sobre el horario de la próxima semana, una ficha de un ejercicio y un cuestionario de cinco preguntas sobre las jugadas del equipo. Revisa y corrige cada pieza, y confirma que no se usó información privada de ningún atleta.",
  chapters: [
    {
      name: "Capítulo 1: Configurar tu asistente de entrenador",
      lessons: [
        {
          title: "Lo que puede hacer un asistente de IA para entrenadores",
          minutes: 4,
          goal: "Hacer la lista de tareas de entrenador que le darías a la IA y de decisiones que te quedas tú.",
          text: [
            "Un asistente de IA para entrenadores es un asistente de IA general, como ChatGPT, Microsoft Copilot o Google Gemini, que usas para el trabajo de entrenador. Puede hacer borradores de planes de entrenamiento, escribir correos, explicar reglas, crear descripciones de ejercicios, cuestionarios y horarios, y resumir notas.",
            "No puede ver a tus jugadores, conocer su salud ni sus sentimientos, ni hacerse responsable. El tiempo de juego, la disciplina, las lesiones y las decisiones de regreso al juego, las decisiones de seguridad y todo lo que tenga que ver con el bienestar de un jugador se quedan contigo y con los profesionales adecuados.",
            "Una buena regla: la IA hace el borrador, el entrenador decide. Todo lo que escribe es un primer borrador que tú revisas."
          ],
          words: [["Asistente de IA para entrenadores", "un asistente de IA general que se usa para ayudar con las tareas de entrenador."], ["Regreso al juego", "la decisión de cuándo un atleta lesionado puede volver a jugar sin riesgo; la toman profesionales de la salud."]],
          slides: [
            { title: "La IA puede hacer borradores de", bullets: ["Planes de entrenamiento y horarios", "Correos y mensajes", "Descripciones de ejercicios y cuestionarios", "Resúmenes de tus notas"] },
            { title: "El entrenador se queda con", bullets: ["El tiempo de juego y la disciplina", "Las decisiones de seguridad", "El bienestar; las lesiones van al personal médico"] },
            { title: "La regla", bullets: ["La IA hace el borrador", "El entrenador decide"] }
          ],
          tryIt: "Escribe dos listas: cinco tareas semanales de entrenador que podrías darle a la IA para que haga borradores, y cinco decisiones que siempre te vas a quedar tú.",
          youCanNow: "decidir en qué tareas de entrenador puede ayudar la IA y qué decisiones se quedan en manos humanas."
        },
        {
          title: "Escribir instrucciones fijas",
          minutes: 5,
          goal: "Escribir instrucciones fijas que le digan a la IA cómo es tu equipo y cuáles son tus reglas.",
          text: [
            "Las instrucciones fijas son un párrafo que pegas al empezar un chat (o que guardas en las instrucciones personalizadas o la función de proyectos del asistente, si la tiene) para que siempre conozca tu contexto.",
            "Incluye: deporte, nivel y categoría de edad; tamaño del equipo; duración de los entrenamientos e instalaciones; tu estilo y tus valores como entrenador; reglas de seguridad (ejercicios adecuados a la edad, pausas para tomar agua, nada de ejercicio físico como castigo); y lo que nunca debe incluir (nombres de jugadores, datos de salud, calificaciones).",
            "Ejemplo: \"Entreno a un equipo femenino de fútbol sub-12 de 16 jugadoras. Los entrenamientos duran 90 minutos en media cancha, martes y jueves. Valoro el esfuerzo, la diversión y el trabajo en equipo. Los planes deben incluir calentamiento, pausas para tomar agua cada 20 minutos y ejercicios adecuados a la edad. Nunca pidas ni uses nombres de jugadoras ni datos de salud.\""
          ],
          steps: ["Escribe tu deporte, nivel, categoría de edad y tamaño del equipo.", "Agrega la duración de los entrenamientos y las instalaciones.", "Agrega tus valores y tu estilo como entrenador.", "Agrega las reglas de seguridad.", "Agrega lo que nunca debe incluir.", "Guárdalo donde lo puedas pegar cada vez."],
          words: [["Instrucciones fijas", "el contexto que le das a una IA al principio para que cada respuesta vaya con tu situación."], ["Adecuado a la edad", "apropiado para la edad y el desarrollo de los jugadores."]],
          slides: [
            { title: "Instrucciones fijas", bullets: ["Pégalas al empezar cada chat", "O guárdalas en la configuración del asistente, si se puede"] },
            { title: "Incluye", bullets: ["Deporte, nivel, edad, tamaño del equipo", "Duración del entrenamiento y espacio", "Valores y reglas de seguridad"] },
            { title: "Nunca incluyas", bullets: ["Nombres de jugadores", "Datos de salud", "Calificaciones o información familiar"] }
          ],
          tryIt: "Escribe tus instrucciones fijas en un párrafo y guárdalas en una nota. Pégalas en un asistente de IA y pídele: \"Resume lo que sabes de mi equipo.\" Corrige todo lo que haya entendido mal.",
          youCanNow: "escribir instrucciones fijas para que las respuestas de la IA vayan con tu equipo."
        },
        {
          title: "Planear un entrenamiento con IA",
          minutes: 6,
          goal: "Usar la IA para hacer el borrador de un plan de entrenamiento de 90 minutos y ajustarlo.",
          text: [
            "Con tus instrucciones fijas pegadas, pide: \"Planea un entrenamiento de 90 minutos enfocado en [habilidad]. Incluye calentamiento, tres ejercicios progresivos, un partido reducido, vuelta a la calma y pausas para tomar agua. Dame los tiempos, cómo se prepara cada ejercicio, los puntos clave y cómo hacerlo más fácil o más difícil.\"",
            "Revísalo como entrenador: ¿Los ejercicios son seguros y adecuados a la edad? ¿Los tiempos suman bien? ¿Tienes el espacio y el material? ¿El equilibrio entre trabajo y descanso es correcto? ¿Hay demasiadas filas y demasiado tiempo parados?",
            "Haz preguntas de seguimiento: \"Solo tenemos 10 balones.\" \"Hay dos jugadoras nuevas.\" \"Cambia el ejercicio 2 por uno con más contacto con el balón.\" Guarda en una carpeta los planes que te gusten para volver a usarlos y mejorarlos."
          ],
          steps: ["Pega tus instrucciones fijas.", "Pide un plan de 90 minutos con tiempos, preparación y puntos clave.", "Revisa seguridad, tiempos, espacio y material.", "Haz preguntas de seguimiento para arreglar los problemas.", "Guarda el plan final."],
          words: [["Progresión", "ejercicios que van de lo sencillo a lo más difícil."], ["Partido reducido", "un partido con menos jugadores y menos espacio para que todos toquen más el balón."]],
          slides: [
            { title: "Pide", bullets: ["Calentamiento, 3 ejercicios progresivos", "Partido reducido, vuelta a la calma", "Tiempos, preparación, puntos clave"] },
            { title: "Revisa como entrenador", bullets: ["¿Seguro y adecuado a la edad?", "¿Suman los tiempos? ¿Espacio y material?", "¿Poco tiempo parados?"] },
            { title: "Ajusta", bullets: ["\"Solo tenemos 10 balones.\"", "\"Hay dos jugadoras nuevas.\"", "Guarda los planes que te gusten"] }
          ],
          tryIt: "Usa tus instrucciones fijas para obtener un plan de 90 minutos para un entrenamiento real que tengas pronto. Haz al menos dos cambios con preguntas de seguimiento y guárdalo.",
          youCanNow: "planear con ayuda de la IA un entrenamiento seguro y con buenos tiempos."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Configurar tu asistente de entrenador",
        questions: [
          { q: "¿Qué tarea es buena para un asistente de IA para entrenadores?", options: ["Decidir el regreso al juego después de una conmoción cerebral", "Disciplinar a un jugador", "Hacer el borrador de un plan de entrenamiento", "Juzgar los sentimientos de un jugador"], answer: 2, why: "La IA hace borradores; las decisiones médicas y personales se quedan con las personas." },
          { q: "¿Cuál es la regla del entrenador para la IA?", options: ["La IA hace el borrador, el entrenador decide", "La IA decide todo", "Nunca usar IA", "Los jugadores deciden"], answer: 0, why: "Todo lo que hace la IA es un primer borrador." },
          { q: "¿Qué va en las instrucciones fijas?", options: ["Nombres de jugadores", "Datos de salud de los jugadores", "Calificaciones de los jugadores", "Categoría de edad y duración del entrenamiento"], answer: 3, why: "El contexto del equipo ayuda; los datos privados se quedan fuera." },
          { q: "El plan de la IA tiene un ejercicio peligroso para niños de 10 años. Tú:", options: ["Lo usas de todos modos", "Lo cambias por un ejercicio adecuado a la edad", "Lo haces más difícil", "Quitas las pausas para tomar agua"], answer: 1, why: "La seguridad y la edad adecuada van primero." },
          { q: "Un partido reducido es útil porque:", options: ["Es más largo", "Todos tocan más el balón", "Necesita más material", "Los jugadores esperan en fila"], answer: 1, why: "Menos jugadores significa más participación." }
        ]
      }
    },
    {
      name: "Capítulo 2: Comunicación, materiales y límites",
      lessons: [
        {
          title: "Mensajes a padres y jugadores",
          minutes: 5,
          goal: "Escribir con IA un mensaje claro y amable a padres o jugadores y enviarlo por los canales aprobados.",
          text: [
            "Los entrenadores escriben muchos mensajes: horarios, cambios, recordatorios, expectativas. Pide: \"Escribe un mensaje corto y amable a los padres sobre los cambios de entrenamiento de la próxima semana: el martes pasa a las 5 pm y el jueves se cancela por arreglos en la cancha. Incluye qué deben llevar. Menos de 100 palabras.\"",
            "Revisa los datos, las fechas y el tono. Los mensajes de grupo hablan del equipo; nunca hables en un mensaje de grupo del rendimiento, la salud o el comportamiento de un solo jugador.",
            "Usa el medio de comunicación aprobado por tu escuela o club. Muchas organizaciones tienen reglas para cuando los entrenadores escriben a menores de edad, por ejemplo incluir a un padre o a otro entrenador. Las conversaciones difíciles, como el tiempo de juego o el comportamiento, es mejor tenerlas en persona o por teléfono, no con textos escritos por IA."
          ],
          steps: ["Pide a la IA un borrador corto y amable.", "Revisa los datos, las fechas y el tono.", "En los mensajes de grupo, habla del equipo.", "Envíalo por los canales aprobados.", "Ten las conversaciones difíciles en persona."],
          words: [["Canal aprobado", "el medio de comunicación que tu escuela o club permite a los entrenadores."], ["Tono", "cómo se siente un mensaje: amable, firme, cálido."]],
          slides: [
            { title: "La IA hace borradores de mensajes", bullets: ["Horarios, cambios, recordatorios", "Cortos y amables"] },
            { title: "Revisa", bullets: ["Datos y fechas", "Tono", "En grupos, solo temas del equipo"] },
            { title: "Envíalos bien", bullets: ["Canales aprobados", "Sigue las reglas para escribir a menores", "Conversaciones difíciles en persona"] }
          ],
          tryIt: "Usa la IA para escribir un mensaje real o de práctica a los padres sobre un cambio de horario. Revisa cada fecha y envíalo (o guárdalo) por tu canal aprobado.",
          youCanNow: "escribir con IA mensajes claros al equipo y enviarlos de la forma correcta."
        },
        {
          title: "Fichas de ejercicios y cuestionarios de jugadas",
          minutes: 5,
          goal: "Crear una ficha de ejercicio y un cuestionario de cinco preguntas sobre las jugadas del equipo.",
          text: [
            "Las fichas de ejercicios ayudan a que los asistentes y los jugadores hagan los ejercicios de la misma forma. Pide: \"Haz una ficha de una página para [ejercicio]: propósito, preparación, pasos, puntos clave, errores comunes y cómo hacerlo más fácil o más difícil.\" Agrega un diagrama sencillo en una herramienta como Canva o a mano.",
            "Los cuestionarios ayudan a los jugadores a aprender las jugadas y las reglas. Pide: \"Escribe cinco preguntas de opción múltiple sobre nuestra jugada de saque de banda: [descríbela]. Una sola respuesta correcta en cada una, con una explicación corta.\" Revisa cada respuesta con tu jugada real.",
            "Usa una herramienta de cuestionarios como Google Forms para compartirlo, sin pedir más información personal de la necesaria."
          ],
          steps: ["Pide a la IA una ficha de ejercicio con propósito, preparación, pasos y puntos clave.", "Agrega un diagrama sencillo.", "Describe una jugada y pide cinco preguntas de cuestionario.", "Revisa cada respuesta con tu jugada real.", "Compártelo con un formulario sencillo, pidiendo la mínima información."],
          words: [["Ficha de ejercicio", "una guía de una página que explica cómo hacer un ejercicio."], ["Libro de jugadas", "el conjunto de jugadas de un equipo y las reglas para hacerlas."]],
          slides: [
            { title: "Ficha de ejercicio", bullets: ["Propósito, preparación, pasos", "Puntos clave, errores comunes", "Versiones más fáciles y más difíciles"] },
            { title: "Cuestionario de jugadas", bullets: ["Describe la jugada", "Cinco preguntas con explicaciones", "Revisa cada respuesta"] },
            { title: "Compártelo sencillo", bullets: ["Google Forms o algo parecido", "Pide la mínima información personal"] }
          ],
          tryIt: "Haz con la IA una ficha de ejercicio y un cuestionario de cinco preguntas sobre una de tus jugadas. Revisa los dos y corrige lo que esté mal.",
          youCanNow: "crear fichas de ejercicios y cuestionarios de jugadas con ayuda de la IA."
        },
        {
          title: "Límites: privacidad, seguridad y justicia",
          minutes: 5,
          goal: "Escribir tus límites para usar la IA como entrenador y cumplirlos.",
          text: [
            "Privacidad: nunca pegues en herramientas de IA nombres de jugadores junto con información de salud, lesiones, calificaciones, situaciones familiares, datos de contacto o fotos de menores de edad. Usa posiciones o números. Revisa las reglas de tu organización sobre qué herramientas se pueden usar con datos de estudiantes o jugadores.",
            "Seguridad: la IA puede sugerir ejercicios, preparación física o prácticas con calor que son anticuados o peligrosos. Revisa los ejercicios con las guías del organismo que rige tu deporte y con tu preparador físico, y nunca uses la IA para decisiones médicas, de conmoción cerebral o de regreso al juego; la capacitación gratuita HEADS UP de los CDC (la agencia de salud pública de EE. UU.) es un lugar para aprender lo básico sobre conmociones.",
            "Justicia y honestidad: las decisiones de selección y de tiempo de juego salen de lo que tú observas y se explican a los jugadores en persona. Sé transparente con las familias sobre tu uso de la IA para planear, si tu organización lo pide."
          ],
          steps: ["Escribe tu regla de privacidad: nada de nombres con información privada.", "Escribe tu regla de seguridad: revisar ejercicios; nada de decisiones médicas.", "Escribe tu regla de justicia: decisiones según lo que observas, explicadas en persona.", "Revisa las reglas de tecnología de tu organización.", "Comparte los límites con tu cuerpo técnico."],
          words: [["Límite", "una regla que te mantiene seguro al usar una herramienta."], ["Organismo rector", "la organización que pone las reglas de tu deporte o tu nivel."]],
          slides: [
            { title: "Privacidad", bullets: ["Nada de nombres con salud, calificaciones o familia", "Usa posiciones o números", "Sigue las reglas de herramientas de tu organización"] },
            { title: "Seguridad", bullets: ["Revisa ejercicios y preparación física", "Nada de decisiones médicas ni de regreso al juego", "CDC HEADS UP para lo básico sobre conmociones"] },
            { title: "Justicia", bullets: ["Decisiones según lo que observas", "Explicadas en persona"] }
          ],
          sources: [{ name: "CDC: capacitación HEADS UP sobre conmociones cerebrales (en inglés)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Tarea final: escribe tus límites y tus instrucciones fijas; luego haz con la IA un plan de entrenamiento, un mensaje a los padres, una ficha de ejercicio y un cuestionario, revisando cada uno y confirmando que no se usaron datos privados de los atletas.",
          youCanNow: "usar un asistente de IA para entrenadores con límites claros de privacidad, seguridad y justicia."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Comunicación, materiales y límites",
        questions: [
          { q: "¿Dónde se debe hablar del comportamiento de un jugador?", options: ["En el chat de grupo del equipo", "En redes sociales", "En un texto de grupo escrito por IA", "En privado, en persona o por teléfono"], answer: 3, why: "Los mensajes de grupo hablan del equipo." },
          { q: "Una ficha de ejercicio incluye:", options: ["Propósito, preparación, pasos y puntos clave", "Calificaciones de los jugadores", "Notas de salud de los jugadores", "Nada"], answer: 0, why: "Ayuda a que todos hagan el ejercicio de la misma forma." },
          { q: "La IA escribe un cuestionario de jugadas. Antes de compartirlo, tú:", options: ["Lo compartes sin leerlo", "Agregas respuestas engañosas", "Revisas cada respuesta con tu jugada real", "Dejas que la IA califique a los jugadores"], answer: 2, why: "La IA puede entender mal tu jugada." },
          { q: "¿Qué es seguro pegar en una IA?", options: ["\"María López, rotura de ligamento cruzado, toma medicamentos\"", "La dirección de la casa de un jugador", "La foto y el nombre completo de un menor", "\"Nuestra lateral izquierda pierde a su marca en los tiros de esquina\""], answer: 3, why: "Las posiciones sin nombres ni datos de salud protegen la privacidad." },
          { q: "¿Quién toma las decisiones de regreso al juego después de una conmoción cerebral?", options: ["Un asistente de IA", "Los profesionales de la salud", "El capitán del equipo", "Los padres en un chat de grupo"], answer: 1, why: "Las decisiones médicas son de profesionales calificados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Asistentes de IA para entrenadores",
    questions: [
      { q: "Un asistente de IA para entrenadores es:", options: ["Un robot en la banca", "Un árbitro", "Un asistente de IA general que se usa para tareas de entrenador", "Un ojeador pagado"], answer: 2, why: "Los entrenadores usan asistentes gratuitos para el trabajo de entrenador." },
      { q: "¿Qué NO puede hacer la IA?", options: ["Ver a tus jugadores y conocer sus sentimientos", "Hacer el borrador de un horario", "Escribir la descripción de un ejercicio", "Resumir notas"], answer: 0, why: "Solo sabe lo que tú le dices." },
      { q: "¿Quién decide el tiempo de juego?", options: ["El entrenador", "La IA", "Un chat de grupo de padres", "El rival"], answer: 0, why: "El tiempo de juego es una decisión humana." },
      { q: "Las instrucciones fijas son:", options: ["Un estiramiento del equipo", "Un reglamento", "El contexto que le das a la IA al principio", "Un trofeo"], answer: 2, why: "Hacen que las respuestas vayan con tu equipo." },
      { q: "¿Qué regla de seguridad va en las instrucciones fijas?", options: ["Nunca descansar", "Pausas para tomar agua cada 20 minutos", "Vueltas de castigo", "Saltarse el calentamiento"], answer: 1, why: "Las reglas de seguridad van en las instrucciones." },
      { q: "¿Qué deben decir las instrucciones fijas que nunca se incluya?", options: ["La duración del entrenamiento", "La categoría de edad", "El tamaño de la cancha", "Nombres de jugadores y datos de salud"], answer: 3, why: "Los datos privados se quedan fuera." },
      { q: "Una progresión es:", options: ["Un desfile", "Una eliminatoria", "Ejercicios que van de lo sencillo a lo más difícil", "Un cambio de horario"], answer: 2, why: "Las progresiones desarrollan la habilidad paso a paso." },
      { q: "Los tiempos del plan de la IA suman 120 minutos para un entrenamiento de 90. Tú:", options: ["Haces 120 minutos de todos modos", "Te saltas el calentamiento", "Lo ignoras", "Le pides que arregle los tiempos"], answer: 3, why: "Revisa que los tiempos sumen bien." },
      { q: "Solo tienes 10 balones. Tú:", options: ["Se lo dices a la IA y le pides que lo ajuste", "Cancelas el entrenamiento", "Compras 50 hoy mismo", "Ignoras el plan"], answer: 0, why: "Las preguntas de seguimiento ajustan el plan a tus recursos." },
      { q: "Un mensaje a los padres sobre un cambio de horario debe ser:", options: ["Largo y poco claro", "Corto, amable y con las fechas revisadas", "Enviado sin revisar", "Enviado desde una cuenta personal en contra de las reglas del club"], answer: 1, why: "Claro y exacto es lo mejor." },
      { q: "Los mensajes de grupo deben tratar de:", options: ["Los errores de un jugador", "Los detalles de la lesión de un jugador", "El equipo", "Chismes"], answer: 2, why: "Los temas individuales se quedan en privado." },
      { q: "Las reglas para escribir a menores de edad muchas veces exigen:", options: ["Incluir a un padre o a otro entrenador", "Mensajes secretos", "Escribir tarde en la noche", "Cuentas personales de redes"], answer: 0, why: "Estas reglas protegen a los atletas y a los entrenadores." },
      { q: "Las conversaciones difíciles sobre el tiempo de juego es mejor tenerlas:", options: ["En un texto escrito por IA", "En redes sociales", "En el chat de grupo", "En persona o por teléfono"], answer: 3, why: "Las conversaciones difíciles necesitan un trato humano." },
      { q: "Una ficha de ejercicio ayuda a:", options: ["Esconder el ejercicio", "Que asistentes y jugadores hagan los ejercicios igual", "Reemplazar el entrenamiento", "Llevar las calificaciones"], answer: 1, why: "La coherencia mejora el entrenamiento." },
      { q: "Un cuestionario de jugadas revisa:", options: ["La salud de los jugadores", "Si los jugadores conocen las jugadas", "Las calificaciones de los jugadores", "Los horarios de los padres"], answer: 1, why: "Los cuestionarios refuerzan el aprendizaje." },
      { q: "Al compartir un cuestionario con un formulario, pide:", options: ["Direcciones de casa", "Contraseñas", "Historial médico", "Solo la información que necesitas"], answer: 3, why: "Pocos datos protegen a los jugadores." },
      { q: "Un límite es:", options: ["Una regla que te mantiene seguro al usar una herramienta", "Una cerca", "Un ejercicio", "Un uniforme"], answer: 0, why: "Los límites evitan el mal uso." },
      { q: "La IA sugiere preparación física intensa con mucho calor. Tú:", options: ["La haces", "La haces más larga", "Consultas con tu preparador físico y las guías del organismo rector", "Quitas el agua"], answer: 2, why: "La IA puede sugerir prácticas peligrosas." },
      { q: "Un organismo rector es:", options: ["Un gimnasio", "Un patrocinador", "Un grupo de padres", "La organización que pone las reglas de tu deporte o tu nivel"], answer: 3, why: "Pone las reglas oficiales." },
      { q: "Las decisiones de selección deben salir de:", options: ["Suposiciones de la IA", "Lo que observa el entrenador", "Las redes sociales", "Rumores"], answer: 1, why: "Las decisiones justas salen de la observación real." }
    ]
  }
};
