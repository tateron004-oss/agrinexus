"use strict";

// Koach Learn course (Spanish translation of shared/apprenticeships-job-programs.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "apprenticeships-job-programs-es",
  lang: "es",
  translationOf: "apprenticeships-job-programs",
  category: "Workforce Development",
  name: "Encontrar programas de aprendizaje y de capacitación laboral",
  skills: "Distinguir los tipos de programas, Buscar en apprenticeship.gov, Usar un American Job Center, Comprobar que un programa es real, Reunir los documentos para postularte, Hacer un plan de postulación",
  outcome: "encontrar programas de aprendizaje (apprenticeships) reales y programas de capacitación laboral gratis o de bajo costo cerca de ti, comprobar que son reales y que te convienen, reunir lo que necesitas para postularte y hacer un plan con fechas para postularte a dos de ellos.",
  about: [
    "Este curso es para quien quiere recibir un pago mientras aprende un oficio, o recibir capacitación gratis para conseguir un mejor trabajo: jóvenes que terminan o dejan la escuela, adultos que cambian de carrera, veteranos y personas que regresan a casa después de estar en prisión.",
    "Vas a aprender la diferencia entre un programa de aprendizaje (apprenticeship), un programa de preaprendizaje y un programa de capacitación laboral; a buscar en el Job Finder oficial de apprenticeship.gov; a usar tu American Job Center local; a reconocer programas falsos y estafas de empleo; y a reunir los papeles que piden los programas.",
    "Este curso te PREPARA para encontrar programas y postularte. No te inscribe en ningún programa ni te promete un lugar. Las reglas, las edades y las vacantes cambian, por eso cada lección te muestra la página oficial que debes revisar.",
    "Cada lección dura unos cinco minutos. Lee, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\" en papel o en un teléfono. Hay una pregunta rápida después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz un \"Plan de postulación a programas\" de una página: el trabajo que quieres; dos programas reales que encontraste (en apprenticeship.gov, un American Job Center, Job Corps, YouthBuild, un sindicato o un college), con el patrocinador, el lugar, los requisitos y cómo postularte a cada uno; las comprobaciones que hiciste para asegurarte de que cada uno es real; una lista de los documentos que tienes y los que te faltan; y cinco próximos pasos, cada uno con una fecha.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas de 16 años o más en Estados Unidos que buscan trabajo: jóvenes que terminan la secundaria o que no tienen diploma, adultos que cambian de carrera, veteranos y personas que regresan a casa después de estar en prisión. Muchas viven en comunidades rurales o de bajos ingresos y necesitan ganar dinero mientras se capacitan.",
    startingPoint: "Saben usar un teléfono o una computadora de la biblioteca para buscar en internet. La mayoría ha oído hablar de los programas de aprendizaje o de capacitación, pero no sabe cómo encontrar un programa real, quién lo paga ni qué necesita para postularse. A algunas personas ya las han buscado con estafas de \"paga para capacitarte\".",
    gap: "En todos los estados hay programas de aprendizaje pagados y capacitación gratis, pero la gente no los aprovecha porque no sabe dónde buscar ni qué preguntar. Los participantes necesitan encontrar programas reales en sitios oficiales, comprobarlos y postularse a tiempo, para pasar a un trabajo mejor pagado sin endeudarse.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º grado)",
      "Dispositivos: un teléfono o una computadora de la biblioteca o del centro de empleo con tiempo limitado",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre el trabajo y la escuela",
      "Los programas, las edades y las reglas cambian de un estado a otro y con el tiempo; los participantes revisan las páginas oficiales (apprenticeship.gov, dol.gov, jobcorps.gov, va.gov)",
      "Riesgo de estafas: nunca pagar para conseguir un trabajo y nunca compartir números privados en las tareas de práctica"
    ],
    prerequisites: "Ninguno. Quien todavía no haya elegido un campo puede tomar primero \"Empezar una carrera en los oficios calificados\"; quien necesite un currículum puede tomar \"Currículum, LinkedIn y entrevistas de trabajo\"."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con descripciones cortas de cinco programas", action: "identificar cada uno como programa de aprendizaje, de preaprendizaje o de capacitación laboral", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Usando el Job Finder de apprenticeship.gov en un teléfono o una computadora", action: "buscar programas de aprendizaje en tu campo y tu zona y anotar dos anuncios", standard: "con el patrocinador, el lugar y cómo postularte a cada uno" },
    { id: "O3", condition: "Usando CareerOneStop o la línea telefónica del DOL", action: "encontrar tu American Job Center más cercano y escribir preguntas sobre la capacitación gratis", standard: "con al menos cuatro preguntas, una de ellas sobre fondos para capacitación" },
    { id: "O4", condition: "Con el anuncio o la oferta de un programa", action: "comprobar si el programa es real y si vale la pena tu tiempo", standard: "usando al menos tres comprobaciones, entre ellas las señales de alerta de una estafa de \"paga para conseguir trabajo\"" },
    { id: "O5", condition: "Para un programa que te interesa", action: "hacer una lista de sus requisitos y de los documentos que necesitas para postularte", standard: "marcando cuáles ya tienes y dónde conseguir los demás" },
    { id: "O6", condition: "Para dos programas que encontraste", action: "escribir un plan de postulación con próximos pasos y fechas", standard: "con al menos cinco pasos, las fechas límite y una fecha de seguimiento" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conoce tus opciones y dónde encontrarlas",
      lessons: [
        {
          title: "¿Aprendizaje, preaprendizaje o programa de capacitación?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar los tres tipos principales de programas y cuál te conviene ahora.",
          text: [
            "Un programa de aprendizaje registrado (Registered Apprenticeship) es un trabajo. El sitio apprenticeship.gov, del Departamento de Trabajo de Estados Unidos (DOL), dice que los aprendices ganan un salario desde el primer día, reciben aumentos a medida que crecen sus habilidades, aprenden en el trabajo y en clases, y terminan con una credencial reconocida en toda su industria. Te postulas con el empleador o con el patrocinador del programa, igual que para un trabajo.",
            "Un programa de preaprendizaje (pre-apprenticeship) te prepara para entrar a un programa de aprendizaje. Apprenticeship.gov dice que puede durar de unas semanas a unos meses, y que el pago o una ayuda económica es opcional. Muchas veces incluye matemáticas básicas, seguridad y preparación para el trabajo. YouthBuild es un ejemplo para jóvenes.",
            "Un programa de capacitación laboral te enseña habilidades para un trabajo, muchas veces en un salón de clases, y te ayuda a encontrar empleo al final. Algunos ejemplos son Job Corps, los certificados de los community colleges y la capacitación pagada a través de tu American Job Center local. Algunos son gratis; otros ayudan con los costos; por lo general no recibes un salario mientras aprendes.",
            "Pregúntate: ¿necesito ganar dinero ya (aprendizaje), necesito prepararme primero (preaprendizaje) o necesito un curso corto para calificar para un trabajo (programa de capacitación)?"
          ],
          words: [["Programa de aprendizaje registrado", "un trabajo pagado con capacitación, aprobado por el Departamento de Trabajo o por un estado, que termina con una credencial reconocida."], ["Preaprendizaje", "un programa corto que te prepara para entrar a un programa de aprendizaje."], ["Patrocinador", "el empleador, el sindicato o el grupo que dirige un programa de aprendizaje y contrata a los aprendices."], ["Ayuda económica (stipend)", "un pago pequeño para ayudarte con los gastos mientras te capacitas; no es un salario completo."], ["Credencial", "una prueba de una habilidad, como un certificado o una licencia."]],
          slides: [
            { title: "Programa de aprendizaje registrado", bullets: ["Un trabajo pagado con capacitación", "Salario desde el primer día, aumentos al crecer tus habilidades", "Termina con una credencial reconocida en la industria"] },
            { title: "Preaprendizaje", bullets: ["Te prepara para un programa de aprendizaje", "De unas semanas a unos meses", "El pago o una ayuda económica es opcional"] },
            { title: "Programa de capacitación laboral", bullets: ["Enseña habilidades para un trabajo, muchas veces en clase", "Ejemplos: Job Corps, certificados de college, capacitación del AJC", "Por lo general no hay salario mientras aprendes"] },
            { title: "¿Cuál te conviene ahora?", bullets: ["Necesitas ganar ya: aprendizaje", "Necesitas prepararte: preaprendizaje", "Necesitas un curso corto: programa de capacitación"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Para quienes buscan una carrera", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov: ¿Qué es un preaprendizaje?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "Departamento de Trabajo de EE. UU.: YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" }
          ],
          tryIt: "En un papel, haz tres columnas: Aprendizaje, Preaprendizaje, Programa de capacitación. Escribe dos cosas buenas y una difícil de cada uno para TU vida ahora mismo. Encierra en un círculo el que mejor te conviene hoy.",
          youCanNow: "distinguir un programa de aprendizaje, uno de preaprendizaje y uno de capacitación laboral, y elegir el tipo que te conviene ahora.",
          quickCheck: [
            { objective: "O1", q: "¿Qué programa te paga un salario mientras aprendes en el trabajo?", options: ["Un curso gratis de videos en internet", "Un programa de aprendizaje registrado", "Un taller en la biblioteca", "Un sitio web de exámenes de práctica"], answer: 1, why: "Un programa de aprendizaje registrado es un trabajo pagado con capacitación." },
            { objective: "O1", q: "Un programa de 10 semanas enseña matemáticas para la construcción y seguridad para ayudarte a entrar a un programa de aprendizaje. ¿Qué es?", options: ["Un preaprendizaje", "Un título universitario", "Un programa de aprendizaje registrado", "Un trabajo temporal"], answer: 0, why: "Un preaprendizaje te prepara para entrar a un programa de aprendizaje y puede durar de semanas a meses." }
          ]
        },
        {
          title: "Buscar en el Job Finder de apprenticeship.gov",
          objectives: ["O2"],
          minutes: 5,
          goal: "Buscar en el Job Finder oficial y anotar dos anuncios de programas de aprendizaje cerca de ti.",
          text: [
            "Apprenticeship.gov es el sitio oficial de programas de aprendizaje del Departamento de Trabajo de Estados Unidos. Su buscador, el Apprenticeship Job Finder, te deja escribir una carrera o un lugar para encontrar vacantes cerca de ti.",
            "El Job Finder reúne anuncios de varias fuentes. Cada anuncio tiene una etiqueta, como \"Registered Occupation\" o \"Registered Partner\". Te postulas directamente con el empleador o el patrocinador, no a través de apprenticeship.gov.",
            "Prueba con más de una palabra: \"electrician\" (electricista), \"plumber\" (plomero), \"IT support\" (soporte de TI), \"medical assistant\" (asistente médico), \"truck driver\" (conductor de camión). Los programas de aprendizaje no son solo de construcción; también los hay en salud, TI, manufactura y más. Si no encuentras nada cerca, prueba con una ciudad más grande cercana o con otro nombre de trabajo.",
            "Anota lo que encuentres antes de cerrar la página. Los anuncios cambian, así que importa la fecha en que lo viste."
          ],
          steps: ["Entra a apprenticeship.gov y abre el Apprenticeship Job Finder.", "Escribe una carrera, tu ciudad o tu código postal (ZIP code), o ambos.", "Abre un anuncio y lee quién es el patrocinador, dónde es y cómo postularte.", "Anota el patrocinador, el puesto, el lugar, cómo postularte y la fecha de hoy.", "Repite con otro nombre de trabajo hasta tener dos anuncios."],
          words: [["Anuncio", "una vacante de trabajo o de programa publicada en un sitio web."], ["Carrera", "el tipo de trabajo que quieres hacer con el tiempo, como electricista o soporte de TI."], ["Código postal (ZIP code)", "el número de cinco dígitos de tu zona en una dirección de Estados Unidos."]],
          slides: [
            { title: "El lugar oficial para buscar", bullets: ["apprenticeship.gov, del Departamento de Trabajo de EE. UU.", "Usa el Apprenticeship Job Finder", "Busca por carrera, por lugar o por ambos"] },
            { title: "Cómo leer un anuncio", bullets: ["Quién es el patrocinador o el empleador", "Dónde es el trabajo", "Cómo postularte: te postulas directamente con el patrocinador"] },
            { title: "Consejos para buscar", bullets: ["Prueba varios nombres de trabajo", "No solo construcción: salud, TI, manufactura", "¿Nada cerca? Prueba una ciudad más grande cercana"] },
            { title: "Anótalo", bullets: ["Patrocinador, puesto, lugar", "Cómo postularte y la fecha en que lo viste"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov: Para quienes buscan una carrera", url: "https://www.apprenticeship.gov/career-seekers" }
          ],
          tryIt: "Abre el Apprenticeship Job Finder. Busca una carrera que te guste cerca de tu código postal. Anota dos anuncios: patrocinador, puesto, lugar, cómo postularte y la fecha de hoy. Si no encuentras ninguno, prueba con otros dos nombres de trabajo o con una ciudad cercana.",
          youCanNow: "buscar en el Job Finder de apprenticeship.gov y anotar dos anuncios reales con cómo postularte.",
          quickCheck: [
            { objective: "O2", q: "Encontraste un programa de aprendizaje en el Job Finder. ¿Con quién te postulas?", options: ["Con la Casa Blanca", "Con el personal de apprenticeship.gov", "Con cualquier sitio web que copie el anuncio", "Con el empleador o el patrocinador del anuncio"], answer: 3, why: "Apprenticeship.gov dice que te postulas directamente con el empleador o el patrocinador." },
            { objective: "O2", q: "Buscas \"electrician\" en tu pueblo y no aparece nada. ¿Cuál es un buen siguiente paso?", options: ["Olvidarte de los programas de aprendizaje", "Pagarle a un sitio web para que te encuentre uno", "Probar con una ciudad más grande cercana o con otro nombre de trabajo", "Buscar solo una vez al año"], answer: 2, why: "Buscar en una zona más amplia o con otros nombres muchas veces encuentra anuncios que la primera búsqueda no mostró." }
          ]
        },
        {
          title: "Tu American Job Center y los programas de capacitación gratis",
          objectives: ["O3"],
          minutes: 6,
          goal: "Encontrar tu American Job Center más cercano y escribir las preguntas que harás sobre la capacitación gratis.",
          text: [
            "Los American Job Centers (AJC) son oficinas públicas gratuitas, financiadas por el Departamento de Trabajo de Estados Unidos, que ayudan a la gente a encontrar trabajo y capacitación. Encuentra uno en CareerOneStop.org (del Departamento de Trabajo) o llama a la línea del DOL al 1-877-US-2JOBS (1-877-872-5627). Algunos estados les dan un nombre local, como WorkSource o centro de carreras.",
            "Gracias a la Ley de Innovación y Oportunidad de la Fuerza Laboral (WIOA), el personal del AJC puede ofrecerte servicios de carrera y ayuda para pagar la capacitación si cumples los requisitos. El Departamento de Trabajo dice que tienen prioridad las personas que reciben asistencia pública, otras personas de bajos ingresos y quienes necesitan ayuda con habilidades básicas, y que los veteranos tienen prioridad de servicio en todos los programas de empleo financiados por el DOL. Los servicios cambian según el estado, así que pregunta.",
            "Otros programas sobre los que puedes preguntar: Job Corps (capacitación y vivienda gratis para adultos jóvenes, por lo general de 16 a 24 años; revisa jobcorps.gov o llama al 800-733-5627 para saber qué vacantes hay ahora); YouthBuild (de 16 a 24 años, para quienes dejaron la escuela sin diploma: construcción y otras habilidades mientras terminan sus estudios); los programas de reinserción laboral (Reentry Employment Opportunities) para personas que regresan de prisión; y, para los veteranos, el GI Bill, que según el VA se puede usar en muchos programas de aprendizaje y de capacitación en el trabajo.",
            "Llega con tus preguntas por escrito. Así sacarás más provecho de una sola visita."
          ],
          steps: ["Busca en CareerOneStop \"American Job Center\" y tu código postal, o llama al 1-877-US-2JOBS.", "Anota la dirección, el horario y el teléfono del centro.", "Escribe tus preguntas: fondos para capacitación, programas cerca de ti, programas de aprendizaje, ayuda para tu situación.", "Llama o ve en persona y toma notas, incluido el nombre de la persona con quien hablas."],
          words: [["American Job Center (AJC)", "una oficina pública gratuita que ayuda a la gente a encontrar trabajo y capacitación."], ["WIOA", "la Ley de Innovación y Oportunidad de la Fuerza Laboral, la ley de Estados Unidos que financia los centros de empleo y la ayuda para capacitación."], ["Cumplir los requisitos", "cumplir las reglas para recibir un servicio."], ["Prioridad de servicio", "que te atiendan primero; los veteranos la tienen en los programas de empleo financiados por el DOL."], ["GI Bill", "los beneficios de educación del VA (Departamento de Asuntos de Veteranos) para veteranos y algunos familiares."]],
          slides: [
            { title: "American Job Centers", bullets: ["Oficinas públicas gratuitas de empleo y capacitación", "Encuentra uno: CareerOneStop.org o 1-877-US-2JOBS", "Puede tener un nombre local en tu estado"] },
            { title: "Ayuda para pagar la capacitación (WIOA)", bullets: ["Servicios de carrera y fondos para capacitación si calificas", "Prioridad: asistencia pública, bajos ingresos, habilidades básicas", "Los veteranos tienen prioridad de servicio"] },
            { title: "Más programas por los que preguntar", bullets: ["Job Corps: por lo general de 16 a 24 años, gratis, revisa su estado", "YouthBuild: de 16 a 24 años sin diploma", "Programas de reinserción; GI Bill para aprendizajes de veteranos"] },
            { title: "Llega preparado", bullets: ["Escribe tus preguntas antes", "Toma notas y el nombre de la persona que te atiende"] }
          ],
          sources: [
            { name: "Departamento de Trabajo de EE. UU.: Programa WIOA para adultos", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" },
            { name: "CareerOneStop: Encuentra un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "Job Corps", url: "https://www.jobcorps.gov/" },
            { name: "Departamento de Trabajo de EE. UU.: YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" },
            { name: "Departamento de Trabajo de EE. UU.: Programas para jóvenes y de reinserción", url: "https://www.dol.gov/agencies/eta/youth" },
            { name: "VA: Capacitación en el trabajo y programas de aprendizaje", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Encuentra tu American Job Center más cercano y anota su dirección, horario y teléfono. Luego escribe cuatro preguntas, por ejemplo: \"¿Puede WIOA ayudarme a pagar una capacitación en mi campo?\", \"¿Qué programas de aprendizaje o de preaprendizaje hay cerca de aquí?\", \"¿Hay ayuda para adultos jóvenes, veteranos o personas con antecedentes penales?\", \"¿Qué debo llevar a mi primera visita?\"",
          youCanNow: "encontrar tu American Job Center y llegar con preguntas sobre la capacitación gratis y los programas.",
          quickCheck: [
            { objective: "O3", q: "¿Dónde puedes recibir ayuda gratis para encontrar dinero para capacitación y programas cerca de ti?", options: ["En un American Job Center", "En la publicación de un desconocido en redes sociales", "En una empresa que te cobra por colocarte", "Solo en un college privado"], answer: 0, why: "Los American Job Centers son oficinas públicas gratuitas que ayudan con empleo y capacitación, incluidos los fondos de WIOA." },
            { objective: "O3", q: "¿Cuál es la mejor pregunta para hacer en un American Job Center?", options: ["\"¿Pueden hacer mi trabajo por mí?\"", "\"¿Venden tarjetas de regalo?\"", "\"¿Cuál es su dirección de casa?\"", "\"¿Puede WIOA ayudarme a pagar una capacitación en mi campo?\""], answer: 3, why: "Preguntar por los fondos de WIOA para capacitación puede abrirte la puerta a una capacitación gratis si cumples los requisitos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conoce tus opciones y dónde encontrarlas",
        questions: [
          { objective: "O1", q: "¿Qué es cierto sobre un programa de aprendizaje registrado?", options: ["Pagas una cuota grande para entrar", "Ganas un salario y aprendes en el trabajo", "Es solo un curso en un salón de clases", "Nunca termina con una credencial"], answer: 1, why: "Los aprendices ganan un salario desde el primer día y terminan con una credencial reconocida." },
          { objective: "O1", q: "Maya tiene 19 años, no tiene diploma y quiere aprender construcción mientras termina la escuela. ¿Qué programa le conviene?", options: ["Una universidad de cuatro años", "Un préstamo privado", "YouthBuild", "Una pasantía sin pago en el extranjero"], answer: 2, why: "YouthBuild atiende a jóvenes de 16 a 24 años que dejaron la escuela sin diploma, y combina habilidades de trabajo con estudios." },
          { objective: "O2", q: "¿Cuál es el sitio oficial de Estados Unidos para buscar programas de aprendizaje?", options: ["apprenticeship.gov", "Cualquier sitio con \"jobs\" en el nombre", "Un grupo de redes sociales", "Un enlace en un mensaje de texto"], answer: 0, why: "Apprenticeship.gov es el sitio oficial de programas de aprendizaje del Departamento de Trabajo de Estados Unidos, con el Job Finder." },
          { objective: "O2", q: "¿Qué debes anotar de cada anuncio?", options: ["Solo el color del logotipo", "Nada; lo puedes encontrar después", "Tu contraseña del sitio", "Patrocinador, puesto, lugar, cómo postularte y la fecha"], answer: 3, why: "Los anuncios cambian, así que anotas los datos clave y la fecha en que los viste." },
          { objective: "O3", q: "Darnell es veterano. Según el Departamento de Trabajo, ¿qué recibe en los programas de empleo financiados por el DOL?", options: ["Nada extra", "Un carro gratis", "Prioridad de servicio", "Un trabajo garantizado"], answer: 2, why: "Los veteranos tienen prioridad de servicio en todos los programas de empleo financiados por el DOL." }
        ]
      }
    },
    {
      name: "Capítulo 2: Elige bien y postúlate",
      lessons: [
        {
          title: "¿El programa es real y vale la pena?",
          objectives: ["O4"],
          minutes: 5,
          goal: "Revisar el anuncio de un programa para ver las señales de que es real y las señales de una estafa.",
          text: [
            "Algunos anuncios prometen \"trabajos garantizados\" si pagas una capacitación o un certificado. La FTC (Comisión Federal de Comercio) dice que los empleadores honestos, incluido el gobierno federal, nunca te pedirán que pagues para conseguir un trabajo, y que pagar por \"capacitaciones\" o certificados que no sirven es una estafa común.",
            "Otras señales de alerta de la FTC: un cheque que debes depositar para luego devolver parte del dinero, una cuota por adelantado de una agencia de colocación, un desconocido que te contacta de la nada con un trabajo y mucho dinero por poco trabajo.",
            "Señales de que un programa es real: aparece en apprenticeship.gov, en tu American Job Center, en un sitio .gov del estado, en un sindicato o en un community college; puedes encontrar su dirección y su teléfono por tu cuenta; y te dice con claridad cuánto cuesta, cuánto dura, qué credencial obtienes y cuántas personas terminan y consiguen trabajo.",
            "Un programa real puede no ser el adecuado para ti. Revisa el horario, el lugar y el transporte, y si la credencial es una que piden los empleadores de tu zona."
          ],
          steps: ["Busca el programa en un sitio oficial (apprenticeship.gov, tu AJC, un sitio .gov del estado, un sindicato o un college).", "Busca su dirección y su teléfono por tu cuenta; no uses solo el número del anuncio.", "Revisa si hay señales de estafa: pagar para conseguir el trabajo, cuotas por adelantado, cheques que hay que devolver, pagos demasiado buenos.", "Pregunta: costo, duración, credencial, horario y cuántas personas terminan y consiguen trabajo.", "¿No estás seguro? Pregunta en tu American Job Center antes de firmar o pagar algo."],
          words: [["Estafa", "un engaño para quitarte dinero o información personal."], ["Cuota por adelantado", "dinero que debes pagar antes de recibir algo."], ["FTC", "la Comisión Federal de Comercio, la agencia de Estados Unidos que advierte sobre las estafas y las combate."], ["Tasa de finalización", "cuántas de las personas que empiezan un programa lo terminan."]],
          slides: [
            { title: "Nunca pagues para conseguir un trabajo", bullets: ["FTC: los empleadores honestos nunca te cobran por contratarte", "Desconfía de la \"capacitación\" pagada que promete un trabajo"] },
            { title: "Señales de alerta de estafa", bullets: ["Cuotas por adelantado para colocarte", "Depositar un cheque y devolver dinero", "Un desconocido ofrece trabajo; mucho dinero por poco trabajo"] },
            { title: "Señales de que es real", bullets: ["Aparece en apprenticeship.gov, un AJC, un .gov, un sindicato o un college", "Puedes encontrar su dirección y teléfono por tu cuenta", "Costo, duración, credencial y resultados claros"] },
            { title: "Es real, pero ¿te conviene?", bullets: ["Horario y transporte", "Una credencial que piden los empleadores de tu zona"] }
          ],
          sources: [
            { name: "FTC: Estafas de empleo", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Toma un programa que encontraste en la lección 2 o 3. Haz tres comprobaciones: ¿aparece en una lista oficial?, ¿puedes encontrar su dirección y su teléfono por tu cuenta?, ¿muestra alguna señal de estafa? Escribe \"real\", \"no estoy seguro\" o \"estafa\" y por qué. Luego lee este anuncio inventado y haz una lista de sus señales de alerta: \"¡Consigue un trabajo garantizado de $40 por hora! Paga $300 hoy por tu certificado. Escríbenos ya.\"",
          youCanNow: "comprobar si un programa es real y si vale la pena tu tiempo, y reconocer las señales de una estafa de \"paga para conseguir trabajo\".",
          quickCheck: [
            { objective: "O4", q: "Un anuncio dice: \"Paga $250 por tu certificado y consigue un trabajo garantizado\". ¿Qué haces?", options: ["Pagar rápido antes de que se llene", "Enviar tus datos bancarios para apartar un lugar", "Tratarlo como una probable estafa y consultar con tu AJC", "Compartirlo con tus amigos para que también paguen"], answer: 2, why: "La FTC dice que los empleadores honestos nunca te piden que pagues para conseguir un trabajo." },
            { objective: "O4", q: "¿Cuál es una señal de que un programa es real?", options: ["Aparece en apprenticeship.gov o en un sitio .gov del estado", "Solo tiene un número de teléfono en un mensaje de texto", "Te pide depositar un cheque y devolver dinero", "No te quiere decir cuánto cuesta"], answer: 0, why: "Aparecer en un sitio oficial y ser claro con los costos son señales de un programa real." }
          ]
        },
        {
          title: "Requisitos y documentos",
          objectives: ["O5"],
          minutes: 5,
          goal: "Hacer una lista de los requisitos de un programa y de los documentos que necesitas, y marcar cuáles tienes.",
          text: [
            "Cada programa pone sus propios requisitos, y están en el anuncio o en el sitio del patrocinador. Los más comunes son una edad mínima, un diploma de secundaria o su equivalente (GED o HiSET), un examen básico de matemáticas o de lectura, poder hacer el trabajo físico, una licencia de conducir vigente para algunos oficios y una prueba de drogas.",
            "Documentos comunes: una identificación con foto, una prueba de tu diploma o su equivalente, tu historial académico (transcript), un currículum y, a veces, la tarjeta del Seguro Social o una prueba de que puedes trabajar en Estados Unidos. Los veteranos pueden necesitar su DD-214 para demostrar su servicio, y quienes usan el GI Bill solicitan los beneficios de educación del VA.",
            "¿Todavía no tienes alguno? Igual puedes planear. La identificación estatal la da el DMV (Departamento de Vehículos Motorizados) de tu estado. Una copia del diploma la da tu antigua escuela o la oficina de educación del estado. El American Job Center puede ayudarte con muchos de estos, y los programas de reinserción muchas veces ayudan a quienes regresan de prisión a conseguir una identificación.",
            "Guarda copias, no originales, en una sola carpeta. Nunca envíes números privados a nadie sin haber comprobado que es real."
          ],
          steps: ["Abre el anuncio o la página del patrocinador y busca los requisitos.", "Escribe cada requisito y cada documento en una lista de control.", "Marca cada uno: Lo tengo, Lo necesito o No estoy seguro.", "Junto a cada Lo necesito, escribe dónde lo vas a conseguir.", "Pon las copias en una carpeta o en un lugar seguro de tu teléfono."],
          words: [["Requisito", "algo que debes tener o hacer para postularte, como una edad mínima o un diploma."], ["Equivalente", "un examen, como el GED o el HiSET, que vale como un diploma de secundaria."], ["Historial académico (transcript)", "la lista oficial de materias y calificaciones de una escuela."], ["DD-214", "el documento militar que muestra el servicio y la baja de un veterano."]],
          slides: [
            { title: "Requisitos comunes", bullets: ["Edad mínima; diploma, GED o HiSET", "Un examen básico de matemáticas o de lectura", "Licencia de conducir o prueba de drogas para algunos oficios"] },
            { title: "Documentos comunes", bullets: ["Identificación con foto; diploma o equivalente; historial académico", "Currículum; prueba de que puedes trabajar en EE. UU.", "Veteranos: DD-214"] },
            { title: "¿Te falta algo?", bullets: ["Identificación estatal: el DMV de tu estado", "Copia del diploma: tu antigua escuela o la oficina del estado", "Pide ayuda a tu AJC o a tu programa de reinserción"] },
            { title: "Guárdalo seguro", bullets: ["Copias, no originales, en una sola carpeta", "Envía números privados solo a programas que comprobaste"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Para quienes buscan una carrera", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "VA: Capacitación en el trabajo y programas de aprendizaje", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Para un programa que te interesa, haz una lista de control con cada requisito y cada documento de su anuncio. Marca cada uno como Lo tengo, Lo necesito o No estoy seguro, y escribe dónde vas a conseguir cada Lo necesito. No escribas ningún número de identificación real en la lista.",
          youCanNow: "hacer una lista de los requisitos y documentos de un programa, ver qué te falta y saber dónde conseguirlo.",
          quickCheck: [
            { objective: "O5", q: "¿Dónde encuentras los requisitos exactos de un programa?", options: ["En lo que adivina un amigo", "En el anuncio del programa o en el sitio propio del patrocinador", "En cualquier comentario de redes sociales", "Son iguales para todos los programas"], answer: 1, why: "Cada programa pone sus propios requisitos, así que lees su anuncio o su página oficial." },
            { objective: "O5", q: "Luis es veterano y quiere usar el GI Bill para un programa de aprendizaje. ¿Qué documento probablemente le ayude a demostrar su servicio?", options: ["Una tarjeta del gimnasio", "Una tarjeta de la biblioteca", "Un recibo de una tienda", "Su DD-214"], answer: 3, why: "El DD-214 muestra el servicio y la baja de un veterano." }
          ]
        },
        {
          title: "Hacer tu plan de postulación",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escribir un plan de postulación para dos programas, con pasos con fecha y una fecha de seguimiento.",
          text: [
            "Los programas de aprendizaje y de capacitación muchas veces reciben solicitudes solo en ciertas fechas, y algunos se llenan rápido. Un plan escrito con fechas evita que se te pase el plazo.",
            "Para cada programa, escribe la fecha límite o la próxima fecha de apertura, cómo postularte (en internet, en persona o en una sesión informativa) y la fecha de cualquier examen. Si no encuentras una fecha, tu primer paso es llamar o escribir un correo para preguntar.",
            "Luego escribe tus próximos pasos, cada uno con una fecha: conseguir un documento que falta, actualizar tu currículum, practicar para el examen de matemáticas, ir a una sesión informativa, enviar la solicitud y hacer el seguimiento. Un buen seguimiento es una llamada o un correo corto y amable, más o menos una o dos semanas después de postularte, a menos que el programa te indique otro momento.",
            "Postúlate a más de un programa. Si uno te dice que no o te pone en una lista de espera, todavía tienes otro camino, y puedes preguntar qué te haría un mejor candidato la próxima vez."
          ],
          steps: ["Elige dos programas que comprobaste que son reales.", "Escribe la fecha límite o la próxima fecha de apertura de cada uno y cómo postularte.", "Haz una lista de tus próximos pasos, con una fecha para cada uno.", "Pon las fechas en el calendario de tu teléfono o en un papel que veas todos los días.", "Pon una fecha de seguimiento después de postularte."],
          words: [["Fecha límite", "el último día en que puedes postularte."], ["Sesión informativa", "una reunión donde un programa explica cómo funciona y cómo postularse."], ["Lista de espera", "una lista de personas que recibirán un lugar si se abre uno."], ["Hacer seguimiento", "comunicarte con un programa después de postularte para preguntar por tu solicitud."]],
          slides: [
            { title: "Por qué un plan con fechas", bullets: ["Muchos programas abren solo en ciertas fechas", "Algunos se llenan rápido", "Las fechas evitan que se te pase el plazo"] },
            { title: "Para cada programa, escribe", bullets: ["Fecha límite o próxima fecha de apertura", "Cómo postularte y la fecha de cualquier examen", "¿No hay fecha? Llama o escribe un correo y pregunta"] },
            { title: "Pasos, cada uno con fecha", bullets: ["Conseguir documentos; actualizar tu currículum", "Practicar para el examen; ir a una sesión", "Postularte y luego hacer seguimiento"] },
            { title: "Ten siempre un segundo camino", bullets: ["Postúlate a dos programas", "Un no o una lista de espera no es el final", "Pregunta cómo ser mejor candidato la próxima vez"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Departamento de Trabajo de EE. UU.: Programa WIOA para adultos", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" }
          ],
          tryIt: "Haz tu Plan de postulación a programas: el trabajo que quieres, dos programas comprobados con sus fechas límite y cómo postularte, tu lista de documentos y cinco próximos pasos con fecha, terminando con una fecha de seguimiento. Pon hoy mismo la fecha del primer paso en tu teléfono o en tu calendario.",
          youCanNow: "escribir un plan de postulación con pasos con fecha para dos programas y hacer seguimiento después de postularte.",
          quickCheck: [
            { objective: "O6", q: "No encuentras la fecha límite de un programa. ¿Cuál es tu primer paso?", options: ["Llamar o escribir al programa y preguntar", "Suponer que no hay fecha límite", "Esperar hasta el próximo año", "Postularte a cualquier otro programa"], answer: 0, why: "Preguntarle directamente al programa te da la fecha real para tu plan." },
            { objective: "O6", q: "¿Por qué postularte a dos programas en vez de a uno?", options: ["Porque los programas lo exigen", "Porque cuesta menos", "Para tener otro camino si uno te dice que no o te pone en lista de espera", "Para poder saltarte las fechas límite"], answer: 2, why: "Un segundo programa te permite seguir avanzando si el primero no resulta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Elige bien y postúlate",
        questions: [
          { objective: "O4", q: "Según la FTC, ¿cuál es una señal de alerta de una estafa de empleo?", options: ["El programa aparece en apprenticeship.gov", "Debes pagar para conseguir el trabajo", "El programa muestra su dirección", "El programa explica cuánto dura"], answer: 1, why: "La FTC dice que los empleadores honestos nunca te piden que pagues para conseguir un trabajo." },
          { objective: "O4", q: "Recibiste un cheque de un \"nuevo empleador\" y debes devolver una parte con tarjetas de regalo. ¿Qué es?", options: ["Un paso normal de contratación", "Un bono de capacitación", "Una probable estafa", "Una devolución de impuestos"], answer: 2, why: "La FTC dice que ningún empleador honesto te manda un cheque y te pide que devuelvas una parte." },
          { objective: "O5", q: "Un anuncio pide diploma de secundaria, y Tasha aprobó el GED. ¿Qué es cierto?", options: ["El GED muchas veces se acepta como equivalente de la secundaria; ella revisa el anuncio", "Nunca podrá postularse", "Debe pagar para reemplazarlo", "Debería no mencionarlo"], answer: 0, why: "El GED es un equivalente de la secundaria que aceptan muchos programas; el anuncio dice lo que se necesita." },
          { objective: "O5", q: "Necesitas una identificación estatal para postularte. ¿Dónde se consigue por lo general?", options: ["En un grupo de redes sociales", "En el DMV de tu estado", "Con el patrocinador del programa de aprendizaje", "En cualquier sitio web que venda identificaciones"], answer: 1, why: "La identificación estatal la da el DMV de tu estado; tu AJC o un programa de reinserción pueden ayudarte." },
          { objective: "O6", q: "¿Qué paso del plan está mejor escrito?", options: ["\"Postularme algún día\"", "\"Pensarlo\"", "\"Tal vez el próximo mes\"", "\"Enviar en internet la solicitud de ACME Electrical antes del 3 de marzo\""], answer: 3, why: "Un buen paso dice qué, cómo y cuándo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Encontrar programas de aprendizaje y de capacitación laboral",
    questions: [
      { objective: "O1", q: "¿Qué es un programa de aprendizaje registrado?", options: ["Un trabajo pagado con capacitación que termina con una credencial reconocida", "Un curso gratis de videos", "Una feria de empleo de un día", "Un préstamo para la universidad"], answer: 0, why: "Los aprendices ganan un salario, aprenden en el trabajo y en clase, y terminan con una credencial." },
      { objective: "O1", q: "¿Para qué sirve un programa de preaprendizaje?", options: ["Para reemplazar un diploma de secundaria", "Para prepararte para entrar a un programa de aprendizaje", "Para pagar deudas", "Para terminar un título de cuatro años"], answer: 1, why: "Un preaprendizaje prepara a las personas para entrar a un programa de aprendizaje registrado." },
      { objective: "O1", q: "Jamal necesita ganar dinero ya y quiere aprender un oficio. ¿Qué le conviene más?", options: ["Un curso en internet sin pago", "Un programa universitario largo", "Un programa de aprendizaje registrado", "Esperar un año"], answer: 2, why: "Un programa de aprendizaje te paga un salario mientras aprendes." },
      { objective: "O2", q: "¿Qué puedes escribir en el Job Finder de apprenticeship.gov?", options: ["Tu número de Seguro Social", "El PIN de tu banco", "Tu contraseña", "Una carrera o un lugar"], answer: 3, why: "El Job Finder busca por carrera, por lugar o por ambos." },
      { objective: "O2", q: "¿En qué campos hay programas de aprendizaje?", options: ["Solo en construcción", "En muchos campos, como salud, TI y manufactura", "Solo en el ejército", "Solo en la agricultura"], answer: 1, why: "Hay programas de aprendizaje en muchas industrias, no solo en la construcción." },
      { objective: "O2", q: "¿Por qué anotar la fecha en que viste un anuncio?", options: ["Los anuncios cambian, y la fecha muestra qué tan actual es", "El sitio lo exige", "Para obtener un descuento", "No sirve de nada"], answer: 0, why: "Las vacantes cambian, así que anotar la fecha te ayuda a saber cuándo actuar o volver a revisar." },
      { objective: "O3", q: "¿Cómo puedes encontrar tu American Job Center más cercano?", options: ["Preguntarle a un desconocido en internet", "Pagarle a una agencia de colocación", "Buscar en CareerOneStop o llamar al 1-877-US-2JOBS", "Esperar una carta"], answer: 2, why: "CareerOneStop y la línea gratuita del DOL te ayudan a encontrar tu AJC local." },
      { objective: "O3", q: "¿Qué ley de Estados Unidos financia los centros de empleo y puede ayudar a pagar la capacitación a quienes cumplen los requisitos?", options: ["WIOA", "HIPAA", "OSHA", "FAFSA"], answer: 0, why: "La Ley de Innovación y Oportunidad de la Fuerza Laboral (WIOA) financia los American Job Centers y la ayuda para capacitación." },
      { objective: "O3", q: "Kayla tiene 20 años y quiere capacitación gratis con vivienda. ¿Qué programa debería revisar, incluido su estado actual?", options: ["Un préstamo de día de pago", "El anuncio de un bootcamp privado", "Una oferta de tarjetas de regalo", "Job Corps"], answer: 3, why: "Job Corps es un programa gratis para adultos jóvenes, por lo general de 16 a 24 años; ella revisa jobcorps.gov para ver las vacantes actuales." },
      { objective: "O3", q: "Según el VA, ¿qué beneficio para veteranos se puede usar en muchos programas de aprendizaje y de capacitación en el trabajo?", options: ["Medicare", "El GI Bill", "El seguro de desempleo", "El Seguro Social"], answer: 1, why: "El VA dice que los beneficios del GI Bill se pueden usar en muchos programas de aprendizaje y de capacitación en el trabajo." },
      { objective: "O4", q: "Un sitio web te cobra para darte la solicitud de un \"trabajo federal\". ¿Qué es cierto?", options: ["Debes pagar para postularte", "Es un descuento", "Las solicitudes de trabajos federales son gratis, así que es una señal de alerta", "Solo pagan los veteranos"], answer: 2, why: "La FTC dice que las solicitudes oficiales de trabajos federales y del servicio postal siempre son gratis." },
      { objective: "O4", q: "¿Cómo debes conseguir el teléfono de un programa para comprobarlo?", options: ["Buscarlo tú mismo en un sitio oficial", "Usar solo el número del anuncio", "Preguntarle a la persona que te escribió", "No hace falta comprobarlo"], answer: 0, why: "Buscar tú mismo los datos de contacto evita el número falso de un estafador." },
      { objective: "O4", q: "Un programa es real, pero las clases son solo en tu horario de trabajo y a dos horas de distancia. ¿Qué haces?", options: ["Inscribirte igual y dejar tu trabajo", "Pagar extra para apartar un lugar", "No hacer caso del horario", "Pensar si te conviene y buscar un programa más cerca o con mejor horario"], answer: 3, why: "Un programa real también tiene que encajar con tu horario y tu transporte." },
      { objective: "O4", q: "¿Cuál NO es una señal de una estafa de empleo?", options: ["Un desconocido ofrece mucho dinero por poco trabajo", "El programa aparece en el sitio .gov de tu estado", "Una cuota de colocación por adelantado", "Un cheque del que debes devolver una parte"], answer: 1, why: "Aparecer en un sitio .gov oficial es una señal de un programa real." },
      { objective: "O5", q: "¿Qué debes hacer con los documentos que necesitas para postularte?", options: ["Guardar copias en una carpeta segura", "Publicarlos en redes sociales", "Enviar los originales a quien te los pida", "Tirarlos después de usarlos una vez"], answer: 0, why: "Tener copias en un lugar seguro te mantiene listo y protege tus originales." },
      { objective: "O5", q: "Tu lista de control dice \"Historial académico: Lo necesito\". ¿Qué escribes al lado?", options: ["Nada", "\"Olvidar este programa\"", "Dónde lo vas a conseguir, por ejemplo en tu antigua escuela", "Tu contraseña"], answer: 2, why: "Escribir dónde conseguir cada cosa que falta convierte la lista de control en un plan." },
      { objective: "O5", q: "¿Cuál es un requisito común para un programa de aprendizaje?", options: ["Tener casa propia", "Un título universitario para todos los oficios", "Una membresía pagada en un sitio web", "Un diploma o su equivalente y un examen básico de matemáticas"], answer: 3, why: "Muchos programas piden un diploma o su equivalente y un examen de habilidades básicas; el anuncio dice cuáles." },
      { objective: "O6", q: "¿Cuándo es un buen momento para hacer seguimiento después de postularte, si el programa no dice otra cosa?", options: ["La misma hora", "Más o menos una o dos semanas después", "Nunca", "Todos los días"], answer: 1, why: "Un seguimiento corto y amable después de una o dos semanas muestra interés sin presionar." },
      { objective: "O6", q: "¿Qué hace útil un próximo paso de tu plan?", options: ["Tiene una acción y una fecha", "Es muy largo", "No tiene fecha, así es flexible", "Lo guardas solo en tu cabeza"], answer: 0, why: "Los pasos con una acción y una fecha son los que de verdad se hacen." },
      { objective: "O6", q: "Un programa te pone en una lista de espera. ¿Qué es lo mejor que puedes hacer?", options: ["Dejar de buscar programas", "Pagar para subir en la lista", "No volver a comunicarte con ellos", "Seguir con tu otra solicitud y preguntar cómo ser mejor candidato"], answer: 3, why: "Tener un segundo camino y pedir comentarios te mantiene avanzando." }
    ]
  },
  // ---- ADDIE: Evaluación (examen previo) ----
  pretest: { title: "Examen previo: ¿Qué sabes ya?", from: [0, 1, 3, 6, 7, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      { name: "El tipo de programa correcto", objective: "O1", notYet: "El plan no dice si cada programa es de aprendizaje, de preaprendizaje o de capacitación.", meets: "Cada programa está identificado con su tipo correcto, y el participante puede decir por qué le conviene ahora.", exceeds: "El plan también dice qué haría el participante después de terminarlo (por ejemplo, preaprendizaje y luego aprendizaje)." },
      { name: "Dos programas reales encontrados", objective: "O2", notYet: "Menos de dos programas, o un programa sin patrocinador, lugar o forma de postularse.", meets: "Dos programas con patrocinador, lugar y cómo postularse, de apprenticeship.gov, un AJC u otra fuente oficial.", exceeds: "También anota la fecha en que encontró cada uno y un programa de respaldo." },
      { name: "Preguntas para el centro de empleo", objective: "O3", notYet: "No hay American Job Center ni preguntas en la lista.", meets: "El AJC más cercano y al menos cuatro preguntas, una de ellas sobre fondos para capacitación.", exceeds: "El participante llamó o fue en persona y anotó las respuestas y el nombre de la persona que lo atendió." },
      { name: "Programas comprobados", objective: "O4", notYet: "No se muestran comprobaciones, o hay un programa que cobra por conseguir el trabajo.", meets: "Al menos tres comprobaciones por programa, entre ellas las señales de alerta de estafa, con un resultado.", exceeds: "También compara el costo, la duración, la credencial y los resultados de empleo de los dos programas." },
      { name: "Documentos listos", objective: "O5", notYet: "No hay lista de documentos, o tiene números de identificación reales escritos.", meets: "Requisitos y documentos marcados como Lo tengo / Lo necesito, con dónde conseguir cada cosa que falta.", exceeds: "Todas las cosas que faltan tienen una fecha para conseguirlas." },
      { name: "Plan con fechas", objective: "O6", notYet: "Los pasos no tienen fechas, o hay menos de cinco.", meets: "Cinco pasos o más con fechas, fechas límite y una fecha de seguimiento.", exceeds: "El primer paso ya está hecho o está en el calendario del participante." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que envían al menos una solicitud a un programa de aprendizaje o de capacitación en un plazo de 30 días (encuesta de seguimiento)",
      "Participantes que visitan o llaman a un American Job Center en un plazo de 30 días",
      "Participantes aceptados en un programa de aprendizaje, de preaprendizaje o de capacitación en un plazo de 6 meses, según lo que informen ellos mismos o los programas aliados",
      "Participantes que dicen haber evitado una oferta de \"paga para conseguir trabajo\""
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet (sirve una computadora de la biblioteca o del American Job Center)",
      "Sitios gratuitos: apprenticeship.gov, careeronestop.org, dol.gov, jobcorps.gov, va.gov",
      "Papel y lápiz, o una aplicación de notas, para las listas de control y el plan",
      "Un calendario (en el teléfono o en papel)",
      "De 60 a 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Hagan juntos el examen previo y luego un capítulo por sesión, con las búsquedas de \"Pruébalo ahora\" hechas en vivo; formen parejas con quienes tienen menos confianza en internet.",
      "Antes de la sesión, busque su American Job Center local y los programas de YouthBuild y de preaprendizaje de la zona, para poder mostrar opciones locales reales.",
      "El estado de los programas cambia: revise jobcorps.gov y apprenticeship.gov la semana en que enseña y corrija lo que esté desactualizado.",
      "Nunca pida a los participantes que escriban números reales de identificación, de Seguro Social o de banco en las hojas de práctica.",
      "Para los participantes en reinserción, tenga a mano los contactos de los programas locales de reinserción y de ayuda para conseguir identificación; para los veteranos, la página del GI Bill del VA y la herramienta GI Bill Comparison Tool.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila Todavía no a la vez."
    ]
  }
};
