"use strict";

// Koach Learn course (shared), Spanish translation of shared/digital-literacy-basics.js. See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "digital-literacy-basics-es",
  lang: "es",
  translationOf: "digital-literacy-basics",
  category: "Re-Entry",
  name: "Fundamentos de alfabetización digital",
  skills: "Conectarse gratis o a bajo costo, Buscar bien, Comprobar si la información es cierta, Llenar formularios en línea, Escanear y subir documentos, Proteger tu huella digital",
  outcome: "encontrar el sitio web oficial real de un servicio que necesitas, comprobar que su información es confiable y hacer allí un trámite: llenar el formulario, escanear y subir un documento con un nombre de archivo claro, y proteger tu información privada y tu reputación en línea.",
  about: [
    "Alfabetización digital significa saber encontrar, juzgar y usar información en teléfonos y computadoras, y hacer cosas reales en línea: solicitar empleos, renovar una identificación, usar beneficios o pedir una cita en una clínica. Muchos servicios ahora funcionan primero en línea, así que estas habilidades abren puertas.",
    "En el Capítulo 1 aprendes dónde conectarte gratis o a bajo costo, cómo buscar bien y cómo distinguir la información verdadera de la falsa. En el Capítulo 2 llenas formularios, escaneas y subes documentos, y proteges tu privacidad y tu reputación en línea.",
    "No necesitas experiencia. Cada lección dura unos cinco minutos. Lee, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Elige un servicio que necesites, como el centro de empleo de tu estado, la oficina de vehículos motorizados, una oficina de beneficios o una clínica. Búscalo, demuestra que el sitio es el oficial y encuentra la página con el formulario o los pasos. Luego escanea con tu teléfono un documento de práctica (una carta o una página que escribiste, no una identificación real), guárdalo en PDF con un nombre de archivo claro y escribe tres líneas sobre cómo comprobaste el sitio y protegiste tu información privada.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos que necesitan hacer trámites en línea, sobre todo personas que regresan a casa después de la cárcel, y también personas que buscan trabajo, personas mayores y miembros de la comunidad que han estado lejos de la tecnología o casi nunca la han usado.",
    startingPoint: "Pueden usar un teléfono para llamar y enviar mensajes de texto y quizás tienen una cuenta de correo básica. Muchos no han usado un buscador para encontrar un sitio oficial, decidido si una información es cierta, llenado un formulario largo en línea, escaneado un documento ni revisado su configuración de privacidad.",
    gap: "Los empleos, las identificaciones, los beneficios, la vivienda y la atención médica ahora se solicitan en línea, muchas veces subiendo documentos. Sin estas habilidades, las personas se atascan, pagan a sitios falsos por servicios gratuitos, comparten números de identificación con estafadores o perjudican sus oportunidades por lo que otros pueden encontrar de ellas en línea.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explican palabras como buscador, PDF y huella digital",
      "Dispositivos: un teléfono inteligente, o una computadora gratuita de una biblioteca o un centro de empleo; algunas personas no tienen aparato propio",
      "Tiempo: unos 5 minutos por lección, unos 60 minutos en total",
      "Costo: solo opciones gratuitas, como el Wi-Fi de la biblioteca y las aplicaciones gratuitas para escanear con el teléfono",
      "Privacidad y reglas: se practica con un documento de práctica, nunca con una identificación real; quienes están en libertad condicional o libertad vigilada siguen las reglas de internet que tengan"
    ],
    prerequisites: "Ninguno. Habilidades básicas de computación o Usar un teléfono inteligente y una tableta ayudan a quienes son nuevos con los aparatos."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Según el lugar donde vives", action: "encontrar una forma gratuita o barata de conectarte a internet y hacer una lista de los pasos de seguridad para el Wi-Fi público y las computadoras compartidas", standard: "nombrando al menos un lugar o programa real y al menos dos pasos de seguridad" },
    { id: "O2", condition: "Con un buscador", action: "buscar la página oficial de un servicio que necesitas usando palabras clave claras", standard: "llegando a la página oficial sin entrar en ningún anuncio" },
    { id: "O3", condition: "Ante un sitio web o una publicación", action: "comprobar si se puede confiar en la información usando las cuatro preguntas", standard: "respondiendo quién lo hizo, cuándo, qué dicen otras fuentes confiables y si te apura" },
    { id: "O4", condition: "Ante un formulario en línea de un sitio oficial", action: "llenar bien el formulario y guardar la prueba de que lo enviaste", standard: "con todos los campos obligatorios llenos y la confirmación guardada" },
    { id: "O5", condition: "Con un documento de papel y un teléfono", action: "escanear el documento y guardarlo en PDF con un nombre de archivo claro", standard: "con un escaneo plano y legible, y un nombre que diga de quién es el documento y qué es" },
    { id: "O6", condition: "Con un buscador y la configuración de tus redes sociales", action: "revisar lo que otros pueden ver de ti en línea y ajustar tu configuración de privacidad", standard: "buscando tu propio nombre y cambiando al menos una opción de privacidad" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar información en la que puedes confiar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conectarse gratis o a bajo costo",
          minutes: 5,
          goal: "Encontrar una forma gratuita o barata de conectarte a internet cerca de ti.",
          text: [
            "No necesitas tu propia computadora para conectarte. Las bibliotecas públicas suelen tener computadoras gratis, Wi-Fi gratis y personal que ayuda. Muchos centros de empleo, de reinserción y comunitarios también tienen salas de computadoras.",
            "Lifeline es un programa federal, supervisado por la FCC (la Comisión Federal de Comunicaciones de EE. UU.), que da un descuento mensual en el servicio de teléfono o internet a las personas que califican, normalmente por sus ingresos o por estar en un programa como SNAP o Medicaid. La cantidad del descuento puede cambiar, así que revisa lifelinesupport.org para ver la cantidad actual y cómo solicitarlo.",
            "En el Wi-Fi público, usa solo sitios web que empiecen con https y muestren un candado, y no hagas trámites bancarios en computadoras compartidas. Siempre cierra la sesión y el navegador cuando termines en una computadora compartida."
          ],
          steps: ["Busca la biblioteca pública más cercana y revisa su horario.", "Pregunta al personal por computadoras gratis, Wi-Fi y sesiones de ayuda.", "Si el costo es un problema, lee sobre Lifeline en lifelinesupport.org.", "En computadoras compartidas, cierra la sesión y el navegador al terminar."],
          words: [["Wi-Fi", "una conexión a internet inalámbrica."], ["Lifeline", "un programa federal que baja el costo mensual del teléfono o internet para quienes califican."], ["https", "el comienzo de una dirección web que significa que la conexión está cifrada (codificada)."]],
          sources: [{ name: "Lifeline Support (USAC, para la FCC)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Lugares gratis para conectarse", bullets: ["Bibliotecas públicas: computadoras, Wi-Fi, ayudantes", "Centros de empleo y centros comunitarios"] },
            { title: "Lifeline", bullets: ["Descuento federal en teléfono o internet", "Para quienes califican por ingresos o por programas como SNAP", "Revisa lifelinesupport.org para los datos actuales"] },
            { title: "Seguro en computadoras compartidas", bullets: ["Busca https y un candado", "Nada de trámites bancarios en computadoras públicas", "Cierra la sesión y el navegador"] }
          ],
          tryIt: "Busca en línea la biblioteca pública más cercana. Anota su dirección, su horario y si ofrece ayuda gratis con las computadoras.",
          youCanNow: "encontrar una forma gratuita o barata de conectarte y usar computadoras compartidas con seguridad.",
          quickCheck: [
            { objective: "O1", q: "¿Qué programa da un descuento mensual en el servicio de teléfono o internet a las personas que califican?", options: ["Un buscador", "Lifeline", "Un administrador de contraseñas", "Una aplicación de redes sociales"], answer: 1, why: "Lifeline es un programa federal, supervisado por la FCC, que baja el costo del teléfono o de internet." },
            { objective: "O1", q: "Terminas de revisar tu correo en una computadora de la biblioteca. ¿Qué harías antes de irte?", options: ["Dejar el navegador abierto para la siguiente persona", "Guardar tu contraseña en el navegador", "Cerrar sesión y cerrar el navegador", "Escribir tu contraseña en una nota adhesiva"], answer: 2, why: "Cerrar sesión y cerrar el navegador impide que la siguiente persona entre a tu cuenta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Buscar bien",
          minutes: 5,
          goal: "Usar un buscador para encontrar rápido una página oficial específica.",
          text: [
            "Un buscador, como Google o Bing, encuentra páginas web con las palabras que escribes. Usa unas pocas palabras clave claras, no toda una historia: \"California DMV renovar identificación\" funciona mejor que \"cómo recupero mi identificación que perdí el año pasado\".",
            "Agrega tu estado o ciudad para obtener resultados locales. Pon palabras entre comillas para encontrar esa frase exacta. Agrega \"site:.gov\" para ver solo sitios web del gobierno de EE. UU.",
            "Los primeros resultados suelen ser anuncios, marcados como \"Patrocinado\" o \"Anuncio\". Los anuncios pueden ser falsos o cobrarte por algo que es gratis en el sitio oficial. Baja más allá de ellos hasta los resultados reales."
          ],
          steps: ["Escribe de 3 a 6 palabras clave.", "Agrega tu estado o ciudad.", "Agrega site:.gov para páginas del gobierno.", "Sáltate los resultados marcados como Patrocinado o Anuncio.", "Abre el resultado y lee la dirección web antes de confiar."],
          words: [["Buscador", "un sitio web que encuentra páginas con las palabras que escribes, como Google o Bing."], ["Palabras clave", "las palabras más importantes de lo que quieres encontrar."], ["Patrocinado / Anuncio", "un resultado pagado, no siempre el oficial ni el mejor."]],
          slides: [
            { title: "Usa palabras clave", bullets: ["\"California DMV renovar identificación\"", "No una historia larga"] },
            { title: "Trucos de búsqueda", bullets: ["Agrega tu estado o ciudad", "\"Comillas\" para una frase exacta", "site:.gov para sitios del gobierno"] },
            { title: "Sáltate los anuncios", bullets: ["Marcados como Patrocinado o Anuncio", "Pueden cobrar por servicios gratuitos", "Baja hasta los resultados reales"] }
          ],
          tryIt: "Busca el centro de empleo o la oficina de desempleo de tu estado. Prueba una vez con una oración larga y otra con palabras clave más site:.gov. ¿Qué búsqueda encontró más rápido la página oficial?",
          youCanNow: "buscar con palabras clave, saltarte los anuncios y encontrar rápido las páginas oficiales.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace poner palabras entre comillas en una búsqueda?", options: ["Muestra solo anuncios", "Hace más lenta la búsqueda", "Muestra solo imágenes", "Encuentra esa frase exacta"], answer: 3, why: "Las comillas le dicen al buscador que encuentre la frase exacta." },
            { objective: "O2", q: "Necesitas renovar tu identificación en tu estado. ¿Qué búsqueda escribirías?", options: ["El nombre de tu estado, \"renovar identificación\" y site:.gov", "\"Perdí mi identificación el año pasado y no sé qué hacer\"", "\"Identificación\"", "\"Ayuda\""], answer: 0, why: "Unas pocas palabras clave claras, tu estado y site:.gov llevan a la página oficial." }
          ]
        },
        {
          objectives: ["O3"],
          title: "¿Es cierto? Comprobar la información",
          minutes: 5,
          goal: "Decidir si un sitio web o una publicación es confiable antes de actuar.",
          text: [
            "Cualquiera puede publicar cualquier cosa en internet. Antes de confiar, hazte cuatro preguntas. ¿Quién lo hizo? Mira la dirección web y la página \"Acerca de\"; los sitios del gobierno de EE. UU. terminan en .gov. ¿Cuándo se escribió? Las reglas y los precios cambian. ¿Qué dicen otras fuentes confiables? Revisa al menos una más. ¿Intenta apurarte o asustarte? Esa es una señal de alerta.",
            "Cuidado con las direcciones parecidas, como un sitio que agrega palabras o cambia una letra de un nombre real. Cuidado con las fotos y videos hechos o cambiados con IA; si una imagen parece impactante, búscala en noticias de medios confiables antes de compartirla.",
            "La información falsa que se difunde por error se llama información errónea. La información falsa que se difunde a propósito se llama desinformación. No compartas nada hasta haberlo comprobado."
          ],
          steps: ["¿Quién lo hizo? Lee la dirección y la página Acerca de.", "¿Cuándo? Busca la fecha.", "¿Quién más lo dice? Revisa otra fuente confiable.", "¿Te apura o te asusta? Ve más despacio.", "No lo compartas hasta haberlo comprobado."],
          words: [["Fuente", "de dónde viene la información."], ["Información errónea", "información falsa que se comparte por error."], ["Desinformación", "información falsa que se difunde a propósito."], ["Sitio imitador", "un sitio web falso con una dirección hecha para parecerse a una real."]],
          slides: [
            { title: "Cuatro preguntas", bullets: ["¿Quién lo hizo?", "¿Cuándo se escribió?", "¿Qué dicen otras fuentes confiables?", "¿Me apura o me asusta?"] },
            { title: "Cuidado con lo falso", bullets: ["Direcciones web parecidas", "Fotos y videos hechos con IA", "Afirmaciones impactantes sin fuente"] },
            { title: "Antes de compartir", bullets: ["Compruébalo primero", "La información errónea se difunde por error", "La desinformación se difunde a propósito"] }
          ],
          tryIt: "Busca una publicación o un artículo sobre un beneficio, un programa de empleo o un consejo de salud. Responde las cuatro preguntas y decide: confiar, revisar más o ignorarlo.",
          youCanNow: "comprobar si la información en línea es confiable antes de actuar o compartirla.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es la información errónea?", options: ["Información falsa que se difunde por error", "Noticias verdaderas de un sitio .gov", "Información falsa que se difunde a propósito", "Un anuncio arriba de una búsqueda"], answer: 0, why: "La información errónea es información falsa difundida por error; si es a propósito, es desinformación." },
            { objective: "O3", q: "Un mensaje tiene un enlace a un sitio de empleo cuya dirección cambia una letra del nombre de una empresa conocida. ¿Qué harías?", options: ["Escribir tus datos rápido", "Compartir el enlace con tus amigos", "Suponer que está bien porque se ve igual", "Tratarlo como un probable sitio falso y entrar al sitio real de otra forma"], answer: 3, why: "Las direcciones parecidas son una señal de alerta de un sitio falso." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Encontrar información en la que puedes confiar",
        questions: [
          { objective: "O1", q: "¿Dónde puedes usar normalmente una computadora y Wi-Fi gratis?", options: ["En una bomba de gasolina", "En una agencia de autos", "En la bóveda de un banco", "En una biblioteca pública"], answer: 3, why: "Las bibliotecas públicas suelen ofrecer computadoras, Wi-Fi y ayuda gratis." },
          { objective: "O1", q: "¿Qué hace Lifeline?", options: ["Regala autos", "Paga la renta", "Baja el costo mensual del teléfono o internet para quienes califican", "Vende teléfonos"], answer: 2, why: "Lifeline es un descuento federal en el servicio de teléfono o internet." },
          { objective: "O2", q: "¿Qué búsqueda tiene más probabilidad de encontrar rápido la página correcta?", options: ["\"ayúdame por favor\"", "\"Texas renovar identificación site:.gov\"", "\"cosas de identificación\"", "\"?\""], answer: 1, why: "Las palabras clave, el estado y site:.gov reducen los resultados." },
          { objective: "O2", q: "Un resultado de arriba dice \"Patrocinado\". ¿Qué significa?", options: ["Es la página oficial del gobierno", "Siempre es gratis", "Lo revisó el gobierno", "Es un anuncio pagado y puede no ser oficial"], answer: 3, why: "Los resultados patrocinados son anuncios." },
          { objective: "O3", q: "Una publicación dice que un beneficio nuevo termina esta noche y debes hacer clic ya. ¿Qué haces primero?", options: ["Hacer clic enseguida", "Compartirla con todos", "Comprobarlo en el sitio oficial .gov", "Enviar tu número de identificación"], answer: 2, why: "La prisa es una señal de alerta; revisa la fuente oficial." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer trámites en línea con seguridad",
      lessons: [
        {
          objectives: ["O4"],
          title: "Llenar formularios en línea",
          minutes: 5,
          goal: "Llenar bien un formulario en línea y guardar la prueba de que lo enviaste.",
          text: [
            "Antes de empezar, reúne lo que pedirá el formulario: tus datos de contacto, fechas, tu historial de trabajo o de domicilios y cualquier documento que debas subir. Ten un correo que revises seguido, porque la mayoría de los sitios envían allí las confirmaciones.",
            "Los campos marcados con un asterisco (*) son obligatorios. En una computadora, usa la tecla Tab para pasar a la siguiente casilla. Lee cada menú desplegable y cada casilla de verificación. Muchos formularios largos te dejan guardar y volver después; anota dónde volver a entrar.",
            "Antes de presionar Enviar, revisa cada página. Después de enviar, guarda la confirmación: toma una captura de pantalla, descarga el PDF o anota el número de confirmación. Escribe tus números de identificación solo en el sitio oficial, nunca en un sitio al que llegaste desde un anuncio o un mensaje de texto."
          ],
          steps: ["Asegúrate de estar en el sitio oficial.", "Reúne primero los datos y documentos.", "Llena los campos obligatorios (*); usa Tab para avanzar.", "Guarda tu avance en formularios largos.", "Revisa cada página y luego envía.", "Guarda el número de confirmación o una captura de pantalla."],
          words: [["Campo", "una casilla del formulario donde escribes una respuesta."], ["Obligatorio (*)", "un campo que debes llenar antes de poder enviar."], ["Número de confirmación", "un código que prueba que se recibió tu formulario."], ["Menú desplegable", "una casilla que abre una lista para elegir."]],
          slides: [
            { title: "Antes de empezar", bullets: ["Estar en el sitio oficial", "Reunir datos y documentos", "Usar un correo que revises seguido"] },
            { title: "Mientras lo llenas", bullets: ["* significa obligatorio", "Tab pasa a la siguiente casilla", "Guarda tu avance en formularios largos"] },
            { title: "Termina bien", bullets: ["Revisa cada página", "Envía", "Guarda el número de confirmación o una captura"] }
          ],
          tryIt: "Busca un formulario de práctica o de contacto en un sitio oficial, como el formulario \"Pregúntale al bibliotecario\" de tu biblioteca. Llénalo hasta el botón Enviar sin mandarlo y señala los campos obligatorios.",
          youCanNow: "llenar bien un formulario en línea y guardar la prueba de que lo enviaste.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué conviene tener un correo que revisas seguido antes de llenar formularios?", options: ["Los formularios no se abren sin uno", "Hace más corto el formulario", "La mayoría de los sitios envían las confirmaciones a tu correo", "Reemplaza tu número de identificación"], answer: 2, why: "La mayoría de los sitios envían confirmaciones y novedades a tu correo." },
            { objective: "O4", q: "Llegas a la última página de una solicitud de beneficios. ¿Qué harías antes de presionar Enviar?", options: ["Cerrar el navegador", "Revisar cada página", "Saltarte los campos obligatorios", "Empezar una solicitud nueva"], answer: 1, why: "Revisar cada página permite encontrar errores antes de enviarla." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escanear y subir documentos",
          minutes: 5,
          goal: "Escanear un documento de papel con un teléfono y guardarlo en PDF con un nombre claro.",
          text: [
            "Muchos formularios te piden subir documentos: un currículum, una carta, un comprobante de domicilio. Puedes escanear con un teléfono. En un iPhone, la aplicación Notas y la aplicación Archivos tienen una opción para escanear. En Android, la aplicación Google Drive tiene un botón Escanear. Busca un ícono de cámara o de escanear.",
            "Para un buen escaneo: pon el papel plano sobre una superficie oscura, usa buena luz, sostén el teléfono derecho encima y deja que la aplicación recorte los bordes. Guárdalo en PDF.",
            "Ponle al archivo un nombre claro, como \"Jordan-Lee-Curriculum-2026.pdf\", no \"IMG_2034\". Sube identificaciones o documentos privados solo a sitios oficiales y borra las copias de las computadoras compartidas o de la biblioteca cuando termines."
          ],
          steps: ["Abre una herramienta para escanear: Notas o Archivos (iPhone), Google Drive (Android).", "Pon la página plana con buena luz.", "Sostén el teléfono derecho encima y escanea.", "Guárdalo en PDF con un nombre de archivo claro.", "Súbelo solo en el sitio oficial; borra las copias de las computadoras compartidas."],
          words: [["Escanear", "hacer una copia digital clara de una página de papel."], ["Subir", "enviar un archivo de tu aparato a un sitio web."], ["Nombre de archivo", "el nombre con que se guarda un archivo, que te ayuda a ti y a otros a encontrarlo."]],
          slides: [
            { title: "Escanea con tu teléfono", bullets: ["iPhone: aplicación Notas o Archivos", "Android: botón Escanear de Google Drive"] },
            { title: "Un escaneo claro", bullets: ["Página plana, superficie oscura", "Buena luz, teléfono derecho encima", "Guárdalo en PDF"] },
            { title: "Ponle nombre y cuídalo", bullets: ["\"Jordan-Lee-Curriculum-2026.pdf\", no \"IMG_2034\"", "Sube documentos privados solo a sitios oficiales", "Borra las copias de las computadoras compartidas"] }
          ],
          tryIt: "Escanea con tu teléfono una página de práctica (una carta que escribiste, no una identificación real). Guárdala en PDF y ponle un nombre de archivo claro.",
          youCanNow: "escanear un documento de papel con un teléfono y guardarlo en un PDF con nombre claro, listo para subir.",
          quickCheck: [
            { objective: "O5", q: "¿Qué nombre de archivo es el mejor para una carta que vas a subir?", options: ["IMG_2034", "escaneo", "documento1", "Jordan-Lee-Carta-Casero-2026.pdf"], answer: 3, why: "Un nombre claro dice de quién es el documento y qué es." },
            { objective: "O5", q: "Escaneaste un documento en una computadora de la biblioteca y lo subiste. ¿Qué harías después?", options: ["Dejarlo en la carpeta de Descargas", "Borrar las copias de la computadora", "Cambiarle el nombre a IMG_1", "Enviarlo por correo a todas las personas que conoces"], answer: 1, why: "Borra las copias de los documentos privados de las computadoras compartidas o de la biblioteca cuando termines." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tu huella digital y tu privacidad",
          minutes: 5,
          goal: "Revisar y limitar lo que otros pueden ver de ti en línea.",
          text: [
            "Tu huella digital es todo lo que hay de ti en internet: publicaciones, fotos, comentarios y lo que otros publican sobre ti. Los empleadores, los arrendadores y las escuelas a menudo buscan el nombre de una persona. Las publicaciones pueden quedarse en línea aunque las borres, porque otros pueden hacer capturas o compartirlas.",
            "Busca tu propio nombre en un buscador y mira qué aparece. En cada aplicación de redes sociales, abre la configuración y busca Privacidad. Elige quién puede ver tus publicaciones, quién puede etiquetarte y si los desconocidos pueden enviarte mensajes.",
            "Piensa antes de publicar: ¿te sentirías cómodo si lo viera un futuro jefe, tu familia o tu oficial de libertad condicional o de libertad vigilada? No publiques tu dirección, tus planes de viaje, tus documentos de identidad ni nada que pueda usarse para hacerse pasar por ti."
          ],
          steps: ["Busca tu nombre completo entre comillas.", "Abre la configuración de Privacidad de cada red social.", "Limita quién puede ver tus publicaciones, etiquetarte y enviarte mensajes.", "Borra u oculta las publicaciones que no querrías que viera un empleador.", "Piensa antes de cada nueva publicación."],
          words: [["Huella digital", "todo lo que hay de ti en internet, publicado por ti o por otros."], ["Configuración de privacidad", "opciones de una aplicación sobre quién puede ver tu información."], ["Etiquetar", "unir el nombre o la cuenta de una persona a una publicación o foto."]],
          slides: [
            { title: "Tu huella digital", bullets: ["Publicaciones, fotos, comentarios", "Lo que otros publican sobre ti", "Los empleadores y arrendadores buscan"] },
            { title: "Revísate", bullets: ["Busca tu nombre entre comillas", "Abre Privacidad en cada aplicación", "Limita quién te ve, te etiqueta y te escribe"] },
            { title: "Piensa antes de publicar", bullets: ["¿Estaría bien que lo viera un futuro jefe?", "Nada de dirección, planes de viaje ni fotos de identificaciones"] }
          ],
          tryIt: "Tarea final: encuentra el sitio oficial de un servicio que necesites y demuestra que es oficial, encuentra su formulario o sus pasos, escanea una página de práctica a un PDF con nombre claro, y luego busca tu propio nombre y ajusta una opción de privacidad.",
          youCanNow: "hacer un trámite real en línea protegiendo tu información privada y tu reputación.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué una publicación puede seguir en línea después de que la borras?", options: ["Otras personas pueden haberle tomado una captura de pantalla o haberla compartido", "Borrar nunca funciona en ninguna aplicación", "La biblioteca guarda una copia", "Los buscadores la imprimen"], answer: 0, why: "Otras personas pueden tomar una captura de pantalla de una publicación o compartirla antes de que la borres." },
            { objective: "O6", q: "Personas desconocidas te siguen escribiendo en una red social. ¿Qué harías?", options: ["Publicar tu dirección para que te conozcan", "Borrar tu cuenta de correo", "Abrir la configuración de Privacidad de la aplicación y limitar quién puede escribirte", "Responderles a todas"], answer: 2, why: "La configuración de privacidad te deja elegir quién puede escribirte, ver tus publicaciones y etiquetarte." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer trámites en línea con seguridad",
        questions: [
          { objective: "O4", q: "¿Qué significa normalmente un asterisco (*) junto a un campo de un formulario?", options: ["Que es opcional", "Que es obligatorio", "Que es un premio", "Que es un anuncio"], answer: 1, why: "Un asterisco marca un campo obligatorio." },
          { objective: "O4", q: "Después de enviar una solicitud en línea, debes:", options: ["Cerrar la pestaña enseguida", "Guardar el número de confirmación o una captura de pantalla", "Enviarla cinco veces más", "Borrar tu correo"], answer: 1, why: "La confirmación prueba que la enviaste." },
          { objective: "O5", q: "¿Qué nombre de archivo es mejor para subir?", options: ["IMG_2034.jpg", "scan.pdf", "Jordan-Lee-Curriculum-2026.pdf", "asdf.pdf"], answer: 2, why: "Un nombre claro te ayuda a ti y a quien lo lee a encontrarlo." },
          { objective: "O5", q: "¿Cómo puedes escanear una página con un teléfono Android?", options: ["Activar el modo avión", "Llamar a la biblioteca", "Usar la calculadora", "Con el botón Escanear de Google Drive"], answer: 3, why: "Google Drive en Android tiene un botón Escanear." },
          { objective: "O6", q: "Un amigo te etiqueta en una foto vergonzosa. ¿Qué puede ayudar?", options: ["Ignorar la configuración de privacidad", "Publicar tu dirección", "Borrar tu correo", "Usar la configuración de privacidad para controlar quién puede etiquetarte"], answer: 3, why: "La configuración de privacidad controla quién puede etiquetarte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de alfabetización digital",
    questions: [
      { objective: "O3", q: "Alfabetización digital significa:", options: ["Escribir muy rápido", "Tener el teléfono más nuevo", "Saber encontrar, juzgar y usar información y servicios en línea", "Solo jugar videojuegos"], answer: 2, why: "Se trata de usar la información y los servicios bien y con seguridad." },
      { objective: "O1", q: "Un buen lugar gratis para conectarte y pedir ayuda es:", options: ["Un enlace en un mensaje de texto", "El Wi-Fi de un desconocido", "Un anuncio emergente", "Una biblioteca pública"], answer: 3, why: "Las bibliotecas ofrecen computadoras y ayuda gratis." },
      { objective: "O1", q: "¿Dónde puedes revisar los datos actuales de Lifeline?", options: ["En cualquier anuncio", "En un comentario de redes sociales", "En lifelinesupport.org", "En un mensaje de un desconocido"], answer: 2, why: "Lifeline Support es el sitio oficial del programa." },
      { objective: "O1", q: "En una computadora pública NO debes:", options: ["Leer las noticias", "Hacer trámites bancarios", "Buscar ofertas de empleo", "Ver el horario de la biblioteca"], answer: 1, why: "Evita los trámites bancarios en computadoras compartidas." },
      { objective: "O2", q: "¿Cuál es la mejor búsqueda?", options: ["\"Necesito ayuda con mi identificación que perdí\"", "\"Ohio BMV reponer identificación\"", "\"identificación\"", "\"ayuda\""], answer: 1, why: "Las palabras clave con el estado encuentran rápido la página." },
      { objective: "O2", q: "Agregar site:.gov a una búsqueda:", options: ["Cuesta dinero", "Muestra solo anuncios", "Borra tu historial", "Muestra solo sitios web del gobierno de EE. UU."], answer: 3, why: "Limita los resultados a sitios .gov." },
      { objective: "O2", q: "¿Por qué saltarse los anuncios de arriba en los resultados?", options: ["Siempre son el sitio oficial", "Pueden ser falsos o cobrar por servicios gratuitos", "Son más lentos", "Es ilegal hacer clic en ellos"], answer: 1, why: "Los anuncios son pagados y no siempre son oficiales." },
      { objective: "O3", q: "¿Qué pregunta te ayuda a juzgar un sitio web?", options: ["¿La letra es grande?", "¿De qué color es?", "¿Quién lo hizo?", "¿Cuántas fotos tiene?"], answer: 2, why: "Saber la fuente te dice si puedes confiar." },
      { objective: "O3", q: "La dirección de un sitio cambia una letra del nombre de una empresa real. Probablemente es:", options: ["El sitio oficial", "Un sitio imitador falso", "Un sitio del gobierno", "Una biblioteca"], answer: 1, why: "Las direcciones parecidas son un truco común." },
      { objective: "O3", q: "La información falsa difundida a propósito se llama:", options: ["Huella", "Información errónea", "Confirmación", "Desinformación"], answer: 3, why: "La desinformación es a propósito; la información errónea es por error." },
      { objective: "O3", q: "Una foto impactante está circulando. Antes de compartirla, debes:", options: ["Compartirla rápido", "Revisar fuentes de noticias confiables", "Agregar tu dirección", "Imprimirla"], answer: 1, why: "Puede ser falsa o hecha con IA." },
      { objective: "O4", q: "Antes de empezar un formulario largo en línea, debes:", options: ["Reunir los datos y documentos que pide", "Cerrar todas las ventanas", "Apagar internet", "Adivinar cada respuesta"], answer: 0, why: "Estar preparado evita errores y que se acabe el tiempo." },
      { objective: "O4", q: "En una computadora, ¿qué tecla pasa a la siguiente casilla de un formulario?", options: ["Tab", "Escape", "Suprimir", "Imprimir pantalla"], answer: 0, why: "Tab pasa al siguiente campo." },
      { objective: "O4", q: "Un número de confirmación es:", options: ["Un código que prueba que se recibió tu formulario", "Tu contraseña", "Tu número de identificación", "Un anuncio"], answer: 0, why: "Prueba que el formulario se envió." },
      { objective: "O4", q: "¿Dónde es seguro escribir tu número de identificación?", options: ["Solo en el sitio oficial", "En cualquier sitio de un anuncio", "En la respuesta a un mensaje de texto", "En una publicación de redes sociales"], answer: 0, why: "Los números privados van solo a sitios oficiales." },
      { objective: "O5", q: "En un iPhone, ¿qué aplicaciones pueden escanear un documento?", options: ["Notas o Archivos", "Calculadora", "Reloj", "Clima"], answer: 0, why: "Notas y Archivos tienen una opción para escanear." },
      { objective: "O5", q: "Para un escaneo claro debes:", options: ["Poner la página plana con buena luz", "Arrugar la página", "Usar un cuarto oscuro", "Mover el teléfono"], answer: 0, why: "El papel plano y la buena luz hacen un escaneo legible." },
      { objective: "O6", q: "Tu huella digital es:", options: ["Todo lo que hay de ti en internet", "Tu talla de zapato", "La batería de tu teléfono", "Un tipo de contraseña"], answer: 0, why: "Incluye tus publicaciones y lo que otros publican sobre ti." },
      { objective: "O6", q: "¿Por qué buscar tu propio nombre?", options: ["Para ver lo que podrían encontrar los empleadores o arrendadores", "Para conseguir dinero gratis", "Para borrar internet", "Para cambiar tu contraseña"], answer: 0, why: "Muestra tu reputación en línea." },
      { objective: "O6", q: "¿Qué es seguro publicar en público?", options: ["Una foto de tu identificación", "La dirección de tu casa", "Que terminaste un curso de capacitación", "Tus fechas de viaje mientras estás fuera"], answer: 2, why: "Las buenas noticias están bien; las identificaciones, las direcciones y los planes de viaje te ponen en riesgo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      4,
      6,
      7,
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
        name: "Encontrar el sitio oficial",
        objective: "O2",
        notYet: "El sitio encontrado es un anuncio, una imitación o no es el servicio correcto.",
        meets: "Se encuentra con el buscador el sitio oficial del servicio, sin entrar en los anuncios.",
        exceeds: "Además, encuentra en pocos clics la página exacta con el formulario o los pasos."
      },
      {
        name: "Comprobar el sitio",
        objective: "O3",
        notYet: "No se da ninguna razón para confiar en el sitio.",
        meets: "Muestra cómo se comprobó el sitio, por ejemplo con una dirección .gov y la página Acerca de.",
        exceeds: "Además, revisa una segunda fuente confiable o la fecha en que se actualizó la página."
      },
      {
        name: "Escaneo y nombre del archivo",
        objective: "O5",
        notYet: "El escaneo está borroso o cortado, o el archivo se llama algo como IMG_2034.",
        meets: "Un escaneo claro en PDF de un documento de práctica, con un nombre de archivo claro.",
        exceeds: "El escaneo está bien recortado y se borran las copias de cualquier computadora compartida."
      },
      {
        name: "Proteger la información privada",
        objective: "O6",
        notYet: "Se escaneó una identificación real, o las tres líneas no dicen nada sobre la privacidad.",
        meets: "Tres líneas explican cómo se comprobó el sitio y cómo se protegió la información privada.",
        exceeds: "Además, nombra una opción de privacidad que revisó o cambió en una red social."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica de la tarea final",
      "Participantes que dicen haber completado una solicitud real en línea, por ejemplo de empleo, identificación o beneficios, en los 30 días después del curso (encuesta de seguimiento)",
      "Participantes que dicen haber evitado un sitio falso, una estafa o una publicación falsa porque la comprobaron",
      "Participantes que toman un siguiente curso, como Correo electrónico y comunicación en línea o un curso de búsqueda de empleo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con cámara, o una computadora con internet de una biblioteca o un centro de empleo",
      "Un correo gratuito que la persona revise seguido",
      "Un documento de práctica para escanear, como una carta o una página que la persona escribió (nunca una identificación real)",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Muchas personas no tienen aparato; dé el curso en una biblioteca o un laboratorio de computación, o forme parejas para que cada pareja tenga un teléfono.",
      "Use solo documentos de práctica para escanear y subir en clase, y recuerde borrar las copias de las computadoras compartidas.",
      "A quienes están en libertad condicional o libertad vigilada, recuérdeles seguir las reglas de internet o de redes sociales de sus condiciones antes de cambiar sus cuentas.",
      "Lleve capturas de pantalla de una página de búsqueda real con anuncios para que practiquen cómo distinguir los anuncios de los resultados reales.",
      "Muestre dónde están las computadoras y el Wi-Fi gratuitos más cercanos y cómo pedir ayuda al personal de la biblioteca."
    ]
  }
};
