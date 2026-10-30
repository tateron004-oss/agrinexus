"use strict";

// Koach Learn course (Spanish translation of shared/warehouse-logistics.js). See scripts/koachlearn-courses/README.md, "Translations".
// Prepares learners for entry-level warehouse work and for the MSSC CLA and CLT credentials. It does not grant any credential.
// All counts and weights are practice only.

const BLS_MOVERS = { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Trabajadores manuales y movedores de materiales (en inglés)", url: "https://www.bls.gov/ooh/transportation-and-material-moving/hand-laborers-and-material-movers.htm" };
const BLS_CLERKS = { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Empleados de registro de materiales (en inglés)", url: "https://www.bls.gov/ooh/office-and-administrative-support/material-recording-clerks.htm" };
const MSSC_CLT = { name: "MSSC: Certified Logistics Technician (CLT) y Certified Logistics Associate (CLA), en inglés", url: "https://www.msscusa.org/certified-logistics-technician-clt/" };
const OSHA_OUTREACH = { name: "Programa de Capacitación Outreach de OSHA (clases de 10 y 30 horas)", url: "https://www.osha.gov/training/outreach" };
const OSHA_WAREHOUSE = { name: "OSHA: Almacenes", url: "https://www.osha.gov/warehousing" };
const OSHA_WH_HAZARDS = { name: "OSHA: Peligros en almacenes y soluciones", url: "https://www.osha.gov/warehousing/hazards-solutions" };
const OSHA_HEAT = { name: "OSHA: Exposición al calor", url: "https://www.osha.gov/heat-exposure" };
const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Vehículos industriales motorizados (frenos del remolque y calzas de ruedas)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const AJC = { name: "CareerOneStop: encuentra un American Job Center cerca de ti", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" };

module.exports = {
  id: "warehouse-logistics-es",
  lang: "es",
  translationOf: "warehouse-logistics",
  category: "Workforce Development",
  name: "Carreras en almacenes y logística",
  skills: "Conocer los trabajos y credenciales del almacén, Encontrar artículos por SKU y ubicación, Recibir un envío, Armar una tarima segura, Trabajar seguro y a buen ritmo",
  outcome: "nombrar los principales trabajos de almacén y las credenciales que te ayudan a conseguirlos, seguir la mercancía desde la recepción hasta el envío, encontrar un artículo con su SKU y su código de ubicación, revisar una entrega contra sus documentos y anotar cualquier problema, planear una carga segura en una tarima y armar un plan para que te contraten.",
  about: [
    "Los almacenes y centros de distribución mueven las cosas que compramos todos los días, y contratan todo el año. Este curso es para personas que buscan trabajo, personas que regresan a casa después de estar en prisión, veteranos y cualquiera que quiera un primer empleo estable en logística, con espacio para crecer.",
    "Vas a aprender los trabajos de un almacén, cómo fluye la mercancía del camión al estante y al cliente, cómo leer códigos de ubicación, cómo recibir una entrega y contar inventario con precisión, cómo armar una tarima segura y cómo cuidarte mientras mantienes el ritmo.",
    "Este curso te prepara. No te da una credencial. Si quieres una, el Manufacturing Skill Standards Council (MSSC, un consejo nacional de normas de habilidades en EE. UU.) ofrece el Certified Logistics Associate (CLA) y el Certified Logistics Technician (CLT). Para conducir un montacargas necesitas la capacitación del empleador; mira nuestro curso \"Fundamentos para operador de montacargas\".",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" que puedes hacer con papel y lápiz. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma un paquete inicial para trabajar en un almacén: un reporte de recepción de una entrega de práctica (conteos revisados contra la lista de empaque, con cada faltante, sobrante y daño anotado), una lista de surtido que ordenaste por recorrido usando los códigos de ubicación, un dibujo de un plan de carga segura en tarima con pesos y capas, y un plan de una página para que te contraten, con tres empleadores o programas, la credencial que buscarás y dos líneas honestas para tu currículum.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que buscan su primer trabajo en un almacén, un centro de distribución o en logística: personas que buscan empleo, personas que regresan a casa después de estar en prisión, veteranos y miembros del servicio militar con experiencia en suministros, jóvenes adultos y personas que cambian de carrera.",
    startingPoint: "Saben contar, leer números y etiquetas, y seguir instrucciones. Tienen poca experiencia con códigos de ubicación, documentos de recepción, conteos de inventario o armado de tarimas. Algunas han hecho trabajo físico, pero no han aprendido a levantar cargas de forma segura.",
    gap: "Los almacenes contratan a mucha gente, pero los trabajadores nuevos que cuentan mal, confunden ubicaciones o se lastiman no duran. Los participantes necesitan los hábitos básicos de precisión y seguridad, y un camino claro hacia una credencial y un ascenso, para que los contraten y se queden.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada término se explica",
      "Matemáticas: números enteros, sumas y multiplicaciones simples; los números de práctica son inventados",
      "No se necesita equipo: se practica con papel, objetos de la casa o cajas",
      "En este curso no se usa montacargas ni equipo motorizado",
      "Dispositivos: un teléfono o una computadora de la biblioteca para páginas oficiales y búsquedas de empleo"
    ],
    prerequisites: "Ninguno. \"Seguridad básica en el trabajo (OSHA)\" y \"Fundamentos para operador de montacargas\" son buenos cursos para seguir."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Con una lista de anuncios de empleo de almacén", action: "identificar los puestos, lo que hace cada uno y las credenciales que te ayudan a conseguir trabajo", standard: "nombrando al menos cuatro puestos y una credencial real con quién la otorga" },
    { id: "O2", condition: "Con una lista de surtido con SKU y códigos de ubicación", action: "encontrar la ubicación de cada artículo y ordenar el surtido por recorrido", standard: "leyendo bien cada ubicación" },
    { id: "O3", condition: "Con una entrega de práctica y su lista de empaque", action: "recibir el envío y anotar cualquier faltante, sobrante o daño", standard: "con cada conteo y cada nota correctos" },
    { id: "O4", condition: "Con cajas y sus pesos", action: "planear una carga segura en tarima, con lo pesado abajo y dentro del límite de peso", standard: "cumpliendo cada regla de la lista de revisión de la tarima" },
    { id: "O5", condition: "Ante una tarea o un peligro en el almacén", action: "elegir la forma segura de levantar, mover o reportar sin perder el ritmo", standard: "acertando en al menos 4 de 5 situaciones" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funciona un almacén",
      lessons: [
        {
          title: "Trabajos de almacén y las credenciales que ayudan",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar los principales trabajos de almacén y una credencial que te puede ayudar a conseguir empleo.",
          text: [
            "Trabajos comunes para empezar: manejador de materiales o asociado de almacén (mueve mercancía), surtidor y empacador (prepara pedidos de clientes), reponedor o surtidor de pedidos, empleado de envíos y recepción (revisa lo que entra y sale), empleado de inventario (cuenta y corrige registros) y operador de montacargas. Con experiencia puedes llegar a líder de equipo, supervisor o coordinador de inventario o de logística.",
            "La mayoría de los trabajos para empezar no piden título. Por lo general se aprende en el trabajo, a menudo en un mes o menos, y se aprenden reglas de seguridad basadas en las normas de OSHA (la Administración de Seguridad y Salud Ocupacional de EE. UU.). Los empleadores buscan personas que llegan a tiempo, cuentan con cuidado y trabajan con seguridad.",
            "Las credenciales te ayudan a destacar. El Manufacturing Skill Standards Council (MSSC) ofrece el Certified Logistics Associate (CLA) y el Certified Logistics Technician (CLT); primero apruebas el CLA y luego presentas el CLT. La clase Outreach de 10 horas de OSHA te da una tarjeta de finalización; es voluntaria, y OSHA dice que no es una certificación. Para operar un montacargas siempre se necesita la capacitación y la evaluación del propio empleador.",
            "El pago y las vacantes cambian según el lugar. Revisa el Occupational Outlook Handbook oficial (el manual de perspectivas laborales) en bls.gov para ver pago y perspectivas, y anuncios de empleo reales cerca de ti."
          ],
          words: [["Logística", "planear y mover mercancía desde donde se hace hasta donde se necesita."], ["Centro de distribución", "un almacén grande que envía mercancía a tiendas o clientes."], ["Credencial", "un certificado o una tarjeta que muestra que pasaste un examen o terminaste una capacitación."], ["MSSC", "el Manufacturing Skill Standards Council, un grupo nacional de EE. UU. que otorga las credenciales CLA y CLT."]],
          slides: [
            { title: "Trabajos para empezar", bullets: ["Manejador de materiales, surtidor, empacador, reponedor", "Empleado de envíos y recepción, empleado de inventario", "Operador de montacargas (con capacitación del empleador)"] },
            { title: "Cómo empieza la gente", bullets: ["Por lo general no se pide título", "Se aprende en el trabajo, a menudo en un mes o menos", "Puntualidad, conteos cuidadosos, trabajo seguro"] },
            { title: "Credenciales que ayudan", bullets: ["MSSC: primero el CLA, luego el CLT", "Tarjeta de 10 horas de OSHA: voluntaria, no es una certificación", "Montacargas: capacitación y evaluación del empleador"] },
            { title: "Revisa los datos", bullets: ["Pago y perspectivas: Occupational Outlook Handbook en bls.gov", "Anuncios de empleo reales cerca de ti"] }
          ],
          sources: [BLS_MOVERS, BLS_CLERKS, MSSC_CLT, OSHA_OUTREACH],
          tryIt: "Busca tres anuncios de empleo de almacén cerca de ti. Para cada uno, escribe el puesto, el turno, lo que hace el trabajo en una línea y cualquier credencial o habilidad que pida. Luego abre la página del CLT de MSSC y escribe quién otorga el CLA y el CLT.",
          youCanNow: "nombrar los principales trabajos de almacén, lo que hace cada uno y las credenciales que te pueden ayudar a conseguir empleo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué trabajo revisa la mercancía que entra y sale contra los documentos?", options: ["Empleado de envíos y recepción", "Empacador", "Mecánico de montacargas", "Guardia de seguridad"], answer: 0, why: "Los empleados de envíos y recepción llevan el control de los envíos que entran y salen, y los revisan." },
            { objective: "O1", q: "¿Quién otorga la credencial Certified Logistics Technician (CLT)?", options: ["OSHA", "El IRS", "El Manufacturing Skill Standards Council (MSSC)", "Cualquier agencia de empleo"], answer: 2, why: "El CLT, y el CLA que va primero, son credenciales del MSSC." }
          ]
        },
        {
          title: "El flujo de la mercancía y los códigos de ubicación",
          objectives: ["O2"],
          minutes: 5,
          goal: "Encontrar un artículo con su SKU y su código de ubicación, y ordenar el surtido por recorrido.",
          text: [
            "La mercancía pasa por el almacén en el mismo orden todos los días. Recepción: llega y se revisa. Acomodo: se guarda en un lugar fijo. Almacenamiento. Surtido: los trabajadores sacan artículos para un pedido. Empaque. Envío: los pedidos salen en camiones.",
            "Cada producto tiene un SKU (unidad de mantenimiento de inventario), un código para ese artículo exacto, por ejemplo una camisa azul talla grande. Cada lugar de almacenamiento tiene un código de ubicación. Muchos almacenes usan zona, pasillo, rack (o sección) y nivel, así que A-12-03-B puede significar zona A, pasillo 12, rack 3, nivel B. Tu almacén te enseñará su propio formato.",
            "La mayoría de los almacenes usan escáneres. Escaneas la ubicación y el artículo para que el sistema de computadora (un sistema de gestión de almacén) sepa qué se movió. Si el artículo en ese lugar no coincide con el SKU, detente y avísale a tu líder; no tomes algo que se parezca.",
            "Para ahorrar pasos, surte por recorrido: ordena tu lista por pasillo y luego por rack, para pasar por cada pasillo una sola vez."
          ],
          steps: ["Lee el SKU y el código de ubicación de cada línea.", "Divide el código de ubicación en sus partes: zona, pasillo, rack, nivel.", "Ordena la lista por zona, luego pasillo, luego rack.", "En cada lugar, escanea o revisa que el SKU coincida antes de tomar el artículo.", "Si no coincide o el lugar está vacío, repórtalo."],
          words: [["SKU", "unidad de mantenimiento de inventario: un código para un producto exacto."], ["Código de ubicación", "la dirección de un lugar de almacenamiento, como zona, pasillo, rack y nivel."], ["Acomodo", "llevar la mercancía recibida a su lugar de almacenamiento."], ["Surtido", "sacar artículos del almacenamiento para preparar un pedido."], ["Sistema de gestión de almacén (WMS)", "el sistema de computadora que registra dónde está cada artículo."]],
          slides: [
            { title: "El flujo de la mercancía", bullets: ["Recepción, acomodo, almacenamiento", "Surtido, empaque, envío"] },
            { title: "Los códigos que usas", bullets: ["SKU: el artículo exacto", "Ubicación: zona, pasillo, rack, nivel", "Ejemplo: A-12-03-B"] },
            { title: "Surte bien, surte con inteligencia", bullets: ["Escanea el lugar y el artículo", "¿Artículo equivocado o lugar vacío? Repórtalo", "Ordena por pasillo para pasar por cada uno una vez"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Solo práctica. Ordena esta lista de surtido por recorrido (zona, pasillo, rack, nivel): B-04-02-A, A-12-03-B, A-03-01-C, B-01-05-A, A-12-01-A. Luego escribe qué significa cada parte de A-12-03-B. Revisa: el orden empieza A-03-01-C, A-12-01-A, A-12-03-B.",
          youCanNow: "leer un código de ubicación, encontrar un artículo por su SKU y ordenar una lista de surtido por recorrido.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un SKU?", options: ["Un tipo de montacargas", "Un código para un producto exacto", "Un camión de envíos", "Una regla de seguridad"], answer: 1, why: "Una unidad de mantenimiento de inventario es un código para un artículo exacto." },
            { objective: "O2", q: "Llegas a una ubicación y el artículo no coincide con el SKU de tu lista. ¿Qué haces?", options: ["Tomas algo que se parezca", "Te saltas la línea y no dices nada", "Tomas dos de otra cosa", "Te detienes y se lo reportas a tu líder"], answer: 3, why: "Una diferencia se debe reportar para que el pedido y los registros queden bien." }
          ]
        },
        {
          title: "Recibir un envío y contar inventario",
          objectives: ["O3"],
          minutes: 6,
          goal: "Revisar una entrega contra su lista de empaque y anotar cualquier problema.",
          text: [
            "Cuando llega un camión, recepción revisa que lo que llegó sea lo que se pidió. Comparas la mercancía con la lista de empaque (y con la orden de compra, si la tienes). El chofer también entrega un conocimiento de embarque, el documento de envío que firmas.",
            "Cuenta cada línea. Revisa el SKU, la cantidad y el estado. Si una caja está aplastada, mojada o abierta, toma una foto si tu lugar de trabajo lo permite y anótalo. Si recibiste menos de lo que dice la lista, es un faltante; si recibiste más, es un sobrante. Anota cada problema en los documentos antes de firmar, como indique el proceso de tu lugar de trabajo. Firmar un recibo sin notas puede significar que aceptaste todo en buen estado.",
            "Los conteos de inventario funcionan igual. Un conteo cíclico es contar algunas ubicaciones cada día en lugar de todo el almacén de una vez. Si tu conteo no coincide con el sistema, cuenta otra vez y luego repórtalo. Aquí la precisión importa más que la rapidez."
          ],
          steps: ["Toma la lista de empaque (y la orden de compra si la tienes).", "Cuenta cada línea: el SKU correcto, la cantidad correcta.", "Revisa el estado de cada caja.", "Anota cada faltante, sobrante o daño en los documentos.", "Sigue el proceso de tu lugar de trabajo antes de firmar el conocimiento de embarque.", "Reporta los problemas a tu líder."],
          words: [["Lista de empaque", "una lista de lo que viene en un envío."], ["Orden de compra (PO)", "el pedido del comprador que muestra qué se compró y cuánto."], ["Conocimiento de embarque (BOL)", "el documento de envío que da el transportista; al firmarlo dices que recibiste la mercancía."], ["Faltante", "llegaron menos artículos de los que dicen los documentos."], ["Sobrante", "llegaron más artículos de los que dicen los documentos."], ["Conteo cíclico", "contar algunas ubicaciones a la vez para mantener los registros correctos."]],
          slides: [
            { title: "Lo que revisa recepción", bullets: ["SKU correcto", "Cantidad correcta", "Buen estado"] },
            { title: "Problemas que se anotan", bullets: ["Faltante: menos de lo que dice la lista", "Sobrante: más de lo que dice la lista", "Daño: aplastado, mojado o abierto"] },
            { title: "Antes de firmar", bullets: ["Anota cada problema", "Sigue el proceso de tu lugar de trabajo", "Una firma sin notas puede decir que todo estaba bien"] },
            { title: "Contar inventario", bullets: ["Conteo cíclico: algunos lugares cada día", "¿No coincide? Cuenta otra vez y luego reporta", "Primero la precisión, luego la rapidez"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Solo práctica. La lista de empaque dice: SKU 1001, 12 cajas; SKU 1002, 8 cajas; SKU 1003, 20 cajas. Cuentas 12 de 1001, 6 de 1002 y 21 de 1003, con una caja de 1003 aplastada. Escribe un reporte de recepción: cada línea, lo esperado, lo que llegó y el problema. Respuesta: 1002 con faltante de 2; 1003 con sobrante de 1 y 1 dañada.",
          youCanNow: "revisar una entrega contra su lista de empaque y anotar faltantes, sobrantes y daños.",
          quickCheck: [
            { objective: "O3", q: "La lista de empaque dice 10 cajas, pero llegaron 8. ¿Cómo se llama esto?", options: ["Un sobrante", "Un faltante", "Un conteo cíclico", "Un acomodo"], answer: 1, why: "Si llegan menos artículos de los que dicen los documentos, es un faltante." },
            { objective: "O3", q: "Una caja de la entrega está mojada y rota. ¿Qué haces?", options: ["Anotas el daño en los documentos antes de firmar, como indique el proceso de tu lugar de trabajo", "Firmas el documento y no dices nada", "Tiras la caja", "La escondes al fondo"], answer: 0, why: "El daño se debe anotar para poder reclamarlo y que no se le culpe al almacén." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funciona un almacén",
        questions: [
          { objective: "O1", q: "¿Qué necesitas antes de operar un montacargas en un almacén?", options: ["Solo una tarjeta en línea", "Nada", "Una licencia de auto", "La capacitación y la evaluación del propio empleador"], answer: 3, why: "OSHA exige que el empleador capacite y evalúe a cada operador de montacargas." },
          { objective: "O1", q: "¿Qué es cierto sobre la tarjeta de 10 horas de OSHA?", options: ["Es una licencia de montacargas", "Es una capacitación voluntaria y no es una certificación", "La ley la exige para todo trabajo", "La otorga el MSSC"], answer: 1, why: "OSHA dice que la capacitación Outreach es voluntaria y no es una certificación." },
          { objective: "O2", q: "En el código A-12-03-B, ¿qué es lo más probable que sea el 12?", options: ["El pasillo", "El precio", "El SKU", "El peso"], answer: 0, why: "En un formato zona-pasillo-rack-nivel, la segunda parte es el pasillo." },
          { objective: "O2", q: "¿Qué paso viene justo después de la recepción?", options: ["Envío", "Empaque", "Acomodo", "Surtido"], answer: 2, why: "Después de recibir la mercancía, se acomoda en su lugar de almacenamiento." },
          { objective: "O3", q: "Tu conteo cíclico da 14, pero el sistema dice 16. ¿Qué haces primero?", options: ["Cambias el sistema a 14", "Escribes 16 para que coincida", "Lo ignoras", "Cuentas otra vez y, si sigue sin coincidir, lo reportas"], answer: 3, why: "Primero vuelve a contar; si sigue sin coincidir, repórtalo para que se revise." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabajar con seguridad y conseguir empleo",
      lessons: [
        {
          title: "Levantar con seguridad y los peligros del almacén",
          objectives: ["O5"],
          minutes: 5,
          goal: "Elegir la forma segura de levantar, mover y reportar peligros en un almacén.",
          text: [
            "OSHA nombra los principales peligros de un almacén: montacargas y otros vehículos motorizados, levantar cargas y movimientos repetitivos, manejo de materiales, químicos, resbalones, tropiezos y caídas, y robots y bandas transportadoras. Las lesiones más comunes son esfuerzos excesivos al levantar y golpes de montacargas.",
            "Levanta con inteligencia. Planea el levantamiento y el camino. Acércate a la carga, dobla las rodillas, mantén la espalda recta y la carga cerca del cuerpo, y no gires la cintura: gira con los pies. Usa un carrito, un diablito o un gato para tarimas cuando puedas. Para cosas pesadas o difíciles de agarrar, pide un levantamiento en equipo.",
            "Cerca del equipo: quédate en los pasillos peatonales, haz contacto visual con los conductores de montacargas y nunca pases debajo de horquillas levantadas. Mantén las manos lejos de las bandas transportadoras en movimiento. Con calor, toma agua seguido, toma tus descansos y avisa a alguien si te sientes mareado o mal.",
            "El ritmo importa, pero nunca tomes un atajo inseguro. Reporta de inmediato a tu líder peligros como derrames, racks dañados o salidas bloqueadas."
          ],
          steps: ["Planea: ¿cuánto pesa, a dónde va, está libre el camino?", "Acércate, dobla las rodillas, espalda recta.", "Levanta con las piernas, con la carga cerca del cuerpo.", "Gira con los pies; no gires la cintura.", "Para cargas pesadas, usa un carrito o un gato para tarimas, o pide un levantamiento en equipo.", "Reporta los peligros de inmediato."],
          words: [["Ergonomía", "adaptar el trabajo al cuerpo para evitar esfuerzos y lesiones."], ["Gato para tarimas", "una herramienta manual o motorizada que levanta y mueve tarimas una distancia corta."], ["Levantamiento en equipo", "dos o más personas levantando juntas una cosa pesada o difícil de agarrar."], ["Enfermedad por calor", "malestar por trabajar con calor, como el agotamiento por calor o el golpe de calor."]],
          slides: [
            { title: "Principales peligros del almacén", bullets: ["Montacargas y vehículos motorizados", "Levantar cargas y movimientos repetitivos", "Resbalones, tropiezos, caídas, bandas, calor"] },
            { title: "Levanta con inteligencia", bullets: ["Planea, acércate, dobla las rodillas", "Carga cerca; gira con los pies", "Carrito, gato para tarimas o levantamiento en equipo"] },
            { title: "Cerca del equipo", bullets: ["Quédate en el pasillo peatonal; mira al conductor", "Nunca debajo de horquillas levantadas", "Manos lejos de las bandas en movimiento"] },
            { title: "Ritmo seguro", bullets: ["Agua y descansos con calor", "Ningún atajo inseguro", "Reporta los peligros de inmediato"] }
          ],
          sources: [OSHA_WAREHOUSE, OSHA_WH_HAZARDS, OSHA_HEAT],
          tryIt: "Practica en casa con una caja vacía o con poco peso. Levántala siguiendo cada paso y di cada paso en voz alta. Luego escribe tres peligros que podrías ver en un almacén y qué harías con cada uno.",
          youCanNow: "levantar y mover cosas con seguridad y reportar los peligros del almacén de la forma correcta.",
          quickCheck: [
            { objective: "O5", q: "Tienes que girar mientras cargas una caja. ¿Cómo lo haces?", options: ["Giras la cintura", "Giras con los pies", "Avientas la caja", "Primero la levantas sobre la cabeza"], answer: 1, why: "Girar con los pies protege la espalda; girar la cintura al cargar causa lesiones." },
            { objective: "O5", q: "Ves un montacargas que viene por tu pasillo. ¿Qué es lo más seguro?", options: ["Caminar rápido detrás de él", "Pasar debajo de las horquillas levantadas", "Quedarte en el pasillo peatonal y hacer contacto visual con el conductor", "Saludar y seguir caminando en su camino"], answer: 2, why: "Los pasillos peatonales y el contacto visual ayudan a que el conductor te vea y te mantienen fuera de su camino." }
          ]
        },
        {
          title: "Armar una carga segura en tarima",
          objectives: ["O4"],
          minutes: 6,
          goal: "Planear una carga en tarima con lo pesado abajo, capas parejas y un total dentro del límite de peso.",
          text: [
            "Una buena tarima llega completa y mantiene a las personas seguras. Primero revisa la tarima misma: sin tablas rotas ni clavos salidos.",
            "Las cajas pesadas van abajo y las más ligeras arriba. Haz capas parejas y planas. Mantén las cajas dentro de los bordes de la tarima (que nada sobresalga). Gira cada segunda capa para que las cajas se crucen entre sí (esto se llama entrelazar); ayuda a que la pila se mantenga unida. Respeta los límites de altura y peso de tu lugar de trabajo.",
            "Suma el peso. Ejemplo (solo práctica): 20 cajas de 25 lb (libras) cada una son 500 lb, más una tarima de unas 40 lb dan 540 lb. Revisa que esté por debajo del límite de la tarima, del rack y del equipo.",
            "Envuelve la carga con película estirable, apretada de abajo hacia arriba, y envuélvela junto con la tarima. Pon las etiquetas hacia afuera, donde se puedan escanear. Antes de cargar los camiones, se ponen los frenos del remolque y se calzan sus ruedas; las cargas se reparten de forma pareja dentro del remolque."
          ],
          steps: ["Revisa la tarima: sin tablas rotas ni clavos.", "Las cajas más pesadas en la capa de abajo.", "Capas parejas, dentro de los bordes, entrelazadas.", "Suma el peso total y revisa los límites.", "Envuelve apretado con película estirable, de abajo hacia arriba, incluida la tarima.", "Etiquetas hacia afuera."],
          words: [["Tarima", "una base plana de madera o plástico donde se apila la mercancía para moverla junta (también se dice palé o pallet)."], ["Entrelazar", "girar cada capa de cajas para que se crucen con la capa de abajo."], ["Sobresaliente", "cajas que quedan fuera del borde de la tarima."], ["Película estirable", "plástico delgado que se enrolla alrededor de una carga para mantenerla unida."]],
          slides: [
            { title: "Empieza bien", bullets: ["Revisa que la tarima no tenga tablas rotas ni clavos", "Las cajas más pesadas abajo"] },
            { title: "Apila bien", bullets: ["Capas parejas y planas", "Nada sobresale", "Entrelaza las capas"] },
            { title: "Revisa el peso", bullets: ["Cajas x peso, más la tarima", "Por debajo del límite de la tarima, el rack y el equipo"] },
            { title: "Termina bien", bullets: ["Envuelve apretado, de abajo hacia arriba", "Etiquetas hacia afuera"] }
          ],
          sources: [OSHA_WH_HAZARDS, OSHA_178],
          tryIt: "Solo práctica. Tienes 8 cajas de 50 lb, 12 cajas de 20 lb y 6 cajas de 10 lb. Dibuja la tarima vista de lado: qué cajas van en cada capa. Suma el peso total con una tarima de 40 lb y revisa que esté por debajo de un límite de 1,000 lb. Respuesta: 400 + 240 + 60 + 40 = 740 lb.",
          youCanNow: "planear una carga segura en tarima con lo pesado abajo, capas parejas y un total dentro del límite.",
          quickCheck: [
            { objective: "O4", q: "¿Dónde van las cajas más pesadas en una tarima?", options: ["En la capa de arriba", "Sobresaliendo del borde", "Solo en la capa del medio", "En la capa de abajo"], answer: 3, why: "Lo pesado abajo mantiene estable la carga y protege las cajas más ligeras." },
            { objective: "O4", q: "Práctica: 30 cajas de 20 lb en una tarima de 40 lb. ¿Cuál es el peso total?", options: ["640 lb", "600 lb", "540 lb", "60 lb"], answer: 0, why: "30 x 20 = 600 lb, más la tarima de 40 lb = 640 lb." }
          ]
        },
        {
          title: "Conseguir empleo y crecer",
          objectives: ["O1", "O5"],
          minutes: 5,
          goal: "Escribir un plan para conseguir empleo con empleadores, una meta de credencial y líneas honestas para tu currículum.",
          text: [
            "Dónde buscar: los sitios de empleo de grandes tiendas y empresas de envíos, bolsas de trabajo locales, agencias de empleo y tu American Job Center local (una oficina pública y gratuita de empleo en EE. UU.), que en algunos casos también puede ayudar a pagar capacitación y credenciales. Muchos almacenes contratan a personas con antecedentes; pregunta en el centro de empleo por empleadores de segunda oportunidad.",
            "Lo que buscan los empleadores: puntualidad, conteos cuidadosos, hábitos seguros y un ritmo constante. Los almacenes a menudo miden tu productividad, como los surtidos por hora. Cúmplela trabajando con inteligencia (por recorrido, escaneando con cuidado) y nunca saltándote la seguridad.",
            "Adapta tu currículum al trabajo. Usa verbos de acción y ejemplos reales: \"Conté y revisé entregas contra listas de empaque\" o \"Completé una capacitación en seguridad y logística de almacén (Koach Learn), 2026\". Veteranos: las tareas de suministros, parque vehicular y logística cuentan, así que escríbelas con palabras de todos los días.",
            "Planea tu crecimiento. Una credencial como el CLA del MSSC, luego el CLT, y la capacitación de montacargas del empleador pueden llevarte a puestos mejor pagados, como líder, control de inventario o coordinador de logística."
          ],
          steps: ["Haz una lista de tres empleadores o programas cerca de ti, incluido tu American Job Center.", "Elige una meta de credencial (por ejemplo el CLA del MSSC) y una fecha.", "Escribe dos líneas honestas para tu currículum, de este curso o de trabajos anteriores.", "Practica una respuesta de 30 segundos: \"¿Cómo te mantienes preciso y seguro a un ritmo rápido?\""],
          words: [["Productividad", "cuánto trabajo haces en un tiempo fijo, como los surtidos por hora."], ["American Job Center", "una oficina pública y gratuita que ayuda a las personas a encontrar empleo y capacitación."], ["Empleador de segunda oportunidad", "una empresa que contrata a personas con antecedentes penales."]],
          slides: [
            { title: "Dónde buscar", bullets: ["Sitios de empleo de empresas y bolsas de trabajo", "Agencias de empleo", "Tu American Job Center local"] },
            { title: "Lo que buscan los empleadores", bullets: ["Puntual, preciso, seguro", "Cumple la productividad trabajando con inteligencia", "Nunca saltándote la seguridad"] },
            { title: "Tu currículum", bullets: ["Verbos de acción y ejemplos reales", "Honesto sobre capacitaciones y credenciales", "Veteranos: traduce tus tareas de suministros y logística"] },
            { title: "Crece", bullets: ["CLA del MSSC, luego el CLT", "Capacitación de montacargas del empleador", "Líder, control de inventario, coordinador"] }
          ],
          sources: [AJC, MSSC_CLT, BLS_MOVERS],
          tryIt: "Escribe tu plan para conseguir empleo: tres empleadores o programas cerca de ti, tu meta de credencial y la fecha, dos líneas honestas para tu currículum y tu respuesta de 30 segundos a \"¿Cómo te mantienes preciso y seguro a un ritmo rápido?\" Lee la respuesta en voz alta.",
          youCanNow: "escribir un plan para conseguir empleo en un almacén, con una meta de credencial y líneas honestas para tu currículum.",
          quickCheck: [
            { objective: "O5", q: "Vas atrasado en tu productividad de surtidos por hora. ¿Cuál es la forma correcta de ponerte al día?", options: ["No escanear para ir más rápido", "Correr en los pasillos", "Surtir por recorrido y escanear con cuidado", "Trepar los racks en lugar de usar una escalera"], answer: 2, why: "Trabajar con inteligencia ahorra tiempo; los atajos inseguros causan lesiones y errores." },
            { objective: "O1", q: "¿Qué línea de currículum es honesta y fuerte?", options: ["\"Certificado CLT del MSSC\" (antes de aprobarlo)", "\"Muy trabajador\"", "\"Certificado en montacargas\" (sin evaluación del empleador)", "\"Conté y revisé entregas contra listas de empaque\""], answer: 3, why: "Usa un verbo de acción y una tarea real, y no dice nada que no tengas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Trabajar con seguridad y conseguir empleo",
        questions: [
          { objective: "O5", q: "Una caja pesa demasiado para levantarla solo. ¿Qué haces?", options: ["La levantas rápido antes de que duela", "Usas un carrito o un gato para tarimas, o pides un levantamiento en equipo", "La arrastras con la espalda doblada", "La dejas en el pasillo"], answer: 1, why: "Usa equipo o un levantamiento en equipo para cargas pesadas y así evitar lesiones de espalda." },
          { objective: "O5", q: "Ves un derrame en un pasillo. ¿Qué es lo correcto?", options: ["Le das la vuelta y no dices nada", "Esperas a que alguien más lo vea", "Mantienes a la gente lejos y lo reportas de inmediato", "Lo tapas con una caja"], answer: 2, why: "Reporta los peligros de inmediato para que se limpien antes de que alguien se resbale." },
          { objective: "O4", q: "¿Para qué sirve entrelazar las capas de una tarima?", options: ["Ayuda a que la pila se mantenga unida", "La hace más pesada", "Esconde las etiquetas", "Deja que las cajas sobresalgan del borde"], answer: 0, why: "Las capas cruzadas amarran la pila para que no se separe." },
          { objective: "O4", q: "¿Qué tarima está lista para moverse?", options: ["Cajas que sobresalen del borde", "Cajas ligeras abajo", "Suelta, sin envolver", "Cajas pesadas abajo, capas parejas, envuelta, etiquetas hacia afuera"], answer: 3, why: "Cumple todas las reglas: lo pesado abajo, parejo, envuelta y etiquetada." },
          { objective: "O1", q: "¿Qué oficina te puede ayudar gratis a encontrar empleo y capacitación en almacenes?", options: ["Tu American Job Center local", "Una taquilla", "El DMV (la oficina de licencias de manejo)", "Un banco"], answer: 0, why: "Los American Job Centers son oficinas públicas y gratuitas de empleo y capacitación." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Carreras en almacenes y logística",
    questions: [
      { objective: "O1", q: "¿Qué trabajo prepara pedidos de clientes sacando artículos de los estantes?", options: ["Empleado de recepción", "Surtidor", "Mecánico de camiones", "Guardia de seguridad"], answer: 1, why: "Los surtidores sacan artículos del almacenamiento para preparar pedidos." },
      { objective: "O1", q: "¿Qué credencial debes aprobar antes de presentar el CLT del MSSC?", options: ["Una CDL (licencia de manejo comercial)", "La tarjeta de 30 horas de OSHA", "El Certified Logistics Associate (CLA) del MSSC", "Una tarjeta de montacargas"], answer: 2, why: "El MSSC exige el CLA antes de la evaluación del CLT." },
      { objective: "O1", q: "¿Dónde debes revisar el pago y las perspectivas de los trabajos de almacén?", options: ["El Occupational Outlook Handbook en bls.gov", "Una publicación en redes sociales", "Lo que adivine un amigo", "Un videojuego"], answer: 0, why: "El manual de la BLS es la fuente oficial de pago y perspectivas." },
      { objective: "O2", q: "¿Cuál es el orden correcto del flujo de la mercancía?", options: ["Envío, surtido, recepción", "Empaque, recepción, acomodo", "Surtido, recepción, almacenamiento", "Recepción, acomodo, almacenamiento, surtido, empaque, envío"], answer: 3, why: "La mercancía entra, se guarda, y luego se surte, se empaca y se envía." },
      { objective: "O2", q: "Práctica: ¿cuál es la primera ubicación en el orden de recorrido?", options: ["B-02-01-A", "A-07-04-C", "A-02-06-B", "B-01-01-A"], answer: 2, why: "Ordena por zona y luego por pasillo: zona A pasillo 02 va antes que A pasillo 07 y que toda la zona B." },
      { objective: "O2", q: "¿Por qué escaneas la ubicación y el artículo al surtir?", options: ["Para que el sistema sepa exactamente qué se movió", "Para ir más lento", "Para ver la hora", "Solo por diversión"], answer: 0, why: "Escanear mantiene correctos los registros del sistema de gestión de almacén." },
      { objective: "O2", q: "El lugar de tu SKU está vacío. ¿Qué haces?", options: ["Tomas cualquier artículo cercano", "Se lo reportas a tu líder", "Marcas el pedido como completo", "Dejas la línea en blanco y no dices nada"], answer: 1, why: "Un lugar vacío se reporta para que se encuentre la mercancía y se corrijan los registros." },
      { objective: "O3", q: "¿Qué es un conocimiento de embarque?", options: ["Una lista del súper", "Un letrero de seguridad", "Un talón de pago", "El documento de envío que firmas al recibir una entrega"], answer: 3, why: "El conocimiento de embarque es el documento de envío del transportista." },
      { objective: "O3", q: "La lista dice 15 cajas; llegaron 17. ¿Qué es?", options: ["Un sobrante", "Un faltante", "Un daño", "Un acomodo"], answer: 0, why: "Más de lo que dicen los documentos es un sobrante." },
      { objective: "O3", q: "¿Qué tres cosas revisas en cada línea al recibir?", options: ["Color, tamaño y olor", "SKU correcto, cantidad correcta, buen estado", "Precio, impuesto y propina", "Nombre del chofer, color del camión, hora"], answer: 1, why: "Recepción revisa el artículo, la cantidad y el estado." },
      { objective: "O3", q: "¿Qué es un conteo cíclico?", options: ["Contar bicicletas", "Contar todo el almacén solo una vez al año", "Contar algunas ubicaciones a la vez para mantener los registros correctos", "Contar tus horas"], answer: 2, why: "Los conteos cíclicos revisan algunos lugares cada día para que los registros sigan correctos." },
      { objective: "O4", q: "¿Qué revisas primero al armar una tarima?", options: ["El color de la etiqueta", "Que la tarima no tenga tablas rotas ni clavos salidos", "El clima", "El radio del camión"], answer: 1, why: "Una tarima dañada se puede romper y tirar la carga." },
      { objective: "O4", q: "Práctica: 10 cajas de 30 lb y 10 cajas de 15 lb en una tarima de 40 lb. ¿Total?", options: ["450 lb", "300 lb", "490 lb", "45 lb"], answer: 2, why: "300 + 150 + 40 = 490 lb." },
      { objective: "O4", q: "¿Por qué las cajas no deben sobresalir del borde de la tarima?", options: ["Lo que sobresale aplasta cajas y puede hacer inestable la carga", "Solo se ve desordenado", "Hace la carga más ligera", "Es más rápido de envolver"], answer: 0, why: "Las cajas que sobresalen pierden apoyo, se aplastan y pueden hacer que la carga se caiga." },
      { objective: "O4", q: "¿Cómo se pone la película estirable?", options: ["Solo alrededor de la capa de arriba", "Floja, para que se quite fácil", "Sobre las etiquetas para que no se puedan leer", "Apretada, de abajo hacia arriba, y también alrededor de la tarima"], answer: 3, why: "Envolver apretado y junto con la tarima mantiene unida toda la carga." },
      { objective: "O5", q: "Según OSHA, ¿cuáles son las lesiones más comunes en un almacén?", options: ["Cortadas con papel", "Esfuerzos excesivos al levantar y golpes de montacargas", "Quemaduras de sol", "Cansancio de la vista por pantallas"], answer: 1, why: "OSHA nombra los esfuerzos al levantar y los golpes de vehículos motorizados como los más comunes." },
      { objective: "O5", q: "¿Cómo debes levantar una caja del piso?", options: ["Acércate, dobla las rodillas, mantén la espalda recta y la carga cerca", "Dóblate de la cintura con las piernas rectas", "Gira mientras levantas", "Sostenla lejos del cuerpo"], answer: 0, why: "Usar las piernas y mantener la carga cerca protege la espalda." },
      { objective: "O5", q: "Hace mucho calor en el almacén y te sientes mareado. ¿Qué haces?", options: ["Sigues trabajando para cumplir tu productividad", "Te saltas el descanso", "Le avisas a alguien, tomas agua y descansas en un lugar fresco", "Te vas a casa sin avisar a nadie"], answer: 2, why: "El mareo puede ser una enfermedad por calor; avisa, refréscate y toma agua." },
      { objective: "O5", q: "¿Cuál es la forma segura de mantener tu productividad?", options: ["No escanear", "Subirte a un gato para tarimas", "Trepar los racks para alcanzar artículos", "Trabajar con inteligencia: por recorrido, escaneos cuidadosos, sin atajos inseguros"], answer: 3, why: "Los métodos inteligentes ahorran tiempo sin arriesgar lesiones ni errores." },
      { objective: "O1", q: "¿Qué es cierto sobre la tarjeta Outreach de 10 horas de OSHA?", options: ["Es una capacitación voluntaria y OSHA dice que no es una certificación", "Te permite conducir cualquier montacargas", "Es lo mismo que el CLT del MSSC", "La ley federal la exige para todo trabajo de almacén"], answer: 0, why: "OSHA dice que las clases Outreach son voluntarias y que ninguna es una certificación." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 8, 9, 11, 12, 15, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a revisar.",
    criteria: [
      { name: "Reporte de recepción", objective: "O3", notYet: "Un conteo está mal o falta un faltante, un sobrante o un daño.", meets: "Cada línea muestra lo esperado y lo recibido, y cada problema está anotado.", exceeds: "También dice qué hacer antes de firmar el conocimiento de embarque y a quién avisar." },
      { name: "Lista de surtido por recorrido", objective: "O2", notYet: "Las ubicaciones están desordenadas o un código está mal leído.", meets: "Todo el surtido está ordenado por zona, pasillo, rack y nivel, y cada código está bien leído.", exceeds: "Explica qué hacer si un artículo no coincide o un lugar está vacío." },
      { name: "Plan de carga en tarima", objective: "O4", notYet: "Cajas pesadas arriba, cajas que sobresalen, o el peso total está mal o pasa el límite.", meets: "Cajas pesadas abajo, capas parejas y entrelazadas, total correcto por debajo del límite, envuelta y etiquetada.", exceeds: "Agrega la revisión de la tarima y los pasos de seguridad del remolque." },
      { name: "Plan para conseguir empleo", objective: "O1", notYet: "No hay empleadores, no hay meta de credencial, o una línea del currículum dice algo falso.", meets: "Tres empleadores o programas, una credencial real con quién la otorga y una fecha, dos líneas honestas para el currículum.", exceeds: "Incluye una respuesta de 30 segundos practicada sobre precisión y seguridad." },
      { name: "Trabajo seguro", objective: "O5", notYet: "El plan sugiere atajos inseguros para cumplir la productividad.", meets: "La respuesta de 30 segundos y el plan ponen la seguridad primero, con levantamiento seguro y reporte de peligros.", exceeds: "Nombra un peligro específico de la página de almacenes de OSHA y cómo prevenirlo." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y un paquete inicial que cumple la rúbrica",
      "Participantes que solicitan al menos tres trabajos de almacén en 30 días (encuesta de seguimiento)",
      "Participantes contratados en puestos de almacén o logística en 90 días (reportes de socios y de seguimiento)",
      "Participantes que se inscriben al CLA del MSSC o empiezan la capacitación de montacargas del empleador"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, lápiz y una calculadora (la del teléfono sirve)",
      "Un teléfono o una computadora con internet para buscar empleo y ver páginas oficiales",
      "Opcional: algunas cajas vacías o notas adhesivas para practicar capas de tarima y rutas de surtido",
      "Unos 60 minutos en total"
    ],
    facilitatorNotes: [
      "Arma un mini almacén con estantes etiquetados (notas adhesivas como A-01-01-A) y haz una carrera de surtido con tiempo, calificada primero por precisión.",
      "Usa una lista de empaque de práctica impresa y una caja con artículos variados para la actividad de recepción.",
      "Practiquen levantar solo con cajas vacías o ligeras.",
      "Invita a un supervisor de un almacén local o a personal del American Job Center a hablar sobre contratación, productividad y empleadores de segunda oportunidad.",
      "Califica el paquete inicial con la rúbrica y revisa una fila en Todavía no a la vez."
    ]
  }
};
