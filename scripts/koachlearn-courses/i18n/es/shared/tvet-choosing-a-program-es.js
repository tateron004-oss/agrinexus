"use strict";

// Koach Learn course (Spanish translation of shared/tvet-choosing-a-program.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "tvet-choosing-a-program-es",
  lang: "es",
  translationOf: "tvet-choosing-a-program",
  category: "Workforce Development",
  name: "Cómo elegir un programa de formación técnica y profesional (TVET)",
  skills: "Elegir un oficio que vaya contigo y con los empleos de tu zona, Comparar tipos de programas, Verificar la acreditación en los registros oficiales, Hacer a una escuela las preguntas correctas, Detectar escuelas falsas y estafas de capacitación, Escribir un plan de decisión sobre el programa",
  outcome: "elegir un programa de formación técnica y profesional (TVET) que vaya contigo y con los empleos de tu zona: comparar las opciones, verificar en el registro oficial que la escuela y el programa están acreditados, hacer a la escuela las preguntas correctas, evitar escuelas falsas y escribir un plan de decisión con costos y fechas.",
  about: [
    "Este curso es para jóvenes y personas adultas de cualquier parte del mundo que quieren aprender un oficio o una habilidad técnica: electricista, plomero, sastre o costurera, soldador, mecánico automotriz, peluquero, cocinero, técnico solar, auxiliar de enfermería, técnico en computadoras y muchos más. Usa ejemplos de Kenia, Nigeria, Ghana, Senegal, Marruecos, Egipto, India, Filipinas, México, Colombia y Estados Unidos.",
    "Elegir un programa es una decisión importante. Cuesta dinero y meses o años de tu vida. Algunos programas llevan a buenos empleos. Otros son anticuados, tienen poco equipo, no están reconocidos o son falsos. Vas a aprender a elegir un oficio que vaya contigo y con el mercado laboral, comparar tipos de programas, verificar una escuela en el registro oficial del gobierno, hacerle preguntas difíciles a la escuela y detectar estafas.",
    "Este curso no te da un certificado en un oficio y no recomienda ninguna escuela. Te enseña a elegir bien. Cada lección dura unos cinco minutos, con una tarea de \"Pruébalo ahora\", una comprobación rápida corta, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Terminas con tu propio plan de decisión sobre el programa."
  ],
  finalTask: "Escribe para ti un plan de decisión de una página sobre el programa: el oficio que elegiste y por qué (tus intereses y los empleos de tu zona que encontraste), dos programas comparados lado a lado (tipo, duración, requisitos de ingreso, costo total y el título o certificado que obtienes), la prueba de que cada uno está acreditado (el registro oficial que revisaste y lo que mostraba), las respuestas que te dio la escuela a tus preguntas, las señales de alerta que encontraste y tus próximos pasos, con fechas y cómo vas a pagar.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Jóvenes que terminan la primaria o la secundaria y personas adultas que quieren un nuevo oficio o una primera certificación, en África, Asia, América Latina, Oriente Medio y Estados Unidos. Muchos son los primeros de su familia en elegir un programa de formación. Algunos hablan inglés o francés como segunda lengua; el curso está traducido a diez idiomas.",
    startingPoint: "Conocen algunos oficios por su nombre, a menudo por la familia o los amigos. La mayoría nunca ha verificado si una escuela está acreditada, ni ha comparado el costo total de varios programas, ni ha mirado qué empleos se buscan donde vive. Muchos se guían por anuncios o por las redes sociales.",
    gap: "Los participantes necesitan elegir un programa reconocido, que enseñe habilidades prácticas reales y lleve a un empleo, y evitar las escuelas falsas y las estafas que cobran cuotas y dan certificados sin valor. Una elección cuidadosa ahorra dinero y años, y hace más probable conseguir un empleo o tener un negocio.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º grado); muchos leen en una segunda lengua",
      "Dispositivos: a menudo un teléfono inteligente básico con pocos datos; algunos usan un cibercafé o la computadora de la escuela",
      "Las reglas cambian según el país: cada país tiene su propia autoridad de TVET y su propio registro, así que las lecciones enseñan a encontrarlos y revisarlos, no las reglas de un solo país",
      "Costo: puede que tengan poco dinero; nunca pagar una cuota a una persona o a un agente antes de verificar la escuela",
      "Tiempo: lecciones de 4 a 6 minutos; unos 60 a 75 minutos en total"
    ],
    prerequisites: "Ninguno. Quien todavía no ha decidido un oficio puede tomar también \"Empezar una carrera en los oficios calificados\"; quien es nuevo en internet puede tomar primero \"Fundamentos de internet\"."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "A partir de tus propios intereses y de lo que puedas averiguar sobre los empleos donde vives", action: "hacer una lista de tres oficios que vayan contigo y que se busquen en tu zona", standard: "con al menos una prueba del mercado laboral para cada uno, como anuncios de empleo o un empleador al que le preguntaste" },
    { id: "O2", condition: "Ante dos o más opciones de formación", action: "comparar programas por tipo, duración, requisitos de ingreso, costo total y certificado que obtienes", standard: "en una tabla escrita sin casillas vacías" },
    { id: "O3", condition: "Con el nombre de una escuela y de un programa", action: "verificar en el registro oficial de la autoridad nacional de TVET que la escuela y el programa están acreditados", standard: "y anotar dónde lo revisaste y qué mostraba" },
    { id: "O4", condition: "Antes de inscribirte", action: "preguntar a una escuela por la práctica, el equipo, los instructores, el examen final, los empleos de sus egresados y el costo total", standard: "y anotar la respuesta a cada pregunta" },
    { id: "O5", condition: "Ante un anuncio, un mensaje o una oferta de capacitación", action: "detectar las señales de alerta de una escuela falsa o de una estafa de capacitación", standard: "nombrando al menos dos señales cuando aparezcan y sin pagar antes de verificar" },
    { id: "O6", condition: "Con tu comparación y tus verificaciones", action: "escribir un plan de decisión con tu elección, los costos, el financiamiento y las fechas", standard: "que otra persona pueda seguir" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar el oficio adecuado y el tipo de programa adecuado",
      lessons: [
        {
          title: "Qué es la TVET y a dónde puede llevarte",
          objectives: ["O1"],
          minutes: 4,
          goal: "Nombrar cinco oficios o trabajos técnicos para los que preparan los programas de TVET.",
          text: [
            "TVET son las siglas en inglés de Educación y Formación Técnica y Profesional. La UNESCO (la agencia de la ONU para la educación) la describe como educación, formación y desarrollo de habilidades para una gran variedad de empleos y formas de ganarse la vida. En palabras sencillas: la TVET te enseña a hacer un trabajo con tus manos, tus herramientas y tus conocimientos.",
            "La TVET se da en muchos lugares: institutos técnicos y profesionales, politécnicos, centros de capacitación, aprendizajes con un empleador o con un maestro del oficio, y algunas escuelas secundarias. Los nombres cambian: un politécnico en Ghana o Nigeria, un instituto de TVET en Kenia, un centro de capacitación registrado ante TESDA en Filipinas, un plantel del CONALEP en México, un centro del SENA en Colombia, un community college en Estados Unidos.",
            "Hay oficios de construcción (electricista, plomero, albañil, carpintero, soldador), de máquinas y vehículos (mecánico automotriz, reparación de motos, refrigeración y aire acondicionado), de servicios (peluquería, belleza, costura, cocina y banquetes, hotelería), de cuidado (auxiliar de enfermería, cuidador), de agricultura y procesamiento de alimentos, y de tecnología (reparación de computadoras, redes, instalación solar, reparación de teléfonos).",
            "Un buen programa de TVET puede llevarte a un empleo, a un aprendizaje, a tu propio pequeño negocio o a seguir estudiando. Uno malo no lleva a ninguna parte, así que el resto de este curso trata de cómo elegir bien."
          ],
          words: [["TVET", "Educación y Formación Técnica y Profesional: aprender una habilidad para el trabajo practicando, no solo con libros."], ["Oficio", "un trabajo calificado que se aprende con formación y práctica, como la plomería o la costura."], ["Politécnico", "una institución que enseña materias técnicas y prácticas, muchas veces hasta nivel de diploma."]],
          slides: [
            { title: "La TVET en palabras sencillas", bullets: ["Educación y Formación Técnica y Profesional", "Aprender una habilidad de trabajo con herramientas y práctica"] },
            { title: "Dónde se da la TVET", bullets: ["Institutos de TVET, politécnicos, centros de capacitación", "Aprendizajes con un empleador o un maestro del oficio", "Community colleges en Estados Unidos"] },
            { title: "Algunos oficios", bullets: ["Electricista, plomero, soldador, albañil", "Mecánico, sastre, peluquero, cocinero", "Energía solar, reparación de computadoras y teléfonos, cuidado"] },
            { title: "A dónde lleva", bullets: ["Un empleo o un aprendizaje", "Tu propio pequeño negocio", "Seguir estudiando"] }
          ],
          sources: [{ name: "UNESCO-UNEVOC TVETipedia: Educación y formación técnica y profesional", url: "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/show=term/term=Technical+and+vocational+education+and+training" }],
          tryIt: "En un papel, escribe los cinco oficios de esta lección que más te interesan. Junto a cada uno, escribe el nombre de una persona que conozcas que haga ese trabajo o algo parecido.",
          youCanNow: "decir qué es la TVET, dónde se enseña y nombrar cinco oficios a los que puede llevarte.",
          quickCheck: [
            { objective: "O1", q: "¿Qué enseña principalmente un programa de TVET?", options: ["Solo teoría de los libros", "Cómo aprobar cualquier examen universitario", "Una habilidad para el trabajo, practicando con herramientas", "Cómo conseguir una visa"], answer: 2, why: "La TVET es formación para un trabajo u oficio, con práctica real." },
            { objective: "O1", q: "¿Cuál de estos es un camino de TVET?", options: ["Un curso de dos años de instalaciones eléctricas en un instituto técnico", "Un boleto de lotería", "Una página de moda en redes sociales", "Un préstamo de un prestamista"], answer: 0, why: "Un curso de un oficio en un instituto técnico es un programa de TVET." }
          ]
        },
        {
          title: "Elegir un oficio que vaya contigo y con los empleos de tu zona",
          objectives: ["O1"],
          minutes: 5,
          goal: "Hacer una lista de tres oficios que vayan con tus intereses y mostrar pruebas de que cada uno se busca donde vives.",
          text: [
            "Empieza por ti. ¿Te gusta trabajar bajo techo o al aire libre? ¿Con personas, máquinas, comida, telas o computadoras? ¿Eres bueno con los números, cuidadoso con los detalles, fuerte, paciente? ¿Quieres un empleo en una empresa o tu propio negocio?",
            "Después mira los empleos. Es difícil vivir de un oficio que te encanta si cerca de ti nadie contrata ni compra. Busca pruebas: cuenta los anuncios de empleo del oficio en bolsas de trabajo, en periódicos y en tableros de avisos; pregunta a dos o tres empleadores o dueños de negocios qué habilidades no logran encontrar; pregunta a gente que trabaja en el oficio qué tan fácil fue encontrar trabajo y clientes.",
            "Algunos gobiernos publican información del mercado laboral, como listas de habilidades que se buscan. Búscala en el sitio web del ministerio o la secretaría del trabajo de tu país. Ten cuidado con las listas que ves en anuncios o en publicaciones de redes sociales: una escuela que vende un curso siempre dirá que su oficio tiene mucha demanda.",
            "Elige tres oficios que vayan contigo y que tengan alguna prueba de demanda. En las próximas lecciones vas a comparar programas para ellos."
          ],
          steps: ["Escribe lo que te gusta y en lo que eres bueno.", "Haz una lista de los oficios que encajan.", "Para cada uno, busca pruebas de empleo: anuncios, empleadores, gente del oficio.", "Quédate con los tres oficios que mejor encajan y que tienen mejores pruebas."],
          words: [["Demanda", "cuántos empleadores o clientes quieren una habilidad."], ["Información del mercado laboral", "datos sobre los empleos: cuáles están creciendo, cuánto pagan y qué habilidades piden."]],
          slides: [
            { title: "Empieza por ti", bullets: ["¿Bajo techo o al aire libre? ¿Personas o máquinas?", "¿En qué eres bueno?", "¿Empleo en una empresa o tu propio negocio?"] },
            { title: "Después mira los empleos", bullets: ["Cuenta los anuncios de empleo del oficio", "Pregunta a 2 o 3 empleadores qué habilidades necesitan", "Pregunta a gente que trabaja en el oficio"] },
            { title: "Cuidado con los anuncios", bullets: ["Una escuela que vende un curso siempre dice \"mucha demanda\"", "Busca la información del propio ministerio del trabajo"] },
            { title: "Tu lista corta", bullets: ["Tres oficios que van contigo", "Alguna prueba de demanda para cada uno"] }
          ],
          tryIt: "Haz una tabla con tres filas, una por oficio. Columnas: por qué va conmigo, pruebas de empleo (por ejemplo \"5 anuncios esta semana\" o \"el dueño del taller dijo que necesita un mecánico capacitado\") y dónde lo encontré. Llena todas las casillas.",
          youCanNow: "elegir tres oficios que van contigo y respaldar cada uno con pruebas reales de demanda en tu zona.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es la mejor prueba de que un oficio se busca donde vives?", options: ["Lo dice el anuncio de una escuela", "Contaste muchos anuncios de empleo y dos empleadores dijeron que lo necesitan", "Un amigo en internet dijo que paga bien en todas partes", "Es popular en otro país"], answer: 1, why: "Los anuncios de empleo y los empleadores cercanos son pruebas reales; los anuncios de una escuela que vende el curso no lo son." },
            { objective: "O1", q: "Te encanta el diseño de modas, pero no encontraste empleos cerca. ¿Cuál es un siguiente paso sensato?", options: ["Renunciar a cualquier formación", "Inscribirte en el primer curso que veas", "Buscar clientes y oficios relacionados, como la costura, y revisar la demanda de esos", "Pagarle a un agente para que te consiga un empleo en el extranjero"], answer: 2, why: "Los oficios relacionados con demanda local aprovechan el mismo interés y te dan una forma de ganar dinero." }
          ]
        },
        {
          title: "Tipos de programas y el certificado que obtienes",
          objectives: ["O2"],
          minutes: 6,
          goal: "Comparar tipos de programas por duración, requisitos de ingreso, costo y certificado que obtienes.",
          text: [
            "La TVET viene en varias formas. Los cursos cortos duran desde unos días hasta pocos meses y enseñan una sola habilidad. Los programas de certificado y de diploma en institutos y politécnicos duran más y suelen combinar teoría en el aula con práctica en el taller. Los certificados nacionales, como los que se otorgan por medio de TESDA (la autoridad de formación técnica de Filipinas), se basan en normas nacionales y en una evaluación. Los aprendizajes te ponen a trabajar con un empleador o con un maestro del oficio mientras aprendes; en Estados Unidos, los aprendizajes registrados (Registered Apprenticeships) aparecen en apprenticeship.gov. La formación dual reparte tu tiempo entre una escuela y una empresa.",
            "En muchos países, sobre todo en África Occidental, muchos jóvenes aprenden con un aprendizaje informal junto a un maestro del oficio. Así se pueden aprender habilidades reales, pero puede que el certificado no esté reconocido. Pregunta si también puedes presentar una prueba o evaluación nacional del oficio para obtener un certificado reconocido.",
            "Compara cada opción en los mismos cinco puntos: tipo de programa, duración, requisitos de ingreso (por ejemplo un certificado escolar o una edad mínima), costo total, y el certificado que recibes al final y quién lo otorga. Para los empleadores vale más un certificado otorgado o reconocido por la autoridad nacional que uno impreso solo por la escuela."
          ],
          steps: ["Escribe las opciones para un oficio.", "Para cada una, anota el tipo y la duración.", "Anota los requisitos de ingreso.", "Anota el costo total (cuotas, herramientas, uniforme, examen, transporte).", "Anota el certificado y quién lo otorga o lo reconoce."],
          words: [["Certificado", "un certificado, diploma o licencia que prueba tu habilidad."], ["Aprendizaje", "aprender un oficio trabajando con una persona calificada o con un empleador, muchas veces con pago."], ["Evaluación", "una prueba en la que demuestras tu habilidad, muchas veces haciendo una tarea real."]],
          slides: [
            { title: "Tipos de programas", bullets: ["Curso corto: de días a meses, una habilidad", "Certificado o diploma en un instituto o politécnico", "Aprendizaje o formación dual con un empleador"] },
            { title: "Aprendizaje informal", bullets: ["Aprendes con un maestro del oficio", "Habilidades reales, pero el certificado quizá no cuente", "Pregunta por una prueba nacional del oficio"] },
            { title: "Compara cinco puntos", bullets: ["Tipo y duración", "Requisitos de ingreso", "Costo total", "Certificado y quién lo otorga"] },
            { title: "¿Qué certificado cuenta?", bullets: ["Otorgado o reconocido por la autoridad nacional: más fuerte", "Impreso solo por la escuela: más débil"] }
          ],
          sources: [{ name: "TESDA (Filipinas)", url: "https://www.tesda.gov.ph/" }, { name: "Apprenticeship.gov (Departamento de Trabajo de EE. UU.)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Para tu oficio favorito, busca dos tipos distintos de programa (por ejemplo un certificado de un instituto y un aprendizaje). Haz una tabla con los cinco puntos: tipo, duración, requisitos de ingreso, costo total y certificado. Escribe \"no sé\" donde todavía tengas que preguntar.",
          youCanNow: "comparar programas de formación por tipo, duración, requisitos de ingreso, costo total y el certificado que dan.",
          quickCheck: [
            { objective: "O2", q: "¿Qué certificado suele valer más para los empleadores?", options: ["Un certificado que la escuela imprimió por su cuenta", "Un certificado de un curso en redes sociales", "Una carta de un amigo", "Un certificado otorgado o reconocido por la autoridad nacional de TVET"], answer: 3, why: "El reconocimiento nacional les dice a los empleadores que la formación cumplió una norma oficial." },
            { objective: "O2", q: "¿Qué debe incluir el \"costo total\"?", options: ["Solo la cuota del primer mes", "Cuotas, herramientas, uniforme, costo del examen y transporte", "Solo el precio del cartel", "Nada; los buenos programas siempre son gratis"], answer: 1, why: "Los costos ocultos, como herramientas, exámenes y transporte, pueden duplicar lo que pagas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Encontrar el oficio y el programa adecuados",
        questions: [
          { objective: "O1", q: "¿Qué significa TVET?", options: ["Educación y Formación Técnica y Profesional", "Visa de Viaje y Prueba de Empleo", "Herramienta de Validación y Examen Docente", "Impuesto al Intercambio de Valor Comercial"], answer: 0, why: "TVET significa Educación y Formación Técnica y Profesional." },
          { objective: "O1", q: "Quieres revisar la demanda de plomería en tu pueblo. ¿Cuál es el mejor paso?", options: ["Confiar en el cartel de una escuela de capacitación", "Preguntar a un contratista de plomería y contar los anuncios de empleo locales", "Buscar empleos de plomería en otro continente", "Adivinar"], answer: 1, why: "Los empleadores y los anuncios de empleo locales son pruebas reales de demanda donde vives." },
          { objective: "O2", q: "¿Qué programa te pone a trabajar con un empleador mientras aprendes?", options: ["Un video corto en internet", "Un seminario de un día", "Un aprendizaje", "Un libro de texto"], answer: 2, why: "Un aprendizaje significa aprender en el trabajo con una persona calificada o con un empleador." },
          { objective: "O2", q: "Aprendiste soldadura con un maestro en un taller, pero tu certificado no está reconocido. ¿Qué podría ayudarte?", options: ["Comprar un certificado en internet", "Dejar de soldar", "Imprimir tu propio certificado", "Preguntar si puedes presentar la prueba o evaluación nacional del oficio"], answer: 3, why: "Una prueba o evaluación nacional del oficio puede darte un certificado reconocido por las habilidades que ya tienes." },
          { objective: "O2", q: "Dos programas se parecen. ¿Qué detalle importa más al compararlos?", options: ["El color del uniforme", "Quién otorga o reconoce el certificado", "Cuántas fotos hay en su sitio web", "Qué tan grande es su letrero"], answer: 1, why: "Un certificado reconocido por la autoridad nacional vale mucho más para los empleadores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Verificar la escuela y tomar tu decisión",
      lessons: [
        {
          title: "¿Está acreditada? Cómo revisar el registro oficial",
          objectives: ["O3"],
          minutes: 6,
          goal: "Verificar en el sitio web oficial de la autoridad nacional de TVET que una escuela y su programa están registrados o acreditados.",
          text: [
            "La mayoría de los países tiene un organismo del gobierno que registra o acredita las escuelas y los programas de TVET. Acreditado significa que la autoridad revisó que la escuela cumple sus normas. Puede que los empleadores, otras escuelas o un empleo en el extranjero no acepten un certificado de una escuela sin acreditación.",
            "Ejemplos: en Kenia, la Autoridad de TVET (TVETA) otorga licencias, registra y acredita instituciones, y publica una lista de instituciones acreditadas en tveta.go.ke. En Nigeria, la Junta Nacional de Educación Técnica (NBTE) regula instituciones de TVET como los politécnicos y los institutos técnicos. En Filipinas, TESDA publica las instituciones de formación con programas registrados. En Ghana, busca la Comisión de TVET (CTVET); en India, el Consejo Nacional de Educación y Formación Profesional (NCVET) y Skill India; en Marruecos, la OFPPT es un gran proveedor público; en México, el CONALEP es un sistema público de escuelas técnicas; en Colombia, el SENA es el servicio público de formación. En Senegal, Egipto y otros países, empieza por el ministerio encargado de la educación técnica o profesional. En Estados Unidos, revisa los aprendizajes registrados en apprenticeship.gov y pregunta a tu estado por las escuelas con licencia.",
            "Revisa el nombre de la escuela Y el del programa. Una escuela puede estar registrada aunque uno de sus cursos no lo esté. Usa el sitio web oficial (que a menudo termina en .gov, .go.ke, .gov.ng, .gov.ph o la terminación del gobierno de tu país), no un enlace que te mande la escuela o un agente. Si no encuentras la escuela, llama o ve a la oficina de la autoridad y pregunta."
          ],
          steps: ["Encuentra la autoridad de TVET de tu país en el sitio web del ministerio de educación o de trabajo.", "Abre tú mismo su sitio web oficial; no uses un enlace de la escuela.", "Busca en el registro el nombre exacto de la escuela y de la sede.", "Revisa que tu programa también aparezca.", "Anota el sitio web, la fecha y lo que mostraba. Si no aparece, pregunta directamente a la autoridad."],
          words: [["Acreditado", "revisado y aprobado por un organismo oficial porque cumple sus normas."], ["Registro", "una lista oficial, aquí de escuelas y programas aprobados."], ["Autoridad", "el organismo del gobierno encargado de algo, aquí de la TVET."]],
          slides: [
            { title: "Por qué importa la acreditación", bullets: ["La autoridad revisó las normas de la escuela", "Puede que no acepten certificados sin acreditación"] },
            { title: "Algunas autoridades nacionales", bullets: ["Kenia: TVETA. Nigeria: NBTE", "Filipinas: TESDA. Ghana: CTVET. India: NCVET", "México: CONALEP. Colombia: SENA. Marruecos: OFPPT"] },
            { title: "Revisa las dos cosas", bullets: ["La escuela y la sede exactas", "El programa exacto que quieres"] },
            { title: "Revisa de forma segura", bullets: ["Abre tú mismo el sitio oficial", "No uses un enlace de la escuela o de un agente", "Anota dónde y cuándo lo revisaste"] }
          ],
          sources: [{ name: "TVETA Kenia: instituciones de TVET acreditadas", url: "https://www.tveta.go.ke/accredited-tvet-institutions/" }, { name: "Junta Nacional de Educación Técnica (Nigeria)", url: "https://web.nbte.gov.ng/" }, { name: "TESDA (Filipinas): programas registrados", url: "https://www.tesda.gov.ph/" }, { name: "Apprenticeship.gov (EE. UU.)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Encuentra la autoridad oficial de TVET de tu país. Abre tú mismo su sitio web y busca una escuela cercana y el programa que quieres. Anota la dirección del sitio web, la fecha de hoy y lo que encontraste. Si no encontraste la escuela, escribe el teléfono o la oficina donde vas a preguntar.",
          youCanNow: "encontrar la autoridad de TVET de tu país y verificar en su registro oficial que una escuela y su programa están acreditados.",
          quickCheck: [
            { objective: "O3", q: "Una escuela te manda un enlace para \"probar\" que está acreditada. ¿Qué haces?", options: ["Confiar en el enlace porque se ve oficial", "Abrir tú mismo el sitio web oficial de la autoridad y buscar la escuela", "Pagar la cuota primero y revisar después", "Preguntarle al agente de la escuela si es cierto"], answer: 1, why: "Un enlace de la escuela podría llevar a una página falsa; entra tú mismo al sitio oficial." },
            { objective: "O3", q: "La escuela aparece en el registro, pero tu curso no. ¿Qué es cierto?", options: ["Seguro que el curso está bien", "Solo el edificio tiene que estar registrado", "Puede que el curso no esté acreditado; pregunta a la autoridad antes de inscribirte", "A los empleadores no les importa"], answer: 2, why: "Muchas veces las escuelas y los programas se revisan por separado; revisa también el programa." }
          ]
        },
        {
          title: "Qué preguntar y cómo detectar una escuela falsa",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Hacer seis preguntas clave a una escuela y nombrar las señales de alerta de una estafa de capacitación.",
          text: [
            "Visita la escuela si puedes y pregunta: ¿Cuántas horas de práctica real voy a tener? ¿Puedo ver el taller y el equipo? ¿Quiénes son los instructores y han trabajado en el oficio? ¿Qué examen o evaluación hay al final y quién da el certificado? ¿Cuántos exalumnos encontraron trabajo o abrieron un negocio, y puedo hablar con uno? ¿Cuál es el costo total, con herramientas, exámenes y uniformes, y cuál es la regla de reembolso? Anota cada respuesta.",
            "Las buenas escuelas responden con claridad y te dejan ver el taller. Ten cuidado si solo te muestran un salón de clases, si no pueden nombrar a ningún empleador que contrate a sus egresados o si no quieren poner las cuotas por escrito.",
            "Señales de alerta de una escuela falsa o una estafa: un empleo prometido o \"garantizado\", sobre todo en el extranjero; presión para pagar hoy; cuotas pagadas al teléfono o a la cuenta de una persona en lugar de la cuenta oficial de la escuela con recibo; ninguna dirección real; un certificado completo en pocos días sin práctica; que te pidan quedarse con tu pasaporte o tu identificación. Nunca pagues para conseguir un empleo, quédate con tus propios documentos y revisa primero la escuela en el registro oficial.",
            "Si crees que es una estafa, no pagues. Denúnciala ante la autoridad de TVET o la policía, y avisa a tus amigos."
          ],
          steps: ["Pregunta por las horas de práctica, el taller y el equipo.", "Pregunta quiénes son los instructores y qué experiencia tienen.", "Pregunta por el examen final y quién otorga el certificado.", "Pregunta por los empleos de los exalumnos, el costo total y los reembolsos.", "Anota cada respuesta y compárala con las señales de alerta."],
          words: [["Reembolso", "dinero que te devuelven si dejas el curso o si lo cancelan."], ["Recibo", "un comprobante escrito o impreso de que pagaste, con el nombre de la escuela."]],
          slides: [
            { title: "Seis preguntas para hacer", bullets: ["¿Horas de práctica? ¿Taller y equipo?", "¿Experiencia de los instructores? ¿Examen final y certificado?", "¿Empleos de los exalumnos? ¿Costo total y reembolsos?"] },
            { title: "Buenas señales", bullets: ["Respuestas claras, cuotas por escrito", "Puedes ver un taller que funciona", "Puedes hablar con exalumnos"] },
            { title: "Señales de alerta", bullets: ["\"Empleo garantizado\", sobre todo en el extranjero", "Paga hoy, a un teléfono o una cuenta personal", "Sin dirección; certificado en días; se queda con tu pasaporte"] },
            { title: "Si parece una estafa", bullets: ["No pagues", "Denúnciala ante la autoridad de TVET o la policía", "Avisa a tus amigos"] }
          ],
          tryIt: "Escribe las seis preguntas en una hoja. Házselas a una escuela, en persona o por teléfono, o a alguien que haya estudiado allí. Anota cada respuesta. Luego encierra en un círculo cualquier señal de alerta que hayas oído.",
          youCanNow: "hacer a una escuela las preguntas que importan, anotar las respuestas y detectar las señales de alerta de una escuela falsa.",
          quickCheck: [
            { objective: "O4", q: "¿Qué pregunta te dice mejor cuánta práctica real vas a tener?", options: ["\"¿El uniforme es bonito?\"", "\"¿Tienen sitio web?\"", "\"¿La escuela está cerca de una parada de autobús?\"", "\"¿Cuántas horas voy a trabajar en el taller con equipo real?\""], answer: 3, why: "Las horas de práctica y el equipo real son la forma de aprender un oficio." },
            { objective: "O5", q: "Un reclutador dice: \"Paga hoy a mi teléfono y tendrás un empleo garantizado en el extranjero después del curso\". ¿Qué es esto?", options: ["Una señal de alerta de estafa; no pagues", "Una oferta normal de una escuela", "Una beca del gobierno", "Un buen negocio si es barato"], answer: 0, why: "Los empleos garantizados, la presión para pagar ya y el pago a un teléfono personal son señales típicas de estafa." }
          ]
        },
        {
          title: "Comparar y decidir: tu plan de decisión sobre el programa",
          objectives: ["O2", "O6"],
          minutes: 6,
          goal: "Escribir un plan de decisión de una página con tu elección, los costos, el financiamiento y las fechas.",
          text: [
            "Pon tus dos mejores programas lado a lado en una tabla: tipo, duración, requisitos de ingreso, costo total, certificado y quién lo otorga, acreditación (dónde la revisaste), respuestas a tus seis preguntas y cualquier señal de alerta. La mejor opción no siempre es la más barata: es el programa acreditado con más práctica y con las mejores pruebas de que sus egresados encuentran trabajo.",
            "Planea cómo vas a pagar. Escribe el costo total y cuándo vence cada pago. Busca ayuda solo en fuentes oficiales: becas o ayudas del gobierno, préstamos o formación pública gratuita en algunos países, becas de empleadores o de grupos de la comunidad, o un aprendizaje que te pague mientras aprendes. Revisa cualquier oferta de financiamiento en el sitio web oficial de la institución que la da, y nunca pagues una cuota para recibir una beca.",
            "Escribe las fechas: cuándo abren y cierran las inscripciones, qué documentos necesitas (quédate con los originales y entrega copias), la fecha de inicio y la fecha del examen final. Muestra tu plan a tu mamá o tu papá, a un maestro, a un orientador o a alguien del oficio, y pregunta qué se te pasó."
          ],
          steps: ["Haz una tabla que compare tus dos mejores programas.", "Elige uno y escribe por qué.", "Escribe el costo total, las fechas de pago y cómo vas a pagar.", "Escribe los documentos, el plazo de inscripción, la fecha de inicio y la del examen.", "Muestra el plan a alguien de confianza y corrige lo que encuentre."],
          words: [["Beca", "dinero que se da para ayudar a un estudiante a pagar la escuela y que no se devuelve."], ["Plazo", "el último día para hacer algo, como inscribirte."]],
          slides: [
            { title: "Lado a lado", bullets: ["Tipo, duración, ingreso, costo total, certificado", "Acreditación y dónde la revisaste", "Respuestas de la escuela y señales de alerta"] },
            { title: "Lo mejor no siempre es lo más barato", bullets: ["Acreditado", "Con más práctica real", "Con mejores pruebas de que los egresados encuentran trabajo"] },
            { title: "Cómo pagarlo", bullets: ["Costo total y fechas de pago", "Becas, préstamos, aprendizajes pagados", "Revisa en sitios oficiales; nunca pagues por una beca"] },
            { title: "Fechas y documentos", bullets: ["Plazo de inscripción y fecha de inicio", "Quédate con los originales; entrega copias", "Muestra el plan a alguien de confianza"] }
          ],
          tryIt: "Tarea final: escribe tu plan de decisión de una página: tu oficio y por qué, dos programas comparados, dónde revisaste la acreditación, las respuestas de la escuela, las señales de alerta, tu elección, cómo vas a pagar y las fechas de inscripción, inicio y examen final. Muéstraselo a una persona de confianza.",
          youCanNow: "comparar dos programas y escribir un plan de decisión con tu elección, los costos, el financiamiento, los documentos y las fechas.",
          quickCheck: [
            { objective: "O6", q: "Alguien te ofrece una beca si primero pagas una \"cuota de trámite\". ¿Qué haces?", options: ["Pagar rápido antes de que cierre", "Mandar una copia de tu pasaporte para apartar el lugar", "No pagar; revisar la beca en el sitio web oficial de la institución", "Pedir dinero prestado para pagar la cuota"], answer: 2, why: "Las becas reales no te cobran por recibirlas; revísalas en el sitio oficial." },
            { objective: "O2", q: "El programa A es más barato, pero no está acreditado. El programa B cuesta más, está acreditado y tiene un taller completo. ¿Cuál suele ser la mejor opción?", options: ["El programa A, porque es más barato", "Ninguno; nunca te capacites", "El que termine más rápido", "El programa B, si encuentras la forma de pagarlo"], answer: 3, why: "Para los empleadores, un programa acreditado con práctica real vale más que uno barato sin reconocimiento." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Verificar la escuela y tomar tu decisión",
        questions: [
          { objective: "O3", q: "En Kenia, ¿qué organismo publica la lista de instituciones de TVET acreditadas?", options: ["La Autoridad de TVET (TVETA)", "Una empresa privada de publicidad", "Cualquier agente de reclutamiento", "La página de Facebook de la propia escuela"], answer: 0, why: "La TVETA otorga licencias, registra y acredita las instituciones de TVET en Kenia y las publica en su sitio web." },
          { objective: "O3", q: "¿Qué debes anotar después de revisar un registro?", options: ["Nada", "Solo el lema de la escuela", "El sitio web, la fecha y lo que mostraba", "El teléfono del agente"], answer: 2, why: "Un registro de dónde y cuándo lo revisaste es tu prueba." },
          { objective: "O4", q: "La escuela no te deja ver su taller. ¿Qué te dice esto?", options: ["Nada importante", "Es una señal de alerta; haz más preguntas o busca en otro lado", "La escuela debe ser excelente", "Los talleres no importan en la TVET"], answer: 1, why: "La práctica real es el corazón de la TVET; una escuela que esconde su taller quizá no tenga uno." },
          { objective: "O5", q: "¿Cuál es una señal de alerta de una escuela falsa?", options: ["Cuotas anotadas en un recibo oficial", "Una visita a un taller que funciona", "Instructores que han trabajado en el oficio", "Un certificado completo en tres días sin práctica"], answer: 3, why: "Las habilidades de un oficio real necesitan práctica; un certificado rápido sin práctica es señal de algo falso." },
          { objective: "O6", q: "¿Qué va en tu plan de decisión sobre el programa?", options: ["El programa que elegiste, el costo total, cómo vas a pagar y las fechas clave", "Solo el nombre de la escuela", "Tus contraseñas", "Una lista de tus amigos"], answer: 0, why: "Un plan útil dice qué elegiste, cuánto cuesta, cómo vas a pagar y cuándo pasa cada cosa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo elegir un programa de formación técnica y profesional (TVET)",
    questions: [
      { objective: "O1", q: "¿Cuál es un ejemplo de programa de TVET?", options: ["Un curso con certificado en mecánica automotriz", "Una lotería", "Una aplicación de ahorro", "Un servicio de música en línea"], answer: 0, why: "La mecánica automotriz es un oficio que se enseña en los programas de TVET." },
      { objective: "O1", q: "Antes de elegir un oficio, ¿qué debes mirar además de tus intereses?", options: ["Tu color favorito", "Pruebas de que hay empleos o clientes donde vives", "Lo que está de moda en redes sociales esta semana", "El oficio con el nombre más corto"], answer: 1, why: "Un oficio encaja mejor cuando te gusta y la gente cerca de ti contrata o compra." },
      { objective: "O1", q: "¿Con qué fuente de información sobre empleos debes tener más cuidado?", options: ["Un empleador al que le preguntaste", "Contar los anuncios de empleo de tu pueblo", "Un anuncio de una escuela que vende el curso", "Gente que ya trabaja en el oficio"], answer: 2, why: "Una escuela que vende un curso tiene motivos para decir que su oficio tiene demanda." },
      { objective: "O2", q: "¿Qué es un aprendizaje?", options: ["Un cuestionario corto en internet", "Un tipo de préstamo", "Un uniforme escolar", "Aprender un oficio trabajando con una persona calificada o con un empleador"], answer: 3, why: "Los aprendices aprenden en el trabajo, muchas veces con pago." },
      { objective: "O2", q: "¿Qué cinco puntos debes comparar entre programas?", options: ["Tipo, duración, requisitos de ingreso, costo total y certificado", "Logo, colores, sitio web, lema y música", "Solo el precio", "Solo qué tan cerca está"], answer: 0, why: "Estos cinco puntos muestran qué obtienes, qué se necesita y cuánto cuesta." },
      { objective: "O2", q: "¿Qué costo se olvida a menudo al comparar programas?", options: ["Ninguno; el precio del cartel siempre está completo", "Herramientas, costo de exámenes y transporte", "La cuenta de luz de la escuela", "El sueldo del instructor"], answer: 1, why: "Las herramientas, los exámenes y el transporte pueden sumar mucho al costo real." },
      { objective: "O2", q: "¿Quién debe otorgar o reconocer tu certificado para que tenga más peso?", options: ["Solo la escuela", "Un amigo", "La autoridad nacional de TVET o un organismo certificador reconocido", "Un foro en internet"], answer: 2, why: "El reconocimiento nacional les dice a los empleadores que la formación cumplió una norma oficial." },
      { objective: "O3", q: "¿Qué significa \"acreditado\"?", options: ["La escuela tiene un letrero grande", "La escuela es cara", "La escuela es popular en internet", "Un organismo oficial la revisó y aprobó porque cumple las normas"], answer: 3, why: "La acreditación es una revisión oficial con base en normas." },
      { objective: "O3", q: "En Filipinas, ¿qué agencia publica las instituciones de formación con programas registrados?", options: ["TESDA", "Una agencia de viajes", "Un banco", "Una compañía telefónica"], answer: 0, why: "TESDA registra programas y publica las instituciones que los ofrecen." },
      { objective: "O3", q: "¿Dónde debes revisar si una escuela está acreditada?", options: ["En un enlace que te manda la escuela", "En el sitio web oficial de la autoridad nacional de TVET, abierto por ti", "En el cartel de la escuela", "Preguntándole al agente que vende el curso"], answer: 1, why: "Solo el sitio web de la propia autoridad, abierto por ti, es una verificación confiable." },
      { objective: "O3", q: "La escuela está acreditada, pero tu programa no aparece en el registro. Debes:", options: ["Inscribirte de todos modos", "No hacer caso", "Preguntar a la autoridad antes de inscribirte", "Pagar una cuota para arreglarlo"], answer: 2, why: "Los programas se pueden acreditar aparte de la escuela, así que pregunta a la autoridad." },
      { objective: "O4", q: "¿Qué pregunta te ayuda a ver si los egresados encuentran trabajo?", options: ["\"¿De qué color son las paredes?\"", "\"¿Tienen estacionamiento?\"", "\"¿Hay cafetería?\"", "\"¿Cuántos exalumnos encontraron trabajo y puedo hablar con uno?\""], answer: 3, why: "Hablar con exalumnos muestra resultados reales." },
      { objective: "O4", q: "¿Por qué anotar cada respuesta que te da la escuela?", options: ["Para poder comparar escuelas y exigirles lo que dijeron", "Para que la visita dure más", "Porque las escuelas lo exigen", "No sirve de nada"], answer: 0, why: "Las respuestas por escrito te dejan comparar de forma justa y recordar las promesas." },
      { objective: "O4", q: "¿Qué respuesta de una escuela es una buena señal?", options: ["\"No podemos poner las cuotas por escrito\".", "\"Ven a ver el taller, y aquí está la lista completa de cuotas\".", "\"No necesitas práctica para obtener nuestro certificado\".", "\"Paga hoy o pierdes tu lugar\"."], answer: 1, why: "Mostrar el taller y dar las cuotas por escrito son señales de una escuela real." },
      { objective: "O5", q: "¿Cuál es una señal de alerta de una estafa de capacitación?", options: ["Un recibo oficial", "Una regla de reembolso clara", "Un empleo \"garantizado\" en el extranjero si pagas ahora", "Una visita al taller"], answer: 2, why: "Los empleos garantizados y la presión para pagar son señales típicas de estafa." },
      { objective: "O5", q: "Una escuela te pide quedarse con tu pasaporte hasta que termines el curso. Debes:", options: ["Entregarlo", "Mandarle una foto al agente", "Dejárselo para ahorrar tiempo", "Quedarte con tu pasaporte y tus documentos; entregar solo copias"], answer: 3, why: "Nunca entregues tu pasaporte ni tu identificación; quedarse con los documentos de alguien es una señal de alerta de abuso." },
      { objective: "O5", q: "Crees que una oferta de capacitación es una estafa. ¿Qué haces?", options: ["No pagar y denunciarla ante la autoridad de TVET o la policía", "Pagar un poco para probar", "Compartir tus datos bancarios para verificar", "No decirle a nadie"], answer: 0, why: "No pagar y denunciarla te protege a ti y a otras personas." },
      { objective: "O6", q: "¿Qué debe incluir tu plan de decisión sobre el dinero?", options: ["Nada", "El costo total, las fechas de pago y cómo vas a pagar", "Solo la primera cuota", "La contraseña de tu banco"], answer: 1, why: "Saber el costo total y cómo vas a pagar evita sorpresas a mitad del camino." },
      { objective: "O6", q: "¿Qué financiamiento debes revisar en un sitio web oficial antes de confiar en él?", options: ["Ninguno", "Solo los préstamos", "Cualquier oferta de beca, ayuda o préstamo", "Solo las ofertas de amigos"], answer: 2, why: "Existen becas falsas; revisa cada oferta con la institución que la da." },
      { objective: "O6", q: "Antes de mandar tu solicitud, ¿cuál es un buen último paso?", options: ["Entregar tus documentos originales a un agente", "Borrar tu tabla de comparación", "Pagar una cuota extra para ir más rápido", "Mostrar tu plan a un maestro, a un orientador o a alguien del oficio"], answer: 3, why: "Otra persona puede ver lo que se te pasó." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 4, 7, 9, 12, 14, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "El oficio va contigo y con los empleos de tu zona", objective: "O1", notYet: "El oficio se eligió sin ninguna razón o sin pruebas de demanda.", meets: "Dice por qué el oficio encaja y da al menos una prueba de empleo en la zona.", exceeds: "Da pruebas de dos o más fuentes, como anuncios de empleo y una conversación con un empleador." },
      { name: "Programas comparados", objective: "O2", notYet: "Un solo programa, o la tabla tiene casillas vacías.", meets: "Dos programas comparados por tipo, duración, requisitos de ingreso, costo total y certificado.", exceeds: "También incluye los costos ocultos y quién otorga o reconoce cada certificado." },
      { name: "Acreditación verificada", objective: "O3", notYet: "No hay verificación, o se usó un enlace de la escuela.", meets: "Escuela y programa revisados en el sitio oficial de la autoridad nacional, con dónde y cuándo.", exceeds: "Además se contactó a la autoridad para confirmar lo que no estaba claro." },
      { name: "Preguntas hechas y estafas descartadas", objective: "O4", notYet: "No se anotaron respuestas de la escuela, o se pasaron por alto las señales de alerta.", meets: "Se anotaron las respuestas a las seis preguntas y se nombraron las señales de alerta.", exceeds: "Además habló con un exalumno o con un empleador sobre la escuela." },
      { name: "Plan de decisión", objective: "O6", notYet: "No hay elección, costo ni fechas.", meets: "Una elección clara con el costo total, cómo pagar, los documentos y las fechas.", exceeds: "Revisado por una persona de confianza, con sus comentarios incluidos." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y completan el plan de decisión (rúbrica)",
      "Participantes que se inscriben en un programa de TVET o un aprendizaje acreditado en 3 meses",
      "Participantes que dicen haber revisado una escuela en un registro oficial antes de pagar (seguimiento a 30 días)",
      "Participantes que dicen haber evitado o denunciado una escuela falsa o una estafa de capacitación",
      "Los programas aliados reportan menos participantes perdidos en escuelas sin acreditación o en estafas de capacitación"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para abrir los registros oficiales (sirve una computadora compartida o de cibercafé)",
      "Papel y pluma para las tablas y el plan de decisión",
      "El nombre y el sitio web de la autoridad de TVET de tu país (los encuentras en la Lección 4)",
      "Unos 60 a 75 minutos en total, más el tiempo para visitar o llamar a una escuela"
    ],
    facilitatorNotes: [
      "Antes de la sesión, busca la autoridad de TVET de tu país y la página de su registro, y prueba que abre; los registros cambian de lugar y algunos sitios son lentos.",
      "Invita a un empleador local o a un egresado de un programa de TVET a responder preguntas en la Lección 2 o en la Lección 5.",
      "No recomiendes escuelas específicas; enseña a los participantes a revisar y comparar por su cuenta.",
      "Recuerda a los participantes que nunca deben pagarle a un agente ni entregar pasaportes o identificaciones; las sospechas de estafa se denuncian ante la autoridad de TVET o la policía.",
      "Califica el plan de decisión con la rúbrica y da comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
