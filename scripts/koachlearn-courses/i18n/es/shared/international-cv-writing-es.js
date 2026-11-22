"use strict";

// Koach Learn course (Spanish translation of shared/international-cv-writing.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "international-cv-writing-es",
  lang: "es",
  translationOf: "international-cv-writing",
  category: "Workforce Development",
  name: "Cómo escribir un CV para trabajos en todo el mundo",
  skills: "Elegir el formato de CV según el país, Escribir el encabezado y el perfil, Describir el trabajo con resultados, Explicar títulos e idiomas, Adaptar el CV a una oferta de empleo, Reconocer reclutadores falsos",
  outcome: "escribir un CV claro y honesto de dos páginas para una oferta de empleo real en tu país o en el extranjero: con el formato que espera ese país, tu trabajo mostrado como resultados, tus títulos e idiomas explicados, las palabras clave de la oferta y sin números de identificación privados, y comprobar que el trabajo es real antes de enviarlo.",
  about: [
    "Este curso es para cualquier persona que necesite un CV: quienes terminan la escuela o la universidad, quienes tienen años de trabajo informal o en un negocio familiar, quienes cambian de carrera y quienes buscan trabajo con empleadores de otro país o en internet. Los ejemplos vienen de África, Asia, América Latina, Medio Oriente, Europa y América del Norte.",
    "Vas a armar tu propio CV parte por parte: el formato correcto para el país, un encabezado y un perfil corto, tu trabajo escrito como resultados, tus estudios e idiomas explicados para que un empleador extranjero los entienda, y una versión adaptada a una oferta de empleo real. También vas a aprender las señales de alerta de los trabajos falsos y los reclutadores falsos, porque los estafadores buscan a personas que quieren trabajar en el extranjero.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" en papel o en una herramienta gratis como Google Docs, Microsoft Word en línea o LibreOffice Writer. Después de cada lección hay una comprobación rápida de dos preguntas, cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Al final, tu CV estará listo.",
    "Este curso te enseña a escribir un CV. No te consigue un trabajo, una visa ni un permiso de trabajo. Para visas y permisos de trabajo, usa solo el sitio web oficial del gobierno o de la embajada del país donde quieres trabajar."
  ],
  finalTask: "Elige una oferta de empleo real (en tu país, en el extranjero o en internet). Escribe para ella un CV de dos páginas o menos: el formato y los datos personales que espera ese país, un encabezado y un perfil de 3 a 4 líneas, al menos tres experiencias de trabajo o actividades escritas como acción + resultado, estudios e idiomas explicados para un lector extranjero, y al menos cinco palabras clave de la oferta usadas con honestidad. Guárdalo como PDF con un nombre de archivo claro y completa la lista de control contra estafas antes de enviar nada.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Jóvenes y adultos que buscan trabajo en muchos países: quienes terminan la escuela, egresados de formación técnica (TVET) y de la universidad, personas con trabajo informal, en el campo, en el mercado o en un negocio familiar, migrantes que regresan y personas que buscan trabajo en el extranjero o con empleadores en internet. El curso está traducido a muchos idiomas.",
    startingPoint: "La mayoría puede escribir un documento corto en un teléfono o en una computadora compartida. Muchos nunca han escrito un CV, o tienen uno copiado de una plantilla que enumera tareas, incluye números de identificación privados o tiene cuatro páginas o más. Pocos saben que las reglas del CV cambian según el país.",
    gap: "Los empleadores y reclutadores dedican poco tiempo a cada CV. Un CV demasiado largo, con el formato equivocado para el país, que oculta la experiencia informal o que usa títulos que un empleador extranjero no entiende suele ser rechazado. Además, a quienes buscan trabajo en el extranjero los buscan reclutadores falsos que piden pagos y pasaportes. Los participantes necesitan un CV sólido y honesto, y la costumbre de comprobar un trabajo antes de postularse.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; muchos participantes leen inglés, francés o español como segundo idioma",
      "Dispositivos: a menudo un teléfono o una computadora compartida en un cibercafé, una biblioteca o un centro de formación; solo herramientas gratis",
      "Tiempo: lecciones de 4 a 6 minutos; el CV completo se puede armar en unas dos horas, en varias sesiones",
      "Las reglas cambian según el país: el curso enseña patrones comunes y cómo comprobar las instrucciones del propio empleador o del país",
      "Seguridad: nunca poner números de identificación, de pasaporte ni de banco en un CV ni en un archivo de práctica; ningún consejo sobre visas ni consejo legal"
    ],
    prerequisites: "Saber escribir un poco en un teléfono o una computadora. Quien sea nuevo con las computadoras puede tomar primero \"Habilidades básicas de computación\"; quien esté en EE. UU. y quiera un currículum de una página al estilo estadounidense y practicar entrevistas también puede tomar \"Currículum, LinkedIn y entrevistas de trabajo\"."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con un trabajo en un país determinado", action: "elegir el formato, la extensión y los datos personales del CV que esperan el país y el empleador", standard: "siguiendo las instrucciones de la oferta y sin incluir números de identificación ni de pasaporte" },
    { id: "O2", condition: "Usando tu propia información", action: "escribir el encabezado del CV y un perfil de 3 a 4 líneas orientado a un tipo de trabajo", standard: "con datos de contacto que funcionen y sin errores de ortografía" },
    { id: "O3", condition: "Con tu experiencia de trabajo, estudio o comunidad, pagada o no", action: "escribir experiencias que empiecen con un verbo de acción y muestren un resultado", standard: "con al menos un número o un detalle concreto en cada una" },
    { id: "O4", condition: "Con tus certificados, tu formación y tus idiomas", action: "presentar tus títulos y tu nivel de idiomas para que un empleador de otro país los entienda", standard: "indicando la escuela, el país, el año y un nivel que un lector extranjero pueda usar" },
    { id: "O5", condition: "Con una oferta de empleo real", action: "adaptar tu CV a la oferta usando sus palabras clave y un diseño que los sistemas de selección puedan leer", standard: "usando con honestidad al menos cinco palabras clave y guardándolo como un PDF con un nombre claro" },
    { id: "O6", condition: "Antes de enviar tu CV a un empleo o a un reclutador", action: "revisar la oferta en busca de señales de alerta de un trabajo falso o de un reclutador ilegal", standard: "sin pagar ninguna tarifa ni entregar tu pasaporte ni documentos originales" }
  ],
  chapters: [
    {
      name: "Capítulo 1: La base de tu CV",
      lessons: [
        {
          title: "CV o currículum: qué cambia de un país a otro",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir la extensión, el formato y los datos personales correctos del CV para el país al que te postulas.",
          text: [
            "Un CV (curriculum vitae, también llamado currículum u hoja de vida) es un documento corto que muestra a un empleador tus habilidades, tu trabajo y tus estudios. En Estados Unidos y Canadá en inglés se llama \"resume\" y suele tener una o dos páginas. La mayoría de los países usa la palabra CV. Para casi todos los trabajos, dos páginas es un máximo seguro; los CV académicos largos son solo para puestos de investigación y de universidad.",
            "Los datos personales cambian según el país. Los empleadores de EE. UU., Canadá y el Reino Unido normalmente no quieren foto, edad, estado civil ni religión, por las reglas contra la discriminación. En muchos países de África, Medio Oriente, Asia y América Latina (por ejemplo Nigeria, Egipto, Marruecos, India, Filipinas, México y Colombia) muchos empleadores todavía esperan una foto, la fecha de nacimiento o la nacionalidad. En Senegal o en Costa de Marfil, el CV normalmente se escribe en francés.",
            "No existe una sola regla mundial, así que sigue tres fuentes en este orden: las instrucciones de la propia oferta, la página de empleo del empleador y luego la costumbre de ese país. Si la oferta pide foto, usa una foto sencilla y profesional de la cabeza y los hombros. Si te postulas en Europa, muchos empleadores conocen el formato gratis de CV Europass.",
            "Hay cosas que nunca van en un CV, en ningún lugar: tu número de identificación nacional, de pasaporte o de seguro social, tus datos bancarios o una copia de tu pasaporte. Un empleador real solo los pide después de una oferta, mediante un proceso seguro."
          ],
          steps: ["Lee las instrucciones de la oferta: idioma, formato, foto, extensión y cómo postularte.", "Revisa la página de empleo del empleador.", "Busca la costumbre habitual del CV en ese país.", "Decide: extensión (1-2 páginas), foto o sin foto y qué datos personales poner.", "Deja fuera siempre los números de identificación, de pasaporte y de banco."],
          words: [["CV", "curriculum vitae: un documento corto con tus habilidades, tu trabajo y tus estudios para un empleador."], ["Resume", "el nombre habitual del CV en inglés en EE. UU. y Canadá; suele tener una o dos páginas."], ["Europass", "un formato y una herramienta gratis de CV de la Unión Europea, que conocen muchos empleadores en Europa."], ["Discriminación", "tratar a alguien de forma injusta por cosas como la edad, el sexo, la religión o la situación familiar."]],
          slides: [
            { title: "CV o currículum", bullets: ["Un documento corto con tus habilidades, trabajo y estudios", "En EE. UU. y Canadá dicen resume; la mayoría de los países dice CV", "Dos páginas es un máximo seguro para casi todos los trabajos"] },
            { title: "Los datos personales cambian según el país", bullets: ["EE. UU., Canadá, Reino Unido: normalmente sin foto, edad ni estado civil", "Muchos países todavía esperan foto o fecha de nacimiento", "África francófona: el CV normalmente va en francés"] },
            { title: "Sigue este orden", bullets: ["1. Las instrucciones de la oferta", "2. La página de empleo del empleador", "3. La costumbre de ese país"] },
            { title: "Nunca en ningún CV", bullets: ["Números de identificación nacional, de pasaporte o de seguro social", "Datos bancarios o una copia de tu pasaporte"] }
          ],
          sources: [{ name: "Europass: crea tu CV Europass (Unión Europea)", url: "https://europass.europa.eu/en/create-europass-cv" }],
          tryIt: "Elige dos países donde podrías trabajar, por ejemplo tu país y uno en el extranjero. Para cada uno, escribe en papel: el idioma del CV, la extensión, foto sí o no y qué datos personales incluir. Luego busca una oferta de empleo real en cada uno y mira si da sus propias instrucciones.",
          youCanNow: "elegir la extensión, el idioma, la foto y los datos personales del CV para un país, y decir qué nunca va en un CV.",
          quickCheck: [
            { objective: "O1", q: "Una oferta de una empresa de Canadá pide un \"resume\". ¿Qué datos personales dejas fuera?", options: ["Tu correo electrónico", "Tu ciudad", "Tu número de teléfono", "Tu foto, tu edad y tu estado civil"], answer: 3, why: "Los empleadores de Canadá y EE. UU. normalmente no quieren foto, edad ni estado civil." },
            { objective: "O1", q: "¿Qué cosa nunca debe ir en un CV, en ningún país?", options: ["Tu número de pasaporte", "Tu correo electrónico", "Los idiomas que hablas", "Tu trabajo más reciente"], answer: 0, why: "Los números de identificación y de pasaporte se pueden usar para robar tu identidad; los empleadores solo los piden después de una oferta." }
          ]
        },
        {
          title: "Tu encabezado y tu perfil: los primeros diez segundos",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escribir el encabezado del CV y un perfil de 3 a 4 líneas para un tipo de trabajo.",
          text: [
            "Los reclutadores a menudo miran un CV solo unos segundos antes de decidir si siguen leyendo. La parte de arriba de la página tiene que decirles quién eres y qué sabes hacer.",
            "El encabezado tiene tu nombre completo, un número de teléfono con el código de país (por ejemplo +234 para Nigeria, +254 para Kenia, +63 para Filipinas), un correo electrónico profesional, tu ciudad y tu país, y un enlace de LinkedIn si tienes uno. Un correo profesional es sencillo, como nombre.apellido@ más tu proveedor de correo, no un apodo.",
            "El perfil son 3 a 4 líneas debajo del encabezado. Di qué eres (tu oficio o tu área), tus mejores habilidades o tus años de experiencia, un resultado y qué trabajo buscas. Ejemplo: \"Agente de atención al cliente con 3 años en una tienda de dinero móvil con mucho movimiento en Acra. Atendí a más de 80 clientes al día en inglés y en twi, con muy pocas quejas. Busco un puesto en un centro de llamadas.\"",
            "Escribe un perfil para un tipo de trabajo. Si te postulas a dos trabajos distintos, escribe dos perfiles."
          ],
          steps: ["Escribe tu nombre completo en letra grande.", "Agrega el teléfono con código de país, un correo profesional, tu ciudad y tu país.", "Escribe la línea 1: qué eres y tus años de experiencia.", "Escribe las líneas 2-3: tus mejores habilidades y un resultado.", "Escribe la última línea: el trabajo que buscas."],
          words: [["Encabezado", "la parte de arriba del CV con tu nombre y tus datos de contacto."], ["Perfil", "3 a 4 líneas debajo del encabezado que resumen quién eres y el trabajo que buscas; también se llama resumen."], ["Código de país", "el número que se agrega antes de un teléfono cuando se llama desde otro país, como +233 para Ghana."]],
          slides: [
            { title: "Los primeros diez segundos", bullets: ["Los reclutadores deciden rápido", "La parte de arriba de la página 1 debe decir quién eres"] },
            { title: "Encabezado", bullets: ["Nombre completo", "Teléfono con código de país, por ejemplo +254", "Correo profesional, ciudad y país"] },
            { title: "Perfil: 3 a 4 líneas", bullets: ["Qué eres y tu experiencia", "Tus mejores habilidades y un resultado", "El trabajo que buscas"] },
            { title: "Un trabajo, un perfil", bullets: ["¿Te postulas a dos tipos de trabajo? Escribe dos perfiles"] }
          ],
          tryIt: "Escribe tu encabezado. Revisa que tu número de teléfono tenga el código de país y que tu correo sea profesional. Luego escribe un perfil de 3 a 4 líneas para un trabajo que quieras. Léelo en voz alta: ¿alguien puede saber tu oficio y tu mejor resultado en diez segundos?",
          youCanNow: "escribir el encabezado de un CV con datos de contacto que funcionan y un perfil corto orientado a un trabajo.",
          quickCheck: [
            { objective: "O2", q: "¿Qué dirección de correo es mejor para un CV?", options: ["sweetgirl2004@...", "amina.okafor@...", "bigboss_money@...", "dontemailme@..."], answer: 1, why: "Un correo sencillo con tu nombre se ve profesional." },
            { objective: "O2", q: "Te postulas desde Kenia a un empleador de otro país. ¿Cómo debe aparecer tu número de teléfono?", options: ["Sin los primeros dígitos", "Solo tu nombre de WhatsApp", "Con el código de país, como +254", "No debes dar un número de teléfono"], answer: 2, why: "El código de país permite que un empleador en el extranjero te llame." }
          ]
        },
        {
          title: "Tu trabajo escrito como resultados, incluido el trabajo informal",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escribir tres experiencias que empiecen cada una con un verbo de acción y muestren un resultado.",
          text: [
            "Muchos CV enumeran tareas: \"Responsable de ventas.\" Los empleadores quieren saber qué lograste. Empieza cada línea con un verbo de acción (atendí, vendí, reparé, capacité, organicé, reduje) y agrega un resultado con un número o un detalle claro.",
            "Tarea: \"Responsable de los clientes.\" Resultado: \"Atendí a unos 60 clientes al día y llevé los registros de la tienda en un cuaderno sin ningún pago faltante durante 12 meses.\"",
            "El trabajo informal y el no pagado cuentan. Vender en un mercado de Lagos, reparar teléfonos en Nairobi, ayudar a llevar una granja familiar en Marruecos, hacer voluntariado en la iglesia o en un club juvenil, o hacer trabajos por encargo en internet son experiencia real. Dale a cada uno un título claro (por ejemplo \"Comerciante independiente\" o \"Coordinador voluntario de jóvenes\"), el lugar, las fechas y tus resultados.",
            "Pon primero tu trabajo más reciente. Usa de 2 a 4 líneas por trabajo. Nunca inventes trabajos, cargos ni números; si haces un cálculo aproximado, di \"unos\" o \"aproximadamente\" y prepárate para explicarlo en una entrevista."
          ],
          steps: ["Haz una lista de cada trabajo, negocio, granja, voluntariado o trabajo por encargo que hayas tenido.", "Dale a cada uno un título claro, el lugar y las fechas (mes y año).", "Para cada uno, escribe de 2 a 4 líneas que empiecen con un verbo de acción.", "Agrega un número o un detalle concreto a cada línea.", "Pon primero lo más reciente y revisa que cada línea sea verdad."],
          words: [["Verbo de acción", "una palabra que dice lo que hiciste y que inicia una línea del CV, como atendí, vendí o reparé."], ["Resultado", "lo que cambió gracias a tu trabajo, mostrado con un número o un detalle claro."], ["Trabajo informal", "trabajo sin contrato formal, como vender en un mercado, el negocio familiar o los trabajos ocasionales."]],
          slides: [
            { title: "Tareas o resultados", bullets: ["Tarea: \"Responsable de los clientes\"", "Resultado: \"Atendí a unos 60 clientes al día sin ningún pago faltante\""] },
            { title: "Empieza con un verbo de acción", bullets: ["Atendí, vendí, reparé, capacité, organicé, reduje", "Agrega un número o un detalle claro"] },
            { title: "El trabajo informal cuenta", bullets: ["Vender en un mercado, reparar teléfonos, la granja familiar", "El voluntariado y los trabajos por encargo en internet", "Dale un título, un lugar y fechas"] },
            { title: "Que sea verdad", bullets: ["Lo más reciente primero, de 2 a 4 líneas por trabajo", "Di \"unos\" para los cálculos aproximados", "Nunca inventes trabajos ni números"] }
          ],
          tryIt: "Elige tres experiencias, pagadas o no. Para cada una, escribe un título, el lugar y las fechas, y luego dos líneas que empiecen con un verbo de acción e incluyan un número o un detalle. Subraya cada número y revisa que podrías explicarlo a un entrevistador.",
          youCanNow: "convertir tu trabajo pagado y no pagado en experiencias honestas del CV que muestran resultados.",
          quickCheck: [
            { objective: "O3", q: "¿Qué línea muestra un resultado?", options: ["Responsable de la tienda", "Trabajé en ventas", "Entre mis tareas estaba limpiar", "Vendí unas 40 fundas de teléfono por semana y capacité a 2 empleados nuevos"], answer: 3, why: "Empieza con un verbo de acción y da números que muestran lo que lograste." },
            { objective: "O3", q: "Vendiste verduras en un mercado durante tres años sin contrato. ¿Qué haces?", options: ["Lo pones como \"Comerciante independiente\" con fechas y resultados", "Lo dejas fuera porque era informal", "Lo llamas un puesto de gerente en una gran empresa", "Escribes solo \"mercado\" sin detalles"], answer: 0, why: "El trabajo informal es experiencia real; dale un título claro y honesto y muestra resultados." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La base de tu CV",
        questions: [
          { objective: "O1", q: "Te postulas a una empresa de Costa de Marfil. La oferta está en francés y no dice nada sobre el idioma. ¿En qué idioma escribes tu CV?", options: ["En el idioma que quieras", "En francés, el idioma de la oferta", "Mitad en inglés, mitad en francés", "En clave para que sea privado"], answer: 1, why: "Sigue el idioma de la oferta y del país; en Costa de Marfil normalmente es el francés." },
          { objective: "O1", q: "Dos fuentes no están de acuerdo sobre poner una foto. ¿Cuál va primero?", options: ["El CV viejo de un amigo", "Una plantilla cualquiera de internet", "Las instrucciones de la propia oferta", "Lo que tú prefieras"], answer: 2, why: "Primero van las instrucciones de la oferta, luego la página del empleador y luego la costumbre del país." },
          { objective: "O2", q: "¿Qué va en el encabezado del CV?", options: ["Tu nombre, teléfono con código de país, correo, ciudad y país", "Tu número de cuenta bancaria", "Tu número de pasaporte", "La historia completa de tu vida"], answer: 0, why: "El encabezado da lo justo para que el empleador sepa quién eres y te contacte." },
          { objective: "O2", q: "¿Qué tan largo debe ser el perfil?", options: ["Una palabra", "Una página completa", "Dos páginas", "De 3 a 4 líneas"], answer: 3, why: "Un perfil corto se lee en segundos y muestra quién eres y el trabajo que buscas." },
          { objective: "O3", q: "¿Qué experiencia está mejor escrita?", options: ["\"Hice muchas cosas en la granja\"", "\"Responsable de los animales\"", "\"Me encargué de alimentar a 200 gallinas y reduje el desperdicio de alimento en una quinta parte aproximadamente en una temporada\"", "\"Granja\""], answer: 2, why: "Empieza con un verbo de acción y muestra un resultado con números." }
        ]
      }
    },
    {
      name: "Capítulo 2: Adaptar el CV al trabajo y protegerte",
      lessons: [
        {
          title: "Estudios, certificados e idiomas que entiende un empleador extranjero",
          objectives: ["O4"],
          minutes: 5,
          goal: "Presentar tus títulos e idiomas para que un empleador de otro país los entienda.",
          text: [
            "Un empleador en el extranjero puede no conocer tu escuela ni los certificados de tu país, como el certificado WAEC o NECO en África Occidental, el KCSE en Kenia, el baccalauréat en Senegal o Marruecos, o un certificado nacional TESDA en Filipinas. Para cada uno, escribe el nombre completo, la escuela o el organismo que lo otorga, la ciudad y el país, el año y una explicación corta y sencilla, por ejemplo \"(certificado nacional de fin de la educación secundaria)\".",
            "Para trabajar o estudiar en otro país, el empleador, un colegio profesional o una oficina de migración puede pedir una evaluación o un reconocimiento oficial de tus títulos. En Europa, la red ENIC-NARIC te indica el centro de reconocimiento de cada país; en EE. UU. y Canadá, servicios como World Education Services (WES) evalúan títulos extranjeros. Pregunta al empleador o a la oficina oficial cuál aceptan antes de pagar cualquier evaluación.",
            "Los idiomas son una habilidad muy valiosa. Nombra cada idioma y tu nivel. Muchos empleadores entienden los niveles del Marco Común Europeo de Referencia, A1 y A2 (básico), B1 y B2 (independiente) y C1 y C2 (avanzado), o palabras sencillas como \"nativo\", \"fluido\" o \"básico\". Si tienes el resultado de un examen (por ejemplo IELTS, TOEFL o DELF), indica el examen y el año.",
            "Los cursos cortos también cuentan: certificados en línea, programas de formación técnica (TVET), primeros auxilios o licencias de conducir. Ponlos en \"Certificados y formación\" con quien los dio y el año."
          ],
          steps: ["Escribe cada título con su nombre completo, la escuela u organismo que lo otorga, la ciudad, el país y el año.", "Agrega una explicación corta y sencilla a los certificados locales.", "Escribe cada idioma con un nivel (nativo, fluido, B2, básico).", "Agrega el nombre y el año de los exámenes si los tienes.", "Escribe los cursos cortos y las licencias con quien los dio y el año."],
          words: [["Evaluación de títulos", "un informe oficial que explica a qué equivale un título extranjero en otro país."], ["ENIC-NARIC", "una red de centros nacionales que orientan sobre el reconocimiento de títulos de otros países."], ["MCER", "Marco Común Europeo de Referencia (en inglés, CEFR): niveles de idioma de A1 (principiante) a C2 (muy avanzado)."], ["TVET", "educación y formación técnica y profesional: programas prácticos de formación para el trabajo."]],
          slides: [
            { title: "Explica los certificados locales", bullets: ["Nombre completo, escuela, ciudad, país, año", "Agrega una nota sencilla: \"(certificado nacional de fin de la educación secundaria)\""] },
            { title: "Reconocimiento en el extranjero", bullets: ["Algunos empleadores piden una evaluación oficial", "Europa: ENIC-NARIC; EE. UU. y Canadá: servicios como WES", "Pregunta cuál aceptan antes de pagar"] },
            { title: "Idiomas", bullets: ["Nombra cada idioma y un nivel", "A1-A2 básico, B1-B2 independiente, C1-C2 avanzado", "Agrega un examen y el año si tienes uno"] },
            { title: "Los cursos cortos cuentan", bullets: ["Certificados en línea, TVET, primeros auxilios, licencia de conducir", "Indica quién lo dio y el año"] }
          ],
          sources: [
            { name: "Red ENIC-NARIC: reconocimiento de títulos", url: "https://www.enic-naric.net/" },
            { name: "World Education Services (WES): evaluación de títulos para EE. UU. y Canadá", url: "https://www.wes.org/" },
            { name: "Europass: Marco Común Europeo de Referencia para las lenguas", url: "https://europass.europa.eu/en/common-european-framework-reference-language-skills" }
          ],
          tryIt: "Escribe tus secciones de Estudios, Certificados e Idiomas. Dale a cada certificado local una explicación corta y sencilla, y a cada idioma un nivel. Muéstralo a alguien de otro país o región, o léelo como si fueras un empleador extranjero: ¿hay algo que no se entienda?",
          youCanNow: "presentar tus estudios, certificados e idiomas para que un empleador de otro país los entienda.",
          quickCheck: [
            { objective: "O4", q: "Un empleador en Alemania puede no conocer el KCSE. ¿Qué escribes?", options: ["Solo \"KCSE\"", "Nada sobre la escuela", "Un título más alto que no tienes", "\"KCSE (Kenya Certificate of Secondary Education, certificado de educación secundaria de Kenia), [escuela], Nairobi, Kenia, [año]\""], answer: 3, why: "El nombre completo, la escuela, el lugar y el año permiten que un empleador extranjero lo entienda." },
            { objective: "O4", q: "Hablas español en casa y usas inglés en el trabajo todos los días. ¿Cómo podrías ponerlos?", options: ["Español: nativo; inglés: fluido (C1)", "Idiomas: algunos", "Español e inglés: perfectos en todo", "No poner los idiomas"], answer: 0, why: "Nombra cada idioma con un nivel claro que el empleador pueda usar." }
          ]
        },
        {
          title: "Adaptar tu CV a una oferta de empleo",
          objectives: ["O5"],
          minutes: 6,
          goal: "Adaptar tu CV a una oferta de empleo real usando sus palabras clave y un diseño que los sistemas de selección puedan leer.",
          text: [
            "Enviar el mismo CV a todos los trabajos casi nunca funciona. Lee la oferta y subraya las palabras clave: cargos, habilidades, herramientas, idiomas y certificados (por ejemplo \"atención al cliente\", \"Excel\", \"bilingüe francés-inglés\", \"licencia de montacargas\"). Cuando sean verdad para ti, usa esas mismas palabras en tu perfil, tus habilidades y tu experiencia.",
            "Muchos empleadores grandes y sitios de empleo usan un sistema de seguimiento de candidatos (ATS, por sus siglas en inglés), un programa que lee los CV y busca palabras clave en ellos. Ayúdalo a leer el tuyo: usa títulos de sección sencillos (Perfil, Experiencia, Estudios, Habilidades, Idiomas), una letra común, nada de texto dentro de imágenes o cuadros de texto y nada de tablas para la información importante.",
            "Nunca copies toda la oferta ni digas que tienes habilidades que no tienes. Esconder palabras clave en texto blanco u oculto puede hacer que te rechacen, y las mentiras te pueden costar el trabajo más adelante.",
            "Guarda el CV final como PDF, salvo que la oferta pida Word. Ponle un nombre claro al archivo, como \"Amina-Okafor-CV-Atencion-al-Cliente.pdf\", y que tenga dos páginas o menos."
          ],
          steps: ["Subraya las palabras clave de la oferta: cargos, habilidades, herramientas, idiomas, certificados.", "Marca las que son verdad para ti.", "Usa esas mismas palabras en tu perfil, tus habilidades y tu experiencia.", "Usa títulos de sección sencillos y un diseño simple; nada de texto en imágenes.", "Guárdalo como PDF (o Word si lo piden) con tu nombre y el trabajo en el nombre del archivo."],
          words: [["Palabras clave", "las palabras importantes de una oferta de empleo: habilidades, herramientas, cargos y certificados."], ["ATS", "sistema de seguimiento de candidatos: un programa que reúne los CV y busca palabras clave en ellos."], ["PDF", "un tipo de archivo que se ve igual en cualquier computadora o teléfono."]],
          slides: [
            { title: "Una oferta, un CV", bullets: ["Subraya las palabras clave de la oferta", "Usa las que son verdad en tu propio CV"] },
            { title: "Ayuda al programa a leerlo", bullets: ["Títulos sencillos: Perfil, Experiencia, Estudios, Habilidades", "Letra común, nada de texto en imágenes ni cuadros de texto", "Nada de tablas para la información importante"] },
            { title: "Sé honesto", bullets: ["No copies la oferta", "Nada de palabras clave ocultas", "Pon solo las habilidades que tienes"] },
            { title: "Guárdalo y ponle nombre", bullets: ["PDF, salvo que la oferta pida Word", "Nombre-CV-Trabajo.pdf", "Dos páginas o menos"] }
          ],
          tryIt: "Busca una oferta de empleo real. Subraya diez palabras clave. Marca las que son verdad para ti y agrega al menos cinco a tu CV en los lugares correctos. Guárdalo como PDF con tu nombre y el trabajo en el nombre del archivo.",
          youCanNow: "adaptar tu CV a una oferta con sus palabras clave y guardarlo en un formato que los empleadores y sus programas pueden leer.",
          quickCheck: [
            { objective: "O5", q: "La oferta pide \"bilingüe francés-inglés\" y tú hablas bien los dos. ¿Qué haces?", options: ["Lo ignoras", "Escribes esas palabras en tu perfil o en tu sección de idiomas", "Lo escribes en texto blanco para que solo lo vea el programa", "Dices que también hablas otros cinco idiomas"], answer: 1, why: "Usar las palabras clave verdaderas de la oferta donde una persona y el programa puedan verlas es adaptar con honestidad." },
            { objective: "O5", q: "¿Qué diseño le resulta más fácil de leer a un sistema de seguimiento de candidatos?", options: ["Tu experiencia dentro de una imagen", "Texto en muchos cuadros de texto pequeños", "Títulos sencillos y texto simple", "Una tabla con todas tus habilidades en celdas diminutas"], answer: 2, why: "Los programas leen con más seguridad el texto simple bajo títulos sencillos." }
          ]
        },
        {
          title: "Antes de enviar: cómo reconocer trabajos falsos y reclutadores ilegales",
          objectives: ["O6"],
          minutes: 6,
          goal: "Revisar una oferta de trabajo y a un reclutador en busca de señales de estafa antes de enviar tu CV.",
          text: [
            "Las personas que buscan trabajo, sobre todo en el extranjero, son un blanco favorito de los estafadores. La señal de alerta más grande: alguien te pide pagar para conseguir el trabajo, por \"trámites\", capacitación, un examen médico, una visa o una colocación. Los empleadores honestos no te cobran por darte un trabajo, y los principios de contratación equitativa de la Organización Internacional del Trabajo (OIT) dicen que los trabajadores no deben pagar tarifas de contratación ni costos relacionados.",
            "Otras señales de alerta: una oferta sin entrevista; un sueldo muy alto por un trabajo fácil; mensajes solo por WhatsApp o desde un correo gratis; presión para decidir hoy; una empresa que no encuentras en su propio sitio web; que te pidan tu pasaporte, tus certificados originales o tus datos bancarios; o que te envíen un cheque y te pidan devolver parte del dinero.",
            "Comprueba antes de postularte. Busca el sitio web real de la empresa y contáctala con datos que encuentres tú mismo. Para trabajos en el extranjero, comprueba que la agencia de contratación tenga licencia de la oficina de trabajo o de trabajadores migrantes de tu gobierno (por ejemplo el Department of Migrant Workers en Filipinas o la National Employment Authority en Kenia), y consulta las páginas oficiales de visas y permisos de trabajo del país de destino.",
            "Quédate con tu pasaporte y tus documentos originales; envía solo copias cuando un empleador real te las pida después de una oferta. Si sospechas una estafa o trata de personas, corta el contacto y denúncialo a la policía de tu país, al ministerio de trabajo o a la embajada. La OIM (Organización Internacional para las Migraciones) y la OIT apoyan a los migrantes y publican guías de contratación equitativa."
          ],
          steps: ["Nunca pagues una tarifa para conseguir un trabajo o un lugar con un reclutador.", "Busca el sitio web real de la empresa y contáctala tú mismo.", "Para trabajos en el extranjero, comprueba la licencia de la agencia con la oficina de trabajo o de migrantes de tu gobierno.", "Lee las reglas de visas y permisos de trabajo solo en sitios oficiales del gobierno o de la embajada.", "Quédate con tu pasaporte y tus originales; envía copias solo después de una oferta real.", "Detente y denuncia todo lo que te parezca raro."],
          words: [["Tarifa de contratación", "dinero que le piden a un trabajador para conseguir un trabajo o una colocación; la contratación equitativa dice que el trabajador no debe pagarlo."], ["Agencia con licencia", "una agencia de contratación que tu gobierno aprobó y que puedes verificar."], ["Trata de personas", "trasladar o retener a personas con fuerza, engaño o deudas para explotar su trabajo."]],
          slides: [
            { title: "La señal de alerta más grande", bullets: ["Te piden pagar para conseguir el trabajo", "Contratación equitativa de la OIT: los trabajadores no deben pagar tarifas de contratación"] },
            { title: "Otras señales de alerta", bullets: ["Sin entrevista, sueldo muy alto por un trabajo fácil", "Solo WhatsApp o un correo gratis, presión para decidir hoy", "Quieren tu pasaporte, tus originales o tus datos bancarios"] },
            { title: "Comprueba antes de postularte", bullets: ["Busca tú mismo el sitio web real de la empresa", "Comprueba la licencia de la agencia con tu gobierno", "Reglas de visas: solo páginas oficiales del gobierno o de la embajada"] },
            { title: "Protégete", bullets: ["Quédate con tu pasaporte y tus documentos originales", "Envía copias solo después de una oferta real", "Detente y denuncia: policía, ministerio de trabajo, embajada"] }
          ],
          sources: [
            { name: "Organización Internacional del Trabajo (OIT): contratación equitativa", url: "https://www.ilo.org/topics-and-sectors/fair-recruitment" },
            { name: "Comisión Federal de Comercio de EE. UU. (FTC): estafas de empleo", url: "https://consumer.ftc.gov/articles/job-scams" }
          ],
          tryIt: "Tarea final: toma tu CV adaptado y la oferta de empleo. Completa esta lista de control en papel: ¿Hay alguna tarifa? ¿Encontré yo mismo el sitio web real de la empresa? ¿El reclutador tiene licencia (para trabajos en el extranjero)? ¿Me quedo con mi pasaporte y mis originales? ¿Mi CV está libre de números de identificación, de pasaporte y de banco? Envía tu CV solo si todas las respuestas son seguras.",
          youCanNow: "revisar un trabajo y a un reclutador en busca de señales de estafa y enviar con seguridad un CV honesto y adaptado.",
          quickCheck: [
            { objective: "O6", q: "Un reclutador te ofrece un trabajo en un hotel de otro país y primero te pide una \"tarifa de trámites\". ¿Qué es esto?", options: ["Algo normal en todo trabajo en el extranjero", "Una señal de que la empresa es buena", "Una señal de alerta; los empleadores honestos no te cobran por darte un trabajo", "Un impuesto que debes pagar"], answer: 2, why: "Pedir a los trabajadores que paguen para conseguir un trabajo es la señal de estafa más grande." },
            { objective: "O6", q: "Un nuevo empleador quiere quedarse con tu pasaporte \"por seguridad\" antes de que viajes. ¿Qué haces?", options: ["Te quedas con tu pasaporte y compruebas la oferta en fuentes oficiales", "Envías el original por correo", "Se lo das; es normal", "Publicas una foto de él en internet"], answer: 0, why: "Quedarte con tu pasaporte te protege; quitarles el pasaporte a los trabajadores es una señal de trabajo forzoso y de trata de personas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Adaptar el CV al trabajo y protegerte",
        questions: [
          { objective: "O4", q: "¿Por qué agregar una explicación sencilla después de un certificado local como el WAEC?", options: ["Para que el CV sea más largo", "Para que un empleador de otro país entienda qué es", "Porque la ley lo exige en todas partes", "Para esconder tus notas"], answer: 1, why: "Una explicación corta ayuda a un empleador extranjero a entender un certificado que tal vez no conoce." },
          { objective: "O4", q: "Un empleador en el extranjero pide una evaluación oficial de tu título. ¿Cuál es tu primer paso?", options: ["Pagar en el primer sitio web que veas", "Hacer tu propio certificado", "Dejar pasar el trabajo", "Preguntar al empleador o a la oficina oficial qué evaluación aceptan"], answer: 3, why: "Cada empleador y cada país acepta evaluaciones distintas; compruébalo antes de pagar." },
          { objective: "O5", q: "¿Qué es un sistema de seguimiento de candidatos (ATS)?", options: ["Una plantilla de CV gratis", "Un tipo de pasaporte", "Un programa que reúne los CV y busca palabras clave en ellos", "Un reclutador que cobra tarifas"], answer: 2, why: "Muchos empleadores usan un ATS para ordenar los CV según sus palabras clave." },
          { objective: "O5", q: "¿Cuál es el mejor nombre de archivo para tu CV?", options: ["Mohamed-Ali-CV-Electricista.pdf", "document1.docx", "cv final final nuevo.pdf", "IMG_2045.jpg"], answer: 0, why: "Un nombre claro con tu nombre y el trabajo es fácil de encontrar para el empleador." },
          { objective: "O6", q: "Un mensaje de trabajo promete un sueldo muy alto, sin entrevista, y te pide decidir hoy. ¿Qué haces?", options: ["Aceptas rápido", "Envías tus datos bancarios", "Lo tomas como una señal de alerta y compruebas tú mismo la empresa", "Envías tu pasaporte"], answer: 2, why: "Sueldo alto, sin entrevista y con presión son señales comunes de estafa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo escribir un CV para trabajos en todo el mundo",
    questions: [
      { objective: "O1", q: "¿Qué es un CV?", options: ["Un documento corto que muestra a un empleador tus habilidades, tu trabajo y tus estudios", "Una visa de trabajo", "Un formulario del banco", "Una carta de tu escuela"], answer: 0, why: "Un CV resume tus habilidades, tu trabajo y tus estudios para un empleador." },
      { objective: "O1", q: "Para la mayoría de los trabajos, ¿cuál es una extensión máxima segura para un CV?", options: ["Diez páginas", "Dos páginas", "Media línea", "Cinco páginas"], answer: 1, why: "Dos páginas es un máximo seguro para casi todos los trabajos; los CV largos son para puestos académicos." },
      { objective: "O1", q: "Te postulas a una empresa de EE. UU. ¿Qué dato sueles dejar fuera?", options: ["Tus habilidades", "Tu historial de trabajo", "Tu correo electrónico", "Tu foto"], answer: 3, why: "Los empleadores de EE. UU. normalmente no quieren foto, edad ni estado civil." },
      { objective: "O1", q: "Un empleador de Egipto pide una foto en la oferta. ¿Qué haces?", options: ["Envías una foto de una fiesta", "No te postulas", "Agregas una foto sencilla y profesional de la cabeza y los hombros", "Envías una copia de tu pasaporte"], answer: 2, why: "Sigue las instrucciones de la oferta con una foto sencilla y profesional." },
      { objective: "O2", q: "¿Qué debe decir el perfil de la parte de arriba de tu CV?", options: ["La historia completa de tu familia", "Qué eres, tus mejores habilidades, un resultado y el trabajo que buscas", "Tu número de pasaporte", "Tu sueldo en cada trabajo"], answer: 1, why: "El perfil le dice a un reclutador en segundos quién eres y qué buscas." },
      { objective: "O2", q: "¿Por qué agregar el código de país a tu número de teléfono?", options: ["Para que un empleador en el extranjero pueda llamarte", "Es una contraseña", "Hace el CV más largo", "Para esconder tu número"], answer: 0, why: "Sin el código de país, alguien que llama desde otro país no puede comunicarse contigo." },
      { objective: "O2", q: "Quieres un trabajo de auxiliar de enfermería y también uno en un hotel. ¿Qué haces con tu perfil?", options: ["No pones perfil", "Usas un solo perfil para los dos", "No mencionas ninguno de los dos trabajos", "Escribes un perfil distinto para cada trabajo"], answer: 3, why: "Cada perfil debe apuntar a un solo tipo de trabajo." },
      { objective: "O3", q: "¿Qué palabra es un verbo de acción para empezar una línea del CV?", options: ["Responsable", "Tareas", "Reparé", "Varios"], answer: 2, why: "Los verbos de acción como reparé, atendí y capacité muestran lo que hiciste." },
      { objective: "O3", q: "¿Cuál es la mejor forma de mostrar un resultado?", options: ["\"Trabajé duro\"", "\"Capacité a 5 cajeros nuevos en 3 meses\"", "\"Estuve en la tienda\"", "\"Hice tareas\""], answer: 1, why: "Un número y un detalle claro muestran el resultado de tu trabajo." },
      { objective: "O3", q: "Ayudaste a llevar la tienda de tu familia durante dos años. ¿Cómo lo pones?", options: ["Lo dejas fuera", "Lo llamas una empresa multinacional", "Escribes solo \"familia\"", "Le das un título claro, el lugar, las fechas y los resultados"], answer: 3, why: "El trabajo familiar e informal es experiencia real cuando lo pones con honestidad y con resultados." },
      { objective: "O3", q: "No estás seguro de un número exacto de tu experiencia. ¿Qué haces?", options: ["Dices \"unos\" o \"aproximadamente\" y te preparas para explicarlo", "Inventas un número más grande", "Le agregas ceros", "Dejas un número que no puedes explicar"], answer: 0, why: "Los cálculos honestos marcados con \"unos\" están bien; los números inventados te pueden costar el trabajo." },
      { objective: "O4", q: "¿Cómo debes presentar un certificado local a un empleador extranjero?", options: ["Solo con su sigla", "Nombre completo, escuela, ciudad, país, año y una nota sencilla", "Solo el año", "No lo pones"], answer: 1, why: "Los datos completos y una nota sencilla permiten que un lector extranjero lo entienda." },
      { objective: "O4", q: "En los niveles de idioma del MCER, ¿cuál es el más avanzado?", options: ["A1", "B1", "A2", "C2"], answer: 3, why: "Los niveles del MCER van de A1 (principiante) a C2 (muy avanzado)." },
      { objective: "O4", q: "¿En qué ayuda la red ENIC-NARIC?", options: ["En el reconocimiento de títulos de otros países", "En reservar vuelos", "En pagar a reclutadores", "En conseguir una visa"], answer: 0, why: "Los centros ENIC-NARIC orientan sobre el reconocimiento de títulos extranjeros." },
      { objective: "O5", q: "¿Qué son las palabras clave de una oferta de empleo?", options: ["Tus contraseñas", "Palabras en otro idioma", "Las habilidades, herramientas, cargos y certificados importantes que busca el empleador", "La dirección de la empresa"], answer: 2, why: "Las palabras clave nombran lo que busca el empleador." },
      { objective: "O5", q: "¿Qué es adaptar el CV con honestidad?", options: ["Copiar toda la oferta en tu CV", "Agregar habilidades que no tienes", "Esconder palabras clave en texto blanco", "Usar las palabras clave verdaderas de la oferta en tu perfil y tu experiencia"], answer: 3, why: "Usa las palabras de la oferta solo donde son verdad para ti." },
      { objective: "O5", q: "Salvo que la oferta pida Word, ¿cómo guardas tu CV?", options: ["Como una foto", "Como PDF", "Como una nota de voz", "Como una hoja de cálculo"], answer: 1, why: "Un PDF se ve igual en cualquier dispositivo." },
      { objective: "O6", q: "¿Cuál es la señal de alerta más grande de un trabajo falso o de un reclutador ilegal?", options: ["Te piden pagar para conseguir el trabajo", "Tienen un sitio web", "Te piden una entrevista", "Te dan una descripción del puesto"], answer: 0, why: "Los empleadores honestos no te cobran por darte un trabajo." },
      { objective: "O6", q: "Para un trabajo en el extranjero por medio de una agencia, ¿qué compruebas?", options: ["Cuántos seguidores tiene", "Si su oficina es grande", "Que la agencia tenga licencia de la oficina de trabajo o de trabajadores migrantes de tu gobierno", "Si promete el sueldo más alto"], answer: 2, why: "Una licencia del gobierno es algo que puedes verificar tú mismo." },
      { objective: "O6", q: "¿Dónde debes leer las reglas de una visa de trabajo?", options: ["En un mensaje de WhatsApp de un reclutador", "En una publicación de redes sociales", "En lo que adivina un amigo", "En el sitio web oficial del gobierno o de la embajada de ese país"], answer: 3, why: "Solo las páginas oficiales del gobierno y de las embajadas dan reglas de visa confiables." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 2, 4, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y revísala otra vez.",
    criteria: [
      { name: "Formato correcto para el país", objective: "O1", notYet: "Más de dos páginas, o datos personales que no corresponden al país o a la oferta, o incluye un número de identificación o de pasaporte.", meets: "Dos páginas o menos; el idioma, la foto y los datos personales siguen la oferta y el país; sin números de identificación, de pasaporte ni de banco.", exceeds: "Puede explicar qué fuente (la oferta, la página del empleador, la costumbre del país) decidió cada elección." },
      { name: "Encabezado y perfil", objective: "O2", notYet: "Faltan datos de contacto, no tiene código de país, el correo no es profesional o no hay perfil.", meets: "Datos de contacto que funcionan con código de país y un perfil de 3 a 4 líneas orientado a este trabajo.", exceeds: "El perfil incluye un resultado claro y el nombre del cargo que aparece en la oferta." },
      { name: "Experiencia como resultados", objective: "O3", notYet: "Las experiencias solo enumeran tareas, o se deja fuera el trabajo informal.", meets: "Al menos tres experiencias, cada una empieza con un verbo de acción e incluye un número o un detalle concreto.", exceeds: "El trabajo informal o no pagado aparece con resultados sólidos, y cada número se puede explicar." },
      { name: "Títulos e idiomas explicados", objective: "O4", notYet: "Los certificados locales aparecen solo como siglas; los idiomas no tienen nivel.", meets: "Cada título tiene su nombre completo, lugar, país y año; cada idioma tiene un nivel.", exceeds: "Indica qué evaluación oficial acepta el empleador, o da un examen de idioma y su año." },
      { name: "Adaptado a la oferta", objective: "O5", notYet: "El CV podría ser para cualquier trabajo, o usa texto en imágenes o palabras clave ocultas.", meets: "Al menos cinco palabras clave verdaderas de la oferta, títulos de sección sencillos, guardado como un PDF con un nombre claro.", exceeds: "El participante puede señalar dónde aparece cada palabra clave y por qué es verdad." },
      { name: "Revisado antes de enviar", objective: "O6", notYet: "No completó la lista de control, o la oferta pide una tarifa o el pasaporte y aun así se postuló.", meets: "Lista de control contra estafas completa: sin tarifa, empresa encontrada por su cuenta, pasaporte y originales en su poder.", exceeds: "Para un trabajo en el extranjero, comprobó la licencia de la agencia con la oficina del gobierno." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan con un CV completo que cumple la rúbrica",
      "Participantes que envían al menos una postulación adaptada en 30 días (encuesta de seguimiento)",
      "Participantes que consiguen una entrevista o una oferta de trabajo en 90 días, según lo que informan al programa",
      "Participantes que dicen haber reconocido y evitado un trabajo falso o un reclutador que cobraba tarifas"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con un procesador de texto gratis (Google Docs, Microsoft Word en línea o LibreOffice Writer), o papel y lápiz para los borradores",
      "Una o dos ofertas de empleo reales que le interesen al participante",
      "Copias de los certificados del participante solo como referencia (nunca se suben a herramientas de práctica ni se comparten en clase)",
      "Unas dos horas en total, en sesiones cortas: lecciones, práctica, comprobaciones y el CV final"
    ],
    facilitatorNotes: [
      "Pide a los participantes que traigan una oferta de empleo real; adaptar el CV funciona mejor con una oferta que de verdad quieren.",
      "Forma parejas para que cada uno lea en voz alta el perfil del otro y le dé una mejora.",
      "Ayuda a quienes tienen trabajo informal a encontrar sus resultados; muchos no valoran su experiencia en el mercado, en el campo o en el negocio familiar.",
      "No des consejos sobre visas, migración ni temas legales; remite a los participantes a las páginas oficiales del gobierno y de las embajadas y a las agencias con licencia.",
      "Revisa cada CV final para que no tenga números de identificación, de pasaporte ni de banco antes de que salga del salón, y califícalo con la rúbrica fila por fila."
    ]
  }
};
