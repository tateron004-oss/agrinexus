"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-livestock-nutrition.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const FEEDIPEDIA = { name: "Feedipedia (INRAE, CIRAD, AFZ y FAO): sistema de información sobre recursos para alimentación animal", url: "https://www.feedipedia.org/" };
const FEEDIPEDIA_MAIZE = { name: "Feedipedia: grano de maíz (proteína de unos 8 a 10.5 por ciento de la materia seca)", url: "https://www.feedipedia.org/node/556" };
const FEEDIPEDIA_SOY = { name: "Feedipedia: harina o torta de soya (proteína según el tipo)", url: "https://www.feedipedia.org/node/674" };
const ICIPE_PUSHPULL = { name: "icipe: tecnología push-pull, o \"atraer y repeler\" (desmodium, pasto Napier y Brachiaria como forraje)", url: "https://www.icipe.org/impacts/demonstration-research-impacts-communities/push-pull-technology" };
const TENNESSEE_PEARSON = { name: "Extensión de la Universidad de Tennessee: paquete de actividades sobre alimentos para el ganado (el cuadrado de Pearson)", url: "https://animalscience.tennessee.edu/wp-content/uploads/sites/7/2020/07/BeefFeedstuffsActivityPacket.pdf" };
const FAO_SILAGE = { name: "FAO: técnicas de cosecha y ensilado (cómo hacer ensilaje en el trópico)", url: "https://www.fao.org/4/x8486e/x8486e0w.htm" };
const FAO_SILAGE_SMALL = { name: "FAO: ensilaje para pequeños productores (conclusiones: ensilaje en bolsa, métodos de bajo costo)", url: "https://www.fao.org/4/x8486e/x8486e13.htm" };
const ILRI_MYCO = { name: "ILRI: los secuestrantes de micotoxinas, ¿una opción para una leche más segura en Kenia?", url: "https://www.ilri.org/knowledge/publications/mycotoxin-binders-option-safer-milk-kenya" };

