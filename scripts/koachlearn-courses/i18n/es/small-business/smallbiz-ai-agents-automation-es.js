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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios que repiten las mismas tareas en la computadora todos los días, como copiar respuestas de formularios a una hoja, mandar el mismo correo de seguimiento, crear facturas y ordenar consultas, en tiendas, restaurantes, salones, servicios de limpieza y reparación y oficinas pequeñas.",
    startingPoint: "Usan el correo, un formulario web o una herramienta de citas y una hoja de cálculo, y quizás han probado un asistente de IA. La mayoría nunca ha creado una automatización ni ha usado una herramienta de automatización sin código.",
    gap: "Las tareas repetidas toman horas cada semana y se cuelan errores cuando la gente está cansada. Necesitan automatizar los pasos de rutina de forma segura, con una persona que apruebe todo lo que se envía o se paga, para ahorrar tiempo sin perder el control de los clientes, el dinero o los registros.",
    constraints: [
      "Herramientas sin código gratis o de bajo costo; los planes gratis tienen límites que cambian, así que cada quien revisa el sitio de cada herramienta",
      "Nada de datos reales de clientes en las pruebas; solo entradas de ejemplo",
      "Una persona aprueba todo lo que gasta dinero, manda mensajes a clientes o cambia registros",
      "Seguridad: inicio de sesión en dos pasos, el acceso mínimo y nada de números de tarjeta ni contraseñas en los pasos de IA",
      "Tiempo: unos 60 minutos en total, en lecciones de 5 minutos"
    ],
    prerequisites: "Saber usar el correo y una hoja de cálculo. Quien no conoce los asistentes de IA puede tomar primero un curso de introducción a la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una tarea del negocio", action: "explicar si le queda una automatización fija o un paso de IA, y qué partes se quedan con una persona", standard: "dejando el dinero, los mensajes a clientes y los cambios en los registros con una persona" },
    { id: "O2", condition: "Con una tarea que repites seguido", action: "escribir un mapa de pasos y marcar cada paso como Regla, Palabras, Decisión o Dinero o envío", standard: "con todos los pasos que haces hoy incluidos" },
    { id: "O3", condition: "Con tu mapa de pasos", action: "diseñar un flujo de trabajo con un disparador, acciones y un paso de aprobación de una persona, dibujado en papel", standard: "con la aprobación antes de que algo salga del negocio" },
    { id: "O4", condition: "Usando una herramienta de automatización sin código", action: "crear el flujo de trabajo, conectar tus cuentas y asignar los campos", standard: "con el paso de IA recibiendo solo los campos que necesita y mandándote su borrador a ti" },
    { id: "O5", condition: "Con tres entradas de ejemplo inventadas", action: "probar la automatización y corregir lo que falle, un cambio a la vez", standard: "hasta que pasen una entrada normal, una con un campo vacío y una con texto raro" },
    { id: "O6", condition: "Cuando la automatización ya está funcionando", action: "preparar un registro, una revisión semanal y una descripción de una página que diga cómo apagarla", standard: "para que otra persona pueda entenderla o detenerla" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Entender y diseñar la automatización",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "explicar la diferencia entre una automatización y un agente de IA, y elegir la opción más segura.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una debilidad de los agentes de IA frente a las automatizaciones fijas?", options: ["Son menos predecibles y pueden equivocarse con mucha seguridad", "Nunca pueden usar palabras", "Solo funcionan de noche", "No cuestan nada"], answer: 0, why: "Los agentes son más flexibles pero menos predecibles, y pueden equivocarse con total seguridad." },
            { objective: "O1", q: "Quieres que la IA responda consultas y pague facturas de proveedores por su cuenta. ¿Qué debes hacer?", options: ["Dejar que el agente de IA haga las dos cosas", "Dejar que la IA prepare las respuestas, y que una persona se encargue de pagar y enviar", "Apagar toda la automatización", "Dejar que la IA pague pero no responda"], answer: 1, why: "Deja a las personas a cargo de gastar dinero y de mandar mensajes a los clientes." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "dividir una tarea repetida en un mapa de pasos que muestra qué se puede automatizar.",
          quickCheck: [
            { objective: "O2", q: "¿Qué pasos se quedan con una persona?", options: ["Los pasos de Regla", "Los pasos de Palabras", "Los pasos de Decisión y de Dinero o envío", "Todos los pasos"], answer: 2, why: "Los pasos de Decisión y de Dinero o envío se quedan con una persona; los pasos de Regla se pueden automatizar." },
            { objective: "O2", q: "Quieres automatizar cómo manejas las consultas nuevas. ¿Qué haces primero?", options: ["Comprar la herramienta más cara", "Pedirle a la IA que adivine tu proceso", "Empezar a crearla de inmediato", "Escribir cada paso tal como lo haces hoy"], answer: 3, why: "No puedes automatizar lo que no has escrito." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "diseñar un flujo de trabajo con un disparador, acciones y un paso de aprobación de una persona.",
          quickCheck: [
            { objective: "O3", q: "En un flujo de trabajo, ¿qué son las \"acciones\"?", options: ["Lo que pasa después del disparador", "El evento que lo inicia", "Tu contraseña", "El precio de la herramienta"], answer: 0, why: "El disparador inicia la automatización; las acciones son lo que pasa después." },
            { objective: "O3", q: "En tu diseño, el paso de IA manda correos directamente a los clientes. ¿Qué cambias?", options: ["Nada; ahorra tiempo", "Que te mande el borrador a ti para aprobarlo antes de que llegue al cliente", "Quitas el disparador", "Agregas un segundo paso de IA para revisar el primero"], answer: 1, why: "La aprobación de una persona va antes de que algo salga del negocio." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Entender y diseñar la automatización",
        questions: [
          { objective: "O1", q: "¿Qué describe mejor una automatización fija?", options: ["Elige sus propias metas", "Sigue reglas que tú pones y hace lo mismo cada vez", "Es una persona", "Nunca funciona"], answer: 1, why: "Las automatizaciones siguen reglas fijas." },
          { objective: "O1", q: "¿Qué es más predecible?", options: ["Ninguno funciona nunca", "Un agente de IA", "Siempre son iguales", "Una automatización fija"], answer: 3, why: "Los agentes eligen pasos y son menos predecibles." },
          { objective: "O2", q: "En un mapa de pasos, \"mandar la cotización\" se marca como:", options: ["Dinero o envío: necesita aprobación", "Regla: automatizar por completo", "Ignorar", "Borrar"], answer: 0, why: "Todo lo que se manda a un cliente necesita la aprobación de una persona." },
          { objective: "O3", q: "¿Qué es un disparador?", options: ["Una contraseña", "El último paso", "El evento que inicia una automatización", "Un precio"], answer: 2, why: "Los disparadores inician los flujos de trabajo." },
          { objective: "O3", q: "¿Dónde va el paso de aprobación?", options: ["En ningún lado", "Después de que el cliente lo recibe", "Antes de que algo salga del negocio", "Solo al final del año"], answer: 2, why: "Aprueba antes de enviar, pagar o borrar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crearla, probarla y usarla con seguridad",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "crear un flujo de disparador y acciones en una herramienta de automatización sin código.",
          quickCheck: [
            { objective: "O4", q: "¿Qué te deja hacer una herramienta sin código?", options: ["Escribir código más rápido", "Conseguir listas de clientes gratis", "Crear automatizaciones eligiendo de menús", "No iniciar sesión en tus aplicaciones"], answer: 2, why: "Las herramientas sin código te dejan crear automatizaciones con menús en lugar de escribir código." },
            { objective: "O4", q: "El formulario tiene 12 campos, pero la IA solo necesita el nombre y el tipo de trabajo para preparar una respuesta. ¿Qué le mandas?", options: ["Los 12 campos, por si acaso", "También el número de tarjeta del cliente", "Nada", "Solo el nombre y el tipo de trabajo"], answer: 3, why: "Dale al paso de IA solo los campos que necesita." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "probar una automatización con seguridad y corregir problemas antes de que toque a clientes reales.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es un ejemplo de entrada de ejemplo con texto raro?", options: ["Un mensaje muy largo con emojis", "Una consulta normal", "Un formulario en blanco", "La petición de un cliente real"], answer: 0, why: "La entrada con texto raro tiene un texto muy largo, otro idioma o emojis." },
            { objective: "O5", q: "Una prueba falla cuando el campo del teléfono está vacío. ¿Qué haces?", options: ["La pones a funcionar de todos modos", "Corriges ese paso y vuelves a probar", "Cambias cinco cosas a la vez", "Pruebas solo con clientes reales"], answer: 1, why: "Corrige una cosa a la vez y vuelve a probar." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "usar una automatización de negocio con seguridad, con aprobación, pruebas, registros y un botón de apagado.",
          quickCheck: [
            { objective: "O6", q: "¿Qué va en una fila del registro en esta lección?", options: ["Los números de tarjeta de los clientes", "Tu contraseña", "La fecha, el disparador, lo que hizo y quién lo aprobó", "Solo la palabra \"listo\""], answer: 2, why: "Una fila del registro guarda la fecha, el disparador, lo que hizo y quién lo aprobó." },
            { objective: "O6", q: "Un empleado que ayudaba a aprobar borradores deja el negocio. ¿Qué haces?", options: ["Nada", "Le das tu contraseña a la persona nueva", "Apagas el inicio de sesión en dos pasos", "Le quitas el acceso a la automatización y a las cuentas conectadas"], answer: 3, why: "Quita el acceso cuando un empleado se va." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crearla, probarla y usarla con seguridad",
        questions: [
          { objective: "O4", q: "¿Cuál es una herramienta de automatización sin código?", options: ["Zapier", "Una engrapadora", "Un cajón de dinero", "Un fax"], answer: 0, why: "Zapier crea automatizaciones sin código." },
          { objective: "O4", q: "¿Qué es relacionar campos?", options: ["Imprimir un mapa", "Dibujar una granja", "Elegir una contraseña", "Decirle a la herramienta qué dato va en qué lugar"], answer: 3, why: "Une los campos del formulario con las columnas de la hoja." },
          { objective: "O5", q: "¿Con qué datos debes hacer las pruebas?", options: ["Con datos de clientes reales", "Con entradas de ejemplo inventadas", "Con números de tarjeta", "Con el acceso a tu banco"], answer: 1, why: "Nunca hagas pruebas con clientes reales." },
          { objective: "O5", q: "El borrador de la IA inventa un precio. ¿Qué corriges?", options: ["Las instrucciones del paso con IA, y vuelves a probar", "Nada", "Lo mandas de todos modos", "Cierras el negocio"], answer: 0, why: "Las instrucciones claras reducen los datos inventados." },
          { objective: "O6", q: "¿Por qué escribir una descripción de una página con un botón de apagado?", options: ["Para decorar", "Para que sea más larga", "Para que otra persona pueda entenderla o detenerla", "No sirve de nada"], answer: 2, why: "Cualquiera debería poder apagarla rápido." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Agentes de IA para automatizar tu negocio",
    questions: [
      { objective: "O1", q: "Un agente de IA es:", options: ["Una persona", "Un sistema de IA que puede elegir algunos de sus propios pasos", "Una regla fija", "Una impresora"], answer: 1, why: "Los agentes eligen pasos hacia una meta." },
      { objective: "O1", q: "¿Por dónde debe empezar un pequeño negocio?", options: ["Automatizar todo de una vez", "Un agente totalmente independiente con acceso al banco", "Por nada", "Automatizaciones fijas y luego un paso con IA"], answer: 3, why: "Primero lo sencillo y predecible." },
      { objective: "O1", q: "¿Qué debe quedarse siempre con una persona?", options: ["Dar formato a una fila", "Copiar un formulario a una hoja", "Agregar un recordatorio al calendario", "Gastar dinero"], answer: 3, why: "Las decisiones de dinero necesitan a una persona." },
      { objective: "O2", q: "El primer paso antes de automatizar es:", options: ["Comprar una herramienta", "Escribir un mapa de pasos de la tarea", "Encenderla", "Contratar a alguien"], answer: 1, why: "No puedes automatizar lo que no has escrito." },
      { objective: "O2", q: "Un paso de \"Regla\" es uno que:", options: ["Tiene que ver con dinero", "Es una gran decisión", "Siempre es igual", "No está claro"], answer: 2, why: "Los pasos de Regla se pueden automatizar." },
      { objective: "O2", q: "Un paso de \"Palabras\" puede tener:", options: ["Un borrador de la IA", "Un pago", "Un borrado", "Nada"], answer: 0, why: "La IA ayuda a redactar." },
      { objective: "O3", q: "\"Nuevo formulario enviado\" es un ejemplo de:", options: ["Registro", "Acción", "Disparador", "Contraseña"], answer: 2, why: "Inicia el flujo de trabajo." },
      { objective: "O3", q: "\"Agregar una fila a la hoja\" es un ejemplo de:", options: ["Acción", "Disparador", "Aprobación", "Botón de apagado"], answer: 0, why: "Las acciones vienen después del disparador." },
      { objective: "O3", q: "En un flujo seguro, la IA escribe borradores de respuesta a clientes y luego:", options: ["Los manda directo a los clientes", "Te los manda para que los apruebes", "Los borra", "Los publica"], answer: 1, why: "Tú presionas enviar." },
      { objective: "O3", q: "¿Por qué dibujar primero el flujo en papel?", options: ["No sirve de nada", "Lo exige la ley", "Solo por diversión", "Para ver cada paso y cada herramienta antes de crearlo"], answer: 3, why: "Planear evita errores." },
      { objective: "O4", q: "Cuando conectas una cuenta a una herramienta de automatización, estás:", options: ["Dejando que la herramienta use esa aplicación después de iniciar sesión", "Borrando la aplicación", "Haciéndola pública", "Pagando una multa"], answer: 0, why: "Las conexiones dan acceso a la herramienta." },
      { objective: "O4", q: "¿Qué debe recibir el paso con IA?", options: ["Contraseñas", "Todos los datos del cliente", "Números de tarjeta", "Solo los campos que necesita"], answer: 3, why: "Solo los datos necesarios." },
      { objective: "O4", q: "¿Dónde revisas los límites del plan gratis de una herramienta?", options: ["En un video viejo", "Adivinando", "En el sitio oficial de la herramienta", "Con un competidor"], answer: 2, why: "Los planes cambian." },
      { objective: "O5", q: "Un caso límite es:", options: ["La esquina de una mesa", "Una entrada poco común que podría romper el proceso", "Una entrada normal", "Una contraseña"], answer: 1, why: "Prueba también entradas raras." },
      { objective: "O5", q: "En este curso, ¿cuántas entradas de ejemplo deben pasar antes de activar la automatización?", options: ["Mil", "Ninguna", "Un cliente real", "Tres: normal, campo vacío, texto raro"], answer: 3, why: "Cubren los problemas comunes." },
      { objective: "O5", q: "Corriges los problemas:", options: ["Sin hacerles caso", "Cambiando todo de una vez", "Cambiando una cosa a la vez y volviendo a probar", "Activándola de todos modos"], answer: 2, why: "Una corrección a la vez muestra qué funcionó." },
      { objective: "O6", q: "El historial de ejecuciones muestra:", options: ["Cada vez que corrió la automatización", "Tu historial del navegador", "Contraseñas de clientes", "Declaraciones de impuestos"], answer: 0, why: "Te ayuda a ver errores." },
      { objective: "O6", q: "¿Cada cuánto debes revisar una automatización activa?", options: ["Nunca", "Por lo menos cada semana", "Una vez cada varios años", "Solo cuando se quejan los clientes"], answer: 1, why: "Las revisiones frecuentes encuentran problemas a tiempo." },
      { objective: "O6", q: "El inicio de sesión en dos pasos en las cuentas de automatización:", options: ["No sirve para nada", "Hace más difícil que alguien entre sin permiso", "No está permitido", "Comparte tu contraseña"], answer: 1, why: "Agrega una segunda revisión." },
      { objective: "O6", q: "Cada mes debes preguntarte si la automatización:", options: ["Todavía te ahorra tiempo", "Tiene un nombre bonito", "Usa más aplicaciones", "Es popular"], answer: 0, why: "Si ya no ayuda, cámbiala o detenla." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      6,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Mapa de pasos",
        objective: "O2",
        notYet: "Faltan pasos o no están marcados.",
        meets: "Cada paso de la tarea está en la lista y marcado como Regla, Palabras, Decisión o Dinero o envío.",
        exceeds: "Anota cuánto tarda hoy cada paso."
      },
      {
        name: "Diseño del flujo de trabajo",
        objective: "O3",
        notYet: "No hay paso de aprobación, o algo se envía o se paga sin una persona.",
        meets: "Disparador, acciones y la aprobación de una persona antes de que algo salga del negocio.",
        exceeds: "Cada cuadro dice qué herramienta usa y las conexiones están revisadas."
      },
      {
        name: "Automatización que funciona",
        objective: "O4",
        notYet: "La automatización no corre o los campos caen en lugares equivocados.",
        meets: "Corre desde el disparador, asigna bien los campos y te manda a ti el borrador de la IA.",
        exceeds: "El paso de IA recibe solo los campos que necesita y tiene instrucciones claras."
      },
      {
        name: "Probada y corregida",
        objective: "O5",
        notYet: "Se probó con datos reales de clientes o con menos de tres entradas.",
        meets: "Las entradas de ejemplo normal, con campo vacío y con texto raro pasan todas después de las correcciones.",
        exceeds: "Enumera cada problema encontrado y el único cambio que lo corrigió."
      },
      {
        name: "Funcionamiento seguro",
        objective: "O6",
        notYet: "No hay registro, revisión semanal ni forma de apagarla.",
        meets: "Registro, revisión semanal y una descripción de una página con la forma de apagarla.",
        exceeds: "Inicio de sesión en dos pasos activado y acceso limitado a lo que necesita."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños con una automatización que sigue funcionando de forma segura 30 días después (encuesta de seguimiento)",
      "Horas por semana que los dueños dicen ahorrar en la tarea automatizada",
      "Estudiantes que empiezan otro curso de Koach Learn para pequeños negocios en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet",
      "Una cuenta gratis en una herramienta de automatización sin código, una herramienta de formularios y una hoja de cálculo como Google Sheets o Excel",
      "Papel y pluma para el mapa de pasos y el dibujo del flujo de trabajo",
      "Unos 60 minutos en total, más tiempo para crear y probar"
    ],
    facilitatorNotes: [
      "Pide a cada estudiante que elija antes de la sesión una tarea repetida real y pequeña; para una primera automatización, mientras más pequeña, mejor.",
      "Usa solo entradas de ejemplo inventadas y un correo de prueba que sea del estudiante; nunca datos reales de clientes.",
      "Antes de que empiecen a crear, revisa que cada diseño tenga la aprobación de una persona antes de enviar o pagar cualquier cosa.",
      "Ayuda a los estudiantes a activar el inicio de sesión en dos pasos en la herramienta de automatización y en las cuentas conectadas.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
