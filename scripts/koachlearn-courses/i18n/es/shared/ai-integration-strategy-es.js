"use strict";

// Koach Learn course (shared), Spanish translation of "Strategies for Integrating AI into Your Organization". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-integration-strategy-es",
  lang: "es",
  translationOf: "ai-integration-strategy",
  category: "Athletes",
  name: "Estrategias para integrar la IA en tu organización",
  skills: "Revisar si la organización está lista para la IA, Fijar metas ligadas a la misión, Escribir una política de uso de IA, Manejar el riesgo de la IA, Guiar a las personas en el cambio, Armar una hoja de ruta de 90 días",
  outcome: "escribir un plan de integración de IA de 90 días para una organización: una revisión de preparación, metas ligadas a su misión, una política de uso de IA de una página, una revisión de riesgos, un plan de capacitación y comunicación, y una hoja de ruta con responsables y fechas.",
  about: [
    "Usar una herramienta de IA es fácil. Llevar la IA a toda una organización, para que la gente la use bien, con seguridad y por las razones correctas, requiere un plan. Este curso te da ese plan, paso a paso.",
    "Es para atletas que construyen una marca o un negocio y los equipos, academias y ligas que los rodean, para dueños de pequeños negocios, y para líderes y juntas directivas de organizaciones sin fines de lucro. Algunos ejemplos: una academia de baloncesto juvenil, el negocio de entrenamiento y medios de un atleta profesional, un restaurante familiar y una organización comunitaria.",
    "Armarás un plan real de IA de 90 días para una organización a medida que avanzas. Cada lección dura unos cinco minutos y termina con una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Escribe un plan de integración de IA de 90 días para una organización real o de práctica (por ejemplo, el negocio de marca de un atleta, una academia deportiva, un pequeño negocio o una organización sin fines de lucro). Incluye una calificación de preparación, tres metas ligadas a la misión, una política de uso de IA de una página, una tabla de riesgos, un plan de capacitación y comunicación, y una hoja de ruta con un responsable y una fecha para cada paso.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Atletas que manejan un negocio de marca, y los entrenadores, directores de academias, agentes y personal que los rodean, además de líderes de pequeños negocios y organizaciones sin fines de lucro que deben decidir cómo usa la IA su organización.",
    startingPoint: "Conocen bien su equipo, su marca o su organización y puede que usen herramientas de IA en lo personal. Pocos han escrito una política, una tabla de riesgos o un plan de cambio, o han implementado una herramienta nueva para todo un grupo.",
    gap: "El personal y los jugadores ya usan la IA, a menudo sin reglas, y se pueden filtrar datos privados de salud, de contratos o de menores. Las personas necesitan un plan práctico de 90 días que ligue la IA a la misión, fije reglas claras, controle el riesgo y sume a la gente, para que la IA ayude en lugar de crear problemas legales, de privacidad o de confianza.",
    constraints: [
      "Nivel de lectura: palabras sencillas; los términos de planificación se explican la primera vez",
      "Aparatos: un teléfono o una computadora; un documento o una hoja de cálculo para el plan",
      "Tiempo: lecciones de 5 minutos, unos 60 minutos en total más el tiempo para escribir el plan",
      "Privacidad: los datos de salud y rendimiento de los atletas, la información de menores, los contratos y los registros de donantes están protegidos",
      "Sin consejos legales: los contratos, los patrocinios y las leyes de datos van a un abogado calificado"
    ],
    prerequisites: "Ninguno. \"IA en los negocios: estrategias y aplicaciones\" es un buen primer curso."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Para una organización real o de práctica", action: "calificar del 1 al 5 su preparación para la IA en liderazgo, personas, datos, procesos y reglas", standard: "con una oración de evidencia para cada calificación y una solución para las dos más bajas" },
    { id: "O2", condition: "Con la misión de la organización", action: "escribir tres metas SMART de IA que sirvan a la misión", standard: "cada una con un número y una fecha" },
    { id: "O3", condition: "Para las personas que usarán la IA", action: "escribir una política de uso de IA de una página", standard: "que cubra las herramientas aprobadas, lo que nunca entra, la revisión humana, el aviso de uso de IA y una persona de contacto" },
    { id: "O4", condition: "Para cada uso de IA planeado", action: "armar una tabla de riesgos usando Gobernar, Mapear, Medir y Gestionar", standard: "con la probabilidad, el impacto, un control y quién lo revisa para cada riesgo" },
    { id: "O5", condition: "Para el equipo que adoptará la IA", action: "escribir un plan de capacitación y comunicación", standard: "que diga por qué, qué y qué ganan ellos, y que nombre al menos un impulsor de la IA" },
    { id: "O6", condition: "Con tus metas, tu política, tus riesgos y tu capacitación", action: "crear una hoja de ruta de 90 días en tres fases", standard: "con un responsable y una fecha límite para cada paso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepararse para la IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Revisar si tu organización está lista para la IA",
          minutes: 5,
          goal: "Calificar en cinco áreas qué tan lista está una organización para la IA.",
          text: [
            "Antes de comprar herramientas, revisa la preparación. Muchos esfuerzos con IA fracasan no porque la herramienta sea mala, sino porque las personas, los datos o las reglas no estaban listos.",
            "Califica cinco áreas del 1 (no está lista) al 5 (está lista). Liderazgo: ¿los líderes lo apoyan y reservan tiempo para ello? Personas: ¿el personal, los jugadores o los voluntarios tienen habilidades digitales básicas? Datos: ¿tu información está ordenada y guardada de forma segura? Procesos: ¿tus tareas principales están por escrito? Reglas: ¿tienes reglas de privacidad y seguridad?",
            "Una calificación baja no es razón para detenerse. Te dice por dónde empezar. El negocio de un atleta con muy buenas habilidades en redes sociales pero registros desordenados podría empezar ordenando sus archivos antes de usar la IA con ellos."
          ],
          steps: ["Califica liderazgo, personas, datos, procesos y reglas del 1 al 5.", "Escribe una oración de evidencia para cada calificación.", "Encierra en un círculo las dos calificaciones más bajas.", "Anota una solución para cada calificación baja."],
          words: [["Preparación", "qué tan lista está una organización para empezar algo nuevo."], ["Datos", "la información que guarda una organización, como horarios, registros y archivos."]],
          slides: [
            { title: "Por qué revisar la preparación", bullets: ["Las herramientas casi nunca causan el fracaso", "Lo causan personas, datos o reglas sin preparar"] },
            { title: "Califica cinco áreas, del 1 al 5", bullets: ["Liderazgo y personas", "Datos y procesos", "Reglas de privacidad y seguridad"] },
            { title: "Lo bajo muestra por dónde empezar", bullets: ["Arregla lo básico primero", "Ejemplo: ordena los archivos antes de usar la IA con ellos"] }
          ],
          tryIt: "Elige una organización real o de práctica. Califica su preparación en las cinco áreas con una oración de evidencia cada una, y nombra la primera solución para las dos más bajas.",
          youCanNow: "calificar qué tan lista está una organización para la IA y encontrar por dónde empezar.",
          quickCheck: [
            { objective: "O1", q: "¿Qué pregunta revisa el área de preparación de \"procesos\"?", options: ["¿Los líderes apoyan la IA?", "¿Tus tareas principales están por escrito?", "¿Los datos se guardan de forma segura?", "¿Tienes reglas de privacidad?"], answer: 1, why: "El área de procesos pregunta si las tareas principales están por escrito." },
            { objective: "O1", q: "Tu academia deportiva saca 2 en datos y 5 en personas. ¿Qué haces?", options: ["Detener por completo el esfuerzo de IA", "Comprar de inmediato la herramienta de IA más avanzada", "Ignorar la calificación de datos", "Empezar por mejorar el área de datos, por ejemplo ordenando los registros"], answer: 3, why: "Las calificaciones bajas muestran por dónde empezar, no son una razón para detenerse." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fijar metas de IA ligadas a la misión",
          minutes: 5,
          goal: "Escribir tres metas de IA medibles que sirvan a la misión de la organización.",
          text: [
            "La IA debe servir a la misión, no al revés. Empieza por aquello para lo que existe la organización: formar a jóvenes atletas, hacer crecer una marca, servir comidas, vender buenos productos.",
            "Luego pregunta dónde podría ayudar la IA a esa misión: más tiempo con atletas o clientes, respuestas más rápidas a familias o clientes, mejor uso de los datos, costos más bajos. Convierte cada una en una meta medible: “Bajar el tiempo administrativo semanal de los entrenadores de 6 horas a 3 para marzo”.",
            "Usa la revisión SMART: específica, medible, alcanzable, relevante para la misión y con fecha límite. Tres metas bastan para 90 días."
          ],
          steps: ["Escribe la misión en una oración.", "Haz una lista de tres formas en que la IA podría apoyarla.", "Convierte cada una en una meta SMART con un número y una fecha."],
          words: [["Misión", "el propósito principal por el que existe una organización."], ["Meta SMART", "una meta específica, medible, alcanzable, relevante y con fecha límite (siglas en inglés)."]],
          slides: [
            { title: "La misión primero", bullets: ["La IA sirve a la misión", "No al revés"] },
            { title: "Dónde puede ayudar la IA", bullets: ["Más tiempo con atletas o clientes", "Respuestas más rápidas", "Costos más bajos, mejor uso de los datos"] },
            { title: "Metas SMART", bullets: ["Específica, medible, alcanzable", "Relevante para la misión, con fecha límite", "Tres metas para 90 días"] }
          ],
          tryIt: "Escribe la misión de la organización en una oración y tres metas SMART de IA que la apoyen.",
          youCanNow: "fijar metas de IA medibles que sirvan a la misión de una organización.",
          quickCheck: [
            { objective: "O2", q: "En SMART, ¿qué significa la \"R\"?", options: ["Relevante para la misión", "Rápida", "Repetida", "Requerida por la ley"], answer: 0, why: "Una meta SMART es relevante para la misión de la organización." },
            { objective: "O2", q: "La marca de un atleta quiere \"usar más la IA\". ¿Cómo la conviertes en una meta SMART?", options: ["\"Usar muchas herramientas de IA.\"", "\"Ser la mejor marca en internet.\"", "\"Responder los correos de fans y patrocinadores en 24 horas, en lugar de 3 días, para junio.\"", "\"Probar la IA algún día.\""], answer: 2, why: "Es específica, medible, está ligada a la misión y tiene una fecha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir una política de uso de IA de una página",
          minutes: 6,
          goal: "Escribir una política corta de uso de IA que diga qué está permitido, qué no y a quién preguntar.",
          text: [
            "Una política de uso de IA es un conjunto corto de reglas sobre cómo usa la IA la gente de la organización. Sin ella, la gente adivina, y alguien puede pegar información privada de jugadores, clientes o donantes en una herramienta gratuita.",
            "Mantenla en una página y cubre: las herramientas aprobadas; lo que nunca puede entrar en la IA (historias clínicas, números del Seguro Social y bancarios, contratos privados, información de niños, contraseñas); revisión humana antes de publicar o enviar cualquier cosa hecha con IA; honestidad sobre el uso de IA cuando importa; y a quién preguntar las dudas.",
            "Agrega reglas especiales para tu campo. Las organizaciones deportivas deben proteger los datos de salud y rendimiento de los atletas y la información de los menores. Las organizaciones sin fines de lucro deben proteger los registros de donantes y clientes. Busca asesoría legal sobre contratos, patrocinios y las leyes de datos que te apliquen."
          ],
          steps: ["Haz una lista de las herramientas de IA aprobadas.", "Haz una lista de la información que nunca debe entrar en la IA.", "Exige que una persona revise lo que produce la IA antes de enviarlo o publicarlo.", "Di cuándo se debe revelar el uso de IA.", "Nombra a una persona de contacto para las dudas.", "Fija una fecha para revisar la política."],
          words: [["Política", "una regla escrita que sigue todo el mundo en una organización."], ["Revisión humana", "una persona que revisa lo que produce la IA antes de usarlo."]],
          slides: [
            { title: "Por qué una política", bullets: ["La gente deja de adivinar", "Los datos privados no entran en herramientas gratuitas"] },
            { title: "Una página cubre", bullets: ["Herramientas aprobadas", "Lo que nunca entra en la IA", "Revisión humana y a quién preguntar"] },
            { title: "Reglas de cada campo", bullets: ["Deportes: datos de salud de atletas, menores", "Sin fines de lucro: registros de donantes y clientes", "Asesoría legal sobre contratos y leyes de datos"] }
          ],
          tryIt: "Escribe una política de uso de IA de una página para tu organización con las seis partes. Pide a un asistente de IA que busque lo que no esté claro y luego edítala tú.",
          youCanNow: "escribir una política corta de uso de IA que proteja a las personas y los datos.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué una organización necesita una política de uso de IA?", options: ["Para prohibir toda la tecnología", "Para que las herramientas de IA sean gratis", "Para reemplazar el manual del personal", "Para que la gente no adivine y pegue información privada en las herramientas de IA"], answer: 3, why: "Sin una política, la gente adivina, y se pueden filtrar datos privados de jugadores, clientes o donantes." },
            { objective: "O3", q: "Un entrenador quiere que la IA redacte un contrato de patrocinio. ¿Qué debe decir tu política?", options: ["Enviar de inmediato el borrador de la IA al patrocinador", "Pedir asesoría legal para los contratos; una persona revisa todo lo que haga la IA", "Los contratos no están cubiertos por ninguna regla", "Pegar el contrato privado completo en una herramienta de IA gratuita"], answer: 1, why: "Los contratos necesitan asesoría legal, y una persona revisa lo que produce la IA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararse para la IA",
        questions: [
          { objective: "O1", q: "¿Por qué revisar la preparación antes de comprar herramientas de IA?", options: ["Las herramientas siempre son malas", "Lo exige la ley", "Las personas, datos o reglas sin preparar causan la mayoría de los fracasos", "Para gastar más dinero"], answer: 2, why: "Los problemas suelen venir de la falta de preparación, no de las herramientas." },
          { objective: "O1", q: "Una academia tiene registros desordenados y dispersos. ¿Cuál es un primer paso inteligente?", options: ["Ordenar los archivos antes de usar la IA con ellos", "Meter todo en la IA tal como está", "Renunciar a la IA", "Comprar la herramienta más cara"], answer: 0, why: "Los datos ordenados hacen la IA útil y más segura." },
          { objective: "O2", q: "¿Cuál es una meta SMART?", options: ["“Usar más IA”", "“Ser modernos”", "“Probar cosas”", "“Bajar el tiempo administrativo semanal de los entrenadores de 6 horas a 3 para marzo”"], answer: 3, why: "Es específica, medible y tiene fecha límite." },
          { objective: "O3", q: "¿Qué debe decir una política de uso de IA sobre las historias clínicas de los atletas?", options: ["Que se pueden pegar en cualquier lado", "Que nunca deben entrar en herramientas de IA que no estén aprobadas para ellas", "Que se publiquen en internet", "Que se compartan con los patrocinadores"], answer: 1, why: "Los datos de salud son privados y deben protegerse." },
          { objective: "O3", q: "¿Quién debe revisar el contenido hecho con IA antes de publicarlo?", options: ["Nadie", "Una persona", "Solo la misma IA", "Un seguidor cualquiera"], answer: 1, why: "La revisión humana es una regla central de la política." }
        ]
      }
    },
    {
      name: "Capítulo 2: Poner en marcha la IA con seguridad",
      lessons: [
        {
          objectives: ["O4"],
          title: "Manejar el riesgo de la IA con un marco sencillo",
          minutes: 5,
          goal: "Armar una tabla de riesgos para un uso de IA y asignar un control a cada riesgo.",
          text: [
            "El Instituto Nacional de Estándares y Tecnología de EE. UU. (NIST) publica un Marco de Gestión de Riesgos de la IA gratuito y voluntario. Sus cuatro funciones centrales son Gobernar, Mapear, Medir y Gestionar. Puedes usarlas en lenguaje sencillo incluso en una organización pequeña.",
            "Gobernar: quién es responsable y cuáles son las reglas (tu política). Mapear: para cada uso de IA, qué podría salir mal y a quién podría dañar. Medir: cómo vas a notar los problemas, por ejemplo revisando respuestas al azar. Gestionar: qué haces con cada riesgo, como la revisión humana o no usar la IA para esa tarea.",
            "Riesgos comunes de la IA: datos equivocados, filtraciones de datos privados, trato injusto a las personas, problemas de derechos de autor y daño a la reputación. Escribe cada uno en una tabla de riesgos con qué tan probable es, qué tan grave sería y el control."
          ],
          steps: ["Haz una lista de cada uso de IA que planeas.", "Para cada uno, escribe qué podría salir mal y a quién podría dañar.", "Califica la probabilidad y el impacto: bajo, medio o alto.", "Agrega un control para cada riesgo.", "Nombra a quién revisa que el control funcione."],
          words: [["NIST", "el Instituto Nacional de Estándares y Tecnología de EE. UU., que publica normas técnicas y orientación."], ["Tabla de riesgos", "una lista de riesgos con qué tan probable y qué tan grave es cada uno, y qué vas a hacer al respecto."]],
          slides: [
            { title: "Marco de riesgos de IA del NIST: cuatro funciones", bullets: ["Gobernar: roles y reglas", "Mapear: qué podría salir mal", "Medir: cómo lo notas", "Gestionar: qué haces al respecto"] },
            { title: "Riesgos comunes de la IA", bullets: ["Datos equivocados y filtraciones", "Trato injusto a las personas", "Derechos de autor y reputación"] },
            { title: "Una tabla de riesgos sencilla", bullets: ["Riesgo, probabilidad, impacto", "Control y quién lo revisa"] }
          ],
          sources: [{ name: "NIST: Marco de Gestión de Riesgos de la IA", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Haz una tabla de riesgos para dos usos de IA de tu plan, con al menos tres riesgos cada uno, una calificación de probabilidad e impacto, un control y una persona que lo revisa.",
          youCanNow: "mapear los riesgos de la IA y asignar controles usando las cuatro funciones del NIST.",
          quickCheck: [
            { objective: "O4", q: "En el marco del NIST, ¿qué función trata de lo que haces con cada riesgo?", options: ["Gobernar", "Mapear", "Gestionar", "Medir"], answer: 2, why: "Gestionar es la acción que tomas con cada riesgo, como la revisión humana." },
            { objective: "O4", q: "La IA va a redactar avisos sobre lesiones para los padres. ¿Qué control sirve para el riesgo de datos equivocados?", options: ["Un preparador físico o un entrenador revisa cada aviso antes de enviarlo", "Enviarlos más rápido", "Agregar más herramientas de IA", "Dejar de contarles cualquier cosa a los padres"], answer: 0, why: "La revisión humana antes de enviar controla el riesgo de datos equivocados." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Guiar a las personas en el cambio",
          minutes: 5,
          goal: "Escribir un plan de capacitación y comunicación que ayude a la gente a adoptar la IA.",
          text: [
            "A la gente le preocupa la IA: ¿Me va a reemplazar? ¿Voy a quedar mal? ¿Está permitido? Ignorar esas preocupaciones frena todo. Atiéndelas abiertamente.",
            "Comunica el porqué (la misión y las metas), el qué (qué herramientas y qué reglas) y el qué gano yo (menos trabajo administrativo, más tiempo para entrenar, para los clientes o para la familia). Nombra impulsores de la IA: una o dos personas que aprenden primero y ayudan a las demás.",
            "Capacita en dosis pequeñas: una sesión práctica de 30 minutos por herramienta, una hoja de una página con buenos pedidos (prompts) y un lugar para hacer preguntas. Celebra los primeros logros en las reuniones del equipo."
          ],
          steps: ["Escribe un mensaje corto: por qué, qué y qué ganan ellos.", "Elige uno o dos impulsores de la IA.", "Planifica sesiones prácticas de capacitación de 30 minutos.", "Haz una hoja de una página con buenos pedidos.", "Comparte los primeros logros en las reuniones."],
          words: [["Gestión del cambio", "ayudar a las personas a pasar de la forma vieja de trabajar a una nueva."], ["Impulsor de la IA", "un miembro del equipo que aprende primero y ayuda a los demás."]],
          slides: [
            { title: "Atiende las preocupaciones", bullets: ["¿Me va a reemplazar?", "¿Voy a quedar mal?", "¿Está permitido?"] },
            { title: "Comunica con claridad", bullets: ["Por qué: misión y metas", "Qué: herramientas y reglas", "Qué ganan ellos"] },
            { title: "Capacita en dosis pequeñas", bullets: ["Sesiones prácticas de 30 minutos", "Hoja de pedidos e impulsores de la IA", "Celebra los primeros logros"] }
          ],
          tryIt: "Escribe un anuncio de cinco oraciones para tu equipo, jugadores, personal o voluntarios sobre el plan de IA, y un calendario de capacitación para el primer mes.",
          youCanNow: "planificar la capacitación y la comunicación que ayudan a la gente a adoptar la IA.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es una hoja de pedidos (prompts)?", options: ["Una lista de personal prohibido", "Una lista de una página con buenos pedidos que la gente puede copiar", "Un examen para calificar al personal", "Una forma secreta de saltarse la política"], answer: 1, why: "Una hoja de una página con buenos pedidos ayuda a la gente a empezar rápido." },
            { objective: "O5", q: "El personal está nervioso y evita la nueva herramienta de IA. ¿Qué haces?", options: ["Obligarlos a usarla sin capacitación", "Esperar a que la entiendan solos", "Quitar la herramienta sin avisar a nadie", "Hablar abiertamente de sus preocupaciones, hacer una sesión práctica corta y compartir los primeros logros"], answer: 3, why: "Hablar abiertamente, una capacitación práctica corta y los primeros logros ayudan a la gente a adoptar la IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Armar la hoja de ruta de 90 días",
          minutes: 5,
          goal: "Convertir las metas, la política, los riesgos y la capacitación en una hoja de ruta de 90 días con responsables y fechas.",
          text: [
            "Una hoja de ruta pone todo en orden con fechas. Divide los 90 días en tres fases de 30 días. Días 1-30: bases (política aprobada, archivos ordenados, impulsores capacitados). Días 31-60: pilotos (uno o dos usos pequeños de IA probados con medidas). Días 61-90: revisar y ampliar (decidir qué mantener, ampliar o detener).",
            "Cada paso necesita un responsable y una fecha límite. Un paso sin responsable casi nunca se hace.",
            "Planifica una revisión cada dos semanas y una evaluación el día 90 frente a tus metas SMART. Luego escribe el siguiente plan de 90 días. Las herramientas y reglas de la IA cambian rápido, así que revisa la política al menos cada seis meses."
          ],
          steps: ["Días 1-30: bases.", "Días 31-60: pilotos con medidas.", "Días 61-90: evaluar y luego ampliar o detener.", "Dale a cada paso un responsable y una fecha.", "Programa revisiones cada dos semanas y una evaluación el día 90."],
          words: [["Hoja de ruta", "un plan que muestra los pasos en orden con fechas."], ["Responsable", "la persona encargada de que un paso se haga."]],
          slides: [
            { title: "Tres fases de 30 días", bullets: ["1-30: bases", "31-60: pilotos", "61-90: evaluar y ampliar"] },
            { title: "Responsables y fechas", bullets: ["Cada paso tiene un responsable", "Cada paso tiene una fecha límite"] },
            { title: "Mantenlo vivo", bullets: ["Revisiones cada dos semanas", "Evaluación el día 90 frente a las metas", "Revisa la política cada seis meses"] }
          ],
          tryIt: "Tarea final: arma tu hoja de ruta de 90 días en una tabla con fase, paso, responsable y fecha, y adjunta tu calificación de preparación, metas, política, tabla de riesgos y plan de capacitación para completar tu plan de integración de IA.",
          youCanNow: "escribir un plan completo de 90 días para llevar la IA a una organización con seguridad.",
          quickCheck: [
            { objective: "O6", q: "¿Qué pasa en los días 61 a 90 de la hoja de ruta?", options: ["Revisar los pilotos y decidir qué mantener, ampliar o detener", "Escribir la declaración de misión", "Comprar todas las herramientas", "Capacitar a los primeros impulsores"], answer: 0, why: "La última fase revisa los pilotos y los amplía o los detiene." },
            { objective: "O6", q: "Tu hoja de ruta dice \"capacitar al personal\" sin nombre ni fecha. ¿Qué agregas?", options: ["Nada; va a pasar", "Una descripción más larga", "Un responsable y una fecha límite", "Una segunda hoja de ruta"], answer: 2, why: "Un paso sin responsable ni fecha casi nunca se hace." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Poner en marcha la IA con seguridad",
        questions: [
          { objective: "O4", q: "¿Cuáles son las cuatro funciones centrales del Marco de Gestión de Riesgos de la IA del NIST?", options: ["Comprar, Construir, Vender, Repetir", "Planear, Hacer, Verificar, Actuar", "Leer, Escribir, Probar, Entregar", "Gobernar, Mapear, Medir, Gestionar"], answer: 3, why: "El NIST nombra Gobernar, Mapear, Medir y Gestionar." },
          { objective: "O4", q: "¿La ley obliga a las organizaciones pequeñas a usar el Marco de Gestión de Riesgos de la IA del NIST?", options: ["No, el NIST dice que es voluntario", "Sí, con multas fuertes", "Solo a los atletas", "Solo en Kenia"], answer: 0, why: "El NIST lo describe como pensado para uso voluntario." },
          { objective: "O5", q: "A un entrenador le preocupa que la IA lo reemplace. ¿Cuál es la mejor respuesta?", options: ["Ignorarlo", "Decirle que deje de preguntar", "Explicar abiertamente cómo la IA libera tiempo para entrenar y qué no va a cambiar", "Esconder el plan"], answer: 2, why: "Atender las preocupaciones abiertamente acelera la adopción." },
          { objective: "O5", q: "¿Qué es un impulsor de la IA?", options: ["Una IA que gana partidos", "Un influencer pagado", "La herramienta más cara", "Un miembro del equipo que aprende primero y ayuda a los demás"], answer: 3, why: "Los impulsores difunden habilidades y confianza." },
          { objective: "O6", q: "Un paso de la hoja de ruta no tiene responsable. ¿Qué suele pasar?", options: ["Se termina antes", "Lo hace la IA", "No se hace", "No cambia nada"], answer: 2, why: "Los pasos necesitan un responsable para hacerse." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Estrategias para integrar la IA en tu organización",
    questions: [
      { objective: "O1", q: "La mayoría de los esfuerzos con IA fracasan porque:", options: ["Las herramientas nunca funcionan", "Las personas, los datos o las reglas no estaban listos", "La IA es ilegal", "Las computadoras son muy lentas"], answer: 1, why: "La falta de preparación causa la mayoría de los fracasos." },
      { objective: "O1", q: "¿Cuál es una de las cinco áreas de preparación?", options: ["Datos", "Colores del equipo", "Tamaño de la oficina", "Precio de las acciones"], answer: 0, why: "Liderazgo, personas, datos, procesos y reglas." },
      { objective: "O1", q: "Una calificación de preparación baja significa:", options: ["Detenerse para siempre", "Ignorarla", "Empezar arreglando esa área", "Comprar más herramientas"], answer: 2, why: "Lo bajo muestra por dónde empezar." },
      { objective: "O2", q: "Las metas de IA deben estar ligadas a:", options: ["La misión de la organización", "Lo que publica la competencia", "La moda más reciente", "Nada en particular"], answer: 0, why: "La IA sirve a la misión." },
      { objective: "O2", q: "SMART significa:", options: ["Sencilla, moderna, automática, rápida, técnica", "Inteligente, móvil, IA, robot, tecnología", "Ventas, marketing, administración, comercio, impuestos", "Específica, medible, alcanzable, relevante, con fecha límite"], answer: 3, why: "Esas son las cinco revisiones SMART." },
      { objective: "O2", q: "¿Cuántas metas sugiere el curso para 90 días?", options: ["Treinta", "Tres", "Cien", "Cero"], answer: 1, why: "Tres metas mantienen el plan enfocado." },
      { objective: "O3", q: "Una política de uso de IA es:", options: ["La clave de licencia de un programa", "Un conjunto corto de reglas sobre cómo la gente usa la IA", "Un seguro", "Una publicación de marketing"], answer: 1, why: "Le dice a la gente qué está permitido y qué no." },
      { objective: "O3", q: "¿Qué nunca debe entrar en una herramienta de IA no aprobada?", options: ["Un horario general de práctica", "La fecha de un evento público", "Una publicación de ejemplo", "La información de salud de un atleta menor de edad"], answer: 3, why: "Los datos de salud y la información de menores son muy privados." },
      { objective: "O3", q: "¿Dónde debe buscar una organización asesoría sobre contratos de patrocinio y leyes de datos?", options: ["Con un abogado calificado", "En un chat de IA cualquiera", "En un comentario de redes sociales", "Con un competidor"], answer: 0, why: "Las preguntas legales necesitan a un profesional." },
      { objective: "O4", q: "En términos del NIST, decidir quién es responsable y cuáles son las reglas es:", options: ["Mapear", "Medir", "Gobernar", "Gestionar"], answer: 2, why: "Gobernar cubre los roles y las reglas." },
      { objective: "O4", q: "Hacer la lista de lo que podría salir mal en cada uso de IA es:", options: ["Gobernar", "Gestionar", "Medir", "Mapear"], answer: 3, why: "Mapear identifica los riesgos y a quién podrían dañar." },
      { objective: "O4", q: "Revisar respuestas de la IA al azar cada semana es un ejemplo de:", options: ["Gobernar", "Mapear", "Medir", "Misión"], answer: 2, why: "Medir es cómo notas los problemas." },
      { objective: "O4", q: "Una tabla de riesgos incluye:", options: ["Solo el precio de la herramienta", "Riesgo, probabilidad, impacto, control y quién revisa", "Estadísticas de jugadores", "Nombres de usuario en redes sociales"], answer: 1, why: "Esas columnas hacen manejables los riesgos." },
      { objective: "O4", q: "¿Cuál es un riesgo común de la IA?", options: ["Trato injusto a las personas", "Demasiado tiempo libre", "Mejores respuestas", "Costos más bajos"], answer: 0, why: "La IA puede tratar injustamente a las personas si no se revisa." },
      { objective: "O5", q: "“Qué gano yo” en la comunicación del cambio significa:", options: ["Solo un bono de pago", "La ganancia del proveedor", "Cómo ayuda la IA a las personas a las que se les pide usarla", "Una cláusula legal"], answer: 2, why: "La gente adopta el cambio cuando ve el beneficio." },
      { objective: "O5", q: "Una buena forma de capacitar al personal en IA es:", options: ["Sesiones prácticas cortas y una hoja de buenos pedidos", "Una charla de tres días sin práctica", "Ninguna capacitación", "Un memorándum sin ejemplos"], answer: 0, why: "Las dosis pequeñas y prácticas funcionan mejor." },
      { objective: "O6", q: "Los días 1-30 de la hoja de ruta se enfocan en:", options: ["Ampliar a todas partes", "La evaluación final", "Despedir personal", "Las bases: política, archivos, impulsores"], answer: 3, why: "Las bases van primero." },
      { objective: "O6", q: "Los días 31-60 de la hoja de ruta se enfocan en:", options: ["Escribir la misión", "Pilotos pequeños con medidas", "Nada", "Comprar todas las herramientas"], answer: 1, why: "La fase del medio prueba usos de la IA." },
      { objective: "O6", q: "¿Cada cuánto debe haber revisiones durante los 90 días?", options: ["Una vez al año", "Cada dos semanas", "Nunca", "Cada hora"], answer: 1, why: "Las revisiones regulares mantienen el plan en marcha." },
      { objective: "O6", q: "¿Cada cuánto se debe revisar la política de IA?", options: ["Nunca", "Cada diez años", "Solo después de un escándalo", "Al menos cada seis meses"], answer: 3, why: "Las herramientas y reglas de la IA cambian rápido." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      3,
      4,
      7,
      9,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Preparación y metas",
        objective: "O2",
        notYet: "No hay calificación de preparación, o las metas no tienen número ni fecha.",
        meets: "Una calificación de preparación en cinco áreas y tres metas SMART ligadas a la misión.",
        exceeds: "Cada meta se relaciona con un área de preparación baja que va a mejorar o a rodear."
      },
      {
        name: "Política de uso de IA",
        objective: "O3",
        notYet: "Falta lo que nunca entra en la IA, o no hay revisión humana.",
        meets: "Una página con las herramientas aprobadas, lo que nunca entra, la revisión humana, el aviso de uso de IA y una persona de contacto.",
        exceeds: "Agrega reglas propias del campo, como los datos de salud de los atletas y los menores, y una fecha de revisión."
      },
      {
        name: "Tabla de riesgos",
        objective: "O4",
        notYet: "Hay riesgos en la lista sin controles.",
        meets: "Cada uso de IA tiene riesgos con probabilidad, impacto, un control y quién revisa.",
        exceeds: "Cubre datos equivocados, filtraciones de datos y trato injusto, y se relaciona con Gobernar, Mapear, Medir y Gestionar."
      },
      {
        name: "Capacitación y comunicación",
        objective: "O5",
        notYet: "No hay plan para informar ni capacitar a las personas.",
        meets: "Un mensaje con por qué, qué y qué ganan ellos, impulsores y sesiones cortas de capacitación.",
        exceeds: "Incluye una hoja de pedidos (prompts) y una forma de compartir los primeros logros."
      },
      {
        name: "Hoja de ruta de 90 días",
        objective: "O6",
        notYet: "Los pasos no tienen responsables ni fechas.",
        meets: "Tres fases de 30 días, cada paso con un responsable y una fecha, y revisiones cada dos semanas.",
        exceeds: "Incluye una evaluación el día 90 frente a las metas SMART y una fecha de revisión de la política."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Organizaciones que aprueban una política de uso de IA en un plazo de 30 días (encuesta de seguimiento)",
      "Organizaciones que alcanzan al menos una meta SMART para el día 90",
      "Organizaciones que no reportan incidentes con datos privados por el uso de IA durante los 90 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Una herramienta de documentos y hojas de cálculo (Google Docs y Sheets, o Word y Excel) para el plan",
      "Las páginas gratuitas del Marco de Gestión de Riesgos de la IA del NIST, opcionales para leer más",
      "Unos 60 minutos para las lecciones y las comprobaciones, más el tiempo para escribir el plan de 90 días"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; completa una calificación de preparación de ejemplo en una pantalla compartida.",
      "Usa ejemplos del mundo del grupo: la marca de un atleta, una academia deportiva, un pequeño negocio o una organización sin fines de lucro.",
      "Recuerda a las personas que los datos de salud de los atletas, la información de menores y los contratos necesitan cuidado extra, y que las preguntas legales van a un abogado.",
      "Pide a las personas que intercambien su política y su tabla de riesgos con un compañero para una revisión rápida.",
      "Califica el plan final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
