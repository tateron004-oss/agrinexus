"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-caregiving.js). See scripts/koachlearn-courses/README.md, "Translations".
// Every number and URL is kept exactly as in the English. The 988 Lifeline offers help in Spanish by call, text and chat.

module.exports = {
  id: "seniors-caregiving-es",
  lang: "es",
  translationOf: "seniors-caregiving",
  category: "Seniors and Technology",
  name: "Cuidar a un ser querido",
  skills: "Entender las necesidades de tu ser querido, Armar un cuaderno de cuidados, Manejar medicamentos y citas, Encontrar ayuda local para cuidadores, Repartir la carga con la familia, Cuidarte a ti mismo como cuidador",
  outcome: "organizar el cuidado de un ser querido con un cuaderno de cuidados y una lista de medicamentos, manejar citas y medicamentos de forma segura con su médico y su farmacéutico, encontrar ayuda local por medio del Eldercare Locator, repartir tareas con la familia y proteger tu propia salud con un plan para cuidarte.",
  about: [
    "Mucha gente se vuelve cuidadora sin planearlo: una esposa que ayuda a su esposo después de un derrame cerebral, un hombre que lleva a su mamá a sus citas, una abuela que cría a sus nietos mientras cuida a su hermana, un vecino que pasa a ver a alguien todos los días. Cuidar puede dar mucho sentido a la vida, y también puede ser agotador y solitario.",
    "Este curso es para adultos mayores que cuidan a su esposo o esposa, su pareja, un amigo o un familiar, y para hijos y nietos adultos que cuidan a un familiar mayor. Vas a organizarte, manejar los medicamentos y las citas de forma segura, encontrar ayuda en tu comunidad, repartir el trabajo y cuidarte a ti mismo.",
    "Este curso enseña habilidades; no da consejos médicos ni legales. Consulta las preguntas de salud con el médico, la enfermera o el farmacéutico de tu ser querido, y las preguntas legales o de dinero con un profesional calificado. Cada lección dura unos cinco minutos y tiene una tarea \"Pruébalo ahora\"; hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz un primer cuaderno de cuidados para tu ser querido (real o de práctica): sus contactos principales, su lista de medicamentos, sus próximas citas y las preguntas para la siguiente. Luego agrega un plan de ayuda de una página: un recurso local que contactaste o vas a contactar (como el Eldercare Locator), dos tareas concretas que les vas a pedir a familiares o amigos, y tu propio plan para cuidarte con un descanso cada semana.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos en Estados Unidos que cuidan a un padre o una madre mayor, a su pareja o a un pariente, muchas veces personas mayores ellas mismas, y algunos abuelos o familiares que comparten el cuidado. Muchos también trabajan o tienen sus propias necesidades de salud.",
    startingPoint: "Ya ayudan con traslados, comidas o medicamentos, muchas veces sin un plan. Muchos guardan la información en la cabeza o en papelitos, no conocen los servicios locales para cuidadores y hacen casi todo el trabajo solos.",
    gap: "Los cuidadores desorganizados o solos corren el riesgo de confundir medicamentos, faltar a citas y agotarse. Un cuaderno de cuidados, buenas costumbres con los medicamentos y las citas, servicios locales, tareas compartidas y un plan para cuidarse a sí mismos hacen el cuidado más seguro para el ser querido y sostenible para quien cuida.",
    constraints: [
      "Nivel de lectura: palabras sencillas, oraciones cortas y pasos simples y grandes",
      "Dispositivos: basta con papel y una carpeta; un teléfono o una computadora ayuda con los calendarios compartidos y para encontrar servicios",
      "Tiempo: los cuidadores están ocupados; unos 5 minutos por lección, acomodados entre las tareas de cuidado",
      "Salud: los medicamentos solo se cambian con el médico o el farmacéutico; se necesita el permiso del ser querido para compartir su información de salud",
      "Privacidad y bienestar: nada de números completos de Medicare, del Seguro Social o del banco en la IA o en correos; ayuda en crisis por el 988"
    ],
    prerequisites: "Ninguno. \"Conceptos básicos de Medicare\" es un buen curso para tomar junto con este."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un día normal junto a tu ser querido", action: "hacer una lista de lo que puede hacer solo y de dónde necesita ayuda, en tres grupos: cuidado diario, atención de salud, y dinero y trámites", standard: "después de preguntarle qué es lo que más le importa" },
    { id: "O2", condition: "Usando una carpeta o un archivo privado en tu teléfono o computadora", action: "empezar un cuaderno de cuidados con contactos, enfermedades, alergias, seguro y dónde están los papeles legales", standard: "sin escribir números privados completos en herramientas de IA ni en correos" },
    { id: "O3", condition: "Con los medicamentos de tu ser querido y su próxima cita", action: "llevar una lista completa de medicamentos y escribir preguntas para el médico o el farmacéutico", standard: "sin dejar, empezar ni cambiar nunca un medicamento sin preguntarles" },
    { id: "O4", condition: "Cuando necesitas ayuda local", action: "comunicarte con el Eldercare Locator u otro servicio para encontrar apoyo para cuidadores cerca de ti", standard: "anotando lo que averigües en el cuaderno de cuidados" },
    { id: "O5", condition: "Con tu lista de necesidades", action: "pedirles a familiares y amigos tareas concretas con una hora y ponerlas en un calendario compartido", standard: "con al menos dos tareas a cargo de otras personas" },
    { id: "O6", condition: "Como cuidador", action: "revisar si tienes señales de estrés del cuidador y planear un descanso regular", standard: "con un descanso por semana y alguien que te reemplace" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Organizarte",
      lessons: [
        {
          objectives: ["O1"],
          title: "Entender las necesidades de tu ser querido",
          minutes: 5,
          goal: "Hacer una lista de lo que tu ser querido puede hacer solo y de dónde necesita ayuda.",
          text: [
            "Los cuidadores ayudan con muchas cosas. MedlinePlus menciona el aseo, las comidas y los medicamentos; las tareas de la casa, cocinar y hacer mandados; llevar a la persona a sus citas; compañía y apoyo emocional; coordinar la atención médica; y ayuda con decisiones de salud y de dinero.",
            "Empieza por mirar un día normal. ¿Qué puede hacer tu ser querido por su cuenta? ¿Qué le cuesta: bañarse, vestirse, cocinar, acordarse de los medicamentos, pagar las cuentas, ir al médico? Pregúntale y escúchalo. Las personas quieren conservar toda la independencia y el control sobre su propia vida que puedan.",
            "Anota las necesidades en tres grupos: cuidado diario, atención de salud, y dinero y trámites. Esta lista te muestra dónde hace más falta ayuda y qué pedirles a otros. Las necesidades cambian con el tiempo, así que revísala cada pocos meses o después de una hospitalización."
          ],
          steps: ["Recorre un día normal con tu ser querido.", "Haz una lista de lo que puede hacer por su cuenta.", "Haz una lista de dónde necesita ayuda: cuidado diario, atención de salud, dinero y trámites.", "Pregúntale qué es lo más importante para él o para ella.", "Revisa la lista cada pocos meses o después de una hospitalización."],
          words: [["Cuidador", "una persona que ayuda a alguien que necesita apoyo por su edad, una enfermedad o una discapacidad; muchas veces un familiar o un amigo."], ["Independencia", "poder hacer cosas y tomar decisiones por uno mismo."]],
          slides: [
            { title: "En qué ayudan los cuidadores", bullets: ["Aseo, comidas y medicamentos", "Tareas de la casa, mandados y transporte", "Compañía, coordinar la atención y decisiones"] },
            { title: "Mira un día normal", bullets: ["¿Qué puede hacer por su cuenta?", "¿Qué le cuesta?", "Pregúntale y escúchalo"] },
            { title: "Tres grupos de necesidades", bullets: ["Cuidado diario", "Atención de salud", "Dinero y trámites"] }
          ],
          sources: [{ name: "MedlinePlus: Cuidadores (en inglés)", url: "https://medlineplus.gov/caregivers.html" }],
          tryIt: "Escribe una lista de necesidades de tu ser querido (o de alguien a quien podrías cuidar algún día) en tres columnas: cuidado diario, atención de salud, dinero y trámites. Encierra en un círculo las dos necesidades más grandes.",
          youCanNow: "hacer una lista de las necesidades de tu ser querido en cuidado diario, atención de salud y trámites, respetando su independencia.",
          quickCheck: [
            { objective: "O1", q: "¿En qué tres grupos ordena el curso las necesidades de un ser querido?", options: ["Mañana, tarde y noche", "Cuidado diario, atención de salud, y dinero y trámites", "Familia, amigos y vecinos", "Comida, ropa y vivienda"], answer: 1, why: "Ordenar las necesidades en cuidado diario, atención de salud, y dinero y trámites muestra dónde hace más falta la ayuda." },
            { objective: "O1", q: "Tu papá todavía puede cocinar comidas sencillas, pero se olvida de sus pastillas. ¿Cómo planeas la ayuda?", options: ["Encargarte también de toda su cocina", "No hacer nada hasta que haya un problema", "Ayudarle con los medicamentos y dejar que siga cocinando, como él quiere", "Mudarlo de inmediato"], answer: 2, why: "Las personas quieren conservar toda la independencia que puedan, así que concentra la ayuda donde hace falta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Armar un cuaderno de cuidados",
          minutes: 5,
          goal: "Empezar un cuaderno de cuidados que reúna la información clave en un solo lugar.",
          text: [
            "Los CDC (la agencia de salud pública de Estados Unidos) señalan que un plan de cuidados puede ayudar a los cuidadores a tener la información importante en un solo lugar. Llámalo cuaderno de cuidados: una carpeta de argollas, una carpeta o un documento en tu teléfono o computadora que puedan usar tú, los familiares que ayudan y un cuidador de reemplazo.",
            "Qué va en él: contactos (médicos, farmacia, familia, vecinos, contactos de emergencia); una lista de medicamentos; problemas de salud y alergias; información del seguro (Medicare, Medicaid, VA o plan privado); un calendario de citas; y notas de cada consulta. Agrega una copia de los documentos legales que tenga, como un poder notarial o una directiva anticipada, y dónde se guardan los originales.",
            "Mantenlo seguro y privado. Si lo tienes en una computadora o un teléfono, usa una contraseña. No escribas números completos de Medicare, del Seguro Social ni de cuentas bancarias en herramientas de IA ni en correos electrónicos. Un nieto que sabe de tecnología puede ayudar a armar un calendario compartido o un documento sencillo, con el permiso de tu ser querido."
          ],
          steps: ["Elige papel (carpeta) o digital (documento en el teléfono o la computadora).", "Agrega contactos, problemas de salud, alergias y seguro.", "Agrega la lista de medicamentos y el calendario de citas.", "Anota dónde se guardan los documentos legales.", "Muéstrale a una persona de respaldo dónde está."],
          words: [["Plan de cuidados", "un registro escrito de las necesidades, los cuidados y la información importante de una persona."], ["Poder notarial", "un documento legal que permite que alguien actúe en nombre de otra persona, por ejemplo con el dinero o las decisiones de salud."], ["Directiva anticipada", "un documento legal que dice qué atención médica quiere una persona si no puede hablar por sí misma."]],
          slides: [
            { title: "Todo en un solo lugar", bullets: ["Carpeta o documento en el teléfono", "Fácil para quienes ayudan y para los cuidadores de reemplazo"] },
            { title: "Qué va en él", bullets: ["Contactos y números de emergencia", "Problemas de salud, alergias, seguro", "Lista de medicamentos y citas", "Dónde se guardan los documentos legales"] },
            { title: "Mantenlo seguro", bullets: ["Contraseña en las copias digitales", "Nada de números completos de identidad o banco en IA o correo", "Muéstrale a una persona de respaldo dónde está"] }
          ],
          sources: [{ name: "CDC: El cuidado de otras personas (en inglés)", url: "https://www.cdc.gov/caregiving/index.html" }],
          tryIt: "Empieza hoy tu cuaderno de cuidados: en papel o en tu teléfono, escribe la página de contactos (médico, farmacia, dos familiares, contacto de emergencia) y la página de alergias y problemas de salud.",
          youCanNow: "armar un cuaderno de cuidados que reúna en un solo lugar los contactos, la información de salud y las citas.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un cuaderno de cuidados?", options: ["Un diario de tus sentimientos", "Un libro de texto de medicina", "Una factura del médico", "Un solo lugar con la información clave del cuidado, que tú y quienes ayudan pueden usar"], answer: 3, why: "Un cuaderno de cuidados reúne en un solo lugar los contactos, los medicamentos, el seguro y las citas." },
            { objective: "O2", q: "Llevas el cuaderno de cuidados en tu teléfono. ¿Qué haces para mantenerlo privado?", options: ["Usar una contraseña y no poner números completos de Medicare ni del banco en herramientas de IA ni en correos", "Publicarlo en las redes sociales para la familia", "Enviarlo por correo a todos tus conocidos", "Pegarlo completo en un asistente de IA"], answer: 0, why: "Protégelo con una contraseña y no escribas números privados completos en herramientas de IA ni en correos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Manejar medicamentos y citas",
          minutes: 6,
          goal: "Llevar una lista de medicamentos y preparar preguntas para la próxima cita de tu ser querido.",
          text: [
            "Las confusiones con los medicamentos son comunes cuando alguien toma varios. MedlinePlus aconseja llevar una lista de cada medicamento con su dosis y la hora en que se toma, incluidos los de venta libre, las vitaminas, los suplementos y las hierbas, además de las alergias, y llevarla a cada consulta. Lee la etiqueta antes de cada dosis. Un pastillero semanal puede ayudar. Nunca dejes, empieces ni cambies un medicamento sin preguntarle al médico o al farmacéutico.",
            "El farmacéutico es un experto gratuito. Pregúntale: ¿Para qué se necesita esto? ¿Qué efectos secundarios debo vigilar? ¿Es seguro con los otros medicamentos? ¿Hay alimentos o alcohol que evitar? Usar una sola farmacia para todo le ayuda a detectar problemas.",
            "Para las citas, lleva el cuaderno de cuidados, escribe las preguntas antes, toma notas y repite el plan para comprobar que entendiste. Los consultorios casi siempre necesitan el permiso de tu ser querido antes de compartir contigo su información de salud; pregunta qué formulario usan. Para preguntas sobre Medicare, llama al 1-800-MEDICARE (1-800-633-4227), donde también atienden en español, y pregunta cómo puede tu ser querido autorizarte a hablar por él, o consigue ayuda gratuita y personal del SHIP de tu estado (shiphelp.org)."
          ],
          steps: ["Actualiza la lista de medicamentos: nombre, dosis, hora y para qué es.", "Usa una sola farmacia y hazle tus preguntas al farmacéutico.", "Usa un pastillero si ayuda; lee las etiquetas cada vez.", "Antes de una consulta, escribe preguntas; durante la consulta, toma notas y repite el plan.", "Pregunta en el consultorio qué formulario de permiso te deja recibir información."],
          words: [["Pastillero", "una caja con espacios para cada día (y cada hora) para ordenar las pastillas con anticipación."], ["SHIP", "Programa Estatal de Asistencia sobre Seguros de Salud: ayuda local y gratuita con preguntas sobre Medicare."]],
          slides: [
            { title: "Lista de medicamentos", bullets: ["Cada medicamento, vitamina, suplemento y hierba", "Dosis, hora y para qué es", "Alergias; llévala a cada consulta"] },
            { title: "Hábitos seguros", bullets: ["Lee la etiqueta cada vez", "Pastillero si ayuda", "Nunca cambies un medicamento sin preguntar"] },
            { title: "Pregúntale al farmacéutico", bullets: ["¿Para qué se necesita? ¿Efectos secundarios?", "¿Es seguro con los otros medicamentos?", "Usa una sola farmacia para todo"] },
            { title: "Citas", bullets: ["Lleva el cuaderno y las preguntas", "Toma notas y repite el plan", "Pregunta qué formulario de permiso usa el consultorio"] }
          ],
          sources: [
            { name: "MedlinePlus: Errores de medicación (en inglés)", url: "https://medlineplus.gov/medicationerrors.html" },
            { name: "Medicare.gov: Hable con alguien (en inglés)", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "SHIP: Programas Estatales de Asistencia sobre Seguros de Salud (en inglés)", url: "https://www.shiphelp.org/" }
          ],
          tryIt: "Agrega la lista de medicamentos a tu cuaderno de cuidados: nombre, dosis, hora y para qué es. Luego escribe tres preguntas para la próxima cita de tu ser querido o para el farmacéutico.",
          youCanNow: "llevar una lista de medicamentos correcta, trabajar con el farmacéutico y prepararte para las citas como cuidador.",
          quickCheck: [
            { objective: "O3", q: "¿Qué va en una lista de medicamentos?", options: ["Solo las pastillas con receta", "Solo los medicamentos de la mañana", "Cada medicamento, vitamina, suplemento y hierba, con la dosis y la hora, además de las alergias", "Solo los más caros"], answer: 2, why: "Una lista completa ayuda al médico y al farmacéutico a detectar problemas." },
            { objective: "O3", q: "El médico explica rápido un plan nuevo. ¿Cómo te aseguras de haberlo entendido?", options: ["Asentir con la cabeza e irte", "Repetir el plan con tus propias palabras y tomar notas", "Preguntarle después a una IA", "Adivinar en casa"], answer: 1, why: "Repetir el plan comprueba que lo entendiste bien." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Organizarte",
        questions: [
          { objective: "O1", q: "¿Cuál es un buen primer paso para entender las necesidades de tu ser querido?", options: ["Encargarte de todo de inmediato", "Decidir sin preguntarle", "Recorrer un día normal y preguntarle qué le cuesta", "Esperar a que haya una crisis"], answer: 2, why: "Mirar un día normal y escuchar muestra dónde hace falta ayuda de verdad." },
          { objective: "O2", q: "¿Para qué sirve un cuaderno de cuidados?", options: ["Para reunir la información clave en un solo lugar", "Para escribir un diario que solo tú puedes leer", "Para guardar las contraseñas de todas las cuentas", "Para compartirlo en redes sociales"], answer: 0, why: "Un plan o cuaderno de cuidados reúne contactos, medicamentos y citas." },
          { objective: "O2", q: "¿Qué va en un cuaderno de cuidados?", options: ["Los números PIN del banco", "La lista de medicamentos y los contactos de los médicos", "Todos los recibos de la vida", "Nada, ni en papel ni digital"], answer: 1, why: "Ahí van contactos, medicamentos, problemas de salud, seguro y citas." },
          { objective: "O3", q: "Tu ser querido quiere dejar un medicamento porque le cae mal al estómago. ¿Qué haces?", options: ["Lo deja de inmediato", "Le das el doble en la siguiente dosis", "Le das la mitad a otra persona", "Le preguntas primero al médico o al farmacéutico"], answer: 3, why: "Nunca dejes ni cambies un medicamento sin preguntar primero." },
          { objective: "O3", q: "El consultorio no quiere compartir información contigo. ¿Qué debes preguntar?", options: ["Qué formulario de permiso puede firmar tu ser querido", "La dirección de la casa del médico", "Si puedes ver los expedientes de otros pacientes", "Nada; te rindes"], answer: 0, why: "Los consultorios casi siempre necesitan el permiso del paciente; pregunta qué formulario usan." }
        ]
      }
    },
    {
      name: "Capítulo 2: Conseguir ayuda y cuidarte a ti mismo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar ayuda en tu comunidad",
          minutes: 5,
          goal: "Encontrar servicios locales para cuidadores con el Eldercare Locator.",
          text: [
            "No tienes que encontrarlo todo tú solo. El Eldercare Locator, un servicio público de la Administración para la Vida Comunitaria (ACL), conecta a adultos mayores y cuidadores con servicios locales. Llama o envía un mensaje de texto al 1-800-677-1116, chatea en línea o busca por ubicación en eldercare.acl.gov. Puede conectarte con tu Agencia Local para Personas Mayores (Area Agency on Aging).",
            "Por medio del Programa Nacional de Apoyo a Cuidadores Familiares, los estados y las agencias locales ofrecen: información sobre servicios, ayuda para conseguir esos servicios, consejería, grupos de apoyo y capacitación para cuidadores, cuidado de relevo (un descanso para ti) y algunos servicios extra. Cubre a cuidadores familiares adultos de personas de 60 años o más, de personas de cualquier edad con Alzheimer o enfermedades relacionadas, y a algunos familiares mayores que crían niños o cuidan a adultos con discapacidades. Pregunta qué hay disponible cerca de ti.",
            "¿Cuidas a un veterano? El Programa de Apoyo a Cuidadores del VA (el Departamento de Asuntos de Veteranos) ayuda a los cuidadores de veteranos inscritos en la atención de salud del VA. Llama a la Línea de Apoyo a Cuidadores al 1-855-260-3274, de lunes a viernes, de 8 am a 8 pm, hora del Este. Para preguntas sobre Medicare, el SHIP de tu estado da ayuda local gratuita."
          ],
          steps: ["Llama o envía un texto al Eldercare Locator: 1-800-677-1116, o busca en eldercare.acl.gov.", "Pide los datos de tu Agencia Local para Personas Mayores.", "Pregunta por capacitación para cuidadores, grupos de apoyo, cuidado de relevo y comidas.", "Si cuidas a un veterano: llama al 1-855-260-3274.", "Anota lo que averigües en tu cuaderno de cuidados."],
          words: [["Agencia Local para Personas Mayores", "una oficina local (Area Agency on Aging) que ayuda a adultos mayores y cuidadores a encontrar servicios."], ["Cuidado de relevo", "cuidado por un tiempo corto para tu ser querido, para que tú puedas descansar."], ["ACL", "la Administración para la Vida Comunitaria, parte del Departamento de Salud y Servicios Humanos de Estados Unidos."]],
          slides: [
            { title: "Eldercare Locator", bullets: ["Llama o envía un texto al 1-800-677-1116", "O busca en eldercare.acl.gov", "Te conecta con tu Agencia Local para Personas Mayores"] },
            { title: "Ayuda para cuidadores familiares", bullets: ["Información y ayuda para conseguir servicios", "Consejería, grupos de apoyo, capacitación", "Cuidado de relevo: un descanso para ti"] },
            { title: "Si cuidas a un veterano", bullets: ["Línea de Apoyo a Cuidadores del VA: 1-855-260-3274", "Lunes a viernes, de 8 am a 8 pm, hora del Este"] }
          ],
          sources: [
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" },
            { name: "ACL: Programa Nacional de Apoyo a Cuidadores Familiares (en inglés)", url: "https://www.acl.gov/programs/support-caregivers/national-family-caregiver-support-program" },
            { name: "Programa de Apoyo a Cuidadores del VA (en inglés)", url: "https://www.caregiver.va.gov/" }
          ],
          tryIt: "Entra a eldercare.acl.gov (o llama o envía un texto al 1-800-677-1116) y encuentra tu Agencia Local para Personas Mayores. Anota en tu cuaderno de cuidados su nombre, su teléfono y un servicio sobre el que quieras preguntar.",
          youCanNow: "encontrar ayuda local para cuidadores con el Eldercare Locator y tu Agencia Local para Personas Mayores, y saber a dónde pueden llamar quienes cuidan a un veterano.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es el cuidado de relevo?", options: ["Cuidado por un tiempo corto para que el cuidador pueda descansar", "Un tipo de medicamento", "Una estadía en el hospital", "Un formulario legal"], answer: 0, why: "El cuidado de relevo le da un descanso al cuidador, y las agencias locales pueden ofrecerlo." },
            { objective: "O4", q: "Necesitas comidas y un grupo de apoyo cerca de ti, pero no sabes por dónde empezar. ¿Qué haces?", options: ["Buscar en las redes sociales", "Esperar a que haya una crisis", "Pedirle al médico que encuentre todo", "Llamar o enviar un mensaje de texto al Eldercare Locator al 1-800-677-1116"], answer: 3, why: "El Eldercare Locator te conecta con servicios locales, como tu Agencia Local para Personas Mayores." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Repartir la carga con familiares y amigos",
          minutes: 5,
          goal: "Pedirles ayuda concreta a familiares y amigos y armar un horario compartido.",
          text: [
            "Muchos cuidadores hacen todo solos porque no quieren molestar a nadie. La gente muchas veces quiere ayudar pero no sabe cómo. \"Avísame si necesitas algo\" casi nunca se convierte en ayuda; un pedido concreto sí.",
            "Los CDC sugieren nombrar una tarea concreta o un horario en el que necesitas ayuda, y usar un calendario compartido en línea para la ayuda regular. MedlinePlus sugiere dejar que quienes ayudan elijan las tareas con las que se sienten cómodos. Ejemplos: \"¿Puedes llevar a mamá a su cita del jueves?\" \"¿Puedes llamar a papá todos los domingos en la noche?\" \"¿Puedes hacer las compras los sábados?\" Los familiares que viven lejos pueden encargarse de las cuentas, las llamadas al seguro, buscar información o hacer videollamadas.",
            "Una reunión familiar corta, en persona o por video, ayuda a que todos vean la lista de necesidades y elijan tareas. Incluye a tu ser querido si puede participar. Si trabajas, pregunta en la oficina de recursos humanos sobre licencias: según la Ley federal de Licencia Familiar y Médica (FMLA), los empleados que califican pueden tomar hasta 12 semanas al año de licencia sin goce de sueldo para cuidar a ciertos familiares."
          ],
          steps: ["Toma tu lista de necesidades de la lección 1.", "Convierte las necesidades en tareas concretas con día y hora.", "Haz una reunión familiar corta (en persona o por video).", "Deja que cada persona elija tareas; ponlas en un calendario compartido.", "¿Trabajas? Pregunta en recursos humanos sobre la licencia familiar."],
          words: [["Calendario compartido", "un calendario en línea que varias personas pueden ver y en el que pueden agregar cosas."], ["FMLA", "la Ley federal de Licencia Familiar y Médica, que permite a los trabajadores que califican tomar licencia sin goce de sueldo para cuidar a su familia."]],
          slides: [
            { title: "Pide algo concreto", bullets: ["No \"avísame si necesitas algo\"", "\"¿Puedes llevar a mamá el jueves?\""] },
            { title: "Formas en que la gente puede ayudar", bullets: ["Transporte, comidas, compras, visitas", "Desde lejos: cuentas, llamadas, búsquedas, videollamadas"] },
            { title: "Reúne a todos", bullets: ["Reunión familiar corta, en persona o por video", "Cada uno elige tareas", "Ponlas en un calendario compartido"] },
            { title: "Si trabajas", bullets: ["Pregunta en recursos humanos por la licencia familiar (FMLA)", "Hasta 12 semanas sin sueldo para empleados que califican"] }
          ],
          sources: [
            { name: "CDC: Cuidarte mientras cuidas a otra persona (en inglés)", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "MedlinePlus: Salud del cuidador (en inglés)", url: "https://medlineplus.gov/caregiverhealth.html" }
          ],
          tryIt: "Escribe dos pedidos concretos (tarea, día y hora) y envíaselos a dos personas, o escribe a quién se los pedirías. Ejemplo: \"¿Podrías llevar a papá a su cita de los ojos el día 14 a las 10 am?\"",
          youCanNow: "convertir las necesidades en pedidos concretos y repartir las tareas de cuidado con familiares y amigos.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué usar un calendario compartido para la ayuda de la familia?", options: ["Todos pueden ver las tareas y anotarse", "Reemplaza el cuaderno de cuidados", "Les paga a quienes ayudan", "Envía los medicamentos"], answer: 0, why: "Un calendario compartido deja que quienes ayudan vean lo que hace falta y elijan tareas." },
            { objective: "O5", q: "Tu hermano te dice: \"Avísame si necesitas algo\". ¿Cuál es la mejor respuesta?", options: ["\"Estoy bien.\"", "\"Todo.\"", "\"¿Podrías llevar a mamá a hacer las compras todos los sábados en la mañana?\"", "No decir nada"], answer: 2, why: "Una tarea concreta con una hora tiene muchas más posibilidades de convertirse en ayuda real." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Cuidarte a ti mismo como cuidador",
          minutes: 5,
          goal: "Reconocer las señales del estrés del cuidador y planear descansos regulares.",
          text: [
            "Los CDC lo dicen de forma sencilla: para ser un buen cuidador, tienes que cuidarte a ti mismo. MedlinePlus menciona estas señales del estrés del cuidador: sentirte abrumado o solo, dormir demasiado o muy poco, cambios grandes de peso, cansancio constante, perder el interés en cosas que disfrutabas, irritabilidad o enojo, preocupación o tristeza frecuentes, dolores de cabeza o del cuerpo frecuentes, y fumar o beber más.",
            "Lo que ayuda: descansos regulares (hasta unas pocas horas de relevo a la semana pueden ayudar), pedir ayuda a otros, un grupo de apoyo para cuidadores (en persona o en línea), mantener el contacto con tus amigos y cuidar tu propia salud con actividad física, comidas sanas, sueño y tus propios chequeos. Dile a tu médico que eres cuidador; puede conocer grupos de apoyo.",
            "Si te sientes sin esperanza o abrumado y no mejora, habla con tu médico o con un consejero. En una crisis en Estados Unidos, llama o envía un mensaje de texto al 988, donde hay ayuda en español por llamada, texto y chat; los veteranos y sus familias pueden marcar 1. Fuera de Estados Unidos, llama a la línea de crisis o al número de emergencias de tu país. Ahora estás listo para terminar tu cuaderno de cuidados y tu plan de ayuda."
          ],
          steps: ["Revisa si tienes alguna de las señales del estrés del cuidador.", "Planea un descanso regular cada semana, y quién te reemplaza.", "Busca un grupo de apoyo para cuidadores (pregunta en tu Agencia Local para Personas Mayores).", "No faltes a tus propias citas médicas y dile a tu médico que eres cuidador.", "Crisis: llama o envía un texto al 988 (hay ayuda en español)."],
          words: [["Estrés del cuidador", "el desgaste físico y emocional de cuidar a alguien."], ["Grupo de apoyo", "un grupo de personas en una situación parecida que se reúnen para compartir experiencias y consejos."]],
          slides: [
            { title: "Señales del estrés del cuidador", bullets: ["Abrumado, solo, siempre cansado", "Cambios en el sueño o el peso", "Irritable, triste, preocupado, con dolores", "Perder el interés; fumar o beber más"] },
            { title: "Lo que ayuda", bullets: ["Descansos regulares; aunque sean unas horas a la semana", "Pide ayuda; únete a un grupo de apoyo", "Tu propio sueño, comidas, actividad y chequeos"] },
            { title: "Busca apoyo", bullets: ["Dile a tu médico que eres cuidador", "Crisis: llama o envía un texto al 988 (en español); veteranos marquen 1"] }
          ],
          sources: [
            { name: "MedlinePlus: Salud del cuidador (en inglés)", url: "https://medlineplus.gov/caregiverhealth.html" },
            { name: "CDC: Cuidarte mientras cuidas a otra persona (en inglés)", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "Línea 988 de Prevención del Suicidio y Crisis", url: "https://988lifeline.org/" }
          ],
          tryIt: "Tarea final: termina tu primer cuaderno de cuidados (contactos, lista de medicamentos, citas y preguntas) y agrega un plan de ayuda de una página: un recurso local que contactaste o vas a contactar, dos tareas concretas para familiares o amigos, y tu plan para cuidarte con un descanso cada semana.",
          youCanNow: "reconocer el estrés del cuidador, planear descansos regulares y seguir cuidando a tu ser querido sin perder tu propia salud.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es una señal de estrés del cuidador?", options: ["Dormir bien y sentirte descansado", "Sentirte abrumado, solo o cansado todo el tiempo", "Disfrutar de tus pasatiempos", "Ver seguido a tus amigos"], answer: 1, why: "Sentirse abrumado o solo y estar cansado todo el tiempo son señales de estrés del cuidador." },
            { objective: "O6", q: "Llevas meses sin un descanso. ¿Cuál es un buen primer paso?", options: ["Seguir hasta enfermarte", "Dejar de cuidar a tu ser querido", "Esconder cómo te sientes", "Planear un descanso regular cada semana y pedirle a alguien que te reemplace"], answer: 3, why: "Incluso unas pocas horas de relevo por semana pueden ayudar, con alguien que te reemplace." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Conseguir ayuda y cuidarte a ti mismo",
        questions: [
          { objective: "O4", q: "¿Cuál es el número del Eldercare Locator (para llamar o enviar un texto)?", options: ["911", "1-800-677-1116", "411", "988"], answer: 1, why: "El Eldercare Locator te conecta con servicios locales en el 1-800-677-1116." },
          { objective: "O4", q: "¿Qué es el cuidado de relevo?", options: ["Un tipo de medicamento", "Una factura del hospital", "Cuidado por un tiempo corto para que el cuidador pueda descansar", "Un documento legal"], answer: 2, why: "El cuidado de relevo le da tiempo libre al cuidador." },
          { objective: "O5", q: "¿Qué pedido tiene más probabilidades de conseguir ayuda real?", options: ["\"Avísame si necesitas algo.\"", "\"Ayuda alguna vez.\"", "No decir nada", "\"¿Puedes llevar a mamá a su cita del jueves a las 2 pm?\""], answer: 3, why: "Las tareas concretas con hora son fáciles de aceptar." },
          { objective: "O6", q: "¿Cuál es una señal del estrés del cuidador?", options: ["Cansancio constante y perder el interés en cosas que disfrutabas", "Dormir bien", "Reírte con tus amigos", "Ir a tus propios chequeos"], answer: 0, why: "MedlinePlus menciona el cansancio y la pérdida de interés como señales." },
          { objective: "O4", q: "¿A quién puede llamar para recibir apoyo una persona que cuida a un veterano?", options: ["A la Línea de Apoyo a Cuidadores del VA, al 1-855-260-3274", "A un anuncio cualquiera en internet", "Solo a la oficina de cobros del hospital", "A nadie"], answer: 0, why: "La Línea de Apoyo a Cuidadores del VA ayuda a quienes cuidan a veteranos inscritos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cuidar a un ser querido",
    questions: [
      { objective: "O1", q: "¿Cuál es una tarea común de un cuidador?", options: ["Escribir las recetas del médico", "Cambiar las leyes", "Llevar a la persona a sus citas y ayudar con las comidas", "Dirigir el hospital"], answer: 2, why: "El transporte, las comidas, los medicamentos y la compañía son tareas comunes." },
      { objective: "O1", q: "¿Por qué preguntarle a tu ser querido qué le cuesta?", options: ["Para respetar su independencia y enfocar la ayuda donde hace falta", "Para avergonzarlo", "Porque lo exige la ley", "No importa"], answer: 0, why: "Escuchar lo mantiene a cargo de su vida y muestra las necesidades reales." },
      { objective: "O1", q: "Los tres grupos de necesidades de este curso son:", options: ["Comida, televisión y teléfono", "Cuidado diario, atención de salud, y dinero y trámites", "Mañana, mediodía y noche", "Familia, amigos y vecinos"], answer: 1, why: "Ordenar las necesidades así muestra dónde hace más falta ayuda." },
      { objective: "O1", q: "¿Cuándo debes revisar la lista de necesidades?", options: ["Nunca", "Solo una vez", "Solo si te lo pide", "Cada pocos meses o después de una hospitalización"], answer: 3, why: "Las necesidades cambian con el tiempo." },
      { objective: "O2", q: "Un cuaderno de cuidados puede ser:", options: ["Solo una carpeta de papel", "Una carpeta o un documento en un teléfono o una computadora", "Solo una publicación en redes sociales", "Solo algo que recuerdas de memoria"], answer: 1, why: "Cualquier formato sirve si reúne la información en un solo lugar." },
      { objective: "O2", q: "¿Qué es una directiva anticipada?", options: ["Un horario de autobuses", "Un recibo de farmacia", "Un documento legal que dice qué atención médica quiere alguien si no puede hablar", "La etiqueta de un medicamento"], answer: 2, why: "Deja por escrito los deseos de la persona sobre su atención médica." },
      { objective: "O2", q: "¿Qué NO debes escribir en una herramienta de IA ni en un correo electrónico?", options: ["Números completos de Medicare, del Seguro Social o del banco", "Una lista del supermercado", "Una pregunta sobre un pastillero", "La hora de una cita"], answer: 0, why: "Los números privados no deben ir en herramientas de IA ni en correos." },
      { objective: "O3", q: "¿Qué va en una lista de medicamentos?", options: ["Solo la receta más nueva", "Solo las pastillas de la mañana", "Solo los medicamentos caros", "Cada medicamento, vitamina, suplemento y hierba, con dosis y hora"], answer: 3, why: "Todo lo que se toma puede interactuar, así que hay que anotarlo todo." },
      { objective: "O3", q: "¿Por qué usar una sola farmacia para todos los medicamentos?", options: ["Siempre es más barato", "Lo exige la ley", "El farmacéutico puede detectar problemas entre medicamentos", "Tiene mejor estacionamiento"], answer: 2, why: "Una sola farmacia ve la lista completa y puede detectar problemas." },
      { objective: "O3", q: "En una cita, una buena forma de comprobar que entendiste es:", options: ["Asentir e irte", "Repetir el plan con tus propias palabras", "Preguntar por el clima", "No tomar notas"], answer: 1, why: "Repetir el plan detecta los errores a tiempo." },
      { objective: "O3", q: "Para recibir ayuda local, gratuita y personal con preguntas sobre Medicare, puedes contactar:", options: ["Al SHIP de tu estado (shiphelp.org)", "Un anuncio que aparece en pantalla", "Un desconocido en internet", "El banco"], answer: 0, why: "Los SHIP dan orientación gratuita y local sobre Medicare." },
      { objective: "O4", q: "¿Qué agencia maneja el Eldercare Locator?", options: ["El IRS", "Una aseguradora privada", "El correo", "La Administración para la Vida Comunitaria (ACL)"], answer: 3, why: "El Eldercare Locator es un servicio público de la ACL." },
      { objective: "O4", q: "Tu Agencia Local para Personas Mayores puede ayudarte a:", options: ["Encontrar servicios para cuidadores como capacitación, grupos de apoyo y relevo", "Comprar acciones", "Arreglar tu auto", "Sacar un pasaporte"], answer: 0, why: "Las Agencias Locales para Personas Mayores conectan a adultos mayores y cuidadores con servicios." },
      { objective: "O4", q: "La Línea de Apoyo a Cuidadores del VA atiende:", options: ["Solo los fines de semana", "De lunes a viernes, de 8 am a 8 pm, hora del Este", "Solo a medianoche", "Un día al año"], answer: 1, why: "El VA indica de lunes a viernes, de 8 am a 8 pm, hora del Este." },
      { objective: "O5", q: "¿Cuál es una buena forma de ayudar para la familia que vive lejos?", options: ["No hacer nada porque están lejos", "Solo dar consejos", "Encargarse de las cuentas, las llamadas al seguro o videollamadas regulares", "Visitar una vez cada diez años"], answer: 2, why: "Quienes ayudan desde lejos pueden encargarse de llamadas, cuentas y de estar en contacto." },
      { objective: "O5", q: "Un calendario compartido ayuda porque:", options: ["Reemplaza al médico", "Lo exige Medicare", "Esconde las tareas de la familia", "Todos pueden ver las tareas y anotarse"], answer: 3, why: "Quienes ayudan pueden ver qué hace falta y cuándo." },
      { objective: "O5", q: "Según la ley federal FMLA, los empleados que califican pueden tomar hasta:", options: ["1 día de licencia pagada", "12 semanas al año de licencia sin goce de sueldo para cuidar a ciertos familiares", "1 año de licencia pagada", "Ninguna licencia"], answer: 1, why: "MedlinePlus menciona hasta 12 semanas sin goce de sueldo para empleados que califican; consulta con recursos humanos." },
      { objective: "O6", q: "Según los CDC, ¿por qué los cuidadores deben cuidarse a sí mismos?", options: ["Para ser buenos cuidadores", "Porque no hacerlo es egoísta", "Para alejarse de toda la familia", "No importa"], answer: 0, why: "Los CDC dicen que tienes que cuidarte para ser un buen cuidador." },
      { objective: "O6", q: "¿Cuál es un paso útil contra el estrés del cuidador?", options: ["No tomar nunca un descanso", "Dejar de ir a tu propio médico", "Esconderles a todos cómo te sientes", "Unirte a un grupo de apoyo para cuidadores"], answer: 3, why: "Los grupos de apoyo comparten experiencias y consejos." },
      { objective: "O6", q: "Un cuidador se siente sin esperanza y abrumado. En Estados Unidos, en una crisis puede:", options: ["Aguantar solo", "Publicarlo y desconectarse", "Llamar o enviar un mensaje de texto al 988", "Llamar al 411"], answer: 2, why: "El 988 es gratis, abre las 24 horas y tiene ayuda en español; los veteranos y sus familias pueden marcar 1. Fuera de Estados Unidos, usa la línea de crisis o el número de emergencias de tu país." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      4,
      7,
      9,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Cuaderno de cuidados",
        objective: "O2",
        notYet: "Faltan contactos clave, o hay números privados completos escritos donde otros los pueden ver.",
        meets: "Los contactos clave, las próximas citas y dónde están los papeles legales, todo en un solo lugar.",
        exceeds: "Una persona de respaldo sabe dónde está el cuaderno y cómo usarlo."
      },
      {
        name: "Medicamentos y próxima consulta",
        objective: "O3",
        notYet: "La lista de medicamentos está incompleta, o no hay preguntas para la próxima consulta.",
        meets: "Una lista completa de medicamentos con la dosis y la hora, y preguntas escritas para la próxima cita.",
        exceeds: "Incluye vitaminas, suplementos y alergias, y preguntas para el farmacéutico."
      },
      {
        name: "Ayuda local",
        objective: "O4",
        notYet: "No nombra ningún recurso local.",
        meets: "Un recurso local contactado o planeado, como el Eldercare Locator.",
        exceeds: "Anotó en el cuaderno qué servicios hay y cuáles son los próximos pasos."
      },
      {
        name: "Tareas compartidas",
        objective: "O5",
        notYet: "Las tareas son vagas, como \"ayudar\", o son menos de dos.",
        meets: "Dos tareas concretas con una hora, para pedirles a familiares o amigos que se encarguen.",
        exceeds: "Quienes ayudan ya aceptaron y las tareas están en un calendario compartido."
      },
      {
        name: "Plan para cuidarse",
        objective: "O6",
        notYet: "No hay ningún descanso planeado.",
        meets: "Un plan para cuidarse con un descanso por semana y alguien que lo reemplace.",
        exceeds: "También nombra un grupo de apoyo o le dice a su propio médico que es cuidador."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se comunican con el Eldercare Locator, una Agencia Local para Personas Mayores o el Programa de Apoyo a Cuidadores del VA dentro de 30 días (encuesta de seguimiento)",
      "Personas que dicen que familiares o amigos se encargan de tareas de cuidado de forma regular",
      "Personas que dicen tomar un descanso regular o haberse unido a un grupo de apoyo para cuidadores"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una carpeta o un archivador, o un documento privado en un teléfono o una computadora, para el cuaderno de cuidados",
      "Los frascos de medicamentos o la lista actual del ser querido, y las cartas de las citas (guardados en privado)",
      "Un teléfono para llamar o enviar un mensaje de texto al Eldercare Locator",
      "Unos 60 minutos en total, en sesiones cortas que se acomoden al cuidado, más tiempo para llenar el cuaderno"
    ],
    facilitatorNotes: [
      "Los cuidadores muchas veces están agotados; ofrece sesiones cortas y deja que hagan las tareas de práctica en casa.",
      "No des consejos médicos; manda las preguntas sobre medicamentos al médico o al farmacéutico del ser querido.",
      "Ten listos para repartir los contactos de la Agencia Local para Personas Mayores y de los grupos de apoyo de la zona.",
      "Fíjate en las señales de estrés del cuidador en el grupo, y comparte el 988 con cualquier persona en crisis.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
