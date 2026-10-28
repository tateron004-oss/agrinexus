"use strict";

// Koach Learn course (Spanish translation of entrepreneurs-ai-productivity). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "entrepreneurs-ai-productivity-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-productivity",
  category: "Entrepreneurs",
  name: "IA para la productividad del negocio",
  skills: "Planear una semana con IA, Vaciar la bandeja de entrada más rápido, Escribir plantillas reutilizables, Hacer un procedimiento estándar de trabajo, Medir el tiempo ahorrado",
  outcome: "usar la IA para planear la semana de tu negocio, manejar el correo más rápido con plantillas de respuesta reutilizables, convertir un trabajo repetido en un procedimiento escrito paso a paso y medir cuánto tiempo ahorraste.",
  about: [
    "A la mayoría de los dueños de negocios no se les acaban las ideas; se les acaban las horas. Este curso es para dueños que lo hacen todo solos y quieren recuperar algo de tiempo.",
    "Vas a usar un asistente de IA gratuito para planear tu semana por prioridades, ordenar y contestar el correo más rápido, crear plantillas para los mensajes que escribes una y otra vez, y escribir un procedimiento sencillo para que un ayudante (o tú en el futuro) haga un trabajo siempre de la misma forma. Luego vas a medir el tiempo que ahorraste.",
    "Cada lección dura unos cinco minutos e incluye una tarea que haces sobre tu negocio real. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma un \"kit para recuperar tiempo\" para tu negocio: una semana planeada con IA con tus tres prioridades principales, tres plantillas de respuesta reutilizables, un procedimiento escrito para un trabajo repetido y un registro sencillo de tiempo de antes y después que muestre los minutos ahorrados en una tarea.",
  chapters: [
    {
      name: "Capítulo 1: Planear y comunicarte más rápido",
      lessons: [
        {
          title: "Planear tu semana por prioridades",
          minutes: 5,
          goal: "Usar la IA para convertir una lista de pendientes desordenada en un plan semanal con tres prioridades.",
          text: [
            "Una lista larga de pendientes esconde lo que importa. La IA es buena para ordenar. Pega tu lista (sin datos privados de clientes) y pídele que agrupe las tareas y sugiera las tres que más le van a ayudar a tu negocio esta semana.",
            "Una forma sencilla de decidir: las tareas que traen dinero o mantienen contentos a los clientes suelen ir primero; las que pueden esperar o que puede hacer otra persona van después. Tú decides el orden final, porque conoces tu negocio.",
            "Luego pide un plan con bloques de tiempo: \"Acomoda esto en mi semana. Trabajo de 8 am a 4 pm, de lunes a viernes, y hago entregas los martes y jueves en la mañana.\" Pasa el plan a tu calendario."
          ],
          steps: ["Escribe en una lista todas las tareas que tienes en la cabeza.", "Pide a la IA que agrupe las tareas y sugiera las tres principales de la semana.", "Elige tú tus tres principales.", "Pide a la IA que acomode las tareas en bloques de tiempo alrededor de tus horarios fijos.", "Copia los bloques a tu calendario."],
          words: [["Prioridad", "una tarea que importa más en este momento."], ["Bloque de tiempo", "un periodo fijo en tu calendario para un tipo de trabajo."]],
          slides: [
            { title: "Las listas largas esconden lo que importa", bullets: ["Pega tu lista en la IA (sin datos privados)", "Pide que agrupe las tareas", "Pide las tres principales de esta semana"] },
            { title: "Lo que suele ir primero", bullets: ["Tareas que traen dinero", "Tareas que mantienen contentos a los clientes", "Tú decides el orden final"] },
            { title: "Ponle bloques de tiempo", bullets: ["Dile a la IA tu horario y tus trabajos fijos", "Recibe un plan semanal", "Pásalo a tu calendario"] }
          ],
          tryIt: "Escribe tu lista completa de tareas de la próxima semana, pide a un asistente de IA que la agrupe y sugiera tres principales, elige tú tus tres principales y consigue un plan con bloques de tiempo que pases a tu calendario.",
          youCanNow: "convertir una lista desordenada en un plan semanal con prioridades claras y bloques de tiempo."
        },
        {
          title: "Vaciar tu bandeja de entrada más rápido",
          minutes: 5,
          goal: "Usar la IA para ordenar correos y hacer borradores de respuestas que revisas antes de enviar.",
          text: [
            "El correo se come las horas. Primero ordénalo: contestar ya (clientes, dinero, urgente), contestar después, solo leer, y borrar o darse de baja. Muchas apps de correo también pueden filtrar los mensajes automáticamente en carpetas o etiquetas.",
            "Para las respuestas, la IA puede convertir tus notas rápidas en un mensaje amable: \"Responde a un cliente que pide cambiar su reserva del viernes. Dile que sí, ofrécele sábado a las 10 am o lunes a las 2 pm, y que sea corto y cálido.\" Gmail y Outlook también pueden ofrecer sugerencias de IA integradas, según tu plan.",
            "Nunca pegues en una herramienta de chat el correo completo de un cliente con su teléfono, su dirección o los datos de su tarjeta. Mejor resume la pregunta con tus palabras. Y lee siempre una respuesta antes de enviarla."
          ],
          steps: ["Ordena tu bandeja en: contestar ya, contestar después, solo leer, borrar.", "Para cada correo de contestar ya, escribe una nota de una línea con lo que quieres decir.", "Pide a la IA que convierta la nota en una respuesta corta.", "Léela, corrígela y envíala tú."],
          words: [["Filtro", "una regla del correo que mueve los mensajes a una carpeta o etiqueta automáticamente."], ["Darse de baja", "el enlace que hace que una empresa deje de enviarte correos."]],
          slides: [
            { title: "Primero ordena", bullets: ["Contestar ya: clientes, dinero, urgente", "Contestar después", "Solo leer, o borrar y darse de baja"] },
            { title: "La IA convierte notas en respuestas", bullets: ["Escribe en una línea lo que quieres decir", "Pide una respuesta corta y cálida", "La IA integrada puede ayudar en Gmail u Outlook"] },
            { title: "Mantente seguro", bullets: ["Resume tú la pregunta del cliente", "Nada de teléfonos, direcciones ni tarjetas", "Lee antes de enviar"] }
          ],
          tryIt: "Ordena la bandeja de hoy en los cuatro grupos. Para dos correos de contestar ya, escribe una nota de una línea, deja que la IA haga el borrador de la respuesta, revísala y envíala. Mide cuánto tardaste.",
          youCanNow: "ordenar el correo por importancia y enviar más rápido respuestas revisadas con ayuda de la IA."
        },
        {
          title: "Plantillas reutilizables para los mensajes que escribes una y otra vez",
          minutes: 4,
          goal: "Crear tres plantillas de respuesta para las preguntas que más hacen los clientes.",
          text: [
            "Si contestas la misma pregunta cada semana (precios, horario, cómo reservar, política de reembolso), escribe la respuesta una vez y reutilízala. La IA te puede ayudar a escribir una plantilla clara y amable.",
            "Una buena plantilla tiene espacios en blanco que llenas: \"Hola [nombre], gracias por preguntar por [servicio]. Nuestro precio para [tamaño] es [precio]. Puedes reservar en [enlace o número].\" Pon tus datos reales en la plantilla y revísalos cada vez que cambien los precios o las políticas.",
            "Guarda las plantillas donde las encuentres rápido: un documento, la app de notas de tu teléfono o la función de respuestas guardadas que tienen muchas apps de correo y de mensajería para negocios."
          ],
          steps: ["Haz la lista de las cinco preguntas que más hacen los clientes.", "Elige las tres principales.", "Pide a la IA una plantilla corta y amable para cada una, con [espacios en blanco].", "Llena tus datos reales y revísalos.", "Guarda las plantillas donde las tengas a la mano."],
          words: [["Plantilla", "un mensaje ya hecho con espacios en blanco que llenas cada vez."], ["Respuesta guardada", "una función de correo o mensajería que guarda una plantilla para usarla con un clic."]],
          slides: [
            { title: "Escríbelo una vez, reutilízalo", bullets: ["Precios, horario, reservas, reembolsos", "La IA te ayuda a escribirlo claro"] },
            { title: "Una buena plantilla", bullets: ["Amable y corta", "[Espacios] para nombre, servicio, precio", "Tus datos reales, revisados"] },
            { title: "Tenlas a la mano", bullets: ["Un documento o una app de notas", "Respuestas guardadas en el correo o la mensajería", "Actualízalas cuando cambien los precios"] }
          ],
          tryIt: "Escribe las tres preguntas que más te hacen los clientes y usa la IA para hacer una plantilla para cada una. Llena tus datos reales y guárdalas.",
          youCanNow: "escribir y reutilizar plantillas para las preguntas de clientes que más contestas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear y comunicarte más rápido",
        questions: [
          { q: "¿Qué tareas suelen merecer estar entre tus tres principales de la semana?", options: ["Las divertidas", "Las que traen dinero o mantienen contentos a los clientes", "Las que toman 30 segundos", "Las que te pidió otra persona"], answer: 1, why: "Las tareas de dinero y de clientes mantienen el negocio funcionando." },
          { q: "¿Qué debes decirle a la IA para obtener un plan útil con bloques de tiempo?", options: ["Nada", "El saldo de tu banco", "Tu contraseña", "Tu horario de trabajo y tus trabajos fijos"], answer: 3, why: "La IA necesita tu horario y tus compromisos fijos para acomodar las tareas." },
          { q: "El correo de un cliente incluye su dirección y su número de tarjeta. ¿Cómo pides ayuda a la IA para responder?", options: ["Resumes su pregunta con tus palabras", "Pegas el correo completo", "Se lo reenvías a la empresa de IA", "Ignoras al cliente"], answer: 0, why: "Resumir mantiene los datos privados fuera de la herramienta de IA." },
          { q: "¿Cuál es una buena plantilla?", options: ["\"Ver sitio web\"", "Un mensaje distinto desde cero cada vez", "\"Hola [nombre], nuestro precio para [servicio] es [precio]. Reserva en [enlace].\"", "Un mensaje con el número de tarjeta de un cliente"], answer: 2, why: "Tiene espacios en blanco que llenas con datos reales." },
          { q: "Subieron tus precios. ¿Qué debes hacer con tus plantillas?", options: ["Borrarlas todas", "Nada", "Actualizarlas y volver a revisarlas", "Dejar que la IA adivine los precios nuevos"], answer: 2, why: "Las plantillas deben coincidir con tus datos actuales." }
        ]
      }
    },
    {
      name: "Capítulo 2: Sistemas que ahorran tiempo",
      lessons: [
        {
          title: "Escribir un procedimiento estándar de trabajo",
          minutes: 5,
          goal: "Convertir con IA un trabajo que repites en un procedimiento escrito paso a paso.",
          text: [
            "Un procedimiento estándar de trabajo (en inglés, SOP) es una lista escrita de pasos para hacer un trabajo siempre de la misma forma. Permite que un ayudante haga el trabajo sin llamarte y evita errores cuando estás ocupado.",
            "Una forma fácil de hacer uno: haz el trabajo una vez mientras dices o escribes cada paso en notas rápidas. Luego pide a la IA: \"Convierte estas notas en un procedimiento claro y numerado que un ayudante nuevo pueda seguir. Agrega una lista de verificación corta al final.\"",
            "Prueba el procedimiento: dáselo a alguien (o síguelo tú palabra por palabra) y arregla cualquier paso que haya sido confuso o que falte."
          ],
          steps: ["Elige un trabajo que repites cada semana, como abrir la tienda o empacar un pedido.", "Hazlo una vez mientras escribes notas rápidas de cada paso.", "Pide a la IA que convierta las notas en un procedimiento numerado con lista de verificación.", "Pruébalo siguiéndolo al pie de la letra, o pide a un ayudante que lo pruebe.", "Arregla los pasos poco claros y guarda la versión final."],
          words: [["Procedimiento estándar (SOP)", "pasos escritos para hacer un trabajo siempre de la misma forma."], ["Lista de verificación", "una lista corta que vas marcando para asegurarte de que no se te pasó nada."]],
          slides: [
            { title: "Lo que hace un procedimiento estándar", bullets: ["El mismo trabajo, de la misma forma, siempre", "Un ayudante lo hace sin llamarte", "Menos errores cuando estás ocupado"] },
            { title: "Hazlo con IA", bullets: ["Haz el trabajo una vez y escribe notas rápidas", "Pide a la IA pasos numerados y una lista de verificación"] },
            { title: "Pruébalo", bullets: ["Síguelo palabra por palabra", "O pide a un ayudante que lo pruebe", "Arregla los pasos confusos o que faltan"] }
          ],
          tryIt: "Elige un trabajo semanal, escribe notas rápidas mientras lo haces y pide a la IA que las convierta en un procedimiento numerado con lista de verificación. Pruébalo una vez y arréglalo.",
          youCanNow: "convertir un trabajo repetido en un procedimiento escrito y probado."
        },
        {
          title: "Resúmenes e investigación rápida",
          minutes: 4,
          goal: "Usar la IA para resumir documentos largos y hacer investigaciones rápidas y revisadas.",
          text: [
            "Los dueños de negocios reciben documentos largos: condiciones de proveedores, reglas de subsidios, borradores de contratos de alquiler, informes. La IA los puede resumir: \"Resume esto en 8 puntos. Haz la lista de las fechas, los cobros o las cosas que tengo que hacer.\" Quita primero los datos privados y lee las partes originales que importan, sobre todo las que hablan de dinero o de obligaciones legales.",
            "La IA también puede acelerar una investigación: comparar proveedores, explicar un término nuevo o hacer la lista de preguntas para un contador. Pídele las fuentes y luego ábrelas tú.",
            "Para preguntas legales, de impuestos o de licencias, usa la IA para preparar buenas preguntas y luego busca la respuesta en el sitio oficial de la agencia o con un profesional."
          ],
          steps: ["Quita los datos privados del documento.", "Pide un resumen corto más las fechas, los cobros y las obligaciones.", "Lee las secciones originales sobre dinero u obligaciones legales.", "Para investigar, pide las fuentes y ábrelas tú."],
          words: [["Resumen", "una versión corta que conserva los puntos principales."], ["Condiciones", "las reglas y los términos de un acuerdo."]],
          slides: [
            { title: "Resume documentos largos", bullets: ["Primero quita los datos privados", "Pide puntos, fechas, cobros y obligaciones", "Lee tú las partes de dinero y legales"] },
            { title: "Investigación rápida", bullets: ["Comparar opciones, explicar términos", "Pide las fuentes", "Ábrelas tú"] },
            { title: "Temas legales, impuestos, licencias", bullets: ["Usa la IA para preparar preguntas", "Busca las respuestas en la agencia o con un profesional"] }
          ],
          tryIt: "Toma un documento largo de tu negocio (sin datos privados), pide a la IA un resumen de 8 puntos con fechas, cobros y obligaciones, y compáralo con el original.",
          youCanNow: "obtener un resumen rápido y revisado de un documento largo del negocio."
        },
        {
          title: "Medir el tiempo que ahorras",
          minutes: 5,
          goal: "Registrar tu tiempo antes y después de usar la IA en una tarea para ver si de verdad ayuda.",
          text: [
            "La IA debe ahorrarte tiempo, no solo hacerte sentir ocupado. Mídelo. Elige una tarea, como contestar preguntas de reservas o escribir la publicación semanal. Anota cuánto tarda a la manera de antes y luego cuánto tarda con IA, incluido el tiempo para revisar y corregir.",
            "Multiplica: los minutos ahorrados cada vez, por cuántas veces la haces a la semana. Diez minutos ahorrados en una tarea que haces 15 veces a la semana son 150 minutos, dos horas y media.",
            "Si una tarea no es más rápida con IA, o necesita tantas correcciones que no vale la pena, deja de usar la IA para esa tarea. Pon el tiempo ahorrado en las tareas que hacen crecer tu negocio."
          ],
          steps: ["Elige una tarea que haces seguido.", "Mide una vez cuánto tardas a la manera de antes.", "Mide cuánto tardas con IA, incluido revisar y corregir.", "Multiplica los minutos ahorrados por las veces que la haces cada semana.", "Mantén, cambia o deja la IA para esa tarea."],
          words: [["Registro de tiempo", "una anotación sencilla de cuánto tardan las tareas."]],
          slides: [
            { title: "Mide, no adivines", bullets: ["Mide la manera de antes", "Mide la manera con IA, incluida la revisión", "Compara"] },
            { title: "Haz las cuentas", bullets: ["Minutos ahorrados x veces por semana", "10 min x 15 veces = 150 min a la semana"] },
            { title: "Decide", bullets: ["¿Más rápido? Mantenlo", "¿Más lento o demasiadas correcciones? Déjalo", "Usa el tiempo ahorrado para crecer"] }
          ],
          tryIt: "Tarea final: arma tu kit para recuperar tiempo: tu semana planeada con IA, tus tres plantillas, tu procedimiento estándar y un registro de tiempo de antes y después para una tarea, con los minutos ahorrados por semana.",
          youCanNow: "comprobar si la IA te ahorra tiempo y decidir dónde usarla en tu negocio."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Sistemas que ahorran tiempo",
        questions: [
          { q: "¿Qué es un procedimiento estándar de trabajo (SOP)?", options: ["Un procedimiento escrito paso a paso para un trabajo repetido", "Un tipo de factura", "Una publicación en redes sociales", "Un formulario de impuestos"], answer: 0, why: "Permite hacer un trabajo siempre de la misma forma." },
          { q: "¿Cómo sabes que tu procedimiento funciona?", options: ["Le preguntas a la IA si está bien", "Lo imprimes a color", "Lo haces más largo", "Lo sigues palabra por palabra o pides a un ayudante que lo pruebe"], answer: 3, why: "Probarlo muestra los pasos que faltan o que confunden." },
          { q: "La IA resumió un contrato de alquiler. ¿Qué partes debes seguir leyendo tú?", options: ["Ninguna", "Las partes sobre dinero y obligaciones legales", "Solo el título", "Los números de página"], answer: 1, why: "Los resúmenes pueden omitir o decir mal detalles importantes." },
          { q: "Ahorras 5 minutos cada vez en una tarea que haces 20 veces a la semana. ¿Cuánto tiempo es?", options: ["100 minutos a la semana", "25 minutos a la semana", "5 minutos a la semana", "20 minutos a la semana"], answer: 0, why: "5 x 20 = 100 minutos." },
          { q: "Usar la IA en una tarea tarda más por todas las correcciones. ¿Qué debes hacer?", options: ["Usar dos herramientas de IA a la vez", "Seguir usándola de todos modos", "Dejar de usar la IA para esa tarea", "Dejar de revisar el trabajo"], answer: 2, why: "Usa la IA solo donde de verdad ahorra tiempo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la productividad del negocio",
    questions: [
      { q: "El primer paso para planear una semana con IA es:", options: ["Comprar una app nueva", "Escribir todas las tareas", "Borrar tu calendario", "Preguntarle a un cliente"], answer: 1, why: "La IA solo puede ordenar lo que tú anotas." },
      { q: "Al elegir tus tres principales, ¿quién decide el orden final?", options: ["Tu app de correo", "La IA", "Un competidor", "Tú"], answer: 3, why: "La IA sugiere; tú conoces tu negocio." },
      { q: "Un bloque de tiempo es:", options: ["Un tipo de correo", "Un reloj roto", "Un cargo por atraso", "Un periodo fijo en tu calendario para un tipo de trabajo"], answer: 3, why: "Los bloques de tiempo protegen el tiempo para las prioridades." },
      { q: "¿Qué grupo de la bandeja de entrada va primero?", options: ["Boletines", "Contestar ya: clientes, dinero, urgente", "Recibos viejos", "Anuncios"], answer: 1, why: "Los correos de clientes y de dinero son los que más importan." },
      { q: "Un filtro de correo:", options: ["Envía dinero", "Borra tu cuenta", "Mueve mensajes a una carpeta automáticamente", "Escribe respuestas"], answer: 2, why: "Los filtros ordenan el correo sin ti." },
      { q: "Una forma segura de pedir ayuda a la IA con el correo de un cliente es:", options: ["Resumir la pregunta con tus palabras", "Pegar su número de tarjeta", "Pegar la dirección de su casa", "Reenviar su contraseña"], answer: 0, why: "Mantén los datos privados de los clientes fuera de las herramientas de IA." },
      { q: "Antes de enviar una respuesta hecha por IA debes:", options: ["Agregar un descuento al azar", "Enviarla sin leer", "Leerla y corregirla", "Copiarla a todos los clientes"], answer: 2, why: "Tú eres responsable de lo que envías." },
      { q: "Las plantillas sirven mejor para:", options: ["Preguntas que los clientes hacen una y otra vez", "Disputas legales de una sola vez", "Transferencias bancarias", "Contraseñas"], answer: 0, why: "Escribe la respuesta una vez y reutilízala." },
      { q: "Los espacios como [nombre] y [precio] en una plantilla son:", options: ["Errores", "Lugares que llenas cada vez", "Contraseñas", "Enlaces a la IA"], answer: 1, why: "Hacen que una sola plantilla sirva para muchos clientes." },
      { q: "¿Dónde puedes tener las plantillas a la mano?", options: ["En el chat de IA con datos de clientes", "Solo en tu cabeza", "En una nota pegada en la puerta", "En respuestas guardadas del correo o en una app de notas"], answer: 3, why: "Las respuestas guardadas y las notas las hacen rápidas de usar." },
      { q: "Un procedimiento estándar ayuda porque:", options: ["Un ayudante puede hacer el trabajo igual sin llamarte", "Hace los trabajos más largos", "Reemplaza a los clientes", "Es un formulario de impuestos"], answer: 0, why: "Los pasos escritos hacen el trabajo repetible." },
      { q: "La forma más rápida de empezar un procedimiento estándar es:", options: ["Saltarse la prueba", "Adivinar los pasos", "Copiar el manual de un competidor", "Hacer el trabajo una vez escribiendo notas rápidas y pedir a la IA que las ordene"], answer: 3, why: "Notas reales más el orden de la IA dan pasos exactos." },
      { q: "Una lista de verificación al final de un procedimiento:", options: ["Reemplaza los pasos", "Agrega un cobro", "Ayuda a asegurar que no se te pasó nada", "Es un contrato legal"], answer: 2, why: "Marcar los puntos detecta los pasos olvidados." },
      { q: "Antes de pedir a la IA que resuma un contrato con un proveedor, debes:", options: ["Agregar tu acceso al banco", "Quitar los datos privados", "Firmarlo", "Enviárselo a los clientes"], answer: 1, why: "Mantén la información privada fuera de las herramientas de IA." },
      { q: "Un buen pedido de resumen pide:", options: ["Una versión más larga", "Solo el título", "Chistes", "Los puntos principales más fechas, cobros y lo que debes hacer"], answer: 3, why: "Las fechas, los cobros y las obligaciones son sobre lo que actúas." },
      { q: "Cuando la IA te da fuentes de investigación, debes:", options: ["No mirarlas nunca", "Confiar ciegamente en los enlaces", "Abrirlas y leerlas tú", "Compartirlas como hechos de inmediato"], answer: 2, why: "La IA puede dar fuentes equivocadas o inventadas." },
      { q: "Para una pregunta sobre licencias, la IA se usa mejor para:", options: ["Preparar preguntas para la agencia oficial o un profesional", "Dar la respuesta legal final", "Hacer el trámite por ti", "Pagar la tarifa"], answer: 0, why: "Las fuentes oficiales y los profesionales dan la respuesta final." },
      { q: "Al medir el tiempo con IA, incluye:", options: ["Solo los segundos que tarda la IA en responder", "El tiempo para revisar y corregir el trabajo de la IA", "Nada", "Tu hora de comida"], answer: 1, why: "Revisar es parte del costo real." },
      { q: "Diez minutos ahorrados en una tarea que haces 15 veces a la semana son:", options: ["10 minutos", "25 minutos", "150 minutos", "1,500 minutos"], answer: 2, why: "10 x 15 = 150 minutos." },
      { q: "¿A dónde debe ir el tiempo ahorrado?", options: ["A las tareas que hacen crecer tu negocio", "A más correo", "A probar todas las apps nuevas", "A ningún lado"], answer: 0, why: "Ahorrar tiempo sirve para usarlo en crecer." }
    ]
  }
};
