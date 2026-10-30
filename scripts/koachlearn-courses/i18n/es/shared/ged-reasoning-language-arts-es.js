"use strict";

// Koach Learn course (Spanish translation of shared/ged-reasoning-language-arts.js). See scripts/koachlearn-courses/README.md, "Translations".
// The grammar examples stay in English inside quotes: the RLA grammar items this course practices test English.

const GED_SUBJECTS = { name: "GED Testing Service: materias de la prueba (tiempo, tipos de preguntas, ensayo)", url: "https://ged.com/about_test/test_subjects/" };
const GED_RLA = { name: "GED Testing Service: Razonamiento a través de las artes del lenguaje (RLA)", url: "https://ged.com/about_test/test_subjects/language_arts/" };
const GED_SCORES = { name: "GED Testing Service: puntajes", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: pruebas de muestra gratis (en inglés y en español)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, la prueba de práctica oficial", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, otra prueba de equivalencia de la escuela secundaria (sitio oficial)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-reasoning-language-arts-es",
  lang: "es",
  translationOf: "ged-reasoning-language-arts",
  category: "Workforce Development",
  name: "Preparación para el GED: Razonamiento a través de las artes del lenguaje",
  skills: "Encontrar la idea principal y la evidencia, Hacer inferencias, Corregir gramática y puntuación, Evaluar argumentos y evidencia, Escribir la respuesta extendida, Hacer un plan de estudio",
  outcome: "leer un texto y responder preguntas de estilo GED sobre su idea principal, su evidencia y su gramática, y escribir en 45 minutos una respuesta extendida de práctica que elija el argumento mejor respaldado y explique por qué con evidencia.",
  about: [
    "Este curso es para adultos que se preparan para la prueba GED de Razonamiento a través de las artes del lenguaje (RLA, por sus siglas en inglés): personas que buscan trabajo, personas que regresan de prisión, veteranos, jóvenes adultos, inmigrantes y cualquiera que vuelve a estudiar. El GED es una prueba de equivalencia de la escuela secundaria de Estados Unidos, y su credencial puede abrir puertas a empleos, programas de capacitación y la universidad.",
    "El curso te prepara para la prueba. No te da la credencial del GED. La organización GED Testing Service hace la prueba, y tu estado pone las reglas para tomarla. Algunos estados usan otra prueba llamada HiSET. Revisa ged.com y la oficina de educación para adultos de tu estado para conocer las reglas, los costos y las fechas actuales.",
    "Aprenderás cómo funciona la prueba, a leer buscando la idea principal y la evidencia, a corregir errores comunes de gramática, a evaluar argumentos y a escribir la respuesta extendida (el ensayo). Cada lección tiene ejemplos resueltos, una práctica \"Pruébalo ahora\" con las respuestas explicadas y una comprobación rápida de dos preguntas.",
    "Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. La tarea final es un ensayo de práctica que escribes en 45 minutos y calificas con una rúbrica."
  ],
  finalTask: "Escribe en 45 minutos una respuesta extendida de práctica del GED sobre los dos textos de la biblioteca de la Lección 6. Elige el argumento con mejor evidencia, explica por qué con al menos dos pruebas tomadas de los textos, y usa una introducción, párrafos de desarrollo y una conclusión. Luego revisa la gramática y califica tu ensayo con la rúbrica del curso.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos que se preparan para la prueba GED de Razonamiento a través de las artes del lenguaje: personas que buscan trabajo, personas que regresan de prisión, veteranos, jóvenes adultos que dejaron la escuela, inmigrantes y adultos que vuelven a estudiar después de muchos años.",
    startingPoint: "Pueden leer textos cotidianos como letreros, formularios y artículos cortos. Muchos no han escrito un ensayo ni estudiado gramática en años, y algunos se ponen nerviosos con los exámenes o todavía están aprendiendo inglés.",
    gap: "Muchos empleos, programas de capacitación y universidades piden un diploma de escuela secundaria o una credencial equivalente. Los estudiantes necesitan leer con atención para encontrar evidencia, evaluar argumentos, usar la gramática estándar y escribir un ensayo con tiempo límite: habilidades que se evalúan en la prueba y que también usarán en el trabajo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas en la enseñanza; los textos de práctica son cortos",
      "Dispositivos: un teléfono, una computadora de la biblioteca, o papel y lápiz",
      "Tiempo: lecciones de 4 a 6 minutos que caben entre el trabajo, las citas y la familia",
      "Las reglas, los costos y la prueba que usa cada estado (GED o HiSET) cambian; los estudiantes revisan ged.com y su estado",
      "Algunos estudiantes tienen ansiedad ante los exámenes; la práctica es sin presión y las respuestas se explican"
    ],
    prerequisites: "Ninguno. Quienes leen por debajo del nivel de 6.º grado pueden tomar al mismo tiempo una clase de lectura de educación para adultos."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Usando el sitio web oficial del GED", action: "nombrar las partes, los tipos de preguntas y el tiempo de la prueba GED de artes del lenguaje, y escribir un plan de estudio con fechas", standard: "con cada parte de la prueba nombrada y al menos una fecha de estudio cada semana hasta la prueba" },
    { id: "O2", condition: "Con un texto corto", action: "identificar la idea principal, los detalles de apoyo y una inferencia respaldada por evidencia", standard: "señalando la oración exacta que apoya cada respuesta" },
    { id: "O3", condition: "Con oraciones que tienen errores", action: "corregir errores de gramática, puntuación, mayúsculas y elección de palabras", standard: "con al menos 4 de 5 respuestas correctas" },
    { id: "O4", condition: "Con un argumento corto", action: "identificar la afirmación y la evidencia, y calificar cada prueba como fuerte o débil", standard: "dando una razón para cada calificación" },
    { id: "O5", condition: "Con dos textos que no están de acuerdo y un temporizador de 45 minutos", action: "escribir una respuesta extendida que elija el argumento mejor respaldado y explique por qué con evidencia", standard: "con una introducción, al menos dos pruebas tomadas de los textos y una conclusión" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Leer con atención y escribir correctamente",
      lessons: [
        {
          title: "Cómo funciona la prueba GED de artes del lenguaje",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nombrar las partes de la prueba GED de artes del lenguaje y escribir un plan de estudio con fechas.",
          text: [
            "El GED tiene cuatro pruebas: Matemáticas, Razonamiento a través de las artes del lenguaje (RLA), Ciencias y Estudios sociales. Puedes tomarlas una a la vez. La organización GED Testing Service hace la prueba. Algunos estados usan otra prueba de equivalencia de la escuela secundaria, HiSET, así que revisa qué prueba usa tu estado.",
            "En ged.com, la prueba RLA dura 150 minutos y tiene tres secciones, con un descanso de 10 minutos entre las partes 2 y 3. Cubre la lectura para entender el significado, encontrar y construir argumentos, y gramática y lenguaje. Una sección es un ensayo escrito, llamado respuesta extendida, con 45 minutos.",
            "La mayoría de las preguntas son de opción múltiple. Otras te piden arrastrar y soltar, seleccionar un área de la pantalla o elegir de una lista desplegable dentro de una oración. Ged.com indica un puntaje de aprobación de 145 en cada materia. Los tiempos y las reglas pueden cambiar, así que revisa ged.com antes de reservar.",
            "Un plan funciona mejor que estudiar todo a última hora. Practicar poco tiempo cuatro o cinco días por semana sirve más que una sola noche larga. Ged.com tiene pruebas de muestra gratis y una prueba de práctica oficial, GED Ready, que muestra si es probable que apruebes."
          ],
          steps: ["Entra a ged.com y lee la página de Reasoning Through Language Arts.", "Anota el tiempo, las secciones y los tipos de preguntas.", "Toma la prueba de muestra gratis de RLA para ver cómo vas.", "Elige una semana meta para la prueba y cuenta las semanas que faltan.", "Escribe al menos una fecha de estudio cada semana, con la lección o la habilidad de ese día."],
          words: [["GED", "una prueba de equivalencia de la escuela secundaria; aprobar las cuatro materias da una credencial que muchos empleadores y universidades aceptan como un diploma."], ["HiSET", "otra prueba de equivalencia de la escuela secundaria que usan algunos estados."], ["Respuesta extendida", "el nombre que usa el GED para el ensayo que escribes en la prueba."], ["Lista desplegable", "una lista que se abre cuando haces clic, para que elijas una respuesta."], ["Plan de estudio", "un calendario de lo que vas a practicar y cuándo."]],
          slides: [
            { title: "Cuatro materias del GED", bullets: ["Matemáticas", "Razonamiento a través de las artes del lenguaje (RLA)", "Ciencias", "Estudios sociales"] },
            { title: "La prueba RLA (revisa ged.com)", bullets: ["150 minutos, tres secciones, un descanso de 10 minutos", "Lectura para entender, argumentos, gramática", "Un ensayo: la respuesta extendida, 45 minutos"] },
            { title: "Tipos de preguntas", bullets: ["Opción múltiple", "Arrastrar y soltar", "Seleccionar un área", "Lista desplegable"] },
            { title: "Haz un plan", bullets: ["Primero toma la prueba de muestra gratis", "Elige una semana meta para la prueba", "Estudia un poco, la mayoría de los días de la semana"] }
          ],
          sources: [GED_SUBJECTS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Abre ged.com y toma la prueba de muestra gratis de RLA (o lee la página de RLA si no puedes tomarla ahora). Luego escribe tu plan de estudio: tu semana meta para la prueba y una fecha cada semana con la habilidad que vas a practicar (lectura, gramática, argumentos o el ensayo). Guárdalo; le vas a agregar cosas.",
          youCanNow: "nombrar las partes de la prueba GED de artes del lenguaje y seguir un plan de estudio con fechas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es la respuesta extendida en la prueba GED de artes del lenguaje?", options: ["Una lista de palabras de vocabulario", "Una entrevista oral", "El ensayo que escribes en la prueba", "Una sección de matemáticas"], answer: 2, why: "Ged.com llama respuesta extendida al ensayo escrito." },
            { objective: "O1", q: "Tu prueba es dentro de 8 semanas. ¿Qué plan es mejor?", options: ["Estudiar 30 minutos cuatro días por semana, con una habilidad para cada día", "Estudiar toda la noche el día anterior", "Tomar la prueba sin practicar para ver qué pasa", "Leer solo los consejos para el ensayo"], answer: 0, why: "Practicar poco y seguido, con una habilidad planeada cada día, desarrolla mejor las habilidades que estudiar todo a última hora." }
          ]
        },
        {
          title: "Idea principal, detalles e inferencias",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identificar la idea principal, dos detalles de apoyo y una inferencia en un texto corto.",
          text: [
            "La idea principal es de lo que trata sobre todo el texto completo. Los detalles de apoyo son los hechos, ejemplos y razones que la respaldan. Pregúntate: \"Si tuviera que decir este texto en una sola oración, ¿qué diría?\"",
            "Ejemplo resuelto. Texto: \"Muchos almacenes ahora trabajan toda la noche. Los turnos de noche suelen pagar más por hora. Pero los trabajadores del turno de noche dicen tener más problemas para dormir, y algunos dicen que es más difícil ver a su familia.\" Idea principal: los turnos de noche pagan más, pero tienen costos para los trabajadores. Detalles: pagan más; los trabajadores tienen problemas para dormir; es más difícil pasar tiempo con la familia.",
            "Una inferencia es una suposición inteligente basada en pistas del texto. No está escrita palabra por palabra, pero el texto la apoya. Del texto puedes inferir que un trabajador con hijos pequeños podría pensarlo dos veces antes de aceptar un turno de noche. No puedes inferir que los turnos de noche son ilegales; nada dice eso.",
            "En la prueba, siempre señala la oración que prueba tu respuesta. Si no puedes señalarla, la respuesta probablemente está mal."
          ],
          steps: ["Lee primero la pregunta, para saber qué buscar.", "Lee el texto completo una vez.", "Di la idea principal en una oración.", "Encuentra dos detalles que la apoyen.", "Para una inferencia, elige la respuesta que el texto apoya y busca la oración que la prueba."],
          words: [["Idea principal", "de lo que trata sobre todo un texto."], ["Detalle de apoyo", "un hecho, ejemplo o razón que respalda la idea principal."], ["Inferencia", "una conclusión a la que llegas a partir de pistas del texto."], ["Evidencia", "las palabras del texto que prueban una respuesta."]],
          slides: [
            { title: "Idea principal", bullets: ["De lo que trata sobre todo el texto", "Dila en una oración"] },
            { title: "Detalles de apoyo", bullets: ["Hechos, ejemplos y razones", "Respaldan la idea principal"] },
            { title: "Inferencia", bullets: ["Una suposición inteligente a partir de pistas del texto", "No está escrita palabra por palabra", "El texto debe apoyarla"] },
            { title: "Demuéstralo", bullets: ["Señala la oración que prueba tu respuesta", "¿No hay oración que señalar? Elige otra vez"] }
          ],
          tryIt: "Texto de práctica: \"La ciudad abrió tres nuevos centros de enfriamiento este verano. En los días de más de 100 grados, estuvieron abiertos hasta las 10 pm. Las visitas fueron más altas entre los adultos mayores y las personas sin aire acondicionado.\" 1) ¿Idea principal? 2) ¿Dos detalles? 3) ¿Qué inferencia está apoyada: (a) la ciudad quiere proteger a la gente del calor, o (b) los centros cuestan demasiado? Respuestas: 1) La ciudad abrió centros de enfriamiento para ayudar a la gente cuando hace mucho calor. 2) Abiertos hasta las 10 pm en días muy calurosos; la mayoría de los visitantes eran adultos mayores y personas sin aire acondicionado. 3) (a). Nada en el texto habla del costo.",
          youCanNow: "encontrar la idea principal, los detalles y una inferencia apoyada, y señalar la prueba.",
          quickCheck: [
            { objective: "O2", q: "Un texto dice que una panadería agregó un turno de tarde, contrató a cinco personas y vendió 30% más pan. ¿Cuál es la idea principal?", options: ["El pan es saludable", "Agregar un turno de tarde ayudó a la panadería a crecer", "Contrataron a cinco personas", "Las panaderías cierran de noche"], answer: 1, why: "Todo el texto trata de cómo el turno de tarde ayudó a la panadería; las contrataciones y las ventas son detalles." },
            { objective: "O2", q: "¿Cuál es una inferencia y no un detalle escrito en el texto?", options: ["Un hecho copiado palabra por palabra del texto", "El título del texto", "El número de párrafos", "Una conclusión a la que llegas con las pistas que da el texto"], answer: 3, why: "Una inferencia es una conclusión apoyada por pistas, no un hecho dicho directamente." }
          ]
        },
        {
          title: "Corregir la gramática y la puntuación",
          objectives: ["O3"],
          minutes: 6,
          goal: "Corregir cinco tipos comunes de errores de gramática y puntuación en oraciones.",
          text: [
            "Muchas preguntas de RLA muestran una oración con una lista desplegable y preguntan qué versión es correcta. Algunos errores aparecen una y otra vez. Apréndelos y ganarás muchos puntos. Los ejemplos están en inglés, entre comillas, porque esta parte de la prueba evalúa la gramática del inglés.",
            "1) El sujeto y el verbo concuerdan: \"The list of jobs is long\" (el sujeto es list, no jobs). 2) Oraciones completas: \"Because the bus was late.\" es un fragmento; corrígelo así: \"I was late because the bus was late.\" 3) Oraciones pegadas: \"I applied I got the job\" necesita un punto, un punto y coma o una palabra de unión: \"I applied, and I got the job.\"",
            "4) Palabras que suenan igual: their (de ellos), there (un lugar), they're (they are, ellos están); its (de eso), it's (it is, eso es); your (tuyo), you're (you are, tú eres). 5) Mayúsculas y apóstrofos: los nombres de personas, lugares y días llevan mayúscula en inglés (Monday, Texas); el apóstrofo muestra pertenencia (the manager's office) o una letra que falta (don't), no un plural (two shifts, no two shift's).",
            "Las palabras de transición unen ideas: however (pero), therefore (por eso), for example (por ejemplo), in addition (además). Elige la que encaja con el significado entre las dos oraciones."
          ],
          steps: ["Lee la oración completa, no solo la parte subrayada.", "Encuentra el sujeto y el verbo, y revisa que concuerden.", "Revisa que sea una oración completa y no dos oraciones pegadas.", "Revisa las palabras que suenan igual, las mayúsculas y los apóstrofos.", "Lee la opción que elegiste dentro de la oración para asegurarte de que suena bien."],
          words: [["Sujeto", "quién o qué hace la acción en la oración, o de quién se habla."], ["Verbo", "la palabra de acción o de estado, como runs o is."], ["Fragmento", "un pedazo de oración que no puede estar solo."], ["Oraciones pegadas", "dos oraciones unidas sin la puntuación correcta (en inglés, run-on)."], ["Transición", "una palabra que une dos ideas, como however o therefore."]],
          slides: [
            { title: "Cinco errores que debes encontrar", bullets: ["Sujeto y verbo que no concuerdan", "Fragmentos y oraciones pegadas", "Palabras que suenan igual", "Mayúsculas y apóstrofos"] },
            { title: "Palabras que suenan igual", bullets: ["their / there / they're", "its / it's", "your / you're"] },
            { title: "Apóstrofos", bullets: ["Pertenencia: the manager's office", "Letra que falta: don't, it's", "Nunca para un plural simple: two shifts"] },
            { title: "Palabras de transición", bullets: ["however = pero", "therefore = por eso", "for example (por ejemplo), in addition (además)"] }
          ],
          tryIt: "Corrige cada oración. 1) \"The box of gloves are on the shelf.\" 2) \"Their going to the job fair on friday.\" 3) \"I finished my shift I went home.\" 4) \"The company changed it's hours.\" 5) \"Because I wanted to learn.\" Respuestas: 1) \"is\" (el sujeto es box). 2) \"They're going to the job fair on Friday.\" 3) \"I finished my shift, and I went home.\" 4) \"its\" (de eso). 5) Agrega una idea principal: \"I signed up for class because I wanted to learn.\"",
          youCanNow: "encontrar y corregir los errores de gramática y puntuación más comunes de la prueba.",
          quickCheck: [
            { objective: "O3", q: "¿Qué oración es correcta?", options: ["The team of nurses are ready.", "The team of nurses were ready.", "The team of nurses is ready.", "The team of nurses be ready."], answer: 2, why: "El sujeto es team (un solo grupo), así que el verbo es is." },
            { objective: "O3", q: "¿Qué palabra va aquí?: \"___ going to start training on Monday.\"", options: ["There", "They're", "Their", "Thier"], answer: 1, why: "They're significa they are: they are going to start training." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Leer con atención y escribir correctamente",
        questions: [
          { objective: "O1", q: "Según ged.com, ¿qué tipos de preguntas hay en la prueba GED de artes del lenguaje?", options: ["Solo verdadero o falso", "Solo respuestas orales", "Solo ensayos", "Opción múltiple, arrastrar y soltar, seleccionar un área, lista desplegable y un ensayo"], answer: 3, why: "Ged.com menciona estos tipos de preguntas y además una respuesta extendida." },
          { objective: "O2", q: "Un texto dice que una clínica abrió los sábados y las visitas de padres que trabajan se duplicaron. ¿Qué inferencia está apoyada?", options: ["A muchos padres que trabajan se les hacía difícil ir entre semana", "La clínica va a cerrar pronto", "El sábado es día feriado", "A los médicos no les gustan los sábados"], answer: 0, why: "Llegaron más padres que trabajan cuando se abrió el sábado, lo que sugiere que entre semana les era difícil ir." },
          { objective: "O2", q: "¿Cómo compruebas que tu respuesta sobre un texto es correcta?", options: ["Eliges la respuesta más larga", "Señalas la oración del texto que la prueba", "Eliges la respuesta que más te gusta", "Eliges siempre la C"], answer: 1, why: "Una respuesta correcta está apoyada por palabras del texto." },
          { objective: "O3", q: "¿Qué oración es correcta?", options: ["The store changed it's hours.", "The store changed its hours.", "The store changed its' hours.", "The store changed it is hours."], answer: 1, why: "Its sin apóstrofo significa de eso (pertenencia)." },
          { objective: "O3", q: "\"I passed the test I was so happy.\" ¿Cuál es el problema?", options: ["Son oraciones pegadas; necesitan un punto o una palabra de unión", "Hay una palabra mal escrita", "Test necesita mayúscula", "No hay ningún problema"], answer: 0, why: "Dos oraciones completas están unidas sin nada entre ellas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Argumentos y la respuesta extendida",
      lessons: [
        {
          title: "Afirmaciones, evidencia y razones fuertes",
          objectives: ["O4"],
          minutes: 5,
          goal: "Identificar la afirmación y la evidencia en un argumento y calificar cada prueba como fuerte o débil.",
          text: [
            "Un argumento intenta convencerte. La afirmación es lo que el autor quiere que creas. La evidencia es lo que usa para probarlo.",
            "La evidencia fuerte es específica y se puede comprobar: números de un estudio o de un registro, hechos, o un experto en ese tema. La evidencia débil es un sentimiento, la historia de una sola persona usada como si valiera para todos, una persona famosa que no es experta, o una afirmación sin prueba.",
            "Ejemplo resuelto. Afirmación: \"Nuestro pueblo debería agregar una ruta de autobús al parque industrial.\" Evidencia A: \"Una encuesta del condado a 600 trabajadores encontró que 1 de cada 4 falta a sus turnos por falta de transporte.\" Fuerte: un número de una encuesta. Evidencia B: \"Mi primo dice que el autobús sería bueno.\" Débil: la opinión de una sola persona.",
            "Cuidado también con los trucos: frases como \"todo el mundo sabe\", atacar a la persona en lugar de su idea, y dar solo dos opciones cuando hay más."
          ],
          steps: ["Encuentra la afirmación: ¿qué quiere el autor que creas?", "Subraya cada prueba.", "Pregúntate: ¿es específica y la podría comprobar?", "Califícala como fuerte o débil y escribe una razón."],
          words: [["Argumento", "un texto que intenta convencerte de algo."], ["Afirmación", "el punto principal que el autor quiere que creas."], ["Evidencia fuerte", "hechos o números específicos que podrías comprobar, o un experto en ese tema."], ["Evidencia débil", "sentimientos, una sola historia, o afirmaciones sin prueba."]],
          slides: [
            { title: "Partes de un argumento", bullets: ["Afirmación: lo que el autor quiere que creas", "Evidencia: lo que usa para probarlo"] },
            { title: "Evidencia fuerte", bullets: ["Números de un estudio o un registro", "Hechos que podrías comprobar", "Un experto en ese tema"] },
            { title: "Evidencia débil", bullets: ["Sentimientos o \"todo el mundo sabe\"", "La historia de una sola persona", "Una persona famosa que no es experta"] },
            { title: "Cuidado con los trucos", bullets: ["Atacar a la persona, no la idea", "Solo dos opciones cuando hay más"] }
          ],
          tryIt: "Argumento de práctica: \"La ciudad debería plantar más árboles en el centro. Un estudio de la ciudad midió que las calles con árboles están unos 10 grados más frescas en verano. Una cantante local dijo que los árboles se ven bonitos. Quien no esté de acuerdo simplemente odia la naturaleza.\" Encuentra la afirmación y califica cada apoyo. Respuestas: Afirmación: plantar más árboles en el centro. Estudio de la ciudad: fuerte (un número medido en un estudio). Cantante: débil (no es experta; solo es una opinión). \"Quien no esté de acuerdo odia la naturaleza\": débil (ataca a las personas en lugar de dar pruebas).",
          youCanNow: "encontrar la afirmación, separar la evidencia fuerte de la débil y decir por qué.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es la evidencia más fuerte de que un programa de capacitación laboral funciona?", options: ["El director dice que es excelente", "A una celebridad le gusta", "Los registros muestran que el 70% de los graduados encontró trabajo en seis meses", "Todo el mundo sabe que funciona"], answer: 2, why: "Es un número específico de registros que se puede comprobar." },
            { objective: "O4", q: "\"Mi vecino se enfermó después de comer ahí, así que el restaurante no es seguro.\" ¿Qué tipo de evidencia es esta?", options: ["Evidencia de un experto", "Un estudio", "Datos oficiales", "Débil: la historia de una sola persona"], answer: 3, why: "Una sola historia no prueba nada sobre todas las comidas de ese lugar." }
          ]
        },
        {
          title: "Comparar dos argumentos y planear tu ensayo",
          objectives: ["O4", "O5"],
          minutes: 5,
          goal: "Comparar dos argumentos y escribir un plan corto para una respuesta extendida.",
          text: [
            "En la prueba lees dos textos que defienden lados diferentes. Ged.com dice que los analizas, decides qué argumento tiene evidencia más convincente y explicas por qué. No te preguntan con qué lado estás de acuerdo; tú evalúas la evidencia.",
            "Usa una tabla sencilla. Para cada texto, escribe la afirmación, la evidencia y una marca de fuerte o débil. El texto con más evidencia fuerte suele ser tu elección, aunque personalmente creas en el otro lado.",
            "Dedica unos 10 minutos a planear. Tu plan: 1) tu tesis, una oración que dice qué argumento está mejor respaldado; 2) dos o tres pruebas de ese texto y por qué son fuertes; 3) una debilidad del otro texto.",
            "Los textos de práctica están en la Lección 6. Hoy practica la tabla con dos artículos de opinión cortos que no estén de acuerdo, como dos cartas al editor."
          ],
          steps: ["Lee los dos textos y encuentra cada afirmación.", "Haz una tabla de dos columnas: la evidencia de cada texto.", "Marca cada prueba como fuerte o débil.", "Escribe una oración de tesis: qué argumento está mejor respaldado.", "Anota la evidencia que usarás en cada párrafo de desarrollo."],
          words: [["Tesis", "una oración que dice tu punto principal; en el ensayo del GED, qué argumento está mejor respaldado."], ["Analizar", "mirar con atención las partes para ver cómo funcionan."], ["Párrafo de desarrollo", "un párrafo del medio que da una razón con evidencia."]],
          slides: [
            { title: "Qué pide el ensayo", bullets: ["Leer dos textos que no están de acuerdo", "Decidir cuál tiene evidencia más convincente", "Explicar por qué; no qué lado te gusta"] },
            { title: "Haz una tabla", bullets: ["La afirmación de cada texto", "Su evidencia", "¿Fuerte o débil?"] },
            { title: "Planea en unos 10 minutos", bullets: ["Tesis: qué argumento está mejor respaldado", "2 o 3 pruebas y por qué son fuertes", "Una debilidad del otro texto"] }
          ],
          sources: [GED_RLA],
          tryIt: "Práctica: el Texto 1 dice que una semana laboral de cuatro días es buena y cita un registro de una empresa: los días de enfermedad bajaron de 6 a 4 por trabajador en un año. El Texto 2 dice que es mala porque \"los trabajadores se volverán perezosos\" y un gerente \"tiene la sensación\" de que la producción bajará. Escribe una tesis. Respuesta: \"El Texto 1 está mejor respaldado porque usa registros de la empresa sobre los días de enfermedad, mientras que el Texto 2 se basa en sensaciones sin datos.\"",
          youCanNow: "comparar dos argumentos con una tabla y escribir una tesis y un plan para tu ensayo.",
          quickCheck: [
            { objective: "O5", q: "¿Qué te pide hacer la respuesta extendida del GED?", options: ["Escribir la historia de tu vida", "Decidir qué argumento tiene evidencia más convincente y explicar por qué", "Resumir una novela", "Escribir un poema"], answer: 1, why: "Ged.com dice que analizas dos textos y explicas qué argumento tiene mejor evidencia." },
            { objective: "O4", q: "Estás de acuerdo con el Texto B, pero el Texto A tiene más evidencia fuerte. ¿Cuál debe elegir tu tesis?", options: ["El Texto A, porque está mejor respaldado", "El Texto B, porque estás de acuerdo con él", "Ninguno", "Los dos por igual"], answer: 0, why: "El ensayo evalúa la evidencia, no tu opinión sobre el tema." }
          ]
        },
        {
          title: "Escribir la respuesta extendida en 45 minutos",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escribir con tiempo límite una respuesta extendida que elija el argumento mejor respaldado y explique por qué con evidencia.",
          text: [
            "Usa una forma sencilla. Introducción (2 a 3 oraciones): nombra el tema y da tu tesis. Párrafos de desarrollo (dos o tres): cada uno da una razón, cita o describe evidencia del texto y explica por qué es fuerte o débil. Conclusión (2 oraciones): repite tu tesis con otras palabras.",
            "Textos de práctica (inventados para este curso). Texto A, de la bibliotecaria de la ciudad: \"Mantengamos la biblioteca principal abierta hasta las 9 pm. Durante una prueba de tres meses, nuestro contador de la puerta registró unas 340 visitas después de las 6 pm cada semana. Nuestro registro de computadoras muestra que 6 de cada 10 sesiones de búsqueda de empleo fueron después de las 6 pm. Las horas extra cuestan menos del 1% de nuestro presupuesto.\" Texto B, de un miembro del concejo: \"Cerremos a las 6 pm. Pasé por ahí una tarde y se veía vacía. La gente puede usar su teléfono. Es un desperdicio de dinero.\"",
            "Plan de tiempo: unos 10 minutos para leer y planear, 30 minutos para escribir y 5 minutos para revisar. Usa palabras de transición (primero, además, sin embargo, por lo tanto). Escribe oraciones completas con tus propias palabras, y cita partes cortas de los textos como evidencia.",
            "Revisa los errores de la Lección 3: sujeto y verbo, oraciones pegadas, palabras que suenan igual, mayúsculas y apóstrofos."
          ],
          steps: ["Pon un temporizador de 45 minutos.", "Lee los dos textos y llena tu tabla de fuerte o débil (unos 10 minutos).", "Escribe la introducción con tu tesis.", "Escribe dos o tres párrafos de desarrollo, cada uno con evidencia y por qué es fuerte o débil.", "Escribe una conclusión corta.", "Revisa en los últimos 5 minutos."],
          words: [["Introducción", "el primer párrafo; nombra el tema y da tu tesis."], ["Conclusión", "el último párrafo; repite tu punto principal."], ["Citar", "copiar unas pocas palabras exactas del texto, entre comillas."], ["Revisar", "volver a leer lo que escribiste para encontrar y corregir errores."]],
          slides: [
            { title: "La forma del ensayo", bullets: ["Introducción con tu tesis", "Dos o tres párrafos de desarrollo con evidencia", "Una conclusión corta"] },
            { title: "Cada párrafo de desarrollo", bullets: ["Una razón", "Evidencia del texto", "Por qué es fuerte, o por qué el otro lado es débil"] },
            { title: "Plan de tiempo de 45 minutos", bullets: ["Unos 10 minutos: leer y planear", "Unos 30 minutos: escribir", "Unos 5 minutos: revisar"] }
          ],
          tryIt: "Tarea final: pon un temporizador de 45 minutos y escribe tu respuesta extendida sobre los textos de la biblioteca de arriba. Luego revísala y califícala con la rúbrica. Tesis modelo: \"El Texto A está mejor respaldado porque usa los conteos de visitas y los registros de computadoras de la propia biblioteca, mientras que el Texto B se basa en lo que vio una sola tarde y en opiniones.\" Evidencia fuerte que puedes usar: unas 340 visitas después de las 6 pm cada semana; 6 de cada 10 sesiones de búsqueda de empleo después de las 6 pm; costo de menos del 1% del presupuesto. Debilidad de B: una sola visita, sin números.",
          youCanNow: "escribir una respuesta extendida completa y con tiempo límite que evalúa dos argumentos por su evidencia.",
          quickCheck: [
            { objective: "O5", q: "¿Qué va en tu introducción?", options: ["Una lista de reglas de gramática", "Todas las pruebas", "El tema y tu tesis", "Tu nombre y dirección"], answer: 2, why: "La introducción nombra el tema y dice qué argumento está mejor respaldado." },
            { objective: "O5", q: "En los textos de la biblioteca, ¿cuál es la evidencia más fuerte?", options: ["\"Se veía vacía\" una tarde", "\"La gente puede usar su teléfono\"", "\"Es un desperdicio de dinero\"", "El contador de la puerta registró unas 340 visitas después de las 6 pm cada semana"], answer: 3, why: "Es un número específico de un registro que se puede comprobar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Argumentos y la respuesta extendida",
        questions: [
          { objective: "O4", q: "¿Qué es la afirmación en un argumento?", options: ["El punto principal que el autor quiere que creas", "El título", "La oración más larga", "Un error de gramática"], answer: 0, why: "La afirmación es aquello de lo que el autor intenta convencerte." },
          { objective: "O4", q: "\"Las personas que quieren que la biblioteca abra más horas son simplemente perezosas.\" ¿Qué tiene de malo este apoyo?", options: ["Usa demasiados números", "Cita a un experto", "Ataca a las personas en lugar de dar pruebas", "Nada; es evidencia fuerte"], answer: 2, why: "Atacar a quienes no están de acuerdo no es evidencia sobre la idea." },
          { objective: "O5", q: "En el ensayo de 45 minutos, ¿cuánto tiempo más o menos debes dedicar a leer y planear?", options: ["0 minutos", "Unos 40 minutos", "Unos 2 minutos", "Unos 10 minutos"], answer: 3, why: "Unos 10 minutos para planear dejan unos 30 para escribir y 5 para revisar." },
          { objective: "O5", q: "¿Qué incluye un buen párrafo de desarrollo?", options: ["Una razón, evidencia del texto y por qué es fuerte", "Solo tu opinión", "Un tema nuevo", "Una lista de palabras sin oraciones"], answer: 0, why: "Cada párrafo de desarrollo une una razón con evidencia y la explica." },
          { objective: "O1", q: "¿Dónde debes revisar las reglas, los tiempos y los costos actuales de la prueba GED?", options: ["En lo que recuerda un amigo", "En una publicación de redes sociales", "En ged.com y en la oficina de educación para adultos de tu estado", "En un libro de texto viejo"], answer: 2, why: "Las reglas y los costos cambian; el sitio oficial y tu estado tienen los actuales." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para el GED: Razonamiento a través de las artes del lenguaje",
    questions: [
      { objective: "O1", q: "¿Para qué prueba te prepara este curso?", options: ["La prueba GED de Razonamiento a través de las artes del lenguaje", "Un examen de licencia de conducir", "Una prueba de mecanografía", "Una entrevista de ciudadanía"], answer: 0, why: "El curso te prepara para la prueba GED de RLA; no da la credencial." },
      { objective: "O1", q: "¿Cuál es otra prueba de equivalencia de la escuela secundaria que usan algunos estados?", options: ["SAT", "HiSET", "CDL", "ESL"], answer: 1, why: "HiSET es otra prueba de equivalencia de la escuela secundaria que se usa en algunos estados." },
      { objective: "O1", q: "¿Cuál es el mejor primer paso para un plan de estudio?", options: ["Reservar la prueba para mañana", "Saltarte las partes difíciles", "Tomar una prueba de muestra gratis para ver cómo vas", "Estudiar solo la noche anterior"], answer: 2, why: "Una prueba de muestra muestra qué habilidades necesitan más práctica." },
      { objective: "O1", q: "Según ged.com, ¿cuánto dura la parte del ensayo de la prueba RLA?", options: ["10 minutos", "2 horas", "No hay ensayo", "45 minutos"], answer: 3, why: "Ged.com indica 45 minutos para la respuesta extendida." },
      { objective: "O2", q: "La idea principal de un texto es:", options: ["La primera palabra", "De lo que trata sobre todo el texto", "La palabra más difícil", "Solo la última oración"], answer: 1, why: "La idea principal es el texto dicho en una sola oración." },
      { objective: "O2", q: "Un texto dice que una fábrica agregó capacitación de seguridad y los accidentes bajaron a la mitad. ¿Qué detalle apoya \"la capacitación hizo la fábrica más segura\"?", options: ["Los accidentes bajaron a la mitad", "La fábrica es grande", "La capacitación fue los lunes", "La fábrica hace sillas"], answer: 0, why: "La baja en los accidentes es la evidencia de que la seguridad mejoró." },
      { objective: "O2", q: "¿Qué inferencia está apoyada por: \"Las filas en el banco de alimentos se duplicaron después de que cerró la planta\"?", options: ["El banco de alimentos va a cerrar", "Los precios de la comida bajaron", "Muchas personas que perdieron su trabajo necesitaron ayuda con comida", "La planta volvió a abrir"], answer: 2, why: "El momento del cierre y las filas más largas apoyan esta conclusión." },
      { objective: "O3", q: "¿Qué oración es correcta?", options: ["The list of tasks are on the board.", "The list of tasks is on the board.", "The list of tasks were on the board.", "The list of tasks be on the board."], answer: 1, why: "El sujeto es list (una sola lista), así que el verbo es is." },
      { objective: "O3", q: "¿Qué oración usa bien las mayúsculas?", options: ["I start work on monday in ohio.", "I Start Work on Monday in Ohio.", "i start work on Monday in ohio.", "I start work on Monday in Ohio."], answer: 3, why: "En inglés, los días y los lugares llevan mayúscula; las demás palabras no." },
      { objective: "O3", q: "¿Cuál es un fragmento de oración?", options: ["I got the job.", "Because the shift ended late.", "She called the manager.", "We passed."], answer: 1, why: "No puede estar sola; necesita una idea principal, como \"I was tired because the shift ended late.\"" },
      { objective: "O3", q: "Elige la palabra correcta: \"___ a good day to apply.\"", options: ["Its", "Its'", "It's", "It"], answer: 2, why: "It's significa it is: it is a good day to apply." },
      { objective: "O4", q: "¿Cuál es evidencia fuerte?", options: ["Un informe del estado que muestra 2,000 nuevos empleos de enfermería el año pasado", "\"Simplemente lo sé\"", "La opinión de una estrella de cine sobre la enfermería", "\"Todo el mundo lo dice\""], answer: 0, why: "Los números específicos de un informe oficial se pueden comprobar." },
      { objective: "O4", q: "\"O eliminamos todas las rutas de autobús o la ciudad se queda sin dinero.\" ¿Cuál es el truco?", options: ["Usa un estudio", "Cita a un experto", "Es un hecho", "Da solo dos opciones cuando hay más"], answer: 3, why: "Hay otras opciones, como eliminar algunas rutas o buscar dinero nuevo." },
      { objective: "O4", q: "¿Por qué la historia de una sola persona es evidencia débil para una afirmación grande?", options: ["Las historias siempre son falsas", "Un solo caso puede no ser cierto para la mayoría de la gente", "Las historias son demasiado largas", "Va contra las reglas"], answer: 1, why: "Un solo ejemplo no muestra lo que es cierto en general." },
      { objective: "O4", q: "Para evaluar un argumento, primero encuentras:", options: ["La palabra más larga", "La edad del autor", "La afirmación y su evidencia", "Los errores de gramática"], answer: 2, why: "Un argumento se evalúa según qué tan bien su evidencia apoya su afirmación." },
      { objective: "O5", q: "En el ensayo del GED, tu tesis debe decir:", options: ["Qué argumento está mejor respaldado", "Tu color favorito", "Qué autor te gusta", "Que los dos son perfectos"], answer: 0, why: "La tarea es decidir qué argumento tiene evidencia más convincente." },
      { objective: "O5", q: "¿Cuál es una buena manera de usar la evidencia en tu ensayo?", options: ["Copiar textos completos", "Inventar números", "No poner evidencia", "Citar una parte corta y explicar por qué es fuerte"], answer: 3, why: "Las citas cortas con tu explicación muestran que analizaste la evidencia." },
      { objective: "O5", q: "¿Qué haces en los últimos minutos del ensayo?", options: ["Empezar un ensayo nuevo", "Revisar la gramática y la puntuación", "Borrar tu tesis", "Salir del salón"], answer: 1, why: "Revisar encuentra errores que te quitan puntos." },
      { objective: "O5", q: "¿Qué conclusión es la mejor?", options: ["\"Fin.\"", "\"Me gustan las bibliotecas.\"", "\"Como el Texto A usa registros y conteos, y el Texto B usa solo opiniones, el Texto A está mejor respaldado.\"", "\"Algunas personas están de acuerdo y otras no.\""], answer: 2, why: "Repite la tesis y la razón principal con otras palabras." },
      { objective: "O2", q: "Cuando no estás seguro de una respuesta sobre un texto, debes:", options: ["Volver a buscar la oración que prueba una respuesta", "Elegir la opción más corta", "No leer y adivinar", "Elegir la respuesta con las palabras más difíciles"], answer: 0, why: "La respuesta correcta está apoyada por el texto, así que regresa y busca la prueba." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [2, 3, 4, 6, 7, 10, 11, 13, 15, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, practica esa parte y escribe un ensayo nuevo sobre otro par de textos.",
    criteria: [
      { name: "Tesis clara", objective: "O5", notYet: "No hay tesis, o dice con qué lado está de acuerdo quien escribe en lugar de cuál está mejor respaldado.", meets: "La introducción tiene una oración que dice qué argumento está mejor respaldado.", exceeds: "La tesis también nombra la razón principal, como registros frente a opiniones." },
      { name: "Evidencia de los textos", objective: "O4", notYet: "No hay evidencia de los textos, o la evidencia es inventada.", meets: "Al menos dos pruebas de los textos, cada una explicada como fuerte o débil.", exceeds: "También señala un truco o una debilidad del otro texto y lo explica." },
      { name: "Organización", objective: "O5", notYet: "Un solo bloque de texto, o las ideas saltan de un lado a otro.", meets: "Introducción, al menos dos párrafos de desarrollo y una conclusión, con palabras de transición.", exceeds: "Cada párrafo de desarrollo empieza con una oración principal clara que se relaciona con la tesis." },
      { name: "Gramática y puntuación", objective: "O3", notYet: "Muchos errores hacen difícil leerlo.", meets: "Unos pocos errores pequeños, pero el significado siempre es claro.", exceeds: "Casi ningún error; las palabras que suenan igual, las mayúsculas y los apóstrofos están todos correctos." },
      { name: "Lectura precisa", objective: "O2", notYet: "Se equivoca en la idea principal de un texto.", meets: "Describe bien la idea principal de cada texto.", exceeds: "Usa citas cortas y exactas que coinciden con lo que dicen los textos." },
      { name: "Plan y tiempo", objective: "O1", notYet: "No terminó en 45 minutos y no tiene plan de estudio.", meets: "Terminó en 45 minutos y el plan de estudio tiene fechas hasta la semana de la prueba.", exceeds: "Además reservó una prueba GED Ready o una fecha real de prueba en ged.com." }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y obtienen Cumple o más en todas las filas de la rúbrica",
      "Estudiantes que toman GED Ready o una prueba de muestra gratis de ged.com en 30 días",
      "Estudiantes que reservan o aprueban la prueba GED de artes del lenguaje en 90 días (según ellos mismos)",
      "Los programas aliados informan que más estudiantes pasan a programas de capacitación laboral o a clases universitarias"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono, tableta o computadora con internet, o las lecciones impresas",
      "Papel y lápiz para las tablas, las respuestas de práctica y los ensayos",
      "Un temporizador (el del teléfono sirve) para el ensayo de 45 minutos",
      "Pruebas de muestra gratis de ged.com; GED Ready si el estudiante decide comprarla",
      "Unos 90 minutos en total para las lecciones y las comprobaciones, más 45 minutos para el ensayo final"
    ],
    facilitatorNotes: [
      "Empiece con la prueba inicial y la prueba de muestra gratis de RLA de ged.com, y luego agrupe a los estudiantes según las habilidades que más necesitan.",
      "Haga en voz alta una tabla de fuerte o débil como modelo antes de que los estudiantes hagan la suya.",
      "Pida a los estudiantes que lean sus ensayos en voz alta en parejas y que se den comentarios sobre una fila de la rúbrica a la vez.",
      "Averigüe qué prueba usa su estado (GED o HiSET) y comparta los lugares de prueba locales y cualquier ayuda con los costos.",
      "Mantenga la práctica sin presión; muchos estudiantes adultos cargan con ansiedad ante los exámenes desde la escuela."
    ]
  }
};
