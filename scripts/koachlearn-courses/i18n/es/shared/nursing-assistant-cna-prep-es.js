"use strict";

// Koach Learn course (Spanish translation of shared/nursing-assistant-cna-prep.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nursing-assistant-cna-prep-es",
  lang: "es",
  translationOf: "nursing-assistant-cna-prep",
  category: "Workforce Development",
  name: "Preparación para auxiliar de enfermería certificado (CNA)",
  skills: "Conocer el camino a CNA en tu estado, Limpiarte las manos y usar guantes con seguridad, Proteger los derechos y la privacidad de los residentes, Dar cuidados diarios seguros, Observar e informar cambios, Planear el examen estatal",
  outcome: "hacer un plan personal para llegar a ser auxiliar de enfermería certificado en tu estado y explicar lo básico de seguridad, privacidad, cuidados y reporte que revisa el examen estatal.",
  about: [
    "Un auxiliar de enfermería certificado (CNA, por sus siglas en inglés) ayuda a las personas con su cuidado diario en hogares de ancianos, hospitales y otros lugares de cuidado. Es una de las formas más rápidas de empezar una carrera en salud, y muchas enfermeras empezaron como CNA.",
    "Este curso te prepara. No te convierte en CNA. Para certificarte, terminas un programa de formación aprobado por el estado, apruebas el examen de competencia de tu estado y quedas inscrito en el registro estatal de auxiliares de enfermería. Cada estado pone sus propias reglas, así que vas a aprender dónde revisar las tuyas.",
    "Vas a aprender lo que es la base del trabajo y del examen: manos limpias, derechos y privacidad de los residentes, cuidados diarios seguros y cómo observar e informar. Las habilidades prácticas, como mover a una persona o tomar la presión arterial, se practican en tu programa con supervisión, no en casa con un paciente real.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" y una comprobación rápida de dos preguntas. Al final haces tu propio plan de estudio y de examen con fechas reales."
  ],
  finalTask: "Haz un plan de estudio y de examen de CNA de una página para tu estado: la página oficial del registro o del departamento de salud que revisaste, dos programas aprobados cerca de ti con su costo y fecha de inicio (tomados de sus propias páginas), las partes del examen de tu estado, un horario de estudio semanal con fechas, las cinco habilidades que más vas a practicar en clase y una persona a la que vas a acudir si tienes una pregunta.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que quieren un primer trabajo en salud: personas que buscan empleo, jóvenes adultos, personas que regresan a casa después de la prisión, inmigrantes y adultos que vuelven a estudiar. Muchas son personas cariñosas que han cuidado a familiares, pero no tienen formación en salud.",
    startingPoint: "Pueden leer instrucciones cortas y usar un teléfono o una computadora para buscar información. La mayoría no ha tomado una clase de salud. Algunas han cuidado a un familiar en casa.",
    gap: "Los trabajos de auxiliar de enfermería piden un programa aprobado por el estado y un examen estatal aprobado. Muchas veces los participantes no conocen los pasos, qué página oficial creer ni lo básico de seguridad y privacidad que espera el examen. Conocer el camino y lo básico les ayuda a elegir un programa real y terminarlo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 7.º grado)",
      "Dispositivos: un teléfono o una computadora de la biblioteca; el papel sirve para todas las tareas",
      "Las reglas cambian según el estado; el curso remite al registro estatal en vez de dar horas o tarifas",
      "Nada de práctica clínica con personas reales en casa; las habilidades prácticas se aprenden en un programa supervisado",
      "En algunos estados, una condena anterior puede afectar la inscripción en el registro; cada participante revisa las reglas de su estado"
    ],
    prerequisites: "Ninguno. \"Alfabetización en salud: entender tu atención médica\" es un buen primer curso."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Usando la página oficial del registro de auxiliares de enfermería o del departamento de salud de tu estado", action: "enumerar los pasos para llegar a ser auxiliar de enfermería certificado en tu estado", standard: "nombrando el programa aprobado, el examen de competencia y el registro, con la página que revisaste" },
    { id: "O2", condition: "Ante una situación de cuidado", action: "elegir cuándo y cómo limpiarte las manos y usar guantes", standard: "acertando al menos 4 de 5 situaciones" },
    { id: "O3", condition: "Con una historia corta sobre un residente", action: "identificar si se protegen los derechos o la privacidad del residente y decir qué hacer si no", standard: "incluyendo a quién le informarías" },
    { id: "O4", condition: "Ante una tarea de cuidado diario, como cambiar de posición, ayudar a caminar o servir una comida", action: "poner los pasos de seguridad en el orden correcto", standard: "sin ningún paso que ponga en riesgo al residente o a ti" },
    { id: "O5", condition: "Con el expediente de un residente inventado y un cambio que notas", action: "escribir una nota corta con hechos e informarla a la enfermera", standard: "usando lo que viste o mediste, no suposiciones" },
    { id: "O6", condition: "Usando tu propio calendario", action: "armar un plan de estudio y de examen con fechas", standard: "que cubra todas las partes del examen de tu estado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El camino a CNA y lo básico del cuidado seguro",
      lessons: [
        {
          title: "Qué hace un CNA y cómo certificarse",
          objectives: ["O1"],
          minutes: 5,
          goal: "Enumerar los pasos para llegar a ser CNA en tu estado y encontrar la página oficial de tu estado.",
          text: [
            "Los auxiliares de enfermería dan cuidados básicos y ayudan a las personas en su vida diaria: bañarse, vestirse, usar el baño, comer, moverse y voltearse. Toman los signos vitales, se fijan en los cambios y se los informan a la enfermera. Trabajan bajo la dirección de la enfermera.",
            "En la mayoría de los estados el camino tiene tres pasos. Primero, terminar un programa de formación de auxiliares de enfermería aprobado por el estado. Combina clases con práctica supervisada. Segundo, aprobar el examen de competencia de tu estado. Tercero, quedar inscrito en el registro estatal de auxiliares de enfermería. Tienes que estar en el registro para trabajar como auxiliar en un hogar de ancianos.",
            "Este curso te prepara. No te da un certificado. Las horas, las tarifas, la revisión de antecedentes y las reglas del examen cambian según el estado y pueden cambiar con el tiempo. Revisa la página del registro de auxiliares de enfermería o del departamento de salud de tu estado, y pregunta a cualquier programa que te interese si está aprobado por el estado.",
            "Algunos programas son gratis o los paga un empleador, por ejemplo un hogar de ancianos que te contrata mientras te formas. Un American Job Center (centro público de empleo de EE. UU.) también puede ayudarte a pagar la formación. Pregunta antes de pagar."
          ],
          steps: ["Busca en internet el nombre de tu estado más \"nurse aide registry\" (registro de auxiliares de enfermería).", "Abre el resultado del sitio del gobierno de tu estado (muchas veces termina en .gov).", "Anota los pasos, el examen y las reglas sobre revisión de antecedentes.", "Anota dos programas aprobados por el estado cerca de ti y revisa la página propia de cada uno."],
          words: [["CNA", "auxiliar de enfermería certificado: un auxiliar que aprobó el examen estatal y está en el registro del estado."], ["Registro de auxiliares de enfermería", "la lista oficial del estado con los auxiliares que pueden trabajar en hogares de ancianos."], ["Programa aprobado por el estado", "un programa de formación que el estado revisó y autorizó para formar auxiliares de enfermería."], ["Examen de competencia", "el examen estatal que revisa lo que sabes y lo que sabes hacer."]],
          slides: [
            { title: "Qué hace un CNA", bullets: ["Ayuda a bañarse, vestirse, comer y moverse", "Toma los signos vitales y se fija en los cambios", "Informa a la enfermera"] },
            { title: "Tres pasos en la mayoría de los estados", bullets: ["1. Terminar un programa de formación aprobado por el estado", "2. Aprobar el examen de competencia estatal", "3. Quedar inscrito en el registro de auxiliares de enfermería"] },
            { title: "Este curso te prepara", bullets: ["No da un certificado", "Reglas, horas y tarifas cambian según el estado", "Revisa la página del registro de tu estado"] },
            { title: "Cómo pagar la formación", bullets: ["Algunos empleadores pagan mientras te formas", "Un American Job Center puede ayudar", "Pregunta antes de pagar"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Auxiliares de enfermería y asistentes", url: "https://www.bls.gov/ooh/healthcare/nursing-assistants.htm" },
            { name: "CareerOneStop: Encontrar un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Encuentra la página del registro de auxiliares de enfermería o del departamento de salud de tu estado. En papel, escribe los tres pasos de tu estado, la dirección de la página y una regla que no conocías (por ejemplo, sobre la revisión de antecedentes).",
          youCanNow: "enumerar los pasos para llegar a ser CNA en tu estado y encontrar la página oficial que pone las reglas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué paso viene después de terminar un programa de formación aprobado por el estado?", options: ["Empezar a dar medicamentos", "Aprobar el examen de competencia estatal", "Abrir tu propia clínica", "Comprar un certificado en internet"], answer: 1, why: "Después del programa, apruebas el examen estatal y luego quedas inscrito en el registro." },
            { objective: "O1", q: "¿Dónde revisas las reglas de CNA de tu estado?", options: ["En una publicación de redes sociales", "Con un amigo que lo hizo hace años", "En la página del registro de auxiliares de enfermería o del departamento de salud de tu estado", "En cualquier anuncio que diga \"certifícate rápido\""], answer: 2, why: "El estado pone las reglas, así que su página oficial es la que debes creer." }
          ]
        },
        {
          title: "Manos limpias y guantes: frenar la propagación de gérmenes",
          objectives: ["O2"],
          minutes: 5,
          goal: "Elegir cuándo limpiarte las manos y de qué manera hacerlo.",
          text: [
            "Tener las manos limpias es la forma más importante de evitar que los gérmenes se propaguen en un lugar de cuidado. Las personas que cuidas muchas veces son mayores o están enfermas, así que los gérmenes les pueden hacer más daño.",
            "Los CDC (Centros para el Control y la Prevención de Enfermedades de EE. UU.) dicen que el personal de salud debe limpiarse las manos justo antes de tocar a un paciente, después de tocar a un paciente o sus cosas, después del contacto con sangre o líquidos del cuerpo, y justo después de quitarse los guantes.",
            "El desinfectante de manos a base de alcohol es lo normal cuando tus manos no se ven sucias. Frótalo por todas partes hasta que las manos estén secas, lo que toma unos 20 segundos. Usa agua y jabón cuando tus manos se vean sucias, antes de comer y después de ir al baño. Frota cada parte de las manos y los dedos.",
            "Los guantes ayudan, pero no reemplazan las manos limpias. Usa un par nuevo para cada residente, nunca los laves para volver a usarlos, y límpiate las manos en cuanto te los quites. Tu programa te enseñará a ponerte y quitarte guantes, batas y mascarillas en el orden correcto."
          ],
          steps: ["Límpiate las manos justo antes de tocar a un residente.", "Ponte guantes si puedes tocar sangre, líquidos del cuerpo o piel lastimada.", "Quítate los guantes sin tocar la parte de afuera con la piel descubierta.", "Límpiate las manos justo después de quitarte los guantes y antes de salir de la habitación."],
          words: [["Higiene de manos", "limpiarte las manos con desinfectante de manos o con agua y jabón."], ["Control de infecciones", "los pasos que sigue el personal de salud para evitar que los gérmenes se propaguen."], ["EPP", "equipo de protección personal: guantes, batas, mascarillas y protección para los ojos."]],
          slides: [
            { title: "Cuándo limpiarte las manos", bullets: ["Justo antes de tocar a un residente", "Después de tocar a un residente o sus cosas", "Después de sangre o líquidos del cuerpo", "Justo después de quitarte los guantes"] },
            { title: "De qué manera", bullets: ["Manos no sucias: desinfectante, frota hasta que se sequen", "Manos que se ven sucias: agua y jabón", "Agua y jabón antes de comer y después del baño"] },
            { title: "Guantes", bullets: ["No reemplazan las manos limpias", "Un par nuevo para cada residente", "Manos limpias en cuanto te los quitas"] }
          ],
          sources: [{ name: "CDC: Seguridad clínica: higiene de manos para el personal de salud", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }],
          tryIt: "Practica en el lavabo de tu casa. Lávate con agua y jabón, frotando las palmas, el dorso, entre los dedos, los pulgares, las puntas de los dedos y las muñecas. Luego escribe en una tarjeta los cuatro momentos en que un CNA debe limpiarse las manos y guárdala para estudiar.",
          youCanNow: "decir cuándo un CNA se limpia las manos, elegir entre desinfectante o agua y jabón, y usar guantes sin saltarte la limpieza de manos.",
          quickCheck: [
            { objective: "O2", q: "Tus manos se ven sucias después de ayudar a un residente. ¿Qué usas?", options: ["Solo desinfectante de manos", "Una toalla de papel seca", "Nada hasta tu descanso", "Agua y jabón"], answer: 3, why: "Agua y jabón es lo que se usa cuando las manos se ven sucias." },
            { objective: "O2", q: "Acabas de quitarte los guantes. ¿Qué haces después?", options: ["Limpiarte las manos", "Guardar los guantes en el bolsillo para volver a usarlos", "Tocar al siguiente residente", "Nada, porque usaste guantes"], answer: 0, why: "Los guantes no reemplazan las manos limpias; límpialas justo después de quitártelos." }
          ]
        },
        {
          title: "Derechos de los residentes, privacidad y cómo reportar el maltrato",
          objectives: ["O3"],
          minutes: 5,
          goal: "Identificar cuándo no se respetan los derechos o la privacidad de un residente y decir a quién le informas.",
          text: [
            "Las personas que cuidas tienen derechos. Eligen qué ponerse y cuándo descansar cuando pueden. Tienen privacidad cuando se bañan o usan el baño. Se les habla con respeto y se les llama por el nombre que prefieren. Toca la puerta, di quién eres y explica lo que vas a hacer.",
            "La información de salud es privada. La protege una ley federal llamada HIPAA. Comparte la información de un residente solo con el equipo de cuidado que la necesita para su trabajo. No hables de los residentes en el pasillo, en casa ni en redes sociales, y nunca publiques fotos de ellos.",
            "El maltrato y el descuido pueden ser físicos, emocionales, sexuales o económicos, como quitarle dinero a alguien. Las señales de alerta incluyen moretones que nadie puede explicar, llagas por presión, mala higiene, una persona que parece tener miedo o estar retraída, o un cambio repentino con su dinero.",
            "Si ves o sospechas maltrato, díselo de inmediato a tu enfermera o supervisor. En muchos estados, los auxiliares de enfermería están obligados a reportar el maltrato que sospechan. Si alguien está en peligro en este momento, llama al 911. El Long-Term Care Ombudsman (defensor de los residentes de cuidados a largo plazo) de tu estado también ayuda a los residentes de hogares de ancianos."
          ],
          steps: ["Toca la puerta, di tu nombre y explica lo que vas a hacer.", "Cierra la cortina o la puerta para el cuidado privado.", "Comparte información solo con el equipo de cuidado.", "Informa de inmediato a la enfermera cualquier señal de maltrato o descuido."],
          words: [["HIPAA", "una ley federal que protege la privacidad de la información de salud de las personas."], ["Descuido", "no darle a una persona el cuidado que necesita, como comida, aseo o cambios de posición."], ["Ombudsman (defensor del residente)", "una persona que defiende a los residentes de hogares de ancianos y ayuda a resolver problemas."], ["Denunciante obligatorio", "un trabajador al que la ley obliga a reportar el maltrato que sospecha."]],
          slides: [
            { title: "Respeto cada vez", bullets: ["Toca la puerta y di quién eres", "Explica antes de empezar", "Ofrece opciones cuando puedas", "Cierra la cortina para el cuidado privado"] },
            { title: "Privacidad (HIPAA)", bullets: ["Comparte solo con el equipo de cuidado", "Nada de hablar en pasillos ni en casa", "Nada de fotos ni publicaciones en redes sociales"] },
            { title: "Señales de maltrato o descuido", bullets: ["Moretones que nadie puede explicar", "Llagas por presión o mala higiene", "Miedo, retraimiento o cambios repentinos con el dinero"] },
            { title: "Lo que haces", bullets: ["Díselo de inmediato a tu enfermera o supervisor", "Peligro ahora: llama al 911", "El ombudsman también ayuda a los residentes"] }
          ],
          sources: [
            { name: "MedlinePlus: Maltrato de personas mayores", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "MedlinePlus: Derechos del paciente", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Lee esta historia inventada: \"Un compañero de trabajo publica en redes sociales una foto graciosa del Sr. Lee, un residente, y te cuenta que la familia del Sr. Lee nunca lo visita.\" Escribe dos problemas que ves y lo que harías con cada uno.",
          youCanNow: "notar cuándo no se respetan los derechos o la privacidad de un residente e informarlo a la persona correcta.",
          quickCheck: [
            { objective: "O3", q: "Un amigo te pregunta cómo está un residente que conoce. ¿Qué le dices?", options: ["Le cuentas los detalles de salud del residente", "Le muestras el expediente", "Le dices que no puedes compartir información de los residentes", "Le mandas una foto"], answer: 2, why: "La información de salud es privada y solo va al equipo de cuidado." },
            { objective: "O3", q: "Ves moretones en un residente que nadie puede explicar. ¿Qué haces?", options: ["Esperas una semana a ver si se quitan", "Se lo dices de inmediato a tu enfermera o supervisor", "Le pides al residente que lo guarde en secreto", "Lo publicas en internet"], answer: 1, why: "El posible maltrato se informa de inmediato a la enfermera o al supervisor." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El camino a CNA y lo básico del cuidado seguro",
        questions: [
          { objective: "O1", q: "¿En qué tiene que estar un auxiliar de enfermería para trabajar en un hogar de ancianos?", options: ["En un grupo de redes sociales", "En el registro estatal de auxiliares de enfermería", "En la lista de socios de un gimnasio", "En una bolsa de trabajo privada"], answer: 1, why: "Los auxiliares de enfermería tienen que estar en el registro estatal para trabajar en un hogar de ancianos." },
          { objective: "O1", q: "Un sitio web dice \"Obtén tu certificado de CNA en internet en un día\". ¿Qué es cierto?", options: ["Es el camino real más rápido", "Reemplaza el examen estatal", "Primero revisa la lista de programas aprobados del estado", "Todos los estados lo aceptan"], answer: 2, why: "Solo un programa aprobado por el estado y el examen estatal llevan al registro; revisa la página propia del estado." },
          { objective: "O2", q: "¿Cuándo debe limpiarse las manos un CNA?", options: ["Justo antes de tocar a un residente", "Solo al empezar el turno", "Solo cuando las manos se ven sucias", "Solo cuando los guantes se rompen"], answer: 0, why: "Los CDC dicen que hay que limpiarse las manos justo antes de tocar a un paciente, entre otros momentos." },
          { objective: "O2", q: "¿Por qué te limpias las manos aunque hayas usado guantes?", options: ["Los guantes dejan las manos más limpias", "Es solo para aparentar", "Los guantes se reutilizan, así que no importa", "Los guantes pueden tener agujeritos y los gérmenes llegan a las manos al quitártelos"], answer: 3, why: "Los guantes no reemplazan las manos limpias; los gérmenes pueden llegar a tus manos." },
          { objective: "O3", q: "Antes de ayudar a bañarse a un residente, ¿qué haces?", options: ["Empiezas rápido sin hablar", "Tocas la puerta, dices quién eres, explicas y cierras la cortina", "Dejas la puerta abierta para que otros ayuden", "Le pides al compañero de cuarto del residente que mire"], answer: 1, why: "Tocar la puerta, explicar y cerrar la cortina protegen la dignidad y la privacidad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Cuidados diarios, reportes y tu plan de examen",
      lessons: [
        {
          title: "Cuidados diarios seguros: mover, caminar y comidas",
          objectives: ["O4"],
          minutes: 6,
          goal: "Poner en el orden correcto los pasos de seguridad de las tareas de cuidado diario.",
          text: [
            "Toda tarea de cuidado empieza igual: límpiate las manos, di quién eres, explica lo que vas a hacer, da privacidad y revisa el plan de cuidados. Toda tarea termina igual también: deja el timbre de llamada al alcance, la cama baja y con freno, y límpiate las manos.",
            "Las personas que se quedan mucho tiempo en la misma posición pueden tener llagas por presión, también llamadas úlceras de cama, sobre las partes con hueso como las caderas, los talones y la espalda. MedlinePlus dice que hay que cambiar de posición más o menos cada dos horas y mantener la piel limpia y seca. Sigue el horario de cambios de posición del plan de cuidados.",
            "Las caídas son un gran riesgo. Mantén el piso despejado, el timbre de llamada cerca y la cama baja. Asegúrate de que el residente tenga calzado antideslizante. Pon el freno a las ruedas de la silla de ruedas y de la cama antes de un traslado. Usa el cinturón de marcha y el número de ayudantes que diga el plan de cuidados.",
            "Protege tu propia espalda. Dobla las rodillas, mantén cerca a la persona o el objeto y gira con los pies en vez de torcerte. Nunca levantes a una persona tú solo si el plan dice dos personas o una grúa. Vas a practicar los traslados solo en tu programa supervisado."
          ],
          steps: ["Límpiate las manos, di quién eres y explica la tarea.", "Revisa el plan de cuidados y da privacidad.", "Pon el freno a las ruedas y baja o sube la cama a una altura segura.", "Haz la tarea como dice el plan de cuidados, con ayuda si hace falta.", "Deja la cama baja, el timbre de llamada al alcance y límpiate las manos."],
          words: [["Actividades de la vida diaria (AVD)", "el autocuidado de todos los días: bañarse, vestirse, comer, usar el baño y moverse."], ["Plan de cuidados", "el plan escrito de la enfermera que dice qué cuidados recibe cada residente."], ["Llaga por presión", "piel dañada por quedarse demasiado tiempo en la misma posición, también llamada úlcera de cama."], ["Cinturón de marcha", "un cinturón fuerte que se pone en la cintura de una persona para que un ayudante la sujete mientras camina o se mueve."], ["Mecánica corporal", "usar el cuerpo de forma segura para no lastimarte la espalda."]],
          slides: [
            { title: "Al empezar cada tarea", bullets: ["Límpiate las manos y di quién eres", "Explica lo que vas a hacer", "Da privacidad y revisa el plan de cuidados"] },
            { title: "Prevenir llagas por presión", bullets: ["Cambiar de posición más o menos cada 2 horas", "Mantener la piel limpia y seca", "Seguir el horario de cambios de posición"] },
            { title: "Prevenir caídas", bullets: ["Piso despejado, cama baja, timbre cerca", "Calzado antideslizante", "Frenar las ruedas antes de un traslado"] },
            { title: "Proteger tu espalda", bullets: ["Dobla las rodillas y mantén la carga cerca", "Gira con los pies, no te tuerzas", "Pide ayuda cuando el plan dice dos personas"] },
            { title: "Al terminar cada tarea", bullets: ["Cama baja y con freno", "Timbre de llamada al alcance", "Límpiate las manos"] }
          ],
          sources: [
            { name: "MedlinePlus: Úlceras por presión", url: "https://medlineplus.gov/pressuresores.html" },
            { name: "MedlinePlus: Caídas", url: "https://medlineplus.gov/falls.html" }
          ],
          tryIt: "Escribe estos pasos en tarjetas, mézclalos y luego ponlos en orden: \"Frenar las ruedas de la silla de ruedas\", \"Limpiarte las manos\", \"Explicar lo que vas a hacer\", \"Dejar el timbre de llamada al alcance\", \"Revisar el plan de cuidados\". Luego compara tu orden con la lección.",
          youCanNow: "poner en el orden correcto los pasos de seguridad del cuidado diario y explicar cómo evitan caídas, llagas y lesiones de espalda.",
          quickCheck: [
            { objective: "O4", q: "¿Qué haces antes de ayudar a un residente a pasar de la cama a una silla de ruedas?", options: ["Quitarle los zapatos al residente", "Subir la cama lo más alto posible", "Frenar las ruedas de la silla y de la cama", "Apagar las luces"], answer: 2, why: "Las ruedas frenadas evitan que la silla o la cama se muevan durante un traslado." },
            { objective: "O4", q: "El plan de cuidados dice dos personas para un traslado, pero estás solo. ¿Qué haces?", options: ["Hacerlo solo para ahorrar tiempo", "Esperar ayuda o preguntarle a la enfermera", "Pedirle al residente que lo intente solo", "Saltarte el traslado ese día sin decirle a nadie"], answer: 1, why: "Seguir el plan te protege a ti y al residente; consigue ayuda o pregúntale a la enfermera." }
          ]
        },
        {
          title: "Observar, medir e informar",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escribir una nota corta con hechos sobre un cambio e informarla a la enfermera.",
          text: [
            "Ves a los residentes más que nadie, así que muchas veces eres el primero en notar un cambio. Tu trabajo es observar, anotar e informar. La enfermera decide qué significa.",
            "Los cuatro signos vitales principales son la presión arterial, el pulso (ritmo del corazón), la frecuencia respiratoria y la temperatura. Vas a aprender a medirlos en tu programa y a practicar con tus compañeros de clase con supervisión.",
            "Escribe lo que viste, oíste o mediste, no lo que crees que significa. \"Comió la mitad del almuerzo. Dijo: 'Me duele el estómago'. Se agarra el estómago.\" es mejor que \"Parece enferma.\" Escribe la hora y firma con tu nombre.",
            "Algunos cambios hay que informarlos de inmediato: dolor nuevo, dificultad para respirar, una caída, un cambio en qué tan despierta o confundida está una persona, o un cambio grande en un signo vital. Si tienes dudas, díselo a la enfermera."
          ],
          steps: ["Nota el cambio: lo que ves, oyes o mides.", "Escribe los hechos, la hora y tu nombre.", "Infórmalo de inmediato a la enfermera si es nuevo o grave.", "Anota que lo informaste y a quién."],
          words: [["Signos vitales", "medidas de funciones básicas del cuerpo: presión arterial, pulso, frecuencia respiratoria y temperatura."], ["Objetivo", "hechos que puedes ver, oír, medir o contar."], ["Subjetivo", "lo que el residente te dice que siente, escrito con sus palabras."], ["Expediente", "el registro de cuidados del residente."]],
          slides: [
            { title: "Observar, anotar, informar", bullets: ["Tú notas los cambios primero", "Tú anotas los hechos", "La enfermera decide qué significan"] },
            { title: "Cuatro signos vitales", bullets: ["Presión arterial", "Pulso (ritmo del corazón)", "Frecuencia respiratoria", "Temperatura"] },
            { title: "Escribe hechos, no suposiciones", bullets: ["Bien: \"Comió la mitad del almuerzo. Dijo: 'Me duele el estómago'.\"", "Mal: \"Parece enferma.\"", "Agrega la hora y tu nombre"] },
            { title: "Informa de inmediato", bullets: ["Dolor nuevo o dificultad para respirar", "Una caída", "Más confundido o dormido que de costumbre"] }
          ],
          sources: [{ name: "MedlinePlus: Signos vitales", url: "https://medlineplus.gov/vitalsigns.html" }],
          tryIt: "Solo para practicar, con una residente inventada: \"La Sra. Rivera normalmente camina al desayuno. Hoy a las 8:15 se quedó en la cama, dijo 'Me siento mareada' y no comió.\" Escribe una nota de tres líneas con hechos y una oración que le dirías a la enfermera.",
          youCanNow: "escribir una nota corta con hechos sobre un cambio que notas e informarla a la enfermera.",
          quickCheck: [
            { objective: "O5", q: "¿Qué nota está escrita de la forma correcta?", options: ["\"Se está portando difícil.\"", "\"Seguramente se está enfermando.\"", "\"Se ve bien, creo.\"", "\"10:30. No quiso almorzar. Dijo: 'Siento el pecho apretado'.\""], answer: 3, why: "Da la hora, lo que pasó y las propias palabras del residente." },
            { objective: "O5", q: "De pronto un residente está mucho más confundido que de costumbre. ¿Qué haces?", options: ["Se lo dices de inmediato a la enfermera", "Esperas hasta el final de tu turno", "Le das un medicamento del carrito", "Se lo dices solo a su compañero de cuarto"], answer: 0, why: "Un cambio repentino en el estado de alerta o la confusión se informa de inmediato a la enfermera." }
          ]
        },
        {
          title: "Prepararte para el examen estatal: tu plan de estudio",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Armar un plan de estudio y de examen con fechas reales para el examen de CNA de tu estado.",
          text: [
            "En la mayoría de los estados el examen de CNA tiene dos partes: un examen escrito (algunos estados lo ofrecen leído en voz alta) y un examen de habilidades en el que muestras algunas habilidades de cuidado ante un evaluador. La página del registro de tu estado o de la empresa del examen dice las partes exactas, la lista de habilidades y cómo inscribirte.",
            "Usa el manual oficial del candidato si tu estado tiene uno. Enumera las habilidades, los pasos en los que se fija el evaluador y qué llevar el día del examen. También ayudan las preguntas de práctica gratis de tu programa.",
            "Estudia un poco cada día. Practica las habilidades en clase o en el laboratorio abierto, donde un instructor te puede observar. Di cada paso en voz alta, incluso los que la gente olvida: limpiarse las manos, dar privacidad y dejar el timbre de llamada al alcance.",
            "Planea la parte práctica: tu identificación, cómo vas a llegar al lugar del examen, el cuidado de tus hijos y el permiso en el trabajo. Escribe las fechas en un calendario."
          ],
          steps: ["Busca en la página oficial las partes del examen de tu estado y el manual del candidato.", "Haz una lista de las habilidades que más necesitas practicar.", "Fija una hora diaria de estudio y dos fechas de examen de práctica.", "Escribe la fecha del examen, qué llevar y cómo vas a llegar."],
          words: [["Manual del candidato", "la guía oficial del estado o de la empresa del examen que explica el examen."], ["Evaluador", "la persona que observa y califica tu examen de habilidades."], ["Examen de habilidades", "la parte del examen en la que muestras habilidades de cuidado paso a paso."]],
          slides: [
            { title: "Dos partes en la mayoría de los estados", bullets: ["Un examen escrito (algunos estados lo ofrecen leído en voz alta)", "Un examen de habilidades observado por un evaluador", "La página de tu estado tiene los detalles"] },
            { title: "Usa materiales oficiales", bullets: ["El manual del candidato y la lista de habilidades", "Preguntas de práctica de tu programa", "Practica habilidades donde un instructor te pueda observar"] },
            { title: "Pasos que la gente olvida", bullets: ["Limpiarse las manos", "Dar privacidad", "Timbre de llamada al alcance, cama baja"] },
            { title: "Planea el día del examen", bullets: ["Identificación y qué llevar", "Transporte y cuidado de los hijos", "Permiso en el trabajo"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Auxiliares de enfermería y asistentes (cómo llegar a serlo)", url: "https://www.bls.gov/ooh/healthcare/nursing-assistants.htm#tab-4" }
          ],
          tryIt: "Tarea final: haz tu plan de estudio y de examen de CNA de una página. Incluye la página oficial de tu estado, dos programas aprobados con su costo y fecha de inicio tomados de sus propias páginas, las partes del examen, un horario de estudio semanal con fechas, las cinco habilidades que más vas a practicar y una persona a la que le vas a preguntar cuando tengas una duda.",
          youCanNow: "armar un plan de estudio y de examen con fechas que cubra todas las partes del examen de CNA de tu estado.",
          quickCheck: [
            { objective: "O6", q: "¿Dónde encuentras las habilidades exactas del examen de tu estado?", options: ["En un comentario cualquiera de un video", "En el manual oficial del candidato o en la página del registro", "En lo que adivine un amigo", "El examen no lo dice"], answer: 1, why: "El manual oficial o la página del registro enumeran las habilidades y lo que revisa el evaluador." },
            { objective: "O6", q: "¿Qué plan de estudio es el más fuerte?", options: ["Estudiar la noche antes del examen", "Estudiar solo la parte escrita", "Estudio diario, práctica de habilidades en clase y exámenes de práctica con fechas", "No practicar y esperar lo mejor"], answer: 2, why: "El estudio constante, la práctica supervisada de habilidades y los exámenes de práctica con fecha cubren todas las partes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Cuidados diarios, reportes y tu plan de examen",
        questions: [
          { objective: "O4", q: "Más o menos, ¿cada cuánto se debe cambiar de posición a una persona que no puede moverse, a menos que el plan de cuidados diga otra cosa?", options: ["Una vez al día", "Una vez a la semana", "Solo cuando lo pide", "Más o menos cada dos horas"], answer: 3, why: "MedlinePlus dice que hay que cambiar de posición más o menos cada dos horas para ayudar a prevenir las llagas por presión." },
          { objective: "O4", q: "¿Cuál es una mecánica corporal segura?", options: ["Doblarte por la cintura y torcerte", "Doblar las rodillas y mantener la carga cerca", "Levantar con los brazos estirados hacia adelante", "Levantar rápido y solo a una persona pesada"], answer: 1, why: "Doblar las rodillas y mantener la carga cerca protege tu espalda." },
          { objective: "O5", q: "¿Cuál de estos es un signo vital?", options: ["El pulso", "La comida favorita", "La talla de zapatos", "El número de habitación"], answer: 0, why: "El pulso, la presión arterial, la frecuencia respiratoria y la temperatura son los signos vitales principales." },
          { objective: "O5", q: "¿Quién decide qué significa un cambio en un residente?", options: ["El CNA solo", "El compañero de cuarto del residente", "La enfermera, después de que el CNA lo informa", "Nadie"], answer: 2, why: "El CNA observa e informa; la enfermera decide qué significa." },
          { objective: "O6", q: "¿Qué debe incluir un plan para el examen de CNA?", options: ["Solo la fecha del examen", "Horas de estudio, exámenes de práctica, la fecha del examen y qué llevar", "Solo la dirección del programa", "Una lista de programas de televisión"], answer: 1, why: "Un plan completo cubre el estudio, la práctica y los detalles del día del examen." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para auxiliar de enfermería certificado (CNA)",
    questions: [
      { objective: "O1", q: "¿Cuál es un trabajo principal de un auxiliar de enfermería?", options: ["Ayudar a las personas a bañarse, vestirse, comer y moverse", "Escribir recetas médicas", "Hacer cirugías", "Decidir un diagnóstico"], answer: 0, why: "Los CNA ayudan en la vida diaria e informan a la enfermera." },
      { objective: "O1", q: "¿Qué hace este curso?", options: ["Te da un certificado de CNA", "Te inscribe en el registro", "Te prepara para un programa aprobado por el estado y para el examen estatal", "Reemplaza el examen de habilidades"], answer: 2, why: "El curso te prepara; el programa estatal, el examen y el registro te convierten en CNA." },
      { objective: "O1", q: "¿Cuáles son los tres pasos en la mayoría de los estados?", options: ["Comprar un uniforme, presentar una solicitud, empezar a trabajar", "Programa aprobado, examen estatal, inscripción en el registro", "Prueba en internet, entrevista, credencial", "Ver videos, firmar un formulario, trabajar"], answer: 1, why: "La mayoría de los estados piden un programa aprobado, el examen de competencia y el registro." },
      { objective: "O1", q: "Las reglas sobre la revisión de antecedentes para auxiliares de enfermería:", options: ["Son iguales en todas partes", "No existen", "Son solo para enfermeras", "Cambian según el estado, así que revisa la página de tu estado"], answer: 3, why: "Cada estado pone sus propias reglas, así que revisa la página oficial." },
      { objective: "O2", q: "Tus manos no se ven sucias y vas a tocar a un residente. ¿Qué usas?", options: ["Nada", "Desinfectante de manos a base de alcohol, frotando hasta que se seque", "Crema", "Una toallita húmeda de tu bolsa"], answer: 1, why: "El desinfectante de manos es lo normal cuando las manos no se ven sucias." },
      { objective: "O2", q: "¿Cómo se usan bien los guantes?", options: ["Un par nuevo para cada residente, y luego manos limpias", "Un solo par para todo el turno", "Lavarlos y volver a usarlos", "Usarlos en vez de limpiarse las manos"], answer: 0, why: "Guantes nuevos para cada residente, y manos limpias después de quitártelos." },
      { objective: "O2", q: "¿Cuándo debes usar agua y jabón en vez de desinfectante de manos?", options: ["Nunca", "Solo los fines de semana", "Cuando las manos se ven sucias y después de ir al baño", "Solo antes de salir del trabajo"], answer: 2, why: "Los CDC dicen agua y jabón cuando las manos se ven sucias, antes de comer y después de ir al baño." },
      { objective: "O3", q: "¿Qué ley protege la privacidad de la información de salud?", options: ["OSHA", "HIPAA", "FMLA", "ADA"], answer: 1, why: "HIPAA protege la privacidad de la información de salud." },
      { objective: "O3", q: "Un compañero de trabajo publica en internet una foto de un residente. Esto es:", options: ["Está bien si es graciosa", "Está bien si la cara se ve borrosa", "Bueno para el lugar", "Un problema de privacidad que hay que reportar"], answer: 3, why: "Las fotos de residentes en redes sociales violan su privacidad; repórtalo." },
      { objective: "O3", q: "¿Cuál es una posible señal de descuido?", options: ["Ropa limpia", "Un residente que sonríe", "Llagas por presión y mala higiene", "Una visita de la familia"], answer: 2, why: "Las llagas por presión y la mala higiene pueden ser señales de que no se están dando los cuidados." },
      { objective: "O3", q: "Un residente quiere ponerse hoy una camisa roja, no la azul que tú elegiste. ¿Qué haces?", options: ["Lo ayudas a ponerse la camisa roja", "Insistes en la azul", "Le dices que no puede elegir", "No lo vistes"], answer: 0, why: "Los residentes tienen derecho a tomar decisiones sobre su propio cuidado cuando pueden." },
      { objective: "O4", q: "¿Qué haces al final de cada tarea de cuidado?", options: ["Dejar la cama alta", "Quitar el timbre de llamada", "Dejar la cama baja, el timbre al alcance y limpiarte las manos", "Dejar la puerta abierta para revisar"], answer: 2, why: "Una cama baja, el timbre de llamada al alcance y las manos limpias mantienen seguro al residente." },
      { objective: "O4", q: "Las llagas por presión suelen formarse sobre:", options: ["Partes con hueso como las caderas y los talones", "El pelo", "Las uñas", "Los párpados"], answer: 0, why: "Se forman donde el hueso está cerca de la piel y la presión dura demasiado." },
      { objective: "O4", q: "Para prevenir caídas, un residente debe usar:", options: ["Solo calcetines", "Nada en los pies", "Tacones altos", "Calzado antideslizante"], answer: 3, why: "El calzado antideslizante ayuda a prevenir caídas." },
      { objective: "O4", q: "¿Dónde se practican los traslados con las manos?", options: ["En casa con un familiar, tú solo", "En un programa supervisado y aprobado por el estado", "Solo el día del examen", "Solo con un video"], answer: 1, why: "Las habilidades prácticas se aprenden en un programa supervisado, donde un instructor te puede corregir." },
      { objective: "O5", q: "¿Qué nota tiene solo hechos?", options: ["\"Hoy está perezosa.\"", "\"Seguramente es gripe.\"", "\"2:00. Tomó un vaso de agua. Dijo: 'Tengo frío'.\"", "\"Se ve rara.\""], answer: 2, why: "Anota la hora, una cantidad medida y las propias palabras de la residente." },
      { objective: "O5", q: "Un residente se cae pero dice que se siente bien. ¿Qué haces?", options: ["Informar la caída a la enfermera de inmediato", "Ayudarlo a levantarse y no decir nada", "Anotarlo la próxima semana", "Pedirle que no se lo diga a nadie"], answer: 0, why: "Toda caída se informa de inmediato para que la enfermera pueda revisar al residente." },
      { objective: "O5", q: "¿Cuál NO es uno de los cuatro signos vitales principales?", options: ["La temperatura", "La frecuencia respiratoria", "La presión arterial", "El peso de sus zapatos"], answer: 3, why: "Los cuatro signos vitales principales son la presión arterial, el pulso, la frecuencia respiratoria y la temperatura." },
      { objective: "O6", q: "En la mayoría de los estados, el examen de CNA tiene:", options: ["Solo un ensayo", "Una parte escrita y una parte de habilidades", "Solo una entrevista", "Ningún examen"], answer: 1, why: "La mayoría de los estados usan un examen escrito (o leído en voz alta) y un examen de habilidades; revisa la página de tu estado." },
      { objective: "O6", q: "En el examen de habilidades, ¿qué paso suele olvidar la gente?", options: ["Saludar a la familia del evaluador", "Llevar bocadillos", "Limpiarse las manos y dejar el timbre de llamada al alcance", "Ponerse joyas"], answer: 2, why: "Limpiarse las manos, dar privacidad y el timbre de llamada son pasos fáciles de saltar." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [2, 4, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a revisarla.",
    criteria: [
      { name: "Camino oficial del estado", objective: "O1", notYet: "No hay página oficial, o los pasos salieron de un anuncio o de un amigo.", meets: "Enumera los pasos del programa, el examen y el registro tomados de la página oficial del estado, con su dirección.", exceeds: "También anota las reglas del estado sobre revisión de antecedentes y a quién llamar con preguntas." },
      { name: "Programas aprobados", objective: "O1", notYet: "Faltan programas, o no está claro que estén aprobados por el estado.", meets: "Dos programas con su costo y fecha de inicio tomados de sus propias páginas, y la aprobación revisada.", exceeds: "También incluye una opción gratis o pagada por un empleador, o la ayuda de un American Job Center." },
      { name: "Partes del examen cubiertas", objective: "O6", notYet: "Solo la parte escrita, o no hay partes del examen.", meets: "Enumera todas las partes del examen del estado y las cinco habilidades que más va a practicar.", exceeds: "Une cada habilidad con los pasos que la gente suele olvidar, como manos limpias y privacidad." },
      { name: "Horario con fechas", objective: "O6", notYet: "Sin fechas, o una sola sesión de estudio de última hora.", meets: "Horas de estudio semanales, dos fechas de examen de práctica y la fecha del examen en un calendario.", exceeds: "También planea lo necesario para el día del examen: identificación, transporte, cuidado de los hijos y permiso en el trabajo." },
      { name: "Seguridad y reportes", objective: "O5", notYet: "No nombra a ninguna persona a quien informar o preguntar.", meets: "Nombra a la persona a quien preguntar o informar, como el instructor o la enfermera.", exceeds: "Agrega una nota corta de práctica escrita con hechos, no suposiciones." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que se inscriben en un programa de auxiliares de enfermería aprobado por el estado en un plazo de 60 días",
      "Participantes que aprueban el examen de competencia de CNA de su estado y quedan inscritos en el registro",
      "Participantes contratados como auxiliares de enfermería en un plazo de 6 meses (encuesta de seguimiento)",
      "Los programas aliados informan que menos estudiantes abandonan en las primeras semanas"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para encontrar la página del registro estatal",
      "Papel, bolígrafo y tarjetas para las tareas de \"Pruébalo ahora\"",
      "Un lavabo con jabón para practicar el lavado de manos",
      "Un calendario (de papel o en el teléfono) para el plan de estudio",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Antes del curso, busca la página del registro de auxiliares de enfermería de tu estado y una lista de programas aprobados de la zona, y comparte los enlaces.",
      "Nunca dejes que los participantes practiquen traslados o levantamientos entre ellos sin un instructor capacitado y el equipo adecuado.",
      "Di con claridad que este curso no certifica a nadie, y que las reglas, las horas y las tarifas las pone el estado.",
      "Si a un participante le preocupa una condena anterior, indícale las reglas propias del estado y un consejero de reinserción o de asistencia legal.",
      "Califica el plan final con la rúbrica y ayuda a cada participante a contactar un programa aprobado antes de irse."
    ]
  }
};
