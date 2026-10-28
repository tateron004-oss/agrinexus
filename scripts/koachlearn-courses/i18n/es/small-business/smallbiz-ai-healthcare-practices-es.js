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
  chapters: [
    {
      name: "Capítulo 1: Primero HIPAA, después la recepción",
      lessons: [
        {
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
          youCanNow: "decidir si una tarea de oficina puede usar una herramienta de IA general o necesita una herramienta aprobada con BAA."
        },
        {
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
          youCanNow: "escribir guiones de recepción amables y claros que pasan las preguntas de atención de forma segura."
        },
        {
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
          youCanNow: "crear plantillas de citas que cuidan la privacidad con ayuda de la IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Primero HIPAA, después la recepción",
        questions: [
          { q: "¿Qué es información de salud protegida (PHI)?", options: ["Las indicaciones para estacionarse en tu oficina", "El nombre de un paciente con su diagnóstico", "Un folleto general sobre lavarse las manos", "El horario de tu oficina"], answer: 1, why: "La información de salud que identifica a un paciente es PHI." },
          { q: "Según HHS, un servicio que guarda PHI para tu consultorio necesita:", options: ["La contraseña de un paciente", "Nada", "Una cuenta de redes sociales", "Un acuerdo de socio comercial"], answer: 3, why: "Los servicios que manejan PHI son socios comerciales y necesitan un BAA." },
          { q: "Quieres que la IA resuma las notas del expediente de un paciente. Tu consultorio no tiene BAA con la herramienta. ¿Qué haces?", options: ["No usas esa herramienta para eso", "Pegas las notas", "Quitas solo el apellido y las pegas", "Le preguntas a un amigo"], answer: 0, why: "La PHI solo entra en herramientas aprobadas con BAA." },
          { q: "Una persona que llama describe dolor de pecho. El guion debe:", options: ["Pedir un diagnóstico a la IA", "Darle cita para la próxima semana", "Decirle que llame al 911 o vaya a la sala de emergencias más cercana", "Ponerla en espera"], answer: 2, why: "Las emergencias van al 911." },
          { q: "¿Qué debe dejar fuera un recordatorio por mensaje de texto?", options: ["La hora", "La fecha", "El motivo de la visita", "El teléfono del consultorio"], answer: 2, why: "Los recordatorios con lo mínimo protegen la privacidad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Materiales para pacientes, trabajo de oficina y reglas para el personal",
      lessons: [
        {
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
          youCanNow: "preparar folletos para pacientes en lenguaje sencillo con la IA y mandarlos a aprobación clínica."
        },
        {
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
          youCanNow: "usar la IA para documentos de oficina que no contienen información de pacientes, con las revisiones correctas."
        },
        {
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
          youCanNow: "dirigir el uso seguro de la IA en un consultorio de salud con reglas claras y herramientas útiles sin PHI."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Materiales para pacientes, trabajo de oficina y reglas para el personal",
        questions: [
          { q: "¿Quién aprueba un folleto para pacientes escrito con IA?", options: ["Un profesional clínico con licencia", "La IA", "Solo la recepción", "Un paciente"], answer: 0, why: "Los profesionales clínicos revisan los datos de salud." },
          { q: "¿Qué tema está bien para un borrador de folleto general con IA?", options: ["Una nota del expediente", "Los resultados de análisis del Sr. Lee", "La lista de medicamentos de un paciente", "Cómo prepararse para la primera visita"], answer: 3, why: "Los temas generales no contienen PHI." },
          { q: "¿Qué tarea de oficina puede usar una herramienta de IA general?", options: ["Resumir las notas de la visita de un paciente", "Un anuncio de empleo para un asistente médico", "Escribir una carta que incluye el diagnóstico de un paciente", "Codificar la reclamación de un paciente en particular"], answer: 1, why: "No contiene información de pacientes." },
          { q: "Alguien del personal pegó por error el nombre y la enfermedad de un paciente en una herramienta de IA gratis. ¿Qué debe decir la política que haga?", options: ["Reportarlo de inmediato al encargado de privacidad", "Esconderlo", "Borrar la computadora", "No hacer nada"], answer: 0, why: "Reportarlo rápido permite que el consultorio responda bien." },
          { q: "¿Cuál es una buena regla de una política de IA?", options: ["La PHI puede ir a cualquier lado", "Cualquier herramienta está bien", "La IA nunca da diagnósticos ni consejos de tratamiento a los pacientes", "Nadie revisa el contenido de la IA"], answer: 2, why: "Las decisiones de atención quedan en manos de profesionales clínicos con licencia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para consultorios de salud",
    questions: [
      { q: "PHI significa:", options: ["Seguro de salud público", "Información de salud protegida", "Inspección privada del hogar", "Índice de salud primaria"], answer: 1, why: "Es información de salud que identifica a un paciente." },
      { q: "¿Qué es PHI?", options: ["Un cartel general sobre la temporada de gripe", "El horario de la oficina", "Indicaciones para estacionarse", "Una fecha de nacimiento con un tipo de cita"], answer: 3, why: "Los datos que identifican junto con información de salud son PHI." },
      { q: "Un BAA es:", options: ["Un formulario del paciente", "Un código de facturación", "Una tarjeta de seguro", "Un contrato en el que un proveedor acepta proteger la PHI"], answer: 3, why: "Los acuerdos de socio comercial cubren el manejo de la PHI." },
      { q: "La mayoría de las herramientas de chat de IA gratis y generales:", options: ["Siempre están aprobadas para HIPAA", "No firman BAA con usuarios individuales", "Las maneja HHS", "Borran todo al instante"], answer: 1, why: "No supongas que una herramienta general está aprobada para PHI." },
      { q: "Si no estás seguro de si una tarea puede usar IA, pregunta a:", options: ["Un paciente", "La herramienta de IA", "Tu encargado de privacidad o cumplimiento", "Un grupo de redes sociales"], answer: 2, why: "Ellos deciden qué está aprobado." },
      { q: "¿Dónde puede el personal encontrar la guía oficial de HIPAA?", options: ["hhs.gov", "Un blog cualquiera", "Una aplicación de chat", "Un comentario en una noticia"], answer: 0, why: "HHS publica la guía de HIPAA." },
      { q: "Las preguntas por teléfono sobre recetas y síntomas van a:", options: ["El buzón de voz para siempre", "La IA", "El personal clínico", "Facturación"], answer: 2, why: "Las preguntas clínicas necesitan personal clínico." },
      { q: "¿Quién aprueba los guiones de recepción que tocan la atención médica?", options: ["El líder clínico", "La persona más nueva", "La IA", "Un proveedor"], answer: 0, why: "La aprobación clínica mantiene seguros los guiones." },
      { q: "El triaje lo hace:", options: ["La IA", "El personal clínico", "Solo la recepción", "Los amigos de los pacientes"], answer: 1, why: "Decidir la urgencia es trabajo clínico." },
      { q: "¿Cuál es una buena plantilla de recordatorio?", options: ["El número de seguro del paciente", "\"Hola, Jane, confirmamos tu seguimiento de VIH\"", "Una nota del expediente", "\"Hola, [nombre], confirmamos tu cita el [fecha] a las [hora].\""], answer: 3, why: "Espacios en blanco y sin motivo de la visita." },
      { q: "¿Quién llena los datos reales del paciente en los recordatorios?", options: ["Tu sistema de citas o de mensajes", "La herramienta de IA general", "El teléfono de un voluntario", "Las redes sociales"], answer: 0, why: "Los datos reales se quedan en sistemas aprobados." },
      { q: "Los recordatorios traducidos con IA debe revisarlos:", options: ["Un paciente", "Nadie", "La IA otra vez", "Alguien del personal que hable bien el idioma o un traductor calificado"], answer: 3, why: "Las traducciones pueden tener errores." },
      { q: "Un buen nivel de lectura para folletos generales para pacientes es de más o menos:", options: ["Escuela de medicina", "Graduado universitario", "Sexto grado", "Sin palabras"], answer: 2, why: "El lenguaje sencillo ayuda a que más pacientes entiendan." },
      { q: "Cada borrador de folleto hecho con IA se marca:", options: ["\"Final\"", "\"Para revisión clínica\"", "\"Secreto\"", "\"Aprobado por la IA\""], answer: 1, why: "Los profesionales clínicos deben aprobar el contenido de salud." },
      { q: "Los folletos para pacientes deben incluir:", options: ["Nada más", "Historias de otros pacientes con sus nombres", "Un diagnóstico para cada lector", "Tu línea de contacto y una nota del 911 para emergencias"], answer: 3, why: "Los pacientes necesitan saber cómo conseguir ayuda." },
      { q: "¿Qué documento necesita revisión de cumplimiento o de recursos humanos?", options: ["Un letrero del horario de días festivos", "Una nota de agradecimiento al personal por una fiesta", "Una política de cargos por citas perdidas", "Un mapa del estacionamiento"], answer: 2, why: "Los cargos y los derechos de los pacientes pueden estar regulados." },
      { q: "Un correo al personal sobre un nuevo sistema telefónico:", options: ["No necesita PHI, así que la IA general puede ayudar", "Debe incluir nombres de pacientes", "Necesita un BAA", "No se puede escribir"], answer: 0, why: "No hay información de pacientes de por medio." },
      { q: "Una política de IA debe nombrar:", options: ["Los nombres de los pacientes", "Las herramientas aprobadas", "Las contraseñas del personal", "Nada en particular"], answer: 1, why: "El personal necesita saber qué herramientas están permitidas." },
      { q: "¿Cada cuánto se debe revisar la política de IA?", options: ["Nunca", "Por lo menos cada año", "Cada diez años", "Solo después de una multa"], answer: 1, why: "Las herramientas y las reglas cambian." },
      { q: "En este curso, la IA se usa para:", options: ["Trabajo administrativo y borradores, nunca para diagnosticar", "Diagnosticar pacientes", "Recetar", "Reemplazar a los profesionales clínicos"], answer: 0, why: "Las decisiones de atención quedan en manos de profesionales clínicos con licencia." }
    ]
  }
};
