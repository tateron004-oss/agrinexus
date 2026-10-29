"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-poultry-production.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const KENBRO = { name: "Kenchic: Kenbro (gallina indígena mejorada de doble propósito)", url: "https://www.kenchic.com/kenbro/" };
const KUROILER = { name: "Sharma y colaboradores 2015, Livestock Research for Rural Development: Kuroiler frente a gallinas indígenas en Uganda", url: "https://lrrd.cipav.org.co/lrrd27/9/shar27178.html" };
const MU_BROODING = { name: "Extensión de la Universidad de Missouri G8351: Crianza y crecimiento de pollitos (temperatura por semana, comportamiento de los pollitos)", url: "https://extension.missouri.edu/publications/g8351" };
const FAO_BIOSEC = { name: "FAO: Buenas prácticas de bioseguridad en la producción avícola comercial a pequeña escala y de traspatio en Kenia", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const WOAH_ND = { name: "Organización Mundial de Sanidad Animal (WOAH): enfermedad de Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const WOAH_AI = { name: "Organización Mundial de Sanidad Animal (WOAH): influenza aviar", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: influenza aviar (signos en las aves)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const KVB = { name: "Kenya Veterinary Board (registro de veterinarios y paraprofesionales veterinarios)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (registro de médicos veterinarios)", url: "https://vcn.gov.ng" };
const FAO_PRUDENT = { name: "FAO: Uso prudente y eficiente de los antimicrobianos en cerdos y aves (veterinarios, planes de salud, periodos de retiro)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };

module.exports = {
  id: "agri-poultry-production-es",
  lang: "es",
  translationOf: "agri-poultry-production",
  category: "Agriculture (Africa)",
  name: "Producción avícola comercial",
  skills: "Elegir pollos de engorde, gallinas ponedoras o gallinas indígenas mejoradas, Preparar el galpón y criar pollitos, Alimentar y dar agua por etapa, Aplicar un programa de vacunación y bioseguridad por lote con el veterinario, Manejar los huevos y llevar registros de la parvada, Calcular el costo de un lote y su punto de equilibrio",
  outcome: "planear y manejar un lote de aves con ganancias: elegir pollos de engorde, gallinas ponedoras o aves indígenas mejoradas para tu mercado, preparar el galpón y criar los pollitos, alimentarlos y darles agua por etapa, seguir un programa de vacunación definido con tu veterinario y una bioseguridad estricta, manejar los huevos y llevar registros, y calcular el costo del lote para conocer tu precio de equilibrio.",
  about: [
    "Este curso es para productores, jóvenes agroemprendedores, trabajadores de granja y extensionistas de Kenia, Nigeria, Ghana, Senegal, Costa de Marfil y de toda África que quieren empezar o hacer crecer un negocio avícola con pollos de engorde, gallinas ponedoras o gallinas indígenas mejoradas.",
    "El capítulo 1 prepara el lote: elegir el tipo de ave, el galpón, el espacio y la crianza de los pollitos, y la alimentación y el agua. El capítulo 2 lo maneja con ganancias: un programa de vacunación con tu veterinario y la bioseguridad del lote, el manejo de los huevos y los registros, y los números de un lote: costo por ave o por cartón, mortalidad y punto de equilibrio.",
    "Este curso continúa \"Salud y manejo del ganado\", que cubre la revisión diaria de salud y lo básico de la enfermedad de Newcastle. No da dosis de vacunas ni de medicamentos: sigue siempre a tu veterinario y la etiqueta. Todos los precios son ejemplos inventados; usa los tuyos. Cada lección dura unos cinco minutos y termina con una tarea. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan con costos para un lote en tu granja (o para un ejemplo como 500 pollos de engorde cerca de Thika, 300 gallinas ponedoras cerca de Ibadán, 200 aves Kenbro o Kuroiler cerca de Tamale, o 1,000 pollos de engorde cerca de Thies): el tipo de ave y por qué; el tamaño del galpón y cuántas aves caben; cómo vas a criar a los pollitos; los alimentos por etapa y cuánto esperas comprar; el programa de vacunación acordado con tu veterinario y tus reglas de bioseguridad; los registros que llevarás; y una hoja de costos con cada gasto, una mortalidad esperada, el costo por ave vendida o por cartón de huevos, y tu precio de equilibrio.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Productores, jóvenes agroemprendedores, trabajadores de granja y extensionistas de África del Este, del Oeste y Central (incluidos los países francófonos) que empiezan o hacen crecer un negocio avícola de unos cientos a unos miles de aves.",
    startingPoint: "Muchos tienen unas cuantas gallinas de patio o ya criaron un lote. La mayoría compra pollitos y alimento sin un plan escrito, cría a los pollitos al tanteo, depende de la tienda agroveterinaria para las vacunas, lleva pocos registros y no sabe su costo por ave o por cartón, así que no puede saber si un lote dio ganancias.",
    gap: "Las aves pueden dar dinero rápido, pero las muchas muertes de pollitos en la crianza, los brotes de enfermedades, el alimento desperdiciado y vender por debajo del costo acaban con las ganancias. Los productores que planean el lote, crían bien a los pollitos, vacunan según el programa del veterinario, llevan registros y conocen su precio de equilibrio pierden menos aves y pueden poner precio y vender con confianza.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; solo aritmética simple; el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: papel y lápiz o la calculadora del teléfono; una hoja de cálculo en el teléfono es opcional",
      "Dinero: los precios en KES, NGN, GHS y XOF son ejemplos inventados; los participantes usan precios locales",
      "Reglas de sanidad animal: ninguna dosis de vacunas ni de medicamentos, y ningún periodo de retiro en números; seguir al veterinario y la etiqueta",
      "La influenza aviar es de notificación obligatoria: los casos sospechosos se reportan de inmediato al veterinario o a la autoridad veterinaria"
    ],
    prerequisites: "Cuidado básico de animales y aritmética simple. Se recomienda tomar primero \"Salud y manejo del ganado\"; \"Nutrición del ganado y formulación de raciones\" ayuda con los costos del alimento."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Según tu mercado, tu dinero y tu tiempo", action: "elegir pollos de engorde, gallinas ponedoras o gallinas indígenas mejoradas y dar las razones", standard: "nombrando al menos tres razones que se ajusten a tu granja y a tus compradores" },
    { id: "O2", condition: "Antes de que lleguen los pollitos y durante la crianza", action: "preparar el galpón, fijar el número de aves según el espacio y ajustar el calor de la criadora observando a los pollitos", standard: "con el galpón listo un día antes y los pollitos repartidos de forma pareja bajo el calor" },
    { id: "O3", condition: "Para cada etapa de tu lote", action: "planear el tipo de alimento, las fechas de cambio y el suministro de agua", standard: "con agua limpia disponible todo el tiempo y todas las etapas cubiertas" },
    { id: "O4", condition: "Con tu veterinario o tu agente de sanidad animal", action: "escribir un programa de vacunación y reglas de bioseguridad para el lote, y registrar cada vacunación", standard: "con cada fecha de vacuna fijada por el veterinario y ninguna vacuna fuera del programa" },
    { id: "O5", condition: "Todos los días del lote", action: "recoger y guardar bien los huevos y registrar las aves, las muertes, el alimento, los huevos y los tratamientos", standard: "sin días faltantes en el registro" },
    { id: "O6", condition: "Usando tus precios locales y la mortalidad esperada", action: "calcular el costo por ave vendida o por cartón y el precio de equilibrio de un lote", standard: "con todos los costos incluidos y cálculos correctos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar el lote",
      lessons: [
        {
          title: "Pollos de engorde, gallinas ponedoras o gallinas indígenas mejoradas",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir el tipo de ave que se ajusta a tu mercado, tu dinero y tu tiempo.",
          text: [
            "Los pollos de engorde se crían para carne. Crecen muy rápido y a menudo se venden en unas 5 a 7 semanas, según la raza y el peso que quieren los compradores. El dinero vuelve rápido, pero necesitan alimento de alta calidad, un cuidado cercano y un comprador listo el día en que están listos: cada día de más se come alimento y ganancia.",
            "Las gallinas ponedoras se crían para huevos. Empiezan a poner a los 4 a 5 meses más o menos y ponen durante más de un año, así que las alimentas por meses antes de tener ingresos, y necesitas un mercado de huevos constante. Las gallinas indígenas mejoradas, o de doble propósito, quedan en el medio: son más resistentes que los pollos de engorde y las ponedoras, pueden buscar comida sueltas con algo de alimento extra, y se venden para carne y para huevos, a menudo a mejor precio por ave, pero crecen y ponen menos que los híbridos comerciales.",
            "Ejemplos: la Kenbro, que vende Kenchic en Kenia, es un ave de doble propósito; Kenchic dice que está lista para carne a las 10 a 14 semanas más o menos, o pone desde unas 25 semanas, pero no llega a la producción de los pollos de engorde o las ponedoras especializados. La Kuroiler, creada en la India, es un ave de doble propósito que busca su comida suelta; un estudio en Uganda encontró que las Kuroiler llegaron a pesar más que las gallinas locales en condiciones de aldea. Compra cualquier raza solo en una incubadora en la que confíen tu oficina ganadera o tu veterinario, y pregunta a otros productores cómo les fue con ella."
          ],
          steps: ["Escribe quién va a comprar: aves vivas, carne, huevos, hoteles, mercados.", "Escribe cuánto dinero puedes gastar antes de que lleguen los ingresos.", "Escribe cuánto tiempo puedes dar cada día.", "Compara los pollos de engorde, las ponedoras y las aves indígenas mejoradas con tus listas.", "Elige uno, con tres razones, y una incubadora de confianza."],
          words: [["Pollo de engorde", "un pollo criado para crecer rápido y dar carne."], ["Gallina ponedora", "una gallina criada para poner muchos huevos."], ["Gallina indígena mejorada", "un ave de doble propósito más resistente, criada a partir de aves locales o para condiciones locales, que se tiene para carne y huevos."], ["Incubadora", "un negocio que incuba y vende pollitos de un día."]],
          slides: [
            { title: "Pollos de engorde", bullets: ["Carne; a menudo se venden en unas 5 a 7 semanas", "Dinero rápido; necesitan buen alimento y cuidado cercano", "Necesitan un comprador listo ese día"] },
            { title: "Gallinas ponedoras", bullets: ["Huevos; empiezan a los 4 a 5 meses más o menos", "Meses de alimento antes de tener ingresos", "Necesitan un mercado de huevos constante"] },
            { title: "Indígenas mejoradas", bullets: ["Más resistentes; buscan comida con alimento extra", "Carne y huevos, a menudo mejor precio por ave", "Ejemplos: Kenbro (Kenchic), Kuroiler (de la India)"] },
            { title: "Elige y compra bien", bullets: ["Que encaje con mercado, dinero y tiempo", "Solo incubadoras de confianza", "Pregunta a productores que tuvieron la raza"] }
          ],
          sources: [KENBRO, KUROILER],
          tryIt: "Escribe tus tres listas: compradores, dinero disponible antes de los ingresos y tiempo diario. Elige pollos de engorde, ponedoras o aves indígenas mejoradas y escribe tres razones, más el nombre de una incubadora en la que confíen tu oficina ganadera o tu veterinario.",
          youCanNow: "elegir pollos de engorde, gallinas ponedoras o gallinas indígenas mejoradas que se ajusten a tu mercado, tu dinero y tu tiempo.",
          quickCheck: [
            { objective: "O1", q: "Un productor tiene poco dinero para esperar y un hotel que le compra aves de carne cada seis semanas. ¿Qué tipo le conviene más?", options: ["Gallinas ponedoras", "Pollos de engorde", "Patos", "Gallinas de aldea sueltas buscando comida"], answer: 1, why: "Los pollos de engorde se venden en pocas semanas, lo que encaja con un comprador de carne regular y una espera corta por los ingresos." },
            { objective: "O1", q: "¿Qué dice Kenchic de la Kenbro comparada con los pollos de engorde y las ponedoras especializados?", options: ["Crece más rápido que los pollos de engorde", "Pone más que las ponedoras", "No llega a sus niveles de producción", "No necesita nada de alimento"], answer: 2, why: "La Kenbro es más resistente y de doble propósito, pero no iguala la producción de los híbridos especializados." }
          ]
        },
        {
          title: "Galpón, espacio y crianza de pollitos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Preparar el galpón, fijar el número de aves según el espacio y criar a los pollitos con el calor correcto.",
          text: [
            "Un buen galpón es seco, ventilado y seguro. En zonas calientes, los costados abiertos con malla de alambre fuerte dejan pasar el aire; un galpón largo a menudo se orienta de este a oeste para que entre menos sol, con un alero en el techo para que no entre la lluvia. Usa una cama profunda y seca, como viruta de madera o cascarilla de arroz. No dejes entrar ratas, serpientes, aves silvestres ni ladrones. Antes de que lleguen los pollitos, limpia y desinfecta el galpón vacío y el equipo, y déjalo vacío el tiempo de descanso que aconseje tu veterinario.",
            "Espacio: el hacinamiento causa estrés por calor, cama mojada, picoteo y enfermedades. Tu incubadora, la guía de la raza o tu extensionista te da el número de aves por metro cuadrado para tu raza, la edad y el galpón. Multiplica el área del piso por ese número. Solo como ejemplo: un galpón de 5 m por 8 m tiene 40 metros cuadrados; si tu guía dice 10 pollos de engorde por metro cuadrado a la edad de venta, caben 400 pollos de engorde, no 500.",
            "Crianza: los pollitos de un día no pueden mantenerse calientes solos. Arma un círculo de crianza (un círculo de cartón o de lámina) con cama, una fuente de calor (criadora de gas o eléctrica, focos, o un brasero de carbón con buena ventilación, porque el humo del carbón puede matar), comederos y bebederos, y caliéntalo antes de que lleguen los pollitos. La Extensión de la Universidad de Missouri indica unos 32 a 35 °C bajo la criadora la primera semana, y luego unos 3 °C menos cada semana. Observa a los pollitos: amontonados bajo el calor quiere decir que tienen frío; lejos y jadeando quiere decir que tienen calor; amontonados en un solo lado quiere decir que hay una corriente de aire; repartidos de forma pareja quiere decir que está bien."
          ],
          steps: ["Limpia y desinfecta el galpón vacío y el equipo; déjalo descansar como aconseje el veterinario.", "Pon una cama profunda y seca.", "Calcula cuántas aves caben en el piso según la guía de tu raza.", "Arma el círculo de crianza, la fuente de calor, los comederos y los bebederos.", "Caliéntalo antes de que lleguen los pollitos.", "Observa a los pollitos varias veces al día y ajusta el calor."],
          words: [["Crianza", "mantener calientes y alimentados a los pollitos en sus primeras semanas."], ["Círculo de crianza", "un círculo de cartón o de lámina que mantiene a los pollitos cerca del calor, el alimento y el agua."], ["Cama", "material seco en el piso, como viruta de madera o cascarilla de arroz."], ["Densidad", "cuántas aves se tienen por metro cuadrado de piso."]],
          slides: [
            { title: "Un buen galpón", bullets: ["Seco, ventilado, costados abiertos con malla si hace calor", "Alero en el techo; a menudo de este a oeste", "Cama profunda y seca; sin ratas ni aves silvestres"] },
            { title: "Espacio", bullets: ["Hacinamiento = estrés por calor, cama mojada, enfermedades", "Aves por metro cuadrado según la guía de tu raza", "Ejemplo: 40 metros cuadrados x 10 = 400 pollos de engorde"] },
            { title: "Cómo armar la crianza", bullets: ["Círculo de crianza, calor, comederos y bebederos", "Caliéntalo antes de que lleguen los pollitos", "Carbón: buena ventilación, el humo puede matar"] },
            { title: "Lee a los pollitos", bullets: ["Unos 32 a 35 °C al principio, unos 3 °C menos cada semana", "Amontonados = frío; lejos = calor", "Amontonados en un lado = corriente; repartidos = bien"] }
          ],
          sources: [MU_BROODING, FAO_BIOSEC],
          tryIt: "Mide tu galpón (o uno que planeas) y calcula el área del piso. Pregunta a tu incubadora o a tu extensionista cuántas aves por metro cuadrado para tu raza, y escribe cuántas aves caben. Dibuja cómo vas a armar la crianza.",
          youCanNow: "preparar un galpón, fijar el número de aves según su espacio y criar a los pollitos observando cómo se comportan.",
          quickCheck: [
            { objective: "O2", q: "Todos tus pollitos están muy amontonados bajo la criadora. ¿Qué quiere decir?", options: ["Tienen demasiado calor", "Tienen hambre", "Están listos para salir de la crianza", "Tienen frío; agrega calor o tapa las corrientes de aire"], answer: 3, why: "Amontonarse bajo el calor quiere decir que los pollitos tienen frío." },
            { objective: "O2", q: "Tu galpón mide 6 m por 5 m. La guía dice 10 aves por metro cuadrado. ¿Cuántas aves?", options: ["300", "110", "600", "50"], answer: 0, why: "6 x 5 = 30 metros cuadrados, x 10 = 300 aves." }
          ]
        },
        {
          title: "Alimento y agua por etapa",
          objectives: ["O3"],
          minutes: 5,
          goal: "Planear el alimento de cada etapa, cuándo cambiarlo y un suministro constante de agua limpia.",
          text: [
            "El alimento es el mayor gasto de un lote, así que da el alimento correcto en la etapa correcta. Pollos de engorde: iniciador de engorde y luego finalizador de engorde (algunos programas agregan un crecimiento). Ponedoras: alimento para pollitas, luego alimento de crecimiento y luego alimento de postura desde el inicio de la postura, que tiene el calcio extra que las gallinas necesitan para cáscaras fuertes. Aves indígenas mejoradas: sigue la guía de la incubadora; en semilibertad igual necesitan un alimento balanceado además de lo que buscan sueltas para crecer y poner bien. Cambia de alimento a lo largo de unos días, mezclando el viejo con el nuevo.",
            "Compra el alimento a un molino de confianza, revisa que el saco tenga etiqueta, esté seco y no esté vencido, y guárdalo sobre tarimas en un lugar seco. Usa suficientes comederos para que todas las aves coman a la vez, súbelos a la altura del lomo de las aves a medida que crecen, y no los llenes hasta el borde, porque las aves escarban, tiran el alimento y lo desperdician.",
            "El agua importa más que el alimento: las gallinas beben más agua de lo que comen alimento, y dejan de comer y de poner cuando el agua se acaba o se calienta. Da agua limpia y fresca todo el tiempo, con suficientes bebederos, limpiados todos los días. Una caída repentina en el consumo de agua es a menudo la primera señal de enfermedad. Si das una vacuna o un medicamento en el agua, sigue exactamente al veterinario y la etiqueta; algunos necesitan agua sin cloro ni desinfectante."
          ],
          steps: ["Escribe las etapas de tu tipo de ave.", "Escribe el alimento de cada etapa y la edad del cambio.", "Planea suficientes comederos y bebederos para todas las aves a la vez.", "Sube los comederos y bebederos a medida que crecen las aves; no los llenes de más.", "Limpia los bebederos a diario; nunca dejes que se acabe el agua.", "Anota el consumo diario de agua; una caída repentina quiere decir que llames al veterinario."],
          words: [["Iniciador", "el primer alimento, alto en proteína, para los pollitos jóvenes."], ["Finalizador", "el último alimento de los pollos de engorde antes de la venta."], ["Alimento de postura", "alimento para gallinas ponedoras con calcio extra para la cáscara."], ["Inicio de la postura", "la edad en que las gallinas jóvenes están por empezar a poner."]],
          slides: [
            { title: "Alimentos por etapa", bullets: ["Pollos de engorde: iniciador, luego finalizador", "Ponedoras: pollitas, crecimiento, luego postura", "Cambia a lo largo de unos días"] },
            { title: "Compra y usa bien el alimento", bullets: ["Molino de confianza; con etiqueta, seco, sin vencer", "Suficientes comederos; súbelos según crecen", "No los llenes de más: escarbar desperdicia alimento"] },
            { title: "El agua va primero", bullets: ["Las aves beben más de lo que comen", "Agua limpia y fresca todo el tiempo", "Caída repentina del consumo de agua = señal de alerta"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Haz una tabla de alimento para tu lote: etapa, edad, tipo de alimento y cuántos sacos más o menos esperas comprar (pregunta a tu proveedor de alimento o a la incubadora). Agrega cuántos comederos y bebederos necesitas y quién limpia los bebederos cada día.",
          youCanNow: "planear el alimento correcto para cada etapa, cuándo cambiarlo y un suministro constante de agua limpia.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué las gallinas en postura necesitan alimento de postura y no alimento de crecimiento?", options: ["Es más barato", "Las hace crecer más altas", "Tiene el calcio extra que se necesita para cáscaras fuertes", "Reemplaza el agua"], answer: 2, why: "Las gallinas en postura necesitan calcio extra para la cáscara, y el alimento de postura lo da." },
            { objective: "O3", q: "Tus pollos de engorde de repente beben mucha menos agua que ayer. ¿Qué indica esto?", options: ["Puede que se estén enfermando; revísalos y llama al veterinario", "Están sanos y llenos", "El alimento es demasiado bueno", "Es hora de venderlos"], answer: 0, why: "Una caída repentina del consumo de agua es a menudo la primera señal de enfermedad." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Preparar el lote",
        questions: [
          { objective: "O1", q: "¿Cuál es un riesgo clave de los pollos de engorde?", options: ["Tardan dos años en venderse", "Ponen demasiados huevos", "No se pueden comer", "Cada día de más antes de la venta se come alimento y ganancia, así que necesitas un comprador listo"], answer: 3, why: "Los pollos de engorde siguen comiendo; los retrasos en la venta bajan rápido la ganancia." },
          { objective: "O1", q: "¿Qué es cierto de las gallinas indígenas mejoradas como la Kuroiler?", options: ["Son más resistentes y de doble propósito, pero producen menos que los híbridos especializados", "No necesitan agua", "Son solo para huevos", "Son los pollos de engorde que crecen más rápido"], answer: 0, why: "Las aves de doble propósito ceden algo de producción a cambio de resistencia y de servir para carne y huevos." },
          { objective: "O2", q: "Los pollitos están lejos de la criadora y jadeando. ¿Qué haces?", options: ["Agregar más calor", "Tapar todo el aire", "Bajar el calor o subir la criadora", "Agregar más pollitos"], answer: 2, why: "Alejarse y jadear quiere decir que los pollitos tienen demasiado calor." },
          { objective: "O2", q: "¿Cuándo debes calentar la crianza?", options: ["Después de que lleguen los pollitos", "Antes de que lleguen los pollitos", "Solo de noche en la semana 3", "Nunca; los pollitos se calientan solos"], answer: 1, why: "Los pollitos de un día necesitan calor desde el momento en que llegan." },
          { objective: "O3", q: "¿Cómo debes cambiar de un alimento al siguiente?", options: ["De un día para otro", "Primero dejar de alimentarlos un día", "Solo cuando las aves se vean flacas", "A lo largo de unos días, mezclando el viejo con el nuevo"], answer: 3, why: "Un cambio gradual no altera el consumo ni la digestión de las aves." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manejar un lote con ganancias",
      lessons: [
        {
          title: "Un programa de vacunación y la bioseguridad del lote",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escribir un programa de vacunación con tu veterinario y poner reglas de bioseguridad para el lote.",
          text: [
            "La vacunación protege al lote de las enfermedades comunes en tu zona. Qué vacunas, a qué edad y cómo se aplican (en el agua de bebida, en gota en el ojo, inyectadas o por punción en el ala) lo debe definir un veterinario o un agente de sanidad animal registrado, porque las enfermedades cambian según la zona y la temporada. Ejemplos comunes en África son la enfermedad de Newcastle y la de Gumboro, además de la enfermedad de Marek (a menudo aplicada en la incubadora) y la viruela aviar; tu veterinario puede agregar otras. Pide a la incubadora el registro de lo que ya recibieron los pollitos.",
            "Haz que las vacunas funcionen: cómpralas en una tienda agroveterinaria autorizada, revisa la fecha de vencimiento, mantenlas frías desde la tienda hasta las aves, aplícalas exactamente como dicen la etiqueta y el veterinario, vacuna a toda la parvada, y anota en tus registros la fecha, la vacuna, el número de lote y el método. Nunca trates a las aves enfermas con antibióticos por tu cuenta: el veterinario decide, y tú anotas el periodo de retiro que dice la etiqueta para que no se venda ningún huevo ni carne antes de que termine.",
            "Bioseguridad del lote: compra los pollitos en una sola incubadora de confianza y maneja el galpón con el sistema todo dentro, todo fuera (todas las aves de la misma edad, entran juntas y salen juntas). Entre lotes, saca toda la cama, lava y desinfecta el galpón y el equipo, y déjalo vacío el tiempo de descanso que aconseje tu veterinario. No dejes entrar visitantes, usa un pediluvio y botas de la granja, mantén lejos a las aves silvestres y a las ratas, y nunca traigas aves del mercado a casa. La influenza aviar es de notificación obligatoria: muertes repentinas, crestas hinchadas y moradas, jadeo o una caída fuerte de la postura quieren decir que dejes a las aves adentro, detengas toda venta y todo movimiento, y llames de inmediato al veterinario."
          ],
          steps: ["Pregunta a la incubadora qué vacunas ya recibieron los pollitos.", "Siéntate con tu veterinario y escriban el programa: enfermedad, edad, método.", "Compra las vacunas en una tienda agroveterinaria autorizada; revisa el vencimiento; mantenlas frías.", "Vacuna a toda la parvada exactamente como dicen la etiqueta y el veterinario; regístralo.", "Usa todo dentro, todo fuera; limpia, desinfecta y deja descansar el galpón entre lotes.", "Sospecha de influenza aviar o de Newcastle: aves adentro, detén las ventas, llama al veterinario."],
          words: [["Programa de vacunación", "un plan escrito de qué vacunas recibe la parvada, a qué edad y cómo, definido por el veterinario."], ["Todo dentro, todo fuera", "todas las aves de un galpón tienen la misma edad, entran juntas y salen juntas."], ["Periodo de retiro", "el tiempo después de un medicamento antes de poder vender huevos o carne; viene en la etiqueta."], ["Tienda agroveterinaria autorizada", "una tienda que la ley permite vender medicamentos y vacunas para animales."]],
          slides: [
            { title: "El veterinario define el programa", bullets: ["Qué vacunas, a qué edad, con qué método", "Comunes: Newcastle, Gumboro, Marek, viruela aviar", "Pregunta a la incubadora qué recibieron ya los pollitos"] },
            { title: "Haz que las vacunas funcionen", bullets: ["Tienda autorizada; revisa el vencimiento; mantenlas frías", "Exactamente como dicen la etiqueta y el veterinario; toda la parvada", "Anota fecha, vacuna, número de lote y método"] },
            { title: "Bioseguridad del lote", bullets: ["Una sola incubadora; todo dentro, todo fuera", "Limpiar, desinfectar y dejar descansar entre lotes", "Pediluvio, botas de la granja, sin visitas, sin aves del mercado"] },
            { title: "Influenza aviar: reporta de inmediato", bullets: ["Muertes repentinas, crestas moradas, jadeo, caída de la postura", "Aves adentro; detén las ventas y todo movimiento", "Llama ya al veterinario o a la oficina veterinaria"] }
          ],
          sources: [WOAH_ND, WOAH_AI, APHIS_AI, FAO_BIOSEC, FAO_PRUDENT, KVB, VCN],
          tryIt: "Haz una cita con tu veterinario o tu agente de sanidad animal. Lleva una tabla con las columnas: enfermedad, edad, método, fecha de aplicación, número de lote. Llena el programa que defina el veterinario. Debajo, escribe cinco reglas de bioseguridad para tu lote.",
          youCanNow: "escribir un programa de vacunación con tu veterinario, registrar cada vacunación y aplicar una bioseguridad estricta en el lote.",
          quickCheck: [
            { objective: "O4", q: "¿Quién debe decidir qué vacunas recibe tu parvada y cuándo?", options: ["El vendedor de alimento", "Un veterinario o un agente de sanidad animal registrado", "Un vecino que tiene gallinas", "Un grupo de redes sociales"], answer: 1, why: "Las enfermedades cambian según la zona, así que un veterinario registrado define el programa." },
            { objective: "O4", q: "¿Qué quiere decir todo dentro, todo fuera?", options: ["Las aves salen a buscar comida todos los días", "Los visitantes pueden entrar y salir libremente", "Se agregan aves nuevas cada semana", "Todas las aves de un galpón entran juntas y salen juntas"], answer: 3, why: "Un solo grupo de edad por galpón permite limpiarlo y dejarlo descansar por completo entre lotes, y así se corta el ciclo de las enfermedades." }
          ]
        },
        {
          title: "Manejo de los huevos y registros de la parvada",
          objectives: ["O5"],
          minutes: 5,
          goal: "Recoger y guardar bien los huevos y llevar registros diarios de la parvada.",
          text: [
            "Los huevos pierden calidad y recogen gérmenes si se quedan en los nidos. Recoge al menos dos veces al día, más cuando hace calor. Mantén los nidos limpios con cama fresca para que los huevos salgan limpios. Separa los huevos rotos, sucios y muy pequeños. Limpia los huevos un poco sucios con un trapo seco; no los remojes en agua, porque eso puede meter gérmenes a través de la cáscara. Guarda los huevos en cartones, con la punta hacia abajo, en un lugar fresco, a la sombra y ventilado, lejos de olores fuertes, y vende primero los más viejos.",
            "Los registros te dicen lo que está pasando antes de que sea demasiado tarde. Cada día anota: número de aves, muertes y su causa probable, alimento usado, agua usada y huevos recogidos (por cartón y por clase). Anota también cada vacunación y tratamiento, la fecha de fin del periodo de retiro según la etiqueta, cada compra y cada venta. Un cuaderno de papel sirve; una hoja de cálculo en el teléfono te suma los totales.",
            "Usa los registros. Tasa de mortalidad = aves muertas / aves iniciales x 100. Tasa de postura = huevos recogidos en un día / gallinas x 100. Si suben las muertes, baja el consumo de agua o la tasa de postura cae de repente, revisa la parvada y llama al veterinario. Al final del lote, los registros te dan los números para tu hoja de costos."
          ],
          steps: ["Recoge los huevos al menos dos veces al día.", "Separa los huevos rotos, sucios y pequeños; limpia en seco los que están un poco sucios.", "Guárdalos en cartones, con la punta hacia abajo, en un lugar fresco y a la sombra; los más viejos primero.", "Cada día anota las aves, las muertes, el alimento, el agua y los huevos.", "Anota las vacunaciones, los tratamientos, las fechas de fin del retiro, las compras y las ventas.", "Calcula cada semana la mortalidad y la tasa de postura, y busca cambios repentinos."],
          words: [["Tasa de mortalidad", "la parte de las aves que murieron, como porcentaje de las aves con que empezaste."], ["Tasa de postura", "los huevos recogidos en un día como porcentaje del número de gallinas."], ["Clasificar", "separar los huevos por tamaño y calidad."]],
          slides: [
            { title: "Manejo de los huevos", bullets: ["Recoge al menos dos veces al día", "Nidos limpios; separa los huevos rotos y sucios", "Limpia en seco; no los remojes en agua"] },
            { title: "Almacenamiento de los huevos", bullets: ["Cartones, con la punta hacia abajo", "Fresco, a la sombra, ventilado, sin olores fuertes", "Vende primero los más viejos"] },
            { title: "Registros diarios", bullets: ["Aves, muertes y causa, alimento, agua, huevos", "Vacunaciones, tratamientos, fechas de fin del retiro", "Cada compra y cada venta"] },
            { title: "Usa los números", bullets: ["Mortalidad = muertas / iniciales x 100", "Tasa de postura = huevos al día / gallinas x 100", "Cambio repentino: revisa la parvada, llama al veterinario"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Haz una hoja de registro diario con las columnas: fecha, aves, muertes y causa, alimento usado, agua usada, huevos recogidos, notas. Llena una semana de ejemplo. Luego calcula la tasa de mortalidad y, para las ponedoras, la tasa de postura de un día.",
          youCanNow: "recoger y guardar bien los huevos y llevar registros diarios que muestren la mortalidad y la tasa de postura.",
          quickCheck: [
            { objective: "O5", q: "¿Cómo se deben guardar los huevos en los cartones?", options: ["Con la punta hacia arriba, al sol", "Con la punta hacia abajo, en un lugar fresco y a la sombra", "Lavados y remojados primero", "Junto al queroseno y las cebollas"], answer: 1, why: "Con la punta hacia abajo, en un lugar fresco y a la sombra, los huevos se mantienen frescos más tiempo." },
            { objective: "O5", q: "Empezaste con 500 pollos de engorde y murieron 25. ¿Cuál es la tasa de mortalidad?", options: ["25 por ciento", "2.5 por ciento", "50 por ciento", "5 por ciento"], answer: 3, why: "25 / 500 x 100 = 5 por ciento." }
          ]
        },
        {
          title: "Los números de un lote: costo por ave y punto de equilibrio",
          objectives: ["O6"],
          minutes: 6,
          goal: "Calcular el costo por ave o por cartón y el precio de equilibrio de un lote.",
          text: [
            "Haz una lista de todos los costos del lote: pollitos, alimento, vacunas y veterinario, cama, combustible o electricidad para la crianza, desinfectante, mano de obra, transporte y empaque. Ejemplo con precios inventados en chelines kenianos (KES), 500 pollos de engorde: pollitos 50,000; alimento 122,500; vacunas y veterinario 5,000; cama, crianza y electricidad 8,000; transporte y otros 6,500. Total: KES 192,000. Usa tus propias cotizaciones: los precios cambian según el lugar y la temporada, y en NGN, GHS o XOF el método es el mismo.",
            "La mortalidad lo cambia todo, porque las aves muertas igual comieron alimento. Si muere el 5 por ciento, vendes 475 aves. Costo por ave vendida = 192,000 / 475 = KES 404. Ese es tu precio de equilibrio: si vendes por debajo, pierdes dinero. Si muere el 15 por ciento, vendes solo 425, y el precio de equilibrio sube a unos KES 452. A un precio de venta de KES 550, 475 aves dan 261,250, una ganancia de 69,250. Para saber cuántas aves debes vender para cubrir los costos: 192,000 / 550 = 349.1, es decir, 350 aves.",
            "Ponedoras: calcula por semana. Ejemplo: 300 gallinas con una tasa de postura del 80 por ciento dan 300 x 0.8 x 7 = 1,680 huevos, o 56 cartones de 30. Si el alimento y los demás gastos son KES 15,000 a la semana, el costo por cartón es 15,000 / 56 = unos KES 268. Compáralo con el precio que pagan los compradores. Antes de empezar, lee también completo cualquier préstamo o contrato con un comprador o un proveedor, y pregunta a un asesor de confianza."
          ],
          steps: ["Haz una lista de todos los costos del lote con tus precios locales.", "Súmalos para tener el costo total.", "Calcula la mortalidad esperada y cuántas aves venderás.", "Costo por ave = costo total / aves vendidas: tu precio de equilibrio.", "Ponedoras: costo por cartón = gastos de la semana / cartones recogidos.", "Compara con el precio de venta; calcula la ganancia o la pérdida."],
          words: [["Precio de equilibrio", "el precio por ave o por cartón con el que los ingresos cubren justo todos los costos."], ["Ganancia", "los ingresos menos todos los costos."], ["Hoja de costos", "una lista de todos los costos del lote con los totales."]],
          slides: [
            { title: "Haz la lista de todos los costos", bullets: ["Pollitos, alimento, vacunas y veterinario, cama, combustible", "Mano de obra, transporte, empaque", "Total de ejemplo: KES 192,000 por 500 pollos de engorde"] },
            { title: "La mortalidad sube el costo por ave", bullets: ["5 por ciento muertas: 475 vendidas, KES 404 cada una", "15 por ciento muertas: 425 vendidas, unos KES 452 cada una", "Las aves muertas igual comieron alimento"] },
            { title: "Punto de equilibrio y ganancia", bullets: ["Precio de equilibrio = costo total / aves vendidas", "A KES 550: 475 x 550 - 192,000 = KES 69,250", "Aves necesarias para cubrir costos: 192,000 / 550 = 350"] },
            { title: "Ponedoras: costo por cartón", bullets: ["300 gallinas x 0.8 x 7 = 1,680 huevos = 56 cartones", "KES 15,000 / 56 = unos KES 268 por cartón", "Los precios son ejemplos; usa los tuyos"] }
          ],
          tryIt: "Tarea final: escribe tu plan con costos para un lote: tipo de ave, tamaño del galpón y número de aves, cómo vas a criar a los pollitos, alimentos por etapa, programa de vacunación y reglas de bioseguridad, registros, y una hoja de costos con cada gasto, la mortalidad esperada, el costo por ave vendida o por cartón, y tu precio de equilibrio.",
          youCanNow: "calcular el costo de un lote, tomar en cuenta la mortalidad y sacar tu costo por ave o por cartón y tu precio de equilibrio.",
          quickCheck: [
            { objective: "O6", q: "Un lote cuesta NGN 900,000 y esperas vender 450 aves. ¿Cuál es el precio de equilibrio por ave?", options: ["NGN 200", "NGN 450", "NGN 2,000", "NGN 20,000"], answer: 2, why: "900,000 / 450 = NGN 2,000 por ave." },
            { objective: "O6", q: "¿Por qué una mortalidad más alta sube tu costo por ave?", options: ["Las aves muertas comieron alimento y costaron dinero, pero no se venden", "Las aves muertas se venden más caras", "El alimento se abarata", "Las vacunas cuestan menos"], answer: 0, why: "El mismo costo total se reparte entre menos aves vendidas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Manejar un lote con ganancias",
        questions: [
          { objective: "O4", q: "Antes de comprar vacunas, ¿qué debes revisar?", options: ["Que sean las más baratas", "Que vengan de una tienda agroveterinaria autorizada, no estén vencidas y se hayan mantenido frías", "Que vengan sin etiqueta", "Que a un vecino le hayan sobrado"], answer: 1, why: "Las vacunas vencidas o calientes pueden no proteger a la parvada." },
          { objective: "O4", q: "Tus ponedoras de repente mueren en gran número, con las crestas moradas. ¿Qué haces?", options: ["Vender rápido los huevos", "Darles antibióticos de la tienda", "Traer aves nuevas", "Dejar las aves adentro, detener toda venta y todo movimiento, y llamar de inmediato al veterinario"], answer: 3, why: "Estas señales hacen pensar en influenza aviar, que es de notificación obligatoria y se debe reportar de inmediato." },
          { objective: "O5", q: "¿Por qué recoger los huevos al menos dos veces al día?", options: ["Los huevos que se quedan en los nidos pierden calidad y recogen gérmenes", "Las gallinas solo ponen de noche", "Así las gallinas ponen el doble", "Los compradores prefieren huevos tibios"], answer: 0, why: "Recoger seguido mantiene los huevos limpios y frescos." },
          { objective: "O5", q: "250 gallinas pusieron 200 huevos hoy. ¿Cuál es la tasa de postura?", options: ["50 por ciento", "125 por ciento", "80 por ciento", "20 por ciento"], answer: 2, why: "200 / 250 x 100 = 80 por ciento." },
          { objective: "O6", q: "Los gastos semanales de las ponedoras son GHS 2,400 y recoges 60 cartones. ¿Cuál es el costo por cartón?", options: ["GHS 40", "GHS 144", "GHS 4", "GHS 400"], answer: 0, why: "2,400 / 60 = GHS 40 por cartón." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Producción avícola comercial",
    questions: [
      { objective: "O1", q: "¿Qué tipo de ave da ingresos más pronto?", options: ["Las ponedoras", "Los pollos de engorde", "Los gallos reproductores", "Las aves indígenas mejoradas para huevos"], answer: 1, why: "Los pollos de engorde a menudo se venden en unas 5 a 7 semanas." },
      { objective: "O1", q: "¿Qué necesitan las ponedoras que no necesitan los pollos de engorde?", options: ["Un comprador en un día fijo", "Nada de alimento durante meses", "Meses de alimento antes de tener ingresos y un mercado de huevos constante", "Venderse antes de seis semanas"], answer: 2, why: "Las ponedoras empiezan a poner a los 4 a 5 meses más o menos, y luego necesitan compradores de huevos regulares." },
      { objective: "O1", q: "¿Dónde debes comprar los pollitos de un día?", options: ["En una incubadora en la que confíen tu oficina ganadera o tu veterinario", "A cualquier vendedor del camino", "En el anuncio en línea más barato", "En una granja con aves enfermas"], answer: 0, why: "Una incubadora de confianza da pollitos sanos de la raza correcta, con registros de vacunación." },
      { objective: "O2", q: "Los pollitos se amontonan en un lado de la crianza, lejos de la criadora. ¿Cuál es la causa probable?", options: ["Demasiado calor", "Demasiado alimento", "Tienen sueño", "Una corriente de aire"], answer: 3, why: "Amontonarse en un lado, lejos del calor, hace pensar en una corriente de aire." },
      { objective: "O2", q: "¿Qué pasa si metes demasiadas aves en un galpón?", options: ["Crecen más rápido", "Estrés por calor, cama mojada, picoteo y enfermedades", "Necesitan menos agua", "Los huevos salen más grandes"], answer: 1, why: "El hacinamiento daña la salud y el crecimiento." },
      { objective: "O2", q: "¿Por qué una criadora de carbón debe tener buena ventilación?", options: ["El humo del carbón puede matar a los pollitos y a las personas", "Para enfriar a los pollitos", "Para que entren las aves silvestres", "Para ahorrar carbón"], answer: 0, why: "El carbón encendido suelta humos mortales en un espacio cerrado." },
      { objective: "O2", q: "¿Qué debes hacerle al galpón antes de que llegue un lote nuevo?", options: ["Agregar aves nuevas a las viejas", "Dejar la cama vieja para dar calor", "Limpiarlo, desinfectarlo y dejarlo descansar como aconseje el veterinario", "Nada"], answer: 2, why: "Limpiar, desinfectar y dejar descansar corta el ciclo de las enfermedades entre lotes." },
      { objective: "O3", q: "¿Cuál es el orden habitual de alimentos para los pollos de engorde?", options: ["Alimento de postura, luego iniciador", "Solo alimento de crecimiento", "Alimento para pollitas, luego alimento de postura", "Iniciador, luego finalizador"], answer: 3, why: "Los pollos de engorde empiezan con iniciador alto en proteína y terminan con finalizador." },
      { objective: "O3", q: "¿Por qué no llenar los comederos hasta el borde?", options: ["Las aves escarban, tiran el alimento y lo desperdician", "El alimento se enfría", "Hace que las aves pongan menos", "Atrae a los veterinarios"], answer: 0, why: "Los comederos demasiado llenos desperdician alimento, el mayor gasto del lote." },
      { objective: "O3", q: "¿Cuál es a menudo la primera señal de que las aves se están enfermando?", options: ["Ponen huevos más grandes", "Sus plumas se ponen blancas", "Una caída repentina del consumo de agua", "Crecen más rápido"], answer: 2, why: "Las aves enfermas beben menos, a menudo antes de que aparezcan otras señales." },
      { objective: "O4", q: "¿Cuál es una vacuna avícola común en África que define el veterinario?", options: ["La de la enfermedad de Newcastle", "La de la rabia", "La de la fiebre aftosa", "La de la fiebre de la Costa Este"], answer: 0, why: "La de Newcastle es una de las vacunas avícolas más comunes; el veterinario define el programa." },
      { objective: "O4", q: "¿Qué debes anotar cada vez que vacunas?", options: ["Solo el clima", "Nada; la tienda agroveterinaria lleva los registros", "El precio de los huevos", "Fecha, vacuna, número de lote y método"], answer: 3, why: "Los registros completos muestran lo que recibió la parvada y ayudan al veterinario." },
      { objective: "O4", q: "¿Quién decide si se dan antibióticos a las aves enfermas?", options: ["El trabajador de la granja", "El veterinario", "El comprador de huevos", "El vendedor de alimento"], answer: 1, why: "El veterinario decide, y tú anotas la fecha de fin del periodo de retiro que dice la etiqueta." },
      { objective: "O5", q: "¿Cómo debes limpiar un huevo un poco sucio?", options: ["Remojarlo en agua", "Tallarlo con jabón", "Limpiarlo con un trapo seco", "Dejarlo en el nido"], answer: 2, why: "Limpiar en seco evita meter gérmenes a través de la cáscara." },
      { objective: "O5", q: "¿Qué va en el registro diario de la parvada?", options: ["Aves, muertes, alimento, agua y huevos", "Solo los huevos vendidos", "Las ventas del vecino", "Nada si todo se ve bien"], answer: 0, why: "Los números diarios muestran los problemas a tiempo y alimentan la hoja de costos." },
      { objective: "O5", q: "Empezaste con 1,000 pollos de engorde y murieron 80. ¿Cuál es la tasa de mortalidad?", options: ["80 por ciento", "0.8 por ciento", "12.5 por ciento", "8 por ciento"], answer: 3, why: "80 / 1,000 x 100 = 8 por ciento." },
      { objective: "O6", q: "¿Qué es el precio de equilibrio por ave?", options: ["El precio más alto del mercado", "El costo total dividido entre las aves vendidas", "El precio de un pollito", "Solo el costo del alimento"], answer: 1, why: "A ese precio, los ingresos cubren justo todos los costos." },
      { objective: "O6", q: "Un lote cuesta XOF 1,500,000 y vendes 500 aves a XOF 4,000. ¿Cuál es la ganancia?", options: ["XOF 2,000,000", "XOF 1,500,000", "XOF 500,000", "XOF 4,000"], answer: 2, why: "500 x 4,000 = 2,000,000 de ingresos; menos 1,500,000 de costo = XOF 500,000 de ganancia." },
      { objective: "O6", q: "300 gallinas ponen al 80 por ciento durante una semana. ¿Más o menos cuántos cartones de 30 huevos?", options: ["56", "80", "240", "1,680"], answer: 0, why: "300 x 0.8 x 7 = 1,680 huevos; 1,680 / 30 = 56 cartones." },
      { objective: "O6", q: "Tu costo por ave vendida es KES 404 y los compradores pagan KES 380. ¿Qué está pasando?", options: ["Ganas KES 24 por ave", "Quedas en equilibrio", "Nada; los precios no importan", "Pierdes unos KES 24 por ave"], answer: 3, why: "Vender por debajo del precio de equilibrio hace perder dinero con cada ave." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 7, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del plan y vuelve a revisarla.",
    criteria: [
      { name: "Tipo de ave y mercado", objective: "O1", notYet: "No hay razón para la elección, o no se nombra a ningún comprador.", meets: "Nombra el tipo de ave, una incubadora de confianza y al menos tres razones que se ajustan al mercado, al dinero y al tiempo.", exceeds: "Nombra un comprador concreto y cuándo compra, y planea el lote para que coincida." },
      { name: "Galpón, espacio y crianza", objective: "O2", notYet: "El número de aves no se calculó con el área del piso, o no hay plan de crianza.", meets: "Área del piso x aves por metro cuadrado según la guía; crianza armada con el calor revisado según el comportamiento de los pollitos.", exceeds: "También cubre la limpieza, la desinfección y el descanso del galpón, y una ventilación segura para la fuente de calor." },
      { name: "Plan de alimento y agua", objective: "O3", notYet: "Faltan etapas o tipos de alimento, o no hay plan de agua.", meets: "Tipo de alimento por etapa, fechas de cambio, suficientes comederos y bebederos, y agua limpia todo el tiempo.", exceeds: "Calcula los sacos de alimento por etapa y quién revisa el agua cada día." },
      { name: "Vacunación y bioseguridad", objective: "O4", notYet: "No participa ningún veterinario, o se inventan dosis, o no hay reglas de bioseguridad.", meets: "Programa definido por un veterinario registrado y registrado por escrito; todo dentro, todo fuera y al menos cuatro reglas de bioseguridad; reporte de la influenza aviar.", exceeds: "Incluye el nombre y el número del veterinario y el registro de vacunación de la incubadora." },
      { name: "Registros", objective: "O5", notYet: "No hay plan de registro diario.", meets: "Registro diario de aves, muertes, alimento, agua y huevos, además de vacunaciones, tratamientos y ventas.", exceeds: "Muestra cómo se revisarán cada semana la mortalidad y la tasa de postura." },
      { name: "Hoja de costos y punto de equilibrio", objective: "O6", notYet: "Faltan costos, no se toma en cuenta la mortalidad, o los cálculos están mal.", meets: "Todos los costos en la lista, la mortalidad tomada en cuenta, costo por ave o por cartón y precio de equilibrio correctos.", exceeds: "Compara el precio de equilibrio con precios reales de compradores y muestra la ganancia con dos niveles de mortalidad." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que manejan su siguiente lote con un plan escrito y registros diarios (seguimiento a los 30 días)",
      "Mortalidad por lote que reportan los participantes antes y después del curso",
      "Participantes que conocen y pueden decir su costo por ave o por cartón cuando venden",
      "Casos sospechosos de influenza aviar o de enfermedad de Newcastle reportados por los participantes al veterinario en menos de un día"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, lápiz y la calculadora del teléfono; una hoja de cálculo en el teléfono es opcional",
      "Una cinta métrica para el galpón",
      "Precios locales de pollitos, alimento, vacunas y otros gastos, y el nombre y el número de un veterinario y de una incubadora de confianza",
      "Unos 70 a 80 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Antes de la sesión, reúna los precios locales de pollitos, alimento y vacunas para que los participantes calculen el costo de un lote con números reales.",
      "Invite a un veterinario o a un agente de sanidad animal local a la sesión del capítulo 2 para que presente un programa de vacunación para su zona; nunca dé usted mismo dosis de vacunas ni de medicamentos.",
      "Si visitan una granja avícola, sigan sus reglas de bioseguridad y no visiten otra granja avícola el mismo día.",
      "Resuelva el ejemplo del punto de equilibrio en un pizarrón, y luego pida a las parejas que calculen el costo de su propio lote.",
      "Califique cada plan de lote con costos usando la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
