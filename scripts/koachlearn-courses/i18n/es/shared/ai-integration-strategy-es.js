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
  chapters: [
    {
      name: "Capítulo 1: Prepararse para la IA",
      lessons: [
        {
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
          youCanNow: "calificar qué tan lista está una organización para la IA y encontrar por dónde empezar."
        },
        {
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
          youCanNow: "fijar metas de IA medibles que sirvan a la misión de una organización."
        },
        {
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
          youCanNow: "escribir una política corta de uso de IA que proteja a las personas y los datos."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararse para la IA",
        questions: [
          { q: "¿Por qué revisar la preparación antes de comprar herramientas de IA?", options: ["Las herramientas siempre son malas", "Lo exige la ley", "Las personas, datos o reglas sin preparar causan la mayoría de los fracasos", "Para gastar más dinero"], answer: 2, why: "Los problemas suelen venir de la falta de preparación, no de las herramientas." },
          { q: "Una academia tiene registros desordenados y dispersos. ¿Cuál es un primer paso inteligente?", options: ["Ordenar los archivos antes de usar la IA con ellos", "Meter todo en la IA tal como está", "Renunciar a la IA", "Comprar la herramienta más cara"], answer: 0, why: "Los datos ordenados hacen la IA útil y más segura." },
          { q: "¿Cuál es una meta SMART?", options: ["“Usar más IA”", "“Ser modernos”", "“Probar cosas”", "“Bajar el tiempo administrativo semanal de los entrenadores de 6 horas a 3 para marzo”"], answer: 3, why: "Es específica, medible y tiene fecha límite." },
          { q: "¿Qué debe decir una política de uso de IA sobre las historias clínicas de los atletas?", options: ["Que se pueden pegar en cualquier lado", "Que nunca deben entrar en herramientas de IA que no estén aprobadas para ellas", "Que se publiquen en internet", "Que se compartan con los patrocinadores"], answer: 1, why: "Los datos de salud son privados y deben protegerse." },
          { q: "¿Quién debe revisar el contenido hecho con IA antes de publicarlo?", options: ["Nadie", "Una persona", "Solo la misma IA", "Un seguidor cualquiera"], answer: 1, why: "La revisión humana es una regla central de la política." }
        ]
      }
    },
    {
      name: "Capítulo 2: Poner en marcha la IA con seguridad",
      lessons: [
        {
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
          youCanNow: "mapear los riesgos de la IA y asignar controles usando las cuatro funciones del NIST."
        },
        {
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
          youCanNow: "planificar la capacitación y la comunicación que ayudan a la gente a adoptar la IA."
        },
        {
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
          youCanNow: "escribir un plan completo de 90 días para llevar la IA a una organización con seguridad."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Poner en marcha la IA con seguridad",
        questions: [
          { q: "¿Cuáles son las cuatro funciones centrales del Marco de Gestión de Riesgos de la IA del NIST?", options: ["Comprar, Construir, Vender, Repetir", "Planear, Hacer, Verificar, Actuar", "Leer, Escribir, Probar, Entregar", "Gobernar, Mapear, Medir, Gestionar"], answer: 3, why: "El NIST nombra Gobernar, Mapear, Medir y Gestionar." },
          { q: "¿La ley obliga a las organizaciones pequeñas a usar el Marco de Gestión de Riesgos de la IA del NIST?", options: ["No, el NIST dice que es voluntario", "Sí, con multas fuertes", "Solo a los atletas", "Solo en Kenia"], answer: 0, why: "El NIST lo describe como pensado para uso voluntario." },
          { q: "A un entrenador le preocupa que la IA lo reemplace. ¿Cuál es la mejor respuesta?", options: ["Ignorarlo", "Decirle que deje de preguntar", "Explicar abiertamente cómo la IA libera tiempo para entrenar y qué no va a cambiar", "Esconder el plan"], answer: 2, why: "Atender las preocupaciones abiertamente acelera la adopción." },
          { q: "¿Qué es un impulsor de la IA?", options: ["Una IA que gana partidos", "Un influencer pagado", "La herramienta más cara", "Un miembro del equipo que aprende primero y ayuda a los demás"], answer: 3, why: "Los impulsores difunden habilidades y confianza." },
          { q: "Un paso de la hoja de ruta no tiene responsable. ¿Qué suele pasar?", options: ["Se termina antes", "Lo hace la IA", "No se hace", "No cambia nada"], answer: 2, why: "Los pasos necesitan un responsable para hacerse." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Estrategias para integrar la IA en tu organización",
    questions: [
      { q: "La mayoría de los esfuerzos con IA fracasan porque:", options: ["Las herramientas nunca funcionan", "Las personas, los datos o las reglas no estaban listos", "La IA es ilegal", "Las computadoras son muy lentas"], answer: 1, why: "La falta de preparación causa la mayoría de los fracasos." },
      { q: "¿Cuál es una de las cinco áreas de preparación?", options: ["Datos", "Colores del equipo", "Tamaño de la oficina", "Precio de las acciones"], answer: 0, why: "Liderazgo, personas, datos, procesos y reglas." },
      { q: "Una calificación de preparación baja significa:", options: ["Detenerse para siempre", "Ignorarla", "Empezar arreglando esa área", "Comprar más herramientas"], answer: 2, why: "Lo bajo muestra por dónde empezar." },
      { q: "Las metas de IA deben estar ligadas a:", options: ["La misión de la organización", "Lo que publica la competencia", "La moda más reciente", "Nada en particular"], answer: 0, why: "La IA sirve a la misión." },
      { q: "SMART significa:", options: ["Sencilla, moderna, automática, rápida, técnica", "Inteligente, móvil, IA, robot, tecnología", "Ventas, marketing, administración, comercio, impuestos", "Específica, medible, alcanzable, relevante, con fecha límite"], answer: 3, why: "Esas son las cinco revisiones SMART." },
      { q: "¿Cuántas metas sugiere el curso para 90 días?", options: ["Treinta", "Tres", "Cien", "Cero"], answer: 1, why: "Tres metas mantienen el plan enfocado." },
      { q: "Una política de uso de IA es:", options: ["La clave de licencia de un programa", "Un conjunto corto de reglas sobre cómo la gente usa la IA", "Un seguro", "Una publicación de marketing"], answer: 1, why: "Le dice a la gente qué está permitido y qué no." },
      { q: "¿Qué nunca debe entrar en una herramienta de IA no aprobada?", options: ["Un horario general de práctica", "La fecha de un evento público", "Una publicación de ejemplo", "La información de salud de un atleta menor de edad"], answer: 3, why: "Los datos de salud y la información de menores son muy privados." },
      { q: "¿Dónde debe buscar una organización asesoría sobre contratos de patrocinio y leyes de datos?", options: ["Con un abogado calificado", "En un chat de IA cualquiera", "En un comentario de redes sociales", "Con un competidor"], answer: 0, why: "Las preguntas legales necesitan a un profesional." },
      { q: "En términos del NIST, decidir quién es responsable y cuáles son las reglas es:", options: ["Mapear", "Medir", "Gobernar", "Gestionar"], answer: 2, why: "Gobernar cubre los roles y las reglas." },
      { q: "Hacer la lista de lo que podría salir mal en cada uso de IA es:", options: ["Gobernar", "Gestionar", "Medir", "Mapear"], answer: 3, why: "Mapear identifica los riesgos y a quién podrían dañar." },
      { q: "Revisar respuestas de la IA al azar cada semana es un ejemplo de:", options: ["Gobernar", "Mapear", "Medir", "Misión"], answer: 2, why: "Medir es cómo notas los problemas." },
      { q: "Una tabla de riesgos incluye:", options: ["Solo el precio de la herramienta", "Riesgo, probabilidad, impacto, control y quién revisa", "Estadísticas de jugadores", "Nombres de usuario en redes sociales"], answer: 1, why: "Esas columnas hacen manejables los riesgos." },
      { q: "¿Cuál es un riesgo común de la IA?", options: ["Trato injusto a las personas", "Demasiado tiempo libre", "Mejores respuestas", "Costos más bajos"], answer: 0, why: "La IA puede tratar injustamente a las personas si no se revisa." },
      { q: "“Qué gano yo” en la comunicación del cambio significa:", options: ["Solo un bono de pago", "La ganancia del proveedor", "Cómo ayuda la IA a las personas a las que se les pide usarla", "Una cláusula legal"], answer: 2, why: "La gente adopta el cambio cuando ve el beneficio." },
      { q: "Una buena forma de capacitar al personal en IA es:", options: ["Sesiones prácticas cortas y una hoja de buenos pedidos", "Una charla de tres días sin práctica", "Ninguna capacitación", "Un memorándum sin ejemplos"], answer: 0, why: "Las dosis pequeñas y prácticas funcionan mejor." },
      { q: "Los días 1-30 de la hoja de ruta se enfocan en:", options: ["Ampliar a todas partes", "La evaluación final", "Despedir personal", "Las bases: política, archivos, impulsores"], answer: 3, why: "Las bases van primero." },
      { q: "Los días 31-60 de la hoja de ruta se enfocan en:", options: ["Escribir la misión", "Pilotos pequeños con medidas", "Nada", "Comprar todas las herramientas"], answer: 1, why: "La fase del medio prueba usos de la IA." },
      { q: "¿Cada cuánto debe haber revisiones durante los 90 días?", options: ["Una vez al año", "Cada dos semanas", "Nunca", "Cada hora"], answer: 1, why: "Las revisiones regulares mantienen el plan en marcha." },
      { q: "¿Cada cuánto se debe revisar la política de IA?", options: ["Nunca", "Cada diez años", "Solo después de un escándalo", "Al menos cada seis meses"], answer: 3, why: "Las herramientas y reglas de la IA cambian rápido." }
    ]
  }
};
