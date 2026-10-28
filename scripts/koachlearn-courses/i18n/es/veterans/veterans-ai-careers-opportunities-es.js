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
  chapters: [
    {
      name: "Capítulo 1: Dónde están las oportunidades",
      lessons: [
        {
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
          youCanNow: "nombrar carreras que crecen con la IA y decir cuáles encajan con tu experiencia militar."
        },
        {
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
          youCanNow: "usar herramientas oficiales de equivalencias y un asistente de IA para hacer una lista de empleos civiles que coinciden con tu servicio y entenderlos."
        },
        {
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
          youCanNow: "usar un asistente de IA para explorar una carrera y marcar qué datos debes revisar."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Dónde están las oportunidades",
        questions: [
          { q: "¿Cuál de estos es un campo donde la IA está aumentando la demanda de personas?", options: ["Ciberseguridad", "Solo los videojuegos", "Solo la programación", "Ninguno, la IA elimina todos los empleos"], answer: 0, why: "La IA crea demanda de personas que protegen, operan y supervisan sistemas, como en la ciberseguridad." },
          { q: "¿Cuál es el mejor lugar para EMPEZAR a relacionar tu MOS con empleos civiles?", options: ["La suposición de un amigo", "El Military Crosswalk de O*NET", "Un anuncio de empleo cualquiera", "Una publicación en redes sociales"], answer: 1, why: "La equivalencia oficial relaciona tu código militar con ocupaciones civiles." },
          { q: "O*NET y CareerOneStop te dan listas distintas. ¿Qué es lo inteligente?", options: ["Ignorar las dos", "Elegir la lista más corta", "Quedarte con los empleos que aparecen en las dos", "Pedirle a la IA que elija una por ti"], answer: 2, why: "Los empleos que aparecen en las dos listas oficiales son coincidencias fuertes." },
          { q: "Una respuesta de la IA dice que un empleo paga $95,000. ¿Qué haces?", options: ["Terminar tu búsqueda; ya lo encontraste", "Publicarlo en internet", "Creerle porque es específico", "Ponerle un signo de interrogación y revisarlo con datos oficiales"], answer: 3, why: "El sueldo puede estar mal o desactualizado, así que hay que revisarlo." },
          { q: "¿Qué es una habilidad transferible?", options: ["Una habilidad de un empleo que sirve en otro", "Una habilidad que puedes vender", "Una habilidad solo para oficiales", "Una habilidad que la IA hace por ti"], answer: 0, why: "Las habilidades transferibles pasan de un empleo a otro, como dirigir un equipo o llevar inventario." }
        ]
      }
    },
    {
      name: "Capítulo 2: Elegir y planear tu camino",
      lessons: [
        {
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
          youCanNow: "comparar carreras con datos oficiales de sueldo, educación y perspectivas."
        },
        {
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
          youCanNow: "encontrar formación para una carrera y un programa oficial que pueda ayudar a pagarla, y confirmar los requisitos."
        },
        {
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
          youCanNow: "convertir tu investigación de carreras en un plan de 90 días con fechas que puedes cumplir."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Elegir y planear tu camino",
        questions: [
          { q: "¿Qué fuente oficial da el sueldo mediano y las perspectivas de empleo de las ocupaciones civiles?", options: ["Un anuncio de empleo", "El Occupational Outlook Handbook", "La primera respuesta de tu IA", "Un titular de noticias"], answer: 1, why: "El Occupational Outlook Handbook de la Oficina de Estadísticas Laborales da el sueldo y las perspectivas oficiales." },
          { q: "¿Qué significa sueldo mediano?", options: ["El sueldo más alto", "El sueldo inicial", "El punto del medio: la mitad gana más y la mitad gana menos", "El sueldo después de impuestos"], answer: 2, why: "La mediana es el punto medio del sueldo de todos los trabajadores." },
          { q: "Sigues en servicio activo y te quedan 5 meses. ¿Qué programa te podría permitir formarte con una empresa?", options: ["El Occupational Outlook Handbook", "El Military Crosswalk", "Google Gemini", "DoD SkillBridge"], answer: 3, why: "SkillBridge permite a los militares formarse con una empresa durante sus últimos 180 días." },
          { q: "Una IA dice que calificas para un beneficio de formación. ¿Qué deberías hacer?", options: ["Confirmarlo en va.gov o con un orientador", "Inscribirte de inmediato", "Ignorar todos los beneficios", "Pagarle a un sitio web para que lo revise"], answer: 0, why: "Los requisitos cambian; confírmalo con la fuente oficial." },
          { q: "¿Cuál es el mejor paso para un plan de 90 días?", options: ["\"Buscar empleos\"", "\"Pensar en la formación\"", "\"Para el 1 dic: solicitar el programa de formación en soporte de TI\"", "\"Algún día certificarme\""], answer: 2, why: "Los buenos pasos son específicos y tienen fecha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Carreras del futuro y oportunidades con IA",
    questions: [
      { q: "La IA está aumentando la demanda de personas que pueden:", options: ["Operar, proteger, reparar y supervisar sistemas", "Evitar las computadoras", "Solo escribir código", "No hacer nada"], answer: 0, why: "Muchos empleos relacionados con la IA necesitan personas alrededor de los sistemas, no solo programadores." },
      { q: "¿Qué campo protege redes y datos contra ataques?", options: ["Cadena de suministro", "Ciberseguridad", "Comercio minorista", "Servicio de alimentos"], answer: 1, why: "La ciberseguridad protege computadoras, redes y datos." },
      { q: "Un especialista en logística que puede leer un pronóstico de la IA y luego decidir:", options: ["Ya no se necesita", "Es reemplazado por el pronóstico", "Vale más", "Solo sirve en el ejército"], answer: 2, why: "El criterio por encima de lo que da la IA es lo que buscan los empleadores." },
      { q: "El Military Crosswalk de O*NET te deja buscar por:", options: ["Tu número de Seguro Social", "Tu banco", "La dirección de tu casa", "Rama y código o nombre del puesto militar"], answer: 3, why: "Eliges tu rama y escribes tu MOS, rating, AFSC o SFSC." },
      { q: "El Veterans Job Matcher de CareerOneStop tiene un enlace desde:", options: ["La página Find a Job para veteranos del Departamento de Trabajo", "Un anuncio emergente", "Un grupo de redes sociales", "El boletín de tu antigua unidad"], answer: 0, why: "La página Find a Job de DOL VETS tiene el enlace." },
      { q: "Cuando dos listas oficiales no coinciden, una buena opción es:", options: ["No usar ninguna", "Quedarte con los empleos que aparecen en las dos", "Elegir el primer empleo en orden alfabético", "Preguntarle a un desconocido"], answer: 1, why: "La coincidencia muestra una relación fuerte." },
      { q: "Una buena instrucción a la IA para explorar una carrera pide:", options: ["Tu contraseña", "Solo el sueldo", "Un día típico, habilidades principales, habilidades transferibles y forma de entrar", "Una palabra"], answer: 2, why: "Esos detalles te ayudan a juzgar si la carrera encaja contigo." },
      { q: "¿Qué datos de una respuesta de la IA sobre carreras debes marcar para revisar?", options: ["Solo el nombre del empleo", "El saludo", "Nada", "El sueldo, las certificaciones y los requisitos"], answer: 3, why: "Esos datos cambian y la IA se puede equivocar." },
      { q: "La \"forma de entrar\" es:", options: ["El camino habitual para llegar a un empleo", "La entrada de un edificio", "El inicio de sesión de un sitio web", "Un rango militar"], answer: 0, why: "Es la ruta de formación, certificación, aprendizaje o título para entrar a un empleo." },
      { q: "El Occupational Outlook Handbook lo publica:", options: ["Una empresa de IA", "La Oficina de Estadísticas Laborales", "Una bolsa de trabajo privada", "El VA"], answer: 1, why: "Es un recurso de la Oficina de Estadísticas Laborales." },
      { q: "Las perspectivas de empleo te dicen:", options: ["Tu sueldo exacto", "Dónde está la oficina", "Cuánto se espera que crezca o baje el número de empleos", "Quién te va a contratar"], answer: 2, why: "Las perspectivas son el cambio proyectado en los empleos." },
      { q: "¿Por qué usar el sueldo mediano para comparar y no como una promesa?", options: ["Siempre es demasiado alto", "Es inventado", "Solo cuenta a los oficiales", "El sueldo cambia según el lugar y la persona"], answer: 3, why: "La mediana es un punto medio; tu sueldo depende del lugar y la experiencia." },
      { q: "Una brecha de habilidades es:", options: ["Las habilidades o credenciales que todavía necesitas para un empleo", "Un hueco en las fechas de tu currículum", "Una pausa entre empleos", "Un rango militar"], answer: 0, why: "Muestra lo que todavía necesitas aprender u obtener." },
      { q: "¿Qué herramienta del VA te ayuda a comparar escuelas y programas para usar el GI Bill?", options: ["El Crosswalk de O*NET", "La GI Bill Comparison Tool", "SkillBridge", "TAP"], answer: 1, why: "La GI Bill Comparison Tool del VA ayuda a comparar opciones." },
      { q: "VET TEC 2.0 paga:", options: ["Reparaciones de la casa", "Préstamos para autos", "Ciertas formaciones en alta tecnología sin título universitario para veteranos que califican", "Cualquier título universitario"], answer: 2, why: "VET TEC 2.0 cubre ciertos programas de tecnología sin título universitario." },
      { q: "Un aprendizaje te permite:", options: ["Saltarte toda la formación", "No trabajar", "Obtener un título de la noche a la mañana", "Ganar dinero mientras aprendes"], answer: 3, why: "A los aprendices se les paga mientras se forman." },
      { q: "¿Dónde pueden los veteranos tener prioridad de servicio para la formación laboral?", options: ["En los American Job Centers", "En las redes sociales", "En una agencia de autos", "En una tienda de videojuegos"], answer: 0, why: "El Departamento de Trabajo da prioridad de servicio a los veteranos en los American Job Centers." },
      { q: "Planear hacia atrás significa:", options: ["Hacer las tareas en cualquier orden", "Empezar por la meta y trabajar hacia atrás hasta hoy", "Planear solo para hoy", "Nunca poner fechas"], answer: 1, why: "Planeas desde el objetivo hacia atrás, como en la planeación de misiones." },
      { q: "En tu plan de 90 días, ¿quién pone las fechas?", options: ["La IA", "El empleador", "Tú", "Nadie"], answer: 2, why: "La IA puede dar formato y sugerir; el plan es tuyo." },
      { q: "¿Por qué compartir tu plan con un mentor u orientador?", options: ["Para que lo haga por ti", "Para conseguir dinero", "Lo exige la ley", "Para que alguien te dé seguimiento y te mantenga en camino"], answer: 3, why: "Rendir cuentas te ayuda a terminar lo que planeas." }
    ]
  }
};
