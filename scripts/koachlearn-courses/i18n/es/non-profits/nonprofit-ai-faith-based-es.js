"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-ai-faith-based.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-faith-based-es",
  lang: "es",
  translationOf: "nonprofit-ai-faith-based",
  category: "Non Profits",
  name: "IA para organizaciones de fe",
  skills: "Fijar reglas básicas para la IA en el ministerio, Escribir borradores de anuncios y boletines, Planear horarios de voluntarios y eventos, Proteger la privacidad de los miembros, Revisar los borradores de la IA en cuanto a fe y tono",
  outcome: "usar un asistente de IA gratis para escribir el borrador de un anuncio semanal y un horario de voluntarios para tu congregación o programa de fe, mantener privada la información de los miembros y revisar cada borrador para que vaya con tu tradición de fe y tu voz.",
  about: [
    "Este curso es para pastores, imanes, rabinos, líderes de ministerio, personal de la oficina de la iglesia y voluntarios de iglesias, mezquitas, templos, sinagogas y organizaciones de fe sin fines de lucro.",
    "Vas a aprender dónde la IA puede ahorrar tiempo en el trabajo de oficina del ministerio (anuncios, boletines, horarios, cartas informativas, borradores de solicitudes de subvenciones) y dónde no se debe usar: el acompañamiento pastoral, las conversaciones confidenciales y las decisiones sobre personas.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe una nota de una página de \"Cómo usamos la IA\" para los líderes de tu congregación y luego usa un asistente de IA para escribir el borrador del anuncio de esta semana y un horario de voluntarios con espacios en blanco en lugar de nombres. Revisa los dos borradores en cuanto a exactitud, fe y tono, y marca lo que cambiaste.",
  chapters: [
    {
      name: "Capítulo 1: Usar la IA con sabiduría en el ministerio",
      lessons: [
        {
          title: "Dónde ayuda la IA a una congregación y dónde no",
          minutes: 4,
          goal: "Separar las tareas del ministerio en \"la IA puede hacer el borrador\" y \"solo personas\".",
          text: [
            "Un asistente de IA, como ChatGPT, Microsoft Copilot o Google Gemini, es un programa de computadora con el que conversas con palabras de todos los días. Escribe borradores, listas y planes en segundos.",
            "En una congregación sirve para el trabajo de oficina: anuncios semanales, textos del boletín, cartas informativas, planes de eventos, mensajes para inscribir voluntarios, notas de agradecimiento a donantes y primeros borradores de solicitudes de subvenciones.",
            "No debe reemplazar a las personas en el acompañamiento pastoral, las peticiones de oración, la consejería, la confesión, los conflictos entre miembros ni las decisiones sobre quién sirve o quién recibe ayuda. Eso necesita a una persona de confianza, no a un programa."
          ],
          words: [["Asistente de IA", "un programa de computadora con el que conversas escribiendo o hablando; te responde por escrito."], ["Acompañamiento pastoral", "el cuidado personal que da un líder de fe a los miembros: visitas, consejo, consuelo y oración."]],
          slides: [
            { title: "La IA puede hacer borradores de", bullets: ["Anuncios y boletines", "Cartas informativas y planes de eventos", "Mensajes para voluntarios y notas de agradecimiento"] },
            { title: "Solo personas", bullets: ["Acompañamiento pastoral y consejería", "Peticiones de oración y conversaciones confidenciales", "Decisiones sobre miembros y quién recibe ayuda"] },
            { title: "La regla práctica", bullets: ["La IA ayuda con palabras y planes", "Las personas se encargan de los corazones y las decisiones"] }
          ],
          tryIt: "Haz una lista de diez tareas que hace la oficina de tu congregación en un mes. Marca cada una como \"la IA puede hacer el borrador\" o \"solo personas\".",
          youCanNow: "nombrar las tareas del ministerio en las que la IA puede ayudar y las que deben quedarse con personas."
        },
        {
          title: "Escribir reglas básicas sencillas para la IA",
          minutes: 5,
          goal: "Escribir una nota corta de \"Cómo usamos la IA\" en la que tus líderes puedan estar de acuerdo.",
          text: [
            "Antes de que el personal y los voluntarios usen la IA, pónganse de acuerdo en unas reglas sencillas. Así todos están protegidos y se evitan sorpresas.",
            "Una buena nota responde cuatro preguntas: ¿Para qué podemos usar la IA? ¿Qué nunca debe entrar en la IA (nombres, peticiones de oración, registros de ofrendas, datos de salud o de familia)? ¿Quién revisa los borradores de la IA antes de compartirlos? ¿Decimos a la gente cuando la IA ayudó a escribir algo?",
            "Que sea de una página y con palabras sencillas. Compártela con tu junta, tus ancianos o tu consejo ministerial y revísenla una vez al año."
          ],
          steps: ["Haz una lista de las tareas en las que la IA puede ayudar.", "Haz una lista de lo que nunca se debe escribir en la IA.", "Nombra quién revisa cada borrador de la IA antes de compartirlo.", "Decidan si dirán que la IA ayudó, y cómo.", "Logra que tus líderes estén de acuerdo y fijen una fecha de revisión anual."],
          words: [["Reglas básicas", "una lista corta de reglas acordadas que todos siguen."], ["Revisar", "leer con cuidado un borrador y corregirlo antes de compartirlo."]],
          slides: [
            { title: "Por qué tener reglas básicas", bullets: ["Todos saben qué está permitido", "Se protege la confianza de los miembros"] },
            { title: "Cuatro preguntas que responder", bullets: ["¿Para qué podemos usar la IA?", "¿Qué nunca entra en la IA?", "¿Quién revisa los borradores?", "¿Decimos que la IA ayudó?"] },
            { title: "Hazlo sencillo", bullets: ["Una página, palabras sencillas", "Aprobada por tus líderes", "Revisada una vez al año"] }
          ],
          tryIt: "Escribe el borrador de la nota de una página de \"Cómo usamos la IA\" de tu congregación respondiendo las cuatro preguntas. Puedes pedirle a un asistente de IA que haga tu borrador más claro, pero escribe tú las reglas.",
          youCanNow: "escribir un conjunto corto de reglas básicas de IA para una congregación o un programa de fe."
        },
        {
          title: "Mantener privada la información de los miembros",
          minutes: 5,
          goal: "Convertir un pedido que tiene datos privados en una instrucción segura con espacios en blanco.",
          text: [
            "Los miembros te confían cosas privadas: peticiones de oración, enfermedades, problemas familiares, montos de ofrendas, direcciones y teléfonos. Muchas herramientas de IA pueden guardar lo que escribes, así que trata cada instrucción como una postal que cualquiera podría leer.",
            "Nunca escribas en un asistente de IA nombres, peticiones de oración, registros de ofrendas, datos de salud, información de niños ni datos de contacto. Usa espacios en blanco como [nombre del miembro] o [monto] y llénalos tú después, en tu propio documento.",
            "Si tu organización paga una versión empresarial o educativa de una herramienta de IA, pregunta a tu administrador cómo está configurada la privacidad. Aun así, deja fuera los asuntos pastorales confidenciales."
          ],
          steps: ["Escribe en qué quieres que te ayude la IA.", "Léelo buscando nombres, montos, datos de salud, de familia y de contacto.", "Cambia cada uno por un espacio en blanco como [nombre del miembro].", "Envía la instrucción y luego llena tú los datos reales fuera de la herramienta de IA."],
          words: [["Espacio en blanco", "un sustituto como [nombre del miembro] que luego cambias por el dato real."], ["Confidencial", "información privada compartida con confianza que no se debe pasar a otros."]],
          slides: [
            { title: "Trata la instrucción como una postal", bullets: ["Supón que otra persona la podría leer", "Cuida la confianza de tus miembros"] },
            { title: "Nunca escribas en la IA", bullets: ["Nombres y datos de contacto", "Peticiones de oración, salud o problemas familiares", "Registros y montos de ofrendas", "Información de niños"] },
            { title: "Usa espacios en blanco", bullets: ["[nombre del miembro], [monto], [fecha]", "Después llena tú los datos reales"] }
          ],
          tryIt: "Toma este pedido: \"Escribe una tarjeta de pronta recuperación para la hermana Mary Jones, a quien operaron del corazón en el Hospital del Condado.\" Reescríbelo con espacios en blanco para que ningún dato privado entre en la IA y luego envíalo.",
          youCanNow: "quitar los datos privados de los miembros de una instrucción y usar espacios en blanco en su lugar."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Usar la IA con sabiduría en el ministerio",
        questions: [
          { q: "¿Qué tarea le queda bien a un asistente de IA en la oficina de una iglesia?", options: ["Escribir el borrador del anuncio semanal", "Aconsejar a un miembro que está de luto", "Decidir quién recibe el fondo de ayuda", "Responder una petición de oración confidencial"], answer: 0, why: "Los anuncios son trabajo de oficina; lo demás necesita a una persona de confianza." },
          { q: "¿Qué debe incluir una nota de \"Cómo usamos la IA\"?", options: ["El teléfono de cada miembro", "Una lista de precios de empresas de IA", "Para qué se puede usar la IA y qué nunca entra en ella", "Las contraseñas del pastor"], answer: 2, why: "Las reglas básicas dicen qué está permitido y qué debe quedarse fuera." },
          { q: "Un voluntario quiere pegar la lista de oración en la IA para \"ordenarla\". ¿Qué le dices?", options: ["Adelante, ahorra tiempo", "Que pegue solo la mitad", "Que la pegue pero borre el chat después", "No. Las peticiones de oración son confidenciales y se quedan fuera de la IA"], answer: 3, why: "Las peticiones de oración son privadas y no se deben escribir en herramientas de IA." },
          { q: "¿Qué es un espacio en blanco?", options: ["Un asiento apartado en el templo", "Un sustituto como [nombre del miembro] que llenas después", "Un tipo de aplicación de IA", "Una contraseña"], answer: 1, why: "Los espacios en blanco te dejan recibir ayuda sin compartir datos privados." },
          { q: "¿Quién debe revisar un borrador de la IA antes de compartirlo con la congregación?", options: ["Nadie, la IA siempre tiene razón", "La misma IA", "Una persona que tus líderes nombraron", "Cualquier visitante"], answer: 2, why: "Tus reglas básicas nombran quién revisa los borradores para encontrar errores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Poner la IA a trabajar para tu congregación",
      lessons: [
        {
          title: "Escribir borradores de anuncios y boletines",
          minutes: 5,
          goal: "Usar una instrucción clara para escribir el borrador de un anuncio semanal con la voz de tu congregación.",
          text: [
            "Una instrucción clara da un mejor borrador. Dile a la IA lo que necesitas, un poco sobre tu congregación (sin datos privados) y cómo quieres que esté escrito.",
            "Por ejemplo: \"Escribe un anuncio cálido y corto para nuestro boletín del domingo. Eventos: despensa de alimentos el sábado de 9 am a mediodía, grupo de jóvenes el miércoles a las 6 pm, el coro necesita dos voces más. Tono amable y acogedor, menos de 120 palabras.\"",
            "Luego pide cambios: \"Hazlo más corto.\" \"Agrega una línea para dar la bienvenida a los visitantes.\" \"Usa palabras más sencillas.\" Revisa tú cada fecha, hora y lugar antes de que salga."
          ],
          steps: ["Haz una lista de los eventos con fechas, horas y lugares.", "Di el tono y el largo que quieres.", "Pide un borrador a la IA.", "Pide uno o dos cambios.", "Compara cada fecha, hora y lugar con tu calendario."],
          words: [["Instrucción (prompt)", "lo que escribes o dices a un asistente de IA para pedirle algo."], ["Tono", "cómo suena un texto: cálido, formal, alegre, tranquilo."]],
          slides: [
            { title: "Una instrucción clara tiene", bullets: ["Lo que necesitas", "Los eventos, fechas y lugares", "Tono y largo"] },
            { title: "Luego mejóralo", bullets: ["\"Hazlo más corto.\"", "\"Agrega una bienvenida para los visitantes.\"", "\"Usa palabras más sencillas.\""] },
            { title: "Antes de que salga", bullets: ["Revisa cada fecha y hora", "Revisa cada lugar y contacto", "Asegúrate de que suene a ustedes"] }
          ],
          tryIt: "Escribe una instrucción para los anuncios reales de esta semana de tu congregación o programa. Consigue un borrador, pide un cambio y luego compara cada fecha y hora con tu calendario.",
          youCanNow: "escribir con IA el borrador de un anuncio para la congregación y revisarlo antes de compartirlo."
        },
        {
          title: "Planear horarios de voluntarios y eventos",
          minutes: 5,
          goal: "Usar la IA para hacer un horario de voluntarios con funciones y espacios en blanco, no nombres.",
          text: [
            "Los ujieres, los encargados de recibir, quienes ayudan en la guardería, los equipos de la despensa de alimentos y los choferes necesitan horarios. La IA puede convertir una lista de funciones y fechas en una tabla clara en segundos.",
            "Dale las funciones, las fechas y cuántas personas necesita cada función, y usa [Voluntario 1], [Voluntario 2] en lugar de nombres reales. Luego copia la tabla en tu propio documento u hoja de cálculo y agrega ahí los nombres.",
            "La IA también puede hacer listas de control para eventos, por ejemplo para un avivamiento, una cena para recaudar fondos o una feria de salud comunitaria: qué hacer seis semanas, dos semanas y un día antes."
          ],
          steps: ["Haz una lista de las funciones y cuántas personas necesita cada una.", "Haz una lista de las fechas.", "Pide a la IA una tabla con espacios [Voluntario 1], [Voluntario 2].", "Cópiala en tu propio documento y agrega ahí los nombres reales.", "Pide una lista de control si estás planeando un evento."],
          words: [["Tabla", "información ordenada en filas y columnas."], ["Lista de control", "una lista de tareas que vas marcando cuando se terminan."]],
          slides: [
            { title: "La IA puede hacer", bullets: ["Horarios de voluntarios en tablas", "Listas de control de eventos por semana", "Mensajes de recordatorio para voluntarios"] },
            { title: "Deja fuera los nombres", bullets: ["Usa [Voluntario 1], [Voluntario 2]", "Agrega los nombres reales en tu propio archivo"] },
            { title: "Lista de control del evento", bullets: ["Seis semanas antes", "Dos semanas antes", "El día anterior y el mismo día"] }
          ],
          tryIt: "Pide a un asistente de IA un horario de cuatro semanas para tres funciones (por ejemplo, recibir, ujier, guardería) con dos personas cada una, usando espacios en blanco. Cópialo en tu propio documento.",
          youCanNow: "hacer con IA un horario de voluntarios y una lista de control de eventos manteniendo privados los nombres."
        },
        {
          title: "Revisar los borradores en cuanto a fe, exactitud y tono",
          minutes: 5,
          goal: "Revisar un borrador de la IA y corregir lo que no vaya con tu tradición, los hechos o tu voz.",
          text: [
            "La IA puede equivocarse. Puede citar mal un texto sagrado, usar palabras de otra tradición, equivocarse con un día santo o sonar rígida. También puede inventar datos que suenan ciertos.",
            "Lee cada borrador buscando tres cosas: fe (¿va con nuestras creencias y palabras?), exactitud (¿las citas, fechas y datos son correctos?) y tono (¿suena a nosotros y trata a todos con respeto?). Revisa las escrituras y las enseñanzas en tus propios textos sagrados, no en la IA.",
            "Si tu organización es una organización benéfica exenta de impuestos en EE. UU., los borradores de la IA no deben apoyar ni oponerse a candidatos políticos. El IRS (la agencia federal de impuestos) explica las reglas para iglesias y organizaciones religiosas en la Publicación 1828; pregunta a tus líderes o a un asesor si tienes dudas."
          ],
          steps: ["Lee buscando la fe: ¿va con nuestras creencias y palabras?", "Revisa cada cita, texto sagrado y fecha en tus propias fuentes.", "Léelo en voz alta para revisar el tono.", "Corrige lo que esté mal y anota lo que cambiaste.", "Pide la aprobación de la persona encargada de revisar."],
          words: [["Alucinación", "cuando una IA escribe algo que suena cierto pero es inventado."], ["Exento de impuestos", "una organización que el IRS reconoce como que no paga impuesto federal sobre la renta, con reglas que debe seguir."]],
          sources: [{ name: "Publicación 1828 del IRS: guía de impuestos para iglesias y organizaciones religiosas", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" }],
          slides: [
            { title: "La IA se puede equivocar en temas de fe", bullets: ["Citas sagradas mal hechas", "Palabras de otra tradición", "Días santos equivocados o datos inventados"] },
            { title: "Tres revisiones", bullets: ["Fe: va con nuestras creencias", "Exactitud: citas, fechas, datos", "Tono: suena a nosotros, con respeto"] },
            { title: "Respeta las reglas", bullets: ["No apoyar a candidatos políticos", "Ver la Publicación 1828 del IRS", "Pregunta a tus líderes si tienes dudas"] }
          ],
          tryIt: "Tarea final: escribe el borrador de tu nota de \"Cómo usamos la IA\" y luego usa la IA para escribir el borrador del anuncio de esta semana y un horario de voluntarios con espacios en blanco. Revisa los dos en cuanto a fe, exactitud y tono, y marca lo que cambiaste.",
          youCanNow: "revisar los borradores de la IA en cuanto a fe, exactitud y tono antes de que lleguen a tu congregación."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Poner la IA a trabajar para tu congregación",
        questions: [
          { q: "¿Qué instrucción dará el mejor borrador para el boletín?", options: ["\"Escribe un anuncio cálido de 100 palabras: despensa sáb 9-12, jóvenes miér 6 pm, el coro necesita voces.\"", "\"boletín\"", "\"cosas de la iglesia\"", "\"escribe todo\""], answer: 0, why: "Da los eventos, el tono y el largo." },
          { q: "¿Cómo deben aparecer los nombres en un horario de voluntarios hecho con IA?", options: ["Como espacios en blanco tipo [Voluntario 1]", "Nombres completos y teléfonos", "Solo nombres de pila y direcciones", "Nombres con correos electrónicos"], answer: 0, why: "Los espacios en blanco dejan los datos de los voluntarios fuera de la herramienta de IA." },
          { q: "La IA citó un texto sagrado en tu anuncio. ¿Qué haces?", options: ["Confías en ella", "Le preguntas a la IA si está segura", "Revisas la cita en tu propio texto sagrado", "Borras todo el anuncio"], answer: 2, why: "La IA puede citar mal; revisa tus propias fuentes." },
          { q: "¿Cuál es una de las tres revisiones de este curso?", options: ["Rapidez", "Tono", "Precio", "Tamaño de letra"], answer: 1, why: "Fe, exactitud y tono son las tres revisiones." },
          { q: "¿Dónde puede una iglesia conocer las reglas del IRS para organizaciones religiosas?", options: ["En una publicación de redes sociales", "Solo en el asistente de IA", "En un blog cualquiera", "En la Publicación 1828 del IRS"], answer: 3, why: "La Publicación 1828 es la guía de impuestos del IRS para iglesias y organizaciones religiosas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para organizaciones de fe",
    questions: [
      { q: "¿Qué tarea debe quedarse con personas y no con la IA?", options: ["Escribir el borrador de una lista de control de un evento", "Aconsejar a un miembro en crisis", "Escribir el borrador de una carta informativa", "Hacer una tabla de voluntarios"], answer: 1, why: "El acompañamiento pastoral necesita a una persona de confianza." },
      { q: "En el ministerio, la IA es más útil para:", options: ["Escritura y planeación de oficina", "Escuchar confesiones", "Decidir quién recibe ayuda", "Guardar secretos de oración"], answer: 0, why: "La IA escribe borradores de palabras y planes; las personas se encargan del cuidado y las decisiones." },
      { q: "Una buena regla práctica es:", options: ["La IA decide y las personas obedecen", "La IA se encarga de todo", "Nunca leer los borradores de la IA", "La IA ayuda con palabras y planes; las personas se encargan de los corazones y las decisiones"], answer: 3, why: "Así el cuidado y el criterio se quedan con las personas." },
      { q: "¿Qué tan larga debe ser una nota de \"Cómo usamos la IA\"?", options: ["Cincuenta páginas", "Una palabra", "Más o menos una página con palabras sencillas", "Lo que quiera la IA"], answer: 2, why: "Si es corta y sencilla, la gente la lee y la sigue." },
      { q: "¿Quién debe aprobar las reglas básicas de IA?", options: ["Solo la empresa de IA", "Un visitante", "Tu junta, tus ancianos o tu consejo ministerial", "Nadie"], answer: 2, why: "Que los líderes estén de acuerdo les da autoridad a las reglas." },
      { q: "¿Cada cuánto debes revisar tus reglas básicas de IA?", options: ["Más o menos una vez al año", "Nunca", "Cada hora", "Solo si la IA lo pide"], answer: 0, why: "Las herramientas cambian, así que una revisión anual mantiene al día las reglas." },
      { q: "¿Qué NUNCA se debe escribir en un asistente de IA?", options: ["\"Hazlo más corto\"", "Una lista de fechas de eventos", "\"Usa un tono cálido\"", "La petición de oración de un miembro con su nombre"], answer: 3, why: "Las peticiones de oración y los nombres son confidenciales." },
      { q: "¿Por qué tratar una instrucción como una postal?", options: ["Las postales son cortas", "Otra persona podría leer lo que escribes", "La IA solo lee postales", "Es más rápido"], answer: 1, why: "Las herramientas de IA pueden guardar lo que escribes." },
      { q: "Necesitas una nota de agradecimiento por la ofrenda de un donante. ¿Cómo haces una instrucción segura?", options: ["Incluyes su nombre y el monto", "Usas [nombre del donante] y [monto] y los llenas tú", "Pegas el registro de ofrendas", "Incluyes su dirección"], answer: 1, why: "Los espacios en blanco mantienen privados los registros de ofrendas." },
      { q: "Tu iglesia paga un plan empresarial de IA. ¿Debes escribir ahí asuntos pastorales confidenciales?", options: ["Sí, es de pago", "Solo los domingos", "Solo si son cortos", "No, deja fuera los asuntos pastorales confidenciales"], answer: 3, why: "El cuidado confidencial se queda fuera de la IA, incluso en planes de pago." },
      { q: "Una instrucción clara para un anuncio incluye:", options: ["Eventos, fechas, tono y largo", "Solo la palabra \"anuncio\"", "Los teléfonos de los miembros", "La contraseña del pastor"], answer: 0, why: "Esos datos dejan que la IA escriba un borrador útil." },
      { q: "Después de recibir un borrador, ¿qué pedido de seguimiento es útil?", options: ["\"Aquí está nuestra lista de miembros.\"", "\"Decide nuestro presupuesto.\"", "\"Agrega una línea para dar la bienvenida a los visitantes.\"", "\"Mándalo a todos ya.\""], answer: 2, why: "Pide una mejora clara." },
      { q: "Antes de que salga un anuncio debes:", options: ["Agregar más texto de la IA", "Quitar todas las fechas", "No leerlo", "Revisar cada fecha, hora y lugar"], answer: 3, why: "La IA puede equivocarse en los datos." },
      { q: "¿Dónde agregas los nombres reales de los voluntarios?", options: ["En la instrucción a la IA", "En tu propio documento después de copiar la tabla", "En una publicación pública", "En ningún lado"], answer: 1, why: "Los nombres se quedan en tus propios archivos, no en la herramienta de IA." },
      { q: "Una lista de control de un evento normalmente ordena las tareas:", options: ["Por los ingresos de los miembros", "Sin orden", "Por el tiempo antes del evento, como seis semanas y dos semanas", "Solo después del evento"], answer: 2, why: "Trabajar hacia atrás desde la fecha mantiene en orden la planeación." },
      { q: "La IA usa en tu borrador palabras de otra tradición de fe. Debes:", options: ["Corregirlo para que vaya con tu tradición", "Dejarlo", "Pedir a los miembros que voten", "Publicarlo de todos modos"], answer: 0, why: "La revisión de fe asegura que vaya con tus creencias y palabras." },
      { q: "¿Qué es una alucinación en la IA?", options: ["Algo que la IA escribe que suena cierto pero es inventado", "Una visión durante la oración", "Una conexión de internet lenta", "Un tipo de aplicación"], answer: 0, why: "La IA puede inventar datos que suenan reales." },
      { q: "Leer un borrador en voz alta te ayuda a revisar:", options: ["La velocidad del internet", "El precio de la IA", "El tono", "El clima"], answer: 2, why: "Escucharlo muestra si suena a ti." },
      { q: "Un borrador de la IA para una iglesia exenta de impuestos apoya a un candidato político. Debes:", options: ["Publicarlo", "Quitarlo y revisar la Publicación 1828 del IRS o preguntar a tus líderes", "Agregar a un segundo candidato", "No hacerle caso"], answer: 1, why: "Las organizaciones benéficas exentas de impuestos tienen reglas del IRS sobre campañas políticas." },
      { q: "¿Quién da la aprobación final antes de compartir un borrador de la IA?", options: ["La IA", "Quien esté más cerca", "Nadie", "La persona encargada de revisar que nombraron tus líderes"], answer: 3, why: "Una persona encargada de revisar encuentra errores y cuida la confianza." }
    ]
  }
};
