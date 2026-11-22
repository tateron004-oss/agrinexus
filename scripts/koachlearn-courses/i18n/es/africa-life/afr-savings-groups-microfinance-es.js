"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-savings-groups-microfinance.js). See scripts/koachlearn-courses/README.md, "Translations".
// All money figures are examples, exactly as in the English; no investment or lending advice.

const VSLA = { name: "VSL Associates: el método VSLA (acciones, fondo de préstamos, fondo social, ciclo de un año, reparto)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenia: lista de SACCO autorizadas a recibir depósitos", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: normas para las instituciones de microfinanzas (systèmes financiers décentralisés) en los países del franco CFA de África Occidental (XOF)", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Banco Central de Nigeria: bancos de microfinanzas", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const BOG = { name: "Banco de Ghana: todas las instituciones autorizadas y cómo presentar quejas", url: "https://www.bog.gov.gh" };
const CBK_DCP = { name: "Banco Central de Kenia: supervisión bancaria, con los bancos de microfinanzas y prestamistas digitales autorizados", url: "https://www.centralbank.go.ke/bank-supervision/" };
const FCCPC = { name: "FCCPC, Nigeria: estado de registro de los prestamistas digitales (apps de préstamos aprobadas)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const SEC_NG = { name: "Nairametrics (14 de mayo de 2026): la SEC de Nigeria advierte contra esquemas Ponzi promovidos en WhatsApp, TikTok e Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-savings-groups-microfinance-es",
  lang: "es",
  translationOf: "afr-savings-groups-microfinance",
  category: "Africa: Life and Work",
  name: "Grupos de ahorro y microfinanzas (chamas, VSLA, tontinas, esusu)",
  skills: "Elegir entre un grupo rotativo y un grupo de ahorro y préstamo, Escribir un plan de ahorro mensual, Revisar las reglas de un grupo, Llevar los registros del grupo y cuidar el dinero, Comparar préstamos de microfinanzas y préstamos grupales, Detectar esquemas Ponzi y prestamistas falsos",
  outcome: "elegir un grupo de ahorro que se ajuste a tu meta, revisar sus reglas y registros, comparar un préstamo de microfinanzas o grupal por el total que pagarás, detectar un esquema Ponzi o un prestamista falso, y seguir un plan de ahorro mensual por escrito.",
  about: [
    "En toda África la gente ahorra en grupo: chamas y merry-go-rounds en Kenia, esusu y ajo en Nigeria, susu en Ghana, tontinas en Senegal, Costa de Marfil y Camerún (njangi en el Camerún de habla inglesa), gam'eya en Egipto y daret en Marruecos. Los grupos de ahorro, las SACCO (cooperativas de ahorro y crédito) y los bancos de microfinanzas ayudan a millones de personas a pagar la escuela, surtir una tienda o salir adelante en un mes difícil.",
    "Este curso es para comerciantes, madres y padres, artesanos, trabajadores y jóvenes que quieren ahorrar con regularidad o pedir prestado con cuidado. Aprenderás los dos tipos principales de grupos, cómo escribir un plan de ahorro, qué revisar en las reglas y los registros de un grupo, cómo comparar un préstamo por el total que pagarás y cómo detectar los esquemas que roban ahorros.",
    "Cada lección dura unos cinco minutos, con una tarea \"Pruébalo ahora\", una prueba corta, una comprobación de conocimientos después de cada capítulo y un examen final de 20 preguntas. Todas las cifras de dinero son ejemplos. Este curso explica cómo funcionan los productos y sus riesgos; no te dice dónde poner tu dinero."
  ],
  finalTask: "Escribe tu plan de ahorro mensual en una página: tu meta y la fecha en que la necesitas, el total, la cantidad que ahorrarás cada semana o cada mes, dónde la ahorrarás (grupo, SACCO, banco de microfinanzas o cuenta), y una hoja de revisión con tus respuestas sobre el grupo o la institución: sus reglas escritas, cómo se guardan el dinero y los registros, su licencia (si recibe depósitos o presta como negocio) y el costo total de cualquier préstamo.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes de toda África, en ciudades y pueblos: comerciantes, artesanos, madres y padres, trabajadores y jóvenes, muchos ya en una chama, un esusu, un susu o una tontina. Ejemplos de Kenia, Nigeria, Ghana, Senegal, Camerún, Costa de Marfil, Egipto y Marruecos.",
    startingPoint: "Muchos ya ahorran en un grupo informal o con una billetera móvil, pero sin una meta escrita. Algunos han entrado a un grupo sin leer sus reglas, han pedido prestado sin calcular el total que pagarían, o han perdido dinero en un grupo que se vino abajo o en un esquema de \"duplica tu dinero\".",
    gap: "Los participantes necesitan elegir el tipo de grupo adecuado para su meta, revisar las reglas y los registros antes de confiarle su dinero a un grupo, comparar préstamos por lo que realmente pagarán, y reconocer los esquemas Ponzi y los prestamistas sin licencia, para que sus ahorros crezcan en lugar de desaparecer.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; traducido al francés y al árabe",
      "Dispositivos: teléfono básico; muchos grupos se reúnen en persona y llevan registros en papel",
      "Tiempo: lecciones de 4 a 6 minutos que se ajustan al trabajo y a los días de reunión del grupo",
      "Las reglas y las licencias cambian según el país y con el tiempo: los participantes revisan las listas vigentes del regulador",
      "Dinero: solo ejemplos; ningún consejo de inversión; nunca compartas tu PIN ni tus contraseñas"
    ],
    prerequisites: "Ninguno. Ayuda saber sumar y multiplicar, con la calculadora del teléfono."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Dada una meta de ahorro y dos tipos de grupo", action: "explicar cómo funcionan un grupo rotativo y un grupo de ahorro y préstamo, y elegir el que se ajusta a la meta", standard: "dando una razón para la elección y un riesgo de cada uno" },
    { id: "O2", condition: "Dada una meta y tus propios ingresos", action: "escribir un plan de ahorro mensual con la meta, el total, la fecha, la cantidad por semana o por mes y dónde ahorrarás", standard: "con cuentas que llegan a la meta para la fecha" },
    { id: "O3", condition: "Dados el reglamento o las reglas de un grupo", action: "revisar las reglas clave: aportes, reuniones, préstamos, multas, salida, reparto y quién controla el dinero", standard: "encontrando al menos seis de las siete y nombrando las que falten" },
    { id: "O4", condition: "En una reunión del grupo", action: "anotar los aportes y préstamos en una libreta o un libro de registro y comprobar que el dinero y los registros coinciden", standard: "con cada cantidad leída en voz alta y aceptada frente a los miembros" },
    { id: "O5", condition: "Dada una oferta de préstamo de microfinanzas o grupal", action: "calcular el total que pagarás y comparar las fechas de pago con tus ingresos", standard: "antes de firmar, y diciendo qué significa para ti la responsabilidad solidaria" },
    { id: "O6", condition: "Dada una oferta para ahorrar, invertir o pedir prestado", action: "identificar las señales de un esquema Ponzi o de un prestamista falso y buscar al proveedor en la lista oficial del regulador", standard: "antes de pagar o compartir cualquier dato" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ahorrar en grupo",
      lessons: [
        {
          title: "Dos tipos de grupos de ahorro",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explicar cómo funcionan un grupo rotativo y un grupo de ahorro y préstamo, y elegir uno para tu meta.",
          text: [
            "Un grupo rotativo (merry-go-round, esusu, ajo, susu, tontina, njangi, gam'eya o daret) es sencillo. Cada miembro paga la misma cantidad cada semana o cada mes, y cada vez un miembro se lleva todo el fondo, por turnos, hasta que todos lo han recibido una vez. Ejemplo: 10 miembros pagan KES 1,000 al mes cada uno; cada mes un miembro recibe KES 10,000.",
            "Sirve para juntar una suma grande: la escuela, una máquina de coser, mercancía para una tienda. Sus riesgos: quienes reciben el fondo pronto pueden dejar de pagar, y nadie gana nada con el dinero. Los primeros reciben un adelanto sin intereses; los últimos en realidad le están prestando al grupo.",
            "Un grupo de ahorro y préstamo (una VSLA, una ASCA o muchas chamas, y en una versión más grande y formal, una SACCO) mantiene el dinero junto. Los miembros ahorran en cada reunión, los ahorros forman un fondo de préstamos, los miembros piden prestado y devuelven con un cargo por servicio que fija el grupo, y al final del ciclo, a menudo de un año, todo se reparte según lo que ahorró cada miembro. Sus riesgos: préstamos que no se devuelven y dinero robado o mal anotado.",
            "Elige según tu meta. Una suma grande pronto: puede servirte un grupo rotativo. Ahorro constante con la opción de pedir prestado: puede servirte un grupo de ahorro y préstamo. Mucha gente usa los dos."
          ],
          words: [["Grupo rotativo (ROSCA)", "los miembros pagan la misma cantidad y cada uno se lleva todo el fondo por turnos."], ["Grupo de ahorro y préstamo", "los miembros ahorran en un fondo común, se prestan entre ellos y reparten al final de un ciclo (VSLA, ASCA, SACCO)."], ["Reparto", "el día en que el grupo entrega todos los ahorros y ganancias a los miembros según lo que ahorró cada uno."]],
          slides: [
            { title: "Grupo rotativo", bullets: ["Todos pagan lo mismo; uno se lleva el fondo por turnos", "Esusu, ajo, susu, tontina, njangi, gam'eya, daret", "Sirve para una suma grande; riesgo: los primeros dejan de pagar"] },
            { title: "Grupo de ahorro y préstamo", bullets: ["Los ahorros forman un fondo de préstamos", "Los miembros piden prestado y devuelven con un cargo", "Reparto según lo ahorrado; riesgo: préstamos sin pagar"] },
            { title: "Elige según tu meta", bullets: ["Suma grande pronto: puede servir un grupo rotativo", "Ahorro constante y préstamos: VSLA o SACCO", "Mucha gente usa los dos"] }
          ],
          sources: [VSLA],
          tryIt: "Piensa en un grupo en el que estás o que conoces. ¿Es rotativo o de ahorro y préstamo? Escribe algo para lo que sirve y un riesgo.",
          youCanNow: "explicar los dos tipos de grupos de ahorro y elegir el que se ajusta a tu meta.",
          quickCheck: [
            { objective: "O1", q: "Doce miembros pagan GHS 200 al mes cada uno y cada mes un miembro se lleva todo el fondo. ¿Qué tipo de grupo es?", options: ["Un grupo de ahorro y préstamo", "Un banco de microfinanzas", "Un grupo rotativo", "Un esquema Ponzi"], answer: 2, why: "Todos pagan lo mismo y se llevan el fondo por turnos: es un grupo rotativo (susu)." },
            { objective: "O1", q: "En una VSLA, ¿cómo se reparte el dinero al final del ciclo?", options: ["Según lo que ahorró cada miembro", "En partes iguales, sin importar lo ahorrado", "Todo para el presidente", "Para quien pidió más prestado"], answer: 0, why: "Quien ahorró más recibe una parte mayor del fondo y de sus ganancias." }
          ]
        },
        {
          title: "Tu meta y tu plan de ahorro mensual",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escribir un plan de ahorro que llegue a una meta para una fecha.",
          text: [
            "Ahorrar funciona mejor con una meta clara: para qué es, cuánto cuesta y cuándo lo necesitas. \"La escuela, NGN 120,000 para enero\" es una meta. \"Ahorrar más\" no lo es.",
            "Divide el total entre el número de semanas o meses que tienes. Ejemplo: NGN 120,000 en 8 meses son NGN 15,000 al mes. Si es demasiado, cambia la fecha, la meta o tus gastos. Mira tus ingresos en los meses buenos y en los malos; un comerciante puede ahorrar más en la temporada alta.",
            "Decide dónde estará el dinero: un grupo de ahorro, una SACCO, un banco de microfinanzas, un banco o una cuenta de ahorro en el teléfono. Guarda una pequeña cantidad para emergencias que puedas sacar rápido, separada del dinero de la meta.",
            "Págate primero: ahorra el día en que entra el dinero, antes de cualquier otro gasto. Ejemplo: Aïcha, peluquera en Abiyán, pone XOF 5,000 en su tontina cada sábado antes de comprar cualquier otra cosa."
          ],
          steps: ["Escribe la meta, el total y la fecha.", "Cuenta las semanas o meses hasta la fecha.", "Divide el total entre ese número.", "Compáralo con tus ingresos en un mes malo.", "Elige dónde ahorrarlo.", "Ahorra el día en que entra el dinero."],
          words: [["Meta de ahorro", "para qué ahorras, cuánto cuesta y para cuándo."], ["Dinero para emergencias", "una pequeña cantidad apartada para problemas repentinos, fácil de sacar."]],
          slides: [
            { title: "Una meta clara", bullets: ["Para qué es, cuánto cuesta, para cuándo", "\"La escuela, NGN 120,000 para enero\"", "No solo \"ahorrar más\""] },
            { title: "Haz la cuenta", bullets: ["Total / meses = cantidad por mes", "NGN 120,000 / 8 = NGN 15,000 (ejemplo)", "¿Es demasiado? Cambia la fecha, la meta o tus gastos"] },
            { title: "Dónde y cuándo", bullets: ["Grupo, SACCO, banco de microfinanzas o cuenta", "Guarda aparte el dinero para emergencias", "Ahorra primero, el día en que entra el dinero"] }
          ],
          tryIt: "Escribe una meta real con un total y una fecha. Divide para saber la cantidad por semana o por mes, y compárala con tus ingresos en un mes malo. Cámbiala hasta que funcione.",
          youCanNow: "escribir un plan de ahorro con una meta, un total, una fecha y una cantidad por semana o por mes.",
          quickCheck: [
            { objective: "O2", q: "Necesitas KES 24,000 en 6 meses. ¿Cuánto ahorras cada mes?", options: ["KES 2,400", "KES 6,000", "KES 3,000", "KES 4,000"], answer: 3, why: "24,000 entre 6 es 4,000." },
            { objective: "O2", q: "¿Cuál es una meta de ahorro clara?", options: ["\"Ahorrar más este año\"", "\"Una máquina de coser de GHS 1,500 para junio\"", "\"Ser rico\"", "\"Dejar de gastar\""], answer: 1, why: "Dice qué, cuánto y para cuándo." }
          ]
        },
        {
          title: "Revisar las reglas de un grupo antes de entrar",
          objectives: ["O3"],
          minutes: 5,
          goal: "Revisar las reglas escritas de un grupo buscando los siete puntos clave.",
          text: [
            "Un grupo sólido tiene reglas escritas, a menudo llamadas reglamento o estatutos, aceptadas por todos los miembros. Pide verlas antes de entrar. Si no hay, pide al grupo que primero las escriba.",
            "Revisa siete cosas: 1. Aportes: cuánto, cada cuánto y qué pasa si pagas tarde (multas). 2. Reuniones: cuándo y dónde. 3. Préstamos: quién puede pedir, cuánto, por cuánto tiempo, el cargo por servicio y qué pasa si un préstamo no se devuelve. 4. Multas y disciplina. 5. Salida: cómo recuperas tu dinero si te vas o te mudas. 6. Reparto u orden de turnos: cuándo y cómo. 7. Quién controla el dinero: los directivos, cómo se eligen y quién firma.",
            "Algunos grupos se registran, por ejemplo como grupo de autoayuda, cooperativa o SACCO; pregunta en la oficina local de desarrollo social o de cooperativas qué se aplica donde vives. Un grupo que recibe depósitos del público como negocio puede necesitar una licencia del regulador.",
            "Ejemplo: la chama de Grace en Nakuru escribe en sus reglas que la tesorera no puede tener también las llaves de la caja, y los miembros votan cada préstamo."
          ],
          steps: ["Pide ver las reglas escritas.", "Revisa los aportes y las multas por pagar tarde.", "Revisa los días de reunión.", "Revisa las reglas de préstamo y qué pasa si un préstamo no se devuelve.", "Revisa cómo salir y recuperar tu dinero.", "Revisa el reparto o el orden de turnos.", "Revisa quién controla y firma por el dinero."],
          words: [["Reglamento (estatutos)", "las reglas escritas que un grupo acepta y sigue."], ["Directivos", "miembros elegidos para dirigir: a menudo un presidente, un secretario y un tesorero."]],
          slides: [
            { title: "Pide las reglas escritas", bullets: ["Reglamento o estatutos, aceptados por los miembros", "¿No hay reglas? Pide al grupo que las escriba"] },
            { title: "Siete cosas que revisar", bullets: ["Aportes y multas; reuniones", "Préstamos y préstamos sin pagar; salida", "Reparto o turnos; quién controla el dinero"] },
            { title: "Registro", bullets: ["Algunos grupos se registran localmente", "Pregunta en la oficina de desarrollo social o de cooperativas", "Recibir depósitos del público puede requerir licencia"] }
          ],
          sources: [SASRA, BCEAO_SFD],
          tryIt: "Consigue las reglas de un grupo en el que estás o al que quieres entrar (o escribe lo que sabes). Marca cada uno de los siete puntos. Escribe los que faltan como preguntas para la próxima reunión.",
          youCanNow: "revisar las reglas de un grupo buscando los siete puntos clave antes de confiarle tu dinero.",
          quickCheck: [
            { objective: "O3", q: "¿Qué pregunta revisa la regla de \"salida\"?", options: ["¿Cuándo nos reunimos?", "¿Quién es el presidente?", "¿De qué color es la caja?", "Si me mudo a otra ciudad, ¿cómo recupero mis ahorros?"], answer: 3, why: "La regla de salida dice cómo un miembro recupera su dinero." },
            { objective: "O3", q: "Un grupo no tiene reglas escritas. ¿Qué paso es prudente antes de entrar?", options: ["Pedir a los miembros que acuerden y escriban las reglas primero", "Entrar y esperar lo mejor", "Dar tus ahorros al presidente para que los guarde", "Entrar a dos grupos para estar seguro"], answer: 0, why: "Las reglas escritas evitan la mayoría de los conflictos por dinero." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Ahorrar en grupo",
        questions: [
          { objective: "O1", q: "En un grupo rotativo, ¿quién corre más riesgo?", options: ["El miembro que se lleva el fondo primero", "Los que reciben el fondo al final, si los primeros dejan de pagar", "El banco", "Nadie"], answer: 1, why: "Los últimos han pagado durante meses y pierden si los primeros dejan de pagar." },
          { objective: "O1", q: "Quieres ahorrar de forma constante y pedir pequeños préstamos durante el año. ¿Qué te puede servir más?", options: ["Solo un grupo rotativo", "Un esquema Ponzi", "Guardar el dinero debajo del colchón", "Un grupo de ahorro y préstamo como una VSLA"], answer: 3, why: "Una VSLA permite a los miembros ahorrar y pedir prestado del fondo común." },
          { objective: "O2", q: "Tu meta es GHS 900 en 3 meses. ¿Cuánto cada mes?", options: ["GHS 300", "GHS 450", "GHS 270", "GHS 90"], answer: 0, why: "900 entre 3 es 300." },
          { objective: "O3", q: "¿Cuál NO es una de las siete reglas que hay que revisar?", options: ["Las reglas de préstamo", "El reparto o los turnos", "La comida favorita del presidente", "Quién controla el dinero"], answer: 2, why: "Las siete son aportes, reuniones, préstamos, multas, salida, reparto y control del dinero." },
          { objective: "O3", q: "¿Por qué revisar quién firma y controla el dinero?", options: ["Para que una sola persona no pueda llevárselo", "Para que las reuniones sean más cortas", "Para bajar las multas", "Para que el grupo no pague impuestos"], answer: 0, why: "El control compartido impide que un directivo use mal el dinero." }
        ]
      }
    },
    {
      name: "Capítulo 2: Registros, préstamos y protección",
      lessons: [
        {
          title: "Registros y cuidado del dinero en las reuniones",
          objectives: ["O4"],
          minutes: 5,
          goal: "Anotar los aportes y préstamos y comprobar que el dinero coincide con los registros.",
          text: [
            "La mayoría de los grupos que fracasan empiezan con malos registros o con una sola persona guardando el dinero. Los buenos grupos llevan registros que todos los miembros pueden seguir.",
            "Herramientas comunes: cada miembro tiene una libreta con sus ahorros y préstamos, el grupo lleva un libro de registro, y en muchas VSLA la caja tiene tres candados con tres llaves en manos de tres miembros distintos que no son quien guarda la caja. Algunos grupos tienen el dinero en una cuenta bancaria o móvil del grupo que necesita dos o tres firmantes.",
            "En cada reunión: cada aporte y cada pago se cuenta frente a los miembros, se anota en la libreta y en el libro de registro, y el total se lee en voz alta. Al final, el dinero contado debe coincidir con los registros. Si no coincide, paren y averigüen por qué antes de que alguien se vaya.",
            "Ejemplo: en una VSLA de Tamale, el secretario lee el saldo en voz alta y dos miembros cuentan el dinero. Coinciden: GHS 3,450. Se cierra la caja y las llaves se van a casa con tres miembros distintos."
          ],
          steps: ["Cuenta cada pago frente a los miembros.", "Anótalo en la libreta del miembro y en el libro de registro.", "Lee los totales en voz alta.", "Cuenta el dinero y compáralo con el libro de registro.", "Si no coinciden, averigua por qué antes de que alguien se vaya.", "Cierra el dinero con llave; las llaves o las firmas, con miembros distintos."],
          words: [["Libreta", "el libro propio de cada miembro con sus ahorros y préstamos."], ["Firmante", "persona autorizada a firmar por la cuenta del grupo; los buenos grupos exigen dos o más."]],
          slides: [
            { title: "Por qué importan los registros", bullets: ["Los malos registros y una sola persona con el dinero", "son donde fallan la mayoría de los grupos"] },
            { title: "Herramientas", bullets: ["Libretas y un libro de registro", "Caja con tres candados y tres personas con llave", "Cuenta del grupo con dos o más firmantes"] },
            { title: "En cada reunión", bullets: ["Contar frente a los miembros; anotarlo", "Leer los totales en voz alta", "El dinero debe coincidir con los registros antes de irse"] }
          ],
          sources: [VSLA],
          tryIt: "Haz una tabla de registro sencilla para una reunión: nombre del miembro, ahorro pagado, préstamo devuelto, préstamo nuevo. Añade tres miembros de ejemplo. Suma cada columna y comprueba que los totales igualan el dinero que contarías.",
          youCanNow: "anotar aportes y préstamos en una reunión y comprobar que el dinero coincide con los registros.",
          quickCheck: [
            { objective: "O4", q: "Al final de una reunión, hay GHS 200 menos de lo que dice el libro de registro. ¿Qué haces?", options: ["Ignorarlo; cuadrará la próxima vez", "Dejar que el tesorero lo explique el mes que viene", "Parar y averiguar por qué antes de que alguien se vaya", "Arrancar la página"], answer: 2, why: "Hay que encontrar la diferencia mientras todos están presentes y lo recuerdan bien." },
            { objective: "O4", q: "¿Por qué muchas VSLA dan las tres llaves a tres miembros distintos?", options: ["Para que nadie pueda abrir la caja solo", "Porque los candados son baratos", "Para alargar las reuniones", "Para que quien guarda la caja pueda abrirla en casa"], answer: 0, why: "Con las llaves repartidas, la caja solo se abre con los miembros presentes." }
          ]
        },
        {
          title: "Microfinanzas y préstamos grupales",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular el total que pagarás por un préstamo y comparar las fechas con tus ingresos.",
          text: [
            "Los bancos e instituciones de microfinanzas prestan cantidades pequeñas a personas y pequeños negocios, a menudo a través de grupos. En Nigeria, el Banco Central (CBN) da licencia a los bancos de microfinanzas; en Kenia, el Banco Central (CBK) da licencia a los bancos de microfinanzas y a los prestamistas digitales; en Ghana, el Banco de Ghana publica la lista de instituciones autorizadas; en los países que usan el franco CFA (XOF), como Senegal y Costa de Marfil, las microfinanzas siguen las normas del BCEAO, el banco central de África Occidental.",
            "Nunca compares préstamos solo por la tasa de interés que anuncian. Pide por escrito el total que pagarás, con todas las comisiones, seguros y cargos. Ejemplo (cifras inventadas): pides KES 10,000; pagas KES 1,000 por semana durante 12 semanas. Total pagado: KES 12,000, así que el préstamo cuesta KES 2,000.",
            "Compara las fechas de pago con tus ingresos. Un pago semanal es difícil si cobras cada mes o por temporadas. Pregunta qué pasa si pagas tarde: multas, y si se informa a un buró de crédito.",
            "Muchos préstamos grupales usan la responsabilidad solidaria: si un miembro no paga, los demás deben pagar por él. Entra solo con personas en las que confías, y ten claro que quizá tengas que cubrir a otra persona. Pide prestado para algo que genere o ahorre dinero, no para pagar otro préstamo."
          ],
          steps: ["Pide por escrito el total a pagar, con todas las comisiones.", "Calcula el costo: total pagado menos lo que pediste.", "Anota las fechas de pago.", "Compara cada fecha con tus ingresos en un mes malo.", "Pregunta por las multas por atraso y el informe al buró de crédito.", "Pregunta si el préstamo tiene responsabilidad solidaria."],
          words: [["Microfinanzas", "préstamos pequeños y servicios de ahorro para personas y pequeños negocios."], ["Total pagado", "todo el dinero que devuelves, con intereses y comisiones."], ["Responsabilidad solidaria", "los miembros del grupo deben pagar por un miembro que no paga."], ["Buró de crédito", "una empresa que registra cómo paga la gente sus préstamos; los prestamistas lo consultan."]],
          slides: [
            { title: "Quién presta", bullets: ["Bancos e instituciones de microfinanzas, a menudo a grupos", "Con licencia del banco central (CBN, CBK, Banco de Ghana)", "Países XOF: normas del BCEAO"] },
            { title: "Compara el total pagado", bullets: ["Pídelo por escrito, con todas las comisiones", "Ejemplo: KES 1,000 x 12 semanas = KES 12,000", "Costo = KES 12,000 - KES 10,000 = KES 2,000"] },
            { title: "Fechas y responsabilidad solidaria", bullets: ["Las fechas de pago deben ajustarse a tus ingresos", "Multas por atraso; buró de crédito", "Préstamos grupales: quizá pagues por otros"] }
          ],
          sources: [CBN_MFB, CBK_DCP, BOG, BCEAO_SFD],
          tryIt: "Usa este ejemplo o una oferta real: pides NGN 50,000 y pagas NGN 4,800 por semana durante 12 semanas. Calcula el total pagado y el costo. Luego escribe si los pagos semanales se ajustan a tus ingresos.",
          youCanNow: "calcular el total que pagarás por un préstamo y comprobar que las fechas se ajustan a tus ingresos antes de firmar.",
          quickCheck: [
            { objective: "O5", q: "Pides GHS 1,000 y pagas GHS 120 al mes durante 10 meses. ¿Cuál es el total pagado?", options: ["GHS 1,000", "GHS 1,120", "GHS 1,200", "GHS 120"], answer: 2, why: "120 x 10 = 1,200." },
            { objective: "O5", q: "En un préstamo grupal con responsabilidad solidaria, un miembro deja de pagar. ¿Qué puede pasar?", options: ["Nada", "Los demás miembros deben pagar por ese miembro", "El prestamista cancela el préstamo", "Solo paga el presidente del grupo"], answer: 1, why: "La responsabilidad solidaria significa que los miembros cubren los préstamos que otros no pagan." }
          ]
        },
        {
          title: "Esquemas Ponzi, prestamistas falsos y tu plan",
          objectives: ["O6", "O2"],
          minutes: 6,
          goal: "Identificar las señales de un esquema Ponzi o de un prestamista falso y buscar al proveedor en la lista del regulador.",
          text: [
            "Un esquema Ponzi paga a los primeros miembros con el dinero de los nuevos. Siempre se viene abajo, y la mayoría pierde sus ahorros. Señales de alerta: promesas de duplicar tu dinero o de ganancias altas garantizadas en poco tiempo, presión para traer a amigos y familia, premios por traer gente, un negocio que nadie sabe explicar, y promoción en grupos de WhatsApp, TikTok, Instagram o Telegram y por influencers. La SEC de Nigeria (la comisión que vigila las inversiones) ha advertido sobre estos esquemas muchas veces.",
            "Prestamistas y apps de préstamos falsos: piden una comisión antes de dar el préstamo, piden tu PIN o tu contraseña, exigen acceso a todos los contactos de tu teléfono, o amenazan y humillan a quienes les deben. Los prestamistas de verdad nunca necesitan tu PIN.",
            "Revisa antes de pagar o compartir datos. Busca al proveedor en la lista oficial del regulador: SASRA para las SACCO que reciben depósitos y el Banco Central de Kenia para los bancos de microfinanzas y los prestamistas digitales en Kenia; el CBN para los bancos de microfinanzas y la lista de la FCCPC (la autoridad de protección al consumidor) de prestamistas digitales aprobados en Nigeria; la lista de instituciones autorizadas del Banco de Ghana; el BCEAO y los ministerios de finanzas nacionales en los países XOF. Si no está en la lista, no lo uses.",
            "Después termina tu plan: meta, total, fecha, cantidad por semana o por mes, dónde ahorras, y tus respuestas de la hoja de revisión sobre el grupo o la institución."
          ],
          steps: ["Pregunta: ¿promete ganancias garantizadas o muy altas en poco tiempo?", "Pregunta: ¿me paga por traer a otras personas?", "Pregunta: ¿pide una comisión primero, o mi PIN?", "Búscalo en la lista oficial del regulador.", "Si no está en la lista o hay alguna señal de alerta: no pagues.", "Escribe tu plan de ahorro mensual y tu hoja de revisión."],
          words: [["Esquema Ponzi", "un fraude que paga a los miembros antiguos con el dinero de los nuevos hasta que se viene abajo."], ["Regulador", "el organismo oficial que da licencias y vigila a los proveedores financieros, como un banco central."], ["Con licencia", "autorizado oficialmente por el regulador para hacer este negocio."]],
          slides: [
            { title: "Señales de un esquema Ponzi", bullets: ["\"Duplica tu dinero\"; ganancias altas garantizadas", "Premios por traer a amigos", "Un negocio que nadie explica; promovido en redes sociales"] },
            { title: "Señales de un prestamista falso", bullets: ["Comisión antes del préstamo", "Pide tu PIN o tu contraseña", "Quiere todos tus contactos; amenaza a quienes le deben"] },
            { title: "Revisa la lista oficial", bullets: ["Kenia: SASRA, CBK", "Nigeria: CBN, prestamistas aprobados por la FCCPC", "Ghana: Banco de Ghana; XOF: BCEAO"] },
            { title: "Termina tu plan", bullets: ["Meta, total, fecha, cantidad por mes", "Dónde ahorras", "Respuestas de la hoja de revisión"] }
          ],
          sources: [SEC_NG, SASRA, CBK_DCP, FCCPC, BOG, BCEAO_SFD],
          tryIt: "Tarea final: escribe tu plan de ahorro mensual con la meta, el total, la fecha, la cantidad por semana o por mes y dónde ahorrarás. Añade la hoja de revisión: las reglas del grupo, cómo se guardan el dinero y los registros, la licencia (revisada en la lista del regulador si hace falta) y el costo total de cualquier préstamo.",
          youCanNow: "detectar un esquema Ponzi o un prestamista falso, buscar a un proveedor en la lista oficial y seguir tu plan de ahorro por escrito.",
          quickCheck: [
            { objective: "O6", q: "Un grupo de WhatsApp promete duplicar tu dinero en 30 días y te paga por cada amigo que traes. ¿Qué es?", options: ["Un grupo de ahorro", "Un banco de microfinanzas con licencia", "Un grupo rotativo", "Las señales de un esquema Ponzi"], answer: 3, why: "Las ganancias rápidas garantizadas y los premios por traer gente son señales típicas de un esquema Ponzi." },
            { objective: "O6", q: "Una app de préstamos pide una \"comisión de trámite\" antes de enviar el préstamo. ¿Qué haces?", options: ["No pagar; buscarla en la lista del regulador", "Pagar rápido antes de que termine la oferta", "Pagar la mitad", "Dar tu PIN en su lugar"], answer: 0, why: "Una comisión antes del préstamo es señal de prestamista falso; revisa primero la lista oficial." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Registros, préstamos y protección",
        questions: [
          { objective: "O4", q: "¿Qué debe pasar con cada aporte en una reunión?", options: ["El tesorero se lo lleva a casa para contarlo", "Se cuenta frente a los miembros y se anota en la libreta y en el libro de registro", "Se anota la semana siguiente", "Va directo al teléfono del presidente"], answer: 1, why: "Contar y anotar frente a los miembros mantiene honestos los registros." },
          { objective: "O4", q: "Una cuenta del grupo debería necesitar:", options: ["Solo la firma del tesorero", "Ninguna firma", "Dos o más firmantes", "Un PIN nuevo para cada miembro"], answer: 2, why: "Más de un firmante impide que una sola persona se lleve el dinero." },
          { objective: "O5", q: "¿Cuál es la mejor forma de comparar dos préstamos?", options: ["El asesor de crédito más amable", "La tasa de interés del anuncio", "La aprobación más rápida", "El total que pagarás, con todas las comisiones, y fechas que se ajusten a tus ingresos"], answer: 3, why: "El total pagado muestra el costo real; las fechas muestran si puedes pagar." },
          { objective: "O6", q: "¿Dónde compruebas que una SACCO en Kenia puede recibir depósitos?", options: ["En la lista de SASRA de SACCO autorizadas a recibir depósitos", "En una página de Facebook", "Solo en el folleto de la propia SACCO", "En lo que dice un amigo"], answer: 0, why: "SASRA da licencia a las SACCO que reciben depósitos y publica la lista." },
          { objective: "O6", q: "¿Cuál es una señal de prestamista falso?", options: ["Da el costo total por escrito", "Pide tu PIN o una comisión antes del préstamo", "Está en la lista del banco central", "Explica las multas por atraso"], answer: 1, why: "Los prestamistas de verdad nunca necesitan tu PIN y no cobran una comisión antes de prestar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Grupos de ahorro y microfinanzas (chamas, VSLA, tontinas, esusu)",
    questions: [
      { objective: "O1", q: "Esusu, susu, tontina y gam'eya suelen ser:", options: ["Bancos de microfinanzas", "Grupos de ahorro rotativos", "Apps de préstamos", "Compañías de seguros"], answer: 1, why: "Son nombres locales de grupos donde los miembros se llevan el fondo por turnos." },
      { objective: "O1", q: "¿Qué hace un grupo de ahorro y préstamo que no hace un grupo rotativo?", options: ["Presta los ahorros a los miembros y reparte con las ganancias", "Da el fondo a cada miembro por turnos", "Nunca se reúne", "No tiene reglas"], answer: 0, why: "Una VSLA o ASCA tiene un fondo de préstamos y reparte los ahorros más los cargos por servicio." },
      { objective: "O1", q: "¿Cuál es un riesgo de un grupo rotativo?", options: ["Paga intereses altos", "Tiene licencia del banco central", "Tiene una caja con tres candados", "Los que recibieron el fondo pronto pueden dejar de pagar"], answer: 3, why: "Si los primeros dejan de pagar, perjudican a los que aún esperan." },
      { objective: "O2", q: "Necesitas XOF 60,000 en 12 semanas. ¿Cuánto cada semana?", options: ["XOF 6,000", "XOF 12,000", "XOF 4,000", "XOF 5,000"], answer: 3, why: "60,000 entre 12 es 5,000." },
      { objective: "O2", q: "\"Págate primero\" significa:", options: ["Comprarte un regalo", "Pagar primero al presidente del grupo", "Pedir prestado antes de ahorrar", "Ahorrar el día en que entra el dinero, antes de otros gastos"], answer: 3, why: "Ahorrar primero hace que ocurra antes de que el dinero se gaste." },
      { objective: "O2", q: "Tu plan necesita EGP 900 al mes, pero solo puedes ahorrar EGP 600. ¿Qué puedes hacer?", options: ["Pedir prestado a una app de préstamos", "Dejar de ahorrar", "Mover la fecha más adelante, bajar la meta o recortar gastos", "Entrar a un esquema que duplica el dinero"], answer: 2, why: "Cambia la fecha, la meta o tus gastos hasta que el plan funcione." },
      { objective: "O2", q: "¿Por qué guardar el dinero para emergencias separado de los ahorros de tu meta?", options: ["Para que un problema repentino no vacíe tu meta", "Porque los bancos lo exigen", "Para pagar las multas del grupo", "Porque gana más"], answer: 0, why: "Una cantidad aparte para emergencias protege la meta de las sorpresas." },
      { objective: "O3", q: "¿Qué es el reglamento de un grupo?", options: ["El diario del presidente", "Una app de préstamos", "Las reglas escritas que los miembros aceptan y siguen", "La caja del dinero"], answer: 2, why: "El reglamento o los estatutos son las reglas escritas del grupo." },
      { objective: "O3", q: "¿Qué regla dice qué pasa si el préstamo de un miembro no se devuelve?", options: ["La regla de reuniones", "La regla de préstamos", "La regla de reparto", "Ninguna regla"], answer: 1, why: "Las reglas de préstamos dicen quién pide, cuánto y qué pasa si un préstamo no se devuelve." },
      { objective: "O3", q: "Las reglas de un grupo no dicen cómo sale un miembro. ¿Qué haces?", options: ["Pedir al grupo que añada una regla de salida antes de entrar", "Entrar de todos modos", "Irte sin avisar a nadie", "Sacar tus ahorros de la caja"], answer: 0, why: "Una regla que falta es una pregunta que hay que resolver antes de confiarle dinero al grupo." },
      { objective: "O4", q: "¿Qué es una libreta?", options: ["El libro de un miembro con sus ahorros y préstamos", "Un pasaporte", "Una tarjeta bancaria", "Una app de préstamos"], answer: 0, why: "La libreta de cada miembro muestra sus propios ahorros y préstamos." },
      { objective: "O4", q: "Al final de cada reunión:", options: ["El presidente se lleva el dinero a casa sin contarlo", "El dinero contado debe coincidir con el libro de registro", "Se tiran los registros", "Solo el tesorero lee los totales"], answer: 1, why: "El dinero y los registros deben coincidir, con los totales leídos en voz alta." },
      { objective: "O4", q: "¿Por qué leer los totales en voz alta en las reuniones?", options: ["Para alargar las reuniones", "Para presumir", "Para que todos los miembros oigan y puedan aceptar las cifras", "Porque es ley en todas partes"], answer: 2, why: "Leer en voz alta permite que todos los miembros, incluso los que no saben leer, revisen las cifras." },
      { objective: "O5", q: "Pides MAD 2,000 y pagas MAD 250 al mes durante 10 meses. ¿Cuánto cuesta el préstamo?", options: ["MAD 250", "MAD 2,500", "MAD 2,000", "MAD 500"], answer: 3, why: "Total pagado 2,500 menos 2,000 pedidos = 500." },
      { objective: "O5", q: "Ganas sobre todo después de la cosecha o en la temporada alta. ¿Qué debes revisar en un préstamo?", options: ["El color del formulario", "El modelo de teléfono del asesor", "Nada", "Las fechas de pago frente a tus ingresos"], answer: 3, why: "Las fechas de pago deben ajustarse a cuándo entra el dinero." },
      { objective: "O5", q: "La responsabilidad solidaria significa:", options: ["Los miembros pagan por un miembro que no paga", "El banco paga tu préstamo", "Nadie paga", "Puedes pedir prestado dos veces"], answer: 0, why: "Con la responsabilidad solidaria, el grupo cubre los préstamos sin pagar." },
      { objective: "O5", q: "¿Qué debe darte un prestamista antes de firmar?", options: ["Un teléfono gratis", "Solo la tasa de interés", "El total a pagar, por escrito, con todas las comisiones y fechas", "El historial de préstamos de tu vecino"], answer: 2, why: "El total y las fechas por escrito te permiten comparar y planificar." },
      { objective: "O6", q: "¿Cuál es una señal de alerta de un esquema Ponzi?", options: ["Reglas escritas", "Ganancias altas garantizadas en poco tiempo y premios por traer gente", "Los miembros leen los totales en voz alta", "Una caja con tres candados"], answer: 1, why: "Las ganancias rápidas garantizadas y los premios por traer gente son señales típicas de un esquema Ponzi." },
      { objective: "O6", q: "En Nigeria, ¿dónde compruebas si una app de préstamos está aprobada?", options: ["En las reseñas de la propia app", "En un grupo de WhatsApp", "En un video de TikTok", "En la lista de la FCCPC de prestamistas digitales registrados"], answer: 3, why: "La FCCPC publica el estado de registro de los prestamistas digitales." },
      { objective: "O6", q: "Un proveedor no está en la lista del regulador. ¿Qué haces?", options: ["Usarlo solo para cantidades pequeñas", "Pagar si un amigo lo recomienda", "No usarlo", "Darle tu PIN para comprobar"], answer: 2, why: "Los proveedores que no están en la lista no están vigilados; tu dinero no está protegido." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      { name: "Meta clara y cuentas", objective: "O2", notYet: "No hay total ni fecha, o la cantidad por mes no llega a la meta.", meets: "Meta, total, fecha y cantidad por semana o por mes, con cuentas que cuadran.", exceeds: "También lo comparó con los ingresos de un mes malo y guarda aparte el dinero para emergencias." },
      { name: "El tipo de ahorro adecuado", objective: "O1", notYet: "No eligió dónde ahorrar, o no da ninguna razón.", meets: "Dice dónde ahorrará el dinero y da una razón por la que se ajusta a la meta y un riesgo.", exceeds: "Compara dos opciones (por ejemplo un grupo rotativo y una SACCO) antes de elegir." },
      { name: "Reglas del grupo revisadas", objective: "O3", notYet: "No vio las reglas o revisó menos de cuatro de los siete puntos.", meets: "Revisó al menos seis de los siete puntos, con los que faltan anotados como preguntas.", exceeds: "Revisó los siete y planteó al grupo las reglas que faltan." },
      { name: "Registros y cuidado del dinero", objective: "O4", notYet: "No dice cómo se guardan el dinero y los registros.", meets: "Dice cómo se guarda el dinero (caja con tres candados o cuenta con dos o más firmantes) y que los totales se leen en voz alta.", exceeds: "Incluye una tabla de registro de ejemplo que cuadra." },
      { name: "Costo y seguridad del préstamo", objective: "O5", notYet: "Planea un préstamo sin saber el total a pagar.", meets: "Cualquier préstamo tiene el total pagado, el costo y las fechas comparadas con los ingresos; o el plan no tiene préstamo.", exceeds: "También anota las multas por atraso, el informe al buró de crédito y la responsabilidad solidaria." },
      { name: "Licencia y revisión de estafas", objective: "O6", notYet: "El plan incluye un proveedor sin licencia o un esquema con señales de alerta.", meets: "Toda institución que recibe depósitos o presta como negocio se buscó en la lista oficial del regulador, y no hay señales de alerta.", exceeds: "Indica la lista usada y la fecha de la revisión." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que dicen, a los 30 días, que ahorran cada semana o cada mes según su plan",
      "Grupos aliados que adoptan reglas escritas, libretas y la lectura de totales en voz alta",
      "Participantes que dicen haber rechazado un esquema Ponzi o un prestamista sin licencia en 30 días"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, bolígrafo y la calculadora del teléfono",
      "El reglamento o las reglas de un grupo, si el participante está en uno",
      "La lista oficial del regulador de tu país (SASRA, CBK, CBN, FCCPC, Banco de Ghana, BCEAO), abierta una vez en el teléfono o impresa",
      "Entre 60 y 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Ideal para dar dentro de una chama, VSLA, susu, tontina o grupo de mujeres que ya existe: una lección por reunión, con la prueba inicial en la primera reunión.",
      "Usa las reglas del propio grupo como texto de práctica en la lección 3, y una reunión de práctica con dinero de juguete en la lección 4.",
      "No recomiendes ningún banco, SACCO, app o esquema en particular; enseña a los participantes a revisar ellos mismos la lista del regulador.",
      "Comprueba que las listas de los reguladores estén al día antes de la sesión; los nombres y las direcciones web pueden cambiar.",
      "Nunca pidas a los participantes que compartan su PIN, sus contraseñas o los saldos reales de sus cuentas en el grupo."
    ]
  }
};
