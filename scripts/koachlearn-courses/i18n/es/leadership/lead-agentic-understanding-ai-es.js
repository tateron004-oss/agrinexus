"use strict";

// Koach Learn course (Leadership Development), Spanish translation of leadership/lead-agentic-understanding-ai.js. See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "lead-agentic-understanding-ai-es",
  lang: "es",
  translationOf: "lead-agentic-understanding-ai",
  category: "Leadership Development",
  name: "Liderazgo en la era de la IA agéntica 1: entender la IA",
  skills: "Explicarle la IA a tu equipo con palabras sencillas, Distinguir la IA generativa de la IA agéntica, Reconocer los buenos y los malos usos, Nombrar los principales riesgos, Escribir una sesión informativa sobre IA para el equipo",
  outcome: "explicarle a tu equipo, con palabras sencillas, qué son la IA generativa y la IA agéntica, dónde ayudan y dónde fallan, y dirigir una sesión informativa de diez minutos con tres buenos usos, tres riesgos y una regla básica clara.",
  about: [
    "Este curso es para gerentes, supervisores, líderes de equipo y dueños de pequeñas empresas y organizaciones sin fines de lucro. No necesitas formación técnica. Necesitas poder hablar de la IA con claridad, porque tu equipo ya la está usando o ya pregunta por ella.",
    "El Capítulo 1 explica qué es la IA, cómo funciona la IA generativa de hoy y qué hace distinta a la IA agéntica. El Capítulo 2 te ayuda a juzgar dónde encaja la IA en el trabajo de tu equipo, qué puede salir mal y cómo informar a tu equipo para que todos empiecen con la misma comprensión.",
    "Cada lección dura unos cinco minutos y termina con una tarea corta que haces con tu propio trabajo. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas. Este es el curso 1 de 3 de Liderazgo en la era de la IA agéntica."
  ],
  finalTask: "Prepara y da (o graba) una sesión informativa de diez minutos sobre IA para tu equipo. Explica la IA generativa y la agéntica con palabras sencillas, muestra un ejemplo en vivo con un asistente de IA gratuito, nombra tres buenos usos y tres riesgos para el trabajo real de tu equipo, y termina con una regla básica que todos van a seguir, como \"ningún dato personal de clientes o empleados se pone en herramientas públicas de IA\".",
  chapters: [
    {
      name: "Capítulo 1: Lo que los líderes necesitan saber sobre la IA",
      lessons: [
        {
          title: "La IA con palabras sencillas",
          minutes: 5,
          goal: "Explicar la IA, el aprendizaje automático y la IA generativa en una frase cada uno.",
          text: [
            "La inteligencia artificial (IA) es software que hace tareas que normalmente necesitan el criterio de una persona, como reconocer la voz, encontrar patrones o escribir textos. El aprendizaje automático es la forma más común de construirla: en lugar de escribir cada regla, las personas le muestran al software muchos ejemplos y este aprende los patrones.",
            "La IA generativa es aprendizaje automático que crea contenido nuevo: texto, imágenes, audio, código. Herramientas como ChatGPT, Microsoft Copilot, Google Gemini y Claude están hechas con modelos de lenguaje grandes (LLM) entrenados con cantidades enormes de textos. Predicen palabras probables, y por eso escriben con fluidez y también por eso pueden equivocarse con mucha seguridad.",
            "Como líder no necesitas las matemáticas. Necesitas tres frases sencillas que puedas decirle a tu equipo, y el criterio para saber cuándo la herramienta está ayudando y cuándo está adivinando."
          ],
          words: [["Inteligencia artificial (IA)", "software que hace tareas que normalmente necesitan el criterio de una persona."], ["Aprendizaje automático", "construir software mostrándole ejemplos para que aprenda patrones."], ["IA generativa", "IA que crea textos, imágenes, audio o código nuevos."], ["LLM", "modelo de lenguaje grande: la IA detrás de los asistentes de chat."]],
          slides: [
            { title: "Tres definiciones sencillas", bullets: ["IA: software que hace tareas que piden criterio", "Aprendizaje automático: aprende patrones de ejemplos", "IA generativa: crea textos, imágenes, código"] },
            { title: "Por qué suena tan segura", bullets: ["Los LLM predicen palabras probables", "Fluido no es lo mismo que correcto"] },
            { title: "Lo que necesita un líder", bullets: ["Palabras sencillas para tu equipo", "Criterio: ¿está ayudando o adivinando?"] }
          ],
          tryIt: "Escribe tu propia explicación de una frase de la IA, del aprendizaje automático y de la IA generativa, con palabras que entendería la persona más nueva de tu equipo. Léelas en voz alta.",
          youCanNow: "explicar la IA, el aprendizaje automático y la IA generativa con palabras sencillas."
        },
        {
          title: "Del asistente al agente: lo que cambia la IA agéntica",
          minutes: 5,
          goal: "Explicar la diferencia entre un asistente de IA y un agente de IA, y por qué les importa a los líderes.",
          text: [
            "Un asistente de IA responde cuando se le pide: tú le das un prompt, él redacta, tú decides. A un agente de IA se le da un objetivo y actúa: planea los pasos, usa herramientas como el correo, el calendario, las hojas de cálculo o los sitios web, revisa los resultados y sigue hasta terminar o hasta que lo detengan.",
            "La IA agéntica lleva a la IA del consejo a la acción. Un asistente redacta una respuesta a un cliente; un agente podría leer la bandeja de entrada, redactar las respuestas, enviarlas y actualizar el expediente del cliente. Eso ahorra más tiempo, y también puede cometer errores a toda velocidad, en nombre de tu organización.",
            "Para los líderes, las preguntas clave cambian. No solo \"¿la respuesta es buena?\", sino \"¿qué se le permite hacer, quién aprueba sus acciones y quién responde cuando algo sale mal?\" Siempre responde una persona."
          ],
          words: [["IA agéntica", "IA que trabaja hacia un objetivo planeando pasos y realizando acciones con herramientas."], ["Responsable", "la persona que responde por el resultado, bueno o malo."]],
          slides: [
            { title: "Asistente vs agente", bullets: ["Asistente: tú pides, él redacta, tú decides", "Agente: recibe un objetivo, planea y actúa con herramientas"] },
            { title: "Del consejo a la acción", bullets: ["Redacta una respuesta vs la envía y actualiza el expediente", "Más tiempo ahorrado, errores a toda velocidad"] },
            { title: "Nuevas preguntas para el líder", bullets: ["¿Qué se le permite hacer?", "¿Quién aprueba sus acciones?", "¿Quién responde? Siempre una persona"] }
          ],
          tryIt: "Elige una tarea de rutina de tu equipo. Describe qué haría un asistente de IA con ella y qué podría hacer un agente de IA. Escribe qué pasos querrías que aprobara una persona.",
          youCanNow: "explicar en qué se diferencia la IA agéntica de un asistente y qué deben decidir los líderes."
        },
        {
          title: "Lo que la IA hace bien y dónde falla",
          minutes: 5,
          goal: "Clasificar tareas en buenos usos, usos con cuidado y malos usos de la IA.",
          text: [
            "La IA hace bien los primeros borradores (correos, ofertas de empleo, órdenes del día), los resúmenes de documentos largos, la lluvia de ideas, la reescritura para otro público y la explicación de temas desconocidos. Ahorran tiempo porque una persona sigue revisando el resultado.",
            "Ten cuidado con todo lo que sea de datos, legal, financiero, médico o sobre personas: la IA puede inventar datos, fuentes y números (a menudo se le llama alucinación), puede reflejar sesgos de sus datos de entrenamiento, y no conoce las políticas de tu organización a menos que se las digas.",
            "Malos usos: las decisiones finales sobre personas (contratar, despedir, sancionar, pagar), todo lo que no se pueda deshacer si sale mal, y todo lo que requiera poner datos privados en una herramienta pública. Una prueba sencilla para tu equipo: ¿te sentirías cómodo explicándole a la persona afectada que esto lo hizo la IA?"
          ],
          words: [["Alucinación", "cuando la IA escribe algo que suena verdadero pero es inventado."], ["Sesgo", "patrones injustos en lo que produce la IA, a menudo aprendidos de sus datos de entrenamiento."]],
          slides: [
            { title: "Buenos usos", bullets: ["Primeros borradores: correos, ofertas, órdenes del día", "Resúmenes y lluvia de ideas", "Reescribir para otro público"] },
            { title: "Usar con cuidado", bullets: ["Datos, leyes, dinero, salud, personas", "Puede inventar datos y fuentes", "Puede reflejar sesgos"] },
            { title: "Malos usos", bullets: ["Decisiones finales sobre personas", "Errores que no se pueden deshacer", "Datos privados en herramientas públicas"] },
            { title: "La prueba de explicarlo", bullets: ["¿Le dirías a la persona afectada que lo hizo la IA?"] }
          ],
          tryIt: "Haz una lista de diez tareas de tu equipo. Marca cada una como BUENO, CUIDADO o MALO para la IA, con unas palabras sobre por qué.",
          youCanNow: "juzgar qué tareas de tu equipo son buenos usos, usos con cuidado o malos usos de la IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lo que los líderes necesitan saber sobre la IA",
        questions: [
          { q: "¿Cuál es la mejor descripción sencilla de la IA generativa?", options: ["Un robot en una fábrica", "Una hoja de cálculo más rápida", "IA que crea textos, imágenes o código nuevos", "Un buscador"], answer: 2, why: "La IA generativa crea contenido nuevo." },
          { q: "¿Por qué un asistente de IA puede sonar seguro y aun así estar equivocado?", options: ["Predice palabras probables en lugar de comprobar datos", "Está hecho para mentir", "Solo lee periódicos viejos", "Está roto"], answer: 0, why: "Una predicción fluida no es una comprobación de datos." },
          { q: "¿Qué es lo que más claramente hace \"agéntica\" a una IA?", options: ["Tiene voz", "Es cara", "Escribe respuestas largas", "Planea pasos y realiza acciones con herramientas"], answer: 3, why: "Los agentes actúan hacia un objetivo, no solo responden." },
          { q: "Un agente de IA le envía a un cliente un correo de reembolso equivocado. ¿Quién es responsable?", options: ["La IA", "Una persona de tu organización", "Nadie", "Solo la empresa de software"], answer: 1, why: "Siempre responde una persona por las acciones de la IA hechas en nombre de la organización." },
          { q: "¿Cuál es un MAL uso de la IA?", options: ["Redactar el orden del día de una reunión", "Hacer una lluvia de ideas de nombres para un evento", "Resumir un informe largo", "Tomar la decisión final de despedir a un empleado"], answer: 3, why: "Las decisiones finales sobre personas necesitan el criterio humano." }
        ]
      }
    },
    {
      name: "Capítulo 2: Guiar los primeros pasos de tu equipo",
      lessons: [
        {
          title: "Los riesgos que todo líder debe nombrar",
          minutes: 5,
          goal: "Nombrar los principales riesgos de la IA para tu equipo y una protección para cada uno.",
          text: [
            "Privacidad: todo lo que se escribe en una herramienta pública de IA puede quedar guardado por el proveedor, y algunas herramientas gratuitas pueden usarlo para mejorar sus productos. Protección: nada de datos de clientes, de empleados ni confidenciales en herramientas públicas; usa las herramientas que tu organización aprobó.",
            "Exactitud: datos inventados, números equivocados, fuentes inventadas. Protección: una persona revisa los datos, las cifras y las citas antes de que algo salga. Sesgo y equidad: lo que produce puede ser injusto con grupos de personas. Protección: nada de decisiones sobre personas tomadas solo por la IA.",
            "Seguridad y agentes: los agentes que leen correos o páginas web pueden ser engañados con instrucciones ocultas (inyección de prompt), y los agentes con demasiado acceso pueden causar daño real. Protección: el mínimo acceso y aprobación humana para las acciones. Para un marco más completo, el Marco de Gestión de Riesgos de IA del NIST (el instituto de normas de EE. UU.), que es gratuito, organiza este trabajo en cuatro funciones: Gobernar, Mapear, Medir y Gestionar."
          ],
          words: [["Inyección de prompt", "texto oculto que intenta que una IA siga las instrucciones de otra persona."], ["Mínimo acceso", "darle a una herramienta o a una persona solo el acceso que su trabajo necesita."], ["NIST AI RMF", "un marco gratuito y voluntario de EE. UU. para gestionar los riesgos de la IA."]],
          slides: [
            { title: "Privacidad", bullets: ["Las herramientas públicas pueden guardar lo que escribes", "Nada de datos de clientes, empleados ni confidenciales", "Usa herramientas aprobadas"] },
            { title: "Exactitud y equidad", bullets: ["Revisa datos, cifras y citas", "Nada de decisiones sobre personas solo con IA"] },
            { title: "Seguridad y agentes", bullets: ["Las instrucciones ocultas pueden engañar a los agentes", "Mínimo acceso, aprobación humana para las acciones"] },
            { title: "Un marco gratuito", bullets: ["NIST AI RMF: Gobernar, Mapear, Medir, Gestionar", "Voluntario; en revisión: consulta la página del NIST"] }
          ],
          sources: [{ name: "NIST: Marco de Gestión de Riesgos de IA (AI RMF)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }, { name: "OWASP Top 10 para aplicaciones con LLM 2025", url: "https://genai.owasp.org/llm-top-10/" }],
          tryIt: "Escribe los tres mayores riesgos de la IA para el trabajo real de tu equipo, y una protección que podrías poner en marcha este mes para cada uno.",
          youCanNow: "nombrar los principales riesgos de la IA para tu equipo y una protección práctica para cada uno."
        },
        {
          title: "Probarla tú mismo: una demostración en vivo que puedes mostrar",
          minutes: 5,
          goal: "Hacer una demostración corta y segura de IA con una tarea real (no privada) del equipo.",
          text: [
            "Los líderes que usan la IA ellos mismos la dirigen mejor. Elige una tarea real sin datos privados: el orden del día de la reunión de equipo de la próxima semana, un primer borrador de una oferta de empleo o un resumen en lenguaje sencillo de una política pública.",
            "Escribe un prompt claro: lo que necesitas, el contexto (sin nombres ni datos privados) y el formato. Luego mejóralo con una pregunta de seguimiento, como \"hazlo más corto\" o \"escríbelo para el personal nuevo\". Revisa cada dato antes de usarlo.",
            "En tu sesión informativa, muestra todo el proceso, incluido un error si lo comete. Ver a un líder detectar un error de la IA le enseña más al equipo que una demostración perfecta."
          ],
          steps: ["Elige una tarea real sin datos privados.", "Escribe un prompt: necesidad, contexto, formato.", "Haz una pregunta de seguimiento para mejorarlo.", "Revisa los datos y corrige los errores.", "Anota lo que le mostrarías al equipo."],
          words: [["Prompt", "lo que escribes o dices a una herramienta de IA para pedirle algo."], ["Seguimiento", "una segunda solicitud que mejora la primera respuesta."]],
          slides: [
            { title: "Úsala tú primero", bullets: ["Los líderes que usan IA la dirigen mejor", "Elige una tarea real, sin datos privados"] },
            { title: "Una buena demostración", bullets: ["Prompt claro: necesidad, contexto, formato", "Un seguimiento para mejorarlo", "Revisa cada dato"] },
            { title: "Muestra también los errores", bullets: ["Detectar un error de la IA es lo que más enseña"] }
          ],
          tryIt: "Usa ChatGPT, Copilot, Gemini o Claude para redactar el orden del día de la reunión de equipo de la próxima semana. Haz una pregunta de seguimiento, revísalo y guarda la versión de antes y la de después para tu sesión informativa.",
          youCanNow: "hacer una demostración de IA corta, segura y honesta con una tarea real del equipo."
        },
        {
          title: "Informar a tu equipo y fijar una primera regla básica",
          minutes: 6,
          goal: "Dar una sesión informativa de diez minutos sobre IA que termine con una regla básica.",
          text: [
            "Una buena primera sesión informativa es corta y práctica. Estructura: dos minutos sobre qué son la IA y la IA agéntica; tres minutos de demostración en vivo; dos minutos sobre buenos usos para nuestro equipo; dos minutos sobre los riesgos; un minuto sobre la regla básica y a quién preguntar.",
            "Elige una regla básica que proteja a las personas y sea fácil de recordar. La primera regla más útil para la mayoría de los equipos: \"Ningún dato personal de clientes, estudiantes, pacientes o empleados se pone en herramientas públicas de IA.\" Añade a quién preguntar cuando haya dudas.",
            "Invita a hacer preguntas y a compartir preocupaciones. Algunas personas estarán entusiasmadas y otras preocupadas por su trabajo. Di con claridad lo que sabes, lo que no sabes, y que las personas siguen siendo responsables de su trabajo. Luego manda la regla por escrito."
          ],
          steps: ["Dos minutos: qué son la IA y la IA agéntica.", "Tres minutos: demostración en vivo.", "Dos minutos: buenos usos para nuestro equipo.", "Dos minutos: riesgos.", "Un minuto: la regla básica y a quién preguntar; luego mándala por escrito."],
          words: [["Regla básica", "una regla sencilla y compartida que todos siguen."], ["Sesión informativa", "una reunión corta para darle a un equipo la misma información."]],
          slides: [
            { title: "La sesión de diez minutos", bullets: ["2 min: qué son la IA y los agentes", "3 min: demostración en vivo", "2 min: buenos usos; 2 min: riesgos", "1 min: la regla básica"] },
            { title: "Una primera regla básica", bullets: ["Nada de datos personales en herramientas públicas de IA", "Di a quién preguntar si hay dudas"] },
            { title: "Dirige la conversación", bullets: ["Invita preguntas y preocupaciones", "Di lo que sabes y lo que no", "Las personas siguen siendo responsables; mándalo por escrito"] }
          ],
          tryIt: "Tarea final: prepara tu sesión informativa de diez minutos con las cinco partes de arriba, usando tu demostración de la Lección 5 y tus riesgos de la Lección 4. Dásela a tu equipo (o grábala), termina con una regla básica y manda la regla por escrito después.",
          youCanNow: "informar a tu equipo sobre la IA con claridad y fijar una primera regla básica que proteja a las personas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Guiar los primeros pasos de tu equipo",
        questions: [
          { q: "Un empleado quiere pegar la queja de un cliente, con su nombre y dirección, en una herramienta pública de IA gratuita. ¿Cuál es la mejor respuesta?", options: ["Adelante", "Pega solo la dirección", "Primero quita los datos personales, o usa una herramienta aprobada", "Pregúntale a la IA si es seguro"], answer: 2, why: "Los datos personales se quedan fuera de las herramientas públicas." },
          { q: "¿Cuáles son las cuatro funciones del Marco de Gestión de Riesgos de IA del NIST?", options: ["Gobernar, Mapear, Medir, Gestionar", "Planear, Construir, Probar, Lanzar", "Comprar, Instalar, Capacitar, Usar", "Leer, Escribir, Revisar, Enviar"], answer: 0, why: "El NIST nombra Gobernar, Mapear, Medir y Gestionar." },
          { q: "Tu demostración en vivo da una fecha equivocada. ¿Qué debes hacer en la sesión?", options: ["Esconderlo", "Mostrar cómo lo detectaste y lo corregiste", "Detener la sesión", "Culpar a la herramienta y seguir"], answer: 1, why: "Detectar los errores abiertamente enseña el hábito de revisar." },
          { q: "¿Cuál es la mejor primera regla básica para la mayoría de los equipos?", options: ["\"Nada de datos personales en herramientas públicas de IA; pregunta si tienes dudas.\"", "\"Nunca uses la IA.\"", "\"Solo los gerentes pueden usar la IA.\"", "\"Usa la IA para todo.\""], answer: 0, why: "Protege a las personas y es fácil de recordar." },
          { q: "A una persona del equipo le preocupa que la IA la reemplace. Un buen líder:", options: ["Termina la reunión", "Ignora la preocupación", "Promete que nunca nada va a cambiar", "Dice con claridad lo que se sabe y que las personas siguen siendo responsables"], answer: 3, why: "Las respuestas honestas y claras generan confianza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Liderazgo en la era de la IA agéntica 1: entender la IA",
    questions: [
      { q: "La mejor descripción de la IA es:", options: ["Un nuevo tipo de pantalla de computadora", "Software que hace tareas que normalmente necesitan el criterio de una persona", "Una app de redes sociales", "Solo un tipo de robot"], answer: 1, why: "Esa es la definición sencilla." },
      { q: "Aprendizaje automático significa:", options: ["El personal aprende a usar máquinas", "Las máquinas se reparan solas", "El software aprende patrones a partir de ejemplos", "Escribir más rápido"], answer: 2, why: "Aprende de ejemplos en lugar de reglas escritas a mano." },
      { q: "¿Cuál es una herramienta de IA generativa?", options: ["Una impresora", "Una calculadora", "Microsoft Copilot", "Un archivero"], answer: 2, why: "Copilot, ChatGPT, Gemini y Claude generan texto." },
      { q: "LLM significa:", options: ["Modelo de lenguaje grande", "Memorando legal largo", "Máquina de bajo nivel", "Módulo de aprendizaje local"], answer: 0, why: "Los LLM hacen funcionar los asistentes de chat." },
      { q: "Un asistente de IA:", options: ["Nunca se equivoca", "Siempre actúa por su cuenta", "Firma contratos", "Responde y redacta cuando se le pide"], answer: 3, why: "Los asistentes responden; tú decides." },
      { q: "Un agente de IA:", options: ["Solo responde preguntas", "Planea pasos y actúa con herramientas hacia un objetivo", "Es un empleado humano", "No puede usar el correo ni el calendario"], answer: 1, why: "Los agentes realizan acciones." },
      { q: "La IA agéntica cambia la pregunta del líder a:", options: ["¿Es popular?", "¿De qué color es?", "¿Cuántas palabras puede escribir?", "¿Qué puede hacer, quién aprueba, quién responde?"], answer: 3, why: "La acción requiere permisos y responsabilidad." },
      { q: "Alucinación significa que la IA:", options: ["Se niega a responder", "Es muy rápida", "Escribe algo que suena verdadero pero es inventado", "Habla en voz alta"], answer: 2, why: "El contenido inventado se debe revisar." },
      { q: "¿Cuál es un BUEN uso de la IA para un equipo?", options: ["El primer borrador de una oferta de empleo que revisa una persona", "Decidir quién recibe un aumento", "Enviar avisos legales sin revisar", "Guardar los expedientes médicos del personal"], answer: 0, why: "Los borradores revisados por personas ahorran tiempo con seguridad." },
      { q: "Lo que produce la IA puede ser injusto con grupos de personas por:", options: ["Un internet lento", "El sesgo aprendido de los datos de entrenamiento", "La elección de la letra", "El tamaño de la pantalla"], answer: 1, why: "Los patrones de los datos de entrenamiento pueden traer sesgos." },
      { q: "La prueba de explicarlo pregunta:", options: ["¿Le dirías a la persona afectada que esto lo hizo la IA?", "¿La IA puede explicarse a sí misma?", "¿Es barata?", "¿Es rápida?"], answer: 0, why: "Sentirte cómodo explicándolo indica un uso aceptable." },
      { q: "La inyección de prompt es:", options: ["Un plan de precios", "Un tratamiento médico", "Un prompt más rápido", "Texto oculto que intenta que la IA siga las órdenes de otra persona"], answer: 3, why: "Los agentes que leen correos o páginas web pueden ser engañados." },
      { q: "Mínimo acceso significa:", options: ["Ningún acceso", "Solo el acceso que el trabajo necesita", "Acceso total para ir más rápido", "Acceso solo para los gerentes"], answer: 1, why: "Menos acceso limita el daño de los errores." },
      { q: "El NIST AI RMF es:", options: ["Una herramienta de IA", "Una ley con multas", "Un marco gratuito y voluntario para gestionar el riesgo de la IA", "Un certificado de formación"], answer: 2, why: "El NIST lo describe como voluntario." },
      { q: "Antes de usar en un informe datos escritos por la IA, debes:", options: ["Pedirle a la IA que lo prometa", "Confiar en ellos si suenan bien", "Comprobarlos con una fuente confiable", "Quitar todos los números"], answer: 2, why: "Una persona revisa los datos y las cifras." },
      { q: "Una buena demostración en vivo usa:", options: ["Una tarea real sin datos privados", "El expediente completo de un cliente", "Datos de sueldos del personal", "Contraseñas"], answer: 0, why: "Las tareas reales pero no privadas son seguras y relevantes." },
      { q: "¿Por qué mostrar un error de la IA en tu sesión informativa?", options: ["Demuestra que la IA no sirve", "Es chistoso", "Termina antes la reunión", "Enseña el hábito de revisar"], answer: 3, why: "Ver cómo se detectan los errores enseña más que una demostración perfecta." },
      { q: "Una primera sesión informativa debe terminar con:", options: ["Una política de 50 páginas", "Una regla básica clara y a quién preguntar", "Ninguna conclusión", "La compra de un software"], answer: 1, why: "Una regla sencilla se recuerda y se sigue." },
      { q: "Después de la sesión informativa debes:", options: ["Prohibir las preguntas", "No volver a mencionar la IA", "Borrar la demostración", "Mandar la regla básica por escrito"], answer: 3, why: "Ponerla por escrito hace que se quede." },
      { q: "Cuando las personas usan la IA en su trabajo, ¿quién sigue siendo responsable de ese trabajo?", options: ["La empresa de IA", "La herramienta de IA", "Las personas que hacen el trabajo", "Nadie"], answer: 2, why: "La responsabilidad sigue siendo de las personas." }
    ]
  }
};