module.exports = {
  id: "agri-livestock-nutrition-es",
  lang: "es",
  translationOf: "agri-livestock-nutrition",
  category: "Agriculture (Africa)",
  name: "Nutrición del ganado y formulación de raciones con ingredientes locales",
  skills: "Cubrir las necesidades de nutrientes de los animales, Elegir ingredientes y forrajes locales, Balancear una ración con el cuadrado de Pearson, Hacer ensilaje y heno y guardar el alimento de forma segura, Planear la alimentación por etapa, Calcular el costo del alimento por kg de aumento de peso o por litro de leche",
  outcome: "preparar una ración balanceada con ingredientes locales para un tipo de animal y calcular su costo: ajustar la energía, la proteína, los minerales y el agua a su etapa, balancear la proteína con el cuadrado de Pearson, conservar y guardar el alimento de forma segura, y calcular el costo del alimento por kg de aumento de peso, por cartón de huevos o por litro de leche.",
  about: [
    "Este curso es para pequeños productores y productores en crecimiento de ganado y aves, trabajadores de granja, jóvenes agroemprendedores, pequeños fabricantes de alimento y extensionistas de Kenia, Nigeria, Ghana, Costa de Marfil, Burkina Faso y de toda África. El alimento suele ser el mayor gasto de tener animales, así que alimentar bien y barato decide si la granja gana dinero.",
    "El capítulo 1 trata de lo que necesitan los animales y lo que tú tienes: los nutrientes; los ingredientes locales como el maíz, el salvado de maíz, el salvado de trigo, la torta de soya y de semilla de algodón y la harina de pescado; los forrajes como el pasto Napier, el desmodium y el lablab; y cómo balancear una ración con el cuadrado de Pearson, paso a paso. El capítulo 2 trata de conservar y planear: el ensilaje y el heno, cómo guardar el alimento a salvo del moho y de las micotoxinas, la alimentación por etapa con un plan de alimentación de tres partes, y el costo del alimento por kg de aumento de peso o por litro de leche.",
    "Todos los precios de este curso son ejemplos inventados: usa tus propios precios locales. El valor nutritivo de los ingredientes varía, así que confírmalo con tu proveedor, con un laboratorio de alimentos o con tu extensionista. Este curso no da dosis de medicamentos ni de aditivos; sigue la etiqueta y a tu veterinario. Cada lección dura unos cinco minutos y termina con una tarea. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Prepara una ración con su costo para un tipo de animal de tu granja (o para un ejemplo como gallinas ponedoras cerca de Kumasi, cerdos en crecimiento cerca de Ibadán, pollos de engorde cerca de Bouaké o una vaca lechera en Kiambu): nombra el tipo de animal y la etapa; escribe el plan de alimentación de tres partes (alimento base o forraje, concentrado, suplementos) y el agua; balancea la proteína del concentrado con el cuadrado de Pearson, mostrando tus cálculos; escribe los kg de cada ingrediente por cada 100 kg de mezcla; calcula su costo por kg con tus precios locales; y calcula el costo del alimento por kg de aumento de peso, por cartón de huevos o por litro de leche.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños productores y productores comerciales en crecimiento de ganado y aves, trabajadores de granja, jóvenes agroemprendedores, pequeños fabricantes de alimento y extensionistas de África del Este, del Oeste y Central (incluidos los países francófonos).",
    startingPoint: "Alimentan a sus animales con pastoreo, residuos de cosecha y alimento comercial comprado. La mayoría no sabe leer la etiqueta de un alimento ni balancear una ración, no conserva forraje para la temporada seca y no sabe cuánto le cuesta el alimento por kg de carne, por huevo o por litro de leche.",
    gap: "El alimento comprado es caro y su calidad varía; un alimento malo o con moho baja el crecimiento, los huevos y la leche, y puede enfermar a los animales. Los productores que saben mezclar una ración balanceada con ingredientes locales, conservar forraje y calcular el costo de su alimento pueden bajar sus gastos, mantener la producción de sus animales durante la temporada seca y poner precio a sus productos con confianza.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; solo aritmética simple (multiplicar, dividir, porcentajes); el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: papel y lápiz o la calculadora del teléfono; una hoja de cálculo en el teléfono es opcional",
      "Dinero: los precios en KES, NGN, GHS y XOF son ejemplos inventados; los participantes usan precios locales",
      "El valor de los ingredientes varía: los participantes lo confirman con proveedores, un laboratorio o el extensionista",
      "Reglas de sanidad animal: ninguna dosis de medicamentos, aditivos ni alimentos medicados; seguir al veterinario y la etiqueta"
    ],
    prerequisites: "Cuidado básico de animales y aritmética simple. Se recomienda tomar primero \"Salud y manejo del ganado\"."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con un tipo de animal y su etapa", action: "hacer una lista de los nutrientes que necesita (energía, proteína, minerales y agua) y de un alimento local que aporte cada uno", standard: "nombrando un alimento correcto para cada nutriente" },
    { id: "O2", condition: "Con los alimentos disponibles cerca de ti", action: "clasificar los ingredientes y forrajes locales en alimentos energéticos, alimentos proteicos, forraje fibroso y suplementos", standard: "acertando al menos 8 de 10" },
    { id: "O3", condition: "Con dos ingredientes y un nivel de proteína meta", action: "balancear una ración con el cuadrado de Pearson y escribir los kg de cada ingrediente por cada 100 kg de mezcla", standard: "con la mezcla a menos de 0.5 puntos porcentuales de la meta" },
    { id: "O4", condition: "Usando el forraje y el alimento de tu granja", action: "hacer ensilaje o heno y guardar el alimento para que se mantenga seco y sin moho", standard: "siguiendo cada paso de la lista de control" },
    { id: "O5", condition: "Para un tipo de animal", action: "escribir un plan de alimentación por etapas con alimento base o forraje, concentrado y suplementos para cada etapa", standard: "cubriendo todas las etapas, desde cría hasta venta, postura o producción de leche" },
    { id: "O6", condition: "Usando tus precios locales y tus registros", action: "calcular el costo del alimento por kg de mezcla y por kg de aumento de peso, cartón de huevos o litro de leche", standard: "con cálculos correctos y todos los ingredientes incluidos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Lo que necesitan los animales y lo que tú tienes",
      lessons: [
        {
          title: "Nutrientes: energía, proteína, minerales y agua",
          objectives: ["O1"],
          minutes: 5,
          goal: "Hacer una lista de lo que un animal necesita comer y beber, y de un alimento local para cada necesidad.",
          text: [
            "Todo animal necesita cuatro cosas de su alimento y su agua. La energía lo mantiene vivo, caliente y en movimiento, y alimenta el crecimiento, la leche y los huevos; viene sobre todo de los granos (maíz, sorgo, yuca), de los salvados y del pasto fresco o conservado. La proteína forma músculo, leche, huevos y crías; viene de las tortas de oleaginosas (soya, semilla de algodón, maní, girasol), de la harina de pescado y de leguminosas como el desmodium y el lablab. Los minerales y las vitaminas forman los huesos y la cáscara de los huevos y mantienen el cuerpo funcionando: sal, calcio de la piedra caliza o de las conchas, fósforo y una premezcla de minerales y vitaminas.",
            "El agua es el nutriente más importante y el más barato. Sin ella, un animal deja de comer rápido, y las vacas en ordeño y las gallinas ponedoras beben mucho. Da agua limpia todo el tiempo, más cuando hace calor, en bebederos limpios a la sombra.",
            "Las necesidades cambian según el animal y su etapa. Un animal joven que crece rápido, una gallina ponedora y una vaca en ordeño necesitan más proteína que un adulto en reposo. Las vacas, las cabras y las ovejas son rumiantes: su estómago puede digerir pasto y residuos de cosecha, así que el forraje fibroso es la base de su dieta. Los cerdos y las aves no pueden digerir mucho forraje fibroso, así que necesitan mezclas a base de granos con proteína, minerales y vitaminas."
          ],
          words: [["Nutriente", "una parte del alimento que el cuerpo necesita: energía, proteína, minerales, vitaminas y agua."], ["Rumiante", "un animal con un estómago de cuatro partes que puede digerir pasto: vacas, cabras y ovejas."], ["Premezcla", "una mezcla comprada de minerales y vitaminas que se agrega en pequeñas cantidades al alimento, como dice la etiqueta."], ["Forraje fibroso", "alimento voluminoso y rico en fibra, como pasto, heno, ensilaje y residuos de cosecha."]],
          slides: [
            { title: "Cuatro necesidades", bullets: ["Energía: granos, salvados, yuca, pasto", "Proteína: tortas de oleaginosas, harina de pescado, leguminosas", "Minerales y vitaminas: sal, piedra caliza, premezcla", "Agua: limpia, todo el tiempo"] },
            { title: "Primero el agua", bullets: ["El nutriente más barato y más importante", "Más con calor; los animales en ordeño y en postura beben mucho", "Bebederos limpios a la sombra"] },
            { title: "Las necesidades cambian con la etapa", bullets: ["Los animales jóvenes, en postura y en ordeño necesitan más proteína", "Los adultos en reposo necesitan menos"] },
            { title: "Rumiantes frente a cerdos y aves", bullets: ["Vacas, cabras, ovejas: el forraje fibroso es la base", "Cerdos y aves: mezcla a base de granos con proteína y premezcla"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Elige un tipo de animal de tu granja (por ejemplo cerdos en crecimiento, gallinas ponedoras o una vaca en ordeño). Escribe sus cuatro necesidades y, junto a cada una, un alimento que puedas conseguir en tu zona y que la cubra.",
          youCanNow: "hacer una lista de las necesidades de energía, proteína, minerales y agua de un animal y nombrar un alimento local para cada una.",
          quickCheck: [
            { objective: "O1", q: "¿Qué nutriente es el más barato y el más importante?", options: ["La proteína", "La energía", "El agua", "Las vitaminas"], answer: 2, why: "Sin agua limpia, los animales dejan rápido de comer y de producir." },
            { objective: "O1", q: "¿Qué alimento aporta sobre todo proteína?", options: ["La torta de soya", "El grano de maíz", "La sal", "Los trozos de yuca"], answer: 0, why: "Las tortas de oleaginosas, como la torta de soya, son ricas en proteína; el maíz y la yuca dan sobre todo energía." }
          ]
        },
        {
          title: "Ingredientes y forrajes locales",
          objectives: ["O2"],
          minutes: 6,
          goal: "Clasificar los alimentos que puedes conseguir en alimentos energéticos, alimentos proteicos, forraje fibroso y suplementos.",
          text: [
            "Alimentos energéticos: grano de maíz, sorgo y mijo, yuca (pelada, seca o procesada para que sea segura), salvado de maíz y salvado de trigo. Los salvados son más baratos que el grano y dan algo de proteína y fibra, pero demasiado salvado en una mezcla para aves diluye la energía. El grano de maíz tiene solo unos 8 a 10 por ciento de proteína, así que por sí solo no puede alimentar a un animal en crecimiento.",
            "Alimentos proteicos: torta de soya (a menudo alrededor de 44 a 48 por ciento de proteína, según cómo se hizo), torta de semilla de algodón, torta de maní, torta de girasol y harina de pescado (como la omena en Kenia). La torta de semilla de algodón contiene gosipol, que puede dañar a los cerdos, a las aves y a los animales jóvenes, así que úsala solo dentro de los límites de una guía de alimentación o de un nutricionista. La harina de pescado es rica pero cara, y su calidad varía: cómprala a una fuente de confianza y revisa que no esté mezclada con arena ni con sal.",
            "Forrajes para rumiantes: pasto Napier, pasto Brachiaria, rastrojo de maíz, leguminosas como el desmodium y el lablab, y hojas de árboles como la leucaena y la calliandra. Las leguminosas tienen mucha proteína y pueden reemplazar parte del concentrado comprado. El sistema push-pull (\"atraer y repeler\") del icipe (Centro Internacional de Fisiología y Ecología de los Insectos) siembra desmodium entre los surcos de maíz y Napier o Brachiaria alrededor del campo: protege el maíz de las plagas y da forraje de alta calidad. Suplementos: sal, piedra caliza o conchas para el calcio, y una premezcla de minerales y vitaminas usada como dice la etiqueta."
          ],
          steps: ["Haz una lista de todos los alimentos que puedes comprar o cultivar cerca.", "Marca cada uno: energético, proteico, forraje fibroso o suplemento.", "Escribe su precio por kg y en qué época del año lo puedes conseguir.", "Pregunta a tu proveedor o extensionista su valor de proteína.", "Anota cualquier límite, como el de la torta de semilla de algodón para cerdos y aves."],
          words: [["Concentrado", "alimento rico en energía o en proteína, como grano, salvado, torta de oleaginosas o un alimento lechero comprado."], ["Torta de oleaginosas", "lo que queda después de prensar el aceite de semillas como la soya o el algodón; rica en proteína."], ["Leguminosa", "una planta como el desmodium, el lablab o los frijoles, rica en proteína, que agrega nitrógeno al suelo."], ["Gosipol", "una sustancia natural de la semilla de algodón que puede dañar a los cerdos, a las aves y a los animales jóvenes."]],
          slides: [
            { title: "Alimentos energéticos", bullets: ["Maíz, sorgo, mijo, yuca procesada de forma segura", "Salvado de maíz y de trigo: más baratos, más fibra", "Maíz solo: apenas unos 8 a 10 por ciento de proteína"] },
            { title: "Alimentos proteicos", bullets: ["Torta de soya, a menudo unos 44 a 48 por ciento de proteína", "Torta de semilla de algodón, de maní y de girasol", "Harina de pescado: rica, pero revisa su calidad"] },
            { title: "Forraje para rumiantes", bullets: ["Napier, Brachiaria, rastrojo de maíz", "Leguminosas: desmodium, lablab, leucaena, calliandra", "El push-pull da forraje y protege el maíz"] },
            { title: "Suplementos y límites", bullets: ["Sal, piedra caliza o conchas, premezcla según la etiqueta", "Torta de semilla de algodón: límites para cerdos, aves y animales jóvenes", "Confirma los valores con el proveedor o el extensionista"] }
          ],
          sources: [FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY, ICIPE_PUSHPULL],
          tryIt: "Haz una tabla de 8 a 10 alimentos que puedes conseguir cerca de ti con cuatro columnas: alimento, tipo (energético, proteico, forraje fibroso o suplemento), precio por kg y meses en que se consigue.",
          youCanNow: "clasificar los alimentos que hay cerca de ti en alimentos energéticos, alimentos proteicos, forraje fibroso y suplementos, y anotar sus precios y sus límites.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es una leguminosa forrajera rica en proteína para vacas y cabras?", options: ["El rastrojo de maíz", "El salvado de trigo", "El desmodium", "Las cáscaras de yuca"], answer: 2, why: "El desmodium es una leguminosa rica en proteína; los demás dan sobre todo energía o fibra." },
            { objective: "O2", q: "¿Por qué hay que tener cuidado con la torta de semilla de algodón para cerdos y aves?", options: ["No tiene proteína", "Contiene gosipol, que les puede hacer daño", "Es demasiado barata", "Es solo para peces"], answer: 1, why: "El gosipol de la semilla de algodón puede dañar a los cerdos, a las aves y a los animales jóvenes, así que se usa dentro de los límites de la guía." }
          ]
        },
        {
          title: "Balancear una ración con el cuadrado de Pearson",
          objectives: ["O3"],
          minutes: 6,
          goal: "Balancear dos ingredientes hasta un nivel de proteína meta con el cuadrado de Pearson.",
          text: [
            "El cuadrado de Pearson es un dibujo sencillo que te dice cuánto mezclar de dos alimentos para llegar a una meta, casi siempre de proteína. Funciona con un nutriente y dos alimentos a la vez, y la meta debe estar entre los valores de los dos alimentos. Usa valores en la misma base (los dos tal como se ofrecen o los dos en materia seca).",
            "Ejemplo resuelto con valores típicos (confirma los tuyos): maíz con 9 por ciento de proteína, torta de soya con 44 por ciento, y una meta de 18 por ciento. Tu meta viene de una guía de alimentación, de tu extensionista o de un nutricionista para ese animal y esa etapa. Dibuja un cuadrado. Escribe 18 en el centro, maíz 9 en la esquina superior izquierda y torta de soya 44 en la esquina inferior izquierda. Resta en cada diagonal e ignora los signos de menos: 44 menos 18 = 26 partes de maíz (esquina superior derecha); 18 menos 9 = 9 partes de torta de soya (esquina inferior derecha). Total de partes = 26 + 9 = 35.",
            "Convierte las partes en kg por cada 100 kg: maíz = 26 / 35 x 100 = 74.3 kg; torta de soya = 9 / 35 x 100 = 25.7 kg. Comprueba: 74.3 x 9 % = 6.7 kg de proteína, más 25.7 x 44 % = 11.3 kg, en total 18.0 kg de proteína en 100 kg: 18 por ciento. En una mezcla real, primero reservas espacio para lo fijo (premezcla, sal, piedra caliza para las ponedoras, como digan la etiqueta o la guía) y luego usas el cuadrado para el resto. El cuadrado solo balancea la proteína, así que revisa la energía, la fibra y los minerales con tu extensionista."
          ],
          steps: ["Escribe la proteína meta en el centro de un cuadrado.", "Escribe el alimento A (poca proteína) en la esquina superior izquierda y el alimento B (mucha proteína) en la inferior izquierda.", "Resta en cada diagonal; ignora los signos de menos.", "Esquina superior derecha = partes del alimento A; inferior derecha = partes del alimento B.", "Divide cada una entre el total de partes y multiplica por 100 para tener kg por cada 100 kg.", "Comprueba: los kg x el porcentaje de proteína de cada alimento suman la meta."],
          words: [["Cuadrado de Pearson", "un dibujo sencillo que muestra cuánto mezclar de dos alimentos para llegar a una meta de un nutriente."], ["Proteína cruda", "el valor de proteína impreso en las etiquetas de alimento y en los informes de laboratorio, en porcentaje."], ["Ración", "el alimento que recibe un animal en un día, o la mezcla con la que se le alimenta."], ["Tal como se ofrece", "medido como está el alimento, con su agua; los valores en materia seca quitan el agua."]],
          slides: [
            { title: "El cuadrado de Pearson", bullets: ["Un nutriente, dos alimentos", "La meta debe estar entre los dos valores", "La misma base: tal como se ofrece o materia seca"] },
            { title: "Cómo armarlo", bullets: ["Centro: meta de 18 por ciento", "Arriba a la izquierda: maíz 9; abajo a la izquierda: torta de soya 44"] },
            { title: "Resta en las diagonales", bullets: ["44 - 18 = 26 partes de maíz", "18 - 9 = 9 partes de torta de soya", "Total: 35 partes"] },
            { title: "Por cada 100 kg, y luego comprueba", bullets: ["Maíz 26 / 35 x 100 = 74.3 kg", "Torta de soya 9 / 35 x 100 = 25.7 kg", "6.7 + 11.3 = 18.0 kg de proteína: en la meta"] }
          ],
          sources: [TENNESSEE_PEARSON, FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY],
          tryIt: "Usa el cuadrado de Pearson para mezclar salvado de maíz (usa 10 por ciento de proteína como valor de práctica) con torta de soya (44 por ciento) para una meta de 16 por ciento. Escribe los kg por cada 100 kg y comprueba que la proteína cuadre. (Respuesta: 28 partes de salvado y 6 partes de torta, es decir, 82.4 kg y 17.6 kg.)",
          youCanNow: "balancear dos alimentos hasta una meta de proteína con el cuadrado de Pearson y comprobar el resultado.",
          quickCheck: [
            { objective: "O3", q: "En el cuadrado de Pearson, ¿qué va en el centro?", options: ["El precio del alimento", "El peso del animal", "El número de animales", "El nivel de proteína meta"], answer: 3, why: "El nivel meta del nutriente va en el centro; los alimentos van en las esquinas de la izquierda." },
            { objective: "O3", q: "Mezclas maíz (9 por ciento) y torta de soya (44 por ciento) para llegar a 18 por ciento. ¿Cuántas partes de maíz?", options: ["26 partes (44 menos 18)", "9 partes (18 menos 9)", "35 partes", "18 partes"], answer: 0, why: "Restas en la diagonal: 44 - 18 = 26 partes de maíz." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lo que necesitan los animales y lo que tú tienes",
        questions: [
          { objective: "O1", q: "¿Por qué las vacas y las cabras pueden vivir sobre todo de pasto y los cerdos y las gallinas no?", options: ["Los cerdos y las gallinas no necesitan energía", "El pasto es venenoso para los cerdos", "Las vacas y las cabras son rumiantes y pueden digerir el forraje fibroso", "Las gallinas solo beben agua"], answer: 2, why: "El estómago de los rumiantes digiere el forraje fibroso; los cerdos y las aves necesitan mezclas a base de granos." },
          { objective: "O1", q: "¿Qué animal necesita más proteína en su alimento?", options: ["Un pollo de engorde joven que crece rápido", "Una cabra adulta en reposo en la temporada seca", "Una vaca adulta vacía que no está en ordeño", "Un buey adulto en reposo"], answer: 0, why: "Los animales jóvenes que crecen rápido, los que están en postura y los que están en ordeño necesitan más proteína." },
          { objective: "O2", q: "¿Cuál de estos es sobre todo un alimento energético?", options: ["La harina de pescado", "El grano de maíz", "La torta de soya", "El desmodium"], answer: 1, why: "El grano de maíz es sobre todo energía, con solo unos 8 a 10 por ciento de proteína." },
          { objective: "O3", q: "¿Qué par puede balancear el cuadrado de Pearson para una meta de 16 por ciento de proteína?", options: ["Maíz (9 por ciento) y salvado de maíz (10 por ciento)", "Harina de pescado (60 por ciento) y torta de soya (44 por ciento)", "Dos alimentos con más de 30 por ciento", "Maíz (9 por ciento) y torta de soya (44 por ciento)"], answer: 3, why: "La meta debe estar entre los valores de los dos alimentos: 16 está entre 9 y 44." },
          { objective: "O3", q: "Después del cuadrado tienes 26 partes de maíz y 9 partes de torta de soya. ¿Cuántos kg de torta de soya van en 100 kg?", options: ["9 kg", "35 kg", "Unos 25.7 kg", "Unos 74.3 kg"], answer: 2, why: "9 / 35 x 100 = 25.7 kg de torta de soya en 100 kg de mezcla." }
        ]
      }
    },
    {
      name: "Capítulo 2: Conserva, planea y calcula el costo de tu alimento",
      lessons: [
        {
          title: "Ensilaje, heno y almacenamiento seguro del alimento",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hacer ensilaje o heno y guardar el alimento para que se mantenga seco y sin moho.",
          text: [
            "En la temporada de lluvias hay demasiado pasto; en la temporada seca hay muy poco, y bajan la leche y el peso. Conservar forraje equilibra esto. El ensilaje es forraje verde (maíz, sorgo o Napier) guardado sin aire para que fermente y se mantenga húmedo y bueno para comer durante meses. El heno es pasto o leguminosa cortado y secado al sol hasta que está lo bastante seco para guardarlo sin que se pudra.",
            "El ensilaje, como lo enseña la FAO: picar fino, llenar rápido, compactar fuerte y sellar sin aire. Corta el maíz o el sorgo cuando el grano está suave, entre lechoso y pastoso. Pica el forraje en trozos cortos, llena rápido el silo de fosa, el tubo de plástico, la bolsa o un tambo limpio, saca cada bolsa de aire pisando o apretando, y luego sella con plástico y ponle peso encima. El Napier y otros pastos tienen poca azúcar; los productores suelen agregar melaza para ayudarlos a fermentar (pregunta a tu extensionista cuánta). Déjalo cerrado unas semanas y, una vez abierto, saca lo que necesites cada día y vuelve a cerrarlo. Un buen ensilaje huele agridulce; tira las partes con moho o podridas.",
            "Los mohos del alimento pueden producir micotoxinas, como la aflatoxina. Son venenos invisibles que bajan el crecimiento, la leche y la fertilidad, enferman a los animales y pueden pasar a la leche, los huevos y la carne. Estudios del ILRI (Instituto Internacional de Investigación en Ganadería) en Kenia encontraron aflatoxina en muchos alimentos para vacas lecheras. Para prevenirlo: compra el alimento en molinos de confianza, revisa que esté seco, que corra suelto y que huela fresco, guarda los sacos sobre tarimas, sin tocar el piso ni las paredes, bajo un techo que no gotee, usa primero el alimento más viejo y nunca des alimento con moho, ni siquiera a otros animales."
          ],
          steps: ["Ensilaje: cosecha en la etapa correcta y pica fino.", "Llena rápido la fosa, el tubo, la bolsa o el tambo y compacta fuerte para sacar el aire.", "Sella sin aire con plástico y ponle peso; déjalo cerrado unas semanas.", "Heno: corta, seca al sol, voltea seguido y guarda seco bajo techo.", "Bodega de alimento: tarimas sin tocar el piso, lejos de las paredes, techo que no gotee.", "Usa primero el alimento más viejo; tira todo lo que tenga moho, esté apelmazado o huela mal."],
          words: [["Ensilaje", "forraje verde guardado sin aire para que fermente y se mantenga bueno para dar durante meses."], ["Heno", "pasto o leguminosa cortado y secado al sol para guardarlo."], ["Micotoxina", "un veneno que producen los mohos del alimento, como la aflatoxina; no se puede ver."], ["Tarima", "una plataforma elevada de madera o de plástico que mantiene los sacos sin tocar el piso."]],
          slides: [
            { title: "Por qué conservar forraje", bullets: ["Demasiado pasto en lluvias, muy poco en la temporada seca", "El ensilaje y el heno mantienen estables la leche y el crecimiento"] },
            { title: "Ensilaje en cuatro pasos (FAO)", bullets: ["Picar fino", "Llenar rápido", "Compactar fuerte para sacar el aire", "Sellar sin aire y poner peso"] },
            { title: "Heno", bullets: ["Corta pasto o leguminosa", "Seca al sol, volteándolo seguido", "Guárdalo seco, bajo techo, sin tocar el suelo"] },
            { title: "Frena el moho y las micotoxinas", bullets: ["Compra en molinos de confianza; revisa que esté seco y huela fresco", "Tarimas, lejos de las paredes, techo que no gotee", "Lo más viejo primero; nunca des alimento con moho"] }
          ],
          sources: [FAO_SILAGE, FAO_SILAGE_SMALL, ILRI_MYCO],
          tryIt: "Ve al lugar donde guardas el alimento. Escribe tres cosas que podrían dejar entrar humedad o moho, y cómo arreglarás cada una. Luego planea una tanda de ensilaje o de heno: qué forraje, cuándo cortarlo y dónde lo guardarás.",
          youCanNow: "hacer ensilaje o heno y guardar el alimento de forma que no le entren la humedad, el moho ni las micotoxinas.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es lo más importante al hacer ensilaje?", options: ["Dejarlo abierto para que respire", "Sacar el aire y sellarlo sin aire", "Agregarle agua todos los días", "Guardarlo al sol"], answer: 1, why: "El ensilaje solo se conserva cuando se saca el aire y no se deja entrar, para que pueda fermentar." },
            { objective: "O4", q: "Un saco de alimento para vacas lecheras tiene grumos grises apelmazados y huele a humedad. ¿Qué haces?", options: ["Se lo das a las vacas secas", "Lo mezclas con alimento fresco", "Mejor se lo das a las gallinas", "No se lo das a ningún animal"], answer: 3, why: "El moho puede llevar micotoxinas que dañan a todos los animales y pueden pasar a la leche y a los huevos." }
          ]
        },
        {
          title: "Alimentar por etapa: un plan de alimentación de tres partes",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escribir un plan de alimentación para cada etapa de un tipo de animal.",
          text: [
            "Los animales necesitan alimentos diferentes en cada etapa. Pollos de engorde: iniciador y luego finalizador (algunos productores agregan un crecimiento en medio). Ponedoras: alimento para pollitas, luego alimento de crecimiento y luego alimento de postura desde el inicio de la postura, con calcio extra para la cáscara. Cerdos: preiniciador o alimento de destete, crecimiento, finalizador y luego alimentos especiales para cerdas gestantes y lactantes. Vacas lecheras: becerra, novilla, vaca seca y lactancia, con el concentrado ajustado a la leche que da cada vaca. Cambia de un alimento al siguiente a lo largo de unos días, no de un día para otro.",
            "Usa un plan sencillo de tres partes para cada etapa. Parte 1, el alimento base: lo que forma la mayor parte de la dieta. Para vacas y cabras es el forraje (pastoreo, Napier, heno, ensilaje, rastrojo); para cerdos y aves son los granos energéticos y los salvados de la mezcla. Parte 2, el concentrado: la parte rica en proteína (tortas de oleaginosas, harina de pescado, un alimento lechero comprado o una mezcla balanceada) que completa lo que le falta al alimento base. Parte 3, los suplementos: sal, minerales, vitaminas y calcio, usados como dice la etiqueta. Y además, agua limpia todo el tiempo.",
            "Alimentar por etapa ahorra dinero: no pagas alimento iniciador alto en proteína para un animal que ya no lo necesita. Pesa o calcula cuánto come cada etapa y observa a los animales: si están flacos, ponen menos o dan menos leche, pide a tu extensionista que revise el plan. La etiqueta del saco o la guía de la incubadora o de la raza dice cuándo cambiar de alimento en las razas comerciales."
          ],
          steps: ["Elige un tipo de animal.", "Haz una lista de sus etapas, desde cría hasta venta, postura o leche.", "Para cada etapa, escribe el alimento base.", "Agrega el concentrado que lo completa.", "Agrega los suplementos y el agua.", "Escribe cuándo pasar a la etapa siguiente, y haz el cambio a lo largo de unos días."],
          words: [["Alimento base", "la parte principal de la dieta: forraje para los rumiantes, granos energéticos para cerdos y aves."], ["Inicio de la postura", "la edad en que las gallinas jóvenes están por empezar a poner huevos."], ["Lactancia", "el tiempo en que una hembra produce leche."]],
          slides: [
            { title: "El alimento cambia con la etapa", bullets: ["Pollos de engorde: iniciador, luego finalizador", "Ponedoras: pollitas, crecimiento, luego postura", "Cerdos: destete, crecimiento, finalizador, cerda; lecheras: según la leche"] },
            { title: "El plan de tres partes", bullets: ["1. Base: forraje, o granos y salvados", "2. Concentrado: el complemento de proteína", "3. Suplementos: sal, minerales, vitaminas, calcio"] },
            { title: "Agua, y cambios despacio", bullets: ["Agua limpia todo el tiempo", "Cambia de alimento a lo largo de unos días"] },
            { title: "Por qué ahorra dinero", bullets: ["Nada de iniciador caro para animales que no lo necesitan", "Observa la condición corporal, los huevos y la leche"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Elige un tipo de animal. Escribe una tabla con una fila por etapa y cuatro columnas: alimento base, concentrado, suplementos y cuándo pasar a la etapa siguiente.",
          youCanNow: "escribir un plan de alimentación por etapas con alimento base, concentrado y suplementos para cada etapa.",
          quickCheck: [
            { objective: "O5", q: "En un plan de alimentación de tres partes para una vaca lechera, ¿cuál es el alimento base?", options: ["Forraje como pasto Napier, heno o ensilaje", "La premezcla de minerales", "El alimento lechero", "La sal"], answer: 0, why: "En los rumiantes, el forraje forma la mayor parte de la dieta; el concentrado y los suplementos la completan." },
            { objective: "O5", q: "Tus pollitas están cerca del inicio de la postura. ¿A qué alimento pasan?", options: ["Iniciador para pollos de engorde", "Alimento para pollitas", "Alimento de postura, con el cambio a lo largo de unos días", "Solo grano de maíz"], answer: 2, why: "El alimento de postura da el calcio extra que se necesita para la cáscara; el cambio se hace despacio, a lo largo de unos días." }
          ]
        },
        {
          title: "Calcular el costo del alimento por kg de aumento de peso o por litro de leche",
          objectives: ["O6"],
          minutes: 6,
          goal: "Calcular el costo de tu ración por kg, y el costo del alimento por kg de aumento de peso, por cartón de huevos o por litro de leche.",
          text: [
            "Paso 1, costo por kg de mezcla. Multiplica los kg de cada ingrediente por su precio, súmalos y divide entre el total de kg. Ejemplo con precios inventados en chelines kenianos (KES): 74.3 kg de maíz a KES 40 = 2,972; 25.7 kg de torta de soya a KES 90 = 2,313. Total: KES 5,285 por 100 kg, es decir, KES 52.85 por kg. Suma la molienda, el transporte y la premezcla si los pagas.",
            "Paso 2, alimento por unidad de producto. Para la carne, anota el alimento consumido y el peso ganado: si 10 cerdos comen 900 kg de alimento de crecimiento y ganan 300 kg, cada kg de aumento de peso necesitó 3 kg de alimento (la conversión alimenticia, o FCR por sus siglas en inglés). Costo del alimento por kg de aumento de peso = 3 x KES 52.85 = KES 158.55. Para los huevos: el alimento que come la parvada en una semana x el precio por kg, dividido entre los cartones recogidos. Para la leche: el costo diario del alimento de la vaca (forraje más alimento lechero) dividido entre los litros que da ese día.",
            "Usa los números para decidir. Compara el costo del alimento por kg de aumento de peso o por litro con tu precio de venta. Prueba un ingrediente más barato, como más leguminosas forrajeras o salvado local, pero revisa que siga cumpliendo la meta y que no baje el crecimiento ni la leche. Trabaja en tu propia moneda, sea NGN, GHS o XOF: el método es el mismo. Los precios cambian, así que actualiza la hoja cada vez que compres."
          ],
          steps: ["Haz una lista de cada ingrediente, sus kg por cada 100 kg y su precio por kg.", "Multiplica los kg por el precio de cada ingrediente y súmalos.", "Suma la molienda, el transporte y la premezcla; divide entre el total de kg.", "Anota el alimento consumido y el peso ganado, los huevos o la leche producidos.", "Costo del alimento por kg de aumento de peso = FCR x costo por kg de alimento.", "Costo del alimento por litro o por cartón = costo del alimento del día o de la semana / litros o cartones."],
          words: [["Conversión alimenticia (FCR)", "los kg de alimento que se necesitan para 1 kg de aumento de peso; mientras más baja, mejor."], ["Costo por kg de aumento de peso", "el dinero en alimento que se gasta por cada kg que crece el animal."], ["Cartón", "un cartón de 30 huevos, la unidad habitual para vender huevos."]],
          slides: [
            { title: "Paso 1: costo por kg de mezcla", bullets: ["kg x precio de cada ingrediente, y luego suma", "Ejemplo: KES 5,285 por 100 kg = KES 52.85 por kg", "Suma molienda, transporte y premezcla"] },
            { title: "Paso 2: alimento por kg de aumento de peso", bullets: ["900 kg de alimento / 300 kg ganados = FCR de 3", "3 x KES 52.85 = KES 158.55 por kg de aumento de peso"] },
            { title: "Huevos y leche", bullets: ["Huevos: costo semanal del alimento / cartones recogidos", "Leche: costo diario del alimento / litros de ese día"] },
            { title: "Úsalo para decidir", bullets: ["Compara con tu precio de venta", "Prueba ingredientes locales más baratos; revisa la meta", "Actualiza con cada compra; los precios son ejemplos"] }
          ],
          tryIt: "Tarea final: prepara una ración con su costo para un tipo de animal. Escribe el plan de tres partes, balancea el concentrado con el cuadrado de Pearson, escribe los kg por cada 100 kg, calcula su costo por kg con tus precios locales y calcula el costo del alimento por kg de aumento de peso, por cartón de huevos o por litro de leche.",
          youCanNow: "calcular el costo de una ración por kg y el costo de tu alimento por kg de aumento de peso, por cartón de huevos o por litro de leche.",
          quickCheck: [
            { objective: "O6", q: "100 kg de mezcla cuestan XOF 20,000 en total. ¿Cuál es el costo por kg?", options: ["XOF 2,000", "XOF 20", "XOF 100", "XOF 200"], answer: 3, why: "20,000 / 100 kg = XOF 200 por kg." },
            { objective: "O6", q: "Unos pollos de engorde comieron 400 kg de alimento y ganaron 250 kg. ¿Cuál es la FCR?", options: ["1.6", "0.6", "2.5", "4.0"], answer: 0, why: "FCR = alimento consumido / peso ganado = 400 / 250 = 1.6." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Conserva, planea y calcula el costo de tu alimento",
        questions: [
          { objective: "O4", q: "¿Por qué los productores agregan melaza al hacer ensilaje de pasto Napier?", options: ["El Napier tiene poca azúcar y la melaza lo ayuda a fermentar", "Para que sea más dulce para los niños", "Para que no entre la lluvia", "Para reemplazar la cubierta de plástico"], answer: 0, why: "Los pastos con poca azúcar fermentan mal; la melaza da el azúcar que necesita la fermentación." },
          { objective: "O4", q: "¿Qué bodega protege mejor el alimento del moho?", options: ["Sacos en el piso desnudo, contra una pared", "Sacos afuera, debajo de un árbol", "Sacos sobre tarimas, lejos de las paredes, bajo un techo que no gotee", "Montones abiertos dentro del corral de los animales"], answer: 2, why: "Mantener los sacos secos y sin tocar el piso ni las paredes frena la humedad, el moho y las micotoxinas." },
          { objective: "O5", q: "¿Cuáles son las tres partes del plan de alimentación de este curso?", options: ["Alimento de la mañana, del mediodía y de la noche", "Alimento base o forraje, concentrado y suplementos", "Solo pasto, agua y sal", "Solo iniciador, crecimiento y finalizador"], answer: 1, why: "El plan es alimento base, concentrado y suplementos, más agua, para cada etapa." },
          { objective: "O6", q: "El alimento cuesta KES 50 por kg y la FCR es 3. ¿Cuál es el costo del alimento por kg de aumento de peso?", options: ["KES 53", "KES 17", "KES 300", "KES 150"], answer: 3, why: "Costo del alimento por kg de aumento de peso = FCR x precio por kg = 3 x 50 = KES 150." },
          { objective: "O6", q: "El alimento de una vaca cuesta NGN 3,000 al día y ella da 10 litros. ¿Cuál es el costo del alimento por litro?", options: ["NGN 30", "NGN 300", "NGN 3,000", "NGN 30,000"], answer: 1, why: "3,000 / 10 litros = NGN 300 por litro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Nutrición del ganado y formulación de raciones con ingredientes locales",
    questions: [
      { objective: "O1", q: "¿Cuáles son las cuatro necesidades principales que un animal obtiene del alimento y del agua?", options: ["Energía, proteína, minerales y vitaminas, y agua", "Pasto, sal, azúcar y aceite", "Maíz, frijoles, arroz y leche", "Calor, luz, aire y suelo"], answer: 0, why: "La energía, la proteína, los minerales y vitaminas, y el agua son las cuatro necesidades." },
      { objective: "O1", q: "¿Qué alimento aporta sobre todo el calcio para la cáscara de los huevos?", options: ["El salvado de maíz", "El pasto Napier", "La piedra caliza o las conchas", "La melaza"], answer: 2, why: "La piedra caliza y las conchas molidas son fuentes de calcio para las gallinas ponedoras." },
      { objective: "O1", q: "¿Qué animales necesitan forraje fibroso como base de su dieta?", options: ["Los pollos de engorde", "Las gallinas ponedoras", "Los lechones destetados", "Las vacas, las cabras y las ovejas"], answer: 3, why: "Los rumiantes digieren el forraje fibroso; es la base de su dieta." },
      { objective: "O2", q: "¿Más o menos cuánta proteína tiene el grano de maíz?", options: ["Unos 8 a 10 por ciento", "Unos 44 por ciento", "Unos 60 por ciento", "Nada"], answer: 0, why: "Feedipedia le da al maíz unos 8 a 10.5 por ciento de proteína, así que es sobre todo un alimento energético." },
      { objective: "O2", q: "¿Cuál de estos es un alimento proteico?", options: ["Los trozos de yuca", "El salvado de trigo", "La harina de pescado", "El rastrojo de maíz"], answer: 2, why: "La harina de pescado es rica en proteína; los demás son sobre todo energía o forraje fibroso." },
      { objective: "O2", q: "¿Qué ventaja tiene el sistema push-pull del icipe para un productor de leche?", options: ["Reemplaza el agua", "El desmodium y el Napier o la Brachiaria dan forraje de alta calidad", "Ya no hacen falta los minerales", "Convierte a las vacas en rumiantes"], answer: 1, why: "El push-pull protege el maíz, y sus plantas acompañantes son forraje de alta calidad." },
      { objective: "O2", q: "¿Qué debes revisar al comprar harina de pescado?", options: ["Que venga de una fuente de confianza y no esté mezclada con arena ni sal", "Que sea la más barata", "Que esté húmeda", "Que huela a moho"], answer: 0, why: "La calidad de la harina de pescado varía y se puede adulterar, así que se compra a fuentes de confianza." },
      { objective: "O3", q: "¿Cuántos nutrientes a la vez balancea el cuadrado de Pearson?", options: ["Todos", "Tres", "Dos", "Uno"], answer: 3, why: "Balancea un nutriente, casi siempre la proteína, entre dos alimentos." },
      { objective: "O3", q: "Maíz (9 por ciento) y torta de soya (44 por ciento), meta de 18. ¿Cuántas partes de torta de soya?", options: ["26", "9", "35", "44"], answer: 1, why: "18 - 9 = 9 partes de torta de soya." },
      { objective: "O3", q: "¿Por qué no puedes usar maíz (9 por ciento) y salvado (10 por ciento) para llegar a 18 por ciento de proteína?", options: ["La meta debe estar entre los valores de los dos alimentos", "El salvado es demasiado barato", "El cuadrado solo sirve para las vacas", "El maíz no tiene proteína"], answer: 0, why: "18 está por encima de los dos alimentos, así que ninguna mezcla de ellos puede llegar a esa meta." },
      { objective: "O3", q: "Después del cuadrado, ¿cómo compruebas tu mezcla?", options: ["Le preguntas a un vecino", "La hueles", "Los kg x el porcentaje de proteína de cada alimento deben sumar la meta", "Pesas a los animales el mismo día"], answer: 2, why: "Sumar la proteína de cada ingrediente confirma que la mezcla llega a la meta." },
      { objective: "O4", q: "¿Cuáles son los cuatro pasos del ensilaje que enseña la FAO?", options: ["Cortar, lavar, secar, quemar", "Picar, llenar rápido, compactar, sellar", "Sembrar, regar, deshierbar, vender", "Remojar, hervir, enfriar, ensacar"], answer: 1, why: "Picar, llenar rápido, compactar y sellar dan un buen ensilaje." },
      { objective: "O4", q: "¿Qué es una micotoxina?", options: ["Una vitamina del alimento", "Un tipo de pasto", "Un suplemento de proteína", "Un veneno invisible que producen los mohos del alimento"], answer: 3, why: "Los mohos pueden producir micotoxinas como la aflatoxina, que dañan a los animales y pueden pasar a la leche." },
      { objective: "O4", q: "¿Qué regla ayuda a mantener seguro el alimento guardado?", options: ["Usar primero el alimento más viejo", "Guardar los sacos en el piso junto a la pared", "Tener el alimento dentro del corral de los animales", "Mezclar el alimento con moho con alimento fresco"], answer: 0, why: "Lo primero que entra es lo primero que sale: así el alimento no se queda guardado hasta echarse a perder." },
      { objective: "O5", q: "¿Por qué alimentar por etapa?", options: ["Hace que los animales coman más", "Cada etapa tiene necesidades distintas, así que no pagas nutrientes que no necesitan", "Las empresas de alimento lo exigen", "Ya no hace falta el agua"], answer: 1, why: "Ajustar el alimento a la etapa cubre las necesidades y ahorra dinero." },
      { objective: "O5", q: "¿Cómo debes cambiar de un alimento al siguiente?", options: ["De un día para otro", "Solo cuando los animales están enfermos", "A lo largo de unos días", "Nunca cambies de alimento"], answer: 2, why: "Los cambios graduales no alteran la digestión ni el consumo del animal." },
      { objective: "O5", q: "En los cerdos y las aves, ¿cuál es la parte base de la dieta?", options: ["El pasto Napier", "La sal", "La harina de pescado", "Los granos energéticos y los salvados de la mezcla"], answer: 3, why: "Los cerdos y las aves no pueden digerir mucho forraje fibroso, así que los granos y los salvados son su base." },
      { objective: "O6", q: "¿Qué quiere decir una conversión alimenticia de 2?", options: ["2 kg de alimento por cada 1 kg de aumento de peso", "2 comidas al día", "2 animales por comedero", "2 por ciento de proteína"], answer: 0, why: "La FCR son los kg de alimento que se necesitan para 1 kg de aumento de peso." },
      { objective: "O6", q: "50 kg de maíz a GHS 4 y 50 kg de salvado a GHS 2. ¿Costo por kg de la mezcla?", options: ["GHS 6", "GHS 3", "GHS 300", "GHS 2"], answer: 1, why: "(50 x 4) + (50 x 2) = 300 por 100 kg, es decir, GHS 3 por kg." },
      { objective: "O6", q: "Una parvada de ponedoras come alimento que cuesta KES 7,000 a la semana y recoges 70 cartones. ¿Cuál es el costo del alimento por cartón?", options: ["KES 10", "KES 70", "KES 100", "KES 490"], answer: 2, why: "7,000 / 70 cartones = KES 100 de alimento por cartón." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 4, 7, 8, 12, 14, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte de la ración y vuelve a revisarla.",
    criteria: [
      { name: "Tipo de animal, etapa y plan de tres partes", objective: "O5", notYet: "No nombra el tipo de animal ni la etapa, o falta el alimento base, el concentrado o los suplementos.", meets: "Nombra el tipo de animal y la etapa, y da el alimento base, el concentrado, los suplementos y el agua.", exceeds: "También muestra la etapa siguiente y cuándo y cómo cambiar de alimento." },
      { name: "Ingredientes bien clasificados y adecuados", objective: "O2", notYet: "Los ingredientes están mal clasificados o no son seguros (por ejemplo con moho, o torta de semilla de algodón sin límite para las aves).", meets: "Usa ingredientes locales bien clasificados en energéticos, proteicos, forraje fibroso y suplementos.", exceeds: "Usa una leguminosa o un salvado local más barato y explica cómo se mantiene la meta." },
      { name: "Cuadrado de Pearson", objective: "O3", notYet: "No muestra los cálculos, o la meta no está entre los dos alimentos.", meets: "Cuadrado dibujado, partes y kg por cada 100 kg correctos, y la comprobación suma la meta con menos de 0.5 puntos de diferencia.", exceeds: "Reserva primero lo fijo, como la premezcla, y balancea el resto." },
      { name: "Costos", objective: "O6", notYet: "Falta el costo por kg o los cálculos están mal.", meets: "Costo correcto por kg de mezcla y costo del alimento por kg de aumento de peso, por cartón de huevos o por litro de leche, en moneda local.", exceeds: "Lo compara con el precio de venta y muestra una forma de bajar el costo." },
      { name: "Calidad y almacenamiento del alimento", objective: "O4", notYet: "No dice dónde se guarda el alimento ni cómo se evita el moho.", meets: "Dice dónde se guarda el alimento y cómo se mantiene seco y sin moho, usando primero lo más viejo.", exceeds: "Incluye un plan de ensilaje o de heno para la temporada seca." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que mezclan o ajustan al menos una ración con el cuadrado de Pearson en los 30 días siguientes (encuesta de seguimiento)",
      "Participantes que hacen ensilaje o heno antes de la próxima temporada seca",
      "Cambio en el costo del alimento por kg de aumento de peso, por cartón de huevos o por litro de leche que reportan los participantes después de tres meses",
      "Menos reportes de alimento con moho y de enfermedades causadas por el alimento en los hatos y las parvadas de los participantes"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, lápiz y la calculadora del teléfono; una hoja de cálculo en el teléfono es opcional",
      "Precios locales de 8 a 10 alimentos, y las etiquetas o los valores del proveedor para su proteína",
      "Para una demostración en grupo: forraje picado, una bolsa o un tubo de plástico resistente y una báscula",
      "Unos 70 a 80 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Antes de la sesión, reúna los precios locales de los alimentos y sus valores de proteína (etiquetas del proveedor, laboratorio de alimentos u oficina de extensión) para que los participantes practiquen con números reales.",
      "Hagan juntos el cuadrado de Pearson en un pizarrón o un rotafolio con un ejemplo local, y luego deje que las parejas hagan un segundo ejemplo.",
      "Haga una demostración de ensilaje en bolsa si la temporada lo permite, y ábranla con el grupo unas semanas después.",
      "No dé dosis de alimentos medicados, aditivos ni medicamentos; envíe esas preguntas al veterinario y a la etiqueta.",
      "Califique la ración con su costo usando la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
