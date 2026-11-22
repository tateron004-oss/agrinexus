"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-supply-chain.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-supply-chain-es",
  lang: "es",
  translationOf: "smallbiz-supply-chain",
  category: "Small Business",
  name: "Conceptos básicos de cadena de suministro e inventario",
  skills: "Hacer el mapa de tu cadena de suministro, Encontrar y comparar proveedores, Hacer y revisar pedidos, Contar el inventario, Fijar puntos de reorden y existencias de seguridad, Llevar un inventario en hoja de cálculo con primero en entrar, primero en salir",
  outcome: "elegir y comparar proveedores, hacer y revisar pedidos, contar tus existencias, calcular cuándo volver a pedir y cuánto extra guardar, y llevar un inventario sencillo en una hoja de cálculo que use primero en entrar, primero en salir.",
  about: [
    "Quedarte sin tu producto más vendido te hace perder ventas y clientes. Comprar demasiado deja tu dinero parado en un estante, y algunos productos se echan a perder o pasan de moda. Los buenos hábitos de cadena de suministro e inventario mantienen la cantidad correcta de los productos correctos.",
    "Este curso es para dueños y empleados de pequeños negocios que compran y venden productos o usan materiales: una tienda de la esquina, un food truck, un salón de belleza, un puesto de productos del campo, una tienda en línea o una empresa de limpieza. Vas a hacer el mapa de tu cadena de suministro, encontrar y comparar proveedores, hacer y revisar pedidos, contar existencias, calcular un punto de reorden y las existencias de seguridad, y armar una hoja de cálculo sencilla que te avise cuándo volver a pedir.",
    "Solo necesitas lápiz y papel o una hoja de cálculo gratis, como Google Sheets o Microsoft Excel en la web. Los ejemplos usan números sencillos, así que puedes seguirlos aunque las matemáticas no sean lo tuyo.",
    "Cada lección dura unos cinco minutos y termina con una tarea que haces enseguida. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma una hoja de cálculo de inventario sencilla para cinco productos que compras o vendes, con columnas para producto, SKU, proveedor principal, proveedor de respaldo, costo por unidad, existencias, uso diario promedio, tiempo de entrega en días, existencias de seguridad, punto de reorden (calculado con una fórmula) y un aviso de reorden, y escribe cómo vas a mantener primero en entrar, primero en salir en el estante.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños y gerentes de pequeños negocios que compran y venden mercancía o usan insumos, como tiendas, tiendas de la esquina, restaurantes, salones, vendedores de mercado y vendedores en línea, muchos de ellos de dueños de minorías.",
    startingPoint: "Compran mercancía e insumos con frecuencia y conocen sus productos más vendidos. La mayoría pide por costumbre o de memoria, casi nunca cuenta las existencias con un calendario y no ha usado un punto de reorden ni un inventario en hoja de cálculo.",
    gap: "Quedarse sin los productos más vendidos hace perder ventas, y comprar de más amarra el dinero y deja mercancía echada a perder o sin vender. Necesitan hábitos sencillos y una hoja de cálculo que les digan qué pedir, cuándo y cuánto, y que detecten errores y pérdidas.",
    constraints: [
      "Matemáticas básicas: multiplicación y fórmulas sencillas de hoja de cálculo, explicadas paso a paso",
      "Dispositivos: un teléfono o una computadora con una hoja de cálculo gratis como Google Sheets o Excel en la web",
      "Tiempo: unos 60 minutos en total, y el conteo se hace cuando le quede bien a cada quien",
      "Riesgo de fraude de proveedores nuevos que piden transferencias bancarias, tarjetas de regalo o criptomonedas",
      "Privacidad: no hace falta poner precios de proveedores ni datos privados del negocio en herramientas de IA"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tus cinco productos principales", action: "dibujar tu cadena de suministro e identificar los puntos débiles", standard: "con un proveedor de respaldo o existencias extra planeadas para cada punto débil" },
    { id: "O2", condition: "Con un producto que compras", action: "comparar tres proveedores por costo completo, pedido mínimo, tiempo de entrega, condiciones de pago y confiabilidad", standard: "con una cotización por escrito de cada uno y las señales de alerta revisadas" },
    { id: "O3", condition: "Con un pedido por hacer", action: "escribir una orden de compra y revisar la entrega comparándola con ella", standard: "con cada problema anotado en la nota de entrega y reportado el mismo día" },
    { id: "O4", condition: "Con tus existencias y tus registros", action: "contar tu inventario y encontrar la diferencia con tus registros", standard: "con cada diferencia contada de nuevo por una segunda persona" },
    { id: "O5", condition: "Con el uso diario y el tiempo de entrega de un producto", action: "calcular sus existencias de seguridad y su punto de reorden", standard: "obteniendo bien el punto de reorden con la fórmula" },
    { id: "O6", condition: "Usando una hoja de cálculo gratis", action: "crear una hoja de inventario que avise qué productos volver a pedir, y planear cómo mantener primero en entrar, primero en salir en el estante", standard: "con el punto de reorden y el estado calculados con fórmulas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Proveedores y pedidos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Hacer el mapa de tu cadena de suministro",
          minutes: 5,
          goal: "Dibujar la cadena de suministro de tus productos principales y ver dónde se podría romper.",
          text: [
            "Una cadena de suministro es cada paso que lleva un producto hasta tu cliente: el fabricante, cualquier mayorista o distribuidor, el envío, tu estante o tu bodega y, al final, el cliente. Hasta un negocio pequeño tiene una.",
            "Empieza con tus cinco productos principales: los que más dinero dejan o sin los que no puedes trabajar. Para cada uno, escribe a quién se lo compras, cómo te llega, cuánto tarda y dónde lo guardas.",
            "Luego busca los puntos débiles. ¿Compras un producto importante a un solo proveedor? ¿Viene de lejos? ¿Se echa a perder rápido? ¿Es de temporada? Un punto débil es donde deberías guardar existencias extra o tener listo un proveedor de respaldo.",
            "Un asistente de IA puede ayudarte a pensar qué podría salir mal con cada producto, como que un proveedor cierre, que suba el precio o que se retrase un envío. Tú decides qué riesgos son reales para tu negocio."
          ],
          steps: ["Haz una lista de tus cinco productos principales.", "Para cada uno, escribe el proveedor, cómo se envía, cuánto tarda y dónde lo guardas.", "Dibuja flechas: del proveedor al envío, a ti y al cliente.", "Encierra en un círculo los puntos débiles: un solo proveedor, mucha distancia, se echa a perder rápido, de temporada.", "Escribe una solución para cada punto débil."],
          words: [["Cadena de suministro", "todos los pasos que llevan un producto del fabricante a tu cliente."], ["Proveedor", "un negocio al que le compras productos o materiales."], ["Mayorista o distribuidor", "un negocio que compra al por mayor a los fabricantes y les vende a otros negocios."], ["Punto débil", "un paso donde algo podría salir mal fácilmente."]],
          slides: [
            { title: "Qué es una cadena de suministro", bullets: ["Fabricante, mayorista, envío", "Tu estante o tu bodega", "Tu cliente"] },
            { title: "Haz el mapa de tus cinco productos principales", bullets: ["A quién se lo compras", "Cómo te llega y cuánto tarda", "Dónde lo guardas"] },
            { title: "Encuentra los puntos débiles", bullets: ["Un solo proveedor", "Lejos o con envío lento", "Se echa a perder rápido o es de temporada"] },
            { title: "Arregla los puntos débiles", bullets: ["Guarda un poco de existencias extra", "Ten listo un proveedor de respaldo"] }
          ],
          tryIt: "Dibuja en una página la cadena de suministro de tus cinco productos principales. Encierra en un círculo cada punto débil y escribe al lado una solución, como buscar un proveedor de respaldo o guardar una semana extra de existencias.",
          youCanNow: "hacer el mapa de la cadena de suministro de tus productos más importantes y señalar dónde se podría romper.",
          quickCheck: [
            { objective: "O1", q: "¿Qué productos debes dibujar en el mapa primero?", options: ["Tus cinco productos principales, los que dejan más dinero o sin los que no puedes trabajar", "Todos los productos que has vendido alguna vez", "Solo los productos en oferta", "Los productos que vende tu competencia"], answer: 0, why: "Empieza con tus cinco productos principales por dinero o importancia." },
            { objective: "O1", q: "Tu producto clave viene de lejos y se echa a perder rápido. ¿Qué haces?", options: ["No le haces caso", "Lo marcas como punto débil y planeas un proveedor de respaldo o existencias extra", "Dejas de venderlo de inmediato", "Dejas que la IA decida qué riesgos son reales"], answer: 1, why: "Un punto débil es donde guardas existencias extra o consigues un proveedor de respaldo; tú decides qué riesgos son reales." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar y comparar proveedores",
          minutes: 6,
          goal: "Encontrar tres posibles proveedores para un producto y compararlos en algo más que el precio.",
          text: [
            "Lugares para encontrar proveedores: fabricantes y marcas (pregunta quién distribuye en tu zona), mayoristas y distribuidores, ferias comerciales, asociaciones de la industria, granjas y productores locales, y otros dueños de negocios de tu ramo. Busca en internet el nombre del producto junto con mayoreo o distribuidor.",
            "Compara en algo más que el precio. Mira el precio por unidad, el pedido mínimo, el tiempo de entrega, el costo de envío, las condiciones de pago, la calidad y qué tan confiables son. Súmale al precio el envío y los cargos para sacar el costo puesto en destino: lo que de verdad te cuesta cada unidad cuando llega a tus manos.",
            "Pídele a cada proveedor una cotización por escrito y, si puedes, una muestra. Pregúntales a otros clientes o revisa reseñas. Ten por lo menos un proveedor de respaldo para cada producto importante.",
            "Ten cuidado con proveedores nuevos que solo aceptan transferencias, tarjetas de regalo o criptomonedas, que tienen precios muy por debajo de todos los demás o que te apuran. Revisa su dirección y su teléfono, y empieza con un pedido pequeño."
          ],
          steps: ["Haz una lista de tres posibles proveedores para un producto.", "Pídele a cada uno una cotización por escrito: precio por unidad, pedido mínimo, tiempo de entrega, envío y condiciones de pago.", "Calcula el costo puesto en destino por unidad de cada uno.", "Pide una muestra y revisa reseñas o referencias.", "Elige un proveedor principal y uno de respaldo."],
          words: [["Pedido mínimo", "el pedido más pequeño que acepta un proveedor. En inglés se dice minimum order quantity (MOQ)."], ["Tiempo de entrega", "el tiempo desde que haces un pedido hasta que lo tienes en tus manos. En inglés se dice lead time."], ["Costo puesto en destino", "el costo completo de una unidad cuando llega a ti: precio más envío y cargos. En inglés se dice landed cost."], ["Condiciones de pago", "cuándo tienes que pagar; por ejemplo, Net 30 significa dentro de 30 días."], ["Cotización", "una oferta de precio por escrito de un proveedor."]],
          slides: [
            { title: "Dónde encontrar proveedores", bullets: ["Fabricantes, mayoristas y distribuidores", "Ferias comerciales y asociaciones de la industria", "Productores locales y otros dueños de negocios"] },
            { title: "Compara algo más que el precio", bullets: ["Precio por unidad y pedido mínimo", "Tiempo de entrega y envío", "Condiciones de pago, calidad y confiabilidad"] },
            { title: "Costo puesto en destino", bullets: ["Precio + envío + cargos", "Divídelo entre el número de unidades", "Lo que de verdad cuesta cada unidad"] },
            { title: "Protégete", bullets: ["Pide cotizaciones por escrito y muestras", "Ten un proveedor de respaldo", "Evita tratos solo con transferencia, muy baratos o con prisa"] }
          ],
          tryIt: "Elige un producto que compras. Encuentra tres posibles proveedores y llena una tabla pequeña: precio por unidad, pedido mínimo, tiempo de entrega, envío, condiciones de pago y costo puesto en destino por unidad. Encierra en un círculo tu elección principal y la de respaldo. Ejemplo: 100 unidades a $2.00 con $30 de envío dan un costo puesto en destino de $2.30 por unidad.",
          youCanNow: "encontrar proveedores, compararlos por costo puesto en destino, tiempo de entrega, condiciones y confiabilidad, y elegir un proveedor principal y uno de respaldo.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es un buen lugar para encontrar proveedores?", options: ["Un anuncio cualquiera en redes sociales que promete mercancía gratis", "Solo el sitio web más barato que encuentres", "Ferias comerciales y asociaciones del sector", "Correos de desconocidos que piden tarjetas de regalo"], answer: 2, why: "Las ferias comerciales, las asociaciones, los mayoristas y otros dueños son buenos lugares para encontrar proveedores." },
            { objective: "O2", q: "Un proveedor nuevo tiene un precio muy bueno. ¿Qué haces antes de un pedido grande?", options: ["Pides para un año entero para asegurar el precio", "Pagas de inmediato con una transferencia bancaria", "Te saltas la cotización para ahorrar tiempo", "Pides una cotización por escrito y una muestra, revisas su dirección y su teléfono, y empiezas con poco"], answer: 3, why: "Pide una cotización por escrito y una muestra, investígalos y empieza con un pedido pequeño." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer y revisar pedidos",
          minutes: 5,
          goal: "Escribir una orden de compra clara y revisar una entrega comparándola con ella.",
          text: [
            "Una orden de compra (purchase order o PO) es tu pedido por escrito a un proveedor. Evita confusiones. Lleva un número de orden, la fecha, el proveedor, cada producto con su código, la cantidad, el precio, la fecha y la dirección de entrega, y las condiciones de pago.",
            "Cuando llegue la entrega, revísala antes de firmar o de guardarla. Cuenta las cajas y las unidades, revisa que los productos y los tamaños coincidan con la orden, busca daños y revisa las fechas de caducidad de la comida u otros productos que se echan a perder.",
            "Escribe cualquier problema en la nota de entrega y avísale al proveedor el mismo día, con fotos. No pagues lo que no recibiste.",
            "Guarda juntas cada orden de compra, su nota de entrega y su factura. Comparar las tres antes de pagar se llama conciliación de tres vías (three-way match), y sirve para encontrar errores y cobros de más."
          ],
          steps: ["Escribe una orden de compra con número, fecha, proveedor, productos, cantidades, precios, fecha de entrega y condiciones.", "Cuando llegue la entrega, cuéntala y compárala con la orden.", "Revisa daños y fechas de caducidad.", "Escribe los problemas en la nota de entrega, toma fotos y avísale al proveedor ese mismo día.", "Antes de pagar, compara la orden de compra, la nota de entrega y la factura."],
          words: [["Orden de compra (PO)", "tu pedido por escrito a un proveedor."], ["Nota de entrega", "el papel que viene con una entrega y dice lo que se mandó."], ["Factura", "la cuenta del proveedor."], ["Conciliación de tres vías", "revisar que la orden de compra, la nota de entrega y la factura coincidan antes de pagar."]],
          slides: [
            { title: "Una orden de compra clara", bullets: ["Número de orden, fecha y proveedor", "Productos, códigos, cantidades y precios", "Fecha de entrega, dirección y condiciones"] },
            { title: "Revisa cada entrega", bullets: ["Cuenta cajas y unidades", "Compara productos y tamaños con la orden", "Revisa daños y fechas de caducidad"] },
            { title: "¿Hay problemas?", bullets: ["Escríbelo en la nota de entrega", "Fotos, y avísale al proveedor el mismo día", "No pagues lo que no recibiste"] },
            { title: "Conciliación de tres vías", bullets: ["Orden de compra + nota de entrega + factura", "Compáralas antes de pagar"] }
          ],
          tryIt: "Escribe una orden de compra de ejemplo para un producto de tu tabla de proveedores, con cada parte de esta lección. Luego escribe una lista de cinco líneas que vas a usar la próxima vez que llegue una entrega.",
          youCanNow: "escribir una orden de compra clara, revisar una entrega comparándola con ella y comparar los papeles antes de pagar.",
          quickCheck: [
            { objective: "O3", q: "¿Qué va en una orden de compra?", options: ["Cada producto con su código, cantidad y precio", "Los nombres de tus clientes", "La contraseña de tu banco", "Tus metas de ventas"], answer: 0, why: "Una orden de compra lleva número, fecha, proveedor, productos con códigos, cantidades, precios, entrega y condiciones." },
            { objective: "O3", q: "Llega una caja de yogur con fechas de caducidad ya vencidas. ¿Qué haces?", options: ["La pones rápido en el estante", "Lo anotas en la nota de entrega, tomas fotos, le avisas al proveedor ese día y no lo pagas", "Firmas la nota y te quejas el mes siguiente", "La tiras y no dices nada"], answer: 1, why: "Revisa las fechas antes de firmar, anota los problemas en la nota de entrega y no pagues lo que no recibiste bien." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Proveedores y pedidos",
        questions: [
          { objective: "O1", q: "Compras tu producto más vendido a un solo proveedor. ¿Cuál es el riesgo?", options: ["Ninguno", "Si ese proveedor tiene un problema, te quedas sin producto", "Tus precios siempre van a bajar", "Los clientes van a comprar más"], answer: 1, why: "Un solo proveedor es un punto débil; un respaldo te protege." },
          { objective: "O2", q: "¿Qué es el tiempo de entrega?", options: ["El tiempo desde que pides hasta que tienes la mercancía en tus manos", "El tiempo que un cliente espera en la fila", "Cuánto dura un producto en el estante", "El horario del proveedor"], answer: 0, why: "El tiempo de entrega es cuánto tarda en llegar un pedido." },
          { objective: "O2", q: "El proveedor A vende 100 unidades por $200 con $50 de envío. ¿Cuál es el costo puesto en destino por unidad?", options: ["$2.00", "$2.25", "$0.50", "$2.50"], answer: 3, why: "$200 más $50 son $250; divididos entre 100 unidades dan $2.50 cada una." },
          { objective: "O2", q: "Un proveedor nuevo tiene precios muy bajos y solo acepta tarjetas de regalo. ¿Qué haces?", options: ["Pedir mucho enseguida", "Pagar con tarjetas de regalo", "Tener cuidado: investigarlo y evitar esa forma de pago", "Mandar el acceso a tu banco"], answer: 2, why: "Aceptar solo tarjetas de regalo y tener precios demasiado bajos son señales de estafa." },
          { objective: "O3", q: "A una entrega le faltan dos cajas. ¿Qué debes hacer?", options: ["Firmar y no decir nada", "Pagar todo de todos modos", "Tirar la nota de entrega", "Escribirlo en la nota, tomar fotos y avisarle al proveedor ese día"], answer: 3, why: "Anotar los problemas enseguida te permite recibir lo que pagaste." }
        ]
      }
    },
    {
      name: "Capítulo 2: Control del inventario",
      lessons: [
        {
          objectives: ["O4"],
          title: "Contar tu inventario",
          minutes: 5,
          goal: "Hacer un conteo exacto de tus existencias y encontrar la diferencia con tus registros.",
          text: [
            "El inventario son los productos y materiales que tienes a mano. Tus registros dicen cuánto deberías tener; un conteo muestra cuánto tienes de verdad. A la diferencia muchas veces se le llama merma: lo que se pierde por robo, daño, productos echados a perder o errores.",
            "Un conteo físico completo significa contar todo, muchas veces una o dos veces al año, con el negocio cerrado. Un conteo cíclico significa contar unos pocos productos cada semana, así que con el tiempo se cuenta todo. Cuenta más seguido los productos de más valor o los que se venden más rápido.",
            "Para contar bien: dale a cada producto un SKU (un código corto), cuenta en la misma unidad en que compras y vendes, cuenta estante por estante y pídele a otra persona que vuelva a contar lo que no coincida. Escribe el conteo, la fecha y quién contó.",
            "Luego compara tu conteo con tus registros. Averigua por qué hubo diferencias grandes y corrige tus registros para que coincidan con el conteo real."
          ],
          steps: ["Dale a cada producto un SKU y una unidad, como pieza, caja o libra.", "Elige un conteo completo o conteos cíclicos cada semana.", "Cuenta estante por estante y escribe el conteo, la fecha y quién contó.", "Pídele a otra persona que vuelva a contar lo que no coincida.", "Compara con tus registros, busca las razones de las diferencias grandes y actualiza los registros."],
          words: [["Inventario", "los productos y materiales que tienes a mano."], ["SKU", "stock keeping unit (unidad de mantenimiento de existencias): un código corto para cada producto que tienes."], ["Conteo cíclico", "contar unos pocos productos a la vez, con un horario fijo."], ["Merma", "existencias perdidas por robo, daño, productos echados a perder o errores. En inglés se dice shrinkage."]],
          slides: [
            { title: "Registros contra realidad", bullets: ["Registros: lo que deberías tener", "Conteo: lo que tienes de verdad", "La diferencia es la merma"] },
            { title: "Dos maneras de contar", bullets: ["Conteo completo: todo, una o dos veces al año", "Conteo cíclico: unos pocos productos cada semana", "Cuenta más seguido lo valioso y lo que se vende rápido"] },
            { title: "Cuenta bien", bullets: ["Un SKU y una unidad para cada producto", "Estante por estante; anota fecha y quién contó", "Vuelve a contar lo que no coincida"] },
            { title: "Después del conteo", bullets: ["Compara con tus registros", "Busca las razones de las diferencias grandes", "Actualiza los registros"] }
          ],
          tryIt: "Elige cinco productos. Dale a cada uno un SKU y una unidad. Cuéntalos ahora y escribe el conteo, la fecha y tu nombre. Si tienes registros, compáralos y escribe la diferencia de cada uno.",
          youCanNow: "contar tu inventario con exactitud, hacer conteos cíclicos y encontrar la merma comparando los conteos con los registros.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un conteo completo?", options: ["Contar un estante", "Contar solo los productos caros", "Contar todo, muchas veces una o dos veces al año", "Adivinar con las ventas"], answer: 2, why: "Un conteo completo es contar todo, muchas veces una o dos veces al año." },
            { objective: "O4", q: "Encuentras una diferencia grande entre tu conteo y tus registros. ¿Qué haces después de volver a contar?", options: ["Cambias el conteo para que coincida con los registros", "No le haces caso", "Borras el producto", "Averiguas por qué pasó y corriges tus registros para que coincidan con el conteo real"], answer: 3, why: "Averigua por qué pasaron las diferencias grandes y corrige tus registros para que coincidan con el conteo real." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Punto de reorden y existencias de seguridad",
          minutes: 6,
          goal: "Calcular cuándo volver a pedir un producto y cuánto extra guardar.",
          text: [
            "El punto de reorden es el nivel de existencias que te dice que vuelvas a pedir. Si pides cuando llegas a ese nivel, la mercancía nueva debería llegar antes de que te quedes sin nada.",
            "Punto de reorden = uso diario promedio x tiempo de entrega en días + existencias de seguridad. Ejemplo: vendes 10 bolsas de arroz al día y tu proveedor tarda 4 días en entregar. Sin nada extra, necesitas 10 x 4 = 40 bolsas para aguantar hasta que llegue el pedido.",
            "Las existencias de seguridad son mercancía extra para las sorpresas: un día con mucha venta o un camión que llega tarde. Una manera sencilla: decide cuántos días extra quieres cubrir y multiplícalos por el uso diario. Con 2 días extra, las existencias de seguridad son 10 x 2 = 20 bolsas. Entonces el punto de reorden es 40 + 20 = 60 bolsas. Cuando bajes a 60, pide.",
            "Guarda más existencias de seguridad de los productos que más importan, de los que tienen tiempos de entrega largos o poco confiables y de los que compras a un solo proveedor. Guarda menos de los que se echan a perder rápido o que cuesta mucho tener guardados. Revisa los números cada pocos meses, porque las ventas y los tiempos de entrega cambian."
          ],
          steps: ["Calcula el uso diario promedio: las unidades usadas en 30 días divididas entre 30.", "Averigua con tu proveedor el tiempo de entrega en días.", "Elige cuántos días extra cubrir y multiplícalos por el uso diario: esas son las existencias de seguridad.", "Punto de reorden = uso diario x tiempo de entrega + existencias de seguridad.", "Vuelve a revisar los números cada pocos meses."],
          words: [["Punto de reorden", "el nivel de existencias que te dice que vuelvas a pedir."], ["Existencias de seguridad", "mercancía extra que guardas para sorpresas, como días con mucha venta o entregas tardías."], ["Uso diario promedio", "cuántas unidades usas o vendes en un día normal."]],
          slides: [
            { title: "El punto de reorden", bullets: ["El nivel que te dice que pidas", "La mercancía nueva llega antes de que te quedes sin nada"] },
            { title: "La fórmula", bullets: ["Uso diario x tiempo de entrega + existencias de seguridad"] },
            { title: "Ejemplo resuelto", bullets: ["10 bolsas al día, 4 días de entrega: 40 bolsas", "Existencias de seguridad, 2 días extra: 20 bolsas", "Punto de reorden: 60 bolsas"] },
            { title: "Cuántas existencias de seguridad", bullets: ["Más: productos clave, proveedores lentos o poco confiables", "Menos: lo que se echa a perder o cuesta guardar", "Revisa cada pocos meses"] }
          ],
          tryIt: "Para un producto, calcula su uso diario promedio y su tiempo de entrega. Elige los días extra que quieres cubrir. Calcula las existencias de seguridad y el punto de reorden y escríbelos en una tarjeta que dejes junto a ese producto.",
          youCanNow: "calcular el punto de reorden y las existencias de seguridad de un producto y saber cuándo guardar más o menos extra.",
          quickCheck: [
            { objective: "O5", q: "Usas 6 unidades al día y quieres 3 días extra de colchón. ¿Cuáles son las existencias de seguridad?", options: ["18", "9", "3", "63"], answer: 0, why: "Las existencias de seguridad son los días extra por el uso diario: 3 x 6 = 18." },
            { objective: "O5", q: "El tiempo de entrega de tu proveedor sube de 4 días a 8 días. ¿Qué haces?", options: ["Dejas el mismo punto de reorden", "Vuelves a calcular el punto de reorden con el nuevo tiempo de entrega", "Dejas de usar existencias de seguridad", "Pides solo cuando se te acaba"], answer: 1, why: "Revisa los números cuando cambia el tiempo de entrega, porque el punto de reorden depende de él." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Un inventario en hoja de cálculo y primero en entrar, primero en salir",
          minutes: 6,
          goal: "Armar una hoja de cálculo que marque los productos que hay que volver a pedir y mantener las existencias saliendo en orden de llegada.",
          text: [
            "Una hoja de cálculo gratis, como Google Sheets o Microsoft Excel en la web, puede llevar el inventario de un negocio pequeño. Haz una fila por producto y estas columnas: Producto, SKU, Proveedor principal, Proveedor de respaldo, Costo por unidad, Existencias, Uso diario, Tiempo de entrega (días), Existencias de seguridad, Punto de reorden y Estado.",
            "Deja que la hoja haga las cuentas. Si el Uso diario está en la columna G, el Tiempo de entrega en la H y las Existencias de seguridad en la I, el punto de reorden en J2 es =G2*H2+I2. El estado en K2 puede ser =IF(F2<=J2,\"REORDER\",\"OK\"), que muestra REORDER (volver a pedir) cuando las existencias (columna F) están en el punto de reorden o por debajo. En Excel en español la función IF se llama SI, y algunas configuraciones usan punto y coma en vez de coma. Copia las fórmulas hacia abajo. Actualiza las Existencias después de cada conteo o entrega.",
            "Primero en entrar, primero en salir (FIFO, por sus siglas en inglés) significa que vendes o usas primero la mercancía más vieja. Así la comida y otros productos no caducan al fondo del estante. Cuando llegue mercancía nueva, ponla detrás o debajo de la más vieja, y marca las cajas con la fecha en que llegaron.",
            "Un asistente de IA puede ayudarte a escribir o a arreglar una fórmula de hoja de cálculo. Describe tus columnas con palabras; no necesitas compartir los precios de tus proveedores ni otros datos privados del negocio."
          ],
          steps: ["Abre una hoja de cálculo gratis y agrega los once encabezados de columna.", "Llena cinco productos.", "En la columna Punto de reorden, escribe =G2*H2+I2 y cópiala hacia abajo.", "En la columna Estado, escribe =IF(F2<=J2,\"REORDER\",\"OK\") y cópiala hacia abajo.", "Actualiza las Existencias después de cada conteo o entrega.", "En el estante, pon la mercancía nueva detrás de la vieja y marca cada caja con la fecha."],
          words: [["Hoja de cálculo", "una cuadrícula de filas y columnas que puede hacer cuentas por ti."], ["Fórmula", "una instrucción en una celda de la hoja de cálculo que calcula un resultado; empieza con =."], ["Primero en entrar, primero en salir (FIFO)", "usar o vender primero la mercancía más vieja."]],
          slides: [
            { title: "Una fila por producto", bullets: ["Producto, SKU, proveedor principal y de respaldo", "Costo por unidad, existencias, uso diario, tiempo de entrega", "Existencias de seguridad, punto de reorden, estado"] },
            { title: "Deja que trabajen las fórmulas", bullets: ["Punto de reorden: =G2*H2+I2", "Estado: =IF(F2<=J2,\"REORDER\",\"OK\")", "Cópialas hacia abajo; actualiza existencias tras contar"] },
            { title: "Primero en entrar, primero en salir", bullets: ["Vende o usa primero la mercancía más vieja", "Lo nuevo va detrás o debajo de lo viejo", "Marca cada caja con la fecha"] },
            { title: "La IA puede ayudarte con las fórmulas", bullets: ["Describe tus columnas con palabras", "No hace falta compartir precios ni datos privados"] }
          ],
          tryIt: "Tarea final: arma tu hoja de cálculo de inventario para cinco productos con las once columnas, la fórmula del punto de reorden y el aviso REORDER. Luego escribe dos oraciones sobre cómo vas a mantener primero en entrar, primero en salir en tu estante.",
          youCanNow: "llevar un inventario sencillo en una hoja de cálculo que te avisa cuándo volver a pedir y mantener las existencias saliendo con primero en entrar, primero en salir.",
          quickCheck: [
            { objective: "O6", q: "En la hoja de esta lección, ¿qué calcula =G2*H2+I2?", options: ["El costo por unidad", "El estado", "El punto de reorden", "El número de proveedores"], answer: 2, why: "El uso diario por el tiempo de entrega, más las existencias de seguridad, da el punto de reorden." },
            { objective: "O6", q: "Quieres que la IA te ayude a arreglar una fórmula de la hoja de cálculo. ¿Qué compartes?", options: ["Los precios de tus proveedores y tus datos bancarios", "Tu lista completa de clientes", "Tu contraseña de acceso", "Una descripción de tus columnas en palabras"], answer: 3, why: "Describe tus columnas; no hace falta compartir precios ni datos privados del negocio." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Control del inventario",
        questions: [
          { objective: "O4", q: "Contar unos pocos productos cada semana para que con el tiempo se cuente todo se llama:", options: ["Un conteo físico completo", "Merma", "Un conteo cíclico", "Una orden de compra"], answer: 2, why: "Un conteo cíclico reparte el conteo a lo largo del año." },
          { objective: "O5", q: "Usas 5 unidades al día, el tiempo de entrega es de 6 días y las existencias de seguridad son 10. ¿Cuál es el punto de reorden?", options: ["30", "40", "11", "16"], answer: 1, why: "5 x 6 = 30, más 10 de existencias de seguridad = 40." },
          { objective: "O5", q: "¿Qué producto debería tener normalmente más existencias de seguridad?", options: ["Un producto clave de un solo proveedor lento y poco confiable", "Un producto que se echa a perder en un día", "Un producto que ya no vendes", "Un producto muy caro que se vende una vez al año"], answer: 0, why: "Los productos importantes con un suministro arriesgado necesitan más colchón." },
          { objective: "O6", q: "En la hoja de cálculo, las existencias son 25 y el punto de reorden es 30. ¿Qué muestra el estado?", options: ["OK", "Error", "Nada", "REORDER"], answer: 3, why: "Las existencias están en el punto de reorden o por debajo, así que la fórmula muestra REORDER." },
          { objective: "O6", q: "Llega leche nueva. Siguiendo FIFO, ¿dónde la pones?", options: ["Delante de la leche más vieja", "Detrás de la leche más vieja", "En la basura", "Encima de la leche más vieja para que se venda primero"], answer: 1, why: "FIFO pone lo nuevo detrás de lo viejo para que lo más viejo se venda primero." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Conceptos básicos de cadena de suministro e inventario",
    questions: [
      { objective: "O1", q: "¿Qué es una cadena de suministro?", options: ["Todos los pasos que llevan un producto del fabricante a tu cliente", "Una cadena que cierra tu bodega", "Una lista de clientes", "Un tipo de préstamo"], answer: 0, why: "Una cadena de suministro cubre cada paso del fabricante al cliente." },
      { objective: "O1", q: "¿Cuál es un punto débil en una cadena de suministro?", options: ["Dos proveedores confiables", "Un producto importante de un solo proveedor", "Un tiempo de entrega corto", "Conteos exactos"], answer: 1, why: "Depender de un solo proveedor es arriesgado." },
      { objective: "O1", q: "¿Cuál es una buena solución para un punto débil?", options: ["Ignorarlo", "Subir los precios", "Tener listo un proveedor de respaldo o guardar existencias extra", "Dejar de contar"], answer: 2, why: "Los respaldos y las existencias extra te protegen cuando algo se rompe." },
      { objective: "O2", q: "Un pedido mínimo es:", options: ["Lo máximo que puedes comprar", "El tiempo que tarda un pedido", "La dirección del proveedor", "El pedido más pequeño que acepta un proveedor"], answer: 3, why: "El pedido mínimo (MOQ) es el pedido más pequeño que acepta un proveedor." },
      { objective: "O2", q: "¿Qué es el costo puesto en destino?", options: ["Precio más envío y cargos, por unidad", "Solo el precio del sitio web", "El costo de un boleto de avión", "Tu renta"], answer: 0, why: "El costo puesto en destino es lo que de verdad cuesta cada unidad cuando llega a ti." },
      { objective: "O2", q: "Las condiciones de pago Net 30 significan:", options: ["Pagar el 30% ahora", "Pagar dentro de 30 días", "Pagar después de 30 pedidos", "Pagar $30"], answer: 1, why: "Net 30 significa que el total se paga dentro de 30 días." },
      { objective: "O2", q: "Antes de elegir un proveedor nuevo, es inteligente:", options: ["Pagar todo el año por adelantado", "Mandar el acceso a tu banco", "Pedir una cotización por escrito y una muestra, y empezar con poco", "Pagar con tarjeta de regalo"], answer: 2, why: "Las cotizaciones, las muestras y los primeros pedidos pequeños bajan tu riesgo." },
      { objective: "O3", q: "¿Qué es una orden de compra?", options: ["La cuenta del proveedor", "Un recibo para el cliente", "Un camión de reparto", "Tu pedido por escrito a un proveedor"], answer: 3, why: "Una orden de compra es tu pedido por escrito con productos, cantidades y precios." },
      { objective: "O3", q: "Una conciliación de tres vías compara:", options: ["La orden de compra, la nota de entrega y la factura", "Los logos de tres proveedores", "Los horarios de tres empleados", "Tres cuentas de banco"], answer: 0, why: "Comparar los tres papeles encuentra errores antes de pagar." },
      { objective: "O3", q: "Cuando llega una entrega, primero debes:", options: ["Pagar la factura", "Contarla y compararla con la orden de compra", "Tirar la nota", "Ponerla directo en el estante sin revisar"], answer: 1, why: "Revisar primero encuentra la mercancía que falta o que viene dañada." },
      { objective: "O4", q: "¿Qué es la merma?", options: ["Empaques más pequeños", "Precios más bajos", "Existencias perdidas por robo, daño, productos echados a perder o errores", "Una venta"], answer: 2, why: "La merma es la diferencia entre los registros y las existencias reales." },
      { objective: "O4", q: "¿Qué es un SKU?", options: ["El nombre de un proveedor", "Un tipo de estante", "Una empresa de envíos", "Un código corto para cada producto que tienes"], answer: 3, why: "SKU significa stock keeping unit, unidad de mantenimiento de existencias." },
      { objective: "O4", q: "Tu conteo no coincide con tus registros en un producto. ¿Qué haces?", options: ["Pedirle a otra persona que lo vuelva a contar", "Ignorarlo", "Cambiar los registros sin revisar", "Tirar el producto"], answer: 0, why: "Volver a contar confirma el número real antes de actualizar los registros." },
      { objective: "O5", q: "La fórmula del punto de reorden es:", options: ["Precio x cantidad", "Uso diario x tiempo de entrega + existencias de seguridad", "Existencias - ventas", "Existencias de seguridad x 10"], answer: 1, why: "Cubre lo que usas durante el tiempo de entrega más un colchón." },
      { objective: "O5", q: "Vendes 8 unidades al día, con 5 días de tiempo de entrega y 16 unidades de existencias de seguridad. ¿Punto de reorden?", options: ["40", "13", "56", "21"], answer: 2, why: "8 x 5 = 40, más 16 = 56." },
      { objective: "O5", q: "Las existencias de seguridad son:", options: ["Mercancía guardada bajo llave en una caja fuerte", "Mercancía que nunca vendes", "Mercancía vieja", "Mercancía extra que guardas para sorpresas, como entregas tardías"], answer: 3, why: "Las existencias de seguridad cubren los días con mucha venta y los retrasos." },
      { objective: "O5", q: "Usaste 300 unidades en los últimos 30 días. ¿Cuál es el uso diario promedio?", options: ["10", "30", "300", "9,000"], answer: 0, why: "300 dividido entre 30 días da 10 al día." },
      { objective: "O6", q: "En una hoja de cálculo, una fórmula empieza con:", options: ["#", "=", "@", "$"], answer: 1, why: "Las fórmulas de hoja de cálculo empiezan con un signo de igual." },
      { objective: "O6", q: "¿Qué significa primero en entrar, primero en salir?", options: ["Vender primero la mercancía más nueva", "Pedirle al primer proveedor que encuentres", "Vender o usar primero la mercancía más vieja", "Contar solo el primer estante"], answer: 2, why: "FIFO evita que la mercancía más vieja caduque." },
      { objective: "O6", q: "¿Cómo puedes hacer fácil el FIFO en el estante?", options: ["Poner la mercancía nueva adelante", "Mezclar todas las cajas", "Quitar las etiquetas", "Marcar las cajas con la fecha y poner lo nuevo detrás de lo viejo"], answer: 3, why: "Las etiquetas y el acomodo hacen fácil agarrar primero lo más viejo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      4,
      7,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Productos y proveedores",
        objective: "O2",
        notYet: "A los productos les falta el SKU, el costo por unidad o el proveedor principal.",
        meets: "Cinco productos, cada uno con SKU, proveedor principal, proveedor de respaldo y costo por unidad.",
        exceeds: "El costo por unidad es el costo completo, con envío y cargos incluidos."
      },
      {
        name: "Números de existencias y de uso",
        objective: "O4",
        notYet: "Las existencias, el uso diario o el tiempo de entrega son adivinados o faltan.",
        meets: "Las existencias vienen de un conteo real, con el uso diario y el tiempo de entrega llenos.",
        exceeds: "Anota la fecha del conteo y quién contó."
      },
      {
        name: "Punto de reorden y existencias de seguridad",
        objective: "O5",
        notYet: "El punto de reorden está escrito a mano o mal calculado.",
        meets: "Existencias de seguridad fijadas y punto de reorden calculado con una fórmula para cada producto.",
        exceeds: "Se guardan más existencias de seguridad de los productos clave o con un solo proveedor, con una razón."
      },
      {
        name: "Aviso para volver a pedir",
        objective: "O6",
        notYet: "No hay columna de estado, o no cambia cuando las existencias están bajas.",
        meets: "El estado muestra REORDER cuando las existencias están en el punto de reorden o por debajo.",
        exceeds: "El estudiante lo prueba cambiando las existencias y revisando el aviso."
      },
      {
        name: "Plan de primero en entrar, primero en salir",
        objective: "O6",
        notYet: "No hay plan para rotar las existencias.",
        meets: "Plan por escrito para poner la fecha en las cajas y colocar la mercancía nueva detrás de la vieja.",
        exceeds: "Dice quién lo hace y cuándo, por ejemplo en cada entrega."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que siguen usando la hoja de inventario 30 días después (encuesta de seguimiento)",
      "Dueños que dicen quedarse sin mercancía menos veces o tener menos mercancía echada a perder o desperdiciada en 60 días",
      "Dueños que consiguen un proveedor de respaldo para al menos un producto clave"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con una hoja de cálculo gratis como Google Sheets o Excel en la web",
      "Una lista de cinco productos que compras o vendes, con pedidos y notas de entrega recientes",
      "Papel, pluma y una calculadora para contar y practicar las cuentas",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Resuelvan juntos en un pizarrón el ejemplo del punto de reorden antes de que los estudiantes usen sus propios números.",
      "Lleva una hoja de cálculo de ejemplo con las fórmulas ya listas para los estudiantes que no conocen las hojas de cálculo.",
      "Advierte a los estudiantes sobre los fraudes de proveedores que piden transferencias bancarias, tarjetas de regalo o criptomonedas.",
      "Deja que los estudiantes usen productos de ejemplo si no quieren compartir precios reales en clase.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
