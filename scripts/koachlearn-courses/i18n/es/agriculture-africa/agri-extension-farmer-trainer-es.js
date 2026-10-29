"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-extension-farmer-trainer.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_FFS = { name: "Plataforma Mundial de Escuelas de Campo para Agricultores de la FAO: panorama general", url: "https://www.fao.org/farmer-field-schools/overview/en/" };
const IDE_FBA = { name: "iDE: Farm Business Advisors (asesores de negocios agrícolas)", url: "https://www.ideglobal.org/story/fbas" };
const GIZ_FBS = { name: "GIZ: Agronegocios sostenibles de pequeños productores (Farmer Business School, África Occidental y Central)", url: "https://www.giz.de/en/projects/sustainable-smallholder-agribusiness" };
const ICRAF_VFT = { name: "CGIAR / ICRAF: El enfoque de capacitadores agrícolas voluntarios en África Oriental", url: "https://cgspace.cgiar.org/handle/10568/123260" };
const NAERLS = { name: "National Agricultural Extension and Research Liaison Services (NAERLS, servicio nacional de enlace entre extensión e investigación agrícola), Nigeria", url: "https://www.naerls.gov.ng/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO, Organización de Investigación Agrícola y Ganadera de Kenia)", url: "https://www.kalro.org" };
const PCPB = { name: "Pest Control Products Board (Junta de Productos para el Control de Plagas, Kenia): productos registrados", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigeria): registro de agroquímicos", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Office of the Data Protection Commissioner (Oficina del Comisionado de Protección de Datos, Kenia)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC, Comisión de Protección de Datos de Nigeria)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-extension-farmer-trainer-es",
  lang: "es",
  translationOf: "agri-extension-farmer-trainer",
  category: "Agriculture (Africa)",
  name: "Convertirse en capacitador de agricultores: extensión agrícola y asesores de negocios agrícolas",
  skills: "Conocer los papeles en la extensión agrícola, Planificar una sesión de capacitación con mostrar, probar y conversar, Manejar una parcela demostrativa y una sesión de escuela de campo, Asesorar con responsabilidad y derivar, Ganar dinero con ética vendiendo insumos y servicios, Llevar registros de capacitación",
  outcome: "planificar y dar una jornada corta de capacitación para los agricultores de tu comunidad: una lección práctica basada en mostrar, probar y conversar, una parcela demostrativa que compara la práctica de siempre con una mejor, consejos honestos que saben cuándo derivar, y registros de a quién capacitaste y qué cambió.",
  about: [
    "Este curso es para agricultores que quieren enseñar a sus vecinos: productores líderes, capacitadores agrícolas voluntarios, personas que quieren ser asesores de negocios agrícolas (Farm o Farmer Business Advisors), jóvenes emprendedores agrícolas, líderes de cooperativas y extensionistas nuevos en Kenia, Nigeria, Ghana, Costa de Marfil, Camerún y toda África.",
    "Vas a aprender cómo funciona la extensión agrícola y cuál es tu lugar, cómo aprenden mejor los adultos, cómo manejar una parcela demostrativa y una sesión de escuela de campo, cómo planificar una sesión corta, cómo usar teléfonos y videos para llegar a más agricultores, cómo dar consejos con responsabilidad y cuándo derivar a un experto, cómo ganarte la vida con ética vendiendo insumos y servicios, y cómo llevar registros de a quién capacitaste y qué cambió.",
    "Terminas con un plan de lección y un plan de parcela demostrativa para una jornada de capacitación real en tu comunidad. Las cifras de dinero son solo ejemplos. Cada lección termina con una tarea; una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Planifica una jornada de capacitación para 15 a 25 agricultores de tu comunidad sobre una práctica que conoces bien (por ejemplo sembrar maíz en hileras con composta, almacenar grano en bolsas herméticas o vacunar gallinas a través del veterinario). Escribe: (1) un plan de lección de 60 a 90 minutos que siga mostrar, probar y conversar, con la habilidad, los materiales, los tiempos y cómo comprobarás que cada agricultor puede hacerlo; (2) un plan de parcela demostrativa con dos parcelas lado a lado (la práctica de siempre y la práctica nueva), del mismo tamaño, con letreros, con lo que vas a registrar y las fechas de las visitas al campo; (3) tu lista de derivación (veterinario, oficina de extensión, autoridad que regula los insumos) y aquello sobre lo que no darás consejos; (4) una hoja de registro de la capacitación con consentimiento y una fecha de seguimiento.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Productores líderes, capacitadores agrícolas voluntarios, personas que quieren ser asesores de negocios agrícolas, jóvenes emprendedores agrícolas, líderes de cooperativas y extensionistas nuevos de toda África, incluidos Kenia, Nigeria, Ghana, Costa de Marfil y Camerún. La mayoría son agricultores respetados con habilidad práctica, pero sin formación para enseñar o asesorar.",
    startingPoint: "Saben cultivar o criar animales bien y a menudo dan consejos informales a sus vecinos. Pocos han planificado una lección, montado una parcela de comparación justa, llevado registros de a quién enseñaron o pensado dónde deben parar sus consejos. Algunos venden insumos y no están seguros de cómo hacerlo de forma justa.",
    gap: "Hay muy pocos extensionistas para tantos agricultores, así que los capacitadores agrícolas y los asesores cargan con buena parte del trabajo. Sin habilidades para enseñar, límites honestos y registros, su ayuda rinde menos y puede causar daño (dosis equivocadas, productos no registrados, ventas a presión). Los participantes necesitan enseñar de una forma que se quede, aconsejar con seguridad, ganar de forma justa y mostrar resultados.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: un teléfono inteligente sencillo; los agricultores que capacitan pueden tener solo teléfonos básicos",
      "Lugar: la capacitación se hace en las fincas, con poco equipo y sin proyector",
      "Seguridad: ninguna dosis de medicamentos, vacunas u hormonas y ningún tiempo de retiro; solo plaguicidas registrados, como dice la etiqueta",
      "Dinero: todas las cifras son ejemplos; los consejos sobre ganar dinero tratan de la justicia, no de inversiones",
      "Los datos personales de trabajadores y agricultores están protegidos por las leyes nacionales de protección de datos"
    ],
    prerequisites: "Experiencia práctica con al menos un cultivo o una cría de animales. Un curso de cultivos o de ganadería de este catálogo te ayuda a preparar el contenido que vas a enseñar."
  },
  // ---- ADDIE: Diseño (objetivos) ----
  objectives: [
    { id: "O1", condition: "Pensando en las personas que apoyan a los agricultores de tu zona", action: "describir los papeles de un productor líder, un asesor de negocios agrícolas y un extensionista, y con quién te vas a vincular", standard: "nombrando un contacto u oficina local para cada uno, donde existan" },
    { id: "O2", condition: "Con una práctica que conoces bien", action: "planificar una sesión de capacitación de 60 a 90 minutos que siga mostrar, probar y conversar", standard: "con una sola habilidad clara, tiempos, materiales y una forma de comprobar que cada agricultor puede hacerla" },
    { id: "O3", condition: "Para una práctica que quieres que los agricultores adopten", action: "montar una parcela demostrativa que compare la práctica de siempre con la práctica nueva", standard: "con parcelas del mismo tamaño, con letreros, registradas y visitadas en fechas fijas" },
    { id: "O4", condition: "Cuando un agricultor te pide un consejo que va más allá de tu formación", action: "dar solo los consejos para los que estás formado y derivar al agricultor al experto adecuado", standard: "usando una lista de derivación escrita y sin dar nunca dosis de medicamentos ni recomendar plaguicidas no registrados" },
    { id: "O5", condition: "Si vendes insumos o servicios a los agricultores que capacitas", action: "explicar cómo ganas dinero y las reglas éticas que sigues", standard: "con precios por escrito, comisiones reveladas y sin presionar a nadie para comprar" },
    { id: "O6", condition: "Después de cada capacitación", action: "registrar a quién capacitaste, sobre qué y los resultados", standard: "con consentimiento, guardado en privado y con al menos un seguimiento" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Enseñar a los agricultores para que se les quede",
      lessons: [
        {
          title: "Productores líderes, asesores de negocios agrícolas y extensionistas",
          objectives: ["O1"],
          minutes: 5,
          goal: "Describir los papeles en la extensión agrícola y nombrar con quién te vas a vincular.",
          text: [
            "Extensión agrícola significa ayudar a los agricultores a aprender y usar mejores prácticas. Los extensionistas del gobierno (en Nigeria, los Programas de Desarrollo Agrícola de cada estado, con el apoyo de NAERLS, el servicio nacional de extensión; en Kenia, los oficiales agrícolas de los condados, que trabajan con centros de investigación como KALRO) son asesores formados, pero cada uno atiende a muchísimos agricultores. Por eso los propios agricultores cargan con buena parte de la enseñanza.",
            "Un productor líder o capacitador agrícola voluntario es un agricultor respetado que recibe demostraciones en su finca y enseña a sus vecinos, normalmente formado y respaldado por un proyecto o una oficina de extensión. En África Oriental, ICRAF (el centro internacional de agroforestería) y sus socios han usado mucho a los capacitadores voluntarios, por ejemplo en la lechería; una evaluación en Uganda encontró que mejoraron los conocimientos, la producción de leche y los ingresos de los agricultores.",
            "Un asesor de negocios agrícolas (Farm Business Advisor o Farmer Business Advisor, FBA) es un emprendedor local que vende insumos y consejos a los agricultores cercanos y gana con comisiones y tarifas. iDE, una organización de desarrollo, forma FBA en Zambia y Mozambique, y cada uno atiende a unos 80 a 120 agricultores. En África Occidental y Central, la Farmer Business School (escuela de negocios para agricultores) de la GIZ, la agencia alemana de cooperación, ha formado a productores de cacao y de cultivos alimentarios de Costa de Marfil, Ghana, Togo, Nigeria y Camerún en habilidades de negocio agrícola, junto con los servicios de extensión. Sea cual sea tu título, tú complementas al extensionista; no lo reemplazas."
          ],
          steps: ["Haz la lista de quién apoya a los agricultores en tu zona: oficina de extensión, proyectos, cooperativas, agroveterinarias.", "Decide qué papel te queda: productor líder, FBA o ambos.", "Reúnete con tu extensionista local y explícale lo que piensas hacer.", "Escribe un contacto para cada papel y cuándo volverán a hablar."],
          words: [["Extensión agrícola", "servicios que ayudan a los agricultores a aprender y usar mejores prácticas."], ["Productor líder", "un agricultor respetado que recibe demostraciones en su finca y enseña a sus vecinos, muchas veces con apoyo de un proyecto o de la extensión."], ["Asesor de negocios agrícolas (FBA)", "un emprendedor local que vende insumos y da consejos a los agricultores cercanos a cambio de una comisión o una tarifa."]],
          slides: [
            { title: "Extensionistas", bullets: ["Asesores del gobierno con formación", "Nigeria: ADP, NAERLS; Kenia: oficiales del condado, KALRO", "Cada uno atiende a muchísimos agricultores"] },
            { title: "Productores líderes y capacitadores voluntarios", bullets: ["Reciben demostraciones, enseñan a los vecinos", "Muy usados en África Oriental (ICRAF, lechería)"] },
            { title: "Asesores de negocios agrícolas", bullets: ["Emprendedores locales: insumos más consejos", "iDE: Zambia, Mozambique; de 80 a 120 agricultores cada uno", "Farmer Business School de la GIZ: África Occidental y Central"] },
            { title: "Trabajar juntos", bullets: ["Tú complementas al extensionista", "Reúnete primero con tu oficina local"] }
          ],
          sources: [NAERLS, KALRO, ICRAF_VFT, IDE_FBA, GIZ_FBS],
          tryIt: "Haz una tabla de quién apoya a los agricultores en tu zona: la oficina de extensión, cualquier proyecto o cooperativa, y la agroveterinaria o el vendedor de insumos más cercano. Escribe qué papel vas a tomar (productor líder, FBA o ambos) y un contacto para cada papel.",
          youCanNow: "explicar los papeles en la extensión agrícola y cuál es tu lugar.",
          quickCheck: [
            { objective: "O1", q: "¿Qué distingue principalmente a un asesor de negocios agrícolas de un productor líder voluntario?", options: ["El FBA gana dinero vendiendo insumos y servicios", "El FBA es empleado del gobierno", "El FBA nunca da consejos", "El FBA solo trabaja en ciudades"], answer: 0, why: "Los FBA son emprendedores locales que ganan con comisiones y tarifas." },
            { objective: "O1", q: "Piensas empezar a capacitar a tus vecinos. ¿Con quién deberías reunirte primero?", options: ["Con un comprador de la ciudad", "Con una estación de radio", "Con tu extensionista local", "Con nadie; solo empieza"], answer: 2, why: "Trabajar con la extensión mantiene tus consejos al día y te da apoyo." }
          ]
        },
        {
          title: "Cómo aprenden los adultos y cómo planificar una sesión corta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Planificar una sesión de capacitación de 60 a 90 minutos que siga mostrar, probar y conversar.",
          text: [
            "Los agricultores adultos aprenden mejor haciendo, de personas en las que confían, sobre problemas que tienen ahora. Traen experiencia: respétala y pregunta qué hacen ya. Las charlas largas se olvidan; lo que hacen con sus propias manos se recuerda. Usa tres pasos: mostrar (tú haces la habilidad despacio, explicando por qué), probar (cada agricultor la hace mientras tú miras y ayudas) y conversar (el grupo habla de lo que vio, de lo que es difícil y de si funcionará en sus fincas).",
            "Enseña una habilidad por sesión, como \"medir y sembrar maíz en hileras con un puñado de composta por hoyo\", no \"todo sobre el maíz\". Planifícala: la habilidad; materiales para que todos prueben; los tiempos (por ejemplo 10 minutos de bienvenida y qué hacen ahora, 15 para mostrar, 30 para probar, 20 para conversar y 10 para planear y comprobar); y cómo comprobarás que cada agricultor puede hacerla, como mirar a cada uno sembrar bien tres hoyos.",
            "Escoge una hora que les convenga a los agricultores (después del trabajo de la mañana, no el día de mercado), un lugar al que puedan llegar y un idioma que hablen. Incluye a mujeres y jóvenes: pregunta quién hace el trabajo en la casa e invítalos. Mantén los grupos lo bastante pequeños para que todos prueben, unas 15 a 25 personas por capacitador."
          ],
          steps: ["Escoge una habilidad que los agricultores necesiten ahora.", "Planifica mostrar, probar y conversar, con tiempos.", "Haz la lista de materiales para que todos puedan probar.", "Decide cómo comprobarás que cada agricultor puede hacerlo.", "Escoge una hora, un lugar y un idioma que convengan a los agricultores."],
          words: [["Mostrar, probar, conversar", "un método de enseñanza: demostrar, dejar que todos practiquen y luego hablarlo juntos."], ["Plan de lección", "un plan corto por escrito de lo que vas a enseñar, cómo, con qué y cuánto dura cada parte."], ["Aprender haciendo", "aprender una habilidad practicándola con tus propias manos."]],
          slides: [
            { title: "Cómo aprenden los adultos", bullets: ["Haciendo, de personas en las que confían", "Sobre problemas que tienen ahora", "Respeta lo que ya saben"] },
            { title: "Mostrar, probar, conversar", bullets: ["Mostrar: demuestra despacio, di por qué", "Probar: todos lo hacen", "Conversar: ¿qué es difícil?, ¿funcionará aquí?"] },
            { title: "Una habilidad por sesión", bullets: ["Ejemplo: hileras con composta en cada hoyo", "Tiempos, materiales, una comprobación para todos"] },
            { title: "Que sea fácil venir", bullets: ["Buena hora y buen lugar", "El idioma de los agricultores", "Invita a mujeres y jóvenes"] }
          ],
          tryIt: "Escribe un plan de lección para una habilidad que conoces bien: la habilidad en una oración, los materiales, los tiempos de mostrar, probar y conversar para 60 a 90 minutos, y cómo comprobarás que cada agricultor puede hacerla.",
          youCanNow: "planificar una sesión corta de capacitación que enseña una habilidad con mostrar, probar y conversar.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es la mejor habilidad para una sesión de 90 minutos?", options: ["Todo sobre el maíz", "Toda la sanidad animal", "La agricultura en general", "Sembrar maíz en hileras con un puñado de composta por hoyo"], answer: 3, why: "Una sola habilidad clara se puede mostrar, practicar y comprobar en una sesión." },
            { objective: "O2", q: "¿Qué pasa en el paso de \"probar\"?", options: ["El capacitador da una charla larga", "Cada agricultor hace la habilidad mientras el capacitador mira y ayuda", "Los agricultores se van a casa", "El grupo vende insumos"], answer: 1, why: "Practicar con sus propias manos es como los adultos recuerdan." }
          ]
        },
        {
          title: "Parcelas demostrativas y escuelas de campo para agricultores",
          objectives: ["O3"],
          minutes: 6,
          goal: "Montar una parcela demostrativa que compare de forma justa la práctica de siempre con una nueva.",
          text: [
            "Los agricultores creen lo que ven en una finca como la suya. Una parcela demostrativa muestra una práctica nueva al lado de la de siempre. Escoge un lugar visible, cerca de un camino, con suelo parejo. Marca dos parcelas del mismo tamaño (por ejemplo de 10 m x 10 m cada una): la parcela A, la práctica de siempre; la parcela B, la práctica nueva. Cambia una sola cosa entre ellas, como la variedad, la distancia de siembra o la composta, para que la diferencia tenga una sola causa. Pon un letrero claro en cada una.",
            "Lleva registros desde el principio: fecha de siembra, insumos y mano de obra de cada parcela, fotos cada dos semanas, problemas y la cosecha pesada por separado. Planifica días de campo en las etapas clave (después de la emergencia, en la floración y en la cosecha) para que los agricultores vean y comparen. Sé honesto si la práctica nueva no gana: eso también enseña.",
            "Una Escuela de Campo para Agricultores (ECA, en inglés Farmer Field School o FFS) va más allá. La FAO la describe como un grupo de agricultores que se reúne con regularidad en un campo durante todo un ciclo de producción, guiado por un facilitador formado. Comparan parcelas (la práctica local y una práctica mejor propuesta) y hacen el Análisis del Agroecosistema: en grupos pequeños observan las plantas, las plagas, los enemigos naturales, el suelo y el clima, dibujan lo que ven y deciden juntos qué hacer. Las ECA se han usado en más de 90 países. Si quieres facilitar una, pregunta en tu oficina de extensión o en un proyecto por la formación de facilitadores."
          ],
          steps: ["Escoge un lugar visible con suelo parejo.", "Marca dos parcelas del mismo tamaño: práctica de siempre y práctica nueva.", "Cambia una sola cosa entre ellas; pon letreros en las dos.", "Registra fechas, insumos, mano de obra, fotos y la cosecha por parcela.", "Planifica días de campo en la emergencia, la floración y la cosecha."],
          words: [["Parcela demostrativa", "una parcela pequeña que muestra una práctica para que los agricultores la vean funcionar."], ["Escuela de Campo para Agricultores (ECA)", "un grupo que se reúne con regularidad en un campo durante una temporada, guiado por un facilitador, para aprender observando y probando."], ["Análisis del Agroecosistema (AAE)", "observar las plantas, las plagas, los enemigos naturales, el suelo y el clima en un campo, y luego decidir juntos qué hacer."]],
          slides: [
            { title: "Ver para creer", bullets: ["La práctica de siempre junto a la nueva", "Mismo tamaño, visibles, con letreros"] },
            { title: "Una comparación justa", bullets: ["Cambia una sola cosa", "Suelo parejo, el mismo cuidado en lo demás"] },
            { title: "Registra y muestra", bullets: ["Fechas, insumos, mano de obra, fotos", "Cosecha pesada por parcela", "Días de campo en las etapas clave"] },
            { title: "Escuela de Campo para Agricultores (FAO)", bullets: ["Se reúne con regularidad durante la temporada", "Facilitador formado, comparación de parcelas", "Análisis del Agroecosistema, decisiones en grupo"] }
          ],
          sources: [FAO_FFS],
          tryIt: "Dibuja el plano de una parcela demostrativa para la habilidad que planificaste en la Lección 2: dos parcelas del mismo tamaño, la única cosa que cambia, los letreros, lo que vas a registrar y las fechas de tres días de campo.",
          youCanNow: "montar una parcela demostrativa justa y explicar cómo funciona una escuela de campo para agricultores.",
          quickCheck: [
            { objective: "O3", q: "En tu demostración, la parcela B tiene una variedad nueva Y composta Y más distancia entre plantas. ¿Cuál es el problema?", options: ["Ninguno; más cambios es mejor", "Las parcelas son muy pequeñas", "No puedes saber qué cambio hizo la diferencia", "A los agricultores no les gustan los letreros"], answer: 2, why: "Cambia una sola cosa para que la diferencia tenga una sola causa." },
            { objective: "O3", q: "¿Qué hacen los agricultores de una escuela de campo de la FAO en el Análisis del Agroecosistema?", options: ["Observan el campo en grupos pequeños y deciden juntos qué hacer", "Solo escuchan una charla", "Compran insumos", "Llenan solicitudes de préstamo"], answer: 0, why: "El AAE es observar plantas, plagas, suelo y clima, y luego decidir en grupo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Enseñar a los agricultores para que se les quede",
        questions: [
          { objective: "O1", q: "¿Por qué importan tanto los capacitadores agrícolas en la extensión en África?", options: ["Los extensionistas no tienen formación", "Cada extensionista atiende a muchísimos agricultores", "A los agricultores no les gustan los expertos", "Lo exige la ley"], answer: 1, why: "Los capacitadores agrícolas ayudan a que la extensión llegue a más personas." },
          { objective: "O1", q: "¿En qué países ha trabajado la Farmer Business School de la GIZ con productores de cacao?", options: ["Solo en Kenia", "Solo en Asia", "Solo en Zambia y Mozambique", "Costa de Marfil, Ghana, Togo, Nigeria y Camerún"], answer: 3, why: "El proyecto cubre esos cinco países de África Occidental y Central." },
          { objective: "O2", q: "¿Cuáles son los tres pasos del método de enseñanza de este curso?", options: ["Mostrar, probar, conversar", "Hablar, hablar, examinar", "Leer, escribir, firmar", "Comprar, vender, pagar"], answer: 0, why: "Demostrar, practicar y hablarlo juntos." },
          { objective: "O2", q: "¿Cómo compruebas que una sesión funcionó?", options: ["Contando cuántas personas vinieron", "Preguntando si les gustó", "Mirando a cada agricultor hacer bien la habilidad", "Repartiendo un folleto largo"], answer: 2, why: "La prueba de una sesión de habilidades es que cada agricultor pueda hacer la habilidad." },
          { objective: "O3", q: "Una parcela demostrativa se debe poner:", options: ["Escondida detrás de la casa", "En un lugar visible cerca de un camino, con suelo parejo", "Solo en el peor suelo", "Lejos de todos los agricultores"], answer: 1, why: "Los agricultores deben verla, y el suelo parejo mantiene justa la comparación." }
        ]
      }
    },
    {
      name: "Capítulo 2: Asesorar, ganar dinero y mostrar resultados",
      lessons: [
        {
          title: "Llegar a los agricultores por teléfono y saber cuándo derivar",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dar solo los consejos para los que estás formado y derivar a los agricultores al experto adecuado.",
          text: [
            "Los teléfonos te ayudan a llegar a más agricultores entre visita y visita. Graba en tu teléfono un video corto (de uno a dos minutos) del paso de \"mostrar\" y compártelo en un grupo de WhatsApp; manda recordatorios por SMS a los agricultores con teléfonos básicos; usa notas de voz en el idioma local; haz una llamada de grupo corta antes de un día de campo. Pide permiso antes de grabar a las personas o sus fincas, y usa el grupo solo para temas agrícolas.",
            "Un consejo puede ayudar o hacer daño. Aconseja solo sobre lo que te enseñaron y has visto funcionar. Nunca des dosis de medicamentos, vacunas u hormonas para animales, y nunca des tiempos de retiro: di \"sigue al veterinario y la etiqueta del producto\". Recomienda solo plaguicidas registrados en tu país (por ejemplo ante la Pest Control Products Board de Kenia, la junta que regula los plaguicidas, o ante NAFDAC, la agencia nigeriana que registra alimentos, medicamentos y agroquímicos), usados como dice la etiqueta y con equipo de protección. Si no estás seguro, revisa la lista del organismo de registro.",
            "Deriva rápido cuando algo te queda grande: los animales enfermos o moribundos van al veterinario; las muertes repentinas de cerdos o aves pueden ser peste porcina africana o gripe aviar, que son de declaración obligatoria, así que dile al agricultor que avise de inmediato al veterinario o a la autoridad veterinaria y que no mueva ni venda los animales. Las plagas o enfermedades desconocidas de los cultivos van a la oficina de extensión o a un instituto de investigación. Los préstamos y los contratos van a un asesor de confianza. Lleva una lista de derivación escrita con nombres y números de teléfono, y haz seguimiento para saber qué pasó."
          ],
          steps: ["Comparte videos cortos, recordatorios por SMS y notas de voz; pide permiso antes de grabar.", "Aconseja solo sobre lo que te enseñaron.", "Nada de dosis ni tiempos de retiro: solo el veterinario y la etiqueta.", "Solo plaguicidas registrados, como dice la etiqueta.", "Deriva rápido con tu lista de derivación escrita, y haz seguimiento."],
          words: [["Derivación", "mandar a un agricultor con un experto que puede ayudar con algo que va más allá de tus habilidades."], ["Enfermedad de declaración obligatoria", "una enfermedad que por ley se debe informar a la autoridad veterinaria, como la peste porcina africana o la gripe aviar."], ["Plaguicida registrado", "un producto aprobado para su uso por la autoridad nacional que los regula."]],
          slides: [
            { title: "Los teléfonos llegan a más agricultores", bullets: ["Videos de 1 a 2 minutos del paso de \"mostrar\"", "Recordatorios por SMS, notas de voz, llamadas de grupo", "Pide permiso antes de grabar"] },
            { title: "Aconseja dentro de tu formación", bullets: ["Ninguna dosis de medicamentos, vacunas u hormonas", "Solo el veterinario y la etiqueta del producto", "Plaguicidas registrados, como dice la etiqueta"] },
            { title: "Deriva rápido", bullets: ["Animales enfermos: el veterinario", "Muertes de cerdos o aves: avisa de inmediato", "Problemas desconocidos en cultivos: la extensión"] },
            { title: "Tu lista de derivación", bullets: ["Nombres y números de teléfono", "Haz seguimiento para saber qué pasó"] }
          ],
          sources: [PCPB, NAFDAC],
          tryIt: "Escribe tu lista de derivación: el veterinario u oficina veterinaria más cercana, la oficina de extensión, el organismo que registra los plaguicidas en tu país y un asesor de confianza para dinero y contratos, con números de teléfono. Luego escribe tres preguntas que NO vas a responder tú y a quién se las vas a mandar.",
          youCanNow: "llegar a los agricultores por teléfono y dar consejos dentro de tus límites, derivando lo demás al experto adecuado.",
          quickCheck: [
            { objective: "O4", q: "Un agricultor te pregunta cuánto antibiótico darle a una cabra enferma. Le dices:", options: ["\"Dale dos cucharadas al día.\"", "\"Usa el más barato.\"", "\"Dale el doble para estar seguro.\"", "\"Llama al veterinario y sigue la etiqueta del producto; yo no puedo dar dosis.\""], answer: 3, why: "Las dosis vienen del veterinario y de la etiqueta, no de un capacitador agrícola." },
            { objective: "O4", q: "En un pueblo mueren de repente varios cerdos. ¿Qué les dices a los agricultores?", options: ["Que vendan rápido los que quedan", "Que avisen de inmediato al veterinario o a la autoridad veterinaria y no muevan los cerdos", "Que esperen una semana", "Que se coman la carne"], answer: 1, why: "Puede ser peste porcina africana, una enfermedad de declaración obligatoria que se debe informar de inmediato." }
          ]
        },
        {
          title: "Ganarse la vida como asesor de negocios agrícolas, con ética",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explicar cómo ganarás dinero con insumos y servicios y las reglas éticas que seguirás.",
          text: [
            "Un FBA gana llevando insumos y servicios a agricultores que están lejos de las tiendas: comisión por la semilla, el fertilizante, las bolsas herméticas o las herramientas que vende; tarifas por servicios como fumigar con el equipo adecuado, arar, tomar muestras de suelo, juntar cosechas para los compradores o llevar registros. iDE señala que los lazos de largo plazo de un FBA con su comunidad le dan una buena razón para recomendar solo productos que les den ganancia a los agricultores.",
            "La ética es un buen negocio. Vende solo productos auténticos y registrados de proveedores con licencia. Escribe tus precios y dile a los agricultores cuándo ganas una comisión. Recomienda lo que el agricultor necesita, no lo que más te paga a ti; di con claridad cuando la mejor respuesta es \"no necesitas comprar nada\". Nunca presiones a nadie, nunca vendas a crédito a quien sabes que no podrá pagar, y separa la capacitación de la venta: todos pueden ir a una capacitación, compren o no.",
            "Conoce tus números. Solo como ejemplo: si ganas una comisión de XOF 500 por saco y vendes 120 sacos en una temporada, son XOF 60,000, antes de tu transporte y tu tiempo. Lleva un registro sencillo de ventas, comisiones y tarifas de servicio, y averigua si en tu país hace falta algún registro de negocio o licencia para vender insumos, sobre todo agroquímicos."
          ],
          steps: ["Haz la lista de los insumos y servicios que puedes ofrecer.", "Escribe tus precios y tu comisión en cada uno.", "Escribe tus reglas éticas: productos auténticos, comisiones reveladas, nada de presión, capacitación abierta a todos.", "Registra ventas, comisiones y tarifas.", "Averigua las reglas de registro y de licencia para los vendedores de insumos."],
          words: [["Comisión", "dinero que gana un vendedor por cada artículo vendido, pagado por el proveedor."], ["Tarifa de servicio", "dinero que se cobra por hacer un trabajo, como fumigar o arar."], ["Conflicto de interés", "cuando lo que más te paga no es lo mejor para la persona a la que aconsejas."]],
          slides: [
            { title: "Cómo ganan los FBA", bullets: ["Comisión por los insumos vendidos", "Tarifas por servicios: fumigar, arar, juntar cosechas", "Llevar los insumos cerca de los agricultores"] },
            { title: "La ética es un buen negocio", bullets: ["Solo productos auténticos y registrados", "Precios por escrito, comisiones reveladas", "Primero el consejo, después la venta"] },
            { title: "Nada de presión", bullets: ["Se vale decir \"no necesitas comprar\"", "Capacitación abierta a todos, compren o no", "Nada de crédito que no se pueda pagar"] },
            { title: "Conoce tus números", bullets: ["Solo como ejemplo: XOF 500 x 120 sacos = XOF 60,000", "Menos transporte y tiempo", "Averigua las reglas de licencia"] }
          ],
          sources: [IDE_FBA],
          tryIt: "Escribe una nota de negocio de una página como FBA: tres insumos o servicios que podrías ofrecer, un precio y una comisión de ejemplo para cada uno, las ganancias de ejemplo de una temporada y tus cinco reglas éticas.",
          youCanNow: "planificar cómo ganar dinero como FBA con insumos y servicios sin perder la confianza de los agricultores.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es una regla ética de un FBA?", options: ["Decirles a los agricultores cuándo ganas una comisión", "Capacitar solo a quienes te compran", "Empujar el producto que deja la comisión más alta", "Vender productos no registrados si son más baratos"], answer: 0, why: "Revelar las comisiones mantiene honestos los consejos y crea confianza." },
            { objective: "O5", q: "El cultivo de un agricultor no necesita fertilizante esta temporada. Deberías:", options: ["Vendérselo de todos modos", "No decir nada y venderle un saco más chico", "Decirle con honestidad que no necesita comprarlo", "No volver a visitarlo"], answer: 2, why: "La confianza de largo plazo vale más que una sola venta." }
          ]
        },
        {
          title: "Llevar registros de capacitación y planificar tu jornada",
          objectives: ["O6", "O2", "O3"],
          minutes: 6,
          goal: "Llevar un registro de capacitación con consentimiento y planificar una jornada completa de capacitación.",
          text: [
            "Los registros muestran lo que logra tu trabajo, te ayudan a hacer seguimiento y son lo que piden los proyectos, las cooperativas y los empleadores. Lleva un registro de capacitación de cada sesión: fecha, lugar, tema, y de cada agricultor su nombre, género, grupo de edad (joven o no) y comunidad, y un número de teléfono solo si está de acuerdo. Anota si cada agricultor pudo hacer la habilidad al final.",
            "Haz seguimiento al menos una vez, por ejemplo un mes después o en la cosecha: ¿usaron la práctica?, ¿en cuánta tierra o con cuántos animales?, ¿y qué pasó? Registra los resultados de la parcela demostrativa por parcela. Con el tiempo podrás decir, por ejemplo, \"Capacité a 60 agricultores; 35 ahora siembran en hileras; su rendimiento de maíz subió en promedio\", con registros que lo respalden. No inventes números: si no lo mediste, dilo.",
            "Pide permiso para anotar los datos de las personas, explica por qué y guarda el registro en privado: en papel en un lugar seguro o en un teléfono bloqueado, no en un grupo público de WhatsApp. Kenia, Nigeria y otros países tienen leyes de protección de datos. Ahora junta todo para tu jornada de capacitación: el plan de lección, la parcela demostrativa, tu lista de derivación y este registro."
          ],
          steps: ["Haz un registro: fecha, lugar, tema, nombre, género, grupo de edad, comunidad, teléfono con consentimiento.", "Anota quién pudo hacer la habilidad al final.", "Haz seguimiento al menos una vez y registra qué cambió.", "Registra los resultados de la parcela demostrativa por parcela.", "Guarda el registro en privado; pide permiso primero."],
          words: [["Registro de capacitación", "una lista de quién asistió a una capacitación, sobre qué tema y con qué resultados."], ["Seguimiento", "revisar después si los agricultores usaron lo que aprendieron y qué pasó."], ["Consentimiento", "el permiso de una persona para anotar o compartir sus datos."]],
          slides: [
            { title: "Por qué llevar registros", bullets: ["Muestran lo que logra tu trabajo", "Te permiten hacer seguimiento", "Los proyectos y empleadores los piden"] },
            { title: "El registro de capacitación", bullets: ["Fecha, lugar, tema", "Nombre, género, grupo de edad, comunidad", "Teléfono solo con consentimiento; ¿pudo hacerlo?"] },
            { title: "Haz seguimiento", bullets: ["Al menos una vez: al mes o en la cosecha", "¿Lo usaron? ¿Qué pasó?", "Nunca inventes números"] },
            { title: "Guárdalo en privado", bullets: ["Pide permiso, explica por qué", "Papel en lugar seguro o teléfono bloqueado", "No en un grupo público"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Tarea final: planifica tu jornada de capacitación. Escribe el plan de lección de 60 a 90 minutos (mostrar, probar y conversar, con la habilidad, los materiales, los tiempos y la comprobación), el plan de la parcela demostrativa (dos parcelas del mismo tamaño con letreros, la única diferencia, los registros y las fechas de los días de campo), tu lista de derivación y aquello sobre lo que no darás consejos, y una hoja de registro de la capacitación con una línea de consentimiento y una fecha de seguimiento.",
          youCanNow: "planificar una jornada completa de capacitación y llevar registros que muestran a quién capacitaste y qué cambió.",
          quickCheck: [
            { objective: "O6", q: "Antes de escribir el número de teléfono de un agricultor en tu registro, deberías:", options: ["Publicarlo en el grupo", "Pedirle permiso y explicarle por qué", "Copiarlo de otra persona", "Escribirlo sin preguntar"], answer: 1, why: "Hace falta consentimiento para anotar datos personales." },
            { objective: "O6", q: "No mediste los rendimientos después de la capacitación. En tu informe deberías:", options: ["Adivinar un número alto", "Copiar los números de otro capacitador", "Dejar fuera la capacitación", "Decir que no se midieron los rendimientos"], answer: 3, why: "Los registros honestos valen más que los resultados inventados." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Asesorar, ganar dinero y mostrar resultados",
        questions: [
          { objective: "O4", q: "¿Qué plaguicida puede recomendar un capacitador agrícola?", options: ["Cualquiera barato del mercado", "Un producto registrado en el país, usado como dice la etiqueta", "Una mezcla casera de varios químicos", "El que haya usado un vecino"], answer: 1, why: "Solo productos registrados, usados según la etiqueta y con equipo de protección." },
          { objective: "O4", q: "Antes de grabar a un agricultor para un video de capacitación:", options: ["Le pides permiso", "Lo grabas a escondidas", "Lo publicas primero y preguntas después", "No le dices nunca"], answer: 0, why: "Pedir permiso respeta a las personas y sus fincas." },
          { objective: "O5", q: "La capacitación debe estar:", options: ["Solo para quienes te compran", "Pagada solo con comisiones", "Abierta a todos, compren o no", "Cancelada si las ventas son bajas"], answer: 2, why: "Separar la capacitación de la venta protege la confianza." },
          { objective: "O5", q: "Solo como ejemplo: comisión de XOF 500 por saco, 120 sacos vendidos. La comisión bruta es:", options: ["XOF 6,000", "XOF 600", "XOF 620", "XOF 60,000"], answer: 3, why: "500 x 120 = 60,000, antes de los costos." },
          { objective: "O6", q: "¿Dónde se debe guardar un registro de capacitación?", options: ["En privado: en papel en un lugar seguro o en un teléfono bloqueado", "En un grupo público de WhatsApp", "En un tablero de avisos", "Entregado a cualquier comprador"], answer: 0, why: "Los datos personales se deben guardar en privado." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Convertirse en capacitador de agricultores: extensión agrícola y asesores de negocios agrícolas",
    questions: [
      { objective: "O1", q: "Extensión agrícola significa:", options: ["Hacer más grande una finca", "Ayudar a los agricultores a aprender y usar mejores prácticas", "Vender tierras", "Prestar dinero"], answer: 1, why: "La extensión es consejo y aprendizaje para los agricultores." },
      { objective: "O1", q: "Un productor líder suele ser:", options: ["Un agricultor respetado que recibe demostraciones y enseña a sus vecinos", "Un empleado de banco", "Un ministro del gobierno", "Un comprador"], answer: 0, why: "Los productores líderes enseñan con el ejemplo en sus propias fincas." },
      { objective: "O1", q: "¿Qué organización forma asesores de negocios agrícolas en Zambia y Mozambique?", options: ["NAFDAC", "El Servicio Meteorológico de Kenia", "iDE", "La OMSA (WOAH, Organización Mundial de Sanidad Animal)"], answer: 2, why: "iDE maneja redes de FBA en esos países." },
      { objective: "O2", q: "Los adultos aprenden mejor una habilidad agrícola:", options: ["Escuchando una charla larga", "Leyendo un folleto largo", "Viendo televisión", "Haciéndola con sus propias manos"], answer: 3, why: "Lo que se aprende haciendo se recuerda." },
      { objective: "O2", q: "En una sesión de 90 minutos, la mayor parte del tiempo debe ir a:", options: ["La bienvenida", "Probar la habilidad", "Vender insumos", "Esperar"], answer: 1, why: "La práctica es donde se aprende la habilidad." },
      { objective: "O2", q: "¿Qué ayuda a que asistan más mujeres y jóvenes?", options: ["Preguntar quién hace el trabajo en la casa e invitarlos, a una hora adecuada", "Hacerla el día de mercado", "Usar un idioma que no hablan", "Invitar solo a los jefes de familia"], answer: 0, why: "Invitar a quienes hacen el trabajo, a una buena hora, hace que la capacitación les llegue." },
      { objective: "O3", q: "Una parcela demostrativa justa compara:", options: ["Dos parcelas con muchas diferencias", "Una sola parcela", "Parcelas del mismo tamaño que se diferencian en una práctica", "Tu finca con la de un vecino"], answer: 2, why: "Cambia una sola cosa para que el resultado tenga una sola causa." },
      { objective: "O3", q: "¿Cuándo debes hacer días de campo en una parcela demostrativa?", options: ["Solo después de la cosecha", "Nunca", "Solo antes de sembrar", "En etapas clave como la emergencia, la floración y la cosecha"], answer: 3, why: "Los agricultores ven la diferencia mientras crece el cultivo." },
      { objective: "O3", q: "Según la FAO, una Escuela de Campo para Agricultores se reúne:", options: ["Con regularidad durante todo un ciclo de producción, con un facilitador formado", "Una vez, durante una hora", "Solo en internet", "Solo en un salón de clases"], answer: 0, why: "Los grupos de ECA aprenden en el campo a lo largo de la temporada." },
      { objective: "O4", q: "Un capacitador agrícola debe dar dosis de medicamentos o vacunas:", options: ["Cuando se las piden", "Nunca; manda al agricultor al veterinario y a la etiqueta", "Solo para aves", "Si el agricultor insiste"], answer: 1, why: "Las dosis vienen del veterinario y de la etiqueta." },
      { objective: "O4", q: "En una finca mueren de repente varias gallinas. Le dices al agricultor que:", options: ["Venda las que quedan en el mercado", "Espere a ver qué pasa", "Avise de inmediato al veterinario o a la autoridad veterinaria", "Las entierre y no diga nada"], answer: 2, why: "Puede ser gripe aviar, una enfermedad de declaración obligatoria." },
      { objective: "O4", q: "En Nigeria, los agroquímicos los registra:", options: ["El Banco Central", "NiMet, el servicio meteorológico", "La policía", "NAFDAC"], answer: 3, why: "NAFDAC registra los agroquímicos en Nigeria." },
      { objective: "O4", q: "Un agricultor te pregunta por un contrato de préstamo. Tú:", options: ["Le dices que firme rápido", "Lo derivas a un asesor de confianza y le sugieres leerlo completo", "Lo firmas por él", "Le aconsejas pedir más dinero"], answer: 1, why: "El dinero y los contratos están fuera del papel de un capacitador agrícola." },
      { objective: "O5", q: "Un FBA suele ganar dinero con:", options: ["Comisiones por insumos y tarifas por servicios", "Solo un sueldo del gobierno", "Multas a los agricultores", "La venta de los datos de los agricultores"], answer: 0, why: "Los FBA son emprendedores que ganan con comisiones y tarifas." },
      { objective: "O5", q: "¿Qué es un conflicto de interés para un FBA?", options: ["Vender semilla auténtica", "Registrar las ventas", "Cuando el producto que más te paga no es el mejor para el agricultor", "Dar una capacitación"], answer: 2, why: "Las reglas éticas existen para manejar este conflicto." },
      { objective: "O5", q: "¿Cuál es una buena práctica de un FBA?", options: ["Esconder tu comisión", "Vender a crédito a quien no puede pagar", "Vender productos sin etiqueta", "Escribir tus precios"], answer: 3, why: "Los precios por escrito mantienen la venta justa y clara." },
      { objective: "O6", q: "Un registro de capacitación debe incluir:", options: ["La fecha, el tema, los nombres y si cada agricultor pudo hacer la habilidad", "Los PIN de dinero móvil de los agricultores", "Solo el nombre del capacitador", "Nada; la memoria basta"], answer: 0, why: "Esto muestra a quién se capacitó y qué tan bien." },
      { objective: "O6", q: "¿Por qué hacer seguimiento a los agricultores después de la capacitación?", options: ["Para vender más", "Para ver si usaron la práctica y qué pasó", "Porque te deben algo", "No hace falta"], answer: 1, why: "El seguimiento muestra los resultados y dónde ayudar más." },
      { objective: "O6", q: "Si no mediste los resultados, deberías:", options: ["Inventar buenos números", "Usar los números del año pasado", "Decir que no se midieron", "Copiar otro informe"], answer: 2, why: "Nunca inventes resultados." },
      { objective: "O6", q: "Anotar el número de teléfono de un agricultor necesita:", options: ["Nada", "Un pago", "La aprobación de un comprador", "Su consentimiento"], answer: 3, why: "Los datos personales se anotan solo con permiso." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 8, 9, 10, 13, 14, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Plan de lección", objective: "O2", notYet: "Una charla sin práctica, o varias habilidades a la vez.", meets: "Una sola habilidad, con mostrar, probar y conversar, tiempos y materiales, en 60 a 90 minutos, con una comprobación de que cada agricultor puede hacerla.", exceeds: "También planifica que asistan mujeres y jóvenes e incluye un video corto por teléfono o un seguimiento por SMS." },
      { name: "Parcela demostrativa", objective: "O3", notYet: "No hay comparación, o las parcelas se diferencian en varias cosas.", meets: "Dos parcelas del mismo tamaño con letreros que se diferencian en una práctica, con registros y fechas de días de campo.", exceeds: "Incluye cómo se pesarán las cosechas por parcela y cómo se compartirán con honestidad, aunque la práctica nueva no gane." },
      { name: "Consejos seguros y derivación", objective: "O4", notYet: "Da dosis o nombra productos no registrados; no hay lista de derivación.", meets: "Una lista de derivación con contactos, y aquello sobre lo que el capacitador no dará consejos, incluidas las enfermedades de declaración obligatoria.", exceeds: "Nombra el organismo nacional que registra los plaguicidas y cómo revisar su lista." },
      { name: "Ganancia justa", objective: "O5", notYet: "La capacitación está atada a comprar, o las comisiones están ocultas.", meets: "Si vende, precios por escrito, comisiones reveladas y capacitación abierta a todos.", exceeds: "Incluye ganancias de ejemplo de una temporada después de costos y una regla para decir \"no necesitas comprar\"." },
      { name: "Registros y papeles", objective: "O6", notYet: "No hay registro, o los datos personales se comparten abiertamente.", meets: "Un registro con consentimiento, una fecha de seguimiento y guardado en privado; se nombra el contacto local de extensión.", exceeds: "Registra tanto los resultados de la parcela demostrativa como la adopción de los agricultores en el seguimiento." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que dan al menos una jornada de capacitación en los 30 días siguientes (encuesta de seguimiento)",
      "Número de agricultores capacitados por participante, según los registros de capacitación",
      "Proporción de agricultores capacitados que usan la práctica en el seguimiento",
      "Resultados de la parcela demostrativa comparados con la práctica de siempre después de una temporada",
      "Participantes que trabajan con su oficina local de extensión o con un programa como productores líderes o FBA"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono inteligente para videos cortos, SMS y WhatsApp",
      "Papel, lápiz y un cuaderno para el plan de lección, el plan de la parcela demostrativa y el registro",
      "Acceso a un pedazo pequeño de tierra para una parcela demostrativa, estacas, cuerda y letreros",
      "Los datos de contacto de la oficina local de extensión, de un veterinario y del organismo nacional que registra los plaguicidas",
      "Unos 90 minutos en total, más el tiempo para dar la jornada de capacitación"
    ],
    facilitatorNotes: [
      "Enseñe este curso como pide a los participantes que enseñen: mostrar, probar y conversar, haciendo en la sesión el plan de lección y el plano de la parcela demostrativa.",
      "Involucre a la oficina local de extensión; si es posible, invite a un extensionista a la Lección 1.",
      "Nunca deje que los participantes den dosis de medicamentos, vacunas u hormonas para animales ni tiempos de retiro en los juegos de rol; practiquen la derivación en su lugar.",
      "Con quienes quieren ser FBA, hagan un juego de rol de una conversación de venta donde la respuesta correcta es \"no necesitas comprar\".",
      "Revise que los registros de práctica usen nombres inventados, salvo que agricultores reales hayan dado su consentimiento.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
