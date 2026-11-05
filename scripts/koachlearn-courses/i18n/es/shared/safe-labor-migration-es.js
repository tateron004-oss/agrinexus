"use strict";

// Koach Learn course (Spanish translation of shared/safe-labor-migration.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "safe-labor-migration-es",
  lang: "es",
  translationOf: "safe-labor-migration",
  category: "Workforce Development",
  name: "Migrar para trabajar de forma segura",
  skills: "Encontrar información oficial sobre migración, Verificar la licencia de una agencia de reclutamiento, Detectar reclutadores falsos, Leer una oferta de trabajo y un contrato, Reconocer la trata de personas y pedir ayuda, Preparar una lista de seguridad para migrar",
  outcome: "planear un viaje al extranjero para trabajar por una vía legal: verificar que el reclutador tenga licencia, rechazar cualquier trabajo que te pida pagar por él, leer el contrato antes de firmar, conocer las señales de la trata de personas y dónde pedir ayuda, y llevar contigo tu propia lista de seguridad para migrar.",
  about: [
    "Cada año, millones de personas viajan a otro país para trabajar: enfermeras de Filipinas y Nigeria, choferes y obreros de la construcción de India y Kenia, trabajadores agrícolas de México, cuidadores de Ghana y Colombia, empleados de tiendas y hoteles de Marruecos, Egipto y Senegal. La mayoría encuentra un trabajo honesto. Algunos son engañados por reclutadores falsos, pagan cuotas muy altas, pierden su pasaporte o terminan en trabajo forzoso.",
    "Este curso te enseña a protegerte antes de irte y después de llegar. Vas a aprender a encontrar información oficial sobre las vías legales, a verificar si una agencia de reclutamiento tiene licencia, las señales de alerta de un trabajo falso, lo que debe decir una oferta y un contrato justos, las señales de la trata de personas y dónde pedir ayuda.",
    "El curso no da asesoría legal ni de visas, y no te consigue trabajo. Las reglas son diferentes en cada país y cambian, así que cada lección te muestra dónde revisar la página oficial de tu propio gobierno y del país donde quieres trabajar.",
    "Cada lección dura unos cinco minutos. Haz la tarea de \"Pruébalo ahora\" en papel o en un teléfono. Hay una comprobación corta después de cada lección y de cada capítulo, y un examen de 20 preguntas al final. Al terminar tendrás tu propia lista de seguridad para migrar."
  ],
  finalTask: "Prepara tu propia lista de seguridad para migrar, en papel o en un teléfono, para un trabajo real en el extranjero que estés considerando (o una oferta de práctica). Debe incluir: las páginas oficiales del gobierno y de la embajada que vas a usar; el nombre de la agencia y cómo verificaste su licencia; una lista de los costos y quién los paga; los datos del trabajo que necesitas por escrito antes de firmar; las señales de alerta que te harían detenerte; y un plan de ayuda con copias de tus documentos, una persona de confianza en casa y los números de la embajada y de ayuda que buscaste tú mismo.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Jóvenes y adultos que están pensando en trabajar en el extranjero, sobre todo en África, Asia y América Latina (por ejemplo Kenia, Nigeria, Ghana, Senegal, Marruecos, Egipto, India, Filipinas, México y Colombia), además de sus familias y de los trabajadores comunitarios que los aconsejan. Muchos se enteraron de los trabajos por amigos, redes sociales o agentes locales. El curso está traducido a muchos idiomas.",
    startingPoint: "Pueden usar un teléfono básico y aplicaciones de mensajería. Conocen a alguien que trabajó en el extranjero. Casi nunca han leído un contrato de trabajo y no saben que los reclutadores deben tener licencia ni que los trabajadores no deben pagar cuotas de reclutamiento.",
    gap: "Los participantes necesitan distinguir una oferta de trabajo legal y justa de una estafa o de una trampa de trata antes de pagar dinero, entregar su pasaporte o viajar. Sin estas habilidades, la gente pierde sus ahorros, se endeuda y puede terminar en trabajo forzoso lejos de cualquier ayuda.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas, para quienes leen en un segundo idioma y para la traducción",
      "Dispositivos: un teléfono inteligente básico o una computadora compartida; algunas tareas se hacen en papel",
      "Las reglas cambian según el país y cambian seguido: el curso indica páginas oficiales y no da asesoría legal ni de visas",
      "Seguridad: ningún número real de pasaporte, identificación o cuenta bancaria en ninguna práctica; a quien esté en peligro se le indica llamar primero a los servicios de emergencia locales",
      "Algunos participantes ya pueden estar en una situación difícil en el extranjero; el curso da vías de ayuda sin culpar a nadie"
    ],
    prerequisites: "Ninguno. Quien sea nuevo en internet puede tomar primero \"Fundamentos de internet\"."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con un país donde quieres trabajar", action: "encontrar las páginas oficiales del gobierno y de la embajada sobre visas de trabajo y vías legales", standard: "y distinguir una página oficial de la página de un agente o de un desconocido" },
    { id: "O2", condition: "Con el nombre de una agencia de reclutamiento", action: "verificar si la agencia tiene licencia ante la autoridad de trabajo o de migración de tu país", standard: "antes de pagar algo o entregar documentos" },
    { id: "O3", condition: "Con un anuncio de trabajo o un mensaje de un reclutador", action: "enumerar las señales de alerta de un reclutador falso o de una estafa de empleo", standard: "encontrando al menos 3 de 4 señales en un anuncio de práctica" },
    { id: "O4", condition: "Con una oferta de trabajo o un contrato", action: "comprobar que el empleador, el trabajo, el pago, el horario, el lugar, los costos y las condiciones de regreso estén por escrito", standard: "y anotar cada dato que falte o haya cambiado antes de firmar" },
    { id: "O5", condition: "Con la historia de una persona que trabaja en el extranjero", action: "identificar las señales de trata de personas o de trabajo forzoso y nombrar dónde pedir ayuda", standard: "nombrando al menos 3 señales y 2 lugares donde pedir ayuda" },
    { id: "O6", condition: "Antes de salir de casa", action: "escribir una lista de seguridad para migrar con copias de documentos, contactos y números de ayuda", standard: "que cubra todas las partes de la rúbrica del curso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Elegir una vía segura y legal",
      lessons: [
        {
          title: "Las vías legales y dónde encontrar información oficial",
          objectives: ["O1"],
          minutes: 5,
          goal: "Encontrar las páginas oficiales para trabajar legalmente en el país al que quieres ir.",
          text: [
            "Una vía legal significa que viajas con la visa o el permiso de trabajo correcto para ese empleo, emitido por el gobierno del país donde vas a trabajar. Trabajar con una visa de turista, o cruzar una frontera con un traficante de migrantes (\"coyote\"), te pone en alto riesgo: te pueden arrestar, mandar de regreso o atrapar personas que saben que le tienes miedo a la policía.",
            "Solo los gobiernos deciden las visas y los permisos de trabajo. La información confiable viene del sitio web oficial de inmigración del país donde quieres trabajar, de su embajada o consulado en tu país y del ministerio de trabajo o de migración de tu propio país. Muchos países de origen también tienen oficinas que ayudan a los trabajadores migrantes, por ejemplo el Department of Migrant Workers (Departamento de Trabajadores Migrantes) de Filipinas y el portal eMigrate del Ministerio de Asuntos Exteriores de India.",
            "Los agentes, las páginas de redes sociales, los canales de video y los amigos te pueden ayudar a empezar, pero no son oficiales. Revisa cada dato que te digan en la página del gobierno. Este curso no da asesoría legal ni de visas; si tu caso es complicado, pregunta en la embajada o a un abogado con licencia.",
            "El tráfico de migrantes y la trata de personas son cosas distintas. El tráfico de migrantes es pagarle a alguien para cruzar una frontera de forma ilegal. La trata es cuando alguien recluta o traslada a una persona con fuerza, mentiras o abuso para explotarla. Los traficantes de migrantes pueden convertirse en tratantes, y esa es una razón más para usar solo vías legales."
          ],
          steps: ["Anota el país y el tipo de trabajo.", "Busca el sitio web oficial de inmigración o de visas de ese país y su embajada en tu país.", "Revisa la dirección: los gobiernos suelen usar una terminación oficial como .gov, .gov.ph o .go.ke; busca el escudo del gobierno y la página de contacto.", "Busca la página sobre visas o permisos de trabajo y anota lo que dice que necesitas.", "Busca la página del ministerio de trabajo o de migración de tu país para personas que trabajan en el extranjero."],
          words: [["Vía legal", "una forma de viajar y trabajar que los gobiernos permiten, con la visa o el permiso correcto."], ["Permiso de trabajo", "autorización oficial para hacer un trabajo pagado en un país."], ["Embajada o consulado", "la oficina de tu país en otro país, o la oficina de otro país en el tuyo, que se encarga de las visas y ayuda a sus ciudadanos."], ["Tráfico de migrantes", "pagarle a alguien para que te lleve a través de una frontera de forma ilegal."], ["Trata de personas", "reclutar o trasladar a una persona con fuerza, mentiras o abuso para explotarla."]],
          slides: [
            { title: "Una vía legal", bullets: ["La visa o el permiso de trabajo correcto para el empleo", "Emitido por el gobierno del país donde vas a trabajar", "Nada de trabajar con visa de turista, nada de traficantes"] },
            { title: "De dónde vienen los datos oficiales", bullets: ["El sitio web de inmigración del país de destino", "Su embajada o consulado en tu país", "Tu propio ministerio de trabajo o de migración"] },
            { title: "No es oficial", bullets: ["Agentes, páginas de redes sociales y canales de video", "Las historias de tus amigos", "Revisa cada dato en la página del gobierno"] },
            { title: "El tráfico de migrantes no es trata", bullets: ["Tráfico: pagar para cruzar una frontera de forma ilegal", "Trata: fuerza, mentiras o abuso para explotar a una persona", "Los traficantes pueden volverse tratantes"] }
          ],
          sources: [
            { name: "UNODC: Trata de personas y tráfico ilícito de migrantes (Educación para la Justicia)", url: "https://www.unodc.org/e4j/en/secondary/human-trafficking-and-migrant-smuggling.html" },
            { name: "Departamento de Trabajadores Migrantes de Filipinas (DMW)", url: "https://dmw.gov.ph/" },
            { name: "Ministerio de Asuntos Exteriores de India: eMigrate", url: "https://emigrate.gov.in/" }
          ],
          tryIt: "Elige un país donde quizás quieras trabajar. En un teléfono o una computadora, encuentra (1) su página oficial de inmigración o de visas de trabajo y (2) su embajada o consulado en tu país. Escribe las dos direcciones en papel y una cosa que cada página dice que necesitas.",
          youCanNow: "encontrar las páginas oficiales del gobierno y de la embajada para trabajar en otro país y distinguirlas de las páginas de los agentes.",
          quickCheck: [
            { objective: "O1", q: "¿Quién decide si te dan una visa de trabajo para otro país?", options: ["El agente reclutador", "El gobierno de ese país", "Un canal de video popular sobre trabajos en el extranjero", "Tu futuro empleador por sí solo"], answer: 1, why: "Solo el gobierno del país de destino emite visas y permisos de trabajo." },
            { objective: "O1", q: "Un amigo te dice que puedes trabajar allá con visa de turista. ¿Qué haces?", options: ["Ir, porque tu amigo lo hizo", "Pagarle a un agente para que lo arregle rápido", "Revisar primero la página oficial de inmigración o preguntar en la embajada", "Preguntar en redes sociales"], answer: 2, why: "Trabajar con la visa equivocada puede hacer que te arresten o te atrapen; la página oficial te dice qué es legal." }
          ]
        },
        {
          title: "Verificar que una agencia de reclutamiento tenga licencia",
          objectives: ["O2"],
          minutes: 5,
          goal: "Verificar la licencia de una agencia en la lista oficial de tu gobierno.",
          text: [
            "En muchos países, las agencias que envían trabajadores al extranjero deben tener una licencia del gobierno. La licencia significa que el gobierno sabe quiénes son y puede actuar si hay quejas. Un agente sin licencia no tiene a nadie que lo vigile.",
            "Ejemplos: en Filipinas, el Department of Migrant Workers (DMW) te deja verificar en internet la situación de una agencia de reclutamiento. En India, el portal eMigrate muestra la lista de agentes de reclutamiento registrados, y el agente debe mostrar un certificado de registro válido. En Kenia, la National Employment Authority (NEA, Autoridad Nacional de Empleo) tiene la lista de agencias privadas de empleo registradas. En otros países, pregunta al ministerio de trabajo, al servicio público de empleo o a una oficina de la OIM qué lista usar.",
            "Revisa el nombre exacto y el número de licencia. Algunos agentes falsos copian el nombre de una agencia real, o usan una licencia vencida o cancelada. Vuelve a revisar cerca de la fecha en que pagues o firmes, porque las licencias pueden ser suspendidas. Revisa también que la orden de trabajo o la vacante esté aprobada, si tu país lo exige."
          ],
          steps: ["Pide a la agencia su nombre legal completo, su dirección y su número de licencia, por escrito.", "Abre la lista oficial de tu gobierno (no un enlace que te mande el agente).", "Busca el nombre y el número de licencia y revisa que coincidan.", "Revisa que la licencia esté vigente hoy y no esté suspendida ni cancelada.", "Si la agencia no está en la lista, detente y denúnciala ante la autoridad."],
          words: [["Agencia de reclutamiento", "un negocio que busca trabajadores para los empleadores, a veces en otros países."], ["Licencia", "permiso oficial del gobierno para hacer cierto tipo de negocio."], ["Orden de trabajo", "la solicitud oficial de trabajadores que hace un empleador, que algunos países deben aprobar."], ["OIM", "la Organización Internacional para las Migraciones (IOM en inglés), la agencia de las Naciones Unidas para la migración."]],
          slides: [
            { title: "Por qué importa la licencia", bullets: ["El gobierno sabe quién es la agencia", "Puedes presentar una queja si algo sale mal", "Nadie vigila a los agentes sin licencia"] },
            { title: "Dónde verificar (ejemplos)", bullets: ["Filipinas: consulta de agencias del DMW", "India: lista de agentes registrados en eMigrate", "Kenia: lista de la National Employment Authority"] },
            { title: "Cómo verificar", bullets: ["Pide por escrito el nombre exacto y el número de licencia", "Usa la lista oficial, no el enlace del agente", "El nombre y el número deben coincidir y estar vigentes hoy"] },
            { title: "¿No está en la lista?", bullets: ["Detente: no pagues ni entregues documentos", "Denúnciala ante la autoridad de trabajo o de migración"] }
          ],
          sources: [
            { name: "DMW de Filipinas: agencias de reclutamiento", url: "https://dmw.gov.ph/archives/poea/services/recruiters.html" },
            { name: "Ministerio de Asuntos Exteriores de India: preguntas frecuentes de quienes piensan emigrar", url: "https://www.mea.gov.in/issues-of-intending-emigrants.htm" },
            { name: "National Employment Authority de Kenia", url: "https://www.nea.go.ke/" },
            { name: "OIM IRIS: Reclutamiento ético", url: "https://iris.iom.int/" }
          ],
          tryIt: "Encuentra la lista oficial de agencias de reclutamiento con licencia de tu país (o la oficina que la tiene). Escribe la dirección web. Luego busca una agencia de la que hayas oído hablar, o cualquier agencia de la lista, y escribe su nombre, su número de licencia y si la licencia está vigente.",
          youCanNow: "encontrar la lista oficial de agencias con licencia de tu país y verificar el nombre, el número y la situación de una agencia.",
          quickCheck: [
            { objective: "O2", q: "Un agente te manda el enlace de una página que dice que la agencia tiene licencia. ¿Cuál es la forma más segura de verificar?", options: ["Confiar en el enlace porque parece oficial", "Pedirle al agente una captura de pantalla", "Contar las buenas reseñas en redes sociales", "Abrir tú mismo la lista oficial de tu gobierno y buscar el nombre y el número"], answer: 3, why: "Los agentes falsos pueden hacer páginas falsas; ir tú mismo a la lista oficial es la verificación real." },
            { objective: "O2", q: "El nombre de la agencia coincide con la lista oficial, pero el número de licencia es diferente. ¿Qué te indica esto?", options: ["Alguien puede estar copiando el nombre de una agencia real", "Nada; los números no importan", "La agencia es todavía más segura", "Que debes pagar más rápido"], answer: 0, why: "Los agentes falsos copian nombres reales; el nombre y el número deben coincidir con una licencia vigente." }
          ]
        },
        {
          title: "Detectar reclutadores falsos y estafas de empleo",
          objectives: ["O3"],
          minutes: 5,
          goal: "Enumerar las señales de alerta en un anuncio de trabajo o en el mensaje de un reclutador.",
          text: [
            "El reclutamiento justo tiene una regla sencilla que puedes recordar: los trabajadores no deben pagar para conseguir un trabajo. Las pautas sobre reclutamiento justo de la Organización Internacional del Trabajo (OIT) dicen que no se deben cobrar a los trabajadores ni a quienes buscan empleo comisiones de contratación ni gastos relacionados. Paga el empleador. Esto se llama el principio de \"el empleador paga\". Algunos países todavía permiten ciertos cobros por ley, así que si alguien te pide dinero, revisa primero las reglas oficiales de tu país.",
            "Señales de alerta comunes: tienes que pagarle al agente una cuota de colocación, de capacitación, de examen médico o de visa antes de ver un contrato; el pago es mucho más alto de lo normal para ese trabajo; la oferta llega solo por redes sociales o mensajería, sin dirección de una empresa; te presionan para decidir hoy mismo; te piden viajar con visa de turista; quieren quedarse con tu pasaporte; o el trabajo, el empleador o el país cambia una y otra vez.",
            "Otras señales: te dicen que mientas a las autoridades en el aeropuerto, que le pidas dinero prestado al agente o que no le cuentes la oferta a tu familia. Un empleador real se puede verificar: tiene una dirección real, un sitio web y una orden de trabajo o un contrato que puedes leer antes de pagar o viajar."
          ],
          steps: ["Lee el anuncio o el mensaje con calma.", "Encierra en un círculo cualquier pedido de dinero, de tu pasaporte o de guardar secreto.", "Revisa si el pago y el trabajo tienen sentido.", "Verifica la empresa y la agencia en páginas oficiales.", "Si ves una señal de alerta, detente y pregunta a la autoridad o a un consejero de confianza."],
          words: [["Comisión de contratación", "dinero que se le cobra a un trabajador para conseguir un trabajo o ser colocado en él."], ["Principio de \"el empleador paga\"", "la regla de que el empleador, no el trabajador, paga los costos del reclutamiento."], ["OIT", "la Organización Internacional del Trabajo (ILO en inglés), la agencia de las Naciones Unidas para el trabajo y los derechos de los trabajadores."]],
          slides: [
            { title: "Recuerda una regla", bullets: ["Los trabajadores no deben pagar para conseguir un trabajo", "El empleador paga los costos del reclutamiento", "¿Te piden dinero? Revisa primero las reglas oficiales"] },
            { title: "Señales de alerta", bullets: ["Cuotas al agente antes de ver un contrato", "Un pago muy por encima de lo normal", "Presión: decide hoy", "Visa de turista para un trabajo"] },
            { title: "Más señales de alerta", bullets: ["Quieren quedarse con tu pasaporte", "El trabajo, el empleador o el país cambia una y otra vez", "Mentir en el aeropuerto, pedir prestado al agente, guardar el secreto"] },
            { title: "Una oferta real se puede verificar", bullets: ["Dirección y sitio web reales de la empresa", "Agencia con licencia", "Un contrato que lees antes de pagar o viajar"] }
          ],
          sources: [
            { name: "OIT: Principios generales y directrices operativas sobre la contratación equitativa y definición de las comisiones de contratación y los gastos conexos", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" },
            { name: "OIM IRIS: Reclutamiento ético (principio de \"el empleador paga\")", url: "https://iris.iom.int/" }
          ],
          tryIt: "Lee este anuncio de práctica: ¡Trabajos en hoteles de Dubái! Pago 3 veces lo normal. Sin experiencia. Manda 500 dólares hoy para el trámite de la visa, solo quedan 5 lugares. Solo por WhatsApp. Escribe todas las señales de alerta que encuentres (hay al menos cuatro).",
          youCanNow: "enumerar las señales de alerta de un reclutador falso o de una estafa de empleo en un anuncio o un mensaje.",
          quickCheck: [
            { objective: "O3", q: "Un reclutador te pide pagar una cuota de colocación antes de ver un contrato. ¿Qué es esto?", options: ["Algo normal en todo trabajo en el extranjero", "Una señal de que el trabajo es muy bueno", "Una señal de alerta; los trabajadores no deben pagar para conseguir un trabajo", "Un impuesto del gobierno"], answer: 2, why: "Las pautas de la OIT sobre reclutamiento justo dicen que no se deben cobrar comisiones de contratación a los trabajadores; pagar antes de ver un contrato es una señal clave de estafa." },
            { objective: "O3", q: "¿Qué mensaje tiene MÁS señales de alerta?", options: ["Aquí están nuestra dirección y número de licencia; lee primero el contrato", "Paga hoy, no se lo cuentes a nadie y viaja con visa de turista", "Por favor, manda tu currículum para la entrevista", "El empleador paga tu vuelo; mira el contrato adjunto"], answer: 1, why: "La presión, el secreto y una visa de turista para un trabajo son todas señales de alerta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir una vía segura y legal",
        questions: [
          { objective: "O1", q: "¿Cuál es el lugar más confiable para revisar las reglas de las visas de trabajo?", options: ["La página de redes sociales de un reclutador", "Un video de alguien que se fue al extranjero", "El consejo de un amigo", "El sitio web oficial de inmigración del país de destino o su embajada"], answer: 3, why: "Solo el gobierno decide las visas, así que sus páginas oficiales son la fuente confiable." },
          { objective: "O1", q: "¿Cuál es la diferencia entre el tráfico de migrantes y la trata de personas?", options: ["El tráfico es pagar para cruzar una frontera de forma ilegal; la trata usa fuerza, mentiras o abuso para explotar a una persona", "Significan lo mismo", "El tráfico de migrantes es legal", "La trata solo ocurre en las fronteras"], answer: 0, why: "La trata se trata de explotar a una persona; el tráfico de migrantes, de cruzar una frontera de forma ilegal." },
          { objective: "O2", q: "¿Dónde debes verificar si una agencia tiene licencia?", options: ["Solo en el sitio web de la propia agencia", "En la lista oficial de agencias con licencia de tu gobierno", "Preguntando a otras personas que buscan trabajo en un grupo de chat", "Mirando los muebles de la oficina de la agencia"], answer: 1, why: "La lista oficial de la autoridad de trabajo o de migración muestra si la licencia es real y está vigente." },
          { objective: "O2", q: "La agencia no está en la lista oficial. ¿Qué haces?", options: ["Pagar un depósito más pequeño", "Darles una copia de tu pasaporte para que la guarden", "Detenerte y denunciarla ante la autoridad de trabajo o de migración", "Pedirles que te manden un sitio web más bonito"], answer: 2, why: "Nadie vigila a un agente sin licencia; detente y denúncialo." },
          { objective: "O3", q: "¿Qué significa el principio de \"el empleador paga\"?", options: ["El trabajador paga la mitad", "El gobierno paga las cuotas del trabajador", "El agente decide quién paga", "El empleador, no el trabajador, paga los costos del reclutamiento"], answer: 3, why: "En el reclutamiento justo, los costos del reclutamiento los paga el empleador, no los trabajadores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Protegerte antes y después de irte",
      lessons: [
        {
          title: "Leer la oferta de trabajo y el contrato",
          objectives: ["O4"],
          minutes: 6,
          goal: "Revisar que una oferta de trabajo tenga por escrito los datos que debe tener.",
          text: [
            "Un trabajo justo viene con una oferta o un contrato por escrito que puedes leer, en un idioma que entiendes, antes de pagar algo, firmar o viajar. Pide una copia para quedarte con ella. Si no entiendes una palabra, pide a la agencia, a la oficina de trabajo o a una persona de confianza que te la explique.",
            "Revisa que diga: el empleador y su dirección; el trabajo y sus tareas principales; dónde vas a trabajar; el pago, cada cuánto y cómo te pagan; el horario, los días de descanso y las horas extra; la duración del contrato; la vivienda y la comida, y si te las descuentan del pago; quién paga el vuelo, la visa, el examen médico y los costos del reclutamiento; y cómo puedes terminar el contrato y regresar a casa.",
            "La sustitución de contrato es un truco común: firmas un contrato en tu país y, al llegar, te dan otro diferente y peor. Guarda una foto de cada página que firmes. Si el contrato que te dan en el extranjero es diferente, no lo firmes a la carrera; comunícate con tu embajada o con la oficina de trabajo."
          ],
          steps: ["Consigue la oferta o el contrato completo por escrito y guarda una copia.", "Usa una lista: empleador, trabajo, lugar, pago, horario, días de descanso, duración, vivienda, costos, regreso.", "Marca lo que falte o sea diferente de lo que te dijeron.", "Pide las respuestas por escrito antes de firmar.", "Toma una foto de cada página que firmes y guarda las fotos en un lugar seguro."],
          words: [["Contrato", "un acuerdo por escrito entre tú y el empleador sobre el trabajo."], ["Horas extra", "el trabajo que pasa de tu horario normal, que debe pagarse."], ["Descuento", "dinero que te quitan del pago, por ejemplo por la vivienda."], ["Sustitución de contrato", "cuando el contrato que te dan en el extranjero es diferente y peor que el que firmaste en tu país."]],
          slides: [
            { title: "Antes de pagar, firmar o viajar", bullets: ["Consigue la oferta por escrito", "En un idioma que entiendas", "Quédate con tu propia copia"] },
            { title: "Debe decir", bullets: ["Empleador, trabajo, lugar de trabajo", "Pago, horario, días de descanso, horas extra", "Duración del contrato, vivienda, descuentos"] },
            { title: "Y también debe decir", bullets: ["Quién paga el vuelo, la visa, el examen médico y el reclutamiento", "Cómo terminar el contrato y regresar a casa"] },
            { title: "Cuidado con la sustitución de contrato", bullets: ["Toma una foto de cada página que firmes", "¿Otro contrato en el extranjero? No te apresures", "Comunícate con tu embajada o la oficina de trabajo"] }
          ],
          sources: [
            { name: "OIT: Principios generales y directrices operativas sobre la contratación equitativa", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" }
          ],
          tryIt: "Escribe en papel la lista de diez puntos del contrato de esta lección. Luego lee una oferta de práctica (invéntala, o usa una real con tus números privados tapados) y marca cada punto que esté por escrito. Encierra en un círculo cada punto que falte.",
          youCanNow: "revisar que una oferta de trabajo o un contrato tenga los datos que debe tener y anotar lo que falte antes de firmar.",
          quickCheck: [
            { objective: "O4", q: "¿Cuándo debes leer el contrato completo?", options: ["Después de llegar al nuevo país", "Antes de pagar, firmar o viajar", "Solo si hay un problema", "El agente lo lee por ti"], answer: 1, why: "Necesitas conocer las condiciones antes de comprometer dinero, firmar o salir de casa." },
            { objective: "O4", q: "En el nuevo trabajo te dan otro contrato con un pago más bajo. ¿Cómo se llama esto?", options: ["Un ascenso", "Una actualización normal", "Sustitución de contrato", "Un bono"], answer: 2, why: "Cambiar el contrato por uno peor después de llegar se llama sustitución de contrato, un abuso conocido." }
          ]
        },
        {
          title: "Conocer las señales de la trata de personas y del trabajo forzoso",
          objectives: ["O5"],
          minutes: 5,
          goal: "Nombrar las señales de la trata de personas y los lugares donde pedir ayuda.",
          text: [
            "Las Naciones Unidas definen la trata en tres partes: un acto (reclutar, trasladar, retener o recibir a una persona), un medio (fuerza, amenazas, mentiras, abuso de poder o de la situación vulnerable de alguien) y un fin (la explotación, como el trabajo forzoso o la explotación sexual). En el caso de niños menores de 18 años, no hace falta fuerza ni mentiras para que sea trata.",
            "Señales a las que debes prestar atención: el empleador o el agente te quita el pasaporte o la identificación y se queda con ellos; tienes una deuda que no deja de crecer y no puedes irte hasta pagarla; no te pagan, o te pagan mucho menos de lo prometido; no puedes salir libremente del trabajo o de la vivienda; te amenazan, o te dicen que la policía te va a arrestar; trabajas muchísimas horas sin días de descanso; te aíslan de tu familia y te quitan el teléfono.",
            "Hay ayuda. Comunícate con la embajada o el consulado de tu país, la oficina de trabajo o la policía del país donde estás, una oficina de la OIM o una organización de trabajadores de confianza. Muchos países tienen líneas de ayuda para trabajadores migrantes y víctimas de trata: busca ahora el número oficial y guárdalo. Si tú u otra persona están en peligro inmediato, llama primero al número de emergencias local."
          ],
          words: [["Trabajo forzoso", "trabajo que se obliga a hacer a una persona con amenazas o castigos y que no aceptó libremente."], ["Servidumbre por deudas", "estar obligado a trabajar para pagar una deuda que parece no terminar nunca."], ["Explotación", "usar a una persona de forma injusta para que otro se beneficie."]],
          slides: [
            { title: "La trata tiene tres partes", bullets: ["Acto: reclutar, trasladar, retener o recibir a una persona", "Medio: fuerza, amenazas, mentiras, abuso de poder", "Fin: la explotación, como el trabajo forzoso"] },
            { title: "Señales a las que prestar atención", bullets: ["Te quitan el pasaporte o la identificación y se quedan con ellos", "Una deuda que no deja de crecer", "Sin pago, o mucho menos de lo prometido"] },
            { title: "Más señales", bullets: ["No puedes salir libremente del trabajo o la vivienda", "Amenazas, o te dicen que la policía te arrestará", "Aislado de tu familia y sin teléfono"] },
            { title: "Dónde pedir ayuda", bullets: ["Peligro ahora: primero el número de emergencias local", "Tu embajada o consulado, la oficina de trabajo, la policía", "Oficina de la OIM, grupos de trabajadores, líneas de ayuda oficiales"] }
          ],
          sources: [
            { name: "UNODC: Preguntas frecuentes sobre la trata de personas", url: "https://www.unodc.org/unodc/en/human-trafficking/faqs.html" },
            { name: "UNODC Educación para la Justicia: el delito de trata de personas", url: "https://www.unodc.org/e4j/en/tip-and-som/module-6/key-issues/crime-of-trafficking-in-persons.html" },
            { name: "OIM: Organización Internacional para las Migraciones", url: "https://www.iom.int/" }
          ],
          tryIt: "Lee esta historia de práctica: Amina se fue al extranjero a limpiar casas. Al llegar, el agente se quedó con su pasaporte \"para guardarlo bien\". Le dicen que debe 2,000 dólares por su viaje, y la deuda crece cada mes. Trabaja 14 horas al día sin un día de descanso y le dicen que la policía la va a arrestar si se va. Escribe todas las señales de trata o de trabajo forzoso y dos lugares donde Amina podría pedir ayuda.",
          youCanNow: "reconocer las señales de la trata de personas y del trabajo forzoso y nombrar lugares donde una persona trabajadora puede pedir ayuda.",
          quickCheck: [
            { objective: "O5", q: "Tu empleador en el extranjero dice que tiene que quedarse con tu pasaporte. ¿Qué es esto?", options: ["Una señal de alerta de trabajo forzoso o de trata", "Un servicio normal para guardarlo bien", "Un requisito legal en todas partes", "Una señal de un buen empleador"], answer: 0, why: "Quitarle el pasaporte a un trabajador y quedarse con él es una señal común de trabajo forzoso y de trata." },
            { objective: "O5", q: "Una persona trabajadora está en peligro en este momento. ¿Cuál es el primer paso?", options: ["Publicarlo en redes sociales", "Esperar a que termine el contrato", "Llamar al número de emergencias local", "Pagarle la deuda al empleador"], answer: 2, why: "Ante un peligro inmediato, primero va el número de emergencias local; después la embajada y otras ayudas." }
          ]
        },
        {
          title: "Tu lista de seguridad para migrar",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escribir un plan de seguridad con tus documentos, contactos y números de ayuda antes de irte.",
          text: [
            "Antes de irte, haz un plan. Guarda tu propio pasaporte y tus documentos contigo. Haz copias: una copia en papel en casa con alguien de confianza, y una foto en un lugar seguro que puedas abrir desde cualquier teléfono, como tu propio correo electrónico. No publiques fotos de tu pasaporte en internet.",
            "Anota tus contactos: una persona de confianza en casa que espera saber de ti en días fijos; los nombres completos, direcciones y teléfonos del empleador y de la agencia; la embajada o el consulado de tu país en el país de destino; y las líneas de ayuda oficiales que buscaste en páginas del gobierno. Acuerda con tu persona de confianza una palabra clave que signifique \"necesito ayuda\".",
            "Lleva un registro sencillo de tu trabajo: las fechas y horas que trabajas y cuánto te pagan. Guarda las fotos de tu contrato. Si algo sale mal, estos registros ayudan a la embajada, a la oficina de trabajo o a un abogado a ayudarte. Después junta todo esto, con las verificaciones de las lecciones anteriores, en una sola lista: esa es tu tarea final."
          ],
          steps: ["Anota las páginas oficiales que usaste (inmigración, embajada, tu ministerio de trabajo).", "Escribe el nombre de la agencia, su número de licencia y cómo la verificaste.", "Haz una lista de cada costo y quién lo paga.", "Marca la lista del contrato.", "Escribe tus señales de alerta para detenerte.", "Escribe tu plan de ayuda: copias de documentos, persona de confianza, días para reportarte, palabra clave, y los números de la embajada y de las líneas de ayuda que buscaste tú mismo."],
          words: [["Persona de confianza", "alguien en casa que conoce tus planes y espera saber de ti."], ["Reportarse", "un mensaje o una llamada planeada para decir que estás bien."], ["Palabra clave", "una palabra que acuerdan y que en secreto significa \"necesito ayuda\"."]],
          slides: [
            { title: "Guarda tus documentos", bullets: ["Tu pasaporte se queda contigo", "Una copia en papel en casa con alguien de confianza", "Una foto en un lugar seguro, nunca publicada en internet"] },
            { title: "Tus contactos", bullets: ["Persona de confianza en casa, días para reportarte, palabra clave", "Nombres y direcciones del empleador y de la agencia", "La embajada y las líneas de ayuda oficiales que buscaste"] },
            { title: "Lleva registros", bullets: ["Las fechas y horas que trabajas", "Cuánto te pagan", "Fotos de tu contrato"] },
            { title: "Tu lista", bullets: ["Páginas oficiales y verificación de la licencia de la agencia", "Costos y quién los paga, datos del contrato", "Señales de alerta y tu plan de ayuda"] }
          ],
          sources: [
            { name: "OIM: Organización Internacional para las Migraciones", url: "https://www.iom.int/" },
            { name: "Departamento de Trabajadores Migrantes de Filipinas (ejemplo de oficina para trabajadores migrantes)", url: "https://dmw.gov.ph/" }
          ],
          tryIt: "Tarea final: prepara tu lista de seguridad para migrar para un trabajo real o de práctica en el extranjero. Incluye las páginas oficiales, la verificación de la licencia de la agencia, los costos y quién los paga, los datos del contrato, tus señales para detenerte y tu plan de ayuda. Usa espacios en blanco como [número de pasaporte] en lugar de números reales.",
          youCanNow: "escribir una lista de seguridad para migrar que tenga listos tus documentos, contactos y números de ayuda antes de irte.",
          quickCheck: [
            { objective: "O6", q: "¿Dónde debe estar tu pasaporte cuando trabajas en el extranjero?", options: ["Con el agente", "Con el empleador", "Con un amigo que conociste en el viaje", "Contigo, con copias guardadas en casa"], answer: 3, why: "Guarda tu propio pasaporte; las copias con una persona de confianza ayudan si se pierde o te lo quitan." },
            { objective: "O6", q: "¿Por qué acordar una palabra clave con una persona de confianza en casa?", options: ["Para tener descuento en las llamadas", "Para pedir ayuda sin que otros se den cuenta", "Para desbloquear tu teléfono", "Para conseguir una visa más rápido"], answer: 1, why: "Una palabra clave te permite avisar que estás en peligro aunque alguien esté escuchando." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Protegerte antes y después de irte",
        questions: [
          { objective: "O4", q: "¿Qué dato DEBE estar por escrito antes de firmar?", options: ["Quién paga el vuelo, la visa y los costos del reclutamiento", "La ciudad favorita del agente", "El color de tu uniforme", "Tus planes para las vacaciones"], answer: 0, why: "Los costos y quién los paga te protegen de cobros ocultos y de deudas." },
          { objective: "O4", q: "La oferta no dice cuántas horas vas a trabajar. ¿Qué haces?", options: ["Firmar; las horas no importan", "Adivinar las horas", "Pedir las horas por escrito antes de firmar", "Esperar a ver qué pasa al llegar"], answer: 2, why: "Las condiciones que faltan deben responderse por escrito antes de comprometerte." },
          { objective: "O5", q: "¿Cuál es una señal de servidumbre por deudas?", options: ["Recibes un recibo de pago cada mes", "Una deuda que no deja de crecer y no puedes irte hasta pagarla", "Tienes un día de descanso cada semana", "Puedes llamar a tu familia"], answer: 1, why: "Una deuda que crece y te impide irte es servidumbre por deudas, una forma de trabajo forzoso." },
          { objective: "O5", q: "¿Dónde puede pedir ayuda una persona trabajadora migrante en problemas?", options: ["Con el agente que le quitó el pasaporte", "Con un desconocido en internet que le pide una cuota", "Con el empleador que no le paga", "En la embajada o el consulado de su país"], answer: 3, why: "La embajada o el consulado ayuda a sus ciudadanos en el extranjero, junto con la oficina de trabajo, la policía, la OIM y las líneas de ayuda." },
          { objective: "O6", q: "¿De dónde debes sacar los números de las líneas de ayuda para tu plan?", options: ["De páginas oficiales del gobierno o de la embajada que buscaste tú mismo", "Del mensaje del reclutador", "De un comentario en redes sociales", "No los necesitas"], answer: 0, why: "Los números de las páginas oficiales son reales; un estafador puede mandarte números de ayuda falsos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Migrar para trabajar de forma segura",
    questions: [
      { objective: "O1", q: "¿Qué es una vía legal para trabajar en el extranjero?", options: ["Viajar con visa de turista y buscar trabajo allá", "Pagarle a un traficante para cruzar la frontera", "Trabajar con la visa o el permiso de trabajo correcto del gobierno del país de destino", "Usar el pasaporte de un amigo"], answer: 2, why: "Una vía legal usa la visa o el permiso que el gobierno del país de destino emite para ese trabajo." },
      { objective: "O1", q: "¿Qué fuente es oficial?", options: ["El sitio web de la embajada del país de destino", "El video de un reclutador", "Un chat de grupo sobre trabajos", "Un cartel en una parada de autobús"], answer: 0, why: "Las embajadas y los sitios web de inmigración los manejan los gobiernos." },
      { objective: "O1", q: "¿Por qué el tráfico de migrantes puede ser peligroso para un trabajador?", options: ["Siempre es más barato", "Los traficantes pueden volverse tratantes, y no tienes protección legal", "Te da un permiso de trabajo", "Las embajadas lo prefieren"], answer: 1, why: "Sin una situación legal es fácil amenazarte, y los traficantes pueden explotarte." },
      { objective: "O2", q: "¿Por qué importa la licencia de una agencia de reclutamiento?", options: ["Hace que el trabajo pague más", "Significa que el trabajo está garantizado", "Le permite a la agencia cobrar cualquier cuota", "El gobierno conoce a la agencia y puede actuar si hay quejas"], answer: 3, why: "Una licencia pone a la agencia bajo las reglas del gobierno y sus sistemas de quejas." },
      { objective: "O2", q: "En Filipinas, ¿qué oficina te deja verificar la situación de una agencia de reclutamiento?", options: ["El Department of Migrant Workers (DMW)", "Una página privada de redes sociales", "La aerolínea", "Cualquier banco"], answer: 0, why: "El DMW da las licencias a las agencias y ofrece una consulta en línea de la situación de cada agencia." },
      { objective: "O2", q: "¿Qué dos cosas deben coincidir en la lista oficial?", options: ["El teléfono y el correo del agente", "El logotipo y los colores de la agencia", "El nombre exacto de la agencia y su número de licencia", "El tamaño de la oficina y el número de empleados"], answer: 2, why: "Los agentes falsos copian nombres reales, así que el nombre y el número de licencia deben coincidir con una licencia vigente." },
      { objective: "O3", q: "Según las pautas de la OIT sobre reclutamiento justo, ¿quién debe pagar las comisiones de contratación?", options: ["El trabajador", "La familia del trabajador", "El empleador, no el trabajador", "El pueblo del trabajador"], answer: 2, why: "Las pautas dicen que no se deben cobrar a los trabajadores comisiones de contratación ni gastos relacionados: paga el empleador." },
      { objective: "O3", q: "¿Cuál es una señal de alerta de un trabajo falso?", options: ["Un contrato por escrito antes de pagar", "Una agencia con licencia y con dirección", "Un pago normal para ese trabajo", "Un pago muy por encima de lo normal sin pedir experiencia"], answer: 3, why: "Las ofertas que parecen demasiado buenas para ser verdad son una forma común de atrapar a la gente." },
      { objective: "O3", q: "Un reclutador te dice que no le cuentes el trabajo a tu familia. ¿Qué te indica esto?", options: ["Una señal de alerta; los trabajos honestos no necesitan secretos", "Una regla normal de la empresa", "Una señal de un salario alto", "Un requisito de la visa"], answer: 0, why: "El secreto te aleja de las personas que podrían advertirte o ayudarte." },
      { objective: "O3", q: "Te dicen que en el aeropuerto digas que eres turista. ¿Qué haces?", options: ["Hacerlo; todos lo hacen", "Detenerte: es una señal de alerta de una vía ilegal e insegura", "Pedir un salario más alto", "Mentir pero llevar dinero extra"], answer: 1, why: "Si te dicen que mientas a las autoridades, la vía no es legal y podrías quedar atrapado." },
      { objective: "O4", q: "¿Qué debe decir un contrato justo?", options: ["La edad del agente", "Tu religión", "El pago y cómo te lo pagan", "Tu nombre en redes sociales"], answer: 2, why: "El pago, el horario, el lugar, los costos y las condiciones de regreso deben estar por escrito." },
      { objective: "O4", q: "¿Por qué tomar una foto de cada página que firmas?", options: ["Para publicarla en internet", "Para probar lo que acordaste si después cambian el contrato", "Para mostrársela a tus amigos", "Porque el agente lo pide"], answer: 1, why: "Las fotos te protegen contra la sustitución de contrato." },
      { objective: "O4", q: "El contrato está en un idioma que no sabes leer. ¿Cuál es el mejor paso?", options: ["Pedirlo en un idioma que entiendas, o que una persona de confianza te lo explique, antes de firmar", "Firmar rápido", "Pedirle al agente que firme por ti", "No hacerle caso"], answer: 0, why: "Debes entender cada condición antes de firmar." },
      { objective: "O5", q: "¿Cuál es una de las tres partes de la trata en la definición de las Naciones Unidas?", options: ["Un boleto de avión", "Un anuncio de trabajo", "Una visa", "La explotación como fin"], answer: 3, why: "La trata tiene un acto, un medio y un fin: la explotación." },
      { objective: "O5", q: "¿Cuál es una señal de trabajo forzoso?", options: ["Que te paguen a tiempo", "Que te digan que la policía te va a arrestar si te vas", "Tener un día de descanso", "Quedarte con tu propio pasaporte"], answer: 1, why: "Las amenazas para impedir que un trabajador se vaya son una señal de trabajo forzoso." },
      { objective: "O5", q: "En el caso de un niño menor de 18 años, ¿qué es cierto sobre la trata?", options: ["Solo es trata si se usa la fuerza", "Los niños no pueden ser víctimas de trata", "No hace falta fuerza ni mentiras para que sea trata", "Solo los padres pueden denunciarla"], answer: 2, why: "Según el Protocolo de las Naciones Unidas, reclutar o trasladar a un niño para explotarlo es trata aunque no haya fuerza ni mentiras." },
      { objective: "O5", q: "¿Cuál es un lugar donde pedir ayuda en el extranjero?", options: ["Una oficina de la OIM", "El empleador que tiene tu pasaporte", "Un prestamista abusivo", "Un agente sin licencia"], answer: 0, why: "La OIM, las embajadas, las oficinas de trabajo, la policía y las líneas de ayuda oficiales pueden ayudar." },
      { objective: "O6", q: "¿Qué debes poner en tu plan de ayuda?", options: ["Solo tus canciones favoritas", "El PIN de tu banco", "Tu pasaporte entregado al agente", "Una persona de confianza, días para reportarte, una palabra clave y números de ayuda oficiales"], answer: 3, why: "Así alguien se da cuenta si tienes problemas y tú sabes a quién llamar." },
      { objective: "O6", q: "¿Dónde debes guardar una copia de tu pasaporte?", options: ["Publicada en redes sociales", "Con una persona de confianza en casa y en un lugar seguro que puedas abrir", "Solo con el reclutador", "En ningún lado"], answer: 1, why: "Las copias con una persona de confianza y en un lugar privado y seguro ayudan si pierdes tu pasaporte o te lo quitan." },
      { objective: "O6", q: "¿Por qué llevar un registro de tus horas y tu pago en el extranjero?", options: ["Para presumir", "Porque el empleador lo pide", "Ayuda a la embajada o a la oficina de trabajo a ayudarte si algo sale mal", "Se necesita para una visa de turista"], answer: 2, why: "Los registros son una prueba de lo que trabajaste y de lo que te pagaron." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 8, 10, 13, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Información oficial", objective: "O1", notYet: "Usa solo la página de un agente, de un amigo o de redes sociales.", meets: "Incluye la página oficial de inmigración del país de destino y su embajada en tu país.", exceeds: "También incluye la página del ministerio de trabajo o de migración de tu país y lo que cada página dice que necesitas." },
      { name: "Agencia verificada", objective: "O2", notYet: "No verificó la agencia, o usó un enlace que mandó el agente.", meets: "Verificó el nombre y el número de licencia de la agencia en la lista oficial, y la licencia está vigente hoy.", exceeds: "También verificó que la orden de trabajo o la vacante esté aprobada, si tu país lo exige." },
      { name: "Costos y señales de alerta", objective: "O3", notYet: "No anota los costos, o acepta sin preguntar una cuota que paga el trabajador.", meets: "Anota cada costo con quién lo paga, y escribe al menos cuatro señales para detenerse.", exceeds: "Revisó las reglas oficiales sobre cuotas en su país y escribió dónde las revisó." },
      { name: "Datos del contrato", objective: "O4", notYet: "Revisó menos de seis de los diez puntos del contrato.", meets: "Anota los diez puntos del contrato y marca los que faltan.", exceeds: "Escribió las preguntas que hará por escrito para cada punto que falta." },
      { name: "Plan de ayuda", objective: "O5", notYet: "No tiene números de ayuda, o los sacó del reclutador.", meets: "La embajada y al menos una línea de ayuda oficial, buscadas en páginas oficiales, más el número de emergencias local.", exceeds: "También nombra una oficina de la OIM o una organización de trabajadores cerca del lugar de trabajo." },
      { name: "Documentos y contactos", objective: "O6", notYet: "No tiene copias de documentos ni persona de confianza.", meets: "Copias de documentos guardadas en casa y en un lugar seguro, una persona de confianza y días para reportarse.", exceeds: "También una palabra clave y un plan para registrar las horas y el pago." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que dicen haber verificado la licencia de una agencia antes de pagar o firmar (seguimiento a los 30 días)",
      "Participantes que dicen haber rechazado o denunciado una oferta de trabajo que les pedía pagar una cuota o entregar su pasaporte",
      "Las organizaciones aliadas reportan menos participantes que pierden dinero con reclutadores falsos"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para buscar páginas oficiales",
      "Papel y pluma para las listas y las historias de práctica",
      "Las direcciones de la autoridad de trabajo o de migración de tu país y de su lista de agencias (quien facilita puede buscarlas con anticipación)",
      "Unos 60 a 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Antes de la sesión, busca la lista oficial de agencias con licencia de tu país, la oficina para trabajadores migrantes y los números oficiales de las líneas de ayuda, y revisa que estén actualizados.",
      "No des asesoría de visas ni legal; manda a los participantes a la embajada, a la página oficial de inmigración o a un abogado con licencia.",
      "Nunca pidas a los participantes que compartan números reales de pasaporte, identificación o cuenta bancaria; usa espacios en blanco como [número de pasaporte].",
      "Algunos participantes o sus familias pueden haber sido engañados o explotados. Habla sin culpar a nadie y comparte en privado los servicios de ayuda locales.",
      "Si un participante dice que él u otra persona está en peligro ahora, ayúdale a llamar primero al número de emergencias local."
    ]
  }
};
