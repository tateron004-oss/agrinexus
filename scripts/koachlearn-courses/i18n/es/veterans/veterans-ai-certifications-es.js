"use strict";

// Koach Learn course (Spanish translation of veterans-ai-certifications). Shape and translation rules: scripts/koachlearn-courses/README.md.
// US program and agency names (VA, GI Bill, COOL, VET TEC, VA Form 22-0803) stay in English with a short Spanish explanation.

module.exports = {
  id: "veterans-ai-certifications-es",
  lang: "es",
  translationOf: "veterans-ai-certifications",
  category: "Veterans (military)",
  name: "Certificaciones con IA para veteranos",
  skills: "Traducir un puesto militar a puestos civiles, Encontrar la certificación que piden los empleadores, Revisar lo que paga el GI Bill, Armar un plan de estudio con IA, Mostrar una certificación en el currículum",
  outcome: "elegir un empleo civil que encaje con tu experiencia militar, encontrar la certificación que piden los empleadores, revisar si el VA puede pagar el costo del examen y armar un plan de estudio semana por semana con un asistente de IA.",
  about: [
    "Ya obtuviste calificaciones en uniforme: escuelas, insignias, licencias y formación en el trabajo. Los empleadores civiles muchas veces quieren ver esas mismas habilidades como una certificación con nombre. Este curso te ayuda a elegir la correcta y a planear cómo obtenerla.",
    "Vas a traducir tu puesto militar a puestos civiles, leer ofertas de empleo reales para ver qué certificación piden, revisar las páginas oficiales del VA (el Departamento de Asuntos de Veteranos) sobre lo que puede pagar el GI Bill (los beneficios educativos del VA) y usar un asistente de IA para armar un plan de estudio y preguntas de práctica.",
    "Cada lección toma unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Una comprobación de conocimientos corta cierra cada capítulo y un examen de 20 preguntas cierra el curso. Las reglas de los beneficios cambian, así que cada dato de dinero te manda a la página oficial del VA para revisarlo."
  ],
  finalTask: "Haz un Plan de Certificación de una página: tu puesto militar y dos puestos civiles que coincidan, la certificación que más aparece en ofertas de empleo reales, si el VA puede pagar el costo del examen (con la página oficial que revisaste), un plan de estudio semana por semana hecho con un asistente de IA y la línea de currículum que vas a agregar cuando apruebes.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veteranos y militares en transición que quieren una certificación civil que demuestre las habilidades que ganaron con el uniforme, a menudo en TI, logística, mantenimiento, salud o seguridad.",
    startingPoint: "Tienen escuelas militares, insignias, licencias y formación en el trabajo, y saben usar una computadora o un teléfono inteligente. La mayoría todavía no sabe qué certificación piden los empleadores, si el VA puede pagar el costo del examen ni cómo planear el estudio junto con el trabajo y la familia.",
    gap: "Los empleadores civiles a menudo filtran por certificaciones con nombre, y una mala elección hace perder tiempo y beneficios. Necesitan elegir la certificación que piden las ofertas de empleo reales, revisar las reglas de pago del VA en las páginas oficiales y seguir un plan de estudio realista hecho con la IA, sin atajos tramposos.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Dispositivos: una computadora o un teléfono inteligente con internet y un asistente de IA gratuito",
      "Los montos de los beneficios, los formularios y las reglas de los exámenes cambian, así que se confirman en va.gov y en el sitio web de la propia entidad certificadora",
      "OPSEC: ningún detalle clasificado ni información de la unidad en ninguna instrucción a la IA",
      "Tiempo: lecciones de unos 5 minutos; el plan de estudio en sí dura semanas después del curso"
    ],
    prerequisites: "Ninguno. \"Introducción a la IA y la fuerza laboral del futuro\" ayuda a traducir primero las funciones."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con el código de tu puesto militar", action: "identificar dos o tres puestos civiles que coinciden con tu puesto militar", standard: "usando My Next Move for Veterans y sin detalles clasificados en ninguna instrucción" },
    { id: "O2", condition: "Con al menos cinco ofertas de empleo reales del puesto que buscas", action: "identificar la certificación que más piden los empleadores y confirmar sus reglas en el sitio web de la entidad certificadora", standard: "usando un conteo de las ofertas" },
    { id: "O3", condition: "Para la certificación que buscas", action: "revisar en va.gov si el VA te puede devolver el costo del examen y cómo pedirlo", standard: "anotando el límite, los beneficios que califican y el formulario según la página oficial" },
    { id: "O4", condition: "Con el temario oficial del examen, tus semanas y tus horas", action: "crear un plan de estudio semana por semana con un asistente de IA", standard: "con una meta cada semana, una semana de repaso y un examen de práctica" },
    { id: "O5", condition: "Cuando practiques para el examen", action: "usar la IA para que te haga preguntas y te explique tus errores, revisándola con el material oficial", standard: "sin usar brain dumps ni preguntas de examen filtradas" },
    { id: "O6", condition: "Cuando obtengas la certificación o estés trabajando para obtenerla", action: "escribir una línea de currículum que muestre la certificación y tu servicio juntos", standard: "con el nombre completo, la entidad certificadora y el año o la fecha del examen" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Elegir la certificación correcta",
      lessons: [
        {
          objectives: ["O1"],
          title: "Traducir tu puesto militar a puestos civiles",
          minutes: 5,
          goal: "Convertir el código de tu puesto militar en dos o tres puestos civiles.",
          text: [
            "Los gerentes de contratación civiles casi nunca saben qué significa un MOS, un rating o un AFSC. Tu primer trabajo es traducirlo a los puestos que ellos usan, como \"especialista en soporte de TI\", \"coordinador de logística\" o \"técnico de mantenimiento\".",
            "My Next Move for Veterans (mynextmove.org/vets), administrado para el Departamento de Trabajo de EE. UU., te deja escribir tu rama y el código o el nombre de tu puesto militar y ver carreras civiles con trabajo parecido.",
            "Un asistente de IA también puede ayudar. Pídele que explique tus funciones con palabras civiles y luego compara su respuesta con My Next Move. No pegues detalles clasificados, nombres de unidades ni nada que te hayan dicho que no compartas."
          ],
          steps: ["Abre mynextmove.org/vets.", "En la sección militar, elige tu rama y escribe el código o el nombre de tu puesto.", "Anota dos o tres carreras civiles que sugiera.", "Pregúntale a un asistente de IA: \"Fui 25B del Ejército (especialista en TI). Describe mis funciones con palabras civiles para una oferta de empleo.\"", "Quédate con los puestos que aparecen en los dos lugares."],
          words: [["MOS / rating / AFSC", "los códigos que usan las fuerzas armadas para los puestos militares (MOS en el Ejército y la Infantería de Marina, ratings en la Armada y la Guardia Costera, AFSC en la Fuerza Aérea)."], ["Puesto", "el nombre que un empleador le da a un empleo en una oferta de empleo."]],
          slides: [
            { title: "Los empleadores no hablan en MOS", bullets: ["Traduce tu código de puesto a puestos civiles", "Usa las palabras que usaría una oferta de empleo"] },
            { title: "My Next Move for Veterans", bullets: ["mynextmove.org/vets, para el Departamento de Trabajo", "Escribe tu rama y tu código de puesto", "Mira carreras civiles con trabajo parecido"] },
            { title: "Pídele a la IA que traduzca", bullets: ["\"Describe mis funciones de 25B con palabras civiles\"", "Compara con My Next Move", "Nunca pegues detalles clasificados ni de tu unidad"] }
          ],
          sources: [{ name: "My Next Move for Veterans (Departamento de Trabajo de EE. UU.)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Busca tu propio puesto militar en mynextmove.org/vets y pídele a un asistente de IA que describa tus funciones con palabras civiles. Anota los dos puestos civiles que aparecen en los dos.",
          youCanNow: "convertir el código de tu puesto militar en puestos civiles que un empleador reconozca.",
          quickCheck: [
            { objective: "O1", q: "¿Qué hace My Next Move for Veterans?", options: ["Muestra carreras civiles parecidas a tu puesto militar", "Paga tu certificación", "Escribe tu currículum por ti", "Reserva tu examen"], answer: 0, why: "Escribes tu puesto militar y te muestra carreras civiles parecidas." },
            { objective: "O1", q: "Le pides a una IA que describa tus funciones con palabras civiles. ¿Qué dejas fuera de la instrucción?", options: ["El nombre de tu puesto", "El número de personas que supervisaste", "El tipo de equipo al que diste mantenimiento", "Los detalles clasificados y la información de la unidad"], answer: 3, why: "Las funciones generales están bien, pero los detalles clasificados y la información de la unidad nunca van en una IA pública." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar la certificación que piden los empleadores",
          minutes: 5,
          goal: "Encontrar la certificación que más aparece en ofertas de empleo reales para el puesto que buscas.",
          text: [
            "Una certificación es una prueba de una organización externa de que aprobaste un examen sobre una habilidad. Los empleadores ponen en sus ofertas de empleo las que quieren, así que las ofertas de empleo son la mejor guía.",
            "Busca en un sitio de empleo el puesto que buscas y tu zona. Lee de cinco a diez ofertas y cuenta cada certificación que mencionan. La que más aparece suele ser tu primer objetivo.",
            "Cada rama tiene un sitio web Credentialing Opportunities On-Line (COOL, oportunidades de acreditación en línea) que relaciona los puestos militares con certificaciones. Pregunta en tu oficina de educación o busca \"COOL\" con el nombre de tu rama. Revisa siempre el sitio web de la propia entidad certificadora para conocer el examen, las reglas y el precio actuales.",
            "La IA te puede ayudar a comparar dos certificaciones, pero puede estar desactualizada. Úsala para que te explique, no para decidir precios o reglas."
          ],
          steps: ["Busca en un sitio de empleo el puesto que buscas.", "Lee de cinco a diez ofertas y haz una lista de cada certificación mencionada.", "Cuéntalas; encierra en un círculo la más común.", "Revisa el sitio COOL de tu rama para ver cómo se relaciona con tu puesto militar.", "Abre el sitio web de la propia entidad certificadora para ver los detalles actuales del examen."],
          words: [["Certificación", "una prueba de una organización externa de que aprobaste un examen sobre una habilidad."], ["Entidad certificadora", "la organización que hace el examen y da la certificación."], ["COOL", "Credentialing Opportunities On-Line, los sitios web de las fuerzas armadas que relacionan los puestos militares con credenciales civiles."]],
          slides: [
            { title: "Que decidan las ofertas de empleo", bullets: ["Lee 5-10 ofertas del puesto que buscas", "Cuenta cada certificación mencionada", "La más común es tu primer objetivo"] },
            { title: "Usa el sitio COOL de tu rama", bullets: ["Relaciona tu puesto militar con certificaciones", "Pide el enlace en tu oficina de educación"] },
            { title: "Revisa la fuente", bullets: ["El sitio web de la entidad certificadora tiene el examen actual", "La IA puede explicar, pero puede estar desactualizada"] }
          ],
          tryIt: "Lee al menos cinco ofertas de empleo reales para uno de tus puestos civiles. Haz un conteo de las certificaciones que mencionan y encierra en un círculo la más común.",
          youCanNow: "usar ofertas de empleo reales para elegir la certificación que más quieren los empleadores.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es una certificación?", options: ["Un título universitario", "Una carta de un amigo", "Una prueba de una organización externa de que aprobaste un examen de una habilidad", "Un nombre de puesto"], answer: 2, why: "Una certificación se obtiene al aprobar un examen que pone una entidad certificadora externa." },
            { objective: "O2", q: "Tres de tus cinco ofertas de empleo nombran la misma certificación. ¿Qué haces?", options: ["Elegir otra que suene más difícil", "Marcarla como tu meta y revisar sus reglas en el sitio de la entidad certificadora", "Ignorar las ofertas y preguntarle a la IA", "Sacar todas las certificaciones a la vez"], answer: 1, why: "La certificación que más nombran las ofertas reales es la que quieren los empleadores; sus reglas actuales las da la entidad certificadora." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Revisar lo que puede pagar el GI Bill",
          minutes: 5,
          goal: "Revisar en va.gov si el VA te puede devolver el costo del examen de certificación y cómo pedirlo.",
          text: [
            "El VA te puede devolver los costos de los exámenes de licencia y certificación, incluidos los cargos de registro y administración. Cuando revisamos va.gov en octubre de 2026, el límite era de no más de $2,000 por examen, y el VA descuenta lo que te devuelve de tu derecho del GI Bill. No paga el certificado en sí.",
            "Ya debes tener uno de estos beneficios: el Post-9/11 GI Bill, el Montgomery GI Bill para servicio activo o para la Reserva Seleccionada, o la Survivors' and Dependents' Educational Assistance (asistencia educativa para sobrevivientes y dependientes). Para pedir el dinero, envía el VA Form 22-0803 con el recibo del pago y tus resultados del examen o tu certificado.",
            "El VA también presenta otras formas de usar los beneficios, como cursos de preparación, programas sin título universitario y el programa VET TEC 2.0 de formación en alta tecnología, que tiene un número limitado de lugares cada año. Las reglas y los montos cambian, así que abre la página oficial antes de gastar dinero."
          ],
          steps: ["Abre va.gov y busca la página de costos de exámenes de licencia y certificación.", "Revisa que tengas uno de los beneficios del GI Bill de la lista.", "Anota el límite actual y que usa parte de tu derecho.", "Guarda el recibo del examen y tus resultados.", "Envía el VA Form 22-0803 como explica la página."],
          words: [["Derecho (entitlement)", "la cantidad de beneficio del GI Bill que te queda por usar."], ["Reembolso", "que te devuelvan dinero que ya gastaste."]],
          slides: [
            { title: "El VA puede devolver costos de examen", bullets: ["Costos de exámenes de licencia y certificación", "No más de $2,000 por examen (va.gov, oct. 2026)", "Se descuenta de tu derecho del GI Bill"] },
            { title: "Cómo pedirlo", bullets: ["Guarda el recibo y tus resultados", "Envía el VA Form 22-0803", "Revisa en va.gov dónde enviarlo"] },
            { title: "Otras opciones", bullets: ["Cursos de preparación y programas sin título universitario", "VET TEC 2.0 para alta tecnología (lugares limitados)", "Revisa siempre primero la página oficial"] }
          ],
          sources: [
            { name: "VA: costos de exámenes de licencia y certificación", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA: cómo usar tus beneficios del GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" }
          ],
          tryIt: "Abre la página de costos de exámenes de va.gov. Anota el límite actual, qué beneficios califican y el número del formulario. Luego revisa si tienes uno de esos beneficios.",
          youCanNow: "revisar en va.gov si el VA te puede devolver el costo de un examen de certificación y qué necesitas enviar.",
          quickCheck: [
            { objective: "O3", q: "¿Qué pasa con tu GI Bill cuando el VA te devuelve el costo de un examen?", options: ["No cambia nada", "Recibes derecho adicional", "Se cancela tu GI Bill", "La cantidad se descuenta de tu derecho"], answer: 3, why: "El reembolso del costo del examen usa parte de tu derecho del GI Bill." },
            { objective: "O3", q: "Una publicación de un foro dice que el VA paga completo cualquier examen. ¿Qué haces?", options: ["Revisar las reglas actuales en la página oficial de va.gov sobre costos de examen", "Reservar el examen más caro", "Creerle a la publicación porque a mucha gente le gustó", "Pedirle a la IA que lo confirme"], answer: 0, why: "Las reglas y los límites de los beneficios cambian, así que los confirmas en la página oficial de va.gov." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir la certificación correcta",
        questions: [
          { objective: "O1", q: "Un gerente de contratación no sabe qué significa tu MOS. ¿Qué deberías hacer?", options: ["Escribir el código con letras más grandes", "Quitar el puesto de tu currículum", "Traducirlo a puestos y funciones civiles", "Pedirle que lo busque"], answer: 2, why: "Los puestos y funciones civiles son palabras que el empleador ya entiende." },
          { objective: "O1", q: "¿Qué sitio gratuito te deja escribir un código de puesto militar y ver carreras civiles?", options: ["My Next Move for Veterans", "Una app de redes sociales", "Una tienda de videojuegos", "Un sitio del clima"], answer: 0, why: "mynextmove.org/vets es la herramienta del Departamento de Trabajo para esto." },
          { objective: "O2", q: "¿Cómo encuentras qué certificación quieren más los empleadores?", options: ["Eligiendo la más cara", "Preguntándole a un amigo cualquiera", "Presentando todos los exámenes a la vez", "Contando las certificaciones que mencionan las ofertas de empleo reales"], answer: 3, why: "Las ofertas de empleo muestran lo que piden los empleadores." },
          { objective: "O2", q: "¿Dónde revisas las reglas y el precio actuales del examen de una certificación?", options: ["Solo en un chat de IA", "En el sitio web de la propia entidad certificadora", "En una publicación vieja de un foro", "En un anuncio emergente"], answer: 1, why: "La organización que da el examen tiene los detalles actuales." },
          { objective: "O3", q: "Según va.gov en octubre de 2026, ¿qué es cierto sobre el pago de costos de exámenes de certificación por parte del VA?", options: ["El VA paga el documento del certificado", "El VA puede devolver hasta $2,000 por examen y usa parte de tu derecho", "No hay límite", "Cualquiera lo puede pedir sin un beneficio del GI Bill"], answer: 1, why: "La página decía no más de $2,000 por examen, descontados de tu derecho." }
        ]
      }
    },
    {
      name: "Capítulo 2: Obtener la certificación",
      lessons: [
        {
          objectives: ["O4"],
          title: "Armar un plan de estudio con IA",
          minutes: 5,
          goal: "Usar un asistente de IA para convertir el temario oficial del examen en un plan de estudio semana por semana.",
          text: [
            "La mayoría de las entidades certificadoras publican un temario del examen, a veces llamado objetivos del examen. Tiene cada tema que cubre el examen. Esta es tu orden de misión.",
            "Copia los temas principales (no todo el documento si es largo) en un asistente de IA y dale tu situación: cuántas semanas tienes, cuántas horas por semana y lo que ya sabes de las fuerzas armadas.",
            "Pide un plan con una meta para cada semana, una semana de repaso antes del examen y una fecha para un examen de práctica. Luego pon las sesiones en tu calendario como si fueran horas de servicio."
          ],
          steps: ["Descarga el temario oficial del examen de la entidad certificadora.", "Dile a la IA tus semanas, tus horas por semana y lo que ya sabes.", "Pega los temas principales y pide un plan semana por semana.", "Pídele que agregue una semana de repaso y un examen de práctica.", "Pon cada sesión de estudio en tu calendario."],
          words: [["Temario del examen (objetivos)", "la lista oficial de los temas que cubre un examen de certificación."], ["Plan de estudio", "un horario que dice qué vas a estudiar y cuándo."]],
          slides: [
            { title: "El temario es tu orden de misión", bullets: ["Tiene cada tema que cubre el examen", "Consíguelo con la entidad certificadora"] },
            { title: "Dile a la IA tu situación", bullets: ["Semanas hasta el examen", "Horas que puedes estudiar cada semana", "Lo que ya sabes del servicio"] },
            { title: "Pide un plan de verdad", bullets: ["Una meta para cada semana", "Una semana de repaso y un examen de práctica", "Luego ponlo en tu calendario"] }
          ],
          tryIt: "Consigue el temario de la certificación que buscas. Pregúntale a un asistente de IA: \"Tengo 8 semanas y 6 horas por semana. Ya sé [lo que sabes]. Haz un plan de estudio semana por semana para estos temas: [temas].\"",
          youCanNow: "convertir un temario oficial de examen en un plan de estudio semana por semana con un asistente de IA.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un temario de examen?", options: ["Un examen de práctica de un sitio web", "La lista oficial de los temas que cubre el examen", "El horario de un grupo de estudio", "Una lista de respuestas de exámenes pasados"], answer: 1, why: "El temario de la entidad certificadora dice exactamente qué cubre el examen." },
            { objective: "O4", q: "Tienes 10 semanas y 5 horas a la semana. ¿Qué le das a la IA para tu plan de estudio?", options: ["Solo \"ayúdame a aprobar\"", "Tu usuario del sitio del examen", "Los temas del examen, las 10 semanas, las 5 horas a la semana y lo que ya sabes", "El plan de estudio de un amigo"], answer: 2, why: "Los temas, el tiempo y lo que ya sabes le permiten a la IA armar un plan realista semana por semana." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Practicar con IA de la forma correcta",
          minutes: 5,
          goal: "Usar la IA para que te haga preguntas y te explique los errores, revisándola con el material oficial.",
          text: [
            "La IA es una buena compañera de estudio. Te puede hacer preguntas sobre un tema, explicar una respuesta equivocada con palabras más sencillas o darte un ejemplo real de tu puesto militar.",
            "También puede equivocarse o estar desactualizada. Si su respuesta no coincide con la guía de estudio oficial o con el temario del examen, confía en el material oficial.",
            "Nunca uses \"brain dumps\" (copias de preguntas reales del examen). Rompen las reglas de la entidad certificadora y te pueden costar la certificación. Practica para entender, no para memorizar respuestas."
          ],
          steps: ["Pide: \"Hazme 5 preguntas sobre [un tema]. Espera mi respuesta cada vez.\"", "Cuando falles una, pídele que te la explique con palabras sencillas.", "Pide un ejemplo de tu puesto militar.", "Revisa en la guía de estudio oficial cualquier respuesta de la que dudes.", "Anota tus temas débiles y vuelve a estudiarlos."],
          words: [["Brain dump", "una copia de preguntas reales del examen compartida contra las reglas; usarla te puede costar la certificación."], ["Examen de práctica", "un examen hecho para practicar que se parece al real pero no está copiado de él."]],
          slides: [
            { title: "La IA como compañera de estudio", bullets: ["Te hace preguntas sobre un tema", "Explica las respuestas equivocadas con sencillez", "Da ejemplos de tu puesto militar"] },
            { title: "Revisa con el material oficial", bullets: ["La IA puede equivocarse o estar desactualizada", "La guía de estudio oficial manda"] },
            { title: "Nada de brain dumps", bullets: ["Las preguntas copiadas del examen rompen las reglas", "Te pueden costar la certificación", "Practica para entender"] }
          ],
          tryIt: "Elige el primer tema de tu plan de estudio. Pídele a un asistente de IA que te haga cinco preguntas, una a la vez. Por cada error, pide una explicación sencilla y revísala en el material oficial.",
          youCanNow: "usar la IA para hacerte preguntas y explicarte los errores, revisándola con el material oficial.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un brain dump?", options: ["Preguntas reales del examen filtradas y compartidas contra las reglas", "Un plan de estudio hecho con IA", "Un examen de práctica oficial y gratuito", "Una lista de temas del examen"], answer: 0, why: "Los brain dumps comparten preguntas reales del examen, lo que rompe las reglas y te puede costar la certificación." },
            { objective: "O5", q: "Fallaste una pregunta de práctica de la IA. ¿Qué haces después?", options: ["Saltarte ese tema", "Memorizar la respuesta de la IA sin revisarla", "Buscar un brain dump", "Pedirle a la IA que te la explique con sencillez y revisarla en la guía oficial"], answer: 3, why: "Las explicaciones de la IA ayudan, pero la guía oficial tiene la última palabra." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mostrarles tu certificación a los empleadores",
          minutes: 4,
          goal: "Escribir la línea de currículum y una historia corta que muestren tu certificación y tu servicio juntos.",
          text: [
            "Cuando apruebes, pon la certificación donde miran los empleadores: una sección de \"Certificaciones\" en tu currículum con el nombre completo, la entidad certificadora y el año, y también en tu perfil en línea.",
            "Conéctala con tu servicio. Por ejemplo: \"Administré el acceso a la red de 300 usuarios como especialista en TI del Ejército; obtuve [nombre de la certificación] en 2026.\" La certificación prueba la habilidad; tu servicio prueba que la usaste bajo presión.",
            "¿Todavía estás estudiando? Puedes escribir \"[nombre de la certificación], en curso, fecha del examen [mes año]\". Pídele a un asistente de IA que te ayude con las palabras y luego asegúrate de que cada palabra sea cierta."
          ],
          steps: ["Agrega una sección de Certificaciones a tu currículum.", "Escribe el nombre completo de la certificación, la entidad y el año.", "Agrega una línea de currículum que la relacione con algo que hiciste en el servicio.", "Si todavía estás estudiando, escribe \"en curso\" con el mes de tu examen.", "Léelo en voz alta y revisa que cada palabra sea cierta."],
          words: [["Currículum", "un resumen de una o dos páginas de tu trabajo, tu formación y tus habilidades para los empleadores."]],
          slides: [
            { title: "Ponla donde miran los empleadores", bullets: ["Una sección de Certificaciones en tu currículum", "Nombre completo, entidad certificadora, año"] },
            { title: "Relaciónala con tu servicio", bullets: ["La certificación prueba la habilidad", "El servicio muestra que la usaste bajo presión"] },
            { title: "¿Todavía estudiando?", bullets: ["\"[Nombre], en curso, fecha del examen [mes año]\"", "Cada palabra debe ser cierta"] }
          ],
          tryIt: "Tarea final: haz tu Plan de Certificación de una página con tus puestos, la certificación que buscas, la página del VA que revisaste, tu plan de estudio hecho con IA y la línea de currículum que vas a agregar cuando apruebes.",
          youCanNow: "planear, financiar, estudiar y mostrar una certificación que encaje con tu experiencia militar.",
          quickCheck: [
            { objective: "O6", q: "¿Qué va en la sección de Certificaciones de tu currículum?", options: ["Solo la sigla", "Tu puntaje del examen", "El nombre completo, la entidad certificadora y el año", "El precio que pagaste"], answer: 2, why: "Los empleadores necesitan el nombre completo, quién la otorgó y cuándo." },
            { objective: "O6", q: "Tu examen es en marzo y todavía no apruebas. ¿Cómo la pones?", options: ["Ponerla como aprobada", "\"[Nombre], en curso, fecha del examen marzo 2027\"", "No decir que estás estudiando", "Escribir \"casi certificado\""], answer: 1, why: "Ponerla en curso con la fecha del examen es honesto y muestra tu plan." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Obtener la certificación",
        questions: [
          { objective: "O4", q: "¿Qué debes darle a un asistente de IA para que haga un buen plan de estudio?", options: ["Tu número de Seguro Social", "Tus datos bancarios", "Solo el nombre de la certificación", "Los temas del examen, tus semanas y tus horas por semana"], answer: 3, why: "Los temas más tu tiempo le dan a la IA lo que necesita para planear." },
          { objective: "O4", q: "¿Qué es un temario del examen?", options: ["La lista oficial de los temas que cubre el examen", "Una lista de respuestas", "Un examen de práctica", "Una oferta de empleo"], answer: 0, why: "La entidad certificadora lo publica para que sepas qué estudiar." },
          { objective: "O5", q: "La explicación de la IA no coincide con la guía de estudio oficial. ¿Qué haces?", options: ["Confiar en la IA", "Saltarte el tema", "Confiar en la guía de estudio oficial", "Pedirle a la IA que discuta"], answer: 2, why: "El material oficial es el estándar que usa el examen." },
          { objective: "O5", q: "Alguien te ofrece un \"brain dump\" de preguntas reales del examen. ¿Qué deberías hacer?", options: ["Usarlo la noche anterior", "Compartirlo con tus amigos", "Pagar más por uno más nuevo", "Rechazarlo: rompe las reglas y te puede costar la certificación"], answer: 3, why: "Los brain dumps rompen las reglas de la certificación." },
          { objective: "O6", q: "¿Qué línea de currículum relaciona mejor una certificación con tu servicio?", options: ["\"Estoy certificado.\"", "\"Bueno con las computadoras.\"", "\"Administré el acceso a la red de 300 usuarios como especialista en TI del Ejército; obtuve [certificación] en 2026.\"", "\"Ver adjunto.\""], answer: 2, why: "Muestra la habilidad en acción más la prueba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Certificaciones con IA para veteranos",
    questions: [
      { objective: "O1", q: "¿Por qué traducir tu puesto militar a puestos civiles?", options: ["Para ocultar tu servicio", "Para que los empleadores entiendan tus habilidades", "Porque los códigos son secretos", "Para hacer más largo tu currículum"], answer: 1, why: "Los puestos civiles usan palabras que conocen los empleadores." },
      { objective: "O1", q: "En My Next Move for Veterans puedes:", options: ["Escribir tu puesto militar y ver carreras civiles parecidas", "Solicitar la discapacidad del VA", "Comprar vales para exámenes", "Descargar tu DD-214"], answer: 0, why: "Relaciona puestos militares con carreras civiles." },
      { objective: "O1", q: "¿Qué NO debes pegar en un asistente de IA al traducir tus funciones?", options: ["El nombre de tu puesto", "Funciones generales", "Detalles clasificados o información de tu unidad", "La palabra \"liderazgo\""], answer: 2, why: "Los detalles clasificados y de la unidad deben quedarse privados." },
      { objective: "O2", q: "Una certificación es:", options: ["Una prueba de una organización externa de que aprobaste un examen de una habilidad", "Un título universitario", "Un rango militar", "Una oferta de empleo"], answer: 0, why: "Prueba que aprobaste un examen de una habilidad." },
      { objective: "O2", q: "La mejor primera guía para saber qué certificación obtener es:", options: ["El examen más largo", "El examen más barato", "Un video cualquiera", "Las ofertas de empleo reales del puesto que buscas"], answer: 3, why: "Los empleadores dicen lo que quieren en las ofertas de empleo." },
      { objective: "O2", q: "¿Qué significa COOL?", options: ["Oficina Civil de Aprendizaje en Línea", "Credentialing Opportunities On-Line (oportunidades de acreditación en línea)", "Lista Certificada de Operaciones de Oficiales", "Opciones de Carrera a la Hora del Almuerzo"], answer: 1, why: "COOL relaciona puestos militares con credenciales civiles." },
      { objective: "O2", q: "¿Dónde debes confirmar el precio y las reglas actuales del examen?", options: ["En un chat de IA", "En el sitio web de la entidad certificadora", "En la memoria de un amigo", "En un comentario de redes sociales"], answer: 1, why: "La entidad certificadora tiene los detalles actuales." },
      { objective: "O3", q: "Según va.gov en octubre de 2026, el reembolso del VA por costos de examen tiene un límite de:", options: ["$200 por examen", "$20,000 por año", "Sin límite", "$2,000 por examen"], answer: 3, why: "La página decía no más de $2,000 por examen." },
      { objective: "O3", q: "Cuando el VA te devuelve el costo de un examen, ¿qué pasa con tu GI Bill?", options: ["La cantidad se descuenta de tu derecho", "Nada", "Se duplica", "Se acaba"], answer: 0, why: "El VA descuenta de tu derecho lo que te devuelve." },
      { objective: "O3", q: "¿Qué formulario envías para pedirle al VA que te devuelva el costo de un examen?", options: ["W-2", "DD-214", "VA Form 22-0803", "SF-86"], answer: 2, why: "va.gov menciona el VA Form 22-0803 para el reembolso de costos de exámenes." },
      { objective: "O3", q: "El reembolso del VA por costos de examen cubre:", options: ["El costo del documento del certificado", "Tus bocadillos para estudiar", "Tu viaje al examen", "Los costos del examen, incluidos los cargos de registro y administración"], answer: 3, why: "Cubre los costos del examen, no el certificado en sí." },
      { objective: "O3", q: "La mejor descripción de VET TEC 2.0 es:", options: ["Un reclamo de discapacidad", "Un préstamo para vivienda", "Un programa del VA de formación en alta tecnología con lugares limitados", "Un rango militar"], answer: 2, why: "Financia formación en alta tecnología sin título universitario, con un límite anual." },
      { objective: "O3", q: "Los montos de los beneficios pueden cambiar. Antes de gastar dinero deberías:", options: ["Confiar en una publicación vieja de un blog", "Revisar la página oficial de va.gov", "Preguntarle solo a la IA", "Adivinar"], answer: 1, why: "La página oficial tiene las reglas actuales." },
      { objective: "O4", q: "Lo primero que debes juntar para un plan de estudio con IA es:", options: ["El temario oficial del examen", "Un brain dump", "Tu contraseña", "Las notas de otra persona"], answer: 0, why: "El temario muestra lo que cubre el examen." },
      { objective: "O4", q: "Un buen plan de estudio incluye:", options: ["Solo la fecha del examen", "Estudiar todo la noche anterior", "Una meta cada semana, una semana de repaso y un examen de práctica", "Ningún calendario"], answer: 2, why: "Las metas semanales y el repaso te dejan listo." },
      { objective: "O5", q: "¿Qué instrucción es mejor para practicar?", options: ["\"Hazme 5 preguntas sobre este tema, una a la vez.\"", "\"Dame las respuestas reales del examen.\"", "\"Aprueba el examen por mí.\"", "\"Cuéntame un chiste.\""], answer: 0, why: "Te hace practicar y esperar tu respuesta." },
      { objective: "O5", q: "¿Por qué evitar los brain dumps?", options: ["Son demasiado largos", "Son aburridos", "Son gratis", "Rompen las reglas y te pueden costar la certificación"], answer: 3, why: "Las entidades certificadoras los prohíben." },
      { objective: "O5", q: "Fallaste una pregunta de práctica. Un buen siguiente paso es:", options: ["Dejar de estudiar", "Pedirle a la IA que te la explique con sencillez y revisar la guía oficial", "Saltarte todo el tema", "Cambiar la fecha de tu examen para mañana"], answer: 1, why: "Entender el error arregla el punto débil." },
      { objective: "O6", q: "La sección de Certificaciones de tu currículum debe mostrar:", options: ["Solo un logotipo", "El nombre completo, la entidad certificadora y el año", "Tu hoja de calificaciones del examen", "Tus horas de estudio"], answer: 1, why: "El nombre completo, la entidad y el año son lo que revisan los empleadores." },
      { objective: "O6", q: "Todavía no apruebas. ¿Cómo puedes poner la certificación?", options: ["Decir que ya aprobaste", "Poner una diferente", "Dejar una línea en blanco", "\"[Nombre], en curso, fecha del examen [mes año]\""], answer: 3, why: "\"En curso\" con una fecha es honesto y útil." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      6,
      8,
      12,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Puestos civiles",
        objective: "O1",
        notYet: "No hay puestos civiles, o los puestos no coinciden con el puesto militar.",
        meets: "El puesto militar y dos puestos civiles que coinciden.",
        exceeds: "Los puestos aparecen tanto en My Next Move for Veterans como en la descripción de la IA."
      },
      {
        name: "Certificación meta",
        objective: "O2",
        notYet: "La certificación se adivinó o se eligió por un anuncio.",
        meets: "La certificación que más aparece en al menos cinco ofertas de empleo reales.",
        exceeds: "Muestra el conteo y la página de la entidad certificadora revisada para las reglas actuales."
      },
      {
        name: "Pago del VA revisado",
        objective: "O3",
        notYet: "No se revisó el VA, o la información salió solo de un foro o de la IA.",
        meets: "Si el VA puede pagar el costo del examen, con la página oficial de va.gov nombrada.",
        exceeds: "También anota el formulario y que el reembolso usa derecho del GI Bill."
      },
      {
        name: "Plan de estudio",
        objective: "O4",
        notYet: "No hay plan, o el plan no tiene semanas ni temas.",
        meets: "Un plan semana por semana basado en el temario oficial, con una semana de repaso y un examen de práctica.",
        exceeds: "El plan encaja con las horas reales de la persona y tiene una fecha de examen fija."
      },
      {
        name: "Línea de currículum",
        objective: "O6",
        notYet: "No hay línea de currículum, o dice una certificación que todavía no se obtiene.",
        meets: "Una línea de currículum cierta con el nombre completo, la entidad y el año o la fecha del examen, relacionada con el servicio.",
        exceeds: "Incluye una historia corta de un resultado del servicio que la certificación respalda."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se inscriben al examen de certificación dentro de 60 días (encuesta de seguimiento)",
      "Personas que aprueban su certificación dentro de 6 meses",
      "Personas que se postulan a un empleo que pide la certificación dentro de 90 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora o un teléfono inteligente con internet",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini",
      "Los sitios web gratuitos de My Next Move for Veterans, va.gov y la entidad certificadora, y cinco ofertas de empleo reales",
      "Papel o un documento para el Plan de Certificación de una página",
      "Unos 60 minutos en total para el curso; el plan de estudio continúa después"
    ],
    facilitatorNotes: [
      "Agrupa a las personas por campo meta (TI, logística, mantenimiento, salud) para que compartan ofertas de empleo y temarios de examen.",
      "Pide que confirmen cada monto y formulario en va.gov durante la sesión en vez de confiar en notas o en la IA.",
      "Advierte con claridad contra los brain dumps; les pueden costar la certificación.",
      "Califica el Plan de Certificación con la rúbrica y da comentarios sobre una fila en Todavía no a la vez.",
      "Fija una revisión a los 30 días para que cada persona cuente su avance de estudio y su fecha de examen."
    ]
  }
};
