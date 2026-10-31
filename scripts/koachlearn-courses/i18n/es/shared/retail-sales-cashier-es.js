"use strict";

// Koach Learn course (Spanish translation of shared/retail-sales-cashier.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "retail-sales-cashier-es",
  lang: "es",
  translationOf: "retail-sales-cashier",
  category: "Workforce Development",
  name: "Ventas en tienda y habilidades de cajero",
  skills: "Cobrar una venta, Contar el cambio, Revisar identificaciones y billetes grandes, Sugerir productos sin presionar, Atender devoluciones y clientes molestos, Llevar un turno",
  outcome: "trabajar en una caja registradora de una tienda desde la apertura hasta el cierre: cobrar una venta, contar el cambio exacto, revisar la identificación y los billetes grandes antes de una venta, sugerir un producto útil, atender una devolución o a un cliente molesto según las reglas de la tienda y seguir una lista de tareas del turno.",
  about: [
    "Los trabajos de cajero y de ventas en tienda están entre los primeros empleos más comunes en Estados Unidos, y las tiendas contratan a personas sin experiencia. También son un buen primer paso para quienes vuelven a trabajar después de un tiempo fuera. Este curso te prepara para el primer día.",
    "Vas a practicar un cobro desde el saludo hasta el recibo, contar el cambio como lo hacen los cajeros con capacitación, revisar identificaciones para productos con límite de edad, detectar un billete falso y una estafa con tarjetas de regalo, sugerir un producto sin presionar y atender devoluciones y clientes molestos según las reglas.",
    "Cada tienda tiene su propia caja y sus propias reglas, y la tienda te capacita en ellas. Este curso te da las habilidades que sirven en cualquier tienda, para que aprendas más rápido y cometas menos errores. También te muestra una credencial real del comercio que puedes obtener.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" que puedes hacer en casa con monedas, billetes de un juego de mesa o tiras de papel. Hay dos preguntas rápidas después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz tu propia Tarjeta de Turno de Cajero en una página: (1) los pasos de apertura de tu caja, (2) tu guion de cobro desde el saludo hasta el recibo, con una frase de sugerencia, (3) el registro de cinco ventas de práctica en las que contaste el cambio exacto, (4) tus pasos para una venta con límite de edad y para un billete grande, (5) las tres situaciones en las que llamarás a un gerente, (6) los pasos de cierre y (7) una línea con la credencial del comercio o el empleo que vas a buscar y la fecha en que empezarás.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Jóvenes que buscan su primer empleo, personas adultas que regresan a casa después de estar en prisión y personas adultas que cambian de carrera o vuelven a trabajar. Muchas nunca han trabajado en una caja; algunas han usado el autocobro, pero nunca han estado detrás de un mostrador.",
    startingPoint: "Pueden sumar y restar dinero con algo de ayuda y conocen las monedas y los billetes. Tienen poca o ninguna experiencia con una caja registradora (punto de venta), un cajón de dinero, la revisión de identificaciones, las reglas de una tienda o las ventas.",
    gap: "Las tiendas contratan por la actitud y capacitan en el trabajo, pero los cajeros nuevos que son lentos con el cambio, que dudan al revisar una identificación o que se ponen nerviosos con clientes molestos son los que terminan con faltantes en la caja o pierden el empleo pronto. Las personas necesitan los hábitos básicos antes del primer turno para pasar la entrevista, terminar rápido la capacitación y conservar el empleo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 7.º grado)",
      "Dispositivos: un teléfono o una computadora de la biblioteca; la práctica usa monedas, dinero de juguete o tiras de papel, sin necesidad de una caja",
      "Tiempo: lecciones de 4 a 6 minutos",
      "Cada tienda tiene su propia caja, sus reglas y sus normas; las personas siguen la capacitación de su tienda",
      "Las reglas de ventas con límite de edad cambian según el estado; en algunos estados los adolescentes no pueden vender alcohol ni tabaco",
      "Seguridad: no perseguir a quien roba en la tienda y no resistirse a un asalto; seguir las reglas de la tienda y llamar al 911"
    ],
    prerequisites: "Ninguno. Quien quiera más práctica con porcentajes y dinero puede tomar \"Matemáticas cotidianas para el trabajo y la vida\"; \"Excelencia en el servicio al cliente\" profundiza en el servicio."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Con una venta de práctica de varios productos, un cupón y un pago", action: "cobrar una venta desde el saludo hasta el recibo en el orden correcto", standard: "con el total correcto y dando las gracias cada vez" },
    { id: "O2", condition: "Con un total y el efectivo que te da un cliente", action: "contar el cambio a un cliente con el método de contar hacia arriba", standard: "con el cambio exacto en 5 de 5 ventas de práctica" },
    { id: "O3", condition: "Con un producto con límite de edad, un billete grande o un cliente que compra muchas tarjetas de regalo", action: "revisar la identificación, el billete o las señales de alerta antes de terminar la venta", standard: "cumpliendo la ley y las reglas de la tienda, y llamando a un gerente cuando algo está mal" },
    { id: "O4", condition: "Con un cliente que busca algo", action: "hacer una pregunta abierta y sugerir un producto relacionado con su beneficio", standard: "sin presionar y aceptando un no con amabilidad" },
    { id: "O5", condition: "Con una devolución, un problema de precio o un cliente molesto", action: "resolver el problema según las reglas de la tienda y llamar a un gerente cuando no te corresponda", standard: "manteniendo la calma y cuidando tu seguridad y la de los demás" },
    { id: "O6", condition: "Usando lo que aprendiste en este curso", action: "escribir una lista de una página para abrir, atender y cerrar una caja", standard: "con todos los pasos en orden y la fecha de tu próximo paso hacia un empleo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: La caja y el dinero",
      lessons: [
        {
          title: "El cobro, del saludo al recibo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Cobrar una venta de práctica en el orden correcto, desde el saludo hasta el recibo.",
          text: [
            "Los cajeros escanean productos, cobran, dan el cambio y el recibo, empacan, hacen devoluciones y responden preguntas. Según la Oficina de Estadísticas Laborales de EE. UU. (BLS), la capacitación suele ser en el trabajo y dura hasta unas pocas semanas. No se pide diploma ni licencia, aunque muchas tiendas prefieren un diploma de secundaria o el GED (el examen que equivale a la secundaria).",
            "Cada caja es distinta, pero todos los cobros siguen el mismo orden: saluda al cliente, escanea cada producto y mira el precio en la pantalla, aplica cupones o descuentos, dile el total al cliente, recibe el pago, da el cambio y el recibo, y dale las gracias.",
            "Mira la pantalla mientras escaneas. Si un producto se marca dos veces, o el precio no es el de la etiqueta del estante, detente y corrígelo antes de cobrar. Tu capacitador te mostrará cómo quitar (anular) un producto y cómo pedir una verificación de precio en tu caja.",
            "Los clientes pagan con efectivo, tarjetas (acercándola, insertándola o deslizándola), billeteras del teléfono, tarjetas de regalo o tarjetas de beneficios. Deja que el cliente maneje su propia tarjeta y su PIN. Nunca pidas el PIN en voz alta y nunca te quedes con la tarjeta de un cliente."
          ],
          steps: [
            "Saluda al cliente y míralo a los ojos: \"Hola, ¿encontró todo lo que buscaba?\"",
            "Escanea cada producto y revisa en la pantalla que el nombre y el precio sean correctos.",
            "Pregunta por cupones o por el número de recompensas de la tienda antes de sacar el total.",
            "Di el total en voz alta: \"Su total es $23.40.\"",
            "Recibe el pago y sigue las indicaciones de la caja.",
            "Da el cambio y el recibo, y dale las gracias al cliente."
          ],
          words: [
            ["POS (punto de venta)", "el sistema de la caja: la pantalla, el escáner, el lector de tarjetas y el cajón del dinero."],
            ["Anular", "quitar un producto de la venta antes de que se pague."],
            ["Verificación de precio", "pedirle a un compañero o al sistema el precio correcto de un producto."],
            ["Recibo", "el comprobante impreso o enviado por correo electrónico de lo que el cliente compró y pagó."]
          ],
          slides: [
            { title: "Qué hacen los cajeros", bullets: ["Escanean productos, cobran, dan el cambio y el recibo", "Empacan y hacen devoluciones", "La capacitación es en el trabajo, por lo general unas semanas"] },
            { title: "El mismo orden en cada venta", bullets: ["Saludo, escaneo, cupones, total", "Pago, cambio y recibo", "Dar las gracias al cliente"] },
            { title: "Mira la pantalla", bullets: ["¿Un producto se marcó dos veces? Corrígelo antes de cobrar", "¿El precio no es el de la etiqueta? Pide una verificación de precio", "Tu capacitador te enseña a anular un producto"] },
            { title: "Pagos con tarjeta", bullets: ["El cliente maneja su propia tarjeta y su PIN", "Nunca pidas el PIN en voz alta", "Nunca te quedes con la tarjeta de un cliente"] }
          ],
          sources: [{ name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Cajeros (Manual de Perspectivas Ocupacionales)", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }],
          tryIt: "Pon cinco objetos de tu casa sobre una mesa y escribe un precio en una tira de papel para cada uno. Haz de cajero: saluda a un cliente imaginario, \"escanea\" cada objeto leyendo su precio en voz alta y anotándolo, descuenta $2 con un cupón, di el total y dale las gracias al cliente. Revisa tu total con una calculadora.",
          youCanNow: "cobrar una venta en el orden correcto, detectar un error de escaneo antes del pago y recibir un pago con tarjeta de forma segura.",
          quickCheck: [
            { objective: "O1", q: "¿Qué va justo antes de decirle el total al cliente?", options: ["Preguntar por cupones o por un número de recompensas", "Dar el recibo", "Contar el cambio", "Despedirse"], answer: 0, why: "Los cupones y las recompensas se aplican antes del total; si no, el total queda mal." },
            { objective: "O1", q: "Una camisa se marca dos veces en la pantalla. ¿Qué haces?", options: ["Dejar que el cliente lo vea en el recibo", "Cobrarle y corregirlo la próxima vez", "Detenerte y quitar el producto de más antes del pago", "Quitar la segunda camisa del estante"], answer: 2, why: "Corregir el doble escaneo antes del pago mantiene bien el total y evita una devolución después." }
          ]
        },
        {
          title: "Contar el cambio y mantener bien tu caja",
          objectives: ["O2"],
          minutes: 6,
          goal: "Contar el cambio exacto, contando hacia arriba desde el total hasta la cantidad pagada.",
          text: [
            "Aunque la caja muestre el cambio, los cajeros con capacitación lo cuentan en voz alta. Así se detectan errores y el cliente ve que el cambio está bien. Se llama el método de contar hacia arriba: empiezas en el total y cuentas hacia arriba hasta la cantidad que te dio el cliente.",
            "Ejemplo: el total es $13.47 y el cliente te da $20. Di \"$13.47\", luego da 3 monedas de 1 centavo (\"$13.50\"), 2 monedas de 25 centavos (\"$14\"), un dólar (\"$15\") y un billete de cinco (\"y $20\"). Eso es $6.53 de cambio.",
            "Deja el billete del cliente encima del cajón, no adentro, hasta terminar de contar el cambio. Si dice \"le di uno de cincuenta\", los dos pueden ver que era de veinte.",
            "Tu cajón (también llamado caja) empieza cada turno con una cantidad fija que cuentas con un gerente. Al final se cuenta otra vez. Se revisa si sobra o falta dinero (\"sobrante/faltante\"), así que nunca dejes que otra persona use tu cajón y nunca mezcles tu propio dinero."
          ],
          steps: [
            "Di el total en voz alta.",
            "Pon el efectivo del cliente encima del cajón, no adentro.",
            "Cuenta hacia arriba primero con las monedas más pequeñas, diciendo cada nueva cantidad.",
            "Luego cuenta hacia arriba con billetes hasta llegar a la cantidad que te dio.",
            "Guarda el efectivo del cliente en el cajón y ciérralo."
          ],
          words: [
            ["Método de contar hacia arriba", "dar el cambio empezando en el total y sumando monedas y billetes hasta llegar a la cantidad pagada."],
            ["Cajón (caja)", "la bandeja del dinero de la caja registradora de la que es responsable un solo cajero."],
            ["Sobrante/faltante", "la diferencia entre lo que debería tener el cajón y lo que de verdad tiene al final del turno."]
          ],
          slides: [
            { title: "Cuenta hacia arriba, en voz alta", bullets: ["Empieza en el total", "Suma monedas y luego billetes", "Detente en la cantidad que te dio el cliente"] },
            { title: "Ejemplo: $13.47 con $20", bullets: ["3 monedas de 1 centavo: $13.50", "2 monedas de 25 centavos: $14. Un dólar: $15", "Un billete de cinco: $20. Cambio: $6.53"] },
            { title: "Protégete", bullets: ["Deja su billete encima del cajón hasta dar el cambio", "Luego guárdalo", "Así se resuelve cualquier \"le di uno de cincuenta\""] },
            { title: "Tu cajón es tuyo", bullets: ["Cuéntalo con un gerente al inicio y al final", "Nadie más usa tu cajón", "Nunca mezcles tu propio dinero"] }
          ],
          tryIt: "Usa monedas reales o dinero de juguete. Haz estas tres ventas en voz alta con el método de contar hacia arriba: total $7.80 pagado con $10; total $4.35 pagado con $5; total $26.62 pagado con $30. Escribe el cambio de cada una y revisa: $2.20, $0.65 y $3.38.",
          youCanNow: "contar el cambio exacto con el método de contar hacia arriba y proteger tu cajón de errores.",
          quickCheck: [
            { objective: "O2", q: "El total es $7.80 y el cliente paga con $10. ¿Qué cambio cuentas?", options: ["$3.20", "$2.20", "$2.80", "$1.20"], answer: 1, why: "Dos monedas de 10 centavos te llevan a $8.00 y dos dólares a $10.00, así que el cambio es $2.20." },
            { objective: "O2", q: "¿Dónde debe estar el billete de $20 del cliente mientras cuentas su cambio?", options: ["En tu bolsillo", "Debajo del cajón", "De vuelta en la mano del cliente", "Encima del cajón, donde los dos lo pueden ver"], answer: 3, why: "Tenerlo a la vista hasta terminar el cambio resuelve cualquier duda sobre con qué pagó." }
          ]
        },
        {
          title: "Identificaciones, billetes grandes y estafas en la caja",
          objectives: ["O3"],
          minutes: 6,
          goal: "Revisar una identificación, un billete grande y las señales de una estafa con tarjetas de regalo antes de terminar la venta.",
          text: [
            "Algunos productos tienen límite de edad. Según la ley federal, nadie menor de 21 años puede comprar tabaco ni vapeadores, y la FDA (la agencia de EE. UU. que regula alimentos, medicinas y tabaco) dice que se pida identificación con foto a cualquier persona menor de 30. El alcohol también se compra desde los 21 en todos los estados. La edad para VENDER alcohol o tabaco como cajero la fija cada estado, y las tiendas a menudo agregan sus propias reglas. Tu tienda te lo dirá.",
            "Para revisar una identificación: compara la foto con la cara, revisa que no esté vencida y lee la fecha de nacimiento. Una forma rápida: si hoy es 15 de marzo de 2027, el cliente debe haber nacido el 15 de marzo de 2006 o antes para tener 21. Si no estás seguro, o la identificación parece alterada, no vendas y llama a un gerente. Venderle a un menor puede traer multas para ti y para la tienda.",
            "Para un billete grande, usa las revisiones de uscurrency.gov. En uno de $100: inclínalo y las campanas de la cinta azul cambian a 100, y el 100 de la esquina cambia de cobre a verde; ponlo a contraluz para ver el retrato de la marca de agua y el hilo de seguridad; toca la impresión áspera y en relieve. Si un billete no pasa la revisión, no acuses al cliente: llama a un gerente. Las tiendas reportan los billetes sospechosos al Servicio Secreto de EE. UU.",
            "Las estafas con tarjetas de regalo pasan en la caja. Los estafadores le dicen a la gente que compre tarjetas de regalo para pagar una \"tarifa del gobierno\" o ayudar a un \"familiar en problemas\". La FTC (la agencia de EE. UU. que protege a los consumidores) dice que ningún negocio ni agencia real pide pagos con tarjetas de regalo. Si un cliente compra muchas tarjetas mientras alguien por teléfono le dice qué hacer, sigue las reglas de tu tienda, que pueden ser llamar a un gerente o compartir esa advertencia con amabilidad."
          ],
          steps: [
            "Producto con límite de edad: pide identificación con foto si el cliente parece menor de 30.",
            "Compara la foto, revisa que no esté vencida y calcula la edad con la fecha de nacimiento.",
            "Billete grande: inclínalo, ponlo a contraluz y tócalo.",
            "Tarjetas de regalo: fíjate si son muchas tarjetas, si hay prisa o si alguien por teléfono da órdenes.",
            "Si algo está mal: no termines la venta; llama a un gerente."
          ],
          words: [
            ["Producto con límite de edad (restringido por edad)", "un producto que, por ley, solo pueden comprar personas mayores de cierta edad, como el tabaco o el alcohol."],
            ["Billete falso", "dinero falso hecho para que parezca real."],
            ["Marca de agua", "una imagen tenue dentro del papel del billete que se ve al ponerlo a contraluz."],
            ["Estafa con tarjetas de regalo", "un engaño en el que alguien presiona a una persona para que le pague con los números de tarjetas de regalo."]
          ],
          slides: [
            { title: "Ventas con límite de edad", bullets: ["Tabaco y vapeadores: 21 años para comprar (ley federal)", "FDA: pide identificación con foto a cualquier persona menor de 30", "Alcohol: 21 para comprar; la edad para vender la fija tu estado"] },
            { title: "Revisar una identificación", bullets: ["La foto coincide con la cara", "No está vencida", "Nació en la fecha de hoy hace 21 años o antes", "¿No estás seguro? No vendas. Llama a un gerente."] },
            { title: "Revisar un billete de $100", bullets: ["Inclínalo: las campanas cambian a 100; el 100 de la esquina pasa de cobre a verde", "A contraluz: retrato de la marca de agua e hilo de seguridad", "Al tacto: impresión áspera y en relieve"] },
            { title: "Señales de estafa con tarjetas de regalo", bullets: ["Muchas tarjetas, prisa, alguien por teléfono dando órdenes", "Ningún negocio ni agencia real acepta tarjetas de regalo como pago", "Sigue las reglas de la tienda; llama a un gerente"] }
          ],
          sources: [
            { name: "FDA: Tabaco 21", url: "https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21" },
            { name: "Programa de Educación sobre la Moneda de EE. UU.: elementos de seguridad del billete de $100", url: "https://www.uscurrency.gov/denominations/100" },
            { name: "Programa de Educación sobre la Moneda de EE. UU.: reportar un billete falso", url: "https://www.uscurrency.gov/report-counterfeit" },
            { name: "FTC: Cómo evitar y reportar estafas con tarjetas de regalo", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" }
          ],
          tryIt: "Toma cualquier billete que tengas (de $1, $5, $10 o $20). Ponlo a contraluz, inclínalo y tócalo, y anota todos los elementos de seguridad que encuentres. Luego usa la fecha de hoy para escribir la fecha de nacimiento más reciente que tiene la edad para comprar tabaco.",
          youCanNow: "revisar una identificación antes de una venta con límite de edad, revisar un billete grande y detectar las señales de una estafa con tarjetas de regalo.",
          quickCheck: [
            { objective: "O3", q: "Un cliente que parece tener unos 25 años quiere comprar vapeadores. ¿Qué haces?", options: ["Venderle porque parece mayor de 21", "Preguntarle su edad y creerle", "Pedirle identificación con foto y revisar la fecha de nacimiento", "No venderle vapeadores a nadie"], answer: 2, why: "La FDA dice que se pida identificación con foto a cualquier persona menor de 30 que compre productos de tabaco." },
            { objective: "O3", q: "El número de la esquina de un billete de $100 no cambia de color al inclinarlo. ¿Qué haces?", options: ["Llamar a un gerente sin acusar al cliente", "Decirle al cliente que es un delincuente", "Aceptarlo igual; seguro está bien", "Romperlo por la mitad"], answer: 0, why: "Si una revisión falla, se llama a un gerente; la tienda se encarga de los billetes sospechosos y los reporta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La caja y el dinero",
        questions: [
          { objective: "O1", q: "¿Cuál es el orden correcto de un cobro?", options: ["Pago, escaneo, saludo, recibo", "Escaneo, recibo, saludo, pago", "Saludo, escaneo, total, pago, cambio y recibo", "Total, saludo, escaneo, gracias"], answer: 2, why: "Toda venta sigue saludo, escaneo, cupones, total, pago, cambio y recibo, gracias." },
          { objective: "O1", q: "Un cliente quiere pagar con tarjeta. ¿Qué te toca a ti?", options: ["Dejar que maneje su propia tarjeta y su PIN, y seguir las indicaciones de la caja", "Pedirle que diga su PIN para que tú lo escribas", "Quedarte con la tarjeta hasta terminar la venta", "Escribir el número de la tarjeta en el recibo"], answer: 0, why: "Los clientes manejan su propia tarjeta y su PIN; los cajeros nunca los piden ni se quedan con ellos." },
          { objective: "O2", q: "El total es $4.35 y el cliente paga con $5. ¿Cuál es el cambio correcto?", options: ["$1.35", "$0.75", "$0.55", "$0.65"], answer: 3, why: "Una moneda de 5 centavos hasta $4.40, una de 10 hasta $4.50 y dos de 25 hasta $5.00 suman $0.65." },
          { objective: "O3", q: "Hoy es 15 de marzo de 2027. Para comprar alcohol, un cliente debe haber nacido el:", options: ["15 de marzo de 2009 o antes", "15 de marzo de 2006 o antes", "15 de marzo de 2007 o antes", "1 de enero de 2006 o antes"], answer: 1, why: "21 años antes del 15 de marzo de 2027 es el 15 de marzo de 2006." },
          { objective: "O3", q: "Un cliente que habla por teléfono compra $500 en tarjetas de regalo y dice que quien llama es \"del gobierno\". ¿Qué es esto lo más probable?", options: ["Un regalo normal", "Una promoción de la tienda", "Una estafa con tarjetas de regalo", "Una devolución de impuestos"], answer: 2, why: "La FTC dice que ningún negocio ni agencia del gobierno real pide pagos con tarjetas de regalo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Vender, atender y llevar un turno",
      lessons: [
        {
          title: "Ayudar a los clientes a elegir, sin presionar",
          objectives: ["O4"],
          minutes: 5,
          goal: "Hacer una pregunta abierta y sugerir un producto relacionado con su beneficio.",
          text: [
            "Vender en una tienda es ayudar a la gente a encontrar lo que vino a buscar y algo que lo haga funcionar mejor. Empieza con una pregunta abierta, una que no se puede responder con sí o no: \"¿Para qué lo va a usar?\"",
            "Luego da un beneficio, no solo una característica. Una característica es lo que tiene el producto (\"esta funda de teléfono tiene un borde elevado\"); un beneficio es lo que hace por el cliente (\"así la pantalla está protegida si cae boca abajo\").",
            "Una sugerencia (las tiendas la llaman venta sugestiva o producto adicional) es un solo producto relacionado: pilas con un juguete, una funda con un teléfono, calcetines con zapatos. Sugiere uno, di por qué y, si te dicen que no, sonríe y déjalo. Presionar hace que la gente se vaya y no vuelva.",
            "Nunca inventes datos sobre un producto. Si no sabes, di \"Déjeme averiguarlo\" y pregúntale a un compañero o lee la etiqueta."
          ],
          steps: [
            "Saluda y haz una pregunta abierta: \"¿Para qué lo va a usar?\"",
            "Escucha la respuesta.",
            "Señala un beneficio que encaje con lo que dijo.",
            "Sugiere un producto relacionado y di por qué.",
            "Acepta un no con amabilidad: \"¡No hay problema!\""
          ],
          words: [
            ["Pregunta abierta", "una pregunta que necesita más que un sí o un no como respuesta."],
            ["Característica", "algo que tiene un producto."],
            ["Beneficio", "lo que esa característica hace por el cliente."],
            ["Venta sugestiva (producto adicional)", "ofrecer un producto relacionado que ayuda al cliente."]
          ],
          slides: [
            { title: "Empieza con una pregunta abierta", bullets: ["\"¿Para qué lo va a usar?\"", "No \"¿Le puedo ayudar?\" (es fácil decir que no)", "Escucha la respuesta"] },
            { title: "Característica o beneficio", bullets: ["Característica: un borde elevado en la funda", "Beneficio: la pantalla está protegida si cae boca abajo", "Los clientes compran beneficios"] },
            { title: "Una sugerencia, sin presionar", bullets: ["Pilas con un juguete, calcetines con zapatos", "Di por qué ayuda", "Un no está bien: sonríe y sigue"] }
          ],
          tryIt: "Elige tres objetos de tu casa. Para cada uno, escribe una pregunta abierta que le harías a un comprador, un beneficio y un producto relacionado que podrías sugerir con una razón corta. Dilos en voz alta.",
          youCanNow: "hacer una pregunta abierta, explicar un beneficio y sugerir un producto sin presionar.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es una pregunta abierta?", options: ["\"¿Le puedo ayudar?\"", "\"¿Quiere una bolsa?\"", "\"¿Es todo?\"", "\"¿Para qué lo va a usar?\""], answer: 3, why: "Necesita más que un sí o un no, así que sabes qué necesita el cliente." },
            { objective: "O4", q: "Sugieres una funda de teléfono y el cliente dice que no, gracias. ¿Qué haces?", options: ["Preguntarle tres veces más", "Sonreír, decir \"No hay problema\" y terminar la venta", "Decirle que se va a arrepentir", "Ponerla en la bolsa de todos modos"], answer: 1, why: "Una sugerencia ayuda; insistir después de un no aleja a los clientes." }
          ]
        },
        {
          title: "Devoluciones, problemas de precio y clientes molestos",
          objectives: ["O5"],
          minutes: 6,
          goal: "Atender una devolución, un problema de precio o a un cliente molesto según las reglas de la tienda, y llamar a un gerente cuando haga falta.",
          text: [
            "Cada tienda tiene una política de devoluciones: cuántos días, si se necesita recibo y cómo se devuelve el dinero (a la tarjeta, en efectivo o como crédito de la tienda). Aprende la tuya en la capacitación. Aplícala igual para todos y pide un gerente cuando una devolución esté fuera de la política.",
            "Los problemas de precio son comunes: la etiqueta del estante dice $4.99 y la caja dice $5.49. Mantén la calma, haz una verificación de precio y sigue la regla de tu tienda. No discutas y no cambies precios por tu cuenta.",
            "Con un cliente molesto, usa cuatro pasos: escucha sin interrumpir, pide disculpas por la molestia, resuelve lo que puedas o trae a un gerente, y dale las gracias. El curso \"Excelencia en el servicio al cliente\" profundiza más.",
            "Tu seguridad es primero. No persigas ni agarres a quien roba en la tienda; avísale a un gerente o a seguridad. Si un cliente te amenaza, o en un asalto, no discutas ni pelees: sigue la capacitación de seguridad de tu tienda, entrega lo que te piden y llama al 911 cuando sea seguro. La OSHA (la agencia de EE. UU. de seguridad en el trabajo) señala manejar dinero con el público y trabajar de noche como factores de riesgo de violencia en el trabajo."
          ],
          steps: [
            "Devolución: revisa el recibo, la fecha y el producto según la política.",
            "Problema de precio: haz una verificación de precio y sigue la regla de la tienda.",
            "Cliente molesto: escucha, discúlpate, resuelve o trae a un gerente, da las gracias.",
            "Si no te corresponde o no es seguro: llama a un gerente, a seguridad o al 911."
          ],
          words: [
            ["Política de devoluciones", "las reglas de la tienda para recibir productos de vuelta y devolver el dinero."],
            ["Crédito de la tienda", "dinero devuelto que solo se puede gastar en esa tienda."],
            ["Autorización del gerente", "cuando un gerente aprueba algo que la caja no deja hacer al cajero solo."],
            ["Robo en tiendas", "llevarse productos de una tienda sin pagar."]
          ],
          slides: [
            { title: "Devoluciones", bullets: ["Aprende los días, la regla del recibo y el tipo de reembolso de tu tienda", "Las mismas reglas para todos", "¿Fuera de la política? Pide un gerente"] },
            { title: "Problemas de precio", bullets: ["Mantén la calma y haz una verificación de precio", "Sigue la regla de la tienda", "Nunca cambies un precio por tu cuenta"] },
            { title: "Clientes molestos", bullets: ["Escucha sin interrumpir", "Pide disculpas por la molestia", "Resuelve o trae a un gerente, y luego da las gracias"] },
            { title: "La seguridad es primero", bullets: ["Nunca persigas ni agarres a quien roba en la tienda", "En un asalto: no discutas ni pelees; sigue tu capacitación", "Llama al 911 cuando sea seguro"] }
          ],
          sources: [{ name: "OSHA: Violencia en el lugar de trabajo", url: "https://www.osha.gov/workplace-violence" }],
          tryIt: "Con un amigo, o tú solo en voz alta, actúa esto: un cliente está enojado porque una etiqueta de $4.99 se marcó como $5.49. Usa los cuatro pasos. Luego escribe dos tipos de devoluciones que mandarías a un gerente.",
          youCanNow: "atender con calma una devolución, un problema de precio y a un cliente molesto, y saber cuándo llamar a un gerente o al 911.",
          quickCheck: [
            { objective: "O5", q: "Un cliente quiere devolver un producto después del plazo de devolución de la tienda. ¿Qué haces?", options: ["Llamar a un gerente", "Devolverle el efectivo de todos modos", "Gritarle que ya es tarde", "Esconder el producto"], answer: 0, why: "Todo lo que está fuera de la política va a un gerente, que puede decidir." },
            { objective: "O5", q: "Ves que alguien se mete un cargador de teléfono en el abrigo y sale. ¿Qué haces?", options: ["Perseguirlo hasta el estacionamiento", "Agarrarlo del brazo", "Avisar de inmediato a un gerente o a seguridad", "Ignorarlo y no decir nada"], answer: 2, why: "Tu seguridad es primero; las tiendas manejan los robos por medio de los gerentes y de seguridad." }
          ]
        },
        {
          title: "Tu tarjeta de turno y tu camino al empleo",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escribir una lista de una página para el turno y poner fecha a tu próximo paso hacia un empleo.",
          text: [
            "Un buen turno tiene tres partes. Apertura: marca tu entrada a tiempo, cuenta tu cajón con un gerente, revisa el papel de la caja y las bolsas, y limpia tu área. Durante el turno: sigue el orden del cobro, cuenta el cambio, revisa identificaciones y mantén el cajón cerrado entre ventas. Cierre: cuenta tu cajón con un gerente, reporta con honestidad el sobrante o faltante, limpia y marca tu salida.",
            "Ponerlo todo en una tarjeta te ayuda a aprender rápido y le muestra a quien contrata que estás listo. Llévala a la entrevista y explícala.",
            "Una credencial puede ayudar a tu solicitud. La NRF Foundation (parte de la Federación Nacional de Minoristas de EE. UU.) tiene RISE Up, un programa de capacitación y credenciales, con credenciales como Retail Industry Fundamentals (fundamentos del comercio), Customer Service and Sales (servicio al cliente y ventas) y Customer Conflict De-escalation (calmar conflictos con clientes). Este curso te PREPARA; no otorga una credencial. Consulta nrffoundation.org para saber cómo inscribirte y cuánto cuesta, o pregunta en un centro de empleo o programa local, que quizás la ofrezca.",
            "Después, postúlate. Las tiendas contratan todo el año, y más antes de las fiestas. Postúlate en línea en la página de empleos de la propia tienda o en persona, y nunca le pagues a nadie para conseguir un empleo."
          ],
          steps: [
            "Escribe tus pasos de apertura.",
            "Escribe tu guion de cobro, con una frase de sugerencia.",
            "Agrega tu práctica de cambio y tus pasos para identificaciones y billetes grandes.",
            "Anota tres situaciones en las que llamarás a un gerente.",
            "Escribe tus pasos de cierre.",
            "Agrega un próximo paso con fecha: una credencial o una solicitud de empleo."
          ],
          words: [
            ["Marcar entrada / marcar salida", "registrar la hora en que empiezas y terminas de trabajar."],
            ["Credencial", "un certificado o insignia que muestra que pasaste una prueba de una habilidad."],
            ["RISE Up", "el programa de capacitación y credenciales para el comercio de la NRF Foundation."]
          ],
          slides: [
            { title: "Apertura", bullets: ["Marca tu entrada a tiempo", "Cuenta tu cajón con un gerente", "Revisa el papel, las bolsas y tu área"] },
            { title: "Durante el turno y cierre", bullets: ["Orden del cobro, contar el cambio, revisar identificaciones", "Cajón cerrado entre ventas", "Cierre: cuenta con un gerente y reporta con honestidad el sobrante o faltante"] },
            { title: "Una credencial del comercio", bullets: ["Credenciales RISE Up de la NRF Foundation", "Retail Industry Fundamentals, Customer Service and Sales", "Este curso te prepara; no otorga una credencial"] },
            { title: "Tu próximo paso", bullets: ["Lleva tu tarjeta de turno a las entrevistas", "Postúlate en la página de empleos de la propia tienda", "Nunca le pagues a nadie para conseguir un empleo"] }
          ],
          sources: [
            { name: "NRF Foundation: RISE Up", url: "https://nrffoundation.org/riseup" },
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Cajeros", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }
          ],
          tryIt: "Haz tu Tarjeta de Turno de Cajero en una página (en papel o en una nota del teléfono) con las siete partes de la tarea final. Haz cinco ventas contando el cambio con dinero de juguete y anótalas en la tarjeta. Termina con una línea: la credencial o la tienda que vas a buscar y la fecha en que empezarás.",
          youCanNow: "abrir, atender y cerrar un turno de caja con una lista, y dar un próximo paso con fecha hacia un empleo en el comercio.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es lo primero que haces con tu cajón al inicio del turno?", options: ["Empezar a cobrarles a los clientes", "Pedir prestado el cajón de un compañero", "Agregarle tu propio dinero", "Contarlo con un gerente"], answer: 3, why: "Contar al inicio fija la cantidad de la que eres responsable." },
            { objective: "O6", q: "¿Qué te da este curso para una credencial RISE Up?", options: ["La credencial misma", "Preparación; la credencial la otorga la NRF Foundation", "Una licencia estatal", "Nada en absoluto"], answer: 1, why: "El curso te prepara; la credencial viene del programa RISE Up de la NRF Foundation." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Vender, atender y llevar un turno",
        questions: [
          { objective: "O4", q: "¿Cuál es un beneficio y no una característica?", options: ["La funda tiene un borde elevado", "La pantalla queda protegida si el teléfono cae boca abajo", "La funda es azul", "La funda es de plástico"], answer: 1, why: "Un beneficio dice lo que la característica hace por el cliente." },
          { objective: "O4", q: "Un cliente compra un carro a control remoto. ¿Cuál es una buena sugerencia?", options: ["Un trapeador", "Un segundo carro por el que no preguntó", "Nada; nunca sugieras", "Las pilas que necesita, para que funcione al llegar a casa"], answer: 3, why: "Un producto relacionado con una razón ayuda al cliente." },
          { objective: "O5", q: "La etiqueta del estante dice $4.99, pero la caja dice $5.49. ¿Qué haces primero?", options: ["Mantener la calma y hacer una verificación de precio", "Cambiar tú mismo el precio en la caja", "Decirle al cliente que la etiqueta está mal sin revisar", "Negarte a vender el producto"], answer: 0, why: "La verificación de precio encuentra el precio correcto; después sigues la regla de la tienda." },
          { objective: "O5", q: "Alguien te amenaza y exige el dinero de tu cajón. ¿Qué haces?", options: ["Pelear para proteger el dinero", "Discutir con esa persona", "Seguir tu capacitación de seguridad, no resistirte y llamar al 911 cuando sea seguro", "Perseguirla fuera de la tienda"], answer: 2, why: "Tu seguridad es primero; el dinero se puede reponer." },
          { objective: "O6", q: "Al cierre, a tu cajón le faltan $3. ¿Qué haces?", options: ["Poner $3 de tu propio dinero", "Reportarlo con honestidad cuando cuentas con el gerente", "Tomar $3 de otro cajón", "Irte sin contar"], answer: 1, why: "El sobrante o faltante se cuenta y se reporta con honestidad; mezclar dinero esconde errores y va contra las reglas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Ventas en tienda y habilidades de cajero",
    questions: [
      { objective: "O1", q: "¿Cuándo debes preguntar por cupones o por un número de recompensas?", options: ["Después de que se imprime el recibo", "Antes de sacar el total de la venta", "La próxima vez que compre", "Solo si se queja"], answer: 1, why: "Los cupones y las recompensas van antes del total para que esté bien." },
      { objective: "O1", q: "¿Qué significa \"anular\" en una caja?", options: ["Dar un reembolso", "Abrir el cajón", "Imprimir un recibo", "Quitar un producto de la venta antes de que se pague"], answer: 3, why: "Anular quita un producto de la venta antes del pago." },
      { objective: "O1", q: "Un cliente quiere pagar con su tarjeta. ¿Qué es lo correcto?", options: ["El cliente la acerca o la inserta y escribe su propio PIN", "Le pides su PIN en voz alta", "Te quedas con su tarjeta detrás del mostrador", "Anotas el número de la tarjeta"], answer: 0, why: "El cliente maneja su propia tarjeta y su PIN." },
      { objective: "O2", q: "El total es $13.47 y el cliente te da $20. ¿Cuál es el cambio?", options: ["$7.53", "$6.47", "$6.53", "$7.47"], answer: 2, why: "3 monedas de 1 centavo hasta $13.50, 2 de 25 centavos hasta $14, $1 hasta $15 y $5 hasta $20: $6.53." },
      { objective: "O2", q: "En el método de contar hacia arriba empiezas en:", options: ["Cero", "El total de la venta", "La cantidad que te dio el cliente", "La cantidad que hay en el cajón"], answer: 1, why: "Cuentas hacia arriba desde el total hasta la cantidad pagada." },
      { objective: "O2", q: "¿Por qué dejar el billete del cliente encima del cajón hasta contar el cambio?", options: ["Para que los dos vean con qué pagó si hay alguna duda", "Para que no se moje", "Para que lo use el siguiente cliente", "Porque el cajón está lleno"], answer: 0, why: "Así se resuelve cualquier \"le di uno de cincuenta\"." },
      { objective: "O3", q: "¿Cuál es la edad mínima federal para comprar tabaco o vapeadores?", options: ["16", "18", "19", "21"], answer: 3, why: "La ley Tabaco 21 subió la edad federal a 21 en diciembre de 2019." },
      { objective: "O3", q: "La FDA dice que se pida identificación con foto a quienes compran tabaco y parecen menores de:", options: ["18", "21", "30", "40"], answer: 2, why: "La regla de la FDA es pedir identificación con foto a cualquier persona menor de 30." },
      { objective: "O3", q: "¿Cuál es una revisión que puedes hacer en un billete de $100?", options: ["Inclinarlo y ver que el 100 de la esquina cambia de cobre a verde", "Olerlo", "Doblarlo por la mitad", "Revisar la fecha en que se imprimió"], answer: 0, why: "La tinta que cambia de color es uno de los elementos de seguridad del billete de $100." },
      { objective: "O3", q: "¿Quién decide la edad mínima para VENDER alcohol como cajero?", options: ["El cliente", "Cada estado, más las reglas de tu tienda", "La FTC", "El cajero"], answer: 1, why: "La edad para vender la fija la ley de cada estado, y las tiendas a menudo agregan sus propias reglas." },
      { objective: "O4", q: "¿Qué pregunta te dirá más sobre lo que necesita un comprador?", options: ["\"¿Le puedo ayudar?\"", "\"¿Es todo?\"", "\"¿Para qué lo va a usar?\"", "\"¿Efectivo o tarjeta?\""], answer: 2, why: "Una pregunta abierta obtiene más que un sí o un no." },
      { objective: "O4", q: "¿Qué es la venta sugestiva?", options: ["Decirles a los clientes qué tienen que comprar", "Vender productos que no están en el estante", "Subir los precios", "Ofrecer un producto relacionado que ayuda al cliente"], answer: 3, why: "Es un producto adicional útil, no presión." },
      { objective: "O4", q: "No sabes si un calentador se puede usar sin peligro en un baño. ¿Qué dices?", options: ["\"Déjeme averiguarlo\"", "\"Sí, no hay problema\"", "\"No sé\" y te vas", "\"Nadie sabe\""], answer: 0, why: "Nunca inventes datos de un producto; averígualo con un compañero o en la etiqueta." },
      { objective: "O5", q: "Una devolución está fuera de la política de la tienda. ¿Qué haces?", options: ["Hacer el reembolso de todos modos", "Llamar a un gerente", "Decirle al cliente que se vaya", "Dar crédito de la tienda por tu cuenta"], answer: 1, why: "Las devoluciones fuera de la política van a un gerente." },
      { objective: "O5", q: "¿Cuáles son los cuatro pasos con un cliente molesto?", options: ["Discutir, explicar, negarse, irse", "Ignorar, esperar, sonreír, cerrar", "Escuchar, disculparse, resolver o traer a un gerente, dar las gracias", "Llamar al 911, cerrar la tienda, esperar, volver a abrir"], answer: 2, why: "Esos cuatro pasos calman a la mayoría de los clientes molestos." },
      { objective: "O5", q: "Ves que alguien sale robando de la tienda. ¿Cuál es la opción segura?", options: ["Correr tras esa persona", "Bloquear la puerta", "Agarrar la bolsa", "Avisar a un gerente o a seguridad"], answer: 3, why: "Nunca persigas ni agarres; la seguridad es primero." },
      { objective: "O5", q: "Durante un asalto, ¿qué es lo más importante?", options: ["Tu seguridad y la de los demás", "Proteger el dinero", "Saber el nombre del asaltante", "Terminar la venta"], answer: 0, why: "Sigue tu capacitación y no te resistas; el dinero se puede reponer." },
      { objective: "O6", q: "¿Qué va en tus pasos de cierre?", options: ["Prestarle tu cajón a un compañero", "Dejar el cajón para la mañana", "Contar tu cajón con un gerente y reportar con honestidad el sobrante o faltante", "Llevarte a casa el efectivo de más"], answer: 2, why: "Contar y reportar con honestidad cierra bien tu turno." },
      { objective: "O6", q: "¿Cuál es un programa real de credenciales para el comercio?", options: ["La licencia de comercio de la FTC", "RISE Up de la NRF Foundation", "La tarjeta de cajero de la OSHA", "La insignia de ventas del Servicio Secreto"], answer: 1, why: "RISE Up es el programa de capacitación y credenciales para el comercio de la NRF Foundation." },
      { objective: "O6", q: "Un \"reclutador\" dice que debes pagar $50 para conseguir un empleo de cajero. ¿Qué haces?", options: ["Pagar rápido", "Pagar la mitad ahora", "Darle tus datos bancarios", "No pagar; postularte en la página de empleos de la propia tienda"], answer: 3, why: "Los empleadores reales nunca te piden pagar para conseguir un empleo." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 6, 8, 10, 13, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Guion de cobro", objective: "O1", notYet: "Faltan pasos o están fuera de orden (por ejemplo, los cupones después del total).", meets: "Saludo, escaneo, cupones, total, pago, cambio y recibo, gracias, en orden.", exceeds: "También dice qué hacer cuando un producto se escanea dos veces o el precio no coincide." },
      { name: "Cambio exacto", objective: "O2", notYet: "Menos de 5 ventas de práctica, o algún cambio está mal.", meets: "5 de 5 ventas de práctica con el cambio exacto, contado con el método de contar hacia arriba.", exceeds: "Incluye al menos una venta con monedas y billetes, con el conteo hablado escrito completo." },
      { name: "Revisión de identificación y de billetes grandes", objective: "O3", notYet: "No hay paso de identificación, o la regla de edad está mal.", meets: "Revisa la foto, el vencimiento y la fecha de nacimiento, e inclina, mira a contraluz y toca los billetes grandes; llama a un gerente si tiene dudas.", exceeds: "También anota las señales de estafa con tarjetas de regalo y el paso de la tienda para ellas." },
      { name: "Sugerencia útil", objective: "O4", notYet: "No hay sugerencia, o es insistente.", meets: "Una frase de sugerencia con un beneficio y una forma amable de aceptar un no.", exceeds: "Empieza con una pregunta abierta que lleva a la sugerencia." },
      { name: "Cuándo llamar a un gerente", objective: "O5", notYet: "Menos de tres situaciones, o dice que hay que perseguir a quien roba.", meets: "Tres situaciones claras (por ejemplo, una devolución fuera de la política, un billete que no pasa la revisión, una identificación dudosa) y la seguridad primero.", exceeds: "Agrega qué decirle al cliente mientras llega el gerente." },
      { name: "Pasos del turno y próximo paso", objective: "O6", notYet: "Faltan los pasos de apertura o de cierre, o no hay un próximo paso con fecha.", meets: "Pasos de apertura, del turno y de cierre en orden, más un paso con fecha hacia una credencial o un empleo.", exceeds: "Nombra una tienda o un programa concreto y un segundo paso con fecha." }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se postulan a un empleo de ventas o de cajero en 30 días (encuesta de seguimiento)",
      "Personas contratadas en el comercio que siguen empleadas después de 90 días",
      "Personas que se inscriben en una credencial RISE Up de la NRF Foundation o la obtienen",
      "Tiendas o programas de empleo aliados que reportan menos faltantes en caja y una capacitación más rápida de los nuevos empleados que vienen del curso"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora para leer las lecciones",
      "Monedas y dinero de juguete (o tiras de papel con cantidades) para practicar el cambio",
      "Algunos objetos de la casa y etiquetas de precio de papel para las ventas de práctica",
      "Papel y lápiz, o una nota del teléfono, para la Tarjeta de Turno de Cajero",
      "Unos 60 a 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "En grupo, arme una caja de mentira en una mesa y vaya rotando los papeles de cajero, cliente y gerente.",
      "Cuando las personas ya den el cambio sin errores, haga la práctica como un juego con tiempo; primero la exactitud, luego la rapidez.",
      "Use solo dinero de juguete e identificaciones inventadas; nunca pida a las personas que muestren su propia identificación ni los datos de su tarjeta.",
      "Revise la edad para vender alcohol y tabaco en su estado y diga a los participantes jóvenes qué se aplica a ellos.",
      "Califique la Tarjeta de Turno de Cajero con la rúbrica y pida a las personas que la lleven a entrevistas de práctica.",
      "Los programas que son socios de capacitación de RISE Up pueden vincular este curso a la credencial; consulte nrffoundation.org."
    ]
  }
};
