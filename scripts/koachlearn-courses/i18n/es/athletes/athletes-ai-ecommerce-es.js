"use strict";

// Koach Learn course (Spanish translation of athletes-ai-ecommerce). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "athletes-ai-ecommerce-es",
  lang: "es",
  translationOf: "athletes-ai-ecommerce",
  category: "Athletes",
  name: "Plataformas de comercio electrónico con IA para atletas",
  skills: "Elegir qué vender, Comparar plataformas de tienda y sus tarifas, Escribir páginas de producto con IA, Poner precios según los costos reales, Revisar las reglas de NIL, logos y marcas registradas antes de vender",
  outcome: "planear y montar una oferta sencilla en línea, como mercancía, clases privadas o un campamento: elegir una plataforma, escribir una página de producto con IA, poner un precio según los costos reales y revisar las reglas de NIL, logos y marcas registradas antes de lanzarla.",
  about: [
    "Este curso es para atletas y entrenadores que quieren vender algo en línea: camisetas o mercancía con su propio diseño, clases privadas, planes de entrenamiento, o campamentos y clínicas deportivas.",
    "Vas a aprender qué vender, cómo elegir una plataforma de tienda, cómo escribir una página de producto con IA, cómo poner un precio que cubra tus costos y cómo mantenerte dentro de las reglas de NIL (nombre, imagen y semejanza), de logos escolares y de marcas registradas.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Esto es educación general, no asesoría legal ni fiscal; consulta con tu oficina de cumplimiento, con tu padre, madre o tutor si eres menor de 18 años, y con un profesional de impuestos."
  ],
  finalTask: "Escribe un plan de lanzamiento de una página para un producto o servicio: qué es y para quién, la plataforma que elegiste y sus tarifas actuales (de su página de precios), una página de producto escrita con IA y corregida por ti, un precio calculado con costos reales y una lista de reglas (NIL, logos escolares, marcas registradas, impuestos) con las personas a quienes consultaste.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas y entrenadores de secundaria, universidad y de los primeros años de carrera que quieren vender algo por internet: productos con su propio diseño, clases privadas, planes de entrenamiento, o campamentos y clínicas.",
    startingPoint: "Tienen un público en redes sociales y una habilidad por la que la gente les pregunta, y quizá han comprado cosas por internet. Pocos han comparado tarifas de tiendas, puesto precios según sus costos reales, escrito una página de producto o revisado las reglas de NIL, logotipos, marcas registradas e impuestos.",
    gap: "Los deportistas que lanzan sin revisar las reglas pueden perder su elegibilidad o tener problemas de marcas registradas, y poner precios sin contar las tarifas puede hacerles perder dinero. Un plan sencillo, con las reglas revisadas, una página honesta y un precio basado en los costos les permite ganar dinero con sus habilidades de forma segura.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de octavo grado",
      "Un teléfono o una computadora, un asistente de IA gratuito y una hoja de cálculo; las tarifas de las plataformas cambian y hay que leerlas en la página de precios de cada una",
      "Unos 60 minutos en total",
      "Las reglas de NIL, de logotipos de la escuela, de marcas registradas de la liga y de impuestos; consulta con la oficina de cumplimiento o la asociación deportiva del estado",
      "Los deportistas menores de 18 años necesitan que un adulto sea dueño o codueño de las cuentas de la tienda y de pagos; esto es educación, no consejo legal ni de impuestos"
    ],
    prerequisites: "Ninguno. El curso \"Estrategias de marketing digital con IA para deportistas\" ayuda a promocionar el lanzamiento."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Según lo que tu público te pregunta", action: "elegir un producto físico, un servicio o un producto digital para vender primero", standard: "con el tiempo y el dinero que necesita anotados" },
    { id: "O2", condition: "Usando las páginas oficiales de precios de dos plataformas", action: "comparar sus tarifas mensuales, por venta y de pago, y elegir una", standard: "con las tarifas reales y actuales anotadas y las reglas de edad revisadas" },
    { id: "O3", condition: "Antes de vender cualquier cosa con tu nombre o un logotipo", action: "revisar las reglas de NIL, logotipos, marcas registradas e impuestos que se aplican a ti", standard: "sin usar ningún logotipo de escuela, equipo o liga sin permiso por escrito, con una búsqueda en la USPTO hecha y nombrando a la persona con la que lo revisaste" },
    { id: "O4", condition: "Usando un borrador de la IA", action: "escribir una página de producto honesta que responda qué es, para quién, qué recibes, el precio, cuándo y cómo", standard: "de menos de 200 palabras, con cada detalle verdadero, fotos reales que son tuyas y reglas de reembolso claras" },
    { id: "O5", condition: "Con todos los costos de una venta", action: "calcular un precio que cubra tus costos y deje ganancia", standard: "con los cálculos revisados en una hoja de cálculo y con una calculadora" },
    { id: "O6", condition: "Cuando tu oferta esté lista", action: "planear un lanzamiento de prueba y una rutina de atención al cliente", standard: "con los problemas resueltos antes del anuncio grande y los mensajes respondidos en un día" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Qué vender y dónde",
      lessons: [
        {
          objectives: ["O1"],
          title: "Elegir qué vender",
          minutes: 5,
          goal: "Elegir un producto o servicio que vaya con tus habilidades y tu público.",
          text: [
            "Los atletas suelen vender una de tres cosas. Productos físicos: camisetas, gorras, calcomanías o pósters con tu propio diseño o logo. Servicios: clases privadas, entrenamiento en grupos pequeños, campamentos y clínicas. Productos digitales: planes de entrenamiento, cursos en video o guías de ejercicios.",
            "Empieza con algo sobre lo que tu público ya te pregunta. Si los padres siempre te preguntan por clases, vende clases. Si los fans comentan tu logo, prueba con mercancía.",
            "Piensa en el tiempo y el riesgo. Los servicios te pagan por tu tiempo, pero dependen de tu horario. La mercancía necesita dinero por adelantado, a menos que uses impresión bajo demanda. Los productos digitales toman tiempo para hacerlos, pero se pueden vender muchas veces."
          ],
          steps: ["Haz una lista de lo que tu público te pregunta.", "Separa las ideas en físicas, servicios o digitales.", "Anota el tiempo y el dinero que necesita cada una.", "Elige una para empezar."],
          words: [["Comercio electrónico", "comprar y vender en línea."], ["Impresión bajo demanda", "un servicio que imprime y envía un artículo solo después de que alguien lo pide."], ["Producto digital", "algo que se vende como archivo o acceso en línea, como un plan de entrenamiento."]],
          slides: [
            { title: "Tres tipos de oferta", bullets: ["Física: mercancía con tu diseño", "Servicios: clases, campamentos, clínicas", "Digital: planes de entrenamiento, cursos en video"] },
            { title: "Empieza por la demanda", bullets: ["¿Qué te pregunta tu público?", "Elige una sola cosa"] },
            { title: "Tiempo y riesgo", bullets: ["Servicios: tu tiempo", "Mercancía: dinero por adelantado o impresión bajo demanda", "Digital: se hace una vez, se vende muchas veces"] }
          ],
          tryIt: "Haz una lista de tres cosas sobre las que la gente te ha preguntado. Pide a un asistente de IA los pros y los contras de vender cada una y luego elige una.",
          youCanNow: "elegir un producto o servicio que vaya con tus habilidades y tu público.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál de estos es un producto físico?", options: ["Un curso en video", "Una clase privada", "Un campamento", "Una camiseta con tu propio diseño"], answer: 3, why: "Los productos físicos incluyen camisetas, gorras, calcomanías y pósteres." },
            { objective: "O1", q: "Los padres te preguntan seguido por clases para sus hijos. ¿Qué pruebas primero?", options: ["Vender clases privadas", "Diseñar un póster", "Empezar un curso en video", "Vender gorras"], answer: 0, why: "Empieza con algo por lo que tu público ya pregunta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Comparar plataformas de tienda",
          minutes: 5,
          goal: "Comparar dos plataformas y elegir una según sus tarifas y funciones actuales.",
          text: [
            "No necesitas construir una tienda desde cero. Los creadores de tiendas como Shopify, Square Online y Wix te dejan publicar productos y cobrar. Los servicios de impresión bajo demanda como Printful o Printify se conectan con las tiendas y se encargan de imprimir y enviar. Para clases y campamentos, puede bastar con una herramienta de reservas e inscripciones o un enlace de pago sencillo.",
            "Todas las plataformas cobran de alguna forma: planes mensuales, un porcentaje de cada venta, tarifas de procesamiento de pagos, o las tres. Esto cambia seguido, así que lee la página de precios actual de cada plataforma y anota los números reales.",
            "Si eres menor de 18 años, muchas plataformas y servicios de pago exigen que un adulto sea el dueño o codueño de la cuenta. Involucra a tu padre, madre o tutor."
          ],
          steps: ["Elige dos plataformas que vayan con tu oferta.", "Abre la página oficial de precios de cada una.", "Anota el costo mensual, la tarifa por venta y la tarifa de pago.", "Revisa las reglas de edad.", "Elige la de menor costo total para las ventas que esperas."],
          words: [["Plataforma", "un servicio en línea que usas para manejar tu tienda."], ["Tarifa de procesamiento", "lo que cobra un servicio de pagos por recibir un pago con tarjeta."]],
          slides: [
            { title: "Opciones de tienda", bullets: ["Creadores de tiendas: Shopify, Square Online, Wix", "Impresión bajo demanda: Printful, Printify", "Clases y campamentos: herramientas de reservas o un enlace de pago"] },
            { title: "Tarifas para comparar", bullets: ["Plan mensual", "Tarifa por venta", "Tarifa de procesamiento de pagos"] },
            { title: "Antes de registrarte", bullets: ["Lee la página de precios actual", "Menor de 18: quizá un adulto deba ser dueño de la cuenta"] }
          ],
          tryIt: "Elige dos plataformas. Con sus páginas oficiales de precios, anota en una tabla pequeña el costo mensual y las tarifas de cada una, y elige la de menor total para 20 ventas al mes.",
          youCanNow: "comparar plataformas de tienda por sus tarifas reales y actuales y elegir una.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hacen Printful y Printify?", options: ["Reservan inscripciones a campamentos", "Se encargan de imprimir y enviar los pedidos", "Presentan tus impuestos", "Diseñan tu logotipo gratis"], answer: 1, why: "Los servicios de impresión bajo pedido se conectan a las tiendas y se encargan de imprimir y enviar." },
            { objective: "O2", q: "Un amigo dice que una plataforma no cuesta nada. ¿Qué haces?", options: ["Creerle y registrarte", "Preguntarle el precio a una IA", "Leer la página de precios actual de la plataforma y anotar las tarifas", "Adivinar las tarifas"], answer: 2, why: "Todas las plataformas cobran de alguna forma, y las tarifas cambian, así que lee la página de precios actual." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Primero las reglas: NIL, logos y marcas registradas",
          minutes: 6,
          goal: "Revisar las reglas que aplican antes de vender cualquier cosa con tu nombre o un logo.",
          text: [
            "Vender cosas con tu propio nombre, imagen o semejanza puede contar como actividad de NIL. Los atletas universitarios quizá deban reportarlo; las reglas de la NCAA (la asociación del deporte universitario de EE. UU.) dicen que el pago de NIL debe tener un propósito comercial real y no estar ligado al rendimiento. Las reglas de la secundaria cambian según el estado. Pregunta primero a tu oficina de cumplimiento o a la asociación atlética de tu estado.",
            "No uses el logo, el nombre, la mascota ni los colores de tu escuela o tu equipo de forma que parezca oficial, a menos que tengas permiso por escrito. Las escuelas y las ligas normalmente son dueñas de ellos y los protegen. Los logos de ligas profesionales y de otras marcas también están prohibidos.",
            "Haz tu propio logo y busca en los registros de marcas de la USPTO (la oficina de patentes y marcas de EE. UU.) antes de elegir un nombre de marca, para no copiar el de alguien más. Los ingresos por ventas normalmente pagan impuestos; el IRS (la agencia de impuestos de EE. UU.) dice que debes declarar si tus ganancias netas como trabajador por cuenta propia son de $400 o más, así que guarda registros y habla con un profesional de impuestos."
          ],
          steps: ["Pregunta a tu oficina de cumplimiento o a la asociación de tu estado sobre las reglas de NIL para vender.", "No uses logos de la escuela, el equipo o la liga sin permiso por escrito.", "Crea tu propio logo.", "Busca tu nombre de marca en los registros de marcas de la USPTO.", "Arma un registro sencillo de ventas y costos."],
          words: [["Marca registrada", "un nombre, logo o lema que identifica a un negocio y está protegido por la ley."], ["Licencia", "permiso oficial para usar el logo o el nombre de otro, muchas veces a cambio de un pago."]],
          slides: [
            { title: "Reglas de NIL", bullets: ["Vender con tu nombre puede ser actividad de NIL", "Universidad: quizá debas reportarlo", "Secundaria: las reglas cambian según el estado"] },
            { title: "Logos", bullets: ["Logos de escuela, equipo y liga: permiso por escrito", "Logos de otras marcas: prohibidos", "Haz el tuyo"] },
            { title: "Nombre e impuestos", bullets: ["Busca en la USPTO antes de elegir un nombre de marca", "Guarda registros de ventas y costos", "Habla con un profesional de impuestos"] }
          ],
          sources: [
            { name: "NCAA: Nombre, imagen y semejanza (en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Lo básico de las marcas registradas (en inglés)", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: centro de impuestos para trabajadores por cuenta propia (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Escribe una lista de reglas para tu producto: NIL (a quién le preguntaste), logos (de quién son y si tienes permiso), búsqueda de marca (hecha o no) y registros (dónde los vas a guardar).",
          youCanNow: "revisar lo básico de NIL, logos, marcas registradas e impuestos antes de vender.",
          quickCheck: [
            { objective: "O3", q: "¿Quién suele ser el dueño del logotipo, la mascota y el nombre de una escuela?", options: ["La escuela o la liga", "Los deportistas", "Cualquiera que lo use", "El periódico local"], answer: 0, why: "Las escuelas y las ligas suelen ser las dueñas y los protegen." },
            { objective: "O3", q: "Elegiste un nombre de marca para tus productos. ¿Qué haces antes de imprimir?", options: ["Imprimir 500 camisetas", "Pedirles a los aficionados que voten", "Copiar un logotipo famoso", "Buscar el nombre en los registros de marcas de la USPTO"], answer: 3, why: "Buscar en los registros de la USPTO te ayuda a no copiar la marca registrada de otra persona." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Qué vender y dónde",
        questions: [
          { objective: "O1", q: "¿Cuál es un servicio que un atleta podría vender?", options: ["Una camiseta", "Una calcomanía", "Clases privadas", "Un póster"], answer: 2, why: "Las clases son un servicio que te paga por tu tiempo." },
          { objective: "O2", q: "¿Qué hace la impresión bajo demanda?", options: ["Imprime y envía artículos solo después de que alguien los pide", "Imprime dinero", "Te obliga a comprar 500 camisetas primero", "Escribe tu página de producto"], answer: 0, why: "Reduce el dinero que necesitas por adelantado." },
          { objective: "O2", q: "¿Dónde encuentras las tarifas reales de una plataforma?", options: ["Adivinando", "En un video viejo", "En la memoria de una IA", "En su página oficial de precios actual"], answer: 3, why: "Las tarifas cambian; la página oficial está al día." },
          { objective: "O3", q: "Quieres vender camisetas con el logo de tu escuela. ¿Qué necesitas primero?", options: ["Nada", "Permiso por escrito de la escuela", "Un tipo de letra más bonito", "Más seguidores"], answer: 1, why: "Las escuelas normalmente son dueñas de sus logos y los protegen." },
          { objective: "O3", q: "¿Por qué buscar en los registros de la USPTO antes de ponerle nombre a tu marca?", options: ["Para conseguir camisetas gratis", "Para no copiar la marca registrada de alguien más", "Para encontrar clientes", "No sirve de nada"], answer: 1, why: "Te ayuda a evitar problemas de marcas registradas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crear y lanzar tu oferta",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escribir una página de producto con IA",
          minutes: 5,
          goal: "Escribir una página de producto clara y honesta con ayuda de la IA.",
          text: [
            "Una página de producto responde las preguntas del comprador: ¿Qué es? ¿Para quién es? ¿Qué recibo? ¿Cuánto cuesta, cuándo y cómo? Para un campamento: fechas, edades, lugar, qué aprenden los niños, seguridad, qué llevar y la política de reembolso.",
            "Pide a un asistente de IA: \"Escribe una página de producto para una clase privada de tiro de 1 hora para jugadores de 10 a 16 años. Incluye lo que van a aprender, qué llevar, el tipo de lugar, un espacio para el precio y una política de reembolso corta. Amigable, clara, de menos de 200 palabras.\" Luego corrige cada detalle para que sea cierto.",
            "Usa fotos reales que sean tuyas. No prometas resultados como \"titular garantizado\" ni hagas afirmaciones de salud. Unas reglas claras de reembolso y cancelación evitan discusiones después."
          ],
          steps: ["Haz una lista de lo que los compradores necesitan saber.", "Pide a la IA un borrador de página de menos de 200 palabras.", "Revisa cada detalle y corrige todo lo que no sea cierto.", "Agrega fotos reales que sean tuyas.", "Agrega reglas claras de reembolso y cancelación."],
          words: [["Página de producto", "la página que describe lo que vendes y deja que la gente lo compre."], ["Política de reembolso", "tus reglas para devolver el dinero."]],
          slides: [
            { title: "Responde las preguntas del comprador", bullets: ["¿Qué es? ¿Para quién es?", "¿Qué recibo?", "¿Cuánto cuesta, cuándo y cómo?"] },
            { title: "La IA hace el borrador, tú revisas", bullets: ["Menos de 200 palabras", "Cada detalle cierto", "Tus propias fotos"] },
            { title: "Evita", bullets: ["Resultados garantizados", "Afirmaciones de salud", "Que falten las reglas de reembolso"] }
          ],
          tryIt: "Usa la IA para hacer el borrador de tu página de producto, luego corrígela para que cada detalle sea cierto y agrega una política de reembolso.",
          youCanNow: "escribir una página de producto clara y honesta con ayuda de la IA.",
          quickCheck: [
            { objective: "O4", q: "¿Qué detalle va en la página de producto de un campamento?", options: ["Tu dirección", "Qué llevar", "Tu promedio de calificaciones", "Los precios de otros entrenadores"], answer: 1, why: "Los compradores necesitan fechas, edades, lugar, qué aprenden los niños, qué llevar y los reembolsos." },
            { objective: "O4", q: "El borrador de la IA dice que tus clases \"garantizan una beca\". ¿Qué haces?", options: ["Dejarlo para vender más", "Cambiarlo a \"casi garantizan\"", "Quitarlo; no prometas resultados", "Agregar más promesas"], answer: 2, why: "No prometas resultados ni digas cosas que no puedes cumplir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Poner precios según los costos reales",
          minutes: 5,
          goal: "Poner un precio que cubra tus costos y deje ganancia.",
          text: [
            "El precio empieza por el costo. Para mercancía: el costo del artículo, la impresión, el envío, las tarifas de la plataforma y las tarifas de pago. Para clases: el alquiler de la instalación, el equipo, el transporte, tu tiempo y las tarifas.",
            "Suma el costo de una venta y luego mira cuánto cuestan productos o clases parecidos en tu zona. Elige un precio por encima de tu costo que tu público pueda pagar. La diferencia es tu ganancia, antes de impuestos.",
            "Usa una hoja de cálculo: columnas para cada costo, un total, tu precio y la ganancia. Un asistente de IA puede armar las fórmulas, pero revisa las cuentas con una calculadora."
          ],
          steps: ["Haz una lista de todos los costos de una venta.", "Súmalos.", "Revisa cuánto cuestan ofertas parecidas cerca de ti.", "Pon un precio por encima del costo que vaya con tu público.", "Revisa las cuentas en una hoja de cálculo."],
          words: [["Costo", "el dinero que gastas para hacer o entregar una venta."], ["Ganancia", "el precio menos todos los costos, antes de impuestos."]],
          slides: [
            { title: "Haz la lista de todos los costos", bullets: ["Artículo, impresión, envío", "Tarifas de la plataforma y de pago", "Instalación, equipo, transporte, tiempo"] },
            { title: "Pon un precio", bullets: ["Por encima del costo total", "Compara ofertas parecidas cerca de ti", "Lo que tu público puede pagar"] },
            { title: "Hoja de cálculo", bullets: ["Costos, total, precio, ganancia", "La IA arma las fórmulas; tú revisas"] }
          ],
          tryIt: "Arma una hoja de precios para una venta de tu producto. Pide a la IA que escriba las fórmulas del total y la ganancia, y luego revísalas con una calculadora.",
          youCanNow: "poner un precio según los costos reales y saber tu ganancia por venta.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál de estos es un costo de una clase privada?", options: ["El alquiler de la instalación", "Tu número de seguidores", "El viaje del comprador", "Tu número de camiseta"], answer: 0, why: "Los costos de una clase incluyen la instalación, el equipo, el viaje, tu tiempo y las tarifas." },
            { objective: "O5", q: "Hacer, enviar y vender tu camiseta te cuesta 14. Camisetas parecidas en tu zona se venden de 12 a 25. ¿Qué precio tiene sentido?", options: ["10, para ser la más barata", "14, lo mismo que el costo", "12, el precio más bajo de la zona", "Un precio de más de 14 que tu público pueda pagar, como 20"], answer: 3, why: "Pon un precio por encima de tu costo total para que haya ganancia, dentro de lo que tu público puede pagar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lanzar y mantener contentos a tus clientes",
          minutes: 5,
          goal: "Planear un lanzamiento pequeño y una rutina sencilla de atención al cliente.",
          text: [
            "Empieza en pequeño: un lanzamiento de prueba para tu familia, las familias de tus compañeros y tus seguidores más cercanos. Arregla los problemas antes de un gran anuncio. Luego anúncialo con una publicación, un video corto y un enlace en tu biografía.",
            "Si publicas sobre tus propios productos, es tu negocio; pero si una marca u otra persona te da algo para que la promociones, avísalo claramente. Atletas universitarios: reporten los acuerdos a tiempo si es obligatorio.",
            "La atención al cliente hace que te vuelvan a comprar: contesta los mensajes en menos de un día, envía o confirma las reservas a tiempo, sigue tu política de reembolso y da las gracias. Pide a la IA borradores de respuestas amables para las preguntas comunes."
          ],
          steps: ["Haz un lanzamiento de prueba con un grupo pequeño.", "Arregla cualquier problema.", "Anúncialo con una publicación, un video y un enlace en tu biografía.", "Contesta los mensajes en menos de un día.", "Usa la IA para hacer plantillas de respuesta."],
          words: [["Lanzamiento de prueba", "un primer lanzamiento pequeño y discreto para detectar problemas."], ["Atención al cliente", "cómo ayudas a los compradores antes y después de que pagan."]],
          slides: [
            { title: "Empieza en pequeño", bullets: ["Lanzamiento de prueba con gente que conoces", "Arregla los problemas primero"] },
            { title: "Luego anúncialo", bullets: ["Publicación, video corto, enlace en la biografía", "Avisa de cualquier vínculo con marcas"] },
            { title: "Mantén contentos a tus clientes", bullets: ["Contesta en menos de un día", "A tiempo, sigue tu política de reembolso", "Plantillas de respuesta con IA"] }
          ],
          tryIt: "Tarea final: escribe tu plan de lanzamiento de una página: oferta y público, plataforma y tarifas actuales, página de producto hecha con IA, precio según costos reales y lista de reglas con las personas a quienes consultaste.",
          youCanNow: "lanzar una oferta pequeña en línea y dar una buena atención al cliente.",
          quickCheck: [
            { objective: "O6", q: "¿Para quién es un lanzamiento de prueba?", options: ["Para todo internet", "Para tu familia, las familias de tus compañeros y tus seguidores más cercanos", "Solo para marcas grandes", "Para tu competencia"], answer: 1, why: "Empieza en pequeño y resuelve los problemas antes del anuncio grande." },
            { objective: "O6", q: "Un cliente pide un reembolso que cumple con tu política de reembolsos. ¿Qué haces?", options: ["No hacer caso al mensaje", "Discutir en los comentarios", "Seguir tu política, devolver el dinero con amabilidad y dar las gracias", "Bloquearlo"], answer: 2, why: "Seguir tu política de reembolsos y responder con amabilidad hace que los clientes vuelvan a comprar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crear y lanzar tu oferta",
        questions: [
          { objective: "O4", q: "La página de producto de un campamento debe incluir:", options: ["Solo un logo", "La dirección de tu casa", "Becas garantizadas", "Fechas, edades, lugar, qué aprenden los niños y la política de reembolso"], answer: 3, why: "Responde lo que los compradores necesitan saber." },
          { objective: "O4", q: "La IA escribe \"garantizado que entras al equipo titular\" en tu página. Tú:", options: ["Lo quitas", "Lo dejas", "Lo haces más grande", "Agregas más promesas"], answer: 0, why: "No prometas resultados que no puedes garantizar." },
          { objective: "O5", q: "La ganancia es:", options: ["Solo el precio", "El número de seguidores", "El precio menos todos los costos", "El total de ventas sin contar costos"], answer: 2, why: "La ganancia es lo que queda después de los costos." },
          { objective: "O6", q: "¿Para qué hacer un lanzamiento de prueba?", options: ["Para esconder tu tienda", "Para subir los precios", "Lo exige la ley", "Para detectar problemas antes de un gran anuncio"], answer: 3, why: "Los lanzamientos pequeños muestran los problemas sin riesgo." },
          { objective: "O6", q: "¿Qué tan rápido debes contestar los mensajes de los clientes?", options: ["En menos de un mes", "En menos de un día", "Nunca", "Solo si se quejan dos veces"], answer: 1, why: "Las respuestas rápidas generan confianza y compras repetidas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Plataformas de comercio electrónico con IA para atletas",
    questions: [
      { objective: "O1", q: "Comercio electrónico significa:", options: ["Deportes eléctricos", "Solo correo electrónico", "Comprar y vender en línea", "Un autobús del equipo"], answer: 2, why: "Es vender en línea." },
      { objective: "O1", q: "¿Cuál es un producto digital?", options: ["Un plan de entrenamiento", "Una gorra", "Un campamento", "Un póster"], answer: 0, why: "Se vende como archivo o acceso en línea." },
      { objective: "O1", q: "Una buena forma de elegir tu primer producto es:", options: ["Lo que tu público ya te pregunta", "Lo que esté de moda", "La idea más cara", "Algo que no conoces"], answer: 0, why: "La demanda facilita las ventas." },
      { objective: "O1", q: "Los servicios te pagan por tu:", options: ["Envío", "Impresión", "Tiempo", "Calcomanías"], answer: 2, why: "Las clases y los campamentos necesitan tu tiempo." },
      { objective: "O2", q: "¿Cuál es un creador de tiendas?", options: ["Un cronómetro", "Shopify", "Un marcador", "Una camiseta de equipo"], answer: 1, why: "Shopify es un creador de tiendas." },
      { objective: "O2", q: "¿Qué tarifa podría cobrar una plataforma?", options: ["Una tarifa por camiseta de equipo", "Una tarifa de árbitro", "Una tarifa por tiempo fuera", "Una tarifa de procesamiento de pagos"], answer: 3, why: "Las tarifas de pago son comunes." },
      { objective: "O2", q: "Si eres menor de 18 años, una cuenta de tienda puede necesitar:", options: ["Nada", "Una edad falsa", "Que un adulto sea dueño o codueño", "La identificación de un compañero"], answer: 2, why: "Muchas plataformas exigen a un adulto." },
      { objective: "O3", q: "Vender mercancía con tu nombre puede contar como:", options: ["Pago por jugar", "Una beca", "Nada", "Actividad de NIL"], answer: 3, why: "Usa tu nombre, tu imagen o tu semejanza." },
      { objective: "O3", q: "¿A quién debe preguntar un atleta universitario sobre las reglas de NIL para vender?", options: ["A la oficina de cumplimiento", "A un fan cualquiera", "A un rival", "A nadie"], answer: 0, why: "Conocen las reglas actuales de la escuela y de la NCAA." },
      { objective: "O3", q: "¿Puedes poner un logo de la NFL en tu mercancía?", options: ["Sí, siempre", "No, no sin una licencia", "Solo en rojo", "Solo en línea"], answer: 1, why: "Los logos de las ligas están protegidos." },
      { objective: "O3", q: "Una marca registrada es:", options: ["Un tipo de zapato", "Una bebida deportiva", "Un nombre, logo o lema protegido", "Un plan de entrenamiento"], answer: 2, why: "Las marcas registradas identifican a los negocios." },
      { objective: "O3", q: "El IRS dice que debes presentar una declaración si tus ganancias netas por cuenta propia son:", options: ["$400 o más", "$1 millón o más", "Nunca", "Solo si tienes más de 30 años"], answer: 0, why: "Ese es el límite del IRS en su página para trabajadores por cuenta propia." },
      { objective: "O4", q: "Una página de producto debe responder:", options: ["Solo el precio", "Tu promedio escolar", "Tu contraseña", "Qué es, para quién, qué recibes, precio, cuándo y cómo"], answer: 3, why: "Los compradores necesitan esas respuestas." },
      { objective: "O4", q: "Las fotos de producto deben ser:", options: ["Copiadas de otras tiendas", "Fotos reales que sean tuyas", "Falsas", "De otros atletas"], answer: 1, why: "Usa fotos sobre las que tienes derechos." },
      { objective: "O4", q: "¿Por qué tener una política de reembolso?", options: ["Para quedarte siempre con todo el dinero", "Para evitar discusiones después", "Es decoración", "No hace falta"], answer: 1, why: "Las reglas claras te protegen a ti y a los compradores." },
      { objective: "O5", q: "El precio debe estar:", options: ["Por debajo de tu costo", "Al azar", "Siempre gratis", "Por encima de tu costo total"], answer: 3, why: "Si no, pierdes dinero en cada venta." },
      { objective: "O5", q: "La IA arma tu fórmula de ganancia. Debes:", options: ["Revisar las cuentas con una calculadora", "Confiar totalmente", "Borrarla", "Duplicar tu precio"], answer: 0, why: "La IA puede equivocarse en las cuentas." },
      { objective: "O6", q: "Un lanzamiento de prueba es para:", options: ["Todos a la vez", "Solo los rivales", "Familia, seguidores cercanos y gente que conoces", "Nadie"], answer: 2, why: "Un grupo pequeño te ayuda a arreglar problemas." },
      { objective: "O6", q: "¿Dónde debes poner el enlace de tu tienda?", options: ["Escondido en ningún lado", "En la página de un rival", "En mensajes de spam", "En tu biografía"], answer: 3, why: "Los enlaces en la biografía son fáciles de encontrar." },
      { objective: "O6", q: "La IA puede ayudar en la atención al cliente:", options: ["Quedándose con el dinero de los clientes", "Haciendo borradores de respuestas amables", "Ignorando los mensajes", "Cambiando las reglas de reembolso a escondidas"], answer: 1, why: "Las plantillas hacen que las respuestas sean rápidas y amables." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      2,
      5,
      7,
      9,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Oferta y público",
        objective: "O1",
        notYet: "El producto o su público no están claros.",
        meets: "Un producto o servicio, para quién es, y el tiempo y el dinero que necesita.",
        exceeds: "Muestra pruebas de que el público lo pidió, como comentarios o pedidos de padres."
      },
      {
        name: "Plataforma y tarifas",
        objective: "O2",
        notYet: "No hay tarifas anotadas, o las tarifas son adivinadas en lugar de sacadas de la página de precios.",
        meets: "La plataforma elegida con sus tarifas actuales mensuales, por venta y de pago, sacadas de su página de precios, y las reglas de edad revisadas.",
        exceeds: "Compara dos plataformas y muestra el costo total con el número de ventas esperado."
      },
      {
        name: "Página de producto",
        objective: "O4",
        notYet: "Faltan detalles clave, hay afirmaciones falsas o no hay reglas de reembolso.",
        meets: "Menos de 200 palabras, responde qué es, para quién, qué recibes, el precio, cuándo y cómo, con fotos reales y reglas de reembolso claras.",
        exceeds: "Incluye detalles de seguridad para las ofertas para jóvenes y respuestas a preguntas comunes."
      },
      {
        name: "Precio según los costos",
        objective: "O5",
        notYet: "El precio está por debajo del costo o faltan costos.",
        meets: "Todos los costos de una venta anotados y sumados, y un precio por encima del costo, con los cálculos revisados.",
        exceeds: "Muestra la ganancia por venta y cuántas ventas cubren los costos iniciales."
      },
      {
        name: "Lista de reglas",
        objective: "O3",
        notYet: "Faltan puntos de NIL, logotipos, marcas registradas o impuestos, o no se nombra a nadie.",
        meets: "NIL, logotipos de la escuela, marcas registradas e impuestos revisados uno por uno, con la persona con la que el deportista lo revisó.",
        exceeds: "Incluye el permiso por escrito para el logotipo o el resultado de una búsqueda en la USPTO, y un registro de ventas y costos ya preparado."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el plan de lanzamiento y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que lanzan su producto o servicio en un plazo de 30 días (encuesta de seguimiento)",
      "Participantes que dicen haber hecho sus primeras ventas o reservas y tener ganancia después de los costos",
      "Participantes que dicen haber revisado las reglas de NIL, logotipos e impuestos con su escuela, la asociación deportiva del estado o un profesional antes de vender"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Una hoja de cálculo gratuita (Google Sheets) y una calculadora",
      "Las páginas oficiales de precios de dos plataformas",
      "La política de NIL de tu escuela o las reglas de la asociación deportiva de tu estado",
      "Unos 60 minutos"
    ],
    facilitatorNotes: [
      "Invita a la oficina de cumplimiento o al director deportivo a explicar las reglas de NIL y de logotipos antes de que alguien diseñe productos.",
      "Con deportistas menores de 18 años, incluye a su madre, padre o tutor al elegir las cuentas de la tienda y de pagos y al ser dueños de ellas.",
      "Pide a los participantes que lean las tarifas en las páginas de precios en vivo durante la sesión; no te bases en números de memoria ni de la IA.",
      "Para campamentos y clases con menores de edad, hablen de seguridad, supervisión y permiso de la instalación antes del lanzamiento.",
      "Envía a los participantes con un profesional de impuestos para las preguntas sobre ingresos; no des consejos de impuestos individuales."
    ]
  }
};
