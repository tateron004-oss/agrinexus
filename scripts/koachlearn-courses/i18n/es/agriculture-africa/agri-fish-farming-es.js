"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-fish-farming.js). See scripts/koachlearn-courses/README.md, "Translations".
// Safety rule kept from the English: no drug or chemical doses; sick fish -> fisheries extension officer or vet.

const FAO_OXYGEN = { name: "FAO, Centro Regional Africano de Acuicultura (Kutty, 1987): oxígeno disuelto en los estanques de peces", url: "https://www.fao.org/4/AC175E/AC175E04.htm" };
const GHANA_MANUAL = { name: "Manual para productores sobre la cría de tilapia en pequeños estanques en Ghana (Agyakwah y otros, 2020; repositorio del CGIAR)", url: "https://hdl.handle.net/10568/143338" };
const WORLDFISH_NG = { name: "WorldFish: cría de tilapia GIFT en Nigeria (criaderos, crecimiento, mercados), 2025", url: "https://worldfishcenter.org/impact-story/tilapia-farming-more-lucrative-catfish-inside-nigerias-aquaculture-shift" };
const ALR_CI = { name: "Aquatic Living Resources (2001): las densidades de siembra altas reducen el rendimiento de la tilapia del Nilo en estanques de Costa de Marfil", url: "https://www.alr-journal.org/articles/alr/abs/2001/05/alr1120/alr1120.html" };
const GHANA_FC = { name: "Fisheries Commission (Comisión de Pesca de Ghana): permisos y licencias, incluida la acuicultura", url: "https://www.fishcom.gov.gh/" };
const KENYA_ACT = { name: "Kenia: Ley de Manejo y Desarrollo Pesquero de 2016 (registro y licencias de la acuicultura), en FAOLEX", url: "https://faolex.fao.org/docs/pdf/ken160880.pdf" };

