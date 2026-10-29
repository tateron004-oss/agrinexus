"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-farm-accounting-investment.js). See scripts/koachlearn-courses/README.md, "Translations".

const CBK = { name: "Banco Central de Kenia (CBK): bancos, bancos de microfinanzas y proveedores de crédito digital con licencia", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Banco Central de Nigeria (CBN): bancos y bancos de microfinanzas con licencia", url: "https://www.cbn.gov.ng" };
const BCEAO = { name: "BCEAO, Banco Central de los Estados de África Occidental (normas para bancos y microfinanzas en los países del XOF)", url: "https://www.bceao.int" };

module.exports = {
  id: "agri-farm-accounting-investment-es",
  lang: "es",
  translationOf: "agri-farm-accounting-investment",
  category: "Agriculture (Africa)",
  name: "Contabilidad agrícola y gestión de inversiones",
  skills: "Separar costos fijos y variables, Calcular el costo por kg, saco o litro, Llevar un registro de gastos, Planificar el flujo de caja mes a mes, Encontrar el precio de equilibrio, Juzgar una inversión con el periodo de recuperación y el rendimiento simple",
  outcome: "calcular cuánto te cuesta de verdad producir un kg, un saco o un litro, registrar cada gasto, planificar tu dinero mes a mes, encontrar el precio más bajo al que puedes vender sin perder, y juzgar si una inversión, como una bomba solar, un invernadero o más vacas, se va a pagar sola.",
  about: [
    "Este curso es para pequeños productores y agricultores comerciales en crecimiento, administradores de fincas, jóvenes agroemprendedores y extensionistas de Kenia, Nigeria, Ghana, Senegal, Costa de Marfil y de toda África que ya llevan algunos registros y quieren tomar mejores decisiones de dinero.",
    "Se basa en \"Agronegocios y administración de la finca\", que enseña registros sencillos y margen bruto. Aquí vas más lejos. El capítulo 1 trata de conocer tus costos: costos fijos y variables, el costo de producir una unidad y un registro de gastos. El capítulo 2 trata de planificar e invertir: un plan de flujo de caja mensual, el precio de equilibrio y cómo juzgar una inversión con su periodo de recuperación y su rendimiento simple.",
    "Todas las cifras de dinero son ejemplos inventados en KES, NGN, GHS y XOF para mostrar el método; usa tus propios precios. Este curso no da consejos de inversión. Antes de una compra grande o de un préstamo, compara ofertas, lee todo el contrato y habla con un asesor de confianza, como tu cooperativa, tu SACCO (cooperativa de ahorro y crédito), tu extensionista o un contador. Cada lección termina con una práctica corta y una comprobación rápida de 2 preguntas, cada capítulo con una comprobación de conocimientos, y el curso con un examen de 20 preguntas."
  ],
  finalTask: "Haz una hoja de costos e inversión para una actividad de tu finca (o de una finca de ejemplo): la lista de sus costos fijos y variables de una temporada, el costo por kg, saco, litro o huevo, un mes de registro de gastos, un plan de flujo de caja de 12 meses con saldos acumulados y los meses de faltante marcados, el precio de equilibrio y el rendimiento de equilibrio comparados con el precio que esperas, y el periodo de recuperación y el rendimiento simple de una inversión que estés pensando hacer, con tu decisión y por qué.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños productores y agricultores comerciales en crecimiento, administradores de fincas, jóvenes agroemprendedores, líderes de cooperativas y extensionistas de Kenia, Nigeria, Ghana y África Occidental francófona. La mayoría cultiva maíz, yuca, arroz, frijol, hortalizas, café o cacao, o cría vacas lecheras, cabras, cerdos, aves o peces.",
    startingPoint: "Saben sumar, restar, multiplicar y dividir con la calculadora del teléfono. Muchos llevan algunos registros y saben más o menos cuánto gastan y ganan; algunos hicieron la lección de margen bruto de \"Agronegocios y administración de la finca\". Pocos conocen su costo por kg o por litro, su precio de equilibrio o cómo juzgar si un equipo se va a pagar solo.",
    gap: "Los agricultores a menudo venden por debajo de lo que les costó producir, se quedan sin dinero antes de la cosecha incluso en un buen año, o compran equipos y animales que nunca recuperan su precio. Conocer el costo por unidad, el punto de equilibrio y el periodo de recuperación les permite rechazar malos precios, planificar su dinero y hacer inversiones que sí pagan, y da a prestamistas y compradores cifras en las que pueden confiar.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada palabra de dinero",
      "Dispositivos: basta con la calculadora de un teléfono básico y un cuaderno; una hoja de cálculo en el teléfono es opcional",
      "Tiempo: lecciones de 5 a 6 minutos que caben entre las tareas de la finca",
      "Dinero: todas las cifras son ejemplos; los precios, las tasas de interés y los subsidios cambian y deben venir de la zona de cada participante",
      "Sin consejos de inversión: los participantes comparan opciones y consultan a un asesor de confianza antes de las decisiones grandes"
    ],
    prerequisites: "Ninguno, pero \"Agronegocios y administración de la finca\" (registros y margen bruto) es un buen primer paso."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con la lista de costos de una actividad durante una temporada y su producción", action: "clasificar los costos en fijos y variables y calcular el costo de producir un kg, saco, litro o huevo", standard: "con cada costo en el grupo correcto y el costo por unidad correcto a la unidad de dinero más cercana" },
    { id: "O2", condition: "Usando un cuaderno o una hoja de cálculo en el teléfono", action: "registrar todos los gastos de la finca durante un mes por fecha, categoría y actividad, y sumarlos por categoría", standard: "sin días que falten y con totales que coincidan con tus registros de efectivo y dinero móvil" },
    { id: "O3", condition: "Con el dinero que esperas que entre y salga cada mes de un año", action: "armar un plan de flujo de caja mensual con saldos iniciales y finales y marcar los meses de faltante", standard: "con cada saldo final pasado al mes siguiente y al menos una acción planeada para cada mes de faltante" },
    { id: "O4", condition: "Con los costos totales, la producción esperada y el precio de un comprador", action: "calcular el precio de equilibrio y el rendimiento de equilibrio y decidir si la oferta cubre tus costos", standard: "correctos a la unidad de dinero o de producción más cercana" },
    { id: "O5", condition: "Con el costo de una inversión y los ingresos y costos extra que debería traer", action: "calcular su periodo de recuperación y su rendimiento simple y escribir una decisión con tus razones", standard: "con cifras correctas y al menos dos riesgos revisados (vida útil del equipo, costo del préstamo o cosechas más bajas)" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conocer tus costos",
      lessons: [
        {
          title: "Costos fijos y costos variables",
          objectives: ["O1"],
          minutes: 5,
          goal: "Clasificar los costos de una actividad en fijos y variables, incluido el costo anual de herramientas y construcciones.",
          text: [
            "Los costos variables suben o bajan según cuánto produces: semilla, fertilizante, alimento para animales, jornales, servicios veterinarios, sacos, combustible y transporte. Si siembras la mitad del terreno o crías la mitad de las aves, estos costos bajan.",
            "Los costos fijos se mantienen más o menos iguales produzcas lo que produzcas en la temporada: el alquiler de la tierra, el sueldo de un trabajador permanente, un permiso de agua, el seguro y el desgaste de herramientas, bombas, galpones y cercas. Ese desgaste se llama depreciación. Una forma sencilla de calcularla: (precio pagado - valor que queda al final) / años que va a durar. Ejemplo (cifras inventadas en chelines kenianos): una mochila fumigadora cuesta 6,000, dura 5 años y al final no vale nada, así que le cuesta a la finca 1,200 al año.",
            "Si una herramienta o una construcción sirve a varias actividades, reparte su costo anual entre ellas, por ejemplo según el terreno o el tiempo que usa cada una. Cuenta también el trabajo de tu familia, al precio del jornal local, para ver el verdadero costo de tu tiempo."
          ],
          steps: ["Elige una actividad, como maíz, tilapia o una vaca lechera.", "Haz la lista de todos sus costos de una temporada o de un año.", "Marca cada uno con V (variable: cambia según cuánto produces) o F (fijo: se mantiene igual).", "Para herramientas, bombas y construcciones, calcula la depreciación: (precio - valor que queda) / años de vida.", "Reparte los costos fijos entre las actividades que usan lo mismo."],
          words: [["Costo variable", "un costo que sube o baja según cuánto produces, como la semilla o el alimento."], ["Costo fijo", "un costo que se mantiene más o menos igual produzcas lo que produzcas en la temporada, como el alquiler de la tierra."], ["Depreciación", "la parte del precio de una herramienta o construcción que se gasta cada año porque se desgasta."], ["Actividad", "una línea de producción de la finca, como el maíz, las aves o la lechería."]],
          slides: [
            { title: "Costos variables", bullets: ["Cambian según cuánto produces", "Semilla, fertilizante, alimento, jornales, veterinario, sacos, combustible", "Si produces menos, bajan"] },
            { title: "Costos fijos", bullets: ["Se mantienen más o menos iguales produzcas lo que produzcas", "Alquiler, sueldos permanentes, permisos, seguro", "Desgaste de herramientas y construcciones"] },
            { title: "Depreciación", bullets: ["(Precio - valor que queda) / años de vida", "Fumigadora de 6,000 KES, 5 años: 1,200 al año (ejemplo)", "Repártela entre las actividades que la usan"] },
            { title: "No olvides", bullets: ["El trabajo de la familia al precio del jornal local", "Costos pequeños: sacos, saldo para llamar a compradores, transporte"] }
          ],
          tryIt: "Elige una actividad de tu finca. Haz una lista de al menos ocho costos de la última temporada, marca cada uno con V o F y calcula la depreciación anual de una herramienta o construcción que uses para ella.",
          youCanNow: "clasificar los costos de una actividad en fijos y variables y calcular el costo anual de tus herramientas y construcciones.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál de estos es un costo variable en una actividad avícola?", options: ["El desgaste anual del galpón", "El alquiler del terreno donde está el galpón", "El alimento de las aves", "El sueldo mensual de un trabajador permanente"], answer: 2, why: "El alimento sube y baja según cuántas aves tienes, así que es variable." },
            { objective: "O1", q: "Una bomba cuesta 50,000, dura 10 años y al final vale 0. Su depreciación es:", options: ["5,000 al año", "50,000 al año", "500 al año", "10,000 al año"], answer: 0, why: "(50,000 - 0) / 10 años = 5,000 al año." }
          ]
        },
        {
          title: "Cuánto cuesta producir un kg, un saco o un litro",
          objectives: ["O1"],
          minutes: 6,
          goal: "Calcular el costo de producir un kg, saco, litro o huevo en una actividad.",
          text: [
            "Costo por unidad = costo total del periodo / unidades producidas en ese periodo. El costo total son los costos variables más la parte de los costos fijos que le toca a esta actividad. La unidad es la forma en que vendes: un kg de tomate, un saco de 100 kg de maíz, un litro de leche, una bandeja de huevos, un kg de tilapia.",
            "Ejemplo (cifras inventadas en chelines kenianos), una vaca lechera durante un mes: alimento 9,500, servicios veterinarios y de reproducción 1,000, mano de obra 3,000, parte de los costos fijos (establo, picadora de forraje, agua) 1,500. Total 15,000. La vaca dio 300 litros. Costo por litro = 15,000 / 300 = 50 chelines. Si el comprador de leche paga menos de 50, cada litro pierde dinero.",
            "Ejemplo (cifras inventadas en nairas), una hectárea de maíz en Nigeria: costos variables 600,000, parte de los costos fijos 150,000, total 750,000, cosecha de 30 sacos de 100 kg. Costo por saco = 750,000 / 30 = 25,000, que son 250 nairas por kg. Calcúlalo cada temporada: cuando la cosecha baja o los insumos suben, el costo por unidad también sube."
          ],
          steps: ["Elige la unidad en la que vendes: kg, saco, litro, huevo o bandeja.", "Suma los costos variables del periodo.", "Suma la parte de los costos fijos que le toca a esta actividad.", "Cuenta las unidades producidas en el mismo periodo.", "Costo por unidad = costo total / unidades producidas.", "Compáralo con el precio que pagan los compradores."],
          words: [["Costo por unidad", "lo que te cuesta producir un kg, saco, litro o huevo: el costo total dividido entre las unidades producidas."], ["Unidad", "la cantidad en la que vendes, como un kg, un saco de 100 kg o un litro."]],
          slides: [
            { title: "La fórmula", bullets: ["Costo por unidad = costo total / unidades producidas", "Costo total = variables + parte de los fijos", "Usa la unidad en la que vendes"] },
            { title: "Vaca lechera, un mes (ejemplo en KES)", bullets: ["Alimento 9,500 + veterinario 1,000 + mano de obra 3,000 + fijos 1,500 = 15,000", "300 litros: 15,000 / 300 = 50 por litro", "Un comprador que paga menos de 50 significa pérdida en cada litro"] },
            { title: "Maíz, una hectárea (ejemplo en NGN)", bullets: ["Costo total 750,000; cosecha 30 sacos", "750,000 / 30 = 25,000 por saco = 250 por kg"] },
            { title: "Calcúlalo cada temporada", bullets: ["Menos cosecha = mayor costo por unidad", "Insumos más caros = mayor costo por unidad"] }
          ],
          tryIt: "Usa los costos de la Lección 1. Súmalos, divide entre las unidades que produjiste y escribe tu costo por kg, saco, litro o huevo. Luego escribe al lado el último precio que te ofreció un comprador.",
          youCanNow: "calcular el costo de producir una unidad de lo que vendes y compararlo con el precio que te ofrecen.",
          quickCheck: [
            { objective: "O1", q: "El costo total de una parcela de tomate es 40,000 y produjo 800 kg. ¿Cuál es el costo por kg?", options: ["800", "40", "500", "50"], answer: 3, why: "40,000 / 800 kg = 50 por kg." },
            { objective: "O1", q: "Tu cosecha baja pero tus costos siguen iguales. ¿Qué pasa con tu costo por unidad?", options: ["Se queda igual", "Sube", "Baja", "Llega a cero"], answer: 1, why: "El mismo costo dividido entre menos unidades da un costo más alto por cada unidad." }
          ]
        },
        {
          title: "Un registro de gastos que puedas mantener",
          objectives: ["O2"],
          minutes: 5,
          goal: "Armar un registro de gastos y anotar cada gasto de la finca durante un mes.",
          text: [
            "Un registro de gastos es una lista de cada pago de la finca con las mismas columnas siempre: fecha, qué compraste, categoría (semilla, fertilizante, alimento, mano de obra, veterinario, combustible, transporte, reparaciones, alquiler), qué actividad, F o V, monto, cómo pagaste (efectivo o dinero móvil) y si guardaste el comprobante.",
            "Anota cada gasto el mismo día. Al final del mes, suma cada categoría y cada actividad. Pronto verás a dónde se va el dinero. Ejemplo (cifras inventadas en cedis ghaneses), una granja de gallinas ponedoras en un mes: alimento 4,200, mano de obra 1,200, veterinario y vacunas 400, transporte 300, reparaciones 150, total 6,250. El alimento es dos tercios del costo, así que los mayores ahorros vendrán del alimento.",
            "Un cuaderno funciona bien. En el teléfono, una hoja de cálculo gratis como Google Sheets o Microsoft Excel puede sumar cada categoría por ti con la fórmula SUMIF (en Excel en español se llama SUMAR.SI). Compara el registro con tus estados de cuenta de efectivo y de dinero móvil cada semana, para que no se te escape nada."
          ],
          steps: ["Haz las columnas: fecha, artículo, categoría, actividad, F o V, monto, forma de pago, comprobante.", "Anota cada gasto el mismo día.", "Cada semana, compáralo con tu efectivo y tu estado de cuenta de dinero móvil.", "A fin de mes, suma cada categoría y cada actividad.", "Encuentra la categoría más grande y una forma de reducirla."],
          words: [["Registro de gastos", "una lista de cada pago de la finca con las mismas columnas, para poder sumarla por categoría."], ["Categoría", "un grupo de costos parecidos, como alimento, mano de obra o transporte."], ["Comprobante", "un papel o mensaje que prueba que pagaste."]],
          slides: [
            { title: "Las mismas columnas siempre", bullets: ["Fecha, artículo, categoría, actividad", "Fijo o variable, monto", "Efectivo o dinero móvil, ¿guardaste el comprobante?"] },
            { title: "Totales de fin de mes (ejemplo en GHS, ponedoras)", bullets: ["Alimento 4,200, mano de obra 1,200, veterinario 400", "Transporte 300, reparaciones 150: total 6,250", "El alimento es dos tercios: empieza a ahorrar ahí"] },
            { title: "Que sea honesto", bullets: ["Anótalo el mismo día", "Compáralo cada semana con el estado de cuenta de dinero móvil", "Cuaderno u hoja de cálculo en el teléfono (SUMIF / SUMAR.SI)"] }
          ],
          tryIt: "Arma hoy tu registro con las ocho columnas. Anota todos los gastos de la finca de los últimos siete días con tu memoria, tus comprobantes y tu estado de cuenta de dinero móvil, y luego súmalos por categoría.",
          youCanNow: "llevar un registro de gastos, sumarlo por categoría y por actividad, y encontrar a dónde se va tu dinero.",
          quickCheck: [
            { objective: "O2", q: "¿Para qué sirve una columna que diga a qué actividad pertenece cada gasto?", options: ["Para ver cuánto cuesta de verdad cada actividad", "Porque los bancos lo exigen todos los días", "Para que la lista sea más larga", "Para no necesitar comprobantes"], answer: 0, why: "Los totales por actividad sirven directamente para calcular el costo por unidad de cada una." },
            { objective: "O2", q: "El total de tu registro es menor que lo que salió de tu billetera de dinero móvil este mes. ¿Qué haces?", options: ["Lo ignoras; las diferencias pequeñas no importan", "Borras el registro y empiezas de nuevo el próximo año", "Revisas el estado de cuenta y agregas los gastos que faltan", "Agregas un número inventado para que coincidan"], answer: 2, why: "El estado de cuenta muestra lo que de verdad pagaste, así que te ayuda a encontrar y agregar lo que falta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conocer tus costos",
        questions: [
          { objective: "O1", q: "¿Cuál es un costo fijo en una finca de maíz?", options: ["La semilla", "El fertilizante", "Los jornales para deshierbar", "El alquiler anual de la tierra"], answer: 3, why: "El alquiler es el mismo siembres lo que siembres en la tierra, así que es fijo." },
          { objective: "O1", q: "Una picadora de forraje cuesta 30,000, dura 6 años y al final vale 0. ¿Cuál es su depreciación anual?", options: ["5,000", "6,000", "30,000", "180,000"], answer: 0, why: "(30,000 - 0) / 6 años = 5,000 al año." },
          { objective: "O1", q: "El costo total de una actividad porcina es 90,000 y vendiste 600 kg de carne de cerdo. ¿Cuál es el costo por kg?", options: ["600", "150", "90", "1,500"], answer: 1, why: "90,000 / 600 kg = 150 por kg." },
          { objective: "O2", q: "¿Cuándo debes anotar un gasto en el registro?", options: ["Al final de la temporada", "Solo cuando tienes comprobante", "El mismo día que lo pagas", "Solo los pagos grandes"], answer: 2, why: "Los registros del mismo día son completos y exactos." },
          { objective: "O2", q: "Después de un mes de registro, el alimento es el 65% de los costos. ¿Cuál es el siguiente paso más útil?", options: ["Buscar primero formas de reducir el costo o el desperdicio de alimento", "Dejar de registrar porque la respuesta ya está clara", "Reducir primero la categoría más pequeña", "Comprar más alimento para tener descuento, cueste lo que cueste"], answer: 0, why: "En la categoría más grande es donde los ahorros hacen más diferencia." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planificar e invertir",
      lessons: [
        {
          title: "Un plan de flujo de caja mensual con saldos",
          objectives: ["O3"],
          minutes: 6,
          goal: "Armar un plan de flujo de caja de 12 meses con saldos iniciales y finales y marcar los meses de faltante.",
          text: [
            "Un plan de flujo de caja muestra, mes a mes, cuánto dinero esperas tener. Para cada mes: saldo inicial (el dinero con el que empiezas) + dinero que entra - dinero que sale = saldo final. El saldo final pasa a ser el saldo inicial del mes siguiente.",
            "Ejemplo (cifras inventadas en cedis ghaneses), una finca de maíz y aves. Marzo: inicial 3,000 + entra 500 - sale 2,000 = final 1,500. Abril: inicial 1,500 + entra 500 - sale 2,500 = final -500. Un saldo final negativo es un faltante: ese mes no podrás pagarlo todo, a menos que lo planifiques.",
            "Para cada mes de faltante, planea una acción antes de que llegue: ahorrar de la última cosecha, pasar una compra a un mes más tarde, vender parte de la producción por etapas, agregar una actividad pequeña que deje ingresos ese mes (huevos, hortalizas, peces), conseguir crédito en insumos, o acordar de antemano un préstamo pequeño que se pague después de la cosecha. Actualiza el plan cada mes con lo que de verdad pasó."
          ],
          steps: ["Haz 12 columnas de meses y cuatro filas: inicial, dinero que entra, dinero que sale, final.", "Pon el efectivo que tienes hoy como primer saldo inicial.", "Llena el dinero que esperas que entre y salga cada mes.", "Final = inicial + entra - sale; pásalo al saldo inicial del mes siguiente.", "Encierra en un círculo cada saldo final negativo.", "Escribe una acción para cada mes marcado y actualiza el plan cada mes."],
          words: [["Saldo inicial", "el dinero que tienes al empezar un mes."], ["Saldo final", "el dinero que esperas tener al terminar un mes: inicial + dinero que entra - dinero que sale."], ["Faltante", "un mes en que el dinero que sale es mayor que el dinero que tienes."]],
          slides: [
            { title: "Una sola cuenta", bullets: ["Inicial + dinero que entra - dinero que sale = final", "El final pasa a ser el inicial del mes siguiente"] },
            { title: "Ejemplo (GHS, inventado)", bullets: ["Marzo: 3,000 + 500 - 2,000 = 1,500", "Abril: 1,500 + 500 - 2,500 = -500", "Negativo = faltante: planifícalo ya"] },
            { title: "Cómo cubrir un faltante", bullets: ["Ahorra de la cosecha; pasa una compra a más tarde", "Vende por etapas; agrega una actividad que deje ingresos ese mes", "Crédito en insumos o un préstamo pequeño acordado de antemano"] },
            { title: "Mantenlo vivo", bullets: ["Anota lo que de verdad pasó cada mes", "Actualiza los meses que vienen"] }
          ],
          tryIt: "Arma tu plan de flujo de caja de 12 meses empezando con el efectivo que tienes hoy. Calcula cada saldo final, encierra en un círculo los meses de faltante y escribe una acción para cada uno.",
          youCanNow: "armar un plan de flujo de caja mensual con saldos acumulados, ver a tiempo los meses de faltante y planear qué hacer.",
          quickCheck: [
            { objective: "O3", q: "Saldo inicial 2,000, entra 1,000, sale 2,500. ¿Cuál es el saldo final?", options: ["5,500", "-500", "3,000", "500"], answer: 3, why: "2,000 + 1,000 - 2,500 = 500." },
            { objective: "O3", q: "Tu plan muestra un faltante en agosto. ¿Cuándo debes planear qué hacer?", options: ["Ahora, meses antes de agosto", "En agosto, cuando lleguen las cuentas", "Después de la cosecha", "Nunca; se arreglará solo"], answer: 0, why: "Planear temprano te da tiempo para ahorrar, mover compras o conseguir crédito en buenas condiciones." }
          ]
        },
        {
          title: "El precio y el rendimiento de equilibrio",
          objectives: ["O4"],
          minutes: 5,
          goal: "Calcular el precio de equilibrio y el rendimiento de equilibrio y usarlos para juzgar la oferta de un comprador.",
          text: [
            "El punto de equilibrio es donde los ingresos cubren justo el costo total: ni ganancia ni pérdida. Precio de equilibrio = costo total / producción esperada. Es el precio más bajo que puedes aceptar sin perder dinero. Rendimiento de equilibrio = costo total / precio que esperas. Es la cosecha más pequeña que cubre tus costos a ese precio.",
            "Ejemplo (cifras inventadas en nairas), la hectárea de maíz de la Lección 2: costo total 750,000, cosecha esperada 30 sacos. Precio de equilibrio = 750,000 / 30 = 25,000 por saco. Un comprador ofrece 28,000: ganas 3,000 por saco, o 90,000 en 30 sacos. Rendimiento de equilibrio a 28,000 = 750,000 / 28,000 = 26.8 sacos, así que necesitas al menos 27 sacos. Si una sequía baja tu cosecha a 25 sacos, pierdes dinero incluso a ese precio.",
            "Usa el punto de equilibrio antes de sembrar (¿vale la pena este cultivo con los precios probables?) y cuando un comprador hace una oferta (¿cubre mis costos?). La diferencia entre el precio esperado y tu precio de equilibrio es tu margen de seguridad: cuanto más grande, más puedes aguantar una mala temporada o una caída de precio."
          ],
          steps: ["Suma el costo total de la actividad (variables + parte de los fijos).", "Precio de equilibrio = costo total / producción esperada.", "Rendimiento de equilibrio = costo total / precio esperado.", "Compáralos con la oferta del comprador y tu cosecha probable.", "Escribe tu margen de seguridad: precio esperado - precio de equilibrio."],
          words: [["Punto de equilibrio", "el punto donde los ingresos cubren justo el costo total: ni ganancia ni pérdida."], ["Precio de equilibrio", "el precio por unidad más bajo que cubre tus costos: costo total / producción."], ["Rendimiento de equilibrio", "la cosecha más pequeña que cubre tus costos a un precio dado: costo total / precio."], ["Margen de seguridad", "cuánto pueden bajar el precio o la cosecha antes de que tengas pérdida."]],
          slides: [
            { title: "Dos números de equilibrio", bullets: ["Precio de equilibrio = costo total / producción", "Rendimiento de equilibrio = costo total / precio"] },
            { title: "Ejemplo de maíz (NGN, inventado)", bullets: ["750,000 / 30 sacos = 25,000 por saco", "Oferta de 28,000: ganancia de 3,000 por saco, 90,000 en total", "Rendimiento de equilibrio a 28,000: unos 27 sacos"] },
            { title: "Cuándo usarlo", bullets: ["Antes de sembrar: ¿vale la pena?", "Cuando un comprador ofrece: ¿cubre los costos?", "Más margen de seguridad = más espacio para una mala temporada"] }
          ],
          tryIt: "Usa el costo total y la producción esperada de tu actividad. Calcula el precio de equilibrio y el rendimiento de equilibrio al precio de hoy, y escribe tu margen de seguridad. ¿Aceptarías la última oferta que recibiste?",
          youCanNow: "calcular el precio y el rendimiento de equilibrio de una actividad y usarlos para aceptar o rechazar una oferta.",
          quickCheck: [
            { objective: "O4", q: "Costo total 120,000, producción esperada 40 sacos. ¿Cuál es el precio de equilibrio?", options: ["4,000 por saco", "40 por saco", "3,000 por saco", "160,000 por saco"], answer: 2, why: "120,000 / 40 sacos = 3,000 por saco." },
            { objective: "O4", q: "Tu precio de equilibrio de la leche es 50 por litro. Un comprador ofrece 45. ¿Qué significa?", options: ["Ganas 5 en cada litro", "Pierdes unos 5 en cada litro, a menos que bajes costos o encuentres un mejor comprador", "La oferta es justa porque está cerca", "El punto de equilibrio no importa en la leche"], answer: 1, why: "Un precio por debajo del equilibrio significa que cada litro vendido pierde dinero." }
          ]
        },
        {
          title: "Juzgar una inversión: periodo de recuperación y rendimiento simple",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular el periodo de recuperación y el rendimiento simple de una inversión y decidir si tiene sentido.",
          text: [
            "Una inversión es dinero que gastas hoy para ganar más después: una bomba solar, un invernadero, una cámara fría, un chiquero o más vacas. Primero calcula el ingreso neto extra por año: el dinero extra que trae menos los costos extra de funcionamiento (combustible, reparaciones, alimento, mano de obra, repuestos). Luego: periodo de recuperación = costo de la inversión / ingreso neto extra por año. Rendimiento simple = ingreso neto extra por año / costo de la inversión x 100.",
            "Ejemplo (cifras inventadas en chelines kenianos), una bomba solar que permite un cultivo de tomate en la época seca: costo 120,000; ingreso extra 55,000 al año menos costos extra 15,000 = 40,000 de ingreso neto extra. Recuperación = 120,000 / 40,000 = 3 años. Rendimiento simple = 40,000 / 120,000 x 100 = cerca de 33% al año. Ejemplo (cifras inventadas en francos CFA), un invernadero en Senegal: costo 3,000,000; ingreso neto extra 600,000 al año. Recuperación = 5 años; rendimiento simple = 20% al año.",
            "Luego revisa los riesgos. ¿Va a durar más que el periodo de recuperación (el plástico del invernadero y las piezas de la bomba se desgastan)? Si pides prestado, ¿el costo anual del préstamo es menor que el rendimiento, y puedes pagarlo antes de que el equipo se recupere? ¿Y si la cosecha o los precios son un 20% más bajos de lo que esperabas? Usa cifras prudentes, pide al proveedor nombres de agricultores que ya lo usan y habla con un asesor de confianza antes de comprar. Este curso explica el método; no te dice qué comprar."
          ],
          steps: ["Escribe el costo completo: equipo, entrega, instalación, capacitación.", "Calcula el ingreso extra por año con cosechas y precios prudentes.", "Resta los costos extra de funcionamiento para obtener el ingreso neto extra por año.", "Recuperación = costo / ingreso neto extra por año.", "Rendimiento simple = ingreso neto extra / costo x 100.", "Revisa la vida útil, el costo del préstamo y un caso 20% peor; escribe tu decisión."],
          words: [["Inversión", "dinero que gastas hoy en algo que debería hacerte ganar más después."], ["Ingreso neto extra", "el dinero extra que trae una inversión cada año menos sus costos extra de funcionamiento."], ["Periodo de recuperación", "cuántos años tarda el ingreso neto extra en devolver lo que gastaste: costo / ingreso neto extra por año."], ["Rendimiento simple", "el ingreso neto extra por año como porcentaje del costo."]],
          slides: [
            { title: "Dos números para juzgar una inversión", bullets: ["Recuperación = costo / ingreso neto extra por año", "Rendimiento simple = ingreso neto extra / costo x 100", "Ingreso neto extra = ingreso extra - costos extra"] },
            { title: "Bomba solar (ejemplo en KES)", bullets: ["Costo 120,000; ingreso neto extra 40,000 al año", "Recuperación 3 años; rendimiento simple cerca de 33%"] },
            { title: "Invernadero en Senegal (ejemplo en XOF)", bullets: ["Costo 3,000,000; ingreso neto extra 600,000 al año", "Recuperación 5 años; rendimiento simple 20%"] },
            { title: "Revisa antes de comprar", bullets: ["¿Dura más que el periodo de recuperación?", "¿El costo del préstamo es menor que el rendimiento?", "¿Sigue funcionando si la cosecha o los precios bajan un 20%?", "Habla con usuarios y con un asesor de confianza"] }
          ],
          sources: [CBK, CBN, BCEAO],
          tryIt: "Tarea final: haz tu hoja de costos e inversión. Para una actividad, incluye los costos fijos y variables, el costo por unidad, un mes de registro de gastos, un plan de flujo de caja de 12 meses con los meses de faltante marcados, el precio y el rendimiento de equilibrio, y el periodo de recuperación y el rendimiento simple de una inversión, con tu decisión y por qué.",
          youCanNow: "juzgar si una inversión se va a pagar sola, con el periodo de recuperación, el rendimiento simple y una revisión de los riesgos.",
          quickCheck: [
            { objective: "O5", q: "Una cámara fría cuesta 200,000 y agrega 50,000 de ingreso neto extra al año. ¿Cuál es el periodo de recuperación?", options: ["2 años", "25 años", "5 años", "4 años"], answer: 3, why: "200,000 / 50,000 = 4 años." },
            { objective: "O5", q: "Un equipo se recupera en 6 años, pero el proveedor dice que dura unos 4 años. ¿Qué te dice esto?", options: ["Se va a desgastar antes de recuperarse, así que probablemente sea una pérdida", "Es una gran inversión", "La recuperación no importa si el equipo es nuevo", "Deberías pedir más prestado para comprar dos"], answer: 0, why: "Si el equipo se desgasta antes de recuperarse, su ingreso extra nunca cubre su costo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planificar e invertir",
        questions: [
          { objective: "O3", q: "En un plan de flujo de caja, ¿cuál es el saldo inicial del mes siguiente?", options: ["Siempre cero", "El saldo final de este mes", "El dinero que entra el mes siguiente", "La ganancia del año"], answer: 1, why: "Cada mes empieza con el dinero con el que terminó el mes anterior." },
          { objective: "O3", q: "¿Cuál es una acción sensata para un mes de faltante que ves venir?", options: ["Esperar y tener fe", "Vender toda la cosecha el primer día", "Pasar una compra a un mes más tarde o ahorrar de la cosecha para ese mes", "Aceptar cualquier préstamo ofrecido por mensaje de texto"], answer: 2, why: "Mover gastos o ahorrar con tiempo cierra la brecha sin préstamos riesgosos." },
          { objective: "O4", q: "Costo total 300,000; el comprador paga 6,000 por saco. ¿Cuál es el rendimiento de equilibrio?", options: ["50 sacos", "60 sacos", "5 sacos", "1,800 sacos"], answer: 0, why: "300,000 / 6,000 = 50 sacos." },
          { objective: "O5", q: "Ingreso neto extra de 30,000 al año en una inversión de 150,000. ¿Cuál es el rendimiento simple?", options: ["5%", "50%", "30%", "20%"], answer: 3, why: "30,000 / 150,000 x 100 = 20% al año." },
          { objective: "O5", q: "¿Cómo calculas el ingreso neto extra de una bomba solar nueva?", options: ["Contando solo el ingreso extra", "Restando el precio de la bomba a una cosecha", "Ingreso extra que trae menos sus costos extra de funcionamiento", "Pidiendo al vendedor que te diga la ganancia"], answer: 2, why: "Los costos de funcionamiento, como reparaciones y mano de obra, reducen lo que la bomba gana de verdad." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Contabilidad agrícola y gestión de inversiones",
    questions: [
      { objective: "O1", q: "¿Qué costo cambia según cuánto produces?", options: ["Un costo variable, como el alimento", "Un costo fijo, como el alquiler de la tierra", "La depreciación de un galpón", "Un permiso de agua"], answer: 0, why: "Los costos variables suben y bajan con la producción." },
      { objective: "O1", q: "Una cerca costó 40,000, dura 8 años y al final vale 0. ¿Cuál es su depreciación anual?", options: ["8,000", "320,000", "40,000", "5,000"], answer: 3, why: "(40,000 - 0) / 8 = 5,000 al año." },
      { objective: "O1", q: "¿Por qué contar el trabajo de la familia al precio del jornal local?", options: ["Porque la oficina de impuestos lo exige", "Para ver el verdadero costo de producir cada unidad", "Para que la finca parezca más pobre", "No hace falta"], answer: 1, why: "El tiempo de tu familia tiene valor; dejarlo fuera esconde el costo real." },
      { objective: "O1", q: "El costo total de un estanque de tilapia es 60,000 y cosechaste 300 kg. ¿Cuál es el costo por kg?", options: ["300", "2,000", "200", "20"], answer: 2, why: "60,000 / 300 kg = 200 por kg." },
      { objective: "O1", q: "Los precios de los insumos suben pero tu cosecha sigue igual. Tu costo por unidad:", options: ["Sube", "Baja", "Se queda igual", "No se puede calcular"], answer: 0, why: "Un costo total más grande dividido entre las mismas unidades da un costo por unidad más alto." },
      { objective: "O2", q: "¿Qué conjunto de columnas sirve para un buen registro de gastos?", options: ["Solo el monto", "Artículo y color", "Nombre del comprador y precio", "Fecha, artículo, categoría, actividad, F o V, monto, forma de pago, comprobante"], answer: 3, why: "Estas columnas te dejan sumar los costos por categoría y por actividad y revisarlos." },
      { objective: "O2", q: "¿Cada cuánto debes comparar tu registro con tu estado de cuenta de dinero móvil?", options: ["Una vez al año", "Cada semana", "Nunca", "Solo cuando un prestamista lo pide"], answer: 1, why: "Revisar cada semana atrapa los gastos que faltan mientras todavía los recuerdas." },
      { objective: "O2", q: "¿Qué fórmula de hoja de cálculo puede sumar todos los gastos de una categoría?", options: ["SUMIF (SUMAR.SI)", "LEN (LARGO)", "TODAY (HOY)", "UPPER (MAYUSC)"], answer: 0, why: "SUMIF suma los montos que cumplen una condición, como la categoría \"alimento\"." },
      { objective: "O3", q: "El saldo final se calcula así:", options: ["Solo dinero que entra - dinero que sale", "Saldo inicial x dinero que entra", "Saldo inicial + dinero que entra - dinero que sale", "Dinero que sale - saldo inicial"], answer: 2, why: "Empiezas con el saldo inicial, sumas lo que entra y restas lo que sale." },
      { objective: "O3", q: "Inicial 4,000, entra 0, sale 5,000. ¿Qué te dice el saldo final?", options: ["Tienes 9,000", "Vas a tener un faltante de 1,000", "Te sobran 1,000", "Nada útil"], answer: 1, why: "4,000 + 0 - 5,000 = -1,000, un faltante." },
      { objective: "O3", q: "¿Qué ayuda más con un mes de faltante antes de la cosecha?", options: ["Ignorarlo hasta que llegue", "Gastar más el mes anterior", "Pedir prestado a un prestamista que no revisaste", "Una actividad pequeña que deje ingresos ese mes, como huevos u hortalizas"], answer: 3, why: "Tener ingresos en el mes de escasez cubre la brecha sin deudas riesgosas." },
      { objective: "O3", q: "¿Por qué actualizar el plan de flujo de caja cada mes?", options: ["Para que coincida con lo que de verdad pasó y ver mejor los meses que vienen", "Porque el banco lo cambia", "Para que los números se vean más grandes", "No se debe actualizar"], answer: 0, why: "Un plan que sigue la realidad te avisa temprano de nuevas brechas." },
      { objective: "O4", q: "El precio de equilibrio es:", options: ["Costo total / producción esperada", "Producción esperada / costo total", "Precio x producción", "Ingresos - costo total"], answer: 0, why: "Dividir el costo total entre las unidades que esperas da el precio más bajo que cubre los costos." },
      { objective: "O4", q: "Costo total 200,000; producción esperada 50 sacos. Un comprador ofrece 3,500 por saco. Mirando los costos, ¿deberías aceptar?", options: ["Sí, 3,500 cubre el costo", "Sí, cualquier oferta es buena", "No, el precio de equilibrio es 4,000 por saco", "No se puede saber"], answer: 2, why: "200,000 / 50 = 4,000 por saco, así que a 3,500 pierdes 500 por saco." },
      { objective: "O4", q: "El rendimiento de equilibrio te dice:", options: ["El mejor precio que puedes conseguir", "La cosecha más pequeña que cubre tus costos a un precio dado", "Cuánto fertilizante usar", "Tu ganancia del año"], answer: 1, why: "Es el costo total dividido entre el precio: la cosecha que necesitas para no perder." },
      { objective: "O4", q: "Precio esperado 30,000 por saco, precio de equilibrio 25,000 por saco. Tu margen de seguridad es:", options: ["55,000 por saco", "25,000 por saco", "30,000 por saco", "5,000 por saco"], answer: 3, why: "30,000 - 25,000 = 5,000 por saco antes de tener pérdida." },
      { objective: "O5", q: "El periodo de recuperación es:", options: ["Costo de la inversión / ingreso neto extra por año", "Ingreso neto extra / costo x 100", "Interés del préstamo x años", "Costo - ingreso anual"], answer: 0, why: "Muestra cuántos años de ingreso neto extra devuelven el costo." },
      { objective: "O5", q: "Tres vacas lecheras más cuestan 450,000 y agregan 150,000 de ingreso neto extra al año. ¿Cuál es el rendimiento simple?", options: ["3%", "15%", "33%", "300%"], answer: 2, why: "150,000 / 450,000 x 100 = cerca de 33% al año." },
      { objective: "O5", q: "Pedirías un préstamo para un invernadero. ¿Qué revisión importa más?", options: ["El color del invernadero", "Si el costo anual del préstamo es menor que el rendimiento y los pagos caben en tu flujo de caja", "Si los vecinos tienen uno", "Nada, si el vendedor es amable"], answer: 1, why: "Un préstamo que cuesta más que el rendimiento, o que no puedes pagar a tiempo, convierte la inversión en pérdida." },
      { objective: "O5", q: "Un proveedor promete que una bomba va a duplicar tus ingresos. ¿Qué debes hacer?", options: ["Comprarla de inmediato", "Usar la cifra del proveedor como tu cálculo", "Pagar un anticipo antes de preguntar nada", "Usar cifras prudentes, hablar con agricultores que la usan y consultar a un asesor de confianza"], answer: 3, why: "Las cifras prudentes y la experiencia de usuarios reales te protegen de las promesas optimistas de venta." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 8, 9, 12, 13, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte de la hoja y vuelve a revisarla.",
    criteria: [
      { name: "Costos clasificados y costo por unidad", objective: "O1", notYet: "Faltan costos o están mezclados, o el costo por unidad está mal o falta.", meets: "Cada costo está marcado como fijo o variable, la depreciación está incluida y el costo por unidad es correcto.", exceeds: "Los costos fijos se reparten de forma justa entre actividades y el trabajo de la familia se valora al precio del jornal local." },
      { name: "Registro de gastos", objective: "O2", notYet: "Hay menos de la mitad de los días registrados, o no hay totales por categoría.", meets: "Un mes de gastos con todas las columnas, sumado por categoría y por actividad, que coincide con el efectivo y el dinero móvil.", exceeds: "También nombra la categoría más grande y una forma realista de reducirla." },
      { name: "Plan de flujo de caja", objective: "O3", notYet: "Faltan meses o los saldos finales no pasan al mes siguiente.", meets: "Doce meses con saldos iniciales y finales correctos, los meses de faltante marcados y una acción para cada uno.", exceeds: "Las acciones tienen fecha y costo, y el plan se actualizó con un mes real." },
      { name: "Punto de equilibrio", objective: "O4", notYet: "Falta el precio o el rendimiento de equilibrio, o está mal.", meets: "El precio y el rendimiento de equilibrio son correctos y se comparan con el precio y la cosecha esperados.", exceeds: "También muestra el margen de seguridad y qué pasa si la cosecha baja un 20%." },
      { name: "Decisión de inversión", objective: "O5", notYet: "No hay periodo de recuperación ni rendimiento, o la decisión no tiene razones.", meets: "La recuperación y el rendimiento simple son correctos y la decisión revisa al menos dos riesgos.", exceeds: "Incluye un caso 20% peor, la vida útil del equipo y el costo de cualquier préstamo, con un sí, un no o un esperar claro." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en todas las filas de la rúbrica de la hoja de costos e inversión",
      "Participantes que siguen llevando un registro de gastos 30 días después (encuesta de seguimiento)",
      "Participantes que dicen haber rechazado un precio por debajo de su precio de equilibrio o haber cambiado una venta por eso",
      "Participantes que dicen haber aplazado, cambiado o tomado una decisión de inversión usando la recuperación y el rendimiento simple",
      "Cooperativas o prestamistas aliados informan que más socios llevan cifras de costos y de flujo de caja a las conversaciones de préstamo o de contrato"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un cuaderno y un lápiz, o un teléfono con una aplicación gratis de hoja de cálculo (Google Sheets o Microsoft Excel)",
      "La calculadora del teléfono",
      "Los costos, comprobantes y estados de cuenta de dinero móvil del participante para una actividad, o las cifras de ejemplo del curso",
      "Unos 75 minutos en total, en sesiones cortas, más un mes de registro de gastos para la tarea final"
    ],
    facilitatorNotes: [
      "En un grupo de agricultores o una sesión de extensión: hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas de \"Pruébalo ahora\" hechas en parejas.",
      "Lleve un presupuesto real o de ejemplo de una actividad para que quienes no tienen registros también puedan practicar; asegúrese de que todos revisen las cuentas con la calculadora.",
      "Recuerde a los participantes que todas las cifras del curso son ejemplos; pídales que usen precios de su propio mercado y de sus proveedores.",
      "No recomiende equipos, prestamistas ni proveedores concretos; pida a los participantes que comparen ofertas y hablen con un asesor de confianza.",
      "Pida a los participantes que empiecen el registro de gastos después de la Lección 3 para tener un mes completo para la tarea final; califique la hoja con la rúbrica y dé comentarios sobre una fila Todavía no a la vez."
    ]
  }
};
