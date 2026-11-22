"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-tailoring-fashion-business.js). See scripts/koachlearn-courses/README.md, "Translations".

const KE_BRS = { name: "Business Registration Service (Kenia): registro del nombre comercial a través de eCitizen", url: "https://brs.go.ke/" };
const NG_CAC = { name: "Corporate Affairs Commission (Nigeria): registro de nombres comerciales y de empresas", url: "https://www.cac.gov.ng/" };
const GH_ORC = { name: "Office of the Registrar of Companies (Ghana): nombres comerciales (empresas individuales)", url: "https://orc.gov.gh/" };

module.exports = {
  id: "afr-tailoring-fashion-business-es",
  lang: "es",
  translationOf: "afr-tailoring-fashion-business",
  category: "Africa: Life and Work",
  name: "Cómo llevar un negocio de sastrería y moda",
  skills: "Mantener un taller seguro, Tomar medidas y usar fichas de pedido, Calcular el costo y el precio de una prenda, Planificar pedidos y fechas de entrega, Llevar el registro del dinero con seguridad, Mostrar tu trabajo a los clientes",
  outcome: "llevar tu trabajo de costura como un negocio: mantener un taller seguro, tomar pedidos en una ficha clara, poner a cada prenda un precio que deje ganancia, planificar tu semana para entregar a tiempo, llevar el registro del dinero y mostrar tu trabajo a nuevos clientes.",
  about: [
    "Muchos sastres y costureras cosen muy bien, pero aun así les cuesta salir adelante: un precio que no cubre el forro y el hilo, un cliente que nunca vuelve a recoger su ropa, tres pedidos de boda para el mismo sábado, un anticipo que nadie anotó. Este curso es para sastres, costureras, diseñadores de moda y aprendices de pueblos y ciudades de Kenia, Nigeria, Ghana, Senegal, Costa de Marfil, Camerún, Marruecos y toda África.",
    "Harás tu taller más seguro, usarás una ficha de pedido para cada trabajo, calcularás cuánto cuesta de verdad una prenda y cuánto cobrar, planificarás tu semana según tus horas, llevarás un cuaderno de dinero sencillo, protegerás tu dinero móvil de las estafas, sabrás cómo registrar el nombre de tu negocio y mostrarás tu trabajo en WhatsApp o en tu tienda.",
    "Este curso trata de cómo llevar el negocio, no de técnicas de costura. Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\" para tu propio taller. Todas las cifras de dinero son ejemplos, no precios reales."
  ],
  finalTask: "Prepara un paquete inicial para tu negocio de sastrería: una lista de precios de al menos cinco prendas que haces, cada una con su costo calculado; una ficha de pedido en blanco que usarás para cada trabajo; un plan para una semana con mucho trabajo que se ajuste a tus horas reales; una página del cuaderno de dinero con anticipos y gastos; y una publicación o artículo de catálogo que muestre una prenda terminada, con su precio y cómo pedirla.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Sastres, costureras, diseñadores de moda, aprendices y jóvenes que terminan su aprendizaje, en pueblos y ciudades de toda África. Muchos trabajan solos o con uno o dos ayudantes, en una tienda pequeña, un puesto de mercado o en casa.",
    startingPoint: "Saben coser y terminar prendas, y ya reciben algunos pedidos de familiares, vecinos y miembros de su iglesia o mezquita. La mayoría pone precios por costumbre o según lo que cobran otros, anota las medidas en papelitos y lleva el dinero en la cabeza o en un solo bolsillo.",
    gap: "Sin calcular costos, sin fichas de pedido, sin un plan semanal y sin registros de dinero, los sastres pierden dinero con trabajos mal cobrados, no cumplen las fechas en temporada alta, discuten con los clientes sobre lo acordado y no pueden mostrar a un prestamista o a un cliente grande cómo va el negocio. Estas herramientas sencillas convierten la habilidad de coser en un ingreso estable.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; muchos estudiantes hablan el idioma del curso como segunda lengua",
      "Dispositivos: un teléfono básico o un smartphone, a menudo con datos caros; un cuaderno, un bolígrafo y una calculadora",
      "Dinero: presupuestos pequeños; no hace falta software ni equipo caro",
      "Normas: las reglas y tarifas para registrar un negocio cambian según el país y con el tiempo; los estudiantes consultan el registro oficial de su país",
      "Tiempo: lecciones de 4 a 6 minutos que caben entre cliente y cliente"
    ],
    prerequisites: "Saber coser al menos un tipo de prenda de principio a fin. Saber sumar, multiplicar y dividir."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con tu propio espacio de costura, tu máquina y tus herramientas", action: "revisar un taller de costura en busca de riesgos de agujas, tijeras, planchas, electricidad e incendio, y corregirlos", standard: "encontrando y corrigiendo al menos tres riesgos" },
    { id: "O2", condition: "Ante un cliente que quiere que le hagan una prenda", action: "tomar las medidas del cliente y llenar una ficha de pedido con el modelo, la tela, el precio, el anticipo y la fecha de entrega", standard: "con todas las partes llenas y leídas en voz alta al cliente" },
    { id: "O3", condition: "Con los materiales, el tiempo y los gastos fijos de una prenda", action: "calcular el costo total de la prenda y fijar un precio que lo cubra con ganancia", standard: "contando los materiales, tu tiempo y los gastos fijos, y comparando con el mercado local" },
    { id: "O4", condition: "Con tus pedidos pendientes y las horas que puedes trabajar", action: "planificar una semana de pedidos con fechas de entrega realistas", standard: "sin aceptar más trabajo del que permiten tus horas, y dejando tiempo para pruebas y temporadas altas" },
    { id: "O5", condition: "Con una semana de anticipos, pagos y gastos", action: "anotar el dinero que entra y el que sale en un cuaderno de dinero y reconocer las estafas de dinero móvil", standard: "con el saldo correcto y sin compartir nunca un PIN" },
    { id: "O6", condition: "Con una prenda terminada y un teléfono", action: "hacer una publicación o un artículo de catálogo que muestre la prenda, su precio y cómo pedirla", standard: "con una foto clara y sin mostrar datos privados de ningún cliente sin su permiso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Pedidos que dejan ganancia",
      lessons: [
        {
          title: "Un taller seguro y ordenado",
          objectives: ["O1"],
          minutes: 5,
          goal: "Revisar tu taller en busca de riesgos y corregir al menos tres.",
          text: [
            "Tus manos, tus ojos y tu espalda son tu negocio. Una lesión puede detener tu trabajo durante semanas, y un incendio puede quemar la tela de todos tus clientes. Unos pocos hábitos te protegen a ti y a tus aprendices.",
            "Herramientas filosas: aleja los dedos de la aguja y usa el prensatelas; nunca cosas por encima de los alfileres; guarda tijeras, cuchillas y descosedores en un solo lugar, con la punta hacia abajo; guarda agujas y alfileres en un alfiletero o una lata, nunca en la boca. Tira las agujas rotas en una lata cerrada, no al suelo, donde caminan niños y clientes.",
            "Calor y electricidad: nunca dejes sola una plancha caliente ni una plancha de carbón, y ponla donde no pueda caerse; mantén la tela y el papel lejos de ella. Revisa que los cables de la máquina y de la plancha no tengan cortes ni enchufes flojos. No sobrecargues un tomacorriente con muchos enchufes. Desenchufa máquinas y planchas al cerrar. Ten cerca de la puerta un balde con arena o agua, o un extintor si puedes.",
            "Tu cuerpo: siéntate con la espalda apoyada y la mesa a la altura de los codos, usa buena luz, y levántate y estírate cada hora. Mantén los pasillos libres de rollos de tela y cables para que nadie se tropiece."
          ],
          steps: ["Recorre tu taller despacio.", "Busca herramientas filosas, planchas calientes, cables dañados, tomacorrientes sobrecargados, cosas con las que tropezar y poca luz.", "Anota cada riesgo que encuentres.", "Corrige tres hoy, por ejemplo una lata para alfileres, un soporte seguro para la plancha y pasillos libres.", "Enseña las mismas reglas a tus aprendices."],
          words: [["Prensatelas", "la parte de la máquina de coser que sujeta la tela plana bajo la aguja."], ["Tomacorriente sobrecargado", "demasiados enchufes en una sola toma; puede calentarse y causar un incendio."], ["Aprendiz", "una persona joven que aprende el oficio trabajando contigo."]],
          slides: [
            { title: "Tu cuerpo es tu negocio", bullets: ["Una lesión puede detener el trabajo durante semanas", "Un incendio puede quemar la tela de todos tus clientes", "Hábitos sencillos te protegen"] },
            { title: "Herramientas filosas", bullets: ["Dedos lejos de la aguja; nunca cosas sobre alfileres", "Tijeras y cuchillas en un solo lugar, punta hacia abajo", "Alfileres en un alfiletero o una lata, nunca en la boca"] },
            { title: "Calor y electricidad", bullets: ["Nunca dejes sola una plancha caliente o de carbón", "Revisa los cables; no sobrecargues los tomacorrientes", "Desenchufa al cerrar; arena, agua o extintor junto a la puerta"] },
            { title: "Tu cuerpo y tu espacio", bullets: ["Espalda apoyada, buena luz", "Levántate y estírate cada hora", "Pasillos libres: sin rollos de tela ni cables en el suelo"] }
          ],
          tryIt: "Recorre tu taller ahora. Anota cada riesgo que veas. Corrige tres hoy mismo y márcalos en tu lista.",
          youCanNow: "revisar tu taller en busca de riesgos de herramientas filosas, calor, electricidad y tropiezos, y corregirlos.",
          quickCheck: [
            { objective: "O1", q: "¿Dónde debes guardar los alfileres mientras trabajas?", options: ["En un alfiletero o una lata", "En la boca, para tenerlos a mano", "En el suelo junto a tu silla", "Dentro del rollo de tela"], answer: 0, why: "Un alfiletero o una lata mantiene los alfileres lejos de tu boca, del suelo y de la tela del cliente." },
            { objective: "O1", q: "Hay cinco enchufes en un solo tomacorriente y se siente caliente. ¿Qué haces?", options: ["Seguir; es normal", "Desenchufar algunos y repartirlos, o usar una extensión segura", "Echarle agua para enfriarlo", "Taparlo con una tela"], answer: 1, why: "Un tomacorriente caliente y sobrecargado puede causar un incendio; reduce la carga y nunca uses agua cerca de la electricidad." }
          ]
        },
        {
          title: "Las medidas y la ficha de pedido",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tomar las medidas de un cliente y llenar una ficha de pedido completa.",
          text: [
            "Muchas discusiones con los clientes empiezan porque no se anotó nada. \"Te dije manga larga.\" \"Dijiste viernes.\" \"Te pagué la mitad.\" Una ficha de pedido evita esto. Es una hoja o una tarjeta para cada trabajo, con una copia o una foto para el cliente.",
            "Una ficha de pedido muestra: el nombre y el teléfono del cliente; la fecha; el modelo (un dibujo o una foto del modelo que quiere); las medidas; la tela (quién la trae, cuántas yardas o metros, y un retazo pequeño engrapado); el precio, el anticipo pagado y el saldo; la fecha de prueba y la fecha de entrega; y tu firma y la del cliente.",
            "Toma las medidas siempre de la misma manera, en el mismo orden y con una buena cinta métrica. Escribe la unidad (cm o pulgadas). Lee las medidas y los detalles en voz alta al cliente antes de que se vaya. Para un pedido de aso ebi (telas iguales para un grupo en una fiesta) en Lagos, un kaba y slit (traje de dos piezas) en Kumasi o un bubú para Tabaski en Dakar, la ficha es la misma: tú y el cliente saben exactamente lo que se acordó."
          ],
          steps: ["Escribe el nombre y el teléfono del cliente, y la fecha.", "Dibuja el modelo o pega una foto.", "Mide en tu orden de siempre y escribe la unidad.", "Escribe los datos de la tela y engrapa un retazo pequeño.", "Escribe el precio, el anticipo, el saldo, la fecha de prueba y la fecha de entrega.", "Léelo todo en voz alta, firmen los dos y dale al cliente una copia o deja que tome una foto."],
          words: [["Ficha de pedido", "un registro escrito de un trabajo: qué, para quién, cuánto y cuándo."], ["Anticipo", "dinero que se paga antes de empezar el trabajo."], ["Saldo", "el dinero que aún se debe después del anticipo."]],
          slides: [
            { title: "Por qué anotarlo", bullets: ["\"Te dije manga larga.\" \"Dijiste viernes.\"", "Una ficha termina la discusión", "Una ficha por trabajo; una copia para el cliente"] },
            { title: "Qué muestra la ficha", bullets: ["Nombre, teléfono, fecha; dibujo o foto del modelo", "Medidas con la unidad", "Datos de la tela y un retazo pequeño"] },
            { title: "Dinero y fechas", bullets: ["Precio, anticipo pagado, saldo", "Fecha de prueba y fecha de entrega", "Firman los dos"] },
            { title: "Antes de que el cliente se vaya", bullets: ["Lee cada detalle en voz alta", "Corrige cualquier error ahora", "El cliente guarda una copia o una foto"] }
          ],
          tryIt: "Dibuja tu propia ficha de pedido en una hoja, con todas las partes de esta lección. Llénala para un amigo o un familiar como si te hubiera pedido una prenda, y luego léesela en voz alta.",
          youCanNow: "tomar medidas siempre de la misma manera y llenar una ficha de pedido con la que tú y el cliente están de acuerdo.",
          quickCheck: [
            { objective: "O2", q: "Un cliente dice: \"Nunca me dijiste viernes.\" ¿Qué habría evitado esto?", options: ["Un letrero más grande en la tienda", "Coser más rápido", "Una ficha de pedido con la fecha de entrega, firmada por los dos", "Cobrar menos"], answer: 2, why: "Una ficha firmada con la fecha de entrega muestra lo que se acordó." },
            { objective: "O2", q: "Terminas de medir. ¿Qué haces antes de que el cliente se vaya?", options: ["Tirar el papelito", "Pedir solo el precio completo", "Empezar a cortar enseguida", "Leer cada detalle en voz alta y darle una copia o una foto de la ficha"], answer: 3, why: "Leer en voz alta detecta errores, y una copia significa que los dos tienen el mismo registro." }
          ]
        },
        {
          title: "El costo y el precio de una prenda",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular el costo total de una prenda y fijar un precio que deje ganancia.",
          text: [
            "Muchos sastres copian el precio de la tienda de al lado. Pero si tus costos son más altos, puede que estés trabajando gratis. Primero calcula tu propio costo y luego decide el precio.",
            "Materiales: todo lo que lleva la prenda si tú lo compras, como forro, entretela, hilo, cierre, botones, hilo de bordar y empaque. Si el cliente trae la tela, no cuentes la tela, pero cuenta todo lo demás.",
            "Tu tiempo: cuántas horas lleva la prenda (cortar, coser, probar, terminar) por lo que quieres ganar por hora. Gastos fijos: alquiler, electricidad o combustible para el generador, reparaciones de la máquina, agujas, datos del teléfono; una parte para cada prenda. Una forma sencilla: suma los gastos fijos de un mes y divídelos entre el número de prendas que haces en un mes.",
            "Ejemplo (las cifras son solo ejemplos): un vestido de mujer en Kenia. Materiales KES 450, tiempo 4 horas a KES 200 = KES 800, gastos fijos KES 250. Costo = KES 1,500. Suma una ganancia, por ejemplo el 30%, que son KES 450. Precio = KES 1,950. Luego compara con el mercado. Si el precio del mercado es mucho más bajo, busca un método más barato o un modelo más sencillo. No bajes tu precio por debajo del costo."
          ],
          steps: ["Haz una lista de los materiales de una prenda y súmalos.", "Multiplica las horas por lo que quieres ganar por hora.", "Suma una parte de los gastos fijos de un mes.", "Suma las tres cosas: ese es tu costo.", "Agrega una ganancia para obtener tu precio.", "Compara con el mercado y ajusta el modelo o el método, no solo la ganancia."],
          words: [["Costo", "todo el dinero y el tiempo que se necesita para hacer una prenda."], ["Gastos fijos", "el dinero que gastas para mantener abierto el taller, como el alquiler y la electricidad."], ["Ganancia", "lo que queda para ti y para el negocio después de pagar todos los costos."], ["Margen", "la ganancia que agregas encima del costo."]],
          slides: [
            { title: "Primero el costo, después el precio", bullets: ["Copiar a la tienda de al lado puede significar trabajar gratis", "Conoce tu propio costo"] },
            { title: "Las tres partes del costo", bullets: ["Materiales: forro, hilo, cierre, botones, empaque", "Tu tiempo: horas x lo que quieres ganar por hora", "Gastos fijos: alquiler, electricidad, reparaciones, datos"] },
            { title: "Ejemplo (KES, solo un ejemplo)", bullets: ["Materiales 450 + tiempo 800 + gastos fijos 250 = 1,500", "Suma 30% de ganancia: 450", "Precio: KES 1,950"] },
            { title: "Si el mercado cobra menos", bullets: ["Modelo más sencillo o método más barato", "Busca clientes que valoren tu calidad", "Nunca pongas un precio por debajo del costo"] }
          ],
          tryIt: "Elige la prenda que más haces. Calcula sus materiales, tu tiempo y su parte de los gastos fijos. Suma una ganancia y escribe el precio. Compáralo con lo que cobras ahora.",
          youCanNow: "calcular cuánto te cuesta de verdad una prenda y fijar un precio que te pague a ti y al negocio.",
          quickCheck: [
            { objective: "O3", q: "La clienta trae su propia tela. ¿Qué cuentas todavía en los materiales?", options: ["Nada", "El forro, el hilo, el cierre y los botones que tú compras", "Solo la tela", "El transporte de la clienta"], answer: 1, why: "Si tú compras el forro, el hilo, el cierre y los botones, son costos tuyos aunque la tela no lo sea." },
            { objective: "O3", q: "Materiales GHS 60, tiempo GHS 90, gastos fijos GHS 30. ¿Cuál es el costo antes de la ganancia? (Cifras de ejemplo.)", options: ["GHS 150", "GHS 120", "GHS 180", "GHS 90"], answer: 2, why: "60 + 90 + 30 = 180; la ganancia se suma encima." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Pedidos que dejan ganancia",
        questions: [
          { objective: "O1", q: "Tu aprendiz deja la plancha de carbón parada sobre un montón de tela mientras contesta el teléfono. ¿Qué le enseñas?", options: ["Las planchas están bien sobre la tela", "Poner la plancha boca abajo sobre la mesa", "Nunca dejar sola una plancha caliente, y ponerla donde no pueda caerse, lejos de la tela", "Contestar el teléfono más rápido"], answer: 2, why: "Una plancha caliente sobre la tela o cerca de ella puede causar un incendio en segundos." },
          { objective: "O2", q: "¿Cuál de estos datos va en una ficha de pedido?", options: ["El PIN del cliente", "La fecha de entrega, el precio, el anticipo y el saldo", "Los precios de tu vecino", "El número de identidad del cliente"], answer: 1, why: "La ficha registra el trabajo, el dinero y las fechas; los números privados no van en ella." },
          { objective: "O2", q: "¿Por qué engrapar un retazo pequeño de la tela a la ficha?", options: ["Para unir cada tela con su pedido correcto", "Para usarlo como alfiletero", "Porque lo exige la ley", "Para cobrar más"], answer: 0, why: "Un retazo evita confusiones cuando hay telas de muchos clientes en el taller." },
          { objective: "O3", q: "Tu vecino cobra NGN 8,000 por un modelo que a ti te cuesta NGN 9,000 hacer. ¿Qué haces? (Cifras de ejemplo.)", options: ["Cobrar NGN 7,500 para ganar clientes", "Cobrar NGN 8,000 y perder NGN 1,000 cada vez", "Dejar de coser ese modelo para siempre", "Buscar un método más barato o un modelo más sencillo, y poner un precio por encima de tu costo"], answer: 3, why: "Cobrar por debajo del costo pierde dinero con cada prenda; mejor cambia el método o el modelo." },
          { objective: "O3", q: "¿Cómo calculas la parte del alquiler y la electricidad que le toca a cada prenda?", options: ["Adivinar un número", "Sumar los gastos fijos de un mes y dividirlos entre las prendas que haces en un mes", "Pedir al cliente que pague el alquiler", "No contarlo; es poco"], answer: 1, why: "Repartir los gastos fijos del mes entre las prendas del mes da una parte justa a cada una." }
        ]
      }
    },
    {
      name: "Capítulo 2: Cómo llevar el negocio",
      lessons: [
        {
          title: "Planificar tu semana y tus fechas de entrega",
          objectives: ["O4"],
          minutes: 5,
          goal: "Planificar una semana de pedidos para que cada fecha de entrega quepa en tus horas reales.",
          text: [
            "Las épocas de más trabajo, como Navidad, el Eid, Tabaski, Semana Santa, el inicio de clases y la temporada de bodas, son cuando los sastres pierden clientes por prometer demasiado. Un plan semanal sencillo te ayuda a decir que sí solo a lo que puedes terminar.",
            "Primero, cuenta tus horas reales de costura en una semana, sin contar el tiempo para atender clientes, comprar materiales, los cortes de luz y el descanso. Luego, escribe cuántas horas necesita cada pedido pendiente (según tu cálculo de costos). Después, pon cada pedido en un día, primero el de fecha de entrega más cercana, con la prueba antes del acabado. Deja libre más o menos una hora de cada cinco para imprevistos, como un corte de luz o una máquina dañada.",
            "Cuando la semana está llena, está llena. Ofrece la siguiente fecha libre, pide el anticipo para reservar el lugar o di que no con amabilidad. En temporada alta, fija un último día para recibir pedidos, por ejemplo dos semanas antes de Tabaski en Dakar o antes de Navidad en Acra, y avísalo con tiempo a los clientes en tus estados y en la tienda."
          ],
          steps: ["Cuenta tus horas reales de costura de esta semana.", "Haz una lista de los pedidos pendientes con las horas que necesita cada uno y su fecha de entrega.", "Pon los pedidos en los días, primero la fecha más cercana, con las pruebas antes del acabado.", "Deja libre más o menos una hora de cada cinco para imprevistos.", "Cuando la semana esté llena, ofrece la siguiente fecha libre o di que no con amabilidad."],
          words: [["Fecha de entrega", "el día en que prometiste que la prenda estará lista."], ["Prueba", "cuando el cliente se pone la prenda para que puedas ajustarla."], ["Último día para pedidos", "el último día en que aceptas pedidos nuevos antes de una fiesta con mucho trabajo."]],
          slides: [
            { title: "La temporada alta rompe promesas", bullets: ["Navidad, Eid, Tabaski, Semana Santa, bodas, inicio de clases", "Promete solo lo que tus horas permiten"] },
            { title: "Planifica la semana", bullets: ["Cuenta tus horas reales de costura", "Horas que necesita cada pedido", "Primero la fecha más cercana; la prueba antes del acabado"] },
            { title: "Deja tiempo libre", bullets: ["Más o menos una hora de cada cinco para imprevistos", "Cortes de luz, máquinas dañadas, días de enfermedad"] },
            { title: "Cuando la semana está llena", bullets: ["Ofrece la siguiente fecha libre", "Un anticipo reserva el lugar", "Anuncia con tiempo tu último día para pedidos de fiesta"] }
          ],
          tryIt: "Escribe tus horas reales de costura para la próxima semana. Haz una lista de tus pedidos pendientes con las horas que necesita cada uno y su fecha de entrega. Ponlos en los días. ¿Alguno llega tarde? Decide ahora qué le dirás a ese cliente.",
          youCanNow: "planificar una semana de pedidos que quepa en tus horas y fijar un último día para pedidos en temporada alta.",
          quickCheck: [
            { objective: "O4", q: "Esta semana tienes 30 horas reales de costura y pedidos que necesitan 40. ¿Qué haces?", options: ["Prometerlos todos de todos modos", "Coser toda la noche, todas las noches", "No hacer caso de las fechas de entrega", "Cambiar ahora algunas fechas de entrega con los clientes, o no aceptar pedidos nuevos"], answer: 3, why: "Avisar con tiempo a los clientes y no aceptar más de lo que permiten tus horas protege tus promesas y tu reputación." },
            { objective: "O4", q: "¿Por qué dejar libre más o menos una hora de cada cinco en tu plan?", options: ["Para imprevistos como cortes de luz o una máquina dañada", "Para ir al mercado", "Porque a los clientes les gusta esperar", "No hace falta"], answer: 0, why: "El tiempo libre absorbe los imprevistos para que no retrasen los pedidos." }
          ]
        },
        {
          title: "Registro del dinero, seguridad del dinero móvil y registro del negocio",
          objectives: ["O5"],
          minutes: 6,
          goal: "Anotar el dinero que entra y el que sale durante una semana y reconocer las estafas de dinero móvil.",
          text: [
            "Mantén separado el dinero del negocio y el de la familia. Un cuaderno de dinero sencillo tiene cuatro columnas: fecha, concepto, entra, sale. Anota cada anticipo, cada saldo pagado y cada compra el mismo día. Al final de la semana, suma lo que entró, resta lo que salió y compara el resultado con el efectivo y el dinero móvil que de verdad tienes. En Costa de Marfil o Senegal puedes anotar en XOF; en Camerún, en XAF; el método es el mismo.",
            "El dinero móvil es rápido, y los estafadores lo saben. Señales de alerta: un mensaje que dice que te enviaron dinero \"por error\" y te pide devolverlo (revisa primero tu saldo real y pide a tu proveedor que lo revierta, nunca lo envíes tú); cualquiera que te pida tu PIN o un código enviado a tu teléfono; una llamada de un \"agente de atención al cliente\" desde un número normal; un pedido grande y urgente de un desconocido que quiere que primero pagues una \"tarifa de envío\". Un proveedor de dinero móvil de verdad nunca te pide tu PIN.",
            "Registrar el nombre de tu negocio puede ayudarte a abrir una cuenta bancaria de negocio, a participar en contratos con escuelas y empresas, y a dar una imagen seria a los clientes. En Kenia lo hace el Business Registration Service (servicio de registro de empresas) a través de eCitizen (el portal del gobierno); en Nigeria, la Corporate Affairs Commission (comisión de asuntos corporativos); en Ghana, la Office of the Registrar of Companies (oficina del registro de empresas); en Senegal, pregunta en APIX (la agencia de promoción de inversiones). Las reglas, los pasos y las tarifas cambian, así que consulta el sitio o la oficina oficial, y cuidado con los falsos agentes que ofrecen \"registro gratis\"."
          ],
          steps: ["Abre un cuaderno o una nota en el teléfono con cuatro columnas: fecha, concepto, entra, sale.", "Anota cada anticipo, pago y compra el mismo día.", "Al final de la semana: total que entró menos total que salió.", "Compara el resultado con tu efectivo real y tu saldo de dinero móvil.", "Nunca compartas tu PIN; antes de hacer nada, consulta con tu proveedor cualquier \"envío equivocado\"."],
          words: [["Cuaderno de dinero", "un registro sencillo del dinero que entra y el que sale."], ["PIN", "tu número secreto del dinero móvil; solo tú debes conocerlo."], ["Reversión", "cuando el proveedor devuelve el dinero que se envió a la persona equivocada."], ["Registro del nombre comercial", "inscribir el nombre de tu negocio en la lista oficial del gobierno."]],
          slides: [
            { title: "Un cuaderno de dinero sencillo", bullets: ["Fecha, concepto, entra, sale", "Anótalo el mismo día", "El dinero del negocio separado del de la familia"] },
            { title: "Revisa cada semana", bullets: ["Total que entró menos total que salió", "Compara con el efectivo y el dinero móvil reales", "Busca la diferencia mientras aún lo recuerdas"] },
            { title: "Señales de estafa con dinero móvil", bullets: ["\"Te lo envié por error, devuélvemelo\"", "Cualquiera que pida tu PIN o un código", "\"Atención al cliente\" desde un número normal; tarifas antes de un pedido grande", "Un proveedor de verdad nunca pide tu PIN"] },
            { title: "Registra el nombre de tu negocio", bullets: ["Kenia: BRS por eCitizen; Nigeria: CAC", "Ghana: Registrar of Companies; Senegal: pregunta en APIX", "Las reglas y tarifas cambian: consulta el sitio oficial"] }
          ],
          sources: [KE_BRS, NG_CAC, GH_ORC],
          tryIt: "Empieza hoy tu cuaderno de dinero. Anota todas las cantidades de los últimos tres días que recuerdes. Luego escribe cuál es el registro oficial de tu país y una cosa que vas a consultar allí.",
          youCanNow: "llevar un cuaderno de dinero semanal, reconocer las estafas de dinero móvil y saber qué oficina registra los nombres comerciales en tu país.",
          quickCheck: [
            { objective: "O5", q: "Un mensaje dice que te enviaron KES 5,000 por error y te pide devolverlos. ¿Qué haces primero?", options: ["Devolverlos enseguida", "Compartir tu PIN para que lo arreglen", "Revisar tu saldo real y contactar a tu proveedor por su línea oficial", "Responder con tu número de identidad"], answer: 2, why: "Muchos mensajes de \"envío equivocado\" son falsos; las reversiones reales las hace el proveedor." },
            { objective: "O5", q: "Al final de la semana, tu cuaderno muestra más dinero del que de verdad tienes. ¿Qué haces?", options: ["No hacerle caso", "Buscar un pago o una compra que olvidaste anotar", "Arrancar la página", "Pedir prestado para que cuadre"], answer: 1, why: "Una diferencia suele significar que algo no se anotó; búscalo mientras aún lo recuerdas." }
          ]
        },
        {
          title: "Mostrar tu trabajo y conseguir clientes",
          objectives: ["O6"],
          minutes: 5,
          goal: "Hacer una publicación o un artículo de catálogo que muestre una prenda terminada, su precio y cómo pedirla.",
          text: [
            "Tu mejor anuncio es tu trabajo. Una foto clara de una prenda terminada, compartida en tu estado de WhatsApp, en un catálogo de WhatsApp Business, en Facebook, Instagram o TikTok, o impresa en la pared de tu tienda, atrae clientes nuevos. Una diseñadora en Casablanca puede mostrar un caftán, y un sastre en Kumasi un vestido de kente (tela tejida de Ghana), de la misma manera.",
            "Una buena foto: luz de día, un fondo liso, la prenda completa y luego un primer plano del detalle o del acabado. Si un cliente la lleva puesta, pregúntale primero si puedes compartir la foto, y nunca compartas su nombre, su teléfono ni sus medidas. Algunos clientes dirán que no; respétalo.",
            "Cada publicación dice qué es, un precio o un precio \"desde\", cuánto tarda y cómo pedirla (tu número de teléfono o \"escríbeme\"). También ayuda una lista de precios en la pared o como imagen en tu teléfono: de cinco a diez de tus prendas principales con sus precios, según tu cálculo de costos. Para gastar pocos datos, comparte una buena foto en vez de muchas."
          ],
          steps: ["Elige una prenda terminada.", "Toma una foto con luz de día sobre un fondo liso, y un primer plano.", "Pide permiso si aparece un cliente en la foto.", "Escribe qué es, el precio, cuánto tarda y cómo pedirla.", "Publícala o agrégala a tu catálogo o a tu lista de precios."],
          words: [["Catálogo", "una lista de tus productos con fotos y precios, por ejemplo en WhatsApp Business."], ["Lista de precios", "una lista de tus prendas principales y lo que cuesta encargar cada una."], ["Permiso", "cuando el cliente dice que sí antes de que compartas su foto."]],
          slides: [
            { title: "Tu trabajo es tu anuncio", bullets: ["Estado o catálogo de WhatsApp, Facebook, Instagram, TikTok", "O impreso en la pared de tu tienda"] },
            { title: "Una buena foto", bullets: ["Luz de día, fondo liso", "La prenda completa y un primer plano", "¿Aparece un cliente? Pregunta primero"] },
            { title: "Lo que dice cada publicación", bullets: ["Qué es", "Precio o precio \"desde\"; cuánto tarda", "Cómo pedirla"] },
            { title: "Protege a tus clientes", bullets: ["Nada de nombres, teléfonos ni medidas en las publicaciones", "Si dicen que no, no la compartas"] }
          ],
          tryIt: "Toma una foto de una prenda terminada con luz de día. Escribe una publicación con qué es, el precio según tu cálculo de costos, cuánto tarda y cómo pedirla. Compártela en tu estado o guárdala para tu catálogo.",
          youCanNow: "mostrar tu trabajo con una foto clara, un precio y cómo pedirlo, protegiendo la privacidad de tus clientes.",
          quickCheck: [
            { objective: "O6", q: "¿Qué debe incluir una publicación sobre tu prenda?", options: ["Las medidas del cliente", "Solo una foto, nada más", "Lo que pagaste por el hilo", "Qué es, un precio, cuánto tarda y cómo pedirla"], answer: 3, why: "Los clientes necesitan saber qué es, cuánto cuesta, cuándo pueden tenerla y cómo pedirla." },
            { objective: "O6", q: "Quieres compartir una foto de una clienta con tu vestido puesto. ¿Qué haces?", options: ["Preguntarle primero, y no compartir su nombre ni su teléfono", "Publicarla con su nombre para que la gente le pregunte", "Publicarla; es tu clienta", "Publicar también sus medidas"], answer: 0, why: "La foto y los datos de una clienta son suyos; pregunta primero y no muestres sus datos privados." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Cómo llevar el negocio",
        questions: [
          { objective: "O4", q: "Faltan tres semanas para Tabaski y tu semana ya está llena. Un cliente nuevo quiere un bubú. ¿Qué haces?", options: ["Prometerlo para Tabaski de todos modos", "Ofrecer con honestidad la siguiente fecha libre, o decir que no con amabilidad", "Aceptarlo y dárselo a un ayudante sin formación", "Cobrar un anticipo y no decir nada de la fecha"], answer: 1, why: "Las fechas honestas cuidan tu reputación; prometer de más en temporada alta te hace perder clientes." },
          { objective: "O4", q: "En tu plan semanal, ¿qué pedido va primero?", options: ["El de la fecha de entrega más cercana", "El más fácil", "El de tu amigo", "El que paga más"], answer: 0, why: "Empezar por la fecha de entrega más cercana permite cumplir todas las promesas a tiempo." },
          { objective: "O5", q: "Alguien que llama como \"atención al cliente del dinero móvil\" te pide tu PIN para arreglar tu cuenta. ¿Qué es cierto?", options: ["Tienes que dárselo", "Dale solo la mitad del PIN", "Dáselo si sabe tu nombre", "Un proveedor de verdad nunca pide tu PIN; cuelga"], answer: 3, why: "Quien te pide tu PIN es un estafador, aunque sepa tu nombre." },
          { objective: "O5", q: "¿Por qué mantener separado el dinero del negocio y el de la familia?", options: ["Para ver si el negocio de verdad deja ganancia", "Porque lo dice el banco", "Para que la familia no coma", "No importa"], answer: 0, why: "Si se mezclan, no puedes ver si el negocio gana o pierde dinero." },
          { objective: "O6", q: "¿Qué foto muestra mejor tu trabajo?", options: ["Tomada de noche con flash en un cuarto desordenado", "La mitad de la prenda con un fondo de mercado lleno de cosas", "Luz de día, fondo liso, la prenda completa y un primer plano", "Una foto del trabajo de otra persona"], answer: 2, why: "Buena luz, un fondo liso y una foto del detalle muestran la calidad de tu trabajo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo llevar un negocio de sastrería y moda",
    questions: [
      { objective: "O1", q: "¿Cuál es el lugar más seguro para las agujas rotas?", options: ["El suelo", "Una lata cerrada", "La bolsa del cliente", "Tu bolsillo"], answer: 1, why: "Una lata cerrada mantiene las agujas rotas lejos de los pies, las manos y los niños." },
      { objective: "O1", q: "Ves que el cable de una máquina tiene un corte y se ven los alambres. ¿Qué haces?", options: ["Envolverlo en tela y seguir cosiendo", "Seguir usándolo con cuidado", "Desenchufarlo y hacer reparar o cambiar el cable antes de usarlo", "Dejar que lo use el aprendiz"], answer: 2, why: "Un cable dañado puede darte una descarga o causar un incendio; detente y repáralo primero." },
      { objective: "O1", q: "¿Qué hábito protege tu espalda y tus ojos?", options: ["Coser en un rincón oscuro", "Estar sentado encorvado seis horas", "Trabajar solo de noche", "Buena luz, la espalda apoyada y estirarse cada hora"], answer: 3, why: "La luz, la postura y las pausas evitan el cansancio en los días largos de costura." },
      { objective: "O2", q: "¿Qué va en una ficha de pedido?", options: ["Modelo, medidas, tela, precio, anticipo, saldo, fecha de prueba y fecha de entrega", "Solo el nombre del cliente", "Solo el precio", "El PIN bancario del cliente"], answer: 0, why: "Una ficha completa registra todo el acuerdo; los números privados nunca van en ella." },
      { objective: "O2", q: "¿Por qué escribir la unidad (cm o pulgadas) con las medidas?", options: ["Se ve bonito", "Para que tú o un ayudante no corten a la talla equivocada", "Lo pide el cliente", "No hace falta"], answer: 1, why: "Confundir centímetros y pulgadas arruina una prenda." },
      { objective: "O2", q: "Una clienta dice que pagó más de lo que muestra la ficha. ¿Qué ayuda más?", options: ["Gritar", "Negarse a terminar el vestido", "La ficha firmada y lo que anotaste en tu cuaderno de dinero ese día", "Preguntarle al vecino"], answer: 2, why: "Los registros escritos y firmados muestran qué se pagó y cuándo." },
      { objective: "O2", q: "Antes de que se vaya una clienta de aso ebi, ¿qué haces con la ficha de pedido?", options: ["Guardarla en secreto", "Tirarla después de cortar", "Llenarla más tarde de memoria", "Leerla en voz alta, firmar los dos y darle una copia o dejar que tome una foto"], answer: 3, why: "Leer y compartir la ficha significa que las dos están de acuerdo en los mismos detalles." },
      { objective: "O3", q: "¿Qué tres partes forman el costo de una prenda?", options: ["Los materiales, tu tiempo y los gastos fijos", "La tela, la ganancia y el transporte", "El alquiler, el teléfono y la comida", "Solo los materiales"], answer: 0, why: "Los materiales, el tiempo y los gastos fijos juntos son el costo real; la ganancia va encima." },
      { objective: "O3", q: "El costo es GHS 200 y sumas una ganancia del 25%. ¿Cuál es el precio? (Cifras de ejemplo.)", options: ["GHS 225", "GHS 250", "GHS 275", "GHS 200"], answer: 1, why: "El 25% de 200 es 50, así que el precio es 250." },
      { objective: "O3", q: "¿Por qué incluir tu propio tiempo en el costo?", options: ["No hace falta si la tienda es tuya", "Solo cuenta el tiempo de los aprendices", "Tus horas de trabajo valen dinero; sin ellas trabajas gratis", "Los clientes piden verlo"], answer: 2, why: "Si tu tiempo no está en el precio, el negocio no te paga." },
      { objective: "O3", q: "Tu precio está por encima del mercado. ¿Cuál es un buen primer paso?", options: ["Bajar por debajo de tu costo", "Cerrar el negocio", "Copiar los diseños de otro sastre", "Buscar un modelo más sencillo o un método más barato, o clientes que valoren tu calidad"], answer: 3, why: "Cambia cómo lo haces o a quién le vendes antes de recortar tu costo." },
      { objective: "O4", q: "¿Cuál es el primer paso para planificar tu semana?", options: ["Contar tus horas reales de costura", "Aceptar todos los pedidos que lleguen", "Comprar más tela", "Publicar en las redes sociales"], answer: 0, why: "No puedes planificar los pedidos hasta saber cuántas horas tienes de verdad." },
      { objective: "O4", q: "¿Por qué fijar un último día para pedidos antes de Navidad o del Eid?", options: ["Para molestar a los clientes", "Para aceptar solo lo que puedes terminar a tiempo", "Para subir los precios", "Lo exige la ley"], answer: 1, why: "Un último día protege tus promesas en las semanas de más trabajo." },
      { objective: "O4", q: "¿Dónde va la prueba en tu plan?", options: ["Después de la fecha de entrega", "No hace falta", "Antes del acabado, con tiempo para ajustar", "A la misma hora que la entrega"], answer: 2, why: "Una prueba antes del acabado deja tiempo para hacer cambios antes de la fecha de entrega." },
      { objective: "O5", q: "¿Cuál es una señal de estafa con dinero móvil?", options: ["Que tu propio saldo suba después de una venta", "Un recibo desde el número oficial de tu proveedor", "Un cliente que paga el saldo", "Un desconocido que te pide pagar una \"tarifa de envío\" antes de un pedido grande"], answer: 3, why: "Que un desconocido pida primero una tarifa es una estafa muy común." },
      { objective: "O5", q: "¿Cada cuánto debes anotar en tu cuaderno de dinero?", options: ["El mismo día de cada anticipo, pago o compra", "Una vez al año", "Solo cuando hay un problema", "Nunca; llévalo en la cabeza"], answer: 0, why: "Anotar el mismo día mantiene el registro correcto y completo." },
      { objective: "O5", q: "Quieres registrar el nombre de tu negocio en Nigeria. ¿Dónde consultas los pasos y las tarifas actuales?", options: ["Con un señor en la parada del autobús", "En el sitio o la oficina oficial de la Corporate Affairs Commission", "En una página cualquiera de redes sociales", "Con tus clientes"], answer: 1, why: "El registro oficial da las reglas y tarifas actuales; los falsos agentes son comunes." },
      { objective: "O6", q: "¿Qué debe mostrar una lista de precios?", options: ["Los precios de tus competidores", "Los nombres de los clientes", "Tus prendas principales con precios basados en tu cálculo de costos", "Tu cuaderno de dinero"], answer: 2, why: "Una lista de precios basada en tus costos dice a los clientes qué esperar y protege tu ganancia." },
      { objective: "O6", q: "Los datos les salen caros a tus clientes. ¿Cómo publicas?", options: ["Enviar veinte videos al día", "No publicar nada", "Enviar todas las fotos que tomaste", "Compartir una foto clara con el precio y cómo pedirla"], answer: 3, why: "Una buena foto con datos claros funciona y ahorra datos." },
      { objective: "O6", q: "¿Qué nunca debe aparecer en una publicación sobre la prenda de una clienta?", options: ["Su nombre, su teléfono o sus medidas sin permiso", "El nombre del modelo", "El precio", "Cómo pedirla"], answer: 0, why: "Los datos privados de una clienta son suyos; nunca los compartas sin permiso." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 3, 7, 9, 11, 14, 17, 19] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Taller seguro", objective: "O1", notYet: "No hay riesgos anotados, o hay riesgos anotados pero ninguno corregido.", meets: "Al menos tres riesgos encontrados y corregidos, como una lata para alfileres, un soporte seguro para la plancha y pasillos libres.", exceeds: "Todos los riesgos anotados y corregidos, y las reglas enseñadas a los aprendices." },
      { name: "Ficha de pedido", objective: "O2", notYet: "A la ficha le falta el precio, el anticipo, el saldo o la fecha de entrega.", meets: "La ficha tiene modelo, medidas con unidades, tela, precio, anticipo, saldo, fecha de prueba y fecha de entrega, y espacio para las dos firmas.", exceeds: "Usada con un cliente real, leída en voz alta y compartida como copia o foto." },
      { name: "Lista de precios con costos", objective: "O3", notYet: "Los precios están copiados o adivinados, sin costo calculado.", meets: "Al menos cinco prendas, cada una con materiales, tiempo y gastos fijos calculados y un precio por encima del costo.", exceeds: "Cada precio también se compara con el mercado local, con una nota sobre qué cambiar si es demasiado alto." },
      { name: "Plan semanal", objective: "O4", notYet: "El plan tiene más horas de trabajo que horas disponibles, o no tiene fechas de entrega.", meets: "Pedidos ordenados por fecha de entrega dentro de las horas reales, con las pruebas antes del acabado y algo de tiempo libre.", exceeds: "Incluye un último día para pedidos en la próxima temporada alta y cómo se avisará a los clientes." },
      { name: "Cuaderno de dinero", objective: "O5", notYet: "No hay registro, o el dinero del negocio y el de la familia están mezclados.", meets: "Una semana de anticipos, pagos y gastos con un saldo correcto, y la regla del PIN escrita.", exceeds: "El saldo se compara con el efectivo y el dinero móvil reales, y se anota el registro oficial del país del estudiante." },
      { name: "Mostrar el trabajo", objective: "O6", notYet: "No hay foto, o hay una foto sin precio ni forma de pedir.", meets: "Una foto clara con luz de día, con qué es, el precio, el tiempo y cómo pedir, y sin datos privados de ningún cliente.", exceeds: "Agregada a un catálogo o a una lista de precios, con el permiso anotado de cualquier cliente que aparezca en la foto." }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Estudiantes que usan una ficha de pedido para cada trabajo en un plazo de 30 días (encuesta de seguimiento)",
      "Estudiantes que suben o corrigen al menos un precio después de calcular su costo",
      "Menos pedidos atrasados y menos discusiones con clientes en la siguiente temporada alta",
      "Estudiantes que registran un nombre comercial o abren una cuenta de negocio en un plazo de 6 meses"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un cuaderno, un bolígrafo y una calculadora (o la calculadora del teléfono)",
      "Una cinta métrica y el propio taller del estudiante para revisarlo",
      "Un teléfono con cámara para la publicación final (también sirven un teléfono básico y fotos impresas)",
      "Unos 60 a 90 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Funciona bien con asociaciones de sastres, grupos de mujeres y de jóvenes, centros de formación profesional y programas de aprendizaje; hagan juntos la prueba inicial.",
      "Pide a los estudiantes que traigan sus precios reales y un pedido real; al calcular el costo de su propia prenda es cuando la mayoría descubre que cobra muy poco.",
      "Usa la moneda local y las fiestas locales (Navidad, Eid, Tabaski, Semana Santa, temporada de bodas) en cada ejemplo.",
      "Nunca pidas a los estudiantes que muestren su PIN, su saldo o sus números privados al grupo; practiquen con cifras de ejemplo.",
      "Las reglas y tarifas de registro cambian: consulta el sitio oficial del registro nacional antes de la sesión y comparte solo lo que dice.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una sola fila Todavía no a la vez."
    ]
  }
};
