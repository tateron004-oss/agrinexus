"use strict";

// Koach Learn course (Spanish translation of workforce/workforce-ai-problem-solving.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "workforce-ai-problem-solving-es",
  lang: "es",
  translationOf: "workforce-ai-problem-solving",
  category: "Workforce Development",
  name: "IA para resolver problemas y tomar decisiones",
  skills: "Definir un problema con claridad, Encontrar la causa raíz con los 5 porqués, Generar opciones con IA, Comparar opciones con una matriz de decisión, Revisar el razonamiento de la IA, Presentar una recomendación",
  outcome: "resolver paso a paso un problema real del trabajo con la IA como compañera de razonamiento: escribir un planteamiento claro del problema, encontrar la causa raíz con los 5 porqués, hacer una lista de opciones, compararlas en una matriz de decisión, revisar el razonamiento de la IA y presentar a tu jefe una recomendación de una página.",
  about: [
    "Este curso es para trabajadores y personas que buscan empleo que quieren ser quienes resuelven problemas, no solo quienes los reportan: encargados de almacén y tienda, personal de apoyo en salud, oficinistas, atención al cliente y oficios. Resolver problemas es una de las habilidades que más piden los empleadores.",
    "Vas a aprender un método sencillo que sirve para cualquier problema, desde filas largas en la caja hasta entregas que no llegan o un proceso confuso. Un asistente de IA te ayuda a hacer mejores preguntas, pensar en opciones y ordenar tus ideas. Tú pones los datos y tomas la decisión.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. No pongas información confidencial de la empresa ni de clientes en herramientas de IA y sigue las reglas de tu trabajo."
  ],
  finalTask: "Elige un problema real del trabajo (o un ejemplo realista) y prepara una recomendación de una página: un planteamiento del problema con datos, la causa raíz con los 5 porqués, al menos cuatro opciones (algunas de la IA), una matriz de decisión con criterios ponderados, notas sobre lo que revisaste del razonamiento de la IA, y tu recomendación con los primeros pasos y cómo vas a medir el éxito.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Trabajadores y personas que buscan empleo y quieren ser quien resuelve los problemas, no solo quien los reporta: encargados de almacenes y tiendas, personal de apoyo en salud, trabajadores de oficina, atención al cliente y oficios.",
    startingPoint: "Notan problemas en el trabajo y a menudo tienen ideas, y saben usar un teléfono inteligente o una computadora. La mayoría no ha usado un método ordenado como los 5 porqués o una matriz de decisión, y pocos han usado la IA como compañera de razonamiento ni han revisado su razonamiento.",
    gap: "Resolver problemas es una de las habilidades que más piden los empleadores, pero las quejas sin datos y los arreglos sin causa casi nunca se aprueban. Necesitan un método paso a paso, desde el planteamiento del problema hasta la recomendación, que use la IA para ampliar sus ideas mientras ellos revisan su razonamiento y se hacen cargo de la decisión.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; los métodos se muestran paso a paso",
      "Dispositivos: una computadora o un teléfono inteligente; una hoja de cálculo gratuita ayuda con la matriz de decisión",
      "Privacidad y política: ningún dato confidencial de clientes en herramientas de IA; las reglas de IA del trabajo van primero",
      "Datos: los números, las reglas y las políticas de la IA se revisan con datos reales, con la fuente oficial o con el jefe",
      "Tiempo: lecciones de unos 5 minutos; juntar datos sobre un problema real puede tomar una semana"
    ],
    prerequisites: "Ninguno. \"Herramientas de IA esenciales para el trabajo\" ayuda a quienes son nuevos con los asistentes de IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una queja vaga en el trabajo", action: "escribir un planteamiento del problema claro y basado en datos, con la IA haciéndote preguntas para afinarlo", standard: "diciendo qué, dónde, cuándo, qué tan grande y por qué importa" },
    { id: "O2", condition: "Con un planteamiento del problema", action: "usar los 5 porqués para encontrar la causa raíz", standard: "revisando con datos o con compañeros cualquier causa que sugiera la IA" },
    { id: "O3", condition: "Con una causa raíz", action: "crear una lista de soluciones posibles usando la IA, a tus compañeros y tu propia experiencia", standard: "quedándote con al menos cuatro que encajen, incluida \"no cambiar nada\"" },
    { id: "O4", condition: "Con al menos cuatro opciones", action: "comparar las opciones en una matriz de decisión con criterios ponderados", standard: "con pesos y calificaciones puestos por ti y los totales correctos" },
    { id: "O5", condition: "Con el razonamiento de la IA sobre tus opciones", action: "revisar el razonamiento en busca de números inventados y reglas sin revisar, y pedir los argumentos en contra", standard: "anotando al menos dos cosas que comprobaste" },
    { id: "O6", condition: "Con tu análisis", action: "escribir una recomendación de una página con primeros pasos, una prueba pequeña y una medida de éxito", standard: "con lo principal en las primeras líneas y las siete secciones" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Entender el problema",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escribir un planteamiento claro del problema",
          minutes: 5,
          goal: "Convertir una queja vaga en un planteamiento del problema claro y basado en datos.",
          text: [
            "\"Todo es un desastre\" no es un problema que se pueda resolver. Un planteamiento claro dice qué pasa, dónde, cuándo, qué tan grande es y por qué importa. Ejemplo: \"Entre semana, de 5 a 7 pm, los clientes esperan en promedio 12 minutos en la caja y recibimos unas 5 quejas por semana.\"",
            "Usa datos que puedas ver o contar: horas, números, qué tan seguido pasa. Si no tienes números, junta algunos durante una semana.",
            "La IA puede ayudar: \"Esta es mi descripción a grandes rasgos. Hazme cinco preguntas que la conviertan en un planteamiento más claro.\" Responder esas preguntas muchas veces te muestra lo que de verdad necesitas saber."
          ],
          steps: ["Escribe el problema con tus palabras.", "Agrega qué, dónde, cuándo, qué tan grande y por qué importa.", "Cambia las suposiciones por conteos o medidas.", "Pide a la IA preguntas que lo afinen y reescríbelo."],
          words: [["Planteamiento del problema", "una descripción corta de un problema basada en datos."], ["Datos", "hechos y números que puedes contar o medir."]],
          slides: [
            { title: "Vago o claro", bullets: ["Vago: \"Todo es un desastre\"", "Claro: qué, dónde, cuándo, qué tan grande, por qué importa"] },
            { title: "Ejemplo", bullets: ["Entre semana de 5 a 7 pm", "12 minutos de espera promedio en la caja", "Unas 5 quejas por semana"] },
            { title: "Afínalo con la IA", bullets: ["\"Hazme cinco preguntas para aclarar esto\"", "Responde con datos y reescríbelo"] }
          ],
          tryIt: "Elige un problema real o de ejemplo del trabajo. Escribe una descripción a grandes rasgos, pide a la IA cinco preguntas para afinarla, respóndelas y reescríbela como un planteamiento claro.",
          youCanNow: "escribir un planteamiento del problema claro y basado en datos.",
          quickCheck: [
            { objective: "O1", q: "¿Qué incluye un planteamiento claro del problema?", options: ["Quién tiene la culpa", "Qué, dónde, cuándo, qué tan grande y por qué importa", "Solo lo que sientes al respecto", "La solución que ya quieres"], answer: 1, why: "Un planteamiento claro describe los hechos del problema, no culpas ni soluciones." },
            { objective: "O1", q: "Tu nota dice \"Las entregas siempre llegan tarde\". ¿Qué haces después?", options: ["Enviársela a tu jefe tal como está", "Agregar \"muy\" para darle fuerza", "Culpar a los choferes", "Responder las preguntas de la IA para afinarla y agregar datos como qué días y qué tan tarde"], answer: 3, why: "Las preguntas para afinar convierten una queja vaga en datos con los que se puede actuar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar la causa raíz con los 5 porqués",
          minutes: 5,
          goal: "Usar los 5 porqués para encontrar la causa detrás de un problema.",
          text: [
            "Si solo arreglas un síntoma, el problema regresa. Los 5 porqués te ayudan a llegar a la causa raíz: pregunta \"¿Por qué?\" sobre el problema, luego \"¿Por qué?\" sobre esa respuesta, unas cinco veces.",
            "Ejemplo: filas largas en la caja. ¿Por qué? A las 5 pm solo hay una caja abierta. ¿Por qué? El turno de un cajero termina a las 5. ¿Por qué? El horario se hizo para las horas pico de la mañana. ¿Por qué? Nadie revisó las ventas de la tarde cuando se hizo. Causa raíz: el horario no coincide con la demanda de la tarde.",
            "La IA puede sugerir \"porqués\" posibles en los que no habías pensado, pero solo tú y tus compañeros saben cuáles son ciertos. Revisa cada respuesta con datos o preguntando a quienes hacen el trabajo."
          ],
          steps: ["Escribe el planteamiento del problema arriba.", "Pregunta \"¿Por qué?\" y escribe la respuesta.", "Pregunta \"¿Por qué?\" sobre esa respuesta; repite unas cinco veces.", "Revisa cada respuesta con datos o con compañeros.", "Encierra en un círculo la causa raíz."],
          words: [["Causa raíz", "la razón de fondo por la que pasa un problema."], ["Síntoma", "una señal de un problema, no su causa."], ["5 porqués", "un método que pregunta \"¿por qué?\" varias veces para encontrar la causa raíz."]],
          slides: [
            { title: "Síntoma o causa raíz", bullets: ["Arreglas un síntoma: el problema regresa", "Arreglas la causa raíz: el problema se va"] },
            { title: "Pregunta \"¿Por qué?\" unas cinco veces", bullets: ["Filas largas -> una sola caja abierta", "-> el turno termina a las 5 -> horario hecho para mañanas", "Raíz: el horario no coincide con la demanda de la tarde"] },
            { title: "La IA sugiere, tú confirmas", bullets: ["La IA puede dar porqués posibles", "Revisa cada uno con datos o compañeros"] }
          ],
          tryIt: "Haz los 5 porqués de tu problema. Pide a la IA otras causas posibles y revisa con datos o con un compañero cuáles son ciertas. Encierra en un círculo la causa raíz.",
          youCanNow: "encontrar la causa raíz de un problema con los 5 porqués.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es la diferencia entre un síntoma y una causa raíz?", options: ["Un síntoma es una señal de un problema; la causa raíz es la razón de fondo por la que pasa", "Significan lo mismo", "Un síntoma siempre es más grande", "La causa raíz es aquello de lo que se quejan los clientes"], answer: 0, why: "Si solo arreglas los síntomas, el problema vuelve; la causa raíz es por qué pasa." },
            { objective: "O2", q: "La IA sugiere que la causa raíz es \"al personal no le importa\". No estás seguro. ¿Qué haces?", options: ["Anotarla como la causa", "Decirle a tu jefe que al personal no le importa", "Revisarla con datos o con compañeros antes de aceptarla", "Dejar los 5 porqués"], answer: 2, why: "Lo que sugiere la IA son ideas para revisar, no causas comprobadas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Generar opciones con la IA",
          minutes: 5,
          goal: "Crear una lista de al menos cuatro soluciones posibles, usando la IA para ampliar tus ideas.",
          text: [
            "La mayoría de la gente salta a la primera solución. Las mejores decisiones salen de comparar varias. Busca al menos cuatro opciones, incluyendo \"no cambiar nada\" como punto de comparación.",
            "Pide a la IA una lluvia de ideas: \"La causa raíz es que nuestro horario no coincide con la demanda de la tarde en una tienda de abarrotes pequeña. Dame ocho soluciones posibles, de baratas y rápidas a cambios más grandes.\" Puede sugerir ideas como mover un descanso, una caja de autoservicio o capacitar a los reponedores para cobrar.",
            "Tacha las ideas que no encajan en tu trabajo o que nunca te aprobarían, y agrega ideas de tus compañeros. Las personas que hacen el trabajo muchas veces tienen las mejores ideas."
          ],
          steps: ["Escribe la causa raíz.", "Pide a la IA de seis a ocho opciones, de pequeñas a grandes.", "Tacha las que no encajan.", "Agrega ideas de tus compañeros.", "Quédate con al menos cuatro, incluyendo \"no cambiar nada\"."],
          words: [["Opción", "una solución posible."], ["Lluvia de ideas", "hacer una lista rápida de muchas ideas sin juzgarlas todavía."], ["Punto de comparación", "lo que pasa si no cambias nada."]],
          slides: [
            { title: "No te quedes con la primera idea", bullets: ["Compara al menos cuatro opciones", "Incluye \"no cambiar nada\""] },
            { title: "La IA amplía tus ideas", bullets: ["Dale la causa raíz", "Pide opciones de pequeñas a grandes"] },
            { title: "Hazlo realista", bullets: ["Tacha las ideas que no encajan", "Agrega ideas de tus compañeros", "Quien hace el trabajo suele saber más"] }
          ],
          tryIt: "Pide a la IA ocho opciones para resolver tu causa raíz. Tacha las que no encajan, agrega una de un compañero o de tu propia experiencia y quédate con al menos cuatro.",
          youCanNow: "generar y reducir una lista de opciones realistas con ayuda de la IA.",
          quickCheck: [
            { objective: "O3", q: "¿Qué significa hacer una lluvia de ideas?", options: ["Elegir la primera idea", "Juzgar cada idea en cuanto la oyes", "Preguntarle solo a tu jefe", "Hacer una lista rápida de muchas ideas sin juzgarlas todavía"], answer: 3, why: "La lluvia de ideas junta muchas ideas primero; las juzgas después." },
            { objective: "O3", q: "La IA te da ocho opciones, y dos necesitan un presupuesto que tu tienda no tiene. ¿Qué haces?", options: ["Quedarte con todas", "Tachar las que no encajan y agregar una de un compañero", "Elegir la más cara", "Pedirle 50 más a la IA"], answer: 1, why: "Te quedas con las opciones que encajan con tu trabajo y agregas ideas de quienes hacen el trabajo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Entender el problema",
        questions: [
          { objective: "O1", q: "¿Cuál es el planteamiento del problema más claro?", options: ["\"Todo es un desastre.\"", "\"Entre semana de 5 a 7 pm, la espera en la caja es de 12 minutos en promedio y recibimos unas 5 quejas por semana.\"", "\"Los clientes son molestos.\"", "\"Arréglalo.\""], answer: 1, why: "Dice qué, cuándo, qué tan grande y por qué importa." },
          { objective: "O2", q: "¿Qué es una causa raíz?", options: ["Una queja", "Lo primero que notas", "Una planta", "La razón de fondo por la que pasa un problema"], answer: 3, why: "Arreglar la causa raíz evita que el problema regrese." },
          { objective: "O2", q: "En los 5 porqués, la IA sugiere una causa. ¿Qué haces?", options: ["La revisas con datos o con compañeros", "La aceptas", "Ignoras todas las ideas de la IA", "Culpas a alguien"], answer: 0, why: "Solo los datos confirman una causa." },
          { objective: "O3", q: "¿Por qué incluir \"no cambiar nada\" como opción?", options: ["Lo exige la ley", "Siempre es lo mejor", "Da un punto de comparación", "Nunca sirve"], answer: 2, why: "El punto de comparación muestra lo que gana cada cambio." },
          { objective: "O3", q: "¿Quién suele tener las mejores ideas para resolver un problema del trabajo?", options: ["Los amigos de los clientes", "Solo la IA", "Las personas que hacen el trabajo", "Nadie"], answer: 2, why: "Quienes hacen el trabajo conocen los detalles." }
        ]
      }
    },
    {
      name: "Capítulo 2: Decidir y recomendar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Comparar opciones con una matriz de decisión",
          minutes: 6,
          goal: "Calificar opciones con criterios ponderados en una matriz de decisión.",
          text: [
            "Una matriz de decisión es una tabla que compara opciones de forma justa. Las opciones van a un lado; los criterios van arriba. Criterios comunes: costo, tiempo para ponerla en marcha, qué tan bien resuelve la causa raíz, efecto en los clientes, efecto en los compañeros y riesgo.",
            "Dale a cada criterio un peso (de 1 a 3) según cuánto importa, califica cada opción de 1 a 5 en cada criterio, multiplica la calificación por el peso y suma. El total más alto es una buena candidata, no una ganadora automática.",
            "Puedes pedir a la IA que arme la tabla vacía o una hoja de cálculo con fórmulas. Tú eliges los pesos y las calificaciones según los datos y lo que valora tu trabajo. Luego pregúntate: ¿tiene sentido la ganadora? Si no, revisa tus calificaciones."
          ],
          steps: ["Pon tus opciones a un lado.", "Elige de cuatro a seis criterios y dale a cada uno un peso de 1 a 3.", "Califica cada opción de 1 a 5 en cada criterio.", "Multiplica calificación x peso y suma.", "Revisa que el resultado tenga sentido."],
          words: [["Matriz de decisión", "una tabla que califica opciones según criterios."], ["Criterios", "las cosas con las que juzgas las opciones, como el costo o el riesgo."], ["Peso", "cuánto importa un criterio comparado con los demás."]],
          slides: [
            { title: "Arma la tabla", bullets: ["Opciones a un lado", "Criterios arriba", "Costo, tiempo, resuelve la causa, personas, riesgo"] },
            { title: "Califícala", bullets: ["Peso de cada criterio de 1 a 3", "Califica cada opción de 1 a 5", "Calificación x peso, luego suma"] },
            { title: "Tú decides", bullets: ["La IA puede armar la tabla", "Tú eliges pesos y calificaciones", "¿Tiene sentido la ganadora?"] }
          ],
          tryIt: "Arma una matriz de decisión para tus cuatro opciones con al menos cuatro criterios ponderados. Usa la IA para armar la tabla o la hoja de cálculo, y luego llena tú las calificaciones y súmalas.",
          youCanNow: "comparar opciones de forma justa con una matriz de decisión ponderada.",
          quickCheck: [
            { objective: "O4", q: "En una matriz de decisión, ¿qué es un criterio?", options: ["La respuesta final", "Una de las opciones", "Algo con lo que juzgas las opciones, como el costo o la seguridad", "La persona que decide"], answer: 2, why: "Los criterios son aquello con lo que calificas cada opción." },
            { objective: "O4", q: "La opción B tiene 3 en rapidez (peso 2) y 5 en costo (peso 1). ¿Cuál es su total en estos dos?", options: ["11", "8", "15", "10"], answer: 0, why: "Multiplica cada calificación por su peso y suma: 3 x 2 + 5 x 1 = 11." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Revisar el razonamiento de la IA",
          minutes: 5,
          goal: "Detectar errores comunes en el razonamiento de la IA antes de confiar en él.",
          text: [
            "La IA puede sonar segura y aun así equivocarse. Problemas comunes: datos o números inventados, errores de cálculo, ideas que no toman en cuenta las reglas o el presupuesto de tu trabajo, y olvidar el lado humano (ánimo, seguridad, justicia).",
            "Pide a la IA que muestre su razonamiento: \"Explica paso a paso por qué pusiste la opción B en primer lugar.\" Luego pídele que defienda lo contrario: \"¿Cuáles son las razones más fuertes para NO elegir la opción B?\" Eso muchas veces deja ver los puntos débiles.",
            "Revisa tú mismo los números, revisa cualquier regla o política con la fuente oficial o con tu jefe, y pide a un compañero su opinión sincera. Anota lo que revisaste; eso hace más fuerte tu recomendación."
          ],
          steps: ["Pide a la IA que explique su razonamiento paso a paso.", "Pide los argumentos más fuertes en contra de su elección.", "Vuelve a revisar tú los números y las cuentas.", "Revisa las reglas con la fuente oficial o con tu jefe.", "Pide la opinión de un compañero y anota lo que revisaste."],
          words: [["Razonamiento", "los pasos de pensamiento que llevan a una conclusión."], ["Abogado del diablo", "defender a propósito la postura contraria para poner a prueba una idea."]],
          slides: [
            { title: "Sonar segura no es tener razón", bullets: ["Datos o números inventados", "Errores de cálculo", "Olvida reglas, presupuesto o el lado humano"] },
            { title: "Pon a prueba el razonamiento", bullets: ["\"Explica paso a paso\"", "\"¿Cuáles son las razones para NO elegir esto?\""] },
            { title: "Revisa y anota", bullets: ["Vuelve a revisar tú los números", "Reglas: fuente oficial o tu jefe", "Opinión de un compañero; anota lo revisado"] }
          ],
          tryIt: "Pregunta a la IA cuál de tus opciones elegiría y por qué. Luego pide los argumentos más fuertes en contra. Vuelve a revisar un número y anota dos cosas que comprobaste.",
          youCanNow: "poner a prueba el razonamiento de la IA y detectar errores antes de confiar en él.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es un problema común en el razonamiento de la IA?", options: ["Siempre se niega a responder", "Números inventados que suenan reales", "Solo usa fuentes oficiales", "No puede hacer tablas"], answer: 1, why: "La IA puede inventar números que suenan correctos, así que los vuelves a revisar." },
            { objective: "O5", q: "La IA dice que la política de la empresa permite horas extra para tu arreglo. ¿Qué haces?", options: ["Ponerlo en tu recomendación", "Suponer que es cierto", "Preguntarle a la IA si está segura", "Revisar la política con la fuente oficial o con tu jefe"], answer: 3, why: "Las reglas y las políticas salen de la fuente oficial o de tu jefe, no de la IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Presentar tu recomendación",
          minutes: 5,
          goal: "Escribir una recomendación de una página con la que tu jefe pueda actuar.",
          text: [
            "Los jefes dicen que sí a propuestas claras y cortas. Usa este orden: Problema (una o dos frases con datos), Causa raíz, Opciones consideradas, Recomendación y por qué, Primeros pasos, Cómo mediremos el éxito, Riesgos y cómo manejarlos.",
            "Que no pase de una página. Pide a la IA que ajuste tu borrador: \"Convierte esto en una recomendación de una página para mi jefe, con lo principal primero y palabras sencillas.\" Luego revisa que cada dato y número coincida con tu trabajo.",
            "Ofrece primero una prueba pequeña: \"Probémoslo dos semanas los martes y jueves por la tarde y midamos los tiempos de espera.\" Una prueba pequeña y medible es más fácil de aprobar y demuestra tu idea."
          ],
          steps: ["Escribe las siete secciones.", "Pon tu recomendación en las primeras líneas.", "Pide a la IA que la ajuste a una página.", "Revisa cada dato y número.", "Propón una prueba pequeña y medible."],
          words: [["Recomendación", "la opción que sugieres y por qué."], ["Prueba piloto", "un ensayo corto y pequeño de un cambio."], ["Medida de éxito", "el número que muestra si el cambio funcionó."]],
          slides: [
            { title: "Orden en una página", bullets: ["Problema y causa raíz", "Opciones y recomendación", "Primeros pasos, medida de éxito, riesgos"] },
            { title: "Que sea fácil decir que sí", bullets: ["Lo principal primero, una página", "La IA ajusta; tú revisas los datos"] },
            { title: "Propón una prueba pequeña", bullets: ["\"Dos semanas, dos tardes por semana\"", "Mide el resultado", "Más fácil de aprobar; demuestra la idea"] }
          ],
          tryIt: "Tarea final: escribe tu recomendación de una página con las siete secciones, con tus 5 porqués y tu matriz de decisión adjuntos, notas sobre lo que revisaste del razonamiento de la IA y una prueba pequeña con una medida de éxito.",
          youCanNow: "resolver paso a paso un problema del trabajo y presentar una recomendación con la que tu jefe pueda actuar.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una medida de éxito?", options: ["El número que muestra si el cambio funcionó", "Qué tan largo es tu informe", "Cuántas personas apoyaron la idea", "La aprobación de tu jefe"], answer: 0, why: "Una medida de éxito es un número que sigues para demostrar que el cambio funcionó." },
            { objective: "O6", q: "Tu jefe tiene dos minutos. ¿Cómo empiezas tu recomendación de una página?", options: ["Con la historia del problema", "Con una lista de todas las personas con las que hablaste", "Con tu recomendación y el primer paso, en las primeras líneas", "Con la matriz de decisión"], answer: 2, why: "Poner lo principal primero permite que un jefe ocupado actúe." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Decidir y recomendar",
        questions: [
          { objective: "O4", q: "En una matriz de decisión, ¿qué es un peso?", options: ["Cuánto importa un criterio", "Cuánto pesa una caja", "La calificación de una opción", "Una contraseña"], answer: 0, why: "Los pesos muestran la importancia." },
          { objective: "O4", q: "La opción A saca 4 en costo (peso 3) y 2 en riesgo (peso 2). Su total en estos dos es:", options: ["6", "8", "12", "16"], answer: 3, why: "4 x 3 + 2 x 2 = 12 + 4 = 16." },
          { objective: "O5", q: "Una buena forma de poner a prueba la elección de la IA es preguntar:", options: ["Solo \"¿Estás segura?\"", "\"¿Cuáles son las razones más fuertes para NO elegir esto?\"", "Nada", "\"Elige por mí\""], answer: 1, why: "Defender lo contrario deja ver los puntos débiles." },
          { objective: "O6", q: "¿Dónde va lo principal de una recomendación?", options: ["En las primeras líneas", "Al final de todo", "En una nota al pie", "En ningún lado"], answer: 0, why: "Los jefes leen primero el inicio." },
          { objective: "O6", q: "¿Por qué proponer una prueba pequeña?", options: ["Porque cuesta más", "Para atrasar la decisión para siempre", "Es más fácil de aprobar y demuestra la idea", "No sirve"], answer: 2, why: "Las pruebas pequeñas y medibles reducen el riesgo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para resolver problemas y tomar decisiones",
    questions: [
      { objective: "O1", q: "Un planteamiento claro del problema incluye:", options: ["Solo una queja", "Qué, dónde, cuándo, qué tan grande y por qué importa", "Una persona a quien culpar", "Una solución"], answer: 1, why: "Esas partes hacen que se pueda resolver." },
      { objective: "O1", q: "Si no tienes números sobre un problema, debes:", options: ["Pedir a la IA que los invente", "Adivinar", "Rendirte", "Juntar algunos durante una semana"], answer: 3, why: "Los datos le ganan a las suposiciones." },
      { objective: "O1", q: "¿Cómo puede ayudar la IA con un planteamiento del problema?", options: ["No puede ayudar", "Inventando los datos", "Decidiendo por ti", "Haciéndote preguntas que lo afinan"], answer: 3, why: "Las buenas preguntas muestran lo que necesitas." },
      { objective: "O2", q: "Un síntoma es:", options: ["La causa raíz", "Una señal de un problema, no su causa", "Una solución", "Una herramienta"], answer: 1, why: "Los síntomas apuntan a causas más profundas." },
      { objective: "O2", q: "En los 5 porqués, preguntas \"¿Por qué?\":", options: ["Cincuenta veces", "Solo una vez", "Sobre cada respuesta, unas cinco veces", "Sobre nada"], answer: 2, why: "Cada porqué va más a fondo." },
      { objective: "O2", q: "En el ejemplo de la caja, la causa raíz era:", options: ["El horario no coincidía con la demanda de la tarde", "Los clientes eran lentos", "Las cajas eran viejas", "Estaba lloviendo"], answer: 0, why: "El horario se hizo para las mañanas." },
      { objective: "O3", q: "¿Cuántas opciones debes comparar como mínimo?", options: ["Ninguna", "Una", "Cuatro, incluyendo no cambiar nada", "Solo la primera idea de la IA"], answer: 2, why: "Comparar varias lleva a mejores decisiones." },
      { objective: "O3", q: "Hacer una lluvia de ideas significa:", options: ["Hacer una lista rápida de muchas ideas sin juzgarlas todavía", "Decidir rápido", "Discutir", "Escribir un informe"], answer: 0, why: "Juzgar viene después." },
      { objective: "O3", q: "La IA sugiere una idea que tu trabajo nunca aprobaría. Tú:", options: ["Insistes en ella", "La tachas", "La escondes", "La pagas tú"], answer: 1, why: "Quédate con opciones realistas." },
      { objective: "O4", q: "¿Cuál es un criterio común en una matriz de decisión?", options: ["El clima de mañana", "Tu color favorito", "Tu número de la suerte", "El costo"], answer: 3, why: "El costo es un criterio clave." },
      { objective: "O4", q: "En la matriz de este curso, las calificaciones van de:", options: ["1 a 5", "1 a 100", "A a Z", "Solo 0 a 1"], answer: 0, why: "Una escala sencilla de 1 a 5." },
      { objective: "O4", q: "El total más alto de la matriz es:", options: ["Inútil", "Automáticamente la respuesta", "Siempre incorrecto", "Una buena candidata, que igual revisas que tenga sentido"], answer: 3, why: "Revisa que el resultado tenga sentido." },
      { objective: "O4", q: "¿Quién elige los pesos y las calificaciones?", options: ["Un número al azar", "La IA sola", "Tú, según los datos y lo que valora tu trabajo", "Nadie"], answer: 2, why: "El criterio se queda contigo." },
      { objective: "O5", q: "¿Cuál es un problema común en el razonamiento de la IA?", options: ["Ser siempre demasiado cuidadosa", "Números inventados", "Negarse a escribir", "Cuentas perfectas"], answer: 1, why: "La IA puede inventar cifras." },
      { objective: "O5", q: "Las reglas y políticas en la respuesta de la IA se deben revisar con:", options: ["Nadie", "Solo otra IA", "Un rumor", "La fuente oficial o tu jefe"], answer: 3, why: "Las reglas necesitan una fuente confiable." },
      { objective: "O5", q: "¿Por qué anotar lo que revisaste?", options: ["No sirve", "Para llenar espacio", "Hace más fuerte tu recomendación", "Para culpar a la IA"], answer: 2, why: "Muestra un trabajo cuidadoso." },
      { objective: "O5", q: "¿Qué nunca debe ir en una herramienta de IA al resolver problemas?", options: ["Datos confidenciales de clientes", "Una descripción general del problema", "Tu lista de opciones", "Los nombres de los criterios"], answer: 0, why: "Los datos confidenciales se quedan fuera." },
      { objective: "O6", q: "Una recomendación de una página incluye:", options: ["Solo tu opinión", "Problema, causa raíz, opciones, recomendación, primeros pasos, medida, riesgos", "Cada correo que enviaste", "Contraseñas"], answer: 1, why: "Esas secciones permiten actuar." },
      { objective: "O6", q: "Una medida de éxito es:", options: ["Tu salario", "El número que muestra si el cambio funcionó", "Un cumplido", "Una suposición"], answer: 1, why: "Las medidas demuestran los resultados." },
      { objective: "O6", q: "¿Qué prueba es mejor proponer?", options: ["Dos semanas, dos tardes, midiendo los tiempos de espera", "Cambiar todo para siempre de inmediato", "Sin prueba y sin medida", "Un cambio en secreto"], answer: 0, why: "Las pruebas pequeñas y medidas son fáciles de aprobar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      4,
      6,
      9,
      11,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Planteamiento del problema",
        objective: "O1",
        notYet: "El planteamiento es vago o no tiene datos.",
        meets: "Dice qué, dónde, cuándo, qué tan grande y por qué importa, con datos.",
        exceeds: "Incluye números que la persona juntó por su cuenta."
      },
      {
        name: "Causa raíz",
        objective: "O2",
        notYet: "No hay 5 porqués, o la causa se tomó de la IA sin revisarla.",
        meets: "Una cadena de 5 porqués hasta una causa raíz revisada con datos o con compañeros.",
        exceeds: "Muestra qué causas sugeridas por la IA se descartaron y por qué."
      },
      {
        name: "Opciones y matriz",
        objective: "O4",
        notYet: "Menos de cuatro opciones, o no hay matriz ponderada.",
        meets: "Al menos cuatro opciones, incluida no cambiar nada, calificadas en una matriz con al menos cuatro criterios ponderados y totales correctos.",
        exceeds: "Explica por qué los pesos encajan con su trabajo."
      },
      {
        name: "Razonamiento de la IA revisado",
        objective: "O5",
        notYet: "No hay notas de lo que se revisó.",
        meets: "Notas de al menos dos cosas comprobadas en el razonamiento de la IA, y ningún dato confidencial usado.",
        exceeds: "Incluye el argumento más fuerte en contra de la opción elegida y la respuesta a ese argumento."
      },
      {
        name: "Recomendación",
        objective: "O6",
        notYet: "Lo principal queda escondido, o faltan los pasos y la medida.",
        meets: "Una página con lo principal primero, primeros pasos, una prueba pequeña y una medida de éxito.",
        exceeds: "Hace una lista de los riesgos y cómo se van a manejar."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que presentan su recomendación a un jefe dentro de 30 días (encuesta de seguimiento)",
      "Recomendaciones que llevan a una prueba o a un cambio en el trabajo",
      "Personas que dicen haber conseguido un ascenso, un puesto de encargado o un nuevo empleo dentro de 6 meses"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora o un teléfono inteligente con internet",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini, o la herramienta que apruebe el trabajo",
      "Una hoja de cálculo gratuita (Google Sheets o Microsoft Excel en línea) o papel para la matriz de decisión",
      "Un problema real del trabajo o un ejemplo realista, como los tiempos de espera en la caja",
      "Unos 60 minutos en total, más el tiempo para juntar datos sobre un problema real"
    ],
    facilitatorNotes: [
      "Ofrece un problema de ejemplo compartido para quienes no puedan usar uno real, para que todos practiquen cada paso.",
      "Pide que hagan los 5 porqués en grupos pequeños; quienes hacen el trabajo a menudo ven primero la causa raíz.",
      "Revisa que ningún dato confidencial de clientes entre en herramientas de IA durante la práctica.",
      "Pide que presenten su recomendación de una página en dos minutos a un compañero que hace de jefe.",
      "Califica la recomendación con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
