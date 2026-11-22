"use strict";

// Koach Learn course (Spanish translation of shared/community-health-worker.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "community-health-worker-es",
  lang: "es",
  translationOf: "community-health-worker",
  category: "Workforce Development",
  name: "Fundamentos del trabajo como agente comunitario de salud",
  skills: "Explicar el rol de agente comunitario de salud y el camino en tu estado, Escuchar y usar lenguaje sencillo, Preguntar por las necesidades con respeto, Encontrar y verificar recursos locales, Hacer una derivación y dar seguimiento, Cuidar la privacidad y los límites",
  outcome: "hacer una guía de recursos verificados para tu comunidad y usarla para planear una derivación respetuosa para un vecino inventado, como lo hace un agente comunitario de salud.",
  about: [
    "Los agentes comunitarios de salud (en inglés, community health workers o CHW) son personas de confianza de una comunidad que ayudan a sus vecinos a recibir atención médica y otras ayudas, como comida, vivienda, transporte y cobertura de salud. También se les llama promotor o promotora, trabajador de alcance comunitario, navegador entre pares o navegador de pacientes.",
    "Muchos CHW son contratados porque comparten el idioma, la cultura o la experiencia de vida de las personas a las que sirven, incluidas personas que estuvieron en prisión, veteranos e inmigrantes. Tu experiencia de vida cuenta.",
    "Este curso te prepara para la capacitación de CHW y para un trabajo de nivel inicial. No te certifica. Algunos estados certifican a los CHW y otros no, así que aprenderás dónde revisar el tuyo. Vas a practicar cómo escuchar, preguntar por las necesidades, encontrar y verificar ayuda local, hacer una derivación y cuidar la privacidad y los límites.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" y una comprobación rápida de dos preguntas. Al final haces una guía de recursos para tu propia comunidad y un plan de derivación para un vecino inventado."
  ],
  finalTask: "Haz una guía de recursos de una página para tu comunidad con al menos cinco recursos locales (comida, vivienda, atención médica, cobertura de salud y uno más), cada uno verificado en su propia página oficial, con la dirección, el teléfono y cómo solicitar. Luego escribe un plan de derivación para un vecino inventado (solo para practicar): su necesidad en sus propias palabras, el recurso que elegiste y por qué, lo que vas a decir, cómo lo vas a ayudar a conectarse y cuándo le vas a dar seguimiento.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que quieren ayudar a su propia comunidad y recibir un pago por hacerlo: personas que buscan trabajo, personas que regresan a casa después de estar en prisión, veteranos, inmigrantes, voluntarios de iglesias y organizaciones sin fines de lucro, y adultos jóvenes. Muchas ya ayudan a sus vecinos de manera informal.",
    startingPoint: "Buen trato con la gente y conocimiento de su zona. La mayoría no tiene formación formal en salud, no conoce el nombre del puesto de CHW ni las reglas de certificación, y no ha verificado recursos en páginas oficiales.",
    gap: "Las clínicas, los planes de salud, los departamentos de salud y las organizaciones sin fines de lucro contratan CHW para conectar a las personas con la atención y los servicios. Los participantes necesitan conocer el rol, saber escuchar y preguntar por las necesidades con respeto, encontrar y verificar recursos, derivar y dar seguimiento, y cuidar la privacidad y los límites.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 7.º grado)",
      "Dispositivos: un teléfono o una computadora de la biblioteca; todas las tareas se pueden hacer en papel",
      "La certificación de CHW cambia de un estado a otro; el curso remite a la página del estado y no indica horas ni cuotas",
      "Ningún consejo clínico ni sobre medicamentos; las preguntas de salud van a los profesionales clínicos",
      "La práctica usa personas inventadas; ningún nombre real ni dato privado"
    ],
    prerequisites: "Ninguno. \"Alfabetización en salud: entender tu atención médica\" es un buen complemento."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Usando fuentes nacionales sobre los CHW y la página oficial de tu estado", action: "describir lo que hace un agente comunitario de salud y los pasos para empezar en tu estado", standard: "nombrando al menos 3 roles de un CHW y si tu estado certifica a los CHW" },
    { id: "O2", condition: "En una conversación de práctica con un vecino inventado", action: "usar la escucha activa, el lenguaje sencillo y el método de \"repetir para confirmar\"", standard: "repitiendo lo que dijo y comprobando que entendió, sin palabras técnicas" },
    { id: "O3", condition: "Usando una lista corta de necesidades sociales", action: "preguntar a un vecino inventado por sus necesidades con su permiso y con respeto", standard: "pidiendo permiso primero y cubriendo comida, vivienda, transporte, servicios básicos y seguridad" },
    { id: "O4", condition: "Ante una necesidad como comida o una clínica", action: "encontrar un recurso local y verificarlo en su página oficial", standard: "con la dirección, el teléfono, el horario y cómo solicitar, confirmados en la página oficial" },
    { id: "O5", condition: "Ante una situación de derivación", action: "planear una derivación y un seguimiento cuidando la privacidad y los límites", standard: "con una fecha de seguimiento, el permiso para compartir y el paso correcto en una crisis" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El rol del CHW y cómo conectar con las personas",
      lessons: [
        {
          title: "Qué hacen los agentes comunitarios de salud y cómo empezar",
          objectives: ["O1"],
          minutes: 5,
          goal: "Describir el rol del CHW y encontrar las reglas de tu estado para los CHW.",
          text: [
            "La Asociación Americana de Salud Pública (APHA) dice que un agente comunitario de salud es un trabajador de salud pública de primera línea en quien la comunidad confía, o que la conoce bien. Los CHW conectan a las personas con servicios de salud y servicios sociales, y ayudan a que la atención se adapte a la cultura de cada persona.",
            "La Oficina de Estadísticas Laborales de EE. UU. (BLS) dice que los CHW hacen trabajo de alcance comunitario, como visitas a domicilio, ayudan a coordinar la atención, conectan a las personas con ayuda de transporte, vivienda y comida, y pueden hacer pruebas de salud básicas. El National C3 Council (un grupo nacional que define el trabajo de los CHW) enumera diez roles del CHW, entre ellos el alcance comunitario, la educación en salud, la coordinación de la atención y la orientación dentro del sistema, la defensa de derechos, y el acompañamiento y el apoyo social.",
            "Por lo general, lo mínimo es un diploma de preparatoria (high school), con capacitación en el trabajo. Algunos estados exigen certificación, que puede incluir un programa de capacitación aprobado. Revisa el departamento de salud, la junta de enfermería o el departamento de servicios humanos de tu estado.",
            "Este curso te prepara. No te certifica. Entre los empleadores hay clínicas comunitarias, hospitales, departamentos de salud, planes de salud y organizaciones sin fines de lucro."
          ],
          steps: ["Busca el nombre de tu estado junto con \"community health worker certification\".", "Abre el resultado del sitio del gobierno de tu estado.", "Anota si tu estado certifica a los CHW y qué exige.", "Mira dos anuncios de trabajo de CHW cerca de ti y haz una lista de las tareas."],
          words: [["Agente comunitario de salud (CHW)", "un miembro de confianza de la comunidad que ayuda a las personas a recibir atención médica y otros servicios."], ["Promotor o promotora", "un nombre común en español para un agente comunitario de salud."], ["Alcance comunitario", "ir a donde está la gente, como casas, eventos o iglesias, para compartir información y ofrecer ayuda."], ["Certificación", "un registro oficial de que cumpliste las reglas de capacitación y de examen de un estado o de un grupo."]],
          slides: [
            { title: "Un CHW es...", bullets: ["Un miembro de confianza de la comunidad", "Un puente hacia la atención médica y los servicios", "También llamado promotor, trabajador de alcance o navegador"] },
            { title: "Qué hacen los CHW", bullets: ["Alcance comunitario y visitas a domicilio", "Educación en salud con palabras sencillas", "Conectar con comida, vivienda, transporte y atención", "Defensa de derechos y apoyo"] },
            { title: "Cómo empezar", bullets: ["Por lo general, diploma de preparatoria y capacitación en el trabajo", "Algunos estados certifican a los CHW", "Revisa la página del departamento de salud de tu estado"] },
            { title: "Este curso te prepara", bullets: ["No te certifica", "Empleadores: clínicas, hospitales, planes de salud, organizaciones sin fines de lucro"] }
          ],
          sources: [
            { name: "APHA: Sección de Agentes Comunitarios de Salud", url: "https://www.apha.org/apha-communities/member-sections/community-health-workers" },
            { name: "Oficina de Estadísticas Laborales de EE. UU.: Agentes comunitarios de salud", url: "https://www.bls.gov/ooh/community-and-social-service/community-health-workers.htm" },
            { name: "National C3 Council: Roles y competencias del CHW", url: "https://www.c3council.org/roles-competencies" }
          ],
          tryIt: "Averigua si tu estado certifica a los agentes comunitarios de salud, usando la página oficial de tu estado. Luego busca un anuncio de trabajo de CHW cerca de ti. En papel, escribe la regla de tu estado, tres tareas del anuncio y una forma en que tu propia experiencia de vida encaja con el trabajo.",
          youCanNow: "describir lo que hace un agente comunitario de salud y encontrar las reglas de tu estado en una página oficial.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una parte principal del trabajo de un CHW?", options: ["Escribir recetas médicas", "Hacer cirugías", "Diagnosticar enfermedades", "Conectar a las personas con la atención médica y los servicios"], answer: 3, why: "Los CHW conectan a las personas con la atención y los servicios; los profesionales clínicos diagnostican y recetan." },
            { objective: "O1", q: "¿Todos los estados exigen la certificación de CHW?", options: ["Sí, igual en todas partes", "No; algunos sí, así que revisa la página de tu estado", "Solo para los médicos", "Solo en verano"], answer: 1, why: "La BLS dice que algunos estados exigen certificación; las reglas cambian de un estado a otro." }
          ]
        },
        {
          title: "Escuchar y hablar claro",
          objectives: ["O2"],
          minutes: 5,
          goal: "Usar la escucha activa, palabras sencillas y el método de repetir para confirmar en una conversación de práctica.",
          text: [
            "La gente cuenta más cuando se siente escuchada. La escucha activa es prestar toda tu atención, dejar que la persona termine y repetir lo que escuchaste: \"Entonces, llegar a la clínica es difícil porque el autobús no pasa temprano. ¿Lo entendí bien?\"",
            "Usa lenguaje sencillo. Di \"azúcar en la sangre\" en vez de \"glucosa\", y \"un papel que muestra dónde vives\" en vez de \"comprobante de domicilio\". Usa oraciones cortas y una idea a la vez. Ofrece un intérprete cuando alguien prefiera otro idioma.",
            "El método de repetir para confirmar (en inglés, teach-back) comprueba que explicaste con claridad. Pide a la persona que diga el plan con sus propias palabras: \"Para saber si lo expliqué bien, ¿me dices qué vas a llevar al banco de comida?\" Si no puede, lo que hay que mejorar es tu explicación, no su memoria.",
            "Respetar es no juzgar. Pregunta qué le importa a la persona y qué ha intentado ya. Ella es la experta en su propia vida."
          ],
          steps: ["Presta toda tu atención y deja que la persona termine.", "Repite lo que escuchaste y pregunta si lo entendiste bien.", "Explica el siguiente paso con palabras sencillas, una idea a la vez.", "Usa el método de repetir para confirmar: pídele que diga el plan con sus propias palabras."],
          words: [["Escucha activa", "escuchar con toda tu atención y repetir lo que escuchaste."], ["Lenguaje sencillo", "palabras y oraciones cortas y comunes, fáciles de entender."], ["Repetir para confirmar (teach-back)", "pedir a una persona que explique el plan con sus propias palabras para comprobar que lo explicaste con claridad."], ["Jerga", "palabras especiales que usa un grupo y que otras personas quizá no entiendan."]],
          slides: [
            { title: "Escucha activa", bullets: ["Toda tu atención, deja que termine", "Repite lo que escuchaste", "\"¿Lo entendí bien?\""] },
            { title: "Lenguaje sencillo", bullets: ["\"Azúcar en la sangre\", no \"glucosa\"", "Oraciones cortas, una idea a la vez", "Ofrece un intérprete"] },
            { title: "Repetir para confirmar", bullets: ["Pídele que diga el plan a su manera", "Si no queda claro, mejora tu explicación", "Te evalúa a ti, no a la persona"] }
          ],
          tryIt: "Haz un juego de roles con un amigo o un familiar, o escríbelo en papel. Tu vecino inventado dice: \"Sigo faltando a mis citas en la clínica porque entro temprano a trabajar y el autobús llega tarde.\" Escribe una oración para repetir lo que dijo, un siguiente paso en lenguaje sencillo y una pregunta para repetir y confirmar.",
          youCanNow: "escuchar de forma activa, explicar con palabras sencillas y comprobar que te entendieron con el método de repetir para confirmar.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es una pregunta para repetir y confirmar?", options: ["\"¿Entiendes?\"", "\"¿Alguna pregunta? ¿No? Muy bien.\"", "\"¿Me puedes decir con tus propias palabras qué vas a llevar?\"", "\"Ya entendiste, ¿verdad?\""], answer: 2, why: "Repetir para confirmar es pedir a la persona que diga el plan con sus propias palabras." },
            { objective: "O2", q: "¿Cuál es lenguaje sencillo?", options: ["\"Azúcar en la sangre\"", "\"Índice glucémico\"", "\"Hiperglucemia\"", "\"Tolerancia a la glucosa\""], answer: 0, why: "Las palabras comunes y cortas son las más fáciles de entender." }
          ]
        },
        {
          title: "Preguntar por las necesidades con respeto",
          objectives: ["O3"],
          minutes: 5,
          goal: "Preguntar a un vecino inventado por sus necesidades, con su permiso y usando una lista corta.",
          text: [
            "La salud depende de más que las visitas al médico. La comida, un lugar seguro para vivir, dinero para los servicios básicos (luz, agua, gas), el transporte y la seguridad afectan la salud. A esto se le suele llamar necesidades sociales.",
            "Muchas clínicas y programas usan un formulario corto de detección. Tu empleador te dará el suyo. Los temas de siempre son: comida, vivienda, servicios básicos, transporte y seguridad personal.",
            "Siempre pide permiso primero y explica por qué preguntas: \"A todas las personas les hago unas preguntas sobre cosas como comida y vivienda, para poder compartir ayuda que les sirva. Puedes saltarte cualquier pregunta.\" Deja que la persona elija qué compartir.",
            "Anota solo lo necesario, en el formulario del programa, no en tu propio teléfono. Si alguien dice que no está seguro en casa, o habla de hacerse daño, sigue de inmediato los pasos de seguridad de tu programa (mira la Lección 6)."
          ],
          steps: ["Pide permiso y di por qué preguntas.", "Di que puede saltarse cualquier pregunta.", "Pregunta por comida, vivienda, servicios básicos, transporte y seguridad.", "Pregunta qué necesidad le importa más ahora mismo.", "Anota solo lo necesario, en el formulario del programa."],
          words: [["Necesidades sociales", "necesidades de todos los días, como comida, vivienda y transporte, que afectan la salud."], ["Detección", "un grupo corto de preguntas para saber qué ayuda puede necesitar alguien."], ["Consentimiento", "el permiso que da una persona después de entender lo que le pides."]],
          slides: [
            { title: "La salud es más que la clínica", bullets: ["Comida y vivienda", "Servicios básicos y transporte", "Seguridad"] },
            { title: "Pide permiso primero", bullets: ["Di por qué preguntas", "Puede saltarse cualquier pregunta", "La persona elige qué compartir"] },
            { title: "Empieza por lo que más importa", bullets: ["\"¿Cuál de estas cosas te importa más ahora mismo?\"", "Anota solo lo necesario", "Usa el formulario del programa, no tu teléfono"] }
          ],
          tryIt: "Escribe un guion corto de detección (solo para practicar): tu oración para pedir permiso, una pregunta sencilla sobre cada tema (comida, vivienda, servicios básicos, transporte y seguridad) y una pregunta final sobre lo que más le importa. Léelo en voz alta para comprobar que suena amable y claro.",
          youCanNow: "preguntar por las necesidades de alguien con su permiso y con respeto, usando una lista corta.",
          quickCheck: [
            { objective: "O3", q: "¿Qué haces antes de preguntar por las necesidades de alguien?", options: ["Empezar con la pregunta más difícil", "Pedir permiso y decir por qué preguntas", "Pedirle su número de Seguro Social", "Anotar sus respuestas en tu propio teléfono"], answer: 1, why: "El permiso y una razón clara crean confianza antes de la detección." },
            { objective: "O3", q: "¿Cuál es una necesidad social?", options: ["Su programa de televisión favorito", "La marca de sus zapatos", "Llegar a la clínica cuando el autobús no pasa", "Su color favorito"], answer: 2, why: "El transporte es una necesidad social que afecta la salud." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El rol del CHW y cómo conectar con las personas",
        questions: [
          { objective: "O1", q: "¿Cuál es otro nombre para un agente comunitario de salud?", options: ["Promotor o promotora", "Cirujano", "Farmacéutico", "Juez"], answer: 0, why: "Promotor o promotora es un nombre común para los CHW, sobre todo en las comunidades de habla hispana." },
          { objective: "O1", q: "¿Dónde revisas si tu estado certifica a los CHW?", options: ["En un grupo de redes sociales", "En lo que adivina un amigo", "En la página del departamento de salud o de la junta de tu estado", "En un anuncio en internet"], answer: 2, why: "La página oficial de cada estado explica sus reglas." },
          { objective: "O2", q: "¿Qué es la escucha activa?", options: ["Hablar más que la otra persona", "Pensar tu respuesta mientras la otra persona habla", "Prestar toda tu atención y repetir lo que escuchaste", "Mirar tu teléfono mientras escuchas"], answer: 2, why: "La escucha activa es prestar toda tu atención y repetir lo que escuchaste." },
          { objective: "O2", q: "Un vecino no puede explicarte el plan con sus palabras. ¿Qué significa eso?", options: ["Que no se está esforzando", "Que tu explicación tiene que ser más clara", "Que no debería recibir ayuda", "Nada; sigue adelante"], answer: 1, why: "Repetir para confirmar evalúa tu explicación; explica otra vez con palabras más sencillas." },
          { objective: "O3", q: "Una persona no quiere contestar una pregunta sobre vivienda. Tú:", options: ["Insistes en que conteste", "Anotas lo que te imaginas", "Le dices que no puede recibir ayuda", "Lo respetas y sigues adelante"], answer: 3, why: "La persona puede saltarse cualquier pregunta; el consentimiento es voluntario." }
        ]
      }
    },
    {
      name: "Capítulo 2: Conectar a las personas con la ayuda",
      lessons: [
        {
          title: "Encontrar y verificar recursos locales",
          objectives: ["O4"],
          minutes: 6,
          goal: "Encontrar un recurso local para una necesidad y verificarlo en su página oficial.",
          text: [
            "La lista de recursos de un CHW vale lo que vale su última verificación. Los programas se mudan, cambian de horario y se quedan sin dinero. Verifica siempre un recurso en su propia página oficial o llamando por teléfono antes de enviar a alguien.",
            "Buenos lugares para empezar: llama al 211, un servicio gratis y confidencial que conecta a las personas con ayuda local. La página de beneficios de USA.gov (el portal del gobierno federal) ayuda a encontrar programas del gobierno para comida, vivienda, atención médica y facturas de servicios. Find a Health Center, de la HRSA (la agencia federal de recursos y servicios de salud), muestra los centros de salud comunitarios. HealthCare.gov explica la cobertura de salud y cómo solicitarla.",
            "Para cada recurso, anota: el nombre, lo que ofrece, quién lo puede usar, la dirección, el teléfono, el horario, cómo solicitar, qué llevar, los idiomas que atiende y la fecha en que lo verificaste.",
            "Si un sitio web no es el oficial, encuentra la página oficial antes de confiar en él. Muchos sitios falsos cobran por formularios que son gratis."
          ],
          steps: ["Nombra la necesidad, por ejemplo comida o una clínica.", "Busca en el 211, en USA.gov, en Find a Health Center de la HRSA o en el sitio propio de la agencia.", "Abre la página oficial y verifica la dirección, el teléfono, el horario y cómo solicitar.", "Anótalo con la fecha en que lo verificaste."],
          words: [["Recurso", "un programa o servicio que ayuda con una necesidad, como un banco de comida o una clínica."], ["211", "un servicio telefónico gratis y confidencial que conecta a las personas con ayuda local."], ["Centro de salud comunitario", "una clínica que atiende a las personas tengan o no tengan seguro médico."], ["Requisitos", "las reglas sobre quién puede usar un programa."]],
          slides: [
            { title: "Verifica antes de derivar", bullets: ["Los programas se mudan y cambian de horario", "Revisa la página oficial o llama", "Anota la fecha en que lo verificaste"] },
            { title: "Dónde empezar", bullets: ["Llama al 211", "Página de beneficios de USA.gov", "Find a Health Center de la HRSA", "HealthCare.gov para la cobertura de salud"] },
            { title: "Anota", bullets: ["Nombre, lo que ofrece, quién lo puede usar", "Dirección, teléfono, horario", "Cómo solicitar, qué llevar, idiomas"] },
            { title: "Cuidado con los sitios falsos", bullets: ["Encuentra primero la página oficial", "Muchos formularios son gratis; no les pagues a desconocidos"] }
          ],
          sources: [
            { name: "211: Encuentra tu 211 local", url: "https://www.211.org/" },
            { name: "USA.gov: Beneficios del gobierno", url: "https://www.usa.gov/benefits" },
            { name: "HRSA: Find a Health Center", url: "https://findahealthcenter.hrsa.gov/" },
            { name: "HealthCare.gov", url: "https://www.healthcare.gov/" }
          ],
          tryIt: "Elige dos necesidades: comida y una clínica de bajo costo. Encuentra un recurso real para cada una cerca de ti, verifícalo en su página oficial y anota el nombre, la dirección, el teléfono, el horario, cómo solicitar y la fecha de hoy.",
          youCanNow: "encontrar un recurso local y verificarlo en su página oficial antes de compartirlo.",
          quickCheck: [
            { objective: "O4", q: "Antes de enviar a alguien a un banco de comida, ¿qué haces?", options: ["Verifico su horario y su dirección en su página oficial o por teléfono", "Confío en una lista de hace tres años", "Adivino el horario", "Lo envío sin verificar"], answer: 0, why: "Los recursos cambian, así que revisa la página oficial o llama primero." },
            { objective: "O4", q: "¿Qué servicio conecta a las personas con ayuda local por teléfono?", options: ["El 411", "El 211", "El 311, solo en una ciudad", "Una línea cualquiera de un anuncio"], answer: 1, why: "El 211 es un servicio gratis y confidencial que conecta a las personas con ayuda local." }
          ]
        },
        {
          title: "Hacer una derivación y dar seguimiento",
          objectives: ["O5", "O4"],
          minutes: 5,
          goal: "Planear una derivación acompañada, con permiso y con una fecha de seguimiento.",
          text: [
            "Una derivación es conectar a una persona con un servicio. Una derivación \"acompañada\" (en inglés, warm referral) significa que tú ayudas a hacer la conexión, por ejemplo llamando juntos a la clínica, en vez de solo entregar un número de teléfono.",
            "Pregunta antes de compartir cualquier cosa sobre la persona: \"¿Está bien si le digo a la clínica que necesitas una cita por la tarde?\" Comparte solo lo necesario y sigue el formulario de consentimiento de tu programa.",
            "Ayuda a quitar obstáculos. ¿La persona tiene cómo llegar, quién le cuide a los niños, los papeles que necesita, un teléfono que funcione? Anota lo que va a llevar y cuándo va a ir.",
            "Da seguimiento. Fija una fecha para hablar: \"Te llamo el viernes para ver cómo te fue.\" Si el servicio no funcionó, busca otro. Anota el resultado en el registro del programa."
          ],
          steps: ["Pónganse de acuerdo sobre la necesidad y el servicio.", "Obtén el permiso antes de compartir cualquier información.", "Haz una conexión acompañada, como una llamada juntos.", "Planea cómo resolver los obstáculos: transporte, cuidado de los niños, papeles.", "Fija y cumple una fecha de seguimiento, y anota el resultado."],
          words: [["Derivación", "conectar a una persona con un servicio que la puede ayudar."], ["Derivación acompañada", "ayudar a la persona a conectarse directamente, como llamar juntos, no solo darle un número."], ["Obstáculo", "algo que hace difícil recibir ayuda, como no tener transporte o quién cuide a los niños."], ["Seguimiento", "volver a hablar más tarde para ver si la ayuda funcionó."]],
          slides: [
            { title: "Derivación acompañada", bullets: ["Ayuda a hacer la conexión", "Llamen juntos cuando se pueda", "No solo un número de teléfono"] },
            { title: "Primero, el permiso", bullets: ["Pregunta antes de compartir cualquier cosa", "Comparte solo lo necesario", "Usa el formulario de consentimiento del programa"] },
            { title: "Quita obstáculos", bullets: ["Transporte y cuidado de los niños", "Papeles que hay que llevar", "Un teléfono que funcione"] },
            { title: "Da seguimiento", bullets: ["Fija una fecha", "¿Funcionó? Si no, prueba otro", "Anota el resultado"] }
          ],
          tryIt: "Solo para practicar: tu vecina inventada, la señora Carter, necesita comida para sus dos hijos y no tiene carro. Usando un recurso de comida que verificaste en la Lección 4, escribe un plan de derivación acompañada: lo que vas a decir, la pregunta para pedir permiso, un obstáculo y cómo la vas a ayudar con él, y una fecha de seguimiento.",
          youCanNow: "planear una derivación acompañada con permiso, ayudar con los obstáculos y fijar una fecha de seguimiento.",
          quickCheck: [
            { objective: "O5", q: "¿Qué hace que una derivación sea \"acompañada\"?", options: ["Dar solo un número de teléfono", "Decirle que busque en internet", "Ayudarle a conectarse, como llamar juntos", "Mandarle un volante"], answer: 2, why: "Una derivación acompañada ayuda a la persona a conectarse directamente." },
            { objective: "O5", q: "Quieres contarle a una clínica la situación de un vecino. Primero tú:", options: ["Compartes todo lo que sabes", "Le pides permiso al vecino", "Lo publicas en un chat de grupo", "Se lo cuentas a la familia del vecino"], answer: 1, why: "El permiso va antes de compartir cualquier información." }
          ]
        },
        {
          title: "Privacidad, límites, pasos en una crisis y tu guía de recursos",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Cuidar la privacidad y los límites, seguir los pasos en una crisis y armar tu guía de recursos.",
          text: [
            "La gente te confía cosas privadas. Cuando trabajas para una clínica, un hospital o un plan de salud, la información de salud está protegida por una ley federal llamada HIPAA, y todo buen programa mantiene privada la información de las personas. No hables de las personas a las que sirves con tus amigos, no publiques nada sobre ellas y no guardes notas en tu propio teléfono.",
            "Los límites mantienen sano el trabajo. Tú eres un guía, no un médico, un abogado ni un banco. No des consejos médicos ni legales, no prestes dinero y no prometas lo que no puedes cumplir. Las preguntas de salud van a los profesionales clínicos.",
            "Conoce tus pasos en una crisis. Si alguien está en peligro ahora, llama al 911. Si alguien habla de suicidio o está en una crisis emocional, puede llamar o mandar un mensaje de texto al 988, la Línea de Prevención del Suicidio y Crisis (988 Suicide and Crisis Lifeline), o chatear en internet. Avísale de inmediato a tu supervisor y sigue el plan de seguridad de tu programa.",
            "Cuídate también a ti. Ayudar a personas con vidas difíciles es un trabajo pesado. Habla con tu supervisor, toma descansos y usa tu propio apoyo. Ahora estás listo para armar tu guía de recursos y tu plan de derivación."
          ],
          steps: ["Mantén la información privada: no hables, no publiques ni tomes notas en tu teléfono personal.", "Quédate en tu rol: sin consejos médicos ni legales, sin prestar dinero.", "Crisis: 911 si hay peligro ahora; 988 para suicidio o crisis emocional; avisa a tu supervisor.", "Arma tu guía de recursos con al menos cinco recursos verificados y un plan de derivación."],
          words: [["HIPAA", "una ley federal que protege la privacidad de la información de salud que tienen los proveedores de atención médica y los planes de salud."], ["Límite", "una frontera clara sobre lo que haces en una relación de trabajo."], ["988", "la Línea de Prevención del Suicidio y Crisis: llamada, mensaje de texto o chat."], ["Autocuidado", "lo que haces para mantenerte sano y poder seguir ayudando."]],
          slides: [
            { title: "Privacidad", bullets: ["No hables ni publiques sobre las personas a las que sirves", "Ninguna nota en tu propio teléfono", "HIPAA protege la información de salud"] },
            { title: "Límites", bullets: ["Eres un guía, no un médico ni un abogado", "No prestes dinero ni hagas grandes promesas", "Las preguntas de salud van a los profesionales clínicos"] },
            { title: "Pasos en una crisis", bullets: ["Peligro ahora: 911", "Suicidio o crisis emocional: llama o manda un texto al 988", "Avisa de inmediato a tu supervisor"] },
            { title: "Tu guía de recursos", bullets: ["5 o más recursos verificados", "Dirección, teléfono, horario, cómo solicitar, fecha de verificación", "Y un plan de derivación para un vecino inventado"] }
          ],
          sources: [
            { name: "988: Línea de Prevención del Suicidio y Crisis", url: "https://988lifeline.org/" },
            { name: "MedlinePlus: Derechos del paciente", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Tarea final: haz tu guía de recursos comunitarios de una página con al menos cinco recursos (comida, vivienda, atención médica, cobertura de salud y uno más), cada uno verificado en su página oficial, con dirección, teléfono, horario, cómo solicitar y la fecha de verificación. Luego escribe un plan de derivación para un vecino inventado: su necesidad en sus palabras, el recurso, lo que vas a decir, la pregunta para pedir permiso, un obstáculo y una fecha de seguimiento.",
          youCanNow: "armar una guía de recursos verificados y planear una derivación que cuide la privacidad, los límites y la seguridad.",
          quickCheck: [
            { objective: "O5", q: "Una persona a la que sirves dice que está pensando en quitarse la vida. ¿Qué haces?", options: ["Prometes guardar el secreto", "Cambias de tema", "Le dices que lo piense con calma mañana", "La conectas con el 988 (o el 911 si hay peligro ahora) y avisas a tu supervisor"], answer: 3, why: "Sigue los pasos en una crisis: 988 o 911, y avisa de inmediato a tu supervisor." },
            { objective: "O5", q: "Una persona te pide que le prestes $100. ¿Qué haces?", options: ["Le dices que no con amabilidad y la ayudas a encontrar un recurso para esa necesidad", "Se los prestas a escondidas", "Le das tu tarjeta", "La ignoras"], answer: 0, why: "Prestar dinero cruza un límite; mejor ayúdala a conectarse con un recurso." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Conectar a las personas con la ayuda",
        questions: [
          { objective: "O4", q: "¿Cuál es la mejor forma de verificar el horario de una clínica?", options: ["Un volante de hace tres años", "Adivinar", "La página oficial de la clínica o una llamada", "Un comentario cualquiera en internet"], answer: 2, why: "La página oficial o una llamada dan información actual." },
          { objective: "O4", q: "¿Qué herramienta encuentra centros de salud comunitarios?", options: ["Find a Health Center de la HRSA", "Una aplicación de películas", "Un sitio de compras", "Una aplicación del clima"], answer: 0, why: "Find a Health Center de la HRSA muestra los centros de salud comunitarios." },
          { objective: "O5", q: "¿Cuándo debes dar seguimiento después de una derivación?", options: ["Nunca", "Solo si la persona te llama", "En una fecha que fijaron juntos", "Después de un año"], answer: 2, why: "Fijar una fecha de seguimiento asegura que la ayuda funcionó." },
          { objective: "O5", q: "¿Dónde debes guardar las notas sobre las personas a las que sirves?", options: ["En tu teléfono personal", "En un chat de grupo", "En las redes sociales", "En el formulario o el registro del programa"], answer: 3, why: "Las notas van en el registro del programa para mantenerlas privadas." },
          { objective: "O5", q: "Alguien te pide un consejo médico sobre su medicamento. Tú:", options: ["Le dices lo que tú tomarías", "Le ayudas a preguntarle a su profesional clínico o a su farmacéutico", "Lo buscas y le dices qué hacer", "Le dices que los medicamentos no importan"], answer: 1, why: "Los CHW se quedan en su rol; las preguntas de salud van a los profesionales clínicos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos del trabajo como agente comunitario de salud",
    questions: [
      { objective: "O1", q: "La mejor descripción de un agente comunitario de salud es:", options: ["Un miembro de confianza de la comunidad que conecta a las personas con la atención y los servicios", "Un médico", "Un policía", "Un preparador de impuestos"], answer: 0, why: "Los CHW son trabajadores de primera línea, de confianza, que conectan a las personas con la atención." },
      { objective: "O1", q: "¿Cuál es uno de los roles del CHW que enumera el National C3 Council?", options: ["Hacer cirugías", "Hacer alcance comunitario", "Recetar medicamentos", "Dirigir un banco"], answer: 1, why: "El alcance comunitario es uno de los diez roles del CHW." },
      { objective: "O1", q: "¿Qué hace este curso?", options: ["Te certifica como CHW", "Te da una licencia del estado", "Reemplaza la capacitación de tu empleador", "Te prepara para la capacitación de CHW y para un trabajo de nivel inicial"], answer: 3, why: "El curso te prepara; algunos estados certifican a los CHW por separado." },
      { objective: "O1", q: "¿Por qué se contrata a muchos CHW?", options: ["Porque comparten el idioma, la cultura o la experiencia de vida de la comunidad", "Porque tienen títulos de medicina", "Porque nunca hablan con la gente", "Porque solo trabajan en internet"], answer: 0, why: "La experiencia compartida crea confianza con las personas a las que sirven los CHW." },
      { objective: "O2", q: "¿Cuál es una buena oración para repetir lo que escuchaste?", options: ["\"Debiste planearlo mejor.\"", "\"Entonces, el autobús llega tarde y por eso faltas a las citas. ¿Es así?\"", "\"Ese no es mi problema.\"", "\"A todo el mundo le pasa.\""], answer: 1, why: "Repetir lo que escuchaste muestra que pusiste atención y deja que la persona te corrija." },
      { objective: "O2", q: "El método de repetir para confirmar comprueba:", options: ["La inteligencia de la persona", "Qué tan rápido habla", "Si explicaste con claridad", "Su calificación en un examen de lectura"], answer: 2, why: "Repetir para confirmar evalúa tu explicación, no a la persona." },
      { objective: "O2", q: "Un vecino prefiere hablar en español y tú no lo hablas. Tú:", options: ["Hablas más fuerte en inglés", "Cancelas la visita", "Le pides a su hijo que interprete los detalles médicos", "Ofreces un intérprete calificado"], answer: 3, why: "Ofrecer un intérprete permite que la persona entienda y que la entiendan." },
      { objective: "O3", q: "¿Qué temas cubre por lo general una detección de necesidades sociales?", options: ["Comida, vivienda, servicios básicos, transporte y seguridad", "Comidas y música favoritas", "Deportes y pasatiempos", "Tallas de zapatos y de ropa"], answer: 0, why: "Estas necesidades sociales afectan la salud." },
      { objective: "O3", q: "¿Qué debes decir antes de una detección?", options: ["\"Tienes que contestar todo.\"", "Nada; solo empiezas", "\"A todas las personas les hago unas preguntas para poder compartir ayuda. Puedes saltarte cualquiera.\"", "\"Esto es un examen.\""], answer: 2, why: "Explicar por qué y decir que puede saltarse preguntas crea confianza y respeta el consentimiento." },
      { objective: "O3", q: "Después de las preguntas de detección, una buena siguiente pregunta es:", options: ["\"¿Cuál de estas cosas te importa más ahora mismo?\"", "\"¿Por qué no lo arreglaste antes?\"", "\"¿Cuál es el PIN de tu banco?\"", "\"¿A quién más se lo puedo contar?\""], answer: 0, why: "Empezar por lo que más le importa a la persona respeta sus decisiones." },
      { objective: "O4", q: "El 211 es:", options: ["Un número de emergencia solo para incendios", "Un servicio gratis y confidencial que conecta a las personas con ayuda local", "Una línea de pago", "Una aplicación de redes sociales"], answer: 1, why: "El 211 conecta a las personas con ayuda local." },
      { objective: "O4", q: "La página de beneficios de USA.gov ayuda a las personas a:", options: ["Comprar boletos para conciertos", "Pagar multas de estacionamiento", "Encontrar programas del gobierno para comida, vivienda, atención médica y facturas", "Reservar vuelos"], answer: 2, why: "Ayuda a encontrar beneficios del gobierno y cómo solicitarlos." },
      { objective: "O4", q: "¿Qué debe incluir la ficha de un recurso?", options: ["Solo el nombre", "Un horario adivinado", "El nombre de un amigo que fue allí", "Dirección, teléfono, horario, cómo solicitar y la fecha de verificación"], answer: 3, why: "Los datos completos y verificados hacen útil un recurso." },
      { objective: "O4", q: "Un sitio web cobra para \"ayudar\" con un formulario del gobierno. Tú:", options: ["Encuentras primero la página oficial; muchos formularios son gratis", "Pagas rápido", "Compartes el sitio con todo el mundo", "Le das los datos de la persona a la que ayudas"], answer: 0, why: "Los sitios falsos suelen cobrar por formularios gratis; encuentra la página oficial." },
      { objective: "O5", q: "Una derivación acompañada significa:", options: ["Entregar una tarjeta de presentación", "Ayudar a la persona a conectarse directamente, como llamar juntos", "Decirle que busque en internet", "Mandarle un volante por correo"], answer: 1, why: "Una derivación acompañada ayuda a hacer la conexión." },
      { objective: "O5", q: "Antes de compartir información con una clínica, necesitas:", options: ["El permiso de la persona", "La opinión de tu amigo", "Nada", "Una publicación en redes sociales"], answer: 0, why: "Primero va el permiso, y compartes solo lo necesario." },
      { objective: "O5", q: "¿Cuál es un obstáculo para recibir ayuda?", options: ["Un teléfono que funciona", "Transporte para llegar a la cita", "No tener quién cuide a los niños durante la cita", "Los papeles correctos"], answer: 2, why: "No tener quién cuide a los niños puede impedir que alguien llegue a un servicio." },
      { objective: "O5", q: "Alguien está en una crisis emocional y quiere hablar con alguien ahora. Puede:", options: ["Esperar a la visita del próximo mes", "Llamar o mandar un mensaje de texto al 988", "Publicarlo en internet", "Llamar al 411"], answer: 1, why: "El 988 es la Línea de Prevención del Suicidio y Crisis: llamada, mensaje de texto o chat." },
      { objective: "O5", q: "Una derivación no funcionó. Tú:", options: ["Te das por vencido", "Culpas a la persona", "Dejas de dar seguimiento", "Buscas otro recurso y fijas un nuevo seguimiento"], answer: 3, why: "Dar seguimiento significa probar otra opción cuando la primera no funcionó." },
      { objective: "O5", q: "¿Cuál es un límite sano para un CHW?", options: ["Dar consejos médicos", "Prestar dinero", "Prometer vivienda para el viernes", "Enviar las preguntas de salud al profesional clínico de la persona"], answer: 3, why: "Los CHW se quedan en su rol y conectan a las personas con los profesionales clínicos para las preguntas de salud." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 4, 5, 7, 8, 10, 12, 14, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, corrige esa parte y revísala otra vez.",
    criteria: [
      { name: "Recursos verificados", objective: "O4", notYet: "Menos de cinco recursos, o datos no verificados en páginas oficiales.", meets: "Al menos cinco recursos (comida, vivienda, atención médica, cobertura y uno más), cada uno con dirección, teléfono, horario, cómo solicitar y la fecha de verificación.", exceeds: "También indica quién puede usar cada uno, qué llevar y los idiomas que atiende." },
      { name: "La necesidad en sus palabras", objective: "O3", notYet: "La necesidad es una suposición o usa jerga.", meets: "La necesidad del vecino inventado está escrita en sus propias palabras, con el permiso anotado.", exceeds: "Muestra qué necesidad le importa más y por qué." },
      { name: "Hablar claro y con respeto", objective: "O2", notYet: "Lo que vas a decir usa jerga o juzga a la persona.", meets: "Palabras sencillas, una oración para repetir lo que escuchaste y una pregunta para repetir y confirmar.", exceeds: "Ofrece un intérprete u otra forma de comunicarse cuando hace falta." },
      { name: "Derivación acompañada y seguimiento", objective: "O5", notYet: "Solo un número de teléfono, o sin fecha de seguimiento.", meets: "Una conexión acompañada, un obstáculo con un plan y una fecha de seguimiento.", exceeds: "Incluye un recurso de reserva por si el primero no funciona." },
      { name: "Privacidad y rol", objective: "O5", notYet: "Usa datos de una persona real o da consejos médicos.", meets: "Persona inventada, permiso antes de compartir, ningún consejo médico ni legal.", exceeds: "Incluye los pasos en una crisis (911, 988, avisar al supervisor) en la guía." },
      { name: "El camino en tu estado", objective: "O1", notYet: "No hay información sobre cómo ser CHW en tu estado.", meets: "Indica si tu estado certifica a los CHW, con la página oficial.", exceeds: "Agrega un empleador o un programa de capacitación local para contactar." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que solicitan un trabajo o un programa de capacitación de CHW en un plazo de 60 días",
      "Participantes que obtienen la certificación estatal de CHW donde su estado la ofrece",
      "Participantes contratados como CHW, trabajadores de alcance comunitario o navegadores en un plazo de 6 meses (encuesta de seguimiento)",
      "Organizaciones aliadas que informan de derivaciones que llegan al servicio y reciben seguimiento"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para verificar recursos en páginas oficiales",
      "Papel y pluma para el guion de detección, la guía de recursos y el plan de derivación",
      "Un compañero para el juego de roles (opcional; escribirlo también sirve)",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Antes del curso, encuentra la página de certificación de CHW de tu estado (o anota que tu estado no tiene) y compártela.",
      "Haz las lecciones de escucha y de detección como juegos de roles en parejas, solo con personas inventadas.",
      "Si puedes, invita a un CHW o a una promotora en activo para que cuente cómo es un día de trabajo.",
      "Pide a los participantes que junten sus recursos verificados en una sola guía de grupo y anoten la fecha en que verificaron cada uno.",
      "Repasa los pasos en una crisis (911, 988, avisar al supervisor) y el plan de seguridad de tu programa antes de los juegos de roles sobre temas difíciles."
    ]
  }
};
