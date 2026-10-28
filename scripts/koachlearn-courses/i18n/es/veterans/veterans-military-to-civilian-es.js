"use strict";

// Koach Learn course (Spanish translation of veterans/veterans-military-to-civilian.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-military-to-civilian-es",
  lang: "es",
  translationOf: "veterans-military-to-civilian",
  category: "Veterans (military)",
  name: "De la vida militar a la vida civil",
  skills: "Usar el Transition Assistance Program, Traducir las habilidades militares, Escribir puntos de currículum para el mundo civil, Hacer contactos para un empleo civil, Adaptarse a la cultura laboral civil, Encontrar apoyo y atención de salud mental",
  outcome: "hacer un plan de transición de 90 días: usar el Transition Assistance Program y los servicios de empleo para veteranos, convertir tu experiencia militar en puntos de currículum civiles para un empleo real, crear una red de contactos, adaptarte a la cultura laboral civil y saber dónde buscar apoyo, incluida la Veterans Crisis Line (988 y luego la tecla 1).",
  about: [
    "Este curso es para militares que se preparan para dejar el servicio o jubilarse, para veteranos que ya salieron y buscan su siguiente paso, y para las parejas y familias que hacen el cambio con ellos.",
    "Aprenderás qué ofrece el Transition Assistance Program, cómo describir tu trabajo militar con palabras que entienden los empleadores civiles, cómo escribir y adaptar los puntos de tu currículum, cómo crear una red de contactos, qué es diferente en los trabajos civiles y dónde encontrar apoyo cuando el cambio es difícil.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Los programas y las reglas cambian, así que confirma los detalles en dol.gov/agencies/vets, va.gov o en la oficina de transición de tu base. Si estás en crisis, llama al 988 y marca 1, o envía un mensaje de texto al 838255, a cualquier hora."
  ],
  finalTask: "Escribe tu plan de transición de 90 días: (1) los talleres de TAP o los servicios de empleo para veteranos que vas a usar; (2) cinco tareas militares reescritas como puntos de currículum civiles, adaptadas a una oferta de empleo real; (3) tres personas o eventos para hacer contactos; (4) dos hábitos del trabajo civil que vas a practicar; (5) tu lista de apoyo, con la Veterans Crisis Line (988 y luego 1, o texto al 838255), tu Vet Center más cercano y dos personas de confianza.",
  chapters: [
    {
      name: "Capítulo 1: Planea el cambio y traduce tus habilidades",
      lessons: [
        {
          title: "Usar el Transition Assistance Program",
          minutes: 5,
          goal: "Elegir los talleres y servicios de TAP que van con tu siguiente paso.",
          text: [
            "El Transition Assistance Program (TAP, programa de ayuda para la transición) ayuda a los militares y a sus parejas a prepararse para la vida civil. Es un trabajo conjunto de los Departamentos de Trabajo, Defensa, Asuntos de Veteranos, Educación y Seguridad Nacional de EE. UU., la Small Business Administration (agencia federal de pequeñas empresas) y la Office of Personnel Management (oficina de personal del gobierno federal).",
            "La parte de TAP del Department of Labor (DOL, Departamento de Trabajo) incluye un taller de un día, Employment Fundamentals of Career Transition, sobre herramientas para buscar empleo, y un taller de dos días, Department of Labor Employment Workshop, sobre currículums, contactos, búsqueda de empleo, entrevistas y negociación. También hay un curso opcional de dos días, Career and Credential Exploration, para elegir una carrera y planear cómo llegar a ella.",
            "También hay ayuda personal: el Employment Navigator and Partnership Program da ayuda profesional a militares en transición y a sus parejas en algunas bases. Las parejas y los cuidadores tienen sus propios talleres. Si no puedes asistir en persona, el aprendizaje en línea puede contar, con la aprobación de tu gerente o consejero de TAP.",
            "Empieza temprano. Pregunta en la oficina de TAP de tu base cuándo debes empezar y qué talleres van con tu plan: un empleo, estudios, un oficio o tu propio negocio. ¿Ya saliste? La página de servicios de empleo para veteranos del DOL tiene recursos para cada estado."
          ],
          steps: ["Contacta la oficina de TAP de tu base y pregunta cuándo debes empezar.", "Decide tu camino principal: empleo, estudios, oficio o negocio.", "Inscríbete en los talleres que van con él, como el DOL Employment Workshop.", "Pregunta por la ayuda personal y los talleres para parejas.", "¿Ya te separaste del servicio? Busca los recursos para veteranos de tu estado en dol.gov/agencies/vets."],
          words: [["TAP", "Transition Assistance Program: clases y ayuda para militares que pasan a la vida civil."], ["Separación", "dejar el servicio militar activo."], ["Credencial", "una licencia o certificado que prueba una habilidad."]],
          slides: [
            { title: "Qué es TAP", bullets: ["Ayuda para pasar a la vida civil", "Para militares y sus parejas", "Lo dirigen el DOL, el DoD, el VA y otras agencias"] },
            { title: "Talleres del DOL", bullets: ["1 día: Employment Fundamentals", "2 días: currículum, contactos, entrevistas", "2 días opcionales: carrera y credenciales"] },
            { title: "Más ayuda", bullets: ["Ayuda profesional personal en algunas bases", "Talleres para parejas y cuidadores", "Aprendizaje en línea con aprobación"] },
            { title: "Empieza temprano", bullets: ["Pregunta en tu oficina de TAP cuándo empezar", "Elige talleres que vayan con tu camino", "¿Ya saliste? Busca los recursos de tu estado"] }
          ],
          sources: [
            { name: "DOL VETS: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "DOL VETS: Servicios de empleo para veteranos", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Escribe tu camino principal (empleo, estudios, oficio o negocio) y los dos talleres o servicios de TAP que mejor van con él. Si ya saliste, busca tu estado en la página de servicios de empleo para veteranos del DOL y anota un recurso y cómo contactarlo.",
          youCanNow: "elegir los talleres de TAP y los servicios de empleo para veteranos que van con tu siguiente paso."
        },
        {
          title: "Traducir las habilidades militares a palabras civiles",
          minutes: 5,
          goal: "Encontrar empleos civiles que se parezcan a tu trabajo militar y describir tus habilidades sin jerga militar.",
          text: [
            "Muchas personas que contratan en el mundo civil no saben qué significan tu código de puesto, tu rango o tu unidad. Tus habilidades son reales, pero hay que decirlas con sus palabras.",
            "Empieza con herramientas gratis. El Military Crosswalk de O*NET (base de datos de empleos de EE. UU.) te deja buscar el código o el nombre de tu puesto en tu rama. My Next Move for Veterans, que aparece en la página del Department of Labor, tiene una búsqueda para la transición militar que sugiere carreras civiles relacionadas con tu experiencia. Anota los nombres de puestos civiles que te sugieren.",
            "Luego traduce. Cambia las palabras militares por palabras sencillas: \"NCOIC\" pasa a ser \"supervisor\" o \"jefe de equipo\"; \"PCS\" pasa a ser \"traslado\"; \"misión\" puede ser \"proyecto\" u \"operación\". Escribe completas las siglas o quítalas. Usa números que muestren tamaño y resultados: cuántas personas dirigiste, el valor del equipo a tu cargo o cuántas entregas manejaste.",
            "Un asistente de IA puede sugerirte palabras civiles para una tarea. Describe el trabajo solo en términos generales. Nunca pegues información clasificada, sensible o personal, y revisa que cada palabra que sugiera sea verdad."
          ],
          steps: ["Busca el código o el nombre de tu puesto en el Military Crosswalk de O*NET o en My Next Move for Veterans.", "Escribe tres nombres de puestos civiles parecidos.", "Haz una lista de tus tareas principales con palabras sencillas.", "Cambia las siglas y los términos militares por palabras civiles.", "Agrega números: personas dirigidas, valor del equipo, tareas completadas."],
          words: [["Código de puesto", "el código de tu trabajo militar, como un MOS, un rating o un AFSC."], ["Jerga", "palabras especiales que solo entiende un grupo."], ["Habilidad transferible", "una habilidad que sirve en muchos trabajos distintos, como dirigir un equipo o planear."]],
          slides: [
            { title: "Dilo con sus palabras", bullets: ["Los empleadores tal vez no conozcan tu código de puesto ni tu rango", "Tus habilidades son reales; tradúcelas"] },
            { title: "Herramientas gratis", bullets: ["O*NET Military Crosswalk", "My Next Move for Veterans", "Anota los nombres de puestos civiles"] },
            { title: "Traduce", bullets: ["NCOIC -> supervisor o jefe de equipo", "Escribe completas las siglas o quítalas", "Agrega números: personas, equipo, resultados"] },
            { title: "Usar la IA con seguridad", bullets: ["Solo términos generales", "Nunca pegues datos clasificados ni personales", "Revisa que cada palabra sea verdad"] }
          ],
          sources: [
            { name: "O*NET OnLine: Military Crosswalk", url: "https://www.onetonline.org/crosswalk/MOC/" },
            { name: "DOL VETS: Servicios de empleo para veteranos (My Next Move for Veterans)", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Busca el código o el nombre de tu puesto militar en el Military Crosswalk de O*NET o en My Next Move for Veterans. Escribe tres nombres de puestos civiles que te sugiera y luego reescribe tres de tus tareas sin siglas y con al menos un número.",
          youCanNow: "encontrar empleos civiles parecidos a tu trabajo militar y describir tus habilidades con palabras civiles sencillas."
        },
        {
          title: "Escribir puntos de currículum para un empleo real",
          minutes: 6,
          goal: "Escribir puntos de currículum civiles que coincidan con una oferta de empleo real.",
          text: [
            "Un buen punto de currículum empieza con un verbo de acción, dice lo que hiciste y muestra el resultado, si es posible con un número. Modelo: acción + qué + resultado. Ejemplo: \"Dirigí un equipo de 12 personas en el mantenimiento de 30 vehículos, con el 95% listos a tiempo.\"",
            "Adapta tu currículum a cada empleo. Lee la oferta y subraya las habilidades y palabras que usa, como \"inventario\", \"seguridad\", \"horarios\" o \"atención al cliente\". Luego usa esas mismas palabras en tus puntos, cuando sean verdad para ti. Muchos empleadores usan programas que revisan los currículums buscando esas palabras.",
            "Hazlo corto y civil. Por lo general, una o dos páginas. Pon arriba el puesto que quieres. Deja fuera lo que no ayuda para este empleo y no pongas detalles clasificados. Agrega licencias y certificaciones, y las credenciales que obtuviste en el servicio.",
            "Ejemplo: una especialista en logística de la Marina que solicita un puesto de supervisora de almacén escribe: \"Manejé un inventario de 4,000 piezas con un valor de $2 millones con 99% de exactitud\" y \"Capacité a 8 nuevos miembros del equipo en procedimientos de seguridad\". Los dos usan palabras de la oferta."
          ],
          steps: ["Busca una oferta de empleo real que te interese.", "Subraya las habilidades y palabras que usa.", "Escribe cinco puntos: verbo de acción + lo que hiciste + resultado con un número.", "Usa las palabras de la oferta cuando sean verdad para ti.", "Quita las siglas y todo lo clasificado, y léelo en voz alta."],
          words: [["Currículum", "un documento corto que muestra a los empleadores tu experiencia laboral, tus habilidades y tus estudios."], ["Adaptar", "cambiar tu currículum para que encaje con un empleo."], ["Palabra clave", "una palabra importante de la oferta de empleo que buscan los empleadores."]],
          slides: [
            { title: "Modelo de un buen punto", bullets: ["Verbo de acción + lo que hiciste + resultado", "\"Dirigí un equipo de 12 personas en el mantenimiento de 30 vehículos\""] },
            { title: "Adapta a cada empleo", bullets: ["Subraya las habilidades de la oferta", "Usa esas palabras cuando sean verdad", "Algunos programas las buscan"] },
            { title: "Hazlo civil", bullets: ["Por lo general, una o dos páginas", "Sin siglas, nada clasificado", "Agrega licencias y certificaciones"] }
          ],
          tryIt: "Busca una oferta de empleo real que te interese. Subraya cinco habilidades que pide. Escribe cinco puntos de currículum sobre tu servicio, cada uno con un verbo de acción, lo que hiciste y un resultado, usando las palabras de la oferta cuando sean verdad.",
          youCanNow: "escribir puntos de currículum que convierten tu experiencia militar en resultados que busca un empleador civil."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planea el cambio y traduce tus habilidades",
        questions: [
          { q: "¿Qué es el Transition Assistance Program?", options: ["Un programa de préstamos", "Una clínica médica", "Una oficina de reclutamiento", "Clases y ayuda para militares que pasan a la vida civil"], answer: 3, why: "TAP ayuda a los militares y a sus parejas a prepararse para la vida civil." },
          { q: "¿Qué taller del DOL trata currículums, contactos, búsqueda de empleo y entrevistas en dos días?", options: ["El entrenamiento básico", "El Department of Labor Employment Workshop", "Un examen del VA", "El GI Bill"], answer: 1, why: "El DOL describe el DOLEW de dos días como el taller que cubre estas habilidades." },
          { q: "¿Qué herramienta gratis ayuda a relacionar un código de puesto militar con empleos civiles?", options: ["El Military Crosswalk de O*NET", "Un informe de crédito", "Una aplicación del clima", "Un juego de preguntas en redes sociales"], answer: 0, why: "El Military Crosswalk busca códigos y nombres de puestos militares." },
          { q: "¿Cómo escribirías \"NCOIC of motor pool\" en un currículum civil?", options: ["Dejarlo igual", "Quitarlo por completo", "\"Supervisé un equipo de mantenimiento de vehículos\"", "\"Hice cosas con camiones\""], answer: 2, why: "Las palabras sencillas y un trabajo claro hacen que se entienda la habilidad." },
          { q: "¿Cuál es el punto de currículum más fuerte?", options: ["\"Encargado de cosas\"", "\"Manejé un inventario de 4,000 piezas con 99% de exactitud\"", "\"Estuve en la Marina\"", "\"Hice mi trabajo\""], answer: 1, why: "Tiene un verbo de acción, lo que se hizo y un resultado con un número." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construye tu vida civil",
      lessons: [
        {
          title: "Hacer contactos para un empleo civil",
          minutes: 5,
          goal: "Comunicarte con personas y programas que pueden llevarte a un empleo.",
          text: [
            "Muchos empleos se llenan a través de personas que conocen a otras personas. Hacer contactos no es rogar por un empleo. Es crear relaciones, pedir consejos y ayudar a otros también.",
            "Empieza con las personas que conoces: otros veteranos que ya trabajan en empleos civiles, antiguos jefes, familia, amigos, tu iglesia o grupos de la comunidad. Crea un perfil profesional en línea, por ejemplo en LinkedIn, con un titular civil como \"Supervisor de logística, 8 años dirigiendo equipos\".",
            "Pide entrevistas informativas cortas: de 15 a 20 minutos para conocer el trabajo y la empresa de alguien. Prepara tres preguntas, como \"¿Cómo es un día normal?\" y \"¿Qué habilidades importan más aquí?\". Da las gracias después.",
            "Usa también los programas para veteranos. VETS, la oficina para veteranos del DOL, tiene recursos estatales para veteranos y programas de aprendices, y el HIRE Vets Medallion Program reconoce a los empleadores comprometidos con contratar veteranos. Las ferias de empleo para veteranos y los grupos de veteranos dentro de las empresas son buenos lugares para conocer gente."
          ],
          steps: ["Haz una lista de diez personas que conoces y que trabajan en empleos civiles.", "Crea o actualiza un perfil profesional en línea con un titular civil.", "Pide a dos personas una entrevista informativa de 15 a 20 minutos.", "Prepara tres preguntas y envía un agradecimiento después.", "Busca ferias de empleo para veteranos y empleadores que contratan veteranos."],
          words: [["Hacer contactos", "crear relaciones con personas que pueden darte consejos, pistas o presentaciones."], ["Entrevista informativa", "una charla corta para conocer el trabajo de alguien, no para pedir empleo."], ["Titular", "la línea corta debajo de tu nombre en un perfil profesional."]],
          slides: [
            { title: "Las personas llenan los empleos", bullets: ["Hacer contactos = relaciones y consejos", "No es rogar; ayuda a otros también"] },
            { title: "Empieza con quien conoces", bullets: ["Veteranos en empleos civiles", "Antiguos jefes, familia, comunidad", "Un perfil con un titular civil"] },
            { title: "Entrevistas informativas", bullets: ["De 15 a 20 minutos", "Tres preguntas preparadas", "Siempre da las gracias"] },
            { title: "Programas para veteranos", bullets: ["Recursos estatales a través de DOL VETS", "Empleadores HIRE Vets", "Ferias de empleo para veteranos"] }
          ],
          sources: [
            { name: "DOL VETS: Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "HIRE Vets Medallion Program", url: "https://www.hirevets.gov/" }
          ],
          tryIt: "Escribe una lista de diez personas que conoces y que trabajan en empleos civiles. Elige a dos y escribe a cada una un mensaje corto y amable pidiendo una charla de 15 minutos sobre su trabajo. Escribe tres preguntas que harías.",
          youCanNow: "crear una red de contactos, pedir entrevistas informativas y usar los programas de contratación de veteranos."
        },
        {
          title: "Adaptarse a la cultura laboral civil",
          minutes: 5,
          goal: "Nombrar las diferencias clave de los trabajos civiles y planear cómo te vas a adaptar.",
          text: [
            "Los trabajos civiles funcionan de otra manera. Muchas veces no hay una cadena de mando clara, y las decisiones se toman en grupo o después de largas conversaciones. Las órdenes pueden llegar como sugerencias: \"¿Podrías revisar esto?\" casi siempre quiere decir \"Por favor, haz esto\".",
            "La comunicación suele ser más suave. Las respuestas directas y cortas que funcionaban con el uniforme pueden sonar duras para los compañeros civiles. Intenta agregar un poco de contexto y un tono amable. Haz preguntas cuando algo no esté claro; en muchas empresas, preguntar es lo esperado, no una señal de debilidad.",
            "Tus fortalezas te acompañan: llegar temprano, terminar lo que empiezas, mantener la calma bajo presión y cuidar a tu equipo. Consérvalas. Pero espera menos estructura, menos ceremonia, más correos y reuniones, y compañeros que nunca sirvieron.",
            "Sentirte en casa puede tomar tiempo. Busca un mentor en el trabajo, como un compañero veterano, o únete a un grupo de veteranos si la empresa tiene uno. Habla también con tu familia sobre los cambios: ellos también se están adaptando."
          ],
          steps: ["Observa cómo se toman las decisiones en tu nuevo trabajo.", "Trata los pedidos amables como tareas reales.", "Agrega contexto y un tono amable a los mensajes directos.", "Haz preguntas cuando algo no esté claro.", "Busca un mentor o un grupo de veteranos en el trabajo."],
          words: [["Cadena de mando", "el orden militar de quién le reporta a quién."], ["Cultura laboral", "las reglas no escritas sobre cómo trabaja y habla la gente en un empleo."], ["Mentor", "una persona con más experiencia que te da consejos."]],
          slides: [
            { title: "Qué es diferente", bullets: ["Muchas veces no hay una cadena de mando clara", "Decisiones en grupo o tras conversar", "Los pedidos suenan como sugerencias"] },
            { title: "Comunicación", bullets: ["Agrega contexto y un tono amable", "Hacer preguntas es lo esperado"] },
            { title: "Fortalezas que te acompañan", bullets: ["Puntualidad, cumplir, calma", "Cuidar a tu equipo"] },
            { title: "Adaptarte", bullets: ["Busca un mentor o un grupo de veteranos", "Habla con tu familia: también se adapta"] }
          ],
          tryIt: "Piensa en una vez que diste una orden corta y directa en el servicio. Reescríbela como un pedido civil amable con una razón, como la escribirías en un correo de trabajo. Luego escribe dos fortalezas militares que vas a conservar y dos hábitos que vas a ajustar.",
          youCanNow: "nombrar las principales diferencias de la cultura laboral civil y ajustar tu forma de comunicarte."
        },
        {
          title: "Encontrar apoyo y atención de salud mental",
          minutes: 5,
          goal: "Armar una lista de apoyo y saber cómo pedir ayuda en una crisis a cualquier hora.",
          text: [
            "Dejar las fuerzas armadas es un gran cambio: una nueva rutina, una nueva identidad, tal vez una mudanza y menos contacto con las personas con quienes serviste. El estrés, dormir mal, el enojo o sentirse decaído son comunes. Pedir ayuda es una fortaleza, no una debilidad.",
            "La Veterans Crisis Line (línea de crisis para veteranos) es gratis, confidencial y está abierta las 24 horas, los 7 días de la semana. Llama al 988 y luego marca 1. Envía un texto al 838255. O chatea en línea en veteranscrisisline.net. Es para veteranos, militares en servicio, miembros de la Guardia y la Reserva y las personas que los apoyan, y no necesitas estar inscrito en los beneficios ni en la atención médica del VA (Departamento de Asuntos de Veteranos) para usarla.",
            "Para apoyo continuo, los Vet Centers son centros de consejería en la comunidad que ofrecen consejería gratis y confidencial a veteranos, militares y familias que cumplen los requisitos, incluida ayuda para adaptarse después del servicio. Llama al 1-877-927-8387 a cualquier hora para hablar y para que te conecten con el Vet Center más cercano. La atención médica del VA también ofrece atención de salud mental a los veteranos inscritos.",
            "Arma también tu propio equipo: dos o tres personas de confianza, un grupo de veteranos, grupos religiosos o de la comunidad, y una rutina regular con ejercicio y sueño. Si te preocupa otro veterano, puedes llamar a la Crisis Line por él."
          ],
          steps: ["Guarda en tu teléfono el 988 (y luego 1) y el número de texto 838255.", "Encuentra tu Vet Center más cercano llamando al 1-877-927-8387.", "Escribe los nombres y números de dos o tres personas de confianza.", "Agrega un grupo o una rutina que te ayude, como un grupo de veteranos o hacer ejercicio.", "Si tú o un amigo están en crisis, llama ahora al 988 y marca 1."],
          words: [["Veterans Crisis Line", "apoyo en crisis gratis, confidencial y las 24 horas para veteranos, militares y quienes los apoyan: 988 y luego 1."], ["Vet Center", "un centro de consejería en la comunidad que ofrece consejería gratis y confidencial a veteranos, militares y familias que cumplen los requisitos."], ["Confidencial", "que se mantiene en privado."]],
          slides: [
            { title: "El cambio es duro; pedir ayuda es fortaleza", bullets: ["Nueva rutina, identidad, tal vez una mudanza", "Estrés, dormir mal y enojo son comunes"] },
            { title: "Veterans Crisis Line: 24/7", bullets: ["Llama al 988 y luego marca 1", "Texto al 838255", "Chat en veteranscrisisline.net"] },
            { title: "Apoyo continuo", bullets: ["Vet Centers: consejería gratis y confidencial", "Llama al 1-877-927-8387, a cualquier hora", "Atención de salud mental del VA"] },
            { title: "Tu propio equipo", bullets: ["Dos o tres personas de confianza", "Grupos de veteranos, religiosos o de la comunidad", "Rutina: ejercicio y sueño"] }
          ],
          sources: [
            { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
            { name: "VA Vet Centers", url: "https://www.vetcenter.va.gov/" }
          ],
          tryIt: "Tarea final: guarda en tu teléfono el 988 (y luego 1) y el 838255, y escribe tu lista de apoyo con tu Vet Center más cercano y dos personas de confianza. Luego termina tu plan de transición de 90 días con tus servicios de TAP o de empleo, cinco puntos de currículum adaptados, tres contactos o eventos para hacer contactos y dos hábitos del trabajo civil que vas a practicar.",
          youCanNow: "pedir ayuda en una crisis a cualquier hora, encontrar apoyo continuo y poner por escrito tu plan completo de transición de 90 días."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Construye tu vida civil",
        questions: [
          { q: "¿Qué es una entrevista informativa?", options: ["Una charla corta para conocer el trabajo de alguien", "Una entrevista de trabajo con contrato", "Un examen del VA", "Una revisión de autorización de seguridad"], answer: 0, why: "Sirve para aprender y recibir consejos, no para pedir empleo." },
          { q: "Una jefa civil dice: \"¿Podrías revisar este informe?\" ¿Qué quiere decir casi siempre?", options: ["Es opcional; no le hagas caso", "Espera una orden por escrito", "Por favor, haz esta tarea", "Estás en problemas"], answer: 2, why: "Los pedidos civiles suelen sonar como sugerencias, pero son tareas reales." },
          { q: "¿Qué fortaleza militar debes conservar en un trabajo civil?", options: ["Usar siglas en cada correo", "No hacer preguntas nunca", "No hacer caso a los compañeros que nunca sirvieron", "Terminar lo que empiezas"], answer: 3, why: "La confiabilidad y cumplir lo que empiezas se valoran en todas partes." },
          { q: "¿Cómo te comunicas por teléfono con la Veterans Crisis Line?", options: ["Marca 911 y pide el VA", "Marca 988 y luego 1", "Marca 411", "Llama a tu reclutador"], answer: 1, why: "La Veterans Crisis Line es el 988 y luego 1, a cualquier hora." },
          { q: "¿Tienes que estar inscrito en los beneficios del VA para usar la Veterans Crisis Line?", options: ["Sí", "Solo si serviste 20 años", "Solo entre semana", "No"], answer: 3, why: "No necesitas estar inscrito en los beneficios ni en la atención médica del VA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: De la vida militar a la vida civil",
    questions: [
      { q: "¿Quién puede participar en los servicios de TAP del DOL?", options: ["Solo los oficiales", "Solo los jubilados mayores de 60 años", "Los militares en transición y sus parejas", "Solo los civiles"], answer: 2, why: "La parte de TAP del DOL atiende a militares en transición y a sus parejas." },
      { q: "¿Cuándo debes empezar TAP?", options: ["Después de cinco años fuera del servicio", "Nunca", "Solo si ya tienes empleo", "Temprano: pregunta en la oficina de TAP de tu base cuándo debes empezar"], answer: 3, why: "Empezar temprano te da más tiempo; tu oficina de TAP fija las fechas." },
      { q: "¿Qué taller es opcional y te ayuda a elegir una carrera y planear cómo llegar a ella?", options: ["El entrenamiento básico", "Career and Credential Exploration", "El entrenamiento físico", "Un examen de reclamo del VA"], answer: 1, why: "C2E es el curso opcional de dos días del DOL sobre carrera y credenciales." },
      { q: "No puedes asistir a TAP en persona. ¿Qué puede contar en su lugar?", options: ["El aprendizaje en línea, con la aprobación de tu gerente o consejero de TAP", "Nada", "Ver televisión", "Los apuntes de un amigo"], answer: 0, why: "El DOL dice que el aprendizaje en línea puede contar con aprobación." },
      { q: "¿Por qué traducir las habilidades militares?", options: ["Las personas que contratan en el mundo civil tal vez no entiendan los términos militares", "Lo exige la ley", "Para esconder tu servicio", "Para que el currículum sea más largo"], answer: 0, why: "Las palabras sencillas ayudan a los empleadores a ver tus habilidades reales." },
      { q: "My Next Move for Veterans te ayuda a:", options: ["Presentar un reclamo al VA", "Conseguir un préstamo", "Encontrar carreras civiles relacionadas con tu experiencia militar", "Hacer una cita con el médico"], answer: 2, why: "El DOL incluye su búsqueda de transición militar para carreras civiles." },
      { q: "¿Qué debes hacer con las siglas en un currículum civil?", options: ["Usar todas las que puedas", "Ponerlas en negrita", "Inventar siglas nuevas", "Escribirlas completas o quitarlas"], answer: 3, why: "Las siglas confunden a los lectores civiles." },
      { q: "Cuando usas la IA para traducir tus tareas, debes:", options: ["Pegar detalles clasificados para que sea exacta", "Describir el trabajo en términos generales y revisar que cada palabra sea verdad", "Dejar que invente resultados", "Compartir tu número de Seguro Social"], answer: 1, why: "Nunca compartas detalles sensibles, y mantén el currículum verdadero." },
      { q: "Un buen punto de currículum sigue el modelo:", options: ["Rango + unidad + base", "Pasatiempo + comida favorita", "Solo el código de puesto", "Verbo de acción + lo que hiciste + resultado"], answer: 3, why: "Muestra lo que hiciste y por qué importó." },
      { q: "¿Cómo se adapta un currículum?", options: ["Usando las palabras de la oferta cuando son verdad para ti", "Enviando el mismo currículum a todos lados", "Agregando todos los empleos que has tenido", "Haciéndolo de diez páginas"], answer: 0, why: "Adaptar es relacionar tus habilidades reales con ese empleo." },
      { q: "¿Qué número hace más fuerte un punto?", options: ["Tu talla de zapatos", "\"Capacité a 8 nuevos miembros del equipo\"", "La extensión telefónica de tu unidad", "Tu número de servicio"], answer: 1, why: "Los números muestran el tamaño y los resultados de tu trabajo." },
      { q: "La mejor descripción de hacer contactos es:", options: ["Pedirles dinero a desconocidos", "Enviar el mismo mensaje a todos", "Crear relaciones, pedir consejos y ayudar a otros también", "Solo para personas con título universitario"], answer: 2, why: "Hacer contactos se trata de relaciones y consejos." },
      { q: "¿Cuánto debe durar por lo general una entrevista informativa?", options: ["Tres horas", "Todo el día", "Unos 15 a 20 minutos", "Un minuto"], answer: 2, why: "Los pedidos cortos respetan el tiempo de la otra persona." },
      { q: "¿Qué hace el HIRE Vets Medallion Program?", options: ["Reconoce a los empleadores comprometidos con contratar veteranos", "Paga el alquiler de los veteranos", "Presenta reclamos al VA", "Dirige el entrenamiento básico"], answer: 0, why: "El DOL lo describe como un reconocimiento al compromiso de las empresas con contratar veteranos." },
      { q: "Tus mensajes cortos y directos parecen duros a tus compañeros civiles. ¿Qué ayuda?", options: ["Dejar de hablarles", "Usar más siglas", "Escribir todo en mayúsculas", "Agregar contexto y un tono amable"], answer: 3, why: "Los mensajes más suaves y claros encajan en la cultura laboral civil." },
      { q: "En muchos trabajos civiles, hacer preguntas es:", options: ["No permitido", "Esperado y normal", "Una señal de debilidad", "Solo para los jefes"], answer: 1, why: "Preguntar cuando algo no está claro es lo esperado en muchos trabajos." },
      { q: "¿Qué número te conecta a cualquier hora con tu Vet Center más cercano?", options: ["911", "411", "1-800-MEDICARE", "1-877-927-8387"], answer: 3, why: "El VA indica el 1-877-927-8387 como el centro de llamadas de los Vet Centers." },
      { q: "Puedes enviar un texto a la Veterans Crisis Line al:", options: ["988", "411", "838255", "911"], answer: 2, why: "Envía un texto al 838255 para comunicarte con la Veterans Crisis Line." },
      { q: "Te preocupa otro veterano. ¿Qué puedes hacer?", options: ["Llamar a la Veterans Crisis Line por él: 988 y luego 1", "Esperar y tener esperanza", "Publicarlo en internet", "No decirle a nadie"], answer: 0, why: "La Crisis Line también apoya a quienes se preocupan por un veterano." },
      { q: "La consejería de los Vet Centers es:", options: ["Solo para oficiales", "Gratis y confidencial", "Solo por orden judicial", "Pagada por hora"], answer: 1, why: "El VA dice que la consejería de los Vet Centers es gratis y confidencial." }
    ]
  }
};
