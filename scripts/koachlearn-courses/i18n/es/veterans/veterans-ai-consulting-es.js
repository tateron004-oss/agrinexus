"use strict";

// Koach Learn course (Spanish translation of veterans-ai-consulting). Shape and translation rules: scripts/koachlearn-courses/README.md.
// No legal or tax advice. US agency and program names (SBA, VBOC, VetCert, IRS, VA) stay in English with a short Spanish explanation.

module.exports = {
  id: "veterans-ai-consulting-es",
  lang: "es",
  translationOf: "veterans-ai-consulting",
  category: "Veterans (military)",
  name: "Oportunidades de consultoría con IA",
  skills: "Convertir tu experiencia en una oferta de consultoría, Encontrar ayuda gratuita para negocios de veteranos, Escribir un mensaje de contacto, Escribir una propuesta con IA, Proteger la información del cliente",
  outcome: "convertir tu experiencia militar en una oferta de consultoría clara y escribir una propuesta de una página para un cliente con un asistente de IA, sabiendo dónde conseguir ayuda oficial gratuita para armar el negocio.",
  about: [
    "Un consultor recibe un pago por resolver un problema específico de un cliente. Los veteranos tienen habilidades que les faltan a muchas pequeñas empresas, organizaciones sin fines de lucro y contratistas: planeación, seguridad, logística, capacitación, protección y liderazgo de equipos. Las herramientas de IA ahora ayudan a los consultores a investigar, escribir y entregar más rápido.",
    "En este curso vas a elegir una oferta basada en lo que sabes, aprender dónde consiguen los veteranos ayuda oficial gratuita para negocios, escribir un primer mensaje de contacto y usar un asistente de IA para hacer el borrador de una propuesta de una página. También vas a aprender las reglas que mantienen segura la información del cliente.",
    "Cada lección toma unos cinco minutos. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Este curso no da asesoría legal ni fiscal: para armar el negocio, usa las oficinas oficiales que se nombran aquí o a un profesional calificado."
  ],
  finalTask: "Escribe una propuesta de consultoría de una página para un cliente local inventado o real: el problema, lo que vas a hacer, lo que va a recibir, el calendario, tu precio (fijado por ti, no por la IA) y cómo vas a proteger su información. Haz el borrador con un asistente de IA, luego edítalo para que cada afirmación sea cierta, y anota la oficina oficial gratuita para negocios que vas a contactar después.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veteranos que quieren ganar dinero como consultores usando habilidades como la planeación, la seguridad, la logística, la formación, la protección y el liderazgo de equipos, para pequeñas empresas, organizaciones sin fines de lucro y contratistas.",
    startingPoint: "Tienen un conocimiento profundo y experiencia dando informes breves y escribiendo órdenes, y saben usar una computadora. La mayoría no ha definido una oferta de consultoría, no ha contactado clientes, no ha puesto precio a un trabajo ni ha escrito una propuesta, y pocos han usado la IA para escribir textos de negocios.",
    gap: "El conocimiento solo genera ingresos cuando se le ofrece con claridad a un cliente que lo necesita. Necesitan convertir sus habilidades en una oferta clara, llegar a sus primeros clientes con honestidad, hacer con la IA el borrador de una propuesta a la que ellos mismos ponen precio y revisan, proteger la información del cliente y usar la ayuda oficial gratuita para negocios.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; no se supone experiencia en negocios",
      "Dispositivos: una computadora o un teléfono inteligente con internet y un asistente de IA gratuito",
      "Privacidad: ninguna información confidencial del cliente en herramientas de IA públicas, salvo que el cliente esté de acuerdo y la herramienta esté aprobada; marcadores en la práctica",
      "Honestidad: cada afirmación en los mensajes y las propuestas debe ser cierta; el precio lo pone la persona, no la IA",
      "Las licencias, los impuestos y el registro se consultan con la oficina de negocios del estado, irs.gov o un asesor de un VBOC"
    ],
    prerequisites: "Ninguno. \"IA para la productividad y el liderazgo\" es un buen curso para tomar junto con este."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con ejemplos de trabajos de consultoría", action: "explicar qué hace un consultor y tres formas en que la IA lo ayuda", standard: "nombrando al menos dos problemas de clientes que coinciden con tus habilidades militares" },
    { id: "O2", condition: "Con tu experiencia militar", action: "escribir una oferta de una oración que nombre a quién ayudas, el problema y el resultado", standard: "probada preguntándole al menos a una persona de ese campo" },
    { id: "O3", condition: "Cuando planees tu negocio", action: "identificar la ayuda oficial gratuita para negocios de veteranos cerca de ti y lo que hace cada oficina", standard: "con el contacto del Veterans Business Outreach Center más cercano y una pregunta para hacerle" },
    { id: "O4", condition: "Para tu oferta", action: "escribir un mensaje de contacto corto y honesto que le pida a un posible cliente una llamada de 15 minutos", standard: "con cada afirmación cierta y tres personas a quienes enviarlo" },
    { id: "O5", condition: "Con tu oferta y el problema de un cliente", action: "hacer el borrador de una propuesta de una página con IA y editarla hasta que sea correcta", standard: "con un alcance claro, un calendario y un precio que pones tú" },
    { id: "O6", condition: "Cuando uses la IA en el trabajo para un cliente", action: "escribir reglas que protejan la información del cliente y revisar el trabajo de la IA antes de entregarlo", standard: "con una línea sobre el uso de la IA en la propuesta y ningún dato del cliente en herramientas públicas sin permiso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Armar tu oferta de consultoría",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué hacen los consultores y dónde entra la IA",
          minutes: 4,
          goal: "Explicar qué hace un consultor y tres formas en que la IA lo ayuda.",
          text: [
            "Un consultor es un experto externo que un cliente contrata para un trabajo específico, por un tiempo definido. Ejemplos: armar un programa de seguridad para una constructora, crear un plan de capacitación para los voluntarios de una organización sin fines de lucro o planear la distribución de un almacén.",
            "La IA ayuda a los consultores a investigar un tema rápido, escribir borradores de documentos como propuestas e informes, y convertir notas en listas de verificación o diapositivas. No reemplaza tu experiencia: los clientes pagan por tu criterio.",
            "La consultoría en IA también incluye ayudar a organizaciones pequeñas a empezar a usar herramientas de IA de forma segura, por ejemplo escribiendo una política sencilla de uso de la IA o capacitando al personal. Tus hábitos militares de procedimientos estándar y capacitación clara se transfieren bien."
          ],
          words: [["Consultor", "un experto externo al que se le paga por resolver un problema específico de un cliente."], ["Cliente", "la persona u organización que paga por tu servicio."], ["Entregable", "lo que entregas al final, como un plan, un informe o una capacitación."]],
          slides: [
            { title: "Un consultor es...", bullets: ["Un experto externo", "Contratado para un trabajo específico, por un tiempo definido", "Se le paga por su criterio y sus resultados"] },
            { title: "Cómo ayuda la IA", bullets: ["Investigación rápida", "Borradores de propuestas e informes", "Convertir notas en listas o diapositivas"] },
            { title: "Trabajo de consultoría en IA", bullets: ["Ayudar a grupos pequeños a usar la IA con seguridad", "Escribir políticas sencillas de uso de la IA", "Capacitar al personal"] }
          ],
          tryIt: "Pregúntale a un asistente de IA: \"¿Para qué problemas suelen contratar consultores las pequeñas empresas cerca de mí?\" Encierra en un círculo dos que coincidan con lo que hacías en el servicio militar.",
          youCanNow: "explicar qué hace un consultor y cómo la IA apoya el trabajo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un entregable?", options: ["Lo que entregas al final, como un plan o un informe", "El pago del cliente", "Tu tarjeta de presentación", "La primera llamada"], answer: 0, why: "Un entregable es el trabajo terminado que recibe el cliente." },
            { objective: "O1", q: "La IA te da una lista de problemas por los que las pequeñas empresas contratan consultores. ¿Qué haces?", options: ["Ofrecer arreglarlos todos", "Ignorar la lista", "Marcar los que coinciden con lo que hiciste en el servicio militar", "Elegir el que paga más, aunque no tengas la habilidad"], answer: 2, why: "Tu oferta debe relacionar problemas reales con las habilidades que ya tienes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Convertir tu experiencia en una oferta",
          minutes: 5,
          goal: "Escribir una oferta de una oración: a quién ayudas, el problema y el resultado.",
          text: [
            "Una oferta clara tiene tres partes: a quién ayudas, qué problema resuelves y qué resultado obtienen. Por ejemplo: \"Ayudo a pequeñas constructoras a armar un programa de seguridad por escrito para que pasen las inspecciones y bajen los accidentes.\"",
            "Empieza por lo que hacías seguido y bien en el servicio, y luego busca grupos civiles con el mismo problema. Un exsuboficial de logística podría ayudar a pequeños distribuidores a planear su inventario. Un exinstructor podría ayudar a organizaciones sin fines de lucro a integrar a sus voluntarios.",
            "Usa un asistente de IA para generar ideas y luego pon a prueba la oferta preguntándoles a dos o tres personas reales de ese campo: \"¿Pagarías por resolver este problema?\""
          ],
          steps: ["Haz una lista de tres cosas que hacías seguido y bien en el servicio.", "Pregúntale a un asistente de IA: \"¿Qué negocios civiles tienen este problema?\"", "Escribe: \"Ayudo a [quién] a [resolver qué] para que [resultado].\"", "Pregúntales a dos o tres personas de ese campo si pagarían por eso."],
          words: [["Oferta", "una frase clara de a quién ayudas, con qué y el resultado."], ["Nicho", "un grupo pequeño y específico de clientes en el que te enfocas."]],
          slides: [
            { title: "Tres partes de una oferta", bullets: ["A quién ayudas", "El problema que resuelves", "El resultado que obtienen"] },
            { title: "Empieza por tu servicio", bullets: ["Lo que hacías seguido y bien", "¿Qué civiles tienen el mismo problema?"] },
            { title: "Ponla a prueba con personas reales", bullets: ["\"¿Pagarías por resolver este problema?\"", "Pregúntales a dos o tres personas del campo"] }
          ],
          tryIt: "Escribe tu oferta de una oración usando \"Ayudo a [quién] a [resolver qué] para que [resultado].\" Pídele a un asistente de IA que la haga más clara y luego léesela a una persona de ese campo.",
          youCanNow: "escribir una oferta de consultoría clara basada en tu experiencia militar.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un nicho?", options: ["Todos los clientes posibles", "Un tipo de contrato", "Un programa gratuito del gobierno", "Un grupo pequeño y específico de clientes en el que te enfocas"], answer: 3, why: "Un nicho es el grupo específico al que sirves, y eso hace clara tu oferta." },
            { objective: "O2", q: "Escribiste \"Ayudo a las empresas con cosas\". ¿Qué haces?", options: ["Usarla tal como está", "Reescribirla como \"Ayudo a [quién] a [resolver qué] para que [resultado]\"", "Hacerla más larga con más palabras de moda", "Quitar el resultado"], answer: 1, why: "Una oferta clara nombra a quién ayudas, el problema y el resultado." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ayuda oficial gratuita para dueños de negocios veteranos",
          minutes: 5,
          goal: "Encontrar la ayuda gratuita para negocios de veteranos cerca de ti y saber qué hace cada oficina.",
          text: [
            "La Small Business Administration (SBA, la Administración de Pequeñas Empresas de EE. UU.) maneja Boots to Business, que es parte del Transition Assistance Program militar, y Boots to Business Reboot para veteranos de todas las épocas. Los Veterans Business Outreach Centers (VBOC, centros de apoyo a negocios de veteranos) ofrecen talleres de plan de negocio, mentoría y capacitación.",
            "Si quieres contratos con el gobierno, la SBA certifica a las pequeñas empresas propiedad de veteranos y de veteranos con discapacidad relacionada con el servicio a través de su programa Veteran Small Business Certification, llamado VetCert, en certifications.sba.gov. Cuando revisamos en octubre de 2026, el VA (el Departamento de Asuntos de Veteranos) decía que las empresas que trabajan con el VA deben estar registradas a través de la SBA.",
            "El VA también presenta la formación en emprendimiento como una forma de usar algunos beneficios del GI Bill. Los nombres de negocio, las licencias y los impuestos los fijan tu estado y el IRS (la agencia de impuestos de EE. UU.), así que revisa la oficina de negocios de tu estado e irs.gov, o pregúntale a un asesor de un VBOC."
          ],
          steps: ["Abre la página de negocios de veteranos de la SBA.", "Encuentra el Veterans Business Outreach Center más cercano.", "Mira las fechas de Boots to Business o de Reboot.", "Si quieres trabajo con el gobierno, lee sobre VetCert en certifications.sba.gov.", "Revisa la oficina de negocios de tu estado para licencias y registro."],
          words: [["SBA", "Small Business Administration, la agencia federal que ayuda a las pequeñas empresas."], ["VBOC", "Veterans Business Outreach Center: centros financiados por la SBA que ayudan a los dueños de negocios veteranos."], ["VetCert", "la certificación de la SBA para pequeñas empresas propiedad de veteranos y de veteranos con discapacidad relacionada con el servicio."]],
          slides: [
            { title: "Ayuda gratuita de la SBA para veteranos", bullets: ["Boots to Business (parte de TAP)", "Boots to Business Reboot, cualquier época", "Veterans Business Outreach Centers"] },
            { title: "Contratos con el gobierno", bullets: ["VetCert en certifications.sba.gov", "Para negocios de veteranos y de veteranos con discapacidad", "Trabajar con el VA requiere registro en la SBA"] },
            { title: "Reglas para armar el negocio", bullets: ["Nombres, licencias e impuestos: tu estado y el IRS", "Pregúntale a un asesor de un VBOC", "Nada de asesoría legal o fiscal solo de la IA"] }
          ],
          sources: [
            { name: "SBA: negocios propiedad de veteranos", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "SBA: asistencia de contratación para veteranos (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "VA: apoyo a pequeñas empresas propiedad de veteranos", url: "https://www.va.gov/careers-employment/veteran-owned-business-support/" },
            { name: "VA: cómo usar tus beneficios del GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" }
          ],
          tryIt: "Encuentra en sba.gov el Veterans Business Outreach Center más cercano. Anota su nombre, cómo contactarlo y una pregunta que le harás sobre empezar un negocio de consultoría.",
          youCanNow: "encontrar ayuda oficial gratuita para empezar un negocio de consultoría propiedad de un veterano.",
          quickCheck: [
            { objective: "O3", q: "¿Qué ofrece un Veterans Business Outreach Center?", options: ["Préstamos sin papeleo", "Anuncios pagados para tu negocio", "Ayuda gratuita con el plan de negocio y mentoría para veteranos", "Un primer cliente garantizado"], answer: 2, why: "Los VBOC dan a los veteranos ayuda gratuita para planear su negocio y mentoría." },
            { objective: "O3", q: "Tienes una pregunta sobre la licencia que necesita tu negocio. ¿Adónde la llevas?", options: ["A la oficina de negocios de tu estado, a irs.gov o a un asesor de un VBOC", "Solo a un asistente de IA", "A un grupo de redes sociales", "A un competidor"], answer: 0, why: "Las preguntas de licencias e impuestos van a oficinas o asesores oficiales, no a la IA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Armar tu oferta de consultoría",
        questions: [
          { objective: "O1", q: "¿Qué es un consultor?", options: ["Un inspector del gobierno", "Un empleado de tiempo completo de por vida", "Un experto externo al que se le paga por resolver un problema específico", "Un vendedor de un solo producto"], answer: 2, why: "A los consultores se les contrata para un trabajo y un tiempo específicos." },
          { objective: "O1", q: "¿Por qué le pagan principalmente los clientes a un consultor?", options: ["Por su criterio y sus resultados", "Por su suscripción de IA", "Por su uniforme", "Por su velocidad para escribir"], answer: 0, why: "La IA ayuda, pero los clientes pagan por la experiencia." },
          { objective: "O2", q: "¿Cuál es una oferta clara?", options: ["\"Llámame.\"", "\"Hago cosas.\"", "\"Soy veterano.\"", "\"Ayudo a pequeñas constructoras a armar un programa de seguridad para que pasen las inspecciones.\""], answer: 3, why: "Dice a quién, el problema y el resultado." },
          { objective: "O2", q: "¿Cómo pones a prueba si tu oferta es real?", options: ["Preguntándole solo a la IA", "Preguntándoles a personas del campo si pagarían por resolver el problema", "Adivinando", "Imprimiendo primero tarjetas de presentación"], answer: 1, why: "Los compradores reales te dicen si vale la pena pagar por el problema." },
          { objective: "O3", q: "¿Dónde pueden los veteranos conseguir ayuda gratuita con el plan de negocio y mentoría?", options: ["En una agencia de autos", "En un Veterans Business Outreach Center", "En un anuncio de redes sociales", "En un grupo de criptomonedas"], answer: 1, why: "Los VBOC son centros financiados por la SBA para dueños veteranos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ganar clientes y hacer el trabajo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escribir tu primer mensaje de contacto",
          minutes: 5,
          goal: "Escribir un mensaje corto y honesto que le pida a un posible cliente una llamada de 15 minutos.",
          text: [
            "Tus primeros clientes muchas veces vienen de personas que ya te conocen: antiguos jefes, grupos de veteranos, grupos de negocios locales y organizaciones sin fines de lucro donde eres voluntario.",
            "Un buen mensaje de contacto es corto: quién eres, el problema con el que ayudas, una prueba (un resultado del servicio o de un trabajo anterior) y una petición pequeña, como una llamada de 15 minutos.",
            "La IA puede hacer el borrador, pero haz que suene como tú y quita todo lo que no sea cierto. Nunca digas que tienes una certificación, una autorización de seguridad o un resultado que no tienes."
          ],
          steps: ["Haz una lista de diez personas o grupos que te conocen o que comparten tu campo.", "Pídele a un asistente de IA un mensaje de 5 oraciones: quién eres, el problema, una prueba, una llamada de 15 minutos.", "Edítalo para que suene como tú.", "Revisa que cada afirmación sea cierta.", "Envíaselo a tres personas."],
          words: [["Contacto", "comunicarte con posibles clientes para empezar una conversación."], ["Prueba", "un resultado real que muestra que puedes hacer el trabajo."]],
          slides: [
            { title: "Empieza con quienes te conocen", bullets: ["Antiguos jefes y grupos de veteranos", "Grupos de negocios locales", "Organizaciones donde eres voluntario"] },
            { title: "Un mensaje corto", bullets: ["Quién eres y el problema que resuelves", "Una prueba real", "Una petición pequeña: una llamada de 15 minutos"] },
            { title: "Que sea honesto", bullets: ["Que suene como tú", "Nada que no puedas respaldar"] }
          ],
          tryIt: "Pídele a un asistente de IA el borrador de un mensaje de contacto de cinco oraciones para tu oferta. Edítalo para que suene como tú y cada afirmación sea cierta, y luego escribe los nombres de tres personas a las que se lo vas a enviar.",
          youCanNow: "escribir un mensaje de contacto honesto que le pida a un posible cliente una llamada corta.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es una buena petición pequeña en un mensaje de contacto?", options: ["Firmar hoy un contrato de un año", "Una llamada de 15 minutos", "Pagar un depósito ahora", "Compartir sus registros financieros"], answer: 1, why: "Una petición pequeña y fácil, como una llamada corta, hace más probable un primer sí." },
            { objective: "O4", q: "El borrador de la IA dice que tienes \"20 años de experiencia en consultoría\". No tienes ninguno. ¿Qué haces?", options: ["Dejarlo; suena bien", "Cambiarlo a 10 años", "Enviarlo a más personas", "Quitarlo y decir tu experiencia militar real"], answer: 3, why: "Cada afirmación debe ser cierta; tu experiencia real es tu prueba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escribir una propuesta con IA",
          minutes: 6,
          goal: "Hacer el borrador de una propuesta de una página con IA y editarla hasta que sea correcta.",
          text: [
            "Una propuesta es tu plan para el problema del cliente. Funciona como una orden de operaciones: situación (el problema), misión (lo que vas a hacer), ejecución (pasos y calendario) y lo que recibe el cliente (los entregables).",
            "Dale a la IA tus notas de la llamada con el cliente, sin datos privados del cliente, y pídele una propuesta de una página con esos títulos. Luego edítala a fondo: quita lo que sea vago, corrige las fechas y deja claro el alcance para que el trabajo no siga creciendo.",
            "Tú pones el precio, no la IA. Piensa en tus horas, tus costos y lo que el resultado vale para el cliente. Pregúntale a un asesor de un VBOC o a otros consultores de tu campo qué es lo normal."
          ],
          steps: ["Escribe tus notas de la conversación con el cliente (sin datos privados).", "Pídele a un asistente de IA una propuesta de una página: problema, lo que haré, calendario, entregables, precio.", "Haz que el alcance sea específico: qué incluye y qué no.", "Agrega tu propio precio.", "Léela como si fueras el cliente: ¿hay algo que no esté claro?"],
          words: [["Propuesta", "un plan escrito con precio para resolver el problema de un cliente."], ["Alcance", "exactamente qué trabajo está incluido y cuál no."], ["Crecimiento del alcance", "cuando un trabajo sigue creciendo más allá de lo acordado."]],
          slides: [
            { title: "Propuesta = orden de operaciones", bullets: ["Situación: el problema", "Misión: lo que vas a hacer", "Ejecución: pasos y calendario", "Entregables: lo que recibe"] },
            { title: "La IA hace el borrador, tú editas", bullets: ["Notas sin datos privados del cliente", "Quita palabras vagas, corrige fechas", "Un alcance claro frena el crecimiento del alcance"] },
            { title: "Tú pones el precio", bullets: ["Tus horas y costos", "Lo que vale el resultado", "Pregúntale a un asesor de un VBOC qué es lo normal"] }
          ],
          tryIt: "Usa tu oferta y un cliente inventado. Pídele a un asistente de IA una propuesta de una página con los cinco títulos, luego edita el alcance y agrega tu propio precio.",
          youCanNow: "hacer y editar una propuesta de consultoría clara de una página con ayuda de la IA.",
          quickCheck: [
            { objective: "O5", q: "¿Qué significa el alcance en una propuesta?", options: ["Exactamente qué trabajo está incluido y cuál no", "La dirección del cliente", "El tipo de letra que usas", "Solo tu tarifa por hora"], answer: 0, why: "El alcance pone límites claros al trabajo, lo que evita que crezca sin control." },
            { objective: "O5", q: "La IA sugiere un precio para tu propuesta. ¿Qué haces?", options: ["Usar el precio de la IA", "No poner precio", "Poner tu propio precio según tus horas, tus costos y el valor", "Pedirle al cliente que elija cualquier precio"], answer: 2, why: "El precio lo pones tú; la IA no conoce tus costos ni tu valor." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Entregar el trabajo y proteger al cliente",
          minutes: 5,
          goal: "Fijar reglas para usar la IA en el trabajo del cliente que protejan su información.",
          text: [
            "Los clientes te confían su información: nombres del personal, dinero, planes y problemas. No pegues la información privada o confidencial de un cliente en una herramienta de IA pública, a menos que el cliente esté de acuerdo y la herramienta esté aprobada para eso.",
            "Revisa todo lo que produzca la IA antes de que lo vea el cliente: datos, números, nombres y leyes. Tú eres responsable del trabajo, no la IA.",
            "Sé abierto sobre cómo usas la IA. Una línea sencilla en tu propuesta funciona: \"Uso herramientas de IA para hacer borradores de documentos; reviso todo el trabajo y no comparto tu información privada con ellas.\""
          ],
          steps: ["Deja los datos privados del cliente fuera de las herramientas de IA públicas.", "Usa marcadores como [nombre del cliente] al hacer borradores.", "Revisa cada dato, número y ley antes de entregar.", "Agrega una línea a tu propuesta sobre cómo usas la IA."],
          words: [["Confidencial", "información que el cliente quiere mantener privada."], ["Herramienta aprobada", "una herramienta de IA que el cliente aceptó que uses con su información."]],
          slides: [
            { title: "Protege la información del cliente", bullets: ["Nada de datos privados del cliente en herramientas de IA públicas", "Usa marcadores como [nombre del cliente]"] },
            { title: "El trabajo es tuyo", bullets: ["Revisa datos, números, nombres y leyes", "La IA no es la responsable; tú sí"] },
            { title: "Sé abierto sobre la IA", bullets: ["Di en la propuesta cómo la usas", "\"Reviso todo el trabajo y protejo tus datos\""] }
          ],
          tryIt: "Tarea final: termina tu propuesta de una página. Agrega tu línea sobre el uso de la IA, revisa que cada afirmación sea cierta y escribe el nombre de la oficina oficial gratuita para negocios que vas a contactar después.",
          youCanNow: "ofrecer consultoría basada en tu experiencia militar, escribir una propuesta con IA y proteger la información de tu cliente.",
          quickCheck: [
            { objective: "O6", q: "¿Para qué sirve un marcador como [nombre del cliente]?", options: ["Para esconder tu propio nombre", "Para hacer más larga la propuesta", "Para enviar la propuesta de forma automática", "Para hacer borradores con IA sin compartir datos privados"], answer: 3, why: "Los marcadores mantienen los datos del cliente fuera de la IA mientras haces el borrador." },
            { objective: "O6", q: "Un cliente te envía planes confidenciales y quieres ayuda de la IA. ¿Qué haces primero?", options: ["Pegarlos en cualquier IA pública", "Revisar que el cliente esté de acuerdo y que la herramienta esté aprobada para eso", "Publicarlos en internet para recibir comentarios", "Compartirlos con otro cliente"], answer: 1, why: "La información confidencial del cliente solo va en una herramienta de IA con su acuerdo y en una herramienta aprobada." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Ganar clientes y hacer el trabajo",
        questions: [
          { objective: "O4", q: "¿De dónde vienen muchas veces los primeros clientes de consultoría?", options: ["De ningún lado", "De anuncios emergentes cualquiera", "Solo de llamadas en frío a desconocidos", "De personas y grupos que ya te conocen"], answer: 3, why: "La confianza de quienes te conocen abre puertas más rápido." },
          { objective: "O4", q: "¿Cuál es una buena petición pequeña en un mensaje de contacto?", options: ["Una llamada de 15 minutos", "Un contrato de un año", "Sus datos bancarios", "Un pago grande por adelantado"], answer: 0, why: "A una llamada corta es fácil decirle que sí." },
          { objective: "O5", q: "¿Quién debe poner tu precio?", options: ["Un sitio web cualquiera", "La IA", "Tú, según tus horas, costos y valor", "Solo el cliente"], answer: 2, why: "Poner precio es una decisión de tu negocio." },
          { objective: "O5", q: "¿Qué es el crecimiento del alcance?", options: ["Una entrega rápida", "Un tipo de IA", "Un formulario legal", "Cuando un trabajo sigue creciendo más allá de lo acordado"], answer: 3, why: "Un alcance claro evita que el trabajo crezca sin pago." },
          { objective: "O6", q: "¿Puedes pegar los planes confidenciales de un cliente en una herramienta de IA pública?", options: ["Sí, si ahorra tiempo", "Siempre", "Solo si el cliente está de acuerdo y la herramienta está aprobada para eso", "Sí, si lo borras después"], answer: 2, why: "La información del cliente necesita su acuerdo y una herramienta aprobada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Oportunidades de consultoría con IA",
    questions: [
      { objective: "O1", q: "Un entregable es:", options: ["Tu auto", "Lo que entregas al final, como un plan o un informe", "Tu número de factura", "La herramienta de IA"], answer: 1, why: "Los entregables son los resultados que recibe el cliente." },
      { objective: "O1", q: "¿Cuál es una forma en que la IA ayuda a los consultores?", options: ["Haciendo borradores de propuestas e informes", "Reemplazando todo el criterio", "Firmando contratos", "Teniendo una autorización de seguridad"], answer: 0, why: "La IA acelera los borradores; tú sigues decidiendo." },
      { objective: "O1", q: "La consultoría en IA puede incluir:", options: ["Vender datos de clientes", "Hackear a la competencia", "Ayudar a un grupo pequeño a escribir una política sencilla de uso de la IA", "Garantizar ganancias"], answer: 2, why: "Adoptar la IA con seguridad es una necesidad real de consultoría." },
      { objective: "O2", q: "Las tres partes de una oferta son:", options: ["A quién ayudas, el problema y el resultado", "Logotipo, color y tipo de letra", "Rango, unidad y base", "Precio, impuestos y cargos"], answer: 0, why: "Estas hacen la oferta clara para un comprador." },
      { objective: "O2", q: "Un nicho es:", options: ["Una app de IA", "Un tipo de impuesto", "Una insignia militar", "Un grupo pequeño y específico de clientes en el que te enfocas"], answer: 3, why: "Enfocarte hace tu oferta más fácil de vender." },
      { objective: "O2", q: "Un exinstructor podría ofrecer:", options: ["Pilotear aviones sin licencia", "Ayudar a organizaciones sin fines de lucro a integrar a sus voluntarios", "Dar asesoría legal", "Vender criptomonedas"], answer: 1, why: "Las habilidades de capacitación se transfieren directo." },
      { objective: "O3", q: "Boots to Business lo maneja:", options: ["Un banco privado", "La SBA, como parte del Transition Assistance Program", "Una red social", "El IRS"], answer: 1, why: "La SBA lo maneja dentro de TAP." },
      { objective: "O3", q: "Boots to Business Reboot es para:", options: ["Solo estudiantes", "Solo oficiales en servicio activo", "Solo civiles", "Veteranos de todas las épocas, incluidos la Guardia y la Reserva"], answer: 3, why: "La SBA dice que Reboot atiende a veteranos de todas las épocas." },
      { objective: "O3", q: "VetCert es:", options: ["La certificación de la SBA para pequeñas empresas propiedad de veteranos y de veteranos con discapacidad relacionada con el servicio", "Un formulario de impuestos", "Una bolsa de trabajo", "Un pago del GI Bill"], answer: 0, why: "La SBA maneja VetCert para la contratación con el gobierno." },
      { objective: "O3", q: "¿Dónde solicitas VetCert?", options: ["En cualquier chat de IA", "En un enlace de un mensaje de texto", "En certifications.sba.gov", "En una página de redes sociales"], answer: 2, why: "El sitio de certificaciones de la SBA recibe las solicitudes." },
      { objective: "O3", q: "Las preguntas sobre licencias e impuestos de un negocio es mejor llevarlas a:", options: ["Nadie", "Solo un chat de IA", "Un foro cualquiera", "La oficina de negocios de tu estado, irs.gov o un asesor de un VBOC"], answer: 3, why: "Las oficinas oficiales y los asesores dan las reglas actuales." },
      { objective: "O4", q: "Un buen mensaje de contacto incluye:", options: ["Tu número de Seguro Social", "Toda la historia de tu vida", "Quién eres, el problema, una prueba y una petición pequeña", "Una exigencia de pago"], answer: 2, why: "Lo corto y específico consigue respuestas." },
      { objective: "O4", q: "Un borrador de la IA dice que tienes una certificación que no tienes. Deberías:", options: ["Dejarla", "Quitarla", "Agregar dos más", "Pedirle al cliente que no lo revise"], answer: 1, why: "Cada afirmación debe ser cierta." },
      { objective: "O5", q: "¿A qué documento militar se parece una propuesta?", options: ["A una orden de operaciones", "A una solicitud de permiso", "A una inspección de uniforme", "A un recibo de pago"], answer: 0, why: "Las dos presentan la situación, la misión y la ejecución." },
      { objective: "O5", q: "El alcance en una propuesta significa:", options: ["Solo el precio", "La mira de un rifle", "Exactamente qué trabajo está incluido y cuál no", "La dirección del cliente"], answer: 2, why: "Un alcance claro evita disputas." },
      { objective: "O5", q: "Al pedirle a la IA el borrador de una propuesta, dale:", options: ["Tus notas sin datos privados del cliente", "Los datos bancarios del cliente", "Las direcciones de las casas del personal", "Contraseñas"], answer: 0, why: "Deja fuera los datos privados del cliente." },
      { objective: "O6", q: "¿Quién es responsable de los errores en el trabajo para un cliente hecho con ayuda de la IA?", options: ["El cliente", "La empresa de IA", "Nadie", "Tú"], answer: 3, why: "Tú entregas el trabajo, así que es tuyo." },
      { objective: "O6", q: "¿Qué debes revisar antes de entregar un trabajo hecho con ayuda de la IA?", options: ["Solo el tipo de letra", "Datos, números, nombres y leyes", "Nada", "Solo la ortografía"], answer: 1, why: "La IA se puede equivocar con los datos." },
      { objective: "O6", q: "¿Cómo debes contarles a los clientes sobre el uso de la IA?", options: ["Ocultarlo", "Con una línea clara en la propuesta sobre cómo la usas y cómo proteges sus datos", "Decir que la IA lo hizo todo", "Nunca mencionarlo"], answer: 1, why: "Ser abierto genera confianza." },
      { objective: "O6", q: "Un marcador como [nombre del cliente] te ayuda a:", options: ["Conseguir una certificación", "Cobrar más rápido", "Saltarte la propuesta", "Hacer borradores con IA sin compartir datos privados"], answer: 3, why: "Los marcadores dejan los nombres reales fuera de las herramientas de IA." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      6,
      8,
      11,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Problema y oferta",
        objective: "O2",
        notYet: "El problema del cliente o lo que vas a hacer es vago.",
        meets: "Dice el problema del cliente y lo que vas a hacer, de acuerdo con tu oferta.",
        exceeds: "Usa las propias palabras del cliente para describir el problema."
      },
      {
        name: "Alcance, entregables y calendario",
        objective: "O5",
        notYet: "No hay un alcance, unos entregables ni un calendario claros.",
        meets: "Un alcance claro (qué está incluido y qué no), lo que recibe el cliente y un calendario.",
        exceeds: "Dice cómo se van a manejar los cambios al alcance."
      },
      {
        name: "Tu precio",
        objective: "O5",
        notYet: "No hay precio, o se usó tal cual el precio de la IA.",
        meets: "Un precio puesto por la persona.",
        exceeds: "Puede explicar el precio a partir de las horas, los costos y el valor."
      },
      {
        name: "Información del cliente protegida",
        objective: "O6",
        notYet: "No hay una línea sobre el uso de la IA, o se pegaron datos del cliente en una IA pública.",
        meets: "Una línea clara sobre cómo se usa la IA y cómo se protege la información del cliente.",
        exceeds: "Se usaron marcadores en todos los borradores con IA."
      },
      {
        name: "Afirmaciones ciertas y siguiente paso",
        objective: "O3",
        notYet: "Una afirmación no es cierta, o no se nombra ninguna oficina.",
        meets: "Cada afirmación es cierta, y se anota una oficina oficial y gratuita para negocios como el siguiente contacto.",
        exceeds: "Tiene lista una pregunta para esa oficina."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que envían al menos tres mensajes de contacto dentro de 30 días (encuesta de seguimiento)",
      "Personas que se comunican con un VBOC o se unen a Boots to Business dentro de 60 días",
      "Personas que consiguen su primer cliente de consultoría pagado dentro de 6 meses"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora o un teléfono inteligente con internet",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini",
      "El sitio web gratuito sba.gov para encontrar un Veterans Business Outreach Center",
      "Un procesador de textos para la propuesta de una página",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Pide que practiquen su oferta de una oración en voz alta con un compañero y la mejoren una vez.",
      "Usa clientes inventados en clase y exige marcadores para cualquier dato de un cliente.",
      "No sugieras precios; pide a cada persona que explique cómo puso el suyo.",
      "Invita a un asesor de un VBOC o de la SBA a la última sesión para responder preguntas sobre cómo armar el negocio.",
      "Califica la propuesta con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
