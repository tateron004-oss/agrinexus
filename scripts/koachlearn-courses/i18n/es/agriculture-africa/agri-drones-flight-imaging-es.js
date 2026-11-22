"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-drones-flight-imaging.js. See scripts/koachlearn-courses/README.md, "Translations".

const NCAA_P21 = { name: "Autoridad de Aviación Civil de Nigeria (NCAA): Nig.CARs 2023, Parte 21, sistemas de aeronaves pilotadas a distancia", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KCAA_UAS = { name: "Autoridad de Aviación Civil de Kenia (KCAA): Sistemas de aeronaves no tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const FAO_ITU_DRONES = { name: "FAO y UIT: E-agriculture in Action: drones para la agricultura (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-flight-imaging-es",
  lang: "es",
  translationOf: "agri-drones-flight-imaging",
  category: "Agriculture (Africa)",
  name: "Drones para el monitoreo agrícola 2: operaciones de vuelo, imágenes y sensores",
  skills: "Hacer una revisión antes del vuelo, Volar dentro del alcance visual, Planear un vuelo automático de mapeo, Elegir la altura y el traslape, Elegir el sensor correcto, Capturar imágenes nítidas y parejas",
  outcome: "planear y preparar un vuelo de mapeo sobre una parcela: elegir el sensor, la altura, el traslape y la hora del día, hacer las revisiones antes del vuelo y capturar un juego completo de imágenes nítidas y parejas que se puedan unir en un mapa.",
  about: [
    "Este es el Curso 2 del itinerario de monitoreo con drones, para agricultores, extensionistas, personal de agronegocios y jóvenes que dan servicios con drones en Kenia, Nigeria y toda África. Toma primero el Curso 1, o asegúrate de que ya conoces las normas de drones de tu país y tienes el registro, la licencia y las aprobaciones que exigen.",
    "En el Capítulo 1 aprendes a preparar un dron, volarlo con seguridad a la vista y planear un vuelo automático de mapeo con la altura y el traslape correctos. En el Capítulo 2 aprendes lo que muestra cada sensor (color, multiespectral, térmico) y cómo la luz, el viento y la hora marcan la diferencia entre un mapa útil y uno inútil.",
    "Los ejemplos usan trabajos agrícolas reales: una parcela de maíz de 2 hectáreas, un lote de té, un campo de yuca, un invernadero de hortalizas. Cada lección termina con una tarea corta de práctica. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Escribe un plan de vuelo completo para tomar imágenes de una parcela de maíz de 2 hectáreas (real o de ejemplo): el objetivo del vuelo, el sensor, la altura de vuelo y el detalle de imagen que muestra tu app de vuelo, el traslape frontal y lateral, la velocidad de vuelo, el número de baterías, la hora del día, los límites de clima, el lugar de despegue y una lista de revisión antes del vuelo. Si tienes un dron y las aprobaciones necesarias, vuélalo y revisa cada imagen antes de dejar el campo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Agricultores, extensionistas, personal de agronegocios y jóvenes que dan servicios con drones en Kenia, Nigeria y en toda África y que toman el curso 2 de la serie de monitoreo con drones.",
    startingPoint: "Saben lo que un dron puede hacer en una finca y cómo encontrar las normas de drones de su país (curso 1). Pocos han hecho una revisión escrita antes del vuelo, han volado una cuadrícula de mapeo planeada, han fijado la altura y el traslape para el detalle que necesitan, o saben qué sensor y qué luz dan un mapa útil.",
    gap: "Los vuelos mal preparados causan choques, y los vuelos mal planeados o a mala hora dan imágenes borrosas y disparejas que no se pueden unir ni comparar, y desperdician baterías, tiempo y el dinero de los clientes. Planear y preparar bien un vuelo de mapeo da un juego de imágenes completo y nítido a la primera.",
    constraints: [
      "Nivel de lectura: palabras sencillas; cada término de vuelo y de imágenes se explica",
      "Dispositivos: un teléfono o una tableta con una app de mapeo ayuda; solo se necesita un dron para el vuelo opcional",
      "Normas: solo se vuela con el registro, la licencia y las aprobaciones que exige el país",
      "Condiciones del campo: viento, calor, nubes sueltas y sin red móvil en muchas fincas",
      "Tiempo: lecciones cortas, más tiempo para escribir el plan de vuelo"
    ],
    prerequisites: "\"Drones para el monitoreo agrícola 1: introducción, normas y seguridad\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Antes de cada vuelo", action: "hacer una revisión completa antes del vuelo de la aeronave, las baterías, el control, los ajustes y los papeles", standard: "sin saltarse ningún punto de la lista" },
    { id: "O2", condition: "En un vuelo de práctica o aprobado", action: "despegar, volar un recorrido sencillo y aterrizar sin perder de vista el dron", standard: "dentro del límite legal de altura y aterrizando con batería de sobra" },
    { id: "O3", condition: "Para un campo que se va a mapear", action: "planear un vuelo de mapeo en cuadrícula con la altura, el detalle de imagen, el traslape, la velocidad y las baterías", standard: "con un traslape de unos 70 a 80 por ciento frontal y de 60 a 70 por ciento lateral" },
    { id: "O4", condition: "Con una imagen de dron en color de alta resolución", action: "señalar huecos, malezas, agua, acame y daños", standard: "y marcar cada lugar para revisarlo a pie" },
    { id: "O5", condition: "Ante una pregunta de la finca", action: "elegir entre un sensor RGB, uno multiespectral y uno térmico", standard: "con una razón que se ajuste a la pregunta y al costo" },
    { id: "O6", condition: "El día de un vuelo de mapeo", action: "fijar la hora, la luz y los límites de viento, y revisar cada imagen antes de dejar el campo", standard: "para que las imágenes salgan nítidas, con luz pareja y completas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Operaciones de vuelo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Preparar el dron: la revisión antes del vuelo",
          minutes: 5,
          goal: "Hacer una revisión completa del dron antes de cada vuelo.",
          text: [
            "La mayoría de los accidentes con drones empiezan en el suelo: una hélice rajada, una batería cargada a medias, un mapa viejo en la app o una brújula que no se calibró. Una lista escrita, usada cada vez, evita la mayoría de ellos.",
            "Revisa la aeronave (estructura, brazos, hélices firmes y sin daño, cámara limpia y sujeta), las baterías (cargadas por completo, sin hinchazón, contactos limpios), el control y el teléfono o la tableta (cargados, app actualizada antes de salir de casa, mapas sin conexión descargados si no hay red en el campo), y los ajustes (altura de regreso a casa por encima del árbol o la antena más alta, punto de inicio guardado).",
            "Haz también la revisión de papeles: registro, licencia de piloto y cualquier autorización de vuelo que tu autoridad exija para este lugar, contigo o en tu teléfono."
          ],
          steps: ["Revisión de papeles: registro, licencia, aprobaciones para este lugar.", "Aeronave: estructura, brazos, hélices, cámara.", "Baterías: cargadas, sin hinchazón, contactos limpios.", "Control y teléfono o tableta: cargados, app actualizada, mapas sin conexión listos.", "Ajustes: altura de regreso a casa, punto de inicio, calibración de la brújula si la app la pide.", "Mira alrededor: personas, animales, viento; luego empieza."],
          words: [["Revisión antes del vuelo", "una lista de revisiones que se hacen antes de cada vuelo."], ["Regreso a casa (RTH)", "un ajuste que hace que el dron vuelva solo a su punto de despegue, por ejemplo cuando la batería está baja o se pierde la señal."], ["Punto de inicio", "el lugar al que volverá el dron, normalmente donde despegó."]],
          slides: [
            { title: "Los accidentes empiezan en el suelo", bullets: ["Hélices rajadas, baterías débiles", "Mapas viejos en la app, brújula sin calibrar", "Una lista cada vez evita la mayoría"] },
            { title: "Revisa el equipo", bullets: ["Estructura, brazos, hélices, cámara", "Baterías cargadas, sin hinchazón", "Control, teléfono, app actualizada, mapas sin conexión"] },
            { title: "Revisa los ajustes", bullets: ["Altura de regreso a casa sobre el obstáculo más alto", "Punto de inicio guardado", "Brújula calibrada si lo pide"] },
            { title: "Revisa los papeles", bullets: ["Registro y licencia de piloto", "Aprobaciones para este lugar", "Llévalos contigo"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Escribe tu propia lista de revisión antes del vuelo con al menos 12 puntos en cuatro apartados: papeles, aeronave, baterías y control, ajustes. Guárdala en tu teléfono.",
          youCanNow: "preparar un dron con una revisión completa antes del vuelo que cubra papeles, aeronave, baterías, control y ajustes.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es el punto de inicio?", options: ["La casa del piloto", "El lugar al que el dron vuelve solo con el regreso a casa", "El punto más alto de la finca", "La tienda de drones"], answer: 1, why: "El punto de inicio se guarda antes de despegar para que el regreso a casa traiga el dron de vuelta ahí." },
            { objective: "O1", q: "Vas a una finca sin red móvil. ¿Qué haces antes de salir de casa?", options: ["Nada; la app va a funcionar de todos modos", "Planear actualizar la app en el campo", "Dejar las baterías sin cargar", "Descargar mapas sin conexión y actualizar la app"], answer: 3, why: "Las apps se actualizan y los mapas sin conexión se descargan antes de salir, porque puede que no haya red en el campo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Volar con seguridad a la vista",
          minutes: 5,
          goal: "Despegar, volar un recorrido sencillo y aterrizar sin perder de vista el dron.",
          text: [
            "Alcance visual (VLOS) significa que tú, o tu observador, pueden ver el dron con sus propios ojos, sin binoculares, todo el tiempo. La mayoría de los vuelos agrícolas de pequeños productores y pilotos nuevos son VLOS. Volar fuera del alcance visual necesita una aprobación especial. La Parte 21 de Nigeria, por ejemplo, exige VLOS para los drones más pequeños y fija una altura máxima de 120 metros (400 pies) sobre el suelo para muchas operaciones; revisa los límites de tu país.",
            "Despega desde tu lugar despejado, sube a una altura segura por encima de los árboles y quédate suspendido unos segundos para revisar que el dron esté estable. Vuela despacio. Mantén el dron delante de ti, no sobre tu cabeza ni detrás, para no perder la cuenta de hacia dónde mira.",
            "Vigila la batería y el viento. Aterriza con suficiente batería para un aterrizaje seguro, nunca con el último por ciento. Si el viento empuja mucho al dron, tráelo de vuelta y aterriza."
          ],
          steps: ["Párate en tu lugar de despegue con tu observador.", "Despega y sube por encima de los árboles; quédate suspendido y revisa que esté estable.", "Vuela despacio en un cuadrado delante de ti, sin perderlo de vista.", "Vigila la batería y el viento en la pantalla.", "Regresa, baja despacio y aterriza con batería de sobra."],
          words: [["VLOS", "alcance visual: puedes ver el dron con tus propios ojos todo el vuelo."], ["BVLOS", "fuera del alcance visual: volar más lejos de lo que puedes ver; necesita una aprobación especial."], ["AGL", "sobre el nivel del suelo: la altura medida desde el suelo que está debajo del dron."]],
          slides: [
            { title: "Alcance visual", bullets: ["Tú o tu observador siempre ven el dron", "Sin binoculares", "Fuera de la vista necesita aprobación especial"] },
            { title: "Conoce el límite de altura", bullets: ["Nigeria, Parte 21: 120 m (400 pies) AGL en muchos vuelos", "Revisa el límite de tu país"] },
            { title: "Vuélalo bien", bullets: ["Sube sobre los árboles, quédate suspendido, revisa", "Vuela despacio, mantenlo delante de ti", "Vigila la batería y el viento"] },
            { title: "Aterriza con margen", bullets: ["Nunca con el último por ciento", "Si el viento lo empuja: tráelo y aterriza"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Si tienes un dron y aprobación, vuela un cuadrado lento delante de ti y aterriza con batería de sobra. Si no, usa una app gratuita de simulador de drones o mira un video de formación y escribe los pasos que viste.",
          youCanNow: "despegar, volar un recorrido sencillo a la vista y aterrizar con seguridad con batería de sobra.",
          quickCheck: [
            { objective: "O2", q: "¿Para qué sirve mantener el dron \"delante de ti\"?", options: ["Para cargar la batería", "Para que las fotos salgan más brillantes", "Para saber hacia dónde mira el dron", "Para volar fuera del alcance visual"], answer: 2, why: "Mantener el dron delante de ti, no encima ni detrás, te ayuda a no perder su dirección." },
            { objective: "O2", q: "Justo después de despegar, el viento empuja con fuerza al dron. ¿Qué haces?", options: ["Traerlo de vuelta y aterrizar", "Subir más para escapar del viento", "Volar más rápido para terminar", "Mirar a otro lado y dejar que vuele"], answer: 0, why: "Si el viento empuja con fuerza al dron, tráelo de vuelta y aterriza." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planear un vuelo automático de mapeo",
          minutes: 6,
          goal: "Planear un vuelo de mapeo en cuadrícula con la altura, el traslape y la velocidad correctos.",
          text: [
            "Para hacer un mapa de un campo, el dron vuela de ida y vuelta en líneas rectas (una cuadrícula, a veces llamada patrón de cortacésped) y toma fotos que se traslapan. Las apps de mapeo te dejan dibujar el límite del campo y luego planean las líneas por ti.",
            "La altura fija el detalle. Cuanto más alto vuelas, más terreno cubre cada píxel y menos detalle obtienes, pero terminas más rápido. La app lo muestra como distancia de muestreo en el suelo (GSD), por ejemplo 2 cm por píxel. Para contar plantas de maíz necesitas mucho detalle; para ver zonas encharcadas, basta uno más grueso. Nunca planees por encima de tu límite legal de altura.",
            "El traslape es cuánto comparte cada foto con la siguiente. El software necesita mucho traslape para unir las fotos en un solo mapa; muchas guías de mapeo sugieren alrededor de 70 a 80 por ciento hacia adelante y 60 a 70 por ciento hacia los lados, más sobre cultivos altos y parejos como el maíz o el té. Vuela lo bastante despacio para que las fotos salgan nítidas y planea suficientes baterías para terminar."
          ],
          steps: ["Dibuja el límite del campo en la app de mapeo.", "Elige la altura: revisa el GSD que da y quédate bajo tu límite legal.", "Fija el traslape frontal y lateral (por ejemplo, 75 y 65 por ciento).", "Revisa el tiempo de vuelo y el número de baterías.", "Guarda el plan y revísalo otra vez antes de ir al campo."],
          words: [["Vuelo en cuadrícula", "un vuelo en líneas rectas de ida y vuelta que cubre todo el campo."], ["Traslape", "cuánto comparte cada foto con la siguiente, en por ciento."], ["GSD", "distancia de muestreo en el suelo: cuánto terreno cubre un píxel, como 2 cm."], ["Ortomosaico", "una imagen grande, con la precisión de un mapa, unida a partir de muchas fotos que se traslapan."]],
          slides: [
            { title: "Un vuelo de mapeo", bullets: ["Líneas rectas de ida y vuelta", "Las fotos se traslapan", "El software las une en un mapa"] },
            { title: "La altura fija el detalle", bullets: ["Más alto = menos detalle, más rápido", "Más bajo = más detalle, más baterías", "Quédate bajo tu límite legal de altura"] },
            { title: "El traslape hace posible la unión", bullets: ["Lo común: 70-80% frontal, 60-70% lateral", "Más sobre cultivos altos y parejos"] },
            { title: "Antes de salir", bullets: ["Revisa GSD, tiempo de vuelo, baterías", "Guarda el plan y revísalo"] }
          ],
          tryIt: "Abre una app gratuita de mapeo o de planeación de vuelos (o el planificador de vuelo dentro de la app de tu dron) y dibuja un campo de 2 hectáreas. Prueba tres alturas y anota el GSD y el tiempo de vuelo de cada una.",
          youCanNow: "planear un vuelo de mapeo en cuadrícula y elegir la altura, el traslape y la velocidad para el trabajo.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un recorrido en cuadrícula?", options: ["Líneas rectas de ida y vuelta sobre el campo", "Un círculo alrededor de un árbol", "Una sola foto desde muy alto", "Un vuelo a lo largo del camino"], answer: 0, why: "Los vuelos de mapeo van en líneas rectas de ida y vuelta para que las fotos cubran todo el campo con traslape." },
            { objective: "O3", q: "Quieres contar plantas de maíz, pero tu plan da poco detalle. ¿Qué cambias?", options: ["Volar más rápido", "Bajar el traslape", "Volar más bajo para tener un GSD más fino, dentro del límite legal", "Volar en la tarde"], answer: 2, why: "Volar más bajo da más detalle por píxel, pero nunca por encima ni más allá de tus límites legales." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Operaciones de vuelo",
        questions: [
          { objective: "O1", q: "¿Por qué usar cada vez una lista escrita de revisión antes del vuelo?", options: ["Se ve profesional", "La mayoría de los accidentes empiezan con algo que se pasó por alto en el suelo", "El dron la necesita para arrancar", "Reemplaza la licencia"], answer: 1, why: "Una lista detecta hélices rajadas, baterías débiles y ajustes equivocados." },
          { objective: "O1", q: "¿A qué altura se debe fijar el regreso a casa?", options: ["Lo más baja posible", "Por debajo del árbol más alto", "Por encima del árbol o la antena más alta del lugar", "No importa"], answer: 2, why: "El dron debe librar cada obstáculo cuando vuelve solo a casa." },
          { objective: "O2", q: "¿Qué significa VLOS?", options: ["Que puedes ver el dron con tus propios ojos todo el vuelo", "Que el dron te ve a ti", "Que el dron vuela de noche", "Que el dron vuela más allá del horizonte"], answer: 0, why: "Alcance visual significa ver el dron sin ayuda en todo momento." },
          { objective: "O3", q: "Vuelas más alto en un vuelo de mapeo. ¿Qué pasa?", options: ["Más detalle por píxel", "Las fotos dejan de traslaparse", "No cambia nada", "Cada píxel cubre más terreno y terminas más rápido"], answer: 3, why: "Los vuelos más altos dan un GSD más grueso pero cubren el campo más rápido." },
          { objective: "O3", q: "¿Por qué las fotos de mapeo necesitan mucho traslape?", options: ["Para gastar más batería", "Para que el software pueda unirlas en un solo mapa", "Para que las fotos salgan más claras", "Porque la ley exige 100 por ciento"], answer: 1, why: "El software de unión empareja los detalles que comparten las fotos traslapadas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Imágenes aéreas y sensores",
      lessons: [
        {
          objectives: ["O4"],
          title: "Imágenes en color (RGB): lo que puedes ver",
          minutes: 5,
          goal: "Leer una imagen de dron en color de alta resolución en busca de huecos, malezas, agua y daños.",
          text: [
            "Una cámara de color normal (RGB) es el sensor más útil para la mayoría de las fincas, y viene con casi todos los drones. Con unos pocos centímetros por píxel puedes ver plantas individuales de maíz, frijol o yuca.",
            "En las imágenes en color busca: huecos en los surcos (mala germinación o plantas comidas por plagas), manchas de malezas entre surcos, agua estancada y suelo desnudo, maíz o sorgo acamado (caído), daños por granizo o viento, vacas o cabras en el lugar equivocado, y drenajes tapados o cercas rotas.",
            "Las imágenes en color también pueden dar pistas de problemas de nutrientes o enfermedades (amarillamiento, verde disparejo), pero los muestran más tarde de lo que podrían el ojo en el terreno o una cámara multiespectral. Marca siempre el lugar y revísalo a pie."
          ],
          steps: ["Abre la imagen o el mapa y aléjate para ver todo el campo.", "Busca cualquier cosa dispareja: huecos, cambios de color, agua, suelo desnudo.", "Acércate a cada una.", "Marca cada lugar con un número y una nota corta.", "Camina hasta los lugares para revisarlos."],
          words: [["Imagen de alta resolución", "una imagen con mucho detalle, donde cada píxel cubre un pedazo pequeño de terreno."], ["Acame", "cuando los tallos de maíz, sorgo o trigo se doblan o se caen."]],
          slides: [
            { title: "RGB: el sensor de todos los días", bullets: ["Viene con casi todos los drones", "Muestra plantas individuales a pocos cm por píxel"] },
            { title: "Qué buscar", bullets: ["Huecos en surcos, manchas de malezas", "Agua estancada, suelo desnudo", "Maíz acamado, daños por granizo o viento", "Animales, cercas rotas, drenajes tapados"] },
            { title: "Límites", bullets: ["Muestra tarde las enfermedades y la falta de nutrientes", "Revisa siempre los lugares a pie"] }
          ],
          tryIt: "Busca en internet una foto de dron o una vista satelital de una finca (o usa la tuya). Haz una lista de cinco cosas que puedas ver, marca dónde está cada una y di qué revisarías en el terreno.",
          youCanNow: "leer una imagen de dron en color y marcar huecos, malezas, agua y daños para revisarlos en el terreno.",
          quickCheck: [
            { objective: "O4", q: "En una imagen en color, ¿qué puede mostrar un hueco en un surco?", options: ["Demasiado fertilizante", "Una batería fuerte", "Una buena cosecha", "Mala germinación o plantas comidas por plagas"], answer: 3, why: "Los huecos en los surcos casi siempre significan que la semilla no nació o que las plantas fueron comidas." },
            { objective: "O4", q: "La imagen muestra una mancha dispareja y amarillenta en un campo de frijol. ¿Qué haces?", options: ["Fumigar todo el campo", "Marcar el lugar y revisarlo a pie", "No hacerle caso", "Borrar la imagen"], answer: 1, why: "Las imágenes en color pueden dar pistas de problemas, pero el lugar se tiene que revisar en el terreno." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sensores multiespectrales y térmicos",
          minutes: 6,
          goal: "Elegir entre sensores RGB, multiespectrales y térmicos para una pregunta de la finca.",
          text: [
            "Las hojas verdes sanas reflejan mucha luz del infrarrojo cercano, que el ojo no puede ver. Las hojas estresadas o enfermas reflejan menos. Una cámara multiespectral mide varias bandas de luz, como el infrarrojo cercano y el borde rojo, para que el software calcule índices de vegetación como el NDVI, que muestran el vigor de las plantas. La FAO usa el NDVI desde satélites para seguir la salud de la vegetación en toda África; los drones hacen lo mismo a escala de campo.",
            "Una cámara térmica mide la temperatura de la superficie. Las plantas a las que les falta agua cierran sus poros y se calientan, así que las imágenes térmicas pueden mostrar el estrés hídrico y las líneas de riego tapadas. La térmica también sirve para encontrar animales de noche o al amanecer.",
            "Estos sensores cuestan más y hay que usarlos con cuidado (calibración, la hora correcta del día). Elígelos cuando la pregunta los necesite: estrés temprano en una plantación de té o en hortalizas con riego, sí; contar huecos en una parcela de frijol de 1 acre, no, basta el color."
          ],
          words: [["Infrarrojo cercano (NIR)", "luz justo más allá del rojo que las personas no pueden ver; las hojas sanas reflejan mucha."], ["Índice de vegetación", "un número calculado a partir de bandas de luz que muestra qué tan verdes y vigorosas están las plantas."], ["NDVI", "índice de vegetación de diferencia normalizada: un índice común calculado con la luz roja y la del infrarrojo cercano, de -1 a +1; un valor más alto suele significar plantas verdes más densas y sanas."]],
          slides: [
            { title: "Multiespectral", bullets: ["Mide rojo, borde rojo, infrarrojo cercano y más", "El software hace mapas de índices como el NDVI", "Muestra el estrés antes que el color"] },
            { title: "Térmica", bullets: ["Mide la temperatura de la superficie", "Las plantas con falta de agua están más calientes", "Encuentra riego tapado y animales al amanecer"] },
            { title: "Elige según la pregunta", bullets: ["Huecos y malezas: RGB", "Estrés temprano en cultivos de alto valor: multiespectral", "Estrés hídrico o animales: térmica"] }
          ],
          sources: [{ name: "FAO GIEWS Observación de la Tierra (NDVI e indicadores de vegetación)", url: "https://www.fao.org/giews/earthobservation/index.jsp" }, FAO_ITU_DRONES],
          tryIt: "Para cada pregunta, elige RGB, multiespectral o térmica y escribe por qué: (a) ¿Está tapada mi línea de goteo? (b) ¿Dónde no germinó el frijol? (c) ¿Hay un lote de té estresado antes de que las hojas cambien de color?",
          youCanNow: "decir lo que muestran los sensores multiespectrales y térmicos y elegir el sensor correcto para una pregunta de la finca.",
          quickCheck: [
            { objective: "O5", q: "¿Qué mide una cámara térmica?", options: ["La altura de las plantas", "La temperatura de la superficie", "Los nutrientes del suelo", "La lluvia"], answer: 1, why: "Una cámara térmica mide la temperatura de la superficie, y eso puede mostrar el estrés hídrico." },
            { objective: "O5", q: "Una plantación de té quiere detectar a tiempo el estrés en todos sus bloques. ¿Qué sensor le sugieres?", options: ["Ninguno", "Una cámara térmica solo para animales", "Una cámara de teléfono", "Una cámara multiespectral"], answer: 3, why: "Las cámaras multiespectrales miden el infrarrojo cercano y el borde rojo, que muestran antes el estrés de las plantas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Capturar buenas imágenes: luz, viento y hora",
          minutes: 5,
          goal: "Preparar un vuelo para que cada imagen salga nítida, con luz pareja y útil.",
          text: [
            "Las imágenes tomadas con semanas de diferencia solo se pueden comparar si se toman de la misma forma. Vuela cerca del mediodía, cuando las sombras son cortas, y con luz estable: sol pleno o nubes parejas, no nubes sueltas que pasan sobre el campo. Vuela a la misma altura y con los mismos ajustes cada vez.",
            "El viento sacude el dron y mueve las hojas, lo que hace borrosas las imágenes y arruina la unión. Vuela más despacio con viento ligero y no vueles con viento fuerte. Asegúrate de que el lente esté limpio y de que la cámara enfoque bien; muchas apps de mapeo ajustan la cámara por ti.",
            "Con cámaras multiespectrales, fotografía el panel de calibración (una tarjeta de reflectancia conocida que viene con el sensor) antes y después del vuelo, para que el software pueda corregir la luz. Antes de dejar el campo, revisa las fotos: si algunas están borrosas, oscuras o faltan, vuelve a volar esa parte mientras sigues allí."
          ],
          steps: ["Planea volar cerca del mediodía con luz estable.", "Revisa el viento; ve más despacio con viento ligero, cancela con viento fuerte.", "Limpia el lente; revisa los ajustes de la cámara.", "Multiespectral: fotografía el panel de calibración antes y después.", "Antes de irte, revisa las fotos y vuelve a volar cualquier sección mala."],
          words: [["Panel de calibración", "una tarjeta de brillo conocido que se fotografía antes y después de un vuelo multiespectral para corregir la luz."], ["Desenfoque", "cuando una imagen no sale nítida porque la cámara o las plantas se movieron."]],
          slides: [
            { title: "Igual, cada vez", bullets: ["Vuela cerca del mediodía: sombras cortas", "Luz estable: sol pleno o nubes parejas", "Misma altura y ajustes en cada vuelo"] },
            { title: "Vence al desenfoque", bullets: ["Ve más despacio con viento ligero", "Cancela con viento fuerte", "Lente limpio, ajustes de cámara correctos"] },
            { title: "Extras de la multiespectral", bullets: ["Fotografía el panel de calibración", "ANTES y DESPUÉS del vuelo"] },
            { title: "Revisa antes de irte", bullets: ["Mira las fotos", "Vuelve a volar las partes borrosas, oscuras o faltantes"] }
          ],
          tryIt: "Tarea final: escribe tu plan de vuelo completo para tomar imágenes de una parcela de maíz de 2 hectáreas: objetivo, sensor, altura y GSD, traslape, velocidad, baterías, hora del día, límites de clima, lugar de despegue y lista de revisión. Si tienes un dron y las aprobaciones necesarias, vuélalo y revisa cada imagen antes de irte.",
          youCanNow: "planear y capturar un juego de imágenes nítidas y con luz pareja que se puedan unir en un mapa de la finca y comparar en el tiempo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es un panel de calibración?", options: ["Una hélice de repuesto", "Un estuche de baterías", "Una tarjeta de reflectancia conocida que se fotografía antes y después de un vuelo multiespectral", "La pantalla del control"], answer: 2, why: "Fotografiar el panel de calibración permite que el software corrija la luz de ese día." },
            { objective: "O6", q: "Al mediodía pasan rápido nubes sueltas sobre el campo. ¿Qué haces?", options: ["Esperar sol pleno o nubes parejas antes de volar", "Volar ahora y esperar que salga bien", "Volar al anochecer", "Volar más alto para quedar encima de las nubes"], answer: 0, why: "Una luz estable, con sol pleno o nubes parejas, da imágenes con luz pareja que se pueden comparar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Imágenes aéreas y sensores",
        questions: [
          { objective: "O4", q: "¿Qué sensor basta para encontrar huecos en una parcela de frijol de 1 acre?", options: ["Solo la térmica", "Solo la multiespectral", "Una cámara de color normal (RGB)", "Ningún sensor puede hacerlo"], answer: 2, why: "Los huecos se ven fácilmente en imágenes en color a pocos centímetros por píxel." },
          { objective: "O5", q: "Las hojas verdes sanas reflejan mucha:", options: ["Luz del infrarrojo cercano", "Sonido", "Solo calor", "Ondas de radio"], answer: 0, why: "La estructura de una hoja sana refleja mucho en el infrarrojo cercano; los índices de vegetación lo usan." },
          { objective: "O5", q: "Una imagen térmica muestra un lote de tomates mucho más caliente que el resto. Una causa probable que hay que revisar es:", options: ["Demasiado color de fertilizante", "El dron voló demasiado alto", "El lote está más verde", "Estrés hídrico o una línea de goteo tapada"], answer: 3, why: "Las plantas a las que les falta agua se calientan porque cierran sus poros." },
          { objective: "O6", q: "¿Cuál es el mejor momento para volar si quieres imágenes comparables?", options: ["Al amanecer una semana y al atardecer la siguiente", "Cerca del mediodía, con luz estable, de la misma forma cada vez", "Con nubes sueltas en movimiento", "De noche"], answer: 1, why: "Las sombras cortas y la luz estable hacen comparables las imágenes." },
          { objective: "O6", q: "Al revisarlas en el campo, algunas fotos salen borrosas. Debes:", options: ["Volver a volar esa sección antes de irte", "Irte a casa y esperar que la unión funcione", "Borrar todo el juego", "Volar más rápido la próxima vez"], answer: 0, why: "Arreglarlo en el lugar te ahorra otro viaje y da un mapa completo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Drones para el monitoreo agrícola 2: operaciones de vuelo, imágenes y sensores",
    questions: [
      { objective: "O1", q: "¿Dónde empiezan la mayoría de los accidentes con drones?", options: ["Solo en el aire", "En el suelo, con algo que se pasó por alto al preparar", "En la oficina", "En el software después de aterrizar"], answer: 1, why: "Las hélices rajadas, las baterías débiles y los ajustes equivocados causan muchos accidentes." },
      { objective: "O1", q: "¿Qué es parte de la revisión de papeles?", options: ["Que las hélices estén firmes", "Limpiar el lente", "Registro, licencia y aprobaciones para el lugar", "La hinchazón de la batería"], answer: 2, why: "La revisión de papeles confirma que tienes permiso para volar allí." },
      { objective: "O1", q: "Una batería se ve hinchada. Debes:", options: ["No usarla", "Usarla para un vuelo corto", "Aplastarla", "Cargarla más"], answer: 0, why: "Una batería hinchada puede fallar o incendiarse; no vueles con ella." },
      { objective: "O1", q: "¿Por qué descargar mapas sin conexión antes de ir a una finca rural?", options: ["Para ahorrar en combustible", "Para que el dron vaya más rápido", "Porque la ley lo exige", "Puede que no haya red móvil en el campo"], answer: 3, why: "Sin red, la app puede no cargar los mapas que necesita." },
      { objective: "O1", q: "El regreso a casa es:", options: ["Un ajuste que hace volver solo al dron a su punto de despegue", "Un botón que apaga los motores", "Un modo de la cámara", "Un tipo de batería"], answer: 0, why: "El RTH trae el dron a casa con batería baja o pérdida de señal." },
      { objective: "O2", q: "Volar fuera del alcance visual:", options: ["Siempre está permitido", "Necesita una aprobación especial", "Es obligatorio para hacer mapas", "Es más seguro"], answer: 1, why: "El BVLOS es de mayor riesgo y necesita autorización." },
      { objective: "O2", q: "La Parte 21 de Nigeria fija una altura máxima común de:", options: ["10 metros", "1,000 metros", "120 metros (400 pies) sobre el suelo", "Sin límite"], answer: 2, why: "La Parte 21 usa 120 m (400 pies) AGL para muchas operaciones; revisa el límite de tu país." },
      { objective: "O2", q: "Durante un vuelo, ¿dónde debes mantener el dron?", options: ["Detrás de ti", "Justo sobre tu cabeza", "Fuera de la vista", "Delante de ti, a la vista"], answer: 3, why: "Delante y a la vista, puedes saber hacia dónde mira." },
      { objective: "O2", q: "¿Cuándo debes aterrizar?", options: ["Con batería de sobra", "Al 0 por ciento", "Solo cuando el dron aterrice solo", "Cuando el teléfono esté lleno"], answer: 0, why: "Deja suficiente batería para bajar y aterrizar con seguridad." },
      { objective: "O3", q: "Un vuelo de mapeo vuela:", options: ["En círculos", "En líneas rectas de ida y vuelta", "Al azar", "Derecho hacia arriba y hacia abajo"], answer: 1, why: "Un patrón en cuadrícula cubre todo el campo con fotos traslapadas." },
      { objective: "O3", q: "GSD significa:", options: ["La velocidad del dron sobre el suelo", "La distancia global de seguridad", "Cuánto terreno cubre un píxel", "El tamaño de la batería"], answer: 2, why: "La distancia de muestreo en el suelo es el detalle de la imagen, como 2 cm por píxel." },
      { objective: "O3", q: "Para contar plantas de maíz individuales debes:", options: ["Volar lo más alto posible", "Usar solo satélites", "Volar de noche", "Volar más bajo para tener más detalle, dentro del límite legal"], answer: 3, why: "Un GSD más fino muestra plantas individuales; quédate bajo el límite de altura." },
      { objective: "O3", q: "Un traslape frontal común para hacer mapas es de alrededor de:", options: ["70 a 80 por ciento", "5 por ciento", "0 por ciento", "Exactamente 100 por ciento"], answer: 0, why: "Un traslape alto permite que el software una las fotos." },
      { objective: "O4", q: "El acame en una imagen en color significa:", options: ["Plantas demasiado verdes", "Tallos que se doblaron o se cayeron", "Malezas entre surcos", "Agua sobre el suelo"], answer: 1, why: "El maíz o sorgo acamado queda tendido y se ve fácil desde arriba." },
      { objective: "O4", q: "Una imagen en color muestra una mancha amarillenta. El mejor siguiente paso es:", options: ["Fumigarla", "Ignorarla", "Marcarla y revisarla a pie", "Volar más alto"], answer: 2, why: "Las imágenes muestran dónde; la causa la confirmas en el terreno." },
      { objective: "O5", q: "El NDVI se calcula con:", options: ["Sonido y calor", "Solo luz azul", "Muestras de suelo", "Luz roja y del infrarrojo cercano"], answer: 3, why: "El NDVI compara la reflectancia del rojo y del infrarrojo cercano." },
      { objective: "O5", q: "Un valor alto de NDVI suele significar:", options: ["Vegetación verde densa y sana", "Suelo desnudo", "Agua", "Una cámara rota"], answer: 0, why: "La FAO describe un NDVI alto y positivo como vegetación densa y sana." },
      { objective: "O5", q: "Una cámara térmica es una buena opción para:", options: ["Leer una placa de carro", "Encontrar estrés hídrico y animales al amanecer", "Contar semillas en un costal", "Ver los colores más brillantes"], answer: 1, why: "La térmica mide el calor, ligado al estrés hídrico y a los animales de sangre caliente." },
      { objective: "O6", q: "¿Por qué fotografiar un panel de calibración con una cámara multiespectral?", options: ["Es un recuerdo", "Para probar las hélices", "Para que el software corrija la luz de ese día", "Para medir el viento"], answer: 2, why: "La reflectancia conocida del panel permite que el software corrija las lecturas." },
      { objective: "O6", q: "Viento fuerte y con ráfagas el día de un vuelo de mapeo significa:", options: ["Volar más rápido", "Volar más alto", "Quitar las hélices", "No volar; cambiar la fecha"], answer: 3, why: "El viento fuerte pone en riesgo el control y arruina las imágenes." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      5,
      6,
      10,
      12,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte del plan y revísala de nuevo.",
    criteria: [
      {
        name: "Objetivo y sensor",
        objective: "O5",
        notYet: "No hay objetivo, o el sensor no se ajusta al objetivo.",
        meets: "Un objetivo claro para el vuelo y un sensor que se ajusta a él, con una razón.",
        exceeds: "Explica por qué no eligió un sensor más barato o más caro."
      },
      {
        name: "Altura, detalle y traslape",
        objective: "O3",
        notYet: "Falta la altura, el GSD o el traslape, o la altura pasa el límite legal.",
        meets: "La altura y el GSD que muestra la app, el traslape frontal y lateral, la velocidad y el número de baterías.",
        exceeds: "Muestra cómo el detalle se ajusta al trabajo, como contar plantas."
      },
      {
        name: "Luz, viento y horario",
        objective: "O6",
        notYet: "No hay hora del día ni límites de clima.",
        meets: "La hora del día, la luz, los límites de viento y un plan para revisar cada imagen antes de irse.",
        exceeds: "Incluye los pasos del panel de calibración o una fecha de reserva."
      },
      {
        name: "Lista antes del vuelo",
        objective: "O1",
        notYet: "A la lista le falta la aeronave, las baterías, los ajustes o los papeles.",
        meets: "Cubre la aeronave, las baterías, el control y la app, los ajustes de regreso a casa y los papeles.",
        exceeds: "Agrega el lugar de despegue y cómo se mantiene el dron a la vista."
      },
      {
        name: "Vuelo seguro",
        objective: "O2",
        notYet: "No hay lugar de despegue, o vuela fuera del alcance visual sin aprobación.",
        meets: "Un lugar de despegue despejado, vuelo a la vista y dentro de la altura legal, y aterrizaje con batería de sobra.",
        exceeds: "Nombra a un observador y los pasos si sube el viento."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica del plan de vuelo",
      "Participantes con aprobaciones que dicen haber volado un vuelo de mapeo planeado y obtenido un juego completo de imágenes en un plazo de 60 días (encuesta de seguimiento)",
      "Participantes que siguen con el curso 3 de la serie de drones",
      "Proveedores de servicios con drones que reportan menos vuelos repetidos o choques después de la formación"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una tableta con una app de mapeo con dron, o capturas de pantalla de una",
      "Un cuaderno o una lista impresa",
      "Un dron con su registro, licencia y aprobaciones, solo para el vuelo de práctica opcional",
      "Unos 60 minutos en total, en sesiones cortas, más tiempo para escribir el plan de vuelo"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego planeen en una pantalla un vuelo de mapeo de ejemplo, para que todos vean cómo cambian la altura, el GSD y el traslape.",
      "Cualquier vuelo de práctica debe seguir las normas del país, con un piloto con licencia y las aprobaciones al día, y con los espectadores lejos.",
      "Hagan en voz alta la lista antes del vuelo con un dron real o en foto, y no usen baterías hinchadas.",
      "Usa imágenes de muestra si no hay dron, para que practiquen leer imágenes en color, multiespectrales y térmicas.",
      "Califica el plan de vuelo con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
