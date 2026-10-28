"use strict";

// Koach Learn course (shared), Spanish translation of "AI Automation and Smart Workflows". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-automation-workflows-es",
  lang: "es",
  translationOf: "ai-automation-workflows",
  category: "Small Business",
  name: "Automatización con IA y flujos de trabajo inteligentes",
  skills: "Hacer el mapa de un flujo de trabajo, Detectar qué automatizar, Diseñar automatizaciones de disparador y acción, Agregar un paso de IA, Crear y probar una automatización, Vigilarla y corregirla",
  outcome: "hacer el mapa de una tarea repetida, diseñar una automatización con un disparador, acciones y un paso de IA, crearla en una herramienta sin código, probarla con datos de ejemplo y mantener a una persona al tanto donde los errores importan.",
  about: [
    "Automatizar significa que un programa hace por ti los pasos aburridos: copiar las respuestas de un formulario en una hoja de cálculo, enviar un correo de confirmación, archivar un recibo, recordarle a alguien una fecha límite. Si agregas IA, la automatización también puede leer, clasificar y escribir; por ejemplo, resumir una solicitud o redactar una respuesta.",
    "Este curso es para dueños de pequeños negocios, personal y voluntarios de organizaciones sin fines de lucro, y trabajadores que quieren una habilidad que valoran los empleadores. Algunos ejemplos: una empresa de limpieza que atiende pedidos de presupuesto, una organización que inscribe voluntarios y un asistente de oficina que procesa facturas.",
    "Harás el mapa de una tarea real, diseñarás la automatización en papel y luego la crearás en una herramienta sin código como Zapier, Microsoft Power Automate o Make, o con las funciones que ya traen Google Forms y Sheets. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Crea una automatización que funcione para una organización real o de práctica: por ejemplo, un formulario de solicitudes que guarde cada respuesta en una hoja de cálculo, use un paso de IA para resumir y clasificar la solicitud, y envíe por correo un borrador de respuesta a un miembro del personal para que lo apruebe. Documenta el mapa del flujo de trabajo, el disparador y las acciones, cinco pruebas con sus resultados y quién revisa lo que produce.",
  chapters: [
    {
      name: "Capítulo 1: Diseñar flujos de trabajo inteligentes",
      lessons: [
        {
          title: "Qué son la automatización y los flujos de trabajo con IA",
          minutes: 4,
          goal: "Explicar los disparadores, las acciones y dónde entra un paso de IA.",
          text: [
            "Toda automatización tiene la misma forma. Un disparador es el evento que la pone en marcha: alguien envía un formulario, llega un correo, llega una fecha. Las acciones son lo que pasa después: agregar una fila a una hoja de cálculo, enviar un correo, crear una tarea.",
            "La automatización simple sigue reglas fijas: si llega un formulario, cópialo en la hoja. Un paso de IA agrega trabajo que parece de criterio: leer un mensaje y decidir si es una queja, una pregunta o un posible cliente; resumirlo en dos oraciones; redactar una respuesta amable.",
            "Cada herramienta usa nombres distintos. Zapier llama a una automatización Zap, Power Automate la llama flujo (flow) y Make la llama escenario (scenario). La idea es la misma: cuando pase esto, haz aquello."
          ],
          words: [["Automatización", "un programa que hace pasos por ti sin que una persona tenga que hacerlos cada vez."], ["Disparador", "el evento que pone en marcha una automatización."], ["Acción", "un paso que hace la automatización después del disparador."], ["Flujo de trabajo", "la serie de pasos que se usa para terminar una tarea."]],
          slides: [
            { title: "Cuando pase esto, haz aquello", bullets: ["Disparador: el evento que la pone en marcha", "Acciones: lo que pasa después"] },
            { title: "Agregar un paso de IA", bullets: ["Clasificar: queja, pregunta o posible cliente", "Resumir en dos oraciones", "Redactar una respuesta para que la revise una persona"] },
            { title: "La misma idea, distintos nombres", bullets: ["Zapier: Zap", "Power Automate: flujo", "Make: escenario"] }
          ],
          tryIt: "Escribe tres automatizaciones de “cuando pase esto, haz aquello” que te gustaría tener en el trabajo, en casa o en un grupo al que perteneces. Encierra en un círculo la que podría usar un paso de IA.",
          youCanNow: "describir cualquier automatización como un disparador más acciones, y decir dónde podría ayudar la IA."
        },
        {
          title: "Hacer el mapa de un flujo de trabajo y encontrar qué automatizar",
          minutes: 5,
          goal: "Hacer el mapa paso a paso de una tarea repetida y elegir los pasos que se van a automatizar.",
          text: [
            "Antes de crear nada, haz el mapa de la tarea tal como se hace hoy. Escribe cada paso, quién lo hace, qué herramienta usa y cuánto tarda. Inscribir a un voluntario podría ser: leer el correo, copiar los datos en una hoja de cálculo, revisar el horario, enviar un correo de bienvenida, agregar un recordatorio en el calendario.",
            "Los buenos pasos para automatizar son repetidos, basados en reglas y aburridos: copiar, archivar, recordar, confirmar. Los pasos que necesitan criterio, amabilidad o una decisión sobre la vida de alguien deben quedarse con una persona, o usar la IA solo para redactar.",
            "Marca cada paso: automatizar, borrador de IA con revisión humana, o dejar a una persona. Ese mapa marcado es tu diseño."
          ],
          steps: ["Elige una tarea que se haga al menos una vez por semana.", "Escribe cada paso en orden, con quién, qué herramienta y cuánto tarda.", "Marca cada paso: automatizar, borrador de IA más revisión humana, o dejar a una persona.", "Calcula el tiempo que se ahorra cada semana."],
          words: [["Mapa del flujo de trabajo", "una lista o dibujo paso a paso de cómo se hace una tarea."], ["Persona al tanto", "una persona revisa o aprueba antes de que la automatización siga (en inglés, human in the loop)."]],
          slides: [
            { title: "Primero haz el mapa", bullets: ["Cada paso en orden", "Quién, qué herramienta, cuánto tarda"] },
            { title: "Bueno para automatizar", bullets: ["Copiar y archivar", "Recordatorios y confirmaciones", "Pasos repetidos y basados en reglas"] },
            { title: "Marca cada paso", bullets: ["Automatizar", "Borrador de IA más revisión humana", "Dejar a una persona"] }
          ],
          tryIt: "Haz el mapa de una tarea repetida con al menos cinco pasos. Marca cada paso como automatizar, borrador de IA más revisión humana, o dejar a una persona, y calcula el tiempo ahorrado por semana.",
          youCanNow: "hacer el mapa de un flujo de trabajo y decidir qué pasos automatizar, cuáles puede redactar la IA y cuáles se quedan con una persona."
        },
        {
          title: "Diseñar la automatización en papel",
          minutes: 5,
          goal: "Escribir el diseño completo de una automatización: disparador, acciones, instrucción para la IA, revisiones y reglas de datos.",
          text: [
            "Diseña en papel antes de tocar una herramienta. Escribe el disparador, cada acción en orden y la instrucción exacta para la IA si hay un paso de IA, por ejemplo: “Lee esta solicitud. Responde con una sola palabra: Presupuesto, Pregunta o Queja. Luego escribe un resumen de dos oraciones”.",
            "Agrega un punto de revisión humana dondequiera que un error haría daño: cualquier cosa que se envíe a un cliente, movimientos de dinero o una decisión sobre una persona. La automatización puede redactar y luego esperar la aprobación.",
            "Escribe las reglas de datos: qué información pasa por la automatización, dónde se guarda y qué nunca debe pasar por un paso de IA, como números de tarjeta, números del Seguro Social, datos de salud o contraseñas. Revisa qué hace cada herramienta conectada con tus datos."
          ],
          steps: ["Escribe el disparador.", "Haz la lista de cada acción en orden.", "Escribe la instrucción exacta para cada paso de IA.", "Agrega una aprobación humana donde los errores harían daño.", "Escribe las reglas de datos: qué pasa, dónde se guarda, qué nunca pasa por la IA."],
          words: [["Instrucción (prompt)", "la indicación que le das a un paso de IA."], ["Punto de revisión", "un momento en que una persona revisa antes de que la automatización siga."]],
          slides: [
            { title: "Diseña antes de crear", bullets: ["Disparador y acciones en orden", "La instrucción exacta para la IA"] },
            { title: "Puntos de revisión humana", bullets: ["Todo lo que se envía a clientes", "Movimientos de dinero", "Decisiones sobre personas"] },
            { title: "Reglas de datos", bullets: ["Qué pasa y dónde se guarda", "Nunca tarjetas, Seguro Social, salud ni contraseñas por la IA"] }
          ],
          tryIt: "Escribe el diseño de una página de tu automatización: disparador, acciones, instrucción para la IA, punto de revisión humana y reglas de datos.",
          youCanNow: "diseñar una automatización con un paso de IA, un punto de revisión humana y reglas de datos seguras."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Diseñar flujos de trabajo inteligentes",
        questions: [
          { q: "En “Cuando alguien envía un formulario, agrega una fila a una hoja de cálculo”, ¿cuál es el disparador?", options: ["Agregar una fila", "La hoja de cálculo", "Alguien envía un formulario", "El correo"], answer: 2, why: "El disparador es el evento que la pone en marcha." },
          { q: "¿Qué le agrega un paso de IA a una automatización?", options: ["La capacidad de leer, clasificar, resumir o redactar", "Electricidad gratis", "Pagos automáticos a cualquiera", "Nada"], answer: 0, why: "Los pasos de IA se encargan de tareas de lenguaje como clasificar y redactar." },
          { q: "¿Qué paso es el mejor candidato para automatizar por completo?", options: ["Decidir si se aprueba la solicitud de vivienda de alguien", "Consolar a un cliente molesto", "Despedir a un empleado", "Copiar las respuestas de un formulario en una hoja de cálculo"], answer: 3, why: "Copiar de forma repetida y con reglas es ideal para automatizar." },
          { q: "¿Qué significa tener una “persona al tanto”?", options: ["Una persona está atrapada en un ciclo", "Una persona revisa o aprueba antes de que la automatización siga", "La automatización funciona sin personas", "Un tipo de disparador"], answer: 1, why: "Mantiene a una persona en control donde los errores importan." },
          { q: "¿Qué nunca debe pasar por un paso de IA?", options: ["Un resumen general de una solicitud", "Los números de tarjeta de los clientes", "La palabra “Pregunta”", "El horario del negocio"], answer: 1, why: "Los datos de pago son privados y riesgosos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crear, probar y poner en marcha",
      lessons: [
        {
          title: "Crear tu primera automatización",
          minutes: 6,
          goal: "Crear una automatización sencilla de un formulario a una hoja de cálculo y a un correo.",
          text: [
            "Empieza con la versión más sencilla que funcione. Google Forms puede guardar cada respuesta en una hoja de Google Sheets sin ninguna herramienta extra, y Microsoft Forms puede enviar las respuestas a Excel. Eso solo ya es una automatización.",
            "Para agregar acciones, usa una herramienta sin código como Zapier, Power Automate o Make. La mayoría tiene planes gratuitos o pruebas con límites; revisa la página de precios de cada herramienta, porque los planes cambian. Conecta tus cuentas, elige el disparador (nueva respuesta del formulario o nueva fila en la hoja) y luego agrega acciones (enviar un correo, crear una tarea).",
            "Agrega el paso de IA al final, cuando el flujo básico ya funcione. Muchas herramientas traen una acción de IA o se conectan a un servicio de IA. Pega la instrucción de tu diseño y envía su resultado a la siguiente acción, como un borrador de correo que espera la aprobación de una persona."
          ],
          steps: ["Haz un formulario con los campos que necesitas.", "Conéctalo a una hoja de cálculo.", "En una herramienta sin código, fija el disparador: nueva respuesta o nueva fila.", "Agrega una acción: enviar un correo o crear una tarea.", "Agrega el paso de IA con tu instrucción y envía su resultado a un borrador para aprobar."],
          words: [["Herramienta sin código", "un programa que te deja crear sin escribir código."], ["Conectar", "darle permiso a una app para trabajar con otra."], ["Campo", "una pregunta o casilla de un formulario."]],
          slides: [
            { title: "Empieza sencillo", bullets: ["Google Forms guarda en Sheets", "Microsoft Forms puede enviar a Excel"] },
            { title: "Agrega acciones", bullets: ["Zapier, Power Automate o Make", "Los planes gratuitos y las pruebas tienen límites", "Revisa la página de precios de cada una"] },
            { title: "La IA al final", bullets: ["Cuando el flujo básico ya funcione", "Pega tu instrucción", "El resultado va a un borrador para aprobar"] }
          ],
          sources: [{ name: "Zapier", url: "https://zapier.com/" }, { name: "Microsoft Power Automate", url: "https://www.microsoft.com/power-platform/products/power-automate" }, { name: "Make", url: "https://www.make.com/" }],
          tryIt: "Crea la primera parte de tu automatización: un formulario conectado a una hoja de cálculo. Si puedes, agrega una acción en una herramienta sin código, como un correo para ti por cada respuesta nueva.",
          youCanNow: "crear con herramientas sin código una automatización básica de formulario a hoja de cálculo y a correo."
        },
        {
          title: "Probar con datos de ejemplo",
          minutes: 5,
          goal: "Probar una automatización con entradas de ejemplo normales y difíciles y corregir lo que falle.",
          text: [
            "Nunca actives una automatización para personas reales hasta que pase las pruebas. Usa entradas de ejemplo inventadas, no datos reales de clientes.",
            "Prueba cinco casos: una entrada normal, un campo vacío, un mensaje muy largo, una entrada con errores de ortografía o poco común, y una que el paso de IA podría clasificar mal. Revisa cada paso: ¿apareció la fila?, ¿el correo llegó al lugar correcto?, ¿la IA clasificó y resumió bien?",
            "Escribe un registro de pruebas: entrada, resultado esperado, resultado real, pasó o falló, corrección. Correcciones comunes: hacer obligatorio un campo del formulario, ajustar la instrucción de la IA (“Responde con exactamente una palabra”) o agregar un filtro para que solo sigan ciertas entradas."
          ],
          steps: ["Escribe cinco entradas de ejemplo, con algunas difíciles.", "Pasa cada una por la automatización.", "Revisa el resultado de cada paso.", "Anota si pasó o falló en un registro de pruebas.", "Corrige y vuelve a probar las que fallaron."],
          words: [["Caso de prueba", "una entrada de ejemplo que se usa para comprobar que algo funciona."], ["Filtro", "una regla que deja seguir solo a ciertos elementos en una automatización."]],
          slides: [
            { title: "Prueba antes de activar", bullets: ["Solo datos de ejemplo inventados", "Nunca datos reales de clientes para probar"] },
            { title: "Cinco casos de prueba", bullets: ["Normal, campo vacío, muy largo", "Con errores o poco común", "Uno que la IA podría clasificar mal"] },
            { title: "Registra y corrige", bullets: ["Campos obligatorios y filtros", "Instrucciones de IA más precisas", "Vuelve a probar después de cada corrección"] }
          ],
          tryIt: "Pasa cinco entradas de ejemplo por tu automatización, con al menos dos difíciles. Anota un registro de pruebas y corrige un problema.",
          youCanNow: "probar una automatización con datos de ejemplo, registrar los resultados y corregir lo que falla."
        },
        {
          title: "Poner en marcha, vigilar y mejorar",
          minutes: 5,
          goal: "Activar la automatización con seguridad, vigilarla y saber qué hacer cuando falla.",
          text: [
            "Actívala primero para un grupo pequeño, como un solo formulario o una semana. Al principio, revisa los resultados todos los días. La mayoría de las herramientas muestran un historial de ejecuciones con cada vez que se ejecutó y si funcionó.",
            "Las automatizaciones se rompen: cambia una contraseña, se renombra un campo, un plan gratuito llega a su límite o el paso de IA empieza a clasificar raro. Configura una alerta de error a tu correo y nombra a un responsable que la revise.",
            "Escribe una hoja de instrucciones de una página: qué hace la automatización, dónde está, quién es el responsable y cómo apagarla. Si el responsable se va, otra persona puede mantenerla funcionando. Revísala cada pocos meses y pregunta: ¿sigue ahorrando tiempo?"
          ],
          steps: ["Actívala para un grupo pequeño o una semana.", "Al principio, revisa el historial de ejecuciones todos los días.", "Configura una alerta de error y nombra a un responsable.", "Escribe una hoja de instrucciones de una página.", "Revísala cada pocos meses."],
          words: [["Historial de ejecuciones", "una lista de cada vez que se ejecutó una automatización y si funcionó."], ["Alerta de error", "un mensaje que te avisa que una automatización falló."]],
          slides: [
            { title: "Empieza en pequeño", bullets: ["Un formulario o una semana", "Al principio, revisa los resultados cada día"] },
            { title: "Por qué se rompen", bullets: ["Cambian contraseñas o nombres de campos", "Se llega al límite del plan", "La IA empieza a clasificar distinto"] },
            { title: "Mantenla sana", bullets: ["Alertas de error y un responsable", "Hoja de instrucciones de una página", "Revísala cada pocos meses"] }
          ],
          tryIt: "Tarea final: termina tu automatización con su paso de IA y la aprobación humana, haz cinco pruebas y luego escribe la hoja de instrucciones de una página con el mapa del flujo de trabajo, el disparador y las acciones, los resultados de las pruebas y el responsable.",
          youCanNow: "diseñar, crear, probar y poner en marcha una automatización con IA con una persona en control."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crear, probar y poner en marcha",
        questions: [
          { q: "¿Cuál es la automatización más sencilla que puedes crear sin ninguna herramienta extra?", options: ["Un brazo robótico", "Una app de teléfono a medida", "Un servidor de pago", "Google Forms guardando las respuestas en una hoja de Google Sheets"], answer: 3, why: "Los formularios pueden guardar las respuestas en una hoja de cálculo por sí solos." },
          { q: "¿Cuándo debes agregar el paso de IA?", options: ["Cuando el flujo básico ya funcione", "Antes que todo lo demás", "Nunca", "Solo los fines de semana"], answer: 0, why: "Primero crea lo sencillo y luego agrega la IA." },
          { q: "¿Qué datos debes usar para probar?", options: ["Números de tarjeta de clientes reales", "Expedientes de pacientes reales", "Entradas de ejemplo inventadas", "Contraseñas"], answer: 2, why: "Prueba con datos de ejemplo para proteger a las personas reales." },
          { q: "El paso de IA devuelve oraciones largas cuando querías una sola palabra. ¿Cuál es la corrección?", options: ["Borrar la automatización", "Ignorarlo", "Agregar un segundo formulario", "Ajustar la instrucción: “Responde con exactamente una palabra”"], answer: 3, why: "Las instrucciones más claras dan resultados de IA más predecibles." },
          { q: "¿Por qué escribir una hoja de instrucciones de una página?", options: ["Para hacerla más lenta", "Lo exige la ley", "Para que otra persona pueda manejar o apagar la automatización", "Para compartir contraseñas"], answer: 2, why: "Mantiene la automatización funcionando si el responsable se va." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Automatización con IA y flujos de trabajo inteligentes",
    questions: [
      { q: "Automatizar significa:", options: ["Contratar más personal", "Que un programa haga pasos por ti sin que una persona los haga cada vez", "Trabajar más horas", "Comprar un robot"], answer: 1, why: "Las automatizaciones hacen los pasos por sí solas." },
      { q: "Un correo que llega y pone en marcha una automatización es un:", options: ["Disparador", "Filtro", "Campo", "Historial de ejecuciones"], answer: 0, why: "El evento que la inicia es el disparador." },
      { q: "“Enviar un correo de confirmación” en una automatización es una:", options: ["Disparador", "Instrucción", "Acción", "Responsable"], answer: 2, why: "Las acciones son lo que pasa después del disparador." },
      { q: "Zapier llama a una automatización:", options: ["Zap", "Flujo", "Escenario", "Tarjeta de receta"], answer: 0, why: "El término de Zapier es Zap." },
      { q: "¿Qué tarea es mejor dejar a una persona?", options: ["Archivar un recibo", "Enviar un recordatorio", "Copiar los datos de un formulario", "Decidir si alguien califica para recibir ayuda"], answer: 3, why: "Las decisiones sobre personas necesitan criterio humano." },
      { q: "Un mapa del flujo de trabajo muestra:", options: ["Solo el resultado final", "Cada paso, quién lo hace, la herramienta y el tiempo", "Los sueldos de los empleados", "Las direcciones de las oficinas"], answer: 1, why: "Muestra cómo se hace la tarea hoy." },
      { q: "¿Para qué paso sirve “borrador de IA más revisión humana”?", options: ["Agregar una fila a una hoja", "Escribir una respuesta a un cliente", "Guardar un archivo", "Poner en marcha la automatización"], answer: 1, why: "Los mensajes a clientes se deben revisar antes de enviarlos." },
      { q: "Una buena instrucción de IA en una automatización es:", options: ["Vaga, como “haz algo”", "Vacía", "Una contraseña", "Exacta, como “Responde con una palabra: Presupuesto, Pregunta o Queja”"], answer: 3, why: "Las instrucciones exactas dan resultados predecibles." },
      { q: "¿Dónde debes poner un punto de revisión humana?", options: ["Dondequiera que un error haría daño, como en los mensajes a clientes", "En ningún lado", "Solo en el disparador", "Solo después de borrar la automatización"], answer: 0, why: "Los puntos de revisión atrapan los errores costosos." },
      { q: "Las reglas de datos de tu diseño dicen:", options: ["Qué fuente usar", "Quién recibe un bono", "Qué pasa, dónde se guarda y qué nunca pasa por la IA", "Nada"], answer: 2, why: "Protegen la información privada." },
      { q: "Una pregunta o casilla de un formulario se llama:", options: ["Disparador", "Zap", "Filtro", "Campo"], answer: 3, why: "Cada casilla es un campo." },
      { q: "Los planes gratuitos de las herramientas sin código:", options: ["Son ilimitados para siempre", "Siempre cuestan $1,000", "Tienen límites; revisa la página de precios", "No existen"], answer: 2, why: "Los planes cambian, así que revisa la página oficial de precios." },
      { q: "Conectar apps en una herramienta de automatización significa:", options: ["Enchufar cables", "Darle permiso a una app para trabajar con otra", "Compartir tu contraseña en público", "Comprar computadoras nuevas"], answer: 1, why: "Las conexiones son permisos entre apps." },
      { q: "¿Cuántos casos de prueba sugiere el curso como mínimo?", options: ["Cinco", "Uno", "Cero", "Quinientos"], answer: 0, why: "Cinco casos cubren entradas normales y difíciles." },
      { q: "¿Cuál es un caso de prueba difícil?", options: ["Solo una entrada perfectamente normal", "Ninguna entrada, nunca probada", "Un formulario con un campo vacío", "Tu contraseña"], answer: 2, why: "Los campos vacíos suelen romper las automatizaciones." },
      { q: "Un filtro en una automatización:", options: ["Deja seguir solo a ciertos elementos", "Limpia la pantalla", "Borra la hoja de cálculo", "Pone en marcha la automatización"], answer: 0, why: "Los filtros controlan qué elementos siguen adelante." },
      { q: "Cuando la activas por primera vez, debes:", options: ["Activarla para todos y no revisarla nunca", "Borrar el registro de pruebas", "Quitar el punto de revisión humana", "Empezar en pequeño y revisar los resultados cada día"], answer: 3, why: "Empezar en pequeño limita el daño de los problemas." },
      { q: "El historial de ejecuciones muestra:", options: ["Tu historial de navegación", "Cada vez que se ejecutó la automatización y si funcionó", "Las horas de los empleados", "Las contraseñas de los clientes"], answer: 1, why: "Te ayuda a detectar fallas." },
      { q: "¿Cuál es una razón común por la que se rompen las automatizaciones?", options: ["Se puso el sol", "Cambió una contraseña o el nombre de un campo", "Demasiados clientes contentos", "El logo cambió de color"], answer: 1, why: "Los cambios en las apps conectadas rompen las automatizaciones." },
      { q: "Toda automatización debe tener:", options: ["Nadie responsable", "Acceso ilimitado a todos los datos", "Un lugar secreto", "Un responsable que revise las alertas de error"], answer: 3, why: "Un responsable la mantiene sana." }
    ]
  }
};
