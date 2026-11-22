"use strict";

// Koach Learn course (Spanish translation of shared/bookkeeping-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "bookkeeping-basics-es",
  lang: "es",
  translationOf: "bookkeeping-basics",
  category: "Entrepreneurs",
  name: "Contabilidad básica para tu negocio",
  skills: "Registrar ingresos y gastos, Guardar recibos, Separar el dinero del negocio y el personal, Crear un libro de registro en una hoja de cálculo, Comparar tus cuentas con el banco, Leer un estado de pérdidas y ganancias",
  outcome: "llevar un libro de registro sencillo en una hoja de cálculo con los ingresos y gastos de tu negocio, con recibos que lo respalden, compararlo con tu estado de cuenta del banco o de dinero móvil, y leer un estado de pérdidas y ganancias de un mes para ver si ganaste dinero.",
  about: [
    "Este curso es para cualquier persona que maneja algo donde entra y sale dinero: una estilista, un puesto de comida, un negocio de limpieza, una iglesia u organización juvenil sin fines de lucro, un agricultor que vende huevos o verduras, o alguien con un negocio extra en internet.",
    "Aprenderás a anotar cada venta y cada costo, a guardar los recibos que los prueban, a separar el dinero del negocio del dinero personal, a crear un libro de registro sencillo en una hoja de cálculo gratis, a revisarlo cada mes y a leer un estado de pérdidas y ganancias básico.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\" que haces con tus propios números o con un ejemplo. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. La contabilidad es el registro. Para impuestos y preguntas legales, habla con un contador o un profesional de impuestos."
  ],
  finalTask: "Crea un libro de registro en una hoja de cálculo y anota un mes de transacciones reales o de ejemplo de tu negocio (al menos 10), cada una con fecha, descripción, categoría, monto y número de recibo. Compara el libro con tu estado de cuenta del banco o de dinero móvil, y luego arma un estado de pérdidas y ganancias de un mes que muestre el total de ingresos, los gastos por categoría y la ganancia o pérdida.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que manejan algo donde entra y sale dinero: dueños de pequeños negocios, vendedores del mercado, agricultores que venden lo que cosechan, negocios extra en internet y tesoreros de iglesias u organizaciones pequeñas sin fines de lucro. Muchos llevan el dinero en la cabeza, en una caja o en una sola cuenta personal.",
    startingPoint: "Saben manejar efectivo y dinero móvil o una cuenta de banco, y pueden usar un teléfono o una computadora. Pocos llevan registros por escrito, y muchos nunca han usado una fórmula en una hoja de cálculo.",
    gap: "Sin registros no pueden saber si el negocio gana dinero, qué productos dejan ganancia ni qué mostrarle a un prestamista, a quien da subvenciones o a la oficina de impuestos. Un libro de registro sencillo con recibos, una revisión mensual contra el estado de cuenta y un estado de pérdidas y ganancias de un mes cierran esa brecha.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; números simples",
      "Dispositivos: un teléfono o una computadora compartida con una hoja de cálculo gratis (Google Sheets o Excel)",
      "Tiempo: unos 5 minutos por lección, con práctica con sus propios números o con un ejemplo",
      "Privacidad: no pegar números de cuenta bancaria ni datos personales de clientes en herramientas de IA",
      "Las reglas de impuestos cambian según el país; el curso enseña a llevar registros y manda las preguntas de impuestos a un contador"
    ],
    prerequisites: "Ninguno. A quienes nunca han usado hojas de cálculo les puede servir tomar primero \"Excel y hojas de cálculo\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista del dinero que entra y sale de un negocio u organización sin fines de lucro", action: "identificar cuáles son ingresos y cuáles son gastos", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Con una semana de ventas y compras", action: "guardar un recibo, una factura o una hoja de ventas diaria numerada como prueba de cada transacción", standard: "de modo que cada línea del libro de registro tenga un número de recibo que puedas encontrar" },
    { id: "O3", condition: "Usando una cuenta, caja de dinero móvil o billetera aparte para el negocio", action: "mantener el dinero del negocio separado del personal y anotar lo que te pagas como retiro del dueño", standard: "sin ningún gasto personal mezclado en los registros del negocio" },
    { id: "O4", condition: "Usando una hoja de cálculo gratis como Google Sheets o Excel", action: "crear un libro de registro con siete columnas, categorías fijas y una fórmula de saldo acumulado", standard: "de modo que el saldo se actualice bien después de cada anotación" },
    { id: "O5", condition: "Con tu libro de registro y el estado de cuenta de un mes del banco o de dinero móvil", action: "conciliar el libro de registro con el estado de cuenta y corregir las diferencias", standard: "hasta que los saldos coincidan, teniendo en cuenta el efectivo y los pagos que aún no se reflejan" },
    { id: "O6", condition: "Con un mes de anotaciones en el libro de registro", action: "armar un estado de pérdidas y ganancias con SUMIF y explicar lo que muestra", standard: "con totales correctos y dos oraciones ciertas sobre el resultado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Lleva buenos registros",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es la contabilidad y por qué importa",
          minutes: 4,
          goal: "Explicar qué registra la contabilidad y nombrar los dos tipos de dinero que sigue.",
          text: [
            "Llevar la contabilidad es anotar cada vez que entra o sale dinero de tu negocio, en un solo lugar y en orden. No son matemáticas difíciles. Es un hábito.",
            "El dinero que entra son los ingresos: ventas, pagos de clientes, cobros y, en una organización sin fines de lucro, donaciones y subvenciones. El dinero que sale son los gastos: materiales, renta, combustible, semillas, teléfono, publicidad, salarios.",
            "El IRS (la agencia de impuestos de Estados Unidos) dice que los buenos registros te ayudan a seguir el progreso de tu negocio y a preparar tus declaraciones de impuestos. También muestran qué costos puedes deducir. Unos registros ordenados te ayudan a conseguir un préstamo, pedir una subvención, responder una pregunta de la oficina de impuestos y ver qué productos o servicios dejan dinero de verdad.",
            "Ejemplo: una mujer vende pan y pasteles en un mercado de fin de semana. Cree que le va bien porque la caja está llena. Cuando anota la harina, la mantequilla, las cajas y la cuota del mercado, descubre que los cupcakes dejan ganancia, pero el pan apenas cubre su costo. Ahora puede decidir qué hornear."
          ],
          words: [["Contabilidad", "llevar un registro escrito de todo el dinero que entra y sale de un negocio."], ["Ingreso", "dinero que entra: ventas, cobros, donaciones, subvenciones."], ["Gasto", "dinero que se usa para operar el negocio, como materiales, renta y combustible."], ["Deducir", "restar un costo del negocio que está permitido al calcular el impuesto que debes."]],
          slides: [
            { title: "La contabilidad es un hábito", bullets: ["Anota todo el dinero que entra y sale", "En un solo lugar, en orden", "No son matemáticas difíciles"] },
            { title: "Dos tipos de dinero", bullets: ["Ingresos: ventas, cobros, donaciones, subvenciones", "Gastos: materiales, renta, combustible, semillas, salarios"] },
            { title: "Por qué importa", bullets: ["Ver cómo le va de verdad al negocio", "Preparar impuestos y mostrar deducciones", "Conseguir préstamos y subvenciones; responder preguntas"] }
          ],
          sources: [{ name: "IRS: Registros para pequeños negocios (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Piensa en tu negocio, o en uno que te gustaría empezar. Escribe cinco tipos de ingresos o dinero que entra, y ocho tipos de gastos o dinero que sale, que tendría.",
          youCanNow: "decir qué es la contabilidad, separar el dinero en ingresos y gastos, y explicar por qué importan los registros.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es la contabilidad?", options: ["Anotar cada vez que entra o sale dinero, en un solo lugar y en orden", "Hacer cálculos difíciles una vez al año", "Presentar tu declaración de impuestos", "Contar la caja del dinero por la noche"], answer: 0, why: "La lección dice que la contabilidad es el hábito de anotar cada entrada y salida de dinero, en orden." },
            { objective: "O1", q: "Una panadera cree que le va bien porque la caja está llena. ¿Qué le mostraría qué productos le dejan ganancia de verdad?", options: ["Volver a contar el efectivo", "Preguntar a los clientes qué les gusta", "Anotar sus costos, como la harina, las cajas y la cuota del mercado, junto a sus ventas", "Subir todos los precios"], answer: 2, why: "Anotar los costos junto a las ventas mostró que los cupcakes dejaban ganancia y el pan apenas cubría su costo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Guardar recibos y otras pruebas",
          minutes: 5,
          goal: "Crear un sistema sencillo para guardar cada recibo y cada factura.",
          text: [
            "Cada anotación en tus cuentas debe tener una prueba detrás. El IRS los llama documentos de respaldo. Para las ventas incluyen talonarios de recibos, facturas, cintas de la caja registradora y comprobantes de depósito. Para las compras y los gastos incluyen recibos, facturas, estados de cuenta de tarjetas y registros de pagos electrónicos.",
            "Los recibos de papel se borran y se pierden. Un sistema sencillo: toma una foto de cada recibo el mismo día, ponle un número y guárdala en una carpeta de ese mes, por ejemplo 2026-10. Guarda el papel en un sobre con el mismo mes escrito. Anota el número del recibo en tu libro de registro, para que puedas encontrar la prueba de cualquier línea.",
            "Cuánto tiempo guardar los registros: el IRS dice que los guardes mientras puedas necesitar probar los ingresos o las deducciones de una declaración de impuestos. Para muchas declaraciones en Estados Unidos son 3 años, pero algunos casos son más largos, como al menos 4 años para los registros de impuestos sobre la nómina. Revisa la página del IRS para tu caso. Fuera de Estados Unidos, consulta a la autoridad de impuestos de tu país, como la Kenya Revenue Authority, o pregunta a un contador.",
            "Para las ventas en efectivo sin recibo, como huevos vendidos en la puerta de la granja, lleva una hoja de ventas diaria sencilla: fecha, qué vendiste, cuántos y el total. Esa hoja es tu prueba."
          ],
          steps: ["Haz una carpeta por mes en tu teléfono o computadora, y un sobre por mes para el papel.", "Toma una foto de cada recibo el mismo día.", "Ponle un número a cada recibo y escríbelo en el papel.", "Anota las ventas en efectivo en una hoja de ventas diaria.", "Guarda los registros el tiempo que diga tu autoridad de impuestos, o pregunta a un contador."],
          words: [["Recibo", "un registro en papel o electrónico de que pagaste o te pagaron."], ["Factura", "una cuenta que envías a un cliente, o que recibes de un proveedor, con lo que se vendió y el precio."], ["Documento de respaldo", "la prueba detrás de un registro en tus cuentas, como un recibo, una factura o un estado de cuenta."]],
          slides: [
            { title: "Cada anotación necesita una prueba", bullets: ["Ventas: facturas, talonarios de recibos, comprobantes de depósito", "Costos: recibos, facturas, estados de cuenta de tarjetas"] },
            { title: "Un sistema sencillo de recibos", bullets: ["Tómale una foto el mismo día", "Ponle número y archívalo por mes", "Escribe el número en tu libro de registro"] },
            { title: "Ventas en efectivo sin recibo", bullets: ["Lleva una hoja de ventas diaria", "Fecha, producto, cuántos, total"] },
            { title: "Cuánto tiempo guardar los registros", bullets: ["EE. UU.: a menudo 3 años, algunos casos más", "Registros de impuestos sobre la nómina: al menos 4 años", "Revisa irs.gov, tu autoridad de impuestos o pregunta a un contador"] }
          ],
          sources: [
            { name: "IRS: Qué tipo de registros debo guardar (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" },
            { name: "IRS: ¿Cuánto tiempo debo guardar los registros? (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }
          ],
          tryIt: "Crea la carpeta de recibos de este mes en tu teléfono o computadora. Toma una foto de tres recibos que tengas (del negocio o de todos los días, para practicar), numéralos 1, 2 y 3, y guárdalos en la carpeta.",
          youCanNow: "guardar, numerar y archivar recibos para que cada registro de tus cuentas tenga una prueba detrás.",
          quickCheck: [
            { objective: "O2", q: "¿Cómo llama el IRS a los recibos, las facturas y los registros de depósitos?", options: ["Declaraciones de impuestos", "Documentos de respaldo", "Libros de registro", "Estados de pérdidas y ganancias"], answer: 1, why: "El IRS llama documentos de respaldo a los papeles que prueban cada anotación." },
            { objective: "O2", q: "Acabas de pagar materiales y te dieron un recibo de papel. ¿Qué haces ese mismo día?", options: ["Guardarlo en el bolsillo para después", "Tirarlo una vez que recuerdes el monto", "Escribir el monto en tu mano", "Tomarle una foto, numerarlo y guardarlo en la carpeta de este mes"], answer: 3, why: "Tomar la foto y numerar el recibo el mismo día evita que se borre o se pierda." }
          ]
        },
        {
          objectives: ["O1","O3"],
          title: "Separar el dinero del negocio y el personal",
          minutes: 5,
          goal: "Tener un lugar aparte para el dinero del negocio y pagarte a ti mismo de forma planeada.",
          text: [
            "Cuando el dinero del negocio y el personal están mezclados en una sola cuenta o una sola billetera, no puedes saber si el negocio está ganando dinero. Un almuerzo de trabajo, la compra del súper para la familia y un pedido de materiales se ven iguales.",
            "Abre una cuenta aparte para el negocio: una cuenta de negocio en un banco o una cooperativa de crédito, o una cuenta de dinero móvil separada que uses solo para el negocio. Deposita ahí cada venta. Paga desde ahí cada costo del negocio.",
            "Cuando necesites dinero para ti, pasa una cantidad fija de la cuenta del negocio a tu cuenta personal y anótala como retiro del dueño o pago al dueño. Eso no es un gasto del negocio; eres tú sacando ganancia. Si alguna vez pagas un costo del negocio con dinero personal, anótalo en el libro de registro y guarda el recibo.",
            "Las organizaciones sin fines de lucro tienen un paso más: si un donante da dinero para un fin, como un programa deportivo juvenil, lleva la cuenta para que se gaste en ese fin. Para empezar basta con una columna o una categoría sencilla."
          ],
          steps: ["Abre una cuenta, una cuenta de dinero móvil o una billetera aparte para el negocio.", "Deposita ahí todas las ventas y donaciones.", "Paga desde ahí todos los costos del negocio.", "Págate pasando una cantidad fija, y anótala como retiro del dueño.", "Si usas dinero personal para el negocio, anótalo y guarda el recibo."],
          words: [["Retiro del dueño", "dinero que el dueño saca del negocio para uso personal. No es un gasto del negocio."], ["Mezcla de fondos", "juntar el dinero del negocio y el personal en la misma cuenta."], ["Donación restringida", "un regalo que el donante dice que debe usarse para un fin determinado."]],
          slides: [
            { title: "El dinero mezclado esconde la verdad", bullets: ["No puedes saber si el negocio gana dinero", "Los costos personales y del negocio se ven iguales"] },
            { title: "Dale al negocio su propio dinero", bullets: ["Cuenta aparte de banco, cooperativa o dinero móvil", "Todas las ventas entran, todos los costos del negocio salen"] },
            { title: "Págate de forma planeada", bullets: ["Pasa una cantidad fija a tu cuenta personal", "Anótala como retiro del dueño, no como gasto"] },
            { title: "Organizaciones sin fines de lucro", bullets: ["Lleva la cuenta de los regalos dados para un fin", "Gástalos en ese fin"] }
          ],
          sources: [{ name: "IRS: Registros para pequeños negocios (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Mira los últimos 10 pagos de la cuenta o billetera que usas para tu negocio (o la personal, para practicar). Marca cada uno con N si es del negocio o con P si es personal. Escribe cómo los vas a separar de ahora en adelante.",
          youCanNow: "mantener el dinero del negocio separado del personal y pagarte de una forma que puedas seguir.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un retiro del dueño?", options: ["Un gasto del negocio", "Un préstamo del banco", "Dinero que pasas del negocio a ti, sacado de la ganancia", "Una donación al negocio"], answer: 2, why: "Un retiro del dueño es sacar ganancia para ti; no es un gasto del negocio." },
            { objective: "O1", q: "Manejas tu negocio desde tu cuenta personal y no sabes si gana dinero. ¿Qué arreglas primero?", options: ["Abrir una cuenta o caja de dinero móvil aparte, solo para el negocio", "Gastar menos en el supermercado", "Dejar de guardar recibos", "Usar solo efectivo"], answer: 0, why: "Una cuenta aparte mantiene separado el dinero del negocio, así puedes ver lo que el negocio gana y gasta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lleva buenos registros",
        questions: [
          { objective: "O1", q: "¿Cuál es un gasto para una granja pequeña?", options: ["Dinero de la venta de tomates", "Una subvención de un donante", "El pago de un cliente", "Semillas y fertilizante"], answer: 3, why: "Los gastos son costos para operar el negocio, como semillas y fertilizante." },
          { objective: "O1", q: "Según el IRS, los buenos registros te ayudan a:", options: ["No pagar nunca impuestos", "Seguir el progreso de tu negocio y preparar tus declaraciones de impuestos", "No tener que hacer recibos", "Conseguir materiales gratis"], answer: 1, why: "El IRS dice que los registros te ayudan a seguir tu negocio y a preparar tus declaraciones." },
          { objective: "O2", q: "Vendes huevos en efectivo y sin recibos. ¿Cuál es tu prueba?", options: ["Una hoja de ventas diaria con fecha, producto, cuántos y total", "Tu memoria", "No se necesita nada", "Una foto de tus gallinas"], answer: 0, why: "Una hoja de ventas diaria escrita registra las ventas en efectivo." },
          { objective: "O2", q: "¿Por qué anotar el número del recibo en tu libro de registro?", options: ["Hace que el libro se vea más largo", "El banco lo exige", "Para que puedas encontrar la prueba de cualquier línea", "Cambia el total"], answer: 2, why: "Numerar une cada registro con su prueba." },
          { objective: "O3", q: "Pasas dinero de la cuenta del negocio a tu cuenta personal para pagarte. ¿Cómo lo anotas?", options: ["Como gasto del negocio", "Como retiro del dueño", "Como una venta", "No lo anotas"], answer: 1, why: "El dinero que saca el dueño es un retiro del dueño, no un gasto del negocio." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tu libro de registro y tu ganancia",
      lessons: [
        {
          objectives: ["O4"],
          title: "Crear un libro de registro sencillo en una hoja de cálculo",
          minutes: 6,
          goal: "Crear un libro de registro en una hoja de cálculo gratis con las columnas correctas y un saldo acumulado.",
          text: [
            "Un libro de registro es una lista de todo el dinero que entra y sale, una línea por transacción. Una hoja de cálculo gratis como Google Sheets o Microsoft Excel funciona bien, y suma los números por ti.",
            "Usa siete columnas: Fecha, Descripción, Categoría, Entradas, Salidas, Saldo, Número de recibo. Pon tu saldo inicial en la primera fila. En la celda de Saldo de la fila siguiente, escribe una fórmula que tome el saldo de arriba, sume las entradas y reste las salidas. Por ejemplo, si Saldo es la columna F, Entradas es la D y Salidas es la E, la fila 3 sería =F2+D3-E3. Copia esa fórmula hacia abajo.",
            "Elige una lista corta de categorías y usa las mismas palabras siempre, por ejemplo: Ventas, Donaciones, Suministros, Renta, Combustible, Teléfono, Publicidad, Salarios, Retiro del dueño. Las mismas palabras hacen fácil sumar cada categoría después.",
            "Un asistente de IA puede ayudarte a preparar la hoja: pídele que te explique una fórmula o que te sugiera categorías para tu tipo de negocio. No pegues números de cuentas bancarias ni datos personales de clientes."
          ],
          steps: ["Abre una hoja de cálculo nueva en blanco, ponle un nombre, por ejemplo \"Registro 2026\", y llama a la primera pestaña Registro.", "Escribe los encabezados de las columnas: Fecha, Descripción, Categoría, Entradas, Salidas, Saldo, N.º de recibo.", "Pon tu saldo inicial en la columna Saldo de la fila 2.", "En la fila 3 de Saldo, escribe =F2+D3-E3 y cópiala hacia abajo.", "Escribe tu lista de categorías en una esquina o en una segunda pestaña, y usa solo esas palabras."],
          words: [["Libro de registro", "una lista de todo el dinero que entra y sale, una línea por transacción."], ["Transacción", "cada vez que se mueve dinero: una venta, un pago, una compra."], ["Fórmula", "un cálculo en una celda de la hoja de cálculo que empieza con =."], ["Categoría", "una etiqueta que agrupa dinero parecido, como Combustible o Suministros."]],
          slides: [
            { title: "Un libro de registro: una línea por transacción", bullets: ["Todo el dinero que entra y sale", "Una hoja de cálculo gratis hace las sumas"] },
            { title: "Siete columnas", bullets: ["Fecha, Descripción, Categoría", "Entradas, Salidas", "Saldo, N.º de recibo"] },
            { title: "Un saldo acumulado", bullets: ["Empieza con tu saldo inicial", "Fila siguiente: =F2+D3-E3", "Copia la fórmula hacia abajo"] },
            { title: "Las mismas categorías siempre", bullets: ["Ventas, Donaciones, Suministros, Renta, Combustible", "Teléfono, Publicidad, Salarios, Retiro del dueño"] }
          ],
          tryIt: "Crea ahora el libro de registro en Google Sheets o Excel con las siete columnas, un saldo inicial y la fórmula del saldo acumulado. Anota tres transacciones de esta semana, reales o de ejemplo, y revisa que el saldo cambie bien.",
          youCanNow: "crear un libro de registro en una hoja de cálculo con categorías y un saldo acumulado.",
          quickCheck: [
            { objective: "O4", q: "En un libro de registro, ¿qué va en cada línea?", options: ["Un mes completo", "Una transacción", "El nombre y la dirección de un cliente", "El total de una categoría"], answer: 1, why: "Un libro de registro anota cada entrada y salida de dinero, una línea por transacción." },
            { objective: "O4", q: "Una semana escribiste \"suministros\" y la siguiente \"materiales\" para los mismos costos. ¿Qué debes hacer?", options: ["Dejar las dos palabras", "Borrar esas líneas", "Cambiarlas a una sola palabra de categoría y usar solo esa de ahora en adelante", "Agregar una columna nueva para cada palabra"], answer: 2, why: "Usar siempre las mismas palabras de categoría facilita sumar cada categoría después." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Anotar cada semana y comparar con el banco",
          minutes: 5,
          goal: "Mantener al día el libro de registro y compararlo con tu estado de cuenta del banco o de dinero móvil.",
          text: [
            "La contabilidad funciona mejor como un pequeño hábito semanal, por ejemplo 20 minutos cada lunes por la mañana. Junta los recibos, las hojas de ventas y las facturas de la semana, y anota cada uno como una línea en el libro, con su categoría y su número de recibo.",
            "Una vez al mes, compara tu libro de registro con el estado de cuenta de tu banco, cooperativa de crédito o dinero móvil. Esto se llama conciliar. Marca cada línea del estado de cuenta que coincide con una línea de tu libro. Todo lo que está en el estado de cuenta y no en tu libro, como una comisión del banco o el pago de un cliente que olvidaste, se agrega. Lo que está en tu libro y no en el estado de cuenta puede ser efectivo, o un error que hay que corregir.",
            "Al final, el saldo de tu libro debe coincidir con el saldo del estado de cuenta, después de tomar en cuenta el efectivo que tienes y los pagos que todavía no se han acreditado. Si no coincide, busca una línea que falta, un número escrito dos veces o dígitos invertidos, como 54 escrito como 45.",
            "Ejemplo: el libro de una organización juvenil de fútbol tiene 15 dólares menos que el banco. La tesorera encuentra una donación de 15 dólares que llegó por una aplicación del teléfono y nunca se anotó, la agrega, y ahora coinciden."
          ],
          steps: ["Elige un momento fijo cada semana para poner al día el libro.", "Anota cada recibo, hoja de ventas y factura con una categoría y un número de recibo.", "Una vez al mes, consigue tu estado de cuenta del banco o de dinero móvil.", "Marca cada línea del estado de cuenta que coincide con el libro; agrega las que falten.", "Compara los saldos. Si no son iguales, busca líneas que faltan, repetidas o dígitos invertidos."],
          words: [["Conciliar", "comparar tus registros con el estado de cuenta del banco o de dinero móvil y corregir las diferencias."], ["Estado de cuenta", "la lista de transacciones de un periodo que te da tu banco o tu proveedor de dinero móvil."], ["Acreditado", "cuando un pago ya se completó y aparece en el estado de cuenta."]],
          slides: [
            { title: "Un hábito semanal", bullets: ["Unos 20 minutos, el mismo día cada semana", "Anota recibos, hojas de ventas y facturas"] },
            { title: "Concilia una vez al mes", bullets: ["Consigue el estado de cuenta del banco o de dinero móvil", "Marca cada línea que coincide", "Agrega lo que falta, como comisiones"] },
            { title: "Cuando no coincide", bullets: ["Una línea que falta", "Un número escrito dos veces", "Dígitos invertidos: 54 escrito como 45"] }
          ],
          tryIt: "Descarga o abre el estado de cuenta del mes pasado de la cuenta de tu negocio o de tu dinero móvil (o el personal, para practicar). Elige cinco líneas del estado de cuenta y revisa que cada una esté en tu libro de registro. Agrega las que falten.",
          youCanNow: "mantener al día tu libro de registro cada semana y conciliarlo con tu estado de cuenta cada mes.",
          quickCheck: [
            { objective: "O5", q: "¿Qué significa conciliar?", options: ["Hacer un presupuesto para el mes que viene", "Pagar todas tus cuentas", "Escribir un libro de registro nuevo", "Comparar tu libro de registro con tu estado de cuenta del banco o de dinero móvil"], answer: 3, why: "Conciliar es marcar cada línea del estado de cuenta contra tu libro de registro y corregir lo que falta." },
            { objective: "O5", q: "El pago de un cliente está en tu estado de cuenta pero no en tu libro de registro. ¿Qué haces?", options: ["Agregarlo al libro de registro", "Ignorarlo", "Borrarlo del estado de cuenta", "Esperar hasta el año que viene"], answer: 0, why: "Todo lo que está en el estado de cuenta y falta en el libro de registro se agrega." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Leer un estado de pérdidas y ganancias básico",
          minutes: 6,
          goal: "Armar un estado de pérdidas y ganancias de un mes a partir de tu libro de registro y decir lo que te muestra.",
          text: [
            "Un estado de pérdidas y ganancias, también llamado P&L o estado de resultados, es un resumen corto de un periodo, como un mes. Muestra el total de ingresos, el total de gastos por categoría y la diferencia. Ingresos menos gastos es la ganancia. Si los gastos son mayores, es una pérdida.",
            "Puedes hacerlo a partir de tu libro de registro. En una pestaña nueva, haz una lista de las categorías. Al lado de cada una, usa una fórmula SUMIF para sumar esa categoría. Por ejemplo, =SUMIF(Registro!C:C,\"Suministros\",Registro!E:E) suma cada monto de Salidas cuya categoría es Suministros, si tu pestaña del libro se llama Registro (la columna C es Categoría y la columna E es Salidas). Suma las categorías de ingresos, suma las categorías de gastos y resta. El retiro del dueño no es un gasto, así que déjalo fuera de los gastos.",
            "Después, léelo. ¿Tuviste ganancia? ¿Cuál es el gasto más grande? ¿Creció desde el mes pasado? En una granja, ¿el mes de cosecha cubrió los meses flojos? En una organización sin fines de lucro, ¿los costos del programa se quedaron dentro de la subvención?",
            "Un estado de pérdidas y ganancias te dice cómo le va al negocio. No es tu declaración de impuestos. Las reglas de impuestos deciden qué cuenta y cuándo, y cambian según el país. Para los impuestos, lleva tu libro de registro, tus recibos y tu estado de pérdidas y ganancias a un contador o a un profesional de impuestos."
          ],
          steps: ["Agrega una pestaña nueva llamada P&L y haz la lista de tus categorías.", "Al lado de cada categoría, usa SUMIF para sumarla desde el libro de registro.", "Suma las categorías de ingresos y las de gastos (deja fuera el retiro del dueño).", "Resta: ingresos menos gastos = ganancia o pérdida.", "Escribe dos oraciones sobre lo que te dicen los números."],
          words: [["Estado de pérdidas y ganancias (P&L)", "un resumen de los ingresos, los gastos y la ganancia o pérdida de un periodo."], ["Ganancia", "lo que queda cuando los ingresos son mayores que los gastos."], ["Pérdida", "cuando los gastos son mayores que los ingresos."], ["SUMIF", "una fórmula de hoja de cálculo que suma solo las filas que coinciden con una etiqueta."]],
          slides: [
            { title: "Pérdidas y ganancias en una línea", bullets: ["Ingresos menos gastos = ganancia", "¿Gastos mayores? Es una pérdida"] },
            { title: "Ármalo desde tu libro de registro", bullets: ["Haz la lista de categorías en una pestaña nueva", "Usa SUMIF para sumar cada una", "Deja el retiro del dueño fuera de los gastos"] },
            { title: "Léelo", bullets: ["¿Ganancia o pérdida?", "¿El gasto más grande? ¿Está creciendo?", "¿Los meses buenos cubrieron los flojos?"] },
            { title: "No es una declaración de impuestos", bullets: ["Las reglas de impuestos deciden qué cuenta", "Lleva tus registros a un contador"] }
          ],
          sources: [{ name: "IRS: Registros para pequeños negocios (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Tarea final: anota en tu libro de registro al menos 10 transacciones reales o de ejemplo de un mes, con categorías y números de recibo, y compáralas con un estado de cuenta. Luego arma la pestaña P&L con SUMIF, encuentra tu ganancia o pérdida, y escribe dos oraciones sobre lo que te dice.",
          youCanNow: "armar y leer un estado de pérdidas y ganancias de un mes a partir de tu propio libro de registro.",
          quickCheck: [
            { objective: "O6", q: "¿Cómo se llama lo que queda de los ingresos menos los gastos cuando los ingresos son mayores?", options: ["Retiro del dueño", "Una pérdida", "Ganancia", "El saldo"], answer: 2, why: "Los ingresos menos los gastos son la ganancia; si los gastos son mayores, es una pérdida." },
            { objective: "O6", q: "Estás armando tu estado de pérdidas y ganancias. ¿Dónde va el retiro del dueño?", options: ["En la categoría de gasto más grande", "En los ingresos", "En suministros", "Se deja fuera de los gastos"], answer: 3, why: "El retiro del dueño no es un gasto del negocio, así que queda fuera de los gastos en el estado de pérdidas y ganancias." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Tu libro de registro y tu ganancia",
        questions: [
          { objective: "O4", q: "¿Qué grupo de columnas forma un buen libro de registro sencillo?", options: ["Fecha, Descripción, Categoría, Entradas, Salidas, Saldo, N.º de recibo", "Nombre, Cumpleaños, Pasatiempo", "Solo Total", "Contraseña y número de tarjeta del cliente"], answer: 0, why: "Estas columnas registran cada transacción y la unen con su prueba." },
          { objective: "O4", q: "¿Por qué usar siempre las mismas palabras para las categorías?", options: ["Si no, la hoja de cálculo no abre", "Para que el libro tenga colores", "Para poder sumar cada categoría después", "Porque el banco lo exige"], answer: 2, why: "Las palabras iguales permiten que SUMIF sume bien cada categoría." },
          { objective: "O5", q: "Tu libro de registro tiene 15 dólares menos que el estado de cuenta del banco. ¿Qué buscas primero?", options: ["Un banco nuevo", "Una aplicación de hojas de cálculo nueva", "Nada; las diferencias pequeñas nunca importan", "Un depósito o pago que está en el estado de cuenta pero no en el libro"], answer: 3, why: "Una diferencia suele significar una línea que falta, repetida o mal escrita." },
          { objective: "O6", q: "Los ingresos son 2,000, los gastos son 1,500 y el retiro del dueño es 300. ¿Cuál es la ganancia?", options: ["200", "500", "3,800", "1,500"], answer: 1, why: "La ganancia es ingresos menos gastos: 2,000 - 1,500 = 500. El retiro del dueño no es un gasto." },
          { objective: "O6", q: "¿Con quién debes hablar sobre tus impuestos?", options: ["Con un contador o un profesional de impuestos", "Con un desconocido en un comentario en internet", "Con nadie; el estado de pérdidas y ganancias es tu declaración de impuestos", "Con tus clientes"], answer: 0, why: "Un estado de pérdidas y ganancias no es una declaración de impuestos; un contador conoce las reglas de impuestos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Contabilidad básica para tu negocio",
    questions: [
      { objective: "O1", q: "Llevar la contabilidad significa:", options: ["Leer libros sobre negocios", "Adivinar tu ganancia al final del año", "Anotar todo el dinero que entra y sale", "Escribir un diario"], answer: 2, why: "La contabilidad registra todo el dinero que entra y sale." },
      { objective: "O1", q: "En una organización sin fines de lucro, ¿cuál es un ingreso?", options: ["Una donación", "La renta de la oficina", "Refrigerios para los voluntarios", "Tinta para la impresora"], answer: 0, why: "Las donaciones y las subvenciones son dinero que entra." },
      { objective: "O2", q: "¿Cuál es un ejemplo de documento de respaldo para un gasto?", options: ["Un mensaje de un amigo", "Una tarjeta de presentación", "Tu lista de pendientes", "Un recibo o una factura"], answer: 3, why: "El IRS menciona recibos, facturas y estados de cuenta como pruebas de gastos." },
      { objective: "O2", q: "¿Cuál es la forma más fácil de evitar que los recibos de papel se borren o se pierdan?", options: ["Guardarlos en el bolsillo", "Tomarles una foto y archivarlos el mismo día", "Tirarlos después de una semana", "Dárselos a los clientes"], answer: 1, why: "Una foto el mismo día, archivada por mes, mantiene segura la prueba." },
      { objective: "O2", q: "Para muchas declaraciones de impuestos en Estados Unidos, la regla básica del IRS es guardar los registros durante:", options: ["1 semana", "3 años, más en algunos casos", "1 mes", "Nunca; no se necesitan registros"], answer: 1, why: "El IRS dice 3 años en la mayoría de los casos, y periodos más largos en algunos." },
      { objective: "O2", q: "Los registros de impuestos sobre la nómina deben guardarse al menos:", options: ["1 mes", "1 año", "4 años", "10 días"], answer: 2, why: "El IRS dice al menos 4 años después de la fecha en que el impuesto vence o se paga." },
      { objective: "O3", q: "¿Por qué guardar el dinero del negocio en su propia cuenta o billetera?", options: ["Para poder saber si el negocio está ganando dinero", "Porque mezclar dinero es divertido", "Para no tener que guardar recibos", "Para esconder ventas"], answer: 0, why: "El dinero mezclado esconde cómo le va de verdad al negocio." },
      { objective: "O3", q: "Pagaste materiales del negocio con tu tarjeta personal. ¿Qué haces?", options: ["Olvidarlo", "Anotarlo como una venta", "Tirar el recibo", "Anotarlo en el libro de registro y guardar el recibo"], answer: 3, why: "Anotarlo mantiene completas las cuentas y segura la prueba." },
      { objective: "O3", q: "Un donante da dinero solo para un programa deportivo juvenil. La organización sin fines de lucro debe:", options: ["Gastarlo en cualquier cosa", "Devolverlo de inmediato", "No anotarlo", "Llevar la cuenta para que se gaste en ese programa"], answer: 3, why: "Los regalos restringidos deben seguirse y usarse para su fin." },
      { objective: "O4", q: "Un libro de registro tiene:", options: ["Una página por cliente", "Una línea por transacción", "Solo el total del año", "Solo los gastos"], answer: 1, why: "Cada venta, pago o compra es su propia línea." },
      { objective: "O4", q: "En una hoja de cálculo, una fórmula empieza con:", options: ["#", "$", "=", "?"], answer: 2, why: "Las fórmulas de las hojas de cálculo empiezan con el signo igual." },
      { objective: "O4", q: "Saldo es la columna F, Entradas la D, Salidas la E. El saldo acumulado en la fila 3 es:", options: ["=F2+D3-E3", "=D3*E3", "=F2-D3-E3", "=E3"], answer: 0, why: "Toma el saldo de arriba, suma las entradas y resta las salidas." },
      { objective: "O5", q: "¿Cuál es un buen hábito para mantener al día las cuentas?", options: ["Ponerlas al día una vez por semana a una hora fija", "Ponerlas al día solo cuando escribe la oficina de impuestos", "Ponerlas al día una vez cada varios años", "No ponerlas al día nunca"], answer: 0, why: "Un hábito semanal corto mantiene los registros completos y fáciles." },
      { objective: "O5", q: "Conciliar significa:", options: ["Hacer las paces con un cliente", "Borrar recibos viejos", "Comparar tu libro de registro con el estado de cuenta del banco o de dinero móvil", "Abrir una cuenta nueva"], answer: 2, why: "Conciliar encuentra y corrige las diferencias entre tus cuentas y el estado de cuenta." },
      { objective: "O5", q: "Una comisión del banco está en el estado de cuenta pero no en tu libro de registro. Debes:", options: ["Ignorarla", "Agregarla al libro de registro", "Cerrar la cuenta", "Borrar el estado de cuenta"], answer: 1, why: "Todo lo real que está en el estado de cuenta va en el libro de registro." },
      { objective: "O5", q: "Escribiste 45 en lugar de 54. Este tipo de error es:", options: ["Una línea que falta", "Una anotación repetida", "Una categoría nueva", "Dígitos invertidos"], answer: 3, why: "Los dígitos invertidos son una razón común por la que las cuentas no coinciden." },
      { objective: "O6", q: "Un estado de pérdidas y ganancias muestra:", options: ["Solo el saldo de tu banco", "Los nombres de tus clientes", "Los ingresos, los gastos y la diferencia de un periodo", "Tu puntaje de crédito"], answer: 2, why: "Un estado de pérdidas y ganancias resume los ingresos, los gastos y la ganancia o pérdida." },
      { objective: "O6", q: "¿Qué fórmula suma todos los montos de Suministros del libro de registro?", options: ["=SUM(Suministros)", "=Suministros+1", "=AVERAGE(C:C)", "=SUMIF(Registro!C:C,\"Suministros\",Registro!E:E)"], answer: 3, why: "SUMIF suma solo las filas cuya categoría es Suministros." },
      { objective: "O6", q: "Este mes los gastos son mayores que los ingresos. Eso es:", options: ["Una pérdida", "Una ganancia", "Un retiro del dueño", "Un recibo"], answer: 0, why: "Cuando los gastos son mayores que los ingresos, el resultado es una pérdida." },
      { objective: "O6", q: "Tu estado de pérdidas y ganancias está listo. ¿Es tu declaración de impuestos?", options: ["Sí, envíalo tal cual a la oficina de impuestos", "No; lleva tus registros a un contador para los impuestos", "Sí, si muestra ganancia", "Solo para organizaciones sin fines de lucro"], answer: 1, why: "Las reglas de impuestos deciden qué cuenta; un contador puede preparar tus impuestos." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      2,
      6,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Libro de registro creado",
        objective: "O4",
        notYet: "Faltan columnas o el saldo no se actualiza.",
        meets: "Las siete columnas, un saldo inicial y un saldo acumulado correcto después de cada línea.",
        exceeds: "Además tiene una lista fija de categorías en su propia pestaña, usada siempre con las mismas palabras."
      },
      {
        name: "Ingresos y gastos clasificados",
        objective: "O1",
        notYet: "Algunas líneas están en la categoría equivocada o no tienen categoría.",
        meets: "Al menos 10 transacciones, cada una con la categoría correcta de ingreso o gasto.",
        exceeds: "El retiro del dueño y el dinero personal usado para el negocio están anotados de la forma correcta."
      },
      {
        name: "Prueba de cada línea",
        objective: "O2",
        notYet: "Algunas líneas no tienen número de recibo ni prueba.",
        meets: "Cada línea tiene un número de recibo que coincide con un recibo o una hoja de ventas guardada.",
        exceeds: "Los recibos están en una carpeta del mes y los de papel se guardan en un sobre que coincide."
      },
      {
        name: "Comparado con el estado de cuenta",
        objective: "O5",
        notYet: "El libro de registro no se comparó con un estado de cuenta.",
        meets: "Se marcaron las líneas del estado de cuenta, se agregaron las que faltaban y los saldos coinciden o la diferencia está explicada.",
        exceeds: "Puede nombrar cada diferencia encontrada y cómo la corrigió."
      },
      {
        name: "Estado de pérdidas y ganancias leído",
        objective: "O6",
        notYet: "No hay estado de pérdidas y ganancias, o los totales están mal.",
        meets: "Un estado de pérdidas y ganancias con totales hechos con SUMIF, sin el retiro del dueño, que muestra la ganancia o la pérdida.",
        exceeds: "Dos oraciones claras dicen qué significan los números y una cosa que cambiar el mes que viene."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que, en el seguimiento a los 30 días, siguen poniendo al día su libro de registro cada semana y lo concilian cada mes",
      "Personas que usan sus registros para pedir un préstamo o una subvención, o los llevan a un contador en la temporada de impuestos",
      "Personas que empiezan otro curso de negocios de Koach Learn dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con una hoja de cálculo gratis: Google Sheets o Microsoft Excel",
      "Un mes de recibos reales o de ejemplo, y un estado de cuenta del banco o de dinero móvil (o uno de ejemplo)",
      "La cámara de un teléfono para fotografiar recibos, y sobres para los recibos de papel",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Ten listo un mes de transacciones de ejemplo y un estado de cuenta de ejemplo para quienes no quieran usar sus propios números.",
      "Creen juntos el libro de registro y la fórmula del saldo acumulado en una sola pantalla, y luego deja que cada persona lo copie.",
      "Recuerda que no deben pegar números de cuenta ni datos de clientes en herramientas de IA ni en pantallas compartidas.",
      "No des consejos de impuestos; manda las preguntas de impuestos a un contador o a la oficina de impuestos.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
