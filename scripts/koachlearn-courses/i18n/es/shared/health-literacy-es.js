"use strict";

// Koach Learn course (Spanish translation of shared/health-literacy.js). See scripts/koachlearn-courses/README.md, "Translations".
// Teaches skills, not medical advice, as in the English: always says to check with a doctor or pharmacist.

module.exports = {
  id: "health-literacy-es",
  lang: "es",
  translationOf: "health-literacy",
  category: "Seniors and Technology",
  name: "Alfabetización en salud: entender tu atención médica",
  skills: "Encontrar información de salud confiable, Prepararte para una consulta médica, Hacer preguntas y comprobar que entendiste, Leer etiquetas de medicamentos y llevar una lista de medicamentos, Usar resultados de análisis y portales del paciente, Entender las palabras de la cobertura médica",
  outcome: "prepararte para una consulta médica con una nota sobre tu síntoma, una lista de preguntas y una lista de medicamentos, hacer preguntas hasta entender, repetir el plan con tus propias palabras y encontrar respuestas confiables y a la persona indicada para preguntar sobre medicamentos, resultados de análisis y costos.",
  about: [
    "La alfabetización en salud es la capacidad de encontrar, entender y usar información de salud para tomar decisiones por ti y por las personas que cuidas. Es una habilidad que cualquiera puede aprender. Hasta los médicos se confunden con palabras médicas fuera de su especialidad.",
    "Este curso es para todos: adultos mayores que manejan varios medicamentos, jóvenes que van solos al médico por primera vez, veteranos que usan la atención del VA (el Departamento de Asuntos de Veteranos), trabajadores que eligen un plan de salud, personas que salen de prisión y necesitan retomar su atención médica, y cualquiera que haya salido de una consulta pensando \"¿Qué me acaban de decir?\"",
    "Aprenderás a reconocer información de salud confiable, prepararte para una consulta, hacer buenas preguntas, leer la etiqueta de un medicamento, usar un portal del paciente y entender las palabras del seguro. Este curso enseña habilidades; no da consejos médicos. Revisa siempre las decisiones sobre tu salud con tu médico, tu enfermera o tu farmacéutico.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz una hoja de consulta de una página para una cita real o de práctica: una nota corta sobre tu síntoma o preocupación (cuándo empezó, qué lo mejora o lo empeora), tus tres preguntas principales y una lista completa de medicamentos (recetados, de venta libre, vitaminas, suplementos y alergias). Después de la consulta (o de un ensayo con un amigo), escribe el plan con tus propias palabras: cuál es el problema, qué tienes que hacer y por qué.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas mayores que manejan varios medicamentos, jóvenes que van solos al médico por primera vez, veteranos que se atienden en el VA, trabajadores que eligen un plan de salud, personas que vuelven a casa después de la prisión y necesitan retomar su atención médica, y cuidadores.",
    startingPoint: "Van al médico y toman medicamentos, pero a menudo salen de la consulta sin estar seguros de lo que se dijo, no llevan una lista completa de medicamentos, no han usado un portal del paciente y las palabras del seguro les resultan confusas.",
    gap: "No entender la información de salud lleva a errores con los medicamentos, atención que no se recibe y costos inesperados. Necesitan encontrar información confiable, prepararse para las consultas, preguntar hasta entender y saber a quién consultar sobre medicamentos, resultados y costos, para participar en las decisiones sobre su salud y la de su familia.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "No es consejo médico; cada decisión de salud se consulta con un médico, una enfermera o un farmacéutico",
      "Privacidad: no se comparten datos de salud ni contraseñas del portal en clase, ni se escriben en herramientas de IA",
      "Dispositivos: un teléfono o una computadora; algunas personas todavía no tienen portal del paciente",
      "Idioma: algunas personas necesitan un intérprete en las consultas"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un sitio web o una publicación de salud", action: "comprobar si la fuente es confiable y buscar una palabra de salud en un sitio confiable como medlineplus.gov", standard: "escribiendo el significado con tus propias palabras" },
    { id: "O2", condition: "Antes de una consulta médica", action: "escribir una hoja de consulta con tu preocupación, tus tres preguntas principales y una lista completa de medicamentos", standard: "con cuándo empezó el síntoma y qué lo mejora o lo empeora" },
    { id: "O3", condition: "Durante una consulta o un ensayo", action: "hacer preguntas hasta entender y repetir el plan con tus propias palabras", standard: "diciendo cuál es el problema, qué tienes que hacer y por qué" },
    { id: "O4", condition: "Con un medicamento, una vitamina o un suplemento", action: "leer la etiqueta y agregarlo a tu lista de medicamentos con el nombre, la dosis, cada cuánto, para qué es y una advertencia", standard: "con una pregunta escrita para un farmacéutico" },
    { id: "O5", condition: "Usando un portal del paciente o tu clínica", action: "encontrar un resultado de análisis o una nota de consulta y escribir preguntas sobre él", standard: "con al menos dos preguntas para tu proveedor" },
    { id: "O6", condition: "Con palabras comunes de la cobertura médica", action: "explicar palabras como deducible, copago y dentro de la red, y nombrar a quién preguntarle sobre los costos", standard: "con tus propias palabras y sin ayuda" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepararte y hablar con tu proveedor de salud",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar información de salud confiable",
          minutes: 5,
          goal: "Distinguir una fuente de salud confiable de una que no lo es.",
          text: [
            "La información de salud está en todas partes: sitios web, redes sociales, anuncios de televisión, amigos y chatbots de IA. Una parte es excelente. Otra parte es vieja, falsa o quiere venderte algo.",
            "Buenos lugares gratuitos para empezar en Estados Unidos: MedlinePlus (medlineplus.gov), de la Biblioteca Nacional de Medicina, que también tiene páginas en español; los CDC (cdc.gov), la agencia de salud pública; y los Institutos Nacionales de Salud (nih.gov). Los sitios oficiales del gobierno de Estados Unidos terminan en .gov. Los hospitales, las universidades y los grupos médicos conocidos también suelen ser buenos.",
            "Hazte cuatro preguntas sobre cualquier fuente: ¿Quién la escribió? ¿Cuándo se actualizó? ¿Está tratando de venderme algo? ¿Coincide con lo que dicen otras fuentes confiables? Un asistente de IA puede explicarte una palabra médica difícil con palabras sencillas, pero puede equivocarse. Revisa lo que dice en un sitio confiable y nunca escribas en él tu nombre completo, tu identificación ni tus números de seguro. Tu médico o tu farmacéutico tienen la última palabra sobre tu caso."
          ],
          steps: ["Averigua quién hizo la página.", "Busca la fecha en que se actualizó.", "Revisa si está vendiendo algo.", "Compárala con MedlinePlus u otro sitio .gov.", "Lleva tus preguntas a tu médico o farmacéutico."],
          words: [["Alfabetización en salud", "la capacidad de encontrar, entender y usar información de salud para tomar decisiones."], ["MedlinePlus", "un sitio web gratuito del gobierno de Estados Unidos con información de salud, de la Biblioteca Nacional de Medicina."]],
          slides: [
            { title: "La alfabetización en salud es una habilidad", bullets: ["Encontrar información de salud", "Entenderla", "Usarla para tomar decisiones"] },
            { title: "Lugares confiables para empezar", bullets: ["medlineplus.gov (también en español)", "cdc.gov y nih.gov", "Los sitios oficiales de Estados Unidos terminan en .gov"] },
            { title: "Cuatro preguntas para cualquier fuente", bullets: ["¿Quién la escribió?", "¿Cuándo se actualizó?", "¿Está vendiendo algo?", "¿Coincide con otras fuentes confiables?"] },
            { title: "La IA puede explicar, no decidir", bullets: ["Úsala para explicar palabras difíciles", "Revisa lo que dice en un sitio confiable", "Tu médico o farmacéutico tiene la última palabra"] }
          ],
          sources: [
            { name: "MedlinePlus: Alfabetización en salud (en inglés)", url: "https://medlineplus.gov/healthliteracy.html" },
            { name: "CDC: ¿Qué es la alfabetización en salud? (en inglés)", url: "https://www.cdc.gov/health-literacy/php/about/index.html" }
          ],
          tryIt: "Elige una palabra de salud que hayas oído pero que no entiendas del todo (por ejemplo presión arterial, colesterol o asma). Búscala en medlineplus.gov y escribe su significado en una frase, con tus propias palabras.",
          youCanNow: "encontrar información de salud en sitios confiables y revisar cualquier fuente con cuatro preguntas sencillas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué detalle hace más confiable un sitio web de salud?", options: ["Vende un producto en cada página", "Tiene muchos signos de exclamación", "Muestra quién lo escribió y cuándo se actualizó por última vez", "Promete una cura"], answer: 2, why: "Saber quién lo escribió y cuándo te ayuda a juzgar la información." },
            { objective: "O1", q: "Un amigo comparte una publicación que dice que un té cura la presión alta. ¿Qué harías?", options: ["Dejar tu medicamento para la presión", "Compartirla con tu familia", "Comprar el té enseguida", "Revisarlo en un sitio confiable y preguntarle a tu médico"], answer: 3, why: "Las afirmaciones de salud se revisan en sitios confiables y con tu proveedor." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Prepararte para una consulta médica",
          minutes: 5,
          goal: "Hacer una hoja de consulta con tu preocupación, tus preguntas y tu lista de medicamentos.",
          text: [
            "Las consultas suelen ser cortas. Prepararte antes te ayuda a recordar todo y ayuda al proveedor a entenderte. MedlinePlus sugiere escribir tus preguntas, describir tus síntomas por escrito y hacer una lista de tus alergias y de cada medicamento, hierba, vitamina y suplemento que tomas.",
            "Para un síntoma, escribe: qué es, cuándo empezó, con qué frecuencia pasa, qué lo mejora o lo empeora y qué has probado. Pon primero tus tres preguntas principales, para que las más importantes reciban respuesta.",
            "Puedes llevar a un amigo o familiar de confianza para que escuche y tome notas. Si necesitas un intérprete, pide al consultorio con tiempo que consiga uno. Lleva tu tarjeta del seguro o de Medicare, una identificación con foto y tu lista de medicamentos o los frascos mismos."
          ],
          steps: ["Escribe tu preocupación: qué es, cuándo empezó, con qué frecuencia, qué ayuda o qué empeora.", "Escribe tus tres preguntas principales.", "Haz una lista de cada medicamento, vitamina, suplemento y alergia.", "Pide a alguien que te acompañe si te ayuda.", "Pide un intérprete con tiempo si lo necesitas."],
          words: [["Proveedor de salud", "un médico, enfermero practicante, asistente médico u otro profesional que da atención médica."], ["Síntoma", "un cambio en tu cuerpo o en tu mente que notas, como dolor, tos o cansancio."], ["Suplemento", "una vitamina, mineral, hierba u otro producto que tomas para complementar tu alimentación."]],
          slides: [
            { title: "Por qué prepararte", bullets: ["Las consultas son cortas", "Recuerdas todo", "El proveedor te entiende mejor"] },
            { title: "Describe tu síntoma", bullets: ["Qué es y cuándo empezó", "Con qué frecuencia pasa", "Qué lo mejora o lo empeora"] },
            { title: "Lleva contigo", bullets: ["Tus tres preguntas principales", "Lista de medicamentos o los frascos", "Tarjeta del seguro o de Medicare e identificación"] },
            { title: "No tienes que ir solo", bullets: ["Lleva a alguien que tome notas", "Pide un intérprete con tiempo"] }
          ],
          sources: [{ name: "MedlinePlus: Cómo hablar con su médico (en inglés)", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Empieza tu hoja de consulta. Escribe una preocupación real o de práctica, con cuándo empezó y qué la mejora o la empeora, y luego tus tres preguntas principales.",
          youCanNow: "preparar una hoja de consulta con tu preocupación, tus preguntas principales y lo que debes llevar.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué llevar una lista completa de medicamentos a una consulta?", options: ["Para que el médico compruebe que todo lo que tomas funciona bien junto", "Porque la piden para dejarte entrar", "Para no tener que hablar", "Para mostrar que tomas muchos"], answer: 0, why: "Una lista completa ayuda a tu proveedor a evitar mezclas peligrosas y errores." },
            { objective: "O2", q: "Tienes cinco preocupaciones, pero la cita es corta. ¿Qué harías?", options: ["No mencionar ninguna", "Escribir tus tres preguntas principales y hacer primero la más importante", "Hablar muy rápido de las cinco", "Guardarlas todas para el próximo año"], answer: 1, why: "Poner primero tus preguntas principales asegura que se respondan las más importantes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Durante la consulta: hacer preguntas y comprobar que entendiste",
          minutes: 5,
          goal: "Hacer preguntas hasta entender y repetir el plan con tus propias palabras.",
          text: [
            "Tienes derecho a entender tu atención médica. Si el proveedor usa una palabra que no conoces, di: \"¿Me lo puede explicar con palabras más sencillas?\" Si habla muy rápido, di: \"¿Puede ir más despacio?\" Puedes pedir que te escriba las instrucciones.",
            "Tres preguntas cubren la mayoría de las consultas: ¿Cuál es mi problema principal? ¿Qué tengo que hacer? ¿Por qué es importante que lo haga? Sigue preguntando hasta que puedas responder las tres.",
            "Antes de irte, usa el método de repetir lo aprendido: di el plan con tus propias palabras. \"Entonces tomo una pastilla cada mañana con comida y vuelvo en dos semanas. Si se me hincha el tobillo, lo llamo.\" Si se te escapó algo, el proveedor puede corregirlo en ese momento. Pregunta también cómo comunicarte con el consultorio después y qué hacer si te sientes peor."
          ],
          steps: ["Pregunta qué significa cualquier palabra que no conozcas.", "Haz las tres preguntas: problema principal, qué hacer, por qué.", "Toma notas o pide a tu acompañante que las tome.", "Di el plan con tus propias palabras (repetir lo aprendido).", "Pregunta cómo comunicarte con el consultorio y qué hacer si te sientes peor."],
          words: [["Repetir lo aprendido", "decir el plan con tus propias palabras para comprobar que lo entendiste (en inglés, teach-back)."], ["Seguimiento", "una consulta o llamada posterior para ver cómo sigues."]],
          slides: [
            { title: "Está bien preguntar", bullets: ["\"¿Me lo explica con palabras más sencillas?\"", "\"¿Puede ir más despacio?\"", "\"¿Me lo puede escribir?\""] },
            { title: "Tres preguntas clave", bullets: ["¿Cuál es mi problema principal?", "¿Qué tengo que hacer?", "¿Por qué es importante?"] },
            { title: "Repetir lo aprendido", bullets: ["Di el plan con tus propias palabras", "El proveedor corrige lo que se te escapó"] },
            { title: "Antes de irte", bullets: ["¿Cómo me comunico con el consultorio?", "¿Qué hago si me siento peor?"] }
          ],
          sources: [{ name: "MedlinePlus: Cómo hablar con su médico (en inglés)", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Haz un juego de roles con un amigo o dilo en voz alta: tu amigo lee una instrucción corta de un médico (por ejemplo \"Tome esto dos veces al día durante 10 días y termínelo todo\"). Haz una pregunta sobre ella y luego repítela con tus propias palabras.",
          youCanNow: "hacer preguntas claras durante una consulta y repetir el plan con tus propias palabras para comprobar que lo entendiste.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es una de las tres preguntas clave para hacer en una consulta?", options: ["¿Cuánto gana el médico?", "¿Por qué es importante que yo haga esto?", "¿Puedo dejar mi medicamento?", "¿Cuánto hay que esperar?"], answer: 1, why: "Las tres preguntas clave son: cuál es mi problema principal, qué tengo que hacer y por qué es importante." },
            { objective: "O3", q: "El médico dice que tomes una pastilla \"dos veces al día con comida\". ¿Qué harías antes de irte?", options: ["Asentir con la cabeza e irte", "Preguntarle a un desconocido en la sala de espera", "Repetirlo: \"Entonces la tomo en el desayuno y en la cena con comida, ¿verdad?\"", "Adivinarlo después en casa"], answer: 2, why: "Repetir lo aprendido comprueba que entendiste bien el plan." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararte y hablar con tu proveedor de salud",
        questions: [
          { objective: "O1", q: "¿Qué sitio web es un lugar confiable para empezar a buscar información de salud?", options: ["Una publicación de un desconocido en redes sociales", "Un anuncio de una pastilla milagrosa", "medlineplus.gov", "Un comentario cualquiera en un foro"], answer: 2, why: "MedlinePlus es un sitio de salud gratuito del gobierno de Estados Unidos, de la Biblioteca Nacional de Medicina." },
          { objective: "O2", q: "¿Qué debes escribir sobre un síntoma antes de una consulta?", options: ["Cuándo empezó y qué lo mejora o lo empeora", "Nada; el médico lo adivinará", "Solo tu color favorito", "Tu número de cuenta bancaria"], answer: 0, why: "Los detalles claros sobre el síntoma ayudan al proveedor a entenderte." },
          { objective: "O2", q: "¿Qué va en tu lista de medicamentos?", options: ["Solo los medicamentos recetados", "Solo las pastillas que tomaste hoy", "Nada; la farmacia ya lo sabe", "Medicamentos recetados, de venta libre, vitaminas, suplementos y alergias"], answer: 3, why: "Todo lo que tomas puede importar, incluidas las vitaminas y los suplementos." },
          { objective: "O3", q: "El médico usa una palabra que no entiendes. ¿Qué haces?", options: ["Asientes y finges que entiendes", "Le pides que la explique con palabras más sencillas", "Te vas de la consulta", "La buscas el próximo año"], answer: 1, why: "Tienes derecho a entender tu atención médica; preguntar es normal." },
          { objective: "O3", q: "¿Qué es repetir lo aprendido?", options: ["Enseñarle medicina al médico", "Pedir un reembolso", "Decir el plan con tus propias palabras", "Leer el plan en silencio"], answer: 2, why: "Repetir lo aprendido comprueba que entendiste, para corregir errores de inmediato." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar tu información de salud",
      lessons: [
        {
          objectives: ["O4"],
          title: "Medicamentos: leer la etiqueta y llevar una lista",
          minutes: 5,
          goal: "Leer la etiqueta de un medicamento y mantener al día una lista de medicamentos.",
          text: [
            "Los errores con medicamentos son comunes y muchas veces se pueden evitar. MedlinePlus aconseja llevar una lista de cada medicamento con su dosis y la hora en que lo tomas, incluidos los productos de venta libre, las vitaminas, los suplementos y las hierbas, además de tus alergias, y llevarla a cada consulta.",
            "Lee la etiqueta cada vez, no de memoria. Busca: el nombre del medicamento, cuánto tomar (la dosis), con qué frecuencia y a qué hora, por cuánto tiempo, las advertencias (por ejemplo \"puede causar somnolencia\" o \"tomar con comida\") y la información sobre resurtidos y fecha de vencimiento. Los medicamentos de venta libre tienen una etiqueta de Información del Medicamento (Drug Facts) con los usos, las advertencias y las instrucciones.",
            "Tu farmacéutico es un experto gratuito. Pregúntale: ¿Por qué tomo esto? ¿Qué efectos secundarios son comunes y qué debo hacer? ¿Cuándo debo dejarlo? ¿Es seguro con mis otros medicamentos y suplementos? ¿Debo evitar algún alimento o el alcohol? Nunca dejes ni cambies un medicamento recetado sin preguntar antes a tu médico o farmacéutico."
          ],
          steps: ["Lee el nombre, la dosis, con qué frecuencia y por cuánto tiempo.", "Lee las advertencias.", "Agrégalo a tu lista de medicamentos con la dosis y la hora.", "Hazle tus preguntas al farmacéutico.", "Lleva la lista a cada consulta y actualízala cuando algo cambie."],
          words: [["Dosis", "cuánto de un medicamento tomar cada vez."], ["De venta libre", "medicamento que puedes comprar sin receta."], ["Efecto secundario", "un efecto extra de un medicamento que no querías, como malestar de estómago."]],
          slides: [
            { title: "Lee la etiqueta cada vez", bullets: ["Nombre y dosis", "Con qué frecuencia, a qué hora y por cuánto tiempo", "Advertencias: somnolencia, tomar con comida"] },
            { title: "Lleva una lista de medicamentos", bullets: ["Cada medicamento, vitamina, suplemento y hierba", "Dosis y hora del día", "Alergias; llévala a cada consulta"] },
            { title: "Pregúntale a tu farmacéutico", bullets: ["¿Por qué tomo esto? ¿Qué efectos secundarios tiene?", "¿Es seguro con mis otros medicamentos?", "¿Debo evitar algún alimento o el alcohol?"] },
            { title: "Nunca lo cambies por tu cuenta", bullets: ["Pregunta a tu médico o farmacéutico antes de dejarlo o cambiarlo"] }
          ],
          sources: [{ name: "MedlinePlus: Errores de medicación (en inglés)", url: "https://medlineplus.gov/medicationerrors.html" }],
          tryIt: "Toma un medicamento, vitamina o suplemento que uses tú (o un familiar). Lee la etiqueta y agrégalo a tu lista de medicamentos: nombre, dosis, con qué frecuencia, para qué es y una advertencia. Escribe una pregunta para hacerle a un farmacéutico.",
          youCanNow: "leer la etiqueta de un medicamento, llevar una lista completa de medicamentos y hacerle las preguntas correctas a un farmacéutico.",
          quickCheck: [
            { objective: "O4", q: "¿Qué significa \"dosis\" en la etiqueta de un medicamento?", options: ["Cuánto medicamento tomar cada vez", "El precio del medicamento", "La fecha en que se fabricó", "El nombre de la farmacia"], answer: 0, why: "La dosis es la cantidad que tomas cada vez." },
            { objective: "O4", q: "Empiezas a tomar una vitamina nueva. ¿Qué harías con tu lista de medicamentos?", options: ["No ponerla porque las vitaminas no cuentan", "Esperar hasta tu próximo cumpleaños", "Contárselo solo a tus amigos", "Agregarla a la lista y preguntarle al farmacéutico si es segura con tus otros medicamentos"], answer: 3, why: "Las vitaminas y los suplementos van en la lista y pueden mezclarse con los medicamentos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Resultados de análisis, portales del paciente y tus expedientes",
          minutes: 5,
          goal: "Encontrar un resultado de análisis en un portal del paciente y escribir preguntas sobre él.",
          text: [
            "Muchas clínicas y hospitales tienen un portal del paciente: un sitio web o una aplicación segura donde puedes ver resultados de análisis, notas de consulta y próximas citas, pedir resurtidos de recetas y enviar mensajes a tu equipo de atención. MedlinePlus recomienda aprender a ver tus expedientes para seguir tus resultados, tus planes de tratamiento y tus medicamentos. Los veteranos pueden usar las herramientas en línea del VA; pregunta a tu equipo del VA cómo inscribirte.",
            "Los resultados de análisis suelen mostrar tu número junto a un rango \"normal\" o de referencia. Un resultado marcado como alto o bajo no siempre es un problema; depende de ti, de tu historial y de otros resultados. No te asustes y no cambies tu tratamiento por tu cuenta. Escribe tus preguntas y pregúntale a tu proveedor qué significa el resultado en tu caso.",
            "Mantén seguro tu portal: usa una contraseña fuerte, nunca la compartas y cierra la sesión en computadoras compartidas o de la biblioteca. Si necesitas ayuda para inscribirte, llama a la recepción de la clínica. Muchas veces un familiar o cuidador puede tener acceso con tu permiso; pregunta en el consultorio cómo hacerlo."
          ],
          steps: ["Pregunta en tu clínica cómo inscribirte en el portal del paciente.", "Busca tu resultado de análisis más reciente.", "Mira tu número y el rango de referencia.", "Escribe preguntas: ¿Qué significa esto para mí? ¿Tengo que hacer algo?", "Envía la pregunta por el portal o hazla en tu próxima consulta."],
          words: [["Portal del paciente", "un sitio web o aplicación segura donde ves tus expedientes de salud y envías mensajes a tu equipo de atención."], ["Rango de referencia", "el rango de resultados que es habitual en la mayoría de las personas sanas."]],
          slides: [
            { title: "Para qué sirve un portal del paciente", bullets: ["Ver resultados de análisis y notas de consulta", "Pedir resurtidos y ver citas", "Enviar mensajes a tu equipo de atención"] },
            { title: "Cómo leer un resultado", bullets: ["Tu número y un rango de referencia", "Alto o bajo no siempre es un problema", "Pregunta qué significa en tu caso"] },
            { title: "Mantenlo seguro", bullets: ["Contraseña fuerte, nunca compartida", "Cierra la sesión en computadoras compartidas", "Pregunta en la clínica por el acceso para cuidadores"] }
          ],
          sources: [{ name: "MedlinePlus: Cómo hablar con su médico (en inglés)", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Si tienes un portal del paciente, entra y busca un resultado o una nota de consulta reciente. Si no tienes, llama o pregunta en tu clínica cómo inscribirte. En los dos casos, escribe dos preguntas que harías sobre un resultado de análisis.",
          youCanNow: "usar un portal del paciente de forma segura, leer un resultado junto a su rango de referencia y preguntarle a tu proveedor qué significa en tu caso.",
          quickCheck: [
            { objective: "O5", q: "¿Qué puedes hacer normalmente en un portal del paciente?", options: ["Cambiar tú mismo tus recetas", "Ver tus expedientes y enviar mensajes a tu equipo de atención", "Pedir medicamentos sin receta", "Leer los resultados de otros pacientes"], answer: 1, why: "Un portal es un lugar seguro para ver tus expedientes y escribirle a tu equipo de atención." },
            { objective: "O5", q: "Usaste una computadora de la biblioteca para revisar tu portal. ¿Qué harías al terminar?", options: ["Dejarlo abierto para la próxima vez", "Escribir tu contraseña en una nota junto a la computadora", "Cerrar la sesión y cerrar el navegador", "Solo apagar la pantalla"], answer: 2, why: "Cerrar la sesión en computadoras compartidas mantiene privados tus expedientes de salud." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Palabras de la cobertura médica y tu kit para la consulta",
          minutes: 6,
          goal: "Explicar palabras comunes de la cobertura médica y saber a quién preguntar sobre los costos.",
          text: [
            "Las palabras de costos confunden a casi todos. HealthCare.gov (el sitio oficial de seguros médicos de Estados Unidos) las define. La prima es lo que pagas por tu plan, casi siempre cada mes. El deducible es la cantidad que pagas por la atención cubierta antes de que tu plan empiece a pagar. El copago es una cantidad fija en dólares que pagas por un servicio cubierto, como una consulta. Los proveedores dentro de la red tienen un contrato con tu plan y casi siempre te cuestan menos.",
            "Antes de un análisis o una consulta, puedes preguntar: \"¿Este proveedor está en mi red?\" \"¿Más o menos cuánto voy a pagar?\" Llama al número que aparece en tu tarjeta del seguro. Medicare: llama al 1-800-MEDICARE (1-800-633-4227), abierto las 24 horas, los 7 días de la semana, excepto algunos días feriados federales; también atiende en español. Los veteranos pueden preguntar al VA por sus beneficios. Muchos centros de salud comunitarios ofrecen atención con una escala de tarifas según los ingresos; busca en findahealthcenter.hrsa.gov y pregunta al centro por sus tarifas.",
            "Ahora júntalo todo. Tu kit para la consulta es tu hoja de consulta (preocupación y preguntas principales), tu lista de medicamentos, tu tarjeta del seguro y tu identificación, y un bolígrafo o el teléfono para tomar notas. Después de la consulta, escribe el plan con tus propias palabras."
          ],
          steps: ["Aprende cuatro palabras: prima, deducible, copago, dentro de la red.", "Antes de recibir atención, pregunta si el proveedor está en tu red y cuánto podrías pagar.", "Llama al número de tu tarjeta, o al 1-800-MEDICARE si tienes Medicare.", "Prepara tu kit: hoja de consulta, lista de medicamentos, tarjeta, identificación, notas.", "Después de la consulta, escribe el plan con tus propias palabras."],
          words: [["Prima", "lo que pagas por tu plan de salud, casi siempre cada mes."], ["Deducible", "lo que pagas por la atención cubierta antes de que tu plan empiece a pagar."], ["Copago", "una cantidad fija en dólares que pagas por un servicio cubierto."], ["Dentro de la red", "proveedores que tienen un contrato con tu plan; casi siempre te cuestan menos."]],
          slides: [
            { title: "Cuatro palabras de la cobertura", bullets: ["Prima: lo que pagas por el plan, a menudo cada mes", "Deducible: lo que pagas antes de que el plan pague", "Copago: una cantidad fija por servicio", "Dentro de la red: proveedores con contrato, casi siempre más baratos"] },
            { title: "Pregunta antes de ir", bullets: ["\"¿Este proveedor está en mi red?\"", "\"¿Más o menos cuánto voy a pagar?\"", "Llama al número de tu tarjeta"] },
            { title: "Dónde preguntar", bullets: ["Medicare: 1-800-633-4227, las 24 horas", "Veteranos: pregunten al VA", "Centros de salud comunitarios: findahealthcenter.hrsa.gov"] },
            { title: "Tu kit para la consulta", bullets: ["Hoja de consulta y lista de medicamentos", "Tarjeta del seguro e identificación", "Notas; escribe el plan después"] }
          ],
          sources: [
            { name: "Glosario de HealthCare.gov: Deducible (en inglés)", url: "https://www.healthcare.gov/glossary/deductible/" },
            { name: "Glosario de HealthCare.gov: Copago (en inglés)", url: "https://www.healthcare.gov/glossary/co-payment/" },
            { name: "Medicare.gov: Hable con alguien (en inglés)", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "HRSA: Buscar un centro de salud", url: "https://findahealthcenter.hrsa.gov/" }
          ],
          tryIt: "Tarea final: termina tu hoja de consulta de una página con tu preocupación, tus tres preguntas principales y tu lista completa de medicamentos. Después de una consulta real, o de un ensayo con un amigo que haga de médico, escribe el plan con tus propias palabras: el problema principal, qué hacer y por qué.",
          youCanNow: "explicar palabras comunes de la cobertura médica, preguntar por los costos antes de recibir atención y llevar un kit completo a cada cita.",
          quickCheck: [
            { objective: "O6", q: "¿Qué significa \"dentro de la red\"?", options: ["El proveedor está en las redes sociales", "El proveedor está en tu barrio", "El proveedor es gratis", "El proveedor tiene un contrato con tu plan y casi siempre te cuesta menos"], answer: 3, why: "Los proveedores dentro de la red tienen un contrato con tu plan." },
            { objective: "O6", q: "No sabes cuánto te va a costar una consulta. ¿Qué harías?", options: ["Preguntar a tu plan o al consultorio por los costos antes de la consulta", "No ir a la consulta", "Adivinar y esperar lo mejor", "Preguntarle a un desconocido en internet"], answer: 0, why: "Tu plan o el consultorio pueden decirte los costos con anticipación." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar tu información de salud",
        questions: [
          { objective: "O4", q: "Antes de tomar una dosis de un medicamento, debes:", options: ["Confiar en tu memoria", "Leer la etiqueta cada vez", "Adivinar la dosis", "Tomar una pastilla de un amigo"], answer: 1, why: "Leer la etiqueta cada vez evita errores." },
          { objective: "O4", q: "Quieres dejar un medicamento recetado por un efecto secundario. ¿Qué haces primero?", options: ["Lo dejas de inmediato", "Tomas el doble de la dosis", "Se lo das a un amigo", "Le preguntas a tu médico o farmacéutico"], answer: 3, why: "Nunca dejes ni cambies un medicamento recetado sin preguntar antes." },
          { objective: "O5", q: "¿Qué es un portal del paciente?", options: ["Un sitio web o aplicación segura para ver tus expedientes y enviar mensajes a tu equipo de atención", "La puerta de un hospital", "Un grupo de redes sociales", "Un cupón de farmacia"], answer: 0, why: "Los portales muestran resultados y te dejan enviar mensajes a tu equipo." },
          { objective: "O5", q: "Un resultado de análisis aparece marcado como \"alto\" en tu portal. ¿Cuál es el mejor paso siguiente?", options: ["Asustarte", "Cambiar tu medicamento por tu cuenta", "Escribir tus preguntas y preguntarle a tu proveedor qué significa en tu caso", "Ignorarlo para siempre"], answer: 2, why: "Alto o bajo no siempre es un problema; tu proveedor te explica qué significa en tu caso." },
          { objective: "O6", q: "¿Qué es un deducible?", options: ["Una cantidad fija por cada consulta", "El costo mensual de tu plan", "Un cupón de descuento", "Lo que pagas por la atención cubierta antes de que tu plan empiece a pagar"], answer: 3, why: "HealthCare.gov define el deducible como lo que pagas antes de que tu plan empiece a pagar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Alfabetización en salud: entender tu atención médica",
    questions: [
      { objective: "O1", q: "La alfabetización en salud significa:", options: ["Ser médico", "Poder encontrar, entender y usar información de salud", "Leer rápido", "Saber todas las palabras médicas"], answer: 1, why: "Es la habilidad de encontrar, entender y usar información de salud." },
      { objective: "O1", q: "Los sitios web oficiales del gobierno de Estados Unidos terminan en:", options: [".gov", ".shop", ".win", ".xyz"], answer: 0, why: "Los sitios .gov, como medlineplus.gov y cdc.gov, son oficiales." },
      { objective: "O1", q: "¿Qué pregunta te ayuda a juzgar un sitio web de salud?", options: ["¿Es colorido?", "¿Tiene muchos anuncios?", "¿Cuándo se actualizó por última vez?", "¿Es largo?"], answer: 2, why: "La información vieja puede estar equivocada; revisa la fecha de actualización." },
      { objective: "O1", q: "Un asistente de IA te explica una palabra médica. ¿Qué debes hacer?", options: ["Escribir tu número de seguro para obtener una mejor respuesta", "Cambiar tu tratamiento según lo que dice", "Compartirlo como un hecho", "Revisarlo en un sitio confiable y preguntarle a tu proveedor"], answer: 3, why: "La IA puede equivocarse; revísalo y deja que tu proveedor tenga la última palabra." },
      { objective: "O2", q: "¿Qué va en una hoja de consulta?", options: ["Tus tres preguntas principales", "La contraseña de tu banco", "Una lista del supermercado", "Nada"], answer: 0, why: "Escribir primero tus preguntas asegura que las más importantes reciban respuesta." },
      { objective: "O2", q: "Necesitas un intérprete para una consulta. ¿Cuándo debes pedirlo?", options: ["Nunca", "Después de la consulta", "Con tiempo, cuando haces la cita", "Solo si el médico te lo ofrece"], answer: 2, why: "Pedirlo con tiempo permite que el consultorio consiga uno." },
      { objective: "O2", q: "¿Cuál describe bien un síntoma?", options: ["\"Me siento mal.\"", "\"Dolor agudo en la rodilla desde hace 2 semanas, peor en las escaleras, mejor con descanso.\"", "\"Algo anda mal.\"", "\"Lo mismo de siempre.\""], answer: 1, why: "Dice qué es, desde cuándo y qué lo mejora o lo empeora." },
      { objective: "O2", q: "¿A quién puedes llevar a una consulta para que te ayude?", options: ["Nunca se permite a nadie", "Solo a un abogado", "Solo a un niño menor de 5 años", "A un amigo o familiar de confianza que tome notas"], answer: 3, why: "Un acompañante puede escuchar y tomar notas." },
      { objective: "O3", q: "¿Cuál es una de las tres preguntas clave para una consulta?", options: ["¿Qué tengo que hacer?", "¿Qué auto maneja usted?", "¿Qué edad tiene este edificio?", "¿Puedo saltarme mi cita de seguimiento?"], answer: 0, why: "Problema principal, qué hacer y por qué: estas tres cubren la mayoría de las consultas." },
      { objective: "O3", q: "El médico habla demasiado rápido. Puedes decir:", options: ["Nada", "\"Ya lo averiguaré después.\"", "\"¿Puede ir más despacio y escribírmelo?\"", "\"No importa.\""], answer: 2, why: "Pedir que vaya más despacio o que lo escriba es tu derecho." },
      { objective: "O3", q: "Decir el plan con tus propias palabras se llama:", options: ["Un resurtido", "Repetir lo aprendido", "Un deducible", "Un copago"], answer: 1, why: "Repetir lo aprendido comprueba que entendiste antes de irte." },
      { objective: "O3", q: "Antes de salir de una consulta, también debes preguntar:", options: ["Nada", "Dónde está la cafetería", "Solo por muestras gratis", "Cómo comunicarte con el consultorio y qué hacer si te sientes peor"], answer: 3, why: "Saber cómo comunicarte y cuándo llamar te mantiene seguro." },
      { objective: "O4", q: "¿Quién es un experto gratuito en tus medicamentos?", options: ["Un influencer de redes sociales", "Un anuncio en internet", "Tu farmacéutico", "Un desconocido en la parada del autobús"], answer: 2, why: "Los farmacéuticos responden preguntas sobre medicamentos sin cobrar." },
      { objective: "O4", q: "\"Dosis\" significa:", options: ["Cuánto medicamento tomar cada vez", "El precio de un medicamento", "El nombre de la farmacia", "La fecha de vencimiento"], answer: 0, why: "La dosis es la cantidad que tomas cada vez." },
      { objective: "O4", q: "¿Qué pregunta debes hacerle a un farmacéutico sobre un medicamento nuevo?", options: ["¿De qué color es el frasco?", "¿Puedo compartirlo con mi familia?", "¿Puedo dejarlo cuando quiera?", "¿Es seguro con mis otros medicamentos y suplementos?"], answer: 3, why: "Los medicamentos y los suplementos pueden afectarse entre sí." },
      { objective: "O5", q: "Un \"rango de referencia\" en un resultado de análisis es:", options: ["El número de teléfono de tu médico", "El rango de resultados habitual en la mayoría de las personas sanas", "El precio del análisis", "Un tipo de seguro"], answer: 1, why: "Tu número aparece junto al rango habitual." },
      { objective: "O5", q: "¿Cómo mantienes seguro tu portal del paciente?", options: ["Usando una contraseña fuerte y cerrando la sesión en computadoras compartidas", "Compartiendo tu contraseña con amigos", "Escribiendo la contraseña en la pantalla", "Dejando la sesión abierta en la biblioteca"], answer: 0, why: "Una contraseña fuerte y privada y cerrar la sesión protegen tus expedientes." },
      { objective: "O6", q: "¿Qué es un copago?", options: ["El costo mensual de tu plan", "Una consulta gratis", "Una cantidad fija en dólares que pagas por un servicio cubierto", "La etiqueta de un medicamento"], answer: 2, why: "HealthCare.gov define el copago como una cantidad fija por un servicio cubierto." },
      { objective: "O6", q: "¿A dónde puede llamar con preguntas una persona que tiene Medicare?", options: ["Al 911", "Al 411", "A cualquier número de un mensaje de texto", "Al 1-800-MEDICARE (1-800-633-4227)"], answer: 3, why: "1-800-MEDICARE es el número oficial de Medicare." },
      { objective: "O6", q: "Los proveedores \"dentro de la red\":", options: ["Nunca aceptan seguro", "Tienen un contrato con tu plan y casi siempre te cuestan menos", "Solo trabajan en línea", "Siempre son gratis"], answer: 1, why: "Los proveedores dentro de la red tienen contrato con tu plan, y eso casi siempre baja tu costo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      2,
      4,
      6,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Nota del síntoma",
        objective: "O2",
        notYet: "La preocupación es vaga, o falta cuándo empezó.",
        meets: "Dice cuál es la preocupación, cuándo empezó y qué la mejora o la empeora.",
        exceeds: "Además anota cómo afecta la vida diaria."
      },
      {
        name: "Tres preguntas principales",
        objective: "O3",
        notYet: "Menos de tres preguntas, o no son claras.",
        meets: "Tres preguntas claras, con la más importante primero.",
        exceeds: "Incluye las tres preguntas clave: el problema, qué hacer y por qué."
      },
      {
        name: "Lista de medicamentos",
        objective: "O4",
        notYet: "Faltan medicamentos de venta libre, vitaminas, suplementos o alergias.",
        meets: "Cada medicamento recetado, de venta libre, vitamina, suplemento y alergia, con la dosis y cada cuánto.",
        exceeds: "Además anota para qué es cada uno y una pregunta para el farmacéutico."
      },
      {
        name: "El plan con sus propias palabras",
        objective: "O3",
        notYet: "Falta el plan, o copia las palabras del médico sin entenderlas.",
        meets: "Dice el problema principal, qué hacer y por qué, con sus propias palabras.",
        exceeds: "Además anota cómo comunicarse con el consultorio y qué hacer si se siente peor."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que llevan una hoja de consulta o una lista de medicamentos a una cita real en 60 días (encuesta de seguimiento)",
      "Participantes que cuentan que repitieron lo aprendido o que hicieron una pregunta que antes no habrían hecho",
      "Participantes que se inscriben en un portal del paciente o lo usan en 60 días",
      "Participantes que empiezan otro curso de salud o de habilidades para la vida de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Papel y lápiz o una nota del teléfono para la hoja de consulta",
      "La etiqueta de un medicamento, una vitamina o un suplemento",
      "Un teléfono o una computadora con internet para medlineplus.gov y un portal del paciente, si la persona tiene uno",
      "Unos 60 minutos en total"
    ],
    facilitatorNotes: [
      "Recuerda al inicio que este curso enseña habilidades y no da consejo médico.",
      "Usa preocupaciones de práctica y etiquetas de medicamentos de ejemplo en clase; nadie tiene que compartir sus propios datos de salud.",
      "Practiquen en parejas cómo repetir lo aprendido, con una persona que lee como médico una instrucción de ejemplo.",
      "Ayuda a quienes necesitan intérprete a saber cómo pedirlo al hacer la cita.",
      "Califica la hoja de consulta y el plan con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
