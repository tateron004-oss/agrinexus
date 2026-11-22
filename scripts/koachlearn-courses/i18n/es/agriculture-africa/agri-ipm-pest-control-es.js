"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-ipm-pest-control.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_IPM = { name: "FAO: Manejo integrado de plagas", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const CIMMYT_FAW = { name: "CIMMYT, USAID y socios: El gusano cogollero en África: guía para el manejo integrado de plagas (2018)", url: "https://repository.cimmyt.org/handle/10883/19204" };
const FAO_FAMEWS = { name: "FAO: aplicación móvil para apoyar la lucha contra el gusano cogollero en África (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_TUTA = { name: "icipe: Insecto del mes: el minador del tomate, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const ICIPE_PP_FAW = { name: "icipe: La tecnología push-pull frena al gusano cogollero", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const ICIPE_PP_HOW = { name: "icipe: Nuevo estudio explica cómo el push-pull vence al gusano cogollero (cómo actúan el desmodium y la brachiaria)", url: "https://www.icipe.org/news/new-study-unravels-mechanisms-through-which-icipe-push-pull-technology-conquers-fall-armyworm" };
const ICIPE_PP_GUIDE = { name: "icipe: Guía para agricultores del push-pull climáticamente inteligente (edición revisada)", url: "https://technologytransfer.icipe.org/wp-content/uploads/2021/04/Climate_Smart_Push-Pull_English_Revised_Edition_Web_Version.pdf" };
const PCPB = { name: "Junta de Productos para el Control de Plagas (PCPB, Kenia)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Agencia Nacional de Administración y Control de Alimentos y Medicamentos (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Autoridad de Protección Ambiental (EPA, Ghana)", url: "https://www.epa.gov.gh" };
const CILSS_CSP = { name: "CILSS / INSAH: guía de registro del Comité Saheliano de Plaguicidas (CSP)", url: "https://insah.cilss.int/wp-content/uploads/2023/08/GUIDE_CSP_FINAL_nov_2017_anglais.pdf" };

module.exports = {
  id: "agri-ipm-pest-control-es",
  lang: "es",
  translationOf: "agri-ipm-pest-control",
  category: "Agriculture (Africa)",
  name: "Manejo integrado de plagas y control orgánico de plagas",
  skills: "Prevenir las plagas antes de que empiecen, Recorrer el campo e identificar el gusano cogollero y Tuta absoluta, Decidir cuándo actuar con umbrales y registros, Usar push-pull, enemigos naturales, trampas y controles biológicos, Usar plaguicidas de forma segura y legal como último paso",
  outcome: "escribir y aplicar un plan de manejo integrado de plagas (MIP) para un cultivo de tu finca: prevenir plagas, revisar el campo cada semana, decidir con un umbral cuándo actuar, usar primero controles sin químicos y usar un plaguicida registrado de forma segura solo cuando de verdad haga falta.",
  about: [
    "Este curso es para pequeños agricultores y agricultores comerciales en crecimiento, trabajadores agrícolas, jóvenes agroemprendedores y extensionistas que están cansados de fumigar una y otra vez y aun así perder sus cosechas. Los ejemplos son maíz, sorgo, frijol y tomate en Kenia, Nigeria, Ghana y Burkina Faso.",
    "El capítulo 1 te enseña a frenar las plagas a tiempo: los cuatro pasos del MIP (prevenir, vigilar, decidir, actuar), cómo recorrer un campo y distinguir el gusano cogollero y el minador del tomate (Tuta absoluta) de otros daños, y cómo usar un umbral y registros sencillos para decidir cuándo vale la pena actuar. El capítulo 2 enseña a controlar con menos veneno: el push-pull de icipe, los enemigos naturales, las trampas, los productos botánicos y biológicos y, como último paso, el uso seguro y legal de plaguicidas que además frena la resistencia.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\" en tu propio campo. Las plagas y los productos permitidos cambian según el país, así que usa este curso junto con tu extensionista, una clínica de plantas y la autoridad nacional de plaguicidas. Después de cada lección hay una prueba rápida, una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de MIP para una temporada y un cultivo de tu propia finca (por ejemplo media acre de maíz o una parcela de tomate): las principales plagas y enfermedades que esperas, al menos tres pasos de prevención, una rutina semanal de monitoreo con una hoja de registro, el umbral de acción que te dio el extensionista para cada plaga principal, los controles sin químicos que usarás primero y un plan de plaguicida como último paso (un producto revisado en la lista de tu autoridad reguladora, las reglas de la etiqueta que seguirás, el equipo de protección que usarás y cómo rotarás los grupos para frenar la resistencia).",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños agricultores y agricultores comerciales en crecimiento, trabajadores agrícolas, jóvenes agroemprendedores y extensionistas de toda África que cultivan maíz, sorgo, arroz, frijol, maní, hortalizas y tomate. Muchos enfrentan el gusano cogollero desde que llegó a África en 2016, y los productores de tomate han enfrentado Tuta absoluta.",
    startingPoint: "Saben nombrar algunas plagas y suelen fumigar cuando ven daño, muchas veces con lo que les sugiere la tienda agrícola. Pocos revisan el campo con un horario fijo, llevan registros de plagas, usan umbrales o saben qué enemigos naturales los ayudan. Muchos fumigan sin el equipo de protección completo.",
    gap: "Fumigar por costumbre cuesta dinero, mata a los enemigos naturales, crea resistencia, daña la salud y puede dejar residuos que los compradores rechazan. Los participantes necesitan prevenir plagas, revisar y registrar, actuar solo cuando un umbral dice que vale la pena, usar primero controles sin químicos y usar plaguicidas registrados de forma segura como último paso.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; muchos participantes tienen el inglés como segunda lengua y el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: un teléfono básico o inteligente; una lupa ayuda, pero no es indispensable",
      "Tiempo: lecciones de unos 5 minutos que caben entre las labores del campo; la práctica se hace en el propio campo del participante",
      "Las reglas cambian según el país: los productos deben estar en la lista de la autoridad nacional (por ejemplo la PCPB en Kenia, NAFDAC en Nigeria, la EPA en Ghana y el Comité Saheliano de Plaguicidas para los países del CILSS como Senegal y Burkina Faso)",
      "Seguridad: el curso nunca da nombres de productos, dosis ni plazos de seguridad antes de la cosecha; los participantes siguen la etiqueta y a su extensionista"
    ],
    prerequisites: "Ninguno. \"Producción sostenible de cultivos y hortalizas\" da primero un resumen corto del MIP, y \"Salud y fertilidad del suelo\" ayuda con la prevención."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Para un cultivo de tu propia finca", action: "enumerar los pasos de prevención que evitan que las plagas se multipliquen antes de que empiece la temporada", standard: "nombrando al menos tres pasos adecuados para tu cultivo" },
    { id: "O2", condition: "Recorriendo tu propio campo una vez por semana", action: "revisar un número fijo de plantas e identificar el gusano cogollero, Tuta absoluta y los enemigos naturales comunes por sus señales", standard: "revisando al menos 50 plantas (o 20 plantas de tomate) y anotando lo que encuentras" },
    { id: "O3", condition: "Con tus conteos del monitoreo y un umbral del extensionista", action: "decidir si actuar ahora o seguir vigilando, y anotar la decisión", standard: "siguiendo la regla del umbral cada vez" },
    { id: "O4", condition: "Ante un problema de plagas en tu cultivo", action: "elegir e instalar controles sin químicos como push-pull, enemigos naturales, trampas y productos biológicos", standard: "antes de usar cualquier plaguicida sintético" },
    { id: "O5", condition: "Cuando de verdad haga falta un plaguicida", action: "comprobar que el producto está registrado, seguir su etiqueta y usar el equipo de protección que indica", standard: "sin saltarte ningún paso" },
    { id: "O6", condition: "A lo largo de una temporada de decisiones de fumigación", action: "rotar los grupos de plaguicidas y llevar un registro de aplicaciones para frenar la resistencia", standard: "sin usar nunca el mismo grupo dos veces seguidas contra la misma generación de la plaga" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Frenar las plagas a tiempo",
      lessons: [
        {
          title: "Los cuatro pasos del MIP, empezando por la prevención",
          objectives: ["O1"],
          minutes: 5,
          goal: "Enumerar los pasos de prevención que evitan que las plagas se multipliquen en uno de tus cultivos.",
          text: [
            "La FAO (Organización de las Naciones Unidas para la Alimentación y la Agricultura) describe el manejo integrado de plagas (MIP) como mirar todas las formas de controlar las plagas, combinar las adecuadas y usar plaguicidas solo cuando se justifican. Funciona en cuatro pasos: prevenir, vigilar, decidir y actuar. La mayor parte del ahorro viene del primer paso.",
            "Prevenir significa hacer del campo un mal hogar para las plagas y un buen hogar para el cultivo. Siembra semilla certificada de una variedad adecuada para tu zona, y variedades resistentes o tolerantes donde existan. Rota los cultivos para que las plagas que viven en el suelo o en los rastrojos se queden sin comida: por ejemplo, maíz, luego frijol y luego sorgo. Siembra a tiempo y al mismo tiempo que tus vecinos, para que las plagas no pasen de los campos tardíos a los tempranos. Alimenta el suelo, porque las plantas débiles son las primeras en ser atacadas.",
            "Mantén el campo limpio: arranca y destruye las plantas con virus o enfermedad, saca las plantas espontáneas y las malezas que hospedan plagas, y limpia herramientas y botas. En el tomate, cría las plántulas en un vivero limpio y con malla, para que lleguen al campo libres de Tuta absoluta y de mosca blanca. Deja bordes con flores y setos, porque alimentan a los insectos que se comen las plagas.",
            "Una agricultora de Ghana que rota el maíz con maní, siembra temprano con sus vecinos y arranca las plantas enfermas cada semana suele fumigar mucho menos que quien siembra maíz en la misma parcela todas las temporadas."
          ],
          steps: ["Anota las principales plagas y enfermedades de tu cultivo (pregunta al extensionista o a una clínica de plantas).", "Elige semilla certificada de una variedad adecuada, resistente o tolerante.", "Planea una rotación y siembra a tiempo, al mismo tiempo que tus vecinos.", "Planea la limpieza del campo: arranca plantas enfermas, plantas espontáneas y malezas hospederas; limpia las herramientas.", "Deja bordes con flores para los enemigos naturales."],
          words: [["MIP", "manejo integrado de plagas: prevenir las plagas, vigilarlas, decidir cuándo vale la pena actuar y combinar muchos controles, con plaguicidas solo cuando se justifican."], ["Prevención", "pasos que se toman antes de que lleguen las plagas para que no puedan multiplicarse."], ["Rotación", "sembrar un cultivo distinto en la misma parcela cada temporada."], ["Planta espontánea", "una planta del cultivo que nace sola de la semilla de la temporada pasada y puede llevar plagas."]],
          slides: [
            { title: "El MIP en cuatro pasos", bullets: ["1. Prevenir", "2. Vigilar (monitorear)", "3. Decidir: ¿vale la pena actuar?", "4. Actuar: primero sin químicos, el plaguicida al final"] },
            { title: "La prevención empieza con la semilla", bullets: ["Semilla certificada de una variedad adecuada", "Variedades resistentes o tolerantes donde existan", "Alimenta el suelo: las plantas débiles son atacadas primero"] },
            { title: "Deja sin comida a las plagas", bullets: ["Rota: maíz, luego frijol, luego sorgo", "Siembra a tiempo, junto con los vecinos", "Saca las plantas espontáneas y las malezas hospederas"] },
            { title: "Mantén todo limpio", bullets: ["Arranca y destruye las plantas enfermas", "Limpia herramientas y botas", "Vivero de tomate limpio y con malla", "Los bordes con flores alimentan a los enemigos naturales"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Elige un cultivo que sembrarás la próxima temporada. Escribe sus tres peores plagas o enfermedades y luego al menos tres pasos de prevención que darás antes de sembrar (semilla, rotación, fecha de siembra, limpieza, bordes).",
          youCanNow: "nombrar los cuatro pasos del MIP y enumerar los pasos de prevención que evitan que las plagas se multipliquen en tu cultivo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué paso del MIP suele ahorrarle más dinero a un agricultor?", options: ["Fumigar cada semana", "Comprar un producto más fuerte", "La prevención antes de que lleguen las plagas", "Fumigar el campo del vecino"], answer: 2, why: "La prevención evita que las plagas se multipliquen, así que después hacen falta menos controles." },
            { objective: "O1", q: "Tu maíz tuvo mucho daño de plagas en la misma parcela tres temporadas seguidas. ¿Qué paso de prevención es el mejor?", options: ["Rotar la parcela a frijol o maní la próxima temporada", "Sembrar el maíz más tarde que tus vecinos", "Dejar de pie los tallos de maíz de la temporada pasada", "Sembrar semilla no certificada guardada de mazorcas dañadas"], answer: 0, why: "La rotación rompe el ciclo de la plaga porque le quita su planta de alimento." }
          ]
        },
        {
          title: "Monitorear e identificar el gusano cogollero y Tuta absoluta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Recorrer un campo por un camino fijo e identificar el gusano cogollero, Tuta absoluta y los enemigos naturales por sus señales.",
          text: [
            "Monitorear significa recorrer tu campo con un horario y revisar un número fijo de plantas, para ver los problemas a tiempo y poder contarlos. Revisa al menos una vez por semana, y más seguido el maíz joven y el tomate. Camina en forma de W o en zigzag para revisar todo el campo, no solo las orillas. En el maíz, detente en cinco puntos y revisa 10 plantas seguidas en cada uno, 50 plantas en total. En una parcela pequeña de tomate, revisa 20 plantas repartidas por los surcos.",
            "El gusano cogollero llegó a África en 2016 y ahora está en casi todo el continente. En el maíz joven, busca pequeñas \"ventanitas\" (manchas delgadas y transparentes) en las hojas, luego agujeros irregulares y excrementos húmedos parecidos al aserrín en el cogollo. La oruga tiene una Y invertida de color claro en la cabeza y cuatro puntos oscuros en cuadro cerca de la cola. Las masas de huevos están sobre las hojas, bajo una capa de escamas peludas. Una planta cuenta como infestada si tiene daño fresco o una oruga viva.",
            "Tuta absoluta, el minador del tomate, vino de América del Sur y se extendió por África en pocos años; icipe informa que en el norte de Nigeria, en 2016, destruyó la mayor parte de la cosecha de tomate. Sus orugas diminutas hacen túneles dentro de las hojas, dejando manchas claras y transparentes (minas) con excrementos oscuros, y hacen pequeños agujeros en tallos y frutos. El adulto es una polilla pequeña de color gris pardo que se esconde de día.",
            "Busca también a tus aliados: mariquitas y sus larvas, crisopas, arañas, tijeretas, hormigas y avispitas parasitoides, y orugas que se ven enfermas, blandas o cubiertas de hongo. La FAO señala que los enemigos naturales ya matan muchas orugas del gusano cogollero en los campos africanos. Si no estás seguro de lo que ves, toma una foto clara y pregunta al extensionista o a una clínica de plantas; en algunos países la aplicación FAMEWS de la FAO registra los hallazgos del gusano cogollero."
          ],
          steps: ["Elige un día de monitoreo cada semana y lleva un cuaderno o el teléfono.", "Camina en W; detente en 5 puntos en el maíz (10 plantas en cada uno) o revisa 20 plantas de tomate repartidas.", "En cada planta, revisa hojas, cogollo o punta de crecimiento, tallos y frutos.", "Cuenta las plantas con daño fresco o plagas vivas; anota las masas de huevos.", "Anota los enemigos naturales que veas.", "Fotografía lo que no puedas identificar y pregunta al extensionista o a una clínica de plantas."],
          words: [["Monitoreo", "recorrer un campo con un horario y revisar un número fijo de plantas en busca de plagas, enfermedades y enemigos naturales."], ["Cogollo", "las hojas jóvenes enrolladas en la parte de arriba de una planta de maíz joven."], ["Mina de la hoja", "un túnel o mancha clara dentro de una hoja, hecho por una oruga diminuta que come entre las dos caras de la hoja."], ["Enemigo natural", "un insecto, araña, hongo u otro ser vivo que mata plagas."]],
          slides: [
            { title: "Cómo monitorear", bullets: ["Cada semana, el mismo día", "Camino en W o zigzag, no solo las orillas", "Maíz: 5 puntos x 10 plantas = 50", "Tomate: 20 plantas repartidas"] },
            { title: "Señales del gusano cogollero", bullets: ["Ventanitas en hojas jóvenes, luego agujeros irregulares", "Excrementos húmedos como aserrín en el cogollo", "Y invertida en la cabeza, 4 puntos oscuros cerca de la cola"] },
            { title: "Señales de Tuta absoluta", bullets: ["Minas claras en las hojas con excrementos oscuros", "Agujeros pequeños en tallos y frutos", "Polilla pequeña gris parda que se esconde de día"] },
            { title: "Busca también a tus aliados", bullets: ["Mariquitas, crisopas, arañas, tijeretas, hormigas", "Avispitas parasitoides; orugas enfermas o con hongo", "¿Dudas? Foto al extensionista o a una clínica de plantas"] }
          ],
          sources: [CIMMYT_FAW, ICIPE_TUTA, FAO_FAMEWS],
          tryIt: "Monitorea hoy uno de tus campos caminando en W: 50 plantas de maíz o 20 de tomate. Anota cuántas plantas tenían daño fresco o plagas vivas, las masas de huevos y cada enemigo natural que viste.",
          youCanNow: "recorrer un campo por un camino fijo, identificar el gusano cogollero y Tuta absoluta por sus señales y reconocer a los enemigos naturales.",
          quickCheck: [
            { objective: "O2", q: "Ves excrementos húmedos como aserrín y agujeros irregulares en el cogollo del maíz joven. ¿Cuál es la plaga más probable?", options: ["El minador del tomate", "Pulgones", "El gusano cogollero", "Termitas"], answer: 2, why: "Los agujeros irregulares y los excrementos húmedos en el cogollo son señales típicas del gusano cogollero." },
            { objective: "O2", q: "¿Por qué caminar en W al monitorear en vez de revisar las plantas cerca de la entrada?", options: ["Es más rápido", "Las plagas solo viven en el centro", "Gasta menos agua", "Revisa todo el campo, no solo las orillas"], answer: 3, why: "Caminar en W toma muestras de todas las partes del campo, así el conteo refleja el nivel real." }
          ]
        },
        {
          title: "Umbrales y registros: decidir cuándo actuar",
          objectives: ["O3"],
          minutes: 5,
          goal: "Comparar tu conteo del monitoreo con un umbral de acción y anotar si actuar o seguir vigilando.",
          text: [
            "Ver una plaga no significa que tengas que fumigar. Un umbral de acción es el nivel de plaga o de daño a partir del cual el control vale lo que cuesta. Por debajo, los enemigos naturales y el cultivo suelen aguantar, y fumigar sería perder dinero y matar a tus aliados. Pide el umbral para cada plaga principal, etapa del cultivo y zona a tu extensionista o a tu instituto de investigación (como KALRO, el instituto de investigación agrícola de Kenia), porque cambia con la etapa del cultivo, el precio y la investigación local.",
            "Convierte tu conteo en porcentaje: plantas con daño fresco o plagas vivas, divididas entre las plantas revisadas, por 100. Ejemplo: revisaste 50 plantas de maíz y 9 tenían daño fresco de gusano cogollero, así que 9 / 50 x 100 = 18%. Si el extensionista te dijo que actúes al 20% en esta etapa, sigues vigilando y vuelves a revisar en unos días. Si la semana siguiente es 26%, actúas. El maíz joven suele aguantar menos daño que el maíz más grande, así que los umbrales suelen cambiar según la etapa.",
            "Anota cada visita. Un registro sencillo tiene la fecha, el campo, la etapa del cultivo, las plantas revisadas, las plantas infestadas, el porcentaje, los enemigos naturales vistos, el umbral, tu decisión y lo que hiciste. Después de unas temporadas, tus registros muestran cuándo llegan las plagas a tu finca, qué controles funcionaron y cuánto costaron. Sirve un cuaderno de papel; también una hoja de cálculo en el teléfono o una aplicación agrícola."
          ],
          steps: ["Pide al extensionista el umbral para cada plaga principal y cada etapa del cultivo.", "Después de monitorear, cuenta las plantas revisadas y las infestadas.", "Calcula el porcentaje: infestadas / revisadas x 100.", "Compara con el umbral: por debajo = sigue vigilando; igual o por encima = actúa.", "Anota en tu registro la fecha, los números, los enemigos naturales, la decisión y la acción."],
          words: [["Umbral de acción", "el nivel de plaga o de daño a partir del cual el control vale lo que cuesta."], ["Infestada", "que tiene plagas o daño fresco de plagas."], ["Etapa del cultivo", "cuánto ha crecido el cultivo, por ejemplo plántula, a la altura de la rodilla, espigamiento, floración, fructificación."]],
          slides: [
            { title: "Ver una plaga no es razón para fumigar", bullets: ["Umbral: el nivel en que actuar vale la pena", "Por debajo, los enemigos naturales suelen aguantar", "Pide los umbrales al extensionista, según la etapa"] },
            { title: "Calcula el porcentaje", bullets: ["Plantas infestadas / plantas revisadas x 100", "Ejemplo: 9 / 50 x 100 = 18%", "Umbral 20%: sigue vigilando, revisa pronto otra vez"] },
            { title: "Registra cada visita", bullets: ["Fecha, campo, etapa del cultivo", "Revisadas, infestadas, %, enemigos naturales", "Umbral, decisión, acción, costo"] }
          ],
          sources: [FAO_IPM, CIMMYT_FAW],
          tryIt: "Usa el conteo de tu monitoreo de la lección anterior. Calcula el porcentaje de plantas infestadas, pide a tu extensionista el umbral para la etapa de tu cultivo y llena la primera línea de tu registro con tu decisión.",
          youCanNow: "convertir un conteo del monitoreo en porcentaje, compararlo con un umbral y anotar tu decisión.",
          quickCheck: [
            { objective: "O3", q: "Revisaste 50 plantas y 15 tenían daño fresco. ¿Cuál es la infestación?", options: ["15%", "30%", "50%", "35%"], answer: 1, why: "15 / 50 x 100 = 30%." },
            { objective: "O3", q: "Tu conteo es 12% y el umbral del extensionista para esta etapa es 20%. ¿Qué haces?", options: ["Fumigar hoy por si acaso", "Arrancar el cultivo", "Duplicar la dosis", "Seguir vigilando, revisar pronto otra vez y anotarlo"], answer: 3, why: "Por debajo del umbral, el control todavía no vale la pena; sigues monitoreando y anotando." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Frenar las plagas a tiempo",
        questions: [
          { objective: "O1", q: "¿Cuál es un paso de prevención del MIP?", options: ["Fumigar cuando ves una oruga", "Sembrar a tiempo semilla certificada de una variedad adecuada", "Mezclar dos plaguicidas", "Quemar el cultivo del vecino"], answer: 1, why: "La buena semilla y la siembra a tiempo evitan que las plagas se multipliquen antes de empezar." },
          { objective: "O2", q: "Manchas claras con excrementos oscuros dentro de las hojas del tomate, y agujeros pequeños en el fruto, indican:", options: ["Tuta absoluta (minador del tomate)", "Gusano cogollero", "Exceso de fertilizante", "Falta de agua"], answer: 0, why: "Las minas en las hojas y los agujeros en el fruto son las señales de Tuta absoluta." },
          { objective: "O2", q: "Al monitorear encuentras mariquitas y una oruga cubierta de hongo blanco. Debes:", options: ["Fumigar para matarlas también", "Ignorarlas; no importan", "Anotarlas como enemigos naturales trabajando", "Quemar la planta"], answer: 2, why: "Los enemigos naturales mantienen bajas las plagas, así que los anotas y los proteges." },
          { objective: "O3", q: "¿Qué es un umbral de acción?", options: ["El día en que siembras", "El precio de un plaguicida", "El número de trabajadores que necesitas", "El nivel de plaga a partir del cual el control vale lo que cuesta"], answer: 3, why: "Por debajo del umbral, el control cuesta más de lo que ahorra." },
          { objective: "O3", q: "¿Por qué llevar un registro escrito de cada visita de monitoreo?", options: ["Para ver cuándo llegan las plagas, qué funcionó y cuánto costó", "Porque lo pide la tienda agrícola", "Para que el campo se vea ordenado", "No sirve de nada"], answer: 0, why: "Los registros convierten cada temporada en lecciones para la siguiente." }
        ]
      }
    },
    {
      name: "Capítulo 2: Controlar las plagas con menos veneno",
      lessons: [
        {
          title: "Push-pull y enemigos naturales",
          objectives: ["O4"],
          minutes: 6,
          goal: "Planear una parcela de push-pull y proteger a los enemigos naturales de tu finca.",
          text: [
            "El push-pull (\"empujar y atraer\") lo desarrolló icipe (el Centro Internacional de Fisiología y Ecología de los Insectos), con sus socios, para el maíz y el sorgo en África Oriental. Siembras desmodium entre los surcos de maíz. El desmodium suelta olores que empujan a las polillas barrenadoras lejos del cultivo. Alrededor de la parcela siembras un borde de pasto forrajero (brachiaria en la versión climáticamente inteligente para zonas más secas, pasto napier en la original), que atrae a las polillas hacia él y las atrapa. El desmodium también frena la maleza striga y aporta nitrógeno al suelo, y las dos plantas son buen alimento para el ganado.",
            "Estudios de icipe en Kenia, Uganda y Tanzania encontraron mucho menos daño de gusano cogollero en los campos con push-pull climáticamente inteligente que en el maíz sembrado solo, y cosechas de grano más altas. El push-pull da trabajo al principio y necesitas semilla o guías de desmodium y matas de pasto, así que empieza con una parcela pequeña, pide el diseño al extensionista o a un agricultor capacitado por icipe y sigue la guía para agricultores de icipe.",
            "Los enemigos naturales son trabajadores gratis. Las hormigas, tijeretas, arañas, mariquitas y crisopas se comen los huevos y las orugas jóvenes; unas avispitas ponen sus huevos dentro de las plagas; hongos y virus matan orugas. La FAO señala que ya matan una gran parte del gusano cogollero en los campos africanos. icipe liberó en Kenia una avispa diminuta de América del Sur que ataca solo a Tuta absoluta. Para protegerlos: fumiga solo cuando el umbral lo diga, elige productos selectivos, conserva plantas con flores y setos alrededor de los campos y deja algo de cobertura en el suelo."
          ],
          steps: ["Marca una parcela pequeña de push-pull (pide el diseño al extensionista o consulta la guía de icipe).", "Siembra primero el pasto del borde (brachiaria o napier) alrededor de la parcela.", "Siembra desmodium entre los surcos de maíz o sorgo.", "Corta el pasto y el desmodium como forraje para el ganado y deja que las plantas rebroten.", "Protege a los enemigos naturales: nada de fumigar sin necesidad, conserva flores y cobertura del suelo."],
          words: [["Push-pull", "un sistema de icipe en el que un cultivo intercalado (desmodium) empuja a las plagas lejos y un pasto de borde las atrae fuera del cultivo."], ["Desmodium", "una leguminosa rastrera que se siembra entre los surcos de cereal; repele a las polillas barrenadoras, frena la striga y aporta nitrógeno."], ["Striga", "una maleza parásita de flores rosadas o moradas que se pega a las raíces del maíz y del sorgo y les roba el alimento."], ["Avispa parasitoide", "una avispa diminuta que pone sus huevos dentro o encima de una plaga; sus crías matan a la plaga."]],
          slides: [
            { title: "Push-pull (icipe)", bullets: ["El desmodium entre surcos empuja a las polillas lejos", "El pasto del borde (brachiaria o napier) las atrae fuera", "Para maíz y sorgo"] },
            { title: "Beneficios extra", bullets: ["El desmodium frena la striga y aporta nitrógeno", "Las dos plantas alimentan al ganado", "Ensayos de icipe: mucho menos daño de gusano cogollero"] },
            { title: "Tus trabajadores gratis", bullets: ["Hormigas, tijeretas, arañas, mariquitas, crisopas", "Avispitas parasitoides; hongos y virus", "Una avispa liberada en Kenia ataca solo a Tuta absoluta"] },
            { title: "Protege a los enemigos naturales", bullets: ["Fumiga solo por encima del umbral", "Elige productos selectivos", "Conserva flores, setos y cobertura del suelo"] }
          ],
          sources: [ICIPE_PP_FAW, ICIPE_PP_HOW, ICIPE_PP_GUIDE, ICIPE_TUTA],
          tryIt: "Dibuja un croquis de una parcela pequeña de push-pull para tu maíz o sorgo, con el pasto del borde, los surcos de desmodium y los surcos del cultivo. Luego escribe dos cosas que cambiarás en tu finca para proteger a los enemigos naturales.",
          youCanNow: "explicar cómo funciona el push-pull, dibujar una parcela de push-pull y nombrar formas de proteger a los enemigos naturales.",
          quickCheck: [
            { objective: "O4", q: "En el push-pull, ¿qué hace el desmodium entre los surcos de maíz?", options: ["Atrae las plagas hacia el maíz", "Empuja lejos a las polillas barrenadoras y frena la striga", "Da sombra al maíz para que crezca más alto", "Mata a las mariquitas"], answer: 1, why: "El olor del desmodium repele a las polillas y frena la striga; el pasto del borde es el que atrae." },
            { objective: "O4", q: "¿Qué costumbre protege mejor a los enemigos naturales?", options: ["Fumigar un plaguicida de amplio espectro cada semana", "Quitar todas las flores y setos alrededor del campo", "Quemar los rastrojos y toda la cobertura del suelo", "Fumigar solo por encima del umbral y conservar bordes con flores"], answer: 3, why: "Menos fumigaciones y plantas con flores mantienen vivos y alimentados a los enemigos naturales." }
          ]
        },
        {
          title: "Trampas, opciones botánicas y biológicas",
          objectives: ["O4"],
          minutes: 5,
          goal: "Elegir e instalar trampas y controles botánicos o biológicos aprobados para un problema de plagas.",
          text: [
            "Las trampas te ayudan a vigilar y a bajar el número de plagas. Las trampas de feromonas usan el olor de la polilla hembra para atrapar a los machos: icipe usa el trampeo masivo como parte de su MIP para Tuta absoluta, y las trampas de feromonas para el gusano cogollero te avisan cuándo llegan las polillas para que monitorees con más cuidado. Las tarjetas amarillas pegajosas atrapan mosca blanca, pulgones y adultos de minadores; las azules atrapan trips. Cambia los atrayentes y las tarjetas cuando lo diga el proveedor, y cuenta las capturas cada semana en tu registro.",
            "Recoger a mano funciona en parcelas pequeñas: aplasta las masas de huevos y las orugas jóvenes del gusano cogollero, y quita y destruye las hojas minadas por Tuta y los frutos dañados (entiérralos hondo o ciérralos en una bolsa al sol; nunca los dejes en el suelo).",
            "Los productos biológicos usan seres vivos o sus productos naturales contra las plagas: por ejemplo, productos a base de la bacteria Bt (Bacillus thuringiensis), de hongos que infectan insectos o de virus de insectos. icipe desarrolla bioplaguicidas a base de hongos. Suelen ser suaves con los enemigos naturales, pero actúan despacio, deben alcanzar a las orugas jóvenes y hay que guardarlos como dice la etiqueta. En muchos países deben estar registrados como cualquier plaguicida, así que revisa la lista de la autoridad reguladora.",
            "Las opciones botánicas vienen de plantas, como el nim. Los productos de nim registrados tienen una etiqueta que puedes seguir. Los extractos caseros se usan mucho, pero su fuerza varía y aun así pueden dañar a los enemigos naturales, la piel y los ojos, así que pregunta a tu extensionista cómo se usan en tu zona, usa guantes y pruébalos primero en unas pocas plantas."
          ],
          steps: ["Escoge la herramienta según la plaga: trampas de feromonas para polillas, tarjetas amarillas para mosca blanca y pulgones, azules para trips.", "Cuelga las trampas a la altura del cultivo y cuenta las capturas cada semana.", "Recoge a mano y destruye masas de huevos, orugas jóvenes y hojas minadas.", "Si hace falta más, elige un producto biológico o botánico registrado.", "Aplícalo sobre las orugas jóvenes, como dice su etiqueta, y anótalo."],
          words: [["Trampa de feromonas", "una trampa con el olor de apareamiento de un insecto; atrapa a los machos y muestra cuándo llegan las plagas."], ["Bioplaguicida", "un producto para controlar plagas hecho de seres vivos como bacterias, hongos o virus, o de sus productos naturales."], ["Bt", "Bacillus thuringiensis, una bacteria del suelo que se usa en bioplaguicidas; mata a algunas orugas cuando la comen."], ["Botánico", "un producto para controlar plagas hecho de plantas, como el nim."]],
          slides: [
            { title: "Trampas para vigilar y reducir", bullets: ["Las trampas de feromonas atrapan polillas macho", "Tarjetas amarillas: mosca blanca, pulgones; azules: trips", "Cuenta las capturas cada semana; cambia los atrayentes a tiempo"] },
            { title: "Recoger a mano funciona", bullets: ["Aplasta masas de huevos y orugas jóvenes", "Quita hojas minadas por Tuta y frutos dañados", "Entiérralos hondo o ciérralos en una bolsa, nunca en el suelo"] },
            { title: "Productos biológicos", bullets: ["Bt, hongos que matan insectos, virus de insectos", "Suaves con los enemigos naturales, pero lentos", "Contra orugas jóvenes; revisa el registro"] },
            { title: "Botánicos como el nim", bullets: ["Los productos registrados tienen etiqueta: síguela", "La fuerza de los extractos caseros varía", "Pregunta al extensionista, usa guantes, prueba en pocas plantas"] }
          ],
          sources: [ICIPE_TUTA, CIMMYT_FAW, PCPB, NAFDAC],
          tryIt: "Para la peor plaga de tu cultivo, escribe qué trampa usarías y dónde la colgarías, qué recogerías a mano y una opción biológica o botánica. Luego revisa si ese producto está en la lista de registro de tu país o pide a tu tienda agrícola que te muestre su registro.",
          youCanNow: "elegir trampas, recolección a mano y controles biológicos o botánicos aprobados para una plaga, e instalarlos.",
          quickCheck: [
            { objective: "O4", q: "Cultivas tomate y quieres saber cuándo llegan las polillas de Tuta absoluta. ¿Qué instalas?", options: ["Una trampa de feromonas para Tuta absoluta", "Una tarjeta azul pegajosa", "Un balde de agua en la bodega", "Un espantapájaros"], answer: 0, why: "Una trampa de feromonas para Tuta atrapa a las polillas macho y muestra cuándo llegan." },
            { objective: "O4", q: "Un bioplaguicida a base de Bt funciona mejor cuando:", options: ["Lo fumigas sobre orugas grandes y viejas al mediodía", "Lo mezclas con cualquier otro químico", "Lo aplicas sobre orugas jóvenes como dice su etiqueta", "Lo guardas al sol"], answer: 2, why: "Los productos biológicos actúan despacio y funcionan mejor sobre orugas jóvenes, usados como dice la etiqueta." }
          ]
        },
        {
          title: "Los plaguicidas como último paso, y cómo frenar la resistencia",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Comprobar el registro de un plaguicida, seguir su etiqueta con equipo de protección y planear la rotación de grupos para frenar la resistencia.",
          text: [
            "Usa un plaguicida sintético solo cuando tu conteo esté por encima del umbral y los otros controles no basten. Primero comprueba que el producto esté registrado para tu cultivo y tu plaga en tu país: la Junta de Productos para el Control de Plagas (PCPB) en Kenia, NAFDAC en Nigeria, la Autoridad de Protección Ambiental (EPA) en Ghana y el Comité Saheliano de Plaguicidas (CSP) para los países del CILSS como Senegal y Burkina Faso. Cada una tiene una lista de productos registrados; revísala y compra solo envases sellados y etiquetados en una tienda agrícola con licencia. Los productos falsos y sin registro son comunes.",
            "La etiqueta es la ley. Léela completa antes de abrir el envase: los cultivos y plagas para los que sirve, la dosis, cómo mezclarlo, cuándo aplicarlo, el equipo de protección, cuánto esperar antes de cosechar (el plazo de seguridad) y antes de que la gente vuelva a entrar al campo, y los primeros auxilios. Usa lo que indica la etiqueta, por lo general guantes, botas, mangas largas y pantalón largo, protección para los ojos y una mascarilla o respirador. Fumiga en horas frescas y sin viento, nunca hacia personas, animales o agua. No comas, bebas ni fumes mientras fumigas, lávate después y guarda los productos bajo llave, lejos de los niños y de la comida. Nunca pongas plaguicida en una botella de bebida o de comida.",
            "Las plagas se vuelven resistentes cuando se usa el mismo tipo de químico una y otra vez: las pocas que sobreviven se reproducen. El gusano cogollero y Tuta absoluta son conocidos por esto. Las etiquetas suelen mostrar un número de grupo o el ingrediente activo. Rota entre grupos, no uses el mismo grupo dos veces seguidas contra la misma generación de la plaga, nunca uses menos dosis ni mezcles productos por tu cuenta, y lleva un registro de aplicaciones con la fecha, el producto, el grupo, la dosis, el campo y la fecha de fin del plazo de seguridad. En Kenia, una productora de tomate que fumiga el mismo producto cada pocos días suele ver que deja de funcionar; la que monitorea, pone trampas y rota grupos mantiene eficaces sus pocas fumigaciones."
          ],
          steps: ["Confirma que el conteo está por encima del umbral y que los otros controles no bastan.", "Comprueba que el producto esté registrado para tu cultivo y tu plaga (PCPB, NAFDAC, EPA Ghana, CSP).", "Compra un envase sellado y etiquetado en una tienda agrícola con licencia.", "Lee toda la etiqueta; ponte todo el equipo de protección que indica.", "Fumiga en horas frescas y sin viento con la dosis de la etiqueta; lávate y guarda todo con seguridad.", "Anota el producto, el grupo, la dosis y la fecha de fin del plazo de seguridad; la próxima vez rota de grupo."],
          words: [["Plaguicida registrado", "un producto que la autoridad nacional aprobó para cultivos y plagas determinados."], ["Etiqueta", "las instrucciones del envase; seguirlas es la ley."], ["EPP", "equipo de protección personal: guantes, botas, ropa larga, protección para los ojos y mascarilla o respirador."], ["Plazo de seguridad", "el tiempo que debes esperar después de fumigar antes de cosechar; viene impreso en la etiqueta."], ["Resistencia", "cuando una plaga ya no muere con un producto que antes la mataba."], ["Grupo de modo de acción", "un número o nombre que muestra cómo mata un plaguicida; rota entre grupos para frenar la resistencia."]],
          slides: [
            { title: "Plaguicida: el último paso", bullets: ["Solo por encima del umbral", "Solo cuando los otros controles no bastan", "Solo registrado para tu cultivo y tu plaga"] },
            { title: "Comprueba el registro", bullets: ["Kenia: PCPB; Nigeria: NAFDAC", "Ghana: EPA; Senegal, Burkina Faso: CSP (CILSS)", "Sellado, etiquetado, tienda agrícola con licencia"] },
            { title: "La etiqueta es la ley", bullets: ["Cultivo, plaga, dosis, momento de aplicación", "EPP: guantes, botas, mangas largas, ojos, mascarilla", "Plazo de seguridad y tiempo antes de volver a entrar"] },
            { title: "Frena la resistencia", bullets: ["Rota los grupos de modo de acción", "Nunca uses menos dosis ni hagas tus propias mezclas", "Lleva un registro de aplicaciones"] }
          ],
          sources: [PCPB, NAFDAC, GHANA_EPA, CILSS_CSP, FAO_IPM],
          tryIt: "Tarea final: escribe tu plan de MIP de una temporada para un cultivo de tu finca: plagas principales, al menos tres pasos de prevención, tu rutina semanal de monitoreo y tu hoja de registro, los umbrales que te dio el extensionista, los controles sin químicos que usarás primero y un plan de plaguicida como último paso (un producto revisado en la lista de tu autoridad reguladora, las reglas de la etiqueta, tu EPP y cómo rotarás los grupos).",
          youCanNow: "comprobar que un plaguicida está registrado, seguir su etiqueta con el equipo de protección correcto, y rotar grupos y llevar registros para frenar la resistencia.",
          quickCheck: [
            { objective: "O5", q: "Una tienda agrícola te ofrece barata una botella de insecticida sin etiqueta. ¿Qué haces?", options: ["Comprarla; es más barata", "Mezclarla con agua y probarla", "Rechazarla y comprar un producto sellado, etiquetado y registrado", "Usar media botella"], answer: 2, why: "Sin etiqueta no puedes saber qué es, cómo usarlo con seguridad ni si está registrado." },
            { objective: "O6", q: "La última vez fumigaste un producto del grupo A. La plaga sigue por encima del umbral. ¿Qué es lo mejor?", options: ["Fumigar otra vez el grupo A al doble de la dosis", "Fumigar un producto registrado de otro grupo", "Mezclar tú mismo el grupo A con otro producto", "Fumigar el grupo A todos los días"], answer: 1, why: "Rotar a otro grupo frena la resistencia; las dosis dobles y las mezclas caseras son peligrosas e ilegales." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Controlar las plagas con menos veneno",
        questions: [
          { objective: "O4", q: "En el push-pull, el pasto del borde alrededor del maíz:", options: ["Atrae a las polillas barrenadoras lejos del maíz", "Empuja a las polillas hacia el maíz", "Mata el maíz", "Reemplaza al fertilizante"], answer: 0, why: "El pasto del borde (brachiaria o napier) atrae y atrapa a las polillas." },
          { objective: "O4", q: "¿Cuál es un control biológico?", options: ["Un insecticida de amplio espectro", "Un producto a base de la bacteria Bt", "Quemar el campo", "Regar de noche"], answer: 1, why: "Los productos con Bt usan una bacteria para matar a algunas orugas." },
          { objective: "O5", q: "¿Quién lleva la lista de plaguicidas registrados en Kenia?", options: ["La oficina de caminos del condado", "La tienda agrícola", "La Junta de Productos para el Control de Plagas (PCPB)", "La empresa de semillas"], answer: 2, why: "La PCPB registra los productos para el control de plagas en Kenia." },
          { objective: "O5", q: "¿Dónde encuentras cuánto esperar entre la fumigación y la cosecha?", options: ["Preguntando a un vecino", "Adivinando según el clima", "Siempre es un día", "En la etiqueta del producto (el plazo de seguridad)"], answer: 3, why: "La etiqueta da el plazo de seguridad para cada cultivo." },
          { objective: "O6", q: "¿Por qué rotar los grupos de plaguicidas?", options: ["Para frenar que las plagas se vuelvan resistentes", "Para que el campo huela distinto", "Porque un grupo siempre es ilegal", "Para gastar las existencias viejas"], answer: 0, why: "Usar el mismo grupo una y otra vez selecciona las plagas que lo sobreviven." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Manejo integrado de plagas y control orgánico de plagas",
    questions: [
      { objective: "O1", q: "¿Cuáles son los cuatro pasos del MIP, en orden?", options: ["Fumigar, esperar, fumigar, cosechar", "Prevenir, vigilar, decidir, actuar", "Comprar, mezclar, fumigar, vender", "Arar, sembrar, fumigar, almacenar"], answer: 1, why: "El MIP empieza con la prevención y usa plaguicidas solo después de vigilar y decidir." },
      { objective: "O1", q: "¿Qué paso ayuda a que las plagas no pasen de un campo a otro?", options: ["Sembrar en fechas distintas a las de tus vecinos", "Dejar las plantas espontáneas", "Sembrar a tiempo, junto con tus vecinos", "Conservar las malezas hospederas"], answer: 2, why: "Sembrar juntos no deja campos tardíos a donde las plagas puedan pasar." },
      { objective: "O1", q: "¿Por qué criar las plántulas de tomate en un vivero limpio y con malla?", options: ["Para que lleguen al campo libres de Tuta absoluta y de mosca blanca", "Para que no necesiten agua", "Porque la malla aporta fertilizante", "Para que crezcan más rápido en la oscuridad"], answer: 0, why: "Las plántulas limpias y protegidas con malla evitan que las plagas lleguen con el cultivo." },
      { objective: "O2", q: "¿Cuántas plantas de maíz revisa el método de monitoreo de este curso?", options: ["5", "10", "100 en la entrada", "50: 10 plantas en 5 puntos de un camino en W"], answer: 3, why: "Cinco paradas de 10 plantas en un camino en W dan una imagen justa del campo." },
      { objective: "O2", q: "Una oruga tiene una Y invertida en la cabeza y cuatro puntos oscuros en cuadro cerca de la cola. Es:", options: ["El gusano cogollero", "Una larva de mariquita", "Tuta absoluta", "Una crisopa"], answer: 0, why: "Esas marcas identifican a la oruga del gusano cogollero." },
      { objective: "O2", q: "¿Cuál de estos es un enemigo natural que debes anotar y proteger?", options: ["La polilla del gusano cogollero", "La mosca blanca", "La mariquita", "La striga"], answer: 2, why: "Las mariquitas comen pulgones y otras plagas pequeñas." },
      { objective: "O2", q: "Encuentras un daño que no puedes identificar. El mejor paso siguiente es:", options: ["Fumigar el producto más fuerte que tengas", "Tomarle una foto y preguntar al extensionista o a una clínica de plantas", "Ignorarlo", "Quemar todo el campo"], answer: 1, why: "Un diagnóstico correcto va antes de cualquier control." },
      { objective: "O3", q: "Revisaste 40 plantas y 10 estaban infestadas. ¿Cuál es el porcentaje?", options: ["10%", "40%", "4%", "25%"], answer: 3, why: "10 / 40 x 100 = 25%." },
      { objective: "O3", q: "¿De dónde debe venir tu umbral de acción?", options: ["Del anuncio del plaguicida", "De tu extensionista o instituto de investigación, según la etapa de tu cultivo", "Del número más alto que se te ocurra", "De lo que adivine un vecino"], answer: 1, why: "Los umbrales dependen de la etapa del cultivo y de la investigación local." },
      { objective: "O3", q: "Tu conteo está por encima del umbral. ¿Qué haces?", options: ["Actuar, empezando por la mejor opción sin químicos, y anotarlo", "Esperar hasta la cosecha", "Dejar de monitorear", "Volver a sembrar"], answer: 0, why: "Por encima del umbral, actuar vale la pena; el MIP empieza con controles sin químicos." },
      { objective: "O4", q: "El push-pull lo desarrolló:", options: ["Una empresa de plaguicidas", "icipe y sus socios", "Una tienda de semillas", "Un banco"], answer: 1, why: "icipe desarrolló el push-pull con sus socios en África Oriental." },
      { objective: "O4", q: "Además de las plagas, el desmodium del push-pull también:", options: ["Atrae más striga", "Necesita fumigación diaria", "Mata al ganado", "Frena la striga y aporta nitrógeno"], answer: 3, why: "El desmodium frena la striga, fija nitrógeno y es buen forraje." },
      { objective: "O4", q: "Las tarjetas azules pegajosas sirven sobre todo para atrapar:", options: ["Trips", "Orugas del gusano cogollero", "Ratas", "Termitas"], answer: 0, why: "Las tarjetas azules atraen a los trips; las amarillas, a la mosca blanca y los pulgones." },
      { objective: "O4", q: "¿Qué debes hacer con las hojas minadas por Tuta y los frutos dañados que quitas?", options: ["Dejarlos en el suelo", "Dárselos al siguiente cultivo de tomate", "Venderlos", "Enterrarlos hondo o cerrarlos en una bolsa al sol"], answer: 3, why: "Si se quedan en el suelo, las orugas de adentro terminan de crecer y vuelven a atacar." },
      { objective: "O5", q: "En Nigeria, ¿qué agencia registra los plaguicidas?", options: ["El Banco Central", "La Agencia Meteorológica de Nigeria", "NAFDAC", "El consejo de semillas"], answer: 2, why: "NAFDAC registra los plaguicidas en Nigeria." },
      { objective: "O5", q: "¿Cuál es la regla correcta sobre el equipo de protección?", options: ["Usar lo que indica la etiqueta, como guantes, botas, mangas largas, protección para los ojos y mascarilla", "Los pantalones cortos están bien en días de calor", "Los guantes son solo para mujeres", "El equipo de protección es solo para fincas grandes"], answer: 0, why: "La etiqueta indica el equipo de protección necesario para ese producto." },
      { objective: "O5", q: "¿Dónde nunca debes guardar plaguicida?", options: ["En su envase original", "En una bodega con llave", "En una botella de refresco o de agua", "Lejos de la comida y de los niños"], answer: 2, why: "El plaguicida en botellas de bebida causa muchas intoxicaciones." },
      { objective: "O6", q: "Una plaga ya no muere con un producto que antes funcionaba. Esto se llama:", options: ["Rotación", "Resistencia", "Umbral", "Polinización"], answer: 1, why: "La resistencia aparece cuando se usa el mismo grupo químico una y otra vez." },
      { objective: "O6", q: "¿Qué costumbre acelera la resistencia?", options: ["Rotar los grupos", "Fumigar solo por encima del umbral", "Llevar un registro de aplicaciones", "Fumigar el mismo producto cada pocos días"], answer: 3, why: "El uso repetido del mismo grupo selecciona a las plagas que lo sobreviven." },
      { objective: "O6", q: "¿Qué va en un registro de aplicaciones?", options: ["Fecha, producto, grupo, dosis, campo y fecha de fin del plazo de seguridad", "Solo el precio", "Solo el clima", "Nada; los registros no hacen falta"], answer: 0, why: "Estos datos te permiten rotar grupos y respetar el plazo de seguridad." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del plan y revísala otra vez con tu extensionista.",
    criteria: [
      { name: "Prevención", objective: "O1", notYet: "No hay pasos de prevención, o solo \"fumigar temprano\".", meets: "Al menos tres pasos de prevención adecuados para el cultivo (semilla, rotación, fecha de siembra, limpieza o bordes).", exceeds: "Los pasos de prevención están en un calendario y acordados con los vecinos, por ejemplo sembrar juntos." },
      { name: "Rutina de monitoreo", objective: "O2", notYet: "Monitorea \"cuando veo daño\", sin un número fijo de plantas.", meets: "Un día fijo a la semana, un camino en W, un número fijo de plantas y una hoja de registro con columnas para plagas y enemigos naturales.", exceeds: "Incluye fotos de las plagas principales y de los enemigos naturales para identificarlos, y el registro ya se usó al menos dos semanas." },
      { name: "Umbrales y decisiones", objective: "O3", notYet: "No hay umbrales; actúa por costumbre.", meets: "Un umbral del extensionista para cada plaga principal, con el cálculo del porcentaje escrito.", exceeds: "Los umbrales están por etapa del cultivo e incluye un ejemplo resuelto con sus propios conteos." },
      { name: "Primero sin químicos", objective: "O4", notYet: "El plaguicida es el primer y único control.", meets: "Al menos dos controles sin químicos (push-pull, trampas, recolección a mano, enemigos naturales, biológicos o botánicos) planeados antes de cualquier plaguicida.", exceeds: "Los controles sin químicos ya están instalados, por ejemplo trampas colgadas o una parcela de push-pull sembrada." },
      { name: "Último paso seguro y legal", objective: "O5", notYet: "El producto no se revisó, o el plan se salta la etiqueta o el EPP.", meets: "El producto se revisó en la lista de la autoridad nacional, y el plan sigue la etiqueta, enumera el EPP e indica el plazo de seguridad de la etiqueta.", exceeds: "También incluye el almacenamiento seguro, cómo desechar los envases vacíos según la etiqueta y los pasos de primeros auxilios." },
      { name: "Resistencia y registros", objective: "O6", notYet: "Un solo producto toda la temporada, sin registro de aplicaciones.", meets: "Un registro de aplicaciones y una rotación entre al menos dos grupos.", exceeds: "La rotación está planeada por generación de la plaga, y los registros incluyen el costo de cada control." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que dicen, 30 días después, que monitorean cada semana y llevan registros de plagas (encuesta de seguimiento)",
      "Menos fumigaciones por temporada según los participantes, con la cosecha igual o mejor",
      "Participantes que instalan al menos un control sin químicos (push-pull, trampas, productos biológicos) en una temporada",
      "Menos casos de intoxicación por plaguicidas o de cosechas rechazadas en los grupos de participantes (comentarios de extensionistas y compradores)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono (mejor con cámara) o un cuaderno y un lápiz para los registros de monitoreo",
      "Acceso a un campo con un cultivo, de preferencia maíz, sorgo o tomate",
      "Opcional: una lupa, una trampa de feromonas y tarjetas pegajosas para mostrar al grupo",
      "Los datos de contacto del extensionista local o de la clínica de plantas, y el sitio web de la autoridad nacional de plaguicidas",
      "Unos 60 a 90 minutos en total para las lecciones, las pruebas rápidas y los exámenes, más el monitoreo semanal en el campo"
    ],
    facilitatorNotes: [
      "Si puedes, da el curso como una escuela de campo para agricultores: hagan juntos la prueba inicial y luego monitoreen un campo real en grupo después de las lecciones 2 y 3.",
      "Lleva muestras reales o fotos del gusano cogollero, de Tuta absoluta y de enemigos naturales para que los participantes practiquen cómo identificarlos.",
      "Consigue los umbrales locales del servicio de extensión o del instituto de investigación antes de la sesión; no los inventes.",
      "Nunca recomiendes un producto, una dosis ni un plazo de seguridad; enseña a los participantes a leer la etiqueta y la lista de la autoridad reguladora.",
      "No manipules plaguicidas en la sesión sin el EPP completo; usa un envase etiquetado, vacío y limpio para practicar la lectura de la etiqueta.",
      "Califica el plan final de MIP con la rúbrica y acuerda una mejora con cada participante para la próxima temporada."
    ]
  }
};
