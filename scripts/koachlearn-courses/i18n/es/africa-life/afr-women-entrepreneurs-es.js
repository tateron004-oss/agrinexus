"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-women-entrepreneurs.js). See scripts/koachlearn-courses/README.md, "Translations".
// No financial advice and no figures beyond the English: all money figures are examples, exactly as in the English.

const UNWOMEN = { name: "ONU Mujeres: empoderamiento económico (trabajo de cuidados no remunerado, acceso a bienes y a financiamiento)", url: "https://www.unwomen.org/en/what-we-do/economic-empowerment" };
const WEF = { name: "Women Enterprise Fund, Kenia (fondo del gobierno para empresas de mujeres)", url: "https://wef.co.ke/" };
const SMEDAN = { name: "SMEDAN, Nigeria: registro gratuito, SME Digital Academy y programas como el Women In Self-employment Programme", url: "https://smedan.gov.ng/" };
const DERFJ = { name: "DER/FJ, Senegal: Délégation générale à l'Entreprenariat Rapide des Femmes et des Jeunes (formalización, capacitación, financiamiento)", url: "https://der.sn/" };
const GEA = { name: "Ghana Enterprises Agency: apoyo a micro y pequeñas empresas", url: "https://gea.gov.gh/" };
const AFAWA = { name: "Banco Africano de Desarrollo: AFAWA, Affirmative Finance Action for Women in Africa", url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/affirmative-finance-action-for-women-in-africa" };

module.exports = {
  id: "afr-women-entrepreneurs-es",
  lang: "es",
  translationOf: "afr-women-entrepreneurs",
  category: "Africa: Life and Work",
  name: "Mujeres emprendedoras: iniciar y hacer crecer un negocio",
  skills: "Elegir una idea de negocio que se adapte a tu vida, Probar una idea con clientes reales, Fijar precios con ganancia y pagarte a ti misma, Planificar el tiempo y el apoyo de la familia, Encontrar financiamiento y apoyo de forma segura, Crear una red de contactos y un plan de crecimiento",
  outcome: "iniciar o hacer crecer un pequeño negocio que se adapte a tu vida: elegir una idea, probarla con clientes reales, fijar precios que dejen ganancia y te paguen a ti, planificar tu semana con el apoyo que necesitas, encontrar financiamiento y apoyo seguros, y escribir un plan de crecimiento a seis meses.",
  about: [
    "Las mujeres dirigen una gran parte de los pequeños negocios en África: en mercados, salones de belleza, cocinas, fincas, tiendas y en línea. Muchas lo hacen mientras cuidan a sus hijos y a su familia, a menudo con menos acceso a préstamos, tierra y tiempo. Este curso es para mujeres de Kenia, Nigeria, Ghana, Senegal, Camerún, Egipto y de toda África que quieren iniciar un negocio o hacer que el que ya tienen gane más.",
    "Vas a elegir una idea que se adapte a tus habilidades, a tu tiempo y a la demanda local, probarla con poco dinero antes de gastar mucho, fijar el precio de tu producto para que deje ganancia y te pague a ti, planificar tu semana y la ayuda que necesitas en casa, encontrar programas de financiamiento y apoyo y comprobar que son reales, y crear una red de contactos y un plan a seis meses.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\" para tu propio negocio. Las cifras de dinero son solo ejemplos. El curso explica opciones; no es asesoría financiera. Para más detalles, mira los cursos sobre grupos de ahorro, ventas en línea y registro de un negocio en esta misma categoría."
  ],
  finalTask: "Escribe un plan de negocio de una página para ti: la idea que elegiste con sus puntajes, lo que aprendiste al probarla con clientes reales, el costo, el precio y la ganancia de un producto y lo que te vas a pagar, un plan semanal de tiempo con quién te ayuda, una opción de financiamiento o apoyo que comprobaste en su sitio oficial, y tres metas para los próximos seis meses con una mentora o un grupo al que vas a contactar.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Mujeres de toda África, en ciudades y pueblos, que tienen o quieren iniciar un pequeño negocio: comerciantes, cocineras, costureras, peluqueras, agricultoras que procesan y venden, dueñas de tiendas y vendedoras en línea. Las edades y la escolaridad varían mucho; muchas son madres y cuidadoras.",
    startingPoint: "Muchas ya ganan algo de dinero vendiendo o con un oficio, y muchas son parte de un grupo de ahorro. Pocas prueban sus ideas antes de gastar, calculan todos los costos de sus productos, se pagan una cantidad fija o escriben metas. Algunas no controlan el dinero que ganan o no mantienen en secreto el PIN de su dinero móvil.",
    gap: "Las mujeres emprendedoras suelen tener menos tiempo, menos acceso a financiamiento y menos contactos de negocios, y muchos negocios se quedan pequeños o cierran porque los precios no cubren los costos o la dueña está sobrecargada. Las participantes necesitan elegir y probar ideas con cuidado, fijar precios con ganancia, planificar su tiempo y su apoyo, llegar a financiamiento y programas reales de forma segura, y crecer gracias a redes de contactos.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; muchas participantes hablan inglés como segunda lengua (el curso también se ofrece en francés y árabe)",
      "Tiempo: mucho trabajo de cuidados y de la casa; lecciones de 4 a 6 minutos que encajen en el día",
      "Dispositivos: un teléfono básico, a veces compartido con la familia; datos móviles caros",
      "Dinero: presupuestos pequeños; sin asesoría financiera; los nombres y las condiciones de los programas cambian, así que las participantes revisan los sitios oficiales",
      "Seguridad: estafas que piden a las mujeres un pago para recibir una subvención o un préstamo; algunas mujeres sufren presión o control sobre su dinero"
    ],
    prerequisites: "Ninguno. Ayuda haber hecho \"Grupos de ahorro y microfinanzas\" en esta categoría."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Con dos o tres ideas de negocio", action: "calificar cada idea según tus habilidades, tu tiempo, el costo inicial y la demanda local, y elegir una", standard: "usando los mismos puntajes para todas las ideas y escribiendo por qué la ganadora te conviene" },
    { id: "O2", condition: "Antes de gastar la mayor parte de tu dinero en una idea nueva", action: "probar la idea con un lote pequeño y al menos diez clientes reales", standard: "anotando cuántas personas compraron, el precio que pagaron y un cambio que vas a hacer" },
    { id: "O3", condition: "Con los costos de un producto o servicio", action: "calcular el costo por unidad, fijar un precio con ganancia y fijar una cantidad para pagarte a ti misma", standard: "incluyendo todos los costos y con las cuentas correctas" },
    { id: "O4", condition: "Con tus tareas de trabajo y de la casa durante una semana", action: "hacer un plan semanal de tiempo que muestre las horas del negocio, las tareas de cuidado y quién te ayudará", standard: "acordado con al menos un familiar o una persona que te ayude" },
    { id: "O5", condition: "Cuando busques un préstamo, una subvención o un programa de apoyo", action: "comprobar en el sitio oficial que la oferta es real y mantener el control de tu dinero y de tu PIN", standard: "sin pagar ninguna \"tarifa de trámite\" a desconocidos y sin compartir tu PIN con nadie" },
    { id: "O6", condition: "Para los próximos seis meses", action: "escribir tres metas de negocio medibles y nombrar a una mentora, un grupo o una asociación a quien contactar", standard: "cada meta con un número y una fecha" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Empezar bien",
      lessons: [
        {
          title: "Elegir un negocio que se adapte a tu vida",
          objectives: ["O1"],
          minutes: 5,
          goal: "Calificar dos o tres ideas de negocio y elegir la que mejor se adapte a ti.",
          text: [
            "El mejor negocio para ti es uno que la gente de tu zona quiere, que usa habilidades que ya tienes y que se adapta al tiempo y al dinero que realmente tienes. Un negocio que te exige estar en el mercado desde las 5 de la mañana quizá no te convenga si llevas a los niños a la escuela.",
            "Escribe dos o tres ideas. Califica cada una del 1 (malo) al 3 (bueno) en cuatro cosas: tus habilidades, el tiempo que necesita comparado con el tiempo que tienes, el costo inicial comparado con el dinero que tienes, y la demanda local (¿la gente de tu zona compra esto, y hay lugar para una vendedora más?). Suma los puntajes.",
            "Ejemplo: Halima, en Kaduna, califica tres ideas. Vender bebidas de kunu cerca de una escuela: habilidades 3, tiempo 2, costo 3, demanda 3 = 11. Costura: habilidades 2, tiempo 2, costo 1, demanda 2 = 7. Vender saldo para teléfono: habilidades 2, tiempo 3, costo 2, demanda 1 = 8 (ya hay muchos vendedores). Elige las bebidas. Aïcha, en Dakar, podría calificar de la misma forma un puesto de thiakry (un postre local), el trenzado de cabello y una pequeña tienda.",
            "Los puntajes te ayudan a pensar; no deciden por ti. Pregúntate también: ¿me gustaría hacer esto, y podré hacerlo crecer más adelante?"
          ],
          steps: ["Escribe dos o tres ideas.", "Califica cada una del 1 al 3 en habilidades, tiempo, costo inicial y demanda local.", "Suma los puntajes.", "Elige una y escribe por qué se adapta a tu vida."],
          words: [["Costo inicial", "el dinero que necesitas para empezar: herramientas, la primera mercancía, un puesto o una licencia."], ["Demanda", "cuántas personas quieren comprar algo, y cuánto."]],
          slides: [
            { title: "Un negocio que se adapte a ti", bullets: ["La gente de tu zona lo quiere", "Usa habilidades que ya tienes", "Se adapta a tu tiempo y dinero reales"] },
            { title: "Califica cada idea del 1 al 3", bullets: ["Tus habilidades", "Tiempo que necesita vs. tiempo que tienes", "Costo inicial vs. dinero que tienes", "Demanda local"] },
            { title: "Ejemplo: Halima en Kaduna", bullets: ["Bebidas de kunu cerca de una escuela: 11", "Costura: 7", "Saldo para teléfono: 8, demasiados vendedores"] },
            { title: "Luego pregúntate", bullets: ["¿Me gustaría hacer esto?", "¿Podré hacerlo crecer más adelante?"] }
          ],
          tryIt: "Escribe dos o tres ideas de negocio. Califica cada una del 1 al 3 en habilidades, tiempo, costo inicial y demanda local, suma los puntajes y escribe una frase sobre por qué tu mejor idea se adapta a tu vida.",
          youCanNow: "comparar ideas de negocio con puntajes sencillos y elegir una que se adapte a tu vida.",
          quickCheck: [
            { objective: "O1", q: "¿En qué cuatro cosas calificas cada idea?", options: ["Color, nombre, logotipo y tamaño de la tienda", "Habilidades, tiempo, costo inicial y demanda local", "Lo que les gusta a tus amigas, el clima, la música y la moda", "Solo cuánto dinero podría dejar"], answer: 1, why: "Las habilidades, el tiempo, el costo y la demanda muestran si una idea se adapta a ti y a tu mercado." },
            { objective: "O1", q: "Una idea tiene un puntaje alto en habilidades, pero ya hay diez vendedores en tu calle. ¿Qué puntaje es bajo?", options: ["Habilidades", "Tiempo", "Demanda local", "Costo inicial"], answer: 2, why: "Muchos vendedores cerca significa poco lugar para uno más, así que la demanda es baja." }
          ]
        },
        {
          title: "Probar tu idea con clientes reales",
          objectives: ["O2"],
          minutes: 5,
          goal: "Probar una idea con un lote pequeño y al menos diez clientes reales antes de gastar mucho.",
          text: [
            "Muchos negocios fracasan porque la dueña gasta todos sus ahorros antes de saber si la gente va a comprar. Primero prueba en pequeño: haz o compra un lote pequeño, ofrécelo a clientes reales y observa lo que pasa.",
            "Haz un lote pequeño, por ejemplo 20 vasos de zobo (una bebida de flor de jamaica), 5 vestidos o 10 citas de peluquería. Ofrécelo a al menos diez personas que no sean familia cercana. Anota cuántas compraron, el precio que pagaron, qué les gustó y qué pidieron. Lo que la gente hace importa más que las palabras amables: \"Compro la próxima semana\" no es una venta.",
            "Ejemplo: Esther, en Kisumu, prueba jabón líquido. Hace 15 botellas, vende 12 a KES 150 (un precio de ejemplo) y tres clientas piden una botella más grande. Su cambio: agregar un tamaño más grande. Una mujer en Alejandría que prueba encurtidos caseros podría hacer lo mismo con sus vecinas y una tiendita.",
            "Después de la prueba, decide: seguir adelante, cambiar algo o probar tu siguiente idea. Una prueba que falla cuesta poco y te ahorra mucho."
          ],
          steps: ["Haz o compra un lote pequeño.", "Ofrécelo a al menos diez personas que no sean familia cercana.", "Anota cuántas compraron, el precio, qué les gustó y qué pidieron.", "Decide: seguir adelante, cambiar una cosa o probar la siguiente idea."],
          words: [["Lote pequeño", "una cantidad pequeña que haces o compras para probar antes de hacer más."], ["Prueba", "intentar una idea en pequeño para aprender antes de gastar mucho."]],
          slides: [
            { title: "Prueba antes de gastar mucho", bullets: ["No gastes primero todos tus ahorros", "Haz un lote pequeño", "Ofrécelo a clientes reales"] },
            { title: "Anota", bullets: ["Cuántas personas compraron", "El precio que pagaron", "Qué les gustó y qué pidieron"] },
            { title: "Los hechos valen más que las palabras amables", bullets: ["\"Compro la próxima semana\" no es una venta", "Cuenta las ventas reales", "Pregunta a personas que no sean familia cercana"] },
            { title: "Después de la prueba", bullets: ["Sigue adelante", "Cambia una cosa", "O prueba la siguiente idea"] }
          ],
          tryIt: "Planea una prueba para la idea que elegiste: qué lote pequeño vas a hacer, el precio que vas a probar y diez personas a las que se lo vas a ofrecer esta semana. Después de la prueba, anota cuántas compraron y un cambio que vas a hacer.",
          youCanNow: "probar una idea de negocio con poco dinero y con clientes reales, y decidir qué hacer después.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es la mejor prueba de que los clientes quieren tu producto?", options: ["Tu mamá dice que está bonito", "Tus amigas dicen que lo comprarán el mes que viene", "A ti te gusta mucho", "Personas que no son de tu familia pagan por él"], answer: 3, why: "Las ventas reales a clientes reales muestran la verdadera demanda." },
            { objective: "O2", q: "En tu prueba vendes 3 de 20 artículos. ¿Cuál es un buen siguiente paso?", options: ["Preguntar a quienes compraron qué cambiar, cambiar una cosa y volver a probar", "Gastar todos tus ahorros en más mercancía", "Dejar los negocios para siempre", "Duplicar el precio"], answer: 0, why: "Una prueba floja es una lección barata: aprende, cambia una cosa y vuelve a intentarlo." }
          ]
        },
        {
          title: "Fijar precios con ganancia y pagarte a ti misma",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular el costo por unidad, fijar un precio con ganancia y fijar una cantidad para pagarte a ti misma.",
          text: [
            "Muchas mujeres cobran demasiado poco, sobre todo cuando venden a sus vecinos, y trabajan mucho sin una ganancia real. Cuenta todos los costos: ingredientes o materiales, empaque, transporte, carbón o gas, datos del teléfono, el pago del puesto y tu propio tiempo.",
            "Costo por unidad = costo total de un lote dividido entre el número de unidades. Luego agrega una ganancia. Ejemplo de Kumasi: Abena hace 40 empanadas de carne. La harina, la carne, el aceite y el gas cuestan GHS 160, las bolsas GHS 10 y el transporte GHS 10: GHS 180 en total, es decir, GHS 4.50 por empanada. Las vende a GHS 7 (cifras de ejemplo), así que cada empanada deja GHS 2.50 de ganancia. Comprueba que los clientes pagarán tu precio mirando a vendedores parecidos.",
            "Págate a ti misma. Decide una cantidad fija que sacas del negocio cada semana y deja el resto en el negocio para mercancía y crecimiento. Si sacas todo, el negocio no puede crecer; si no sacas nada, trabajas gratis. Anota lo que sacas en tus registros.",
            "Si tu precio no cubre tus costos, cambia algo: un tamaño más pequeño, un proveedor mejor, comprar al por mayor con otras personas o un precio más alto por mejor calidad."
          ],
          steps: ["Haz la lista de todos los costos de un lote, incluidos transporte, combustible, datos y pagos.", "Divide el total entre el número de unidades para obtener el costo por unidad.", "Agrega una ganancia para fijar el precio; compáralo con vendedores parecidos.", "Decide una cantidad fija semanal para pagarte; deja el resto en el negocio."],
          words: [["Costo por unidad", "el costo total de un lote dividido entre el número de unidades hechas."], ["Ganancia", "el dinero que queda después de pagar todos los costos."], ["Pagarte a ti misma", "una cantidad fija que la dueña saca del negocio, para que el resto quede para mercancía y crecimiento."]],
          slides: [
            { title: "Cuenta todos los costos", bullets: ["Materiales y empaque", "Transporte, combustible, datos, pago del puesto", "Tu propio tiempo"] },
            { title: "Costo por unidad", bullets: ["Costo total del lote / número de unidades", "Abena: GHS 180 / 40 empanadas = GHS 4.50", "Vende a GHS 7 = GHS 2.50 de ganancia (ejemplo)"] },
            { title: "Págate una cantidad fija", bullets: ["Saca una cantidad fija cada semana", "Deja el resto para mercancía y crecimiento", "Anótalo en tus registros"] },
            { title: "¿Precio muy bajo?", bullets: ["Tamaño más pequeño o proveedor mejor", "Compra al por mayor con otras personas", "Precio más alto por mejor calidad"] }
          ],
          tryIt: "Elige un producto. Haz la lista de todos los costos de un lote, calcula el costo por unidad, fija un precio con ganancia y decide cuánto te vas a pagar cada semana.",
          youCanNow: "fijar el precio de un producto para que deje ganancia y pagarte una cantidad fija.",
          quickCheck: [
            { objective: "O3", q: "Un lote de 20 bolsos cuesta 10,000 NGN en total. ¿Cuál es el costo por bolso?", options: ["200 NGN", "20 NGN", "500 NGN", "10,000 NGN"], answer: 2, why: "10,000 dividido entre 20 es 500 NGN por bolso." },
            { objective: "O3", q: "¿Por qué pagarte una cantidad fija en vez de sacar todo el dinero?", options: ["Para no ganar nunca nada", "Para que quede dinero en el negocio para mercancía y crecimiento", "Para que los clientes paguen más", "Porque todos los bancos lo exigen"], answer: 1, why: "Una cantidad fija te paga a ti y deja dinero para que el negocio siga y crezca." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Empezar bien",
        questions: [
          { objective: "O1", q: "La idea A tiene 11 puntos y la idea B tiene 7, pero la idea A no te gusta nada. ¿Qué haces?", options: ["Siempre eliges el puntaje más alto", "No eliges ninguna y te detienes", "Vuelves a calificar hasta que gane la B", "Usas los puntajes para pensar y también te preguntas si te gustaría hacerlo"], answer: 3, why: "Los puntajes te ayudan a pensar; que te guste el trabajo también importa." },
          { objective: "O2", q: "¿A quién debes ofrecer tu lote de prueba?", options: ["A al menos diez personas que no sean familia cercana", "Solo a tu esposo", "Solo a tu mejor amiga", "A nadie; solo adivina"], answer: 0, why: "Los clientes reales dan respuestas honestas con lo que compran." },
          { objective: "O2", q: "¿Por qué probar con un lote pequeño?", options: ["Para gastar más dinero", "Para aprender antes de gastar mucho", "Porque los lotes grandes son ilegales", "Para evitar a los clientes"], answer: 1, why: "Una prueba pequeña cuesta poco y muestra si la gente va a comprar." },
          { objective: "O3", q: "¿Qué costo olvidan muchas vendedoras?", options: ["Los ingredientes principales", "El producto en sí", "El transporte, el combustible, los datos y su propio tiempo", "El precio de venta"], answer: 2, why: "Los costos pequeños, como el transporte y el combustible, se suman y se comen la ganancia." },
          { objective: "O3", q: "El costo por unidad es GHS 4.50 y el precio es GHS 7. ¿Cuál es la ganancia por unidad?", options: ["GHS 11.50", "GHS 7", "GHS 4.50", "GHS 2.50"], answer: 3, why: "7 menos 4.50 es 2.50." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crecer con fuerza",
      lessons: [
        {
          title: "Hacer tiempo: familia, cuidados y apoyo",
          objectives: ["O4"],
          minutes: 5,
          goal: "Hacer un plan semanal de tiempo con las horas del negocio, las tareas de cuidado y quién ayuda.",
          text: [
            "En muchos lugares, las mujeres hacen la mayor parte del trabajo de cuidados no remunerado en casa: cocinar, limpiar, acarrear agua y cuidar a los niños, a los enfermos y a los mayores. ONU Mujeres (la agencia de las Naciones Unidas para las mujeres) señala que esto les deja menos tiempo para el trabajo pagado. Un negocio también necesita tiempo, así que planifícalo.",
            "Dibuja una semana: siete días con mañana, tarde y noche. Marca las tareas de cuidado y luego las horas de tu negocio: comprar mercancía, producir, vender, responder mensajes y llevar registros. Busca choques y huecos.",
            "Luego pide ayuda. Habla con tu esposo o pareja, con tus hijos mayores, con una hermana o una vecina para repartir tareas como acarrear agua, llevar a los niños a la escuela o cocinar los días de mercado con mucho trabajo. Algunas mujeres se turnan el cuidado de los niños con otras madres, o trabajan cerca de casa algunos días. Ejemplo: Mariam, en Yaundé, vende en el mercado los martes, viernes y sábados; su hermana cuida a los niños esas mañanas y Mariam le peina el cabello a cambio.",
            "Muestra el plan a tu familia y pónganse de acuerdo. Cuídate también: el descanso y la salud mantienen el negocio en marcha."
          ],
          steps: ["Dibuja siete días con mañana, tarde y noche.", "Marca las tareas de cuidado y de la casa.", "Marca las horas del negocio: comprar, producir, vender, mensajes, registros.", "Busca los choques y pide a un familiar o a alguien que te ayude que comparta tareas.", "Acuerden el plan juntos e incluye descanso."],
          words: [["Trabajo de cuidados no remunerado", "trabajo en casa que no se paga, como cocinar, limpiar y cuidar a los niños, a los enfermos y a los mayores."], ["Turnos de cuidado infantil", "madres que se turnan para cuidar a los hijos de las otras."]],
          slides: [
            { title: "Tu tiempo es parte del negocio", bullets: ["Las mujeres hacen la mayor parte del trabajo de cuidados", "Un negocio también necesita tiempo", "Así que planifícalo"] },
            { title: "Dibuja tu semana", bullets: ["Siete días: mañana, tarde, noche", "Marca las tareas de cuidado", "Marca las horas del negocio", "Busca los choques"] },
            { title: "Pide ayuda", bullets: ["Pareja, hijos mayores, hermana, vecina", "Repartan el agua, la escuela, la cocina", "Túrnate el cuidado de los niños con otras madres"] },
            { title: "Acuérdenlo juntos", bullets: ["Muestra el plan a tu familia", "Incluye descanso y salud"] }
          ],
          tryIt: "Dibuja tu plan semanal de tiempo con las tareas de cuidado y las horas del negocio. Marca un choque, escribe quién podría ayudarte con él y habla con esa persona esta semana.",
          youCanNow: "planificar tu semana para que tu negocio y tus tareas de cuidado encajen, con el apoyo que necesitas.",
          quickCheck: [
            { objective: "O4", q: "Tu día de mercado choca con llevar a los niños a la escuela. ¿Cuál es un buen paso?", options: ["Pedir a un familiar o a otra madre que comparta llevar a los niños", "Cerrar el negocio", "No ir nunca más al mercado", "Dejar solos a los niños"], answer: 0, why: "Repartir tareas libera tiempo para el negocio sin perjudicar a la familia." },
            { objective: "O4", q: "¿Por qué mostrar tu plan de tiempo a tu familia?", options: ["Para pedir permiso para existir", "Para que estén de acuerdo y ayuden", "Para que se queden con tu dinero", "No importa"], answer: 1, why: "Cuando la familia está de acuerdo con el plan, es más probable que ayude." }
          ],
          sources: [UNWOMEN]
        },
        {
          title: "Encontrar dinero y apoyo de forma segura",
          objectives: ["O5"],
          minutes: 6,
          goal: "Comprobar que un préstamo, una subvención o un programa es real y mantener el control de tu dinero.",
          text: [
            "Hay programas para mujeres y pequeños negocios. Ejemplos: el Women Enterprise Fund de Kenia, un fondo del gobierno para empresas de mujeres; SMEDAN de Nigeria (la agencia nacional de pequeñas y medianas empresas), cuyo registro gratuito da acceso a programas como el Women In Self-employment Programme; DER/FJ de Senegal, que ofrece capacitación, formalización y financiamiento para mujeres y jóvenes; la Ghana Enterprises Agency (agencia de empresas de Ghana); y la iniciativa AFAWA del Banco Africano de Desarrollo, que trabaja con bancos y prestamistas para ayudarles a prestar a mujeres. Los grupos de ahorro y las microfinanzas tienen su propio curso.",
            "Los nombres, las reglas y las fechas de convocatoria cambian, así que comprueba siempre en el sitio web oficial o en la oficina del programa. Hay estafadores que fingen ofrecer subvenciones y préstamos para mujeres y piden primero una \"tarifa de trámite\" o de \"inscripción\". Un programa real publica sus tarifas en su sitio oficial; nunca le pagues a un desconocido para recibir una subvención.",
            "Mantén el control de tu dinero. Ten tu propia línea de dinero móvil o tu propia cuenta a tu nombre, y guarda tu PIN en secreto ante todos, incluida tu familia. Un proveedor real nunca te pide tu PIN. Si alguien te quita tus ganancias por la fuerza o con amenazas, eso es abuso; habla con una persona de confianza, con un grupo de mujeres o con un servicio de apoyo local.",
            "Antes de pedir prestado, debes saber el total que tendrás que devolver, cuándo, y qué pasa si te atrasas. Pide prestado para algo que genere dinero, no para cubrir los gastos diarios de la casa."
          ],
          steps: ["Busca el sitio web oficial o la oficina del programa.", "Comprueba qué ofrece, quién puede solicitarlo, sus fechas de convocatoria y sus tarifas.", "Rechaza a cualquiera que te pida un pago a cuentas de desconocidos.", "Ten una línea de dinero móvil o una cuenta a tu nombre y un PIN secreto.", "Antes de pedir prestado, escribe el total a devolver, cuándo, y las reglas por atraso."],
          words: [["Subvención", "dinero que se da para un fin y que no hay que devolver."], ["Préstamo", "dinero prestado que hay que devolver, normalmente con un costo extra (intereses)."], ["Estafa de pago por adelantado", "un engaño en el que alguien promete dinero pero te pide pagar primero una tarifa."]],
          slides: [
            { title: "Apoyo para negocios de mujeres", bullets: ["Kenia: Women Enterprise Fund", "Nigeria: programas de SMEDAN", "Senegal: DER/FJ; Ghana: Ghana Enterprises Agency", "AFAWA del Banco Africano de Desarrollo: trabaja con bancos y prestamistas"] },
            { title: "Comprueba que es real", bullets: ["Solo el sitio web o la oficina oficial", "Quién puede solicitarlo, fechas y tarifas", "Nunca le pagues a un desconocido por una subvención"] },
            { title: "Mantén el control de tu dinero", bullets: ["Una cuenta o línea de dinero móvil a tu nombre", "PIN secreto ante todos, incluso la familia", "Un proveedor real nunca te pide tu PIN"] },
            { title: "Antes de pedir prestado", bullets: ["Total a devolver y cuándo", "Qué pasa si te atrasas", "Pide prestado para ganar, no para gastos diarios"] }
          ],
          tryIt: "Elige un programa de esta lección u otro que conozcas. Busca su sitio web oficial o su oficina, y escribe qué ofrece, quién puede solicitarlo, si está abierto ahora y la fecha en que lo comprobaste.",
          youCanNow: "encontrar apoyo para tu negocio, comprobar que es real y mantener el control de tu propio dinero.",
          quickCheck: [
            { objective: "O5", q: "Un mensaje dice que ganaste una subvención para negocios de mujeres; primero debes pagar 5,000 KES de \"tarifa de trámite\". ¿Qué es esto?", options: ["Un paso normal de un programa", "Una estafa; comprueba el sitio oficial y no le pagues a ningún desconocido", "Un préstamo que debes aceptar", "Un impuesto"], answer: 1, why: "Pedir un pago antes de dar una subvención es una estafa clásica de pago por adelantado." },
            { objective: "O5", q: "¿Quién debe conocer el PIN de tu dinero móvil?", options: ["Tu esposo", "Tu mejor clienta", "El agente que te llama", "Solo tú"], answer: 3, why: "Tu PIN protege tu dinero; un proveedor real nunca te lo pide." }
          ],
          sources: [WEF, SMEDAN, DERFJ, GEA, AFAWA]
        },
        {
          title: "Redes, mentoras y un plan de crecimiento a seis meses",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escribir tres metas medibles para seis meses y nombrar a una mentora o un grupo a quien contactar.",
          text: [
            "Muchas mujeres crecen más rápido junto con otras personas: una mentora que ya lo ha logrado, una asociación de mujeres empresarias, una asociación de mercado o de comerciantes, una cooperativa, una cámara de comercio o un centro de apoyo a empresas. Comparten compradores, proveedores, consejos y ánimo.",
            "Una mentora es una persona con más experiencia que te da consejos. Pide a una mujer que admiras 20 minutos de consejos, con dos preguntas claras. Únete a un grupo donde se reúnan tus clientes o tus proveedores. Ve a una feria comercial o a un día de mercado en una ciudad más grande cuando puedas.",
            "Luego escribe tres metas para los próximos seis meses. Haz que cada una sea medible, con un número y una fecha: \"Vender 60 botellas de jabón por semana para fines de marzo\", \"Ahorrar GHS 500 para una segunda máquina de coser para junio\" (una cifra de ejemplo), \"Conseguir cinco tiendas nuevas como clientas para mayo\". Revisa tus metas una vez al mes y anota lo que hiciste.",
            "Ejemplo: Ngozi, en Enugu, que vende bolsos de tela Ankara, se une a una asociación de comerciantes mujeres, encuentra una mentora que exporta bolsos y se pone metas de ventas, de ahorro y de tener su primer puesto en una feria comercial."
          ],
          steps: ["Haz la lista de personas y grupos que podrían ayudarte: mentoras, asociaciones, cooperativas, centros de apoyo.", "Elige uno para contactar este mes, con dos preguntas claras.", "Escribe tres metas, cada una con un número y una fecha.", "Revisa tus metas una vez al mes y anota lo que hiciste."],
          words: [["Mentora", "una persona con experiencia que te da consejos y apoyo."], ["Meta medible", "una meta con un número y una fecha, para que puedas ver si la alcanzaste."], ["Asociación", "un grupo de personas del mismo oficio o en la misma situación que se apoyan entre sí."]],
          slides: [
            { title: "Crece junto con otras", bullets: ["Mentoras y asociaciones de mujeres", "Grupos de comerciantes, cooperativas, cámaras", "Centros de apoyo a empresas"] },
            { title: "Encuentra una mentora", bullets: ["Una mujer que admiras", "Pídele 20 minutos", "Lleva dos preguntas claras"] },
            { title: "Tres metas medibles", bullets: ["Cada una con un número y una fecha", "Ventas, ahorro, clientes nuevos", "Revísalas una vez al mes"] }
          ],
          tryIt: "Tarea final: escribe tu plan de negocio de una página con tu idea calificada, los resultados de la prueba, el precio y la ganancia, lo que te pagas, tu plan semanal de tiempo, una opción de apoyo comprobada, tres metas a seis meses y una mentora o un grupo a quien contactar.",
          youCanNow: "crear una red de contactos y escribir un plan de crecimiento a seis meses con metas medibles.",
          quickCheck: [
            { objective: "O6", q: "¿Qué meta es medible?", options: ["\"Hacerlo mejor\"", "\"Ser famosa\"", "\"Vender 40 vestidos al mes para fines de junio\"", "\"Trabajar duro\""], answer: 2, why: "Tiene un número y una fecha, así que puedes comprobar si la alcanzaste." },
            { objective: "O6", q: "¿Cómo le pides ayuda a una posible mentora?", options: ["Le pides 20 minutos con dos preguntas claras", "Le pides que te dé dinero", "Le pides que maneje tu negocio", "Nunca le pides nada; esperas a que ella venga"], answer: 0, why: "Un pedido corto y claro respeta su tiempo y te da consejos útiles." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crecer con fuerza",
        questions: [
          { objective: "O4", q: "¿Qué es el trabajo de cuidados no remunerado?", options: ["Trabajar en un banco", "Trabajo en casa que no se paga, como cocinar y cuidar a los niños", "Vender en el mercado", "Un empleo del gobierno"], answer: 1, why: "El trabajo de cuidados no remunerado es el trabajo de la casa y de cuidado que toma tiempo pero no se paga." },
          { objective: "O4", q: "Un plan semanal de tiempo debe mostrar:", options: ["Solo las horas del negocio", "Solo el descanso", "Las horas del negocio, las tareas de cuidado y quién ayuda", "Solo los horarios escolares de tus hijos"], answer: 2, why: "Ver todo junto muestra los choques y dónde hace falta ayuda." },
          { objective: "O5", q: "¿Dónde compruebas si un programa de préstamos para mujeres es real?", options: ["En su sitio web o su oficina oficial", "En un mensaje reenviado", "Con un desconocido por teléfono", "En un comentario en redes sociales"], answer: 0, why: "Solo la fuente oficial muestra el programa real, sus fechas y sus tarifas." },
          { objective: "O5", q: "Antes de pedir prestado, ¿qué debes saber?", options: ["Solo el nombre del prestamista", "Solo qué tan rápido lo recibes", "Nada; solo firmas", "El total a devolver, cuándo, y qué pasa si te atrasas"], answer: 3, why: "Conocer el costo total y las reglas por atraso te protege de deudas que no puedes pagar." },
          { objective: "O6", q: "¿Cada cuánto debes revisar tus metas a seis meses?", options: ["Nunca", "Una vez al mes", "Solo al final de los seis meses", "Cada diez años"], answer: 1, why: "Revisarlas cada mes muestra el avance a tiempo, para que puedas corregir el rumbo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Mujeres emprendedoras: iniciar y hacer crecer un negocio",
    questions: [
      { objective: "O1", q: "Un buen negocio para ti es uno que:", options: ["Se adapta a tus habilidades, tu tiempo, tu dinero y la demanda local", "A tu vecina ya le va bien", "Necesita la mayor cantidad de dinero", "Es el más famoso"], answer: 0, why: "Un negocio que se adapta a ti y a tu mercado tiene más probabilidades de durar." },
      { objective: "O1", q: "Costo inicial significa:", options: ["Tu ganancia semanal", "El dinero que necesitas para empezar", "El precio que pagan los clientes", "Un préstamo que debes pedir"], answer: 1, why: "Es el dinero para herramientas, la primera mercancía, un puesto o una licencia." },
      { objective: "O1", q: "¿Por qué calificar cada idea en las mismas cuatro cosas?", options: ["Para que tome más tiempo", "Para que todas las ideas ganen", "Para poder comparar las ideas de forma justa", "Porque el banco lo pide"], answer: 2, why: "Los mismos puntajes para todas las ideas hacen que la comparación sea justa." },
      { objective: "O2", q: "Que una amiga diga \"Compro la próxima semana\" es:", options: ["Una venta", "Un contrato", "Un préstamo", "Todavía no es una venta; cuenta las compras reales"], answer: 3, why: "Solo las compras reales demuestran la demanda." },
      { objective: "O2", q: "Durante una prueba, anotas:", options: ["Cuántas personas compraron, el precio, y qué les gustó y qué pidieron", "Solo tus costos", "Nada", "Solo los nombres de tus amigas"], answer: 0, why: "Estas notas muestran la demanda y lo que hay que mejorar." },
      { objective: "O2", q: "Después de una prueba puedes:", options: ["Solo rendirte", "Seguir adelante, cambiar una cosa o probar la siguiente idea", "Solo gastar todos tus ahorros", "Solo duplicar el precio"], answer: 1, why: "Una prueba te ayuda a elegir bien tu siguiente paso." },
      { objective: "O3", q: "El costo por unidad es:", options: ["El precio que esperas cobrar", "El precio de tu vecina", "El costo total del lote dividido entre el número de unidades", "Tu ganancia"], answer: 2, why: "Al dividir el costo del lote entre las unidades obtienes el costo de cada una." },
      { objective: "O3", q: "Un lote cuesta 30,000 XAF y da 60 unidades. El costo por unidad es:", options: ["600 XAF", "60 XAF", "1,800 XAF", "500 XAF"], answer: 3, why: "30,000 dividido entre 60 es 500 XAF." },
      { objective: "O3", q: "Si tu precio no cubre tus costos, puedes:", options: ["Cambiar el tamaño o el proveedor, comprar al por mayor con otras personas o subir el precio por la calidad", "Seguir vendiendo con pérdida para siempre", "Dejar de anotar los costos", "Pedir prestado cada semana para cubrirlo"], answer: 0, why: "Cambiar los costos o el precio es la forma de volver a tener ganancia." },
      { objective: "O3", q: "Pagarte una cantidad fija cada semana significa:", options: ["Sacar todo el dinero", "No sacar nunca nada", "Sacar una cantidad fija y dejar el resto para el negocio", "Pagarles a tus clientes"], answer: 2, why: "Una cantidad fija te paga a ti y mantiene el negocio con fondos." },
      { objective: "O4", q: "ONU Mujeres señala que el trabajo de cuidados no remunerado:", options: ["Lo hacen todos por igual", "Deja a muchas mujeres menos tiempo para el trabajo pagado", "No existe", "Lo paga el gobierno"], answer: 1, why: "Las mujeres hacen la mayor parte del trabajo de cuidados no remunerado, lo que limita su tiempo para el negocio." },
      { objective: "O4", q: "Los turnos de cuidado infantil son:", options: ["Madres que se turnan para cuidar a los hijos de las otras", "Vender ropa de niños", "Una cuota escolar", "Una cuenta de banco"], answer: 0, why: "Turnarse libera tiempo para el trabajo de cada madre." },
      { objective: "O4", q: "Tu plan de tiempo también debe incluir:", options: ["Nada de descanso", "Solo trabajo", "Los planes de tus vecinos", "Descanso y salud"], answer: 3, why: "El descanso te mantiene en marcha a ti y a tu negocio." },
      { objective: "O5", q: "Una subvención es:", options: ["Un préstamo con intereses altos", "Dinero que se da para un fin y que no devuelves", "Una tarifa que pagas primero", "Un impuesto"], answer: 1, why: "Las subvenciones no se devuelven; los préstamos sí." },
      { objective: "O5", q: "Alguien te pide un pago antes de darte una subvención para mujeres. Lo más probable es que sea:", options: ["Un paso normal", "Una regla del banco", "Una estafa de pago por adelantado", "Un impuesto del gobierno"], answer: 2, why: "Los programas reales publican sus tarifas en su sitio oficial; los desconocidos que piden pagos son estafadores." },
      { objective: "O5", q: "¿Quién debe tener el PIN de tu dinero móvil?", options: ["Solo tú", "Tu pareja", "Quien llama diciendo que es del proveedor", "Tu hijo mayor"], answer: 0, why: "Tu PIN protege tu dinero; guárdalo en secreto ante todos." },
      { objective: "O5", q: "AFAWA, del Banco Africano de Desarrollo, principalmente:", options: ["Presta a cada mujer por WhatsApp", "Cobra a las mujeres una tarifa por teléfono", "Reemplaza a todos los grupos de ahorro", "Trabaja con bancos y prestamistas para que presten más a las mujeres"], answer: 3, why: "AFAWA trabaja a través de instituciones financieras para aumentar los préstamos a mujeres." },
      { objective: "O6", q: "Una mentora es:", options: ["Una clienta que te debe dinero", "Una persona con experiencia que da consejos", "Una funcionaria de impuestos", "Un préstamo"], answer: 1, why: "Una mentora comparte su experiencia para ayudarte a crecer." },
      { objective: "O6", q: "¿Qué meta tiene un número y una fecha?", options: ["\"Crecer más\"", "\"Ser la mejor\"", "\"Ahorrar NGN 50,000 para un congelador para julio\"", "\"Esforzarme más\""], answer: 2, why: "Un número y una fecha hacen que la meta sea medible." },
      { objective: "O6", q: "Unirte a una asociación de mujeres o de comerciantes te puede ayudar a:", options: ["Encontrar compradores, proveedores, consejos y apoyo", "Evitar a todos los clientes", "Dejar de llevar registros", "No necesitar nunca un plan"], answer: 0, why: "Los grupos comparten contactos, conocimientos y ánimo." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 7, 10, 14, 15, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Idea elegida", objective: "O1", notYet: "Una sola idea sin puntajes, o puntajes sin razones.", meets: "Dos o tres ideas calificadas en habilidades, tiempo, costo y demanda, con una razón de por qué la ganadora te conviene.", exceeds: "También anota cómo podría crecer la idea más adelante." },
      { name: "Idea probada", objective: "O2", notYet: "Sin prueba, o solo se preguntó a la familia.", meets: "Un lote pequeño ofrecido a al menos diez clientes reales, con las ventas, el precio y un cambio anotados.", exceeds: "Se hizo el cambio y se probó una segunda vez." },
      { name: "Precio, ganancia y pago", objective: "O3", notYet: "Faltan costos, las cuentas están mal o no hay una cantidad para pagarte.", meets: "Todos los costos en la lista, el costo por unidad correcto, un precio con ganancia y una cantidad fija semanal para pagarte.", exceeds: "Precio comparado con vendedores parecidos, con un plan por si suben los costos." },
      { name: "Plan de tiempo y apoyo", objective: "O4", notYet: "Sin plan de tiempo, o sin nombrar quién ayuda.", meets: "Un plan semanal con las horas del negocio, las tareas de cuidado y quién ayuda, acordado con al menos una persona.", exceeds: "Incluye descanso y una persona de respaldo para ayudar." },
      { name: "Financiamiento y apoyo comprobados de forma segura", objective: "O5", notYet: "Una opción sacada de un mensaje reenviado o de un desconocido, o un PIN compartido.", meets: "Una opción comprobada en su sitio oficial, con quién puede solicitarla y la fecha de la comprobación; el dinero se mantiene a tu nombre.", exceeds: "También escribe el total a devolver, cuándo y las reglas por atraso de cualquier préstamo." },
      { name: "Metas y red de contactos", objective: "O6", notYet: "Metas vagas, o sin nombrar a una mentora o un grupo.", meets: "Tres metas con números y fechas, y una mentora o un grupo a quien contactar.", exceeds: "Ya hizo el contacto y planeó la primera revisión mensual." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que inician o prueban un negocio, o agregan un producto, en 30 días (encuesta de seguimiento)",
      "Participantes que dicen pagarse una cantidad fija y llevar registros a los tres meses",
      "Participantes que alcanzan al menos una de sus metas a seis meses y no reportan pérdidas por estafas de subvenciones o préstamos"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, bolígrafo y una calculadora (la del teléfono sirve)",
      "Un teléfono para revisar los sitios web oficiales de los programas",
      "Materiales para un lote pequeño de prueba (a elección de cada participante)",
      "Unos 60 minutos en total, en sesiones cortas, más una o dos semanas para hacer la prueba"
    ],
    facilitatorNotes: [
      "Den el curso con un grupo de mujeres, un grupo de ahorro o una cooperativa; reúnanse en horarios que les sirvan a las madres y permitan bebés en la sala.",
      "Antes del curso, comprueben en los sitios oficiales qué programas para mujeres y pequeños negocios están abiertos en su país, y lleven las direcciones.",
      "Nunca pidan a las participantes que compartan un PIN, un saldo o datos de su cuenta. Practiquen cómo reconocer estafas de subvenciones y préstamos con mensajes inventados.",
      "Algunas participantes pueden sufrir presión o control sobre su dinero en casa; hablen del tema con cuidado, en privado, y conozcan los servicios locales de apoyo a mujeres a los que pueden derivarlas.",
      "Califiquen la tarea final con la rúbrica y den comentarios sobre una fila Todavía no a la vez."
    ]
  }
};
