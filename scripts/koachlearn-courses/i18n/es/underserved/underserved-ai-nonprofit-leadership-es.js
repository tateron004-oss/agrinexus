"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-ai-nonprofit-leadership.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-nonprofit-leadership-es",
  lang: "es",
  translationOf: "underserved-ai-nonprofit-leadership",
  category: "Undeserved Community",
  name: "IA para dirigir organizaciones sin fines de lucro",
  skills: "Escribir una misión y una meta claras, Planear un programa con IA, Organizar voluntarios con seguridad, Encontrar y resumir subvenciones, Mantener informados a quienes apoyan, Poner reglas sencillas de IA para tu grupo",
  outcome: "usar un asistente de IA gratuito para escribir un plan de programa de una página para tu grupo de la comunidad (meta, calendario, papeles de los voluntarios y un resumen corto para una subvención) y poner reglas sencillas sobre cómo tu grupo usa la IA con seguridad.",
  about: [
    "Este curso es para personas que dirigen o quieren dirigir trabajo comunitario: un banco de alimentos, una asociación de inquilinos, un ministerio de la iglesia, un programa juvenil, un comité de vecinos o una pequeña organización sin fines de lucro. Muchas veces lo haces con poco dinero, poco personal y mucho corazón.",
    "Vas a usar un asistente de IA gratuito para afinar tu misión, planear un programa, organizar voluntarios, encontrar oportunidades de subvenciones y mantener informados a quienes te apoyan, mientras proteges a las personas que atiendes. La IA ahorra tiempo al escribir y planear; tú pones el criterio, las relaciones y el conocimiento de la comunidad.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" que va armando tu plan real. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Para preguntas legales, de impuestos o sobre el estatus de organización sin fines de lucro, revisa fuentes oficiales como irs.gov y la oficina del procurador general o de la secretaría de estado de tu estado."
  ],
  finalTask: "Escribe con ayuda de un asistente de IA gratuito un plan de programa de una página para un proyecto de la comunidad, real o de práctica: una misión de una frase, una meta medible, un calendario sencillo, tres papeles de voluntarios (con pasos de seguridad si hay menores), un resumen de cinco frases para una subvención y cinco reglas sencillas sobre cómo tu grupo va a usar la IA. Quita cualquier información privada antes de compartirlo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que dirigen o quieren dirigir trabajo comunitario en zonas desatendidas: líderes de bancos de alimentos, asociaciones de inquilinos, ministerios de la iglesia, programas juveniles y clubes de vecinos, y personal o miembros de la junta directiva de pequeñas organizaciones sin fines de lucro.",
    startingPoint: "Manejan programas con poco dinero y poco personal, y escriben volantes, correos e informes a mano. La mayoría ha usado poco o nada un asistente de IA, y pocos tienen por escrito una misión, una meta medible, los papeles de los voluntarios o reglas de IA.",
    gap: "Los grupos pequeños pierden horas en papeleo y se pierden subvenciones porque les falta tiempo y planes claros. La IA puede hacer el borrador de mucho de este trabajo, pero los líderes deben proteger a las personas que atienden, revisar cada dato y dejar las decisiones en manos de personas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de sexto o séptimo grado)",
      "Dispositivos: un teléfono inteligente o una computadora de la biblioteca o de la oficina",
      "Costo: solo herramientas gratuitas o donadas",
      "Privacidad: nada de nombres, direcciones, teléfonos ni datos de salud o de inmigración de las personas atendidas en la IA",
      "La seguridad con menores de edad y adultos vulnerables sigue la política de la organización y las reglas del estado"
    ],
    prerequisites: "Ninguno. Quien es nuevo con los asistentes de IA puede tomar primero \"Introducción a la IA y el empoderamiento digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con las tareas que hace tu grupo cada mes", action: "identificar en cuáles la IA puede ayudar con el borrador y cuáles necesitan a personas", standard: "nombrando al menos tres tareas para la IA y el trabajo humano para el que libera tiempo" },
    { id: "O2", condition: "Con lo que hace tu grupo", action: "escribir una misión de una frase y una meta medible con ayuda de la IA", standard: "editadas con tu equipo para que digan quién, qué y por qué, y que la meta se pueda contar para una fecha" },
    { id: "O3", condition: "Con la meta de un programa o un evento", action: "crear un calendario y una lista de tareas con la IA", standard: "agregando lo que la IA olvidó y poniendo un nombre y una fecha junto a cada tarea" },
    { id: "O4", condition: "Con los trabajos de voluntarios de tu plan", action: "escribir descripciones cortas de los papeles de los voluntarios y los pasos de seguridad que necesitan", standard: "siguiendo la política de tu organización cuando hay menores de edad o adultos vulnerables, y sin nombres reales en la IA" },
    { id: "O5", condition: "Con un proyecto que necesita dinero", action: "encontrar una oportunidad de subvención y hacer con la IA el borrador de un resumen de cinco frases", standard: "con cada dato igual a tus registros y siguiendo las reglas del financiador" },
    { id: "O6", condition: "Cuando compartes resultados y usan la IA como grupo", action: "escribir un informe para quienes apoyan y cinco reglas sencillas de IA para tu grupo", standard: "usando historias solo con permiso por escrito y dejando las decisiones sobre las personas en manos de personas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Dirigir y planear con IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lo que la IA puede hacer por un grupo de la comunidad",
          minutes: 4,
          goal: "Hacer una lista de tres tareas de tu grupo que llevan mucho tiempo y con las que la IA podría ayudar.",
          text: [
            "Los líderes de la comunidad pasan horas escribiendo volantes, correos, notas de reuniones, listas de inscripción e informes. Un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini puede hacer un borrador de todo eso en minutos.",
            "La IA es buena para primeros borradores, resúmenes, listas de revisión, horarios, pasar un volante a palabras sencillas y dar ideas. No es buena para conocer a tus vecinos, juzgar lo que tu comunidad de verdad necesita ni guardar historias privadas.",
            "Un buen líder usa la IA para tener más tiempo para el trabajo humano: escuchar, ganarse la confianza y estar presente."
          ],
          words: [["Organización sin fines de lucro", "una organización que sirve a una misión en lugar de ganar dinero para sus dueños."], ["Borrador", "una primera versión que vas a mejorar."]],
          slides: [
            { title: "En qué se les va el tiempo a los líderes", bullets: ["Volantes, correos y notas de reuniones", "Listas de inscripción e informes"] },
            { title: "La IA es buena para", bullets: ["Primeros borradores y resúmenes", "Listas de revisión y horarios", "Palabras sencillas e ideas"] },
            { title: "La IA no es buena para", bullets: ["Conocer a tus vecinos", "Juzgar lo que de verdad necesita la comunidad", "Guardar historias privadas"] }
          ],
          tryIt: "Anota tres tareas que le quitan más tiempo a tu grupo cada mes. Junto a cada una, escribe cómo podría ayudar la IA con un primer borrador.",
          youCanNow: "ver qué tareas de tu grupo puede acelerar la IA y cuáles necesitan personas.",
          quickCheck: [
            { objective: "O1", q: "¿En qué es buena la IA para un grupo de la comunidad?", options: ["En escribir el primer borrador de las notas de una reunión", "En conocer a tus vecinos", "En juzgar lo que necesita tu comunidad", "En mantener seguras las historias privadas"], answer: 0, why: "La IA es buena para borradores y resúmenes; las personas conocen a la comunidad." },
            { objective: "O1", q: "La IA te ahorra tres horas a la semana de papeleo. ¿Cuál es el mejor uso de ese tiempo?", options: ["Más papeleo", "Escuchar a las familias y crear confianza", "Dejar que la IA hable con las familias por ti", "Nada"], answer: 1, why: "Los líderes usan la IA para liberar tiempo para el trabajo humano, como escuchar y estar presentes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Una misión clara y una meta medible",
          minutes: 5,
          goal: "Escribir una misión de una frase y una meta medible con ayuda de la IA.",
          text: [
            "Una misión dice en una frase por qué existe tu grupo: a quién sirves, qué haces y por qué importa. Ejemplo: \"Nos aseguramos de que ninguna familia del lado este pase hambre con un banco de alimentos gratuito cada semana.\"",
            "Una meta dice qué vas a lograr y para cuándo, de una forma que se pueda contar. \"Ayudar a más gente\" no se puede medir. \"Atender a 150 familias al mes para junio\" sí.",
            "Pide a la IA: \"Esto es lo que hace nuestro grupo: [describe]. Escribe tres misiones de una frase con palabras sencillas y dos metas medibles para los próximos seis meses.\" Luego elige y edita con tu equipo para que las palabras suenen a tu comunidad."
          ],
          steps: ["Describe a quién sirves, qué haces y por qué.", "Pide a la IA tres opciones de misión y dos metas medibles.", "Elige una de cada una con tu equipo.", "Edítalas para que suenen a tu comunidad."],
          words: [["Misión", "una frase que dice por qué existe tu grupo."], ["Meta medible", "una meta que puedes contar y revisar para una fecha."]],
          slides: [
            { title: "Misión: por qué existen", bullets: ["A quién sirven", "Qué hacen", "Por qué importa"] },
            { title: "Meta: qué van a lograr", bullets: ["No medible: \"Ayudar a más gente\"", "Medible: \"Atender a 150 familias al mes para junio\""] },
            { title: "La IA hace el borrador; deciden juntos", bullets: ["Pide tres misiones y dos metas", "Elijan y editen en equipo"] }
          ],
          tryIt: "Pide a un asistente de IA tres misiones y dos metas medibles para tu grupo. Elige una de cada una y edítalas con tus propias palabras.",
          youCanNow: "escribir una misión clara y una meta medible para tu grupo.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace que una meta sea medible?", options: ["Que suene inspiradora", "Que sea muy larga", "Que la puedas contar para una fecha", "Que use palabras difíciles"], answer: 2, why: "Una meta medible dice qué vas a lograr y para cuándo, de una forma que puedes contar." },
            { objective: "O2", q: "La misión que escribió la IA usa palabras que tus miembros nunca dirían. ¿Qué haces?", options: ["La usas de todos modos", "Le pides a la IA una más larga", "Dejas la misión", "La editas con tu equipo para que suene como tu comunidad"], answer: 3, why: "La misión debe sonar como tu comunidad, así que la editan juntos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planear un programa o un evento con IA",
          minutes: 5,
          goal: "Usar la IA para hacer un calendario y una lista de tareas sencillos para un programa o evento.",
          text: [
            "Cuando ya tienes una meta, planea el trabajo. La IA puede convertir una meta en un calendario (qué pasa y cuándo) y una lista de tareas (quién hace qué).",
            "Ejemplo de instrucción: \"Vamos a regalar útiles escolares a 100 niños el 10 de agosto en el centro comunitario. Haz un calendario sencillo de 6 semanas y una lista de tareas con tres papeles para voluntarios. Usa frases cortas.\"",
            "Revísalo con tu equipo. Quita los pasos que no le quedan a tu comunidad, agrega lo que la IA olvidó (como permisos, traducción o transporte para personas mayores) y pon un nombre y una fecha junto a cada tarea."
          ],
          steps: ["Dale a la IA el evento, la fecha, el lugar y cuántas personas.", "Pide un calendario y una lista de tareas.", "Revísalo con tu equipo y agrega lo que falta.", "Pon un nombre y una fecha junto a cada tarea."],
          words: [["Calendario", "una lista en orden de lo que pasa y cuándo."], ["Lista de tareas", "una lista de trabajos con quién va a hacer cada uno."]],
          slides: [
            { title: "De la meta al plan", bullets: ["Calendario: qué pasa y cuándo", "Lista de tareas: quién hace qué"] },
            { title: "Ejemplo de instrucción", bullets: ["Regalo de útiles escolares, 100 niños, 10 de agosto", "Calendario de 6 semanas y lista de tareas", "Tres papeles para voluntarios, frases cortas"] },
            { title: "Hazlo tuyo", bullets: ["Quita lo que no queda", "Agrega lo que olvidó la IA: permisos, traducción, transporte", "Nombre y fecha para cada tarea"] }
          ],
          tryIt: "Pide a la IA un calendario y una lista de tareas para un programa o evento que tu grupo podría hacer. Agrega algo que la IA olvidó y pon un nombre junto a cada tarea.",
          youCanNow: "convertir una meta en un calendario y una lista de tareas con la IA y tu equipo.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una lista de tareas?", options: ["Una lista de quién hace qué", "Una lista de donantes", "Un presupuesto", "Una declaración de misión"], answer: 0, why: "Una lista de tareas muestra cada trabajo y quién lo va a hacer." },
            { objective: "O3", q: "El plan de la IA para una comida al aire libre no menciona un permiso para usar el parque. ¿Qué haces?", options: ["Te lo saltas; la IA sabe más", "Agregas a la lista de tareas revisar el permiso, con un nombre y una fecha", "Cancelas la comida", "Le pides a la IA que lo solicite"], answer: 1, why: "Agregas lo que la IA olvidó, como los permisos, y le das a la tarea un responsable y una fecha." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Dirigir y planear con IA",
        questions: [
          { objective: "O1", q: "¿En qué tarea es buena la IA para un grupo de la comunidad?", options: ["Saber lo que necesitan tus vecinos", "Hacer el borrador de un volante", "Ganarse la confianza de las familias", "Guardar historias privadas"], answer: 1, why: "La IA es buena para primeros borradores; las personas hacen el trabajo de relaciones." },
          { objective: "O2", q: "¿Cuál es una misión?", options: ["\"Atender a 150 familias para junio\"", "\"Reunión el martes a las 6\"", "\"Nos aseguramos de que ninguna familia del lado este pase hambre con un banco de alimentos gratuito cada semana.\"", "\"Comprar más sillas\""], answer: 2, why: "Una misión dice a quién sirves, qué haces y por qué." },
          { objective: "O2", q: "¿Qué meta se puede medir?", options: ["\"Ayudar a más gente\"", "\"Hacer el bien\"", "\"Ser mejores\"", "\"Atender a 150 familias al mes para junio\""], answer: 3, why: "Se puede contar y revisar para una fecha." },
          { objective: "O3", q: "El plan de la IA olvidó el transporte para las personas mayores. ¿Qué haces?", options: ["Lo agregas al plan", "Sigues el plan de la IA al pie de la letra", "Cancelas el evento", "Le pides a la IA que quite a las personas mayores"], answer: 0, why: "Tú conoces a tu comunidad; agrega lo que la IA olvidó." },
          { objective: "O3", q: "¿Qué debe ir junto a cada tarea de tu lista?", options: ["Un emoji", "Un nombre y una fecha", "Una contraseña", "Nada"], answer: 1, why: "Los nombres y las fechas aseguran que las tareas se hagan." }
        ]
      }
    },
    {
      name: "Capítulo 2: Personas, dinero y confianza",
      lessons: [
        {
          objectives: ["O4"],
          title: "Organizar voluntarios y mantener a todos seguros",
          minutes: 5,
          goal: "Escribir descripciones claras de los papeles de los voluntarios y los pasos de seguridad.",
          text: [
            "Los voluntarios se quedan cuando saben qué hacer. La IA puede escribir descripciones cortas de cada papel: en qué consiste el trabajo, cuánto tiempo toma, qué habilidades ayudan y a quién pedir ayuda. También puede hacer el borrador de un mensaje para inscribirse y de recordatorios por mensaje de texto.",
            "Si tu programa atiende a niños o a adultos vulnerables, la seguridad va primero. Algunas prácticas comunes son revisar los antecedentes de los voluntarios, la regla de que haya dos adultos presentes en lugar de un adulto solo con un niño, y reglas claras para el contacto por teléfono y redes sociales. Sigue la política de tu organización y las reglas de tu estado, y pregunta a tu aseguradora o a un abogado si tienes dudas.",
            "Mantén en privado la información de voluntarios y de las personas que atiendes. No pegues nombres, teléfonos ni historias personales en herramientas de IA; usa papeles y marcadores en su lugar."
          ],
          steps: ["Pide a la IA descripciones cortas para cada trabajo voluntario.", "Agrega pasos de seguridad si hay menores o adultos vulnerables.", "Sigue la política de tu organización y las reglas de tu estado.", "Usa marcadores, nunca nombres o números reales, en las instrucciones a la IA."],
          words: [["Revisión de antecedentes", "una revisión de los registros de una persona antes de que trabaje con niños o personas vulnerables."], ["Regla de dos adultos", "una práctica de seguridad común: al menos dos adultos presentes con los niños, nunca uno solo."], ["Adulto vulnerable", "un adulto que puede necesitar protección extra, como algunas personas mayores o con discapacidades."]],
          slides: [
            { title: "Los papeles claros conservan voluntarios", bullets: ["En qué consiste el trabajo y cuánto dura", "Habilidades que ayudan", "A quién pedir ayuda"] },
            { title: "Seguridad con niños", bullets: ["Revisión de antecedentes", "Dos adultos presentes, nunca uno solo", "Reglas para contacto por teléfono y redes"] },
            { title: "Sigue las reglas", bullets: ["La política de tu organización", "Las reglas de tu estado", "Pregunta a tu aseguradora o a un abogado si dudas"] },
            { title: "Protege la privacidad", bullets: ["Nada de nombres o números reales en la IA", "Usa papeles y marcadores"] }
          ],
          tryIt: "Pide a la IA que escriba tres descripciones cortas de papeles de voluntarios para tu plan. Si hay menores, agrega los pasos de seguridad que pide tu organización.",
          youCanNow: "escribir papeles claros para voluntarios e incluir los pasos de seguridad que necesita tu grupo.",
          quickCheck: [
            { objective: "O4", q: "¿Qué debe incluir la descripción del papel de un voluntario?", options: ["La dirección de la casa del voluntario", "Solo el nombre del puesto", "En qué consiste el trabajo, cuánto tiempo toma y a quién pedir ayuda", "El teléfono del voluntario"], answer: 2, why: "Los papeles claros dicen qué hacer, cuánto tiempo y a quién preguntar." },
            { objective: "O4", q: "Quieres que la IA haga el borrador de un mensaje de recordatorio para los voluntarios. ¿Qué pegas?", options: ["El nombre y el teléfono de cada voluntario", "Los resultados de sus revisiones de antecedentes", "Las direcciones de sus casas", "El papel, la fecha y la hora, usando marcadores en lugar de los nombres"], answer: 3, why: "En los prompts de IA usa papeles y marcadores, nunca nombres ni números reales." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Encontrar subvenciones y escribir un resumen para una subvención",
          minutes: 6,
          goal: "Encontrar una oportunidad de subvención y hacer el borrador de un resumen de cinco frases de tu proyecto.",
          text: [
            "Las subvenciones son dinero que se da para un propósito y que no se devuelve. Las fuentes locales muchas veces le quedan mejor a los grupos pequeños: fundaciones comunitarias, negocios locales, bancos, grupos religiosos y programas de la ciudad o del condado. Tu biblioteca puede dar ayuda gratuita para investigar subvenciones.",
            "Grants.gov tiene la lista de subvenciones federales de Estados Unidos. La mayoría son para organizaciones, no para individuos, y ninguna da ayuda económica personal. Para aplicar por Grants.gov hay que registrar a tu organización, lo cual toma tiempo, así que lee los pasos de registro en Grants.gov y empieza con tiempo.",
            "La IA te puede ayudar a escribir un resumen corto del proyecto: la necesidad, lo que vas a hacer, a quién ayuda, tu meta medible y la cantidad que pides. Cada dato y cada número deben ser verdad y coincidir con tus registros. Lee las reglas de quien da la subvención y usa sus preguntas, sus límites de palabras y su fecha límite."
          ],
          steps: ["Pregunta en tu biblioteca o en tu fundación comunitaria por subvenciones locales.", "Busca en Grants.gov si tu organización está lista para subvenciones federales.", "Pide a la IA un resumen de cinco frases: necesidad, plan, a quién ayuda, meta, cantidad.", "Revisa cada dato y sigue las reglas de quien da la subvención."],
          words: [["Subvención", "dinero que se da para un propósito y que no se devuelve."], ["Financiador", "el grupo o la agencia que da la subvención."], ["Fundación comunitaria", "una organización benéfica local que da subvenciones a grupos de su zona."]],
          sources: [{ name: "Grants.gov: Quién puede recibir subvenciones", url: "https://www.grants.gov/learn-grants/grant-eligibility" }],
          slides: [
            { title: "Dónde encuentran subvenciones los grupos pequeños", bullets: ["Fundaciones comunitarias", "Negocios locales, bancos, grupos religiosos", "Programas de la ciudad o el condado; pregunta en tu biblioteca"] },
            { title: "Subvenciones federales: Grants.gov", bullets: ["Sobre todo para organizaciones, no individuos", "El registro toma tiempo: empieza temprano", "Lee los pasos en Grants.gov"] },
            { title: "Un resumen de cinco frases", bullets: ["La necesidad y tu plan", "A quién ayuda y tu meta", "La cantidad que pides"] },
            { title: "Sé honesto", bullets: ["Cada dato debe ser verdad", "Sigue las reglas y la fecha del financiador"] }
          ],
          tryIt: "Encuentra una subvención a la que tu grupo podría aplicar (local o en Grants.gov). Pide a la IA el borrador de un resumen de cinco frases de tu proyecto y luego revisa cada dato.",
          youCanNow: "encontrar una oportunidad de subvención y hacer el borrador de un resumen honesto del proyecto.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es una subvención?", options: ["Dinero para un fin que no tienes que devolver", "Un préstamo con intereses bajos", "Una donación de comida", "Un formulario de impuestos"], answer: 0, why: "Una subvención es dinero que se da para un fin y no se devuelve." },
            { objective: "O5", q: "Un financiador permite 100 palabras, y la IA escribió 180. ¿Qué haces?", options: ["Mandas las 180 palabras", "Lo recortas para que quepa en el límite de 100 palabras del financiador", "Lo haces de 200 palabras", "No mandas el resumen"], answer: 1, why: "Sigue las reglas del financiador, incluidos los límites de palabras." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Informar a quienes apoyan y poner reglas de IA para tu grupo",
          minutes: 5,
          goal: "Escribir un informe para quienes apoyan y cinco reglas sencillas de IA para tu grupo.",
          text: [
            "Quienes apoyan vuelven a dar cuando ven resultados. La IA puede convertir tus números en un informe corto y cálido: \"Este mes atendimos a 142 familias y regalamos 300 mochilas. ¡Gracias!\" Comparte historias solo con permiso por escrito, y cambia los nombres si la persona lo pide.",
            "Todo grupo que usa IA debería ponerse de acuerdo en unas pocas reglas sencillas. Por ejemplo: 1) Nunca poner en la IA nombres, direcciones, teléfonos ni datos de salud o de situación migratoria de las personas que atendemos. 2) Una persona lee y revisa todo antes de que salga. 3) No dejamos que la IA decida quién recibe ayuda. 4) Si alguien pregunta, decimos cuándo un mensaje lo escribió casi todo la IA. 5) Usamos solo herramientas aprobadas, gratuitas o donadas.",
            "Escribe tus reglas, compártelas con los voluntarios y revísenlas una vez al año."
          ],
          steps: ["Pide a la IA que convierta tus resultados en un informe corto de agradecimiento.", "Usa historias solo con permiso por escrito.", "Escribe cinco reglas de IA con tu equipo.", "Comparte las reglas con los voluntarios y revísenlas cada año."],
          words: [["Persona que apoya", "alguien que da tiempo, dinero o ayuda a tu grupo."], ["Política", "un conjunto de reglas por escrito que tu grupo acuerda seguir."]],
          slides: [
            { title: "Los informes conservan a quienes apoyan", bullets: ["Comparte números reales", "Da las gracias", "Historias solo con permiso por escrito"] },
            { title: "Cinco reglas sencillas de IA", bullets: ["Nada de datos privados de quienes atendemos", "Una persona revisa todo", "La IA no decide quién recibe ayuda"] },
            { title: "Mantén vivas las reglas", bullets: ["Sé abierto sobre el uso de IA si preguntan", "Usa herramientas aprobadas", "Compártelas con voluntarios; revísenlas cada año"] }
          ],
          tryIt: "Tarea final: júntalo en un plan de programa de una página: misión, meta medible, calendario, tres papeles de voluntarios con pasos de seguridad, un resumen de cinco frases para una subvención y las cinco reglas de IA de tu grupo. Quita todo lo privado antes de compartirlo.",
          youCanNow: "dirigir un proyecto de la comunidad con un plan claro y un uso de la IA seguro y honesto.",
          quickCheck: [
            { objective: "O6", q: "¿Cuándo puedes compartir la historia de una familia en un informe?", options: ["Siempre que ayude a recaudar fondos", "Si cambias una palabra", "Solo con su permiso por escrito", "Si la historia es corta"], answer: 2, why: "Las historias se comparten solo con permiso por escrito." },
            { objective: "O6", q: "Un miembro de la junta sugiere dejar que la IA elija qué familias reciben ayuda primero. ¿Qué dice tu regla de IA?", options: ["Sí, la IA es justa", "Sí, si es más rápido", "Solo en los días de mucho trabajo", "No; las personas deciden quién recibe ayuda"], answer: 3, why: "La IA no toma decisiones sobre quién recibe ayuda; las toman las personas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Personas, dinero y confianza",
        questions: [
          { objective: "O4", q: "Tu programa atiende a niños. ¿Cuál es una práctica de seguridad común?", options: ["Un adulto solo con cada niño", "Que los voluntarios les escriban a los niños en privado", "Revisión de antecedentes y dos adultos presentes", "No hacen falta reglas"], answer: 2, why: "La revisión de antecedentes y la regla de dos adultos son protecciones comunes; sigue la política de tu organización." },
          { objective: "O4", q: "¿Puedes pegar el nombre y la historia de una persona que atiendes en la IA para escribir un informe?", options: ["Sí, siempre", "Solo si es corta", "Sí, si la IA es gratuita", "No; usa marcadores y deja fuera los datos privados"], answer: 3, why: "Protege a las personas que atiendes dejando sus datos fuera de las herramientas de IA." },
          { objective: "O5", q: "La mayoría del dinero en Grants.gov es para:", options: ["Organizaciones", "Cuentas personales", "La renta de individuos", "Comprar autos"], answer: 0, why: "Grants.gov dice que la mayoría de las oportunidades son para organizaciones, no para individuos." },
          { objective: "O5", q: "La IA escribió que tu grupo atendió a 500 familias, pero tus registros dicen 312. Tú:", options: ["Dejas 500, suena mejor", "Lo cambias a 312", "Quitas todos los números", "Le pides a la IA un número más grande"], answer: 1, why: "Cada dato de una subvención o un informe debe coincidir con tus registros." },
          { objective: "O6", q: "¿Cuál es una buena regla de IA para un grupo de la comunidad?", options: ["La IA decide quién recibe ayuda", "Nadie revisa lo que escribe la IA", "Una persona lee y revisa todo antes de que salga", "Pegar todos los expedientes en la IA"], answer: 2, why: "La revisión humana mantiene a tu grupo preciso y confiable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para dirigir organizaciones sin fines de lucro",
    questions: [
      { objective: "O1", q: "¿Qué tarea es mejor dejarle a las personas y no a la IA?", options: ["Ganarse la confianza de las familias", "Hacer el borrador de un volante", "Hacer una lista de revisión", "Resumir las notas de una reunión"], answer: 0, why: "Las relaciones y la confianza son trabajo humano." },
      { objective: "O1", q: "¿Por qué los líderes deberían usar la IA para los borradores?", options: ["Para reemplazar al equipo", "Para tener más tiempo para escuchar y estar presentes", "Para no revisar el trabajo", "Para juntar datos privados"], answer: 1, why: "La IA ahorra tiempo de escritura para que los líderes se enfoquen en las personas." },
      { objective: "O2", q: "Una misión dice:", options: ["La hora de la reunión", "El saldo de tu banco", "A quién sirves, qué haces y por qué", "Los teléfonos de tus voluntarios"], answer: 2, why: "Para eso sirve una misión." },
      { objective: "O2", q: "¿Qué meta puedes medir?", options: ["\"Hacer una diferencia\"", "\"Ayudar mucho\"", "\"Ser conocidos\"", "\"Regalar 300 mochilas para el 10 de agosto\""], answer: 3, why: "Tiene un número y una fecha." },
      { objective: "O2", q: "Después de que la IA sugiere misiones, debes:", options: ["Elegir y editar con tu equipo", "Usar la primera sin leerla", "Publicar las tres", "Ignorar a tu equipo"], answer: 0, why: "Tu equipo se asegura de que suene a tu comunidad." },
      { objective: "O3", q: "Un calendario muestra:", options: ["Quién donó", "Qué pasa y cuándo, en orden", "Solo tu presupuesto", "Las direcciones de los voluntarios"], answer: 1, why: "Un calendario pone los pasos en orden." },
      { objective: "O3", q: "¿Qué dato debes darle a la IA para planear un evento?", options: ["Los teléfonos de los voluntarios", "Las direcciones de las familias", "El evento, la fecha, el lugar y cuántas personas", "El acceso a tu banco"], answer: 2, why: "Esos datos ayudan sin compartir información privada." },
      { objective: "O3", q: "El plan de la IA no incluye traducción para las familias que hablan español. Tú:", options: ["Sigues la IA al pie de la letra", "Cancelas", "Quitas a esas familias", "Agregas la traducción al plan"], answer: 3, why: "Tú agregas lo que necesita tu comunidad." },
      { objective: "O4", q: "Una buena descripción del papel de un voluntario incluye:", options: ["En qué consiste el trabajo, cuánto dura y a quién preguntar", "El número de Seguro Social del voluntario", "Nada", "Solo el nombre del evento"], answer: 0, why: "Los papeles claros ayudan a los voluntarios a hacerlo bien." },
      { objective: "O4", q: "La regla de dos adultos quiere decir:", options: ["Dos voluntarios comparten un teléfono", "Al menos dos adultos presentes con los niños, nunca uno solo", "Dos adultos firman cada cheque", "Solo dos adultos pueden ser voluntarios"], answer: 1, why: "Es una práctica común que protege a los niños y a los voluntarios." },
      { objective: "O4", q: "Si no estás seguro de las reglas de seguridad para trabajar con menores, debes:", options: ["Inventar las tuyas", "Saltártelas", "Seguir la política de tu organización y las reglas del estado, y preguntar a tu aseguradora o a un abogado", "Preguntarle al amigo de un voluntario"], answer: 2, why: "La política oficial y los profesionales dan la respuesta correcta." },
      { objective: "O5", q: "Una subvención es:", options: ["Un préstamo que pagas con intereses", "Una tarjeta de crédito", "Una cuenta de impuestos", "Dinero para un propósito que no se devuelve"], answer: 3, why: "Las subvenciones no se devuelven." },
      { objective: "O5", q: "¿Cuál es un lugar local donde los grupos pequeños suelen encontrar subvenciones?", options: ["Una fundación comunitaria", "Un anuncio emergente", "Un prestamista de día de pago", "Un mensaje de un desconocido"], answer: 0, why: "Las fundaciones comunitarias dan subvenciones a grupos locales." },
      { objective: "O5", q: "Sobre el registro para subvenciones federales en Grants.gov, es buena idea:", options: ["Esperar al día antes de la fecha límite", "Empezar con tiempo, porque el registro tarda", "Saltarse el registro", "Pagarle a un desconocido para que lo haga"], answer: 1, why: "El registro toma tiempo, así que empieza temprano." },
      { objective: "O5", q: "Un resumen de cinco frases para una subvención cubre:", options: ["Solo tu nombre", "Los teléfonos de tus voluntarios", "La necesidad, el plan, a quién ayuda, la meta y la cantidad", "Una lista de quejas"], answer: 2, why: "Esas partes le dicen al financiador lo que necesita saber." },
      { objective: "O5", q: "Antes de enviar un resumen para una subvención que escribiste con la IA, tú:", options: ["Lo envías sin leerlo", "Agregas números más grandes", "Quitas la fecha límite", "Revisas cada dato y sigues las reglas del financiador"], answer: 3, why: "La honestidad y seguir las reglas protegen a tu grupo." },
      { objective: "O6", q: "Quieres compartir la historia de una familia en un boletín. Necesitas:", options: ["Su permiso por escrito", "Nada", "El permiso de la IA", "Solo la opinión de un voluntario"], answer: 0, why: "Las historias se comparten solo con permiso." },
      { objective: "O6", q: "¿Cuál es una buena regla de IA?", options: ["Poner datos migratorios en la IA", "Nunca poner en la IA nombres, direcciones ni datos de salud de las personas que atendemos", "Dejar que la IA decida quién recibe comida", "Nunca revisar lo que escribe la IA"], answer: 1, why: "Los datos privados se quedan fuera de las herramientas de IA." },
      { objective: "O6", q: "¿Debe la IA decidir quién recibe ayuda de tu programa?", options: ["Sí, siempre", "Sí, si es gratuita", "No; esas decisiones las toman personas", "Solo los fines de semana"], answer: 2, why: "Las decisiones sobre la ayuda a las personas necesitan criterio humano y justicia." },
      { objective: "O6", q: "¿Cada cuánto debe tu grupo revisar sus reglas de IA?", options: ["Nunca", "Cada diez años", "Solo después de un problema", "Más o menos una vez al año"], answer: 3, why: "Las herramientas cambian, así que revisa tus reglas con regularidad." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Misión y meta",
        objective: "O2",
        notYet: "No hay misión, o la meta no se puede contar.",
        meets: "Una misión de una frase con quién, qué y por qué, y una meta con un número y una fecha.",
        exceeds: "Editadas con el equipo para que suenen como la comunidad."
      },
      {
        name: "Calendario",
        objective: "O3",
        notYet: "No hay calendario, o hay tareas sin nombre ni fecha.",
        meets: "Un calendario sencillo con un nombre y una fecha junto a cada tarea.",
        exceeds: "Incluye algo que la IA olvidó, como permisos, traducción o transporte."
      },
      {
        name: "Papeles de voluntarios y seguridad",
        objective: "O4",
        notYet: "Menos de tres papeles, o no hay pasos de seguridad cuando hay menores de edad.",
        meets: "Tres papeles claros, con los pasos de seguridad de la organización donde hacen falta.",
        exceeds: "Los papeles dicen cuánto tiempo toma el trabajo y a quién pedir ayuda."
      },
      {
        name: "Resumen para la subvención",
        objective: "O5",
        notYet: "Faltan partes, o hay datos que no coinciden con los registros.",
        meets: "Cinco frases: la necesidad, el plan, a quién ayuda, la meta y la cantidad, todo revisado.",
        exceeds: "Cumple el límite de palabras y las preguntas de un financiador real."
      },
      {
        name: "Reglas de IA y privacidad",
        objective: "O6",
        notYet: "Menos de cinco reglas, o quedó información privada en el plan.",
        meets: "Cinco reglas de IA claras, y nada de información privada en el plan.",
        exceeds: "Las reglas incluyen una revisión cada año y están listas para compartirlas con los voluntarios."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Grupos que adoptan reglas de IA por escrito dentro de 30 días (encuesta de seguimiento)",
      "Grupos que solicitan al menos una subvención dentro de 90 días, y las subvenciones que ganan",
      "Grupos que reportan más voluntarios o más personas atendidas después de usar su plan"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente, o una computadora de la biblioteca o de la oficina",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "Datos de un programa real o de práctica: a quién atiende, resultados y registros",
      "Papel o una herramienta de documentos gratuita para el plan de una página",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Pide que los equipos del mismo grupo trabajen juntos para que el plan y las reglas de IA sean compartidos.",
      "Revisa que ningún prompt tenga nombres, teléfonos ni datos de salud o de inmigración de las personas atendidas.",
      "En los programas con menores de edad, remite a la política de seguridad de la propia organización; este curso no la reemplaza.",
      "Lleva una lista de las fundaciones comunitarias locales y de la ayuda con subvenciones que hay en la biblioteca.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
