"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-ai-digital-empowerment.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-digital-empowerment-es",
  lang: "es",
  translationOf: "underserved-ai-digital-empowerment",
  category: "Undeserved Community",
  name: "Introducción a la IA y el empoderamiento digital",
  skills: "Conectarte a internet gratis o a bajo costo, Abrir un asistente de IA gratuito, Pedir ayuda con palabras sencillas, Convertir una carta difícil en una lista de pendientes, Revisar respuestas y proteger tu información",
  outcome: "conectarte a internet en una biblioteca, un centro comunitario o en tu teléfono, y usar un asistente de IA gratuito para convertir una carta o un aviso confuso en palabras sencillas y una lista corta de pendientes, sin compartir información privada.",
  about: [
    "Este curso es para cualquier persona que sienta que la tecnología la dejó atrás, o a quien le han dicho que las computadoras y la IA \"no son para gente como nosotros\". Sí son para ti, y muchas de las mejores herramientas son gratis.",
    "Vas a encontrar formas gratuitas o baratas de conectarte a internet, abrir un asistente de IA gratuito y usarlo para tareas reales de la familia: leer una carta difícil, planear una semana ocupada o escribir un mensaje a una escuela o al dueño de tu vivienda.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y haz la tarea de \"Pruébalo ahora\". Una comprobación de conocimientos corta cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Toma una carta o aviso real que hayas recibido (de una escuela, una clínica, el dueño de tu vivienda o la compañía de luz, agua o gas). Tapa o quita todos los números y nombres privados. Pide a un asistente de IA gratuito que te lo explique con palabras sencillas y que haga una lista corta de pendientes con fechas. Luego revisa una fecha o un número de teléfono en el sitio web oficial o llamando a la oficina.",
  chapters: [
    {
      name: "Capítulo 1: Conectarte",
      lessons: [
        {
          title: "Formas gratis o baratas de conectarte a internet",
          minutes: 5,
          goal: "Nombrar dos lugares cerca de ti donde puedes usar internet gratis y un programa que puede bajar tu cuenta de teléfono o internet.",
          text: [
            "No necesitas tener una computadora para usar la tecnología. Las bibliotecas públicas tienen computadoras y Wi-Fi gratis, y muchas también prestan laptops o puntos de acceso (hotspots). Los centros comunitarios, los centros de empleo y algunas iglesias también tienen computadoras que puedes usar.",
            "Lifeline es un programa federal de Estados Unidos que baja el costo mensual del servicio de teléfono o internet para personas de bajos ingresos o que participan en programas como SNAP (ayuda para alimentos) o Medicaid (seguro médico público). Haces la solicitud en línea y luego eliges una compañía de teléfono o internet que participe.",
            "El personal de la biblioteca te puede ayudar a empezar. Pedir ayuda es normal; ayudar a la gente con las computadoras es parte de su trabajo."
          ],
          steps: ["Busca la biblioteca pública más cercana y su horario.", "Pregunta si presta laptops o puntos de acceso y si da clases gratis de computación.", "Si el dinero no alcanza, lee sobre Lifeline en el sitio oficial y ve si calificas.", "Anota el lugar y la hora en que te vas a conectar esta semana."],
          words: [["Wi-Fi", "una forma de conectarte a internet sin cable."], ["Punto de acceso (hotspot)", "un aparato pequeño (o una función del teléfono) que comparte una conexión a internet con otros aparatos."], ["Lifeline", "un programa federal que da un descuento mensual en el servicio de teléfono o internet a quienes califican."]],
          sources: [{ name: "Lifeline Support (USAC, el sitio oficial de Lifeline)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Puedes conectarte sin tener computadora", bullets: ["Bibliotecas públicas: computadoras y Wi-Fi gratis", "Centros comunitarios y centros de empleo", "Algunas bibliotecas prestan laptops y puntos de acceso"] },
            { title: "Baja tu cuenta de teléfono o internet", bullets: ["Lifeline da un descuento mensual a quienes califican", "Puedes calificar por ingresos, SNAP o Medicaid", "Haz la solicitud en el sitio oficial de Lifeline"] },
            { title: "Pide ayuda", bullets: ["El personal de la biblioteca ayuda con computadoras todos los días", "Pregunta por clases gratis de computación", "Pedir ayuda es inteligente, no una debilidad"] }
          ],
          tryIt: "Anota dos lugares cerca de ti donde puedes usar internet gratis, con su horario. Si te cuesta pagar tu cuenta de teléfono o internet, abre lifelinesupport.org y lee quién califica.",
          youCanNow: "nombrar lugares gratuitos para conectarte y saber dónde informarte sobre Lifeline."
        },
        {
          title: "Qué es la IA, en palabras de todos los días",
          minutes: 4,
          goal: "Explicar qué es un asistente de IA y nombrar tres formas en que podría ayudar a tu familia.",
          text: [
            "IA quiere decir inteligencia artificial. Un asistente de IA es un programa al que le puedes escribir, o hablar, con tus propias palabras. Te responde por escrito en segundos. Algunos gratuitos son ChatGPT, Microsoft Copilot y Google Gemini.",
            "Puede explicar una carta difícil, escribir un mensaje corto, planear comidas con poco dinero, ayudar a un niño a entender la tarea o traducir entre idiomas.",
            "Es un ayudante, no un jefe. No conoce tu vida y a veces se equivoca en los datos. Tú decides qué preguntar y qué usar."
          ],
          words: [["IA", "inteligencia artificial: programas de computadora que hacen tareas como escribir y responder preguntas."], ["Asistente de IA", "un programa de IA con el que conversas escribiendo o hablando."]],
          slides: [
            { title: "Un asistente de IA es un ayudante", bullets: ["Escribes o hablas con tus propias palabras", "Te responde en segundos", "Gratuitos: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Formas en que puede ayudar a tu familia", bullets: ["Explicar una carta difícil", "Planear comidas con poco dinero", "Ayudar con preguntas de la tarea", "Traducir un mensaje"] },
            { title: "Tú mandas", bullets: ["No conoce tu vida", "Se puede equivocar en los datos", "Tú decides qué preguntar y qué usar"] }
          ],
          tryIt: "Anota tres tareas de tu propia semana en las que un asistente de IA podría ayudarte a ti, a tu familia o a tu grupo comunitario.",
          youCanNow: "decir qué es un asistente de IA y nombrar tres formas en que podría ayudarte."
        },
        {
          title: "Abrir un asistente de IA gratuito y hacer tu primera pregunta",
          minutes: 5,
          goal: "Abrir un asistente de IA gratuito y hacerle una pregunta clara sobre una tarea real.",
          text: [
            "En una computadora de la biblioteca o del centro comunitario, abre el navegador web y entra a copilot.microsoft.com, chatgpt.com o gemini.google.com. En un teléfono, instala la aplicación oficial desde la tienda de aplicaciones.",
            "Busca el cuadro donde se escribe. Haz tu pregunta como se la harías a un vecino que te quiere ayudar: di lo que necesitas, un poco de tu situación y cómo quieres la respuesta.",
            "Por ejemplo: \"Tengo $60 para la comida de esta semana para una familia de cuatro. Dame cinco ideas de cenas baratas con una lista de compras. Usa palabras sencillas.\""
          ],
          steps: ["Abre el navegador o la aplicación oficial.", "Busca el cuadro de mensaje.", "Escribe lo que necesitas, tu situación (sin datos privados) y cómo quieres la respuesta.", "Presiona Enter o toca la flecha de enviar y lee la respuesta."],
          words: [["Navegador", "el programa que usas para visitar sitios web, como Chrome, Edge o Safari."], ["Instrucción (prompt)", "la pregunta o petición que le escribes a un asistente de IA."]],
          slides: [
            { title: "Ábrelo", bullets: ["Computadora: copilot.microsoft.com, chatgpt.com o gemini.google.com", "Teléfono: la aplicación oficial de la tienda de aplicaciones"] },
            { title: "Pregunta como le preguntas a un vecino", bullets: ["Lo que necesitas", "Un poco de tu situación", "Cómo quieres la respuesta"] },
            { title: "Ejemplo", bullets: ["\"Tengo $60 para la comida de una familia de cuatro.", "Dame cinco cenas baratas y una lista de compras.", "Usa palabras sencillas.\""] }
          ],
          tryIt: "Abre un asistente de IA gratuito. Pídele ayuda con una tarea de tu lista de la lección 2, usando las tres partes de una buena pregunta. Lee la respuesta.",
          youCanNow: "abrir un asistente de IA gratuito y hacer una pregunta clara que te dé una respuesta útil."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conectarte",
        questions: [
          { q: "No tienes computadora. ¿Dónde puedes usar una gratis por lo general?", options: ["En una biblioteca pública", "En una agencia de autos", "En la bóveda de un banco", "En una gasolinera"], answer: 0, why: "Las bibliotecas públicas ofrecen computadoras y Wi-Fi gratis." },
          { q: "¿Qué hace Lifeline?", options: ["Te da un auto gratis", "Baja el costo mensual del servicio de teléfono o internet para quienes califican", "Paga tu renta", "Te da una computadora nueva cada año"], answer: 1, why: "Lifeline es un descuento federal en el servicio de teléfono o internet." },
          { q: "¿Cuál es un asistente de IA gratuito?", options: ["Una aplicación de calculadora", "Una impresora", "Microsoft Copilot", "Un mensaje de texto"], answer: 2, why: "Copilot, ChatGPT y Gemini son asistentes de IA gratuitos muy conocidos." },
          { q: "¿Quién decide qué hacer con la respuesta de un asistente de IA?", options: ["La IA", "La tienda de aplicaciones", "La biblioteca", "Tú"], answer: 3, why: "La IA es un ayudante; tú sigues al mando." },
          { q: "¿Qué pregunta te dará la respuesta más útil?", options: ["\"comida\"", "\"Tengo $60 para la comida de cuatro personas. Dame cinco cenas baratas y una lista con palabras sencillas.\"", "\"ayuda\"", "\"dime cosas\""], answer: 1, why: "Dice lo que necesitas, tu situación y cómo quieres la respuesta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la IA en la vida real, con seguridad",
      lessons: [
        {
          title: "Convertir una carta difícil en palabras sencillas",
          minutes: 5,
          goal: "Usar un asistente de IA para explicar una carta confusa y hacer una lista de pendientes.",
          text: [
            "Las cartas de escuelas, clínicas, dueños de vivienda y agencias pueden estar llenas de palabras difíciles. Un asistente de IA las puede poner en palabras sencillas y sacar lo que tienes que hacer y para cuándo.",
            "Primero, quita los datos privados. Escribe o pega solo las palabras que explican de qué trata la carta, y cambia los nombres y números por marcadores como [mi nombre] o [número de cuenta].",
            "Luego pregunta: \"Explica esta carta con palabras sencillas. ¿Qué tengo que hacer y para qué fecha? Haz una lista corta de pendientes.\""
          ],
          steps: ["Lee la carta una vez y encierra en un círculo las partes que no entiendes.", "Copia o escribe esas partes, cambiando nombres y números por marcadores.", "Pide a la IA que lo explique con palabras sencillas y haga una lista de pendientes con fechas.", "Haz otra pregunta si algo sigue sin quedar claro, como \"¿Qué significa 'recertificación'?\""],
          words: [["Marcador", "algo como [mi nombre] que escribes en lugar de los datos privados reales."], ["Pregunta de seguimiento", "una segunda pregunta que parte de la primera respuesta."]],
          slides: [
            { title: "Cartas difíciles, palabras sencillas", bullets: ["Cartas de escuela, clínica, vivienda o agencias", "La IA puede explicar palabras difíciles", "Puede decir qué hacer y para cuándo"] },
            { title: "Primero quita los datos privados", bullets: ["Cambia los nombres por [mi nombre]", "Cambia los números por [número de cuenta]", "Deja solo las palabras que explican la carta"] },
            { title: "Qué preguntar", bullets: ["\"Explica esto con palabras sencillas.\"", "\"¿Qué tengo que hacer y para cuándo?\"", "\"Haz una lista corta de pendientes.\""] }
          ],
          tryIt: "Elige una carta o aviso que tengas (o un ejemplo del sitio web de una escuela). Quita los datos privados y pide a un asistente de IA que lo explique y haga una lista de pendientes.",
          youCanNow: "convertir una carta confusa en palabras sencillas y una lista de pendientes, sin tus datos privados."
        },
        {
          title: "Revisar lo que te dice la IA",
          minutes: 4,
          goal: "Revisar una fecha, un número de teléfono o una regla de una respuesta de la IA con la fuente oficial.",
          text: [
            "Los asistentes de IA se pueden equivocar. Pueden dar un número de teléfono viejo, la fecha límite equivocada o una regla de otro estado.",
            "Antes de actuar sobre cualquier cosa de dinero, beneficios, salud, escuela, vivienda o leyes, revísala. Mira la carta misma, el sitio web oficial (en Estados Unidos los sitios del gobierno suelen terminar en .gov) o llama a la oficina.",
            "Si no encuentras la respuesta, llama al 211. Es una línea gratuita y confidencial que te conecta con ayuda local para comida, vivienda, servicios de luz y agua, y más."
          ],
          steps: ["Encierra en un círculo cada fecha, número y regla de la respuesta de la IA.", "Compara cada uno con la carta original.", "Revisa el sitio web oficial o llama a la oficina.", "Si no sabes qué hacer, llama al 211 o pregunta a un bibliotecario."],
          words: [[".gov", "la terminación de las direcciones de sitios web oficiales del gobierno de Estados Unidos."], ["211", "una línea telefónica gratuita y confidencial que conecta a las personas con ayuda local."]],
          sources: [{ name: "211.org: Acerca de 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "La IA se puede equivocar", bullets: ["Números de teléfono viejos", "Fechas límite equivocadas", "Reglas de otro estado"] },
            { title: "Revisa siempre esto", bullets: ["Dinero y beneficios", "Salud y escuela", "Vivienda y leyes"] },
            { title: "Dónde revisar", bullets: ["La carta original", "El sitio web oficial, que suele terminar en .gov", "Llama a la oficina, o al 211 para ayuda local"] }
          ],
          tryIt: "Toma la lista de pendientes de la lección 4. Revisa una fecha o un número de teléfono con la carta original o con el sitio web oficial.",
          youCanNow: "revisar una respuesta de la IA con la fuente oficial antes de actuar."
        },
        {
          title: "Proteger tu información y a tu familia",
          minutes: 5,
          goal: "Mantener la información privada fuera de las herramientas de IA y reconocer un mensaje de estafa.",
          text: [
            "Nunca escribas esto en un asistente de IA: números de Seguro Social, números de caso o de beneficios, números de banco o de tarjeta, contraseñas, ni los nombres completos de tus hijos junto con su escuela.",
            "Los estafadores buscan a familias que están pasando por momentos difíciles. Cuidado con mensajes que prometen dinero gratis o ayudas del gobierno, que dicen que tus beneficios se van a cortar si no actúas ya, o que te piden pagar con tarjetas de regalo.",
            "Las agencias de verdad no piden pagos con tarjetas de regalo. Si un mensaje te preocupa, no abras sus enlaces. Entra tú al sitio web oficial o llama a un número que ya conoces."
          ],
          steps: ["Lee cada instrucción antes de enviarla y quita los datos privados.", "Desconfía de los mensajes que te apuran o prometen dinero gratis.", "Nunca pagues con tarjetas de regalo porque un mensaje te lo pidió.", "Comunícate con la agencia con un número o sitio web que encontraste tú."],
          words: [["Estafa", "un engaño para robar dinero o información."], ["Phishing (suplantación)", "un mensaje falso que intenta que abras un enlace o compartas datos privados."]],
          slides: [
            { title: "Nunca escribas en la IA", bullets: ["Números de Seguro Social, de caso o de beneficios", "Números de banco o tarjeta, contraseñas", "Los nombres completos de tus hijos y su escuela"] },
            { title: "Señales de estafa", bullets: ["Promesas de dinero gratis o ayudas", "\"Tus beneficios se cortan hoy\"", "Pagar con tarjetas de regalo"] },
            { title: "Cuídate", bullets: ["No abras enlaces de mensajes que te preocupan", "Entra tú al sitio oficial", "Llama a un número que sabes que es real"] }
          ],
          tryIt: "Tarea final: toma una carta o aviso real, quita todos los datos privados, pide a un asistente de IA que lo explique y haga una lista de pendientes con fechas, y luego revisa una fecha o un número de teléfono con la fuente oficial.",
          youCanNow: "usar la IA en una tarea real de la familia mientras proteges tu información y reconoces estafas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la IA en la vida real, con seguridad",
        questions: [
          { q: "Antes de pegar una carta en un asistente de IA, ¿qué debes hacer?", options: ["Agregar tu número de Seguro Social", "Cambiar nombres y números por marcadores", "Agregar tus datos de banco para que ayude más", "Nada"], answer: 1, why: "Los marcadores te dejan recibir ayuda sin compartir datos privados." },
          { q: "La IA dice que tu fecha límite es el 5 de junio, pero la carta dice el 1 de junio. ¿En qué confías?", options: ["En la IA", "En ninguna", "En la fecha más tardía", "En la carta o en la oficina oficial"], answer: 3, why: "La fuente oficial gana cuando la IA no coincide con ella." },
          { q: "¿Qué es el 211?", options: ["Una línea gratuita y confidencial que te conecta con ayuda local", "Un banco", "Una aplicación de IA", "Un número de estafa"], answer: 0, why: "El 211 conecta a las personas con ayuda local para comida, vivienda y más." },
          { q: "Un mensaje de texto dice que tus beneficios se cortan hoy si no pagas con tarjetas de regalo. Esto es:", options: ["Un aviso normal", "Una regla nueva", "Una señal de estafa", "Un mensaje de la escuela"], answer: 2, why: "Apurarte y pedir tarjetas de regalo son señales de estafa." },
          { q: "Un mensaje te preocupa. ¿Cuál es la forma más segura de revisarlo?", options: ["Abrir su enlace", "Responder con tus datos", "Reenviarlo a tus amigos", "Entrar tú al sitio web oficial o llamar a un número que conoces"], answer: 3, why: "Comunicarte tú con la agencia evita los enlaces falsos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la IA y el empoderamiento digital",
    questions: [
      { q: "¿Dónde puedes pedir prestada una laptop o un punto de acceso muchas veces?", options: ["En algunas bibliotecas públicas", "En cualquier tienda de abarrotes", "En un apartado postal", "En un estacionamiento"], answer: 0, why: "Muchas bibliotecas prestan laptops y puntos de acceso." },
      { q: "Lifeline ayuda con:", options: ["Reparaciones del auto", "El costo mensual del servicio de teléfono o internet", "La renta", "La comida"], answer: 1, why: "Lifeline es un descuento en el servicio de teléfono o internet." },
      { q: "¿Dónde debes leer sobre Lifeline?", options: ["En un anuncio de redes sociales", "En un mensaje de un desconocido", "En el sitio oficial de Lifeline", "En una ventana emergente"], answer: 2, why: "Los sitios oficiales tienen las reglas y la solicitud reales." },
      { q: "Un asistente de IA es:", options: ["Una persona de la biblioteca", "Una oficina del gobierno", "Una compañía de teléfonos", "Un programa con el que conversas con tus propias palabras"], answer: 3, why: "Es un programa de computadora al que le escribes o hablas." },
      { q: "¿Con qué te puede ayudar un asistente de IA?", options: ["Planear comidas con poco dinero", "Firmar tu contrato de renta", "Ir a tu cita", "Pagar tus cuentas desde tu cuenta bancaria"], answer: 0, why: "Es bueno para planes, listas y explicaciones." },
      { q: "La IA a veces se equivoca en los datos. Eso significa que debes:", options: ["No usarla nunca", "Revisar los datos importantes", "Confiar más en ella", "Pagar por una mejor"], answer: 1, why: "Es útil, pero los datos importantes se deben revisar." },
      { q: "En una computadora de la biblioteca, ¿cómo abres Copilot?", options: ["Llamas a la biblioteca", "Apagas y prendes la computadora", "Escribes copilot.microsoft.com en el navegador", "Envías un correo"], answer: 2, why: "La dirección web abre Copilot en el navegador." },
      { q: "Una buena pregunta a la IA incluye:", options: ["Tu contraseña", "Solo una palabra", "Tu número de banco", "Lo que necesitas, tu situación y cómo quieres la respuesta"], answer: 3, why: "Esas tres partes dan una respuesta útil." },
      { q: "¿Dónde instalas una aplicación de IA en el teléfono?", options: ["En la tienda de aplicaciones oficial", "Desde un enlace en un mensaje de un desconocido", "Desde un anuncio emergente", "Desde cualquier sitio web"], answer: 0, why: "La tienda de aplicaciones oficial es el lugar seguro." },
      { q: "¿Qué es un marcador?", options: ["Un tipo de aplicación", "Algo como [mi nombre] en lugar de los datos reales", "Una contraseña", "Un sitio web"], answer: 1, why: "Mantiene los datos privados fuera de tu instrucción." },
      { q: "Quieres ayuda con una carta de la escuela. ¿Cuál es una buena petición?", options: ["\"carta\"", "\"Este es el nombre completo y el número de identificación de mi hijo\"", "\"Explica esto con palabras sencillas y dime qué tengo que hacer y para cuándo.\"", "\"escuela\""], answer: 2, why: "Pide palabras sencillas y una lista de pendientes, sin datos privados." },
      { q: "La IA usa una palabra difícil que no conoces. Puedes:", options: ["Rendirte", "Hacer como que la sabes", "Cerrar el navegador", "Hacer otra pregunta: \"¿Qué significa esa palabra?\""], answer: 3, why: "Las preguntas de seguimiento aclaran las partes confusas." },
      { q: "¿Qué debes revisar siempre antes de actuar?", options: ["Una fecha límite de beneficios", "Una idea para la cena", "Un chiste", "Una lista de colores"], answer: 0, why: "Las fechas límite, el dinero y los beneficios se revisan con la fuente oficial." },
      { q: "Los sitios web del gobierno de Estados Unidos suelen terminar en:", options: [".win", ".gov", ".gift", ".shop"], answer: 1, why: "Los sitios oficiales del gobierno de Estados Unidos usan .gov." },
      { q: "No encuentras ayuda local con tu cuenta de luz. ¿A quién puedes llamar?", options: ["A un número de un anuncio emergente", "A nadie", "Al 211", "A un número cualquiera de internet"], answer: 2, why: "El 211 te conecta con ayuda local para cuentas, comida y vivienda." },
      { q: "¿Qué nunca debes escribir en un asistente de IA?", options: ["\"Usa palabras sencillas\"", "\"Haz una lista\"", "Una idea para la cena", "El número de tu tarjeta bancaria"], answer: 3, why: "Los números de banco y de tarjeta son privados." },
      { q: "Un mensaje promete una ayuda gratis del gobierno si primero pagas una cuota. Probablemente es:", options: ["Una estafa", "Un programa normal", "Un aviso de la escuela", "Un reembolso de impuestos"], answer: 0, why: "Pagar para recibir dinero \"gratis\" es una estafa común." },
      { q: "Las agencias de verdad piden pagos con:", options: ["Tarjetas de regalo", "Nunca con tarjetas de regalo", "Tarjetas de regalo solo los fines de semana", "Efectivo por mensaje de texto"], answer: 1, why: "Pagar con tarjetas de regalo es señal de estafa." },
      { q: "Un mensaje dice \"Haz clic aquí ya o pierdes tus beneficios.\" ¿Qué haces?", options: ["Haces clic rápido", "Respondes con tu número de caso", "No haces clic; entras al sitio oficial o llamas a un número conocido", "Lo compartes con tus vecinos"], answer: 2, why: "Comunícate tú con la agencia en lugar de usar el enlace del mensaje." },
      { q: "En la tarea final, después de que la IA hace tu lista de pendientes, tú:", options: ["Borras la carta", "La publicas en internet", "Agregas tus datos de banco", "Revisas una fecha o un número de teléfono con la fuente oficial"], answer: 3, why: "Revisar con la fuente oficial es el último paso." }
    ]
  }
};
