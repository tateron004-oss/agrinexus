"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-clean-cooking.js). See scripts/koachlearn-courses/README.md, "Translations".

const WHO_HAP = { name: "OMS (Organización Mundial de la Salud), nota descriptiva: Contaminación del aire doméstico (combustibles contaminantes, efectos en la salud, combustibles limpios, queroseno)", url: "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health" };
const WHO_BURNS = { name: "OMS, nota descriptiva: Quemaduras (primeros auxilios y prevención en casa)", url: "https://www.who.int/news-room/fact-sheets/detail/burns" };
const WHO_CHEST = { name: "OMS: Clean Household Energy Solutions Toolkit (combustibles limpios, de transición y contaminantes)", url: "https://www.who.int/tools/clean-household-energy-solutions-toolkit" };
const CCA = { name: "Clean Cooking Alliance (alianza internacional por la cocina limpia)", url: "https://www.cleancooking.org/" };

module.exports = {
  id: "afr-clean-cooking-es",
  lang: "es",
  translationOf: "afr-clean-cooking",
  category: "Africa: Life and Work",
  name: "Cocina limpia: estufas más seguras y cocinas sin humo",
  skills: "Explicar cómo el humo de la cocina daña la salud, Reducir el humo en la cocina desde hoy, Usar el fuego, el carbón, el gas y el queroseno con seguridad, Comparar estufas y combustibles más limpios, Calcular el costo de cambiar, Escribir un plan de seguridad y de cambio para la cocina",
  outcome: "hacer tu cocina más segura y con menos humo: explicar cómo el humo daña a tu familia, reducir el humo hoy con lo que tienes, usar el fuego, el carbón, el gas y el queroseno con seguridad, comparar estufas y combustibles más limpios por costo y seguridad, y escribir un plan que tu familia acepte.",
  about: [
    "Este curso es para cualquier persona que cocina con leña, carbón o queroseno, en casa o en un pequeño negocio de comida, en pueblos y ciudades de toda África: madres, padres, abuelas, hijos mayores que ayudan a cocinar y vendedoras de comida.",
    "El capítulo 1 trata del humo y la seguridad: cómo el humo de la cocina daña la salud, cómo reducirlo hoy con lo que ya tienes y cómo mantenerte seguro con el fuego, el carbón, el gas y el queroseno. El capítulo 2 trata del cambio a una cocina más limpia: comparar estufas y combustibles, calcular el costo y escribir un plan para la cocina con tu familia.",
    "Este curso sigue los consejos de la Organización Mundial de la Salud (OMS). No recomienda ninguna marca ni ningún vendedor. Los precios de estufas y combustibles cambian y son distintos en cada lugar; todas las cifras del curso son ejemplos, así que usa tus propios precios. Cada lección dura unos cinco minutos. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de una página de seguridad y de cambio para la cocina de tu hogar o de tu negocio de comida (o un ejemplo, como una familia de Kisumu que cocina en un jiko de carbón, una vendedora de comida de Lagos que usa leña o una familia de Uagadugú que cocina sobre tres piedras): con qué cocinas ahora y cuánto cuesta cada mes; tres pasos para reducir el humo esta semana; tus reglas de seguridad para el fuego, el carbón, el gas o el queroseno y los niños; dos opciones más limpias comparadas por costo, suministro de combustible y seguridad; tu elección, cómo la vas a pagar y la fecha en que vas a cambiar; y quién de la familia estuvo de acuerdo.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas que cocinan para un hogar o un pequeño negocio de comida en Kenia, Nigeria, Ghana, Burkina Faso, Senegal, Camerún, Egipto y en toda África, sobre todo con leña, carbón o queroseno. Muchas son mujeres y niñas que también recogen el combustible, y muchas tienen un teléfono básico y poco dinero.",
    startingPoint: "La mayoría cocina sobre un fuego abierto, tres piedras, una estufa de carbón o una estufa de queroseno, a menudo dentro de una cocina pequeña con poco aire. Muchas saben que el humo les pica en los ojos, pero no lo relacionan con las enfermedades del pecho en los niños. Pocas han comparado lo que gastan en combustible cada mes con el costo de una estufa más limpia, y algunas le tienen miedo al gas.",
    gap: "La OMS calcula que unos 2.1 mil millones de personas en el mundo cocinan con combustibles y estufas contaminantes, y que la contaminación del aire doméstico causa millones de muertes cada año; las mujeres y los niños pequeños son los más expuestos. El fuego abierto, el carbón y el queroseno también causan quemaduras, intoxicaciones por monóxido de carbono y envenenamientos de niños. Quienes reducen el humo, cocinan con seguridad y planean un cambio protegen la salud de su familia y muchas veces ahorran tiempo y dinero.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada término se explica",
      "Presupuesto: muy limitado; el curso nunca da precios reales, solo ejemplos, y cada participante usa los precios de su zona",
      "El suministro de combustible cambia según el lugar: el gas, la electricidad y las estufas mejoradas no están en todas partes, así que cada quien elige lo que le sirve",
      "Seguridad: nada de trabajos en tuberías de gas, cables eléctricos ni en la red eléctrica; se compra a vendedores autorizados y se siguen las instrucciones del fabricante",
      "Ningún consejo de tratamiento médico: las quemaduras y los problemas para respirar se atienden en la clínica"
    ],
    prerequisites: "Ninguno. Saber sumar y multiplicar un poco ayuda en la lección 5; sirve la calculadora del teléfono."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "En una cocina que usa leña, carbón o queroseno", action: "explicar cómo el humo de la cocina daña la salud y a quién perjudica más", standard: "nombrando al menos tres efectos en la salud y a las personas más expuestas" },
    { id: "O2", condition: "Usando la estufa y el combustible que tienes ahora", action: "enumerar pasos que reducen el humo en tu cocina esta semana", standard: "con al menos tres pasos que cuestan poco o nada" },
    { id: "O3", condition: "Cuando cocinas con fuego, carbón, gas o queroseno", action: "seguir reglas de seguridad que evitan quemaduras, intoxicación por monóxido de carbono, incendios de gas y envenenamiento con queroseno", standard: "eligiendo la acción segura en al menos 4 de 5 situaciones" },
    { id: "O4", condition: "Con dos o más opciones de estufa y combustible disponibles donde vives", action: "comparar estufas y combustibles más limpios por humo, costo, suministro de combustible y seguridad", standard: "con una razón correcta para la opción que eliges" },
    { id: "O5", condition: "Usando tu propio gasto en combustible y los precios de tu zona", action: "calcular tu costo mensual de combustible y compararlo con el costo de una opción más limpia", standard: "con las cuentas correctas y los riesgos de pago nombrados" },
    { id: "O6", condition: "Con tu familia o tu negocio", action: "escribir un plan de seguridad y de cambio para la cocina que tu familia acepte", standard: "con todas las partes completas y una fecha para cambiar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El humo y la seguridad en la cocina",
      lessons: [
        {
          title: "Cómo el humo de la cocina daña a tu familia",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explicar cómo el humo de la cocina daña la salud y a quién perjudica más.",
          text: [
            "El humo de la leña, el carbón, los restos de cosecha, el estiércol y el queroseno está lleno de partículas diminutas y de gases. No puedes ver la mayoría, pero llegan muy dentro de los pulmones. A esto se le llama contaminación del aire doméstico.",
            "La OMS dice que la contaminación del aire doméstico causa neumonía y otras infecciones del pecho en los niños, y derrames cerebrales, enfermedades del corazón, enfermedades pulmonares crónicas y cáncer de pulmón en los adultos. También se relaciona con el bajo peso al nacer y con enfermedades de los ojos. La OMS calcula que unos 2.1 mil millones de personas en el mundo cocinan con combustibles y estufas contaminantes, la mayoría en África y Asia.",
            "Las mujeres y los niños pequeños respiran más humo, porque pasan más tiempo cerca del fuego, y muchas veces la madre cocina con el bebé cargado en la espalda. Las niñas y las mujeres también pierden horas recogiendo leña, tiempo que podría ser para la escuela, el trabajo o el descanso.",
            "El humo que no ves también hace daño. Olor a humo, ojos que pican, tos mientras cocinas y paredes o techo negros son señales de que tu familia respira demasiado humo."
          ],
          words: [["Contaminación del aire doméstico", "humo y gases dentro y alrededor de la casa, sobre todo por cocinar, calentar e iluminar con combustibles contaminantes."], ["Combustibles contaminantes", "combustibles que hacen mucho humo al quemarse en estufas sencillas: leña, carbón vegetal, restos de cosecha, estiércol, carbón mineral y queroseno."], ["Neumonía", "una infección grave del pecho; es una de las principales causas de muerte en los niños pequeños."]],
          slides: [
            { title: "Qué hay en el humo", bullets: ["Partículas diminutas y gases", "Llegan muy dentro de los pulmones", "No puedes ver la mayoría"] },
            { title: "Cómo daña (OMS)", bullets: ["Niños: neumonía e infecciones del pecho", "Adultos: derrame cerebral, enfermedades del corazón y del pulmón, cáncer de pulmón", "Relacionado con bajo peso al nacer y enfermedades de los ojos"] },
            { title: "Quién respira más humo", bullets: ["Las mujeres que cocinan", "Los bebés en la espalda y los niños pequeños", "Las niñas que recogen leña pierden tiempo de escuela"] },
            { title: "Señales de demasiado humo", bullets: ["Ojos que pican, tos mientras cocinas", "Paredes o techo negros", "Olor a humo en la ropa"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Observa tu cocina durante una comida. Anota cuánto tiempo arde el fuego, quién está cerca, si hay un bebé o un niño pequeño y las señales de humo que ves. Escribe tres maneras en que el humo podría dañar a tu familia.",
          youCanNow: "explicar cómo el humo de la cocina daña la salud y quién en tu casa respira más humo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué enfermedad de los niños pequeños relaciona la OMS con el humo de la cocina?", options: ["Neumonía e infecciones del pecho", "Huesos rotos", "Dolor de muelas", "Varicela"], answer: 0, why: "La contaminación del aire doméstico causa infecciones respiratorias como la neumonía." },
            { objective: "O1", q: "¿Quién respira normalmente más humo de la cocina?", options: ["Las visitas", "Los hombres que trabajan en el campo", "Las mujeres que cocinan y los niños pequeños que están cerca", "Nadie; el humo sube"], answer: 2, why: "Las mujeres y los niños pequeños pasan más tiempo cerca del fuego." }
          ]
        },
        {
          title: "Reducir el humo hoy con lo que tienes",
          objectives: ["O2"],
          minutes: 5,
          goal: "Enumerar pasos que reducen el humo en tu cocina esta semana, con la estufa que tienes ahora.",
          text: [
            "Una estufa nueva es lo que más ayuda, pero puedes reducir el humo desde hoy. Deja entrar el aire y salir el humo: cocina afuera o bajo un techo abierto cuando puedas, mantén puertas y ventanas abiertas mientras cocinas y, si puedes, haz una ventana, una abertura bajo el techo o una salida de humo cerca del fuego.",
            "Quema menos y quema más limpio. Usa leña seca: la leña mojada hace mucho más humo. Parte la leña en trozos delgados y métela poco a poco. Tapa la olla, remoja los frijoles y el maíz antes de cocinarlos y apaga el fuego en cuanto la comida esté lista.",
            "Mantén lejos a los niños. Deja a los bebés y a los niños pequeños fuera de la cocina mientras arde el fuego, y no cocines con el bebé en la espalda si otra persona puede cargarlo.",
            "Nunca quemes plástico, caucho ni madera pintada: su humo es venenoso."
          ],
          steps: ["Deja entrar el aire: cocina afuera o abre puertas y ventanas.", "Usa leña seca y partida, y métela poco a poco.", "Tapa las ollas; remoja antes los frijoles y el maíz.", "Apaga el fuego cuando la comida esté lista.", "Mantén a los bebés y a los niños pequeños lejos del humo."],
          words: [["Ventilación", "dejar entrar aire fresco y salir el aire con humo."], ["Abertura bajo el techo", "un espacio entre la parte de arriba de la pared y el techo que deja salir el humo."]],
          slides: [
            { title: "Que entre el aire y salga el humo", bullets: ["Cocina afuera o bajo un techo abierto", "Abre puertas y ventanas", "Haz una ventana o una abertura bajo el techo cerca del fuego"] },
            { title: "Quema menos, quema más limpio", bullets: ["Leña seca y delgada", "Ollas tapadas; remoja frijoles y maíz", "Apaga el fuego cuando la comida esté lista"] },
            { title: "Protege a los niños", bullets: ["Mantenlos fuera de la cocina con humo", "Que otra persona cargue al bebé", "Nunca quemes plástico ni caucho"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Elige tres pasos de esta lección que puedas empezar esta semana sin dinero o con muy poco. Escríbelos, pruébalos durante tres días y anota qué cambió (menos humo, menos leña, menos tiempo).",
          youCanNow: "reducir el humo en tu cocina con pasos que cuestan poco o nada.",
          quickCheck: [
            { objective: "O2", q: "¿Qué leña hace menos humo?", options: ["Leña verde y mojada", "Troncos grandes metidos todos a la vez", "Madera pintada de una puerta vieja", "Trozos secos y delgados metidos poco a poco"], answer: 3, why: "La leña seca y delgada se quema mejor y hace menos humo." },
            { objective: "O2", q: "¿Qué paso reduce el humo y el combustible al mismo tiempo?", options: ["Cocinar con la olla tapada", "Dejar el fuego encendido después de cocinar", "Cerrar las ventanas", "Quemar plástico para prender el fuego"], answer: 0, why: "La tapa cocina más rápido, así que quemas menos combustible y haces menos humo." }
          ]
        },
        {
          title: "Seguridad con el fuego, el carbón, el gas y el queroseno",
          objectives: ["O3"],
          minutes: 6,
          goal: "Seguir reglas de seguridad que evitan quemaduras, intoxicación por monóxido de carbono, incendios de gas y envenenamiento con queroseno.",
          text: [
            "Quemaduras: mantén la estufa firme y, si puedes, levantada del suelo, con una protección alrededor del fuego abierto. Gira los mangos de las ollas hacia dentro. Mantén a los niños lejos de donde se cocina. Si alguien se quema, los primeros auxilios de la OMS son: detener lo que quema, enfriar la quemadura con agua fresca corriendo (unos 20 minutos para quemaduras pequeñas), quitar anillos y ropa apretada y cubrirla con un paño limpio. No le pongas mantequilla, aceite, pasta de dientes ni pomadas tradicionales. Ve a la clínica si la quemadura es grande o profunda, o si está en la cara, las manos, los pies o las partes íntimas.",
            "Carbón: una estufa de carbón encendida suelta monóxido de carbono, un gas que no se ve ni se huele y que puede matar. Nunca metas una estufa de carbón encendida en un cuarto cerrado para cocinar o para calentar el cuarto, y nunca duermas con una dentro. Dolor de cabeza, mareo y sueño cerca de la estufa son señales de alarma: saca a todos al aire libre.",
            "Gas (GLP): compra los cilindros a un vendedor autorizado, mantén el cilindro de pie y revisa la manguera y el regulador. Si huele a gas: no prendas cerillos ni enciendas ningún interruptor, cierra la válvula del cilindro, abre puertas y ventanas y saca a la gente afuera. Cierra la válvula después de cocinar.",
            "Queroseno: la OMS desaconseja el queroseno para cocinar y para alumbrar, y tragar queroseno es una de las principales causas de envenenamiento en los niños. Guárdalo en un envase cerrado y con etiqueta, nunca en una botella de bebida, y fuera del alcance de los niños. Si un niño lo traga, ve a la clínica ya."
          ],
          steps: ["Estufa firme y niños lejos; mangos hacia dentro.", "Nunca uses carbón en un cuarto cerrado ni mientras duermes.", "Gas: vendedor autorizado, cilindro de pie, válvula cerrada al terminar.", "Si huele a gas: sin llamas ni interruptores, cierra la válvula, abre, sal.", "Queroseno: envase con etiqueta, nunca en botella de bebida, fuera de alcance."],
          words: [["Monóxido de carbono", "un gas venenoso que sale al quemar combustible; no se ve ni se huele."], ["GLP", "gas licuado de petróleo: el gas de cocina que se vende en cilindros."], ["Regulador", "la pieza encima del cilindro de gas que controla el gas que va a la estufa."]],
          slides: [
            { title: "Quemaduras", bullets: ["Estufa firme, mangos hacia dentro, niños lejos", "Primeros auxilios: agua fresca corriendo unos 20 minutos, paño limpio", "Nada de mantequilla, aceite ni pomadas; quemaduras grandes a la clínica"] },
            { title: "Carbón", bullets: ["Suelta monóxido de carbono: sin color, sin olor", "Nunca en un cuarto cerrado; nunca mientras duermes", "Dolor de cabeza o mareo cerca: sal al aire libre"] },
            { title: "Gas (GLP)", bullets: ["Vendedor autorizado; cilindro de pie", "Si huele a gas: sin llama ni interruptor, cierra la válvula, abre, sal", "Cierra la válvula después de cocinar"] },
            { title: "Queroseno", bullets: ["La OMS lo desaconseja", "Envase con etiqueta, nunca en botella de bebida", "Si un niño lo traga: a la clínica ya"] }
          ],
          sources: [WHO_BURNS, WHO_HAP],
          tryIt: "Recorre tu cocina y escribe cinco reglas de seguridad para tu casa: una para las quemaduras y los niños, una para el carbón, una para el gas o el queroseno (el que uses), una para guardar el combustible y una para qué hacer en una emergencia, con la clínica más cercana.",
          youCanNow: "cocinar con seguridad con fuego, carbón, gas y queroseno, y actuar rápido si algo sale mal.",
          quickCheck: [
            { objective: "O3", q: "En Uagadugú hace frío de noche. ¿Es seguro meter la estufa de carbón encendida en el dormitorio cerrado?", options: ["Sí, si la puerta está cerrada", "Sí, si el carbón es de buena calidad", "Sí, si duermes lejos de ella", "No: suelta monóxido de carbono, que puede matar"], answer: 3, why: "El monóxido de carbono se acumula en un cuarto cerrado y puede matar a quienes duermen." },
            { objective: "O3", q: "Huele a gas en la cocina. ¿Qué haces primero?", options: ["Prender un cerillo para encontrar la fuga", "Cerrar la válvula y abrir puertas y ventanas", "Encender la luz", "No hacer caso"], answer: 1, why: "Nada de llamas ni interruptores; corta el gas y déjalo salir." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El humo y la seguridad en la cocina",
        questions: [
          { objective: "O1", q: "¿Qué enfermedad de los adultos relaciona la OMS con la contaminación del aire doméstico?", options: ["Derrame cerebral y enfermedades del corazón", "Malaria", "Tifoidea", "Huesos rotos"], answer: 0, why: "La OMS menciona derrame cerebral, enfermedades del corazón, enfermedades pulmonares y cáncer de pulmón." },
          { objective: "O1", q: "Además del humo, ¿por qué salen perdiendo las niñas cuando se cocina con leña?", options: ["Ganan más dinero", "Pierden tiempo recogiendo leña, y eso les puede costar la escuela", "Duermen más", "No les afecta"], answer: 1, why: "Recoger combustible quita tiempo de la escuela y del trabajo." },
          { objective: "O2", q: "¿Qué paso reduce hoy el humo en la cocina?", options: ["Cerrar todas las ventanas", "Usar leña mojada", "Cocinar afuera o abrir puertas y ventanas", "Quemar plástico viejo"], answer: 2, why: "La ventilación deja salir el humo." },
          { objective: "O3", q: "Un niño en Yaundé se quema con sopa caliente. ¿Cuáles son los primeros auxilios correctos?", options: ["Ponerle mantequilla", "Cubrirla con pasta de dientes", "Reventar las ampollas", "Enfriarla con agua fresca corriendo y cubrirla con un paño limpio"], answer: 3, why: "Los primeros auxilios de la OMS son agua fresca corriendo y una cubierta limpia; nada de mantequilla ni pomadas." },
          { objective: "O3", q: "¿Dónde se debe guardar el queroseno?", options: ["En un envase cerrado y con etiqueta, fuera del alcance de los niños", "En una botella vieja de refresco", "En el suelo junto a la cama", "En una taza sobre la mesa"], answer: 0, why: "Los niños beben queroseno de botellas de bebida y de tazas; es una de las principales causas de envenenamiento infantil." }
        ]
      }
    },
    {
      name: "Capítulo 2: El cambio a una cocina más limpia",
      lessons: [
        {
          title: "Estufas y combustibles más limpios",
          objectives: ["O4"],
          minutes: 6,
          goal: "Comparar estufas y combustibles más limpios por humo, costo, suministro de combustible y seguridad.",
          text: [
            "La OMS menciona las opciones más limpias: solar, electricidad, biogás, GLP (gas de cocina), gas natural, combustibles de alcohol como el etanol y estufas de biomasa que cumplen las metas de emisiones de la OMS. La OMS desaconseja el queroseno y el carbón mineral sin procesar.",
            "Las estufas mejoradas de leña o de carbón (también llamadas estufas eficientes) queman menos combustible y hacen menos humo que las tres piedras o el fuego abierto. Son un paso adelante, pero la mayoría todavía hace mucho humo, así que mantén la cocina bien ventilada. Pregunta al vendedor si el modelo ha sido probado.",
            "Cocinar con gas (GLP) o con electricidad casi no hace humo en la cocina. Una olla de presión eléctrica o una parrilla eléctrica puede ser barata de usar donde la luz es confiable, y sirve muy bien para frijoles y guisos. El biogás le conviene a una finca con ganado y espacio para un biodigestor. Una olla de calor retenido (una canasta o caja bien aislada) termina de cocinar sin más combustible y sirve con cualquier estufa.",
            "Elige lo que le sirve a tu lugar: ¿Se vende el combustible cerca de ti todo el año? ¿Puedes pagar las recargas? ¿Es seguro para tu casa? En muchas ciudades el gas o la electricidad pueden servir; en pueblos lejos del suministro, una estufa mejorada con buena ventilación puede ser el primer paso."
          ],
          steps: ["Haz una lista de las estufas y combustibles que se venden cerca de ti.", "Para cada uno, anota el humo (mucho, algo, casi nada).", "Anota el suministro de combustible: siempre, a veces, casi nunca.", "Anota lo que necesita para ser seguro y el costo inicial y mensual.", "Elige la opción más limpia que puedas conseguir y pagar."],
          words: [["Estufa mejorada", "una estufa de leña o de carbón hecha para quemar menos combustible y hacer menos humo que el fuego abierto."], ["Biogás", "gas que se hace con estiércol de animales y restos de plantas en un tanque cerrado llamado biodigestor."], ["Olla de calor retenido", "una canasta o caja aislada que mantiene una olla caliente cocinando sin más combustible."]],
          slides: [
            { title: "Las opciones más limpias (OMS)", bullets: ["Solar, electricidad, biogás, GLP, gas natural, etanol", "Estufas de biomasa que cumplen las metas de emisiones de la OMS", "La OMS desaconseja el queroseno y el carbón mineral"] },
            { title: "Estufas mejoradas de leña y de carbón", bullets: ["Menos combustible y menos humo que el fuego abierto", "Todavía hacen humo: sigue ventilando", "Pregunta si el modelo ha sido probado"] },
            { title: "Gas y electricidad", bullets: ["Casi nada de humo en la cocina", "Olla de presión eléctrica: buena para frijoles y guisos", "La olla de calor retenido ahorra combustible con cualquier estufa"] },
            { title: "Elige lo que te sirve", bullets: ["¿Se vende el combustible cerca todo el año?", "¿Puedes pagar las recargas?", "¿Es seguro para tu casa?"] }
          ],
          sources: [WHO_HAP, WHO_CHEST, CCA],
          tryIt: "Pregunta en el mercado, la tienda o el vendedor de gas de tu zona qué estufas y combustibles se venden cerca de ti. Haz una tabla pequeña de dos o tres opciones con cuatro columnas: humo, suministro de combustible, lo que necesita para ser segura y costo (usa los precios reales que te digan).",
          youCanNow: "comparar estufas y combustibles más limpios por humo, costo, suministro de combustible y seguridad, y elegir uno que te sirva.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál de estos menciona la OMS como combustible limpio para cocinar?", options: ["Queroseno", "Carbón mineral sin procesar", "GLP (gas de cocina)", "Basura de plástico"], answer: 2, why: "La OMS incluye el GLP, la electricidad, el biogás, la energía solar y el etanol entre los combustibles limpios." },
            { objective: "O4", q: "Una familia de un pueblo lejos de cualquier vendedor de gas quiere menos humo ya. ¿Cuál es un primer paso sensato?", options: ["Una estufa mejorada con buena ventilación", "Comprar un cilindro de gas que no pueden recargar", "Cambiar al queroseno", "Cocinar adentro con las ventanas cerradas"], answer: 0, why: "Una estufa mejorada con ventilación reduce el humo donde todavía no llegan combustibles más limpios." }
          ]
        },
        {
          title: "Calcular el costo y pagar el cambio",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular tu costo mensual de combustible y compararlo con el costo de una opción más limpia.",
          text: [
            "Muchas familias creen que cocinar limpio es muy caro, pero nunca suman lo que ya gastan. Anota lo que gastas en leña, carbón o queroseno en una semana normal y multiplícalo por 4 para tener un costo mensual aproximado. Si recoges leña, cuenta también las horas que le dedicas.",
            "Para la opción más limpia, cuenta dos costos: el costo inicial (la estufa, el cilindro y el regulador) y el costo mensual (las recargas o la electricidad de cada mes). Luego compara el costo mensual con lo que gastas ahora, y calcula cuántos meses tarda el ahorro, si lo hay, en recuperar el costo inicial.",
            "Ejemplo con números inventados, no precios reales: una familia de Kisumu gasta KES 300 por semana en carbón, unos KES 1,200 al mes. Una opción más limpia cuesta KES 900 al mes y KES 3,600 al inicio. Ahorran KES 300 al mes, así que recuperan el costo inicial en 12 meses (3,600 dividido entre 300). Usa tus propios precios.",
            "Formas de pagar: ahorra un poco cada semana, compra en grupo con un grupo de ahorro (chama, tontina o esusu) o pregunta por planes de gas o de estufa de pago por uso que se ofrezcan donde vives. Antes de firmar, pregunta el precio total, qué pasa si te atrasas en un pago y quién lo repara. No le pagues a un desconocido que promete una estufa gratis a cambio de una cuota, y compra gas solo a vendedores autorizados."
          ],
          steps: ["Anota tu gasto semanal en combustible y multiplícalo por 4.", "Anota el costo inicial y el costo mensual de una opción más limpia.", "Resta para hallar el ahorro mensual (o el costo extra).", "Divide el costo inicial entre el ahorro mensual para hallar los meses de recuperación.", "Elige cómo pagar y revisa las condiciones."],
          words: [["Costo inicial", "el dinero que pagas una sola vez al principio, por ejemplo por la estufa."], ["Costo mensual", "el dinero que pagas una y otra vez, por ejemplo las recargas de combustible."], ["Recuperar", "el tiempo que tarda el ahorro en cubrir lo que pagaste al principio."], ["Pago por uso", "pagar en montos pequeños, muchas veces con dinero móvil, a medida que usas el combustible o la estufa."]],
          slides: [
            { title: "¿Cuánto gastas ahora?", bullets: ["Gasto semanal en combustible x 4 = costo mensual", "Cuenta también las horas recogiendo leña"] },
            { title: "Los dos costos del cambio", bullets: ["Inicial: estufa, cilindro, regulador", "Mensual: recargas o electricidad cada mes"] },
            { title: "Ejemplo (números inventados)", bullets: ["Carbón KES 1,200 al mes; opción más limpia KES 900", "Ahorro de KES 300 al mes", "Inicial KES 3,600 / 300 = 12 meses para recuperarlo"] },
            { title: "Pagar con seguridad", bullets: ["Ahorra cada semana o compra con tu grupo de ahorro", "Pregunta el precio total y las reglas si te atrasas", "Nada de cuotas por \"estufas gratis\"; gas solo de vendedores autorizados"] }
          ],
          tryIt: "Anota lo que tu familia gasta en combustible para cocinar en una semana normal (en tu moneda, por ejemplo NGN, GHS, XOF, XAF o EGP) y calcula el mes. Luego usa los precios reales que encontraste en la lección 4 para calcular el ahorro mensual y los meses de recuperación de una opción más limpia.",
          youCanNow: "calcular cuánto te cuesta el combustible para cocinar cada mes y si una opción más limpia se recupera.",
          quickCheck: [
            { objective: "O5", q: "Solo un ejemplo: una familia gasta GHS 50 por semana en carbón. ¿Cuánto es eso al mes, más o menos?", options: ["GHS 50", "GHS 100", "GHS 500", "GHS 200"], answer: 3, why: "50 por semana por 4 semanas son unos 200 al mes." },
            { objective: "O5", q: "Un hombre llama y ofrece una \"estufa gratis del gobierno\" si primero mandas una cuota por dinero móvil. ¿Qué es esto?", options: ["Una buena oferta", "Una señal de estafa; no pagues", "Un impuesto normal", "Un depósito obligatorio"], answer: 1, why: "Pedir una cuota para recibir algo gratis es una señal común de estafa." }
          ]
        },
        {
          title: "Tu plan de seguridad y de cambio para la cocina",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escribir un plan de seguridad y de cambio para la cocina que tu familia acepte.",
          text: [
            "Un plan convierte lo que aprendiste en acción. Tiene seis partes: con qué cocinas ahora y su costo mensual; tres pasos para reducir el humo esta semana; tus reglas de seguridad; dos opciones más limpias comparadas; tu elección, cómo vas a pagar y la fecha del cambio; y quién estuvo de acuerdo.",
            "Habla con toda la familia. La persona que paga y la persona que cocina pueden ver las cosas de forma distinta. Cuenta lo que el humo le hace al pecho de los niños, el dinero que calculaste y el tiempo que se ahorra al no recoger leña. Pregunta a todos qué les preocupa, como el miedo al gas o el sabor de la comida, y respóndelo.",
            "Si tienes un negocio de comida, como un chop bar en Kumasi, un mama put en Lagos o una dibiterie en Dakar, incluye a tus clientes y a tu personal: menos humo significa un lugar más limpio y trabajadores más sanos, y el combustible suele ser uno de tus mayores gastos.",
            "Pega el plan en la pared. Después de un mes, revisa: ¿hay menos humo y cuánto costó el combustible? Cambia el plan si hace falta."
          ],
          steps: ["Escribe las seis partes del plan.", "Coméntalo con la familia o con el personal.", "Responde a sus preocupaciones.", "Acuerden la elección, el pago y la fecha del cambio.", "Revisa después de un mes y ajusta."],
          words: [["Plan de cambio", "un plan escrito para pasar a una forma de cocinar más limpia y más segura."]],
          slides: [
            { title: "Las seis partes del plan", bullets: ["Ahora: combustible y costo mensual", "Tres pasos contra el humo; reglas de seguridad", "Dos opciones comparadas; elección, pago, fecha; quién aceptó"] },
            { title: "Acuérdenlo juntos", bullets: ["Quien cocina y quien paga pueden pensar distinto", "Comparte datos de salud, dinero y tiempo", "Responde a las preocupaciones, como el miedo al gas"] },
            { title: "Para negocios de comida", bullets: ["Lugar más limpio, personal más sano", "El combustible suele ser un gasto grande"] },
            { title: "Revisa después de un mes", bullets: ["¿Hay menos humo?", "¿Cuánto costó el combustible?", "Cambia el plan si hace falta"] }
          ],
          tryIt: "Tarea final: escribe tu plan de una página de seguridad y de cambio para la cocina con las seis partes. Coméntalo con tu familia o tu personal y escribe los nombres de quienes estuvieron de acuerdo.",
          youCanNow: "escribir un plan de seguridad y de cambio para la cocina y acordarlo con tu familia.",
          quickCheck: [
            { objective: "O6", q: "¿Qué va en un plan de cambio para la cocina?", options: ["Una fecha para cambiar y cómo vas a pagar", "Solo el color de la estufa", "Nada sobre seguridad", "Una promesa de cocinar adentro con carbón"], answer: 0, why: "El plan necesita una elección, una forma de pago y una fecha para que el cambio ocurra." },
            { objective: "O6", q: "La persona que cocina quiere gas, pero a la persona que paga le preocupa el costo. ¿Qué ayuda más?", options: ["No hacer caso a la preocupación", "Comprarlo sin decirle", "Mostrar el costo mensual de combustible que calculaste y los datos de salud", "Rendirse"], answer: 2, why: "Los números reales y los datos de salud ayudan a que la familia se ponga de acuerdo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: El cambio a una cocina más limpia",
        questions: [
          { objective: "O4", q: "¿Qué casi no hace humo en la cocina?", options: ["Tres piedras", "Estufa de queroseno", "Fuego abierto", "Olla de presión eléctrica"], answer: 3, why: "Cocinar con electricidad o con gas casi no hace humo en la cocina." },
          { objective: "O4", q: "¿Qué hace una olla de calor retenido?", options: ["Hace gas con estiércol", "Mantiene una olla caliente cocinando sin más combustible", "Quema plástico de forma limpia", "Carga un teléfono"], answer: 1, why: "El aislamiento guarda el calor para que la comida termine de cocinarse sin más combustible." },
          { objective: "O5", q: "Solo un ejemplo: una opción más limpia ahorra XAF 5,000 al mes y cuesta XAF 30,000 al inicio. ¿En cuántos meses se recupera?", options: ["6 meses", "3 meses", "25 meses", "35 meses"], answer: 0, why: "30,000 dividido entre 5,000 es 6." },
          { objective: "O5", q: "Antes de firmar un plan de estufa de pago por uso, ¿qué debes preguntar?", options: ["Nada", "Solo el color", "El precio total y qué pasa si te atrasas en un pago", "La comida favorita del vendedor"], answer: 2, why: "El costo total y las reglas por atraso muestran el riesgo real." },
          { objective: "O6", q: "Después del cambio, ¿qué debe hacer la familia?", options: ["No volver a pensar en ello", "Revisar al mes el humo y el costo, y ajustar", "Volver al queroseno", "Tirar el plan"], answer: 1, why: "Revisar muestra si el plan funcionó y qué hay que cambiar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cocina limpia: estufas más seguras y cocinas sin humo",
    questions: [
      { objective: "O1", q: "La contaminación del aire doméstico viene sobre todo de:", options: ["Las bocinas de los carros", "Cocinar con combustibles contaminantes en estufas sencillas", "Los teléfonos celulares", "El agua para beber"], answer: 1, why: "El humo de la leña, el carbón, el estiércol y el queroseno es la fuente principal." },
      { objective: "O1", q: "¿Cuál es una señal de que tu familia respira demasiado humo?", options: ["Ojos que pican y tos mientras se cocina", "Paredes blancas y limpias", "Ropa sin olor", "Aire fresco en la cocina"], answer: 0, why: "Los ojos que pican, la tos y las paredes negras son señales de mucho humo." },
      { objective: "O1", q: "¿Por qué es arriesgado cocinar sobre un fuego abierto con el bebé en la espalda?", options: ["El bebé se aburre", "No es arriesgado", "El bebé respira mucho humo", "La comida se cocina más lento"], answer: 2, why: "Los bebés cerca del fuego respiran el humo y pueden tener infecciones del pecho." },
      { objective: "O2", q: "¿Qué reduce el humo gratis?", options: ["Cerrar la puerta", "Usar leña mojada", "Quemar caucho", "Abrir puertas y ventanas mientras cocinas"], answer: 3, why: "La ventilación deja salir el humo sin costo." },
      { objective: "O2", q: "Remojar los frijoles antes de cocinarlos ayuda porque:", options: ["Se cocinan más rápido, con menos combustible y menos humo", "Les agrega sal", "Hace más humo", "No sirve de nada"], answer: 0, why: "Cocinar menos tiempo significa menos combustible y menos humo." },
      { objective: "O2", q: "¿Qué no debes quemar nunca?", options: ["Leña seca", "Carbón en un espacio abierto", "Plástico y caucho", "Olotes de maíz"], answer: 2, why: "Quemar plástico y caucho suelta humo venenoso." },
      { objective: "O3", q: "El monóxido de carbono del carbón es peligroso porque:", options: ["Huele muy fuerte", "No se ve ni se huele, y puede matar", "Tiene color", "Solo afecta a las plantas"], answer: 1, why: "No da ningún aviso, así que la gente se puede intoxicar en cuartos cerrados." },
      { objective: "O3", q: "Los primeros auxilios de la OMS para una quemadura dicen:", options: ["Ponerle mantequilla", "Usar hielo", "Reventar las ampollas", "Enfriarla con agua fresca corriendo"], answer: 3, why: "Agua fresca corriendo durante unos 20 minutos es el consejo de la OMS para quemaduras pequeñas." },
      { objective: "O3", q: "Si huele a gas, NO debes:", options: ["Abrir las ventanas", "Cerrar la válvula del cilindro", "Prender un cerillo o encender un interruptor", "Sacar a la gente afuera"], answer: 2, why: "Una llama o una chispa puede hacer que el gas explote." },
      { objective: "O3", q: "Un niño en Kano tomó queroseno de una botella de refresco. La familia debe:", options: ["Ir a la clínica ya", "Esperar a ver qué pasa", "Darle aceite al niño", "Hacer que el niño vomite"], answer: 0, why: "El envenenamiento con queroseno necesita atención ya; la clínica decide el tratamiento." },
      { objective: "O4", q: "¿Qué desaconseja la OMS para cocinar?", options: ["GLP", "Electricidad", "Queroseno", "Biogás"], answer: 2, why: "La OMS desaconseja el queroseno y el carbón mineral sin procesar." },
      { objective: "O4", q: "Una estufa mejorada de carbón:", options: ["No hace nada de humo", "Usa menos combustible y hace menos humo, pero igual necesita ventilación", "Es lo mismo que un fuego abierto", "Se puede usar en un dormitorio cerrado"], answer: 1, why: "Las estufas mejoradas ayudan, pero la mayoría todavía hace humo y monóxido de carbono." },
      { objective: "O4", q: "El biogás le conviene más a:", options: ["Una finca con ganado y espacio para un biodigestor", "Un departamento sin animales", "Un puesto de mercado sin espacio", "Un carro"], answer: 0, why: "El biogás se hace con estiércol y restos de plantas en un biodigestor." },
      { objective: "O4", q: "Antes de elegir un combustible, la pregunta más importante es:", options: ["¿De qué color es la estufa?", "¿Se vende cerca de mí todo el año y puedo pagar las recargas?", "¿Qué piensan mis vecinos de la marca?", "¿La caja es grande?"], answer: 1, why: "Una estufa limpia solo ayuda si puedes seguir comprando su combustible." },
      { objective: "O5", q: "Para saber tu costo mensual de combustible, puedes:", options: ["Adivinar", "Multiplicar tu gasto semanal por 4", "Dividir entre 4", "Preguntarle a un desconocido"], answer: 1, why: "El gasto semanal por 4 da un costo mensual aproximado." },
      { objective: "O5", q: "Solo un ejemplo: ahorro mensual EGP 100, costo inicial EGP 800. ¿Meses para recuperarlo?", options: ["100", "900", "700", "8"], answer: 3, why: "800 dividido entre 100 es 8." },
      { objective: "O5", q: "¿Dónde debes comprar los cilindros de gas?", options: ["A un vendedor autorizado", "A cualquiera al lado del camino", "En un local de recarga sin letrero, de noche", "A un desconocido en internet que quiere el pago primero"], answer: 0, why: "Los vendedores autorizados siguen las reglas de seguridad para cilindros y recargas." },
      { objective: "O6", q: "¿Quién debe aceptar el plan de cambio para la cocina?", options: ["Solo el vendedor", "Nadie", "La familia, incluida la persona que cocina y la que paga", "Solo los niños"], answer: 2, why: "Todas las personas afectadas deben estar de acuerdo para que el plan funcione." },
      { objective: "O6", q: "Un buen plan de cambio incluye:", options: ["Ninguna fecha", "Solo el nombre de la marca", "Nada sobre seguridad", "Dos opciones comparadas, una elección, cómo pagar y una fecha de cambio"], answer: 3, why: "Estas partes hacen que el plan sea claro y se pueda cumplir." },
      { objective: "O6", q: "Una vendedora de comida de Dakar agrega a su plan un punto extra. ¿Cuál?", options: ["Menos humo para su personal y sus clientes, y su gasto en combustible", "El color de los platos", "Nada", "Más queroseno"], answer: 0, why: "Para un negocio, la salud del personal y el costo del combustible importan." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 8, 10, 13, 14, 15, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Por qué importa", objective: "O1", notYet: "No da ninguna razón de salud, o las razones son incorrectas.", meets: "Nombra al menos tres efectos del humo en la salud y quién en la casa respira más humo.", exceeds: "También nombra el tiempo perdido recogiendo combustible y a quién afecta." },
      { name: "Menos humo esta semana", objective: "O2", notYet: "Menos de tres pasos, o pasos que cuestan mucho.", meets: "Tres pasos que cuestan poco o nada, como ventilar, usar leña seca y tapar las ollas.", exceeds: "Los pasos ya se probaron y se anotó qué cambió." },
      { name: "Reglas de seguridad", objective: "O3", notYet: "Faltan reglas para el combustible que se usa, o hay una regla insegura.", meets: "Reglas claras para las quemaduras y los niños, y para los combustibles que usa la familia, con la clínica más cercana.", exceeds: "Incluye los pasos ante una fuga de gas o la regla del monóxido de carbono del carbón, y cómo guardar el combustible." },
      { name: "Opciones comparadas", objective: "O4", notYet: "Solo una opción, o ninguna comparación.", meets: "Dos opciones comparadas por humo, suministro de combustible, seguridad y costo, con una razón correcta para la elección.", exceeds: "Los precios vienen de vendedores reales de la zona y se comprobó el suministro de combustible." },
      { name: "Costo y pago", objective: "O5", notYet: "No hay costo mensual, o las cuentas están mal.", meets: "El costo mensual actual de combustible, los costos de la opción más limpia y una forma de pago, con las cuentas correctas.", exceeds: "Muestra los meses de recuperación y nombra las preguntas que hay que hacer antes de firmar." },
      { name: "Plan acordado", objective: "O6", notYet: "No hay fecha de cambio, o nadie más lo ha visto.", meets: "Las seis partes están completas, con una fecha de cambio y los nombres de quienes estuvieron de acuerdo.", exceeds: "Incluye una revisión al mes del humo y del costo." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Hogares que dicen usar al menos tres pasos contra el humo 30 días después (encuesta de seguimiento)",
      "Hogares que dicen no usar estufas de carbón en cuartos cerrados y guardar el queroseno de forma segura",
      "Hogares o negocios de comida que cambian a una estufa o un combustible más limpio en 6 meses",
      "Participantes que dicen gastar menos dinero o tiempo en combustible para cocinar"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono básico con calculadora, o papel y lápiz",
      "Precios locales de estufas y combustibles, reunidos por el participante o por quien facilita",
      "Si es posible, una estufa mejorada, una estufa de gas o una canasta de calor retenido para mostrar al grupo",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Buenos aliados: grupos de mujeres, grupos de ahorro, escuelas, clínicas, promotores de salud comunitaria y empresas locales de cocina limpia (no promuevas ninguna marca).",
      "Reúne precios reales de estufas y combustibles de la zona antes de la sesión; el curso solo usa números de ejemplo inventados.",
      "Una demostración al aire libre funciona bien: compara el humo de la leña mojada y la seca, o el de las tres piedras y una estufa mejorada.",
      "Seguridad con el gas: muestra cómo cerrar la válvula y revisar la manguera; nunca busques fugas con una llama. No dejes que los participantes trabajen en cables ni en tuberías de gas.",
      "Quemaduras y envenenamientos: enseña los primeros auxilios de la OMS y manda a los participantes a la clínica; no des consejos de tratamiento.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
