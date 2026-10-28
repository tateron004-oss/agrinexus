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
  chapters: [
    {
      name: "Capítulo 1: Diseñar el producto",
      lessons: [
        {
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
          youCanNow: "elegir un problema real de clientes para crear alrededor de él un servicio asistido por IA."
        },
        {
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
          youCanNow: "diseñar un servicio asistido por IA con revisiones humanas claras."
        },
        {
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
          youCanNow: "escribir una instrucción reutilizable que dé resultados parejos con cada cliente."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Diseñar el producto",
        questions: [
          { q: "¿Cuál es el mejor punto de partida para un servicio con IA?", options: ["La herramienta de IA más nueva", "Un problema real por el que la gente ya paga para resolverlo", "Un nombre llamativo", "Un logo"], answer: 1, why: "Los productos que resuelven problemas reales y molestos se venden." },
          { q: "¿Con cuántas personas reales debes hablar antes de crear algo?", options: ["Solo con la IA", "Con ninguna", "Solo contigo", "Con al menos tres"], answer: 3, why: "Las conversaciones reales confirman que el problema es real." },
          { q: "¿Dónde debe revisar una persona el trabajo de la IA?", options: ["Antes de que salga cualquier cosa con datos, precios o el nombre del cliente", "En ningún lado", "Solo al principio", "Solo si el cliente se queja"], answer: 0, why: "Las revisiones humanas detectan los errores antes de que dañen al cliente." },
          { q: "¿Qué regla va en una instrucción para publicaciones de restaurantes?", options: ["\"Usa los precios que quieras.\"", "\"Inventa platillos especiales si hace falta.\"", "\"Nunca inventes precios ni platillos del menú.\"", "\"Sáltate los datos del dueño.\""], answer: 2, why: "Las reglas que evitan datos inventados reducen los errores." },
          { q: "¿Qué es un entregable?", options: ["Un modelo de IA", "Un camión de reparto", "Lo terminado que recibe el cliente", "Un formulario de impuestos"], answer: 2, why: "Es exactamente lo que recibe el cliente al final." }
        ]
      }
    },
    {
      name: "Capítulo 2: Probar, poner precio y lanzar",
      lessons: [
        {
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
          youCanNow: "probar un servicio asistido por IA con personas reales y mejorarlo con sus comentarios."
        },
        {
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
          youCanNow: "ponerle a un servicio asistido por IA un precio que cubra tus costos y vaya con el mercado."
        },
        {
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
          youCanNow: "diseñar, probar, ponerle precio y describir con honestidad un producto o servicio asistido por IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Probar, poner precio y lanzar",
        questions: [
          { q: "¿Qué pregunta debes hacer a las personas de prueba?", options: ["\"¿Pagarías por esto, y cuánto?\"", "\"¿Cuál es la contraseña de tu banco?\"", "\"¿Me escribes una reseña a cambio de un descuento?\"", "\"¿Te gusta la IA?\""], answer: 0, why: "Te dice si hay un mercado y un precio reales." },
          { q: "Las revisiones humanas tardan más que hacer el trabajo a mano. ¿Qué debes hacer?", options: ["Dejar de probar", "Quitar todas las revisiones", "Cobrar menos", "Cambiar la instrucción o los pasos"], answer: 3, why: "Mejora el proceso para que la IA de verdad ahorre tiempo." },
          { q: "Al poner precio, ¿qué costo suele olvidar la gente?", options: ["El color del logo", "El tiempo de revisar el trabajo de la IA", "El alquiler del cliente", "Las ganancias de la empresa de IA"], answer: 1, why: "Revisar es trabajo real y se debe incluir en el precio." },
          { q: "¿Qué descripción es honesta?", options: ["\"La IA hace el borrador y una persona revisa cada publicación antes de que salga.\"", "\"IA 100% exacta, garantizado.\"", "\"Reemplaza a tu contador.\"", "\"Hecho a mano por nuestro equipo\" cuando lo hace la IA"], answer: 0, why: "Dice con verdad lo que hace la IA y lo que hace una persona." },
          { q: "Las reglas de la FTC sobre lo que se dice de la IA exigen que las afirmaciones sean:", options: ["Cortas", "Emocionantes", "Ciertas y respaldadas por pruebas", "Aprobadas por la herramienta de IA"], answer: 2, why: "La publicidad veraz también aplica a lo que se dice de la IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Crear productos y servicios con IA",
    questions: [
      { q: "El error más común al crear un producto con IA es:", options: ["Hablar con los clientes", "Empezar por la IA en lugar de por un problema del cliente", "Probar", "Poner un precio"], answer: 1, why: "Empieza por el problema, no por la herramienta." },
      { q: "Los buenos problemas para resolver son:", options: ["Los que nadie paga", "Raros y vagos", "Solo los tuyos", "Frecuentes, molestos y específicos"], answer: 3, why: "Esos problemas crean demanda." },
      { q: "\"¿Cómo lo resuelven ahora?\" te ayuda a saber:", options: ["Nada útil", "Su contraseña", "Su edad", "Contra qué compites y cuánto les cuesta"], answer: 3, why: "Las soluciones actuales muestran el valor de la tuya." },
      { q: "En el ejemplo del restaurante, ¿quién revisa los precios de los textos?", options: ["Nadie", "Una persona", "La IA se revisa sola", "Los clientes del cliente"], answer: 1, why: "Los precios son datos que necesitan una revisión humana." },
      { q: "\"Persona en el circuito\" significa:", options: ["Un círculo en una gráfica", "La IA reemplaza a todas las personas", "Una persona revisa o aprueba el trabajo de la IA antes de que se use", "Una línea de atención al cliente"], answer: 2, why: "Esa es la definición." },
      { q: "En el mapa de tu servicio, lo que entra es:", options: ["Lo que necesitas del cliente al principio", "El producto final", "Tu ganancia", "La empresa de IA"], answer: 0, why: "Lo que entra llega; los entregables salen." },
      { q: "Una instrucción reutilizable incluye:", options: ["Tus datos bancarios", "Solo un saludo", "Papel, reglas, formato del resultado y espacios", "Una pregunta al azar"], answer: 2, why: "Esas partes hacen parejos los resultados." },
      { q: "¿Por qué agregar \"Marca con [REVISAR] todo lo que no tengas claro\"?", options: ["Hace más fácil detectar los errores de la IA", "Hace el texto más largo", "Lo exige la ley", "Esconde los errores"], answer: 0, why: "Las marcas te muestran dónde mirar." },
      { q: "Si tu herramienta de IA no puede guardar instrucciones, puedes:", options: ["Rendirte", "Guardar la instrucción en un documento y pegarla cada vez", "Reescribirla de memoria distinta cada vez", "Comprar cinco herramientas"], answer: 1, why: "Un documento guardado la mantiene igual." },
      { q: "Probar con tres personas reales te ayuda a encontrar:", options: ["Nada", "Sus contraseñas", "Logos nuevos", "Errores de la IA, pasos lentos y lo que valoran los clientes"], answer: 3, why: "Las pruebas muestran qué arreglar antes de vender." },
      { q: "Cuando las personas de prueba te dan comentarios, debes:", options: ["Anotar sus palabras exactas", "Discutir con ellas", "Ignorarlos", "Pedirles que publiquen reseñas falsas"], answer: 0, why: "Las palabras exactas muestran lo que de verdad les importa." },
      { q: "Después de arreglar los problemas que encontraste al probar, debes:", options: ["Multiplicar el precio por diez", "No volver a cambiar nada", "Borrar la instrucción", "Volver a probar"], answer: 3, why: "Volver a probar confirma que los arreglos funcionaron." },
      { q: "Los clientes pagan sobre todo por:", options: ["Tus suscripciones a herramientas", "Los minutos que te ahorra la IA", "El resultado y tu criterio", "Tu logo"], answer: 2, why: "Ponle precio al resultado, no solo al tiempo." },
      { q: "Un precio de paquete es:", options: ["Un costo de envío", "Un conjunto fijo de trabajo por un precio fijo", "Un código de descuento", "Un impuesto"], answer: 1, why: "Los paquetes son fáciles de entender para los clientes." },
      { q: "¿Quién debe revisar las cuentas del precio?", options: ["Tu competidor", "Solo la IA", "Nadie", "Tú, en una hoja de cálculo"], answer: 3, why: "Las cuentas de la IA pueden estar mal." },
      { q: "La ganancia es:", options: ["Tu factura de herramientas", "Todo el dinero que pagan los clientes", "Lo que queda después de pagar todos los costos", "Tu precio"], answer: 2, why: "Ganancia = ingresos menos costos." },
      { q: "Para preguntas de impuestos sobre tu nuevo servicio, revisa:", options: ["Fuentes oficiales como irs.gov o a un contador", "Solo un chat de IA", "Un comentario en redes sociales", "A tu cliente"], answer: 0, why: "Las fuentes oficiales y los profesionales son confiables." },
      { q: "¿Qué afirmación debes evitar?", options: ["\"Una persona revisa cada publicación\"", "\"100% exacto, garantizado\"", "\"12 publicaciones al mes\"", "\"Aprobado por ti antes de publicar\""], answer: 1, why: "Las afirmaciones absolutas son difíciles de demostrar." },
      { q: "En 2026 la FTC dictó órdenes finales contra empresas que:", options: ["Usaban hojas de cálculo", "Hicieron afirmaciones falsas sobre lo que hacía su servicio de marketing con IA", "Contrataron diseñadores", "Pagaron sus impuestos a tiempo"], answer: 1, why: "Decían que la IA escuchaba conversaciones cuando no era así." },
      { q: "Si no estás seguro de si una afirmación de marketing está permitida, debes:", options: ["Hablar con un abogado", "Usarla de todos modos", "Preguntarle a la IA y publicar lo que diga", "Ponerla más grande"], answer: 0, why: "Un abogado te puede aconsejar sobre tu caso." }
    ]
  }
};
