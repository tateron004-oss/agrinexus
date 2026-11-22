"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-nutrition-local-foods.js). See scripts/koachlearn-courses/README.md, "Translations".

const WHO_DIET = { name: "OMS, nota descriptiva: Alimentación sana (frutas y verduras, sal, azúcar y grasas)", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" };
const WHO_IYCF = { name: "OMS, nota descriptiva: Alimentación del lactante y del niño pequeño", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_ANAEMIA = { name: "OMS, nota descriptiva: Anemia (quién está en riesgo, alimentos ricos en hierro, alimentos que bloquean el hierro)", url: "https://www.who.int/news-room/fact-sheets/detail/anaemia" };
const WHO_FIVE_KEYS = { name: "OMS: Manual de las cinco claves para la inocuidad de los alimentos", url: "https://www.who.int/publications/i/item/9789241594639" };

module.exports = {
  id: "afr-nutrition-local-foods-es",
  lang: "es",
  translationOf: "afr-nutrition-local-foods",
  category: "Africa: Life and Work",
  name: "Buena nutrición con poco dinero y alimentos locales",
  skills: "Clasificar alimentos locales en grupos, Armar un plato equilibrado, Reducir la sal, el azúcar y el aceite y mantener los alimentos seguros, Comparar precios de alimentos para ver cuál rinde más, Alimentar a niños pequeños y a mujeres embarazadas o que amamantan, Escribir un plan semanal de comidas con poco dinero",
  outcome: "escribir un plan semanal de comidas para tu hogar que use alimentos locales de varios grupos cada día, que quepa en tu presupuesto para comida, que siga los consejos de la OMS sobre la sal, el azúcar y los alimentos seguros, y que dé a los niños pequeños y a las mujeres embarazadas o que amamantan lo que necesitan.",
  about: [
    "Este curso es para cualquier persona que compra o cocina para un hogar en África: madres y padres, abuelas, estudiantes que viven solos y personas que venden comida preparada. No necesitas dinero para alimentos especiales. Una buena nutrición viene de los frijoles, las hojas verdes, los granos, el pescado, los huevos y las frutas que ya hay en tu mercado.",
    "El capítulo 1 trata de conocer tus alimentos: los grupos de alimentos con ejemplos locales, cómo armar un plato equilibrado y cómo reducir la sal, el azúcar y el aceite manteniendo los alimentos seguros. El capítulo 2 trata de comer bien con poco dinero: comparar precios para ver qué rinde más, alimentar a quienes más lo necesitan y escribir un plan semanal de comidas.",
    "Este curso sigue los consejos de la Organización Mundial de la Salud (OMS, en inglés WHO). No da dietas para enfermedades como la diabetes, el VIH o la desnutrición, ni consejos sobre suplementos; para eso, habla con una clínica, un nutricionista o un agente comunitario de salud. Todos los precios son ejemplos; usa los precios de tu propio mercado. Cada lección dura unos cinco minutos. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de comidas de una semana para tu hogar (o un ejemplo, como una familia de cinco en Kisumu, una familia de cuatro en Ibadán o un estudiante en Acra): para cada día, las comidas y los grupos de alimentos que cubren, con frutas o verduras todos los días; los alimentos para cualquier niño pequeño o mujer embarazada o que amamanta; una lista de compras con los precios de tu mercado y el total de la semana comparado con tu presupuesto; y tres hábitos que vas a usar (menos sal, menos azúcar y una clave de inocuidad de los alimentos).",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas que compran o cocinan para un hogar en Kenia, Nigeria, Ghana, Senegal, Costa de Marfil, Camerún, Marruecos, Egipto y en toda África: padres y madres, abuelas, jóvenes adultos que viven solos y pequeños vendedores de comida preparada. Muchos tienen ingresos ajustados y cambiantes y usan un teléfono básico.",
    startingPoint: "La mayoría cocina todos los días comidas básicas que llenan (ugali, arroz, garri, fufu, banku, attiéké, pan), pero a menudo con pocas verduras, frijoles o alimentos de origen animal. Muchos ponen mucha sal, cubitos de caldo, azúcar o aceite. Pocos comparan precios de alimentos según lo que rinden o planean una semana de comidas, y muchos no saben bien cómo alimentar a un bebé desde los 6 meses.",
    gap: "Muchas familias comen lo suficiente para sentirse llenas, pero sin suficiente variedad, lo que causa anemia, mal crecimiento en los niños y, cada vez más, presión alta y diabetes en los adultos. Los participantes pueden comer mejor con el mismo dinero si eligen alimentos locales de varios grupos, reducen la sal y el azúcar y planean sus compras.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; se explica cada palabra de nutrición",
      "Presupuesto: ajustado y cambiante; el curso nunca da precios reales, solo ejemplos, y los participantes usan los precios de su mercado",
      "Los alimentos cambian según el país y la temporada: los ejemplos vienen de Kenia, Nigeria, Ghana, Senegal, Costa de Marfil, Marruecos y Egipto",
      "Sin dietas para enfermedades, suplementos ni medicinas: esas preguntas van a la clínica o a un nutricionista",
      "Dispositivos: un teléfono básico para la calculadora y las notas, o papel"
    ],
    prerequisites: "Ninguno. Sumar y multiplicar de forma sencilla ayuda en la lección 4; la calculadora del teléfono sirve."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con una lista de alimentos que se venden en tu mercado", action: "clasificar alimentos locales en los grupos de energía, constructores y protectores", standard: "acertando al menos 8 de 10" },
    { id: "O2", condition: "Con los alimentos de tu cocina", action: "planear un plato equilibrado con un alimento básico, un alimento constructor y verduras o frutas", standard: "con verduras o frutas en cerca de la mitad del plato" },
    { id: "O3", condition: "Con una receta o comida de tu hogar", action: "cambiar la receta para usar menos sal, azúcar y aceite y aplicar las cinco claves de la OMS para la inocuidad de los alimentos", standard: "nombrando al menos dos cambios y las cinco claves" },
    { id: "O4", condition: "Usando los precios de tu propio mercado", action: "comparar el costo de alimentos del mismo grupo para encontrar el que rinde más", standard: "eligiendo la opción más barata que da los mismos nutrientes, con las cuentas correctas" },
    { id: "O5", condition: "Para un niño de 6 a 23 meses, o una mujer embarazada o que amamanta", action: "planear las comidas de un día que cumplan los consejos de alimentación de la OMS", standard: "con el número correcto de comidas para la edad del niño, o con más alimentos ricos en hierro para la mujer" },
    { id: "O6", condition: "Según el tamaño de tu hogar y tu presupuesto para comida", action: "escribir un plan semanal de comidas y una lista de compras", standard: "que cubra varios grupos de alimentos cada día y no pase del presupuesto" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conoce tus alimentos",
      lessons: [
        {
          title: "Grupos de alimentos con alimentos locales",
          objectives: ["O1"],
          minutes: 5,
          goal: "Clasifica los alimentos que se venden en tu mercado en los grupos de energía, constructores y protectores.",
          text: [
            "Ningún alimento solo le da al cuerpo todo lo que necesita. Una forma fácil de recordarlo son tres grupos. Los alimentos de energía (los que \"mueven\") dan fuerza: maíz, arroz, mijo, sorgo, yuca, ñame, plátano macho, camote, pan, y también el aceite. Los alimentos constructores (los que \"hacen crecer\") forman músculos y sangre: frijoles, lentejas, caupí, cacahuates, huevos, pescado, carne, pollo y leche. Los alimentos protectores (los que \"dan brillo\") ayudan a combatir las enfermedades: verduras y frutas.",
            "Ejemplos locales: en Kenia, ugali (energía), githeri u omena (constructores) y sukuma wiki (protector). En Nigeria, garri o ñame (energía), frijoles o egusi (constructores) y ugu u hoja amarga (protectores). En Ghana, banku o kenkey (energía), pescado o sopa de cacahuate (constructores) y kontomire (protector). En Senegal, arroz o mijo con niébé (caupí) y verduras. En Egipto, pan con ful (habas) y ensalada.",
            "Algunos alimentos son ayudantes especiales. Las hojas verde oscuro (amaranto, hojas de yuca, moringa, kontomire) y los alimentos anaranjados (camote anaranjado, papaya, mango, zanahoria) son ricos en vitaminas. Los frijoles, el pescado seco pequeño, los huevos, el hígado y las hojas verde oscuro dan hierro, que previene la anemia."
          ],
          steps: ["Escribe los alimentos que comió tu hogar ayer.", "Marca cada uno: energía, constructor o protector.", "Mira qué grupo falta o es pequeño.", "Nombra un alimento local que puedes agregar para ese grupo."],
          words: [["Grupo de alimentos", "alimentos que hacen un trabajo parecido en el cuerpo."], ["Alimento básico", "el alimento principal que llena y se come casi todos los días, como el ugali, el arroz, el garri o el pan."], ["Anemia", "sangre débil, a menudo por falta de hierro; cansa y debilita a las personas."]],
          slides: [
            { title: "Tres grupos de alimentos", bullets: ["Energía (mueven): maíz, arroz, yuca, ñame, plátano macho, pan", "Constructores (hacen crecer): frijoles, cacahuates, huevos, pescado, carne, leche", "Protectores (dan brillo): verduras y frutas"] },
            { title: "Platos locales", bullets: ["Kenia: ugali, omena, sukuma wiki", "Nigeria: garri o ñame, frijoles, ugu", "Ghana: banku, pescado, kontomire; Egipto: pan, ful, ensalada"] },
            { title: "Ayudantes especiales", bullets: ["Hojas verde oscuro y alimentos anaranjados: vitaminas", "Frijoles, pescado seco pequeño, huevos, hígado, hojas verdes: hierro"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Escribe todo lo que comió tu hogar ayer. Marca cada alimento con E (energía), C (constructor) o P (protector). Encierra en un círculo el grupo que menos comieron y escribe un alimento local que podrías agregar mañana.",
          youCanNow: "clasificar alimentos locales en los grupos de energía, constructores y protectores y ver qué falta.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál de estos es un alimento constructor?", options: ["Yuca", "Frijoles", "Arroz", "Azúcar"], answer: 1, why: "Los frijoles son ricos en proteínas, que forman el cuerpo." },
            { objective: "O1", q: "Una familia en Acra comió banku con salsa de chile todo el día. ¿Qué grupo falta más?", options: ["Alimentos de energía", "Sal", "Alimentos constructores y protectores", "Nada"], answer: 2, why: "El banku es un alimento de energía; a la comida le falta pescado o frijoles y verduras." }
          ]
        },
        {
          title: "Cómo armar un plato equilibrado",
          objectives: ["O2"],
          minutes: 5,
          goal: "Planea un plato equilibrado con un alimento básico, un alimento constructor y verduras o frutas.",
          text: [
            "Una guía sencilla para cada comida principal: cerca de la mitad del plato con verduras y frutas, cerca de una cuarta parte con un alimento básico y cerca de una cuarta parte con un alimento constructor. No necesitas un plato de verdad; imagina el tazón o la bandeja compartida con las mismas partes.",
            "La OMS aconseja que los adultos coman al menos 400 gramos de frutas y verduras al día, que son unos cinco puñados. Las hojas cocidas en una sopa o un guiso cuentan. Los granos integrales y los alimentos menos refinados, como el arroz integral, el mijo, el sorgo o la harina de maíz integral, te mantienen lleno por más tiempo.",
            "Haz cambios pequeños, no una cocina nueva. Agrega un puñado de hojas verdes al guiso. Agrega frijoles al arroz (waakye en Ghana, arroz con frijoles en Nigeria, githeri en Kenia). Agrega un pedacito de pescado o un huevo para los niños. Come una fruta de temporada en lugar de un dulce.",
            "Para ayudar al cuerpo a usar el hierro de los frijoles y las hojas verdes, cómelos con un alimento con vitamina C, como tomate, naranja, guayaba o mango. Toma té o café entre comidas, no con ellas, porque hacen más difícil absorber el hierro."
          ],
          steps: ["Imagina el plato en cuatro partes.", "Llena cerca de la mitad con verduras y frutas.", "Llena cerca de una cuarta parte con un alimento básico.", "Llena cerca de una cuarta parte con un alimento constructor.", "Agrega un alimento con vitamina C; deja el té para entre comidas."],
          words: [["Equilibrado", "una comida con la mezcla correcta de grupos de alimentos."], ["Grano integral", "grano que conserva su capa exterior, como el arroz integral, el mijo o la harina de maíz integral."]],
          slides: [
            { title: "El plato equilibrado", bullets: ["Cerca de la mitad: verduras y frutas", "Cerca de una cuarta parte: alimento básico", "Cerca de una cuarta parte: alimento constructor"] },
            { title: "Frutas y verduras", bullets: ["OMS: al menos 400 g al día para adultos", "Unos cinco puñados", "Las hojas en sopa o guiso cuentan"] },
            { title: "Cambios pequeños", bullets: ["Hojas verdes en el guiso; frijoles en el arroz", "Un huevo o pescado para los niños", "Fruta de temporada en lugar de dulces"] },
            { title: "Ayuda al hierro a funcionar", bullets: ["Come frijoles y hojas verdes con tomate, naranja o mango", "Té y café entre comidas, no con ellas"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Planea la comida principal de mañana con los alimentos que ya tienes. Dibuja el plato (o el tazón) y escribe qué va en cada parte. Agrega un alimento con vitamina C.",
          youCanNow: "planear un plato equilibrado con un alimento básico, un alimento constructor y bastantes verduras o frutas.",
          quickCheck: [
            { objective: "O2", q: "En un plato equilibrado, ¿más o menos cuánto deben ser verduras y frutas?", options: ["Cerca de la mitad", "Nada", "Una esquinita", "Todo el plato"], answer: 0, why: "Cerca de la mitad del plato con verduras y frutas es la guía sencilla." },
            { objective: "O2", q: "¿Por qué comer tomate o una naranja con frijoles y hojas verdes?", options: ["Agregan sal", "Ayudan al cuerpo a absorber el hierro", "Reemplazan a los frijoles", "Hacen que la comida dure más"], answer: 1, why: "La vitamina C ayuda al cuerpo a usar el hierro de los alimentos vegetales." }
          ]
        },
        {
          title: "Menos sal, azúcar y aceite, y alimentos seguros",
          objectives: ["O3"],
          minutes: 5,
          goal: "Cambia una receta para usar menos sal, azúcar y aceite y aplica las cinco claves para la inocuidad de los alimentos.",
          text: [
            "Demasiada sal sube la presión arterial, lo que puede causar derrames cerebrales y enfermedades del corazón. La OMS aconseja que los adultos coman menos de 5 gramos de sal al día, un poco menos de una cucharadita rasa, contando toda la sal de los cubitos de caldo, los sazonadores en polvo, el pescado salado y el pan. Usa menos sal y menos cubitos, y da sabor con cebolla, ajo, jengibre, chile y hierbas. Si usas sal, elige sal yodada.",
            "Azúcar: la OMS aconseja que los azúcares libres (el azúcar agregado a comidas y bebidas, y el azúcar de la miel, los refrescos y los jugos) sean menos del 10% de la energía diaria, y menos es mejor. Para la mayoría de los adultos, eso es menos de unas 12 cucharaditas rasas al día. El té dulce, los refrescos y los jugos suman rápido. Aceite: usa poco y fríe con menos frecuencia; mejor hierve, cocina al vapor o guisa.",
            "La inocuidad de los alimentos evita la diarrea y las intoxicaciones. Las cinco claves de la OMS para la inocuidad de los alimentos: mantén la limpieza (lava las manos y las superficies); separa los alimentos crudos de los cocidos; cocina bien, sobre todo la carne, el pescado y los huevos; mantén los alimentos a temperaturas seguras (no dejes comida cocida afuera por horas); y usa agua segura y alimentos frescos y seguros.",
            "Estas reglas importan todavía más si vendes comida preparada, porque un solo error puede enfermar a muchos clientes."
          ],
          steps: ["Cuenta la sal, los cubitos y el azúcar de una receta habitual.", "Reduce un poco cada uno y agrega cebolla, ajo, chile o hierbas.", "Elige guisar o hervir en lugar de freír una vez por semana.", "Revisa la receta con las cinco claves para la inocuidad de los alimentos."],
          words: [["Sal yodada", "sal con yodo agregado, que el cuerpo necesita."], ["Azúcares libres", "azúcar agregado a comidas y bebidas, más el azúcar de la miel, los jarabes y los jugos de fruta."], ["Intoxicación alimentaria", "enfermedad por comer alimentos con microbios o veneno."]],
          slides: [
            { title: "Menos sal", bullets: ["OMS: menos de 5 g al día, poco menos de una cucharadita rasa", "Cuenta cubitos, sazonadores, pescado salado y pan", "Agrega cebolla, ajo, chile, hierbas; usa sal yodada"] },
            { title: "Menos azúcar y aceite", bullets: ["OMS: azúcares libres bajo el 10% de la energía; menos es mejor", "El té dulce, los refrescos y los jugos suman rápido", "Fríe menos: hierve, cocina al vapor o guisa"] },
            { title: "Cinco claves para la inocuidad (OMS)", bullets: ["Mantén la limpieza; separa crudos y cocidos", "Cocina bien; mantén los alimentos a temperaturas seguras", "Usa agua segura y alimentos crudos seguros"] }
          ],
          sources: [WHO_DIET, WHO_FIVE_KEYS],
          tryIt: "Toma un plato que tu hogar come a menudo, como arroz jollof, sopa de egusi, thieboudienne o un guiso de frijoles. Escribe dos cambios que reduzcan la sal, el azúcar o el aceite, y una clave de inocuidad que vas a practicar al cocinarlo.",
          youCanNow: "cambiar una receta para usar menos sal, azúcar y aceite y mantener los alimentos seguros con las cinco claves.",
          quickCheck: [
            { objective: "O3", q: "¿Qué cambio reduce la sal en un guiso?", options: ["Agregar dos cubitos de caldo más", "Agregar pescado salado y más sal", "Usar menos cubitos y agregar cebolla, ajo y chile", "Agregar más sazonador en polvo"], answer: 2, why: "Los cubitos y los sazonadores en polvo son salados; las hierbas y especias dan sabor sin sal." },
            { objective: "O3", q: "¿Cuál es una de las cinco claves de la OMS para la inocuidad de los alimentos?", options: ["Dejar la comida cocida afuera todo el día", "Separar los alimentos crudos de los cocidos", "Usar la misma tabla para la carne cruda y la ensalada sin lavarla", "Probar la carne cruda para revisarla"], answer: 1, why: "Separar los alimentos crudos de los cocidos evita que se pasen los microbios." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conoce tus alimentos",
        questions: [
          { objective: "O1", q: "¿Cuál es un alimento protector (da brillo)?", options: ["Kontomire (hojas de malanga)", "Garri", "Aceite de palma", "Pan blanco"], answer: 0, why: "Las hojas verdes son alimentos protectores llenos de vitaminas." },
          { objective: "O1", q: "¿Qué alimento da hierro para ayudar a prevenir la anemia?", options: ["Azúcar", "Refresco", "Pescado seco pequeño, como el omena", "Té"], answer: 2, why: "El pescado seco pequeño, los frijoles, los huevos y las hojas verde oscuro dan hierro." },
          { objective: "O2", q: "¿Qué comida es la más equilibrada?", options: ["Arroz y refresco", "Ugali, frijoles y sukuma wiki", "Pan y té dulce", "Garri y azúcar"], answer: 1, why: "Tiene un alimento básico, un alimento constructor y verduras." },
          { objective: "O2", q: "¿Más o menos cuántas frutas y verduras aconseja la OMS que coman los adultos cada día?", options: ["Una rebanada", "Ninguna", "Solo los domingos", "Al menos 400 g, unos cinco puñados"], answer: 3, why: "La OMS aconseja al menos 400 g al día para los adultos." },
          { objective: "O3", q: "La OMS aconseja que los adultos coman menos sal que:", options: ["5 g al día, poco menos de una cucharadita rasa", "Una taza al día", "Diez cucharaditas al día", "No hay límite"], answer: 0, why: "Comer menos de 5 g de sal al día baja el riesgo de presión alta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Comer bien con poco dinero",
      lessons: [
        {
          title: "Comparar precios de alimentos para ver cuál rinde más",
          objectives: ["O4"],
          minutes: 5,
          goal: "Compara el costo de alimentos del mismo grupo para encontrar el que rinde más.",
          text: [
            "La buena comida no tiene que costar más. El truco es comparar alimentos que hacen el mismo trabajo. Para los alimentos constructores, compara frijoles, lentejas, caupí, cacahuates, huevos, pescado seco pequeño y carne según lo que cuesta una comida familiar de cada uno. Los frijoles y el pescado pequeño a menudo dan mucho por poco dinero.",
            "Cómo comparar: escribe el precio y la cantidad que recibes, y luego calcula el costo de una comida familiar. Ejemplo (números inventados, no precios reales): una taza de frijoles secos cuesta NGN 600 y alimenta a la familia una vez; la carne para la misma comida cuesta NGN 3,000. Los frijoles son cinco veces más baratos para esa comida. Usa los precios de tu propio mercado; cambian con la temporada.",
            "Formas de ahorrar: compra frutas y verduras de temporada, cuando son más baratas. Compra alimentos secos (frijoles, granos, pescado seco) en mayor cantidad con tus vecinos o tu grupo de ahorro y repártelos. Cultiva hojas como amaranto, col rizada, moringa o espinaca en un huerto pequeño, un costal o una lata. Compra menos refrescos, dulces y botanas de paquete, que cuestan mucho y dan poco.",
            "No desperdicies: guarda los alimentos secos en recipientes cerrados y secos, lejos de la humedad y las plagas, y usa las sobras de forma segura al día siguiente."
          ],
          steps: ["Elige un grupo de alimentos, por ejemplo los constructores.", "Escribe el precio y la cantidad de tres alimentos de ese grupo.", "Calcula el costo de una comida familiar de cada uno.", "Elige el que rinde más y anota qué alimentos son de temporada."],
          words: [["Rendimiento", "cuánta comida buena obtienes por tu dinero."], ["De temporada", "la época del año en que se cosecha un cultivo, así que abunda y es más barato."]],
          slides: [
            { title: "Compara lo comparable", bullets: ["Mismo grupo de alimentos, mismo trabajo", "Costo de una comida familiar", "Los frijoles y el pescado pequeño a menudo dan mucho por poco"] },
            { title: "Cómo comparar", bullets: ["Escribe el precio y la cantidad", "Calcula el costo por comida familiar", "Usa los precios de tu mercado; cambian"] },
            { title: "Formas de ahorrar", bullets: ["Compra de temporada", "Compra alimentos secos al por mayor con tus vecinos", "Cultiva hojas en un costal o una lata; menos refrescos y botanas"] }
          ],
          tryIt: "En tu mercado o tienda, escribe el precio y la cantidad de tres alimentos constructores (por ejemplo frijoles, huevos y pescado seco). Calcula con la calculadora del teléfono el costo de una comida familiar de cada uno. Encierra en un círculo el que rinde más. Escribe la moneda (KES, NGN, GHS, XOF, MAD o la tuya).",
          youCanNow: "comparar precios de alimentos según el costo por comida y elegir el que rinde más en cada grupo.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es la forma más justa de comparar frijoles y carne?", options: ["El color de la bolsa", "Qué tienda está más cerca", "Cuál pesa más", "El costo de una comida familiar de cada uno"], answer: 3, why: "El costo por comida compara lo que de verdad recibes por tu dinero." },
            { objective: "O4", q: "Solo como ejemplo: los frijoles para una comida cuestan XOF 500 y el pescado para una comida cuesta XOF 1,500. ¿Cuántas veces más baratos son los frijoles?", options: ["2 veces", "3 veces", "5 veces", "Igual"], answer: 1, why: "1,500 dividido entre 500 es 3." }
          ]
        },
        {
          title: "Alimentar a niños pequeños y a mujeres embarazadas o que amamantan",
          objectives: ["O5"],
          minutes: 6,
          goal: "Planea las comidas de un día para un niño pequeño o una mujer embarazada o que amamanta siguiendo los consejos de la OMS.",
          text: [
            "Los niños pequeños crecen rápido y tienen el estómago pequeño, así que necesitan comidas pequeñas y frecuentes, llenas de buena comida. La OMS aconseja solo leche materna durante los primeros 6 meses. Desde los 6 meses más o menos, agrega comida familiar suave y aplastada y sigue amamantando hasta los 2 años o más. Empieza con poquito y poco a poco da más cantidad, comida más espesa y más variedad.",
            "Con qué frecuencia (OMS): 2 a 3 comidas al día para bebés de 6 a 8 meses; 3 a 4 comidas al día para niños de 9 a 23 meses, más 1 a 2 refrigerios si hace falta. Haz la papilla tan espesa que se quede en la cuchara y agrega algo de otro grupo: frijoles aplastados o pasta de cacahuate, un huevo, pescado pequeño molido en polvo, hojas verdes aplastadas o papaya. Dale al niño su propio plato para que veas cuánto come.",
            "Las mujeres embarazadas y las que amamantan necesitan más comida buena, no solo más alimento básico. Agrega una comida pequeña o un refrigerio extra cada día, con alimentos ricos en hierro (frijoles, pescado pequeño, huevos, hígado, hojas verde oscuro) junto con un alimento con vitamina C. Ve a todas las consultas prenatales y toma solo los suplementos que te dé la clínica.",
            "Cuando un niño está enfermo, la OMS aconseja más líquidos y más lactancia, y sus comidas suaves favoritas. Después de la enfermedad, dale comida extra para que se recupere. Si un niño no está creciendo bien o está muy delgado o hinchado, ve a la clínica."
          ],
          steps: ["Revisa la edad del niño en meses.", "Planea el número de comidas para esa edad.", "Haz cada comida espesa y agrega otro grupo de alimentos.", "Para una mujer embarazada o que amamanta: agrega un refrigerio con un alimento rico en hierro y vitamina C."],
          words: [["Alimentación complementaria", "dar comida familiar desde los 6 meses más o menos mientras sigue la lactancia."], ["Refrigerio", "una pequeña cantidad de comida entre comidas, como un plátano, cacahuates o un huevo."]],
          slides: [
            { title: "Bebés y niños pequeños (OMS)", bullets: ["0-6 meses: solo leche materna", "Desde los 6 meses más o menos: comida familiar suave más leche materna", "Sigue amamantando hasta los 2 años o más"] },
            { title: "Con qué frecuencia", bullets: ["6-8 meses: 2-3 comidas al día", "9-23 meses: 3-4 comidas al día, más 1-2 refrigerios", "Papilla espesa más otro grupo de alimentos"] },
            { title: "Mujeres embarazadas o que amamantan", bullets: ["Una comida pequeña o un refrigerio extra", "Alimentos ricos en hierro con vitamina C", "Solo los suplementos que da la clínica"] },
            { title: "Niño enfermo", bullets: ["Más líquidos y más lactancia", "Sus comidas suaves favoritas; comida extra después", "Si no crece bien: ve a la clínica"] }
          ],
          sources: [WHO_IYCF, WHO_ANAEMIA],
          tryIt: "Planea un día de comida para un niño de 10 meses (por ejemplo en Duala o Kumasi) o para una madre que amamanta. Escribe cada comida y refrigerio y los grupos de alimentos que cubre.",
          youCanNow: "planear las comidas de un día para un niño pequeño o una mujer embarazada o que amamanta siguiendo los consejos de la OMS.",
          quickCheck: [
            { objective: "O5", q: "¿Cuántas comidas al día aconseja la OMS para un bebé de 7 meses?", options: ["2 a 3", "1", "6 a 8", "Ninguna; solo leche materna"], answer: 0, why: "La OMS aconseja 2 a 3 comidas al día de los 6 a los 8 meses, junto con la lactancia." },
            { objective: "O5", q: "¿Qué papilla es la mejor para un bebé de 9 meses?", options: ["Papilla aguada con azúcar", "Té solo", "Papilla espesa con pasta de cacahuate o huevo aplastado", "Refresco"], answer: 2, why: "La papilla espesa con otro grupo de alimentos da más nutrientes en un estómago pequeño." }
          ]
        },
        {
          title: "Escribir un plan semanal de comidas con poco dinero",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escribe un plan semanal de comidas y una lista de compras que quepan en tu presupuesto.",
          text: [
            "Un plan ahorra dinero y hace más fácil comer bien. Empieza con tu presupuesto para comida de la semana. Luego planea las comidas principales, con alimentos básicos baratos, frijoles o pescado pequeño casi todos los días, y verduras todos los días. Planea huevos, carne o pollo algunos días si el presupuesto lo permite.",
            "Repite las comidas que le gustan a tu familia, pero cambia la verdura o el frijol para que haya variedad. Cocina los frijoles una vez y úsalos en dos comidas. Planea primero las comidas del niño y el refrigerio de la mujer embarazada o que amamanta, para que nunca sean ellos los que se quedan sin comer.",
            "A partir del plan, escribe la lista de compras con los precios de tu mercado, súmalos y compáralos con el presupuesto. Si te pasas, cambia un alimento caro por uno más barato del mismo grupo, no por nada. Ejemplo (números inventados): una familia en Nakuru con un presupuesto semanal de KES 2,500 cambia dos comidas con carne por omena y frijoles para no pasarse.",
            "Pega el plan en la pared o guarda una foto en tu teléfono. Al final de la semana, revisa cuánto gastaste y qué tiraste, y cambia el plan de la semana siguiente."
          ],
          steps: ["Escribe tu presupuesto semanal para comida.", "Planea las comidas principales de siete días con varios grupos de alimentos cada día.", "Planea primero las comidas de los niños y de las mujeres embarazadas o que amamantan.", "Escribe la lista de compras con tus precios y súmala.", "Si te pasas del presupuesto, cambia dentro del mismo grupo de alimentos."],
          words: [["Presupuesto", "la cantidad de dinero que planeas gastar."], ["Plan de comidas", "una lista de lo que vas a cocinar cada día."]],
          slides: [
            { title: "Empieza con el presupuesto", bullets: ["El dinero de comida de la semana", "Básicos baratos, frijoles o pescado pequeño", "Verduras todos los días"] },
            { title: "Planea con inteligencia", bullets: ["Repite las favoritas, cambia la verdura", "Cocina los frijoles una vez, úsalos dos veces", "Primero los niños y las madres"] },
            { title: "Lista de compras", bullets: ["Los precios de tu propio mercado", "Suma y compara con el presupuesto", "¿Te pasaste? Cambia dentro del mismo grupo"] },
            { title: "Revisa y ajusta", bullets: ["¿Cuánto gastaste?", "¿Qué se desperdició?", "Cambia el plan de la semana siguiente"] }
          ],
          tryIt: "Tarea final: escribe tu plan de comidas de una semana. Para cada día, anota las comidas y los grupos de alimentos, con frutas o verduras todos los días; marca los alimentos para cualquier niño pequeño o mujer embarazada o que amamanta; escribe la lista de compras con tus precios y compara el total con el presupuesto; y escribe tres hábitos que vas a usar.",
          youCanNow: "escribir un plan semanal de comidas y una lista de compras que alimenten bien a tu hogar sin pasarte del presupuesto.",
          quickCheck: [
            { objective: "O6", q: "Tu lista de compras se pasa del presupuesto. ¿Cuál es el mejor cambio?", options: ["Quitar todas las verduras", "Cambiar un alimento caro por uno más barato del mismo grupo", "Darles menos a los niños", "Comprar más refrescos"], answer: 1, why: "Cambiar dentro de un grupo de alimentos mantiene la comida equilibrada y más barata." },
            { objective: "O6", q: "¿De quién debes planear primero las comidas?", options: ["De las visitas", "Solo de los adultos", "De nadie en particular", "De los niños pequeños y las mujeres embarazadas o que amamantan"], answer: 3, why: "Son quienes más necesitan buena comida, así que nunca deben quedarse sin ella." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Comer bien con poco dinero",
        questions: [
          { objective: "O4", q: "¿Cuál es una buena forma de ahorrar en verduras?", options: ["Comprar solo fuera de temporada", "Comprarlas de temporada o cultivar hojas en un costal", "Comprar solo botanas de paquete", "Comprar con menos frecuencia y dejar que se pudran"], answer: 1, why: "Los productos de temporada son más baratos, y las hojas crecen fácilmente en casa." },
          { objective: "O4", q: "Solo como ejemplo: 1 kg de lentejas en Casablanca cuesta MAD 20 y alcanza para 4 comidas familiares. ¿Cuál es el costo por comida?", options: ["MAD 80", "MAD 4", "MAD 5", "MAD 24"], answer: 2, why: "20 dividido entre 4 comidas es 5." },
          { objective: "O5", q: "¿Hasta qué edad aconseja la OMS seguir amamantando?", options: ["2 años o más", "6 meses", "1 mes", "Debe parar cuando empieza la comida"], answer: 0, why: "La lactancia sigue junto con la comida familiar hasta los 2 años o más." },
          { objective: "O5", q: "¿Qué debe agregar cada día una madre que amamanta?", options: ["Más té dulce", "Nada", "Solo más arroz", "Una comida pequeña o un refrigerio extra con alimentos ricos en hierro"], answer: 3, why: "Necesita más comida buena, sobre todo alimentos ricos en hierro." },
          { objective: "O6", q: "¿Qué es lo primero que debes escribir al planear las comidas de la semana?", options: ["Tu presupuesto semanal para comida", "La lista de visitas", "El pedido de refrescos", "Nada; solo ve a comprar"], answer: 0, why: "El presupuesto marca lo que el plan puede incluir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Buena nutrición con poco dinero y alimentos locales",
    questions: [
      { objective: "O1", q: "¿Cuál es un alimento de energía (mueve)?", options: ["Sukuma wiki", "Ñame", "Huevos", "Naranjas"], answer: 1, why: "El ñame es un alimento básico que da energía." },
      { objective: "O1", q: "¿Cuál es un alimento constructor (hace crecer)?", options: ["Cacahuates", "Yuca", "Azúcar", "Papaya"], answer: 0, why: "Los cacahuates dan proteínas." },
      { objective: "O1", q: "El camote anaranjado, la papaya y el mango son ricos en:", options: ["Sal", "Nada útil", "Vitaminas", "Aceite"], answer: 2, why: "Los alimentos anaranjados son ricos en vitaminas." },
      { objective: "O1", q: "La anemia muchas veces se debe a muy poco:", options: ["Azúcar", "Sal", "Aceite", "Hierro"], answer: 3, why: "La falta de hierro es la causa nutricional más común de la anemia." },
      { objective: "O2", q: "En el plato equilibrado, cerca de una cuarta parte es:", options: ["Dulces", "Un alimento constructor", "Sal", "Refresco"], answer: 1, why: "Cerca de una cuarta parte alimento básico, una cuarta parte alimento constructor y la mitad verduras y frutas." },
      { objective: "O2", q: "¿Cuándo debes tomar té si quieres aprovechar el hierro de tu comida?", options: ["Entre comidas", "Con cada comida", "En lugar de comer", "No importa"], answer: 0, why: "El té con las comidas hace más difícil absorber el hierro." },
      { objective: "O2", q: "¿Qué cambio pequeño hace el arroz más equilibrado?", options: ["Agregar más sal", "Agregar azúcar", "Agregar frijoles y hojas verdes", "Agregar un refresco"], answer: 2, why: "Los frijoles y las hojas verdes agregan alimentos constructores y protectores." },
      { objective: "O3", q: "¿Qué esconde mucha sal?", options: ["Tomates frescos", "Los cubitos de caldo y el sazonador en polvo", "Frijoles solos", "Fruta fresca"], answer: 1, why: "Los cubitos y los sazonadores en polvo son muy salados." },
      { objective: "O3", q: "¿Qué bebida agrega más azúcar libre?", options: ["Agua limpia", "Té sin azúcar", "Leche sola", "Una botella de refresco"], answer: 3, why: "Los refrescos están llenos de azúcar agregado." },
      { objective: "O3", q: "Una vendedora de comida en Abiyán deja attiéké y pescado cocidos afuera toda la tarde con el calor. ¿Qué clave no cumple?", options: ["Mantener los alimentos a temperaturas seguras", "Cocinar bien", "Usar sal yodada", "Comer más verduras"], answer: 0, why: "Los microbios crecen rápido en la comida cocida que se deja tibia por horas." },
      { objective: "O3", q: "Una forma de cocinar más barata y sana que freír en mucho aceite es:", options: ["Más aceite", "Guisar, hervir o cocinar al vapor", "Freír dos veces", "Agregar azúcar"], answer: 1, why: "Guisar, hervir y cocinar al vapor usan poco aceite." },
      { objective: "O4", q: "Para comparar lo que rinde un alimento, calculas:", options: ["Qué bolsa se ve más grande", "El nombre del vendedor", "El costo de una comida familiar", "Qué tienda tiene más gente"], answer: 2, why: "El costo por comida muestra lo que de verdad recibes." },
      { objective: "O4", q: "Las frutas y verduras suelen ser más baratas:", options: ["Fuera de temporada", "Cuando son de temporada", "En paquetes", "Solo de noche"], answer: 1, why: "En temporada abundan y son más baratas." },
      { objective: "O4", q: "Solo como ejemplo: los huevos para una comida cuestan GHS 30 y los frijoles cuestan GHS 10. ¿Cuál rinde más para esa comida?", options: ["Los huevos", "Son iguales", "Ninguno", "Los frijoles"], answer: 3, why: "Los dos son alimentos constructores, y los frijoles cuestan la tercera parte." },
      { objective: "O5", q: "Durante los primeros 6 meses, un bebé necesita:", options: ["Solo leche materna", "Agua y papilla", "Té", "Leche de vaca y azúcar"], answer: 0, why: "La OMS aconseja solo leche materna durante los primeros 6 meses." },
      { objective: "O5", q: "¿Más o menos cuántas comidas al día debe comer un niño de 12 meses?", options: ["Una", "3 a 4, más 1 a 2 refrigerios si hace falta", "Solo leche materna", "Diez"], answer: 1, why: "La OMS aconseja 3 a 4 comidas de los 9 a los 23 meses, más refrigerios si hace falta." },
      { objective: "O5", q: "Cuando un niño pequeño está enfermo, la OMS aconseja:", options: ["Dejar toda la comida", "Dejar de amamantar", "Más líquidos, más lactancia y sus comidas suaves favoritas", "Solo agua"], answer: 2, why: "Los líquidos y la comida extra ayudan al niño a recuperarse." },
      { objective: "O6", q: "Un buen plan semanal de comidas tiene:", options: ["Solo el mismo alimento básico, todos los días", "Verduras solo los domingos", "Ningún presupuesto", "Varios grupos de alimentos cada día"], answer: 3, why: "La meta es variedad todos los días." },
      { objective: "O6", q: "Una forma barata de hacer que los frijoles rindan más en el plan es:", options: ["Cocinarlos una vez y usarlos en dos comidas", "Tirar las sobras", "Cocinarlos cada hora", "Comprarlos en paquetes pequeñitos"], answer: 0, why: "Cocinar una vez ahorra combustible y tiempo, y las sobras bien guardadas dan una segunda comida." },
      { objective: "O6", q: "Al final de la semana, debes:", options: ["Tirar el plan", "Revisar cuánto gastaste y qué desperdiciaste, y cambiar el plan de la semana siguiente", "Duplicar el presupuesto", "Dejar de planear"], answer: 1, why: "Revisar te ayuda a mejorar el siguiente plan." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Grupos de alimentos todos los días", objective: "O1", notYet: "La mayoría de los días solo hay un alimento básico, o los grupos están mal nombrados.", meets: "Todos los días hay alimentos de energía, constructores y protectores, bien nombrados.", exceeds: "También incluye hojas verde oscuro o alimentos anaranjados y un alimento rico en hierro casi todos los días." },
      { name: "Comidas equilibradas", objective: "O2", notYet: "Faltan verduras o frutas algunos días.", meets: "Verduras o frutas todos los días, y las comidas principales siguen el plato equilibrado.", exceeds: "Los alimentos ricos en hierro van con un alimento con vitamina C, y el té queda para entre comidas." },
      { name: "Sal, azúcar e inocuidad", objective: "O3", notYet: "No hay hábitos anotados, o no reducen la sal ni el azúcar.", meets: "Anota un hábito para la sal, uno para el azúcar y una de las cinco claves para la inocuidad de los alimentos.", exceeds: "Muestra los cambios en recetas concretas del plan." },
      { name: "Presupuesto y lista de compras", objective: "O4", notYet: "No hay precios, o el total está mal o se pasa del presupuesto sin ningún cambio.", meets: "Lista de compras con los precios de su mercado y un total correcto dentro del presupuesto.", exceeds: "Muestra al menos un cambio por otro alimento que rinde más dentro de un grupo y anota los alimentos de temporada." },
      { name: "Alimentar a quienes más lo necesitan", objective: "O5", notYet: "No hay plan para un niño pequeño o una mujer embarazada o que amamanta del hogar.", meets: "Las comidas y los refrigerios siguen los consejos de la OMS para la edad del niño o para la mujer.", exceeds: "Para cada día están escritas la papilla espesa con otro grupo de alimentos y el número correcto de comidas." },
      { name: "Plan semanal", objective: "O6", notYet: "Faltan algunos días.", meets: "Siete días de comidas, listos para pegar en la pared o guardar en el teléfono.", exceeds: "Usa las sobras de forma segura y repite las comidas favoritas con variedad." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que dicen comer verduras o frutas todos los días y frijoles o pescado pequeño casi todos los días 30 días después (encuesta de seguimiento)",
      "Hogares que dicen usar un plan semanal de comidas y no pasarse de su presupuesto para comida",
      "Participantes que dicen haber reducido los cubitos de caldo, la sal o las bebidas azucaradas",
      "Clínicas aliadas o agentes comunitarios de salud informan una mejor alimentación de los niños de 6 a 23 meses en las familias de los participantes"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono básico con calculadora, o papel y lápiz",
      "Precios de un mercado o una tienda del lugar para las lecciones de precios",
      "Un plato, un tazón o un dibujo para mostrar el plato equilibrado",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Buenos aliados: grupos de mujeres, grupos de ahorro, escuelas, clínicas y agentes comunitarios de salud; una demostración de cocina con alimentos locales funciona bien.",
      "Usa los alimentos y los precios de tu zona; los precios del curso son solo ejemplos.",
      "No des dietas para enfermedades ni consejos sobre suplementos; envía esas preguntas a la clínica o a un nutricionista.",
      "Ten tacto: algunos participantes quizá no tengan suficiente comida. Céntrate en cambios de bajo costo e indica la ayuda alimentaria local donde exista.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila Todavía no a la vez."
    ]
  }
};
