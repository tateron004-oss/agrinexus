"use strict";

// Koach Learn course (Spanish translation of shared/call-center-bpo-careers.js). See scripts/koachlearn-courses/README.md, "Translations".

const BLS_CSR = { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Representantes de servicio al cliente (estudios, capacitación, horarios, ambiente de trabajo)", url: "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm" };
const IBPAP = { name: "IBPAP: IT and Business Process Association Philippines (la asociación de la industria IT-BPM de Filipinas)", url: "https://www.ibpap.org/" };
const FTC_JOBS = { name: "Comisión Federal de Comercio de EE. UU. (FTC): Estafas de empleo", url: "https://consumer.ftc.gov/articles/job-scams" };
const FTC_REPORT = { name: "Comisión Federal de Comercio de EE. UU. (FTC): denunciar una estafa (EE. UU.)", url: "https://reportfraud.ftc.gov/" };
const IOM_IRIS = { name: "OIM IRIS: contratación ética y el principio de que el empleador paga", url: "https://iris.iom.int/" };
const ILO_FAIR = { name: "Organización Internacional del Trabajo (OIT): contratación equitativa", url: "https://www.ilo.org/topics/fair-recruitment" };
const TESDA = { name: "TESDA, Filipinas: Autoridad de Educación Técnica y Desarrollo de Habilidades (capacitación y certificación; TESDA Online Program)", url: "https://www.tesda.gov.ph/" };
const AJIRA = { name: "Kenya News Agency: invitan a los jóvenes a aprovechar el Ajira Digital Program (programa del gobierno para el trabajo en línea)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };

module.exports = {
  id: "call-center-bpo-careers-es",
  lang: "es",
  translationOf: "call-center-bpo-careers",
  category: "Workforce Development",
  name: "Carreras en centros de llamadas y en tercerización (BPO)",
  skills: "Conocer los tipos de trabajo en BPO, Reconocer a los reclutadores falsos, Aprobar las pruebas de contratación, Atender una llamada según la hoja de calidad, Cumplir las métricas del centro de llamadas, Planear los turnos y la carrera",
  outcome: "buscar un trabajo en un centro de llamadas o en tercerización (BPO) con un plan: elegir el tipo de trabajo BPO que te conviene, comprobar que un empleador es real, practicar las pruebas de mecanografía, de voz y de llamada simulada, atender una llamada como lo pide una hoja de evaluación de calidad, explicar las métricas con las que te van a medir y planear tus turnos y tu siguiente ascenso.",
  about: [
    "Los centros de llamadas y las empresas de tercerización (BPO) contratan a muchas personas con diploma de secundaria y buena comunicación, en lugares como Filipinas, India, Kenia, Nigeria, Ghana, Egipto, Marruecos, Senegal, México, Colombia y Estados Unidos. Muchas ofrecen capacitación pagada y algunas permiten trabajar desde casa.",
    "Este curso es para quienes buscan trabajo, jóvenes, personas que cambian de carrera y cualquiera que quiera saber cómo es este trabajo de verdad antes de postularse. Vas a aprender los tipos de trabajo en BPO, cómo reconocer a un reclutador falso, cómo son las pruebas de contratación, cómo se califican las llamadas y cómo se asciende.",
    "El curso te prepara para postularte; no te da un trabajo ni un certificado. Cada empresa hace sus propias pruebas de contratación. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\". Hay una comprobación rápida después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe tu propio plan de 90 días para conseguir trabajo en BPO: el tipo de trabajo BPO que quieres y por qué, tres empleadores reales que comprobaste en sus sitios web oficiales, tu lista para detectar estafas, un calendario de práctica con fechas para mecanografía, lectura en voz alta y llamadas simuladas, una llamada de práctica grabada y calificada con la hoja de calidad de ejemplo, tu plan de turnos o de trabajo desde casa, y un ascenso que quieras lograr en un año.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas de unos 18 años o más que buscan trabajo en África, Asia, América Latina y Estados Unidos: jóvenes que terminaron la escuela, graduados sin trabajo, adultos que cambian de carrera, personas que vuelven a trabajar y personas que hablan un segundo idioma. Muchas tomarán el curso en su propio idioma y se postularán a trabajos en inglés, francés o español.",
    startingPoint: "Pueden mantener una conversación y usar un teléfono; la mayoría sabe usar un poco una computadora. Pocas saben cómo se contrata en BPO, cuáles son las pruebas o cómo se mide el trabajo en un centro de llamadas. Muchas han visto ofertas de trabajo en redes sociales y no saben distinguir las reales de las falsas.",
    gap: "Los trabajos en BPO son un primer empleo formal muy común, pero los postulantes reprueban pruebas que no conocían, pierden dinero con reclutadores falsos que cobran cuotas, o renuncian en los primeros meses porque los turnos y las metas los tomaron por sorpresa. Los participantes necesitan conocer el trabajo, comprobar al empleador, practicar las pruebas y planear el horario.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; traducido a diez idiomas",
      "Dispositivos: muchas veces solo un teléfono; algunas lecciones funcionan mejor en una computadora, pero todas las tareas se pueden hacer en papel",
      "Tiempo: lecciones de 4 a 6 minutos",
      "Las pruebas de contratación, el sueldo, los turnos y las leyes laborales cambian según el país y la empresa; los participantes comprueban al empleador y consultan el ministerio de trabajo de su país",
      "Alto riesgo de estafas: ningún número de identificación real, contraseña ni dato bancario en ninguna tarea de práctica"
    ],
    prerequisites: "Ninguno. \"Excelencia en el servicio al cliente\" e \"IA para carreras de atención al cliente\" son buenos cursos para tomar después o al mismo tiempo; quienes aprenden inglés pueden tomar a la vez \"Inglés para el trabajo (ESL)\"."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con cinco descripciones de trabajos BPO", action: "clasificar cada trabajo como de voz o sin voz y como de entrada o de salida, y nombrar la habilidad principal que necesita", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Con una oferta de trabajo o un mensaje de un reclutador", action: "revisar si el trabajo tiene las señales de alerta de un reclutador falso y decir qué hacer después", standard: "nombrando al menos cuatro señales de alerta y sin pagar nunca una cuota ni entregar documentos originales" },
    { id: "O3", condition: "Usando un guion de práctica y un teléfono o papel", action: "completar una llamada simulada con un cliente que abre, verifica, resuelve, resume y cierra", standard: "obteniendo Cumple en cada fila de la hoja de calidad de ejemplo" },
    { id: "O4", condition: "Con un informe de ejemplo de un agente", action: "explicar qué miden el tiempo medio de atención, la resolución en el primer contacto, la satisfacción del cliente, la puntuación de calidad y el cumplimiento del horario", standard: "con una forma honesta de mejorar cada uno" },
    { id: "O5", condition: "Para el trabajo por turnos o desde casa que quieres", action: "escribir un plan de preparación para el sueño, el transporte, el equipo y los descansos", standard: "con al menos cinco puntos, incluido un respaldo para la electricidad o el internet" },
    { id: "O6", condition: "Usando tus propias metas y sitios web reales de empleadores", action: "escribir un plan de 90 días para conseguir trabajo y un siguiente paso en la carrera BPO", standard: "con fechas, tres empleadores comprobados y una meta de crecimiento" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo entrar a trabajar en BPO",
      lessons: [
        {
          title: "Qué es el trabajo BPO y los tipos de trabajo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Clasificar los trabajos BPO como de voz o sin voz y como de entrada o de salida, y nombrar la habilidad que necesita cada uno.",
          text: [
            "BPO significa tercerización de procesos de negocio (business process outsourcing): una empresa le paga a otra para que haga parte de su trabajo, como atender a los clientes, procesar formularios o revisar contenido. La empresa que paga es el cliente, y el trabajo para un cliente se llama cuenta o campaña.",
            "Los trabajos de voz son por teléfono. De entrada (inbound) significa que los clientes te llaman (ayuda con una factura, un envío, un plan de teléfono). De salida (outbound) significa que tú los llamas (ventas, encuestas, recordatorios, cobranzas). Los trabajos sin voz son chat, correo electrónico, respuestas en redes sociales, captura de datos, procesos administrativos internos (back office) y moderación de contenido; necesitan más buena escritura y mecanografía que hablar.",
            "El BPO da mucho empleo en muchos países. Filipinas e India atienden a muchos clientes de habla inglesa. Kenia, Nigeria, Ghana, Egipto y Sudáfrica están creciendo. Marruecos, Túnez, Senegal, Costa de Marfil, Madagascar y Mauricio atienden a clientes de habla francesa. México y Colombia atienden a clientes de Estados Unidos y de habla hispana. En Estados Unidos, los centros de llamadas contratan en casi todas las industrias.",
            "El idioma suele ser la habilidad clave. Una cuenta puede necesitar inglés, francés, español, árabe u otro idioma claro, además de paciencia, saber escuchar y conocimientos básicos de computación. Muchos trabajos piden diploma de secundaria, no un título universitario."
          ],
          words: [
            ["BPO", "tercerización de procesos de negocio: una empresa que hace parte del trabajo de otra empresa."],
            ["Cliente y cuenta", "el cliente es la empresa que le paga al BPO; la cuenta (o campaña) es el trabajo para ese cliente."],
            ["De voz y sin voz", "los trabajos de voz son llamadas telefónicas; los trabajos sin voz son chat, correo, datos y procesos internos."],
            ["De entrada y de salida", "de entrada: los clientes te contactan. De salida: tú contactas a los clientes."],
            ["Moderación de contenido", "revisar publicaciones, fotos o videos según las reglas de una plataforma."]
          ],
          slides: [
            { title: "El BPO en una oración", bullets: ["Una empresa le paga a otra para que haga parte de su trabajo", "La empresa que paga es el cliente", "El trabajo para un cliente es la cuenta"] },
            { title: "Trabajos de voz", bullets: ["De entrada: los clientes te llaman para pedir ayuda", "De salida: tú los llamas para ventas, encuestas o recordatorios", "Habilidades clave: hablar claro, escuchar, tener paciencia"] },
            { title: "Trabajos sin voz", bullets: ["Chat, correo electrónico, respuestas en redes sociales", "Captura de datos, procesos internos, moderación de contenido", "Habilidades clave: escribir, teclear, ser preciso"] },
            { title: "Dónde contrata el BPO", bullets: ["Filipinas, India, Kenia, Nigeria, Ghana, Egipto", "Cuentas en francés: Marruecos, Túnez, Senegal, Costa de Marfil", "Cerca de EE. UU. (nearshore): México, Colombia"] }
          ],
          sources: [IBPAP, BLS_CSR],
          tryIt: "En papel, haz una tabla con cuatro casillas: voz de entrada, voz de salida, chat o correo, procesos internos. Pon en cada casilla un trabajo que hayas visto anunciado, escribe la habilidad principal que necesita y encierra en un círculo la casilla que mejor te queda.",
          youCanNow: "distinguir los trabajos BPO de voz y sin voz, y los de entrada y de salida, y elegir el tipo que va con tus habilidades.",
          quickCheck: [
            { objective: "O1", q: "Los clientes te llaman para resolver problemas con su factura de teléfono. ¿Qué tipo de trabajo es?", options: ["Voz de salida", "Captura de datos en procesos internos", "Voz de entrada", "Moderación de contenido"], answer: 2, why: "Los clientes llaman y el trabajo es por teléfono: voz de entrada." },
            { objective: "O1", q: "¿Qué trabajo necesita más buena escritura y mecanografía que hablar?", options: ["Atención por correo y chat", "Llamadas de ventas de salida", "Atención telefónica de entrada", "Encuestas por teléfono"], answer: 0, why: "El correo y el chat son trabajos sin voz: los clientes leen lo que escribes, así que escribir y teclear es lo más importante." }
          ]
        },
        {
          title: "Cómo reconocer reclutadores falsos y estafas de empleo",
          objectives: ["O2"],
          minutes: 5,
          goal: "Revisar una oferta de trabajo o el mensaje de un reclutador en busca de señales de estafa y decidir qué hacer.",
          text: [
            "Los empleadores reales no te cobran por darte un trabajo. Los reclutadores falsos piden una \"cuota de trámite\", \"cuota de capacitación\", \"cuota médica\", \"cuota de uniforme\" o dinero para un \"kit de inicio\" o equipo. La Comisión Federal de Comercio de EE. UU. (FTC, la agencia que protege a los consumidores) dice que un empleador honesto nunca te pedirá que pagues para conseguir un trabajo, y el trabajo internacional por una contratación equitativa de la OIT y la OIM busca que sean los empleadores, no los trabajadores, quienes paguen los costos de contratación.",
            "Otras señales de alerta: mucho dinero por poco trabajo; una entrevista solo por mensajes de WhatsApp o Telegram; un correo gratuito en lugar del correo propio de la empresa; presión para decidir hoy; un cheque que debes depositar para luego devolver una parte; y que te pidan tu pasaporte, tu documento de identidad o tus certificados de estudios para \"guardarlos\". Guarda tú mismo tus documentos originales. Entrega solo copias, y solo a un empleador que hayas comprobado.",
            "Para comprobar a un empleador: busca tú mismo el sitio web oficial de la empresa (no uses el enlace del mensaje), busca el mismo trabajo en su página de empleo y postúlate ahí. Para trabajos en el extranjero, comprueba que la agencia tenga licencia del ministerio de trabajo o de la oficina de trabajadores migrantes de tu país. Si algo está mal, detente, guarda los mensajes y denúncialo a la policía o a la oficina nacional de protección al consumidor o de trabajo (en EE. UU.: reportfraud.ftc.gov)."
          ],
          steps: [
            "Lee la oferta y anota todo lo que pida dinero o documentos originales.",
            "Busca tú mismo el sitio web oficial de la empresa, no desde el enlace del mensaje.",
            "Busca el mismo trabajo en la página oficial de empleo y postúlate ahí.",
            "Para trabajos en el extranjero, comprueba que la agencia de contratación tenga licencia de tu gobierno.",
            "Si algo está mal, detente, guarda capturas de pantalla y denúncialo."
          ],
          words: [
            ["Reclutador", "una persona o agencia que busca trabajadores para un empleador."],
            ["Cuota de contratación", "dinero que se le cobra a un trabajador para darle un trabajo; la contratación equitativa dice que el trabajador no debe pagarlo."],
            ["Página de empleo", "la parte del sitio web propio de una empresa donde publica sus trabajos reales."],
            ["Agencia con licencia", "una agencia de contratación registrada ante el gobierno, que puedes buscar en la lista oficial."]
          ],
          slides: [
            { title: "Los empleadores reales no te cobran", bullets: ["Ninguna cuota de trámite, capacitación, médica o de uniforme para contratarte", "No pagas por un kit de inicio ni por el equipo", "Ningún cheque para depositar y devolver dinero"] },
            { title: "Más señales de alerta", bullets: ["Mucho dinero por poco trabajo", "Entrevista solo por mensajes de WhatsApp o Telegram", "Correo gratuito, presión para decidir hoy"] },
            { title: "Guarda tus documentos", bullets: ["Nunca entregues tu pasaporte, identificación o certificados originales", "Entrega solo copias, a un empleador que comprobaste"] },
            { title: "Comprueba y luego postúlate", bullets: ["Busca tú mismo el sitio web oficial", "Postúlate en la página oficial de empleo", "Trabajos en el extranjero: revisa la licencia de la agencia", "Si algo está mal: detente, guarda pruebas, denuncia"] }
          ],
          sources: [FTC_JOBS, FTC_REPORT, ILO_FAIR, IOM_IRIS],
          tryIt: "Lee este mensaje de práctica: \"¡Felicidades! Te contratamos para un trabajo de centro de llamadas desde casa por 900 dólares a la semana. Envía hoy 50 dólares para materiales de capacitación y una foto de tu documento de identidad por WhatsApp.\" Escribe todas las señales de alerta que encuentres (hay al menos cinco) y lo que harías.",
          youCanNow: "reconocer a un reclutador falso, mantener seguros tus documentos y comprobar un trabajo en el sitio web propio del empleador antes de postularte.",
          quickCheck: [
            { objective: "O2", q: "Un reclutador te dice que conseguiste el trabajo, pero que primero debes pagar una cuota de capacitación. ¿Qué haces?", options: ["La pagas, porque la capacitación es útil", "Pagas la mitad ahora y la mitad después", "Le pides a un amigo que la pague por ti", "Te detienes: los empleadores reales no te cobran por contratarte"], answer: 3, why: "Pedirte que pagues para conseguir un trabajo es una de las señales principales de una estafa." },
            { objective: "O2", q: "Un reclutador para un trabajo en el extranjero te pide quedarse con tu pasaporte. ¿Cuál es la respuesta segura?", options: ["Darle el original para que lo tramite más rápido", "Guardar tu pasaporte original y dar solo una copia a un empleador comprobado", "Enviarlo por correo a la dirección del mensaje", "Dejarlo con un amigo del reclutador"], answer: 1, why: "Guardar tus propios documentos te protege; entregarlos puede atraparte en un trabajo injusto." }
          ]
        },
        {
          title: "Cómo pasar los pasos y las pruebas de contratación",
          objectives: ["O3"],
          minutes: 6,
          goal: "Practicar la mecanografía, la lectura en voz alta y la llamada simulada de un proceso de contratación BPO.",
          text: [
            "Los pasos de contratación cambian según la empresa, pero muchos BPO siguen un camino parecido: una solicitud en línea; una evaluación con preguntas de mecanografía, gramática, lectura o comprensión auditiva; una prueba de voz o de idioma donde lees en voz alta o respondes preguntas grabadas; una entrevista; y una llamada simulada, un juego de roles corto donde un reclutador hace de cliente. Luego vienen la oferta de trabajo, la revisión de antecedentes o documentos y la capacitación pagada.",
            "La prueba de voz revisa que la gente te entienda con facilidad: palabras claras, un ritmo constante, buena gramática y un tono amable. No necesitas cambiar tu acento. Habla con calma, termina bien las palabras y sonríe mientras hablas; la gente lo nota.",
            "Practica gratis en casa. Copia una página de un libro o un periódico en cualquier editor de texto durante cinco minutos y cuenta las palabras. Lee en voz alta una noticia corta, grábala en tu teléfono y escúchala. Haz una llamada simulada con un amigo que haga de cliente. Cuando te contratan, normalmente hay una capacitación en aula sobre los productos del cliente y luego el nesting: tus primeras semanas con llamadas reales y apoyo extra."
          ],
          steps: [
            "Mecanografía: teclea durante 5 minutos copiando una página impresa, cuenta las palabras, divide entre 5 y repite todos los días.",
            "Lectura en voz alta: graba una noticia de 1 minuto, escúchala y corrige las palabras que dijiste rápido o que te comiste.",
            "Comprensión auditiva: pide a un amigo que lea un mensaje corto, escríbelo y revísalo.",
            "Llamada simulada: un amigo hace de cliente con un problema sencillo; tú abres, preguntas, resuelves y cierras."
          ],
          words: [
            ["Evaluación", "una prueba que revisa habilidades como mecanografía, gramática, lectura y comprensión auditiva."],
            ["Palabras por minuto", "cuántas palabras tecleas en un minuto; una forma de medir la velocidad al teclear."],
            ["Llamada simulada", "una llamada de práctica donde alguien hace de cliente; se usa en la contratación y la capacitación."],
            ["Nesting", "las primeras semanas con llamadas reales después de la capacitación, con ayuda extra de un coach."]
          ],
          slides: [
            { title: "Un camino común de contratación en BPO", bullets: ["Solicitud y luego una evaluación en línea", "Prueba de voz o de idioma y luego una entrevista", "Llamada simulada, oferta, revisión de documentos, capacitación pagada"] },
            { title: "La prueba de voz", bullets: ["¿La gente te entiende con facilidad?", "Palabras claras, ritmo constante, buena gramática, tono amable", "No necesitas cambiar tu acento"] },
            { title: "Practica gratis en casa", bullets: ["Teclea 5 minutos al día copiando una página impresa", "Grábate leyendo en voz alta y escúchate", "Llamada simulada con un amigo que hace de cliente"] },
            { title: "Cuando ya te contrataron", bullets: ["Capacitación en aula sobre los productos del cliente", "Nesting: primeras semanas con llamadas reales y un coach"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Haz hoy tres prácticas cortas y anota los resultados: teclea durante 5 minutos y calcula tus palabras por minuto; grábate leyendo una historia de 1 minuto y anota dos palabras que debes decir más claro; y escribe una apertura de 3 líneas que usarías en una llamada simulada.",
          youCanNow: "describir los pasos comunes de contratación en BPO y practicar en casa las pruebas de mecanografía, de voz y de llamada simulada.",
          quickCheck: [
            { objective: "O3", q: "¿Qué revisa principalmente una prueba de voz en BPO?", options: ["Que la gente te entienda con claridad", "Que tengas un acento extranjero", "Que hables lo más rápido posible", "Que sepas los precios del cliente"], answer: 0, why: "La prueba de voz revisa que hables claro, el ritmo, la gramática y el tono, no un acento en particular." },
            { objective: "O3", q: "En 5 minutos tecleas 150 palabras. ¿Más o menos cuál es tu velocidad?", options: ["15 palabras por minuto", "75 palabras por minuto", "150 palabras por minuto", "30 palabras por minuto"], answer: 3, why: "150 palabras entre 5 minutos son 30 palabras por minuto." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo entrar a trabajar en BPO",
        questions: [
          { objective: "O1", q: "Llamas a personas para recordarles facturas sin pagar. ¿Qué tipo de trabajo es?", options: ["Voz de entrada", "Voz de salida", "Atención por chat", "Procesos internos"], answer: 1, why: "Tú haces las llamadas, así que es voz de salida." },
          { objective: "O1", q: "En BPO, ¿quién es el cliente?", options: ["La empresa que le paga al BPO para que haga su trabajo", "El consumidor que llama", "El líder de equipo", "La agencia de contratación"], answer: 0, why: "El cliente le paga al BPO; sus consumidores son las personas a quienes ayudan los agentes." },
          { objective: "O2", q: "¿Qué mensaje tiene más probabilidad de ser una estafa?", options: ["Un correo desde la dirección propia de la empresa que te invita a una prueba en línea", "Un trabajo en la página oficial de empleo de la empresa", "Un mensaje de WhatsApp que ofrece mucho dinero si envías una cuota hoy", "Una entrevista por teléfono programada desde el sitio oficial"], answer: 2, why: "Mucho dinero, contacto solo por WhatsApp, una cuota y presión para hoy son todas señales de alerta." },
          { objective: "O2", q: "¿Cómo debes encontrar las ofertas reales de una empresa?", options: ["Hacer clic en el enlace del mensaje del reclutador", "Buscar tú mismo el sitio web oficial de la empresa y usar su página de empleo", "Pedirle al reclutador una captura de pantalla", "Confiar en cualquier página con el logo de la empresa"], answer: 1, why: "Buscar tú mismo el sitio oficial evita las páginas falsas copiadas con el logo de la empresa." },
          { objective: "O3", q: "¿Qué es una llamada simulada?", options: ["Una llamada real con un cliente enojado", "Una llamada que le haces a tu gerente", "Una canción grabada", "Un juego de roles de práctica donde alguien hace de cliente"], answer: 3, why: "Una llamada simulada es una llamada de práctica que se usa en la contratación y la capacitación." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer el trabajo y ascender",
      lessons: [
        {
          title: "El flujo de la llamada y la hoja de calidad",
          objectives: ["O3"],
          minutes: 6,
          goal: "Atender una llamada de práctica que abre, verifica, resuelve, resume y cierra, y calificarla con una hoja de calidad.",
          text: [
            "Cada cuenta tiene un flujo de llamada: los pasos que sigue el agente en cada llamada. Un flujo común es: abrir (saludar, decir tu nombre y la empresa, ofrecer ayuda); verificar (confirmar quién es el cliente con las preguntas de seguridad de la cuenta); indagar (hacer preguntas para encontrar el problema real); resolver (arreglarlo o explicar el siguiente paso); resumir (repetir lo que se hizo); y cerrar (preguntar si hay algo más y dar las gracias).",
            "Un equipo de aseguramiento de la calidad (QA) escucha las llamadas grabadas y las califica con una hoja de calidad. Las filas suelen incluir la apertura, la verificación, la escucha y la empatía, la información correcta, las notas que escribiste y el cierre. Algunas filas son de cumplimiento: saltarte la verificación o compartir datos privados puede reprobar toda la llamada.",
            "Verifica solo como te enseñan en tu cuenta. Nunca le pidas a un cliente una contraseña completa ni un código de un solo uso que no tenía que dar, y nunca le leas datos privados a alguien que no has verificado. Si no sabes una respuesta, pon al cliente en espera con amabilidad y revisa la base de conocimientos o pregúntale a un líder de equipo."
          ],
          steps: [
            "Abrir: \"Gracias por llamar a [empresa], le atiende [nombre]. ¿En qué puedo ayudarle hoy?\"",
            "Verificar: haz las preguntas de seguridad de la cuenta antes de hablar de la cuenta.",
            "Indagar: haz preguntas abiertas y luego confirma el problema en una oración.",
            "Resolver: arréglalo, o explica el siguiente paso y cuándo va a pasar.",
            "Resumir y cerrar: di lo que se hizo, pregunta si hay algo más y da las gracias."
          ],
          words: [
            ["Flujo de llamada", "los pasos fijos que sigue un agente en cada llamada."],
            ["Verificación", "comprobar que quien llama es el titular de la cuenta antes de hablar de la cuenta."],
            ["QA (aseguramiento de la calidad)", "el equipo que escucha las llamadas y las califica con una hoja de evaluación."],
            ["Cumplimiento", "seguir las reglas de la ley y del cliente, como las reglas de privacidad y de verificación."],
            ["Base de conocimientos", "la biblioteca de la cuenta con respuestas y pasos aprobados."]
          ],
          slides: [
            { title: "Un flujo de llamada común", bullets: ["Abrir, verificar, indagar", "Resolver, resumir, cerrar"] },
            { title: "La hoja de calidad", bullets: ["QA escucha las llamadas grabadas", "Filas: apertura, verificación, empatía, precisión, notas, cierre", "Un error de cumplimiento puede reprobar toda la llamada"] },
            { title: "Protege al cliente", bullets: ["Verifica antes de hablar de la cuenta", "Nunca pidas una contraseña que no necesitas", "¿No estás seguro? Pon en espera y revisa la base de conocimientos"] }
          ],
          tryIt: "Escribe un guion corto para una llamada de práctica: el internet de un cliente lleva dos días lento. Usa los seis pasos. Luego haz la llamada con un amigo o grábate haciendo los dos papeles, y califícala: en cada paso escribe Cumple o Todavía no.",
          youCanNow: "seguir un flujo de llamada desde la apertura hasta el cierre y revisar tu propia llamada con una hoja de calidad.",
          quickCheck: [
            { objective: "O3", q: "Alguien llama para preguntar el saldo de su cuenta. ¿Qué va primero?", options: ["Leerle el saldo de inmediato", "Pedirle su contraseña completa", "Verificar quién es con las preguntas de seguridad de la cuenta", "Transferirlo a otro equipo"], answer: 2, why: "La verificación protege los datos privados del cliente y suele ser una fila de cumplimiento en la hoja." },
            { objective: "O3", q: "¿Qué paso va justo antes del cierre?", options: ["El resumen: decir lo que se hizo", "La apertura", "La verificación", "El saludo"], answer: 0, why: "El resumen confirma lo que se hizo, para que el cliente termine seguro del resultado." }
          ]
        },
        {
          title: "Las métricas, el horario y cómo cuidarte",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Explicar las cinco métricas principales de un centro de llamadas y escribir un plan de preparación para turnos o trabajo desde casa.",
          text: [
            "A los agentes se les mide con números, que muchas veces se llaman KPI. El tiempo medio de atención (AHT) es la duración promedio de un contacto, incluida la espera y las notas después de la llamada. La resolución en el primer contacto (FCR) es qué tan seguido se resuelve el problema en el primer contacto. La satisfacción del cliente (CSAT) sale de encuestas cortas después del contacto. La puntuación de calidad (QA) sale de la hoja de evaluación. El cumplimiento del horario es qué tanto sigues tu horario: entrar a tiempo y tomar los descansos a la hora planeada.",
            "Las métricas se jalan unas a otras. Apurarte baja el tiempo de atención, pero puede bajar el FCR y el CSAT cuando los clientes vuelven a llamar. La forma honesta de mejorar es conocer bien la base de conocimientos, escuchar con atención y escribir buenas notas para que el siguiente agente no empiece de cero.",
            "Muchas cuentas funcionan las 24 horas, así que los turnos pueden ser de noche, en fines de semana y en días festivos, muchas veces según la zona horaria del cliente. Planea tu sueño (cuarto oscuro y tranquilo, las mismas horas cada día), un transporte seguro de noche, las comidas y el agua. Para trabajar desde casa: un lugar tranquilo, audífonos con micrófono (diadema), una conexión suficientemente rápida y un respaldo para la electricidad o el internet, además de las reglas de la empresa sobre privacidad en casa."
          ],
          words: [
            ["KPI", "indicador clave de desempeño: un número que mide qué tan bien se hace el trabajo."],
            ["AHT (tiempo medio de atención)", "la duración promedio de un contacto, incluida la espera y el trabajo después de la llamada."],
            ["FCR (resolución en el primer contacto)", "qué tan seguido se resuelve el problema en la primera llamada o chat."],
            ["CSAT (satisfacción del cliente)", "una puntuación que sale de encuestas cortas a los clientes después de un contacto."],
            ["Cumplimiento del horario", "qué tanto sigue un agente el horario planeado para entrar, tomar descansos y salir."]
          ],
          slides: [
            { title: "Cinco métricas de los agentes", bullets: ["AHT: tiempo medio de atención", "FCR: resuelto en el primer contacto", "CSAT: puntuación de la encuesta al cliente", "Puntuación de calidad y cumplimiento del horario"] },
            { title: "Las métricas se jalan unas a otras", bullets: ["Apurarte baja el AHT, pero puede bajar el FCR y el CSAT", "Conoce la base de conocimientos, escucha, escribe buenas notas"] },
            { title: "Trabajo por turnos", bullets: ["Noches, fines de semana y festivos en la zona horaria del cliente", "Las mismas horas de sueño en un cuarto oscuro y tranquilo", "Planea transporte seguro de noche, comidas y agua"] },
            { title: "Trabajar desde casa", bullets: ["Un lugar tranquilo y audífonos con micrófono", "Internet suficientemente rápido y respaldo de electricidad o datos", "Sigue en casa las reglas de privacidad de la empresa"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Informe de práctica: el AHT de Ama es de 4 minutos (el del equipo es de 6), su FCR es de 55 por ciento (equipo: 75 por ciento) y su CSAT es bajo. En dos oraciones, explica qué está pasando y una solución honesta. Luego escribe tu propio plan de preparación con al menos cinco puntos: sueño, transporte, comidas, equipo y un respaldo de electricidad o internet.",
          youCanNow: "explicar el AHT, el FCR, el CSAT, la puntuación de calidad y el cumplimiento del horario, y planear tu sueño, tu transporte y tu preparación para el trabajo por turnos o desde casa.",
          quickCheck: [
            { objective: "O4", q: "Un agente tiene un tiempo de atención muy corto, pero muchos clientes vuelven a llamar. ¿Qué métrica probablemente está baja?", options: ["Cumplimiento del horario", "Velocidad al teclear", "Número de descansos", "Resolución en el primer contacto"], answer: 3, why: "Que los clientes vuelvan a llamar significa que los problemas no se resolvieron la primera vez, así que el FCR está bajo." },
            { objective: "O5", q: "Trabajas desde casa y en tu zona hay cortes de luz. ¿Qué va en tu plan de preparación?", options: ["Nada; reportarte enfermo cuando se vaya la luz", "Un respaldo de electricidad o internet y avisar pronto a tu líder de equipo", "Trabajar en un café lleno de gente sin pedir permiso", "Usar el altavoz en un cuarto compartido"], answer: 1, why: "Un respaldo y un aviso a tiempo te permiten seguir trabajando y respetar las reglas de la empresa." }
          ]
        },
        {
          title: "Cómo ascender y tu plan de 90 días",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escribir un plan de 90 días para conseguir trabajo y nombrar tu siguiente paso en la carrera BPO.",
          text: [
            "El BPO tiene una escalera. Los agentes pueden llegar a agentes sénior o expertos en la materia (SME), luego a líderes de equipo y luego a gerentes de operaciones. Hay caminos laterales como analista de calidad, capacitador, gestión de la fuerza laboral (planear horarios y personal), reclutamiento, informes y datos, y soporte de TI. Muchas empresas prefieren ascender a personas que ya conocen la cuenta.",
            "Lo que te ayuda a ascender: métricas estables, buena asistencia, ayudar a otros con coaching, un segundo idioma y cursos cortos. Algunos gobiernos ofrecen capacitación: TESDA, en Filipinas, fija estándares y ofrece capacitación y certificación, y el Ajira Digital Program de Kenia promueve el trabajo en línea. Revisa las páginas oficiales para ver qué ofrecen ahora.",
            "Tu plan de 90 días junta todo. Semanas 1 a 2: elige el tipo de trabajo y comprueba tres empleadores en sus sitios web oficiales. Semanas 3 a 8: practica mecanografía, lectura en voz alta y llamadas simuladas en días fijos, y postúlate en las páginas oficiales de empleo. Semanas 9 a 12: sigue postulándote, haz seguimiento con amabilidad y prepárate para la capacitación. Luego escribe un ascenso que quieras lograr en un año."
          ],
          steps: [
            "Escribe el tipo de trabajo que quieres (de voz o sin voz, de entrada o de salida) y por qué.",
            "Comprueba tres empleadores reales en sus sitios web oficiales y anota los enlaces.",
            "Agrega tu lista para detectar estafas de la lección 2.",
            "Pon las fechas de práctica en un calendario: mecanografía, lectura en voz alta, llamadas simuladas.",
            "Escribe tu plan de turnos o de trabajo desde casa de la lección 5.",
            "Nombra un ascenso para el próximo año y una cosa que harás para lograrlo."
          ],
          words: [
            ["SME (experto en la materia)", "un agente con experiencia al que otros agentes le piden ayuda en casos difíciles."],
            ["Líder de equipo", "el supervisor que da coaching a un equipo de agentes y vigila sus métricas."],
            ["Gestión de la fuerza laboral (WFM)", "el equipo que calcula cuántas llamadas habrá y planea los horarios y el personal."],
            ["TESDA", "la agencia del gobierno de Filipinas para la educación técnica y la capacitación en habilidades."]
          ],
          slides: [
            { title: "La escalera del BPO", bullets: ["Agente, agente sénior o SME, líder de equipo, gerente de operaciones", "Caminos laterales: calidad, capacitador, fuerza laboral, reclutamiento, TI"] },
            { title: "Lo que te ayuda a ascender", bullets: ["Métricas estables y buena asistencia", "Ayudar a otros y un segundo idioma", "Cursos cortos y programas oficiales de capacitación"] },
            { title: "Tu plan de 90 días", bullets: ["Semanas 1-2: tipo de trabajo y tres empleadores comprobados", "Semanas 3-8: practica y postúlate en sitios oficiales", "Semanas 9-12: haz seguimiento y prepárate para la capacitación"] }
          ],
          sources: [TESDA, AJIRA, IBPAP],
          tryIt: "Empieza tu plan de 90 días ahora. En papel o en un documento, escribe la fecha de hoy, el tipo de trabajo que quieres, los nombres y las direcciones de los sitios web oficiales de tres empleadores que comprobaste, y las fechas de tus primeras tres sesiones de práctica.",
          youCanNow: "escribir un plan de 90 días con fechas para conseguir trabajo en BPO y nombrar tu siguiente ascenso.",
          quickCheck: [
            { objective: "O6", q: "En muchos BPO, ¿cuál es un ascenso real desde agente?", options: ["Consumidor", "Cliente", "Líder de equipo", "Cuota de contratación"], answer: 2, why: "Los agentes muchas veces pasan a SME, luego a líder de equipo y luego a gerente de operaciones." },
            { objective: "O6", q: "¿De dónde deben salir los empleadores de tu plan?", options: ["De sus sitios web oficiales, que encontraste tú mismo", "De un grupo de WhatsApp que vende listas de trabajos", "De cualquier anuncio que prometa mucho dinero", "De un reclutador que te pide una cuota"], answer: 0, why: "Los sitios web oficiales que encontraste tú mismo son la forma más segura de comprobar que un empleador es real." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer el trabajo y ascender",
        questions: [
          { objective: "O3", q: "En muchas hojas de calidad, ¿qué error puede reprobar toda la llamada?", options: ["Dar las gracias dos veces", "Una pausa corta antes de responder", "Sonreír mientras hablas", "Saltarte la verificación antes de compartir datos de la cuenta"], answer: 3, why: "La verificación es una fila de cumplimiento; saltártela pone en riesgo los datos del cliente." },
          { objective: "O4", q: "¿Qué mide el CSAT?", options: ["Cuánto duró la llamada", "Qué tan satisfechos dicen estar los clientes en una encuesta", "Qué tan seguido entraste a tiempo", "Qué tan rápido tecleas"], answer: 1, why: "El CSAT es la puntuación de satisfacción del cliente que sale de encuestas cortas después de un contacto." },
          { objective: "O4", q: "Siempre regresas del descanso 10 minutos tarde. ¿Qué métrica baja?", options: ["Cumplimiento del horario", "Resolución en el primer contacto", "Velocidad al teclear", "Puntuación de verificación de calidad"], answer: 0, why: "El cumplimiento del horario mide qué tanto sigues tus horas de entrada y de descanso." },
          { objective: "O5", q: "La próxima semana empiezas turnos de noche. ¿Cuál es un buen plan?", options: ["Dormir a horas distintas cada día", "Tomar bebidas energéticas en lugar de dormir", "Las mismas horas de sueño en un cuarto oscuro y tranquilo, y una forma segura de volver a casa", "Caminar solo a casa por calles sin luz"], answer: 2, why: "Dormir con horario fijo en un cuarto oscuro y viajar seguro protegen tu salud y tu seguridad en los turnos de noche." },
          { objective: "O6", q: "¿Qué hace la gestión de la fuerza laboral (WFM)?", options: ["Solo atiende llamadas de clientes", "Calcula cuántas llamadas habrá y planea los horarios y el personal", "Vende productos a los clientes", "Revisa tu pasaporte"], answer: 1, why: "WFM planea cuántos agentes se necesitan y cuándo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Carreras en centros de llamadas y en tercerización (BPO)",
    questions: [
      { objective: "O1", q: "¿Qué significa BPO?", options: ["Tercerización de procesos de negocio (business process outsourcing)", "Operaciones telefónicas básicas", "Oficina de pagos bancarios", "Pedido de productos comerciales"], answer: 0, why: "BPO es la tercerización de procesos de negocio: una empresa que hace parte del trabajo de otra empresa." },
      { objective: "O1", q: "Respondes correos y chats de clientes de una tienda en línea. ¿Qué tipo de trabajo es?", options: ["Voz de salida", "Voz de entrada", "Atención sin voz", "Ventas en campo"], answer: 2, why: "El correo y el chat son trabajo sin voz." },
      { objective: "O1", q: "Una cuenta atiende a clientes de habla francesa. ¿Qué habilidad es la más importante para sus agentes?", options: ["Manejar un auto", "Hablar y escribir francés con claridad", "Escribir rápido a mano", "Conocer muchos modelos de teléfono"], answer: 1, why: "El idioma de la cuenta suele ser la habilidad clave por la que contratan los BPO." },
      { objective: "O2", q: "¿Cuál es una señal de alerta de un trabajo falso?", options: ["Una prueba en línea desde el sitio web propio de la empresa", "Un trabajo publicado en la página oficial de empleo", "Una entrevista programada desde el correo propio de la empresa", "Una cuota que debes pagar antes de empezar"], answer: 3, why: "Los empleadores reales no te cobran por contratarte." },
      { objective: "O2", q: "Un \"reclutador\" te envía un cheque para depositar y te pide que devuelvas una parte para el equipo. ¿Qué es esto?", options: ["Una estafa común con cheques falsos", "Una forma normal de comprar unos audífonos", "Un bono por firmar", "Un apoyo para la capacitación"], answer: 0, why: "Después el cheque rebota y le debes al banco el dinero que enviaste." },
      { objective: "O2", q: "Una agencia te ofrece un trabajo de centro de llamadas en el extranjero. ¿Qué revisas primero?", options: ["Cuántos seguidores tiene en redes sociales", "Si promete mucho dinero", "Si tiene licencia de la oficina de trabajo o de trabajadores migrantes de tu gobierno", "Si quiere tu pasaporte original"], answer: 2, why: "Una agencia con licencia se puede buscar en la lista oficial; las que no tienen licencia son un gran riesgo." },
      { objective: "O3", q: "¿Cuál es la mejor forma de prepararte para una prueba de voz en BPO?", options: ["Intentar copiar otro acento", "Grabarte leyendo en voz alta y corregir las palabras poco claras", "Hablar lo más rápido que puedas", "Memorizar los precios del cliente"], answer: 1, why: "Grabarte y escucharte te ayuda a hablar claro y a un ritmo constante." },
      { objective: "O3", q: "¿Qué es el nesting?", options: ["Tus primeras semanas con llamadas reales y apoyo extra", "Una sala de descanso", "Un tipo de cuota de contratación", "Un bono por turno de noche"], answer: 0, why: "El nesting viene después de la capacitación en aula: llamadas reales con coaching." },
      { objective: "O3", q: "En el flujo de la llamada, ¿qué hace el paso de indagar?", options: ["Da las gracias al cliente", "Termina la llamada", "Pone al cliente en espera", "Hace preguntas para encontrar el problema real"], answer: 3, why: "Indagar encuentra el problema real antes de intentar resolverlo." },
      { objective: "O3", q: "No sabes la respuesta a la pregunta de un cliente. ¿Qué haces?", options: ["Adivinar para que la llamada sea más corta", "Colgar", "Ponerlo en espera con amabilidad y revisar la base de conocimientos o preguntar a un líder de equipo", "Decirle que llame a otra empresa"], answer: 2, why: "Revisar la respuesta aprobada mantiene la información correcta y la llamada profesional." },
      { objective: "O4", q: "¿Qué incluye el AHT?", options: ["Solo el tiempo que hablas", "El tiempo de conversación, el de espera y las notas después de la llamada", "Solo tu tiempo de descanso", "El tiempo entre turnos"], answer: 1, why: "El tiempo medio de atención cuenta todo el contacto, incluida la espera y el trabajo después de la llamada." },
      { objective: "O4", q: "¿Cuál es una forma honesta de subir la resolución en el primer contacto?", options: ["Colgar las llamadas difíciles", "Decirles a los clientes que llamen más tarde", "Marcar llamadas como resueltas cuando no lo están", "Aprender la base de conocimientos y confirmar la solución antes de cerrar"], answer: 3, why: "Saber las respuestas y confirmar la solución resuelve más problemas en el primer contacto." },
      { objective: "O4", q: "¿Quién suele dar la puntuación de calidad (QA)?", options: ["El equipo de calidad, con una hoja de evaluación sobre llamadas grabadas", "El consumidor, en una encuesta", "El abogado del cliente", "La agencia de contratación"], answer: 0, why: "Los analistas de calidad escuchan las llamadas y las califican con la hoja; el CSAT viene de los consumidores." },
      { objective: "O5", q: "¿Por qué muchos trabajos de BPO tienen turnos de noche?", options: ["Las llamadas de noche no pagan impuestos", "Las oficinas son más baratas de noche", "Las cuentas muchas veces siguen la zona horaria del cliente y funcionan las 24 horas", "Los clientes solo llaman de noche"], answer: 2, why: "Muchas cuentas atienden a clientes en otras zonas horarias o funcionan día y noche." },
      { objective: "O5", q: "¿Qué va en un plan de preparación para trabajar desde casa?", options: ["Un cuarto compartido y ruidoso", "Audífonos con micrófono y un respaldo de electricidad o internet", "Un correo personal para los datos de los clientes", "Una televisión prendida durante las llamadas"], answer: 1, why: "Los audífonos y un respaldo mantienen las llamadas claras y te permiten seguir trabajando durante los cortes." },
      { objective: "O5", q: "¿Cuál es el plan más seguro para volver a casa después de un turno tarde?", options: ["Planear un transporte seguro o el transporte de la empresa antes del turno", "Aceptar que te lleve cualquier desconocido", "Caminar solo por calles sin luz", "Decidirlo cuando termine el turno"], answer: 0, why: "Planear con tiempo un transporte seguro te protege de noche." },
      { objective: "O6", q: "¿Cuál es un camino lateral en una carrera de BPO?", options: ["Consumidor", "Cuota de contratación", "Persona que llama", "Analista de aseguramiento de la calidad"], answer: 3, why: "Calidad, capacitación, gestión de la fuerza laboral y reclutamiento son caminos laterales comunes." },
      { objective: "O6", q: "¿Qué va en las semanas 3 a 8 de tu plan de 90 días?", options: ["Nada; esperar a que te llamen", "Pagarle a un reclutador para que te consiga trabajo", "Practicar en días fijos y postularte en las páginas oficiales de empleo", "Darle tu pasaporte a una agencia"], answer: 2, why: "Practicar con constancia y postularte en páginas oficiales es el centro del plan." },
      { objective: "O6", q: "¿Qué ayuda a un agente a ascender a líder de equipo?", options: ["Métricas estables, buena asistencia y ayudar a otros", "Volver tarde de los descansos", "Evitar el coaching", "Cambiar de cuenta cada mes"], answer: 0, why: "Métricas confiables, buena asistencia y ayudar a otros muestran liderazgo." },
      { objective: "O2", q: "Descubres que una oferta de trabajo era falsa después de enviar la foto de tu identificación. ¿Qué haces?", options: ["Enviar más documentos para demostrar quién eres", "Pagar la cuota para que te devuelvan la foto", "Borrar los mensajes y olvidarlo", "Cortar el contacto, guardar capturas de pantalla y denunciarlo a la policía o a la oficina oficial de fraudes"], answer: 3, why: "Guardar pruebas y denunciar te ayuda a protegerte a ti y a otras personas del mal uso de tu identidad." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 6, 10, 13, 16, 8] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Tipo de trabajo elegido", objective: "O1", notYet: "No hay tipo de trabajo, o confunde voz con sin voz.", meets: "Nombra si es de voz o sin voz y de entrada o de salida, con la habilidad principal que necesita.", exceeds: "También explica por qué va con sus propias habilidades e idiomas." },
      { name: "Empleadores comprobados y estafas evitadas", objective: "O2", notYet: "Los empleadores salen de anuncios o mensajes, o el plan incluye pagar una cuota.", meets: "Tres empleadores con enlaces a sus sitios web oficiales y una lista de al menos cuatro señales de estafa.", exceeds: "También anota cómo revisar la licencia de una agencia para trabajos en el extranjero y dónde denunciar una estafa." },
      { name: "Llamada de práctica", objective: "O3", notYet: "La llamada grabada se salta pasos o se salta la verificación.", meets: "Abre, verifica, indaga, resuelve, resume y cierra; Cumple en cada fila de la hoja de calidad.", exceeds: "Nombra una cosa que mejorar y graba un segundo intento mejor." },
      { name: "Conoce las métricas", objective: "O4", notYet: "No puede decir qué miden el AHT, el FCR, el CSAT, la puntuación de calidad y el cumplimiento del horario.", meets: "Explica las cinco, cada una con una forma honesta de mejorarla.", exceeds: "Explica cómo apurarse puede bajar el AHT pero empeorar el FCR y el CSAT." },
      { name: "Plan de preparación", objective: "O5", notYet: "Menos de cinco puntos, o no hay plan de respaldo.", meets: "Al menos cinco puntos: sueño, transporte, comidas, equipo y un respaldo de electricidad o internet.", exceeds: "Agrega las reglas de privacidad del empleador para el trabajo en casa y un plan para avisar pronto al líder de equipo si hay problemas." },
      { name: "Plan de 90 días", objective: "O6", notYet: "No tiene fechas o no nombra un ascenso.", meets: "Pasos de práctica y de postulación con fechas durante 90 días, y un ascenso en un año.", exceeds: "Nombra una habilidad o un curso concreto para el ascenso y cuándo lo va a empezar." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que se postulan a por lo menos tres empleadores BPO comprobados en 30 días (encuesta de seguimiento)",
      "Participantes a quienes invitan a una prueba de contratación o a una entrevista, y a quienes contratan, en 90 días",
      "Participantes que reportan un intento de estafa que reconocieron y no pagaron",
      "Participantes contratados que siguen trabajando después de 90 días (en los primeros meses es cuando mucha gente se va)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet; papel y lápiz para cada tarea",
      "Un teléfono que grabe audio para practicar la lectura en voz alta y las llamadas simuladas",
      "Un compañero para las llamadas simuladas (un amigo, un familiar o un compañero de clase), o el participante haciendo los dos papeles",
      "Una página impresa de un libro o un periódico para practicar mecanografía, y cualquier editor de texto",
      "Unos 70 minutos en total, en sesiones cortas, más la práctica durante el plan de 90 días"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial. Luego hagan un capítulo por sesión, con llamadas simuladas en parejas durante el capítulo 2.",
      "Lleve ofertas de trabajo locales reales, sin los nombres de las empresas, y pida a los participantes que las clasifiquen por tipo de trabajo y busquen señales de estafa.",
      "Si puede, invite a un líder de equipo, reclutador o capacitador de un BPO local para que explique sus pasos reales de contratación; las pruebas cambian según la empresa.",
      "Nunca pida a los participantes que compartan números de identificación, contraseñas o datos bancarios reales en la práctica; usen datos de cuenta inventados.",
      "Para trabajos en el extranjero, muestre a los participantes la lista oficial de agencias de contratación con licencia de su país y dónde denunciar la contratación ilegal.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
