"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-drones-programs.js. See scripts/koachlearn-courses/README.md, "Translations".

const ODPC = { name: "Oficina del Comisionado de Protección de Datos (Kenia)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Comisión de Protección de Datos de Nigeria (NDPC)", url: "https://ndpc.gov.ng" };
const QGIS = { name: "QGIS (SIG libre y de código abierto)", url: "https://qgis.org/" };
const COPERNICUS = { name: "Copernicus Browser (imágenes satelitales Sentinel gratuitas)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_ITU_DRONES = { name: "FAO y UIT: E-agriculture in Action: drones para la agricultura (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const KCAA_UAS = { name: "Autoridad de Aviación Civil de Kenia (KCAA): Sistemas de aeronaves no tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Autoridad de Aviación Civil de Nigeria (NCAA): Nig.CARs 2023, Parte 21, sistemas de aeronaves pilotadas a distancia", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-programs-es",
  lang: "es",
  translationOf: "agri-drones-programs",
  category: "Agriculture (Africa)",
  name: "Drones para el monitoreo agrícola 5: integración de datos, SIG y diseño de programas",
  skills: "Organizar los datos del dron y hacer copias de seguridad, Combinar mapas de dron con capas SIG e imágenes satelitales, Proteger los datos de los agricultores y obtener su consentimiento, Definir el objetivo y los usuarios de un programa de monitoreo, Planear el equipo humano, el equipo técnico, el calendario y el presupuesto, Medir e informar los resultados",
  outcome: "diseñar un programa de monitoreo agrícola con drones para un grupo de agricultores: su objetivo, sus usuarios, el plan de datos con integración SIG y protección de datos, el equipo, el calendario, el presupuesto, cómo se paga a sí mismo y cómo medirás e informarás los resultados.",
  about: [
    "Este es el Curso 5 del itinerario de monitoreo con drones. Es para gerentes de extensión, líderes de cooperativas y grupos de agricultores, personal de agricultura de condados y estados, oficiales de programas de ONG, gerentes de agronegocios y emprendedores de drones de Kenia, Nigeria y toda África que quieren hacer monitoreo con drones para muchas fincas, no solo para una.",
    "El Capítulo 1 trata de los datos: nombrar, guardar y respaldar los datos del dron; juntar en un SIG (sistema de información geográfica) los mapas de dron con los límites de los campos, las imágenes satelitales y los registros de la finca; y proteger los datos personales de los agricultores según leyes como la Ley de Protección de Datos de Kenia de 2019 y la Ley de Protección de Datos de Nigeria de 2023. El Capítulo 2 trata del diseño del programa: partir de un problema real y de usuarios reales, planear personas, equipo, vuelos y dinero, y demostrar que el programa funciona.",
    "Al final tendrás un diseño de programa que podrías presentar a la junta de una cooperativa, a una oficina de condado o de estado, a un donante o a un inversionista. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Escribe un diseño de programa de dos páginas para el monitoreo con drones de una cooperativa de 200 pequeños agricultores (por ejemplo, maíz y frijol en Trans Nzoia, café en Nyeri o yuca en el estado de Ogun): el problema y el objetivo, los usuarios y lo que recibe cada uno, el plan de datos (almacenamiento, capas SIG, uso de satélites, consentimiento y protección de datos), el equipo humano y técnico, el calendario de vuelos de una temporada, un presupuesto sencillo con la forma de pagar el servicio, las medidas de éxito y cómo se informarán los resultados.",
  chapters: [
    {
      name: "Capítulo 1: Manejo e integración de datos",
      lessons: [
        {
          title: "Organizar, guardar y respaldar los datos del dron",
          minutes: 5,
          goal: "Armar un sistema de carpetas, nombres y copias de seguridad para los datos de dron de muchas fincas.",
          text: [
            "Un solo vuelo de mapeo puede producir cientos de fotos y varios mapas grandes. Con 200 fincas y una temporada completa, eso se vuelve miles de archivos. Sin un sistema, los datos se pierden, se mezclan o se sobrescriben, y el programa pierde la confianza.",
            "Usa una sola estructura de carpetas clara y una sola regla de nombres para todos: por ejemplo Programa / ID de finca / ID de campo / Fecha / originales, procesados, informes. En los nombres de archivo usa un número de ID de finca en lugar del nombre del agricultor. Lleva un registro sencillo (una hoja de cálculo) de cada vuelo: fecha, ID de finca, campo, piloto, dron, archivos, procesado sí o no.",
            "Sigue la idea de respaldo 3-2-1: tres copias, en dos tipos distintos de almacenamiento (por ejemplo, una laptop y un disco externo), con una copia en otro lugar o en un servicio de nube confiable. Revisa que las copias abran. Decide cuánto tiempo guardas las fotos originales, porque llenan el almacenamiento muy rápido."
          ],
          steps: ["Acuerden una sola estructura de carpetas y regla de nombres para todo el equipo.", "Dale un número de ID a cada finca y campo; deja los nombres fuera de los nombres de archivo.", "Lleva una hoja de cálculo de registro de vuelos.", "Respalda: tres copias, dos tipos de almacenamiento, una fuera de la oficina.", "Fija cuánto tiempo se guardan las fotos originales."],
          words: [["Datos originales", "las fotos y registros tal como salen del dron."], ["Copia de seguridad", "una copia extra de los datos que se guarda por si se pierde la original."], ["Registro", "una lista que anota cada vuelo y sus archivos."]],
          slides: [
            { title: "Los datos crecen rápido", bullets: ["Cientos de fotos por vuelo", "Miles de archivos por temporada", "Datos perdidos o mezclados quitan confianza"] },
            { title: "Un solo sistema para todos", bullets: ["Programa / ID de finca / ID de campo / Fecha", "Originales, procesados, informes", "IDs, no nombres, en los archivos"] },
            { title: "Lleva un registro de vuelos", bullets: ["Fecha, finca, campo, piloto, dron", "Archivos y estado del procesamiento"] },
            { title: "Respaldo 3-2-1", bullets: ["Tres copias", "Dos tipos de almacenamiento", "Una copia en otro lugar"] }
          ],
          tryIt: "Crea en tu computadora o teléfono la estructura de carpetas para un programa de ejemplo con tres fincas, y empieza una hoja de registro de vuelos con las columnas de esta lección. Añade dos vuelos de ejemplo.",
          youCanNow: "organizar, registrar y respaldar los datos de dron de un programa con muchas fincas."
        },
        {
          title: "Combinar mapas de dron con SIG, satélites y registros de la finca",
          minutes: 6,
          goal: "Armar un proyecto SIG que ponga en capas los mapas de dron, los límites de los campos, las imágenes satelitales y los registros de la finca.",
          text: [
            "Un SIG te deja apilar distintos tipos de datos en un solo mapa. Para un programa, las capas base son los límites de los campos (recorridos con el GPS del teléfono o dibujados sobre un mapa de dron) y los puntos de las fincas. Encima van los ortomosaicos y mapas NDVI del dron, las imágenes satelitales gratuitas y registros como la fecha de siembra, la variedad, los insumos y la cosecha.",
            "Las imágenes satelitales gratuitas de Sentinel-2, que se ven en el Copernicus Browser, llegan cada pocos días con unos 10 metros por píxel. Son demasiado gruesas para ver plantas individuales, pero sirven para vigilar las 200 fincas entre vuelos de dron. Usa los satélites para decidir qué fincas necesitan una visita del dron, y los drones para el detalle.",
            "Une los registros a los campos con el ID de campo, para poder hacer preguntas como: ¿los campos que recibieron el consejo del dron cosecharon más? QGIS puede unir una hoja de cálculo a una capa de campos por su ID. Usa el mismo sistema de coordenadas en todas las capas, o no van a encajar."
          ],
          steps: ["Haz una capa de límites de campos con un ID de campo para cada uno.", "Añade los mapas de dron de los campos que volaste.", "Añade una imagen satelital gratuita de la zona del mismo periodo.", "Une tu hoja de registros a la capa de campos por el ID de campo.", "Revisa que todas las capas encajen (mismo sistema de coordenadas)."],
          words: [["Límite del campo", "una figura en un mapa que marca el contorno de un campo."], ["Sentinel-2", "un par de satélites europeos cuyas imágenes son gratuitas; unos 10 m por píxel."], ["Unión", "enlazar una tabla con las figuras de un mapa usando un ID compartido."], ["Sistema de coordenadas", "la regla que usa un mapa para ubicar las cosas en la Tierra; las capas deben compartir uno para encajar."]],
          slides: [
            { title: "Apila tus capas", bullets: ["Límites de campos y puntos de fincas", "Mapas de dron y NDVI", "Imágenes satelitales", "Registros de siembra, insumos, cosecha"] },
            { title: "Satélite más dron", bullets: ["Sentinel-2: gratis, cada pocos días, unos 10 m", "Vigila todas las fincas entre vuelos", "Manda el dron donde hace falta detalle"] },
            { title: "Une los registros por ID de campo", bullets: ["Une hojas de cálculo a los campos en QGIS", "Pregunta: ¿los campos asesorados cosecharon más?", "Mismo sistema de coordenadas en todas las capas"] }
          ],
          sources: [QGIS, COPERNICUS],
          tryIt: "Abre el Copernicus Browser y busca tu zona. Luego, en QGIS, dibuja dos límites de campo de ejemplo, ponles ID de campo y únelos a una pequeña hoja de cálculo con la fecha de siembra y la variedad de cada uno.",
          youCanNow: "combinar mapas de dron, imágenes satelitales, límites de campos y registros de la finca en un solo proyecto SIG."
        },
        {
          title: "Proteger los datos de los agricultores y obtener su consentimiento",
          minutes: 5,
          goal: "Recolectar y usar los datos de los agricultores conforme a la ley, con consentimiento claro y almacenamiento seguro.",
          text: [
            "Un programa de monitoreo guarda datos personales: nombres, números de teléfono, números de dinero móvil, ubicaciones de fincas, cosechas y fotos de viviendas. Las leyes de protección de datos aplican. En Kenia, la Ley de Protección de Datos de 2019 está a cargo de la Oficina del Comisionado de Protección de Datos (ODPC), que registra a los responsables y encargados del tratamiento de datos. En Nigeria, la Ley de Protección de Datos de Nigeria de 2023 está a cargo de la Comisión de Protección de Datos de Nigeria (NDPC). Otros países tienen sus propias leyes. Revisa si tu organización debe registrarse y qué exige la ley.",
            "Obtén un consentimiento claro en el idioma del agricultor: qué recolectas, para qué, quién lo ve, cuánto tiempo lo guardas, y que puede decir que no o pedir que se borre. Recolecta solo lo que necesitas. No compartas datos con compradores, prestamistas u otros sin permiso.",
            "Mantén los datos seguros: contraseñas en laptops y teléfonos, acceso limitado y, cuando se pueda, los datos personales guardados aparte de los mapas. Los agricultores deben sacar provecho de sus propios datos, como sus mapas e informes, no solo regalarlos."
          ],
          steps: ["Haz una lista de los datos personales que guardará el programa.", "Revisa la ley de protección de datos de tu país y si debes registrarte.", "Escribe una declaración de consentimiento corta en el idioma del agricultor.", "Recolecta solo lo que necesitas; guárdalo con contraseñas y acceso limitado.", "Dales a los agricultores sus propios mapas e informes."],
          words: [["Datos personales", "información sobre una persona que se puede identificar, como el nombre, el teléfono o la ubicación de la finca."], ["Consentimiento", "un sí claro de una persona, después de entender qué pasará con sus datos."], ["Responsable del tratamiento", "la organización que decide para qué y cómo se usan los datos personales."]],
          slides: [
            { title: "Tu programa guarda datos personales", bullets: ["Nombres, teléfonos, números de dinero móvil", "Ubicación de fincas, cosechas, fotos"] },
            { title: "La ley aplica", bullets: ["Kenia: Ley de Protección de Datos 2019, ODPC", "Nigeria: Ley de Protección de Datos 2023, NDPC", "Otros países: su propia ley"] },
            { title: "Consentimiento y datos mínimos", bullets: ["Qué, para qué, quién lo ve, cuánto tiempo", "Los agricultores pueden decir que no", "Recolecta solo lo necesario"] },
            { title: "Seguro y justo", bullets: ["Contraseñas, acceso limitado", "Nada se comparte sin permiso", "Los agricultores reciben sus mapas"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Escribe una declaración de consentimiento de cinco frases para los agricultores que se unen a un programa de monitoreo con drones, en palabras sencillas (y en un idioma local si puedes): qué recolectas, para qué, quién lo ve, cuánto tiempo lo guardas y cómo decir que no.",
          youCanNow: "recolectar y manejar los datos de los agricultores con consentimiento, siguiendo la ley de protección de datos de tu país."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Manejo e integración de datos",
        questions: [
          { q: "¿Por qué usar IDs de finca en lugar de los nombres de los agricultores en los nombres de archivo?", options: ["Los nombres son demasiado largos", "Protege la privacidad y mantiene los nombres constantes", "El software no puede leer nombres", "El dron lo exige"], answer: 1, why: "Los IDs protegen los datos personales y mantienen ordenados los archivos." },
          { q: "La idea de respaldo 3-2-1 significa:", options: ["Tres copias, dos tipos de almacenamiento, una fuera de la oficina", "Tres drones, dos pilotos, una finca", "Respaldar una vez cada tres años", "Borrar dos copias"], answer: 0, why: "Varias copias en distintos lugares protegen contra la pérdida." },
          { q: "En un programa, las imágenes gratuitas de Sentinel-2 sirven mejor para:", options: ["Contar plantas individuales", "Reemplazar todos los vuelos de dron", "Leer los nombres de los agricultores", "Vigilar todas las fincas entre vuelos y elegir adónde mandar el dron"], answer: 3, why: "Con unos 10 m muestran patrones amplios, no plantas individuales." },
          { q: "Dos capas del mapa no encajan. Una causa probable es:", options: ["Demasiado traslape", "El teléfono del agricultor", "Sistemas de coordenadas distintos", "Demasiadas fincas"], answer: 2, why: "Las capas deben compartir un sistema de coordenadas para encajar." },
          { q: "¿Quién supervisa la protección de datos en Kenia?", options: ["La Oficina del Comisionado de Protección de Datos (ODPC)", "La KCAA", "El vendedor del dron", "La asamblea del condado"], answer: 0, why: "La ODPC supervisa la Ley de Protección de Datos de Kenia de 2019." }
        ]
      }
    },
    {
      name: "Capítulo 2: Diseñar un programa de monitoreo con drones",
      lessons: [
        {
          title: "Empieza por el problema y los usuarios",
          minutes: 5,
          goal: "Escribir un objetivo claro para el programa y hacer una lista de los usuarios y lo que recibe cada uno.",
          text: [
            "Muchos proyectos con drones fracasan porque empiezan por el dron, no por el problema. Empieza por un problema que les importe a los agricultores y a sus socios y sobre el que puedan actuar: la detección tardía del gusano cogollero en una cooperativa de maíz, la calidad dispareja del té entre plantaciones, la mala población de plantas en productores asociados de yuca, o los daños por inundación en distritos de riego de arroz.",
            "Escribe una frase de objetivo con un número y una fecha, por ejemplo: Para el final de las lluvias largas de 2027, encontrar los focos de gusano cogollero en 200 fincas de los miembros dentro de una semana del primer daño, y hacer llegar a cada agricultor afectado un consejo confirmado en tres días.",
            "Haz una lista de los usuarios y lo que recibe cada uno: los agricultores (un mapa y un consejo sencillo en su teléfono), los extensionistas (dónde ir primero), la junta de la cooperativa (un resumen de la temporada), los compradores o procesadores (volúmenes esperados, sin datos personales salvo que los agricultores acepten), y la oficina de agricultura del condado o del estado si es socia."
          ],
          steps: ["Nombra el problema en una frase.", "Revisa que a los usuarios les importe y que puedan actuar.", "Escribe un objetivo con un número y una fecha.", "Haz una lista de cada grupo de usuarios, lo que recibe y en qué forma."],
          words: [["Programa", "un servicio organizado que funciona en el tiempo para muchas personas, no un vuelo suelto."], ["Usuario", "una persona o un grupo que recibe los resultados del programa y actúa con ellos."]],
          slides: [
            { title: "Primero el problema, después el dron", bullets: ["Un problema que le importe a la gente", "Y sobre el que pueda actuar"] },
            { title: "Un objetivo con número y fecha", bullets: ["Hallar focos de gusano cogollero en 200 fincas", "Dentro de una semana del primer daño", "Consejo en tres días"] },
            { title: "Usuarios y lo que reciben", bullets: ["Agricultores: mapa y consejo sencillo en el teléfono", "Extensión: dónde ir primero", "Junta y socios: resumen de la temporada"] }
          ],
          tryIt: "Escribe el problema, una frase de objetivo con un número y una fecha, y una tabla de al menos cuatro grupos de usuarios y lo que recibe cada uno, para un programa que podrías llevar a cabo.",
          youCanNow: "definir con claridad el problema, el objetivo y los usuarios de un programa con drones."
        },
        {
          title: "Planear personas, equipo, calendario y dinero",
          minutes: 6,
          goal: "Planear el equipo humano, el equipo técnico, el calendario de vuelos y el presupuesto de una temporada.",
          text: [
            "Personas: pilotos a distancia y observadores con licencia, alguien que procese y analice los datos, personal de extensión que verifique en campo y aconseje, y un coordinador. Si tu programa vuela para otros o por pago, tu organización puede necesitar un certificado de operador de la autoridad de aviación, y cada piloto necesita la licencia que exigen tus normas.",
            "Equipo: drones (y uno de repuesto), baterías para un día completo, cargadores (una opción de carga solar o en el vehículo donde la electricidad falla), una laptop que pueda procesar mapas, almacenamiento, teléfonos o tabletas, equipo de seguridad y transporte. Calendario: dibuja el calendario del cultivo y decide cuántos vuelos por finca por temporada; agrupa las fincas por zona para que un equipo cubra muchas en un día.",
            "Dinero: haz una lista de los costos únicos (drones, laptop, formación, licencias y certificados) y de los costos de operación (personal, transporte, paquetes de datos, reparaciones, seguro, tasas). Luego decide cómo se paga: una cuota por acre o por hectárea cobrada por dinero móvil, una aportación de la cooperativa sobre las entregas, un comprador o procesador que se beneficia, una subvención del gobierno o de un donante para la etapa inicial. Planea lo que pasará cuando termine la subvención."
          ],
          steps: ["Haz una lista de los puestos y las licencias o certificados que necesita cada uno.", "Haz una lista del equipo, con repuestos y carga.", "Dibuja el calendario de la temporada según el calendario del cultivo; agrupa las fincas por zona.", "Haz una lista de los costos únicos y de operación.", "Elige cómo se paga el servicio y cómo seguirá después de cualquier subvención."],
          words: [["Costo único", "un costo que se paga una vez, como comprar un dron."], ["Costo de operación", "un costo que se repite, como el transporte y el personal."], ["Aportación", "un pequeño cobro a los miembros, por ejemplo por kilogramo entregado."]],
          slides: [
            { title: "Personas", bullets: ["Pilotos y observadores con licencia", "Quien procesa y analiza los datos", "Personal de extensión y un coordinador", "Certificado de operador si tus normas lo exigen"] },
            { title: "Equipo", bullets: ["Drones más uno de repuesto, baterías para un día", "Carga solar o en el vehículo", "Laptop, almacenamiento, teléfonos, transporte"] },
            { title: "Calendario", bullets: ["Sigue el calendario del cultivo", "Vuelos por finca por temporada", "Agrupa las fincas por zona"] },
            { title: "Dinero", bullets: ["Costos únicos y de operación", "Cuota por hectárea por dinero móvil, aportación, comprador, subvención", "Planea el después de la subvención"] }
          ],
          sources: [KCAA_UAS, NCAA_P21, FAO_ITU_DRONES],
          tryIt: "Para tu programa de la Lección 4, escribe una lista del equipo humano, una lista del equipo técnico, un calendario de la temporada (qué semanas vuelas y dónde) y una tabla de presupuesto sencilla con los costos únicos y de operación y cómo se pagará cada uno.",
          youCanNow: "planear el equipo humano, el equipo técnico, el calendario y el presupuesto de un programa de monitoreo con drones."
        },
        {
          title: "Medir los resultados e informar",
          minutes: 5,
          goal: "Elegir medidas de éxito e informar los resultados con honestidad a los agricultores y a los socios.",
          text: [
            "Un programa solo vale la pena si marca una diferencia. Elige unas pocas medidas ligadas a tu objetivo: qué tan rápido se encontraron los problemas, cuántos agricultores recibieron el consejo a tiempo, cuántos actuaron, la cosecha o la calidad comparada con fincas o temporadas sin el programa, y el costo por finca.",
            "Toma una línea de base antes de empezar (por ejemplo, las cosechas o los tiempos de detección de la temporada pasada), para poder comparar. Pregunta también a los agricultores: ¿el consejo fue claro y útil, y pagarían por él? Sus respuestas importan tanto como los números.",
            "Informa en una forma que cada usuario pueda usar: un mensaje corto a los agricultores, un resumen de una página con un mapa para la junta, un informe más completo para los socios. Sé honesto sobre lo que no funcionó. Luego mejora el diseño para la siguiente temporada."
          ],
          steps: ["Elige de tres a cinco medidas ligadas al objetivo.", "Registra una línea de base antes de que empiece el programa.", "Reúne las medidas y la opinión de los agricultores durante la temporada.", "Informa en la forma correcta para cada usuario.", "Haz una lista de lo que hay que mejorar la siguiente temporada."],
          words: [["Línea de base", "la situación antes de que empiece el programa, que se usa para comparar."], ["Medida de éxito", "un número que muestra si el programa alcanzó su objetivo."]],
          slides: [
            { title: "Mide lo que importa", bullets: ["Rapidez de la detección", "Agricultores asesorados a tiempo, y quién actuó", "Cosecha o calidad vs línea de base", "Costo por finca"] },
            { title: "Línea de base y opiniones", bullets: ["Registra el punto de partida", "Pregunta: ¿fue útil? ¿pagarías?"] },
            { title: "Informa y mejora", bullets: ["Mensajes cortos a los agricultores", "Una página y un mapa para la junta", "Sé honesto; mejora la siguiente temporada"] }
          ],
          tryIt: "Tarea final: escribe tu diseño de programa de dos páginas para una cooperativa de 200 pequeños agricultores: problema y objetivo, usuarios, plan de datos con SIG y consentimiento, equipo humano y técnico, calendario de la temporada, presupuesto y forma de pago, medidas de éxito con línea de base, e informes.",
          youCanNow: "medir, informar y mejorar un programa de monitoreo con drones, y presentar un diseño completo del programa."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Diseñar un programa de monitoreo con drones",
        questions: [
          { q: "¿Por qué fracasan muchos proyectos con drones?", options: ["Los drones son demasiado pequeños", "Empiezan por el dron en lugar de por un problema real", "A los agricultores no les gustan los mapas", "Las baterías son demasiado grandes"], answer: 1, why: "Los programas funcionan cuando resuelven un problema que les importa a los usuarios." },
          { q: "¿Cuál es el mejor objetivo de programa?", options: ["Volar mucho los drones", "Usar tecnología", "Encontrar focos de gusano cogollero en 200 fincas dentro de una semana del primer daño para el final de las lluvias largas de 2027", "Ser innovadores"], answer: 2, why: "Tiene un número, un plazo y un resultado claros." },
          { q: "Tu programa volará para agricultores que pagan. ¿Qué debes revisar?", options: ["Si tu organización necesita un certificado de operador y si los pilotos necesitan licencia", "Solo el color del dron", "Solo el clima", "Nada; los agricultores aceptaron"], answer: 0, why: "Volar de forma comercial suele necesitar un certificado de operador y pilotos con licencia." },
          { q: "¿Cuál es un costo de operación?", options: ["Comprar el primer dron", "Comprar una laptop", "La formación inicial", "El transporte a las fincas cada semana"], answer: 3, why: "Los costos de operación se repiten durante todo el programa." },
          { q: "¿Por qué tomar una línea de base?", options: ["Para llenar un formulario", "Para comparar los resultados con la situación antes del programa", "Para borrar datos viejos", "Para elegir un dron"], answer: 1, why: "Sin un punto de partida no puedes mostrar el cambio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Drones para el monitoreo agrícola 5: integración de datos, SIG y diseño de programas",
    questions: [
      { q: "Sin un sistema de datos, un programa grande con drones corre el riesgo de:", options: ["Archivos perdidos, mezclados o sobrescritos", "Mejores mapas", "Vuelos más rápidos", "Drones más baratos"], answer: 0, why: "Miles de archivos necesitan un sistema claro." },
      { q: "Un registro de vuelos anota:", options: ["Precios de los cultivos", "Fecha, finca, campo, piloto, dron, archivos y estado", "Solo el clima", "Los datos bancarios de los agricultores"], answer: 1, why: "Sigue cada vuelo y sus datos." },
      { q: "¿Cuál es una buena regla de carpetas?", options: ["Nombres al azar", "Nombre completo y teléfono del agricultor", "Programa / ID de finca / ID de campo / Fecha", "Todo en una sola carpeta"], answer: 2, why: "Una estructura constante basada en IDs mantiene los datos ordenados y privados." },
      { q: "En la regla 3-2-1, el 1 significa:", options: ["Un dron", "Un agricultor", "Un día", "Una copia en otro lugar"], answer: 3, why: "Una copia fuera de la oficina sobrevive a un robo, un incendio o una falla en la oficina." },
      { q: "En un SIG, las capas base de un programa suelen incluir:", options: ["Límites de campos y puntos de fincas", "Archivos de música", "Solo fotos del equipo", "Facturas"], answer: 0, why: "Todo lo demás se coloca encima de los campos y las fincas." },
      { q: "¿Más o menos cuántos metros por píxel miden las imágenes de Sentinel-2?", options: ["0.01", "10", "1,000", "100,000"], answer: 1, why: "Las imágenes gratuitas de Sentinel-2 son de unos 10 m por píxel." },
      { q: "Unir una hoja de cálculo a una capa de campos necesita:", options: ["El mismo color", "Un dron", "Un ID compartido, como el ID de campo", "Una impresora"], answer: 2, why: "El ID enlaza cada fila con su campo." },
      { q: "¿Qué pregunta puede ayudar a responder un proyecto SIG con datos unidos?", options: ["¿Cuál es la contraseña del agricultor?", "¿De qué color es el dron?", "¿Quién ganó el partido de fútbol?", "¿Los campos que recibieron el consejo del dron cosecharon más?"], answer: 3, why: "Enlazar los registros con los campos permite esas comparaciones." },
      { q: "La ley de protección de datos de Nigeria está a cargo de:", options: ["La Comisión de Protección de Datos de Nigeria (NDPC)", "La NCAA", "El fabricante del dron", "Una cooperativa"], answer: 0, why: "La NDPC se creó con la Ley de Protección de Datos de Nigeria de 2023." },
      { q: "Un consentimiento válido significa que el agricultor:", options: ["No recibió ninguna explicación", "Entiende qué recolectas, para qué, quién lo ve, y puede decir que no", "Firmó sin leer", "Dio su PIN"], answer: 1, why: "El consentimiento debe ser informado y libre." },
      { q: "Un comprador pide una lista con los nombres y las cosechas de los agricultores. Debes:", options: ["Mandarla de inmediato", "Publicarla", "Compartirla solo con el permiso de los agricultores", "Venderla"], answer: 2, why: "Los datos personales no se comparten sin permiso." },
      { q: "Recolectar solo lo que necesitas se llama:", options: ["Acaparar datos", "Copia de seguridad", "Traslape", "Minimización de datos"], answer: 3, why: "Menos datos significa menos riesgo, y es un principio de protección de datos." },
      { q: "Un programa debe empezar por:", options: ["Un problema que les importe a los usuarios y sobre el que puedan actuar", "El dron más nuevo", "Un logotipo", "Un comunicado de prensa"], answer: 0, why: "Los programas que empiezan por el problema dan valor." },
      { q: "¿Qué necesitan más los agricultores del programa?", options: ["Los archivos de fotos originales", "Un mapa y un consejo sencillo en su teléfono", "Software SIG", "La licencia del piloto"], answer: 1, why: "La información sencilla y práctica ayuda a los agricultores a actuar." },
      { q: "Donde la electricidad falla, planea:", options: ["Sin baterías", "Volar solo de noche", "Carga solar o en el vehículo", "Un vuelo al año"], answer: 2, why: "Las opciones de carga mantienen al equipo volando todo el día." },
      { q: "Agrupar las fincas por zona en el calendario ayuda a:", options: ["Gastar más combustible", "Hacer borrosos los mapas", "Evitar las licencias", "Cubrir muchas fincas en un día"], answer: 3, why: "Menos viajes significa más fincas por día y menos costo." },
      { q: "Una forma de pagar el servicio de drones de una cooperativa es:", options: ["Una pequeña cuota por hectárea pagada por dinero móvil", "Gratis para siempre sin ningún plan", "Vender los datos de los agricultores", "No hacer reparaciones"], answer: 0, why: "Las cuotas, las aportaciones, los compradores o las subvenciones pueden financiar el servicio con honestidad." },
      { q: "¿Por qué planear lo que pasará cuando termine una subvención?", options: ["Las subvenciones nunca terminan", "Para que el servicio siga cuando se acabe la subvención", "Para gastar más rápido", "No hace falta"], answer: 1, why: "Los programas que dependen solo de subvenciones a menudo se detienen." },
      { q: "¿Cuál es una medida de éxito?", options: ["El número de fotos tomadas con el dron", "El color del dron", "Agricultores asesorados dentro de tres días de la detección", "El tamaño de la oficina"], answer: 2, why: "Mide el resultado que les importa a los usuarios." },
      { q: "Al informar, debes:", options: ["Ocultar lo que no funcionó", "Mandar a todos el mismo informe de 50 páginas", "Informar solo al donante", "Ser honesto y usar una forma que cada usuario pueda usar"], answer: 3, why: "Los informes honestos y adaptados a cada usuario generan confianza y mejoras." }
    ]
  }
};
