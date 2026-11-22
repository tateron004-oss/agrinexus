"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-ai-healthcare-practices.js). See scripts/koachlearn-courses/README.md, "Translations".

const HHS_CLOUD = { name: "HHS: guía sobre HIPAA y la computación en la nube", url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html" };
const HHS_BA = { name: "HHS: socios comerciales (guía de HIPAA)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html" };
const HHS_HIPAA = { name: "HHS: HIPAA para profesionales", url: "https://www.hhs.gov/hipaa/for-professionals/index.html" };

module.exports = {
  id: "smallbiz-ai-healthcare-practices-es",
  lang: "es",
  translationOf: "smallbiz-ai-healthcare-practices",
  category: "Small Business",
  name: "IA para consultorios de salud",
  skills: "Saber cuándo la información de pacientes puede entrar en la IA y cuándo no, Escribir guiones para la recepción, Preparar folletos educativos para pacientes que revisa un profesional clínico, Hacer plantillas de citas y recordatorios, Escribir políticas de la oficina, Fijar reglas de IA para el personal",
  outcome: "usar la IA de forma segura en el trabajo administrativo de un pequeño consultorio de salud: decidir qué tareas pueden usar una herramienta de IA general y cuáles necesitan una herramienta aprobada con un acuerdo de socio comercial, y producir guiones para la recepción, plantillas de recordatorio, un folleto en lenguaje sencillo para que lo revise un profesional clínico y una política de IA para el personal, sin información de pacientes en ninguna herramienta de IA general.",
  about: [
    "Este curso es para dueños, gerentes de oficina y personal de recepción de pequeños consultorios de salud: clínicas familiares, consultorios dentales, consultorios de terapia y consejería, quiroprácticos, fisioterapia, optometría y agencias de salud en el hogar, incluidos muchos consultorios de dueños de minorías que atienden a sus comunidades.",
    "Vas a aprender la regla más importante: la información de salud protegida (PHI) no entra en una herramienta de IA a menos que tu consultorio la haya aprobado y tenga un acuerdo de socio comercial de HIPAA (BAA) con la empresa. Luego vas a usar la IA en las muchas tareas de oficina que no necesitan ninguna información de pacientes.",
    "En este curso, la IA no diagnostica, no da tratamientos ni da consejos médicos. Todo texto de salud dirigido a pacientes lo revisa un profesional clínico con licencia. Este curso no es asesoría legal ni de cumplimiento; consulta la guía de HHS (el Departamento de Salud y Servicios Humanos de EE. UU.) y a tu asesor de cumplimiento. Cada lección dura unos cinco minutos, con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma un kit de IA para el consultorio: una lista de tareas separada en \"sin PHI, se puede usar IA general\" y \"con PHI, solo herramienta aprobada con BAA o sin IA\"; tres guiones telefónicos para la recepción; plantillas de confirmación y recordatorio de citas con espacios en blanco; un folleto para pacientes en lenguaje sencillo sobre un tema general marcado \"para revisión clínica\"; y una política de IA de una página para el personal. Nada de esto contiene información real de pacientes.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños, gerentes de oficina y personal de recepción de consultorios de salud pequeños: clínicas familiares, consultorios dentales, consultorios de terapia y consejería, quiroprácticos, fisioterapia, optometría y agencias de salud en casa, incluidos muchos consultorios de dueños de minorías que atienden a su comunidad.",
    startingPoint: "Manejan la recepción, las citas y el papeleo de la oficina todos los días y conocen lo básico de la privacidad de los pacientes. Muchos han oído de las herramientas de IA o han probado una, pero no están seguros de qué se permite bajo HIPAA.",
    gap: "Escribir en la oficina toma un tiempo que los consultorios pequeños no tienen, pero poner información de pacientes en la herramienta de IA equivocada puede violar las reglas de HIPAA y dañar a los pacientes. Necesitan una regla clara sobre qué tareas pueden usar IA, y guiones, plantillas, folletos y una política para el personal ya listos que dejen fuera la información de los pacientes.",
    constraints: [
      "Nada de PHI en ninguna herramienta de IA general; solo herramientas aprobadas por el consultorio con un acuerdo de socio comercial (BAA)",
      "La IA nunca diagnostica, trata ni da consejos médicos; un profesional clínico con licencia revisa todo texto de salud para pacientes",
      "No es asesoría legal ni de cumplimiento: consulta las guías de HHS y al asesor de cumplimiento del consultorio",
      "Tiempo: recepciones con mucho trabajo, así que cada lección dura unos 5 minutos",
      "Palabras sencillas para el personal y para los materiales de pacientes (nivel de lectura de 6.º grado más o menos)"
    ],
    prerequisites: "Ninguno. Quien no conoce los asistentes de IA puede tomar primero un curso de introducción a la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista de tareas de la oficina", action: "clasificar cada tarea en \"sin PHI, se puede usar IA general\" o \"con PHI, solo herramienta aprobada con BAA o sin IA\"", standard: "poniendo cada tarea con PHI en la segunda columna" },
    { id: "O2", condition: "Con las llamadas comunes de la recepción", action: "escribir guiones telefónicos que manden las llamadas de recetas, síntomas y emergencias al lugar correcto", standard: "con cada guion de emergencia diciendo a la persona que llame al 911, aprobado por el líder clínico" },
    { id: "O3", condition: "Usando espacios en blanco en lugar de datos de pacientes", action: "crear plantillas de confirmación y de recordatorio que no digan el motivo de la cita", standard: "sin información real de pacientes en la herramienta de IA" },
    { id: "O4", condition: "Con un tema general para pacientes", action: "preparar un folleto en lenguaje sencillo y marcarlo para revisión clínica", standard: "a un nivel de lectura de 6.º grado más o menos, con tu línea de contacto y una nota sobre el 911" },
    { id: "O5", condition: "Con una tarea de escritura de la oficina, como una política, un correo o un anuncio de empleo", action: "prepararla con una herramienta de IA general y enumerar cualquier parte que necesite revisión de cumplimiento o de recursos humanos", standard: "sin usar información de pacientes" },
    { id: "O6", condition: "Para tu propio consultorio", action: "escribir una política de IA de una página para el personal con cinco a siete reglas", standard: "que incluya nada de PHI sin BAA, las herramientas aprobadas por nombre, cómo reportar errores y una revisión cada año" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Primero HIPAA, después la recepción",
      lessons: [
        {
          objectives: ["O1"],
          title: "PHI, HIPAA e IA: la regla que va primero",
          minutes: 6,
          goal: "Decidir si una tarea puede usar una herramienta de IA general o necesita una herramienta aprobada con BAA.",
          text: [
            "La información de salud protegida (PHI) es información de salud que puede identificar a un paciente: nombres con enfermedades, fechas de nacimiento, notas del expediente, números de seguro médico, detalles de citas, fotos y más. HIPAA (la ley federal de privacidad de la salud) fija reglas sobre cómo los consultorios deben protegerla.",
            "La guía de HHS dice que cuando una entidad cubierta usa un servicio externo, como un servicio en la nube, para crear, recibir, guardar o enviar PHI, ese servicio es un socio comercial, y el consultorio necesita un acuerdo de socio comercial (BAA) con él. Usar un servicio así para PHI sin un BAA viola las reglas de HIPAA. La mayoría de las herramientas de chat de IA gratis y generales no firman BAA con usuarios individuales.",
            "Así que separa cada tarea: si necesita PHI, usa solo una herramienta que tu consultorio haya aprobado y con la que tenga un BAA, o no uses IA. Si no necesita PHI, como un folleto general, un guion telefónico o una política de la oficina, una herramienta de IA general puede ayudar. Si tienes dudas, pregunta a tu encargado de cumplimiento o de privacidad."
          ],
          steps: ["Haz una lista de las tareas de oficina en las que quieres ayuda.", "Pregúntate: ¿esta tarea necesita alguna información de pacientes?", "Sin PHI: una herramienta de IA general puede ayudar.", "Con PHI: solo una herramienta aprobada con BAA, o sin IA.", "Si no estás seguro: pregunta a tu encargado de privacidad o cumplimiento."],
          words: [["PHI", "información de salud protegida: información de salud que puede identificar a un paciente."], ["HIPAA", "la ley federal de EE. UU. con reglas para proteger la información de salud."], ["Acuerdo de socio comercial (BAA)", "un contrato en el que un proveedor acepta proteger la PHI según HIPAA."], ["Entidad cubierta", "un plan de salud, una cámara de compensación o un proveedor de salud que debe cumplir HIPAA."]],
          slides: [
            { title: "Qué cuenta como PHI", bullets: ["Nombres con enfermedades, fechas de nacimiento", "Notas del expediente, números de seguro, citas", "Fotos y otros datos que identifican"] },
            { title: "HHS sobre servicios externos", bullets: ["Un servicio que maneja PHI es un socio comercial", "El consultorio necesita un BAA con él", "PHI sin BAA viola las reglas de HIPAA"] },
            { title: "Separa cada tarea", bullets: ["Sin PHI: la IA general puede ayudar", "Con PHI: solo herramienta aprobada con BAA, o sin IA", "Si dudas: pregunta a tu encargado de cumplimiento"] }
          ],
          sources: [HHS_CLOUD, HHS_BA, HHS_HIPAA],
          tryIt: "Haz una lista de diez tareas de tu oficina. Sepáralas en dos columnas: \"Sin PHI: se puede usar IA general\" y \"Con PHI: solo herramienta aprobada con BAA o sin IA\".",
          youCanNow: "decidir si una tarea de oficina puede usar una herramienta de IA general o necesita una herramienta aprobada con BAA.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál de estos es PHI?", options: ["El número de seguro médico de un paciente", "El horario de tu oficina", "Un anuncio de empleo para recepcionista", "Un folleto general sobre el lavado de manos"], answer: 0, why: "El número de seguro médico es información de salud que puede identificar a un paciente." },
            { objective: "O1", q: "Quieres que la IA te ayude a escribir un guion telefónico sobre el estacionamiento. ¿Qué herramienta puedes usar?", options: ["Solo una herramienta con BAA", "Una herramienta de IA general, porque no necesita PHI", "Ninguna herramienta de IA", "Solo el teléfono del paciente"], answer: 1, why: "Las tareas que no necesitan información de pacientes pueden usar una herramienta de IA general." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Guiones para el teléfono y los mensajes de la recepción",
          minutes: 5,
          goal: "Escribir guiones claros y amables para las llamadas comunes en la recepción.",
          text: [
            "El personal de recepción atiende las mismas llamadas todos los días: preguntas de pacientes nuevos, qué seguros aceptan, cómo llegar y dónde estacionarse, cambios de cita, pedidos de surtido de recetas, pedidos de expedientes y alguien que parece estar en una emergencia.",
            "Estos guiones no necesitan información de pacientes, así que una herramienta de IA general puede ayudar: \"Escribe un guion telefónico corto y cálido para un consultorio dental familiar, para un paciente nuevo que pregunta si aceptamos su seguro. Nuestra política: [tu política]. Menos de 80 palabras.\"",
            "Todo guion que toca la atención médica debe pasar la llamada a la persona correcta: las preguntas sobre recetas y síntomas van al personal clínico, y cualquier guion de emergencia le dice a la persona que cuelgue y llame al 911 o vaya a la sala de emergencias más cercana. Pide a tu líder clínico que apruebe estos guiones."
          ],
          steps: ["Haz una lista de tus diez llamadas más comunes.", "Pide a la IA un guion corto para cada una, con tus políticas reales.", "Asegúrate de que las preguntas clínicas pasen al personal clínico.", "Agrega una línea de emergencia: llamar al 911.", "Pide a tu líder clínico que los apruebe."],
          words: [["Guion", "una guía corta de qué decir en una llamada común."], ["Triaje", "decidir qué tan urgente es un problema de salud; lo hace el personal clínico, no la recepción ni la IA."]],
          slides: [
            { title: "Llamadas comunes", bullets: ["Pacientes nuevos y seguros", "Cómo llegar, cambios de cita, expedientes", "Recetas y posibles emergencias"] },
            { title: "No se necesita PHI", bullets: ["La IA general puede escribir el borrador", "Dale tus políticas reales", "Cada uno con menos de unas 80 palabras"] },
            { title: "Pasa las preguntas de atención", bullets: ["Recetas y síntomas -> personal clínico", "Emergencias -> llamar al 911 o ir a urgencias", "El líder clínico aprueba los guiones"] }
          ],
          tryIt: "Pide a la IA tres guiones para la recepción: una pregunta sobre seguros, un cambio de cita y una persona que describe dolor de pecho (que debe indicarle llamar al 911). Márcalos para que tu líder clínico los apruebe.",
          youCanNow: "escribir guiones de recepción amables y claros que pasan las preguntas de atención de forma segura.",
          quickCheck: [
            { objective: "O2", q: "¿A dónde debe mandar un guion de recepción una petición para renovar una receta?", options: ["A la herramienta de IA", "A la oficina de cobros", "Al personal clínico", "Solo a la farmacia de la persona"], answer: 2, why: "Las preguntas de recetas y de síntomas van al personal clínico." },
            { objective: "O2", q: "La IA escribe un guion para alguien que llama con dificultad para respirar que dice \"Le devolvemos la llamada mañana\". ¿Qué haces?", options: ["Lo usas; es amable", "Lo haces más corto", "Lo traduces", "Lo cambias para decirle que cuelgue y llame al 911 o vaya a la sala de emergencias más cercana"], answer: 3, why: "Cada guion de emergencia le dice a la persona que llame al 911 o vaya a la sala de emergencias más cercana." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Plantillas de citas y recordatorios",
          minutes: 5,
          goal: "Hacer plantillas de confirmación y recordatorio de citas que protegen la privacidad.",
          text: [
            "Las plantillas ahorran tiempo y reducen las citas perdidas. Escríbelas con espacios en blanco: \"Hola, [nombre], te escribe [nombre del consultorio] para confirmar tu cita el [fecha] a las [hora]. Responde C para confirmar o llama al [teléfono] para cambiarla.\"",
            "Que los recordatorios digan lo mínimo. No pongas el motivo de la visita ni el tipo de profesional cuando eso revelaría información delicada, como una visita de terapia o de una especialidad. Tu sistema de gestión del consultorio o de mensajes a pacientes llena los datos reales, no la herramienta de IA.",
            "Pide a la IA versiones en otros idiomas que hablan tus pacientes y luego pide a alguien del personal que hable bien el idioma o a un traductor calificado que las revise."
          ],
          steps: ["Pide a la IA plantillas de confirmación, recordatorio y cambio de cita con espacios en blanco.", "Quita todo lo que revele el motivo de la visita.", "Cárgalas en tu sistema de citas, que llena los datos.", "Pide a una persona que hable bien el idioma o calificada que revise las traducciones."],
          words: [["Sistema de gestión del consultorio", "el programa que usa un consultorio para las citas y la facturación."], ["Mínimo necesario", "la idea de HIPAA de usar o compartir solo la información que hace falta para el propósito."]],
          slides: [
            { title: "Plantillas con espacios en blanco", bullets: ["[nombre], [fecha], [hora], [teléfono]", "La herramienta de IA nunca ve los datos reales"] },
            { title: "Recordatorios con lo mínimo", bullets: ["No pongas el motivo de la visita", "Cuidado con las especialidades delicadas", "Tu sistema de citas llena los datos"] },
            { title: "Otros idiomas", bullets: ["La IA hace el borrador de la traducción", "Una persona que hable bien el idioma o calificada la revisa"] }
          ],
          tryIt: "Pide a la IA una plantilla de confirmación, una de recordatorio para el día anterior y una de cambio de cita con espacios en blanco. Quita todo lo que revele por qué viene el paciente.",
          youCanNow: "crear plantillas de citas que cuidan la privacidad con ayuda de la IA.",
          quickCheck: [
            { objective: "O3", q: "¿Qué llena los datos reales del paciente en un recordatorio?", options: ["Tu sistema de manejo del consultorio o de mensajes", "La herramienta de IA general", "La compañía de seguro del paciente", "Un calendario impreso"], answer: 0, why: "Tu sistema de citas o de mensajes llena los datos reales, no la herramienta de IA." },
            { objective: "O3", q: "Una plantilla de recordatorio dice \"su cita de terapia\". ¿Qué cambias?", options: ["Nada", "Quitas la palabra \"terapia\" para no revelar información delicada", "Agregas el diagnóstico", "Agregas el teléfono de la casa del terapeuta"], answer: 1, why: "No pongas el motivo de la cita ni el tipo de profesional cuando eso revelaría información delicada." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Primero HIPAA, después la recepción",
        questions: [
          { objective: "O1", q: "¿Qué es información de salud protegida (PHI)?", options: ["Las indicaciones para estacionarse en tu oficina", "El nombre de un paciente con su diagnóstico", "Un folleto general sobre lavarse las manos", "El horario de tu oficina"], answer: 1, why: "La información de salud que identifica a un paciente es PHI." },
          { objective: "O1", q: "Según HHS, un servicio que guarda PHI para tu consultorio necesita:", options: ["La contraseña de un paciente", "Nada", "Una cuenta de redes sociales", "Un acuerdo de socio comercial"], answer: 3, why: "Los servicios que manejan PHI son socios comerciales y necesitan un BAA." },
          { objective: "O1", q: "Quieres que la IA resuma las notas del expediente de un paciente. Tu consultorio no tiene BAA con la herramienta. ¿Qué haces?", options: ["No usas esa herramienta para eso", "Pegas las notas", "Quitas solo el apellido y las pegas", "Le preguntas a un amigo"], answer: 0, why: "La PHI solo entra en herramientas aprobadas con BAA." },
          { objective: "O2", q: "Una persona que llama describe dolor de pecho. El guion debe:", options: ["Pedir un diagnóstico a la IA", "Darle cita para la próxima semana", "Decirle que llame al 911 o vaya a la sala de emergencias más cercana", "Ponerla en espera"], answer: 2, why: "Las emergencias van al 911." },
          { objective: "O3", q: "¿Qué debe dejar fuera un recordatorio por mensaje de texto?", options: ["La hora", "La fecha", "El motivo de la visita", "El teléfono del consultorio"], answer: 2, why: "Los recordatorios con lo mínimo protegen la privacidad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Materiales para pacientes, trabajo de oficina y reglas para el personal",
      lessons: [
        {
          objectives: ["O4"],
          title: "Folletos para pacientes en lenguaje sencillo, revisados por un profesional clínico",
          minutes: 5,
          goal: "Preparar un folleto general para pacientes con palabras sencillas y mandarlo a revisión clínica.",
          text: [
            "A muchos pacientes les cuesta entender el lenguaje médico. La IA es buena para reescribir información general con palabras sencillas: cómo prepararse para una limpieza dental, qué llevar a la primera visita, consejos generales para mantenerse activo.",
            "Usa solo temas generales, nunca los datos de un paciente en particular. Pide: \"Escribe un folleto de una página, a un nivel de lectura de sexto grado más o menos, sobre cómo prepararse para la primera visita de fisioterapia. Frases cortas, títulos, sin consejos médicos más allá de la preparación general.\"",
            "La IA puede equivocarse en datos de salud. Marca cada borrador \"Para revisión clínica\" y pide a un profesional clínico con licencia que lo revise y apruebe antes de que lo vea cualquier paciente. Agrega la línea de contacto de tu consultorio y una nota para llamar al 911 en caso de emergencia."
          ],
          steps: ["Escoge un tema general que pregunten los pacientes.", "Pide a la IA un borrador en lenguaje sencillo con títulos.", "Márcalo \"Para revisión clínica\".", "Un profesional clínico con licencia lo corrige y lo aprueba.", "Agrega tu línea de contacto y la nota del 911."],
          words: [["Lenguaje sencillo", "escribir de forma que la mayoría de la gente entienda a la primera lectura."], ["Nivel de lectura", "qué tan difícil es leer un texto, muchas veces expresado como un grado escolar."]],
          slides: [
            { title: "Las palabras sencillas ayudan a los pacientes", bullets: ["Prepararse para una visita", "Qué llevar", "Hábitos saludables generales"] },
            { title: "Solo temas generales", bullets: ["Nunca los datos de un paciente en particular", "Pide un nivel de lectura de sexto grado más o menos"] },
            { title: "Revisión clínica", bullets: ["Marca los borradores \"Para revisión clínica\"", "Un profesional clínico con licencia aprueba", "Agrega línea de contacto y nota del 911"] }
          ],
          tryIt: "Pide a la IA un folleto de una página sobre un tema general para tu consultorio. Márcalo \"Para revisión clínica\" y anota dos datos que el profesional clínico debe revisar.",
          youCanNow: "preparar folletos para pacientes en lenguaje sencillo con la IA y mandarlos a aprobación clínica.",
          quickCheck: [
            { objective: "O4", q: "¿Qué tema sirve para un borrador de folleto general con IA?", options: ["Los resultados de laboratorio del Sr. Lee", "Los cambios de medicamentos de un paciente", "Qué llevar a la primera cita", "Un diagnóstico para alguien que llama"], answer: 2, why: "Usa solo temas generales, nunca los datos de un paciente en particular." },
            { objective: "O4", q: "El borrador de folleto de la IA se ve bien. ¿Qué haces antes de que lo vea un paciente?", options: ["Lo imprimes de inmediato", "Lo publicas en el sitio web", "Le preguntas a la IA si está correcto", "Lo marcas \"Para revisión clínica\" y pides que lo apruebe un profesional clínico con licencia"], answer: 3, why: "La IA puede equivocarse en datos de salud, así que un profesional clínico con licencia revisa cada borrador." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Políticas de la oficina, correos y anuncios de empleo",
          minutes: 4,
          goal: "Usar la IA para documentos de oficina que no necesitan información de pacientes.",
          text: [
            "Gran parte de manejar un consultorio es escritura común de negocio: una política de cancelaciones y citas perdidas, un correo al personal sobre un nuevo sistema telefónico, un anuncio de empleo para un asistente médico, una carta de queja a un proveedor, una lista de control para personal nuevo.",
            "Estos no necesitan PHI, así que las herramientas de IA generales pueden escribir el borrador. Dale tus políticas y datos reales: \"Escribe una política amable de citas perdidas para un consultorio de consejería: aviso con 24 horas, cargo de $50 a partir de la segunda cita perdida. Palabras sencillas.\"",
            "Revisa cualquier regla que toque la ley: los cargos, el empleo, la facturación y los derechos de los pacientes pueden estar regulados. Pide a tu asesor de cumplimiento, de recursos humanos o a un abogado que lo revise antes de publicarlo."
          ],
          steps: ["Escoge un documento de oficina sin información de pacientes.", "Dale a la IA los datos reales de tu política.", "Ajústalo a tu estilo.", "Pide a un asesor de cumplimiento, de recursos humanos o legal que revise todo lo regulado."],
          words: [["Política de citas perdidas", "las reglas del consultorio para las citas a las que no llegan los pacientes."], ["Asesor de cumplimiento", "una persona que ayuda a un consultorio a cumplir las leyes y reglas de salud."]],
          slides: [
            { title: "Escritura común de negocio", bullets: ["Política de cancelaciones y citas perdidas", "Correos al personal y anuncios de empleo", "Cartas a proveedores y listas de control"] },
            { title: "Sin PHI: la IA general puede ayudar", bullets: ["Dale tus datos reales", "Ajústalo a tu estilo"] },
            { title: "Revisa los temas regulados", bullets: ["Cargos, empleo, facturación, derechos de los pacientes", "Revisión de cumplimiento, recursos humanos o legal"] }
          ],
          tryIt: "Pide a la IA un borrador de la política de citas perdidas de tu consultorio o de un anuncio de empleo para la recepción. Anota todo lo que necesite revisión de cumplimiento o de recursos humanos.",
          youCanNow: "usar la IA para documentos de oficina que no contienen información de pacientes, con las revisiones correctas.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es escritura normal del negocio que no necesita PHI?", options: ["Una lista de verificación para empleados nuevos", "Una nota del expediente de un paciente", "Una carta con resultados de laboratorio para un paciente", "Una referencia con un diagnóstico"], answer: 0, why: "Las políticas, los correos, los anuncios de empleo y las listas de verificación no necesitan información de pacientes." },
            { objective: "O5", q: "La IA prepara una política por faltar a citas con un cobro. ¿Qué haces antes de publicarla?", options: ["La publicas de inmediato", "Pides que la revise un asesor de cumplimiento, un asesor de recursos humanos o un abogado", "Duplicas el cobro", "Quitas la fecha"], answer: 1, why: "Los cobros y los derechos de los pacientes pueden estar regulados, así que primero los revisa un asesor." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escribir la política de IA de tu consultorio",
          minutes: 5,
          goal: "Escribir una política de IA de una página para el personal y terminar tu kit de IA del consultorio.",
          text: [
            "Puede que el personal ya use IA en su teléfono. Una política corta por escrito protege a los pacientes y al consultorio. Para empezar bastan de cinco a siete reglas.",
            "Reglas de ejemplo: (1) Nada de PHI en ninguna herramienta de IA a menos que el consultorio la haya aprobado y tenga un BAA. (2) Las herramientas aprobadas se nombran en una lista. (3) La IA nunca da diagnósticos ni consejos de tratamiento a los pacientes. (4) Un profesional clínico con licencia aprueba todo contenido de salud dirigido a pacientes. (5) El personal revisa los datos de los borradores de la IA. (6) Cualquier PHI que se haya puesto por error se reporta de inmediato al encargado de privacidad. (7) La política se revisa cada año.",
            "Usa la IA para pulir la redacción, luego pide a tu encargado de privacidad o cumplimiento que la apruebe, capacita al personal y guarda una copia firmada."
          ],
          steps: ["Escribe de cinco a siete reglas.", "Nombra en una lista las herramientas aprobadas.", "Agrega cómo reportar un error.", "Pide a la IA que pula la redacción.", "Consigue la aprobación de cumplimiento, capacita al personal y guarda copias firmadas."],
          words: [["Encargado de privacidad", "la persona del consultorio responsable de la privacidad según HIPAA."], ["Herramienta aprobada", "una herramienta que el consultorio revisó y permitió, con BAA si maneja PHI."]],
          slides: [
            { title: "Por qué una política", bullets: ["Puede que el personal ya use IA", "Protege a los pacientes y al consultorio"] },
            { title: "Reglas básicas", bullets: ["Nada de PHI sin una herramienta aprobada con BAA", "La IA no da diagnósticos ni consejos de tratamiento", "Un profesional clínico aprueba el contenido de salud"] },
            { title: "Que funcione", bullets: ["Reporta de inmediato si se puso PHI por error", "Cumplimiento aprueba; capacita al personal", "Revísala cada año"] }
          ],
          sources: [HHS_BA],
          tryIt: "Tarea final: escribe tu política de IA de una página para el personal y arma tu kit de IA del consultorio: lista de tareas separada, tres guiones, plantillas de recordatorio, un folleto marcado para revisión clínica y la política. Revisa que no aparezca información real de pacientes en ningún lado.",
          youCanNow: "dirigir el uso seguro de la IA en un consultorio de salud con reglas claras y herramientas útiles sin PHI.",
          quickCheck: [
            { objective: "O6", q: "¿Cuántas reglas sugiere la lección para una primera política de IA?", options: ["Una", "Cincuenta", "De cinco a siete", "Ninguna; solo se le dice al personal de palabra"], answer: 2, why: "De cinco a siete reglas bastan para empezar." },
            { objective: "O6", q: "El borrador de tu política de IA está listo. ¿Cuáles son los siguientes pasos?", options: ["Guardarlo en un cajón", "Publicarlo en línea para los pacientes", "Dejar que cada empleado lo cambie", "Pedir que lo apruebe el responsable de privacidad o cumplimiento, capacitar al personal y guardar una copia firmada"], answer: 3, why: "El responsable lo aprueba, se capacita al personal y guardas una copia firmada." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Materiales para pacientes, trabajo de oficina y reglas para el personal",
        questions: [
          { objective: "O4", q: "¿Quién aprueba un folleto para pacientes escrito con IA?", options: ["Un profesional clínico con licencia", "La IA", "Solo la recepción", "Un paciente"], answer: 0, why: "Los profesionales clínicos revisan los datos de salud." },
          { objective: "O4", q: "¿Qué tema está bien para un borrador de folleto general con IA?", options: ["Una nota del expediente", "Los resultados de análisis del Sr. Lee", "La lista de medicamentos de un paciente", "Cómo prepararse para la primera visita"], answer: 3, why: "Los temas generales no contienen PHI." },
          { objective: "O5", q: "¿Qué tarea de oficina puede usar una herramienta de IA general?", options: ["Resumir las notas de la visita de un paciente", "Un anuncio de empleo para un asistente médico", "Escribir una carta que incluye el diagnóstico de un paciente", "Codificar la reclamación de un paciente en particular"], answer: 1, why: "No contiene información de pacientes." },
          { objective: "O6", q: "Alguien del personal pegó por error el nombre y la enfermedad de un paciente en una herramienta de IA gratis. ¿Qué debe decir la política que haga?", options: ["Reportarlo de inmediato al encargado de privacidad", "Esconderlo", "Borrar la computadora", "No hacer nada"], answer: 0, why: "Reportarlo rápido permite que el consultorio responda bien." },
          { objective: "O6", q: "¿Cuál es una buena regla de una política de IA?", options: ["La PHI puede ir a cualquier lado", "Cualquier herramienta está bien", "La IA nunca da diagnósticos ni consejos de tratamiento a los pacientes", "Nadie revisa el contenido de la IA"], answer: 2, why: "Las decisiones de atención quedan en manos de profesionales clínicos con licencia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para consultorios de salud",
    questions: [
      { objective: "O1", q: "PHI significa:", options: ["Seguro de salud público", "Información de salud protegida", "Inspección privada del hogar", "Índice de salud primaria"], answer: 1, why: "Es información de salud que identifica a un paciente." },
      { objective: "O1", q: "¿Qué es PHI?", options: ["Un cartel general sobre la temporada de gripe", "El horario de la oficina", "Indicaciones para estacionarse", "Una fecha de nacimiento con un tipo de cita"], answer: 3, why: "Los datos que identifican junto con información de salud son PHI." },
      { objective: "O1", q: "Un BAA es:", options: ["Un formulario del paciente", "Un código de facturación", "Una tarjeta de seguro", "Un contrato en el que un proveedor acepta proteger la PHI"], answer: 3, why: "Los acuerdos de socio comercial cubren el manejo de la PHI." },
      { objective: "O1", q: "La mayoría de las herramientas de chat de IA gratis y generales:", options: ["Siempre están aprobadas para HIPAA", "No firman BAA con usuarios individuales", "Las maneja HHS", "Borran todo al instante"], answer: 1, why: "No supongas que una herramienta general está aprobada para PHI." },
      { objective: "O1", q: "Si no estás seguro de si una tarea puede usar IA, pregunta a:", options: ["Un paciente", "La herramienta de IA", "Tu encargado de privacidad o cumplimiento", "Un grupo de redes sociales"], answer: 2, why: "Ellos deciden qué está aprobado." },
      { objective: "O1", q: "¿Dónde puede el personal encontrar la guía oficial de HIPAA?", options: ["hhs.gov", "Un blog cualquiera", "Una aplicación de chat", "Un comentario en una noticia"], answer: 0, why: "HHS publica la guía de HIPAA." },
      { objective: "O2", q: "Las preguntas por teléfono sobre recetas y síntomas van a:", options: ["El buzón de voz para siempre", "La IA", "El personal clínico", "Facturación"], answer: 2, why: "Las preguntas clínicas necesitan personal clínico." },
      { objective: "O2", q: "¿Quién aprueba los guiones de recepción que tocan la atención médica?", options: ["El líder clínico", "La persona más nueva", "La IA", "Un proveedor"], answer: 0, why: "La aprobación clínica mantiene seguros los guiones." },
      { objective: "O2", q: "El triaje lo hace:", options: ["La IA", "El personal clínico", "Solo la recepción", "Los amigos de los pacientes"], answer: 1, why: "Decidir la urgencia es trabajo clínico." },
      { objective: "O3", q: "¿Cuál es una buena plantilla de recordatorio?", options: ["El número de seguro del paciente", "\"Hola, Jane, confirmamos tu seguimiento de VIH\"", "Una nota del expediente", "\"Hola, [nombre], confirmamos tu cita el [fecha] a las [hora].\""], answer: 3, why: "Espacios en blanco y sin motivo de la visita." },
      { objective: "O3", q: "¿Quién llena los datos reales del paciente en los recordatorios?", options: ["Tu sistema de citas o de mensajes", "La herramienta de IA general", "El teléfono de un voluntario", "Las redes sociales"], answer: 0, why: "Los datos reales se quedan en sistemas aprobados." },
      { objective: "O3", q: "Los recordatorios traducidos con IA debe revisarlos:", options: ["Un paciente", "Nadie", "La IA otra vez", "Alguien del personal que hable bien el idioma o un traductor calificado"], answer: 3, why: "Las traducciones pueden tener errores." },
      { objective: "O4", q: "Un buen nivel de lectura para folletos generales para pacientes es de más o menos:", options: ["Escuela de medicina", "Graduado universitario", "Sexto grado", "Sin palabras"], answer: 2, why: "El lenguaje sencillo ayuda a que más pacientes entiendan." },
      { objective: "O4", q: "Cada borrador de folleto hecho con IA se marca:", options: ["\"Final\"", "\"Para revisión clínica\"", "\"Secreto\"", "\"Aprobado por la IA\""], answer: 1, why: "Los profesionales clínicos deben aprobar el contenido de salud." },
      { objective: "O4", q: "Los folletos para pacientes deben incluir:", options: ["Nada más", "Historias de otros pacientes con sus nombres", "Un diagnóstico para cada lector", "Tu línea de contacto y una nota del 911 para emergencias"], answer: 3, why: "Los pacientes necesitan saber cómo conseguir ayuda." },
      { objective: "O5", q: "¿Qué documento necesita revisión de cumplimiento o de recursos humanos?", options: ["Un letrero del horario de días festivos", "Una nota de agradecimiento al personal por una fiesta", "Una política de cargos por citas perdidas", "Un mapa del estacionamiento"], answer: 2, why: "Los cargos y los derechos de los pacientes pueden estar regulados." },
      { objective: "O5", q: "Un correo al personal sobre un nuevo sistema telefónico:", options: ["No necesita PHI, así que la IA general puede ayudar", "Debe incluir nombres de pacientes", "Necesita un BAA", "No se puede escribir"], answer: 0, why: "No hay información de pacientes de por medio." },
      { objective: "O6", q: "Una política de IA debe nombrar:", options: ["Los nombres de los pacientes", "Las herramientas aprobadas", "Las contraseñas del personal", "Nada en particular"], answer: 1, why: "El personal necesita saber qué herramientas están permitidas." },
      { objective: "O6", q: "¿Cada cuánto se debe revisar la política de IA?", options: ["Nunca", "Por lo menos cada año", "Cada diez años", "Solo después de una multa"], answer: 1, why: "Las herramientas y las reglas cambian." },
      { objective: "O6", q: "En este curso, la IA se usa para:", options: ["Trabajo administrativo y borradores, nunca para diagnosticar", "Diagnosticar pacientes", "Recetar", "Reemplazar a los profesionales clínicos"], answer: 0, why: "Las decisiones de atención quedan en manos de profesionales clínicos con licencia." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      7,
      9,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Lista de tareas clasificada",
        objective: "O1",
        notYet: "Una tarea que necesita PHI está en la columna \"se puede usar IA general\".",
        meets: "Diez tareas bien clasificadas en las dos columnas.",
        exceeds: "Anota qué herramienta aprobada con BAA usa el consultorio para las tareas con PHI, si tiene una."
      },
      {
        name: "Guiones de recepción seguros",
        objective: "O2",
        notYet: "Un guion da consejos médicos o no manda una emergencia al 911.",
        meets: "Tres guiones que mandan las preguntas de atención al personal clínico y las emergencias al 911.",
        exceeds: "Marcados para aprobación del líder clínico, con una nota de quién los aprobó."
      },
      {
        name: "Plantillas de recordatorio privadas",
        objective: "O3",
        notYet: "Una plantilla tiene datos reales de un paciente o revela el motivo de la cita.",
        meets: "Plantillas de confirmación y de recordatorio con espacios en blanco y sin motivo de la cita.",
        exceeds: "También tiene una plantilla para cambiar la cita y una versión traducida revisada por alguien que habla el idioma con fluidez."
      },
      {
        name: "Folleto para revisión",
        objective: "O4",
        notYet: "El folleto trata de un paciente en particular o no está marcado para revisión.",
        meets: "Tema general, palabras sencillas, marcado \"Para revisión clínica\" con línea de contacto y nota sobre el 911.",
        exceeds: "Enumera los datos que debe revisar el profesional clínico."
      },
      {
        name: "Política de IA para el personal",
        objective: "O6",
        notYet: "A la política le falta la regla de nada de PHI o cómo reportar un error.",
        meets: "De cinco a siete reglas, incluidas nada de PHI sin BAA, herramientas aprobadas, cómo reportar y revisión cada año.",
        exceeds: "Aprobada por el responsable de privacidad o cumplimiento, con un plan de capacitación del personal."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Consultorios que adoptan una política escrita de IA para el personal en 30 días (encuesta de seguimiento)",
      "Consultorios que informan que no se puso PHI en herramientas de IA generales después de la capacitación",
      "Estudiantes que empiezan otro curso de Koach Learn para pequeños negocios en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora o un teléfono con internet",
      "Un asistente de IA general gratis, usado solo para tareas sin PHI",
      "Las políticas actuales de tu consultorio y los tipos de llamadas comunes, o unos de ejemplo",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Usa solo información inventada o de ejemplo en clase; nunca escribas los datos de un paciente real en una herramienta de IA.",
      "Invita al responsable de privacidad o cumplimiento del consultorio a la sesión sobre la política de IA para el personal.",
      "Pide a un profesional clínico con licencia que revise los folletos y los guiones sobre atención antes de usarlos.",
      "Recuerda a los estudiantes que este curso no es asesoría legal ni de cumplimiento y que remite a las guías de HHS y a su asesor.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
