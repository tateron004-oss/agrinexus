"use strict";

// Koach Learn course (Spanish translation of youth-ai-activism). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "youth-ai-activism-es",
  lang: "es",
  translationOf: "youth-ai-activism",
  category: "Youth",
  name: "IA para el activismo y el impacto social",
  skills: "Elegir un problema local, Investigar y verificar datos con IA, Planear una acción pequeña, Escribir un mensaje a quien toma las decisiones, Correr la voz de forma segura y respetuosa",
  outcome: "planear una acción pequeña y segura sobre un problema de tu escuela o tu comunidad que te importe, usando la IA para investigarlo, verificar los datos con fuentes confiables, escribir un mensaje respetuoso a quien toma las decisiones y hacer un plan sencillo para compartirlo.",
  about: [
    "Este curso es para adolescentes que quieren hacer una diferencia: un parque más limpio, un cruce peatonal más seguro cerca de la escuela, más botes de reciclaje, una colecta de alimentos o un club que reciba bien a los estudiantes nuevos. Las acciones pequeñas y locales son un gran lugar para empezar.",
    "Vas a elegir un problema, usar un asistente de IA como ChatGPT, Microsoft Copilot o Google Gemini para investigarlo y generar soluciones, verificar cada dato con fuentes confiables, planear una acción pequeña, escribir una carta o un correo respetuoso a alguien que pueda ayudar y compartir tu mensaje de forma segura.",
    "Revisa las reglas de tu escuela sobre la IA y las reglas de edad de cada herramienta, y habla con tu madre, padre, tutor o un maestro antes de registrarte en algo, contactar a funcionarios u organizar un evento. Cada lección termina con una tarea \"Pruébalo ahora\", una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Haz un plan de acción de una página para un problema de tu escuela o comunidad que te importe: el problema en una oración, dos datos que verificaste con fuentes confiables, una acción pequeña con fecha y ayudantes, y el adulto que te apoya. Usa la IA para ayudarte a escribir el borrador de una carta o un correo respetuoso para quien toma las decisiones (un director, el consejo escolar o un miembro del concejo municipal), revísalo y reescríbelo con tus propias palabras, y haz un plan sencillo para compartir tu mensaje de forma segura.",
  chapters: [
    {
      name: "Capítulo 1: De que te importe a tener un plan",
      lessons: [
        {
          title: "Elegir un problema que de verdad puedas cambiar",
          minutes: 4,
          goal: "Elegir un problema local y describirlo en una oración clara.",
          text: [
            "Impacto social significa mejorar las cosas para otras personas. Activismo significa trabajar por un cambio. No tienes que arreglar el mundo entero. Un problema pequeño y local que puedes ver, como bebederos rotos en la escuela o basura en la parada del autobús, es más fácil de cambiar y te enseña cómo pasa el cambio.",
            "Pregúntate: ¿A quién afecta? ¿Cómo se vería algo mejor? ¿Quién tiene el poder de arreglarlo, como un director, el asesor de un club, el consejo escolar o el concejo municipal?",
            "Un asistente de IA te puede ayudar a generar ideas: \"Tengo 15 años. ¿Qué problemas pequeños pueden ayudar a resolver los adolescentes en una preparatoria o en un vecindario?\" Luego elige uno que te importe y en el que puedas trabajar de forma segura."
          ],
          words: [["Impacto social", "mejorar las cosas para otras personas."], ["Activismo", "trabajar por un cambio en tu escuela, tu comunidad o el mundo."], ["Quien toma las decisiones", "una persona o un grupo con el poder de hacer un cambio."]],
          slides: [
            { title: "Empieza en pequeño y en lo local", bullets: ["Un problema que puedes ver", "Más fácil de cambiar", "Te enseña cómo pasa el cambio"] },
            { title: "Tres preguntas", bullets: ["¿A quién afecta?", "¿Cómo se vería algo mejor?", "¿Quién tiene el poder de arreglarlo?"] },
            { title: "Genera ideas con IA", bullets: ["Pide ideas en las que puedan trabajar adolescentes", "Elige una que te importe", "Elige una en la que puedas trabajar seguro"] }
          ],
          tryIt: "Escribe tu problema en una oración, como \"Nuestra escuela no tiene botes de reciclaje en la cafetería, así que las latas van a la basura.\" Agrega a quién afecta y quién lo podría arreglar.",
          youCanNow: "elegir un problema local y decir a quién afecta y quién lo puede cambiar."
        },
        {
          title: "Investigar con IA y verificar cada dato",
          minutes: 6,
          goal: "Usar la IA para empezar a investigar y luego confirmar los datos con fuentes confiables.",
          text: [
            "La IA es un buen punto de partida: \"Explica por qué las escuelas reciclan y qué suele impedírselo. Sugiere preguntas que debería hacerle a mi director.\" Pero la IA puede equivocarse o estar desactualizada, y a veces inventa números o fuentes. Esto se llama alucinación.",
            "Cada dato que pienses usar en un mensaje debe estar verificado. Las fuentes confiables incluyen el sitio web de tu escuela o distrito, el sitio web oficial de tu ciudad, los sitios del gobierno (muchos terminan en .gov) y personas reales como un maestro, un bibliotecario o la oficina encargada.",
            "Tu propia evidencia también cuenta. Cuenta los botes de basura que se desbordan, toma fotos del problema (no de personas sin permiso) o haz una encuesta corta a tus compañeros con el visto bueno de un maestro."
          ],
          steps: ["Pídele a la IA que explique el problema y sugiera preguntas.", "Anota los datos que quieras usar.", "Verifica cada dato en un sitio oficial o con una persona real.", "Junta tu propia evidencia: conteos, fotos de lugares, una encuesta corta.", "Descarta cualquier dato que no puedas confirmar."],
          words: [["Alucinación", "cuando la IA escribe algo que suena cierto pero es inventado."], ["Evidencia", "datos o pruebas que respaldan lo que dices."], ["Encuesta", "un grupo corto de preguntas que le haces a muchas personas."]],
          slides: [
            { title: "La IA es un punto de partida", bullets: ["Explica el problema", "Sugiere preguntas para hacer", "Puede equivocarse o inventar cosas"] },
            { title: "Verifica cada dato", bullets: ["Sitio web de la escuela o la ciudad", "Sitios del gobierno, a menudo .gov", "Maestros, bibliotecarios, la oficina encargada"] },
            { title: "Tu propia evidencia", bullets: ["Conteos y fotos de lugares", "Una encuesta corta, con el visto bueno de un maestro", "Nada de fotos de personas sin permiso"] }
          ],
          tryIt: "Pídele a un asistente de IA que explique tu problema y te dé tres datos. Verifica cada dato con una fuente confiable y márcalo como \"confirmado\" o \"no confirmado\". Luego junta una prueba propia.",
          youCanNow: "investigar un problema con IA y quedarte solo con los datos que confirmaste con fuentes confiables."
        },
        {
          title: "Planear una acción pequeña",
          minutes: 5,
          goal: "Convertir tu problema en una acción pequeña con fecha, ayudantes y un adulto que te apoye.",
          text: [
            "Las buenas acciones son específicas: un día de limpieza, una propuesta de botes de reciclaje al director, una colecta de útiles, un discurso en una reunión del consejo estudiantil. Elige una que puedas hacer en las próximas semanas.",
            "Pregúntale a la IA: \"Ayúdame a planear una limpieza de parque de una hora para 10 estudiantes. Haz una lista de materiales, reglas de seguridad, a quién pedirle permiso y un calendario sencillo.\" Luego revisa el plan con un adulto.",
            "La seguridad primero: pide permiso a tu escuela o al dueño del parque, pide que participe tu madre, padre, tutor o un maestro, nunca vayas solo y sigue las reglas sobre guantes, calles o basura."
          ],
          steps: ["Elige una acción específica.", "Pídele a la IA una lista: materiales, pasos, calendario, permisos.", "Elige una fecha y ayudantes.", "Pídele a tu madre, padre, tutor, un maestro o un asesor que te apoye.", "Consigue los permisos que necesites antes de empezar."],
          words: [["Plan de acción", "una lista de lo que vas a hacer, cuándo y quién ayuda."], ["Adulto que te apoya", "un adulto que te ayuda y revisa tu plan."]],
          slides: [
            { title: "Una acción específica", bullets: ["Una limpieza, una propuesta, una colecta o un discurso", "Que se pueda hacer en las próximas semanas"] },
            { title: "Planea con IA", bullets: ["Materiales y pasos", "Calendario", "A quién pedirle permiso"] },
            { title: "La seguridad primero", bullets: ["Pide permiso", "Un adulto participa", "Nunca solo; sigue las reglas"] }
          ],
          tryIt: "Usa un asistente de IA para planear una acción pequeña para tu problema. Anota la fecha, dos ayudantes, el permiso que necesitas y el adulto que te va a apoyar.",
          youCanNow: "convertir un problema en un plan de acción seguro y específico con el apoyo de un adulto."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: De que te importe a tener un plan",
        questions: [
          { q: "¿Qué problema es el mejor para empezar?", options: ["Acabar con el hambre del mundo para el viernes", "Conseguir botes de reciclaje en la cafetería de tu escuela", "Cambiar todas las leyes", "Arreglar todo internet"], answer: 1, why: "Los problemas pequeños y locales son más fáciles de cambiar y te enseñan cómo." },
          { q: "¿Qué es quien toma las decisiones?", options: ["Una persona o un grupo con el poder de hacer el cambio", "Cualquier usuario de redes sociales", "Un asistente de IA", "Un compañero que está de acuerdo contigo"], answer: 0, why: "Quienes toman las decisiones, como un director o un concejo, pueden hacer el cambio." },
          { q: "La IA te da una estadística para tu carta. ¿Qué haces?", options: ["Usarla de inmediato", "Hacerla más grande", "Verificarla con una fuente confiable antes de usarla", "Preguntarle a la IA si está segura y luego usarla"], answer: 2, why: "La IA puede inventar números; confírmalos con fuentes confiables." },
          { q: "¿Cuál es evidencia propia?", options: ["Un rumor", "Una suposición", "Una historia inventada", "Un conteo de los botes de basura que se desbordan"], answer: 3, why: "Los conteos y las fotos de lugares son evidencia que juntas tú." },
          { q: "Antes de una limpieza de parque, ¿qué debes hacer?", options: ["Ir solo de noche", "Pedir permiso e involucrar a un adulto", "Saltarte las reglas de seguridad", "Publicar tu dirección en internet"], answer: 1, why: "El permiso y el apoyo de un adulto mantienen segura la acción." }
        ]
      }
    },
    {
      name: "Capítulo 2: Alzar la voz y correr la voz",
      lessons: [
        {
          title: "Escribir un mensaje respetuoso a quien toma las decisiones",
          minutes: 5,
          goal: "Usar la IA para escribir el borrador de una carta o un correo claro y respetuoso, y luego hacerlo tuyo.",
          text: [
            "Un mensaje fuerte es corto y amable: quién eres (tu nombre, tu grado, tu escuela o vecindario), el problema en una oración, uno o dos datos verificados, una petición específica y un agradecimiento.",
            "Pregúntale a la IA: \"Ayúdame a escribir un correo corto y respetuoso a mi director para pedir botes de reciclaje en la cafetería. Estoy en décimo grado. Estos son mis datos: [tus datos verificados]. Que tenga menos de 150 palabras.\" Luego reescríbelo con tus propias palabras y quita todo lo que no verificaste.",
            "Para saber a quién contactar, mira el sitio web de tu escuela o distrito, o el sitio web oficial de tu ciudad. USA.gov (el portal oficial del gobierno de EE. UU.) tiene una página con enlaces a los funcionarios electos federales, estatales y locales. Pídele a tu madre, padre, tutor o a un maestro que lea tu mensaje antes de enviarlo."
          ],
          steps: ["Di quién eres sin datos privados más allá de tu nombre y tu grado.", "Plantea el problema en una oración.", "Agrega uno o dos datos verificados.", "Haz una petición específica y da las gracias.", "Reescribe el borrador de la IA con tus propias palabras y pide a un adulto que lo lea antes de enviarlo."],
          words: [["Petición específica", "lo que exactamente quieres que haga la persona."], ["Funcionario electo", "una persona elegida por votación para un cargo, como un miembro del concejo municipal."]],
          slides: [
            { title: "Un mensaje fuerte", bullets: ["Quién eres", "El problema en una oración", "Uno o dos datos verificados", "Una petición específica y un agradecimiento"] },
            { title: "La IA escribe el borrador, tú decides", bullets: ["Dale solo datos verificados", "Reescríbelo con tus propias palabras", "Menos de 150 palabras"] },
            { title: "A quién contactar", bullets: ["Sitio web de la escuela o el distrito", "Sitio web oficial de la ciudad", "Página de funcionarios electos de USA.gov"] }
          ],
          sources: [{ name: "USA.gov: encuentra a tus funcionarios electos", url: "https://www.usa.gov/elected-officials" }],
          tryIt: "Usa un asistente de IA para escribir el borrador de un mensaje para quien toma las decisiones sobre tu problema, usando solo tus datos confirmados. Reescríbelo con tus propias palabras y pídele a un adulto que lo lea. No lo envíes hasta que lo haya leído.",
          youCanNow: "escribir un mensaje corto, respetuoso y con datos verificados que le pida a quien toma las decisiones un cambio específico."
        },
        {
          title: "Correr la voz de forma segura",
          minutes: 5,
          goal: "Hacer un cartel o una publicación sencilla sobre tu acción y compartirla de forma segura.",
          text: [
            "La gente se une cuando el mensaje es claro: qué, cuándo, dónde y por qué importa. La IA te puede ayudar a escribir un lema o una publicación corta, y herramientas gratuitas como Canva te pueden ayudar a hacer un cartel. Revisa cada fecha, hora y lugar.",
            "Mantente seguro en línea: publica desde una cuenta del club escolar o una aprobada por tu familia si puedes, mantén privados tu nombre completo, tu número de teléfono y la dirección de tu casa, y no compartas fotos de otras personas sin permiso.",
            "Algunas personas no estarán de acuerdo. Está bien. Responde con amabilidad o no respondas, y nunca publiques ataques personales. Si alguien te amenaza o te acosa, no respondas; guárdalo, bloquéalo, repórtalo y avísale a un adulto de confianza."
          ],
          steps: ["Escribe qué, cuándo, dónde y por qué en pocas palabras.", "Pídele a la IA tres ideas de lema y elige o reescribe una.", "Haz un cartel o una publicación y revisa cada detalle.", "Compártelo desde una cuenta del club o aprobada por tu familia.", "Deja fuera los datos privados y avísale a un adulto de cualquier amenaza."],
          words: [["Lema", "una frase corta y pegajosa sobre tu causa."], ["Acoso", "mensajes groseros o amenazantes repetidos."]],
          slides: [
            { title: "Un mensaje claro", bullets: ["Qué, cuándo, dónde, por qué", "Un lema corto", "Revisa cada detalle"] },
            { title: "Comparte de forma segura", bullets: ["Cuenta del club o aprobada por tu familia", "Nada de número de teléfono ni dirección de tu casa", "Nada de fotos de otros sin permiso"] },
            { title: "Cuando la gente no está de acuerdo", bullets: ["Sé amable o no respondas", "Nada de ataques personales", "Amenazas: guarda, bloquea, reporta, avisa a un adulto"] }
          ],
          tryIt: "Pídele a un asistente de IA tres ideas de lema para tu acción. Elige una, haz un cartel o una publicación sencilla con qué, cuándo, dónde y por qué, y pide a un adulto que lo revise antes de compartirlo.",
          youCanNow: "hacer un mensaje claro sobre tu causa y compartirlo de forma segura y respetuosa."
        },
        {
          title: "IA responsable en el activismo y tu plan de acción",
          minutes: 6,
          goal: "Evitar el contenido engañoso y terminar un plan de acción de una página.",
          text: [
            "La IA hace fácil crear imágenes falsas, citas falsas y noticias falsas. Usarlas, aunque sea por una buena causa, rompe la confianza y puede difundir mentiras. Nunca hagas fotos o citas falsas de personas reales, y etiqueta cualquier imagen generada con IA que uses.",
            "Antes de compartir cualquier cosa, pregúntate: ¿Es cierto? ¿Lo verifiqué? ¿Es justo con las personas involucradas? ¿Me parecería bien que la persona de la que escribo lo leyera?",
            "Ahora junta todo en una página: el problema, dos datos verificados, una acción con fecha y ayudantes, el adulto que te apoya, tu mensaje para quien toma las decisiones y cómo lo vas a compartir. Luego reflexiona: ¿qué funcionó y qué harías después?"
          ],
          steps: ["Revisa que cada imagen y cita sea real o esté claramente etiquetada como IA.", "Pregúntate: ¿es cierto, está verificado y es justo?", "Escribe tu plan de acción de una página.", "Agrega tu mensaje y tu plan para compartirlo.", "Después de tu acción, escribe qué funcionó y qué sigue."],
          words: [["Desinformación", "información falsa, compartida por error o a propósito."], ["Etiqueta", "una nota que dice que algo se hizo con IA."]],
          slides: [
            { title: "Nada de falsificaciones", bullets: ["Nada de fotos ni citas falsas de personas reales", "Etiqueta las imágenes generadas con IA", "Lo falso rompe la confianza, aun por buenas causas"] },
            { title: "Antes de compartir", bullets: ["¿Es cierto?", "¿Lo verifiqué?", "¿Es justo?"] },
            { title: "Tu plan de una página", bullets: ["Problema y dos datos verificados", "Una acción, fecha, ayudantes, adulto", "Mensaje y plan para compartir"] }
          ],
          tryIt: "Tarea final: escribe tu plan de acción de una página con el problema, dos datos verificados, una acción con fecha y ayudantes, el adulto que te apoya, tu mensaje reescrito para quien toma las decisiones y tu plan para compartirlo de forma segura.",
          youCanNow: "usar la IA de forma responsable para planear, alzar la voz y compartir una acción pequeña que haga una diferencia real."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Alzar la voz y correr la voz",
        questions: [
          { q: "¿Qué va en un mensaje para quien toma las decisiones?", options: ["Una petición específica y un agradecimiento", "Insultos personales", "Datos que no verificaste", "La dirección de tu casa y tu número de teléfono"], answer: 0, why: "Una petición clara y la amabilidad hacen un mensaje fuerte." },
          { q: "¿Dónde puedes encontrar enlaces a tus funcionarios electos?", options: ["Una publicación cualquiera en redes sociales", "Una suposición de la IA", "La página de funcionarios electos de USA.gov", "Una cadena de correos"], answer: 2, why: "USA.gov tiene enlaces a funcionarios federales, estatales y locales." },
          { q: "Alguien publica una amenaza en la publicación de tu campaña. ¿Qué haces?", options: ["Responder con otra amenaza", "Compartir su dirección", "Ignorarla y no decirle a nadie", "Guardarla, bloquear, reportar y avisar a un adulto de confianza"], answer: 3, why: "Las amenazas se guardan, se bloquean, se reportan y se le cuentan a un adulto." },
          { q: "Un amigo sugiere una foto falsa del alcalde hecha con IA para llamar la atención. Tú:", options: ["Dices que no; lo falso difunde mentiras y rompe la confianza", "La haces pero no la etiquetas", "La haces por una buena causa", "La publicas y la borras después"], answer: 0, why: "Las imágenes falsas de personas reales engañan, aun por buenas causas." },
          { q: "¿Qué debes preguntarte antes de compartir algo sobre tu causa?", options: ["¿Se hará viral?", "¿Es cierto, está verificado y es justo?", "¿Es la publicación más larga?", "¿Lo escribió todo la IA?"], answer: 1, why: "La verdad, la verificación y la justicia mantienen confiable tu campaña." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para el activismo y el impacto social",
    questions: [
      { q: "Impacto social significa:", options: ["Mejorar las cosas para otras personas", "Conseguir likes", "Ganar discusiones", "Usar mucho la IA"], answer: 0, why: "El impacto social es mejorar la vida de los demás." },
      { q: "¿Por qué empezar con un problema pequeño y local?", options: ["No importa", "Es más fácil de cambiar y te enseña cómo pasa el cambio", "Los problemas grandes son ilegales", "Los adultos lo exigen"], answer: 1, why: "Los pequeños logros construyen habilidades y confianza." },
      { q: "¿Cuál es un problema claro en una oración?", options: ["\"Las cosas están mal\"", "\"Todo debería cambiar\"", "\"Nuestra cafetería no tiene botes de reciclaje, así que las latas van a la basura\"", "\"La gente es molesta\""], answer: 2, why: "Dice cuál es el problema y por qué importa." },
      { q: "¿Quién podría arreglar un problema con los bebederos de la escuela?", options: ["Una empresa de videojuegos", "Un asistente de IA", "Un seguidor cualquiera", "El director o el distrito escolar"], answer: 3, why: "Los líderes de la escuela pueden hacer reparaciones en la escuela." },
      { q: "Una alucinación de la IA significa:", options: ["La IA escribió algo que suena cierto pero es inventado", "La IA está descompuesta", "La IA es muy creativa", "La IA es lenta"], answer: 0, why: "La IA puede inventar datos y fuentes." },
      { q: "¿Cuál es una fuente confiable para una regla de la ciudad?", options: ["Un meme", "El sitio web oficial de la ciudad", "Un comentario anónimo", "Solo una respuesta de la IA"], answer: 1, why: "Los sitios oficiales son el lugar para confirmar reglas." },
      { q: "No puedes confirmar un dato que te dio la IA. Deberías:", options: ["Usarlo de todos modos", "Hacer que suene más seguro", "Dejarlo fuera", "Darle crédito a la IA"], answer: 2, why: "Usa solo datos que hayas confirmado." },
      { q: "Antes de hacer una encuesta corta a tus compañeros, deberías:", options: ["Pedirles la dirección de su casa", "Hacerla en secreto", "Pedirles contraseñas", "Conseguir el visto bueno de un maestro"], answer: 3, why: "Las encuestas en la escuela deben ser aprobadas por un maestro." },
      { q: "¿Qué acción es específica?", options: ["Una limpieza de parque de una hora el sábado 14 con 10 estudiantes", "\"Hacer algo algún día\"", "\"Arreglar el medio ambiente\"", "\"Ser más amables\""], answer: 0, why: "Tiene qué, cuándo y quién." },
      { q: "¿Qué debes pedirle a la IA al planear una acción?", options: ["Que la haga por ti", "Materiales, pasos, un calendario y a quién pedir permiso", "Información privada de personas", "Que haga evidencia falsa"], answer: 1, why: "La IA puede hacer una lista útil que luego revisas con un adulto." },
      { q: "¿Cuál es una regla de seguridad para una acción comunitaria?", options: ["Ir solo", "No pedir permiso", "Involucrar a tu madre, padre, tutor o un maestro", "Trabajar cerca del tráfico sin un plan"], answer: 2, why: "El apoyo de un adulto y el permiso mantienen seguros a todos." },
      { q: "¿Qué va en tu mensaje a un director?", options: ["Tu número de teléfono para desconocidos", "Insultos", "Rumores sin verificar", "Tu nombre, tu grado y una petición específica"], answer: 3, why: "Di quién eres de forma sencilla y pide con claridad." },
      { q: "Después de que la IA escribe el borrador de tu carta, deberías:", options: ["Reescribirla con tus propias palabras y quitar los datos sin verificar", "Enviarla de inmediato", "Hacerla más larga", "Agregar una cita falsa"], answer: 0, why: "Tu mensaje debe ser tuyo y correcto." },
      { q: "¿Quién debe leer tu mensaje antes de que lo envíes?", options: ["Nadie", "Tu madre, padre, tutor o un maestro", "Un desconocido en internet", "Solo la IA"], answer: 1, why: "Un adulto puede detectar errores y mantenerte seguro." },
      { q: "Un cartel fuerte le dice a la gente:", options: ["La dirección de tu casa", "Solo un lema", "Qué, cuándo, dónde y por qué", "Un ensayo largo"], answer: 2, why: "Esos detalles ayudan a que la gente se una." },
      { q: "¿Qué cuenta es mejor para compartir tu campaña?", options: ["La cuenta de un desconocido", "Una cuenta con tu número de teléfono en la biografía", "Una cuenta falsa", "Una cuenta del club escolar o aprobada por tu familia"], answer: 3, why: "Las cuentas aprobadas te mantienen más seguro." },
      { q: "Alguien no está de acuerdo con tu publicación, con amabilidad. Tú:", options: ["Respondes con amabilidad o no respondes", "Lo insultas", "Compartes sus datos personales", "Haces una publicación falsa sobre esa persona"], answer: 0, why: "El respeto mantiene fuerte tu causa." },
      { q: "La desinformación es:", options: ["Un tipo de cartel", "Información falsa, compartida por error o a propósito", "Un dato verificado", "Una encuesta"], answer: 1, why: "La desinformación es información falsa." },
      { q: "Usas en tu cartel una imagen generada con IA de un parque limpio. Deberías:", options: ["Decir que es una foto real", "Esconderlo en letra pequeña", "Etiquetarla como generada con IA", "Quitar la fecha"], answer: 2, why: "Las etiquetas te mantienen honesto con tu público." },
      { q: "Después de tu acción, un buen paso final es:", options: ["Borrar todo", "No volver a hacerlo nunca", "Culpar a otros", "Escribir qué funcionó y qué hacer después"], answer: 3, why: "Reflexionar ayuda a que tu siguiente acción salga mejor." }
    ]
  }
};
