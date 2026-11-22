"use strict";

// Koach Learn course (shared), Spanish translation of "AI in Finance". Rules: ../../../README.md (Translations).
// Teaches money management for an organization with AI help; no investment advice; points to irs.gov and a professional for tax questions.

module.exports = {
  id: "ai-in-finance-es",
  lang: "es",
  translationOf: "ai-in-finance",
  category: "Small Business",
  name: "IA en las finanzas",
  skills: "Proteger los datos de dinero al usar IA, Clasificar ingresos y gastos, Armar un presupuesto mensual, Comparar el presupuesto con lo real, Pronosticar el flujo de caja, Explicar los números",
  outcome: "usar un asistente de IA y una hoja de cálculo para ordenar un mes de ingresos y gastos, armar un presupuesto y compararlo con lo que pasó de verdad, hacer un pronóstico de flujo de caja de 13 semanas y explicar los resultados con palabras sencillas, sin compartir datos financieros privados.",
  about: [
    "Las preguntas de dinero quitan el sueño a dueños y líderes de organizaciones sin fines de lucro: ¿Podemos pagar la nómina? ¿En qué se fue el dinero? ¿Nos alcanza para contratar a alguien o abrir un programa? Las herramientas de IA te pueden ayudar a ordenar números, armar hojas de cálculo y explicar qué significan.",
    "Este curso es para dueños de pequeños negocios, directores de organizaciones sin fines de lucro, tesoreros y personas que se forman como tenedores de libros. Algunos ejemplos: un camión de comida, una empresa de limpieza, una organización deportiva juvenil y el ministerio de alimentos de una iglesia.",
    "Usarás herramientas gratuitas como Google Sheets o Excel con ChatGPT, Microsoft Copilot o Google Gemini. Practicarás con números de ejemplo o limpios, nunca con números de cuenta. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Este curso no es asesoría de impuestos, legal ni de inversiones; para eso, consulta a un profesional con licencia y irs.gov (el sitio del IRS, la agencia de impuestos de EE. UU.)."
  ],
  finalTask: "Con un mes de movimientos reales o de ejemplo, sin ningún número de cuenta ni nombre, arma una hoja de cálculo que clasifique los ingresos y gastos en categorías, una tabla de presupuesto frente a lo real con las tres diferencias más grandes explicadas, y un pronóstico de flujo de caja de 13 semanas con la semana más baja marcada. Luego escribe una actualización de dinero de cinco oraciones, en lenguaje sencillo, para un dueño, un socio o una junta directiva.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios, tenedores de libros, gerentes de oficina y tesoreros o personal de organizaciones sin fines de lucro que manejan el dinero pero no son contadores con formación.",
    startingPoint: "Saben leer un estado de cuenta bancario y usar un teléfono o una computadora; algunos llevan registros en una hoja de cálculo o una aplicación de contabilidad. Pocos arman presupuestos, pronósticos de flujo de caja o fórmulas, y muchos no han usado la IA de forma segura para tareas de dinero.",
    gap: "Muchas organizaciones pequeñas se enteran demasiado tarde de los problemas de efectivo, no ven cobros duplicados ni estafas, y les cuesta explicar sus números a socios o juntas directivas. Las personas necesitan usar la IA y una hoja de cálculo para ordenar, planear, pronosticar y explicar el dinero, sin poner datos financieros privados en las herramientas de IA y revisando cada número.",
    constraints: [
      "Nivel de lectura: palabras sencillas; los términos de dinero se explican la primera vez",
      "Aparatos: una computadora es lo mejor para las hojas de cálculo; en un teléfono este trabajo es difícil",
      "Privacidad: nada de números de cuenta, de ruta bancaria, de tarjeta, del Seguro Social o de identificación fiscal, contraseñas ni nombres de personas en las herramientas de IA",
      "Sin consejos de impuestos, nómina, leyes o inversiones: confirma en irs.gov, en la agencia de impuestos de tu estado o con un profesional con licencia",
      "Tiempo: lecciones de 5 minutos, unos 60 minutos en total más el tiempo para armar la hoja de cálculo"
    ],
    prerequisites: "Ninguno. Ayuda haber practicado lo básico de una hoja de cálculo (escribir en celdas, una SUMA sencilla)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un mes de movimientos exportados", action: "preparar los datos para la IA quitando los números de cuenta y cambiando los nombres por etiquetas", standard: "sin dejar ningún dato financiero privado, y revisando en la hoja de cálculo las cuentas que haga la IA" },
    { id: "O2", condition: "Con tus movimientos limpios y una lista de categorías", action: "clasificar cada movimiento en una categoría y sumar cada una con SUMIF (SUMAR.SI)", standard: "de modo que los totales por categoría sumen el total completo" },
    { id: "O3", condition: "Con un presupuesto mensual y los totales reales", action: "crear una tabla de presupuesto frente a lo real con la desviación y el porcentaje de desviación", standard: "con las tres desviaciones más grandes explicadas en una oración cada una" },
    { id: "O4", condition: "Con el efectivo de hoy y el dinero que esperas que entre y salga", action: "armar un pronóstico de flujo de caja de 13 semanas y marcar la semana más baja", standard: "pasando el efectivo final de cada semana a la semana siguiente" },
    { id: "O5", condition: "Con un mes de movimientos limpios y solicitudes de pago", action: "identificar posibles duplicados, gastos raros y estafas de pago", standard: "confirmando cualquier cambio de datos bancarios con una llamada a un número que ya conoces" },
    { id: "O6", condition: "Con los resultados de tu hoja de cálculo", action: "escribir una actualización de dinero de cinco oraciones en lenguaje sencillo y planear cuánto tiempo guardar los registros", standard: "con cada número revisado contra la hoja de cálculo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ordenar el dinero",
      lessons: [
        {
          objectives: ["O1"],
          title: "Usar la IA con el dinero de forma segura",
          minutes: 5,
          goal: "Preparar los datos financieros para recibir ayuda de la IA sin exponer datos privados.",
          text: [
            "Los asistentes de IA son buenos con fórmulas de hojas de cálculo, para ordenar, encontrar patrones y explicar términos como “base devengada” o “margen bruto”. No son contadores, pueden equivocarse en las cuentas y no conocen las reglas de impuestos de tu situación exacta.",
            "Nunca pegues en una herramienta de IA general números de banco o de tarjeta, números de ruta bancaria, contraseñas, números del Seguro Social o de identificación fiscal, ni nombres de clientes, donantes o empleados. En su lugar, exporta los movimientos a una hoja de cálculo, borra esas columnas y cambia los nombres por etiquetas generales como “Cliente A” o “Proveedor 1”.",
            "Comprueba las cuentas de la IA con la misma hoja de cálculo. Pide a la IA una fórmula, deja que la hoja calcule y revisa a mano algunos totales. Para preguntas de impuestos, nómina o leyes, confirma en irs.gov, en la agencia de impuestos de tu estado o con un contador con licencia."
          ],
          steps: ["Exporta los movimientos de tu banco o programa de contabilidad a una hoja de cálculo.", "Borra los números de cuenta y cualquier número de identificación.", "Cambia los nombres de personas por etiquetas como “Cliente A”.", "Usa la IA para fórmulas y explicaciones, no para respuestas finales de impuestos.", "Revisa al azar las cuentas de la IA con la hoja de cálculo."],
          words: [["Exportar", "guardar información de un programa en un archivo que otro programa puede abrir."], ["Movimiento", "una entrada o salida de dinero, como una venta o una factura pagada."]],
          slides: [
            { title: "La IA es buena para", bullets: ["Fórmulas de hojas de cálculo y ordenar", "Encontrar patrones", "Explicar términos de dinero"] },
            { title: "Nunca pegues en la IA", bullets: ["Números de banco, tarjeta o ruta bancaria", "Contraseñas, números del Seguro Social o fiscales", "Nombres de clientes, donantes o empleados"] },
            { title: "Limpia y luego comprueba", bullets: ["Borra números, pon etiquetas a los nombres", "Deja que la hoja de cálculo haga las cuentas", "Impuestos: irs.gov o un contador"] }
          ],
          tryIt: "Exporta o escribe 20 movimientos de un mes real o de ejemplo en una hoja de cálculo. Quita todos los números de cuenta y cambia los nombres por etiquetas.",
          youCanNow: "preparar datos de dinero para recibir ayuda de la IA sin exponer datos privados.",
          quickCheck: [
            { objective: "O1", q: "¿Qué columna debes borrar antes de pegar los movimientos en una herramienta de IA?", options: ["La fecha", "El monto", "La descripción de la compra", "El número de cuenta"], answer: 3, why: "Los números de cuenta son privados y nunca deben ir en una herramienta de IA general." },
            { objective: "O1", q: "Tus movimientos muestran a una clienta llamada \"Maria Lopez\". ¿Qué haces antes de pedir ayuda a la IA?", options: ["Dejar el nombre; la IA lo mantiene privado", "Cambiarlo por una etiqueta como \"Cliente A\"", "Agregar también su número de teléfono", "Borrar todo el movimiento"], answer: 1, why: "Cambiar los nombres por etiquetas protege la privacidad y la IA igual puede ayudar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Clasificar ingresos y gastos en categorías",
          minutes: 5,
          goal: "Usar la IA para sugerir categorías y una hoja de cálculo para sumar cada una.",
          text: [
            "Las categorías convierten una lista larga de movimientos en un panorama. Categorías comunes de un negocio: ventas, costo de la mercancía (ingredientes, materiales para los productos), alquiler, nómina, marketing, programas, vehículo y combustible, seguros y comisiones. Las organizaciones sin fines de lucro suelen agregar donaciones, subvenciones, costos de programas y costos de recaudación de fondos.",
            "Pega las columnas limpias de descripción y monto en un asistente de IA y pide: “Sugiere una categoría para cada línea de esta lista: [tus categorías]. Devuélvelo en una tabla”. Luego copia la tabla de nuevo en tu hoja y corrige las que estén mal.",
            "Pide a la IA la fórmula para sumar cada categoría. Tanto en Google Sheets como en Excel, SUMIF (SUMAR.SI si tu programa está en español) suma los montos que coinciden con una etiqueta, por ejemplo =SUMIF(C:C, \"Rent\", D:D). En algunos países la fórmula usa punto y coma en vez de coma."
          ],
          steps: ["Escribe tu lista de categorías.", "Pide a la IA que sugiera una categoría para cada movimiento limpio.", "Pega las categorías en tu hoja y corrige los errores.", "Usa SUMIF (SUMAR.SI) para sumar cada categoría.", "Comprueba que los totales por categoría sumen el total completo."],
          words: [["Categoría", "un grupo de movimientos parecidos, como alquiler o marketing."], ["SUMIF (SUMAR.SI)", "una fórmula de hoja de cálculo que suma los montos que cumplen una condición."], ["Costo de la mercancía", "lo que gastas para hacer o comprar los productos que vendes."]],
          slides: [
            { title: "Categorías comunes", bullets: ["Ventas, costo de la mercancía, alquiler, nómina", "Marketing, programas, combustible, seguros", "Sin fines de lucro: donaciones, subvenciones, programas"] },
            { title: "La IA sugiere, tú corriges", bullets: ["Pega descripciones y montos limpios", "Pide una categoría de tu lista", "Corrige las que estén mal"] },
            { title: "Suma con SUMIF (SUMAR.SI)", bullets: ["=SUMIF(C:C, \"Rent\", D:D)", "Los totales por categoría deben sumar el total completo"] }
          ],
          tryIt: "Pide a la IA que sugiera categorías para tus 20 movimientos limpios, corrígelas y suma cada categoría con SUMIF (SUMAR.SI). Confirma que los totales coincidan con el total general.",
          youCanNow: "clasificar movimientos en categorías y sumarlos con una fórmula de hoja de cálculo.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace SUMIF (SUMAR.SI) en una hoja de cálculo?", options: ["Suma los montos que coinciden con una etiqueta", "Ordena las filas por fecha", "Borra las celdas vacías", "Cuenta el número de columnas"], answer: 0, why: "SUMIF suma los montos cuya etiqueta coincide, como todas las filas de alquiler." },
            { objective: "O2", q: "Tus totales por categoría suman $4,800, pero el total completo es $5,000. ¿Qué haces?", options: ["Ignorar la diferencia", "Cambiar el total completo a $4,800", "Buscar los movimientos que no tienen categoría o tienen la etiqueta equivocada", "Pedirle a la IA que haga que los números coincidan"], answer: 2, why: "Los totales por categoría deben ser iguales al total completo, así que busca líneas sin categoría o mal etiquetadas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Armar un presupuesto y compararlo con lo real",
          minutes: 6,
          goal: "Armar un presupuesto mensual y una tabla de presupuesto frente a lo real que muestre dónde te desviaste.",
          text: [
            "Un presupuesto es tu plan de entradas y salidas de dinero para un periodo. El presupuesto frente a lo real compara el plan con lo que pasó de verdad. La diferencia se llama desviación.",
            "Arma columnas: categoría, presupuesto, real, desviación (real menos presupuesto) y porcentaje de desviación. Pide a la IA: “Dame fórmulas de Google Sheets para la desviación y el porcentaje de desviación”. Luego busca las desviaciones más grandes, en dólares y en porcentaje.",
            "Explica cada desviación grande en una oración. “El combustible se pasó $300 del presupuesto porque agregamos una segunda ruta de entrega”. La IA te puede ayudar a redactar las explicaciones, pero solo tú conoces las razones reales."
          ],
          steps: ["Haz la lista de categorías con un monto de presupuesto para cada una.", "Trae los totales reales de la lección 2.", "Agrega desviación = real menos presupuesto.", "Agrega porcentaje de desviación = desviación dividida entre el presupuesto.", "Explica las tres desviaciones más grandes en una oración cada una."],
          words: [["Presupuesto", "un plan del dinero que entra y sale."], ["Desviación", "la diferencia entre el presupuesto y lo que pasó de verdad."]],
          slides: [
            { title: "Presupuesto frente a lo real", bullets: ["Presupuesto: el plan", "Real: lo que pasó", "Desviación: la diferencia"] },
            { title: "Arma la tabla", bullets: ["Categoría, presupuesto, real", "Desviación y porcentaje de desviación"] },
            { title: "Explica las grandes", bullets: ["Las tres diferencias más grandes", "Una oración cada una con la razón real"] }
          ],
          tryIt: "Arma una tabla de presupuesto frente a lo real para tu mes, con la desviación y el porcentaje. Explica las tres desviaciones más grandes en una oración cada una.",
          youCanNow: "armar un presupuesto, compararlo con los resultados reales y explicar las diferencias.",
          quickCheck: [
            { objective: "O3", q: "En presupuesto frente a lo real, ¿cómo se calcula la desviación en este curso?", options: ["Presupuesto más real", "Presupuesto dividido entre real", "Real menos presupuesto", "Real por presupuesto"], answer: 2, why: "La desviación es lo real menos el presupuesto." },
            { objective: "O3", q: "Los suministros pasaron $200 del presupuesto. La IA sugiere \"subieron los precios\", pero tú sabes que compraste de más para un evento. ¿Qué escribes?", options: ["La razón real: suministros extra comprados para el evento", "La razón de la IA, porque suena bien", "Ninguna razón", "Que el presupuesto estaba mal"], answer: 0, why: "Solo tú sabes la razón real; la IA puede ayudar con la redacción, no con los hechos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Ordenar el dinero",
        questions: [
          { objective: "O1", q: "¿Qué NUNCA debes pegar en una herramienta de IA general?", options: ["Una lista de categorías", "Una tabla limpia de montos", "Tu número de cuenta bancaria y tu número de ruta", "Una pregunta sobre qué significa “desviación”"], answer: 2, why: "Los números de cuenta son datos financieros privados." },
          { objective: "O1", q: "La IA da un total que parece estar mal. ¿Qué debes hacer?", options: ["Dejar que la hoja de cálculo calcule y revisar a mano algunos totales", "Confiar en la IA", "Borrar los datos", "Presentárselo a la junta"], answer: 0, why: "La IA puede equivocarse en las cuentas; la hoja de cálculo y una revisión a mano lo confirman." },
          { objective: "O2", q: "¿Qué hace =SUMIF(C:C, \"Rent\", D:D)?", options: ["Borra las filas de alquiler", "Cuenta clientes", "Ordena por fecha", "Suma los montos de la columna D donde la columna C dice Rent (alquiler)"], answer: 3, why: "SUMIF suma los montos que cumplen una condición." },
          { objective: "O3", q: "El presupuesto de combustible era $500 y lo real fue $800. ¿Cuál es la desviación?", options: ["$1,300", "$300 por encima", "$300 por debajo", "$500"], answer: 1, why: "Real menos presupuesto = 800 - 500 = 300 por encima." },
          { objective: "O3", q: "¿Quién debe explicar por qué ocurrió una desviación?", options: ["Solo la IA", "Tú, con lo que pasó de verdad", "Nadie", "Un sitio web cualquiera"], answer: 1, why: "Solo tú conoces las razones reales detrás de los números." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planificar y explicar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pronosticar el flujo de caja de las próximas 13 semanas",
          minutes: 6,
          goal: "Armar un pronóstico de flujo de caja de 13 semanas y encontrar la semana en que el dinero está más justo.",
          text: [
            "La ganancia y el efectivo no son lo mismo. Puedes tener ganancias en papel y aun así quedarte sin efectivo si los clientes pagan tarde o vence una factura grande. Un pronóstico de flujo de caja muestra cuándo entra y sale el dinero, semana a semana.",
            "Un pronóstico de 13 semanas (unos tres meses) es una herramienta común. Filas: efectivo inicial, entradas (ventas, pagos, donaciones, subvenciones), salidas (nómina, alquiler, proveedores, pagos de préstamos) y efectivo final. El efectivo final de cada semana es el efectivo inicial de la siguiente.",
            "Pide a la IA que arme la plantilla: “Haz una tabla de pronóstico de flujo de caja de 13 semanas para Google Sheets con fórmulas, donde el efectivo final de cada semana pase a ser el efectivo inicial de la siguiente”. Llena tus números esperados y busca la semana más baja. Ahí es cuando quizá necesites aplazar una compra, cobrar un pago pendiente o conseguir una línea de crédito."
          ],
          steps: ["Pide a la IA una plantilla de flujo de caja de 13 semanas con fórmulas.", "Pon el saldo de efectivo de hoy como efectivo inicial de la semana 1.", "Escribe las entradas y salidas esperadas de cada semana.", "Comprueba que el efectivo final pase a la semana siguiente.", "Marca la semana más baja y planifica para ella."],
          words: [["Flujo de caja", "el momento en que el dinero entra y sale."], ["Pronóstico", "el mejor cálculo posible de números futuros."], ["Línea de crédito", "una cantidad fija que un banco te deja pedir prestada cuando la necesitas."]],
          slides: [
            { title: "La ganancia no es efectivo", bullets: ["Pagos atrasados y facturas grandes", "Puedes quedarte corto aunque tengas ganancias"] },
            { title: "Filas del pronóstico de 13 semanas", bullets: ["Efectivo inicial", "Entradas y salidas", "El efectivo final pasa a la semana siguiente"] },
            { title: "Encuentra la semana más baja", bullets: ["Aplaza una compra", "Cobra un pago pendiente", "Planifica el financiamiento con tiempo"] }
          ],
          tryIt: "Arma un pronóstico de flujo de caja de 13 semanas con ayuda de la IA. Llénalo con números reales o de ejemplo y marca la semana más baja con una acción que tomarías.",
          youCanNow: "armar un pronóstico de flujo de caja de 13 semanas y planificar para la semana más justa.",
          quickCheck: [
            { objective: "O4", q: "¿Qué muestra un pronóstico de flujo de caja?", options: ["Tu ganancia del año pasado", "Cuándo entra y sale el dinero, semana por semana", "Tu puntaje de crédito", "Lo que debes de impuestos"], answer: 1, why: "Un pronóstico de flujo de caja muestra el dinero que entra y sale semana por semana." },
            { objective: "O4", q: "Tu pronóstico muestra el efectivo por debajo de cero en la semana 7. ¿Qué podrías hacer?", options: ["Nada; es solo un pronóstico", "Esconderle la semana 7 a la junta", "Gastar más en la semana 6", "Aplazar una compra, cobrar un pago pendiente o conseguir una línea de crédito"], answer: 3, why: "La semana más baja es cuando planeas con tiempo cómo cubrir el faltante." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Detectar problemas y fraudes con IA",
          minutes: 5,
          goal: "Usar la IA y revisiones sencillas para detectar gastos raros, pagos duplicados y estafas.",
          text: [
            "La IA y las hojas de cálculo pueden señalar cosas que una persona ocupada no ve: pagos duplicados, una suscripción que olvidaste, un salto repentino en una categoría o un proveedor que no reconoces.",
            "Pide: “Mira esta tabla limpia. Haz una lista de posibles duplicados, montos raros y categorías que cambiaron mucho respecto al mes pasado”. Luego investiga cada punto tú mismo.",
            "Cuidado con las estafas dirigidas a negocios y organizaciones sin fines de lucro: facturas falsas, correos que piden cambiar los datos bancarios de un proveedor y pedidos urgentes de pago que parecen venir del jefe. Confirma siempre llamando a un número de teléfono que ya conoces. Denuncia el fraude en ReportFraud.ftc.gov (el sitio de denuncias de la FTC, la agencia de EE. UU. que protege a los consumidores)."
          ],
          steps: ["Pide a la IA una lista de posibles duplicados y montos raros.", "Compara las categorías con el mes pasado.", "Investiga tú mismo cada señal.", "Confirma cualquier cambio de datos bancarios llamando a un número conocido.", "Denuncia el fraude ante la FTC."],
          words: [["Pago duplicado", "pagar la misma factura dos veces."], ["Factura", "un cobro que pide un pago."], ["Fraude de pagos", "engañar a alguien para que envíe dinero al lugar equivocado."]],
          slides: [
            { title: "Lo que la IA puede señalar", bullets: ["Pagos duplicados", "Suscripciones olvidadas", "Saltos repentinos o proveedores desconocidos"] },
            { title: "Estafas a negocios", bullets: ["Facturas falsas", "“Por favor, actualicen nuestros datos bancarios”", "Pedidos urgentes que parecen venir del jefe"] },
            { title: "Protege el dinero", bullets: ["Llama a un número que ya conoces", "Investiga cada señal", "Denuncia en ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: Cómo reconocer y evitar las estafas de phishing", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Pide a la IA que revise tus movimientos limpios en busca de duplicados y montos raros. Investiga cada señal y escribe lo que encontraste.",
          youCanNow: "usar la IA y revisiones sencillas para detectar gastos raros y estafas de pagos.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es una estafa común contra negocios y organizaciones sin fines de lucro?", options: ["Un cliente que paga a tiempo", "Un pago mensual de alquiler", "Un estado de cuenta bancario que llega por correo", "Un correo que te pide cambiar los datos bancarios de un proveedor"], answer: 3, why: "Las solicitudes para cambiar los datos bancarios de un proveedor son una estafa común." },
            { objective: "O5", q: "La IA marca dos pagos iguales al mismo proveedor el mismo día. ¿Qué haces?", options: ["Dar por hecho que la IA tiene razón y cancelar los dos", "Investigarlo tú mismo, por ejemplo revisando las facturas", "Ignorarlo", "Pagarle al proveedor una tercera vez"], answer: 1, why: "La IA marca posibles problemas; tú investigas cada uno." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Explicar los números y guardar buenos registros",
          minutes: 5,
          goal: "Escribir una actualización de dinero en lenguaje sencillo y saber cuánto tiempo guardar los registros.",
          text: [
            "Los dueños, socios y juntas directivas necesitan una actualización corta y clara, no una hoja de cálculo gigante. Una buena actualización tiene cinco oraciones: cuánto entró, cuánto salió, la desviación más grande y por qué, el panorama de efectivo según tu pronóstico, y una decisión o acción necesaria.",
            "Pide a la IA que convierta tus números en un borrador y luego compara cada cifra con la hoja de cálculo. Quita cualquier cosa que haya agregado la IA y que no sea cierta.",
            "Guarda los registros. El IRS dice que hay que guardar los registros que respaldan los ingresos y las deducciones hasta que venza el periodo de prescripción de esa declaración, en general 3 años, con periodos más largos en algunos casos y al menos 4 años para los registros de impuestos sobre la nómina. Revisa irs.gov o consulta a un contador para tu caso."
          ],
          steps: ["Escribe cinco oraciones: entradas, salidas, desviación más grande, panorama de efectivo, decisión necesaria.", "Pide a la IA que mejore la redacción.", "Compara cada número con la hoja de cálculo.", "Guarda la hoja de cálculo y los recibos en una carpeta segura y con copia de respaldo.", "Revisa en irs.gov cuánto tiempo guardarlos."],
          words: [["Junta directiva", "el grupo que supervisa una organización sin fines de lucro o una empresa."], ["Periodo de prescripción", "el tiempo que tiene el IRS para revisar o cambiar una declaración de impuestos."]],
          slides: [
            { title: "Una actualización de cinco oraciones", bullets: ["Dinero que entró y que salió", "La desviación más grande y por qué", "Panorama de efectivo y decisión necesaria"] },
            { title: "La IA redacta, tú verificas", bullets: ["Revisa cada cifra", "Quita todo lo que no sea cierto"] },
            { title: "Guarda los registros (IRS)", bullets: ["En general 3 años; más en algunos casos", "Al menos 4 años para registros de impuestos sobre la nómina", "Revisa irs.gov o consulta a un contador"] }
          ],
          sources: [{ name: "IRS: ¿Cuánto tiempo debo guardar los registros?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }],
          tryIt: "Tarea final: escribe una actualización de dinero de cinco oraciones a partir de tu mes clasificado, tu tabla de presupuesto frente a lo real y tu pronóstico de 13 semanas. Revisa cada número y guarda todos los archivos en una carpeta con copia de respaldo.",
          youCanNow: "ordenar, planificar y explicar el dinero de una organización con ayuda de la IA, manteniendo seguros los datos.",
          quickCheck: [
            { objective: "O6", q: "¿Qué va en una actualización de dinero de cinco oraciones?", options: ["El panorama de efectivo según tu pronóstico", "Cada movimiento del mes", "Los números de cuenta bancaria", "Las direcciones de los empleados"], answer: 0, why: "La actualización cubre las entradas, las salidas, la desviación más grande, el panorama de efectivo y una decisión necesaria." },
            { objective: "O6", q: "El borrador de la IA dice que los ingresos subieron 20%, pero tu hoja muestra 12%. ¿Qué haces?", options: ["Enviarlo; es casi lo mismo", "Redondearlo a 15%", "Corregirlo para que coincida con la hoja de cálculo antes de enviarlo", "Quitar todos los números"], answer: 2, why: "Revisa cada cifra contra la hoja de cálculo y quita todo lo que no sea cierto." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planificar y explicar",
        questions: [
          { objective: "O4", q: "¿Por qué un negocio con ganancias puede quedarse sin efectivo?", options: ["La ganancia siempre es igual al efectivo", "Los bancos se quedan con todas las ganancias", "No puede pasar", "Los pagos llegan tarde mientras vencen las facturas"], answer: 3, why: "Importa el momento en que entra y sale el efectivo." },
          { objective: "O4", q: "En un pronóstico de flujo de caja, el efectivo inicial de la semana siguiente es igual a:", options: ["El efectivo final de esta semana", "La ganancia del año pasado", "El presupuesto", "Cero"], answer: 0, why: "Cada semana pasa a la siguiente." },
          { objective: "O5", q: "Un correo de un proveedor te pide enviar los pagos futuros a una cuenta bancaria nueva. ¿Qué haces?", options: ["Cambiarla de inmediato", "Responder con tu usuario del banco", "Llamar al proveedor a un número que ya conoces para confirmar", "Reenviarlo a todo el personal"], answer: 2, why: "Los pedidos de cambio de datos bancarios son un fraude común." },
          { objective: "O6", q: "Según el IRS, ¿cuál es el periodo general para guardar los registros que respaldan una declaración?", options: ["Una semana", "No hay que guardarlos", "Exactamente 50 años", "En general 3 años, más en algunos casos"], answer: 3, why: "La guía del IRS da 3 años como periodo general, con excepciones." },
          { objective: "O6", q: "La IA redacta una actualización de dinero para la junta. ¿Qué debes hacer antes de enviarla?", options: ["Enviarla sin leerla", "Agregar números extra para quedar bien", "Comparar cada número con la hoja de cálculo", "Borrar la hoja de cálculo"], answer: 2, why: "La IA puede equivocarse en las cifras; tú verificas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA en las finanzas",
    questions: [
      { objective: "O1", q: "¿En qué es buena la IA en el trabajo de finanzas?", options: ["En dar decisiones finales de impuestos", "En escribir fórmulas de hojas de cálculo y explicar términos", "En garantizar ganancias de inversión", "En firmar documentos bancarios"], answer: 1, why: "La IA ayuda con fórmulas y explicaciones, no con respuestas finales de impuestos o leyes." },
      { objective: "O1", q: "Antes de pegar movimientos en la IA, debes:", options: ["Quitar los números de cuenta y cambiar los nombres por etiquetas", "Agregar tu contraseña", "Incluir los teléfonos de los donantes", "Agregar números del Seguro Social"], answer: 0, why: "Los datos limpios protegen la privacidad." },
      { objective: "O1", q: "“Cliente A” en lugar de un nombre real es:", options: ["Un error de escritura", "Una categoría", "Una etiqueta que protege la privacidad", "Una desviación"], answer: 2, why: "Las etiquetas ocultan los nombres privados." },
      { objective: "O1", q: "¿Dónde debes confirmar una pregunta de impuestos?", options: ["En irs.gov, en la agencia de impuestos de tu estado o con un contador con licencia", "En una publicación de redes sociales", "Solo en un chat de IA", "Con lo que adivine un amigo"], answer: 0, why: "Las fuentes oficiales y los profesionales dan respuestas confiables sobre impuestos." },
      { objective: "O2", q: "¿Cuál es una categoría de ingresos típica de una organización sin fines de lucro?", options: ["Costo de la mercancía", "Combustible", "Alquiler", "Subvenciones"], answer: 3, why: "Las subvenciones y donaciones son ingresos de organizaciones sin fines de lucro." },
      { objective: "O2", q: "¿Qué es un movimiento?", options: ["Un tipo de presupuesto", "Una entrada o salida de dinero", "Un formulario de impuestos", "Una contraseña del banco"], answer: 1, why: "Cada venta o pago es un movimiento." },
      { objective: "O2", q: "Después de que la IA sugiere categorías, debes:", options: ["Aceptarlas todas", "Corregir las que estén mal", "Borrar la hoja", "Enviarlas por correo a los clientes"], answer: 1, why: "Las sugerencias de la IA hay que revisarlas." },
      { objective: "O2", q: "Los totales por categoría deben:", options: ["Ser mayores que el total completo", "Ser al azar", "Quedar en blanco", "Sumar el total completo"], answer: 3, why: "Esta revisión detecta líneas que faltan o se contaron dos veces." },
      { objective: "O3", q: "Un presupuesto es:", options: ["Un plan del dinero que entra y sale", "Una cuenta bancaria", "Una declaración de impuestos", "Un préstamo"], answer: 0, why: "Es el plan de dinero para un periodo." },
      { objective: "O3", q: "Presupuesto de marketing $1,000; lo real $700. La desviación es:", options: ["$300 por encima del presupuesto", "$1,700", "$300 por debajo del presupuesto", "$700"], answer: 2, why: "700 - 1,000 = -300, o sea $300 por debajo." },
      { objective: "O3", q: "¿Por qué explicar cada desviación grande?", options: ["Para alargar el informe", "Nunca hace falta", "Para esconder errores", "Para que quienes deciden sepan qué pasó y por qué"], answer: 3, why: "Las explicaciones convierten los números en decisiones." },
      { objective: "O4", q: "¿Cuántas semanas cubre el pronóstico de flujo de caja del curso?", options: ["2", "13", "52", "100"], answer: 1, why: "Un pronóstico de 13 semanas cubre unos tres meses." },
      { objective: "O4", q: "La semana más baja de tu pronóstico te dice:", options: ["Tu ganancia total", "Cuándo el efectivo estará más justo, para que planifiques", "Cuánto debes de impuestos", "Nada útil"], answer: 1, why: "Muestra cuándo actuar con tiempo." },
      { objective: "O4", q: "Una línea de crédito es:", options: ["Una cantidad fija que un banco te deja pedir prestada cuando la necesitas", "Una línea de una hoja de cálculo", "Un tipo de donación", "Una deducción de impuestos"], answer: 0, why: "Puede cubrir faltas cortas de efectivo." },
      { objective: "O5", q: "¿Qué puede ayudarte a señalar la IA en tus movimientos?", options: ["Tus futuros premios de lotería", "El impuesto exacto que debes", "Posibles pagos duplicados", "Las contraseñas de los clientes"], answer: 2, why: "La IA puede detectar patrones como los duplicados." },
      { objective: "O5", q: "Un correo urgente que parece de tu jefe pide una transferencia hoy. Debes:", options: ["Confirmar por teléfono a un número que ya conoces", "Enviarla de inmediato", "Responder con los datos bancarios", "Ignorar al jefe para siempre"], answer: 0, why: "Los pedidos urgentes de pago son una estafa común." },
      { objective: "O5", q: "¿Dónde puedes denunciar un fraude en EE. UU.?", options: ["En un foro cualquiera", "En el correo del estafador", "En ningún lado", "En ReportFraud.ftc.gov"], answer: 3, why: "La FTC recibe las denuncias de fraude." },
      { objective: "O6", q: "Una buena actualización de dinero para una junta es:", options: ["Solo la hoja de cálculo sin procesar", "Cinco oraciones claras con los números clave y una decisión", "Un informe de 40 páginas", "Ningún número"], answer: 1, why: "Lo corto y claro ayuda a decidir." },
      { objective: "O6", q: "Según el IRS, los registros de impuestos sobre la nómina se deben guardar al menos:", options: ["1 mes", "4 años", "1 año", "Nada de tiempo"], answer: 1, why: "El IRS dice al menos 4 años para los registros de impuestos sobre la nómina." },
      { objective: "O1", q: "Este curso da asesoría de inversiones.", options: ["Verdadero: compra lo que sugiera la IA", "Verdadero: invierte siempre el dinero de las subvenciones", "Verdadero: la IA elige acciones", "Falso: para eso consulta a un profesional con licencia"], answer: 3, why: "El curso enseña a manejar el dinero, no da asesoría de inversiones." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      6,
      7,
      9,
      11,
      12,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Datos privados quitados",
        objective: "O1",
        notYet: "Los datos todavía tienen números de cuenta, números de identificación o nombres reales.",
        meets: "Se quitaron todos los números de cuenta y de identificación, y los nombres se cambiaron por etiquetas.",
        exceeds: "Puede mostrar cómo revisó al azar en la hoja de cálculo las cuentas de la IA."
      },
      {
        name: "Categorías y totales",
        objective: "O2",
        notYet: "Los movimientos no están clasificados, o los totales no coinciden con el total completo.",
        meets: "Cada movimiento tiene una categoría, SUMIF suma cada una y juntas suman el total completo.",
        exceeds: "Se encontraron y corrigieron las categorías equivocadas de la IA, con una nota de cuáles fueron."
      },
      {
        name: "Presupuesto frente a lo real",
        objective: "O3",
        notYet: "No hay columna de desviación, o las desviaciones grandes no están explicadas.",
        meets: "Desviación y porcentaje de desviación para cada categoría, y las tres más grandes explicadas en una oración cada una.",
        exceeds: "Cada explicación dice qué se hará al respecto el mes siguiente."
      },
      {
        name: "Pronóstico de 13 semanas",
        objective: "O4",
        notYet: "El efectivo final no pasa a la semana siguiente, o la semana más baja no está marcada.",
        meets: "13 semanas con entradas, salidas y efectivo final que pasa a la semana siguiente, y la semana más baja marcada.",
        exceeds: "Incluye un plan para la semana más baja."
      },
      {
        name: "Actualización de dinero",
        objective: "O6",
        notYet: "Falta, es más larga de lo necesario o tiene números que no coinciden con la hoja.",
        meets: "Cinco oraciones: entradas, salidas, desviación más grande, panorama de efectivo y una decisión, todo igual que en la hoja.",
        exceeds: "Es clara para alguien sin formación en finanzas y dice dónde se guardan los registros."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Organizaciones que actualizan cada mes, durante tres meses, su presupuesto frente a lo real y su pronóstico de 13 semanas (encuesta de seguimiento)",
      "Cobros duplicados, suscripciones olvidadas o estafas detectadas y detenidas en un plazo de 60 días",
      "Dueños o juntas directivas que dicen recibir una actualización de dinero mensual y clara"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con Google Sheets o Excel",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Un mes de movimientos exportados de un banco o de una herramienta de contabilidad, o los datos de ejemplo del curso",
      "Unos 60 minutos para las lecciones y las comprobaciones, más el tiempo para armar la hoja de cálculo"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; arma las fórmulas de SUMIF y del pronóstico en una pantalla compartida.",
      "Ofrece un mes de ejemplo con movimientos inventados a quienes no quieran usar datos reales.",
      "Revisa que cada persona haya quitado los números de cuenta y los nombres antes de pegar algo en la IA.",
      "No des consejos de impuestos, nómina, leyes o inversiones; envía esas preguntas a irs.gov, a la agencia de impuestos del estado o a un profesional con licencia.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
