"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-ai-real-estate.js). See scripts/koachlearn-courses/README.md, "Translations".

const HUD_FHA = { name: "HUD: resumen de la Ley de Vivienda Justa", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" };
const CFR_100_75 = { name: "24 CFR 100.75: anuncios, declaraciones y avisos discriminatorios", url: "https://www.law.cornell.edu/cfr/text/24/100.75" };
const DRE = { name: "Departamento de Bienes Raíces de California (ejemplo de regulador estatal)", url: "https://www.dre.ca.gov/" };
const CAN_SPAM = { name: "FTC: Ley CAN-SPAM, guía de cumplimiento para empresas", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-real-estate-es",
  lang: "es",
  translationOf: "smallbiz-ai-real-estate",
  category: "Small Business",
  name: "IA para agentes de bienes raíces",
  skills: "Escribir descripciones de propiedades que respetan la vivienda justa, Convertir notas en actualizaciones para clientes, Crear un plan de seguimiento, Resumir datos del mercado que tú consigues, Prepararte para visitas y casas abiertas, Proteger la información de los clientes",
  outcome: "usar la IA en tu negocio de bienes raíces para escribir descripciones de propiedades correctas que siguen las reglas de vivienda justa, mantener informados a compradores y vendedores, llevar un plan de seguimiento para tus interesados y convertir los números del mercado que sacaste de tu MLS en un resumen claro para el cliente, sin poner información privada de los clientes en herramientas de IA.",
  about: [
    "Este curso es para agentes, corredores y asistentes de bienes raíces, sobre todo agentes independientes y nuevos que están formando su negocio, incluidos muchos agentes de minorías que atienden a sus propias comunidades y a quienes compran casa por primera vez.",
    "Vas a usar un asistente de IA gratis para escribir anuncios de propiedades más rápido, mantener informados a los clientes, dar seguimiento constante a los interesados y explicar con claridad los números del mercado. También vas a aprender dónde la IA crea riesgos en bienes raíces: el lenguaje de vivienda justa, los datos equivocados en los anuncios y la privacidad de los clientes.",
    "Este curso no es asesoría legal. Las leyes de vivienda justa, las reglas de publicidad y las de licencias se aplican a ti; consulta a HUD (el Departamento de Vivienda y Desarrollo Urbano de EE. UU.), al regulador de bienes raíces de tu estado (en California, el Departamento de Bienes Raíces) y a tu corredor. Cada lección dura unos cinco minutos, con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma un kit de IA para agentes: una descripción de propiedad revisada línea por línea en cuanto a datos y lenguaje de vivienda justa, una plantilla de actualización semanal para vendedores, una plantilla de actualización de búsqueda para compradores, un plan de seguimiento de 30 días con cuatro mensajes, un resumen del mercado de una página hecho con números que sacaste tú, y una lista de control para casas abiertas. Ninguna información privada de clientes entra en la herramienta de IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Agentes de bienes raíces, corredores y asistentes, sobre todo agentes independientes y nuevos que están construyendo su negocio, incluidos muchos agentes de minorías que atienden a su propia comunidad y a personas que compran casa por primera vez.",
    startingPoint: "Tienen licencia o trabajan bajo un corredor, y saben sacar propiedades y números del MLS. Muchos han probado la IA para una o dos publicaciones, pero no tienen un proceso fijo, y pocos han pensado en los riesgos de la IA con la vivienda justa y la privacidad.",
    gap: "Escribir anuncios, informes y seguimientos toma horas, y un seguimiento irregular hace perder clientes. La IA ahorra ese tiempo, pero puede inventar datos, escribir frases que violan la ley de vivienda justa y exponer datos de clientes. Necesitan una forma segura y repetible de usarla que proteja su licencia y a sus clientes.",
    constraints: [
      "No es asesoría legal: las reglas de vivienda justa, de publicidad y de licencias vienen de HUD, del regulador del estado y del corredor",
      "Se aplican las políticas de la agencia sobre herramientas de IA",
      "Privacidad: nada de nombres de clientes con direcciones, datos financieros, términos de ofertas ni estrategia de negociación en herramientas de IA",
      "Los números del mercado deben venir del MLS u otra fuente confiable, no de la IA",
      "Tiempo: agentes con mucho trabajo, así que cada lección dura unos 5 minutos"
    ],
    prerequisites: "Ninguno. Quien no conoce los asistentes de IA puede tomar primero un curso de introducción a la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con datos comprobados de los registros, del vendedor y de tu propia visita", action: "escribir la descripción de un anuncio con ayuda de la IA y revisar cada dato línea por línea", standard: "quitando todo lo que no puedas comprobar" },
    { id: "O2", condition: "Con un anuncio o una publicidad escrita con IA", action: "identificar y reescribir las frases que muestran una preferencia sobre personas en lugar de describir la propiedad", standard: "para que cada línea describa solo la propiedad y sus características" },
    { id: "O3", condition: "Con un anuncio ya revisado", action: "crear una publicación para redes sociales y un correo de publicidad que cumplan las reglas de publicidad para agentes con licencia y de correo electrónico", standard: "con los datos de la licencia y de la agencia que se pidan, una dirección postal y una forma de darse de baja" },
    { id: "O4", condition: "Con tus notas sueltas de la semana", action: "escribir un informe para un vendedor o un comprador con la IA usando espacios en blanco para los datos privados", standard: "sin información privada del cliente en la herramienta de IA" },
    { id: "O5", condition: "Con un cliente interesado nuevo que aceptó recibir tus mensajes", action: "planear un seguimiento de 30 días con cuatro mensajes útiles y una próxima fecha registrada", standard: "con los enlaces de programas revisados en páginas oficiales" },
    { id: "O6", condition: "Con números del mercado que sacaste de tu MLS", action: "crear un resumen del mercado en palabras sencillas y una lista de verificación para una casa abierta", standard: "sin números inventados y con la fuente y la fecha agregadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Anuncios de propiedades y vivienda justa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escribir descripciones de propiedades con tus datos",
          minutes: 5,
          goal: "Escribir una descripción de propiedad correcta y atractiva a partir de datos verificados.",
          text: [
            "Una descripción de propiedad vende las características de la casa: distribución, mejoras, luz, espacio al aire libre y lo que hay cerca, como parques o transporte público. La IA escribe rápido, pero solo sabe lo que tú le dices.",
            "Dale solo datos verificados: \"3 recámaras, 2 baños, 1,450 pies cuadrados según registros del condado, construida en 1962, cocina remodelada en 2021, techo nuevo en 2023, patio cercado con limonero, a 0.3 millas del tren ligero.\" Pide una descripción de 120 palabras con un tono cálido y profesional, y una versión corta para redes sociales.",
            "Luego revisa cada dato: de dónde salen los pies cuadrados, el año de las mejoras, los nombres de las escuelas, las distancias. La IA puede agregar cosas que no existen (\"encimeras de granito\", \"vista al mar\"). Los datos falsos en un anuncio pueden traer quejas y problemas legales."
          ],
          steps: ["Reúne datos verificados de registros, del vendedor y de tu propia visita.", "Pide a la IA una descripción larga y una corta.", "Revisa cada dato línea por línea.", "Quita todo lo que no puedas verificar."],
          words: [["Descripción de propiedad", "el texto que describe una propiedad en venta o en renta."], ["MLS", "Multiple Listing Service: la base de datos que usan los agentes para compartir propiedades."], ["Dato verificado", "algo que confirmaste con registros, con el vendedor o en tu propia visita."]],
          slides: [
            { title: "Vende las características", bullets: ["Distribución, mejoras, luz, espacio al aire libre", "Parques y transporte cercanos"] },
            { title: "Entran datos, salen palabras", bullets: ["Dale a la IA solo datos verificados", "Pide versión larga y corta"] },
            { title: "Revisa línea por línea", bullets: ["Fuente de los pies cuadrados, años de mejoras, distancias", "La IA puede inventar características", "Los datos falsos pueden traer quejas"] }
          ],
          tryIt: "Escoge una propiedad que conozcas (o una de ejemplo). Escribe diez datos verificados, pide a la IA una descripción de 120 palabras y revisa cada línea, borrando lo que no esté en tus datos.",
          youCanNow: "escribir una descripción de propiedad con datos verificados y detectar los detalles inventados por la IA.",
          quickCheck: [
            { objective: "O1", q: "¿Qué sabe la IA de una casa cuando escribe un anuncio?", options: ["Solo lo que tú le dices", "Todo lo que hay en los registros del condado", "Lo que el vendedor le dijo a tu oficina", "Los datos actuales del MLS de la casa"], answer: 0, why: "La IA solo sabe lo que tú le das, así que solo le das datos comprobados." },
            { objective: "O1", q: "El anuncio de la IA dice \"cubiertas de granito\", pero no las viste en tu visita. ¿Qué haces?", options: ["Lo dejas; a los compradores les gusta el granito", "Lo quitas a menos que puedas comprobarlo", "Le pones \"tal vez\" adelante", "Le preguntas a la IA si está segura"], answer: 1, why: "Revisas cada dato y quitas todo lo que no puedas comprobar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Lenguaje de vivienda justa: lo que la IA no debe escribir",
          minutes: 6,
          goal: "Detectar y corregir lenguaje en los anuncios que muestra preferencia por una clase protegida.",
          text: [
            "La Ley federal de Vivienda Justa (Fair Housing Act) prohíbe la discriminación en la vivienda por raza, color, origen nacional, religión, sexo, situación familiar y discapacidad. La regla de HUD en 24 CFR 100.75 prohíbe anuncios, declaraciones y avisos que muestren preferencia, limitación o discriminación por estas razones, incluso con palabras, fotos o el lugar donde decides anunciar. Muchos estados, como California, protegen a más grupos; revisa los de tu estado.",
            "Describe la propiedad, no a las personas que quieres que vivan ahí. Frases riesgosas: \"perfecta para jóvenes profesionales\", \"ideal para una pareja\", \"no niños\", \"excelente vecindario cristiano\", \"depa de soltero\", \"a pasos de [un templo] para familias de esa fe\", \"para personas sin discapacidad\". Mejor: \"tres recámaras\", \"calle tranquila\", \"a 0.3 millas del transporte\", \"todo en un solo nivel\".",
            "La IA puede copiar patrones con prejuicios de lo que aprendió. Lee siempre lo que escribe buscando problemas de vivienda justa y pídele: \"Reescríbelo describiendo solo la propiedad y sus características.\" Si tienes dudas, pregunta a tu corredor o a un recurso de vivienda justa."
          ],
          steps: ["Lee cada línea preguntándote: ¿describe la propiedad o a las personas?", "Quita las palabras sobre quién debería vivir ahí.", "Cámbialas por características de la propiedad.", "Revisa también las fotos y dónde se pone el anuncio.", "Pregunta a tu corredor si tienes dudas."],
          words: [["Ley de Vivienda Justa", "la ley federal que prohíbe la discriminación en la vivienda por clases protegidas."], ["Clase protegida", "un grupo que la ley protege de la discriminación, como la raza o la situación familiar."], ["Situación familiar", "tener niños menores de 18 años en el hogar, o estar embarazada."], ["HUD", "el Departamento de Vivienda y Desarrollo Urbano de EE. UU."]],
          slides: [
            { title: "Clases protegidas federales", bullets: ["Raza, color, origen nacional, religión", "Sexo, situación familiar, discapacidad", "Muchos estados, como California, protegen a más"] },
            { title: "Los anuncios no deben mostrar preferencia", bullets: ["24 CFR 100.75: palabras, fotos, dónde se anuncia", "Describe la propiedad, no a las personas"] },
            { title: "Corrige frases riesgosas", bullets: ["\"Perfecta para jóvenes profesionales\" -> quítala", "\"No niños\" -> quítala", "Usa características: \"3 recámaras\", \"cerca del transporte\""] },
            { title: "La IA puede copiar prejuicios", bullets: ["Lee todo lo que escribe buscando problemas de vivienda justa", "Pide: \"Describe solo la propiedad\"", "¿Dudas? Pregunta a tu corredor"] }
          ],
          sources: [HUD_FHA, CFR_100_75],
          tryIt: "Pide a la IA una descripción de una casa de tamaño familiar. Marca cada frase que describe personas en vez de la propiedad y luego reescríbelas como características.",
          youCanNow: "detectar y corregir problemas de vivienda justa en el lenguaje de los anuncios, incluido el texto escrito por la IA.",
          quickCheck: [
            { objective: "O2", q: "¿Qué debe describir un anuncio?", options: ["El tipo de personas que deberían comprar", "La religión de los vecinos", "La propiedad y sus características", "Quién va a encajar en la calle"], answer: 2, why: "Describe la propiedad, no a las personas que quieres que vivan ahí." },
            { objective: "O2", q: "La IA escribe \"ideal para una pareja\". ¿Qué haces?", options: ["Lo dejas; suena amable", "Agregas \"o para una persona sola\"", "Lo mueves al final", "Lo cambias por características de la propiedad, como \"dos recámaras, calle tranquila\""], answer: 3, why: "\"Ideal para una pareja\" es una frase riesgosa sobre personas; describe la propiedad en su lugar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Promocionar tus propiedades y a ti mismo, según las reglas",
          minutes: 5,
          goal: "Crear publicaciones y correos para una propiedad que siguen las reglas de publicidad y de correo.",
          text: [
            "La IA puede convertir tu anuncio revisado en publicaciones, un correo para tu círculo de contactos, el texto de un volante y un guion corto de video. Usa los mismos datos verificados y la misma revisión de vivienda justa en cada pieza.",
            "El regulador de tu estado y tu corredor tienen reglas de publicidad para quienes tienen licencia; muchas veces piden mostrar tu número de licencia y el nombre de la correduría. En California, ese regulador es el Departamento de Bienes Raíces (DRE); revisa las reglas de tu propio estado y la política de tu correduría.",
            "Los correos de publicidad deben cumplir la ley CAN-SPAM: remitente y asunto honestos, decir que es un anuncio, incluir una dirección postal y una opción para darse de baja, y respetar las bajas en un plazo de 10 días hábiles."
          ],
          steps: ["Convierte el anuncio revisado en una publicación, un correo y un volante con la IA.", "Haz la revisión de vivienda justa en cada uno.", "Agrega los datos de licencia y correduría que piden tu estado y tu corredor.", "Agrega una dirección postal y una opción para darse de baja en los correos de publicidad."],
          words: [["Círculo de contactos", "las personas que conoces y que podrían comprar, vender o recomendarte: clientes anteriores, amigos, familia."], ["Titular de licencia", "una persona que tiene licencia de bienes raíces."]],
          slides: [
            { title: "Una propiedad, muchas piezas", bullets: ["Publicaciones, correo, volante, guion de video", "Mismos datos, misma revisión de vivienda justa"] },
            { title: "Reglas de publicidad con licencia", bullets: ["Muchas veces: número de licencia y nombre de la correduría", "California: Departamento de Bienes Raíces", "Revisa tu estado y la política de tu corredor"] },
            { title: "Lo básico del correo de publicidad", bullets: ["Remitente y asunto honestos; di que es un anuncio", "Dirección postal y opción para darse de baja", "Respeta las bajas en 10 días hábiles"] }
          ],
          sources: [DRE, CAN_SPAM],
          tryIt: "Convierte tu anuncio revisado en una publicación para redes sociales y un correo corto. Haz la revisión de vivienda justa y agrega los datos de licencia y correduría que piden tu estado y tu corredor.",
          youCanNow: "promocionar una propiedad en varios canales siguiendo las reglas de vivienda justa, de licencias y de correo.",
          quickCheck: [
            { objective: "O3", q: "¿Qué regla de correo electrónico cubre los correos de publicidad en esta lección?", options: ["CAN-SPAM", "El Food Code", "HIPAA", "La regla de reseñas de la FTC"], answer: 0, why: "Los correos de publicidad deben cumplir CAN-SPAM, incluidas una dirección postal y una forma de darse de baja." },
            { objective: "O3", q: "Conviertes tu anuncio en una publicación para redes sociales con la IA. ¿Qué más haces antes de publicar?", options: ["La publicas de inmediato; el anuncio ya estaba revisado", "Haces la revisión de vivienda justa y agregas los datos de la licencia y de la agencia que se pidan", "Quitas el precio", "Agregas una foto de archivo de otra casa"], answer: 1, why: "Cada pieza pasa por la misma revisión de vivienda justa y lleva los datos que piden tu estado y tu corredor." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Anuncios de propiedades y vivienda justa",
        questions: [
          { objective: "O1", q: "El anuncio de la IA dice \"vista al mar\", pero la casa no la tiene. ¿Qué haces?", options: ["Lo dejas; a los compradores les gusta", "Lo borras", "Agregas una foto del mar", "Le preguntas a la IA si es cierto"], answer: 1, why: "En un anuncio solo van datos verificados." },
          { objective: "O2", q: "¿Cuál es una clase protegida por la Ley federal de Vivienda Justa?", options: ["El color de pelo", "El equipo deportivo favorito", "La marca de carro", "La situación familiar"], answer: 3, why: "La situación familiar es una de las siete clases federales." },
          { objective: "O2", q: "¿Qué frase es un riesgo de vivienda justa?", options: ["\"Perfecta para jóvenes profesionales\"", "\"Tres recámaras\"", "\"Techo nuevo en 2023\"", "\"A 0.3 millas del tren ligero\""], answer: 0, why: "Muestra preferencia sobre quién debería vivir ahí." },
          { objective: "O2", q: "Las reglas de publicidad de vivienda justa pueden cubrir:", options: ["Solo espectaculares", "Solo palabras", "Palabras, fotos y dónde pones los anuncios", "Nada en internet"], answer: 2, why: "24 CFR 100.75 cubre palabras, imágenes y la elección de medios." },
          { objective: "O3", q: "¿Dónde revisas las reglas de publicidad para quienes tienen licencia en California?", options: ["Con un comprador", "En un chat de IA", "En el Departamento de Bienes Raíces y con tu corredor", "En un grupo de redes sociales"], answer: 2, why: "El DRE regula a quienes tienen licencia en California." }
        ]
      }
    },
    {
      name: "Capítulo 2: Clientes, interesados y datos del mercado",
      lessons: [
        {
          objectives: ["O4"],
          title: "Actualizaciones para clientes sin compartir información privada",
          minutes: 5,
          goal: "Convertir tus notas en actualizaciones claras para vendedores y compradores usando espacios en blanco.",
          text: [
            "Los clientes quieren saber de ti seguido. Una actualización semanal para el vendedor cubre visitas, comentarios, vistas en internet y siguientes pasos. Una actualización para el comprador cubre propiedades nuevas que le quedan, visitas programadas y lo que pasa en su rango de precio.",
            "Usa la IA para convertir notas sueltas en una actualización clara, con espacios en blanco: \"Convierte estas notas en una actualización semanal amable para [nombre del vendedor]: 6 visitas, 2 segundas visitas, los comentarios dicen que la cocina es excelente pero el patio necesita limpieza, 1,200 vistas en internet. Sugiere un siguiente paso.\"",
            "Nunca pongas datos privados de clientes en herramientas de IA: nombres completos con direcciones, información financiera, montos de preaprobación, números de Seguro Social, condiciones de una oferta o estrategia de negociación. Llénalos tú en tu correo o en tu CRM. Sigue las reglas de tu correduría sobre herramientas de IA."
          ],
          steps: ["Escribe notas sueltas al final de la semana.", "Cambia nombres y datos privados por espacios en blanco.", "Pide a la IA una actualización clara con un siguiente paso.", "Llena tú los datos reales y envíala."],
          words: [["CRM", "gestión de relaciones con clientes: un programa para llevar el control de clientes e interesados."], ["Espacio en blanco", "un hueco como [nombre del vendedor] que usas en lugar de datos privados reales."]],
          slides: [
            { title: "Los clientes quieren noticias", bullets: ["Vendedor: visitas, comentarios, vistas, siguiente paso", "Comprador: propiedades nuevas, visitas, cambios del mercado"] },
            { title: "Entran notas, sale la actualización", bullets: ["Notas sueltas con espacios en blanco", "Pide una actualización amable y un siguiente paso"] },
            { title: "Nunca pongas en la IA", bullets: ["Nombres con direcciones, finanzas, Seguro Social", "Montos de preaprobación y condiciones de ofertas", "Estrategia de negociación"] }
          ],
          tryIt: "Escribe notas sueltas de la semana de un vendedor de ejemplo. Usa espacios en blanco, pide a la IA una actualización semanal con un siguiente paso y revisa que no tenga datos privados.",
          youCanNow: "mandar actualizaciones claras a tus clientes hechas con la IA y mantener privada su información.",
          quickCheck: [
            { objective: "O4", q: "¿Qué cubre un informe semanal para el vendedor?", options: ["El monto de preaprobación del comprador", "Tu plan de negociación", "Visitas, comentarios, vistas en línea y siguientes pasos", "Las ofertas de otros clientes"], answer: 2, why: "Un informe para el vendedor cubre visitas, comentarios, vistas y siguientes pasos." },
            { objective: "O4", q: "Tus notas tienen el nombre completo del comprador y los términos de su oferta. ¿Qué haces antes de pegarlas en la IA?", options: ["Las pegas así", "Acortas las notas", "Primero las traduces", "Cambias los datos privados por espacios en blanco y después los llenas tú"], answer: 3, why: "Los datos privados de los clientes no entran en las herramientas de IA; los llenas tú." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Un plan de seguimiento para interesados",
          minutes: 5,
          goal: "Crear un plan de seguimiento de 30 días con cuatro mensajes para nuevos interesados.",
          text: [
            "La mayoría de los interesados no están listos hoy. Un seguimiento constante y útil hace que se acuerden de ti. Ejemplo de plan de 30 días: día 1, agradecimiento y una pregunta; día 7, un consejo útil (programas para quienes compran por primera vez que vale la pena revisar); día 14, una foto rápida del mercado en su zona; día 30, saludo para ver cómo van.",
            "Pide a la IA que escriba cada mensaje con tu estilo, con espacios para [nombre] y [zona]. Que sean útiles, no insistentes. Solo comparte enlaces a páginas oficiales de programas que tú revisaste.",
            "Lleva el control de los interesados en tu CRM o en una hoja de cálculo: nombre, de dónde llegó, fecha, etapa, fecha del próximo seguimiento. Solo manda correos o mensajes a personas que aceptaron recibirlos, y sigue las reglas de correo y mensajes de texto."
          ],
          steps: ["Planea cuatro contactos en 30 días.", "Pide a la IA un borrador de cada uno con espacios en blanco.", "Hazlos útiles y revisa los datos de cualquier programa en páginas oficiales.", "Anota la fecha del próximo seguimiento de cada interesado.", "Contacta solo a quienes aceptaron."],
          words: [["Interesado", "una persona que podría comprar, vender o rentar pero no ha firmado contigo."], ["Contacto", "una vez que te comunicas con un interesado: una llamada, un mensaje o un correo."]],
          slides: [
            { title: "Un plan de 30 días", bullets: ["Día 1: agradecimiento y una pregunta", "Día 7: consejo útil; Día 14: foto rápida del mercado", "Día 30: saludo para ver cómo van"] },
            { title: "Útil, no insistente", bullets: ["La IA escribe con [nombre] y [zona]", "Solo enlaces a páginas oficiales que revisaste"] },
            { title: "Lleva el control y respeta", bullets: ["Nombre, de dónde llegó, etapa, próxima fecha", "Contacta solo a quienes aceptaron"] }
          ],
          tryIt: "Pide a la IA un borrador de tu plan de seguimiento de 30 días con cuatro mensajes. Ajusta cada uno a tu estilo y arma una hoja de control de interesados con una columna de próximo seguimiento.",
          youCanNow: "llevar un plan de seguimiento constante y útil para nuevos interesados.",
          quickCheck: [
            { objective: "O5", q: "En el plan de ejemplo, ¿cuál es el mensaje del día 14?", options: ["Un resumen del mercado de su zona", "Una petición de recomendación", "Un contrato para firmar", "Una tarjeta de cumpleaños"], answer: 0, why: "El plan es: día 1 agradecimiento, día 7 consejo, día 14 resumen del mercado, día 30 saludo para ver cómo va." },
            { objective: "O5", q: "Conociste a alguien en una fiesta que nunca aceptó recibir tus mensajes. ¿Lo agregas a tu plan de mensajes de texto?", options: ["Sí, cualquier persona que conoces es un cliente interesado", "No, solo contactas a personas que aceptaron recibir tus mensajes", "Sí, si los mensajes son cortos", "Sí, pero solo los fines de semana"], answer: 1, why: "Solo mandas correos o mensajes a quien aceptó, y sigues las reglas de correo y de mensajes de texto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Resúmenes del mercado y preparación de visitas",
          minutes: 5,
          goal: "Convertir los números del mercado que sacaste en un resumen claro para el cliente y preparar una casa abierta.",
          text: [
            "Los clientes preguntan: \"¿Cómo está el mercado?\" Saca tú los números de tu MLS u otra fuente confiable: precio mediano, días en el mercado, número de propiedades activas y relación entre precio de venta y precio de lista, de los últimos meses.",
            "Pega los números (sin datos de clientes) en la IA y pide: \"Explica estos números del mercado a alguien que compra por primera vez, con palabras sencillas, en 150 palabras. No agregues números que no te di.\" Revisa que no haya inventado estadísticas y agrega tu fuente y la fecha. La IA no tiene datos del mercado al día confiables; tú sí.",
            "Para visitas y casas abiertas, pide a la IA una lista de control: antes (luces, temperatura, volantes, hoja de registro), durante (seguridad, saludo, notas), después (seguimiento en menos de 24 horas). Agrega las prácticas de seguridad de tu correduría."
          ],
          steps: ["Saca los números actuales de tu MLS o de una fuente confiable.", "Pide a la IA que los explique con palabras sencillas sin agregar números.", "Revisa cada número y agrega la fuente y la fecha.", "Pide a la IA una lista de control para la casa abierta y agrega pasos de seguridad."],
          words: [["Precio mediano", "el precio de en medio: la mitad de las casas se vendió en más y la otra mitad en menos."], ["Días en el mercado", "cuánto tardan las casas en venderse."], ["Relación venta-lista", "el precio de venta dividido entre el precio de lista, en porcentaje."]],
          slides: [
            { title: "Tú sacas los números", bullets: ["Precio mediano y días en el mercado", "Propiedades activas y relación venta-lista", "De tu MLS o de una fuente confiable"] },
            { title: "La IA explica", bullets: ["\"Explica con palabras sencillas; no agregues números\"", "Revisa cada número; agrega fuente y fecha"] },
            { title: "Lista para la casa abierta", bullets: ["Antes: luces, volantes, hoja de registro", "Durante: seguridad y notas", "Después: seguimiento en menos de 24 horas"] }
          ],
          tryIt: "Tarea final: arma tu kit de IA para agentes: una descripción de propiedad revisada, plantillas de actualización para vendedores y compradores, el plan de seguimiento de 30 días, un resumen del mercado con números que sacaste tú y una lista de control para casas abiertas.",
          youCanNow: "explicar con claridad los números del mercado y preparar visitas con ayuda de la IA, usando tus propios datos.",
          quickCheck: [
            { objective: "O6", q: "¿Qué compara la relación entre precio de venta y precio de lista?", options: ["La renta con la hipoteca", "Los días en el mercado con las propiedades en venta", "En cuánto se vendieron las casas con el precio en que se anunciaron", "Los agentes con los compradores"], answer: 2, why: "Compara el precio de venta con el precio de lista." },
            { objective: "O6", q: "El resumen del mercado de la IA incluye un número que tú no le diste. ¿Qué haces?", options: ["Lo dejas; la IA tiene datos en vivo", "Lo redondeas", "Lo mueves a una nota al pie", "Lo quitas y revisas cada número con tu fuente"], answer: 3, why: "La IA no tiene datos del mercado en vivo confiables, así que quitas los números inventados y agregas tu fuente y la fecha." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Clientes, interesados y datos del mercado",
        questions: [
          { objective: "O4", q: "¿Qué nunca debe ir en una herramienta de IA?", options: ["El monto de preaprobación y el nombre de un comprador", "\"6 visitas esta semana\"", "\"La cocina recibió buenos comentarios\"", "\"[nombre del vendedor]\""], answer: 0, why: "Los datos financieros de los clientes son privados." },
          { objective: "O5", q: "¿Qué es un buen seguimiento el día 7?", options: ["Nada", "Un insistente \"¡Firma ya!\"", "Su puntaje de crédito", "Un consejo útil para su situación"], answer: 3, why: "Los contactos útiles generan confianza." },
          { objective: "O6", q: "¿De dónde deben salir los números del mercado?", options: ["De la memoria de la IA", "De tu MLS u otra fuente confiable que consultaste", "De una suposición", "De un vecino"], answer: 1, why: "La IA no tiene datos del mercado al día confiables." },
          { objective: "O6", q: "La IA agrega \"los precios subieron 12% este año\", pero tú nunca le diste ese número. Tú:", options: ["Lo quitas", "Lo dejas", "Lo redondeas hacia arriba", "Lo publicas"], answer: 0, why: "No uses números que no diste ni revisaste." },
          { objective: "O6", q: "¿Qué es el precio mediano?", options: ["La renta promedio", "El precio más alto", "El precio de en medio: la mitad se vendió en más y la mitad en menos", "El precio de lista"], answer: 2, why: "La mediana es el valor de en medio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para agentes de bienes raíces",
    questions: [
      { objective: "O1", q: "¿Qué debes darle a la IA para escribir un anuncio de propiedad?", options: ["El número de Seguro Social del vendedor", "Solo datos verificados", "Suposiciones", "El anuncio de un competidor"], answer: 1, why: "Entran datos, salen palabras correctas." },
      { objective: "O1", q: "MLS significa:", options: ["Mi sitio de anuncios", "Sistema principal de préstamos", "Ley del mercado", "Multiple Listing Service (servicio de listados múltiples)"], answer: 3, why: "Los agentes comparten propiedades en el MLS." },
      { objective: "O1", q: "¿Por qué revisar los pies cuadrados en un anuncio hecho con IA?", options: ["No hace falta", "Para que sea más largo", "Por diversión", "Los datos falsos pueden traer quejas y problemas legales"], answer: 3, why: "Los datos equivocados causan problemas." },
      { objective: "O2", q: "¿Cuántas clases protegidas tiene la Ley federal de Vivienda Justa?", options: ["Tres", "Siete", "Diez", "Dos"], answer: 1, why: "Raza, color, origen nacional, religión, sexo, situación familiar, discapacidad." },
      { objective: "O2", q: "¿Cuál es una característica de la propiedad y no una preferencia sobre personas?", options: ["\"No niños\"", "\"Ideal para una pareja\"", "\"Todo en un solo nivel\"", "\"Excelente para jóvenes profesionales\""], answer: 2, why: "Describe la casa." },
      { objective: "O2", q: "¿Por qué la IA puede escribir problemas de vivienda justa?", options: ["Puede copiar patrones con prejuicios de lo que aprendió", "Conoce perfectamente la ley de vivienda justa", "Nunca se equivoca", "Es abogada"], answer: 0, why: "Revisa siempre lo que escribe la IA." },
      { objective: "O2", q: "¿California protege a más grupos que la ley federal?", options: ["Solo los fines de semana", "No, nunca", "Sí; revisa las reglas de tu estado", "Solo para rentas"], answer: 2, why: "Muchos estados, como California, protegen a más grupos." },
      { objective: "O3", q: "Los anuncios de quienes tienen licencia muchas veces deben incluir:", options: ["Número de licencia y nombre de la correduría, según las reglas del estado y del corredor", "La dirección de tu casa", "Nombres de clientes", "Nada"], answer: 0, why: "Revisa las reglas de publicidad de tu estado." },
      { objective: "O3", q: "Un correo de publicidad a tu círculo de contactos debe incluir:", options: ["Las condiciones de las ofertas de los clientes", "Una dirección postal y una opción para darse de baja", "Un remitente falso", "Nada"], answer: 1, why: "La ley CAN-SPAM exige las dos cosas." },
      { objective: "O3", q: "¿Qué es tu círculo de contactos?", options: ["Un prestamista", "Un objeto redondo", "El MLS", "Personas que conoces y que podrían comprar, vender o recomendarte"], answer: 3, why: "Clientes anteriores, amigos y familia." },
      { objective: "O4", q: "Una actualización semanal para el vendedor incluye:", options: ["Visitas, comentarios, vistas y un siguiente paso", "Las finanzas de otros clientes", "Tu contraseña", "Nada"], answer: 0, why: "Eso mantiene informados a los vendedores." },
      { objective: "O4", q: "¿Cuál es un espacio en blanco?", options: ["Un número de Seguro Social", "El nombre completo y la dirección del vendedor", "Un número de cuenta bancaria", "[nombre del vendedor]"], answer: 3, why: "Los espacios en blanco dejan fuera los datos privados." },
      { objective: "O4", q: "La estrategia de negociación debe:", options: ["Publicarse en internet", "Pegarse en chats", "Quedarse fuera de las herramientas de IA", "Compartirse con todos los compradores"], answer: 2, why: "Es información confidencial del cliente." },
      { objective: "O5", q: "Un plan de seguimiento de 30 días tiene más o menos:", options: ["Cien llamadas", "Cuatro contactos útiles", "Ninguno", "Mensajes insistentes cada día"], answer: 1, why: "Lo constante y útil funciona mejor." },
      { objective: "O5", q: "¿A quién le mandas correos o mensajes de publicidad?", options: ["A desconocidos", "A cualquiera cuyo número encuentres", "A listas compradas", "A personas que aceptaron recibirlos"], answer: 3, why: "Primero va el permiso." },
      { objective: "O5", q: "Antes de compartir el enlace de un programa para quienes compran por primera vez, tú:", options: ["Adivinas las reglas", "Confías en el enlace de la IA", "Revisas su página oficial", "No revisas nada"], answer: 2, why: "Los detalles de los programas cambian." },
      { objective: "O6", q: "Los días en el mercado miden:", options: ["Cuánto tardan las casas en venderse", "Las horas de la casa abierta", "Los días de comisión", "Los días festivos"], answer: 0, why: "Muestra la velocidad del mercado." },
      { objective: "O6", q: "Cuando la IA explica los números del mercado, debes decirle:", options: ["Inventa más números", "No agregues números que no te di", "Adivina el futuro", "Usa cualquier sitio web"], answer: 1, why: "Así se reducen las estadísticas inventadas." },
      { objective: "O6", q: "¿Cuándo debes dar seguimiento después de una casa abierta?", options: ["El año que viene", "En menos de 24 horas", "Nunca", "Solo si te llaman"], answer: 1, why: "El seguimiento rápido gana clientes." },
      { objective: "O2", q: "Este curso:", options: ["No es asesoría legal; consulta a HUD, al regulador de tu estado y a tu corredor", "Es asesoría legal", "Es una licencia", "Es un contrato"], answer: 0, why: "Las fuentes oficiales y tu corredor tienen la última palabra." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      5,
      7,
      11,
      13,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Anuncio correcto",
        objective: "O1",
        notYet: "El anuncio tiene un dato que no se comprobó, como algo que la casa no tiene.",
        meets: "Cada dato se revisa línea por línea con los registros, el vendedor o tu visita.",
        exceeds: "Anota la fuente de los datos clave, como los metros o pies cuadrados."
      },
      {
        name: "Lenguaje de vivienda justa",
        objective: "O2",
        notYet: "Una línea describe quién debería vivir ahí en lugar de la propiedad.",
        meets: "Cada línea describe solo la propiedad y sus características.",
        exceeds: "También revisa las fotos y dónde se pone el anuncio, y puede explicar cada corrección."
      },
      {
        name: "Informes privados para clientes",
        objective: "O4",
        notYet: "Un nombre de cliente con dirección, un dato financiero o términos de oferta entraron en la herramienta de IA.",
        meets: "Las plantillas de informes para vendedor y comprador usan espacios en blanco y tienen un siguiente paso claro.",
        exceeds: "Los espacios en blanco se llenan solo en el correo o el CRM del propio agente."
      },
      {
        name: "Plan de seguimiento de clientes",
        objective: "O5",
        notYet: "Menos de cuatro mensajes, o los mensajes son insistentes o no se revisaron.",
        meets: "Cuatro mensajes útiles en 30 días, con espacios en blanco y una próxima fecha registrada.",
        exceeds: "Los enlaces de programas se revisan en páginas oficiales y se anotan."
      },
      {
        name: "Resumen del mercado y casa abierta",
        objective: "O6",
        notYet: "El resumen tiene un número que no salió de tu fuente.",
        meets: "Resumen en palabras sencillas con tus propios números, la fuente y la fecha, más una lista de verificación para la casa abierta.",
        exceeds: "La lista incluye los pasos de seguridad de la agencia y el seguimiento en 24 horas."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Agentes que dicen usar un plan fijo de seguimiento de clientes en 30 días (encuesta de seguimiento)",
      "Agentes que dicen ahorrar tiempo cada semana en anuncios e informes para clientes",
      "Estudiantes que empiezan otro curso de Koach Learn para pequeños negocios en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratis",
      "Datos comprobados de un anuncio real o de ejemplo y números recientes de tu MLS",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Recuerda a los estudiantes que este curso no es asesoría legal; las preguntas de vivienda justa, publicidad y licencias van a HUD, al regulador del estado y a su corredor.",
      "Haz un ejercicio en grupo: lean en voz alta anuncios de ejemplo hechos con IA y encuentren juntos los riesgos de vivienda justa.",
      "Usa anuncios de ejemplo y espacios en blanco en clase; nunca pegues datos privados de clientes reales en herramientas de IA.",
      "Pide a los estudiantes que revisen la política de su agencia sobre herramientas de IA antes de usarlas con clientes.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
