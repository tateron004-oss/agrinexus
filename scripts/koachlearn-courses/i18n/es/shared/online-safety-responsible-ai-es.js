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
  chapters: [
    {
      name: "Capítulo 1: Protegerte en internet",
      lessons: [
        {
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
          youCanNow: "crear una frase de contraseña segura y proteger tu correo con el inicio de sesión en dos pasos."
        },
        {
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
          youCanNow: "detectar estafas de phishing, deepfakes y voces clonadas y responder de forma segura."
        },
        {
          title: "Denunciar estafas y recuperarte del robo de identidad",
          minutes: 5,
          goal: "Saber dónde denunciar estafas y qué hacer primero si te roban tu información.",
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
          youCanNow: "denunciar estafas y dar los primeros pasos después de un robo de identidad."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Protegerte en internet",
        questions: [
          { q: "¿Cuál es la contraseña más segura?", options: ["password123", "tu fecha de nacimiento", "arce-río-tigre-lámpara", "123456"], answer: 2, why: "Las frases de contraseña largas con palabras al azar son seguras." },
          { q: "¿Qué hace el inicio de sesión en dos pasos (MFA)?", options: ["Agrega una segunda comprobación, como un código del teléfono, después de tu contraseña", "Hace más corta tu contraseña", "Comparte tu contraseña con tus amigos", "Desactiva tu cuenta"], answer: 0, why: "Una segunda comprobación frena a los atacantes que solo tienen tu contraseña." },
          { q: "Recibes una llamada con la voz de tu nieto que te pide tarjetas de regalo ya mismo. ¿Qué haces?", options: ["Comprar las tarjetas de regalo rápido", "Leerle tu número de banco", "Enviar criptomonedas", "Colgar y llamarlo a un número que conoces"], answer: 3, why: "Las voces se pueden clonar con IA; devuelve la llamada a un número conocido." },
          { q: "¿Qué es un deepfake?", options: ["Una piscina profunda", "Un video, imagen o voz falsos hechos con IA", "Una contraseña segura", "Una noticia real"], answer: 1, why: "Los deepfakes son falsificaciones hechas con IA que parecen o suenan reales." },
          { q: "En EE. UU., ¿a dónde dice la FTC que reenvíes los mensajes de texto de estafa?", options: ["Al 911", "Al 7726 (SPAM)", "Al estafador", "A tus contactos"], answer: 1, why: "La FTC dice que reenvíes los textos de estafa al 7726." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la IA de forma responsable",
      lessons: [
        {
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
          youCanNow: "mantener la información privada fuera de las herramientas de IA y usar su configuración de privacidad."
        },
        {
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
          youCanNow: "revisar las respuestas de la IA en busca de errores y ponerlas a prueba para detectar sesgos injustos."
        },
        {
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
          youCanNow: "proteger tus cuentas, evitar y denunciar estafas, y usar la IA de forma segura, honesta y justa."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la IA de forma responsable",
        questions: [
          { q: "¿Qué es seguro escribir en un asistente de IA?", options: ["Tu número del Seguro Social", "La contraseña de tu banco", "El historial médico de tu amigo", "“Ayúdame a escribir una nota de agradecimiento para mi trabajador social”"], answer: 3, why: "Los pedidos generales sin datos privados son seguros." },
          { q: "¿Qué es una alucinación de la IA?", options: ["Cuando la IA dice algo falso como si fuera cierto", "Un sueño", "Una contraseña segura", "Un tipo de virus"], answer: 0, why: "La IA puede inventar datos con total seguridad." },
          { q: "¿Cómo puedes poner a prueba una herramienta de IA para detectar sesgos?", options: ["Confiar en ella", "Preguntarle si tiene sesgos y creerle", "Hacer la misma pregunta cambiando un detalle y comparar", "Usarla solo de noche"], answer: 2, why: "Cambiar un detalle muestra si trata distinto a las personas." },
          { q: "Tu maestro permite la IA solo para generar ideas. ¿Qué es lo honesto?", options: ["Que la IA escriba todo el ensayo y decir que es tuyo", "Copiar el ensayo hecho con IA de un amigo", "Ignorar la regla", "Usarla para generar ideas y luego escribir el trabajo tú mismo"], answer: 3, why: "Sigue las reglas sobre cómo se puede usar la IA." },
          { q: "Alguien tiene una emergencia médica. ¿Qué haces?", options: ["Preguntarle a un chatbot de IA", "Publicarlo en internet", "Llamar al 911", "Esperar"], answer: 2, why: "Las emergencias necesitan servicios de emergencia, no IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Seguridad en internet y uso responsable de la IA",
    questions: [
      { q: "¿Qué cuenta debes proteger primero?", options: ["Una cuenta de juegos", "Tu correo", "Un sitio de recetas", "Una app del clima"], answer: 1, why: "Con el correo se pueden cambiar tus otras contraseñas." },
      { q: "Una frase de contraseña es:", options: ["Una contraseña hecha de varias palabras al azar", "Tu nombre y tu fecha de nacimiento", "Un número corto", "Un código del teléfono"], answer: 0, why: "Las palabras al azar forman contraseñas largas y seguras." },
      { q: "¿Debes usar la misma contraseña en todas partes?", options: ["Sí, es más fácil", "Solo para los bancos", "No, usa una distinta para cada cuenta importante", "Solo para el correo"], answer: 2, why: "Una sola contraseña robada lo abriría todo." },
      { q: "Un administrador de contraseñas:", options: ["Guarda tus contraseñas de forma segura", "Las comparte en internet", "Adivina las contraseñas de otros", "Borra tus cuentas"], answer: 0, why: "Recuerda por ti las contraseñas seguras." },
      { q: "¿Qué agencia de EE. UU. recomienda contraseñas seguras, MFA y actualizaciones en su campaña de concienciación?", options: ["La NASA", "El Servicio Postal", "El Servicio de Parques Nacionales", "La CISA"], answer: 3, why: "La CISA dirige la concienciación sobre ciberseguridad en EE. UU." },
      { q: "Un texto inesperado dice que tu cuenta bancaria está bloqueada y trae un enlace. Debes:", options: ["Hacer clic y poner tu usuario", "No hacer clic; comunicarte con el banco a un número que conoces", "Responder con tu número de tarjeta", "Reenviarlo a tus amigos"], answer: 1, why: "Es un signo clásico de phishing." },
      { q: "Que te pidan pagar con tarjetas de regalo es:", options: ["Normal en las oficinas del gobierno", "Una señal de alerta de estafa", "Una forma segura de pagar cuentas", "Algo que exigen los bancos"], answer: 1, why: "Las agencias reales no piden tarjetas de regalo." },
      { q: "La clonación de voz es:", options: ["Cantar en un coro", "Grabar tu propio buzón de voz", "Una mejora del teléfono", "Usar la IA para copiar la voz de alguien"], answer: 3, why: "Los estafadores pueden copiar voces a partir de audios cortos." },
      { q: "Una palabra clave familiar te ayuda a:", options: ["Comprobar si una llamada de emergencia es de verdad de tu familia", "Desbloquear tu teléfono", "Conseguir descuentos", "Cambiar contraseñas"], answer: 0, why: "Una voz clonada no sabrá la palabra clave." },
      { q: "¿Dónde denuncias un fraude en EE. UU.?", options: ["En una sección de comentarios", "En el sitio web del estafador", "En ReportFraud.ftc.gov", "En ningún lado"], answer: 2, why: "La FTC recibe las denuncias de fraude." },
      { q: "Si te robaron el número del Seguro Social, la FTC te envía a:", options: ["Un grupo de redes sociales", "Un chatbot de IA", "Ningún lado", "IdentityTheft.gov"], answer: 3, why: "IdentityTheft.gov da los pasos para recuperarte." },
      { q: "Un congelamiento de crédito:", options: ["Congela tu cuenta bancaria para siempre", "Enfría tu computadora", "Impide que se abran créditos nuevos a tu nombre", "Borra tu historial de crédito"], answer: 2, why: "Bloquea las cuentas nuevas que abran los ladrones." },
      { q: "¿Qué debes hacer si hiciste clic en un enlace malo?", options: ["Nada", "Actualizar el programa de seguridad y hacer un análisis", "Hacer clic en más enlaces", "Tirar el teléfono"], answer: 1, why: "Un análisis encuentra y quita los programas dañinos." },
      { q: "Escribir en un chat de IA se parece más a:", options: ["Hablar en un lugar público", "Escribir en un diario con candado", "Pensar en silencio", "Hablar con un abogado"], answer: 0, why: "Los chats se pueden guardar, así que ten cuidado." },
      { q: "En lugar de escribir tu número de caso en la IA, usa:", options: ["El número real", "La mitad del número", "Un marcador como “[mi número]”", "Tu número del Seguro Social"], answer: 2, why: "Los marcadores protegen los datos privados." },
      { q: "El sesgo de la IA es:", options: ["Un trato o una suposición injusta sobre grupos de personas", "Una respuesta rápida", "Una respuesta larga", "Un tipo de contraseña"], answer: 0, why: "La IA puede repetir estereotipos injustos." },
      { q: "Una herramienta de IA califica peor a un candidato a un empleo solo por su nombre. Debes:", options: ["Usarla igual", "Cambiarle el nombre al candidato", "Esconderlo", "No usar ese resultado y denunciarlo"], answer: 3, why: "No se deben usar los resultados injustos de la IA." },
      { q: "Si la IA te ayudó en tu trabajo y eso importa, debes:", options: ["Esconderlo", "Decir cómo te ayudó la IA", "Decir que lo hiciste solo", "Culpar a la IA de los errores"], answer: 1, why: "Ser honesto sobre el uso de la IA genera confianza." },
      { q: "Hacer con IA una imagen falsa y vergonzosa de un compañero de clase real es:", options: ["Una broma inofensiva", "Dañino e ilegal en muchos lugares", "Obligatorio en la escuela", "Bueno para la seguridad"], answer: 1, why: "Las falsificaciones de personas reales sin consentimiento causan daño real." },
      { q: "¿Quién es responsable de una publicación que compartes y que escribió la IA?", options: ["La IA", "Nadie", "El proveedor de internet", "Tú"], answer: 3, why: "Eres responsable de lo que envías o publicas." }
    ]
  }
};
