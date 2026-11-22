"use strict";

// Koach Learn course (Spanish translation of athletes-influencer-marketing). Shape and translation rules: scripts/koachlearn-courses/README.md.
// NIL and endorsement rules change: sources are the FTC, NCAA and College Sports Commission pages checked 27-28 October 2026.

module.exports = {
  id: "athletes-influencer-marketing-es",
  lang: "es",
  translationOf: "athletes-influencer-marketing",
  category: "Athletes",
  name: "Marketing de influencers para atletas",
  skills: "Encontrar marcas que van contigo, Armar un media kit de una página, Escribir una propuesta a una marca con IA, Detectar señales de alerta en un contrato, Avisar de las publicaciones patrocinadas y seguir las reglas de NIL",
  outcome: "armar un media kit de una página, enviar una propuesta a una marca que va contigo con un mensaje redactado con IA, revisar un acuerdo en busca de señales de alerta con un adulto de confianza, y publicar contenido patrocinado con un aviso claro al estilo de la FTC, siguiendo las reglas de NIL de tu escuela y tu estado.",
  about: [
    "Este curso es para atletas que quieren trabajar con marcas en redes sociales mediante acuerdos de NIL (nombre, imagen y semejanza), y para los entrenadores y padres que los guían.",
    "El marketing de influencers significa que una marca te paga, con dinero o productos, para que compartas su producto con tu público. Vas a aprender a encontrar marcas que van contigo, a mostrar tu valor con un media kit, a enviar propuestas de forma profesional, a detectar malos acuerdos y a mantenerte honesto y dentro de las reglas.",
    "Las reglas de NIL son distintas en la secundaria, en cada división universitaria y en cada estado, y cambian. Este curso enseña las habilidades y te muestra las páginas oficiales; confirma siempre las reglas actuales con la oficina de cumplimiento de tu escuela o con la asociación atlética de secundarias de tu estado antes de firmar cualquier cosa. No es asesoría legal ni fiscal."
  ],
  finalTask: "Crea un media kit de una página, elige una marca que vaya con tus valores y tu público, escribe un mensaje de propuesta con IA y ajústalo a tu estilo, y escribe una lista de las señales de alerta y las reglas que vas a revisar antes de firmar (incluido a quién vas a preguntar en tu escuela o tu estado). Si consigues un acuerdo, publícalo con un aviso claro dentro de la misma publicación.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas de secundaria y universidad que quieren trabajar con marcas en redes sociales mediante acuerdos de nombre, imagen y semejanza (NIL), y los entrenadores y padres que los orientan.",
    startingPoint: "Tienen cuentas en redes sociales y algunos seguidores, y han oído hablar de los acuerdos de NIL. Pocos conocen las reglas de la NCAA o de su estado, tienen un media kit, le han enviado una propuesta a una marca o saben detectar señales de alerta en un contrato.",
    gap: "Los deportistas pueden perder su elegibilidad, dinero o los derechos sobre su propia imagen si firman malos acuerdos, rompen las reglas de la escuela o del estado o no avisan sus publicaciones. Conocer las reglas, mostrar números reales y revisar los acuerdos con un adulto de confianza les permite ganar dinero de forma segura y honesta.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de octavo grado",
      "Un teléfono con redes sociales, un asistente de IA gratuito y Canva",
      "Unos 60 minutos en total",
      "Las reglas de NIL de la NCAA, la NAIA, la asociación deportiva del estado y la escuela son distintas y cambian; consulta con la oficina de cumplimiento o el director deportivo",
      "Los deportistas menores de 18 años incluyen a su madre, padre o tutor; esto es educación, no consejo legal ni de impuestos"
    ],
    prerequisites: "Ninguno. \"Marca personal en redes sociales para deportistas\" es un buen primer paso."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Según tu nivel deportivo", action: "explicar qué es un acuerdo de NIL y qué reglas se aplican a ti, incluido lo que no está permitido", standard: "nombrando a quién preguntar en tu escuela o tu estado y diciendo que los ingresos de NIL en general pagan impuestos" },
    { id: "O2", condition: "Según los productos y los negocios locales que usas", action: "hacer una lista de cinco marcas que coinciden con tus valores y tu público", standard: "con cada categoría restringida por tu escuela o tu estado tachada" },
    { id: "O3", condition: "Usando las estadísticas de tus apps y una plantilla de Canva", action: "crear un media kit de una página con tu biografía, tus canales, números reales, tu público, lo que ofreces y un contacto seguro", standard: "con cada número real, actual y con fecha" },
    { id: "O4", condition: "Usando un borrador de la IA", action: "escribir un mensaje de propuesta para el contacto oficial de una marca", standard: "de menos de 150 palabras, con tu voz, una razón concreta y verdadera, una idea y tu media kit, y con tu madre o padre al tanto si tienes menos de 18 años" },
    { id: "O5", condition: "Ante un acuerdo por escrito", action: "revisar si tiene señales de alerta con un adulto de confianza antes de firmar", standard: "revisando el trabajo, el pago, la duración y cómo terminarlo, y negándote a firmar bajo presión" },
    { id: "O6", condition: "En cualquier publicación por la que una marca te dio algo", action: "escribir una publicación patrocinada con un aviso claro cerca del inicio", standard: "dicho y mostrado en los videos, no escondido en hashtags ni en tu biografía, y sin ninguna afirmación que no puedas demostrar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepararte para trabajar con marcas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cómo funcionan los acuerdos de atletas influencers",
          minutes: 5,
          goal: "Explicar qué es un acuerdo de NIL y qué está permitido para atletas universitarios.",
          text: [
            "Un acuerdo de NIL te paga, con dinero, productos o servicios, por dejar que un negocio use tu nombre, tu imagen o tu semejanza: publicaciones en redes, apariciones, campamentos, autógrafos o comerciales.",
            "Para los atletas universitarios de la NCAA (la asociación nacional del deporte universitario de EE. UU.), su página de NIL dice que los acuerdos deben pagarte por el uso de tu NIL, tener un propósito comercial real y pagar dentro de un rango razonable. El pago por jugar, es decir, pagar para que asistas o juegues en una escuela o un pago ligado a tu rendimiento, no está permitido. Al momento de escribir esto, los atletas de la División I deben reportar los acuerdos con terceros de $600 o más en NIL Go, a cargo de la College Sports Commission; pregunta a tu oficina de cumplimiento los detalles actuales.",
            "Las reglas de NIL en la secundaria las fijan la asociación atlética de secundarias de cada estado y la ley estatal; algunos estados lo permiten con límites. Revisa las tuyas antes de cualquier acuerdo. Los ingresos de NIL normalmente pagan impuestos, así que guarda registros y habla con un profesional de impuestos."
          ],
          steps: ["Identifica tu nivel: secundaria, división de la NCAA, NAIA, colegio comunitario o profesional.", "Lee la política de NIL de tu escuela o las reglas de la asociación de tu estado.", "Habla con tu oficina de cumplimiento o tu director atlético.", "Guarda un registro de cada acuerdo y cada pago."],
          words: [["NIL", "nombre, imagen y semejanza: ganar dinero con tu nombre, tu foto o tu marca personal."], ["Pago por jugar", "pago por asistir o competir en una escuela, o pago ligado al rendimiento deportivo; no está permitido por las reglas de la NCAA."], ["Oficina de cumplimiento", "la oficina de la escuela que explica y vigila las reglas deportivas."]],
          slides: [
            { title: "Un acuerdo de NIL", bullets: ["Se paga con dinero, productos o servicios", "Publicaciones, apariciones, campamentos, autógrafos"] },
            { title: "Lo básico de la NCAA (revisa las reglas actuales)", bullets: ["Propósito comercial real, pago razonable", "Nada de pago por jugar", "DI: reporta acuerdos de $600 o más en NIL Go"] },
            { title: "Secundaria e impuestos", bullets: ["Las reglas las fija la asociación de tu estado", "Los ingresos de NIL normalmente pagan impuestos", "Guarda registros; pregunta a un profesional de impuestos"] }
          ],
          sources: [
            { name: "NCAA: Nombre, imagen y semejanza (en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission: acuerdos de NIL de estudiantes atletas (en inglés)", url: "https://www.collegesportscommission.org/nil/" },
            { name: "IRS: centro de impuestos para trabajadores por cuenta propia (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Busca la página de NIL de tu escuela o de la asociación de tu estado y anota tres reglas que se te aplican y a quién le preguntarías tus dudas.",
          youCanNow: "explicar cómo funcionan los acuerdos de NIL de atletas y encontrar las reglas que se te aplican.",
          quickCheck: [
            { objective: "O1", q: "¿Con qué te puede pagar un acuerdo de NIL?", options: ["Solo con dinero en efectivo", "Solo con créditos escolares", "Solo con entradas a partidos", "Con dinero, productos o servicios"], answer: 3, why: "Los acuerdos de NIL pueden pagar con dinero, productos o servicios por usar tu nombre, tu imagen o tu semejanza." },
            { objective: "O1", q: "Recibes tu primer pago de NIL. ¿Qué haces?", options: ["Guardar un registro y hablar con un profesional de impuestos", "Gastarlo y olvidarte", "Escondérselo a tu escuela", "Devolverlo"], answer: 0, why: "Los ingresos de NIL en general pagan impuestos, así que guarda registros y busca consejo de impuestos." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar marcas que van contigo",
          minutes: 5,
          goal: "Hacer una lista de cinco marcas que coinciden con tus valores y tu público.",
          text: [
            "Los mejores acuerdos son con marcas que ya usas y en las que crees, y que le importan a tu público. Un gimnasio local, una bebida deportiva que de verdad tomas, una app de entrenamiento que usas o un restaurante familiar cerca de tu escuela.",
            "Empieza por lo local. Los negocios locales suelen estar más abiertos a trabajar con atletas jóvenes, y tu público local les importa. Las marcas grandes muchas veces trabajan con agencias o con plataformas de NIL que tu escuela puede usar; pregunta a tu oficina de cumplimiento cuáles están aprobadas.",
            "Evita marcas que chocan con tus valores, con las reglas de tu escuela o con tu edad. Muchas escuelas y estados restringen categorías como alcohol, tabaco, vapeo, apuestas y productos para adultos."
          ],
          steps: ["Haz una lista de productos y negocios locales que de verdad usas.", "Marca los que le importan a tu público.", "Tacha cualquier categoría que tu escuela o tu estado restrinja.", "Quédate con tus cinco mejores."],
          words: [["Afinidad con la marca", "qué tan bien una marca coincide con tus valores, tu imagen y tu público."], ["Plataforma de NIL", "un sitio web o una app que conecta a atletas con marcas para hacer acuerdos."]],
          slides: [
            { title: "La mejor afinidad", bullets: ["Marcas que ya usas y en las que crees", "A tu público le importan"] },
            { title: "Empieza por lo local", bullets: ["Gimnasios, restaurantes, tiendas cerca de ti", "Pregunta a cumplimiento qué plataformas están aprobadas"] },
            { title: "Evita", bullets: ["Marcas que chocan con tus valores", "Categorías restringidas: alcohol, vapeo, apuestas"] }
          ],
          tryIt: "Escribe una lista de diez productos o negocios que usas. Pregunta a un asistente de IA cuáles van mejor con un público como el tuyo y luego elige tú tus cinco mejores.",
          youCanNow: "elegir marcas que van con tus valores, tu público y las reglas.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué empezar con negocios locales?", options: ["Nunca dicen que no", "Muchas veces están abiertos a deportistas jóvenes y les importa tu público local", "Son los que más pagan", "No necesitan contratos"], answer: 1, why: "Los negocios locales suelen estar más abiertos a deportistas jóvenes y valoran un público local." },
            { objective: "O2", q: "Una tienda de vapeo te ofrece un acuerdo. ¿Qué haces?", options: ["Aceptarlo si paga bien", "Pedir más dinero", "Tacharla; muchas escuelas y estados restringen esa categoría", "Publicar sobre ella sin acuerdo"], answer: 2, why: "Evita las categorías que tu escuela o tu estado restringen, como el vapeo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Armar tu media kit",
          minutes: 6,
          goal: "Hacer un media kit de una página que muestre tu valor a las marcas.",
          text: [
            "Un media kit es un resumen de una página que las marcas usan para decidir si eres buena opción. Muestra quién eres, quién es tu público y qué puedes hacer por ellas.",
            "Incluye: una buena foto y una biografía corta; tu deporte, tu equipo y tus logros; tus canales con número de seguidores e interacción promedio (me gusta, comentarios, veces compartido o vistas por publicación) según las estadísticas de tu app; quién es tu público (ubicación y rango de edad si la app lo muestra); colaboraciones anteriores; qué ofreces (publicaciones, videos, apariciones, campamentos); y tus datos de contacto, con un correo deportivo o el de un padre o agente si eres menor de edad.",
            "Usa una plantilla de Canva para diseñarlo y un asistente de IA para pulir el texto. Cada número debe ser real y actual. No compres seguidores; las marcas revisan la interacción."
          ],
          steps: ["Reúne tus números reales de las estadísticas de tu app.", "Escribe una biografía de dos oraciones.", "Haz la lista de lo que ofreces.", "Diséñalo con una plantilla de media kit de Canva.", "Revisa cada número; ponle fecha."],
          words: [["Media kit", "un resumen de una página de quién eres, tu público y lo que ofreces a las marcas."], ["Tasa de interacción", "cuánto interactúa la gente con tus publicaciones comparado con cuántos te siguen o las ven."]],
          slides: [
            { title: "Lo que muestra un media kit", bullets: ["Quién eres", "Quién es tu público", "Qué puedes hacer por una marca"] },
            { title: "Incluye", bullets: ["Foto, biografía, deporte y logros", "Canales, seguidores, interacción promedio", "Lo que ofreces y un contacto seguro"] },
            { title: "Honestidad", bullets: ["Números reales y actuales", "Nunca compres seguidores", "Las marcas revisan la interacción"] }
          ],
          tryIt: "Arma tu media kit de una página en Canva con tus números reales. Pide a un asistente de IA que haga tu biografía más corta y más clara.",
          youCanNow: "armar un media kit honesto de una página.",
          quickCheck: [
            { objective: "O3", q: "¿Qué muestra la interacción en tu media kit?", options: ["Cuánto interactúa la gente con tus publicaciones", "Cuántas marcas conoces", "Tu promedio de calificaciones", "Tu número de camiseta"], answer: 0, why: "La interacción son los me gusta, comentarios, compartidos o vistas por publicación." },
            { objective: "O3", q: "Tu número de seguidores cambió desde que hiciste tu media kit el mes pasado. ¿Qué haces?", options: ["Dejar el número viejo", "Redondearlo mucho hacia arriba", "Comprar seguidores para que coincida", "Actualizarlo con el número real de hoy y la fecha"], answer: 3, why: "Cada número debe ser real y estar al día." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararte para trabajar con marcas",
        questions: [
          { objective: "O1", q: "¿Qué significa NIL?", options: ["Liga Nacional de Influencers", "Nueva Ley de Ingresos", "Nombre, imagen y semejanza", "Sin límites de tinta"], answer: 2, why: "NIL es ganar dinero con tu nombre, tu imagen y tu semejanza." },
          { objective: "O1", q: "Según las reglas de la NCAA, ¿qué NO está permitido?", options: ["Que te paguen por asistir a una escuela específica", "Publicaciones pagadas para una tienda local", "Organizar un campamento pagado", "Firmar autógrafos por dinero"], answer: 0, why: "Eso es pago por jugar, que las reglas de la NCAA no permiten." },
          { objective: "O1", q: "Un atleta de secundaria quiere un acuerdo de NIL. ¿Qué reglas importan?", options: ["Solo las de la marca", "Las de nadie", "Las de una liga profesional", "Las de la asociación atlética de secundarias de su estado y de su escuela"], answer: 3, why: "Las reglas de NIL en la secundaria cambian de un estado a otro." },
          { objective: "O2", q: "¿Qué marca es probablemente la mejor primera opción?", options: ["Una empresa de vapeo", "Un gimnasio local donde entrenas y en el que crees", "Una marca cualquiera que nunca has usado", "Una app de apuestas"], answer: 1, why: "El uso real y el público local hacen la mejor afinidad." },
          { objective: "O3", q: "¿Cómo debe ser cada número de tu media kit?", options: ["Redondeado muy hacia arriba", "Real y actual", "Adivinado", "Tomado de la cuenta de un amigo"], answer: 1, why: "Las marcas revisan, y la confianza lo es todo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Propuestas, acuerdos y avisos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Enviar una propuesta a una marca",
          minutes: 5,
          goal: "Escribir un mensaje de propuesta corto y profesional a una marca.",
          text: [
            "Una propuesta es un mensaje corto para pedir trabajar juntos. Envíala desde tu correo profesional o al contacto oficial de la marca, no con mensajes directos al azar a sus empleados.",
            "Una buena propuesta tiene: quién eres en una línea; por qué te gusta esta marca (algo específico y cierto); tu público y un número; una idea clara (\"tres videos de entrenamiento usando su app de recuperación\"); y tu media kit adjunto. Que tenga menos de 150 palabras.",
            "Pide a un asistente de IA un borrador y luego reescríbelo con tu estilo. Si eres menor de 18 años, involucra a tu padre, madre o tutor. Haz un solo seguimiento después de una o dos semanas. Muchas marcas dirán que no o no contestarán; es normal."
          ],
          steps: ["Busca el contacto oficial de la marca.", "Pide a la IA una propuesta corta de menos de 150 palabras.", "Agrega una razón específica y cierta de por qué te gusta la marca.", "Adjunta tu media kit.", "Haz un solo seguimiento después de una o dos semanas."],
          words: [["Propuesta", "un mensaje corto para proponer trabajar juntos."], ["Seguimiento", "un recordatorio amable si no te han contestado."]],
          slides: [
            { title: "Adónde enviarla", bullets: ["Desde tu correo profesional", "Al contacto oficial de la marca"] },
            { title: "Una buena propuesta", bullets: ["Quién eres", "Por qué te gusta la marca (y que sea cierto)", "Tu público y un número", "Una idea clara + media kit"] },
            { title: "Después", bullets: ["Menor de 18: con un padre o tutor", "Un solo seguimiento", "Que no contesten es normal"] }
          ],
          tryIt: "Elige una de tus cinco marcas. Usa la IA para hacer un borrador de propuesta, reescríbelo con tu estilo y pide a un entrenador o a tu padre o madre que lo lea antes de enviarlo.",
          youCanNow: "escribir y enviar una propuesta corta y profesional a una marca.",
          quickCheck: [
            { objective: "O4", q: "¿Adónde debes enviar una propuesta a una marca?", options: ["A mensajes directos al azar de empleados", "Al contacto oficial de la marca", "A la competencia de la marca", "En un comentario público"], answer: 1, why: "Envíala desde tu correo profesional al contacto oficial de la marca." },
            { objective: "O4", q: "Una marca no ha respondido a tu propuesta después de dos semanas. ¿Qué haces?", options: ["Escribirles todos los días", "Publicar sobre ellos con enojo", "Hacer un solo seguimiento y seguir adelante si no responden", "Enviársela a todos los empleados"], answer: 2, why: "Haz un solo seguimiento; muchas marcas dirán que no o no responderán, y eso es normal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Leer un acuerdo: señales de alerta",
          minutes: 6,
          goal: "Detectar señales de alerta en un acuerdo antes de firmar.",
          text: [
            "Antes de aceptar cualquier cosa, pídelo por escrito y léelo con un adulto de confianza. En acuerdos más grandes, puede ayudarte un abogado, un agente o el apoyo de NIL de tu escuela. No firmes bajo presión.",
            "Señales de alerta: te piden pagar dinero primero; quieren tus contraseñas o tus códigos de acceso; el acuerdo dura muchísimo tiempo o dice que son dueños de tu nombre o tu imagen para siempre; no puedes publicar nada para otras marcas (exclusividad) sin un pago justo; el pago no está claro o es solo \"exposición\"; quieren que publiques cosas que no son ciertas; o cualquier cosa que las reglas de tu escuela o tu estado no permitan, como usar logos de la escuela sin permiso.",
            "Revisa qué tienes que hacer (cuántas publicaciones, cuándo y qué), cómo y cuándo te pagan, cuánto dura y cómo terminarlo. Atletas universitarios: revisen si hay que reportarlo y háganlo a tiempo."
          ],
          steps: ["Pide el acuerdo por escrito.", "Léelo con un adulto o asesor de confianza.", "Revisa el trabajo, el pago, la duración y cómo terminarlo.", "Busca las señales de alerta.", "Revisa las reglas de tu escuela y tu estado y si hay que reportarlo.", "Nunca firmes bajo presión."],
          words: [["Contrato", "un acuerdo por escrito que las dos partes deben cumplir."], ["Exclusividad", "una regla que te prohíbe trabajar con marcas de la competencia."], ["Derechos de uso", "cómo y por cuánto tiempo una marca puede usar tus fotos, tus videos y tu nombre."]],
          slides: [
            { title: "Antes de firmar", bullets: ["Pídelo por escrito", "Léelo con un adulto de confianza", "Nunca firmes bajo presión"] },
            { title: "Señales de alerta", bullets: ["Tú pagas primero, o piden contraseñas", "Son dueños de tu imagen para siempre", "Pago poco claro o solo \"exposición\"", "Te piden decir cosas falsas"] },
            { title: "Revisa", bullets: ["Trabajo, pago, duración, cómo terminarlo", "Reglas de la escuela y del estado", "Fechas límite para reportar"] }
          ],
          sources: [
            { name: "NCAA: Nombre, imagen y semejanza (en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission: acuerdos de NIL de estudiantes atletas (en inglés)", url: "https://www.collegesportscommission.org/nil/" }
          ],
          tryIt: "Pide a un asistente de IA que escriba un ejemplo corto de acuerdo de NIL con tres señales de alerta escondidas (es para practicar). Encuéntralas y luego escribe tu propia lista de señales de alerta.",
          youCanNow: "detectar señales de alerta en un acuerdo y saber con quién leerlo antes de firmar.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es una señal de alerta en un acuerdo?", options: ["Te piden tus contraseñas o tus códigos de acceso", "Un pago y unas fechas claros", "Una forma de terminar el acuerdo", "Un número fijo de publicaciones"], answer: 0, why: "Nunca le des a una marca tus contraseñas ni tus códigos de acceso." },
            { objective: "O5", q: "Una marca te dice que debes firmar hoy o pierdes el acuerdo. ¿Qué haces?", options: ["Firmar ya", "Firmar y leerlo después", "Pedirle a un amigo que firme por ti", "No firmar bajo presión; leerlo primero con un adulto de confianza"], answer: 3, why: "Nunca firmes bajo presión; pide todo por escrito y léelo con un adulto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Avisar bien de las publicaciones patrocinadas",
          minutes: 5,
          goal: "Escribir una publicación patrocinada con un aviso claro y correcto.",
          text: [
            "La FTC, la agencia de EE. UU. que hace cumplir la ley de publicidad, dice que debes avisar de cualquier relación importante con una marca, lo que incluye pagos, productos gratis o con descuento, o un vínculo familiar o laboral, siempre que menciones la marca.",
            "Hazlo claro y difícil de pasar por alto: ponlo en la publicación, cerca del inicio, con palabras sencillas como \"Publicidad\", \"Patrocinado\" o \"Gracias [marca] por los tenis gratis\". En los videos, dilo y muéstralo en pantalla; en las transmisiones en vivo, repítelo. En fotos e historias, ponlo sobre la imagen. No lo escondas entre muchos hashtags, solo en tu biografía o detrás de \"ver más\". Palabras vagas como \"sp\", \"colab\" o \"embajador\" por sí solas no son claras.",
            "Di solo lo que es cierto: no promociones un producto que no has probado y nunca hagas afirmaciones de salud que la marca no pueda comprobar, como \"esta bebida cura los calambres\"."
          ],
          steps: ["Decide: ¿hay algún pago, producto gratis o vínculo? Entonces avisa.", "Pon \"Publicidad\" o un agradecimiento claro cerca del inicio del texto.", "En video: dilo y muéstralo.", "Usa también la etiqueta de colaboración pagada de la app, si la tiene.", "Revisa que cada afirmación sea cierta."],
          words: [["Relación importante", "un vínculo con una marca, como un pago, productos gratis o familia, que la gente quizá no espera."], ["Publicación patrocinada", "una publicación que una marca pagó o por la que te dio algo."]],
          slides: [
            { title: "Cuándo avisar", bullets: ["Productos pagados, gratis o con descuento", "Vínculos familiares o laborales con la marca"] },
            { title: "Cómo", bullets: ["\"Publicidad\" o \"Gracias [marca] por...\" cerca del inicio", "Video: dilo y muéstralo", "No escondido en hashtags ni en la biografía"] },
            { title: "Mantente honesto", bullets: ["Solo productos que has probado", "Nada de afirmaciones de salud sin pruebas"] }
          ],
          sources: [
            { name: "FTC: Guía básica de avisos para influencers en redes sociales (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "FTC: Guías sobre recomendaciones, preguntas frecuentes (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides" }
          ],
          tryIt: "Tarea final: termina tu media kit, tu propuesta a una marca y tu lista de señales de alerta (con los nombres de a quién vas a preguntar en tu escuela o tu estado). Luego escribe un texto patrocinado de práctica con un aviso correcto.",
          youCanNow: "publicar contenido patrocinado con un aviso claro y correcto y mantenerte dentro de las reglas de NIL.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál de estos es un vínculo con una marca que debes avisar?", options: ["Un producto que compraste tú", "Un producto gratis o con descuento de la marca", "Una marca de la que nunca has oído hablar", "Tu equipo favorito"], answer: 1, why: "Hay que avisar un pago, un producto gratis o con descuento, o un vínculo familiar o laboral." },
            { objective: "O6", q: "Vas a hacer una transmisión en vivo patrocinada. ¿Cómo avisas?", options: ["Una vez en tu biografía", "Solo en hashtags", "Diciendo \"colab\" una vez", "Avisar con claridad y repetirlo durante la transmisión"], answer: 3, why: "En las transmisiones en vivo, repite el aviso." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Propuestas, acuerdos y avisos",
        questions: [
          { objective: "O4", q: "¿Qué debe incluir una propuesta?", options: ["Un ensayo de 3 páginas", "Tu contraseña", "Una exigencia de dinero por adelantado", "Quién eres, por qué te gusta la marca, tu público, una idea y tu media kit"], answer: 3, why: "Corto, específico y profesional consigue respuestas." },
          { objective: "O5", q: "Una \"marca\" te pide pagar una cuota para entrar a su programa de atletas. Esto es:", options: ["Una señal de alerta", "Normal", "Un requisito de la NCAA", "Un gran acuerdo"], answer: 0, why: "Las marcas reales te pagan a ti, no al revés." },
          { objective: "O5", q: "Un contrato dice que la marca es dueña de tu imagen para siempre. Debes:", options: ["Firmar rápido", "Ignorarlo", "Tomarlo como señal de alerta y pedir consejo", "Pedir más \"para siempre\""], answer: 2, why: "Los derechos de uso para siempre son una gran señal de alerta." },
          { objective: "O6", q: "¿Qué aviso es claro?", options: ["\"#sp\" al final", "\"colab\"", "Solo en tu biografía", "\"Publicidad\" cerca del inicio del texto"], answer: 3, why: "La FTC dice que debe ser claro y difícil de pasar por alto." },
          { objective: "O6", q: "En un video patrocinado, el aviso debe:", options: ["Ir solo en la descripción", "Decirse y mostrarse en el video", "Ir en un comentario", "No ponerse"], answer: 1, why: "Los avisos de un video van dentro del video." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Marketing de influencers para atletas",
    questions: [
      { objective: "O1", q: "El marketing de influencers significa:", options: ["Comprar seguidores", "Entrenar a un equipo", "Una marca te paga para que compartas su producto con tu público", "Vender boletos"], answer: 2, why: "Las marcas pagan por tu alcance y la confianza que generas." },
      { objective: "O1", q: "Los acuerdos de NIL de la NCAA deben tener:", options: ["Un propósito comercial real y un pago razonable", "Ningún trabajo", "Un pago ligado a los puntos anotados", "Un pago por elegir una escuela"], answer: 0, why: "Así describe la NCAA los acuerdos permitidos." },
      { objective: "O1", q: "Un pago ligado a tu rendimiento deportivo es:", options: ["Pago por jugar, no permitido por las reglas de la NCAA", "Recomendado", "Obligatorio", "Un formulario de impuestos"], answer: 0, why: "Las reglas de la NCAA prohíben el pago por jugar." },
      { objective: "O1", q: "¿Dónde reportan los atletas de la División I sus acuerdos de NIL con terceros (al momento de escribir esto)?", options: ["En su biografía de redes", "En un chat de grupo", "En NIL Go, a cargo de la College Sports Commission", "En ningún lado"], answer: 2, why: "Confirma los detalles actuales con tu oficina de cumplimiento." },
      { objective: "O1", q: "Los ingresos de NIL normalmente:", options: ["Nunca pagan impuestos", "Pagan impuestos", "Son ilegales", "Se pagan a la escuela"], answer: 1, why: "La NCAA dice que los ingresos de NIL normalmente pagan impuestos." },
      { objective: "O1", q: "¿Quién fija las reglas de NIL en la secundaria?", options: ["La NFL", "La marca", "Nadie", "La asociación de secundarias de cada estado y la ley estatal"], answer: 3, why: "Cambia según el estado." },
      { objective: "O2", q: "Las mejores primeras marcas suelen ser:", options: ["Marcas de las que nunca has oído", "Apps de apuestas", "Negocios locales que usas y en los que crees", "Tiendas de vapeo"], answer: 2, why: "La afinidad local y el uso real hacen acuerdos sólidos." },
      { objective: "O2", q: "¿Qué categoría restringen muchas escuelas y estados?", options: ["Panaderías locales", "Librerías", "Tenis para correr", "Apuestas y alcohol"], answer: 3, why: "Las categorías restringidas son comunes en las reglas de NIL." },
      { objective: "O3", q: "Un media kit es:", options: ["Un resumen de una página de ti, tu público y lo que ofreces", "Un botiquín de primeros auxilios", "Una bolsa para cámara", "Un contrato"], answer: 0, why: "Las marcas lo usan para decidir si eres buena opción." },
      { objective: "O3", q: "La tasa de interacción muestra:", options: ["Tu estatura", "Cuánto interactúa la gente comparado con seguidores o vistas", "Tu promedio escolar", "Tu número de camiseta"], answer: 1, why: "A las marcas les importa más la interacción que el número de seguidores." },
      { objective: "O3", q: "Comprar seguidores es:", options: ["Marketing inteligente", "Obligatorio", "Deshonesto, y las marcas lo notan", "Gratis"], answer: 2, why: "Los seguidores falsos arruinan la confianza." },
      { objective: "O4", q: "¿Adónde debes enviar una propuesta?", options: ["Al contacto oficial de la marca", "A mensajes directos personales de empleados al azar", "A su competencia", "A ningún lado"], answer: 0, why: "Los contactos oficiales son profesionales y seguros." },
      { objective: "O4", q: "Una propuesta debe tener:", options: ["Unas cinco páginas", "Un emoji", "Una videollamada a medianoche", "Menos de 150 palabras"], answer: 3, why: "Las propuestas cortas sí se leen." },
      { objective: "O4", q: "Si tienes menos de 18 años al enviar propuestas, debes:", options: ["Ocultarlo", "Involucrar a tu padre, madre o tutor", "Mentir sobre tu edad", "Usar un nombre falso"], answer: 1, why: "Los adultos ayudan a proteger a los menores en los acuerdos." },
      { objective: "O5", q: "Antes de firmar un acuerdo debes:", options: ["Firmar en el momento", "Pedirlo por escrito y leerlo con un adulto de confianza", "Compartir tu contraseña", "Pagar una cuota"], answer: 1, why: "Las condiciones por escrito te protegen." },
      { objective: "O5", q: "Exclusividad significa:", options: ["Te pagan más", "El acuerdo es corto", "Eres dueño de la marca", "No puedes trabajar con marcas de la competencia"], answer: 3, why: "Limita otros acuerdos, así que debe ser justa." },
      { objective: "O5", q: "Un acuerdo paga solo con \"exposición\". Esto es:", options: ["Una señal de alerta", "Un gran pago", "Obligatorio", "Una regla de impuestos"], answer: 0, why: "Un pago poco claro es una señal de advertencia." },
      { objective: "O6", q: "Una marca te regaló tenis. ¿Tienes que avisarlo?", options: ["No, solo cuenta el dinero", "Solo si te gustan", "Sí, los productos gratis cuentan", "Solo en TikTok"], answer: 2, why: "La FTC dice que los productos gratis son una relación importante." },
      { objective: "O6", q: "¿Dónde NO debe ir el aviso como único lugar?", options: ["Cerca del inicio del texto", "Sobre la imagen en una historia", "Dicho en el video", "Escondido en hashtags o en tu biografía"], answer: 3, why: "Los avisos deben ser difíciles de pasar por alto." },
      { objective: "O6", q: "Una marca te pide decir que su bebida cura los calambres. Tú:", options: ["Lo dices", "Te niegas; no hagas afirmaciones de salud que no puedan comprobar", "Lo dices más fuerte", "Lo dices sin aviso"], answer: 1, why: "La FTC advierte contra afirmaciones de salud sin pruebas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      5,
      6,
      8,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Media kit",
        objective: "O3",
        notYet: "Faltan números, son inventados o están desactualizados, o se muestran datos de contacto privados.",
        meets: "Una página con biografía, canales, números reales con fecha, público, lo que se ofrece y un contacto seguro.",
        exceeds: "Incluye la interacción promedio por publicación y una lista clara de colaboraciones anteriores o trabajo comunitario."
      },
      {
        name: "Marca que encaja",
        objective: "O2",
        notYet: "La marca elegida choca con los valores del deportista o es de una categoría restringida.",
        meets: "Una marca que el deportista de verdad usa y que encaja con su público y con las reglas de la escuela y el estado.",
        exceeds: "La elección se apoya en una lista de cinco marcas que encajan, con sus razones."
      },
      {
        name: "Mensaje de propuesta",
        objective: "O4",
        notYet: "Es largo, genérico o texto copiado de la IA, o se envió a un mensaje directo al azar.",
        meets: "Menos de 150 palabras, con la voz del deportista, una razón verdadera, una idea y el media kit, enviado a un contacto oficial.",
        exceeds: "La madre, el padre o el tutor participa cuando hace falta y hay una fecha fijada para el seguimiento."
      },
      {
        name: "Lista de señales de alerta y reglas",
        objective: "O5",
        notYet: "Faltan señales de alerta clave o no nombra a quién se le va a preguntar.",
        meets: "Anota las señales de alerta, qué revisar (trabajo, pago, duración, cómo terminar) y a quién preguntar en la escuela o el estado.",
        exceeds: "Agrega las fechas límite para reportar y cómo guardar registros para los impuestos."
      },
      {
        name: "Aviso",
        objective: "O6",
        notYet: "No hay aviso, o está escondido o no es claro.",
        meets: "Un \"Publicidad\" o un agradecimiento claro cerca del inicio, dicho y mostrado en los videos, solo con afirmaciones verdaderas.",
        exceeds: "Usa también la etiqueta de colaboración pagada de la app y revisa cada afirmación con la marca."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan la tarea final y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que dicen haber enviado una propuesta a por lo menos una marca en un plazo de 30 días (encuesta de seguimiento)",
      "Participantes que dicen haber revisado un acuerdo con un adulto de confianza o con la oficina de cumplimiento, o haber rechazado un mal acuerdo",
      "Participantes que dicen haber avisado con claridad cada publicación patrocinada y haber reportado a tiempo cada acuerdo que lo requería"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono con apps de redes sociales y sus estadísticas",
      "Una cuenta gratuita de Canva",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "La política de NIL de tu escuela o las reglas de la asociación deportiva de tu estado",
      "Unos 60 minutos"
    ],
    facilitatorNotes: [
      "Invita a la oficina de cumplimiento o al director deportivo a explicar las reglas actuales de NIL y cómo reportar; las reglas y los montos límite cambian.",
      "Con deportistas menores de 18 años, incluye a sus padres o tutores en cada propuesta y cada acuerdo.",
      "Nunca le digas a un deportista que un acuerdo concreto está bien; envía los contratos a un adulto de confianza, un abogado, un agente o el apoyo de NIL de la escuela.",
      "Enseña que comprar seguidores o inflar los números es deshonesto y puede acabar con los acuerdos.",
      "Practiquen juntos cómo escribir avisos y revisa los borradores patrocinados antes de publicarlos."
    ]
  }
};
