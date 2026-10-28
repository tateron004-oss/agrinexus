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
  chapters: [
    {
      name: "Capítulo 1: Qué vender y dónde",
      lessons: [
        {
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
          youCanNow: "elegir un producto o servicio que vaya con tus habilidades y tu público."
        },
        {
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
          youCanNow: "comparar plataformas de tienda por sus tarifas reales y actuales y elegir una."
        },
        {
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
          youCanNow: "revisar lo básico de NIL, logos, marcas registradas e impuestos antes de vender."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Qué vender y dónde",
        questions: [
          { q: "¿Cuál es un servicio que un atleta podría vender?", options: ["Una camiseta", "Una calcomanía", "Clases privadas", "Un póster"], answer: 2, why: "Las clases son un servicio que te paga por tu tiempo." },
          { q: "¿Qué hace la impresión bajo demanda?", options: ["Imprime y envía artículos solo después de que alguien los pide", "Imprime dinero", "Te obliga a comprar 500 camisetas primero", "Escribe tu página de producto"], answer: 0, why: "Reduce el dinero que necesitas por adelantado." },
          { q: "¿Dónde encuentras las tarifas reales de una plataforma?", options: ["Adivinando", "En un video viejo", "En la memoria de una IA", "En su página oficial de precios actual"], answer: 3, why: "Las tarifas cambian; la página oficial está al día." },
          { q: "Quieres vender camisetas con el logo de tu escuela. ¿Qué necesitas primero?", options: ["Nada", "Permiso por escrito de la escuela", "Un tipo de letra más bonito", "Más seguidores"], answer: 1, why: "Las escuelas normalmente son dueñas de sus logos y los protegen." },
          { q: "¿Por qué buscar en los registros de la USPTO antes de ponerle nombre a tu marca?", options: ["Para conseguir camisetas gratis", "Para no copiar la marca registrada de alguien más", "Para encontrar clientes", "No sirve de nada"], answer: 1, why: "Te ayuda a evitar problemas de marcas registradas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crear y lanzar tu oferta",
      lessons: [
        {
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
          youCanNow: "escribir una página de producto clara y honesta con ayuda de la IA."
        },
        {
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
          youCanNow: "poner un precio según los costos reales y saber tu ganancia por venta."
        },
        {
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
          youCanNow: "lanzar una oferta pequeña en línea y dar una buena atención al cliente."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crear y lanzar tu oferta",
        questions: [
          { q: "La página de producto de un campamento debe incluir:", options: ["Solo un logo", "La dirección de tu casa", "Becas garantizadas", "Fechas, edades, lugar, qué aprenden los niños y la política de reembolso"], answer: 3, why: "Responde lo que los compradores necesitan saber." },
          { q: "La IA escribe \"garantizado que entras al equipo titular\" en tu página. Tú:", options: ["Lo quitas", "Lo dejas", "Lo haces más grande", "Agregas más promesas"], answer: 0, why: "No prometas resultados que no puedes garantizar." },
          { q: "La ganancia es:", options: ["Solo el precio", "El número de seguidores", "El precio menos todos los costos", "El total de ventas sin contar costos"], answer: 2, why: "La ganancia es lo que queda después de los costos." },
          { q: "¿Para qué hacer un lanzamiento de prueba?", options: ["Para esconder tu tienda", "Para subir los precios", "Lo exige la ley", "Para detectar problemas antes de un gran anuncio"], answer: 3, why: "Los lanzamientos pequeños muestran los problemas sin riesgo." },
          { q: "¿Qué tan rápido debes contestar los mensajes de los clientes?", options: ["En menos de un mes", "En menos de un día", "Nunca", "Solo si se quejan dos veces"], answer: 1, why: "Las respuestas rápidas generan confianza y compras repetidas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Plataformas de comercio electrónico con IA para atletas",
    questions: [
      { q: "Comercio electrónico significa:", options: ["Deportes eléctricos", "Solo correo electrónico", "Comprar y vender en línea", "Un autobús del equipo"], answer: 2, why: "Es vender en línea." },
      { q: "¿Cuál es un producto digital?", options: ["Un plan de entrenamiento", "Una gorra", "Un campamento", "Un póster"], answer: 0, why: "Se vende como archivo o acceso en línea." },
      { q: "Una buena forma de elegir tu primer producto es:", options: ["Lo que tu público ya te pregunta", "Lo que esté de moda", "La idea más cara", "Algo que no conoces"], answer: 0, why: "La demanda facilita las ventas." },
      { q: "Los servicios te pagan por tu:", options: ["Envío", "Impresión", "Tiempo", "Calcomanías"], answer: 2, why: "Las clases y los campamentos necesitan tu tiempo." },
      { q: "¿Cuál es un creador de tiendas?", options: ["Un cronómetro", "Shopify", "Un marcador", "Una camiseta de equipo"], answer: 1, why: "Shopify es un creador de tiendas." },
      { q: "¿Qué tarifa podría cobrar una plataforma?", options: ["Una tarifa por camiseta de equipo", "Una tarifa de árbitro", "Una tarifa por tiempo fuera", "Una tarifa de procesamiento de pagos"], answer: 3, why: "Las tarifas de pago son comunes." },
      { q: "Si eres menor de 18 años, una cuenta de tienda puede necesitar:", options: ["Nada", "Una edad falsa", "Que un adulto sea dueño o codueño", "La identificación de un compañero"], answer: 2, why: "Muchas plataformas exigen a un adulto." },
      { q: "Vender mercancía con tu nombre puede contar como:", options: ["Pago por jugar", "Una beca", "Nada", "Actividad de NIL"], answer: 3, why: "Usa tu nombre, tu imagen o tu semejanza." },
      { q: "¿A quién debe preguntar un atleta universitario sobre las reglas de NIL para vender?", options: ["A la oficina de cumplimiento", "A un fan cualquiera", "A un rival", "A nadie"], answer: 0, why: "Conocen las reglas actuales de la escuela y de la NCAA." },
      { q: "¿Puedes poner un logo de la NFL en tu mercancía?", options: ["Sí, siempre", "No, no sin una licencia", "Solo en rojo", "Solo en línea"], answer: 1, why: "Los logos de las ligas están protegidos." },
      { q: "Una marca registrada es:", options: ["Un tipo de zapato", "Una bebida deportiva", "Un nombre, logo o lema protegido", "Un plan de entrenamiento"], answer: 2, why: "Las marcas registradas identifican a los negocios." },
      { q: "El IRS dice que debes presentar una declaración si tus ganancias netas por cuenta propia son:", options: ["$400 o más", "$1 millón o más", "Nunca", "Solo si tienes más de 30 años"], answer: 0, why: "Ese es el límite del IRS en su página para trabajadores por cuenta propia." },
      { q: "Una página de producto debe responder:", options: ["Solo el precio", "Tu promedio escolar", "Tu contraseña", "Qué es, para quién, qué recibes, precio, cuándo y cómo"], answer: 3, why: "Los compradores necesitan esas respuestas." },
      { q: "Las fotos de producto deben ser:", options: ["Copiadas de otras tiendas", "Fotos reales que sean tuyas", "Falsas", "De otros atletas"], answer: 1, why: "Usa fotos sobre las que tienes derechos." },
      { q: "¿Por qué tener una política de reembolso?", options: ["Para quedarte siempre con todo el dinero", "Para evitar discusiones después", "Es decoración", "No hace falta"], answer: 1, why: "Las reglas claras te protegen a ti y a los compradores." },
      { q: "El precio debe estar:", options: ["Por debajo de tu costo", "Al azar", "Siempre gratis", "Por encima de tu costo total"], answer: 3, why: "Si no, pierdes dinero en cada venta." },
      { q: "La IA arma tu fórmula de ganancia. Debes:", options: ["Revisar las cuentas con una calculadora", "Confiar totalmente", "Borrarla", "Duplicar tu precio"], answer: 0, why: "La IA puede equivocarse en las cuentas." },
      { q: "Un lanzamiento de prueba es para:", options: ["Todos a la vez", "Solo los rivales", "Familia, seguidores cercanos y gente que conoces", "Nadie"], answer: 2, why: "Un grupo pequeño te ayuda a arreglar problemas." },
      { q: "¿Dónde debes poner el enlace de tu tienda?", options: ["Escondido en ningún lado", "En la página de un rival", "En mensajes de spam", "En tu biografía"], answer: 3, why: "Los enlaces en la biografía son fáciles de encontrar." },
      { q: "La IA puede ayudar en la atención al cliente:", options: ["Quedándose con el dinero de los clientes", "Haciendo borradores de respuestas amables", "Ignorando los mensajes", "Cambiando las reglas de reembolso a escondidas"], answer: 1, why: "Las plantillas hacen que las respuestas sean rápidas y amables." }
    ]
  }
};
