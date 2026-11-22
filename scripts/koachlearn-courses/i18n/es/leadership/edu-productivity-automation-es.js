"use strict";

// Koach Learn course (Spanish translation of leadership/edu-productivity-automation.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-productivity-automation-es",
  lang: "es",
  translationOf: "edu-productivity-automation",
  category: "Leadership Development",
  name: "IA para líderes escolares y educativos 6: Productividad y automatización de procesos",
  skills: "Encontrar tus mayores pérdidas de tiempo, Redactar boletines y mensajes a las familias, Llevar reuniones desde la agenda hasta los acuerdos, Resumir resultados de encuestas y formularios, Crear automatizaciones sencillas, Medir el tiempo ahorrado",
  outcome: "ahorrar un tiempo medible en la administración escolar creando tres procesos con ayuda de IA (un boletín semanal para las familias, una reunión de personal desde la agenda hasta la lista de acuerdos y un informe que pasa de una encuesta a un resumen), cada uno con una revisión humana y un conteo de tiempo antes y después.",
  about: [
    "Este curso es para directores, subdirectores, jefes de oficina, jefes de departamento, orientadores y docentes que llevan trabajo administrativo. El papeleo y los mensajes quitan tiempo a los estudiantes. Este curso te ayuda a recuperar parte de ese tiempo, de forma segura.",
    "El capítulo 1 empieza con una auditoría de tiempo y luego crea procesos con IA para la comunicación y las reuniones. El capítulo 2 pasa a formularios, encuestas y automatizaciones sencillas, y termina con un plan para medir el tiempo que ahorras y mantener los procesos funcionando.",
    "Usa solo herramientas aprobadas por tu distrito y mantén la información personal de estudiantes y personal fuera de las herramientas no aprobadas. Herramientas gratuitas como Google Forms, Microsoft Forms, Google Docs y Microsoft 365 sirven para la mayoría de las tareas. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Este es el curso 6 de 8 de IA para líderes escolares y educativos."
  ],
  finalTask: "Crea y usa tres procesos durante una semana: (1) un boletín semanal para las familias que pase de notas en viñetas a un borrador terminado y revisado (con las traducciones revisadas por un hablante calificado); (2) una reunión de personal que pase de una agenda redactada con IA a una lista de acuerdos con responsables y fechas, enviada el mismo día; (3) una encuesta breve para el personal o las familias cuyos resultados resumes con IA usando solo datos sin nombres. Anota los minutos dedicados antes y después en cada uno, y la revisión humana que mantuviste en cada proceso.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Directores, subdirectores, jefes de oficina, jefes de departamento, orientadores y docentes de escuelas de Estados Unidos que cargan con trabajo administrativo.",
    startingPoint: "Usan correo, documentos y formularios todos los días y conocen lo básico de la privacidad estudiantil de los cursos anteriores. Hacen a mano la mayoría de los boletines, las notas de reunión y los resúmenes de encuestas, y no han medido cuánto tiempo les toman.",
    gap: "El papeleo y los mensajes le quitan tiempo a los estudiantes. El personal escolar necesita procesos con IA seguros y repetibles, con una revisión humana en cada uno, y un conteo del tiempo antes y después para demostrar que de verdad ahorran tiempo.",
    constraints: [
      "Usar solo herramientas aprobadas por el distrito; mantener la información personal de estudiantes y personal fuera de las herramientas no aprobadas",
      "Herramientas gratuitas como Google Forms, Microsoft Forms, Google Docs y Microsoft 365 cubren la mayoría de las tareas",
      "Cada proceso mantiene una revisión humana antes de que algo llegue a las familias",
      "Las traducciones las revisa una persona calificada que hable el idioma antes de enviarlas",
      "Tiempo: lecciones cortas, más una semana usando los procesos"
    ],
    prerequisites: "Se recomienda \"IA para líderes escolares y educativos 2: Herramientas de IA para educadores\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una semana típica", action: "hacer una lista de tus tareas administrativas repetibles con los minutos que les dedicas y elegir las tres mejores candidatas para la IA", standard: "anotando al menos diez tareas y quedándote con el juicio sobre estudiantes concretos" },
    { id: "O2", condition: "Con las notas en viñetas de la semana", action: "convertir las notas en un boletín para las familias con una instrucción guardada y reutilizable", standard: "revisando cada fecha, hora y lugar, con las traducciones revisadas por una persona calificada que hable el idioma" },
    { id: "O3", condition: "Para una reunión del personal o del equipo", action: "redactar con IA una agenda con tiempos y convertir las notas en una lista de acuerdos con responsables y fechas", standard: "enviando la lista de acuerdos el mismo día" },
    { id: "O4", condition: "Con respuestas de una encuesta sin nombres", action: "resumir los resultados con IA y revisar los conteos con las respuestas", standard: "quitando antes los nombres, los correos y los comentarios que identifiquen a alguien" },
    { id: "O5", condition: "Para una tarea común", action: "configurar una automatización sencilla, como una plantilla de correo o una regla para ordenar, con una revisión humana", standard: "probada primero contigo y aprobada por tu equipo de tecnología cuando haga falta" },
    { id: "O6", condition: "Después de usar tus procesos durante una semana", action: "medir los minutos antes y después y escribir cada proceso en una página", standard: "contando el tiempo de revisar y corregir, y guardando las páginas en una carpeta compartida" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Recuperar tiempo en la comunicación y las reuniones",
      lessons: [
        {
          objectives: ["O1"],
          title: "Una auditoría de tiempo: ¿en qué se va la semana?",
          minutes: 5,
          goal: "Encontrar tus tres mayores pérdidas de tiempo repetitivas.",
          text: [
            "Antes de automatizar, mide. Durante una semana, anota las tareas administrativas repetitivas y cuánto tarda cada una, más o menos: correos, boletines, preparación de reuniones, notas, formularios, informes, horarios, turnos de vigilancia.",
            "Encierra en un círculo las tareas que se repiten seguido, siguen un patrón parecido cada vez y no necesitan información privada de estudiantes para redactarse. Esas son tus mejores candidatas para la IA. Las tareas que requieren juicio sobre un estudiante o un miembro del personal en particular se quedan contigo.",
            "Elige las tres que más tiempo te toman. Esos son los procesos que crearás en este curso, y sus minutos son tus cifras de “antes” para medir el tiempo ahorrado."
          ],
          steps: ["Durante una semana, anota las tareas administrativas repetitivas y los minutos dedicados.", "Encierra las tareas frecuentes y con patrón que no necesitan datos privados de estudiantes.", "Quédate con las tareas que requieren juicio sobre personas.", "Elige las tres que más tiempo toman.", "Guarda esos minutos como tus cifras de “antes”."],
          words: [["Auditoría de tiempo", "registrar cómo usas tu tiempo para poder mejorarlo."], ["Proceso", "los pasos que sigues para hacer una tarea que se repite."]],
          slides: [
            { title: "Primero, mide", bullets: ["Una semana de tareas repetitivas", "Minutos aproximados de cada una"] },
            { title: "Buenas candidatas para la IA", bullets: ["Frecuentes y con patrón", "No necesitan datos privados de estudiantes para redactarse", "El juicio sobre personas se queda contigo"] },
            { title: "Elige tres", bullets: ["Las tres que más tiempo toman", "Sus minutos son tus cifras de “antes”"] }
          ],
          tryIt: "Haz una lista de al menos diez tareas administrativas repetitivas de tu semana con sus minutos aproximados. Encierra tus tres mejores candidatas para la IA.",
          youCanNow: "encontrar las tareas repetitivas en las que la IA puede ahorrarte más tiempo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es una auditoría de tiempo?", options: ["Una revisión del presupuesto de tu escuela", "Registrar cuánto tiempo dedicas a cada tarea", "Una revisión de la asistencia del personal", "Una prueba de qué tan rápido funciona la IA"], answer: 1, why: "Una auditoría de tiempo muestra en qué se va la semana, para que elijas qué mejorar." },
            { objective: "O1", q: "Una de tus pérdidas de tiempo es decidir la sanción disciplinaria de un estudiante concreto. ¿Debería ser candidata para la IA?", options: ["Sí, la IA es más rápida", "Sí, si nadie se entera", "No; el juicio sobre un estudiante concreto se queda contigo", "Solo en las semanas con mucho trabajo"], answer: 2, why: "Las tareas que necesitan juicio sobre un estudiante concreto se quedan con la persona." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Boletines y mensajes para las familias",
          minutes: 6,
          goal: "Convertir notas en viñetas en un boletín claro para las familias con una instrucción reutilizable.",
          text: [
            "Lleva durante la semana una lista de notas en viñetas: eventos, fechas, recordatorios, celebraciones (sin nombres de estudiantes, salvo que lo permitan las reglas de tu escuela sobre medios e información de directorio). El viernes, pega las viñetas junto con una instrucción guardada.",
            "Una instrucción reutilizable: “Convierte estas notas en un boletín cálido y claro para las familias de una escuela primaria. Lenguaje sencillo, secciones cortas con títulos, fechas en negrita, menos de 300 palabras. No agregues ningún evento ni dato que no esté en mis notas.” Guárdala para que el boletín se vea igual cada semana.",
            "Revisa cada fecha, hora y lugar contra el calendario escolar. Para las familias que leen en otros idiomas, una traducción de la IA es un borrador: pide a un hablante calificado que la revise antes de enviarla, para que las familias reciban información correcta."
          ],
          steps: ["Lleva notas en viñetas durante la semana.", "Pégalas con tu instrucción guardada para el boletín.", "Revisa cada fecha, hora y lugar.", "Pide a un hablante calificado que revise las traducciones.", "Envíalo y guarda la instrucción para la próxima semana."],
          words: [["Instrucción reutilizable", "una instrucción que guardas y usas cada vez para la misma tarea."], ["Hablante calificado", "una persona con dominio suficiente de un idioma para revisar la exactitud de una traducción."]],
          slides: [
            { title: "Viñetas toda la semana", bullets: ["Eventos, fechas, recordatorios, celebraciones", "Sigue tus reglas sobre nombres y fotos de estudiantes"] },
            { title: "La instrucción guardada", bullets: ["Cálido, lenguaje sencillo, secciones cortas", "Fechas en negrita, menos de 300 palabras", "“No agregues nada que no esté en mis notas”"] },
            { title: "Antes de enviarlo", bullets: ["Revisa fechas, horas y lugares", "Traducciones revisadas por un hablante calificado"] }
          ],
          tryIt: "Escribe notas en viñetas de una semana inventada y usa la instrucción guardada para convertirlas en un boletín. Compáralo con tus notas y mide cuánto tardaste.",
          youCanNow: "producir un boletín para las familias coherente y revisado a partir de las notas de la semana.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué guardar tu instrucción para el boletín?", options: ["Para reutilizarla cada semana", "Para que la IA recuerde a tus estudiantes", "Para que las familias la vean", "Para que nunca haya que revisarla"], answer: 0, why: "Una instrucción guardada hace que el boletín semanal sea repetible." },
            { objective: "O2", q: "El boletín de la IA anuncia una venta de pasteles que no está en tus notas. ¿Qué harías?", options: ["Dejarla; a las familias les gustan las ventas de pasteles", "Cambiar la fecha", "Enviarlo y corregir después", "Quitarla y añadir a la instrucción \"No añadas nada que no esté en mis notas\""], answer: 3, why: "La IA puede inventar eventos, así que la instrucción lo prohíbe y tú revisas con tus notas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reuniones: de la agenda a la lista de acuerdos",
          minutes: 5,
          goal: "Usar la IA para redactar una agenda y convertir las notas en una lista de acuerdos con responsables y fechas.",
          text: [
            "Antes: da a la IA el propósito de la reunión, la duración, los asistentes por función y los temas. Pide una agenda con tiempos y el resultado esperado de cada punto (decidir, conversar, informar). Envíala con anticipación para que la gente llegue preparada.",
            "Después: pega tus notas (sin datos personales de estudiantes o del personal) y pide las decisiones, las acciones en una tabla con responsable y fecha límite, y las preguntas pendientes, con la indicación “escribe FALTA si un responsable o una fecha no está en las notas; no agregues nada que no esté en las notas”.",
            "Revisa la lista de acuerdos con tu memoria, completa lo que falte y envíala el mismo día. Si piensas usar un grabador de reuniones con IA, revisa la política de tu distrito y avisa antes a los participantes; nunca grabes con herramientas no aprobadas reuniones sobre estudiantes concretos, como las del IEP o las disciplinarias."
          ],
          steps: ["Redacta una agenda con tiempos y resultados por punto.", "Envíala con anticipación.", "Después de la reunión, pega las notas sin datos personales.", "Obtén decisiones, acciones (responsable, fecha) y preguntas pendientes.", "Revisa, completa lo que falte y envíala el mismo día."],
          words: [["Agenda", "la lista de temas y tiempos de una reunión."], ["Lista de acuerdos", "las tareas acordadas en una reunión, cada una con un responsable y una fecha límite."]],
          slides: [
            { title: "Antes de la reunión", bullets: ["Propósito, duración, funciones, temas", "Agenda con tiempos", "Resultado por punto: decidir, conversar, informar"] },
            { title: "Después de la reunión", bullets: ["Pega las notas sin datos personales", "Decisiones, acciones, preguntas pendientes", "FALTA para los huecos; no agregues nada"] },
            { title: "Grabadores", bullets: ["Revisa la política; avisa a los participantes", "Nunca para reuniones del IEP o disciplinarias en herramientas no aprobadas"] }
          ],
          tryIt: "Usa la IA para redactar una agenda con tiempos para tu próxima reunión de personal o de equipo. Después, convierte tus notas en una lista de acuerdos y envíala el mismo día. Mide el tiempo de ambos pasos.",
          youCanNow: "llevar reuniones desde una agenda clara hasta una lista de acuerdos el mismo día con ayuda de la IA.",
          quickCheck: [
            { objective: "O3", q: "¿Qué le da a cada punto una agenda con tiempos?", options: ["Un tiempo y un resultado esperado", "El sueldo de quien habla", "Una votación", "Una presentación de diapositivas"], answer: 0, why: "Los tiempos y los resultados mantienen enfocada la reunión." },
            { objective: "O3", q: "Un equipo quiere grabar una reunión del IEP con una grabadora de IA gratuita y no aprobada. ¿Qué dirías?", options: ["Adelante, ahorra tomar notas", "Grabarla pero borrarla después", "No; usar solo herramientas aprobadas y seguir la política para reuniones sobre estudiantes", "Grabar solo la mitad"], answer: 2, why: "Las reuniones del IEP incluyen información protegida de estudiantes y necesitan herramientas aprobadas y seguir la política." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Recuperar tiempo en la comunicación y las reuniones",
        questions: [
          { objective: "O1", q: "¿Cuál es la mejor tarea candidata para la IA?", options: ["Decidir la sanción de un estudiante", "Escribir el IEP de un estudiante concreto", "Un boletín semanal que sigue el mismo patrón", "Elegir a qué docente evaluar"], answer: 2, why: "Las tareas frecuentes y con patrón, sin datos privados, son adecuadas para la IA." },
          { objective: "O2", q: "¿Por qué agregar “No agregues nada que no esté en mis notas” a la instrucción del boletín?", options: ["Evita que la IA invente eventos o datos", "Lo alarga", "Lo traduce", "Agrega fotos"], answer: 0, why: "La IA puede llenar huecos con detalles inventados." },
          { objective: "O2", q: "Una traducción del boletín hecha por IA debe:", options: ["Enviarse de inmediato", "Enviarse solo al personal", "Omitirse", "Revisarla primero un hablante calificado"], answer: 3, why: "Las familias merecen información correcta." },
          { objective: "O3", q: "¿Qué reunión nunca debe grabarse con una herramienta de IA no aprobada?", options: ["Una reunión general de planeación", "Una reunión del IEP sobre un estudiante", "Un club de lectura", "El repaso de un simulacro de incendio"], answer: 1, why: "Las reuniones sobre un estudiante concreto involucran información protegida." },
          { objective: "O3", q: "¿Cuándo debe enviarse la lista de acuerdos?", options: ["El mes siguiente", "Solo si la piden", "Nunca", "El mismo día"], answer: 3, why: "Enviar los acuerdos el mismo día mantiene el impulso." }
        ]
      }
    },
    {
      name: "Capítulo 2: Formularios, automatizaciones y medir lo ganado",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encuestas y formularios: de las respuestas a un resumen",
          minutes: 6,
          goal: "Resumir los resultados de una encuesta con IA sin exponer información personal.",
          text: [
            "Google Forms y Microsoft Forms reúnen las respuestas en una hoja de cálculo. Luego la IA puede ayudarte a ver temas en los comentarios abiertos y a escribir un resumen breve para el personal o las familias.",
            "Primero protege a las personas. Diseña encuestas que no pidan nombres, salvo que de verdad los necesites. Antes de pegar respuestas en una herramienta de IA, borra nombres, correos y cualquier comentario que identifique a un estudiante o a un miembro del personal. Usa solo herramientas aprobadas para todo lo que contenga información de estudiantes.",
            "Instrucción: “Estos son comentarios anónimos de una encuesta a las familias sobre los horarios de salida. Agrúpalos en temas, cuenta cuántos encajan en cada tema, cita dos comentarios breves típicos por tema y enumera tres sugerencias. No inventes comentarios.” Luego revisa tú los conteos en la hoja de cálculo; la IA a menudo cuenta mal."
          ],
          steps: ["Diseña encuestas sin nombres, salvo que se necesiten.", "Quita nombres, correos y comentarios identificadores antes de usar la IA.", "Usa herramientas aprobadas para todo lo que tenga información de estudiantes.", "Pide temas, conteos, citas típicas y sugerencias.", "Revisa tú los conteos."],
          words: [["Anónimo", "sin nombres ni datos que muestren quién es alguien."], ["Tema", "una idea común que aparece en muchas respuestas."]],
          slides: [
            { title: "Del formulario a la hoja y al resumen", bullets: ["Google Forms o Microsoft Forms", "La IA encuentra temas en los comentarios"] },
            { title: "Primero protege a las personas", bullets: ["No pidas nombres si no hace falta", "Quita los datos identificadores antes de la IA", "Herramientas aprobadas para información de estudiantes"] },
            { title: "Pide y luego revisa", bullets: ["Temas, conteos, citas típicas, sugerencias", "“No inventes comentarios”", "Revisa tú los conteos: la IA cuenta mal"] }
          ],
          tryIt: "Crea una encuesta anónima de tres preguntas en Google Forms o Microsoft Forms. Escribe diez respuestas inventadas, resúmelas con IA y revisa los conteos contra las respuestas.",
          youCanNow: "convertir las respuestas de una encuesta en un resumen exacto sin exponer información personal.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace que una encuesta sea anónima?", options: ["Que tenga un título corto", "Que no recoja nombres ni datos que identifiquen", "Que solo la lea el director", "Que se envíe por correo"], answer: 1, why: "Las encuestas anónimas no recogen nombres ni datos que identifiquen." },
            { objective: "O4", q: "La IA dice que 40 familias mencionaron el estacionamiento. ¿Qué haces antes de informarlo?", options: ["Revisar el conteo con la hoja de cálculo de las respuestas", "Informarlo tal cual", "Redondearlo a 50", "Preguntarle a la IA si está segura"], answer: 0, why: "Los conteos de la IA pueden estar mal, así que hay que revisarlos con los datos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Automatizaciones sencillas: plantillas, reglas y disparadores",
          minutes: 5,
          goal: "Configurar una automatización sencilla y mantener en ella una revisión humana.",
          text: [
            "No todo necesita IA. Muchos ahorros de tiempo son automatizaciones sencillas: plantillas de correo para respuestas comunes, reglas de correo que ordenan los mensajes en carpetas, plantillas de documentos para informes recurrentes, combinación de correspondencia para cartas personalizadas y recordatorios en el calendario.",
            "Las automatizaciones más grandes conectan pasos: cuando alguien envía un formulario, se agrega una fila a una hoja y se envía una confirmación; cada viernes, se recuerda al personal que entregue sus notas. Microsoft Power Automate y Google Apps Script pueden hacerlo; pregunta a tu equipo de tecnología qué está permitido en tu distrito antes de crear algo que toque datos escolares.",
            "Mantén una revisión humana siempre que una automatización envíe algo a las familias o haga un cambio importante. Un pequeño error repetido automáticamente a 500 familias es un gran error."
          ],
          steps: ["Empieza por lo sencillo: plantillas, reglas, recordatorios.", "Elige una tarea repetida para automatizar.", "Consulta a tu equipo de tecnología antes de conectar datos escolares.", "Agrega una revisión humana antes de que algo llegue a las familias.", "Prueba primero contigo como único destinatario."],
          words: [["Automatización", "una configuración que hace una tarea sola cuando pasa algo."], ["Disparador", "el evento que pone en marcha una automatización, como el envío de un formulario."], ["Combinación de correspondencia", "crear muchas cartas o correos personalizados a partir de una plantilla y una lista."]],
          slides: [
            { title: "Ahorros de tiempo sencillos", bullets: ["Plantillas de correo y reglas para ordenar", "Plantillas de documentos", "Combinación de correspondencia y recordatorios"] },
            { title: "Pasos conectados", bullets: ["Formulario enviado, fila agregada, confirmación enviada", "Power Automate o Apps Script", "Pregunta primero a tu equipo de tecnología"] },
            { title: "Mantén una revisión humana", bullets: ["Antes de que algo llegue a las familias", "Prueba primero contigo", "Los errores se multiplican solos"] }
          ],
          tryIt: "Configura una automatización sencilla: una plantilla de correo para una respuesta común o una regla que ordene un tipo de mensaje. Pruébala contigo y escribe dónde está la revisión humana.",
          youCanNow: "configurar automatizaciones sencillas con seguridad, con una revisión humana donde importa.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un disparador en una automatización?", options: ["La persona que la aprueba", "El último paso del proceso", "El evento que pone en marcha la automatización", "Un tipo de correo"], answer: 2, why: "Un disparador, como la llegada de un mensaje nuevo, pone en marcha la automatización." },
            { objective: "O5", q: "Creaste una regla que responde a las familias de forma automática. ¿Qué haces primero?", options: ["Activarla para todas las familias de una vez", "Desactivarla y olvidarte", "Pedir a las familias que la prueben", "Probarla contigo como único destinatario"], answer: 3, why: "Probar contigo detecta los errores antes de que lleguen a mucha gente." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir el tiempo ahorrado y mantenerlo",
          minutes: 6,
          goal: "Medir el tiempo antes y después y hacer que tus procesos perduren.",
          text: [
            "Solo ahorraste tiempo si las cifras lo dicen. Para cada proceso, compara los minutos de antes (de tu auditoría de tiempo) y de después, incluido el tiempo de revisión. Si un proceso tarda lo mismo por tener que corregir, cambia la instrucción o abandona el proceso.",
            "Escribe cada proceso en una página: el propósito, la instrucción o plantilla guardada, los pasos, la revisión humana y quién la hace. Así otra persona puede llevarlo cuando no estés, y el personal nuevo puede aprenderlo.",
            "Comparte los logros con el personal e invítalo a compartir sus procesos. Una carpeta compartida de instrucciones y plantillas de la escuela multiplica el tiempo ahorrado en todo el edificio. Revísala cada período escolar para que las instrucciones sigan siendo correctas cuando cambian los calendarios, las herramientas y las políticas."
          ],
          steps: ["Compara los minutos antes y después, incluida la revisión.", "Corrige o abandona los procesos que no ahorran tiempo.", "Escribe cada proceso en una página.", "Compártelos en una carpeta escolar de instrucciones y plantillas.", "Revísala cada período."],
          words: [["Antes y después", "comparar una medida antes y después de un cambio."], ["Documentación", "pasos por escrito para que otros puedan repetir un proceso."]],
          slides: [
            { title: "Cuenta los minutos", bullets: ["Antes frente a después", "Incluye el tiempo de revisión", "¿No hay ahorro? Corrígelo o abandónalo"] },
            { title: "Una página por proceso", bullets: ["Propósito, instrucción, pasos", "Revisión humana y responsable", "Otros pueden llevarlo"] },
            { title: "Extiende el ahorro", bullets: ["Carpeta compartida de instrucciones y plantillas", "Invita los procesos del personal", "Revísala cada período"] }
          ],
          tryIt: "Tarea final: usa tus tres procesos durante una semana (boletín, de la agenda a los acuerdos, de la encuesta al resumen). Anota los minutos de antes y después de cada uno, escribe cada proceso en una página con su revisión humana y ponlos en una carpeta compartida.",
          youCanNow: "crear, medir y compartir procesos administrativos con ayuda de IA que devuelven tiempo a los estudiantes.",
          quickCheck: [
            { objective: "O6", q: "¿Qué debe incluir el tiempo ahorrado?", options: ["Solo el tiempo que tardó la IA en responder", "También el tiempo de revisar y corregir", "Solo el mejor día de la semana", "El tiempo que dedicaron otras personas"], answer: 1, why: "El tiempo de revisar y corregir es parte del costo real de un proceso." },
            { objective: "O6", q: "Un proceso sigue tomando lo mismo que antes porque corriges muchos errores de la IA. ¿Qué harías?", options: ["Cambiar la instrucción o dejar el proceso", "Mantenerlo, porque la IA es nueva", "Dejar de revisar el resultado", "Añadir una segunda herramienta de IA"], answer: 0, why: "Un proceso que no ahorra tiempo se mejora o se deja." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Formularios, automatizaciones y medir lo ganado",
        questions: [
          { objective: "O4", q: "Antes de pegar comentarios de una encuesta en una herramienta de IA, debes:", options: ["Agregar nombres para dar contexto", "Agregar los números de identificación de los estudiantes", "Quitar nombres, correos y comentarios identificadores", "No hacer nada"], answer: 2, why: "Quitar los datos identificadores protege a las personas." },
          { objective: "O4", q: "La IA dice que 40 familias mencionaron el tráfico. Debes:", options: ["Revisar el conteo en la hoja de cálculo", "Publicarlo", "Duplicarlo", "Ignorar el tema"], answer: 0, why: "La IA a menudo cuenta mal." },
          { objective: "O5", q: "Antes de crear una automatización que toque datos escolares, pregunta:", options: ["A un estudiante", "A tu equipo de tecnología qué está permitido", "Al anuncio del proveedor", "A nadie"], answer: 1, why: "Los distritos fijan reglas para conectar datos escolares." },
          { objective: "O5", q: "¿Por qué probar una automatización primero contigo como único destinatario?", options: ["Para detectar errores antes de que lleguen a muchas personas", "Es más rápido", "Lo exige la ley", "Para ahorrar papel"], answer: 0, why: "Los errores se multiplican cuando están automatizados." },
          { objective: "O6", q: "Un proceso tarda lo mismo que antes por tener que corregir errores de la IA. Debes:", options: ["Mantenerlo de todos modos", "Agregar más pasos", "Dejar de revisar", "Cambiar la instrucción o abandonar el proceso"], answer: 3, why: "Solo cuenta el ahorro real de tiempo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para líderes escolares y educativos 6: Productividad y automatización de procesos",
    questions: [
      { objective: "O1", q: "Una auditoría de tiempo:", options: ["Revisa los relojes de la escuela", "Registra cómo usas el tiempo en las tareas", "Es una auditoría financiera", "Califica a los docentes"], answer: 1, why: "Mide antes de mejorar." },
      { objective: "O1", q: "Las tareas que requieren juicio sobre un estudiante concreto deben:", options: ["Automatizarse", "Pasar a la IA", "Quedarse contigo", "Omitirse"], answer: 2, why: "Las decisiones sobre personas las toman personas." },
      { objective: "O1", q: "Las cifras de “antes” son:", options: ["Calificaciones de exámenes", "Números de teléfono", "Los minutos dedicados antes de automatizar", "Partidas del presupuesto"], answer: 2, why: "Permiten medir el tiempo ahorrado." },
      { objective: "O2", q: "La instrucción del boletín debe:", options: ["Guardarse y reutilizarse cada semana", "Reescribirse desde cero cada vez", "Ser secreta", "Ser larga y vaga"], answer: 0, why: "Las instrucciones guardadas dan coherencia." },
      { objective: "O2", q: "Antes de enviar el boletín, revisa:", options: ["El tipo de letra", "Solo el título", "Nada", "Cada fecha, hora y lugar"], answer: 3, why: "Las fechas equivocadas causan problemas reales a las familias." },
      { objective: "O2", q: "Los nombres de estudiantes en los boletines deben seguir:", options: ["Lo que sugiera la IA", "Las reglas de tu escuela sobre medios e información de directorio", "Ninguna regla", "Las modas de las redes sociales"], answer: 1, why: "Las escuelas tienen reglas para compartir información de estudiantes." },
      { objective: "O3", q: "Una agenda con tiempos da a cada punto:", options: ["Nada", "Un precio", "Una contraseña", "Un tiempo y un resultado esperado"], answer: 3, why: "Los resultados mantienen enfocadas las reuniones." },
      { objective: "O3", q: "Una lista de acuerdos incluye:", options: ["Chismes", "Solo el tema", "Tarea, responsable y fecha límite", "Sueldos"], answer: 2, why: "Tener responsables claros hace que las cosas se hagan." },
      { objective: "O3", q: "Si las notas no nombran a un responsable, la IA debe escribir:", options: ["FALTA", "Una suposición", "Tu nombre", "Nada"], answer: 0, why: "Marcar los huecos evita responsables inventados." },
      { objective: "O3", q: "Los grabadores de reuniones con IA requieren:", options: ["Usarlos en secreto", "Revisar la política y avisar a los participantes", "Ninguna revisión", "Solo el consentimiento de los estudiantes"], answer: 1, why: "Grabar plantea temas de consentimiento y privacidad." },
      { objective: "O4", q: "Google Forms y Microsoft Forms reúnen las respuestas en:", options: ["Una hoja de cálculo", "Un video", "Una impresora", "Un chatbot"], answer: 0, why: "Las respuestas llegan a una hoja que puedes analizar." },
      { objective: "O4", q: "Una encuesta anónima:", options: ["No tiene preguntas", "Pide la dirección de todos", "Es ilegal", "No pide nombres ni datos identificadores"], answer: 3, why: "El anonimato protege a quienes responden." },
      { objective: "O4", q: "Pedir a la IA que “cite dos comentarios típicos por tema” te ayuda a:", options: ["Inventar comentarios", "Mostrar las voces reales detrás de cada tema", "Ocultar resultados", "Ahorrar papel"], answer: 1, why: "Las citas hacen concretos los resúmenes; aun así, revísalas." },
      { objective: "O5", q: "¿Cuál es una automatización sencilla?", options: ["Una reunión de personal", "Un edificio nuevo", "Una regla de correo que ordena los mensajes en carpetas", "Una excursión"], answer: 2, why: "Las reglas y plantillas ahorran tiempo sin IA." },
      { objective: "O5", q: "La combinación de correspondencia crea:", options: ["Un gráfico de hoja de cálculo", "Una carta larga", "Muchas cartas personalizadas a partir de una plantilla y una lista", "Una encuesta"], answer: 2, why: "Personaliza a gran escala." },
      { objective: "O5", q: "Un disparador es:", options: ["El evento que pone en marcha una automatización", "Un timbre escolar", "Una contraseña", "Una calificación"], answer: 0, why: "Por ejemplo, el envío de un formulario." },
      { objective: "O5", q: "¿Dónde debe ir una revisión humana?", options: ["Al final del año", "En ningún lado", "Solo después de las quejas", "Antes de enviar algo a las familias"], answer: 3, why: "Los errores hacia las familias se multiplican rápido." },
      { objective: "O6", q: "El tiempo ahorrado debe incluir:", options: ["Solo el tiempo de redacción", "El tiempo dedicado a revisar y corregir", "Nada", "Solo el tiempo de otras personas"], answer: 1, why: "El tiempo de revisión es parte del costo real." },
      { objective: "O6", q: "Escribir cada proceso en una página permite que:", options: ["Se borre", "Nadie lo vea", "La IA lo califique", "Otros lo lleven cuando no estés"], answer: 3, why: "La documentación mantiene vivos los procesos." },
      { objective: "O6", q: "Una carpeta escolar compartida de instrucciones debe revisarse:", options: ["Cada diez años", "Nunca", "Cada período escolar", "Solo por los estudiantes"], answer: 2, why: "Los calendarios, las herramientas y las políticas cambian." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      3,
      4,
      7,
      9,
      11,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Proceso del boletín",
        objective: "O2",
        notYet: "El boletín no se revisó con las notas, o una traducción no se revisó.",
        meets: "Las notas en viñetas se convirtieron en un borrador terminado y revisado, con cualquier traducción revisada por una persona calificada que hable el idioma.",
        exceeds: "Usa una instrucción guardada que prohíbe añadir algo que no esté en las notas."
      },
      {
        name: "Proceso de la reunión",
        objective: "O3",
        notYet: "No hay lista de acuerdos, o hay tareas sin responsable o sin fecha.",
        meets: "Una agenda redactada con IA y una lista de acuerdos con responsables y fechas, enviada el mismo día.",
        exceeds: "Los responsables que faltan se marcan y se les da seguimiento."
      },
      {
        name: "Proceso de la encuesta",
        objective: "O4",
        notYet: "Los datos incluían nombres, o no se revisaron los conteos.",
        meets: "Resultados de la encuesta resumidos con IA usando solo datos sin nombres.",
        exceeds: "Los conteos se revisaron con la hoja de cálculo y se citaron comentarios típicos de cada tema."
      },
      {
        name: "Tiempo medido",
        objective: "O6",
        notYet: "No se anotaron los minutos de antes o de después.",
        meets: "Minutos de antes y de después anotados para cada proceso.",
        exceeds: "Los minutos de después incluyen el tiempo de revisar y corregir."
      },
      {
        name: "Revisiones humanas",
        objective: "O5",
        notYet: "Un proceso envía algo a las familias sin revisión humana.",
        meets: "Cada proceso nombra la revisión humana que mantiene.",
        exceeds: "Cada proceso está escrito en una página en una carpeta compartida para que otros puedan usarlo."
      }
    ]
  },
  evaluation: {
    results: [
      "Personal que termina el curso y aprueba la tarea final (rúbrica)",
      "Minutos ahorrados por semana en los tres procesos (registros de antes y después)",
      "Procesos que siguen en uso después de 30 días (encuesta de seguimiento)",
      "Escuelas con una carpeta compartida de procesos de una página que se revisa cada periodo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet y un asistente de IA aprobado por el distrito",
      "Google Forms o Microsoft Forms, y Google Docs o Microsoft 365",
      "Un registro sencillo de tiempo para los minutos de antes y de después",
      "Unos 60 minutos para las lecciones y las comprobaciones, más una semana usando los procesos"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego hagan la auditoría de tiempo en grupo y comparen las mayores pérdidas de tiempo.",
      "Mantén la información personal de estudiantes y personal fuera de las herramientas no aprobadas; usa respuestas de encuesta inventadas en la práctica.",
      "Pregunta al equipo de tecnología qué automatizaciones están permitidas antes de que alguien cree una.",
      "Pide al personal que pruebe las automatizaciones consigo mismo antes de que lleguen a las familias.",
      "Califica la tarea final con la rúbrica y reúne los minutos de antes y de después para compartir el ahorro con la escuela."
    ]
  }
};
