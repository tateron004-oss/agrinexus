"use strict";

// Koach Learn course (Spanish translation of athletes-brand-campaigns). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "athletes-brand-campaigns-es",
  lang: "es",
  translationOf: "athletes-brand-campaigns",
  category: "Athletes",
  name: "Campañas educativas de marcas",
  skills: "Reconocer una campaña educativa, Elegir una causa que vaya contigo, Verificar datos con fuentes confiables, Planear una campaña de 3 publicaciones con IA, Proponer una alianza a una marca u organización sin fines de lucro con un aviso claro",
  outcome: "planear una campaña educativa de tres publicaciones sobre una causa que te importa (por ejemplo seguridad en el agua, lectura, conmociones cerebrales o educación financiera), con datos verificados en fuentes oficiales, una propuesta a un aliado y un aviso claro de cualquier apoyo de una marca.",
  about: [
    "Este curso es para atletas y entrenadores que quieren usar su plataforma para enseñar algo útil, solos o con una marca u organización sin fines de lucro como aliada. Las marcas a menudo hacen campañas educativas con atletas sobre temas como salud, seguridad, lectura, manejo del dinero y comunidad.",
    "Una campaña educativa primero enseña y después vende, si es que vende. Vas a aprender qué hace buena a una campaña, elegir una causa que vaya contigo, verificar datos con fuentes oficiales, planear tres publicaciones con IA y hacer una propuesta honesta a un aliado.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Cualquier trabajo pagado o con regalos de una marca necesita un aviso claro y, si eres estudiante, revisar las reglas de NIL (nombre, imagen y semejanza) de tu escuela y tu estado."
  ],
  finalTask: "Planea una campaña educativa de tres publicaciones sobre una causa: un objetivo de aprendizaje claro, tres planes de publicación hechos con IA, cada dato enlazado a una fuente oficial o experta, una llamada a la acción y una propuesta corta a una marca u organización sin fines de lucro. Incluye cómo vas a avisar de cualquier apoyo de una marca y con quién revisaste las reglas de NIL en tu escuela o tu estado.",
  chapters: [
    {
      name: "Capítulo 1: Qué hace buena a una campaña educativa",
      lessons: [
        {
          title: "Qué es una campaña educativa",
          minutes: 4,
          goal: "Distinguir una campaña educativa de un anuncio normal.",
          text: [
            "Un anuncio normal dice \"compra esto\". Una campaña educativa dice \"aquí hay algo útil que saber o hacer\". Las marcas usan atletas en estas campañas porque los jóvenes y las familias confían en ellos.",
            "Ejemplos de temas de campaña: aprender a nadar y seguridad en el agua, reconocer las señales de una conmoción cerebral, leer todos los días, mantenerse hidratado, ahorrar dinero, seguridad en internet o conciencia sobre la salud mental.",
            "Las buenas campañas tienen un solo objetivo de aprendizaje, datos correctos de fuentes confiables, una acción sencilla que la gente puede hacer y honestidad sobre quién la paga."
          ],
          words: [["Campaña educativa", "una serie de mensajes que enseña algo útil, muchas veces con el apoyo de una marca u organización sin fines de lucro."], ["Objetivo de aprendizaje", "lo único que quieres que tu público sepa o haga después de la campaña."]],
          slides: [
            { title: "Anuncio vs. campaña educativa", bullets: ["Anuncio: \"compra esto\"", "Campaña: \"aquí hay algo útil que saber o hacer\""] },
            { title: "Ejemplos de temas", bullets: ["Seguridad en el agua, señales de conmoción", "Lectura, manejo del dinero", "Seguridad en internet, salud mental"] },
            { title: "Una buena campaña tiene", bullets: ["Un solo objetivo de aprendizaje", "Datos correctos y con fuente", "Una acción sencilla", "Honestidad sobre quién paga"] }
          ],
          tryIt: "Busca una campaña educativa que hayas visto con un atleta o una marca. Escribe su objetivo de aprendizaje, la acción que pedía y si decía quién la pagó.",
          youCanNow: "distinguir una campaña educativa de un anuncio normal y decir qué la hace buena."
        },
        {
          title: "Elegir tu causa",
          minutes: 5,
          goal: "Elegir una causa que vaya con tu historia y tu público.",
          text: [
            "Las campañas más fuertes salen de la vida real. ¿Un entrenador te enseñó sobre las conmociones cerebrales después de que un compañero se lastimó? ¿La lectura te ayudó a seguir siendo elegible? ¿Aprender a hacer un presupuesto con tu dinero de NIL cambió las cosas? Tu historia hace que la gente escuche.",
            "Elige una causa que también vaya con tu público. A los fans más jóvenes y a sus padres quizá les importen la seguridad y la lectura; a tus compañeros universitarios, el manejo del dinero y la salud mental.",
            "Escribe un objetivo de aprendizaje: \"Después de mi campaña, los jugadores de secundaria básica sabrán tres señales de una conmoción cerebral y que deben avisar al entrenador de inmediato.\""
          ],
          steps: ["Haz una lista de tres causas relacionadas con tu vida.", "Marca la que mejor va con tu público.", "Escribe en dos oraciones tu relación con la causa.", "Escribe un objetivo de aprendizaje."],
          words: [["Causa", "un problema o una meta que te importa y con la que quieres ayudar."], ["Auténtico", "real y fiel a quien eres."]],
          slides: [
            { title: "Empieza con tu historia", bullets: ["¿Qué te pasó?", "¿Por qué te importa?"] },
            { title: "Que vaya con tu público", bullets: ["Fans jóvenes: seguridad, lectura", "Compañeros universitarios: dinero, salud mental"] },
            { title: "Un objetivo de aprendizaje", bullets: ["Quién va a aprender qué", "Y qué va a hacer"] }
          ],
          tryIt: "Pide a un asistente de IA que te ayude a hacer una lista de causas relacionadas con tu deporte y tu vida. Elige una y escribe tu historia en dos oraciones y un objetivo de aprendizaje.",
          youCanNow: "elegir una causa auténtica y escribir un objetivo de aprendizaje claro."
        },
        {
          title: "Tener los datos correctos",
          minutes: 5,
          goal: "Verificar cada dato de tu campaña con una fuente oficial o experta.",
          text: [
            "Si enseñas algo equivocado, la gente puede salir lastimada, y tu reputación y la de tu aliado se dañan. Cada dato necesita una fuente confiable.",
            "Usa fuentes oficiales y expertas: agencias de gobierno de salud y seguridad (por ejemplo, las páginas HEADS UP sobre conmociones de los CDC, la agencia de salud pública de EE. UU.), organizaciones nacionales y expertos como preparadores físicos, médicos, maestros o asesores financieros. Pide a un asistente de IA que te explique un tema de forma sencilla y luego confirma cada dato en la fuente misma.",
            "Lleva una hoja de datos: cada dato, el enlace a la fuente y la fecha en que lo revisaste. Enseña conciencia general y envía a la gente con profesionales para consejos personales."
          ],
          steps: ["Haz una lista de los datos que quieres compartir.", "Busca una fuente oficial o experta para cada uno.", "Anota el enlace y la fecha en que lo revisaste.", "Quita cualquier dato que no puedas confirmar.", "Envía a la gente con profesionales para consejos personales."],
          words: [["Fuente oficial", "información de una agencia de gobierno o de la organización a cargo del tema."], ["Hoja de datos", "una lista de tus datos con sus fuentes y las fechas en que los revisaste."]],
          slides: [
            { title: "Los datos equivocados hacen daño", bullets: ["La gente puede salir lastimada", "Tu nombre y el de tu aliado se dañan"] },
            { title: "Fuentes confiables", bullets: ["Agencias de gobierno, como CDC HEADS UP", "Organizaciones nacionales", "Expertos: preparadores, médicos, maestros"] },
            { title: "Tu hoja de datos", bullets: ["Dato, enlace a la fuente, fecha de revisión", "¿No lo puedes confirmar? Quítalo"] }
          ],
          sources: [{ name: "CDC: HEADS UP (conciencia sobre conmociones cerebrales, en inglés)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Escribe tres datos para tu campaña. Busca una fuente oficial o experta para cada uno y arma tu hoja de datos con enlaces y fechas.",
          youCanNow: "verificar los datos de una campaña con fuentes oficiales y llevar una hoja de datos."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Qué hace buena a una campaña educativa",
        questions: [
          { q: "¿En qué se diferencia una campaña educativa de un anuncio normal?", options: ["Siempre es más larga", "No tiene atletas", "Primero enseña algo útil", "Nunca tiene marcas"], answer: 2, why: "Las campañas enseñan; los anuncios sobre todo venden." },
          { q: "¿Cuál es un objetivo de aprendizaje claro?", options: ["\"Los jugadores de secundaria básica sabrán tres señales de conmoción y avisarán al entrenador\"", "\"Toma conciencia\"", "\"Corre la voz\"", "\"Hazte viral\""], answer: 0, why: "Dice quién aprende qué y qué va a hacer." },
          { q: "¿Por qué empezar con tu propia historia?", options: ["Lo exige la ley", "Hace las publicaciones más largas", "Esconde a la marca", "Hace la campaña real y la gente escucha"], answer: 3, why: "Las historias auténticas generan confianza." },
          { q: "La IA te da un dato de salud. ¿Qué haces?", options: ["Lo publicas de inmediato", "Lo confirmas en una fuente oficial o experta", "Lo haces sonar más alarmante", "Le preguntas a un fan"], answer: 1, why: "La IA se puede equivocar; confírmalo en la fuente." },
          { q: "No encuentras una fuente para un dato. Tú:", options: ["Lo publicas de todos modos", "Lo quitas", "Te inventas una fuente", "Cambias los números"], answer: 1, why: "Comparte solo lo que puedes confirmar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear y buscar aliados",
      lessons: [
        {
          title: "Planear tres publicaciones con IA",
          minutes: 5,
          goal: "Hacer con IA un borrador de plan de campaña de tres publicaciones y corregirlo.",
          text: [
            "Tres publicaciones bastan para una campaña enfocada: 1. Por qué importa (tu historia). 2. Qué saber o hacer (la lección principal). 3. Pasa a la acción (un paso sencillo, como \"comparte esto con tu equipo\" o \"toma la capacitación gratuita\").",
            "Pide a un asistente de IA: \"Esta es mi causa, mi objetivo de aprendizaje, mi historia y mi hoja de datos. Planea tres publicaciones cortas: por qué importa, qué saber, pasa a la acción. Dame un gancho, los puntos principales y una llamada a la acción para cada una. Usa solo datos de mi hoja de datos.\"",
            "Corrígelo para que suene a ti y vuelve a revisar cada dato con tu hoja de datos. Que el tono sea esperanzador y práctico, no alarmante."
          ],
          steps: ["Pega tu causa, tu objetivo, tu historia y tu hoja de datos.", "Pide tres publicaciones: por qué, qué, acción.", "Revisa cada dato con tu hoja de datos.", "Ajústalo a tu estilo.", "Haz que el tono sea esperanzador y práctico."],
          words: [["Llamada a la acción", "el paso sencillo que le pides a la gente."], ["Tono", "lo que transmite tu mensaje, por ejemplo esperanza o seriedad."]],
          slides: [
            { title: "Tres publicaciones", bullets: ["1. Por qué importa: tu historia", "2. Qué saber o hacer", "3. Pasa a la acción"] },
            { title: "Dale a la IA", bullets: ["Causa, objetivo, historia", "Solo tu hoja de datos"] },
            { title: "Luego corrige", bullets: ["Los datos coinciden con tu hoja", "Tu estilo", "Esperanzador, no alarmante"] }
          ],
          tryIt: "Usa la IA para hacer el borrador de tu plan de tres publicaciones a partir de tu hoja de datos. Corrígelo y vuelve a revisar cada dato.",
          youCanNow: "planear con IA una campaña enfocada de tres publicaciones y mantener los datos correctos."
        },
        {
          title: "Proponer una alianza a una marca u organización",
          minutes: 5,
          goal: "Escribir una propuesta corta a una marca u organización sin fines de lucro que vaya con tu causa.",
          text: [
            "Los aliados pueden sumar alcance, dinero o recursos. Busca a los que ya se preocupan por tu causa: una escuela de natación para la seguridad en el agua, una biblioteca o librería para la lectura, una cooperativa de crédito local para el manejo del dinero, una clínica de medicina deportiva para la prevención de lesiones. Las organizaciones sin fines de lucro pueden recibir bien una alianza como voluntario.",
            "Una propuesta muestra tu causa, tu historia, tu objetivo de aprendizaje, tu plan de tres publicaciones y tu público. Pide algo claro: compartir las publicaciones, darte materiales o patrocinar la campaña.",
            "Usa la IA para el borrador y luego hazlo personal. ¿Menor de 18 años? Involucra a tu padre, madre o tutor. Estudiantes atletas: revisen las reglas de NIL de su escuela y su estado antes de aceptar cualquier pago o producto."
          ],
          steps: ["Haz una lista de tres aliados que ya se preocupan por tu causa.", "Escribe lo que vas a pedir.", "Usa la IA para un borrador de propuesta de menos de 150 palabras.", "Hazlo personal.", "Revisa las reglas de NIL antes de aceptar pagos o productos."],
          words: [["Aliado", "una marca u organización sin fines de lucro que trabaja contigo en la campaña."], ["Organización sin fines de lucro", "una organización que trabaja por una causa en lugar de buscar ganancias."]],
          slides: [
            { title: "Buenos aliados", bullets: ["Ya se preocupan por tu causa", "Escuela de natación, biblioteca, cooperativa, clínica"] },
            { title: "Tu propuesta muestra", bullets: ["Causa, historia, objetivo de aprendizaje", "Plan de tres publicaciones y público", "Un pedido claro"] },
            { title: "Antes de decir que sí", bullets: ["Menor de 18: involucra a un padre", "Revisa las reglas de NIL de la escuela y el estado"] }
          ],
          sources: [{ name: "NCAA: Nombre, imagen y semejanza (en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Elige un aliado y escribe con ayuda de la IA una propuesta de menos de 150 palabras. Pide a un entrenador o a tu padre o madre que la lea.",
          youCanNow: "proponer una alianza para tu campaña a una marca u organización sin fines de lucro."
        },
        {
          title: "Aviso, honestidad y medir el impacto",
          minutes: 5,
          goal: "Avisar claramente del apoyo de una marca y medir si la gente aprendió.",
          text: [
            "Si una marca te paga o te da algo por la campaña, la FTC (la Comisión Federal de Comercio de EE. UU.) dice que lo avises claramente en cada publicación, cerca del inicio: \"Colaboración pagada con [marca]\" o \"Gracias a [marca] por apoyar esta campaña\". En los videos, dilo y muéstralo.",
            "Di solo lo que crees y lo que respalda tu hoja de datos. No dejes que un aliado agregue afirmaciones que no puedes respaldar, sobre todo de salud.",
            "Mide el aprendizaje, no solo los me gusta: cuenta las veces que se compartió y se guardó, los comentarios con preguntas, las personas que hicieron la acción (como inscribirse a una capacitación), o haz una encuesta de dos preguntas al final. Comparte los resultados con tu aliado."
          ],
          steps: ["Agrega un aviso claro en cada publicación patrocinada.", "Revisa cada afirmación con tu hoja de datos.", "Elige dos formas de medir el impacto.", "Haz una encuesta corta después de la publicación 3.", "Envía los resultados a tu aliado."],
          words: [["Aviso", "una frase clara que dice que una marca te pagó o te apoyó."], ["Impacto", "el cambio real que logró tu campaña, como gente que aprende o actúa."]],
          slides: [
            { title: "Avisa claramente", bullets: ["En cada publicación patrocinada, cerca del inicio", "\"Colaboración pagada con [marca]\"", "Video: dilo y muéstralo"] },
            { title: "Mantente honesto", bullets: ["Solo lo que respalda tu hoja de datos", "Nada de afirmaciones de salud sin pruebas"] },
            { title: "Mide el aprendizaje", bullets: ["Compartidos, guardados, preguntas", "Personas que hicieron la acción", "Una encuesta de dos preguntas"] }
          ],
          sources: [{ name: "FTC: Guía básica de avisos para influencers en redes sociales (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Tarea final: arma tu plan de campaña con el objetivo de aprendizaje, tres publicaciones, la hoja de datos, la llamada a la acción, la propuesta al aliado, el texto del aviso y la persona con quien revisaste las reglas de NIL.",
          youCanNow: "hacer una campaña educativa honesta con un aviso claro y medir su impacto."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planear y buscar aliados",
        questions: [
          { q: "¿De qué trata la publicación 1 de la campaña?", options: ["De comprar el producto", "De tus estadísticas", "De un sorteo", "De por qué importa: tu historia"], answer: 3, why: "Tu historia hace que a la gente le importe." },
          { q: "¿Qué aliado va con una campaña de lectura?", options: ["Una biblioteca o librería local", "Una app de apuestas", "Una bebida energética", "Un vendedor de autos"], answer: 0, why: "Ya se preocupan por la lectura." },
          { q: "Una marca apoya tu campaña con dinero. Cada publicación debe incluir:", options: ["Nada", "Un hashtag escondido", "Un aviso claro cerca del inicio", "Un nombre falso"], answer: 2, why: "La FTC exige un aviso claro." },
          { q: "Un aliado quiere que digas que su bebida previene las conmociones. Tú:", options: ["Lo dices", "Lo dices en voz baja", "Lo dices sin aviso", "Te niegas; es una afirmación de salud sin pruebas"], answer: 3, why: "No hagas afirmaciones que no puedes respaldar." },
          { q: "¿Qué mide mejor el aprendizaje?", options: ["Solo los me gusta", "Las personas que hicieron la acción y los resultados de la encuesta", "Tu número de seguidores", "El número de emojis"], answer: 1, why: "El impacto se trata de aprender y actuar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Campañas educativas de marcas",
    questions: [
      { q: "Una campaña educativa sobre todo:", options: ["Vende tenis", "Muestra mejores jugadas", "Enseña algo útil", "Muestra estadísticas"], answer: 2, why: "Enseñar es el objetivo principal." },
      { q: "¿Por qué las marcas usan atletas en las campañas?", options: ["Los jóvenes y las familias confían en los atletas", "Los atletas trabajan gratis", "Es obligatorio", "Los atletas son médicos"], answer: 0, why: "La confianza hace que el mensaje llegue." },
      { q: "¿Cuál es un ejemplo de tema de campaña?", options: ["Seguridad en el agua", "Chismes de rivales", "Consejos de apuestas", "Dietas falsas"], answer: 0, why: "Es útil y seguro de enseñar." },
      { q: "¿Cuántos objetivos de aprendizaje debe tener una campaña?", options: ["Diez", "Ninguno", "Uno", "Todos los posibles"], answer: 2, why: "Un solo objetivo la mantiene enfocada." },
      { q: "Las causas más fuertes salen de:", options: ["Lo que esté de moda", "Tu vida real", "Una lista al azar", "Un competidor"], answer: 1, why: "Las historias reales son auténticas." },
      { q: "Auténtico significa:", options: ["Caro", "Viral", "Largo", "Real y fiel a ti"], answer: 3, why: "La autenticidad genera confianza." },
      { q: "¿Cuál es una fuente oficial sobre conmociones cerebrales?", options: ["Una página de memes", "Un anuncio", "CDC HEADS UP", "Una sección de comentarios"], answer: 2, why: "Es de una agencia de salud del gobierno." },
      { q: "Una hoja de datos incluye:", options: ["Tu contraseña", "Solo opiniones", "Estadísticas de rivales", "Cada dato, su fuente y la fecha de revisión"], answer: 3, why: "Demuestra tus datos." },
      { q: "Para consejos personales, tu campaña debe:", options: ["Enviar a la gente con profesionales", "Diagnosticar a la gente", "Dar dosis", "Ignorarlo"], answer: 0, why: "Tú enseñas conciencia; los profesionales aconsejan." },
      { q: "La publicación 3 de la campaña es:", options: ["Una selfi cualquiera", "Pasa a la acción", "Una queja", "Un sorteo"], answer: 1, why: "La acción convierte el aprendizaje en cambio." },
      { q: "Cuando pidas publicaciones a la IA, dile que:", options: ["Invente estadísticas", "Agregue historias alarmantes", "Use solo datos de tu hoja de datos", "Copie a otros atletas"], answer: 2, why: "Así los datos se mantienen correctos." },
      { q: "El mejor tono para temas de seguridad es:", options: ["Esperanzador y práctico", "Alarmante", "Enojado", "Bromear sobre lesiones"], answer: 0, why: "La gente actúa con mensajes prácticos y esperanzadores." },
      { q: "Una cooperativa de crédito es un buen aliado para:", options: ["Conciencia sobre conmociones", "Natación", "Lectura", "Manejo del dinero"], answer: 3, why: "Ya se preocupa por la educación financiera." },
      { q: "Una propuesta debe incluir:", options: ["Solo un precio", "Tu causa, historia, objetivo, plan, público y un pedido claro", "Solo tus estadísticas", "Una exigencia"], answer: 1, why: "Los aliados necesitan ver el panorama completo." },
      { q: "Antes de aceptar productos de un aliado, un estudiante atleta debe:", options: ["Publicar de inmediato", "Revisar las reglas de NIL de la escuela y el estado", "Ocultarlo", "Preguntarle a un rival"], answer: 1, why: "Las reglas de NIL cambian según el lugar." },
      { q: "Si tienes menos de 18 años y haces una propuesta a un aliado:", options: ["Usa una edad falsa", "Ocúltalo", "No hagas la propuesta", "Involucra a tu padre, madre o tutor"], answer: 3, why: "Los adultos ayudan a proteger a los menores." },
      { q: "¿Qué aviso es claro?", options: ["\"Colaboración pagada con [marca]\" cerca del inicio", "\"#sp\" al final", "Nada", "Solo en tu biografía"], answer: 0, why: "Claro y difícil de pasar por alto." },
      { q: "En un video patrocinado, el aviso debe:", options: ["Ir solo en la descripción", "Ir en un comentario", "Decirse y mostrarse", "No ponerse"], answer: 2, why: "Los avisos de un video van dentro del video." },
      { q: "Impacto significa:", options: ["Tu número de seguidores", "Solo los me gusta", "Cuánto dura el video", "El cambio real que logró tu campaña"], answer: 3, why: "El impacto es aprendizaje y acción." },
      { q: "Después de la campaña, debes:", options: ["Borrar todo", "Compartir los resultados con tu aliado", "Esconder los números", "Pedir más pago sin resultados"], answer: 1, why: "Reportar resultados construye alianzas duraderas." }
    ]
  }
};
