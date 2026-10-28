"use strict";

// Koach Learn course (Spanish translation of athletes/athletes-intro-ai-sports.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-intro-ai-sports-es",
  lang: "es",
  translationOf: "athletes-intro-ai-sports",
  category: "Athletes",
  name: "Introducción a la IA en el deporte",
  skills: "Explicar qué hace la IA en el deporte, Abrir un asistente de IA gratuito, Escribir una instrucción clara sobre deporte, Revisar las respuestas de la IA, Proteger tu información privada y de salud",
  outcome: "usar un asistente de IA gratuito para armar un plan de entrenamiento y estudio de una semana alrededor del calendario de tu equipo: hacer una pregunta clara, mejorar la respuesta, revisarla con tu entrenador y dejar fuera los datos privados y de salud.",
  about: [
    "Este curso es para deportistas de secundaria, de universidad y al inicio de su carrera, y para entrenadores que quieren empezar de forma sencilla con la inteligencia artificial (IA). No necesitas saber de tecnología.",
    "Aprenderás dónde aparece ya la IA en el deporte, desde las estadísticas de los partidos hasta el análisis de video y el reclutamiento, y cómo usar tú mismo un asistente de IA gratuito para planear tu semana.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea “Pruébalo ahora”. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Usa un asistente de IA gratuito para armar un plan de una semana que se ajuste a tu calendario real de entrenamientos, partidos y clases. Escribe una instrucción clara, pide al menos dos mejoras, quita cualquier dato privado o de salud y muéstrale el plan a tu entrenador o a tu preparador físico antes de seguirlo.",
  chapters: [
    {
      name: "Capítulo 1: Dónde aparece la IA en el deporte",
      lessons: [
        {
          title: "Qué es la IA y dónde ya la ves en el deporte",
          minutes: 4,
          goal: "Nombrar tres formas en que se usa la IA en el deporte hoy y decir lo que la IA no puede hacer.",
          text: [
            "La IA, o inteligencia artificial, son programas de computadora que hacen tareas que normalmente necesitan a una persona, como encontrar patrones, escribir textos o reconocer lo que hay en un video.",
            "En el deporte ya la ves: transmisiones que muestran la velocidad de un jugador o la probabilidad de que entre un tiro, aplicaciones que cuentan tus repeticiones o registran tus carreras, herramientas de video que etiquetan cada jugada y sitios de reclutamiento que ordenan a los deportistas por estadísticas.",
            "La IA es una ayuda, no un entrenador, un médico ni un árbitro. No conoce tu cuerpo, tu equipo ni tus metas a menos que se lo digas, y puede equivocarse. Los entrenadores y los deportistas siguen tomando las decisiones."
          ],
          words: [["IA", "abreviatura de inteligencia artificial: programas que aprenden patrones a partir de datos y los usan para responder, predecir o crear."], ["Datos", "hechos y números, como tiempos, marcadores, repeticiones o video."]],
          slides: [
            { title: "La IA en una frase", bullets: ["Programas que aprenden patrones a partir de datos", "Luego responden, predicen o crean"] },
            { title: "Dónde la ves en el deporte", bullets: ["Estadísticas de las transmisiones, como velocidad y probabilidad de tiro", "Aplicaciones que registran carreras y repeticiones", "Herramientas de video que etiquetan jugadas", "Sitios de reclutamiento que ordenan por estadísticas"] },
            { title: "Lo que la IA no es", bullets: ["No es tu entrenador, tu médico ni el árbitro", "Puede equivocarse, aunque suene segura", "Tú y tu entrenador toman las decisiones"] }
          ],
          tryIt: "Anota tres lugares donde hayas visto IA o estadísticas inteligentes en tu deporte esta temporada, por ejemplo un gráfico de una transmisión, una aplicación de ejercicio o una herramienta de video que usa tu equipo.",
          youCanNow: "explicar qué es la IA, nombrar tres formas en que aparece en el deporte y decir por qué las personas siguen tomando las decisiones."
        },
        {
          title: "Abrir un asistente de IA gratuito",
          minutes: 5,
          goal: "Abrir un asistente de IA gratuito en tu teléfono o en una computadora y enviar tu primer mensaje.",
          text: [
            "Un asistente de IA es un programa de IA con el que conversas con palabras de todos los días. Algunos gratuitos conocidos son ChatGPT, Microsoft Copilot y Google Gemini.",
            "En un teléfono, descarga la aplicación oficial desde la tienda de aplicaciones, hecha por la empresa verdadera: OpenAI para ChatGPT, Microsoft para Copilot, Google para Gemini. En una computadora, abre un navegador y entra a chatgpt.com, copilot.microsoft.com o gemini.google.com.",
            "Algunos asistentes piden una cuenta y tienen reglas de edad. Si tienes menos de 18 años, revisa las reglas de edad de la aplicación y pregúntale primero a tu padre, madre o tutor. En una computadora de la escuela o compartida, cierra sesión al terminar."
          ],
          steps: ["Elige tu teléfono o una computadora.", "Teléfono: instala la aplicación oficial. Computadora: escribe la dirección web.", "Busca el cuadro de mensaje cerca de la parte de abajo de la pantalla.", "Escribe un saludo y lee la respuesta.", "En una computadora compartida, cierra sesión y cierra el navegador."],
          words: [["Asistente de IA", "un programa de IA con el que conversas escribiendo o hablando."], ["Navegador", "el programa que usas para visitar sitios web, como Chrome, Edge o Safari."]],
          slides: [
            { title: "Asistentes de IA gratuitos", bullets: ["ChatGPT (OpenAI)", "Microsoft Copilot", "Google Gemini"] },
            { title: "Cómo abrir uno", bullets: ["Teléfono: la aplicación oficial de la tienda de aplicaciones", "Computadora: chatgpt.com, copilot.microsoft.com o gemini.google.com", "Busca el cuadro de mensaje abajo"] },
            { title: "Antes de empezar", bullets: ["¿Menos de 18 años? Revisa las reglas de edad y pregúntale a tu padre o madre", "Computadora compartida: cierra sesión al terminar"] }
          ],
          tryIt: "Abre un asistente de IA gratuito y escribe: “Juego [tu deporte]. Explica en tres frases cortas cómo se usa la IA en mi deporte.” Lee la respuesta.",
          youCanNow: "abrir un asistente de IA gratuito, enviar un mensaje y dejar con seguridad una computadora compartida."
        },
        {
          title: "Escribir una instrucción clara sobre deporte",
          minutes: 5,
          goal: "Escribir una instrucción con lo que necesitas, tu situación y el formato que quieres.",
          text: [
            "Lo que le escribes a un asistente de IA se llama instrucción (en inglés, “prompt”). Una instrucción clara consigue una respuesta útil a la primera.",
            "Una instrucción fuerte tiene tres partes: lo que necesitas, tu situación y cómo quieres la respuesta. Ejemplo: “Soy mediocampista de fútbol en la secundaria. Entreno de lunes a jueves de 3:30 a 5:30 y tengo partido el viernes. Haz un horario de estudio sencillo para la semana alrededor de los entrenamientos. Ponlo en una tabla.”",
            "Una instrucción débil como “ayúdame a mejorar” obliga al asistente a adivinar. Agrega el deporte, la posición, tu horario y el formato."
          ],
          steps: ["Di lo que necesitas.", "Agrega tu deporte, posición, nivel y horario (sin datos privados).", "Di el formato: lista, tabla, pasos cortos o palabras sencillas."],
          words: [["Instrucción (prompt)", "lo que escribes o le dices a un asistente de IA para pedirle algo."], ["Formato", "la forma de la respuesta, como una lista, una tabla o pasos."]],
          slides: [
            { title: "Tres partes de una buena instrucción", bullets: ["1. Lo que necesitas", "2. Tu deporte, posición, nivel y horario", "3. El formato que quieres"] },
            { title: "Débil frente a clara", bullets: ["Débil: “ayúdame a mejorar”", "Clara: “Soy mediocampista de fútbol en la secundaria y entreno de lunes a jueves...”", "“...haz un horario de estudio en una tabla”"] },
            { title: "Agrega detalles, no secretos", bullets: ["Sí: deporte, posición, horarios de entrenamiento", "No: nombre completo, credencial escolar, historial médico"] }
          ],
          tryIt: "Escribe una instrucción de tres partes para pedir un horario de estudio o de días de recuperación alrededor de tu semana real de entrenamientos. Envíala y lee la respuesta.",
          youCanNow: "escribir una instrucción clara sobre deporte que incluya lo que necesitas, tu situación y el formato."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Dónde aparece la IA en el deporte",
        questions: [
          { q: "¿Cuál es un ejemplo de IA en el deporte?", options: ["Un silbato", "Una planilla de anotación en papel", "Un gráfico de una transmisión que muestra la probabilidad de que entre un tiro", "El autobús del equipo"], answer: 2, why: "Ese gráfico viene de un programa que aprendió patrones de muchísimos tiros anteriores." },
          { q: "Una aplicación de IA te sugiere seguir jugando con un dolor agudo en la rodilla. ¿Qué debes hacer?", options: ["Parar y hablar con tu preparador físico o tu médico", "Seguirla, porque la IA sabe más", "No hacerle caso a tu entrenador", "Pedirle a un compañero que decida"], answer: 0, why: "La IA no es un médico. Las preguntas sobre dolor y lesiones van a una persona calificada." },
          { q: "¿Dónde debes conseguir una aplicación de IA para tu teléfono?", options: ["En un enlace de un desconocido por mensaje directo", "En un anuncio emergente", "En cualquier sitio web", "En la tienda de aplicaciones oficial, de la empresa verdadera"], answer: 3, why: "Las tiendas oficiales y la aplicación de la empresa verdadera son la opción segura." },
          { q: "¿Cuáles son las tres partes de una instrucción clara?", options: ["Nombre, escuela, número de identificación", "Necesidad, situación, formato", "Deporte, color del equipo, mascota", "Hola, por favor, gracias"], answer: 1, why: "Necesidad, situación y formato le dan al asistente lo que necesita para ayudar." },
          { q: "¿Qué instrucción probablemente dará la respuesta más útil?", options: ["“ayúdame a mejorar”", "“Soy base en un equipo universitario y entreno de 6 a 8 de la mañana. Haz un horario de clases y recuperación para la semana en una tabla.”", "“básquetbol”", "“dime todo”"], answer: 1, why: "Incluye la necesidad, la situación y el formato." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la IA con confianza",
      lessons: [
        {
          title: "Mejorar la respuesta",
          minutes: 4,
          goal: "Usar instrucciones de seguimiento para arreglar una respuesta hasta que se ajuste a tu semana.",
          text: [
            "La primera respuesta es un borrador. El asistente recuerda lo que dijiste antes en la misma conversación, así que puedes pedirle cambios.",
            "Seguimientos útiles para deportistas: “Pasa el tiempo de estudio a después de la cena los días de partido.” “Hazlo más corto.” “Agrega un día de descanso.” “Usa palabras más sencillas.” “Explica por qué pusiste esto aquí.”",
            "Pide un cambio a la vez. Si la conversación se desvía, empieza una nueva con una instrucción más clara."
          ],
          steps: ["Lee la primera respuesta.", "Busca lo que no se ajusta a tu horario real.", "Pide un cambio.", "Repite hasta que se ajuste."],
          words: [["Seguimiento", "un segundo pedido que se basa en la respuesta que recibiste."]],
          slides: [
            { title: "Primera respuesta = borrador", bullets: ["Puedes pedir cambios", "Recuerda la misma conversación"] },
            { title: "Seguimientos que funcionan", bullets: ["“Agrega un día de descanso.”", "“Pasa el estudio a después de la cena los días de partido.”", "“Explica por qué pusiste esto aquí.”"] },
            { title: "¿Se desvió?", bullets: ["Un cambio a la vez", "O empieza una conversación nueva con una instrucción más clara"] }
          ],
          tryIt: "Toma tu horario de la Lección 3. Pide dos cambios, uno a la vez, para que coincida con tu semana real. Compara la primera versión con la última.",
          youCanNow: "mejorar una respuesta de la IA con instrucciones de seguimiento claras."
        },
        {
          title: "Revisar las respuestas de la IA con tu entrenador",
          minutes: 5,
          goal: "Detectar las partes de una respuesta de la IA que hay que revisar y revisarlas con la persona o la fuente correcta.",
          text: [
            "La IA puede inventar cosas o dar información vieja. A esto a veces se le llama alucinación. En el deporte, podría ser una regla equivocada, una estadística inventada, una fecha de reclutamiento vieja o un consejo de entrenamiento peligroso.",
            "Revisa siempre las cargas de entrenamiento, los consejos sobre lesiones y salud, la nutrición, los suplementos, la elegibilidad, el reclutamiento y las reglas de NIL (siglas en inglés de nombre, imagen y semejanza: lo que un deportista puede ganar con su nombre y su imagen). Revísalo con tu entrenador, tu preparador físico, tu médico, un dietista certificado o la oficina de cumplimiento de tu escuela, y en páginas oficiales como ncaa.org (la NCAA es la asociación que organiza el deporte universitario en Estados Unidos).",
            "Una buena costumbre: pregúntale al asistente “¿Qué debería volver a revisar con mi entrenador?” Y luego pregúntale de verdad a tu entrenador."
          ],
          steps: ["Marca cada dato, número, regla o consejo de salud de la respuesta.", "Decide quién debe revisarlo: entrenador, preparador físico, médico, dietista u oficina de cumplimiento.", "Revisa las reglas en las páginas oficiales.", "Si no coinciden, sigue a la persona o a la fuente oficial."],
          words: [["Alucinación", "cuando una IA escribe algo que suena cierto pero es inventado."], ["Oficina de cumplimiento", "la oficina de la escuela que conoce las reglas deportivas, incluidas las de reclutamiento y NIL."]],
          slides: [
            { title: "La IA puede equivocarse en", bullets: ["Reglas y fechas de reclutamiento", "Estadísticas y récords", "Consejos de entrenamiento, lesiones y nutrición"] },
            { title: "Quién revisa qué", bullets: ["Entrenamiento: entrenador", "Lesiones y salud: preparador físico o médico", "Comida: dietista certificado", "Reglas y NIL: oficina de cumplimiento"] },
            { title: "Una buena costumbre", bullets: ["Pregunta: “¿Qué debería volver a revisar?”", "Luego revísalo con una persona de verdad"] }
          ],
          sources: [{ name: "NCAA: Nombre, imagen y semejanza (reglas para deportistas universitarios, en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Hazle a un asistente de IA una pregunta sobre una regla de tu deporte, por ejemplo cuántos tiempos muertos tiene cada equipo. Luego busca la respuesta en el reglamento oficial de tu liga o pregúntale a tu entrenador, y mira si coincide.",
          youCanNow: "detectar lo que hay que revisar en una respuesta de la IA y llevarlo a la persona o la fuente oficial correcta."
        },
        {
          title: "Proteger tu información privada y de salud",
          minutes: 5,
          goal: "Usar la IA para una tarea real sin compartir información privada, de salud ni de tus cuentas.",
          text: [
            "No escribas datos privados en un asistente de IA: contraseñas, números de Social Security (el número del Seguro Social de Estados Unidos) o de identificación, tu dirección, datos bancarios, ni historial médico como informes de lesiones, medicamentos o resultados de análisis.",
            "Igual puedes recibir ayuda. Escribe “[mi escuela]” o “una lesión en el isquiotibial que me está tratando mi preparador físico” en lugar de nombres y datos médicos. Haz preguntas generales; las específicas llévaselas al profesional.",
            "Cuidado con las estafas dirigidas a deportistas: falsos reclutadores, falsos contratos con marcas y falsos agentes que te apuran, te piden dinero por adelantado o te piden un código de inicio de sesión. Revísalos primero con tu entrenador o con la oficina de cumplimiento."
          ],
          steps: ["Lee tu instrucción antes de enviarla.", "Quita nombres, números, contraseñas y datos de salud.", "Usa marcadores como “[mi escuela]”.", "Toma las ofertas apuradas, los pagos por adelantado y los pedidos de códigos como señales de alerta."],
          words: [["Marcador", "una palabra de reemplazo como “[mi escuela]” que mantiene privado el dato real."], ["Estafa", "un engaño para robar dinero, cuentas o información."]],
          slides: [
            { title: "Nunca escribas en la IA", bullets: ["Contraseñas y códigos de inicio de sesión", "Números de identificación o de banco, tu dirección", "Informes de lesiones, medicamentos, resultados de análisis"] },
            { title: "Usa marcadores", bullets: ["“[mi escuela]” en vez del nombre", "Pregunta general a la IA, la específica a un profesional"] },
            { title: "Estafas contra deportistas", bullets: ["Falsos reclutadores y falsos agentes", "Falsos contratos con marcas que piden dinero por adelantado", "Cualquiera que pida un código de inicio de sesión"] }
          ],
          tryIt: "Tarea final: arma tu plan de entrenamiento y estudio de una semana con un asistente de IA. Usa una instrucción de tres partes, pide dos mejoras, quita los datos privados y de salud y muéstrale el plan a tu entrenador o a tu preparador físico.",
          youCanNow: "usar la IA para planear tu semana protegiendo tu información privada y de salud, y detectar las estafas dirigidas a deportistas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la IA con confianza",
        questions: [
          { q: "El plan de la IA no tiene día de descanso. ¿Cuál es el mejor paso siguiente?", options: ["Aceptarlo igual", "Borrar la aplicación", "Entrenar todos los días para siempre", "Pedir: “Agrega un día de descanso.”"], answer: 3, why: "Un seguimiento le pide al asistente que cambie su respuesta." },
          { q: "¿Quién debe revisar un consejo de la IA sobre una lesión?", options: ["Tu preparador físico o tu médico", "Un compañero de equipo", "La misma IA", "Un comentario en redes sociales"], answer: 0, why: "Las preguntas de salud y lesiones van a un profesional calificado." },
          { q: "¿Qué es una alucinación en la IA?", options: ["Un sueño antes de un partido", "Una conexión a internet lenta", "Algo que la IA inventó y que suena cierto", "Un tipo de ejercicio"], answer: 2, why: "La IA puede inventar datos, reglas o estadísticas que parecen reales." },
          { q: "¿Qué dato está bien poner en una instrucción?", options: ["Tu contraseña", "Tu lista de medicamentos", "Tu dirección", "Tus horarios de entrenamiento"], answer: 3, why: "Los horarios de entrenamiento ayudan a la respuesta y no son privados." },
          { q: "Un “reclutador” te escribe por mensaje directo y te pide una tarifa para enviar hoy tus mejores jugadas a los entrenadores. ¿Qué haces?", options: ["Pagas rápido antes de que se acabe el cupo", "Lo revisas primero con tu entrenador o con la oficina de cumplimiento", "Le envías tu código de inicio de sesión", "Le envías tu número de identificación"], answer: 1, why: "La prisa y los pagos por adelantado son señales de alerta. Revisa antes de actuar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la IA en el deporte",
    questions: [
      { q: "La mejor forma de describir la IA es:", options: ["Un nuevo tipo de pelota", "Un árbitro", "Programas que aprenden patrones a partir de datos", "Una liga deportiva"], answer: 2, why: "La IA aprende patrones de los datos y los usa para responder o predecir." },
      { q: "¿Cuál NO es un uso de la IA en el deporte?", options: ["Atarte los cordones", "Etiquetar jugadas en el video del partido", "Registrar carreras con una aplicación", "Predecir la probabilidad de que entre un tiro"], answer: 0, why: "Atarse los cordones es tarea de una persona; los otros usan IA." },
      { q: "¿Quién toma la decisión final sobre tu entrenamiento?", options: ["Tú y tu entrenador", "La IA", "Una aplicación cualquiera", "Nadie"], answer: 0, why: "La IA ayuda; las personas deciden." },
      { q: "¿Cuál es un asistente de IA gratuito conocido?", options: ["Un cronómetro", "Un marcador", "Google Gemini", "Una camiseta"], answer: 2, why: "Gemini, ChatGPT y Copilot son asistentes de IA gratuitos." },
      { q: "Tienes 15 años y quieres usar un asistente de IA. ¿Qué debes hacer primero?", options: ["Mentir sobre tu edad", "Revisar las reglas de edad de la aplicación y preguntarle a tu padre, madre o tutor", "Usar la cuenta de un amigo", "Compartir tu contraseña"], answer: 1, why: "Muchos asistentes tienen reglas de edad; tus padres deben saberlo." },
      { q: "¿Dónde sueles escribirle a un asistente de IA?", options: ["En el ícono de la batería", "En la cámara", "En la dirección de tu escuela", "En el cuadro de mensaje cerca de la parte de abajo"], answer: 3, why: "El cuadro de mensaje es donde escribes tu instrucción." },
      { q: "Después de usar una computadora compartida de la escuela, debes:", options: ["Dejar la sesión abierta", "Guardar tu contraseña", "Cerrar sesión y cerrar el navegador", "Dejar una nota con tu contraseña"], answer: 2, why: "Cerrar sesión mantiene segura tu cuenta." },
      { q: "¿Qué es una instrucción (prompt)?", options: ["Un ejercicio de calentamiento", "Un grito del equipo", "Un tiempo muerto", "Lo que escribes o le dices a un asistente de IA"], answer: 3, why: "Una instrucción es tu pedido a la IA." },
      { q: "¿Qué parte le dice a la IA qué forma darle a la respuesta?", options: ["El formato, como una tabla o una lista", "Tu número de camiseta", "Tu contraseña", "El teléfono de tu entrenador"], answer: 0, why: "Decir el formato te da la respuesta con la forma que necesitas." },
      { q: "¿Qué instrucción es la más clara?", options: ["“entrenamiento”", "“Soy velocista universitario y entreno de 3 a 5 de la tarde. Haz un plan de estudio para la semana en una tabla.”", "“ayuda”", "“deportes”"], answer: 1, why: "Tiene la necesidad, la situación y el formato." },
      { q: "La primera respuesta no se ajusta a tu día de partido. Debes:", options: ["Rendirte", "Aceptarla", "Hacer un seguimiento para cambiar el día de partido", "Pagar por una aplicación nueva"], answer: 2, why: "Los seguimientos arreglan las partes que no se ajustan." },
      { q: "¿Cuántos cambios debes pedir a la vez para que quede claro?", options: ["Uno a la vez", "Diez", "Ninguno", "Todos los que puedas escribir"], answer: 0, why: "Un cambio a la vez mantiene la respuesta encaminada." },
      { q: "Una conversación se sigue desviando. Una buena jugada es:", options: ["Escribir tu contraseña", "Repetir las mismas palabras", "Dejar de entrenar", "Empezar una conversación nueva con una instrucción más clara"], answer: 3, why: "Una conversación nueva con una instrucción más clara suele funcionar mejor." },
      { q: "La IA te da una regla de reclutamiento. Debes:", options: ["Publicarla como un hecho", "Revisarla en ncaa.org o con tu oficina de cumplimiento", "No hacer caso a ninguna regla", "Volver a preguntarle a la IA y confiar en ella"], answer: 1, why: "Las reglas cambian; revisa la fuente oficial." },
      { q: "¿Quién es la persona indicada para revisar un plan de nutrición?", options: ["Un influencer cualquiera", "Un dietista certificado", "La IA", "Un videojuego"], answer: 1, why: "Los dietistas certificados están formados para dar consejos de nutrición." },
      { q: "¿Quién conoce las reglas de NIL y de reclutamiento de tu escuela?", options: ["La cafetería", "El chofer del autobús", "Un equipo rival", "La oficina de cumplimiento"], answer: 3, why: "La oficina de cumplimiento maneja las reglas deportivas." },
      { q: "¿Qué NUNCA debes escribir en un asistente de IA?", options: ["Tu lista de medicamentos", "Tu horario de entrenamientos", "Tu deporte", "Tu posición"], answer: 0, why: "Los medicamentos y el historial médico son privados." },
      { q: "¿Cómo puedes preguntar sobre una lesión sin compartir tu historial?", options: ["Pegar el informe de tu resonancia", "Escribir las notas de tu médico", "Hacer una pregunta general y llevarle la específica a tu preparador físico", "Compartir tu número de seguro"], answer: 2, why: "Las preguntas generales están bien; la atención específica es de un profesional." },
      { q: "Un contrato con una marca te pide pagar una tarifa por adelantado para entrar. Esto es:", options: ["Normal en todos los contratos", "Obligatorio según la NCAA", "Una buena señal", "Una señal de alerta de estafa"], answer: 3, why: "Las marcas de verdad te pagan a ti; los pagos por adelantado son una señal común de estafa." },
      { q: "Alguien te pide el código que acaba de llegarte por mensaje al teléfono. Debes:", options: ["Leérselo", "No compartirlo nunca", "Publicarlo", "Enviárselo a tu equipo por mensaje"], answer: 1, why: "Ese código protege tu cuenta. Los reclutadores y las marcas de verdad nunca lo piden." }
    ]
  }
};
