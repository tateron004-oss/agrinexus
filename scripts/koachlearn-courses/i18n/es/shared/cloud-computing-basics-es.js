"use strict";

// Koach Learn course (shared), Spanish translation of shared/cloud-computing-basics.js. See scripts/koachlearn-courses/README.md, "Translations".
// SaaS, PaaS and IaaS keep their English abbreviations, which are used in Spanish too.

module.exports = {
  id: "cloud-computing-basics-es",
  lang: "es",
  translationOf: "cloud-computing-basics",
  category: "Youth",
  name: "Fundamentos de la computación en la nube",
  skills: "Explicar qué es la nube, Distinguir SaaS, PaaS e IaaS, Guardar y sincronizar archivos en la nube, Compartir archivos con seguridad, Mantener segura una cuenta en la nube",
  outcome: "explicar qué es la computación en la nube y sus tres tipos principales de servicio, y luego usar un servicio gratuito de almacenamiento en la nube para guardar, ordenar y compartir archivos con seguridad, con tu cuenta protegida con verificación en dos pasos.",
  about: [
    "Cada vez que ves un video por internet, guardas una foto en Google Fotos o iCloud, o trabajas en un documento de Google con un compañero, estás usando la computación en la nube. Las empresas tienen allí sus sitios web, aplicaciones e IA, y las habilidades de la nube se piden en muchos empleos.",
    "Este curso explica con palabras sencillas qué es la nube, los principales tipos de servicios en la nube y quiénes son los grandes proveedores. Luego vas a usar un servicio gratuito de almacenamiento en la nube para guardar, ordenar y compartir archivos con seguridad, como lo hacen los equipos en la escuela y el trabajo.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Hay una breve comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Si quieres ir más lejos, el curso de Fundamentos de Microsoft Azure continúa a partir de este."
  ],
  finalTask: "En Google Drive o Microsoft OneDrive: crea una carpeta llamada \"Documentos de trabajo\", sube o crea dos archivos en ella (por ejemplo, un currículum y una lista de referencias), comparte un archivo con un amigo o familiar como solo lectura, revisa quién tiene acceso y luego quítale el acceso. Asegúrate de que la verificación en dos pasos esté activada en la cuenta. Por último, escribe tres oraciones que expliquen la nube y nombra un ejemplo de SaaS, uno de PaaS y uno de IaaS.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes (adolescentes y adultos jóvenes) en la escuela, en programas de capacitación o en sus primeros empleos. Usan aplicaciones en la nube todos los días, pero casi nunca han pensado en cómo funciona la nube ni en cómo manejar archivos y permisos a propósito.",
    startingPoint: "Saben usar un teléfono inteligente, ver videos por internet, usar el correo y las redes sociales, y puede que tengan una cuenta de Google o de Microsoft. Pocos han ordenado carpetas, configurado permisos para compartir o activado la verificación en dos pasos.",
    gap: "La escuela, las prácticas y los empleos esperan que las personas guarden, ordenen y compartan archivos en la nube y que conozcan los términos básicos de la nube que se usan en las carreras de tecnología. Sin estas habilidades, pierden trabajo, comparten de más archivos privados y dejan sus cuentas expuestas al phishing y al robo de contraseñas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 7.º a 8.º grado)",
      "Aparatos: un teléfono o una computadora compartida de la escuela o la biblioteca; un segundo aparato es opcional",
      "Tiempo: lecciones de 5 minutos que caben entre la escuela o el trabajo",
      "Privacidad: nada de números de Seguro Social, datos bancarios ni contraseñas reales en los archivos de práctica",
      "Algunas personas menores de 18 años pueden necesitar una cuenta de sus padres o de la escuela para usar los servicios de Google o de Microsoft"
    ],
    prerequisites: "Ninguno. Quienes no tengan cuenta de correo pueden crear primero una cuenta gratuita de Google o de Microsoft con la ayuda de un adulto o de alguien del programa."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista de aplicaciones de todos los días y el ejemplo de un pequeño negocio", action: "explicar qué es la computación en la nube y nombrar sus principales beneficios y riesgos", standard: "con tus propias palabras, con al menos dos beneficios y un riesgo" },
    { id: "O2", condition: "Con seis servicios en la nube", action: "clasificar cada servicio en la nube en SaaS, PaaS o IaaS y decir de qué eres responsable en cada uno", standard: "acertando al menos 5 de 6" },
    { id: "O3", condition: "Usando Google Drive u OneDrive", action: "crear una carpeta, agregar dos archivos y ponerles nombres claros", standard: "sin ayuda, de modo que otra persona pueda encontrar cada archivo por su nombre" },
    { id: "O4", condition: "Con un archivo y una persona con quien compartirlo", action: "compartir el archivo con el menor acceso necesario, revisar quién tiene acceso y quitar el acceso", standard: "sin dejar ningún archivo abierto a personas que no lo necesitan" },
    { id: "O5", condition: "En tu propia cuenta de Google o de Microsoft", action: "activar la verificación en dos pasos, revisar los aparatos con sesión iniciada y reconocer un mensaje de phishing", standard: "antes de terminar la tarea final" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Qué es la nube",
      lessons: [
        {
          objectives: ["O1"],
          title: "La nube en palabras sencillas",
          minutes: 4,
          goal: "Explicar con tus propias palabras qué es la computación en la nube.",
          text: [
            "\"La nube\" significa computadoras que están en grandes edificios llamados centros de datos y que usas por internet. En lugar de guardar todo en tu propio teléfono o computadora portátil, tus archivos, tus aplicaciones y la potencia de cálculo viven en esas computadoras, y llegas a ellos desde cualquier aparato.",
            "Piensa en la electricidad. No construyes una planta eléctrica en tu casa; conectas y pagas lo que usas. La computación en la nube funciona igual: una empresa es dueña de las computadoras, y las personas y las empresas usan lo que necesitan, cuando lo necesitan.",
            "Ejemplos de todos los días: el correo de Gmail y Outlook; Google Drive, OneDrive, iCloud y Dropbox para archivos; Netflix y Spotify para ver y escuchar contenido; y los asistentes de IA como ChatGPT o Copilot, que funcionan en computadoras de la nube."
          ],
          words: [["Computación en la nube", "usar computadoras, almacenamiento y programas por internet en lugar de en tu propio aparato."], ["Centro de datos", "un edificio grande lleno de computadoras que hacen funcionar los servicios en la nube."], ["Servidor", "una computadora potente que da un servicio a otras computadoras por una red."]],
          slides: [
            { title: "Qué es la nube", bullets: ["Computadoras en centros de datos", "Las usas por internet", "Desde cualquier aparato"] },
            { title: "Como la electricidad", bullets: ["No construyes una planta eléctrica", "Conectas y pagas lo que usas"] },
            { title: "Ya la usas", bullets: ["Gmail, Outlook", "Google Drive, OneDrive, iCloud, Dropbox", "Netflix, Spotify, asistentes de IA"] }
          ],
          tryIt: "Haz una lista de cinco aplicaciones o sitios web que usaste esta semana. Junto a cada uno, escribe \"nube\" si tus cosas se guardan o funcionan en las computadoras de la empresa y no solo en tu aparato.",
          youCanNow: "explicar la computación en la nube con tus propias palabras y señalar servicios en la nube que ya usas.",
          quickCheck: [
            { objective: "O1", q: "¿Dónde quedan tus archivos cuando los guardas en la nube?", options: ["En computadoras de un centro de datos a las que llegas por internet", "Solo dentro de la tarjeta de memoria de tu teléfono", "En un disco que le envías por correo a la empresa", "En los mensajes de texto de tu teléfono"], answer: 0, why: "La nube son computadoras en centros de datos que usas por internet desde cualquier aparato." },
            { objective: "O1", q: "Un amigo te pregunta por qué la nube se parece a la electricidad. ¿Qué le dices?", options: ["Las dos dejan de funcionar de noche", "Las dos necesitan un cable hasta tu casa", "Usas lo que necesitas sin ser dueño de las computadoras, como la luz sin tener una planta eléctrica", "Las dos son gratis para todos"], answer: 2, why: "La lección compara la nube con conectarte y pagar la electricidad sin construir una planta eléctrica." }
          ]
        },
        {
          objectives: ["O1"],
          title: "Por qué las personas y las empresas usan la nube",
          minutes: 5,
          goal: "Nombrar los principales beneficios y riesgos de la nube.",
          text: [
            "Beneficios: puedes llegar a tus archivos desde cualquier aparato; perder el teléfono no significa perder las fotos; los equipos pueden trabajar en el mismo documento a la vez; y las empresas pueden empezar en pequeño y crecer, pagando más potencia de cálculo solo cuando la necesitan, en lugar de comprar servidores caros.",
            "Riesgos: necesitas conexión a internet; si alguien roba tu contraseña, puede llegar a tus archivos desde cualquier lugar; los planes gratuitos tienen límites de almacenamiento; y tus datos los guarda una empresa, así que debes conocer su configuración de privacidad.",
            "Algunos grandes proveedores de nube para empresas son Amazon Web Services (AWS), Microsoft Azure y Google Cloud. Para las personas, Google, Microsoft, Apple y Dropbox ofrecen almacenamiento gratuito en la nube con mejoras de pago. Revisa la página de cada empresa para ver la cantidad actual de almacenamiento gratuito."
          ],
          words: [["Escalabilidad", "la capacidad de aumentar o reducir la potencia de cálculo según haga falta."], ["Proveedor", "la empresa que maneja el servicio en la nube."], ["Límite de almacenamiento", "la mayor cantidad de datos que tu plan te deja guardar."]],
          slides: [
            { title: "Beneficios", bullets: ["Tus archivos en cualquier aparato", "Perder el teléfono no es perder las fotos", "Los equipos trabajan en el mismo archivo", "Las empresas crecen sin comprar servidores"] },
            { title: "Riesgos", bullets: ["Necesita internet", "Una contraseña robada abre todo", "Los planes gratuitos tienen límites"] },
            { title: "Grandes proveedores", bullets: ["Empresas: AWS, Microsoft Azure, Google Cloud", "Personas: Google, Microsoft, Apple, Dropbox"] }
          ],
          tryIt: "Piensa en un pequeño negocio que conozcas, como una barbería, un camión de comida o la oficina de una iglesia. Escribe dos formas en que la nube podría ayudarlo y un riesgo para el que debería prepararse.",
          youCanNow: "nombrar los principales beneficios y riesgos de la nube y los grandes proveedores de nube.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es un beneficio de guardar tus fotos en la nube?", options: ["Nunca necesitas internet", "Perder el teléfono no significa perder las fotos", "Los planes gratuitos no tienen límite de almacenamiento", "Ninguna empresa guarda nunca tus datos"], answer: 1, why: "Las copias en la nube quedan seguras en las computadoras del proveedor aunque se pierda el teléfono." },
            { objective: "O1", q: "La dueña de un camión de comida quiere pasar sus registros a la nube. ¿Para qué riesgo debe prepararse primero?", options: ["La nube hace los archivos más grandes", "La nube solo funciona en un aparato", "Los archivos en la nube no se pueden compartir con el personal", "Alguien con una contraseña robada podría llegar a los archivos desde cualquier lugar"], answer: 3, why: "Una contraseña robada abre los archivos en la nube desde cualquier lugar, así que la seguridad de la cuenta es importante." }
          ]
        },
        {
          objectives: ["O2"],
          title: "SaaS, PaaS e IaaS: los tres tipos de servicio",
          minutes: 5,
          goal: "Clasificar los servicios en la nube en SaaS, PaaS e IaaS.",
          text: [
            "Los servicios en la nube vienen en tres tipos principales, según cuánto hace el proveedor por ti. Usa el ejemplo de la pizza: puedes comprar una pizza lista, alquilar una cocina con ingredientes o alquilar solo el horno.",
            "SaaS (software como servicio): programas terminados que usas en un navegador o una aplicación, como Gmail, Google Docs, Microsoft 365 o Zoom. El proveedor maneja todo. PaaS (plataforma como servicio): una plataforma lista donde los desarrolladores construyen y ejecutan sus propias aplicaciones sin manejar servidores, como Google App Engine o Azure App Service. IaaS (infraestructura como servicio): computadoras virtuales, almacenamiento y redes básicos que configuras tú mismo, como Amazon EC2 o Azure Virtual Machines.",
            "En todos los tipos, la seguridad es compartida. El proveedor protege sus centros de datos; tú siempre eres responsable de tu propia contraseña, de con quién compartes y de lo que subes."
          ],
          steps: ["Pregúntate: ¿solo uso programas terminados? Eso es SaaS.", "¿Construyo mi propia aplicación sobre una plataforma lista? Eso es PaaS.", "¿Configuro mis propias computadoras virtuales? Eso es IaaS.", "En los tres, protege tu propia cuenta y tus datos."],
          words: [["SaaS", "software como servicio: programas terminados que usas por internet."], ["PaaS", "plataforma como servicio: una plataforma lista para construir y ejecutar tus propias aplicaciones."], ["IaaS", "infraestructura como servicio: computadoras virtuales, almacenamiento y redes que alquilas y manejas."], ["Responsabilidad compartida", "el proveedor protege la nube; tú proteges tu cuenta y tus datos dentro de ella."]],
          slides: [
            { title: "Tres tipos de servicio", bullets: ["SaaS: una pizza lista", "PaaS: una cocina alquilada con ingredientes", "IaaS: solo el horno"] },
            { title: "Ejemplos", bullets: ["SaaS: Gmail, Google Docs, Microsoft 365, Zoom", "PaaS: Google App Engine, Azure App Service", "IaaS: Amazon EC2, Azure Virtual Machines"] },
            { title: "Responsabilidad compartida", bullets: ["Proveedor: protege los centros de datos", "Tú: tu contraseña, lo que compartes y lo que subes"] }
          ],
          tryIt: "Clasifica estos en SaaS, PaaS o IaaS: Gmail, Azure Virtual Machines, Google App Engine, Zoom, Amazon EC2, Microsoft 365. Revisa tus respuestas con los ejemplos de esta lección.",
          youCanNow: "clasificar los servicios en la nube en SaaS, PaaS e IaaS y explicar la responsabilidad compartida.",
          quickCheck: [
            { objective: "O2", q: "Google App Engine permite a los desarrolladores ejecutar sus propias aplicaciones sin manejar servidores. ¿Qué tipo es?", options: ["SaaS", "IaaS", "PaaS", "Ninguno de los tres tipos"], answer: 2, why: "Una plataforma lista donde los desarrolladores crean y ejecutan aplicaciones es Plataforma como servicio." },
            { objective: "O2", q: "Tu escuela usa Microsoft 365, que es SaaS. ¿Qué sigue siendo tu trabajo?", options: ["Proteger tu propia contraseña y elegir con quién compartes", "Cuidar el edificio del centro de datos", "Arreglar los servidores del proveedor", "Nada; SaaS significa que el proveedor lo hace todo"], answer: 0, why: "La seguridad es compartida: el proveedor hace funcionar el servicio, pero tu contraseña y lo que compartes siempre son tu responsabilidad." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Qué es la nube",
        questions: [
          { objective: "O1", q: "¿Qué significa \"la nube\"?", options: ["El clima", "Computadoras en centros de datos que usas por internet", "Un tipo de funda para el teléfono", "Solo el disco duro de tu portátil"], answer: 1, why: "Los servicios en la nube funcionan en computadoras lejanas a las que llegas por internet." },
          { objective: "O1", q: "¿Cuál es un riesgo de la nube?", options: ["Puedes llegar a tus archivos desde cualquier aparato", "Los equipos pueden compartir documentos", "Una contraseña robada puede abrir tus archivos desde cualquier lugar", "Perder el teléfono no es perder las fotos"], answer: 2, why: "La seguridad de la cuenta importa porque a la nube se llega desde cualquier lugar." },
          { objective: "O2", q: "Gmail y Zoom son ejemplos de:", options: ["IaaS", "PaaS", "Centros de datos", "SaaS"], answer: 3, why: "Son programas terminados que se usan por internet." },
          { objective: "O2", q: "Una empresa alquila computadoras virtuales y las configura ella misma. Esto es:", options: ["IaaS", "SaaS", "Un navegador", "Una contraseña"], answer: 0, why: "Alquilar computadoras virtuales que tú manejas es infraestructura como servicio." },
          { objective: "O2", q: "Con la responsabilidad compartida, ¿quién protege tu contraseña?", options: ["El guardia del centro de datos", "Tú", "Internet", "Nadie"], answer: 1, why: "Tu cuenta y lo que compartes siempre son tu trabajo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la nube tú mismo",
      lessons: [
        {
          objectives: ["O3"],
          title: "Guardar y ordenar archivos en el almacenamiento en la nube",
          minutes: 5,
          goal: "Subir, crear y ordenar archivos en Google Drive o OneDrive.",
          text: [
            "Google Drive viene con una cuenta gratuita de Google, y OneDrive viene con una cuenta gratuita de Microsoft. Los dos funcionan en un navegador web (drive.google.com u onedrive.com) y como aplicaciones para el teléfono de la tienda oficial.",
            "Usa el botón Nuevo para crear una carpeta o un documento, o Subir para agregar un archivo de tu aparato. Ponles nombres claros a los archivos, como \"Curriculum - Jordan Lee - 2026\", para encontrarlos después. Pon los archivos relacionados en carpetas.",
            "Sincronizar mantiene un archivo igual en todos los aparatos: lo cambias en tu portátil y la versión nueva aparece en tu teléfono. Muchos servicios en la nube también guardan versiones anteriores, así que puedes volver atrás si te equivocas."
          ],
          steps: ["Inicia sesión en drive.google.com u onedrive.com (o abre la aplicación).", "Presiona Nuevo y elige Carpeta; ponle un nombre claro.", "Abre la carpeta; presiona Nuevo para crear un documento, o Subir para agregar un archivo.", "Cambia el nombre de los archivos por nombres claros.", "Abre el mismo archivo en otro aparato para ver cómo se sincroniza."],
          words: [["Subir", "copiar un archivo de tu aparato a la nube."], ["Sincronizar", "mantener los archivos iguales en todos tus aparatos de forma automática."], ["Historial de versiones", "copias guardadas anteriores de un archivo a las que puedes volver."]],
          slides: [
            { title: "Almacenamiento gratuito en la nube", bullets: ["Google Drive con una cuenta de Google", "OneDrive con una cuenta de Microsoft", "Navegador o aplicación oficial"] },
            { title: "Ordena", bullets: ["Nuevo: carpeta o documento", "Subir: agregar un archivo", "Nombres claros y carpetas"] },
            { title: "Sincronización y versiones", bullets: ["El mismo archivo en todos los aparatos", "Vuelve a una versión anterior si hace falta"] }
          ],
          tryIt: "En Google Drive u OneDrive, crea una carpeta llamada \"Documentos de trabajo\". Crea o sube dos archivos en ella y ponles nombres claros. Luego abre la carpeta en un segundo aparato si tienes uno.",
          youCanNow: "subir, crear, nombrar y ordenar archivos en el almacenamiento en la nube y saber que se sincronizan entre aparatos.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace \"sincronizar\" con un archivo en OneDrive?", options: ["Borra la copia vieja cada noche", "Mantiene la misma versión del archivo en todos tus aparatos", "Envía el archivo a todos tus contactos", "Convierte el archivo en PDF"], answer: 1, why: "Sincronizar mantiene un archivo igual en todos los aparatos que usas." },
            { objective: "O3", q: "Guardaste una carta de presentación como \"doc1\". ¿Qué debes hacer para encontrarla después?", options: ["Dejarla así; la búsqueda la adivinará", "Crear una carpeta nueva para cada archivo", "Subirla otra vez con el mismo nombre", "Cambiarle el nombre a uno claro, como \"Carta de presentación - Jordan Lee - 2026\""], answer: 3, why: "Los nombres claros hacen que los archivos sean fáciles de encontrar después." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Compartir archivos con seguridad",
          minutes: 5,
          goal: "Compartir un archivo con la persona correcta y el nivel de acceso correcto, y quitar el acceso.",
          text: [
            "Los archivos en la nube son fáciles de compartir, lo que es útil y riesgoso. Presiona Compartir en un archivo y agrega el correo de una persona, o copia un enlace. Elige lo que puede hacer: ver, comentar o editar.",
            "Da el menor acceso necesario. Un currículum para un empleador: solo lectura. Un proyecto de grupo: edición para tu equipo. Ten cuidado con los enlaces configurados para que \"cualquier persona con el enlace\" pueda abrir el archivo; cualquiera que reciba el enlace puede verlo, aunque se lo reenvíen.",
            "Revisa quién tiene acceso en la pantalla Compartir o Administrar acceso, y quita a las personas cuando termine un proyecto. Nunca pongas en una carpeta compartida archivos con números de Seguro Social, datos bancarios o contraseñas."
          ],
          steps: ["Selecciona el archivo y presiona Compartir.", "Agrega el correo de la persona, o copia un enlace.", "Elige Ver, Comentar o Editar; escoge lo mínimo que necesite.", "Evita \"cualquier persona con el enlace\" para archivos privados.", "Después, abre Compartir o Administrar acceso y quita a quienes ya no lo necesiten."],
          words: [["Nivel de permiso", "lo que alguien puede hacer con tu archivo: ver, comentar o editar."], ["Menor acceso", "dar a las personas solo el acceso que de verdad necesitan."]],
          slides: [
            { title: "Cómo compartir", bullets: ["Presiona Compartir", "Agrega un correo o copia un enlace", "Elige Ver, Comentar o Editar"] },
            { title: "Menor acceso", bullets: ["Currículum para un empleador: solo lectura", "Proyecto del equipo: edición para el equipo", "Cuidado con \"cualquier persona con el enlace\""] },
            { title: "Haz limpieza", bullets: ["Revisa Administrar acceso", "Quita a las personas cuando termine el proyecto", "Nada de números privados en carpetas compartidas"] }
          ],
          tryIt: "Comparte un archivo de tu carpeta \"Documentos de trabajo\" con un amigo o familiar como solo lectura. Pídele que lo abra. Luego abre Administrar acceso y quítalo.",
          youCanNow: "compartir un archivo en la nube con el nivel de permiso correcto y quitar el acceso cuando ya no haga falta.",
          quickCheck: [
            { objective: "O4", q: "¿Qué opción para compartir da el menor acceso?", options: ["Editar", "Comentar", "Solo lectura", "Propietario"], answer: 2, why: "Solo lectura deja que las personas abran el archivo pero no que lo cambien, así que es el menor acceso." },
            { objective: "O4", q: "Tu proyecto de grupo terminó y cuatro compañeros todavía pueden editar. ¿Qué haces?", options: ["Abrir Administrar acceso y quitar a las personas que ya no lo necesitan", "Cambiar el enlace a \"cualquier persona con el enlace\"", "Borrar toda tu cuenta", "Dejarlo así por si algún día lo necesitan"], answer: 0, why: "Quita el acceso cuando termina un proyecto para que solo lleguen al archivo las personas que lo necesitan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mantener segura tu cuenta en la nube",
          minutes: 5,
          goal: "Activar la verificación en dos pasos y revisar la seguridad de tu cuenta.",
          text: [
            "Tu cuenta en la nube guarda tus archivos, tu correo y tus fotos, así que es un blanco. El paso más importante es la verificación en dos pasos (también llamada autenticación de dos factores o multifactor): después de tu contraseña, también confirmas con tu teléfono. Un ladrón que solo tenga tu contraseña no puede entrar.",
            "Usa una contraseña larga y única, idealmente guardada en un administrador de contraseñas. Google y Microsoft tienen una página de revisión de seguridad en la configuración de tu cuenta que muestra los aparatos con sesión iniciada, la actividad reciente y las opciones de recuperación.",
            "Cuidado con el phishing: correos falsos que dicen \"tu almacenamiento está lleno\" o \"alguien compartió un archivo contigo\" y que llevan a una página falsa de inicio de sesión. Ve tú mismo a drive.google.com u onedrive.com en lugar de hacer clic. Recuerda la responsabilidad compartida: el proveedor protege sus centros de datos; tú proteges tu cuenta."
          ],
          steps: ["Abre la configuración de seguridad de tu cuenta de Google o de Microsoft.", "Activa la verificación en dos pasos.", "Revisa que el teléfono y el correo de recuperación sean correctos.", "Revisa los aparatos con sesión iniciada y quita los que no conozcas.", "Ve tú mismo a los sitios de la nube en lugar de hacer clic en enlaces de correos."],
          words: [["Verificación en dos pasos", "una segunda comprobación, como un código o un toque en tu teléfono, después de tu contraseña."], ["Administrador de contraseñas", "una aplicación que crea y guarda contraseñas seguras por ti."], ["Phishing", "un mensaje falso que intenta engañarte para que des tu contraseña."]],
          slides: [
            { title: "Tu cuenta es un blanco", bullets: ["Guarda archivos, correo y fotos", "Activa la verificación en dos pasos"] },
            { title: "Revisión de seguridad", bullets: ["Contraseña larga y única", "Teléfono y correo de recuperación correctos", "Quita los aparatos que no conozcas"] },
            { title: "Cuidado con el phishing", bullets: ["\"Tu almacenamiento está lleno\"", "\"Alguien compartió un archivo contigo\"", "Ve tú mismo al sitio"] }
          ],
          tryIt: "Práctica de la tarea final: abre la configuración de seguridad de tu cuenta de Google o de Microsoft, activa la verificación en dos pasos y revisa los aparatos con sesión iniciada. Luego termina la tarea final con tu carpeta \"Documentos de trabajo\".",
          youCanNow: "proteger tu cuenta en la nube con la verificación en dos pasos, una revisión de seguridad y atención al phishing.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es la verificación en dos pasos?", options: ["Escribir tu contraseña dos veces", "Tener dos cuentas de correo distintas", "Guardar tu contraseña en dos lugares", "Una segunda comprobación, a menudo en tu teléfono, después de tu contraseña"], answer: 3, why: "Después de la contraseña también confirmas con tu teléfono, así que un ladrón que solo tiene la contraseña no puede entrar." },
            { objective: "O5", q: "Ves un teléfono que no reconoces entre los aparatos con sesión iniciada de tu cuenta. ¿Qué haces?", options: ["Lo ignoras; seguramente no pasa nada", "Lo quitas y cambias tu contraseña", "Le compartes tu contraseña", "Desactivas la verificación en dos pasos"], answer: 1, why: "Quitar los aparatos desconocidos en una revisión de seguridad deja a los extraños fuera de tu cuenta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la nube tú mismo",
        questions: [
          { objective: "O3", q: "¿Qué significa \"sincronizar\"?", options: ["Borrar un archivo", "Mantener los archivos iguales en todos tus aparatos", "Imprimir un archivo", "Compartir un archivo con desconocidos"], answer: 1, why: "Sincronizar actualiza los archivos en todos los lugares donde inicias sesión." },
          { objective: "O4", q: "Compartes tu currículum con un empleador. ¿Qué permiso es mejor?", options: ["Editar", "Propietario", "Solo lectura", "Cualquier persona con el enlace puede editar"], answer: 2, why: "Da el menor acceso necesario; solo necesita leerlo." },
          { objective: "O4", q: "Un proyecto de grupo terminó el mes pasado. ¿Qué debes hacer con la carpeta compartida?", options: ["Quitar a las personas que ya no necesitan acceso", "Hacerla pública", "Agregar más personas", "Compartir el enlace en redes sociales"], answer: 0, why: "Quitar los accesos viejos mantiene privados tus archivos." },
          { objective: "O5", q: "Un correo dice \"Tu almacenamiento está lleno, inicia sesión aquí.\" ¿Qué haces?", options: ["Haces clic e inicias sesión", "Respondes con tu contraseña", "Lo reenvías a tus amigos", "Vas tú mismo a drive.google.com u onedrive.com"], answer: 3, why: "Puede ser phishing; ve tú mismo al sitio real." },
          { objective: "O5", q: "¿Cuál es el paso más importante para proteger una cuenta en la nube?", options: ["Una contraseña corta", "La verificación en dos pasos", "Compartir tu contraseña con un amigo", "Desactivar la sincronización"], answer: 1, why: "Un ladrón que solo tenga tu contraseña igual no puede entrar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de la computación en la nube",
    questions: [
      { objective: "O1", q: "Un centro de datos es:", options: ["Un edificio lleno de computadoras que hacen funcionar los servicios en la nube", "Una tienda de teléfonos", "Una sala de computadoras de una escuela", "Un tipo de aplicación"], answer: 0, why: "Los servicios en la nube funcionan en centros de datos." },
      { objective: "O1", q: "La computación en la nube es como la electricidad porque:", options: ["Siempre es gratis", "Usas lo que necesitas sin ser dueño de la planta eléctrica", "Solo funciona de noche", "No necesita internet"], answer: 1, why: "Usas y pagas lo que necesitas, como un servicio público." },
      { objective: "O1", q: "¿Qué servicio en la nube podrías usar todos los días?", options: ["Un cuaderno de papel", "Una calculadora sin internet", "Google Drive", "Una lámpara de escritorio"], answer: 2, why: "Google Drive guarda archivos en computadoras de la nube." },
      { objective: "O1", q: "Un beneficio de la nube para las empresas es:", options: ["Primero debes comprar servidores caros", "Nunca necesita internet", "No hacen falta contraseñas", "Puedes crecer y pagar más potencia de cálculo solo cuando la necesitas"], answer: 3, why: "Esto se llama escalabilidad." },
      { objective: "O1", q: "¿Cuál es un gran proveedor de nube para empresas?", options: ["Microsoft Azure", "Una panadería local", "Una marca de impresoras", "Un navegador web"], answer: 0, why: "AWS, Azure y Google Cloud son los más grandes." },
      { objective: "O1", q: "¿Cuál es un riesgo real de usar la nube?", options: ["Tener los archivos en cualquier aparato", "Que los equipos compartan documentos", "Necesitar conexión a internet", "Las copias de seguridad automáticas"], answer: 2, why: "Sin internet, puede que no llegues a tus archivos." },
      { objective: "O2", q: "SaaS significa:", options: ["Almacenamiento como servidor", "Software como servicio", "Seguridad y un sistema", "Sincronización y una pantalla"], answer: 1, why: "SaaS son programas terminados que se usan por internet." },
      { objective: "O2", q: "Microsoft 365 es un ejemplo de:", options: ["IaaS", "PaaS", "SaaS", "Un centro de datos"], answer: 2, why: "Son programas terminados que usas en línea." },
      { objective: "O2", q: "Un desarrollador ejecuta su aplicación en Azure App Service sin manejar servidores. Esto es:", options: ["SaaS", "PaaS", "IaaS", "Un administrador de contraseñas"], answer: 1, why: "Una plataforma lista para tus propias aplicaciones es PaaS." },
      { objective: "O2", q: "Las computadoras virtuales de Amazon EC2 son un ejemplo de:", options: ["SaaS", "PaaS", "Un navegador", "IaaS"], answer: 3, why: "Alquilar computadoras virtuales que tú manejas es IaaS." },
      { objective: "O2", q: "Con la responsabilidad compartida, el proveedor protege:", options: ["Sus centros de datos", "Tu contraseña", "Con quién compartes archivos", "Lo que decides subir"], answer: 0, why: "Tú sigues protegiendo tu propia cuenta y tus datos." },
      { objective: "O3", q: "¿Qué nombre de archivo es el más claro?", options: ["\"doc1\"", "\"cosas\"", "\"Curriculum - Jordan Lee - 2026\"", "\"nuevo nuevo final\""], answer: 2, why: "Los nombres claros hacen que los archivos sean fáciles de encontrar." },
      { objective: "O3", q: "Para agregar a la nube un archivo de tu aparato:", options: ["Lo borras", "Lo subes", "Lo imprimes", "Se lo envías por correo a un desconocido"], answer: 1, why: "Subirlo lo copia al almacenamiento en la nube." },
      { objective: "O3", q: "El historial de versiones te permite:", options: ["Volver a una copia anterior de un archivo", "Ver los archivos de otras personas", "Conseguir más almacenamiento gratis", "Cambiar tu contraseña"], answer: 0, why: "Guarda versiones anteriores." },
      { objective: "O4", q: "Compartir con \"cualquier persona con el enlace\" significa:", options: ["Solo tú puedes abrirlo", "Solo tus contactos pueden abrirlo", "Nadie puede abrirlo", "Cualquiera que reciba el enlace puede abrirlo, aunque se lo reenvíen"], answer: 3, why: "Los enlaces pueden llegar más lejos de lo que querías." },
      { objective: "O4", q: "La idea del menor acceso significa:", options: ["Dar a todos acceso para editar", "Dar a las personas solo el acceso que necesitan", "No compartir nunca nada", "Compartir todo en público"], answer: 1, why: "Menos acceso significa menos riesgo." },
      { objective: "O4", q: "¿Qué nunca debe ir en una carpeta compartida en la nube?", options: ["El esquema de un proyecto de grupo", "Un horario de clases", "Un archivo con tu número de Seguro Social", "Una foto del equipo"], answer: 2, why: "Los números privados no deben estar en carpetas compartidas." },
      { objective: "O5", q: "La verificación en dos pasos significa:", options: ["Escribir tu contraseña dos veces", "Una segunda comprobación en tu teléfono después de tu contraseña", "Dos cuentas", "Dos carpetas"], answer: 1, why: "Frena a los ladrones que solo tienen tu contraseña." },
      { objective: "O5", q: "En una revisión de seguridad debes:", options: ["Quitar los aparatos con sesión iniciada que no reconozcas", "Desactivar tu teléfono de recuperación", "Compartir tu contraseña", "Borrar todos tus archivos"], answer: 0, why: "Los aparatos desconocidos pueden significar que otra persona inició sesión." },
      { objective: "O5", q: "Un correo de alguien que no conoces dice \"Alguien compartió un archivo contigo\". El paso más seguro es:", options: ["Hacer clic e iniciar sesión en la página que abre", "Responder con tu contraseña", "Reenviarlo a todos", "Ir tú mismo a tu sitio de almacenamiento en la nube para revisar"], answer: 3, why: "Los correos falsos de archivos compartidos llevan a páginas falsas de inicio de sesión." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      6,
      9,
      11,
      13,
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
        name: "Carpeta y archivos",
        objective: "O3",
        notYet: "No hay carpeta \"Documentos de trabajo\", o los archivos tienen nombres poco claros como \"doc1\".",
        meets: "La carpeta tiene dos archivos con nombres claros.",
        exceeds: "Además, los archivos se abren en un segundo aparato para mostrar que se sincronizan."
      },
      {
        name: "Compartir con seguridad",
        objective: "O4",
        notYet: "El archivo se compartió con permiso para editar o como \"cualquier persona con el enlace\", o nunca se quitó el acceso.",
        meets: "Se compartió un archivo como solo lectura, se revisó el acceso y luego se quitó.",
        exceeds: "Puede explicar por qué solo lectura era el menor acceso necesario."
      },
      {
        name: "Cuenta protegida",
        objective: "O5",
        notYet: "La verificación en dos pasos está desactivada.",
        meets: "La verificación en dos pasos está activada y se revisaron los aparatos con sesión iniciada.",
        exceeds: "También se revisaron el teléfono y el correo de recuperación, y la persona puede nombrar una señal de alerta de phishing."
      },
      {
        name: "La nube explicada",
        objective: "O1",
        notYet: "Faltan las tres oraciones o no dicen qué es la nube.",
        meets: "Tres oraciones claras dicen qué es la nube y dan un beneficio y un riesgo.",
        exceeds: "Las oraciones también usan una comparación de todos los días, como la electricidad."
      },
      {
        name: "Tipos de servicio",
        objective: "O2",
        notYet: "Uno o más de los ejemplos de SaaS, PaaS e IaaS está mal o falta.",
        meets: "Un ejemplo correcto de SaaS, uno de PaaS y uno de IaaS.",
        exceeds: "También dice de qué sigue siendo responsable el usuario según la responsabilidad compartida."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que dicen tener activada la verificación en dos pasos en su cuenta principal 30 días después (encuesta de seguimiento)",
      "Personas que usan el almacenamiento en la nube para documentos de la escuela, el trabajo o el programa en un plazo de 30 días",
      "Personas que empiezan el curso Fundamentos de Microsoft Azure u otro curso de tecnología en un plazo de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora con internet; un segundo aparato ayuda, pero es opcional",
      "Una cuenta gratuita de Google (Google Drive) o de Microsoft (OneDrive)",
      "Un teléfono que pueda recibir códigos o avisos para la verificación en dos pasos",
      "Papel y lápiz para las notas de \"Pruébalo ahora\"",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas de \"Pruébalo ahora\" hechas en vivo.",
      "Usen solo archivos de práctica (un currículum de ejemplo o una lista de referencias con nombres inventados); nunca números de identificación, datos bancarios ni contraseñas reales.",
      "Formen parejas para que cada persona comparta un archivo con la otra como solo lectura y luego le quite el acceso durante la lección.",
      "En computadoras compartidas, asegúrate de que todos cierren sesión y cierren el navegador antes de irse.",
      "Con menores de 18 años, sigue las reglas de la escuela o del programa sobre cuentas personales; se puede usar una cuenta de la escuela si permite compartir."
    ]
  }
};
