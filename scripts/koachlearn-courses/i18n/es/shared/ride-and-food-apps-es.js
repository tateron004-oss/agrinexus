"use strict";

// Koach Learn course (shared), Spanish translation of shared/ride-and-food-apps.js. See scripts/koachlearn-courses/README.md, "Translations".
// Uber facts as in the English course (checked 27 October 2026 against the pages in `sources`).

module.exports = {
  id: "ride-and-food-apps-es",
  lang: "es",
  translationOf: "ride-and-food-apps",
  category: "Seniors and Technology",
  name: "Pedir un viaje o comida con aplicaciones (Uber, Lyft, DoorDash)",
  skills: "Configurar una aplicación de viajes o de entregas, Pedir un viaje, Comprobar que es el auto correcto, Pedir comida o compras a domicilio, Revisar precios, propinas y recibos",
  outcome: "configurar una aplicación de viajes o de entregas, ver el precio antes de reservar, pedir un viaje y comprobar que es el auto correcto antes de subir, pedir comida o compras a tu puerta y revisar el recibo después.",
  about: [
    "Las aplicaciones de viajes como Uber y Lyft envían a un conductor a recogerte. Las aplicaciones de entregas como DoorDash, Uber Eats e Instacart llevan comidas o compras del supermercado a tu puerta. Ayudan cuando no manejas, no puedes ir a la tienda o necesitas ir al médico o a una entrevista de trabajo.",
    "Este curso te enseña a configurar las aplicaciones, ver el precio antes de aceptar, subir al auto correcto con seguridad, pedir comida y revisar lo que pagaste.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Hay una breve comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Los menús de las aplicaciones cambian a menudo, así que describimos qué hacer en lugar de nombrar cada botón."
  ],
  finalTask: "En una aplicación de viajes, escribe un punto de recogida y un destino reales (por ejemplo, de tu casa a una clínica o una biblioteca), lee el precio y la hora de llegada, y encuentra las herramientas de seguridad (compartir tu viaje, el botón de emergencia, el PIN del viaje) sin reservar a menos que necesites el viaje. Luego, en una aplicación de entregas, arma un pedido pequeño, revisa en la pantalla de pago el total de los artículos, los cargos, la propina y la dirección de entrega, y explica qué significa cada línea.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos que necesitan viajes a citas, al trabajo o a hacer mandados, o que les lleven comida y compras a casa: personas mayores que ya no manejan, personas con discapacidad, cuidadores, personas que regresan a la comunidad y cualquiera que sea nuevo con las aplicaciones de viajes y entregas.",
    startingPoint: "Pueden usar un teléfono inteligente para abrir aplicaciones y escribir una dirección, y quizás tienen una tarjeta de débito o de crédito. Muchos nunca han reservado un viaje o una entrega en una aplicación, no saben bien cómo funcionan los precios, los cargos y las propinas, o no conocen las comprobaciones de seguridad antes de subir a un auto.",
    gap: "Las aplicaciones de viajes y entregas pueden significar llegar a tiempo a una clínica o al trabajo y conseguir comida sin salir, pero quien no conoce los pasos puede pagar mucho más de lo que esperaba, subir al auto equivocado o caer en estafas de falso soporte de la aplicación.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explican palabras como marcador de recogida, cargo por servicio y sustitución",
      "Dispositivos: un teléfono inteligente con la ubicación activada y la aplicación oficial",
      "Tiempo: unos 5 minutos por lección, unos 60 minutos en total",
      "Dinero: no hace falta reservar ningún viaje ni hacer ningún pedido para el curso; los precios y los cargos cambian según la aplicación, la hora y la ciudad",
      "Edad y seguridad: los términos de Uber exigen ser adulto o tener una cuenta de adolescente creada por un padre; nunca se comparten contraseñas ni códigos con nadie que llame o envíe mensajes de texto"
    ],
    prerequisites: "Usar un teléfono inteligente y una tableta, o saber instalar una aplicación desde la tienda oficial."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con la tienda oficial de aplicaciones", action: "instalar una aplicación de viajes, crear una cuenta y agregar una forma de pago con seguridad", standard: "revisando el desarrollador y escribiendo los datos de la tarjeta solo dentro de la aplicación" },
    { id: "O2", condition: "Con un punto de recogida y un destino", action: "escribir los dos en una aplicación de viajes y leer el precio y la hora de llegada antes de confirmar", standard: "revisando el punto de recogida en el mapa y leyendo el precio antes de reservar" },
    { id: "O3", condition: "Cuando llega el auto que reservaste", action: "comparar la placa, el auto y el conductor con la aplicación y encontrar las herramientas de seguridad", standard: "sin subir nunca a un auto que no coincide y encontrando Compartir mi viaje, el botón de emergencia y el PIN" },
    { id: "O4", condition: "Con una aplicación de entregas", action: "escribir tu dirección de entrega con notas y armar un pedido en el carrito", standard: "con la dirección completa, una nota útil y una opción para los artículos agotados" },
    { id: "O5", condition: "Ante una pantalla de pago", action: "explicar cada línea, incluidos el total de los artículos, los cargos, la propina y el total, antes de pagar", standard: "nombrando bien cada cargo y comparando el total con tu presupuesto" },
    { id: "O6", condition: "Después de un viaje o una entrega", action: "revisar el recibo, conseguir ayuda dentro de la aplicación para un problema y rechazar el falso soporte", standard: "usando solo la Ayuda dentro de la aplicación y sin dar nunca una contraseña ni un código" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conseguir un viaje",
      lessons: [
        {
          objectives: ["O1"],
          title: "Configurar una aplicación de viajes",
          minutes: 5,
          goal: "Instalar una aplicación de viajes, crear una cuenta y agregar una forma de pago con seguridad.",
          text: [
            "Uber y Lyft son las aplicaciones de viajes más conocidas en Estados Unidos. Un conductor usa su propio auto para llevarte adonde quieres ir, y tú pagas por la aplicación.",
            "Instala la aplicación solo desde la tienda oficial (Google Play o App Store) y revisa que el desarrollador sea Uber o Lyft. Regístrate con tu número de teléfono y tu correo. Los términos de Uber dicen que debes tener 18 años o más para tener tu propia cuenta; los adolescentes de 13 a 17 años solo pueden viajar con una cuenta para adolescentes que configura un padre, madre o tutor. Revisa los términos de la propia aplicación para ver las reglas actuales.",
            "Agrega una forma de pago dentro de la aplicación, como una tarjeta de débito o de crédito. Escríbela solo en la aplicación, nunca en un mensaje o un correo. Guarda tu casa como lugar guardado para elegirla rápido después."
          ],
          steps: ["Abre la tienda oficial de aplicaciones y busca Uber o Lyft.", "Revisa el nombre del desarrollador y luego instala.", "Regístrate con tu número de teléfono y tu correo.", "Agrega una forma de pago en la sección de pagos o billetera de la aplicación.", "Guarda la dirección de tu casa como lugar guardado."],
          words: [["Aplicación de viajes", "una aplicación que envía a un conductor en su propio auto a recogerte."], ["Forma de pago", "la tarjeta o cuenta a la que cobra la aplicación."], ["Lugar guardado", "una dirección que la aplicación recuerda, como tu casa."]],
          slides: [
            { title: "Qué hacen las aplicaciones de viajes", bullets: ["Un conductor te recoge en su auto", "Pagas por la aplicación", "Las más conocidas en EE. UU.: Uber y Lyft"] },
            { title: "Configúrala con seguridad", bullets: ["Solo la tienda oficial de aplicaciones", "Revisa el nombre del desarrollador", "Uber: 18+ para cuenta propia; cuentas para adolescentes de 13 a 17"] },
            { title: "Agrega el pago", bullets: ["Solo dentro de la aplicación", "Nunca por mensaje o correo", "Guarda la dirección de tu casa"] }
          ],
          sources: [{ name: "Uber: Términos de uso en EE. UU. (edad y cuentas para adolescentes)", url: "https://www.uber.com/legal/en/document/?name=general-terms-of-use&country=united-states&lang=en" }],
          tryIt: "Instala Uber o Lyft desde la tienda oficial, crea tu cuenta y guarda la dirección de tu casa. Puedes esperar a agregar una tarjeta hasta que necesites un viaje.",
          youCanNow: "instalar una aplicación de viajes con seguridad, crear una cuenta y guardar la dirección de tu casa.",
          quickCheck: [
            { objective: "O1", q: "En una aplicación de viajes, ¿quién maneja el auto?", options: ["Un conductor de autobús de la ciudad", "Tú", "Un conductor que usa su propio auto", "Solo una compañía de taxis"], answer: 2, why: "Un conductor usa su propio auto para llevarte, y pagas por medio de la aplicación." },
            { objective: "O1", q: "Un mensaje de texto te pide responder con el número de tu tarjeta para terminar de configurar tu cuenta de viajes. ¿Qué harías?", options: ["Responder con el número de la tarjeta", "Ignorarlo y agregar la tarjeta solo dentro de la aplicación oficial", "Enviar el número de la tarjeta por correo en su lugar", "Llamar al número del mensaje y leerlo en voz alta"], answer: 1, why: "Escribe los datos de tu tarjeta solo en la aplicación, nunca en un mensaje de texto ni en un correo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pedir un viaje y ver primero el precio",
          minutes: 5,
          goal: "Escribir un punto de recogida y un destino y leer el precio antes de confirmar.",
          text: [
            "Abre la aplicación y escribe adónde quieres ir en la casilla de destino (\"¿A dónde vas?\" o \"Where to?\"). Revisa el punto de recogida: la aplicación usa tu ubicación, pero puedes mover el marcador o escribir la dirección para que el conductor te encuentre.",
            "La aplicación muestra opciones de viaje, desde viajes compartidos o estándar más baratos hasta autos más grandes o mejores, cada una con un precio y una hora de llegada. El precio puede subir en horas de mucha demanda, como la hora pico o después de un evento grande.",
            "Elige el viaje, revisa el precio y la forma de pago, y confirma. Luego la aplicación muestra el nombre, la foto, el auto y la placa del conductor, y un mapa del auto que viene hacia ti."
          ],
          steps: ["Escribe tu destino en la casilla \"¿A dónde vas?\".", "Revisa el punto de recogida; mueve el marcador si hace falta.", "Compara las opciones de viaje: precio y hora de llegada.", "Revisa la forma de pago.", "Confirma solo cuando el precio esté bien.", "Mira en el mapa cómo llega tu auto."],
          words: [["Punto de recogida", "donde el conductor se encontrará contigo."], ["Destino", "adonde quieres ir."], ["Precio por alta demanda", "precios más altos cuando mucha gente pide viajes al mismo tiempo."]],
          slides: [
            { title: "¿A dónde vas?", bullets: ["Escribe tu destino", "Revisa el punto de recogida en el mapa"] },
            { title: "Mira primero el precio", bullets: ["Cada opción de viaje muestra un precio y un tiempo", "Los precios pueden subir en horas de mucha demanda"] },
            { title: "Confirma", bullets: ["Revisa el precio y el pago", "Luego ves al conductor, el auto y la placa"] }
          ],
          tryIt: "Abre la aplicación de viajes y escribe un destino real, como una clínica, una biblioteca o un centro de empleo. Lee dos opciones de viaje y sus precios. Cierra la aplicación sin reservar a menos que necesites el viaje.",
          youCanNow: "pedir un viaje y leer el precio y la hora de llegada antes de aceptar.",
          quickCheck: [
            { objective: "O2", q: "¿Qué te muestra la aplicación después de que confirmas un viaje?", options: ["El nombre, la foto, el auto y la placa del conductor", "El saldo de tu banco", "Una lista de restaurantes", "Tu contraseña"], answer: 0, why: "Después de confirmar, la aplicación muestra al conductor, el auto y la placa, y un mapa." },
            { objective: "O2", q: "La aplicación puso tu marcador de recogida al otro lado de una calle con mucho tráfico. ¿Qué harías?", options: ["Reservar igual y cruzar la calle corriendo", "Cancelar tu cuenta", "Elegir el auto más caro", "Mover el marcador o escribir la dirección para que el conductor te encuentre"], answer: 3, why: "Puedes mover el marcador o escribir la dirección para que el punto de recogida sea el correcto." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Subir al auto correcto, con seguridad",
          minutes: 5,
          goal: "Revisar el auto, la placa y el conductor antes de subir, y usar las herramientas de seguridad.",
          text: [
            "Antes de subir, compara tres cosas con la aplicación: la placa, la marca y el color del auto, y el nombre y la foto del conductor. Pregunta \"¿A quién viene a buscar?\" y deja que el conductor diga tu nombre. Si algo no coincide, no subas.",
            "Uber tiene un PIN opcional de cuatro dígitos: tú le dices el PIN al conductor, y el viaje solo puede empezar con el correcto. La función Share My Trip (Compartir mi viaje) de Uber permite que familiares o amigos de confianza sigan tu viaje en vivo, y su botón de emergencia en la aplicación se comunica con el 911 y muestra tu ubicación y los datos del auto. Lyft tiene sus propias herramientas de seguridad; búscalas en su página de seguridad o en la aplicación.",
            "Espera adentro hasta que la aplicación muestre que el auto llegó, y no subas a un auto que te ofrezca un viaje sin haberlo reservado en la aplicación."
          ],
          steps: ["Espera adentro hasta que la aplicación diga que el auto llegó.", "Revisa la placa, el auto y la foto del conductor.", "Pregunta \"¿A quién viene a buscar?\"", "Usa el PIN si lo activaste.", "Comparte tu viaje con un familiar o amigo.", "Sabe dónde está el botón de emergencia."],
          words: [["Placa", "la placa con el número del auto; revisa que coincida con la aplicación."], ["Share My Trip (Compartir mi viaje)", "la herramienta de Uber que permite que las personas que eliges sigan tu viaje en vivo."], ["PIN", "un código corto de números que le dices al conductor para empezar el viaje."]],
          slides: [
            { title: "Revisa antes de subir", bullets: ["La placa", "Marca y color del auto", "Nombre y foto del conductor"] },
            { title: "Pregunta, no digas", bullets: ["\"¿A quién viene a buscar?\"", "Deja que el conductor diga tu nombre", "¿No coincide? No subas"] },
            { title: "Herramientas de seguridad (Uber)", bullets: ["PIN opcional de cuatro dígitos para el viaje", "Compartir mi viaje con contactos de confianza", "El botón de emergencia se comunica con el 911"] },
            { title: "Lyft y otras", bullets: ["Tienen sus propias herramientas de seguridad", "Búscalas en la aplicación o en la página de seguridad"] }
          ],
          sources: [{ name: "Uber: Seguridad para los pasajeros", url: "https://www.uber.com/us/en/ride/safety/" }],
          tryIt: "Abre la sección de seguridad de tu aplicación de viajes. Encuentra cómo compartir un viaje y dónde está el botón de emergencia. Si tu aplicación tiene PIN de viaje, actívalo.",
          youCanNow: "comprobar que tienes el auto y el conductor correctos y usar las herramientas de seguridad de la aplicación.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace Compartir mi viaje (Share My Trip) de Uber?", options: ["Divide el precio con un desconocido", "Deja que familiares o amigos de confianza sigan tu viaje en vivo", "Publica tu viaje en las redes sociales", "Le da tu contraseña al conductor"], answer: 1, why: "Compartir mi viaje deja que las personas en quienes confías sigan tu viaje en vivo." },
            { objective: "O3", q: "Un conductor dice \"¿Usted es María?\" y tú eres María. ¿Qué harías en lugar de decir que sí?", options: ["Subir de inmediato", "Decirle tu PIN al conductor antes de revisar nada", "Preguntar \"¿A quién viene a buscar?\" y dejar que el conductor diga tu nombre", "Darle tu teléfono al conductor"], answer: 2, why: "Dejar que el conductor diga tu nombre muestra que de verdad lo enviaron por ti." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conseguir un viaje",
        questions: [
          { objective: "O1", q: "¿Dónde debes conseguir la aplicación de Uber o Lyft?", options: ["En un enlace de un mensaje", "En cualquier sitio web", "En la tienda oficial de aplicaciones", "En un anuncio emergente"], answer: 2, why: "Las tiendas oficiales tienen las aplicaciones reales." },
          { objective: "O2", q: "¿Cuándo puedes ver el precio de un viaje?", options: ["Antes de confirmar el viaje", "Solo después del viaje", "Solo en tu estado de cuenta", "Nunca"], answer: 0, why: "La aplicación muestra el precio de cada opción antes de que aceptes." },
          { objective: "O2", q: "¿Por qué un viaje podría costar más un viernes en la noche?", options: ["La aplicación está rota", "Precio por alta demanda cuando mucha gente pide viajes", "Tu teléfono es viejo", "Los viajes son gratis los viernes"], answer: 1, why: "Los precios pueden subir cuando hay mucha demanda." },
          { objective: "O3", q: "Llega un auto pero la placa no coincide con la aplicación. ¿Qué haces?", options: ["Subes de todos modos", "Subes y preguntas después", "Le pagas al conductor en efectivo", "No subes"], answer: 3, why: "Si no coincide, puede que no sea tu viaje." },
          { objective: "O3", q: "¿Cuál es la forma más segura de comprobar al conductor?", options: ["Decir \"¿Viene por María?\"", "Preguntar \"¿A quién viene a buscar?\"", "Mostrarle tu identificación", "Decirle primero tu PIN"], answer: 1, why: "Dejar que el conductor diga tu nombre prueba que es tu conductor." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pedir comida y compras",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pedir una comida o compras a domicilio",
          minutes: 5,
          goal: "Encontrar un restaurante o una tienda en una aplicación de entregas y armar un pedido.",
          text: [
            "Las aplicaciones de entregas como DoorDash, Uber Eats e Instacart te permiten pedir en restaurantes y tiendas locales. Un repartidor, a veces llamado Dasher o comprador personal, recoge tu pedido y te lo lleva.",
            "Instala la aplicación desde la tienda oficial y escribe con cuidado tu dirección de entrega, con el número de apartamento o de portón y notas para el repartidor, como \"puerta azul, toque el timbre\".",
            "Navega o busca un restaurante o una tienda, toca los artículos para agregarlos a tu carrito y elige opciones como el tamaño. Para el supermercado, normalmente puedes elegir qué debe hacer el comprador si un artículo está agotado: cambiarlo por algo parecido o devolverte el dinero."
          ],
          steps: ["Instala la aplicación de entregas desde la tienda oficial.", "Escribe tu dirección de entrega completa y notas para el repartidor.", "Busca un restaurante o una tienda.", "Toca los artículos para agregarlos a tu carrito.", "Para el supermercado, elige qué hacer si un artículo está agotado."],
          words: [["Aplicación de entregas", "una aplicación que lleva comida o productos de negocios locales a tu puerta."], ["Carrito", "la lista de artículos que piensas comprar."], ["Sustitución", "un artículo parecido que elige el comprador cuando el tuyo está agotado."]],
          slides: [
            { title: "Aplicaciones de entregas", bullets: ["DoorDash, Uber Eats, Instacart y otras", "Un repartidor o comprador te lleva el pedido"] },
            { title: "Tu dirección", bullets: ["Dirección completa con número de apartamento o portón", "Notas como \"puerta azul, toque el timbre\""] },
            { title: "Arma un pedido", bullets: ["Busca un restaurante o una tienda", "Agrega artículos a tu carrito", "Elige qué pasa si un artículo está agotado"] }
          ],
          tryIt: "Abre una aplicación de entregas (instálala desde la tienda oficial si hace falta). Escribe tu dirección con una nota para el repartidor y luego agrega dos artículos a un carrito. No hagas el pedido todavía.",
          youCanNow: "encontrar un restaurante o una tienda en una aplicación de entregas y armar un pedido para tu dirección.",
          quickCheck: [
            { objective: "O4", q: "En una aplicación de entregas, ¿quién lleva tu pedido?", options: ["Solo el dueño del restaurante", "La oficina de correos", "Nadie; tienes que ir a buscarlo", "Un repartidor, a veces llamado Dasher o comprador"], answer: 3, why: "Un repartidor recoge tu pedido y te lo lleva." },
            { objective: "O4", q: "Vives en el apartamento 4B detrás de un portón. ¿Qué harías al escribir tu dirección?", options: ["Agregar el número del apartamento, los datos del portón y una nota para el repartidor", "Escribir solo el nombre de la calle", "Dejar la dirección en blanco", "Usar la dirección de un vecino"], answer: 0, why: "Los números del apartamento y del portón y una nota ayudan al repartidor a encontrarte." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Entender el pago: cargos, propinas y total",
          minutes: 5,
          goal: "Leer la pantalla de pago y saber qué es cada cargo antes de pagar.",
          text: [
            "El precio del menú no es todo el costo. La pantalla de pago muestra el total de los artículos más cargos extra, que pueden incluir un cargo de entrega, un cargo por servicio, a veces un cargo por pedido pequeño, los impuestos y una propina para el repartidor.",
            "Los cargos cambian según la aplicación, la hora, la distancia y la ciudad, y algunas aplicaciones ofrecen membresías pagadas que bajan los cargos. Por eso, lee siempre la pantalla de pago y mira el total antes de tocar Hacer pedido.",
            "La propina es para el repartidor o el comprador. Tú eliges la cantidad, y muchas aplicaciones te dejan cambiarla después de la entrega. Si el total es más de lo que pensabas, quita un artículo o elige recoger el pedido en lugar de la entrega si la aplicación lo ofrece."
          ],
          steps: ["Abre tu carrito y ve a la pantalla de pago.", "Lee cada línea: artículos, cargo de entrega, cargo por servicio, impuestos, propina.", "Revisa la dirección de entrega y la forma de pago.", "Mira el total.", "Cambia el pedido o la propina si hace falta y luego toca Hacer pedido."],
          words: [["Cargo de entrega", "lo que se cobra por llevarte el pedido."], ["Cargo por servicio", "lo que agrega la aplicación por usar su servicio."], ["Propina", "dinero que eliges dar al repartidor o al comprador."]],
          slides: [
            { title: "El precio del menú no es el total", bullets: ["Total de los artículos", "Cargo de entrega y cargo por servicio", "Impuestos y propina"] },
            { title: "Los cargos cambian", bullets: ["Según la aplicación, la hora, la distancia y la ciudad", "Lee siempre la pantalla de pago"] },
            { title: "Antes de tocar Hacer pedido", bullets: ["Revisa la dirección y el pago", "Mira el total", "¿Es demasiado? Quita un artículo o elige recogerlo"] }
          ],
          tryIt: "Lleva el carrito de la lección anterior hasta la pantalla de pago. Anota el total de los artículos, cada cargo, la propina y el total final. Luego decide si haces el pedido o cierras la aplicación.",
          youCanNow: "leer la pantalla de pago de una entrega y saber el costo total antes de pagar.",
          quickCheck: [
            { objective: "O5", q: "¿Quién recibe la propina de un pedido a domicilio?", options: ["La empresa de la aplicación", "El repartidor o el comprador", "La ciudad", "El dueño del local del restaurante"], answer: 1, why: "La propina es para el repartidor o el comprador." },
            { objective: "O5", q: "Los platos del menú suman poco, pero el total es mucho más alto. ¿Qué harías antes de hacer el pedido?", options: ["Tocar Hacer pedido sin mirar", "Agregar más cosas para que valga la pena", "Leer cada línea de la pantalla de pago para ver los cargos, los impuestos y la propina", "Cerrar la aplicación y pagar con una tarjeta de regalo"], answer: 2, why: "La pantalla de pago muestra cada cargo, el impuesto y la propina que forman el total." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Recibos, problemas y seguridad",
          minutes: 4,
          goal: "Revisar un recibo, conseguir ayuda con un pedido equivocado y evitar estafas con las aplicaciones.",
          text: [
            "Después de un viaje o una entrega, la aplicación envía un recibo a tu correo y lo guarda en la aplicación en tus viajes o pedidos. Revisa que el cobro coincida con lo que aceptaste.",
            "Si algo está mal, como un artículo que falta, una comida fría o un cobro equivocado, usa la sección Ayuda o Soporte dentro de la aplicación y elige el pedido. Avisa de los problemas poco después de que pasen.",
            "Los estafadores se hacen pasar por el soporte de las aplicaciones. La ayuda real está dentro de la aplicación. No llames a un número de soporte de un anuncio de búsqueda, y nunca le des tu contraseña ni un código que llegó a tu teléfono a nadie que te llame o te escriba. Paga solo dentro de la aplicación, no en efectivo ni con tarjetas de regalo a alguien que te lo pida."
          ],
          steps: ["Abre tus viajes o pedidos en la aplicación.", "Revisa que el recibo coincida con lo que aceptaste.", "Si hay un problema, ve a Ayuda dentro de la aplicación y elige el pedido.", "Nunca le des una contraseña ni un código del teléfono a quien llama.", "Paga solo dentro de la aplicación."],
          words: [["Recibo", "un registro de lo que pagaste y por qué."], ["Soporte", "la sección de ayuda de la aplicación para los problemas."]],
          slides: [
            { title: "Revisa el recibo", bullets: ["En tu correo y en la aplicación", "¿Coincide con lo que aceptaste?"] },
            { title: "¿Algo está mal?", bullets: ["Ayuda o Soporte dentro de la aplicación", "Elige el pedido", "Avisa pronto"] },
            { title: "Evita las estafas de soporte", bullets: ["La ayuda real está dentro de la aplicación", "Nunca des una contraseña ni un código del teléfono", "Paga solo dentro de la aplicación"] }
          ],
          tryIt: "Práctica de la tarea final: abre la sección de viajes o pedidos de tu aplicación de viajes o de entregas y encuentra la zona de Ayuda. Luego haz la tarea final: mira el precio de un viaje y encuentra las herramientas de seguridad, y lee una pantalla de pago completa de una entrega.",
          youCanNow: "revisar un recibo, conseguir ayuda con un problema dentro de la aplicación y evitar las estafas de soporte falso.",
          quickCheck: [
            { objective: "O6", q: "¿Dónde puedes encontrar el recibo de una entrega?", options: ["En tu correo y en la aplicación, en tus pedidos", "Solo con el repartidor", "En un buscador", "En ningún lado; las aplicaciones no dan recibos"], answer: 0, why: "La aplicación envía el recibo por correo y lo guarda en tus viajes o pedidos." },
            { objective: "O6", q: "Tu comida nunca llegó y buscas en internet el número de soporte de la aplicación. Un anuncio muestra un número de teléfono. ¿Qué harías?", options: ["Llamar al número del anuncio", "Darle tu contraseña a quien te atiende", "Pagarle a un desconocido con tarjetas de regalo para un reembolso", "Saltarte el anuncio y usar la Ayuda dentro de la aplicación"], answer: 3, why: "La ayuda real está en la aplicación; los números de soporte de los anuncios de búsqueda pueden ser de estafadores." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Pedir comida y compras",
        questions: [
          { objective: "O4", q: "¿Por qué agregar a tu dirección una nota como \"puerta azul, toque el timbre\"?", options: ["Baja el precio", "Ayuda al repartidor a encontrarte", "Lo exige la ley", "Esconde tu dirección"], answer: 1, why: "Las notas claras ayudan al repartidor a llegar a la puerta correcta." },
          { objective: "O4", q: "¿Qué es una sustitución en un pedido del supermercado?", options: ["Un artículo parecido cuando el tuyo está agotado", "Un cupón", "Un cargo de entrega", "Una propina"], answer: 0, why: "Los compradores pueden cambiar un artículo agotado por uno parecido." },
          { objective: "O5", q: "¿Qué pantalla muestra el costo total de un pedido a domicilio?", options: ["El menú", "La pantalla de inicio", "La pantalla de pago", "La tienda de aplicaciones"], answer: 2, why: "La pantalla de pago muestra los artículos, cargos, impuestos, propina y total." },
          { objective: "O6", q: "Tu comida llega y falta un artículo. ¿Qué haces?", options: ["Llamas a un número de un anuncio de búsqueda", "Publicas tu contraseña", "Lo ignoras", "Usas Ayuda dentro de la aplicación y eliges el pedido"], answer: 3, why: "El soporte real está dentro de la aplicación." },
          { objective: "O6", q: "Alguien te escribe diciendo que es soporte de DoorDash y necesita el código que llegó a tu teléfono. ¿Qué haces?", options: ["No lo compartes; la ayuda real está en la aplicación", "Envías el código", "Envías tu contraseña", "Le pagas con una tarjeta de regalo"], answer: 0, why: "Nunca le des un código del teléfono a alguien que se comunica contigo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Pedir un viaje o comida con aplicaciones (Uber, Lyft, DoorDash)",
    questions: [
      { objective: "O1", q: "¿Qué hace una aplicación de viajes como Uber o Lyft?", options: ["Envía a un conductor en su propio auto a recogerte", "Vende autos", "Entrega el correo", "Solo alquila bicicletas"], answer: 0, why: "Las aplicaciones de viajes te conectan con un conductor." },
      { objective: "O1", q: "Al instalar una aplicación de viajes, revisa:", options: ["El color del ícono", "Que el desarrollador sea la empresa real", "El saldo de tu banco", "El clima"], answer: 1, why: "Las aplicaciones falsas copian nombres reales." },
      { objective: "O1", q: "Según los términos de Uber en EE. UU., los adolescentes de 13 a 17 años pueden viajar:", options: ["Con su propia cuenta de adulto", "Nunca", "Con una cuenta para adolescentes que configura un padre, madre o tutor", "Solo de noche"], answer: 2, why: "Los términos de Uber permiten cuentas para adolescentes de 13 a 17 años con un padre, madre o tutor." },
      { objective: "O1", q: "¿Dónde debes escribir los datos de tu tarjeta para una aplicación de viajes?", options: ["En un mensaje al conductor", "En un correo", "En las redes sociales", "Solo dentro de la aplicación"], answer: 3, why: "El pago se configura solo dentro de la aplicación." },
      { objective: "O2", q: "La casilla \"¿A dónde vas?\" es para:", options: ["Tu destino", "Tu contraseña", "Una propina", "Tu número de banco"], answer: 0, why: "Escribes adónde quieres ir." },
      { objective: "O2", q: "¿Por qué revisar el punto de recogida en el mapa?", options: ["Para cambiar el precio", "No hace falta", "Para elegir el color del auto", "Para que el conductor te encuentre"], answer: 3, why: "Un punto de recogida correcto evita viajes perdidos." },
      { objective: "O2", q: "Los precios de los viajes pueden ser más altos:", options: ["Nunca", "Solo en tu cumpleaños", "En horas de mucha demanda, como la hora pico", "Cuando usas Wi-Fi"], answer: 2, why: "La alta demanda puede subir los precios." },
      { objective: "O3", q: "¿Qué debes revisar antes de subir al auto?", options: ["La estación de radio", "El clima", "La placa, el auto y la foto del conductor", "La dirección de la casa del conductor"], answer: 2, why: "Estos datos deben coincidir con la aplicación." },
      { objective: "O3", q: "El PIN de viaje de Uber funciona así:", options: ["Le pagas al conductor", "Llama al 911", "Desbloquea tu teléfono", "Le dices un código al conductor para que el viaje pueda empezar"], answer: 3, why: "El viaje solo empieza con el PIN correcto." },
      { objective: "O3", q: "Compartir mi viaje (Share My Trip) te permite:", options: ["Dividir la tarifa con desconocidos", "Cambiar de conductor", "Que personas de confianza sigan tu viaje en vivo", "Conseguir un reembolso"], answer: 2, why: "Tus contactos de confianza pueden ver cómo va tu viaje." },
      { objective: "O3", q: "El botón de emergencia de la aplicación de Uber:", options: ["Califica al conductor", "Cancela el viaje gratis", "Llama a tu banco", "Se comunica con el 911 y muestra tu ubicación y los datos del auto"], answer: 3, why: "Te conecta con el 911 con los datos del viaje." },
      { objective: "O3", q: "Un auto que no reservaste te ofrece un viaje a la salida de un evento. Debes:", options: ["Subir; es más rápido", "Pagar en efectivo", "Decir que no; viaja solo en un auto reservado en la aplicación", "Compartir tu PIN"], answer: 2, why: "Solo los autos reservados y que coinciden son seguros." },
      { objective: "O4", q: "¿Qué aplicación es sobre todo para entregas del supermercado?", options: ["Lyft", "Una calculadora", "Una aplicación del clima", "Instacart"], answer: 3, why: "Instacart entrega compras del supermercado." },
      { objective: "O4", q: "Un \"carrito\" en una aplicación de entregas es:", options: ["Un auto", "Un recibo", "La lista de artículos que piensas comprar", "Un cargo"], answer: 2, why: "Tu carrito guarda los artículos antes de pagar." },
      { objective: "O5", q: "¿Qué suele ser un cargo extra en un pedido a domicilio?", options: ["Un cargo por servicio", "Un regalo gratis", "Tu calificación", "Tu dirección"], answer: 0, why: "Los cargos por servicio y de entrega se agregan al pagar." },
      { objective: "O5", q: "La propina de un pedido a domicilio es para:", options: ["La tienda de aplicaciones", "El gobierno", "El banco", "El repartidor o el comprador"], answer: 3, why: "Las propinas son para la persona que hace la entrega." },
      { objective: "O5", q: "El total al pagar es más de lo que pensabas. Un buen paso es:", options: ["Pagar de todos modos sin leer", "Darle tu tarjeta a un desconocido", "Quitar un artículo o elegir recogerlo si se ofrece", "Dejar una dirección falsa"], answer: 2, why: "Cambiar el pedido baja el total." },
      { objective: "O6", q: "¿Dónde puedes encontrar un recibo después de un viaje?", options: ["En tu correo y en la sección de viajes de la aplicación", "Solo con el conductor", "En ningún lugar", "En la tienda de aplicaciones"], answer: 0, why: "Las aplicaciones guardan los recibos y los envían por correo." },
      { objective: "O6", q: "¿Dónde está la ayuda real para un pedido equivocado?", options: ["En un número de teléfono de un anuncio de búsqueda", "En un comentario de redes sociales", "En el mensaje de un desconocido", "En Ayuda o Soporte dentro de la aplicación"], answer: 3, why: "El soporte real está dentro de la aplicación." },
      { objective: "O6", q: "Alguien dice que es del soporte de la aplicación y te pide tu contraseña. Tú:", options: ["Se la das", "Le das la mitad", "Nunca se la das", "Se la envías después"], answer: 2, why: "El soporte real nunca necesita tu contraseña." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      5,
      6,
      7,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Precio antes de reservar",
        objective: "O2",
        notYet: "El punto de recogida o el destino están mal, o no se leyeron el precio y la hora de llegada.",
        meets: "Se escriben un punto de recogida y un destino reales, y se leen el precio y la hora de llegada antes de reservar.",
        exceeds: "Además, compara dos opciones de viaje y dice por qué el precio puede subir en las horas de mucha demanda."
      },
      {
        name: "Herramientas de seguridad",
        objective: "O3",
        notYet: "No encuentra las herramientas de seguridad.",
        meets: "Encuentra Compartir mi viaje, el botón de emergencia y el PIN del viaje (o las herramientas de seguridad de su aplicación).",
        exceeds: "Además, explica las tres comprobaciones antes de subir al auto."
      },
      {
        name: "Pedido a domicilio",
        objective: "O4",
        notYet: "El carrito está vacío o la dirección de entrega está incompleta.",
        meets: "Un pedido pequeño en el carrito con una dirección de entrega completa.",
        exceeds: "Agrega una nota útil para el repartidor y una opción para los artículos agotados."
      },
      {
        name: "Leer la pantalla de pago",
        objective: "O5",
        notYet: "No puede decir cuáles son los cargos, la propina o el total.",
        meets: "Explica el total de los artículos, cada cargo, la propina, la dirección de entrega y el total.",
        exceeds: "Además, nombra una forma de bajar el total, como quitar un artículo o elegir recogerlo."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica de la tarea final",
      "Participantes que dicen haber llegado por su cuenta a una cita, al trabajo o a un mandado con una aplicación de viajes en los 30 días después del curso (encuesta de seguimiento)",
      "Participantes que dicen revisar el precio y los cargos antes de reservar y mantenerse dentro de su presupuesto",
      "Participantes que dicen haber rechazado una llamada o un mensaje de texto de falso soporte"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con la ubicación activada e internet",
      "Una aplicación de viajes (Uber o Lyft) y una de entregas (DoorDash, Uber Eats o Instacart) de la tienda oficial",
      "Un punto de recogida y un destino reales, como de la casa a una clínica o una biblioteca",
      "Unos 60 minutos en total, en sesiones cortas; no hace falta reservar ni pagar"
    ],
    facilitatorNotes: [
      "Diga que no toquen Confirmar ni Hacer pedido en clase a menos que de verdad necesiten el viaje o la comida; la tarea se detiene antes de reservar.",
      "Puede que necesiten una tarjeta para terminar de registrarse; deje que cada persona decida si la agrega, y nunca pida ver los datos de la tarjeta.",
      "Practiquen la pregunta \"¿A quién viene a buscar?\" como una dramatización, con dos personas en el papel de pasajero y conductor.",
      "Los precios y los cargos cambian según la ciudad y la hora del día, así que miren pantallas de pago reales en lugar de dar cifras.",
      "Para quienes no pueden usar una tarjeta o un teléfono inteligente, mencione los servicios locales de transporte para personas con discapacidad o los programas de viajes para personas mayores que conozca su organización."
    ]
  }
};
