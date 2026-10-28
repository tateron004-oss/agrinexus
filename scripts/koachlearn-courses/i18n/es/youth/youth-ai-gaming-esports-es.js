"use strict";

// Koach Learn course (Spanish translation of youth-ai-gaming-esports). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "youth-ai-gaming-esports-es",
  lang: "es",
  translationOf: "youth-ai-gaming-esports",
  category: "Youth",
  name: "IA para videojuegos y esports",
  skills: "Fijar una meta de práctica, Armar un plan de práctica con IA, Revisar una partida, Comunicarte con tu equipo, Jugar de forma segura y limpia, Explorar carreras en los esports",
  outcome: "usar un asistente de IA gratuito como entrenador de práctica: fijar una meta clara para un juego que juegas, armar un plan de práctica de una semana, revisar una partida con notas y mantener tu forma de jugar segura, limpia y en equilibrio con la escuela y el sueño.",
  about: [
    "Este curso es para adolescentes que juegan videojuegos, desde jugadores casuales hasta quienes están en un equipo de esports de la escuela o de un club. No necesitas equipo caro. Necesitas un juego que juegues y un asistente de IA gratuito.",
    "Vas a aprender cómo ya aparece la IA dentro de los juegos y luego a usar un asistente de IA como un entrenador: para fijar una meta, planear la práctica y detectar patrones en tus partidas. También vas a aprender a hablar bien con un equipo, a mantenerte seguro y jugar limpio en línea, y qué trabajos existen alrededor de los esports.",
    "Revisa las reglas de tu escuela sobre la IA, la clasificación por edad de tus juegos y la edad mínima de cada app, y habla con tu madre, padre o tutor antes de registrarte en cualquier cosa. Cada lección termina con una tarea \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Elige un juego que juegues y una habilidad para mejorar. Usa un asistente de IA para armar un plan de práctica de una semana que encaje con la escuela, la tarea y el sueño. Juega y revisa una partida con tres notas escritas, pídele a la IA que encuentre un patrón y sugiera un ejercicio, y escribe un mensaje corto para tu equipo o club sobre lo que vas a trabajar después.",
  chapters: [
    {
      name: "Capítulo 1: Practicar de forma más inteligente con IA",
      lessons: [
        {
          title: "Dónde aparece la IA en los juegos y cómo te puede entrenar",
          minutes: 4,
          goal: "Nombrar formas en que se usa la IA en los juegos y formas en que un asistente de IA te puede ayudar a practicar.",
          text: [
            "Los juegos usan IA desde hace mucho tiempo. Los personajes controlados por la computadora contra los que juegas, el sistema que te empareja con jugadores de tu nivel y las herramientas que atrapan a los tramposos pueden usar IA.",
            "Un asistente de IA como ChatGPT, Microsoft Copilot o Google Gemini es diferente. No puede ver tu pantalla ni jugar por ti, pero te puede ayudar a pensar: fijar metas, planear la práctica, explicar ideas de estrategia y encontrar patrones en las notas que le des.",
            "No conoce cada parche o actualización del juego, y puede equivocarse. Revisa los consejos de estrategia con las notas oficiales del juego, el capitán o entrenador de tu equipo y tus propios resultados."
          ],
          words: [["IA", "inteligencia artificial: programas de computadora que hacen tareas que normalmente necesitan a una persona."], ["Emparejamiento", "el sistema que elige con quién o contra quién juegas."], ["Parche", "una actualización que cambia un juego."]],
          slides: [
            { title: "La IA dentro de los juegos", bullets: ["Personajes controlados por la computadora", "Emparejamiento por nivel", "Herramientas que atrapan a los tramposos"] },
            { title: "Un asistente de IA como entrenador", bullets: ["Ayuda a fijar metas y planear la práctica", "Explica ideas de estrategia", "Encuentra patrones en tus notas"] },
            { title: "Sus límites", bullets: ["No puede ver tu pantalla ni jugar por ti", "Puede no conocer el último parche", "Revisa los consejos con resultados reales"] }
          ],
          tryIt: "Escribe el juego que más juegas y tres cosas en las que te gustaría mejorar. Encierra en un círculo la que más te importa ahora.",
          youCanNow: "nombrar formas en que se usa la IA en los juegos y explicar lo que un asistente de IA puede y no puede hacer como entrenador de práctica."
        },
        {
          title: "Fijar una meta y armar un plan de práctica",
          minutes: 5,
          goal: "Usar un asistente de IA para convertir una meta en un plan de práctica semanal que encaje con tu vida.",
          text: [
            "Mejorar viene de practicar una cosa a propósito, no solo de jugar más. Una buena meta es pequeña y medible: \"Acertar más tiros en el modo de práctica\" o \"Avisar la posición de los enemigos en cada ronda\", no \"ser bueno\".",
            "Dale a la IA tu juego, tu meta, tu nivel actual y tu horario real. Por ejemplo: \"Juego Rocket League. Quiero mejorar mis golpes aéreos. Puedo practicar 30 minutos en 4 noches de escuela después de la tarea. Haz un plan sencillo de una semana con ejercicios cortos y una forma de medir mi avance.\"",
            "Pon primero la escuela, la tarea, el sueño y el tiempo con la familia. Los jugadores de esports de todos los niveles toman descansos, se estiran y descansan la vista. Un plan que de verdad puedes cumplir es mejor que un plan enorme que abandonas."
          ],
          steps: ["Elige una meta pequeña y medible.", "Dile a la IA tu juego, tu meta, tu nivel y tu tiempo libre real.", "Pide un plan de una semana con ejercicios cortos y una forma de medir tu avance.", "Revisa que deje tiempo para la escuela, la tarea y el sueño.", "Pide un cambio si es demasiado."],
          words: [["Meta medible", "una meta que puedes revisar con un número o con un sí o un no."], ["Ejercicio", "una práctica corta que entrena una sola habilidad."]],
          slides: [
            { title: "Practica a propósito", bullets: ["Una habilidad a la vez", "Pequeña y medible", "No solo \"ser bueno\""] },
            { title: "Qué decirle a la IA", bullets: ["Tu juego y tu meta", "Tu nivel", "Tu tiempo libre real"] },
            { title: "Un plan que puedas cumplir", bullets: ["Primero la escuela, la tarea y el sueño", "Ejercicios cortos, descansos cortos", "Mide tu avance cada día"] }
          ],
          tryIt: "Pídele a un asistente de IA un plan de práctica de una semana para la habilidad que encerraste en la lección 1, usando tu horario real. Pídele que acorte el plan si toma más de 30 a 45 minutos al día.",
          youCanNow: "convertir una meta de juego en un plan de práctica semanal realista con un asistente de IA."
        },
        {
          title: "Revisar una partida con IA",
          minutes: 5,
          goal: "Escribir notas de una partida y usar la IA para encontrar un patrón y sugerir un ejercicio.",
          text: [
            "Los mejores jugadores revisan sus partidas. Después de una partida, o mientras ves una repetición si tu juego la tiene, escribe tres notas cortas: algo que salió bien, un error y cuándo pasó.",
            "Pega las notas en un asistente de IA y pregunta: \"Estas son mis notas de tres partidas. ¿Qué patrones ves y qué ejercicio me ayudaría?\" La IA es buena para detectar repeticiones que tú podrías pasar por alto.",
            "Haz notas sobre el juego, no sobre otras personas. No pegues los nombres de usuario de otros jugadores, sus mensajes privados ni nada personal. Y sé amable contigo: la meta es aprender, no sentirte mal."
          ],
          steps: ["Juega o mira la repetición de una partida.", "Escribe tres notas: algo bueno, un error y cuándo pasó.", "Junta notas de dos o tres partidas.", "Pídele a la IA patrones y un ejercicio.", "Agrega el ejercicio a tu plan de práctica."],
          words: [["Repetición", "una grabación de una partida que puedes volver a ver."], ["Patrón", "algo que pasa una y otra vez."]],
          slides: [
            { title: "Tres notas por partida", bullets: ["Algo que salió bien", "Un error", "Cuándo pasó"] },
            { title: "Pídele patrones a la IA", bullets: ["Pega notas de 2-3 partidas", "\"¿Qué patrones ves?\"", "\"¿Qué ejercicio me ayudaría?\""] },
            { title: "Que sea sobre el juego", bullets: ["Nada de nombres ni mensajes de otros jugadores", "Aprende, no te castigues"] }
          ],
          tryIt: "Juega una partida, escribe tres notas y pregúntale a un asistente de IA qué nota y qué ejercicio sugiere. Agrega ese ejercicio a tu plan.",
          youCanNow: "revisar una partida con notas y usar la IA para encontrar un patrón y elegir un ejercicio."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Practicar de forma más inteligente con IA",
        questions: [
          { q: "¿Cuál es un ejemplo de IA dentro de un juego?", options: ["El cable de corriente", "Los personajes controlados por la computadora contra los que juegas", "La caja del juego", "Tus audífonos"], answer: 1, why: "Los personajes controlados por la computadora a menudo usan IA." },
          { q: "¿Cuál es la mejor meta de práctica?", options: ["\"Ser bueno\"", "\"Jugar toda la noche\"", "\"Avisar la posición de los enemigos en cada ronda esta semana\"", "\"Ganar todo\""], answer: 2, why: "Es pequeña y medible." },
          { q: "¿Qué debes decirle a la IA para obtener un plan de práctica útil?", options: ["Tu juego, tu meta, tu nivel y tu tiempo libre real", "Tu contraseña", "Solo la palabra \"plan\"", "La dirección de tu casa"], answer: 0, why: "Esos datos le permiten armar un plan que te quede bien." },
          { q: "Tu plan de la IA toma 3 horas cada noche de escuela. ¿Qué haces?", options: ["No hacer la tarea", "Desvelarte", "Pedirle a la IA que lo acorte y lo acomode a la escuela y el sueño", "Seguirlo de todos modos"], answer: 2, why: "Un plan que puedes cumplir pone primero la escuela y el sueño." },
          { q: "¿Qué debes dejar fuera de las notas de partida que le das a la IA?", options: ["Cuándo pasó un error", "Lo que salió bien", "Los nombres de usuario y mensajes privados de otros jugadores", "El nombre del juego"], answer: 2, why: "Haz notas sobre el juego, no sobre los datos personales de otras personas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Equipos, seguridad y futuro en los esports",
      lessons: [
        {
          title: "Hablar bien con tu equipo",
          minutes: 5,
          goal: "Usar la IA para escribir avisos cortos para tu equipo y un mensaje claro para el club o el equipo.",
          text: [
            "Los buenos equipos hablan con claridad y amabilidad. Los avisos son palabras cortas que el equipo acuerda, como \"dos a la izquierda\" o \"rotando al centro\". Los avisos cortos y tranquilos funcionan mejor que los largos o enojados.",
            "Un asistente de IA te puede ayudar a hacer una lista de avisos para tu juego, o a escribir un mensaje para el club de tu escuela: horarios de práctica, lo que van a trabajar y un recordatorio de ser respetuosos. Pregunta: \"Escribe un mensaje corto y amigable para el club de esports de mi escuela sobre la práctica del jueves. Que tenga menos de 80 palabras.\"",
            "Si un compañero comete un error, concéntrate en la siguiente jugada, no en culpar. Los equipos que se mantienen positivos juegan mejor y se divierten más."
          ],
          steps: ["Haz una lista de los momentos más comunes de tu juego que necesitan un aviso.", "Pídele a la IA palabras de aviso cortas y claras para cada uno.", "Acuerden la lista con tu equipo.", "Usa la IA para escribir un borrador de mensaje corto y amigable para el equipo o el club.", "Léelo, cámbialo para que suene como tú y luego compártelo."],
          words: [["Aviso", "una palabra o frase corta que les dice a tus compañeros lo que está pasando."], ["Esports", "videojuegos competitivos y organizados, a menudo con equipos y ligas."]],
          slides: [
            { title: "Avisos claros", bullets: ["Palabras cortas que el equipo acuerda", "Tranquilo es mejor que fuerte", "Ejemplo: \"dos a la izquierda\""] },
            { title: "IA para mensajes del equipo", bullets: ["Hora y lugar de la práctica", "Lo que van a trabajar", "Un recordatorio de ser respetuosos"] },
            { title: "Mantente positivo", bullets: ["Concéntrate en la siguiente jugada", "Sin culpar", "Que suene como tú"] }
          ],
          tryIt: "Pídele a un asistente de IA que te ayude a hacer una lista de cinco avisos para tu juego. Luego pídele un borrador de mensaje corto para tu equipo o club sobre la próxima práctica y reescríbelo con tu propia voz.",
          youCanNow: "crear avisos claros para tu equipo y un mensaje amigable con ayuda de la IA."
        },
        {
          title: "Jugar de forma segura y limpia",
          minutes: 5,
          goal: "Detectar trampas, estafas y chats peligrosos, y saber qué hacer.",
          text: [
            "Las trampas como los aimbots o los archivos alterados rompen las reglas de un juego y pueden hacer que bloqueen tu cuenta. Los sitios que prometen moneda del juego gratis, skins o \"trampas con IA\" muchas veces roban cuentas o instalan programas dañinos. Nunca los descargues ni le des tu inicio de sesión a nadie.",
            "Ten cuidado en los chats. No compartas tu nombre real, tu escuela, tu dirección, tu número de teléfono ni fotos con personas que solo conoces en línea. Si alguien te presiona, te pide secretos o te hace sentir incómodo, bloquéalo, repórtalo en el juego y avísale a tu madre, padre, tutor o a un adulto de confianza.",
            "Los juegos tienen clasificaciones por edad. En Estados Unidos, la ESRB (la organización que clasifica los videojuegos) da las clasificaciones, por ejemplo T (Teen) para unos 13 años en adelante y M (Mature) para 17 en adelante. Habla con tu familia sobre qué juegos y cuánto tiempo de pantalla son adecuados para ti."
          ],
          steps: ["Nunca uses trampas ni descargues herramientas de \"moneda gratis\".", "Nunca le des a nadie tu inicio de sesión ni el código que te llega al teléfono.", "Deja fuera de los chats tu nombre real, tu escuela y tu dirección.", "Bloquea, reporta y avísale a un adulto de confianza cuando algo se sienta mal.", "Revisa con tu familia la clasificación por edad de un juego."],
          words: [["Aimbot", "una trampa que apunta por ti; rompe las reglas del juego."], ["Bloqueo de cuenta", "cuando un juego bloquea tu cuenta por romper las reglas."], ["Clasificación por edad", "una etiqueta que dice para qué edades está pensado un juego."]],
          slides: [
            { title: "Juega limpio", bullets: ["Las trampas pueden hacer que bloqueen tu cuenta", "Los sitios de \"moneda gratis\" roban cuentas", "Nunca compartas tu inicio de sesión ni el código del teléfono"] },
            { title: "Seguridad en el chat", bullets: ["Nada de nombre real, escuela ni dirección", "Nada de fotos a desconocidos", "Bloquea, reporta, avisa a un adulto de confianza"] },
            { title: "Clasificaciones por edad", bullets: ["ESRB T: en general desde los 13", "ESRB M: en general desde los 17", "Habla con tu familia sobre juegos y tiempo"] }
          ],
          sources: [{ name: "ESRB: guía de clasificaciones", url: "https://www.esrb.org/ratings-guide/" }],
          tryIt: "Abre la configuración de un juego o plataforma que uses y encuentra dónde bloquear y reportar a un jugador. Luego busca la clasificación por edad de tu juego favorito en el sitio web de la ESRB.",
          youCanNow: "detectar trampas, estafas de cuentas y chats peligrosos, y saber cómo bloquear, reportar y pedir ayuda."
        },
        {
          title: "Carreras en los esports y juntar todo",
          minutes: 6,
          goal: "Explorar trabajos alrededor de los esports y completar tu plan de práctica y la revisión de tu partida.",
          text: [
            "Solo unas pocas personas llegan a ser jugadores profesionales, pero los esports necesitan a mucha otra gente: entrenadores, mánagers de equipo, comentaristas (shoutcasters) que narran las partidas, editores de video, diseñadores gráficos, organizadores de eventos y las personas que diseñan y prueban juegos.",
            "Pregúntale a un asistente de IA: \"¿Qué trabajos existen en los esports además de ser jugador profesional? ¿Qué materias y clubes escolares ayudan para cada uno?\" Luego revisa las respuestas con un orientador escolar o con una oferta de trabajo real, porque la IA puede estar desactualizada.",
            "Muchas escuelas tienen clubes o equipos de esports. Si la tuya no tiene, un asesor de clubes o un maestro te puede ayudar a empezar uno. Ahora junta todo: meta, plan, revisión de partida y mensaje para el equipo."
          ],
          steps: ["Pídele a la IA una lista de trabajos en los esports y las habilidades que necesita cada uno.", "Elige un trabajo que te interese.", "Revísalo con un orientador o con una oferta de trabajo real.", "Completa tu meta, tu plan, la revisión de tu partida y el mensaje para tu equipo."],
          words: [["Comentarista (shoutcaster)", "una persona que narra en vivo las partidas de esports."], ["Organizador de eventos", "una persona que planea y dirige torneos."]],
          slides: [
            { title: "Más que jugadores profesionales", bullets: ["Entrenadores y mánagers de equipo", "Comentaristas y editores de video", "Diseñadores, probadores, organizadores de eventos"] },
            { title: "Explora con IA y luego revisa", bullets: ["Pregunta qué habilidades necesita cada trabajo", "Revisa con un orientador o una oferta de trabajo"] },
            { title: "Tu tarea final", bullets: ["Una meta y un plan de una semana", "Una partida revisada con tres notas", "Un ejercicio y un mensaje para el equipo"] }
          ],
          tryIt: "Tarea final: arma con la IA un plan de práctica de una semana que encaje con la escuela y el sueño, revisa una partida con tres notas, pídele a la IA un patrón y un ejercicio, y escribe un mensaje corto para tu equipo o club sobre lo que vas a trabajar después.",
          youCanNow: "usar la IA como entrenador de práctica, jugar de forma segura y limpia, y nombrar trabajos en los esports más allá de ser jugador profesional."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Equipos, seguridad y futuro en los esports",
        questions: [
          { q: "¿Qué hace que un aviso sea bueno?", options: ["Largo y detallado", "Corto, tranquilo y acordado por el equipo", "Fuerte y enojado", "Distinto cada vez"], answer: 1, why: "Los avisos cortos y acordados son rápidos y claros." },
          { q: "Un sitio web ofrece moneda del juego gratis si escribes tu inicio de sesión. ¿Qué haces?", options: ["Escribirlo rápido", "Compartir el enlace con tus amigos", "Darles el código de tu teléfono", "No escribirlo; probablemente es una estafa"], answer: 3, why: "Los sitios de moneda gratis muchas veces roban cuentas." },
          { q: "Alguien que solo conoces en línea te pregunta a qué escuela vas. ¿Qué haces?", options: ["Decírselo", "Mandar una foto de tu uniforme", "No compartirlo; bloquearlo y avisar a un adulto de confianza si te presiona", "Darle tu dirección en su lugar"], answer: 2, why: "Mantén privados tus datos personales en línea." },
          { q: "Una clasificación ESRB M significa que un juego en general es para edades de:", options: ["17 en adelante", "6 en adelante", "10 en adelante", "Todos"], answer: 0, why: "M (Mature) en general es para 17 años en adelante." },
          { q: "¿Cuál es un trabajo en los esports además de jugador profesional?", options: ["Comentarista (shoutcaster)", "Creador de aimbots", "Vendedor de cuentas", "Probador de trampas"], answer: 0, why: "Los comentaristas narran las partidas; los demás rompen las reglas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para videojuegos y esports",
    questions: [
      { q: "El emparejamiento en un juego es:", options: ["Una forma de comprar skins", "El sistema que elige con quién o contra quién juegas", "Una trampa", "Un tipo de control"], answer: 1, why: "El emparejamiento junta jugadores, a menudo por nivel." },
      { q: "¿Qué NO puede hacer un asistente de IA por tu forma de jugar?", options: ["Ayudarte a planear la práctica", "Explicar ideas de estrategia", "Ver tu pantalla y jugar por ti", "Encontrar patrones en tus notas"], answer: 2, why: "Un asistente de chat te ayuda a pensar; no juega por ti." },
      { q: "¿Por qué revisar los consejos de estrategia de la IA con las notas oficiales del juego?", options: ["La IA puede no conocer el último parche", "La IA siempre tiene razón", "Las notas oficiales son ilegales", "Es una regla de la escuela"], answer: 0, why: "Los juegos cambian con los parches y la IA puede estar desactualizada." },
      { q: "Una meta medible es una que puedes:", options: ["Nunca terminar", "Solo sentir", "Revisar con un número o con un sí o un no", "Olvidar"], answer: 2, why: "Medible significa que la puedes revisar." },
      { q: "¿Qué va primero en tu plan de práctica?", options: ["Sesiones a medianoche", "La escuela, la tarea y el sueño", "Comprar equipo nuevo", "Jugar otros juegos"], answer: 1, why: "Un buen plan se acomoda a la escuela y al descanso." },
      { q: "Un ejercicio es:", options: ["Una práctica corta que entrena una sola habilidad", "Un código de trampa", "El nombre de un equipo", "Una clasificación de un juego"], answer: 0, why: "Los ejercicios entrenan una habilidad a la vez." },
      { q: "Tu plan se siente como demasiado. ¿Qué haces?", options: ["Dejar de jugar", "Pedirle a la IA que lo acorte", "No dormir", "Ignorarlo"], answer: 1, why: "Las peticiones de seguimiento ajustan el plan." },
      { q: "¿Qué tres notas debes escribir después de una partida?", options: ["Puntaje, clima, bocadillo", "Nombres y mensajes de otros jugadores", "Algo bueno, un error y cuándo pasó", "Nada"], answer: 2, why: "Estas notas te ayudan a aprender de la partida." },
      { q: "¿Por qué darle a la IA notas de varias partidas?", options: ["Para que pueda detectar patrones que se repiten", "Para hacerla más lenta", "Para que inicie sesión por ti", "Necesita tu contraseña"], answer: 0, why: "Los patrones aparecen a lo largo de varias partidas." },
      { q: "¿Qué debes hacer con el ejercicio que sugiere la IA?", options: ["Ignorarlo", "Publicarlo", "Borrar tus notas", "Agregarlo a tu plan de práctica"], answer: 3, why: "Un ejercicio solo ayuda si lo practicas." },
      { q: "Un aviso es:", options: ["Una frase corta que les dice a tus compañeros lo que está pasando", "Una trampa", "Un bloqueo de cuenta", "Una clasificación"], answer: 0, why: "Los avisos ayudan a los equipos a hablar rápido." },
      { q: "Un compañero comete un error. La mejor respuesta es:", options: ["Culparlo en el chat", "Salirte de la partida", "Concentrarte en la siguiente jugada", "Reportarlo"], answer: 2, why: "Los equipos positivos juegan mejor." },
      { q: "Antes de compartir un mensaje para el club escrito con IA, deberías:", options: ["Enviarlo sin leerlo", "Leerlo y hacer que suene como tú", "Agregar tu contraseña", "Hacerlo más largo"], answer: 1, why: "Tú eres responsable de lo que envías." },
      { q: "Usar un aimbot puede:", options: ["Hacer que bloqueen tu cuenta", "Ayudarte a aprender más rápido", "Subir tu clasificación por edad", "Convertirte en entrenador"], answer: 0, why: "Las trampas rompen las reglas y pueden llevar a un bloqueo." },
      { q: "Alguien te pide el código que te acaba de llegar al teléfono. Tú:", options: ["Se lo lees", "Nunca lo compartes", "Lo publicas en el chat", "Se lo mandas a tu equipo"], answer: 1, why: "Ese código protege tu cuenta." },
      { q: "Un jugador en línea te hace sentir incómodo. ¿Qué haces?", options: ["Seguir chateando", "Darle tu número", "Bloquearlo, reportarlo y avisar a un adulto de confianza", "Mandarle una foto"], answer: 2, why: "Bloquear, reportar y avisar a un adulto te mantiene seguro." },
      { q: "ESRB T (Teen) en general es para edades de:", options: ["3 en adelante", "13 en adelante", "Solo 18 en adelante", "Menos de 10"], answer: 1, why: "T en general es adecuado para 13 años en adelante." },
      { q: "Antes de registrarse en una app nueva de juegos o de IA, un adolescente debe:", options: ["Usar una fecha de nacimiento falsa", "Saltarse los términos", "Compartir la contraseña de su madre o padre", "Revisar la edad mínima y hablar con su madre, padre o tutor"], answer: 3, why: "Los límites de edad y la participación de los padres te mantienen seguro y dentro de las reglas." },
      { q: "Un comentarista (shoutcaster):", options: ["Narra partidas de esports", "Crea trampas", "Bloquea jugadores", "Clasifica juegos"], answer: 0, why: "Los comentaristas son las voces de las transmisiones de esports." },
      { q: "La IA te da una lista de trabajos en los esports. ¿Qué sigue?", options: ["Creer cada detalle", "Dejar la escuela", "Revisarla con un orientador o una oferta de trabajo real", "Pagar un curso de inmediato"], answer: 2, why: "La IA puede estar desactualizada; revisa con fuentes reales." }
    ]
  }
};
