"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-drones-intro.js. See scripts/koachlearn-courses/README.md, "Translations".

const KCAA_UAS = { name: "Autoridad de Aviación Civil de Kenia (KCAA): Sistemas de aeronaves no tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Sistema en línea de drones (RPAS) de la KCAA", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Autoridad de Aviación Civil de Nigeria (NCAA): Nig.CARs 2023, Parte 21, sistemas de aeronaves pilotadas a distancia", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO y UIT: E-agriculture in Action: drones para la agricultura (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO y OMS: Guía para la aplicación aérea de plaguicidas (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-intro-es",
  lang: "es",
  translationOf: "agri-drones-intro",
  category: "Agriculture (Africa)",
  name: "Drones para el monitoreo agrícola 1: introducción, normas y seguridad",
  skills: "Explicar lo que hacen los drones agrícolas, Elegir un tipo de dron para un trabajo, Encontrar las normas de tu autoridad de aviación, Evaluar los riesgos de un lugar de vuelo, Dirigir una reunión de seguridad antes del vuelo",
  outcome: "decidir si un dron es la herramienta correcta para un problema de la finca, nombrar la autoridad de aviación y los papeles que necesitas antes de volar, y escribir un plan sencillo de uso del dron con una lista de seguridad para una finca.",
  about: [
    "Este curso es para agricultores, extensionistas, dueños de agronegocios y jóvenes de Kenia, Nigeria y toda África que quieren empezar a usar drones para vigilar cultivos, animales y tierras. Todavía no necesitas tener un dron.",
    "En el Capítulo 1 aprendes lo que un dron puede y no puede hacer en una finca, los principales tipos de drones, y cómo juzgar cuándo un dron vale lo que cuesta comparado con recorrer el campo a pie o usar imágenes satelitales gratuitas. En el Capítulo 2 aprendes quién hace las normas de drones en tu país, qué papeles se suelen necesitar, y cómo revisar un lugar de vuelo e informar a tu equipo para que nadie salga herido.",
    "Las normas de drones son ley y cambian. Este curso nunca te dice que puedes volar: te muestra cómo encontrar las normas oficiales de tu país y seguirlas. Es el Curso 1 de un itinerario de seis partes; los cursos siguientes enseñan a volar, a tomar imágenes, la salud de los cultivos, la agricultura de precisión y cómo manejar programas de drones.",
    "Cada lección dura unos cinco minutos: lee, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Escribe un plan de uso del dron de una página para una finca real o de ejemplo (por ejemplo, 3 acres de maíz y frijol en Nakuru, o 5 hectáreas de yuca en el estado de Oyo): el problema con el que ayudará el dron, el tipo de dron y por qué, la autoridad de aviación y los papeles que debes revisar o conseguir, los peligros que encontraste en el lugar, y una lista de seguridad antes del vuelo con al menos ocho puntos.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Agricultores, extensionistas, dueños de agronegocios y jóvenes en Kenia, Nigeria y en toda África que quieren empezar a usar drones para vigilar cultivos, animales y terrenos. La mayoría todavía no tiene un dron.",
    startingPoint: "La mayoría ha visto drones en videos o en demostraciones y recorre sus campos a pie para revisar los cultivos. Pocos saben qué dron y qué cámara sirven para cada trabajo de la finca, cuándo vale la pena el costo de un dron, quién hace las normas de drones en su país o cómo revisar un lugar y reunir al equipo antes de un vuelo.",
    gap: "Hay personas que compran drones que no sirven para el trabajo, vuelan sin el registro y las licencias que exige la ley, o ponen en riesgo a personas y aeronaves. Saber lo que un dron puede y no puede hacer, las normas y la seguridad básica del lugar permite decidir con sensatez y empezar la serie de drones de forma segura y legal.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; cada término de drones se explica",
      "Dispositivos: un teléfono con internet para encontrar la página de drones de la autoridad de aviación; no se necesita un dron",
      "Las normas son ley y cambian: el curso nunca dice que alguien puede volar; cada quien revisa las normas oficiales de su país",
      "Tiempo: lecciones de unos 5 minutos que caben entre las tareas de la finca",
      "Seguridad y privacidad: no se vuela en el curso; no se graba a personas ni viviendas"
    ],
    prerequisites: "Ninguno. Este es el curso 1 de la serie de drones de seis partes."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista de problemas de la finca", action: "identificar en cuáles puede ayudar un dron y en cuáles no", standard: "nombrando al menos cuatro trabajos en los que puede ayudar y dos que no puede hacer" },
    { id: "O2", condition: "Con un trabajo de la finca y el tamaño de la finca", action: "elegir un tipo de dron y una cámara que sirvan para el trabajo", standard: "con una razón para cada decisión" },
    { id: "O3", condition: "Para un problema de la finca", action: "comparar un dron, las imágenes satelitales gratuitas y recorrer el campo a pie, y elegir la mejor herramienta", standard: "contando todos los costos y la decisión que cambiarán las imágenes" },
    { id: "O4", condition: "Para tu país", action: "encontrar la autoridad de aviación y hacer una lista de los papeles de dron que puede exigir", standard: "usando solo el sitio web o la oficina de la propia autoridad" },
    { id: "O5", condition: "Antes de cualquier vuelo en una finca", action: "recorrer el lugar y marcar los peligros y las zonas de no vuelo", standard: "y avisar al agricultor y a los vecinos cuándo vas a volar" },
    { id: "O6", condition: "Antes y durante un vuelo", action: "dirigir una reunión antes del vuelo, seguir una lista de seguridad y decir los primeros pasos en una emergencia", standard: "con al menos ocho puntos en la lista" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Los drones en la finca",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lo que un dron puede hacer por una finca",
          minutes: 5,
          goal: "Nombrar cuatro trabajos de la finca en los que ayuda un dron, y dos que no puede hacer.",
          text: [
            "Un dron es una aeronave pequeña sin piloto a bordo. Una persona lo vuela desde el suelo con un control remoto o un teléfono, o lo programa para que vuele solo una ruta planeada. Las autoridades de aviación lo llaman sistema de aeronave no tripulada (UAS) o sistema de aeronave pilotada a distancia (RPAS).",
            "En una finca, la mayoría de los drones llevan una cámara. Desde arriba puedes ver todo el campo a la vez: huecos donde la semilla no nació, manchas amarillas o marchitas, esquinas encharcadas, erosión del suelo, cercas rotas y animales fuera de lugar. La FAO y la UIT mencionan entre los principales usos agrícolas el monitoreo de cultivos, la alerta temprana, el monitoreo de plagas, el seguimiento de animales y el monitoreo de bosques.",
            "Algunos drones más grandes fumigan o esparcen semilla y fertilizante. Fumigar plaguicidas con dron es un trabajo especial, de mayor riesgo, que necesita sus propias aprobaciones de la autoridad de aviación y del regulador de plaguicidas, así que este curso solo trata del monitoreo.",
            "Un dron no te puede decir POR QUÉ una mancha está amarilla. Te muestra DÓNDE mirar. Igual tienes que caminar hasta el lugar, mirar las hojas, el suelo y los insectos, y decidir qué hacer. Tampoco puede volar con lluvia fuerte o viento fuerte, y su batería suele durar bastante menos de una hora."
          ],
          words: [["Dron", "una aeronave pequeña que se vuela sin piloto a bordo."], ["UAS / RPAS", "los nombres oficiales: sistema de aeronave no tripulada, sistema de aeronave pilotada a distancia. La aeronave más su control y su enlace."], ["Monitoreo a pie", "recorrer un campo buscando problemas como plagas, enfermedades o malezas."]],
          slides: [
            { title: "Un dron es", bullets: ["Una aeronave pequeña sin piloto a bordo", "Se vuela desde el suelo o en una ruta planeada", "Su nombre oficial es UAS o RPAS"] },
            { title: "En qué ayuda", bullets: ["Ver todo el campo a la vez", "Encontrar huecos, manchas amarillas o marchitas", "Detectar encharcamiento, erosión, cercas rotas", "Contar y encontrar animales"] },
            { title: "Lo que no puede hacer", bullets: ["Decirte POR QUÉ está enferma una mancha: igual vas a pie", "Volar con lluvia fuerte o viento fuerte", "Estar arriba por horas con una batería"] },
            { title: "Fumigar es distinto", bullets: ["Los drones de fumigación necesitan más aprobaciones", "Autoridad de aviación Y regulador de plaguicidas", "Este curso cubre solo el monitoreo"] }
          ],
          sources: [FAO_ITU_DRONES, FAO_WHO_AERIAL],
          tryIt: "Piensa en una finca que conozcas. Escribe tres problemas de esa finca que podrías VER desde el aire, y un problema con el que un dron no podría ayudar (por ejemplo, los precios bajos en el mercado).",
          youCanNow: "explicar lo que hace un dron agrícola, nombrar trabajos en los que ayuda y decir por qué igual hay que recorrer el campo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué le puede mostrar un dron con cámara a un agricultor?", options: ["Por qué una planta está enferma", "El nombre exacto de la enfermedad", "Dónde hay huecos, manchas amarillas o esquinas encharcadas", "En cuánto se va a vender la cosecha"], answer: 2, why: "Un dron muestra adónde ir a mirar; igual tienes que caminar hasta el lugar para saber por qué." },
            { objective: "O1", q: "Un agricultor quiere volar un dron con cámara durante una lluvia fuerte para revisar una inundación. ¿Qué le dices?", options: ["Que vuele más alto bajo la lluvia", "Que espere; los drones no pueden volar con lluvia fuerte, así que revise cuando pare", "Que vuele mientras dure la batería", "Que fumigue el campo al mismo tiempo"], answer: 1, why: "Un dron no puede volar con lluvia fuerte ni con viento fuerte." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Elegir el tipo de dron correcto",
          minutes: 5,
          goal: "Relacionar un tipo de dron y una cámara con un trabajo de la finca.",
          text: [
            "Hay tres tipos principales de dron agrícola. Un multirrotor tiene cuatro o más hélices, como un helicóptero pequeño. Despega desde un espacio pequeño, puede quedarse suspendido en el aire y es fácil de aprender, pero cubre menos terreno por batería. Sirve para parcelas pequeñas, invernaderos y revisiones puntuales.",
            "Un dron de ala fija parece un avión pequeño. Planea, así que cubre áreas grandes como una plantación de té de 200 hectáreas o un rancho, pero necesita espacio para despegar y aterrizar y es más difícil de volar. Un dron híbrido (VTOL) despega en vertical como un multirrotor y luego vuela como un avión.",
            "La cámara importa tanto como el dron. Una cámara de color normal (RGB) basta para ver huecos, malezas, encharcamiento y animales. Una cámara multiespectral mide luz que el ojo no ve y ayuda a mostrar antes el estrés de las plantas. Una cámara térmica muestra el calor: sirve para el estrés hídrico, las fugas de riego y para encontrar animales.",
            "Empieza en pequeño. Muchos extensionistas y jóvenes que dan servicios empiezan con un multirrotor pequeño con cámara RGB, aprenden bien y añaden sensores después."
          ],
          steps: ["Escribe el trabajo: ¿qué necesitas ver y qué tan grande es el área?", "Área pequeña o necesitas quedarte suspendido: multirrotor. Área grande: ala fija o híbrido.", "Elige la cámara: RGB para la mayoría de los trabajos, multiespectral para el estrés temprano de las plantas, térmica para calor y agua.", "Antes de comprarlo, revisa que el dron esté permitido y se pueda registrar en tu país."],
          words: [["Multirrotor", "un dron con cuatro o más hélices que puede quedarse suspendido en el aire."], ["Ala fija", "un dron con forma de avión pequeño que planea y cubre áreas grandes."], ["Cámara RGB", "una cámara de color normal (rojo, verde, azul)."], ["Cámara multiespectral", "una cámara que también mide luz que el ojo no ve, como el infrarrojo cercano."]],
          slides: [
            { title: "Tres tipos de dron agrícola", bullets: ["Multirrotor: se suspende, espacio pequeño, áreas chicas", "Ala fija: planea, áreas grandes, necesita espacio para despegar", "Híbrido (VTOL): despega en vertical, vuela como avión"] },
            { title: "Tres tipos de cámara", bullets: ["RGB: color normal, basta para la mayoría", "Multiespectral: muestra antes el estrés de las plantas", "Térmica: muestra calor, estrés hídrico, animales"] },
            { title: "Relaciona el dron con el trabajo", bullets: ["Parcela de maíz de 2 acres: multirrotor pequeño, RGB", "Plantación de té de 200 hectáreas: ala fija o híbrido", "Rancho al amanecer: cámara térmica para hallar el ganado"] },
            { title: "Empieza en pequeño", bullets: ["Aprende con un multirrotor pequeño con RGB", "Añade sensores cuando los necesites", "Revisa las reglas de registro antes de comprar"] }
          ],
          tryIt: "Para cada uno de estos trabajos, elige un tipo de dron y una cámara y escribe una razón: (a) revisar la germinación en 2 acres de frijol, (b) mapear 150 hectáreas de caña de azúcar, (c) encontrar una vaca perdida en el monte al amanecer.",
          youCanNow: "elegir un tipo de dron y una cámara que se ajusten a un trabajo de la finca y al tamaño del área.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un dron multirrotor?", options: ["Un dron con cuatro o más hélices que puede quedarse suspendido", "Un dron con forma de avión", "Un satélite", "Un dron que solo fumiga"], answer: 0, why: "Un multirrotor tiene cuatro o más hélices, despega desde un espacio pequeño y puede quedarse suspendido." },
            { objective: "O2", q: "Quieres encontrar fugas de riego en una finca de hortalizas. ¿Qué cámara eliges?", options: ["Una cámara normal de teléfono en un palo", "Ninguna cámara", "Solo una cámara RGB de noche", "Una cámara térmica"], answer: 3, why: "Una cámara térmica muestra el calor, y eso sirve para ver el estrés por agua y las fugas de riego." }
          ]
        },
        {
          objectives: ["O3"],
          title: "¿Vale la pena un dron? Dron, satélite o a pie",
          minutes: 5,
          goal: "Decidir si un dron, las imágenes satelitales gratuitas o recorrer el campo a pie es la mejor herramienta para un problema de la finca.",
          text: [
            "Un dron no siempre es la mejor herramienta. En un huerto familiar de un cuarto de acre, recorrer los surcos a pie es más rápido y gratis. Para todo un condado, las imágenes satelitales gratuitas (por ejemplo, de los satélites europeos Sentinel-2, que se ven en herramientas gratuitas en línea) muestran patrones amplios cada pocos días, pero cada píxel mide unos 10 metros, demasiado grueso para ver plantas individuales.",
            "Los drones están en medio. Ven hasta unos pocos centímetros, el día que tú elijas, incluso bajo nubes delgadas. Eso los hace buenos para fincas medianas y grandes, para cooperativas que comparten un dron entre los campos de muchos miembros, y para cultivos de alto valor como el té, el café, el aguacate y las hortalizas.",
            "Cuenta todos los costos, no solo el precio del dron: tasas de registro y de licencia, formación, baterías y hélices de repuesto, un teléfono o una tableta, datos móviles, viajes y tu tiempo. Luego pregúntate: ¿qué decisión cambiarán las imágenes, y vale esa decisión más que el costo?"
          ],
          steps: ["Escribe la decisión que quieres tomar (por ejemplo: dónde resembrar, o qué lote tratar).", "Pregunta qué tan grande es el área y qué tan pequeño es lo que necesitas ver.", "Compara ir a pie, el satélite y el dron para ese tamaño y ese detalle.", "Haz una lista de cada costo de la opción del dron y compárala con el valor de una mejor decisión."],
          words: [["Imagen satelital", "una foto de la Tierra tomada desde el espacio; las gratuitas muestran áreas grandes pero con menos detalle."], ["Resolución", "qué tan pequeño es lo que puede mostrar una imagen; las imágenes de dron pueden mostrar unos pocos centímetros, las satelitales gratuitas unos 10 metros."]],
          slides: [
            { title: "Tres formas de vigilar una finca", bullets: ["A pie: gratis, lo mejor en parcelas pequeñas, lento en grandes", "Satélite: gratis, áreas grandes, detalle de unos 10 m", "Dron: detalle de centímetros, el día que elijas"] },
            { title: "Donde el dron vale la pena", bullets: ["Fincas medianas y grandes", "Cooperativas que comparten un dron", "Cultivos de alto valor: té, café, aguacate, hortalizas"] },
            { title: "Cuenta cada costo", bullets: ["Registro, licencia y formación", "Baterías, hélices, teléfono o tableta, datos", "Viajes y tu tiempo"] },
            { title: "La pregunta clave", bullets: ["¿Qué decisión cambiarán las imágenes?", "¿Vale esa decisión más que el costo?"] }
          ],
          tryIt: "Elige un problema de la finca de la Lección 1. Escribe qué herramienta usarías (a pie, satélite o dron), por qué, y haz una lista de al menos cinco costos si eligieras el dron.",
          youCanNow: "decidir si un dron vale la pena para un problema de la finca comparándolo con ir a pie y con las imágenes satelitales.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué las imágenes satelitales gratuitas son demasiado gruesas para ver plantas individuales?", options: ["Solo son en blanco y negro", "Se toman una vez al año", "Cuestan demasiado", "Cada píxel mide unos 10 metros"], answer: 3, why: "Los píxeles de Sentinel-2 miden unos 10 metros, así que muestran patrones amplios, no plantas individuales." },
            { objective: "O3", q: "Una agricultora con una huerta de un cuarto de acre pregunta si debe comprar un dron. ¿Qué le sugieres?", options: ["Recorrer los surcos a pie; en una parcela tan pequeña es más rápido y no cuesta nada", "Comprar el dron de ala fija más grande", "Usar una cámara térmica todos los días", "Contratar un dron de fumigación"], answer: 0, why: "En una parcela muy pequeña, recorrer los surcos a pie es más rápido y no cuesta nada." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Los drones en la finca",
        questions: [
          { objective: "O1", q: "Un mapa de dron muestra una mancha amarilla en un campo de maíz. ¿Qué debes hacer después?", options: ["Fumigar todo el campo de una vez", "Caminar hasta la mancha y mirar las plantas, el suelo y los insectos", "Ignorarla; los mapas de dron siempre están mal", "Volar otra vez hasta que la mancha desaparezca"], answer: 1, why: "Un dron muestra DÓNDE mirar; el POR QUÉ lo averiguas en el terreno." },
          { objective: "O2", q: "¿Qué dron es mejor para mapear una plantación de té de 200 hectáreas?", options: ["Un dron de juguete", "Un dron pequeño para interiores", "Un dron de ala fija o híbrido", "Ningún dron puede hacerlo"], answer: 2, why: "Los drones de ala fija e híbridos planean y cubren áreas grandes por batería." },
          { objective: "O2", q: "¿Qué cámara ayuda más a encontrar ganado en el monte al amanecer?", options: ["Una cámara térmica", "Solo la cámara normal del teléfono", "Una cámara sin lente", "Una boquilla de fumigación"], answer: 0, why: "Una cámara térmica muestra el calor de los animales cuando hay poca luz." },
          { objective: "O4", q: "Fumigar plaguicida con un dron:", options: ["No necesita trámites extra", "Es lo mismo que tomar fotos", "Necesita sus propias aprobaciones de la autoridad de aviación y del regulador de plaguicidas", "Está permitido en cualquier lugar si el campo es tuyo"], answer: 2, why: "Fumigar es una operación especial, de mayor riesgo, con aprobaciones extra." },
          { objective: "O3", q: "En un huerto familiar de un cuarto de acre, la mejor herramienta suele ser:", options: ["Un dron de ala fija", "Un dron multiespectral", "Imágenes satelitales", "Recorrer los surcos a pie"], answer: 3, why: "En una parcela muy pequeña, ir a pie es más rápido, más barato y muestra más." }
        ]
      }
    },
    {
      name: "Capítulo 2: Normas y seguridad",
      lessons: [
        {
          objectives: ["O4"],
          title: "Quién hace las normas de drones en tu país",
          minutes: 6,
          goal: "Encontrar la autoridad de aviación de tu país y hacer una lista de los papeles de dron que puede exigir.",
          text: [
            "Cada país controla su propio espacio aéreo. En cada país, una autoridad de aviación civil hace y hace cumplir las normas de drones. En Kenia es la Autoridad de Aviación Civil de Kenia (KCAA), con el Reglamento de Aviación Civil (sistemas de aeronaves no tripuladas) de 2020. En Nigeria es la Autoridad de Aviación Civil de Nigeria (NCAA), con la Parte 21 del Reglamento de Aviación Civil de Nigeria de 2023. Otros países, como Ghana, Ruanda, Uganda, Tanzania y Sudáfrica, tienen su propia autoridad y sus propias normas.",
            "Los papeles suelen incluir: registrar el dron; un permiso para importarlo; una licencia de piloto a distancia para la persona que vuela (sobre todo en trabajos comerciales o de mayor riesgo); un certificado de operador para un negocio que vuela por pago (la KCAA lo llama Certificado de Operador Aéreo Remoto, la NCAA Certificado de Operador de RPAS); y autorización para algunos tipos de vuelo. Tanto la KCAA como la NCAA tienen sistemas de drones en línea.",
            "No confíes en un amigo, un vendedor o las redes sociales para conocer las normas. Lee la página de drones de la propia autoridad, o llama o escribe a la autoridad. Las tasas y los pasos cambian, así que revísalos el día en que hagas la solicitud.",
            "Nunca vueles antes de tener el registro, la licencia y las aprobaciones que tu país exige para ese vuelo. Volar sin ellos puede significar multas, que te quiten el dron o algo peor, y pone en riesgo a personas y aeronaves."
          ],
          steps: ["Busca la autoridad de aviación civil de tu país y abre su sitio web oficial.", "Encuentra la página sobre drones, UAS o RPAS.", "Escribe: registro, permiso de importación, licencia de piloto, certificado de operador y autorización de vuelo: ¿cuáles te aplican?", "Anota las tasas, el sistema en línea y la fecha en que lo revisaste.", "Si algo no está claro, contacta directamente a la autoridad."],
          words: [["Autoridad de aviación civil", "el organismo del gobierno que hace y hace cumplir las normas de todo lo que vuela en un país."], ["Registro", "inscribir tu dron ante la autoridad para que tenga un número oficial."], ["Licencia de piloto a distancia (RPL)", "la licencia oficial de una persona que vuela un dron."], ["Certificado de operador", "la aprobación que necesita un negocio para volar drones por pago."]],
          slides: [
            { title: "Cada país tiene una autoridad", bullets: ["Kenia: KCAA, Reglamento UAS 2020", "Nigeria: NCAA, Nig.CARs 2023, Parte 21", "Otros países: su propia autoridad y normas"] },
            { title: "Papeles que puedes necesitar", bullets: ["Registro del dron y permiso de importación", "Licencia de piloto a distancia para quien vuela", "Certificado de operador para volar por pago", "Autorización para algunos vuelos"] },
            { title: "Las normas, de la fuente", bullets: ["Lee la página de drones de la autoridad", "Llama o escribe a la autoridad", "Revisa tasas y pasos el día que solicites"] },
            { title: "La regla de oro", bullets: ["Sin registro, licencia o aprobación: no se vuela", "Multas, dron decomisado, peligro para personas y aeronaves"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Abre el sitio web de la autoridad de aviación civil de tu país (KCAA, NCAA o la tuya). Encuentra la página de drones y escribe una lista de los papeles que exige, la dirección del sistema en línea y la fecha de hoy.",
          youCanNow: "nombrar tu autoridad de aviación, encontrar sus normas de drones y hacer una lista de los papeles que debes tener antes de volar.",
          quickCheck: [
            { objective: "O4", q: "¿Para qué es una licencia de piloto a distancia?", options: ["Para el dron mismo", "Para la persona que vuela el dron", "Para el dueño de la finca", "Para la tienda de drones"], answer: 1, why: "La licencia de piloto a distancia es para la persona que vuela, sobre todo en trabajos comerciales o de mayor riesgo." },
            { objective: "O4", q: "Un vendedor de drones dice que no necesitas papeles para volar para agricultores que te pagan. ¿Qué haces?", options: ["Confiar en el vendedor", "Preguntar en redes sociales", "Revisar la página de drones de la propia autoridad de aviación o comunicarte con la autoridad", "Volar y hacer la solicitud después"], answer: 2, why: "Solo la página o la oficina de la propia autoridad da las normas y los papeles vigentes." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Revisar los peligros de un lugar de vuelo",
          minutes: 5,
          goal: "Recorrer una finca y marcar los peligros y las zonas de no vuelo antes de cualquier vuelo.",
          text: [
            "Antes de cualquier vuelo, mira el lugar en el terreno y en un mapa. Muchas normas mantienen los drones lejos de aeropuertos y pistas de aterrizaje, sitios militares, cárceles, multitudes y zonas del gobierno. Por ejemplo, la Parte 21 de Nigeria tiene reglas de distancia alrededor de los aeródromos y límites para volar sobre zonas pobladas y cerca de personas que no participan en la operación. Las normas de tu país dan las distancias exactas; revísalas.",
            "En la propia finca, busca cables eléctricos, árboles altos, antenas de telefonía, edificios, caminos, viviendas, escuelas, mercados y animales pastando. Busca un lugar despejado y plano para despegar y aterrizar, lejos de las personas y del polvo.",
            "Habla con la gente: el agricultor, los vecinos y cualquiera que trabaje cerca. Diles cuándo vas a volar. Pide permiso antes de volar sobre el terreno o la vivienda de un vecino. Respeta la privacidad: no grabes a personas ni casas."
          ],
          steps: ["Abre una app de mapas y mira el área alrededor de la finca: pistas, caminos, pueblos, sitios sensibles.", "Revisa las normas de tu autoridad sobre distancias a aeropuertos y personas.", "Recorre la finca y marca cables eléctricos, árboles, antenas, edificios y animales.", "Elige un lugar despejado para despegar y aterrizar.", "Avisa al agricultor y a los vecinos cuándo vas a volar, y pide permiso antes de pasar sobre sus tierras."],
          words: [["Zona de no vuelo", "un área donde no se permiten drones sin un permiso especial, como cerca de los aeropuertos."], ["Peligro", "cualquier cosa que pueda causar daño: cables eléctricos, árboles, personas, animales."], ["Aeródromo", "cualquier aeropuerto, pista de aterrizaje o helipuerto."]],
          slides: [
            { title: "Mira más allá de la finca", bullets: ["Aeropuertos, pistas y helipuertos", "Sitios militares, cárceles, multitudes", "Revisa las distancias exactas de tu país"] },
            { title: "Mira en la finca", bullets: ["Cables eléctricos, árboles altos, antenas", "Viviendas, caminos, escuelas, mercados", "Animales pastando"] },
            { title: "Elige un lugar seguro", bullets: ["Área despejada y plana para despegar y aterrizar", "Lejos de las personas y del polvo"] },
            { title: "Habla con la gente", bullets: ["Avisa al agricultor y a los vecinos cuándo vuelas", "Pide permiso antes de pasar sobre sus tierras", "No grabes a personas ni casas"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Dibuja un croquis sencillo de una finca. Marca el lugar de despegue, cada peligro que encuentres, las casas cercanas, los caminos y cualquier pista de aterrizaje a pocos kilómetros que encuentres en una app de mapas.",
          youCanNow: "revisar un lugar en busca de peligros y zonas de no vuelo y elegir un lugar de despegue seguro.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál de estos es un peligro que hay que buscar en la finca antes de volar?", options: ["Un campo despejado y plano", "Un cultivo de maíz sano", "Una antena de telecomunicaciones o árboles altos", "Una mañana seca y soleada"], answer: 2, why: "Las antenas, los árboles, los cables eléctricos y los edificios son peligros que se marcan antes de un vuelo." },
            { objective: "O5", q: "Tu vuelo planeado pasa sobre la vivienda de un vecino. ¿Qué haces?", options: ["Pedirle permiso primero al vecino, y no grabar a personas ni viviendas", "Volar rápido para que no se dé cuenta", "Grabar la vivienda para el informe", "Volar de noche"], answer: 0, why: "Pide permiso antes de volar sobre el terreno o la vivienda de un vecino, y respeta la privacidad." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reunión antes del vuelo y qué hacer si algo sale mal",
          minutes: 5,
          goal: "Dirigir una reunión de seguridad antes del vuelo y conocer los primeros pasos en una emergencia.",
          text: [
            "Los equipos profesionales de drones empiezan cada vuelo con una reunión corta. Todos escuchan el plan: dónde volará el dron, a qué altura, cuánto tiempo, quién es el piloto, quién es el observador que vigila el cielo y el dron, y dónde está el lugar de aterrizaje.",
            "Revisa el clima: no se vuela con lluvia, tormentas eléctricas, viento fuerte o con ráfagas, tormentas de polvo o poca luz, a menos que tu dron y tus aprobaciones lo permitan. Revisa el dron: batería cargada, hélices sin daño, cámara limpia, control conectado.",
            "Acuerden qué harán si algo sale mal: si la batería está baja, aterriza; si una persona o un animal pasa debajo del dron, aléjate o aterriza; si aparece una aeronave tripulada o un helicóptero, baja y aterriza de inmediato. Si el dron se pierde o se estrella, haz seguro el lugar y reporta los incidentes graves a tu autoridad como lo exijan sus normas."
          ],
          steps: ["Informa al equipo: área, altura, tiempo, piloto, observador, lugar de aterrizaje.", "Revisa el clima: lluvia, viento, polvo, luz.", "Revisa el dron: batería, hélices, cámara, conexión del control.", "Acuerden el plan de emergencia: batería baja, personas debajo, aeronave cerca, dron perdido.", "Después del vuelo, escribe lo que pasó en una bitácora."],
          words: [["Observador", "una persona del equipo que vigila el dron y el cielo y avisa al piloto."], ["Reunión previa", "una charla corta antes de un vuelo para que todos conozcan el plan."], ["Bitácora", "un registro de cada vuelo: fecha, lugar, hora, piloto, problemas."]],
          slides: [
            { title: "Informa al equipo", bullets: ["Dónde, a qué altura, cuánto tiempo", "Quién es el piloto, quién el observador", "Dónde vas a aterrizar"] },
            { title: "Revisa el clima y el dron", bullets: ["Sin lluvia, tormentas, viento fuerte ni polvo", "Batería, hélices, cámara, control"] },
            { title: "Si algo sale mal", bullets: ["Batería baja: aterriza", "Personas o animales debajo: aléjate o aterriza", "Aeronave cerca: baja y aterriza de inmediato"] },
            { title: "Después del vuelo", bullets: ["Escríbelo en la bitácora", "Reporta los incidentes graves como exijan tus normas"] }
          ],
          tryIt: "Tarea final: escribe tu plan de uso del dron de una página para una finca: el problema, el tipo de dron y la cámara, la autoridad y los papeles, los peligros de tu croquis, y una lista antes del vuelo con al menos ocho puntos, incluido el plan de emergencia.",
          youCanNow: "informar a un equipo antes de un vuelo, revisar el clima y el dron, y seguir un plan de emergencia sencillo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué pasa en una reunión antes del vuelo?", options: ["El piloto le cobra al cliente", "El equipo escribe el informe final", "Se vende el dron", "Todos escuchan dónde, a qué altura y cuánto tiempo volará el dron, y quién hace qué"], answer: 3, why: "La reunión comparte con todos el plan, los papeles y el lugar de aterrizaje." },
            { objective: "O6", q: "Aparece un helicóptero mientras tu dron está volando. ¿Qué haces?", options: ["Subir más para verlo", "Bajar y aterrizar de inmediato", "Seguir grabando", "Volar hacia él"], answer: 1, why: "Si aparece una aeronave tripulada o un helicóptero, el dron baja y aterriza de inmediato." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Normas y seguridad",
        questions: [
          { objective: "O4", q: "¿Quién hace y hace cumplir las normas de drones en Kenia?", options: ["La Autoridad de Aviación Civil de Kenia (KCAA)", "La oficina de agricultura del condado", "El vendedor del dron", "El jefe local"], answer: 0, why: "La KCAA es la autoridad de aviación civil de Kenia y regula los drones." },
          { objective: "O4", q: "Un amigo te dice que puedes volar un dron nuevo en la finca de un cliente sin ningún papel. ¿Qué haces?", options: ["Vuelas; tu amigo ya lo ha hecho", "Revisas las normas oficiales de la autoridad de aviación y consigues lo que se exige antes de volar", "Vuelas muy temprano para que nadie te vea", "Vuelas solo sobre el terreno del cliente"], answer: 1, why: "Solo cuentan las normas de la autoridad oficial; sin papeles no se vuela." },
          { objective: "O5", q: "¿Cuál es un peligro que hay que marcar antes de volar?", options: ["Un cielo despejado", "Un lugar de despegue seco y plano", "Cables eléctricos que cruzan el campo", "Una batería cargada"], answer: 2, why: "Los cables eléctricos pueden atrapar o dañar el dron y son un peligro real." },
          { objective: "O6", q: "Durante un vuelo aparece cerca un avión pequeño. ¿Qué debe hacer el piloto?", options: ["Subir más para ver mejor", "Seguir grabando", "Volar hacia él", "Bajar y aterrizar de inmediato"], answer: 3, why: "Las aeronaves tripuladas siempre van primero; baja el dron y quítalo del camino." },
          { objective: "O6", q: "¿Cuál es el trabajo del observador?", options: ["Vigilar el dron y el cielo y avisar al piloto", "Volar el dron", "Solo cargar las baterías", "Grabar a los vecinos"], answer: 0, why: "El observador vigila para que el piloto se concentre en volar con seguridad." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Drones para el monitoreo agrícola 1: introducción, normas y seguridad",
    questions: [
      { objective: "O1", q: "¿Qué es un dron?", options: ["Una aeronave pequeña sin piloto a bordo", "Un tractor", "Un satélite del clima", "Una app de teléfono"], answer: 0, why: "Un dron se vuela desde el suelo o en una ruta planeada, sin nadie a bordo." },
      { objective: "O1", q: "¿En qué trabajo de la finca puede ayudar un dron con cámara?", options: ["Subir los precios del mercado", "Encontrar huecos donde la semilla no nació", "Arreglar una bomba rota", "Firmar un contrato"], answer: 1, why: "Desde arriba puedes ver rápido los huecos en un cultivo." },
      { objective: "O1", q: "Un dron muestra una mancha marchita de yuca. El dron te dice:", options: ["Exactamente qué enfermedad es", "Qué plaguicida comprar", "Adónde ir a mirar", "Nada útil"], answer: 2, why: "Muestra dónde; el porqué lo averiguas en el terreno." },
      { objective: "O2", q: "¿Qué dron puede quedarse suspendido y despegar desde un espacio pequeño?", options: ["El de ala fija", "Un planeador de papel", "Un satélite", "El multirrotor"], answer: 3, why: "Los multirrotores tienen varias hélices y pueden quedarse suspendidos." },
      { objective: "O2", q: "Una cámara multiespectral es útil porque:", options: ["Mide luz que el ojo no ve y muestra antes el estrés de las plantas", "Solo toma fotos en blanco y negro", "Hace volar más rápido al dron", "Fumiga fertilizante"], answer: 0, why: "Mide el infrarrojo cercano y otras bandas ligadas a la salud de las plantas." },
      { objective: "O2", q: "Una cámara térmica muestra:", options: ["Solo colores", "El calor", "Los nutrientes del suelo directamente", "Los precios"], answer: 1, why: "Las cámaras térmicas miden el calor, útil para el estrés hídrico y los animales." },
      { objective: "O3", q: "Una cooperativa de 300 fincas pequeñas quiere vigilar el maíz de sus miembros. Una buena opción es:", options: ["Que cada agricultor compre un dron de ala fija", "No usar nunca drones", "Un servicio de dron compartido para todos los miembros", "Solo llamadas telefónicas"], answer: 2, why: "Compartir un dron entre muchos campos reparte el costo." },
      { objective: "O3", q: "Las imágenes satelitales gratuitas sirven poco para plantas individuales porque:", options: ["Siempre están nubladas", "Son en blanco y negro", "Cuestan mucho", "Cada píxel mide unos 10 metros"], answer: 3, why: "Los píxeles gruesos muestran patrones en áreas grandes, no plantas individuales." },
      { objective: "O3", q: "¿Cuál es un costo de usar un dron además de comprarlo?", options: ["Baterías y hélices de repuesto", "La lluvia gratis", "La luz del sol", "Nada más"], answer: 0, why: "Las baterías, las hélices, las tasas, la formación, los datos y los viajes cuestan dinero." },
      { objective: "O3", q: "Antes de comprar un dron, la pregunta clave es:", options: ["¿De qué color es?", "¿Qué decisión cambiarán las imágenes, y vale lo que cuesta?", "¿Es el modelo más nuevo?", "¿Mis amigos tienen uno?"], answer: 1, why: "Un dron solo es rentable si mejora una decisión en más de lo que cuesta." },
      { objective: "O4", q: "Las normas de drones de Nigeria están en:", options: ["El folleto de un vendedor", "Un grupo de redes sociales", "La Parte 21 de las Nig.CARs 2023 de la NCAA", "El libro de recibos de la finca"], answer: 2, why: "La Parte 21 de la NCAA cubre el registro, la certificación y las operaciones de los RPAS." },
      { objective: "O4", q: "Las normas de drones de Ghana, Ruanda y Uganda:", options: ["Son exactamente iguales a las de Kenia", "No hacen falta", "Las fijan solo las Naciones Unidas", "Las fija la propia autoridad de aviación de cada país"], answer: 3, why: "Cada país controla su espacio aéreo y tiene sus propias normas." },
      { objective: "O4", q: "Un negocio que vuela drones para agricultores que le pagan suele necesitar:", options: ["Un certificado de operador de la autoridad de aviación", "Nada extra", "Solo un teléfono", "Solo una tarjeta de presentación"], answer: 0, why: "La KCAA y la NCAA tienen certificados de operador para el trabajo comercial con drones." },
      { objective: "O4", q: "¿Dónde debes revisar las tasas vigentes para drones?", options: ["En un periódico viejo", "En la página oficial de la autoridad de aviación el día que hagas la solicitud", "En un rumor", "En la caja del dron"], answer: 1, why: "Las tasas cambian; la página oficial es la fuente confiable." },
      { objective: "O4", q: "Fumigar plaguicida con un dron necesita la aprobación de:", options: ["Solo el agricultor", "Solo el vendedor", "La autoridad de aviación y el regulador de plaguicidas", "Nadie"], answer: 2, why: "Fumigar es una operación especial cubierta por las normas de aviación y de plaguicidas." },
      { objective: "O5", q: "¿Qué lugar suele tener restricciones para drones cerca?", options: ["Un campo de maíz lejos de los pueblos", "La orilla de un río", "Una parcela de frijol", "Una pista de aterrizaje"], answer: 3, why: "Las normas mantienen los drones lejos de aeropuertos y pistas de aterrizaje." },
      { objective: "O5", q: "Antes de volar sobre la vivienda de un vecino debes:", options: ["Pedirle permiso primero", "Volar bajo para sorprenderlo", "Grabarlo", "Volar de noche"], answer: 0, why: "Respeta el terreno y la privacidad de la gente; pide permiso primero." },
      { objective: "O6", q: "¿Qué clima significa que no debes volar un dron pequeño?", options: ["Calma y cielo despejado", "Viento fuerte y con ráfagas o una tormenta eléctrica", "Nubes ligeras sin viento", "Sol de la mañana"], answer: 1, why: "El viento, las tormentas y la lluvia pueden hacerte perder el control." },
      { objective: "O6", q: "Durante un vuelo, el aviso de batería dice que está baja. Debes:", options: ["Volar una línea más", "Subir más", "Aterrizar", "Apagar el control"], answer: 2, why: "Batería baja significa bajar el dron con seguridad ahora." },
      { objective: "O6", q: "Después de cada vuelo debes:", options: ["Borrar todas las fotos", "Vender el dron", "Olvidarte del tema", "Anotar el vuelo en una bitácora"], answer: 3, why: "Una bitácora registra cada vuelo y cualquier problema." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      3,
      5,
      6,
      9,
      10,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte del plan y revísala de nuevo.",
    criteria: [
      {
        name: "Problema de la finca",
        objective: "O1",
        notYet: "El problema es vago, o es algo que un dron no puede hacer.",
        meets: "Nombra un problema claro de la finca en el que un dron puede ayudar, y lo que se seguirá revisando a pie.",
        exceeds: "Dice qué decisión cambiarán las imágenes."
      },
      {
        name: "Dron y cámara",
        objective: "O2",
        notYet: "No hay tipo de dron ni cámara, o no hay razón.",
        meets: "Un tipo de dron y una cámara que sirven para el trabajo y el tamaño de la finca, con una razón.",
        exceeds: "Lo compara con un dron, imágenes satelitales o recorrer a pie, y explica el costo."
      },
      {
        name: "Autoridad y papeles",
        objective: "O4",
        notYet: "Falta la autoridad o los papeles.",
        meets: "Nombra la autoridad de aviación del país y los papeles que hay que revisar o conseguir, tomados de su propio sitio web.",
        exceeds: "Incluye el enlace y la fecha en que se revisaron las normas."
      },
      {
        name: "Peligros del lugar",
        objective: "O5",
        notYet: "No enumera peligros.",
        meets: "Enumera los peligros y las zonas de no vuelo que encontró, y a quién se le avisará del vuelo.",
        exceeds: "Incluye un croquis sencillo con el lugar de despegue."
      },
      {
        name: "Lista de seguridad",
        objective: "O6",
        notYet: "Menos de ocho puntos, o no hay pasos de emergencia.",
        meets: "Al menos ocho puntos antes del vuelo que cubren el clima, el dron, el equipo y el lugar, con pasos de emergencia.",
        exceeds: "Nombra los papeles de piloto y observador y cómo se reportan los incidentes."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica del plan de uso del dron",
      "Participantes que buscan las normas de drones de su autoridad de aviación en un plazo de 30 días (encuesta de seguimiento)",
      "Participantes que siguen con el curso 2 de la serie de drones",
      "Programas aliados que reportan que los usuarios de drones se registran y sacan licencias antes de volar"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono con internet para abrir la página de drones de la autoridad de aviación",
      "Un cuaderno y una pluma para el plan de uso del dron y la lista",
      "Una finca real o de ejemplo para recorrer en la revisión del lugar",
      "Unos 60 minutos en total, en sesiones cortas, más tiempo para escribir el plan"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego abran en vivo con el grupo la página de drones de la autoridad.",
      "No vuelen un dron como parte de este curso, salvo que el piloto, el dron y el vuelo tengan todas las aprobaciones que exige el país.",
      "Recorran juntos una finca real para practicar cómo detectar peligros, y recuerda que no se graba a personas ni viviendas.",
      "Revisa en el sitio de la autoridad si cambiaron las normas antes de cada edición del curso.",
      "Califica el plan de uso del dron con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
