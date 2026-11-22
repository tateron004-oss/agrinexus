"use strict";

// Koach Learn course (Spanish translation of shared/resume-linkedin-interviews.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "resume-linkedin-interviews-es",
  lang: "es",
  translationOf: "resume-linkedin-interviews",
  category: "Athletes",
  name: "Currículum, LinkedIn y entrevistas de trabajo",
  skills: "Escribir un currículum de una página, Escribir viñetas de logros, Crear un perfil de LinkedIn, Responder con el método STAR, Responder con honestidad sobre una pausa laboral o antecedentes, Hacer seguimiento después de una entrevista",
  outcome: "escribir un currículum de una página con viñetas de logros fuertes, crear un perfil sencillo de LinkedIn y responder en voz alta preguntas comunes de entrevista con el método STAR, incluida una respuesta corta y honesta sobre una pausa laboral o antecedentes penales.",
  about: [
    "Este curso es para cualquier persona que se prepara para buscar trabajo: un estudiante que busca su primer empleo, un atleta que pasa del deporte a una carrera, un veterano que pasa al trabajo civil, una persona que vuelve a casa después de la cárcel o alguien que cambia de trabajo después de muchos años en el mismo lugar.",
    "Vas a crear tres cosas que puedes usar de inmediato: un currículum de una página, un perfil de LinkedIn y un grupo de respuestas de entrevista que practicaste en voz alta. También vas a aprender qué preguntarle al empleador y cómo hacer seguimiento.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final. Herramientas de IA como ChatGPT o Microsoft Copilot pueden ayudarte con las palabras, pero los datos y la voz deben ser tuyos."
  ],
  finalTask: "Elige una oferta de trabajo real. Escribe para ella un currículum de una página con al menos cuatro viñetas de logros, actualiza tu titular y tu sección Acerca de en LinkedIn para que coincidan, y luego grábate respondiendo en voz alta tres preguntas de entrevista con el método STAR, incluida una respuesta honesta sobre una pausa laboral o antecedentes si te aplica. Termina escribiendo una nota de agradecimiento corta que podrías enviar después de la entrevista.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Cualquiera que se prepara para buscar empleo: estudiantes que buscan su primer trabajo, deportistas que pasan a una carrera después del deporte, veteranos que pasan al trabajo civil, personas que vuelven a casa después de la prisión y personas que cambian de empleo después de años en un mismo lugar.",
    startingPoint: "Tienen experiencia de trabajo, estudios, deporte, servicio o vida, y saben usar un teléfono o una computadora. Muchos tienen un currículum viejo o ninguno, no tienen perfil de LinkedIn y no han practicado en voz alta las respuestas de entrevista, sobre todo sobre una pausa laboral o antecedentes.",
    gap: "Los empleadores deciden rápido a partir de un currículum, un perfil y una entrevista corta. Necesitan un currículum claro de una página, un perfil sencillo de LinkedIn y respuestas honestas y practicadas, para que se vean sus habilidades reales y consigan entrevistas y ofertas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Dispositivos: un teléfono o una computadora con una herramienta de documentos gratuita y una grabadora de voz",
      "Honestidad: todo lo que hay en un currículum, un perfil o una reescritura de la IA debe ser verdad",
      "Privacidad: nada de dirección de casa ni números de identificación en LinkedIn ni en las herramientas de IA",
      "Las reglas sobre antecedentes y de oportunidad justa cambian según el lugar; cada persona revisa sus reglas locales"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una oferta de trabajo real", action: "organizar un currículum de una página con datos de contacto, un resumen, habilidades que coincidan y experiencia con fechas", standard: "en una página y adaptado a la oferta" },
    { id: "O2", condition: "Con tareas de trabajo escritas de forma simple", action: "escribir viñetas de logros con un verbo de acción, lo que hiciste y un resultado o un número", standard: "con al menos cuatro viñetas, todas verdaderas" },
    { id: "O3", condition: "Usando tu currículum", action: "crear un perfil de LinkedIn con foto, titular, sección Acerca de y experiencia", standard: "sin dirección de casa ni números de identificación y con tres solicitudes de conexión enviadas" },
    { id: "O4", condition: "Con una pregunta de entrevista de comportamiento", action: "responder con una historia STAR: situación, tarea, acción y resultado", standard: "en uno o dos minutos, con la mayor parte del tiempo en la acción" },
    { id: "O5", condition: "Cuando te hacen una pregunta difícil sobre una pausa laboral o antecedentes", action: "dar en voz alta una respuesta corta y honesta que diga lo que has hecho desde entonces", standard: "grabada, escuchada y mejorada al menos una vez" },
    { id: "O6", condition: "Al final de una entrevista", action: "hacer buenas preguntas y escribir una nota de agradecimiento", standard: "con la nota enviada en las siguientes 24 horas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tu currículum y LinkedIn",
      lessons: [
        {
          objectives: ["O1"],
          title: "Crear un currículum de una página",
          minutes: 5,
          goal: "Organizar un currículum limpio de una página con las secciones correctas en el orden correcto.",
          text: [
            "Un currículum es un resumen de una página de lo que puedes hacer por un empleador. La mayoría de las personas que contratan pasan menos de un minuto en la primera mirada, así que la página debe ser fácil de recorrer con la vista: títulos claros, bastante espacio en blanco y una sola letra sencilla, como Calibri o Arial, en tamaño 10 a 12.",
            "Usa estas secciones, de arriba hacia abajo: tu nombre y datos de contacto (teléfono, un correo profesional, ciudad y estado, y tu enlace de LinkedIn si tienes uno); un resumen de dos líneas; habilidades; experiencia laboral, con el trabajo más reciente primero; y después estudios, capacitación y certificados.",
            "La experiencia es más que los trabajos pagados. Cuenta el voluntariado, el servicio militar, ser capitán de equipo o entrenador, el trabajo en la iglesia o la comunidad, y los trabajos o capacitaciones que hiciste mientras estabas en prisión, como cocina, mantenimiento o un programa de oficio. Si prefieres, describe lo que hiciste, no dónde fue.",
            "Cambia un poco tu currículum para cada trabajo. Lee la oferta, encuentra las habilidades que pide y asegúrate de que las palabras que usas coincidan con las habilidades que de verdad tienes. Muchos empleadores usan programas que buscan esas palabras en los currículums."
          ],
          steps: ["Abre un procesador de texto gratis como Google Docs o Microsoft Word, o usa una plantilla sencilla de currículum.", "Pon tu nombre y tus datos de contacto arriba. Usa un correo profesional, por ejemplo uno hecho con tu nombre y tu apellido.", "Escribe un resumen de dos líneas: quién eres y qué ofreces.", "Escribe de 6 a 10 habilidades que coincidan con la oferta de trabajo.", "Escribe tu experiencia, la más reciente primero: puesto, organización, ciudad, fechas y 3 o 4 viñetas para cada una.", "Agrega estudios, capacitación y certificados. Mantén todo en una sola página."],
          words: [["Currículum", "un resumen de una página de tus habilidades, experiencia y capacitación que envías cuando solicitas un trabajo."], ["Oferta de trabajo", "el anuncio que describe un trabajo y lo que busca el empleador."], ["Sistema de seguimiento de candidatos", "un programa que usan muchos empleadores para recibir currículums y buscar palabras clave en ellos (en inglés, applicant tracking system o ATS)."]],
          slides: [
            { title: "El currículum es tu presentación en una página", bullets: ["Fácil de leer en menos de un minuto", "Una sola letra sencilla, tamaño 10 a 12", "Títulos claros y espacio en blanco"] },
            { title: "Secciones, de arriba hacia abajo", bullets: ["Nombre y datos de contacto", "Resumen de dos líneas y habilidades", "Experiencia, la más reciente primero", "Estudios, capacitación y certificados"] },
            { title: "Toda la experiencia cuenta", bullets: ["Voluntariado y servicio militar", "Capitán de equipo, entrenador, labores en la comunidad", "Programas de trabajo y capacitación en prisión"] },
            { title: "Ajústalo a cada oferta", bullets: ["Encuentra las habilidades que pide la oferta", "Usa las mismas palabras para las habilidades que de verdad tienes"] }
          ],
          tryIt: "Busca una oferta de trabajo real a la que te postularías. Abre un documento nuevo y arma el esquema del currículum para ella: tus datos de contacto, un resumen de dos líneas, seis habilidades que coincidan con la oferta y tu experiencia con fechas. Deja las viñetas para la siguiente lección.",
          youCanNow: "organizar un currículum de una página con las secciones correctas y ajustarlo a una oferta de trabajo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es el resumen de un currículum?", options: ["Dos líneas arriba que dicen quién eres y qué ofreces", "Una lista de todos los trabajos que has tenido", "Los teléfonos de tus referencias", "Tu historial de sueldos"], answer: 0, why: "Un resumen corto le dice rápido al empleador lo que aportas." },
            { objective: "O1", q: "Una oferta de trabajo pide habilidades con montacargas e inventario, y tú las tienes. ¿Qué harías con tu currículum?", options: ["Dejarlo igual para todos los trabajos", "Agregar la historia completa de tu vida", "Agregar esas habilidades a tu sección de habilidades y a tu experiencia", "Hacerlo de tres páginas"], answer: 2, why: "Adaptar tu currículum a la oferta muestra que encajas en el trabajo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir viñetas de logros",
          minutes: 5,
          goal: "Convertir tareas simples en viñetas que muestren lo que lograste.",
          text: [
            "Las viñetas débiles enumeran tareas: \"Encargado de la limpieza.\" Las viñetas fuertes muestran resultados: \"Limpié y reabastecí 12 habitaciones por turno y pasé todas las inspecciones semanales.\" El empleador puede imaginarte haciendo bien el trabajo.",
            "Una fórmula sencilla: verbo de acción + lo que hiciste + un resultado o un número. Empieza con un verbo fuerte como dirigí, construí, capacité, reparé, atendí, organicé, reduje o mejoré. Luego agrega un número si puedes: cuántas personas, cuánto dinero, con qué frecuencia o cuánto más rápido.",
            "Ejemplos de distintas vidas: \"Capacité a 4 compañeros nuevos en la lista de apertura de la tienda.\" (comercio) \"Dirigí a un pelotón de 9 soldados en revisiones diarias de equipo sin ninguna pérdida.\" (militar) \"Fui capitán de un equipo universitario de 22 y organicé el análisis semanal de video.\" (atleta) \"Preparé comidas para 300 personas al día en la cocina de un centro, cumpliendo cada revisión de inocuidad alimentaria.\" (reinserción)",
            "Di la verdad. Nunca inventes números ni puestos. Si no estás seguro de un número, usa un cálculo justo con la palabra \"unos\" o \"aproximadamente\", o describe el resultado con palabras."
          ],
          steps: ["Escribe una tarea que hiciste en un trabajo, un equipo o un programa.", "Empieza con un verbo de acción.", "Agrega qué hiciste y para quién.", "Agrega un número o un resultado.", "Léelo en voz alta: ¿suena a algo que de verdad hiciste?"],
          words: [["Viñeta de logro", "una línea corta en un currículum que muestra un resultado que lograste, no solo una tarea."], ["Verbo de acción", "una palabra que indica algo que hiciste, como dirigí, construí, capacité o reparé."]],
          slides: [
            { title: "Tareas frente a resultados", bullets: ["Débil: \"Encargado de la limpieza\"", "Fuerte: \"Limpié 12 habitaciones por turno y pasé todas las inspecciones\""] },
            { title: "La fórmula de la viñeta", bullets: ["Verbo de acción", "+ lo que hiciste", "+ un número o un resultado"] },
            { title: "Ejemplos de muchas vidas", bullets: ["\"Capacité a 4 compañeros nuevos en las revisiones de apertura\"", "\"Fui capitán de un equipo de 22 y organicé el análisis de video\"", "\"Preparé 300 comidas al día y cumplí cada revisión de seguridad\""] },
            { title: "Di siempre la verdad", bullets: ["Nunca inventes números ni puestos", "Usa \"unos\" o \"aproximadamente\" para un cálculo justo", "Describe el resultado con palabras si no tienes un número"] }
          ],
          tryIt: "Escribe cuatro viñetas de logros para tu currículum usando la fórmula. Puedes pedirle a un asistente de IA: \"Haz más fuerte esta viñeta de currículum sin agregar nada que no sea verdad: [tu viñeta].\" Revisa que cada palabra que te dé sea verdad antes de quedártela.",
          youCanNow: "escribir viñetas de logros que empiezan con un verbo de acción y muestran un resultado.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es un verbo de acción para empezar una viñeta fuerte?", options: ["Responsable de", "Capacité", "Entre mis tareas estaban", "Estaba a cargo"], answer: 1, why: "Las viñetas empiezan con un verbo de acción que muestra lo que hiciste." },
            { objective: "O2", q: "Tu viñeta dice \"Hice servicio al cliente\". ¿Qué escribirías en su lugar?", options: ["\"Hice mucho servicio al cliente\"", "\"Servicio al cliente, caja, teléfonos\"", "\"Fui el mejor en servicio al cliente\"", "\"Atendí a unos 50 clientes al día y manejé las devoluciones con calma\""], answer: 3, why: "Las viñetas fuertes muestran lo que hiciste con un resultado o un número." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Crear un perfil de LinkedIn",
          minutes: 5,
          goal: "Crear un perfil de LinkedIn con foto, titular, sección Acerca de y experiencia.",
          text: [
            "LinkedIn es un sitio web y una aplicación gratis de contactos profesionales. Los empleadores y reclutadores buscan ahí a personas para contratar, y muchos trabajos se publican ahí. Tu perfil funciona como un currículum en línea que la gente puede encontrar.",
            "Las partes más importantes: una foto clara de tu cara con un fondo sencillo; un titular (la línea debajo de tu nombre) que diga lo que haces o quieres hacer, como \"Operador de montacargas | OSHA 10 | Puntual en turnos de madrugada\" (OSHA 10 es un curso básico de seguridad laboral de 10 horas en Estados Unidos); una sección Acerca de de tres a cinco oraciones con tu propia voz; y tu experiencia, con las viñetas de tu currículum.",
            "Después arma tu red de contactos. Conecta con personas que conoces: antiguos entrenadores, supervisores, maestros, administradores de caso, personas con las que serviste, compañeros de clase. Envía una nota corta cuando conectes. Sigue a las empresas donde quieres trabajar para ver sus ofertas de trabajo.",
            "Mantenlo profesional y seguro. No publiques tu dirección de casa, tu fecha de nacimiento ni números de identificación. Tu perfil no tiene que mencionar antecedentes ni una pausa laboral; muestra tus habilidades."
          ],
          steps: ["Entra a linkedin.com o instala la aplicación oficial de LinkedIn, y crea una cuenta gratis con un correo profesional.", "Agrega una foto clara y amable.", "Escribe un titular que diga lo que haces o el trabajo que quieres.", "Escribe una sección Acerca de de tres a cinco oraciones.", "Agrega la experiencia y las habilidades de tu currículum.", "Conecta con cinco personas que conoces y envía una nota corta."],
          words: [["LinkedIn", "un sitio web y una aplicación gratis de contactos profesionales donde las personas muestran su historial laboral y los empleadores publican trabajos."], ["Titular", "la línea corta debajo de tu nombre en LinkedIn que dice lo que haces."], ["Red de contactos", "las personas que conoces y que pueden pasarte ofertas de trabajo o hablar bien de tu trabajo."]],
          slides: [
            { title: "Por qué LinkedIn", bullets: ["Los reclutadores buscan ahí a quién contratar", "Muchos trabajos se publican ahí", "Tu currículum en línea que la gente puede encontrar"] },
            { title: "Las partes clave", bullets: ["Foto clara con fondo sencillo", "Titular: lo que haces o quieres hacer", "Acerca de: 3 a 5 oraciones con tu voz", "Viñetas de experiencia de tu currículum"] },
            { title: "Arma tu red de contactos", bullets: ["Entrenadores, supervisores, maestros, administradores de caso", "Envía una nota corta con cada solicitud", "Sigue a las empresas donde quieres trabajar"] },
            { title: "Mantente seguro", bullets: ["Sin dirección de casa, fecha de nacimiento ni números de identificación", "Muestra tus habilidades; tú decides qué compartir"] }
          ],
          tryIt: "Crea o actualiza tu perfil de LinkedIn. Escribe tu titular y tu sección Acerca de, agrega un trabajo con tus viñetas nuevas y envía solicitudes de conexión con una nota corta a tres personas que conoces.",
          youCanNow: "crear un perfil de LinkedIn con foto, titular, sección Acerca de y experiencia, y empezar a armar tu red de contactos.",
          quickCheck: [
            { objective: "O3", q: "¿Para qué sirve la sección Acerca de en LinkedIn?", options: ["Para poner tu dirección de casa", "Para contar en unas pocas líneas tu historia de trabajo y lo que buscas", "Para mostrar tus contraseñas", "Para enumerar a tus amigos de redes sociales"], answer: 1, why: "La sección Acerca de es una historia corta de tus habilidades y tus metas." },
            { objective: "O3", q: "Quieres conectar en LinkedIn con un antiguo supervisor. ¿Qué harías?", options: ["Enviar una solicitud con una nota corta y amable", "Enviar una solicitud sin nota y con tu número de teléfono", "Escribirle para pedirle trabajo de inmediato", "Esperar a que te encuentre"], answer: 0, why: "Una nota corta le recuerda quién eres y empieza una buena conexión." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu currículum y LinkedIn",
        questions: [
          { objective: "O1", q: "¿Qué largo debe tener un currículum para la mayoría de los trabajos de nivel inicial y medio?", options: ["Tres páginas", "Una página", "Media página", "Lo más largo posible"], answer: 1, why: "Una página es fácil de leer y es lo normal para la mayoría de los trabajos." },
          { objective: "O2", q: "¿Cuál es la viñeta más fuerte?", options: ["\"Encargado del almacén\"", "\"Hice varias tareas\"", "\"Muy trabajador\"", "\"Organicé el almacén y reduje a la mitad, aproximadamente, el tiempo para buscar piezas\""], answer: 3, why: "Empieza con un verbo de acción y muestra un resultado." },
          { objective: "O1", q: "Estuviste a cargo de la línea de cocina en un programa del centro mientras estabas en prisión. ¿Debe ir en tu currículum?", options: ["Sí, como experiencia, describiendo las habilidades que usaste", "No, nunca cuenta", "Solo si te pagaban mucho", "Solo en LinkedIn"], answer: 0, why: "Los programas de trabajo y capacitación son experiencia real; describe lo que hiciste." },
          { objective: "O3", q: "¿Cuál es un buen titular de LinkedIn?", options: ["\"Buscando\"", "Tu dirección de casa", "\"Soldador certificado | La seguridad primero | Abierto a programas de aprendiz\"", "Tu fecha de nacimiento"], answer: 2, why: "Un titular dice lo que haces o quieres hacer y muestra tus fortalezas." },
          { objective: "O2", q: "Una herramienta de IA reescribió tu viñeta y agregó un puesto de gerente que nunca tuviste. ¿Qué haces?", options: ["Lo dejas, suena mejor", "Lo quitas, porque todo en un currículum debe ser verdad", "Agregas otro puesto", "Lo pones solo en LinkedIn"], answer: 1, why: "Un currículum debe ser verdadero; tú revisas cada palabra que escribe la IA." }
        ]
      }
    },
    {
      name: "Capítulo 2: Entrevistas y seguimiento",
      lessons: [
        {
          objectives: ["O4"],
          title: "Responder con el método STAR",
          minutes: 5,
          goal: "Responder una pregunta de comportamiento en una entrevista con una historia STAR corta.",
          text: [
            "Muchas preguntas de entrevista empiezan con \"Cuénteme de una vez en que...\". El empleador quiere un ejemplo real de cómo actúas. El método STAR (siglas en inglés) mantiene tu respuesta clara y corta.",
            "La S es Situation, la situación: dónde estabas y qué pasaba. La T es Task, la tarea: lo que tenías que hacer. La A es Action, la acción: lo que hiciste TÚ, paso a paso. La R es Result, el resultado: cómo terminó, con un número si puedes, y qué aprendiste.",
            "Ejemplo: \"Cuénteme de una vez en que resolvió un problema.\" S: \"En mi trabajo en el almacén, una entrega llegó dos horas tarde en un día con mucho trabajo.\" T: \"Tenía que tenerla en los estantes antes de que abriera la tienda.\" A: \"Le pregunté a mi líder si podía dividir al equipo, armé dos líneas de descarga y revisé las etiquetas yo mismo.\" R: \"Terminamos 15 minutos antes de abrir y no faltó nada.\"",
            "Prepara cinco historias antes de cualquier entrevista: una vez que resolviste un problema, trabajaste en equipo, manejaste un error, trataste con una persona difícil y aprendiste algo rápido. El deporte, el ejército, la escuela, la familia y los programas dan buenas historias."
          ],
          steps: ["Lee la pregunta y elige una historia real.", "Situación: una oración sobre dónde y cuándo.", "Tarea: una oración sobre lo que tenías que hacer.", "Acción: dos o tres oraciones sobre lo que hiciste.", "Resultado: una oración sobre cómo terminó y qué aprendiste.", "Mantén toda la respuesta en uno o dos minutos, más o menos."],
          words: [["Pregunta de comportamiento", "una pregunta de entrevista sobre una vez en que hiciste algo, para ver cómo actúas en el trabajo."], ["Método STAR", "una forma de responder: Situation (situación), Task (tarea), Action (acción), Result (resultado)."]],
          slides: [
            { title: "\"Cuénteme de una vez en que...\"", bullets: ["El empleador quiere un ejemplo real", "STAR mantiene la respuesta clara y corta"] },
            { title: "STAR", bullets: ["Situation (situación): dónde y cuándo", "Task (tarea): lo que tenías que hacer", "Action (acción): lo que hiciste TÚ", "Result (resultado): cómo terminó y qué aprendiste"] },
            { title: "Prepara cinco historias", bullets: ["Resolviste un problema; trabajaste en equipo", "Manejaste un error; trataste con una persona difícil", "Aprendiste algo rápido"] },
            { title: "Sé breve", bullets: ["Uno o dos minutos, más o menos", "Habla en primera persona de tus acciones", "Termina con un resultado"] }
          ],
          tryIt: "Escribe una historia STAR para \"Cuénteme de una vez en que trabajó en equipo.\" Usa una oración para la Situación y otra para la Tarea, dos o tres para la Acción y una para el Resultado.",
          youCanNow: "responder una pregunta de \"cuénteme de una vez en que\" con una historia STAR clara.",
          quickCheck: [
            { objective: "O4", q: "¿Qué significa la S de STAR?", options: ["Skill (habilidad)", "Strength (fortaleza)", "Situation (situación)", "Summary (resumen)"], answer: 2, why: "STAR es Situation, Task, Action y Result: situación, tarea, acción y resultado." },
            { objective: "O4", q: "Te preguntan: \"Cuénteme de una vez en que resolvió un problema\". ¿Qué harías?", options: ["Decir \"Soy bueno para resolver problemas\" y nada más", "Hablar diez minutos de muchos problemas", "Decir que nunca has tenido un problema", "Contar una historia corta: la situación, la tarea, lo que hiciste y el resultado"], answer: 3, why: "Una historia STAR corta demuestra tu habilidad con un ejemplo real." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Practicar en voz alta y responder con honestidad sobre una pausa laboral o antecedentes",
          minutes: 6,
          goal: "Practicar respuestas en voz alta, incluida una respuesta corta y honesta sobre una pausa laboral o antecedentes penales.",
          text: [
            "Las respuestas que solo leíste en tu cabeza salen desordenadas. Dilas en voz alta, grábate con el teléfono y escúchate. Practica preguntas comunes: \"Hábleme de usted\", \"¿Por qué quiere este trabajo?\", \"¿Cuáles son sus fortalezas?\" y \"Cuénteme de una vez en que...\". Puedes pedirle a un asistente de IA que haga de entrevistador y te haga una pregunta a la vez.",
            "Una pausa en tu historial laboral es común: estudios, deporte, servicio militar, cuidar a la familia, salud o prisión. Mantén la respuesta corta y mira hacia adelante: qué fue la pausa, qué hiciste o aprendiste y por qué estás listo ahora. Ejemplo: \"Pasé dos años cuidando a mi mamá. Mantuve mis habilidades al día con un curso en línea y estoy listo para trabajar tiempo completo.\"",
            "Si tienes antecedentes penales, no mientas en una solicitud ni en una entrevista. Cuando te pregunten, da una respuesta corta y honesta: reconócelo, di lo que has hecho desde entonces y vuelve al trabajo. Ejemplo: \"Cometí un error grave en 2019 y cumplí mi condena. Desde entonces saqué un certificado de montacargas y trabajé 18 meses sin faltar a ningún turno. Estoy listo para traer esa responsabilidad aquí.\" No des detalles largos a menos que te los pidan.",
            "Conoce tus derechos. Según la guía de la EEOC (la agencia federal de Estados Unidos contra la discriminación en el empleo), un arresto por sí solo no es prueba de un delito, y los empleadores deben considerar el delito, cuánto tiempo pasó y el trabajo. Muchos estados y ciudades tienen leyes \"ban the box\" (quitar la casilla) o de oportunidad justa que retrasan las preguntas sobre antecedentes. Algunos antecedentes se pueden sellar o borrar; pregunta en una oficina de asistencia legal o en tu programa de reinserción. Revisa las páginas oficiales de abajo."
          ],
          steps: ["Escribe tu respuesta a \"Hábleme de usted\" en cuatro oraciones: ahora, antes, fortalezas, por qué este trabajo.", "Grábate con el teléfono respondiendo tres preguntas y escúchate.", "Escribe una respuesta de tres partes para cualquier pausa: qué fue, qué hiciste, por qué estás listo.", "Si tienes antecedentes: reconócelo, muestra lo que has hecho desde entonces, vuelve al trabajo.", "Practica la respuesta difícil en voz alta hasta que suene tranquila y corta."],
          words: [["Pausa laboral", "un tiempo en que no trabajaste, que se nota por las fechas que faltan en un currículum."], ["Ban the box", "leyes de muchos estados y ciudades que impiden a los empleadores preguntar por antecedentes en la primera solicitud de empleo (\"quitar la casilla\")."], ["Eliminación de antecedentes", "un proceso judicial que puede borrar o sellar algunos antecedentes (en inglés, expungement); las reglas cambian según el estado."]],
          slides: [
            { title: "Practica en voz alta", bullets: ["Grábate con el teléfono", "Escúchate y acorta la respuesta", "Pídele a un asistente de IA que haga de entrevistador"] },
            { title: "Responder sobre una pausa laboral", bullets: ["Qué fue la pausa", "Qué hiciste o aprendiste", "Por qué estás listo ahora"] },
            { title: "Responder sobre antecedentes", bullets: ["Nunca mientas en una solicitud", "Reconócelo en una oración", "Muestra lo que has hecho desde entonces", "Vuelve al trabajo"] },
            { title: "Conoce tus derechos", bullets: ["Un arresto por sí solo no es prueba de un delito", "Muchos lugares tienen leyes ban the box o de oportunidad justa", "Pregunta en asistencia legal sobre sellar o borrar antecedentes"] }
          ],
          sources: [
            { name: "EEOC: Antecedentes de arresto y condena, lo que deben saber quienes buscan trabajo y los trabajadores (en inglés)", url: "https://www.eeoc.gov/arrestandconviction" }
          ],
          tryIt: "Grábate respondiendo \"Hábleme de usted\" y una pregunta difícil (una pausa laboral, antecedentes o \"¿Por qué dejó su último trabajo?\"). Escúchate. Quita todo lo que no haga falta y grábalo otra vez.",
          youCanNow: "practicar respuestas en voz alta y dar una respuesta corta, honesta y con la mirada hacia adelante sobre una pausa laboral o antecedentes.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué grabarte respondiendo preguntas de entrevista?", options: ["Para oír qué recortar y mejorar", "Para publicarlo en internet", "Para enviárselo al empleador", "Porque las entrevistas siempre se graban"], answer: 0, why: "Escucharte te muestra qué acortar y qué corregir." },
            { objective: "O5", q: "Quien te entrevista pregunta por una pausa de dos años en la que estuviste en prisión. ¿Qué dirías?", options: ["Inventar otro trabajo", "Negarte a responder e irte", "Contar una historia larga sobre el caso", "Dar una respuesta corta y honesta y decir lo que has hecho desde entonces"], answer: 3, why: "Corta y honesta, y luego enfócate en lo que has hecho desde entonces." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Hacer preguntas y dar seguimiento",
          minutes: 4,
          goal: "Hacer buenas preguntas al final de una entrevista y enviar una nota de agradecimiento.",
          text: [
            "Cerca del final, la mayoría de los entrevistadores preguntan: \"¿Tiene alguna pregunta para nosotros?\" Ten siempre dos o tres listas. Muestra interés. Buenas preguntas: \"¿Cómo se ve un primer mes excelente en este trabajo?\", \"¿Qué hacen diferente las mejores personas de este equipo?\", \"¿Cuáles son los siguientes pasos y cuándo puedo esperar una respuesta?\"",
            "Guarda las preguntas sobre sueldo y prestaciones para cuando ellos saquen el tema o hagan una oferta, a menos que la oferta de trabajo no diga el sueldo y necesites saberlo. Pregunta con amabilidad.",
            "En las siguientes 24 horas, envía una nota de agradecimiento corta por correo (o una tarjeta, si es un negocio local pequeño). Agradece su tiempo, menciona una cosa de la que hablaron y repite por qué quieres el trabajo. Que sean cuatro o cinco oraciones.",
            "Si no tienes noticias para la fecha que te dieron, envía un mensaje amable de seguimiento unos días después. Mientras tanto, sigue solicitando otros trabajos."
          ],
          steps: ["Prepara dos o tres preguntas antes de la entrevista.", "Pregunta por los siguientes pasos y las fechas.", "Anota el nombre y el correo de quien te entrevistó.", "Envía una nota de agradecimiento corta en las siguientes 24 horas.", "Haz un solo seguimiento si pasa la fecha que te dieron."],
          words: [["Seguimiento", "un mensaje corto y amable después de una entrevista para agradecer al empleador o preguntar por los siguientes pasos."]],
          slides: [
            { title: "Ten siempre preguntas", bullets: ["\"¿Cómo se ve un primer mes excelente?\"", "\"¿Qué hacen diferente las mejores personas aquí?\"", "\"¿Cuáles son los siguientes pasos?\""] },
            { title: "Sueldo y prestaciones", bullets: ["Normalmente espera a que lo mencionen o hagan una oferta", "Pregunta con amabilidad si no decían el sueldo"] },
            { title: "Nota de agradecimiento", bullets: ["Envíala en las siguientes 24 horas", "Menciona una cosa de la que hablaron", "Cuatro o cinco oraciones"] },
            { title: "¿Todavía sin respuesta?", bullets: ["Haz un solo seguimiento cuando pase su fecha", "Sigue solicitando en otros lugares"] }
          ],
          tryIt: "Tarea final: escribe una nota de agradecimiento corta para la entrevista para la que practicaste. Luego junta todo: tu currículum de una página, tu titular y tu sección Acerca de actualizados en LinkedIn, y tres respuestas STAR grabadas.",
          youCanNow: "hacer buenas preguntas al final de una entrevista y dar seguimiento con una nota de agradecimiento corta.",
          quickCheck: [
            { objective: "O6", q: "¿Qué incluye una buena nota de agradecimiento?", options: ["El agradecimiento, una cosa de la que hablaron y por qué quieres el trabajo", "Solo la palabra gracias", "Un pedido de más sueldo", "Tu currículum completo otra vez"], answer: 0, why: "Mencionar algo de lo que hablaron muestra un interés real." },
            { objective: "O6", q: "Al final de la entrevista te preguntan si tienes preguntas. ¿Qué preguntarías?", options: ["\"¿Qué tan pronto puedo tomar vacaciones?\"", "\"No, así estoy bien.\"", "\"¿Cuáles son los siguientes pasos y cuándo puedo esperar una respuesta?\"", "\"¿Me dieron el trabajo?\""], answer: 2, why: "Preguntar por los siguientes pasos muestra interés y te dice cuándo dar seguimiento." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Entrevistas y seguimiento",
        questions: [
          { objective: "O4", q: "¿Qué significa la A de STAR?", options: ["Answer (respuesta)", "Attitude (actitud)", "Action (acción)", "Award (premio)"], answer: 2, why: "STAR es Situation, Task, Action, Result: situación, tarea, acción, resultado." },
          { objective: "O5", q: "¿Cuál es la mejor forma de practicar respuestas de entrevista?", options: ["Leerlas en silencio una vez", "Memorizar un guion palabra por palabra y nunca decirlo en voz alta", "No practicar para sonar natural", "Decirlas en voz alta y grabarte"], answer: 3, why: "Hablar y escucharte te muestra qué tienes que arreglar." },
          { objective: "O5", q: "Estuviste un año sin trabajar cuidando a tu papá o tu mamá. ¿Cuál es la mejor respuesta?", options: ["\"Cuidé a mi mamá durante un año, mantuve mis habilidades al día con un curso y estoy listo para trabajar tiempo completo.\"", "\"Prefiero no decirlo.\"", "Inventar un trabajo para llenar la pausa", "Una historia de diez minutos sobre problemas familiares"], answer: 0, why: "Es corta, honesta y mira hacia adelante, a por qué estás listo." },
          { objective: "O5", q: "Quien te entrevista pregunta por tus antecedentes penales. ¿Qué debes hacer?", options: ["Negarlo", "Dar una respuesta corta y honesta y decir lo que has hecho desde entonces", "Irte", "Contar cada detalle durante diez minutos"], answer: 1, why: "La honestidad más lo que has hecho desde entonces genera confianza; mentir puede costarte el trabajo después." },
          { objective: "O6", q: "¿Cuándo debes enviar una nota de agradecimiento?", options: ["En las siguientes 24 horas", "Después de un mes", "Solo si te dan el trabajo", "Nunca"], answer: 0, why: "Una nota rápida muestra interés mientras todavía te tienen presente." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Currículum, LinkedIn y entrevistas de trabajo",
    questions: [
      { objective: "O1", q: "¿Qué va en la parte más alta de un currículum?", options: ["Tus pasatiempos", "Tus referencias", "Tu nombre y tus datos de contacto", "Tu fecha de nacimiento"], answer: 2, why: "El nombre y los datos de contacto van primero para que el empleador pueda comunicarse contigo." },
      { objective: "O1", q: "¿Por qué cambiar un poco tu currículum para cada trabajo?", options: ["Para que coincida con las habilidades que pide la oferta", "Porque lo exige la ley", "Para hacerlo más largo", "Para agregar trabajos que no tuviste"], answer: 0, why: "Relacionar tus habilidades reales con la oferta ayuda a que las personas y los programas te encuentren." },
      { objective: "O1", q: "¿Qué correo es mejor en un currículum?", options: ["partyking99@example.com", "jordan.smith@example.com", "Ningún correo", "Tu correo viejo de la escuela que ya no puedes abrir"], answer: 1, why: "Lo mejor es una dirección sencilla y profesional que revises seguido." },
      { objective: "O2", q: "Un veterano dirigió a un equipo de 9 en revisiones diarias de equipo. ¿Cuál es la viñeta más fuerte?", options: ["\"Estuve en el ejército\"", "\"Hice revisiones\"", "\"Tareas varias\"", "\"Dirigí a 9 soldados en revisiones diarias de equipo sin ninguna pérdida\""], answer: 3, why: "Verbo de acción, lo que se hizo y un resultado." },
      { objective: "O2", q: "¿Cuál es la fórmula de la viñeta?", options: ["Puesto + sueldo", "Verbo de acción + lo que hiciste + un resultado o número", "Adjetivo + adjetivo + adjetivo", "Fecha + lugar"], answer: 1, why: "Esa fórmula convierte tareas en logros." },
      { objective: "O2", q: "No estás seguro del número exacto para una viñeta. ¿Qué haces?", options: ["Usar un cálculo justo con \"aproximadamente\" o describir el resultado con palabras", "Inventar un número grande", "Quitar todo ese trabajo", "Copiar un número del currículum de un amigo"], answer: 0, why: "Di la verdad; los cálculos deben ser justos y decir que son aproximados." },
      { objective: "O3", q: "¿Qué es un titular de LinkedIn?", options: ["Tu dirección de casa", "Una noticia", "La línea corta debajo de tu nombre que dice lo que haces", "Tu contraseña"], answer: 2, why: "El titular les dice a los reclutadores lo que haces o quieres hacer." },
      { objective: "O3", q: "¿Qué foto es mejor para LinkedIn?", options: ["Una foto de grupo en una fiesta", "Una foto de tu carro", "Sin cara, solo un logotipo", "Una foto clara de tu cara con un fondo sencillo"], answer: 3, why: "Una foto clara y amable de tu cara se ve profesional." },
      { objective: "O3", q: "¿Qué NO debes poner en tu perfil de LinkedIn?", options: ["Tus habilidades", "Tu dirección de casa y tus números de identificación", "Tu experiencia laboral", "Tus certificados"], answer: 1, why: "Los datos privados se pueden usar mal; no los pongas." },
      { objective: "O3", q: "¿Con quién es bueno conectar primero en LinkedIn?", options: ["Un antiguo entrenador o supervisor que conoce tu trabajo", "Una celebridad cualquiera", "Con nadie", "Solo con personas que nunca has visto"], answer: 0, why: "Las personas que conocen tu trabajo pueden pasarte ofertas y hablar bien de ti." },
      { objective: "O4", q: "\"Cuénteme de una vez en que cometió un error.\" ¿Qué tipo de pregunta es?", options: ["Una pregunta trampa que hay que evitar", "Una pregunta sobre el sueldo", "Una pregunta de comportamiento, buena para una respuesta STAR", "Una pregunta de sí o no"], answer: 2, why: "Pide un ejemplo real, y STAR lo responde bien." },
      { objective: "O4", q: "En una respuesta STAR, ¿qué parte debe llevar más tiempo?", options: ["La situación", "La tarea", "El resultado", "La acción: lo que hiciste"], answer: 3, why: "Lo que más quiere escuchar el empleador es lo que hiciste." },
      { objective: "O4", q: "¿Cuánto debe durar, más o menos, una respuesta STAR?", options: ["Uno o dos minutos", "Diez segundos", "Diez minutos", "Media hora"], answer: 0, why: "Una respuesta corta y clara mantiene la atención de quien entrevista." },
      { objective: "O5", q: "¿Cómo puede ayudarte a practicar un asistente de IA?", options: ["Yendo a la entrevista por ti", "Haciendo de entrevistador y haciéndote una pregunta a la vez", "Inventando tu historial laboral", "Guardando tu número de identificación"], answer: 1, why: "La IA puede hacerte preguntas de práctica; las respuestas igual deben ser tuyas." },
      { objective: "O5", q: "¿Cuál es una respuesta fuerte y honesta sobre antecedentes?", options: ["\"No tengo\" cuando sí tienes", "\"Eso no es asunto suyo\"", "\"Cometí un error en 2019 y cumplí mi condena. Desde entonces saqué un certificado y no he faltado ni un día.\"", "Una historia larga culpando a otros"], answer: 2, why: "Reconócelo, muestra lo que has hecho desde entonces y vuelve al trabajo." },
      { objective: "O5", q: "Según la guía de la EEOC, un arresto por sí solo:", options: ["Es prueba de un delito", "No es prueba de un delito", "Debe ir en todo currículum", "Nunca se puede preguntar"], answer: 1, why: "Un arresto solo no prueba que alguien cometió un delito." },
      { objective: "O5", q: "¿Qué son las leyes \"ban the box\" o de oportunidad justa?", options: ["Reglas para enviar cajas", "Leyes que prohíben para siempre todas las verificaciones de antecedentes", "Leyes que prohíben los currículums", "Leyes de muchos lugares que retrasan las preguntas sobre antecedentes en la primera solicitud"], answer: 3, why: "Dan a quien solicita la oportunidad de ser juzgado primero por sus habilidades; las reglas cambian según el lugar." },
      { objective: "O6", q: "Al final de la entrevista te preguntan: \"¿Tiene alguna pregunta para nosotros?\" Tú dices:", options: ["\"¿Cuáles son los siguientes pasos y cuándo puedo esperar una respuesta?\"", "\"No.\"", "\"¿Qué tan pronto puedo tomar vacaciones?\"", "\"¿A qué se dedica esta empresa?\""], answer: 0, why: "Una pregunta útil y preparada muestra interés." },
      { objective: "O6", q: "Una buena nota de agradecimiento:", options: ["Tiene tres páginas", "Vuelve a pedir un sueldo más alto", "Agradece, menciona una cosa de la que hablaron y dice por qué quieres el trabajo", "Se envía un mes después"], answer: 2, why: "Lo que mejor funciona es corta, concreta y rápida." },
      { objective: "O6", q: "El empleador dijo que llamaría a más tardar el viernes. Ya es miércoles de la semana siguiente. Tú:", options: ["Llamas diez veces al día", "Envías un seguimiento amable y sigues solicitando en otros lugares", "Dejas de buscar trabajo por completo", "Te presentas sin invitación en su oficina todos los días"], answer: 1, why: "Un solo seguimiento amable es profesional; sigue con tu búsqueda." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      4,
      6,
      8,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Currículum de una página",
        objective: "O1",
        notYet: "Más de una página, le faltan secciones o no está adaptado a la oferta.",
        meets: "Una página con datos de contacto, resumen, habilidades que coinciden y experiencia con fechas.",
        exceeds: "Las habilidades y el resumen usan palabras de la oferta de trabajo."
      },
      {
        name: "Viñetas de logros",
        objective: "O2",
        notYet: "Las viñetas solo enumeran tareas, o algo no es verdad.",
        meets: "Al menos cuatro viñetas verdaderas con un verbo de acción y un resultado o un número.",
        exceeds: "Cada viñeta muestra un resultado claro."
      },
      {
        name: "Perfil de LinkedIn",
        objective: "O3",
        notYet: "No tiene titular ni sección Acerca de, o muestra datos privados.",
        meets: "El titular y la sección Acerca de coinciden con el currículum, sin datos privados.",
        exceeds: "Agregó la foto y envió tres solicitudes de conexión con notas."
      },
      {
        name: "Respuestas STAR",
        objective: "O4",
        notYet: "Las respuestas son vagas o les falta una parte de STAR.",
        meets: "Tres respuestas STAR grabadas con las cuatro partes, de uno a dos minutos cada una.",
        exceeds: "Las respuestas terminan con un resultado claro, y la mayor parte del tiempo es para la acción."
      },
      {
        name: "Respuesta honesta a la pregunta difícil",
        objective: "O5",
        notYet: "No preparó ninguna respuesta, o es larga, defensiva o falsa.",
        meets: "Una respuesta corta y honesta sobre una pausa laboral o antecedentes que pasa a lo que ha hecho desde entonces.",
        exceeds: "La grabó, la mejoró y la dice con calma."
      },
      {
        name: "Nota de agradecimiento",
        objective: "O6",
        notYet: "No hay nota, o es una nota genérica de una palabra.",
        meets: "Una nota corta con el agradecimiento, una cosa de la que hablaron y por qué quiere el trabajo.",
        exceeds: "Está lista para enviarse en 24 horas y tiene un plan de seguimiento amable."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que solicitan al menos un trabajo con el nuevo currículum en 30 días (encuesta de seguimiento)",
      "Participantes que consiguen una entrevista en 60 días",
      "Participantes que reciben una oferta de trabajo en 90 días",
      "Participantes que empiezan otro curso de carrera de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con una herramienta de documentos gratuita como Google Docs o Microsoft Word",
      "Una cuenta gratuita de LinkedIn",
      "Una grabadora de voz o de video en el teléfono",
      "Una oferta de trabajo real",
      "Unos 60 minutos para las lecciones y las comprobaciones, más tiempo para terminar el currículum y las grabaciones"
    ],
    facilitatorNotes: [
      "Hagan entrevistas de práctica en parejas para que cada persona responda en voz alta al menos tres veces.",
      "Ayuda a convertir el deporte, el servicio militar, el cuidado de personas y el trabajo hecho en prisión en experiencia honesta para el currículum.",
      "Revisa que las reescrituras de la IA sigan siendo verdad; quita todo lo que la persona no hizo.",
      "Recuerda que no deben poner su dirección de casa ni números de identificación en LinkedIn ni en las herramientas de IA.",
      "Califica el paquete final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
