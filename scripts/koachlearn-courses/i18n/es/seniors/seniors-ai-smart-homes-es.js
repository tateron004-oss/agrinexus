"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-ai-smart-homes.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-smart-homes-es",
  lang: "es",
  translationOf: "seniors-ai-smart-homes",
  category: "Seniors and Technology",
  name: "La IA y los hogares inteligentes",
  skills: "Entender los aparatos de un hogar inteligente, Dar órdenes de voz claras a un parlante inteligente, Configurar una rutina sencilla, Elegir aparatos para la seguridad y la comodidad, Proteger tu privacidad en casa",
  outcome: "usar un parlante inteligente o el asistente de voz de tu teléfono para dar órdenes claras en voz alta, planear o configurar una rutina diaria sencilla (como un recordatorio por la mañana y el pronóstico del tiempo) y proteger tu privacidad silenciando el micrófono y revisando los ajustes.",
  about: [
    "Un hogar inteligente es una casa con aparatos que puedes controlar con la voz o desde tu teléfono: parlantes que responden preguntas, luces que se encienden solas, enchufes que prenden y apagan lámparas, y timbres con cámara. Para las personas mayores, pueden hacer la vida diaria más fácil y más segura, sobre todo para quien vive solo.",
    "Aprenderás qué hacen los aparatos más comunes, cómo hablarle a un parlante inteligente como Amazon Echo (Alexa) o Google Nest (Google Assistant), cómo configurar una rutina sencilla y cómo mantener seguros tu casa y tu privacidad.",
    "No necesitas tener aparatos inteligentes para hacer este curso: puedes practicar las habilidades de voz con el asistente que ya tiene tu teléfono. Cada lección dura unos cinco minutos. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Planea una rutina diaria para tu casa, como “Buenos días”: el parlante o el teléfono te dice el tiempo, te recuerda tu medicina de la mañana y enciende una lámpara. Escríbela, configura todo lo que tus aparatos permitan y practícala con la voz. Luego busca y usa el botón o el ajuste para silenciar el micrófono.",
  chapters: [
    {
      name: "Capítulo 1: Conoce el hogar inteligente",
      lessons: [
        {
          title: "Qué hacen los aparatos de un hogar inteligente",
          minutes: 5,
          goal: "Nombrar los aparatos comunes de un hogar inteligente y lo que cada uno puede hacer por ti.",
          text: [
            "Los aparatos de un hogar inteligente se conectan al Wi-Fi de tu casa para que puedas controlarlos con la voz o con una aplicación en tu teléfono.",
            "Los más comunes: un parlante inteligente, como Amazon Echo con Alexa o Google Nest con Google Assistant, responde preguntas, pone música y radio, pone temporizadores y recordatorios, y hace llamadas. Un enchufe inteligente te deja prender y apagar una lámpara o un ventilador con la voz o a ciertas horas. Las bombillas inteligentes cambian de brillo. Un timbre con video te deja ver en tu teléfono quién está en la puerta antes de abrir.",
            "Para las personas mayores que viven solas, lo más útil suele ser un parlante para recordatorios y llamadas, luces inteligentes para no entrar nunca a una habitación oscura y un timbre con video para la seguridad."
          ],
          words: [["Aparato inteligente", "un aparato que se conecta a internet para que puedas controlarlo con la voz o con el teléfono."], ["Wi-Fi", "el internet inalámbrico de tu casa."], ["Enchufe inteligente", "un adaptador de enchufe que te deja prender y apagar una lámpara o un aparato con la voz o con una aplicación."]],
          slides: [
            { title: "Los aparatos inteligentes se conectan al Wi-Fi", bullets: ["Los controlas con la voz", "O con una aplicación en tu teléfono"] },
            { title: "Aparatos comunes", bullets: ["Parlante inteligente: preguntas, música, recordatorios, llamadas", "Enchufe y bombillas inteligentes: luces que prenden y apagan", "Timbre con video: ves quién está en la puerta"] },
            { title: "Lo más útil si vives solo", bullets: ["Recordatorios y llamadas con la voz", "Nunca más habitaciones oscuras", "Ves a las visitas antes de abrir"] }
          ],
          tryIt: "Recorre tu casa y anota dos tareas diarias que un aparato inteligente podría facilitar, como prender una lámpara difícil de alcanzar o ver quién está en la puerta.",
          youCanNow: "nombrar aparatos comunes de un hogar inteligente y cómo podrían ayudarte."
        },
        {
          title: "Hablarle a un parlante inteligente",
          minutes: 5,
          goal: "Dar órdenes claras en voz alta a un parlante inteligente o al asistente de tu teléfono.",
          text: [
            "Un parlante inteligente se activa con su palabra de activación: “Alexa” para Amazon Echo, o “Hey Google” para Google Nest. Una luz muestra que está escuchando. El asistente de voz de tu teléfono funciona igual con “Oye Siri” o “Hey Google”.",
            "Habla con claridad, a un ritmo normal, y di exactamente lo que quieres: “Alexa, ¿qué tiempo hace hoy?” “Hey Google, pon un temporizador de 15 minutos.” “Alexa, pon la estación de música clásica.” “Hey Google, llama a Margarita.”",
            "Si no entiende, dilo otra vez con palabras más sencillas. Los parlantes más nuevos usan IA para entender preguntas más naturales, pero las órdenes cortas y claras siguen funcionando mejor."
          ],
          steps: ["Di la palabra de activación: “Alexa” o “Hey Google”.", "Espera la luz.", "Di con claridad exactamente lo que quieres.", "Si no te entiende, prueba otra vez con palabras más sencillas."],
          words: [["Palabra de activación", "la palabra que le dice a un parlante inteligente que empiece a escuchar, como “Alexa”."], ["Orden", "una instrucción corta dicha en voz alta, como “pon un temporizador de 15 minutos”."]],
          slides: [
            { title: "Actívalo", bullets: ["“Alexa” para Amazon Echo", "“Hey Google” para Google Nest", "Una luz muestra que está escuchando"] },
            { title: "Órdenes claras", bullets: ["“¿Qué tiempo hace hoy?”", "“Pon un temporizador de 15 minutos.”", "“Llama a Margarita.”"] },
            { title: "¿No te entendió?", bullets: ["Dilo otra vez con palabras más sencillas", "Las órdenes cortas funcionan mejor"] }
          ],
          tryIt: "Con un parlante inteligente o el asistente de tu teléfono, da tres órdenes: pregunta el tiempo de hoy, pon un temporizador de 5 minutos y pide un recordatorio para mañana a las 9 de la mañana.",
          youCanNow: "dar órdenes claras en voz alta a un parlante inteligente o a un asistente de voz."
        },
        {
          title: "Configurar una rutina sencilla",
          minutes: 6,
          goal: "Planear una rutina que hace varias cosas con una sola frase.",
          text: [
            "Una rutina deja que una sola frase haga varias cosas. Por ejemplo, decir “Buenos días” podría prender una lámpara, decirte el tiempo y recordarte que tomes tu medicina.",
            "Las rutinas se configuran en la aplicación del aparato en el teléfono: la aplicación Alexa para Echo, o la aplicación Google Home para Nest. Busca una sección llamada Rutinas, toca para agregar una nueva, elige la frase que la inicia y luego agrega las acciones. Los menús cambian de vez en cuando, así que si no la encuentras, revisa las páginas de ayuda de la aplicación o pídele ayuda a un familiar.",
            "Empieza con una rutina sencilla. Puedes pedirle a un asistente de IA que te ayude a planearla: “Ayúdame a planear una rutina de la mañana para mi parlante inteligente. Quiero el tiempo, un recordatorio de mi medicina y que se prenda mi lámpara.”"
          ],
          steps: ["Planea en papel la frase y las acciones.", "Abre la aplicación Alexa o la aplicación Google Home.", "Busca Rutinas y agrega una nueva.", "Elige la frase de inicio.", "Agrega cada acción, guarda y pruébala con la voz."],
          words: [["Rutina", "una frase o una hora que hace que un aparato haga varias cosas seguidas."], ["Aplicación del aparato", "la aplicación del teléfono que configura y controla un aparato inteligente."]],
          slides: [
            { title: "Una frase, muchas acciones", bullets: ["“Buenos días” podría...", "Prender una lámpara", "Decirte el tiempo y recordarte la medicina"] },
            { title: "Dónde configurarla", bullets: ["Aplicación Alexa o aplicación Google Home", "Busca Rutinas y agrega una nueva", "Elige la frase, agrega acciones y guarda"] },
            { title: "Empieza sencillo", bullets: ["Planéala primero en papel", "Pídele a la IA que te ayude a planear", "Pide ayuda a tu familia si no encuentras un menú"] }
          ],
          tryIt: "Escribe una rutina de “Buenos días” o “Buenas noches” con una frase y dos o tres acciones. Pídele a un asistente de IA que revise tu plan y te sugiera una mejora.",
          youCanNow: "planear una rutina sencilla para tu hogar inteligente y saber dónde configurarla."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conoce el hogar inteligente",
        questions: [
          { q: "¿A qué se conectan los aparatos de un hogar inteligente?", options: ["Al buzón", "A las tuberías del agua", "Al Wi-Fi de tu casa", "Solo a un cargador de pilas"], answer: 2, why: "Usan el Wi-Fi para que puedas controlarlos." },
          { q: "¿Qué aparato te deja ver en tu teléfono quién está en la puerta?", options: ["Un timbre con video", "Un enchufe inteligente", "Una bombilla inteligente", "Una tostadora"], answer: 0, why: "Los timbres con video muestran a las visitas en tu teléfono." },
          { q: "¿Qué es una palabra de activación?", options: ["Una tarjeta de saludo de la mañana", "El sonido de un despertador", "Una contraseña", "Una palabra que hace que el parlante empiece a escuchar"], answer: 3, why: "“Alexa” o “Hey Google” activan el parlante." },
          { q: "El parlante no te entendió. ¿Qué debes probar?", options: ["Gritar", "Decirlo otra vez con palabras más sencillas", "Desenchufarlo para siempre", "Darle tu contraseña"], answer: 1, why: "Las órdenes cortas y claras funcionan mejor." },
          { q: "¿Dónde configuras una rutina para un parlante Google Nest?", options: ["En la Calculadora", "En la aplicación Google Home", "En el control remoto del televisor", "En la aplicación Cámara"], answer: 1, why: "La aplicación del aparato tiene las Rutinas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Seguridad, comodidad y privacidad",
      lessons: [
        {
          title: "Aparatos inteligentes para la seguridad",
          minutes: 5,
          goal: "Elegir funciones de un hogar inteligente que hagan más seguro vivir solo.",
          text: [
            "Los aparatos inteligentes pueden ayudarte a sentirte más seguro en casa. Las luces programadas o con sensor de movimiento hacen que nunca entres a una habitación oscura de noche, lo que puede ayudar a prevenir caídas. Un timbre con video te deja ver y hablar con las visitas sin abrir la puerta.",
            "Un parlante inteligente puede llamar a un familiar con la voz si no alcanzas tu teléfono. Algunos parlantes y servicios ofrecen funciones de emergencia, pero varían según el producto y el país, y no todos pueden llamar al 911. Revisa las páginas de ayuda del producto para saber exactamente qué puede y qué no puede hacer el tuyo. Los aparatos de alerta médica hechos para emergencias son otra opción para conversar con tu familia.",
            "Antes de comprar, haz una lista de los problemas que quieres resolver y pregúntale a un familiar o a un vendedor qué aparato te conviene. No necesitas todo."
          ],
          steps: ["Haz una lista de los problemas de seguridad que quieres resolver.", "Une cada uno con un aparato: luces, timbre o parlante.", "Revisa en las páginas de ayuda del producto qué puede y qué no puede hacer.", "Pregúntale a tu familia o a un vendedor antes de comprar."],
          words: [["Sensor de movimiento", "un aparato que nota el movimiento y puede prender una luz."], ["Aparato de alerta médica", "un botón que llevas puesto, hecho para pedir ayuda en una emergencia."]],
          slides: [
            { title: "Más seguro en casa", bullets: ["Las luces programadas o con sensor ayudan a prevenir caídas", "Timbre con video: ves primero a las visitas", "Llamas a tu familia con la voz"] },
            { title: "Conoce tu aparato", bullets: ["Las funciones de emergencia varían", "No todos pueden llamar al 911", "Revisa las páginas de ayuda del producto"] },
            { title: "Compra con un plan", bullets: ["Primero haz la lista de problemas", "Elige un aparato para cada uno", "No necesitas todo"] }
          ],
          tryIt: "Anota una preocupación de seguridad que tengas en casa, como los pasillos oscuros de noche, y el aparato inteligente que podría ayudar. Pregúntale a un asistente de IA qué preguntas hacer antes de comprarlo.",
          youCanNow: "elegir funciones de un hogar inteligente que se ajusten a tus necesidades de seguridad."
        },
        {
          title: "Proteger tu privacidad en casa",
          minutes: 5,
          goal: "Usar el botón para silenciar y los ajustes de privacidad de un aparato inteligente.",
          text: [
            "Los parlantes inteligentes están atentos a su palabra de activación. A veces pueden confundir otra palabra con ella y grabar un poco. Las cámaras graban video. Por eso es bueno saber cómo controlarlos.",
            "Todo parlante inteligente tiene un botón para silenciar el micrófono; cuando está silenciado, una luz (a menudo roja) muestra que no está escuchando. Úsalo durante las conversaciones privadas. Las cámaras suelen tener un modo de privacidad o una tapa. En la aplicación del aparato, busca los ajustes de Privacidad, donde por lo general puedes revisar y borrar las grabaciones de voz.",
            "Usa una contraseña segura para tu Wi-Fi y para las cuentas de los aparatos, y nunca compartas los códigos que te llegan por mensaje con nadie que te llame por tus aparatos."
          ],
          steps: ["Busca el botón para silenciar el micrófono en tu parlante.", "Apriétalo durante las conversaciones privadas; fíjate en la luz de color.", "Abre la aplicación del aparato y busca los ajustes de Privacidad.", "Revisa y borra las grabaciones de voz si quieres.", "Usa contraseñas seguras y nunca compartas los códigos que te llegan por mensaje."],
          words: [["Silenciar", "apagar un micrófono para que no pueda oír."], ["Ajustes de privacidad", "opciones en una aplicación sobre qué se graba, qué se guarda y qué se comparte."]],
          slides: [
            { title: "Parlantes y cámaras escuchan y ven", bullets: ["Los parlantes esperan la palabra de activación", "A veces pueden oír mal", "Las cámaras graban video"] },
            { title: "Toma el control", bullets: ["Botón para silenciar: la luz muestra que está apagado", "Modo de privacidad o tapa para la cámara", "Revisa y borra las grabaciones en la aplicación"] },
            { title: "Mantén seguras tus cuentas", bullets: ["Contraseñas seguras para el Wi-Fi y las cuentas", "Nunca compartas los códigos que te llegan por mensaje"] }
          ],
          tryIt: "Busca el botón o el ajuste para silenciar un parlante inteligente, o el ajuste del micrófono del asistente de tu teléfono. Apágalo y vuelve a encenderlo, y fíjate cómo sabes que está silenciado.",
          youCanNow: "silenciar un aparato inteligente y encontrar sus ajustes de privacidad."
        },
        {
          title: "Poner a trabajar tu hogar inteligente",
          minutes: 5,
          goal: "Planear y practicar una rutina diaria completa.",
          text: [
            "Ahora junta las piezas. Una buena primera rutina es sencilla, útil todos los días y fácil de decir.",
            "Ejemplo: “Buenos días” prende la lámpara del dormitorio, te dice el tiempo y lo que tienes en el calendario, y te recuerda tomar tu medicina de la mañana. “Buenas noches” apaga las lámparas y pone tu alarma.",
            "Practica tu rutina varias veces. Si algo no funciona, revisa una acción a la vez en la aplicación, o pídele a un familiar que la mire contigo. Deja una nota escrita con tus órdenes cerca del parlante hasta que se vuelvan costumbre."
          ],
          steps: ["Elige una frase que vayas a recordar.", "Escoge dos o tres acciones útiles.", "Configúrala en la aplicación, hasta donde tus aparatos lo permitan.", "Practícala con la voz varias veces.", "Deja una nota con tus órdenes cerca del parlante."],
          words: [["Costumbre", "algo que haces tan seguido que se vuelve automático."]],
          slides: [
            { title: "Una buena primera rutina", bullets: ["Sencilla", "Útil todos los días", "Fácil de decir"] },
            { title: "Ejemplo", bullets: ["“Buenos días”: lámpara prendida, el tiempo, el calendario, recordatorio de la medicina", "“Buenas noches”: lámparas apagadas, alarma puesta"] },
            { title: "Que se quede", bullets: ["Practícala varias veces", "Arregla una acción a la vez", "Deja una nota cerca del parlante"] }
          ],
          tryIt: "Tarea final: escribe tu rutina de “Buenos días”, configura todo lo que tus aparatos permitan y practícala con la voz. Luego busca y usa el botón o el ajuste para silenciar el micrófono.",
          youCanNow: "usar órdenes de voz y una rutina sencilla para que tu casa sea más fácil y más segura, mientras proteges tu privacidad."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Seguridad, comodidad y privacidad",
        questions: [
          { q: "¿Cómo pueden ayudar las luces inteligentes a prevenir caídas?", options: ["Cierran las puertas con llave", "Son más pesadas", "Llaman al médico", "Se prenden para que no entres a habitaciones oscuras"], answer: 3, why: "Las habitaciones iluminadas de noche ayudan a prevenir caídas." },
          { q: "¿Todos los parlantes inteligentes pueden llamar al 911?", options: ["No; revisa qué puede y qué no puede hacer tu producto", "Sí, todos", "Solo los rojos", "Solo los fines de semana"], answer: 0, why: "Las funciones de emergencia varían según el producto y el país." },
          { q: "La luz del parlante se pone roja después de apretar el botón para silenciar. Esto significa que:", options: ["Está llamando al 911", "Está roto", "El micrófono está apagado", "Está grabando más"], answer: 2, why: "La luz de color muestra que está silenciado." },
          { q: "¿Dónde puedes revisar y borrar por lo general las grabaciones de voz?", options: ["En un anuncio emergente", "En el microondas", "En la guía de televisión", "En los ajustes de privacidad de la aplicación del aparato"], answer: 3, why: "Los ajustes de privacidad de la aplicación manejan las grabaciones." },
          { q: "Alguien llama, dice que es de la empresa del parlante y te pide el código que te llegó por mensaje. Tú:", options: ["Se lo envías por mensaje", "Se lo lees", "No lo compartes nunca y cuelgas", "Lo publicas en internet"], answer: 2, why: "Los códigos que llegan por mensaje protegen tu cuenta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: La IA y los hogares inteligentes",
    questions: [
      { q: "Un aparato inteligente es:", options: ["Cualquier lámpara vieja", "Un aparato que puedes controlar con la voz o el teléfono por internet", "Un calendario de papel", "Un teléfono fijo"], answer: 1, why: "Los aparatos inteligentes se conectan a internet." },
      { q: "¿Qué asistente de voz usa Amazon Echo?", options: ["Alexa", "Siri", "Cortana", "Bixby"], answer: 0, why: "Los parlantes Echo usan Alexa." },
      { q: "Un enchufe inteligente te deja:", options: ["Prender y apagar una lámpara con la voz o a ciertas horas", "Cargar un auto", "Hacer llamadas", "Cerrar puertas con llave"], answer: 0, why: "Prende y apaga lo que esté enchufado en él." },
      { q: "¿Qué palabras activan un parlante Google Nest?", options: ["“Hola teléfono”", "“Hey Google”", "“Computadora”", "“Empieza”"], answer: 1, why: "“Hey Google” es su palabra de activación." },
      { q: "¿Cuál es una orden clara?", options: ["“Cosas de temporizador.”", "“Eh, ¿tal vez, la cosa esa?”", "“Pon un temporizador de 15 minutos.”", "“Tú sabes.”"], answer: 2, why: "Las órdenes claras dicen exactamente lo que quieres." },
      { q: "Una luz en el parlante por lo general muestra que:", options: ["Está apagado para siempre", "Está roto", "Necesita pintura", "Está escuchando"], answer: 3, why: "La luz muestra que oyó la palabra de activación." },
      { q: "Una rutina es:", options: ["Una contraseña", "Un tipo de enchufe", "Una frase que hace que un aparato haga varias cosas", "Un programa de televisión"], answer: 2, why: "Las rutinas combinan acciones." },
      { q: "Las rutinas de Amazon Echo se configuran en:", options: ["La aplicación Alexa", "La Calculadora", "La Cámara", "El televisor"], answer: 0, why: "La aplicación Alexa maneja las rutinas de Echo." },
      { q: "Una buena forma de planear una rutina antes de configurarla:", options: ["No planear", "Adivinar", "Comprar muchos aparatos primero", "Escribirla en papel o pedirle a la IA que revise tu plan"], answer: 3, why: "Planear facilita la configuración." },
      { q: "Si no encuentras un menú en la aplicación, puedes:", options: ["Rendirte", "Revisar las páginas de ayuda de la aplicación o preguntarle a tu familia", "Darle tu contraseña a un desconocido", "Borrar tu Wi-Fi"], answer: 1, why: "Los menús cambian; las páginas de ayuda y tu familia pueden guiarte." },
      { q: "Un timbre con video te ayuda a:", options: ["Cocinar la cena", "Ver a las visitas antes de abrir la puerta", "Lavar la ropa", "Pagar cuentas"], answer: 1, why: "Muestra quién está en la puerta." },
      { q: "Una luz con sensor de movimiento:", options: ["Cierra la puerta con llave", "Pone música", "Llama a tu familia", "Se prende cuando nota movimiento"], answer: 3, why: "Reacciona al movimiento." },
      { q: "Antes de comprar un aparato inteligente, debes:", options: ["Hacer una lista de los problemas que quieres resolver", "Comprar de todo", "Compartir tus contraseñas", "No hacer caso a las opiniones ni a las páginas de ayuda"], answer: 0, why: "Una lista te ayuda a comprar solo lo que necesitas." },
      { q: "Un aparato de alerta médica es:", options: ["Un parlante de música", "Una bombilla inteligente", "Un botón que llevas puesto, hecho para pedir ayuda", "Un control remoto"], answer: 2, why: "Está hecho para emergencias." },
      { q: "Durante una conversación privada, puedes:", options: ["Abrir la cámara", "Subir el volumen", "Decir la palabra de activación", "Apretar el botón para silenciar el parlante"], answer: 3, why: "Silenciar detiene el micrófono." },
      { q: "Los ajustes de privacidad te dejan:", options: ["Pedir comida", "Cambiar el clima", "Revisar y borrar grabaciones", "Acelerar el Wi-Fi"], answer: 2, why: "Controlan lo que se guarda." },
      { q: "La privacidad de una cámara se puede proteger con:", options: ["Una luz encima", "El modo de privacidad o una tapa", "Acercarla más", "Subir el volumen"], answer: 1, why: "El modo de privacidad o una tapa detienen la grabación." },
      { q: "Las contraseñas seguras se deben usar para:", options: ["Tu Wi-Fi y las cuentas de los aparatos", "Nada", "Solo el correo", "Solo tu televisor"], answer: 0, why: "Mantienen a otros fuera de tus aparatos." },
      { q: "Una buena primera rutina es:", options: ["Sencilla, útil cada día y fácil de decir", "Larga y complicada", "Para usar una vez al año", "Difícil de recordar"], answer: 0, why: "Las rutinas sencillas se vuelven costumbre." },
      { q: "Dejar una nota con tus órdenes cerca del parlante te ayuda a:", options: ["Esconderlas", "Recordarlas hasta que se vuelvan costumbre", "Compartir contraseñas", "Silenciar el parlante"], answer: 1, why: "Una nota es un recordatorio práctico." }
    ]
  }
};
