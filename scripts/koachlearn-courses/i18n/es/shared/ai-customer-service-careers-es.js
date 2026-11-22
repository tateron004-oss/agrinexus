"use strict";

// Koach Learn course (shared, bonus), Spanish translation of "AI for Customer Service Careers". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-customer-service-careers-es",
  lang: "es",
  translationOf: "ai-customer-service-careers",
  category: "Re-Entry",
  name: "IA para carreras de atención al cliente",
  skills: "Atender un contacto con un cliente de principio a fin, Calmar a clientes molestos, Usar respuestas sugeridas por IA y bases de conocimiento, Escribir notas de casos, Proteger los datos de los clientes, Ir a entrevistas para empleos de atención al cliente",
  outcome: "atender una llamada o un chat de un cliente desde el saludo hasta el cierre, calmar a un cliente molesto, usar las herramientas de IA como lo hacen los agentes de soporte revisando sus respuestas, escribir notas de casos claras y mostrar estas habilidades en una entrevista para un empleo de atención al cliente.",
  about: [
    "Los empleos de atención al cliente están en todas partes: centros de llamadas, soporte por chat, tiendas, bancos, hospitales, empresas de servicios, empresas de reparto y empresas de tecnología. Muchos son de nivel inicial, ofrecen capacitación y algunos son remotos. La IA está cambiando el trabajo: los chatbots responden las preguntas fáciles y los agentes humanos atienden las más difíciles con ayuda de la IA.",
    "Este curso es para personas que vuelven a casa, personas que buscan empleo en programas de capacitación laboral y cualquiera que quiera una carrera en atención al cliente. Las habilidades con la gente que ya tienes, como mantener la calma, escuchar y resolver problemas, son el corazón de este trabajo.",
    "Practicarás con un asistente de IA que hace de cliente. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Haz tres simulaciones de contacto con un asistente de IA que haga de cliente: una pregunta sencilla, un cliente molesto y un problema que no puedes resolver al primer intento. Usa el contacto en cinco pasos, escribe notas del caso para cada uno, y luego escribe tres viñetas para tu currículum y una respuesta STAR de entrevista sobre cómo calmaste a un cliente molesto.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que vuelven a casa después de la prisión, personas que buscan empleo en programas de capacitación laboral y cualquiera que quiera un empleo de nivel inicial en atención al cliente en un centro de llamadas, un equipo de chat, una tienda, un banco, una clínica o una empresa de reparto.",
    startingPoint: "Saben hablar con la gente, mantener la calma y resolver problemas del día a día. Muchos han usado un teléfono y mensajes de texto; pocos han usado en el trabajo una mesa de ayuda, un sistema de casos o un asistente de IA.",
    gap: "Los empleos de atención al cliente ahora combinan el trato humano con herramientas de IA. Necesitan una forma clara de atender un contacto, calmar a clientes molestos, revisar las sugerencias de la IA, escribir notas de casos y mostrar estas habilidades en una entrevista, para conseguir el empleo y mantenerlo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Dispositivos: un teléfono o una computadora compartida de la biblioteca o del programa",
      "Tiempo: lecciones de unos cinco minutos con tareas prácticas cortas",
      "Privacidad: la práctica usa clientes inventados y ningún dato real de cuentas",
      "Las reglas y herramientas cambian de una empresa a otra; se sigue la política de cada empleador"
    ],
    prerequisites: "Ninguno. Quienes no conocen las herramientas de IA pueden tomar primero \"Introducción a la IA y a la confianza digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tres ofertas de empleo de atención al cliente", action: "describir los principales empleos de atención al cliente y cómo usan los agentes herramientas de IA como los chatbots, las respuestas sugeridas y las bases de conocimiento", standard: "nombrando al menos una herramienta y una tarea humana para cada empleo" },
    { id: "O2", condition: "En una simulación con un cliente", action: "atender el contacto desde el saludo hasta el cierre con los cinco pasos: saludar, escuchar, confirmar, resolver y cerrar", standard: "usando los cinco pasos en orden" },
    { id: "O3", condition: "En una simulación con un cliente molesto", action: "calmar al cliente con los pasos de HEAT y decidir cuándo escalar", standard: "sin discutir ni decir \"cálmese\"" },
    { id: "O4", condition: "Con una respuesta sugerida por la IA", action: "comparar la respuesta con la base de conocimiento y la política y editarla antes de enviarla", standard: "de modo que cada dato y cada promesa coincidan con la política" },
    { id: "O5", condition: "Después de un contacto con un cliente", action: "escribir notas del caso que registren el problema, lo que hiciste, lo que se prometió y el seguimiento", standard: "con todas las partes necesarias y sin contraseñas ni datos privados" },
    { id: "O6", condition: "Con una oferta de empleo", action: "escribir viñetas para el currículum y una respuesta STAR de entrevista que muestren tus habilidades de atención al cliente", standard: "con tres viñetas y una historia STAR completa" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Atender bien a los clientes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cómo es el trabajo de atención al cliente con IA",
          minutes: 4,
          goal: "Describir los empleos de atención al cliente y cómo se usan en ellos las herramientas de IA.",
          text: [
            "Los agentes de atención al cliente ayudan a la gente por teléfono, chat, correo, redes sociales o en persona. Puestos comunes: representante de atención al cliente, agente de soporte, agente de centro de llamadas, técnico de mesa de ayuda y especialista en atención a clientes.",
            "Hoy la IA atiende muchas preguntas sencillas con chatbots, así que a los agentes humanos les tocan los casos más difíciles, más emocionales o fuera de lo común. Los agentes suelen usar herramientas de IA que sugieren respuestas, buscan en la base de conocimiento de la empresa, resumen conversaciones largas y escriben notas de casos.",
            "Eso hace más valiosas las habilidades humanas: escuchar, la empatía, mantener la calma, el criterio y resolver problemas. La IA sugiere; tú decides qué es lo correcto para el cliente y sigues la política de la empresa."
          ],
          words: [["Representante de atención al cliente", "una persona cuyo trabajo es ayudar a los clientes con sus preguntas y problemas."], ["Base de conocimiento", "la biblioteca de respuestas y artículos de instrucciones de una empresa."], ["Caso (ticket)", "el registro de un problema de un cliente y lo que se hizo al respecto."]],
          slides: [
            { title: "Dónde están los empleos", bullets: ["Teléfono, chat, correo, redes sociales, en persona", "Tiendas, bancos, hospitales, servicios, tecnología"] },
            { title: "La IA en el trabajo", bullets: ["Los chatbots atienden las preguntas sencillas", "Respuestas sugeridas y búsqueda de información", "Resúmenes y notas de casos"] },
            { title: "Las habilidades humanas importan más", bullets: ["Escuchar y la empatía", "Calma y criterio", "Tú decides; la IA sugiere"] }
          ],
          tryIt: "Mira tres ofertas de empleo de atención al cliente. Anota los nombres de los puestos, si mencionan IA, chat o herramientas concretas, y tres habilidades que pide cada una.",
          youCanNow: "describir los empleos de atención al cliente y cómo usan los agentes las herramientas de IA.",
          quickCheck: [
            { objective: "O1", q: "Cuando una empresa usa chatbots, ¿qué suele atender un agente de soporte humano?", options: ["Solo los cambios de contraseña", "Nada, porque los chatbots hacen todo el trabajo", "Los casos más difíciles y emocionales", "Solo los casos en otro idioma"], answer: 2, why: "Los chatbots responden las preguntas sencillas, así que a las personas les tocan los casos difíciles que necesitan cuidado y criterio." },
            { objective: "O1", q: "Una oferta de empleo pide \"experiencia con un sistema de casos (tickets)\". Nunca has usado uno. ¿Qué harías?", options: ["No postularte porque no cumples los requisitos", "Postularte, mostrar habilidades relacionadas y aprender qué hace un sistema de casos", "Poner en tu currículum que sí lo usaste", "Pedirle a un chatbot que se postule por ti"], answer: 1, why: "Puedes postularte con honestidad, mostrar habilidades relacionadas y aprender la herramienta; mentir en el currículum nunca es la respuesta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "El contacto con el cliente en cinco pasos",
          minutes: 5,
          goal: "Atender un contacto con un cliente desde el saludo hasta el cierre en cinco pasos.",
          text: [
            "La mayoría de los buenos contactos siguen cinco pasos. Saludar: di tu nombre y ofrece ayuda. Escuchar: deja que te expliquen sin interrumpir y haz preguntas para entender. Confirmar: repite el problema con tus palabras. Resolver: da la respuesta o los siguientes pasos con claridad. Cerrar: comprueba que quedó resuelto, pregunta si hay algo más y da las gracias.",
            "Ejemplo: “Gracias por llamar, le atiende Dee. ¿En qué le puedo ayudar?” ... “Entonces su pedido aparece como entregado, pero no le llegó. Déjeme revisar”. ... “Le envié un reemplazo; llega el jueves. ¿Hay algo más en lo que le pueda ayudar?”",
            "Verifica la identidad con el proceso de la empresa antes de dar datos de la cuenta. Nunca pidas información que el proceso no exige, y nunca pidas una contraseña completa."
          ],
          steps: ["Saluda con tu nombre y ofrece ayuda.", "Escucha sin interrumpir; haz preguntas.", "Confirma el problema con tus palabras.", "Resuelve o explica con claridad los siguientes pasos.", "Cierra: comprueba, pregunta si hay algo más y da las gracias."],
          words: [["Verificar la identidad", "confirmar que el cliente es quien dice ser siguiendo los pasos de la empresa."], ["Solución", "lo que resuelve el problema del cliente."]],
          slides: [
            { title: "Cinco pasos", bullets: ["Saludar y escuchar", "Confirmar el problema", "Resolver y cerrar"] },
            { title: "Que suene así", bullets: ["“Le atiende Dee. ¿En qué le puedo ayudar?”", "“Su pedido aparece como entregado, pero no le llegó”.", "“¿Hay algo más en lo que le pueda ayudar?”"] },
            { title: "Protege la cuenta", bullets: ["Verifica la identidad como dice la empresa", "Pide solo lo que se exige", "Nunca pidas una contraseña completa"] }
          ],
          tryIt: "Pide a un asistente de IA: “Haz de cliente cuyo paquete dice entregado pero nunca llegó. No salgas del personaje. Cuando terminemos, califícame en saludar, escuchar, confirmar, resolver y cerrar”. Haz la simulación.",
          youCanNow: "atender un contacto con un cliente desde el saludo hasta el cierre en cinco pasos.",
          quickCheck: [
            { objective: "O2", q: "¿Qué paso va justo después de saludar al cliente?", options: ["Resolver", "Cerrar", "Confirmar", "Escuchar"], answer: 3, why: "Después del saludo escuchas todo el problema antes de confirmarlo o resolverlo." },
            { objective: "O2", q: "Crees que el problema está resuelto. ¿Qué harías antes de terminar el contacto?", options: ["Comprobar que quedó resuelto, preguntar si necesita algo más y dar las gracias", "Colgar rápido para tomar la siguiente llamada", "Decirle que vuelva a llamar si se descompone", "Pedirle que te califique con cinco estrellas"], answer: 0, why: "Un buen cierre comprueba la solución, pregunta si hace falta algo más y da las gracias al cliente." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Calmar a un cliente molesto",
          minutes: 6,
          goal: "Usar pasos para bajar la tensión, calmar a un cliente molesto y encontrar una solución.",
          text: [
            "Los clientes molestos suelen estar molestos con la situación, no contigo. Mantén la calma, habla bajo y despacio, y no discutas ni lo tomes como algo personal.",
            "Usa los pasos HEAT (siglas en inglés de Escuchar, Empatizar, Disculparse y Actuar): escúchalos hasta el final, muestra empatía (“Entiendo lo frustrante que es”), discúlpate por la experiencia y actúa (diles exactamente qué vas a hacer). Evita decir “cálmese” y “eso no es mi trabajo”.",
            "Conoce tus límites. Si alguien te insulta o te amenaza, sigue la política de tu empresa, que a menudo permite dar una advertencia y luego terminar el contacto, o pasarlo a un supervisor. Tomar descansos cortos y hablar con tus compañeros después de las llamadas difíciles te ayuda a estar bien."
          ],
          steps: ["Mantén la calma y no lo tomes como algo personal.", "Escúchalos hasta el final.", "Muestra empatía y discúlpate por la experiencia.", "Actúa: di exactamente qué vas a hacer.", "Si hay insultos, sigue la política de la empresa o busca a un supervisor."],
          words: [["Bajar la tensión", "calmar una situación tensa."], ["Empatía", "mostrar que entiendes cómo se siente alguien."], ["Escalar", "pasar un caso a un supervisor o a un especialista."]],
          slides: [
            { title: "No es contra ti", bullets: ["Están molestos con la situación", "Voz baja y despacio; sin discutir"] },
            { title: "HEAT", bullets: ["Escuchar hasta el final (Hear)", "Empatizar y disculparse (Empathize, Apologize)", "Actuar (Take action)"] },
            { title: "Conoce tus límites", bullets: ["Insultos o amenazas: sigue la política", "Busca a un supervisor", "Cuídate después de las llamadas difíciles"] }
          ],
          tryIt: "Pide a un asistente de IA que haga de cliente enojado al que le cobraron dos veces la factura. Usa HEAT. Luego pregúntale a la IA qué frases funcionaron y cuáles cambiar.",
          youCanNow: "calmar a un cliente molesto con HEAT y saber cuándo escalar.",
          quickCheck: [
            { objective: "O3", q: "¿Qué significa la T de HEAT?", options: ["Hablar más rápido (Talk faster)", "Transferir (Transfer)", "Actuar (Take action)", "Agradecer (Thank)"], answer: 2, why: "HEAT es Escuchar, Empatizar, Disculparse y Actuar (Hear, Empathize, Apologize, Take action)." },
            { objective: "O3", q: "Un cliente grita por un cobro doble. ¿Qué dirías primero?", options: ["\"Lo escucho y lamento que esto haya pasado. Déjeme revisarlo ahora mismo.\"", "\"Cálmese para que pueda ayudarle.\"", "\"Eso no es de mi departamento.\"", "\"Seguro hizo clic dos veces.\""], answer: 0, why: "Escuchar y mostrar empatía primero baja la tensión; culpar o decir \"cálmese\" la sube." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Atender bien a los clientes",
        questions: [
          { objective: "O1", q: "¿Qué es una base de conocimiento?", options: ["La cuenta bancaria de un cliente", "Un tipo de chatbot", "La biblioteca de respuestas y artículos de instrucciones de una empresa", "Solo un video de capacitación"], answer: 2, why: "Los agentes buscan en ella las respuestas correctas." },
          { objective: "O1", q: "¿Por qué importan más las habilidades humanas a medida que crece la IA en la atención al cliente?", options: ["A las personas les tocan los casos más difíciles y emocionales", "La IA está prohibida", "Los clientes nunca usan el chat", "Las personas solo responden preguntas sencillas"], answer: 0, why: "Los chatbots atienden los casos sencillos; las personas, los difíciles." },
          { objective: "O2", q: "¿Qué paso va justo después de escuchar?", options: ["Cerrar la llamada", "Pedir su contraseña", "Transferirlo", "Confirmar el problema con tus palabras"], answer: 3, why: "Confirmar muestra que entendiste." },
          { objective: "O3", q: "¿Qué significa la E de HEAT?", options: ["Escalar (Escalate)", "Empatizar (Empathize)", "Salir (Exit)", "Correo (Email)"], answer: 1, why: "HEAT: Escuchar, Empatizar, Disculparse, Actuar (Hear, Empathize, Apologize, Take action)." },
          { objective: "O3", q: "¿Qué frase debes evitar con un cliente molesto?", options: ["“Entiendo lo frustrante que es”.", "“Cálmese”.", "“Esto es lo que voy a hacer”.", "“Gracias por su paciencia”."], answer: 1, why: "“Cálmese” suele enojar más a la gente." }
        ]
      }
    },
    {
      name: "Capítulo 2: Herramientas de IA y conseguir el empleo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usar las respuestas sugeridas por la IA y la base de conocimiento",
          minutes: 5,
          goal: "Usar las sugerencias de la IA como punto de partida y revisarlas antes de enviarlas.",
          text: [
            "Muchos sistemas de soporte muestran respuestas sugeridas por la IA o respuestas sacadas de la base de conocimiento. Ahorran tiempo, pero pueden estar equivocadas, desactualizadas o no encajar con la situación de este cliente.",
            "Antes de enviar: léela completa, compara los datos con la base de conocimiento o la política (fechas, precios, reglas de reembolso), adáptala a esta persona (usa su nombre, responde lo que preguntó) y arregla el tono. Si la IA sugiere algo contra la política, como un reembolso que no puedes dar, no lo envíes.",
            "Para practicar en casa, pega un mensaje de cliente inventado en un asistente de IA gratuito y pide: “Redacta una respuesta amable. Nuestra política: reembolsos dentro de 30 días con recibo”. Luego edítala como si fueras el agente."
          ],
          steps: ["Lee completa la respuesta sugerida.", "Compara los datos con la base de conocimiento o la política.", "Adáptala a este cliente.", "Arregla el tono.", "No envíes nada que vaya contra la política."],
          words: [["Respuesta sugerida", "una respuesta redactada por la IA que un agente puede editar y enviar."], ["Política", "las reglas oficiales de la empresa."]],
          slides: [
            { title: "Las sugerencias de la IA ahorran tiempo", bullets: ["Pero pueden estar mal o desactualizadas", "Puede que no encajen con este cliente"] },
            { title: "Antes de enviar", bullets: ["Compara los datos con la política", "Adáptala y arregla el tono", "Nunca envíes lo que rompe la política"] },
            { title: "Practica en casa", bullets: ["Pega un mensaje inventado en la IA", "Dale la política", "Edítala como un agente"] }
          ],
          tryIt: "Escribe un correo de cliente inventado sobre un reembolso atrasado. Pide a la IA una respuesta usando una política que inventes, luego edítala y marca cada cambio que hiciste.",
          youCanNow: "usar con seguridad las respuestas sugeridas por la IA revisándolas, adaptándolas y siguiendo la política.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es una respuesta sugerida por la IA?", options: ["Una respuesta final que debes enviar", "Un borrador que escribe la IA y que tú revisas y editas", "Un mensaje de tu supervisor", "Una encuesta que llena el cliente"], answer: 1, why: "La sugerencia es solo un punto de partida; tú la revisas y decides qué enviar." },
            { objective: "O4", q: "Un borrador de la IA promete un reembolso en dos días, pero la política dice de cinco a siete días. ¿Qué harías?", options: ["Enviarlo porque lo escribió la IA", "Borrar toda la respuesta y no enviar nada", "Cambiar el plazo para que coincida con la política antes de enviarla", "Preguntarle al cliente qué plazo prefiere"], answer: 2, why: "Cada dato y cada promesa deben coincidir con la política antes de enviar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escribir notas de casos y proteger los datos de los clientes",
          minutes: 5,
          goal: "Escribir notas de casos claras y manejar la información de los clientes con seguridad.",
          text: [
            "Cada contacto necesita notas para que el siguiente agente sepa qué pasó. Las buenas notas de un caso son cortas y se basan en hechos: el problema, lo que revisaste, lo que hiciste, lo que se prometió y cualquier fecha de seguimiento. Ejemplo: “Cliente reporta paquete perdido, el pedido aparece entregado el 10/12. Revisé el rastreo de la paquetería. Envié reemplazo, llega el 10/16. Dar seguimiento si no lo recibe”.",
            "Algunas herramientas dejan que la IA resuma la conversación en notas. Revisa el resumen: la IA puede olvidar una promesa o agregar algo que no pasó.",
            "Protege los datos: entra solo en las cuentas a las que estás ayudando, nunca compartas datos de clientes con quien no está autorizado, nunca pegues información de clientes en herramientas de IA que tu empresa no haya aprobado y nunca escribas números de tarjeta completos ni contraseñas en las notas. Seguir las reglas de privacidad es parte del trabajo."
          ],
          steps: ["Escribe el problema en una línea.", "Escribe lo que revisaste y lo que hiciste.", "Escribe lo que se prometió y la fecha de seguimiento.", "Revisa que al resumen de la IA no le falten datos ni tenga errores.", "No pongas números de tarjeta completos ni contraseñas."],
          words: [["Notas del caso", "un registro escrito y corto de un contacto con un cliente."], ["Privacidad de los datos", "mantener segura la información personal de la gente y usarla solo como está permitido."]],
          slides: [
            { title: "Buenas notas del caso", bullets: ["Problema, lo que revisaste, lo que hiciste", "Lo que se prometió y la fecha de seguimiento", "Cortas y basadas en hechos"] },
            { title: "Resúmenes con IA", bullets: ["Ahorran tiempo", "Revisa que no falten promesas ni haya errores"] },
            { title: "Protege los datos de los clientes", bullets: ["Solo las cuentas a las que ayudas", "Nada de datos de clientes en IA no aprobada", "Sin números de tarjeta ni contraseñas en las notas"] }
          ],
          tryIt: "Escribe notas del caso para las dos simulaciones que hiciste en el capítulo 1. Luego pide a la IA que resuma una simulación y compara su resumen con tus notas.",
          youCanNow: "escribir notas de casos claras y proteger la información de los clientes.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué importan las notas del caso?", options: ["Permiten que el siguiente agente continúe el caso sin volver a preguntarle al cliente", "Son solo para los abogados de la empresa", "Reemplazan la conversación con el cliente", "Son un lugar para escribir tu opinión sobre el cliente"], answer: 0, why: "Las notas claras permiten que cualquiera continúe el caso sin que el cliente tenga que repetirlo todo." },
            { objective: "O5", q: "Un cliente te lee por error el número de su tarjeta. ¿Qué escribirías en las notas?", options: ["El número completo de la tarjeta para que quede guardado", "El número de la tarjeta y su contraseña", "Nada sobre la llamada", "El problema y lo que se hizo, sin el número de la tarjeta"], answer: 3, why: "Las notas registran el problema y lo que se hizo, nunca números completos de tarjeta ni contraseñas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Conseguir empleo en atención al cliente",
          minutes: 5,
          goal: "Mostrar tus habilidades de atención al cliente en tu currículum y en una entrevista.",
          text: [
            "Los empleadores buscan responsabilidad, una actitud tranquila, comunicación clara, habilidades básicas de computadora y ganas de aprender. Cuenta la experiencia en tiendas, servicio de comida, cuidado de personas, la iglesia, el ejército o el trabajo dentro de prisión.",
            "Escribe viñetas para tu currículum que muestren resultados: “Atendí a más de 60 clientes al día en una línea de cocina con mucho movimiento, con una actitud tranquila y amable”. Pide a la IA que te ayude a convertir tu experiencia en viñetas de atención al cliente, y que sean ciertas.",
            "Espera preguntas de simulación: “Un cliente está gritando por un pedido atrasado. ¿Qué haces?”. Responde con tus pasos (HEAT y el contacto en cinco pasos). Prepara una historia STAR (Situación, Tarea, Acción, Resultado) sobre una vez que calmaste a alguien o resolviste un problema. Algunos empleadores hacen una prueba de mecanografía o de computadora, así que practica con una prueba de mecanografía gratuita en internet."
          ],
          steps: ["Haz una lista de las experiencias en las que ayudaste a la gente.", "Pide a la IA que las convierta en viñetas ciertas con números.", "Prepara una historia STAR sobre calmar a alguien o resolver un problema.", "Practica una respuesta de simulación con HEAT.", "Practica mecanografía con una prueba gratuita en internet."],
          words: [["Pregunta de simulación", "una pregunta de entrevista en la que muestras cómo manejarías una situación."], ["Prueba de mecanografía", "una prueba de qué tan rápido y bien escribes en el teclado."]],
          slides: [
            { title: "Lo que buscan los empleadores", bullets: ["Responsable y tranquilo", "Comunicación clara", "Computación básica; ganas de aprender"] },
            { title: "Viñetas para el currículum", bullets: ["Muestra resultados con números", "Toda experiencia ayudando cuenta", "Que sean ciertas"] },
            { title: "Prepárate para la entrevista", bullets: ["Respuestas de simulación con HEAT", "Una historia STAR sobre calmar a alguien", "Practica mecanografía"] }
          ],
          tryIt: "Tarea final: haz con la IA tres simulaciones de contacto (pregunta sencilla, cliente molesto, problema que no se resuelve al primer intento), escribe notas del caso para cada una, y luego escribe tres viñetas para tu currículum y una respuesta STAR sobre cómo calmaste a un cliente molesto.",
          youCanNow: "atender clientes con herramientas de IA como un agente de soporte y mostrar esas habilidades para conseguir el empleo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué significa la R de una respuesta STAR?", options: ["Razón", "Respuesta", "Reseña", "Resultado"], answer: 3, why: "STAR es Situación, Tarea, Acción y Resultado." },
            { objective: "O6", q: "Trabajaste en la cocina de una prisión sirviendo a 200 personas al día. ¿Cómo lo usarías en un currículum de atención al cliente?", options: ["No ponerlo porque no cuenta", "Escribir una viñeta sobre servir a 200 personas al día con rapidez y amabilidad", "Decir solo que estabas ocupado", "Describirlo como un puesto de gerente"], answer: 1, why: "La experiencia real atendiendo personas cuenta; descríbela con honestidad y con un número." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Herramientas de IA y conseguir el empleo",
        questions: [
          { objective: "O4", q: "Una respuesta sugerida por la IA ofrece un reembolso que tu política no permite. ¿Qué haces?", options: ["Enviarla igual", "Pedirle al cliente que decida", "Borrar el caso", "No enviarla; seguir la política"], answer: 3, why: "Los agentes siguen la política, no lo que adivina la IA." },
          { objective: "O5", q: "Las buenas notas del caso incluyen:", options: ["El problema, lo que hiciste, lo que se prometió y el seguimiento", "El número de tarjeta completo del cliente", "Tu opinión sobre el cliente", "Nada"], answer: 0, why: "Las notas ayudan al siguiente agente." },
          { objective: "O5", q: "Un resumen de la IA olvida una promesa que hiciste. Debes:", options: ["Dejarlo así", "Borrar todas las notas", "Agregar la promesa a las notas", "Culpar a la IA después"], answer: 2, why: "Revisa y corrige los resúmenes de la IA." },
          { objective: "O5", q: "¿Qué nunca se debe escribir en las notas del caso?", options: ["La fecha del pedido", "La fecha de seguimiento", "Lo que revisaste", "La contraseña completa de un cliente"], answer: 3, why: "Las contraseñas nunca se deben anotar." },
          { objective: "O6", q: "En una entrevista te preguntan cómo manejarías a un cliente que grita. La mejor respuesta es:", options: ["“Le gritaría yo también”.", "“Le colgaría de inmediato”.", "Explicar HEAT y los pasos que darías", "“No sé”."], answer: 2, why: "Mostrar tus pasos demuestra la habilidad." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para carreras de atención al cliente",
    questions: [
      { objective: "O1", q: "¿Cuál es un puesto de atención al cliente?", options: ["Operador de montacargas", "Agente de soporte", "Soldador", "Piloto"], answer: 1, why: "Los agentes de soporte ayudan a los clientes." },
      { objective: "O1", q: "Hoy, en muchas empresas, las preguntas sencillas las suelen responder:", options: ["Los chatbots", "Solo el correo postal", "Nadie", "El director general"], answer: 0, why: "Los chatbots atienden las preguntas sencillas y comunes." },
      { objective: "O1", q: "Un caso (ticket) es:", options: ["Una entrada de cine", "Una multa de estacionamiento", "El registro de un problema de un cliente y lo que se hizo", "Un cheque de pago"], answer: 2, why: "Los casos siguen cada problema." },
      { objective: "O4", q: "¿Quién toma la decisión final sobre qué decirle a un cliente?", options: ["Tú, siguiendo la política", "La IA", "El cliente", "Un compañero cualquiera"], answer: 0, why: "La IA sugiere; los agentes deciden." },
      { objective: "O2", q: "El primer paso de un contacto con un cliente es:", options: ["Cerrar", "Resolver", "Transferir", "Saludar con tu nombre y ofrecer ayuda"], answer: 3, why: "Un saludo amable empieza bien." },
      { objective: "O2", q: "“Entonces su pedido aparece como entregado, pero no le llegó” es un ejemplo de:", options: ["Cerrar", "Confirmar el problema", "Escalar", "Verificar la identidad"], answer: 1, why: "Repetir el problema lo confirma." },
      { objective: "O2", q: "Antes de dar datos de la cuenta, debes:", options: ["Darlos de inmediato", "Verificar la identidad con el proceso de la empresa", "Pedir su contraseña completa", "Pedirle a un compañero que adivine"], answer: 1, why: "La verificación protege la cuenta." },
      { objective: "O2", q: "¿Cómo debes cerrar un contacto?", options: ["Colgar de golpe", "No decir nada", "Pedir una propina", "Comprobar que quedó resuelto, preguntar si hay algo más y dar las gracias"], answer: 3, why: "Un buen cierre deja satisfecho al cliente." },
      { objective: "O3", q: "Los clientes molestos suelen estar molestos con:", options: ["La situación, no contigo", "Contigo personalmente", "El clima", "Nada"], answer: 0, why: "Recordar esto te ayuda a mantener la calma." },
      { objective: "O3", q: "HEAT significa:", options: ["Ayudar, Terminar, Preguntar, Transferir", "Apurar, Explicar, Discutir, Hablar", "Escuchar, Empatizar, Disculparse, Actuar", "Esperar, Escribir, Responder, Agradecer"], answer: 2, why: "Esos son los cuatro pasos de HEAT." },
      { objective: "O3", q: "Un cliente empieza a insultar y amenazar. Debes:", options: ["Amenazarlo también", "Compartir su dirección", "Aguantar los insultos para siempre", "Seguir la política de la empresa, que puede ser una advertencia, terminar el contacto o un supervisor"], answer: 3, why: "Las políticas protegen a los agentes y a los clientes." },
      { objective: "O3", q: "Escalar significa:", options: ["Subir una escalera", "Levantar la voz", "Pasar un caso a un supervisor o a un especialista", "Cerrar el caso"], answer: 2, why: "Escalar envía los casos difíciles hacia arriba." },
      { objective: "O4", q: "Las respuestas sugeridas por la IA pueden:", options: ["Ser siempre perfectas", "Estar equivocadas, desactualizadas o no encajar con el cliente", "Ser ilegales de leer", "Estar solo en otros idiomas"], answer: 1, why: "Revísalas siempre." },
      { objective: "O4", q: "Antes de enviar una respuesta sugerida por la IA, compara los datos con:", options: ["La base de conocimiento o la política", "Las redes sociales", "Solo tu memoria", "El sitio de un competidor"], answer: 0, why: "Las fuentes oficiales mantienen correctas las respuestas." },
      { objective: "O5", q: "¿Qué nunca debe entrar en una herramienta de IA que tu empresa no ha aprobado?", options: ["Un mensaje de práctica inventado", "Una pregunta de gramática", "La información de los clientes", "Un saludo general"], answer: 2, why: "Los datos de los clientes se deben proteger." },
      { objective: "O5", q: "Privacidad de los datos significa:", options: ["Mantener segura la información personal y usarla solo como está permitido", "Compartir datos con amigos", "Borrar todos los datos", "Publicar datos en internet"], answer: 0, why: "Es una obligación central del trabajo." },
      { objective: "O6", q: "¿Qué viñeta de currículum es la más fuerte para atención al cliente?", options: ["“Hice cosas”", "“Trabajé a veces”", "“Buena persona”", "“Atendí a más de 60 clientes al día con una actitud tranquila y amable”"], answer: 3, why: "Muestra números y la habilidad." },
      { objective: "O6", q: "¿De qué lugar puede contar la experiencia para atención al cliente?", options: ["Solo de centros de llamadas", "Servicio de comida, cuidado de personas, la iglesia o el trabajo dentro de prisión", "Solo de la universidad", "De ninguno"], answer: 1, why: "Ayudar a la gente en cualquier lugar desarrolla la habilidad." },
      { objective: "O6", q: "Una historia STAR sobre calmar a alguien muestra:", options: ["Tu historial de sueldos", "Situación, Tarea, Acción y Resultado", "Tus películas favoritas", "Nada"], answer: 1, why: "STAR demuestra la habilidad con un ejemplo." },
      { objective: "O6", q: "¿Qué habilidad evalúan algunos empleadores antes de contratar?", options: ["Hacer malabares", "Nadar", "Cantar", "La velocidad y la precisión al escribir en el teclado"], answer: 3, why: "Los agentes escriben mucho; practica con una prueba de mecanografía gratuita." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      4,
      7,
      9,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Pasos del contacto",
        objective: "O2",
        notYet: "Se saltó pasos, como resolver antes de escuchar o terminar sin cierre.",
        meets: "Usó saludar, escuchar, confirmar, resolver y cerrar en los tres contactos.",
        exceeds: "Además verificó la identidad cuando hacía falta y dejó un siguiente paso claro en el problema sin resolver."
      },
      {
        name: "Calmar al cliente molesto",
        objective: "O3",
        notYet: "Discutió, culpó o dijo \"cálmese\".",
        meets: "Usó Escuchar, Empatizar, Disculparse y Actuar, y el cliente se calmó.",
        exceeds: "Además supo cuándo escalar y explicó con claridad el siguiente paso."
      },
      {
        name: "IA revisada",
        objective: "O4",
        notYet: "Envió una sugerencia de la IA que no coincidía con la política.",
        meets: "Comparó cada sugerencia de la IA con la base de conocimiento o la política antes de usarla.",
        exceeds: "Puede señalar cada cambio que hizo y decir por qué."
      },
      {
        name: "Notas del caso",
        objective: "O5",
        notYet: "A las notas les falta el problema, lo que se hizo, la promesa o el seguimiento, o incluyen datos privados.",
        meets: "Cada caso tiene el problema, lo que se hizo, lo que se prometió y el seguimiento, sin datos privados.",
        exceeds: "Las notas son tan breves que otro agente podría continuar sin preguntar nada."
      },
      {
        name: "Listo para que te contraten",
        objective: "O6",
        notYet: "Las viñetas son vagas, o a la respuesta STAR le falta una parte.",
        meets: "Tres viñetas claras para el currículum y una respuesta STAR con sus cuatro partes.",
        exceeds: "Las viñetas incluyen números y la respuesta STAR termina con un resultado real."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que se postulan a un empleo de atención al cliente en 30 días (encuesta de seguimiento)",
      "Participantes que consiguen una entrevista o una oferta de empleo de atención al cliente en 90 días",
      "Participantes que aprueban la tarea final con la rúbrica",
      "Participantes que empiezan otro curso de carrera de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini para que haga de cliente",
      "Tres ofertas reales de empleo de atención al cliente de un sitio de empleos",
      "Papel y lápiz para las notas del caso y las viñetas del currículum",
      "Unos 60 minutos en total: lecciones, simulaciones, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Haz las simulaciones en parejas: un participante hace de cliente y otro de agente, y luego cambian; la IA puede hacer de cliente para quien trabaje solo.",
      "Usa solo clientes y cuentas inventados; nunca practiquen con números de tarjeta ni contraseñas reales.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez.",
      "Ayuda a quienes estuvieron dentro a describir con honestidad su experiencia laboral en servicio de comida, cuidado de personas o trabajos dentro de prisión.",
      "Si es posible, invita a un empleador local o a un reclutador de un centro de llamadas a ver las simulaciones finales."
    ]
  }
};
