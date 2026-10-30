"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-clean-water-hygiene.js). See scripts/koachlearn-courses/README.md, "Translations".
// Prevention only, exactly as in the English: no medicine doses, treatment plans or diagnosis; every lesson points to the clinic, the community health worker and the ministry of health.

const WHO_WATER = { name: "Organización Mundial de la Salud (OMS): nota descriptiva sobre el agua potable", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };
const CDC_SAFE_WATER = { name: "Centros para el Control y la Prevención de Enfermedades de EE. UU. (CDC): cómo hacer que el agua sea segura (hervir, dejar asentar y filtrar, desinfectar)", url: "https://www.cdc.gov/healthywater/emergency/making-water-safe.html" };
const CDC_HANDS = { name: "CDC: Sobre el lavado de manos (momentos clave y pasos)", url: "https://www.cdc.gov/clean-hands/about/index.html" };
const JMP_SANITATION = { name: "Programa Conjunto de Monitoreo OMS/UNICEF (JMP): escalera del saneamiento", url: "https://washdata.org/monitoring/sanitation" };
const WHO_DIARRHOEA = { name: "Organización Mundial de la Salud: nota descriptiva sobre las enfermedades diarreicas", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_CHOLERA = { name: "Organización Mundial de la Salud: nota descriptiva sobre el cólera", url: "https://www.who.int/news-room/fact-sheets/detail/cholera" };

module.exports = {
  id: "afr-clean-water-hygiene-es",
  lang: "es",
  translationOf: "afr-clean-water-hygiene",
  category: "Africa: Life and Work",
  name: "Agua limpia, saneamiento e higiene en casa",
  skills: "Elegir la fuente de agua más segura, Hacer más segura el agua para beber, Guardar el agua de forma segura, Lavarse las manos con jabón, Mantener seguros el baño y las heces de los niños, Reconocer las señales de peligro de la diarrea y el cólera",
  outcome: "proteger el agua, las manos y el baño de tu familia: elegir el agua más segura, hacerla más segura en casa, guardarla tapada, lavarte las manos con jabón en los momentos clave, manejar las heces de forma segura y reconocer las señales de alerta que significan ir a la clínica ya.",
  about: [
    "Los microbios del agua, de las manos y de las heces causan diarrea, cólera y fiebre tifoidea. La diarrea es una de las causas de muerte más grandes en los niños pequeños, y la mayor parte se puede prevenir con agua segura, jabón y un baño limpio. Este curso es para madres, padres, abuelos, cuidadores y jóvenes de pueblos y ciudades de Kenia, Nigeria, Ghana, RD del Congo, Senegal, Egipto y toda África.",
    "Vas a comparar las fuentes de agua cerca de ti, hacer más segura el agua para beber hirviéndola o con un producto de cloro, guardarla para que siga limpia, preparar un lugar para lavarse las manos con jabón, mantener seguros el baño y las heces de los niños, y aprender las señales de peligro de la diarrea y el cólera.",
    "Este curso enseña a prevenir y cuándo buscar ayuda. No te dice cómo tratar una enfermedad ni qué medicina dar: eso le toca a la clínica, al agente comunitario de salud y a tu ministerio de salud. Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\" en casa."
  ],
  finalTask: "Haz un plan de una página de agua limpia e higiene para tu casa: tu fuente de agua más segura y una de reserva, cómo harás más segura el agua para beber, cómo la guardarás y la servirás, dónde está tu lugar para lavarse las manos y en qué momentos clave se lava las manos tu familia, cómo mantienes seguros el baño y las heces de los niños, y una tarjeta de señales de peligro con el nombre y el teléfono de la clínica o del agente comunitario de salud más cercano.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Madres, padres, abuelos, cuidadores y jóvenes de toda África, en ciudades, asentamientos informales y aldeas. Muchos traen agua de un pozo perforado, un pozo, un quiosco, un río o una llave compartida, o la compran en bolsitas o bidones, y comparten un baño o una letrina.",
    startingPoint: "Saben que el agua sucia puede enfermar a la gente y muchas veces hierven el agua para los bebés. Muchos no tratan toda el agua para beber, la guardan en recipientes abiertos, meten vasos con la mano, se lavan las manos sin jabón o solo con agua, y no están seguros de qué señales de la diarrea exigen ir a la clínica de inmediato.",
    gap: "La diarrea, el cólera y la fiebre tifoidea se contagian por el agua insegura, las manos sin lavar y las heces, y matan a muchos niños pequeños. Para proteger a sus hijos, las familias necesitan unos pocos hábitos diarios (agua segura, jabón en los momentos correctos y baños seguros) y saber cuándo ir a la clínica de inmediato.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; muchos estudiantes hablan el idioma del curso como segunda lengua",
      "Dispositivos: un teléfono básico con datos caros; las lecciones funcionan sin conexión una vez cargadas",
      "Dinero: presupuestos bajos; usar métodos baratos (hervir, productos de cloro vendidos para el agua, jabón, un lugar sencillo para lavarse las manos)",
      "Salud: solo prevención y señales de alerta; sin dosis de medicinas, tratamientos ni diagnósticos; los estudiantes siguen a su clínica, su agente comunitario de salud y su ministerio de salud",
      "Tiempo: lecciones de 4 a 6 minutos que caben entre las tareas de la casa y el trabajo"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con las fuentes de agua cercanas a tu casa", action: "ordenar las fuentes de agua de la más segura a la más riesgosa y elegir una para beber", standard: "dando una razón para cada una y nombrando una fuente de reserva" },
    { id: "O2", condition: "Con el agua de tu fuente y lo que tienes en casa", action: "hacer más segura el agua para beber hirviéndola o con un producto de cloro vendido para el agua", standard: "siguiendo cada paso, incluso dejar asentar o filtrar primero el agua turbia y seguir la etiqueta del producto" },
    { id: "O3", condition: "Con agua tratada y los recipientes de tu casa", action: "guardar y servir el agua para beber sin que la toquen las manos ni la suciedad", standard: "usando un recipiente limpio y tapado y vertiendo el agua o usando una llave, sin meter nunca nada" },
    { id: "O4", condition: "Con jabón o ceniza y agua en casa", action: "lavarte las manos con jabón en los momentos clave y preparar un lugar para lavarse las manos", standard: "frotando cada parte de las manos durante al menos 20 segundos, con el lugar cerca del baño y de la cocina" },
    { id: "O5", condition: "Con tu baño o letrina y niños pequeños en casa", action: "mantener limpio el baño y desechar de forma segura las heces de los niños", standard: "sin heces al aire libre y con una tapa o cubierta en uso" },
    { id: "O6", condition: "Ante un familiar con diarrea o heces líquidas", action: "reconocer las señales de peligro de la deshidratación y el cólera y llevar a la persona a la clínica de inmediato", standard: "nombrando al menos cuatro señales de peligro y la clínica o el agente comunitario de salud más cercano" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Agua segura para beber",
      lessons: [
        {
          title: "Elegir la fuente de agua más segura",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ordenar las fuentes de agua cerca de tu casa de la más segura a la más riesgosa.",
          text: [
            "El agua puede verse clara y aun así llevar microbios. El mayor peligro es que las heces (desechos humanos o de animales) lleguen al agua. La OMS dice que el agua insegura puede contagiar diarrea, cólera, disentería, fiebre tifoidea, hepatitis A y polio. El agua de ríos y lagos también puede llevar gusanos que causan la bilharziasis (esquistosomiasis).",
            "Las fuentes más seguras suelen ser el agua por tubería, un pozo perforado o un pozo protegido con tapa y bomba, los manantiales protegidos y el agua de lluvia recogida en un tanque limpio y tapado. Las fuentes más riesgosas son los pozos abiertos, los manantiales sin proteger, los ríos, estanques, lagos y represas, donde las personas y los animales se lavan, nadan y beben. El agua de un quiosco, de un camión cisterna o en bolsita solo es tan segura como su origen y como la manejaron.",
            "Mira cada fuente cerca de ti. ¿Está tapada? ¿Hay un baño, una letrina o un corral cerca, o más arriba en la pendiente? ¿La gente lava ropa ahí o deja beber a los animales? Elige la más segura para beber y cocinar, y una de reserva para cuando esté seca o rota. Hasta el agua buena se puede ensuciar camino a casa, así que igual la vas a tratar y guardar bien (próximas lecciones)."
          ],
          steps: ["Haz una lista de todas las fuentes de agua que usa tu familia.", "Para cada una pregunta: ¿está tapada, protegida y lejos de baños y animales?", "Ordénalas de la más segura a la más riesgosa.", "Elige una para beber y cocinar, y una de reserva.", "Usa el agua más riesgosa solo para lavar, y trata igual toda el agua que bebas."],
          words: [["Heces", "desechos humanos o de animales (caca)."], ["Fuente protegida", "un pozo, pozo perforado o manantial tapado y sellado para que no entren la suciedad ni el agua que escurre."], ["Bilharziasis (esquistosomiasis)", "una enfermedad causada por gusanos muy pequeños que viven en algunos ríos y lagos."]],
          slides: [
            { title: "Claro no es lo mismo que seguro", bullets: ["Las heces en el agua contagian microbios", "Diarrea, cólera, fiebre tifoidea, hepatitis A", "Ríos y lagos pueden llevar gusanos de la bilharziasis"] },
            { title: "Por lo general más seguras", bullets: ["Agua por tubería", "Pozo perforado o pozo protegido con tapa y bomba", "Manantial protegido; lluvia en un tanque limpio y tapado"] },
            { title: "Por lo general más riesgosas", bullets: ["Pozos abiertos y manantiales sin proteger", "Ríos, estanques, lagos y represas", "Quiosco, camión cisterna, bolsita: tan seguras como su origen"] },
            { title: "Revisa cada fuente", bullets: ["¿Tapada? ¿Lejos de baños y animales?", "Elige la más segura para beber, y una de reserva", "Igual trátala y guárdala bien"] }
          ],
          sources: [WHO_WATER],
          tryIt: "Escribe todas las fuentes de agua que usa tu familia. Marca cada una como más segura o más riesgosa, y por qué. Encierra en un círculo la que usarás para beber y la de reserva.",
          youCanNow: "comparar las fuentes de agua cerca de ti y elegir la más segura para beber, con una de reserva.",
          quickCheck: [
            { objective: "O1", q: "¿Qué fuente suele ser la más segura para beber?", options: ["Un pozo perforado protegido con tapa y bomba", "Un río donde bebe el ganado", "Un estanque abierto", "Una represa donde la gente lava ropa"], answer: 0, why: "Una fuente protegida y tapada deja fuera las heces y el agua que escurre." },
            { objective: "O1", q: "El agua del río se ve clara. ¿Qué es cierto?", options: ["El agua clara siempre es segura", "El agua clara puede llevar microbios, así que trátala antes de beber", "Solo el agua café es peligrosa", "Los ríos se limpian solos"], answer: 1, why: "Los microbios no se ven; el agua clara puede llevarlos." }
          ]
        },
        {
          title: "Hacer más segura el agua para beber en casa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hacer más segura el agua para beber hirviéndola o con un producto de cloro vendido para el agua.",
          text: [
            "Si tu agua puede no ser segura, trátala antes de beberla, antes de preparar comida para bebé o leche de fórmula y antes de cepillarte los dientes. Dos formas comunes son hervirla y usar cloro. Las dos funcionan mejor con agua clara.",
            "Si el agua está turbia, primero déjala asentar en un recipiente limpio para que la suciedad baje al fondo, y luego vierte el agua clara a través de un trapo limpio doblado varias veces. Dejar asentar y filtrar con un trapo no hace que el agua sea segura por sí solo; la prepara para hervirla o ponerle cloro.",
            "Hervir: lleva el agua a un hervor fuerte, con burbujas grandes, durante 1 minuto. En lo alto de las montañas, a más de unos 2,000 metros, hiérvela 3 minutos. Déjala enfriar tapada, en la misma olla o en un recipiente limpio.",
            "Cloro: usa un producto de cloro vendido para agua de beber (líquido, pastillas o sobres) o uno que te dé tu trabajador de salud. Sigue la etiqueta al pie de la letra: cuánto producto para cuánta agua y cuánto esperar antes de beber (muchas veces al menos 30 minutos). El agua turbia puede necesitar más; la etiqueta te lo dice. Guarda el cloro lejos de los niños. Si no tienes la etiqueta o tienes dudas, pregunta a tu agente comunitario de salud o a la clínica. La OMS evalúa algunos productos para tratar el agua en casa; tu ministerio de salud puede decirte cuáles están aprobados donde vives."
          ],
          steps: ["Si está turbia: déjala asentar y luego viértela por un trapo limpio doblado.", "Hervir: hervor fuerte por 1 minuto (3 minutos en lo alto de las montañas), y enfriar tapada.", "O cloro: agrega el producto como dice la etiqueta, revuelve y espera el tiempo de la etiqueta.", "Viértela en un recipiente limpio y tapado.", "Guarda los productos de cloro fuera del alcance de los niños."],
          words: [["Hervor fuerte", "agua que hierve con fuerza, con burbujas grandes que no paran cuando revuelves."], ["Producto de cloro", "un líquido, pastilla o sobre que se vende para matar los microbios del agua de beber."], ["Dejar asentar", "dejar el agua quieta para que la suciedad baje al fondo."]],
          slides: [
            { title: "Cuándo tratar el agua", bullets: ["Antes de beber", "Antes de preparar comida para bebé o leche de fórmula", "Antes de cepillarte los dientes"] },
            { title: "Primero el agua turbia", bullets: ["Déjala asentar", "Viértela por un trapo limpio doblado", "Esto la prepara; todavía no es segura"] },
            { title: "Hervir", bullets: ["Hervor fuerte durante 1 minuto", "3 minutos a más de unos 2,000 metros", "Enfríala tapada"] },
            { title: "Cloro", bullets: ["Un producto vendido para agua de beber", "Sigue la etiqueta: cantidad y tiempo de espera", "¿Dudas? Pregunta a tu trabajador de salud; lejos de los niños"] }
          ],
          sources: [CDC_SAFE_WATER, WHO_WATER],
          tryIt: "Elige una forma, hervir o un producto de cloro, y trata hoy un recipiente de agua para beber, paso a paso. Escribe cada paso que hiciste.",
          youCanNow: "hacer más segura el agua turbia o dudosa dejándola asentar y luego hirviéndola o usando un producto de cloro como dice su etiqueta.",
          quickCheck: [
            { objective: "O2", q: "Tu agua está turbia. ¿Qué haces antes de hervirla o ponerle cloro?", options: ["Le pones azúcar", "La bebes rápido", "La dejas asentar y la viertes por un trapo limpio doblado", "Nada; el agua turbia está bien"], answer: 2, why: "Dejar asentar y filtrar quita la suciedad para que hervir o el cloro funcionen mejor." },
            { objective: "O2", q: "¿Cuánto tiempo mantienes el agua en hervor fuerte a alturas normales?", options: ["Solo hasta que esté tibia", "5 segundos", "Hasta que se evapore la mitad", "1 minuto"], answer: 3, why: "Los CDC aconsejan un hervor fuerte durante 1 minuto, o 3 minutos en lo alto de las montañas." }
          ]
        },
        {
          title: "Guardar y servir el agua de forma segura",
          objectives: ["O3"],
          minutes: 4,
          goal: "Guardar y servir el agua para beber de modo que las manos y la suciedad no puedan tocarla.",
          text: [
            "El agua segura se puede volver a ensuciar en casa. Los microbios entran cuando se meten las manos o los vasos en el recipiente, cuando se deja abierto o cuando el recipiente mismo está sucio.",
            "Guarda el agua para beber en un recipiente limpio con tapa, mejor si tiene boca angosta o llave. Mantenlo levantado del piso y lejos de los animales. Vierte el agua o usa la llave; nunca metas un vaso ni la mano. Lava el recipiente y la tapa con jabón y agua segura seguido, y déjalos secar boca abajo.",
            "Tapar el agua también impide que los mosquitos pongan huevos en ella. Mantén el agua para beber separada del agua para lavar. Una familia en Kumasi, Lubumbashi o Kano puede usar la misma regla: un recipiente limpio y tapado para el agua de beber en cada casa, y nadie mete nada."
          ],
          steps: ["Usa un recipiente limpio con tapa, boca angosta o llave.", "Mantenlo levantado del piso, lejos de los animales.", "Vierte o usa la llave: no metas vasos ni manos.", "Lava el recipiente con jabón y agua segura seguido.", "Mantén el agua de beber separada del agua para lavar."],
          words: [["Recipiente", "un bidón, cubeta, olla o botella que guarda agua."], ["Meter (la mano o el vaso)", "poner un vaso o la mano dentro del agua para sacar un poco."]],
          slides: [
            { title: "El agua segura se puede ensuciar otra vez", bullets: ["Meter manos o vasos", "Recipientes abiertos", "Recipientes sucios"] },
            { title: "Guárdala bien", bullets: ["Recipiente limpio con tapa, boca angosta o llave", "Levantado del piso, lejos de los animales", "Separada del agua para lavar"] },
            { title: "Sírvela bien", bullets: ["Viértela o usa la llave", "Nunca metas un vaso ni la mano", "Lava el recipiente con jabón seguido"] }
          ],
          sources: [WHO_WATER, CDC_SAFE_WATER],
          tryIt: "Mira cómo se guarda el agua de beber en tu casa. ¿Está tapada? ¿Alguien mete vasos? Haz un cambio hoy, como una tapa, un cucharón de mango largo colgado de un gancho o un recipiente con llave.",
          youCanNow: "guardar y servir el agua para beber de modo que siga limpia después de tratarla.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es la forma más segura de sacar agua del recipiente donde se guarda?", options: ["Meter un vaso", "Verterla o usar una llave", "Meter la mano", "Dejarlo sin tapa para que sea rápido"], answer: 1, why: "Verter o usar una llave mantiene las manos y los vasos fuera del agua limpia." },
            { objective: "O3", q: "¿Por qué mantener tapado el recipiente del agua para beber?", options: ["Deja fuera la suciedad, las manos y los mosquitos", "Hace el agua más fría", "Es solo por apariencia", "Hace que el agua hierva"], answer: 0, why: "Una tapa impide que entren la suciedad, los microbios y los huevos de mosquito." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Agua segura para beber",
        questions: [
          { objective: "O1", q: "Hay una letrina justo más arriba de un pozo abierto poco profundo. ¿Qué haces?", options: ["Beber de él; se ve claro", "Usar el pozo solo para beber", "Elegir una fuente más segura para beber, y tratar toda el agua que bebas", "Poner una tapa solo a la letrina"], answer: 2, why: "Las heces pueden escurrir de una letrina a un pozo abierto cercano; elige una fuente más segura y trata el agua de beber." },
          { objective: "O2", q: "¿Qué afirmación sobre los productos de cloro para el agua es correcta?", options: ["Usa la cantidad que quieras", "Bébela de inmediato", "Cualquier cloro de limpieza es igual", "Sigue la etiqueta para saber cuánto usar y cuánto esperar"], answer: 3, why: "La etiqueta da la cantidad correcta y el tiempo de espera para ese producto." },
          { objective: "O2", q: "Vives en lo alto de las montañas, a más de unos 2,000 metros. ¿Cuánto tiempo hierves el agua?", options: ["3 minutos en hervor fuerte", "10 segundos", "Solo 1 minuto", "No hace falta hervirla"], answer: 0, why: "En lo alto el agua hierve a menos temperatura, por eso los CDC aconsejan 3 minutos allí." },
          { objective: "O3", q: "Tu hijo mete un vaso en la cubeta del agua. ¿Cuál es el mejor cambio?", options: ["Decirle que lo meta más rápido", "Usar un recipiente tapado del que se vierte, o uno con llave", "Dejar la cubeta abierta", "Ponerle azúcar al agua"], answer: 1, why: "Verter o usar una llave impide que las manos y los vasos sucios lleguen al agua limpia." },
          { objective: "O1", q: "El agua de un quiosco o de un camión cisterna es...", options: ["Siempre segura", "Nunca segura", "Segura solo cuando está tibia", "Tan segura como su origen y como la manejaron"], answer: 3, why: "El agua comprada puede estar limpia o sucia; pregunta por su origen y guárdala bien igual." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manos limpias, baños seguros, acción rápida",
      lessons: [
        {
          title: "Lavarse las manos con jabón en los momentos clave",
          objectives: ["O4"],
          minutes: 5,
          goal: "Lavarte las manos con jabón en los momentos clave y preparar un lugar para lavarse las manos en casa.",
          text: [
            "Lavarse las manos con jabón es una de las formas más baratas de evitar la diarrea y las infecciones del pecho. El agua sola no basta; el jabón despega los microbios.",
            "Momentos clave: después de usar el baño; después de limpiar la cola de un niño o cambiar un pañal; antes, durante y después de preparar comida; antes de comer y antes de dar de comer a un niño; después de cuidar a alguien enfermo con diarrea o vómitos; después de sonarte la nariz, toser o estornudar; y después de tocar animales o basura.",
            "Cómo: moja tus manos con agua limpia que corra, pon jabón, frota las palmas, el dorso, entre los dedos y debajo de las uñas durante al menos 20 segundos (más o menos lo que dura cantar dos veces una canción corta), enjuágalas con agua que corra y déjalas secar al aire o usa un trapo limpio. Donde no hay llave, ayuda un lugar para lavarse las manos: un bidón o una botella con un agujero pequeño y un tapón, colgado o inclinado con un palo que se pisa (muchas veces llamado tippy tap), con el jabón colgado de un cordón y un poco de grava debajo para el agua usada. Ponlo cerca del baño y cerca de donde cocinas."
          ],
          steps: ["Moja las manos con agua limpia que corra.", "Pon jabón.", "Frota palmas, dorso, entre los dedos y debajo de las uñas durante al menos 20 segundos.", "Enjuaga con agua que corra.", "Seca al aire o con un trapo limpio.", "Prepara un lugar cerca del baño y de la cocina."],
          words: [["Momentos clave", "los momentos en que lavarse las manos detiene más microbios."], ["Lugar para lavarse las manos", "un sitio fijo con agua y jabón para lavarse las manos."], ["Tippy tap", "un lugar sencillo para lavarse las manos hecho con un bidón o una botella que se inclina con un pedal."]],
          slides: [
            { title: "Jabón, no solo agua", bullets: ["El jabón despega los microbios de las manos", "Evita la diarrea y las infecciones del pecho"] },
            { title: "Momentos clave", bullets: ["Después del baño o de limpiar la cola de un niño", "Antes de cocinar, comer o dar de comer a un niño", "Después de cuidar a un enfermo; después de animales o basura"] },
            { title: "Cómo lavarse", bullets: ["Mojar, jabón, frotar al menos 20 segundos", "Palmas, dorso, entre los dedos, debajo de las uñas", "Enjuagar con agua que corra; secar al aire o con trapo limpio"] },
            { title: "Un lugar en casa", bullets: ["Bidón o botella con llave o palo para inclinarlo", "Jabón colgado de un cordón; grava debajo", "Cerca del baño y de la cocina"] }
          ],
          sources: [CDC_HANDS, WHO_WATER],
          tryIt: "Prepara o mejora hoy un lugar para lavarse las manos en casa, con agua y jabón, cerca del baño o de la cocina. Luego enseña a cada persona de tu casa a lavarse durante 20 segundos.",
          youCanNow: "lavarte bien las manos con jabón en los momentos clave y preparar un lugar para lavarse las manos en casa.",
          quickCheck: [
            { objective: "O4", q: "¿Cuándo debes lavarte las manos con jabón?", options: ["Solo una vez al día", "Solo antes de ir a la iglesia o a la mezquita", "Después del baño, después de limpiar la cola de un niño y antes de cocinar o comer", "Solo cuando se ven sucias"], answer: 2, why: "Estos momentos clave impiden que los microbios de las heces lleguen a la comida y a la boca." },
            { objective: "O4", q: "¿Cuánto tiempo debes frotar con jabón?", options: ["2 segundos", "Hasta que se acabe el jabón", "Solo las palmas, rápido", "Al menos 20 segundos, todas las partes de las manos"], answer: 3, why: "Frotar cada parte durante al menos 20 segundos quita los microbios." }
          ]
        },
        {
          title: "Baños seguros y heces de los niños",
          objectives: ["O5"],
          minutes: 5,
          goal: "Mantener limpio tu baño y desechar de forma segura las heces de los niños.",
          text: [
            "Las heces dejadas al aire libre, en un matorral, un campo, una zanja o un río, llevan microbios que las moscas, los pies, la lluvia y las manos traen de vuelta a la comida y al agua. La OMS y UNICEF (el Fondo de las Naciones Unidas para la Infancia) consideran más seguro un baño que separa las heces de las personas: un inodoro con descarga o de descarga manual, o una letrina de pozo con losa. Un baño que tu hogar no comparte es todavía mejor.",
            "Mantén limpio el baño o la letrina: lava la losa o el asiento seguido, deja la tapa o la cubierta sobre el hueco para alejar las moscas y ten un lugar para lavarse las manos justo al lado. Los niños también necesitan un baño que puedan usar sin peligro, como una bacinica o una tapa pequeña para el hueco.",
            "Las heces de los niños pequeños son tan peligrosas como las de los adultos. Échalas al baño o a la letrina de inmediato, también las de pañales y bacinicas, y luego lava la bacinica y tus manos con jabón. No las dejes en el patio ni las tires a la zanja o a la basura."
          ],
          steps: ["Lava la losa o el asiento seguido.", "Deja la tapa o la cubierta sobre el hueco.", "Ten agua y jabón justo al lado del baño.", "Echa las heces de los niños al baño de inmediato.", "Lava la bacinica y tus manos con jabón."],
          words: [["Letrina", "un baño sobre un pozo cavado en la tierra."], ["Losa", "el piso sólido sobre una letrina de pozo donde te paras."], ["Defecación al aire libre", "hacer las necesidades en campos, matorrales, ríos u otros lugares abiertos."]],
          slides: [
            { title: "Las heces al aire libre regresan", bullets: ["Moscas, pies, lluvia y manos llevan microbios", "A la comida y al agua"] },
            { title: "Un baño más seguro", bullets: ["Con descarga, descarga manual, o letrina de pozo con losa", "Mejor si no se comparte con otros hogares", "Tapa o cubierta puesta; agua y jabón al lado"] },
            { title: "Heces de los niños", bullets: ["Tan peligrosas como las de los adultos", "Al baño de inmediato", "Lava la bacinica y tus manos con jabón"] }
          ],
          sources: [JMP_SANITATION, WHO_DIARRHOEA],
          tryIt: "Revisa hoy tu baño o letrina: ¿está limpio, tapado y junto a agua y jabón? Arregla una cosa. Pónganse de acuerdo en familia sobre dónde irán siempre las heces de los niños.",
          youCanNow: "mantener limpio y tapado un baño o una letrina y deshacerte de forma segura de las heces de los niños.",
          quickCheck: [
            { objective: "O5", q: "¿A dónde van las heces de un bebé que están en un pañal?", options: ["Al baño o a la letrina de inmediato", "Al patio", "A la zanja", "Al montón de basura"], answer: 0, why: "Las heces de los niños también llevan microbios y deben ir al baño." },
            { objective: "O5", q: "¿Por qué dejar una tapa o cubierta sobre el hueco de la letrina?", options: ["Para que se mantenga caliente", "Para que las moscas no lleven microbios a la comida", "Solo para tapar el olor", "No hace falta"], answer: 1, why: "Las moscas que se paran en las heces pueden llevar microbios a la comida." }
          ]
        },
        {
          title: "Diarrea y cólera: cuándo ir a la clínica ya",
          objectives: ["O6"],
          minutes: 6,
          goal: "Reconocer las señales de peligro de la deshidratación y el cólera y conseguir ayuda de inmediato.",
          text: [
            "La diarrea saca agua y sales del cuerpo. Esto se llama deshidratación, y puede matar rápido a un niño pequeño. El cólera puede causar cantidades muy grandes de heces líquidas y, según la OMS, puede matar en pocas horas si no se trata. No esperes a ver si mejora.",
            "Ve a la clínica, al centro de salud o con el agente comunitario de salud YA si la persona: tiene mucho sueño, está débil, sin fuerza o cuesta despertarla; no puede beber o bebe muy poco; tiene los ojos hundidos; tiene piel que vuelve muy lento a su lugar cuando la pellizcas; tiene muchas heces líquidas, como agua de arroz; tiene sangre en las heces; vomita una y otra vez; o tiene diarrea que dura muchos días. Un bebé o un niño pequeño con diarrea necesita más cuidado.",
            "Las sales de rehidratación oral (SRO) reponen el agua y las sales perdidas, y los trabajadores de salud también dan zinc a los niños. Pregunta a tu clínica, a tu agente comunitario de salud o a la farmacia cómo usar las SRO; dalas en el camino, como te digan, pero ve igual. Sigue dando el pecho. En un brote de cólera, escucha a tu ministerio de salud: puede organizar campañas de vacunación y centros de tratamiento. Escribe en una tarjeta el nombre y el teléfono de tu clínica y de tu agente comunitario de salud más cercanos, y guarda dinero para el transporte si puedes."
          ],
          steps: ["Vigila de cerca a cualquier persona con diarrea, sobre todo a los niños pequeños.", "Busca las señales de peligro.", "Si ves alguna, ve a la clínica o llama al agente comunitario de salud ya.", "Pregunta al trabajador de salud cómo dar las SRO, y sigue dando el pecho.", "Lávate las manos con jabón después de cada contacto y limpia de forma segura."],
          words: [["Deshidratación", "cuando el cuerpo pierde demasiada agua y sal."], ["SRO (sales de rehidratación oral)", "una mezcla de sales y azúcar que, mezclada con agua segura, repone lo que saca la diarrea."], ["Cólera", "una enfermedad por agua o comida sucia que causa diarrea muy líquida y puede matar rápido."], ["Brote", "muchos casos de una enfermedad en una zona al mismo tiempo."]],
          slides: [
            { title: "La diarrea puede matar rápido", bullets: ["El cuerpo pierde agua y sales", "El cólera puede matar en pocas horas", "No esperes"] },
            { title: "Ve a la clínica YA si", bullets: ["Mucho sueño, sin fuerza, cuesta despertarlo; no puede beber", "Ojos hundidos; la piel pellizcada vuelve lento", "Muchas heces como agua de arroz; sangre en las heces", "Vomita una y otra vez; dura muchos días"] },
            { title: "En el camino", bullets: ["Pregunta a un trabajador de salud cómo dar las SRO", "Sigue dando el pecho", "Lávate las manos después de cada contacto"] },
            { title: "Está listo", bullets: ["Tarjeta con los números de la clínica y del agente de salud", "Dinero para el transporte si puedes", "En un brote, sigue al ministerio de salud"] }
          ],
          sources: [WHO_DIARRHOEA, WHO_CHOLERA],
          tryIt: "Haz una tarjeta de señales de peligro: escribe cuatro o más señales de peligro, el nombre y el teléfono de tu clínica o agente comunitario de salud más cercano, y cómo llegarías allí. Pégala en la pared.",
          youCanNow: "reconocer las señales de peligro de la deshidratación y el cólera y llevar a la persona a la clínica de inmediato.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es una señal de peligro que significa ir a la clínica ya?", options: ["Una sola deposición blanda", "Un niño que juega normalmente", "Un niño con mucho sueño que no puede beber", "Tener sed después de jugar fútbol"], answer: 2, why: "Tener mucho sueño y no poder beber son señales de deshidratación grave." },
            { objective: "O6", q: "Durante un brote de cólera, un vecino tiene enormes cantidades de heces líquidas como agua de arroz. ¿Qué haces?", options: ["Esperar hasta mañana", "Darle cualquier medicina que tengas en casa", "Ocultárselo a los trabajadores de salud", "Ayudarle a llegar ya a una clínica o centro de tratamiento"], answer: 3, why: "El cólera puede matar en pocas horas; la atención rápida en una clínica salva vidas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Manos limpias, baños seguros, acción rápida",
        questions: [
          { objective: "O4", q: "En el lugar para lavarse las manos hay agua pero no jabón. ¿Qué es cierto?", options: ["El agua sola basta", "Hace falta jabón para despegar los microbios; consigue jabón para ese lugar", "Las manos no necesitan lavarse", "Usa la cubeta del agua para beber"], answer: 1, why: "El jabón quita los microbios que el agua sola deja." },
          { objective: "O4", q: "¿Cuál es el mejor sitio para un lugar de lavado de manos?", options: ["Cerca del baño y cerca de donde cocinas", "Lejos de la casa", "Dentro de la cubeta del agua para beber", "En el dormitorio"], answer: 0, why: "Cerca del baño y de la cocina es fácil lavarse en los momentos clave." },
          { objective: "O5", q: "Hay heces de un niño pequeño en el patio. ¿Qué haces?", options: ["Barrerlas a la zanja", "Dejarlas secar", "Cubrirlas con arena y dejarlas", "Echarlas al baño y lavarte las manos con jabón"], answer: 3, why: "Las heces de los niños van al baño; luego lávate las manos." },
          { objective: "O6", q: "Tu hijo tiene diarrea y los ojos hundidos, y la piel pellizcada vuelve lento. ¿Qué haces?", options: ["Esperar dos días", "Quitarle todas las bebidas", "Ir a la clínica ya y preguntar cómo dar las SRO en el camino", "Darle una medicina de adulto"], answer: 2, why: "Son señales de deshidratación; un trabajador de salud debe ver al niño ya." },
          { objective: "O6", q: "¿Qué hacen las SRO?", options: ["Matan mosquitos", "Reponen el agua y las sales que se pierden con la diarrea", "Limpian el baño", "Hacen que el agua hierva más rápido"], answer: 1, why: "Las SRO reponen el agua y las sales que la diarrea saca del cuerpo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Agua limpia, saneamiento e higiene en casa",
    questions: [
      { objective: "O1", q: "¿Cuál es el mayor peligro para la seguridad del agua de beber?", options: ["Que las heces lleguen al agua", "El agua fría", "El agua dura", "El agua que sabe a hierro"], answer: 0, why: "La OMS dice que los microbios de las heces son el mayor riesgo para el agua de beber." },
      { objective: "O1", q: "¿Qué pregunta te ayuda a juzgar un pozo?", options: ["¿De qué color es la cubeta?", "¿Está tapado y lejos de baños y animales?", "¿Quién lo cavó?", "¿Está cerca del mercado?"], answer: 1, why: "Una fuente tapada y lejos de baños y animales tiene menos probabilidad de llevar heces." },
      { objective: "O1", q: "Tu pozo perforado de siempre está roto. ¿Qué haces?", options: ["Beber del río sin tratar el agua", "Dejar de beber", "Usar tu fuente de reserva y tratar el agua antes de beberla", "Usar el agua para lavar"], answer: 2, why: "Una fuente de reserva más el tratamiento mantienen el agua de beber más segura cuando falla la fuente principal." },
      { objective: "O2", q: "¿Qué dos formas hacen más segura el agua para beber en casa?", options: ["Ponerle azúcar o sal", "Dejarla al sol una hora o agitarla", "Enfriarla o congelarla", "Hervirla, o usar un producto de cloro vendido para el agua"], answer: 3, why: "Hervir y los productos de cloro matan los microbios; lo demás no." },
      { objective: "O2", q: "¿Verter agua turbia por un trapo la hace segura?", options: ["No; quita la suciedad, pero igual la hierves o le pones cloro", "Sí, siempre", "Solo si el trapo es nuevo", "Sí, si lo haces dos veces"], answer: 0, why: "El trapo quita la suciedad, no todos los microbios; igual hay que hervir o usar cloro." },
      { objective: "O2", q: "Tienes un producto de cloro pero perdiste la etiqueta. ¿Qué haces?", options: ["Adivinar la cantidad", "Poner mucho para estar seguro", "Preguntar a tu agente comunitario de salud o a la clínica cómo usarlo", "Beber justo después de ponerlo"], answer: 2, why: "La cantidad correcta y el tiempo de espera importan; un trabajador de salud te los puede decir." },
      { objective: "O2", q: "Antes de preparar leche de fórmula para el bebé, el agua debe estar...", options: ["Recién sacada del río", "Tratada: hervida y enfriada, o tratada de forma segura", "Tibia por el sol", "Cualquier agua sirve"], answer: 1, why: "Los bebés corren más riesgo; su agua debe tratarse primero." },
      { objective: "O3", q: "¿Qué recipiente para el agua de beber es el mejor?", options: ["Una cubeta abierta en el piso", "Un recipiente usado para combustible", "Un recipiente limpio y tapado, con boca angosta o llave, levantado del piso", "Cualquier olla"], answer: 2, why: "Limpio, tapado y levantado del piso mantiene segura el agua tratada." },
      { objective: "O3", q: "¿Por qué nadie debe meter un vaso en el agua de beber?", options: ["Las manos y los vasos llevan microbios al agua limpia", "Se desperdicia agua", "Hace ruido", "Es de mala educación"], answer: 0, why: "Meter un vaso lleva microbios de las manos y los vasos a todo el recipiente." },
      { objective: "O3", q: "¿Cada cuánto debes lavar el recipiente del agua?", options: ["Nunca", "Una vez al año", "Solo cuando huele mal", "Seguido, con jabón y agua segura, y luego secarlo boca abajo"], answer: 3, why: "Lavarlo con regularidad impide que los microbios se acumulen dentro del recipiente." },
      { objective: "O4", q: "¿Cuál es un momento clave para lavarse las manos?", options: ["Antes de dar de comer a un niño", "Después de ver televisión", "Solo antes de dormir", "Después de beber agua"], answer: 0, why: "Las manos limpias antes de dar de comer a un niño mantienen los microbios fuera de su boca." },
      { objective: "O4", q: "¿Qué partes de las manos frotas?", options: ["Solo las puntas de los dedos", "Palmas, dorso, entre los dedos y debajo de las uñas", "Solo las palmas", "Solo la mano derecha"], answer: 1, why: "Los microbios se esconden en cada parte de la mano, así que frótalas todas." },
      { objective: "O4", q: "No tienes llave en casa. ¿Cómo puedes lavarte las manos con agua que corra?", options: ["Meter las manos en la cubeta del agua para beber", "Solo limpiarlas con un trapo", "Hacer un lugar de lavado con un bidón o una botella que vierta agua, con jabón colgado de un cordón", "No lavarte"], answer: 2, why: "Un lugar sencillo da agua que corre para lavarse sin ensuciar el agua guardada." },
      { objective: "O5", q: "¿Qué baño consideran más seguro la OMS y UNICEF?", options: ["Un campo lejos de la casa", "Una cubeta que se vacía en la zanja", "Un pozo sin losa", "Una letrina de pozo con losa, o un inodoro con descarga o de descarga manual"], answer: 3, why: "Estos separan las heces de las personas; un pozo sin losa o los campos abiertos no." },
      { objective: "O5", q: "¿Qué debe haber siempre al lado del baño?", options: ["Agua y jabón para lavarse las manos", "El recipiente del agua para beber", "Comida", "Nada"], answer: 0, why: "Lavarse las manos justo después de usar el baño impide que los microbios se propaguen." },
      { objective: "O5", q: "¿Por qué son peligrosas las heces de los niños?", options: ["No son peligrosas", "Llevan microbios igual que las heces de los adultos", "Solo porque huelen", "Solo cuando el niño está enfermo"], answer: 1, why: "Las heces de los niños llevan los mismos microbios y deben ir al baño." },
      { objective: "O6", q: "¿Cuál de estos casos necesita la clínica ya?", options: ["Una sola deposición blanda y el niño está jugando", "Un niño con sed después de correr", "Sangre en las heces", "Un niño que quiere comer"], answer: 2, why: "La sangre en las heces es una señal de peligro que necesita un trabajador de salud." },
      { objective: "O6", q: "¿Por qué no debes esperar cuando alguien tiene señales de cólera?", options: ["Porque da vergüenza", "Porque la clínica cierra temprano", "Se pasa solo", "El cólera puede matar en pocas horas sin atención"], answer: 3, why: "La OMS dice que el cólera puede ser mortal en pocas horas si no se trata." },
      { objective: "O6", q: "Un bebé tiene diarrea. ¿Qué sigues haciendo mientras consigues ayuda?", options: ["Seguir dando el pecho", "Quitarle toda la leche", "Quitarle todas las bebidas", "Darle medicina de adulto"], answer: 0, why: "Dar el pecho sigue dando al bebé agua y alimento; el trabajador de salud aconseja lo demás." },
      { objective: "O6", q: "¿Qué debe incluir tu tarjeta de señales de peligro?", options: ["El PIN de tu dinero móvil", "Las señales de peligro y el nombre y el número de tu clínica o trabajador de salud más cercano", "Una lista de medicinas y dosis", "Nada; te vas a acordar"], answer: 1, why: "En una emergencia, lo que necesitas de inmediato son las señales y a quién llamar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 8, 11, 13, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Fuente de agua", objective: "O1", notYet: "No eligió ninguna fuente, o eligió una fuente riesgosa sin dar una razón.", meets: "Fuentes ordenadas con razones; la más segura elegida para beber y una de reserva nombrada.", exceeds: "También anota qué hace riesgosa cada fuente (baños, animales, sin tapa) y a quién avisar si una fuente está rota o sucia." },
      { name: "Hacer más segura el agua", objective: "O2", notYet: "Ningún método de tratamiento, o un método al que le faltan pasos (sin tiempo de hervor, sin tiempo de espera de la etiqueta).", meets: "Hervir o un producto de cloro, dejando asentar primero el agua turbia, con cada paso y la regla de la etiqueta.", exceeds: "También planea un método de reserva, y el cloro se guarda fuera del alcance de los niños." },
      { name: "Guardar y servir", objective: "O3", notYet: "Recipiente abierto, o todavía se permite meter vasos.", meets: "Un recipiente limpio y tapado, levantado del piso, del que se vierte o con llave, lavado seguido.", exceeds: "El agua de beber se guarda separada del agua para lavar, y todos en casa conocen la regla de no meter nada." },
      { name: "Lavado de manos", objective: "O4", notYet: "No hay lugar para lavarse las manos o no hay jabón; faltan los momentos clave.", meets: "Un lugar con agua y jabón cerca del baño o de la cocina, y los momentos clave escritos.", exceeds: "Lugares cerca del baño y de la cocina, y a cada miembro de la familia se le enseñó el lavado de 20 segundos." },
      { name: "Baño y heces de los niños", objective: "O5", notYet: "Heces dejadas al aire libre o ningún plan para las heces de los niños.", meets: "El baño se mantiene limpio y tapado, y las heces de los niños van siempre a él.", exceeds: "La limpieza se reparte entre los miembros de la familia, con jabón al lado del baño." },
      { name: "Tarjeta de señales de peligro", objective: "O6", notYet: "Menos de cuatro señales de peligro, o ningún contacto de la clínica.", meets: "Al menos cuatro señales de peligro y el nombre y el número de la clínica o del trabajador de salud más cercano.", exceeds: "También cómo llegar allí y un plan para el dinero del transporte, sin dosis de medicinas en la tarjeta." }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Hogares que tratan toda el agua de beber y la guardan tapada 30 días después (encuesta de seguimiento)",
      "Hogares con un lugar para lavarse las manos con jabón 30 días después",
      "Menos episodios de diarrea en niños pequeños, según lo informado por las familias o los agentes comunitarios de salud durante la siguiente temporada",
      "Llegada más rápida a la clínica por diarrea con señales de peligro, según lo informado por los agentes comunitarios de salud"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Jabón, un recipiente para agua con tapa, y un bidón o una botella para un lugar de lavado de manos",
      "Una olla para hervir agua, o un producto de cloro vendido para agua de beber con su etiqueta",
      "Papel y lápiz para el plan y la tarjeta de señales de peligro",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Funciona bien con grupos de mujeres, clubes de madres, escuelas, grupos religiosos y visitas de agentes comunitarios de salud; hagan juntos la prueba inicial.",
      "Construyan juntos un lugar para lavarse las manos durante la Lección 4; es la parte que los estudiantes recuerdan mejor.",
      "Invita al agente comunitario de salud o a la enfermera de la clínica local a la sesión sobre señales de peligro y SRO.",
      "No des dosis de medicinas ni consejos de tratamiento; envía todas las preguntas sobre tratamiento a la clínica, al agente comunitario de salud o al ministerio de salud.",
      "En un brote de cólera, usa los mensajes actuales del ministerio de salud y la ubicación de los centros de tratamiento.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila Todavía no a la vez."
    ]
  }
};
