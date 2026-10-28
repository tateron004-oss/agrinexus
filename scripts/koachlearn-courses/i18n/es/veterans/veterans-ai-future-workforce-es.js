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
  chapters: [
    {
      name: "Capítulo 1: Lo básico de la IA para la misión que viene",
      lessons: [
        {
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
          youCanNow: "explicar qué es la IA, nombrar formas en que está cambiando el trabajo y decir qué habilidades no reemplaza."
        },
        {
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
          youCanNow: "abrir un asistente de IA gratuito y escribir una instrucción con tarea, condiciones y estándar."
        },
        {
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
          youCanNow: "revisar una instrucción en busca de información privada y sensible y quitarla antes de enviarla."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lo básico de la IA para la misión que viene",
        questions: [
          { q: "¿Qué describe mejor a un asistente de IA?", options: ["Un reclutador que lee tus mensajes", "Un programa de computadora con el que conversas con palabras de todos los días", "Una oficina de beneficios del gobierno", "Una red militar segura"], answer: 1, why: "Un asistente de IA es un programa al que le escribes o le hablas y que te responde por escrito." },
          { q: "¿Qué habilidad NO reemplaza la IA en el trabajo?", options: ["Escribir el borrador de un correo", "Resumir un informe largo", "El criterio y la responsabilidad por la decisión", "Ordenar una lista"], answer: 2, why: "La IA puede escribir borradores y ordenar, pero una persona sigue tomando la decisión y respondiendo por el resultado." },
          { q: "En la instrucción de \"orden clara\", ¿qué son las condiciones?", options: ["Tu situación, sin datos privados", "El largo y el formato de la respuesta", "El nombre de la app", "Tu contraseña"], answer: 0, why: "Las condiciones describen tu situación para que el asistente ajuste su respuesta a ti." },
          { q: "¿Qué dato está bien escribir en un asistente de IA público?", options: ["El número de tu DD-214", "La ubicación actual de tu unidad", "\"Supervisé un equipo de mantenimiento de 12 personas\"", "Tu número de reclamo del VA"], answer: 2, why: "Una descripción general de tu trabajo es segura; los números y los detalles de misiones no." },
          { q: "Necesitas tu número de expediente del VA en una carta que estás escribiendo con IA. ¿Qué haces?", options: ["Escribir el número real", "Escribir la mitad", "Pedirle a la IA que lo adivine", "Escribir \"[mi número]\" y llenarlo tú después"], answer: 3, why: "Un marcador te deja recibir ayuda sin compartir un número privado." }
        ]
      }
    },
    {
      name: "Capítulo 2: Traducir tu servicio al trabajo civil",
      lessons: [
        {
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
          youCanNow: "usar el Military Crosswalk de O*NET para encontrar empleos civiles que coinciden con tu puesto militar."
        },
        {
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
          youCanNow: "reescribir una función militar como puntos de currículum civil claros, con números y resultados."
        },
        {
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
          youCanNow: "revisar respuestas de la IA sobre carreras con fuentes oficiales y elegir una habilidad y un programa para tu siguiente paso."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Traducir tu servicio al trabajo civil",
        questions: [
          { q: "¿Qué hace el Military Crosswalk de O*NET?", options: ["Relaciona el código de tu puesto militar con ocupaciones civiles", "Presenta tu reclamo al VA", "Publica tu currículum para los empleadores", "Paga la formación"], answer: 0, why: "Escribes tu MOS, rating o AFSC y te muestra empleos civiles que coinciden." },
          { q: "¿Qué punto de currículum es mejor para un empleador civil?", options: ["\"Hice PMCS en MTV\"", "\"Di mantenimiento a 40 camiones con revisiones preventivas; bajé las averías un 30%\"", "\"Estuve en el taller de vehículos\"", "\"Hooah\""], answer: 1, why: "Usa palabras civiles, números y un resultado." },
          { q: "El borrador de la IA agrega una condecoración que no ganaste. ¿Qué haces?", options: ["Dejarla, suena bien", "Hacerla más importante", "Quitarla; cada afirmación debe ser cierta", "Preguntarle a un amigo si está bien"], answer: 2, why: "Las afirmaciones infladas se pueden revisar y pueden costarte el empleo." },
          { q: "¿Dónde revisas el sueldo y las perspectivas de un empleo civil?", options: ["Una publicación en redes sociales", "La primera respuesta de la IA", "Un anuncio emergente", "El Occupational Outlook Handbook de la Oficina de Estadísticas Laborales"], answer: 3, why: "El Occupational Outlook Handbook es la fuente oficial de sueldo y perspectivas." },
          { q: "¿Qué programa del VA ofrece orientación profesional gratuita a los veteranos que califican?", options: ["Personalized Career Planning and Guidance", "El Military Crosswalk", "Google Gemini", "El Occupational Outlook Handbook"], answer: 0, why: "El VA presenta Personalized Career Planning and Guidance como orientación profesional y educativa gratuita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la IA y la fuerza laboral del futuro",
    questions: [
      { q: "La mejor descripción de la IA es:", options: ["Programas de computadora que hacen tareas que normalmente necesitan a una persona", "Una nueva rama de las fuerzas armadas", "Un tipo de teléfono", "Una bolsa de trabajo del gobierno"], answer: 0, why: "Los programas de IA escriben, resumen, ordenan y detectan patrones." },
      { q: "¿Cuál es una forma en que se usa la IA en la logística civil?", options: ["Firmar contratos por la empresa", "Prever los suministros", "Contratar gerentes", "Manejar todos los camiones"], answer: 1, why: "La IA ayuda a prever qué suministros se van a necesitar." },
      { q: "Cuando se usa la IA en el trabajo, ¿quién es responsable de la decisión?", options: ["La IA", "La empresa de software", "La persona que la usa", "Nadie"], answer: 2, why: "La IA es una herramienta; la persona sigue tomando la decisión." },
      { q: "¿Qué dirección web abre un asistente de IA gratuito?", options: ["vetjobs.win", "freecash.gift", "army.xyz", "gemini.google.com"], answer: 3, why: "gemini.google.com es la dirección oficial de Google para Gemini." },
      { q: "En una instrucción de \"orden clara\", el estándar es:", options: ["Cómo se ve una buena respuesta: largo, formato, tono", "Tu rango", "Tu contraseña", "La tienda de apps"], answer: 0, why: "El estándar le dice al asistente cómo debe verse la respuesta." },
      { q: "¿Qué instrucción dará la respuesta más útil?", options: ["\"empleos\"", "\"Tarea: empleos civiles que usen mis habilidades. Condiciones: 6 años como mecánico de vehículos. Estándar: 5 puestos, una línea cada uno.\"", "\"ayúdame\"", "\"cosas militares\""], answer: 1, why: "Da la tarea, las condiciones y el estándar." },
      { q: "¿Qué NUNCA debes escribir en un asistente de IA público?", options: ["\"Hazlo más corto\"", "\"Dirigí un equipo de 8\"", "Tu número de Seguro Social", "\"Supervisor de almacén\""], answer: 2, why: "Los números de Seguro Social son privados y nunca deben ir en una IA pública." },
      { q: "La OPSEC en una conversación con IA civil significa:", options: ["Compartir detalles de misiones para obtener mejores respuestas", "Escribir la ubicación de tu unidad", "Usar tu rango como contraseña", "Dejar fuera la información clasificada, controlada y de misiones"], answer: 3, why: "La misma disciplina protege la información sensible fuera del servicio." },
      { q: "Un marcador como \"[mi número]\" te permite:", options: ["Recibir ayuda sin escribir el número real", "Ocultarle la IA a tu empleador", "Recibir tu pago más rápido", "Saltarte el paso de revisión"], answer: 0, why: "Tú llenas el número real después, sin conexión." },
      { q: "El Military Crosswalk de O*NET está a cargo de:", options: ["Un reclutador privado", "El Departamento de Trabajo de EE. UU.", "Tu antigua unidad", "Una empresa de IA"], answer: 1, why: "O*NET OnLine es un sitio del Departamento de Trabajo." },
      { q: "En el Military Crosswalk, un veterano de la Armada buscaría por:", options: ["Código postal", "Número de Seguro Social", "Código de rating o nombre del puesto", "Fecha de baja"], answer: 2, why: "Eliges la rama y escribes tu rating o el nombre de tu puesto." },
      { q: "Otra herramienta patrocinada por el Departamento de Trabajo que relaciona puestos militares con carreras civiles es:", options: ["Un sitio de lotería", "Una app de tarjetas de crédito", "Un videojuego", "El Veterans Job Matcher de CareerOneStop"], answer: 3, why: "El Veterans Job Matcher de CareerOneStop conecta ocupaciones militares con carreras civiles." },
      { q: "Un buen punto de currículum civil incluye:", options: ["Lo que hiciste, de qué tamaño era y el resultado", "Solo siglas militares", "La misión de tu unidad", "La dirección de tu casa"], answer: 0, why: "Los empleadores civiles buscan acción, tamaño y resultados." },
      { q: "¿Qué pregunta de seguimiento ayuda a traducir un borrador para civiles?", options: ["\"Agrega más siglas.\"", "\"Quita la jerga militar.\"", "\"Agrega mi número del DD-214.\"", "\"Inventa una condecoración.\""], answer: 1, why: "Quitar la jerga hace tu experiencia clara para los lectores civiles." },
      { q: "El primer borrador de la IA de tus puntos es:", options: ["Final y perfecto", "Algo que envías sin leer", "Un borrador que editas y revisas", "Siempre incorrecto"], answer: 2, why: "Tú eres el editor; la primera respuesta es un borrador." },
      { q: "Cuando la IA escribe algo que suena cierto pero es inventado, se llama:", options: ["Una sesión informativa", "Un crosswalk", "Un marcador", "Una alucinación"], answer: 3, why: "Ese es el nombre común de las respuestas inventadas de la IA." },
      { q: "¿Dónde debes revisar el sueldo de un empleo antes de confiar en un número de la IA?", options: ["El Occupational Outlook Handbook de la Oficina de Estadísticas Laborales", "Un mensaje de un desconocido", "La segunda respuesta de la IA", "Un meme"], answer: 0, why: "El Occupational Outlook Handbook da cifras oficiales de sueldo y perspectivas." },
      { q: "El programa VET TEC 2.0 del VA ayuda a los veteranos que califican con:", options: ["Préstamos para vivienda", "Formación en alta tecnología sin título universitario", "Atención médica", "Reparación de autos"], answer: 1, why: "VET TEC 2.0 paga ciertos programas de formación en alta tecnología sin título universitario." },
      { q: "¿Qué programa del Departamento de Trabajo ayuda a los militares a pasar al trabajo civil?", options: ["Solo el Crosswalk de O*NET", "Google Gemini", "El Transition Assistance Program (TAP)", "Un curso intensivo privado"], answer: 2, why: "TAP da a los militares en transición información, herramientas y formación." },
      { q: "Antes de guardar tus puntos de currículum finales, deberías:", options: ["Agregar tu número de banco", "Inflar tus números", "Saltarte la revisión", "Revisar los puestos, asegurarte de que cada afirmación sea cierta y quitar los datos privados"], answer: 3, why: "Esa es la revisión completa: correcta, cierta y segura." }
    ]
  }
};
