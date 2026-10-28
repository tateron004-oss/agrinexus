"use strict";

// Koach Learn course (Spanish translation of veterans/veterans-va-benefits-gi-bill.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-va-benefits-gi-bill-es",
  lang: "es",
  translationOf: "veterans-va-benefits-gi-bill",
  category: "Veterans (military)",
  name: "Beneficios del VA y el GI Bill",
  skills: "Preparar tus documentos, Presentar una reclamación por discapacidad, Solicitar atención médica del VA, Entender el GI Bill, Solicitar beneficios de educación, Obtener ayuda gratis de un VSO acreditado",
  outcome: "hacer y poner en marcha un plan de acción para tus beneficios del VA: reunir tus documentos, solicitar la compensación por discapacidad, la atención médica o el GI Bill de la forma correcta, y obtener ayuda gratis de un representante de veteranos (Veterans Service Officer) acreditado por el VA en lugar de pagarle a alguien para que presente tu solicitud.",
  about: [
    "Este curso es para veteranos, militares que se preparan para dejar el servicio y familiares que los ayudan. Muchos veteranos nunca solicitan los beneficios que se ganaron, o esperan años, porque el proceso parece confuso.",
    "Reunirás los papeles que pide el VA (Department of Veterans Affairs, el Departamento de Asuntos de Veteranos de EE. UU.), aprenderás las formas de presentar una reclamación por discapacidad y de solicitar atención médica, sabrás qué puede pagar el GI Bill y cómo solicitarlo, y encontrarás un representante gratuito acreditado por el VA que te ayude. También aprenderás las señales de alerta de las personas que cobran por presentar reclamaciones.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las reglas, los formularios y los tiempos de trámite del VA cambian, así que confirma los detalles en va.gov o con un representante acreditado antes de presentar tu solicitud."
  ],
  finalTask: "Haz tu plan de acción de beneficios del VA: (1) una lista de tus documentos, empezando por tu DD214; (2) cada beneficio que vas a solicitar (compensación por discapacidad, atención médica, educación) y cómo lo vas a solicitar; (3) si vas a usar el GI Bill, qué programa, qué escuela o capacitación y qué necesitas para ello; (4) el nombre y los datos de contacto de un representante acreditado por el VA o de un VSO que encontraste con la herramienta de búsqueda del VA; (5) tres señales de alerta de alguien a quien no debes pagarle para presentar tu reclamación. Luego da el primer paso en un beneficio.",
  chapters: [
    {
      name: "Capítulo 1: Solicitar beneficios del VA",
      lessons: [
        {
          title: "Prepárate: tus documentos y tu lista de beneficios",
          minutes: 5,
          goal: "Reunir los documentos que pide el VA y hacer una lista de los beneficios que podrías solicitar.",
          text: [
            "Los beneficios del VA son cosas que te ganaste con tu servicio. Algunos comunes son la compensación por discapacidad (pagos mensuales por condiciones causadas o empeoradas por el servicio), la atención médica del VA, los beneficios de educación como el GI Bill (los beneficios de educación para veteranos) y Veteran Readiness and Employment (el programa del VA de preparación para el empleo). Hay otros, como ayuda para préstamos de vivienda, pensión y beneficios funerarios. Cada uno tiene sus propias reglas.",
            "El papel más importante es tu DD214 u otros documentos de separación del servicio. El VA lo usa para confirmar tu servicio. Guarda copias en un lugar seguro. Si no encuentras el tuyo, va.gov explica cómo pedir tus registros militares.",
            "Otras cosas que el VA puede pedirte: tu número de Seguro Social, los datos de tu banco para el depósito directo, tus registros médicos y los nombres de tus médicos, información sobre tu cónyuge y tus dependientes, tus tarjetas de seguro y tus ingresos del año pasado para algunas decisiones de atención médica.",
            "Crea una cuenta de acceso en va.gov para poder solicitar en línea, subir documentos y revisar el estado de tu trámite. Usa solo el sitio oficial. No compartas tu acceso con nadie y nunca escribas tu número de Seguro Social ni tus datos médicos en un chatbot de IA."
          ],
          steps: ["Busca tu DD214 u otros papeles de separación y haz copias.", "Reúne tus registros médicos y una lista de tus médicos.", "Escribe qué beneficios quieres revisar: discapacidad, atención médica, educación, otros.", "Crea una cuenta de acceso en va.gov.", "Guarda todo en una sola carpeta."],
          words: [["DD214", "el documento que muestra tu servicio militar y cómo te separaste del servicio."], ["Compensación por discapacidad", "pagos mensuales, libres de impuestos, por condiciones causadas o empeoradas por el servicio militar."], ["Dependiente", "un cónyuge, hijo u otro familiar que depende de ti."]],
          slides: [
            { title: "Beneficios que te ganaste", bullets: ["Compensación por discapacidad", "Atención médica del VA", "Educación: el GI Bill", "Veteran Readiness and Employment, y más"] },
            { title: "Tu papel más importante", bullets: ["DD214 u otros papeles de separación", "Guarda copias en un lugar seguro", "¿Lo perdiste? va.gov explica cómo pedir tus registros"] },
            { title: "Otras cosas que el VA puede pedir", bullets: ["Registros médicos y médicos", "Datos de tu cónyuge y dependientes", "Datos bancarios para el depósito directo"] },
            { title: "Tu cuenta en va.gov", bullets: ["Solicita, sube documentos y revisa el estado en línea", "Usa solo el sitio oficial", "Nunca compartas tu acceso"] }
          ],
          sources: [{ name: "VA: Cómo presentar una reclamación por discapacidad del VA", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Haz una carpeta (de papel o una carpeta segura en tu propia computadora) y pon en ella, o anota lo que falta: tu DD214, tus registros médicos, una lista de tus médicos y los datos de tus dependientes. Escribe los beneficios que quieres revisar.",
          youCanNow: "reunir los documentos que pide el VA y hacer una lista de los beneficios que podrías solicitar."
        },
        {
          title: "Presentar una reclamación de compensación por discapacidad",
          minutes: 6,
          goal: "Elegir cómo vas a presentar una reclamación por discapacidad y proteger tu fecha de inicio.",
          text: [
            "Puedes presentar una reclamación por discapacidad en línea en va.gov, por correo con el formulario VA Form 21-526EZ, en persona en una oficina regional del VA o con ayuda de un representante acreditado. El VA dice que al empezar el formulario en línea se fija automáticamente tu fecha efectiva.",
            "Tu fecha efectiva importa porque puede decidir desde cuándo empiezan a contar tus pagos. Si empiezas en línea, el VA usará la fecha en que empezaste como fecha de tu reclamación, siempre que termines dentro de 365 días. Si presentas en papel, puedes enviar primero una intención de presentar (intent to file) para reservar una posible fecha efectiva mientras reúnes pruebas.",
            "Las pruebas deciden si una reclamación sale bien o mal. El VA revisa tu DD214 o tus papeles de separación y tus registros de tratamiento durante el servicio. Agrega lo que tengas: registros de médicos privados y declaraciones tuyas o de personas que han visto cómo te afecta la condición. Anota cada condición que creas que está relacionada con tu servicio.",
            "Después de presentarla, el VA puede programarte un examen. Ve al examen. Revisa el estado de tu reclamación en va.gov. El VA publica su tiempo promedio de trámite, que cambia, así que revisa el número actual en va.gov. Si no estás de acuerdo con una decisión, hay formas de pedir una revisión; un representante acreditado puede ayudarte."
          ],
          steps: ["Decide cómo presentarla: en línea, por correo (VA Form 21-526EZ), en persona o con un representante acreditado.", "Si la presentas en línea, empieza el formulario para fijar tu fecha y termínalo dentro de 365 días.", "Si la presentas en papel, piensa en enviar primero una intención de presentar.", "Anota cada condición y reúne tus pruebas.", "Ve a cualquier examen del VA y revisa tu estado en va.gov."],
          words: [["Fecha efectiva", "la fecha que usa el VA para decidir desde cuándo empiezan a contar los pagos de tu beneficio."], ["Intención de presentar (intent to file)", "un aviso al VA de que piensas presentar una reclamación, que puede reservar tu fecha efectiva mientras reúnes pruebas."], ["Pruebas", "registros y declaraciones que apoyan tu reclamación."], ["Conexión con el servicio", "un vínculo entre una condición de salud y tu servicio militar."]],
          slides: [
            { title: "Cuatro formas de presentarla", bullets: ["En línea en va.gov", "Por correo: VA Form 21-526EZ", "En persona en una oficina regional del VA", "Con un representante acreditado"] },
            { title: "Protege tu fecha de inicio", bullets: ["En línea: tu fecha cuenta si terminas en 365 días", "En papel: piensa primero en una intención de presentar"] },
            { title: "Las pruebas ganan reclamaciones", bullets: ["DD214 y registros de tratamiento del servicio", "Registros de médicos privados", "Declaraciones tuyas y de testigos"] },
            { title: "Después de presentarla", bullets: ["Ve a tu examen del VA", "Revisa el estado en va.gov", "¿No estás de acuerdo? Pregunta a un representante acreditado por una revisión"] }
          ],
          sources: [{ name: "VA: Cómo presentar una reclamación por discapacidad del VA", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Escribe cada condición de salud que creas que puede estar relacionada con tu servicio. Junto a cada una, escribe una prueba que tengas o que podrías conseguir. Luego decide de qué forma vas a presentar la reclamación y escríbelo arriba de la hoja.",
          youCanNow: "elegir cómo presentar una reclamación por discapacidad, proteger tu fecha efectiva y reunir pruebas para cada condición."
        },
        {
          title: "Solicitar atención médica del VA",
          minutes: 4,
          goal: "Solicitar atención médica del VA con la información correcta lista.",
          text: [
            "La atención médica del VA es una solicitud aparte de la compensación por discapacidad. Se solicita con el formulario VA Form 10-10EZ, la solicitud de beneficios de salud (Application for Health Benefits).",
            "Puedes solicitarla en línea en va.gov, por teléfono en la línea de beneficios de salud del VA al 877-222-8387 (el VA indica que atiende de lunes a viernes, de 8:00 a.m. a 8:00 p.m., hora del Este), por correo o en persona en un centro médico o clínica del VA. Un representante acreditado también puede ayudarte.",
            "Ten listos: tu DD214 y tu historial de servicio, incluida cualquier exposición tóxica o peligrosa; los números de Seguro Social tuyo, de tu cónyuge y de tus dependientes que califiquen; tus tarjetas de seguro, incluidas Medicare o un plan del trabajo; y los ingresos de tu hogar del año pasado. El VA dice que puedes no incluir tus ingresos, pero puede necesitarlos para decidir tu solicitud.",
            "Ejemplo: un infante de marina que sirvió en el extranjero tiene asma y quiere un médico de atención primaria. Solicita la atención médica en línea la misma semana en que presenta su reclamación por discapacidad, anota su historial de exposición y reserva su primera cita en cuanto queda inscrito."
          ],
          steps: ["Reúne tu DD214, tu historial de exposición, los números de Seguro Social y las tarjetas de seguro.", "Anota los ingresos de tu hogar del año pasado.", "Solicita en línea en va.gov, por teléfono al 877-222-8387, por correo o en persona.", "Espera la decisión del VA y reserva tu primera cita."],
          words: [["VA Form 10-10EZ", "la solicitud de beneficios de salud del VA."], ["Exposición tóxica", "contacto durante el servicio con cosas dañinas como fosas de quema (burn pits), químicos o radiación."]],
          slides: [
            { title: "Una solicitud aparte", bullets: ["La atención médica no es lo mismo que una reclamación por discapacidad", "Formulario: VA Form 10-10EZ"] },
            { title: "Formas de solicitar", bullets: ["En línea en va.gov", "Teléfono: 877-222-8387", "Por correo o en persona en un centro del VA"] },
            { title: "Ten listos", bullets: ["DD214 e historial de exposición", "Números de Seguro Social y tarjetas de seguro", "Ingresos del hogar del año pasado"] }
          ],
          sources: [{ name: "VA: Cómo solicitar atención médica del VA", url: "https://www.va.gov/health-care/how-to-apply/" }],
          tryIt: "Llena una lista de práctica para el 10-10EZ: DD214 (lo tienes o no), historial de exposición, tarjetas de seguro, ingresos del hogar del año pasado. Marca lo que tienes y lo que todavía te falta, y elige cómo vas a solicitar.",
          youCanNow: "solicitar atención médica del VA con la información correcta y conocer las formas de solicitarla."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Solicitar beneficios del VA",
        questions: [
          { q: "¿Qué documento usa el VA para confirmar tu servicio?", options: ["Tu licencia de conducir", "Un talón de pago de un trabajo civil", "Tu DD214 u otros papeles de separación", "Una tarjeta de gimnasio"], answer: 2, why: "El VA revisa tu DD214 o tus documentos de separación." },
          { q: "Empezaste una reclamación por discapacidad en línea, pero necesitas tiempo para conseguir registros. ¿Cuánto tiempo tienes para terminar y conservar tu fecha de inicio?", options: ["365 días", "7 días", "30 días", "No hay fecha de inicio"], answer: 0, why: "El VA dice que la fecha en que empezaste cuenta si terminas dentro de 365 días." },
          { q: "¿Para qué sirve el VA Form 21-526EZ?", options: ["Para solicitar el GI Bill", "Para solicitar atención médica del VA", "Para cambiar tu dirección", "Para solicitar la compensación por discapacidad por correo"], answer: 3, why: "Es la solicitud de compensación por discapacidad." },
          { q: "¿Qué formulario se usa para solicitar atención médica del VA?", options: ["DD214", "VA Form 10-10EZ", "VA Form 22-1990", "Un W-2"], answer: 1, why: "El 10-10EZ es la solicitud de beneficios de salud." },
          { q: "Presentas una reclamación por discapacidad. ¿Qué más debes hacer?", options: ["Ir a cualquier examen del VA que te programen", "Ignorar las cartas del VA", "Pagarle a alguien para que la acelere", "Presentar la misma reclamación muchas veces"], answer: 0, why: "El examen es parte de la decisión; faltar puede perjudicar tu reclamación." }
        ]
      }
    },
    {
      name: "Capítulo 2: El GI Bill y la ayuda gratuita",
      lessons: [
        {
          title: "Entender el GI Bill",
          minutes: 5,
          goal: "Nombrar los principales programas del GI Bill y lo que pueden pagar.",
          text: [
            "El GI Bill ayuda a pagar estudios y capacitación. El programa principal hoy es el Post-9/11 GI Bill (Chapter 33), para personas que sirvieron en servicio activo después del 10 de septiembre de 2001. Puede ayudar a pagar los estudios y cubrir gastos mientras te capacitas para un trabajo.",
            "Otros programas son el Montgomery GI Bill Active Duty (Chapter 30) y el Montgomery GI Bill Selected Reserve (Chapter 1606), para miembros de la Reserva y de la Guardia Nacional. Cuál puedes usar depende de tu servicio.",
            "El GI Bill no es solo para la universidad de cuatro años. El VA menciona usos como títulos universitarios y de posgrado, programas de títulos no universitarios, capacitación en el trabajo y aprendizajes de oficio, exámenes de licencias y certificaciones, entrenamiento de vuelo, estudios en línea y más. El Yellow Ribbon Program puede ayudar a cubrir la matrícula que el Post-9/11 GI Bill no cubre, en las escuelas que participan.",
            "Algunos militares pueden transferir los beneficios Post-9/11 que no usaron a su cónyuge o a sus hijos. Si ya tienes beneficios Post-9/11, revisa cuánto te queda en tu GI Bill Statement of Benefits (tu estado de beneficios) en va.gov."
          ],
          words: [["GI Bill", "beneficios de educación del VA que ayudan a pagar estudios o capacitación."], ["Post-9/11 GI Bill", "el GI Bill para personas que sirvieron en servicio activo después del 10 de septiembre de 2001 (Chapter 33)."], ["Yellow Ribbon Program", "un programa que puede cubrir la matrícula que el Post-9/11 GI Bill no cubre, en las escuelas que participan."], ["Aprendizaje de oficio", "capacitación pagada en el trabajo para un oficio especializado."]],
          slides: [
            { title: "Principales programas del GI Bill", bullets: ["Post-9/11 GI Bill (Chapter 33)", "Montgomery GI Bill Active Duty (Chapter 30)", "Montgomery GI Bill Selected Reserve (Chapter 1606)"] },
            { title: "No es solo la universidad", bullets: ["Títulos y programas no universitarios", "Aprendizajes de oficio y capacitación en el trabajo", "Exámenes de licencias y certificaciones"] },
            { title: "Ayuda extra", bullets: ["Yellow Ribbon: matrícula que el GI Bill no cubre", "Transferencia al cónyuge o a los hijos, para algunos"] },
            { title: "Revisa cuánto te queda", bullets: ["GI Bill Statement of Benefits en va.gov"] }
          ],
          sources: [{ name: "VA: Sobre los beneficios del GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/" }],
          tryIt: "Escribe la carrera que quieres. Luego escribe dos tipos de capacitación que acepte el GI Bill y que podrían llevarte allí, por ejemplo un aprendizaje de electricista y un programa de certificado, o un título y un examen de licencia.",
          youCanNow: "nombrar los principales programas del GI Bill y relacionar una capacitación que acepte el GI Bill con una meta de carrera."
        },
        {
          title: "Solicitar el GI Bill y elegir una escuela",
          minutes: 5,
          goal: "Solicitar los beneficios de educación y comparar escuelas antes de inscribirte.",
          text: [
            "Solicita los beneficios de educación en línea en va.gov. Si lo haces por correo, usa el VA Form 22-1990, la solicitud de beneficios de educación del VA, para el Post-9/11 GI Bill y los programas del Montgomery GI Bill. Los familiares que usan beneficios transferidos usan otro formulario, el VA Form 22-1990e.",
            "Ten listos: tu número de Seguro Social, los datos de tu banco para el depósito directo, tu historial educativo y militar, y los datos básicos de la escuela o del programa de capacitación. El VA dice que no puedes cambiar la solicitud después de enviarla, así que revísala antes.",
            "El VA dice que tarda unos 30 días en promedio en tramitar las solicitudes de educación, pero revisa los tiempos actuales en va.gov. Cuando te aprueban, el VA te envía un Certificate of Eligibility (certificado de elegibilidad). Dale una copia al funcionario certificador de tu escuela, que suele estar en la oficina de servicios para veteranos o militares.",
            "Antes de inscribirte, compara escuelas con la GI Bill Comparison Tool (la herramienta de comparación del GI Bill) en va.gov, y pregúntale a la escuela por los costos, los resultados laborales de sus estudiantes y si participa en Yellow Ribbon. Ten cuidado con las escuelas que te presionan para inscribirte rápido."
          ],
          steps: ["Elige tu programa y tu escuela o capacitación.", "Compáralo con la GI Bill Comparison Tool en va.gov.", "Reúne tu número de Seguro Social, tus datos bancarios y tu historial educativo y militar.", "Solicita en línea, o por correo con el VA Form 22-1990.", "Dale tu Certificate of Eligibility al funcionario certificador de la escuela."],
          words: [["Certificate of Eligibility (COE)", "la carta del VA que muestra qué beneficio de educación tienes y cuánto."], ["Funcionario certificador de la escuela", "la persona de la escuela que le informa al VA que estás inscrito."], ["VA Form 22-1990", "la solicitud de beneficios de educación del VA."]],
          slides: [
            { title: "Cómo solicitar", bullets: ["En línea en va.gov", "Por correo: VA Form 22-1990", "Familiares con beneficios transferidos: 22-1990e"] },
            { title: "Ten listos", bullets: ["Número de Seguro Social y datos bancarios", "Historial educativo y militar", "Datos de la escuela o del programa"] },
            { title: "Después de solicitar", bullets: ["Unos 30 días en promedio; revisa va.gov", "Recibes un Certificate of Eligibility", "Dáselo al funcionario certificador de la escuela"] },
            { title: "Compara antes de inscribirte", bullets: ["GI Bill Comparison Tool en va.gov", "Pregunta por costos, resultados laborales y Yellow Ribbon", "Aléjate si te presionan para firmar rápido"] }
          ],
          sources: [
            { name: "VA: Cómo solicitar el GI Bill y beneficios relacionados", url: "https://www.va.gov/education/how-to-apply/" },
            { name: "VA: GI Bill Comparison Tool", url: "https://www.va.gov/education/gi-bill-comparison-tool/" }
          ],
          tryIt: "Elige dos escuelas o programas de capacitación para tu meta de carrera. Busca cada uno en la GI Bill Comparison Tool en va.gov y escribe dos datos de cada uno y una pregunta que le harías a su oficina de veteranos.",
          youCanNow: "solicitar los beneficios del GI Bill, comparar escuelas antes de inscribirte y usar tu Certificate of Eligibility."
        },
        {
          title: "Obtener ayuda gratis y evitar a quienes cobran por presentar reclamaciones",
          minutes: 5,
          goal: "Encontrar un representante gratuito acreditado por el VA y reconocer a las personas a las que no se debe pagar.",
          text: [
            "No tienes que hacerlo solo. El VA acredita tres tipos de representantes: representantes de una Veterans Service Organization (VSO, organización de servicio a veteranos), abogados y agentes de reclamaciones. El VA dice que los servicios de un representante acreditado de una VSO en tu reclamación son siempre gratuitos. Pueden ayudarte a reunir pruebas, presentar una reclamación, pedir una revisión de una decisión y hablar con el VA por ti. Muchos estados y condados también tienen funcionarios de servicio a veteranos.",
            "Encuentra uno con la herramienta del VA \"Find a VA-accredited representative or VSO\" (buscar un representante acreditado por el VA o una VSO) en va.gov. El VA dice que te asegures de que cualquier persona que te ayude con tu reclamación esté acreditada antes de elegirla.",
            "Los abogados y los agentes de reclamaciones pueden cobrar honorarios, pero el VA dice que solo después de que el VA haya decidido tu reclamación inicial, y solo con un acuerdo de honorarios firmado. Eso significa que cualquiera que te cobre por presentar tu primera reclamación, o que te prometa una calificación más alta a cambio de dinero, es una señal de alerta. Algunas personas no acreditadas, a veces llamadas \"tiburones de reclamaciones\" (claim sharks), piden una parte de tus pagos atrasados futuros, tus datos de acceso o pagos por adelantado.",
            "Nunca le des a nadie tu acceso a va.gov. Si crees que un representante actuó mal o te cobró honorarios injustos, puedes contactar a la Office of General Counsel del VA (la oficina jurídica del VA), y debes actuar rápido en las disputas por honorarios."
          ],
          steps: ["Abre en va.gov la herramienta del VA \"Find a VA-accredited representative or VSO\".", "Busca cerca de ti y elige un representante de una VSO (gratis).", "Confirma que está acreditado antes de compartir cualquier cosa.", "Nunca pagues por presentar una reclamación inicial y nunca compartas tu acceso a va.gov.", "Reporta los problemas a la Office of General Counsel del VA."],
          words: [["VSO", "Veterans Service Organization: un grupo cuyos representantes acreditados ayudan gratis a los veteranos con sus reclamaciones."], ["Acreditado", "aprobado por el VA para ayudar con reclamaciones ante el VA."], ["Tiburón de reclamaciones (claim shark)", "una persona o empresa no acreditada que les cobra a los veteranos por presentar reclamaciones."]],
          slides: [
            { title: "Existe ayuda gratis", bullets: ["Los representantes acreditados de una VSO son siempre gratis", "Reúnen pruebas, presentan la reclamación y hablan con el VA"] },
            { title: "Encuentra uno", bullets: ["Herramienta del VA Find a VA-accredited representative", "Revisa la acreditación antes de elegir"] },
            { title: "Señales de alerta", bullets: ["Cobra por presentar tu primera reclamación", "Promete una calificación más alta a cambio de dinero", "Quiere tu acceso a va.gov o una parte de tus pagos atrasados"] },
            { title: "Protégete", bullets: ["Nunca compartas tu acceso a va.gov", "Reporta problemas a la Office of General Counsel del VA"] }
          ],
          sources: [
            { name: "VA: Preguntas frecuentes sobre representantes acreditados", url: "https://www.va.gov/resources/va-accredited-representative-faqs/" },
            { name: "VA: Buscar un representante acreditado por el VA o una VSO", url: "https://www.va.gov/get-help-from-accredited-representative/find-rep/" }
          ],
          tryIt: "Tarea final: usa la herramienta del VA \"Find a VA-accredited representative or VSO\" para encontrar un representante gratuito cerca de ti y anota su nombre y cómo contactarlo. Luego termina tu plan de acción de beneficios del VA con tu lista de documentos, los beneficios que vas a solicitar y cómo, tu plan del GI Bill si lo tienes, y tres señales de alerta de los tiburones de reclamaciones. Da el primer paso en un beneficio.",
          youCanNow: "encontrar una VSO gratuita y acreditada, reconocer a las personas a las que no se debe pagar para presentar reclamaciones y empezar tu plan de acción de beneficios del VA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: El GI Bill y la ayuda gratuita",
        questions: [
          { q: "¿Para quién es el Post-9/11 GI Bill?", options: ["Para cualquiera que viva en EE. UU.", "Solo para oficiales", "Solo para cónyuges", "Para personas que sirvieron en servicio activo después del 10 de septiembre de 2001"], answer: 3, why: "El VA dice que el Post-9/11 GI Bill es para el servicio activo después del 10 de septiembre de 2001." },
          { q: "¿Cuál de estas cosas puede ayudar a pagar el GI Bill?", options: ["Un préstamo para un auto", "Un aprendizaje de oficio o un examen de licencia", "La renta en la casa de tus padres", "Tu factura de teléfono"], answer: 1, why: "El VA menciona los aprendizajes, la capacitación en el trabajo y los exámenes de licencia entre los usos del GI Bill." },
          { q: "Después de que te aprueban el GI Bill, ¿quién recibe una copia de tu Certificate of Eligibility?", options: ["Un reclutador", "Tu arrendador", "El funcionario certificador de tu escuela", "Nadie"], answer: 2, why: "El funcionario certificador de la escuela lo usa para informar tu inscripción al VA." },
          { q: "¿Cuánto cobra un representante acreditado de una VSO por ayudarte con tu reclamación?", options: ["Nada; siempre es gratis", "Una parte de tus pagos atrasados", "Un pago antes de presentarla", "Un mes de pagos"], answer: 0, why: "El VA dice que los servicios de los representantes acreditados de una VSO son siempre gratuitos." },
          { q: "Una empresa te ofrece presentar tu primera reclamación por discapacidad a cambio del 20% de tus pagos atrasados. ¿Qué es esto?", options: ["Una tarifa normal del VA", "Un programa del VA", "Una señal de alerta; usa en su lugar una VSO acreditada y gratuita", "Algo que exige la ley"], answer: 2, why: "Solo se permiten honorarios después de que el VA decide la reclamación inicial, con un acuerdo firmado, y solo de abogados o agentes acreditados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Beneficios del VA y el GI Bill",
    questions: [
      { q: "¿Qué es la compensación por discapacidad?", options: ["Una tarjeta de regalo de una sola vez", "Pagos mensuales por condiciones causadas o empeoradas por el servicio", "Un préstamo para estudios", "Una oferta de trabajo"], answer: 1, why: "Les paga a los veteranos por condiciones relacionadas con el servicio." },
      { q: "¿Qué debes hacer con tu DD214?", options: ["Guardar copias en un lugar seguro", "Tirarlo después de dejar el servicio", "Publicarlo en internet", "Darle el original a cualquiera que lo pida"], answer: 0, why: "El VA lo usa para confirmar tu servicio, así que guárdalo bien." },
      { q: "¿Dónde debes solicitar en línea los beneficios del VA?", options: ["En cualquier sitio que tenga una bandera", "En un enlace de un mensaje de texto", "En el sitio oficial va.gov", "En una página de redes sociales"], answer: 2, why: "Usa solo el sitio oficial del VA." },
      { q: "¿Qué NUNCA debes escribir en un chatbot de IA?", options: ["\"Explícame qué es una fecha efectiva\"", "\"Ayúdame a hacer una lista de preguntas para mi VSO\"", "\"¿Qué es el GI Bill?\"", "Tu número de Seguro Social o tus datos médicos"], answer: 3, why: "Mantén la información privada fuera de las herramientas de IA." },
      { q: "¿Cuál NO es una de las formas de presentar una reclamación por discapacidad?", options: ["En línea en va.gov", "Por correo con el VA Form 21-526EZ", "En persona en una oficina regional del VA", "Mandándole un mensaje a un desconocido que ofrece ayuda"], answer: 3, why: "Preséntala en línea, por correo, en persona o con un representante acreditado." },
      { q: "Piensas presentar en papel, pero necesitas tiempo para reunir pruebas. ¿Qué puede ayudar a proteger tu fecha efectiva?", options: ["Una intención de presentar", "Esperar unos años", "No presentar nada", "Llamar a un tiburón de reclamaciones"], answer: 0, why: "Una intención de presentar puede reservar una posible fecha efectiva." },
      { q: "¿Cuál es una buena prueba para una reclamación por discapacidad?", options: ["Una suposición sobre lo que quiere el VA", "Registros de tratamiento del servicio y registros médicos", "Una publicación en redes sociales", "La decisión de la reclamación de un amigo"], answer: 1, why: "Los registros y las declaraciones de testigos apoyan tu reclamación." },
      { q: "El VA te programa un examen para tu reclamación. Debes:", options: ["Faltar", "Mandar a otra persona", "Ir", "Pedirle a un tiburón de reclamaciones que vaya"], answer: 2, why: "El examen es parte de la decisión." },
      { q: "¿Qué solicitud se usa para la atención médica del VA?", options: ["VA Form 10-10EZ", "VA Form 22-1990", "VA Form 21-526EZ", "Un DD214"], answer: 0, why: "El 10-10EZ es la solicitud de beneficios de salud." },
      { q: "Al solicitar atención médica del VA, ¿qué debes incluir sobre tu servicio?", options: ["Solo tu rango", "Nada", "Tu base favorita", "Tu historial de servicio, incluida cualquier exposición tóxica o peligrosa"], answer: 3, why: "El VA pide el historial de servicio y las exposiciones." },
      { q: "¿Qué número de teléfono indica el VA para ayudar a solicitar atención médica?", options: ["911", "988", "877-222-8387", "411"], answer: 2, why: "El VA indica el 877-222-8387 para la línea de beneficios de salud." },
      { q: "El Post-9/11 GI Bill también se llama:", options: ["Chapter 1606", "Chapter 33", "Form 10-10EZ", "El DD214"], answer: 1, why: "El Post-9/11 GI Bill es el Chapter 33." },
      { q: "Una veterana quiere ser electricista sin un título de cuatro años. ¿Puede ayudarle el GI Bill?", options: ["No, solo paga la universidad de cuatro años", "Sí, puede ayudar con aprendizajes de oficio y capacitación en el trabajo", "Solo si se muda al extranjero", "Solo para oficiales"], answer: 1, why: "El VA menciona los aprendizajes y la capacitación en el trabajo entre los usos del GI Bill." },
      { q: "El Yellow Ribbon Program puede:", options: ["Pagar tu renta", "Reemplazar tu DD214", "Acelerar las reclamaciones por discapacidad", "Ayudar a cubrir la matrícula que el Post-9/11 GI Bill no cubre, en las escuelas que participan"], answer: 3, why: "Yellow Ribbon ayuda con la matrícula que supera lo que cubre el GI Bill." },
      { q: "Si solicitas el GI Bill por correo, ¿qué formulario usas?", options: ["VA Form 22-1990", "VA Form 10-10EZ", "VA Form 21-526EZ", "Un formulario de impuestos"], answer: 0, why: "El VA Form 22-1990 es la solicitud de beneficios de educación del VA." },
      { q: "Antes de inscribirte en una escuela con el GI Bill, debes:", options: ["Inscribirte el mismo día que llama el reclutador", "No comparar", "Compararla con la GI Bill Comparison Tool y preguntar por los costos y los resultados laborales", "Pagar un depósito antes de leer nada"], answer: 2, why: "Comparar primero protege tus beneficios." },
      { q: "¿Puedes cambiar tu solicitud del GI Bill después de enviarla?", options: ["Sí, en cualquier momento", "Sí, llamando a una escuela", "Solo los fines de semana", "No, así que revísala antes de enviarla"], answer: 3, why: "El VA dice que no puedes hacer cambios después de enviarla." },
      { q: "¿Quiénes están acreditados por el VA para ayudar con reclamaciones?", options: ["Representantes de una VSO, abogados y agentes de reclamaciones", "Cualquier sitio web", "Cualquier persona que haya servido", "Los vendedores de autos"], answer: 0, why: "La Office of General Counsel del VA acredita a estos tres tipos." },
      { q: "¿Cuándo puede cobrar honorarios un abogado o agente de reclamaciones acreditado?", options: ["Antes de presentar tu primera reclamación", "Solo después de que el VA haya decidido tu reclamación inicial y con un acuerdo de honorarios firmado", "Cuando quiera", "Nunca, bajo ninguna regla"], answer: 1, why: "El VA dice que los honorarios solo pueden cobrarse después de la decisión inicial, con un acuerdo firmado." },
      { q: "Alguien que te ayuda con tu reclamación te pide tu acceso a va.gov. Debes:", options: ["Compartirlo para que trabaje más rápido", "Escribírselo en una nota adhesiva", "Negarte; nunca compartas tu acceso", "Cambiarlo por uno más sencillo"], answer: 2, why: "Nunca le des a nadie tu acceso a va.gov." }
    ]
  }
};
