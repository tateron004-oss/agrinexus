"use strict";

// Koach Learn course (shared), Spanish translation of shared/intro-to-ai.js. See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "intro-to-ai-es",
  lang: "es",
  translationOf: "intro-to-ai",
  category: "Seniors and Technology",
  name: "Introducción a la inteligencia artificial",
  skills: "Explicar qué es la IA, Reconocer la IA en la vida diaria, Escribir instrucciones claras, Mejorar y revisar respuestas, Usar la IA de forma justa y segura",
  outcome: "explicar con palabras sencillas qué es la inteligencia artificial y cómo aprende, reconocerla en las herramientas que ya usas y usar un asistente de IA gratuito para terminar una tarea real de todos los días: pedir con claridad, mejorar la respuesta, revisarla y no compartir información privada.",
  about: [
    "La inteligencia artificial, o IA, está en los teléfonos, los mapas, el correo, las tiendas en línea y los sitios de empleo. Este curso explica qué es con palabras sencillas y luego te enseña a usarla bien. Es para todos: abuelos, estudiantes, personas que buscan trabajo, voluntarios y equipos pequeños.",
    "En el Capítulo 1 aprendes qué es la IA, cómo aprende con ejemplos y dónde ya la encuentras. En el Capítulo 2 usas un asistente de IA gratuito para hacer un trabajo real, revisas lo que dice y lo usas de forma justa y segura.",
    "Cada lección dura unos cinco minutos: lee, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Cada capítulo termina con una breve comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Elige una tarea real, como planear una cena familiar, un mensaje para inscribir voluntarios o un plan de estudio semanal. Usa un asistente de IA gratuito para hacerla: escribe una instrucción clara, pide dos mejoras, revisa un dato de la respuesta en un sitio web oficial o confiable y asegúrate de que la instrucción no tenga información privada. Luego explícale a un amigo en tres oraciones qué es la IA y por qué revisaste la respuesta.",
  chapters: [
    {
      name: "Capítulo 1: Qué es la IA",
      lessons: [
        {
          title: "La IA en palabras sencillas",
          minutes: 4,
          goal: "Explicar en dos oraciones qué es la inteligencia artificial.",
          text: [
            "Inteligencia artificial (IA) significa programas de computadora que hacen tareas que normalmente necesitan a una persona: entender lo que se dice, reconocer una cara en una foto, sugerir una canción, traducir una oración o escribir la respuesta a una pregunta.",
            "La IA no piensa ni siente como una persona. Es muy buena para encontrar patrones en enormes cantidades de ejemplos y usar esos patrones para adivinar. Una buena suposición puede parecer inteligente; una mala puede sonar igual de segura.",
            "Hay muchos tipos de IA. La que más se menciona hoy es la IA generativa: herramientas como ChatGPT, Microsoft Copilot y Google Gemini que generan (crean) texto, imágenes o sonido nuevos cuando se lo pides."
          ],
          words: [["Inteligencia artificial (IA)", "programas de computadora que hacen tareas que normalmente necesitan a una persona, como entender lo que se dice o responder preguntas."], ["Patrón", "algo que se repite de una forma que se puede predecir."], ["IA generativa", "IA que crea texto, imágenes o sonido nuevos cuando se lo pides."]],
          slides: [
            { title: "La IA es...", bullets: ["Programas de computadora que hacen tareas que normalmente necesitan a una persona", "Voz, fotos, sugerencias, traducción, escritura"] },
            { title: "Cómo funciona, en una línea", bullets: ["Encuentra patrones en muchos ejemplos", "Luego hace su mejor suposición"] },
            { title: "No es una persona", bullets: ["No piensa ni siente", "Una suposición equivocada puede sonar tan segura como una correcta"] },
            { title: "IA generativa", bullets: ["Crea texto, imágenes o sonido nuevos", "Ejemplos: ChatGPT, Microsoft Copilot, Google Gemini"] }
          ],
          tryIt: "Sin mirar atrás, di o escribe dos oraciones que expliquen la IA a alguien que nunca ha oído hablar de ella. Usa las palabras \"patrones\" y \"suposición\".",
          youCanNow: "explicar con palabras sencillas qué es la IA y por qué puede equivocarse."
        },
        {
          title: "Cómo aprende la IA con ejemplos",
          minutes: 5,
          goal: "Describir cómo aprende una IA con un ejemplo sencillo.",
          text: [
            "La mayoría de la IA actual aprende con ejemplos y no con reglas que escribe una persona. Para enseñarle a un programa a detectar correo basura, se le muestran muchos correos marcados como \"spam\" o \"no spam\". El programa encuentra los patrones, como ciertas palabras o enlaces extraños, y los usa con correos nuevos.",
            "Los ejemplos con los que aprende se llaman datos. Datos buenos y variados hacen una IA mejor. Si los datos son viejos, parciales o les faltan algunos grupos de personas, las suposiciones de la IA también serán viejas, parciales o injustas. Esto se llama sesgo.",
            "Herramientas de escritura como ChatGPT aprendieron de una enorme cantidad de texto, así que son buenas para predecir qué palabras deben venir después. Por eso escriben con fluidez, y también por eso pueden escribir algo que suena bien pero no es cierto."
          ],
          steps: ["Las personas reúnen muchos ejemplos (datos).", "El programa busca patrones en los ejemplos.", "Usa los patrones para adivinar sobre algo nuevo.", "Las personas revisan las suposiciones y le dan mejores ejemplos cuando se equivoca."],
          words: [["Datos", "los ejemplos, números, palabras o imágenes con los que aprende una IA."], ["Sesgo", "cuando los datos se inclinan hacia un lado y las suposiciones de la IA son injustas con algunas personas."], ["Entrenamiento", "el paso en el que una IA aprende patrones a partir de datos."]],
          slides: [
            { title: "Aprender con ejemplos", bullets: ["Se le muestran muchos correos marcados como spam o no spam", "Encuentra los patrones", "Clasifica correos nuevos con esos patrones"] },
            { title: "Los datos importan", bullets: ["Datos buenos y variados = mejores suposiciones", "Datos viejos o parciales = suposiciones viejas o injustas"] },
            { title: "Por qué la IA que escribe puede equivocarse", bullets: ["Predice las siguientes palabras a partir de patrones", "Puede sonar bien y aun así no ser cierto"] }
          ],
          tryIt: "Piensa en algo que aprendiste con ejemplos, como distinguir una fruta madura de una que no lo está. Escribe cómo le enseñarías lo mismo a una computadora: ¿qué ejemplos le mostrarías y en qué podría equivocarse?",
          youCanNow: "describir cómo aprende la IA con datos y por qué datos pobres llevan a respuestas pobres o injustas."
        },
        {
          title: "Reconocer la IA en tu día",
          minutes: 4,
          goal: "Encontrar al menos cinco lugares donde ya usas IA.",
          text: [
            "Probablemente usas IA todos los días sin llamarla así. El mapa de tu teléfono elige una ruta más rápida para evitar el tráfico. Tu correo manda la basura a una carpeta de spam. Las aplicaciones de videos y música sugieren qué ver después. Tu teléfono se desbloquea con tu cara. Tu teclado sugiere la siguiente palabra.",
            "Los asistentes de voz como Siri, Google Assistant y Alexa usan IA para entender lo que dices. Los bancos usan IA para detectar pagos con tarjeta que parecen raros. Los sitios de empleo la usan para relacionar tu currículum con las vacantes.",
            "Saber dónde está la IA te ayuda a hacer buenas preguntas: ¿por qué la aplicación me sugirió esto? ¿Puedo desactivarlo? ¿Qué sabe de mí? La mayoría de las aplicaciones tienen una configuración donde puedes ver o cambiar esto."
          ],
          words: [["Asistente de voz", "una IA con la que hablas en voz alta, como Siri, Google Assistant o Alexa."], ["Recomendación", "una sugerencia que hace una aplicación según lo que tú o personas parecidas a ti eligieron antes."]],
          slides: [
            { title: "IA que ya usas", bullets: ["Mapas que evitan el tráfico", "Filtros de spam en el correo", "Videos, canciones y productos sugeridos"] },
            { title: "Más IA de todos los días", bullets: ["Desbloqueo del teléfono con la cara", "Asistentes de voz: Siri, Google Assistant, Alexa", "Alertas del banco por uso raro de la tarjeta"] },
            { title: "Buenas preguntas", bullets: ["¿Por qué me sugirió esto?", "¿Puedo desactivarlo?", "¿Qué sabe de mí? Revisa la configuración"] }
          ],
          tryIt: "Revisa tu teléfono o computadora y haz una lista de cinco lugares que usan IA. En uno de ellos, abre la configuración y encuentra una opción que puedas cambiar.",
          youCanNow: "reconocer la IA en las herramientas que usas todos los días y encontrar la configuración que la controla."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Qué es la IA",
        questions: [
          { q: "¿Cuál es la mejor descripción sencilla de la IA?", options: ["Un robot que piensa y siente", "Un sitio web que siempre tiene razón", "Un tipo de cable de internet", "Programas de computadora que encuentran patrones y hacen suposiciones para hacer tareas que normalmente hacen las personas"], answer: 3, why: "La IA encuentra patrones en ejemplos y los usa para hacer suposiciones." },
          { q: "¿Qué hace la IA generativa?", options: ["Arregla teléfonos rotos", "Carga tu batería", "Solo guarda archivos", "Crea texto, imágenes o sonido nuevos cuando se lo pides"], answer: 3, why: "Generativa significa que crea contenido nuevo." },
          { q: "Una IA se entrenó solo con fotos de un grupo de personas. ¿Cuál es el problema probable?", options: ["Funcionará igual para todos", "Será más rápida", "Sus suposiciones pueden ser injustas o equivocadas para otros grupos", "Dejará de funcionar"], answer: 2, why: "Los datos parciales causan sesgo." },
          { q: "¿Qué son los \"datos\" en la IA?", options: ["Los ejemplos con los que aprende la IA", "La pantalla del teléfono", "Un tipo de contraseña", "El precio de la aplicación"], answer: 0, why: "Los datos son los ejemplos, palabras, números o imágenes con los que aprende una IA." },
          { q: "¿Cuál de estos es un uso diario de la IA?", options: ["Un interruptor de luz", "Un calendario de papel", "Una aplicación de mapas que elige una ruta para evitar el tráfico", "Un reloj de cuerda"], answer: 2, why: "Las aplicaciones de mapas usan IA para predecir el tráfico y elegir rutas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar bien la IA",
      lessons: [
        {
          title: "Pedir ayuda a un asistente de IA",
          minutes: 5,
          goal: "Abrir un asistente de IA gratuito y escribir una instrucción clara de tres partes.",
          text: [
            "Algunos asistentes de IA gratuitos son ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) y Google Gemini (gemini.google.com). Funcionan en un navegador web o como aplicación de la tienda oficial de aplicaciones.",
            "Lo que escribes se llama instrucción (en inglés, \"prompt\"). Una instrucción clara tiene tres partes: lo que necesitas, un poco sobre la situación y cómo quieres la respuesta. Por ejemplo: \"Dirijo un pequeño banco de alimentos de una iglesia. Escribe un mensaje amable de 4 líneas para pedir voluntarios el sábado. Usa palabras sencillas.\"",
            "Una instrucción de una sola palabra, como \"voluntarios\", obliga a la IA a adivinar lo que quieres, así que la respuesta es general y menos útil."
          ],
          steps: ["Abre un asistente de IA en el navegador o en la aplicación oficial.", "Di lo que necesitas.", "Agrega la situación, sin detalles privados.", "Di cómo quieres la respuesta: largo, lista, pasos, palabras sencillas.", "Envíala y lee la respuesta."],
          words: [["Instrucción (prompt)", "lo que escribes o dices a un asistente de IA para pedirle algo."], ["Asistente de IA", "un programa de IA con el que conversas escribiendo o hablando, como ChatGPT, Copilot o Gemini."]],
          slides: [
            { title: "Asistentes de IA gratuitos", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Tres partes de una instrucción clara", bullets: ["1. Lo que necesitas", "2. La situación (sin detalles privados)", "3. Cómo quieres la respuesta"] },
            { title: "Ejemplo", bullets: ["\"Dirijo un pequeño banco de alimentos. Escribe un mensaje amable de 4 líneas", "para pedir voluntarios el sábado. Usa palabras sencillas.\""] }
          ],
          tryIt: "Abre un asistente de IA gratuito. Escribe una instrucción de tres partes para una tarea real de esta semana, como un mensaje de cumpleaños, un plan de estudio o una lista de compras, y envíala.",
          youCanNow: "abrir un asistente de IA gratuito y escribir una instrucción clara que dé una primera respuesta útil."
        },
        {
          title: "Mejorar y revisar la respuesta",
          minutes: 5,
          goal: "Mejorar una respuesta con nuevas peticiones y revisar sus datos.",
          text: [
            "Trata la primera respuesta como un borrador. En el mismo chat puedes pedir: \"Hazlo más corto.\" \"Usa palabras más sencillas.\" \"Dame tres opciones.\" \"Ponlo en una tabla.\" El asistente recuerda los mensajes anteriores de ese chat.",
            "La IA puede inventar cosas: una fecha equivocada, un número de teléfono que no existe, una regla vieja. Esto se llama alucinación. Revisa cualquier dato sobre dinero, salud, leyes, beneficios, fechas, direcciones o números de teléfono en un sitio web oficial (los sitios del gobierno de EE. UU. terminan en .gov) o con una persona que sepa, como un médico, un bibliotecario o un trabajador social.",
            "Pregúntale al asistente \"¿Dónde puedo comprobar esto?\" y luego ve tú mismo a ese sitio."
          ],
          steps: ["Lee la primera respuesta.", "Pide un cambio a la vez.", "Subraya los datos: números, fechas, nombres, reglas.", "Revisa cada dato en una fuente oficial o confiable.", "Si no coinciden, confía en la fuente oficial."],
          words: [["Nueva petición", "un segundo mensaje que le pide a la IA cambiar o explicar su respuesta."], ["Alucinación", "cuando una IA escribe algo que suena cierto pero es inventado."]],
          slides: [
            { title: "La primera respuesta es un borrador", bullets: ["\"Hazlo más corto.\"", "\"Usa palabras más sencillas.\"", "\"Dame tres opciones.\""] },
            { title: "La IA puede inventar cosas", bullets: ["Fechas, números o reglas equivocadas", "Oficinas o libros que no existen"] },
            { title: "Revisa antes de confiar", bullets: ["Dinero, salud, leyes, beneficios, fechas, teléfonos", "Sitios oficiales (.gov) o una persona que sepa"] }
          ],
          tryIt: "Toma tu respuesta de la lección anterior. Pide dos cambios, uno a la vez. Luego elige un dato de la respuesta y revísalo en un sitio web oficial o confiable.",
          youCanNow: "mejorar una respuesta de IA con nuevas peticiones y revisar sus datos antes de usarla."
        },
        {
          title: "Usar la IA de forma justa y segura",
          minutes: 5,
          goal: "Usar la IA sin compartir información privada y de forma justa y honesta.",
          text: [
            "No escribas información privada en un asistente de IA: números de Seguro Social o de identificación, contraseñas, números de banco o de tarjeta, números de expediente médico ni tu dirección completa. Escribe \"[mi número]\" en su lugar. La empresa puede guardar tus chats.",
            "Sé honesto sobre la ayuda de la IA. Muchas escuelas y trabajos tienen reglas sobre esto, así que pregunta antes de entregar un trabajo escrito con IA. Lee y cambia lo que escribe para que suene como tú y diga lo que quieres decir.",
            "Recuerda el sesgo: si una respuesta parece injusta con un grupo de personas, cuestiónala. Y cuidado con las estafas que usan IA, como voces falsas de familiares que piden dinero. Detente, cuelga y vuelve a llamar a un número que conozcas."
          ],
          steps: ["Lee tu instrucción buscando información privada antes de enviarla.", "Cambia los detalles privados por un marcador.", "Revisa las reglas de tu escuela o trabajo sobre la ayuda de la IA.", "Haz tuyas las palabras finales.", "Trata los pedidos de dinero con prisa como una señal de alerta."],
          words: [["Información privada", "datos que podrían permitir a alguien hacerse pasar por ti o quitarte dinero."], ["Marcador", "un texto de reemplazo como \"[mi número]\" que escribes en lugar del dato real."]],
          slides: [
            { title: "No lo pongas en la IA", bullets: ["Números de identificación y de Seguro Social", "Contraseñas, números de banco y de tarjeta", "Números de expediente médico, dirección completa"] },
            { title: "Sé honesto", bullets: ["Sigue las reglas de IA de tu escuela o trabajo", "Edita las palabras para que sean tuyas"] },
            { title: "Mantente alerta", bullets: ["Cuestiona las respuestas que parezcan injustas", "Las voces falsas pueden pedir dinero: cuelga y vuelve a llamar"] }
          ],
          tryIt: "Tarea final: elige una tarea real, escribe una instrucción clara sin información privada, pide dos mejoras, revisa un dato en un sitio web confiable y luego explícale la IA a un amigo en tres oraciones.",
          youCanNow: "usar la IA para terminar una tarea real, protegiendo tu información privada y usándola con honestidad."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar bien la IA",
        questions: [
          { q: "¿Cuál instrucción es la más clara?", options: ["\"voluntarios\"", "\"ayuda\"", "\"cosas para el sábado\"", "\"Dirijo un banco de alimentos. Escribe un mensaje amable de 4 líneas para pedir voluntarios el sábado. Usa palabras sencillas.\""], answer: 3, why: "Da la necesidad, la situación y el formato." },
          { q: "La respuesta usa palabras difíciles. ¿Qué escribes después?", options: ["\"Usa palabras más sencillas.\"", "Tu contraseña", "Nada; cierras la aplicación", "\"Empieza de nuevo para siempre.\""], answer: 0, why: "Una nueva petición le pide a la IA que cambie su respuesta." },
          { q: "La IA da un número de teléfono de una oficina de beneficios. ¿Qué debes hacer?", options: ["Llamar enseguida", "Compartirlo en redes sociales", "Revisarlo en el sitio web oficial de la oficina", "Preguntarle a la IA si está segura y confiar"], answer: 2, why: "La IA puede inventar números; el sitio oficial es la fuente confiable." },
          { q: "¿Qué debes escribir en una instrucción en lugar del número de tu tarjeta bancaria?", options: ["El número real", "Tu PIN", "Los últimos 12 dígitos", "Un marcador como \"[mi tarjeta]\""], answer: 3, why: "Un marcador te permite recibir ayuda sin compartir información privada." },
          { q: "Quieres entregar una tarea que una IA ayudó a escribir. ¿Qué haces primero?", options: ["Revisar las reglas de tu escuela sobre la ayuda de la IA", "Entregarla sin leerla", "Copiar la de un amigo", "Borrarla"], answer: 0, why: "Las escuelas y los trabajos tienen reglas sobre la ayuda de la IA; la honestidad va primero." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la inteligencia artificial",
    questions: [
      { q: "La IA se describe mejor como:", options: ["Una persona dentro de la computadora", "Una marca de teléfono", "Programas que usan patrones para hacer tareas que normalmente hacen las personas", "Un tipo de dirección de correo"], answer: 2, why: "La IA encuentra patrones y hace suposiciones para realizar tareas." },
      { q: "¿Por qué una IA puede sonar segura y aun así equivocarse?", options: ["Está bromeando", "Nunca se equivoca", "Tiene poca batería", "Hace su mejor suposición a partir de patrones, no porque sepa la verdad"], answer: 3, why: "La IA adivina con patrones, y una suposición equivocada puede sonar segura." },
      { q: "¿Qué herramienta es IA generativa?", options: ["Una calculadora", "Un mapa de papel", "Google Gemini", "Un interruptor de luz"], answer: 2, why: "Gemini crea texto nuevo cuando se lo pides, así que es IA generativa." },
      { q: "¿Cómo aprenden hoy la mayoría de los programas de IA?", options: ["Con muchos ejemplos (datos)", "Leyendo tu mente", "Adivinando sin ejemplos", "Con la batería del teléfono"], answer: 0, why: "Aprenden patrones a partir de datos." },
      { q: "Un filtro de spam se entrenó con miles de correos marcados como spam o no spam. Esto es un ejemplo de:", options: ["Entrenamiento con datos", "Cargar un teléfono", "Enviar un mensaje de texto", "Una contraseña"], answer: 0, why: "Aprender con ejemplos etiquetados es entrenamiento." },
      { q: "¿Qué es el sesgo en la IA?", options: ["Una computadora rápida", "Datos que se inclinan hacia un lado y hacen suposiciones injustas con algunas personas", "Un tipo de instrucción", "Un ajuste de brillo del teléfono"], answer: 1, why: "Los datos parciales llevan a suposiciones injustas." },
      { q: "¿Cuál es un ejemplo diario de IA?", options: ["Una engrapadora", "Una aplicación de videos que sugiere qué ver después", "Un sobre de papel", "La llave de una puerta"], answer: 1, why: "Las recomendaciones vienen de la IA." },
      { q: "Siri, Google Assistant y Alexa son:", options: ["Bancos", "Asistentes de voz que usan IA", "Direcciones de correo", "Impresoras"], answer: 1, why: "Usan IA para entender lo que se dice." },
      { q: "Una aplicación sigue sugiriendo cosas que no quieres. Un buen primer paso es:", options: ["Tirar el teléfono", "Buscar en la configuración de la aplicación qué puedes cambiar", "Darle tu contraseña", "No usar ninguna aplicación nunca más"], answer: 1, why: "La mayoría de las aplicaciones tienen una configuración que controla las sugerencias." },
      { q: "¿Qué es una instrucción (prompt)?", options: ["Un cargador de teléfono", "Lo que escribes o dices a un asistente de IA", "El final de un sitio web", "Un tipo de virus"], answer: 1, why: "Una instrucción es tu pedido a la IA." },
      { q: "¿Qué dirección abre el asistente de IA de Microsoft?", options: ["copilot.microsoft.com", "free-ai-prize.win", "microsoft-gift.xyz", "copilot.bank"], answer: 0, why: "copilot.microsoft.com es la dirección oficial de Microsoft." },
      { q: "¿Qué tres partes tiene una instrucción clara?", options: ["Nombre, contraseña, dirección", "Lo que necesitas, la situación, cómo quieres la respuesta", "Color, tamaño, precio", "Hola, gracias, adiós"], answer: 1, why: "Esas tres partes dan una respuesta útil." },
      { q: "La primera respuesta es demasiado larga. Debes:", options: ["Aceptarla de todos modos", "Pagar una aplicación nueva", "Pedir \"Hazlo más corto.\"", "Empezar a escribir detalles privados"], answer: 2, why: "Una nueva petición cambia la respuesta." },
      { q: "Una \"alucinación\" en la IA significa:", options: ["La IA inventó algo que suena cierto", "La pantalla está borrosa", "La aplicación es gratis", "La IA está apagada"], answer: 0, why: "La IA puede inventar datos que parecen reales." },
      { q: "¿Qué debes revisar siempre con una fuente oficial?", options: ["Un poema de cumpleaños", "Un chiste", "Una lista de colores para una fiesta", "Una fecha límite de impuestos"], answer: 3, why: "Las fechas, el dinero y las reglas pueden estar mal y hay que revisarlos." },
      { q: "Los sitios web del gobierno de EE. UU. suelen terminar en:", options: [".win", ".shop", ".gov", ".xyz"], answer: 2, why: "Los sitios del gobierno de EE. UU. usan .gov." },
      { q: "¿Qué es seguro escribir en un asistente de IA?", options: ["Tu número de Seguro Social", "\"[mi número]\" como marcador", "La contraseña de tu banco", "El código de seguridad de tu tarjeta"], answer: 1, why: "Un marcador mantiene fuera la información privada." },
      { q: "Antes de usar palabras escritas por IA en la escuela o el trabajo, debes:", options: ["Revisar las reglas y hacer tuyas las palabras", "Entregarlas sin leerlas", "Quitar tu nombre", "Publicarlas primero en internet"], answer: 0, why: "Usarla con honestidad significa seguir las reglas y editar el trabajo." },
      { q: "Una respuesta de IA parece injusta con un grupo de personas. ¿Qué haces?", options: ["La compartes con todos", "La cuestionas y revisas otras fuentes", "Supones que es cierta", "Cambias tu contraseña"], answer: 1, why: "El sesgo puede aparecer en las respuestas; cuestiónalo." },
      { q: "Una llamada con la voz de un familiar te pide enviar dinero ahora mismo. Debes:", options: ["Enviarlo rápido", "Leerle el número de tu tarjeta", "Darle un código de tu teléfono", "Colgar y volver a llamar al familiar a un número que conozcas"], answer: 3, why: "La IA puede falsificar voces; volver a llamar a un número conocido detiene la estafa." }
    ]
  }
};
