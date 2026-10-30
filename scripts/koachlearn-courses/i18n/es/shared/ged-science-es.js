"use strict";

// Koach Learn course (Spanish translation of shared/ged-science.js). See scripts/koachlearn-courses/README.md, "Translations".

const GED_SUBJECTS = { name: "GED Testing Service: materias del examen (tiempo, tipos de preguntas, calculadora)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SCIENCE = { name: "GED Testing Service: examen de Ciencias", url: "https://ged.com/about_test/test_subjects/science/" };
const GED_SCORES = { name: "GED Testing Service: puntajes", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: exámenes de muestra gratis (en inglés y en español)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, el examen oficial de práctica", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, otro examen de equivalencia de la escuela secundaria (sitio oficial)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-science-es",
  lang: "es",
  translationOf: "ged-science",
  category: "Workforce Development",
  name: "Preparación para el examen GED: Ciencias",
  skills: "Leer textos de ciencias, Reconocer las variables de un experimento, Leer tablas y gráficas, Matemáticas para ciencias (media, mediana, rango, fórmulas), Evaluar conclusiones, Hacer un plan de estudio",
  outcome: "leer un texto de ciencias, una tabla o una gráfica y responder preguntas como las del GED sobre ellos, nombrar las variables de un experimento, hacer las cuentas de ciencias que pide el examen y decidir si una conclusión está respaldada por los datos.",
  about: [
    "Este curso es para personas adultas que se preparan para el examen de Ciencias del GED: quienes buscan trabajo, quienes regresan a casa después de estar en prisión, veteranos, jóvenes adultos, inmigrantes y cualquier persona que vuelve a estudiar. No necesitas ser experto en ciencias. El examen trata sobre todo de leer textos de ciencias, entender experimentos y trabajar con números y gráficas.",
    "El curso te prepara para el examen. No te da la credencial del GED. El GED Testing Service (la organización que hace el examen GED) administra el examen, y tu estado pone las reglas para tomarlo. Algunos estados usan otro examen llamado HiSET. Revisa ged.com y la oficina de educación para adultos de tu estado para conocer las reglas, los costos y las fechas de examen actuales.",
    "Cada lección enseña una habilidad con ejemplos resueltos y una práctica de \"Pruébalo ahora\" con las respuestas explicadas, y luego una comprobación rápida de dos preguntas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final.",
    "La tarea final es tu propio experimento pequeño y seguro en la cocina: planeas una prueba justa, anotas los datos en una tabla, calculas el promedio, dibujas una gráfica y escribes una conclusión que los datos respaldan."
  ],
  finalTask: "Planea y haz un experimento pequeño y seguro en la cocina (por ejemplo: ¿revolver el agua cambia qué tan rápido se disuelve el azúcar?). Escribe una pregunta y una hipótesis, nombra las variables independiente, dependiente y controladas, repite cada prueba tres veces, anota los resultados en una tabla, calcula la media de cada grupo, dibuja una gráfica de barras y escribe una conclusión de dos oraciones que los datos respalden. Agrega abajo tu plan de estudio para el GED con fechas.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que se preparan para el examen de Ciencias del GED: quienes buscan trabajo, quienes regresan a casa después de estar en prisión, veteranos, jóvenes adultos que dejaron la escuela, inmigrantes y adultos que vuelven a estudiar después de muchos años.",
    startingPoint: "Pueden leer textos de todos los días y hacer cuentas básicas. Muchos no han tomado una clase de ciencias en años y sienten que la materia es difícil o llena de datos para memorizar. Algunos todavía están ganando confianza con el inglés o con las matemáticas.",
    gap: "El examen de Ciencias del GED trata de leer textos de ciencias, entender cómo funcionan los experimentos y usar números, tablas y gráficas. Son habilidades que se pueden aprender, y también se usan en el trabajo en salud, manufactura, laboratorios y oficios.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada palabra de ciencias se explica",
      "Dispositivos: un teléfono, una computadora de la biblioteca, o papel y lápiz; una calculadora básica ayuda",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre el trabajo, las citas y la familia",
      "Seguridad: los experimentos en casa usan solo agua, azúcar, sal y agua de la llave a temperatura ambiente o tibia; nada de calor, fuego ni químicos",
      "Las reglas del examen, los costos y el examen que usa cada estado (GED o HiSET) cambian; los participantes revisan ged.com y su estado"
    ],
    prerequisites: "Ninguno. Quien necesite ayuda con los promedios o con leer una gráfica puede tomar al mismo tiempo el curso de Matemáticas del GED o un curso de matemáticas para la vida diaria."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Usando el sitio web oficial del GED", action: "enumerar las partes, los tipos de preguntas, el tiempo y las herramientas del examen de Ciencias del GED y escribir un plan de estudio con fechas", standard: "nombrando las tres áreas de habilidades y con al menos una fecha de estudio cada semana hasta el examen" },
    { id: "O2", condition: "Con un texto corto de ciencias", action: "identificar la idea principal y la afirmación que respaldan las pruebas del texto", standard: "señalando la oración o el número que respalda cada respuesta" },
    { id: "O3", condition: "Con la descripción de un experimento", action: "nombrar la hipótesis y las variables independiente, dependiente y controladas", standard: "acertando al menos 4 de 5" },
    { id: "O4", condition: "Con una tabla o una gráfica", action: "leer valores, describir la tendencia y elegir la conclusión que respaldan los datos", standard: "sin agregar datos que no están en la información" },
    { id: "O5", condition: "Con un pequeño conjunto de datos o una fórmula", action: "calcular la media, la mediana, la moda y el rango o usar la fórmula para encontrar una respuesta", standard: "con las unidades correctas y acertando al menos 4 de 5" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Leer ciencias y entender experimentos",
      lessons: [
        {
          title: "Cómo funciona el examen de Ciencias del GED",
          objectives: ["O1"],
          minutes: 5,
          goal: "Enumerar las partes y las herramientas del examen de Ciencias del GED y escribir un plan de estudio con fechas.",
          text: [
            "El GED tiene cuatro exámenes: Matemáticas, Razonamiento a través de las Artes del Lenguaje, Ciencias y Estudios Sociales. Puedes tomarlos uno por uno. El GED Testing Service hace el examen. Algunos estados usan otro examen de equivalencia de la escuela secundaria, el HiSET, así que revisa qué examen usa tu estado.",
            "En ged.com, el examen de Ciencias aparece con 90 minutos y sin descanso. Cubre tres áreas de habilidades: leer para entender textos de ciencias, diseñar e interpretar experimentos científicos, y usar números y gráficos en ciencias. Las preguntas son de opción múltiple, de llenar el espacio, de arrastrar y soltar, de seleccionar un área y de menú desplegable.",
            "Recibes una calculadora en pantalla y una hoja de referencia de la calculadora, y ged.com dice que puedes llevar tu propia calculadora TI-30XS a un centro de examen. Ged.com también dice que no necesitas memorizar fórmulas: la información que necesitas viene con cada pregunta. No es un examen de datos memorizados; mide cómo lees y razonas.",
            "Ged.com indica un puntaje para aprobar de 145 en cada materia. Los tiempos y las reglas pueden cambiar, así que revisa ged.com antes de reservar. Ged.com tiene exámenes de muestra gratis y un examen oficial de práctica, GED Ready."
          ],
          steps: ["Entra a ged.com y lee la página del examen de Ciencias.", "Anota el tiempo, las tres áreas de habilidades y las herramientas que recibes.", "Haz el examen de muestra gratis de Ciencias para ver cómo estás.", "Elige una semana meta para el examen.", "Escribe al menos una fecha de estudio cada semana, con la habilidad que vas a practicar."],
          words: [["GED", "un examen de equivalencia de la escuela secundaria; aprobar las cuatro materias da una credencial que muchos empleadores y universidades aceptan como un diploma."], ["HiSET", "otro examen de equivalencia de la escuela secundaria que usan algunos estados."], ["TI-30XS", "el modelo de calculadora de mano que el examen GED usa en pantalla y que se permite en los centros de examen."], ["Hoja de referencia de la calculadora", "una hoja que te dan en el examen y que muestra cómo usar las teclas de la calculadora."]],
          slides: [
            { title: "El examen de Ciencias del GED (revisa ged.com)", bullets: ["90 minutos, sin descanso", "Opción múltiple y otros tipos de preguntas", "Puntaje para aprobar indicado: 145"] },
            { title: "Tres áreas de habilidades", bullets: ["Leer para entender textos de ciencias", "Diseñar e interpretar experimentos", "Usar números y gráficos"] },
            { title: "Herramientas que recibes", bullets: ["Calculadora en pantalla y hoja de referencia", "Puedes llevar una TI-30XS a un centro de examen", "La información necesaria viene con cada pregunta"] },
            { title: "Haz un plan", bullets: ["Primero haz el examen de muestra gratis", "Elige una semana meta para el examen", "Estudia un poco casi todos los días de la semana"] }
          ],
          sources: [GED_SUBJECTS, GED_SCIENCE, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Abre ged.com y haz el examen de muestra gratis de Ciencias (o lee la página de Ciencias si no puedes hacerlo ahora). Escribe tu plan de estudio: tu semana meta para el examen y una fecha cada semana con la habilidad que vas a practicar: leer ciencias, experimentos, o números y gráficas. Guárdalo para la tarea final.",
          youCanNow: "nombrar las partes y las herramientas del examen de Ciencias del GED y seguir un plan de estudio con fechas.",
          quickCheck: [
            { objective: "O1", q: "Según ged.com, ¿qué necesitas memorizar para el examen de Ciencias del GED?", options: ["Todas las fórmulas de ciencias", "La tabla periódica", "No las fórmulas: la información que necesitas viene con cada pregunta", "Los nombres de todos los científicos"], answer: 2, why: "Ged.com dice que no necesitas memorizar fórmulas; la información necesaria se da en el examen." },
            { objective: "O1", q: "¿Cuál es una de las tres áreas de habilidades del examen de Ciencias?", options: ["Diseñar e interpretar experimentos científicos", "Deletrear palabras de ciencias", "Dibujar animales", "Armar una computadora"], answer: 0, why: "Ged.com indica leer para entender, experimentos, y números y gráficos." }
          ]
        },
        {
          title: "Leer un texto de ciencias",
          objectives: ["O2"],
          minutes: 5,
          goal: "Identificar la idea principal de un texto de ciencias y la afirmación que respaldan sus pruebas.",
          text: [
            "Los textos de ciencias parecen difíciles por las palabras nuevas, pero se leen igual que cualquier texto. Busca de qué trata sobre todo, y busca los datos y los números que lo respaldan. Muchas veces el texto explica una palabra difícil ahí mismo. Busca \"se llama\", \"significa\" o una explicación entre comas después de la palabra.",
            "Ejemplo resuelto. \"El sudor enfría el cuerpo. Cuando el sudor se evapora, o pasa de líquido a gas, se lleva calor de la piel. En los días húmedos, el aire ya tiene mucha agua, así que el sudor se evapora más despacio.\" Idea principal: sudar enfría el cuerpo por evaporación. Afirmación respaldada: puedes sentir más calor en los días húmedos porque el sudor se seca más despacio.",
            "Una afirmación está respaldada solo si el texto da pruebas de ella. \"Sudar quema grasa\" no está respaldada; el texto no dice nada sobre la grasa. Elige la respuesta que el texto demuestra, no la que suena más científica."
          ],
          steps: ["Lee primero la pregunta.", "Lee el texto; encierra en un círculo las palabras nuevas y busca su significado cerca.", "Di la idea principal en una oración.", "Para cada opción de respuesta, pregúntate: ¿dónde lo demuestra el texto?", "Tacha las opciones que agregan datos que el texto no da."],
          words: [["Evaporarse", "pasar de líquido a gas, como un charco que se seca."], ["Húmedo", "cuando el aire tiene mucho vapor de agua."], ["Afirmación", "una frase que dice que algo es verdad."], ["Respaldada", "apoyada por pruebas en el texto o en los datos."]],
          slides: [
            { title: "Lee ciencias como cualquier texto", bullets: ["¿De qué trata sobre todo?", "¿Qué datos y números lo respaldan?"] },
            { title: "Palabras nuevas", bullets: ["Busca \"se llama\" o \"significa\"", "Busca una explicación entre comas después de la palabra"] },
            { title: "¿Respaldada o no?", bullets: ["Respaldada: el texto lo demuestra", "No respaldada: agrega datos que no están en el texto", "No elijas una respuesta solo porque suena inteligente"] }
          ],
          tryIt: "Texto de práctica: \"Las plantas hacen su propio alimento mediante la fotosíntesis. Usan luz, agua y dióxido de carbono, un gas del aire, para hacer azúcar. Como resultado, liberan oxígeno.\" 1) ¿Idea principal? 2) ¿Qué afirmación está respaldada: (a) a una planta guardada en un clóset oscuro le costará hacer su alimento, o (b) las plantas necesitan refresco para crecer? Respuestas: 1) Las plantas hacen alimento con luz, agua y dióxido de carbono. 2) (a): el texto dice que las plantas necesitan luz. (b) no está en el texto.",
          youCanNow: "encontrar la idea principal de un texto de ciencias y elegir la afirmación que respaldan sus pruebas.",
          quickCheck: [
            { objective: "O2", q: "Un texto dice: \"Las vacunas entrenan al sistema inmunitario, el sistema de defensa del cuerpo, para reconocer los gérmenes.\" ¿Qué significa aquí \"sistema inmunitario\"?", options: ["Un tipo de germen", "El sistema de defensa del cuerpo", "El consultorio de un médico", "Un tipo de medicina que se traga"], answer: 1, why: "El significado aparece entre comas justo después de la palabra." },
            { objective: "O2", q: "Un texto dice que el acero se oxida más rápido en el aire húmedo y salado. ¿Qué afirmación está respaldada?", options: ["El acero nunca se oxida", "La sal hace más fuerte el acero", "El óxido solo aparece en los desiertos", "Un puente de acero cerca del mar puede necesitar más protección contra el óxido"], answer: 3, why: "El aire del mar es húmedo y salado, y el texto dice que eso acelera el óxido." }
          ]
        },
        {
          title: "Experimentos: hipótesis y variables",
          objectives: ["O3"],
          minutes: 6,
          goal: "Nombrar la hipótesis y las variables independiente, dependiente y controladas de un experimento.",
          text: [
            "Un experimento pone a prueba una pregunta. La hipótesis es una suposición que se puede comprobar sobre la respuesta, y muchas veces se escribe \"Si ..., entonces ...\". Por ejemplo: \"Si las plantas reciben más horas de luz, entonces crecerán más altas.\"",
            "La variable independiente es la única cosa que el científico cambia a propósito (las horas de luz). La variable dependiente es lo que se mide para ver el efecto (la altura de la planta). Las variables controladas se mantienen iguales para que la prueba sea justa (el mismo tipo de planta, la misma maceta, la misma agua, la misma tierra).",
            "Un truco para recordarlo: la variable dependiente depende de la independiente. La altura depende de la luz. Una prueba justa cambia solo una cosa a la vez. Si cambias la luz y el agua juntas, no puedes saber cuál hizo crecer la planta.",
            "Los buenos experimentos repiten cada prueba varias veces y muchas veces tienen un grupo de control, un grupo que no recibe ningún cambio, para comparar. Más pruebas hacen que los resultados sean más confiables."
          ],
          steps: ["Encuentra la pregunta que se pone a prueba.", "Encuentra la única cosa que se cambia a propósito: la variable independiente.", "Encuentra lo que se mide: la variable dependiente.", "Haz una lista de lo que se mantiene igual: las variables controladas.", "Revisa que solo cambie una cosa y que las pruebas se repitan."],
          words: [["Hipótesis", "una suposición que se puede comprobar, muchas veces \"Si ..., entonces ...\"."], ["Variable independiente", "la única cosa que cambias a propósito."], ["Variable dependiente", "lo que mides para ver el efecto."], ["Variable controlada", "algo que mantienes igual para que la prueba sea justa."], ["Grupo de control", "un grupo que no recibe ningún cambio y se usa para comparar."]],
          slides: [
            { title: "Hipótesis", bullets: ["Una suposición que se puede comprobar", "\"Si hay más luz, entonces las plantas crecen más\""] },
            { title: "Tres tipos de variables", bullets: ["Independiente: lo que cambias", "Dependiente: lo que mides", "Controlada: lo que mantienes igual"] },
            { title: "Una prueba justa", bullets: ["Cambia solo una cosa", "Repite cada prueba", "Compara con un grupo de control"] }
          ],
          tryIt: "Práctica: Una trabajadora prueba si un guante nuevo mantiene las manos más calientes. Diez trabajadores usan el guante nuevo y diez usan el guante viejo, afuera durante 30 minutos y a la misma hora. Se mide la temperatura de las manos. Nombra: 1) la variable independiente, 2) la variable dependiente, 3) dos variables controladas, 4) una hipótesis. Respuestas: 1) el tipo de guante; 2) la temperatura de las manos; 3) el tiempo afuera, el mismo clima, la misma hora del día; 4) \"Si los trabajadores usan el guante nuevo, entonces sus manos estarán más calientes.\"",
          youCanNow: "leer un experimento, nombrar su hipótesis y sus variables, y reconocer una prueba que no es justa.",
          quickCheck: [
            { objective: "O3", q: "Un estudiante prueba si la sal cambia qué tan rápido se derrite el hielo. ¿Cuál es la variable dependiente?", options: ["La cantidad de sal", "El tamaño de los cubos de hielo", "La temperatura del cuarto", "El tiempo que tarda el hielo en derretirse"], answer: 3, why: "El tiempo de derretido es lo que se mide; depende de la sal." },
            { objective: "O3", q: "¿Por qué un experimento debe cambiar solo una cosa a la vez?", options: ["Para saber qué cambio causó el resultado", "Para que sea más rápido", "Para usar menos papel", "No importa"], answer: 0, why: "Si cambian dos cosas, no puedes saber cuál hizo la diferencia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Leer ciencias y entender experimentos",
        questions: [
          { objective: "O1", q: "¿Qué herramienta dice ged.com que recibes en el examen de Ciencias?", options: ["Un teléfono", "Una calculadora en pantalla y una hoja de referencia de la calculadora", "Un libro de ciencias", "Un cuaderno con fórmulas que escribiste"], answer: 1, why: "Ged.com indica una calculadora en pantalla y una hoja de referencia de la calculadora." },
          { objective: "O2", q: "Un texto dice: \"El ejercicio sube la frecuencia cardiaca, el número de latidos por minuto.\" ¿Qué afirmación está respaldada?", options: ["El ejercicio baja la frecuencia cardiaca", "La frecuencia cardiaca se mide en millas", "El ejercicio hace que el corazón lata más veces por minuto", "La frecuencia cardiaca no cambia"], answer: 2, why: "El texto dice que el ejercicio sube los latidos por minuto." },
          { objective: "O3", q: "\"Si riego los tomates todos los días, entonces darán más fruta.\" ¿Qué es esto?", options: ["Una conclusión", "Una hipótesis", "Una tabla de datos", "Un grupo de control"], answer: 1, why: "Es una suposición que se puede comprobar, del tipo \"Si ..., entonces ...\"." },
          { objective: "O3", q: "En la prueba de los tomates, ¿cuál es la variable independiente?", options: ["Qué tan seguido se riegan las plantas", "La cantidad de fruta", "El tipo de tierra", "El tamaño de las macetas"], answer: 0, why: "El riego es lo que se cambia a propósito." },
          { objective: "O3", q: "¿Cuál es una variable controlada en la prueba de los tomates?", options: ["Qué tan seguido se riegan", "El número de tomates que crecen", "La hipótesis", "El mismo tipo de planta de tomate en todos los grupos"], answer: 3, why: "Usar el mismo tipo de planta mantiene la prueba justa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Números, tablas y gráficas en ciencias",
      lessons: [
        {
          title: "Leer tablas y gráficas",
          objectives: ["O4"],
          minutes: 5,
          goal: "Leer valores en una tabla o una gráfica, describir la tendencia y elegir la conclusión que respaldan los datos.",
          text: [
            "Muchas preguntas de ciencias te dan una tabla o una gráfica. Primero lee el título, las etiquetas y las unidades. En una gráfica, la etiqueta de abajo (eje x) suele ser la variable independiente, y la etiqueta del costado (eje y) es la variable dependiente.",
            "Ejemplo resuelto. Tabla: \"Horas de luz por día: 4, 8, 12. Altura promedio de las plantas después de 3 semanas: 5 cm, 9 cm, 14 cm.\" Leer un valor: con 8 horas, las plantas crecieron 9 cm. Tendencia: cuando sube la luz, sube la altura. Conclusión respaldada: en esta prueba, más luz fue de la mano con plantas más altas.",
            "No vayas más allá de los datos. La tabla no muestra 20 horas de luz, así que no puedes decir qué pasa en ese caso. Tampoco muestra el agua ni la tierra, así que una conclusión sobre ellas no está respaldada.",
            "Tipos de gráficas: una gráfica de barras compara grupos, una gráfica de líneas muestra un cambio en el tiempo o una tendencia, y una gráfica circular muestra las partes de un todo."
          ],
          steps: ["Lee el título, las etiquetas y las unidades.", "Encuentra el valor por el que pregunta la pregunta.", "Describe la tendencia: sube, baja o no hay un patrón claro.", "Elige la conclusión que se queda dentro de los datos.", "Tacha las respuestas sobre cosas que los datos no muestran."],
          words: [["Tendencia", "la dirección general de los datos: sube, baja o se mantiene igual."], ["Eje x", "la línea que va a lo largo de la parte de abajo de una gráfica."], ["Eje y", "la línea que sube por el costado de una gráfica."], ["Unidades", "en qué se mide un número, como cm, grados o minutos."]],
          slides: [
            { title: "Primero lee las etiquetas", bullets: ["Título, etiquetas y unidades", "Abajo (eje x): casi siempre lo que se cambió", "Costado (eje y): casi siempre lo que se midió"] },
            { title: "Encuentra la tendencia", bullets: ["Sube, baja o no hay un patrón claro", "Dila en una oración"] },
            { title: "Quédate dentro de los datos", bullets: ["No adivines más allá de los números que se muestran", "No saques conclusiones sobre cosas que no se midieron"] },
            { title: "Tipos de gráficas", bullets: ["Barras: compara grupos", "Líneas: cambio en el tiempo", "Circular: partes de un todo"] }
          ],
          tryIt: "Tabla de práctica: \"Temperatura del agua (grados C): 10, 20, 30, 40. Tiempo para que se disuelva un cubo de azúcar (segundos): 120, 90, 60, 40.\" 1) ¿Cuánto tarda a 30 grados? 2) ¿Cuál es la tendencia? 3) ¿Qué conclusión está respaldada: (a) en esta prueba, el agua más caliente disolvió el azúcar más rápido, o (b) la sal se disuelve más rápido que el azúcar? Respuestas: 1) 60 segundos. 2) Cuando sube la temperatura, baja el tiempo para disolverse. 3) (a); la sal no se probó.",
          youCanNow: "leer una tabla o una gráfica, describir su tendencia y elegir una conclusión que respaldan los datos.",
          quickCheck: [
            { objective: "O4", q: "Una gráfica muestra que la temperatura promedio de un pueblo sube cada década de 1980 a 2020. ¿Cuál es la tendencia?", options: ["Baja", "No cambia", "Sube con el tiempo", "No se puede leer"], answer: 2, why: "Los valores suben a lo largo de las décadas." },
            { objective: "O4", q: "Una tabla muestra la altura de las plantas con 4, 8 y 12 horas de luz. ¿Qué conclusión va más allá de los datos?", options: ["Las plantas con 8 horas crecieron más que las de 4", "Las plantas con 24 horas de luz serán las más altas", "La altura subió cuando subió la luz", "Las plantas con 12 horas crecieron más en esta prueba"], answer: 1, why: "No se probaron 24 horas, así que los datos no pueden decirte eso." }
          ]
        },
        {
          title: "Matemáticas para ciencias: promedios, rango y fórmulas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular la media, la mediana, la moda y el rango de un conjunto de datos y usar una fórmula dada.",
          text: [
            "Conjunto de datos (solo de práctica): frecuencia cardiaca después de una caminata, en latidos por minuto: 80, 84, 84, 90, 92. Media (promedio): súmalos y divide entre cuántos son: 430 / 5 = 86. Mediana: el número del medio cuando están en orden: 84. Moda: el número que más se repite: 84. Rango: el mayor menos el menor: 92 - 80 = 12.",
            "Si hay un número par de valores, la mediana es la media de los dos números del medio. Para 3, 5, 7, 9: (5 + 7) / 2 = 6.",
            "En el examen te dan las fórmulas. Pon los números en la fórmula y conserva las unidades. Velocidad = distancia / tiempo: un camión recorre 120 millas en 2 horas, así que velocidad = 120 / 2 = 60 millas por hora. Densidad = masa / volumen: un bloque de 40 gramos con un volumen de 20 centímetros cúbicos tiene una densidad de 40 / 20 = 2 gramos por centímetro cúbico.",
            "Revisa que tu respuesta tenga sentido. Una media tiene que estar entre el valor más pequeño y el más grande. Escribe la unidad con cada respuesta."
          ],
          steps: ["Pon los datos en orden del más pequeño al más grande.", "Media: suma todos los valores y divide entre cuántos son.", "Mediana: busca el del medio (o el promedio de los dos del medio).", "Moda: el valor más común. Rango: el mayor menos el menor.", "Para una fórmula: escríbela, pon los números, resuelve y agrega las unidades."],
          words: [["Media", "el promedio: el total dividido entre cuántos valores hay."], ["Mediana", "el valor del medio cuando los números están en orden."], ["Moda", "el valor que aparece más veces."], ["Rango", "el valor más grande menos el más pequeño."], ["Densidad", "cuánta masa hay en un espacio: la masa dividida entre el volumen."]],
          slides: [
            { title: "Cuatro números que describen los datos", bullets: ["Media: el total dividido entre cuántos son", "Mediana: el valor del medio, en orden", "Moda: el valor más común", "Rango: el mayor menos el menor"] },
            { title: "Ejemplo resuelto", bullets: ["Datos: 80, 84, 84, 90, 92", "Media 86, mediana 84, moda 84, rango 12"] },
            { title: "Usar una fórmula dada", bullets: ["Velocidad = distancia / tiempo", "Densidad = masa / volumen", "Pon los números, resuelve y escribe las unidades"] }
          ],
          tryIt: "Solo de práctica. 1) Minutos que tarda un cubo de hielo en derretirse en cinco pruebas: 6, 7, 7, 8, 12. Calcula la media, la mediana, la moda y el rango. 2) Una ciclista recorre 30 millas en 3 horas. Velocidad = distancia / tiempo. Respuestas: 1) Media 40 / 5 = 8 minutos; mediana 7; moda 7; rango 12 - 6 = 6 minutos. 2) 30 / 3 = 10 millas por hora.",
          youCanNow: "calcular la media, la mediana, la moda y el rango de unos datos y usar una fórmula de ciencias con las unidades correctas.",
          quickCheck: [
            { objective: "O5", q: "Datos: 2, 4, 4, 6, 9. ¿Cuál es la media?", options: ["4", "5", "6", "7"], answer: 1, why: "2 + 4 + 4 + 6 + 9 = 25, y 25 / 5 = 5." },
            { objective: "O5", q: "Una piedra tiene una masa de 60 gramos y un volumen de 20 centímetros cúbicos. Densidad = masa / volumen. ¿Cuál es la densidad?", options: ["40 gramos por centímetro cúbico", "1200 gramos por centímetro cúbico", "80 gramos por centímetro cúbico", "3 gramos por centímetro cúbico"], answer: 3, why: "60 / 20 = 3 gramos por centímetro cúbico." }
          ]
        },
        {
          title: "Todo junto: tu propia prueba justa",
          objectives: ["O3", "O4", "O5"],
          minutes: 6,
          goal: "Planear una prueba justa, anotar los datos en una tabla, calcular la media y escribir una conclusión que respaldan los datos.",
          text: [
            "Ahora usa todas las habilidades a la vez. Muchas preguntas del examen describen un experimento completo con una tabla y luego preguntan por las variables, las cuentas y la conclusión. Hacer tú mismo un experimento pequeño hace mucho más fáciles estas preguntas.",
            "Ejemplo seguro en la cocina. Pregunta: ¿revolver cambia qué tan rápido se disuelve el azúcar? Hipótesis: si se revuelve el agua, entonces el azúcar se disolverá más rápido. Variable independiente: revuelto o sin revolver. Variable dependiente: tiempo para disolverse (segundos). Controladas: el mismo vaso, la misma cantidad de agua de la llave, la misma temperatura del agua, un cubo de azúcar cada vez. Haz tres pruebas de cada uno.",
            "Resultados de ejemplo (solo de práctica). Revuelto: 40, 45, 50 segundos; media 45. Sin revolver: 170, 180, 190 segundos; media 180. Conclusión: en esta prueba, revolver hizo que el azúcar se disolviera más rápido, unas 4 veces más rápido en promedio. Una gráfica de barras con dos barras (revuelto, sin revolver) lo muestra con claridad.",
            "Seguridad: usa solo agua de la llave a temperatura ambiente o tibia de la llave, azúcar o sal, y vasos limpios. Nada de estufa, nada de fuego y nada de productos químicos de limpieza. No bebas ni pruebes nada durante el experimento."
          ],
          steps: ["Escribe tu pregunta y una hipótesis del tipo \"Si ..., entonces ...\".", "Nombra las variables independiente, dependiente y controladas.", "Haz al menos tres pruebas de cada grupo y escribe los resultados en una tabla.", "Calcula la media de cada grupo.", "Dibuja una gráfica de barras y escribe una conclusión de dos oraciones que se quede dentro de tus datos."],
          words: [["Prueba", "una vez que haces el experimento."], ["Tabla de datos", "filas y columnas donde guardas tus resultados."], ["Conclusión", "lo que muestran los resultados, en una o dos oraciones."]],
          slides: [
            { title: "Tu prueba justa", bullets: ["Pregunta e hipótesis", "Variables independiente, dependiente y controladas", "Tres pruebas por grupo"] },
            { title: "Anota y calcula", bullets: ["Escribe los resultados en una tabla", "Calcula la media de cada grupo", "Dibuja una gráfica de barras"] },
            { title: "Escribe la conclusión", bullets: ["Di lo que muestran los datos", "Quédate dentro de tus datos", "Nombra una forma de mejorar la prueba"] },
            { title: "Cuídate", bullets: ["Solo agua de la llave, azúcar o sal", "Nada de estufa, fuego ni químicos", "No pruebes ni bebas las muestras"] }
          ],
          tryIt: "Tarea final: haz tu propio experimento pequeño y seguro en la cocina (revolver y azúcar, u otra prueba de un solo cambio con agua, azúcar o sal). Escribe la pregunta, la hipótesis y las variables, anota tres pruebas por grupo en una tabla, calcula cada media, dibuja una gráfica de barras y escribe una conclusión de dos oraciones. Agrega abajo tu plan de estudio para el GED con fechas y califícalo con la rúbrica.",
          youCanNow: "planear y hacer una prueba justa, anotar y promediar los datos, y escribir una conclusión que los datos respaldan.",
          quickCheck: [
            { objective: "O3", q: "En la prueba de revolver, ¿qué debe quedarse igual para que la prueba sea justa?", options: ["La cantidad y la temperatura del agua", "Si el agua se revuelve o no", "El tiempo para disolverse", "La conclusión"], answer: 0, why: "La cantidad y la temperatura del agua son variables controladas; solo cambia el revolver." },
            { objective: "O4", q: "Media revuelto: 45 segundos. Media sin revolver: 180 segundos. ¿Qué conclusión está respaldada?", options: ["Revolver hace el azúcar más dulce", "En esta prueba, revolver hizo que el azúcar se disolviera más rápido", "La sal se disuelve más rápido que el azúcar", "Revolver no tiene ningún efecto"], answer: 1, why: "En los vasos revueltos se disolvió mucho más rápido, y la conclusión se queda dentro de los datos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Números, tablas y gráficas en ciencias",
        questions: [
          { objective: "O4", q: "En la mayoría de las gráficas de ciencias, ¿qué se muestra en el eje de abajo (eje x)?", options: ["El título", "La conclusión", "Casi siempre la variable independiente, lo que se cambió", "Las unidades de dinero"], answer: 2, why: "El eje x suele mostrar lo que el científico cambió." },
          { objective: "O4", q: "¿Qué gráfica es mejor para comparar la altura promedio de las plantas de tres grupos?", options: ["Una gráfica de barras", "Un mapa", "Una gráfica circular de todo el jardín", "Una foto"], answer: 0, why: "Las gráficas de barras comparan grupos lado a lado." },
          { objective: "O5", q: "Datos: 10, 12, 15, 15, 18. ¿Cuál es el rango?", options: ["15", "14", "13", "8"], answer: 3, why: "18 - 10 = 8." },
          { objective: "O5", q: "Datos: 3, 8, 6, 1, 7. ¿Cuál es la mediana?", options: ["3", "6", "7", "5"], answer: 1, why: "En orden: 1, 3, 6, 7, 8. El valor del medio es 6." },
          { objective: "O5", q: "Un autobús recorre 150 millas en 3 horas. Velocidad = distancia / tiempo. ¿Cuál es la velocidad?", options: ["450 millas por hora", "153 millas por hora", "50 millas por hora", "147 millas por hora"], answer: 2, why: "150 / 3 = 50 millas por hora." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para el examen GED: Ciencias",
    questions: [
      { objective: "O1", q: "¿Qué hace este curso por ti?", options: ["Te prepara para el examen de Ciencias del GED", "Te da una credencial del GED", "Te convierte en científico con licencia", "Reemplaza el examen GED"], answer: 0, why: "El curso te prepara; el GED Testing Service administra el examen y tu estado otorga la credencial." },
      { objective: "O1", q: "¿Cuál es otro examen de equivalencia de la escuela secundaria que usan algunos estados?", options: ["ACT", "CDL", "HiSET", "TOEFL"], answer: 2, why: "HiSET es otro examen de equivalencia de la escuela secundaria." },
      { objective: "O1", q: "¿Qué área de habilidades del examen de Ciencias indica ged.com?", options: ["Memorizar los nombres de los huesos", "Usar números y gráficos en ciencias", "Dibujar mapas", "Escribir poemas"], answer: 1, why: "Las tres áreas son leer para entender, experimentos, y números y gráficos." },
      { objective: "O1", q: "¿Dónde debes revisar el tiempo, los costos y las reglas actuales del examen GED?", options: ["En un volante viejo", "Con un amigo", "En un comentario de un video", "En ged.com y en la oficina de educación para adultos de tu estado"], answer: 3, why: "Las reglas y los costos cambian; las fuentes oficiales tienen los actuales." },
      { objective: "O2", q: "Un texto explica una palabra nueva entre comas justo después de ella. ¿Qué debes hacer?", options: ["Saltarte el texto", "Usar ese significado para entender el texto", "Adivinar otro significado", "Buscarla en tu teléfono durante el examen"], answer: 1, why: "Los textos muchas veces explican las palabras difíciles ahí mismo." },
      { objective: "O2", q: "Un texto dice que las abejas llevan polen entre las flores, y eso ayuda a muchos cultivos a dar fruta. ¿Qué afirmación está respaldada?", options: ["Menos abejas podría significar menos fruta en algunos cultivos", "Las abejas hacen toda la comida", "Las abejas comen fruta", "Las flores no necesitan polen"], answer: 0, why: "Si las abejas ayudan a los cultivos a dar fruta, menos abejas podría bajar la fruta." },
      { objective: "O2", q: "¿Qué opción de respuesta debes tachar?", options: ["Una que el texto demuestra", "Una con un número del texto", "Una que agrega datos que el texto nunca da", "Una que repite la idea principal"], answer: 2, why: "Las respuestas que agregan datos que no están en el texto no están respaldadas." },
      { objective: "O3", q: "¿Qué es una hipótesis?", options: ["La respuesta final", "Una suposición que se puede comprobar, muchas veces \"Si ..., entonces ...\"", "Una gráfica", "Una lista de herramientas"], answer: 1, why: "Una hipótesis es una suposición que se puede comprobar sobre lo que va a pasar." },
      { objective: "O3", q: "Una prueba revisa si la música cambia qué tan rápido los trabajadores empacan cajas. ¿Cuál es la variable independiente?", options: ["El número de cajas empacadas", "El tamaño de las cajas", "La hora del día", "Con música o sin música"], answer: 3, why: "La música es la única cosa que se cambia a propósito." },
      { objective: "O3", q: "En la prueba de la música, ¿cuál es la variable dependiente?", options: ["El número de cajas empacadas", "Con música o sin música", "Los nombres de los trabajadores", "El tipo de cinta"], answer: 0, why: "Las cajas empacadas son lo que se mide." },
      { objective: "O3", q: "¿Por qué se repite cada prueba varias veces?", options: ["Para usar más materiales", "Para que la prueba dure más", "Para que los resultados sean más confiables", "Para cambiar más variables"], answer: 2, why: "Más pruebas bajan la probabilidad de que un resultado raro te confunda." },
      { objective: "O3", q: "¿Qué es un grupo de control?", options: ["El grupo con más personas", "Un grupo que no recibe ningún cambio, para comparar", "Los científicos que hacen la prueba", "Un grupo que cambia dos cosas"], answer: 1, why: "El grupo de control muestra lo que pasa sin el cambio." },
      { objective: "O4", q: "Una gráfica de líneas muestra que la temperatura de un paciente baja cada hora después de un medicamento (solo de práctica). ¿Cuál es la tendencia?", options: ["Baja", "Sube", "Se mantiene igual", "No hay datos"], answer: 0, why: "Los valores bajan cada hora." },
      { objective: "O4", q: "¿Qué debes leer primero en una gráfica?", options: ["El número más pequeño", "Solo las opciones de respuesta", "El color de las barras", "El título, las etiquetas y las unidades"], answer: 3, why: "Las etiquetas y las unidades te dicen qué significan los números." },
      { objective: "O4", q: "Una tabla probó agua a 10, 20 y 30 grados. ¿Qué frase va más allá de los datos?", options: ["Se probó agua a 30 grados", "El resultado de 20 grados está en la tabla", "A 100 grados el azúcar se disuelve al instante", "La prueba usó tres temperaturas"], answer: 2, why: "No se probaron 100 grados, así que los datos no pueden mostrar eso." },
      { objective: "O4", q: "¿Qué gráfica muestra las partes de un todo?", options: ["Gráfica de líneas", "Gráfica circular", "Diagrama de dispersión", "Recta numérica"], answer: 1, why: "Una gráfica circular divide un todo en partes." },
      { objective: "O5", q: "Datos: 5, 7, 7, 9, 12. ¿Cuál es la moda?", options: ["5", "8", "12", "7"], answer: 3, why: "El 7 aparece más veces." },
      { objective: "O5", q: "Datos: 6, 8, 10, 12. ¿Cuál es la mediana?", options: ["9", "8", "10", "36"], answer: 0, why: "Los dos valores del medio son 8 y 10, y (8 + 10) / 2 = 9." },
      { objective: "O5", q: "Un carro recorre 200 millas en 4 horas. Velocidad = distancia / tiempo. ¿Cuál es la velocidad?", options: ["800 millas por hora", "50 millas por hora", "204 millas por hora", "196 millas por hora"], answer: 1, why: "200 / 4 = 50 millas por hora." },
      { objective: "O5", q: "Datos: 20, 30, 40. ¿Cuál es la media?", options: ["90", "20", "30", "40"], answer: 2, why: "20 + 30 + 40 = 90, y 90 / 3 = 30." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [2, 3, 5, 8, 9, 13, 14, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a hacer la prueba.",
    criteria: [
      { name: "Pregunta e hipótesis", objective: "O3", notYet: "No hay pregunta, o la hipótesis no se puede comprobar.", meets: "Una pregunta clara y una hipótesis del tipo \"Si ..., entonces ...\".", exceeds: "La hipótesis también dice por qué la persona espera ese resultado." },
      { name: "Variables y prueba justa", objective: "O3", notYet: "Faltan variables o cambia más de una cosa.", meets: "Se nombran la variable independiente, la dependiente y al menos dos controladas; solo cambia una cosa.", exceeds: "También incluye un grupo de control y explica por qué importa cada variable controlada." },
      { name: "Datos y cuentas", objective: "O5", notYet: "Menos de tres pruebas por grupo, o la media está mal.", meets: "Tres pruebas por grupo en una tabla, con una media correcta y sus unidades.", exceeds: "También da el rango de cada grupo y comenta cuánto variaron las pruebas." },
      { name: "Gráfica y conclusión", objective: "O4", notYet: "No hay gráfica, o la conclusión dice más de lo que muestran los datos.", meets: "Una gráfica de barras con etiquetas y una conclusión de dos oraciones que se queda dentro de los datos.", exceeds: "También nombra una forma de mejorar la prueba la próxima vez." },
      { name: "Leer los resultados", objective: "O2", notYet: "La conclusión no coincide con los números.", meets: "La conclusión coincide con los números de la tabla.", exceeds: "Señala los números exactos que respaldan la conclusión." },
      { name: "Plan de estudio", objective: "O1", notYet: "No hay plan de estudio, o no tiene fechas.", meets: "Un plan de estudio con al menos una fecha cada semana hasta la semana meta del examen.", exceeds: "También incluye una fecha para GED Ready o una fecha de examen ya reservada." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y sacan Cumple o más en todas las filas de la rúbrica",
      "Participantes que hacen GED Ready o un examen de muestra gratis de ged.com en 30 días",
      "Participantes que reservan o aprueban el examen de Ciencias del GED en 90 días (según lo que ellos informan)",
      "Los programas aliados informan que más participantes pasan a capacitación laboral en salud, laboratorios u oficios"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono, una tableta o una computadora con internet, o las lecciones impresas",
      "Papel, lápiz y una calculadora básica (la calculadora del teléfono sirve para practicar)",
      "Para la tarea final: dos vasos limpios, agua de la llave, cubos de azúcar o sal, una cuchara y el cronómetro del teléfono",
      "Exámenes de muestra gratis de ged.com; GED Ready si el participante decide comprarlo",
      "Unos 90 minutos para las lecciones y las comprobaciones, más unos 45 minutos para la tarea final"
    ],
    facilitatorNotes: [
      "Empiece con la prueba inicial y el examen de muestra gratis de Ciencias de ged.com para ver qué área de habilidades necesita más cada participante.",
      "Haga primero el experimento de revolver como demostración en grupo, y luego pida a los participantes que diseñen su propia prueba de un solo cambio.",
      "Revise la seguridad de cada plan de experimento antes de que los participantes lo hagan: nada de fuentes de calor, fuego, químicos ni probar las muestras.",
      "Practiquen leer gráficas en voz alta: título, etiquetas, unidades, tendencia y luego la conclusión.",
      "Revise qué examen usa su estado (GED o HiSET) y comparta los lugares de examen locales y cualquier ayuda con los costos."
    ]
  }
};
