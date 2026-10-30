"use strict";

// Koach Learn course (Spanish translation of shared/ged-math.js). See scripts/koachlearn-courses/README.md, "Translations".
// The content stays about the US GED Math test; GED, HiSET, GED Ready, TI-30XS and ged.com are kept as written.
// Math is written exactly as in the English (x for times, ^ for powers, / for divide, a point for decimals) so it matches the test screen.

const GED_SUBJECTS = { name: "GED Testing Service: Materias del examen (Matemáticas)", url: "https://www.ged.com/about-test/test-subjects.html" };
const GED_MATH = { name: "GED Testing Service: Examen de Matemáticas, hoja de fórmulas y pregunta de muestra", url: "https://ged.com/about_test/test_subjects/math/" };
const GED_PRACTICE = { name: "GED Testing Service: Exámenes de muestra gratis y GED Ready", url: "https://www.ged.com/practice-test/" };
const GED_CALC = { name: "GED Testing Service: Hoja de referencia de la calculadora TI-30XS (PDF)", url: "https://www.ged.com/wp-content/uploads/calculator_sheet.pdf" };
const HISET = { name: "HiSET: examen de equivalencia de la escuela secundaria", url: "https://hiset.org/" };

module.exports = {
  id: "ged-math-es",
  lang: "es",
  translationOf: "ged-math",
  category: "Workforce Development",
  name: "Preparación para el examen GED: Matemáticas",
  skills: "Conocer el examen de Matemáticas del GED y hacer un plan de estudio, Operaciones con números sin calculadora, Razones, porcentajes y datos, Resolver ecuaciones y desigualdades, Geometría con la hoja de fórmulas, Pendiente, gráficas y funciones",
  outcome: "resolver los principales tipos de problemas del examen de Matemáticas del GED (operaciones con números, porcentajes y datos, ecuaciones, geometría con la hoja de fórmulas y gráficas) y seguir un plan de estudio y de examen con fechas que te prepare para presentar el examen de Matemáticas del GED.",
  about: [
    "Este curso es para personas adultas que buscan un diploma de equivalencia de la escuela secundaria (high school): jóvenes adultos, personas que regresan a casa después de estar en prisión, inmigrantes, veteranos y cualquiera que vuelve a estudiar. Un diploma abre puertas a empleos, programas de capacitación y la universidad.",
    "El examen GED tiene cuatro materias, y Matemáticas (llamada Razonamiento Matemático) es una de ellas. Lo ofrece GED Testing Service, la organización oficial del GED, en una computadora. El examen de Matemáticas cubre Matemáticas básicas, Geometría, Álgebra básica, y Gráficas y funciones. Te dan una hoja de fórmulas, así que no tienes que memorizar fórmulas. Algunos estados usan el examen HiSET en lugar del GED o además del GED; la oficina de educación para adultos de tu estado o ged.com te dice cuál.",
    "Vas a aprender cómo funciona el examen de Matemáticas y luego practicarás cada tipo de problema con ejemplos resueltos y ejercicios con las respuestas explicadas. Terminas con tu propio plan de estudio y de examen con fechas.",
    "Este curso te prepara para el examen; no te da el diploma GED. Solo aprobar el examen GED oficial lo hace. Revisa ged.com para ver las reglas actuales de tu estado, el costo, si puedes presentar el examen en un centro o en línea, y los exámenes de práctica oficiales. Cada lección dura unos seis minutos, con una comprobación rápida después, una comprobación de conocimientos al final de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz tu propio plan de estudio y de examen de Matemáticas del GED: presenta el examen de muestra gratis de Matemáticas del GED (GED Math Sample Test) en ged.com y escribe tu resultado; anota tus 3 temas más débiles según ese examen y los exámenes de este curso; escribe un horario de estudio semanal con fechas reales para las próximas 6 a 8 semanas (qué tema, qué día, cuánto tiempo); resuelve una serie de práctica de 12 problemas (2 de cada lección) y explica los que fallaste; y escribe las fechas en que piensas presentar el examen de práctica oficial GED Ready y el examen de Matemáticas del GED, después de revisar las reglas y los costos de tu estado en ged.com.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas y jóvenes adultos sin diploma de escuela secundaria: personas que regresan a casa después de estar en prisión, inmigrantes, veteranos, madres, padres y trabajadores que necesitan un diploma para un empleo, un ascenso o la universidad. Muchas dejaron la escuela hace años; algunas tuvieron malas experiencias con las matemáticas.",
    startingPoint: "Pueden sumar, restar, multiplicar y dividir números enteros, muchas veces con calculadora. Muchas tienen olvidadas las fracciones, los números negativos y los porcentajes, y saben poco o nada de álgebra. La mayoría no ha visto el formato del examen GED ni su calculadora.",
    gap: "El examen de Matemáticas del GED pide operaciones con números, porcentajes y datos, álgebra, geometría con una hoja de fórmulas y gráficas, en 115 minutos y en una computadora. Las personas necesitan conocer el formato del examen, practicar cada tipo de problema con ejemplos resueltos y seguir un plan de estudio para presentarse cuando estén listas. Aprobar abre puertas a empleos, capacitación y la universidad.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada palabra de matemáticas se explica",
      "Dispositivos: un teléfono o una computadora para el examen de muestra gratis del GED; papel y lápiz para practicar",
      "Calculadora: practicar con una TI-30XS si es posible, o con una calculadora científica gratis en línea",
      "Tiempo: lecciones de 5 a 6 minutos, más un horario de estudio semanal que fija cada persona",
      "Las reglas, los costos y las opciones de examen cambian según el estado y con el tiempo: siempre remitir a ged.com o a la oficina del estado",
      "Ansiedad con las matemáticas: muchos ejemplos resueltos, comprobar las respuestas, sin presión de tiempo al practicar"
    ],
    prerequisites: "Sumar, restar, multiplicar y dividir números enteros. Quien no esté seguro con las fracciones, los decimales y los porcentajes puede tomar primero \"Matemáticas cotidianas para el trabajo y la vida\"."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Usando ged.com y el examen de muestra gratis de Matemáticas del GED", action: "enumerar las áreas de contenido, el tiempo, las reglas de la calculadora y los tipos de preguntas del examen de Matemáticas del GED, y escribir un plan de estudio y de examen con fechas", standard: "con un horario semanal de 6 a 8 semanas y una fecha meta para el examen" },
    { id: "O2", condition: "Sin calculadora", action: "resolver problemas con el orden de las operaciones, fracciones, números negativos, exponentes y raíces cuadradas", standard: "acertando al menos 4 de 5" },
    { id: "O3", condition: "Con problemas escritos y pequeños conjuntos de datos", action: "resolver problemas de razones, proporciones y porcentajes, y hallar la media, la mediana, la moda y el rango", standard: "acertando al menos 4 de 5" },
    { id: "O4", condition: "Con un problema escrito o una ecuación", action: "escribir y resolver ecuaciones y desigualdades lineales de una variable", standard: "acertando al menos 4 de 5 y comprobando cada respuesta al sustituirla" },
    { id: "O5", condition: "Usando una hoja de fórmulas y una calculadora", action: "calcular el perímetro, el área, el volumen y el lado que falta de un triángulo rectángulo", standard: "acertando al menos 4 de 5, con las unidades correctas" },
    { id: "O6", condition: "Con una gráfica, una tabla, dos puntos o una función", action: "hallar la pendiente, leer valores y evaluar la función", standard: "acertando al menos 4 de 5" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El examen, los números y los datos",
      lessons: [
        {
          title: "El examen de Matemáticas del GED y tu plan de estudio",
          objectives: ["O1"],
          minutes: 6,
          goal: "Enumerar cómo funciona el examen de Matemáticas del GED y empezar un plan de estudio con fechas.",
          text: [
            "El examen GED tiene cuatro materias: Matemáticas, Razonamiento a través de las artes del lenguaje (Reasoning Through Language Arts), Ciencias y Estudios sociales. Puedes presentarlas una a la vez. El examen de Matemáticas se llama Razonamiento Matemático (Mathematical Reasoning). Cubre cuatro áreas: Matemáticas básicas, Geometría, Álgebra básica, y Gráficas y funciones.",
            "Según ged.com, el examen de Matemáticas dura 115 minutos, incluido el tiempo para instrucciones y repaso. Tiene partes, con un descanso corto entre ellas. En la parte 2 te dan una calculadora en pantalla; en un centro de examen puedes llevar tu propia calculadora TI-30XS. Algunas preguntas se hacen sin calculadora, así que también necesitas hacer cuentas mentalmente y en papel. Te dan una hoja de fórmulas y una hoja de referencia de la calculadora, así que no tienes que memorizar fórmulas.",
            "Los tipos de preguntas incluyen opción múltiple, arrastrar y soltar, llenar el espacio en blanco, seleccionar un área (hacer clic en una gráfica o una imagen) y menú desplegable. Revisa ged.com antes del examen, porque los detalles pueden cambiar. En algunos estados se usa el examen HiSET en lugar del GED o además del GED; tu estado decide.",
            "Empieza con el examen de muestra gratis de Matemáticas del GED en ged.com. Te muestra la pantalla y los tipos de preguntas. Úsalo para encontrar tus temas débiles. Cuando estés más cerca, el examen de práctica oficial, GED Ready, te dice si es probable que estés listo (revisa su costo en ged.com). Luego arma un plan de estudio: sesiones cortas, varios días a la semana, un tema a la vez."
          ],
          steps: ["Entra a ged.com y lee la página del examen de Matemáticas y las reglas de tu estado.", "Presenta el examen de muestra gratis de Matemáticas del GED y escribe tu resultado.", "Anota los temas que te parecieron difíciles.", "Elige días y horas de estudio para las próximas 6 a 8 semanas, con fechas reales.", "Pon un tema en cada día de estudio, empezando por el más débil.", "Elige una fecha para presentar GED Ready y una fecha meta para el examen real."],
          words: [["GED", "un examen de equivalencia de la escuela secundaria de GED Testing Service; aprobar las cuatro materias da un diploma de equivalencia de la escuela secundaria."], ["HiSET", "otro examen de equivalencia de la escuela secundaria que se usa en algunos estados."], ["Hoja de fórmulas", "una página con fórmulas de matemáticas que te dan durante el examen."], ["TI-30XS", "el modelo de calculadora científica que se usa en el examen de Matemáticas del GED."], ["GED Ready", "el examen de práctica oficial del GED que muestra si es probable que estés listo."], ["Plan de estudio", "un horario escrito de qué vas a estudiar y cuándo."]],
          slides: [
            { title: "Matemáticas del GED (Razonamiento Matemático)", bullets: ["Matemáticas básicas, Geometría, Álgebra básica, Gráficas y funciones", "115 minutos, en computadora, con un descanso corto", "Te dan la hoja de fórmulas y la hoja de referencia de la calculadora"] },
            { title: "Calculadora y tipos de preguntas", bullets: ["Calculadora en pantalla en la parte 2; o tu propia TI-30XS en un centro", "Algunas preguntas sin calculadora", "Opción múltiple, arrastrar y soltar, llenar, seleccionar un área, desplegable"] },
            { title: "Exámenes de práctica", bullets: ["Examen de muestra gratis de Matemáticas del GED en ged.com", "GED Ready: el examen de práctica oficial (revisa el costo)", "Algunos estados usan HiSET: revisa tu estado"] },
            { title: "Tu plan de estudio", bullets: ["Empieza por tus temas más débiles", "Sesiones cortas, varios días a la semana, fechas reales", "Elige una fecha para GED Ready y una fecha meta para el examen"] }
          ],
          tryIt: "Entra a ged.com y presenta el examen de muestra gratis de Matemáticas del GED. Escribe tu resultado y los temas que te parecieron difíciles. Luego, en papel, haz un calendario para las próximas 6 a 8 semanas: encierra en un círculo tus días de estudio, escribe una hora para cada uno y pon tu tema más difícil el primer día. Este es el comienzo de tu tarea final.",
          youCanNow: "describir el examen de Matemáticas del GED (contenido, tiempo, calculadora, hoja de fórmulas, tipos de preguntas) y empezar un plan de estudio con fechas.",
          quickCheck: [
            { objective: "O1", q: "¿Tienes que memorizar fórmulas para el examen de Matemáticas del GED?", options: ["Sí, todas las fórmulas", "No, te dan una hoja de fórmulas", "Solo las que están en la parte de atrás de la calculadora", "Solo si presentas el examen en línea"], answer: 1, why: "GED Testing Service te da una hoja de fórmulas durante el examen." },
            { objective: "O1", q: "¿Dónde debes revisar las reglas y los costos actuales del GED en tu estado?", options: ["En una publicación de redes sociales", "Con un amigo que presentó el examen hace años", "En ged.com o en la oficina de educación para adultos de tu estado", "Solo en este curso"], answer: 2, why: "Las reglas y los costos cambian y son distintos en cada estado; el sitio oficial es la fuente." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE, HISET]
        },
        {
          title: "Operaciones con números sin calculadora",
          objectives: ["O2"],
          minutes: 6,
          goal: "Resolver a mano problemas de orden de las operaciones, fracciones, números negativos, exponentes y raíces cuadradas.",
          text: [
            "Orden de las operaciones: primero los Paréntesis, luego los Exponentes, luego Multiplicar y Dividir de izquierda a derecha, y luego Sumar y Restar de izquierda a derecha. En inglés mucha gente lo recuerda como PEMDAS. Ejemplo: 3 + 4 x (6 - 2)^2 / 8. Paréntesis: 6 - 2 = 4. Exponente: 4^2 = 16. Multiplicar y dividir de izquierda a derecha: 4 x 16 = 64, 64 / 8 = 8. Sumar: 3 + 8 = 11.",
            "Fracciones: para multiplicar, multiplica los numeradores entre sí y los denominadores entre sí: 2/3 x 3/4 = 6/12 = 1/2. Para dividir, voltea la segunda fracción y multiplica: 3/4 / 1/2 = 3/4 x 2/1 = 6/4 = 1 1/2. Para comparar fracciones y decimales, conviértelos todos a decimales: 2/3 es más o menos 0.667, así que de menor a mayor: 0.65, 2/3, 0.7.",
            "Números negativos: -5 + 8 = 3. Restar un negativo es sumar: 6 - (-2) = 8. Un negativo por un negativo da positivo: -3 x -4 = 12; un negativo por un positivo da negativo: -3 x 4 = -12. En una recta numérica, los números son más grandes hacia la derecha.",
            "Exponentes y raíces: 2^5 significa 2 x 2 x 2 x 2 x 2 = 32. Una raíz cuadrada deshace el cuadrado: la raíz cuadrada de 49 es 7, porque 7 x 7 = 49. La raíz cuadrada de 50 es un poco más que 7, porque 50 está entre 49 y 64."
          ],
          steps: ["Primero los paréntesis.", "Luego los exponentes y las raíces.", "Luego multiplica y divide, de izquierda a derecha.", "Luego suma y resta, de izquierda a derecha.", "Fracciones: multiplica de frente; para dividir, voltea la segunda y multiplica.", "Signos: signos iguales dan positivo al multiplicar, signos distintos dan negativo."],
          words: [["Orden de las operaciones", "el orden acordado para hacer los pasos de una cuenta: paréntesis, exponentes, multiplicar y dividir, sumar y restar."], ["Exponente", "un número pequeño arriba que dice cuántas veces se multiplica un número por sí mismo: 2^3 = 2 x 2 x 2."], ["Raíz cuadrada", "el número que, multiplicado por sí mismo, da el número: la raíz cuadrada de 25 es 5."], ["Número negativo", "un número menor que cero, como -4."], ["Recta numérica", "una línea con los números en orden; los números son más grandes hacia la derecha."]],
          slides: [
            { title: "Orden de las operaciones", bullets: ["Paréntesis, Exponentes", "Multiplicar y Dividir, de izquierda a derecha", "Sumar y Restar, de izquierda a derecha", "3 + 4 x (6 - 2)^2 / 8 = 11"] },
            { title: "Fracciones", bullets: ["Multiplicar: 2/3 x 3/4 = 6/12 = 1/2", "Dividir: voltea y multiplica: 3/4 / 1/2 = 1 1/2", "Comparar: convierte a decimales"] },
            { title: "Números negativos", bullets: ["-5 + 8 = 3", "6 - (-2) = 8", "-3 x -4 = 12; -3 x 4 = -12"] },
            { title: "Exponentes y raíces", bullets: ["2^5 = 32", "Raíz cuadrada de 49 = 7", "La raíz cuadrada de 50 es un poco más que 7"] }
          ],
          tryIt: "Practica sin calculadora (respuestas abajo): (1) 10 - 2 x 3 + 4. (2) 5/6 x 3/5. (3) 2/3 / 4/9. (4) -7 - (-10). (5) 3^3 - raíz cuadrada de 16. Respuestas: (1) 10 - 6 + 4 = 8 (primero multiplica). (2) 15/30 = 1/2. (3) 2/3 x 9/4 = 18/12 = 1 1/2. (4) -7 + 10 = 3. (5) 27 - 4 = 23. En las que fallaste, busca el paso donde te equivocaste y escribe la regla que necesitas.",
          youCanNow: "resolver a mano el orden de las operaciones, fracciones, negativos, exponentes y raíces cuadradas.",
          quickCheck: [
            { objective: "O2", q: "¿Cuánto es 8 + 12 / 4?", options: ["5", "20", "14", "11"], answer: 3, why: "Divide antes de sumar: 12 / 4 = 3, luego 8 + 3 = 11." },
            { objective: "O2", q: "¿Cuánto es -6 x -5?", options: ["30", "-30", "-11", "11"], answer: 0, why: "Un negativo por un negativo da positivo: 30." }
          ],
          sources: [GED_MATH]
        },
        {
          title: "Razones, proporciones, porcentajes y datos",
          objectives: ["O3"],
          minutes: 6,
          goal: "Resolver problemas de razones, proporciones y porcentajes, y hallar la media, la mediana, la moda y el rango.",
          text: [
            "Una razón compara dos cantidades: 3 tazas de harina por cada 2 tazas de azúcar es 3:2. Una proporción dice que dos razones son iguales. Para resolverla, multiplica en cruz. Ejemplo: 3 tazas de harina dan 24 galletas. ¿Cuánta harina para 40 galletas? 3/24 = x/40, así que 24x = 120 y x = 5 tazas.",
            "Tres preguntas de porcentaje: (1) ¿Cuánto es el 35% de 80? 0.35 x 80 = 28. (2) ¿Qué porcentaje de 72 es 18? 18 / 72 = 0.25 = 25%. (3) Cambio porcentual: un precio pasa de $40 a $50. El cambio es $10, y 10 / 40 = 0.25, así que subió 25%. Siempre divide el cambio entre la cantidad ORIGINAL.",
            "Datos: para los números 4, 7, 7, 9, 13, la media (el promedio) es el total dividido entre cuántos números hay: 40 / 5 = 8. La mediana es el número del medio cuando están en orden: 7. La moda es el número que más se repite: 7. El rango es el mayor menos el menor: 13 - 4 = 9. Si hay dos números en el medio, la mediana está a la mitad entre ellos.",
            "La probabilidad es la posibilidad de que algo pase: el número de formas en que puede pasar / el número total de resultados. Una bolsa tiene 3 canicas rojas y 9 azules: la probabilidad de sacar una roja es 3/12 = 1/4, o 25%."
          ],
          steps: ["Proporción: escribe dos fracciones iguales con las mismas unidades en los mismos lugares, luego multiplica en cruz y divide.", "Porcentaje de un número: convierte el porcentaje a decimal y multiplica.", "Qué porcentaje: parte / total, y luego conviértelo a porcentaje.", "Cambio porcentual: cambio / original.", "Media: suma y divide entre cuántos hay. Mediana: ordena y busca el del medio.", "Moda: el que más se repite. Rango: el mayor menos el menor."],
          words: [["Razón", "una comparación de dos cantidades, como 3:2."], ["Proporción", "dos razones iguales, como 3/24 = 5/40."], ["Multiplicar en cruz", "multiplicar el numerador de cada fracción por el denominador de la otra para resolver una proporción."], ["Media", "el promedio: suma los números y divide entre cuántos hay."], ["Mediana", "el número del medio cuando los números están en orden."], ["Moda", "el número que aparece más veces."], ["Rango", "el número mayor menos el menor."], ["Probabilidad", "la posibilidad de que algo pase, de 0 (nunca) a 1 (siempre)."]],
          slides: [
            { title: "Razones y proporciones", bullets: ["3 tazas para 24 galletas; x tazas para 40", "3/24 = x/40, así que 24x = 120", "x = 5 tazas"] },
            { title: "Tres preguntas de porcentaje", bullets: ["35% de 80 = 0.35 x 80 = 28", "18 de 72 = 18 / 72 = 25%", "De $40 a $50: 10 / 40 = aumento del 25%"] },
            { title: "Datos: 4, 7, 7, 9, 13", bullets: ["Media: 40 / 5 = 8", "Mediana: 7; Moda: 7", "Rango: 13 - 4 = 9"] },
            { title: "Probabilidad", bullets: ["Formas en que puede pasar / total de resultados", "3 rojas de 12 canicas: 3/12 = 1/4 = 25%"] }
          ],
          tryIt: "Practica (respuestas abajo): (1) La escala de un mapa es 1 pulgada : 20 millas. ¿Cuántas millas son 3.5 pulgadas? (2) ¿Cuánto es el 15% de 260? (3) Un teléfono de $250 ahora cuesta $200. ¿Cuál es el porcentaje de descuento? (4) Halla la media, la mediana, la moda y el rango de 12, 15, 15, 18, 20, 22. Respuestas: (1) 70 millas. (2) 39. (3) 50 / 250 = baja del 20%. (4) Media 102 / 6 = 17; mediana a la mitad entre 15 y 18 = 16.5; moda 15; rango 10.",
          youCanNow: "resolver proporciones y los tres tipos de problemas de porcentaje, y describir un conjunto de datos con la media, la mediana, la moda y el rango.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es la mediana de 3, 9, 4, 8, 6?", options: ["4", "9", "6", "30"], answer: 2, why: "En orden: 3, 4, 6, 8, 9. El número del medio es 6." },
            { objective: "O3", q: "Un artículo de $60 sube a $75. ¿Cuál es el porcentaje de aumento?", options: ["15%", "20%", "80%", "25%"], answer: 3, why: "El cambio es 15, y 15 / 60 = 0.25 = 25%." }
          ],
          sources: [GED_SUBJECTS]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El examen, los números y los datos",
        questions: [
          { objective: "O1", q: "¿Cuál es una de las cuatro áreas de contenido del examen de Matemáticas del GED?", options: ["Ortografía", "Gráficas y funciones", "Historia mundial", "Velocidad al escribir en teclado"], answer: 1, why: "El examen de Matemáticas cubre Matemáticas básicas, Geometría, Álgebra básica, y Gráficas y funciones." },
          { objective: "O2", q: "¿Cuánto es 2 + 3 x 4^2?", options: ["50", "80", "26", "400"], answer: 0, why: "Primero el exponente: 16. Multiplica: 48. Suma: 50." },
          { objective: "O2", q: "¿Cuánto es 3/4 / 3/8?", options: ["9/32", "1/2", "3/8", "2"], answer: 3, why: "Voltea y multiplica: 3/4 x 8/3 = 24/12 = 2." },
          { objective: "O3", q: "5 trabajadores pueden empacar 40 cajas en una hora. Al mismo ritmo, ¿cuántas cajas pueden empacar 8 trabajadores?", options: ["43", "50", "64", "80"], answer: 2, why: "40/5 = x/8, así que 5x = 320 y x = 64." },
          { objective: "O3", q: "¿Cuál es la media de 10, 14, 15 y 21?", options: ["15", "14.5", "11", "60"], answer: 0, why: "El total es 60, dividido entre 4 números, da 15." }
        ]
      }
    },
    {
      name: "Capítulo 2: Álgebra, geometría y gráficas",
      lessons: [
        {
          title: "Resolver ecuaciones y desigualdades",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escribir y resolver ecuaciones y desigualdades de una variable y comprobar cada respuesta.",
          text: [
            "Una variable es una letra, como x, que representa un número desconocido. Las palabras se convierten en matemáticas: \"5 más que el doble de un número\" es 2x + 5. \"Un número disminuido en 7\" es x - 7. \"El producto de 4 y un número\" es 4x.",
            "Para resolver una ecuación, haz lo mismo en los dos lados hasta que x quede sola. Primero deshaz la suma o la resta, luego la multiplicación o la división. Ejemplo: 3x - 7 = 20. Suma 7: 3x = 27. Divide entre 3: x = 9. Comprueba: 3 x 9 - 7 = 20. Sí. Ejemplo con paréntesis: 2(x + 4) = 18. Divide entre 2: x + 4 = 9, así que x = 5.",
            "Problema escrito: un plan de teléfono cuesta $25 al mes más $0.10 por cada mensaje de texto. La factura fue de $32. ¿Cuántos mensajes? 25 + 0.10t = 32. Resta 25: 0.10t = 7. Divide entre 0.10: t = 70 mensajes.",
            "Las desigualdades usan <, >, <= o >= y se resuelven igual, con una regla: cuando multiplicas o divides los dos lados por un número negativo, voltea el signo. 4x + 3 > 19 da 4x > 16, así que x > 4. Pero -2x <= 10 da x >= -5. En las preguntas de opción múltiple, también puedes comprobar sustituyendo cada respuesta en el problema."
          ],
          steps: ["Convierte las palabras en una ecuación con una letra para lo desconocido.", "Deshaz la suma o la resta en los dos lados.", "Deshaz la multiplicación o la división en los dos lados.", "Desigualdad: voltea el signo si multiplicas o divides por un negativo.", "Comprueba: sustituye tu respuesta en el problema original."],
          words: [["Variable", "una letra que representa un número desconocido."], ["Expresión", "números, letras y operaciones sin signo de igual, como 2x + 5."], ["Ecuación", "una oración matemática con signo de igual, como 3x - 7 = 20."], ["Desigualdad", "una oración matemática que usa <, >, <= o >= en lugar de un signo de igual."], ["Resolver", "hallar el valor de la variable que hace verdadera la oración."]],
          slides: [
            { title: "De palabras a matemáticas", bullets: ["5 más que el doble de un número: 2x + 5", "Un número disminuido en 7: x - 7", "El producto de 4 y un número: 4x"] },
            { title: "Resolver una ecuación", bullets: ["3x - 7 = 20", "Suma 7: 3x = 27; divide entre 3: x = 9", "Comprueba: 3 x 9 - 7 = 20"] },
            { title: "Un problema escrito", bullets: ["$25 al mes + $0.10 por mensaje = $32", "25 + 0.10t = 32, así que 0.10t = 7", "t = 70 mensajes"] },
            { title: "Desigualdades", bullets: ["Se resuelven como una ecuación", "Multiplicar o dividir por un negativo: voltea el signo", "-2x <= 10 da x >= -5"] }
          ],
          tryIt: "Practica (respuestas abajo): (1) Escribe \"8 menos que 3 veces un número\" como expresión. (2) Resuelve 5x + 6 = 41. (3) Resuelve 4(x - 2) = 28. (4) Un taxi cobra $3 más $2 por milla. El viaje costó $19. ¿Cuántas millas? (5) Resuelve -3x + 1 > 13. Respuestas: (1) 3x - 8. (2) 5x = 35, x = 7. (3) x - 2 = 7, x = 9. (4) 3 + 2m = 19, m = 8 millas. (5) -3x > 12, así que x < -4 (voltea el signo). Comprueba cada respuesta sustituyéndola.",
          youCanNow: "convertir palabras en ecuaciones, resolver ecuaciones y desigualdades, y comprobar tus respuestas.",
          quickCheck: [
            { objective: "O4", q: "Resuelve: x / 4 + 3 = 8", options: ["x = 44", "x = 5", "x = 20", "x = 1.25"], answer: 2, why: "Resta 3: x / 4 = 5. Multiplica por 4: x = 20." },
            { objective: "O4", q: "Resuelve: -5x < 20", options: ["x > -4", "x < -4", "x < 4", "x > 4"], answer: 0, why: "Divide entre -5 y voltea el signo: x > -4." }
          ],
          sources: [GED_SUBJECTS]
        },
        {
          title: "Geometría con la hoja de fórmulas y la calculadora",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular el perímetro, el área, el volumen y el lado que falta de un triángulo rectángulo con una hoja de fórmulas y una calculadora.",
          text: [
            "El perímetro es la distancia alrededor de una figura; suma los lados. El área es el espacio de adentro, en unidades cuadradas. El volumen es el espacio dentro de un objeto en 3-D, en unidades cúbicas. Un rectángulo de 8 pies por 5 pies tiene un perímetro de 2 x (8 + 5) = 26 pies y un área de 8 x 5 = 40 pies cuadrados. Un triángulo con base 10 y altura 6 tiene un área de 1/2 x 10 x 6 = 30.",
            "Los círculos usan pi, más o menos 3.14 (la calculadora tiene una tecla de pi). Para un círculo de radio 3: área = pi x r^2 = más o menos 28.27 unidades cuadradas; circunferencia = 2 x pi x r = más o menos 18.85. El diámetro es el doble del radio, así que lee con cuidado cuál de los dos te da la pregunta.",
            "Volumen: una caja de 4 por 3 por 2 tiene un volumen de 4 x 3 x 2 = 24 unidades cúbicas. Un cilindro de radio 2 y altura 5 tiene un volumen de pi x r^2 x h = pi x 4 x 5 = más o menos 62.83 unidades cúbicas.",
            "Triángulos rectángulos: a^2 + b^2 = c^2 (el teorema de Pitágoras), donde c es el lado más largo, enfrente de la esquina cuadrada. Si los catetos miden 6 y 8, c^2 = 36 + 64 = 100, así que c = 10. En el examen te dan una hoja de fórmulas: practica con la hoja actual de ged.com para saber dónde está cada fórmula. En la TI-30XS, usa la tecla (-) para los números negativos y la tecla x^2 para los cuadrados; la hoja de referencia de la calculadora del GED muestra las teclas."
          ],
          steps: ["Dibuja la figura y marca lo que sabes.", "Decide: ¿perímetro (alrededor), área (adentro, plana) o volumen (adentro, 3-D)?", "Busca la fórmula en la hoja de fórmulas.", "Pon los números y usa la calculadora.", "Escribe las unidades: pies, pies cuadrados o pies cúbicos.", "Pregúntate: ¿la respuesta tiene sentido para el dibujo?"],
          words: [["Perímetro", "la distancia alrededor de una figura plana."], ["Área", "el espacio dentro de una figura plana, en unidades cuadradas."], ["Volumen", "el espacio dentro de un objeto en 3-D, en unidades cúbicas."], ["Radio", "la distancia del centro de un círculo a su borde; el diámetro es el doble del radio."], ["Pi", "el número, más o menos 3.14, que se usa con los círculos."], ["Teorema de Pitágoras", "en un triángulo rectángulo, a^2 + b^2 = c^2, donde c es el lado más largo."]],
          slides: [
            { title: "Perímetro, área, volumen", bullets: ["Perímetro: alrededor, en unidades", "Área: dentro de una figura plana, unidades cuadradas", "Volumen: dentro de un objeto en 3-D, unidades cúbicas"] },
            { title: "Rectángulos y triángulos", bullets: ["Rectángulo de 8 por 5: perímetro 26, área 40", "Triángulo: 1/2 x base x altura", "Base 10, altura 6: área 30"] },
            { title: "Círculos y cilindros", bullets: ["Área = pi x r^2; radio 3: más o menos 28.27", "Circunferencia = 2 x pi x r", "Volumen del cilindro = pi x r^2 x h"] },
            { title: "Triángulos rectángulos", bullets: ["a^2 + b^2 = c^2", "Catetos 6 y 8: c = 10", "Practica con la hoja de fórmulas actual de ged.com"] }
          ],
          tryIt: "Practica con una calculadora y la hoja de fórmulas de ged.com (respuestas abajo): (1) Área y perímetro de un rectángulo de 12 m por 7 m. (2) Área de un círculo de 10 pulgadas de diámetro. (3) Volumen de una caja de 6 pies por 2 pies por 3 pies. (4) Una escalera de 13 pies se apoya en una pared con la base a 5 pies de la pared. ¿Hasta qué altura de la pared llega? Respuestas: (1) área 84 metros cuadrados, perímetro 38 m. (2) radio 5, área más o menos 78.54 pulgadas cuadradas. (3) 36 pies cúbicos. (4) 5^2 + b^2 = 13^2, así que b^2 = 169 - 25 = 144, b = 12 pies.",
          youCanNow: "hallar el perímetro, el área, el volumen y el lado que falta de un triángulo rectángulo, con las unidades correctas.",
          quickCheck: [
            { objective: "O5", q: "Un cuarto mide 14 pies por 10 pies. ¿Cuál es su área?", options: ["24 pies cuadrados", "48 pies", "140 pies cúbicos", "140 pies cuadrados"], answer: 3, why: "Área = largo x ancho = 140, en pies cuadrados." },
            { objective: "O5", q: "Un triángulo rectángulo tiene catetos de 9 y 12. ¿Cuánto mide el lado más largo?", options: ["21", "15", "225", "108"], answer: 1, why: "81 + 144 = 225, y la raíz cuadrada de 225 es 15." }
          ],
          sources: [GED_MATH, GED_CALC]
        },
        {
          title: "Pendiente, gráficas y funciones",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Hallar la pendiente, leer gráficas y tablas, evaluar funciones y terminar tu plan de estudio y de examen.",
          text: [
            "Un plano de coordenadas tiene un eje x (horizontal) y un eje y (vertical). Un punto se escribe (x, y): (3, 5) significa 3 hacia el lado y 5 hacia arriba. La pendiente dice qué tan inclinada está una línea: el cambio vertical entre el cambio horizontal, o (y2 - y1) / (x2 - x1). De (1, 3) a (4, 9): (9 - 3) / (4 - 1) = 6 / 3 = 2. Una línea que sube de izquierda a derecha tiene pendiente positiva; si baja, pendiente negativa.",
            "Una línea se puede escribir y = mx + b, donde m es la pendiente y b es donde la línea cruza el eje y. En una tabla donde x = 0, 1, 2 da y = 5, 8, 11, y sube 3 cada vez, así que m = 3, y cuando x = 0, y = 5, así que b = 5: y = 3x + 5.",
            "Una función da un solo resultado para cada entrada. f(x) = x^2 - 3x significa: toma la entrada, elévala al cuadrado y réstale 3 veces la entrada. f(4) = 16 - 12 = 4. En una gráfica, busca el valor yendo por el eje x hasta la x que quieres, luego sube o baja hasta la línea y después ve de lado para leer y.",
            "Termina tu plan. Mira tus resultados en las comprobaciones rápidas, las comprobaciones de conocimientos y el examen de muestra. Pon tus 3 temas más débiles primero en tu horario semanal, agrega días de repaso y elige fechas para GED Ready y para el examen real, después de revisar las reglas de tu estado en ged.com."
          ],
          steps: ["Pendiente: resta los valores de y, resta los valores de x en el mismo orden y divide.", "y = mx + b: m es la pendiente, b es el valor de y cuando x = 0.", "En una tabla: lo que cambia y cada vez que x sube 1 es la pendiente.", "Función: cambia x por el número y sigue el orden de las operaciones.", "Plan: los temas más débiles primero, fechas reales, GED Ready antes del examen real."],
          words: [["Plano de coordenadas", "una cuadrícula con un eje x y un eje y para marcar puntos."], ["Par ordenado", "un punto escrito como (x, y)."], ["Pendiente", "qué tan inclinada está una línea: el cambio vertical dividido entre el cambio horizontal."], ["Intersección con el eje y", "donde una línea cruza el eje y; la b en y = mx + b."], ["Función", "una regla que da exactamente un resultado para cada entrada, como f(x) = 2x + 1."]],
          slides: [
            { title: "Pendiente = cambio vertical / cambio horizontal", bullets: ["(y2 - y1) / (x2 - x1)", "De (1, 3) a (4, 9): 6 / 3 = 2", "Sube de izquierda a derecha: positiva; baja: negativa"] },
            { title: "y = mx + b", bullets: ["m: la pendiente; b: donde cruza el eje y", "Tabla x = 0, 1, 2 da y = 5, 8, 11", "Entonces y = 3x + 5"] },
            { title: "Funciones", bullets: ["f(x) = x^2 - 3x", "f(4) = 16 - 12 = 4", "Gráfica: ve a la x, busca la línea, lee la y"] },
            { title: "Termina tu plan", bullets: ["Primero tus 3 temas más débiles", "Fechas reales, días de repaso", "Fecha de GED Ready y luego la fecha de tu examen"] }
          ],
          tryIt: "Practica (respuestas abajo): (1) Halla la pendiente de (2, 1) a (6, 9). (2) Escribe la ecuación de una línea con pendiente -2 que cruza el eje y en 7. (3) Si f(x) = 3x - 4, halla f(5). (4) Una tabla tiene x = 0, 1, 2 e y = 10, 7, 4. ¿Cuál es la pendiente? Respuestas: (1) 8 / 4 = 2. (2) y = -2x + 7. (3) 15 - 4 = 11. (4) y baja 3 cada vez, así que -3. Luego termina tu tarea final: tu horario semanal con fechas, tu serie de práctica de 12 problemas con los errores explicados, y tus fechas de GED Ready y del examen.",
          youCanNow: "hallar la pendiente, escribir y = mx + b, leer gráficas y tablas, evaluar funciones y seguir un plan de estudio y de examen de Matemáticas del GED con fechas.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es la pendiente de (0, 2) a (3, 11)?", options: ["2", "9", "1/3", "3"], answer: 3, why: "(11 - 2) / (3 - 0) = 9 / 3 = 3." },
            { objective: "O6", q: "Si f(x) = 2x + 1, ¿cuánto es f(6)?", options: ["9", "13", "8", "12"], answer: 1, why: "2 x 6 + 1 = 13." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Álgebra, geometría y gráficas",
        questions: [
          { objective: "O4", q: "¿Qué ecuación corresponde a \"El doble de un número más 9 es 25\"?", options: ["2 + x + 9 = 25", "2(x + 9) = 25", "2x + 9 = 25", "x + 9 = 2 x 25"], answer: 2, why: "El doble de un número es 2x, más 9, es igual a 25." },
          { objective: "O4", q: "Resuelve: 7x - 4 = 31", options: ["x = 5", "x = 27", "x = 3.9", "x = 35"], answer: 0, why: "Suma 4: 7x = 35. Divide entre 7: x = 5." },
          { objective: "O5", q: "¿Cuál es el volumen de una caja de 5 por 4 por 2 pulgadas?", options: ["11 pulgadas cúbicas", "20 pulgadas cuadradas", "22 pulgadas", "40 pulgadas cúbicas"], answer: 3, why: "Volumen = 5 x 4 x 2 = 40 pulgadas cúbicas." },
          { objective: "O5", q: "Un círculo tiene un radio de 7. ¿Cuánto mide más o menos su circunferencia?", options: ["21.99", "43.98", "153.94", "49"], answer: 1, why: "2 x pi x 7 es más o menos 43.98." },
          { objective: "O6", q: "En y = 4x - 2, ¿cuál es la pendiente?", options: ["-2", "2", "4", "x"], answer: 2, why: "En y = mx + b, m es la pendiente, así que es 4." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para el examen GED: Matemáticas",
    questions: [
      { objective: "O1", q: "Según ged.com, ¿cuánto dura el examen de Matemáticas del GED?", options: ["30 minutos", "115 minutos", "3 horas", "No tiene límite de tiempo"], answer: 1, why: "ged.com indica que el examen de Matemáticas dura 115 minutos, incluidas las instrucciones y el repaso." },
      { objective: "O1", q: "¿Qué herramienta gratis te muestra la pantalla y los tipos de preguntas del examen de Matemáticas del GED?", options: ["El examen de muestra de Matemáticas del GED en ged.com", "Una aplicación de preguntas cualquiera", "Un videojuego", "No existe ninguna"], answer: 0, why: "ged.com ofrece un examen de muestra de Matemáticas gratis." },
      { objective: "O1", q: "¿Qué modelo de calculadora puedes llevar a un centro de examen del GED?", options: ["Cualquier teléfono", "Una calculadora gráfica", "Nunca se permite calculadora", "TI-30XS"], answer: 3, why: "ged.com dice que puedes llevar tu propia TI-30XS; en la parte 2 te dan una en pantalla." },
      { objective: "O1", q: "Tu estado usa HiSET. ¿Qué significa eso?", options: ["Que no puedes obtener un diploma", "Que tienes que mudarte a otro estado", "Que HiSET es otro examen de equivalencia de la escuela secundaria que usa tu estado; revisa sus reglas", "Que solo presentas el examen de matemáticas"], answer: 2, why: "Algunos estados usan HiSET en lugar del GED o además del GED." },
      { objective: "O2", q: "¿Cuánto es 20 - 4 x 3 + 2?", options: ["50", "10", "6", "18"], answer: 1, why: "Primero multiplica: 12. Luego 20 - 12 + 2 = 10." },
      { objective: "O2", q: "¿Cuánto es 4/5 x 5/8?", options: ["1/2", "9/13", "20/13", "32/25"], answer: 0, why: "20/40 = 1/2." },
      { objective: "O2", q: "¿Qué número está entre 8 y 9?", options: ["Raíz cuadrada de 60", "Raíz cuadrada de 100", "Raíz cuadrada de 70", "Raíz cuadrada de 81"], answer: 2, why: "64 < 70 < 81, así que la raíz cuadrada de 70 está entre 8 y 9." },
      { objective: "O3", q: "¿Cuánto es el 40% de 150?", options: ["40", "6", "110", "60"], answer: 3, why: "0.40 x 150 = 60." },
      { objective: "O3", q: "Una receta usa 2 tazas de arroz para 6 personas. ¿Cuántas tazas para 15 personas?", options: ["5", "4", "7.5", "45"], answer: 0, why: "2/6 = x/15, así que 6x = 30 y x = 5." },
      { objective: "O3", q: "¿Cuál es el rango de 5, 12, 3, 9, 20?", options: ["9", "17", "49", "20"], answer: 1, why: "El mayor menos el menor: 20 - 3 = 17." },
      { objective: "O3", q: "Una bolsa tiene 4 canicas verdes y 6 amarillas. ¿Cuál es la probabilidad de sacar una verde?", options: ["4/6", "1/4", "2/5", "6/10"], answer: 2, why: "4 verdes de 10 en total = 4/10 = 2/5." },
      { objective: "O4", q: "Resuelve: 6x + 5 = 47", options: ["x = 8.67", "x = 6", "x = 42", "x = 7"], answer: 3, why: "Resta 5: 6x = 42. Divide entre 6: x = 7." },
      { objective: "O4", q: "Un gimnasio cobra $40 de inscripción más $20 al mes. Pagaste $160. ¿Cuántos meses?", options: ["6", "8", "10", "4"], answer: 0, why: "40 + 20m = 160, así que 20m = 120 y m = 6." },
      { objective: "O4", q: "Resuelve: 10 - 2x >= 4", options: ["x >= 3", "x <= 3", "x <= -3", "x >= 7"], answer: 1, why: "Resta 10: -2x >= -6. Divide entre -2 y voltea el signo: x <= 3." },
      { objective: "O5", q: "¿Cuál es el área de un triángulo con base 12 y altura 5?", options: ["60", "17", "30", "120"], answer: 2, why: "1/2 x 12 x 5 = 30." },
      { objective: "O5", q: "Un patio rectangular mide 30 pies por 20 pies. ¿Cuánta cerca se necesita para rodearlo?", options: ["600 pies", "50 pies", "100 pies cuadrados", "100 pies"], answer: 3, why: "Perímetro = 2 x (30 + 20) = 100 pies." },
      { objective: "O5", q: "Un cilindro tiene radio 3 y altura 10. ¿Cuánto es más o menos su volumen?", options: ["282.74 unidades cúbicas", "94.25 unidades cúbicas", "30 unidades cúbicas", "188.50 unidades cúbicas"], answer: 0, why: "pi x 9 x 10 es más o menos 282.74." },
      { objective: "O6", q: "¿Cuál es la pendiente de (2, 7) a (5, 1)?", options: ["2", "-2", "-1/2", "6"], answer: 1, why: "(1 - 7) / (5 - 2) = -6 / 3 = -2." },
      { objective: "O6", q: "Una línea tiene pendiente 5 y cruza el eje y en -3. Su ecuación es:", options: ["y = -3x + 5", "y = 5x", "y = 5x - 3", "y = x - 8"], answer: 2, why: "y = mx + b con m = 5 y b = -3." },
      { objective: "O6", q: "Si f(x) = x^2 + 2, ¿cuánto es f(-3)?", options: ["-7", "-1", "8", "11"], answer: 3, why: "(-3)^2 = 9, y 9 + 2 = 11." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 4, 6, 7, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, corrige esa parte y luego comparte el plan con un maestro o un compañero de estudio.",
    criteria: [
      { name: "Conoce el examen", objective: "O1", notYet: "No ha presentado el examen de muestra gratis, o el plan no tiene datos del examen tomados de ged.com.", meets: "Resultado del examen de muestra anotado; áreas de contenido, tiempo, reglas de la calculadora y tipos de preguntas enumerados según ged.com.", exceeds: "También anota las reglas del estado (GED o HiSET), cómo programar el examen y el costo actual, según el sitio oficial." },
      { name: "Plan de estudio con fechas", objective: "O1", notYet: "No tiene fechas, o no tiene un orden de temas.", meets: "De 6 a 8 semanas de días de estudio con fechas y horas reales, los 3 temas más débiles primero, fecha de GED Ready y fecha meta del examen.", exceeds: "Incluye días de repaso y un plan de respaldo para las sesiones perdidas." },
      { name: "Números y datos", objective: "O3", notYet: "Menos de 3 de 4 problemas de práctica de números y datos correctos.", meets: "Al menos 3 de 4 problemas de números y datos (Lecciones 2 y 3) correctos, con los errores explicados.", exceeds: "Todos correctos, con el trabajo mostrado claramente paso a paso." },
      { name: "Álgebra", objective: "O4", notYet: "Ecuaciones de práctica resueltas sin comprobar, o 1 o las 2 incorrectas.", meets: "Los dos problemas de álgebra correctos y comprobados al sustituir la respuesta.", exceeds: "Explica con sus propias palabras la regla de voltear el signo en las desigualdades." },
      { name: "Geometría y gráficas", objective: "O6", notYet: "Usó una fórmula equivocada, faltan las unidades o el signo de la pendiente está mal.", meets: "Problemas de geometría y gráficas (Lecciones 5 y 6) casi todos correctos, con las unidades y los signos de la pendiente correctos.", exceeds: "Puede mostrar dónde está cada fórmula en la hoja de fórmulas y dibujar la gráfica de un problema de pendiente." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso con un plan de estudio y de examen con fechas que cumple la rúbrica",
      "Mejora de la prueba inicial al examen final",
      "Participantes que vuelven a presentar GED Ready o el examen de muestra oficial en un plazo de 60 días y sacan un resultado más alto (encuesta de seguimiento)",
      "Participantes que aprueban el examen de Matemáticas del GED (o la parte de matemáticas del HiSET) en un plazo de 6 meses, y que luego terminan el diploma completo"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, lápiz y un calendario",
      "Una calculadora TI-30XS si es posible, o una calculadora científica gratis en línea",
      "La hoja de fórmulas actual del GED y la hoja de referencia de la calculadora TI-30XS, de ged.com",
      "Un teléfono o una computadora con internet para el examen de muestra gratis de Matemáticas del GED",
      "Unas 2 a 3 horas para el curso, y después el horario de estudio semanal de cada participante"
    ],
    facilitatorNotes: [
      "Da la prueba inicial como un calentamiento sin calificación; muchas personas sienten ansiedad con las matemáticas.",
      "Resuelve cada ejemplo en el pizarrón, luego pide que hagan el siguiente en parejas antes de trabajar solos.",
      "Imprime la hoja de fórmulas actual y la hoja de referencia de la calculadora de ged.com para que practiquen con lo que verán en el examen.",
      "Ayuda a cada persona a revisar las reglas de su estado (GED o HiSET, edad, identificación, costo, en línea o en un centro de examen) en los sitios oficiales; no des costos ni puntajes para aprobar de memoria.",
      "En programas correccionales o de reinserción, pregunta a la oficina de educación cómo se organiza el examen en el lugar.",
      "Combina este curso con \"Matemáticas cotidianas para el trabajo y la vida\" para quienes necesiten más práctica con fracciones y porcentajes."
    ]
  }
};
