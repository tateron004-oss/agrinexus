"use strict";

// Koach Learn course (shared), Spanish translation of shared/telemedicine-portal.js. See scripts/koachlearn-courses/README.md, "Translations".
// Records-rights facts as in the English course (checked 27 October 2026 against HealthIT.gov, in `sources`).

module.exports = {
  id: "telemedicine-portal-es",
  lang: "es",
  translationOf: "telemedicine-portal",
  category: "Seniors and Technology",
  name: "Usar la telemedicina y el portal del paciente",
  skills: "Iniciar sesión en un portal del paciente, Leer resultados de análisis y notas de consulta, Enviar mensajes a tu equipo de atención, Pedir resurtidos y citas, Unirse a una consulta por video",
  outcome: "iniciar sesión en tu portal del paciente, encontrar tus resultados de análisis y notas de consulta, enviar un mensaje claro a tu equipo de atención, pedir un resurtido de medicina o una cita y unirte a una consulta por video preparado con tus preguntas.",
  about: [
    "Muchas clínicas y hospitales tienen ahora un portal del paciente: un sitio web o una aplicación segura donde puedes ver tu información de salud y comunicarte con tu equipo de atención. Muchos también ofrecen consultas por video, a veces llamadas telemedicina o telesalud, para que veas a un médico o enfermero sin viajar.",
    "Este curso te enseña a entrar en tu portal, leer resultados, enviar mensajes, pedir resurtidos y citas, y prepararte y unirte a una consulta por video.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Hay una breve comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Este curso enseña a usar las herramientas; para preguntas sobre tu propia salud, pregunta siempre a tu médico, enfermero o farmacéutico. En una emergencia, llama al 911, no uses el portal."
  ],
  finalTask: "Inicia sesión en tu portal del paciente. Busca un resultado de análisis o un resumen de consulta y luego escribe (y envía, si tienes una pregunta real) un mensaje corto y claro a tu equipo de atención con tu pregunta. Busca dónde pedir un resurtido o una cita. Por último, escribe una lista de tres preguntas y tus medicinas actuales para tu próxima consulta, y encuentra dónde aparecerá el enlace de la consulta por video en el portal o en tu correo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Pacientes y cuidadores que usan clínicas, hospitales o planes de salud en Estados Unidos: personas mayores, personas con enfermedades de largo plazo, cuidadores que ayudan a un pariente, personas que regresan a la comunidad y cualquiera cuya clínica ahora envía en línea los resultados y los enlaces de las consultas.",
    startingPoint: "Pueden usar un teléfono o una computadora para abrir aplicaciones y sitios web y escribir mensajes cortos. Muchos recibieron un código de activación del portal pero nunca iniciaron sesión, se preocupan por los resultados que ven en línea y no se han unido a una consulta por video.",
    gap: "Las clínicas ahora comparten resultados, notas de consulta, resurtidos, citas y consultas por video por medio de portales del paciente. Los pacientes que no pueden usarlos esperan más, se pierden resultados y mensajes, se quedan sin medicina o faltan a consultas por video, y algunos envían datos privados de salud por canales que no son seguros.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explican palabras como rango de referencia, código de activación y registro en línea (eCheck-in)",
      "Dispositivos: un teléfono, una tableta o una computadora con cámara y micrófono para las consultas por video",
      "Tiempo: unos 5 minutos por lección, unos 60 minutos en total",
      "No es consejo médico: las preguntas de salud van al médico, la enfermera o el farmacéutico de la persona; las emergencias van al 911",
      "Privacidad: nunca se escriben el nombre, la fecha de nacimiento ni los números de expediente en una herramienta de IA, y no se envían datos de salud por correo o mensaje de texto común"
    ],
    prerequisites: "Ninguno. Correo electrónico y comunicación en línea ayuda a quienes todavía no tienen una cuenta de correo."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un código de activación o el enlace de registro oficial de tu clínica", action: "crear tu cuenta del portal del paciente e iniciar sesión con seguridad", standard: "usando el sitio o la aplicación oficial, una contraseña que no usas en ningún otro lugar y la verificación en dos pasos si se ofrece" },
    { id: "O2", condition: "En tu portal del paciente", action: "encontrar un resultado de análisis y un resumen de consulta y anotar cualquier pregunta sobre ellos", standard: "leyendo el resultado junto a su rango de referencia y llevando las preguntas a tu equipo de atención en lugar de adivinar" },
    { id: "O3", condition: "Ante una pregunta de salud que no es urgente", action: "escribir un mensaje corto y claro por el portal a tu equipo de atención", standard: "con tu pregunta y datos útiles, y llamando al 911 si algo es urgente" },
    { id: "O4", condition: "En tu portal del paciente", action: "pedir un resurtido de una medicina y encontrar dónde hacer o cambiar una cita", standard: "pidiendo el resurtido unos días antes de que se acabe la medicina y llamando a la clínica cuando el portal no lo permite" },
    { id: "O5", condition: "El día antes de una consulta por video", action: "preparar tu aparato, tu espacio, tus preguntas y tu lista de medicinas", standard: "con el aparato cargado, la cámara y el micrófono probados y una lista escrita lista" },
    { id: "O6", condition: "El día de una consulta por video", action: "unirte a tiempo, hablar con claridad y repetir el plan antes de colgar", standard: "uniéndote de 10 a 15 minutos antes y revisando después el resumen de la consulta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tu portal del paciente",
      lessons: [
        {
          objectives: ["O1"],
          title: "Entrar en tu portal del paciente",
          minutes: 5,
          goal: "Crear tu cuenta del portal e iniciar sesión con seguridad.",
          text: [
            "Un portal del paciente es un sitio web o una aplicación segura de tu clínica, tu hospital o tu plan de salud. Uno común es MyChart, que usan muchos sistemas de salud, pero el portal de tu clínica puede tener otro nombre. Pregunta en la recepción qué portal usan.",
            "Para registrarte, normalmente necesitas un código de activación de la clínica (impreso en un resumen de consulta o enviado por mensaje o correo), o te registras con tu nombre, tu fecha de nacimiento y un código que llega a tu teléfono. Usa el enlace del sitio web oficial de tu clínica o la aplicación oficial de la tienda de aplicaciones.",
            "Elige una contraseña segura que no uses en ningún otro lugar y activa la verificación en dos pasos si la ofrecen. No inicies sesión en una computadora compartida a menos que cierres la sesión y el navegador después."
          ],
          steps: ["Pregunta a tu clínica qué portal usa.", "Consigue tu código de activación o el enlace de registro en la clínica.", "Usa el sitio web oficial de la clínica o la aplicación oficial.", "Crea una contraseña segura y única.", "Activa la verificación en dos pasos si la ofrecen.", "En una computadora compartida: cierra la sesión y el navegador."],
          words: [["Portal del paciente", "un sitio web o una aplicación segura donde ves tu información de salud y te comunicas con tu equipo de atención."], ["Código de activación", "un código de un solo uso de tu clínica que une tu cuenta del portal con tu expediente."], ["Equipo de atención", "tu médico, los enfermeros y el resto del personal que cuida tu salud."]],
          slides: [
            { title: "Qué es un portal del paciente", bullets: ["Un sitio o aplicación segura de tu clínica o tu plan", "MyChart es común; pregunta a tu clínica cuál usa"] },
            { title: "Registrarse", bullets: ["Código de activación de la clínica", "Solo el sitio web o la aplicación oficial"] },
            { title: "Mantenlo seguro", bullets: ["Contraseña segura y única", "Verificación en dos pasos", "Cierra la sesión en computadoras compartidas"] }
          ],
          tryIt: "Busca el portal de tu clínica en su sitio web oficial o pregunta en la recepción. Crea tu cuenta o inicia sesión, y luego cierra la sesión y vuelve a entrar para asegurarte de que puedes hacerlo solo.",
          youCanNow: "encontrar el portal del paciente de tu clínica, crear tu cuenta e iniciar sesión con seguridad.",
          quickCheck: [
            { objective: "O1", q: "¿Quién te puede decir qué portal del paciente usa tu clínica?", options: ["Un anuncio de un buscador", "Un desconocido en internet", "Tu banco", "La recepción de la clínica"], answer: 3, why: "Pregunta en la recepción qué portal usa la clínica." },
            { objective: "O1", q: "Iniciaste sesión en tu portal en una computadora de la biblioteca. ¿Qué harías cuando termines?", options: ["Dejar la página abierta para después", "Cerrar sesión y cerrar el navegador", "Guardar tu contraseña en el navegador", "Escribir tu contraseña en el escritorio"], answer: 1, why: "En una computadora compartida, cierra sesión y cierra el navegador al terminar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Leer resultados de análisis y notas de consulta",
          minutes: 5,
          goal: "Encontrar un resultado de análisis y un resumen de consulta en tu portal.",
          text: [
            "Los portales tienen secciones como Resultados de análisis, Consultas o Citas, Medicamentos y Resumen de salud. Los resultados suelen mostrar tu número junto a un rango normal o de referencia. Un resultado fuera del rango suele estar marcado, pero no siempre significa que algo esté mal.",
            "Puede que veas un resultado antes de que tu médico te hable de él. No te asustes y no adivines. Anota tu pregunta y pregúntale a tu equipo de atención. Una herramienta de IA puede ayudarte a explicar una palabra médica con lenguaje sencillo, pero nunca escribas en ella tu nombre, tu fecha de nacimiento ni tus números de expediente, y revisa su respuesta con tu equipo de atención.",
            "HealthIT.gov (el sitio del gobierno de EE. UU. sobre la tecnología de salud) explica que, según la Regla de Privacidad de HIPAA, tienes derecho a ver y recibir una copia de tu expediente de salud, incluso copias electrónicas, aunque no hayas pagado tus cuentas médicas."
          ],
          steps: ["Abre Resultados de análisis o Resultados.", "Toca un resultado para ver tu número y el rango normal.", "Abre Consultas para leer tu resumen de consulta.", "Anota cualquier palabra o resultado que no entiendas.", "Pregúntale a tu equipo de atención; no adivines."],
          words: [["Rango de referencia", "el rango habitual de resultados en personas sanas."], ["Resumen de consulta", "notas de tu cita, como tu plan y tus medicinas."], ["HIPAA", "una ley de EE. UU. que protege tu información de salud y te da derecho a ver tu expediente."]],
          slides: [
            { title: "Secciones del portal", bullets: ["Resultados de análisis", "Consultas o Citas", "Medicamentos", "Resumen de salud"] },
            { title: "Leer un resultado", bullets: ["Tu número junto a un rango normal", "Fuera del rango no siempre es un problema", "Pregunta; no adivines"] },
            { title: "Usar la IA para explicar palabras", bullets: ["Sirve para una palabra médica en lenguaje sencillo", "Nunca escribas tu nombre, fecha de nacimiento ni números de expediente", "Revísalo con tu equipo de atención"] },
            { title: "Tu derecho a tu expediente", bullets: ["Verlo y recibir una copia, incluso electrónica", "Aunque tengas cuentas médicas sin pagar"] }
          ],
          sources: [{ name: "HealthIT.gov: Cómo obtener tu expediente de salud", url: "https://www.healthit.gov/how-to-get-your-health-record/" }],
          tryIt: "En tu portal, abre un resultado de análisis o un resumen de consulta. Anota una palabra o un número que te gustaría que te explicaran, para preguntarle a tu equipo de atención.",
          youCanNow: "encontrar y leer un resultado de análisis y un resumen de consulta, y saber cuándo preguntarle a tu equipo de atención.",
          quickCheck: [
            { objective: "O2", q: "¿Qué significa un resultado fuera del rango de referencia?", options: ["No siempre es un problema; pregúntale a tu equipo de atención", "Seguro tienes una enfermedad grave", "El análisis se hizo mal", "Debes dejar todas tus medicinas"], answer: 0, why: "Un resultado marcado no siempre significa que algo esté mal; pregúntale a tu equipo de atención." },
            { objective: "O2", q: "Tu médico todavía no ha visto tus resultados nuevos y estás preocupado. ¿Qué harías?", options: ["Adivinar qué significan en un foro", "Escribir tu nombre y tu número de expediente en una herramienta de IA", "Anotar tu pregunta y hacérsela a tu equipo de atención", "Cambiar tú mismo tus medicinas"], answer: 2, why: "No te asustes ni adivines; anota tu pregunta y hazla a tu equipo de atención." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Enviar mensajes a tu equipo de atención",
          minutes: 5,
          goal: "Enviar un mensaje corto y claro a tu equipo de atención por el portal.",
          text: [
            "La mayoría de los portales tienen una sección de Mensajes para preguntas que no son urgentes, como una pregunta sobre una medicina, un formulario o un resultado. Las respuestas pueden tardar un día o más, así que no uses los mensajes para nada urgente. Para una emergencia, llama al 911.",
            "Un buen mensaje es corto. Di para quién es, tu pregunta y los detalles que ayuden: cuándo empezó, qué has probado y qué necesitas. Por ejemplo: \"Desde el lunes me mareo después de tomar en la mañana mi nueva pastilla para la presión. ¿Debo tomarla en la noche?\"",
            "Algunas clínicas pueden cobrarle a tu seguro los mensajes que necesitan consejo médico. Pregunta en tu clínica si no estás seguro. Los mensajes del portal son seguros; no envíes datos de salud por correo o mensaje de texto normal en su lugar."
          ],
          steps: ["Abre Mensajes y elige Mensaje nuevo.", "Elige para quién es o el tema.", "Escribe tu pregunta, cuándo empezó y qué necesitas.", "Léelo una vez y envíalo.", "Revisa el portal o tu correo para ver la respuesta.", "¿Urgente? Llama a la clínica. ¿Emergencia? Llama al 911."],
          words: [["Mensaje seguro", "un mensaje privado enviado dentro del portal."], ["No urgente", "que puede esperar sin peligro uno o dos días por una respuesta."]],
          slides: [
            { title: "Los mensajes son para preguntas no urgentes", bullets: ["Medicinas, formularios, resultados", "Las respuestas pueden tardar un día o más", "Emergencia: llama al 911"] },
            { title: "Un mensaje claro", bullets: ["Para quién es y tu pregunta", "Cuándo empezó y qué probaste", "Qué necesitas"] },
            { title: "Bueno saberlo", bullets: ["Algunas clínicas pueden cobrar los mensajes con consejo médico", "Usa el portal, no el correo ni los mensajes normales"] }
          ],
          tryIt: "Abre Mensajes en tu portal y escribe un borrador de mensaje corto con las tres partes. Si tienes una pregunta real que no es urgente, envíala; si no, borra el borrador.",
          youCanNow: "escribir y enviar un mensaje claro y no urgente a tu equipo de atención, y saber cuándo llamar en su lugar.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué no se deben usar los mensajes del portal para problemas urgentes?", options: ["Los mensajes no son seguros", "Los mensajes siempre los lee un robot", "Las respuestas pueden tardar un día o más", "Cada mensaje cuesta dinero"], answer: 2, why: "Las respuestas pueden tardar un día o más, así que las emergencias necesitan el 911." },
            { objective: "O3", q: "Tienes una pregunta sobre un formulario que te dio tu clínica. ¿Qué harías?", options: ["Enviar un mensaje corto por el portal diciendo qué formulario es y qué necesitas", "Enviar tus datos de salud por correo común", "Llamar al 911", "Publicar la pregunta en las redes sociales"], answer: 0, why: "Las preguntas que no son urgentes van en un mensaje corto y claro por el portal." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu portal del paciente",
        questions: [
          { objective: "O1", q: "¿Qué es un portal del paciente?", options: ["Una red social", "Un sitio o aplicación segura para ver tu información de salud y comunicarte con tu equipo de atención", "Una farmacia", "Una oficina de beneficios del gobierno"], answer: 1, why: "Los portales dan acceso seguro a tu expediente y a tu equipo de atención." },
          { objective: "O1", q: "¿Dónde debes conseguir el enlace para registrarte en tu portal?", options: ["En un mensaje de un desconocido", "En un anuncio de búsqueda", "En el sitio web oficial o la recepción de tu clínica", "En una publicación de redes sociales"], answer: 2, why: "Las fuentes oficiales te alejan de los sitios falsos." },
          { objective: "O2", q: "Un resultado está fuera del rango normal y tu médico todavía no te ha llamado. ¿Qué haces?", options: ["Anotas tu pregunta y le preguntas a tu equipo de atención", "Te asustas", "Dejas todas tus medicinas", "Lo publicas en redes sociales"], answer: 0, why: "Un resultado marcado no siempre es un problema; pregúntale a tu equipo de atención." },
          { objective: "O2", q: "Quieres que una herramienta de IA te explique una palabra médica. ¿Qué debes dejar fuera?", options: ["La palabra médica", "Las palabras \"explícalo de forma sencilla\"", "Un pedido de un ejemplo", "Tu nombre, fecha de nacimiento y números de expediente"], answer: 3, why: "Nunca pongas tus datos privados de salud en herramientas de IA." },
          { objective: "O3", q: "Tienes un dolor de pecho repentino. ¿Qué haces?", options: ["Envías un mensaje por el portal", "Llamas al 911", "Esperas una consulta por video la próxima semana", "Lees tus resultados viejos"], answer: 1, why: "Los portales son para preguntas no urgentes; las emergencias necesitan el 911." }
        ]
      }
    },
    {
      name: "Capítulo 2: Resurtidos, citas y consultas por video",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pedir resurtidos y hacer citas",
          minutes: 4,
          goal: "Pedir un resurtido de una medicina y encontrar dónde hacer o cambiar una cita.",
          text: [
            "En la sección Medicamentos, muchos portales muestran un botón para pedir un resurtido junto a cada medicina. Elige la medicina y tu farmacia, y envía. Pídelo unos días antes de que se te acabe, porque la clínica y la farmacia necesitan tiempo.",
            "En la sección Citas o Consultas, a menudo puedes ver tus próximas consultas, hacer algunos tipos de citas, cancelar o anotarte en una lista de espera. Algunas citas se deben hacer por teléfono; el portal lo dirá.",
            "Tu farmacia puede tener su propia aplicación que te avisa cuando el resurtido está listo. Si algo no funciona en el portal, llama a la clínica; eso siempre está bien."
          ],
          steps: ["Abre Medicamentos.", "Toca el botón de pedir resurtido junto a la medicina.", "Elige tu farmacia y envía.", "Pídelo unos días antes de que se te acabe.", "Abre Citas para ver, hacer, cambiar o cancelar consultas."],
          words: [["Resurtido", "más cantidad de una medicina que ya tomas."], ["Lista de espera", "una lista que te ofrece una hora más temprana si alguien cancela."]],
          slides: [
            { title: "Resurtidos", bullets: ["Sección Medicamentos", "Pedir resurtido, elegir farmacia, enviar", "Pídelo unos días antes de que se acabe"] },
            { title: "Citas", bullets: ["Ver las próximas consultas", "Hacer, cambiar o cancelar algunas consultas", "Algunas todavía necesitan una llamada"] },
            { title: "Cuando no funciona", bullets: ["Llama a la clínica", "Eso siempre está bien"] }
          ],
          tryIt: "Abre la sección Medicamentos de tu portal y encuentra el botón de resurtido (envía un pedido solo si lo necesitas). Luego abre Citas y encuentra tu próxima consulta o dónde hacer una.",
          youCanNow: "pedir un resurtido y encontrar, hacer o cambiar una cita en tu portal.",
          quickCheck: [
            { objective: "O4", q: "¿Dónde muestran muchos portales un botón para pedir un resurtido?", options: ["En la sección Resultados de análisis", "Junto a cada medicina, en la sección Medicamentos", "En la bandeja de Mensajes", "En la página de inicio de sesión"], answer: 1, why: "Muchos portales ponen un botón de resurtido junto a cada medicina." },
            { objective: "O4", q: "El botón de resurtido del portal no funciona para una de tus medicinas. ¿Qué harías?", options: ["Dejar de tomar la medicina", "Esperar a que se acabe", "Pedir la medicina en un anuncio de un sitio web", "Llamar a la clínica"], answer: 3, why: "Si algo no funciona en el portal, siempre está bien llamar a la clínica." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Prepararse para una consulta por video",
          minutes: 5,
          goal: "Preparar tu aparato, tu espacio y tus preguntas antes de una consulta por video.",
          text: [
            "Una consulta por video (también llamada telemedicina o telesalud) te permite ver a un médico, enfermero o consejero en tu teléfono, tableta o computadora. Funciona bien para muchas consultas de seguimiento, revisiones de medicinas, consultas de salud mental y problemas sencillos. Algunos problemas todavía necesitan un examen en persona, y tu equipo de atención te lo dirá.",
            "Prepárate el día anterior: carga tu aparato, asegúrate de tener instalada la aplicación del portal o la de video y prueba tu cámara y tu micrófono. Muchos portales tienen un botón de prueba o un registro en línea (eCheck-in) que puedes hacer antes.",
            "Busca un lugar tranquilo, privado y con buena luz. Anota tus preguntas, tus síntomas y cuándo empezaron, y una lista de tus medicinas. Ten cerca tus lentes, los frascos de tus pastillas y, si ayuda, una medición de la presión o un termómetro. Si quieres, un familiar o cuidador puede unirse para ayudarte."
          ],
          steps: ["Carga tu aparato y revisa que la aplicación esté instalada.", "Prueba la cámara y el micrófono.", "Haz el registro en línea (eCheck-in) en el portal.", "Elige un lugar tranquilo, privado y con buena luz.", "Anota tus preguntas, síntomas y medicinas.", "Ten cerca los frascos de pastillas y tus lentes."],
          words: [["Telemedicina o telesalud", "ver a tu equipo de atención por video o teléfono en lugar de en persona."], ["Registro en línea (eCheck-in)", "llenar formularios en el portal antes de tu consulta."]],
          slides: [
            { title: "Qué es una consulta por video", bullets: ["Ves a tu equipo de atención en una pantalla", "Sirve para seguimientos, revisiones de medicinas, consejería", "Algunos problemas todavía necesitan una consulta en persona"] },
            { title: "El día anterior", bullets: ["Carga tu aparato", "Prueba la cámara y el micrófono", "Haz el registro en línea"] },
            { title: "Ten listo", bullets: ["Un lugar tranquilo, privado y con buena luz", "Preguntas, síntomas y lista de medicinas", "Frascos de pastillas y lentes cerca"] }
          ],
          tryIt: "Escribe una lista para tu próxima consulta: tres preguntas, tus síntomas y cuándo empezaron, y cada medicina que tomas con su dosis. Guárdala junto a tu aparato.",
          youCanNow: "preparar tu aparato, tu espacio y tus preguntas para una consulta por video.",
          quickCheck: [
            { objective: "O5", q: "¿Qué tipo de consulta suele funcionar bien por video?", options: ["Una revisión de medicinas o un seguimiento", "Una emergencia", "Una consulta que necesita un examen en persona", "Una cirugía"], answer: 0, why: "Las consultas por video funcionan bien para muchos seguimientos, revisiones de medicinas y consejería." },
            { objective: "O5", q: "Tu consulta por video es mañana y no estás seguro de que tu cámara funcione. ¿Qué harías hoy?", options: ["Esperar a ver durante la consulta", "Cancelar la consulta", "Probar la cámara y el micrófono, con el botón de prueba del portal si tiene uno", "Pedirle a la clínica que vaya a tu casa"], answer: 2, why: "Probar el día antes te da tiempo para arreglar un problema." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Unirse a una consulta por video y terminarla",
          minutes: 5,
          goal: "Unirte a tiempo a una consulta por video, hablar con claridad y saber los próximos pasos.",
          text: [
            "Únete de 10 a 15 minutos antes. Abre la cita en tu portal y toca el botón para empezar la consulta por video, o usa el enlace que te envió la clínica. Permite la cámara y el micrófono cuando te lo pida. Puede que esperes en una sala de espera virtual hasta que se una el profesional de salud.",
            "Durante la consulta, mira la pantalla, habla con claridad y usa tu lista. Si se corta el sonido o el video, mantén la calma; el profesional normalmente te volverá a llamar, así que ten tu teléfono cerca. Está bien pedirle que repita o que explique algo de forma sencilla.",
            "Antes de colgar, repite el plan: \"Entonces, ¿tomo la pastilla nueva en la noche y vuelvo en dos semanas?\" Después, revisa en el portal el resumen de la consulta y cualquier receta o análisis nuevo."
          ],
          steps: ["Únete de 10 a 15 minutos antes desde el portal o el enlace de la clínica.", "Permite la cámara y el micrófono.", "Espera en la sala de espera virtual.", "Usa tu lista; pide que te expliquen de forma sencilla si hace falta.", "Repite el plan antes de colgar.", "Después, lee el resumen de la consulta en el portal."],
          words: [["Sala de espera virtual", "una pantalla donde esperas hasta que se une el profesional de salud."], ["Profesional de salud", "un médico, enfermero, asistente médico o consejero que te atiende."]],
          slides: [
            { title: "Unirse", bullets: ["De 10 a 15 minutos antes", "Desde el portal o el enlace de la clínica", "Permite la cámara y el micrófono"] },
            { title: "Durante la consulta", bullets: ["Usa tu lista", "Pide que te expliquen de forma sencilla", "¿Se cortó? Ten tu teléfono cerca"] },
            { title: "Antes de colgar", bullets: ["Repite el plan", "Pregunta cuándo volver"] },
            { title: "Después", bullets: ["Lee el resumen de la consulta en el portal", "Revisa las recetas y los análisis nuevos"] }
          ],
          tryIt: "Práctica de la tarea final: en tu portal, abre una cita próxima o pasada y encuentra dónde aparece el botón o el enlace de la consulta por video. Luego haz la tarea final: un resultado, un mensaje, resurtidos y citas, y tu lista para la consulta.",
          youCanNow: "unirte a tiempo a una consulta por video, repasar tu lista, confirmar el plan y encontrar el resumen después.",
          quickCheck: [
            { objective: "O6", q: "¿Desde dónde puedes empezar normalmente una consulta por video?", options: ["Desde un enlace en un mensaje de texto cualquiera", "Desde la cita en tu portal, o desde el enlace que te envió la clínica", "Desde un anuncio de un buscador", "Desde la aplicación de tu banco"], answer: 1, why: "Abre la cita en tu portal o usa el enlace de la clínica." },
            { objective: "O6", q: "Al final de la consulta, el médico explica rápido un plan nuevo. ¿Qué harías?", options: ["Colgar y adivinar después", "Preguntarle a un vecino qué quiso decir el médico", "No decir nada para ahorrar tiempo", "Pedirle que lo explique de forma sencilla y luego repetir el plan"], answer: 3, why: "Repetir el plan asegura que entendiste los próximos pasos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Resurtidos, citas y consultas por video",
        questions: [
          { objective: "O4", q: "¿Cuál es el mejor momento para pedir un resurtido?", options: ["Después de una semana sin la medicina", "Unos días antes de que se te acabe", "Solo en una consulta por video", "Nunca por el portal"], answer: 1, why: "La clínica y la farmacia necesitan tiempo para tramitarlo." },
          { objective: "O4", q: "El portal dice que un tipo de cita se debe hacer por teléfono. ¿Qué haces?", options: ["Te rindes", "Envías diez mensajes", "Llamas a la clínica", "Haces una cita en línea con otro médico"], answer: 2, why: "Algunas consultas solo se pueden pedir por teléfono." },
          { objective: "O5", q: "¿Qué debes hacer el día antes de una consulta por video?", options: ["Cargar tu aparato y probar la cámara y el micrófono", "Borrar la aplicación", "Cambiar tu contraseña", "Nada"], answer: 0, why: "Probar antes evita problemas a la hora de la consulta." },
          { objective: "O6", q: "¿Con cuánta anticipación debes unirte a una consulta por video?", options: ["30 minutos tarde", "Justo a la hora", "Solo cuando te llamen", "De 10 a 15 minutos antes"], answer: 3, why: "Unirte antes deja tiempo para el registro y los problemas técnicos." },
          { objective: "O6", q: "¿Por qué repetir el plan antes de colgar?", options: ["Para alargar la consulta", "Para asegurarte de que entendiste qué hacer después", "Se exige para recibir un reembolso", "Para probar el micrófono"], answer: 1, why: "Repetir el plan detecta malentendidos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Usar la telemedicina y el portal del paciente",
    questions: [
      { objective: "O1", q: "Un portal del paciente común que usan muchos sistemas de salud es:", options: ["MyChart", "TikTok", "DoorDash", "Netflix"], answer: 0, why: "MyChart se usa mucho; tu clínica puede usar otro." },
      { objective: "O1", q: "Un código de activación viene de:", options: ["Un amigo de redes sociales", "Tu clínica", "Un anuncio emergente", "Cualquier sitio web"], answer: 1, why: "Las clínicas dan códigos de activación para unir tu cuenta." },
      { objective: "O1", q: "En una computadora de la biblioteca, después de usar tu portal, debes:", options: ["Dejar la sesión abierta", "Guardar tu contraseña", "Cerrar la sesión y el navegador", "Anotar tu contraseña en una nota"], answer: 2, why: "Así la siguiente persona no entra en tu expediente de salud." },
      { objective: "O1", q: "¿Qué da más protección a tu cuenta del portal?", options: ["Una contraseña corta", "Compartir tu contraseña con un amigo", "Usar la misma contraseña en todas partes", "La verificación en dos pasos"], answer: 3, why: "La verificación en dos pasos necesita un código de tu teléfono." },
      { objective: "O2", q: "Un rango de referencia es:", options: ["El rango habitual de resultados en personas sanas", "La dirección de tu clínica", "Tu número de seguro", "Un tipo de medicina"], answer: 0, why: "Los resultados se comparan con el rango de referencia." },
      { objective: "O2", q: "Un resultado está marcado fuera del rango. Esto significa:", options: ["Que debes ir a urgencias", "Que siempre es una enfermedad grave", "Que no siempre es un problema; pregúntale a tu equipo de atención", "Que el laboratorio se equivocó"], answer: 2, why: "Los resultados marcados necesitan la explicación de tu equipo de atención." },
      { objective: "O2", q: "Según HealthIT.gov, la Regla de Privacidad de HIPAA te da derecho a:", options: ["Medicinas gratis", "Elegir el sueldo de tu médico", "Ver y recibir una copia de tu expediente de salud", "No pagar ninguna cuenta"], answer: 2, why: "Tienes derecho a ver y recibir una copia de tu expediente." },
      { objective: "O2", q: "¿Puede un proveedor negarte tu expediente porque tienes cuentas médicas sin pagar?", options: ["Sí, siempre", "Solo los fines de semana", "Solo las copias en papel", "No; HealthIT.gov dice que puedes obtenerlo aunque tengas cuentas sin pagar"], answer: 3, why: "Las cuentas sin pagar no te quitan el derecho a tu expediente." },
      { objective: "O3", q: "Los mensajes del portal sirven mejor para:", options: ["Emergencias", "Preguntas no urgentes", "Enviar dinero", "Conversar con desconocidos"], answer: 1, why: "Las respuestas pueden tardar un día o más." },
      { objective: "O3", q: "¿Cuál es el mensaje más claro para el portal?", options: ["\"ayuda\"", "\"?\"", "\"llámame\"", "\"Desde el lunes me mareo después de mi nueva pastilla de la mañana. ¿Debo tomarla en la noche?\""], answer: 3, why: "Dice qué pasa, desde cuándo y qué necesitas." },
      { objective: "O3", q: "Algunas clínicas pueden cobrarle al seguro por:", options: ["Iniciar sesión", "Leer resultados", "Mensajes que necesitan consejo médico", "Cambiar tu contraseña"], answer: 2, why: "Pregunta en tu clínica si no estás seguro de cómo cobran los mensajes." },
      { objective: "O4", q: "¿Dónde pides normalmente un resurtido en un portal?", options: ["En la sección Medicamentos", "En la página de Configuración", "En la papelera de Mensajes", "En la pantalla de inicio de sesión"], answer: 0, why: "Los botones de resurtido están junto a tus medicinas." },
      { objective: "O4", q: "Una lista de espera te permite:", options: ["Cambiar las notas de tu médico", "No pagar", "Ver los resultados de otros pacientes", "Conseguir una hora más temprana si alguien cancela"], answer: 3, why: "Las listas de espera ofrecen las horas canceladas." },
      { objective: "O5", q: "Las consultas por video funcionan bien para:", options: ["Cualquier problema, siempre", "Huesos rotos que necesitan una radiografía", "Muchos seguimientos, revisiones de medicinas y consejería", "Emergencias"], answer: 2, why: "Algunos problemas todavía necesitan atención en persona." },
      { objective: "O5", q: "Un registro en línea (eCheck-in) es:", options: ["Un resurtido", "Un cheque bancario", "Un videojuego", "Llenar formularios en el portal antes de tu consulta"], answer: 3, why: "Ahorra tiempo al comienzo de tu consulta." },
      { objective: "O5", q: "¿Qué debes tener listo para una consulta por video?", options: ["Tus preguntas y tu lista de medicinas", "Música fuerte", "Un lugar público lleno de gente", "Nada"], answer: 0, why: "Una lista te ayuda a aprovechar bien la consulta." },
      { objective: "O6", q: "Una sala de espera virtual es:", options: ["Una sala real en la clínica", "Un chat con otros pacientes", "Una pantalla donde esperas hasta que se une el profesional de salud", "Un tipo de cuenta"], answer: 2, why: "Esperas allí hasta que empieza la consulta." },
      { objective: "O6", q: "Se corta el video durante tu consulta. ¿Qué haces?", options: ["Renuncias a la atención", "Haces una cita nueva para el próximo año", "Lo publicas", "Mantienes la calma y tienes tu teléfono cerca por si te vuelven a llamar"], answer: 3, why: "Los profesionales a menudo vuelven a llamar si falla el video." },
      { objective: "O6", q: "Después de una consulta por video, ¿dónde puedes revisar el plan?", options: ["En una publicación de redes sociales", "En la tienda de aplicaciones", "En el resumen de la consulta en tu portal", "En el mensaje de un desconocido"], answer: 2, why: "El resumen tiene el plan, las recetas y los análisis." },
      { objective: "O6", q: "¿A quién debes hacerle tus preguntas sobre tu propia salud?", options: ["A un sitio web cualquiera", "Solo a una herramienta de IA", "A un comentario de redes sociales", "A tu médico, enfermero o farmacéutico"], answer: 3, why: "Tu equipo de atención conoce tu historial de salud." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      5,
      6,
      8,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Iniciar sesión con seguridad",
        objective: "O1",
        notYet: "No puede iniciar sesión, o inició sesión desde un enlace que no es oficial.",
        meets: "Inicia sesión con el sitio o la aplicación oficial de la clínica y una contraseña que no usa en ningún otro lugar.",
        exceeds: "Además, activa la verificación en dos pasos si el portal la ofrece."
      },
      {
        name: "Encontrar un resultado o un resumen",
        objective: "O2",
        notYet: "No puede encontrar un resultado de análisis ni un resumen de consulta.",
        meets: "Encuentra un resultado de análisis o un resumen de consulta y anota cualquier pregunta sobre él.",
        exceeds: "Además, lee el resultado junto a su rango de referencia sin adivinar qué significa."
      },
      {
        name: "Mensaje claro",
        objective: "O3",
        notYet: "El mensaje no es claro, es largo o trata de algo urgente.",
        meets: "Un mensaje corto con la pregunta y datos útiles, para una necesidad que no es urgente.",
        exceeds: "Incluye cuándo empezó, qué se intentó y qué se necesita."
      },
      {
        name: "Resurtidos y citas",
        objective: "O4",
        notYet: "No encuentra dónde pedir un resurtido o una cita.",
        meets: "Encuentra tanto el pedido de resurtido como la sección de citas.",
        exceeds: "Además, sabe qué citas se tienen que hacer por teléfono."
      },
      {
        name: "Listo para la consulta por video",
        objective: "O5",
        notYet: "No hay lista de preguntas ni de medicinas, o no puede decir dónde aparecerá el enlace.",
        meets: "Tres preguntas y una lista de las medicinas actuales, y sabe dónde aparecerá el enlace del video.",
        exceeds: "Además, prueba la cámara y el micrófono o hace antes el registro en línea (eCheck-in)."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica de la tarea final",
      "Participantes que dicen iniciar sesión por su cuenta en su portal 30 días después (encuesta de seguimiento)",
      "Participantes que dicen haber pedido un resurtido o una cita, o haber enviado un mensaje, por el portal",
      "Participantes que dicen haberse unido a tiempo y sin ayuda a una consulta por video"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono, una tableta o una computadora con cámara y micrófono",
      "El código de activación o el enlace de registro oficial de la clínica (pídalo en la recepción)",
      "Papel y lápiz para las listas de preguntas y de medicinas",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Nunca mire, lea en voz alta ni anote la información de salud de nadie; cada persona hace los pasos del portal en privado en su propia pantalla.",
      "Quienes no tienen cuenta en un portal pueden practicar con una demostración o con capturas de pantalla de un portal, y conseguir un código de activación en su clínica antes de la siguiente sesión.",
      "Diga con claridad que el curso no es consejo médico: las preguntas sobre resultados o medicinas van al equipo de atención de cada persona, y las emergencias van al 911.",
      "Hagan en clase una videollamada de práctica para que prueben a permitir la cámara y el micrófono y a encontrar el botón de silencio.",
      "Los cuidadores pueden venir con un paciente; recuérdeles que algunos portales ofrecen acceso como representante, que la clínica tiene que configurar."
    ]
  }
};
