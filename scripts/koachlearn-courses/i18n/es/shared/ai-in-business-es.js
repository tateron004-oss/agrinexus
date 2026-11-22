"use strict";

// Koach Learn course (shared), Spanish translation of "AI in Business: Strategies and Applications". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-in-business-es",
  lang: "es",
  translationOf: "ai-in-business",
  category: "Small Business",
  name: "IA en los negocios: estrategias y aplicaciones",
  skills: "Detectar oportunidades para la IA, Elegir la herramienta de IA para cada tarea, Calificar valor y riesgo, Escribir una justificación de negocio de una página, Hacer una prueba piloto pequeña, Medir resultados",
  outcome: "encontrar el mejor lugar para usar la IA en un negocio u organización, calificarlo por valor y riesgo, escribir una justificación de negocio de una página, y hacer y medir una prueba piloto pequeña de dos semanas.",
  about: [
    "La IA ya es parte del trabajo diario de los negocios: redactar, atender clientes, programar citas, vender, llevar las cuentas y planificar. Lo difícil no es la herramienta. Es elegir el trabajo correcto para ella y demostrar que ayuda.",
    "Este curso es para dueños de pequeños negocios, líderes de organizaciones sin fines de lucro, gerentes, jóvenes emprendedores y cualquier persona que quiera llevar la IA a su lugar de trabajo de forma inteligente y segura. Algunos ejemplos: una peluquería, un banco de alimentos, un equipo de jardinería y una tienda manejada por estudiantes.",
    "Harás un mapa de en qué se va el tiempo en una organización, elegirás la mejor oportunidad para la IA, la justificarás y la probarás con un piloto pequeño. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Para una organización real o de práctica, escribe una justificación de negocio de una página para usar IA: la tarea, la herramienta de IA, el tiempo o dinero que esperas ahorrar, los riesgos y cómo los vas a controlar, y cómo se ve el éxito. Luego haz una prueba piloto de dos semanas (o una versión de práctica de un día), anota los números de antes y después, y escribe una recomendación de tres oraciones: ampliar, cambiar o detener.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios, gerentes y personal, y líderes de organizaciones sin fines de lucro y comunitarias que quieren usar la IA para ahorrar tiempo o atender mejor a sus clientes.",
    startingPoint: "Conocen bien su negocio u organización y puede que hayan probado un asistente de IA. Pocos han medido en qué se va el tiempo del personal, han pesado los riesgos de la IA o han probado una herramienta nueva de forma planificada.",
    gap: "Muchos dueños evitan la IA o la prueban al azar y se rinden. Las personas necesitan una forma sencilla y repetible de elegir la tarea correcta, pesar valor y riesgo, ganar apoyo con una justificación de negocio corta y demostrar resultados con un piloto pequeño, para que la IA ahorre tiempo real sin poner en riesgo los datos ni la confianza de los clientes.",
    constraints: [
      "Nivel de lectura: palabras sencillas de negocios; no hace falta formación técnica",
      "Aparatos: un teléfono o una computadora; una hoja de cálculo ayuda para la auditoría de tiempo",
      "Tiempo: lecciones de 5 minutos, más un piloto de dos semanas o una versión de práctica de un día",
      "Privacidad: nada de datos privados de clientes, empleados o donantes, contraseñas ni números bancarios en las herramientas de IA",
      "Ninguna decisión legal, médica o de impuestos se deja a la IA; una persona revisa y decide"
    ],
    prerequisites: "Ninguno. Quienes no hayan usado asistentes de IA pueden tomar primero un curso de introducción a la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista de tareas de negocio", action: "identificar cuáles hacen bien las herramientas de IA de hoy y cuáles necesitan que una persona revise o decida", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Para una organización real o de práctica", action: "hacer la lista de las tareas repetidas de una semana normal y calcular las horas que toma cada una", standard: "con las cinco tareas que más horas toman encerradas en un círculo" },
    { id: "O3", condition: "Con tus mejores candidatas para la IA", action: "calificar cada una por valor, esfuerzo y riesgo y elegir una para seguir primero", standard: "anotando cualquier dato privado que entre en juego" },
    { id: "O4", condition: "Para la tarea que elegiste", action: "escribir una justificación de negocio de una página para la IA", standard: "con las seis partes y números reales de tu auditoría de tiempo" },
    { id: "O5", condition: "Para un piloto pequeño de IA", action: "planificar y hacer el piloto con una línea de base, reglas claras y un registro diario", standard: "anotando los mismos números antes y después" },
    { id: "O6", condition: "Con tu línea de base y los números del piloto", action: "comparar los resultados y recomendar ampliar, cambiar o detener", standard: "contando el tiempo dedicado a corregir los errores de la IA, en tres oraciones" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar la oportunidad correcta para la IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lo que la IA hace bien hoy en los negocios",
          minutes: 5,
          goal: "Nombrar los tipos de trabajo de negocio que las herramientas de IA de hoy hacen bien y mal.",
          text: [
            "La mayor parte de la IA para negocios hoy es IA generativa: herramientas como ChatGPT, Microsoft Copilot y Google Gemini que escriben, resumen, ordenan y responden en lenguaje sencillo. Otra IA viene dentro de programas que quizá ya usas, como los filtros de correo, los pronósticos de ventas y las alertas de fraude.",
            "La IA es fuerte en primeros borradores (correos, publicaciones, propuestas), resúmenes (reuniones, documentos largos, reseñas), ordenar y etiquetar (preguntas de clientes, recibos), generar ideas y responder preguntas comunes a partir de tu propia información.",
            "La IA es débil en datos exactos que no le diste, decisiones finales sobre personas o dinero, cualquier cosa que requiera una licencia (consejo legal, médico o de impuestos) y situaciones donde un error cuesta caro y es difícil de detectar. En esos casos, una persona debe revisar o decidir."
          ],
          words: [["IA generativa", "IA que crea texto, imágenes u otro contenido a partir de un pedido."], ["Caso de uso", "un trabajo específico para el que se usa una herramienta."]],
          slides: [
            { title: "La IA es fuerte en", bullets: ["Primeros borradores y resúmenes", "Ordenar y etiquetar", "Generar ideas y responder preguntas comunes"] },
            { title: "La IA es débil en", bullets: ["Datos exactos que no le diste", "Decisiones finales sobre personas o dinero", "Consejo con licencia: legal, médico, de impuestos"] },
            { title: "Regla práctica", bullets: ["La IA redacta; las personas deciden", "Cuanto más caro el error, más revisión"] }
          ],
          tryIt: "Haz una lista de cinco tareas de un negocio u organización que conozcas. Marca cada una como “IA fuerte”, “IA con revisión” o “dejar a las personas”, con una razón.",
          youCanNow: "distinguir qué tareas de negocio hace bien la IA y cuáles necesitan a una persona.",
          quickCheck: [
            { objective: "O1", q: "¿En qué tarea es débil la IA de hoy?", options: ["Resumir una reunión larga", "Redactar una publicación para redes", "Dar el consejo final de impuestos para tu negocio", "Ordenar las preguntas de los clientes por tema"], answer: 2, why: "Todo lo que necesita una licencia, como un consejo de impuestos, necesita a una persona o a un profesional." },
            { objective: "O1", q: "Tu tienda recibe cientos de reseñas en línea. ¿Cómo podría ayudar primero la IA?", options: ["Resumirlas para encontrar las quejas más comunes", "Responder a los clientes enojados sin que nadie revise", "Decidir a qué empleados despedir según las reseñas", "Borrar las reseñas malas"], answer: 0, why: "Resumir muchas reseñas es una fortaleza de la IA, y una persona sigue decidiendo qué hacer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hacer un mapa de en qué se va el tiempo",
          minutes: 5,
          goal: "Hacer un mapa de las tareas repetidas de una organización y detectar las mejores candidatas para la IA.",
          text: [
            "Las mejores oportunidades para la IA se esconden en el trabajo repetido que consume tiempo. Repasa una semana normal y haz una lista de tareas por área o puesto: ventas, atención al cliente, marketing, administración, finanzas, operaciones.",
            "Para cada tarea, calcula cada cuánto ocurre y cuánto tarda. Una tarea que se hace 20 veces por semana durante 10 minutos suma más de tres horas a la semana. Ahí es donde la IA rinde.",
            "Busca patrones: responder las mismas preguntas, escribir correos parecidos, copiar información de un lugar a otro, resumir notas, armar horarios. Son candidatas clásicas para la IA o la automatización."
          ],
          steps: ["Haz una lista de las tareas de una semana normal, por puesto.", "Calcula cada cuánto ocurre y cuánto tarda cada una.", "Multiplica para obtener las horas por semana.", "Encierra en un círculo las cinco que más horas suman.", "Marca cuáles de ellas encajan con las fortalezas de la IA."],
          words: [["Tarea repetitiva", "trabajo que se hace igual una y otra vez."], ["Auditoría de tiempo", "una lista de tareas y cuánto tiempo toma cada una."]],
          slides: [
            { title: "Busca el trabajo repetido", bullets: ["Mismas preguntas, correos parecidos", "Copiar información de un lugar a otro", "Resúmenes y horarios"] },
            { title: "Haz las cuentas", bullets: ["Cada cuánto x cuánto tarda = horas por semana", "20 veces x 10 minutos = más de 3 horas"] },
            { title: "Elige candidatas", bullets: ["Las cinco que más horas suman", "Relaciónalas con las fortalezas de la IA"] }
          ],
          tryIt: "Haz una auditoría de tiempo para un puesto de una organización real o de práctica. Escribe al menos ocho tareas con sus horas por semana y encierra en un círculo las tres mejores candidatas para la IA.",
          youCanNow: "hacer un mapa del trabajo repetido de una organización y detectar las mejores candidatas para la IA.",
          quickCheck: [
            { objective: "O2", q: "Una tarea ocurre 12 veces por semana y toma 15 minutos cada vez. ¿Cuántas horas por semana son?", options: ["1 hora", "2 horas", "12 horas", "3 horas"], answer: 3, why: "12 veces 15 minutos son 180 minutos, que son 3 horas." },
            { objective: "O2", q: "Estás haciendo el mapa del tiempo en una organización sin fines de lucro. ¿Qué tarea miras primero para la IA?", options: ["Una votación de la junta que ocurre una vez al año", "Escribir cada semana el mismo correo de agradecimiento a los donantes", "Elegir a la nueva directora ejecutiva", "Firmar contratos"], answer: 1, why: "Las tareas de escritura repetidas y parecidas son donde más rinde la IA." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Calificar oportunidades por valor y riesgo",
          minutes: 5,
          goal: "Calificar ideas de IA por valor, esfuerzo y riesgo y elegir una para seguir.",
          text: [
            "No toda idea de IA vale la pena hacerla primero. Califica cada candidata del 1 al 5 en tres cosas. Valor: cuánto tiempo, dinero o satisfacción del cliente aporta. Esfuerzo: qué tan difícil es configurarla y aprenderla. Riesgo: qué pasa si la IA se equivoca, y si hay datos privados de por medio.",
            "Elige un logro rápido: mucho valor, poco esfuerzo, poco riesgo. Redactar respuestas a correos comunes de clientes, con una persona que las revisa, es un logro rápido clásico. Usar la IA para decidir a quién se contrata o a quién se le aprueba una ayuda es de alto riesgo y no es un primer proyecto.",
            "Revisa pronto los datos y la privacidad. Si la tarea usa información de clientes, empleados, donantes o de salud, averigua qué hace tu herramienta de IA con los datos y si hace falta una versión para empresas con más privacidad."
          ],
          steps: ["Haz una lista de tus tres mejores candidatas.", "Califica cada una del 1 al 5 en valor, esfuerzo y riesgo.", "Prefiere mucho valor, poco esfuerzo y poco riesgo.", "Anota si hay datos privados de por medio.", "Elige una para empezar."],
          words: [["Logro rápido", "un proyecto que da valor claro y rápido con poco esfuerzo y riesgo."], ["Riesgo", "la probabilidad y el costo de que algo salga mal."]],
          slides: [
            { title: "Califica del 1 al 5", bullets: ["Valor: tiempo, dinero, satisfacción del cliente", "Esfuerzo: configurar y aprender", "Riesgo: costo de los errores, datos privados"] },
            { title: "Empieza con un logro rápido", bullets: ["Mucho valor, poco esfuerzo, poco riesgo", "Ejemplo: la IA redacta respuestas, una persona revisa"] },
            { title: "No es un primer proyecto", bullets: ["Decisiones de contratación o aprobación", "Cualquier decisión de salud o de dinero"] }
          ],
          tryIt: "Califica tus tres mejores candidatas para la IA por valor, esfuerzo y riesgo en una tabla pequeña. Elige un logro rápido y escribe dos oraciones sobre por qué.",
          youCanNow: "calificar ideas de IA por valor, esfuerzo y riesgo y elegir un primer proyecto inteligente.",
          quickCheck: [
            { objective: "O3", q: "Cuando calificas una idea de IA, ¿qué significa \"esfuerzo\"?", options: ["Qué tan difícil es configurarla y aprenderla", "Cuánto dinero gana", "A cuántos clientes les gusta", "Qué tan privados son los datos"], answer: 0, why: "El esfuerzo es qué tan difícil es configurar y aprender la idea." },
            { objective: "O3", q: "Dos ideas tienen el mismo valor. Una usa expedientes de salud y la otra usa datos públicos de productos. ¿Cuál eliges primero?", options: ["La de los expedientes de salud, porque es más difícil", "Ninguna; la IA nunca es segura", "La de los datos de productos, porque tiene menos riesgo", "Las dos a la vez"], answer: 2, why: "Con el mismo valor, elige la idea de menor riesgo que no usa datos privados." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Encontrar la oportunidad correcta para la IA",
        questions: [
          { objective: "O1", q: "¿En qué tarea es más fuerte la IA generativa de hoy?", options: ["Decidir a quién contratar", "Dar consejos de impuestos", "Redactar la respuesta a un correo común de un cliente", "Firmar contratos"], answer: 2, why: "Los primeros borradores son una fortaleza central; las decisiones y los consejos con licencia necesitan personas." },
          { objective: "O2", q: "Una tarea ocurre 30 veces por semana y tarda 6 minutos. ¿Cuántas horas por semana son?", options: ["3 horas", "30 horas", "6 horas", "Media hora"], answer: 0, why: "30 x 6 minutos = 180 minutos = 3 horas." },
          { objective: "O3", q: "¿Qué es un logro rápido?", options: ["Alto riesgo, mucho esfuerzo", "Cualquier proyecto con IA en el nombre", "La herramienta más cara", "Mucho valor, poco esfuerzo, poco riesgo"], answer: 3, why: "Los logros rápidos demuestran valor pronto y con poco riesgo." },
          { objective: "O3", q: "¿Por qué usar la IA para aprobar o rechazar candidatos a un empleo es un mal primer proyecto?", options: ["Es demasiado fácil", "Es de alto riesgo: los errores dañan a personas y pueden ser injustos", "La IA no sabe leer", "No ahorra tiempo"], answer: 1, why: "Las decisiones sobre personas son de alto riesgo y necesitan un control humano cuidadoso." },
          { objective: "O3", q: "Una tarea usa datos de donantes o clientes. ¿Qué debes revisar pronto?", options: ["Los colores de la herramienta", "Qué hace la herramienta de IA con esos datos", "Nada", "Cuántos emojis usa"], answer: 1, why: "La privacidad se debe revisar antes de meter datos privados en una herramienta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Justificarlo y demostrarlo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escribir una justificación de negocio de una página para la IA",
          minutes: 5,
          goal: "Escribir una justificación de negocio de una página a la que un jefe, una junta o un socio puedan decir que sí.",
          text: [
            "Una justificación de negocio explica por qué vale la pena hacer un proyecto. Mantenla en una página para que la gente ocupada la lea.",
            "Incluye seis partes: el problema (en horas o dinero), la solución de IA propuesta y la herramienta, el beneficio esperado, el costo (suscripciones, tiempo de capacitación), los riesgos y cómo los vas a controlar, y cómo vas a medir el éxito.",
            "Usa números reales de tu auditoría de tiempo. “El personal dedica 4 horas por semana a responder las mismas 10 preguntas. Una biblioteca de respuestas redactadas con IA y revisadas por el personal podría bajarlo a 1.5 horas, con un ahorro de unas 10 horas al mes”. La IA te puede ayudar a redactar la página; tú pones los datos."
          ],
          steps: ["Problema: cuánto cuesta hoy en tiempo o dinero.", "Solución: la herramienta de IA y cómo se va a usar.", "Beneficio: el ahorro o la mejora esperados.", "Costo: dinero y tiempo de capacitación.", "Riesgos y controles: quién revisa el trabajo de la IA.", "Medida del éxito: el número que vas a seguir."],
          words: [["Justificación de negocio", "un documento corto que explica por qué vale la pena hacer un proyecto."], ["Control", "un paso que reduce el riesgo, como que una persona revise lo que produce la IA."]],
          slides: [
            { title: "Mantenla en una página", bullets: ["La gente ocupada lee documentos cortos", "Usa números reales"] },
            { title: "Seis partes", bullets: ["Problema, solución, beneficio", "Costo, riesgos y controles", "Medida del éxito"] },
            { title: "La IA redacta, tú pones los datos", bullets: ["Pega los números de tu auditoría", "Revisa cada cifra del borrador"] }
          ],
          tryIt: "Escribe una justificación de negocio de una página para el logro rápido que elegiste, con las seis partes. Puedes pedirle a la IA que mejore la redacción, pero revisa cada número.",
          youCanNow: "escribir una justificación de negocio corta y basada en números para un proyecto de IA.",
          quickCheck: [
            { objective: "O4", q: "¿Qué parte de una justificación de negocio dice quién revisa el trabajo de la IA?", options: ["El problema", "Los riesgos y controles", "El beneficio", "El costo"], answer: 1, why: "Los riesgos y controles dicen qué podría salir mal y quién revisa lo que produce la IA." },
            { objective: "O4", q: "Tu jefa pregunta por qué vale la pena el proyecto de IA. ¿Qué hace más fuerte tu justificación?", options: ["Un informe largo sin números", "Decir que la IA es el futuro", "Una lista de todas las herramientas de IA que encontraste", "Números reales de tu auditoría de tiempo que muestran las horas ahorradas"], answer: 3, why: "Los números reales de tu propia auditoría de tiempo muestran con claridad el beneficio esperado." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hacer una prueba piloto pequeña",
          minutes: 5,
          goal: "Planificar y hacer una prueba piloto de IA de dos semanas con reglas claras y una medida de antes y después.",
          text: [
            "Un piloto es una prueba pequeña y con tiempo limitado. Te deja aprender barato antes de gastar más. Dos semanas con una o dos personas muchas veces bastan.",
            "Mide antes de empezar. Anota los números actuales durante unos días: tiempo dedicado, cantidad de tareas, errores o quejas de clientes. Luego haz el piloto y anota los mismos números.",
            "Fija reglas claras: qué tareas usan IA, quién revisa lo que produce, qué información nunca debe entrar en la herramienta (datos privados de clientes, empleados o donantes, contraseñas, números bancarios) y qué hacer si la IA se equivoca."
          ],
          steps: ["Elige una o dos personas y un periodo de dos semanas.", "Anota los números de base durante unos días.", "Escribe reglas sencillas: tareas, quién revisa, qué nunca entra.", "Haz el piloto y lleva un registro diario corto.", "Anota los mismos números al final."],
          words: [["Piloto", "una prueba pequeña y con tiempo limitado de una idea nueva."], ["Línea de base", "los números antes de un cambio, que se usan para comparar después."]],
          slides: [
            { title: "Pequeño y con tiempo limitado", bullets: ["Dos semanas, una o dos personas", "Aprende barato antes de gastar más"] },
            { title: "Mide antes y después", bullets: ["Tiempo dedicado, tareas hechas", "Errores o quejas"] },
            { title: "Reglas del piloto", bullets: ["Qué tareas usan IA y quién revisa", "Nada de datos privados en la herramienta", "Qué hacer cuando la IA se equivoca"] }
          ],
          tryIt: "Escribe un plan de piloto para tu logro rápido: personas, fechas, números de base, reglas y el formato del registro diario. Si puedes, haz una versión de práctica de un día y anota los números.",
          youCanNow: "planificar y hacer un piloto pequeño de IA con reglas y números de antes y después.",
          quickCheck: [
            { objective: "O5", q: "¿Cuánto dura un piloto pequeño de IA típico en este curso?", options: ["Un año", "Seis meses", "Dos semanas", "Una hora"], answer: 2, why: "Dos semanas con una o dos personas suelen bastar para aprender a bajo costo." },
            { objective: "O5", q: "Vas a empezar un piloto mañana. ¿Qué debes hacer primero?", options: ["Anotar los números de la línea de base durante unos días", "Comprar el plan más caro", "Darle a la herramienta los datos de todos los clientes", "Decirle al personal que deje de revisar lo que produce la IA"], answer: 0, why: "Una línea de base te permite comparar el antes y el después." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir los resultados y decidir qué sigue",
          minutes: 5,
          goal: "Comparar los resultados del piloto con la línea de base y recomendar ampliar, cambiar o detener.",
          text: [
            "Al final del piloto, compara. ¿Bajó el tiempo? ¿La calidad se mantuvo o mejoró? ¿Lo notaron los clientes o el personal? Los números importan, pero también pregunta a quienes lo usaron qué ayudó y qué estorbó.",
            "Fíjate en los costos ocultos: el tiempo dedicado a corregir errores de la IA, la confusión del personal o los clientes a los que no les gustó el cambio. Una herramienta que ahorra 3 horas pero causa 2 horas de correcciones solo ahorra 1.",
            "Haz una recomendación clara. Amplía si funcionó. Cambia si funcionó en parte. Detén si no funcionó, y di qué aprendiste. Detener un piloto no es un fracaso; te salvó de un error más grande."
          ],
          steps: ["Pon lado a lado los números de base y los del piloto.", "Resta el tiempo dedicado a corregir errores de la IA.", "Hazles dos preguntas a quienes lo usaron: qué ayudó y qué estorbó.", "Recomienda ampliar, cambiar o detener, en tres oraciones."],
          words: [["Costo oculto", "un costo fácil de pasar por alto, como el tiempo dedicado a corregir errores."], ["Recomendación", "tu consejo sobre qué hacer después, con razones."]],
          slides: [
            { title: "Compara con honestidad", bullets: ["Tiempo, calidad, reacción de los clientes", "Pregunta a quienes lo usaron"] },
            { title: "Cuenta los costos ocultos", bullets: ["Tiempo corrigiendo errores de la IA", "Confusión o clientes descontentos"] },
            { title: "Decide", bullets: ["Ampliar, cambiar o detener", "Detener un piloto es una lección, no un fracaso"] }
          ],
          tryIt: "Tarea final: pon tus números de antes y después en una tabla (reales o de tu día de práctica), resta los costos ocultos y escribe una recomendación de tres oraciones para acompañar tu justificación de negocio de una página.",
          youCanNow: "encontrar, justificar, probar y evaluar un proyecto de IA en un negocio u organización.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué preguntarles a las personas que usaron la herramienta de IA qué les estorbó?", options: ["Para echarles la culpa", "Porque los números nunca sirven", "Para que el piloto dure más", "Para encontrar problemas que los números quizá no muestren"], answer: 3, why: "Los usuarios pueden nombrar costos y problemas ocultos que los números no ven." },
            { objective: "O6", q: "El piloto ahorró tiempo, pero los clientes se quejaron de las respuestas nuevas. ¿Qué recomiendas?", options: ["Ampliarlo a todos de inmediato", "Cambiarlo, por ejemplo agregando un paso de revisión del personal, y volver a probar", "Esconder las quejas", "Dejar de medir"], answer: 1, why: "Si funcionó en parte, cámbialo y vuelve a probar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Justificarlo y demostrarlo",
        questions: [
          { objective: "O4", q: "¿Qué va en una justificación de negocio para la IA?", options: ["Las contraseñas del personal", "Una lista de todas las herramientas de IA que existen", "Los teléfonos de los clientes", "Los riesgos y quién revisa el trabajo de la IA"], answer: 3, why: "Los riesgos y controles son una de las seis partes." },
          { objective: "O5", q: "¿Qué es una línea de base?", options: ["Los números antes de un cambio, que se usan para comparar", "Solo un término deportivo", "El precio de la IA", "El informe final"], answer: 0, why: "Comparas los resultados del piloto con la línea de base." },
          { objective: "O5", q: "¿Cuál es una buena regla para un piloto?", options: ["Dejar que la IA envíe todo sin revisar", "No medir", "Nunca poner datos privados de clientes en la herramienta de IA", "Hacerlo durante tres años primero"], answer: 2, why: "Mantener fuera los datos privados es una regla clave." },
          { objective: "O6", q: "La IA ahorró 3 horas, pero el personal dedicó 2 horas a corregir sus errores. ¿Cuál es el ahorro real?", options: ["5 horas", "3 horas", "No cuenta nada", "1 hora"], answer: 3, why: "Los costos ocultos se restan del ahorro." },
          { objective: "O6", q: "El piloto no ahorró tiempo. ¿Qué debes recomendar?", options: ["Ampliarlo a toda la empresa", "Esconder los resultados", "Detenerlo o cambiarlo, y anotar lo que aprendiste", "Comprar un plan más caro sin probarlo"], answer: 2, why: "Los resultados honestos guían el siguiente paso." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA en los negocios: estrategias y aplicaciones",
    questions: [
      { objective: "O1", q: "La IA generativa es una IA que:", options: ["Solo hace matemáticas", "Crea texto, imágenes u otro contenido a partir de un pedido", "Reemplaza a todos los trabajadores", "Solo funciona sin conexión"], answer: 1, why: "Genera contenido a partir de un pedido." },
      { objective: "O1", q: "¿Cuál es un buen uso de la IA en un pequeño negocio?", options: ["Resumir las reseñas de clientes para encontrar quejas comunes", "Decidir sola el sueldo de los empleados", "Dar consejo legal a los clientes", "Firmar cheques"], answer: 0, why: "Resumir es una fortaleza central de la IA." },
      { objective: "O1", q: "¿Quién debe tomar las decisiones finales sobre personas o dinero?", options: ["La IA", "Nadie", "Una persona", "El proveedor del programa"], answer: 2, why: "La IA redacta; las personas deciden." },
      { objective: "O2", q: "Una auditoría de tiempo es una lista de:", options: ["Tareas y cuánto tiempo toma cada una", "Cumpleaños de los empleados", "Solo precios de programas", "Seguidores en redes sociales"], answer: 0, why: "Muestra en qué se va el tiempo." },
      { objective: "O2", q: "¿Qué tarea es una candidata clásica para la IA?", options: ["Una inspección única de un edificio", "Dar la mano a un cliente nuevo", "Firmar un contrato de alquiler", "Escribir correos parecidos una y otra vez"], answer: 3, why: "Las tareas de escritura repetidas le quedan bien a la IA." },
      { objective: "O2", q: "15 tareas por semana de 20 minutos cada una suman:", options: ["5 horas", "15 horas", "20 horas", "35 minutos"], answer: 0, why: "15 x 20 = 300 minutos = 5 horas." },
      { objective: "O3", q: "Al calificar una idea de IA, “riesgo” significa:", options: ["El precio de la herramienta", "La probabilidad y el costo de que algo salga mal", "Qué tan divertida es", "A cuántas personas les gusta"], answer: 1, why: "El riesgo trata de los errores y su costo." },
      { objective: "O3", q: "¿Cuál es el mejor primer proyecto de IA?", options: ["La IA decide quién recibe servicios", "La IA elige a qué empleados despedir", "La IA da consejos médicos", "La IA redacta respuestas a correos comunes y una persona las revisa"], answer: 3, why: "Es de mucho valor, poco esfuerzo y poco riesgo." },
      { objective: "O3", q: "¿Por qué revisar qué hace una herramienta de IA con los datos?", options: ["Hay que proteger los datos privados de clientes o donantes", "Cambia la fuente", "No es importante", "Solo para empresas grandes"], answer: 0, why: "La privacidad importa en toda organización." },
      { objective: "O4", q: "Una justificación de negocio debe ser:", options: ["De cincuenta páginas", "Escrita sin números", "Corta, de una página más o menos, con números reales", "Secreta para quienes deciden"], answer: 2, why: "La gente ocupada lee documentos cortos y claros." },
      { objective: "O4", q: "¿Qué es un “control”?", options: ["Comprar más herramientas de IA", "Apagar la computadora", "Ignorar los errores", "Una persona que revisa lo que produce la IA antes de enviarlo"], answer: 3, why: "Los controles reducen el riesgo." },
      { objective: "O4", q: "La IA redacta tu justificación de negocio. Tu trabajo es:", options: ["Enviarla sin leerla", "Quitar todos los números", "Revisar cada número y cada dato", "Agregar ahorros falsos"], answer: 2, why: "Tú pones y revisas los datos." },
      { objective: "O5", q: "Un piloto es:", options: ["Un lanzamiento en toda la empresa", "Una prueba pequeña y con tiempo limitado", "Un tipo de modelo de IA", "Un contrato permanente"], answer: 1, why: "Los pilotos te dejan aprender barato." },
      { objective: "O5", q: "¿Cuándo debes anotar los números de base?", options: ["Antes de que empiece el piloto", "Solo cuando termine", "Nunca", "Un año después"], answer: 0, why: "Necesitas los números de antes para comparar." },
      { objective: "O5", q: "¿Qué NUNCA debe entrar en una herramienta de IA durante un piloto?", options: ["Una pregunta de ejemplo", "Un borrador de correo general", "Números bancarios y contraseñas de clientes", "Tu horario de atención"], answer: 2, why: "Los datos privados y financieros se quedan fuera." },
      { objective: "O5", q: "Un registro diario durante un piloto te ayuda a:", options: ["Recordar qué funcionó y qué salió mal", "Esconder problemas", "Evitar medir", "Saltarte la revisión"], answer: 0, why: "Las notas hacen precisa la revisión final." },
      { objective: "O6", q: "¿Cuál es un costo oculto?", options: ["El precio publicado de la herramienta", "La fecha de inicio del piloto", "La cantidad de usuarios", "El tiempo dedicado a corregir errores de la IA"], answer: 3, why: "Es fácil olvidar el tiempo de corregir errores." },
      { objective: "O6", q: "Además de los números, ¿qué debes recoger al final de un piloto?", options: ["Sus contraseñas", "Lo que dicen los usuarios que ayudó o estorbó", "Sus direcciones de casa", "Nada"], answer: 1, why: "Los comentarios de los usuarios explican los números." },
      { objective: "O6", q: "Un piloto funcionó en parte. Una recomendación sensata es:", options: ["Ampliarlo a todas partes de una vez", "Cambiarlo y volver a probar", "Esconderlo", "No volver a probar la IA nunca"], answer: 1, why: "Un éxito parcial significa ajustar y volver a probar." },
      { objective: "O6", q: "Detener un piloto que no funcionó es:", options: ["Siempre un fracaso", "Contra la ley", "Imposible", "Una lección útil que evitó un error más grande"], answer: 3, why: "Los pilotos existen para averiguar las cosas sin gastar mucho." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      2,
      4,
      5,
      7,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Tarea y herramienta",
        objective: "O3",
        notYet: "La tarea es de alto riesgo, como decidir contrataciones, o no se nombra ninguna herramienta.",
        meets: "Una tarea repetida y de menor riesgo y una herramienta de IA con nombre, anotando cualquier dato privado.",
        exceeds: "Muestra las calificaciones de valor, esfuerzo y riesgo que llevaron a esta elección."
      },
      {
        name: "Justificación de negocio",
        objective: "O4",
        notYet: "Faltan partes, o no hay números.",
        meets: "Una página con el problema, la solución, el beneficio, el costo, los riesgos y controles, y una medida del éxito.",
        exceeds: "Cada número viene de la auditoría de tiempo y es fácil de revisar."
      },
      {
        name: "Cálculo del tiempo ahorrado",
        objective: "O2",
        notYet: "El ahorro es una suposición sin auditoría de tiempo.",
        meets: "El ahorro se basa en cuántas veces ocurre la tarea y cuánto tarda.",
        exceeds: "También calcula el tiempo necesario para revisar el trabajo de la IA."
      },
      {
        name: "Piloto y línea de base",
        objective: "O5",
        notYet: "No hay línea de base, o el piloto no tuvo reglas.",
        meets: "Se anotaron los números de la línea de base y del final, con reglas sobre las tareas, quién revisa y qué nunca entra.",
        exceeds: "Un registro diario muestra qué funcionó y qué salió mal."
      },
      {
        name: "Recomendación",
        objective: "O6",
        notYet: "No hay una recomendación clara, o no toma en cuenta los números.",
        meets: "Tres oraciones que recomiendan ampliar, cambiar o detener, basadas en los números de antes y después.",
        exceeds: "Resta el tiempo dedicado a corregir errores de la IA e incluye lo que dijeron los usuarios."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Organizaciones que hacen un piloto en un plazo de 30 días (encuesta de seguimiento)",
      "Horas por semana ahorradas en la tarea del piloto, según lo que informe la organización",
      "Organizaciones que amplían, cambian o detienen su piloto según los resultados medidos"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini), o la herramienta que ya usa la organización",
      "Una hoja de cálculo (Google Sheets o Excel) para la auditoría de tiempo y los números del piloto",
      "Unos 60 minutos para las lecciones y las comprobaciones, más un piloto de dos semanas o una versión de práctica de un día"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; arma una auditoría de tiempo de ejemplo en una pantalla compartida.",
      "Pide a las personas que traigan la lista real de tareas de una semana de su propia organización.",
      "Antes de cualquier piloto, repasen las reglas para que ningún dato privado de clientes, empleados o donantes entre en las herramientas de IA.",
      "Invita a las personas a presentar su justificación de negocio de una página al grupo para recibir comentarios.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
