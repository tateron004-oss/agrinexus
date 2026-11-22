"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-ai-daily-life.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-daily-life-es",
  lang: "es",
  translationOf: "seniors-ai-daily-life",
  category: "Seniors and Technology",
  name: "IA para la vida diaria",
  skills: "Hacer una lista de compras con IA, Planear comidas sencillas, Poner recordatorios con la voz, Agregar citas al calendario, Entender una carta confusa",
  outcome: "usar un asistente de IA y el asistente de voz de tu teléfono para planear una semana de comidas sencillas, convertirla en una lista de compras, poner un recordatorio y conseguir que te expliquen una carta confusa con palabras sencillas.",
  about: [
    "Este curso es para personas mayores que quieren que la tecnología les facilite un poco las tareas de todos los días: hacer las compras, cocinar, recordar citas y entender el correo.",
    "Usarás un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini, y el asistente de voz que ya tiene tu teléfono (Siri en iPhone, o Google Assistant o Gemini en Android), para planear comidas, hacer listas, poner recordatorios y entender cartas.",
    "Cada lección dura unos cinco minutos. Ve despacio, repite lo que necesites y haz cada vez la tarea “Pruébalo ahora”. Cada capítulo termina con una breve comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Planea tres cenas sencillas para la próxima semana con un asistente de IA, pídele una sola lista de compras para las tres, pon un recordatorio en el teléfono para ir de compras y agrega una cita real al calendario de tu teléfono.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas mayores, muchas que viven solas o en pareja, que se encargan de sus propias comidas, compras, citas y correspondencia, y quieren que las tareas de todos los días les cuesten menos esfuerzo.",
    startingPoint: "Tienen un teléfono inteligente y saben hacer llamadas y enviar mensajes de texto. La mayoría no ha usado un asistente de IA ni el asistente de voz de su teléfono, los avisos del calendario o la aplicación de Notas.",
    gap: "Planear comidas, recordar citas y entender cartas de aseguradoras u oficinas puede cansar y causar estrés. Usar un asistente de IA y las herramientas que ya trae el teléfono para estas tareas ahorra esfuerzo y ayuda a las personas mayores a seguir siendo independientes, siempre que dejen fuera los datos privados y confirmen las cartas importantes con quien las envió.",
    constraints: [
      "Nivel de lectura: palabras sencillas, oraciones cortas y pasos simples y grandes",
      "Dispositivos: un teléfono inteligente con asistente de voz y aplicación Calendario; los menús de iPhone y Android son distintos",
      "Tiempo: unos 5 minutos por lección, sin prisa, con tiempo para practicar",
      "Las dietas especiales las indica el médico de cada persona, no la IA",
      "Privacidad: nada de nombres ni números de cuenta, de Medicare o del Seguro Social en las instrucciones ni en las fotos de cartas"
    ],
    prerequisites: "Ayuda tomar primero \"IA para personas mayores: cómo usar asistentes de IA\", pero no es obligatorio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando un asistente de IA gratuito", action: "pedir ideas de comidas fáciles diciendo para cuántas personas cocinas, tu tiempo, lo que te gusta y lo que debes evitar", standard: "y recibir tres ideas que se ajusten a tus necesidades y a lo que te indicó tu médico" },
    { id: "O2", condition: "Con algunas ideas de comidas", action: "conseguir una sola lista de compras agrupada por sección de la tienda, sin lo que ya tienes", standard: "guardada en Notas, impresa o escrita a mano" },
    { id: "O3", condition: "Usando el asistente de voz de tu teléfono", action: "poner un recordatorio o un temporizador hablando, con un día y una hora", standard: "y revisar en la pantalla que quedó puesto" },
    { id: "O4", condition: "Con una cita real", action: "agregarla al calendario de tu teléfono con un aviso", standard: "con el nombre, la fecha y la hora correctos y un aviso antes de la cita" },
    { id: "O5", condition: "Con una carta confusa de una aseguradora, una empresa de servicios o una oficina", action: "conseguir que te la expliquen con palabras sencillas, dejando fuera todos los datos privados", standard: "y confirmar qué hacer llamando al número impreso en la carta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Listas, comidas y compras",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear comidas sencillas con IA",
          minutes: 5,
          goal: "Pedirle a un asistente de IA algunas ideas de comidas fáciles que se ajusten a lo que necesitas.",
          text: [
            "Decidir qué cocinar todos los días puede cansar, sobre todo cuando cocinas para una o dos personas. Un asistente de IA puede sugerirte ideas en segundos.",
            "Dile lo que te gusta, para cuántas personas cocinas, cuánto tiempo y esfuerzo quieres dedicar y lo que debes evitar. Por ejemplo: “Cocino para una persona. Sugiere tres cenas fáciles que tarden menos de 30 minutos, con pocos ingredientes y bajas en sal.”",
            "Si tu médico te dio una dieta especial, sigue los consejos de tu médico. El asistente puede darte ideas, pero no conoce tu salud."
          ],
          steps: ["Abre tu asistente de IA.", "Di para cuántas personas cocinas.", "Di cuánto tiempo tienes y qué te gusta.", "Di lo que debes evitar, como demasiada sal o azúcar.", "Pide tres ideas."],
          words: [["Ingrediente", "uno de los alimentos que lleva una receta."]],
          slides: [
            { title: "Deja que la IA te sugiera comidas", bullets: ["Ideas en segundos", "Útil cuando cocinas para una o dos personas"] },
            { title: "Dile", bullets: ["Cuántas personas", "Cuánto tiempo", "Qué te gusta y qué evitar"] },
            { title: "Primero tu médico", bullets: ["Sigue la dieta que te dio tu médico", "La IA no conoce tu salud"] }
          ],
          tryIt: "Pídele a un asistente de IA tres cenas fáciles para la próxima semana que vayan con tu forma de comer. Anota las tres que más te gusten.",
          youCanNow: "pedirle a un asistente de IA ideas de comidas que se ajusten a lo que necesitas.",
          quickCheck: [
            { objective: "O1", q: "Si tienes una dieta especial, ¿quién la decide?", options: ["El asistente de IA", "Tu médico", "El supermercado", "Un programa de cocina"], answer: 1, why: "El asistente da ideas pero no conoce tu salud; sigue lo que te indique tu médico." },
            { objective: "O1", q: "Cocinas para dos y en la noche tienes poca energía. ¿Qué agregas a tu pedido de comidas?", options: ["\"Que sea rápido y fácil, para dos personas.\"", "Nada; solo dices \"comida\"", "Tu número de Medicare", "\"Que sea elegante.\""], answer: 0, why: "Decir para cuántas personas, y cuánto tiempo y esfuerzo quieres, te da ideas que te sirven." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Convertir las comidas en una lista de compras",
          minutes: 4,
          goal: "Conseguir una sola lista de compras ordenada para varias comidas.",
          text: [
            "Cuando tengas las ideas de comidas, pídele al asistente que haga una sola lista de compras para todas. Así no tienes que copiar cada receta.",
            "Pídele que agrupe la lista por secciones de la tienda, como frutas y verduras, lácteos y enlatados, para que recorras la tienda una sola vez. Luego dile lo que ya tienes en casa para que lo quite de la lista.",
            "Puedes imprimir la lista, copiarla en la aplicación de Notas de tu teléfono o simplemente escribirla en papel. Usa lo que te resulte más fácil."
          ],
          steps: ["Pide: “Haz una sola lista de compras para estas tres cenas.”", "Pídele que agrupe la lista por sección de la tienda.", "Dile lo que ya tienes.", "Copia la lista en Notas, imprímela o escríbela."],
          words: [["Aplicación de Notas", "una aplicación de tu teléfono para escribir y guardar notas y listas cortas."]],
          slides: [
            { title: "Una lista para todas las comidas", bullets: ["“Haz una sola lista de compras para estas tres cenas.”"] },
            { title: "Facilita las compras", bullets: ["Agrupa por sección de la tienda", "Quita lo que ya tienes"] },
            { title: "Guarda tu lista", bullets: ["Cópiala en la aplicación de Notas", "Imprímela", "O escríbela en papel"] }
          ],
          tryIt: "Pídele al asistente una sola lista de compras para tus tres cenas, agrupada por sección de la tienda. Dile dos cosas que ya tienes y guarda la lista final.",
          youCanNow: "convertir ideas de comidas en una sola lista de compras que se ajuste a tu cocina.",
          quickCheck: [
            { objective: "O2", q: "¿Qué significa agrupar una lista por sección de la tienda?", options: ["Ordenar los productos del más barato al más caro", "Escribir la lista dos veces", "Juntar los productos según dónde están, como lácteos o enlatados", "Poner solo una comida en la lista"], answer: 2, why: "Agrupar por sección te deja recorrer la tienda una sola vez." },
            { objective: "O2", q: "Ya tienes arroz y huevos en casa. ¿Qué le dices al asistente?", options: ["Nada", "Que agregue más arroz y huevos", "Que haga un nuevo plan de comidas", "Que ya tienes arroz y huevos, para que no los ponga en la lista"], answer: 3, why: "Decirle lo que tienes deja esos productos fuera de la lista." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar el asistente de voz de tu teléfono para recordatorios",
          minutes: 6,
          goal: "Poner un recordatorio o un temporizador hablándole a tu teléfono.",
          text: [
            "La mayoría de los teléfonos traen un asistente de voz: Siri en iPhone, y Google Assistant o Gemini en muchos teléfonos Android. Tú hablas y el teléfono hace una tarea sencilla, como poner un recordatorio, un temporizador o una alarma.",
            "Para activarlo, por lo general puedes decir “Oye Siri” o “Hey Google”, o mantener presionado el botón lateral o el botón de inicio. Si no está configurado, pide a un familiar que te ayude a activarlo en Ajustes.",
            "Luego habla con claridad: “Recuérdame ir al supermercado el jueves a las 10 de la mañana.” “Pon un temporizador de 20 minutos.” “Recuérdame llamar a Ruth mañana a las 5 de la tarde.” El teléfono te dirá o te mostrará que quedó listo."
          ],
          steps: ["Di “Oye Siri” o “Hey Google”, o mantén presionado el botón lateral o de inicio.", "Espera el sonido o la luz en la pantalla.", "Di lo que quieres, con el día y la hora.", "Mira la pantalla para comprobar que quedó listo."],
          words: [["Asistente de voz", "un ayudante que trae tu teléfono y que hace tareas sencillas cuando le hablas."], ["Recordatorio", "un mensaje que tu teléfono te muestra a la hora que tú eliges."]],
          slides: [
            { title: "Tu teléfono puede escuchar", bullets: ["Siri en iPhone", "Google Assistant o Gemini en Android"] },
            { title: "Actívalo", bullets: ["Di “Oye Siri” o “Hey Google”", "O mantén presionado el botón lateral o de inicio"] },
            { title: "Di lo que necesitas", bullets: ["“Recuérdame ir de compras el jueves a las 10.”", "“Pon un temporizador de 20 minutos.”", "Mira la pantalla para ver que quedó listo"] }
          ],
          tryIt: "Usa el asistente de voz de tu teléfono para poner un recordatorio de ir al supermercado un día y a una hora que te convengan. Comprueba que aparece en la pantalla.",
          youCanNow: "poner un recordatorio o un temporizador hablándole a tu teléfono.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es el asistente de voz de un teléfono?", options: ["Una persona que te devuelve la llamada", "Un ayudante que ya trae el teléfono y al que le hablas, como Siri o Google Assistant", "Un audífono", "Una aplicación de mensajes de texto"], answer: 1, why: "Siri y Google Assistant hacen trabajos sencillos, como recordatorios y temporizadores, cuando les hablas." },
            { objective: "O3", q: "Quieres acordarte de llamar a tu hermana mañana en la tarde. ¿Qué dices?", options: ["\"Llamar.\"", "\"Hermana.\"", "\"Recuérdame llamar a mi hermana mañana a las 6 de la tarde.\"", "\"Mañana.\""], answer: 2, why: "Un pedido claro, con la tarea, el día y la hora, pone un recordatorio útil." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Listas, comidas y compras",
        questions: [
          { objective: "O1", q: "¿Qué debes decirle a un asistente de IA cuando le pides ideas de comidas?", options: ["Tu número de banco", "Solo “comida”", "Cuántas personas, tu tiempo, qué te gusta y qué evitar", "La contraseña de tu médico"], answer: 2, why: "Esos detalles lo ayudan a sugerir comidas que te convengan." },
          { objective: "O1", q: "Tu médico te dio una dieta baja en sal, pero la IA sugiere un plato salado. ¿Qué haces?", options: ["Sigues los consejos de tu médico", "Sigues a la IA", "Dejas de comer", "No haces caso a ninguno"], answer: 0, why: "Tu médico conoce tu salud; la IA no." },
          { objective: "O2", q: "¿Por qué pedirle al asistente que agrupe tu lista de compras por sección de la tienda?", options: ["Hace que la comida sea más barata", "Es obligatorio", "Para que se imprima a color", "Para recorrer la tienda una sola vez"], answer: 3, why: "Agrupar por sección hace las compras más rápidas." },
          { objective: "O3", q: "¿Cuál es un asistente de voz que traen muchos teléfonos?", options: ["Calculadora", "Siri", "Cámara", "Linterna"], answer: 1, why: "Siri en iPhone y Google Assistant o Gemini en Android escuchan lo que les pides en voz alta." },
          { objective: "O3", q: "¿Qué pedido de voz pondrá un recordatorio útil?", options: ["“Compras.”", "“Recuérdame ir de compras el jueves a las 10 de la mañana.”", "“Hola.”", "“Teléfono.”"], answer: 1, why: "Dice qué recordar, el día y la hora." }
        ]
      }
    },
    {
      name: "Capítulo 2: Citas y papeles",
      lessons: [
        {
          objectives: ["O4"],
          title: "Agregar citas al calendario de tu teléfono",
          minutes: 6,
          goal: "Agregar una cita médica al calendario de tu teléfono con un aviso.",
          text: [
            "Tu teléfono tiene una aplicación de Calendario que puede guardar todas tus citas y avisarte antes de cada una. Es muy útil para visitas al médico, cortes de pelo y cumpleaños de la familia.",
            "La forma más fácil es pedírselo a tu asistente de voz: “Agrega una cita con la Dra. Lee el 12 de mayo a las 2 de la tarde.” También puedes abrir la aplicación Calendario, tocar el signo más (+), escribir el nombre, elegir la fecha y la hora y tocar Agregar o Guardar.",
            "Pon un aviso para que el teléfono te lo recuerde con tiempo, por ejemplo un día antes y una hora antes. Busca una opción llamada Aviso o Notificación cuando agregues el evento."
          ],
          steps: ["Abre la aplicación Calendario o pídeselo a tu asistente de voz.", "Toca el signo más (+) para agregar un evento.", "Escribe el nombre, como “Chequeo con la Dra. Lee”.", "Elige la fecha y la hora.", "Elige un aviso, como 1 día antes.", "Toca Agregar o Guardar."],
          words: [["Aplicación de Calendario", "la aplicación de tu teléfono que guarda tus citas por fecha."], ["Aviso", "un sonido o mensaje que el teléfono te da antes de una cita."]],
          slides: [
            { title: "El calendario de tu teléfono", bullets: ["Guarda todas tus citas", "Te avisa antes de cada una"] },
            { title: "Dos formas de agregar", bullets: ["Pídeselo a tu asistente de voz", "O abre Calendario y toca +"] },
            { title: "Complétalo", bullets: ["Nombre, fecha y hora", "Elige un aviso, como 1 día antes", "Toca Agregar o Guardar"] }
          ],
          tryIt: "Agrega al calendario de tu teléfono una cita real o un cumpleaños de la familia con un aviso un día antes. Comprueba que aparece en la fecha correcta.",
          youCanNow: "agregar una cita al calendario de tu teléfono y recibir un recordatorio antes.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace un aviso en una cita del calendario?", options: ["Hace que el teléfono te lo recuerde antes de la cita", "Cancela la cita", "Llama al médico por ti", "La comparte con desconocidos"], answer: 0, why: "Un aviso te alerta con tiempo, por ejemplo un día o una hora antes." },
            { objective: "O4", q: "Acabas de hacer una cita para un chequeo el próximo martes. ¿Cuál es el primer paso para agregarla en la aplicación Calendario?", options: ["Apagar el teléfono", "Borrar las citas viejas", "Escribirla en un mensaje para ti", "Tocar el signo más (+) para agregar un evento"], answer: 3, why: "Toca el signo más, luego escribe el nombre y elige la fecha, la hora y un aviso." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Conseguir que te expliquen una carta confusa",
          minutes: 5,
          goal: "Pedirle a un asistente de IA que explique una carta confusa con palabras sencillas, sin compartir datos privados.",
          text: [
            "Las cartas de compañías de seguros, de servicios como la luz o el agua, o de oficinas pueden estar llenas de palabras difíciles. Un asistente de IA puede explicarlas en lenguaje sencillo.",
            "Primero, tapa o deja fuera los datos privados: nombres, números de cuenta, números de Medicare o de Social Security (el Seguro Social de Estados Unidos) y tu dirección. Luego escribe la parte confusa, o descríbela, y pregunta: “Explica esto con palabras sencillas. ¿Tengo que hacer algo?”",
            "Algunos asistentes te dejan tomar una foto de una página. Si lo haces, tapa los datos privados antes de tomar la foto. Para cualquier cosa sobre dinero, beneficios o salud, confirma qué hacer llamando al número impreso en la misma carta, o pregúntale a un familiar de confianza."
          ],
          steps: ["Tapa o deja fuera nombres, números y tu dirección.", "Escribe o describe solo la parte confusa.", "Pregunta: “Explica esto con palabras sencillas. ¿Qué tengo que hacer?”", "Confírmalo llamando al número impreso en la carta."],
          words: [["Lenguaje sencillo", "palabras simples, de todos los días, fáciles de entender."], ["Número de cuenta", "un número privado que una empresa usa para tu cuenta; nunca lo compartas con la IA."]],
          slides: [
            { title: "Cartas difíciles, palabras sencillas", bullets: ["Seguros, servicios, oficinas", "La IA puede explicarlas de forma sencilla"] },
            { title: "Primero protégete", bullets: ["Tapa nombres y números de cuenta", "Deja fuera los números de Medicare y Social Security", "Deja fuera tu dirección"] },
            { title: "Pregunta y confirma", bullets: ["“Explica con palabras sencillas. ¿Qué tengo que hacer?”", "Llama al número impreso en la carta para confirmar"] }
          ],
          tryIt: "Busca una carta o factura con una frase que no entiendas del todo. Deja fuera todos los datos privados, escribe solo esa frase en un asistente y pídele que te la explique con palabras sencillas.",
          youCanNow: "conseguir que te expliquen una carta confusa con palabras sencillas mientras proteges tus datos privados.",
          quickCheck: [
            { objective: "O5", q: "¿Qué son las palabras sencillas?", options: ["Palabras simples, de todos los días", "Palabras legales", "Un idioma extranjero", "Códigos muy cortos"], answer: 0, why: "Hablar con palabras sencillas es usar palabras simples, de todos los días, fáciles de entender." },
            { objective: "O5", q: "Quieres tomarle una foto a una carta del seguro para la IA. ¿Qué haces primero?", options: ["Hacer la foto más grande", "Tapar tu nombre, tu dirección y los números de cuenta", "Agregar tu número de Medicare para que lo revise", "Enviársela a un amigo"], answer: 1, why: "Tapa los datos privados antes de tomar la foto." }
          ]
        },
        {
          objectives: ["O1","O2","O3"],
          title: "Todo junto: una semana más fácil",
          minutes: 5,
          goal: "Usar la IA y tu teléfono juntos para planear una semana.",
          text: [
            "Ya tienes varias habilidades pequeñas: pedir ideas de comidas, hacer una lista, poner recordatorios y agregar citas. Usadas juntas, pueden organizar toda una semana.",
            "Una rutina sencilla: el domingo, pídele al asistente tres cenas y una lista de compras. Pon un recordatorio para tu día de compras. Mira tu calendario para ver las citas de la semana y agrega lo que sea nuevo.",
            "Mantenlo sencillo. Usa las herramientas que te ayudan y deja las que no. Las listas en papel siguen funcionando bien, y pedir ayuda a un familiar siempre está bien."
          ],
          steps: ["Pídele a un asistente de IA tres cenas.", "Pide una sola lista de compras.", "Pon un recordatorio para tu día de compras.", "Revisa tu calendario y agrega las citas nuevas."],
          words: [["Rutina", "un conjunto de pasos que haces siempre de la misma manera."]],
          slides: [
            { title: "Una rutina sencilla de domingo", bullets: ["Tres cenas de la IA", "Una lista de compras", "Un recordatorio para comprar"] },
            { title: "Revisa tu semana", bullets: ["Mira tu calendario", "Agrega lo nuevo con un aviso"] },
            { title: "Mantenlo sencillo", bullets: ["Usa lo que te ayuda", "Las listas en papel siguen sirviendo", "Pide ayuda a tu familia cuando quieras"] }
          ],
          tryIt: "Tarea final: planea tres cenas sencillas para la próxima semana con un asistente de IA, pide una sola lista de compras, pon un recordatorio en el teléfono para tu día de compras y agrega una cita real a tu calendario.",
          youCanNow: "usar la IA y tu teléfono juntos para planear comidas, hacer las compras y llevar el control de tus citas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué herramientas juntas pueden organizar tu semana?", options: ["Solo un calendario de papel", "Solo un asistente de IA", "Ideas de comidas, una lista de compras, recordatorios y tu calendario", "Ninguna; es demasiado difícil"], answer: 2, why: "Las pequeñas habilidades de este curso trabajan juntas para planear toda una semana." },
            { objective: "O1", q: "Es domingo. ¿Cuál es un primer paso sencillo para planear tu semana?", options: ["Comprar todo lo que hay en la tienda", "Apagar todos los recordatorios", "Leer cartas viejas", "Pedirle al asistente tres cenas y una sola lista de compras"], answer: 3, why: "La rutina empieza con tres cenas y una lista, y luego un recordatorio y una revisión del calendario." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Citas y papeles",
        questions: [
          { objective: "O4", q: "En la aplicación Calendario, ¿qué tocas para agregar una cita?", options: ["El botón del volumen", "La cámara", "El ícono de la batería", "El signo más (+)"], answer: 3, why: "El signo más agrega un evento nuevo." },
          { objective: "O4", q: "¿Por qué poner un aviso en una cita?", options: ["Para que el teléfono te la recuerde antes", "Para que cueste menos", "Para que el médico te llame", "Borra el evento"], answer: 0, why: "Un aviso te advierte con tiempo." },
          { objective: "O5", q: "Antes de preguntarle a la IA sobre una carta, debes:", options: ["Escribir tu número de cuenta", "Enviar la carta entera con tu nombre", "Tapar o dejar fuera los datos privados", "Compartir tu número de Medicare"], answer: 2, why: "Los datos privados nunca deben ir a un asistente de IA." },
          { objective: "O5", q: "La IA te explica una carta sobre tus beneficios. ¿Cómo confirmas qué hacer?", options: ["Confías del todo en la IA", "No haces nada", "Le preguntas a un desconocido en internet", "Llamas al número impreso en la carta"], answer: 3, why: "La oficina que envió la carta es la fuente oficial." },
          { objective: "O2", q: "¿Cuál es una buena rutina de domingo según este curso?", options: ["Borrar tu calendario", "Compartir tus contraseñas", "Planear cenas, hacer una lista, poner un recordatorio para comprar y revisar tu calendario", "Comprar un teléfono nuevo"], answer: 2, why: "Combina las habilidades de todas las lecciones." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la vida diaria",
    questions: [
      { objective: "O1", q: "Un asistente de IA puede ayudarte con las comidas:", options: ["Cocinándolas", "Sugiriendo ideas fáciles que te convengan", "Comprando la comida por ti", "Sabiendo la dieta que te dio tu médico"], answer: 1, why: "Sugiere ideas cuando le dices lo que necesitas." },
      { objective: "O1", q: "¿Qué pedido de comida es el más claro?", options: ["“Cocino para una persona. Sugiere tres cenas fáciles, bajas en sal, de menos de 30 minutos.”", "“comida”", "“¿cena?”", "“comer”"], answer: 0, why: "Da las personas, el tiempo y lo que hay que evitar." },
      { objective: "O1", q: "Si la dieta de tu médico y la idea de la IA no coinciden, sigue:", options: ["A tu médico", "A la IA", "Lo que sea más fácil", "A ninguno"], answer: 0, why: "Tu médico conoce tu salud." },
      { objective: "O2", q: "Un ingrediente es:", options: ["Un utensilio de cocina", "Uno de los alimentos de una receta", "Una tienda", "Una aplicación"], answer: 1, why: "Los ingredientes son los alimentos que lleva una receta." },
      { objective: "O2", q: "Para conseguir una lista para tres comidas, pides:", options: ["“¿Cuál es mi contraseña?”", "“Borra las comidas.”", "“Haz una sola lista de compras para estas tres cenas.”", "“Llama a la tienda.”"], answer: 2, why: "El asistente junta los ingredientes en una sola lista." },
      { objective: "O2", q: "Decirle al asistente lo que ya tienes en casa lo ayuda a:", options: ["Imprimir a color", "Cobrarte menos", "Llamar a tu familia", "Quitar esas cosas de la lista"], answer: 3, why: "Quita lo que no necesitas comprar." },
      { objective: "O2", q: "La aplicación de Notas sirve para:", options: ["Tomar fotos", "Hacer llamadas", "Escribir y guardar notas y listas cortas", "Escuchar música"], answer: 2, why: "Notas guarda listas en tu teléfono." },
      { objective: "O3", q: "Siri y Google Assistant son:", options: ["Asistentes de voz que traen los teléfonos", "Supermercados", "Médicos", "Direcciones de correo"], answer: 0, why: "Hacen tareas sencillas cuando les hablas." },
      { objective: "O3", q: "Una forma de activar un asistente de voz es:", options: ["Sacudir el teléfono", "Abrir la cámara", "Apagar el teléfono", "Decir “Oye Siri” o “Hey Google”"], answer: 3, why: "Una frase de activación o mantener presionado el botón lateral o de inicio lo activa." },
      { objective: "O3", q: "¿Qué pedido en voz alta pone un temporizador?", options: ["“Temporizador.”", "“Pon un temporizador de 20 minutos.”", "“Hola teléfono.”", "“Cocinar.”"], answer: 1, why: "Dice qué hacer y por cuánto tiempo." },
      { objective: "O3", q: "Después de poner un recordatorio con la voz, debes:", options: ["Apagar el teléfono", "Mirar la pantalla para comprobar que quedó listo", "Borrar la aplicación", "Nada"], answer: 1, why: "Comprobarlo confirma que quedó bien puesto." },
      { objective: "O4", q: "La aplicación de Calendario te ayuda a:", options: ["Jugar", "Tomar fotos", "Enviar dinero", "Guardar citas y recibir recordatorios"], answer: 3, why: "Guarda eventos por fecha y puede avisarte." },
      { objective: "O4", q: "Al agregar una cita, ¿qué completas?", options: ["Nombre, fecha y hora", "Tu número de banco", "Tu contraseña", "Tu número de Medicare"], answer: 0, why: "Nombre, fecha y hora es lo que necesita el calendario." },
      { objective: "O4", q: "Un aviso un día antes de una cita significa que:", options: ["La cita se canceló", "El médico te llamará", "Tu teléfono te la recuerda el día anterior", "La cita cambia de día"], answer: 2, why: "Los avisos te advierten con tiempo." },
      { objective: "O4", q: "También puedes agregar una cita:", options: ["Abriendo la cámara", "Enviando una carta por correo", "Apagando el teléfono", "Pidiéndoselo a tu asistente de voz"], answer: 3, why: "Los asistentes de voz pueden agregar eventos al calendario." },
      { objective: "O5", q: "Antes de escribir parte de una carta en la IA, quita:", options: ["Las palabras difíciles", "La fecha", "Los nombres, los números de cuenta y tu dirección", "Nada"], answer: 2, why: "Los datos privados nunca van a la IA." },
      { objective: "O5", q: "Si le tomas una foto a una carta para la IA, primero debes:", options: ["Encender el flash", "Tapar los datos privados", "Agregar tu contraseña", "Escribir tu número de Social Security en ella"], answer: 1, why: "Tapar los datos protege tu privacidad." },
      { objective: "O5", q: "“Lenguaje sencillo” significa:", options: ["Palabras simples, de todos los días", "Un idioma extranjero", "Palabras legales", "Código de computadora"], answer: 0, why: "El lenguaje sencillo es fácil de entender." },
      { objective: "O5", q: "Para confirmar qué te pide una carta de beneficios, tú:", options: ["Llamas al número impreso en la carta", "Confías en la IA", "La publicas en internet", "No le haces caso"], answer: 0, why: "Quien la envió es la fuente oficial." },
      { objective: "O2", q: "Si una herramienta no te ayuda, el curso sugiere:", options: ["Comprar un teléfono más nuevo", "Dejarla y usar lo que funcione, incluso el papel", "Dejar de planear", "Compartir tu contraseña"], answer: 1, why: "Mantenlo sencillo y usa lo que te ayude." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      2,
      4,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Ideas de comidas que se ajustan",
        objective: "O1",
        notYet: "El pedido es vago o las comidas no se ajustan a tus necesidades.",
        meets: "Tres cenas que se ajustan a cuántas personas son, tu tiempo, lo que te gusta y lo que debes evitar.",
        exceeds: "Las comidas también siguen cualquier dieta que te haya indicado tu médico."
      },
      {
        name: "Una sola lista de compras",
        objective: "O2",
        notYet: "No hay lista, o hay una lista distinta para cada comida.",
        meets: "Una sola lista para las tres cenas, guardada en Notas, impresa o escrita a mano.",
        exceeds: "Agrupada por sección de la tienda, sin lo que ya tienes."
      },
      {
        name: "Recordatorio para las compras",
        objective: "O3",
        notYet: "No hay recordatorio, o no tiene día ni hora.",
        meets: "Un recordatorio con día y hora, revisado en la pantalla.",
        exceeds: "Lo puso hablándole al asistente de voz."
      },
      {
        name: "Cita en el calendario",
        objective: "O4",
        notYet: "No hay cita, o la fecha o la hora están mal.",
        meets: "Una cita real con el nombre, la fecha y la hora correctos.",
        exceeds: "Incluye un aviso, por ejemplo un día antes."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que dicen usar recordatorios o avisos del calendario para sus citas dentro de 30 días (encuesta de seguimiento)",
      "Personas que dicen faltar menos a sus citas o sentir menos estrés con las comidas y las compras",
      "Personas que empiezan otro curso de tecnología para personas mayores dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con asistente de voz (Siri, Google Assistant o Gemini) y una aplicación Calendario",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini",
      "Una carta de ejemplo sin datos privados reales, para practicar con cartas",
      "Unos 60 minutos en total, en sesiones cortas y sin prisa: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Antes de la lección 3, ayuda a las personas a activar el asistente de voz en Configuración; muchas veces está apagado.",
      "Agrupa a las personas por tipo de teléfono (iPhone o Android) para que los pasos en pantalla coincidan.",
      "Usa una carta de ejemplo para practicar; nunca pidas que compartan números reales de cuenta o de Medicare.",
      "Recuerda que las dietas especiales las indica el médico, y que las preguntas sobre beneficios van al número que aparece en la carta.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
