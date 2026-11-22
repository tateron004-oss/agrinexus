"use strict";

// Koach Learn course (Spanish translation of veterans-ai-future-workforce). Shape and translation rules: scripts/koachlearn-courses/README.md.
// US program and agency names (VA, O*NET, TAP, VET TEC, DD-214) stay in English with a short Spanish explanation.

module.exports = {
  id: "veterans-ai-future-workforce-es",
  lang: "es",
  translationOf: "veterans-ai-future-workforce",
  category: "Veterans (military)",
  name: "Introducción a la IA y la fuerza laboral del futuro",
  skills: "Explicar qué es la IA, Abrir un asistente de IA gratuito, Escribir una instrucción clara, Traducir tus funciones militares a palabras civiles, Revisar las respuestas de la IA, Proteger la información privada y sensible",
  outcome: "usar un asistente de IA gratuito para convertir una de tus funciones militares en lenguaje de empleo civil, revisar el resultado con una fuente oficial de empleos y dejar fuera la información privada y sensible.",
  about: [
    "Este curso es para veteranos y militares en transición que quieren entender cómo la inteligencia artificial (IA) está cambiando el trabajo civil y cómo usarla a su favor. No se necesita experiencia técnica.",
    "Vas a aprender qué es la IA, cómo abrir un asistente de IA gratuito, cómo darle instrucciones claras (muy parecido a una orden clara: tarea, condiciones, estándar) y cómo dejar fuera la información privada y sensible. Luego lo vas a usar para traducir tu experiencia militar a palabras que entienden los empleadores civiles, y vas a revisar el resultado.",
    "Cada lección toma unos cinco minutos: lee, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Elige una función que hayas cumplido en el servicio militar. Usa un asistente de IA para reescribirla como tres puntos de currículum civil, pide una mejora, busca tu puesto militar en el Military Crosswalk de O*NET para revisar los puestos civiles que sugiere y quita cualquier dato privado o sensible antes de guardar los puntos.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veteranos y militares en transición que buscan trabajo civil. Las edades y los grados varían mucho; la mayoría tiene buenas habilidades de trabajo, pero las describe en términos militares.",
    startingPoint: "Se sienten cómodos con órdenes, procedimientos y estándares, y con un teléfono inteligente o una computadora. Han usado poco o nada los asistentes de IA y aún no están acostumbrados a describir sus funciones militares con palabras civiles.",
    gap: "Los empleadores civiles leen los currículums en su propio lenguaje y cada vez más esperan que los trabajadores usen herramientas de IA. Necesitan usar con seguridad un asistente de IA gratuito para traducir su servicio a lenguaje de empleo civil y revisar los resultados con fuentes oficiales de empleo, para que se entienda su experiencia y no los engañen respuestas equivocadas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; no se supone experiencia técnica",
      "Dispositivos: un teléfono inteligente o una computadora con internet; algunos usan computadoras compartidas de la base, de la biblioteca o del TAP",
      "Tiempo: lecciones de unos 5 minutos que caben entre las citas de transición y el trabajo",
      "OPSEC y privacidad: nada de información clasificada, controlada ni de misiones, y ningún número de Seguro Social ni de expediente del VA en ninguna instrucción",
      "Los sueldos y las reglas de los programas cambian, así que se revisan las fuentes oficiales (O*NET, BLS, VA) antes de actuar"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista de tareas de trabajo", action: "explicar qué es la IA, nombrar formas en que está cambiando los empleos civiles e identificar qué habilidades no reemplaza", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Con un teléfono o una computadora", action: "abrir un asistente de IA gratuito y escribir una instrucción con tarea, condiciones y estándar", standard: "de modo que la primera respuesta sea útil" },
    { id: "O3", condition: "Antes de enviar cualquier instrucción", action: "revisarla en busca de información privada y sensible y quitarla o cambiarla por un marcador", standard: "sin compartir números privados ni detalles clasificados, controlados o de misiones" },
    { id: "O4", condition: "Con el código o el nombre de tu puesto militar", action: "buscar tu puesto militar en el Military Crosswalk de O*NET y hacer una lista de empleos civiles que coinciden", standard: "con al menos tres puestos civiles y dos tareas de cada uno" },
    { id: "O5", condition: "Con una función de tu servicio", action: "usar un asistente de IA para reescribir la función como puntos de currículum civil con un tamaño y un resultado", standard: "sin jerga militar y con cada afirmación cierta" },
    { id: "O6", condition: "Con una respuesta de la IA sobre empleos, sueldos o programas", action: "revisar la respuesta con fuentes oficiales y elegir una habilidad y un programa para tu siguiente paso", standard: "antes de usarla" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Lo básico de la IA para la misión que viene",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es la IA y cómo está cambiando el trabajo",
          minutes: 4,
          goal: "Explicar con tus propias palabras qué es la IA y nombrar dos formas en que está cambiando los empleos civiles.",
          text: [
            "La IA, o inteligencia artificial, son programas de computadora que hacen tareas que normalmente necesitan a una persona, como escribir, resumir, ordenar información o detectar patrones. Un asistente de IA es uno con el que conversas con palabras de todos los días. Algunos gratuitos muy conocidos son ChatGPT, Microsoft Copilot y Google Gemini.",
            "En el trabajo civil, la IA ya se usa para escribir borradores de correos e informes, resumir documentos largos, planear horarios y rutas, responder preguntas de clientes y encontrar problemas en los datos. En logística ayuda a prever los suministros; en mantenimiento ayuda a detectar piezas que probablemente fallen; en las oficinas escribe primeros borradores.",
            "La IA no reemplaza el criterio, el liderazgo ni la responsabilidad. Esas son habilidades que desarrollaste en uniforme. Los empleadores buscan personas que usen la IA como herramienta y sigan tomando la decisión, revisando el trabajo y dirigiendo al equipo."
          ],
          words: [["IA", "abreviatura de inteligencia artificial: programas de computadora que hacen tareas que normalmente necesitan a una persona."], ["Asistente de IA", "un programa de IA con el que conversas escribiendo o hablando."]],
          slides: [
            { title: "La IA es...", bullets: ["Programas que escriben, resumen, ordenan y detectan patrones", "Asistentes con los que conversas: ChatGPT, Copilot, Gemini"] },
            { title: "Cómo la IA está cambiando el trabajo", bullets: ["Borradores de correos e informes", "Prever suministros y planear rutas", "Detectar equipo que probablemente falle"] },
            { title: "Lo que la IA no reemplaza", bullets: ["El criterio y la responsabilidad", "El liderazgo", "Revisar el trabajo: tú sigues tomando la decisión"] }
          ],
          tryIt: "Anota dos tareas de tu puesto militar y dos tareas de un empleo civil que quieras. Junto a cada una, escribe una forma en que la IA podría ayudar.",
          youCanNow: "explicar qué es la IA, nombrar formas en que está cambiando el trabajo y decir qué habilidades no reemplaza.",
          quickCheck: [
            { objective: "O1", q: "¿En qué tarea es mejor la IA en un empleo civil?", options: ["Redactar una primera versión de un informe", "Hacerse responsable de la decisión final", "Ganarse la confianza de un equipo", "Dirigir a las personas en una crisis"], answer: 0, why: "La IA puede redactar y ordenar información, pero el criterio, la confianza y el liderazgo siguen siendo de las personas." },
            { objective: "O1", q: "Un compañero dice que la IA hará inútiles tus habilidades de liderazgo. ¿Qué le dices?", options: ["Le das la razón y dejas de mencionar el liderazgo", "Le dices que la IA no reemplaza el criterio, el liderazgo ni la responsabilidad", "Le dices que la IA solo se usa en el ejército", "Le dices que la IA siempre tiene razón, así que las personas solo escriben"], answer: 1, why: "La IA cambia las tareas, pero las personas siguen dirigiendo, decidiendo y siendo responsables." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abrir un asistente y dar una orden clara",
          minutes: 5,
          goal: "Abrir un asistente de IA gratuito y escribir una instrucción con tarea, condiciones y estándar.",
          text: [
            "En el teléfono, instala la app oficial desde la tienda de apps (OpenAI para ChatGPT, Microsoft para Copilot, Google para Gemini). En la computadora, escribe chatgpt.com, copilot.microsoft.com o gemini.google.com en el navegador.",
            "Lo que escribes se llama instrucción (prompt). Ya sabes dar una orden clara. Usa la misma idea: la tarea (lo que necesitas), las condiciones (tu situación) y el estándar (cómo se ve una buena respuesta: largo, formato, tono).",
            "Ejemplo: \"Tarea: haz una lista de empleos civiles que usen habilidades de mantenimiento de vehículos. Condiciones: fui mecánico de vehículos ligeros de ruedas en el Ejército durante 6 años. Estándar: 5 puestos, una línea cada uno, palabras sencillas.\""
          ],
          steps: ["Abre la app o el sitio web oficial.", "Escribe la tarea: lo que necesitas.", "Agrega las condiciones: tu situación, sin datos privados.", "Agrega el estándar: largo, formato y tono.", "Envíala y lee la respuesta."],
          words: [["Instrucción (prompt)", "lo que escribes o dices a un asistente de IA para pedirle algo."], ["Formato", "la forma de la respuesta, como una lista, una tabla o un párrafo corto."]],
          slides: [
            { title: "Dónde abrirlo", bullets: ["Teléfono: app oficial de la tienda de apps", "Computadora: chatgpt.com, copilot.microsoft.com, gemini.google.com"] },
            { title: "Una instrucción es una orden clara", bullets: ["Tarea: lo que necesitas", "Condiciones: tu situación", "Estándar: cómo se ve una buena respuesta"] },
            { title: "Ejemplo", bullets: ["Tarea: empleos civiles con habilidades de mantenimiento de vehículos", "Condiciones: 6 años como mecánico de vehículos ligeros", "Estándar: 5 puestos, una línea cada uno, palabras sencillas"] }
          ],
          tryIt: "Abre un asistente de IA gratuito. Escribe una instrucción con tarea, condiciones y estándar para pedir cinco puestos civiles que usen las habilidades de tu puesto militar. Lee la respuesta.",
          youCanNow: "abrir un asistente de IA gratuito y escribir una instrucción con tarea, condiciones y estándar.",
          quickCheck: [
            { objective: "O2", q: "En una instrucción de \"orden clara\", ¿qué es la tarea?", options: ["Tus datos privados", "Qué tan larga debe ser la respuesta", "Lo que quieres que haga la IA", "El nombre de la herramienta de IA"], answer: 2, why: "La tarea es el trabajo que le das a la IA; las condiciones y el estándar vienen después." },
            { objective: "O2", q: "Quieres ideas de empleos civiles de un asistente de IA. ¿Qué instrucción envías?", options: ["\"¿Empleos?\"", "\"Dime todo sobre el trabajo.\"", "\"Escribe toda la historia de mi vida.\"", "\"Tarea: haz una lista de empleos civiles. Condiciones: 4 años como especialista en abastecimiento. Estándar: 5 puestos, una línea cada uno.\""], answer: 3, why: "Una instrucción con tarea, condiciones y estándar da una primera respuesta útil." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dejar fuera la información privada y sensible",
          minutes: 5,
          goal: "Revisar una instrucción en busca de información privada o sensible y quitarla antes de enviarla.",
          text: [
            "Los asistentes de IA públicos pueden guardar lo que escribes. Nunca escribas tu número de Seguro Social, los números de tu DD-214 (el documento de tu servicio y baja), los números de expediente o de reclamo del VA (el Departamento de Asuntos de Veteranos), números de banco o de tarjeta, contraseñas ni datos médicos que no quieras que se compartan.",
            "Aplica la misma disciplina que usabas para la seguridad de las operaciones (OPSEC). No escribas información clasificada o controlada, ubicaciones de unidades, detalles de misiones ni nada que te hayan dicho que no compartas. Describe tu trabajo en términos generales: \"supervisé un equipo de mantenimiento de 12 personas\" está bien; los nombres de unidades y las misiones no hacen falta.",
            "Si necesitas un número en un documento, escribe un marcador como \"[mi número]\" y llénalo tú después, sin conexión."
          ],
          steps: ["Lee tu instrucción antes de enviarla.", "Quita números personales, datos de cuentas y contraseñas.", "Quita detalles clasificados, controlados o de misiones.", "Usa un marcador como \"[mi número]\" donde haga falta."],
          words: [["OPSEC", "seguridad de las operaciones: proteger información que un adversario podría usar."], ["Marcador", "un sustituto como \"[mi número]\" que tú reemplazas después."], ["DD-214", "el documento que registra tu servicio y tu baja."]],
          slides: [
            { title: "Nunca escribas en una IA pública", bullets: ["Números de Seguro Social, DD-214 o expediente del VA", "Números de banco o de tarjeta y contraseñas", "Datos médicos privados"] },
            { title: "La OPSEC sigue aplicando", bullets: ["Nada de información clasificada o controlada", "Nada de ubicaciones de unidades ni detalles de misiones", "Describe tu trabajo en términos generales"] },
            { title: "Usa un marcador", bullets: ["Escribe \"[mi número]\" en su lugar", "Llénalo tú después, sin conexión"] }
          ],
          tryIt: "Escribe una instrucción que describa tu último puesto militar de una forma que podrías compartir con cualquier empleador. Léela línea por línea y quita todo lo privado o sensible antes de enviarla.",
          youCanNow: "revisar una instrucción en busca de información privada y sensible y quitarla antes de enviarla.",
          quickCheck: [
            { objective: "O3", q: "Estás redactando una carta de presentación con IA y necesitas tu número de teléfono en ella. ¿Qué haces?", options: ["Escribir el número real para que la carta quede lista", "Escribir \"[mi teléfono]\" y poner el número real tú después", "Escribir tu número de Seguro Social en su lugar", "Pedirle a la IA que invente un número"], answer: 1, why: "Un marcador te da la ayuda sin poner un número privado en la IA." },
            { objective: "O3", q: "¿Qué dato es seguro poner en una instrucción a una IA pública?", options: ["\"Capacité a 8 nuevos miembros del equipo en revisiones de seguridad\"", "Las fechas y el lugar de despliegue de tu unidad", "Detalles de una reunión informativa clasificada", "Tu número de expediente del VA"], answer: 0, why: "Las funciones generales con números están bien; los detalles de misiones y los números privados se quedan fuera." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lo básico de la IA para la misión que viene",
        questions: [
          { objective: "O1", q: "¿Qué describe mejor a un asistente de IA?", options: ["Un reclutador que lee tus mensajes", "Un programa de computadora con el que conversas con palabras de todos los días", "Una oficina de beneficios del gobierno", "Una red militar segura"], answer: 1, why: "Un asistente de IA es un programa al que le escribes o le hablas y que te responde por escrito." },
          { objective: "O1", q: "¿Qué habilidad NO reemplaza la IA en el trabajo?", options: ["Escribir el borrador de un correo", "Resumir un informe largo", "El criterio y la responsabilidad por la decisión", "Ordenar una lista"], answer: 2, why: "La IA puede escribir borradores y ordenar, pero una persona sigue tomando la decisión y respondiendo por el resultado." },
          { objective: "O2", q: "En la instrucción de \"orden clara\", ¿qué son las condiciones?", options: ["Tu situación, sin datos privados", "El largo y el formato de la respuesta", "El nombre de la app", "Tu contraseña"], answer: 0, why: "Las condiciones describen tu situación para que el asistente ajuste su respuesta a ti." },
          { objective: "O3", q: "¿Qué dato está bien escribir en un asistente de IA público?", options: ["El número de tu DD-214", "La ubicación actual de tu unidad", "\"Supervisé un equipo de mantenimiento de 12 personas\"", "Tu número de reclamo del VA"], answer: 2, why: "Una descripción general de tu trabajo es segura; los números y los detalles de misiones no." },
          { objective: "O3", q: "Necesitas tu número de expediente del VA en una carta que estás escribiendo con IA. ¿Qué haces?", options: ["Escribir el número real", "Escribir la mitad", "Pedirle a la IA que lo adivine", "Escribir \"[mi número]\" y llenarlo tú después"], answer: 3, why: "Un marcador te deja recibir ayuda sin compartir un número privado." }
        ]
      }
    },
    {
      name: "Capítulo 2: Traducir tu servicio al trabajo civil",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar los empleos civiles que coinciden con tu servicio",
          minutes: 5,
          goal: "Buscar tu puesto militar en el Military Crosswalk de O*NET y hacer una lista de empleos civiles que coinciden.",
          text: [
            "O*NET OnLine, del Departamento de Trabajo de EE. UU., tiene una búsqueda llamada Military Crosswalk (equivalencias militares). Eliges tu rama (MOS del Ejército o de la Infantería de Marina, rating de la Armada o la Guardia Costera, AFSC de la Fuerza Aérea, SFSC de la Fuerza Espacial), escribes tu código o el nombre de tu puesto, y te muestra las ocupaciones civiles que coinciden.",
            "Cada ocupación civil en O*NET muestra sus tareas, herramientas y habilidades. Ese es el lenguaje que usan los empleadores. Después le puedes pedir a un asistente de IA que te explique esos empleos con palabras sencillas, pero la lista en sí viene de la fuente oficial.",
            "CareerOneStop, también patrocinado por el Departamento de Trabajo, tiene un Veterans Job Matcher (buscador de empleos para veteranos) que hace una búsqueda parecida. Prueba los dos y compara."
          ],
          steps: ["Entra a onetonline.org y abre la búsqueda Military Crosswalk.", "Elige tu rama.", "Escribe tu código (por ejemplo 88M o un rating de la Armada) o el nombre de tu puesto.", "Abre dos o tres ocupaciones civiles que coincidan y lee sus tareas.", "Anota los puestos que te interesan."],
          words: [["MOS / rating / AFSC", "el código de tu puesto militar en el Ejército y la Infantería de Marina, la Armada y la Guardia Costera, y la Fuerza Aérea."], ["Crosswalk (equivalencias)", "una herramienta que relaciona un puesto militar con empleos civiles."], ["O*NET", "la base de datos del Departamento de Trabajo sobre empleos civiles y las habilidades que necesitan."]],
          slides: [
            { title: "Military Crosswalk de O*NET", bullets: ["A cargo del Departamento de Trabajo de EE. UU.", "Elige tu rama y escribe tu código o puesto", "Mira las ocupaciones civiles que coinciden"] },
            { title: "Lee las tareas civiles", bullets: ["Cada ocupación muestra tareas, herramientas y habilidades", "Ese es el lenguaje que usan los empleadores"] },
            { title: "Prueba también", bullets: ["Veterans Job Matcher de CareerOneStop", "Compara las dos listas"] }
          ],
          sources: [{ name: "O*NET OnLine: búsqueda Military Crosswalk", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "Departamento de Trabajo de EE. UU., VETS: encontrar empleo", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Busca tu MOS, rating o AFSC en el Military Crosswalk de O*NET. Anota tres puestos civiles que sugiere y dos tareas de cada uno.",
          youCanNow: "usar el Military Crosswalk de O*NET para encontrar empleos civiles que coinciden con tu puesto militar.",
          quickCheck: [
            { objective: "O4", q: "¿Qué escribes en el Military Crosswalk de O*NET para encontrar empleos que coinciden?", options: ["Tu número de Seguro Social", "Tu dirección de casa", "Tu empresa civil favorita", "El código o el nombre de tu puesto militar"], answer: 3, why: "El Crosswalk busca por código o nombre del puesto militar y muestra las ocupaciones civiles que coinciden." },
            { objective: "O4", q: "El Crosswalk muestra varios empleos civiles para tu código. ¿Qué haces después?", options: ["Elegir el primero sin leer", "Ignorar la lista y preguntarle a un amigo", "Anotar tres puestos y dos tareas de cada uno", "Cerrarlo y adivinar un puesto"], answer: 2, why: "Anotar los puestos y sus tareas te da palabras civiles para usar en tu currículum." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reescribir una función militar con palabras civiles",
          minutes: 5,
          goal: "Usar la IA para reescribir una función militar como un punto de currículum civil con un resultado.",
          text: [
            "Los gerentes de contratación civiles quizás no sepan qué es un sargento de pelotón, un PMCS o un CONEX. Tu trabajo es decir lo mismo con sus palabras: lo que hiciste, de qué tamaño era y qué resultado tuvo.",
            "Dale a la IA tu función en términos sencillos y el empleo civil al que apuntas. Ejemplo de instrucción: \"Reescribe esto para un currículum de supervisor de almacén: estaba a cargo de un cuarto de suministros, 300 artículos, entregué equipo a 120 soldados, cero pérdidas en 2 inventarios. Dame 3 puntos que empiecen con un verbo fuerte e incluyan números.\"",
            "Luego mejóralo con preguntas de seguimiento: \"Quita la jerga militar.\" \"Usa las palabras de esta oferta de empleo.\" \"Hazlo más corto.\" La primera respuesta es un borrador; tú eres el editor."
          ],
          steps: ["Escribe la función con palabras sencillas: qué, de qué tamaño, qué resultado.", "Di el empleo civil al que apuntas.", "Pide 3 puntos con verbos fuertes y números.", "Pide un cambio, como \"quita la jerga militar\".", "Léelo y asegúrate de que cada palabra sea cierta."],
          words: [["Punto de currículum", "una línea corta en un currículum que muestra algo que hiciste y su resultado."], ["Sigla", "una palabra formada con las primeras letras, como PMCS; los civiles muchas veces no conocen las militares."]],
          slides: [
            { title: "Dilo con sus palabras", bullets: ["Lo que hiciste", "De qué tamaño era: personas, dinero, equipo", "Qué resultado tuvo"] },
            { title: "Ejemplo de instrucción", bullets: ["\"Reescribe para un currículum de supervisor de almacén\"", "Cuarto de suministros, 300 artículos, 120 soldados, cero pérdidas", "\"3 puntos, verbos fuertes, números\""] },
            { title: "Luego edita", bullets: ["\"Quita la jerga militar.\"", "\"Usa las palabras de esta oferta de empleo.\"", "Revisa que cada palabra sea cierta"] }
          ],
          tryIt: "Elige una función de tu servicio. Pídele a un asistente de IA que la reescriba como tres puntos de currículum civil para un puesto de la lección 4. Pídele que quite la jerga militar.",
          youCanNow: "reescribir una función militar como puntos de currículum civil claros, con números y resultados.",
          quickCheck: [
            { objective: "O5", q: "¿Qué punto de currículum está escrito para un empleador civil?", options: ["\"Dirigí un equipo de 10 personas que redujo un 20% el tiempo de reparación de equipos\"", "\"Me desempeñé como NCOIC del parque automotor según el SOP\"", "\"Realicé diversas funciones asignadas\"", "\"Estuve a cargo de cosas\""], answer: 0, why: "Usa palabras sencillas y muestra lo que hiciste, de qué tamaño era y el resultado." },
            { objective: "O5", q: "El punto de la IA todavía dice \"CONUS\" y \"PCS\". ¿Qué le pides después?", options: ["\"Agrega más siglas.\"", "\"Hazlo más largo.\"", "\"Quita la jerga militar y usa palabras civiles sencillas.\"", "\"Escríbelo como un poema.\""], answer: 2, why: "Una pregunta de seguimiento que pide quitar la jerga convierte el borrador en palabras que entiende un lector civil." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Revisar la respuesta y planear tu siguiente habilidad",
          minutes: 5,
          goal: "Revisar una respuesta de la IA con fuentes oficiales y elegir una habilidad para desarrollar después.",
          text: [
            "La IA puede inventar cosas: un puesto que no encaja, una certificación que no existe o una cifra de sueldo equivocada. Esto se llama alucinación. Revisa los puestos en O*NET, y revisa el sueldo y las perspectivas de empleo en el Occupational Outlook Handbook (Manual de perspectivas ocupacionales) de la Oficina de Estadísticas Laborales (bls.gov/ooh).",
            "Asegúrate de que tus puntos sean ciertos. Nunca dejes que la IA infle tu rango, tus números o tus condecoraciones. Un empleador puede revisarlo, y la confianza es difícil de recuperar.",
            "Luego planea una habilidad para desarrollar. La ayuda oficial gratuita incluye el programa Personalized Career Planning and Guidance del VA (orientación profesional gratuita para veteranos y militares que califican) y el Transition Assistance Program (Programa de Asistencia para la Transición) del Departamento de Trabajo. Para formación en alta tecnología, el programa VET TEC 2.0 del VA paga ciertos cursos de tecnología sin título universitario para veteranos que califican. Revisa los requisitos actuales en va.gov."
          ],
          steps: ["Revisa cada puesto en O*NET.", "Revisa el sueldo y las perspectivas en el Occupational Outlook Handbook.", "Asegúrate de que cada número y afirmación de tus puntos sea cierto.", "Elige una habilidad para desarrollar y un programa oficial que pueda ayudar."],
          words: [["Alucinación", "cuando una IA escribe algo que suena cierto pero es inventado."], ["Occupational Outlook Handbook", "una guía gratuita de la Oficina de Estadísticas Laborales sobre sueldo, crecimiento del empleo y cómo entrar a cada trabajo."]],
          slides: [
            { title: "Revisa las respuestas de la IA", bullets: ["Puestos: O*NET", "Sueldo y perspectivas: bls.gov/ooh", "Nunca infles rango, números ni condecoraciones"] },
            { title: "Ayuda oficial gratuita", bullets: ["VA: Personalized Career Planning and Guidance", "DOL: Transition Assistance Program (TAP)", "VA VET TEC 2.0 para formación en alta tecnología"] },
            { title: "Tu siguiente movimiento", bullets: ["Elige una habilidad para desarrollar", "Elige un programa que pueda ayudar", "Revisa los requisitos en va.gov"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
            { name: "VA: Personalized Career Planning and Guidance (orientación profesional)", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "Departamento de Trabajo de EE. UU.: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" }
          ],
          tryIt: "Tarea final: toma tus tres puntos de la lección 5. Revisa los puestos en el Military Crosswalk de O*NET, pídele a la IA una mejora, quita cualquier dato privado o sensible y guarda los puntos finales.",
          youCanNow: "revisar respuestas de la IA sobre carreras con fuentes oficiales y elegir una habilidad y un programa para tu siguiente paso.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una alucinación de la IA?", options: ["Una respuesta de la IA que siempre es correcta", "Una nueva herramienta de IA para veteranos", "Una forma de hacer más cortas las instrucciones", "Algo que escribe una IA que suena cierto pero es inventado"], answer: 3, why: "La IA puede inventar cosas y sonar segura, así que revisas los datos con fuentes oficiales." },
            { objective: "O6", q: "Una IA te dice el sueldo promedio de un empleo civil. ¿Qué haces antes de usarlo?", options: ["Ponerlo en tu currículum", "Revisarlo en el Occupational Outlook Handbook de la Oficina de Estadísticas Laborales", "Preguntarle a la IA si está segura", "Compartirlo con tus amigos como un hecho"], answer: 1, why: "Los sueldos se sacan de fuentes oficiales como el Occupational Outlook Handbook, no de la IA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Traducir tu servicio al trabajo civil",
        questions: [
          { objective: "O4", q: "¿Qué hace el Military Crosswalk de O*NET?", options: ["Relaciona el código de tu puesto militar con ocupaciones civiles", "Presenta tu reclamo al VA", "Publica tu currículum para los empleadores", "Paga la formación"], answer: 0, why: "Escribes tu MOS, rating o AFSC y te muestra empleos civiles que coinciden." },
          { objective: "O5", q: "¿Qué punto de currículum es mejor para un empleador civil?", options: ["\"Hice PMCS en MTV\"", "\"Di mantenimiento a 40 camiones con revisiones preventivas; bajé las averías un 30%\"", "\"Estuve en el taller de vehículos\"", "\"Hooah\""], answer: 1, why: "Usa palabras civiles, números y un resultado." },
          { objective: "O5", q: "El borrador de la IA agrega una condecoración que no ganaste. ¿Qué haces?", options: ["Dejarla, suena bien", "Hacerla más importante", "Quitarla; cada afirmación debe ser cierta", "Preguntarle a un amigo si está bien"], answer: 2, why: "Las afirmaciones infladas se pueden revisar y pueden costarte el empleo." },
          { objective: "O6", q: "¿Dónde revisas el sueldo y las perspectivas de un empleo civil?", options: ["Una publicación en redes sociales", "La primera respuesta de la IA", "Un anuncio emergente", "El Occupational Outlook Handbook de la Oficina de Estadísticas Laborales"], answer: 3, why: "El Occupational Outlook Handbook es la fuente oficial de sueldo y perspectivas." },
          { objective: "O6", q: "¿Qué programa del VA ofrece orientación profesional gratuita a los veteranos que califican?", options: ["Personalized Career Planning and Guidance", "El Military Crosswalk", "Google Gemini", "El Occupational Outlook Handbook"], answer: 0, why: "El VA presenta Personalized Career Planning and Guidance como orientación profesional y educativa gratuita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la IA y la fuerza laboral del futuro",
    questions: [
      { objective: "O1", q: "La mejor descripción de la IA es:", options: ["Programas de computadora que hacen tareas que normalmente necesitan a una persona", "Una nueva rama de las fuerzas armadas", "Un tipo de teléfono", "Una bolsa de trabajo del gobierno"], answer: 0, why: "Los programas de IA escriben, resumen, ordenan y detectan patrones." },
      { objective: "O1", q: "¿Cuál es una forma en que se usa la IA en la logística civil?", options: ["Firmar contratos por la empresa", "Prever los suministros", "Contratar gerentes", "Manejar todos los camiones"], answer: 1, why: "La IA ayuda a prever qué suministros se van a necesitar." },
      { objective: "O1", q: "Cuando se usa la IA en el trabajo, ¿quién es responsable de la decisión?", options: ["La IA", "La empresa de software", "La persona que la usa", "Nadie"], answer: 2, why: "La IA es una herramienta; la persona sigue tomando la decisión." },
      { objective: "O2", q: "¿Qué dirección web abre un asistente de IA gratuito?", options: ["vetjobs.win", "freecash.gift", "army.xyz", "gemini.google.com"], answer: 3, why: "gemini.google.com es la dirección oficial de Google para Gemini." },
      { objective: "O2", q: "En una instrucción de \"orden clara\", el estándar es:", options: ["Cómo se ve una buena respuesta: largo, formato, tono", "Tu rango", "Tu contraseña", "La tienda de apps"], answer: 0, why: "El estándar le dice al asistente cómo debe verse la respuesta." },
      { objective: "O2", q: "¿Qué instrucción dará la respuesta más útil?", options: ["\"empleos\"", "\"Tarea: empleos civiles que usen mis habilidades. Condiciones: 6 años como mecánico de vehículos. Estándar: 5 puestos, una línea cada uno.\"", "\"ayúdame\"", "\"cosas militares\""], answer: 1, why: "Da la tarea, las condiciones y el estándar." },
      { objective: "O3", q: "¿Qué NUNCA debes escribir en un asistente de IA público?", options: ["\"Hazlo más corto\"", "\"Dirigí un equipo de 8\"", "Tu número de Seguro Social", "\"Supervisor de almacén\""], answer: 2, why: "Los números de Seguro Social son privados y nunca deben ir en una IA pública." },
      { objective: "O3", q: "La OPSEC en una conversación con IA civil significa:", options: ["Compartir detalles de misiones para obtener mejores respuestas", "Escribir la ubicación de tu unidad", "Usar tu rango como contraseña", "Dejar fuera la información clasificada, controlada y de misiones"], answer: 3, why: "La misma disciplina protege la información sensible fuera del servicio." },
      { objective: "O3", q: "Un marcador como \"[mi número]\" te permite:", options: ["Recibir ayuda sin escribir el número real", "Ocultarle la IA a tu empleador", "Recibir tu pago más rápido", "Saltarte el paso de revisión"], answer: 0, why: "Tú llenas el número real después, sin conexión." },
      { objective: "O4", q: "El Military Crosswalk de O*NET está a cargo de:", options: ["Un reclutador privado", "El Departamento de Trabajo de EE. UU.", "Tu antigua unidad", "Una empresa de IA"], answer: 1, why: "O*NET OnLine es un sitio del Departamento de Trabajo." },
      { objective: "O4", q: "En el Military Crosswalk, un veterano de la Armada buscaría por:", options: ["Código postal", "Número de Seguro Social", "Código de rating o nombre del puesto", "Fecha de baja"], answer: 2, why: "Eliges la rama y escribes tu rating o el nombre de tu puesto." },
      { objective: "O4", q: "Otra herramienta patrocinada por el Departamento de Trabajo que relaciona puestos militares con carreras civiles es:", options: ["Un sitio de lotería", "Una app de tarjetas de crédito", "Un videojuego", "El Veterans Job Matcher de CareerOneStop"], answer: 3, why: "El Veterans Job Matcher de CareerOneStop conecta ocupaciones militares con carreras civiles." },
      { objective: "O5", q: "Un buen punto de currículum civil incluye:", options: ["Lo que hiciste, de qué tamaño era y el resultado", "Solo siglas militares", "La misión de tu unidad", "La dirección de tu casa"], answer: 0, why: "Los empleadores civiles buscan acción, tamaño y resultados." },
      { objective: "O5", q: "¿Qué pregunta de seguimiento ayuda a traducir un borrador para civiles?", options: ["\"Agrega más siglas.\"", "\"Quita la jerga militar.\"", "\"Agrega mi número del DD-214.\"", "\"Inventa una condecoración.\""], answer: 1, why: "Quitar la jerga hace tu experiencia clara para los lectores civiles." },
      { objective: "O5", q: "El primer borrador de la IA de tus puntos es:", options: ["Final y perfecto", "Algo que envías sin leer", "Un borrador que editas y revisas", "Siempre incorrecto"], answer: 2, why: "Tú eres el editor; la primera respuesta es un borrador." },
      { objective: "O6", q: "Cuando la IA escribe algo que suena cierto pero es inventado, se llama:", options: ["Una sesión informativa", "Un crosswalk", "Un marcador", "Una alucinación"], answer: 3, why: "Ese es el nombre común de las respuestas inventadas de la IA." },
      { objective: "O6", q: "¿Dónde debes revisar el sueldo de un empleo antes de confiar en un número de la IA?", options: ["El Occupational Outlook Handbook de la Oficina de Estadísticas Laborales", "Un mensaje de un desconocido", "La segunda respuesta de la IA", "Un meme"], answer: 0, why: "El Occupational Outlook Handbook da cifras oficiales de sueldo y perspectivas." },
      { objective: "O6", q: "El programa VET TEC 2.0 del VA ayuda a los veteranos que califican con:", options: ["Préstamos para vivienda", "Formación en alta tecnología sin título universitario", "Atención médica", "Reparación de autos"], answer: 1, why: "VET TEC 2.0 paga ciertos programas de formación en alta tecnología sin título universitario." },
      { objective: "O6", q: "¿Qué programa del Departamento de Trabajo ayuda a los militares a pasar al trabajo civil?", options: ["Solo el Crosswalk de O*NET", "Google Gemini", "El Transition Assistance Program (TAP)", "Un curso intensivo privado"], answer: 2, why: "TAP da a los militares en transición información, herramientas y formación." },
      { objective: "O6", q: "Antes de guardar tus puntos de currículum finales, deberías:", options: ["Agregar tu número de banco", "Inflar tus números", "Saltarte la revisión", "Revisar los puestos, asegurarte de que cada afirmación sea cierta y quitar los datos privados"], answer: 3, why: "Esa es la revisión completa: correcta, cierta y segura." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      5,
      6,
      9,
      12,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Instrucción clara",
        objective: "O2",
        notYet: "La instrucción es vaga, por ejemplo \"arregla mi currículum\".",
        meets: "La instrucción tiene tarea, condiciones y estándar.",
        exceeds: "También nombra el puesto civil, y la primera respuesta está casi lista."
      },
      {
        name: "Palabras civiles",
        objective: "O5",
        notYet: "Los puntos todavía usan jerga militar o no tienen resultado.",
        meets: "Tres puntos en palabras civiles sencillas, cada uno con lo que hiciste y un tamaño o un resultado.",
        exceeds: "Pidió una mejora y puede decir qué corrigió."
      },
      {
        name: "Puestos revisados",
        objective: "O4",
        notYet: "Los puestos se copiaron de la IA sin revisarlos.",
        meets: "Los puestos se revisaron en el Military Crosswalk de O*NET.",
        exceeds: "También revisó el sueldo o las perspectivas en el Occupational Outlook Handbook."
      },
      {
        name: "Sin datos privados ni sensibles",
        objective: "O3",
        notYet: "La instrucción o los puntos tienen un número privado o un detalle de una misión.",
        meets: "Ningún número privado y ningún detalle clasificado, controlado o de misiones.",
        exceeds: "Usó marcadores y puede explicar por qué había que quitar cada dato."
      },
      {
        name: "Cada afirmación es cierta",
        objective: "O6",
        notYet: "Un punto tiene una afirmación, un número o una condecoración que no es cierta.",
        meets: "Cada afirmación y cada número de los puntos es cierto.",
        exceeds: "Nombró una habilidad y un programa para el siguiente paso."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que dicen haber usado sus nuevos puntos en una solicitud de empleo dentro de 30 días (encuesta de seguimiento)",
      "Personas que consiguen una entrevista o una oferta de empleo civil dentro de 90 días",
      "Personas que empiezan otro curso de Koach Learn para veteranos o un programa de formación dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora con internet",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini",
      "Los sitios web gratuitos del Military Crosswalk de O*NET y del Occupational Outlook Handbook de la Oficina de Estadísticas Laborales",
      "Papel y lápiz, o una app de notas, para las tareas \"Pruébalo ahora\"",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "En una clase de transición o un centro para veteranos: hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas \"Pruébalo ahora\" hechas en vivo.",
      "Recuerda la OPSEC antes de la primera instrucción: nada de información clasificada, controlada ni de misiones, y ningún número privado.",
      "Forma parejas de distintas ramas para que se expliquen los puntos entre sí con palabras civiles sencillas.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez.",
      "Dirige a las personas al TAP y a la orientación profesional del VA para recibir ayuda individual después del curso."
    ]
  }
};