module.exports = {
  id: "agri-fish-farming-es",
  lang: "es",
  translationOf: "agri-fish-farming",
  category: "Agriculture (Africa)",
  name: "Piscicultura (acuicultura) básica",
  skills: "Elegir tilapia o bagre, Ubicar y construir un estanque, Revisar la calidad del agua, Comprar y sembrar alevines de calidad, Alimentar y medir la conversión alimenticia, Calcular los costos de un ciclo de producción",
  outcome: "planear y manejar un ciclo de producción de tilapia o bagre africano en un estanque o tanque: elegir la especie y el lugar, revisar los permisos, analizar el agua con herramientas sencillas, sembrar alevines de calidad a una densidad segura, alimentar bien y seguir la conversión alimenticia, resolver los problemas comunes, y cosechar y vender con una ganancia que calculaste de antemano.",
  about: [
    "Este curso es para piscicultores nuevos y pequeños, trabajadores agrícolas, jóvenes emprendedores del campo y extensionistas de Ghana, Nigeria, Kenia, Costa de Marfil y de toda África que quieren criar tilapia o bagre africano en estanques o tanques. La piscicultura puede dar buenos ingresos y alimentar a las familias, pero muchos primeros estanques fracasan por alevines malos, agua en mal estado y un alimento que cuesta más de lo que se vende el pescado.",
    "El Capítulo 1 planea la granja: elegir la especie, ubicar y construir el estanque o tanque y revisar los permisos, y mantener bien la calidad del agua con pruebas sencillas. El Capítulo 2 cría y vende los peces: alevines de calidad y densidad de siembra, alimentación y conversión alimenticia con los problemas comunes, y la cosecha, la venta y la economía de un ciclo.",
    "Las reglas y los permisos para las granjas de peces cambian según el país y con el tiempo; este curso nombra los organismos a los que hay que consultar. No da dosis de medicamentos ni de productos químicos: si tus peces se enferman, llama a tu extensionista de pesca o a un veterinario. Las cifras de dinero son solo ejemplos; usa tus propias cotizaciones. Cada lección dura unos cinco minutos y termina con una tarea para tu propia granja. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan con costos para un ciclo de un estanque (o tanque) en tu granja, o para un ejemplo como un estanque de tilapia de 300 metros cuadrados cerca de Kumasi o tanques de bagre cerca de Ibadán: la especie y por qué; el lugar, la fuente de agua y el permiso que revisaste; las pruebas del agua y cada cuánto las harás; el número de alevines, la densidad y el criadero certificado donde los comprarás; la supervivencia esperada, el peso a la cosecha y el alimento necesario usando un FCR esperado; cada costo; las ventas esperadas; la ganancia o pérdida; y tu precio de equilibrio por kilogramo.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Piscicultores nuevos y pequeños, trabajadores agrícolas, jóvenes emprendedores del campo y extensionistas de Ghana, Nigeria, Kenia, África occidental francófona y otras partes de África, que planean o manejan uno o pocos estanques de tierra, estanques revestidos o tanques de tilapia o bagre africano.",
    startingPoint: "Saben que se pueden criar peces y quizá tienen una fuente de agua y algo de terreno. Muchos nunca han analizado el agua, compran alevines a cualquier vendedor, alimentan al cálculo y no han sacado los costos de un ciclo antes de empezar.",
    gap: "Los fracasos comunes son alevines de mala calidad o de ambos sexos, demasiados peces, caídas de oxígeno al amanecer, exceso de alimento y costos de alimento mayores que las ventas de pescado. Los productores necesitan planear un ciclo en papel, mantener el agua sana con pruebas sencillas, sembrar el número correcto de alevines buenos y comparar el alimento con el crecimiento para saber antes de la cosecha si tendrán ganancia.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: un teléfono básico o inteligente, una calculadora y herramientas de prueba baratas (termómetro, tiras de pH, un disco de Secchi hecho en casa)",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre las tareas de la granja",
      "Los permisos y las reglas sobre especies cambian según el país; los participantes deben consultar con su oficina de pesca nacional o del condado",
      "Ninguna dosis de medicamentos ni de productos químicos; los peces enfermos van al extensionista o al veterinario",
      "Las cifras de dinero son ejemplos; los precios del alimento y del pescado cambian mucho según el lugar y la temporada"
    ],
    prerequisites: "Ninguno. Las ideas de \"registros de la finca y margen bruto\" del curso \"Agronegocios y administración de la finca\" ayudan con los costos de la Lección 6."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Según tu agua, tu terreno, tu dinero y tu mercado local", action: "elegir tilapia o bagre africano y un sistema de estanque o tanque", standard: "dando al menos tres razones ligadas a tu lugar y a tus compradores" },
    { id: "O2", condition: "Con un posible lugar", action: "revisar el agua, el suelo, la pendiente y el riesgo de inundación del lugar, y anotar los permisos que hay que consultar", standard: "nombrando el organismo de pesca de tu país al que vas a contactar" },
    { id: "O3", condition: "Con un termómetro, tiras de pH y un disco de Secchi", action: "analizar el agua del estanque y decir qué hacer cuando el oxígeno, la temperatura o el pH están fuera de rango", standard: "anotando cada prueba con la fecha y la hora" },
    { id: "O4", condition: "Con el tamaño de un estanque o tanque", action: "calcular cuántos alevines sembrar y anotar las revisiones para elegir un criadero certificado", standard: "con las cuentas correctas y la densidad acordada con un extensionista o con el criadero" },
    { id: "O5", condition: "Con los registros de alimento y los pesos de muestra", action: "calcular el factor de conversión alimenticia y detectar a tiempo los problemas comunes", standard: "correcto hasta un decimal" },
    { id: "O6", condition: "Con los costos, la supervivencia esperada, el peso a la cosecha y el precio", action: "escribir un plan con costos para un ciclo, con la ganancia y el precio de equilibrio", standard: "con todos los costos incluidos y las cuentas correctas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear la granja de peces",
      lessons: [
        {
          title: "Elegir una especie y un sistema",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir tilapia o bagre africano y un sistema de estanque o tanque para tu granja.",
          text: [
            "En África se crían sobre todo dos peces. La tilapia del Nilo es popular en Ghana, Kenia, Costa de Marfil y Egipto. Come pellets y el alimento natural del agua verde, y se vende fresca, frita o asada. La tilapia de ambos sexos se reproduce en el estanque y lo llena de peces pequeños, por eso los productores compran alevines monosexo (casi todos machos). Las líneas mejoradas como la GIFT crecen más rápido; WorldFish informa que productores de Nigeria llegan a unos 600 g en seis meses con GIFT y buena alimentación.",
            "El bagre africano (Clarias) es el principal pez de cultivo en Nigeria y es popular fresco y ahumado. Puede respirar aire, así que aguanta mejor el oxígeno bajo y se puede tener a mayor densidad, muchas veces en tanques. Pero necesita un alimento más rico en proteína, y los peces grandes se comen a los pequeños, por eso hay que separarlos por tamaño.",
            "Elige el sistema: un estanque de tierra es barato de manejar donde el suelo retiene el agua; un estanque revestido o un tanque de concreto o plástico sirve en suelo arenoso o en parcelas pequeñas, pero cuesta más construirlo y necesita más cambios de agua. Lo más importante: antes de elegir, pregunta a los compradores qué pez y de qué tamaño quieren, y a qué precio."
          ],
          steps: ["Pregunta a tres compradores (vendedores del mercado, hoteles, ahumadores) qué pez, tamaño y precio quieren.", "Revisa tu agua: cuánta hay, si dura todo el año y qué tan limpia es.", "Revisa tu suelo: ¿retiene el agua?", "Elige la especie que quieren los compradores y que tu agua puede mantener.", "Elige estanque o tanque según el suelo, el espacio y el dinero."],
          words: [["Acuicultura", "cría de peces y otros animales acuáticos."], ["Alevín", "un pez joven, más o menos del tamaño de un dedo, que se compra para sembrar."], ["Monosexo", "alevines que son casi todos del mismo sexo (tilapia macho), para que crezcan en vez de reproducirse."], ["GIFT", "Genetically Improved Farmed Tilapia (tilapia de cultivo mejorada genéticamente), una línea de tilapia de crecimiento más rápido desarrollada por WorldFish."]],
          slides: [
            { title: "Tilapia del Nilo", bullets: ["Popular en Ghana, Kenia, Costa de Marfil", "Come pellets y el alimento del agua verde", "Compra alevines monosexo; la GIFT crece más rápido"] },
            { title: "Bagre africano", bullets: ["Principal pez de cultivo en Nigeria; fresco o ahumado", "Respira aire; se puede tener más denso, en tanques", "Necesita alimento rico en proteína; separa por tamaño"] },
            { title: "Estanque o tanque", bullets: ["Estanque de tierra: barato donde el suelo retiene agua", "Estanque revestido o tanque: suelo arenoso, parcelas pequeñas", "Los tanques cuestan más y necesitan más cambios de agua"] },
            { title: "Empieza por el comprador", bullets: ["¿Qué pez? ¿Qué tamaño? ¿Qué precio?", "Pregunta al menos a tres compradores", "Luego elige especie y sistema"] }
          ],
          sources: [WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Pregunta al menos a tres compradores de tu zona qué pez quieren, de qué tamaño y a qué precio. Anota sus respuestas y luego elige tilapia o bagre y estanque o tanque, con tres razones de tu lugar y de tus compradores.",
          youCanNow: "elegir entre tilapia y bagre africano, y entre estanque y tanque, según tu agua, tu suelo y tus compradores.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué los productores de tilapia compran alevines monosexo?", options: ["Son más baratos", "Para que los peces crezcan en vez de reproducirse y llenar el estanque de peces pequeños", "No necesitan alimento", "Saben mejor"], answer: 1, why: "La tilapia de ambos sexos se reproduce en el estanque y termina pequeña y atrofiada." },
            { objective: "O1", q: "Tu suelo es arenoso y no retiene el agua. ¿Qué sistema conviene más?", options: ["Un estanque de tierra sin revestir", "No se puede criar peces", "Un estanque en la orilla del río", "Un estanque revestido o un tanque"], answer: 3, why: "Un revestimiento o un tanque retiene el agua donde el suelo no lo hace." }
          ]
        },
        {
          title: "Ubicar y construir un estanque, y los permisos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Revisar un lugar para un estanque y anotar los permisos que hay que consultar.",
          text: [
            "Un buen lugar para un estanque tiene: agua todo el año, limpia y no contaminada por fábricas, minas o campos fumigados; un suelo con suficiente arcilla para retener el agua (aprieta un puñado de tierra húmeda: si mantiene su forma, es buena señal); una pendiente suave para que el estanque se llene y se vacíe por gravedad; nada de inundaciones; y está lo bastante cerca para vigilarlo contra ladrones y depredadores.",
            "Construye el estanque con un dique (bordo) firme e inclinado, sembrado con pasto para evitar la erosión, una entrada de agua con malla para que no entren peces silvestres, y una salida o tubo de desagüe para vaciar el estanque en la cosecha. Un estanque de unos cientos de metros cuadrados es fácil de manejar para un principiante. Ponle cerca si puedes, y mantén alejados a los animales y los niños. Prepara el estanque antes de sembrar: sécalo, saca el lodo y los peces silvestres, y échale cal y fertilizante si tu extensionista lo aconseja.",
            "Las granjas de peces muchas veces necesitan registro o permiso, y a veces una autorización de uso de agua o ambiental. En Kenia, la Ley de Manejo y Desarrollo Pesquero de 2016 exige que la acuicultura se registre y tenga licencia ante el Kenya Fisheries Service (Servicio de Pesca de Kenia). En Ghana, la Fisheries Commission (Comisión de Pesca) da los permisos de acuicultura. En Nigeria, consulta al Departamento Federal de Pesca y Acuicultura y al ministerio de tu estado; en Costa de Marfil, al ministerio encargado de la pesca. Algunas zonas solo permiten ciertas especies o líneas. Las reglas cambian, así que consulta antes de cavar."
          ],
          steps: ["Revisa la fuente de agua: suficiente todo el año, y limpia.", "Haz la prueba de apretar el suelo; pide a un extensionista que lo confirme.", "Elige un terreno con pendiente suave, por encima del nivel de inundación, cerca de donde puedas vigilarlo.", "Planea un dique firme, una entrada con malla y una salida para vaciar.", "Contacta a la oficina de pesca: registro, permisos, uso del agua, especies permitidas.", "Prepara el estanque antes de sembrar, como aconseje tu extensionista."],
          words: [["Dique", "el bordo de tierra que rodea un estanque."], ["Entrada y salida", "los tubos o canales por donde el agua entra al estanque y sale de él."], ["Permiso", "la autorización oficial que necesitas antes de empezar o manejar la granja."]],
          slides: [
            { title: "Un buen lugar", bullets: ["Agua limpia todo el año", "Suelo con arcilla que retiene el agua", "Pendiente suave; sin inundaciones; fácil de vigilar"] },
            { title: "Constrúyelo bien", bullets: ["Dique firme y con pasto", "Entrada con malla; salida para vaciar", "Cerca; mantén lejos a animales y niños"] },
            { title: "Permisos: consulta primero", bullets: ["Kenia: registro y licencia ante el Kenya Fisheries Service", "Ghana: permiso de acuicultura de la Fisheries Commission", "Nigeria y Costa de Marfil: oficinas de pesca nacionales y estatales"] },
            { title: "Antes de cavar", bullets: ["Pregunta por las reglas de uso del agua y ambientales", "Pregunta qué especies están permitidas", "Las reglas cambian: consulta con la oficina"] }
          ],
          sources: [GHANA_MANUAL, KENYA_ACT, GHANA_FC],
          tryIt: "Recorre tu posible lugar. Anota la fuente de agua, el resultado de la prueba de apretar el suelo, la pendiente, el riesgo de inundación y cómo lo vigilarás. Luego busca el teléfono o la oficina de tu organismo de pesca y anota tres preguntas sobre permisos y especies.",
          youCanNow: "juzgar si un lugar sirve para un estanque de peces, planear sus partes principales y saber a qué oficina de pesca preguntar por los permisos.",
          quickCheck: [
            { objective: "O2", q: "Aprietas tierra húmeda y mantiene su forma. ¿Qué indica?", options: ["El suelo tiene arcilla y puede retener el agua", "El suelo es demasiado arenoso", "El lugar se va a inundar", "El agua está contaminada"], answer: 0, why: "Un suelo arcilloso que mantiene su forma suele retener el agua del estanque; pide a un extensionista que lo confirme." },
            { objective: "O2", q: "Antes de cavar un estanque en Ghana, ¿con quién debes consultar sobre los permisos?", options: ["Solo con el banco", "Con nadie; los estanques no necesitan permisos", "Con la Fisheries Commission", "Con la junta de control de plagas"], answer: 2, why: "La Fisheries Commission de Ghana da los permisos de acuicultura." }
          ]
        },
        {
          title: "Calidad del agua con pruebas sencillas",
          objectives: ["O3"],
          minutes: 6,
          goal: "Analizar el agua del estanque y actuar cuando algo sale mal.",
          text: [
            "Los peces viven en el agua, así que el agua mala los mata rápido. Vigila tres cosas. Oxígeno: en los estanques verdes es más alto por la tarde y más bajo al amanecer, porque las plantas y las algas usan oxígeno de noche. Los días nublados, el exceso de algas, el alimento que se pudre y el estiércol lo empeoran. Un documento de la FAO señala que la tilapia se vuelve mucho menos activa cuando el oxígeno baja a unos 1 a 2 mg por litro. Temperatura: la tilapia y el bagre son peces de agua cálida; comen y crecen despacio en agua fresca, como en zonas altas o en la temporada fría. pH (qué tan ácida es el agua): el agua demasiado ácida o demasiado alcalina estresa a los peces.",
            "Pruebas sencillas: un termómetro para la temperatura; tiras de papel de pH o un kit; un disco de Secchi (un plato blanco y negro en un palo marcado) para ver qué tan verde está el agua; y tus ojos al amanecer. Los peces que boquean en la superficie al amanecer indican que el oxígeno está bajo. Si puedes pagarlo, un kit o un medidor de oxígeno te da un número.",
            "Si el oxígeno está bajo: deja de alimentar o reduce el alimento hasta que los peces se recuperen, agrega agua fresca, salpica o bombea el agua para mezclarle aire y saca los peces muertos. Si el agua está muy verde, fertiliza menos. Si el pH está mal, pregunta a tu extensionista sobre el encalado. Anota cada prueba con la fecha y la hora."
          ],
          steps: ["Revisa el estanque al amanecer: ¿hay peces boqueando en la superficie?", "Toma la temperatura del agua con un termómetro.", "Mide el pH con tiras o un kit una vez por semana.", "Baja el disco de Secchi hasta que desaparezca; anota la profundidad.", "Oxígeno bajo: deja de alimentar, agrega agua fresca, salpica o airea, saca los peces muertos.", "Anota cada resultado con la fecha y la hora."],
          words: [["Oxígeno disuelto", "el oxígeno mezclado en el agua, que los peces respiran por las branquias."], ["pH", "un número que muestra qué tan ácida o alcalina es el agua."], ["Disco de Secchi", "un plato blanco y negro que se baja en el agua para ver qué tan clara o verde está."], ["Aireación", "mezclar aire en el agua, con una bomba, una paleta o salpicando."]],
          slides: [
            { title: "Oxígeno", bullets: ["Más alto por la tarde, más bajo al amanecer", "Peor en días nublados y con alimento podrido", "La tilapia se vuelve lenta cerca de 1 a 2 mg por litro"] },
            { title: "Temperatura y pH", bullets: ["Agua cálida: crecimiento rápido; fresca: lento", "Demasiado ácida o alcalina estresa a los peces", "Pregunta al extensionista sobre el encalado"] },
            { title: "Pruebas sencillas", bullets: ["Termómetro; tiras de pH", "Disco de Secchi: ¿qué tan verde está el agua?", "Revisión al amanecer: peces boqueando = oxígeno bajo"] },
            { title: "Oxígeno bajo: actúa ya", bullets: ["Deja de alimentar o reduce el alimento", "Agrega agua fresca; salpica o airea", "Saca los peces muertos; anótalo"] }
          ],
          sources: [FAO_OXYGEN, GHANA_MANUAL],
          tryIt: "Haz un disco de Secchi con un plato blanco pintado con dos cuartos negros, amarrado a un palo marcado cada 5 cm. Luego haz una hoja de registro de pruebas del agua con columnas para fecha, hora, temperatura, pH, profundidad de Secchi, comportamiento de los peces y acción tomada, y llena una línea con un estanque o una fuente de agua cerca de ti.",
          youCanNow: "revisar el oxígeno, la temperatura, el pH y qué tan verde está el agua con herramientas sencillas, y actuar rápido cuando el agua se echa a perder.",
          quickCheck: [
            { objective: "O3", q: "¿Cuándo suele estar más bajo el oxígeno en un estanque verde?", options: ["Al mediodía", "Por la tarde", "Al amanecer", "Nunca cambia"], answer: 2, why: "De noche las plantas y las algas usan oxígeno y no producen, así que baja hasta el amanecer." },
            { objective: "O3", q: "Al amanecer ves peces boqueando en la superficie. ¿Qué haces primero?", options: ["Darles más alimento", "Dejar de alimentar, agregar agua fresca y salpicar o airear", "Agregar fertilizante", "Esperar hasta mañana"], answer: 1, why: "Boquear indica oxígeno bajo; menos alimento y más agua fresca y mezclada lo hacen subir." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear la granja de peces",
        questions: [
          { objective: "O1", q: "¿Qué es cierto sobre el bagre africano?", options: ["Puede respirar aire y aguanta mejor el oxígeno bajo", "Solo come pasto", "Se reproduce y llena los estanques como la tilapia de ambos sexos", "No se puede criar en tanques"], answer: 0, why: "El bagre tiene un órgano para respirar aire, así que aguanta el oxígeno bajo y los tanques." },
          { objective: "O1", q: "¿Qué debes averiguar primero, antes de elegir un pez?", options: ["El color del pez", "Lo que cría tu primo", "El pez más grande posible", "Qué pez, tamaño y precio quieren tus compradores"], answer: 3, why: "Un pez que no puedes vender a buen precio es una pérdida, por bien que crezca." },
          { objective: "O2", q: "¿Por qué un estanque necesita una salida o desagüe?", options: ["Para dejar entrar peces silvestres", "Para poder vaciarlo en la cosecha y la limpieza", "Para mantener el agua tibia", "No lo necesita"], answer: 1, why: "Vaciarlo facilita la cosecha y la preparación del estanque." },
          { objective: "O2", q: "En Kenia, la acuicultura debe registrarse y tener licencia ante:", options: ["La Kenya Dairy Board", "El Kenya Wildlife Service", "El Kenya Fisheries Service", "La oficina de caminos del condado"], answer: 2, why: "La Ley de Manejo y Desarrollo Pesquero de 2016 exige registro y licencia ante el Kenya Fisheries Service." },
          { objective: "O3", q: "¿Qué muestra un disco de Secchi?", options: ["Qué tan verde o clara está el agua", "El peso de los peces", "El pH del estanque", "El oxígeno en mg por litro"], answer: 0, why: "La profundidad a la que desaparece el disco muestra cuántas algas hay en el agua." }
        ]
      }
    },
    {
      name: "Capítulo 2: Criar y vender los peces",
      lessons: [
        {
          title: "Alevines de calidad y densidad de siembra",
          objectives: ["O4"],
          minutes: 5,
          goal: "Calcular cuántos alevines sembrar y revisar un criadero.",
          text: [
            "Unos buenos alevines son la mitad del trabajo. Compra a un criadero registrado o certificado por tu autoridad de pesca, o recomendado por tu extensionista. Pregunta: ¿Las tilapias son monosexo, y de qué línea? ¿Los alevines son todos más o menos del mismo tamaño? ¿Cuántos mueren en las primeras semanas, y los reponen? ¿Puedes ver el criadero? Los alevines sanos nadan con energía, no tienen heridas y son parejos en tamaño. Los peces silvestres o de tamaños mezclados traen enfermedades, reproducción y canibalismo.",
            "La densidad de siembra es el número de peces por metro cuadrado (estanques) o por metro cúbico (tanques). Demasiados peces significa poco oxígeno, crecimiento lento y peces pequeños. Un estudio de estanques de tilapia en Costa de Marfil alimentados solo con fertilizante encontró que 2 a 3 peces por metro cuadrado ya reducían el rendimiento. Con un buen alimento en pellets se pueden sembrar más peces, y en tanques con flujo de agua o aireación todavía más, sobre todo de bagre. Acuerda tu densidad con tu extensionista o con el criadero para tu sistema.",
            "Ejemplo (las cifras son solo un ejemplo): un estanque de 20 m por 15 m tiene 300 metros cuadrados. Con una densidad de ejemplo de 3 peces por metro cuadrado, siembras 900 alevines. Transporta los alevines en el fresco de la mañana, en bolsas con oxígeno o en agua limpia, y deja flotar las bolsas en el estanque un rato para que las temperaturas se igualen antes de soltarlos."
          ],
          steps: ["Mide el estanque: largo x ancho = área en metros cuadrados.", "Acuerda una densidad con tu extensionista o con el criadero.", "Área x densidad = número de alevines.", "Elige un criadero registrado o recomendado; pregunta por la línea, si son monosexo, el tamaño y las pérdidas.", "Revisa los alevines: activos, sin heridas, de tamaño parejo.", "Transporta en la mañana fresca; deja flotar las bolsas para igualar la temperatura antes de soltarlos."],
          words: [["Densidad de siembra", "el número de peces por metro cuadrado de estanque, o por metro cúbico de agua del tanque."], ["Criadero", "una granja que reproduce peces y cría peces jóvenes para venderlos."], ["Canibalismo", "peces que se comen a otros de su misma especie, común en el bagre de tamaños mezclados."]],
          slides: [
            { title: "Alevines buenos", bullets: ["Criadero registrado o recomendado", "Tilapia: monosexo, línea conocida", "Activos, sin heridas, de tamaño parejo"] },
            { title: "La densidad importa", bullets: ["Demasiados: poco oxígeno, crecimiento lento, peces pequeños", "Estudio en Costa de Marfil: 2-3 por m2 ya es mucho solo con fertilizante", "Acuerda la densidad con el extensionista o el criadero"] },
            { title: "Cuenta de ejemplo", bullets: ["20 m x 15 m = 300 m2", "300 m2 x 3 peces por m2 = 900 alevines", "Las cifras son solo un ejemplo"] },
            { title: "Día de siembra", bullets: ["Mañana fresca", "Bolsas con oxígeno o agua limpia", "Deja flotar las bolsas para igualar la temperatura"] }
          ],
          sources: [ALR_CI, WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Mide tu estanque o tanque (o usa 20 m por 15 m). Pide a un extensionista o a un criadero una densidad para tu sistema y calcula cuántos alevines comprar. Luego escribe cinco preguntas para hacerle al criadero antes de pagar.",
          youCanNow: "calcular el número de alevines para un estanque y elegir un criadero que venda peces de calidad.",
          quickCheck: [
            { objective: "O4", q: "Un estanque mide 25 m por 10 m y la densidad acordada es de 2 peces por metro cuadrado. ¿Cuántos alevines?", options: ["250", "350", "500", "700"], answer: 2, why: "25 x 10 = 250 metros cuadrados, y 250 x 2 = 500 alevines." },
            { objective: "O4", q: "¿Qué lote de alevines de bagre debes rechazar?", options: ["Peces activos y de tamaño parejo", "Peces de un criadero registrado", "Peces sin heridas", "Peces de tamaños muy mezclados"], answer: 3, why: "Los tamaños mezclados llevan al canibalismo, porque los bagres grandes se comen a los pequeños." }
          ]
        },
        {
          title: "Alimentación, conversión alimenticia y problemas comunes",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular el factor de conversión alimenticia y detectar los problemas a tiempo.",
          text: [
            "El alimento suele ser el costo más grande de la piscicultura. Usa un alimento de buena calidad, del tamaño de pellet adecuado para la boca del pez; los pellets flotantes te dejan ver cuánto se comen. Alimenta a las mismas horas cada día y da solo lo que los peces se comen en unos pocos minutos; el alimento que sobra se pudre y gasta el oxígeno. La cantidad sube a medida que los peces crecen: cada dos a cuatro semanas, saca con la red y pesa una muestra de peces, calcula el peso promedio y ajusta el alimento con la tabla del fabricante del alimento o del extensionista. Guarda el alimento seco y sin tocar el piso; el alimento con moho es veneno.",
            "El factor de conversión alimenticia (FCR, por sus siglas en inglés) muestra qué tan bien el alimento se convierte en pescado: FCR = alimento dado / peso ganado. Ejemplo: diste 400 kg y los peces ganaron 250 kg, así que FCR = 400 / 250 = 1.6. Un FCR más bajo significa menos alimento por kg de pescado. El FCR sube con el exceso de alimento, el alimento malo, el agua mala y los peces enfermos.",
            "Problemas comunes: oxígeno bajo al amanecer; depredadores como aves, serpientes y nutrias, y ladrones; tilapia que se reproduce cuando los alevines eran de ambos sexos; bagres que se comen entre sí cuando los tamaños son distintos (sepáralos); inundaciones que se llevan los peces; y enfermedades. Las señales de peces enfermos son que no comen, tienen llagas, nadan raro o mueren muchos. Saca los peces muertos, deja de alimentar, revisa el agua y llama a tu extensionista de pesca o a un veterinario; no uses medicamentos ni productos químicos sin su consejo."
          ],
          steps: ["Da alimento de buena calidad y del tamaño correcto a horas fijas.", "Da solo lo que los peces se comen en unos pocos minutos.", "Cada 2 a 4 semanas, pesa una muestra y ajusta el alimento según la tabla.", "Anota todo el alimento dado.", "FCR = alimento dado / peso ganado.", "Vigila los problemas cada día; llama al extensionista o al veterinario si hay peces enfermos."],
          words: [["Factor de conversión alimenticia (FCR)", "los kilogramos de alimento que se usan para producir un kilogramo de pescado."], ["Pesaje de muestra", "sacar con la red y pesar algunos peces para conocer su peso promedio."], ["Depredador", "un animal que come peces, como algunas aves, serpientes y nutrias."]],
          slides: [
            { title: "Alimenta bien", bullets: ["Buen alimento, pellet del tamaño correcto", "Horas fijas; solo lo que comen en minutos", "Pesa una muestra cada 2 a 4 semanas"] },
            { title: "Conversión alimenticia", bullets: ["FCR = alimento dado / peso ganado", "400 kg de alimento / 250 kg ganados = 1.6", "Mientras más bajo, mejor"] },
            { title: "Problemas comunes", bullets: ["Oxígeno bajo; depredadores y ladrones", "Tilapia que se reproduce; canibalismo del bagre", "Inundaciones; enfermedades"] },
            { title: "Peces enfermos", bullets: ["No comen, llagas, nadan raro, muertes", "Saca los muertos; deja de alimentar; revisa el agua", "Llama al extensionista o veterinario; nada de medicamentos sin consejo"] }
          ],
          sources: [GHANA_MANUAL, FAO_OXYGEN],
          tryIt: "Haz un registro de alimentación con columnas para fecha, alimento dado (kg), peso promedio de la muestra y notas. Luego calcula el FCR de este ejemplo: 300 kg de alimento dado, los peces ganaron 200 kg. Escribe una forma de bajarlo.",
          youCanNow: "alimentar bien a los peces, calcular el FCR y detectar a tiempo los problemas comunes.",
          quickCheck: [
            { objective: "O5", q: "Diste 450 kg de alimento y los peces ganaron 300 kg. ¿Cuál es el FCR?", options: ["0.7", "1.2", "1.5", "2.0"], answer: 2, why: "450 dividido entre 300 es 1.5." },
            { objective: "O5", q: "¿Por qué debes dar solo lo que los peces se comen en unos pocos minutos?", options: ["El alimento que sobra se pudre, gasta el oxígeno y desperdicia dinero", "A los peces no les gusta el alimento", "El alimento es gratis", "Deja el agua más clara para nadar"], answer: 0, why: "El alimento que sobra es dinero perdido y ensucia el agua." }
          ]
        },
        {
          title: "Cosecha, venta y economía de un ciclo",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escribir un plan con costos para un ciclo, con la ganancia y el precio de equilibrio.",
          text: [
            "Planea la venta antes de sembrar. Acuerda con los compradores el tamaño, el día y el precio, y cosecha en el fresco de la mañana. Deja de alimentar un día antes para que los peces viajen mejor. Vacía el estanque en parte y saca los peces con la red, o vacíalo del todo para una cosecha completa. Mantén los peces frescos y limpios en hielo o a la sombra, y vende rápido: el pescado fresco se echa a perder en pocas horas con el calor. Ahumar o secar, algo común con el bagre en Nigeria, agrega valor y da más tiempo para vender. Las cosechas parciales de los peces más grandes pueden repartir las ventas en varias semanas.",
            "Calcula los costos de un ciclo primero en papel. Ejemplo para un estanque de tilapia de 300 metros cuadrados en Ghana (todas las cifras son solo ejemplos; usa tus propias cotizaciones): 900 alevines a GHS 1.50 = GHS 1,350; alimento: cosecha esperada de 720 peces (80% de supervivencia) x 0.35 kg = 252 kg, y con un FCR esperado de 1.6 eso necesita unos 400 kg de alimento a GHS 12 = GHS 4,800; preparación del estanque GHS 300; mano de obra y vigilancia GHS 1,200; cosecha y transporte GHS 300. Costos totales GHS 7,950.",
            "Ventas: 252 kg a GHS 40 por kg = GHS 10,080. Ganancia = 10,080 - 7,950 = GHS 2,130. Precio de equilibrio = costos totales / kg cosechados = 7,950 / 252 = unos GHS 31.50 por kg. Si el precio del comprador está cerca de tu precio de equilibrio, cambia el plan: mejores alevines, menos desperdicio de alimento o un mejor comprador."
          ],
          steps: ["Acuerda tamaño, día y precio con los compradores antes de sembrar.", "Anota cada costo: alevines, alimento, preparación del estanque, mano de obra, vigilancia, cosecha, transporte.", "Cosecha esperada = alevines x supervivencia x peso a la cosecha.", "Alimento necesario = peso ganado x FCR esperado.", "Ganancia = ventas - costos totales.", "Precio de equilibrio = costos totales / kg cosechados."],
          words: [["Tasa de supervivencia", "la parte de los peces sembrados que sigue viva en la cosecha."], ["Precio de equilibrio", "el precio por kg con el que las ventas apenas cubren todos los costos."], ["Cosecha parcial", "sacar los peces más grandes y dejar que el resto siga creciendo."]],
          slides: [
            { title: "Cosechar y vender", bullets: ["Comprador, tamaño, día y precio acordados primero", "Mañana fresca; deja de alimentar un día antes", "Hielo o sombra; vende rápido, o ahuma o seca"] },
            { title: "Costos de ejemplo (GHS)", bullets: ["Alevines 1,350; alimento 4,800", "Preparación 300; mano de obra y vigilancia 1,200; cosecha 300", "Total 7,950. Solo ejemplos"] },
            { title: "Resultado de ejemplo", bullets: ["720 peces x 0.35 kg = 252 kg", "252 kg x GHS 40 = GHS 10,080", "Ganancia de unos GHS 2,130"] },
            { title: "Precio de equilibrio", bullets: ["Costos totales / kg cosechados", "7,950 / 252 = unos GHS 31.50 por kg", "¿Cerca del equilibrio? Cambia el plan"] }
          ],
          sources: [GHANA_MANUAL, WORLDFISH_NG],
          tryIt: "Tarea final: escribe un plan con costos para un ciclo de tu propio estanque o tanque (o del ejemplo): especie, lugar y permiso revisados, pruebas del agua, alevines y criadero, supervivencia esperada, peso a la cosecha y alimento, cada costo, ventas esperadas, ganancia y precio de equilibrio por kg.",
          youCanNow: "planear una cosecha y una venta, y calcular la ganancia y el precio de equilibrio de un ciclo de piscicultura.",
          quickCheck: [
            { objective: "O6", q: "Los costos totales son NGN 900,000 y esperas cosechar 600 kg de bagre. ¿Cuál es el precio de equilibrio?", options: ["NGN 600 por kg", "NGN 1,000 por kg", "NGN 1,200 por kg", "NGN 1,500 por kg"], answer: 3, why: "900,000 dividido entre 600 es 1,500 por kg." },
            { objective: "O6", q: "¿Cuándo debes acordar la venta con los compradores?", options: ["Después de la cosecha, cuando los peces están en hielo", "Antes de sembrar, y confirmarla antes de cosechar", "Nunca; vende a la orilla del camino", "Solo si sobran peces"], answer: 1, why: "El pescado fresco se echa a perder rápido; un comprador acordado a tiempo evita ventas baratas a la fuerza." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Criar y vender los peces",
        questions: [
          { objective: "O4", q: "¿Dónde debes comprar los alevines?", options: ["En un criadero registrado o recomendado", "En un río cercano", "Con quien sea más barato", "Con cualquier vendedor que pase"], answer: 0, why: "Los criaderos registrados o recomendados dan una línea conocida, tilapia monosexo y peces sanos." },
          { objective: "O4", q: "Un estanque de 30 m por 10 m con 2 peces por metro cuadrado necesita ¿cuántos alevines?", options: ["300", "400", "500", "600"], answer: 3, why: "30 x 10 = 300 metros cuadrados, y 300 x 2 = 600." },
          { objective: "O5", q: "Los peces no comen, tienen llagas y algunos se mueren. ¿Qué haces?", options: ["Darles más alimento", "Comprar un medicamento en el mercado y echarlo", "Sacar los peces muertos, dejar de alimentar, revisar el agua y llamar al extensionista o al veterinario", "Agregar más alevines"], answer: 2, why: "Los peces enfermos necesitan el consejo de un técnico o veterinario; los medicamentos sin consejo pueden dañar a los peces y a los compradores." },
          { objective: "O5", q: "Un FCR que baja durante el ciclo suele significar:", options: ["Que se está desperdiciando alimento", "Que el alimento se convierte en pescado de forma más eficiente", "Que los peces están enfermos", "Que el estanque está demasiado verde"], answer: 1, why: "Menos alimento por kg ganado significa mejor conversión alimenticia." },
          { objective: "O6", q: "Las ventas son GHS 12,000 y los costos totales GHS 9,500. ¿Cuál es la ganancia?", options: ["GHS 1,500", "GHS 2,000", "GHS 2,500", "GHS 21,500"], answer: 2, why: "12,000 menos 9,500 es 2,500." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Piscicultura (acuicultura) básica",
    questions: [
      { objective: "O1", q: "¿Cuál es el principal pez de cultivo en Nigeria?", options: ["El bagre africano", "El salmón", "La trucha", "La carpa"], answer: 0, why: "El bagre africano es el principal pez de cultivo de Nigeria, y se vende fresco y ahumado." },
      { objective: "O1", q: "La tilapia de ambos sexos en un estanque suele llevar a:", options: ["Peces más grandes", "Ventas más rápidas", "Muchos peces pequeños y atrofiados por la reproducción", "Menos alimento necesario"], answer: 2, why: "La tilapia se reproduce en el estanque y lo llena de peces pequeños." },
      { objective: "O1", q: "¿Qué es la tilapia GIFT?", options: ["Un regalo de los compradores", "Una enfermedad de los peces", "Un diseño de estanque", "Una línea de tilapia mejorada y de crecimiento más rápido de WorldFish"], answer: 3, why: "GIFT significa Genetically Improved Farmed Tilapia, tilapia de cultivo mejorada genéticamente." },
      { objective: "O2", q: "¿Qué lugar es el mejor para un estanque de tierra?", options: ["Suelo arenoso en la zona de inundación de un río", "Suelo arcilloso con pendiente suave, por encima del nivel de inundación, con agua limpia todo el año", "Una loma rocosa sin agua", "Junto a la salida de agua de una mina"], answer: 1, why: "La arcilla retiene el agua, la pendiente permite llenar y vaciar, y el agua limpia mantiene vivos a los peces." },
      { objective: "O2", q: "¿Por qué se pone una malla en la entrada del estanque?", options: ["Para que no entren peces silvestres ni depredadores", "Para calentar el agua", "Para alimentar a los peces", "Para hacer más lenta la cosecha"], answer: 0, why: "Los peces silvestres compiten por el alimento, traen enfermedades y se comen a los alevines." },
      { objective: "O2", q: "Antes de construir un estanque de peces, debes:", options: ["Empezar a cavar y preguntar después", "Preguntar solo a tus vecinos", "Consultar con tu oficina de pesca nacional o del condado sobre permisos y especies permitidas", "Suponer que no hay reglas"], answer: 2, why: "Muchos países exigen registro o permiso, y algunos limitan las especies." },
      { objective: "O3", q: "¿Qué empeora el oxígeno bajo al amanecer?", options: ["Días soleados y pocas algas", "Días nublados, exceso de algas y alimento podrido", "Agua clara y fresca", "Menos peces"], answer: 1, why: "Estos factores reducen la producción de oxígeno o lo gastan de noche." },
      { objective: "O3", q: "La tilapia y el bagre crecen despacio cuando el agua está:", options: ["Fresca", "Cálida", "Limpia", "Verde"], answer: 0, why: "Los dos son peces de agua cálida; el agua fresca hace más lento el comer y el crecer." },
      { objective: "O3", q: "¿Qué herramienta mide qué tan ácida es el agua del estanque?", options: ["Un disco de Secchi", "Un termómetro", "Una red de pesca", "Tiras de pH o un kit de pH"], answer: 3, why: "Las tiras o los kits de pH muestran qué tan ácida o alcalina es el agua." },
      { objective: "O3", q: "Si el oxígeno está bajo, ¿qué acción es INCORRECTA?", options: ["Agregar agua fresca", "Salpicar o airear el agua", "Dar más alimento de lo normal", "Sacar los peces muertos"], answer: 2, why: "El alimento extra se pudre y gasta todavía más oxígeno." },
      { objective: "O4", q: "La densidad de siembra significa:", options: ["El peso del alimento por día", "El número de peces por metro cuadrado o metro cúbico", "La profundidad del estanque", "El precio por alevín"], answer: 1, why: "La densidad es cuántos peces comparten cada unidad de espacio." },
      { objective: "O4", q: "Un estanque de 400 metros cuadrados con 2.5 peces por metro cuadrado necesita:", options: ["600 alevines", "800 alevines", "1,000 alevines", "1,600 alevines"], answer: 2, why: "400 x 2.5 = 1,000." },
      { objective: "O4", q: "¿Por qué se dejan flotar las bolsas de alevines en el estanque antes de soltarlos?", options: ["Para que se igualen las temperaturas del agua", "Para contar los peces", "Para alimentarlos", "Para limpiar las bolsas"], answer: 0, why: "Un cambio brusco de temperatura impacta a los alevines y puede matarlos." },
      { objective: "O5", q: "El FCR se calcula así:", options: ["Peces vendidos / peces sembrados", "Precio / costo", "Área del estanque x densidad", "Alimento dado / peso ganado"], answer: 3, why: "Muestra cuántos kg de alimento producen un kg de pescado." },
      { objective: "O5", q: "Diste 600 kg y los peces ganaron 400 kg. ¿FCR?", options: ["1.5", "0.7", "2.4", "1.0"], answer: 0, why: "600 dividido entre 400 es 1.5." },
      { objective: "O5", q: "¿Cada cuánto debes pesar una muestra de peces para ajustar el alimento?", options: ["Nunca", "Solo en la cosecha", "Cada 2 a 4 semanas", "Cada hora"], answer: 2, why: "Los pesos de muestra regulares muestran el crecimiento para que el alimento lo siga." },
      { objective: "O5", q: "Bagres de tamaños muy distintos en un mismo estanque pueden llevar a:", options: ["Crecimiento más rápido para todos", "Canibalismo", "Agua más clara", "Costos de alimento más bajos"], answer: 1, why: "Los bagres grandes se comen a los pequeños, por eso los productores los separan por tamaño." },
      { objective: "O6", q: "El peso esperado de la cosecha se calcula con:", options: ["Alimento x precio", "Área del estanque x profundidad", "Alevines x supervivencia x peso a la cosecha", "Costos / precio"], answer: 2, why: "Solo cuentan los peces que sobreviven, con su peso esperado." },
      { objective: "O6", q: "El precio de equilibrio por kg es:", options: ["El precio más alto del mercado", "Costos totales / kg cosechados", "Solo el costo del alimento", "El precio del alevín"], answer: 1, why: "A este precio, las ventas apenas cubren todos los costos." },
      { objective: "O6", q: "¿Cuál suele ser el costo más grande de un ciclo de peces?", options: ["La red", "El letrero del estanque", "Las pruebas del agua", "El alimento"], answer: 3, why: "El alimento suele ser la mayor parte de los costos, por eso importa el FCR." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, hechas antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 3, 5, 6, 9, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Especie y lugar", objective: "O1", notYet: "No da razones para la especie, o no preguntó a ningún comprador.", meets: "Especie y sistema elegidos con tres razones del lugar y de los compradores.", exceeds: "Nombra a los compradores, el tamaño que quieren y el precio que ofrecieron." },
      { name: "Lugar y permisos", objective: "O2", notYet: "No revisó el lugar o no nombra ningún organismo de pesca.", meets: "Agua, suelo, pendiente e inundación revisados; el organismo de pesca y las preguntas sobre permisos anotados.", exceeds: "Ya contactó a la oficina de pesca y anota la respuesta." },
      { name: "Plan de calidad del agua", objective: "O3", notYet: "No hay pruebas del agua en el plan.", meets: "Revisiones al amanecer, temperatura, pH y Secchi, con cada cuánto y qué hacer cuando están fuera de rango.", exceeds: "Incluye un registro de pruebas lleno y un plan de emergencia para el oxígeno bajo." },
      { name: "Alevines y siembra", objective: "O4", notYet: "Falta el número de alevines o está mal, o no nombra ningún criadero.", meets: "Número correcto según el área y la densidad acordada; un criadero registrado o recomendado nombrado, con sus revisiones.", exceeds: "Anota la línea, si son monosexo y la política de reposición del criadero." },
      { name: "Costos, ganancia y equilibrio", objective: "O6", notYet: "Faltan costos, el alimento no está ligado al FCR, o las cuentas están mal.", meets: "Todos los costos, el alimento según la ganancia esperada x FCR, la ganancia y el precio de equilibrio correctos.", exceeds: "Muestra un segundo caso con menor supervivencia o un precio más bajo, y lo que haría el productor." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que siembran alevines de un criadero registrado o recomendado en 6 meses (encuesta de seguimiento)",
      "Participantes que llevan registros de pruebas del agua y de alimentación durante todo un ciclo (encuesta de seguimiento)",
      "Tasa de supervivencia y FCR informados en la cosecha, comparados con el plan",
      "Participantes que tienen ganancia en su primer ciclo, cuando los registros lo permiten"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un cuaderno y un lápiz, o un teléfono con una hoja de cálculo o una aplicación de notas",
      "Una calculadora (la del teléfono sirve)",
      "Un termómetro, tiras de pH y un disco de Secchi hecho en casa (plato blanco, pintura, palo)",
      "Una cinta métrica para el estanque",
      "Unos 75 minutos en total, en sesiones cortas, más práctica en un estanque"
    ],
    facilitatorNotes: [
      "Da las Lecciones 3 y 4 en un estanque en producción: hagan juntos la revisión del amanecer, las pruebas de Secchi y de pH y un pesaje de muestra.",
      "Invita a un extensionista de pesca a explicar los permisos y los criaderos registrados de tu país o condado.",
      "Nunca des dosis de medicamentos ni de productos químicos; envía a los participantes con peces enfermos a su extensionista o a un veterinario.",
      "Cambia los precios de ejemplo por cotizaciones locales de alevines, alimento y pescado antes de la lección de costos, y di claramente que son ejemplos.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
