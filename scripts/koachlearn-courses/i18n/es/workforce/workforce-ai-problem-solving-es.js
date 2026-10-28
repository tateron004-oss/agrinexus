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
  chapters: [
    {
      name: "Capítulo 1: Entender el problema",
      lessons: [
        {
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
          youCanNow: "escribir un planteamiento del problema claro y basado en datos."
        },
        {
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
          youCanNow: "encontrar la causa raíz de un problema con los 5 porqués."
        },
        {
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
          youCanNow: "generar y reducir una lista de opciones realistas con ayuda de la IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Entender el problema",
        questions: [
          { q: "¿Cuál es el planteamiento del problema más claro?", options: ["\"Todo es un desastre.\"", "\"Entre semana de 5 a 7 pm, la espera en la caja es de 12 minutos en promedio y recibimos unas 5 quejas por semana.\"", "\"Los clientes son molestos.\"", "\"Arréglalo.\""], answer: 1, why: "Dice qué, cuándo, qué tan grande y por qué importa." },
          { q: "¿Qué es una causa raíz?", options: ["Una queja", "Lo primero que notas", "Una planta", "La razón de fondo por la que pasa un problema"], answer: 3, why: "Arreglar la causa raíz evita que el problema regrese." },
          { q: "En los 5 porqués, la IA sugiere una causa. ¿Qué haces?", options: ["La revisas con datos o con compañeros", "La aceptas", "Ignoras todas las ideas de la IA", "Culpas a alguien"], answer: 0, why: "Solo los datos confirman una causa." },
          { q: "¿Por qué incluir \"no cambiar nada\" como opción?", options: ["Lo exige la ley", "Siempre es lo mejor", "Da un punto de comparación", "Nunca sirve"], answer: 2, why: "El punto de comparación muestra lo que gana cada cambio." },
          { q: "¿Quién suele tener las mejores ideas para resolver un problema del trabajo?", options: ["Los amigos de los clientes", "Solo la IA", "Las personas que hacen el trabajo", "Nadie"], answer: 2, why: "Quienes hacen el trabajo conocen los detalles." }
        ]
      }
    },
    {
      name: "Capítulo 2: Decidir y recomendar",
      lessons: [
        {
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
          youCanNow: "comparar opciones de forma justa con una matriz de decisión ponderada."
        },
        {
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
          youCanNow: "poner a prueba el razonamiento de la IA y detectar errores antes de confiar en él."
        },
        {
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
          youCanNow: "resolver paso a paso un problema del trabajo y presentar una recomendación con la que tu jefe pueda actuar."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Decidir y recomendar",
        questions: [
          { q: "En una matriz de decisión, ¿qué es un peso?", options: ["Cuánto importa un criterio", "Cuánto pesa una caja", "La calificación de una opción", "Una contraseña"], answer: 0, why: "Los pesos muestran la importancia." },
          { q: "La opción A saca 4 en costo (peso 3) y 2 en riesgo (peso 2). Su total en estos dos es:", options: ["6", "8", "12", "16"], answer: 3, why: "4 x 3 + 2 x 2 = 12 + 4 = 16." },
          { q: "Una buena forma de poner a prueba la elección de la IA es preguntar:", options: ["Solo \"¿Estás segura?\"", "\"¿Cuáles son las razones más fuertes para NO elegir esto?\"", "Nada", "\"Elige por mí\""], answer: 1, why: "Defender lo contrario deja ver los puntos débiles." },
          { q: "¿Dónde va lo principal de una recomendación?", options: ["En las primeras líneas", "Al final de todo", "En una nota al pie", "En ningún lado"], answer: 0, why: "Los jefes leen primero el inicio." },
          { q: "¿Por qué proponer una prueba pequeña?", options: ["Porque cuesta más", "Para atrasar la decisión para siempre", "Es más fácil de aprobar y demuestra la idea", "No sirve"], answer: 2, why: "Las pruebas pequeñas y medibles reducen el riesgo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para resolver problemas y tomar decisiones",
    questions: [
      { q: "Un planteamiento claro del problema incluye:", options: ["Solo una queja", "Qué, dónde, cuándo, qué tan grande y por qué importa", "Una persona a quien culpar", "Una solución"], answer: 1, why: "Esas partes hacen que se pueda resolver." },
      { q: "Si no tienes números sobre un problema, debes:", options: ["Pedir a la IA que los invente", "Adivinar", "Rendirte", "Juntar algunos durante una semana"], answer: 3, why: "Los datos le ganan a las suposiciones." },
      { q: "¿Cómo puede ayudar la IA con un planteamiento del problema?", options: ["No puede ayudar", "Inventando los datos", "Decidiendo por ti", "Haciéndote preguntas que lo afinan"], answer: 3, why: "Las buenas preguntas muestran lo que necesitas." },
      { q: "Un síntoma es:", options: ["La causa raíz", "Una señal de un problema, no su causa", "Una solución", "Una herramienta"], answer: 1, why: "Los síntomas apuntan a causas más profundas." },
      { q: "En los 5 porqués, preguntas \"¿Por qué?\":", options: ["Cincuenta veces", "Solo una vez", "Sobre cada respuesta, unas cinco veces", "Sobre nada"], answer: 2, why: "Cada porqué va más a fondo." },
      { q: "En el ejemplo de la caja, la causa raíz era:", options: ["El horario no coincidía con la demanda de la tarde", "Los clientes eran lentos", "Las cajas eran viejas", "Estaba lloviendo"], answer: 0, why: "El horario se hizo para las mañanas." },
      { q: "¿Cuántas opciones debes comparar como mínimo?", options: ["Ninguna", "Una", "Cuatro, incluyendo no cambiar nada", "Solo la primera idea de la IA"], answer: 2, why: "Comparar varias lleva a mejores decisiones." },
      { q: "Hacer una lluvia de ideas significa:", options: ["Hacer una lista rápida de muchas ideas sin juzgarlas todavía", "Decidir rápido", "Discutir", "Escribir un informe"], answer: 0, why: "Juzgar viene después." },
      { q: "La IA sugiere una idea que tu trabajo nunca aprobaría. Tú:", options: ["Insistes en ella", "La tachas", "La escondes", "La pagas tú"], answer: 1, why: "Quédate con opciones realistas." },
      { q: "¿Cuál es un criterio común en una matriz de decisión?", options: ["El clima de mañana", "Tu color favorito", "Tu número de la suerte", "El costo"], answer: 3, why: "El costo es un criterio clave." },
      { q: "En la matriz de este curso, las calificaciones van de:", options: ["1 a 5", "1 a 100", "A a Z", "Solo 0 a 1"], answer: 0, why: "Una escala sencilla de 1 a 5." },
      { q: "El total más alto de la matriz es:", options: ["Inútil", "Automáticamente la respuesta", "Siempre incorrecto", "Una buena candidata, que igual revisas que tenga sentido"], answer: 3, why: "Revisa que el resultado tenga sentido." },
      { q: "¿Quién elige los pesos y las calificaciones?", options: ["Un número al azar", "La IA sola", "Tú, según los datos y lo que valora tu trabajo", "Nadie"], answer: 2, why: "El criterio se queda contigo." },
      { q: "¿Cuál es un problema común en el razonamiento de la IA?", options: ["Ser siempre demasiado cuidadosa", "Números inventados", "Negarse a escribir", "Cuentas perfectas"], answer: 1, why: "La IA puede inventar cifras." },
      { q: "Las reglas y políticas en la respuesta de la IA se deben revisar con:", options: ["Nadie", "Solo otra IA", "Un rumor", "La fuente oficial o tu jefe"], answer: 3, why: "Las reglas necesitan una fuente confiable." },
      { q: "¿Por qué anotar lo que revisaste?", options: ["No sirve", "Para llenar espacio", "Hace más fuerte tu recomendación", "Para culpar a la IA"], answer: 2, why: "Muestra un trabajo cuidadoso." },
      { q: "¿Qué nunca debe ir en una herramienta de IA al resolver problemas?", options: ["Datos confidenciales de clientes", "Una descripción general del problema", "Tu lista de opciones", "Los nombres de los criterios"], answer: 0, why: "Los datos confidenciales se quedan fuera." },
      { q: "Una recomendación de una página incluye:", options: ["Solo tu opinión", "Problema, causa raíz, opciones, recomendación, primeros pasos, medida, riesgos", "Cada correo que enviaste", "Contraseñas"], answer: 1, why: "Esas secciones permiten actuar." },
      { q: "Una medida de éxito es:", options: ["Tu salario", "El número que muestra si el cambio funcionó", "Un cumplido", "Una suposición"], answer: 1, why: "Las medidas demuestran los resultados." },
      { q: "¿Qué prueba es mejor proponer?", options: ["Dos semanas, dos tardes, midiendo los tiempos de espera", "Cambiar todo para siempre de inmediato", "Sin prueba y sin medida", "Un cambio en secreto"], answer: 0, why: "Las pruebas pequeñas y medidas son fáciles de aprobar." }
    ]
  }
};
