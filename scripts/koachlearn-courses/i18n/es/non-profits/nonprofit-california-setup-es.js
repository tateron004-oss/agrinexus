"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations".

const SOS_ARTICLES = { name: "Secretaría de Estado de California: formularios y tarifas de corporaciones de California (nacionales)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const SOS_SI = { name: "Secretaría de Estado de California: Declaración de Información (SI-100 para organizaciones sin fines de lucro)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-statement-information" };
const BIZFILE = { name: "Secretaría de Estado de California: bizfile Online", url: "https://bizfileonline.sos.ca.gov" };
const IRS_EIN = { name: "IRS: obtener un Número de Identificación del Empleador (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const IRS_FEE = { name: "IRS: monto del cargo por usuario de los Formularios 1023 y 1023-EZ", url: "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee" };
const IRS_1023 = { name: "IRS: acerca del Formulario 1023", url: "https://www.irs.gov/forms-pubs/about-form-1023" };
const IRS_1023EZ = { name: "IRS: acerca del Formulario 1023-EZ (la hoja de requisitos está en las instrucciones)", url: "https://www.irs.gov/forms-pubs/about-form-1023-ez" };
const IRS_990N = { name: "IRS: Formulario 990-N (tarjeta electrónica) para pequeñas organizaciones exentas", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" };
const IRS_CHURCH = { name: "Publicación 1828 del IRS: guía de impuestos para iglesias y organizaciones religiosas", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" };
const FTB = { name: "Junta de Impuestos de California (FTB): organizaciones benéficas y sin fines de lucro (Formulario 3500 / 3500A)", url: "https://www.ftb.ca.gov/file/business/types/charities-and-nonprofits/index.html" };
const AG_INITIAL = { name: "Procuraduría General de California: Registro de Organizaciones Benéficas, registro inicial (CT-1)", url: "https://oag.ca.gov/charities/initial-reg" };
const AG_RENEW = { name: "Procuraduría General de California: Registro de Organizaciones Benéficas, renovación anual (RRF-1)", url: "https://oag.ca.gov/charities/renewals" };

module.exports = {
  id: "nonprofit-california-setup-es",
  lang: "es",
  translationOf: "nonprofit-california-setup",
  category: "Non Profits",
  name: "Crear una organización sin fines de lucro en California, con sus costos",
  skills: "Elegir el tipo correcto de organización sin fines de lucro, Presentar los artículos ante la Secretaría de Estado, Obtener un EIN gratis, Solicitar la exención de impuestos federal y estatal, Registrarse ante el Procurador General, Hacer un presupuesto y un calendario de arranque",
  outcome: "hacer un plan de arranque completo y con fechas para una organización sin fines de lucro de beneficio público en California: cada trámite en el orden correcto, la oficina que lo recibe, el nombre del formulario, la tarifa oficial y los trámites anuales que la mantienen al corriente.",
  about: [
    "Este curso es para personas que empiezan una organización benéfica, un ministerio, un grupo comunitario o un programa en California: fundadores, pastores, miembros de juntas directivas y voluntarios que quieren hacerlo bien desde la primera vez.",
    "Vas a aprender los pasos en orden: elegir el tipo de organización y la junta, presentar los artículos de incorporación ante la Secretaría de Estado, obtener un EIN gratis del IRS (la agencia federal de impuestos), solicitar el estatus 501(c)(3), obtener la exención de impuestos de California ante la Junta de Impuestos (Franchise Tax Board) y registrarte en el Registro de Organizaciones Benéficas del Procurador General. Luego vas a aprender los trámites anuales y a armar un presupuesto de costos.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Cada tarifa de este curso se revisó en la página oficial del gobierno el 27 de octubre de 2026 y se incluye el enlace para que la vuelvas a revisar. Las tarifas cambian, así que confírmalas siempre en la página oficial antes de pagar. Este curso es educativo, no asesoría legal ni de impuestos: para tu caso, habla con un abogado de organizaciones sin fines de lucro, un contador o un centro gratuito de ayuda para organizaciones."
  ],
  finalTask: "Arma un plan de arranque de una página para tu organización (real o de práctica): una tabla con cada trámite en orden, la oficina, el nombre del formulario, la tarifa de la página oficial, la fecha en que piensas presentarlo, y los trámites anuales con sus fechas límite. Agrega el costo total de arranque y el enlace a cada página oficial.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que están empezando una organización benéfica, un ministerio, un grupo comunitario o un programa en California: fundadores, pastores, miembros de la junta y voluntarios que quieren hacerlo bien desde la primera vez.",
    startingPoint: "Tienen una misión y muchas veces ya un grupo de personas que ayudan. La mayoría nunca ha presentado trámites ante la Secretaría de Estado, el IRS, la Franchise Tax Board o el Procurador General, y no conoce el orden ni los costos.",
    gap: "Los fundadores hacen los trámites en el orden equivocado, les pagan a sitios web por servicios que son gratis o se les pasan los trámites de cada año y pierden la exención de impuestos. Necesitan un plan con fechas que tenga cada trámite, oficina, formulario, tarifa oficial y fecha límite anual, para que la organización empiece bien y se mantenga al corriente.",
    constraints: [
      "Las tarifas y los formularios cambian; cada tarifa se revisa en la página oficial antes de presentar",
      "No es asesoría legal ni fiscal: si hay dudas, se pregunta a un abogado de organizaciones sin fines de lucro, a un centro de ayuda o a un profesional",
      "Privacidad: los números de Seguro Social o ITIN van solo en el sitio oficial del IRS, nunca en herramientas de IA ni en un correo",
      "Las iglesias y los grupos religiosos tienen reglas especiales que hay que revisar",
      "Palabras sencillas para quienes fundan por primera vez; unos 60 minutos en total"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con los pasos para empezar una organización benéfica en California", action: "enumerar en orden los trámites principales de inicio y la oficina que lleva cada uno", standard: "con cada trámite en el orden correcto" },
    { id: "O2", condition: "Con el propósito de tu organización", action: "elegir el formulario correcto de artículos de constitución y planear la Declaración de Información", standard: "con el lugar de presentación y las fechas límite correctos" },
    { id: "O3", condition: "Después de presentar tus artículos", action: "obtener un EIN gratis en irs.gov y planear la primera reunión de la junta", standard: "escribiendo los números privados solo en el sitio oficial del IRS y con cada decisión de la primera reunión en la lista" },
    { id: "O4", condition: "Usando la hoja de requisitos del IRS", action: "elegir entre el Formulario 1023 y el Formulario 1023-EZ y decir dónde se presenta", standard: "con la tarifa tomada de la página oficial" },
    { id: "O5", condition: "Después de la aprobación federal o de tu primer donativo", action: "planear la exención de la Franchise Tax Board y el registro en el Registro de Organizaciones Benéficas del Procurador General", standard: "con el formulario correcto y el plazo de 30 días del Registro" },
    { id: "O6", condition: "Con las tarifas y fechas límite ya revisadas", action: "crear un presupuesto de inicio y un calendario anual de trámites", standard: "con cada tarifa y cada fecha límite revisadas en la página oficial" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Formar la corporación",
      lessons: [
        {
          objectives: ["O1"],
          title: "El mapa: lo que necesita una organización en California",
          minutes: 5,
          goal: "Hacer una lista de los trámites principales de arranque en el orden correcto y la oficina que maneja cada uno.",
          text: [
            "En California, una organización benéfica normalmente se convierte en una corporación sin fines de lucro de beneficio público. Ser una corporación sin fines de lucro es un asunto del estado. Estar exenta de impuestos es un paso aparte: una vez con el IRS (federal) y otra con la Junta de Impuestos de California, la Franchise Tax Board (estatal). Las organizaciones que recaudan fondos también se registran con el Procurador General.",
            "El orden normal es: 1) elegir el propósito, el nombre y la primera junta; 2) presentar los artículos de incorporación ante la Secretaría de Estado; 3) obtener un EIN del IRS; 4) aprobar los estatutos y hacer la primera reunión de la junta; 5) presentar la Declaración de Información; 6) solicitar el estatus federal 501(c)(3); 7) solicitar la exención de California ante la Franchise Tax Board; 8) registrarse en el Registro de Organizaciones Benéficas del Procurador General.",
            "Hacerlos en orden importa. Por ejemplo, el IRS les dice a las corporaciones que se registren con el estado antes de pedir un EIN, y el Procurador General pide tus artículos y estatutos cuando te registras."
          ],
          steps: ["Escribe tu misión en una o dos frases.", "Escoge a tres o más personas para tu primera junta, si puedes.", "Escribe los ocho pasos en orden en una página.", "Al lado de cada paso, escribe la oficina: Secretaría de Estado, IRS, Franchise Tax Board o Procurador General."],
          words: [["Corporación sin fines de lucro de beneficio público", "el tipo de corporación de California que usan la mayoría de las organizaciones benéficas; sirve al público, no a dueños."], ["501(c)(3)", "la sección del código federal de impuestos para organizaciones benéficas; las donaciones a ellas normalmente pueden deducirse de impuestos."], ["Exento de impuestos", "que no tiene que pagar impuesto sobre la renta, después de que una agencia lo aprueba."]],
          slides: [
            { title: "Cuatro oficinas con las que vas a tratar", bullets: ["Secretaría de Estado: crea la corporación", "IRS: EIN y estatus federal 501(c)(3)", "Franchise Tax Board: exención de impuestos de California", "Procurador General: Registro de Organizaciones Benéficas"] },
            { title: "El orden, parte 1", bullets: ["1. Misión, nombre, primera junta", "2. Artículos de incorporación (Secretaría de Estado)", "3. EIN (IRS, gratis)", "4. Estatutos y primera reunión de la junta"] },
            { title: "El orden, parte 2", bullets: ["5. Declaración de Información (Secretaría de Estado)", "6. Solicitud 501(c)(3) (IRS)", "7. Formulario 3500 o 3500A (Franchise Tax Board)", "8. Registro ante el Procurador General (CT-1)"] },
            { title: "Dos tipos de estatus", bullets: ["Corporación sin fines de lucro: un asunto del estado", "Exenta de impuestos: una aprobación federal y estatal aparte"] }
          ],
          sources: [SOS_ARTICLES, IRS_EIN, FTB, AG_INITIAL],
          tryIt: "Escribe la misión de tu organización en una o dos frases. Luego escribe los ocho pasos de arranque en orden y la oficina de cada uno. Guarda esta página: se convierte en tu plan de arranque final.",
          youCanNow: "hacer una lista en orden de los trámites de arranque de una organización sin fines de lucro en California y nombrar la oficina que maneja cada uno.",
          quickCheck: [
            { objective: "O1", q: "¿Qué oficina lleva la exención de impuestos de California?", options: ["La Franchise Tax Board", "La Secretaría de Estado", "El Procurador General", "El concejo de la ciudad"], answer: 0, why: "La exención de impuestos se tramita con el IRS (federal) y con la Franchise Tax Board (estatal)." },
            { objective: "O1", q: "Un fundador quiere pedir un EIN antes de presentar los artículos. ¿Qué le dices?", options: ["Cualquier orden está bien", "Primero presenta los artículos en la Secretaría de Estado, como el IRS les indica a las corporaciones", "Sáltate los artículos", "Primero regístrate con el Procurador General"], answer: 1, why: "El IRS les indica a las corporaciones que se registren con el estado antes de pedir un EIN." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Presentar los artículos de incorporación",
          minutes: 5,
          goal: "Elegir el formulario correcto de artículos y presentarlo ante la Secretaría de Estado.",
          text: [
            "Los artículos de incorporación crean tu corporación. La Secretaría de Estado de California tiene tres versiones para organizaciones sin fines de lucro: Formulario ARTS-PB (beneficio público), Formulario ARTS-RE (religiosa) y Formulario ARTS-MU (beneficio mutuo). La tarifa de presentación de cada uno era de $30 cuando la revisamos.",
            "La mayoría de las organizaciones benéficas usan beneficio público. Una iglesia o un ministerio puede usar el formulario religioso. Beneficio mutuo es para grupos que sirven a sus propios miembros, como algunos clubes, y no le queda a la mayoría de las organizaciones benéficas. Si piensas pedir el estatus 501(c)(3), el IRS necesita ciertas palabras en tus artículos sobre tu propósito y qué pasa con tus bienes si cierras. Lee las instrucciones del formulario y pide a un abogado de organizaciones sin fines de lucro o a un centro de ayuda que lo revise.",
            "Puedes presentarlo en línea en bizfile Online (bizfileonline.sos.ca.gov), por correo o en persona. Primero busca el nombre para asegurarte de que esté libre. En un plazo de 90 días también presentas una Declaración de Información (Formulario SI-100, $20), y luego cada dos años."
          ],
          steps: ["Busca tu nombre en bizfile Online.", "Elige el formulario: ARTS-PB para la mayoría de las organizaciones benéficas, ARTS-RE para grupos religiosos.", "Llénalo con tu nombre, tu propósito y tu agente para recibir notificaciones legales.", "Preséntalo en línea y paga la tarifa que muestra la página oficial.", "Pon la Declaración de Información (SI-100) en tu calendario: en 90 días, y luego cada dos años."],
          words: [["Artículos de incorporación", "el documento corto que crea legalmente tu corporación."], ["Agente para recibir notificaciones legales", "la persona o empresa que acepta recibir documentos legales para la organización."], ["Declaración de Información", "un formulario que le dice al estado tu dirección y tus directivos; las organizaciones sin fines de lucro presentan el SI-100."]],
          slides: [
            { title: "Tres formularios de artículos", bullets: ["ARTS-PB: beneficio público (la mayoría de las benéficas)", "ARTS-RE: religiosa", "ARTS-MU: beneficio mutuo (sirve a sus miembros)"] },
            { title: "Tarifas al revisarlas (27 oct 2026)", bullets: ["Artículos: $30", "Declaración de Información SI-100: $20", "Confirma siempre en sos.ca.gov antes de pagar"] },
            { title: "Cómo presentarlos", bullets: ["Busca primero el nombre", "Preséntalos en línea en bizfileonline.sos.ca.gov", "O por correo o en persona"] },
            { title: "No lo olvides", bullets: ["SI-100 en los 90 días después de presentar", "Luego cada dos años", "Lenguaje para 501(c)(3): que alguien revise los artículos"] }
          ],
          sources: [SOS_ARTICLES, SOS_SI, BIZFILE],
          tryIt: "Abre la página de formularios de la Secretaría de Estado. Busca el formulario de artículos que le queda a tu grupo y anota su nombre y la tarifa actual. Luego busca la tarifa del SI-100 y agrega las dos a tu plan con una fecha límite para el SI-100.",
          youCanNow: "elegir el formulario de artículos correcto, encontrar su tarifa en la página oficial y programar tu Declaración de Información.",
          quickCheck: [
            { objective: "O2", q: "¿Qué formulario de artículos no le queda a la mayoría de las organizaciones benéficas?", options: ["ARTS-PB", "ARTS-RE", "ARTS-MU (beneficio mutuo)", "Ninguno les queda"], answer: 2, why: "Beneficio mutuo es para grupos que sirven a sus propios miembros y no le queda a la mayoría de las organizaciones benéficas." },
            { objective: "O2", q: "Quieres llamar a tu organización \"Cocina Esperanza\". ¿Qué haces antes de presentar?", options: ["Presentas de inmediato", "Le preguntas a la IA si el nombre está libre", "Le pagas a un sitio web para apartarlo", "Primero buscas el nombre para asegurarte de que está libre"], answer: 3, why: "Primero busca el nombre para asegurarte de que está libre." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Obtener tu EIN, los estatutos y la primera reunión de la junta",
          minutes: 5,
          goal: "Obtener un EIN gratis con seguridad y preparar la primera reunión de la junta.",
          text: [
            "Un EIN (Número de Identificación del Empleador) es el número federal de identificación fiscal de la organización. Lo necesitas para una cuenta de banco, para la nómina y para tus solicitudes de exención de impuestos. El IRS dice que nunca tienes que pagar por un EIN. Algunos sitios web cobran por sacarlo: evítalos y solicítalo en irs.gov.",
            "La herramienta en línea del IRS pide el número de Seguro Social o el ITIN de la persona responsable, y hay que terminarla de una sola vez. Escribe esos números privados solo en el sitio oficial del IRS, nunca en una herramienta de IA, un correo o un sitio web cualquiera. Imprime o guarda la carta de confirmación.",
            "Los estatutos son tus reglas: cuántos directores hay, cómo se eligen, cómo funcionan las reuniones y quién firma los cheques. En la primera reunión, la junta aprueba los estatutos, elige a los directivos, aprueba abrir una cuenta de banco y aprueba una política de conflicto de intereses. Escriban el acta y guárdenla."
          ],
          steps: ["Espera a que la Secretaría de Estado haya registrado tus artículos.", "Ve a irs.gov y solicita el EIN con la herramienta en línea gratis.", "Guarda la carta de confirmación del EIN en tu carpeta de registros.", "Escribe el borrador de los estatutos y de una política de conflicto de intereses.", "Haz la primera reunión de la junta y escribe el acta."],
          words: [["EIN", "Número de Identificación del Empleador: el número federal de identificación fiscal de una organización, gratis."], ["Estatutos", "las reglas escritas de cómo funcionan la organización y su junta."], ["Acta", "el registro escrito de lo que decidió la junta en una reunión."], ["Política de conflicto de intereses", "reglas sobre lo que debe hacer un miembro de la junta cuando una decisión podría beneficiarlo personalmente."]],
          slides: [
            { title: "Tu EIN", bullets: ["El número federal de identificación fiscal de la organización", "Gratis en irs.gov: nunca le pagues a un sitio web", "Se necesita para el banco y los formularios de exención"] },
            { title: "Los números privados son privados", bullets: ["El Seguro Social o ITIN solo va en el sitio oficial del IRS", "Nunca en herramientas de IA, correos u otros sitios", "Guarda la carta de confirmación"] },
            { title: "Primera reunión de la junta", bullets: ["Aprobar los estatutos", "Elegir a los directivos", "Aprobar una cuenta de banco", "Aprobar una política de conflicto de intereses"] }
          ],
          sources: [IRS_EIN],
          tryIt: "Haz el orden del día de la primera reunión con cinco puntos: aprobar los estatutos, elegir a los directivos, aprobar la cuenta de banco, aprobar la política de conflicto de intereses y fijar la fecha de la siguiente reunión. Agrega a tu plan \"Solicitar el EIN en irs.gov (gratis)\" con una fecha posterior a la presentación de tus artículos.",
          youCanNow: "obtener un EIN gratis y con seguridad, y dirigir una primera reunión de la junta con las decisiones correctas en el orden del día.",
          quickCheck: [
            { objective: "O3", q: "¿Para qué necesitas un EIN?", options: ["Para una cuenta de banco, la nómina y las solicitudes de exención de impuestos", "Solo para comprar un edificio", "Solo para las iglesias", "Para nada; es un adorno opcional"], answer: 0, why: "El EIN es el número federal de identificación fiscal de la organización para el banco, la nómina y las solicitudes de exención." },
            { objective: "O3", q: "Estás llenando la herramienta en línea del IRS para el EIN y tienes que parar a la mitad. ¿Qué debes saber?", options: ["Puedes guardar y terminar la próxima semana", "Hay que terminarla de una sola vez", "La IA puede terminarla por ti", "Puedes mandarle el resto al IRS por correo"], answer: 1, why: "La herramienta en línea del IRS hay que terminarla de una sola vez." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Formar la corporación",
        questions: [
          { objective: "O1", q: "¿Qué oficina crea una corporación sin fines de lucro en California?", options: ["El IRS", "La Secretaría de Estado de California", "El Procurador General", "El registro del condado"], answer: 1, why: "Los artículos de incorporación se presentan ante la Secretaría de Estado." },
          { objective: "O2", q: "Una despensa de alimentos para toda la comunidad, ¿qué formulario de artículos presentará casi seguro?", options: ["ARTS-MU (beneficio mutuo)", "ARTS-RE (religiosa)", "ARTS-PB (beneficio público)", "Un formulario de LLC de negocios"], answer: 2, why: "Las organizaciones benéficas que sirven al público normalmente presentan artículos de beneficio público." },
          { objective: "O3", q: "Un sitio web ofrece sacar tu EIN por $79. ¿Qué debes hacer?", options: ["Pagar, es más rápido", "Solicitarlo gratis en irs.gov", "Pedirle al Procurador General que pague", "No sacar el EIN"], answer: 1, why: "El IRS dice que un EIN nunca cuesta dinero; solicítalo en irs.gov." },
          { objective: "O2", q: "¿Cuándo vence la primera Declaración de Información (SI-100)?", options: ["En los 90 días después de presentar los artículos", "Solo cuando cierres", "Cada diez años", "Nunca para las organizaciones sin fines de lucro"], answer: 0, why: "La Secretaría de Estado dice que en 90 días, y luego cada dos años." },
          { objective: "O3", q: "¿Cuál es una tarea de la primera reunión de la junta?", options: ["Presentar el 990-N", "Aprobar los estatutos y elegir a los directivos", "Pagar el cargo por usuario del IRS", "Renovar con el Procurador General"], answer: 1, why: "La primera reunión aprueba los estatutos, elige a los directivos y aprueba lo básico, como la cuenta de banco." }
        ]
      }
    },
    {
      name: "Capítulo 2: Exención de impuestos, registro y costos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Solicitar el estatus federal 501(c)(3)",
          minutes: 6,
          goal: "Elegir entre el Formulario 1023 y el Formulario 1023-EZ y conocer la tarifa.",
          text: [
            "Para ser una organización benéfica 501(c)(3), la mayoría de las organizaciones lo solicitan al IRS. Hay dos formularios. El Formulario 1023 es la solicitud completa; su cargo por usuario era de $600 cuando lo revisamos. El Formulario 1023-EZ es un formulario más corto para organizaciones pequeñas; su cargo era de $275. Los dos se presentan en línea en Pay.gov, y el cargo se paga ahí al presentarlos.",
            "No todos pueden usar el 1023-EZ. El IRS tiene una hoja de requisitos al final de las instrucciones del Formulario 1023-EZ. Toma en cuenta cosas como cuánto dinero esperas recaudar y tus bienes. Llena la hoja con honestidad antes de elegir.",
            "Las iglesias tienen reglas especiales: el IRS trata a las iglesias de forma distinta a otras organizaciones benéficas, y muchas no están obligadas a solicitar, aunque algunas deciden hacerlo. Lee la Publicación 1828 del IRS o pregunta a un profesional. Cuando el IRS te aprueba, manda una carta de determinación. Guárdala para siempre: los donantes, los financiadores y el estado te la van a pedir."
          ],
          steps: ["Abre las instrucciones del Formulario 1023-EZ en irs.gov y llena la hoja de requisitos.", "Si calificas y te conviene, planea el 1023-EZ; si no, planea el Formulario 1023.", "Crea una cuenta en Pay.gov y llena el formulario ahí.", "Paga el cargo por usuario que muestra la página de cargos del IRS.", "Guarda la carta de determinación cuando llegue."],
          words: [["Formulario 1023", "la solicitud completa al IRS para el estatus 501(c)(3)."], ["Formulario 1023-EZ", "la solicitud corta al IRS para organizaciones pequeñas que cumplen la hoja de requisitos."], ["Cargo por usuario", "lo que cobra el IRS por revisar la solicitud."], ["Carta de determinación", "la carta del IRS que dice que tu organización está exenta de impuestos."]],
          slides: [
            { title: "Dos formularios federales", bullets: ["Formulario 1023: solicitud completa, cargo de $600", "Formulario 1023-EZ: formulario corto, cargo de $275", "Cargos al revisarlos, 27 oct 2026: confirma en irs.gov"] },
            { title: "¿Cuál?", bullets: ["Llena la hoja de requisitos de las instrucciones del 1023-EZ", "Calificas y te conviene: 1023-EZ", "No calificas: Formulario 1023"] },
            { title: "Cómo presentarlo", bullets: ["En línea en Pay.gov", "Paga el cargo por usuario al presentarlo"] },
            { title: "Las iglesias y la carta", bullets: ["Las iglesias tienen reglas especiales: ver la Publicación 1828 del IRS", "Guarda la carta de determinación para siempre"] }
          ],
          sources: [IRS_FEE, IRS_1023, IRS_1023EZ, IRS_CHURCH],
          tryIt: "Abre las instrucciones del Formulario 1023-EZ en irs.gov y lee la hoja de requisitos. Decide qué formulario presentaría tu organización y agrega a tu plan ese formulario, el cargo de la página de cargos del IRS y una fecha meta.",
          youCanNow: "decidir entre el Formulario 1023 y el 1023-EZ, encontrar el cargo actual y saber dónde presentarlo.",
          quickCheck: [
            { objective: "O4", q: "¿Cuándo se paga la tarifa del IRS por el Formulario 1023 o 1023-EZ?", options: ["Un año después de la aprobación", "Con un cheque a la Secretaría de Estado", "En Pay.gov al presentar", "Nunca"], answer: 2, why: "Los dos formularios se presentan en línea en Pay.gov, y la tarifa se paga ahí al presentar." },
            { objective: "O4", q: "El IRS te manda tu carta de determinación. ¿Qué haces con ella?", options: ["La tiras después de un año", "Le das la única copia a un donante", "La pegas en la IA", "La guardas para siempre, porque los donantes, los financiadores y el estado te la van a pedir"], answer: 3, why: "Guarda la carta de determinación para siempre; muchos te la van a pedir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "La exención de California y el Registro de Organizaciones Benéficas",
          minutes: 5,
          goal: "Planear la exención ante la Franchise Tax Board y el registro ante el Procurador General.",
          text: [
            "La aprobación federal no te exenta por sí sola de los impuestos de California. También tienes que solicitarlo a la Franchise Tax Board (FTB). El Formulario 3500 es la solicitud completa de California. El Formulario 3500A es un formulario más corto para organizaciones que ya tienen su carta de determinación del IRS. Revisa en ftb.ca.gov el formulario actual, las instrucciones y cualquier tarifa antes de presentarlo, porque para este curso no pudimos confirmar la tarifa en la página de la FTB.",
            "Las organizaciones que tienen o recaudan dinero para fines benéficos en California también se registran en el Registro de Organizaciones Benéficas del Procurador General. Te registras en línea con el Formulario CT-1 en los 30 días después de recibir por primera vez bienes benéficos, como tu primera donación. La tarifa era de $50 cuando la revisamos. Subes tus artículos, tus estatutos, la carta de determinación del IRS (o tu EIN si todavía no la tienes) y tu Formulario 1023 o 1023-EZ si presentaste uno.",
            "Algunos grupos pueden estar exentos de registrarse en el Registro. Si crees que el tuyo es uno (por ejemplo, una organización religiosa), lee las páginas del Registro o pregunta al Registro antes de saltarte el trámite."
          ],
          steps: ["Cuando llegue la carta del IRS, planea el Formulario 3500A en ftb.ca.gov (o el Formulario 3500 si lo solicitas sin ella).", "Anota la fecha en que recibes por primera vez una donación u otro bien benéfico.", "En los 30 días después de esa fecha, regístrate en línea con el Formulario CT-1.", "Sube los artículos, los estatutos, la carta del IRS o el EIN, y tu 1023 o 1023-EZ.", "Paga la tarifa del Registro que muestra oag.ca.gov."],
          words: [["Franchise Tax Board (FTB)", "la agencia de impuestos del estado de California."], ["Formulario 3500A", "el formulario corto de exención de California para grupos que ya tienen la carta federal 501(c)(3)."], ["Registro de Organizaciones Benéficas", "la oficina del Procurador General que registra y supervisa a las organizaciones benéficas en California."], ["CT-1", "el formulario de registro inicial de organizaciones benéficas del Procurador General."]],
          slides: [
            { title: "Exención de impuestos de California (FTB)", bullets: ["Aparte de la aprobación del IRS", "Formulario 3500: solicitud completa", "Formulario 3500A: si ya tienes la carta del IRS", "Revisa la tarifa actual en ftb.ca.gov"] },
            { title: "Registro de Organizaciones Benéficas (Procurador General)", bullets: ["Formulario CT-1, en línea", "En los 30 días después de recibir bienes benéficos por primera vez", "Tarifa: $50 al revisarla, 27 oct 2026"] },
            { title: "Ten esto listo para el CT-1", bullets: ["Artículos y estatutos", "Carta de determinación del IRS, o el EIN si todavía no la tienes", "Tu Formulario 1023 o 1023-EZ, si lo presentaste"] }
          ],
          sources: [FTB, AG_INITIAL],
          tryIt: "Agrega dos filas a tu plan: la exención de la FTB (nombre del formulario, \"revisar tarifa en ftb.ca.gov\", fecha meta después de la carta del IRS) y el CT-1 del Procurador General ($50, en los 30 días después de tu primera donación). Haz una lista de los cuatro documentos que vas a subir.",
          youCanNow: "planear tu exención de impuestos de California y tu registro en el Registro de Organizaciones Benéficas con los formularios, los tiempos y los documentos correctos.",
          quickCheck: [
            { objective: "O5", q: "¿Qué formulario es la solicitud completa de exención de California?", options: ["Formulario 3500", "Formulario CT-1", "Formulario SI-100", "Formulario RRF-1"], answer: 0, why: "El Formulario 3500 es la solicitud completa de California; el 3500A es la más corta." },
            { objective: "O5", q: "Tu ministerio cree que podría no tener que registrarse en el Registro. ¿Qué haces?", options: ["Te saltas el registro sin revisar", "Lees las páginas del Registro o le preguntas al Registro antes de saltarte el registro", "Le preguntas a un amigo", "Te registras con el IRS en su lugar"], answer: 1, why: "Revisa las páginas del Registro o pregunta al Registro antes de saltarte el registro." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mantenerte al corriente y tu presupuesto de arranque",
          minutes: 6,
          goal: "Armar un presupuesto de arranque y un calendario anual de trámites.",
          text: [
            "Empezar no es el final. Cada año presentas algo al IRS: los grupos pequeños con ingresos brutos normalmente de $50,000 o menos suelen poder presentar la tarjeta electrónica Formulario 990-N; los más grandes presentan el Formulario 990-EZ o el 990. Si no presentas nada tres años seguidos, el IRS te quita automáticamente la exención de impuestos.",
            "Cada año también renuevas con el Procurador General con el Formulario RRF-1. La tarifa depende de los ingresos totales: cuando la revisamos era de $25 con menos de $50,000, $50 de $50,000 a $100,000 y $75 de $100,001 a $250,000, y sube para organizaciones más grandes. Vence 4 meses y 15 días después de que termina tu año fiscal (el 15 de mayo si el año termina el 31 de diciembre). También tienes la Declaración de Información cada dos años y los trámites anuales de California ante la FTB: revisa en ftb.ca.gov qué formulario te toca.",
            "Tarifas de gobierno para arrancar, según la revisión: artículos $30, Declaración de Información $20, EIN gratis, IRS $275 (1023-EZ) o $600 (1023), Registro $50, más cualquier tarifa de la FTB. Eso da unos $375 con el 1023-EZ o $700 con el Formulario 1023, sin contar la tarifa de la FTB, un servicio de agente registrado ni un abogado. Usa la IA para ayudarte con el borrador de una tabla de presupuesto o una lista de recordatorios, pero revisa cada número en la página oficial."
          ],
          steps: ["Haz una lista de cada tarifa de arranque según las páginas oficiales.", "Súmalas según el formulario que elijas (1023-EZ o 1023).", "Agrega los trámites anuales: serie 990 del IRS, RRF-1 del Procurador General, trámite anual de la FTB.", "Agrega la Declaración de Información cada dos años.", "Pon cada fecha límite en un calendario compartido con dos recordatorios."],
          words: [["Formulario 990-N", "la tarjeta electrónica del IRS: un aviso anual corto en línea para grupos exentos pequeños."], ["RRF-1", "el formulario de renovación anual de organizaciones benéficas del Procurador General."], ["Año fiscal", "el periodo de 12 meses que usa tu organización para sus cuentas, muchas veces de enero a diciembre."], ["Al corriente", "estar al día con todos los trámites y tarifas obligatorios."]],
          slides: [
            { title: "Cada año", bullets: ["IRS: 990-N, 990-EZ o 990", "Procurador General: RRF-1, tarifa según ingresos", "FTB: revisa en ftb.ca.gov tu formulario anual"] },
            { title: "Cuidado", bullets: ["Sin presentar al IRS 3 años seguidos: pierdes la exención", "El RRF-1 vence 4 meses y 15 días después del fin del año", "SI-100 cada dos años"] },
            { title: "Tarifas de arranque (revisadas 27 oct 2026)", bullets: ["Artículos $30 + SI-100 $20 + EIN gratis", "IRS: $275 (1023-EZ) o $600 (1023)", "Registro CT-1 $50, más cualquier tarifa de la FTB"] },
            { title: "Tu total", bullets: ["Unos $375 con el 1023-EZ, $700 con el 1023", "Sin contar tarifa de la FTB, servicio de agente ni abogado", "Confirma cada tarifa en la página oficial"] }
          ],
          sources: [IRS_990N, AG_RENEW, SOS_SI, IRS_FEE, SOS_ARTICLES, AG_INITIAL, FTB],
          tryIt: "Tarea final: termina tu plan de arranque de una página. Haz una tabla con cada trámite en orden, la oficina, el formulario, la tarifa de la página oficial y tu fecha meta. Agrega los trámites anuales y sus fechas límite, el costo total de arranque y el enlace oficial de cada fila.",
          youCanNow: "armar un plan de arranque completo para una organización sin fines de lucro en California, con costos y un calendario anual que la mantiene al corriente.",
          quickCheck: [
            { objective: "O6", q: "¿Qué trámite anual va al Procurador General?", options: ["Formulario 990-N", "Formulario 1023", "Formulario RRF-1", "Formulario ARTS-PB"], answer: 2, why: "Cada año renuevas con el Procurador General con el Formulario RRF-1." },
            { objective: "O6", q: "La IA prepara la tabla de tu presupuesto de inicio. ¿Qué haces con las tarifas que trae?", options: ["Les crees; la IA está al día", "Las redondeas hacia arriba", "Las dejas en blanco", "Revisas cada número en la página oficial"], answer: 3, why: "Usa la IA para preparar la tabla, pero revisa cada número en la página oficial." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Exención de impuestos, registro y costos",
        questions: [
          { objective: "O4", q: "¿Cuáles eran los cargos por usuario del IRS para el Formulario 1023 y el Formulario 1023-EZ al revisarlos?", options: ["$100 y $50", "$600 y $275", "Gratis los dos", "$1,000 y $500"], answer: 1, why: "La página de cargos del IRS decía $600 para el Formulario 1023 y $275 para el Formulario 1023-EZ." },
          { objective: "O5", q: "Tu organización ya tiene su carta de determinación del IRS. ¿Qué formulario de California está hecho para ti?", options: ["Formulario 3500A", "Formulario CT-1", "Formulario SI-100", "Formulario 990-N"], answer: 0, why: "El Formulario 3500A es el formulario corto de la FTB para grupos que ya tienen la carta federal." },
          { objective: "O5", q: "Recibiste tu primera donación el 1 de marzo. ¿Cuándo debes registrarte en el Registro de Organizaciones Benéficas?", options: ["En los 30 días siguientes", "En los 2 años siguientes", "Solo después de recaudar $50,000", "Nunca"], answer: 0, why: "El Procurador General dice que te registres en los 30 días después de recibir bienes benéficos por primera vez." },
          { objective: "O6", q: "¿Qué pasa si no presentas el trámite anual del IRS tres años seguidos?", options: ["Nada", "Una multa de $10", "Pierdes automáticamente la exención de impuestos", "Cambia tu EIN"], answer: 2, why: "El IRS quita automáticamente la exención después de tres años seguidos sin presentar." },
          { objective: "O6", q: "Una organización benéfica con $40,000 de ingresos totales renueva con el Procurador General. ¿Cuál era la tarifa del RRF-1 al revisarla?", options: ["$200", "$100", "$75", "$25"], answer: 3, why: "La tabla del RRF-1 decía $25 para ingresos totales de menos de $50,000." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Crear una organización sin fines de lucro en California, con sus costos",
    questions: [
      { objective: "O1", q: "Convertirse en corporación sin fines de lucro y quedar exenta de impuestos son:", options: ["El mismo paso", "Solo asuntos federales", "Solo necesarios para iglesias", "Pasos separados con distintas oficinas"], answer: 3, why: "El estado crea la corporación; el IRS y la FTB dan la exención por separado." },
      { objective: "O1", q: "¿Qué va primero?", options: ["Registrarse ante el Procurador General", "Presentar los artículos ante la Secretaría de Estado", "Presentar el Formulario 3500A", "Presentar el RRF-1"], answer: 1, why: "La corporación debe existir antes de los demás trámites." },
      { objective: "O1", q: "¿Qué oficina maneja el Registro de Organizaciones Benéficas?", options: ["El IRS", "La Franchise Tax Board", "El Procurador General de California", "La Secretaría de Estado"], answer: 2, why: "El Registro de Organizaciones Benéficas es parte de la oficina del Procurador General." },
      { objective: "O2", q: "La mayoría de las organizaciones benéficas de California presentan, ¿qué tipo de artículos?", options: ["Beneficio mutuo", "Corporación general con acciones", "LLC", "Beneficio público"], answer: 3, why: "Las corporaciones de beneficio público sirven al público, lo que le queda a la mayoría de las organizaciones benéficas." },
      { objective: "O2", q: "¿Cuál era la tarifa de la Secretaría de Estado para los artículos de una organización sin fines de lucro al revisarla?", options: ["$30", "$300", "$600", "Gratis"], answer: 0, why: "La página de formularios decía $30 para ARTS-PB, ARTS-RE y ARTS-MU." },
      { objective: "O2", q: "¿Dónde puedes presentar los artículos en línea?", options: ["Pay.gov", "irs.gov", "Cualquier herramienta de IA", "bizfileonline.sos.ca.gov"], answer: 3, why: "bizfile Online es el sitio de trámites en línea de la Secretaría de Estado." },
      { objective: "O2", q: "Después de la primera, ¿cada cuánto se presenta la Declaración de Información (SI-100)?", options: ["Cada mes", "Cada año", "Cada dos años", "Nunca más"], answer: 2, why: "La Secretaría de Estado dice que cada dos años." },
      { objective: "O3", q: "¿Cuánto cobra el IRS por un EIN?", options: ["$50", "$25", "Depende de tu estado", "Nada"], answer: 3, why: "El IRS dice que nunca tienes que pagar por un EIN." },
      { objective: "O3", q: "¿Dónde debes escribir el número de Seguro Social de la persona responsable para el EIN?", options: ["Solo en el sitio oficial del IRS", "En un asistente de IA para revisarlo", "En un correo a toda la junta", "En cualquier sitio que ofrezca ayuda"], answer: 0, why: "Los números privados solo van en el sitio oficial de la agencia." },
      { objective: "O3", q: "¿Qué decisión corresponde a la primera reunión de la junta?", options: ["Presentar el 990-N", "Aprobar la política de conflicto de intereses", "Pagar el RRF-1", "Conseguir la carta del IRS"], answer: 1, why: "La primera reunión aprueba estatutos y políticas y elige a los directivos." },
      { objective: "O4", q: "¿Cómo decides si puedes usar el Formulario 1023-EZ?", options: ["Preguntas en cualquier sitio web", "Eliges el más barato", "Lo decide el Procurador General", "Llenas la hoja de requisitos del IRS en las instrucciones del 1023-EZ"], answer: 3, why: "La hoja de requisitos del IRS decide quién puede usar el formulario corto." },
      { objective: "O4", q: "¿Dónde se presentan los Formularios 1023 y 1023-EZ?", options: ["Por fax a Sacramento", "En la oficina del condado", "En línea en Pay.gov", "En bizfile Online"], answer: 2, why: "El IRS dice que los dos se llenan y se pagan en Pay.gov." },
      { objective: "O4", q: "¿Qué muestra una carta de determinación del IRS?", options: ["Que se aprobó el nombre de tu corporación", "Que tu organización está exenta de impuestos según la ley federal", "Que pagaste la tarifa del Registro", "Tu número de EIN"], answer: 1, why: "La carta de determinación confirma la exención de impuestos federal." },
      { objective: "O4", q: "Una iglesia quiere saber si debe presentar el Formulario 1023. ¿Dónde debe buscar primero?", options: ["En la Publicación 1828 del IRS o con un profesional", "En una publicación de redes sociales", "En el DMV", "En el Formulario SI-100"], answer: 0, why: "Las iglesias tienen reglas especiales del IRS que explica la Publicación 1828." },
      { objective: "O5", q: "Después de la aprobación federal, una organización de California queda exenta del impuesto estatal:", options: ["Automáticamente", "Solo después de que la FTB lo apruebe (Formulario 3500 o 3500A)", "Solo si es una iglesia", "Nunca"], answer: 1, why: "La exención de California es una solicitud aparte ante la Franchise Tax Board." },
      { objective: "O5", q: "¿Qué documentos subes para el CT-1 del Procurador General?", options: ["Artículos, estatutos, carta del IRS o EIN, y tu 1023 si lo presentaste", "Solo una identificación con foto", "Nombres y direcciones de donantes", "La contraseña de tu banco"], answer: 0, why: "El Registro pide los documentos de fundación, los estatutos, la carta del IRS o el EIN y la solicitud de exención." },
      { objective: "O5", q: "¿Cuál era la tarifa de registro inicial del Registro al revisarla?", options: ["$25", "$50", "$275", "$600"], answer: 1, why: "La página de registro inicial decía una tarifa de $50." },
      { objective: "O6", q: "Los ingresos brutos de una organización pequeña normalmente son de $50,000 o menos. ¿Qué trámite anual del IRS suele poder usar?", options: ["Formulario 1023", "Tarjeta electrónica Formulario 990-N", "Formulario CT-1", "Formulario ARTS-PB"], answer: 1, why: "El IRS deja que la mayoría de los grupos pequeños por debajo de esa cantidad presenten el 990-N." },
      { objective: "O6", q: "Tu año fiscal termina el 31 de diciembre. ¿Cuándo vence normalmente el RRF-1?", options: ["El 1 de enero", "El 1 de marzo", "El 15 de mayo", "El 31 de diciembre"], answer: 2, why: "Vence 4 meses y 15 días después del fin del año, es decir, el 15 de mayo." },
      { objective: "O6", q: "Con las tarifas revisadas, ¿más o menos cuánto suman las tarifas de gobierno para arrancar con el Formulario 1023-EZ, sin contar la tarifa de la FTB?", options: ["Unos $375", "Unos $50", "Unos $1,500", "Nada"], answer: 0, why: "$30 de artículos + $20 del SI-100 + $275 del 1023-EZ + $50 del CT-1 = $375, con el EIN gratis." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      7,
      10,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Trámites en orden",
        objective: "O1",
        notYet: "Falta un trámite o está fuera de orden.",
        meets: "Cada trámite de inicio en el orden correcto, con su oficina.",
        exceeds: "Anota por qué importa el orden en al menos dos pasos."
      },
      {
        name: "Formularios correctos",
        objective: "O2",
        notYet: "Se nombra un formulario equivocado, como artículos de beneficio mutuo para una organización benéfica.",
        meets: "Cada trámite nombra el formulario correcto, incluidos los artículos, el SI-100, el 1023 o 1023-EZ, el 3500 o 3500A y el CT-1.",
        exceeds: "Explica la elección entre el 1023 y el 1023-EZ con la hoja de requisitos."
      },
      {
        name: "Tarifas y enlaces oficiales",
        objective: "O6",
        notYet: "Una tarifa es adivinada o no tiene enlace.",
        meets: "Cada tarifa sale de la página oficial, con su enlace, y el total de inicio está sumado.",
        exceeds: "Anota la fecha en que se revisó cada tarifa."
      },
      {
        name: "Fechas planeadas",
        objective: "O5",
        notYet: "No hay fechas planeadas, o no se cumplen los plazos de 30 días del Registro y de 90 días del SI-100.",
        meets: "Una fecha planeada para cada trámite que cumple todos los plazos.",
        exceeds: "Dice quién de la junta es responsable de cada trámite."
      },
      {
        name: "Calendario anual",
        objective: "O6",
        notYet: "Faltan los trámites de cada año.",
        meets: "Trámite anual del IRS, RRF-1, la Declaración de Información cada dos años y los trámites de la FTB, con sus fechas límite.",
        exceeds: "Las fechas límite están puestas como recordatorios en el calendario de la junta."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Fundadores que presentan los artículos de constitución en 90 días (encuesta de seguimiento)",
      "Organizaciones que reciben una carta de determinación del IRS y se registran en el Registro de Organizaciones Benéficas",
      "Organizaciones que siguen al corriente un año después, con los trámites anuales a tiempo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet",
      "Enlaces a las páginas oficiales: Secretaría de Estado, IRS, Pay.gov, Franchise Tax Board y el Registro de Organizaciones Benéficas del Procurador General",
      "Una hoja de cálculo o papel para la tabla del plan de inicio",
      "Unos 60 minutos en total, más tiempo para revisar las tarifas en las páginas oficiales"
    ],
    facilitatorNotes: [
      "Pide a los estudiantes que revisen cada tarifa en la página oficial durante la sesión, porque las tarifas cambian.",
      "Invita a un abogado de organizaciones sin fines de lucro o a un voluntario de un centro de ayuda para responder preguntas sobre la redacción de los artículos y las reglas para iglesias.",
      "Recuerda a los estudiantes que nunca escriban números de Seguro Social ni ITIN en herramientas de IA ni en un correo.",
      "Quien no tenga una organización real puede hacer un plan de práctica para una organización benéfica de ejemplo.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
