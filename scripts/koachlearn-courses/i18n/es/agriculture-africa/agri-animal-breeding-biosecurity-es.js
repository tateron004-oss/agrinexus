"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-animal-breeding-biosecurity.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const WOAH_ASF = { name: "Organización Mundial de Sanidad Animal (WOAH): peste porcina africana", url: "https://www.woah.org/en/disease/african-swine-fever/" };
const WOAH_ASF_VACCINE = { name: "WOAH (junio de 2025): usar solo vacunas contra la PPA de alta calidad que cumplan la nueva norma", url: "https://www.woah.org/en/asf-woah-stresses-the-importance-of-using-high-quality-vaccines-that-comply-with-newly-adopted-standard" };
const FAO_ASF = { name: "FAO: peste porcina africana (no hay vacuna ni tratamiento eficaz; la prevención es el control)", url: "https://www.fao.org/animal-health/animal-diseases/african-swine-fever/en" };
const WOAH_AI = { name: "Organización Mundial de Sanidad Animal (WOAH): influenza aviar", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: influenza aviar (signos en las aves)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const FAO_PIG_BIOSEC = { name: "FAO: Buenas prácticas de bioseguridad en el sector porcino (Estudio FAO Producción y Sanidad Animal 169)", url: "https://www.fao.org/4/i1435e/i1435e00.htm" };
const FAO_POULTRY_BIOSEC = { name: "FAO: Buenas prácticas de bioseguridad en la producción avícola comercial a pequeña escala y de traspatio en Kenia", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const UGA_HEAT = { name: "Extensión de la Universidad de Georgia: estrategias para detectar el celo en vacas lecheras (celo de monta, regla AM-PM)", url: "https://fieldreport.caes.uga.edu/publications/B1212/heat-detection-strategies-for-dairy-cattle" };
const KAGRC = { name: "Kenya Animal Genetic Resources Centre (KAGRC): semen e insumos para inseminación artificial", url: "https://kagrc.go.ke/" };
const KVB = { name: "Kenya Veterinary Board (registro de veterinarios y paraprofesionales veterinarios)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (registro de médicos veterinarios)", url: "https://vcn.gov.ng" };
const ILRI_AI = { name: "ILRI: Capacitación de proveedores de servicios de inseminación artificial comunitaria", url: "https://www.ilri.org/knowledge/publications/training-artificial-insemination-service-providers-community-based" };
const FAO_DADIS = { name: "FAO DAD-IS: Sistema de Información sobre la Diversidad de los Animales Domésticos (razas por país)", url: "https://www.fao.org/dad-is/en/" };

module.exports = {
  id: "agri-animal-breeding-biosecurity-es",
  lang: "es",
  translationOf: "agri-animal-breeding-biosecurity",
  category: "Agriculture (Africa)",
  name: "Cría, reproducción y bioseguridad en la granja",
  skills: "Elegir razas para tu clima y tu mercado, Detectar el celo y llevar registros reproductivos, Organizar la inseminación artificial con un técnico capacitado, Evitar la consanguinidad, Escribir un plan de bioseguridad para la granja, Reconocer y reportar la peste porcina africana y la influenza aviar",
  outcome: "criar tus vacas, cabras, cerdos o aves con un plan y mantener las enfermedades fuera: elegir una raza que se adapte a tu clima y a tu mercado, detectar los celos y anotar cada servicio, usar un técnico de inseminación artificial capacitado, evitar la consanguinidad, aplicar un plan de bioseguridad por escrito y reportar de inmediato al veterinario cualquier sospecha de peste porcina africana o de influenza aviar.",
  about: [
    "Este curso es para pequeños productores y ganaderos en crecimiento, trabajadores de granja, jóvenes agroemprendedores y extensionistas de Kenia, Nigeria, Ghana, Senegal, Camerún y de toda África que tienen vacas lecheras, cabras, cerdos o aves y quieren hacer crecer el hato o la parvada sin meter enfermedades.",
    "El capítulo 1 trata de reproducir bien: elegir la raza correcta, detectar los celos y llevar registros reproductivos, y usar la inseminación artificial (IA) con un técnico capacitado evitando la consanguinidad. El capítulo 2 trata de mantener las enfermedades fuera: un plan de bioseguridad con zonas, pediluvios y reglas para visitantes, la cuarentena de los animales nuevos y la eliminación segura de los animales muertos, y las dos enfermedades que todo productor de cerdos y de aves debe conocer: la peste porcina africana y la influenza aviar.",
    "Este curso continúa \"Salud y manejo del ganado\", que cubre la revisión diaria de salud, la vacunación con un veterinario y la enfermedad de Newcastle. No da dosis de medicamentos, vacunas ni hormonas: sigue siempre a tu veterinario y la etiqueta del producto. Cada lección dura unos cinco minutos y termina con una tarea en tu propia granja. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de bioseguridad de una página para tu propia unidad (tu granja, o un ejemplo como 20 cerdos cerca de Abeokuta, 500 gallinas ponedoras cerca de Kumasi, 4 vacas lecheras en Nyeri o 300 pollos de engorde cerca de Thies): un dibujo con las zonas limpia, de amortiguación y sucia y la única entrada; tus reglas de pediluvio y lavado de manos; tus reglas para visitantes y vehículos, con un registro de visitas; cómo pondrás en cuarentena a los animales nuevos; cómo eliminarás los animales muertos; las señales de alerta de la peste porcina africana o de la influenza aviar y lo que harás en la primera hora, con el nombre y el número de teléfono de tu veterinario o de tu oficina veterinaria.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños productores y ganaderos comerciales en crecimiento, trabajadores de granja, jóvenes agroemprendedores y extensionistas de África del Este, del Oeste y Central (incluidos los países francófonos) que tienen vacas lecheras, cabras, cerdos o aves.",
    startingPoint: "Saben alimentar y cuidar a los animales y reconocer a un animal que parece enfermo. Muchos reproducen con cualquier macho que esté cerca, llevan pocos registros reproductivos por escrito y dejan entrar a la granja a visitantes, comerciantes y animales nuevos sin ninguna regla.",
    gap: "Los productores que quieren más leche, carne o huevos a menudo compran razas que no se adaptan a su clima ni a su alimento, se les pasan los celos, desperdician servicios de IA y dejan que la consanguinidad avance sin darse cuenta. Un solo visitante, camión o cerdo nuevo puede traer la peste porcina africana, que no tiene vacuna ni tratamiento eficaz, o la influenza aviar, que puede matar a la mayor parte de una parvada. Una rutina reproductiva y un plan de bioseguridad por escrito protegen la granja y a los vecinos.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; muchos participantes leen el inglés como segunda lengua y el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: un teléfono básico o un teléfono inteligente, papel y lápiz; pocos datos móviles",
      "Dinero: primero las medidas de bajo costo; las cifras en KES, NGN, GHS y XOF son solo ejemplos",
      "Reglas de sanidad animal: ninguna dosis de medicamentos, vacunas ni hormonas, y ningún periodo de retiro; seguir al veterinario y la etiqueta",
      "La PPA y la influenza aviar son de notificación obligatoria: los casos sospechosos se reportan de inmediato al veterinario o a la autoridad veterinaria, y las reglas nacionales cambian según el país"
    ],
    prerequisites: "Cuidado básico de animales. Se recomienda tomar primero \"Salud y manejo del ganado\" (Agriculture (Africa))."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Según tu clima, tu alimento disponible y tu mercado", action: "elegir una raza o un cruce para tu granja y dar las razones de la elección", standard: "nombrando al menos tres razones que se ajusten a tu granja" },
    { id: "O2", condition: "Usando un cuaderno o un teléfono durante las revisiones de dos veces al día", action: "anotar las señales de celo, los servicios y las fechas probables de parto de cada hembra reproductora", standard: "sin fechas faltantes para los animales que reproduces" },
    { id: "O3", condition: "Cuando una vaca o una cabra muestra celo de monta", action: "organizar la inseminación artificial con un técnico de IA capacitado y registrado en el momento correcto", standard: "llamando al técnico el mismo día y anotando los datos del semen o del semental" },
    { id: "O4", condition: "Con tus registros reproductivos", action: "planear apareamientos que eviten cruzar parientes cercanos", standard: "sin apareamientos de padre con cría ni de hermano con hermana en el plan" },
    { id: "O5", condition: "Para tu propia granja o unidad", action: "escribir un plan de bioseguridad con zonas, un pediluvio, reglas para visitantes, cuarentena y eliminación de animales muertos", standard: "cubriendo las cinco partes en una página" },
    { id: "O6", condition: "Cuando los cerdos o las aves muestran señales de alerta o mueren de repente", action: "identificar las señales de la peste porcina africana o de la influenza aviar y reportarlas al veterinario o a la autoridad veterinaria", standard: "de inmediato, sin mover, vender ni comer los animales" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Reproducir para tener un mejor hato",
      lessons: [
        {
          title: "Elegir razas para tu clima y tu mercado",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir una raza o un cruce que se adapte a tu clima, a tu alimento y a tus compradores.",
          text: [
            "La mejor raza es la que da dinero en tu granja, no la que tiene los números más grandes en un folleto. Una vaca lechera exótica de alto rendimiento necesita mucho alimento bueno, agua limpia, sombra y un cuidado de salud cercano. En una zona caliente y seca con pastos pobres, puede dar menos leche que un cruce local resistente y enfermarse más seguido.",
            "Las razas locales, como el cebú de África del Este, la cabra enana de África Occidental o el ganado N'Dama de África Occidental, aguantan el calor, las garrapatas y el alimento pobre, pero crecen y producen menos. Las razas exóticas, como las vacas lecheras Holstein (Friesian) o Ayrshire, los cerdos Large White o las gallinas híbridas comerciales, producen más cuando puedes alimentarlas y protegerlas bien. Los cruces suelen quedar en el medio.",
            "Empieza por tu mercado: quién compra, por qué paga (leche, peso vivo, carne magra, huevos, una cabra para una fiesta) y cuándo. Luego revisa lo que puedes dar todo el año: alimento, agua, alojamiento, mano de obra y un veterinario. Pregunta a tu extensionista, a una asociación de criadores o a tu instituto nacional de investigación qué razas funcionan bien en tu zona. La base de datos DAD-IS de la FAO (la Organización de las Naciones Unidas para la Alimentación y la Agricultura) lista las razas que se crían en cada país."
          ],
          steps: ["Escribe lo que tus compradores quieren y por qué pagan.", "Escribe lo que puedes dar todo el año: alimento, agua, alojamiento, mano de obra, veterinario.", "Haz una lista de dos o tres razas o cruces que tienen los productores cerca de ti.", "Pregunta por cada una a tu extensionista o a una asociación de criadores.", "Elige la raza que encaja en las dos listas y escribe tres razones."],
          words: [["Raza", "un grupo de animales de una misma especie con el mismo aspecto y las mismas características, que pasan de padres a crías."], ["Raza exótica", "una raza creada en otra región, a menudo de mayor rendimiento pero menos adaptada al calor, las enfermedades y el alimento locales."], ["Cruce", "un animal cuyos padres son de dos razas diferentes."]],
          slides: [
            { title: "La raza correcta da dinero en TU granja", bullets: ["Los grandes números del folleto necesitan grandes insumos", "El mal alimento y el calor bajan rápido la producción", "Elige para tu granja, no por una foto"] },
            { title: "Local, exótica o cruce", bullets: ["Local: resistente, aguanta calor, garrapatas y mal alimento", "Exótica: alto rendimiento, necesita buen alimento y cuidado", "Cruce: a menudo en el medio"] },
            { title: "Empieza por el mercado", bullets: ["¿Por qué pagan los compradores: leche, carne, huevos?", "¿Cuándo compran?", "¿Qué puedes dar todo el año?"] },
            { title: "Pregunta antes de comprar", bullets: ["Extensionista o asociación de criadores", "Productores cerca de ti que tienen la raza", "FAO DAD-IS lista las razas por país"] }
          ],
          sources: [FAO_DADIS],
          tryIt: "Escribe dos listas cortas para tu granja: lo que quieren tus compradores y lo que puedes dar todo el año. Nombra dos razas o cruces y elige uno, con tres razones.",
          youCanNow: "elegir una raza o un cruce que se adapte a tu clima, a tu alimento y a tu mercado, y explicar por qué.",
          quickCheck: [
            { objective: "O1", q: "Un productor de una zona caliente y seca con pastos pobres quiere vacas lecheras. ¿Qué opción le conviene más?", options: ["La vaca exótica de más alto rendimiento que encuentre", "Cualquier vaca, la más barata del mercado", "Un cruce local resistente que aguante el calor y el alimento", "Una raza elegida por la foto de un folleto"], answer: 2, why: "Una raza que aguanta el calor y el alimento que él de verdad tiene producirá más con el tiempo que una que necesita insumos que no puede dar." },
            { objective: "O1", q: "¿Qué debes anotar PRIMERO al elegir una raza?", options: ["El nombre de la raza que le gusta a tu vecino", "Lo que tus compradores quieren y por qué pagan", "El color que prefieres", "La raza con los animales más grandes"], answer: 1, why: "El mercado decide qué da dinero; luego revisas lo que tu granja puede dar." }
          ]
        },
        {
          title: "Detección del celo y registros reproductivos",
          objectives: ["O2"],
          minutes: 5,
          goal: "Reconocer a una hembra en celo y anotar los celos, los servicios y las fechas de parto.",
          text: [
            "Una vaca, una cabra o una cerda solo puede quedar preñada durante un tiempo corto, cuando está \"en celo\". Si se te pasa, esperas unas tres semanas al siguiente, mientras la sigues alimentando. Las vacas, las cabras y las cerdas suelen entrar en celo más o menos cada 21 días, pero esto varía, así que observa con atención.",
            "La señal más segura en una vaca es el celo de monta: se queda quieta cuando otro animal la monta. Otras señales son montar a otros animales, inquietud, mugidos, un flujo claro y pegajoso de la vulva y menos leche. Las cabras mueven la cola, balan y buscan al macho cabrío. Una cerda en celo se queda quieta cuando le presionas el lomo. Observa al menos dos veces al día, temprano en la mañana y en la tarde, durante 20 a 30 minutos, cuando los animales están tranquilos.",
            "Los registros convierten las suposiciones en un plan. Para cada hembra anota: su identificación, la fecha y la hora de cada celo, la fecha en que recibió servicio, con qué toro, macho cabrío o verraco o con qué pajilla de IA, y la fecha probable de parto. Así sabes cuándo revisar si vuelve a entrar en celo unas 3 semanas después, cuándo secar a una vaca y qué hembras siguen sin quedar preñadas. La gestación dura unos 9 meses en la vaca, unos 5 meses en la cabra y unos 3 meses, 3 semanas y 3 días en la cerda; tu veterinario o tu extensionista puede darte las cifras exactas para tu raza."
          ],
          steps: ["Dale a cada hembra reproductora una identificación: arete, nombre o número.", "Observa el celo dos veces al día, en la mañana y en la tarde.", "Anota la fecha, la hora y las señales que viste.", "Anota la fecha del servicio y el macho o la pajilla de IA usada.", "Agrega la fecha para revisar si vuelve a entrar en celo, unas 3 semanas después.", "Anota la fecha probable de parto y confirma la preñez con tu veterinario o técnico."],
          words: [["Celo (estro)", "el tiempo corto en que una hembra acepta al macho y puede quedar preñada."], ["Celo de monta", "cuando una vaca se queda quieta para ser montada; la señal más segura de que está en celo."], ["Servicio", "el apareamiento, con un macho o con inseminación artificial."], ["Gestación", "el tiempo que va desde la concepción hasta el parto."]],
          slides: [
            { title: "El celo es corto; perderlo cuesta 3 semanas", bullets: ["Vacas, cabras y cerdas: más o menos cada 21 días", "Celo perdido = semanas de alimento sin preñez"] },
            { title: "Señales de celo", bullets: ["Vaca: se queda quieta cuando la montan (señal más segura)", "Monta a otras, inquieta, flujo claro", "Cabra: mueve la cola; cerda: se queda quieta al presionarla"] },
            { title: "Observa dos veces al día", bullets: ["Temprano en la mañana y en la tarde", "De 20 a 30 minutos, cuando los animales están tranquilos"] },
            { title: "El registro reproductivo", bullets: ["Identificación, fecha y hora del celo, fecha del servicio", "Macho o pajilla de IA usada", "Fecha para revisar el retorno al celo y fecha de parto"] }
          ],
          sources: [UGA_HEAT],
          tryIt: "Haz una hoja de registro reproductivo en papel o en una nota del teléfono con estas columnas: identificación del animal, fecha y hora del celo, señales vistas, fecha del servicio, macho o pajilla de IA, revisión del retorno al celo, fecha de parto. Llénala para una de tus hembras o para una vaca de ejemplo.",
          youCanNow: "reconocer las señales de celo y llevar un registro reproductivo con los celos, los servicios y las fechas de parto.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es la señal más segura de que una vaca está en celo?", options: ["Come más que de costumbre", "Se echa mucho", "Se queda quieta cuando otro animal la monta", "Tiene el pelo brillante"], answer: 2, why: "Quedarse quieta para ser montada es la señal más segura del celo; las otras señales solo lo sugieren." },
            { objective: "O2", q: "Tu cabra recibió servicio el 1 de marzo. ¿Cuándo observas si vuelve a entrar en celo?", options: ["Unas 3 semanas después, alrededor del 22 de marzo", "Al día siguiente", "Después de 6 meses", "Nunca; seguro que está preñada"], answer: 0, why: "Los celos llegan más o menos cada 21 días, así que una hembra que no quedó preñada vuelve a mostrar celo unas 3 semanas después." }
          ]
        },
        {
          title: "La inseminación artificial y cómo evitar la consanguinidad",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Organizar la IA con un técnico capacitado en el momento correcto y planear apareamientos que eviten a los parientes cercanos.",
          text: [
            "La inseminación artificial (IA) coloca semen de un macho probado en el aparato reproductor de la hembra. Le da a un pequeño productor los genes de un toro o de un macho cabrío de primera sin tener que mantenerlo, y baja el riesgo de enfermedades que se transmiten al aparearse. La IA la hace un técnico de IA capacitado o un veterinario, no el productor. Una técnica equivocada puede lastimar al animal, y el semen debe mantenerse congelado en nitrógeno líquido hasta el momento de usarlo; si no, muere.",
            "Busca un técnico que esté capacitado y registrado: pregunta en la oficina ganadera de tu condado o distrito, en tu cooperativa lechera o a un veterinario registrado. En Kenia, el KAGRC (Centro de Recursos Genéticos Animales de Kenia) entrega semen por medio de agentes autorizados, y los técnicos de IA deben estar registrados en el Kenya Veterinary Board (Consejo Veterinario de Kenia); en Nigeria, revisa que el veterinario esté en el registro del Veterinary Council of Nigeria. Una regla común para las vacas es la regla AM-PM: una vaca vista por primera vez en celo de monta en la mañana recibe servicio esa tarde o esa noche; una vista por primera vez en la tarde recibe servicio a la mañana siguiente. Llama al técnico en cuanto veas el celo y anota el nombre o el código del toro de la pajilla.",
            "La consanguinidad es aparear parientes cercanos: un padre con su hija, una madre con su hijo o un hermano con su hermana. Las crías suelen ser más débiles, crecen despacio, se enferman más y pueden nacer con defectos. Pasa sin que se note cuando el mismo toro, macho cabrío, verraco o gallo se queda años en una granja. Para prevenirla: lleva registros de la madre y el padre de cada animal, cambia o vende tu macho reproductor antes de que sus hijas tengan edad para reproducirse, presta o intercambia machos con productores cuyos animales no son parientes de los tuyos, y usa pajillas de IA de un toro diferente cada vez que vayas a cubrir a una hija."
          ],
          steps: ["Ves celo de monta: anota la hora.", "Llama de inmediato a tu técnico de IA registrado.", "Usa la regla AM-PM para las vacas, o el consejo del técnico.", "Revisa que la pajilla venga de un toro conocido y anota su nombre o código.", "Antes de cada apareamiento, revisa los registros: ¿este macho es su padre, su hijo o su hermano?", "Si es así, usa otro macho o un toro de IA diferente."],
          words: [["Inseminación artificial (IA)", "poner a mano semen de un macho elegido en una hembra; lo hace un técnico capacitado."], ["Pajilla", "un tubo delgado con una dosis de semen congelado, marcado con el nombre o el código del toro."], ["Nitrógeno líquido", "un líquido muy frío que mantiene el semen congelado hasta su uso."], ["Consanguinidad", "aparear parientes cercanos, lo que da crías más débiles y con más defectos."]],
          slides: [
            { title: "Por qué la IA", bullets: ["Genes de primera sin mantener un toro", "Menos riesgo de enfermedades que se transmiten al aparearse", "La hace un técnico capacitado, no el productor"] },
            { title: "Busca un técnico registrado", bullets: ["Oficina ganadera, cooperativa lechera o veterinario", "Kenia: agentes del KAGRC, Kenya Veterinary Board", "Nigeria: registro del Veterinary Council of Nigeria"] },
            { title: "El momento: la regla AM-PM para las vacas", bullets: ["Celo visto en la mañana: servicio esa tarde", "Celo visto en la tarde: servicio a la mañana siguiente", "Anota el nombre o el código del toro de la pajilla"] },
            { title: "Evita la consanguinidad", bullets: ["Nada de padre-hija, madre-hijo ni hermano-hermana", "Cambia tu macho antes de que sus hijas se reproduzcan", "Usa un toro de IA diferente para cada hija"] }
          ],
          sources: [UGA_HEAT, KAGRC, KVB, VCN, ILRI_AI],
          tryIt: "Escribe el nombre y el número de teléfono de un técnico de IA capacitado y registrado cerca de ti (pregunta en tu oficina ganadera o tu cooperativa). Luego mira tus animales: haz una lista de cualquier hembra que sea pariente cercana de tu macho reproductor actual y escribe cómo la vas a cubrir.",
          youCanNow: "organizar la IA con un técnico capacitado en el momento correcto y planear apareamientos que eviten a los parientes cercanos.",
          quickCheck: [
            { objective: "O3", q: "Una vaca muestra celo de monta a las 7 de la mañana. Según la regla AM-PM, ¿cuándo debe recibir servicio?", options: ["En dos días", "Esa tarde o esa noche", "La próxima semana", "Solo cuando deje de mostrar celo"], answer: 1, why: "Una vaca vista por primera vez en celo en la mañana recibe servicio esa tarde o esa noche." },
            { objective: "O4", q: "Tu toro lleva cuatro años en la granja y sus hijas ya están listas para reproducirse. ¿Qué haces?", options: ["Sigues usándolo con todas", "Lo usas solo con las hijas más grandes", "Dejas de reproducir durante un año", "Usas otro toro o IA de un toro que no sea pariente para sus hijas"], answer: 3, why: "Aparear a un toro con sus hijas es consanguinidad; un macho que no sea pariente o un toro de IA diferente la evita." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Reproducir para tener un mejor hato",
        questions: [
          { objective: "O1", q: "¿Por qué una raza exótica de alto rendimiento puede ganar menos que un cruce local en algunas granjas?", options: ["Las razas exóticas nunca dan mucha leche", "Los animales locales siempre se venden más caros", "A las razas exóticas no se les puede dar pasto", "Necesita alimento, agua y cuidados que la granja no puede dar, así que produce menos y se enferma más"], answer: 3, why: "El alto rendimiento depende de buen alimento y buen cuidado; sin ellos, un cruce resistente a menudo rinde más." },
          { objective: "O2", q: "¿Con qué frecuencia debes observar las señales de celo?", options: ["Al menos dos veces al día, en la mañana y en la tarde", "Una vez por semana", "Solo cuando el animal está enfermo", "Una vez al mes"], answer: 0, why: "El celo es corto, así que observar dos veces al día, cuando los animales están tranquilos, detecta la mayoría de los celos." },
          { objective: "O2", q: "¿Cuál de estos datos va en un registro reproductivo?", options: ["El clima de cada día", "La fecha del servicio y el macho o la pajilla de IA usada", "El color del corral", "El precio del combustible"], answer: 1, why: "La fecha del servicio y el semental te permiten revisar el retorno al celo, calcular la fecha de parto y evitar la consanguinidad." },
          { objective: "O3", q: "¿Quién debe hacer la inseminación artificial?", options: ["Cualquier trabajador de la granja después de ver un video", "La persona que vende la vaca", "Un técnico de IA capacitado y registrado, o un veterinario", "Un vecino con un brazo fuerte"], answer: 2, why: "La IA necesita capacitación: una técnica equivocada puede lastimar al animal y el semen se debe manejar correctamente." },
          { objective: "O4", q: "¿Qué apareamiento es consanguinidad?", options: ["Una vaca con un toro de IA que no es pariente", "Una cabra con un macho cabrío prestado de otra aldea", "Una cerda joven con un verraco comprado en una granja lejana", "Un carnero con su propia hija"], answer: 3, why: "Un padre con su hija es un apareamiento entre parientes cercanos, es decir, consanguinidad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mantener las enfermedades fuera",
      lessons: [
        {
          title: "Tu plan de bioseguridad: zonas, pediluvios y visitantes",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dibujar las zonas de bioseguridad de tu granja y escribir reglas para los pediluvios y los visitantes.",
          text: [
            "La bioseguridad es todo lo que haces para que los gérmenes no entren a tu granja, no se extiendan dentro de ella y no salgan de ella. La mayoría de las enfermedades llegan con animales, personas, zapatos, ropa, vehículos, jaulas, sacos de alimento o equipos. Muchas de las mejores medidas cuestan poco: una cerca, un portón, un pediluvio, jabón y una regla que se cumple todos los días.",
            "Divide la granja en zonas. La zona limpia es donde viven los animales: solo entran las personas que los cuidan. La zona de amortiguación la rodea: la bodega, el lugar para cambiarse, el pediluvio. La zona sucia está afuera: el camino, el estacionamiento, las jaulas del mercado. Ten UNA sola entrada al área de los animales, con un portón que puedas cerrar. Los camiones de los comerciantes se quedan fuera de la cerca; se carga y se descarga en el límite.",
            "En la entrada, pon un pediluvio con un desinfectante para granjas preparado como dice la etiqueta, y cámbialo cuando esté sucio o después de la lluvia; la tierra impide que el desinfectante funcione, así que primero cepilla el lodo de las botas. Mejor aún, deja en la entrada botas y ropa que solo se usen en la granja. Ten agua y jabón para las manos. Recibe solo a los visitantes que de verdad tienen que venir, pregúntales dónde han estado con animales y anota cada visita en un registro de visitas: fecha, nombre, teléfono, motivo y última granja visitada."
          ],
          steps: ["Dibuja tu granja: casas, corrales, bodega, portón y camino.", "Marca las zonas limpia, de amortiguación y sucia.", "Elige una sola entrada al área de los animales, con un portón.", "Pon un pediluvio y un lugar para lavarse las manos en esa entrada.", "Deja ahí botas y ropa solo para la granja, si puedes.", "Empieza un registro de visitas y deja los vehículos de los comerciantes fuera de la cerca."],
          words: [["Bioseguridad", "medidas que impiden que los gérmenes entren a una granja, se extiendan en ella y salgan de ella."], ["Pediluvio", "una bandeja baja con desinfectante por la que pasan las personas para limpiar sus botas."], ["Desinfectante", "un producto químico que mata los gérmenes; usa un producto para granjas preparado como dice la etiqueta."], ["Registro de visitas", "un cuaderno donde anotas el nombre, el contacto, el motivo y la última granja visitada de cada visitante."]],
          slides: [
            { title: "Los gérmenes llegan con...", bullets: ["Animales nuevos, personas, zapatos y ropa", "Vehículos, jaulas, sacos de alimento y herramientas", "La mayoría de las buenas medidas cuestan poco"] },
            { title: "Tres zonas", bullets: ["Limpia: donde viven los animales", "Amortiguación: bodega, lugar para cambiarse, pediluvio", "Sucia: camino, estacionamiento, jaulas del mercado"] },
            { title: "Una sola entrada, con pediluvio", bullets: ["Un portón para entrar al área de los animales", "Cepilla el lodo y luego pisa el pediluvio", "Desinfectante preparado como dice la etiqueta"] },
            { title: "Visitantes", bullets: ["Solo quienes tienen que venir", "Botas de la granja y lavado de manos", "Anota fecha, nombre, teléfono, motivo y última granja"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Dibuja tu granja en papel. Marca las zonas limpia, de amortiguación y sucia, la única entrada, el pediluvio y dónde se detendrán los camiones. Escribe tres reglas para visitantes debajo del dibujo.",
          youCanNow: "dibujar las zonas de bioseguridad de tu granja y poner reglas para los pediluvios, el lavado de manos y los visitantes.",
          quickCheck: [
            { objective: "O5", q: "Llega un comerciante de cerdos a comprar lechones destetados. ¿Dónde debe detenerse su camión?", options: ["Fuera de la cerca, cargando en el límite", "Junto a los corrales de los cerdos", "Dentro de la bodega de alimento", "Donde él quiera"], answer: 0, why: "Los vehículos que visitan muchas granjas llevan gérmenes, así que se quedan en la zona sucia, fuera de la cerca." },
            { objective: "O5", q: "Tu pediluvio está lleno de lodo después de la lluvia. ¿Qué haces?", options: ["Lo dejas así; todavía funciona", "Solo le agregas más agua", "Lo vacías, lo limpias y lo vuelves a llenar con desinfectante preparado como dice la etiqueta", "Lo quitas hasta la temporada seca"], answer: 2, why: "La tierra y el agua de más impiden que el desinfectante funcione, así que un pediluvio sucio se debe limpiar y volver a llenar." }
          ]
        },
        {
          title: "Cuarentena para animales nuevos y eliminación segura de los muertos",
          objectives: ["O5"],
          minutes: 5,
          goal: "Preparar la cuarentena para los animales nuevos y una forma segura de eliminar los animales muertos.",
          text: [
            "Los animales nuevos son la forma más común en que una enfermedad entra a una granja. Un animal puede verse sano y aun así llevar gérmenes o parásitos. Compra en granjas conocidas y sanas, pide el historial de vacunas y tratamientos del animal y evita los animales de mercados o zonas con reportes de enfermedades.",
            "La cuarentena es mantener a los animales nuevos o que regresan en un corral aparte, lejos de tu hato o parvada, durante el tiempo que aconseje tu veterinario, a menudo unas semanas. Atiéndelos de último cada día, con botas y herramientas aparte, y obsérvalos a diario. Pregunta a tu veterinario si hay que hacer pruebas, tratarlos o vacunarlos antes de que se unan a los demás. Los animales que regresan sin venderse de un mercado o de una feria también van a cuarentena.",
            "Los animales muertos transmiten enfermedades a tus animales, a los perros, a los animales silvestres y a los vecinos. Nunca vendas, comas ni regales un animal que murió por una causa desconocida. Manipula los cadáveres con guantes y elimínalos como digan tu veterinario o las reglas locales: a menudo en una fosa profunda, lejos del agua y de las casas, que los perros y los animales silvestres no puedan desenterrar. Si un animal murió de repente, o hay varios enfermos, no abras el cadáver ni lo saques de la granja: llama primero al veterinario, porque puede ser una enfermedad de notificación obligatoria o ántrax."
          ],
          steps: ["Compra solo en granjas conocidas y sanas; pide el historial de salud.", "Prepara un corral de cuarentena aparte, lejos del hato o la parvada.", "Ten ahí a los animales nuevos y a los que regresan durante el tiempo que aconseje tu veterinario.", "Atiéndelos de último cada día, con botas y herramientas aparte.", "Elige con tu veterinario un lugar para eliminar los cadáveres, lejos del agua y de las casas.", "Muertes repentinas o sin explicación: no abras ni muevas el cadáver; llama al veterinario."],
          words: [["Cuarentena", "mantener aparte por un tiempo a los animales nuevos o que regresan para ver si llevan alguna enfermedad."], ["Cadáver", "el cuerpo de un animal muerto."], ["Enfermedad de notificación obligatoria", "una enfermedad que la ley obliga a reportar a la autoridad veterinaria."]],
          slides: [
            { title: "Los animales nuevos traen enfermedades", bullets: ["Animales que se ven sanos pueden llevar gérmenes", "Compra en granjas conocidas y sanas", "Pide el historial de salud"] },
            { title: "Cuarentena", bullets: ["Corral aparte, lejos del hato o la parvada", "Durante el tiempo que aconseje tu veterinario", "Atiéndelos de último, con botas y herramientas aparte"] },
            { title: "Animales muertos", bullets: ["Nunca vender, comer ni regalar", "Guantes; eliminar como digan el veterinario o las reglas locales", "Fosa profunda, lejos del agua; que los perros no puedan escarbar"] },
            { title: "Muertes repentinas", bullets: ["No abras ni muevas el cadáver", "Llama primero al veterinario"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Marca un corral de cuarentena en el dibujo de tu granja, lo más lejos posible de tus animales, y escribe cuánto tiempo aconseja tu veterinario dejar ahí a los animales nuevos (pregunta si no lo sabes). Luego marca dónde y cómo eliminarás los animales muertos, y escribe la regla para las muertes repentinas.",
          youCanNow: "poner en cuarentena a los animales nuevos y eliminar de forma segura los animales muertos, y saber cuándo llamar al veterinario antes de tocar un cadáver.",
          quickCheck: [
            { objective: "O5", q: "Compras tres cabras en el mercado. ¿Qué haces al llegar a casa?", options: ["Las metes directo con tu rebaño", "Las tienes en un corral aparte durante el tiempo que aconseje tu veterinario", "Las vendes de inmediato", "Las dejas pastar con las cabras del vecino"], answer: 1, why: "La cuarentena muestra si los animales nuevos llevan alguna enfermedad antes de que puedan contagiar a tu rebaño." },
            { objective: "O5", q: "Un cerdo muere de repente durante la noche. ¿Cuál es el primer paso correcto?", options: ["Abrirlo para ver qué pasó", "Vender la carne rápido", "Dejar el cadáver donde está, mantener lejos a las personas y a los animales, y llamar al veterinario", "Tirarlo al río"], answer: 2, why: "Una muerte repentina puede ser una enfermedad de notificación obligatoria; abrir o mover el cadáver puede extenderla." }
          ]
        },
        {
          title: "Peste porcina africana e influenza aviar: reconocer, detener, reportar",
          objectives: ["O6"],
          minutes: 6,
          goal: "Identificar las señales de alerta de la peste porcina africana y de la influenza aviar y reportarlas de inmediato al veterinario.",
          text: [
            "La peste porcina africana (PPA) es una enfermedad de los cerdos causada por un virus, que ha provocado grandes pérdidas en varios países africanos, entre ellos Nigeria. La WOAH (Organización Mundial de Sanidad Animal) señala fiebre alta, debilidad, falta de apetito, manchas rojas o moradas en la piel, vómitos, diarrea, abortos en las cerdas y muerte, con hasta el 100 por ciento de los cerdos muertos en las formas graves. Se transmite por contacto con cerdos enfermos, con la carne de cerdo y los restos de comida (lavazas) de cerdos infectados, con ropa, botas, vehículos y equipos contaminados, y por garrapatas blandas donde existen. El virus sobrevive mucho tiempo en la carne de cerdo y en el ambiente. No infecta a las personas. La FAO dice que no hay vacuna ni tratamiento eficaz, así que la prevención es el único control; la WOAH advierte contra las vacunas de mala calidad, así que nunca uses una \"vacuna contra la PPA\" que la autoridad veterinaria de tu país no haya aprobado.",
            "La influenza aviar (gripe aviar) es una enfermedad de las aves causada por un virus. Las formas graves pueden matar a la mayor parte de una parvada en pocos días. Entre las señales que indica el USDA APHIS (el servicio de sanidad animal de los Estados Unidos) están las muertes repentinas sin aviso, aves débiles que dejan de comer, menos huevos o huevos de cáscara blanda, cresta, barbillas y patas hinchadas y moradas, jadeo, tos y cuellos torcidos. Se transmite por aves silvestres, aves enfermas, mercados de aves vivas, excrementos, jaulas, alimento, agua y equipos. Las personas rara vez se contagian, sobre todo por contacto cercano con aves enfermas, así que nunca toques aves enfermas o muertas con las manos descubiertas.",
            "Las dos enfermedades son de notificación obligatoria: los casos sospechosos se deben reportar de inmediato a tu veterinario o a la autoridad veterinaria. Solo una prueba de laboratorio puede confirmarlas, porque otras enfermedades se parecen. Para prevenirlas: nunca des a los cerdos lavazas sin cocinar, compra solo en granjas sanas, ten a los cerdos en corrales y a las aves en galpones lejos de las aves silvestres, y aplica tu plan de bioseguridad todos los días. Si sospechas de cualquiera de las dos: deja a todos los animales adentro, detén toda venta y todo movimiento de animales, carne, huevos y estiércol, no dejes entrar visitantes y llama al veterinario."
          ],
          steps: ["Conoce las señales de la PPA (cerdos) y de la influenza aviar (aves).", "Revisa tus animales todos los días.", "Si sospechas de un caso: deja a todos los animales en sus corrales o galpones.", "Detén toda venta y todo movimiento: animales, carne, huevos, estiércol, equipos.", "No abras, vendas ni comas animales enfermos o muertos; nada de manos descubiertas.", "Llama de inmediato a tu veterinario o a la oficina veterinaria y sigue sus instrucciones."],
          words: [["Peste porcina africana (PPA)", "una enfermedad mortal de los cerdos causada por un virus, sin vacuna ni tratamiento eficaz; no infecta a las personas."], ["Influenza aviar", "gripe aviar: una enfermedad de las aves causada por un virus; las formas graves matan a la mayor parte de una parvada."], ["Lavazas", "restos de comida que se dan a los cerdos; las lavazas sin cocinar con carne de cerdo pueden transmitir la PPA."], ["Autoridad veterinaria", "la oficina del gobierno a cargo de las enfermedades de los animales, como los servicios veterinarios nacionales o del condado."]],
          slides: [
            { title: "Peste porcina africana (cerdos)", bullets: ["Fiebre alta, débiles, no comen, piel roja o morada", "Vómitos, diarrea, abortos, muertes repentinas", "No hay vacuna ni tratamiento eficaz (FAO)"] },
            { title: "Cómo se transmite la PPA", bullets: ["Cerdos enfermos, carne de cerdo y lavazas sin cocinar", "Botas, ropa, vehículos y herramientas", "No infecta a las personas"] },
            { title: "Influenza aviar (aves)", bullets: ["Muertes repentinas; aves débiles; menos huevos", "Cresta y barbillas hinchadas y moradas; jadeo", "La transmiten aves silvestres, mercados, jaulas, excrementos"] },
            { title: "Notificación obligatoria: reporta de inmediato", bullets: ["Todos los animales adentro; detén toda venta y todo movimiento", "Nada de manos descubiertas; no abras, vendas ni comas", "Llama ya al veterinario o a la oficina veterinaria"] }
          ],
          sources: [WOAH_ASF, FAO_ASF, WOAH_ASF_VACCINE, WOAH_AI, APHIS_AI],
          tryIt: "Tarea final: escribe tu plan de bioseguridad de una página. Usa el dibujo de tu granja con las zonas, el pediluvio y las reglas para visitantes, la cuarentena y la eliminación de animales muertos; luego agrega las señales de alerta de la PPA o de la influenza aviar, lo que harás en la primera hora y el nombre y el número de teléfono de tu veterinario.",
          youCanNow: "reconocer las señales de alerta de la peste porcina africana y de la influenza aviar, detener todo movimiento y reportar de inmediato al veterinario los casos sospechosos.",
          quickCheck: [
            { objective: "O6", q: "Varios de tus cerdos tienen fiebre alta y manchas moradas en la piel, y dos murieron durante la noche. ¿Qué haces primero?", options: ["Vender rápido a los demás antes de que mueran", "Comprar una vacuna contra la PPA en el mercado", "Tratarlos con medicina que te sobró", "Dejar a todos los cerdos adentro, detener todo movimiento y toda venta, y llamar de inmediato al veterinario"], answer: 3, why: "Son señales de alerta de la PPA, una enfermedad de notificación obligatoria: detén el movimiento y repórtala de inmediato." },
            { objective: "O6", q: "¿Qué práctica ayuda a mantener fuera la peste porcina africana?", options: ["No dar nunca a los cerdos lavazas sin cocinar", "Dar a los cerdos restos de comida de hoteles", "Dejar que los cerdos anden sueltos por la aldea", "Comprar cerdos a cualquier comerciante que pase"], answer: 0, why: "Los restos de comida sin cocinar pueden tener carne de cerdo con el virus de la PPA, que sobrevive mucho tiempo en la carne." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Mantener las enfermedades fuera",
        questions: [
          { objective: "O5", q: "En un plan de bioseguridad, ¿cuál es la zona limpia?", options: ["El camino fuera de la granja", "El estacionamiento de los camiones", "Donde viven los animales", "El mercado"], answer: 2, why: "La zona limpia es el área de los animales, donde solo entran las personas que los cuidan." },
          { objective: "O5", q: "¿Para qué sirve sobre todo un registro de visitas?", options: ["Para cobrar a los visitantes", "Para saber quién vino, cuándo y de dónde si aparece una enfermedad", "Para contar cuántos amigos tienes", "Para hacer publicidad de la granja"], answer: 1, why: "Si aparece una enfermedad, el registro ayuda al veterinario a rastrear de dónde pudo venir." },
          { objective: "O5", q: "¿Cómo debes eliminar una cabra que murió por una causa desconocida?", options: ["Vender la carne barata", "Dársela a los perros", "Dejarla en el monte", "Usar guantes y eliminarla como digan el veterinario o las reglas locales, lejos del agua"], answer: 3, why: "Los cadáveres transmiten enfermedades; eliminarlos de forma segura, como aconseja el veterinario, protege a los animales, a las personas y el agua." },
          { objective: "O6", q: "¿Hay alguna vacuna o tratamiento eficaz que puedas usar contra la peste porcina africana?", options: ["No; la FAO dice que la prevención con bioseguridad es el único control", "Sí, cualquier antibiótico la cura", "Sí, se vende en todos los mercados", "Sí, una mezcla de hierbas la cura"], answer: 0, why: "La FAO dice que no hay vacuna ni tratamiento eficaz contra la PPA, así que el control es la prevención." },
          { objective: "O6", q: "Tus gallinas ponedoras dejan de poner de repente, algunas tienen la cresta hinchada y morada, y muchas mueren en un día. ¿Qué haces?", options: ["Vender hoy los huevos y las aves en el mercado", "Enterrar las aves muertas y no decir nada", "Dejar las aves adentro, detener todo movimiento, no tocarlas con las manos descubiertas y reportar de inmediato al veterinario", "Soltar las aves afuera"], answer: 2, why: "Estas señales hacen pensar en influenza aviar, que es de notificación obligatoria y se debe reportar de inmediato." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cría, reproducción y bioseguridad en la granja",
    questions: [
      { objective: "O1", q: "¿Qué debe guiar más tu elección de raza?", options: ["Lo que quieren tus compradores y lo que tu granja puede dar todo el año", "La raza del último anuncio", "La raza con los animales más grandes", "El animal más barato del mercado"], answer: 0, why: "Una raza da dinero solo cuando responde al mercado y tu granja puede alimentarla y cuidarla." },
      { objective: "O1", q: "¿Cuál es una fortaleza de muchas razas locales, como la cabra enana de África Occidental o el ganado N'Dama?", options: ["La mayor producción de leche del mundo", "Aguantan el calor, las garrapatas y el alimento pobre", "Nunca se enferman", "No necesitan agua"], answer: 1, why: "Las razas locales son resistentes; a cambio, crecen y producen menos." },
      { objective: "O1", q: "¿A quién puedes preguntar qué razas funcionan bien en tu zona?", options: ["A una publicación cualquiera en redes sociales", "A un comerciante que vende una sola raza", "A tu extensionista, a una asociación de criadores o a un instituto de investigación", "A nadie; compra y ya verás"], answer: 2, why: "Los expertos y los productores locales saben qué razas rinden en tus condiciones." },
      { objective: "O2", q: "¿Más o menos cada cuánto entran en celo las vacas, las cabras y las cerdas si no están preñadas?", options: ["Cada 3 días", "Cada 6 meses", "Una vez al año", "Más o menos cada 21 días"], answer: 3, why: "El ciclo normal es de unos 21 días, aunque varía." },
      { objective: "O2", q: "¿Cuál es el mejor momento para observar el celo?", options: ["Solo al mediodía", "Temprano en la mañana y en la tarde, cuando los animales están tranquilos", "Solo a la hora de comer en los días de mercado", "Una vez por semana"], answer: 1, why: "Las señales de celo se ven mejor cuando los animales están tranquilos, al menos dos veces al día." },
      { objective: "O2", q: "¿Por qué anotar la fecha del servicio?", options: ["Para revisar el retorno al celo y saber la fecha de parto", "Porque la ley exige una foto", "Para fijar el precio de la leche", "Para elegir la marca del alimento"], answer: 0, why: "La fecha del servicio te dice cuándo revisar el retorno al celo y cuándo se espera el parto." },
      { objective: "O2", q: "¿Más o menos cuánto dura la preñez de una cerda?", options: ["Unos 9 meses", "Unas 3 semanas", "Unos 3 meses, 3 semanas y 3 días", "Más o menos 1 año"], answer: 2, why: "La gestación de la cerda dura unos 3 meses, 3 semanas y 3 días; confirma para tu raza con tu veterinario." },
      { objective: "O3", q: "¿Cuál es una gran ventaja de la inseminación artificial para un pequeño productor?", options: ["Reemplaza toda la alimentación", "Ya no hace falta llevar registros", "Elimina todas las enfermedades", "Acceso a genes de primera sin mantener un toro"], answer: 3, why: "La IA lleva genes probados a granjas pequeñas que no pueden mantener un macho de primera." },
      { objective: "O3", q: "Una vaca muestra celo de monta por primera vez en la tarde. ¿Cuándo debe darle servicio el técnico?", options: ["A la mañana siguiente", "De inmediato, en la noche", "En una semana", "En el próximo celo"], answer: 0, why: "Según la regla AM-PM, el celo visto por primera vez en la tarde recibe servicio a la mañana siguiente." },
      { objective: "O3", q: "¿Cómo encuentras un técnico de IA de confianza?", options: ["Cualquiera que tenga un termo de semen", "Un técnico capacitado y registrado, por medio de la oficina ganadera, la cooperativa o el veterinario", "La persona más barata del mercado", "Un video tutorial"], answer: 1, why: "La capacitación y el registro protegen a tus animales y tu dinero." },
      { objective: "O3", q: "¿Por qué el semen debe quedarse en nitrógeno líquido hasta usarlo?", options: ["Para que pese más", "Para cambiarle el color", "Porque muere si se calienta", "Para agregarle vitaminas"], answer: 2, why: "El semen congelado muere si no se mantiene muy frío hasta el momento de la inseminación." },
      { objective: "O4", q: "¿Qué pasa con las crías de padres que son parientes cercanos?", options: ["Siempre son más fuertes", "Crecen más rápido", "Necesitan menos alimento", "A menudo son más débiles, se enferman más y pueden tener defectos"], answer: 3, why: "La consanguinidad aumenta las crías débiles, enfermas y con defectos." },
      { objective: "O4", q: "¿Cuál es una forma sencilla de evitar la consanguinidad con tu propio macho reproductor?", options: ["Cambiarlo o venderlo antes de que sus hijas tengan edad para reproducirse", "Quedártelo de por vida", "Usarlo solo en la temporada de lluvias", "Darle más alimento"], answer: 0, why: "Cambiar el macho antes de que sus hijas se reproduzcan evita los apareamientos de padre con hija." },
      { objective: "O4", q: "¿Qué registros te ayudan a evitar la consanguinidad?", options: ["Los precios del alimento", "La lluvia", "La madre y el padre de cada animal", "Los nombres de los visitantes"], answer: 2, why: "Saber quiénes son los padres muestra qué animales son parientes." },
      { objective: "O5", q: "¿Cuántas entradas debe tener el área de los animales?", options: ["Todas las que se pueda", "Una, con portón, pediluvio y lavado de manos", "Ninguna; los animales andan sueltos", "Una para cada visitante"], answer: 1, why: "Una sola entrada controlada hace fácil cumplir las reglas de bioseguridad." },
      { objective: "O5", q: "¿Por qué cepillar el lodo de las botas antes del pediluvio?", options: ["La tierra impide que el desinfectante funcione", "Para ahorrar agua", "El lodo hace pesadas las botas", "No importa"], answer: 0, why: "Los desinfectantes funcionan mal sobre superficies sucias." },
      { objective: "O5", q: "Unos cerdos regresan del mercado sin venderse. ¿Qué haces?", options: ["Los metes directo con los demás", "Los regalas en el portón", "Los sueltas en la aldea", "Los pones en cuarentena como si fueran animales nuevos"], answer: 3, why: "Los animales del mercado pudieron contagiarse de alguna enfermedad, así que van a cuarentena." },
      { objective: "O6", q: "¿Cuál de estos transmite la peste porcina africana?", options: ["La lluvia sobre el techo", "Dar salvado de maíz a los cerdos", "La carne de cerdo en restos de comida sin cocinar, los cerdos enfermos y las botas o vehículos sucios", "El agua limpia para beber"], answer: 2, why: "La PPA se transmite por cerdos infectados, productos de cerdo, lavazas y objetos contaminados." },
      { objective: "O6", q: "¿La peste porcina africana infecta a las personas?", options: ["Sí, siempre", "Solo a los niños", "Solo a los trabajadores de granja", "No, no infecta a las personas"], answer: 3, why: "La WOAH dice que la PPA no afecta la salud humana, pero es mortal para los cerdos." },
      { objective: "O6", q: "¿Por qué hay que reportar de inmediato una sospecha de influenza aviar?", options: ["Es de notificación obligatoria y se extiende rápido entre granjas", "Para recibir una vacuna gratis cada vez", "Porque las aves dejan de comer", "Para cambiar el precio en el mercado"], answer: 0, why: "Las enfermedades de notificación obligatoria se deben reportar para que la autoridad veterinaria pueda detener su avance." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 8, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del plan y vuelve a revisarla.",
    criteria: [
      { name: "Zonas y entrada", objective: "O5", notYet: "No hay dibujo, o los animales y los vehículos se mezclan sin zonas marcadas.", meets: "El dibujo muestra las zonas limpia, de amortiguación y sucia, una sola entrada y dónde se detienen los camiones.", exceeds: "También muestra el camino del alimento, del estiércol y de los animales muertos para que nunca crucen la zona limpia." },
      { name: "Pediluvio y reglas para visitantes", objective: "O5", notYet: "No hay pediluvio ni reglas para visitantes, o las reglas no se pueden cumplir.", meets: "Pediluvio con desinfectante preparado como dice la etiqueta, lavado de manos y un registro de visitas con la última granja visitada.", exceeds: "Botas y ropa solo para la granja, y una persona con nombre que revisa las reglas cada día." },
      { name: "Cuarentena y animales muertos", objective: "O5", notYet: "Los animales nuevos se unen al hato de inmediato, o los cadáveres se venden, se comen o se tiran.", meets: "Corral de cuarentena aparte durante el tiempo que aconseja el veterinario, y un lugar seguro de eliminación acordado con el veterinario.", exceeds: "También cubre los animales que regresan del mercado y la regla de nunca abrir un animal que murió de repente." },
      { name: "Respuesta ante la PPA o la influenza aviar", objective: "O6", notYet: "Faltan las señales de alerta, o el plan dice vender, tratar o esperar.", meets: "Lista las señales de alerta y lo que se hace en la primera hora: animales adentro, detener todo movimiento, reportar de inmediato.", exceeds: "Nombra la oficina veterinaria, el número de teléfono y la persona que llamará, y la regla de no dar lavazas o de mantener lejos las aves silvestres." },
      { name: "Reproducción y animales nuevos", objective: "O4", notYet: "Se compran animales reproductores nuevos sin revisarlos, o el plan permite apareamientos entre parientes.", meets: "Los reproductores nuevos vienen de granjas conocidas y sanas, y el plan evita los apareamientos entre parientes.", exceeds: "Usa IA de toros que no son parientes o un plan de intercambio de machos, con registros de los padres." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Granjas con un pediluvio, una sola entrada controlada y un registro de visitas en uso 30 días después del curso (encuesta de seguimiento o visita de extensión)",
      "Participantes que llevan un registro reproductivo y reportan menos celos perdidos o servicios repetidos",
      "Casos sospechosos de PPA o de influenza aviar reportados por los participantes al veterinario en menos de un día",
      "Menos muertes por enfermedad en los hatos y las parvadas de los participantes durante el año siguiente"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un cuaderno y un lápiz, o una nota o una hoja de cálculo en el teléfono, para los registros reproductivos y el registro de visitas",
      "Papel para el dibujo de la granja",
      "El nombre y el número de teléfono de un veterinario local, de la oficina veterinaria y de un técnico de IA registrado",
      "Unos 60 a 75 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Háganlo con un grupo de productores o una cooperativa: tomen juntos la prueba inicial y luego un capítulo por sesión, haciendo las tareas de \"Pruébalo ahora\" en granjas reales cuando se pueda.",
      "Invite al veterinario o al agente de sanidad animal local a la sesión del capítulo 2 para que explique cómo se reportan la PPA y la influenza aviar en su país y las reglas locales de eliminación.",
      "Nunca dé ni comente dosis de medicamentos, vacunas u hormonas ni periodos de retiro; envíe cada pregunta así al veterinario y a la etiqueta.",
      "No deje que el grupo visite varias granjas de cerdos o de aves el mismo día; practiquen la bioseguridad en la propia capacitación.",
      "Califique el plan de bioseguridad de cada participante con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
