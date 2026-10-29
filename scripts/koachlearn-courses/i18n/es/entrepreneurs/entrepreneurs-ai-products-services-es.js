"use strict";

// Koach Learn course (Spanish translation of entrepreneurs-ai-products-services). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "entrepreneurs-ai-products-services-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-products-services",
  category: "Entrepreneurs",
  name: "Crear productos y servicios con IA",
  skills: "Encontrar un problema que valga la pena resolver, Diseñar un servicio asistido por IA, Escribir una instrucción reutilizable, Probar con clientes reales, Ponerle precio y describirlo con honestidad",
  outcome: "diseñar un pequeño producto o servicio asistido por IA para un problema real de clientes, crear una versión sencilla que funcione con una herramienta de IA gratuita y una instrucción reutilizable, probarla con tres personas, y describirla y ponerle precio con honestidad.",
  about: [
    "Muchos negocios nuevos ya usan la IA para dar un servicio más rápido o más barato: ayuda con currículums, paquetes de redes sociales para tiendas locales, traducción de menús, ordenar la contabilidad, planes de comidas, planes de clase y más. Este curso te muestra cómo crear uno de la forma correcta.",
    "Vas a empezar por un problema real de clientes, diseñar dónde ayuda la IA y dónde revisa una persona, crear una versión sencilla con un asistente de IA gratuito y una instrucción reutilizable, probarla con personas reales, y luego ponerle precio y describirla sin prometer de más.",
    "Cada lección dura unos cinco minutos y termina con una tarea práctica. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. No hace falta saber programar."
  ],
  finalTask: "Haz una ficha de producto de una página para tu servicio asistido por IA: el problema del cliente, lo que recibe el cliente, los pasos (marcando cuáles hace la IA y cuáles son revisiones humanas), tu instrucción reutilizable, los resultados de las pruebas con tres personas, tu precio y cómo lo calculaste, y una descripción honesta sin afirmaciones que no puedas demostrar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios, nuevos y con experiencia, que quieren ofrecer un servicio que use la IA para entregar más rápido o más barato, como ayuda con el currículum, paquetes de redes sociales, traducción de menús o planes de clase.",
    startingPoint: "Usan un asistente de IA para escribir sus propios textos. La mayoría no ha diseñado un servicio basado en la IA, escrito una instrucción reutilizable, probado con clientes reales ni puesto precio a un trabajo hecho con ayuda de la IA.",
    gap: "Muchos servicios con IA empiezan por la herramienta y no por un problema real, se saltan la revisión de una persona, se cobran sin contar el tiempo de revisión y prometen de más sobre lo que hace la IA. Necesitan crear un servicio pequeño, probado y descrito con honestidad, para que los clientes lo paguen, obtengan buenos resultados y confíen en él.",
    constraints: [
      "No se necesita programar; palabras sencillas en todo el curso",
      "Dispositivos: una computadora con un asistente de IA gratuito y una hoja de cálculo",
      "Tiempo: unos cinco minutos por lección más pruebas con personas reales",
      "Lo que se dice de un producto debe ser cierto y tener pruebas (FTC); las preguntas de impuestos van a fuentes oficiales o a un contador",
      "Los datos privados de quienes prueban el servicio y de los clientes se mantienen fuera de la IA cuando sea posible"
    ],
    prerequisites: "\"Introducción a la IA para emprendedores\", o el uso frecuente de un asistente de IA para escribir textos del negocio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con cinco problemas de clientes que podrías resolver", action: "elegir un problema real, frecuente y molesto para un servicio asistido por IA", standard: "después de preguntarle al menos a una persona real cómo lo resuelve hoy" },
    { id: "O2", condition: "Con el problema que elegiste", action: "trazar el servicio como pasos numerados marcados como IA, persona o herramienta, con entradas y un entregable", standard: "con una revisión de una persona antes de entregar cualquier cosa" },
    { id: "O3", condition: "Con un asistente de IA gratuito", action: "escribir una instrucción reutilizable con el papel, las reglas, el formato de la respuesta y los espacios para datos", standard: "que dé resultados parejos con dos clientes de práctica" },
    { id: "O4", condition: "Con hasta tres personas reales", action: "hacer tu servicio, medir el tiempo de cada paso y anotar sus comentarios con sus propias palabras", standard: "escribiendo al menos un cambio y volviendo a probar" },
    { id: "O5", condition: "Con tus costos y los comentarios de quienes lo probaron", action: "calcular el precio de un paquete en una hoja de cálculo", standard: "cubriendo todos los costos, incluido el tiempo de revisión, y dejando una ganancia" },
    { id: "O6", condition: "Para tu servicio terminado", action: "escribir una descripción del producto que diga con honestidad qué hace la IA y qué revisa una persona", standard: "sin afirmaciones que no puedas probar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Diseñar el producto",
      lessons: [
        {
          objectives: ["O1"],
          title: "Empezar por un problema, no por la IA",
          minutes: 5,
          goal: "Elegir un problema real de clientes que un servicio asistido por IA podría resolver.",
          text: [
            "El error más común es empezar con \"quiero vender algo con IA\". Mejor empieza con un problema por el que la gente ya paga para resolverlo, o del que se queja seguido: \"Los restaurantes pequeños no tienen tiempo para publicar en redes sociales.\" \"Las personas que buscan trabajo no saben describir sus habilidades.\"",
            "Los buenos problemas son frecuentes, molestos y específicos. Pregúntate: ¿Quién tiene este problema? ¿Cómo lo resuelve ahora? ¿Cuánto le cuesta en dinero o en tiempo? ¿Me pagaría por resolverlo más rápido o mejor?",
            "La IA te puede ayudar a generar y ordenar ideas, pero habla con al menos tres personas reales que tengan el problema antes de crear nada."
          ],
          steps: ["Haz la lista de cinco problemas que has visto que les cuestan a personas o negocios.", "Pide a la IA que te ayude a calificar cada uno: qué tan seguido pasa, qué tanto molesta, cómo lo resuelven ahora.", "Elige el mejor.", "Habla con tres personas que lo tengan y pregúntales cómo lo manejan hoy."],
          words: [["Problema que vale la pena resolver", "un problema frecuente, molesto y específico en el que la gente ya gasta dinero o tiempo."]],
          slides: [
            { title: "Empieza con un problema", bullets: ["No con \"quiero vender IA\"", "Un problema que la gente paga por resolver o del que se queja"] },
            { title: "Los buenos problemas son", bullets: ["Frecuentes", "Molestos", "Específicos"] },
            { title: "Haz cuatro preguntas", bullets: ["¿Quién lo tiene?", "¿Cómo lo resuelve ahora?", "¿Cuánto le cuesta?", "¿Te pagaría?"] },
            { title: "Habla con personas reales", bullets: ["Al menos tres, antes de crear"] }
          ],
          tryIt: "Haz la lista de cinco problemas, usa la IA para ayudarte a calificarlos, elige uno y pregunta al menos a una persona real que tenga ese problema cómo lo maneja hoy.",
          youCanNow: "elegir un problema real de clientes para crear alrededor de él un servicio asistido por IA.",
          quickCheck: [
            { objective: "O1", q: "¿Qué hace que valga la pena crear un servicio alrededor de un problema de clientes?", options: ["Es frecuente, molesto y concreto", "Es algo por lo que la IA es famosa", "Solo tú lo tienes", "Pasa una vez cada diez años"], answer: 0, why: "La gente paga por resolver problemas frecuentes, molestos y concretos." },
            { objective: "O1", q: "Tienes una gran idea, pero no has hablado con nadie que tenga el problema. ¿Qué haces ahora?", options: ["Empezar a crearlo de inmediato", "Preguntar a personas reales cómo lo resuelven hoy", "Poner un precio", "Comprar anuncios"], answer: 1, why: "Hablar primero con personas reales te dice si el problema es real." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Diseñar dónde ayuda la IA y dónde revisas tú",
          minutes: 5,
          goal: "Trazar tu servicio como pasos, marcando cuáles hace la IA y cuáles una persona.",
          text: [
            "Un servicio asistido por IA es un conjunto de pasos. Ejemplo, un paquete de redes sociales para un restaurante: 1) recibir del dueño las fotos y los platillos especiales de la semana (persona), 2) hacer el borrador de los textos (IA), 3) revisar datos, precios y tono (persona), 4) hacer las imágenes en Canva (con ayuda de IA), 5) enviarlas para aprobación (persona), 6) programar las publicaciones (herramienta).",
            "Pon a una persona en cada paso donde un error podría dañar al cliente: datos, precios, salud, temas legales o de dinero, y todo lo que se publique con el nombre del cliente. Esta \"persona en el circuito\" es lo que pagan los clientes: la rapidez de la IA y tu criterio.",
            "Escribe lo que entra al principio (lo que necesitas del cliente) y lo que sale al final (exactamente lo que recibe)."
          ],
          steps: ["Escribe lo que necesitas del cliente al principio.", "Haz la lista de todos los pasos para dar el servicio.", "Marca cada paso: IA, persona o herramienta.", "Agrega una revisión humana antes de que algo le llegue al cliente.", "Escribe exactamente lo que recibe el cliente al final."],
          words: [["Persona en el circuito", "una persona revisa o aprueba el trabajo de la IA antes de que se use (human in the loop)."], ["Entregable", "lo terminado que recibe el cliente."]],
          slides: [
            { title: "Un servicio es un conjunto de pasos", bullets: ["Lo que entra del cliente", "Pasos de IA, de persona y de herramienta", "El entregable al final"] },
            { title: "Ejemplo: publicaciones de un restaurante", bullets: ["El dueño envía fotos y platillos especiales", "La IA hace los textos; tú revisas los datos", "Imágenes en Canva; el dueño aprueba"] },
            { title: "Persona en el circuito", bullets: ["Revisa datos, precios, salud, temas legales y de dinero", "Revisa todo lo que lleva el nombre del cliente", "La IA da rapidez, tú das criterio"] }
          ],
          tryIt: "Traza tu servicio como pasos numerados. Marca cada uno como IA, persona o herramienta, y agrega una revisión humana antes de la entrega. Escribe lo que entra y el entregable.",
          youCanNow: "diseñar un servicio asistido por IA con revisiones humanas claras.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un entregable?", options: ["La herramienta de IA que usas", "El precio", "Lo terminado que recibe el cliente", "Tu instrucción para la IA"], answer: 2, why: "El entregable es lo que recibe el cliente al final." },
            { objective: "O2", q: "El mapa de tu servicio envía directo al cliente los precios de un menú escritos por la IA. ¿Qué agregas?", options: ["Nada", "Una segunda IA que revise a la primera", "Una herramienta más rápida", "Una revisión de una persona antes de entregar"], answer: 3, why: "Una persona revisa los datos y los precios antes de que algo salga." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir una instrucción reutilizable",
          minutes: 6,
          goal: "Escribir una instrucción que puedas volver a usar con cada cliente.",
          text: [
            "Para dar la misma calidad cada vez, escribe una instrucción detallada y reutilízala. Debe incluir: el papel (\"Me estás ayudando a escribir publicaciones para restaurantes pequeños\"), las reglas (tono, extensión, lo que nunca debe hacer), el formato del resultado y un espacio para los datos de cada cliente.",
            "Reglas de ejemplo: \"Nunca inventes precios ni platillos del menú. Usa solo los platillos especiales que te dé. Marca con [REVISAR] todo lo que no tengas claro.\" Reglas así hacen que los errores de la IA sean más fáciles de detectar.",
            "Muchos asistentes te dejan guardar instrucciones personalizadas o crear un asistente guardado con tus instrucciones; búscalo en la configuración o en la ayuda de la herramienta. Si el tuyo no tiene esa opción, guarda la instrucción en un documento y pégala cada vez."
          ],
          steps: ["Escribe el papel.", "Escribe las reglas, incluido lo que la IA nunca debe hacer.", "Describe el formato del resultado.", "Agrega [espacios] para los datos de cada cliente.", "Pruébala con dos clientes imaginarios y ajusta las reglas."],
          words: [["Instrucción reutilizable", "una instrucción detallada que puedes volver a usar y que fija el papel, las reglas y el formato del resultado de la IA."], ["Espacio", "un lugar marcado en la instrucción donde pegas los datos de cada cliente."]],
          slides: [
            { title: "Una instrucción, la misma calidad", bullets: ["Papel", "Reglas", "Formato del resultado", "[Espacios] para los datos del cliente"] },
            { title: "Reglas que detectan errores", bullets: ["\"Nunca inventes precios ni platillos.\"", "\"Usa solo los datos que te doy.\"", "\"Marca con [REVISAR] lo que no tengas claro.\""] },
            { title: "Guárdala", bullets: ["Algunos asistentes guardan instrucciones personalizadas", "O guárdala en un documento y pégala"] }
          ],
          tryIt: "Escribe tu instrucción con papel, reglas, formato y espacios. Pruébala con los datos de dos clientes imaginarios y mejora las reglas donde el resultado salió mal.",
          youCanNow: "escribir una instrucción reutilizable que dé resultados parejos con cada cliente.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un espacio para datos en una instrucción para la IA?", options: ["Un hueco que llenas con los datos de cada cliente", "Una regla sobre el tono", "Un plan de pagos", "El nombre de la IA"], answer: 0, why: "Los espacios te permiten volver a usar una instrucción con cada cliente." },
            { objective: "O3", q: "Tu instrucción sigue inventando horarios de atención. ¿Qué cambias?", options: ["Nada; lo corriges a mano cada vez", "Agregar una regla: nunca inventes horarios; marca lo que no sepas con [REVISAR]", "Usar un papel más largo", "Quitar la sección de formato"], answer: 1, why: "Las reglas claras detienen los errores repetidos de la IA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Diseñar el producto",
        questions: [
          { objective: "O1", q: "¿Cuál es el mejor punto de partida para un servicio con IA?", options: ["La herramienta de IA más nueva", "Un problema real por el que la gente ya paga para resolverlo", "Un nombre llamativo", "Un logo"], answer: 1, why: "Los productos que resuelven problemas reales y molestos se venden." },
          { objective: "O1", q: "¿Con cuántas personas reales debes hablar antes de crear algo?", options: ["Solo con la IA", "Con ninguna", "Solo contigo", "Con al menos tres"], answer: 3, why: "Las conversaciones reales confirman que el problema es real." },
          { objective: "O2", q: "¿Dónde debe revisar una persona el trabajo de la IA?", options: ["Antes de que salga cualquier cosa con datos, precios o el nombre del cliente", "En ningún lado", "Solo al principio", "Solo si el cliente se queja"], answer: 0, why: "Las revisiones humanas detectan los errores antes de que dañen al cliente." },
          { objective: "O3", q: "¿Qué regla va en una instrucción para publicaciones de restaurantes?", options: ["\"Usa los precios que quieras.\"", "\"Inventa platillos especiales si hace falta.\"", "\"Nunca inventes precios ni platillos del menú.\"", "\"Sáltate los datos del dueño.\""], answer: 2, why: "Las reglas que evitan datos inventados reducen los errores." },
          { objective: "O2", q: "¿Qué es un entregable?", options: ["Un modelo de IA", "Un camión de reparto", "Lo terminado que recibe el cliente", "Un formulario de impuestos"], answer: 2, why: "Es exactamente lo que recibe el cliente al final." }
        ]
      }
    },
    {
      name: "Capítulo 2: Probar, poner precio y lanzar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Probar con tres personas reales",
          minutes: 5,
          goal: "Hacer tu servicio para tres personas y aprender qué arreglar.",
          text: [
            "Antes de vender a muchos, haz el servicio completo para tres personas reales, gratis o a un precio de prueba. Fíjate en: dónde se equivocó la IA, dónde gastaste más tiempo y qué le gustó o no entendió el cliente.",
            "Hazle tres preguntas a cada persona que lo prueba: \"¿Qué fue lo más útil?\" \"¿Qué fue confuso o estuvo mal?\" \"¿Pagarías por esto, y cuánto?\" Anota sus palabras exactas.",
            "Mide el tiempo de cada paso. Si las revisiones humanas tardan más que hacer el trabajo a mano, cambia la instrucción o los pasos. Arregla los problemas principales y vuelve a probar."
          ],
          steps: ["Busca a tres personas que tengan el problema.", "Haz el servicio completo para cada una.", "Mide el tiempo de cada paso y anota cada error de la IA.", "Haz las tres preguntas y anota sus respuestas.", "Arregla los problemas más grandes y actualiza tu instrucción."],
          words: [["Persona de prueba", "una persona real que prueba tu producto antes que los demás y te da comentarios honestos."], ["Comentarios", "lo que la gente te dice sobre lo que funcionó y lo que no."]],
          slides: [
            { title: "Prueba antes de vender", bullets: ["Tres personas reales", "Gratis o a un precio de prueba", "Haz el servicio completo"] },
            { title: "Fíjate en", bullets: ["Los errores de la IA", "Los pasos que tardan más", "Lo que les gustó o no entendieron"] },
            { title: "Haz tres preguntas", bullets: ["¿Qué fue lo más útil?", "¿Qué fue confuso o estuvo mal?", "¿Pagarías, y cuánto?"] }
          ],
          tryIt: "Haz tu servicio para al menos una persona real (tres si puedes). Mide el tiempo de cada paso, anota los errores de la IA, haz las tres preguntas y escribe un cambio que vas a hacer.",
          youCanNow: "probar un servicio asistido por IA con personas reales y mejorarlo con sus comentarios.",
          quickCheck: [
            { objective: "O4", q: "¿Qué debes anotar cuando quienes prueban el servicio dan sus comentarios?", options: ["Solo los comentarios bonitos", "Tu propio resumen", "Sus palabras exactas", "Nada; solo recordarlo"], answer: 2, why: "Las palabras exactas muestran lo que de verdad valoran y preocupa a los clientes." },
            { objective: "O4", q: "Dos personas que lo probaron dicen que el resultado tardó demasiado. ¿Qué haces?", options: ["Ignorarlas", "Subir el precio", "Dejar de ofrecer el servicio", "Encontrar el paso lento, cambiarlo y volver a probar"], answer: 3, why: "Las pruebas sirven para encontrar y corregir problemas, y luego volver a probar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ponerle precio a tu servicio asistido por IA",
          minutes: 5,
          goal: "Poner un precio que cubra tus costos y tu tiempo y que vaya con lo que los clientes pagarán.",
          text: [
            "Suma tus costos por cliente: tu tiempo (incluido el de revisar el trabajo de la IA), las suscripciones a herramientas repartidas entre los clientes y cualquier otro costo. Luego compáralo con lo que los clientes pagan hoy por otras formas de resolver el problema y con lo que dijeron las personas de prueba que pagarían.",
            "No pongas el precio solo según lo rápido que lo hace la IA. Los clientes pagan por el resultado y por tu criterio, no por tus minutos. Un paquete (\"12 publicaciones al mes\") muchas veces se vende más fácil que una tarifa por hora.",
            "Pide a la IA que te ayude con las cuentas y con ideas de paquetes, pero revisa tú cada número en una hoja de cálculo. Para impuestos y registro del negocio, revisa fuentes oficiales como irs.gov (el sitio del IRS, la agencia de impuestos de EE. UU.) y la oficina de negocios de tu estado, o consulta a un contador."
          ],
          steps: ["Haz la lista de tus costos por cliente, incluido el tiempo de revisión.", "Averigua cuánto pagan hoy los clientes por otras soluciones.", "Anota lo que dijeron las personas de prueba que pagarían.", "Elige un paquete y un precio, y revisa tú las cuentas.", "Asegúrate de que el precio cubra tus costos y deje algo de ganancia."],
          words: [["Paquete", "un conjunto fijo de trabajo por un precio fijo, como 12 publicaciones al mes."], ["Ganancia", "lo que queda después de pagar todos tus costos."]],
          slides: [
            { title: "Suma tus costos", bullets: ["Tu tiempo, incluido revisar el trabajo de la IA", "Suscripciones repartidas entre los clientes", "Otros costos"] },
            { title: "Mira el mercado", bullets: ["Lo que pagan los clientes por otras soluciones", "Lo que dijeron las personas de prueba que pagarían"] },
            { title: "Ponle precio al resultado", bullets: ["Los clientes pagan por resultados y criterio", "Los paquetes se venden más fácil", "Revisa tú las cuentas"] }
          ],
          sources: [{ name: "IRS: centro de impuestos para trabajadores por cuenta propia (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Calcula tu costo por cliente en una hoja de cálculo, compáralo con lo que dijeron las personas de prueba y pon un precio de paquete que deje ganancia.",
          youCanNow: "ponerle a un servicio asistido por IA un precio que cubra tus costos y vaya con el mercado.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es la ganancia?", options: ["Lo que queda después de pagar todos los costos", "El total que pagan los clientes", "El costo de la herramienta de IA", "El tiempo que ahorras"], answer: 0, why: "La ganancia es el dinero que queda después de cubrir todos los costos." },
            { objective: "O5", q: "Tu precio cubre la herramienta de IA, pero no la hora que pasas revisando. ¿Qué haces?", options: ["Dejar el precio igual", "Sumar tu tiempo de revisión al costo y volver a poner el precio", "Dejar de revisar", "Cobrar más solo a los clientes nuevos"], answer: 1, why: "El tiempo de revisión es un costo real que el precio debe cubrir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Describirlo con honestidad",
          minutes: 5,
          goal: "Escribir una descripción del producto que diga la verdad sobre lo que hace la IA.",
          text: [
            "Los clientes confían más en ti cuando eres claro sobre cómo funciona el servicio: \"Usamos IA para hacer el borrador, y una persona revisa cada publicación antes de que salga.\" No finjas que la IA hace más de lo que hace, ni que una persona hace el trabajo cuando lo hace la IA.",
            "La FTC (la Comisión Federal de Comercio de EE. UU.) hace cumplir las reglas de publicidad veraz contra las afirmaciones engañosas sobre IA. En 2026 dictó órdenes finales contra empresas que decían que un servicio de marketing con IA escuchaba las conversaciones de la gente a través de dispositivos inteligentes cuando no era así. Lo que digas sobre lo que hace tu IA, qué tan exacta es o los resultados que van a obtener los clientes debe ser cierto y estar respaldado por pruebas.",
            "Evita \"garantizado\", \"100% exacto\" y \"reemplaza a un abogado, médico o contador\". Habla con un abogado si no estás seguro de si una afirmación está permitida."
          ],
          steps: ["Escribe con palabras sencillas lo que recibe el cliente.", "Di con honestidad dónde se usa la IA y dónde revisa una persona.", "Quita cualquier afirmación que no puedas demostrar con pruebas.", "Pide a la IA que lo revise: \"Señala cualquier afirmación que pueda ser engañosa.\"", "Pregunta a un abogado si no estás seguro."],
          words: [["Afirmación engañosa", "algo que le da a la gente una idea falsa, aunque cada palabra sea técnicamente cierta."], ["Pruebas", "ensayos, resultados o registros que demuestran una afirmación."]],
          slides: [
            { title: "Sé claro sobre cómo funciona", bullets: ["\"La IA hace el borrador, una persona revisa cada publicación\"", "No exageres lo que hace la IA"] },
            { title: "La FTC y lo que se dice de la IA", bullets: ["Las reglas de publicidad veraz aplican a la IA", "Órdenes de 2026 por afirmaciones falsas sobre IA", "Las afirmaciones necesitan pruebas"] },
            { title: "Evita", bullets: ["\"Garantizado\" o \"100% exacto\"", "\"Reemplaza a un abogado, médico o contador\"", "¿Dudas? Pregunta a un abogado"] }
          ],
          sources: [{ name: "FTC: Lo básico de la publicidad y el marketing (en inglés)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: órdenes contra Cox Media Group y otras dos empresas por afirmaciones de marketing con IA (2026, en inglés)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }],
          tryIt: "Tarea final: escribe la descripción honesta de tu producto y luego arma tu ficha de producto de una página: problema, entregable, pasos (IA o persona), instrucción, resultados de las pruebas, precio y descripción.",
          youCanNow: "diseñar, probar, ponerle precio y describir con honestidad un producto o servicio asistido por IA.",
          quickCheck: [
            { objective: "O6", q: "¿Qué afirmación sobre el producto es honesta?", options: ["\"100% exacto, garantizado\"", "\"Totalmente automático, sin personas\" cuando una persona lo revisa todo", "\"La IA hace el borrador y una persona revisa cada parte antes de entregarla\"", "\"Mejor que cualquier experto humano\""], answer: 2, why: "Dice la verdad sobre lo que hace la IA y lo que hacen las personas." },
            { objective: "O6", q: "No estás seguro de si una afirmación de tu página de ventas está permitida. ¿Qué haces?", options: ["Dejarla y ver qué pasa", "Hacerla más grande", "Pedirle a la IA que la apruebe", "Quitarla o consultarlo con un abogado"], answer: 3, why: "Si tienes dudas, déjala fuera o busca asesoría legal." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Probar, poner precio y lanzar",
        questions: [
          { objective: "O4", q: "¿Qué pregunta debes hacer a las personas de prueba?", options: ["\"¿Pagarías por esto, y cuánto?\"", "\"¿Cuál es la contraseña de tu banco?\"", "\"¿Me escribes una reseña a cambio de un descuento?\"", "\"¿Te gusta la IA?\""], answer: 0, why: "Te dice si hay un mercado y un precio reales." },
          { objective: "O4", q: "Las revisiones humanas tardan más que hacer el trabajo a mano. ¿Qué debes hacer?", options: ["Dejar de probar", "Quitar todas las revisiones", "Cobrar menos", "Cambiar la instrucción o los pasos"], answer: 3, why: "Mejora el proceso para que la IA de verdad ahorre tiempo." },
          { objective: "O5", q: "Al poner precio, ¿qué costo suele olvidar la gente?", options: ["El color del logo", "El tiempo de revisar el trabajo de la IA", "El alquiler del cliente", "Las ganancias de la empresa de IA"], answer: 1, why: "Revisar es trabajo real y se debe incluir en el precio." },
          { objective: "O6", q: "¿Qué descripción es honesta?", options: ["\"La IA hace el borrador y una persona revisa cada publicación antes de que salga.\"", "\"IA 100% exacta, garantizado.\"", "\"Reemplaza a tu contador.\"", "\"Hecho a mano por nuestro equipo\" cuando lo hace la IA"], answer: 0, why: "Dice con verdad lo que hace la IA y lo que hace una persona." },
          { objective: "O6", q: "Las reglas de la FTC sobre lo que se dice de la IA exigen que las afirmaciones sean:", options: ["Cortas", "Emocionantes", "Ciertas y respaldadas por pruebas", "Aprobadas por la herramienta de IA"], answer: 2, why: "La publicidad veraz también aplica a lo que se dice de la IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Crear productos y servicios con IA",
    questions: [
      { objective: "O1", q: "El error más común al crear un producto con IA es:", options: ["Hablar con los clientes", "Empezar por la IA en lugar de por un problema del cliente", "Probar", "Poner un precio"], answer: 1, why: "Empieza por el problema, no por la herramienta." },
      { objective: "O1", q: "Los buenos problemas para resolver son:", options: ["Los que nadie paga", "Raros y vagos", "Solo los tuyos", "Frecuentes, molestos y específicos"], answer: 3, why: "Esos problemas crean demanda." },
      { objective: "O1", q: "\"¿Cómo lo resuelven ahora?\" te ayuda a saber:", options: ["Nada útil", "Su contraseña", "Su edad", "Contra qué compites y cuánto les cuesta"], answer: 3, why: "Las soluciones actuales muestran el valor de la tuya." },
      { objective: "O2", q: "En el ejemplo del restaurante, ¿quién revisa los precios de los textos?", options: ["Nadie", "Una persona", "La IA se revisa sola", "Los clientes del cliente"], answer: 1, why: "Los precios son datos que necesitan una revisión humana." },
      { objective: "O2", q: "\"Persona en el circuito\" significa:", options: ["Un círculo en una gráfica", "La IA reemplaza a todas las personas", "Una persona revisa o aprueba el trabajo de la IA antes de que se use", "Una línea de atención al cliente"], answer: 2, why: "Esa es la definición." },
      { objective: "O2", q: "En el mapa de tu servicio, lo que entra es:", options: ["Lo que necesitas del cliente al principio", "El producto final", "Tu ganancia", "La empresa de IA"], answer: 0, why: "Lo que entra llega; los entregables salen." },
      { objective: "O3", q: "Una instrucción reutilizable incluye:", options: ["Tus datos bancarios", "Solo un saludo", "Papel, reglas, formato del resultado y espacios", "Una pregunta al azar"], answer: 2, why: "Esas partes hacen parejos los resultados." },
      { objective: "O3", q: "¿Por qué agregar \"Marca con [REVISAR] todo lo que no tengas claro\"?", options: ["Hace más fácil detectar los errores de la IA", "Hace el texto más largo", "Lo exige la ley", "Esconde los errores"], answer: 0, why: "Las marcas te muestran dónde mirar." },
      { objective: "O3", q: "Si tu herramienta de IA no puede guardar instrucciones, puedes:", options: ["Rendirte", "Guardar la instrucción en un documento y pegarla cada vez", "Reescribirla de memoria distinta cada vez", "Comprar cinco herramientas"], answer: 1, why: "Un documento guardado la mantiene igual." },
      { objective: "O4", q: "Probar con tres personas reales te ayuda a encontrar:", options: ["Nada", "Sus contraseñas", "Logos nuevos", "Errores de la IA, pasos lentos y lo que valoran los clientes"], answer: 3, why: "Las pruebas muestran qué arreglar antes de vender." },
      { objective: "O4", q: "Cuando las personas de prueba te dan comentarios, debes:", options: ["Anotar sus palabras exactas", "Discutir con ellas", "Ignorarlos", "Pedirles que publiquen reseñas falsas"], answer: 0, why: "Las palabras exactas muestran lo que de verdad les importa." },
      { objective: "O4", q: "Después de arreglar los problemas que encontraste al probar, debes:", options: ["Multiplicar el precio por diez", "No volver a cambiar nada", "Borrar la instrucción", "Volver a probar"], answer: 3, why: "Volver a probar confirma que los arreglos funcionaron." },
      { objective: "O5", q: "Los clientes pagan sobre todo por:", options: ["Tus suscripciones a herramientas", "Los minutos que te ahorra la IA", "El resultado y tu criterio", "Tu logo"], answer: 2, why: "Ponle precio al resultado, no solo al tiempo." },
      { objective: "O5", q: "Un precio de paquete es:", options: ["Un costo de envío", "Un conjunto fijo de trabajo por un precio fijo", "Un código de descuento", "Un impuesto"], answer: 1, why: "Los paquetes son fáciles de entender para los clientes." },
      { objective: "O5", q: "¿Quién debe revisar las cuentas del precio?", options: ["Tu competidor", "Solo la IA", "Nadie", "Tú, en una hoja de cálculo"], answer: 3, why: "Las cuentas de la IA pueden estar mal." },
      { objective: "O5", q: "La ganancia es:", options: ["Tu factura de herramientas", "Todo el dinero que pagan los clientes", "Lo que queda después de pagar todos los costos", "Tu precio"], answer: 2, why: "Ganancia = ingresos menos costos." },
      { objective: "O5", q: "Para preguntas de impuestos sobre tu nuevo servicio, revisa:", options: ["Fuentes oficiales como irs.gov o a un contador", "Solo un chat de IA", "Un comentario en redes sociales", "A tu cliente"], answer: 0, why: "Las fuentes oficiales y los profesionales son confiables." },
      { objective: "O6", q: "¿Qué afirmación debes evitar?", options: ["\"Una persona revisa cada publicación\"", "\"100% exacto, garantizado\"", "\"12 publicaciones al mes\"", "\"Aprobado por ti antes de publicar\""], answer: 1, why: "Las afirmaciones absolutas son difíciles de demostrar." },
      { objective: "O6", q: "En 2026 la FTC dictó órdenes finales contra empresas que:", options: ["Usaban hojas de cálculo", "Hicieron afirmaciones falsas sobre lo que hacía su servicio de marketing con IA", "Contrataron diseñadores", "Pagaron sus impuestos a tiempo"], answer: 1, why: "Decían que la IA escuchaba conversaciones cuando no era así." },
      { objective: "O6", q: "Si no estás seguro de si una afirmación de marketing está permitida, debes:", options: ["Hablar con un abogado", "Usarla de todos modos", "Preguntarle a la IA y publicar lo que diga", "Ponerla más grande"], answer: 0, why: "Un abogado te puede aconsejar sobre tu caso." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      4,
      5,
      6,
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
        name: "Problema del cliente",
        objective: "O1",
        notYet: "El problema es vago o no se revisó con una persona real.",
        meets: "Un problema concreto y lo que recibe el cliente, revisado con personas reales.",
        exceeds: "Incluye cómo lo resuelven ahora y cuánto les cuesta."
      },
      {
        name: "Pasos y revisiones de una persona",
        objective: "O2",
        notYet: "Los pasos no están marcados, o nada se revisa antes de entregar.",
        meets: "Pasos numerados marcados como IA, persona o herramienta, con una revisión de una persona antes de entregar.",
        exceeds: "Dice exactamente qué revisa la persona en cada punto de revisión."
      },
      {
        name: "Instrucción para la IA",
        objective: "O3",
        notYet: "Faltan reglas o espacios, o los resultados cambian mucho.",
        meets: "Papel, reglas, formato y espacios, con resultados parejos.",
        exceeds: "Usa marcas [REVISAR] y tiene reglas agregadas a partir de los errores de las pruebas."
      },
      {
        name: "Resultados de las pruebas",
        objective: "O4",
        notYet: "Ninguna persona real lo probó, o no se hizo ningún cambio.",
        meets: "Resultados de pruebas con personas reales, sus propias palabras y al menos un cambio.",
        exceeds: "Tres personas lo probaron y una segunda prueba mostró que el cambio funcionó."
      },
      {
        name: "Precio y descripción",
        objective: "O6",
        notYet: "El precio no cuenta el tiempo de revisión, o la descripción promete de más.",
        meets: "El precio de un paquete que cubre todos los costos con ganancia, y una descripción honesta.",
        exceeds: "Muestra las cuentas de la hoja de cálculo y dice con claridad qué hace la IA y qué hace una persona."
      }
    ]
  },
  evaluation: {
    results: [
      "Dueños que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que venden su servicio asistido por IA a un primer cliente que paga en 30 días (encuesta de seguimiento)",
      "Satisfacción de los clientes o pedidos repetidos que reportan los dueños",
      "Participantes que empiezan otro curso de Koach Learn para emprendedores en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con un asistente de IA gratuito",
      "Una hoja de cálculo para medir tiempos y poner precios",
      "Acceso a hasta tres personas reales que tengan el problema",
      "Entre 60 y 75 minutos para las lecciones y las comprobaciones, más tiempo para las pruebas con personas reales"
    ],
    facilitatorNotes: [
      "Pide a los participantes que presenten al grupo el problema que eligieron antes de crear nada, y deja que los compañeros pregunten qué tan seguido pasa.",
      "Si es difícil encontrar personas reales para probar, forma parejas para que actúen como clientes de prueba entre sí, y luego hagan seguimiento con una persona real.",
      "Recuerda a los participantes que no peguen en la IA los datos privados de quienes prueban el servicio cuando puedan usar marcadores.",
      "Revisa cada descripción del producto en busca de afirmaciones que no se pueden probar; envía las preguntas de impuestos y legales al profesional adecuado.",
      "Califica la ficha del producto con la rúbrica, una fila en Todavía no a la vez."
    ]
  }
};
