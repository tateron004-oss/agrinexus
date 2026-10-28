"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-drones-mission-planning.js. See scripts/koachlearn-courses/README.md, "Translations".

const KCAA_UAS = { name: "Autoridad de Aviación Civil de Kenia (KCAA): Sistemas de aeronaves no tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Sistema en línea de drones (RPAS) de la KCAA", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Autoridad de Aviación Civil de Nigeria (NCAA): Nig.CARs 2023, Parte 21, sistemas de aeronaves pilotadas a distancia", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KMD = { name: "Departamento Meteorológico de Kenia", url: "https://meteo.go.ke" };
const NIMET = { name: "Agencia Meteorológica de Nigeria (NiMet)", url: "https://nimet.gov.ng" };

module.exports = {
  id: "agri-drones-mission-planning-es",
  lang: "es",
  translationOf: "agri-drones-mission-planning",
  category: "Agriculture (Africa)",
  name: "Drones agrícolas: planeación de misiones y operaciones de vuelo",
  skills: "Convertir el pedido de un cliente en el alcance de una misión, Inspeccionar un sitio y revisar el espacio aéreo y los permisos, Escribir una evaluación de riesgos, Armar un plan de vuelo con planes de contingencia, Dirigir la reunión del equipo y volar la misión, Hacer las revisiones posteriores al vuelo y reportar incidentes",
  outcome: "planear y realizar una misión profesional con dron agrícola, desde el pedido del cliente hasta la entrega de los datos, con un expediente de misión completo: alcance, inspección del sitio, revisión del espacio aéreo y los permisos, evaluación de riesgos, plan de vuelo, reunión del equipo, planes de contingencia y registros posteriores al vuelo.",
  about: [
    "Este curso es para pilotos a distancia, negocios de servicios con drones, equipos de drones de plantaciones y agronegocios, y programas de extensión de Kenia, Nigeria y toda África que vuelan misiones con drones para otros. Supone que ya conoces lo básico de volar y hacer mapas y las normas de drones de tu país (consulta el itinerario de monitoreo y el curso de normas).",
    "El Capítulo 1 es la planeación: acordar lo que el cliente realmente necesita, inspeccionar el sitio, revisar el espacio aéreo y los permisos, evaluar los riesgos y armar un plan de vuelo con la altura, el traslape, las baterías y los horarios calculados. El Capítulo 2 son las operaciones: los papeles del equipo y la reunión previa, volar y vigilar la misión, manejar lo que sale mal y cerrar el trabajo con revisión de datos, registros y cualquier reporte de incidente.",
    "Los ejemplos son tipos de trabajo reales: mapear 40 hectáreas de aguacate para un exportador en Murang'a, contar plantas en 25 fincas de yuca de productores asociados en el estado de Oyo, inspeccionar el riego en una finca hortícola cerca de Naivasha. Nunca vueles una misión sin el registro, las licencias, el certificado de operador y las autorizaciones que exige tu país. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Arma un expediente de misión completo para un trabajo agrícola con dron (real o de ejemplo, como mapear 40 hectáreas de aguacate para un exportador): el alcance de la misión acordado con el cliente, una inspección del sitio con los peligros y un croquis, la revisión del espacio aéreo y los permisos con sus fuentes, una tabla de evaluación de riesgos, el plan de vuelo (área, altura, detalle de imagen, traslape, velocidad, baterías, horarios, límites de clima), los papeles del equipo y las notas de la reunión, los planes de contingencia, y la lista de revisión y el registro posteriores al vuelo que vas a completar.",
  chapters: [
    {
      name: "Capítulo 1: Planear la misión",
      lessons: [
        {
          title: "Del pedido del cliente al alcance de la misión",
          minutes: 5,
          goal: "Convertir el pedido de un cliente en un alcance de misión claro y por escrito.",
          text: [
            "Los clientes a menudo piden \"un vuelo con dron\" cuando lo que necesitan es una respuesta: ¿Qué lotes tienen pocas plantas? ¿Dónde hay fugas en el riego? ¿Cuántos árboles tenemos? Empieza por preguntar qué decisión quieren tomar y qué harán con los resultados.",
            "Luego acuerda el alcance por escrito: el área (con un mapa o un archivo de límites), la pregunta y los entregables (por ejemplo, un ortomosaico, un mapa NDVI, un conteo de árboles, un informe de una página), el nivel de detalle necesario, el rango de fechas, cómo será el acceso, quién es el contacto en la finca, el precio y la forma de pago (como dinero móvil al entregar), y cómo se compartirán y guardarán los datos.",
            "Di con claridad lo que el dron no puede hacer. Un mapa puede mostrar dónde están estresados los árboles; por sí solo no puede decir qué enfermedad es. Un alcance claro te protege a ti y al cliente de decepciones y disputas."
          ],
          steps: ["Pregunta qué decisión quiere tomar el cliente.", "Acuerda el área y consigue un límite o un croquis.", "Acuerda entregables, detalle, fechas y contactos.", "Acuerda precio, pago y cómo se comparten los datos.", "Explica los límites de lo que el dron puede mostrar.", "Ponlo por escrito y que los dos lo confirmen."],
          words: [["Alcance de la misión", "el acuerdo escrito de lo que cubrirá y entregará un trabajo con dron."], ["Entregable", "un producto que recibe el cliente, como un mapa o un informe."]],
          slides: [
            { title: "Encuentra la pregunta real", bullets: ["¿Qué decisión tomará el cliente?", "¿Qué hará con los resultados?"] },
            { title: "Acuerda por escrito", bullets: ["Área y límites", "Entregables y detalle", "Fechas, acceso, contacto en la finca", "Precio, pago, datos compartidos"] },
            { title: "Explica los límites", bullets: ["Los mapas muestran dónde, no siempre por qué", "Un alcance claro evita disputas"] }
          ],
          tryIt: "Un exportador de aguacate dice: \"Vuela nuestras 40 hectáreas la próxima semana.\" Escribe cinco preguntas que le harías y luego un alcance de misión de un párrafo con el área, los entregables, las fechas, el contacto, un espacio para el precio y los límites.",
          youCanNow: "convertir el pedido vago de un cliente en un alcance de misión claro y por escrito."
        },
        {
          title: "Inspección del sitio, espacio aéreo y permisos",
          minutes: 6,
          goal: "Inspeccionar un sitio y confirmar los límites del espacio aéreo y cada permiso antes del vuelo.",
          text: [
            "Haz primero una inspección de escritorio: mira el área en una app de mapas y en vista satelital en busca de pistas de aterrizaje, aeropuertos, caminos, pueblos, cables eléctricos, antenas, ríos, áreas protegidas y sitios de seguridad. Luego revisa las normas y mapas de tu autoridad sobre zonas restringidas y distancias a aeródromos, y si el trabajo necesita una autorización de operación específica. Date tiempo para que llegue cualquier aprobación.",
            "Después inspecciona en el terreno si puedes, o pide fotos al contacto de la finca: lugares para despegar y aterrizar, obstáculos y su altura, personas y animales, viviendas, caminos de acceso, cobertura de la red móvil y dónde puede resguardarse el equipo del sol y la lluvia.",
            "Confirma los permisos: el dueño o el administrador del terreno por escrito, los vecinos si vas a pasar sobre sus tierras, los líderes comunitarios donde se acostumbre, y la autoridad de aviación según lo exija. Anota todo en el expediente de la misión con fechas y fuentes."
          ],
          steps: ["Inspección de escritorio: mapa y vista satelital del área.", "Revisa las normas de aviación: zonas restringidas, distancias a aeródromos, autorizaciones.", "Inspección en el terreno o fotos de la finca: lugares de despegue, obstáculos, personas, red.", "Consigue por escrito los permisos del dueño y de los vecinos.", "Anota todas las revisiones con fechas y fuentes."],
          words: [["Inspección de escritorio", "revisar un sitio con mapas y documentos antes de ir allí."], ["Zona restringida", "espacio aéreo donde volar está limitado o necesita un permiso especial."], ["Autorización de operación", "permiso de la autoridad de aviación para un tipo particular de operación."]],
          slides: [
            { title: "Inspección de escritorio", bullets: ["Mapa y vista satelital", "Pistas, caminos, pueblos, cables, antenas", "Áreas protegidas y de seguridad"] },
            { title: "Espacio aéreo y aprobaciones", bullets: ["Zonas restringidas y distancias a aeródromos", "¿Se necesita una autorización específica?", "Date tiempo para la aprobación"] },
            { title: "Inspección en el terreno", bullets: ["Lugares de despegue, obstáculos, alturas", "Personas, animales, viviendas, red", "Resguardo para el equipo"] },
            { title: "Permisos por escrito", bullets: ["Dueño o administrador", "Vecinos, líderes comunitarios", "Autoridad de aviación según lo exija"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Para una finca que puedas encontrar en una app de mapas, haz una inspección de escritorio: anota cada pista de aterrizaje, camino, cable eléctrico, poblado y área protegida que haya a pocos kilómetros, y escribe qué normas de aviación debes revisar y qué permisos necesitas.",
          youCanNow: "inspeccionar un sitio, revisar los límites del espacio aéreo y asegurar cada permiso antes de una misión."
        },
        {
          title: "Evaluación de riesgos y plan de vuelo",
          minutes: 6,
          goal: "Escribir una evaluación de riesgos y un plan de vuelo completo con planes de contingencia.",
          text: [
            "Una evaluación de riesgos enumera lo que podría salir mal, qué tan probable y qué tan grave es, y qué harás para reducirlo. Por ejemplo: peligro, un cable eléctrico en el límite norte; riesgo, choque; control, trazar las líneas a 30 m de distancia y fijar el regreso a casa por encima del cable. Otros peligros comunes: personas que entran al área, ganado, aves de presa, vientos fuertes por la tarde, calor, pérdida de enlace detrás de cerros y una pista de aterrizaje cercana.",
            "El plan de vuelo fija: el área dividida en vuelos que caben cada uno en una batería; la altura y el detalle de imagen que da (dentro del límite legal de altura); el traslape; la velocidad; el número de baterías, con repuestos; los puntos de despegue y aterrizaje; el horario (por ejemplo, de 10:00 a 14:00 para una luz pareja); y los límites de clima (viento máximo, sin lluvia, visibilidad). Revisa el pronóstico de tu servicio meteorológico nacional el día anterior y la mañana del trabajo.",
            "Los planes de contingencia dicen qué harás si las cosas cambian: viento por encima de tu límite, entonces pausa; lluvia, entonces recoge y vuelve en la fecha de reserva; una persona entra al área, entonces mantén posición o aterriza; pérdida de enlace, entonces el regreso a casa ya está configurado; una falla de batería, entonces aterriza en el punto de aterrizaje alterno."
          ],
          steps: ["Haz una lista de peligros; califica probabilidad y gravedad; escribe un control para cada uno.", "Divide el área en vuelos de una batería.", "Fija altura, detalle, traslape, velocidad y baterías con repuestos.", "Fija el horario y los límites de clima; revisa el pronóstico.", "Escribe los planes de contingencia y los puntos de aterrizaje alternos."],
          words: [["Evaluación de riesgos", "una revisión escrita de lo que podría salir mal y cómo reducirás el riesgo."], ["Control", "una acción que reduce un riesgo."], ["Plan de contingencia", "una acción planeada de antemano por si algo cambia o sale mal."]],
          slides: [
            { title: "Evaluación de riesgos", bullets: ["Peligro, probabilidad, gravedad, control", "Cables eléctricos, personas, ganado, aves", "Viento, calor, pérdida de enlace, pistas"] },
            { title: "El plan de vuelo", bullets: ["Vuelos de una batería, repuestos", "Altura, detalle, traslape, velocidad", "Despegue, aterrizaje, horario"] },
            { title: "Clima", bullets: ["Fija límites: viento, lluvia, visibilidad", "Pronóstico nacional el día antes y esa mañana"] },
            { title: "Planes de contingencia", bullets: ["Viento: pausa. Lluvia: fecha de reserva", "Entra una persona: mantén o aterriza", "Pérdida de enlace: RTH listo. Falla: aterrizaje alterno"] }
          ],
          sources: [KMD, NIMET, NCAA_P21],
          tryIt: "Escribe una tabla de evaluación de riesgos con al menos seis peligros para el trabajo de 40 hectáreas de aguacate, y luego escribe su plan de vuelo y cinco planes de contingencia.",
          youCanNow: "escribir una evaluación de riesgos y un plan de vuelo completo con planes de contingencia."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear la misión",
        questions: [
          { q: "Un cliente pide \"un vuelo con dron\". Tu primera pregunta debe ser:", options: ["¿De qué color quiere el dron?", "¿Qué decisión quiere tomar con los resultados?", "¿Puedo volar hoy?", "¿Tiene usted un dron?"], answer: 1, why: "La decisión define qué datos y entregables se necesitan." },
          { q: "¿Qué va en un alcance de misión por escrito?", options: ["La música favorita del piloto", "Solo el precio", "Nada; se acuerda por teléfono", "Área, entregables, fechas, contacto, precio y datos compartidos"], answer: 3, why: "Un alcance claro y por escrito evita disputas." },
          { q: "En la inspección de escritorio encuentras una pista de aterrizaje a 3 km. Debes:", options: ["Revisar las reglas de distancia a aeródromos y cualquier autorización necesaria", "Ignorarla", "Volar solo en la mañana", "Volar más alto"], answer: 0, why: "Muchas normas limitan los drones cerca de los aeródromos." },
          { q: "En una evaluación de riesgos, un control es:", options: ["El control remoto", "Una acción que reduce un riesgo", "Una queja del cliente", "Una batería"], answer: 1, why: "Los controles bajan la probabilidad o la gravedad." },
          { q: "El pronóstico muestra vientos fuertes por la tarde. Un plan sensato es:", options: ["Volar en la tarde de todos modos", "Cancelar el trabajo para siempre", "Fijar el horario en las horas más tranquilas y tener una fecha de reserva", "Quitar las hélices"], answer: 2, why: "Planea según los límites de clima y con una fecha de reserva." }
        ]
      }
    },
    {
      name: "Capítulo 2: Volar la misión",
      lessons: [
        {
          title: "Papeles del equipo y reunión previa",
          minutes: 5,
          goal: "Asignar los papeles del equipo y dirigir una reunión previa clara.",
          text: [
            "Hasta las misiones pequeñas salen mejor con papeles claros. El piloto al mando es responsable de la seguridad del vuelo y tiene la última palabra. El observador vigila el dron y el cielo y avisa de aeronaves, aves, personas y animales. Un operador de tierra o de carga útil puede encargarse de las baterías, la cámara, el área de aterrizaje y el cliente.",
            "Antes del primer vuelo, el piloto al mando informa a todos, incluido el contacto de la finca: el área y las líneas de vuelo, la altura, el tiempo de cada batería, los puntos de despegue y aterrizaje, los peligros y controles de la evaluación de riesgos, los límites de clima, los planes de contingencia, las palabras que usarán (por ejemplo, \"mantén\", \"aterriza ya\") y quién puede pedir que se pare. Cualquiera puede pedir parar por seguridad.",
            "Revisa que cada persona del equipo tenga agua, protección contra el sol y equipo de seguridad como chalecos reflectantes, y que el área de despegue esté marcada y libre de curiosos."
          ],
          steps: ["Asigna piloto al mando, observador y operador de tierra o de carga útil.", "Informa: área, altura, baterías, despegue y aterrizaje, peligros, límites de clima.", "Acuerden los planes de contingencia y las órdenes estándar (mantén, aterriza ya).", "Confirma que cualquiera puede pedir parar.", "Marca el área de despegue; revisa agua, protección solar y chalecos."],
          words: [["Piloto al mando", "el piloto a distancia responsable de la seguridad del vuelo, con la última palabra."], ["Órdenes estándar", "palabras cortas y acordadas que usa el equipo para que todos entiendan al instante."]],
          slides: [
            { title: "Papeles del equipo", bullets: ["Piloto al mando: última palabra en seguridad", "Observador: dron, cielo, personas, animales", "Operador de tierra o carga: baterías, cámara, cliente"] },
            { title: "La reunión previa", bullets: ["Área, altura, baterías, despegue, aterrizaje", "Peligros, límites de clima, contingencias", "Órdenes estándar: mantén, aterriza ya"] },
            { title: "Cuida al equipo", bullets: ["Cualquiera puede pedir parar", "Agua, protección solar, chalecos", "Área de despegue marcada, sin curiosos"] }
          ],
          tryIt: "Escribe un guion de una página para la reunión previa de la misión de aguacate, que un piloto al mando pueda leer en tres minutos, con cada punto de esta lección.",
          youCanNow: "asignar los papeles del equipo y dirigir una reunión previa clara."
        },
        {
          title: "Realizar y vigilar la misión",
          minutes: 5,
          goal: "Volar una misión planeada, vigilarla y tomar decisiones de seguir o no seguir.",
          text: [
            "Antes de cada vuelo, haz la lista de revisión previa y confirma que las condiciones están dentro de los límites. Carga o revisa la ruta planeada, confirma el punto de inicio y la altura de regreso a casa, y confirma que el observador está en su lugar.",
            "Durante el vuelo, el piloto vigila el dron y la telemetría (batería, señal, satélites, avisos de viento, altura, avance en las líneas). El observador vigila el cielo y el suelo. Prepárate para tomar el control manual en cualquier momento. Cambia las baterías entre vuelos siguiendo tu procedimiento de baterías y marca qué líneas ya están hechas.",
            "Toma decisiones de seguir o no seguir todo el día. Si el viento sube por encima de tu límite, una persona entra al área, se forma una tormenta o una advertencia se repite, haz una pausa o aterriza. Es mejor terminar mañana que tener un accidente hoy. Mantén al cliente informado del avance y de cualquier cambio."
          ],
          steps: ["Lista de revisión previa; ¿condiciones dentro de los límites?", "Revisa la ruta, el punto de inicio y la altura de regreso a casa.", "Vuela; el piloto vigila el dron y la telemetría, el observador el cielo y el suelo.", "Cambia las baterías con seguridad; marca las líneas terminadas.", "Pausa o aterriza si se pasan los límites; avísale al cliente."],
          words: [["Telemetría", "datos en vivo que el dron envía al control: batería, altura, posición, señal y advertencias."], ["Seguir / no seguir", "la decisión de si es seguro volar o continuar."]],
          slides: [
            { title: "Antes de cada vuelo", bullets: ["Lista de revisión y límites", "Ruta, punto de inicio, altura de RTH", "Observador en su lugar"] },
            { title: "Durante el vuelo", bullets: ["Piloto: dron y telemetría", "Observador: cielo y suelo", "Listo para el control manual"] },
            { title: "Seguir o no seguir, todo el día", bullets: ["Viento, personas, tormentas, avisos repetidos", "Pausa o aterriza", "Mejor mañana que un accidente"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Escribe una tarjeta de seguir / no seguir para tu misión: cinco condiciones que significan seguir y cinco que significan parar o aterrizar, con palabras cortas que un equipo pueda leer en el campo.",
          youCanNow: "volar y vigilar una misión planeada y tomar buenas decisiones de seguir o no seguir."
        },
        {
          title: "Cerrar la misión: revisión de datos, registros e incidentes",
          minutes: 5,
          goal: "Revisar los datos, completar los registros y manejar los reportes de incidentes antes de dejar el sitio.",
          text: [
            "Antes de dejar el sitio, revisa los datos: cuenta las imágenes de cada vuelo, mira una muestra para ver si están borrosas o mal expuestas, busca huecos en la cobertura y, si puedes, haz un unido rápido de baja resolución en una laptop. Vuelve a volar los huecos mientras el equipo y las condiciones siguen ahí. Haz una copia de los datos en un segundo aparato.",
            "Completa los registros: las bitácoras de cada vuelo (hora, batería, piloto, problemas), las notas de baterías y mantenimiento, y las condiciones reales en el expediente de la misión. Dale las gracias al contacto de la finca y confirma cuándo recibirá los entregables.",
            "Si algo salió mal (un choque, un casi accidente con una aeronave, una lesión, daño a bienes, un dron que se escapa), primero haz seguro el lugar, luego anota lo que pasó y repórtalo a tu autoridad de aviación como lo exijan sus normas, y a tu aseguradora. Revisa el incidente con el equipo y actualiza tus procedimientos para que no vuelva a pasar."
          ],
          steps: ["Cuenta las imágenes, revisa una muestra por desenfoque, busca huecos de cobertura.", "Vuelve a volar los huecos; copia los datos a un segundo aparato.", "Completa las bitácoras de vuelo, baterías y mantenimiento.", "Confirma con el cliente la fecha de entrega.", "Ante cualquier incidente: haz seguro el lugar, anota, reporta según se exija, revisa y actualiza procedimientos."],
          words: [["Casi accidente", "un hecho en el que casi ocurre un accidente."], ["Hueco de cobertura", "un área sin imágenes o con imágenes malas."]],
          slides: [
            { title: "Revisa los datos en el sitio", bullets: ["Cuenta imágenes, revisa el desenfoque", "Busca huecos; unido rápido", "Vuelve a volar huecos, copia a otro aparato"] },
            { title: "Completa los registros", bullets: ["Bitácoras de vuelo, baterías y mantenimiento", "Condiciones reales en el expediente", "Confirma la fecha de entrega"] },
            { title: "Si algo salió mal", bullets: ["Haz seguro el lugar", "Anota y reporta según se exija; avisa a la aseguradora", "Revisa y actualiza los procedimientos"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Tarea final: arma tu expediente de misión completo: alcance, inspección del sitio y croquis, revisión del espacio aéreo y los permisos con fuentes, evaluación de riesgos, plan de vuelo, papeles del equipo y reunión previa, planes de contingencia, tarjeta de seguir / no seguir, y la lista de revisión y la plantilla de registro posteriores al vuelo.",
          youCanNow: "cerrar una misión de forma profesional con revisión de datos, registros completos y un manejo correcto de los incidentes."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Volar la misión",
        questions: [
          { q: "¿Quién tiene la última palabra sobre la seguridad de un vuelo?", options: ["El cliente", "El observador", "El piloto al mando", "El fabricante del dron"], answer: 2, why: "El piloto al mando es responsable de la seguridad del vuelo." },
          { q: "¿Quién puede pedir parar por seguridad durante una misión?", options: ["Cualquiera del equipo", "Solo el cliente", "Solo el observador", "Nadie una vez que el dron está volando"], answer: 0, why: "Cualquiera que vea un peligro puede pedir parar." },
          { q: "La telemetría muestra que el viento ya pasó tu límite. Debes:", options: ["Volar más rápido para terminar", "Apagar las advertencias", "Subir más", "Hacer una pausa o aterrizar"], answer: 3, why: "Pasar los límites significa parar; termina después." },
          { q: "Antes de dejar el sitio debes:", options: ["Borrar fotos para liberar espacio", "Revisar si hay imágenes borrosas o huecos y volver a volar los huecos", "Irte sin avisarle al cliente", "Formatear la tarjeta de memoria"], answer: 1, why: "Arreglar los huecos en el sitio te ahorra un segundo viaje." },
          { q: "Tu dron tiene un casi accidente con una aeronave pequeña. Después de hacer seguro el lugar debes:", options: ["Anotarlo y reportarlo como lo exige tu autoridad", "Guardarlo en secreto", "Irte volando rápido", "Culpar a la aeronave"], answer: 0, why: "Reportar ayuda a la seguridad y a menudo lo exigen las normas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Drones agrícolas: planeación de misiones y operaciones de vuelo",
    questions: [
      { q: "El alcance de una misión es:", options: ["La cámara del dron", "El acuerdo escrito de lo que cubre y entrega un trabajo", "Un informe del clima", "Una bitácora de vuelo"], answer: 1, why: "Fija el área, los entregables, las fechas, el precio y los límites." },
      { q: "¿Cuál es un entregable?", options: ["La licencia del piloto", "Una batería", "Un mapa NDVI y un informe de una página", "Una hélice"], answer: 2, why: "Los entregables son lo que recibe el cliente." },
      { q: "¿Por qué explicar en el alcance los límites de un mapa hecho con dron?", options: ["Para evitar decepciones y disputas", "Para cobrar más", "Para confundir al cliente", "No hace falta"], answer: 0, why: "Unos límites claros fijan expectativas honestas." },
      { q: "Una inspección de escritorio usa:", options: ["Solo una pala", "El dron en vuelo", "Un tractor", "Mapas y vistas satelitales antes de ir al sitio"], answer: 3, why: "Las inspecciones de escritorio encuentran pronto los peligros y los temas de espacio aéreo." },
      { q: "¿Qué debes confirmar por escrito antes de volar sobre la finca de un cliente?", options: ["La talla de zapato del piloto", "El permiso del dueño o del administrador del terreno", "El precio del cultivo", "Nada"], answer: 1, why: "Un permiso por escrito protege a todos." },
      { q: "¿Por qué revisar la cobertura de la red móvil en la inspección en el terreno?", options: ["Para escuchar música", "Para las redes sociales", "Las apps, los mapas y la comunicación pueden necesitarla", "No sirve"], answer: 2, why: "Sin red se pueden afectar los mapas, la coordinación y las emergencias." },
      { q: "Una evaluación de riesgos enumera:", options: ["Peligros, probabilidad, gravedad y controles", "Solo costos", "Nombres de clientes", "Variedades de cultivos"], answer: 0, why: "Muestra lo que podría salir mal y cómo reducirlo." },
      { q: "Un cable eléctrico pasa por la orilla del campo. Un buen control es:", options: ["Volar más cerca para tener mejores fotos", "Ignorarlo", "Volar de noche", "Mantener las líneas de vuelo bien lejos y fijar la altura de RTH por encima del cable"], answer: 3, why: "La distancia y una altura de RTH segura reducen el riesgo de choque." },
      { q: "¿Por qué dividir un área grande en vuelos de una batería?", options: ["Para usar menos imágenes", "Para que cada vuelo termine con seguridad con una sola batería", "Para confundir al software", "Porque el traslape lo exige"], answer: 1, why: "Planear por batería evita emergencias por batería baja." },
      { q: "¿De dónde debes sacar el pronóstico del clima?", options: ["De una suposición", "De la opinión de un amigo", "De tu servicio meteorológico nacional, el día anterior y esa mañana", "Del diario del año pasado"], answer: 2, why: "Los pronósticos oficiales son los más confiables." },
      { q: "Un plan de contingencia es:", options: ["Una acción planeada de antemano por si algo cambia o sale mal", "Un ajuste de la cámara", "Un pago", "Una pieza del dron"], answer: 0, why: "Los planes de contingencia permiten que el equipo actúe rápido y con seguridad." },
      { q: "El trabajo principal del observador es:", options: ["Procesar datos", "Pagarle al equipo", "Volar el dron", "Vigilar el dron, el cielo y el suelo y avisar al piloto"], answer: 3, why: "El observador está atento a los peligros." },
      { q: "Las órdenes estándar como \"mantén\" y \"aterriza ya\" ayudan porque:", options: ["Suenan profesionales", "Todos las entienden al instante", "El dron las exige", "Ahorran batería"], answer: 1, why: "Palabras cortas y acordadas reducen la confusión con prisa." },
      { q: "La telemetría incluye:", options: ["Precios de los cultivos", "Nombres de agricultores", "Batería, altura, posición, señal y advertencias", "El clima del próximo mes"], answer: 2, why: "La telemetría son datos del vuelo en vivo." },
      { q: "Una persona entra al área de vuelo. El equipo debe:", options: ["Mantener el dron en posición o aterrizarlo", "Volar más bajo sobre ella", "Seguir volando las líneas", "Pedirle que corra"], answer: 0, why: "Las personas en el área aumentan el riesgo; haz una pausa o aterriza." },
      { q: "\"Mejor terminar mañana que un accidente hoy\" significa:", options: ["Siempre volar tarde", "Nunca terminar los trabajos", "Cobrar extra por los retrasos", "Parar cuando las condiciones no son seguras, aunque el trabajo no esté terminado"], answer: 3, why: "La seguridad va antes que el horario." },
      { q: "¿Por qué copiar los datos a un segundo aparato antes de irte?", options: ["Para llenar el almacenamiento", "Para que los datos sobrevivan si un aparato falla o se pierde", "Porque el dron lo exige", "Para compartirlos con desconocidos"], answer: 1, why: "Una segunda copia protege los datos del cliente y tu trabajo." },
      { q: "Las bitácoras de vuelo después de una misión anotan:", options: ["Solo el nombre del cliente", "Solo el precio", "Hora, batería, piloto y problemas de cada vuelo", "Nada"], answer: 2, why: "Las bitácoras apoyan la seguridad, el mantenimiento y el cumplimiento." },
      { q: "Después de un incidente, lo primero es:", options: ["Hacer seguro el lugar", "Publicar fotos en internet", "Irse rápido", "Borrar las bitácoras"], answer: 0, why: "Las personas y los bienes van primero." },
      { q: "¿Por qué revisar un incidente con el equipo?", options: ["Para culpar a alguien", "Para pasar el tiempo", "No sirve", "Para actualizar los procedimientos y que no vuelva a pasar"], answer: 3, why: "Aprender de los incidentes mejora la seguridad." }
    ]
  }
};
