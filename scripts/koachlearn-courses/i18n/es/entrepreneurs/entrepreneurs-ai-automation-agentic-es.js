"use strict";

// Koach Learn course (Spanish translation of entrepreneurs-ai-automation-agentic). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "entrepreneurs-ai-automation-agentic-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-automation-agentic",
  category: "Entrepreneurs",
  name: "Automatización con IA y flujos de trabajo con agentes",
  skills: "Trazar un flujo de trabajo, Pensar en disparadores y acciones, Crear una automatización sin código, Agregar un paso de IA, Poner límites a los agentes de IA, Vigilar y arreglar automatizaciones",
  outcome: "trazar un proceso repetido de tu negocio, crear para él una automatización sin código que funcione con un paso de IA, agregar un límite de aprobación humana, y probarla y vigilarla para que falle de forma segura.",
  about: [
    "Automatizar significa que una computadora hace por ti un trabajo repetido cuando pasa algo: alguien llena un formulario, llega un correo, se paga un pedido. La IA agrega la capacidad de leer, ordenar y escribir como parte de ese trabajo. Las herramientas \"con agentes\" van más allá: les das una meta y ellas planean y dan varios pasos por su cuenta.",
    "Este curso es para dueños de negocios que quieren dejar de copiar y pegar la misma información todo el día. Vas a trazar un proceso, aprender a pensar en disparadores y acciones, crear una automatización real con una herramienta sin código (como Zapier, Make o Microsoft Power Automate), agregar un paso de IA y poner límites para que nada importante pase sin tu aprobación.",
    "Cada lección dura unos cinco minutos e incluye una tarea práctica. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las funciones de las herramientas y los límites de los planes gratuitos cambian seguido, así que revisa las páginas de precios y de ayuda de cada herramienta."
  ],
  finalTask: "Crea y prueba una automatización para tu negocio, por ejemplo: cuando un cliente llena tu formulario de consultas, agregar su pedido a una hoja de cálculo, hacer que la IA escriba el borrador de una respuesta y enviarte el borrador para que lo apruebes antes de que algo le llegue al cliente. Escribe un registro de una página: el mapa del flujo de trabajo, el disparador y las acciones, la instrucción para la IA, el paso de aprobación, tres resultados de prueba y lo que vas a revisar cada semana.",
  chapters: [
    {
      name: "Capítulo 1: Pensar en flujos de trabajo",
      lessons: [
        {
          title: "Trazar un proceso que repites",
          minutes: 5,
          goal: "Dibujar un proceso repetido del negocio como una lista de pasos de principio a fin.",
          text: [
            "Antes de automatizar cualquier cosa, escríbela. Un flujo de trabajo son los pasos por los que pasa un trabajo de principio a fin. Ejemplo, la consulta de un cliente nuevo: llega el formulario, copias los datos a una hoja de cálculo, escribes una respuesta, agregas un recordatorio para darle seguimiento.",
            "Elige un proceso que pase seguido, que siga los mismos pasos cada vez y que te haga perder tiempo copiando, pegando o volviendo a escribir. Esos son los mejores para automatizar.",
            "La IA te puede ayudar a trazarlo. Describe con tus palabras lo que haces y pídele: \"Convierte esto en un flujo de trabajo numerado. Marca qué pasos son copiar información, cuáles necesitan una decisión y cuáles necesitan escribir.\""
          ],
          steps: ["Elige un proceso que haces al menos cada semana.", "Descríbeselo con tus palabras a un asistente de IA.", "Pide un flujo de trabajo numerado, marcando los pasos de copiar, de decidir y de escribir.", "Compara el mapa con lo que de verdad haces y corrígelo."],
          words: [["Flujo de trabajo", "los pasos por los que pasa un trabajo de principio a fin."], ["Automatizar", "hacer que una computadora haga un trabajo repetido sin que tú hagas cada paso."]],
          slides: [
            { title: "Primero escríbelo", bullets: ["Flujo de trabajo = los pasos de principio a fin", "Ejemplo: formulario, hoja de cálculo, respuesta, recordatorio"] },
            { title: "Los mejores procesos para automatizar", bullets: ["Pasan seguido", "Siempre los mismos pasos", "Mucho copiar y volver a escribir"] },
            { title: "Trázalo con IA", bullets: ["Describe lo que haces", "Pide pasos numerados", "Marca los pasos de copiar, decidir y escribir"] }
          ],
          tryIt: "Traza con ayuda de la IA un proceso que repites cada semana. Marca cada paso como copiar, decidir o escribir, y corrige lo que la IA haya entendido mal.",
          youCanNow: "trazar un proceso repetido del negocio como pasos claros."
        },
        {
          title: "Disparadores y acciones",
          minutes: 5,
          goal: "Convertir el mapa de tu flujo de trabajo en un disparador y una lista de acciones.",
          text: [
            "Toda automatización tiene un disparador y una o más acciones. El disparador es lo que la pone en marcha: \"una nueva respuesta en el formulario\", \"un correo nuevo con la palabra factura\", \"un pedido nuevo pagado\". Las acciones son lo que pasa después: \"agregar una fila a una hoja de cálculo\", \"enviarme un mensaje\", \"crear un evento en el calendario\".",
            "Los pasos de copiar se convierten fácil en acciones. Los pasos de escribir se pueden convertir en acciones de IA. Los pasos de decidir normalmente se quedan contigo, o se convierten en un paso de aprobación donde la automatización espera tu sí.",
            "Las herramientas sin código como Zapier, Make y Microsoft Power Automate conectan con disparadores y acciones las apps que ya usas. La mayoría tienen planes gratuitos con límites; revisa en la página de precios de cada herramienta lo que incluye hoy."
          ],
          steps: ["Encuentra lo que pone en marcha tu flujo de trabajo: ese es el disparador.", "Convierte cada paso de copiar en una acción.", "Convierte los pasos de escribir en acciones de IA.", "Convierte los pasos de decidir en un paso de aprobación o déjalos manuales.", "Escríbelo así: Cuando [disparador], entonces [acción 1], [acción 2]..."],
          words: [["Disparador", "lo que pone en marcha una automatización."], ["Acción", "un paso que hace la automatización después del disparador."], ["Herramienta sin código", "una herramienta que te deja crear automatizaciones haciendo clic y eligiendo opciones, sin programar."]],
          slides: [
            { title: "Un disparador, algunas acciones", bullets: ["Disparador: lo que la pone en marcha", "Acciones: lo que pasa después"] },
            { title: "Convierte pasos en acciones", bullets: ["Pasos de copiar: acciones fáciles", "Pasos de escribir: acciones de IA", "Decisiones: un paso de aprobación o tú"] },
            { title: "Herramientas sin código", bullets: ["Zapier, Make, Microsoft Power Automate", "Conectan las apps que ya usas", "Revisa en su sitio los límites del plan gratuito"] }
          ],
          sources: [{ name: "Zapier: precios (en inglés)", url: "https://zapier.com/pricing" }, { name: "Make: precios (en inglés)", url: "https://www.make.com/en/pricing" }],
          tryIt: "Escribe tu flujo de trabajo como \"Cuando [disparador], entonces [acciones]\". Marca qué acción es de IA y dónde quieres un paso de aprobación.",
          youCanNow: "describir cualquier automatización como un disparador más acciones, con las decisiones bajo tu control."
        },
        {
          title: "Crear tu primera automatización sin código",
          minutes: 6,
          goal: "Crear una automatización que funcione y que pase las respuestas de un formulario a una hoja de cálculo y te avise.",
          text: [
            "Empieza con una automatización sencilla y segura: cuando alguien llena tu formulario de consultas (por ejemplo un formulario de Google Forms o Microsoft Forms), agregar sus respuestas a una hoja de cálculo y enviarte un aviso. Todavía no le llega nada al cliente.",
            "En tu herramienta sin código, crea una automatización nueva, elige la app del formulario como disparador, conecta tu cuenta y elige el formulario. Luego agrega una acción para la hoja de cálculo y relaciona cada pregunta del formulario con una columna. Agrega una segunda acción para enviarte un correo o un mensaje.",
            "Pruébala con una consulta falsa usando un nombre inventado como \"Cliente de Prueba\". Revisa que la fila aparezca en las columnas correctas y que te haya llegado el mensaje. Solo entonces actívala."
          ],
          steps: ["Haz un formulario de consultas corto con nombre, correo y pedido.", "En la herramienta sin código, elige el formulario como disparador.", "Agrega una acción de hoja de cálculo y relaciona las preguntas con las columnas.", "Agrega una acción para avisarte.", "Prueba con datos de \"Cliente de Prueba\", revisa los resultados y luego actívala."],
          words: [["Conectar una cuenta", "darle permiso a la herramienta de automatización para usar una de tus apps."], ["Relación de campos", "conectar cada dato con el lugar donde debe ir, como una pregunta del formulario con una columna de la hoja."]],
          slides: [
            { title: "Empieza sencillo y seguro", bullets: ["Respuestas del formulario a una hoja de cálculo", "Un aviso para ti", "Todavía no le llega nada al cliente"] },
            { title: "Créala", bullets: ["Disparador: nueva respuesta en el formulario", "Acción: agregar fila a la hoja, relacionar campos", "Acción: avisarte"] },
            { title: "Prueba antes de activar", bullets: ["Usa datos de \"Cliente de Prueba\"", "Revisa las columnas y el aviso", "Luego actívala"] }
          ],
          tryIt: "Crea en el plan gratuito de una herramienta sin código la automatización de formulario a hoja de cálculo más aviso. Pruébala con datos inventados y confirma que funciona.",
          youCanNow: "crear y probar una automatización sencilla sin código entre apps que usas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Pensar en flujos de trabajo",
        questions: [
          { q: "¿Qué proceso conviene automatizar primero?", options: ["Una decisión legal de una sola vez", "Uno que pasa seguido, con los mismos pasos y mucho copiar", "Algo que haces una vez al año", "Contratar a tu primer empleado"], answer: 1, why: "El trabajo de copiar, frecuente y repetido, es el que más tiempo ahorra." },
          { q: "En \"Cuando llega una nueva respuesta del formulario, agregar una fila a la hoja\", ¿cuál es el disparador?", options: ["Tu correo", "Agregar una fila a la hoja", "La hoja de cálculo", "Llega una nueva respuesta del formulario"], answer: 3, why: "El disparador es lo que pone en marcha la automatización." },
          { q: "¿Qué suele pasar con los pasos de decidir en una automatización?", options: ["Se convierten en un paso de aprobación o se quedan contigo", "La herramienta adivina", "Se borran", "Decide el cliente"], answer: 0, why: "Las decisiones necesitan tu criterio." },
          { q: "¿Qué es la relación de campos?", options: ["Elegir un tipo de letra", "Dibujar el mapa de una granja", "Conectar cada dato con el lugar donde debe ir", "Pagar una cuenta"], answer: 2, why: "Conecta las preguntas del formulario con las columnas de la hoja." },
          { q: "¿Qué datos debes usar para probar una automatización nueva?", options: ["Tu contraseña", "El número de tarjeta de un cliente real", "Datos de prueba inventados como \"Cliente de Prueba\"", "Ninguna prueba"], answer: 2, why: "Los datos falsos te dejan probar sin riesgo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Agregar IA y mantener el control",
      lessons: [
        {
          title: "Agregar un paso de IA",
          minutes: 5,
          goal: "Agregar una acción de IA que escriba el borrador de una respuesta u ordene un pedido.",
          text: [
            "Muchas herramientas sin código te dejan agregar una acción de IA: enviar un texto a un modelo de IA con una instrucción y recibir su respuesta como parte de la automatización. Usos comunes: clasificar una consulta en una categoría, sacar los datos clave o escribir el borrador de una respuesta. En algunas herramientas el paso de IA solo está en los planes de pago (al revisarlo en octubre de 2026, los pasos de IA de Zapier necesitaban un plan de pago); revisa la página de precios. Si el tuyo no lo incluye, haz que la automatización te envíe el pedido y pégalo tú en un asistente de chat gratuito.",
            "Escribe con cuidado la instrucción para la IA, como una instrucción reutilizable: \"Lee este pedido de un cliente. Responde en menos de 100 palabras, de forma amable y clara. Usa solo los datos del negocio que te doy aquí: [horario, servicios]. Nunca des un precio. Si tienes dudas, escribe [REVISAR].\"",
            "Envía el borrador de la IA a TI, no al cliente. Piensa en qué información del cliente pasa al servicio de IA; revisa las condiciones de datos y de privacidad de la herramienta, y no envíes por ahí números de tarjeta, números de identificación ni datos de salud."
          ],
          steps: ["Agrega una acción de IA después del paso de la hoja de cálculo.", "Escribe una instrucción cuidadosa con reglas y los datos de tu negocio.", "Pasa solo el texto del pedido que la IA necesita.", "Envíate el borrador de la IA para revisarlo.", "Prueba con tres pedidos inventados distintos."],
          words: [["Acción de IA", "un paso de una automatización que envía un texto a una IA y usa su respuesta."], ["Condiciones de datos", "las reglas sobre cómo una herramienta guarda y usa la información que le envías."]],
          slides: [
            { title: "Lo que puede hacer un paso de IA", bullets: ["Clasificar un pedido en una categoría", "Sacar los datos clave", "Hacer el borrador de una respuesta", "Quizá necesite un plan de pago: revisa los precios"] },
            { title: "Una instrucción cuidadosa", bullets: ["Extensión y tono", "Usar solo los datos dados", "Nunca dar precios; marcar [REVISAR] si hay dudas"] },
            { title: "Mantenlo seguro", bullets: ["El borrador va para ti, no para el cliente", "Envía solo lo que la IA necesita", "Revisa las condiciones de datos de la herramienta"] }
          ],
          sources: [{ name: "Zapier: precios, pasos de IA y límites de los planes (en inglés)", url: "https://zapier.com/pricing" }],
          tryIt: "Agrega a tu automatización un paso de IA que escriba el borrador de una respuesta y te lo envíe. Pruébalo con tres pedidos inventados distintos y anota cualquier error.",
          youCanNow: "agregar un paso de IA a una automatización con reglas claras y sin datos privados."
        },
        {
          title: "Agentes y límites",
          minutes: 5,
          goal: "Decidir qué puede hacer solo un agente de IA y qué necesita tu aprobación.",
          text: [
            "A un agente de IA se le da una meta, y planea y da varios pasos por su cuenta, como buscar, llenar formularios o usar tus apps. Los agentes pueden ahorrar tiempo, pero también pueden equivocarse rápido y en grande.",
            "Los límites son las reglas que pones. Una regla sencilla: un agente puede leer, ordenar y hacer borradores por su cuenta, pero debe tener tu aprobación antes de enviar algo a un cliente, gastar dinero, borrar algo, cambiar precios o registrarse en algo. Dale acceso solo a las apps y carpetas que necesita.",
            "Guarda un registro de lo que hizo el agente (la mayoría de las herramientas tienen un historial o registro) y empieza con tareas pequeñas y de bajo riesgo. Dale más libertad solo después de que haya funcionado bien por un tiempo."
          ],
          steps: ["Haz la lista de lo que va a hacer el agente.", "Marca cada acción: permitida por su cuenta, o necesita tu aprobación.", "Exige aprobación para enviar, gastar, borrar, poner precios y registrarse.", "Limita su acceso a solo las apps y carpetas que necesita.", "Revisa con frecuencia su historial o registro."],
          words: [["Agente de IA", "una herramienta de IA que da varios pasos por su cuenta para lograr una meta."], ["Límite", "una regla que impide que una automatización o un agente haga algo riesgoso."], ["Registro", "una lista de lo que hizo una automatización o un agente y cuándo."]],
          slides: [
            { title: "Qué es un agente", bullets: ["Recibe una meta", "Planea y da varios pasos solo", "Rápido, también para equivocarse"] },
            { title: "Necesita tu aprobación", bullets: ["Enviar algo a los clientes", "Gastar dinero o cambiar precios", "Borrar cosas o registrarse en algo"] },
            { title: "Limita y vigila", bullets: ["Acceso solo a lo que necesita", "Revisa su historial o registro", "Empieza en pequeño, da libertad poco a poco"] }
          ],
          tryIt: "Escribe una lista de límites para tu automatización: lo que puede hacer por su cuenta y las cinco cosas que siempre necesitan tu aprobación. Agrega un paso de aprobación si tu herramienta lo permite.",
          youCanNow: "poner límites para que las automatizaciones y los agentes nunca hagan pasos riesgosos sin ti."
        },
        {
          title: "Probar, vigilar y fallar de forma segura",
          minutes: 5,
          goal: "Probar tu automatización en busca de problemas y organizar una revisión semanal.",
          text: [
            "Las automatizaciones se descomponen: una app cambia, se le cambia el nombre a una pregunta del formulario, vence una contraseña o la IA da una respuesta rara. Prueba con datos raros: un campo vacío, un mensaje muy largo, un mensaje en otro idioma, un mensaje grosero.",
            "Configúrala para que falle de forma segura: si algo sale mal, la automatización debe detenerse y avisarte, no enviar un mensaje a medias. La mayoría de las herramientas te pueden enviar un correo cuando una ejecución falla; actívalo.",
            "Una vez por semana, mira el registro: cuántas ejecuciones, cuántas fallaron y dos o tres borradores de la IA. Cuenta los minutos ahorrados. Si te da más trabajo del que te ahorra, cámbiala o apágala."
          ],
          steps: ["Prueba con un campo vacío, un mensaje muy largo y un mensaje fuera de lo común.", "Activa los avisos de fallas.", "Asegúrate de que una falla detenga la ejecución en lugar de enviar algo.", "Cada semana, revisa las ejecuciones, las fallas y algunos borradores de la IA.", "Mantenla, cámbiala o apágala según el tiempo ahorrado."],
          words: [["Fallar de forma segura", "cuando algo sale mal, detenerse y avisar a una persona en lugar de hacer algo dañino."], ["Ejecución", "cada vez que la automatización arranca y hace sus pasos."]],
          slides: [
            { title: "Las automatizaciones se descomponen", bullets: ["Las apps cambian", "A las preguntas del formulario les cambian el nombre", "La IA da respuestas raras"] },
            { title: "Prueba con datos raros", bullets: ["Campo vacío", "Mensaje muy largo", "Otro idioma o un mensaje grosero"] },
            { title: "Falla de forma segura", bullets: ["Detenerse y avisarte", "Nunca enviar mensajes a medias", "Activa los correos de fallas"] },
            { title: "Revisión semanal", bullets: ["Ejecuciones y fallas en el registro", "Lee algunos borradores de la IA", "Cuenta los minutos ahorrados"] }
          ],
          tryIt: "Tarea final: prueba tu automatización con tres datos raros, activa los avisos de fallas y escribe tu registro de una página: mapa, disparador y acciones, instrucción para la IA, paso de aprobación, resultados de las pruebas y revisión semanal.",
          youCanNow: "crear, proteger, probar y vigilar una automatización con IA para tu negocio."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Agregar IA y mantener el control",
        questions: [
          { q: "¿A dónde debe ir el borrador de respuesta de la IA en tu primera automatización?", options: ["A ti, para revisarlo", "Directo al cliente", "A las redes sociales", "A ningún lado"], answer: 0, why: "Tú revisas los borradores antes de que los vean los clientes." },
          { q: "¿Qué información NO debe pasar por el paso de IA?", options: ["Tu lista de servicios", "El texto del pedido", "Tu horario", "El número de tarjeta de un cliente"], answer: 3, why: "Los números de tarjeta y datos parecidos nunca se deben enviar a herramientas de IA." },
          { q: "¿Qué acción siempre debe necesitar tu aprobación?", options: ["Leer un correo", "Gastar dinero", "Clasificar un pedido", "Hacer un borrador de respuesta para ti"], answer: 1, why: "Gastar dinero es una acción de alto riesgo." },
          { q: "¿Qué significa \"fallar de forma segura\"?", options: ["Detenerse y avisar a una persona cuando algo sale mal", "Seguir pase lo que pase", "Borrar los datos", "Enviar un correo a todos los clientes"], answer: 0, why: "Detenerse evita acciones a medias que hagan daño." },
          { q: "Tu automatización te da más correcciones de las que te ahorra. ¿Qué haces?", options: ["La ignoras", "Le agregas más pasos de IA", "La cambias o la apagas", "Le das más acceso"], answer: 2, why: "Las automatizaciones deben ahorrar tiempo, no costarlo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Automatización con IA y flujos de trabajo con agentes",
    questions: [
      { q: "Automatizar significa:", options: ["Contratar a más personas", "Una computadora hace un trabajo repetido cuando pasa algo", "Escribir cada correo a mano", "Apagar tu computadora"], answer: 1, why: "Esa es la idea básica." },
      { q: "El primer paso antes de automatizar es:", options: ["Borrar datos viejos", "Comprar la herramienta más cara", "Darle acceso total a un agente", "Trazar el proceso como pasos"], answer: 3, why: "Solo puedes automatizar lo que entiendes." },
      { q: "Un flujo de trabajo es:", options: ["Una contraseña", "Un tipo de hoja de cálculo", "Un pago", "Los pasos por los que pasa un trabajo de principio a fin"], answer: 3, why: "Esa es la definición." },
      { q: "¿Qué paso es el más fácil de automatizar?", options: ["Decidir si contratar a alguien", "Copiar las respuestas de un formulario a una hoja de cálculo", "Firmar un contrato de alquiler", "Elegir el nombre del negocio"], answer: 1, why: "Copiar es repetitivo y sigue reglas." },
      { q: "El disparador es:", options: ["El modelo de IA", "El último paso", "Lo que pone en marcha la automatización", "El precio"], answer: 2, why: "Los disparadores ponen en marcha las automatizaciones." },
      { q: "¿Cuál es una acción?", options: ["Agregar una fila a una hoja de cálculo", "Una nueva respuesta en el formulario", "Un pedido nuevo pagado", "Llega un correo nuevo"], answer: 0, why: "Las otras son disparadores." },
      { q: "Zapier, Make y Microsoft Power Automate son:", options: ["Redes sociales", "Bancos", "Herramientas de automatización sin código", "Impresoras"], answer: 2, why: "Conectan apps con disparadores y acciones." },
      { q: "¿Dónde debes revisar los límites del plan gratuito de una herramienta sin código?", options: ["En su propia página de precios", "Adivinando", "En un video viejo", "Con un cliente"], answer: 0, why: "Los planes y los límites cambian." },
      { q: "Antes de activar una automatización debes:", options: ["Enviarla a todos los clientes", "Probarla con datos inventados", "Saltarte la prueba", "Quitar los avisos"], answer: 1, why: "Probar detecta los errores sin riesgo." },
      { q: "Una acción de IA en una automatización puede:", options: ["Aprobarse a sí misma", "Firmar contratos", "Pagar tus impuestos", "Clasificar un pedido o hacer el borrador de una respuesta"], answer: 3, why: "Leer, clasificar y hacer borradores son buenos usos de la IA." },
      { q: "Una buena instrucción para la IA incluye:", options: ["Reglas como \"Usa solo los datos dados; nunca des un precio\"", "\"Haz lo que quieras\"", "Tu contraseña", "Los números de tarjeta de los clientes"], answer: 0, why: "Las reglas reducen los errores." },
      { q: "¿Por qué revisar las condiciones de datos de una herramienta de automatización?", options: ["No hace falta", "Para cambiar tu logo", "Para conseguir un descuento", "Para saber cómo se guarda y se usa la información de clientes que envías"], answer: 3, why: "Los datos de los clientes pasan por estas herramientas." },
      { q: "Un agente de IA es:", options: ["Una hoja de cálculo", "Un vendedor humano", "Una herramienta de IA que da varios pasos por su cuenta para lograr una meta", "Un repartidor"], answer: 2, why: "Los agentes planean y actúan por su cuenta." },
      { q: "Un límite es:", options: ["Un tipo de disparador", "Una regla que impide acciones riesgosas", "Una línea rápida de internet", "Una app nueva"], answer: 1, why: "Los límites te mantienen en control." },
      { q: "Un agente debe tener tu aprobación antes de:", options: ["Hacer una nota para ti", "Leer un correo", "Ordenar una lista", "Enviar cualquier cosa a un cliente"], answer: 3, why: "Enviar algo a los clientes es de alto riesgo." },
      { q: "¿Cuánto acceso debe tener un agente?", options: ["Tu acceso al banco", "Todo lo que tienes", "Solo las apps y carpetas que necesita", "Todos los archivos de clientes"], answer: 2, why: "Un acceso limitado limita el daño de los errores." },
      { q: "Al darle más libertad a un agente, debes:", options: ["Empezar en pequeño y darle más libertad cuando funcione bien", "Darle libertad total el primer día", "Nunca revisar su registro", "Apagar los avisos"], answer: 0, why: "La confianza se gana con buenos resultados." },
      { q: "¿Cuál es una buena prueba con datos raros?", options: ["Solo mensajes perfectos", "Un mensaje con un campo vacío", "Ninguna prueba", "El número de tarjeta real de un cliente"], answer: 1, why: "Los datos raros muestran los puntos débiles." },
      { q: "Si una ejecución de la automatización falla, debe:", options: ["Enviar un mensaje a medias", "Detenerse y avisarte", "Borrar tu hoja de cálculo", "Reintentar para siempre sin avisar"], answer: 1, why: "Eso es fallar de forma segura." },
      { q: "En tu revisión semanal miras:", options: ["Ejecuciones, fallas, algunos borradores de la IA y minutos ahorrados", "Solo el logo de la herramienta", "Nada", "Las contraseñas de los competidores"], answer: 0, why: "Esto muestra si la automatización sigue funcionando y vale la pena." }
    ]
  }
};
