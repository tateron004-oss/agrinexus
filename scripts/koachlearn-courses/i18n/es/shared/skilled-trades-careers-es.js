"use strict";

// Koach Learn course (Spanish translation of shared/skilled-trades-careers.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "skilled-trades-careers-es",
  lang: "es",
  translationOf: "skilled-trades-careers",
  category: "Re-Entry",
  name: "Empezar una carrera en los oficios calificados",
  skills: "Comparar oficios calificados, Buscar sueldos y capacitación en sitios oficiales, Entender los programas de aprendiz y de preaprendiz, Conocer los pasos de licencias y certificaciones, Trabajar con herramientas de forma segura, Encontrar un programa y presentar tu solicitud",
  outcome: "elegir un oficio calificado que vaya contigo, buscar su sueldo real y su camino de capacitación en sitios oficiales, encontrar un programa de aprendiz o de preaprendiz cerca de ti y hacer un plan paso a paso para presentar tu solicitud, incluidas opciones de segunda oportunidad si tienes antecedentes.",
  about: [
    "Los oficios calificados son carreras prácticas como electricista, plomero, técnico de HVAC (calefacción y aire acondicionado), soldador, instalador de paneles solares, carpintero y chofer de camión. Muchos te permiten ganar dinero mientras aprendes, sin un título universitario de cuatro años.",
    "Este curso es para jóvenes que eligen un camino, veteranos que pasan al trabajo civil, personas que vuelven a casa después de la cárcel y cualquiera que esté listo para trabajar con las manos. Vas a comparar oficios, aprender cómo funcionan los programas de aprendiz y las licencias, aprender hábitos básicos de herramientas y seguridad, y armar un plan para entrar a un programa.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las reglas, los sueldos y las licencias cambian según el estado y con el tiempo, así que cada lección te muestra el lugar oficial para revisarlos."
  ],
  finalTask: "Haz un \"Plan para empezar en un oficio\" de una página para un oficio: cómo es el trabajo, su sueldo mediano y sus perspectivas de empleo según bls.gov/ooh, la licencia o certificación que pide en tu estado, dos programas de aprendiz o de preaprendiz cerca de ti sacados de apprenticeship.gov o de un centro de empleo local, el equipo de seguridad y las herramientas básicas que vas a necesitar, cualquier recurso de segunda oportunidad que te aplique y tus primeros tres pasos con fechas.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes que eligen un camino, veteranos que pasan al trabajo civil, personas que vuelven a casa después de la prisión y cualquiera que esté listo para trabajar con las manos en un oficio como electricista, plomero, técnico de HVAC, soldador, instalador de paneles solares, carpintero o chofer de camión.",
    startingPoint: "Les interesa el trabajo práctico y quizá tienen experiencia relacionada de empleos, del servicio militar, del deporte o de programas hechos en prisión. La mayoría no conoce el sueldo real de los oficios, cómo funcionan los programas de aprendiz y las licencias, ni cómo encontrar un programa cerca.",
    gap: "Los oficios calificados ofrecen capacitación pagada y buenas carreras sin un título universitario de cuatro años, pero la gente los pasa por alto o gasta dinero en la capacitación equivocada. Necesitan elegir un oficio, revisar su sueldo y su camino en sitios oficiales, y planear cómo entrar a un programa, incluidas las opciones de segunda oportunidad si tienen antecedentes.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Los sueldos, las licencias y las reglas cambian según el estado y con el tiempo; se revisan en sitios oficiales (bls.gov/ooh, apprenticeship.gov, juntas estatales de licencias)",
      "Dispositivos: un teléfono o una computadora de la biblioteca con internet",
      "Quienes tienen antecedentes consultan con la junta estatal de licencias antes de pagar una capacitación",
      "Tiempo: lecciones de unos cinco minutos, más tiempo para investigar"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con siete oficios comunes y tus propios intereses y límites", action: "describir lo que hace cada oficio y elegir dos que vayan contigo", standard: "con una razón para cada elección" },
    { id: "O2", condition: "Usando el Occupational Outlook Handbook en bls.gov/ooh", action: "buscar el sueldo mediano de un oficio, la capacitación habitual, la licencia que pide y sus perspectivas de empleo", standard: "anotando el año de la cifra del sueldo" },
    { id: "O3", condition: "Para tu oficio principal", action: "explicar cómo funcionan su programa de aprendiz, su programa de preaprendiz y su licencia o certificación", standard: "con la página oficial de la junta estatal encontrada" },
    { id: "O4", condition: "Para tu oficio principal", action: "enumerar el equipo de seguridad, los hábitos de seguridad y las herramientas básicas que pide el trabajo", standard: "comparados con la lista oficial de herramientas de un programa" },
    { id: "O5", condition: "Si tú o alguien a quien ayudas tiene antecedentes", action: "encontrar programas de segunda oportunidad y preparar preguntas para la junta de licencias", standard: "nombrando el Programa Federal de Fianzas y el Crédito Tributario por Oportunidad de Trabajo" },
    { id: "O6", condition: "Usando apprenticeship.gov o un centro de empleo local", action: "encontrar dos programas cerca de ti y escribir tus primeros tres pasos para presentar tu solicitud", standard: "con una fecha para cada paso y las fechas de solicitud de cada programa" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Elegir un oficio",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué son los oficios calificados",
          minutes: 5,
          goal: "Describir siete oficios comunes y elegir dos que vayan contigo.",
          text: [
            "Los electricistas instalan y reparan el cableado, las luces y la electricidad en casas y edificios. Los plomeros instalan y arreglan tuberías, calentadores de agua y desagües. Los técnicos de HVAC trabajan en calefacción, ventilación, aire acondicionado y refrigeración. Los soldadores unen metal con calor para edificios, barcos, oleoductos y fábricas.",
            "Los instaladores solares ponen paneles solares en techos y en el suelo y los conectan. Los carpinteros construyen y reparan estructuras, pisos, escaleras y gabinetes. Los choferes con CDL mueven mercancía por la ciudad o por todo el país con una licencia de conducir comercial.",
            "Piensa en lo que va contigo. ¿Te gusta trabajar afuera o adentro? ¿En lo alto o en el suelo? ¿Te gustan las matemáticas y resolver problemas? ¿Puedes estar lejos de casa varios días, como muchas veces lo están los choferes de larga distancia? ¿Te gusta arreglar cosas para clientes o construir cosas nuevas? Tus respuestas apuntan a un oficio.",
            "Muchas habilidades te sirven. La mecánica y la logística militar, la disciplina y el trabajo en equipo del deporte, y los programas de trabajo o capacitación que hiciste en prisión (mantenimiento, cocina, oficios de construcción) cuentan."
          ],
          words: [["Oficio calificado", "un trabajo que necesita una capacitación práctica especial, como electricista o soldador."], ["HVAC", "siglas en inglés de calefacción, ventilación y aire acondicionado."], ["CDL", "licencia de conducir comercial (en inglés, commercial driver's license), necesaria para manejar camiones grandes y autobuses."]],
          slides: [
            { title: "Dentro de los edificios", bullets: ["Electricista: cableado, luces y electricidad", "Plomero: tuberías, calentadores de agua, desagües", "HVAC: calefacción, aire acondicionado, refrigeración"] },
            { title: "Construir y mover", bullets: ["Soldador: une metal con calor", "Instalador solar: pone y conecta paneles", "Carpintero: estructuras, pisos, escaleras, gabinetes", "Chofer con CDL: mueve mercancía en camión"] },
            { title: "¿Qué va contigo?", bullets: ["¿Adentro o afuera? ¿En lo alto o en el suelo?", "¿Matemáticas y resolver problemas?", "¿En casa cada noche o fuera varios días?"] },
            { title: "Tus habilidades te sirven", bullets: ["Mecánica y logística militar", "Disciplina y trabajo en equipo del deporte", "Programas de trabajo y capacitación en prisión"] }
          ],
          tryIt: "Responde por escrito las preguntas de \"¿Qué va contigo?\". Luego elige los dos oficios que mejor coinciden con tus respuestas y escribe una oración para cada uno diciendo por qué.",
          youCanNow: "describir oficios calificados comunes y elegir dos que vayan con tu forma de trabajar.",
          quickCheck: [
            { objective: "O1", q: "¿En qué trabaja principalmente un electricista?", options: ["En el cableado y los sistemas de electricidad e iluminación", "En las tuberías de agua y los desagües", "En los equipos de calefacción y aire acondicionado", "En unir metal con calor"], answer: 0, why: "Los electricistas instalan y reparan el cableado, la electricidad y la iluminación." },
            { objective: "O1", q: "Te gusta resolver problemas, no te molestan los espacios estrechos y quieres trabajar cerca de casa. ¿Cómo elegirías?", options: ["Elegir el oficio que eligió un amigo", "Elegir el que tenga el nombre más llamativo", "Comparar los oficios con tus respuestas y elegir dos que vayan contigo", "Elegir manejar camiones de larga distancia porque paga bien"], answer: 2, why: "Comparar los oficios con tus propios intereses y límites te da la mejor opción." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Revisar sueldos y capacitación en sitios oficiales",
          minutes: 5,
          goal: "Buscar el sueldo, la capacitación y las perspectivas de empleo de un oficio en el Occupational Outlook Handbook.",
          text: [
            "No confíes en las cifras de sueldo de los anuncios o las redes sociales. La Oficina de Estadísticas Laborales de Estados Unidos (BLS) publica el Occupational Outlook Handbook (manual de perspectivas ocupacionales) en bls.gov/ooh. Es gratis y se actualiza con regularidad. Está en inglés; puedes usar el traductor de tu navegador.",
            "Cada trabajo tiene un perfil con pestañas. \"Pay\" (sueldo) muestra el sueldo mediano, es decir, la mitad de los trabajadores gana más y la otra mitad gana menos. \"How to Become One\" (cómo llegar a serlo) muestra la capacitación, como un programa de aprendiz, y si se necesita licencia. \"Job Outlook\" (perspectivas de empleo) muestra si se espera que crezca el número de trabajos. \"State and Area Data\" (datos por estado y zona) muestra el sueldo donde vives.",
            "Por ejemplo, el perfil de los electricistas dice que la mayoría aprende en un programa de aprendiz de 4 o 5 años, y que la mayoría de los estados exige que los electricistas tengan licencia. El sueldo inicial de un aprendiz es más bajo que el mediano y suele subir a medida que ganas habilidades.",
            "Los asistentes de IA pueden ayudarte a explicar las palabras de estas páginas, pero toma las cifras de la página oficial, no de la IA."
          ],
          steps: ["Entra a bls.gov/ooh.", "Busca el oficio en inglés, por ejemplo \"electricians\" (electricistas) o \"plumbers\" (plomeros).", "Abre el perfil y lee la pestaña Pay: anota el sueldo mediano y el año.", "Lee How to Become One: anota la capacitación y la licencia.", "Lee Job Outlook y State and Area Data."],
          words: [["Sueldo mediano", "el sueldo del medio: la mitad de los trabajadores gana más y la otra mitad gana menos."], ["Perspectivas de empleo", "si se espera que el número de trabajos en un campo crezca o disminuya."], ["BLS", "la Oficina de Estadísticas Laborales de Estados Unidos, la oficina del gobierno que reúne datos de empleos y sueldos."]],
          slides: [
            { title: "Usa el manual oficial", bullets: ["bls.gov/ooh: gratis y actualizado con regularidad", "No anuncios ni publicaciones en redes sociales"] },
            { title: "Lee cada perfil", bullets: ["Pay: el sueldo mediano", "How to Become One: capacitación y licencia", "Job Outlook y State and Area Data"] },
            { title: "Ejemplo: electricistas", bullets: ["La mayoría aprende en un programa de aprendiz de 4 o 5 años", "La mayoría de los estados exige licencia", "El sueldo de aprendiz suele subir con la habilidad"] },
            { title: "La IA explica, no da las cifras", bullets: ["Pídele a la IA que explique palabras difíciles", "Toma las cifras de la página oficial"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU.: Occupational Outlook Handbook (en inglés)", url: "https://www.bls.gov/ooh/" },
            { name: "Occupational Outlook Handbook: Electricistas (en inglés)", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Busca en bls.gov/ooh tus dos oficios de la Lección 1. Para cada uno, anota el sueldo mediano y el año al que corresponde, la capacitación habitual, si se necesita licencia y las perspectivas de empleo.",
          youCanNow: "encontrar en el manual oficial el sueldo mediano real, el camino de capacitación y las perspectivas de empleo de un oficio.",
          quickCheck: [
            { objective: "O2", q: "¿Qué te dicen las perspectivas de empleo?", options: ["El color del uniforme", "Qué tan rápido se espera que crezcan los empleos del oficio", "El sueldo de un trabajador", "Dónde está la escuela de capacitación"], answer: 1, why: "Las perspectivas de empleo muestran si se espera que la cantidad de empleos crezca o baje." },
            { objective: "O2", q: "Un video dice que todos los plomeros ganan muchísimo. ¿Qué harías?", options: ["Creerlo porque es popular", "Preguntar en los comentarios del video", "Elegir la plomería enseguida", "Revisar el sueldo mediano y su año en bls.gov/ooh"], answer: 3, why: "Los datos oficiales de sueldos en bls.gov/ooh son el lugar para comprobarlo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Programas de aprendiz, de preaprendiz y licencias",
          minutes: 6,
          goal: "Explicar cómo funcionan para tu oficio los programas de aprendiz, los de preaprendiz y las licencias.",
          text: [
            "Un programa de aprendiz registrado (Registered Apprenticeship) es un trabajo pagado con capacitación. El sitio apprenticeship.gov del Departamento de Trabajo de Estados Unidos dice que los aprendices obtienen experiencia de trabajo pagada con un mentor, un sueldo que sube a medida que crecen sus habilidades y una credencial reconocida en todo el país al final. Aprendes en el trabajo y en clases.",
            "Un programa de preaprendiz te prepara para entrar a un programa de aprendiz. Puede durar de unas semanas a unos meses y puede ser pagado o no. Muchas veces cubre matemáticas básicas, uso de herramientas, seguridad y preparación para el trabajo, y puede ayudarte a que te acepten. Muchos programas de reinserción y colegios comunitarios los ofrecen.",
            "Las licencias y los certificados cambian según el oficio y el estado. Los electricistas y los plomeros normalmente necesitan una licencia estatal o local después de su capacitación. Los técnicos de HVAC que manejan refrigerantes deben tener la certificación EPA Section 608 (de la Agencia de Protección Ambiental). Los choferes de camión nuevos deben terminar la capacitación inicial para conductores con un proveedor del registro federal de proveedores de capacitación (Training Provider Registry) antes de presentar los exámenes de la CDL. Los soldadores y los instaladores solares muchas veces obtienen certificaciones de la industria que piden los empleadores.",
            "Veteranos: el VA (Departamento de Asuntos de Veteranos) dice que los beneficios del GI Bill se pueden usar para muchos programas de aprendiz y de capacitación en el trabajo, y Helmets to Hardhats conecta a los veteranos con programas de aprendiz en construcción."
          ],
          words: [["Programa de aprendiz registrado", "un trabajo pagado con capacitación, aprobado por el Departamento de Trabajo o por un estado, que termina con una credencial reconocida (en inglés, Registered Apprenticeship)."], ["Programa de preaprendiz", "un programa corto que te prepara para entrar a un programa de aprendiz (en inglés, pre-apprenticeship)."], ["Licencia", "permiso oficial de un estado o una ciudad para hacer cierto trabajo, como trabajo eléctrico."], ["Certificación", "prueba de que pasaste un examen o una capacitación en una habilidad."]],
          slides: [
            { title: "Programa de aprendiz registrado", bullets: ["Un trabajo pagado con un mentor", "El sueldo sube a medida que crecen tus habilidades", "Una credencial reconocida en todo el país"] },
            { title: "Programa de preaprendiz", bullets: ["De unas semanas a unos meses", "Matemáticas, herramientas, seguridad, preparación para el trabajo", "Te ayuda a entrar a un programa de aprendiz"] },
            { title: "Licencias y certificados", bullets: ["Electricistas, plomeros: licencia estatal o local", "HVAC: EPA Section 608 para refrigerantes", "CDL: capacitación inicial con un proveedor registrado"] },
            { title: "Para veteranos", bullets: ["El GI Bill puede pagar muchos programas de aprendiz", "Helmets to Hardhats: carreras en construcción"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Para quienes buscan una carrera (en inglés)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov: ¿Qué es un programa de preaprendiz? (en inglés)", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "EPA: Certificación de técnicos de la Section 608 (en inglés)", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "Registro de proveedores de capacitación de la FMCSA: quién necesita la capacitación inicial para conductores (en inglés)", url: "https://tpr.fmcsa.dot.gov/Drivers/Applicability" },
            { name: "VA: Capacitación en el trabajo y programas de aprendiz (en inglés)", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Para tu oficio principal, anota: ¿normalmente se aprende en un programa de aprendiz? ¿Qué licencia o certificación pide? Luego busca \"[tu estado] [oficio] license\" y encuentra la página oficial de la junta estatal (busca una dirección que termine en .gov).",
          youCanNow: "explicar cómo funcionan los programas de aprendiz, los de preaprendiz y las licencias, y encontrar la página de licencias de tu estado.",
          quickCheck: [
            { objective: "O3", q: "¿En qué se diferencia un programa de aprendiz de una clase normal?", options: ["Pagas más", "No aprendes ninguna habilidad", "Trabajas y ganas un sueldo mientras aprendes", "Nunca lleva a una credencial"], answer: 2, why: "A los aprendices les pagan por trabajar mientras aprenden el oficio." },
            { objective: "O3", q: "Quieres saber qué licencia pide tu oficio en tu estado. ¿Qué harías?", options: ["Buscar la página oficial de la junta estatal que termina en .gov", "Preguntar en un grupo cualquiera de redes sociales", "Suponer que no hace falta licencia", "Comprar el primer curso en línea que veas"], answer: 0, why: "La página oficial de la junta estatal tiene las reglas reales de la licencia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir un oficio",
        questions: [
          { objective: "O1", q: "¿Qué oficio trabaja en calefacción, aire acondicionado y refrigeración?", options: ["Carpintero", "Soldador", "Técnico de HVAC", "Instalador solar"], answer: 2, why: "HVAC son las siglas en inglés de calefacción, ventilación y aire acondicionado." },
          { objective: "O2", q: "¿Cuál es el mejor lugar para buscar el sueldo real de un oficio?", options: ["Un anuncio en redes sociales", "bls.gov/ooh", "Lo que crea un amigo", "Cualquier respuesta de un chat de IA"], answer: 1, why: "El Occupational Outlook Handbook es la fuente oficial y gratis." },
          { objective: "O2", q: "¿Qué significa \"sueldo mediano\"?", options: ["El sueldo más alto del oficio", "El sueldo inicial del primer día", "El sueldo después de impuestos", "El del medio: la mitad gana más y la otra mitad gana menos"], answer: 3, why: "La mediana es el valor del medio." },
          { objective: "O3", q: "¿Qué es un programa de aprendiz registrado?", options: ["Un trabajo pagado con capacitación que termina con una credencial reconocida", "Una pasantía sin pago", "Un título universitario de cuatro años", "Una sola clase de seguridad"], answer: 0, why: "Los aprendices ganan mientras aprenden y obtienen una credencial." },
          { objective: "O3", q: "Un técnico de HVAC va a manejar refrigerantes. ¿Qué necesita?", options: ["Una CDL", "La certificación EPA Section 608", "Un certificado de soldadura", "Nada"], answer: 1, why: "La EPA exige que estén certificados los técnicos que podrían liberar refrigerantes." }
        ]
      }
    },
    {
      name: "Capítulo 2: Entrar y trabajar seguro",
      lessons: [
        {
          objectives: ["O4"],
          title: "Herramientas y seguridad en el trabajo",
          minutes: 5,
          goal: "Nombrar el equipo de seguridad y los hábitos básicos que espera cada oficio.",
          text: [
            "Todos los oficios esperan que trabajes de forma segura desde el primer día. El equipo de protección personal (EPP; en inglés, PPE) común incluye lentes de seguridad, casco, guantes, botas con punta de acero o de seguridad, protección para los oídos y chalecos de alta visibilidad. Los soldadores también necesitan una careta de soldar y ropa resistente al fuego. Quienes trabajan en techos necesitan protección contra caídas.",
            "Hábitos básicos: revisa tus herramientas antes de usarlas; mantén limpia tu área; nunca le quites la protección a una máquina; usa la escalera correcta y mantén tres puntos de apoyo; y levanta con las piernas, no con la espalda. Los electricistas y los trabajadores de mantenimiento deben seguir las reglas de bloqueo y etiquetado (lockout/tagout), que mantienen apagadas las máquinas y la electricidad mientras alguien trabaja en ellas.",
            "Muchos empleadores y sindicatos piden a los trabajadores nuevos que tomen el curso de seguridad de 10 horas de OSHA (la agencia federal de seguridad en el trabajo). Es una tarjeta de capacitación, no una licencia, pero muestra que conoces lo básico.",
            "Tu empleador debe darte el equipo de seguridad y la capacitación requeridos. Pregunta en tu programa qué herramientas tienes que comprar tú; los aprendices muchas veces empiezan con un juego pequeño de herramientas de mano, como una cinta métrica, una navaja, pinzas, desarmadores y una bolsa de herramientas."
          ],
          steps: ["Ponte el EPP que pide el trabajo antes de empezar.", "Revisa que las herramientas y los cables no estén dañados.", "Deja las protecciones en las máquinas y mantén limpia el área de trabajo.", "Usa las escaleras con tres puntos de apoyo.", "Pregunta antes de hacer algo para lo que no te capacitaron."],
          words: [["EPP", "equipo de protección personal (en inglés, PPE): lentes, guantes, cascos y otro equipo que te protege."], ["Bloqueo y etiquetado", "pasos que mantienen una máquina o la electricidad apagada y con candado mientras alguien trabaja en ella (en inglés, lockout/tagout)."], ["OSHA 10", "un curso básico de seguridad de 10 horas para trabajadores, con una tarjeta al terminarlo."]],
          slides: [
            { title: "EPP común", bullets: ["Lentes de seguridad, casco, guantes", "Botas de seguridad, protección para los oídos", "Careta de soldar; protección contra caídas en lo alto"] },
            { title: "Hábitos seguros", bullets: ["Revisa las herramientas antes de usarlas", "Nunca quites las protecciones de las máquinas", "Tres puntos de apoyo en las escaleras", "Levanta con las piernas"] },
            { title: "Bloqueo y etiquetado, y OSHA 10", bullets: ["Electricidad apagada y con candado antes de trabajar", "OSHA 10: una tarjeta básica de seguridad que piden muchos empleadores"] },
            { title: "Tu juego inicial", bullets: ["El empleador da el equipo de seguridad requerido", "Pregunta qué herramientas de mano debes llevar"] }
          ],
          tryIt: "Para tu oficio principal, haz una lista del EPP que usarías y de cinco herramientas de mano que probablemente necesitarías. Luego pregunta en un programa cerca de ti, o revisa su sitio web, cuál es su lista oficial de herramientas.",
          youCanNow: "nombrar el equipo de seguridad y los hábitos que espera tu oficio y preparar una lista de herramientas iniciales.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es un hábito básico de seguridad en los oficios?", options: ["Quitar las protecciones para trabajar más rápido", "Usar el EPP correcto para la tarea", "Saltarte la capacitación de seguridad", "Trabajar con la electricidad conectada para ahorrar tiempo"], answer: 1, why: "Usar el EPP correcto te protege de los peligros comunes." },
            { objective: "O4", q: "Tu programa te manda una lista de herramientas básicas, pero en una tienda te sugieren un kit caro. ¿Qué harías?", options: ["Comprar el kit caro", "No comprar ninguna herramienta", "Tomar herramientas prestadas sin pedir permiso", "Seguir la lista oficial de herramientas del programa"], answer: 3, why: "La lista del programa te dice lo que de verdad necesitas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Opciones de segunda oportunidad si tienes antecedentes",
          minutes: 5,
          goal: "Encontrar programas e incentivos de segunda oportunidad y planear cómo manejar tus antecedentes en los oficios.",
          text: [
            "Tener antecedentes no tiene por qué cerrarte una carrera en los oficios. Muchos programas de aprendiz, sindicatos y empleadores contratan a personas con antecedentes, y muchas organizaciones de reinserción tienen programas de preaprendiz para personas que vuelven a casa.",
            "Dos herramientas federales ayudan a los empleadores a decir que sí. El Programa Federal de Fianzas (Federal Bonding Program) puede darle al empleador una fianza gratis durante los primeros seis meses de un trabajo, sin costo para ti ni para el empleador, como señala la EEOC. El Crédito Tributario por Oportunidad de Trabajo (WOTC) da a los empleadores un crédito de impuestos por contratar a ciertas personas, incluido un \"exconvicto calificado\" contratado dentro del año siguiente a una condena por delito grave (felony) o a su salida de prisión. El empleador y quien solicita llenan el Formulario 8850 del IRS (Form 8850, la agencia de impuestos) a más tardar el día de la oferta de trabajo, así que diles a los empleadores que podrías calificar.",
            "Las licencias y algunos trabajos revisan los antecedentes. Muchas juntas estatales de licencias revisan los antecedentes caso por caso. Antes de gastar dinero en capacitación, comunícate con la junta de tu oficio y pregunta cómo revisan los antecedentes. Algunos permisos especiales de la CDL, como el de materiales peligrosos, necesitan una verificación federal de antecedentes.",
            "Pregunta en una oficina de asistencia legal o en tu programa de reinserción si tus antecedentes se pueden sellar o borrar en tu estado, y practica una respuesta corta y honesta sobre tus antecedentes para las entrevistas."
          ],
          steps: ["Busca programas de preaprendiz de reinserción o de segunda oportunidad cerca de ti.", "Pregunta a los empleadores si usan el Programa Federal de Fianzas o el Crédito Tributario por Oportunidad de Trabajo.", "Comunícate con la junta estatal de licencias de tu oficio y pregunta cómo revisa los antecedentes.", "Pregunta en asistencia legal sobre sellar o borrar antecedentes.", "Practica una respuesta corta y honesta sobre tus antecedentes."],
          words: [["Programa Federal de Fianzas", "un programa gratis del Departamento de Trabajo de Estados Unidos que asegura a los empleadores durante los primeros meses cuando contratan a personas con antecedentes u otras barreras (en inglés, Federal Bonding Program)."], ["Crédito Tributario por Oportunidad de Trabajo", "un crédito federal de impuestos que pueden recibir los empleadores por contratar a personas de ciertos grupos, incluidas algunas personas con condenas por delitos graves (en inglés, Work Opportunity Tax Credit o WOTC)."], ["Junta de licencias", "la oficina estatal que da y revisa las licencias de los oficios."]],
          slides: [
            { title: "Tener antecedentes no es el final", bullets: ["Muchos programas, sindicatos y empleadores contratan a personas con antecedentes", "Busca programas de preaprendiz de reinserción"] },
            { title: "Herramientas para que el empleador diga que sí", bullets: ["Programa Federal de Fianzas: fianza gratis por 6 meses", "WOTC: crédito de impuestos para empleadores", "El Form 8850 se llena a más tardar el día de la oferta"] },
            { title: "Revisa antes de pagar una capacitación", bullets: ["Pregunta a la junta de licencias cómo revisa los antecedentes", "Algunos permisos de la CDL piden verificar antecedentes"] },
            { title: "Siguientes pasos", bullets: ["Pregunta en asistencia legal sobre sellar o borrar antecedentes", "Practica una respuesta corta y honesta"] }
          ],
          sources: [
            { name: "EEOC: Antecedentes de arresto y condena (menciona el Programa Federal de Fianzas, en inglés)", url: "https://www.eeoc.gov/arrestandconviction" },
            { name: "IRS: Crédito Tributario por Oportunidad de Trabajo (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "Departamento de Trabajo de EE. UU.: Crédito Tributario por Oportunidad de Trabajo (en inglés)", url: "https://www.dol.gov/agencies/eta/wotc" }
          ],
          tryIt: "Escribe tres preguntas para la junta estatal de licencias de tu oficio sobre cómo revisa los antecedentes. Luego escribe dos oraciones que podrías decirle a un empleador sobre el Programa Federal de Fianzas y el Crédito Tributario por Oportunidad de Trabajo. (Si no tienes antecedentes, hazlo para un amigo o como práctica.)",
          youCanNow: "nombrar herramientas de segunda oportunidad para los oficios y revisar cómo una junta de licencias revisa los antecedentes antes de pagar una capacitación.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es el Crédito Tributario por Oportunidad de Trabajo?", options: ["Un préstamo para trabajadores", "Un crédito de impuestos que pueden recibir los empleadores por contratar a personas de ciertos grupos", "Un kit de herramientas gratis", "Una licencia de oficio"], answer: 1, why: "El WOTC da a los empleadores un crédito de impuestos por contratar a personas de ciertos grupos, incluidas algunas con antecedentes." },
            { objective: "O5", q: "Tienes antecedentes y quieres una licencia de oficio. ¿Qué harías antes de pagar la capacitación?", options: ["Preguntar a la junta estatal de licencias cómo revisa los antecedentes", "Ocultar los antecedentes en la solicitud", "Pagar la capacitación y esperar lo mejor", "Renunciar a los oficios"], answer: 0, why: "Muchas juntas revisan los antecedentes caso por caso, así que pregunta primero." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Encontrar un programa y presentar tu solicitud",
          minutes: 5,
          goal: "Encontrar dos programas cerca de ti y hacer un plan para presentar tu solicitud.",
          text: [
            "Empieza en apprenticeship.gov. Su buscador Apprenticeship Job Finder te deja buscar por carrera y lugar y presentar tu solicitud directamente con el empleador o el programa. Si no encuentras uno que te sirva, su Partner Finder muestra organizaciones que aceptan solicitudes de aprendices nuevos.",
            "Otros lugares donde buscar: tu American Job Center local (un centro de empleo con ayuda gratis para buscar trabajo y a veces dinero para capacitación), los colegios comunitarios, los centros de capacitación de los sindicatos de cada oficio, los programas de reinserción y los programas para veteranos.",
            "Los programas muchas veces piden un diploma de preparatoria o el GED, una identificación válida, licencia de manejo para algunos oficios, un examen básico de matemáticas, una prueba de drogas y una entrevista. Averigua los pasos y las fechas para presentar la solicitud, porque algunos programas de aprendiz solo reciben solicitudes en ciertas épocas del año.",
            "Prepárate: repasa las matemáticas básicas (fracciones, medir, álgebra sencilla), junta tus documentos y practica respuestas de entrevista sobre seguridad, responsabilidad y por qué quieres ese oficio."
          ],
          steps: ["Busca en apprenticeship.gov por oficio y lugar.", "Anota dos programas, sus requisitos y sus fechas de solicitud.", "Comunícate con tu American Job Center local o con un centro de capacitación de un sindicato.", "Junta tus documentos: identificación, diploma o GED, licencia de manejo si hace falta.", "Practica las matemáticas básicas y tus respuestas de entrevista.", "Presenta tu solicitud y pon la fecha de seguimiento en tu calendario."],
          words: [["American Job Center", "una oficina gratis pagada por el gobierno que ayuda a las personas a encontrar trabajo y capacitación."], ["GED", "un examen que te da una credencial equivalente al diploma de preparatoria."], ["Centro de capacitación sindical", "una escuela que manejan un sindicato de un oficio y los empleadores para capacitar a los aprendices."]],
          slides: [
            { title: "Empieza en apprenticeship.gov", bullets: ["Apprenticeship Job Finder: busca por carrera y lugar", "Partner Finder: programas que reciben solicitudes"] },
            { title: "Otros lugares donde buscar", bullets: ["American Job Centers", "Colegios comunitarios y centros de capacitación sindical", "Programas de reinserción y para veteranos"] },
            { title: "Lo que suelen pedir los programas", bullets: ["Diploma o GED, identificación, a veces licencia de manejo", "Examen de matemáticas, prueba de drogas, entrevista", "Fechas de solicitud: algunos solo abren en ciertas épocas"] },
            { title: "Prepárate", bullets: ["Practica fracciones y medidas", "Junta tus documentos", "Practica respuestas de entrevista"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (en inglés)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Encontrar un American Job Center (en inglés)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Tarea final: haz tu Plan para empezar en un oficio de una página. Incluye el oficio, su sueldo mediano y sus perspectivas según bls.gov/ooh, la licencia o certificación, dos programas cerca de ti, tu equipo de seguridad y tus herramientas iniciales, cualquier recurso de segunda oportunidad y tus primeros tres pasos con fechas.",
          youCanNow: "encontrar programas de aprendiz y de preaprendiz cerca de ti y hacer un plan con fechas para presentar tu solicitud.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué anotar las fechas de solicitud de cada programa?", options: ["Algunos programas solo reciben solicitudes en ciertas épocas", "Los programas nunca cierran", "Las fechas no importan", "Para enseñárselas a tus amigos"], answer: 0, why: "Perder el periodo de solicitud puede significar esperar meses." },
            { objective: "O6", q: "Un programa cerca de ti tiene un examen de entrada con medidas y fracciones. ¿Qué harías?", options: ["No presentar el examen", "Esperar que sea fácil", "Practicar fracciones, medidas y álgebra sencilla antes del examen", "Presentar tu solicitud a otro oficio"], answer: 2, why: "Practicar las matemáticas con tiempo te ayuda a aprobar los exámenes de entrada." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Entrar y trabajar seguro",
        questions: [
          { objective: "O4", q: "¿Qué significa PPE (en español, EPP)?", options: ["Programa Pagado para Electricistas", "Equipo de protección personal", "Prueba Pública de Plomería", "Plan de Planta Eléctrica"], answer: 1, why: "El EPP es equipo como lentes, guantes y cascos que te protege." },
          { objective: "O4", q: "¿Qué es el bloqueo y etiquetado (lockout/tagout)?", options: ["Cerrar la caja de herramientas en la noche", "Una votación del sindicato", "Mantener una máquina o la electricidad apagada y con candado mientras alguien trabaja en ella", "Una forma de marcar la salida"], answer: 2, why: "Impide que una máquina arranque mientras alguien trabaja en ella." },
          { objective: "O5", q: "¿Qué le puede dar el Programa Federal de Fianzas a un empleador que contrata a alguien con antecedentes?", options: ["Una fianza gratis durante los primeros seis meses", "Un camión gratis", "Una licencia para el trabajador", "Nada"], answer: 0, why: "La fianza es gratis para el trabajador y para el empleador y cubre los primeros seis meses." },
          { objective: "O5", q: "Tienes antecedentes y quieres una licencia de electricista. ¿Qué debes hacer antes de pagar la capacitación?", options: ["Ocultar los antecedentes", "Rendirte", "Pagar primero y preguntar después", "Preguntar a la junta estatal de licencias cómo revisa los antecedentes"], answer: 3, why: "Las juntas muchas veces revisan caso por caso; preguntar primero protege tu tiempo y tu dinero." },
          { objective: "O6", q: "¿Dónde puedes buscar programas de aprendiz por carrera y lugar?", options: ["Solo en un grupo de redes sociales", "En el Apprenticeship Job Finder de apprenticeship.gov", "En el sitio web del IRS", "En un anuncio de televisión"], answer: 1, why: "Es la herramienta oficial de búsqueda del Departamento de Trabajo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Empezar una carrera en los oficios calificados",
    questions: [
      { objective: "O1", q: "¿Qué oficio une metal usando calor?", options: ["Plomero", "Soldador", "Carpintero", "Técnico de HVAC"], answer: 1, why: "Los soldadores unen metal con calor." },
      { objective: "O1", q: "¿Qué te permite hacer una CDL?", options: ["Instalar cableado", "Arreglar tuberías", "Manejar camiones grandes y autobuses", "Soldar acero"], answer: 2, why: "Se necesita una licencia de conducir comercial para camiones grandes y autobuses." },
      { objective: "O1", q: "Odias las alturas y quieres estar en casa cada noche. ¿Qué probablemente NO va contigo?", options: ["Manejar camiones de larga distancia e instalar paneles solares en techos", "Reparar plomería en interiores", "Soldar en un taller", "Carpintería de gabinetes"], answer: 0, why: "Manejar largas distancias te tiene fuera varios días, y el trabajo en techos es en lo alto." },
      { objective: "O1", q: "¿Qué experiencia puede contar para una carrera en los oficios?", options: ["Solo trabajos civiles pagados", "Nada antes de los 25 años", "Solo clases universitarias", "La mecánica militar, el trabajo en equipo en el deporte y los programas de capacitación hechos en prisión"], answer: 3, why: "Las habilidades prácticas y la disciplina te sirven vengan de donde vengan." },
      { objective: "O2", q: "¿Qué sitio es la fuente oficial y gratis de sueldos y perspectivas de los oficios?", options: ["bls.gov/ooh", "Un anuncio de trabajo", "Un comentario en un video", "Una plática con un amigo"], answer: 0, why: "La Oficina de Estadísticas Laborales publica el Occupational Outlook Handbook." },
      { objective: "O2", q: "En un perfil del manual, ¿qué pestaña muestra la capacitación que necesitas?", options: ["Pay", "Job Outlook", "How to Become One", "Similar Occupations"], answer: 2, why: "How to Become One (cómo llegar a serlo) describe los estudios, la capacitación y las licencias." },
      { objective: "O2", q: "Un asistente de IA te da una cifra de sueldo para soldadores. ¿Qué debes hacer?", options: ["Creerle", "Publicarla en internet", "Usarla tal cual en tu plan", "Revisar la cifra en bls.gov/ooh"], answer: 3, why: "Toma las cifras de la página oficial; la IA puede equivocarse o estar desactualizada." },
      { objective: "O3", q: "Según el manual, la mayoría de los electricistas aprende el oficio con:", options: ["Una clase de fin de semana", "Un programa de aprendiz de 4 o 5 años", "Solo videos en línea", "Un título universitario de cuatro años"], answer: 1, why: "El perfil de la BLS dice que la mayoría aprende en un programa de aprendiz de 4 o 5 años." },
      { objective: "O3", q: "¿Cómo suelen recibir pago los aprendices?", options: ["Ellos pagan por trabajar", "Nunca", "Con un sueldo que sube a medida que crecen sus habilidades", "Solo cuando terminan"], answer: 2, why: "Los aprendices ganan mientras aprenden, con aumentos de sueldo." },
      { objective: "O3", q: "¿Qué es un programa de preaprendiz?", options: ["Un programa corto que te ayuda a entrar a un programa de aprendiz", "Una licencia", "Un formulario de impuestos", "Una cuota del sindicato"], answer: 0, why: "Te prepara con lo básico, como matemáticas, herramientas y seguridad." },
      { objective: "O3", q: "Un chofer de camión nuevo quiere una CDL Clase A. Antes de los exámenes debe:", options: ["Comprar un camión", "Terminar la capacitación inicial para conductores con un proveedor registrado", "Sacar una tarjeta EPA 608", "Presentar un examen de soldadura"], answer: 1, why: "Las reglas federales exigen capacitarse con un proveedor del Training Provider Registry." },
      { objective: "O3", q: "¿Quiénes pueden muchas veces usar los beneficios del GI Bill para programas de aprendiz?", options: ["Solo las tropas en servicio activo", "Nadie", "Solo las personas mayores de 65 años", "Muchos veteranos"], answer: 3, why: "El VA dice que los beneficios del GI Bill pueden pagar muchos programas de aprendiz y de capacitación en el trabajo." },
      { objective: "O4", q: "¿Qué es EPP?", options: ["Una cinta métrica", "Los lentes de seguridad", "Un recibo de pago", "Un currículum"], answer: 1, why: "Los lentes de seguridad protegen tus ojos; son equipo de protección personal." },
      { objective: "O4", q: "La protección de una esmeriladora te estorba. Debes:", options: ["Dejar la protección puesta y pedir ayuda si el trabajo necesita otra herramienta", "Quitar la protección", "Usar la mano para sostener el disco", "Trabajar más rápido"], answer: 0, why: "Quitar las protecciones causa lesiones graves." },
      { objective: "O4", q: "¿Qué es OSHA 10?", options: ["Una licencia para trabajar como electricista", "Un permiso especial de la CDL", "Un curso básico de seguridad de 10 horas con una tarjeta al terminarlo", "Un crédito de impuestos"], answer: 2, why: "Es una capacitación de seguridad, no una licencia." },
      { objective: "O5", q: "¿Quién llena el Formulario 8850 del IRS (Form 8850) para el Crédito Tributario por Oportunidad de Trabajo, y cuándo?", options: ["Solo el trabajador, después de un año", "El estado, al final del año", "Nadie; es automático", "El empleador y quien solicita, a más tardar el día de la oferta de trabajo"], answer: 3, why: "El IRS dice que el formulario se llena a más tardar el día de la oferta de trabajo." },
      { objective: "O5", q: "Muchas juntas estatales de licencias revisan los antecedentes:", options: ["Nunca", "Caso por caso", "Solo para plomeros", "Solo en línea"], answer: 1, why: "Pregunta a la junta cómo revisa los antecedentes antes de pagar una capacitación." },
      { objective: "O6", q: "¿Qué lugares pueden ayudarte a encontrar un programa de oficios?", options: ["Solo anuncios privados", "Solo una lotería", "Los American Job Centers, los colegios comunitarios, los centros de capacitación sindical y los programas de reinserción", "Ninguno; debes esperar a que te llamen"], answer: 2, why: "Son lugares comunes, gratis o de bajo costo, para empezar." },
      { objective: "O6", q: "Algunos programas de aprendiz solo reciben solicitudes en ciertas épocas. Entonces debes:", options: ["Anotar las fechas de solicitud de cada programa", "Solicitar cuando te acuerdes", "Descartar los programas con fechas", "Solicitar solo en verano"], answer: 0, why: "Conocer las fechas evita que se te pase el plazo." },
      { objective: "O6", q: "¿Qué matemáticas vale más la pena practicar antes de un examen de entrada a un oficio?", options: ["Cálculo", "Fracciones, medidas y álgebra sencilla", "Teoría estadística", "Nunca se usan matemáticas"], answer: 1, why: "Los oficios usan fracciones, medidas y álgebra básica todos los días." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      2,
      4,
      6,
      8,
      9,
      12,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Oficio y encaje",
        objective: "O1",
        notYet: "No hay un oficio claro, o no sabe cómo es el trabajo.",
        meets: "Un oficio con una descripción corta del trabajo y por qué va con la persona.",
        exceeds: "Lo compara con un segundo oficio y explica la elección."
      },
      {
        name: "Sueldo y perspectivas",
        objective: "O2",
        notYet: "Falta el sueldo, viene de una fuente no oficial o no tiene año.",
        meets: "El sueldo mediano con su año y las perspectivas de empleo de bls.gov/ooh.",
        exceeds: "Además anota la capacitación habitual según el manual."
      },
      {
        name: "Licencia y programas",
        objective: "O3",
        notYet: "No revisó la licencia, o tiene menos de dos programas.",
        meets: "La licencia o certificación de la página oficial del estado y dos programas cerca.",
        exceeds: "Incluye las fechas de solicitud y los requisitos de cada programa."
      },
      {
        name: "Equipo de seguridad y herramientas",
        objective: "O4",
        notYet: "Falta el EPP o las herramientas.",
        meets: "Anota el EPP y las herramientas básicas del oficio.",
        exceeds: "Los comparó con la lista oficial de herramientas de un programa."
      },
      {
        name: "Recursos de segunda oportunidad",
        objective: "O5",
        notYet: "Faltan recursos donde sí aplican.",
        meets: "Anota los recursos de segunda oportunidad que aplican, o indica que no aplica ninguno.",
        exceeds: "Incluye preguntas para la junta de licencias y qué decirle a un empleador."
      },
      {
        name: "Primeros tres pasos",
        objective: "O6",
        notYet: "Los pasos son vagos o no tienen fechas.",
        meets: "Tres pasos claros con fechas.",
        exceeds: "El primer paso ya está hecho."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que presentan su solicitud a un programa de preaprendiz, de aprendiz o de oficios en 60 días (encuesta de seguimiento)",
      "Participantes que empiezan un programa de oficios o un empleo en un oficio en 6 meses",
      "Participantes que contactan a una junta estatal de licencias, un American Job Center o un centro de capacitación sindical en 30 días",
      "Participantes que empiezan otro curso de oficios de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Sitios oficiales: bls.gov/ooh, apprenticeship.gov y la junta de licencias de tu estado",
      "Papel y lápiz o un documento para el Plan para empezar en un oficio",
      "Unos 60 minutos para las lecciones y las comprobaciones, más tiempo para investigar"
    ],
    facilitatorNotes: [
      "Invita a un centro local de capacitación sindical, a un colegio comunitario o a un programa de preaprendiz a hablar con el grupo.",
      "Ayuda a usar bls.gov/ooh y apprenticeship.gov en vivo en clase; los sueldos y los programas cambian.",
      "Con quienes tienen antecedentes, insiste en consultar con la junta estatal de licencias antes de pagar cualquier capacitación.",
      "Ayuda a los veteranos a revisar los beneficios del GI Bill para programas de aprendiz en fuentes oficiales del VA.",
      "Califica el Plan para empezar en un oficio con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
