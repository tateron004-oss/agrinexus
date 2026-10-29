"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-value-addition-marketing.js). See scripts/koachlearn-courses/README.md, "Translations".

const NAFDAC_FOOD = { name: "NAFDAC (Nigeria): registro de alimentos, División de Alimentos Hechos en Nigeria (pequeña escala y mediana/gran escala)", url: "https://www.nafdac.gov.ng/food/food-registration/" };
const GH_FDA_REG = { name: "Autoridad de Alimentos y Medicamentos de Ghana (FDA): registro de productos", url: "https://fdaghana.gov.gh/services-2/product-registration/" };
const GH_FDA_PLS = { name: "Autoridad de Alimentos y Medicamentos de Ghana: Progressive Licensing Scheme (licencias por etapas) para pequeños productores (rosa, amarillo, verde)", url: "https://fdaghana.gov.gh/programmes/progressive-licensing-scheme-2/" };
const KEBS = { name: "Oficina de Normas de Kenia (KEBS): Standardization Mark (certificación de productos) y marcas de calidad", url: "https://www.kebs.org" };
const CODEX_HYGIENE = { name: "Codex Alimentarius (FAO/OMS): Comité de Higiene de los Alimentos y Principios Generales de Higiene de los Alimentos (CXC 1-1969)", url: "https://codex.fao.org/codex-committees/general-subject-committees/CCFH" };
const FAO_ZECC = { name: "Portal TECA/STI de la FAO: cámara de enfriamiento sin energía para hortalizas", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-value-addition-marketing-es",
  lang: "es",
  translationOf: "agri-value-addition-marketing",
  category: "Agriculture (Africa)",
  name: "Valor agregado, empaque y mercadeo agrícola",
  skills: "Elegir un producto con valor agregado, Calcular el costo y el precio de un producto, Procesar con higiene, Empacar y etiquetar, Mantener el producto seguro en el transporte, Vender directo a los compradores",
  outcome: "convertir un cultivo o la leche de tu finca en un producto empacado y etiquetado: elegirlo, calcular su costo, prepararlo con higiene, averiguar qué registro necesita y ofrecerlo directo a una tienda, una escuela, un hotel o un comprador en línea a un precio que deje ganancia.",
  about: [
    "Los productos frescos suelen venderse baratos en la cosecha, cuando todos venden lo mismo. Convertirlos en un producto como mango seco, harina de yuca, pasta de maní o yogur puede dar más dinero, durar más y llegar a nuevos compradores. Este curso es para pequeños agricultores, grupos de mujeres y de jóvenes, jóvenes agroemprendedores y extensionistas de Kenia, Nigeria, Ghana, África occidental francófona y toda África.",
    "Vas a elegir un producto que encaje con tu finca y con un comprador real, calcular cuánto cuesta un paquete y cuánto cobrar, organizar un procesamiento higiénico, diseñar una etiqueta, averiguar qué organismo nacional debe aprobarlo, planear cómo mantenerlo seguro hasta el comprador y preparar una presentación para vender directo.",
    "Se basa en los cursos Manejo y almacenamiento poscosecha y Cooperativas agrícolas y acceso al mercado, así que no repite el almacenamiento, el secado ni la venta en grupo. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" para tu propia finca. Todas las cifras de dinero son ejemplos, no precios reales."
  ],
  finalTask: "Haz un plan de producto de una página para un producto con valor agregado de tu finca: el producto y el comprador, una hoja de costos con el costo y el precio por paquete, una lista de higiene para prepararlo, un borrador de etiqueta con el organismo nacional que debes consultar, cómo lo mantendrás seguro en el camino y una presentación corta para un comprador directo.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños y medianos agricultores, trabajadores agrícolas, grupos de mujeres y de jóvenes, jóvenes agroemprendedores y extensionistas de Kenia, Nigeria, Ghana, África occidental francófona y toda África. Muchos ya venden productos frescos en la puerta de la finca o en el mercado local y quieren un mejor precio.",
    startingPoint: "Saben cultivar y cosechar o producir leche, y saben almacenar y secar bien (ver Manejo y almacenamiento poscosecha). Algunos ya preparan pequeñas cantidades de un producto para la familia o los vecinos, sin cálculo de costos, sin etiquetas y sin registro.",
    gap: "Muchos productos de la finca se venden a un precio puesto al azar, se preparan sin una rutina de higiene, se venden sin una etiqueta adecuada y se entregan a intermediarios que pagan tarde o poco. Los agricultores necesitan elegir un producto que un comprador de verdad quiera, calcular su costo, prepararlo de forma segura, etiquetarlo, averiguar qué aprobación nacional necesita y venderlo directo, para que el valor agregado deje ganancia en lugar de pérdida.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; muchos participantes hablan el idioma del curso como segunda lengua",
      "Dispositivos: un teléfono básico o inteligente, a menudo compartido; una calculadora; papel",
      "Dinero: presupuestos bajos; empezar con tandas pequeñas y equipo de bajo costo",
      "Reglas: las normas de registro y etiquetado de alimentos cambian de un país a otro y con el tiempo; los participantes consultan a su organismo nacional",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre las tareas de la finca"
    ],
    prerequisites: "Útil: Manejo y almacenamiento poscosecha, y Cooperativas agrícolas y acceso al mercado. Saber sumar, multiplicar y dividir."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con los principales cultivos o la leche de tu finca y lo que piden los compradores cercanos", action: "elegir un producto con valor agregado para preparar y el comprador al que se lo venderás", standard: "después de comparar al menos dos opciones en demanda, materia prima, equipo y reglas" },
    { id: "O2", condition: "Con los costos de una tanda", action: "calcular el costo de un paquete y fijar un precio de venta", standard: "contando materia prima, empaque, energía, mano de obra, transporte y pérdidas, con un precio que cubra todos los costos más un margen" },
    { id: "O3", condition: "Para tu producto, desde el procesamiento hasta el comprador", action: "escribir una lista de higiene y de cadena de frío", standard: "que cubra las manos, el agua, las superficies, la materia prima, el empaque y la seguridad del producto en el almacenamiento y el transporte" },
    { id: "O4", condition: "Con tu producto y tu país", action: "hacer un borrador de etiqueta y nombrar el organismo nacional que debe aprobar el producto", standard: "con el nombre del producto, los ingredientes, el peso neto, el productor y su contacto, el número de lote y las fechas, y una nota para consultar las reglas vigentes del organismo" },
    { id: "O5", condition: "Con una tienda, una escuela, un hotel o un comprador en línea", action: "preparar una presentación de venta directa con condiciones por escrito", standard: "que diga el producto, el precio, la cantidad, la entrega, la fecha de pago y cómo se atienden las quejas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Hacer un producto que deje ganancia",
      lessons: [
        {
          title: "Elegir un producto con valor agregado",
          objectives: ["O1"],
          minutes: 5,
          goal: "Comparar dos productos con valor agregado para tu finca y elegir uno que tenga un comprador real.",
          text: [
            "Agregar valor significa hacerle algo a tu producto para que el comprador pague más: secarlo, molerlo, tostarlo, triturarlo, fermentarlo, limpiarlo, separarlo en paquetes o simplemente empacarlo bien. Los mangos frescos que se pudren en una semana pueden convertirse en mango seco que dura meses. La yuca puede convertirse en harina o gari, el maní en pasta y la leche en yogur.",
            "Empieza por el comprador, no por la máquina. Pregunta en tiendas, a cocineros de escuelas, en hoteles y a comerciantes del mercado cercanos qué compran, cuánto, cada cuánto, en qué tamaño de paquete y a qué precio. Un producto que nadie cerca está pidiendo es un riesgo.",
            "Después revisa cuatro cosas: la demanda (quién lo comprará y cuánto), la materia prima (si tú o tus vecinos tienen suficiente, todo el año o solo en temporada), el equipo y la habilidad (si puedes empezar en pequeño, por ejemplo con un secador solar o un molino alquilado) y las reglas (los productos de leche y de carne tienen más riesgo y suelen necesitar más aprobaciones que una harina seca). Compara al menos dos opciones antes de elegir."
          ],
          steps: ["Haz una lista de dos o tres productos que podrías hacer con tus propios cultivos o tu leche.", "Pregunta al menos a tres compradores qué compran, cuánto y a qué precio.", "Califica cada producto en demanda, materia prima, equipo y habilidad, y reglas.", "Elige el que tenga mejor calificación y un comprador con nombre."],
          words: [["Valor agregado", "cambiar o empacar tu producto para que un comprador pague más por él."], ["Vida útil", "cuánto tiempo un producto sigue siendo seguro y bueno para comer."], ["Perecedero", "un producto que se echa a perder rápido, como la leche, el yogur o los tomates frescos."]],
          slides: [
            { title: "Qué significa agregar valor", bullets: ["Secar, moler, triturar, tostar, fermentar o empacar tu producto", "Mango fresco a mango seco; yuca a harina o gari", "Maní a pasta; leche a yogur"] },
            { title: "Empieza por el comprador", bullets: ["Pregunta en tiendas, a cocineros de escuelas, en hoteles y a comerciantes", "Qué compran, cuánto y cada cuánto", "Tamaño de paquete y precio que pagan"] },
            { title: "Califica cada opción", bullets: ["Demanda: quién compra y cuánto", "Materia prima: si alcanza, y en qué meses", "Equipo y habilidad; reglas (la leche tiene más riesgo)"] }
          ],
          tryIt: "Elige dos productos que podrías hacer. Pregunta a tres compradores cercanos por cada uno y califica los dos en demanda, materia prima, equipo y reglas. Escribe el producto que eliges y el comprador al que vas a apuntar.",
          youCanNow: "comparar productos con valor agregado en demanda, materia prima, equipo y reglas, y elegir uno que tenga un comprador real.",
          quickCheck: [
            { objective: "O1", q: "Quieres agregar valor a tus mangos. ¿Qué debes hacer primero?", options: ["Comprar un secador grande a crédito", "Copiar lo que hace tu vecino", "Preguntar a compradores cercanos qué compran y a qué precio", "Hacer lo más posible y buscar compradores después"], answer: 2, why: "Empezar con compradores reales muestra si hay demanda antes de gastar dinero." },
            { objective: "O1", q: "¿Qué producto suele necesitar MÁS aprobaciones y cuidado para hacerlo seguro?", options: ["Yogur hecho con leche", "Harina de yuca", "Rodajas de mango seco", "Frijoles limpios y seleccionados en paquetes"], answer: 0, why: "Los productos de leche se echan a perder rápido y pueden llevar gérmenes, así que tienen más riesgo y suelen estar más regulados." }
          ]
        },
        {
          title: "Calcular el costo y el precio de tu producto",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular el costo de un paquete y fijar un precio que cubra todos los costos más un margen.",
          text: [
            "Muchos pequeños procesadores pierden dinero sin saberlo, porque solo cuentan la materia prima. Cuenta todos los costos de una tanda: materia prima, empaque y etiquetas, energía (combustible, carbón, electricidad, pago del molino), agua, mano de obra (incluido tu propio tiempo), transporte, y pagos como el registro o las cuotas del mercado repartidos a lo largo del año.",
            "Después cuenta las pérdidas: parte del producto se daña, se derrama o se regala como muestra. Divide el costo total de la tanda entre el número de paquetes que de verdad puedes vender. Ejemplo (las cifras son solo ejemplos): un grupo de Ghana hace pasta de maní. Maní GHS 400, frascos y etiquetas GHS 150, molino y combustible GHS 50, mano de obra GHS 100, transporte GHS 50: total GHS 750. Llenan 50 frascos pero esperan vender 48, así que cada frasco cuesta unos GHS 15.60.",
            "Tu precio debe cubrir el costo por paquete más un margen para la ganancia, el ahorro y las reparaciones. Luego compara el precio con productos parecidos en las tiendas. Si tu precio está muy por encima, busca una forma más barata de hacerlo, un paquete más pequeño o un comprador que pague por la calidad. El mismo método sirve para mango seco en KES, gari en NGN o yogur en XOF."
          ],
          steps: ["Haz una lista de todos los costos de una tanda, incluida tu propia mano de obra.", "Cuenta cuántos paquetes puedes vender de verdad después de las pérdidas.", "Divide el costo total entre los paquetes que puedes vender: ese es el costo por paquete.", "Suma un margen para obtener tu precio.", "Compáralo con productos parecidos en las tiendas y ajusta tu plan si hace falta."],
          words: [["Costo por unidad", "lo que te cuesta hacer un paquete."], ["Margen", "el dinero que queda de cada venta después de pagar los costos."], ["Tanda", "una ronda de preparación del producto, por ejemplo 50 frascos hechos en un día."]],
          slides: [
            { title: "Cuenta todos los costos de una tanda", bullets: ["Materia prima, empaque, etiquetas", "Combustible, electricidad, molino, agua", "Mano de obra (también la tuya), transporte, pagos"] },
            { title: "Costo por paquete", bullets: ["Costo total de la tanda / paquetes que de verdad puedes vender", "Ejemplo: GHS 750 / 48 frascos = unos GHS 15.60", "Las cifras son solo ejemplos"] },
            { title: "Fija el precio", bullets: ["Costo por paquete + margen = precio", "Compara con productos parecidos en las tiendas", "¿Muy alto? Método más barato, paquete más pequeño u otro comprador"] }
          ],
          tryIt: "Haz una hoja de costos para una tanda de tu producto. Anota todos los costos, los paquetes que esperas vender, el costo por paquete y el precio que cobrarías. Compáralo con un producto parecido en una tienda.",
          youCanNow: "hacer una hoja de costos, calcular el costo de un paquete y fijar un precio que lo cubra con un margen.",
          quickCheck: [
            { objective: "O2", q: "¿Qué costo olvidan MÁS a menudo los pequeños procesadores?", options: ["La materia prima", "Su propia mano de obra y las pérdidas", "El precio en la tienda", "El nombre del producto"], answer: 1, why: "Tu propio tiempo y los paquetes dañados o regalados como muestra son costos reales, y dejarlos fuera esconde las pérdidas." },
            { objective: "O2", q: "Una tanda cuesta KES 6,000 y puedes vender 40 paquetes. ¿Cuál es el costo por paquete?", options: ["KES 240", "KES 600", "KES 1,500", "KES 150"], answer: 3, why: "El costo por paquete es el costo total de la tanda dividido entre los paquetes vendidos: 6,000 / 40 = KES 150." }
          ]
        },
        {
          title: "Higiene e inocuidad de los alimentos al procesar",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escribir una lista de higiene que mantenga tu producto seguro mientras lo preparas.",
          text: [
            "Un comprador no volverá, y una autoridad puede detener tus ventas, si un producto enferma a alguien. Los Principios Generales de Higiene de los Alimentos del Codex Alimentarius, que son internacionales, cubren toda la cadena, desde la finca hasta la persona que come el alimento. Tu organismo nacional de alimentos usa ideas como estas cuando te inspecciona.",
            "Lo básico: agua limpia y segura; manos lavadas con jabón antes de trabajar y después de ir al baño; no trabajar si estás enfermo; cabello cubierto y heridas cubiertas; superficies, herramientas y recipientes limpios; la materia prima separada del producto terminado; animales, insectos y ratas fuera; y un lugar limpio y seco para guardar los paquetes.",
            "Empieza con materia prima limpia. Nunca proceses maní o granos con moho, que pueden llevar aflatoxina (ver Manejo y almacenamiento poscosecha). La leche para yogur debe calentarse y manejarse con un método probado que te dé tu extensionista lechero o tu organismo de normas, y mantenerse fría. Escribe tus pasos para que cada tanda se haga igual, y dale a cada tanda un número y una fecha."
          ],
          steps: ["Escribe los pasos para hacer tu producto, desde la materia prima hasta el paquete sellado.", "Para cada paso, escribe qué podría hacerlo inseguro (suciedad, gérmenes, moho, insectos).", "Escribe la regla de higiene que lo evita.", "Dale a cada tanda un número y una fecha, y anota quién la hizo."],
          words: [["Inocuidad de los alimentos", "mantener los alimentos libres de gérmenes, venenos y suciedad que pueden enfermar a la gente."], ["Contaminación", "cuando entran suciedad, gérmenes o químicos en los alimentos."], ["Número de lote", "un código en cada paquete que dice cuándo y cómo se hizo, para poder rastrear un problema."]],
          slides: [
            { title: "Por qué importa la higiene", bullets: ["Un solo cliente enfermo puede acabar con tu negocio", "Principios de higiene del Codex: de la finca al plato", "Los inspectores buscan estos puntos básicos"] },
            { title: "Lo básico", bullets: ["Agua segura; lávate las manos con jabón", "No trabajes enfermo; cubre el cabello y las heridas", "Herramientas limpias; materia prima y producto terminado separados"] },
            { title: "Empieza limpio y escríbelo", bullets: ["Nunca uses granos ni maní con moho", "Leche: método probado y siempre fría", "Los mismos pasos en cada tanda; número de lote y fecha"] }
          ],
          sources: [CODEX_HYGIENE],
          tryIt: "Escribe los pasos para hacer tu producto. Junto a cada paso, escribe una cosa que podría hacerlo inseguro y la regla que lo evita. Esta es tu lista de higiene.",
          youCanNow: "escribir una lista de higiene para tu producto y darle a cada tanda un número y una fecha.",
          quickCheck: [
            { objective: "O3", q: "Un trabajador tiene diarrea el día de procesamiento. ¿Qué debe pasar?", options: ["Se queda fuera del procesamiento hasta que se recupere", "Trabaja pero se lava las manos una vez", "Trabaja solo con guantes", "Empaca en lugar de mezclar"], answer: 0, why: "Los trabajadores enfermos pueden pasar gérmenes a los alimentos, así que no deben tocarlos hasta que estén bien." },
            { objective: "O3", q: "Parte del maní de un costal se ve con moho. ¿Qué haces?", options: ["Lo tuestas más tiempo para matar el moho", "Lo mezclas con el maní bueno", "Lo sacas y no lo usas para la pasta", "Lo vendes más barato"], answer: 2, why: "El moho puede llevar aflatoxina, que no se elimina al cocinar, así que el maní con moho no debe usarse." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Hacer un producto que deje ganancia",
        questions: [
          { objective: "O1", q: "¿Cuál es un ejemplo de valor agregado?", options: ["Vender yuca fresca en la puerta de la finca", "Moler la yuca en harina y empacarla", "Sembrar más yuca", "Dejar la yuca más tiempo en la tierra"], answer: 1, why: "Moler y empacar convierten el producto fresco en algo por lo que el comprador paga más." },
          { objective: "O1", q: "Solo tienes leche en la temporada de lluvias. ¿Qué revisión importa más antes de elegir el yogur?", options: ["El color de la etiqueta", "El nombre de tu marca", "Lo que les gusta a tus amigos", "Si tienes suficiente materia prima todo el año y un comprador para ella"], answer: 3, why: "La oferta de materia prima y la demanda deciden si el producto puede mantener a un comprador." },
          { objective: "O2", q: "¿Qué es el costo por paquete?", options: ["El costo total de la tanda dividido entre los paquetes que de verdad puedes vender", "El precio de la tienda menos tu mano de obra", "Solo el costo de la materia prima", "Lo que cobre tu vecino"], answer: 0, why: "Dividir todos los costos de la tanda entre los paquetes vendibles da el costo real de un paquete." },
          { objective: "O3", q: "¿Cuál es una regla básica de higiene al procesar?", options: ["Dejar que las gallinas caminen por la zona de trabajo", "Usar cualquier agua que tengas", "Lavarse las manos con jabón antes de trabajar y después de ir al baño", "Guardar juntos la materia prima y el producto terminado"], answer: 2, why: "Lavarse las manos con jabón evita que los gérmenes de las manos pasen a los alimentos." },
          { objective: "O3", q: "¿Por qué darle a cada tanda un número y una fecha?", options: ["Para que el paquete se vea bonito", "Para rastrear y corregir un problema si una tanda sale mal", "Porque a los compradores les gustan los números", "Para subir el precio"], answer: 1, why: "Un número de lote te permite encontrar qué paquetes vienen de una tanda con problemas y cuándo se hizo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Empacar, etiquetar y vender directo",
      lessons: [
        {
          title: "Empaque, etiquetas, marca y registro",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hacer un borrador de etiqueta para tu producto y encontrar el organismo nacional que debe aprobarlo.",
          text: [
            "Un buen empaque mantiene seguro el producto y hace que los compradores confíen en él. Elige empaques aptos para alimentos que no dejen pasar el aire, el agua ni los insectos: bolsas selladas para el mango seco y la harina, frascos limpios con tapa hermética para la pasta de maní, y vasos limpios y sellados para el yogur. Tu marca es tu nombre, tu logo y tu promesa, por ejemplo 'limpio, local, sin azúcar añadida'. Mantenla sencilla e igual en cada paquete.",
            "Una etiqueta suele mostrar: el nombre del producto, los ingredientes, el peso o volumen neto, el nombre y el contacto del productor, el número de lote, la fecha de elaboración y una fecha de caducidad o de consumo preferente, cómo guardarlo, y cualquier número de registro o sello. Tu país puede pedir más, así que consulta antes de imprimir muchas etiquetas.",
            "La mayoría de los alimentos empacados necesitan aprobación antes de venderse en tiendas. En Kenia, la KEBS (Oficina de Normas de Kenia) otorga el Standardization Mark a los productos que cumplen una norma keniana. En Nigeria, la NAFDAC (agencia nacional de control de alimentos y medicamentos) registra los alimentos hechos en el país a través de su División de Alimentos Hechos en Nigeria, con vías para pequeños productores y también para medianos y grandes. En Ghana, la Autoridad de Alimentos y Medicamentos (FDA) registra los productos, y su Progressive Licensing Scheme permite a los productores muy pequeños (de una a cinco personas) cumplir las reglas por etapas. En Costa de Marfil, consulta al organismo nacional de normas, CODINORM; otros países tienen el suyo. Las reglas, los formularios y las tarifas cambian, así que contacta al organismo antes de empezar."
          ],
          steps: ["Elige un empaque apto para alimentos que no deje pasar el aire, el agua ni los insectos.", "Escribe el nombre de tu marca y una promesa de una línea.", "Haz el borrador de la etiqueta: nombre, ingredientes, peso neto, productor y contacto, número de lote, fechas, conservación.", "Encuentra tu organismo nacional (KEBS, NAFDAC, FDA de Ghana, CODINORM u otro) y pregunta qué necesita tu producto.", "Imprime las etiquetas solo cuando conozcas las reglas."],
          words: [["Marca", "el nombre, el logo y la promesa que hacen que los compradores reconozcan tu producto y confíen en él."], ["Peso neto", "el peso del alimento dentro del paquete, sin contar el empaque."], ["Registro", "la aprobación oficial de un organismo nacional para que un alimento pueda venderse."], ["Fecha de consumo preferente", "la fecha hasta la que el producto mantiene su mejor calidad si se guarda como dice la etiqueta."]],
          slides: [
            { title: "Empaques que protegen", bullets: ["Aptos para alimentos; no dejan pasar aire, agua ni insectos", "Bolsas selladas, frascos limpios, vasos sellados", "La misma marca sencilla en cada paquete"] },
            { title: "Lo que suele mostrar una etiqueta", bullets: ["Nombre, ingredientes, peso neto", "Nombre y contacto del productor", "Número de lote, fecha de elaboración, consumo preferente o caducidad", "Conservación; número de registro o sello"] },
            { title: "Quién aprueba (consulta las reglas vigentes)", bullets: ["Kenia: Standardization Mark de la KEBS", "Nigeria: registro de la NAFDAC (también vía para pequeña escala)", "Ghana: FDA; Progressive Licensing Scheme para productores muy pequeños"] },
            { title: "Antes de imprimir", bullets: ["Costa de Marfil: CODINORM; otros países: su propio organismo", "Las reglas, los formularios y las tarifas cambian", "Pregunta primero al organismo y después imprime"] }
          ],
          sources: [KEBS, NAFDAC_FOOD, GH_FDA_REG, GH_FDA_PLS],
          tryIt: "Haz el borrador de la etiqueta de tu producto en papel o con una herramienta gratis como Canva. Luego busca el sitio web o la oficina de tu organismo nacional de alimentos y anota las preguntas que le harás sobre el registro y el etiquetado.",
          youCanNow: "hacer un borrador de etiqueta y nombrar el organismo nacional que debes consultar antes de vender en tiendas.",
          quickCheck: [
            { objective: "O4", q: "¿Qué dato suele necesitar una etiqueta de alimentos?", options: ["El PIN bancario del agricultor", "El precio del maní crudo", "Una foto de la finca", "El número de lote y la fecha de consumo preferente"], answer: 3, why: "El número de lote y las fechas dicen a compradores e inspectores cuándo se hizo y cuánto dura." },
            { objective: "O4", q: "Un pequeño procesador de Ghana con tres trabajadores quiere la aprobación de la FDA. ¿Qué programa lo ayuda a cumplir las reglas por etapas?", options: ["El Standardization Mark", "El Progressive Licensing Scheme", "GLOBALG.A.P.", "La División de Alimentos Hechos en Nigeria"], answer: 1, why: "El Progressive Licensing Scheme de la FDA de Ghana es para pequeños productores de una a cinco personas." }
          ]
        },
        {
          title: "Mantener el producto seguro en el camino: cadena de frío y transporte",
          objectives: ["O3"],
          minutes: 5,
          goal: "Planear cómo tu producto llega seguro y sin daños desde tu bodega hasta el comprador.",
          text: [
            "Un producto puede estar perfectamente hecho y aun así echarse a perder en el camino. Los productos perecederos como el yogur y el jugo fresco necesitan una cadena de frío: deben estar fríos en cada paso, desde que se hacen hasta el refrigerador del comprador. Si se calientan en el camino, los gérmenes crecen y el producto puede enfermar a la gente, aunque se vea bien.",
            "Para viajes cortos, usa una hielera limpia con bolsas de hielo y entrega temprano en el día. Acuerda con el comprador que lo meta al refrigerador de inmediato. Nunca vuelvas a congelar ni revendas yogur que se calentó. Los productos secos como la harina de yuca, el mango seco y la pasta de maní no necesitan frío, pero deben ir secos, sellados, a la sombra y lejos del combustible, los químicos y las plagas.",
            "Planea el viaje: quién lo lleva, en qué (moto, matatu, okada, autobús o camión), cuánto tarda y cómo se protegen los paquetes de aplastarse, del sol y de la lluvia. Un enfriamiento de bajo costo, como la cámara de enfriamiento sin energía de la FAO, puede mantener los productos más frescos antes de procesarlos. Agrega tus pasos de cadena de frío y transporte a tu lista de higiene."
          ],
          steps: ["Decide si tu producto es perecedero (necesita frío) o seco (necesita ir seco y sellado).", "Para productos fríos: hielera, bolsas de hielo, entrega temprana, al refrigerador del comprador de inmediato.", "Para productos secos: sellados, a la sombra, lejos de químicos y plagas.", "Planea quién lo lleva, cómo, cuánto tarda y cómo se protegen los paquetes.", "Agrega estos pasos a tu lista de higiene."],
          words: [["Cadena de frío", "mantener un producto frío en cada paso, desde que se hace hasta que se vende."], ["Hielera", "una caja aislada que mantiene las cosas frías con hielo o bolsas de hielo."]],
          slides: [
            { title: "Cadena de frío para perecederos", bullets: ["El yogur y el jugo deben ir fríos todo el camino", "Caliente en el camino = crecen gérmenes, aunque se vea bien", "Nunca revendas yogur que se calentó"] },
            { title: "Viajes cortos, bajo costo", bullets: ["Hielera limpia con bolsas de hielo", "Entrega temprano en el día", "El comprador lo mete al refrigerador de inmediato"] },
            { title: "Productos secos", bullets: ["Secos, sellados y a la sombra", "Lejos del combustible, los químicos y las plagas", "Protege los paquetes de aplastarse y de la lluvia"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Escribe el recorrido de tu producto desde tu bodega hasta tu comprador: quién lo lleva, cómo, cuánto tarda y qué lo mantiene frío o seco y sin daños. Agrégalo a tu lista de higiene.",
          youCanNow: "planear una cadena de frío o un transporte en seco que mantenga tu producto seguro hasta que el comprador lo tenga.",
          quickCheck: [
            { objective: "O3", q: "Tu yogur estuvo tres horas al sol en un autobús retrasado. ¿Qué haces?", options: ["Lo vendes rápido con descuento", "Lo vuelves a meter al refrigerador y lo vendes mañana", "No lo vendes; ya no es seguro", "Lo pruebas y lo vendes si parece bien"], answer: 2, why: "El yogur que se calentó puede tener gérmenes que no se ven ni se notan al probarlo, así que no debe venderse." },
            { objective: "O3", q: "¿Qué necesita más el mango seco en el camino hacia un comprador?", options: ["Ir seco, sellado y a la sombra", "Ir congelado", "Ir al aire libre", "Ir junto al bidón de combustible"], answer: 0, why: "Los productos secos se dañan con la humedad, el calor fuerte o cerca de químicos, no por estar a temperatura ambiente." }
          ]
        },
        {
          title: "Vender directo: tiendas, escuelas, hoteles y en línea",
          objectives: ["O5"],
          minutes: 6,
          goal: "Preparar una presentación y condiciones por escrito para vender tu producto directo a un comprador.",
          text: [
            "No todos los intermediarios son malos: algunos comerciantes pagan bien y transportan productos que tú no puedes llevar. Pero fíjate en las señales de abuso: básculas trucadas, precios cambiados después de la entrega, pagos que llegan meses tarde o nunca, y desconocidos que dicen 'compro ahora y pago después' y luego desaparecen. Vender directo puede darte un mejor precio y un cliente fijo.",
            "Cada comprador quiere cosas distintas. Las tiendas locales y los supermercados quieren una etiqueta, un suministro constante y a veces venden en consignación (pagan solo cuando el producto se vende), lo cual es un riesgo. Las escuelas y los hospitales compran al por mayor con un calendario y a menudo piden una cotización, una factura y a veces un registro. Los hoteles y restaurantes quieren la misma calidad siempre. Los compradores en línea por WhatsApp, Facebook o un sitio de ventas quieren fotos claras, precios y entrega rápida.",
            "Una buena presentación es corta: qué es el producto, por qué es bueno (limpio, local, fresco), el precio, el tamaño del paquete, cuánto puedes entregar y cada cuánto, y la entrega. Luego acuerda las condiciones por escrito, aunque sea en un mensaje sencillo: cantidad, precio, día de entrega, fecha y forma de pago (por ejemplo dinero móvil), y qué pasa si un paquete llega dañado. Guarda una copia. Nunca compartas PIN ni contraseñas con ningún comprador. Para un contrato grande o largo, pide a un asesor de confianza que lo lea primero."
          ],
          steps: ["Elige un comprador: una tienda, una escuela, un hotel o clientes en línea.", "Escribe una presentación corta: producto, por qué es bueno, precio, tamaño del paquete, suministro, entrega.", "Lleva una muestra y tu etiqueta.", "Acuerda las condiciones por escrito: cantidad, precio, entrega, fecha y forma de pago, paquetes dañados.", "Guarda una copia y anota cada entrega y cada pago."],
          words: [["Intermediario", "un comerciante que compra a los agricultores y revende a otros."], ["Consignación", "la tienda se queda con tu mercancía y te paga solo cuando se vende."], ["Presentación de venta", "una oferta corta y clara a un comprador."], ["Factura", "un documento escrito que pide al comprador pagar la mercancía entregada."]],
          slides: [
            { title: "Cuidado con el abuso", bullets: ["Básculas trucadas; precio cambiado después de la entrega", "Pago meses tarde o nunca", "Desconocidos que 'pagan después' y desaparecen"] },
            { title: "Qué quiere cada comprador", bullets: ["Tiendas: etiqueta, suministro constante; riesgo de consignación", "Escuelas: al por mayor, calendario, cotización y factura", "Hoteles: la misma calidad siempre; en línea: fotos y entrega rápida"] },
            { title: "Una presentación corta", bullets: ["Qué es y por qué es bueno", "Precio, tamaño del paquete, cuánto y cada cuánto", "Entrega; lleva una muestra y la etiqueta"] },
            { title: "Pon las condiciones por escrito", bullets: ["Cantidad, precio, día de entrega", "Fecha y forma de pago; paquetes dañados", "Guarda una copia; nunca compartas tu PIN"] }
          ],
          tryIt: "Tarea final: escribe tu plan de producto de una página. Incluye el producto y el comprador, tu hoja de costos y tu precio, tu lista de higiene y de cadena de frío, tu borrador de etiqueta y el organismo nacional, y una presentación corta con las condiciones que pedirás al comprador que acepte por escrito.",
          youCanNow: "presentar tu producto a un comprador directo y acordar condiciones claras por escrito sobre el precio, la entrega y el pago.",
          quickCheck: [
            { objective: "O5", q: "Una tienda ofrece recibir tu pasta de maní en consignación. ¿Cuál es el riesgo?", options: ["Tienes que pagarle primero a la tienda", "Te pagan solo cuando se vende, y los paquetes sin vender pueden regresar", "La tienda cambiará tu etiqueta", "No hay ningún riesgo"], answer: 1, why: "En consignación tú cargas con el riesgo hasta que el producto se vende, así que acuerda por cuánto tiempo y qué pasa con los paquetes sin vender." },
            { objective: "O5", q: "Un hotel acepta comprar yogur cada semana. ¿Qué deben acordar por escrito?", options: ["Solo el nombre del hotel", "Tu PIN de dinero móvil", "Nada; basta con un apretón de manos", "Cantidad, precio, día de entrega, fecha de pago y qué pasa con los paquetes dañados"], answer: 3, why: "Las condiciones escritas sobre cantidad, precio, entrega y pago evitan problemas después." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Empacar, etiquetar y vender directo",
        questions: [
          { objective: "O4", q: "¿Qué organismo otorga el Standardization Mark a los productos en Kenia?", options: ["NAFDAC", "FDA de Ghana", "KEBS", "CODINORM"], answer: 2, why: "La KEBS, la Oficina de Normas de Kenia, otorga el Standardization Mark." },
          { objective: "O4", q: "¿Cuándo debes imprimir muchas etiquetas?", options: ["Después de consultar lo que exige tu organismo nacional", "Antes de elegir el producto", "Antes de hablar con cualquier comprador", "Solo después de que un comprador se queje"], answer: 0, why: "Las reglas de etiquetado cambian de un país a otro y con el tiempo, así que consulta primero para no desperdiciar etiquetas." },
          { objective: "O3", q: "¿Qué producto necesita cadena de frío?", options: ["Harina de yuca", "Mango seco", "Pasta de maní en un frasco sellado", "Yogur"], answer: 3, why: "El yogur es perecedero y debe estar frío desde que se hace hasta el comprador." },
          { objective: "O5", q: "¿Cuál es una señal de alerta de un intermediario abusivo?", options: ["Pagar el día acordado", "Cambiar el precio después de que entregas", "Pesar delante de ti", "Dar un recibo"], answer: 1, why: "Cambiar el precio después de la entrega te pasa la pérdida a ti y rompe la confianza." },
          { objective: "O5", q: "¿Qué va en una presentación corta para el cocinero de una escuela?", options: ["La historia de tu vida", "Los precios de tu vecino", "Producto, precio, tamaño del paquete, suministro y entrega", "Tu PIN bancario"], answer: 2, why: "Un comprador necesita saber qué ofreces, a qué precio, cuánto y cómo llega." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Valor agregado, empaque y mercadeo agrícola",
    questions: [
      { objective: "O1", q: "¿Qué significa agregar valor?", options: ["Cambiar o empacar el producto para que los compradores paguen más", "Sembrar un cultivo nuevo", "Vender en la puerta de la finca", "Pedir dinero prestado para la semilla"], answer: 0, why: "Secar, moler, procesar o empacar bien puede dar un precio más alto." },
      { objective: "O1", q: "¿Qué debe guiar primero tu elección de producto?", options: ["La máquina más barata que encuentres", "Lo que se ve bonito en una etiqueta", "Lo que de verdad compran los compradores cercanos", "Lo que está de moda en la televisión"], answer: 2, why: "Un producto con un comprador real tiene menos riesgo que uno hecho con la esperanza de vender." },
      { objective: "O1", q: "¿En qué cuatro cosas debes calificar cada opción de producto?", options: ["Color, sabor, olor, tamaño", "Demanda, materia prima, equipo y habilidad, reglas", "Precio, marca, logo, lema", "Lluvia, sol, viento, suelo"], answer: 1, why: "Estas cuatro muestran si puedes hacerlo, venderlo y hacerlo de forma legal." },
      { objective: "O1", q: "Tus árboles de mango dan fruta dos meses al año. ¿Qué significa esto para el mango seco?", options: ["No puedes hacer mango seco", "Debes venderlo todo fresco", "El precio no importa", "Planea la materia prima: compra a los vecinos o haz suficiente para vender durante el año"], answer: 3, why: "La materia prima de temporada afecta cuánto tiempo puedes abastecer a un comprador." },
      { objective: "O2", q: "¿Qué costo va en tu hoja de costos?", options: ["Solo la materia prima", "Tu propio tiempo de trabajo", "El transporte del comprador a su casa", "La matrícula escolar de tu vecino"], answer: 1, why: "Tu propio trabajo es un costo real; dejarlo fuera esconde si el producto deja ganancia." },
      { objective: "O2", q: "Una tanda de gari cuesta NGN 60,000 y puedes vender 120 bolsas. ¿Cuál es el costo por bolsa?", options: ["NGN 500", "NGN 200", "NGN 1,200", "NGN 7,200"], answer: 0, why: "60,000 dividido entre 120 bolsas da NGN 500 por bolsa." },
      { objective: "O2", q: "¿Cómo fijas tu precio?", options: ["Copias el precio más bajo del mercado", "Cobras lo que ofrezca el primer comprador", "Costo por paquete más un margen, y luego comparas con los precios de las tiendas", "Cobras lo mismo que por el producto fresco"], answer: 2, why: "El precio debe cubrir todos los costos con un margen y aun así tener sentido para los compradores." },
      { objective: "O2", q: "Tu precio está muy por encima de productos parecidos en las tiendas. ¿Cuál es un buen siguiente paso?", options: ["Rendirte de inmediato", "Subir aún más el precio", "Esconder el precio", "Buscar un método más barato, un paquete más pequeño o un comprador que pague por la calidad"], answer: 3, why: "Cambiar el costo, el tamaño del paquete o el comprador puede hacer que el producto compita." },
      { objective: "O3", q: "¿Qué forma parte de una lista de higiene?", options: ["Manos lavadas con jabón antes de trabajar", "Animales permitidos en la zona de trabajo", "Materia prima y producto terminado guardados juntos", "Cualquier agua que encuentres"], answer: 0, why: "Lavarse las manos con jabón mantiene los gérmenes fuera de los alimentos." },
      { objective: "O3", q: "¿Por qué nunca debes usar maní con moho para la pasta?", options: ["Pesa demasiado", "Puede llevar aflatoxina, que no se elimina al cocinar", "Ensucia el frasco", "A los compradores no les gusta el color"], answer: 1, why: "La aflatoxina es un veneno escondido que el tostado no destruye." },
      { objective: "O3", q: "El yogur se entrega en una hielera con bolsas de hielo temprano en el día. Esto es un ejemplo de:", options: ["Marca", "Consignación", "Cadena de frío", "Registro"], answer: 2, why: "Mantener un producto perecedero frío en cada paso es una cadena de frío." },
      { objective: "O3", q: "¿Cómo debe viajar la harina de yuca hasta un comprador?", options: ["En bolsas abiertas bajo la lluvia", "Junto al combustible y los químicos", "Congelada", "Seca, sellada, a la sombra y lejos de las plagas"], answer: 3, why: "Los productos secos se dañan con la humedad o la contaminación, así que deben ir secos y protegidos." },
      { objective: "O4", q: "¿Qué dato suele ir en una etiqueta de alimentos?", options: ["Los ingredientes y el peso neto", "El PIN del agricultor", "El nombre del comprador", "El precio del fertilizante"], answer: 0, why: "Los ingredientes y el peso neto dicen a los compradores qué hay dentro y cuánto." },
      { objective: "O4", q: "En Nigeria, ¿qué organismo registra los alimentos empacados hechos en el país?", options: ["KEBS", "FDA de Ghana", "CODINORM", "NAFDAC"], answer: 3, why: "La NAFDAC registra los alimentos hechos en Nigeria, también los de pequeños productores." },
      { objective: "O4", q: "¿Qué es una marca?", options: ["Un tipo de frasco", "El nombre, el logo y la promesa que los compradores reconocen", "Una licencia del gobierno", "Un número de lote"], answer: 1, why: "Una marca ayuda a los compradores a reconocer tu producto y a confiar en él." },
      { objective: "O4", q: "Las reglas de registro para tu producto no están claras. ¿Qué haces?", options: ["Vendes de todos modos y esperas", "Preguntas a un comerciante qué opina", "Contactas a tu organismo nacional de alimentos o de normas y consultas sus reglas vigentes", "Copias el número de registro de otra marca"], answer: 2, why: "Solo el organismo nacional puede decir qué necesita tu producto; las reglas y las tarifas cambian." },
      { objective: "O5", q: "¿Cuál es una buena razón para vender directo a una escuela?", options: ["Pedidos grandes y constantes con un calendario", "Nunca hay papeleo", "Las escuelas nunca pagan tarde", "No importa la calidad"], answer: 0, why: "Las escuelas suelen comprar con regularidad al por mayor, pero piden cotizaciones, facturas y una calidad constante." },
      { objective: "O5", q: "¿Qué les importa más a los hoteles por lo general?", options: ["Muestras gratis cada semana", "El color de tu ropa", "El tamaño de tu finca", "La misma calidad siempre"], answer: 3, why: "Los hoteles atienden a huéspedes todos los días y necesitan calidad y suministro constantes." },
      { objective: "O5", q: "Vendes mango seco por WhatsApp. ¿Qué ayuda a los compradores en línea?", options: ["No mostrar el precio", "Fotos claras, precios y entrega rápida", "Pedirles su PIN bancario", "Notas de voz largas"], answer: 1, why: "Los compradores en línea deciden por las fotos y los precios claros, y esperan una entrega rápida." },
      { objective: "O5", q: "Un comprador acepta por teléfono comprar 50 frascos por semana. ¿Cuál es el mejor siguiente paso?", options: ["Entregar y esperar que pague", "Enviarle tu PIN de dinero móvil", "Escribir la cantidad, el precio, el día de entrega y la fecha de pago en un mensaje y guardar una copia", "Esperar a que él ponga las condiciones más adelante"], answer: 2, why: "Las condiciones escritas, aunque sea en un mensaje, protegen a las dos partes si hay un problema." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, hechas antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del plan de producto y vuelve a intentarlo.",
    criteria: [
      { name: "Producto y comprador", objective: "O1", notYet: "Se nombra un producto sin comprador, o la elección no se comparó con otra opción.", meets: "Un producto y un comprador con nombre, elegidos después de comparar dos opciones en demanda, materia prima, equipo y reglas.", exceeds: "También muestra cómo conseguirá materia prima todo el año, por ejemplo de los vecinos o de un grupo." },
      { name: "Hoja de costos y precio", objective: "O2", notYet: "Solo se cuenta la materia prima, o no hay costo por paquete.", meets: "Todos los costos de una tanda, incluidas la mano de obra y las pérdidas, dan un costo por paquete y un precio con margen.", exceeds: "El precio se compara con los precios de las tiendas y el plan muestra qué cambiar si es muy alto." },
      { name: "Higiene y cadena de frío", objective: "O3", notYet: "No hay pasos escritos, o faltan riesgos clave como el lavado de manos, el moho o mantener el frío.", meets: "Una lista que cubre el agua, las manos, las superficies, la materia prima, el empaque, los números de lote y el transporte seguro.", exceeds: "Cada paso nombra el riesgo y la regla, y otra persona podría seguirla sin ayuda." },
      { name: "Etiqueta y registro", objective: "O4", notYet: "A la etiqueta le faltan ingredientes, peso neto, contacto o fechas, o no se nombra ningún organismo nacional.", meets: "La etiqueta muestra nombre, ingredientes, peso neto, productor y contacto, número de lote, fechas y conservación, y nombra el organismo que hay que consultar.", exceeds: "El participante contactó al organismo y anotó lo que exige y lo que cuesta." },
      { name: "Presentación y condiciones", objective: "O5", notYet: "No hay presentación, o no hay condiciones escritas sobre precio, entrega y pago.", meets: "Una presentación corta más condiciones escritas: cantidad, precio, día de entrega, fecha y forma de pago, paquetes dañados.", exceeds: "La presentación se hizo ante un comprador real y el participante anotó su respuesta." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que venden al menos una tanda de un producto con valor agregado en 90 días (encuesta de seguimiento)",
      "Participantes que reportan un precio por kilo de materia prima más alto que al venderla fresca (encuesta de seguimiento)",
      "Participantes que contactan o se registran con su organismo nacional de alimentos o de normas",
      "Participantes que reportan menos pérdidas en la cosecha porque procesaron el producto en lugar de venderlo barato"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono (mejor si es inteligente) y una calculadora",
      "Papel y lápiz para la hoja de costos, la lista de higiene y la etiqueta",
      "Opcional: una herramienta de diseño gratis como Canva para la etiqueta",
      "Una muestra de tu producto fresco y un producto parecido de una tienda local para comparar",
      "Unos 90 minutos en total, en sesiones cortas, más tiempo para visitar compradores"
    ],
    facilitatorNotes: [
      "Agrupe a los participantes por producto (por ejemplo mango seco, harina de yuca, pasta de maní, yogur) para que compartan lo que averiguan de los compradores y los costos.",
      "Haga la lección de costos con una tanda real que el grupo haya hecho, y deje que los participantes revisen las cuentas de los demás.",
      "Invite a un funcionario del organismo nacional de alimentos o de normas (KEBS, NAFDAC, FDA de Ghana, CODINORM o el organismo de su país) a explicar los pasos de registro vigentes; no dé tarifas de memoria.",
      "Haga un recorrido práctico de higiene en un lugar de procesamiento real, e insista en que los productos de leche necesitan un método probado y cadena de frío.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila Todavía no a la vez; practique la presentación con un participante en el papel de comprador."
    ]
  }
};
