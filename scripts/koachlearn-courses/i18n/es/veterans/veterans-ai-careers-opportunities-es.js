"use strict";

// Koach Learn course (Spanish translation of veterans-ai-careers-opportunities). Shape and translation rules: scripts/koachlearn-courses/README.md.
// US program and agency names (VA, O*NET, GI Bill, VET TEC, SkillBridge, TAP) stay in English with a short Spanish explanation.

module.exports = {
  id: "veterans-ai-careers-opportunities-es",
  lang: "es",
  translationOf: "veterans-ai-careers-opportunities",
  category: "Veterans (military)",
  name: "Carreras del futuro y oportunidades con IA",
  skills: "Relacionar puestos militares con carreras civiles, Detectar carreras relacionadas con la IA que están creciendo, Comparar carreras con datos oficiales, Encontrar formación y beneficios, Armar un plan de carrera de 90 días",
  outcome: "armar una lista corta de tres carreras civiles que encajen con tu experiencia militar, comparar su sueldo, crecimiento y formación con datos oficiales y escribir un plan de 90 días para empezar en la mejor.",
  about: [
    "Este curso es para veteranos y militares en transición que están eligiendo lo que sigue. Muchas carreras están creciendo gracias a la IA, y muchas necesitan justo lo que aprendiste en el servicio: disciplina, habilidad técnica, liderazgo y trabajar bajo presión.",
    "Vas a relacionar tu puesto militar con carreras civiles usando herramientas oficiales del Departamento de Trabajo, usar un asistente de IA para explorarlas y compararlas, revisar cada número con datos oficiales y encontrar formación que quizás puedas pagar con tus beneficios.",
    "Cada lección toma unos cinco minutos: lee, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de carrera de una página: tres carreras civiles que coincidan con tu puesto militar (del Military Crosswalk de O*NET o de CareerOneStop), cada una con su sueldo mediano y sus perspectivas de empleo según el Occupational Outlook Handbook y la brecha de habilidades que necesitas cerrar; luego elige una carrera y haz una lista de tres pasos con fecha para los próximos 90 días, incluida una opción de formación o de beneficio.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veteranos y militares en transición que están decidiendo qué carrera civil seguir. Muchos tienen experiencia técnica, en logística o en liderazgo, pero no saben qué carreras están creciendo ni cómo encaja su servicio.",
    startingPoint: "Saben usar un teléfono inteligente o una computadora y buscar en internet. Quizás han probado un asistente de IA. Todavía no han comparado carreras con datos oficiales ni han escrito un plan con fechas.",
    gap: "Elegir una carrera solo con suposiciones o respuestas de la IA puede hacer perder meses y beneficios. Necesitan relacionar su puesto militar con carreras civiles usando herramientas oficiales, comparar el sueldo, las perspectivas y la formación con datos oficiales y comprometerse con un plan corto y con fechas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; no se supone experiencia técnica",
      "Dispositivos: un teléfono inteligente o una computadora con internet, a veces una computadora compartida de la base o de la biblioteca",
      "Tiempo: lecciones de unos 5 minutos que caben entre las citas de transición y el trabajo",
      "Los sueldos, los requisitos y las reglas de los programas cambian, así que se revisan bls.gov/ooh, va.gov y dol.gov en vez de confiar en los números de la IA",
      "Privacidad: ningún número de Seguro Social, de expediente del VA ni de servicio en ninguna instrucción a la IA"
    ],
    prerequisites: "Ninguno. Quien sea nuevo con los asistentes de IA puede tomar primero \"Introducción a la IA y la fuerza laboral del futuro\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con los campos que están creciendo con la IA", action: "identificar qué campos en crecimiento encajan con tu experiencia militar", standard: "nombrando al menos dos con una razón tomada de tu servicio" },
    { id: "O2", condition: "Con tu MOS, rating o AFSC", action: "usar el Military Crosswalk de O*NET y CareerOneStop para hacer una lista de empleos civiles que coinciden con tu puesto militar", standard: "con al menos cinco empleos que coinciden" },
    { id: "O3", condition: "Con una carrera de tu lista", action: "usar un asistente de IA para describir el trabajo diario, las habilidades y la forma de entrar a la carrera, y marcar cada dato que hay que revisar", standard: "marcando cada número, certificación y requisito" },
    { id: "O4", condition: "Con tres carreras", action: "comparar su sueldo mediano, sus perspectivas de empleo y su educación de entrada usando el Occupational Outlook Handbook", standard: "con cada número tomado de bls.gov/ooh, no de la IA" },
    { id: "O5", condition: "Para la carrera que elijas", action: "encontrar una opción de formación y un programa oficial que pueda ayudar a pagarla", standard: "con un requisito copiado de la página oficial del programa" },
    { id: "O6", condition: "Con tu comparación y tu opción de formación", action: "escribir un plan de carrera de 90 días con tres pasos con fecha", standard: "con cada paso concreto, con fecha y con una opción de formación o de beneficio" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Dónde están las oportunidades",
      lessons: [
        {
          objectives: ["O1"],
          title: "Carreras que están creciendo con la IA",
          minutes: 5,
          goal: "Nombrar cuatro tipos de carreras que crecen con la IA y decir cuáles encajan con tu experiencia.",
          text: [
            "La IA no solo está creando empleos para programadores. Está cambiando el trabajo en muchos campos y crea demanda de personas que puedan operar, proteger, reparar y supervisar los sistemas que la rodean.",
            "Campos donde los veteranos suelen encajar: ciberseguridad (proteger redes y datos), datos y soporte de TI (mantener funcionando los sistemas y los datos), logística y cadena de suministro (planear, prever, mover mercancía), mantenimiento calificado y trabajo de técnico (equipo, energía, aviación, electrónica), y gestión de proyectos y operaciones (dirigir personas y planes).",
            "Muchos de estos empleos todavía necesitan manos, criterio y confianza. Un especialista en logística que puede leer un pronóstico de la IA y luego decidir qué pedir vale más que uno que no puede."
          ],
          words: [["Ciberseguridad", "proteger computadoras, redes y datos contra ataques."], ["Cadena de suministro", "todos los pasos que llevan la mercancía desde quien la fabrica hasta quien la usa."]],
          slides: [
            { title: "La IA crea demanda más allá de los programadores", bullets: ["Personas que operan, protegen, reparan y supervisan sistemas", "Personas que usan la IA y siguen decidiendo"] },
            { title: "Campos donde encajan los veteranos", bullets: ["Ciberseguridad y soporte de TI", "Logística y cadena de suministro", "Mantenimiento calificado y técnicos", "Gestión de proyectos y operaciones"] },
            { title: "Tu ventaja", bullets: ["Disciplina y habilidad técnica", "Liderazgo bajo presión", "Criterio: leer los datos y luego decidir"] }
          ],
          tryIt: "Escribe los cinco campos de esta lección. Junto a cada uno, escribe algo que hiciste en el servicio que encaje con él, o \"nada todavía\".",
          youCanNow: "nombrar carreras que crecen con la IA y decir cuáles encajan con tu experiencia militar.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué la IA está creando demanda de personas en algunos campos?", options: ["La IA funciona sola y no necesita a nadie", "En esos campos ahora solo trabajan robots", "Alguien tiene que operar, proteger, reparar y supervisar los sistemas de IA", "La IA ya reemplazó todos los empleos técnicos"], answer: 2, why: "A medida que la IA se extiende, se necesitan personas para operar, proteger, reparar y supervisar los sistemas." },
            { objective: "O1", q: "En el servicio manejaste equipos de radio y de redes. ¿Qué campo en crecimiento anotas al lado?", options: ["Ciberseguridad o soporte de TI", "Ninguno, porque las habilidades de radio no se transfieren", "Solo agricultura", "Solo empleos que no piden experiencia"], answer: 0, why: "La experiencia con redes y equipos encaja con campos en crecimiento como el soporte de TI y la ciberseguridad." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Relacionar tu MOS, rating o AFSC con empleos civiles",
          minutes: 5,
          goal: "Usar herramientas oficiales de equivalencias para hacer una lista de empleos civiles que coinciden con tu puesto militar.",
          text: [
            "No empieces con una suposición. Empieza con la equivalencia oficial. O*NET OnLine, del Departamento de Trabajo, tiene una búsqueda llamada Military Crosswalk: elige tu rama, escribe tu código o puesto (por ejemplo un MOS del Ejército o de la Infantería de Marina, un rating de la Armada o la Guardia Costera, un AFSC de la Fuerza Aérea o un SFSC de la Fuerza Espacial) y mira las ocupaciones civiles que coinciden.",
            "La página Find a Job (encontrar empleo) para veteranos del Departamento de Trabajo también tiene un enlace al Veterans Job Matcher de CareerOneStop, que conecta ocupaciones militares con carreras civiles. Usa los dos y quédate con los empleos que aparecen más de una vez.",
            "Luego usa un asistente de IA para entender la lista: \"Explica estos tres empleos con palabras sencillas, cómo es un día normal y cuáles de mis habilidades sirven. Fui especialista en logística de la Armada durante 8 años.\""
          ],
          steps: ["Abre la búsqueda Military Crosswalk de O*NET.", "Elige tu rama y escribe tu código o puesto.", "Anota los empleos civiles que coinciden.", "Repite en el Veterans Job Matcher de CareerOneStop.", "Pídele a un asistente de IA que explique los empleos que aparecen en las dos listas."],
          words: [["Crosswalk (equivalencias)", "una herramienta que relaciona un puesto militar con empleos civiles."], ["Ocupación", "un tipo de empleo, como especialista en logística o administrador de redes."]],
          slides: [
            { title: "Empieza con la equivalencia oficial", bullets: ["Búsqueda Military Crosswalk de O*NET", "Elige la rama, escribe el código o puesto", "Mira las ocupaciones civiles que coinciden"] },
            { title: "Compara", bullets: ["Veterans Job Matcher de CareerOneStop", "Quédate con los empleos que aparecen en las dos listas"] },
            { title: "Luego pídele a la IA que explique", bullets: ["Qué es el empleo con palabras sencillas", "Cómo es un día normal", "Cuáles de tus habilidades sirven"] }
          ],
          sources: [{ name: "O*NET OnLine: búsqueda Military Crosswalk", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "Departamento de Trabajo de EE. UU., VETS: encontrar empleo", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Busca tu puesto militar en el Military Crosswalk de O*NET. Elige cinco empleos civiles que coincidan y luego pídele a un asistente de IA que explique cada uno en dos oraciones sencillas.",
          youCanNow: "usar herramientas oficiales de equivalencias y un asistente de IA para hacer una lista de empleos civiles que coinciden con tu servicio y entenderlos.",
          quickCheck: [
            { objective: "O2", q: "¿Qué te da el Military Crosswalk de O*NET?", options: ["Tu calificación de discapacidad del VA", "Empleos civiles que coinciden con el código o el nombre de tu puesto militar", "Una lista de anuncios de empleo cerca de ti", "El saldo de tu GI Bill"], answer: 1, why: "El Crosswalk relaciona los códigos y nombres de puestos militares con ocupaciones civiles." },
            { objective: "O2", q: "Encontraste cinco empleos que coinciden, pero algunos nombres no son claros. ¿Qué haces?", options: ["Quitar todos los empleos con un nombre poco claro", "Elegir el del nombre más largo", "Adivinar qué es cada empleo", "Pedirle a un asistente de IA que explique cada uno en dos frases sencillas"], answer: 3, why: "La IA es buena para explicar un empleo con palabras sencillas una vez que las herramientas oficiales te dieron la lista." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Explorar una carrera con un asistente de IA",
          minutes: 5,
          goal: "Usar la IA para describir el trabajo diario, las habilidades y la forma de entrar a una carrera, y marcar lo que hay que revisar.",
          text: [
            "Un asistente de IA es un buen compañero de investigación para un primer vistazo. Pídele que describa un día en el empleo, las habilidades principales, las herramientas habituales, los puestos comunes de nivel inicial y las preguntas que deberías hacerle a alguien que tiene ese empleo.",
            "Usa una instrucción clara. Ejemplo: \"Soy veterano de la Fuerza Aérea con 6 años en mantenimiento de aeronaves. Explica el trabajo de técnico de turbinas eólicas: un día típico, las 5 habilidades principales, cuáles de mis habilidades sirven y la forma habitual de entrar. Usa puntos cortos.\"",
            "Marca con un signo de interrogación cada dato que pueda cambiar, como el sueldo, los nombres de las certificaciones y los requisitos. Los vas a revisar en el siguiente capítulo."
          ],
          steps: ["Elige un empleo de tu lista.", "Pide un día típico, las habilidades principales, las habilidades que sirven y la forma de entrar.", "Pregunta: \"¿Qué preguntas debería hacerle a alguien que tiene este empleo?\"", "Pon un signo de interrogación junto al sueldo, las certificaciones y los requisitos."],
          words: [["Forma de entrar", "el camino habitual para llegar a un empleo: formación, certificación, aprendizaje o título."], ["Habilidad transferible", "una habilidad de un empleo que sirve en otro."]],
          slides: [
            { title: "Pídele a la IA un primer vistazo", bullets: ["Un día típico", "Habilidades y herramientas principales", "Cuáles de tus habilidades sirven", "La forma habitual de entrar"] },
            { title: "Ejemplo de instrucción", bullets: ["Mantenimiento de aeronaves en la Fuerza Aérea, 6 años", "Explica técnico de turbinas eólicas", "Día, 5 habilidades, lo que sirve, forma de entrar"] },
            { title: "Marca lo que puede cambiar", bullets: ["El sueldo", "Nombres y reglas de certificaciones", "Ponles un ? para revisarlos después"] }
          ],
          tryIt: "Pídele a un asistente de IA que describa una carrera de tu lista usando la instrucción de ejemplo. Pon un signo de interrogación junto a cada número, certificación o requisito de la respuesta.",
          youCanNow: "usar un asistente de IA para explorar una carrera y marcar qué datos debes revisar.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es la forma de entrar?", options: ["El camino habitual que siguen las personas para llegar a un empleo", "La puerta principal de una empresa", "El sueldo de un trabajador en su primer año", "El último paso antes de jubilarse"], answer: 0, why: "La forma de entrar es el camino habitual hacia un empleo, como una formación, una certificación o un aprendizaje." },
            { objective: "O3", q: "La IA dice que una carrera \"requiere la certificación Security+\". ¿Qué haces?", options: ["Inscribirte al examen de inmediato", "Ignorar toda la respuesta", "Poner un signo de interrogación al lado y revisarlo con una fuente oficial", "Copiarlo en tu plan como un hecho"], answer: 2, why: "Las certificaciones y los requisitos son datos que se revisan, no que se creen solo porque los dijo la IA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Dónde están las oportunidades",
        questions: [
          { objective: "O1", q: "¿Cuál de estos es un campo donde la IA está aumentando la demanda de personas?", options: ["Ciberseguridad", "Solo los videojuegos", "Solo la programación", "Ninguno, la IA elimina todos los empleos"], answer: 0, why: "La IA crea demanda de personas que protegen, operan y supervisan sistemas, como en la ciberseguridad." },
          { objective: "O2", q: "¿Cuál es el mejor lugar para EMPEZAR a relacionar tu MOS con empleos civiles?", options: ["La suposición de un amigo", "El Military Crosswalk de O*NET", "Un anuncio de empleo cualquiera", "Una publicación en redes sociales"], answer: 1, why: "La equivalencia oficial relaciona tu código militar con ocupaciones civiles." },
          { objective: "O2", q: "O*NET y CareerOneStop te dan listas distintas. ¿Qué es lo inteligente?", options: ["Ignorar las dos", "Elegir la lista más corta", "Quedarte con los empleos que aparecen en las dos", "Pedirle a la IA que elija una por ti"], answer: 2, why: "Los empleos que aparecen en las dos listas oficiales son coincidencias fuertes." },
          { objective: "O3", q: "Una respuesta de la IA dice que un empleo paga $95,000. ¿Qué haces?", options: ["Terminar tu búsqueda; ya lo encontraste", "Publicarlo en internet", "Creerle porque es específico", "Ponerle un signo de interrogación y revisarlo con datos oficiales"], answer: 3, why: "El sueldo puede estar mal o desactualizado, así que hay que revisarlo." },
          { objective: "O3", q: "¿Qué es una habilidad transferible?", options: ["Una habilidad de un empleo que sirve en otro", "Una habilidad que puedes vender", "Una habilidad solo para oficiales", "Una habilidad que la IA hace por ti"], answer: 0, why: "Las habilidades transferibles pasan de un empleo a otro, como dirigir un equipo o llevar inventario." }
        ]
      }
    },
    {
      name: "Capítulo 2: Elegir y planear tu camino",
      lessons: [
        {
          objectives: ["O4"],
          title: "Comparar carreras con datos oficiales",
          minutes: 5,
          goal: "Comparar el sueldo, las perspectivas y la educación de entrada de tres carreras usando el Occupational Outlook Handbook.",
          text: [
            "El Occupational Outlook Handbook (Manual de perspectivas ocupacionales) de la Oficina de Estadísticas Laborales (bls.gov/ooh) es gratuito y oficial. Para cada ocupación da el sueldo mediano, la educación que normalmente se necesita para entrar, la formación en el trabajo y las perspectivas de empleo: qué tan rápido se espera que crezca o baje el número de empleos.",
            "Haz una tabla sencilla con tus tres carreras en filas y estas columnas: sueldo mediano, educación de entrada, formación, perspectivas de empleo y tu brecha de habilidades. Un asistente de IA te puede armar la tabla vacía; tú llenas los números con el Handbook.",
            "El sueldo mediano es el punto del medio: la mitad de los trabajadores gana más y la mitad gana menos. El sueldo también cambia según el lugar, así que úsalo para comparar carreras, no como una promesa."
          ],
          steps: ["Entra a bls.gov/ooh y busca cada carrera.", "Anota el sueldo mediano, la educación de entrada, la formación y las perspectivas de empleo.", "Escribe tu brecha de habilidades: lo que todavía necesitas.", "Pon todo en una tabla."],
          words: [["Sueldo mediano", "el sueldo del medio: la mitad de los trabajadores gana más y la mitad gana menos."], ["Perspectivas de empleo", "cuánto se espera que crezca o baje el número de empleos."], ["Brecha de habilidades", "las habilidades o credenciales que todavía necesitas para un empleo."]],
          slides: [
            { title: "La fuente oficial", bullets: ["Occupational Outlook Handbook: bls.gov/ooh", "Gratis, de la Oficina de Estadísticas Laborales"] },
            { title: "Qué anotar", bullets: ["Sueldo mediano", "Educación de entrada y formación", "Perspectivas de empleo", "Tu brecha de habilidades"] },
            { title: "Léelo bien", bullets: ["Mediana = punto del medio", "El sueldo cambia según el lugar", "Úsalo para comparar, no como promesa"] }
          ],
          sources: [{ name: "Oficina de Estadísticas Laborales: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Pídele a un asistente de IA una tabla de comparación vacía con tus tres carreras y las columnas de esta lección. Llena tú los números con bls.gov/ooh.",
          youCanNow: "comparar carreras con datos oficiales de sueldo, educación y perspectivas.",
          quickCheck: [
            { objective: "O4", q: "¿De dónde salen los números de tu tabla de comparación?", options: ["De la respuesta del asistente de IA", "De lo que adivina un amigo", "De un anuncio de empleo de una empresa", "Del Occupational Outlook Handbook en bls.gov/ooh"], answer: 3, why: "La IA puede armar la tabla vacía, pero los números de sueldo y perspectivas salen de datos oficiales." },
            { objective: "O4", q: "Una carrera paga más pero crece lento; otra paga un poco menos y crece rápido. ¿Qué haces?", options: ["Elegir siempre el sueldo más alto", "Comparar juntos el sueldo, las perspectivas y la formación, y cómo encajan contigo", "Elegir la del nombre más corto", "Dejar que la IA elija por ti"], answer: 1, why: "Comparar varias columnas juntas, más cómo encajas tú, da una mejor decisión que un solo número." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Encontrar formación y beneficios que la paguen",
          minutes: 5,
          goal: "Encontrar una opción de formación para la carrera que elegiste y un programa oficial que pueda ayudar a pagarla.",
          text: [
            "Varios programas oficiales pueden ayudar. El GI Bill (los beneficios educativos del VA) puede pagar muchas escuelas y programas de formación; la herramienta GI Bill Comparison Tool del VA te ayuda a compararlos. VET TEC 2.0 paga ciertas formaciones en alta tecnología sin título universitario (programación, datos, ciencias de la información) para veteranos y militares que califican, con un número limitado de lugares cada año.",
            "¿Todavía estás en servicio? DoD SkillBridge permite a los militares formarse con una empresa colaboradora durante sus últimos 180 días de servicio, con aprobación del mando. Los aprendizajes te permiten ganar dinero mientras aprendes. Los American Job Centers (centros de empleo) del Departamento de Trabajo (encuentra uno en CareerOneStop) dan prioridad de servicio a los veteranos para la formación laboral.",
            "Los requisitos cambian. Pídele a la IA una lista de opciones y luego confirma cada una en va.gov, dol.gov o con un orientador antes de contar con ella. El programa Personalized Career Planning and Guidance del VA da orientación gratuita a los veteranos que califican."
          ],
          steps: ["Di qué formación necesita tu carrera (certificación, curso, aprendizaje).", "Revisa las opciones del GI Bill con la GI Bill Comparison Tool.", "Si es una carrera de tecnología, lee la página de VET TEC 2.0.", "¿Todavía en servicio? Pregunta en tu oficina de transición por SkillBridge.", "Confirma los requisitos en va.gov o con un orientador."],
          words: [["GI Bill", "los beneficios educativos del VA para veteranos y militares."], ["SkillBridge", "un programa del Departamento de Defensa para formarte con una empresa durante tus últimos 180 días de servicio."], ["Aprendizaje (apprenticeship)", "un empleo pagado con formación estructurada, para ganar mientras aprendes."]],
          slides: [
            { title: "Programas que pueden ayudar", bullets: ["GI Bill y la GI Bill Comparison Tool", "VET TEC 2.0 para formación en alta tecnología", "Aprendizajes: gana mientras aprendes"] },
            { title: "¿Todavía en servicio?", bullets: ["DoD SkillBridge: últimos 180 días de servicio", "Necesita aprobación del mando"] },
            { title: "Confirma antes de contar con ello", bullets: ["Los requisitos y los lugares cambian", "Revisa va.gov y dol.gov", "La orientación profesional gratuita del VA puede ayudar"] }
          ],
          sources: [
            { name: "VA: sobre los beneficios del GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "Departamento de Trabajo de EE. UU., VETS: encontrar empleo (SkillBridge, American Job Centers)", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance (orientación profesional)", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Para tu carrera principal, escribe una opción de formación y un programa que pueda ayudar a pagarla. Abre la página oficial de ese programa y anota un requisito.",
          youCanNow: "encontrar formación para una carrera y un programa oficial que pueda ayudar a pagarla, y confirmar los requisitos.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un aprendizaje?", options: ["Una escuela que solo enseña en línea", "Un préstamo que debes devolver", "Un trabajo pagado donde te formas y ganas dinero al mismo tiempo", "Un examen que haces una sola vez"], answer: 2, why: "Un aprendizaje te permite ganar dinero mientras aprendes." },
            { objective: "O5", q: "Encontraste un programa que podría pagar tu formación. ¿Qué revisas antes de contar con él?", options: ["Un requisito en la página oficial del programa", "Si un amigo lo usó", "Si la IA dijo que calificas", "Nada; todos los veteranos califican"], answer: 0, why: "Los requisitos están en la página oficial; la IA y los amigos pueden equivocarse." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escribir tu plan de carrera de 90 días",
          minutes: 5,
          goal: "Escribir un plan de 90 días con tres pasos con fecha hacia una carrera elegida.",
          text: [
            "Sabes planear una misión hacia atrás desde el objetivo. Haz lo mismo aquí. Elige una carrera de tu tabla y planea hacia atrás: ¿qué debe ser cierto a los 90 días, a los 60 y a los 30?",
            "Los buenos pasos son específicos y tienen fecha: \"Para el 15 de noviembre: hablar con una persona que trabaje en logística.\" \"Para el 1 de diciembre: solicitar el programa de formación.\" \"Para el 15 de enero: solicitar cinco empleos.\" Los pasos vagos como \"investigarlo\" no se cumplen.",
            "Un asistente de IA puede convertir tus notas en un plan ordenado y sugerir pasos que se te pasaron. Tú decides las fechas y el plan es tuyo. Compártelo con un mentor, un orientador o alguien del personal de TAP (el Programa de Asistencia para la Transición) o de un American Job Center que te pueda pedir cuentas."
          ],
          steps: ["Elige una carrera de tu tabla de comparación.", "Escribe lo que debe ser cierto a los 90 días.", "Planea hacia atrás: pasos a los 60 y a los 30 días.", "Haz cada paso específico y con fecha.", "Pídele a la IA que le dé formato y sugiera lo que falte.", "Compártelo con alguien que te dé seguimiento."],
          words: [["Planeación hacia atrás", "empezar por la meta y trabajar hacia atrás hasta hoy."], ["Hito", "un punto de control que muestra que vas por buen camino."]],
          slides: [
            { title: "Planea hacia atrás desde el objetivo", bullets: ["90 días: la meta", "60 y 30 días: hitos", "Hoy: el primer paso"] },
            { title: "Específico y con fecha", bullets: ["\"Para el 15 nov: hablar con alguien de logística\"", "\"Para el 1 dic: solicitar la formación\"", "No: \"investigarlo\""] },
            { title: "El plan es tuyo", bullets: ["La IA da formato y sugiere", "Tú pones las fechas", "Compártelo con un mentor u orientador"] }
          ],
          tryIt: "Tarea final: escribe tu plan de carrera de una página con tres carreras, su sueldo y sus perspectivas según bls.gov/ooh, tus brechas de habilidades, la carrera que elegiste y tres pasos con fecha para los próximos 90 días, incluida una opción de formación o de beneficio.",
          youCanNow: "convertir tu investigación de carreras en un plan de 90 días con fechas que puedes cumplir.",
          quickCheck: [
            { objective: "O6", q: "¿Qué significa planear hacia atrás?", options: ["Hacer tus pasos en cualquier orden", "Empezar por tu meta y trabajar hacia atrás hasta hoy", "Planear solo para el pasado", "Dejar que otra persona ponga tus fechas"], answer: 1, why: "Planear hacia atrás empieza por la meta y llega hasta los pasos que das ahora." },
            { objective: "O6", q: "¿Cuál es el mejor paso para tu plan de 90 días?", options: ["\"Pensar en TI algún día\"", "\"Averiguar cosas\"", "\"Conseguir un buen empleo\"", "\"Antes del 15 de enero: terminar el módulo 1 del curso gratuito de soporte de TI\""], answer: 3, why: "Un buen paso es concreto y tiene una fecha que pones tú." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Elegir y planear tu camino",
        questions: [
          { objective: "O4", q: "¿Qué fuente oficial da el sueldo mediano y las perspectivas de empleo de las ocupaciones civiles?", options: ["Un anuncio de empleo", "El Occupational Outlook Handbook", "La primera respuesta de tu IA", "Un titular de noticias"], answer: 1, why: "El Occupational Outlook Handbook de la Oficina de Estadísticas Laborales da el sueldo y las perspectivas oficiales." },
          { objective: "O4", q: "¿Qué significa sueldo mediano?", options: ["El sueldo más alto", "El sueldo inicial", "El punto del medio: la mitad gana más y la mitad gana menos", "El sueldo después de impuestos"], answer: 2, why: "La mediana es el punto medio del sueldo de todos los trabajadores." },
          { objective: "O5", q: "Sigues en servicio activo y te quedan 5 meses. ¿Qué programa te podría permitir formarte con una empresa?", options: ["El Occupational Outlook Handbook", "El Military Crosswalk", "Google Gemini", "DoD SkillBridge"], answer: 3, why: "SkillBridge permite a los militares formarse con una empresa durante sus últimos 180 días." },
          { objective: "O5", q: "Una IA dice que calificas para un beneficio de formación. ¿Qué deberías hacer?", options: ["Confirmarlo en va.gov o con un orientador", "Inscribirte de inmediato", "Ignorar todos los beneficios", "Pagarle a un sitio web para que lo revise"], answer: 0, why: "Los requisitos cambian; confírmalo con la fuente oficial." },
          { objective: "O6", q: "¿Cuál es el mejor paso para un plan de 90 días?", options: ["\"Buscar empleos\"", "\"Pensar en la formación\"", "\"Para el 1 dic: solicitar el programa de formación en soporte de TI\"", "\"Algún día certificarme\""], answer: 2, why: "Los buenos pasos son específicos y tienen fecha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Carreras del futuro y oportunidades con IA",
    questions: [
      { objective: "O1", q: "La IA está aumentando la demanda de personas que pueden:", options: ["Operar, proteger, reparar y supervisar sistemas", "Evitar las computadoras", "Solo escribir código", "No hacer nada"], answer: 0, why: "Muchos empleos relacionados con la IA necesitan personas alrededor de los sistemas, no solo programadores." },
      { objective: "O1", q: "¿Qué campo protege redes y datos contra ataques?", options: ["Cadena de suministro", "Ciberseguridad", "Comercio minorista", "Servicio de alimentos"], answer: 1, why: "La ciberseguridad protege computadoras, redes y datos." },
      { objective: "O1", q: "Un especialista en logística que puede leer un pronóstico de la IA y luego decidir:", options: ["Ya no se necesita", "Es reemplazado por el pronóstico", "Vale más", "Solo sirve en el ejército"], answer: 2, why: "El criterio por encima de lo que da la IA es lo que buscan los empleadores." },
      { objective: "O2", q: "El Military Crosswalk de O*NET te deja buscar por:", options: ["Tu número de Seguro Social", "Tu banco", "La dirección de tu casa", "Rama y código o nombre del puesto militar"], answer: 3, why: "Eliges tu rama y escribes tu MOS, rating, AFSC o SFSC." },
      { objective: "O2", q: "El Veterans Job Matcher de CareerOneStop tiene un enlace desde:", options: ["La página Find a Job para veteranos del Departamento de Trabajo", "Un anuncio emergente", "Un grupo de redes sociales", "El boletín de tu antigua unidad"], answer: 0, why: "La página Find a Job de DOL VETS tiene el enlace." },
      { objective: "O2", q: "Cuando dos listas oficiales no coinciden, una buena opción es:", options: ["No usar ninguna", "Quedarte con los empleos que aparecen en las dos", "Elegir el primer empleo en orden alfabético", "Preguntarle a un desconocido"], answer: 1, why: "La coincidencia muestra una relación fuerte." },
      { objective: "O3", q: "Una buena instrucción a la IA para explorar una carrera pide:", options: ["Tu contraseña", "Solo el sueldo", "Un día típico, habilidades principales, habilidades transferibles y forma de entrar", "Una palabra"], answer: 2, why: "Esos detalles te ayudan a juzgar si la carrera encaja contigo." },
      { objective: "O3", q: "¿Qué datos de una respuesta de la IA sobre carreras debes marcar para revisar?", options: ["Solo el nombre del empleo", "El saludo", "Nada", "El sueldo, las certificaciones y los requisitos"], answer: 3, why: "Esos datos cambian y la IA se puede equivocar." },
      { objective: "O3", q: "La \"forma de entrar\" es:", options: ["El camino habitual para llegar a un empleo", "La entrada de un edificio", "El inicio de sesión de un sitio web", "Un rango militar"], answer: 0, why: "Es la ruta de formación, certificación, aprendizaje o título para entrar a un empleo." },
      { objective: "O4", q: "El Occupational Outlook Handbook lo publica:", options: ["Una empresa de IA", "La Oficina de Estadísticas Laborales", "Una bolsa de trabajo privada", "El VA"], answer: 1, why: "Es un recurso de la Oficina de Estadísticas Laborales." },
      { objective: "O4", q: "Las perspectivas de empleo te dicen:", options: ["Tu sueldo exacto", "Dónde está la oficina", "Cuánto se espera que crezca o baje el número de empleos", "Quién te va a contratar"], answer: 2, why: "Las perspectivas son el cambio proyectado en los empleos." },
      { objective: "O4", q: "¿Por qué usar el sueldo mediano para comparar y no como una promesa?", options: ["Siempre es demasiado alto", "Es inventado", "Solo cuenta a los oficiales", "El sueldo cambia según el lugar y la persona"], answer: 3, why: "La mediana es un punto medio; tu sueldo depende del lugar y la experiencia." },
      { objective: "O5", q: "Una brecha de habilidades es:", options: ["Las habilidades o credenciales que todavía necesitas para un empleo", "Un hueco en las fechas de tu currículum", "Una pausa entre empleos", "Un rango militar"], answer: 0, why: "Muestra lo que todavía necesitas aprender u obtener." },
      { objective: "O5", q: "¿Qué herramienta del VA te ayuda a comparar escuelas y programas para usar el GI Bill?", options: ["El Crosswalk de O*NET", "La GI Bill Comparison Tool", "SkillBridge", "TAP"], answer: 1, why: "La GI Bill Comparison Tool del VA ayuda a comparar opciones." },
      { objective: "O5", q: "VET TEC 2.0 paga:", options: ["Reparaciones de la casa", "Préstamos para autos", "Ciertas formaciones en alta tecnología sin título universitario para veteranos que califican", "Cualquier título universitario"], answer: 2, why: "VET TEC 2.0 cubre ciertos programas de tecnología sin título universitario." },
      { objective: "O5", q: "Un aprendizaje te permite:", options: ["Saltarte toda la formación", "No trabajar", "Obtener un título de la noche a la mañana", "Ganar dinero mientras aprendes"], answer: 3, why: "A los aprendices se les paga mientras se forman." },
      { objective: "O5", q: "¿Dónde pueden los veteranos tener prioridad de servicio para la formación laboral?", options: ["En los American Job Centers", "En las redes sociales", "En una agencia de autos", "En una tienda de videojuegos"], answer: 0, why: "El Departamento de Trabajo da prioridad de servicio a los veteranos en los American Job Centers." },
      { objective: "O6", q: "Planear hacia atrás significa:", options: ["Hacer las tareas en cualquier orden", "Empezar por la meta y trabajar hacia atrás hasta hoy", "Planear solo para hoy", "Nunca poner fechas"], answer: 1, why: "Planeas desde el objetivo hacia atrás, como en la planeación de misiones." },
      { objective: "O6", q: "En tu plan de 90 días, ¿quién pone las fechas?", options: ["La IA", "El empleador", "Tú", "Nadie"], answer: 2, why: "La IA puede dar formato y sugerir; el plan es tuyo." },
      { objective: "O6", q: "¿Por qué compartir tu plan con un mentor u orientador?", options: ["Para que lo haga por ti", "Para conseguir dinero", "Lo exige la ley", "Para que alguien te dé seguimiento y te mantenga en camino"], answer: 3, why: "Rendir cuentas te ayuda a terminar lo que planeas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      7,
      9,
      11,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Carreras que coinciden",
        objective: "O2",
        notYet: "Las carreras se adivinaron o salieron solo de una respuesta de la IA.",
        meets: "Tres carreras que coinciden con el puesto militar, encontradas en el Military Crosswalk de O*NET o en CareerOneStop.",
        exceeds: "Puede decir qué habilidad de su servicio encaja con cada carrera."
      },
      {
        name: "Datos oficiales",
        objective: "O4",
        notYet: "Falta el sueldo o las perspectivas, o se copiaron de la IA.",
        meets: "Cada carrera tiene el sueldo mediano y las perspectivas de empleo de bls.gov/ooh.",
        exceeds: "También aparece la educación de entrada, y explica qué carrera gana y por qué."
      },
      {
        name: "Brechas de habilidades",
        objective: "O3",
        notYet: "No hay ninguna brecha de habilidades, o es vaga.",
        meets: "Cada carrera indica la habilidad o la credencial que todavía falta.",
        exceeds: "Cada brecha se revisó con una fuente oficial o de un empleador."
      },
      {
        name: "Formación o beneficio",
        objective: "O5",
        notYet: "No hay opción de formación ni de beneficio, o salió solo de la IA.",
        meets: "Una opción de formación y un programa que puede ayudar a pagar, con un requisito de su página oficial.",
        exceeds: "También nombra a quién preguntar para confirmar si califica, como un orientador del VA."
      },
      {
        name: "Plan de 90 días",
        objective: "O6",
        notYet: "Los pasos son vagos o no tienen fecha.",
        meets: "Tres pasos concretos y con fecha hacia una carrera elegida.",
        exceeds: "El plan nombra a un mentor u orientador que revisará el avance."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que completan al menos un paso de su plan de 90 días dentro de 30 días (encuesta de seguimiento)",
      "Personas que se inscriben en una formación, un aprendizaje o SkillBridge dentro de 90 días",
      "Personas que empiezan otro curso de Koach Learn para veteranos dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora con internet",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini",
      "Los sitios web gratuitos del Military Crosswalk de O*NET, CareerOneStop, bls.gov/ooh y va.gov",
      "Papel, una app de notas o una hoja de cálculo para la tabla de comparación y el plan de una página",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "En una clase de transición o un centro para veteranos: hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas \"Pruébalo ahora\" hechas en vivo.",
      "Pide que cada persona llene ella misma los números de la tabla de comparación desde bls.gov/ooh; no aceptes números de la IA.",
      "Invita a un orientador del VA, de un American Job Center o del TAP a la última sesión para revisar los planes y las preguntas sobre requisitos.",
      "Califica el plan final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez.",
      "Recuerda que los números de Seguro Social, de expediente del VA y de servicio no van en ninguna instrucción a la IA."
    ]
  }
};
