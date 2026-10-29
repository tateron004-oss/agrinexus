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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Pastores, imanes, rabinos, líderes de ministerios, personal de oficina y voluntarios de iglesias, mezquitas, templos, sinagogas y organizaciones de fe sin fines de lucro.",
    startingPoint: "Escriben a mano cada semana los anuncios, los boletines y los horarios de voluntarios. Muchos han oído hablar de la IA pero no la han usado, y a algunos les preocupa la privacidad y que la IA se equivoque sobre su fe.",
    gap: "El trabajo de escribir en la oficina toma horas que los líderes preferirían dar a las personas. Necesitan usar la IA para borradores y planes, manteniendo en privado las peticiones de oración y la información de los miembros, y asegurándose de que cada borrador va con su tradición, sus datos y su voz.",
    constraints: [
      "Privacidad: los nombres, las peticiones de oración, los registros de ofrendas, la salud, los datos de niños y los datos de contacto nunca entran en la IA",
      "El cuidado pastoral, la consejería y las decisiones sobre personas se quedan con personas de confianza",
      "Las escrituras y las enseñanzas se revisan en los propios textos sagrados de la congregación",
      "Se aplican las reglas para organizaciones exentas de impuestos sobre la actividad política (Publicación 1828 del IRS)",
      "Palabras sencillas; muchos voluntarios son nuevos en la tecnología"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista de tareas del ministerio", action: "clasificarlas en \"la IA puede hacer el borrador\" y \"solo personas\"", standard: "dejando con personas el cuidado pastoral, las peticiones de oración y las decisiones sobre personas" },
    { id: "O2", condition: "Para los líderes de tu congregación", action: "escribir una nota de una página de \"Cómo usamos la IA\" que responda las cuatro preguntas de las reglas básicas", standard: "en palabras sencillas, lista para que tu junta, tus ancianos o tu consejo la aprueben" },
    { id: "O3", condition: "Con una petición que tiene información de miembros", action: "reescribirla como una instrucción segura con espacios en blanco", standard: "sin nombres, peticiones de oración, registros de ofrendas, datos de salud ni de contacto" },
    { id: "O4", condition: "Con los eventos de esta semana", action: "escribir una instrucción clara y preparar un anuncio semanal con la voz de tu congregación", standard: "con cada fecha, hora y lugar revisados por ti" },
    { id: "O5", condition: "Con los puestos, las fechas y cuántas personas necesita cada uno", action: "crear un horario de voluntarios con la IA usando espacios en blanco en lugar de nombres", standard: "con los nombres reales agregados solo en tu propio documento" },
    { id: "O6", condition: "Con un borrador de la IA", action: "revisarlo en cuanto a fe, exactitud y tono y corregir lo que no quede", standard: "con las escrituras revisadas en tus propios textos sagrados antes de que lo apruebe un revisor con nombre" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Usar la IA con sabiduría en el ministerio",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "nombrar las tareas del ministerio en las que la IA puede ayudar y las que deben quedarse con personas.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una buena tarea de oficina para la IA en una congregación?", options: ["Preparar un mensaje para inscribir voluntarios", "Escuchar una confesión", "Decidir quién recibe ayuda", "Resolver un conflicto entre miembros"], answer: 0, why: "La IA ayuda con la escritura de la oficina; el cuidado pastoral y las decisiones necesitan a una persona de confianza." },
            { objective: "O1", q: "Un miembro pregunta si la IA puede aconsejarlo en su duelo. ¿Qué le dices?", options: ["Sí, la IA siempre está disponible", "No; eso necesita a una persona de confianza, no un programa", "Sí, si cita las escrituras", "Solo de noche"], answer: 1, why: "La consejería y el cuidado pastoral necesitan a una persona de confianza." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "escribir un conjunto corto de reglas básicas de IA para una congregación o un programa de fe.",
          quickCheck: [
            { objective: "O2", q: "¿Qué pregunta responde una nota de \"Cómo usamos la IA\"?", options: ["Cuánto gana el pastor", "Qué miembros dan más", "Quién revisa los borradores de la IA antes de compartirlos", "Qué empresa de IA es la mejor"], answer: 2, why: "La nota responde para qué es la IA, qué nunca entra, quién revisa y si le avisan a la gente." },
            { objective: "O2", q: "Tu equipo del ministerio escribió reglas básicas para la IA. ¿Qué haces después?", options: ["Las mantienes en secreto", "Las haces de diez páginas", "Dejas que cada voluntario las cambie", "Las compartes con tu junta, tus ancianos o tu consejo y las revisas cada año"], answer: 3, why: "Los líderes aprueban la nota y se revisa una vez al año." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "quitar los datos privados de los miembros de una instrucción y usar espacios en blanco en su lugar.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué tratar una instrucción como una postal?", options: ["Muchas herramientas de IA pueden guardar lo que escribes", "Las postales son más cortas", "La IA imprime tu instrucción", "Hace que la respuesta sea más amable"], answer: 0, why: "Muchas herramientas de IA pueden guardar lo que escribes, así que supón que alguien podría leerlo." },
            { objective: "O3", q: "Quieres que la IA te ayude a escribir una tarjeta de pronta recuperación para un miembro que está en el hospital. ¿Qué escribes?", options: ["El nombre del miembro y su enfermedad", "\"Escribe una tarjeta corta de pronta recuperación para [nombre del miembro] de parte de nuestra congregación.\"", "El número de su cuarto en el hospital y su teléfono", "La petición de oración de su familia"], answer: 1, why: "Usa espacios en blanco y llena tú los datos reales después." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Usar la IA con sabiduría en el ministerio",
        questions: [
          { objective: "O1", q: "¿Qué tarea le queda bien a un asistente de IA en la oficina de una iglesia?", options: ["Escribir el borrador del anuncio semanal", "Aconsejar a un miembro que está de luto", "Decidir quién recibe el fondo de ayuda", "Responder una petición de oración confidencial"], answer: 0, why: "Los anuncios son trabajo de oficina; lo demás necesita a una persona de confianza." },
          { objective: "O2", q: "¿Qué debe incluir una nota de \"Cómo usamos la IA\"?", options: ["El teléfono de cada miembro", "Una lista de precios de empresas de IA", "Para qué se puede usar la IA y qué nunca entra en ella", "Las contraseñas del pastor"], answer: 2, why: "Las reglas básicas dicen qué está permitido y qué debe quedarse fuera." },
          { objective: "O3", q: "Un voluntario quiere pegar la lista de oración en la IA para \"ordenarla\". ¿Qué le dices?", options: ["Adelante, ahorra tiempo", "Que pegue solo la mitad", "Que la pegue pero borre el chat después", "No. Las peticiones de oración son confidenciales y se quedan fuera de la IA"], answer: 3, why: "Las peticiones de oración son privadas y no se deben escribir en herramientas de IA." },
          { objective: "O3", q: "¿Qué es un espacio en blanco?", options: ["Un asiento apartado en el templo", "Un sustituto como [nombre del miembro] que llenas después", "Un tipo de aplicación de IA", "Una contraseña"], answer: 1, why: "Los espacios en blanco te dejan recibir ayuda sin compartir datos privados." },
          { objective: "O2", q: "¿Quién debe revisar un borrador de la IA antes de compartirlo con la congregación?", options: ["Nadie, la IA siempre tiene razón", "La misma IA", "Una persona que tus líderes nombraron", "Cualquier visitante"], answer: 2, why: "Tus reglas básicas nombran quién revisa los borradores para encontrar errores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Poner la IA a trabajar para tu congregación",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "escribir con IA el borrador de un anuncio para la congregación y revisarlo antes de compartirlo.",
          quickCheck: [
            { objective: "O4", q: "¿Qué tres cosas le dice a la IA una instrucción clara para un anuncio?", options: ["Los nombres, teléfonos y direcciones de los miembros", "Solo la palabra \"anuncio\"", "Qué necesitas, un poco sobre tu congregación y cómo quieres que esté escrito", "Tu contraseña y tu usuario"], answer: 2, why: "Dile a la IA qué necesitas, algo sobre tu congregación (sin datos privados) y cómo debe estar escrito." },
            { objective: "O4", q: "El borrador está bien, pero es muy largo para el boletín. ¿Qué pides?", options: ["\"Agrega más eventos.\"", "\"Usa palabras más difíciles.\"", "\"Escríbelo en otro idioma.\"", "\"Hazlo más corto.\""], answer: 3, why: "Pide cambios como \"Hazlo más corto\" hasta que quede." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "hacer con IA un horario de voluntarios y una lista de control de eventos manteniendo privados los nombres.",
          quickCheck: [
            { objective: "O5", q: "¿Qué le das a la IA para hacer un horario de voluntarios?", options: ["Los puestos, las fechas y cuántas personas necesita cada puesto", "El número de teléfono de cada voluntario", "Los registros de ofrendas de los miembros", "Solo la dirección de la iglesia"], answer: 0, why: "Dale los puestos, las fechas y cuántas personas se necesitan, con espacios en blanco en lugar de nombres." },
            { objective: "O5", q: "Estás planeando una cena para recaudar fondos. ¿Qué puede hacer la IA por ti?", options: ["La lista final de invitados con nombres", "Una lista de lo que hay que hacer seis semanas, dos semanas y un día antes", "Los montos de los donativos", "Las decisiones sobre quién sirve"], answer: 1, why: "La IA puede hacer listas de verificación para eventos según el tiempo que falta." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "revisar los borradores de la IA en cuanto a fe, exactitud y tono antes de que lleguen a tu congregación.",
          quickCheck: [
            { objective: "O6", q: "¿Cuáles son las tres revisiones de este curso?", options: ["Largo, letra y color", "Precio, fecha y lugar", "Fe, exactitud y tono", "Ortografía, gramática y rapidez"], answer: 2, why: "Lee cada borrador revisando la fe, la exactitud y el tono." },
            { objective: "O6", q: "El borrador de la IA pone mal la fecha de un día santo. ¿Qué haces?", options: ["Lo dejas; la IA sabe las fechas", "Le preguntas a la IA si está segura", "Quitas el día santo del calendario", "Lo revisas con el calendario de tu propia tradición y lo corriges"], answer: 3, why: "La IA puede equivocarse con un día santo, así que revísalo y corrígelo tú." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Poner la IA a trabajar para tu congregación",
        questions: [
          { objective: "O4", q: "¿Qué instrucción dará el mejor borrador para el boletín?", options: ["\"Escribe un anuncio cálido de 100 palabras: despensa sáb 9-12, jóvenes miér 6 pm, el coro necesita voces.\"", "\"boletín\"", "\"cosas de la iglesia\"", "\"escribe todo\""], answer: 0, why: "Da los eventos, el tono y el largo." },
          { objective: "O5", q: "¿Cómo deben aparecer los nombres en un horario de voluntarios hecho con IA?", options: ["Como espacios en blanco tipo [Voluntario 1]", "Nombres completos y teléfonos", "Solo nombres de pila y direcciones", "Nombres con correos electrónicos"], answer: 0, why: "Los espacios en blanco dejan los datos de los voluntarios fuera de la herramienta de IA." },
          { objective: "O6", q: "La IA citó un texto sagrado en tu anuncio. ¿Qué haces?", options: ["Confías en ella", "Le preguntas a la IA si está segura", "Revisas la cita en tu propio texto sagrado", "Borras todo el anuncio"], answer: 2, why: "La IA puede citar mal; revisa tus propias fuentes." },
          { objective: "O6", q: "¿Cuál es una de las tres revisiones de este curso?", options: ["Rapidez", "Tono", "Precio", "Tamaño de letra"], answer: 1, why: "Fe, exactitud y tono son las tres revisiones." },
          { objective: "O6", q: "¿Dónde puede una iglesia conocer las reglas del IRS para organizaciones religiosas?", options: ["En una publicación de redes sociales", "Solo en el asistente de IA", "En un blog cualquiera", "En la Publicación 1828 del IRS"], answer: 3, why: "La Publicación 1828 es la guía de impuestos del IRS para iglesias y organizaciones religiosas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para organizaciones de fe",
    questions: [
      { objective: "O1", q: "¿Qué tarea debe quedarse con personas y no con la IA?", options: ["Escribir el borrador de una lista de control de un evento", "Aconsejar a un miembro en crisis", "Escribir el borrador de una carta informativa", "Hacer una tabla de voluntarios"], answer: 1, why: "El acompañamiento pastoral necesita a una persona de confianza." },
      { objective: "O1", q: "En el ministerio, la IA es más útil para:", options: ["Escritura y planeación de oficina", "Escuchar confesiones", "Decidir quién recibe ayuda", "Guardar secretos de oración"], answer: 0, why: "La IA escribe borradores de palabras y planes; las personas se encargan del cuidado y las decisiones." },
      { objective: "O1", q: "Una buena regla práctica es:", options: ["La IA decide y las personas obedecen", "La IA se encarga de todo", "Nunca leer los borradores de la IA", "La IA ayuda con palabras y planes; las personas se encargan de los corazones y las decisiones"], answer: 3, why: "Así el cuidado y el criterio se quedan con las personas." },
      { objective: "O2", q: "¿Qué tan larga debe ser una nota de \"Cómo usamos la IA\"?", options: ["Cincuenta páginas", "Una palabra", "Más o menos una página con palabras sencillas", "Lo que quiera la IA"], answer: 2, why: "Si es corta y sencilla, la gente la lee y la sigue." },
      { objective: "O2", q: "¿Quién debe aprobar las reglas básicas de IA?", options: ["Solo la empresa de IA", "Un visitante", "Tu junta, tus ancianos o tu consejo ministerial", "Nadie"], answer: 2, why: "Que los líderes estén de acuerdo les da autoridad a las reglas." },
      { objective: "O2", q: "¿Cada cuánto debes revisar tus reglas básicas de IA?", options: ["Más o menos una vez al año", "Nunca", "Cada hora", "Solo si la IA lo pide"], answer: 0, why: "Las herramientas cambian, así que una revisión anual mantiene al día las reglas." },
      { objective: "O3", q: "¿Qué NUNCA se debe escribir en un asistente de IA?", options: ["\"Hazlo más corto\"", "Una lista de fechas de eventos", "\"Usa un tono cálido\"", "La petición de oración de un miembro con su nombre"], answer: 3, why: "Las peticiones de oración y los nombres son confidenciales." },
      { objective: "O3", q: "¿Por qué tratar una instrucción como una postal?", options: ["Las postales son cortas", "Otra persona podría leer lo que escribes", "La IA solo lee postales", "Es más rápido"], answer: 1, why: "Las herramientas de IA pueden guardar lo que escribes." },
      { objective: "O3", q: "Necesitas una nota de agradecimiento por la ofrenda de un donante. ¿Cómo haces una instrucción segura?", options: ["Incluyes su nombre y el monto", "Usas [nombre del donante] y [monto] y los llenas tú", "Pegas el registro de ofrendas", "Incluyes su dirección"], answer: 1, why: "Los espacios en blanco mantienen privados los registros de ofrendas." },
      { objective: "O3", q: "Tu iglesia paga un plan empresarial de IA. ¿Debes escribir ahí asuntos pastorales confidenciales?", options: ["Sí, es de pago", "Solo los domingos", "Solo si son cortos", "No, deja fuera los asuntos pastorales confidenciales"], answer: 3, why: "El cuidado confidencial se queda fuera de la IA, incluso en planes de pago." },
      { objective: "O4", q: "Una instrucción clara para un anuncio incluye:", options: ["Eventos, fechas, tono y largo", "Solo la palabra \"anuncio\"", "Los teléfonos de los miembros", "La contraseña del pastor"], answer: 0, why: "Esos datos dejan que la IA escriba un borrador útil." },
      { objective: "O4", q: "Después de recibir un borrador, ¿qué pedido de seguimiento es útil?", options: ["\"Aquí está nuestra lista de miembros.\"", "\"Decide nuestro presupuesto.\"", "\"Agrega una línea para dar la bienvenida a los visitantes.\"", "\"Mándalo a todos ya.\""], answer: 2, why: "Pide una mejora clara." },
      { objective: "O4", q: "Antes de que salga un anuncio debes:", options: ["Agregar más texto de la IA", "Quitar todas las fechas", "No leerlo", "Revisar cada fecha, hora y lugar"], answer: 3, why: "La IA puede equivocarse en los datos." },
      { objective: "O5", q: "¿Dónde agregas los nombres reales de los voluntarios?", options: ["En la instrucción a la IA", "En tu propio documento después de copiar la tabla", "En una publicación pública", "En ningún lado"], answer: 1, why: "Los nombres se quedan en tus propios archivos, no en la herramienta de IA." },
      { objective: "O5", q: "Una lista de control de un evento normalmente ordena las tareas:", options: ["Por los ingresos de los miembros", "Sin orden", "Por el tiempo antes del evento, como seis semanas y dos semanas", "Solo después del evento"], answer: 2, why: "Trabajar hacia atrás desde la fecha mantiene en orden la planeación." },
      { objective: "O6", q: "La IA usa en tu borrador palabras de otra tradición de fe. Debes:", options: ["Corregirlo para que vaya con tu tradición", "Dejarlo", "Pedir a los miembros que voten", "Publicarlo de todos modos"], answer: 0, why: "La revisión de fe asegura que vaya con tus creencias y palabras." },
      { objective: "O6", q: "¿Qué es una alucinación en la IA?", options: ["Algo que la IA escribe que suena cierto pero es inventado", "Una visión durante la oración", "Una conexión de internet lenta", "Un tipo de aplicación"], answer: 0, why: "La IA puede inventar datos que suenan reales." },
      { objective: "O6", q: "Leer un borrador en voz alta te ayuda a revisar:", options: ["La velocidad del internet", "El precio de la IA", "El tono", "El clima"], answer: 2, why: "Escucharlo muestra si suena a ti." },
      { objective: "O6", q: "Un borrador de la IA para una iglesia exenta de impuestos apoya a un candidato político. Debes:", options: ["Publicarlo", "Quitarlo y revisar la Publicación 1828 del IRS o preguntar a tus líderes", "Agregar a un segundo candidato", "No hacerle caso"], answer: 1, why: "Las organizaciones benéficas exentas de impuestos tienen reglas del IRS sobre campañas políticas." },
      { objective: "O6", q: "¿Quién da la aprobación final antes de compartir un borrador de la IA?", options: ["La IA", "Quien esté más cerca", "Nadie", "La persona encargada de revisar que nombraron tus líderes"], answer: 3, why: "Una persona encargada de revisar encuentra errores y cuida la confianza." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      6,
      10,
      13,
      15
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Nota de \"Cómo usamos la IA\"",
        objective: "O2",
        notYet: "A la nota le falta qué nunca debe entrar en la IA, o quién revisa.",
        meets: "Una página en palabras sencillas que responde las cuatro preguntas.",
        exceeds: "Nombra a los líderes que la van a aprobar y una fecha de revisión anual."
      },
      {
        name: "Anuncio claro",
        objective: "O4",
        notYet: "Una fecha, hora o lugar está mal o falta.",
        meets: "El anuncio de esta semana preparado con una instrucción clara, con cada dato revisado.",
        exceeds: "Es cálido y acogedor, y suena a la congregación."
      },
      {
        name: "Horario de voluntarios privado",
        objective: "O5",
        notYet: "Entraron en la IA nombres reales o datos de contacto.",
        meets: "Horario con puestos, fechas y espacios en blanco; los nombres se agregan en tu propio documento.",
        exceeds: "También incluye una lista de verificación del evento según el tiempo que falta."
      },
      {
        name: "Revisión de fe, exactitud y tono",
        objective: "O6",
        notYet: "Queda una cita, una fecha o una palabra equivocada de otra tradición.",
        meets: "Los dos borradores revisados en cuanto a fe, exactitud y tono, con los cambios marcados.",
        exceeds: "Las escrituras se revisaron en tu propio texto sagrado, con la referencia anotada."
      },
      {
        name: "Privacidad de los miembros",
        objective: "O3",
        notYet: "Se escribió en la IA una petición de oración, un registro de ofrendas o un dato de un miembro.",
        meets: "En cada instrucción se usaron solo espacios en blanco.",
        exceeds: "Puede mostrar la instrucción segura junto a la petición original."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Congregaciones cuyos líderes adoptan una nota de \"Cómo usamos la IA\" en 60 días (encuesta de seguimiento)",
      "Horas de oficina ahorradas cada semana en anuncios y horarios, según informe el personal",
      "Estudiantes que empiezan otro curso de Koach Learn para organizaciones sin fines de lucro en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratis: ChatGPT, Microsoft Copilot o Google Gemini",
      "Los datos de los eventos de esta semana y una lista de puestos de voluntarios, sin nombres",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Haz la sesión con un pastor, imán, rabino o líder de ministerio presente, para que se puedan acordar juntos las reglas básicas.",
      "Nunca uses peticiones de oración, registros de ofrendas ni datos reales de miembros en la práctica; usa espacios en blanco.",
      "Lleva tu propio texto sagrado para que los estudiantes revisen cualquier escritura que cite la IA.",
      "Recuerda a las congregaciones exentas de impuestos las reglas sobre actividad política de la Publicación 1828 del IRS.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
