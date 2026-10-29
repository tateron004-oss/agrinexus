"use strict";

// Koach Learn course (Leadership Development), Spanish translation of leadership/lead-agentic-transformation.js. See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "lead-agentic-transformation-es",
  lang: "es",
  translationOf: "lead-agentic-transformation",
  category: "Leadership Development",
  name: "Liderazgo en la era de la IA agéntica 3: IA agéntica, automatización y cómo liderar la transformación",
  skills: "Elegir un proceso para automatizar, Fijar el nivel de autonomía de un agente, Medir la línea de base y el valor, Llevar un registro de riesgos, Guiar a las personas en el cambio, Escribir un plan piloto de 90 días",
  outcome: "elegir un proceso de trabajo que los agentes de IA podrían mejorar y escribir un plan piloto de 90 días para él, con el mapa del proceso, el nivel de autonomía y las aprobaciones del agente, la línea de base y las medidas de éxito, un registro de riesgos, un plan para las personas y la formación, y una regla para decidir si se amplía o no.",
  about: [
    "Este curso es para líderes que van a decidir si los agentes de IA entran a su organización y cómo: gerentes, directores, dueños y líderes de organizaciones sin fines de lucro y del sector público. Cierra la serie Liderazgo en la era de la IA agéntica.",
    "El Capítulo 1 trata del trabajo: encontrar un proceso que valga la pena automatizar, decidir cuánto puede hacer un agente por su cuenta y medir con honestidad el valor y el riesgo. El Capítulo 2 trata de las personas: guiar el cambio, montar una gobernanza sencilla y escribir un plan piloto de 90 días que podrías presentar a tu junta, al dueño o al equipo directivo.",
    "No hace falta programar. Vas a usar un asistente de IA gratuito para ayudarte a redactar, y tu propio criterio para decidir. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Escribe un plan piloto de 90 días, de dos páginas, para un agente de IA en tu organización. Incluye: el mapa del proceso (pasos actuales y tiempo), el trabajo del agente y su nivel de autonomía, cada punto de aprobación humana y la persona responsable, la línea de base y las medidas de éxito, un registro de riesgos con al menos cinco riesgos, un plan para las personas (a quién afecta, cómo vas a comunicar y capacitar) y una regla para decidir el día 90 si se sigue o no. Preséntalo en cinco minutos a un colega y anota sus dos preguntas más difíciles.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Líderes que van a decidir si los agentes de IA entran en su organización y cómo: gerentes, directores, dueños y líderes de organizaciones sin fines de lucro y del sector público que terminan la serie Liderazgo en la era de la IA agéntica.",
    startingPoint: "Pueden explicar la IA generativa y la agéntica, usan la IA en su propio trabajo de liderazgo y tienen una guía de uso de la IA para su equipo. No han planeado ni dirigido un piloto con un agente de IA.",
    gap: "Los proyectos de agentes suelen fallar porque los líderes automatizan el proceso equivocado, dan demasiada autonomía a los agentes, se saltan la línea de base u olvidan a las personas afectadas. Necesitan un plan piloto claro y honesto, con aprobaciones, medidas, riesgos, un plan para las personas y una regla para detenerse, antes de que algo se ponga en marcha.",
    constraints: [
      "No hace falta programar; palabras sencillas para líderes sin formación técnica",
      "Dispositivos: una computadora con un asistente de IA gratuito para redactar",
      "Las leyes y normas cambian según el sector y el lugar, así que hay que consultarlas con un asesor calificado",
      "Nada de datos personales ni confidenciales en las herramientas de IA mientras se redacta el plan",
      "Tiempo: lecciones cortas; el plan final lleva más tiempo"
    ],
    prerequisites: "Los cursos 1 y 2 de Liderazgo en la era de la IA agéntica."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con cinco procesos de tu área", action: "hacer el mapa de un proceso y calificarlo como primer candidato para un agente de IA", standard: "usando los cinco factores: volumen, pasos claros, entradas digitales, molestia y poco daño" },
    { id: "O2", condition: "Para el proceso de tu piloto", action: "elegir el nivel inicial de autonomía del agente, anotar cada punto de aprobación humana y nombrar al dueño del agente", standard: "con aprobación antes de que el agente gaste dinero o hable con clientes" },
    { id: "O3", condition: "Antes de que empiece el piloto", action: "fijar una línea de base, de tres a cinco medidas de éxito y un registro de riesgos", standard: "con medidas de calidad y al menos cinco riesgos, cada uno con una protección y un responsable" },
    { id: "O4", condition: "Con las personas a las que afecta tu piloto", action: "planear cómo vas a comunicarte con ellas, involucrarlas y capacitarlas", standard: "diciendo con honestidad qué va a cambiar y qué no, y cómo pueden expresar sus preocupaciones" },
    { id: "O5", condition: "Para tu equipo u organización", action: "montar una gobernanza ligera de la IA con un inventario, un dueño por agente y un grupo de revisión", standard: "con al menos tres filas en el inventario y alguien que pueda pausar cada agente" },
    { id: "O6", condition: "Con las partes anteriores", action: "escribir y presentar un plan piloto de 90 días en dos páginas con una regla para decidir si se sigue o no", standard: "con la regla escrita antes de que empiece el piloto y dos preguntas difíciles anotadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Los agentes en el trabajo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar un proceso que valga la pena automatizar",
          minutes: 6,
          goal: "Hacer el mapa de un proceso y calificar si es un buen primer candidato para un agente.",
          text: [
            "No empieces por la tecnología; empieza por el trabajo. Un buen primer proceso es frecuente, sigue pasos claros, usa información que ya está en digital, es molesto o lento para las personas y tiene errores que se pueden detectar antes de que causen daño. Ejemplos: clasificar las solicitudes que llegan, preparar informes semanales, agendar citas, primeros borradores de respuestas de rutina.",
            "Haz el mapa antes de automatizar. Escribe cada paso, quién lo hace, la herramienta que usa y el tiempo que toma. A menudo el mapa muestra desperdicios que puedes quitar sin nada de IA. Automatizar un proceso roto solo hace que se rompa más rápido.",
            "Califica cada candidato del 1 al 5 en: volumen, pasos claros, entradas digitales, molestia para el personal y poco daño si sale mal. Elige el total más alto para tu primer piloto, no la idea más emocionante. Evita primeros pilotos que tomen decisiones sobre personas, dinero o seguridad."
          ],
          steps: ["Haz una lista de cinco procesos candidatos.", "Haz el mapa de los dos mejores: pasos, quién, herramienta, tiempo.", "Quita primero los desperdicios obvios.", "Califica cada uno del 1 al 5 en volumen, pasos claros, entradas digitales, molestia y poco daño.", "Elige la calificación más alta que evite decisiones sobre personas, dinero o seguridad."],
          words: [["Mapa del proceso", "una imagen paso a paso de cómo se hace hoy un trabajo."], ["Piloto", "una prueba pequeña y con tiempo limitado antes de aplicar algo a mayor escala."]],
          slides: [
            { title: "Empieza por el trabajo", bullets: ["Frecuente, pasos claros, entradas digitales", "Lento o molesto para las personas", "Errores que se detectan antes de causar daño"] },
            { title: "Haz el mapa antes de automatizar", bullets: ["Pasos, quién, herramienta, tiempo", "Quita primero los desperdicios", "Proceso roto + IA = se rompe más rápido"] },
            { title: "Califica a los candidatos", bullets: ["Volumen, pasos claros, entradas digitales, molestia, poco daño", "Elige la mejor calificación, no la más emocionante", "Evita primero decisiones de personas, dinero, seguridad"] }
          ],
          tryIt: "Haz una lista de cinco procesos de tu área. Haz el mapa de los dos principales, califícalos con los cinco factores y elige tu proceso piloto.",
          youCanNow: "hacer el mapa de un proceso y elegir un primer candidato sensato para un agente de IA.",
          quickCheck: [
            { objective: "O1", q: "¿Qué muestra el mapa de un proceso?", options: ["Cada paso, quién lo hace, la herramienta que se usa y el tiempo que toma", "El plano de la oficina", "Solo el resultado final", "A qué personal reemplazar"], answer: 0, why: "Un mapa muestra cómo se hace el trabajo en realidad, y eso revela dónde podría ayudar un agente." },
            { objective: "O1", q: "Un proceso es poco frecuente, poco claro y dañino si sale mal. ¿Cómo lo calificarías como primer piloto?", options: ["Un buen primer piloto, porque es difícil", "Un mal primer candidato; elige un proceso frecuente, claro y de poco daño", "Automatizarlo por completo de una vez", "Calificarlo después, cuando el agente ya esté hecho"], answer: 1, why: "Los primeros pilotos deben ser frecuentes, claros y de poco daño si salen mal." }
          ]
        },
        {
          objectives: ["O2"],
          title: "¿Cuánto puede hacer el agente? Autonomía y aprobaciones",
          minutes: 5,
          goal: "Fijar el nivel de autonomía de un agente y nombrar las aprobaciones humanas.",
          text: [
            "Piensa en la autonomía por niveles. Nivel 1, sugerir: el agente redacta y una persona hace todo. Nivel 2, preparar: el agente prepara la acción (un formulario lleno, un correo listo) y una persona aprueba cada una. Nivel 3, actuar con revisiones: el agente actúa en los casos de rutina y le manda las excepciones a una persona, que además revisa una muestra. Nivel 4, actuar solo: raro, solo para tareas de poco daño que se pueden deshacer.",
            "Empieza los pilotos en el nivel 1 o 2. Sube solo cuando tus medidas muestren que el agente es confiable, y solo para los casos en los que lo demostró. Mantén la aprobación antes de todo lo que gaste dinero, hable con clientes o con el público, cambie registros o afecte los derechos de una persona.",
            "Nombra a una persona responsable del agente: alguien que se hace cargo de sus resultados, revisa su registro y puede apagarlo. Un agente sin dueño es la forma más común en que la automatización sale mal."
          ],
          words: [["Nivel de autonomía", "cuánto puede hacer un agente de IA sin que una persona lo apruebe."], ["Excepción", "un caso que no encaja en el patrón normal y necesita a una persona."], ["Dueño del agente", "la persona responsable que se hace cargo de los resultados de un agente y puede apagarlo."]],
          slides: [
            { title: "Cuatro niveles de autonomía", bullets: ["1 Sugerir: el agente redacta, las personas actúan", "2 Preparar: las personas aprueban cada acción", "3 Actuar con revisiones: excepciones a personas", "4 Actuar solo: raro, poco daño, se puede deshacer"] },
            { title: "Empieza bajo, gánate la confianza", bullets: ["Pilotos en el nivel 1 o 2", "Sube solo con pruebas"] },
            { title: "Siempre aprobar antes de", bullets: ["Gastar dinero", "Hablar con clientes o con el público", "Cambiar registros o afectar derechos"] },
            { title: "Cada agente tiene un dueño", bullets: ["Se hace cargo de los resultados, revisa los registros", "Puede apagarlo"] }
          ],
          tryIt: "Para tu proceso piloto, elige el nivel de autonomía inicial, haz una lista de cada paso donde una persona debe aprobar y nombra al dueño del agente.",
          youCanNow: "fijar el nivel de autonomía, los puntos de aprobación y el dueño de un agente.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace el dueño de un agente?", options: ["Escribe el código del agente", "Compra el software", "Responde por los resultados del agente, revisa sus registros y puede apagarlo", "Es quien más usa el agente"], answer: 2, why: "Cada agente necesita una persona con nombre que responda por él." },
            { objective: "O2", q: "El agente de tu piloto va a redactar respuestas a clientes. ¿Con qué nivel de autonomía empezarías?", options: ["Autonomía total, para ahorrar el máximo tiempo", "Actuar con revisiones, enviando solo las excepciones", "Ningún nivel; saltarse la decisión", "Nivel 1 o 2, para que una persona apruebe antes de que algo llegue a un cliente"], answer: 3, why: "Los pilotos suelen empezar bajo, y la aprobación va antes de que un agente hable con clientes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Medir el valor y el riesgo con honestidad",
          minutes: 6,
          goal: "Fijar una línea de base, medidas de éxito y un registro de riesgos para un piloto.",
          text: [
            "No puedes mostrar una mejora sin una línea de base: cómo funciona hoy el proceso. Mide el tiempo por tarea, el volumen, la tasa de errores, el tiempo de espera y la satisfacción del personal o de los clientes durante unas semanas antes del piloto.",
            "Elige de tres a cinco medidas de éxito, e incluye la calidad, no solo la rapidez: \"el tiempo por solicitud baja un 30 por ciento sin que aumenten los errores\". Cuenta los costos ocultos: el tiempo de revisión, el costo de las herramientas, la formación y el tiempo para corregir los errores del agente.",
            "Lleva un registro de riesgos: una tabla sencilla con cada riesgo, qué tan probable es, qué tan grave sería, la protección y el responsable. Riesgos típicos de los agentes: resultados equivocados, filtraciones de privacidad, inyección de prompt, demasiado acceso, resultados injustos, personal que confía de más en el agente y dependencia de un proveedor. El Marco de Gestión de Riesgos de IA del NIST, gratuito y organizado en Gobernar, Mapear, Medir y Gestionar, es una buena guía."
          ],
          steps: ["Mide la línea de base durante unas semanas.", "Elige de tres a cinco medidas, incluida la calidad.", "Cuenta los costos ocultos: revisión, herramientas, formación, correcciones.", "Anota al menos cinco riesgos en un registro.", "Dale a cada riesgo una protección y un responsable."],
          words: [["Línea de base", "cómo funciona un proceso antes de que lo cambies."], ["Registro de riesgos", "una tabla de riesgos con qué tan probables son, qué tan graves, la protección y el responsable."], ["Dependencia de un proveedor", "quedar atado a un solo proveedor porque cambiarse es difícil."]],
          slides: [
            { title: "Primero la línea de base", bullets: ["Tiempo por tarea, volumen, errores", "Tiempo de espera, satisfacción", "Mide durante unas semanas"] },
            { title: "Mide la calidad, no solo la rapidez", bullets: ["\"30% más rápido, sin más errores\"", "Cuenta revisión, herramientas, formación y correcciones"] },
            { title: "Registro de riesgos", bullets: ["Riesgo, probabilidad, impacto, protección, responsable", "Resultado equivocado, privacidad, inyección, acceso", "Injusticia, exceso de confianza, dependencia"] }
          ],
          sources: [{ name: "NIST: Marco de Gestión de Riesgos de IA (AI RMF)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Escribe las medidas de línea de base de tu proceso piloto, de tres a cinco medidas de éxito y un registro de riesgos con al menos cinco riesgos, cada uno con su protección y su responsable.",
          youCanNow: "fijar una línea de base, medidas de éxito honestas y un registro de riesgos para un piloto de IA.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un registro de riesgos?", options: ["Una lista de riesgos, cada uno con probabilidad, impacto, protección y responsable", "Una lista del personal que usa IA", "Una póliza de seguro", "El registro de ejecución del agente"], answer: 0, why: "Un registro de riesgos hace visible cada riesgo y le da una protección y un responsable." },
            { objective: "O3", q: "Tu única medida de éxito es \"más rápido\". ¿Qué añadirías?", options: ["Nada; la velocidad es lo que importa", "Una medida de calidad, como que no aumenten los errores", "Una medida de cuánto le gusta el proveedor al personal", "La calificación que el agente se pone a sí mismo"], answer: 1, why: "La velocidad sin calidad puede esconder errores y trabajo repetido." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Los agentes en el trabajo",
        questions: [
          { objective: "O1", q: "¿Cuál es el mejor primer proceso para un piloto con un agente de IA?", options: ["Decidir a quién ascender", "Aprobar pagos grandes", "Clasificar las solicitudes de rutina que llegan", "Manejar incidentes de seguridad"], answer: 2, why: "Un trabajo frecuente, claro y de poco daño es un primer piloto seguro." },
          { objective: "O1", q: "¿Por qué hacer el mapa de un proceso antes de automatizarlo?", options: ["El mapa a menudo muestra desperdicios, y automatizar un proceso roto hace que se rompa más rápido", "Lo exige la ley", "Los agentes no pueden funcionar sin un mapa", "Hace más largo el piloto"], answer: 0, why: "Primero arregla el proceso, luego automatiza." },
          { objective: "O2", q: "En el nivel de autonomía 2 (preparar), ¿quién aprueba cada acción?", options: ["Nadie", "El agente", "El proveedor", "Una persona"], answer: 3, why: "El nivel 2 prepara acciones para que las apruebe una persona." },
          { objective: "O3", q: "¿Qué es una línea de base?", options: ["El plan más barato", "Cómo funciona el proceso antes del cambio", "El nombre del agente", "El informe final"], answer: 1, why: "Sin una línea de base no puedes mostrar una mejora." },
          { objective: "O3", q: "¿Cuál es la mejor medida de éxito?", options: ["\"Se siente más rápido\"", "\"Al personal le gusta el logotipo\"", "\"El agente está ocupado\"", "\"El tiempo por solicitud baja un 30% sin más errores\""], answer: 3, why: "Mide la rapidez y la calidad frente a la línea de base." }
        ]
      }
    },
    {
      name: "Capítulo 2: Guiar a las personas y el plan",
      lessons: [
        {
          objectives: ["O4"],
          title: "Guiar a las personas en el cambio",
          minutes: 5,
          goal: "Planear cómo vas a comunicar, involucrar y capacitar a las personas afectadas.",
          text: [
            "La automatización cambia los puestos de trabajo, y la gente lo siente antes de que anuncies nada. Involucra desde el principio a quienes hacen hoy el trabajo: conocen las excepciones, los atajos y los riesgos reales. Deben ayudar a hacer el mapa del proceso y a probar el agente.",
            "Comunica pronto y con honestidad: por qué haces el piloto, qué va a cambiar y qué no, qué pasa con el tiempo ahorrado y cómo pueden plantear sus preocupaciones. Si todavía no lo sabes, dilo y di cuándo lo sabrás. El silencio se llena de rumores.",
            "Planea las nuevas habilidades: revisar el trabajo del agente, manejar las excepciones, detectar los errores de la IA y escribir buenas instrucciones. Reserva tiempo para la formación y reconoce a quienes encuentran problemas; detectar un error del agente es una aportación, no una deslealtad."
          ],
          steps: ["Haz una lista de a quién afecta y cómo.", "Invita a quienes hacen el trabajo a ayudar con el mapa y las pruebas.", "Diles por qué, qué cambia, qué no, y cómo plantear sus preocupaciones.", "Planea las nuevas habilidades y el tiempo de formación.", "Reconoce a quienes encuentran problemas."],
          words: [["Gestión del cambio", "planear cómo pasan las personas de la forma de trabajar anterior a la nueva."], ["Parte interesada", "cualquier persona afectada por un cambio o que puede influir en él."]],
          slides: [
            { title: "Involucra a quienes hacen el trabajo", bullets: ["Conocen las excepciones y los riesgos", "Ayudan con el mapa y las pruebas"] },
            { title: "Comunica pronto y con honestidad", bullets: ["Por qué, qué cambia, qué no", "Qué pasa con el tiempo ahorrado", "Di cuándo todavía no lo sabes"] },
            { title: "Desarrolla nuevas habilidades", bullets: ["Revisar el trabajo del agente y las excepciones", "Detectar errores de la IA", "Reconoce a quienes encuentran problemas"] }
          ],
          tryIt: "Haz una lista de las personas a las que afecta tu piloto. Escribe un primer mensaje corto para ellas que explique por qué, qué va a cambiar y qué no, y cómo plantear sus preocupaciones. Planea una sesión de formación.",
          youCanNow: "planear el lado humano de un cambio con IA: participación, comunicación honesta y formación.",
          quickCheck: [
            { objective: "O4", q: "¿De qué se trata la gestión del cambio?", options: ["De cambiar versiones de software", "De cambiar el presupuesto", "De llevar a las personas de la forma de trabajar anterior a la nueva", "De cambiar de gerentes"], answer: 2, why: "La gestión del cambio trata de personas, no solo de herramientas." },
            { objective: "O4", q: "El personal pregunta si el piloto afectará sus puestos y todavía no lo sabes. ¿Qué dices?", options: ["Prometes que nada va a cambiar", "No dices nada hasta el día 90", "Les dices que es confidencial", "Dices que todavía no lo sabes y cuándo lo sabrás"], answer: 3, why: "Las respuestas honestas, aunque sean \"todavía no\", generan confianza durante el cambio." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Una gobernanza de la IA sencilla que funcione",
          minutes: 5,
          goal: "Montar una gobernanza ligera: un inventario, un dueño por agente y un ritmo de revisión.",
          text: [
            "Gobernanza significa decidir quién puede hacer qué con la IA, y revisar que funcione. No tiene que ser pesada. Empieza con tres cosas.",
            "Un inventario: una lista de cada herramienta y agente de IA en uso, lo que hace, qué datos toca, su nivel de autonomía y su dueño. No puedes gobernar lo que no sabes que existe, y el personal a menudo empieza a usar herramientas por su cuenta.",
            "Un grupo pequeño de revisión (en una organización pequeña, dos o tres personas) que aprueba los agentes nuevos, revisa cada mes el registro de riesgos y los reportes de incidentes, y puede pausar cualquier agente. Pon por escrito cómo se reporta un problema con la IA y qué tan rápido respondes. Revisa con un asesor calificado las leyes o normas que apliquen a tu sector y tu lugar."
          ],
          steps: ["Arma un inventario de las herramientas y agentes de IA.", "Anota de cada uno el propósito, los datos, el nivel de autonomía y el dueño.", "Forma un grupo pequeño de revisión.", "Revisa cada mes los riesgos y los incidentes; permite pausar cualquier agente.", "Publica cómo reportar un problema con la IA."],
          words: [["Gobernanza", "las reglas y los papeles para decidir y revisar cómo se usa algo."], ["Inventario", "una lista completa de las herramientas y agentes de IA en uso."], ["Incidente", "un hecho en el que algo salió mal o casi sale mal."]],
          slides: [
            { title: "La gobernanza puede ser ligera", bullets: ["Quién puede hacer qué con la IA", "Y revisar que funcione"] },
            { title: "Empieza con un inventario", bullets: ["Cada herramienta y agente de IA", "Propósito, datos, nivel de autonomía, dueño"] },
            { title: "Un grupo pequeño de revisión", bullets: ["Aprueba los agentes nuevos", "Revisión mensual de riesgos e incidentes", "Puede pausar cualquier agente"] },
            { title: "Haz fácil reportar", bullets: ["Cómo reportar un problema con la IA", "Qué tan rápido respondes", "Revisa las normas del sector con un asesor"] }
          ],
          sources: [{ name: "NIST: Marco de Gestión de Riesgos de IA (función Gobernar)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Empieza un inventario de IA para tu equipo con al menos tres filas (herramienta, propósito, datos, nivel de autonomía, dueño). Di quiénes estarían en tu grupo de revisión.",
          youCanNow: "montar una gobernanza ligera de la IA con un inventario, dueños y un ritmo de revisión.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un inventario de IA?", options: ["Una lista de todas las herramientas y agentes de IA en uso, con sus dueños", "Una tienda que vende IA", "Un conteo de computadoras", "Una lista del personal capacitado en IA"], answer: 0, why: "No puedes gobernar lo que no has anotado." },
            { objective: "O5", q: "No sabes qué leyes se aplican a tu agente en tu sector. ¿Qué harías?", options: ["Preguntarle al asistente de IA y seguir lo que diga", "Consultar con un asesor calificado", "Suponer que ninguna ley se aplica a los pilotos", "Copiar el plan de otra empresa"], answer: 1, why: "Las leyes cambian según el sector y el lugar, así que un asesor calificado debe confirmarlas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escribir el plan piloto de 90 días",
          minutes: 6,
          goal: "Armar un plan piloto de 90 días con una regla para decidir si se sigue o no.",
          text: [
            "Junta tu trabajo en un plan de dos páginas. Días 1 a 30: línea de base, preparación, formación, agente en el nivel 1 o 2 con una parte pequeña del trabajo. Días 31 a 60: funcionamiento, revisión semanal del registro, corrección de problemas, seguimiento de las medidas. Días 61 a 90: comparar con la línea de base, entrevistar al personal y decidir.",
            "Escribe la regla de seguir o no seguir antes de empezar, para que decida el resultado y no el entusiasmo: \"Ampliar a todo el equipo si el tiempo por solicitud baja al menos un 25 por ciento, los errores no aumentan y no ocurre ningún incidente grave. Si no, detener o rediseñar.\" Incluye una regla de parada para los incidentes graves en cualquier momento.",
            "Usa un asistente de IA para convertir tus notas en un borrador limpio y luego edítalo tú. Preséntalo en cinco minutos: el problema, el proceso, el agente y sus límites, las medidas, los riesgos, el plan para las personas y la regla de decisión."
          ],
          steps: ["Días 1-30: línea de base, preparación, formación, inicio pequeño.", "Días 31-60: funcionamiento, revisión semanal del registro, correcciones, medidas.", "Días 61-90: comparar, entrevistar al personal, decidir.", "Escribe primero la regla de seguir o no seguir y la regla de parada.", "Redacta con IA, edita tú, presenta en cinco minutos."],
          words: [["Regla de seguir o no seguir", "una regla de decisión, escrita de antemano, para saber si se continúa."], ["Regla de parada", "una condición que pausa el piloto de inmediato, como un incidente grave."]],
          slides: [
            { title: "Tres etapas", bullets: ["Días 1-30: línea de base, preparación, inicio pequeño", "Días 31-60: funcionar, revisar, corregir", "Días 61-90: comparar, entrevistar, decidir"] },
            { title: "Decide primero la regla", bullets: ["Seguir si se cumplen las medidas y no hay incidente grave", "Si no, detener o rediseñar", "Regla de parada para incidentes graves"] },
            { title: "Presenta en cinco minutos", bullets: ["Problema, proceso, agente y límites", "Medidas, riesgos, plan para las personas", "La regla de decisión"] }
          ],
          tryIt: "Tarea final: escribe tu plan piloto de 90 días, de dos páginas, con el mapa del proceso, la autonomía y las aprobaciones, el dueño, la línea de base y las medidas, el registro de riesgos, el plan para las personas y la regla de seguir o no seguir. Preséntalo a un colega en cinco minutos y anota sus dos preguntas más difíciles.",
          youCanNow: "guiar un piloto con un agente de IA desde la idea hasta un plan con medidas claras, barreras de seguridad y una regla de decisión.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una regla para decidir si se sigue o no?", options: ["Una regla sobre cuándo el personal puede usar IA", "La hora a la que el agente empieza cada día", "Una regla escrita de antemano que decide si ampliar, cambiar o detener el piloto el día 90", "Una lista de herramientas prohibidas"], answer: 2, why: "Escribir la regla primero mantiene honesta la decisión del día 90." },
            { objective: "O6", q: "Un colega hace una pregunta difícil sobre tu plan que no puedes responder. ¿Qué haces?", options: ["La anotas y añades al plan la respuesta o un siguiente paso", "Cambias de tema", "Quitas esa parte del plan", "Dices que la IA se encargará"], answer: 0, why: "Las preguntas difíciles muestran dónde hay que mejorar el plan antes de empezar el piloto." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Guiar a las personas y el plan",
        questions: [
          { objective: "O4", q: "¿Quién debe ayudar a hacer el mapa del proceso y a probar el agente?", options: ["Solo el proveedor", "Solo los altos directivos", "Las personas que hoy hacen el trabajo", "Nadie"], answer: 2, why: "Conocen las excepciones y los riesgos reales." },
          { objective: "O4", q: "Todavía no sabes cómo afectará el piloto a los puestos de trabajo. ¿Qué debes decir?", options: ["Que todavía no lo sabes y cuándo lo sabrás", "Que nunca nada va a cambiar", "Nada hasta que termine", "Que todos van a perder su trabajo"], answer: 0, why: "La honestidad sobre la incertidumbre evita los rumores." },
          { objective: "O5", q: "¿Qué es un inventario de IA?", options: ["Una lista de compras", "Una lista de cada herramienta y agente de IA en uso, con sus dueños", "Una lista del personal", "Un presupuesto"], answer: 1, why: "No puedes gobernar lo que no sabes que existe." },
          { objective: "O6", q: "¿Cuándo se debe escribir la regla de seguir o no seguir?", options: ["Antes de que empiece el piloto", "Después de tener los resultados", "Nunca", "Solo si el piloto falla"], answer: 0, why: "Escribirla primero hace que decidan los resultados, no el entusiasmo." },
          { objective: "O6", q: "El día 40 ocurre un incidente grave de privacidad. ¿Qué debe decir el plan?", options: ["Seguir hasta el día 90", "Subir el nivel de autonomía", "Ocultarlo", "Pausar de inmediato según la regla de parada"], answer: 3, why: "La regla de parada aplica en cualquier momento." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Liderazgo en la era de la IA agéntica 3: IA agéntica, automatización y cómo liderar la transformación",
    questions: [
      { objective: "O1", q: "Un buen primer candidato para automatizar es:", options: ["Raro y complejo", "Frecuente, con pasos claros y poco daño si sale mal", "Sobre despedir personas", "Sobre pagos grandes"], answer: 1, why: "El trabajo sencillo, frecuente y de poco daño es un inicio seguro." },
      { objective: "O1", q: "Un mapa del proceso muestra:", options: ["Solo el organigrama", "Los planos de la oficina", "Cada paso, quién lo hace, la herramienta y el tiempo", "Los sueldos"], answer: 2, why: "Los mapas muestran cómo se hace hoy el trabajo." },
      { objective: "O1", q: "Automatizar un proceso roto:", options: ["Lo vuelve gratis", "Lo arregla automáticamente", "Hace que se rompa más rápido", "Quita todos los riesgos"], answer: 2, why: "Primero arregla el proceso." },
      { objective: "O1", q: "Los cinco factores de calificación incluyen:", options: ["Volumen, pasos claros, entradas digitales, molestia, poco daño", "Color, tamaño, marca", "Solo el costo", "La popularidad"], answer: 0, why: "Predicen un buen primer piloto." },
      { objective: "O2", q: "El nivel de autonomía 1 (sugerir) significa:", options: ["No se usa IA", "El agente actúa solo", "El agente aprueba a las personas", "El agente redacta; las personas hacen todo"], answer: 3, why: "Solo sugiere." },
      { objective: "O2", q: "¿Qué le manda a las personas el nivel 3 (actuar con revisiones)?", options: ["Nada", "Las excepciones, más una muestra para revisar", "Solo facturas", "Solo elogios"], answer: 1, why: "Los casos de rutina avanzan; las excepciones van a las personas." },
      { objective: "O2", q: "Los pilotos suelen empezar en:", options: ["El nivel más alto disponible", "El nivel 4", "Ningún nivel", "El nivel 1 o 2"], answer: 3, why: "Empieza bajo y gánate la confianza." },
      { objective: "O2", q: "Siempre debe haber aprobación antes de que un agente:", options: ["Cuente palabras", "Lea una página pública", "Gaste dinero o hable con clientes", "Dé formato a una tabla"], answer: 2, why: "Estas acciones tienen consecuencias reales." },
      { objective: "O2", q: "El dueño de un agente:", options: ["Se hace cargo de sus resultados, revisa los registros y puede apagarlo", "Es el proveedor de IA", "Es opcional", "Es el propio agente"], answer: 0, why: "Cada agente necesita una persona responsable." },
      { objective: "O3", q: "Las medidas de éxito deben incluir:", options: ["Solo la rapidez", "La calidad, no solo la rapidez", "Solo el costo", "Solo la opinión del personal"], answer: 1, why: "Más rápido pero peor no es éxito." },
      { objective: "O3", q: "¿Cuál es un costo oculto de un agente?", options: ["El tiempo para revisar y corregir su trabajo", "La renta de la oficina", "El café", "El estacionamiento"], answer: 0, why: "El tiempo de revisión y corrección se resta de los ahorros." },
      { objective: "O3", q: "Un registro de riesgos anota cada riesgo con:", options: ["Nada más", "Un chiste", "Solo el costo", "Probabilidad, impacto, protección y responsable"], answer: 3, why: "Eso hace manejables los riesgos." },
      { objective: "O3", q: "La dependencia de un proveedor significa:", options: ["Una oficina cerrada con llave", "Quedar atado a un solo proveedor porque cambiarse es difícil", "Una contraseña", "Un descuento"], answer: 1, why: "Es un riesgo estratégico que vale la pena anotar." },
      { objective: "O5", q: "Las cuatro funciones del NIST AI RMF son:", options: ["Comprar, Construir, Operar, Vender", "Planear, Hacer, Revisar, Actuar", "Gobernar, Mapear, Medir, Gestionar", "Contratar, Capacitar, Ascender, Jubilar"], answer: 2, why: "El NIST nombra esas cuatro." },
      { objective: "O4", q: "La gestión del cambio trata de:", options: ["Cambiar contraseñas", "Contar monedas", "Pasar a las personas de la forma de trabajar anterior a la nueva", "Comprar software"], answer: 2, why: "Es el lado humano del cambio." },
      { objective: "O4", q: "Una persona del personal encuentra un error del agente. Los líderes deben:", options: ["Reconocerlo como una aportación", "Tratarlo como una deslealtad", "Ignorarlo", "Ocultarlo"], answer: 0, why: "Encontrar problemas mantiene seguro el piloto." },
      { objective: "O5", q: "La gobernanza de la IA puede empezar con:", options: ["Nada", "Un manual de 200 páginas", "Prohibir todas las herramientas", "Un inventario, dueños y un grupo pequeño de revisión"], answer: 3, why: "Una gobernanza ligera basta para empezar." },
      { objective: "O5", q: "Con una buena gobernanza, ¿quién puede pausar un agente?", options: ["Nadie", "El grupo de revisión o el dueño", "Solo el proveedor", "Solo el agente"], answer: 1, why: "Siempre debe haber alguien que pueda detenerlo." },
      { objective: "O5", q: "Para las leyes que aplican a tu sector y tu lugar, debes:", options: ["Copiar las normas de otro país", "Pedirle a la IA que decida", "Suponer que no aplica ninguna", "Consultar a un asesor calificado"], answer: 3, why: "Las preguntas legales necesitan un consejo calificado." },
      { objective: "O6", q: "Los días 61 a 90 del piloto son para:", options: ["Comprar más herramientas", "Empezar la preparación", "Comparar con la línea de base, entrevistar al personal y decidir", "Saltarse la revisión"], answer: 2, why: "La última etapa produce la decisión." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      14,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Mapa del proceso",
        objective: "O1",
        notYet: "Faltan los pasos actuales o los tiempos.",
        meets: "Muestra los pasos actuales, quién los hace y el tiempo.",
        exceeds: "Anota el desperdicio encontrado al hacer el mapa y por qué este proceso calificó bien."
      },
      {
        name: "Autonomía y aprobaciones",
        objective: "O2",
        notYet: "No hay nivel de autonomía, puntos de aprobación ni persona responsable.",
        meets: "Indica el trabajo del agente, su nivel de autonomía, cada punto de aprobación humana y la persona responsable.",
        exceeds: "Explica por qué ese nivel encaja en un primer piloto."
      },
      {
        name: "Medidas y riesgos",
        objective: "O3",
        notYet: "No hay línea de base, o hay menos de cinco riesgos.",
        meets: "Línea de base y medidas de éxito, y un registro de riesgos con al menos cinco riesgos.",
        exceeds: "Cada riesgo tiene una protección y un responsable, y las medidas incluyen la calidad."
      },
      {
        name: "Plan para las personas",
        objective: "O4",
        notYet: "No dice a quién afecta ni cómo se le informará y capacitará.",
        meets: "Nombra a quiénes afecta y cómo vas a comunicar y capacitar.",
        exceeds: "Involucra al personal en el mapa y en las pruebas, y dice cómo expresar preocupaciones."
      },
      {
        name: "Regla para seguir o no",
        objective: "O6",
        notYet: "No hay regla, o no se puede medir.",
        meets: "Una regla clara para decidir el día 90 si se sigue o no, escrita antes del inicio.",
        exceeds: "Incluye una regla para detener el piloto ante incidentes graves."
      },
      {
        name: "Presentado y puesto a prueba",
        objective: "O6",
        notYet: "No se presentó, o las preguntas no se anotaron.",
        meets: "Presentado en cinco minutos, con las dos preguntas más difíciles del colega anotadas.",
        exceeds: "El plan se actualizó para responder esas preguntas."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Planes piloto presentados a una junta, al dueño o al equipo directivo en un plazo de 60 días (encuesta de seguimiento)",
      "Pilotos iniciados con una regla escrita para seguir o no y un dueño del agente con nombre (encuesta de seguimiento)",
      "Organizaciones con un inventario de IA y un grupo de revisión en marcha en un plazo de 90 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con un asistente de IA gratuito para redactar",
      "Una lista de procesos de tu área y acceso a las personas que los hacen",
      "Una plantilla de plan de dos páginas o un documento en blanco",
      "Unos 60 minutos para las lecciones y las comprobaciones, más tiempo para escribir y presentar el plan"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego pide a los líderes que califiquen procesos candidatos en grupos pequeños.",
      "Anima a los líderes a invitar al personal que hace el trabajo a ayudar con el mapa del proceso.",
      "Recuerda a los líderes que no pongan datos personales ni confidenciales en herramientas de IA mientras redactan, y que consulten las leyes con un asesor calificado.",
      "Organiza una sesión de presentaciones en la que los compañeros hagan las dos preguntas más difíciles.",
      "Califica el plan final con la rúbrica y comprueba que la regla para seguir o no se escribió antes de la fecha de inicio."
    ]
  }
};
