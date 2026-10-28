"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-ai-retail.js). See scripts/koachlearn-courses/README.md, "Translations".

const FTC_ADS = { name: "FTC: conceptos básicos de publicidad y marketing", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };

module.exports = {
  id: "smallbiz-ai-retail-es",
  lang: "es",
  translationOf: "smallbiz-ai-retail",
  category: "Small Business",
  name: "IA para negocios de venta al por menor",
  skills: "Escribir descripciones de productos, Hacer letreros para estantes, Controlar el inventario en una hoja de cálculo, Fijar puntos de reorden, Leer patrones de ventas, Planear una promoción de temporada",
  outcome: "manejar el papeleo de una tienda pequeña con ayuda de la IA: escribir descripciones de productos y letreros honestos, llevar una hoja de inventario con puntos de reorden, encontrar tus productos más vendidos y los más lentos, y planear una promoción de temporada a partir de tus propios números.",
  about: [
    "Este curso es para dueños y empleados de pequeños negocios de venta al por menor: boutiques, tiendas de la esquina y bodegas, tiendas de productos de belleza, tiendas de regalos, tiendas de segunda mano y personas que venden en línea o en mercados. Muchos de nuestros estudiantes son dueños de minorías que manejan una tienda con un equipo pequeño.",
    "Vas a usar un asistente de IA gratis y una hoja de cálculo (Google Sheets o Excel) para escribir sobre tus productos, llevar el control del inventario para que se te acabe menos, ver qué se vende y planear una promoción basada en datos y no en suposiciones.",
    "Cada lección dura unos cinco minutos y tiene una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma un kit de herramientas para tu tienda: cinco descripciones de productos honestas, tres letreros para estantes, una hoja de inventario de al menos 15 artículos con puntos de reorden y una alerta de reorden, una nota corta sobre tus tres productos más vendidos y los tres menos vendidos, y un plan de una página para una promoción de temporada con los artículos, el precio, las fechas y cómo vas a medirla.",
  chapters: [
    {
      name: "Capítulo 1: Productos, letreros e inventario",
      lessons: [
        {
          title: "Escribir descripciones de productos que venden, con honestidad",
          minutes: 5,
          goal: "Escribir descripciones de productos cortas y honestas con ayuda de la IA.",
          text: [
            "Una descripción de producto le dice al cliente qué es, para quién es y por qué lo quiere. Sirve en una etiqueta del estante, en tu sitio web, en un mercado en línea o en una publicación en redes sociales.",
            "Dale los datos a la IA: \"Escribe una descripción de 40 palabras para una crema corporal de manteca de karité de 12 oz, sin perfume, hecha en Ghana, para piel seca. Tono cálido. Menciona el tamaño.\" La IA hace que las palabras suenen amables; tú pones los datos.",
            "Revisa cada dato: tamaño, materiales, dónde se hizo, instrucciones de cuidado. Quita las afirmaciones que no puedas probar, como \"cura el eczema\" o \"la mejor de la ciudad\". La FTC (la Comisión Federal de Comercio de EE. UU.) dice que las afirmaciones en anuncios deben ser verdaderas y tener pruebas."
          ],
          steps: ["Escribe los datos del producto: nombre, tamaño, material, origen, para quién es.", "Pide a la IA una descripción corta con tu estilo.", "Compara cada dato con la etiqueta o la factura.", "Quita las afirmaciones que no puedas probar."],
          words: [["Descripción de producto", "un texto corto que dice a los clientes qué es un producto y por qué lo quieren."], ["Afirmación", "una frase que presenta como un hecho algo sobre un producto, como lo que hace."]],
          slides: [
            { title: "Qué, para quién y por qué", bullets: ["Qué es", "Para quién es", "Por qué lo quieren"] },
            { title: "Tú pones los datos", bullets: ["Nombre, tamaño, material, origen", "La IA hace que las palabras suenen amables"] },
            { title: "Mantenlo honesto", bullets: ["Compara con la etiqueta o la factura", "Nada de afirmaciones de salud o de \"la mejor\" que no puedas probar", "FTC: las afirmaciones deben ser verdaderas y tener pruebas"] }
          ],
          sources: [FTC_ADS],
          tryIt: "Elige cinco productos de tu tienda. Escribe los datos de cada uno, pide a la IA una descripción de 30 a 50 palabras y compara cada una con la etiqueta.",
          youCanNow: "escribir descripciones de productos honestas con ayuda de la IA."
        },
        {
          title: "Letreros de estante, tarjetas de precio y avisos de la tienda",
          minutes: 4,
          goal: "Hacer rápido letreros de estante y avisos de la tienda que se entiendan bien.",
          text: [
            "Los letreros responden preguntas antes de que los clientes las hagan: precio, ofertas, productos nuevos, política de devoluciones, \"pregúntanos por...\". Los letreros claros le ahorran tiempo al personal.",
            "Pide a la IA textos cortos: \"Escribe cinco letreros de estante para mi tienda de productos de belleza: llegó cabello nuevo para trenzas, compra 2 y lleva 1 gratis en gel para bordes hasta el 31 de mayo, nuestra política de devoluciones es de 14 días con recibo. Menos de 12 palabras cada uno.\" Luego diséñalos en Canva o en un documento e imprímelos.",
            "Los precios de los letreros deben coincidir con la caja registradora. Los letreros de oferta necesitan la fecha real en que termina y cualquier límite. Si atiendes a clientes que hablan otro idioma, pide a la IA una traducción y luego pide a alguien que hable bien ese idioma que la revise."
          ],
          steps: ["Haz una lista de los letreros que necesitas.", "Pide a la IA textos cortos.", "Diséñalos e imprímelos.", "Revisa que cada precio coincida con la caja registradora.", "Pide a alguien que hable bien el idioma que revise cualquier traducción."],
          words: [["Letrero de estante", "un letrero pequeño en un estante que muestra un precio, una oferta o información."], ["Política de devoluciones", "tus reglas sobre cuándo los clientes pueden devolver artículos."]],
          slides: [
            { title: "Los letreros ahorran tiempo al personal", bullets: ["Precio, ofertas y productos nuevos", "Política de devoluciones y \"pregúntanos por\""] },
            { title: "La IA escribe, tú diseñas", bullets: ["Pide textos cortos, de menos de 12 palabras", "Diseña en Canva o en un documento"] },
            { title: "Revisa antes de colgarlo", bullets: ["El precio coincide con la caja registradora", "Fecha de fin de la oferta y límites", "Traducciones revisadas por alguien que hable bien el idioma"] }
          ],
          tryIt: "Pide a la IA tres letreros de estante para tu tienda. Compara cada precio con tu caja registradora y luego hazlos e imprímelos o guárdalos.",
          youCanNow: "hacer letreros de estante y avisos de la tienda claros y correctos con ayuda de la IA."
        },
        {
          title: "Llevar una hoja de inventario con puntos de reorden",
          minutes: 6,
          goal: "Crear una hoja de cálculo de inventario que marque qué volver a pedir.",
          text: [
            "Quedarte sin tu producto más vendido te hace perder ventas; tener demasiado inventario lento te deja sin efectivo. Una hoja de inventario sencilla ayuda. Columnas: Artículo, Proveedor, En existencia, Vendidos por semana, Días en llegar, Punto de reorden, ¿Reordenar?",
            "El punto de reorden es el momento de volver a pedir. Una regla sencilla: vendidos por semana x semanas en llegar + un poco extra (inventario de seguridad). Si vendes 10 por semana, tarda 1 semana en llegar y guardas 5 extra, vuelve a pedir cuando te queden 15.",
            "Pide a la IA que te ayude con la fórmula: \"En Google Sheets, escribe una fórmula que muestre REORDER cuando la columna C sea menor o igual que la columna F.\" Una respuesta común es =IF(C2<=F2,\"REORDER\",\"\"). Si tu hoja está en español, la función puede llamarse SI. Pruébala en algunas filas para asegurarte de que funciona."
          ],
          steps: ["Crea las siete columnas.", "Llena tus 15 artículos principales.", "Calcula el punto de reorden de cada uno: ventas por semana x semanas en llegar + inventario de seguridad.", "Pide a la IA una fórmula IF (SI) para marcar los reordenes.", "Pruébala en algunas filas y actualiza En existencia cada semana."],
          words: [["Inventario (existencias)", "los productos que tienes disponibles para vender."], ["Punto de reorden", "la cantidad que queda cuando debes pedir más."], ["Inventario de seguridad", "artículos extra que guardas por si las ventas suben o la entrega se atrasa."]],
          slides: [
            { title: "Por qué controlar el inventario", bullets: ["Quedarte sin producto te hace perder ventas", "Demasiado inventario lento te deja sin efectivo"] },
            { title: "Columnas de la hoja de inventario", bullets: ["Artículo, Proveedor, En existencia", "Vendidos por semana, Días en llegar", "Punto de reorden, ¿Reordenar?"] },
            { title: "Punto de reorden", bullets: ["Ventas por semana x semanas en llegar + inventario de seguridad", "Ejemplo: 10 x 1 + 5 = vuelve a pedir con 15"] },
            { title: "Deja que la hoja te avise", bullets: ["=IF(C2<=F2,\"REORDER\",\"\")", "Pruébala en algunas filas", "Actualiza En existencia cada semana"] }
          ],
          tryIt: "Crea tu hoja de inventario con al menos 15 artículos, calcula los puntos de reorden y agrega una fórmula IF (SI) que muestre REORDER. Pruébala cambiando un número de En existencia.",
          youCanNow: "llevar una hoja de inventario que te dice cuándo volver a pedir."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Productos, letreros e inventario",
        questions: [
          { q: "¿Quién pone los datos en una descripción de producto?", options: ["Lo que adivine la IA", "Tú, a partir de la etiqueta o la factura", "Un competidor", "La reseña de un cliente"], answer: 1, why: "La IA escribe las palabras; tú pones los datos revisados." },
          { q: "La IA escribe que tu crema corporal \"cura el eczema\". ¿Qué haces?", options: ["Agregas \"garantizado\"", "Lo dejas", "Lo pones más grande", "Lo quitas a menos que puedas probarlo"], answer: 3, why: "La FTC exige pruebas para las afirmaciones." },
          { q: "Un letrero de oferta debe mostrar:", options: ["La fecha real en que termina y cualquier límite", "Ningún precio", "Tu contraseña", "Un precio anterior falso"], answer: 0, why: "Los letreros de oferta honestos incluyen fechas y límites." },
          { q: "Vendes 8 por semana, la entrega tarda 2 semanas y el inventario de seguridad es 4. ¿Cuál es el punto de reorden?", options: ["8", "12", "14", "20"], answer: 3, why: "8 x 2 + 4 = 20." },
          { q: "¿Qué hace =IF(C2<=F2,\"REORDER\",\"\")?", options: ["Suma las ventas", "Borra la fila", "Muestra REORDER cuando lo que hay en existencia está en el punto de reorden o por debajo", "Envía un pedido al proveedor"], answer: 2, why: "Marca los artículos que hay que volver a pedir." }
        ]
      }
    },
    {
      name: "Capítulo 2: Leer las ventas y planear promociones",
      lessons: [
        {
          title: "Encontrar tus productos más vendidos y los más lentos",
          minutes: 5,
          goal: "Usar un informe de ventas y la ayuda de la IA para encontrar tus productos más y menos vendidos.",
          text: [
            "La mayoría de los sistemas de punto de venta (POS) pueden exportar un informe de ventas por artículo como un archivo que abres en una hoja de cálculo. Si el tuyo no puede, sirve un conteo semanal sencillo por artículo.",
            "Ordena por unidades vendidas y por dinero de ventas. Tus productos más vendidos merecen un buen lugar en el estante y nunca deben acabarse. Los más lentos quizá necesiten un mejor lugar, un paquete, una rebaja o dejar de venderse.",
            "Puedes pegar los totales por artículo (sin datos de clientes) en un asistente de IA: \"Aquí hay 8 semanas de ventas por artículo de mi tienda de regalos. ¿Qué artículos suben, bajan o son de temporada? ¿Qué preguntas debería hacerme?\" Toma las respuestas como ideas y confírmalas en tu informe."
          ],
          steps: ["Exporta un informe de ventas por artículo o cuenta a mano.", "Ordena por unidades y por dinero.", "Marca tus 3 más vendidos y tus 3 menos vendidos.", "Pide a la IA patrones usando solo totales por artículo.", "Confirma cada patrón en tu informe."],
          words: [["POS", "punto de venta: el sistema que registra las ventas."], ["Exportar", "guardar datos de un sistema como un archivo que puedes abrir en otro lugar."], ["Rebaja", "un precio más bajo para vender el inventario lento."]],
          slides: [
            { title: "Consigue los números", bullets: ["Exporta un informe de ventas por artículo de tu POS", "O cuenta las ventas por artículo cada semana"] },
            { title: "Ordena de dos formas", bullets: ["Por unidades vendidas", "Por dinero de ventas", "Marca los 3 primeros y los 3 últimos"] },
            { title: "La IA para ver patrones", bullets: ["Solo totales por artículo, sin datos de clientes", "¿Suben, bajan, son de temporada?", "Confirma en tu informe"] }
          ],
          tryIt: "Consigue de 4 a 8 semanas de ventas por artículo. Encuentra tus 3 más vendidos y tus 3 menos vendidos, luego pregunta a la IA qué patrones ve y confirma uno.",
          youCanNow: "encontrar tus productos más vendidos y los más lentos, y comparar las ideas de la IA con tus propios números."
        },
        {
          title: "Planear una promoción de temporada con tus números",
          minutes: 5,
          goal: "Planear una promoción con artículos, precio, fechas y una revisión de ganancias.",
          text: [
            "La venta al por menor funciona por temporadas: regreso a clases, fiestas de fin de año, graduaciones, verano, festivales locales y celebraciones culturales importantes para tus clientes. Planea las promociones con un mes de anticipación.",
            "Usa tus números: promociona artículos que se venden bien en esa temporada o junta un producto lento con uno muy vendido. Pide ideas a la IA: \"Mi producto más vendido es el cabello para trenzas; el más lento son los gorros de satín. Dame tres ideas de paquetes para el regreso a clases que mantengan una ganancia.\"",
            "Revisa las cuentas: precio, costo, ganancia por venta y cuántos necesitas vender. Escribe las fechas y los límites, y pide suficiente inventario usando tu hoja de reorden."
          ],
          steps: ["Elige una temporada o un evento.", "Escoge artículos de tu informe de ventas.", "Pide a la IA ideas de promociones o paquetes.", "Revisa en papel la ganancia por venta.", "Fija fechas y límites, y pide inventario."],
          words: [["Promoción", "una oferta especial por un tiempo fijo."], ["Paquete", "dos o más artículos que se venden juntos por un solo precio."]],
          slides: [
            { title: "Planea con un mes de anticipación", bullets: ["Regreso a clases, fiestas, graduaciones", "Festivales locales y celebraciones culturales"] },
            { title: "Usa tus números", bullets: ["Promociona los más vendidos de la temporada", "Junta un producto lento con uno muy vendido"] },
            { title: "Revisa antes de lanzar", bullets: ["Precio, costo y ganancia por venta", "Fechas y límites", "Suficiente inventario pedido"] }
          ],
          tryIt: "Planea una promoción para la próxima temporada: artículos, precio, ganancia por venta, fechas y cuánto inventario necesitas.",
          youCanNow: "planear una promoción de temporada basada en tus propios números de ventas."
        },
        {
          title: "Medir la promoción y proteger tu tienda",
          minutes: 5,
          goal: "Medir los resultados de una promoción y mantener seguros los datos de la tienda.",
          text: [
            "Decide cómo vas a medir antes de empezar: unidades vendidas de los artículos en promoción, ventas totales durante esas fechas comparadas con las mismas semanas anteriores, y ganancia. Un código de promoción o un botón aparte en el POS para el paquete facilita el seguimiento.",
            "Después, pide a la IA que te ayude a escribir un resumen corto con tus números: qué funcionó, qué no y qué probar la próxima vez. Compara sus cuentas con tu hoja.",
            "Mantén seguros los datos de la tienda: no pegues nombres de clientes, números de tarjetas, contraseñas de proveedores ni datos del personal en herramientas de IA. Cuidado con facturas falsas de proveedores y pedidos de pago \"urgentes\"; llama al proveedor a un número que ya conoces."
          ],
          steps: ["Elige tus medidas antes de la promoción.", "Agrega un código o un botón en el POS para seguirla.", "Compara con las mismas semanas anteriores.", "Pide a la IA que te ayude a resumir y revisa las cuentas.", "No pongas datos de clientes ni de proveedores en la IA."],
          words: [["Periodo de comparación", "un tiempo anterior con el que comparas los resultados, como las mismas semanas del mes pasado."], ["Código de promoción", "un código que registra quién usó una oferta."]],
          slides: [
            { title: "Decide primero cómo medir", bullets: ["Unidades de artículos en promoción", "Ventas frente a las mismas semanas anteriores", "Ganancia"] },
            { title: "Facilita el seguimiento", bullets: ["Código de promoción o un botón del POS para el paquete", "La IA ayuda a escribir el resumen; tú revisas las cuentas"] },
            { title: "Protege tu tienda", bullets: ["Nada de datos de clientes, tarjetas, proveedores o personal en la IA", "Llama a los proveedores a números conocidos si hay dudas con facturas"] }
          ],
          tryIt: "Tarea final: arma tu kit de herramientas de venta: cinco descripciones de productos, tres letreros de estante, tu hoja de inventario con alertas de reorden, tus productos más y menos vendidos, y tu plan de promoción con cómo vas a medirla.",
          youCanNow: "hacer y medir una promoción y usar la IA de forma segura en todo el papeleo de tu tienda."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Leer las ventas y planear promociones",
        questions: [
          { q: "Tu POS no puede exportar informes. ¿Qué puedes hacer?", options: ["Llevar un conteo semanal sencillo por artículo", "Adivinar", "Preguntarle a un competidor", "Dejar de llevar la cuenta"], answer: 0, why: "Un conteo a mano también muestra patrones." },
          { q: "¿Qué podría ayudar a un producto lento?", options: ["Pedir más", "Esconderlo", "Subirle mucho el precio", "Un paquete con un producto muy vendido"], answer: 3, why: "Los paquetes pueden mover el inventario lento." },
          { q: "Antes de lanzar un paquete debes revisar:", options: ["Solo el color", "La ganancia por venta", "Tu horóscopo", "Nada"], answer: 1, why: "Las promociones también deben dejar dinero." },
          { q: "¿Cómo sigues fácilmente una promoción?", options: ["Con un código de promoción o un botón del POS para ella", "De memoria", "Pidiéndole a la IA que adivine", "Contando los carros de los clientes"], answer: 0, why: "Los códigos y botones registran cada venta." },
          { q: "Un correo dice que tu proveedor cambió sus datos bancarios y que pagues hoy. Tú:", options: ["Respondes con tu contraseña", "Pagas ya", "Llamas al proveedor a un número que conoces", "Lo reenvías a tus clientes"], answer: 2, why: "Las facturas falsas de proveedores son una estafa común." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para negocios de venta al por menor",
    questions: [
      { q: "Una descripción de producto responde:", options: ["Tu contraseña", "Qué es, para quién es, por qué lo quieren", "El banco del proveedor", "Nada"], answer: 1, why: "Esas tres partes ayudan a los clientes a decidir." },
      { q: "¿Dónde revisas los datos de un producto?", options: ["Con un competidor", "En la IA", "En una publicación de redes sociales", "En la etiqueta o la factura"], answer: 3, why: "Las etiquetas y facturas tienen los datos reales." },
      { q: "La FTC dice que las afirmaciones en anuncios deben ser:", options: ["En mayúsculas", "Emocionantes", "Cortas", "Verdaderas y con pruebas"], answer: 3, why: "Esa es la norma de la FTC." },
      { q: "Los precios de los letreros de estante deben:", options: ["Redondearse hacia arriba", "Coincidir con la caja registradora", "Estar escondidos", "Cambiar cada día"], answer: 1, why: "Los precios que no coinciden molestan a los clientes." },
      { q: "Un letrero traducido debe revisarlo:", options: ["La imprenta", "Nadie", "Alguien que hable bien el idioma", "Un sitio web cualquiera"], answer: 2, why: "Las traducciones de la IA pueden tener errores." },
      { q: "Un buen letrero de estante tiene:", options: ["Menos de unas 12 palabras", "Una página completa", "Nada escrito", "Letra diminuta"], answer: 0, why: "Los letreros cortos se leen rápido." },
      { q: "¿Qué es el inventario de seguridad?", options: ["Un seguro", "Una caja fuerte", "Artículos extra por si las ventas suben o la entrega se atrasa", "Artículos vencidos"], answer: 2, why: "Te protege de quedarte sin producto." },
      { q: "Vendes 5 por semana, la entrega tarda 2 semanas, inventario de seguridad 5. ¿Punto de reorden?", options: ["7", "10", "15", "25"], answer: 2, why: "5 x 2 + 5 = 15." },
      { q: "Después de que la IA escribe una fórmula para la hoja de cálculo, debes:", options: ["Confiar en ella", "Probarla en algunas filas", "Borrarla", "Imprimirla"], answer: 1, why: "Las fórmulas pueden estar mal." },
      { q: "¿Por qué controlar el inventario?", options: ["Para confundir al personal", "Por diversión", "Porque la IA lo dice", "Para quedarte sin producto menos veces y evitar demasiado inventario lento"], answer: 3, why: "Las dos cosas te cuestan dinero." },
      { q: "POS significa:", options: ["Punto de venta", "Precio del servicio", "Recibo de correos", "Hoja de pedidos de productos"], answer: 0, why: "Es el sistema que registra las ventas." },
      { q: "Ordenar por dinero de ventas muestra:", options: ["Las horas del personal", "Cuáles pesan más", "Cuáles son más nuevos", "Qué artículos traen más dinero"], answer: 3, why: "El dinero muestra los ingresos por artículo." },
      { q: "Cuando pegas ventas en la IA, incluye:", options: ["Números de tarjetas", "Nombres de clientes", "Solo totales por artículo", "Contraseñas de proveedores"], answer: 2, why: "Nada de datos privados." },
      { q: "¿Cuándo debes planear una promoción de temporada?", options: ["El mismo día", "Con un mes de anticipación, más o menos", "Después de la temporada", "Nunca"], answer: 1, why: "Así hay tiempo para pedir inventario y hacer letreros." },
      { q: "¿Qué es un paquete?", options: ["Un artículo roto", "Un impuesto", "Un préstamo", "Artículos que se venden juntos por un solo precio"], answer: 3, why: "Los paquetes juntan artículos." },
      { q: "Antes de una promoción, usa tu hoja de reorden para:", options: ["Esconder precios", "Borrar artículos", "Asegurarte de tener suficiente inventario", "Pagarle al personal"], answer: 2, why: "Quedarte sin producto arruina una promoción." },
      { q: "Mide una promoción comparándola con:", options: ["Las mismas semanas anteriores", "Lo que adivine un competidor", "Nada", "El año que viene"], answer: 0, why: "Un periodo de comparación muestra el cambio." },
      { q: "Cuando la IA escribe el resumen de tu promoción, tú:", options: ["Confías en cada número", "Comparas sus cuentas con tu hoja", "No lo lees", "Lo publicas sin leerlo"], answer: 1, why: "La IA puede equivocarse en las cuentas." },
      { q: "¿Qué nunca debe ir en una herramienta de IA?", options: ["Nombres de artículos", "Contraseñas de cuentas de proveedores", "Totales semanales", "Nombres de temporadas"], answer: 1, why: "Las contraseñas son privadas." },
      { q: "¿Qué decisión deja este curso en tus manos y no en las de la IA?", options: ["Qué artículos promocionar y a qué precio", "Cómo se redacta un texto corto", "Ideas para paquetes", "El texto de los letreros"], answer: 0, why: "La IA sugiere; tú decides con tus números." }
    ]
  }
};
