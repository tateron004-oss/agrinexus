"use strict";

// Koach Learn course (shared, bonus), Spanish translation of "Remote Work Skills with AI". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-remote-work-es",
  lang: "es",
  translationOf: "ai-remote-work",
  category: "Re-Entry",
  name: "Habilidades para el trabajo remoto con IA",
  skills: "Preparar un espacio de trabajo en casa, Entrar y participar en videollamadas, Escribir mensajes de trabajo claros con IA, Trabajar en documentos compartidos, Organizar tu propio tiempo, Encontrar empleos remotos reales y evitar estafas",
  outcome: "prepararte para trabajar desde casa, entrar a una videollamada de forma profesional, escribir actualizaciones y mensajes claros con ayuda de la IA, colaborar en un documento compartido, planificar tu propia jornada y distinguir un empleo remoto real de una estafa.",
  about: [
    "Hoy muchos empleos permiten trabajar desde casa parte del tiempo o todo el tiempo: atención al cliente, captura de datos, agendar citas, asistencia virtual, ventas, clases y soporte técnico. El trabajo remoto puede abrir puertas cuando el transporte, el cuidado de los niños, una discapacidad o el lugar donde vives hacen difícil ir y venir del trabajo.",
    "Trabajar a distancia requiere sus propias habilidades: escribir con claridad, videollamadas, documentos compartidos, organizar tu propio tiempo y cuidarte en internet. Los asistentes de IA como ChatGPT, Microsoft Copilot y Google Gemini pueden ayudarte con buena parte de eso.",
    "Este curso es para personas que vuelven a casa, personas que buscan empleo en programas de capacitación laboral y miembros de la comunidad que no tienen empleos cerca. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Arma un kit de preparación para el trabajo remoto: una foto o lista de tu espacio de trabajo, una grabación o lista de comprobación de una prueba de videollamada de un minuto, tres mensajes de trabajo escritos con ayuda de la IA (una actualización de estado, una pregunta a un supervisor y una nota de “voy a llegar tarde”), un documento compartido que editaste con un comentario y un cambio sugerido, un plan de un día por bloques de tiempo y una oferta de empleo remoto real revisada con las señales de estafa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos que vuelven a casa después de estar en prisión (reinserción) y que se interesan en empleos remotos como atención al cliente, captura de datos, apoyo administrativo o centro de llamadas, a menudo por necesidades de transporte, horario o familia.",
    startingPoint: "Saben hacer llamadas y enviar mensajes de texto en un teléfono; algunos tienen una cuenta de correo y han probado un asistente de IA. Muchos no han usado herramientas de videollamadas, chats de trabajo ni documentos compartidos, y puede que todavía no tengan computadora ni internet en casa.",
    gap: "Los empleos remotos pueden ampliar las opciones de trabajo para quienes no tienen carro o tienen obligaciones familiares, pero exigen tecnología confiable, escribir con claridad, manejar el propio tiempo y saber detectar las muchas estafas de trabajo desde casa. Las personas necesitan estas habilidades básicas de trabajo remoto para postularse con confianza y conservar un empleo remoto.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 6.º grado)",
      "Aparatos: puede que solo tengan un teléfono o una computadora de biblioteca; muchos empleos remotos necesitan una computadora e internet en casa",
      "Tiempo: lecciones de 5 minutos que caben entre citas y el trabajo",
      "Algunas condiciones de libertad condicional o probatoria limitan el uso de internet; cada persona sigue sus propias condiciones",
      "Alto riesgo de estafas y de privacidad: no se comparten números bancarios ni del Seguro Social antes de una oferta verificada"
    ],
    prerequisites: "Ninguno. \"Introducción a la IA y a la confianza digital\" es un buen primer curso para quienes son nuevos en la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En casa o en el lugar donde piensas trabajar", action: "preparar un espacio de trabajo y revisar tu internet, tus audífonos y la seguridad de tu cuenta", standard: "con una prueba de velocidad hecha, el inicio de sesión en dos pasos activado y el bloqueo de pantalla configurado" },
    { id: "O2", condition: "Con el enlace de una reunión", action: "entrar a una videollamada y usar silenciar, cámara, chat y compartir pantalla", standard: "entrando antes de la hora y resolviendo un problema de sonido sin ayuda" },
    { id: "O3", condition: "Ante una situación de trabajo", action: "escribir un mensaje de trabajo corto y claro con ayuda de la IA", standard: "empezando por lo importante, diciendo qué necesitas y para cuándo, y sin datos de clientes en herramientas de IA no aprobadas" },
    { id: "O4", condition: "Con el enlace de un documento compartido", action: "agregar un comentario, hacer un cambio sugerido y abrir el historial de versiones", standard: "sin cambiar la configuración para compartir" },
    { id: "O5", condition: "Con una lista de tareas para una jornada de trabajo", action: "crear un plan por bloques de tiempo con horas de inicio, descanso y fin", standard: "que encaje con tu vida real y termine con una actualización de estado" },
    { id: "O6", condition: "Con una oferta de empleo remoto", action: "revisar si el empleo es real o una estafa de trabajo desde casa", standard: "usando todas las señales de alerta antes de compartir cualquier número privado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepararte para trabajar a distancia",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tu espacio de trabajo en casa y lo básico de la tecnología",
          minutes: 5,
          goal: "Preparar un espacio de trabajo y comprobar que tu tecnología está lista para el trabajo remoto.",
          text: [
            "Necesitas una conexión a internet confiable, una computadora (muchos empleos no permiten trabajar solo con el teléfono), unos audífonos con micrófono y un lugar tranquilo. Una mesa pequeña contra una pared sirve. Tener buena luz de frente, no detrás de ti, ayuda en la cámara.",
            "Revisa tu internet con una prueba de velocidad gratuita antes de postularte. Si es lento o no tienes internet en casa, pregunta en tu biblioteca, tu programa de capacitación laboral o tu proveedor de internet por opciones de bajo costo; algunos programas cambian, así que revisa qué hay disponible donde vives.",
            "Protege las cuentas del trabajo como si fueran tuyas: frases de contraseña seguras, inicio de sesión en dos pasos, actualizaciones de programas y nada de trabajar en computadoras públicas a menos que tu empleador lo permita. Bloquea la pantalla cuando te levantes."
          ],
          steps: ["Elige un lugar tranquilo con una mesa y buena luz de frente.", "Consigue unos audífonos con micrófono.", "Haz una prueba de velocidad de internet gratuita.", "Activa las actualizaciones, el inicio de sesión en dos pasos y el bloqueo de pantalla.", "Pregunta por internet de bajo costo si lo necesitas."],
          words: [["Trabajo remoto", "hacer tu trabajo desde casa u otro lugar fuera de la oficina del empleador."], ["Audífonos con micrófono", "audífonos que tienen un micrófono para hablar."], ["Ancho de banda", "cuántos datos puede llevar tu internet; para el video, cuanto más, mejor."]],
          slides: [
            { title: "Lo que necesitas", bullets: ["Internet confiable y una computadora", "Audífonos con micrófono", "Un lugar tranquilo con una mesa"] },
            { title: "Que te vean y te oigan bien", bullets: ["Luz de frente, no detrás de ti", "Fondo tranquilo"] },
            { title: "Mantente seguro", bullets: ["Frases de contraseña e inicio de sesión en dos pasos", "Actualizaciones activadas", "Bloquea la pantalla cuando te levantes"] }
          ],
          tryIt: "Prepara tu espacio de trabajo, haz una prueba de velocidad de internet y escribe una lista de lo que tienes y lo que todavía te falta.",
          youCanNow: "preparar un espacio de trabajo en casa seguro y que funcione.",
          quickCheck: [
            { objective: "O1", q: "Además de internet, ¿qué piden muchos empleos remotos?", options: ["Solo una tableta", "Un reloj inteligente", "Una computadora, no solo un teléfono", "Una impresora"], answer: 2, why: "Muchos empleos remotos no permiten trabajar solo con el teléfono, así que necesitas una computadora." },
            { objective: "O1", q: "Tu prueba de velocidad muestra que tu internet es lento y quieres postularte a empleos remotos. ¿Qué haces?", options: ["Preguntar en la biblioteca, en un programa de empleo o a tu proveedor de internet por opciones de bajo costo", "Postularte de todos modos y esperar que funcione", "Usar el Wi-Fi de un desconocido sin preguntar", "Renunciar al trabajo remoto"], answer: 0, why: "Las bibliotecas, los programas de empleo y los proveedores pueden conocer opciones de internet de bajo costo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Entrar y participar en videollamadas",
          minutes: 5,
          goal: "Entrar a una videollamada de forma profesional y resolver los problemas comunes.",
          text: [
            "La mayoría de los empleos remotos usan herramientas de video como Zoom, Microsoft Teams o Google Meet. Por lo general entras haciendo clic en un enlace de un correo o de una invitación del calendario. Entra dos o tres minutos antes para resolver cualquier problema.",
            "Conoce los controles básicos: silenciar y activar el micrófono, encender y apagar la cámara, compartir tu pantalla y usar el chat. Quédate en silencio cuando no estés hablando. Mira a la cámara cuando hables y usa tu nombre como nombre visible.",
            "Si algo falla: revisa en la configuración que estén elegidos el micrófono y el altavoz correctos, sal y vuelve a entrar, o llama por teléfono si la invitación trae un número. Avísale al anfitrión por el chat. Muchas herramientas también ofrecen subtítulos en vivo y resúmenes de reunión hechos con IA; sigue las reglas de tu empleador sobre su uso."
          ],
          steps: ["Haz clic en el enlace de la reunión dos o tres minutos antes.", "Revisa tu nombre visible, tu cámara y tu micrófono.", "Quédate en silencio cuando no hables.", "Usa el chat para avisar si tienes problemas.", "Si falla el audio, revisa la configuración del dispositivo o vuelve a entrar."],
          words: [["Silenciar", "apagar tu micrófono para que los demás no te oigan."], ["Compartir pantalla", "mostrar la pantalla de tu computadora a los demás en la llamada."], ["Subtítulos", "palabras en la pantalla que muestran lo que dice la gente."]],
          slides: [
            { title: "Entra bien", bullets: ["Haz clic en el enlace 2 o 3 minutos antes", "Usa tu nombre real", "Revisa la cámara y el micrófono"] },
            { title: "Controles básicos", bullets: ["Silenciar y activar el micrófono", "Encender y apagar la cámara", "Compartir pantalla y chat"] },
            { title: "Cuando algo falla", bullets: ["Revisa la configuración del dispositivo", "Sal y vuelve a entrar", "Avísale al anfitrión por el chat"] }
          ],
          tryIt: "Empieza una reunión de prueba gratuita con un amigo, un familiar o contigo mismo en Zoom, Teams o Google Meet. Practica silenciar, la cámara, el chat y compartir pantalla.",
          youCanNow: "entrar y participar en una videollamada de forma profesional y resolver los problemas comunes.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace compartir pantalla en una videollamada?", options: ["Silencia a todos", "Graba la reunión", "Apaga tu cámara", "Muestra la pantalla de tu computadora a los demás en la llamada"], answer: 3, why: "Compartir pantalla muestra tu pantalla a las otras personas de la llamada." },
            { objective: "O2", q: "Tu audio deja de funcionar en una reunión del equipo. ¿Qué haces?", options: ["Salir sin decir nada", "Avisarle al anfitrión por el chat, revisar la configuración de tu aparato o volver a entrar", "Gritar más fuerte", "Apagar tu computadora"], answer: 1, why: "Usa el chat para avisarle al anfitrión, y luego revisa la configuración, vuelve a entrar o llama por teléfono." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir mensajes de trabajo claros con IA",
          minutes: 5,
          goal: "Escribir mensajes de trabajo cortos, claros y profesionales con ayuda de la IA.",
          text: [
            "En el trabajo remoto, casi toda la comunicación es escrita: chat (como Teams o Slack) y correo. Escribir con claridad es la habilidad remota más importante. Empieza por lo principal, sé breve y di qué necesitas y para cuándo.",
            "La IA te puede ayudar: “Convierte esto en un mensaje corto y amable para mi supervisor: terminé los 40 registros de clientes, 3 no tenían número de teléfono, ¿los llamo o los salto?”. Luego revisa que suene como tú y que no sea demasiado formal.",
            "Tipos de mensaje útiles: una actualización de estado diaria (hecho, lo que sigue, bloqueado), una pregunta clara y un aviso cuando vas a llegar tarde o estás enfermo. Nunca pegues datos de clientes, contraseñas ni secretos de la empresa en una herramienta de IA que tu empleador no haya aprobado."
          ],
          steps: ["Empieza por lo principal.", "Di qué necesitas y para cuándo.", "Pide a la IA que lo haga corto y amable.", "Revisa que suene como tú.", "No pongas datos de clientes ni de la empresa en herramientas de IA no aprobadas."],
          words: [["Actualización de estado", "un mensaje corto sobre lo que hiciste, lo que sigue y cualquier problema."], ["App de chat", "una herramienta de mensajes de trabajo como Microsoft Teams o Slack."]],
          slides: [
            { title: "Escribir es la habilidad remota clave", bullets: ["Empieza por lo principal", "Corto y claro", "Qué necesitas y para cuándo"] },
            { title: "Tres mensajes clave", bullets: ["Estado: hecho, lo que sigue, bloqueado", "Una pregunta clara", "Aviso de retraso o enfermedad"] },
            { title: "La IA ayuda, con seguridad", bullets: ["Que sea corto y amable", "Revisa que suene como tú", "Nada de datos de la empresa en herramientas no aprobadas"] }
          ],
          tryIt: "Con ayuda de la IA, escribe tres mensajes: una actualización de estado, una pregunta a un supervisor y una nota de “voy a llegar 15 minutos tarde”. Edita cada uno para que suene como tú.",
          youCanNow: "escribir mensajes de trabajo claros y cortos con ayuda de la IA.",
          quickCheck: [
            { objective: "O3", q: "¿Qué tres cosas van en una actualización de estado diaria?", options: ["Tu almuerzo, tu ánimo y el clima", "Lo que hiciste, lo que sigue y cualquier cosa que te esté frenando", "Cada correo que leíste", "Tu contraseña y tu hora de inicio de sesión"], answer: 1, why: "Una actualización de estado dice qué está hecho, qué sigue y qué está frenado." },
            { objective: "O3", q: "Quieres que la IA te ayude a escribir un mensaje sobre la queja de un cliente. ¿Qué dejas fuera?", options: ["Lo más importante", "Lo que necesitas de tu supervisor", "Para cuándo necesitas una respuesta", "El nombre y el número de teléfono del cliente"], answer: 3, why: "Nunca pegues datos de clientes en una herramienta de IA que tu empleador no ha aprobado." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararte para trabajar a distancia",
        questions: [
          { objective: "O1", q: "¿Dónde debe estar la luz en las videollamadas?", options: ["Detrás de ti", "En ningún lado", "De frente", "Debajo de la mesa"], answer: 2, why: "La luz de frente hace que se te vea la cara." },
          { objective: "O1", q: "¿Qué debes hacer cuando te levantas de tu computadora de trabajo?", options: ["Bloquear la pantalla", "Dejarla abierta", "Publicar tu contraseña", "Apagar el internet"], answer: 0, why: "Bloquear la pantalla protege los datos del trabajo." },
          { objective: "O2", q: "¿Cuándo debes entrar a una videollamada?", options: ["Diez minutos tarde", "Solo si te lo recuerdan dos veces", "Nunca", "Dos o tres minutos antes"], answer: 3, why: "Entrar antes da tiempo para resolver problemas." },
          { objective: "O2", q: "Los demás no te oyen en una llamada. ¿Qué revisas primero?", options: ["Tu bandeja de entrada", "Que no estés silenciado y que esté elegido el micrófono correcto", "El brillo de tu pantalla", "El clima"], answer: 1, why: "El silencio y la configuración del dispositivo causan la mayoría de los problemas de audio." },
          { objective: "O3", q: "¿Qué es una buena actualización de estado?", options: ["Una historia larga sobre tu fin de semana", "Lo que hice, lo que sigue y lo que me bloquea", "Nada", "Solo emojis"], answer: 1, why: "Las actualizaciones de estado mantienen informado al equipo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabajar bien y encontrar empleos remotos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Trabajar en documentos compartidos",
          minutes: 5,
          goal: "Editar, comentar y sugerir cambios en un documento compartido.",
          text: [
            "Los equipos remotos trabajan en el mismo documento a la vez con Google Docs, Google Sheets o Microsoft 365 (Word, Excel) en línea. Lo abres desde un enlace compartido y ves los cambios de los demás mientras escriben.",
            "Aprende tres movimientos. Comentar: selecciona un texto y agrega un comentario para preguntar o sugerir sin cambiarlo. Sugerir: Google Docs tiene el modo Sugerencia y Word tiene Control de cambios, así que tus ediciones se muestran para que otros las acepten. El historial de versiones te deja ver o recuperar versiones anteriores.",
            "Ten cuidado con la configuración para compartir: comparte solo con las personas que lo necesitan, y no cambies la opción “cualquier persona con el enlace” sin preguntar. Muchas herramientas traen IA incorporada (como Gemini en Google Workspace o Copilot en Microsoft 365) si tu empleador la activa."
          ],
          steps: ["Abre el documento compartido desde su enlace.", "Selecciona un texto y agrega un comentario.", "Activa el modo Sugerencia (Google Docs) o Control de cambios (Word) y haz una edición.", "Abre el historial de versiones para ver versiones anteriores.", "Revisa la configuración para compartir antes de compartirlo con más gente."],
          words: [["Documento compartido", "un archivo que varias personas pueden abrir y editar en línea."], ["Comentario", "una nota unida a una parte de un documento."], ["Historial de versiones", "un registro de versiones anteriores de un archivo que puedes ver o recuperar."]],
          slides: [
            { title: "Trabajar juntos en línea", bullets: ["Google Docs y Sheets", "Word y Excel de Microsoft 365 en línea", "Ves los cambios mientras otros escriben"] },
            { title: "Tres movimientos", bullets: ["Comentar", "Sugerir o Control de cambios", "Historial de versiones"] },
            { title: "Comparte con cuidado", bullets: ["Solo con quienes lo necesitan", "Pregunta antes de cambiar la opción del enlace"] }
          ],
          tryIt: "Crea un documento de Google Docs o de Word en línea, compártelo con alguien de confianza y practiquen juntos un comentario, una edición sugerida y ver el historial de versiones.",
          youCanNow: "colaborar en un documento compartido con comentarios, sugerencias e historial de versiones.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace Control de cambios en Word?", options: ["Muestra tus ediciones para que otros las revisen y las acepten", "Borra las versiones viejas", "Comparte el archivo con todos", "Cuenta las palabras"], answer: 0, why: "Control de cambios muestra las ediciones para que otros las acepten, como el modo Sugerencia en Google Docs." },
            { objective: "O4", q: "Un compañero te pide compartir el documento del equipo con un amigo de fuera de la empresa. ¿Qué haces?", options: ["Cambiarlo a \"cualquier persona con el enlace\"", "Enviar el enlace de inmediato", "Consultar con el dueño del documento antes de compartirlo con más gente", "Copiar todo el documento en un correo"], answer: 2, why: "Comparte solo con quienes lo necesitan, y pregunta antes de cambiar la configuración para compartir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Organizar tu propio tiempo",
          minutes: 5,
          goal: "Planificar una jornada remota con bloques de tiempo y horas claras de inicio y fin.",
          text: [
            "En casa, nadie pasa junto a tu escritorio. Tú organizas tu propio tiempo. Fija una hora regular de inicio, descansos y una hora de fin, y diles a las personas con quienes vives cuándo estás trabajando.",
            "Planificar por bloques de tiempo ayuda: divide el día en bloques para trabajo concentrado, mensajes, reuniones y descansos. Pide a la IA: “Haz un plan por bloques de tiempo para mi jornada de 9 a 5 con 30 minutos de almuerzo. Tareas: [lista]. Pon el trabajo concentrado en la mañana y revisa los mensajes a horas fijas”.",
            "Anota lo que terminas. Al final del día, escribe una actualización de estado corta. Si te cuesta por distracciones, por el cuidado de los niños o por salud, díselo pronto a tu supervisor; muchos tienen opciones si lo saben."
          ],
          steps: ["Fija la hora de inicio, los descansos y la hora de fin.", "Haz la lista de tareas de hoy.", "Pide a la IA un plan por bloques de tiempo.", "Ajústalo a tu vida real.", "Termina el día con una actualización de estado corta."],
          words: [["Bloques de tiempo", "planificar tu día en bloques de tiempo para tareas concretas."], ["Trabajo concentrado", "trabajo que se hace sin interrupciones."]],
          slides: [
            { title: "Tú organizas tu tiempo", bullets: ["Inicio, descansos y fin regulares", "Diles en casa cuál es tu horario"] },
            { title: "Bloques de tiempo", bullets: ["Trabajo concentrado, mensajes, reuniones, descansos", "La IA puede hacer el borrador del plan"] },
            { title: "No pierdas el rumbo", bullets: ["Actualización de estado al final del día", "Avísale pronto a tu supervisor si hay problemas"] }
          ],
          tryIt: "Pide a la IA un plan por bloques de tiempo para una jornada real o de práctica, ajústalo y síguelo al menos medio día. Escribe una actualización corta al final del día.",
          youCanNow: "planificar y organizar una jornada de trabajo remoto con bloques de tiempo.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un bloque de tiempo?", options: ["Una computadora descompuesta", "Una reunión a la que no vas", "Una parte fija del día para un tipo de tarea", "Un tipo de contraseña"], answer: 2, why: "Planificar por bloques divide el día en partes para el trabajo concentrado, los mensajes, las reuniones y los descansos." },
            { objective: "O5", q: "El plan por bloques de la IA pone el trabajo concentrado a las 3 de la tarde, cuando tus hijos llegan de la escuela. ¿Qué haces?", options: ["Mover el trabajo concentrado a una hora más tranquila que encaje con tu vida real", "Seguirlo tal cual", "Saltarte el trabajo concentrado", "Mejor trabajar hasta la medianoche"], answer: 0, why: "Ajusta el plan de la IA a tu vida real." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Encontrar empleos remotos reales y evitar estafas",
          minutes: 6,
          goal: "Buscar empleos remotos en fuentes de confianza y detectar las estafas de trabajo desde casa.",
          text: [
            "Busca en lugares de confianza: las páginas de empleo de las empresas, sitios de empleo conocidos, la bolsa de trabajo de tu estado y tu American Job Center local (un centro de empleo gratuito de EE. UU.). Usa el filtro de “remoto” y lee dónde permite vivir el empleo; algunos empleos remotos son solo para ciertos estados o países.",
            "Las estafas de trabajo desde casa son comunes. La FTC (la agencia de EE. UU. que protege a los consumidores) advierte sobre promesas de mucha paga por poco trabajo, que te pidan pagar kits de inicio, capacitaciones o certificaciones, que te envíen un cheque para depositar y devolver una parte, y reenviar paquetes. Los empleadores honestos no te cobran por darte un empleo.",
            "Revisa antes de compartir: busca tú mismo la empresa, asegúrate de que el correo venga del dominio real de la empresa (no de un correo gratuito) y desconfía de las entrevistas hechas solo por chat de texto. No des números de banco ni del Seguro Social hasta tener una oferta verificada. Denuncia las estafas en ReportFraud.ftc.gov."
          ],
          steps: ["Busca en fuentes de empleo de confianza con el filtro de remoto.", "Revisa dónde permite vivir el empleo.", "Busca la empresa por tu cuenta.", "Cuidado con los cobros, los cheques para depositar, el reenvío de paquetes y las entrevistas solo por texto.", "Comparte números privados solo después de una oferta verificada."],
          words: [["Estafa de trabajo desde casa", "un empleo remoto falso hecho para robar dinero o información."], ["Dominio", "la parte de un correo o una dirección web que va después de la @ o de www, como empresa.com."]],
          slides: [
            { title: "Dónde buscar", bullets: ["Páginas de empleo de empresas y sitios conocidos", "Bolsa de trabajo del estado y American Job Centers", "Revisa dónde permite vivir el empleo"] },
            { title: "Señales de estafa (FTC)", bullets: ["Mucha paga por poco trabajo", "Pagar kits, capacitaciones o certificados", "Depositar un cheque y devolver dinero"] },
            { title: "Revisa antes de compartir", bullets: ["Busca tú mismo la empresa", "Dominio de correo real de la empresa", "Números privados solo tras una oferta verificada"] }
          ],
          sources: [{ name: "FTC: Estafas de empleo", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Tarea final: busca una oferta de empleo remoto real, revísala con las señales de estafa y guárdala. Súmala a tu lista del espacio de trabajo, tu prueba de videollamada, tus tres mensajes, tu práctica con el documento compartido y tu plan por bloques de tiempo para terminar tu kit de preparación para el trabajo remoto.",
          youCanNow: "prepararte, comunicarte, colaborar y organizar tu tiempo para el trabajo remoto, y encontrar empleos remotos reales de forma segura.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es una señal de alerta de una estafa de trabajo desde casa?", options: ["La oferta dice dónde puedes vivir", "El reclutador escribe desde el dominio propio de la empresa", "La empresa tiene una página de empleos", "Tienes que pagar un kit de inicio antes de empezar"], answer: 3, why: "Los empleadores honestos no te cobran por darte un empleo." },
            { objective: "O6", q: "Una \"empresa\" te ofrece un empleo remoto después de una entrevista solo por mensajes de texto y te pide ya tu número de cuenta bancaria. ¿Qué haces?", options: ["Enviarlo para que te paguen más rápido", "No compartirlo; buscar tú mismo la empresa y denunciarla si es una estafa", "Enviar mejor tu número del Seguro Social", "Pedirles que te manden un cheque por mensaje"], answer: 1, why: "Las entrevistas solo por mensajes y los pedidos tempranos de números bancarios son señales de alerta; comparte números privados solo después de una oferta verificada." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Trabajar bien y encontrar empleos remotos",
        questions: [
          { objective: "O4", q: "En Google Docs, ¿qué modo hace que tus ediciones se muestren como sugerencias para que otros las acepten?", options: ["Modo Borrar", "Modo Imprimir", "Modo Noche", "Modo Sugerencia"], answer: 3, why: "El modo Sugerencia muestra las ediciones para que se aprueben." },
          { objective: "O4", q: "¿Qué te deja hacer el historial de versiones?", options: ["Ver o recuperar versiones anteriores de un archivo", "Borrar el archivo para siempre", "Compartir contraseñas", "Cambiar tu nombre"], answer: 0, why: "Guarda un registro de las versiones anteriores." },
          { objective: "O5", q: "¿Qué es planificar por bloques de tiempo?", options: ["Bloquear sitios web", "Apagar el reloj", "Planificar tu día en bloques para tareas concretas", "Trabajar sin descansos"], answer: 2, why: "Los bloques protegen el trabajo concentrado." },
          { objective: "O6", q: "Un “empleo remoto” te pide comprar un kit de inicio de $200 antes de empezar. Según la FTC, esto es:", options: ["Una contratación normal", "Un impuesto", "Un beneficio", "Una señal de alerta de estafa"], answer: 3, why: "Los empleadores honestos no te cobran por darte un empleo." },
          { objective: "O6", q: "Un reclutador te escribe desde un correo gratuito y quiere entrevistarte solo por chat de texto. Debes:", options: ["Enviarle tus datos bancarios", "Pagar una cuota", "Buscar tú mismo la empresa y tener cuidado", "Ignorar todos los empleos para siempre"], answer: 2, why: "Son señales comunes de un empleo falso." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Habilidades para el trabajo remoto con IA",
    questions: [
      { objective: "O1", q: "Trabajo remoto significa:", options: ["Trabajar solo de noche", "Hacer tu trabajo fuera de la oficina del empleador", "Trabajo sin paga", "Usar un control remoto"], answer: 1, why: "Es el trabajo que se hace desde casa u otro lugar." },
      { objective: "O1", q: "¿Qué cosa es la más importante para las videollamadas?", options: ["Unos audífonos con micrófono", "Una silla elegante", "Una segunda televisión", "Una impresora"], answer: 0, why: "En las llamadas, lo que más importa es un audio claro." },
      { objective: "O1", q: "¿Cómo puedes saber si tu internet es lo bastante rápido?", options: ["Adivinando", "Preguntándole a la IA", "Haciendo una prueba de velocidad gratuita", "Contando tus apps"], answer: 2, why: "Una prueba de velocidad lo mide." },
      { objective: "O1", q: "¿Qué mantiene segura tu cuenta del trabajo?", options: ["El inicio de sesión en dos pasos", "Compartir tu contraseña con tu familia", "Escribirla en la pantalla", "Desactivar las actualizaciones"], answer: 0, why: "El inicio de sesión en dos pasos frena la mayoría de los ataques." },
      { objective: "O2", q: "¿Cómo entras por lo general a una videollamada de trabajo?", options: ["Llamando a un número cualquiera", "Esperando a que alguien te visite", "Enviando una carta", "Haciendo clic en el enlace del correo o de la invitación del calendario"], answer: 3, why: "Las invitaciones traen un enlace a la reunión." },
      { objective: "O2", q: "Cuando no estás hablando en una llamada, por lo general debes:", options: ["Poner música", "Quedarte en silencio", "Salir de la llamada", "Subir el volumen"], answer: 1, why: "Silenciarte evita el ruido de fondo." },
      { objective: "O2", q: "Compartir pantalla significa:", options: ["Romper tu pantalla", "Mostrar la pantalla de tu computadora a los demás en la llamada", "Comprar una pantalla nueva", "Esconder tu pantalla"], answer: 1, why: "Deja que otros vean lo que tú ves." },
      { objective: "O3", q: "La habilidad más importante en el trabajo remoto es:", options: ["Escribir todo en mayúsculas", "Las llamadas largas", "Evitar los mensajes", "Escribir con claridad"], answer: 3, why: "Casi toda la comunicación remota es escrita." },
      { objective: "O3", q: "Un mensaje de trabajo claro:", options: ["Empieza por lo principal y dice qué necesitas y para cuándo", "Esconde lo principal al final", "Es lo más largo posible", "No pide nada"], answer: 0, why: "Los mensajes claros reciben respuestas más rápidas." },
      { objective: "O3", q: "¿Qué nunca debe entrar en una herramienta de IA que tu empleador no ha aprobado?", options: ["Un mensaje de práctica sobre llegar tarde", "Preguntas generales de gramática", "Datos de clientes", "La fecha de un día festivo"], answer: 2, why: "Los datos de los clientes se deben proteger." },
      { objective: "O3", q: "Vas a llegar tarde a tu turno. ¿Qué es lo mejor?", options: ["No decir nada", "Conectarte tarde sin explicar", "Renunciar", "Enviar un aviso corto antes de tu hora de entrada"], answer: 3, why: "Avisar con tiempo es profesional." },
      { objective: "O4", q: "Un comentario en un documento compartido:", options: ["Borra el documento", "Deja a todos sin acceso", "Agrega una nota sin cambiar el texto", "Lo imprime"], answer: 2, why: "Los comentarios preguntan o sugieren sin editar." },
      { objective: "O4", q: "En Word, la función que muestra tus ediciones para que otros las revisen es:", options: ["Contar palabras", "Control de cambios", "Revisión ortográfica", "Color de página"], answer: 1, why: "Control de cambios registra las ediciones." },
      { objective: "O4", q: "Antes de cambiar un documento a “cualquier persona con el enlace”, debes:", options: ["Preguntarle a quien es su dueño", "Hacerlo y ya", "Publicar el enlace en internet", "Borrar el documento"], answer: 0, why: "La configuración para compartir protege la información." },
      { objective: "O5", q: "Una hora fija de fin cuando trabajas desde casa ayuda a:", options: ["Nada", "Que trabajes más horas sin paga", "Mantener el equilibrio entre el trabajo y la casa", "La velocidad de tu internet"], answer: 2, why: "Los límites evitan el agotamiento." },
      { objective: "O5", q: "Si el cuidado de los niños te dificulta el trabajo, lo mejor es:", options: ["Decírselo pronto a tu supervisor", "Esconderlo", "Dejar de conectarte", "Inventar tus actualizaciones de estado"], answer: 0, why: "Los supervisores pueden ayudar si lo saben a tiempo." },
      { objective: "O6", q: "Algunos empleos remotos solo contratan a personas que:", options: ["No tienen computadora", "Nunca usan el correo", "Trabajan gratis", "Viven en ciertos estados o países"], answer: 3, why: "Revisa las reglas de ubicación en la oferta." },
      { objective: "O6", q: "Un reclutador de una empresa real suele escribir desde:", options: ["Un correo gratuito cualquiera", "El dominio propio de la empresa", "Una app solo de texto", "Solo mensajes privados de redes sociales"], answer: 1, why: "El dominio de la empresa es señal de un reclutador real." },
      { objective: "O6", q: "Según la FTC, que te pidan reenviar paquetes desde tu casa es:", options: ["Un empleo remoto normal", "Parte de una estafa", "Un programa del gobierno", "Seguro si paga bien"], answer: 1, why: "Los empleos de reenvío de paquetes son una estafa conocida." },
      { objective: "O6", q: "¿Dónde denuncias una estafa de empleo en EE. UU.?", options: ["En el correo del estafador", "En una sección de comentarios", "En ningún lado", "En ReportFraud.ftc.gov"], answer: 3, why: "La FTC recibe las denuncias de fraude." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      5,
      6,
      8,
      9,
      11,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Espacio de trabajo y tecnología",
        objective: "O1",
        notYet: "No hay prueba de velocidad, o el inicio de sesión en dos pasos o el bloqueo de pantalla están desactivados.",
        meets: "Una foto o lista del espacio de trabajo con prueba de velocidad, audífonos, inicio de sesión en dos pasos y bloqueo de pantalla.",
        exceeds: "La luz está de frente a la persona y hay un plan de respaldo si falla el internet."
      },
      {
        name: "Lista para videollamadas",
        objective: "O2",
        notYet: "No se hizo la prueba de llamada, o no se encontraron los controles de silenciar y cámara.",
        meets: "Una prueba de llamada de un minuto o una lista que muestra el nombre visible, silenciar, cámara y chat.",
        exceeds: "También practicó compartir pantalla y resolver un problema de sonido."
      },
      {
        name: "Mensajes de trabajo",
        objective: "O3",
        notYet: "Menos de tres mensajes, o un mensaje esconde lo importante o incluye datos privados.",
        meets: "Una actualización de estado, una pregunta a un supervisor y una nota de que llegará tarde, cada una corta y empezando por lo importante.",
        exceeds: "Cada una dice qué se necesita y para cuándo, y suena como la persona."
      },
      {
        name: "Documento compartido",
        objective: "O4",
        notYet: "No hay comentario ni cambio sugerido en el documento.",
        meets: "Un comentario y un cambio sugerido en un documento compartido.",
        exceeds: "También abrió el historial de versiones y dejó sin cambios la configuración para compartir."
      },
      {
        name: "Plan por bloques de tiempo",
        objective: "O5",
        notYet: "No hay horas de inicio, descanso ni fin.",
        meets: "Un plan de un día con horas de inicio, descanso y fin, y bloques para las tareas.",
        exceeds: "Encaja con la vida real de la persona y termina con una actualización de estado."
      },
      {
        name: "Oferta de empleo revisada",
        objective: "O6",
        notYet: "No se revisó la oferta de empleo en busca de señales de estafa.",
        meets: "Una oferta real de empleo remoto revisada contra las señales de alerta, con la empresa buscada.",
        exceeds: "También anota dónde permite vivir el empleo y qué dominio de correo se usó."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se postulan al menos a un empleo remoto en un plazo de 30 días (encuesta de seguimiento)",
      "Personas que consiguen un empleo remoto o una entrevista remota en un plazo de 90 días",
      "Personas que dicen haber detectado y evitado una estafa de trabajo desde casa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet (una computadora de la biblioteca o del programa sirve para practicar)",
      "Audífonos con micrófono",
      "Cuentas gratuitas de una herramienta de video (Zoom, Teams o Google Meet) y de Google Docs o Microsoft 365 en línea",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; hagan una videollamada de práctica real para que todos entren, se silencien y compartan pantalla.",
      "Prepara un documento compartido de práctica para que las personas comenten y sugieran cambios en el trabajo de las demás.",
      "Muestra ejemplos reales de ofertas de estafa de trabajo desde casa y pide al grupo que encuentre las señales de alerta.",
      "Recuerda a quienes estén en libertad condicional o probatoria que sigan sus condiciones sobre el uso de internet y que revisen que el trabajo remoto encaje con ellas.",
      "Califica el kit final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
