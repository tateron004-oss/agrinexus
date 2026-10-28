"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-ai-agents-automation.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-ai-agents-automation-es",
  lang: "es",
  translationOf: "smallbiz-ai-agents-automation",
  category: "Small Business",
  name: "Agentes de IA para automatizar tu negocio",
  skills: "Distinguir automatizaciones de agentes de IA, Mapear una tarea repetida paso a paso, Diseñar un flujo de disparador y acciones, Agregar la aprobación de una persona, Probar con datos de ejemplo, Llevar un registro y vigilar",
  outcome: "diseñar, crear y probar de forma segura una automatización sencilla para tu negocio, como convertir una nueva consulta de un formulario web en una fila de una hoja de cálculo, un borrador de respuesta y un recordatorio para ti, con un paso de aprobación de una persona antes de que se envíe algo, una prueba con datos de ejemplo y un registro que revisas cada semana.",
  about: [
    "Este curso es para dueños de pequeños negocios que repiten las mismas tareas en la computadora todos los días: copiar respuestas de formularios a una hoja, mandar el mismo correo de seguimiento, hacer facturas, ordenar consultas. Los ejemplos vienen de tiendas, restaurantes, salones de belleza, servicios de limpieza y reparación, y oficinas pequeñas.",
    "Vas a aprender la diferencia entre una automatización sencilla y un agente de IA, convertir una tarea en pasos, diseñar un flujo de trabajo con un disparador y acciones, y crear uno con una herramienta sin código como Zapier, Make o Microsoft Power Automate, o con las funciones de automatización de herramientas que ya usas. Lo más importante: vas a mantener a una persona al mando.",
    "Las herramientas cambian sus pantallas y precios seguido, así que describimos qué hacer en lugar de dar nombres exactos de menús; revisa el sitio de cada herramienta para ver su plan gratis actual. Cada lección dura unos cinco minutos, con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Crea una automatización que funcione para una tarea repetida real: escribe el mapa de pasos, elige el disparador y las acciones, pon un paso de aprobación de una persona antes de enviar o pagar cualquier cosa, pruébala con tres entradas de ejemplo (sin datos reales de clientes), corrige lo que falle y arma un registro sencillo y una revisión semanal. Escribe una descripción de una página para que otra persona pueda entenderla o apagarla.",
  chapters: [
    {
      name: "Capítulo 1: Entender y diseñar la automatización",
      lessons: [
        {
          title: "Automatizaciones y agentes de IA: ¿cuál es la diferencia?",
          minutes: 5,
          goal: "Explicar la diferencia entre una automatización fija y un agente de IA, y cuándo conviene cada uno.",
          text: [
            "Una automatización sigue reglas fijas que tú pones: \"Cuando llegue un formulario nuevo, agrega una fila a mi hoja y mándame un correo.\" Hace lo mismo cada vez. Es predecible y fácil de revisar.",
            "Un agente de IA es un sistema de IA que puede decidir algunos de sus propios pasos para llegar a una meta, como leer una consulta, decidir de qué tipo es, escribir un borrador de respuesta y elegir qué herramienta usar después. Los agentes son más flexibles pero menos predecibles, y pueden equivocarse con mucha seguridad.",
            "Para un pequeño negocio, empieza con automatizaciones fijas y agrega IA en un solo paso donde ayude el criterio con las palabras, como escribir un borrador de respuesta u ordenar mensajes. Deja a personas a cargo de todo lo que gasta dinero, manda mensajes a clientes o cambia registros."
          ],
          words: [["Automatización", "un conjunto de pasos fijos que una computadora hace sola cuando pasa algo."], ["Agente de IA", "un sistema de IA que puede elegir algunos de sus propios pasos para llegar a una meta."], ["Flujo de trabajo", "la serie de pasos con la que se hace una tarea."]],
          slides: [
            { title: "Automatización", bullets: ["Reglas fijas que tú pones", "El mismo resultado cada vez", "Predecible y fácil de revisar"] },
            { title: "Agente de IA", bullets: ["Elige algunos de sus propios pasos", "Flexible, pero menos predecible", "Puede equivocarse con mucha seguridad"] },
            { title: "Empieza sencillo", bullets: ["Primero una automatización fija", "Agrega IA en un paso de redacción", "Las personas aprueban dinero, mensajes y registros"] }
          ],
          tryIt: "Anota dos tareas que repites en tu negocio. Para cada una, escribe si una automatización fija podría hacerla o si necesita criterio (un posible paso con IA).",
          youCanNow: "explicar la diferencia entre una automatización y un agente de IA, y elegir la opción más segura."
        },
        {
          title: "Mapear una tarea repetida paso a paso",
          minutes: 5,
          goal: "Dividir una tarea repetida en un mapa de pasos claro.",
          text: [
            "No puedes automatizar lo que no has escrito. Escoge una tarea que haces seguido y escribe cada paso tal como lo haces hoy. Ejemplo de un servicio de limpieza: (1) llega una consulta por formulario web, (2) copio el nombre, la dirección y el tipo de trabajo en mi hoja, (3) escribo una respuesta con mi rango de precios, (4) pongo un recordatorio para devolver la llamada, (5) mando la cotización.",
            "Marca cada paso: Regla (siempre igual), Palabras (necesita redacción o criterio), Decisión (necesita al dueño), Dinero o envío (necesita aprobación).",
            "Los pasos marcados como Regla se pueden automatizar. Los pasos de Palabras pueden tener un borrador de la IA. Los pasos de Decisión y de Dinero o envío se quedan con una persona."
          ],
          steps: ["Escoge una tarea que haces por lo menos cada semana.", "Escribe cada paso tal como lo haces ahora.", "Marca cada uno: Regla, Palabras, Decisión, Dinero o envío.", "Encierra en un círculo los pasos de Regla para automatizarlos primero."],
          words: [["Mapa de pasos", "una lista numerada de todos los pasos de una tarea."], ["Manual", "hecho a mano por una persona."]],
          slides: [
            { title: "Escríbelo antes de automatizar", bullets: ["Escoge una tarea frecuente", "Anota cada paso tal como lo haces hoy"] },
            { title: "Marca cada paso", bullets: ["Regla: siempre igual", "Palabras: redacción o criterio", "Decisión / Dinero o envío: una persona"] },
            { title: "Qué se automatiza", bullets: ["Pasos de Regla: se automatizan", "Pasos de Palabras: borrador de la IA", "Pasos de decisión y dinero: personas"] }
          ],
          tryIt: "Escribe el mapa de pasos de una tarea repetida de tu negocio y marca cada paso como Regla, Palabras, Decisión o Dinero/envío.",
          youCanNow: "dividir una tarea repetida en un mapa de pasos que muestra qué se puede automatizar."
        },
        {
          title: "Diseñar el flujo: disparador, acciones, aprobación",
          minutes: 5,
          goal: "Diseñar un flujo de trabajo con un disparador, acciones y un paso de aprobación de una persona.",
          text: [
            "Toda automatización tiene un disparador (el evento que la inicia) y acciones (lo que pasa después). Disparador: \"nuevo formulario enviado\". Acciones: \"agregar una fila a la hoja\", \"escribir un borrador de respuesta con IA\", \"mandarme el borrador para aprobarlo\", \"crear un recordatorio en el calendario\".",
            "Pon la aprobación de una persona antes de que algo salga del negocio: mensajes a clientes, pagos, cambios de precio, borrado de registros. La automatización puede dejar todo listo; tú presionas enviar.",
            "Primero dibújalo en papel con cajas y flechas. Escribe la herramienta de cada caja: tu herramienta de formularios, Google Sheets o Excel, un paso con IA, tu correo, tu calendario. Revisa que cada herramienta se conecte con el servicio de conexión que piensas usar."
          ],
          steps: ["Escribe el disparador.", "Haz una lista de las acciones en orden.", "Agrega un paso de aprobación antes de enviar o pagar cualquier cosa.", "Dibújalo con cajas y flechas.", "Escribe la herramienta de cada caja y revisa que se conecte."],
          words: [["Disparador", "el evento que inicia una automatización."], ["Acción", "un paso que hace la automatización después del disparador."], ["Paso de aprobación", "un punto donde una persona debe decir que sí antes de que el flujo siga."]],
          slides: [
            { title: "Disparador y acciones", bullets: ["Disparador: nuevo formulario enviado", "Acciones: agregar fila, borrador de IA, recordarme"] },
            { title: "Aprobación de una persona", bullets: ["Antes de que salgan mensajes del negocio", "Antes de pagos, cambios de precio o borrados", "La automatización prepara; tú presionas enviar"] },
            { title: "Dibújalo primero", bullets: ["Cajas y flechas en papel", "La herramienta de cada caja", "Revisa que cada herramienta se conecte"] }
          ],
          tryIt: "Dibuja el flujo de trabajo de tu tarea de la Lección 2: disparador, acciones y un paso de aprobación. Escribe el nombre de la herramienta en cada caja.",
          youCanNow: "diseñar un flujo de trabajo con un disparador, acciones y un paso de aprobación de una persona."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Entender y diseñar la automatización",
        questions: [
          { q: "¿Qué describe mejor una automatización fija?", options: ["Elige sus propias metas", "Sigue reglas que tú pones y hace lo mismo cada vez", "Es una persona", "Nunca funciona"], answer: 1, why: "Las automatizaciones siguen reglas fijas." },
          { q: "¿Qué es más predecible?", options: ["Ninguno funciona nunca", "Un agente de IA", "Siempre son iguales", "Una automatización fija"], answer: 3, why: "Los agentes eligen pasos y son menos predecibles." },
          { q: "En un mapa de pasos, \"mandar la cotización\" se marca como:", options: ["Dinero o envío: necesita aprobación", "Regla: automatizar por completo", "Ignorar", "Borrar"], answer: 0, why: "Todo lo que se manda a un cliente necesita la aprobación de una persona." },
          { q: "¿Qué es un disparador?", options: ["Una contraseña", "El último paso", "El evento que inicia una automatización", "Un precio"], answer: 2, why: "Los disparadores inician los flujos de trabajo." },
          { q: "¿Dónde va el paso de aprobación?", options: ["En ningún lado", "Después de que el cliente lo recibe", "Antes de que algo salga del negocio", "Solo al final del año"], answer: 2, why: "Aprueba antes de enviar, pagar o borrar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crearla, probarla y usarla con seguridad",
      lessons: [
        {
          title: "Crearla con una herramienta sin código",
          minutes: 6,
          goal: "Crear tu flujo de trabajo en una herramienta de automatización sin código.",
          text: [
            "Las herramientas sin código te dejan crear automatizaciones eligiendo opciones de menús en vez de escribir código. Algunas comunes son Zapier, Make y Microsoft Power Automate. Algunas aplicaciones que ya usas, como tu herramienta de formularios, de reservas o de correo, traen automatizaciones sencillas. Revisa el sitio de cada herramienta para ver su plan gratis y sus límites.",
            "El patrón es igual en todas: crea una nueva automatización, elige la aplicación y el evento del disparador, inicia sesión para conectar tu cuenta, luego agrega cada acción y relaciona los campos (por ejemplo, el \"Nombre\" del formulario va a la columna \"Nombre\" de la hoja).",
            "Para un paso con IA, muchas herramientas ofrecen una acción que manda texto a un modelo de IA y devuelve un borrador. Dile exactamente qué escribir y dale solo los campos que necesita. Mándate el borrador a ti, no directo al cliente."
          ],
          steps: ["Crea una nueva automatización en la herramienta que elegiste.", "Elige la aplicación y el evento del disparador; conecta tu cuenta.", "Agrega cada acción y relaciona los campos.", "Agrega el paso de borrador con IA con instrucciones claras y solo los campos necesarios.", "Mándate el borrador para aprobarlo."],
          words: [["Sin código", "crear programas eligiendo opciones en lugar de escribir código."], ["Relacionar campos", "decirle a la herramienta qué dato va en qué lugar."], ["Conectar una cuenta", "dejar que la herramienta de automatización use una de tus aplicaciones, después de iniciar sesión."]],
          slides: [
            { title: "Herramientas sin código", bullets: ["Zapier, Make, Microsoft Power Automate", "Automatizaciones incluidas en las aplicaciones que usas", "Revisa en cada sitio los límites del plan gratis"] },
            { title: "El mismo patrón", bullets: ["Elige la aplicación y el evento del disparador", "Conecta tu cuenta", "Agrega acciones y relaciona los campos"] },
            { title: "El paso con IA", bullets: ["Instrucciones claras", "Solo los campos que necesita", "El borrador te llega a ti, no al cliente"] }
          ],
          tryIt: "Crea tu flujo de trabajo en el plan gratis de una herramienta sin código (o en papel si todavía no puedes registrarte): disparador, relación de campos para cada acción y un borrador de IA que te llega a ti.",
          youCanNow: "crear un flujo de disparador y acciones en una herramienta de automatización sin código."
        },
        {
          title: "Probar con datos de ejemplo y corregir lo que falla",
          minutes: 5,
          goal: "Probar la automatización con entradas de ejemplo y corregir errores antes de activarla.",
          text: [
            "Nunca hagas pruebas con clientes reales. Haz tres entradas de ejemplo con nombres inventados como \"Cliente de Prueba\" y un correo de prueba que sea tuyo. Incluye una entrada normal, una con un campo vacío y una con texto raro (muy largo, en otro idioma, con emojis).",
            "Corre cada una y revisa cada paso: ¿la fila quedó en las columnas correctas? ¿El borrador de la IA tenía sentido y no se salió del tema? ¿Te llegó la aprobación? ¿Se mandó algo que no debía?",
            "Corrige una cosa a la vez y vuelve a probar. Problemas comunes: campos mal relacionados, un paso que falla cuando un campo está vacío, un borrador de IA que inventa precios. Corrige las instrucciones (\"Usa solo el rango de precios del campo; no inventes precios\") y vuelve a probar."
          ],
          steps: ["Haz tres entradas de ejemplo: normal, con campo vacío, con texto raro.", "Pasa cada una por la automatización.", "Revisa el resultado de cada paso.", "Corrige un problema a la vez y vuelve a probar.", "Actívala solo cuando las tres pasen."],
          words: [["Datos de ejemplo", "información inventada que se usa para probar."], ["Caso límite", "una entrada poco común que podría romper un proceso, como un campo vacío."], ["Activar", "encender la automatización para usarla de verdad."]],
          slides: [
            { title: "Prueba con datos inventados", bullets: ["\"Cliente de Prueba\" y tu propio correo de prueba", "Normal, campo vacío, texto raro"] },
            { title: "Revisa cada paso", bullets: ["¿Columnas correctas?", "¿Borrador de IA con sentido y en tema?", "¿Te llegó la aprobación? ¿Nada enviado por error?"] },
            { title: "Corrige y vuelve a probar", bullets: ["Una corrección a la vez", "Dile al paso de IA que no invente precios", "Actívala cuando pasen las tres"] }
          ],
          tryIt: "Pasa tres entradas de ejemplo por tu automatización (o recórrelas en tu diseño en papel). Escribe qué pasó en cada paso y una corrección.",
          youCanNow: "probar una automatización con seguridad y corregir problemas antes de que toque a clientes reales."
        },
        {
          title: "Usarla con seguridad: registros, vigilancia y un botón de apagado",
          minutes: 5,
          goal: "Armar un registro, una revisión semanal y una forma de apagar la automatización.",
          text: [
            "Una vez activa, sigue vigilándola. La mayoría de las herramientas muestran un historial de cada ejecución; revísalo cada semana para ver errores. También puedes agregar una fila de registro a una hoja: fecha, qué la disparó, qué hizo, quién lo aprobó.",
            "Escribe una descripción de una página: qué hace la automatización, su disparador y sus acciones, qué cuentas usa, quién aprueba y cómo apagarla. Guárdala donde un familiar o alguien del personal pueda encontrarla.",
            "Protege el acceso: usa el inicio de sesión en dos pasos en la herramienta de automatización y en las cuentas conectadas, dale acceso solo a lo que necesita, deja fuera de los pasos con IA los números de tarjeta de los clientes y las contraseñas, y quita el acceso cuando alguien del personal se vaya."
          ],
          steps: ["Revisa el historial de ejecuciones cada semana.", "Agrega una fila de registro por cada ejecución.", "Escribe la descripción de una página con el botón de apagado.", "Activa el inicio de sesión en dos pasos y limita el acceso.", "Revisa cada mes si todavía te ahorra tiempo."],
          words: [["Historial de ejecuciones", "una lista que guarda la herramienta de cada vez que corrió la automatización."], ["Registro", "un apunte de lo que pasó y cuándo."], ["Botón de apagado", "la forma de apagar rápido una automatización."]],
          slides: [
            { title: "Sigue vigilando", bullets: ["Revisa el historial de ejecuciones cada semana", "Registro: fecha, disparador, acción, quién aprobó"] },
            { title: "Descripción de una página", bullets: ["Qué hace y qué cuentas usa", "Quién aprueba", "Cómo apagarla"] },
            { title: "Protege el acceso", bullets: ["Inicio de sesión en dos pasos", "Solo el acceso necesario", "Nada de números de tarjeta ni contraseñas en pasos con IA"] }
          ],
          tryIt: "Tarea final: termina tu automatización: mapa de pasos, flujo con aprobación, tres pruebas que pasan, un registro y una revisión semanal, y una descripción de una página con el botón de apagado.",
          youCanNow: "usar una automatización de negocio con seguridad, con aprobación, pruebas, registros y un botón de apagado."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crearla, probarla y usarla con seguridad",
        questions: [
          { q: "¿Cuál es una herramienta de automatización sin código?", options: ["Zapier", "Una engrapadora", "Un cajón de dinero", "Un fax"], answer: 0, why: "Zapier crea automatizaciones sin código." },
          { q: "¿Qué es relacionar campos?", options: ["Imprimir un mapa", "Dibujar una granja", "Elegir una contraseña", "Decirle a la herramienta qué dato va en qué lugar"], answer: 3, why: "Une los campos del formulario con las columnas de la hoja." },
          { q: "¿Con qué datos debes hacer las pruebas?", options: ["Con datos de clientes reales", "Con entradas de ejemplo inventadas", "Con números de tarjeta", "Con el acceso a tu banco"], answer: 1, why: "Nunca hagas pruebas con clientes reales." },
          { q: "El borrador de la IA inventa un precio. ¿Qué corriges?", options: ["Las instrucciones del paso con IA, y vuelves a probar", "Nada", "Lo mandas de todos modos", "Cierras el negocio"], answer: 0, why: "Las instrucciones claras reducen los datos inventados." },
          { q: "¿Por qué escribir una descripción de una página con un botón de apagado?", options: ["Para decorar", "Para que sea más larga", "Para que otra persona pueda entenderla o detenerla", "No sirve de nada"], answer: 2, why: "Cualquiera debería poder apagarla rápido." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Agentes de IA para automatizar tu negocio",
    questions: [
      { q: "Un agente de IA es:", options: ["Una persona", "Un sistema de IA que puede elegir algunos de sus propios pasos", "Una regla fija", "Una impresora"], answer: 1, why: "Los agentes eligen pasos hacia una meta." },
      { q: "¿Por dónde debe empezar un pequeño negocio?", options: ["Automatizar todo de una vez", "Un agente totalmente independiente con acceso al banco", "Por nada", "Automatizaciones fijas y luego un paso con IA"], answer: 3, why: "Primero lo sencillo y predecible." },
      { q: "¿Qué debe quedarse siempre con una persona?", options: ["Dar formato a una fila", "Copiar un formulario a una hoja", "Agregar un recordatorio al calendario", "Gastar dinero"], answer: 3, why: "Las decisiones de dinero necesitan a una persona." },
      { q: "El primer paso antes de automatizar es:", options: ["Comprar una herramienta", "Escribir un mapa de pasos de la tarea", "Encenderla", "Contratar a alguien"], answer: 1, why: "No puedes automatizar lo que no has escrito." },
      { q: "Un paso de \"Regla\" es uno que:", options: ["Tiene que ver con dinero", "Es una gran decisión", "Siempre es igual", "No está claro"], answer: 2, why: "Los pasos de Regla se pueden automatizar." },
      { q: "Un paso de \"Palabras\" puede tener:", options: ["Un borrador de la IA", "Un pago", "Un borrado", "Nada"], answer: 0, why: "La IA ayuda a redactar." },
      { q: "\"Nuevo formulario enviado\" es un ejemplo de:", options: ["Registro", "Acción", "Disparador", "Contraseña"], answer: 2, why: "Inicia el flujo de trabajo." },
      { q: "\"Agregar una fila a la hoja\" es un ejemplo de:", options: ["Acción", "Disparador", "Aprobación", "Botón de apagado"], answer: 0, why: "Las acciones vienen después del disparador." },
      { q: "En un flujo seguro, la IA escribe borradores de respuesta a clientes y luego:", options: ["Los manda directo a los clientes", "Te los manda para que los apruebes", "Los borra", "Los publica"], answer: 1, why: "Tú presionas enviar." },
      { q: "¿Por qué dibujar primero el flujo en papel?", options: ["No sirve de nada", "Lo exige la ley", "Solo por diversión", "Para ver cada paso y cada herramienta antes de crearlo"], answer: 3, why: "Planear evita errores." },
      { q: "Cuando conectas una cuenta a una herramienta de automatización, estás:", options: ["Dejando que la herramienta use esa aplicación después de iniciar sesión", "Borrando la aplicación", "Haciéndola pública", "Pagando una multa"], answer: 0, why: "Las conexiones dan acceso a la herramienta." },
      { q: "¿Qué debe recibir el paso con IA?", options: ["Contraseñas", "Todos los datos del cliente", "Números de tarjeta", "Solo los campos que necesita"], answer: 3, why: "Solo los datos necesarios." },
      { q: "¿Dónde revisas los límites del plan gratis de una herramienta?", options: ["En un video viejo", "Adivinando", "En el sitio oficial de la herramienta", "Con un competidor"], answer: 2, why: "Los planes cambian." },
      { q: "Un caso límite es:", options: ["La esquina de una mesa", "Una entrada poco común que podría romper el proceso", "Una entrada normal", "Una contraseña"], answer: 1, why: "Prueba también entradas raras." },
      { q: "En este curso, ¿cuántas entradas de ejemplo deben pasar antes de activar la automatización?", options: ["Mil", "Ninguna", "Un cliente real", "Tres: normal, campo vacío, texto raro"], answer: 3, why: "Cubren los problemas comunes." },
      { q: "Corriges los problemas:", options: ["Sin hacerles caso", "Cambiando todo de una vez", "Cambiando una cosa a la vez y volviendo a probar", "Activándola de todos modos"], answer: 2, why: "Una corrección a la vez muestra qué funcionó." },
      { q: "El historial de ejecuciones muestra:", options: ["Cada vez que corrió la automatización", "Tu historial del navegador", "Contraseñas de clientes", "Declaraciones de impuestos"], answer: 0, why: "Te ayuda a ver errores." },
      { q: "¿Cada cuánto debes revisar una automatización activa?", options: ["Nunca", "Por lo menos cada semana", "Una vez cada varios años", "Solo cuando se quejan los clientes"], answer: 1, why: "Las revisiones frecuentes encuentran problemas a tiempo." },
      { q: "El inicio de sesión en dos pasos en las cuentas de automatización:", options: ["No sirve para nada", "Hace más difícil que alguien entre sin permiso", "No está permitido", "Comparte tu contraseña"], answer: 1, why: "Agrega una segunda revisión." },
      { q: "Cada mes debes preguntarte si la automatización:", options: ["Todavía te ahorra tiempo", "Tiene un nombre bonito", "Usa más aplicaciones", "Es popular"], answer: 0, why: "Si ya no ayuda, cámbiala o detenla." }
    ]
  }
};
