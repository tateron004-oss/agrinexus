"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-protected-farming.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_GAP_GH = { name: "FAO: Buenas prácticas agrícolas para hortalizas de invernadero: principios para zonas de clima mediterráneo (Estudio FAO Producción y Protección Vegetal 217)", url: "https://www.fao.org/agriculture/crops/publications/detail/en/item/276049/icode/" };
const NORDEY_REVIEW = { name: "Nordey y otros (2017): El cultivo protegido de hortalizas en África subsahariana: límites y perspectivas para los pequeños agricultores. Una revisión (Agronomy for Sustainable Development)", url: "https://publications.cirad.fr/une_notice.php?dk=585832" };
const ICIPE_TUTA = { name: "icipe: Insecto del mes: el minador del tomate, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const PCPB = { name: "Junta de Productos para el Control de Plagas (PCPB, Kenia)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Agencia Nacional de Administración y Control de Alimentos y Medicamentos (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Autoridad de Protección Ambiental (EPA, Ghana)", url: "https://www.epa.gov.gh" };
const KEPHIS = { name: "Servicio de Inspección Sanitaria de Plantas de Kenia (KEPHIS): semilla y plántulas certificadas", url: "https://www.kephis.go.ke" };

module.exports = {
  id: "agri-protected-farming-es",
  lang: "es",
  translationOf: "agri-protected-farming",
  category: "Agriculture (Africa)",
  name: "Invernaderos y agricultura protegida para cultivos de alto valor",
  skills: "Decidir cuándo vale la pena la agricultura protegida, Comparar invernaderos, mallas de sombra y túneles y verificar lo que promete el vendedor, Producir plántulas y planear la fertirrigación por goteo, Manejar el calor, la humedad, las plagas y la higiene, Escribir un caso de negocio con el periodo de recuperación",
  outcome: "escribir un caso de negocio para producir un cultivo de alto valor (tomate, pimiento o pepino) bajo invernadero, malla de sombra o túnel en tu finca: si se ajusta a tu agua, tu mercado y tus habilidades, la estructura y tres cotizaciones, un plan de cultivo y de fertirrigación, una rutina de plagas e higiene, y los costos, los ingresos, el margen bruto y el periodo de recuperación.",
  about: [
    "Este curso es para pequeños agricultores y agricultores comerciales en crecimiento, jóvenes agroemprendedores, grupos de jóvenes y de mujeres, y extensionistas que están pensando en un invernadero, una malla de sombra o un túnel, o que ya tienen uno que no da ganancias. Los ejemplos son tomate, pimiento (chile dulce) y pepino en Kenia, Nigeria, Ghana y Senegal.",
    "El capítulo 1 te ayuda a decidir y a instalar: cuándo vale la pena la agricultura protegida y cuándo no, las estructuras principales y cómo comparar cotizaciones, cómo reconocer a los vendedores que prometen de más, y cómo elegir un cultivo y producir plántulas sanas. El capítulo 2 trata de manejarlo como un negocio: lo básico de la fertirrigación por goteo, el manejo del calor, la humedad, las enfermedades y las plagas, la limpieza de la estructura, y cómo escribir un caso de negocio con el periodo de recuperación.",
    "Un invernadero es una inversión grande, y muchos han quedado vacíos porque no funcionaron los números, el agua o el mercado. Cada cifra de dinero de este curso es un ejemplo inventado para practicar las cuentas; usa tus propias cotizaciones y los precios de tu mercado, y habla con un agrónomo, tu extensionista y un asesor de confianza antes de firmar o pagar. Después de cada lección hay una prueba rápida, una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un caso de negocio de agricultura protegida para un cultivo en tu propia finca: tus respuestas a las cinco condiciones de \"¿vale la pena?\" (agua, mercado, habilidades, capital, clima), la estructura que usarías con al menos tres cotizaciones comparadas y las verificaciones del vendedor hechas, el cultivo y la variedad, un plan de vivero y de fertirrigación acordado con un agrónomo, una rutina semanal de plagas, clima e higiene, y los costos, el rendimiento esperado, los ingresos, el margen bruto por ciclo, el periodo de recuperación y lo que le pasa a la recuperación si el precio baja una cuarta parte.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños agricultores y agricultores comerciales en crecimiento, jóvenes agroemprendedores, grupos de jóvenes y de mujeres y extensionistas de África que están pensando en tener, o ya tienen, un invernadero, una malla de sombra o un túnel para tomate, pimiento, pepino u otras hortalizas de alto valor.",
    startingPoint: "Han cultivado hortalizas a campo abierto. A algunos les han ofrecido un kit de invernadero con grandes promesas de rendimiento; otros tienen uno que ha tenido problemas de plagas, enfermedades o mercado. Pocos han comparado cotizaciones, planeado la fertirrigación o calculado la recuperación de la inversión.",
    gap: "La agricultura protegida puede dar rendimientos más altos, más limpios y más regulares, pero cuesta mucho al principio, necesita habilidades y agua segura, atrapa el calor y las enfermedades, y solo da ganancias con un mercado estable. Los participantes necesitan decidir si les conviene, elegir y verificar una estructura, manejar bien el cultivo y demostrar con números que puede recuperar la inversión antes de que se gaste la cubierta.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; muchos participantes tienen el inglés como segunda lengua y el curso también está disponible en inglés, francés y árabe",
      "Matemáticas: cuentas sencillas con la calculadora del teléfono; cada cálculo se muestra paso a paso",
      "Dinero: todas las cifras son ejemplos inventados; los participantes usan sus propias cotizaciones y precios en su moneda local (KES, NGN, GHS o XOF)",
      "Seguridad: no hay recetas de fertilizantes ni productos o dosis de plaguicidas; los participantes trabajan con un agrónomo y siguen las etiquetas y a la autoridad nacional",
      "Finanzas: no hay consejos de inversión; los participantes leen los contratos completos y consultan a un asesor de confianza antes de pagar"
    ],
    prerequisites: "Ninguno. \"Riego y manejo del agua\" (goteo y bombas) y \"Manejo integrado de plagas y control orgánico de plagas\" son útiles junto con este curso."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Para tu propia finca", action: "revisar las cinco condiciones de la agricultura protegida (agua, mercado, habilidades, capital y clima) y decidir si seguir adelante", standard: "dando un sí o un no para cada una con una razón" },
    { id: "O2", condition: "Al elegir una estructura", action: "comparar cotizaciones de invernadero, malla de sombra o túnel y verificar lo que promete cada vendedor", standard: "usando al menos tres cotizaciones y pidiendo referencias y una garantía por escrito" },
    { id: "O3", condition: "Para un cultivo que elijas", action: "planear con un agrónomo la variedad, el vivero, el trasplante y la fertirrigación por goteo", standard: "como un plan con fechas para un ciclo de cultivo" },
    { id: "O4", condition: "Una vez sembrado el cultivo", action: "aplicar una rutina diaria y semanal para el calor, la humedad, las plagas y la higiene", standard: "cubriendo cada semana las ventanas, el monitoreo, las trampas y las reglas de entrada" },
    { id: "O5", condition: "Con tus cotizaciones y los precios del mercado", action: "calcular el costo, los ingresos, el margen bruto y el periodo de recuperación del cultivo", standard: "y probar qué pasa si el precio baja una cuarta parte" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Decidir e instalar",
      lessons: [
        {
          title: "Cuándo vale la pena la agricultura protegida y cuándo no",
          objectives: ["O1"],
          minutes: 5,
          goal: "Revisar las cinco condiciones de la agricultura protegida en tu propia finca y decidir si seguir adelante.",
          text: [
            "La agricultura protegida es cultivar bajo una cubierta: un invernadero con plástico y malla antiinsectos, una casa de malla de sombra, o un túnel bajo o alto. Bien hecha, protege de las lluvias fuertes, del granizo y de muchos insectos, reduce algunas enfermedades y da rendimientos más altos, más limpios y más regulares de cultivos de alto valor como el tomate, el pimiento y el pepino.",
            "No le conviene a todo el mundo. Una revisión de 2017 sobre el cultivo protegido en África subsahariana encontró que no sirve en todos los climas y que sigue necesitando otros controles de plagas, y que la falta de habilidades, de apoyo técnico y de financiamiento frena a muchos pequeños agricultores. Muchos invernaderos en Kenia, Nigeria y Ghana quedan vacíos después de uno o dos cultivos.",
            "Revisa cinco condiciones antes de gastar dinero. Agua: una fuente segura y limpia todo el año, porque el cultivo no recibe lluvia. Mercado: compradores que se lleven tu producto cada semana a un precio justo, como un hotel, un supermercado, una escuela o comerciantes del mercado, no solo \"el mercado\". Habilidades: tú o un trabajador capacitado en fertirrigación, poda y monitoreo, y un agrónomo al que puedas llamar. Capital: dinero para la estructura, el primer cultivo y algunos meses de gastos, sin arriesgar la comida de tu familia. Clima: en tierras bajas muy calientes, un invernadero cerrado puede sobrecalentarse, así que una malla de sombra o un diseño bien ventilado puede convenir más."
          ],
          steps: ["Agua: ¿hay una fuente segura y limpia todo el año?", "Mercado: ¿quién comprará cada semana, y a qué precio?", "Habilidades: ¿quién manejará la fertirrigación, la poda y el monitoreo, y a qué agrónomo puedes llamar?", "Capital: ¿puedes pagar la estructura, el primer cultivo y los gastos sin arriesgar el dinero de la comida?", "Clima: ¿se sobrecalentará una estructura cerrada donde estás?", "Decide: seguir adelante, empezar en pequeño o todavía no."],
          words: [["Agricultura protegida", "cultivar bajo una cubierta como un invernadero, una malla de sombra o un túnel."], ["Invernadero", "una estructura cubierta con plástico y malla antiinsectos, con ventanas para el aire."], ["Malla de sombra", "una malla que corta parte del sol y del calor y frena a algunos insectos y pájaros."], ["Túnel", "una estructura curva cubierta con plástico o malla; los túneles bajos cubren una cama, los altos cubren una parcela."]],
          slides: [
            { title: "Lo que puede hacer la protección", bullets: ["Protege de lluvias fuertes, granizo y muchos insectos", "Rendimientos más altos, limpios y regulares", "Mejor para cultivos de alto valor"] },
            { title: "No le conviene a todo el mundo", bullets: ["No sirve en todos los climas (revisión, 2017)", "Sigue necesitando otros controles de plagas", "Habilidades, apoyo y financiamiento: los grandes obstáculos"] },
            { title: "Cinco condiciones", bullets: ["Agua todo el año", "Un comprador cada semana", "Habilidades y un agrónomo", "Capital y el clima adecuado"] },
            { title: "Tu decisión", bullets: ["Seguir adelante", "Empezar en pequeño (túnel o malla de sombra)", "Todavía no: primero arregla la condición que falta"] }
          ],
          sources: [NORDEY_REVIEW, FAO_GAP_GH],
          tryIt: "Escribe las cinco condiciones y responde cada una para tu finca con un sí o un no y una razón. Luego escribe tu decisión: seguir adelante, empezar en pequeño o todavía no, y qué tendrías que cambiar.",
          youCanNow: "revisar las cinco condiciones de la agricultura protegida y decidir si le conviene ahora a tu finca.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es la señal más fuerte de que estás listo para un invernadero?", options: ["Un vendedor dice que se paga en tres meses", "Tu vecino compró uno", "Tienes agua todo el año y un comprador que se lleva tomate cada semana", "Viste fotos en internet"], answer: 2, why: "El agua segura y un comprador estable son dos de las cinco condiciones que hacen que dé ganancias." },
            { objective: "O1", q: "Cultivas en una tierra baja muy caliente. ¿Qué debes revisar primero?", options: ["Si un invernadero cerrado se sobrecalentará, y si conviene más una malla de sombra", "Solo el color del plástico", "Nada; el calor es bueno para todos los cultivos", "Si puedes cultivar sin agua"], answer: 0, why: "Las estructuras cerradas atrapan el calor; en zonas calientes puede convenir más la ventilación o la malla de sombra." }
          ]
        },
        {
          title: "Invernaderos, mallas de sombra y túneles: opciones, costos y vendedores",
          objectives: ["O2"],
          minutes: 6,
          goal: "Comparar al menos tres cotizaciones de estructuras y verificar lo que promete cada vendedor.",
          text: [
            "Las opciones principales: un invernadero (estructura de madera o de acero con plástico tratado contra los rayos UV en el techo y malla antiinsectos a los lados) da la mayor protección y cuesta más. Una casa de malla de sombra cuesta menos, es más fresca y sirve para zonas calientes y cultivos como el pimiento y las hortalizas de hoja, pero no protege de la lluvia. Los túneles altos o bajos son la forma más barata de empezar y aprender. El acero dura más que la madera pero cuesta más; la madera tratada puede servir si se controlan las termitas. El plástico de la cubierta se gasta después de algunos años, así que pregunta por cuánto tiempo está garantizada su protección UV.",
            "Los costos cambian mucho según el tamaño, el material, el país y lo que se incluye, así que pide al menos tres cotizaciones por escrito para el mismo tamaño y compáralas renglón por renglón: estructura, cubierta y malla, puertas, sistema de goteo, tanque de agua, vivero, instalación, capacitación y visitas después de la venta. Por ejemplo (cifras inventadas, solo para mostrar el método), la cotización A de KES 380,000 puede incluir el goteo y la capacitación mientras que la cotización B de KES 300,000 no, así que B no es en realidad más barata.",
            "Ten cuidado con los vendedores que prometen de más. Señales de alerta: rendimientos o ingresos garantizados, \"se paga en una temporada\", una promesa de \"recompra\" sin contrato escrito, presión para pagar hoy un anticipo grande, ningún agricultor que puedas visitar, ninguna garantía por escrito, y kits vendidos sin capacitación ni plan de agua. Pide visitar a dos agricultores que hayan usado la estructura del vendedor al menos dos temporadas. Consigue por escrito la garantía, la fecha de entrega y lo que se incluye, lee todo el contrato y consulta a un asesor de confianza antes de pagar."
          ],
          steps: ["Elige el tamaño que puedes manejar y regar.", "Pide a al menos tres vendedores cotizaciones por escrito para el mismo tamaño.", "Compara renglón por renglón: estructura, cubierta, malla, goteo, tanque, vivero, instalación, capacitación, servicio posventa.", "Pide referencias a cada vendedor y visita a dos agricultores que usen su estructura.", "Consigue por escrito la garantía, la fecha de entrega y el contenido; léelo todo y consulta a un asesor."],
          words: [["Plástico tratado contra UV", "plástico de invernadero hecho para resistir la luz ultravioleta del sol, para que dure más."], ["Malla antiinsectos", "una malla fina en los lados y las ventanas que frena a muchos insectos pero deja pasar el aire."], ["Cotización", "un precio por escrito de un vendedor que muestra exactamente lo que incluye."], ["Garantía", "una promesa por escrito del vendedor de reparar o cambiar las piezas que fallen dentro de un plazo fijo."]],
          slides: [
            { title: "Las opciones", bullets: ["Invernadero: la mayor protección, el mayor costo", "Malla de sombra: más fresca, más barata, sin proteger de la lluvia", "Túneles: la forma más barata de empezar y aprender"] },
            { title: "Compara tres cotizaciones", bullets: ["Mismo tamaño, por escrito, renglón por renglón", "Estructura, cubierta, malla, goteo, tanque, vivero", "Instalación, capacitación, servicio posventa"] },
            { title: "Señales de alerta", bullets: ["Rendimientos garantizados o \"se paga en una temporada\"", "Promesas de recompra sin contrato", "Presión para pagar hoy un anticipo"] },
            { title: "Protégete", bullets: ["Visita a dos agricultores que la usen hace 2+ temporadas", "Garantía y contenido por escrito", "Lee todo el contrato; consulta a un asesor"] }
          ],
          sources: [FAO_GAP_GH, NORDEY_REVIEW],
          tryIt: "Pide a al menos tres vendedores o constructores de tu zona cotizaciones por escrito para el mismo tamaño de estructura. Ponlas en una tabla, renglón por renglón, y marca lo que deja fuera cada una. Escribe las preguntas que harás a cada vendedor, incluidos dos agricultores que puedas visitar.",
          youCanNow: "comparar cotizaciones de estructuras renglón por renglón y verificar lo que promete un vendedor antes de pagar.",
          quickCheck: [
            { objective: "O2", q: "Un vendedor te garantiza 10 toneladas de tomate y que se paga en una temporada, si das un anticipo hoy. ¿Qué haces?", options: ["Pagar ya antes de que termine la oferta", "Pagar la mitad y decidir después", "Firmar sin leer", "Tomarlo como señal de alerta, pedir referencias y condiciones por escrito, y comparar cotizaciones"], answer: 3, why: "Los rendimientos garantizados y la presión para pagar hoy son señales típicas de promesas exageradas." },
            { objective: "O2", q: "La cotización B es más barata que la A, pero no incluye goteo ni capacitación. ¿Qué es cierto?", options: ["B es claramente la mejor oferta", "B puede costar más cuando sumas lo que deja fuera", "El goteo y la capacitación nunca hacen falta", "Las cotizaciones no se pueden comparar"], answer: 1, why: "Compara renglón por renglón; lo que falta hay que comprarlo aparte." }
          ]
        },
        {
          title: "Elegir un cultivo y producir plántulas sanas",
          objectives: ["O3"],
          minutes: 5,
          goal: "Elegir un cultivo y una variedad para tu estructura y planear un vivero limpio y el trasplante.",
          text: [
            "Los cultivos protegidos más comunes son el tomate, el pimiento (chile dulce) y el pepino. El tomate tiene el mercado más grande, pero también el mayor riesgo de plagas y enfermedades, incluida Tuta absoluta. El pimiento se vende bien a hoteles y supermercados, sobre todo el de colores, y tarda más en empezar a producir. El pepino crece rápido y da dinero pronto. Elige primero según tu comprador: qué cultivo, color y tamaño se llevará cada semana.",
            "Usa variedades mejoradas para invernadero. Muchos tomates de invernadero son de crecimiento indeterminado (siguen creciendo y se guían por un hilo durante muchos meses), y muchos pepinos de invernadero dan fruto sin abejas. La semilla de estas variedades puede ser cara, así que compra semilla certificada y sellada en un distribuidor registrado (KEPHIS certifica la semilla en Kenia) y no guardes semilla de híbridos.",
            "Produce las plántulas en un vivero limpio: charolas con un sustrato limpio (no tierra del campo), bajo malla antiinsectos, con un riego cuidadoso. Muchos agricultores compran plántulas a un vivero con licencia, lo que ahorra tiempo, pero debe ser una fuente limpia y de confianza. Trasplanta plántulas fuertes, sanas y sin plagas en la tarde fresca, a la distancia que te dé tu agrónomo, y riégalas enseguida. Planea las fechas: siembra, trasplante, primera cosecha y última cosecha, para que tu comprador reciba el producto a tiempo."
          ],
          steps: ["Pregunta a tu comprador qué cultivo, color y tamaño se llevará cada semana.", "Elige una variedad de invernadero; compra semilla certificada y sellada.", "Produce las plántulas en charolas con sustrato limpio bajo malla antiinsectos, o cómpralas a un vivero con licencia.", "Trasplanta plántulas fuertes y sin plagas en la tarde, a la distancia del agrónomo.", "Escribe las fechas: siembra, trasplante, primera y última cosecha."],
          words: [["Pimiento", "chile dulce; verde, rojo, amarillo o naranja."], ["Indeterminado", "un tipo de tomate que sigue creciendo y dando fruto durante meses; se guía por un hilo."], ["Sustrato", "una mezcla limpia (por ejemplo fibra de coco) que se usa en lugar de tierra para producir plántulas."], ["Vivero de plántulas", "un negocio que produce y vende plántulas."]],
          slides: [
            { title: "Elige según tu comprador", bullets: ["Tomate: el mercado más grande, el mayor riesgo de plagas", "Pimiento: hoteles y supermercados; arranque más lento", "Pepino: rápido, dinero pronto"] },
            { title: "Variedades de invernadero", bullets: ["Tomates indeterminados guiados por hilos", "Pepinos que dan fruto sin abejas", "Semilla certificada y sellada; no guardes semilla de híbridos"] },
            { title: "Plántulas sanas", bullets: ["Charolas, sustrato limpio, bajo malla antiinsectos", "O un vivero con licencia y de confianza", "Trasplanta sin plagas en la tarde fresca"] },
            { title: "Planea las fechas", bullets: ["Siembra, trasplante, primera y última cosecha", "Ajústalas a lo que tu comprador necesita cada semana"] }
          ],
          sources: [KEPHIS, ICIPE_TUTA],
          tryIt: "Pregunta a un comprador qué cultivo, color y tamaño se llevaría cada semana. Elige tu cultivo y una variedad de invernadero, y escribe las fechas de siembra (o de compra de plántulas), trasplante, primera cosecha y última cosecha.",
          youCanNow: "elegir un cultivo protegido según lo que necesita tu comprador y planear plántulas sanas y el trasplante.",
          quickCheck: [
            { objective: "O3", q: "¿Qué debe decidir el primer cultivo que siembras en tu invernadero?", options: ["Lo que tu comprador se llevará cada semana", "El cultivo con el sobre de semilla más bonito", "Lo que siembra el vecino", "La semilla más barata"], answer: 0, why: "Un comprador estable es lo que hace que un cultivo protegido dé ganancias." },
            { objective: "O3", q: "¿Dónde deben producirse las plántulas para invernadero?", options: ["En tierra del campo junto a tomates viejos", "Bajo un árbol sin malla", "En charolas con sustrato limpio bajo malla antiinsectos, o en un vivero con licencia", "En cualquier lugar; las plagas no importan en un invernadero"], answer: 2, why: "Las plántulas sanas evitan que las plagas y las enfermedades entren a la estructura con el cultivo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Decidir e instalar",
        questions: [
          { objective: "O1", q: "¿Cuál NO es una de las cinco condiciones de este curso?", options: ["Agua todo el año", "Un comprador cada semana", "Un invernadero del color más llamativo", "Habilidades y un agrónomo"], answer: 2, why: "Las cinco condiciones son agua, mercado, habilidades, capital y clima." },
          { objective: "O1", q: "¿Por qué el agua de un invernadero debe ser segura todo el año?", options: ["El cultivo bajo cubierta no recibe lluvia", "El plástico hay que lavarlo todos los días", "El agua enfría la estructura", "No es importante"], answer: 0, why: "Bajo una cubierta, toda el agua tiene que venir de tu fuente." },
          { objective: "O2", q: "¿Qué estructura es la más fresca y sirve para zonas calientes, pero no protege de la lluvia?", options: ["Un invernadero cerrado de plástico", "Una casa de malla de sombra", "Una bodega de ladrillo", "Un túnel bajo de plástico"], answer: 1, why: "Las mallas de sombra cortan el sol y el calor, pero dejan pasar la lluvia." },
          { objective: "O2", q: "¿Cuál es la mejor forma de verificar lo que promete un vendedor?", options: ["Creerle al folleto", "Pagar primero y preguntar después", "Preguntar solo en redes sociales", "Visitar a dos agricultores que usen su estructura desde hace dos o más temporadas"], answer: 3, why: "Los agricultores que la han usado muestran lo que realmente hace." },
          { objective: "O3", q: "Un tomate indeterminado:", options: ["Sigue creciendo y dando fruto durante meses, guiado por un hilo", "Deja de crecer después de unas semanas", "Nunca necesita soporte", "Es un tipo de pepino"], answer: 0, why: "Los tomates indeterminados siguen creciendo, así que en los invernaderos se guían por hilos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manejarlo como un negocio",
      lessons: [
        {
          title: "Lo básico de la fertirrigación por goteo",
          objectives: ["O3"],
          minutes: 5,
          goal: "Describir cómo funciona un sistema de fertirrigación por goteo y planear sus revisiones diarias con un agrónomo.",
          text: [
            "Fertirrigación significa dar el fertilizante por el sistema de goteo, disuelto en el agua de riego, para que cada planta reciba un poco de alimento y de agua en sus raíces todos los días. Ahorra agua y fertilizante y mantiene secas las hojas, lo que ayuda contra las enfermedades. Los sistemas de goteo, las bombas y las opciones solares se enseñan en \"Riego y manejo del agua\"; esta lección cubre lo que cambia bajo cubierta.",
            "Un sistema sencillo tiene un tanque de agua, un filtro, una forma de agregar el fertilizante (un tanque de mezcla o un inyector), tubos principales y cintas de goteo con goteros en cada planta. Usa solo fertilizantes solubles en agua hechos para fertirrigación. La receta cambia con el cultivo y su etapa (plántula, floración, fructificación) y con tu agua y tu suelo, así que consíguela con un agrónomo, con un análisis de suelo y agua o con el personal técnico del proveedor de fertilizantes. Nunca adivines, y nunca mezcles productos en el mismo tanque a menos que el agrónomo diga que se pueden mezclar.",
            "Revisa el sistema todos los días: el filtro está limpio, cada gotero gotea, ninguna cinta tiene fugas y la tierra alrededor de las plantas está húmeda, no encharcada. Muchos productores usan un medidor de CE barato para revisar que la fuerza del fertilizante en el agua sea la que fijó el agrónomo, y un medidor o tiras de pH. Lava las cintas con agua limpia como te indiquen, para que las sales y el fertilizante no tapen los goteros. Anota en un registro el agua y el alimento de cada día."
          ],
          steps: ["Consigue con un agrónomo o con un análisis de suelo y agua un plan de alimentación por etapa del cultivo.", "Usa solo fertilizantes solubles en agua para fertirrigación; mezcla solo como te indiquen.", "Cada día: filtro limpio, revisa que los goteros goteen y que las cintas no tengan fugas.", "Revisa la fuerza con un medidor de CE y el pH según lo que fijó el agrónomo.", "Lava las cintas como te indiquen; anota el agua y el alimento de cada día."],
          words: [["Fertirrigación", "dar fertilizante disuelto en el agua de riego por un sistema de goteo."], ["Gotero", "la pequeña salida de una cinta de goteo que suelta el agua en cada planta."], ["Medidor de CE", "un medidor pequeño que mide cuánto fertilizante disuelto (sal) hay en el agua; CE significa conductividad eléctrica."], ["Lavado de cintas", "pasar agua limpia por las cintas para quitar sales y tapones."]],
          slides: [
            { title: "Qué es la fertirrigación", bullets: ["Fertilizante disuelto en el agua del goteo", "Un poco de alimento y agua en las raíces cada día", "Ahorra agua y mantiene secas las hojas"] },
            { title: "Las partes", bullets: ["Tanque, filtro, tanque de mezcla o inyector", "Tubo principal y cintas de goteo con goteros", "Solo fertilizantes solubles en agua"] },
            { title: "La receta", bullets: ["Cambia con la etapa del cultivo, el agua y el suelo", "De un agrónomo o de un análisis de agua y suelo", "Nunca adivines; mezcla solo como te indiquen"] },
            { title: "Revisiones diarias", bullets: ["Filtro limpio; cada gotero gotea", "CE y pH según lo que fijó el agrónomo", "Lava como te indiquen; anótalo"] }
          ],
          sources: [FAO_GAP_GH],
          tryIt: "Dibuja tu sistema de fertirrigación por goteo desde el tanque hasta las plantas y ponle nombre a cada parte. Luego escribe una lista de revisión diaria (filtro, goteros, fugas, CE, pH, humedad del suelo, registro) y las preguntas que harás a tu agrónomo sobre el plan de alimentación para cada etapa del cultivo.",
          youCanNow: "describir un sistema de fertirrigación por goteo, planear su alimentación con un agrónomo y hacer sus revisiones diarias.",
          quickCheck: [
            { objective: "O3", q: "¿De dónde debe venir tu receta de fertirrigación?", options: ["De adivinar por el color de las hojas", "De un agrónomo, de un análisis de suelo y agua o del personal técnico del proveedor", "De la misma receta para todos los cultivos y etapas", "De lo más barato esa semana"], answer: 1, why: "La receta depende del cultivo, la etapa, el agua y el suelo, así que debe venir de un consejo experto." },
            { objective: "O3", q: "Varias plantas se marchitan mientras otras están bien. ¿Qué revisas primero?", options: ["Si sus goteros están tapados y si el filtro está limpio", "Echar más fertilizante al tanque", "Quitar la malla antiinsectos", "Regar por arriba con una manguera"], answer: 0, why: "Los goteros tapados son una razón común por la que algunas plantas no reciben agua ni alimento." }
          ]
        },
        {
          title: "Manejar el calor, la humedad, las plagas y la higiene",
          objectives: ["O4"],
          minutes: 6,
          goal: "Aplicar una rutina diaria y semanal para el calor, la humedad, las plagas y la higiene en tu estructura.",
          text: [
            "El calor y la humedad son los mayores problemas del día a día bajo cubierta en el trópico. Un invernadero cerrado puede ponerse mucho más caliente que afuera, y el aire caliente, quieto y húmedo trae enfermedades de hongos como el tizón tardío y el moho gris. Abre las ventanas laterales y del techo en la mañana y ciérralas en la tarde según haga falta, mantén secas las hojas regando solo por goteo, poda las hojas viejas de abajo y los brotes laterales para que circule el aire, y no siembres demasiado junto. Una malla de sombra sobre el techo en los meses más calientes puede ayudar. Ten un termómetro barato adentro y anota las lecturas.",
            "Las mallas antiinsectos frenan a muchas plagas, pero las que entran se multiplican rápido sin lluvia ni enemigos naturales que las detengan: mosca blanca, trips, pulgones, arañitas rojas y, en el tomate, Tuta absoluta. En el suelo, los nematodos agalladores son un problema común en invernaderos usados por mucho tiempo. Monitorea cada surco cada semana, cuelga tarjetas amarillas pegajosas para mosca blanca y pulgones y azules para trips, y usa trampas de feromonas para Tuta absoluta. Sigue los pasos del MIP (manejo integrado de plagas); si hace falta un plaguicida, usa solo uno registrado para tu cultivo (PCPB en Kenia, NAFDAC en Nigeria, la EPA en Ghana), sigue la etiqueta y su plazo de seguridad antes de la cosecha, y usa equipo de protección, porque vas a cosechar seguido en un espacio cerrado.",
            "La higiene mantiene fuera las plagas y las enfermedades. Usa una doble puerta para que una siempre esté cerrada, y un pediluvio en la entrada. Limita las visitas, y que los trabajadores se laven las manos y usen ropa limpia. Saca en una bolsa cerrada las plantas enfermas y las hojas y frutos caídos, mantén deshierbado el área alrededor de la estructura, repara enseguida los hoyos de la malla y limpia las herramientas. Entre un cultivo y otro, saca todos los restos de plantas y limpia la estructura antes de volver a sembrar."
          ],
          steps: ["Cada mañana: abre las ventanas; lee el termómetro; revisa si hay hojas mojadas.", "Cada tarde: cierra las ventanas según haga falta; anota la temperatura.", "Cada semana: monitorea cada surco; cuenta las capturas de las tarjetas pegajosas y de las trampas de feromonas.", "Cada semana: poda las hojas de abajo y los brotes laterales; saca las plantas enfermas y los restos en una bolsa cerrada.", "Siempre: doble puerta cerrada, pediluvio, pocas visitas, herramientas limpias, malla reparada."],
          words: [["Ventilación", "dejar que el aire se mueva por la estructura a través de las ventanas para bajar el calor y la humedad."], ["Humedad", "cuánto vapor de agua hay en el aire; la humedad alta ayuda a las enfermedades de hongos."], ["Nematodo agallador", "un gusano diminuto del suelo que hace bultos en las raíces y debilita las plantas."], ["Pediluvio", "una bandeja poco profunda con desinfectante en la entrada para limpiar las botas."]],
          slides: [
            { title: "Calor y humedad", bullets: ["Abre las ventanas en la mañana, cierra según haga falta", "Riega solo por goteo; mantén secas las hojas", "Poda hojas de abajo y brotes laterales; no siembres muy junto"] },
            { title: "Plagas bajo cubierta", bullets: ["Mosca blanca, trips, pulgones, arañitas rojas", "Tuta absoluta en el tomate", "Nematodos agalladores en suelos viejos"] },
            { title: "Vigila y trampea", bullets: ["Monitorea cada surco cada semana", "Tarjetas amarillas: mosca blanca, pulgones; azules: trips", "Trampas de feromonas para Tuta absoluta"] },
            { title: "Higiene", bullets: ["Doble puerta y pediluvio", "Pocas visitas; manos, ropa y herramientas limpias", "Saca los restos en bolsa cerrada; repara la malla enseguida"] }
          ],
          sources: [FAO_GAP_GH, ICIPE_TUTA, PCPB, NAFDAC, GHANA_EPA],
          tryIt: "Escribe una rutina de una página para tu estructura: lo que haces cada mañana y cada tarde, lo que haces cada semana (monitoreo, trampas, poda, restos) y tus reglas de entrada (puertas, pediluvio, visitas). Pégala en la puerta.",
          youCanNow: "aplicar una rutina diaria y semanal para el calor, la humedad, las plagas y la higiene en una estructura protegida.",
          quickCheck: [
            { objective: "O4", q: "Adentro hace calor y hay humedad, y ves que empieza el moho gris. ¿Qué ayuda más?", options: ["Mojar las hojas con una manguera", "Cerrar todas las ventanas todo el día", "Sembrar más plantas más juntas", "Abrir las ventanas, mantener secas las hojas y podar las hojas de abajo para que circule el aire"], answer: 3, why: "El aire en movimiento y las hojas secas frenan las enfermedades de hongos." },
            { objective: "O4", q: "¿Para qué sirve una doble puerta en la entrada del invernadero?", options: ["Para que se vea moderno", "Para que una puerta esté siempre cerrada y entren menos insectos", "Para que los trabajadores no salgan", "Deja entrar más calor"], answer: 1, why: "Con una puerta siempre cerrada, los insectos no pueden entrar volando directo." }
          ]
        },
        {
          title: "El caso de negocio: margen bruto y periodo de recuperación",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular el costo, los ingresos, el margen bruto y el periodo de recuperación de un cultivo protegido.",
          text: [
            "Un caso de negocio muestra, con números, si la estructura puede pagarse sola antes de gastarse. Necesitas dos tipos de costo. La inversión es lo que pagas una sola vez: la estructura, el sistema de goteo, el tanque y la instalación. Los costos de operación llegan en cada ciclo de cultivo: semilla o plántulas, fertilizante, protección del cultivo, mano de obra, agua y energía, transporte, empaque y cuotas del mercado.",
            "Margen bruto por ciclo = ingresos (kg vendidos esperados x precio por kg) - costos de operación. Periodo de recuperación = inversión / margen bruto por año. Ejemplo inventado en KES, solo para practicar el método: inversión KES 400,000; un ciclo de tomate al año; ventas esperadas de 4,000 kg a KES 40 = KES 160,000; costos de operación KES 90,000; margen bruto KES 70,000 al año. Recuperación = 400,000 / 70,000 = unos 5.7 años. Si el vendedor dice que la cubierta dura unos 4 años, este caso no recupera la inversión antes de que tengas que cambiarla. Es una señal de alerta, no una razón para pedir más prestado.",
            "Ahora ponlo a prueba. Si el precio baja una cuarta parte (KES 30 en vez de 40), los ingresos quedan en KES 120,000, el margen en KES 30,000 y la recuperación en más de 13 años. Los precios del tomate suben y bajan mucho según la temporada, así que prueba un mal precio, un rendimiento más bajo y un cultivo perdido. Luego busca formas de mejorarlo: una estructura más pequeña o más barata, un contrato con un comprador, dos ciclos al año, un cultivo de más valor como el pimiento de colores, o compartir el costo en grupo. Las mismas cuentas sirven en NGN, GHS o XOF: un productor cerca de Dakar, en Senegal, hace las mismas cuentas en francos CFA. Usa tus propias cotizaciones y precios, lleva registros reales cuando empieces y consulta a un asesor de confianza antes de pedir un préstamo o firmar."
          ],
          steps: ["Suma la inversión de la cotización que elegiste.", "Haz la lista de los costos de operación de un ciclo.", "Ingresos = kg vendidos esperados x precio por kg (de tu comprador).", "Margen bruto = ingresos - costos de operación; por año = margen x ciclos por año.", "Recuperación = inversión / margen bruto por año; compárala con la vida de la cubierta.", "Prueba una baja de precio de una cuarta parte, un rendimiento más bajo y un cultivo perdido."],
          words: [["Inversión", "dinero que se paga una sola vez para instalar, como la estructura y el sistema de goteo."], ["Costos de operación", "dinero que se gasta en cada ciclo de cultivo, como plántulas, fertilizante, mano de obra y transporte."], ["Margen bruto", "los ingresos menos los costos de operación de un ciclo o de un año."], ["Periodo de recuperación", "el tiempo que tarda el margen bruto en pagar la inversión."]],
          slides: [
            { title: "Dos tipos de costo", bullets: ["Inversión: estructura, goteo, tanque, instalación", "Costos de operación: plántulas, alimento, mano de obra, agua, transporte"] },
            { title: "Las fórmulas", bullets: ["Margen bruto = ingresos - costos de operación", "Recuperación = inversión / margen bruto por año", "La recuperación debe ser más corta que la vida de la cubierta"] },
            { title: "Ejemplo inventado (KES)", bullets: ["Inversión 400,000; margen 70,000 al año", "Recuperación: unos 5.7 años", "Precio una cuarta parte más bajo: más de 13 años"] },
            { title: "Hazlo más sólido", bullets: ["Estructura más pequeña o compartida en grupo", "Contrato con un comprador; dos ciclos al año", "Cultivo de más valor; registros reales; consulta a un asesor"] }
          ],
          sources: [NORDEY_REVIEW],
          tryIt: "Tarea final: escribe tu caso de negocio de agricultura protegida para un cultivo: tus cinco condiciones, la estructura con tres cotizaciones comparadas y las verificaciones del vendedor hechas, el cultivo y la variedad, tu plan de vivero y de fertirrigación, tu rutina semanal, y la inversión, los costos de operación, los ingresos, el margen bruto, el periodo de recuperación y la recuperación si el precio baja una cuarta parte.",
          youCanNow: "calcular el margen bruto y el periodo de recuperación de un cultivo protegido y probarlo frente a una baja de precio.",
          quickCheck: [
            { objective: "O5", q: "La inversión es 300,000 y el margen bruto es 100,000 al año. ¿Cuál es el periodo de recuperación?", options: ["1 año", "30 años", "3 años", "100 años"], answer: 2, why: "300,000 / 100,000 = 3 años." },
            { objective: "O5", q: "Tu recuperación es de 6 años, pero la cubierta dura unos 4. ¿Qué te dice esto?", options: ["El caso no recupera la inversión a tiempo; cambia el plan o no inviertas todavía", "Está bien; pide más prestado", "La recuperación no importa", "Compra un segundo invernadero"], answer: 0, why: "Si la cubierta se gasta antes de recuperar la inversión, pierdes dinero a menos que cambie el plan." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Manejarlo como un negocio",
        questions: [
          { objective: "O3", q: "¿Qué es la fertirrigación?", options: ["Fumigar plaguicida con una manguera", "Quemar restos de plantas", "Cubrir un invernadero con malla", "Dar fertilizante disuelto en el agua del riego por goteo"], answer: 3, why: "La fertirrigación alimenta a las plantas por las cintas de goteo." },
          { objective: "O3", q: "Un medidor de CE te dice:", options: ["La temperatura del aire", "Cuánto fertilizante disuelto hay en el agua", "El precio del tomate", "Cuántos insectos hay en una tarjeta"], answer: 1, why: "La CE mide las sales disueltas, lo que muestra la fuerza del fertilizante." },
          { objective: "O4", q: "¿Qué plaga es un riesgo especial para el tomate de invernadero?", options: ["Tuta absoluta", "La langosta", "Las ratas en el granero", "Las garrapatas del ganado"], answer: 0, why: "Tuta absoluta ataca hojas, tallos y frutos del tomate y se multiplica rápido bajo cubierta." },
          { objective: "O4", q: "Las tarjetas azules pegajosas en un invernadero atrapan sobre todo:", options: ["Mosca blanca", "Arañitas rojas", "Trips", "Nematodos"], answer: 2, why: "A los trips los atrae el azul; a la mosca blanca y los pulgones, el amarillo." },
          { objective: "O5", q: "El margen bruto es:", options: ["Los ingresos menos los costos de operación", "El precio de la estructura", "El número de plantas", "Los ingresos más la inversión"], answer: 0, why: "El margen bruto muestra lo que queda de las ventas después de los costos de operación." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Invernaderos y agricultura protegida para cultivos de alto valor",
    questions: [
      { objective: "O1", q: "La agricultura protegida significa:", options: ["Cultivar solo de noche", "Cultivar bajo una cubierta como un invernadero, una malla de sombra o un túnel", "Usar un perro guardián", "Cultivar sin agua"], answer: 1, why: "La cubierta protege el cultivo de la lluvia, el granizo y muchos insectos." },
      { objective: "O1", q: "¿Qué situación de compradores apoya mejor un invernadero?", options: ["\"Ya venderé en el mercado de algún modo\"", "Todavía no hay comprador", "Un vecino tal vez compre algo", "Un hotel acepta llevarse una cantidad fija cada semana"], answer: 3, why: "Un comprador semanal estable es una de las cinco condiciones." },
      { objective: "O1", q: "Una revisión de 2017 sobre el cultivo protegido en África subsahariana encontró que:", options: ["No sirve en todos los climas y sigue necesitando otros controles de plagas", "Elimina todas las plagas", "No necesita habilidades", "Siempre se paga en una temporada"], answer: 0, why: "La revisión encontró límites según el clima y que las habilidades, el apoyo y el financiamiento son obstáculos." },
      { objective: "O1", q: "¿Cuál es una condición de capital?", options: ["Tener un tractor", "Tener una familia grande", "Dinero para la estructura, el primer cultivo y los gastos sin arriesgar el dinero de la comida", "Un invernadero de color llamativo"], answer: 2, why: "Necesitas dinero para instalar y operar sin poner en riesgo a tu hogar." },
      { objective: "O2", q: "¿Por qué comparar las cotizaciones renglón por renglón?", options: ["Para ver lo que incluye y lo que deja fuera cada una", "Para elegir la cotización más larga", "Porque a los vendedores les gusta", "No sirve de nada"], answer: 0, why: "Una cotización más barata puede dejar fuera el goteo, la capacitación o la instalación." },
      { objective: "O2", q: "¿Cuál es una señal de alerta de un vendedor de invernaderos?", options: ["Una garantía por escrito", "Agricultores de referencia que puedes visitar", "Una lista clara de lo que incluye", "Un rendimiento garantizado y presión para pagar hoy"], answer: 3, why: "Las garantías de rendimiento y la presión para pagar rápido son señales de promesas exageradas." },
      { objective: "O2", q: "¿Qué opción es la forma más barata de empezar y aprender?", options: ["Un invernadero grande de acero", "Túneles altos o bajos", "Un invernadero de vidrio", "Un cuarto frío"], answer: 1, why: "Los túneles cuestan menos y te dejan aprender antes de una inversión más grande." },
      { objective: "O2", q: "¿Qué debes tener por escrito antes de pagar?", options: ["Solo el teléfono del vendedor", "Nada; basta con la confianza", "La garantía, la fecha de entrega y todo lo que se incluye", "Una foto del vendedor"], answer: 2, why: "Las condiciones por escrito te protegen si algo sale mal." },
      { objective: "O3", q: "Muchas variedades de pepino de invernadero:", options: ["Dan fruto sin abejas", "Necesitan abejas adentro", "Solo crecen en invierno", "Se siembran con estacas"], answer: 0, why: "Muchos pepinos de invernadero están mejorados para dar fruto sin polinización." },
      { objective: "O3", q: "¿Cuál es el mejor momento para trasplantar las plántulas?", options: ["Al mediodía a pleno sol", "Con lluvia fuerte afuera", "Antes de que las plántulas tengan raíces", "En la tarde fresca, y luego regarlas"], answer: 3, why: "Las tardes frescas reducen el estrés del trasplante." },
      { objective: "O3", q: "¿Qué fertilizantes se usan para la fertirrigación?", options: ["Cualquier fertilizante granulado", "Fertilizantes solubles en agua hechos para fertirrigación", "Estiércol fresco", "Cal"], answer: 1, why: "Solo los fertilizantes totalmente solubles pasan por las cintas de goteo sin taparlas." },
      { objective: "O4", q: "El aire caliente, quieto y húmedo bajo cubierta favorece sobre todo:", options: ["Enfermedades de hongos como el tizón tardío y el moho gris", "Una polinización más rápida", "Menos plagas", "Costos más bajos"], answer: 0, why: "La humedad y las hojas mojadas ayudan a que se extiendan las enfermedades de hongos." },
      { objective: "O4", q: "¿Por qué las plagas que entran a un invernadero pueden multiplicarse rápido?", options: ["El plástico las alimenta", "Siempre son más grandes", "Los invernaderos atraen la lluvia", "Adentro no hay lluvia ni muchos enemigos naturales que las detengan"], answer: 3, why: "Bajo cubierta hay menos frenos naturales para las plagas." },
      { objective: "O4", q: "¿Cuál es una buena regla de higiene?", options: ["Dejar entrar libremente a visitantes de otras fincas", "Dejar en el suelo los frutos caídos", "Usar un pediluvio y mantener siempre cerrada una de las dos puertas", "Dejar hoyos en la malla para que entre aire"], answer: 2, why: "El pediluvio y la doble puerta mantienen fuera las plagas y las enfermedades." },
      { objective: "O4", q: "Si en Kenia hace falta un plaguicida en un invernadero, debe:", options: ["Estar registrado en la PCPB y usarse como dice su etiqueta, con equipo de protección", "Ser cualquier producto que tenga el vecino", "Mezclarse más fuerte porque es bajo techo", "Aplicarse justo antes de cosechar"], answer: 0, why: "Solo los productos registrados, usados como dice la etiqueta, son legales y seguros." },
      { objective: "O5", q: "¿Cuál es un costo de inversión?", options: ["Las plántulas", "La mano de obra para cosechar", "La estructura del invernadero y el sistema de goteo", "El transporte al mercado"], answer: 2, why: "La inversión se paga una vez para instalar; los demás son costos de operación." },
      { objective: "O5", q: "Inversión 500,000; margen bruto 125,000 al año. ¿Cuál es el periodo de recuperación?", options: ["2 años", "6 años", "10 años", "4 años"], answer: 3, why: "500,000 / 125,000 = 4 años." },
      { objective: "O5", q: "Ingresos 200,000 y costos de operación 120,000. ¿Cuál es el margen bruto?", options: ["320,000", "80,000", "120,000", "200,000"], answer: 1, why: "200,000 - 120,000 = 80,000." },
      { objective: "O5", q: "¿Por qué probar qué pasa si el precio baja una cuarta parte?", options: ["Porque los precios de las hortalizas suben y bajan y debes saber si aun así recuperas la inversión", "Para que los números se vean mejor", "Porque los precios nunca cambian", "Lo exige el vendedor"], answer: 0, why: "Un plan que solo funciona con el mejor precio es arriesgado." },
      { objective: "O5", q: "¿Qué cambio puede hacer más sólido un caso de negocio débil?", options: ["Pedir más prestado para comprar un invernadero más grande", "Ignorar la recuperación", "Elegir un cultivo sin comprador", "Un contrato con un comprador, una estructura más pequeña o dos ciclos al año"], answer: 3, why: "Una inversión menor, precios más estables o más ciclos suben el margen o acortan la recuperación." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 2, 5, 6, 9, 10, 11, 13, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del caso de negocio y revísala otra vez con un agrónomo o un asesor de confianza antes de invertir.",
    criteria: [
      { name: "¿Me conviene?", objective: "O1", notYet: "Faltan las cinco condiciones o están respondidas sin razones.", meets: "Agua, mercado, habilidades, capital y clima tienen cada uno un sí o un no con una razón, y hay una decisión clara por escrito.", exceeds: "Una condición que falta tiene un plan para arreglarla, como un comprador con nombre o un análisis de agua." },
      { name: "Estructura y verificación del vendedor", objective: "O2", notYet: "Solo una cotización, o se aceptan las promesas de un vendedor sin verificarlas.", meets: "Al menos tres cotizaciones comparadas renglón por renglón, con referencias pedidas y la garantía y el contenido por escrito.", exceeds: "Visitó a dos agricultores de referencia y anotó sus resultados reales." },
      { name: "Plan de cultivo y fertirrigación", objective: "O3", notYet: "No hay calendario del cultivo, o el plan de alimentación es adivinado.", meets: "Cultivo y variedad elegidos según lo que necesita el comprador, con fechas de vivero, trasplante y cosecha, y un plan de alimentación de un agrónomo o de un análisis, con revisiones diarias del goteo.", exceeds: "El plan incluye metas de CE y pH fijadas por el agrónomo y una hoja de registro diario." },
      { name: "Rutina de clima, plagas e higiene", objective: "O4", notYet: "No hay rutina, o las plagas se manejan solo fumigando.", meets: "Una rutina diaria y semanal de ventanas, monitoreo, trampas, poda, restos y reglas de entrada, usando solo productos registrados como dice la etiqueta.", exceeds: "La rutina está pegada en la puerta y se ha seguido y registrado al menos dos semanas." },
      { name: "Números y recuperación", objective: "O5", notYet: "No hay números, o el margen bruto o la recuperación están mal.", meets: "La inversión, los costos de operación, los ingresos, el margen bruto y la recuperación están bien, comparados con la vida de la cubierta, y se prueba una baja de precio de una cuarta parte.", exceeds: "También prueba un rendimiento más bajo y un cultivo perdido, y anota cambios que harían más sólido el caso." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que comparan al menos tres cotizaciones y visitan a agricultores de referencia antes de comprar una estructura (encuesta de seguimiento)",
      "Participantes que deciden no invertir todavía, o empezar en pequeño, porque su caso de negocio no recuperaba la inversión (un buen resultado, no un fracaso)",
      "Participantes con estructura que dicen tener una rutina semanal y perder menos cultivos por plagas o enfermedades después de un ciclo",
      "Participantes que informan su margen bruto real por ciclo comparado con su caso de negocio"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono con calculadora, o papel, lápiz y una calculadora sencilla",
      "Cotizaciones por escrito de vendedores locales de invernaderos, mallas de sombra o túneles (los participantes las juntan durante el curso)",
      "Datos de contacto de un agrónomo o extensionista y de un comprador con quien el participante pueda hablar",
      "Opcional: una visita a un invernadero en funcionamiento, un termómetro, tarjetas pegajosas y un medidor de CE para mostrar al grupo",
      "Unos 60 a 90 minutos en total para las lecciones, las pruebas rápidas y los exámenes, más tiempo para juntar cotizaciones y hablar con compradores"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego, si pueden, visiten un invernadero o una malla de sombra en funcionamiento y pregunten al dueño por los costos y problemas reales.",
      "Recuerda a los participantes que cada cifra de dinero del curso es un ejemplo inventado; deben usar sus propias cotizaciones y los precios de su comprador.",
      "No recomiendes un vendedor de invernaderos, un producto ni una receta de fertilizante; enseña a los participantes a comparar y verificar.",
      "Toma \"todavía no\" o \"empezar en pequeño\" como un buen resultado si los números no funcionan; eso evita deudas a las familias.",
      "Nunca recomiendes un plaguicida ni una dosis; enseña a los participantes a revisar la lista de la autoridad reguladora y a leer una etiqueta.",
      "Califica cada caso de negocio con la rúbrica y revisa cada cálculo con el participante antes de que hable con un prestamista o un vendedor."
    ]
  }
};
