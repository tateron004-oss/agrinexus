"use strict";

// Koach Learn course (Spanish translation of shared/usajobs-government-jobs.js). See scripts/koachlearn-courses/README.md, "Translations".
// USAJOBS is in English, so its section names ("This job is open to", "Required documents", "Not referred") stay in English with a Spanish explanation.

module.exports = {
  id: "usajobs-government-jobs-es",
  lang: "es",
  translationOf: "usajobs-government-jobs",
  category: "Workforce Development",
  name: "Cómo solicitar empleos del gobierno (USAJOBS)",
  skills: "Encontrar tu vía de contratación, Buscar en USAJOBS, Leer un anuncio de empleo, Escribir un currículum federal, Responder el cuestionario con honestidad, Dar seguimiento a tu solicitud de forma segura",
  outcome: "solicitar un empleo federal real de EE. UU. en USAJOBS: encontrar los empleos abiertos para ti, leer el anuncio, escribir un currículum federal que coincida con él, reunir los documentos correctos, responder el cuestionario con honestidad y dar seguimiento a tu solicitud sin caer en estafas.",
  about: [
    "El gobierno federal de EE. UU. contrata personas en todos los estados y en muchos tipos de trabajo: oficina y atención al cliente, oficios y mantenimiento, almacenes, salud, parques, informática y más. Casi todos estos empleos se publican en USAJOBS (usajobs.gov), el sitio oficial que administra la Oficina de Administración de Personal (OPM, por sus siglas en inglés). Usarlo es gratis.",
    "Las solicitudes federales son distintas de las de la mayoría de los empleos privados. El anuncio es largo, el currículum necesita más detalle, muchas veces hay un cuestionario y hay vías de contratación especiales que ayudan a veteranos, cónyuges de militares, personas con discapacidad, estudiantes y recién graduados. Este curso te guía paso a paso con un anuncio real que tú eliges.",
    "Este curso es para personas que buscan trabajo, veteranos, personas que regresan a casa después de estar en prisión, jóvenes adultos y cualquiera que quiera cambiar de carrera. Te prepara para presentar tu solicitud; no te consigue el empleo ni decide si calificas. Eso lo decide cada agencia a partir de tu solicitud. Cada lección dura unos cinco minutos, termina con una comprobación rápida y una tarea de \"Pruébalo ahora\", y va armando tu paquete de solicitud de práctica."
  ],
  finalTask: "Arma un paquete de solicitud de práctica para un anuncio real de USAJOBS al que podrías postularte: (1) un resumen del anuncio en una página (quién puede postularse, grado y sueldo, fecha de cierre, funciones, experiencia especializada, documentos requeridos); (2) al menos dos entradas de empleo para tu currículum federal que coincidan con el anuncio, con fechas, horas por semana, funciones y resultados; (3) una lista de todos los documentos requeridos y dónde vas a conseguir cada uno; (4) un registro de solicitudes con el número del empleo, la fecha en que te postulaste y la próxima fecha de revisión.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes adultos de EE. UU. que buscan un trabajo estable con buenos beneficios: personas que buscan empleo, veteranos y cónyuges de militares, personas que regresan a casa después de estar en prisión, personas con discapacidad, estudiantes y recién graduados, y personas que cambian de carrera. Muchos nunca han solicitado un empleo federal y algunos tienen historiales de trabajo cortos o con interrupciones.",
    startingPoint: "Pueden usar un teléfono o una computadora para el correo electrónico y los sitios web, y han solicitado al menos un empleo común o tienen un currículum básico. La mayoría nunca ha leído un anuncio de empleo federal y no conoce las vías de contratación, los grados ni la experiencia especializada.",
    gap: "Las solicitudes federales muchas veces se rechazan por motivos que se pueden corregir: postularse a un empleo que no está abierto para la persona, un currículum sin fechas, sin horas o sin la experiencia que pide el anuncio, un documento que falta, como el DD-214, o respuestas del cuestionario que el currículum no respalda. Los participantes necesitan una forma cuidadosa, paso a paso, de presentar su solicitud, y necesitan saber que postularse es gratis para poder evitar las estafas de empleo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 8.º grado); los términos federales se explican cada vez",
      "Dispositivos: un teléfono o una computadora de la biblioteca o de un centro de empleo; para el currículum es más fácil una computadora",
      "Tiempo: lecciones de 4 a 6 minutos; el paquete final toma de una a dos horas más",
      "Las reglas cambian: los límites de páginas, las vías de contratación y los documentos requeridos vienen de cada anuncio y de USAJOBS, no de este curso",
      "Privacidad: ningún número de Seguro Social ni otros números privados en las tareas de práctica ni en herramientas de IA",
      "Algunos participantes tienen antecedentes penales o alguna discapacidad; el curso enseña a responder con honestidad y dónde encontrar las reglas oficiales, no da asesoría legal"
    ],
    prerequisites: "Saber usar lo básico de una computadora o un teléfono y tener una dirección de correo electrónico. \"Currículums, LinkedIn y entrevistas\" es un buen primer curso, pero no es obligatorio."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con un anuncio de empleo federal y tu propia experiencia", action: "identificar las vías de contratación para las que podrías calificar y comprobar si un empleo está abierto para ti", standard: "leyendo bien la sección \"This job is open to\" (Este empleo está abierto a)" },
    { id: "O2", condition: "Usando un teléfono o una computadora de la biblioteca", action: "crear un perfil en USAJOBS y guardar una búsqueda de empleos filtrada por lugar, grado de sueldo y vía de contratación", standard: "usando solo el sitio oficial usajobs.gov y sin pagarle a nadie" },
    { id: "O3", condition: "Con un anuncio de empleo real", action: "anotar las funciones, los requisitos, el grado, la fecha de cierre y los documentos requeridos", standard: "en una hoja de resumen de una página sin que falte ninguno de los cinco" },
    { id: "O4", condition: "Con la experiencia especializada que pide un anuncio", action: "escribir entradas de empleo para un currículum federal con fechas, horas por semana, funciones y resultados que coincidan con el anuncio", standard: "usando las palabras clave del anuncio y solo información verdadera" },
    { id: "O5", condition: "Antes de enviar una solicitud", action: "responder el cuestionario con honestidad y reunir todos los documentos que pide el anuncio", standard: "de modo que tu currículum respalde cada respuesta alta y no falte ningún documento requerido" },
    { id: "O6", condition: "Después de postularte", action: "dar seguimiento al estado de tu solicitud y reconocer ofertas falsas de empleo del gobierno", standard: "llevando un registro con fechas y sin pagar nunca una tarifa ni compartir números privados fuera de USAJOBS" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar un empleo federal abierto para ti",
      lessons: [
        {
          title: "Cómo funciona la contratación federal y tus vías de contratación",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar las vías de contratación para las que podrías calificar y comprobar para quién está abierto un empleo.",
          text: [
            "Los empleos federales se publican en USAJOBS, el sitio oficial que administra la Oficina de Administración de Personal (OPM). Cada publicación se llama anuncio de empleo. Cada agencia (por ejemplo, el Departamento de Asuntos de Veteranos, el Servicio Forestal o el IRS, la agencia de impuestos) lee las solicitudes y decide quién califica.",
            "Cada anuncio dice quién puede postularse, en una parte llamada \"This job is open to\" (Este empleo está abierto a). USAJOBS agrupa a los solicitantes en vías de contratación (hiring paths). Algunas son: abierto al público (ciudadanos y nacionales de EE. UU.), veteranos, cónyuges de militares, personas con discapacidad, estudiantes, recién graduados, empleados federales, y Guardia Nacional y reservas.",
            "Si un empleo está abierto solo para empleados federales y tú no lo eres, tu solicitud no se tomará en cuenta, por muy buena que sea. Por eso, revisa siempre esta parte primero. Algunas vías especiales tienen sus propias reglas: por ejemplo, las personas con discapacidad pueden postularse con el Schedule A presentando una carta que pruebe la discapacidad, y los veteranos pueden tener preferencia de veteranos.",
            "El sueldo de muchos empleos de oficina y profesionales usa el General Schedule (GS), la escala general: 15 grados, del GS-1 al GS-15, cada uno con 10 escalones, más un pago por localidad que depende de dónde trabajas. Muchos empleos de oficios y de trabajo manual usan otra escala, el Federal Wage System (que suele aparecer como WG)."
          ],
          steps: ["Anota qué vías de contratación podrían ser para ti: público, veterano, cónyuge de militar, discapacidad, estudiante, recién graduado u otra.", "Abre un anuncio y busca \"This job is open to\".", "Comprueba que al menos una de las vías de la lista sea para ti.", "Si ninguna es para ti, deja ese empleo y busca otro."],
          words: [["USAJOBS", "el sitio web oficial y gratuito donde se publican los empleos federales de EE. UU."], ["OPM", "la Oficina de Administración de Personal, la agencia que fija las reglas de contratación federal y administra USAJOBS."], ["Anuncio de empleo", "la publicación completa del empleo: quién puede postularse, funciones, requisitos, sueldo y cómo postularse."], ["Vía de contratación", "un grupo de personas para el que está abierto un empleo, como el público, los veteranos o los estudiantes."], ["Schedule A", "una autoridad de contratación que permite a las agencias contratar a personas con discapacidad sin la competencia habitual."], ["General Schedule (GS)", "la principal escala de sueldos federal, con grados del GS-1 al GS-15 y 10 escalones en cada grado."], ["Pago por localidad", "un pago extra que depende de la zona donde está el empleo."]],
          slides: [
            { title: "Dónde están los empleos federales", bullets: ["USAJOBS (usajobs.gov), administrado por la OPM", "Buscar es gratis y postularse es gratis", "Cada agencia decide quién califica"] },
            { title: "Vías de contratación", bullets: ["Abierto al público: ciudadanos y nacionales de EE. UU.", "Veteranos, cónyuges de militares, Guardia Nacional y reservas", "Personas con discapacidad (Schedule A), estudiantes, recién graduados"] },
            { title: "Revisa primero \"This job is open to\"", bullets: ["Si ninguna vía es para ti, tu solicitud no se toma en cuenta", "Deja ese empleo y busca uno que esté abierto para ti"] },
            { title: "Cómo se muestra el sueldo federal", bullets: ["GS: grados del 1 al 15, 10 escalones cada uno, más pago por localidad", "Muchos empleos de oficios usan el Federal Wage System (WG)"] }
          ],
          sources: [
            { name: "USAJOBS: Explorar las vías de contratación", url: "https://www.usajobs.gov/hiringpath/" },
            { name: "USAJOBS: Abierto al público", url: "https://www.usajobs.gov/HiringPath/Public" },
            { name: "OPM: General Schedule", url: "https://www.opm.gov/policy-data-oversight/pay-leave/pay-systems/general-schedule/" }
          ],
          tryIt: "En papel, haz una lista de todas las vías de contratación que podrían ser para ti y por qué (por ejemplo: \"Abierto al público: soy ciudadano de EE. UU.\" o \"Veteranos: serví en el Ejército\"). Luego abre usajobs.gov/hiringpath y lee la página de cada vía de tu lista.",
          youCanNow: "nombrar las vías de contratación que podrían ser para ti y comprobar si un empleo federal está abierto para ti antes de dedicarle tiempo.",
          quickCheck: [
            { objective: "O1", q: "Un anuncio dice \"This job is open to: Federal employees - competitive service\" (abierto a empleados federales). Nunca has trabajado para el gobierno. ¿Qué haces?", options: ["Te postulas de todos modos con un buen currículum", "Llamas a la agencia para pedir una excepción", "Lo dejas y buscas un empleo abierto al público", "Te postulas usando la condición federal de un amigo"], answer: 2, why: "Si ninguna de las vías de la lista es para ti, la solicitud no se tomará en cuenta, así que es mejor usar tu tiempo en un empleo abierto para ti." },
            { objective: "O1", q: "¿Qué vía de contratación es para los ciudadanos y nacionales de EE. UU. en general?", options: ["Autoridades especiales", "Altos ejecutivos", "Empleados federales", "Abierto al público"], answer: 3, why: "\"Abierto al público\" (Open to the public) es la vía para los ciudadanos y nacionales de EE. UU. en general." }
          ]
        },
        {
          title: "Configurar USAJOBS y buscar con inteligencia",
          objectives: ["O2"],
          minutes: 5,
          goal: "Crear un perfil en USAJOBS y guardar una búsqueda con filtros.",
          text: [
            "Entra a usajobs.gov y elige crear un perfil. USAJOBS usa Login.gov, el servicio de inicio de sesión del gobierno, así que creas una cuenta de Login.gov con tu correo electrónico, una contraseña segura y un segundo paso para iniciar sesión (como un código que te llega al teléfono). Escribe tú mismo la dirección; no sigas enlaces de mensajes de texto ni de anuncios.",
            "En tu perfil agregas tus datos de contacto y respondes preguntas sobre ti, por ejemplo si eres veterano o empleado federal actual. Estas respuestas ayudan a USAJOBS a mostrarte las vías de contratación que son para ti. En el perfil también se guardan tus currículums y documentos.",
            "Para buscar, escribe una palabra del empleo o una habilidad (por ejemplo \"maintenance\", \"customer service\" o \"medical support\", ya que el sitio está en inglés) y una ciudad o un estado. Luego usa los filtros: lugar, grado de sueldo, vía de contratación, horario de trabajo (tiempo completo o medio tiempo) y trabajo remoto o teletrabajo si lo quieres. Cuando los resultados se vean bien, guarda la búsqueda para que USAJOBS te mande por correo los empleos nuevos.",
            "Usar USAJOBS es gratis. Ninguna oficina real del gobierno te cobra por crear un perfil, buscar o postularte."
          ],
          steps: ["Escribe tú mismo usajobs.gov en el navegador.", "Crea un perfil e inicia sesión con Login.gov.", "Llena tu perfil, incluidas las preguntas sobre tu condición de veterano y tu servicio federal.", "Busca con una palabra del empleo y un lugar.", "Agrega filtros: grado de sueldo, vía de contratación, horario.", "Guarda la búsqueda y activa las alertas por correo."],
          words: [["Perfil", "la página de tu cuenta de USAJOBS, donde se guardan tus datos, currículums y documentos."], ["Login.gov", "el servicio de inicio de sesión del gobierno de EE. UU., que se usa para entrar a USAJOBS y a otros sitios del gobierno."], ["Filtro", "una opción que reduce los resultados de búsqueda, como el lugar o el grado de sueldo."], ["Búsqueda guardada", "una búsqueda que USAJOBS recuerda y usa para mandarte por correo los empleos nuevos que coinciden."], ["Teletrabajo", "trabajar desde casa parte del tiempo o todo el tiempo."]],
          slides: [
            { title: "Empieza en el sitio real", bullets: ["Escribe tú mismo usajobs.gov", "Inicia sesión con Login.gov", "Es gratis: nunca pagues para postularte"] },
            { title: "Llena tu perfil", bullets: ["Datos de contacto", "Preguntas sobre veteranos y empleados federales", "Aquí se guardan tus currículums y documentos"] },
            { title: "Busca y luego filtra", bullets: ["Una palabra del empleo y un lugar", "Grado de sueldo, vía de contratación, horario, teletrabajo", "Guarda la búsqueda y activa las alertas por correo"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "Login.gov", url: "https://www.login.gov/" },
            { name: "FTC: Estafas de empleo", url: "https://consumer.ftc.gov/articles/job-scams" }
          ],
          tryIt: "Crea tu perfil de USAJOBS (o inicia sesión en él). Haz una búsqueda de un tipo de empleo que podrías hacer en tu zona, agrega al menos dos filtros y guárdala. Anota cuántos empleos salieron y los títulos de tres.",
          youCanNow: "crear un perfil de USAJOBS de forma segura y guardar una búsqueda que te mande empleos que son para ti.",
          quickCheck: [
            { objective: "O2", q: "Un mensaje de texto dice: \"Solicita empleos federales aquí, tarifa de inscripción de $25\", con un enlace. ¿Qué es cierto?", options: ["Es una estafa: USAJOBS es gratis", "Está bien si el enlace termina en .com", "Los empleos federales necesitan una cuenta de pago", "Debes pagar con una tarjeta de regalo para estar seguro"], answer: 0, why: "Buscar y solicitar empleos federales siempre es gratis, así que quien cobre una tarifa es un estafador." },
            { objective: "O2", q: "Quieres que USAJOBS te avise de nuevos empleos de almacén cerca de ti. ¿Qué haces?", options: ["Buscas otra vez cada hora", "Guardas la búsqueda y activas las alertas por correo", "Le pides a un amigo que vigile el sitio", "Creas un perfil nuevo cada semana"], answer: 1, why: "Una búsqueda guardada con alertas te manda por correo los empleos nuevos que coinciden con tus filtros." }
          ]
        },
        {
          title: "Leer un anuncio de empleo federal",
          objectives: ["O3"],
          minutes: 6,
          goal: "Anotar las funciones, los requisitos, el grado, la fecha de cierre y los documentos requeridos de un anuncio.",
          text: [
            "Los anuncios federales son largos, pero siguen el mismo orden. Arriba aparecen el título del empleo, la agencia, el lugar, el sueldo y el grado, las fechas de apertura y de cierre, y para quién está abierto el empleo. Después vienen secciones como Duties (funciones), Requirements (condiciones de empleo y requisitos), How you will be evaluated (cómo te van a evaluar), Required documents (documentos requeridos) y How to apply (cómo postularte).",
            "La parte más importante es Qualifications (requisitos). Muchos empleos piden experiencia especializada: experiencia haciendo el tipo de trabajo del puesto, que muchas veces se describe como un año a un nivel parecido al del grado inmediatamente inferior. Algunos empleos te dejan calificar con estudios en lugar de experiencia, o con una mezcla de los dos. Tu currículum debe mostrar esa experiencia con claridad; si no, pueden considerar que no calificas.",
            "Las condiciones de empleo son reglas que debes cumplir para que te contraten, por ejemplo tener la ciudadanía de EE. UU., pasar una verificación de antecedentes o una prueba de drogas, o tener licencia de conducir. Léelas antes de postularte.",
            "Fíjate en la fecha de cierre. Algunos anuncios también cierran antes cuando reciben cierta cantidad de solicitudes, así que postúlate en cuanto estés listo."
          ],
          steps: ["Copia el título del empleo, la agencia, el número del anuncio, el grado y el sueldo.", "Copia las fechas de apertura y de cierre.", "Lee \"This job is open to\".", "Copia la experiencia especializada o los estudios que necesitas.", "Haz una lista de las funciones principales.", "Haz una lista de todo lo que aparece en Required documents."],
          words: [["Experiencia especializada", "experiencia haciendo el tipo de trabajo que necesita el puesto, al nivel que pide el anuncio."], ["Condiciones de empleo", "reglas que debes cumplir para que te contraten, como la ciudadanía o una verificación de antecedentes."], ["Fecha de cierre", "el último día en que puedes postularte. Algunos empleos cierran antes."], ["Número del anuncio", "el código que identifica una publicación de empleo; úsalo para dar seguimiento a tu solicitud."], ["Documentos requeridos", "los papeles que el anuncio dice que debes subir, como un currículum, certificados de estudios o un DD-214."]],
          slides: [
            { title: "La parte de arriba del anuncio", bullets: ["Título, agencia, lugar, sueldo y grado", "Fechas de apertura y de cierre", "This job is open to (para quién está abierto)"] },
            { title: "Los requisitos deciden mucho", bullets: ["Experiencia especializada, estudios o ambos", "Tu currículum debe mostrarlo con claridad"] },
            { title: "Lee antes de postularte", bullets: ["Condiciones de empleo: ciudadanía, verificación de antecedentes, licencia", "Documentos requeridos: la lista de lo que debes subir"] },
            { title: "Fíjate en las fechas", bullets: ["Postúlate antes de la fecha de cierre", "Algunos empleos cierran antes si reciben suficientes solicitudes"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "OPM: Preguntas frecuentes sobre la contratación federal", url: "https://www.opm.gov/frequently-asked-questions/employment-faq/federal-hiring/" }
          ],
          tryIt: "Elige un anuncio real de tu búsqueda guardada que esté abierto para ti. En una hoja de papel haz tu resumen del anuncio: título, agencia, número del anuncio, grado y sueldo, fecha de cierre, para quién está abierto, la experiencia especializada con tus propias palabras, tres funciones principales y todos los documentos requeridos.",
          youCanNow: "leer un anuncio de empleo federal y sacar en una página lo que necesitas.",
          quickCheck: [
            { objective: "O3", q: "¿Qué sección te dice la experiencia que debe mostrar tu currículum?", options: ["How to apply (cómo postularte)", "Required documents (documentos requeridos)", "Next steps (próximos pasos)", "Qualifications (experiencia especializada)"], answer: 3, why: "Qualifications describe la experiencia especializada o los estudios que necesitas para calificar." },
            { objective: "O3", q: "Un anuncio cierra el viernes, pero dice que puede cerrar antes. ¿Cuándo debes postularte?", options: ["En cuanto tu solicitud esté lista", "El viernes a medianoche", "La próxima semana", "Solo después de que la agencia te llame"], answer: 0, why: "Los empleos que pueden cerrar antes pueden dejar de recibir solicitudes antes de la fecha de cierre, así que postúlate cuando estés listo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Encontrar un empleo federal abierto para ti",
        questions: [
          { objective: "O1", q: "¿Qué debes leer primero en cualquier anuncio para ahorrar tiempo?", options: ["La historia de la agencia", "\"This job is open to\" (Este empleo está abierto a)", "La sección de beneficios", "La foto de la oficina"], answer: 1, why: "Si ninguna vía de contratación es para ti, la solicitud no se tomará en cuenta, así que revisa esto primero." },
          { objective: "O1", q: "Un veterano quiere ver qué empleos federales dan consideración especial a los veteranos. ¿Dónde puede buscar?", options: ["En la vía de contratación para veteranos de USAJOBS", "En una bolsa de trabajo de pago que les cobra a los veteranos", "Solo en los tableros de anuncios de las bases militares", "En anuncios de redes sociales que prometen empleos federales"], answer: 0, why: "USAJOBS tiene una vía de contratación para veteranos que explica la preferencia de veteranos y las opciones de contratación para ellos." },
          { objective: "O2", q: "¿Cómo inicias sesión en USAJOBS?", options: ["Solo con tu número de Seguro Social", "Con un código que te manda un reclutador por mensaje de texto", "Con una cuenta de Login.gov", "Con una membresía de pago"], answer: 2, why: "USAJOBS usa Login.gov, el servicio de inicio de sesión del gobierno." },
          { objective: "O3", q: "¿Qué significa \"experiencia especializada\" en un anuncio?", options: ["Cualquier empleo que hayas tenido", "Experiencia haciendo el tipo de trabajo que necesita el puesto, al nivel que se pide", "Un título universitario en cualquier materia", "Solo el tiempo que hiciste trabajo voluntario"], answer: 1, why: "La experiencia especializada es experiencia en el tipo de trabajo que necesita el puesto, al nivel que pide el anuncio." },
          { objective: "O3", q: "Un anuncio dice \"debe pasar una verificación de antecedentes\" y \"ciudadanía de EE. UU.\". ¿Qué son?", options: ["Funciones", "Documentos requeridos", "Beneficios", "Condiciones de empleo"], answer: 3, why: "Las reglas que debes cumplir para que te contraten son condiciones de empleo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Postularte y dar seguimiento",
      lessons: [
        {
          title: "Escribir un currículum federal que coincida con el empleo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escribir entradas de empleo para un currículum federal que muestren la experiencia especializada que pide el anuncio.",
          text: [
            "Un currículum federal necesita más detalle que la mayoría de los currículums para empleos privados. Para cada empleo, incluye el título del puesto, el empleador, las fechas de inicio y de fin (mes y año) y las horas que trabajabas por semana. Las agencias usan las fechas y las horas para contar tu experiencia, así que un empleo sin ellas puede no contar.",
            "Debajo de cada empleo, escribe tus funciones y resultados con las mismas palabras del anuncio. Si el anuncio pide experiencia en \"llevar registros de inventario\" y tú lo hiciste, escribe esas palabras y agrega detalles: qué hiciste, cuánto, con qué frecuencia y qué mejoró. Por ejemplo: \"Llevé los registros de inventario de 1,200 artículos con un escáner de mano; reduje los errores de conteo a la mitad en seis meses.\"",
            "Cuenta toda la experiencia real: empleos pagados, trabajo de medio tiempo, servicio militar, trabajo voluntario y trabajos que tuviste mientras estabas en prisión, como cocina, mantenimiento o trabajo de oficina. Sé honesto; nunca digas que tienes experiencia que no tienes.",
            "Lee el anuncio y el Centro de Ayuda de USAJOBS para ver si hay un límite de páginas o reglas de formato, porque cambian. Puedes armar un currículum en USAJOBS o subir el tuyo. Si usas una herramienta de IA para ayudarte con las palabras, deja fuera los números privados y revisa que cada línea sea verdadera."
          ],
          steps: ["Copia la oración de experiencia especializada de tu hoja de resumen.", "Elige los empleos en los que hiciste ese tipo de trabajo.", "Para cada empleo, escribe el título, el empleador, el mes y el año de inicio y de fin, y las horas por semana.", "Escribe de 3 a 5 líneas de funciones y resultados usando las palabras clave del anuncio.", "Agrega un número en al menos una línea: cuántos, cuánto o con qué frecuencia.", "Revisa en el anuncio si hay límite de páginas y lee todo en voz alta para comprobar que sea verdad y que no tenga errores."],
          words: [["Currículum federal", "un currículum para un empleo del gobierno, con fechas, horas por semana y funciones detalladas para cada empleo."], ["Palabras clave", "las palabras importantes del anuncio que tu currículum debe repetir cuando sean verdad."], ["Resultado", "lo que mejoró gracias a tu trabajo, mejor si tiene un número."], ["Horas por semana", "cuántas horas a la semana trabajabas en un empleo; las agencias lo usan para contar tu experiencia."]],
          slides: [
            { title: "Cada entrada de empleo necesita", bullets: ["Título y empleador", "Fechas de inicio y de fin: mes y año", "Horas por semana", "Funciones y resultados"] },
            { title: "Haz que coincida con el anuncio", bullets: ["Usa sus palabras clave cuando sean verdad", "Agrega números: cuántos, cuánto, con qué frecuencia"] },
            { title: "Toda la experiencia real cuenta", bullets: ["Empleos pagados y de medio tiempo, servicio militar", "Trabajo voluntario y trabajo hecho en prisión", "Nunca digas que hiciste algo que no hiciste"] },
            { title: "Revisa las reglas", bullets: ["Límite de páginas y formato: lee el anuncio", "La ayuda de la IA está bien; sin números privados y todo verdadero"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "OPM FedsHireVets", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Con tu resumen del anuncio, escribe dos entradas de empleo para tu currículum federal, en papel o en un documento. Cada una necesita título, empleador, fechas con mes y año, horas por semana y de 3 a 5 líneas de funciones y resultados que usen las palabras clave del anuncio. Subraya cada palabra clave que usaste.",
          youCanNow: "escribir entradas de currículum federal con las fechas, las horas y la experiencia que coincide, que una agencia necesita para contar tu trabajo.",
          quickCheck: [
            { objective: "O4", q: "¿Qué entrada de empleo está lista para un currículum federal?", options: ["\"Trabajador de almacén, hice muchas cosas\"", "\"Asociado de almacén, ABC Supply, 03/2022 a 08/2024, 40 horas por semana; llevé registros de inventario de 1,200 artículos\"", "\"Trabajé un tiempo en un almacén\"", "\"Muy trabajador, buen compañero de equipo\""], answer: 1, why: "Tiene el título, el empleador, las fechas con mes y año, las horas por semana y una función con un número." },
            { objective: "O4", q: "El anuncio pide experiencia \"operando un montacargas\". Manejaste un montacargas mientras estabas en prisión. ¿Qué haces?", options: ["Lo dejas fuera porque no cuenta", "Dices que manejaste un montacargas en una empresa donde nunca trabajaste", "Escribes solo \"trabajo general\"", "Lo pones con honestidad, con fechas, horas y lo que hiciste"], answer: 3, why: "La experiencia de trabajo real cuenta, incluido el trabajo en prisión, cuando se pone con honestidad y con detalles." }
          ]
        },
        {
          title: "El cuestionario y tus documentos",
          objectives: ["O5"],
          minutes: 5,
          goal: "Responder el cuestionario con honestidad y reunir todos los documentos que pide el anuncio.",
          text: [
            "Muchos anuncios tienen un cuestionario en línea. Tú calificas tu propia experiencia en tareas del empleo, por ejemplo desde \"No tengo experiencia\" hasta \"Soy experto o he capacitado a otros\". Tus respuestas ayudan a decidir si calificas y en qué lugar quedas.",
            "Responde con honestidad y asegúrate de que tu currículum respalde cada respuesta alta. Si dices que eres experto en hacer horarios pero tu currículum nunca menciona horarios, un revisor puede bajarte la puntuación o considerar que no calificas.",
            "Después, reúne los documentos de la sección Required documents. Los más comunes: tu currículum; certificados de estudios universitarios si calificas por estudios; para los veteranos, un DD-214 que muestre el tipo de baja del servicio, más un SF-15 o una carta del VA (Departamento de Asuntos de Veteranos) si pides la preferencia de 10 puntos; una carta del Schedule A que pruebe la discapacidad si te postulas por esa vía; y un formulario de personal reciente (SF-50) para empleados federales actuales o anteriores. Sube copias claras y que se puedan leer.",
            "Algunos formularios preguntan por antecedentes penales. En general, la ley federal limita cuándo pueden preguntar las agencias antes de una oferta de empleo condicional, con excepciones para algunos empleos, como los de las fuerzas del orden. Cuando te pregunten, responde con la verdad: una respuesta falsa puede costarte el empleo más adelante. Revisa en el anuncio y en la OPM las reglas actuales, y si tienes dudas, pregunta en un programa de reinserción o de asistencia legal."
          ],
          steps: ["Lee despacio cada pregunta del cuestionario.", "Elige la respuesta que es verdad para ti.", "Para cada respuesta alta, busca la línea del currículum que la respalda; agrega una si la experiencia es real pero falta.", "Haz una lista de todos los documentos requeridos de tu hoja de resumen.", "Escribe dónde vas a conseguir cada uno (por ejemplo: el DD-214, de tus archivos o de los Archivos Nacionales; los certificados de estudios, de tu escuela).", "Sube copias claras y revisa que cada una se abra."],
          words: [["Cuestionario", "preguntas en línea en las que calificas tu propia experiencia en tareas del empleo."], ["DD-214", "el documento que muestra las fechas y el tipo de baja del servicio militar de un veterano."], ["SF-15", "el formulario que se usa para pedir la preferencia de veteranos de 10 puntos."], ["Preferencia de veteranos", "consideración extra en la contratación federal para los veteranos que califican."], ["SF-50", "un formulario de personal federal que muestra el puesto, el grado y la situación de un empleado federal."], ["Oferta de empleo condicional", "una oferta de empleo que depende de pasar las últimas verificaciones, como la de antecedentes."]],
          slides: [
            { title: "El cuestionario", bullets: ["Tú calificas tu propia experiencia", "Responde con la verdad", "Tu currículum debe respaldar cada respuesta alta"] },
            { title: "Documentos requeridos comunes", bullets: ["Currículum; certificados de estudios si usas tus estudios", "Veteranos: DD-214; SF-15 o carta del VA para los 10 puntos", "Carta del Schedule A; SF-50 para empleados federales"] },
            { title: "Preguntas sobre antecedentes penales", bullets: ["Hay reglas sobre cuándo pueden preguntar; algunos empleos son excepciones", "Cuando te pregunten, responde siempre con la verdad", "Consulta la OPM y un programa de reinserción o de asistencia legal"] },
            { title: "Antes de enviar", bullets: ["Todos los documentos requeridos subidos y legibles", "Que no falte nada de la lista"] }
          ],
          sources: [
            { name: "USAJOBS: Vía de contratación para veteranos (DD-214, SF-15, carta del VA)", url: "https://www.usajobs.gov/HiringPath/Veterans" },
            { name: "OPM FedsHireVets: Preferencia de veteranos", url: "https://www.opm.gov/fedshirevets/current-veteran-employees/veterans-preference/" },
            { name: "USAJOBS: Explorar las vías de contratación (personas con discapacidad)", url: "https://www.usajobs.gov/hiringpath/" }
          ],
          tryIt: "Haz una lista de documentos para tu anuncio con tres columnas: documento, dónde lo voy a conseguir, listo. Luego escribe tres tareas tipo cuestionario a partir de las funciones del empleo, califícate con honestidad en cada una y, al lado de cada calificación alta, escribe la línea del currículum que la prueba.",
          youCanNow: "responder un cuestionario federal con honestidad, con tu currículum respaldando cada respuesta, y reunir todos los documentos que pide el empleo.",
          quickCheck: [
            { objective: "O5", q: "Te calificas como \"experto\" en hacer horarios, pero tu currículum nunca menciona horarios. ¿Qué es probable que pase?", options: ["El revisor puede bajarte la puntuación o considerar que no calificas", "Nada; solo cuenta el cuestionario", "Te van a contratar más rápido", "La agencia lo agregará a tu currículum por ti"], answer: 0, why: "Los revisores comprueban que tu currículum respalde tus respuestas del cuestionario." },
            { objective: "O5", q: "Un veterano pide la preferencia de 10 puntos. Según USAJOBS, ¿qué debe subir?", options: ["Solo un currículum", "Una carta de un amigo", "Un DD-214 más un SF-15 o una carta del VA aceptable", "Una foto de su uniforme"], answer: 2, why: "USAJOBS pide un DD-214 y, para la preferencia de 10 puntos, un SF-15 u otra prueba aceptable, como una carta del VA." }
          ]
        },
        {
          title: "Enviar, dar seguimiento y protegerte",
          objectives: ["O6", "O4"],
          minutes: 5,
          goal: "Dar seguimiento al estado de tu solicitud en USAJOBS y reconocer ofertas falsas de empleo del gobierno.",
          text: [
            "Cuando te postulas, USAJOBS te manda al sistema de solicitudes de la agencia para terminar. Asegúrate de completar todos los pasos y de recibir una confirmación; salirse después del cuestionario es una razón común por la que una solicitud nunca llega.",
            "Da seguimiento a cada solicitud en tu perfil de USAJOBS. El estado cambia a medida que la agencia avanza: por ejemplo, recibida, en revisión, referida al gerente de contratación o no referida (\"Not referred\"), y más adelante seleccionada o no seleccionada. La contratación federal puede tardar semanas o meses, así que sigue postulándote a otros empleos mientras esperas. Si no te refieren, lee el aviso y corrige esa parte (muchas veces falta experiencia, fechas o documentos) para la próxima solicitud.",
            "Lleva un registro sencillo: título del empleo, número del anuncio, agencia, fecha en que te postulaste, estado y la próxima fecha en que vas a revisar. Revisa más o menos una vez por semana.",
            "Cuidado con las estafas. Solicitar empleos federales siempre es gratis. Ten cuidado con cualquiera que te prometa un empleo del gobierno a cambio de una tarifa, te pida pagos o tarjetas de regalo, te pida tu número de Seguro Social o de banco por mensaje de texto o chat, o te entreviste solo por mensajes de texto. Los correos y sitios web federales reales terminan en .gov o .mil. Si tienes dudas, escribe tú mismo usajobs.gov y revisa ahí."
          ],
          steps: ["Termina todos los pasos en el sistema de la agencia y guarda la confirmación.", "Empieza tu registro de solicitudes.", "Revisa el estado en USAJOBS más o menos una vez por semana.", "Si no te refieren, lee por qué y corrígelo la próxima vez.", "Nunca pagues y nunca mandes números privados por mensaje de texto o chat."],
          words: [["Referida", "tu solicitud se envió al gerente de contratación para que la tome en cuenta."], ["No referida", "tu solicitud no pasó a la siguiente etapa, muchas veces porque la agencia consideró que no calificas o porque otros solicitantes quedaron más arriba."], ["Registro de solicitudes", "tu propia lista de los empleos a los que te postulaste, con fechas y estado."], [".gov", "la terminación de dirección web que solo usan las agencias del gobierno de EE. UU."]],
          slides: [
            { title: "Termina la solicitud", bullets: ["USAJOBS te manda al sistema de la agencia", "Completa todos los pasos", "Guarda la confirmación"] },
            { title: "Dale seguimiento", bullets: ["El estado está en tu perfil de USAJOBS", "Referida, no referida, seleccionada, no seleccionada", "Sigue postulándote mientras esperas"] },
            { title: "Tu registro de solicitudes", bullets: ["Título, número, agencia, fecha en que te postulaste", "Estado y próxima fecha de revisión"] },
            { title: "Señales de estafa", bullets: ["Una tarifa para conseguir o solicitar un empleo del gobierno", "Tarjetas de regalo, números de banco o de Seguro Social por texto", "Entrevistas solo por texto; direcciones que no terminan en .gov o .mil"] }
          ],
          sources: [
            { name: "FTC: Estafas de empleo (solicitar empleos federales es gratis)", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "USAJOBS", url: "https://www.usajobs.gov/" }
          ],
          tryIt: "Tarea final: arma tu paquete de solicitud de práctica para tu anuncio: el resumen de una página, al menos dos entradas de currículum que coincidan, la lista de documentos y un registro de solicitudes con el número del empleo, la fecha en que te vas a postular y la próxima fecha de revisión. Luego revisa el paquete con la rúbrica y corrige una parte débil.",
          youCanNow: "armar una solicitud federal completa, darle seguimiento y protegerte de ofertas de empleo falsas.",
          quickCheck: [
            { objective: "O6", q: "Alguien en redes sociales te ofrece un empleo garantizado en una agencia federal a cambio de una tarifa de trámite de $200. ¿Qué es esto?", options: ["Un paso normal de la contratación federal", "Una forma legal de saltarte la fila", "Una estafa: solicitar empleos federales es gratis", "Una tarifa que USAJOBS les cobra a los veteranos"], answer: 2, why: "La FTC (la agencia de protección al consumidor) dice que solicitar empleos federales siempre es gratis y que quien cobre por uno es un estafador." },
            { objective: "O6", q: "Tu estado en USAJOBS dice \"Not referred\" (no referida). ¿Cuál es el mejor siguiente paso?", options: ["Dejar de solicitar empleos federales", "Leer el aviso y corregir la parte débil en tu próxima solicitud", "Pagarle a alguien para que cambie tu estado", "Volver a postularte al mismo empleo ya cerrado"], answer: 1, why: "El aviso muchas veces muestra lo que faltó, así que puedes corregirlo la próxima vez." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Postularte y dar seguimiento",
        questions: [
          { objective: "O4", q: "¿Por qué un currículum federal necesita fechas de inicio y de fin y horas por semana?", options: ["Para que la agencia pueda contar tu experiencia", "Porque hace que el currículum se vea más largo", "Para mostrar tu edad", "No las necesita"], answer: 0, why: "Las agencias usan las fechas y las horas para contar cuánta experiencia que califica tienes." },
          { objective: "O4", q: "¿Cómo debes usar las palabras clave del anuncio en tu currículum?", options: ["Copiar todo el anuncio en tu currículum", "Evitarlas para sonar original", "Usarlas para la experiencia que de verdad tienes", "Usarlas incluso para cosas que nunca hiciste"], answer: 2, why: "Usar las palabras clave para tu experiencia real ayuda a los revisores a relacionar tu currículum con el empleo." },
          { objective: "O5", q: "¿Qué debes hacer antes de enviar una solicitud?", options: ["Saltarte el cuestionario", "Subir solo los documentos que ya tienes", "Calificarte como \"experto\" en todo", "Comprobar que todos los documentos requeridos estén subidos y se puedan leer"], answer: 3, why: "Un documento requerido que falta o que no se puede leer puede detener tu solicitud." },
          { objective: "O6", q: "¿Qué dirección web tiene más probabilidad de ser de una agencia federal real?", options: ["fedjobs-hiring.com", "agency-careers.net", "un enlace en un mensaje de texto de un número desconocido", "una dirección que termina en .gov"], answer: 3, why: "Solo las agencias del gobierno de EE. UU. usan direcciones .gov." },
          { objective: "O6", q: "¿Qué debe incluir tu registro de solicitudes?", options: ["Tu número de Seguro Social", "El título del empleo, el número del anuncio, la fecha en que te postulaste, el estado y la próxima fecha de revisión", "Tu contraseña de Login.gov", "Solo el nombre de la agencia"], answer: 1, why: "Estos datos te permiten dar seguimiento a cada solicitud sin anotar números privados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo solicitar empleos del gobierno (USAJOBS)",
    questions: [
      { objective: "O1", q: "¿Qué es USAJOBS?", options: ["Una agencia privada de empleo", "Una bolsa de trabajo de pago", "El sitio oficial y gratuito donde se publican los empleos federales", "El sitio web de un sindicato"], answer: 2, why: "USAJOBS es el sitio oficial de empleos del gobierno federal, lo administra la OPM y es gratis." },
      { objective: "O1", q: "María es ciudadana de EE. UU. y nunca ha trabajado para el gobierno. ¿A qué empleos puede postularse?", options: ["A los empleos abiertos al público", "Solo a los empleos abiertos para empleados federales", "Solo a los empleos de altos ejecutivos", "A cualquier empleo, sin importar para quién esté abierto"], answer: 0, why: "Los empleos \"abiertos al público\" son para los ciudadanos y nacionales de EE. UU. en general." },
      { objective: "O1", q: "¿Qué significa GS-7 en un anuncio?", options: ["Un empleo en el estado de Georgia", "El grado 7 de la escala de sueldos General Schedule", "Que se necesitan siete años de experiencia", "Siete puestos abiertos"], answer: 1, why: "GS es el General Schedule; tiene grados del 1 al 15, y el 7 es el grado." },
      { objective: "O2", q: "¿Cuál es la forma más segura de llegar a USAJOBS?", options: ["Hacer clic en un enlace de un mensaje de texto de un reclutador", "Hacer clic en un anuncio de búsqueda que promete empleos del gobierno", "Usar un enlace de una publicación en redes sociales", "Escribir tú mismo usajobs.gov en el navegador"], answer: 3, why: "Escribir tú mismo la dirección oficial evita los sitios falsos." },
      { objective: "O2", q: "¿Qué filtros te ayudan a encontrar empleos que son para ti?", options: ["Lugar, grado de sueldo y vía de contratación", "Los colores del logotipo de la agencia", "La cantidad de palabras del título", "Ninguno; los filtros esconden buenos empleos"], answer: 0, why: "El lugar, el grado y la vía de contratación reducen los resultados a los empleos que puedes y quieres hacer." },
      { objective: "O2", q: "¿Por qué respondes las preguntas sobre veteranos y empleados federales en tu perfil de USAJOBS?", options: ["Para pagar una tarifa más baja", "Para que USAJOBS te muestre las vías de contratación que son para ti", "Porque aparecen impresas en tu currículum", "Para que los reclutadores te manden mensajes de texto"], answer: 1, why: "Las respuestas del perfil ayudan a USAJOBS a relacionarte con las vías de contratación; no hay tarifas." },
      { objective: "O3", q: "¿Dónde encuentras la lista de papeles que debes subir?", options: ["Duties (funciones)", "La página principal de la agencia", "Required documents (documentos requeridos)", "This job is open to (para quién está abierto)"], answer: 2, why: "La sección Required documents tiene la lista de lo que debes subir." },
      { objective: "O3", q: "¿Cuál de estas es una condición de empleo?", options: ["Contestar el teléfono", "Pasar una verificación de antecedentes", "El seguro médico", "Las vacaciones pagadas"], answer: 1, why: "La verificación de antecedentes es una regla que debes cumplir para que te contraten, así que es una condición de empleo." },
      { objective: "O3", q: "¿Qué cinco datos van en tu hoja de resumen del anuncio?", options: ["Logotipo de la agencia, fotos, dirección, mapa, historia", "Tu contraseña, número de Seguro Social, banco, fecha de nacimiento, dirección", "Solo el sueldo", "Funciones, requisitos, grado, fecha de cierre, documentos requeridos"], answer: 3, why: "Estos cinco te dicen qué es el empleo, si calificas, cuándo postularte y qué subir." },
      { objective: "O3", q: "Un anuncio dice que puede cerrar antes. ¿Qué significa?", options: ["Que puede dejar de recibir solicitudes antes de la fecha de cierre", "Que va a estar abierto más tiempo", "Que solo se pueden postular veteranos", "Que el puesto ya está ocupado"], answer: 0, why: "Algunos empleos cierran cuando reciben cierta cantidad de solicitudes." },
      { objective: "O4", q: "¿Qué línea es la más fuerte para un currículum federal?", options: ["\"Hice atención al cliente\"", "\"Atendí unas 60 llamadas de clientes al día y resolví la mayoría en la primera llamada\"", "\"Me llevo bien con la gente\"", "\"Encargado de cosas\""], answer: 1, why: "Muestra una función real con un número, lo que ayuda al revisor a ver tu experiencia." },
      { objective: "O4", q: "James trabajó dos años en la cocina mientras estaba en prisión. El empleo pide experiencia en servicio de alimentos. ¿Qué debe hacer?", options: ["Dejarlo fuera", "Decir que fue en un restaurante", "Ponerlo solo como \"desempleado\"", "Ponerlo con honestidad, con las fechas, las horas y las funciones"], answer: 3, why: "El trabajo real cuenta sin importar dónde fue, cuando se pone con honestidad y con detalles." },
      { objective: "O4", q: "¿Cómo averiguas el límite de páginas o las reglas de formato de un currículum?", options: ["Leyendo el anuncio y el Centro de Ayuda de USAJOBS", "Adivinando: más largo siempre es mejor", "Preguntándole a un desconocido en internet", "Nunca hay reglas"], answer: 0, why: "Las reglas pueden cambiar, así que el anuncio y USAJOBS son los lugares donde revisar." },
      { objective: "O4", q: "¿Qué dato necesita cada entrada de empleo de un currículum federal?", options: ["La dirección de la casa de tu supervisor", "Tu número de Seguro Social", "Las horas trabajadas por semana", "Tu foto"], answer: 2, why: "Las horas por semana, junto con las fechas, permiten que la agencia cuente tu experiencia." },
      { objective: "O5", q: "¿Cómo debes responder el cuestionario?", options: ["Elegir siempre la respuesta más alta", "Con la verdad, con tu currículum respaldando cada respuesta alta", "Saltarte cualquier pregunta que te parezca difícil", "Copiar las respuestas de un amigo"], answer: 1, why: "Los revisores comprueban que las respuestas sean honestas y que tu currículum las respalde." },
      { objective: "O5", q: "¿Quién necesita subir una carta del Schedule A que pruebe la discapacidad?", options: ["Todos", "Solo los estudiantes", "Solo los empleados federales actuales", "Las personas que se postulan por la vía para personas con discapacidad"], answer: 3, why: "La carta del Schedule A respalda las solicitudes por la vía de contratación para personas con discapacidad." },
      { objective: "O5", q: "Un formulario te pregunta por tus antecedentes penales después de una oferta condicional. ¿Qué haces?", options: ["Respondes con la verdad", "Lo dejas en blanco", "Das una respuesta falsa", "Le pides a un amigo que responda por ti"], answer: 0, why: "Una respuesta falsa puede costarte el empleo más adelante; se exigen respuestas honestas." },
      { objective: "O6", q: "¿Dónde revisas el estado de tu solicitud?", options: ["En un mensaje de texto de un número desconocido", "En tu perfil de USAJOBS", "En un sitio de seguimiento de pago", "Solo yendo en persona a la agencia"], answer: 1, why: "USAJOBS muestra el estado de tus solicitudes en tu perfil." },
      { objective: "O6", q: "¿Cuál es una señal de alerta de una oferta falsa de empleo federal?", options: ["El correo termina en .gov", "La publicación está en USAJOBS", "Te piden una tarifa o tarjetas de regalo", "El anuncio tiene una fecha de cierre"], answer: 2, why: "Los empleos federales reales nunca te cobran; las tarifas y las tarjetas de regalo son señales de estafa." },
      { objective: "O6", q: "Ya te postulaste y estás esperando. ¿Cuál es el mejor plan?", options: ["Dejar de buscar hasta que te respondan", "Llamar a la agencia todos los días", "Pagar para que vaya más rápido", "Seguir postulándote a otros empleos y revisar tu estado cada semana"], answer: 3, why: "La contratación federal puede tardar semanas o meses, así que sigue postulándote y revisa con regularidad." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 1, 3, 6, 8, 11, 13, 14, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, corrige esa parte y vuelve a revisarla.",
    criteria: [
      { name: "El empleo está abierto para ti", objective: "O1", notYet: "El empleo elegido no está abierto para ninguna vía de contratación que sea para el participante.", meets: "El empleo está abierto para una vía de contratación que le corresponde, y el resumen la nombra.", exceeds: "También anota otras vías que el participante puede usar y otro empleo abierto." },
      { name: "Resumen del anuncio", objective: "O3", notYet: "Faltan una o más de estas partes: funciones, requisitos, grado, fecha de cierre o documentos requeridos.", meets: "Las cinco están en una página, con las propias palabras del participante.", exceeds: "También anota las condiciones de empleo y si el empleo puede cerrar antes." },
      { name: "Entradas del currículum", objective: "O4", notYet: "A las entradas les faltan fechas con mes y año, horas por semana o funciones que coincidan con el empleo.", meets: "Dos o más entradas con título, empleador, fechas, horas y funciones que usan las palabras clave del anuncio.", exceeds: "Cada entrada tiene al menos un resultado con un número, y todas las líneas son verdaderas y claras." },
      { name: "Documentos y cuestionario", objective: "O5", notYet: "Falta un documento requerido en la lista, o una calificación alta no tiene una línea del currículum que la respalde.", meets: "Todos los documentos requeridos están en la lista con el lugar donde conseguirlos, y cada calificación alta está respaldada por una línea del currículum.", exceeds: "Los documentos ya están reunidos y se comprobó que se pueden leer." },
      { name: "Seguimiento y seguridad", objective: "O6", notYet: "No hay registro, o el registro o el paquete tiene números privados.", meets: "Un registro con número del empleo, fechas, estado y próxima fecha de revisión; sin números privados.", exceeds: "El participante puede nombrar tres señales de estafa y cómo comprobar un empleo en usajobs.gov." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que envían al menos una solicitud real en USAJOBS en los 30 días siguientes (encuesta de seguimiento)",
      "Participantes que son referidos a un gerente de contratación, entrevistados o contratados en los 6 meses siguientes",
      "Los programas aliados (de veteranos, de reinserción y centros de empleo) reportan menos solicitudes rechazadas por documentos o datos que faltan"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet; para escribir el currículum es más fácil una computadora",
      "Una dirección de correo electrónico y un teléfono para el segundo paso de inicio de sesión de Login.gov",
      "Papel y lápiz, o un editor de documentos gratis como Google Docs o Microsoft Word en línea",
      "Cualquier currículum que ya tenga, y copias de documentos como el DD-214, certificados de estudios o una carta del Schedule A, si el participante los tiene",
      "Unos 60 minutos para las lecciones y las comprobaciones, más una o dos horas para el paquete final"
    ],
    facilitatorNotes: [
      "En un centro de empleo, un programa para veteranos o un programa de reinserción, hagan juntos la prueba inicial y luego un capítulo por sesión, con un anuncio real en la pantalla.",
      "Pida a cada participante que elija un anuncio que de verdad esté abierto para él antes de la Lección 3; así se evita rehacer trabajo.",
      "Forme parejas para que los participantes revisen las entradas de currículum del otro: fechas, horas y palabras clave.",
      "Nunca recoja números de Seguro Social ni otros números privados; cada participante guarda sus propios documentos.",
      "Las reglas sobre límites de páginas, vías de contratación y preguntas sobre antecedentes penales cambian: revise el anuncio, USAJOBS y la OPM antes de cada grupo, y envíe las preguntas legales a un programa de asistencia legal o de reinserción.",
      "Califique el paquete final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
