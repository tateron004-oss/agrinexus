"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-drones-regulations.js. See scripts/koachlearn-courses/README.md, "Translations".
// Official names of Kenyan and Nigerian laws are given in Spanish with their English abbreviations (KCAA, NCAA, Nig.CARs, ROC, RPL) kept, since those are what the authorities use.

const KCAA_UAS = { name: "Autoridad de Aviación Civil de Kenia (KCAA): Sistemas de aeronaves no tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Sistema en línea de drones (RPAS) de la KCAA", url: "https://rpas.kcaa.or.ke/" };
const KCAA_FEES = { name: "KCAA: Reglamento de Aviación Civil (tasas y cargos regulatorios para sistemas de aeronaves no tripuladas), 2020 (L.N. 4 de 2021)", url: "https://www.kcaa.or.ke/sites/default/files/docs/uas/UASCharges.pdf" };
const KCAA_ROC = { name: "KCAA: Certificado de Operador Aéreo Remoto (ROC)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/roc" };
const KCAA_UTO = { name: "KCAA: Organizaciones de formación en sistemas de aeronaves no tripuladas (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_REGS_2026 = { name: "KCAA: Reglamentos de Aviación Civil de Kenia 2026 (reglamentos publicados)", url: "https://www.kcaa.or.ke/published-regs-2026" };
const KENYA_LAW_UAS = { name: "Kenya Law: Reglamento de Aviación Civil (sistemas de aeronaves no tripuladas), 2020 (L.N. 42 de 2020)", url: "https://new.kenyalaw.org/akn/ke/act/ln/2020/42" };
const NCAA_P21 = { name: "Autoridad de Aviación Civil de Nigeria (NCAA): Nig.CARs 2023, Parte 21, sistemas de aeronaves pilotadas a distancia", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_WHO_AERIAL = { name: "FAO y OMS: Guía para la aplicación aérea de plaguicidas (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const PCPB = { name: "Junta de Productos para el Control de Plagas (PCPB, Kenia)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Agencia Nacional de Administración y Control de Alimentos y Medicamentos (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Oficina del Comisionado de Protección de Datos (Kenia)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Comisión de Protección de Datos de Nigeria (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-drones-regulations-es",
  lang: "es",
  translationOf: "agri-drones-regulations",
  category: "Agriculture (Africa)",
  name: "Drones agrícolas en África: normas de aviación y licencias",
  skills: "Encontrar y leer las normas nacionales sobre drones, Clasificar un dron y una operación según el riesgo, Identificar las licencias y certificados que necesita un trabajo, Manejar operaciones especiales (fumigación, BVLOS, cerca de aeródromos), Armar un expediente de cumplimiento, Mantenerse al día con los cambios en las normas",
  outcome: "leer las normas sobre drones de tu país, saber qué registros, licencias, certificados y autorizaciones necesita un trabajo agrícola con dron y armar un expediente de cumplimiento completo para un negocio de servicios con drones.",
  about: [
    "Este curso es para personas que planean volar drones de forma profesional en la agricultura africana: emprendedores de servicios con drones, gerentes de agronegocios y plantaciones, líderes de cooperativas y de extensión, y jóvenes que se forman como pilotos a distancia. Va más a fondo que el resumen del itinerario de monitoreo.",
    "El Capítulo 1 explica cómo se construye la ley de drones y luego recorre las normas de Kenia y Nigeria: el Reglamento de Aviación Civil (sistemas de aeronaves no tripuladas) de 2020, a cargo de la Autoridad de Aviación Civil de Kenia (KCAA), y la Parte 21 del Reglamento de Aviación Civil de Nigeria de 2023, a cargo de la Autoridad de Aviación Civil de Nigeria (NCAA). El Capítulo 2 trata de las licencias y la certificación de operadores, las operaciones especiales como la fumigación y los vuelos cerca de aeródromos, y cómo armar y mantener un expediente de cumplimiento.",
    "Esto es educación, no asesoría legal. Las normas sobre drones son ley, cambian, y otros países africanos tienen su propia autoridad y sus propias normas. Cada lección señala la fuente oficial; confirma todo allí, o con la autoridad o un abogado, antes de actuar. Nunca vueles sin el registro, la licencia y las aprobaciones que exige tu país."
  ],
  finalTask: "Arma un expediente de cumplimiento para un negocio de servicios con drones en tu país que hará mapas de cultivos para agricultores y plantaciones (y, si lo planeas, fumigará): la autoridad y los reglamentos que aplican, con enlaces y la fecha en que los revisaste; la clasificación de tu dron y la categoría de riesgo de la operación; cada registro, permiso, licencia, certificado y autorización necesarios, quién los emite y en qué estado están; los documentos obligatorios (manual de operaciones, seguro, registros de mantenimiento y de vuelo); las aprobaciones adicionales para cualquier fumigación; los pasos de protección de datos; y un calendario para revisar cambios en las normas y renovaciones.",
  chapters: [
    {
      name: "Capítulo 1: La ley de drones en África",
      lessons: [
        {
          title: "Cómo se construye la ley de drones",
          minutes: 5,
          goal: "Encontrar y nombrar las capas de la ley de drones que aplican en tu país.",
          text: [
            "Los países basan sus normas de aviación en estándares internacionales de la OACI, la Organización de Aviación Civil Internacional de la ONU, pero cada país escribe y hace cumplir su propia ley de drones. Por lo general hay una ley de aviación aprobada por el parlamento; reglamentos de drones hechos bajo esa ley; normas de aplicación o manuales con el detalle técnico; una tabla de tasas; y avisos o circulares para casos especiales.",
            "La mayoría de las normas modernas sobre drones clasifican las operaciones según el riesgo. Los vuelos de bajo riesgo (dron pequeño, a la vista, a poca altura, lejos de personas y aeropuertos) tienen los requisitos más ligeros. Los vuelos de mayor riesgo (drones pesados, fuera de la vista, sobre personas, cerca de aeródromos, fumigar o soltar cosas) necesitan más: autorización, operadores certificados, pilotos con licencia y, a veces, aeronaves certificadas.",
            "Para encontrar las normas de tu país, entra al sitio web de la autoridad de aviación civil y busca una sección llamada drones, UAS, RPAS o aeronaves no tripuladas. Descarga los reglamentos, las normas y la tabla de tasas, y anota la fecha. Ejemplos de autoridades: KCAA (Kenia), NCAA (Nigeria) y las autoridades de aviación civil de Ghana, Ruanda, Uganda, Tanzania y Sudáfrica."
          ],
          steps: ["Abre el sitio web de tu autoridad de aviación civil.", "Busca la sección de drones / UAS / RPAS.", "Descarga los reglamentos, las normas de aplicación y la tabla de tasas.", "Anota la fecha y la versión de cada uno.", "Haz una lista de cómo las normas clasifican las operaciones según el riesgo."],
          words: [["OACI", "la Organización de Aviación Civil Internacional (ICAO en inglés), una agencia de la ONU que fija estándares internacionales de aviación."], ["Reglamentos", "normas legalmente obligatorias hechas bajo una ley del parlamento."], ["Normas de aplicación", "reglas técnicas detalladas que explican cómo cumplir los reglamentos."], ["Categoría de riesgo", "un grupo de operaciones con un riesgo parecido y requisitos parecidos."]],
          slides: [
            { title: "Capas de la ley de drones", bullets: ["Ley de aviación", "Reglamentos de drones bajo esa ley", "Normas de aplicación y tabla de tasas", "Avisos y circulares"] },
            { title: "Las normas siguen el riesgo", bullets: ["Bajo riesgo: pequeño, a la vista, bajo, lejos de personas", "Alto riesgo: pesado, fuera de la vista, sobre personas", "Fumigar o soltar cosas: más aprobaciones"] },
            { title: "Encuentra tus normas", bullets: ["Sitio de la autoridad: drones, UAS o RPAS", "Descarga reglamentos, normas y tasas", "Anota fecha y versión"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Para tu país, escribe la autoridad de aviación, el nombre y el año de los reglamentos de drones, si hay normas de aplicación y una tabla de tasas, y la fecha en que lo revisaste. Guarda los documentos en una sola carpeta.",
          youCanNow: "encontrar las capas de la ley de drones en tu país y ver cómo clasifican las operaciones según el riesgo."
        },
        {
          title: "Kenia: la KCAA y el Reglamento UAS de 2020",
          minutes: 6,
          goal: "Hacer una lista de las aprobaciones kenianas que probablemente necesita un operador comercial de drones agrícolas.",
          text: [
            "En Kenia, los drones se rigen por el Reglamento de Aviación Civil (sistemas de aeronaves no tripuladas) de 2020, hecho bajo la Ley de Aviación Civil de 2013 y supervisado por la KCAA. La página de drones de la KCAA también publica un Manual de Normas de Aplicación y una tabla de tasas: el Reglamento de Aviación Civil (tasas y cargos regulatorios para sistemas de aeronaves no tripuladas) de 2020.",
            "La tabla de tasas muestra las principales aprobaciones que existen: un permiso de importación y el registro del dron; certificados de aeronavegabilidad; un Certificado de Operador Aéreo Remoto (ROC) para los operadores; autorizaciones de operación para la Categoría A y para las Categorías B y C; licencias para personas, como la licencia de estudiante de piloto a distancia, la licencia de piloto a distancia (RPL) y habilitaciones como la de vuelo fuera del alcance visual; y aprobaciones para organizaciones de formación y revendedores de drones. La KCAA publica en su sitio la lista de titulares de ROC y de organizaciones de formación aprobadas, y las solicitudes se hacen en su sistema en línea de drones.",
            "El sitio de la KCAA también muestra los nuevos Reglamentos de Aviación Civil de Kenia publicados para 2026. Revisa si alguno cambia las normas de drones antes de confiar en las versiones de 2020, y revisa las tasas vigentes el día en que hagas la solicitud."
          ],
          words: [["KCAA", "la Autoridad de Aviación Civil de Kenia, que regula los drones en Kenia."], ["ROC", "Certificado de Operador Aéreo Remoto: la aprobación de la KCAA para que una organización realice operaciones con drones."], ["SRPL / RPL", "licencia de estudiante de piloto a distancia / licencia de piloto a distancia."], ["Certificado de aeronavegabilidad", "una confirmación oficial de que una aeronave está en condiciones seguras de volar."]],
          slides: [
            { title: "La ley de drones de Kenia", bullets: ["Reglamento de Aviación Civil (UAS), 2020", "Hecho bajo la Ley de Aviación Civil de 2013", "Supervisado por la KCAA"] },
            { title: "Aprobaciones en la tabla de tasas", bullets: ["Permiso de importación y registro", "ROC para operadores", "Autorizaciones de operación: Categoría A; B y C", "SRPL, RPL, BVLOS y otras habilitaciones"] },
            { title: "Dónde solicitar y revisar", bullets: ["Sistema en línea de drones de la KCAA", "Listas de titulares de ROC y escuelas", "Revisa los reglamentos 2026 y las tasas vigentes"] }
          ],
          sources: [KCAA_UAS, KENYA_LAW_UAS, KCAA_FEES, KCAA_ROC, KCAA_UTO, KCAA_PORTAL, KCAA_REGS_2026],
          tryIt: "Abre la página de drones y la tabla de tasas de la KCAA. Haz una tabla con cada aprobación que necesitaría un negocio que cobra por hacer mapas de plantaciones de té (dron, personas, organización, operación), con una columna de dónde solicitarla. Deja las tasas como \"revisar el día\".",
          youCanNow: "hacer una lista de los registros, licencias, certificados y autorizaciones kenianos que probablemente necesita un operador comercial de drones agrícolas, y dónde solicitarlos."
        },
        {
          title: "Nigeria: la NCAA y la Parte 21 de las Nig.CARs",
          minutes: 6,
          goal: "Clasificar un dron y una operación según la Parte 21 de Nigeria y hacer una lista de lo que exige.",
          text: [
            "En Nigeria, los drones están cubiertos por la Parte 21 (sistemas de aeronaves pilotadas a distancia, RPAS) del Reglamento de Aviación Civil de Nigeria de 2023, documento Nig.CARs/2023/021, vigente desde el 17 de mayo de 2023 y supervisado por la NCAA. Cubre la certificación, el registro, las operaciones y la vigilancia de los RPAS.",
            "La Parte 21 clasifica las aeronaves por peso: Nano (menos de 250 g), Micro (de 250 g a menos de 2 kg), Pequeña (de 2 kg a menos de 25 kg), Mediana (de 25 kg a 150 kg) y Grande (más de 150 kg), cada una con condiciones y autorización previa de la Autoridad. También usa tres categorías de riesgo operativo: Abierta (el riesgo más bajo, debe estar registrada), Específica (mayor riesgo, necesita autorización) y Certificada (aeronave, operador y piloto certificados, tratada casi como la aviación tripulada). Prevé licencias de piloto a distancia y certificados de operador de RPAS.",
            "La Parte 21 también fija límites de operación, por ejemplo volar a 120 m (400 pies) o menos sobre el suelo en muchos casos, mantenerse a 30 m en horizontal de las personas que no participan en la operación, no volar sobre zonas pobladas y alejarse de los aeródromos (por ejemplo, a menos de 4 km del área de movimiento de un aeródromo controlado, o 10 km para vuelos privados y recreativos) salvo con autorización. Lee el texto completo para conocer las condiciones que aplican a tu operación."
          ],
          words: [["NCAA", "la Autoridad de Aviación Civil de Nigeria, que regula los drones en Nigeria."], ["Nig.CARs", "el Reglamento de Aviación Civil de Nigeria."], ["Abierta / Específica / Certificada", "las tres categorías de riesgo operativo de la Parte 21, de menor a mayor riesgo."], ["Área de movimiento", "la parte de un aeropuerto que usan las aeronaves para despegar, aterrizar y rodar."]],
          slides: [
            { title: "La ley de drones de Nigeria", bullets: ["Nig.CARs 2023, Parte 21: RPAS", "Vigente desde el 17 de mayo de 2023", "Supervisada por la NCAA"] },
            { title: "Clases por peso", bullets: ["Nano < 250 g; Micro de 250 g a < 2 kg", "Pequeña de 2 a < 25 kg; Mediana de 25 a 150 kg", "Grande > 150 kg"] },
            { title: "Categorías de riesgo", bullets: ["Abierta: el riesgo más bajo, registrada", "Específica: necesita autorización", "Certificada: aeronave, operador y piloto certificados"] },
            { title: "Ejemplos de límites", bullets: ["120 m (400 pies) sobre el suelo en muchos casos", "30 m de las personas ajenas", "Distancias a aeródromos salvo autorización"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Un agronegocio nigeriano quiere hacer mapas de fincas de yuca en el estado de Ogun con un multirrotor de 1.2 kg y un multirrotor de 15 kg para fumigar. Usando la Parte 21, escribe la clase de peso de cada dron, la categoría de riesgo probable de cada trabajo y tres preguntas que le harías a la NCAA.",
          youCanNow: "clasificar un dron y una operación según la Parte 21 de Nigeria y hacer una lista de lo que exige."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La ley de drones en África",
        questions: [
          { q: "¿De dónde sacan su fuerza legal los reglamentos nacionales de drones?", options: ["Del manual de un fabricante de drones", "De una ley del parlamento, como una ley de aviación civil", "De las redes sociales", "Del agricultor"], answer: 1, why: "Los reglamentos se hacen bajo una ley aprobada por el parlamento." },
          { q: "¿Qué operación suele tener el mayor riesgo?", options: ["Un dron pequeño a la vista sobre un campo vacío", "Quedarse suspendido a 5 metros", "Un dron pesado fumigando fuera del alcance visual", "Un vuelo en simulador"], answer: 2, why: "El peso, el BVLOS y la fumigación aumentan el riesgo y los requisitos." },
          { q: "En Kenia, ¿qué aprobación de operador necesita una empresa que cobra por hacer mapas de plantaciones?", options: ["Un Certificado de Operador Aéreo Remoto (ROC) de la KCAA", "Una tarjeta de presentación", "Solo un permiso del condado", "Nada"], answer: 0, why: "La KCAA emite ROC a los operadores de drones." },
          { q: "Según la Parte 21 de Nigeria, ¿en qué clase de peso está un dron de 1.2 kg?", options: ["Nano", "Pequeña", "Grande", "Micro"], answer: 3, why: "Micro va de 250 g a menos de 2 kg." },
          { q: "En la Parte 21, la categoría Específica significa:", options: ["Que no aplica ninguna norma", "Mayor riesgo; se necesita autorización para operar", "Solo para juguetes", "Solo para aeronaves tripuladas"], answer: 1, why: "Las operaciones específicas tienen más riesgo y necesitan autorización." }
        ]
      }
    },
    {
      name: "Capítulo 2: Licencias, certificación y cumplimiento",
      lessons: [
        {
          title: "Licencias de piloto y certificados de operador",
          minutes: 5,
          goal: "Planear las aprobaciones de las personas y de la organización para un negocio de servicios con drones.",
          text: [
            "Para un negocio importan dos tipos de aprobación. La persona que vuela necesita la licencia de piloto y las habilitaciones que exijan las normas: en Kenia, la licencia de piloto a distancia (RPL), con formación en una organización aprobada por la KCAA; en Nigeria, una licencia de piloto a distancia según la Parte 21. La organización que vende servicios con drones suele necesitar un certificado de operador: el Certificado de Operador Aéreo Remoto de la KCAA o el Certificado de Operador de RPAS de la NCAA.",
            "La certificación de operador suele pedir pruebas de que el negocio puede operar con seguridad: un manual de operaciones (cómo planeas, vuelas, das mantenimiento e informas), personas responsables con nombre, pilotos formados y con licencia, drones registrados, un sistema de mantenimiento, registros y seguro. La Parte 21, por ejemplo, incluye los certificados de seguro de responsabilidad civil frente a terceros entre los documentos que una operación debe llevar.",
            "Planea tiempo y dinero para esto. Pide a la autoridad su lista actual de requisitos y sus tasas, y pregunta a las organizaciones de formación aprobadas si ayudan con los manuales de operaciones."
          ],
          steps: ["Haz una lista de cada piloto y la licencia y habilitaciones que necesita.", "Revisa qué certificado de operador necesita tu negocio.", "Consigue la lista actual de requisitos de la autoridad.", "Redacta un manual de operaciones: planeación, vuelo, mantenimiento, emergencias, informes.", "Contrata un seguro y organiza los sistemas de registro."],
          words: [["Manual de operaciones", "las reglas escritas de un negocio sobre cómo planea, vuela, mantiene los drones y maneja las emergencias."], ["Seguro de responsabilidad civil frente a terceros", "un seguro que paga si tu operación causa daño a otras personas o a sus bienes."]],
          slides: [
            { title: "Dos tipos de aprobación", bullets: ["La persona: licencia de piloto a distancia y habilitaciones", "El negocio: certificado de operador"] },
            { title: "El certificado de operador pide", bullets: ["Manual de operaciones", "Personas responsables, pilotos con licencia", "Drones registrados, mantenimiento, registros", "Seguro"] },
            { title: "Planéalo", bullets: ["Consigue la lista de requisitos y tasas vigente", "Pregunta a escuelas aprobadas por los manuales", "Date tiempo antes de aceptar trabajos pagados"] }
          ],
          sources: [KCAA_ROC, KCAA_UTO, NCAA_P21],
          tryIt: "Escribe el índice de un manual de operaciones para un pequeño negocio de mapeo de cultivos, con al menos ocho secciones (por ejemplo: organización, responsabilidades, planeación del vuelo, revisiones antes del vuelo, emergencias, mantenimiento, registros, informes de incidentes).",
          youCanNow: "planear las licencias de piloto y el certificado de operador que necesita un negocio de servicios con drones, y qué cubre un manual de operaciones."
        },
        {
          title: "Operaciones especiales: fumigación, BVLOS y aeródromos",
          minutes: 6,
          goal: "Identificar las operaciones que necesitan aprobaciones adicionales y quién las da.",
          text: [
            "Fumigar plaguicidas o soltar cualquier cosa desde un dron es una operación especial. La Parte 21, por ejemplo, prohíbe soltar o descargar cosas de forma que cree un peligro y tiene reglas aparte para las mercancías peligrosas, y la tabla de tasas de Kenia incluye autorizaciones separadas para las categorías de mayor riesgo. Muchos plaguicidas se clasifican como mercancías peligrosas. Cuenta con necesitar una autorización de aviación específica, una aeronave certificada más pesada y tripulaciones formadas.",
            "La fumigación también está sujeta a la ley de plaguicidas. En Kenia, los productos para el control de plagas los regula la Junta de Productos para el Control de Plagas (PCPB); en Nigeria, los agroquímicos los regula la NAFDAC. Pregúntales si el producto se puede aplicar desde el aire y qué formación y equipo de protección necesitan quienes lo aplican. La FAO y la OMS han publicado una guía para la aplicación aérea de plaguicidas. Nunca fumigues, ni ofrezcas fumigar, sin las aprobaciones de aviación y de plaguicidas.",
            "Otras operaciones especiales son volar fuera del alcance visual (BVLOS), de noche, cerca de aeródromos o en ellos, sobre personas o caminos, y en zonas restringidas o protegidas como los parques nacionales. Cada una necesita una aprobación específica. En África son comunes las fincas grandes cerca de pistas de aterrizaje: revisa las distancias y pregunta antes de planear."
          ],
          words: [["Mercancías peligrosas", "materiales que pueden dañar la salud, la seguridad o los bienes durante el transporte, como muchos plaguicidas."], ["Regulador de plaguicidas", "el organismo del gobierno que registra los plaguicidas y controla cómo se usan."], ["BVLOS", "fuera del alcance visual (por sus siglas en inglés)."]],
          slides: [
            { title: "Fumigar y soltar cosas", bullets: ["Operaciones especiales, de mayor riesgo", "Autorización de aviación, aeronave certificada, equipo formado", "Muchos plaguicidas son mercancías peligrosas"] },
            { title: "También la ley de plaguicidas", bullets: ["Kenia: Junta de Productos para el Control de Plagas (PCPB)", "Nigeria: NAFDAC", "Guía de aplicación aérea de la FAO/OMS"] },
            { title: "Otras operaciones especiales", bullets: ["Fuera de la vista, de noche", "Cerca de aeródromos, sobre personas o caminos", "Parques y zonas restringidas"] },
            { title: "La regla", bullets: ["Nada de fumigar sin aprobación de aviación Y de plaguicidas", "Pregunta antes de planear cerca de pistas"] }
          ],
          sources: [NCAA_P21, KCAA_FEES, PCPB, NAFDAC, FAO_WHO_AERIAL],
          tryIt: "Una plantación de caña de azúcar a 3 km de una pista de aterrizaje te pide fumigar un fungicida con dron. Haz una lista de cada aprobación y revisión que necesitarías (aviación, plaguicidas, dueño del terreno, aeródromo) y a quién contactarías para cada una.",
          youCanNow: "reconocer las operaciones especiales y hacer una lista de las aprobaciones de aviación y de plaguicidas que necesitan."
        },
        {
          title: "Armar y mantener un expediente de cumplimiento",
          minutes: 5,
          goal: "Armar un expediente de cumplimiento y un calendario para mantenerlo al día.",
          text: [
            "Un expediente de cumplimiento guarda todo lo que demuestra que tu operación es legal y segura, en un solo lugar que puedas mostrar a un inspector, a un cliente o a una aseguradora. Guarda una copia en papel y una copia digital respaldada.",
            "Incluye: los reglamentos y normas que sigues (con las fechas en que los revisaste); los certificados de registro de cada dron; los permisos de importación; las licencias y habilitaciones de los pilotos; el certificado de operador; las autorizaciones de operación; el manual de operaciones; los certificados de seguro; los registros de mantenimiento; las bitácoras de vuelo; los informes de incidentes; los acuerdos con clientes y los permisos de los dueños de los terrenos; y tus pasos de protección de datos (Kenia: ODPC; Nigeria: NDPC) si guardas datos personales de agricultores.",
            "Las normas, las tasas y los formularios cambian. Lleva un calendario de renovación para cada licencia y certificado, y revisa el sitio web de la autoridad con una frecuencia fija, por ejemplo cada mes, y antes de cada nuevo tipo de trabajo. Anota qué revisaste y cuándo."
          ],
          steps: ["Crea el expediente: en papel y digital respaldado.", "Añade reglamentos, certificados, licencias, autorizaciones, manual y seguro.", "Añade registros de mantenimiento, bitácoras de vuelo, informes de incidentes y acuerdos.", "Añade el registro o los pasos de protección de datos si guardas datos personales.", "Fija un calendario de renovaciones y una revisión mensual de las normas."],
          words: [["Cumplimiento", "seguir las leyes y normas que te aplican."], ["Renovación", "volver a solicitar antes de que venza una licencia o un certificado."]],
          slides: [
            { title: "Un solo lugar para las pruebas", bullets: ["Para inspectores, clientes y aseguradoras", "Copia en papel y digital respaldada"] },
            { title: "Qué incluye", bullets: ["Reglamentos, registros, permisos", "Licencias, certificado de operador, autorizaciones", "Manual, seguro, mantenimiento, bitácoras, incidentes"] },
            { title: "Incluye también", bullets: ["Acuerdos con clientes y dueños de terrenos", "Pasos de protección de datos (ODPC, NDPC)"] },
            { title: "Mantenlo al día", bullets: ["Calendario de renovaciones", "Revisa las normas cada mes y antes de trabajos nuevos", "Anota qué revisaste y cuándo"] }
          ],
          sources: [KCAA_UAS, KCAA_REGS_2026, NCAA_P21, ODPC, NDPC],
          tryIt: "Tarea final: arma el expediente de cumplimiento de un negocio de servicios con drones en tu país: autoridad y reglamentos con fechas, clasificación y categoría de riesgo, cada aprobación y su estado, documentos obligatorios, aprobaciones adicionales para fumigar si lo planeas, pasos de protección de datos y un calendario de renovaciones y revisión de normas.",
          youCanNow: "armar y mantener un expediente de cumplimiento que demuestre que tu operación con drones es legal y segura."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Licencias, certificación y cumplimiento",
        questions: [
          { q: "¿Quién suele necesitar un certificado de operador?", options: ["La organización que vende servicios con drones", "Cada agricultor cuyo campo se mapea", "La tienda de drones", "Nadie"], answer: 0, why: "Los certificados de operador aprueban al negocio que realiza las operaciones." },
          { q: "¿Qué es un manual de operaciones?", options: ["La guía de usuario del dron", "Las reglas escritas de un negocio para planear, volar, dar mantenimiento y manejar emergencias", "Un folleto de ventas", "Un recibo de pago de tasas"], answer: 1, why: "Las autoridades piden a los operadores que muestren cómo operan con seguridad." },
          { q: "En Kenia, ¿qué organismo regula los productos para el control de plagas?", options: ["La KCAA", "La ODPC", "La Junta de Productos para el Control de Plagas (PCPB)", "La NDPC"], answer: 2, why: "La PCPB regula los productos para el control de plagas; fumigar también necesita aprobación de aviación." },
          { q: "Un cliente quiere que un dron fumigue cerca de una pista de aterrizaje. Tu primer paso es:", options: ["Fumigar temprano en la mañana", "Fumigar solo la mitad del campo", "Ignorar la pista", "Revisar las aprobaciones de aviación y de plaguicidas y las reglas de distancia a aeródromos"], answer: 3, why: "Tanto la fumigación como la cercanía a un aeródromo necesitan aprobaciones específicas." },
          { q: "¿Con qué frecuencia debes revisar los cambios en las normas?", options: ["Con una frecuencia fija, como cada mes, y antes de nuevos tipos de trabajo", "Nunca", "Solo cuando te multen", "Cada diez años"], answer: 0, why: "Las normas y las tasas cambian; un calendario te mantiene al día." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Drones agrícolas en África: normas de aviación y licencias",
    questions: [
      { q: "La OACI es:", options: ["El regulador de drones de Kenia", "La Organización de Aviación Civil Internacional de la ONU", "Una marca de drones", "Un plaguicida"], answer: 1, why: "La OACI fija los estándares internacionales sobre los que construyen los países." },
      { q: "¿Quién escribe y hace cumplir la ley de drones en cada país africano?", options: ["La OACI directamente", "Los fabricantes de drones", "La propia autoridad de aviación civil de cada país", "Solo la Unión Africana"], answer: 2, why: "Cada país controla su espacio aéreo y sus normas de drones." },
      { q: "Las normas de aplicación son:", options: ["Reglas técnicas detalladas que explican cómo cumplir los reglamentos", "Normas de publicidad", "Variedades de cultivos", "Pólizas de seguro"], answer: 0, why: "Contienen el detalle técnico detrás de los reglamentos." },
      { q: "Los principales reglamentos de drones de Kenia son:", options: ["La Parte 21 de las Nig.CARs", "La Ley de Protección de Datos de 2019", "La Ley de Productos para el Control de Plagas", "El Reglamento de Aviación Civil (sistemas de aeronaves no tripuladas) de 2020"], answer: 3, why: "La KCAA supervisa el Reglamento UAS de 2020." },
      { q: "La tabla de tasas de la KCAA incluye autorizaciones de operación para:", options: ["La Categoría A, y las Categorías B y C", "Solo juguetes", "Solo aeronaves tripuladas", "Solo importaciones"], answer: 0, why: "Kenia autoriza las operaciones según su categoría de riesgo." },
      { q: "En Kenia, las solicitudes de aprobaciones para drones se hacen en:", options: ["Una oficina del condado", "El sistema en línea de drones de la KCAA", "Una tienda de drones", "Las redes sociales"], answer: 1, why: "La KCAA tiene un sistema RPAS en línea." },
      { q: "Antes de confiar en las normas de drones de Kenia de 2020, también debes revisar:", options: ["Artículos viejos de periódico", "La opinión de un amigo", "Los nuevos reglamentos publicados por la KCAA y las tasas vigentes", "Nada"], answer: 2, why: "Las normas y las tasas pueden cambiar; la KCAA publica los reglamentos nuevos." },
      { q: "Las normas de drones de Nigeria están en:", options: ["El Reglamento UAS de Kenia", "La guía de la FAO", "La Ley de Protección de Datos", "La Parte 21 de las Nig.CARs 2023"], answer: 3, why: "La Parte 21 cubre los RPAS en Nigeria." },
      { q: "Según la Parte 21, ¿en qué clase está un dron de 15 kg?", options: ["Pequeña", "Nano", "Micro", "Grande"], answer: 0, why: "Pequeña va de 2 kg a menos de 25 kg." },
      { q: "La categoría Abierta de la Parte 21:", options: ["No necesita registro", "Es de riesgo más bajo, pero el dron debe estar registrado", "Es para drones pesados de fumigación", "Significa volar en cualquier lugar"], answer: 1, why: "Las operaciones abiertas son de bajo riesgo, pero igual se registran." },
      { q: "La Parte 21 limita muchas operaciones a:", options: ["1,000 m sobre el suelo", "Sin límite", "120 m (400 pies) sobre el suelo", "10 m sobre el suelo"], answer: 2, why: "120 m (400 pies) sobre el suelo es un límite común en la Parte 21." },
      { q: "¿A qué distancia horizontal mínima de las personas ajenas mantiene la Parte 21 muchas operaciones con drones?", options: ["1 m", "3 m", "30 m", "300 km"], answer: 2, why: "La Parte 21 usa 30 m de las personas que no participan en la operación." },
      { q: "Una licencia de piloto a distancia es para:", options: ["La persona que vuela", "El dron", "La finca", "El negocio"], answer: 0, why: "Las licencias son para personas; los certificados son para organizaciones y aeronaves." },
      { q: "El seguro de responsabilidad civil frente a terceros paga cuando:", options: ["Te roban el dron", "Tu operación causa daño a otras personas o a sus bienes", "Bajan los precios de los cultivos", "Apruebas un examen"], answer: 1, why: "Cubre el daño a otros." },
      { q: "En Nigeria, los agroquímicos los regula:", options: ["La NCAA", "La NDPC", "La NAFDAC", "La KCAA"], answer: 2, why: "La NAFDAC regula los productos químicos, incluidos los agroquímicos." },
      { q: "Muchos plaguicidas se clasifican como:", options: ["Alimentos", "Juguetes", "Repuestos", "Mercancías peligrosas"], answer: 3, why: "Las reglas de mercancías peligrosas aplican al llevarlos por aire." },
      { q: "¿Cuál es una operación especial que necesita aprobación específica?", options: ["Volar fuera del alcance visual", "Un vuelo en simulador", "Leer los reglamentos", "Cargar las baterías"], answer: 0, why: "El BVLOS es de mayor riesgo y necesita aprobación." },
      { q: "Un expediente de cumplimiento es:", options: ["Solo una lista de clientes", "Un solo lugar con todas las pruebas de que tu operación es legal y segura", "Una pieza del dron", "Una etiqueta de plaguicida"], answer: 1, why: "Guarda certificados, licencias, manuales, registros y más." },
      { q: "Si tu negocio guarda números de teléfono de agricultores en Kenia, ¿qué ley también aplica?", options: ["Ninguna", "La Parte 21 de las Nig.CARs", "La Ley de Protección de Datos de 2019, supervisada por la ODPC", "Solo el manual del dron"], answer: 2, why: "Los datos personales están cubiertos por la ley de protección de datos de Kenia." },
      { q: "Este curso es:", options: ["Asesoría legal para tu caso", "Una licencia de piloto a distancia", "Un permiso para volar", "Educación; confirma todo con la autoridad oficial"], answer: 3, why: "Las normas cambian; deciden las fuentes oficiales y los profesionales." }
    ]
  }
};
