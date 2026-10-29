"use strict";

// Koach Learn course (shared), Spanish translation of "Online Safety and Responsible AI Use". Rules: ../../../README.md (Translations).

module.exports = {
  id: "online-safety-responsible-ai-es",
  lang: "es",
  translationOf: "online-safety-responsible-ai",
  category: "Re-Entry",
  name: "Seguridad en internet y uso responsable de la IA",
  skills: "Crear contraseñas seguras, Activar el inicio de sesión en dos pasos, Detectar phishing y estafas con IA, Denunciar estafas y robo de identidad, Revisar la IA en busca de sesgos y errores, Usar la IA con honestidad en la escuela y el trabajo",
  outcome: "proteger tus cuentas principales con frases de contraseña seguras y el inicio de sesión en dos pasos, detectar y denunciar estafas de phishing, deepfakes y estafas con IA, y usar las herramientas de IA con honestidad y justicia, revisando sus respuestas y siguiendo las reglas de la escuela o el trabajo.",
  about: [
    "Estar en internet trae riesgos reales: cuentas robadas, estafas y mensajes falsos que, gracias a la IA, parecen y suenan reales. También trae preguntas nuevas: ¿cuándo es justo usar la IA?, ¿cómo sabes si se equivoca o es injusta?",
    "Este curso es para todos: personas que vuelven de prisión y se están poniendo al día en internet, jóvenes, veteranos, personas que buscan empleo y miembros de la comunidad. No necesitas experiencia en tecnología.",
    "En el capítulo 1 aprenderás a protegerte. En el capítulo 2 aprenderás a usar la IA de forma responsable. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Completa una lista personal de seguridad en internet y uso responsable de la IA: cambia la contraseña de tu correo principal por una frase de contraseña segura, activa el inicio de sesión en dos pasos, revisa si tu teléfono y tus apps tienen actualizaciones, anota los tres lugares para denunciar estafas y escribe una tarjeta de cinco líneas con tus reglas personales para la IA sobre privacidad, revisar las respuestas, honestidad, justicia y cuándo no usar la IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos que vuelven a casa después de estar en prisión (reinserción). Muchos estuvieron fuera mientras cambiaban los teléfonos inteligentes, las cuentas en línea y las herramientas de IA, y ahora están creando cuentas de correo, de empleo y de beneficios, a menudo por primera vez.",
    startingPoint: "Saben hacer llamadas y enviar mensajes de texto en un teléfono sencillo; algunos tienen una cuenta de correo nueva y han probado un asistente de IA. Muchos repiten contraseñas sencillas, no han usado el inicio de sesión en dos pasos y no han visto estafas de voz o video hechas con IA.",
    gap: "Las personas que están rehaciendo su vida son blanco frecuente de estafas que pueden robarles beneficios, sueldos o su identidad, y el mal uso de la IA en la escuela o el trabajo puede costarles un certificado o un empleo. Necesitan proteger sus cuentas, detectar y denunciar estafas, y usar la IA de forma privada, cuidadosa y honesta.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 6.º grado)",
      "Aparatos: puede que solo tengan un teléfono sencillo o una computadora de biblioteca con tiempo limitado",
      "Tiempo: lecciones de 5 minutos que caben entre citas y el trabajo",
      "Algunas condiciones de libertad condicional o probatoria limitan el uso de internet; cada persona sigue sus propias condiciones",
      "Alto riesgo de estafas y de privacidad: no se comparten contraseñas, números de caso ni números privados reales en ninguna tarea de práctica"
    ],
    prerequisites: "Ninguno. \"Introducción a la IA y a la confianza digital\" es un buen primer curso para quienes son nuevos en la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Para tu cuenta de correo principal", action: "crear una frase de contraseña segura, activar el inicio de sesión en dos pasos y revisar si tu teléfono y tus apps tienen actualizaciones", standard: "sin ayuda, con los códigos de respaldo guardados en privado" },
    { id: "O2", condition: "Con un mensaje o una llamada, incluidas las de voz o video hechas con IA", action: "identificar las señales de alerta del phishing y de las estafas con IA", standard: "acertando al menos 4 de 5" },
    { id: "O3", condition: "Cuando te encuentras con una estafa o te roban tu información", action: "hacer la lista de dónde denunciarlo y los primeros pasos para protegerte", standard: "nombrando los tres lugares para denunciar en EE. UU." },
    { id: "O4", condition: "Antes de enviar un pedido a una herramienta de IA", action: "revisar el pedido y quitar la información privada", standard: "sin compartir contraseñas ni números de identificación, de caso, de banco o de tarjeta" },
    { id: "O5", condition: "Con una respuesta de la IA", action: "revisarla en busca de datos equivocados y sesgos injustos", standard: "antes de usarla" },
    { id: "O6", condition: "En la escuela, en el trabajo o en internet", action: "seguir las reglas sobre el uso de la IA, decir cómo te ayudó la IA y elegir cuándo no usarla", standard: "en una tarjeta de cinco líneas con tus reglas personales para la IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Protegerte en internet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Contraseñas seguras e inicio de sesión en dos pasos",
          minutes: 5,
          goal: "Crear una frase de contraseña segura y activar el inicio de sesión en dos pasos en tu correo.",
          text: [
            "Tu correo es la llave de todo: si alguien entra en él, puede cambiar tus otras contraseñas. Protégelo primero.",
            "Una contraseña segura es larga y única. Una forma fácil es usar una frase de contraseña: cuatro o más palabras al azar, como “arce-río-tigre-lámpara”. Usa una contraseña distinta para cada cuenta importante. Un administrador de contraseñas, que viene en muchos teléfonos y navegadores, las puede recordar por ti.",
            "Activa el inicio de sesión en dos pasos, también llamado autenticación multifactor o MFA. Después de tu contraseña, también escribes un código de tu teléfono o apruebas un aviso. Aunque alguien te robe la contraseña, no podrá entrar. La Agencia de Ciberseguridad y Seguridad de Infraestructura de EE. UU. (CISA) recomienda contraseñas seguras, MFA, un administrador de contraseñas y mantener los programas actualizados."
          ],
          steps: ["Crea una frase de contraseña de cuatro o más palabras al azar.", "Cambia la contraseña de tu correo por esa frase.", "Abre la configuración de seguridad de tu cuenta de correo.", "Activa el inicio de sesión en dos pasos (MFA) y sigue los pasos.", "Guarda los códigos de respaldo en un lugar seguro y privado."],
          words: [["Frase de contraseña", "una contraseña hecha de varias palabras al azar."], ["MFA / inicio de sesión en dos pasos", "una segunda comprobación, como un código del teléfono, después de tu contraseña."], ["Administrador de contraseñas", "una app segura que guarda tus contraseñas."]],
          slides: [
            { title: "Protege primero tu correo", bullets: ["Con él se pueden cambiar tus otras cuentas"] },
            { title: "Contraseñas seguras", bullets: ["Largas y únicas", "Cuatro o más palabras al azar", "Una distinta para cada cuenta importante"] },
            { title: "Inicio de sesión en dos pasos (MFA)", bullets: ["Contraseña más un código o aviso en el teléfono", "Frena la mayoría de los ataques con contraseñas robadas", "Guarda los códigos de respaldo en un lugar seguro"] }
          ],
          sources: [{ name: "CISA: Concienciación sobre ciberseguridad y Secure Our World", url: "https://www.cisa.gov/secure-our-world" }],
          tryIt: "Cambia la contraseña de tu correo principal por una frase de contraseña segura y activa el inicio de sesión en dos pasos. Si no puedes hacerlo ahora, anota los pasos y hazlo hoy.",
          youCanNow: "crear una frase de contraseña segura y proteger tu correo con el inicio de sesión en dos pasos.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué proteger primero tu cuenta de correo?", options: ["Tiene la mayoría de las fotos", "Es la más difícil de usar", "Alguien que entra en tu correo puede cambiar tus otras contraseñas", "Las cuentas de correo cuestan dinero"], answer: 2, why: "Tu correo es la llave de tus otras cuentas, porque los cambios de contraseña llegan ahí." },
            { objective: "O1", q: "La contraseña de tu sitio de empleos es la misma que la de tu correo. ¿Qué haces?", options: ["Crear una frase de contraseña segura distinta para cada una", "Dejarla así; una sola contraseña es más fácil", "Escribirla en la funda de tu teléfono", "Compartirla con un amigo para que la recuerde"], answer: 0, why: "Usa una contraseña distinta para cada cuenta importante." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Detectar el phishing y las estafas con IA",
          minutes: 6,
          goal: "Reconocer mensajes de phishing, llamadas falsas y deepfakes antes de hacer clic o pagar.",
          text: [
            "El phishing es un mensaje falso, por correo, texto o redes sociales, que intenta que hagas clic en un enlace, compartas información o envíes dinero. La Comisión Federal de Comercio (FTC, la agencia de EE. UU. que protege a los consumidores) señala signos comunes: un mensaje inesperado de una empresa que conoces, la afirmación de que hay un problema con tu cuenta o tu pago, el pedido de confirmar datos personales y un enlace para “actualizar” tu pago.",
            "La IA hace más convincentes las estafas. Los estafadores pueden escribir mensajes perfectos, hacer videos falsos llamados deepfakes y copiar la voz de una persona a partir de un audio corto. Una llamada puede sonar igualita a tu nieto, tu jefe o tu oficial de libertad condicional.",
            "Las señales de alerta siguen siendo las mismas: te apuran, te asustan, piden tarjetas de regalo, transferencias o criptomonedas, o piden un código enviado a tu teléfono. Detente. No hagas clic. Comunícate con la persona o la empresa usando un número o un sitio web que ya sabes que es real."
          ],
          steps: ["Haz una pausa: ¿este mensaje es inesperado o urgente?", "No hagas clic en enlaces ni abras archivos adjuntos.", "Fíjate si piden dinero, tarjetas de regalo, criptomonedas o códigos.", "Comunícate con la persona o la empresa usando un número que ya conoces.", "Denúncialo y bórralo."],
          words: [["Phishing", "un mensaje falso que intenta robar información o dinero."], ["Deepfake", "un video, imagen o voz falsos hechos con IA para que parezcan o suenen reales."], ["Clonación de voz", "usar la IA para copiar la voz de alguien."]],
          slides: [
            { title: "Signos de phishing (FTC)", bullets: ["Mensaje inesperado de una empresa conocida", "“Hay un problema con tu cuenta o tu pago”", "Te pide confirmar datos o hacer clic para pagar"] },
            { title: "La IA hace convincentes las estafas", bullets: ["Redacción perfecta", "Videos deepfake", "Voces clonadas de personas que conoces"] },
            { title: "Las mismas señales de alerta", bullets: ["Prisa o miedo", "Tarjetas de regalo, transferencias, criptomonedas, códigos", "Devuelve la llamada a un número que conoces"] }
          ],
          sources: [{ name: "FTC: Cómo reconocer y evitar las estafas de phishing", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Busca en tu correo y tus mensajes de texto uno que podría ser phishing. Haz una lista de las señales de alerta que muestra. Con tu familia, acuerden una palabra clave para comprobar las llamadas de emergencia.",
          youCanNow: "detectar estafas de phishing, deepfakes y voces clonadas y responder de forma segura.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es el phishing?", options: ["Un mensaje seguro de tu banco", "Una forma de hacer una copia de seguridad de tu teléfono", "Un tipo de contraseña", "Un mensaje falso que intenta que hagas clic, compartas información o envíes dinero"], answer: 3, why: "El phishing es un mensaje falso que intenta engañarte." },
            { objective: "O2", q: "Una llamada suena igualita a tu oficial de libertad condicional y te dice que pagues hoy una multa por transferencia. ¿Qué haces?", options: ["Pagar de inmediato para no meterte en problemas", "Colgar y llamar a la oficina a un número que ya conoces", "Darle el código que llegó a tu teléfono", "Devolver la llamada al número que te llamó"], answer: 1, why: "Las voces se pueden copiar con IA; la prisa y las transferencias son señales de alerta, así que llama a un número que conoces." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Denunciar estafas y recuperarte del robo de identidad",
          minutes: 5,
          goal: "Hacer la lista de dónde denunciar estafas y de los primeros pasos que debes dar si te roban tu información.",
          text: [
            "Denunciar ayuda a frenar a los estafadores y te puede ayudar a recuperarte. En EE. UU., la FTC dice que reenvíes los correos de phishing a reportphishing@apwg.org, reenvíes los textos de estafa al 7726 (SPAM) y denuncies el fraude en ReportFraud.ftc.gov.",
            "Si diste un número del Seguro Social, de tarjeta de crédito o de cuenta bancaria, la FTC dice que vayas a IdentityTheft.gov para ver los pasos según lo que se perdió. Actúa rápido: llama a tu banco, cambia tus contraseñas y considera una alerta de fraude o un congelamiento de crédito.",
            "Si hiciste clic en un enlace malo, actualiza tu programa de seguridad, haz un análisis y quita todo lo que marque. Fuera de EE. UU., denuncia ante la unidad de delitos informáticos de la policía de tu país o ante la agencia de protección al consumidor."
          ],
          steps: ["Correo de phishing: reenvíalo a reportphishing@apwg.org.", "Texto de estafa: reenvíalo al 7726.", "Fraude: denúncialo en ReportFraud.ftc.gov.", "Te robaron información: sigue IdentityTheft.gov y llama a tu banco.", "Hiciste clic en un enlace: actualiza el programa de seguridad y haz un análisis."],
          words: [["Robo de identidad", "cuando alguien usa tu información personal para hacerse pasar por ti."], ["Congelamiento de crédito", "un bloqueo que impide abrir créditos nuevos a tu nombre."]],
          slides: [
            { title: "Dónde denunciar (EE. UU.)", bullets: ["Correos de phishing: reportphishing@apwg.org", "Textos de estafa: reenvíalos al 7726", "Fraude: ReportFraud.ftc.gov"] },
            { title: "¿Te robaron información?", bullets: ["IdentityTheft.gov", "Llama a tu banco", "Cambia contraseñas; considera congelar tu crédito"] },
            { title: "¿Hiciste clic en un enlace malo?", bullets: ["Actualiza el programa de seguridad", "Haz un análisis", "Quita lo que marque"] }
          ],
          sources: [{ name: "FTC: Cómo reconocer y evitar las estafas de phishing", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }, { name: "IdentityTheft.gov", url: "https://www.identitytheft.gov/" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Escribe en una tarjeta o en las notas de tu teléfono los tres lugares de EE. UU. para denunciar estafas (o los de tu país).",
          youCanNow: "denunciar estafas y dar los primeros pasos después de un robo de identidad.",
          quickCheck: [
            { objective: "O3", q: "¿Adónde dice la FTC que vayas si te robaron tu número del Seguro Social?", options: ["A IdentityTheft.gov", "A cualquier sitio web con un número de teléfono", "A la persona que lo robó", "A un grupo de las redes sociales"], answer: 0, why: "La FTC envía a las personas a IdentityTheft.gov para ver los pasos según lo que perdieron." },
            { objective: "O3", q: "Diste el número de tu tarjeta bancaria en un sitio web falso. ¿Qué haces primero?", options: ["Esperar a ver si pasa algo", "Publicarlo en internet", "Llamar a tu banco de inmediato y cambiar tus contraseñas", "Darle al sitio también tu PIN"], answer: 2, why: "Actúa rápido: llama a tu banco y cambia tus contraseñas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Protegerte en internet",
        questions: [
          { objective: "O1", q: "¿Cuál es la contraseña más segura?", options: ["password123", "tu fecha de nacimiento", "arce-río-tigre-lámpara", "123456"], answer: 2, why: "Las frases de contraseña largas con palabras al azar son seguras." },
          { objective: "O1", q: "¿Qué hace el inicio de sesión en dos pasos (MFA)?", options: ["Agrega una segunda comprobación, como un código del teléfono, después de tu contraseña", "Hace más corta tu contraseña", "Comparte tu contraseña con tus amigos", "Desactiva tu cuenta"], answer: 0, why: "Una segunda comprobación frena a los atacantes que solo tienen tu contraseña." },
          { objective: "O2", q: "Recibes una llamada con la voz de tu nieto que te pide tarjetas de regalo ya mismo. ¿Qué haces?", options: ["Comprar las tarjetas de regalo rápido", "Leerle tu número de banco", "Enviar criptomonedas", "Colgar y llamarlo a un número que conoces"], answer: 3, why: "Las voces se pueden clonar con IA; devuelve la llamada a un número conocido." },
          { objective: "O2", q: "¿Qué es un deepfake?", options: ["Una piscina profunda", "Un video, imagen o voz falsos hechos con IA", "Una contraseña segura", "Una noticia real"], answer: 1, why: "Los deepfakes son falsificaciones hechas con IA que parecen o suenan reales." },
          { objective: "O3", q: "En EE. UU., ¿a dónde dice la FTC que reenvíes los mensajes de texto de estafa?", options: ["Al 911", "Al 7726 (SPAM)", "Al estafador", "A tus contactos"], answer: 1, why: "La FTC dice que reenvíes los textos de estafa al 7726." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la IA de forma responsable",
      lessons: [
        {
          objectives: ["O4"],
          title: "Proteger tu privacidad al usar la IA",
          minutes: 5,
          goal: "Decidir qué es seguro escribir en una herramienta de IA y qué no.",
          text: [
            "Lo que escribes en un chat de IA se puede guardar y, según la herramienta y la configuración, usarse para mejorarla. Trátalo como si hablaras en un lugar público.",
            "Nunca escribas: contraseñas, números del Seguro Social o de identificación, números de banco o de tarjeta, números de caso o de recluso, datos médicos unidos a tu nombre ni información privada de otras personas. En su lugar, usa marcadores como “[mi número]” o descripciones generales.",
            "Busca en la configuración de la herramienta los controles de privacidad y datos, como desactivar el historial de chats o el uso de tus chats para entrenarla, cuando se ofrezca. En la escuela o el trabajo, usa solo las herramientas de IA que permite tu escuela o empleador, y sigue sus reglas sobre qué información se puede poner."
          ],
          steps: ["Lee tu pedido antes de enviarlo.", "Quita números privados, nombres y datos médicos.", "Usa marcadores como “[mi número]”.", "Revisa la configuración de privacidad de la herramienta.", "En la escuela o el trabajo, usa solo herramientas aprobadas."],
          words: [["Configuración de privacidad", "opciones que controlan lo que una app guarda y comparte sobre ti."], ["Marcador", "algo que reemplaza los datos privados reales, como “[mi número]”."]],
          slides: [
            { title: "Un chat de IA no es un diario", bullets: ["Lo que escribes se puede guardar", "Trátalo como un lugar público"] },
            { title: "Nunca escribas", bullets: ["Contraseñas, Seguro Social, números de identificación o de caso", "Números de banco o de tarjeta", "Datos privados de otras personas"] },
            { title: "Mantén el control", bullets: ["Usa marcadores", "Revisa la configuración de privacidad", "Usa herramientas aprobadas en la escuela o el trabajo"] }
          ],
          tryIt: "Abre la configuración de un asistente de IA que uses y encuentra sus controles de privacidad o de datos. Luego reescribe de forma segura este pedido: “Mi número del Seguro Social es 123-45-6789, ayúdame a llenar este formulario”.",
          youCanNow: "mantener la información privada fuera de las herramientas de IA y usar su configuración de privacidad.",
          quickCheck: [
            { objective: "O4", q: "Escribir en un chat de IA se parece más a:", options: ["Escribir en un diario con llave", "Hablar en un lugar público", "Hablar con tu abogado", "Hablarte en voz baja a ti mismo"], answer: 1, why: "Lo que escribes se puede guardar, así que trátalo como si hablaras en público." },
            { objective: "O4", q: "Quieres ayuda de la IA con un formulario de vivienda que pide tu número de caso. ¿Qué escribes?", options: ["Tu número de caso real", "Tu número de caso y tu fecha de nacimiento", "El número de caso de un amigo", "Un marcador como \"[mi número]\""], answer: 3, why: "Un marcador te consigue ayuda sin compartir números privados." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Revisar la IA en busca de errores y sesgos",
          minutes: 5,
          goal: "Revisar una respuesta de la IA en busca de errores y sesgos injustos antes de usarla.",
          text: [
            "La IA puede equivocarse con total seguridad. Puede inventar datos, citas, leyes o fuentes; a eso se le llama alucinación. Comprueba siempre los datos importantes con una fuente oficial o de confianza.",
            "La IA también puede tener sesgos: aprendió de textos escritos por personas, que incluyen estereotipos injustos. Puede describir a las enfermeras como mujeres y a los ingenieros como hombres, o tratar distinto a las personas según su nombre, edad, raza, discapacidad o antecedentes penales. En la contratación, los préstamos, la vivienda o la escuela, eso puede causar un daño real.",
            "Ponla a prueba: haz la misma pregunta cambiando un solo detalle, como el nombre, y compara las respuestas. Si la IA trata injustamente a las personas, no uses esa respuesta y denúncialo con el botón de comentarios de la herramienta."
          ],
          steps: ["Busca los datos de la respuesta y compruébalos con una fuente de confianza.", "Busca estereotipos o suposiciones injustas.", "Pregunta de nuevo cambiando un detalle y compara.", "No uses respuestas injustas o equivocadas.", "Denuncia los problemas con el botón de comentarios de la herramienta."],
          words: [["Alucinación", "cuando la IA dice algo falso como si fuera cierto."], ["Sesgo", "un trato o una suposición injusta sobre un grupo de personas."], ["Estereotipo", "una creencia demasiado simple sobre un grupo."]],
          slides: [
            { title: "La IA puede equivocarse con seguridad", bullets: ["Datos, citas y fuentes inventados", "Comprueba lo importante con fuentes de confianza"] },
            { title: "La IA puede tener sesgos", bullets: ["Aprendió de textos escritos por personas", "Estereotipos de género, raza, edad, antecedentes", "Daño real en empleo, vivienda, escuela"] },
            { title: "Prueba y denuncia", bullets: ["Cambia un detalle y compara", "No uses respuestas injustas", "Usa el botón de comentarios"] }
          ],
          tryIt: "Pide a un asistente de IA que “describa a una enfermera típica y a un ingeniero típico”. Busca estereotipos. Luego pídele una carta de recomendación para “María” y otra para “James” con los mismos datos, y compáralas.",
          youCanNow: "revisar las respuestas de la IA en busca de errores y ponerlas a prueba para detectar sesgos injustos.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es el sesgo de la IA?", options: ["Cuando la IA funciona lento", "Cuando la IA usa palabras difíciles", "Cuando la IA trata a grupos de personas de forma injusta o usa estereotipos", "Cuando la IA responde con una lista"], answer: 2, why: "La IA aprendió de textos escritos por personas, así que puede repetir estereotipos injustos." },
            { objective: "O5", q: "La IA te da una regla sobre votar después de una condena. ¿Qué haces antes de confiar en ella?", options: ["Comprobarla con una fuente oficial o de confianza", "Creerla porque suena segura", "Compartirla primero con tus amigos", "Preguntarle a la IA si está segura"], answer: 0, why: "La IA puede inventar reglas; comprueba los datos importantes con una fuente oficial." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar la IA con honestidad en la escuela, el trabajo e internet",
          minutes: 5,
          goal: "Seguir las reglas sobre el uso de la IA y ser honesto sobre cuándo la usaste.",
          text: [
            "Las reglas sobre la IA cambian de un lugar a otro. Algunos maestros permiten la IA para generar ideas pero no para escribir; algunos empleos la exigen; otros la prohíben. Pregunta o lee las reglas primero. Hacer pasar el trabajo de la IA como tuyo donde no está permitido es hacer trampa y te puede costar una calificación, un empleo o un certificado.",
            "Sé honesto. Si la IA te ayudó, di cómo cuando importa: “Usé un asistente de IA para revisar la gramática”. Nunca uses la IA para hacer reseñas falsas, documentos falsos, ni imágenes o videos de personas reales sin su consentimiento. Hacer imágenes falsas sexuales o vergonzosas de personas reales causa daño y, en muchos lugares, es ilegal.",
            "Sabe cuándo no usar la IA: emergencias (llama al 911), decisiones serias de salud, legales o de dinero (habla con un profesional) y cualquier cosa que no quieras que quede guardada. Eres responsable de lo que envías o publicas, aunque lo haya escrito la IA."
          ],
          steps: ["Lee o pregunta las reglas sobre la IA en tu escuela o tu empleo.", "Usa la IA solo de las formas permitidas.", "Di cómo te ayudó la IA cuando importa.", "Nunca hagas falsificaciones de personas o documentos reales.", "No uses la IA para emergencias ni decisiones importantes."],
          words: [["Honestidad académica", "hacer tu propio trabajo y reconocer la ayuda que usaste."], ["Consentimiento", "el permiso de una persona."]],
          slides: [
            { title: "Conoce las reglas", bullets: ["Las reglas cambian según la clase y el empleo", "Pregunta o léelas primero", "Romperlas puede costar calificaciones o empleos"] },
            { title: "Sé honesto", bullets: ["Di cómo te ayudó la IA", "Nada de reseñas o documentos falsos", "Nada de falsificaciones de personas reales sin consentimiento"] },
            { title: "Cuándo no usar la IA", bullets: ["Emergencias: llama al 911", "Decisiones importantes de salud, legales o de dinero", "Eres responsable de lo que publicas"] }
          ],
          tryIt: "Tarea final: termina tu lista de seguridad (frase de contraseña, inicio de sesión en dos pasos, actualizaciones, lugares para denunciar) y escribe una tarjeta de cinco líneas con tus reglas personales para la IA sobre privacidad, revisar las respuestas, honestidad, justicia y cuándo no usar la IA.",
          youCanNow: "proteger tus cuentas, evitar y denunciar estafas, y usar la IA de forma segura, honesta y justa.",
          quickCheck: [
            { objective: "O6", q: "¿Quién es responsable de un mensaje que publicas y que escribió la IA?", options: ["La empresa de IA", "Nadie", "El sitio web", "Tú"], answer: 3, why: "Tú eres responsable de lo que envías o publicas, aunque lo haya escrito la IA." },
            { objective: "O6", q: "Tu programa de capacitación no permite la IA en el examen final. ¿Cuál es la opción honesta?", options: ["Usar la IA a escondidas", "Seguir la regla y hacer el examen tú mismo", "Pedirle a un amigo que use la IA por ti", "Copiar una respuesta de la IA y cambiar algunas palabras"], answer: 1, why: "Usar la IA donde no está permitida es hacer trampa y te puede costar el certificado." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la IA de forma responsable",
        questions: [
          { objective: "O4", q: "¿Qué es seguro escribir en un asistente de IA?", options: ["Tu número del Seguro Social", "La contraseña de tu banco", "El historial médico de tu amigo", "“Ayúdame a escribir una nota de agradecimiento para mi trabajador social”"], answer: 3, why: "Los pedidos generales sin datos privados son seguros." },
          { objective: "O5", q: "¿Qué es una alucinación de la IA?", options: ["Cuando la IA dice algo falso como si fuera cierto", "Un sueño", "Una contraseña segura", "Un tipo de virus"], answer: 0, why: "La IA puede inventar datos con total seguridad." },
          { objective: "O5", q: "¿Cómo puedes poner a prueba una herramienta de IA para detectar sesgos?", options: ["Confiar en ella", "Preguntarle si tiene sesgos y creerle", "Hacer la misma pregunta cambiando un detalle y comparar", "Usarla solo de noche"], answer: 2, why: "Cambiar un detalle muestra si trata distinto a las personas." },
          { objective: "O6", q: "Tu maestro permite la IA solo para generar ideas. ¿Qué es lo honesto?", options: ["Que la IA escriba todo el ensayo y decir que es tuyo", "Copiar el ensayo hecho con IA de un amigo", "Ignorar la regla", "Usarla para generar ideas y luego escribir el trabajo tú mismo"], answer: 3, why: "Sigue las reglas sobre cómo se puede usar la IA." },
          { objective: "O6", q: "Alguien tiene una emergencia médica. ¿Qué haces?", options: ["Preguntarle a un chatbot de IA", "Publicarlo en internet", "Llamar al 911", "Esperar"], answer: 2, why: "Las emergencias necesitan servicios de emergencia, no IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Seguridad en internet y uso responsable de la IA",
    questions: [
      { objective: "O1", q: "¿Qué cuenta debes proteger primero?", options: ["Una cuenta de juegos", "Tu correo", "Un sitio de recetas", "Una app del clima"], answer: 1, why: "Con el correo se pueden cambiar tus otras contraseñas." },
      { objective: "O1", q: "Una frase de contraseña es:", options: ["Una contraseña hecha de varias palabras al azar", "Tu nombre y tu fecha de nacimiento", "Un número corto", "Un código del teléfono"], answer: 0, why: "Las palabras al azar forman contraseñas largas y seguras." },
      { objective: "O1", q: "¿Debes usar la misma contraseña en todas partes?", options: ["Sí, es más fácil", "Solo para los bancos", "No, usa una distinta para cada cuenta importante", "Solo para el correo"], answer: 2, why: "Una sola contraseña robada lo abriría todo." },
      { objective: "O1", q: "Un administrador de contraseñas:", options: ["Guarda tus contraseñas de forma segura", "Las comparte en internet", "Adivina las contraseñas de otros", "Borra tus cuentas"], answer: 0, why: "Recuerda por ti las contraseñas seguras." },
      { objective: "O1", q: "¿Qué agencia de EE. UU. recomienda contraseñas seguras, MFA y actualizaciones en su campaña de concienciación?", options: ["La NASA", "El Servicio Postal", "El Servicio de Parques Nacionales", "La CISA"], answer: 3, why: "La CISA dirige la concienciación sobre ciberseguridad en EE. UU." },
      { objective: "O2", q: "Un texto inesperado dice que tu cuenta bancaria está bloqueada y trae un enlace. Debes:", options: ["Hacer clic y poner tu usuario", "No hacer clic; comunicarte con el banco a un número que conoces", "Responder con tu número de tarjeta", "Reenviarlo a tus amigos"], answer: 1, why: "Es un signo clásico de phishing." },
      { objective: "O2", q: "Que te pidan pagar con tarjetas de regalo es:", options: ["Normal en las oficinas del gobierno", "Una señal de alerta de estafa", "Una forma segura de pagar cuentas", "Algo que exigen los bancos"], answer: 1, why: "Las agencias reales no piden tarjetas de regalo." },
      { objective: "O2", q: "La clonación de voz es:", options: ["Cantar en un coro", "Grabar tu propio buzón de voz", "Una mejora del teléfono", "Usar la IA para copiar la voz de alguien"], answer: 3, why: "Los estafadores pueden copiar voces a partir de audios cortos." },
      { objective: "O2", q: "Una palabra clave familiar te ayuda a:", options: ["Comprobar si una llamada de emergencia es de verdad de tu familia", "Desbloquear tu teléfono", "Conseguir descuentos", "Cambiar contraseñas"], answer: 0, why: "Una voz clonada no sabrá la palabra clave." },
      { objective: "O3", q: "¿Dónde denuncias un fraude en EE. UU.?", options: ["En una sección de comentarios", "En el sitio web del estafador", "En ReportFraud.ftc.gov", "En ningún lado"], answer: 2, why: "La FTC recibe las denuncias de fraude." },
      { objective: "O3", q: "Si te robaron el número del Seguro Social, la FTC te envía a:", options: ["Un grupo de redes sociales", "Un chatbot de IA", "Ningún lado", "IdentityTheft.gov"], answer: 3, why: "IdentityTheft.gov da los pasos para recuperarte." },
      { objective: "O3", q: "Un congelamiento de crédito:", options: ["Congela tu cuenta bancaria para siempre", "Enfría tu computadora", "Impide que se abran créditos nuevos a tu nombre", "Borra tu historial de crédito"], answer: 2, why: "Bloquea las cuentas nuevas que abran los ladrones." },
      { objective: "O3", q: "¿Qué debes hacer si hiciste clic en un enlace malo?", options: ["Nada", "Actualizar el programa de seguridad y hacer un análisis", "Hacer clic en más enlaces", "Tirar el teléfono"], answer: 1, why: "Un análisis encuentra y quita los programas dañinos." },
      { objective: "O4", q: "Escribir en un chat de IA se parece más a:", options: ["Hablar en un lugar público", "Escribir en un diario con candado", "Pensar en silencio", "Hablar con un abogado"], answer: 0, why: "Los chats se pueden guardar, así que ten cuidado." },
      { objective: "O4", q: "En lugar de escribir tu número de caso en la IA, usa:", options: ["El número real", "La mitad del número", "Un marcador como “[mi número]”", "Tu número del Seguro Social"], answer: 2, why: "Los marcadores protegen los datos privados." },
      { objective: "O5", q: "El sesgo de la IA es:", options: ["Un trato o una suposición injusta sobre grupos de personas", "Una respuesta rápida", "Una respuesta larga", "Un tipo de contraseña"], answer: 0, why: "La IA puede repetir estereotipos injustos." },
      { objective: "O5", q: "Una herramienta de IA califica peor a un candidato a un empleo solo por su nombre. Debes:", options: ["Usarla igual", "Cambiarle el nombre al candidato", "Esconderlo", "No usar ese resultado y denunciarlo"], answer: 3, why: "No se deben usar los resultados injustos de la IA." },
      { objective: "O6", q: "Si la IA te ayudó en tu trabajo y eso importa, debes:", options: ["Esconderlo", "Decir cómo te ayudó la IA", "Decir que lo hiciste solo", "Culpar a la IA de los errores"], answer: 1, why: "Ser honesto sobre el uso de la IA genera confianza." },
      { objective: "O6", q: "Hacer con IA una imagen falsa y vergonzosa de un compañero de clase real es:", options: ["Una broma inofensiva", "Dañino e ilegal en muchos lugares", "Obligatorio en la escuela", "Bueno para la seguridad"], answer: 1, why: "Las falsificaciones de personas reales sin consentimiento causan daño real." },
      { objective: "O6", q: "¿Quién es responsable de una publicación que compartes y que escribió la IA?", options: ["La IA", "Nadie", "El proveedor de internet", "Tú"], answer: 3, why: "Eres responsable de lo que envías o publicas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      5,
      6,
      9,
      10,
      14,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Correo protegido",
        objective: "O1",
        notYet: "La contraseña del correo es corta o repetida, o el inicio de sesión en dos pasos está desactivado.",
        meets: "La contraseña del correo es una frase de contraseña segura y el inicio de sesión en dos pasos está activado.",
        exceeds: "Los códigos de respaldo están guardados en privado y las otras cuentas importantes tienen su propia contraseña."
      },
      {
        name: "Actualizaciones revisadas",
        objective: "O1",
        notYet: "No se revisó si el teléfono y las apps tenían actualizaciones.",
        meets: "Se revisaron y actualizaron el teléfono y las apps.",
        exceeds: "Las actualizaciones automáticas están activadas donde se ofrecen."
      },
      {
        name: "Lugares para denunciar",
        objective: "O3",
        notYet: "Hay menos de tres lugares para denunciar anotados.",
        meets: "Anotó el 7726 para los mensajes de texto, reportphishing@apwg.org para los correos y ReportFraud.ftc.gov para el fraude.",
        exceeds: "También anotó IdentityTheft.gov y los primeros pasos si le roban su información."
      },
      {
        name: "Tarjeta de reglas personales para la IA",
        objective: "O6",
        notYet: "Menos de cinco líneas, o falta una línea sobre privacidad u honestidad.",
        meets: "Cinco líneas sobre privacidad, revisar las respuestas, honestidad, justicia y cuándo no usar la IA.",
        exceeds: "Cada línea da un ejemplo real de la vida de la persona."
      },
      {
        name: "Privacidad en los pedidos",
        objective: "O4",
        notYet: "La tarjeta de reglas o los pedidos de práctica incluyen números privados.",
        meets: "No hay números privados en ningún lado, y se usan marcadores.",
        exceeds: "La persona revisó la configuración de privacidad de su herramienta de IA."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que dicen tener todavía activado el inicio de sesión en dos pasos en su correo 30 días después (encuesta de seguimiento)",
      "Personas que dicen haber detectado y evitado una estafa en un plazo de 60 días",
      "Organizaciones de reinserción que reportan menos personas que pierden dinero o cuentas por estafas"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca o del programa",
      "Acceso a la configuración de la cuenta de correo de la persona",
      "Un teléfono que pueda recibir códigos para el inicio de sesión en dos pasos",
      "Papel y lápiz para la lista y la tarjeta de reglas personales para la IA",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas de \"Pruébalo ahora\" hechas en vivo.",
      "Nunca pidas a las personas que digan o muestren sus contraseñas, números de caso o códigos de respaldo; hacen los cambios en privado.",
      "Muestra en una pantalla mensajes de estafa de ejemplo y pide al grupo que diga en voz alta las señales de alerta.",
      "Recuerda a quienes estén en libertad condicional o probatoria que sigan sus condiciones sobre el uso de internet.",
      "Califica la lista final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
