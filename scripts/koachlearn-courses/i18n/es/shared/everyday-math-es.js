"use strict";

// Koach Learn course (Spanish translation of shared/everyday-math.js). See scripts/koachlearn-courses/README.md, "Translations".
// All money and pay examples are made up for practice. US units, US paystub rules and US agency names are kept, with a short explanation.

const DOL_OT = { name: "Departamento de Trabajo de EE. UU. (DOL): Pago de horas extra", url: "https://www.dol.gov/agencies/whd/overtime" };
const IRS_751 = { name: "IRS, tema 751: Tasas de retención del Seguro Social y Medicare", url: "https://www.irs.gov/taxtopics/tc751" };
const CFPB = { name: "CFPB: Your Money, Your Goals (materiales gratis para hacer un presupuesto)", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" };

module.exports = {
  id: "everyday-math-es",
  lang: "es",
  translationOf: "everyday-math",
  category: "Workforce Development",
  name: "Matemáticas diarias para el trabajo y la vida",
  skills: "Fracciones, decimales y porcentajes, Descuentos, impuestos, propinas y aumentos, Precios por unidad y mejores compras, Medidas y horas de trabajo, Revisar un talón de pago, Hacer un presupuesto mensual",
  outcome: "hacer las cuentas que encuentras en el trabajo y en casa: usar fracciones, decimales y porcentajes, encontrar la mejor compra, medir y convertir unidades, revisar tu talón de pago y hacer un presupuesto mensual con tu pago.",
  about: [
    "Este curso es para personas adultas que quieren volver a sentirse seguras con los números: quienes buscan trabajo, quienes regresan a casa después de estar en prisión, inmigrantes, padres y madres, y cualquiera que vuelve a estudiar. No necesitas recordar las matemáticas de la escuela. Empezamos desde el principio, con cosas reales como una etiqueta de oferta, una cinta métrica y un cheque de pago.",
    "Vas a practicar fracciones, decimales y porcentajes; calcular descuentos, impuesto sobre las ventas, propinas y aumentos; comparar precios por unidad en la tienda; medir y convertir unidades para una tarea de trabajo; revisar cada línea de un talón de pago; y hacer un presupuesto mensual.",
    "Son las mismas destrezas con las que empiezan muchos exámenes de empleo y el examen de Matemáticas del GED (el examen de equivalencia de la escuela secundaria en EE. UU.). Al terminar, \"Preparación para el examen GED: Matemáticas\" es un buen siguiente paso. Este curso no da un certificado ni un diploma; desarrolla las destrezas.",
    "Cada lección dura unos cinco minutos, con ejemplos resueltos y una tarea de \"Pruébalo ahora\" en papel o con la calculadora del teléfono. Después de cada lección hay una comprobación rápida de 2 preguntas, cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Todos los ejemplos de pago y de dinero son inventados para practicar."
  ],
  finalTask: "Haz tu propia \"Hoja de matemáticas para el trabajo y el dinero\" en una sola página: (1) revisa línea por línea un talón de pago de práctica (o el tuyo, con los números privados tapados): horas por tarifa, horas extra, deducciones y pago neto; (2) convierte ese pago en ingreso mensual y haz un presupuesto mensual con una línea de ahorro, donde los gastos no sean mayores que los ingresos; (3) compara los precios por unidad de 3 cosas que compras a menudo y escribe qué tamaño es la mejor compra. Guárdala y actualízala cada mes.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que vuelven a estudiar: quienes buscan trabajo, quienes regresan a casa después de estar en prisión, inmigrantes, padres y madres, y trabajadores mayores. Muchas dejaron la escuela temprano o hace años que no hacen cuentas en papel, y algunas sienten ansiedad con los números.",
    startingPoint: "Pueden sumar, restar y usar la calculadora del teléfono para cuentas sencillas. Muchas no se sienten seguras con fracciones, porcentajes, conversiones de unidades y deducciones del talón de pago, y pocas llevan un presupuesto por escrito.",
    gap: "El trabajo y la vida diaria piden cuentas rápidas y correctas: medir en el trabajo, contar horas, revisar el pago, encontrar los precios reales y hacer que el dinero alcance todo el mes. Los errores cuestan dinero y pueden pasar sin que nadie los note en un talón de pago. Estas destrezas también son la base del examen de Matemáticas del GED y de muchos exámenes de contratación.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; muchos ejemplos resueltos",
      "Herramientas: papel, lápiz y una calculadora básica del teléfono; ningún programa especial",
      "Ansiedad con las matemáticas: pasos pequeños, revisar las respuestas de dos maneras, sin presión de tiempo",
      "Privacidad: los talones de pago de práctica son inventados; en uno real, tapa el número de Seguro Social y los números de cuenta",
      "Las reglas que cambian (tasas de impuestos, horas extra) remiten a fuentes oficiales; las reglas de cada estado son diferentes"
    ],
    prerequisites: "Saber sumar, restar y multiplicar, con o sin calculadora."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Con fracciones, decimales, porcentajes y una cinta métrica", action: "convertir entre fracciones, decimales y porcentajes, y leer una cinta métrica hasta el 1/8 de pulgada más cercano", standard: "con al menos 4 de 5 respuestas correctas" },
    { id: "O2", condition: "Con un precio, una cuenta o una tarifa de pago", action: "calcular un descuento, el impuesto sobre las ventas, una propina o un aumento usando porcentajes", standard: "con exactitud al centavo" },
    { id: "O3", condition: "Con dos tamaños del mismo producto y sus precios", action: "calcular el precio por unidad de cada uno y elegir la mejor compra", standard: "eligiendo bien en al menos 4 de 5 pares" },
    { id: "O4", condition: "Con una tarea de trabajo, como poner piso en un cuarto o anotar un turno", action: "convertir unidades y calcular el área o las horas trabajadas", standard: "con la unidad correcta, y redondeando hacia arriba cuando necesitas artículos enteros" },
    { id: "O5", condition: "Con un talón de pago", action: "revisar línea por línea las horas, la tarifa de pago, las horas extra, las deducciones y el pago neto", standard: "con cada línea correcta al centavo, o con el error anotado para preguntar" },
    { id: "O6", condition: "Con un pago regular", action: "hacer un presupuesto mensual que incluya ahorro y mantenga los gastos iguales o por debajo de los ingresos", standard: "con cada categoría anotada y los totales revisados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Los números de todos los días",
      lessons: [
        {
          title: "Fracciones, decimales, porcentajes y la cinta métrica",
          objectives: ["O1"],
          minutes: 6,
          goal: "Convertir entre fracciones, decimales y porcentajes, y leer una cinta métrica.",
          text: [
            "Las fracciones, los decimales y los porcentajes son tres maneras de escribir la misma cantidad. Media pizza es 1/2, o 0.5, o 50%. Un cuarto es 1/4, 0.25 o 25%. Tres cuartos es 3/4, 0.75 o 75%.",
            "Para cambiar una fracción a decimal, divide el número de arriba entre el de abajo: 3/8 es 3 entre 8, que da 0.375. Para cambiar un decimal a porcentaje, mueve el punto decimal dos lugares a la derecha: 0.375 es 37.5%. Para pasar de porcentaje a decimal, muévelo dos lugares a la izquierda: 15% es 0.15.",
            "En EE. UU., la cinta métrica divide cada pulgada en 16 marcas pequeñas. La marca más larga, en el centro de la pulgada, es 1/2. Las siguientes más largas son 1/4 y 3/4. Luego vienen 1/8, 3/8, 5/8 y 7/8. Las más cortas son dieciseisavos. Si la cinta termina 3 marcas de 1/8 después del 5, mide 5 y 3/8 pulgadas.",
            "Sumar fracciones con el mismo número abajo es fácil: suma los de arriba y deja el de abajo igual. 1/8 + 3/8 = 4/8, que es lo mismo que 1/2."
          ],
          steps: ["De fracción a decimal: divide el de arriba entre el de abajo.", "De decimal a porcentaje: mueve el punto 2 lugares a la derecha.", "De porcentaje a decimal: mueve el punto 2 lugares a la izquierda.", "Cinta métrica: busca la pulgada entera y cuenta las marcas que siguen.", "Simplifica: 4/8 es lo mismo que 1/2."],
          words: [["Fracción", "una parte de un todo, escrita como un número arriba y otro abajo, como 3/4."], ["Numerador", "el número de arriba de una fracción: cuántas partes tienes."], ["Denominador", "el número de abajo de una fracción: cuántas partes iguales forman el todo."], ["Decimal", "un número con punto, como 0.75, que muestra partes de un todo."], ["Porcentaje (%)", "partes de 100. 25% quiere decir 25 de cada 100."]],
          slides: [
            { title: "Tres maneras de escribir la misma cantidad", bullets: ["1/2 = 0.5 = 50%", "1/4 = 0.25 = 25%", "3/4 = 0.75 = 75%"] },
            { title: "Cómo convertir", bullets: ["Fracción a decimal: divide arriba entre abajo (3/8 = 0.375)", "Decimal a porcentaje: el punto 2 lugares a la derecha (37.5%)", "Porcentaje a decimal: el punto 2 lugares a la izquierda (15% = 0.15)"] },
            { title: "Cómo leer una cinta métrica", bullets: ["La marca más larga en el centro: 1/2", "Luego 1/4 y 3/4, luego octavos, luego dieciseisavos", "5 pulgadas y 3 marcas de octavo = 5 3/8 pulgadas"] }
          ],
          tryIt: "Practica (respuestas abajo): (1) Escribe 1/4 como decimal y como porcentaje. (2) Escribe 0.6 como porcentaje. (3) Escribe 8% como decimal. (4) Cambia 5/8 a decimal. (5) Suma 1/4 + 1/4. Respuestas: (1) 0.25 y 25%; (2) 60%; (3) 0.08; (4) 0.625; (5) 2/4, que es 1/2. Si tienes una cinta métrica o una regla, mide 3 cosas de tu casa hasta el 1/8 de pulgada más cercano.",
          youCanNow: "pasar de fracciones a decimales y porcentajes, y leer una cinta métrica hasta el 1/8 de pulgada más cercano.",
          quickCheck: [
            { objective: "O1", q: "¿Cuánto es 3/4 como porcentaje?", options: ["34%", "0.34%", "75%", "43%"], answer: 2, why: "3 entre 4 es 0.75, y al mover el punto dos lugares a la derecha da 75%." },
            { objective: "O1", q: "¿Cuánto es 6% como decimal?", options: ["0.06", "0.6", "6.0", "60"], answer: 0, why: "Mueve el punto dos lugares a la izquierda: 6% = 0.06." }
          ]
        },
        {
          title: "Descuentos, impuesto sobre las ventas, propinas y aumentos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular descuentos, impuesto sobre las ventas, propinas y aumentos con porcentajes.",
          text: [
            "Para encontrar el porcentaje de un número, cambia el porcentaje a decimal y multiplica. El 20% de $45 es 0.20 x 45 = $9.",
            "Descuento: réstalo del precio. Una chaqueta de $45 con 20% de descuento cuesta 45 - 9 = $36. Impuesto sobre las ventas: súmalo. Si la tasa es 8%, el impuesto sobre $36 es 0.08 x 36 = $2.88, así que pagas $38.88. La tasa del impuesto sobre las ventas cambia en cada estado y ciudad; consulta la agencia de impuestos de tu estado o mira un recibo.",
            "Propina sin calculadora: encuentra el 10% moviendo el punto un lugar a la izquierda y parte de ahí. En una cuenta de $28, el 10% es $2.80, el 5% es la mitad, $1.40, así que el 15% es $2.80 + $1.40 = $4.20. El 20% es el doble del 10%: $5.60.",
            "Aumento: un aumento de 3% sobre $16.00 la hora es 0.03 x 16 = $0.48, así que la nueva tarifa es $16.48 la hora. Fíjate en las palabras: \"20% de descuento\" quiere decir que pagas el 80% del precio; \"20% más\" quiere decir que pagas el 120%."
          ],
          steps: ["Cambia el porcentaje a decimal.", "Multiplica por la cantidad.", "Descuento: resta. Impuesto o propina: suma. Aumento: súmalo a la tarifa anterior.", "Redondea el dinero al centavo más cercano.", "Revisa: ¿tiene sentido la respuesta? Un descuento tiene que ser menor que el precio."],
          words: [["Descuento", "dinero que se le quita al precio."], ["Impuesto sobre las ventas", "un impuesto que se suma al precio en la caja; la tasa depende de tu estado y tu ciudad."], ["Propina", "dinero extra que das por el servicio, casi siempre calculado como un porcentaje de la cuenta."], ["Aumento", "una subida de tu tarifa de pago."], ["Redondear", "hacer un número más sencillo; el dinero se redondea al centavo más cercano."]],
          slides: [
            { title: "El porcentaje de un número", bullets: ["Cambia el porcentaje a decimal", "Multiplica: 20% de $45 = 0.20 x 45 = $9"] },
            { title: "Descuento e impuesto", bullets: ["20% de descuento sobre $45: 45 - 9 = $36", "Impuesto de 8% sobre $36: 0.08 x 36 = $2.88", "Pagas $38.88; la tasa cambia según el estado y la ciudad"] },
            { title: "La propina de cabeza", bullets: ["10%: mueve el punto un lugar a la izquierda", "Cuenta de $28: 10% = $2.80, 5% = $1.40", "15% = $4.20, 20% = $5.60"] },
            { title: "Aumentos", bullets: ["3% de $16.00 = $0.48", "Nueva tarifa: $16.48 la hora", "20% de descuento = pagas 80%; 20% más = pagas 120%"] }
          ],
          tryIt: "Practica (respuestas abajo): (1) Unas botas de trabajo de $60 tienen 25% de descuento. ¿Cuál es el precio de oferta? (2) El impuesto es 7% sobre un artículo de $50. ¿Cuál es el total? (3) Calcula una propina de 20% sobre una cuenta de $35. (4) Tu tarifa de $15.50 recibe un aumento de 4%. ¿Cuál es la nueva tarifa? Respuestas: (1) $45; (2) $3.50 de impuesto, $53.50 en total; (3) $7.00; (4) $0.62 más, $16.12 la hora. Después mira un recibo real y busca la tasa de impuesto que cobraron en tu zona.",
          youCanNow: "calcular descuentos, impuesto sobre las ventas, propinas y aumentos con exactitud al centavo.",
          quickCheck: [
            { objective: "O2", q: "Un abrigo de $80 tiene 25% de descuento. ¿Cuál es el precio de oferta?", options: ["$55", "$20", "$105", "$60"], answer: 3, why: "El 25% de 80 es 20, y 80 - 20 = $60." },
            { objective: "O2", q: "¿Cuánto es una propina de 15% sobre una cuenta de $40?", options: ["$4.00", "$6.00", "$15.00", "$0.60"], answer: 1, why: "El 10% es $4.00 y el 5% es $2.00, así que el 15% es $6.00." }
          ],
          sources: [{ name: "Federation of Tax Administrators: Enlaces a las agencias de impuestos de cada estado", url: "https://taxadmin.org/state-tax-agencies/" }]
        },
        {
          title: "Precios por unidad: cómo encontrar la mejor compra",
          objectives: ["O3"],
          minutes: 5,
          goal: "Calcular precios por unidad y elegir la mejor compra.",
          text: [
            "El precio por unidad es lo que cuesta una unidad: una onza, una libra, una pieza. Te deja comparar tamaños diferentes de forma justa. Para encontrarlo, divide el precio entre el número de unidades.",
            "Ejemplo: una caja de cereal de 24 onzas cuesta $4.80. $4.80 / 24 = $0.20 la onza. Una caja de 36 onzas cuesta $6.12. $6.12 / 36 = $0.17 la onza. La caja grande es la mejor compra.",
            "Lo más grande no siempre es lo más barato. Una bolsa de arroz de 2 libras a $3.18 sale a $1.59 la libra. Una bolsa de 5 libras a $8.45 sale a $1.69 la libra. Aquí la bolsa pequeña es la mejor compra. Muchas tiendas imprimen el precio por unidad en letra pequeña en la etiqueta del estante; revisa que las dos etiquetas usen la misma unidad.",
            "La mejor compra solo es mejor si la vas a usar antes de que se eche a perder y si puedes pagarla esta semana. Los precios por unidad también sirven en el trabajo, por ejemplo al pedir materiales."
          ],
          steps: ["Escribe el precio y el tamaño de cada artículo.", "Asegúrate de que las unidades sean iguales (onzas con onzas).", "Divide: precio / tamaño = precio por unidad.", "Compara: el precio por unidad más bajo es la mejor compra.", "Pregúntate: ¿lo voy a usar todo y puedo pagarlo ahora?"],
          words: [["Precio por unidad", "lo que cuesta una unidad, como una onza o una libra."], ["Onza (oz)", "una unidad de peso pequeña; 16 onzas forman 1 libra."], ["Libra (lb)", "una unidad de peso igual a 16 onzas."], ["Etiqueta del estante", "la etiqueta con el precio en el estante de la tienda; muchas veces muestra el precio por unidad."]],
          slides: [
            { title: "Precio por unidad = precio / tamaño", bullets: ["Lo que cuesta una onza, una libra o una pieza", "Compara tamaños diferentes de forma justa"] },
            { title: "Ejemplo del cereal", bullets: ["24 oz por $4.80 = $0.20 la onza", "36 oz por $6.12 = $0.17 la onza", "Aquí gana la caja grande"] },
            { title: "Más grande no siempre es más barato", bullets: ["Arroz de 2 lb a $3.18 = $1.59 la libra", "Arroz de 5 lb a $8.45 = $1.69 la libra", "Aquí gana la bolsa pequeña"] },
            { title: "Comprar con inteligencia", bullets: ["Mira la etiqueta del estante, con la misma unidad en las dos", "¿Lo vas a usar antes de que se eche a perder?", "¿Puedes pagarlo esta semana?"] }
          ],
          tryIt: "Practica (respuestas abajo): (1) ¿12 huevos por $3.60 o 18 huevos por $5.04? (2) ¿64 oz de jugo por $3.84 o 128 oz por $6.40? Respuestas: (1) $0.30 por huevo contra $0.28 por huevo: los 18 huevos son mejor compra; (2) $0.06 la onza contra $0.05 la onza: los 128 oz son mejor compra. Después, en una tienda o en el sitio web de una tienda, busca los precios por unidad de 3 cosas que compras a menudo en dos tamaños y anota la mejor compra. Esto va en la hoja de tu tarea final.",
          youCanNow: "encontrar precios por unidad, elegir la mejor compra y saber cuándo el tamaño grande no vale la pena.",
          quickCheck: [
            { objective: "O3", q: "Una bolsa de papas de 10 libras cuesta $5.90. ¿Cuál es el precio por unidad?", options: ["$0.59 la libra", "$5.90 la libra", "$1.69 la libra", "$59.00 la libra"], answer: 0, why: "$5.90 / 10 = $0.59 la libra." },
            { objective: "O3", q: "Jabón A: 3 barras por $2.70. Jabón B: 8 barras por $8.00. ¿Cuál es la mejor compra?", options: ["El jabón B, porque tiene más barras", "Cuestan lo mismo por barra", "El jabón B, porque cuesta más", "El jabón A, a $0.90 la barra contra $1.00"], answer: 3, why: "$2.70 / 3 = $0.90 y $8.00 / 8 = $1.00, así que A cuesta menos por barra." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Los números de todos los días",
        questions: [
          { objective: "O1", q: "¿Cuánto es 1/8 como decimal?", options: ["0.18", "0.8", "0.125", "1.8"], answer: 2, why: "1 entre 8 es 0.125." },
          { objective: "O1", q: "En una cinta métrica, la marca más larga entre 4 y 5 pulgadas es:", options: ["4 1/2 pulgadas", "4 1/8 pulgadas", "4 1/16 pulgadas", "5 pulgadas"], answer: 0, why: "La marca más larga en el centro de una pulgada es la de 1/2." },
          { objective: "O2", q: "El impuesto sobre las ventas es 6% en una compra de $25. ¿Cuánto es el impuesto?", options: ["$6.00", "$0.25", "$31.00", "$1.50"], answer: 3, why: "0.06 x 25 = $1.50." },
          { objective: "O2", q: "Tu pago sube de $14.00 a $14.70 la hora. ¿De qué porcentaje es el aumento?", options: ["7%", "5%", "70%", "0.5%"], answer: 1, why: "El aumento es $0.70, y 0.70 / 14.00 = 0.05, que es 5%." },
          { objective: "O3", q: "¿Cuál es la mejor compra: 16 oz de crema de cacahuate por $3.20 o 40 oz por $7.20?", options: ["16 oz, a $0.20 la onza", "Son iguales", "40 oz, a $0.18 la onza", "No se puede saber"], answer: 2, why: "$3.20 / 16 = $0.20 y $7.20 / 40 = $0.18, así que el frasco de 40 oz cuesta menos por onza." }
        ]
      }
    },
    {
      name: "Capítulo 2: Matemáticas para el trabajo y el dinero",
      lessons: [
        {
          title: "Medir, convertir y contar las horas de trabajo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Convertir unidades y calcular el área y las horas trabajadas para una tarea de trabajo.",
          text: [
            "Unidades comunes en EE. UU.: 12 pulgadas = 1 pie, 3 pies = 1 yarda, 16 onzas = 1 libra, 2 pintas = 1 cuarto de galón, 4 cuartos de galón = 1 galón. Algunos trabajos usan el sistema métrico: 1 pulgada = 2.54 centímetros, y 1 kilogramo es más o menos 2.2 libras. Para cambiar una unidad grande a unidades pequeñas, multiplica; para cambiar unidades pequeñas a una grande, divide. 90 pulgadas / 12 = 7.5 pies.",
            "El área es el espacio que cubre una superficie plana: largo x ancho, en unidades cuadradas. Un cuarto de 12 pies por 10 pies mide 12 x 10 = 120 pies cuadrados. Si una caja de piso cubre 20 pies cuadrados, necesitas 120 / 20 = 6 cajas. Muchos trabajadores agregan más o menos un 10% extra por los cortes y los errores: 120 x 1.10 = 132, y 132 / 20 = 6.6. No puedes comprar 0.6 de una caja, así que redondea HACIA ARRIBA a 7.",
            "Horas trabajadas: cuenta desde la hora de entrada hasta la de salida y luego quita los descansos sin pago. Un turno de 7:30 am a 4:00 pm son 8 1/2 horas; menos un almuerzo sin pago de 30 minutos son 8 horas. Muchas tarjetas de horas usan horas decimales: 15 minutos = 0.25, 30 minutos = 0.5, 45 minutos = 0.75. Algunos lugares de trabajo usan el reloj de 24 horas: las 15:00 son las 3:00 pm."
          ],
          steps: ["Escribe lo que tienes y la unidad que necesitas.", "De unidad grande a pequeña: multiplica. De pequeña a grande: divide.", "Área: largo x ancho, en unidades cuadradas.", "Si necesitas artículos enteros (cajas, bolsas): redondea siempre hacia arriba.", "Horas: hora de salida menos hora de entrada, menos los descansos sin pago; pasa los minutos a decimal dividiéndolos entre 60."],
          words: [["Unidad", "lo que usas para medir, como pulgadas, pies, libras u horas."], ["Convertir", "cambiar una medida de una unidad a otra."], ["Área", "el espacio que cubre una superficie plana: largo por ancho, en unidades cuadradas."], ["Pies cuadrados (sq ft)", "la unidad de área cuando mides en pies."], ["Sistema métrico", "el sistema de medidas que se usa en la mayor parte del mundo: centímetros, metros, kilogramos, litros."], ["Horas decimales", "el tiempo escrito como decimal, como 7.75 horas por 7 horas y 45 minutos."]],
          slides: [
            { title: "Unidades que debes conocer", bullets: ["12 in = 1 ft; 3 ft = 1 yd", "16 oz = 1 lb; 4 qt = 1 gal", "1 in = 2.54 cm; 1 kg es más o menos 2.2 lb", "De grande a pequeña: multiplica. De pequeña a grande: divide"] },
            { title: "El área en un trabajo", bullets: ["Cuarto de 12 ft x 10 ft = 120 pies cuadrados", "Agrega 10% por los cortes: 132 pies cuadrados", "20 pies cuadrados por caja: 6.6, así que compra 7 cajas"] },
            { title: "Contar las horas", bullets: ["De 7:30 am a 4:00 pm = 8.5 horas", "Menos 30 min de almuerzo sin pago = 8 horas", "15 min = 0.25, 30 min = 0.5, 45 min = 0.75"] }
          ],
          tryIt: "Practica (respuestas abajo): (1) Cambia 5 pies a pulgadas. (2) Cambia 48 onzas a libras. (3) Un cuarto de almacén mide 9 pies por 14 pies. ¿Cuál es el área? (4) La pintura cubre más o menos 350 pies cuadrados por galón (en esta lata inventada). Tienes que cubrir 800 pies cuadrados. ¿Cuántos galones compras? (5) Trabajas de 6:45 am a 3:15 pm con un almuerzo sin pago de 30 minutos. ¿Cuántas horas son, en decimal? Respuestas: (1) 60 pulgadas; (2) 3 libras; (3) 126 pies cuadrados; (4) 800 / 350 = 2.29, así que compras 3 galones; (5) 8.5 horas menos 0.5 = 8.0 horas.",
          youCanNow: "convertir unidades, encontrar el área, redondear hacia arriba cuando necesitas artículos enteros y contar tus horas de trabajo en decimales.",
          quickCheck: [
            { objective: "O4", q: "Necesitas 4.2 bolsas de mezcla de concreto. ¿Cuántas bolsas compras?", options: ["4", "4.2", "42", "5"], answer: 3, why: "No puedes comprar una parte de una bolsa, así que redondeas hacia arriba a 5." },
            { objective: "O4", q: "¿Cuántas horas son 7 horas y 45 minutos en decimal?", options: ["7.45", "7.75", "7.5", "8.45"], answer: 1, why: "45 / 60 = 0.75, así que son 7.75 horas." }
          ]
        },
        {
          title: "Cómo revisar tu talón de pago",
          objectives: ["O5"],
          minutes: 6,
          goal: "Revisar las horas, la tarifa, las horas extra, las deducciones y el pago neto en un talón de pago.",
          text: [
            "El talón de pago muestra cómo se calculó tu pago. El pago bruto es lo que ganaste antes de que te descuenten algo. Las deducciones son las cantidades que te quitan, como los impuestos. El pago neto es lo que de verdad recibes: el pago bruto menos las deducciones. YTD (year to date) quiere decir \"en lo que va del año\": el total acumulado este año.",
            "Talón de práctica (inventado): 45 horas a $18.00 la hora. Según la ley federal, los trabajadores por hora que están cubiertos reciben pago de horas extra por las horas de más de 40 en una semana de trabajo, al menos una vez y media su tarifa. Entonces: 40 x $18.00 = $720.00 de pago regular. La tarifa de horas extra es $18.00 x 1.5 = $27.00, y 5 x $27.00 = $135.00. Pago bruto = $855.00. Algunos estados tienen reglas extra sobre horas extra; consulta la oficina de trabajo de tu estado.",
            "Deducciones en este talón: Seguro Social (Social Security) 6.2% de $855.00 = $53.01. Medicare (el seguro médico federal) 1.45% = $12.40. Impuesto federal sobre la renta $60.00 e impuesto estatal $20.00 (dependen de tu formulario W-4 y de tu estado; aquí son inventados). Total de deducciones = $145.41. Pago neto = $855.00 - $145.41 = $709.59.",
            "Si una línea está mal, anota la fecha de pago, la línea y lo que esperabas, y pregunta primero en nómina o a tu supervisor. Si no lo arreglan, puedes comunicarte con la oficina de trabajo de tu estado o con la División de Horas y Salarios (Wage and Hour Division) del Departamento de Trabajo de EE. UU. Guarda tus talones de pago y tapa tu número de Seguro Social antes de enseñárselo a alguien."
          ],
          steps: ["Compara las horas con tu propio registro de las horas que trabajaste.", "Pago regular: hasta 40 horas x tu tarifa.", "Horas extra: horas de más de 40 x (tarifa x 1.5), si estás cubierto.", "Pago bruto = pago regular + horas extra + cualquier otro pago.", "Suma todas las deducciones.", "Pago neto = pago bruto - total de deducciones. ¿Coincide con el talón?", "Si no, anótalo y pregunta en nómina."],
          words: [["Talón de pago", "el papel o registro en línea que muestra cómo se calculó tu pago."], ["Pago bruto", "lo que ganaste antes de que te descuenten algo."], ["Pago neto", "lo que te llevas a casa después de las deducciones; también se llama sueldo líquido."], ["Deducción", "una cantidad que se le quita a tu pago, como impuestos o seguro."], ["Horas extra", "pago adicional, al menos 1.5 veces tu tarifa, por las horas cubiertas de más de 40 en una semana de trabajo, según la ley federal."], ["YTD (en lo que va del año)", "el total desde el 1 de enero hasta este pago."], ["W-4", "el formulario que le das a tu empleador para fijar cuánto impuesto federal sobre la renta te retienen."]],
          slides: [
            { title: "Palabras del talón de pago", bullets: ["Pago bruto: lo ganado antes de las deducciones", "Deducciones: impuestos y otras cantidades que se quitan", "Pago neto: lo que te llevas a casa", "YTD: el total en lo que va del año"] },
            { title: "Talón de práctica: 45 horas a $18.00", bullets: ["Regular: 40 x $18.00 = $720.00", "Horas extra: 5 x $27.00 = $135.00", "Pago bruto: $855.00"] },
            { title: "Deducciones y pago neto", bullets: ["Seguro Social 6.2% = $53.01; Medicare 1.45% = $12.40", "Federal $60.00 + estatal $20.00 (inventados)", "Neto: $855.00 - $145.41 = $709.59"] },
            { title: "Si algo está mal", bullets: ["Anota la fecha, la línea y lo que esperabas", "Pregunta primero en nómina o a tu supervisor", "Luego, la oficina de trabajo de tu estado o la Wage and Hour Division del DOL"] }
          ],
          tryIt: "Practica (respuestas abajo): Trabajaste 42 horas a $16.00 la hora. Deducciones: Seguro Social 6.2%, Medicare 1.45%, impuesto federal $45.00, impuesto estatal $15.00 (inventados). Encuentra (1) el pago regular, (2) el pago de horas extra, (3) el pago bruto, (4) el total de deducciones, (5) el pago neto. Respuestas: (1) $640.00; (2) 2 x $24.00 = $48.00; (3) $688.00; (4) $42.66 + $9.98 + $45.00 + $15.00 = $112.64; (5) $575.36. Después revisa de la misma manera un talón de pago real tuyo, con los números privados tapados.",
          youCanNow: "revisar cada línea de un talón de pago y saber qué hacer si algo no cuadra.",
          quickCheck: [
            { objective: "O5", q: "El pago bruto es $600.00 y las deducciones suman $95.00. ¿Cuál es el pago neto?", options: ["$695.00", "$95.00", "$505.00", "$600.00"], answer: 2, why: "Pago neto = pago bruto - deducciones = 600 - 95 = $505.00." },
            { objective: "O5", q: "Ganas $20.00 la hora y te cubre la ley federal de horas extra. ¿Cuál es tu tarifa de horas extra?", options: ["$30.00", "$20.00", "$40.00", "$21.50"], answer: 0, why: "Una vez y media: $20.00 x 1.5 = $30.00." }
          ],
          sources: [DOL_OT, IRS_751]
        },
        {
          title: "Cómo hacer un presupuesto mensual con tu pago",
          objectives: ["O6"],
          minutes: 6,
          goal: "Hacer un presupuesto mensual con ahorro que mantenga los gastos iguales o por debajo de los ingresos.",
          text: [
            "Un presupuesto es un plan para tu dinero. Empieza con tu pago neto mensual (lo que te llevas a casa). Los meses tienen un poco más de 4 semanas, así que no multipliques simplemente el pago semanal por 4. Si te pagan cada semana: neto semanal x 52 / 12. Si te pagan cada dos semanas: neto x 26 / 12. Ejemplo: $700 a la semana x 52 = $36,400 al año, / 12 = $3,033.33 al mes.",
            "Haz una lista de tus gastos: primero las necesidades (renta, servicios, comida, transporte, teléfono, cuidado de niños, pagos mínimos de deudas), luego el ahorro y al final los gustos. Ejemplo: renta $1,200, servicios $150, teléfono $50, comida $400, transporte $200, deudas $150, ahorro $150. En total son $2,300, y quedan $733.33 para otras necesidades y gustos.",
            "La regla: el total de gastos (con el ahorro incluido) tiene que ser igual o menor que los ingresos. Si es mayor, quita un gusto, baja una cuenta o busca más ingresos. Revisa los totales sumándolos otra vez, o con una calculadora.",
            "Lleva la cuenta durante un mes. Anota lo que de verdad gastas, compáralo con tu plan y ajústalo. Los materiales gratis \"Your Money, Your Goals\" (Tu dinero, tus metas) de la Oficina para la Protección Financiera del Consumidor (CFPB) tienen hojas de trabajo que puedes imprimir."
          ],
          steps: ["Encuentra tu pago neto mensual (semanal x 52 / 12, o cada dos semanas x 26 / 12).", "Haz la lista de necesidades: renta, servicios, comida, transporte, teléfono, cuidado de niños, pagos mínimos de deudas.", "Agrega una línea de ahorro, aunque sea pequeña.", "Agrega los gustos al final.", "El total de gastos tiene que ser igual o menor que los ingresos.", "Lleva la cuenta durante un mes y ajusta."],
          words: [["Presupuesto", "un plan de cómo vas a usar tu dinero cada mes."], ["Ingreso", "el dinero que entra, como tu pago neto."], ["Gasto", "el dinero que sale, como la renta o la comida."], ["Gasto fijo", "un gasto que es igual cada mes, como la renta."], ["Gasto variable", "un gasto que cambia cada mes, como la comida o la gasolina."]],
          slides: [
            { title: "El ingreso mensual", bullets: ["Pago semanal x 52 / 12", "Cada dos semanas: x 26 / 12", "$700 a la semana = $3,033.33 al mes"] },
            { title: "El orden de los gastos", bullets: ["Primero las necesidades: renta, servicios, comida, transporte", "Luego el ahorro, aunque sea poco", "Luego los gustos"] },
            { title: "La regla", bullets: ["Gastos + ahorro iguales o por debajo de los ingresos", "Si te pasas: quita un gusto, baja una cuenta o gana más", "Suma los totales dos veces para revisar"] },
            { title: "Lleva la cuenta y ajusta", bullets: ["Anota lo que de verdad gastas durante un mes", "Compáralo con tu plan", "Hojas de trabajo gratis de la CFPB: Your Money, Your Goals"] }
          ],
          tryIt: "Termina tu tarea final. Usa el pago neto del talón de pago de la Lección 5 (o del tuyo) y conviértelo en ingreso mensual. Escribe un presupuesto con necesidades, una línea de ahorro y gustos. Súmalo dos veces. Si los gastos son mayores que los ingresos, cámbialo hasta que cuadre. Pon la revisión de tu talón de pago, tu presupuesto y 3 comparaciones de precio por unidad en una sola página: tu \"Hoja de matemáticas para el trabajo y el dinero\".",
          youCanNow: "convertir un pago en ingreso mensual y hacer un presupuesto que cuadre e incluya ahorro.",
          quickCheck: [
            { objective: "O6", q: "Te llevas a casa $500 a la semana. ¿Cuál es tu ingreso mensual?", options: ["$2,000.00", "$2,166.67", "$500.00", "$6,000.00"], answer: 1, why: "$500 x 52 / 12 = $2,166.67; si multiplicas por 4, dejas fuera los días de más." },
            { objective: "O6", q: "Tus gastos planeados son $50 más que tus ingresos. ¿Qué haces?", options: ["Dejo el plan así y espero que alcance", "Quito la línea de ahorro y no le hago caso", "Pido un préstamo de día de pago (payday loan) cada mes", "Quito o bajo algunos gastos hasta que los gastos quepan"], answer: 3, why: "Un presupuesto solo funciona cuando los gastos son iguales o menores que los ingresos." }
          ],
          sources: [CFPB]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Matemáticas para el trabajo y el dinero",
        questions: [
          { objective: "O4", q: "Un cuarto mide 15 pies por 11 pies. ¿Cuál es el área?", options: ["26 pies cuadrados", "165 pies cuadrados", "52 pies cuadrados", "1,511 pies cuadrados"], answer: 1, why: "Área = largo x ancho = 15 x 11 = 165 pies cuadrados." },
          { objective: "O4", q: "¿Cuántos pies son 60 pulgadas?", options: ["5 pies", "720 pies", "6 pies", "48 pies"], answer: 0, why: "De unidad pequeña a grande: divide. 60 / 12 = 5 pies." },
          { objective: "O5", q: "En un talón de pago, ¿qué es el pago bruto?", options: ["Lo que te llevas a casa", "Solo los impuestos", "El pago de una hora", "Lo que ganaste antes de las deducciones"], answer: 3, why: "El pago bruto es el total ganado antes de que te descuenten algo." },
          { objective: "O5", q: "Tu talón de pago dice 38 horas, pero tu propio registro dice 41. ¿Qué haces primero?", options: ["No decir nada", "Dejar el trabajo", "Anotar las fechas y las horas y preguntar en nómina", "Cambiar tú mismo el talón de pago"], answer: 2, why: "Empieza por nómina o por tu supervisor, con tu propio registro en la mano." },
          { objective: "O6", q: "¿Qué va en la parte de necesidades de un presupuesto?", options: ["La renta", "Un videojuego nuevo", "Boletos para un concierto", "Comida para llevar todas las noches"], answer: 0, why: "La renta es una necesidad; lo demás son gustos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Matemáticas diarias para el trabajo y la vida",
    questions: [
      { objective: "O1", q: "¿Qué es lo mismo que 50%?", options: ["0.05", "1/5", "1/2", "5.0"], answer: 2, why: "50% quiere decir 50 de cada 100, que es 1/2 o 0.5." },
      { objective: "O1", q: "¿Cuánto es 0.4 como porcentaje?", options: ["40%", "4%", "0.4%", "400%"], answer: 0, why: "Mueve el punto dos lugares a la derecha: 0.4 = 40%." },
      { objective: "O1", q: "1/8 + 5/8 = ?", options: ["6/16", "5/64", "4/8", "6/8, que es 3/4"], answer: 3, why: "Mismo número abajo: suma los de arriba. 6/8 se simplifica a 3/4." },
      { objective: "O2", q: "¿Cuánto es el 10% de $73.00?", options: ["$73.00", "$7.30", "$0.73", "$10.00"], answer: 1, why: "Mueve el punto un lugar a la izquierda: $7.30." },
      { objective: "O2", q: "Un taladro de $120 tiene 30% de descuento. ¿Cuál es el precio de oferta?", options: ["$36", "$90", "$84", "$150"], answer: 2, why: "El 30% de 120 es 36, y 120 - 36 = $84." },
      { objective: "O2", q: "Con \"20% de descuento\", ¿qué porcentaje del precio pagas?", options: ["80%", "20%", "120%", "100%"], answer: 0, why: "100% - 20% = 80% del precio." },
      { objective: "O2", q: "Las tasas del impuesto sobre las ventas:", options: ["Son iguales en todo EE. UU.", "Siempre son 10%", "Las pone la tienda", "Cambian según el estado y la ciudad, así que consulta la agencia de impuestos de tu estado o un recibo"], answer: 3, why: "Los estados y muchas ciudades fijan sus propias tasas del impuesto sobre las ventas." },
      { objective: "O3", q: "¿Cómo encuentras un precio por unidad?", options: ["Precio x tamaño", "Precio / tamaño", "Tamaño / 100", "Precio - tamaño"], answer: 1, why: "Divide el precio entre el número de unidades." },
      { objective: "O3", q: "Detergente: 50 oz por $6.00 o 100 oz por $13.00. ¿Cuál es la mejor compra?", options: ["100 oz, porque es más grande", "Son iguales", "50 oz, a $0.12 la onza contra $0.13", "No se puede saber"], answer: 2, why: "$6.00 / 50 = $0.12 y $13.00 / 100 = $0.13, así que la botella pequeña cuesta menos por onza." },
      { objective: "O3", q: "Antes de comprar el tamaño grande, también debes preguntarte:", options: ["¿Lo voy a usar antes de que se eche a perder, y puedo pagarlo ahora?", "¿La caja tiene un color bonito?", "¿Está en el estante de arriba?", "¿La tienda tiene estacionamiento?"], answer: 0, why: "Un precio por unidad más bajo solo ahorra dinero si lo usas y puedes pagarlo." },
      { objective: "O4", q: "¿Cuántos cuartos de galón hay en 3 galones?", options: ["7", "3", "16", "12"], answer: 3, why: "4 cuartos de galón = 1 galón, así que 3 x 4 = 12 cuartos de galón." },
      { objective: "O4", q: "Cada caja de losetas cubre 15 pies cuadrados. Necesitas 100 pies cuadrados. ¿Cuántas cajas?", options: ["6", "7", "6.67", "15"], answer: 1, why: "100 / 15 = 6.67, y redondeas hacia arriba a 7 cajas enteras." },
      { objective: "O4", q: "Trabajas de 8:00 am a 4:30 pm con un almuerzo sin pago de 30 minutos. ¿Cuántas horas?", options: ["8.5", "8.3", "8.0", "9.0"], answer: 2, why: "De 8:00 a 4:30 son 8.5 horas, menos 0.5 horas = 8.0 horas." },
      { objective: "O5", q: "El pago neto es:", options: ["El pago bruto menos las deducciones", "El pago bruto más las deducciones", "Solo tus horas extra", "Tu tarifa por hora"], answer: 0, why: "El pago neto es lo que queda después de quitar las deducciones." },
      { objective: "O5", q: "Según la ley federal, los trabajadores por hora cubiertos reciben horas extra por las horas de más de:", options: ["35 en una semana de trabajo", "8 en un mes", "50 en una semana de trabajo", "40 en una semana de trabajo"], answer: 3, why: "La regla federal es una vez y media por las horas de más de 40 en una semana de trabajo." },
      { objective: "O5", q: "Trabajaste 44 horas a $15.00 la hora, con horas extra. ¿Cuál es el pago bruto?", options: ["$660.00", "$690.00", "$600.00", "$900.00"], answer: 1, why: "40 x $15 = $600, más 4 x $22.50 = $90, así que $690.00." },
      { objective: "O5", q: "Antes de enseñarle un talón de pago a alguien que te ayuda, debes:", options: ["Publicarlo en internet", "Escribirle tu contraseña", "Tapar tu número de Seguro Social", "Tirarlo a la basura"], answer: 2, why: "Tu número de Seguro Social es privado y se puede usar para robar tu identidad." },
      { objective: "O6", q: "Te pagan cada dos semanas y te llevas a casa $1,200. ¿Cuál es tu ingreso mensual?", options: ["$2,400.00", "$2,600.00", "$1,200.00", "$4,800.00"], answer: 1, why: "$1,200 x 26 / 12 = $2,600.00." },
      { objective: "O6", q: "En un presupuesto equilibrado, el total de gastos con el ahorro incluido es:", options: ["Mayor que los ingresos", "Igual o menor que los ingresos", "Siempre exactamente $0", "Algo que no se anota"], answer: 1, why: "Gastar lo mismo o menos que tus ingresos evita nuevas deudas." },
      { objective: "O6", q: "¿Cuál es un gasto variable?", options: ["Una renta que no cambia", "Un pago fijo del carro", "Un plan de teléfono fijo", "La comida del supermercado, que cambia cada mes"], answer: 3, why: "Los gastos variables cambian de un mes a otro." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 1, 4, 7, 8, 11, 12, 13, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila dice Todavía no, vuelve a hacer esa parte con los pasos de la lección y revísala otra vez.",
    criteria: [
      { name: "Talón de pago revisado", objective: "O5", notYet: "Hay líneas sin revisar, o errores de cálculo en el pago bruto o el neto.", meets: "Horas, tarifa, horas extra, deducciones y pago neto revisados; cada línea coincide al centavo o el error está anotado.", exceeds: "También escribe qué decir en nómina sobre cualquier error y adónde ir después." },
      { name: "Ingreso mensual", objective: "O6", notYet: "Multiplicó el pago semanal por 4, o usó el pago bruto en lugar del neto.", meets: "Pago neto mensual calculado con x 52 / 12 o x 26 / 12.", exceeds: "Muestra el procedimiento y lo revisa de otra manera." },
      { name: "Presupuesto equilibrado", objective: "O6", notYet: "Los gastos son mayores que los ingresos, o no hay línea de ahorro.", meets: "Necesidades, ahorro y gustos en la lista; gastos iguales o menores que los ingresos; totales revisados.", exceeds: "Incluye un plan para anotar lo que de verdad gasta y una fecha para revisarlo." },
      { name: "Precios por unidad", objective: "O3", notYet: "Menos de 3 comparaciones, o las unidades no coinciden.", meets: "3 comparaciones con los precios por unidad correctos y la mejor compra marcada.", exceeds: "Anota cuándo el tamaño grande no es la mejor opción y por qué." },
      { name: "Porcentajes", objective: "O2", notYet: "Las respuestas de práctica de descuentos, impuestos, propinas o aumentos suelen estar mal.", meets: "Al menos 4 de 5 problemas de porcentajes bien, al centavo.", exceeds: "Puede explicarle a otra persona el atajo (primero el 10%, y de ahí se construye)." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y completan la Hoja de matemáticas para el trabajo y el dinero según la rúbrica",
      "Participantes que dicen haber encontrado un error en su talón de pago o haber ahorrado dinero con los precios por unidad en 30 días (encuesta de seguimiento)",
      "Participantes que llevan un presupuesto por escrito durante al menos 2 meses",
      "Participantes que siguen con \"Preparación para el examen GED: Matemáticas\" o aprueban el examen de matemáticas de un empleo en 6 meses"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, lápiz y una calculadora básica (la del teléfono sirve)",
      "Una cinta métrica o una regla con marcas de 1/8 de pulgada",
      "El talón de pago de práctica inventado de la Lección 5, o el del participante, con los números privados tapados",
      "Recibos de tienda o etiquetas del estante para los precios por unidad",
      "Unas 2 horas en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Muchas personas adultas sienten ansiedad con las matemáticas. Empiecen con la prueba inicial como un calentamiento \"sin nota\" y celebren lo que avanzaron en el examen final.",
      "Resuelvan cada ejemplo primero en el pizarrón y luego dejen que los participantes intenten el siguiente en parejas.",
      "Enseñen a revisar las respuestas de dos maneras (estimar y luego calcular) para que los participantes confíen en su propio trabajo.",
      "Cuando traigan talones de pago reales, pídanles que primero tapen el número de Seguro Social y los números de banco. Las preguntas de impuestos y horas extra que van más allá de lo básico se llevan a nómina, a la oficina de trabajo del estado o a la Wage and Hour Division del DOL.",
      "No juzguen el presupuesto de nadie; la meta es un plan que cuadre, no uno perfecto.",
      "A quienes quieran un diploma, recomiéndenles \"Preparación para el examen GED: Matemáticas\"."
    ]
  }
};
