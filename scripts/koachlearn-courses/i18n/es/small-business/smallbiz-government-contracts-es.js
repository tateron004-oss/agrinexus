"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-government-contracts.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-government-contracts-es",
  lang: "es",
  translationOf: "smallbiz-government-contracts",
  category: "Small Business",
  name: "Ganar contratos con el gobierno",
  skills: "Registrarte en SAM.gov, Elegir códigos NAICS, Usar las certificaciones de la SBA y de California, Encontrar oportunidades de contratos, Leer una convocatoria, Escribir una declaración de capacidades",
  outcome: "registrar tu negocio para venderle al gobierno, elegir tus códigos NAICS, encontrar oportunidades de contratos que te convengan, leer una convocatoria para decidir si presentas una oferta y escribir una declaración de capacidades de una página.",
  about: [
    "Los gobiernos federal, estatales y locales compran casi de todo: limpieza, comida para eventos, construcción, jardinería, impresión, informática, capacitación, transporte de carga y más. Una parte de esas compras está reservada para pequeños negocios, y otra parte para pequeños negocios certificados, como los que son de mujeres o de veteranos, entre otros.",
    "Este curso te lleva por los pasos en orden: registrarte en SAM.gov y obtener tu Unique Entity ID, elegir códigos NAICS, entender las certificaciones de la SBA (la agencia federal de pequeños negocios) y las certificaciones Small Business y DVBE de California, encontrar oportunidades, leer una convocatoria y escribir una declaración de capacidades que puedas mandar a los compradores.",
    "Las reglas, los límites y los sitios web cambian. Cada lección te muestra la página oficial que debes revisar. Hay ayuda gratis en los APEX Accelerators, las oficinas de distrito de la SBA y los Small Business Development Centers (centros de desarrollo de pequeños negocios); no necesitas pagarle a nadie para registrarte.",
    "Cada lección dura unos cinco minutos y termina con una tarea que haces enseguida. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe una declaración de capacidades de una página para tu negocio con cuatro partes: competencias principales, experiencia previa, qué te hace diferente y datos de la empresa (nombre legal, UEI, códigos NAICS, certificaciones y datos de contacto). Luego encuentra una oportunidad real en SAM.gov o en Cal eProcure que coincida con un código NAICS de tu declaración.",
  chapters: [
    {
      name: "Capítulo 1: Prepararte para venderle al gobierno",
      lessons: [
        {
          title: "Registrarte en SAM.gov y obtener un UEI",
          minutes: 6,
          goal: "Reunir lo que necesitas y registrar tu negocio en SAM.gov tú mismo, gratis.",
          text: [
            "SAM.gov (el System for Award Management, sistema de gestión de adjudicaciones) es el sitio oficial del gobierno de Estados Unidos para hacer negocios con las agencias federales. Para presentar ofertas y ganar contratos federales, tu negocio tiene que estar registrado ahí. El registro te da un Unique Entity ID (UEI, identificador único de entidad), un código de 12 caracteres con letras y números que identifica a tu negocio.",
            "Puedes pedir solo un UEI sin hacer el registro completo, pero con un UEI solo no puedes solicitar directamente adjudicaciones federales. Para contratos, completa el registro completo. Tienes que renovarlo cada 365 días para mantenerlo activo.",
            "Registrarte en SAM.gov es gratis. Algunas empresas mandan correos o cartas que parecen oficiales y ofrecen registrarte o renovarte a cambio de un pago, o te advierten que tu registro está por vencer. Nunca tienes que pagarles. Regístrate solo en sam.gov, y si te atoras, pide ayuda gratis a un APEX Accelerator.",
            "Antes de empezar, reúne el nombre legal de tu negocio y su dirección física tal como los tiene el IRS (la agencia de impuestos), tu Employer Identification Number (EIN, número de identificación fiscal del empleador) u otro número de impuestos, y los datos bancarios para recibir pagos. Escribe estos datos solo en SAM.gov, nunca en una herramienta de IA ni en un correo."
          ],
          steps: ["Reúne el nombre legal de tu negocio, la dirección física, el EIN y los datos bancarios.", "Entra a sam.gov y crea un usuario.", "Elige registrar tu entidad, no solo obtener un UEI.", "Responde cada sección; el nombre y la dirección del negocio tienen que coincidir con los registros del IRS.", "Anota tu UEI y la fecha en que vence tu registro.", "Pon un recordatorio para renovar antes de los 365 días."],
          words: [["SAM.gov", "el System for Award Management, el sitio federal donde los negocios se registran para venderle al gobierno."], ["UEI", "Unique Entity ID: el código de 12 caracteres que identifica a tu negocio ante el gobierno."], ["EIN", "Employer Identification Number: el número de identificación fiscal de tu negocio que da el IRS."], ["APEX Accelerator", "un centro de asesoría gratis que ayuda a los negocios a venderle al gobierno."]],
          slides: [
            { title: "SAM.gov es la puerta de entrada", bullets: ["Regístrate para ofertar en contratos federales", "Recibes un Unique Entity ID de 12 caracteres", "Renueva cada 365 días"] },
            { title: "Solo UEI o registro completo", bullets: ["Solo UEI: no puedes solicitar adjudicaciones", "Registro completo: necesario para contratos"] },
            { title: "Es gratis", bullets: ["Ignora ofertas pagadas para registrarte o renovarte", "Regístrate solo en sam.gov", "Ayuda gratis: APEX Accelerators"] },
            { title: "Ten listo", bullets: ["Nombre legal y dirección que coincidan con el IRS", "EIN u otro número de impuestos y datos bancarios", "Escríbelos solo en SAM.gov"] }
          ],
          sources: [
            { name: "SAM.gov: Registro de entidades", url: "https://sam.gov/content/entity-registration" },
            { name: "SBA: Requisitos básicos para contratar con el gobierno", url: "https://www.sba.gov/federal-contracting/contracting-guide/basic-requirements" }
          ],
          tryIt: "Haz una lista de lo que necesitas para registrar tu negocio en SAM.gov: nombre legal, dirección física, EIN, datos bancarios y persona de contacto. Marca lo que ya tienes. Si ya estás registrado, busca tu fecha de vencimiento y pon un recordatorio para renovar.",
          youCanNow: "prepararte y completar un registro gratis en SAM.gov, explicar qué es un UEI y reconocer las estafas de registro pagado."
        },
        {
          title: "Elegir códigos NAICS y revisar tu tamaño",
          minutes: 5,
          goal: "Elegir un código NAICS principal y revisar si tu negocio cuenta como pequeño para ese código.",
          text: [
            "Los códigos NAICS (North American Industry Classification System, sistema de clasificación industrial de América del Norte) ordenan los negocios según lo que venden. A cada contrato del gobierno se le da un código NAICS, y los compradores buscan negocios por código. Por ejemplo, hay códigos para servicios de limpieza, impresión comercial y diseño de sistemas informáticos.",
            "Busca códigos en la página de NAICS de la Oficina del Censo de Estados Unidos (census.gov/naics) escribiendo palabras que describan tu trabajo. Elige un código principal para tu servicio principal y agrega otros para las demás cosas que vendes.",
            "Cada código NAICS tiene un estándar de tamaño: lo más grande que puede ser un negocio y todavía contar como pequeño para ese código, medido por ingresos anuales o por número de empleados. La mayoría de los fabricantes con 500 empleados o menos y la mayoría de los que no fabrican con un promedio de menos de $7.5 millones al año cuentan como pequeños, pero varía. Revisa el tuyo con la Size Standards Tool (herramienta de estándares de tamaño) de la SBA.",
            "Ser pequeño para un código te deja competir por los contratos reservados para pequeños negocios con ese código."
          ],
          steps: ["Haz una lista de lo que vendes con palabras sencillas.", "Busca en census.gov/naics los códigos que coinciden.", "Elige un código principal y dos o tres más.", "Revisa cada código con la Size Standards Tool de la SBA.", "Agrega los códigos a tu registro en SAM.gov."],
          words: [["Código NAICS", "un número que describe qué tipo de negocio eres."], ["Código NAICS principal", "el código de tu producto o servicio principal."], ["Estándar de tamaño", "lo más grande que puede ser un negocio y todavía contar como pequeño para un código NAICS. En inglés se dice size standard."], ["Contrato reservado", "un contrato por el que solo pueden competir ciertos negocios, como los pequeños. En inglés se dice set-aside."]],
          slides: [
            { title: "Para qué sirven los códigos NAICS", bullets: ["Ordenan los negocios según lo que venden", "Cada contrato tiene un código", "Los compradores buscan negocios por código"] },
            { title: "Encontrar tus códigos", bullets: ["Busca en census.gov/naics", "Un código principal para tu servicio principal", "Agrega códigos para otras cosas que vendes"] },
            { title: "Estándares de tamaño", bullets: ["Cada código tiene un límite para ser pequeño", "Por ingresos anuales o por empleados", "Revisa con la Size Standards Tool de la SBA"] }
          ],
          sources: [
            { name: "SBA: Estándares de tamaño", url: "https://www.sba.gov/federal-contracting/contracting-guide/size-standards" },
            { name: "Oficina del Censo de EE. UU.: NAICS", url: "https://www.census.gov/naics/" }
          ],
          tryIt: "Busca tu servicio principal en census.gov/naics y anota tu código NAICS principal y dos más. Luego revisa uno de ellos en la Size Standards Tool de la SBA y escribe si tu negocio cuenta como pequeño.",
          youCanNow: "elegir códigos NAICS para tu negocio y revisar si cuentas como pequeño para cada uno."
        },
        {
          title: "Certificaciones de la SBA y de California",
          minutes: 6,
          goal: "Decidir para qué certificaciones federales y de California podría calificar tu negocio.",
          text: [
            "Las certificaciones te dejan competir por contratos reservados para ciertos pequeños negocios. Las certificaciones federales se solicitan en certifications.sba.gov. Cada una tiene reglas; estas son las básicas, así que revisa las páginas de la SBA para ver la lista completa.",
            "8(a) Business Development (programa 8(a) de desarrollo de negocios): para pequeños negocios que son por lo menos 51% propiedad de ciudadanos de Estados Unidos en desventaja social y económica, y que ellos controlan, con límites de patrimonio personal, ingresos y bienes, normalmente dos años de operación, y un programa de una sola vez de hasta nueve años. HUBZone (Historically Underutilized Business Zone, zona de negocios históricamente poco aprovechada): tu oficina principal está en una HUBZone y por lo menos 35% de tus empleados viven en una. Women-Owned Small Business (WOSB, pequeño negocio de mujeres): por lo menos 51% propiedad de mujeres ciudadanas de Estados Unidos, y controlado por ellas; el gobierno busca dar el 5% del dinero de sus contratos a negocios WOSB. De veteranos (VOSB) y de veteranos con discapacidad por servicio (SDVOSB): certificados por el programa VetCert de la SBA desde 2023.",
            "California tiene sus propias certificaciones, de la Office of Small Business and DVBE Services del Department of General Services (DGS, departamento de servicios generales), que se solicitan en Cal eProcure. Small Business (SB, pequeño negocio): de dueños independientes, con oficina principal en California y, junto con sus afiliados, con 100 empleados o menos e ingresos brutos anuales promedio de $19 millones o menos (o un fabricante con 100 empleados o menos). Disabled Veteran Business Enterprise (DVBE, empresa de veteranos con discapacidad): por lo menos 51% propiedad de veteranos con discapacidad, que la administran, con una discapacidad relacionada con el servicio de por lo menos 10%.",
            "Muchas ciudades, condados y distritos escolares también aceptan las certificaciones del estado. Pregúntale a un APEX Accelerator cuáles te convienen."
          ],
          words: [["8(a)", "un programa de la SBA para pequeños negocios de personas en desventaja social y económica."], ["HUBZone", "una Historically Underutilized Business Zone; los negocios ahí pueden recibir ayuda para conseguir contratos."], ["WOSB", "Women-Owned Small Business: pequeño negocio de mujeres."], ["SDVOSB", "Service-Disabled Veteran-Owned Small Business: pequeño negocio de veteranos con discapacidad por servicio."], ["DVBE", "Disabled Veteran Business Enterprise, una certificación de California."]],
          slides: [
            { title: "Por qué certificarte", bullets: ["Compite por contratos reservados para ciertos negocios", "Federales: certifications.sba.gov"] },
            { title: "Certificaciones federales", bullets: ["8(a): dueños en desventaja, hasta 9 años", "HUBZone: oficina en una zona, 35% del personal vive en una", "WOSB: 51% de mujeres; VOSB/SDVOSB: VetCert de la SBA"] },
            { title: "Certificaciones de California", bullets: ["Solicítalas en Cal eProcure (DGS)", "SB: oficina en CA, 100 empleados o menos, hasta $19M", "DVBE: 51% de veteranos con discapacidad"] },
            { title: "Busca ayuda gratis", bullets: ["APEX Accelerators", "Oficinas de distrito de la SBA", "Revisa todas las reglas de cada programa"] }
          ],
          sources: [
            { name: "SBA: Programa 8(a) Business Development", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program" },
            { name: "SBA: Programa HUBZone", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/hubzone-program" },
            { name: "SBA: Programa Women-Owned Small Business", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/women-owned-small-business-federal-contract-program" },
            { name: "SBA: Ayuda para contratos de veteranos (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "DGS de California: Solicita la certificación Small Business y DVBE", url: "https://www.dgs.ca.gov/PD/Services/Page-Content/Procurement-Division-Services-List-Folder/Apply-for-or-Re-apply-as-Small-Business-Disabled-Veteran-Business-Enterprise" }
          ],
          tryIt: "Haz una tabla con las seis certificaciones de esta lección (8(a), HUBZone, WOSB, VOSB o SDVOSB, SB de California y DVBE de California). Para cada una, escribe sí, tal vez o no para tu negocio, y la regla que lo decide. Encierra en un círculo la que vas a investigar primero.",
          youCanNow: "nombrar las principales certificaciones de la SBA y de California, revisar para cuáles podría calificar tu negocio y saber dónde solicitarlas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararte para venderle al gobierno",
        questions: [
          { q: "¿Qué recibes cuando te registras en SAM.gov?", options: ["Un préstamo del banco", "Un Unique Entity ID (UEI)", "Un contrato garantizado", "Una licencia de negocio"], answer: 1, why: "El registro en SAM.gov le da a tu negocio un Unique Entity ID de 12 caracteres." },
          { q: "Una empresa te escribe que va a renovar tu registro en SAM.gov por $500. ¿Qué haces?", options: ["Pagar rápido antes de que venza", "Mandarle tu EIN y tus datos bancarios", "Responder con tu contraseña", "Ignorarla y renovar tú mismo gratis en sam.gov"], answer: 3, why: "El registro en SAM.gov es gratis; nunca tienes que pagarle a otra empresa." },
          { q: "¿Cada cuánto tienes que renovar tu registro en SAM.gov?", options: ["Cada 365 días", "Cada 10 años", "Nunca", "Cada semana"], answer: 0, why: "SAM.gov dice que tienes que renovar cada 365 días para mantenerte activo." },
          { q: "¿Qué describe un código NAICS?", options: ["Tu cuenta de banco", "La dirección de tu casa", "Qué tipo de negocio eres y qué vendes", "Tu puntaje de crédito"], answer: 2, why: "Los códigos NAICS ordenan los negocios según sus productos o servicios." },
          { q: "Tu oficina principal está en una HUBZone y el 40% de tus trabajadores vive en una. ¿Qué certificación debes investigar?", options: ["WOSB", "DVBE", "Solo 8(a)", "HUBZone"], answer: 3, why: "HUBZone pide una oficina principal en una HUBZone y que por lo menos el 35% de los empleados viva en una." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar y ganar contratos",
      lessons: [
        {
          title: "Encontrar oportunidades",
          minutes: 5,
          goal: "Buscar en SAM.gov y en Cal eProcure oportunidades que coincidan con tus códigos NAICS y guardar la búsqueda.",
          text: [
            "Las agencias federales publican oportunidades de contratos en SAM.gov. Busca en Contract Opportunities (oportunidades de contratos) por tu código NAICS, tu estado y el tipo de contrato reservado, como pequeño negocio, 8(a), HUBZone, WOSB o SDVOSB. Guarda tu búsqueda para que las nuevas coincidencias te lleguen por correo.",
            "Las agencias del estado de California publican licitaciones en Cal eProcure (caleprocure.ca.gov). Regístrate ahí, agrega palabras clave y códigos de productos UNSPSC a tu perfil y activa las notificaciones. Cal eProcure también muestra lo que los departamentos han comprado antes y a qué precios, lo que te ayuda a poner los tuyos.",
            "No tienes que ganar primero un contrato grande. Muchos pequeños negocios empiezan como subcontratistas de contratistas principales más grandes. Los departamentos de California tienen SB/DVBE Advocates (defensores de pequeños negocios y DVBE) que ayudan a los negocios certificados, y los APEX Accelerators te ayudan gratis a encontrar licitaciones.",
            "Busca oportunidades que coincidan con lo que ya haces bien, en una zona que puedas atender y de un tamaño que puedas manejar."
          ],
          steps: ["En SAM.gov, busca en Contract Opportunities por tu código NAICS y tu estado.", "Filtra por los contratos reservados para los que calificas.", "Guarda la búsqueda para que las nuevas coincidencias te lleguen por correo.", "Regístrate en Cal eProcure y agrega palabras clave y códigos UNSPSC para recibir notificaciones.", "Contacta a un APEX Accelerator o a un SB/DVBE Advocate para conseguir pistas."],
          words: [["Oportunidad de contrato", "un aviso publicado de que el gobierno quiere comprar algo."], ["Contratista principal", "el negocio que tiene el contrato con el gobierno. En inglés se dice prime contractor."], ["Subcontratista", "un negocio que contrata el contratista principal para hacer parte del trabajo."], ["UNSPSC", "un código de productos y servicios que usa el sistema de licitaciones de California."]],
          slides: [
            { title: "Federal: SAM.gov", bullets: ["Busca en Contract Opportunities por NAICS y estado", "Filtra por tus contratos reservados", "Guarda la búsqueda para recibir alertas por correo"] },
            { title: "California: Cal eProcure", bullets: ["Regístrate y agrega palabras clave y códigos UNSPSC", "Activa las notificaciones de licitaciones", "Mira compras y precios anteriores"] },
            { title: "Empieza donde puedes ganar", bullets: ["Sé subcontratista de un contratista principal", "Ayudan los SB/DVBE Advocates y APEX Accelerators", "Que vaya con tus habilidades, tu zona y tu tamaño"] }
          ],
          sources: [
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "DGS de California: Cómo hacer negocios con el estado de California", url: "https://www.dgs.ca.gov/PD/Resources/Page-Content/Procurement-Division-Resources-List-Folder/How-to-do-business-with-the-state-of-California" },
            { name: "Cal eProcure: Encuentra oportunidades de licitación", url: "https://caleprocure.ca.gov/pages/Events-BS3/event-search.aspx" }
          ],
          tryIt: "Busca en Contract Opportunities de SAM.gov con tu código NAICS principal y tu estado. Anota dos oportunidades: la agencia, lo que quieren, el tipo de contrato reservado y la fecha límite. Guarda la búsqueda.",
          youCanNow: "encontrar oportunidades de contratos federales y de California que coincidan con tus códigos y configurar alertas."
        },
        {
          title: "Leer una convocatoria",
          minutes: 6,
          goal: "Leer las partes clave de una convocatoria y decidir si presentas una oferta.",
          text: [
            "Una convocatoria (solicitation) es la petición de ofertas del gobierno. Puede llamarse Request for Quote (RFQ, solicitud de cotización), Request for Proposal (RFP, solicitud de propuestas) o Invitation for Bid (IFB, invitación a licitar). Pueden ser largas, pero primero solo necesitas encontrar unas pocas partes clave.",
            "Busca estas: la descripción del trabajo o statement of work (lo que quieren que se haga), las instrucciones (qué mandar y cómo), los criterios de evaluación (cómo van a elegir al ganador, por ejemplo el precio más bajo o el mejor valor), la fecha y hora límite, la fecha límite para preguntas y el nombre del oficial de contratos. Revisa también si hay enmiendas, que son cambios que se publican después.",
            "Luego decide si ofertas o no. Pregúntate: ¿Podemos hacer bien este trabajo? ¿Cumplimos cada requisito, como licencias, seguros y el tipo de contrato reservado? ¿Podemos entregar a tiempo y a un precio que todavía nos deje ganancia? ¿Tenemos trabajos parecidos que mostrar?",
            "Si te saltas una sola instrucción, como un límite de páginas o un formulario obligatorio, pueden rechazar tu oferta. Haz una lista de verificación con las instrucciones y marca cada punto antes de enviar. Un asistente de IA puede ayudarte a resumir una convocatoria pública larga, pero tienes que leer tú mismo las instrucciones reales."
          ],
          steps: ["Busca la descripción del trabajo, las instrucciones y los criterios de evaluación.", "Anota la fecha y hora límite, la fecha límite para preguntas y el oficial de contratos.", "Revisa si hay enmiendas.", "Responde las cuatro preguntas para decidir si ofertas o no.", "Si ofertas, convierte las instrucciones en una lista de verificación y marca cada punto."],
          words: [["Convocatoria", "la petición de ofertas del gobierno, como una RFQ, una RFP o una IFB. En inglés se dice solicitation."], ["Descripción del trabajo", "la parte que dice exactamente qué trabajo se quiere. En inglés se dice statement of work."], ["Criterios de evaluación", "cómo va a elegir el gobierno al ganador."], ["Enmienda", "un cambio a una convocatoria que se publica después de que sale por primera vez."], ["Oficial de contratos", "la persona del gobierno con autoridad para firmar el contrato. En inglés se dice contracting officer."]],
          slides: [
            { title: "Nombres que vas a ver", bullets: ["RFQ: Request for Quote (cotización)", "RFP: Request for Proposal (propuesta)", "IFB: Invitation for Bid (licitación)"] },
            { title: "Busca primero estas partes", bullets: ["Descripción del trabajo e instrucciones", "Criterios de evaluación", "Fecha límite, fecha para preguntas, enmiendas"] },
            { title: "¿Ofertar o no?", bullets: ["¿Podemos hacerlo bien?", "¿Cumplimos cada requisito?", "¿Entregamos a tiempo y con ganancia? ¿Trabajos previos?"] },
            { title: "Sigue cada instrucción", bullets: ["Un solo error puede hacer que te rechacen", "Haz una lista y marca cada punto"] }
          ],
          tryIt: "Abre una de las oportunidades que encontraste en la lección anterior. Escribe en una oración la descripción del trabajo, los criterios de evaluación, la fecha y hora límite y la fecha límite para preguntas. Luego responde las cuatro preguntas para decidir si ofertas o no, y decide.",
          youCanNow: "encontrar las partes clave de una convocatoria y tomar una decisión clara de ofertar o no."
        },
        {
          title: "Escribir una declaración de capacidades",
          minutes: 6,
          goal: "Escribir una declaración de capacidades de una página que le diga a un comprador qué haces y cómo contactarte.",
          text: [
            "Una declaración de capacidades (capability statement) es un resumen de una página de tu negocio para compradores del gobierno y contratistas principales. La mandas cuando conoces a compradores, en eventos para proveedores y cuando te presentas ante un oficial de contratos o un SB/DVBE Advocate.",
            "Tiene cuatro partes. Competencias principales: lo que mejor haces, en viñetas cortas. Experiencia previa: dos o tres trabajos que has hecho, con el tipo de cliente, lo que hiciste y el resultado. Diferenciadores: lo que te hace diferente, como rapidez, una habilidad especial o presencia local. Datos de la empresa: nombre legal, UEI, código CAGE si tienes uno, códigos NAICS, certificaciones y datos de contacto.",
            "Que sea de una página y fácil de leer de un vistazo, con tu logo y tu contacto arriba. Usa las palabras del comprador de la descripción del trabajo cuando sirvan. Haz una versión para cada tipo de comprador si vendes servicios distintos.",
            "Un asistente de IA puede ayudarte a acortar las viñetas o a hacerlas más claras. No pegues números privados como tus datos bancarios o tu EIN; tu UEI y tus códigos NAICS sí se pueden mostrar."
          ],
          steps: ["Escribe de tres a cinco competencias principales en viñetas cortas.", "Agrega dos o tres ejemplos de experiencia previa: tipo de cliente, trabajo y resultado.", "Escribe dos o tres diferenciadores.", "Agrega los datos de la empresa: nombre legal, UEI, código CAGE, códigos NAICS, certificaciones y contacto.", "Haz que quepa en una página y guárdala como PDF."],
          words: [["Declaración de capacidades", "un resumen de una página de tu negocio para compradores del gobierno. En inglés se dice capability statement."], ["Competencias principales", "las cosas que tu negocio hace mejor."], ["Experiencia previa", "trabajos que has hecho antes y que muestran que puedes cumplir. En inglés se dice past performance."], ["Diferenciador", "algo que hace que tu negocio sea distinto de otros."], ["Código CAGE", "un código que identifica a los negocios que trabajan para el gobierno; se asigna con el registro en SAM."]],
          slides: [
            { title: "Qué es", bullets: ["Una página sobre tu negocio", "Para compradores del gobierno y contratistas principales", "Mándala cuando te presentes"] },
            { title: "Cuatro partes", bullets: ["Competencias principales", "Experiencia previa", "Diferenciadores", "Datos de la empresa: UEI, NAICS, certificaciones, contacto"] },
            { title: "Que se lea de un vistazo", bullets: ["Una página, logo y contacto arriba", "Usa las palabras del comprador cuando sirvan", "Una versión para cada tipo de comprador"] },
            { title: "Usar la IA para pulirla", bullets: ["Acorta y aclara las viñetas", "Nada de datos bancarios ni EIN en las instrucciones", "El UEI y los códigos NAICS sí se pueden mostrar"] }
          ],
          tryIt: "Tarea final: escribe tu declaración de capacidades de una página con competencias principales, experiencia previa, diferenciadores y datos de la empresa. Luego encuentra una oportunidad real en SAM.gov o en Cal eProcure que coincida con un código NAICS de tu declaración y anota su título y su fecha límite.",
          youCanNow: "escribir una declaración de capacidades de una página y relacionarla con oportunidades reales del gobierno."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Encontrar y ganar contratos",
        questions: [
          { q: "¿Dónde publican las agencias federales las oportunidades de contratos?", options: ["SAM.gov", "Una red social", "El sitio web de tu banco", "La oficina de licencias de manejo (DMV)"], answer: 0, why: "Las oportunidades de contratos federales se publican en SAM.gov." },
          { q: "¿Qué parte de una convocatoria te dice cómo van a elegir al ganador?", options: ["La portada", "Los criterios de evaluación", "El logo de la agencia", "Los números de página"], answer: 1, why: "Los criterios de evaluación explican cómo se juzgan las ofertas." },
          { q: "No puedes entregar para la fecha que piden. ¿Cuál es la decisión inteligente?", options: ["Ofertar de todos modos y esperar", "Prometer y llegar tarde", "Decidir no ofertar en esta", "Ignorar la fecha"], answer: 2, why: "Si no puedes cumplir un requisito clave, no ofertar protege tu reputación." },
          { q: "¿Qué va en la parte de datos de la empresa de una declaración de capacidades?", options: ["El número de tu cuenta de banco", "Tu EIN", "Tu contraseña", "Tu UEI y tus códigos NAICS"], answer: 3, why: "El UEI, los códigos NAICS, las certificaciones y los datos de contacto ayudan a los compradores a encontrarte y revisarte." },
          { q: "¿Cuál es una buena manera de empezar para un pequeño negocio nuevo?", options: ["Ofertar solo en los contratos más grandes", "Ser subcontratista de un contratista principal", "Pagarle a alguien para que gane contratos por ti", "Esperar a que el gobierno te llame"], answer: 1, why: "Ser subcontratista te da experiencia previa con menos riesgo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Ganar contratos con el gobierno",
    questions: [
      { q: "¿Qué es SAM.gov?", options: ["El sitio federal donde los negocios se registran para venderle al gobierno", "Un programa de préstamos", "Un formulario de impuestos", "Solo un sitio web estatal"], answer: 0, why: "SAM.gov es el System for Award Management." },
      { q: "¿Cuántos caracteres tiene un UEI?", options: ["4", "12", "20", "100"], answer: 1, why: "Un UEI es un código de 12 caracteres con letras y números." },
      { q: "Con solo un UEI y sin registro completo:", options: ["Puedes ganar cualquier contrato", "Te pagan automáticamente", "No puedes solicitar directamente adjudicaciones federales", "Quedas certificado como 8(a)"], answer: 2, why: "SAM.gov dice que un UEI solo no te deja solicitar adjudicaciones federales." },
      { q: "¿Cuánto cuesta registrarte en SAM.gov?", options: ["$500", "$99 al año", "Un porcentaje de cada contrato", "Nada; es gratis"], answer: 3, why: "El registro es gratis; ignora las ofertas pagadas para registrarte." },
      { q: "¿Dónde debes escribir tus datos bancarios para SAM.gov?", options: ["Solo en SAM.gov", "En un asistente de IA", "En un correo a un desconocido", "En redes sociales"], answer: 0, why: "Los datos privados van solo en el sitio oficial." },
      { q: "¿Dónde puedes buscar códigos NAICS?", options: ["En un blog cualquiera", "En census.gov/naics", "En la cámara de tu teléfono", "En un mensaje de texto"], answer: 1, why: "La Oficina del Censo de Estados Unidos publica los códigos NAICS." },
      { q: "Un estándar de tamaño te dice:", options: ["El tamaño de tu logo", "Qué tan grande tiene que ser tu oficina", "Lo más grande que puedes ser y todavía contar como pequeño para un código NAICS", "Cuántos contratos puedes ganar"], answer: 2, why: "Los estándares de tamaño fijan el límite para ser pequeño negocio en cada código NAICS." },
      { q: "Un contrato reservado (set-aside) es:", options: ["Una devolución de impuestos", "Un préstamo", "Un cargo por pago tardío", "Un contrato por el que solo pueden competir ciertos negocios"], answer: 3, why: "Los contratos reservados se guardan para grupos como los pequeños negocios." },
      { q: "¿Dónde solicitas certificaciones federales de la SBA como WOSB y VetCert?", options: ["En certifications.sba.gov", "Solo con un asesor pagado", "En la biblioteca de tu condado", "En irs.gov"], answer: 0, why: "Las certificaciones de la SBA se solicitan en certifications.sba.gov." },
      { q: "¿Qué certificación es para negocios que son por lo menos 51% propiedad de mujeres ciudadanas de Estados Unidos, y controlados por ellas?", options: ["HUBZone", "WOSB", "DVBE", "Solo 8(a)"], answer: 1, why: "WOSB significa Women-Owned Small Business, pequeño negocio de mujeres." },
      { q: "¿Quién certifica ahora a los pequeños negocios de veteranos y de veteranos con discapacidad por servicio para contratos federales?", options: ["El IRS", "Tu ciudad", "La SBA, por medio de VetCert", "Nadie"], answer: 2, why: "El programa VetCert de la SBA se encargó de la certificación en 2023." },
      { q: "¿Dónde solicitas la certificación Small Business y DVBE de California?", options: ["En SAM.gov", "En el FBI", "En un banco", "En Cal eProcure, por medio del Department of General Services"], answer: 3, why: "La certificación SB y DVBE de California se hace en Cal eProcure." },
      { q: "Una DVBE de California tiene que ser por lo menos 51% propiedad de:", options: ["Veteranos con discapacidad", "Cualquier amigo de veteranos", "Inversionistas de otros estados", "Trabajadores del gobierno"], answer: 0, why: "Las DVBE son por lo menos 51% propiedad de veteranos con discapacidad, que también las administran." },
      { q: "¿Cómo puedes recibir las nuevas oportunidades de SAM.gov?", options: ["Llamar a cada agencia todos los días", "Guardar tu búsqueda para que las coincidencias te lleguen por correo", "Pagar por alertas", "No se puede"], answer: 1, why: "Las búsquedas guardadas te mandan las nuevas coincidencias por correo." },
      { q: "Un contratista principal es:", options: ["Un trabajador del gobierno", "Un banco", "El negocio que tiene el contrato con el gobierno", "Una certificación"], answer: 2, why: "El contratista principal tiene el contrato y puede contratar subcontratistas." },
      { q: "¿Quién te puede ayudar gratis a encontrar licitaciones?", options: ["Una empresa que cobra por registrarte", "Un desconocido en internet", "Nadie", "Un APEX Accelerator"], answer: 3, why: "Los APEX Accelerators dan ayuda gratis para contratar con el gobierno." },
      { q: "¿Qué es una enmienda a una convocatoria?", options: ["Un cambio que se publica después de que sale por primera vez", "El logo de tu empresa", "Un formulario de impuestos", "Un depósito en el banco"], answer: 0, why: "Las enmiendas cambian una convocatoria, así que siempre revísalas." },
      { q: "¿Qué parte dice exactamente qué trabajo se quiere?", options: ["La fecha límite", "La descripción del trabajo (statement of work)", "El cargo del oficial de contratos", "La dirección de la agencia"], answer: 1, why: "La descripción del trabajo describe el trabajo." },
      { q: "¿Por qué convertir las instrucciones de una convocatoria en una lista de verificación?", options: ["Para hacerla más larga", "Para saltarte pasos", "Si te saltas una instrucción, pueden rechazar tu oferta", "Lo exige SAM.gov"], answer: 2, why: "Una lista de verificación te ayuda a cumplir cada instrucción." },
      { q: "¿Cuál es una parte de una declaración de capacidades?", options: ["La contraseña de tu banco", "Solo la dirección de tu casa", "Una historia de diez páginas", "La experiencia previa"], answer: 3, why: "La experiencia previa les muestra a los compradores que puedes cumplir." }
    ]
  }
};
