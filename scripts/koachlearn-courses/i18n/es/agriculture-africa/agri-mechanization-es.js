"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-mechanization.js). See scripts/koachlearn-courses/README.md, "Translations".
// Safety and money rules kept from the English: machine safety in full, no investment advice, money figures are examples only.

const FAO_HIRE = { name: "FAO: Los servicios de alquiler como negocio (mecanización agrícola sostenible)", url: "https://www.fao.org/sustainable-agricultural-mechanization/hire-services-as-a-business/hire-services/en/" };
const FAO_HIRE_MANUAL = { name: "FAO: Los servicios de alquiler como empresa (manual de capacitación)", url: "https://www.fao.org/documents/card/en/c/I9207EN" };
const FAO_SAMA = { name: "FAO y Comisión de la Unión Africana: Mecanización agrícola sostenible: un marco para África (2018)", url: "https://www.fao.org/documents/card/en/c/ca1136en" };
const FAO_MECH = { name: "FAO: Mecanización agrícola sostenible (desde herramientas de mano hasta equipos motorizados)", url: "https://www.fao.org/sustainable-agricultural-mechanization/en" };
const HELLO = { name: "Hello Tractor: reserva de tractores por aplicación, web o agente de reservas; seguimiento de la flota; propiedad con pago por uso", url: "https://hellotractor.com/" };
const ILO_TRACTORS = { name: "OIT: Construcción y uso seguros de los tractores (repertorio de recomendaciones prácticas)", url: "https://www.ilo.org/resource/safe-construction-and-operation-tractors" };
const PCPB = { name: "Pest Control Products Board (Junta de Productos para el Control de Plagas, Kenia): productos registrados", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Agencia Nacional de Administración y Control de Alimentos y Medicamentos (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };

module.exports = {
  id: "agri-mechanization-es",
  lang: "es",
  translationOf: "agri-mechanization",
  category: "Agriculture (Africa)",
  name: "Maquinaria agrícola y servicios de mecanización",
  skills: "Elegir qué tareas mecanizar, Comparar el costo de alquilar y de comprar, Reservar y revisar servicios de alquiler de tractores, Elegir máquinas pequeñas, Trabajar con seguridad y llevar bitácoras de mantenimiento, Planear un negocio de servicios de mecanización",
  outcome: "decidir, con números, si alquilar o comprar una máquina para una tarea de la finca: escoger las tareas que conviene mecanizar, comparar el costo de alquilar y de ser dueño, reservar y revisar un servicio de alquiler, elegir la máquina pequeña adecuada, usarla con seguridad con una bitácora de mantenimiento y planear un servicio de alquiler para tus vecinos si ser dueño solo conviene así.",
  about: [
    "Este curso es para pequeños y medianos productores, trabajadores agrícolas, jóvenes emprendedores del campo y extensionistas de Nigeria, Ghana, Kenia, Senegal, Burkina Faso y de toda África. La mayor parte del trabajo agrícola en África todavía se hace a mano. Las máquinas permiten sembrar a tiempo, reducen el trabajo pesado y las pérdidas, pero una máquina que pasa parada casi todo el año puede hundir a una finca en deudas.",
    "El Capítulo 1 trata de la decisión: qué tareas conviene mecanizar, alquilar o comprar con una comparación de costos resuelta, y cómo reservar servicios de alquiler de tractores, incluidos los que funcionan con aplicaciones como Hello Tractor. El Capítulo 2 trata de usar las máquinas: máquinas pequeñas como los tractores de dos ruedas, las desgranadoras, las trilladoras y las fumigadoras motorizadas; la seguridad y las bitácoras de mantenimiento; y cómo empezar un negocio de servicios de mecanización para tus vecinos. Compartir maquinaria en grupo se enseña en \"Movilización comunitaria: compartir maquinaria y negociar insumos\".",
    "Las cifras de dinero de este curso son solo ejemplos; usa cotizaciones reales de distribuidores, servicios de alquiler y prestamistas. Este curso explica cómo funcionan los préstamos y los arrendamientos, pero no da consejos de inversión: lee todo contrato completo y pide consejo a un asesor de confianza. Cada lección dura unos cinco minutos y termina con una tarea para tu propia finca. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Haz una hoja de decisión entre alquilar o comprar para una máquina y una tarea de tu finca (o para un ejemplo como un tractor para arar 10 hectáreas de maíz en Kaduna, o una desgranadora de maíz para un grupo de productores cerca de Tamale): la tarea y por qué conviene mecanizarla; el costo anual de ser dueño (costos fijos y costos por hectárea); el costo de alquilar; el área de equilibrio; tu decisión; y las reglas de seguridad y la bitácora de mantenimiento que usarás. Si decides comprar, agrega un plan de una página para alquilar la máquina a tus vecinos: servicios, clientes y hectáreas, precio, costos, punto de equilibrio, reservas y pagos, y los riesgos principales.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños y medianos productores, trabajadores agrícolas, líderes de grupos de productores, jóvenes emprendedores del campo y extensionistas de Nigeria, Ghana, Kenia, África occidental francófona y otras partes de África que alquilan, o piensan comprar, un tractor o una máquina pequeña.",
    startingPoint: "Hacen casi todo el trabajo a mano o con bueyes, y a veces alquilan un tractor por medio de un intermediario. Pocos han comparado el costo completo de ser dueño con el de alquilar, han revisado el trabajo que pagaron o han llevado una bitácora de mantenimiento. Algunos jóvenes ven el alquiler de máquinas como un negocio, pero no han sacado sus costos.",
    gap: "Los productores compran máquinas que se usan poco y cuestan mucho de mantener, o esperan tractores que llegan tarde y siembran tarde. Necesitan elegir las tareas que conviene mecanizar, comparar alquilar y ser dueño con números reales, reservar y revisar servicios de alquiler, usar las máquinas con seguridad y, si compran, ganar con el trabajo para los vecinos.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: un teléfono básico o inteligente y una calculadora; las aplicaciones de reserva necesitan un teléfono inteligente o un agente de reservas",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre las tareas de la finca",
      "Las cifras de dinero son ejemplos; los precios, las tasas de interés y las tarifas de alquiler cambian según el lugar y con el tiempo",
      "Financiamiento: explicar los préstamos y los arrendamientos y sus riesgos; sin consejos de inversión",
      "Seguridad: las máquinas pueden matar; nada de trabajo infantil cerca de las máquinas; fumigadoras solo con plaguicidas registrados, como dice la etiqueta"
    ],
    prerequisites: "Ninguno. \"Agronegocios y administración de la finca\" ayuda con los costos."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con las tareas de tu finca", action: "identificar qué tareas conviene mecanizar", standard: "dando una razón para cada una: oportunidad, mano de obra, pérdidas o volumen" },
    { id: "O2", condition: "Con el precio, los costos de operación y la tarifa de alquiler de una máquina", action: "calcular el costo anual de ser dueño, el costo de alquilar y el área de equilibrio", standard: "con las cuentas correctas y una decisión clara de alquilar o comprar" },
    { id: "O3", condition: "Cuando alquilas un tractor o un servicio de maquinaria", action: "acordar de antemano el precio, el área, la fecha y la calidad, y revisar el trabajo antes de pagar", standard: "midiendo el terreno y obteniendo un recibo" },
    { id: "O4", condition: "Con una tarea de la finca y tu mercado local", action: "elegir una máquina pequeña que se ajuste a la tarea, al volumen de trabajo y a los repuestos y mecánicos cercanos", standard: "anotando al menos cuatro revisiones antes de comprar" },
    { id: "O5", condition: "Antes y después de cada uso de una máquina", action: "hacer las revisiones de seguridad y anotar el trabajo y el mantenimiento en una bitácora", standard: "sin saltarte ninguna regla de seguridad y con cada anotación fechada" },
    { id: "O6", condition: "Con una máquina y las fincas de tu alrededor", action: "escribir un plan de una página para un servicio de alquiler de maquinaria", standard: "con servicios, clientes, precio, costos, punto de equilibrio y riesgos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: ¿Alquilar o comprar?",
      lessons: [
        {
          title: "Qué tareas conviene mecanizar",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar las tareas de tu finca que conviene mecanizar.",
          text: [
            "Mecanizar es usar herramientas y máquinas para el trabajo de la finca, desde herramientas de mano mejoradas y la tracción animal hasta tractores y máquinas motorizadas. La FAO insiste en elegir lo que se ajusta a la finca, a la gente y al lugar. Una máquina conviene cuando gana o ahorra más de lo que cuesta.",
            "Tareas que suelen convenir: la preparación del suelo, cuando arar o subsolar a tiempo después de las primeras lluvias te deja sembrar a tiempo; la trilla y el desgrane, donde una máquina hace en horas lo que a muchas personas les toma días, y pierde menos grano en el suelo; el transporte de la cosecha y de los insumos; el bombeo de agua; y el procesamiento, como rallar yuca o moler. Tareas que convienen menos: parcelas pequeñas, trabajos que a mano son baratos y rápidos, o tareas que haces solo una vez al año durante pocas horas.",
            "Hazte cuatro preguntas sobre cada tarea. Oportunidad: ¿hacerla tarde baja la cosecha? Mano de obra: ¿falta gente o es cara en ese momento? Pérdidas: ¿hacerla a mano pierde cosecha? Volumen: ¿hay suficiente trabajo para mantener ocupada una máquina? Luego compara el costo a mano y a máquina. Ejemplo (las cifras son solo un ejemplo): arar 1 hectárea a mano toma 25 jornales a GHS 50 = GHS 1,250, mientras que alquilar un tractor cuesta GHS 600 por hectárea."
          ],
          steps: ["Anota cada tarea grande de tu finca a lo largo del año.", "Para cada una, pregunta: oportunidad, mano de obra, pérdidas, volumen.", "Calcula el costo a mano: jornales x salario diario.", "Busca el costo a máquina: tarifa de alquiler x hectáreas.", "Marca las tareas donde la máquina cuesta menos o gana más."],
          words: [["Mecanización", "usar herramientas y máquinas, desde herramientas de mano mejoradas hasta tractores, para el trabajo de la finca."], ["Oportunidad", "hacer una tarea en el momento justo, como sembrar poco después de que empiezan las lluvias."], ["Jornal", "el trabajo que hace una persona en un día."]],
          slides: [
            { title: "Cuándo conviene una máquina", bullets: ["Gana o ahorra más de lo que cuesta", "Desde herramientas de mano mejoradas hasta tractores", "Ajustada a la finca, a la gente y al lugar"] },
            { title: "Tareas que suelen convenir", bullets: ["Preparar el suelo a tiempo", "Trilla y desgrane: rápido y con menos pérdidas", "Transporte, bombeo, procesamiento"] },
            { title: "Cuatro preguntas", bullets: ["Oportunidad: ¿hacerla tarde baja la cosecha?", "Mano de obra: ¿escasa o cara?", "¿Pérdidas? ¿Volumen de trabajo?"] },
            { title: "Compara el costo", bullets: ["A mano: jornales x salario", "Ejemplo: 25 jornales x GHS 50 = GHS 1,250 por ha", "Ejemplo de alquiler de máquina: GHS 600 por ha"] }
          ],
          sources: [FAO_MECH, FAO_SAMA],
          tryIt: "Anota cinco tareas grandes de tu finca. Para cada una, responde las cuatro preguntas (oportunidad, mano de obra, pérdidas, volumen) y compara el costo a mano con el costo a máquina. Encierra en un círculo las dos tareas que más conviene mecanizar.",
          youCanNow: "escoger las tareas de tu finca que conviene mecanizar y decir por qué.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué suele convenir arar a tiempo?", options: ["Los tractores son más baratos en la época seca", "Sembrar a tiempo después de las lluvias puede subir la cosecha", "Arar tarde mata mejor la maleza", "Hace que el terreno se vea ordenado"], answer: 1, why: "La oportunidad importa: sembrar tarde muchas veces baja la cosecha." },
            { objective: "O1", q: "Desgranar 2 toneladas de maíz a mano toma 20 jornales a NGN 4,000. Un servicio de desgranadora cuesta NGN 50,000. ¿Qué es más barato?", options: ["El servicio de desgranadora", "Desgranar a mano", "Cuestan lo mismo", "No se puede saber"], answer: 0, why: "Desgranar a mano cuesta 20 x 4,000 = NGN 80,000, más que NGN 50,000." }
          ]
        },
        {
          title: "Alquilar o ser dueño: una comparación de costos resuelta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular el costo de ser dueño y de alquilar y encontrar el área de equilibrio.",
          text: [
            "Ser dueño de una máquina tiene costos fijos que pagas cada año aunque nunca se mueva: el valor que pierde a lo largo de su vida (depreciación), el interés de un préstamo o lo que el dinero podría haber ganado en otro lado, el seguro y un galpón. También tiene costos de operación por hectárea: combustible, aceite, reparaciones y el operador. Alquilar tiene un solo costo: la tarifa de alquiler por hectárea.",
            "Ejemplo resuelto para un tractor con arado en Nigeria (todas las cifras son solo ejemplos; usa cotizaciones reales y la tasa real de tu prestamista): precio NGN 30,000,000, vale NGN 6,000,000 después de 10 años, así que la depreciación = (30,000,000 - 6,000,000) / 10 = NGN 2,400,000 al año. Interés del préstamo (ejemplo) NGN 1,800,000 al año, seguro y galpón NGN 600,000. Costos fijos = NGN 4,800,000 al año. Costos de operación = NGN 25,000 por hectárea. Tarifa de alquiler = NGN 60,000 por hectárea.",
            "Cada hectárea que aras con tu propio tractor ahorra 60,000 - 25,000 = NGN 35,000 comparado con alquilar. Área de equilibrio = costos fijos / ahorro por hectárea = 4,800,000 / 35,000 = unas 137 hectáreas al año. Un productor con 10 hectáreas debe alquilar; ser dueño solo conviene si el tractor también trabaja en las fincas de los vecinos. Pesa también lo que los números no muestran: ser dueño significa arar a tiempo, mientras que alquilar significa no tener préstamo ni reparaciones. El arrendamiento y los planes de pago por uso son otras opciones; lee todo contrato completo y pide consejo a un asesor de confianza."
          ],
          steps: ["Depreciación por año = (precio - valor al final) / años de uso.", "Suma interés, seguro y galpón: son los costos fijos por año.", "Suma combustible, aceite, reparaciones y operador por hectárea: costos de operación.", "Ahorro por hectárea = tarifa de alquiler - costos de operación.", "Área de equilibrio = costos fijos / ahorro por hectárea.", "Compárala con tus hectáreas y decide; toma en cuenta la oportunidad y el riesgo."],
          words: [["Depreciación", "el valor que pierde una máquina cada año a medida que envejece."], ["Costos fijos", "los costos que pagas cada año, trabaje o no la máquina."], ["Área de equilibrio", "las hectáreas al año con las que ser dueño cuesta lo mismo que alquilar."]],
          slides: [
            { title: "Costos de ser dueño", bullets: ["Fijos: depreciación, interés, seguro, galpón", "De operación por hectárea: combustible, aceite, reparaciones, operador", "Alquilar: una sola tarifa por hectárea"] },
            { title: "Ejemplo: tractor en Nigeria", bullets: ["Depreciación (30M - 6M) / 10 = NGN 2.4M al año", "Costos fijos en total NGN 4.8M al año", "Operación NGN 25,000 por ha; alquiler NGN 60,000 por ha"] },
            { title: "Área de equilibrio", bullets: ["Ahorro por ha: 60,000 - 25,000 = 35,000", "4,800,000 / 35,000 = unas 137 ha al año", "Finca de 10 ha: alquilar. Solo ejemplos"] },
            { title: "Más allá de los números", bullets: ["Ser dueño: aras a tiempo", "Alquilar: sin préstamo, sin reparaciones", "Arrendamientos y préstamos: léelos completos, consulta a un asesor"] }
          ],
          sources: [FAO_HIRE, FAO_SAMA],
          tryIt: "Consigue cotizaciones reales de una máquina que estés pensando comprar (precio, vida útil esperada y valor al final, costos de operación y la tarifa de alquiler de tu zona). Calcula sus costos fijos por año, el ahorro por hectárea y el área de equilibrio, y escribe si debes alquilar o comprar.",
          youCanNow: "comparar el costo de ser dueño y de alquilar una máquina y encontrar el área de equilibrio.",
          quickCheck: [
            { objective: "O2", q: "Una desgranadora cuesta GHS 20,000 y vale GHS 4,000 después de 8 años. ¿Cuál es su depreciación por año?", options: ["GHS 1,500", "GHS 2,500", "GHS 2,000", "GHS 3,000"], answer: 2, why: "(20,000 - 4,000) / 8 = 2,000 al año." },
            { objective: "O2", q: "Los costos fijos son KES 300,000 al año y ser dueño ahorra KES 6,000 por hectárea. ¿Cuál es el área de equilibrio?", options: ["30 hectáreas", "40 hectáreas", "60 hectáreas", "50 hectáreas"], answer: 3, why: "300,000 / 6,000 = 50 hectáreas al año." }
          ]
        },
        {
          title: "Alquiler de tractores y servicios por aplicación",
          objectives: ["O3"],
          minutes: 5,
          goal: "Reservar un servicio de alquiler y revisar el trabajo antes de pagar.",
          text: [
            "Puedes alquilar máquinas a un vecino o dueño de tractor, a una cooperativa o grupo de productores, a un centro de alquiler público o privado, o a un servicio por aplicación. Hello Tractor es un ejemplo: los productores reservan servicios de tractor con su aplicación móvil o su aplicación web, o por medio de agentes de reservas (extensionistas y agentes de campo que reservan por los productores), y los dueños de tractores la usan para seguir sus tractores y su combustible por GPS. También ofrece planes de pago por uso para ayudar a la gente a tener su propio tractor. La empresa dice que trabaja en más de 20 países africanos, entre ellos Nigeria; revisa qué hay disponible en tu zona.",
            "Los tractores van primero a donde hay mucho trabajo en un solo lugar. Reservar junto con tus vecinos, para que el tractor atienda muchas fincas en un solo viaje, hace más probable que llegue a tiempo.",
            "Antes de empezar el trabajo, acuerda por escrito o por mensaje: el precio por acre o por hectárea, cómo se medirá el área, la fecha, la profundidad y el tipo de trabajo, y quién paga el combustible. Mide tú mismo el terreno, con una cinta o una aplicación de GPS en el teléfono. Después del trabajo, revísalo: profundidad correcta, ninguna franja sin hacer, todo el terreno trabajado. Paga solo después de revisar, por la aplicación oficial, por dinero móvil o con recibo. Nunca pagues por adelantado a un desconocido fuera de la aplicación oficial, y nunca compartas tu PIN ni tus códigos."
          ],
          steps: ["Elige un servicio: vecino, grupo, centro de alquiler o aplicación (por ejemplo Hello Tractor).", "Reserva temprano, junto con tus vecinos si puedes.", "Acuerda de antemano precio, forma de medir el área, fecha, profundidad y combustible.", "Mide tú mismo el terreno.", "Revisa el trabajo: profundidad, ninguna franja sin hacer, todo el terreno.", "Paga después de revisar; pide recibo o registro en la aplicación; nunca compartas tu PIN."],
          words: [["Agente de reservas", "una persona que reserva servicios de maquinaria para los productores, muchas veces con una aplicación."], ["Pago por uso", "pagar algo en pequeñas cantidades a lo largo del tiempo mientras lo usas, hasta que es tuyo."], ["Tarifa de alquiler", "el precio que cobra el servicio, muchas veces por acre o por hectárea."]],
          slides: [
            { title: "Dónde alquilar", bullets: ["Vecinos, grupos, centros de alquiler", "Aplicaciones como Hello Tractor: app, web o agente de reservas", "Revisa qué funciona en tu zona"] },
            { title: "Que el tractor llegue a tiempo", bullets: ["Reserva temprano", "Reserva junto con tus vecinos", "Muchas fincas en un solo viaje"] },
            { title: "Acuerda antes del trabajo", bullets: ["Precio por acre o hectárea; cómo se mide el área", "Fecha, profundidad, tipo de trabajo, combustible", "Por escrito o por mensaje"] },
            { title: "Revisa y luego paga", bullets: ["Mide tú mismo el terreno", "Profundidad correcta; ninguna franja sin hacer", "Paga por app, dinero móvil o con recibo; sin PIN"] }
          ],
          sources: [HELLO, FAO_HIRE],
          tryIt: "Busca dos servicios de alquiler cerca de ti (un dueño de tractor, un grupo, un centro de alquiler o una aplicación). Pregunta a cada uno el precio por hectárea, cómo miden el área, cuándo pueden venir y cómo se paga. Escribe un mensaje corto de reserva que deje claras todas las condiciones.",
          youCanNow: "reservar un tractor o un servicio de maquinaria con condiciones claras y revisar el trabajo antes de pagar.",
          quickCheck: [
            { objective: "O3", q: "¿Cuándo debes pagar por arar con un tractor alquilado?", options: ["Después de revisar el trabajo y el área, con recibo o registro en la aplicación", "Antes de que llegue el tractor, en efectivo a quien llame", "La mitad a un desconocido por mensaje", "Nunca"], answer: 0, why: "Revisar primero y tener un registro te protege del mal trabajo y de las estafas." },
            { objective: "O3", q: "¿Cómo puedes hacer más probable que un tractor alquilado llegue a tiempo?", options: ["Reservar a última hora", "Reservar solo para una parcela muy pequeña", "Reservar temprano, junto con tus vecinos", "Pagar de más por adelantado a un desconocido"], answer: 2, why: "Muchas fincas en un mismo lugar hacen que el viaje le convenga al dueño del tractor." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: ¿Alquilar o comprar?",
        questions: [
          { objective: "O1", q: "¿Qué tarea suele convenir MENOS mecanizar?", options: ["Arar 20 hectáreas a tiempo", "Trillar una cosecha grande de arroz", "Un trabajo de una hora una vez al año en una parcela muy pequeña", "Transportar la cosecha al mercado"], answer: 2, why: "Una máquina para trabajos pequeños y raros cuesta más de lo que ahorra." },
          { objective: "O1", q: "¿Qué pregunta revisa la oportunidad?", options: ["¿La máquina es roja?", "¿Hacer la tarea tarde baja la cosecha?", "¿El distribuidor es amable?", "¿Qué edad tiene el productor?"], answer: 1, why: "La oportunidad se trata de si hacer el trabajo tarde cuesta cosecha." },
          { objective: "O2", q: "¿Cuál es un costo fijo de ser dueño de un tractor?", options: ["El seguro", "El combustible por hectárea", "El pago del operador por hectárea", "El aceite por hora"], answer: 0, why: "El seguro se paga cada año, trabaje o no el tractor." },
          { objective: "O2", q: "El área de equilibrio es de 137 hectáreas al año y tú cultivas 10. ¿Qué debes hacer?", options: ["Comprar de inmediato", "Comprar dos tractores", "Dejar de cultivar", "Alquilar, o comprar solo si también puedes atender a tus vecinos"], answer: 3, why: "Muy por debajo del equilibrio, ser dueño cuesta más que alquilar, a menos que la máquina también trabaje en otro lado." },
          { objective: "O3", q: "Antes de que empiece un tractor alquilado, ¿qué debes acordar?", options: ["Solo el nombre del operador", "Precio por hectárea, cómo se mide el área, fecha, profundidad y combustible", "Nada; confía en ellos", "El PIN de tu dinero móvil"], answer: 1, why: "Las condiciones claras evitan discusiones y mal trabajo; el PIN nunca se comparte." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manejar las máquinas y un negocio de servicios",
      lessons: [
        {
          title: "Máquinas pequeñas para pequeños productores",
          objectives: ["O4"],
          minutes: 5,
          goal: "Elegir una máquina pequeña que se ajuste a tu tarea y a tu zona.",
          text: [
            "No toda finca necesita un tractor de cuatro ruedas. Un tractor de dos ruedas (motocultor) puede arar, pasar la rotativa, bombear agua y jalar un remolque en parcelas pequeñas. Una desgranadora de maíz motorizada o una trilladora multicultivo (para arroz, sorgo, mijo, frijol o soya) ahorra días de trabajo y pierde menos grano. Una fumigadora de mochila motorizada o una nebulizadora cubre más terreno que una fumigadora manual. Otros ejemplos son las ralladoras de yuca, las segadoras de arroz y las picadoras de forraje.",
            "Antes de comprar, revisa: ¿Hay suficiente trabajo, en tu finca y en las de tus vecinos, para mantenerla ocupada? ¿Puede repararla un mecánico cercano, y se venden repuestos cerca de ti? ¿El distribuidor te capacita y te da garantía? ¿Se puede llevar de una finca a otra? ¿Las personas que la van a usar, incluidas las mujeres y los jóvenes, pueden manejarla con seguridad? La FAO ha publicado un catálogo de máquinas adecuadas para las mujeres productoras.",
            "Fumigadoras: usa solo plaguicidas registrados en tu país, como dice la etiqueta, con equipo de protección. En Kenia revisa la lista de la Pest Control Products Board (Junta de Productos para el Control de Plagas); en Nigeria, la NAFDAC. Una fumigadora motorizada echa más producto químico y más rápido, así que ajústala (calíbrala) como dice su manual antes de cada temporada."
          ],
          steps: ["Nombra la tarea y cuántas hectáreas o toneladas al año.", "Elige el tipo de máquina para esa tarea.", "Revisa que haya repuestos y un mecánico cerca de ti.", "Pregunta al distribuidor por la capacitación y la garantía.", "Revisa que se pueda trasladar y que tus operadores la usen con seguridad.", "Para fumigadoras: solo plaguicidas registrados, etiqueta y equipo de protección."],
          words: [["Tractor de dos ruedas", "un tractor pequeño que se maneja caminando detrás, también llamado motocultor, que jala herramientas y mueve bombas."], ["Trilladora", "una máquina que separa el grano de los tallos de la planta."], ["Calibrar", "ajustar una fumigadora para que eche la cantidad correcta, como dicen su manual y la etiqueta del plaguicida."]],
          slides: [
            { title: "Máquinas pequeñas", bullets: ["Tractor de dos ruedas: arar, bombear, remolque", "Desgranadora de maíz; trilladora multicultivo", "Fumigadora motorizada; ralladora de yuca; picadora"] },
            { title: "Antes de comprar", bullets: ["¿Suficiente trabajo para mantenerla ocupada?", "¿Repuestos y mecánico cerca?", "¿Capacitación, garantía, fácil de trasladar?"] },
            { title: "¿Quién la va a usar?", bullets: ["Segura para tus operadores", "También mujeres y jóvenes", "Catálogo de la FAO de máquinas para mujeres productoras"] },
            { title: "Fumigadoras", bullets: ["Solo plaguicidas registrados, como dice la etiqueta", "Kenia: lista de la PCPB. Nigeria: NAFDAC", "Equipo de protección; calibra primero"] }
          ],
          sources: [FAO_MECH, PCPB, NAFDAC],
          tryIt: "Elige una tarea de la Lección 1. Escoge una máquina pequeña para ella y visita o llama a un distribuidor. Pregunta el precio, dónde hay repuestos y reparaciones, qué capacitación y garantía dan y cuánto trabajo puede hacer en un día. Anota las respuestas.",
          youCanNow: "elegir una máquina pequeña que se ajuste a tu tarea, a tu zona y a las personas que la van a usar.",
          quickCheck: [
            { objective: "O4", q: "¿Qué máquina sirve para arar y bombear en parcelas pequeñas?", options: ["Una cosechadora combinada", "Un tractor de dos ruedas (motocultor)", "Una desgranadora de maíz", "Una picadora de forraje"], answer: 1, why: "Un motocultor ara parcelas pequeñas y puede mover una bomba." },
            { objective: "O4", q: "La desgranadora más barata no tiene repuestos ni mecánico a menos de 200 km. ¿Cuál es el riesgo?", options: ["Ninguno; las máquinas nunca se dañan", "Va a desgranar demasiado rápido", "Cuando se dañe, puede quedarse parada por semanas", "Va a gastar muy poco combustible"], answer: 2, why: "Una máquina sin repuestos ni reparaciones cerca puede estar parada cuando más la necesitas." }
          ]
        },
        {
          title: "Seguridad y bitácoras de mantenimiento",
          objectives: ["O5"],
          minutes: 6,
          goal: "Usar una máquina con seguridad y llevar su bitácora de mantenimiento.",
          text: [
            "Las máquinas pueden matar o mutilar en segundos. Los vuelcos de tractor, las personas que caen bajo las ruedas y la ropa atrapada en ejes que giran son causas comunes de muerte en las fincas. La OIT (Organización Internacional del Trabajo) publica un repertorio de recomendaciones prácticas sobre el uso seguro de los tractores. Las reglas principales: solo adultos capacitados manejan las máquinas; ningún niño cerca de las máquinas en marcha; ningún pasajero en el tractor ni en los implementos; usa la protección antivuelco y el cinturón de seguridad donde los haya; ve despacio y recto en las pendientes y lejos de las zanjas; mantén todas las protecciones en su lugar, sobre todo en el eje de la toma de fuerza (TDF); y usa ropa ajustada con el pelo amarrado.",
            "Trilladoras y desgranadoras: nunca metas la mano en la boca de alimentación ni en un atasco. Apaga el motor y espera a que todas las piezas se detengan antes de destaparla. Protege tus oídos y tus pulmones del ruido y del polvo. Echa combustible solo con el motor apagado y frío, sin fumar. Ten un botiquín de primeros auxilios y un teléfono cerca.",
            "Una máquina bien cuidada dura más y se daña menos en la temporada de más trabajo. Haz revisiones diarias antes de trabajar: aceite del motor, combustible, agua o refrigerante, filtro de aire, llantas, tuercas y pernos flojos, y puntos de engrase. Dale servicio según las horas de su medidor, como dice el manual. Lleva una bitácora con: fecha, horas, trabajo y hectáreas o toneladas, combustible, reparaciones y repuestos, costo y nombre del operador. La bitácora muestra el costo real de operación por hectárea."
          ],
          steps: ["Solo un operador adulto y capacitado; ningún niño, ningún pasajero.", "Protecciones puestas; usa la protección antivuelco y el cinturón donde los haya.", "Ve despacio en las pendientes; aléjate de las zanjas.", "Apaga el motor y espera antes de destapar cualquier atasco.", "Revisiones diarias: aceite, combustible, refrigerante, filtro de aire, llantas, pernos, engrase.", "Anota en la bitácora el trabajo, el combustible, las reparaciones y los costos de cada día."],
          words: [["Eje de la toma de fuerza (TDF)", "un eje que gira en el tractor y mueve las herramientas; puede atrapar la ropa y matar."], ["Protección antivuelco", "un marco sobre el asiento del conductor que lo protege si el tractor se voltea."], ["Bitácora", "un cuaderno donde anotas cada trabajo, combustible, reparación y costo de una máquina."]],
          slides: [
            { title: "Primero las personas", bullets: ["Solo adultos capacitados; ningún niño cerca", "Ningún pasajero", "Protección antivuelco y cinturón de seguridad"] },
            { title: "Puntos de peligro", bullets: ["Pendientes y zanjas: ve despacio", "Eje de la TDF: protecciones puestas; ropa ajustada, pelo amarrado", "Atascos: apaga el motor, espera y luego destapa"] },
            { title: "Revisiones diarias", bullets: ["Aceite, combustible, refrigerante, filtro de aire", "Llantas, tuercas y pernos, engrase", "Servicio por horas, como dice el manual"] },
            { title: "La bitácora", bullets: ["Fecha, horas, trabajo, hectáreas o toneladas", "Combustible, reparaciones, repuestos, costo, operador", "Muestra el costo real por hectárea"] }
          ],
          sources: [ILO_TRACTORS],
          tryIt: "Haz una lista de seguridad de una página para una máquina que uses o alquiles, y una página de bitácora con columnas para fecha, horas, trabajo, hectáreas o toneladas, combustible, reparaciones y repuestos, costo y operador. Llena una línea con un trabajo real o de ejemplo.",
          youCanNow: "usar una máquina con las reglas clave de seguridad y llevar una bitácora de mantenimiento que muestre su costo real de operación.",
          quickCheck: [
            { objective: "O5", q: "Una trilladora se atascó. ¿Qué haces?", options: ["Empujar el cultivo con la mano mientras está en marcha", "Pedirle a un niño que lo saque", "Patear la máquina", "Apagar el motor, esperar a que todas las piezas se detengan y luego destaparla"], answer: 3, why: "Las piezas en movimiento pueden llevarse una mano en un segundo; solo se destapa una máquina detenida." },
            { objective: "O5", q: "¿Qué va en la bitácora de una máquina?", options: ["Fecha, horas, trabajo, combustible, reparaciones y costo", "El PIN de dinero móvil del operador", "Solo el color de la máquina", "Nada; basta con la memoria"], answer: 0, why: "Estos registros muestran el costo real de operación y cuándo toca el servicio." }
          ]
        },
        {
          title: "Empezar un negocio de servicios de mecanización",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escribir un plan de una página para un servicio de alquiler de maquinaria.",
          text: [
            "Muchos servicios de alquiler los manejan productores que compraron una máquina para su propia finca y luego la ofrecen a los vecinos, por dinero o a cambio de otro trabajo o de cosecha. El marco de la FAO y de la Unión Africana para la mecanización en África ve a los jóvenes que manejan servicios de alquiler como una forma clave de llevar las máquinas a los pequeños productores. La FAO también publica un manual de capacitación sobre los servicios de alquiler como negocio.",
            "Un plan de una página responde: ¿Qué servicios, en qué temporadas (arar, desgranar, trillar, transportar, bombear)? ¿Quiénes son los clientes, y cuántas hectáreas o toneladas en total? ¿Qué precio, y cómo se compara con otros servicios? ¿Cuáles son los costos (fijos por año y de operación por hectárea, de las Lecciones 2 y 5)? ¿Cuál es el punto de equilibrio? ¿Cómo vas a recibir las reservas y los pagos (anticipos, dinero móvil, recibos)? ¿Quién es el operador, y está capacitado? ¿Cuáles son los riesgos: averías en plena temporada, trabajos sin pagar, accidentes, robos? ¿Cómo los vas a reducir (mantenimiento, condiciones por escrito, seguro, un rastreador GPS)?",
            "Ejemplo para un servicio de motocultor en Senegal o Burkina Faso (todas las cifras son solo ejemplos): costos fijos XOF 600,000 al año, costos de operación XOF 15,000 por hectárea, precio XOF 35,000 por hectárea. Punto de equilibrio = 600,000 / (35,000 - 15,000) = 30 hectáreas. Con 50 hectáreas reservadas, ganancia = 50 x 20,000 - 600,000 = XOF 400,000. Agrupa las fincas cercanas para reducir los viajes, y agrega trabajo fuera de temporada como desgranar y transportar. Las opciones de financiamiento incluyen préstamos, arrendamientos y planes de pago por uso: lee todo contrato completo y pide consejo a un asesor de confianza."
          ],
          steps: ["Anota tus servicios y temporadas.", "Anota los clientes y el total de hectáreas o toneladas.", "Fija un precio que cubra el costo por hectárea más un margen; compáralo con otros.", "Calcula el punto de equilibrio: costos fijos / (precio - costo de operación por hectárea).", "Planea las reservas, el operador, los pagos y los registros.", "Anota los riesgos y cómo vas a reducir cada uno."],
          words: [["Servicio de alquiler", "un negocio que hace trabajo agrícola con sus máquinas para otros productores, a cambio de un pago."], ["Margen", "la parte del precio que queda después de los costos."], ["Trabajo fuera de temporada", "trabajos que una máquina puede hacer fuera de la temporada principal, como transportar o desgranar."]],
          slides: [
            { title: "Servicios de alquiler", bullets: ["Productores que atienden a sus vecinos por un pago", "Forma clave de llevar máquinas a los pequeños productores", "Manual de la FAO: los servicios de alquiler como negocio"] },
            { title: "Plan de una página", bullets: ["Servicios, temporadas, clientes, hectáreas", "Precio, costos, punto de equilibrio", "Reservas, operador, pagos, riesgos"] },
            { title: "Ejemplo: motocultor (XOF)", bullets: ["Fijos 600,000; operación 15,000 por ha; precio 35,000", "Equilibrio 600,000 / 20,000 = 30 ha", "50 ha: ganancia XOF 400,000. Solo ejemplos"] },
            { title: "Haz que funcione", bullets: ["Agrupa fincas cercanas; reduce los viajes", "Agrega trabajos fuera de temporada", "Préstamos y arrendamientos: léelos completos, consulta a un asesor"] }
          ],
          sources: [FAO_HIRE, FAO_HIRE_MANUAL, FAO_SAMA, HELLO],
          tryIt: "Tarea final: haz tu hoja de decisión entre alquilar o comprar para una máquina y una tarea. Si ser dueño solo conviene con el trabajo para los vecinos, agrega un plan de una página para el servicio de alquiler: servicios, clientes y hectáreas, precio, costos, punto de equilibrio, reservas y pagos, y los riesgos principales.",
          youCanNow: "planear un servicio de alquiler de maquinaria con precios, costos, punto de equilibrio y riesgos.",
          quickCheck: [
            { objective: "O6", q: "Los costos fijos son XOF 400,000 al año, los costos de operación XOF 10,000 por hectárea y el precio XOF 30,000 por hectárea. ¿Cuál es el área de equilibrio?", options: ["10 hectáreas", "13 hectáreas", "40 hectáreas", "20 hectáreas"], answer: 3, why: "400,000 / (30,000 - 10,000) = 20 hectáreas." },
            { objective: "O6", q: "¿Qué paso reduce el costo de los viajes de un servicio de alquiler de tractor?", options: ["Agrupar las reservas de fincas cercanas", "Aceptar trabajos muy separados el mismo día", "Rechazar las fincas pequeñas", "No planear nunca las reservas"], answer: 0, why: "Atender juntas las fincas cercanas ahorra combustible y tiempo en el camino." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Manejar las máquinas y un negocio de servicios",
        questions: [
          { objective: "O4", q: "Antes de comprar una máquina pequeña, ¿qué revisión importa más para mantenerla funcionando?", options: ["Su color", "Repuestos y un mecánico cerca de ti", "Lo que pagó el vecino", "La calcomanía de la marca"], answer: 1, why: "Sin repuestos ni reparaciones cerca, una máquina dañada se queda parada." },
          { objective: "O4", q: "Vas a usar una fumigadora motorizada. ¿Qué es lo correcto?", options: ["Cualquier plaguicida del mercado", "Mezclar dos plaguicidas para ahorrar tiempo", "Solo plaguicidas registrados, como dice la etiqueta, con equipo de protección", "Fumigar sin calibrar"], answer: 2, why: "Solo los productos registrados, usados como dice la etiqueta, son seguros y legales." },
          { objective: "O5", q: "¿Cuál es una regla de seguridad del tractor?", options: ["Ningún pasajero en el tractor ni en los implementos", "Los niños pueden subirse si tienen cuidado", "Quitar la protección de la TDF para trabajar más rápido", "Manejar rápido en las pendientes"], answer: 0, why: "Los pasajeros caen bajo las ruedas; es una causa común de muerte en las fincas." },
          { objective: "O5", q: "¿Para qué llevar la bitácora de una máquina?", options: ["Es solo para el banco", "Para mostrar el color de la máquina", "Para que el operador trabaje más despacio", "Para ver el costo real por hectárea y cuándo toca el servicio"], answer: 3, why: "Anotar el trabajo, el combustible y las reparaciones muestra los costos reales y las fechas de servicio." },
          { objective: "O6", q: "¿Qué va en un plan de servicio de alquiler?", options: ["Solo el precio de la máquina", "Servicios, clientes, precio, costos, punto de equilibrio y riesgos", "El PIN del dueño", "Solo un logotipo"], answer: 1, why: "Un plan muestra si el servicio gana más de lo que cuesta y cómo se manejan los riesgos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Maquinaria agrícola y servicios de mecanización",
    questions: [
      { objective: "O1", q: "La mecanización incluye:", options: ["Solo tractores grandes", "Solo máquinas importadas", "Herramientas y máquinas, desde herramientas de mano mejoradas hasta tractores", "Solo drones"], answer: 2, why: "La FAO cuenta todos los niveles, desde las herramientas de mano hasta los equipos motorizados." },
      { objective: "O1", q: "¿Cuál es una buena razón para mecanizar la trilla?", options: ["Hace en horas lo que a muchas personas les toma días, con menos grano perdido", "Las máquinas se ven modernas", "Trillar a mano es ilegal", "Los vecinos tienen máquinas"], answer: 0, why: "El tiempo ahorrado y las menores pérdidas hacen de la trilla una buena tarea para mecanizar." },
      { objective: "O1", q: "Desyerbar 1 hectárea a mano cuesta KES 6,000 y un servicio de máquina cuesta KES 9,000. Solo por costo:", options: ["La máquina es más barata", "Son iguales", "No se pueden comparar", "Desyerbar a mano es más barato"], answer: 3, why: "KES 6,000 es menos que KES 9,000, así que la máquina no conviene solo por costo." },
      { objective: "O2", q: "La depreciación es:", options: ["El combustible que usa una máquina", "El valor que pierde una máquina cada año", "La tarifa de alquiler", "El salario del operador"], answer: 1, why: "La depreciación reparte la pérdida de valor a lo largo de la vida de la máquina." },
      { objective: "O2", q: "¿Cuál es un costo de operación por hectárea?", options: ["El seguro", "El galpón", "El combustible", "El interés del préstamo por año"], answer: 2, why: "El combustible sube con cada hectárea trabajada; los otros son fijos." },
      { objective: "O2", q: "Costos fijos NGN 2,000,000 al año; tarifa de alquiler NGN 50,000 por ha; costo de operación NGN 25,000 por ha. ¿Área de equilibrio?", options: ["80 hectáreas", "40 hectáreas", "50 hectáreas", "100 hectáreas"], answer: 0, why: "2,000,000 / (50,000 - 25,000) = 80 hectáreas." },
      { objective: "O2", q: "¿Qué beneficio de ser dueño suelen dejar fuera los números de costos?", options: ["Pagar más intereses", "Arar a tiempo sin esperar un tractor alquilado", "Un seguro más alto", "Más reparaciones"], answer: 1, why: "La oportunidad tiene valor aunque alquilar sea más barato en papel." },
      { objective: "O3", q: "Hello Tractor permite a los productores reservar servicios de tractor:", options: ["Solo por correo", "Solo en un banco", "Solo en persona en una fábrica", "Por una aplicación móvil, una aplicación web o agentes de reservas"], answer: 3, why: "Hello Tractor dice que los productores reservan con sus aplicaciones o con agentes de reservas." },
      { objective: "O3", q: "¿Cómo debes medir el terreno para un trabajo de alquiler?", options: ["Confiar en el cálculo del operador", "Medirlo tú mismo con una cinta o una aplicación de GPS en el teléfono", "Contar los árboles", "No medirlo"], answer: 1, why: "Tu propia medida te protege de pagar más área de la que se trabajó." },
      { objective: "O3", q: "Alguien llama, dice que es agente de tractores y pide el pago completo por adelantado por dinero móvil. Tú:", options: ["Pagas de inmediato", "Envías tu PIN", "Reservas por la aplicación oficial o con un agente conocido, y pagas después de revisar el trabajo", "Pagas el doble para asegurar"], answer: 2, why: "Las llamadas de desconocidos que piden pago por adelantado son una estafa común." },
      { objective: "O4", q: "Una trilladora multicultivo puede trillar:", options: ["Arroz, sorgo, mijo, frijol o soya", "Solo yuca", "Solo café", "Solo pasto"], answer: 0, why: "Las trilladoras multicultivo trabajan con muchos granos y leguminosas." },
      { objective: "O4", q: "¿Cuál NO es una revisión clave antes de comprar una máquina pequeña?", options: ["Repuestos cerca", "Capacitación y garantía del distribuidor", "Suficiente trabajo para mantenerla ocupada", "El color de su pintura"], answer: 3, why: "Los repuestos, la capacitación y el uso deciden el valor; el color de la pintura no." },
      { objective: "O4", q: "En Kenia, ¿la lista de qué organismo muestra los plaguicidas registrados para las fumigadoras?", options: ["La Kenya Dairy Board", "El Kenya Fisheries Service", "La Pest Control Products Board", "El Kenya Wildlife Service"], answer: 2, why: "La Pest Control Products Board registra los plaguicidas en Kenia." },
      { objective: "O5", q: "¿Quién puede manejar un tractor?", options: ["Cualquier niño que tenga cuidado", "Un adulto capacitado", "Cualquiera que tenga teléfono", "Un pasajero"], answer: 1, why: "Solo los adultos capacitados deben manejar las máquinas." },
      { objective: "O5", q: "¿Por qué las protecciones deben quedarse en el eje de la TDF?", options: ["El eje que gira puede atrapar la ropa y matar", "Hacen más rápido al tractor", "Son solo de adorno", "Ahorran combustible"], answer: 0, why: "Quedar atrapado en la TDF es una causa común de lesiones graves y muertes en las fincas." },
      { objective: "O5", q: "¿Cuándo debes echar combustible a una máquina?", options: ["Mientras está en marcha", "Mientras fumas", "Cerca de una fogata", "Con el motor apagado y frío, sin fumar"], answer: 3, why: "El combustible sobre un motor caliente o cerca de llamas puede encenderse." },
      { objective: "O5", q: "¿Cada cuánto debes hacer las revisiones básicas (aceite, combustible, refrigerante, llantas, pernos)?", options: ["Una vez al año", "Solo cuando se daña", "Todos los días antes de trabajar", "Nunca"], answer: 2, why: "Las revisiones diarias detectan problemas pequeños antes de que paren la máquina en la temporada de más trabajo." },
      { objective: "O6", q: "Costos fijos XOF 500,000 al año; costo de operación XOF 15,000 por ha; precio XOF 40,000 por ha. ¿Área de equilibrio?", options: ["12 hectáreas", "20 hectáreas", "25 hectáreas", "33 hectáreas"], answer: 1, why: "500,000 / (40,000 - 15,000) = 20 hectáreas." },
      { objective: "O6", q: "¿Qué reduce el riesgo de una avería en plena temporada?", options: ["Saltarse el mantenimiento para ahorrar dinero", "Prestarla sin bitácora", "Mantenimiento regular y repuestos en existencia", "Trabajarla día y noche sin revisiones"], answer: 2, why: "El mantenimiento y los repuestos mantienen la máquina trabajando cuando los clientes más la necesitan." },
      { objective: "O6", q: "Antes de firmar un arrendamiento o un préstamo para una máquina, debes:", options: ["Leer todo el contrato y pedir consejo a un asesor de confianza", "Firmar rápido antes de que se acabe la oferta", "Leer solo la primera página", "Dejar que el distribuidor lo llene por ti"], answer: 0, why: "Los contratos traen costos y riesgos; léelos completos y pide consejo." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, hechas antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 3, 5, 8, 9, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Elección de la tarea", objective: "O1", notYet: "No da ninguna razón para mecanizar la tarea.", meets: "La tarea se elige con razones (oportunidad, mano de obra, pérdidas o volumen) y un costo a mano.", exceeds: "Compara dos o más tareas y explica por qué esta es la que más conviene." },
      { name: "Comparación de costos", objective: "O2", notYet: "Faltan costos fijos o de operación, o las cuentas están mal.", meets: "Depreciación, costos fijos, costos de operación, costo de alquiler y área de equilibrio correctos, con una decisión clara.", exceeds: "Usa cotizaciones reales y anota la oportunidad y el riesgo junto a los números." },
      { name: "Revisión de la máquina y del alquiler", objective: "O4", notYet: "No revisa repuestos, reparaciones ni el servicio de alquiler.", meets: "Anota revisiones de repuestos, mecánico, capacitación y garantía, o de las condiciones del servicio de alquiler.", exceeds: "Ya preguntó a un distribuidor o a un servicio de alquiler y anota las respuestas." },
      { name: "Seguridad y mantenimiento", objective: "O5", notYet: "No hay reglas de seguridad o no hay bitácora.", meets: "Reglas clave de seguridad y una bitácora con fecha, horas, trabajo, combustible, reparaciones y costo.", exceeds: "Nombra quién está capacitado para manejar y cuándo toca el primer servicio." },
      { name: "Decisión y plan de negocio", objective: "O6", notYet: "No hay decisión, o decide comprar sin un plan para mantener ocupada la máquina.", meets: "Decisión clara; si compra, un plan de alquiler de una página con servicios, clientes, precio, costos, punto de equilibrio y riesgos.", exceeds: "Muestra que el plan sigue funcionando con 20% menos hectáreas reservadas, o dice qué cambiaría." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que toman una decisión de alquilar o comprar con la hoja de decisión en 3 meses (encuesta de seguimiento)",
      "Participantes que dicen haber sembrado a tiempo gracias a maquinaria reservada o propia en la siguiente temporada",
      "Participantes que empiezan o hacen crecer un servicio de alquiler, y las hectáreas que atienden, en 12 meses",
      "Lesiones relacionadas con máquinas que informan los participantes (meta: ninguna)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un cuaderno y un lápiz, o un teléfono con una hoja de cálculo o una aplicación de notas",
      "Una calculadora (la del teléfono sirve)",
      "Una cinta métrica o un teléfono con una aplicación de GPS para medir áreas",
      "Cotizaciones reales de un distribuidor local y de servicios de alquiler, reunidas durante el curso",
      "Unos 75 minutos en total, en sesiones cortas, más una visita a una máquina"
    ],
    facilitatorNotes: [
      "Organiza una demostración con un servicio de alquiler o un distribuidor local: revisiones diarias, protecciones y cómo destapar con seguridad una desgranadora o trilladora atascada con el motor apagado.",
      "Cambia los precios de ejemplo por cotizaciones locales antes de las Lecciones 2 y 6, y di claramente que son ejemplos.",
      "Explica los préstamos, los arrendamientos y los planes de pago por uso y sus riesgos, pero no des consejos de inversión; envía a los participantes a un asesor de confianza.",
      "Mantén a los niños lejos de todas las demostraciones con máquinas.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez.",
      "Conecta a los grupos que quieren compartir máquinas con \"Movilización comunitaria: compartir maquinaria y negociar insumos\"."
    ]
  }
};
